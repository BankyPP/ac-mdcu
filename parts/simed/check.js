// node parts/simed/check.js si/data_med/data_bN.js → ตรวจไฟล์ข้อสอบ SI Med MCQ 1 ไฟล์ ต้องได้ bad 0
const fs=require("fs"),vm=require("vm"),path=require("path");
const f=process.argv[2];const QB=[];
try{vm.runInNewContext(fs.readFileSync(f,"utf8"),{QB,console});}catch(e){console.log("SYNTAX/RUN ERROR:",e.message);process.exit(1);}
const R=path.join(__dirname,"..","..");
const IM=new Set(fs.readdirSync(path.join(R,"si","img")).map(x=>x.replace(/\.(jpg|png)$/,"")));
const VOC=new Set([...fs.readFileSync(path.join(R,"si","data_med","TAGS_VOCAB.md"),"utf8").matchAll(/^- \*\*(.+?)\*\*/gm)].map(m=>m[1]));
const tf=process.argv[3];const TT=tf&&fs.existsSync(tf)?JSON.parse(fs.readFileSync(tf,"utf8")):null;
const L="ABCDE",strip=s=>String(s).replace(/<[^>]+>/g,"");let bad=0;const seen=new Set();
QB.forEach((q,i)=>{const e=[];
 ["set","ro","file","page","orig","stem","gray","opts","key","interp","why","wrong","trap","summary","guide","variants"].forEach(k=>{if(q[k]===undefined||q[k]===null||q[k]==="")e.push("missing "+k);});
 const K=q.set+"|"+q.ro+"|"+q.orig;if(seen.has(K))e.push("orig ซ้ำ "+K);seen.add(K);
 if(!Array.isArray(q.opts)||q.opts.length!==5)e.push("opts!=5");
 if(!(q.ans>=0&&q.ans<5))e.push("ans");
 const w=Object.keys(q.wrong||{});if(w.length!==4||w.includes(L[q.ans]))e.push("wrong ต้องมี 4 ตัวอักษรของช้อยผิด");
 [].concat(q.img||[],q.kimg||[]).forEach(k=>{if(!IM.has(k))e.push("ไม่พบรูป "+k);});
 if(Array.isArray(q.summary)&&q.summary.length<3)e.push("summary สั้นเกิน");
 if(Array.isArray(q.opts)){const o=q.opts.map(String);
  if(o.some(x=>/&(gt|lt|amp|quot|nbsp|#\d+);|<\/?[a-z]/i.test(x)))e.push("ช้อยมี HTML/entity");
  if(o.some(x=>/[()]| \/ | — | - |\be\.g\.|เช่น/.test(x)))e.push("ช้อยมีวงเล็บ/ขีดคั่น: "+o.filter(x=>/[()]| \/ | — | - |\be\.g\.|เช่น/.test(x)).join(" | "));
  const c=o[q.ans]||"",ot=o.filter((_,j)=>j!==q.ans),mx=Math.max(...ot.map(x=>x.length));if(c.length>mx*1.35&&c.length-mx>8)e.push("ช้อยถูกยาวกว่าช้อยอื่น: "+c);}
 const t=JSON.stringify([q.interp,q.why,q.wrong,q.trap,q.summary,q.opinion,q.variants,q.notes,q.flag]);
 if(/ข้อ\s*\d/.test(t))e.push("ห้ามเขียน ข้อ+ตัวเลข ในเฉลย/notes: "+(t.match(/.{0,15}ข้อ\s*\d+/)||[""])[0]);
 if(/`/.test(JSON.stringify(q)))e.push("มี backtick");
 if(TT){const g=TT[q.orig];if(!g||!g.length||g.length>3)e.push("แท็กต้อง 1–3");else g.forEach(x=>{if(!VOC.has(x))e.push("แท็กนอกคำศัพท์: "+x);});}
 if(e.length){bad++;console.log("orig",q.orig,"→",e.join("; "));}});
if(TT){Object.keys(TT).forEach(o=>{if(!QB.some(q=>String(q.orig)===o))console.log("แท็กเกิน:",o);});}
console.log("questions",QB.length,"bad",bad);

// node parts/check_s7475.js <part> <s75c|s75d|s74a|s74c|s74d>; was check_s79c.js parts/s79c_partN.js  → evaluates the part with the real helpers and checks each question
const fs=require("fs");const f=process.argv[2];const src=fs.readFileSync(f,"utf8");
const C=process.argv[3],SS={s75c:["RoC","S75CQ","S75CK",200,"MDCU75"],s75d:["RoD","S75DQ","S75DK",200,"MDCU75"],s74a:["RoA","S74AQ","SPING",200,"MDCU74"],s74c:["RoC","S74CQ","SPING",200,"MDCU74"],s74d:["RoD","S74DQ","SPING",200,"MDCU74"],s70a:["RoA","SPING","SPING",200,"MDCU70"],s70b:["RoB","SPING","SPING",200,"MDCU70"],s70c:["RoC","SPING","SPING",200,"MDCU70"],s71a:["RoA","SPING","SPING",200,"MDCU71"],s71b:["RoB","SPING","SPING",200,"MDCU71"],s72a:["RoA","SPING","SPING",200,"MDCU72"],s72b:["RoB","SPING","SPING",200,"MDCU72"],s72c:["RoC","SPING","SPING",200,"MDCU72"],s72d:["RoD","SPING","SPING",200,"MDCU72"],s73b:["RoB","S73BQ","SPING",200,"MDCU73"],s73d:["RoD","S73DQ","SPING",200,"MDCU73"]}[C];const KD=x=>"k"+C+"_"+x,KP=n=>"kp"+C.slice(1)+"_"+n,K2=(n,pk,pp)=>({kimg:["k"+C+"_"+n,KP(n)],kcap:["a","b"]}),K1=(n,cap)=>({kimg:[(/^s7[0-4]/.test(C)?"kp"+C.slice(1):"k"+C)+"_"+n],kcap:[cap]});const LT="ABCDE",NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x,QI=n=>"q"+C+"_"+n,KS=" (คีย์)",KI=(...n)=>n.map(i=>"k"+C+"_"+i);
const IM=new Set(fs.readdirSync(__dirname+"/../img").map(f=>f.replace(/\.(jpg|png)$/,"")));
const A=o=>{const q=Object.assign({set:SS[4],ro:SS[0],file:SS[1],kfile:SS[2],opinion:""},o);if(Array.isArray(q.wrong)){const w={};let j=0;for(let i=0;i<5;i++){if(i!==q.ans)w[LT[i]]=q.wrong[j++];}q.wrong=w;}return q;};
let QB;try{QB=eval("["+src+"]");}catch(e){console.log("SYNTAX ERROR:",e.message);process.exit(1);}
const strip=s=>String(s).replace(/<[^>]+>/g,"");const extra=s=>/[()]| \/ | — | - |\be\.g\.|เช่น/.test(s);let bad=0;
QB.forEach(q=>{const e=[];["page","page2","orig","stem","gray","opts","key","interp","why","wrong","trap","summary","guide","variants"].forEach(k=>{if(q[k]===undefined||q[k]==="")e.push("missing "+k);});
 if(!Array.isArray(q.opts)||q.opts.length!==5)e.push("opts!=5");if(!(q.ans>=0&&q.ans<5))e.push("ans");
 [].concat(q.img||[],q.kimg||[]).forEach(k=>{if(!IM.has(k))e.push("image not found "+k);});
 const w=Object.keys(q.wrong||{});if(w.length!==4)e.push("wrong!=4");
 if(Array.isArray(q.summary)&&q.summary.length<3)e.push("summary too short");
 if(Array.isArray(q.summary)&&/^\s*(ดู|ไปดู)ข้อ/.test(strip(q.summary[0])))e.push("summary starts with ดูข้อ");
 (JSON.stringify([q.summary,q.why,q.wrong,q.opinion,q.interp,q.trap]).match(/ข้อ\s*\d+/g)||[]).forEach(m=>{if(+m.replace(/\D/g,"")>SS[3])e.push("ข้อ number >51 (เลขข้อสงวนไว้สำหรับชุดนี้ 1–83): "+m);});
 const o=q.opts.map(strip),c=o[q.ans],ot=o.filter((_,j)=>j!==q.ans),mx=Math.max(...ot.map(x=>x.length));
 if(c.length>mx*1.35&&c.length-mx>8)e.push("correct option LONG: "+c);if(o.some(extra))e.push("option has ()/ — / e.g.: "+o.filter(extra).join(" | "));
 if(e.length){bad++;console.log("orig",q.orig,"→",e.join("; "));}});
console.log("questions",QB.length,"bad",bad);

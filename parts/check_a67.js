// node parts/check_a67.js parts/a67_partN.js  → evaluates the part with the real helpers and checks each question (MDCU67 RoA, file A GSUPK p147–151 + file B GSUP4K p16–20)
const fs=require("fs");const f=process.argv[2];const src=fs.readFileSync(f,"utf8");
const LT="ABCDE",NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x,QI=n=>"q67a_"+n,KI=(...n)=>n.map(i=>"k67a_"+i);
const KSA=" (คีย์ในไฟล์ GS Supplementary)",KSB=" (คีย์ในไฟล์ AC ศัลย์ 2555–2558)",KSAB=" (คีย์ในไฟล์ GS Supplementary + AC ศัลย์ 2555–2558)",KS=KSA;
const IM=new Set(fs.readdirSync(__dirname+"/../img").map(f=>f.replace(/\.(jpg|png)$/,"")));
const A=o=>{const q=Object.assign({set:"MDCU67",ro:"RoA",file:"GSUPK",opinion:""},o);if(Array.isArray(q.wrong)){const w={};let j=0;for(let i=0;i<5;i++){if(i!==q.ans)w[LT[i]]=q.wrong[j++];}q.wrong=w;}return q;};
let QB;try{QB=eval("["+src+"]");}catch(e){console.log("SYNTAX ERROR:",e.message);process.exit(1);}
const strip=s=>String(s).replace(/<[^>]+>/g,"");const extra=s=>/[()]| \/ | — | - |\be\.g\.|เช่น/.test(s);let bad=0;const seen=new Set();
QB.forEach(q=>{const e=[];["page","page2","orig","stem","gray","opts","key","interp","why","wrong","trap","summary","guide","variants","file2","page3","orig2","notes"].forEach(k=>{if(q[k]===undefined||q[k]==="")e.push("missing "+k);});
 if(seen.has(q.orig))e.push("duplicate orig in part");seen.add(q.orig);
 if(!(q.page>=147&&q.page<=151))e.push("page not in 147–151 (file A)");if(q.page2!==q.page)e.push("page2 must equal page");
 if(q.file!=="GSUPK")e.push("file must be GSUPK");if(q.file2!=="GSUP4K")e.push("file2 must be GSUP4K");
 if(q.page3!==q.page-131)e.push("page3 must be page−131 (file B p16–20)");if(q.orig2!==q.orig)e.push("orig2 must equal orig");
 if(!(typeof q.key==="string"&&(q.key.endsWith(KSB)||q.key.endsWith(KSAB)||q.key.startsWith(NK))))e.push("key must end with KSB or KSAB (or be NK)");
 if(!Array.isArray(q.opts)||q.opts.length!==5)e.push("opts!=5");if(!(q.ans>=0&&q.ans<5))e.push("ans");
 const ki=[].concat(q.kimg||[]);if(ki.length<2||!ki.some(k=>/^k67a_\d+$/.test(k))||!ki.some(k=>/^k67a_\d+b$/.test(k)))e.push("kimg must be KI(rid,\"<rid>b\") (A crop + B crop)");
 [].concat(q.img||[],q.kimg||[]).forEach(k=>{if(!IM.has(k))e.push("image not found "+k);});
 const w=Object.keys(q.wrong||{});if(w.length!==4)e.push("wrong!=4");
 if(Array.isArray(q.summary)&&q.summary.length<3)e.push("summary too short");
 if(Array.isArray(q.summary)&&/^\s*(ดู|ไปดู)ข้อ/.test(strip(q.summary[0])))e.push("summary starts with ดูข้อ");
 (JSON.stringify([q.summary,q.why,q.wrong,q.opinion,q.interp,q.trap]).match(/ข้อ\s*\d+/g)||[]).forEach(m=>{if(+m.replace(/\D/g,"")>52)e.push("ข้อ number >52 (เลขข้อสงวนไว้สำหรับชุดนี้ 1–52): "+m);});
 if(/ข้อ\s*\d+/.test(String(q.notes||""))&&(String(q.notes).match(/ข้อ\s*(\d+)/g)||[]).some(m=>+m.replace(/\D/g,"")>52))e.push("notes has ข้อ + number >52 (write เลขต้นฉบับ …)");
 if(Array.isArray(q.opts)){const o=q.opts.map(strip),c=o[q.ans],ot=o.filter((_,j)=>j!==q.ans),mx=Math.max(...ot.map(x=>x.length));
 if(c&&c.length>mx*1.35&&c.length-mx>8)e.push("correct option LONG: "+c);if(o.some(extra))e.push("option has ()/ — / e.g.: "+o.filter(extra).join(" | "));}
 if(e.length){bad++;console.log("orig",q.orig,"→",e.join("; "));}});
console.log("questions",QB.length,"bad",bad);

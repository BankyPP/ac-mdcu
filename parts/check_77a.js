// node parts/check_77a.js parts/a77_partN.js  → evaluates the part with the real helpers and checks each question
const fs=require("fs");const f=process.argv[2];const src=fs.readFileSync(f,"utf8");
const LT="ABCDE",NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x,QI=n=>"q77a_"+n,KS=" (คีย์ในไฟล์ Key 77A by MDCU78)",KI=(...n)=>n.map(i=>"k77a_"+i);
const IM=new Set(fs.readdirSync(__dirname+"/../img").map(f=>f.replace(/\.(jpg|png)$/,"")));
const A=o=>{const q=Object.assign({set:"MDCU77",ro:"RoA",file:"77AQ",kfile:"77AK",opinion:""},o);if(Array.isArray(q.wrong)){const w={};let j=0;for(let i=0;i<5;i++){if(i!==q.ans)w[LT[i]]=q.wrong[j++];}q.wrong=w;}return q;};
let QB;try{QB=eval("["+src+"]");}catch(e){console.log("SYNTAX ERROR:",e.message);process.exit(1);}
const strip=s=>String(s).replace(/<[^>]+>/g,"");const extra=s=>/[()]| \/ | — | - |\be\.g\.|เช่น/.test(s);let bad=0;
QB.forEach(q=>{const e=[];["page","page2","orig","stem","gray","opts","key","interp","why","wrong","trap","summary","guide","variants"].forEach(k=>{if(q[k]===undefined||q[k]==="")e.push("missing "+k);});
 if(!Array.isArray(q.opts)||q.opts.length!==5)e.push("opts!=5");if(!(q.ans>=0&&q.ans<5))e.push("ans");
 [].concat(q.img||[],q.kimg||[]).forEach(k=>{if(!IM.has(k))e.push("image not found "+k);});
 const NEEDIMG=["2","5","8","26","35","36","42","47","65","66","69","71"];if(NEEDIMG.includes(String(q.orig))&&!q.img)e.push("missing img (question has a figure)");if(q.kimg)e.push("kimg not used in 77A (key file has no images)");if(String(q.orig)==="67")e.push("orig 67 does not exist");
 const w=Object.keys(q.wrong||{});if(w.length!==4)e.push("wrong!=4");
 if(Array.isArray(q.summary)&&q.summary.length<3)e.push("summary too short");
 if(Array.isArray(q.summary)&&/^\s*(ดู|ไปดู)ข้อ/.test(strip(q.summary[0])))e.push("summary starts with ดูข้อ");
 const o=q.opts.map(strip),c=o[q.ans],ot=o.filter((_,j)=>j!==q.ans),mx=Math.max(...ot.map(x=>x.length));
 if(c.length>mx*1.35&&c.length-mx>8)e.push("correct option LONG: "+c);if(o.some(extra))e.push("option has ()/ — / e.g.: "+o.filter(extra).join(" | "));
 if(e.length){bad++;console.log("orig",q.orig,"→",e.join("; "));}});
console.log("questions",QB.length,"bad",bad);

// node parts/check_71b.js parts/b71_partN.js  → evaluates the part with the real helpers and checks each question
const fs=require("fs");const f=process.argv[2];const src=fs.readFileSync(f,"utf8");
const LT="ABCDE",NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x,QI=n=>"q71b_"+n,KS=" (คีย์ในไฟล์ GS Supplementary)",KI=(...n)=>n.map(i=>"k71b_"+i);
const IM=new Set(fs.readdirSync(__dirname+"/../img").map(f=>f.replace(/\.(jpg|png)$/,"")));
const A=o=>{const q=Object.assign({set:"MDCU71",ro:"RoB",file:"GSUPK",opinion:""},o);if(Array.isArray(q.wrong)){const w={};let j=0;for(let i=0;i<5;i++){if(i!==q.ans)w[LT[i]]=q.wrong[j++];}q.wrong=w;}return q;};
let QB;try{QB=eval("["+src+"]");}catch(e){console.log("SYNTAX ERROR:",e.message);process.exit(1);}
const strip=s=>String(s).replace(/<[^>]+>/g,"");const extra=s=>/[()]| \/ | — | - |\be\.g\.|เช่น/.test(s);let bad=0;
QB.forEach(q=>{const e=[];["page","page2","orig","stem","gray","opts","key","interp","why","wrong","trap","summary","guide","variants"].forEach(k=>{if(q[k]===undefined||q[k]==="")e.push("missing "+k);});
 if(q.page!==q.page2)e.push("page2 must equal page");if(q.kfile)e.push("kfile not allowed");
 if(!Array.isArray(q.opts)||q.opts.length!==5)e.push("opts!=5");if(!(q.ans>=0&&q.ans<5))e.push("ans");
 if(typeof q.key==="string"&&q.key!==NK&&!q.key.startsWith(NK)&&!q.key.endsWith(KS))e.push("key must end with KS or be NK/RC");
 [].concat(q.img||[],q.kimg||[]).forEach(k=>{if(!IM.has(k))e.push("image not found "+k);});
 const w=Object.keys(q.wrong||{});if(w.length!==4)e.push("wrong!=4");
 if(Array.isArray(q.summary)&&q.summary.length<3)e.push("summary too short");
 if(Array.isArray(q.summary)&&/^\s*(ดู|ไปดู)ข้อ/.test(strip(q.summary[0])))e.push("summary starts with ดูข้อ");
 (JSON.stringify([q.summary,q.why,q.wrong,q.opinion,q.interp,q.trap]).match(/ข้อ\s*\d+/g)||[]).forEach(m=>{if(+m.replace(/\D/g,"")>32)e.push("ข้อ number >32 (เลขข้อสงวนไว้สำหรับชุดนี้ rid 1–32): "+m);});
 const o=q.opts.map(strip),c=o[q.ans],ot=o.filter((_,j)=>j!==q.ans),mx=Math.max(...ot.map(x=>x.length));
 if(c.length>mx*1.35&&c.length-mx>8)e.push("correct option LONG: "+c);if(o.some(extra))e.push("option has ()/ — / e.g.: "+o.filter(extra).join(" | "));
 if(e.length){bad++;console.log("orig",q.orig,"→",e.join("; "));}});
console.log("questions",QB.length,"bad",bad);

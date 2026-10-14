// node parts/asm_ob.js → data_obgyn/data_b1..3.js + topics.js + tags.js
const fs=require("fs"),P=__dirname+"/",D=__dirname+"/../data_obgyn/";
const LT="ABCDE",NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x;
const SETS=[["b",3,"O78BQ","O78BK","78B_OBGYN_AC78_MCQ_OBGYN_Rotate_B.pdf","Key_78B_OBGYN_AC_MCQs_OBGYN_rotate_B.pdf"],["c",5,"O78CQ","O78CK","78C_OBGYN_AC78_MCQ_OBGYN_rotate_C.pdf","KEY_78C_OBGYN_AC_MCQs_OBGYN_rotate_C.pdf"],["d",4,"O78DQ","O78DQ","78D_OBGYN_AC_MCQs_OBGYN_rotate_D_2.pdf","เฉลย AI ท้ายไฟล์เดียวกัน (Key_78D อีกไฟล์ว่าง)"]];
const TOP={},TAG={};let n=0;
SETS.forEach(([R,np,fq,fk,nq,nk],si)=>{
  const KS={b:" (คีย์ในไฟล์ Key 78B)",c:" (คีย์ในไฟล์ KEY 78C)",d:" (เฉลย AI ท้ายไฟล์ 78D)"}[R],KI=(...n)=>n.map(i=>"kob78"+R+"_"+i),QI=n=>"qob78"+R+"_"+n;
  const A=o=>{const q=Object.assign({set:"MDCU78",ro:"Ro"+R.toUpperCase(),file:fq,kfile:fk,opinion:""},o);if(Array.isArray(q.wrong)){const w={};let j=0;for(let i=0;i<5;i++){if(i!==q.ans)w[LT[i]]=q.wrong[j++];}q.wrong=w;}return q;};
  let all=[];for(let i=1;i<=np;i++)all=all.concat(eval("["+fs.readFileSync(P+"ob78"+R+"_p"+i+".js","utf8")+"]"));
  // stable key order: set,ro,file,kfile first
  const out=all.map(q=>{const k=q.set+"|"+q.ro+"|"+q.orig;if(TOP[k])throw "dup key "+k;TOP[k]=q.tp;TAG[k]=q.tg;const o={};["set","ro","file","kfile"].forEach(x=>o[x]=q[x]);Object.keys(q).forEach(x=>{if(!(x in o)&&x!=="tp"&&x!=="tg")o[x]=q[x];});return o;});
  n+=out.length;
  fs.writeFileSync(D+"data_b"+(si+1)+".js","/* OB-GYN MDCU78 Ro"+R.toUpperCase()+" — "+fq+" ("+nq+") + "+fk+" ("+nk+") ; "+out.length+" ข้อ */\nQB.push(\n"+out.map(o=>"  "+JSON.stringify(o)).join(",\n")+"\n);\n");
  console.log(R,out.length);});
const J=o=>"{\n"+Object.entries(o).map(([k,v])=>JSON.stringify(k)+":"+JSON.stringify(v)).join(",\n")+"\n}";
fs.writeFileSync(D+"topics.js","/* OB-GYN topic per question — key = set|ro|orig */\nW.TOPIC="+J(TOP)+";\n");
fs.writeFileSync(D+"tags.js","/* broad chapter tags (1–4 per question, vocabulary in data_obgyn/TAGS_VOCAB.md) — key = set|ro|orig */\nW.TAGS="+J(TAG)+";\n");
console.log("total",n);

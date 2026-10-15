// node parts/asm_ob79.js → data_obgyn/data_b4.js (79B) + adds 79B keys to topics.js / tags.js / dups.js (does not touch 78 entries)
const fs=require("fs"),P=__dirname+"/",D=__dirname+"/../data_obgyn/";
const LT="ABCDE",NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x;
const KS=" (คีย์ในไฟล์ Key 79B)",KI=(...n)=>n.map(i=>"kob79b_"+i),QI=n=>"qob79b_"+n;
const A=o=>{const q=Object.assign({set:"MDCU79",ro:"RoB",file:"O79BQ",kfile:"O79BK",opinion:""},o);if(Array.isArray(q.wrong)){const w={};let j=0;for(let i=0;i<5;i++){if(i!==q.ans)w[LT[i]]=q.wrong[j++];}q.wrong=w;}return q;};
let all=[];for(const i of [1,2])all=all.concat(eval("["+fs.readFileSync(P+"ob79b_p"+i+".js","utf8")+"]"));
const TOP={},TAG={};
const out=all.map(q=>{const k=q.set+"|"+q.ro+"|"+q.orig;if(TOP[k])throw "dup key "+k;TOP[k]=q.tp;TAG[k]=q.tg;const o={};["set","ro","file","kfile"].forEach(x=>o[x]=q[x]);Object.keys(q).forEach(x=>{if(!(x in o)&&x!=="tp"&&x!=="tg")o[x]=q[x];});return o;});
fs.writeFileSync(D+"data_b4.js","/* OB-GYN MDCU79 RoB — O79BQ (79B_OBGYN_AC79_MCQs_OBGYN_Ro_B.pdf) + O79BK (Key_79B_OBGYN_AC79_MCQs_OBGYN_Ro_B.pdf) ; "+out.length+" ข้อ */\nQB.push(\n"+out.map(o=>"  "+JSON.stringify(o)).join(",\n")+"\n);\n");
// topics / tags: replace the closing "\n};" with new lines (idempotent: drop old MDCU79|RoB lines first)
const add=(f,obj)=>{let s=fs.readFileSync(D+f,"utf8");s=s.split("\n").filter(l=>!l.startsWith("\"MDCU79|RoB|")).join("\n");
  s=s.replace(/\n\};\s*$/,",\n"+Object.entries(obj).map(([k,v])=>JSON.stringify(k)+":"+JSON.stringify(v)).join(",\n")+"\n};\n").replace(/,,\n/,",\n");fs.writeFileSync(D+f,s);};
add("topics.js",TOP);add("tags.js",TAG);
// dups: union new groups (parts/dups_ob79.json) with existing groups so every key sits in one group
const G=JSON.parse(fs.readFileSync(P+"dups_ob79.json","utf8"));global.W={};eval(fs.readFileSync(D+"dups.js","utf8"));
let groups=W.DUP.map(g=>g.filter(k=>!k.startsWith("MDCU79|RoB|"))).filter(g=>g.length>1);
const known=new Set();["data_b1","data_b2","data_b3"].forEach(f=>{global.QB=[];eval(fs.readFileSync(D+f+".js","utf8"));QB.forEach(q=>known.add(q.set+"|"+q.ro+"|"+q.orig));});Object.keys(TOP).forEach(k=>known.add(k));
G.forEach(g=>{g.forEach(k=>{if(!known.has(k))throw "unknown key in dups_ob79.json: "+k;});const hit=groups.filter(x=>x.some(k=>g.includes(k)));const u=[...new Set([].concat(...hit,g))];groups=groups.filter(x=>!hit.includes(x));groups.push(u);});
const head=fs.readFileSync(D+"dups.js","utf8").split("\n")[0];
fs.writeFileSync(D+"dups.js",head+"\nW.DUP=[\n"+groups.map(g=>JSON.stringify(g)).join(",\n")+"\n];\n");
console.log("79B",out.length,"· dup groups",groups.length,"· keys",groups.reduce((a,g)=>a+g.length,0));

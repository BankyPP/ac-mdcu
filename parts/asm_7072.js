// node parts/asm_7072.js <b73|c73>  → assembles parts/<code>_partN.js into the data file (70–72 Gen Sx — 25 Oct 2026)
const fs=require("fs"),path=require("path");const R=path.join(__dirname,"..");
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x,LT="ABCDE";
const KS0=" (คีย์ในไฟล์ GS Supplementary)",F="GSUPK",H="01_2_MCQs_Key_1.pdf (GENERAL SURGERY SUPPLEMENTARY MATERIAL)";
const SETS={
 a72:{set:"MDCU72",ro:"RoA",file:F,q:"q72a_",k:"k72a_",KS:KS0,out:"data/data_b21.js",head:"MDCU72 RoA — GSUPK "+H+" หน้า 2–7: recall + เฉลยลายมือในไฟล์เดียว"},
 b72:{set:"MDCU72",ro:"RoB",file:F,q:"q72b_",k:"k72b_",KS:KS0,out:"data/data_b22.js",head:"MDCU72 RoB — GSUPK "+H+" หน้า 8–14"},
 c72:{set:"MDCU72",ro:"RoC",file:F,q:"q72c_",k:"k72c_",KS:KS0,out:"data/data_b23.js",head:"MDCU72 RoC — GSUPK "+H+" หน้า 15–22"},
 a71:{set:"MDCU71",ro:"RoA",file:F,q:"q71a_",k:"k71a_",KS:KS0,out:"data/data_b24.js",head:"MDCU71 RoA (R1) — GSUPK "+H+" หน้า 23–34"},
 b71:{set:"MDCU71",ro:"RoB",file:F,q:"q71b_",k:"k71b_",KS:KS0,out:"data/data_b25.js",head:"MDCU71 RoB (R2) — GSUPK "+H+" หน้า 35–40"},
 a70:{set:"MDCU70",ro:"RoA",file:F,q:"q70a_",k:"k70a_",KS:KS0,out:"data/data_b26.js",head:"MDCU70 RoA (R1) — GSUPK "+H+" หน้า 41–52"},
 b70:{set:"MDCU70",ro:"RoB",file:F,q:"q70b_",k:"k70b_",KS:KS0,out:"data/data_b27.js",head:"MDCU70 RoB (R2) — GSUPK "+H+" หน้า 53–60"},
 c70:{set:"MDCU70",ro:"RoC",file:F,q:"q70c_",k:"k70c_",KS:KS0,out:"data/data_b28.js",head:"MDCU70 RoC (ปก R3; หัวเอกสารเขียน Rotate A) — GSUPK "+H+" หน้า 61–73"}};
const code=process.argv[2],S=SETS[code];if(!S){console.log("unknown set");process.exit(1);}
const KS=S.KS,KI=(...n)=>n.map(i=>S.k+i),QI=n=>S.q+n;
const base={set:S.set,ro:S.ro,file:S.file};if(S.kfile!==undefined)base.kfile=S.kfile;
const A=o=>{const q=Object.assign({},base,{opinion:""},o);if(Array.isArray(q.wrong)){const w={};let j=0;for(let i=0;i<5;i++){if(i!==q.ans)w[LT[i]]=q.wrong[j++];}q.wrong=w;}return q;};
const parts=fs.readdirSync(__dirname).filter(f=>f.startsWith(code+"_part")&&f.endsWith(".js")).sort((a,b)=>parseInt(a.replace(/\D/g,""))-parseInt(b.replace(/\D/g,"")));
let QB=[];parts.forEach(f=>{const src=fs.readFileSync(path.join(__dirname,f),"utf8");QB=QB.concat(eval("["+src+"]"));});
// in-set rid (1..N) in "ข้อ n" → global rid = offset + n (offset = questions in data_b<M>.js with M < this file's number, same ward folder)
const dir=path.dirname(path.join(R,S.out)),myN=+path.basename(S.out).replace(/\D/g,"");let off=0;
fs.readdirSync(dir).filter(f=>/^data_b\d+\.js$/.test(f)&&+f.replace(/\D/g,"")<myN).forEach(f=>{const B=[];new Function("QB",fs.readFileSync(path.join(dir,f),"utf8"))(B);off+=B.filter(q=>!q.notice).length;});
const RX=/(ข้อ(?:ถัดไป)?\s*)(\d[\d,\s]*)/g,SKIP=new Set(["stem","gray","opts","orig","key","set","ro","file","kfile","img","kimg","imgNote","page","page2","ans","guide"]);
const fix=v=>typeof v==="string"?v.replace(RX,(m,p,nums)=>p+nums.replace(/\d+/g,t=>{const n=+t;if(n>=1&&n<=QB.length)return String(n+off);console.log("ref out of range:",m.trim());return t;})):Array.isArray(v)?v.map(fix):(v&&typeof v==="object")?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,fix(x)])):v;
QB=QB.map(q=>Object.fromEntries(Object.entries(q).map(([k,v])=>[k,SKIP.has(k)?v:fix(v)])));
const seen=new Set();QB.forEach(q=>{const k=q.orig;if(seen.has(k))console.log("DUPLICATE orig",k);seen.add(k);});
const out="/* "+S.head+" ; "+QB.length+" ข้อ ; rid "+(off+1)+"–"+(off+QB.length)+" (ข้อลำดับ n ในชุด = rid n+"+off+") — ประกอบจาก parts/"+code+"_part*.js ด้วย parts/asm_7072.js */\nQB.push(\n"+QB.map(q=>"  "+JSON.stringify(q)).join(",\n")+"\n);\n";
fs.writeFileSync(path.join(R,S.out),out);console.log(parts.join(","),"→",S.out,QB.length,"questions");

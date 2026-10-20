// node parts/asm_7479.js <a74|c74|d74|c79|d79|s79c>  → assembles parts/<code>_partN.js into the data file (74A/C/D, 79C/D Gen Sx, 79C Subspe — 20 Oct 2026)
const fs=require("fs"),path=require("path");const R=path.join(__dirname,"..");
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x,LT="ABCDE";
const K74=" (คีย์ลายมือในไฟล์ Key 74ACD)";
const SETS={
 a74:{set:"MDCU74",ro:"RoA",file:"74ACDK",q:"q74a_",k:"k74a_",KS:K74,out:"data/data_b14.js",head:"MDCU74 RoA — 74ACDK (Key_74ACD_Gen_Sx_AC_MCQ_GEN_Sx_MDCU74.pdf หน้า 1–6: recall + เฉลยลายมือในไฟล์เดียว)"},
 c74:{set:"MDCU74",ro:"RoC",file:"74ACDK",q:"q74c_",k:"k74c_",KS:K74,out:"data/data_b15.js",head:"MDCU74 RoC — 74ACDK (Key_74ACD หน้า 7–11: recall + เฉลยลายมือ)"},
 d74:{set:"MDCU74",ro:"RoD",file:"74ACDK",q:"q74d_",k:"k74d_",KS:K74,out:"data/data_b16.js",head:"MDCU74 RoD — 74ACDK (Key_74ACD หน้า 12–17: recall + เฉลยลายมือ)"},
 c79:{set:"MDCU79",ro:"RoC",file:"79CQ",kfile:"79CK",q:"q79c_",k:"k79c_",KS:" (คีย์ในไฟล์ Key 79C)",out:"data/data_b17.js",head:"MDCU79 RoC — 79CQ (79C_Gen_Sx_AC_Sx_MCQ_79_Ro_C_MDCU.pdf หน้า 1–14) + 79CK (Key_79C_Gen_Sx_AC_Sx_MCQ_79_Ro_C_MDCU.pdf หน้า 1–9)"},
 d79:{set:"MDCU79",ro:"RoD",file:"79DQ",kfile:"",q:"q79d_",k:"k79d_",KS:"",out:"data/data_b18.js",head:"MDCU79 RoD — 79DQ (79D_Gen_Sx_AC_Sx_MCQ_79_Ro_D_MDCU.pdf หน้า 1–13), ไม่มีไฟล์เฉลย"},
 s79c:{set:"MDCU79",ro:"RoC",file:"79CQ",kfile:"79CK",q:"qs79c_",k:"ks79c_",KS:" (คีย์ในช่องเฉลยของไฟล์โจทย์ 79C)",out:"data_subspe/data_b1.js",head:"Subspe Sx MDCU79 RoC — 79CQ (79C_Gen_Sx_AC_Sx_MCQ_79_Ro_C_MDCU.pdf หน้า 15–26 ส่วน Subspe) + 79CK (Key 79C หน้า 10–14 ส่วน Subspe ว่าง)"}};
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
const out="/* "+S.head+" ; "+QB.length+" ข้อ ; rid "+(off+1)+"–"+(off+QB.length)+" (ข้อลำดับ n ในชุด = rid n+"+off+")" — ประกอบจาก parts/"+code+"_part*.js ด้วย parts/asm_7479.js */\nQB.push(\n"+QB.map(q=>"  "+JSON.stringify(q)).join(",\n")+"\n);\n";
fs.writeFileSync(path.join(R,S.out),out);console.log(parts.join(","),"→",S.out,QB.length,"questions");

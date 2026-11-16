// node parts/asm_6965.js <code>  → assembles parts/<code>_partN.js into the data file (MCQ MDCU69–65 Gen Sx + Subspe — 16 Nov 2026)
const fs=require("fs"),path=require("path");const R=path.join(__dirname,"..");
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x,LT="ABCDE";
const KSA=" (คีย์ในไฟล์ GS Supplementary)",KSB=" (คีย์ในไฟล์ AC ศัลย์ 2555–2558)",KSAB=" (คีย์ในไฟล์ GS Supplementary + AC ศัลย์ 2555–2558)";
const HA="GSUPK = 01_2_MCQs_Key_1.pdf (GENERAL SURGERY SUPPLEMENTARY MATERIAL)",HB="GSUP4K = 01_5_MCQs_Key_4.pdf (ไฟล์รวม AC ศัลย์ 2555–2558)";
const SETS={
 a69:{set:"MDCU69",ro:"RoA",file:"GSUPK",q:"q69a_",k:"k69a_",KS:KSA,out:"data/data_b29.js",head:"MDCU69 RoA Gen Sx — หน้า A 74–92 · "+HA+" : recall + เฉลยในไฟล์"},
 c69:{set:"MDCU69",ro:"RoC",file:"GSUPK",q:"q69c_",k:"k69c_",KS:KSA,out:"data/data_b30.js",head:"MDCU69 RoC Gen Sx — หน้า A 93–112 · "+HA+" : recall + เฉลยในไฟล์"},
 a68:{set:"MDCU68",ro:"RoA",file:"GSUPK",q:"q68a_",k:"k68a_",KS:KSA,out:"data/data_b31.js",head:"MDCU68 RoA Gen Sx — หน้า A 113–127 + B 1–15 · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 c68:{set:"MDCU68",ro:"RoC",file:"GSUPK",q:"q68c_",k:"k68c_",KS:KSA,out:"data/data_b32.js",head:"MDCU68 RoC Gen Sx — หน้า A 128–135 · "+HA+" : recall + เฉลยในไฟล์"},
 d68:{set:"MDCU68",ro:"RoD",file:"GSUPK",q:"q68d_",k:"k68d_",KS:KSA,out:"data/data_b33.js",head:"MDCU68 RoD Gen Sx — หน้า A 136–145 · "+HA+" : recall + เฉลยในไฟล์"},
 a67:{set:"MDCU67",ro:"RoA",file:"GSUPK",q:"q67a_",k:"k67a_",KS:KSA,out:"data/data_b34.js",head:"MDCU67 RoA Gen Sx — หน้า A 146–151 + B 16–20 · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 b67:{set:"MDCU67",ro:"RoB",file:"GSUPK",q:"q67b_",k:"k67b_",KS:KSA,out:"data/data_b35.js",head:"MDCU67 RoB Gen Sx — หน้า A 152–159 + B 71–77 · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 c67:{set:"MDCU67",ro:"RoC",file:"GSUPK",q:"q67c_",k:"k67c_",KS:KSA,out:"data/data_b36.js",head:"MDCU67 RoC Gen Sx — หน้า A 160–167 + B 118–124 · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 d67:{set:"MDCU67",ro:"RoD",file:"GSUPK",q:"q67d_",k:"k67d_",KS:KSA,out:"data/data_b37.js",head:"MDCU67 RoD Gen Sx — หน้า A 168–174 + B 180–185 · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 a66:{set:"MDCU66",ro:"RoA",file:"GSUPK",q:"q66a_",k:"k66a_",KS:KSA,out:"data/data_b38.js",head:"MDCU66 RoA Gen Sx — หน้า A 175–181 + B 221–226 (หัวกระดาษเขียน Rotate 2/2556 แต่อยู่ช่วง R1) · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 b66:{set:"MDCU66",ro:"RoB",file:"GSUPK",q:"q66b_",k:"k66b_",KS:KSA,out:"data/data_b39.js",head:"MDCU66 RoB Gen Sx — หน้า A 182–186 + B 233–241 · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 c66:{set:"MDCU66",ro:"RoC",file:"GSUPK",q:"q66c_",k:"k66c_",KS:KSA,out:"data/data_b40.js",head:"MDCU66 RoC Gen Sx — หน้า A 187–190 + B 240–244 · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 d66:{set:"MDCU66",ro:"RoD",file:"GSUPK",q:"q66d_",k:"k66d_",KS:KSA,out:"data/data_b41.js",head:"MDCU66 RoD Gen Sx — หน้า A 191–195 + B 250–253 · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 a65:{set:"MDCU65",ro:"RoA",file:"GSUPK",q:"q65a_",k:"k65a_",KS:KSA,out:"data/data_b42.js",head:"MDCU65 RoA Gen Sx — หน้า A 196–207 + B 259–266 (ข้อสอบศัลย์รวม — ส่วน Gen) · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 b65:{set:"MDCU65",ro:"RoB",file:"GSUPK",q:"q65b_",k:"k65b_",KS:KSA,out:"data/data_b43.js",head:"MDCU65 RoB Gen Sx — หน้า A 208–222 + B 269–280 (ส่วน Gen) · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 c65:{set:"MDCU65",ro:"RoC",file:"GSUPK",q:"q65c_",k:"k65c_",KS:KSA,out:"data/data_b44.js",head:"MDCU65 RoC Gen Sx — หน้า A 223–227 + B 285–292 (ส่วน Gen) · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 sa67:{set:"MDCU67",ro:"RoA",file:"GSUP4K",q:"qs67a_",k:"ks67a_",KS:KSB,out:"data_subspe/data_b2.js",head:"MDCU67 RoA Subspe — หน้า B 52–70 · "+HB+" : recall + เฉลยในไฟล์"},
 sb67:{set:"MDCU67",ro:"RoB",file:"GSUP4K",q:"qs67b_",k:"ks67b_",KS:KSB,out:"data_subspe/data_b3.js",head:"MDCU67 RoB Subspe — หน้า B 78–85 · "+HB+" : recall + เฉลยในไฟล์"},
 sc67:{set:"MDCU67",ro:"RoC",file:"GSUP4K",q:"qs67c_",k:"ks67c_",KS:KSB,out:"data_subspe/data_b4.js",head:"MDCU67 RoC Subspe — หน้า B 125–150 · "+HB+" : recall + เฉลยในไฟล์"},
 sd67:{set:"MDCU67",ro:"RoD",file:"GSUP4K",q:"qs67d_",k:"ks67d_",KS:KSB,out:"data_subspe/data_b5.js",head:"MDCU67 RoD Subspe — หน้า B 186–190 · "+HB+" : recall + เฉลยในไฟล์"},
 sa66:{set:"MDCU66",ro:"RoA",file:"GSUP4K",q:"qs66a_",k:"ks66a_",KS:KSB,out:"data_subspe/data_b6.js",head:"MDCU66 RoA Subspe — หน้า B 227–229 · "+HB+" : recall + เฉลยในไฟล์"},
 sb66:{set:"MDCU66",ro:"RoB",file:"GSUP4K",q:"qs66b_",k:"ks66b_",KS:KSB,out:"data_subspe/data_b7.js",head:"MDCU66 RoB Subspe — หน้า B 237–241 · "+HB+" : recall + เฉลยในไฟล์"},
 sc66:{set:"MDCU66",ro:"RoC",file:"GSUP4K",q:"qs66c_",k:"ks66c_",KS:KSB,out:"data_subspe/data_b8.js",head:"MDCU66 RoC Subspe — หน้า B 245–246 · "+HB+" : recall + เฉลยในไฟล์"},
 sd66:{set:"MDCU66",ro:"RoD",file:"GSUP4K",q:"qs66d_",k:"ks66d_",KS:KSB,out:"data_subspe/data_b9.js",head:"MDCU66 RoD Subspe — หน้า B 254–257 (หัวหน้าเขียน 4/2557 แต่อยู่ช่วง 4/2556) · "+HB+" : recall + เฉลยในไฟล์"},
 sa65:{set:"MDCU65",ro:"RoA",file:"GSUPK",q:"qs65a_",k:"ks65a_",KS:KSA,out:"data_subspe/data_b10.js",head:"MDCU65 RoA Subspe — หน้า A 196–207 + B 259–266 (ข้อสอบศัลย์รวม — ส่วน Subspe) · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 sb65:{set:"MDCU65",ro:"RoB",file:"GSUPK",q:"qs65b_",k:"ks65b_",KS:KSA,out:"data_subspe/data_b11.js",head:"MDCU65 RoB Subspe — หน้า A 208–222 + B 269–280 (ส่วน Subspe) · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"},
 sc65:{set:"MDCU65",ro:"RoC",file:"GSUPK",q:"qs65c_",k:"ks65c_",KS:KSA,out:"data_subspe/data_b12.js",head:"MDCU65 RoC Subspe — หน้า A 223–227 + B 285–292 (ส่วน Subspe) · "+HA+" · "+HB+" : recall + เฉลยในไฟล์"}};
const code=process.argv[2],S=SETS[code];if(!S){console.log("unknown set");process.exit(1);}
const KS=S.KS,KI=(...n)=>n.map(i=>S.k+i),QI=n=>S.q+n;
const base={set:S.set,ro:S.ro,file:S.file};if(S.kfile!==undefined)base.kfile=S.kfile;
const A=o=>{const q=Object.assign({},base,{opinion:""},o);if(Array.isArray(q.wrong)){const w={};let j=0;for(let i=0;i<5;i++){if(i!==q.ans)w[LT[i]]=q.wrong[j++];}q.wrong=w;}return q;};
const parts=fs.readdirSync(__dirname).filter(f=>f.startsWith(code+"_part")&&f.endsWith(".js")).sort((a,b)=>parseInt(a.replace(/\D/g,""))-parseInt(b.replace(/\D/g,"")));
let QB=[];parts.forEach(f=>{const src=fs.readFileSync(path.join(__dirname,f),"utf8");QB=QB.concat(eval("["+src+"]"));});
// in-set rid (1..N) in "ข้อ n" → global rid = offset + n (offset = questions in data_b<M>.js with M < this file's number, same ward folder)
const dir=path.dirname(path.join(R,S.out)),myN=+path.basename(S.out).replace(/\D/g,"");let off=0;
fs.readdirSync(dir).filter(f=>/^data_b\d+\.js$/.test(f)&&+f.replace(/\D/g,"")<myN).forEach(f=>{const B=[];new Function("QB",fs.readFileSync(path.join(dir,f),"utf8"))(B);off+=B.filter(q=>!q.notice).length;});
const RX=/(ข้อ(?:ถัดไป)?\s*)(\d[\d,\s]*)/g,SKIP=new Set(["stem","gray","opts","orig","key","set","ro","file","kfile","file2","page3","orig2","img","kimg","imgNote","page","page2","ans","guide"]);
const fix=v=>typeof v==="string"?v.replace(RX,(m,p,nums)=>p+nums.replace(/\d+/g,t=>{const n=+t;if(n>=1&&n<=QB.length)return String(n+off);console.log("ref out of range:",m.trim());return t;})):Array.isArray(v)?v.map(fix):(v&&typeof v==="object")?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,fix(x)])):v;
QB=QB.map(q=>Object.fromEntries(Object.entries(q).map(([k,v])=>[k,SKIP.has(k)?v:fix(v)])));
const seen=new Set();QB.forEach(q=>{const k=q.orig;if(seen.has(k))console.log("DUPLICATE orig",k);seen.add(k);});
const out="/* "+S.head+" ; "+QB.length+" ข้อ ; rid "+(off+1)+"–"+(off+QB.length)+" (ข้อลำดับ n ในชุด = rid n+"+off+") — ประกอบจาก parts/"+code+"_part*.js ด้วย parts/asm_6965.js */\nQB.push(\n"+QB.map(q=>"  "+JSON.stringify(q)).join(",\n")+"\n);\n";
fs.writeFileSync(path.join(R,S.out),out);console.log(parts.join(","),"→",S.out,QB.length,"questions");

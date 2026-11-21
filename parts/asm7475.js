// node parts/asm7475.js <s75c|s75d|s74a|s74c|s74d> (21 Nov 2026; from asm76.js) (copy of asm_7479.js; strips _t/_g into data_subspe/topics.js + tags.js) — old header: node parts/asm_7479.js <a74|c74|d74|c79|d79|s79c>  → assembles parts/<code>_partN.js into the data file (74A/C/D, 79C/D Gen Sx, 79C Subspe — 20 Oct 2026)
const fs=require("fs"),path=require("path");const R=path.join(__dirname,"..");
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x,LT="ABCDE";
const K74=" (คีย์ลายมือในไฟล์ Key 74ACD)";
const SETS={
 s75c:{set:"MDCU75",ro:"RoC",file:"S75CQ",kfile:"S75CK",q:"qs75c_",k:"ks75c_",KS:" (คีย์ COOK/GUN)",out:"data_subspe/data_b14.js",head:"Subspe Sx MDCU75 RoC — S75CQ (AC_75C_MCQ_Sx_Subspecialty_MDCU75_Rotate_C.pdf) + S75CK (Key_75C_MCQ_Solution…by_COOKGUN_MDCU76.pdf) + SPING (Key_P_Ing_Subspecialty_Sx.pdf หน้า 87–92)"},
 s75d:{set:"MDCU75",ro:"RoD",file:"S75DQ",kfile:"S75DK",q:"qs75d_",k:"ks75d_",KS:" (คีย์ Maimai &amp; Ig)",out:"data_subspe/data_b15.js",head:"Subspe Sx MDCU75 RoD — S75DQ (AC_75D_MCQ_Subspecialty_Sx_MDCU75_Rotate_D.pdf) + S75DK (Key_75D_MCQ_Solution…by_MDCU76_Maimai_and_Ig.pdf)"},
 s74a:{set:"MDCU74",ro:"RoA",file:"S74AQ",kfile:"SPING",q:"qs74a_",k:"kp74a_",KS:" (คีย์ลายมือ P'Ing)",out:"data_subspe/data_b16.js",head:"Subspe Sx MDCU74 RoA — S74AQ (AC_74A_MCQ_Subspecialty_Surgery_MDCU_74_Rotation_A.pdf) + SPING (Key_P_Ing_Subspecialty_Sx.pdf หน้า 71–75)"},
 s74c:{set:"MDCU74",ro:"RoC",file:"S74CQ",kfile:"SPING",q:"qs74c_",k:"kp74c_",KS:" (คีย์ลายมือ P'Ing)",out:"data_subspe/data_b17.js",head:"Subspe Sx MDCU74 RoC — S74CQ (AC_74C_MCQ_MDCU_74_Rotate_C_MCQ_-_Sx_Subspecialty.pdf) + SPING (Key_P_Ing_Subspecialty_Sx.pdf หน้า 76–80)"},
 s74d:{set:"MDCU74",ro:"RoD",file:"S74DQ",kfile:"SPING",q:"qs74d_",k:"kp74d_",KS:" (คีย์ลายมือ P'Ing)",out:"data_subspe/data_b18.js",head:"Subspe Sx MDCU74 RoD — S74DQ (AC_74D_MCQ_Subspe_MCQ_Rotate_D.pdf) + SPING (Key_P_Ing_Subspecialty_Sx.pdf หน้า 81–86)"}};
const code=process.argv[2],S=SETS[code];if(!S){console.log("unknown set");process.exit(1);}
const KQ=" (เฉลยในช่องเฉลยของไฟล์โจทย์ AC Sx MCQ 79 Ro C)";const KD=x=>S.k+x,KS=S.KS,KI=(...n)=>n.map(i=>S.k+i),QI=n=>S.q+n;
const KP=n=>"kp"+code.slice(1)+"_"+n,K2=(n,pk,pp)=>({kimg:[S.k+n,KP(n)],kcap:["คีย์ COOK/GUN · หน้า "+pk,"คีย์ลายมือ P'Ing (Key_P_Ing_Subspecialty_Sx.pdf) · หน้า "+pp]}),K1=(n,cap)=>({kimg:[S.k+n],kcap:[cap]});
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
const TT=[],TG=[];QB=QB.map(q=>{const k=q.set+"|"+q.ro+"|"+q.orig;if(q._t)TT.push([k,q._t]);if(q._g)TG.push([k,q._g]);const o=Object.assign({},q);delete o._t;delete o._g;return o;});
const upd=(f,obj,lines)=>{const p=path.join(R,"data_subspe",f);const ks=new Set(QB.map(q=>obj+"["+JSON.stringify(q.set+"|"+q.ro+"|"+q.orig)+"]"));let t=fs.readFileSync(p,"utf8").split("\n").filter(l=>!ks.has(l.split("=")[0]));t=t.join("\n").replace(/\n*$/,"\n")+lines.join("\n")+"\n";fs.writeFileSync(p,t);};
upd("topics.js","W.TOPIC",TT.map(([k,v])=>"W.TOPIC["+JSON.stringify(k)+"]="+JSON.stringify(v)+";"));
upd("tags.js","W.TAGS",TG.map(([k,v])=>"W.TAGS["+JSON.stringify(k)+"]="+JSON.stringify(v)+";"));
const seen=new Set();QB.forEach(q=>{const k=q.orig;if(seen.has(k))console.log("DUPLICATE orig",k);seen.add(k);});
const out="/* "+S.head+" ; "+QB.length+" ข้อ ; rid "+(off+1)+"–"+(off+QB.length)+" (ข้อลำดับ n ในชุด = rid n+"+off+") — ประกอบจาก parts/"+code+"_part*.js ด้วย parts/asm_7479.js */\nQB.push(\n"+QB.map(q=>"  "+JSON.stringify(q)).join(",\n")+"\n);\n";
fs.writeFileSync(path.join(R,S.out),out);console.log(parts.join(","),"→",S.out,QB.length,"questions");

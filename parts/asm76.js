// node parts/asm76.js <s76a|s76c|s76d> (copy of asm_7479.js; strips _t/_g into data_subspe/topics.js + tags.js) — old header: node parts/asm_7479.js <a74|c74|d74|c79|d79|s79c>  → assembles parts/<code>_partN.js into the data file (74A/C/D, 79C/D Gen Sx, 79C Subspe — 20 Oct 2026)
const fs=require("fs"),path=require("path");const R=path.join(__dirname,"..");
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x,LT="ABCDE";
const K74=" (คีย์ลายมือในไฟล์ Key 74ACD)";
const SETS={
 s76a:{set:"MDCU76",ro:"RoA",file:"S76AQ",kfile:"S76AK",q:"qs76a_",k:"ks76a_",KS:" (คีย์ในไฟล์ Key 76A)",out:"data_subspe/data_b11.js",head:"Subspe Sx MDCU76 RoA — S76AQ (76A_MCQs_sub_specialty_surgery_Rotate_A_MDCU76.pdf) + S76AK (Key_76A_MCQ_sub_spe_76_rotate_A.pdf by MEMP)"},
 s76c:{set:"MDCU76",ro:"RoC",file:"S76CQ",kfile:"S76CK",q:"qs76c_",k:"ks76c_",KS:" (คีย์ในไฟล์ Key 76C)",out:"data_subspe/data_b12.js",head:"Subspe Sx MDCU76 RoC — S76CQ (76C_MCQ_Ac_sub_spe_surgery_Mdcu_76_._Rotate_C.pdf) + S76CK (Key_76C_MCQ_sub_spe_76_rotate_C_by_Mdcu76.pdf = Key_76C_MCQ_solution…by_rotate_D.pdf ไฟล์เดียวกัน)"},
 s76d:{set:"MDCU76",ro:"RoD",file:"S76DQ",kfile:"S76DK",q:"qs76d_",k:"ks76d_",KS:" (คีย์ในไฟล์ Key 76D)",out:"data_subspe/data_b13.js",head:"Subspe Sx MDCU76 RoD — S76DQ (76D_MCQ_subse_sx_rotate_D_76.pdf) + S76DK (Key_76D_MCQ_sub_spe_76_rotate_D.pdf)"}};
const code=process.argv[2],S=SETS[code];if(!S){console.log("unknown set");process.exit(1);}
const KQ=" (เฉลยในช่องเฉลยของไฟล์โจทย์ AC Sx MCQ 79 Ro C)";const KD=x=>S.k+x,KS=S.KS,KI=(...n)=>n.map(i=>S.k+i),QI=n=>S.q+n;
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

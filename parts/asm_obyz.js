// node parts/asm_obyz.js → data_obgyn/data_b5.js (YUZU, 2 key versions) + YUZU keys in topics.js / tags.js / dups.js
// needs /tmp/claude-0/yuzu/qlist.json (orig → page + crop names) ; copies crops into img/ ; does not touch other sets
const fs=require("fs"),P=__dirname+"/",D=__dirname+"/../data_obgyn/",IMG=__dirname+"/../img/",YZ="/tmp/claude-0/yuzu/";
const LT="ABCDE";const QL=JSON.parse(fs.readFileSync(YZ+"qlist.json","utf8"));const byO={};QL.forEach(q=>byO[q.orig]=q);
const Y=o=>o;let all=[];
fs.readdirSync(P).filter(f=>/^obyz_p\d+\.js$/.test(f)).sort((a,b)=>+a.match(/\d+/)[0]-+b.match(/\d+/)[0]).forEach(f=>{all=all.concat(eval("["+fs.readFileSync(P+f,"utf8")+"]"));});
const QIMG={"42.4":"qyz_42-4","42.8":"qyz_42-8"};
const got={};all.forEach(q=>{if(got[q.orig])throw "dup orig "+q.orig;if(!byO[q.orig])throw "unknown orig "+q.orig;got[q.orig]=q;});
const miss=QL.filter(q=>!got[q.orig]&&!q.gen).map(q=>q.orig);if(miss.length)console.log("⚠ missing (not yet written):",miss.join(", "));
const TOP={},TAG={},out=[];
QL.forEach(L=>{const q=got[L.orig];if(!q)return;
  const o={set:"YUZU",ro:"",file:"OYZ",orig:q.orig,page:L.page};
  if(QIMG[q.orig])o.img=QIMG[q.orig];
  Object.keys(q).forEach(k=>{if(!(k in o)&&k!=="tp"&&k!=="tg"&&k!=="wrong")o[k]=q[k];});
  const w={};let j=0;for(let i=0;i<5;i++){if(i!==q.ans)w[LT[i]]=q.wrong[j++];}o.wrong=w;
  if(o.opinion===undefined)o.opinion="";
  o.kimg=[...L.k1,...L.k2];o.kcap=[...L.k1.map(()=>"ver.1 · 02_2_YUZU_Key_1.pdf หน้า "+L.page+(L.gen?" (ลายมือที่ใช้แต่งโจทย์ — ver.2 หน้านี้ไม่ได้จด)":"")),...L.k2.map(()=>"ver.2 · 02_3_YUZU_Key_2.pdf หน้า "+L.page)];
  o.kimg.forEach(k=>{const src=fs.existsSync(YZ+"crops3/"+k+".jpg")?YZ+"crops3/"+k+".jpg":YZ+"crops2/"+k+".jpg";fs.copyFileSync(src,IMG+k+".jpg");});   /* crops3 = display crops with the gap above each question (handwriting written above the question line) */
  const key="YUZU||"+q.orig;TOP[key]=q.tp;TAG[key]=q.tg;out.push(o);});
/* ข้อ 0 = book page 2 "Just in case" resignation form — Service round only, any choice goes to the next unanswered question */
out.unshift({set:"YUZU",ro:"",file:"OYZ",orig:"0",page:2,notice:true,stem:"",img:"yuzu_resign",alt:"ใบลาออก — Just in case (หนังสือ YUZU หน้า 2)",opts:["ปิด","ลาออก"]});
fs.writeFileSync(D+"data_b5.js","/* OB-GYN YUZU (Supplementary Material for 3000426 Theoretical OB-GYN) — OYZ = 02_2_YUZU_Key_1.pdf (ver.1) + 02_3_YUZU_Key_2.pdf (ver.2), both question+key ; "+(out.length-1)+" ข้อ + ข้อ 0 (ใบลาออก) */\nQB.push(\n"+out.map(o=>"  "+JSON.stringify(o)).join(",\n")+"\n);\n");
const add=(f,obj)=>{let s=fs.readFileSync(D+f,"utf8");s=s.split("\n").filter(l=>!l.startsWith("\"YUZU||")).join("\n");
  s=s.replace(/\n\};\s*$/,",\n"+Object.entries(obj).map(([k,v])=>JSON.stringify(k)+":"+JSON.stringify(v)).join(",\n")+"\n};\n").replace(/,,\n/,",\n").replace(/\{,\n/,"{\n");fs.writeFileSync(D+f,s);};
add("topics.js",TOP);add("tags.js",TAG);
if(fs.existsSync(P+"dups_obyz.json")){const G=JSON.parse(fs.readFileSync(P+"dups_obyz.json","utf8"));global.W={};eval(fs.readFileSync(D+"dups.js","utf8"));
  let groups=W.DUP.map(g=>g.filter(k=>!k.startsWith("YUZU||"))).filter(g=>g.length>1);
  const known=new Set(Object.keys(TOP));["data_b1","data_b2","data_b3","data_b4"].forEach(f=>{global.QB=[];eval(fs.readFileSync(D+f+".js","utf8"));QB.forEach(q=>known.add(q.set+"|"+q.ro+"|"+q.orig));});
  G.forEach(g=>{const bad=g.filter(k=>!known.has(k));if(bad.length){console.log("skip unknown dup keys:",bad.join(" | "));g=g.filter(k=>known.has(k));}if(g.length<2)return;const hit=groups.filter(x=>x.some(k=>g.includes(k)));const u=[...new Set([].concat(...hit,g))];groups=groups.filter(x=>!hit.includes(x));groups.push(u);});
  const head=fs.readFileSync(D+"dups.js","utf8").split("\n")[0];
  fs.writeFileSync(D+"dups.js",head+"\nW.DUP=[\n"+groups.map(g=>JSON.stringify(g)).join(",\n")+"\n];\n");
  console.log("dup groups",groups.length);}
console.log("YUZU",out.length,"of",QL.length);

// node parts/check_meq.js data_obgyn/meq_bN.js  → checks an MEQ bank file (cases → parts → subs)
const fs=require("fs"),path=require("path");const f=process.argv[2];const QB=[];
try{(new Function("QB",fs.readFileSync(f,"utf8")))(QB);}catch(e){console.log("SYNTAX/RUNTIME ERROR:",e.message);process.exit(1);}
const IM=new Set(fs.readdirSync(path.join(__dirname,"..","img")).map(x=>x.replace(/\.(jpg|png)$/,"")));
const TAGS=new Set(["ante","labor","pp","comp","med","gyn","onco","repro"]);let bad=0,subs=0;const seen={};
const imgs=s=>[].concat(s.img||[],s.kimg||[],(String(JSON.stringify(s)).match(/\{\{IMG:(\w+)\}\}/g)||[]).map(x=>x.slice(6,-2)));
QB.forEach((c,ci)=>{const e=[];const id=c.orig||("#"+ci);
  ["set","file","page","orig","stem","gray","parts","interp","summary","notes"].forEach(k=>{if(c[k]===undefined||c[k]==="")e.push("case missing "+k);});
  if(c.ro===undefined)e.push("case missing ro");
  const k=c.set+"|"+c.ro+"|"+c.orig;if(seen[k])e.push("duplicate orig");seen[k]=1;
  (c.tags||[]).forEach(t=>{if(!TAGS.has(t))e.push("case tag not in list: "+t);});
  imgs({img:c.img,kimg:c.kimg,notes:c.notes,stem:c.stem}).forEach(x=>{if(!IM.has(x))e.push("image not found "+x);});
  if(!Array.isArray(c.parts)||!c.parts.length)e.push("no parts");
  (c.parts||[]).forEach((p,pi)=>{if(pi>0&&!p.info&&!p.img)e.push(`part ${pi+1}: no info (new information) — merge into previous part if nothing new`);
    imgs({img:p.img,info:p.info}).forEach(x=>{if(!IM.has(x))e.push("image not found "+x);});
    (p.subs||[]).forEach((s,si)=>{subs++;const w=`P${pi+1}.${si+1}`;
      ["tags","marks","ctx","qx","rubric","key","ans","exp","points","kw"].forEach(k=>{if(s[k]===undefined||s[k]==="")e.push(w+" missing "+k);});
      if(!c.sa&&!s.q)e.push(w+" missing q");
      (s.tags||[]).forEach(t=>{if(!TAGS.has(t))e.push(w+" tag not in list: "+t);});
      if(!(+s.marks>0))e.push(w+" marks must be a number >0");
      if(s.rubric&&!(/ได้/.test(s.rubric)&&/บางส่วน/.test(s.rubric)&&/ไม่ได้/.test(s.rubric)))e.push(w+" rubric needs ได้ / บางส่วน / ไม่ได้");
      const P=s.points||[],K=s.kw||[];if(!Array.isArray(P)||!P.length)e.push(w+" points empty");
      if(P.length!==K.length)e.push(w+` kw length ${K.length} ≠ points ${P.length}`);
      P.forEach((pt,j)=>{const kk=K[j];if(typeof pt==="string"){if(!Array.isArray(kk)||!kk.length||kk.some(x=>typeof x!=="string"))e.push(w+` kw[${j}] must be an array of regex strings`);}
        else{if(!Array.isArray(pt.any)||!pt.any.length)e.push(w+` point ${j} any[] empty`);if(!Array.isArray(kk)||kk.length!==pt.any.length||kk.some(z=>!Array.isArray(z)||!z.length))e.push(w+` kw[${j}] must be array of ${(pt.any||[]).length} arrays`);}
        [].concat(kk||[]).flat().forEach(r=>{try{new RegExp(r,"i");}catch(x){e.push(w+" bad regex "+r);}});});
      imgs({img:s.img,kimg:s.kimg,exp:s.exp,ans:s.ans}).forEach(x=>{if(!IM.has(x))e.push("image not found "+x);});
      if(/[`]/.test(JSON.stringify(s)))e.push(w+" backtick in data");});});
  if(e.length){bad++;console.log("BAD",id,"→",e.join("; "));}});
console.log("cases",QB.length,"subs",subs,"bad",bad);

// node parts/check_u02.js <part files...> → checks Unit L07.2 question parts against SPEC_L07.2.md rules
const fs=require("fs"),path=require("path");
const TAGS=["Fluid & electrolyte","Nutrition","Metabolic response","Pre-op & post-op","Stomach & duodenum","Small bowel","Thyroid & parathyroid","Trauma","Pancreas","Hemostasis & transfusion","Acute abdomen","Surgical infection","Colorectal","Burn"];
const IMG=path.join(__dirname,"..","img");
let probs=0;const P=(n,m)=>{probs++;console.log(`n${n}: ${m}`);};
const all=[];
for(const f of process.argv.slice(2)){
  const src=fs.readFileSync(f,"utf8");const QS=[];const U=o=>{QS.push(o);return o;};
  try{new Function("U","["+src.replace(/^\s*\/\*[\s\S]*?\*\//,"")+"]")(U);}catch(e){console.log("SYNTAX "+f+": "+e.message);process.exit(1);}
  all.push(...QS);
}
const strip=s=>String(s).replace(/<[^>]+>/g,"");
const extra=s=>/[()]| \/ | — | - |\be\.g\.|เช่น/.test(s);
const seen={};const ansPos=[0,0,0,0,0];let nimg=0,nout=0;
all.forEach(q=>{const n=q.n;
  if(!Number.isInteger(n))P("?","missing n");
  if(seen[n])P(n,"duplicate n");seen[n]=1;
  if(!q.stem||q.stem.length<60)P(n,"stem too short / missing");
  if(/<[a-z]/i.test(q.stem||""))P(n,"HTML in stem");
  if(!Array.isArray(q.opts)||q.opts.length!==5)P(n,"need 5 opts");
  else{
    if(new Set(q.opts.map(x=>x.trim().toLowerCase())).size!==5)P(n,"duplicate options");
    q.opts.forEach((o,i)=>{if(extra(strip(o)))P(n,`option ${"ABCDE"[i]} has () / — e.g.: ${o}`);});
    const c=strip(q.opts[q.ans]||""),ot=q.opts.filter((_,j)=>j!==q.ans).map(strip),mx=Math.max(...ot.map(x=>x.length));
    if(c.length>mx*1.35&&c.length-mx>8)P(n,`correct option clearly longest: ${c}`);
  }
  if(!(q.ans>=0&&q.ans<=4))P(n,"bad ans");else ansPos[q.ans]++;
  if(!Array.isArray(q.wrong)||q.wrong.length!==4)P(n,"wrong must be array of 4");
  ["interp","why","src"].forEach(k=>{if(!q[k]||String(q[k]).length<15)P(n,"missing "+k);});
  if(!Array.isArray(q.summary)||q.summary.length<3)P(n,"summary needs ≥3");
  if(q.src&&!/^L07\.2 Fluid and electrolytes · ไฟล์ [AB] หน้า/.test(q.src))P(n,"src format: "+q.src);
  if(!Array.isArray(q.tags)||!q.tags.length||q.tags.length>4)P(n,"tags 1–4");else q.tags.forEach(t=>{if(!TAGS.includes(t))P(n,"bad tag "+t);});
  [].concat(q.img||[],q.kimg||[]).forEach(k=>{if(!fs.existsSync(path.join(IMG,k+".jpg")))P(n,"missing image "+k);});
  if(q.img)nimg++;if(q.outside)nout++;
  if(q.outside&&!/^นอกสไลด์/.test(q.outside))P(n,"outside must start with นอกสไลด์");
});
// near-duplicate stems
for(let i=0;i<all.length;i++)for(let j=i+1;j<all.length;j++){const a=all[i].stem||"",b=all[j].stem||"";if(a.slice(0,70)===b.slice(0,70))P(all[j].n,"stem starts same as n"+all[i].n);}
console.log(`questions ${all.length} · image questions ${nimg} · outside-slide ${nout} · answer positions A-E ${ansPos.join("/")}`);
console.log(probs?`${probs} problems`:"OK");

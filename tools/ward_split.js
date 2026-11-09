/* build_site.py (website build) → node tools/ward_split.js <outdir> <base> <ward.js>
   Runs one ward's data script and writes two JSON files the page loads on demand (9 Nov 2026):
     <base>.json    = everything the ward home needs: questions without their explanations, Unit/MEQ/OSCE banks, tags, topics …
     <base>_x.json  = explanations of every MCQ/Unit question (aligned by position) + Round I/O, textbooks, High-yield summaries, OSCE refs
   The ward home shows after <base>.json; every other page of the ward waits for <base>_x.json (it starts loading right after).
   Prints the ward's question counts (WCOUNT) as JSON. */
const vm=require("vm"),fs=require("fs"),path=require("path");
const [out,base,src]=process.argv.slice(2);
const c={WARDS:{},IMGS:{},console};vm.createContext(c);
vm.runInContext(fs.readFileSync(src,"utf8"),c,{filename:src});
const ids=Object.keys(c.WARDS);if(ids.length!==1)throw new Error("expected one ward in "+src+", got "+ids);
const id=ids[0],W=c.WARDS[id];
const cnt={MCQ:(W.QB||[]).filter(q=>!q.notice).length,MEQ:(W.MQ||[]).length,OSCE:(W.OS||[]).length,
  unit:(W.UNIT||[]).filter(x=>x&&x.id&&Array.isArray(x.QB)).reduce((a,L)=>a+L.QB.length,0)};
/* shown only after a question is answered (explanation / key panel) */
const HQ=["summary","wrong","why","notes","variants","opinion","interp","trap","gray","guide","mnemonic"];
const XK=["IO","TXT","SUMM","HY","OSREF"];
const strip=q=>{if(!q||typeof q!=="object")return 0;const h={};let n=0;for(const k of HQ)if(k in q){h[k]=q[k];delete q[k];n++;}return n?h:0;};
const X={QB:(W.QB||[]).map(strip),UNIT:(W.UNIT||[]).map(L=>L&&Array.isArray(L.QB)?L.QB.map(strip):0)};
for(const k of XK)if(k in W){X[k]=W[k];delete W[k];}
fs.writeFileSync(path.join(out,base+".json"),JSON.stringify(W));
fs.writeFileSync(path.join(out,base+"_x.json"),JSON.stringify(X));
console.log(JSON.stringify({[id]:cnt}));

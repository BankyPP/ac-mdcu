/* build_site.py --ai (Claude artifact for AI question writing only, 19 Nov 2026) → node tools/ai_pack.js <ward.js> <out.js>
   Runs one ward's data script and writes it back as one light WARDS[id]=… line:
     MCQ (W.QB)  = kept whole with explanations (19 Nov 2026: Legendary mixes old questions with AI ones and shows every explanation)
     MEQ / OSCE  = kept (OSCE AI writes and grades new stations from same-topic old ones)
     High-yield summaries = dropped (Unit banks kept: Legendary draws from them) · Round I/O, textbooks, resources, tags, topics, OSCE refs = kept
   Images are dropped by build_site.py (IMGS = {}); the app skips a missing image. Old-exam practice with explanations is on the website. */
const vm=require("vm"),fs=require("fs");
const [src,out]=process.argv.slice(2);
const c={WARDS:{},IMGS:{},console};vm.createContext(c);
vm.runInContext(fs.readFileSync(src,"utf8"),c,{filename:src});
const ids=Object.keys(c.WARDS);if(ids.length!==1)throw new Error("expected one ward in "+src+", got "+ids);
const id=ids[0],W=c.WARDS[id];
W.SUMM={MCQ:[],MEQ:[],OSCE:[]};
/* one line per piece (an artifact text file is capped at 16 MB, build_site.py splits the ward at line breaks): the ward without QB, then QB in ~1 MB pieces */
const QB=W.QB||[],wid=JSON.stringify(id),L=[];W.QB=[];L.push("WARDS["+wid+"]="+JSON.stringify(W)+";");
for(let i=0,p=[],n=0;i<=QB.length;i++){const q=QB[i];if(i===QB.length||n>1e6){if(p.length)L.push("WARDS["+wid+"].QB.push("+p.join(",")+");");p=[];n=0;}if(q){const t=JSON.stringify(q);p.push(t);n+=t.length;}}
W.QB=QB;fs.writeFileSync(out,L.join("\n")+"\n");
console.log(JSON.stringify({[id]:{MCQ:W.QB.length,MEQ:(W.MQ||[]).length,OSCE:(W.OS||[]).length}}));

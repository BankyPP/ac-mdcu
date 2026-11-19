/* build_site.py --ai (Claude artifact for AI question writing only, 19 Nov 2026) → node tools/ai_pack.js <ward.js> <out.js>
   Runs one ward's data script and writes it back as one light WARDS[id]=… line:
     MCQ (W.QB)  = only what the AI rounds read: set/ro/file/page/orig/stem/opts/ans + first 4 summary points
                   (Legendary AI takes its topics from W.QB, and wards with exam.MCQ.aiFromAC use old questions as the base) — explanations dropped
     MEQ / OSCE  = kept (OSCE AI writes and grades new stations from same-topic old ones)
     Unit banks, High-yield summaries = dropped · Round I/O, textbooks, resources, tags, topics, OSCE refs = kept
   Images are dropped by build_site.py (IMGS = {}); the app skips a missing image. Old-exam practice with explanations is on the website. */
const vm=require("vm"),fs=require("fs");
const [src,out]=process.argv.slice(2);
const c={WARDS:{},IMGS:{},console};vm.createContext(c);
vm.runInContext(fs.readFileSync(src,"utf8"),c,{filename:src});
const ids=Object.keys(c.WARDS);if(ids.length!==1)throw new Error("expected one ward in "+src+", got "+ids);
const id=ids[0],W=c.WARDS[id];
const KEEP=["set","ro","file","page","page2","orig","stem","opts","ans","topic","ukey","notice","unit","adm"];
W.QB=(W.QB||[]).map(q=>{const o={};for(const k of KEEP)if(k in q)o[k]=q[k];if(Array.isArray(q.summary)&&q.summary.length)o.summary=q.summary.slice(0,4);return o;});
W.UNIT=[];W.SUMM={MCQ:[],MEQ:[],OSCE:[]};
fs.writeFileSync(out,"WARDS["+JSON.stringify(id)+"]="+JSON.stringify(W)+";\n");
console.log(JSON.stringify({[id]:{MCQ:W.QB.length,MEQ:(W.MQ||[]).length,OSCE:(W.OS||[]).length}}));

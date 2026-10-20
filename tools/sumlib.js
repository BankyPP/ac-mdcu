/* shared loader for the Phase 2 high-yield summary tools (sumdump.js / sumcheck.js)
   loads one ward folder the same way build_site.py + site/app.js + site/meq.js do, and builds the Service-round items:
   MCQ key "set|ro|orig" · MEQ/OSCE key "set|ro|orig#k" (k = k-th sub-question of that question, 1-based, over all parts) */
const fs=require('fs'),path=require('path'),vm=require('vm');
const num=f=>+(path.basename(f).replace(/\D/g,'')||0);
function load(dir){
  const W={QB:[],MQ:[],OS:[],SUMM:{MCQ:[],MEQ:[],OSCE:[]}},ls=fs.existsSync(dir)?fs.readdirSync(dir):[];
  const run=(f,ctx)=>vm.runInNewContext(fs.readFileSync(path.join(dir,f),'utf8'),Object.assign({console},ctx),{filename:f});
  ls.filter(f=>/^data_b\d+\.js$/.test(f)).sort((a,b)=>num(a)-num(b)).forEach(f=>run(f,{QB:W.QB}));
  if(fs.existsSync(path.join(dir,'fixes.js')))run('fixes.js',{QB:W.QB});
  ['topics.js','tags.js','dups.js'].forEach(f=>{if(ls.includes(f))run(f,{W});});
  ls.filter(f=>/^meq_b\d+\.js$/.test(f)).sort((a,b)=>num(a)-num(b)).forEach(f=>run(f,{QB:W.MQ}));
  if(fs.existsSync(path.join(dir,'meq_fixes.js')))run('meq_fixes.js',{QB:W.MQ});
  ls.filter(f=>/^osce_b\d+\.js$/.test(f)).sort((a,b)=>num(a)-num(b)).forEach(f=>run(f,{QB:W.OS}));
  ls.filter(f=>/^sum_(mcq|meq|osce)_.+\.js$/.test(f)).sort().forEach(f=>{const T=f.split('_')[1].toUpperCase();const before=W.SUMM[T].length;run(f,{SUMM:W.SUMM[T]});W.SUMM[T].slice(before).forEach(s=>{s._file=f;});});
  W.QB=W.QB.filter(q=>!q.notice);
  return W;}
function wardCfg(dir){const inst=path.dirname(path.resolve(dir)),cfgp=fs.existsSync(path.join(inst,'config.json'))?path.join(inst,'config.json'):path.join(__dirname,'..','config.json');
  const cfg=JSON.parse(fs.readFileSync(cfgp,'utf8')),base=path.basename(path.resolve(dir));return (cfg.wards||[]).find(w=>(w.dir||'data')===base)||{};}
function topicNames(dir,type){const w=wardCfg(dir);const T=((type==='OSCE'?w.osceTopics:w.meqTopics)||[]).map(t=>Array.isArray(t)?t:[t.id,t.name]);return T;}
/* base key set|ro|orig; when two questions share it (e.g. two "ข้อ 4" on different pages) each gets "@p<page>", and a further tie "~n" — site/hysum.js does the same */
function qKeys(L){const c={},k2={};L.forEach(q=>{const b=q.set+'|'+(q.ro||'')+'|'+q.orig;c[b]=(c[b]||0)+1;});
  const m=new Map(),seen={};L.forEach(q=>{let b=q.set+'|'+(q.ro||'')+'|'+q.orig;if(c[b]>1)b+='@p'+q.page;if(seen[b])b+='~'+(++seen[b]);else seen[b]=1;m.set(q,b);});return m;}
function items(W,type){
  if(type==='MCQ'){const K=qKeys(W.QB);return W.QB.map(q=>{let t=(W.TAGS&&W.TAGS[q.set+'|'+q.ro+'|'+q.orig])||[];if(!t.length){const tp=W.TOPIC&&W.TOPIC[q.set+'|'+q.ro+'|'+q.orig];if(tp)t=[tp];}
    return {key:K.get(q),q,s:null,tags:t,rot:(q.set+' '+(q.ro||'')).trim()};});}
  const L=type==='OSCE'?W.OS:W.MQ,out=[],K=qKeys(L);
  L.forEach(q=>{const parts=Array.isArray(q.parts)&&q.parts.length?q.parts:[{subs:q.subs||[]}];let k=0;
    parts.forEach((p,pi)=>(p.subs||[]).forEach(s=>{k++;let t=(s.tags||[]).slice();if(!t.length&&q.topic)t=[q.topic];out.push({key:K.get(q)+'#'+k,q,s,pi,k,tags:t,rot:(q.set+' '+(q.ro||'')).trim(),sty:q.sa?'sa':'case'});}));});
  return out;}
const plain=s=>String(s==null?'':s).replace(/<br\s*\/?>/gi,'\n').replace(/<\/(li|p|div|tr)>/gi,'\n').replace(/<li>/gi,'• ').replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/[ \t]+/g,' ').replace(/\n\s*\n+/g,'\n').trim();
module.exports={load,items,topicNames,wardCfg,plain};

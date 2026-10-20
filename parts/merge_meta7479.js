// node parts/merge_meta7479.js <code> <set> <ro> [dir=data] → adds parts/meta7479/<code>_tt.json (topic+tags) and <code>_dups.json into <dir>/topics.js, tags.js, dups.js
const fs=require("fs"),path=require("path");const R=path.join(__dirname,"..");
const [code,set,ro,dirArg]=process.argv.slice(2);const dir=path.join(R,dirArg||"data");
const tt=JSON.parse(fs.readFileSync(path.join(__dirname,"meta7479",code+"_tt.json"),"utf8"));
const dpath=path.join(__dirname,"meta7479",code+"_dups.json");const dups=fs.existsSync(dpath)?JSON.parse(fs.readFileSync(dpath,"utf8")):{};
// all keys in the ward bank
const keys=new Set();fs.readdirSync(dir).filter(f=>/^data_b\d+\.js$/.test(f)).forEach(f=>{const B=[];new Function("QB",fs.readFileSync(path.join(dir,f),"utf8"))(B);B.forEach(q=>keys.add(q.set+"|"+q.ro+"|"+q.orig));});
const mine=Object.keys(tt).map(o=>set+"|"+ro+"|"+o);let bad=0;
mine.forEach(k=>{if(!keys.has(k)){bad++;console.log("not in bank:",k);}});
const W={};["topics.js","tags.js","dups.js"].forEach(f=>{const p=path.join(dir,f);if(fs.existsSync(p))new Function("W",fs.readFileSync(p,"utf8"))(W);});
W.TOPIC=W.TOPIC||{};W.TAGS=W.TAGS||{};W.DUP=W.DUP||[];
const vocab=fs.readFileSync(path.join(dir,"TAGS_VOCAB.md"),"utf8");
Object.entries(tt).forEach(([o,v])=>{const k=set+"|"+ro+"|"+o;W.TOPIC[k]=v.t;W.TAGS[k]=v.g;v.g.forEach(g=>{if(!vocab.includes("**"+g+"**")){bad++;console.log("tag not in vocab:",g,k);}});});
// dups: merge into existing group if any member overlaps, else new group
let added=0,skipped=[];
Object.entries(dups).forEach(([o,list])=>{const k=set+"|"+ro+"|"+o;const ok=list.filter(x=>{if(keys.has(x))return true;skipped.push(x);return false;});if(!ok.length)return;
  const all=[k,...ok];let g=W.DUP.find(gr=>all.some(x=>gr.includes(x)));
  if(g){all.forEach(x=>{if(!g.includes(x))g.push(x);});}else{W.DUP.push(all);}added++;
  // merge groups that now overlap
  for(let i=0;i<W.DUP.length;i++)for(let j=i+1;j<W.DUP.length;j++){if(W.DUP[i].some(x=>W.DUP[j].includes(x))){W.DUP[j].forEach(x=>{if(!W.DUP[i].includes(x))W.DUP[i].push(x);});W.DUP.splice(j,1);j--;}}});
const head=f=>{const p=path.join(dir,f);return fs.existsSync(p)?fs.readFileSync(p,"utf8").split("\n")[0]:"";};
const J=x=>JSON.stringify(x);
fs.writeFileSync(path.join(dir,"topics.js"),(head("topics.js").startsWith("/*")?head("topics.js")+"\n":"")+"W.TOPIC={\n"+Object.entries(W.TOPIC).map(([k,v])=>J(k)+":"+J(v)).join(",\n")+"\n};\n");
fs.writeFileSync(path.join(dir,"tags.js"),(head("tags.js").startsWith("/*")?head("tags.js")+"\n":"")+"W.TAGS={\n"+Object.entries(W.TAGS).map(([k,v])=>J(k)+":"+J(v)).join(",\n")+"\n};\n");
fs.writeFileSync(path.join(dir,"dups.js"),(head("dups.js").startsWith("/*")?head("dups.js")+"\n":"")+"W.DUP=["+W.DUP.map(g=>J(g)).join(",\n")+"];\n");
console.log(code,"topics/tags",mine.length,"dup entries",added,"groups",W.DUP.length,"bad",bad,skipped.length?"unknown dup keys: "+skipped.join(" ; "):"");

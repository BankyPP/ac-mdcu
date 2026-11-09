/* node tools/seen2dups.js <dir> — build <dir>/dups.js (W.DUP, Gen Sx style "seen elsewhere" groups) from the "seen" notes on MCQ items
   (e.g. seen:"คล้าย MDCU77 RoA ข้อ 33 และ MDCU77 RoC ข้อ 6 …"). Groups merge transitively. Existing dups.js groups are kept. */
const fs=require('fs'),path=require('path');
const dir=process.argv[2];global.QB=[];global.IMGS={};global.W={};
for(const f of fs.readdirSync(dir).filter(f=>/^data_b\d+\.js$/.test(f)).sort((a,b)=>parseInt(a.slice(6))-parseInt(b.slice(6))))eval(fs.readFileSync(path.join(dir,f),'utf8'));
const K=q=>q.set+"|"+q.ro+"|"+q.orig,have=new Set(QB.map(K));
/* "ข้อ N" may be the rid (running number in the ward, as the site shows it) instead of the original number */
const byRid=k=>{const [s,r,n]=k.split("|"),q=QB[parseInt(n)-1];return q&&q.set===s&&q.ro===r?K(q):null;};
const par={},find=x=>par[x]===undefined||par[x]===x?(par[x]=x):(par[x]=find(par[x])),uni=(a,b)=>{par[find(a)]=find(b);};
const out=fs.existsSync(path.join(dir,'dups.js'))?(eval(fs.readFileSync(path.join(dir,'dups.js'),'utf8')),W.DUP||[]):[];
out.forEach(g=>g.slice(1).forEach(k=>uni(g[0],k)));
let miss=[];
/* refs checked by hand where the number is the rid although an item with that original number also exists */
const FIX={"MDCU75|RoX|9>MDCU77|RoA|50":"MDCU77|RoA|3"};
QB.forEach(q=>{if(!q.seen)return;/* sets named by year (MDCU77) or by word (Pugun, Prac — tutor/practice sets of Med MDCU) */const re=/(MDCU\d+|Pugun|Prac)\s*Ro([A-Z])\s*ข้อ\s*([0-9]+[a-z]?)/g;let m;
  while((m=re.exec(q.seen))){let k=m[1]+"|Ro"+m[2]+"|"+m[3];if(FIX[K(q)+">"+k])k=FIX[K(q)+">"+k];else if(!have.has(k))k=byRid(k)||k;if(have.has(k)&&k!==K(q))uni(K(q),k);else if(!have.has(k))miss.push(K(q)+" → "+k);}});
const G={};Object.keys(par).forEach(k=>{const r=find(k);(G[r]=G[r]||[]).push(k);});
const groups=Object.values(G).filter(g=>g.length>1);
fs.writeFileSync(path.join(dir,'dups.js'),'/* related questions across sets: the same question, or the same point asked again in another year — one array per group (keys set|ro|orig). Used for "seen elsewhere" tags. Built from the "seen" notes by tools/seen2dups.js */\nW.DUP=['+groups.map(g=>JSON.stringify(g)).join(',\n')+'];\n');
console.log("groups",groups.length,"keys",groups.reduce((a,g)=>a+g.length,0),"unresolved",miss.length);miss.forEach(x=>console.log("  ",x));

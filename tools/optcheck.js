// node tools/optcheck.js [fromRid] → flags options that break the user's rule: the correct option must not carry extra info
// (parentheses, " / ", " — ", "e.g.") or be clearly longer than every distractor.
const {QB}=require("./load")();const from=+process.argv[2]||1;const strip=s=>String(s).replace(/<[^>]+>/g,"");
const extra=s=>/[()]| \/ | — | - |\be\.g\.|เช่น/.test(s);let n=0;
QB.forEach((q,i)=>{if(i+1<from)return;const o=q.opts.map(strip),c=o[q.ans],ot=o.filter((_,j)=>j!==q.ans),mx=Math.max(...ot.map(x=>x.length));
  const long=c.length>mx*1.35&&c.length-mx>8, ex=extra(c)&&ot.filter(extra).length<2;
  if(long||ex){n++;console.log(`rid ${i+1} ${q.set} ${q.ro} ${q.orig} [${long?"LONG ":""}${ex?"EXTRA":""}]\n  ✓ ${c}\n  ✗ ${ot.join(" | ")}`);}});
console.log("flagged",n);

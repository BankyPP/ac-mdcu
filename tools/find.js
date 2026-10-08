// node tools/find.js "<regex>" [max] → search existing questions (stem/options/recall/interp) to cross-reference & stay consistent
const {QB}=require("./load")();const re=new RegExp(process.argv[2]||".","i"),mx=+process.argv[3]||25;let n=0;
QB.forEach((q,i)=>{const t=[q.stem,q.orig,q.gray,q.interp,...q.opts].join(" ");if(re.test(t)&&n++<mx)console.log(`rid ${i+1} | ${q.set} ${q.ro} | ${String(q.stem).slice(0,140)}\n   ANS ${"ABCDE"[q.ans]}: ${q.opts[q.ans]}`);});
console.log("matches:",n);

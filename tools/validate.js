// node tools/validate.js  → checks every question; prints "total N bad 0" when clean
const {QB,imgs}=require("./load")();const L="ABCDE";let bad=0;
const need=["set","ro","stem","opts","key","interp","why","wrong","summary","variants"];
QB.forEach((q,i)=>{const r=i+1,e=[];
  need.forEach(k=>{if(q[k]===undefined||q[k]===null||q[k]==="")e.push("missing "+k);});
  if(!Array.isArray(q.opts)||q.opts.length!==5)e.push("opts!=5");
  if(!(q.ans>=0&&q.ans<5))e.push("ans");
  const w=Object.keys(q.wrong||{});if(w.length!==4||w.includes(L[q.ans]))e.push("wrong must have the 4 other letters");
  [].concat(q.img||[],q.kimg||[]).forEach(k=>{if(!imgs.has(k))e.push("image not found: "+k);});
  const t=JSON.stringify([q.interp,q.why,q.wrong,q.trap,q.summary,q.opinion,q.variants]);
  (t.match(/ข้อ(?:ถัดไป)?\s*\d[\d,\s]*/g)||[]).forEach(m=>m.match(/\d+/g).forEach(n=>{if(+n>=10&&+n>QB.length)e.push("ref to missing rid "+n);}));
  if(e.length){bad++;console.log("BAD rid",r,q.set,q.ro,q.orig,"→",e.join("; "));}
});
console.log("total",QB.length,"bad",bad);

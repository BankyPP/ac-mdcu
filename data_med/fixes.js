/* data_med/fixes.js — runs after every data_b*.js (build_site.py, tools/load.js, tools/sumlib.js)
   9 พ.ย. 2026 — สลับตำแหน่งคำตอบ (ผู้ใช้: "สลับบ้างก็ได้ ไม่ต้องเท่ากันเป๊ะ")
   ชุดจากสมุด MCQ Med For All (MDCU70–73) คำตอบกองที่ A เพราะ recall จำได้แค่ช้อยที่ถูกแล้วเขียนเป็น A (ช้อยอื่น Claude เติม)
   SWAP: key set|ro|orig → ตำแหน่งใหม่ของคำตอบ (สลับกับช้อยที่อยู่ตำแหน่งนั้น ช้อยอื่นอยู่ที่เดิม; ทำเฉพาะข้อที่คำอธิบายไม่อ้างตัวอักษรช้อย)
   ฟิลด์ key / gray ยังบอกตัวอักษรตามต้นฉบับ → เติม notes บอกการสลับ */
(function(){const L="ABCDE",SWAP={"MDCU73|RoA|1": 4, "MDCU73|RoA|7": 3, "MDCU73|RoA|8": 2, "MDCU73|RoA|23": 4, "MDCU73|RoA|6": 2, "MDCU73|RoA|17": 4, "MDCU73|RoA|12": 3, "MDCU73|RoA|15": 1, "MDCU73|RoA|2": 4, "MDCU73|RoA|18": 3, "MDCU73|RoA|3": 2, "MDCU73|RoA|21": 2, "MDCU73|RoD|7": 4, "MDCU73|RoD|3": 2, "MDCU73|RoD|4": 1, "MDCU72|RoA|23": 4, "MDCU72|RoB|14": 4, "MDCU72|RoB|4": 1, "MDCU72|RoB|17": 1, "MDCU72|RoB|22": 4, "MDCU72|RoB|6": 4, "MDCU72|RoB|25": 3, "MDCU72|RoB|10": 1, "MDCU72|RoB|23": 3, "MDCU72|RoC|4": 1, "MDCU72|RoD|7": 4, "MDCU72|RoD|10": 3, "MDCU72|RoD|33": 4, "MDCU72|RoD|44": 3, "MDCU72|RoD|65": 4, "MDCU72|RoD|37": 2, "MDCU72|RoD|29": 3, "MDCU72|RoD|69": 2, "MDCU72|RoD|56": 4, "MDCU72|RoD|61": 3, "MDCU72|RoD|9": 4, "MDCU72|RoD|5": 4, "MDCU72|RoD|6": 3, "MDCU72|RoD|57": 2, "MDCU72|RoD|24": 2, "MDCU72|RoD|50": 3, "MDCU72|RoD|3": 1, "MDCU72|RoD|63": 1, "MDCU72|RoD|41": 4, "MDCU72|RoD|32": 2, "MDCU72|RoD|68": 4, "MDCU72|RoD|48": 1, "MDCU72|RoD|45": 3, "MDCU72|RoD|66": 4, "MDCU72|RoD|49": 1, "MDCU72|RoD|25": 3, "MDCU72|RoD|51": 2, "MDCU72|RoD|35": 1, "MDCU72|RoD|42": 3, "MDCU72|RoD|60": 4, "MDCU72|RoD|19": 2, "MDCU70|RoA|5": 3, "MDCU70|RoA|14": 4, "MDCU70|RoA|4": 4};
QB.forEach(q=>{const n=SWAP[q.set+"|"+q.ro+"|"+q.orig];if(n==null||q.ans!==0||n===0)return;
  const o=q.opts.slice();[o[0],o[n]]=[o[n],o[0]];q.opts=o;
  const w=Object.assign({},q.wrong||{});w[L[0]]=w[L[n]];delete w[L[n]];q.wrong=w;q.ans=n;
  q.notes=(q.notes?q.notes+" · ":"")+"ตำแหน่งช้อยในเว็บสลับจากต้นฉบับ: คำตอบ (ช้อย A ในสมุด) อยู่ที่ "+L[n]+" และช้อย "+L[n]+" เดิมย้ายมาเป็น A";});
})();

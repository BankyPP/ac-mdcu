SUMM.push({tag:"ekg", title:"EKG",
  intro:"<ul><li>สถานี EKG ใน rotation นี้ออก 2 ภาพ: <b>PSVT</b> (ใจสั่น) และ <b>hyperkalemia</b> (CKD + oliguria + ใจสั่น) — ทั้งคู่ถามเรียง <b>อ่าน EKG → diagnosis → immediate management</b></li><li>อ่าน EKG ให้เป็นระบบ: rate → rhythm (regular?) → P wave → PR → QRS width → ST-T; แล้วตอบ dx ตาม stem</li><li>Treatment ต้องตอบ <b>ยา + ขนาด + ลำดับ</b> (adenosine 6 → 12 → 12 mg; calcium gluconate 10 mL → insulin + glucose → ...)</li></ul>",
  groups:[
    {title:"Tachyarrhythmia", sections:[
      {id:"ekg-psvt", title:"EKG: PSVT และ treatment",
       trend:"ใจสั่น EKG regular narrow-QRS tachycardia → dx และ treatment",
       asked:["ผู้ป่วยใจสั่น ให้ดู 12-lead EKG → ถาม diagnosis (PSVT)","ถาม treatment (stable vs unstable; ขนาด adenosine)"],
       pattern:["<b>อ่าน EKG:</b> rate เร็วมาก (~150–250/min), <b>regular</b>, <b>narrow QRS</b>, ไม่เห็น P นำหน้า QRS (P ซ่อนใน QRS หรือเป็น retrograde P) → <b>PSVT</b> (AVNRT พบบ่อยที่สุด)","<b>Ddx regular narrow tachycardia:</b> sinus tachycardia (เห็น P ปกติ, rate ค่อย ๆ เปลี่ยน) · atrial flutter 2:1 (rate ~150 คงที่, flutter wave ใน II, III, aVF)","<b>Stable:</b> (1) vagal maneuver — modified Valsalva (เบ่ง 15 วินาที แล้วนอนยกขา) หรือ carotid sinus massage (ไม่ทำถ้ามี carotid bruit / เคย stroke) → (2) ไม่หาย <b>adenosine 6 mg rapid IV push</b> + flush NSS 20 mL ทันที → ไม่หาย 12 mg → 12 mg","<b>Adenosine:</b> ให้ทาง vein ใหญ่ใกล้หัวใจ ฉีดเร็วแล้ว flush (half-life < 10 วินาที) · ระวังใน asthma รุนแรง, second / third degree AV block, AF ที่มี pre-excitation (WPW)","<b>ทางเลือก:</b> verapamil หรือ diltiazem IV, beta-blocker (ถ้า adenosine ไม่ได้ผล / ใช้ไม่ได้ และ QRS แคบ ไม่มี HF)","<b>Unstable</b> (hypotension, AMS, ischemic chest pain, acute HF) → <b>synchronized cardioversion</b> ทันที (ไม่รอยา)","ระยะยาว: recurrent → catheter ablation เป็น definitive"],
       pearls:["Treatment ที่ได้เต็ม = adenosine (ตามด้วย vagal maneuver ก็ได้); ตอบ vagal maneuver อย่างเดียวได้บางส่วน","ข้อสอบจริงอาจให้ EKG ที่ไม่เห็น P ชัด — ตอบ 'regular narrow-QRS tachycardia' ก่อนเสมอ"],
       members:["SI132|Ro403–404|2#1","SI132|Ro403–404|2#2"]}
    ]},
    {title:"Electrolyte disturbance", sections:[
      {id:"ekg-hyperk", title:"EKG: hyperkalemia (peaked T) และ immediate management",
       trend:"CKD + oliguria + ใจสั่น → EKG hyperK → management",
       asked:["CKD, ปัสสาวะน้อย, ใจสั่น → ให้อ่าน EKG (tall peaked T; อาจมี first-degree AV block)","ถาม diagnosis","ถาม immediate management"],
       pattern:["<b>EKG:</b> <b>tall, peaked (tented) T waves</b> ชัดใน precordial leads · ถ้า PR > 200 ms ต้องตอบ <b>first-degree AV block</b> ด้วย (ข้อสอบจริงมี block; ภาพตัวอย่างอาจไม่มี)","<b>ลำดับ EKG เมื่อ K สูงขึ้น:</b> peaked T → PR ยาว / P แบน-หาย → QRS กว้าง → sine wave → VF / asystole","<b>Dx:</b> <b>hyperkalemia</b> จาก CKD + oliguria (สาเหตุร่วม: ACEi / ARB, spironolactone, NSAIDs, trimethoprim, acidosis; อย่าลืม pseudohyperkalemia จาก hemolysis)","<b>Immediate management (ทำตามลำดับ):</b> (1) <b>Calcium gluconate 10% 10 mL IV ใน 2–3 นาที</b> เพื่อ stabilize cardiac membrane (ซ้ำได้ถ้า EKG ยังผิดปกติ) (2) <b>Shift K เข้าเซลล์:</b> regular insulin 10 U + 50% glucose 50 mL IV, salbutamol nebulization 10–20 mg, ± NaHCO3 ถ้ามี metabolic acidosis (3) <b>Remove K:</b> hemodialysis (CKD + oliguria / refractory), K-binding resin, loop diuretic ถ้ายังมีปัสสาวะ","<b>Monitor:</b> EKG continuous, K ซ้ำ, DTX (เสี่ยง hypoglycemia หลัง insulin โดยเฉพาะ CKD)","<b>ระดับความรุนแรง:</b> K 5.5–5.9 mild · 6.0–6.4 moderate · ≥ 6.5 severe (UK Kidney Association 2020); มี EKG change = ให้ calcium ไม่ว่า K เท่าไร"],
       pearls:["Calcium ไม่ได้ลด K — เป็นการป้องกัน arrhythmia; ต้องตามด้วย shift และ remove","ตอบเป็นลำดับ: stabilize → shift → remove → treat cause"],
       members:["SI132|Ro403–404|9#1","SI132|Ro403–404|9#2","SI132|Ro403–404|9#3"]}
    ]}
  ]});

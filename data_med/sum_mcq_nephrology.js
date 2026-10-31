SUMM.push({tag:"Nephrology", title:"Nephrology",
  intro:"<ul><li>Nephrology ใน Med Y4 MCQ (MDCU78 RoA / RoB) ออก 3 เรื่อง: <b>AKI (prerenal vs ATN เมื่อได้ diuretic)</b>, <b>เลือกยาความดันในผู้ป่วยเบาหวานที่มี albuminuria</b> และ <b>work-up microhematuria ที่ยืนยันแล้ว</b></li><li>แกนของหมวด: แปลผลการตรวจปัสสาวะ / urine electrolyte (FENa, FEurea, casts, RBC morphology) และเลือก next step / ยาที่ปกป้องไต</li><li>กับดัก: FENa >1% = ATN ทั้งที่ได้ diuretic, ลืมยาตามโรคร่วม (ACEI / ARB), เจาะไตเร็วเกินไปหรือตรวจปัสสาวะซ้ำไม่จบ</li></ul>",
  groups:[
    {title:"Acute kidney injury", sections:[
      {id:"prerenal-aki-fe-urea", title:"Prerenal AKI ในผู้ป่วยที่ได้ loop diuretic — ใช้ FEurea",
       trend:"ถามแยก prerenal vs ATN เมื่อ FENa ใช้ไม่ได้เพราะได้ diuretic",
       asked:["ชาย 68 ปี อาเจียน กินน้ำน้อย 4 วันและยังกิน furosemide, BP 100 / 60, BUN 60 Cr 2.5 (baseline 1.0), FENa 2.1% FEurea 25%, UA ไม่มี cast → ถามสาเหตุ AKI"],
       pattern:["Loop diuretic ทำให้ FENa สูงขึ้นเทียม → ใช้ <b>FEurea</b> แทน: <b><35% = prerenal</b>, >50% = ATN (35-50% ไม่ชัด)","BUN : Cr >20 (ในเคสนี้ 24), UA ไม่มี muddy brown cast → <b>prerenal AKI จาก volume depletion</b> → หยุด diuretic + ให้สารน้ำ (balanced crystalloid)","FENa = (UNa × PCr) / (PNa × UCr) × 100: <1% prerenal, >2% ATN; FEurea = (Uurea × PCr) / (Purea × UCr) × 100","Cast: ATN = muddy brown granular cast; AGN = RBC cast; AIN = WBC cast","FENa ต่ำได้แม้ไม่ใช่ prerenal: contrast, rhabdomyolysis, early obstruction, AGN, hepatorenal","KDIGO: AKI = Cr เพิ่ม ≥0.3 mg/dL ใน 48 ชม. หรือ ≥1.5 เท่าของ baseline ใน 7 วัน หรือ urine output <0.5 mL / kg / ชม. ≥6 ชม. (Cr 2.5 เทียบ 1.0 = stage 2)"],
       pearls:["เห็น FENa >1-2% แล้วตอบ ATN ทันที โดยลืมว่าได้ diuretic","โจทย์นี้ recall ไม่มีตัวเลข ผู้แต่งใส่เอง; ถ้าในข้อสอบจริง FENa >2% และ FEurea >50% คำตอบจะเป็น ATN","BUN : Cr >20 ก็เกิดได้จาก GI bleed, steroid, catabolism"],
       members:["MDCU78|RoA|8"]}
    ]},
    {title:"Diabetic kidney disease และ hematuria", sections:[
      {id:"dm-albuminuria-htn", title:"DM + albuminuria + BP สูง — เลือก ACEI / ARB",
       trend:"ถามยาตัวแรกที่เลือกตามโรคร่วม (compelling indication)",
       asked:["ชาย 50 ปี T2DM BP 160 / 100 หลัง lifestyle 3 เดือน BP 145 / 90 (office และ home) UACR 150 mg / g → ถามการจัดการที่เหมาะสม"],
       pattern:["Lifestyle ไม่พอ → เริ่มยา; DM + albuminuria (UACR ≥30 mg / g) → <b>ACEI หรือ ARB</b> เป็นตัวแรก (ลด proteinuria ชะลอไตเสื่อม) titrate ถึงขนาดสูงสุดที่ทนได้","เป้า BP <130 / 80 (ADA / KDIGO); ติดตาม Cr และ K ภายใน 1-2 สัปดาห์ (Cr ขึ้นได้ ≤30% ยังยอมรับ)","ถ้า BP ไม่ถึงเป้า → เพิ่ม CCB หรือ thiazide(-like); ห้ามใช้ ACEI + ARB ร่วมกัน; ห้ามใช้ในตั้งครรภ์","DM + CKD + albuminuria อื่น ๆ: พิจารณา SGLT2 inhibitor และ finerenone เพิ่มตามแนวทาง KDIGO / ADA","ดูรายละเอียด BP target และ regimen ในไฟล์ Hypertension & Lipids"],
       pearls:["เลือก CCB เดี่ยว หรือ combination โดยไม่เห็น albuminuria — ต้องหา compelling indication ก่อน","โจทย์นี้ recall ไม่บอกโรคร่วม ผู้แต่งเติม DM + albuminuria; ถ้าไม่มีโรคร่วม first-line ทั้ง 3 กลุ่มใช้ได้"],
       members:["MDCU78|RoB|9"]},
      {id:"microhematuria", title:"Microhematuria ที่ยืนยันแล้วในชายอายุน้อย — next step",
       trend:"ถามขั้นต่อไปหลังตรวจซ้ำแล้วยังพบ RBC 3-5 / HPF",
       asked:["ชาย 25 ปี ไม่มีอาการ UA protein ลบ RBC 3-5 / HPF WBC 0-1 ตรวจซ้ำแล้วได้ผลเดิม → ถาม next step"],
       pattern:["<b>Microhematuria = ≥3 RBC / HPF</b> จาก microscopy (dipstick บวกต้องยืนยัน); ตัดสาเหตุชั่วคราว (ออกกำลังหนัก ประจำเดือน UTI) แล้ว","ประเมิน glomerular vs non-glomerular: dysmorphic RBC, acanthocyte, RBC cast, proteinuria, Cr, BP → ส่ง nephrology","AUA / SUFU 2020: low-risk (ชาย <40, ไม่สูบ, 3-10 RBC / HPF) → ตรวจซ้ำที่ 6 เดือน หรือ cystoscopy + renal ultrasound; ถ้าตรวจซ้ำยัง 3-10 RBC / HPF → จัดเป็น intermediate → <b>cystoscopy + renal ultrasound</b>","Intermediate: cystoscopy + renal US; High (อายุ ≥60, >25 RBC / HPF, สูบ >30 pack-years, gross hematuria): cystoscopy + CT urography","ปัจจัยเสี่ยง urothelial cancer: อายุ, ชาย, สูบบุหรี่, aniline dye, cyclophosphamide"],
       pearls:["รีบเจาะไต หรือตรวจ complement (C3 / C4 / CH50) โดยไม่มี proteinuria / Cr สูง / dysmorphic RBC","ตรวจปัสสาวะซ้ำไปเรื่อย ๆ ในผู้ที่ยืนยันแล้ว"],
       members:["MDCU78|RoB|16"]}
    ]}
  ]});

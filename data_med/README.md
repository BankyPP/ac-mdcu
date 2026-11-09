# Internal Medicine Y4 (MDCU) — ข้อสอบเก่า AC

ลงข้อสอบชุดแรก 1 พ.ย. 2026: MDCU78 RoA–RoD (22 ไฟล์ — โจทย์ 12 + เฉลย 10) · ไฟล์เฉลยว่างเกือบทั้งหมด → เฉลยโดย Claude (กล่องเหลืองเตือนในเฉลย MEQ/OSCE)

| ชนิด | ไฟล์ | จำนวน |
|---|---|---|
| MCQ | `data_b1.js` (78A 8 ข้อ + 78C 1 ข้อ), `data_b2.js` (78B 25 ข้อ), `data_b3.js` (78D 13 ข้อ) · แท็ก `tags.js` (คำศัพท์ `TAGS_VOCAB.md`) | 47 |
| MEQ | `meq_b1.js` (78B ข้อ 1, 2 · 78D ข้อ 2) | 3 เคส |
| OSCE | `osce_b1.js` (78A 8 + 78B 9), `osce_b2.js` (78C 9 + 78D 9) | 35 สถานี |

ข้ามตามกติกา: แถวที่มีแต่ "A." (78A MCQ ข้อ 9, 78B MCQ ข้อ 26–100, 78C MCQ ข้อ 2–9, 78D MCQ ข้อ 1), 78A OSCE ข้อ 9 ("จำไม่ได้แต่ไม่ใช่ skin"), 78B MEQ ข้อ 3 (ว่าง), 78B OSCE ข้อ 10–30 (ว่าง)

ลงชุดที่สอง 1 พ.ย. 2026: **MDCU77 RoA–RoD** (10 ไฟล์ — โจทย์ 6 + เฉลย 4: Key 77A MCQ by 77B, Key 77A OSCE by 78, Key 77B ALL by 78, Key 77C MCQ by Gag) · 77C MEQ/OSCE และ 77D ทั้งหมดไม่มีเฉลย → เฉลยโดย Claude

| ชนิด | ไฟล์ | จำนวน |
|---|---|---|
| MCQ | `data_b4.js` (77A ข้อ 1–25), `data_b5.js` (77A ข้อ 26–51), `data_b6.js` (77B 31 ข้อ), `data_b7.js` (77C 37 ข้อ + 77D 1 ข้อ) | 120 |
| MEQ | `meq_b2.js` (77A ข้อ 1, 2 · 77B ข้อ 1, 2 + สำเนา "ซ้ำ AC" ของ 78A ข้อ 1, 2 และ 78C ข้อ 2), `meq_b3.js` (77C ข้อ 1, 2 · 77D ข้อ 1, 2) | 8 เคส + 3 |
| OSCE | `osce_b3.js` (77A 10 + 77B 10), `osce_b4.js` (77C 10 + 77D 10) | 40 สถานี |

หมายเหตุ 77: แถวใน 77C (MCQ, OSCE) ไม่มีเลขข้อ → ใส่เลขตามลำดับแถว · 77C MCQ แถว "IgA nephropathy, PIGN, RPGN" แยกเป็น 7a/7b/7c · แถว "Hemato จำโจทย์ไม่ได้" แต่งเป็น 1 ข้อ (ข้อ 34) · ข้อที่ไม่ตามคีย์ไฟล์: 77A ข้อ 1 (C4), 7 (stroke), 21 (statin — ไฟล์ขัดกันเอง), 77C ข้อ 13 (B1) · รูปที่ไม่มีในไฟล์ (NOIMG): 77C MCQ ข้อ 6, 18, 27, 29 และ OSCE 77C/77D หลายสถานี

ลงชุดที่สาม 1 พ.ย. 2026: **MDCU79 RoA–RoB** (ไฟล์รวม 3 ไฟล์ — MCQ / MEQ / OSCE ไม่มีเฉลย, RoC/RoD ในไฟล์ว่าง) + **pre-test MEQ (RoX)** พร้อมเฉลย tutor · เฉลยโดย Claude ยกเว้นข้อที่ผู้จดเขียนคำตอบไว้

| ชนิด | ไฟล์ | จำนวน |
|---|---|---|
| MCQ | `data_b10.js` (79A 48 ข้อ), `data_b11.js` (79B 55 ข้อ) · เลข orig เรียงต่อกันทั้ง rotation (ไฟล์นับใหม่ทุกหมวด — หมวด + เลขเดิมอยู่ต้น gray) | 103 |
| MEQ | `meq_b5.js` (79A ข้อ 1 MPE, 2 acute pancreatitis · 79B ข้อ 1 pulmonary TB, 2 cardiac tamponade — ไฟล์จดแค่หัวข้อ Claude แต่งเคส · RoX pre-test bacterial meningitis เฉลยตาม tutor + ส่วนที่ Claude เพิ่ม) | 4 เคส + pre-test |
| OSCE | `osce_b10.js` (79A ข้อ 1–8, 10 · 79B ข้อ 11–19) | 18 สถานี |

หมายเหตุ 79: ข้าม — MCQ 79A "เรื่องอะไรก็ไม่รู้" ข้อ 5 (คำแนะนำ ไม่ใช่โจทย์) และแถวว่าง (79A: เรื่องอะไรก็ไม่รู้ 6–12, Critical Care 1–3, Neuro 2–3, Onco 3, Nutrition 3, Others 2–3 · 79B: เรื่องอะไรก็ไม่รู้ 17–24, Critical Care 6, Derm/Endo แถวสุดท้าย, ID 6, Allergy 6, Nutrition 6), OSCE 79A ข้อ 9 (มีแค่ "คุยกับคนไข้"), 79B ข้อ 20 · รวมข้อซ้ำในรอบเดียวกัน (79B): delirium + Foley (Neuro/Others) และ Gilbert (Hemato/Onco) · "ซ้ำ AC" ที่ดึงแล้ว: 79A MCQ 1st seizure (= 77B MCQ ข้อ 25), HUS Shigella (= 77A MCQ ข้อ 41), 79B MCQ คลำถุงน้ำดีได้ (= 78B MCQ ข้อ 15), OSCE 79A ข้อ 4 zoster V3 (= 77A ข้อ 5 ใช้รูป mo77a_5), ข้อ 8 thyroid (= 78C ข้อ 2), 79B ข้อ 18 LFT (= 78D ข้อ 7 / 77C ข้อ 6) · MEQ 79B "ตรงแอค" (TB, tamponade) = 77A ข้อ 2 + 77B ข้อ 1 (ดึงแล้ว 1 พ.ย. 2026 ตอนลงชุด 76) · รูปที่ไม่มีในไฟล์ (NOIMG): MCQ 79A urine crystal, 79B EKG ×2 + CXR, MEQ CXR/EKG ทุกเคส, OSCE 79 ส่วนใหญ่

ลงชุดที่สี่ 1 พ.ย. 2026: **MDCU76 RoA–RoC** (7 ไฟล์ — โจทย์ 4 + เฉลย 3: Key 76A MCQ+OSCE & 76C OSCE by ฝ่ายวิชาการ 77, Key 76B MCQ by Cook/Job/…, Key 76C MCQ by Dr.KP/Tae/…) · ไฟล์โจทย์มีวง/กากบาท/ลายมือ → ตรวจกับหลักฐานทุกจุด (ไม่เชื่อเป็นเฉลยทันที)

| ชนิด | ไฟล์ | จำนวน |
|---|---|---|
| MCQ | `data_b12.js` (76A 29 ข้อ: แถวเลข 4 ซ้ำ → 4a ECOG, 4b A fib), `data_b13.js` (76B ข้อ 1–31), `data_b14.js` (76B ข้อ 32–62), `data_b15.js` (76C 20 ข้อ) | 111 |
| MEQ | `meq_b6.js` (76A ข้อ 1, 2 = แถว 11–12 ของไฟล์ "MEQ AND OSCE" จดแค่หัวข้อ · 76B ข้อ 1, 2 · 76C ข้อ 1 = สำเนา 76B ข้อ 2 "โจทย์เหมือน rotate B", ข้อ 2 hypoglycemia + สำเนา "ซ้ำ AC 76B ข้อ 2" ของ 78C/78D ข้อ 1) | 6 เคส + 3 สำเนา |
| OSCE | `osce_b11.js` (76A ข้อ 1–10), `osce_b12.js` (76C 14 แถว ไม่มีเลข → 1–14 ตามแถว) | 24 สถานี |

หมายเหตุ 76: ไม่มีแถวที่ข้าม · ไฟล์เฉลย OSCE Rotate C แถว 1–3 เป็นเฉลย MCQ 76C ที่วางผิดที่ → สถานี 1–3 ไม่มีเฉลย (ใช้ประกอบ MCQ 76C ข้อ 1–3 แทน) · รูปสถานี 76C มาจากไฟล์เฉลย (ไฟล์โจทย์ไม่มีรูป) · ข้อที่ไม่ตามคีย์/ลายมือ: 76A MCQ 13 (คีย์ GOO → Zenker), 1 (ไม่มีคำตอบ → lupus anticoagulant), 27 (A,B → serum level) · 76B MCQ 13 (0% → 50% ตามนิยาม severe thal ของไทย), 18, 22, 31, 35, 36 (→ benzodiazepine), 49 (→ PBS), 50, 52, 57, 59, 60 (fibrate → statin), 62 · 76C MCQ 9, 14, 17 (แต่งใหม่: ยาที่ใช้ได้ในหญิงตั้งครรภ์), 18 (cryptococcal → meningioma) · OSCE 76A ข้อ 1, 3, 9 · 76C ข้อ 10, 11, 12, 14 — รายละเอียดอยู่ใน opinion/notes ของแต่ละข้อ · รูปที่ไม่มีในไฟล์ (NOIMG): MCQ 76A ข้อ 4b, MEQ 76B ข้อ 2 EKG/CXR, OSCE 76A ข้อ 10, 76C ข้อ 3 (EKG), 12 (Gram stain)

ลงชุดที่ห้า 3 พ.ย. 2026: **MDCU75 RoA–RoD + 75X** (12 ไฟล์ — โจทย์ 8 + เฉลย 4: Key 75A, Key 75B, Key 75C MCQ เป็นโจทย์เดิม + ลายมือปากกาดำ/แดง · 75D และ OSCE ทุก rotation ไม่มีเฉลย)

| ชนิด | ไฟล์ | จำนวน |
|---|---|---|
| MCQ | `data_b16.js` (75A 17 ข้อ), `data_b17.js` (75B 24 ข้อ), `data_b18.js` (75C 27 ข้อ), `data_b19.js` (75X 12 ข้อ), `data_b20.js` + `data_b21.js` (75D 53 ข้อ) | 133 |
| MEQ | `meq_b7.js` (75A ข้อ 1–3 · 75B ข้อ 1, 2 · 75D ข้อ 1, 2 · 75X ข้อ 1–4 จดแค่หัวข้อ Claude แต่งเคส) | 11 เคส |
| OSCE | `osce_b13.js` (75A 16 + 75B 12), `osce_b14.js` (75D 14 — ไม่นับข้อพัก) | 42 สถานี |

**75X = RoX ของ set MDCU75** (ไฟล์ `Key 75C MCQ MEQ` ชื่อเดิม "AC MCQ+MEQ Medicine Rotate C"): ผู้ใช้ไม่รู้ว่ารุ่น 75 หรือ 74 และ rotation ไหน — ไม่ทับกับ 75C เลย · **ถ้าไฟล์ในอนาคตมีโจทย์ตรงกับ 75X หลายข้อ ให้ย้าย 75X เป็น rotation นั้นแล้วรวมตาม `kit/กติกาการรวมคีย์หลายปี.md`** (ตรงกันแค่ 1–2 ข้ออาจเป็นข้อซ้ำข้ามปี ให้ถามผู้ใช้ก่อน)
หมายเหตุ 75: ไม่มีแถวที่ข้าม · OSCE 75A แถวซักประวัติหญิง 20 ปี กับ "ข้อ 13" รวมเป็นสถานีเดียว · ปากกาดำ/แดงขัดกันหลายข้อ: บันทึกทั้งคู่ใน key แล้วตัดสินตามหลักฐาน · ข้อที่ไม่ตามไฟล์: 75A MCQ 5, 11, 17 · 75B MCQ 6 · 75C MCQ 9 (5 ชม. → thrombectomy), 27 · 75X MCQ 9, 25, 69, 84 · 75D MCQ 33 (PRL 80 + ก้อน 3 ซม. → stalk effect → surgery), 44 · OSCE 75D ข้อ 8 (hint RBBB แต่รูปเป็น anterior STEMI), ข้อ 10 (ค่าพ่อ HbA/HbA2 สลับ แก้ตาม 75B ข้อ 7)

ลงชุดที่หก 9 พ.ย. 2026: **P’Pugun RoX + Prac RoX** (3 ไฟล์ — ผู้ใช้ให้ถือเป็น "ปีแรกสุด" อยู่ท้ายสุดของรายการปี: set ไม่มีตัวเลข → YEAR = 0 · เรียง P’Pugun ก่อน Prac ตามลำดับไฟล์ข้อมูล)

| ชุด | ไฟล์ | จำนวน |
|---|---|---|
| P’Pugun RoX (P’Pugun: Final call `IMPUGF` สไลด์ 115 หน้า วงคำตอบ+ลายมือ · Formative SOLUTION `IMPUGS` 26 หน้า ไฮไลต์คำตอบ+ลายมือ) | `data_b22.js`–`data_b27.js` | 114 |
| Prac RoX (IM Practice Set — New Items `IMPRAC`, 50 ข้อ เฉลยพิมพ์หน้า 14–18) | `data_b28.js` (1–25), `data_b29.js` (26–50) | 50 |

- P’Pugun: Final call Item 1–86 = Formative ข้อ 1–86 (ลำดับต่างกัน, ข้อความตรงกันยกเว้นคำพิมพ์ผิด) → ลงข้อเดียว เฉลยดูจากทั้งสองไฟล์ · "Recent item" 27 สไลด์ (มีใน Final call อย่างเดียว) ลงแยกทุกข้อ · Final call Item 13 (VF บรรยายใน stem) ≠ Formative ข้อ 12 (VF ให้ดูรูป) → 2 ข้อ (orig 19, 20) · orig = ลำดับในไฟล์ Final call (ข้ามหน้า 5 "Dermatology High-Yield Keywords" = สไลด์สอน ไม่ใช่โจทย์) · gray บอก Item/ข้อ ของทั้งสองไฟล์
- ไฟล์ P’Pugun 2 ไฟล์ให้คำตอบต่างกัน: orig 12 (Final call B patch test / Formative E Tzanck → E), 77 (C / A → A reactive arthritis), 84 (A / E → A bisphosphonate + calcitonin), 89 (A CKD G2 / "No CKD" → No CKD) · ไม่ตามคีย์: orig 71 (Formative diclofenac → colchicine, ischemic cardiomyopathy) · รายละเอียดใน opinion (⚠)
- ⚠ ขัดกับคลังเดิม: P’Pugun orig 83 (prolactinoma 2.3 ซม. PRL 80 → bromocriptine ตามคีย์) vs MDCU75 RoD ข้อ 33 (→ surgery, stalk effect) — รอผู้ใช้ตัดสิน
- รูปโจทย์ `img/mmpug_<orig>` · รูปเฉลย (kimg.js, กติกาผู้ใช้ 9 พ.ย. 2026): ข้อที่โจทย์+เฉลยตรงกัน 2 ไฟล์ → `mkpugf_<ข้อ Formative>` (ครอปจาก Formative) อย่างเดียว · โจทย์หรือเฉลยไม่ตรง (orig 11, 12, 71, 77, 83, 84, 89, 101) → ทั้ง `mkpugf` + `mkpug_<orig>` (สไลด์ Final call ทั้งหน้า) และ opinion บอกว่าไม่ตรงตรงไหน · มีไฟล์เดียว (Recent item / Formative ข้อ 12) → รูปจากไฟล์นั้น · `mkprac_<ข้อ>` = ครอปเฉลย · ไม่มีรูปในไฟล์: P’Pugun orig 5 (urticaria "photograph"), 67 (OSA "equipment" — น่าจะ CPAP)
- `tools/seen2dups.js` รับ set ชื่อ P’Pugun / Prac แล้ว (`P’Pugun RoX ข้อ N`)

## ค้าง: ข้อ "ซ้ำ AC" ที่ยังไม่มีปีต้นทาง (กติกา 1 พ.ย. 2026)
- ดึงแล้ว: 78A MEQ ข้อ 1 (= 77A ข้อ 2), 78A MEQ ข้อ 2 (= 77B ข้อ 1), 78C MEQ ข้อ 2 (= 77A ข้อ 1) → `meq_b2.js` · OSCE 78A/78C ข้อ 6 = 77B ข้อ 1 (seen)
- ดึงแล้ว (ชุด 76): 78C MEQ ข้อ 1 และ 78D MEQ ข้อ 1 = ซ้ำ AC **76B ข้อ 2** → สำเนาใน `meq_b6.js` · 79B MEQ ข้อ 1, 2 "ตรงแอค" = 77A ข้อ 2 (PTB + CXR) + 77B ข้อ 1 (tamponade + EKG) คู่เดียวกับ 78A → ดึงแล้วใน `meq_b5.js` · 77D MEQ ข้อ 2 น่าจะ = 76B ข้อ 2 (ใส่ seen)
- เทียบกับชุด 76 แล้ว: 77C MCQ ข้อ 2 "- AC" ≈ 76C MCQ ข้อ 20 (hypertensive emergency ชัก + effusion — คำตอบต่างกัน), 77C MCQ ข้อ 3 (viral meningitis) = 76A MCQ ข้อ 8 · ยังไม่พบ: 78A OSCE ข้อ 7 (urine sediment + rash), 77B MCQ ข้อ 17 (vaccine → occipital LN), 76B MCQ ข้อ 54 "ตรง AC" (rtPA contraindication)
- 78A MCQ ข้อ 3 (leptospirosis) ไฟล์เขียน "AC" ท้ายโจทย์ = เคยออก AC เก่า

## รูป
**รูปจากไฟล์เฉลยแบบ Gen Sx (6 พ.ย. 2026)**: `data_med/kimg.js` (build_site ใส่หน้ารูปเดิมตาม set|ro|orig) · รูป `img/mk<ชุด>_<ข้อ>` (MCQ), `img/ok…` (OSCE), `img/ek…` (MEQ) ครอปเฉพาะแถว/ส่วนของข้อนั้นจาก Key 75A/B/C/X, 76A/B/C, 77A/B/C, 77A OSCE · ชุด 78 (ไฟล์เฉลยว่าง), 79 และ 75D (ไม่มีไฟล์เฉลย) ไม่มีรูปให้ครอป · สคริปต์ที่ใช้อยู่ใน `tools/medkeys/` (ไฟล์ PDF ไม่อยู่ใน repo)
`img/mm75*` (MCQ 75/75X), `img/mo75*` (OSCE 75) · `img/me79x_4` (CSF gram stain pre-test 79) · `img/mm77*` (MCQ 77), `img/me77*` (MEQ 77), `img/mo77*` (OSCE 77) · `img/mm78d_9` (EKG 78D MCQ ข้อ 9) · `img/mo78*_*` (OSCE) — ดึงจากไฟล์ต้นฉบับเต็มภาพ (ใน PDF หลายรูปถูกตัดขวา)

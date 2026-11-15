# Ped (Pediatrics) MCQ — บันทึกสำหรับทำต่อ

ward `ped` · dir `data_ped` · รูปแบบเดียวกับ Gen Sx (stem/gray/opts 5/ans/key/interp/why/wrong×4/trap/summary/notes/guide/opinion/variants + kimg + tg)

## ลงแล้ว (440 ข้อ)
| ชุด | ไฟล์ | rid | หมายเหตุ |
|---|---|---|---|
| 78A | data_b1–b3 | 1–74 | คีย์ในไฟล์ |
| 78B | data_b4–b6 | 75–149 | orig 1–67 + x1–x8 · 78C = ไฟล์เดียวกับ 78B (ต่างแค่หัว) → ลงเป็น RoB อย่างเดียว |
| 78D | data_b7–b8 | 150–199 | คอลัมน์คีย์ว่าง → เฉลยโดย Claude ทั้งหมด |
| 77A | data_b9–b12 | 200–302 | 102 ข้อ + 82b (เลข 82 ซ้ำในไฟล์) |
| 77B | data_b13–b14 | 303–367 | 65 ข้อ · ข้อ 41/42 ต้นฉบับเป็นภาพแคปข้อเก่าพร้อมลายมือเฉลย (ไม่แนบรูป) |
| 77D | data_b15–b16 | 368–440 | ไฟล์จัดตามระบบ → orig "บท.ข้อ" (ชื่อบทใน chapters.js) · คีย์ = Key by Vchakarn (ปกเขียน "MCQ and OSCE" แต่**ไม่มีส่วน OSCE**) |

rid = ลำดับใน QB รวมทุกไฟล์ data_b1..bN — "ข้อ N" (N ≥ 10) ในข้อความถูกแปลงเป็นลิงก์ตาม rid → ห้ามเขียนเลขข้อในชุดตรง ๆ ให้ใช้ rid (ตรวจด้วย `node /tmp/ped/tools/rid.js "MDCU77|RoB|62"` หรือนับเอง)

## ข้อที่ไม่ตามคีย์ (มี flag ⚠ + opinion)
78A: 61, 69 · 78B: 4, 46, 57 · 77A: 8, 62, 75, 77, 82 · 77B: 20, 25, 63 · 77D: 6.1 (AGN → furosemide), 7.7 (Ballard 36 wk → B)

## รูป
- คีย์: `img/kp<ปี><ro>_<orig>[_b,_c,_d]` (77D ใช้ `kp77d_<บท>-<ข้อ>`) · โจทย์: `img/qp<ปี><ro>_<orig>`
- 77B key PDF มีหัวตารางแถว 1–3 ซ้ำทุกหน้า → ตัดด้วย croprange2 `--hdr`

## ยังไม่ทำ
- **76A, 76B, 76D, 75D** (ไฟล์: AC 76A/76D + Key_AC76A_D, AC 76B + Key_Ped_76B, AC 75D ไม่มีคีย์) → ต่อเป็น data_b17+ (rid เริ่ม 441) — ต้องอัปโหลด PDF ใหม่ในแชทใหม่
- OSCE Ped: ยังไม่มีไฟล์ OSCE (ไฟล์ Vchakarn มีแต่ MCQ)
- HY summary (sum_mcq_*.js) และ dups.js ของ Ped ยังไม่ได้ทำ — ข้อซ้ำเด่น: UVC, TB contact, lymphoma, hypoglycemia, influenza+egg, CPP hamartoma, CDGP, shock endpoints (77A 88 = 77D 20.6), IDA dose (77D 4.2 = 10.2), asthma device (77B 2 = 47)

## ขั้นตอน
`DIR=data_ped node tools/validate.js` (ต้อง bad 0) → tags.js สร้างจาก q.tg (vocab ใน TAGS_VOCAB.md) → `python3 build_site.py` + `python3 build_site.py --inst si` → commit → push

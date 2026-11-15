# Ped (Pediatrics) MCQ — บันทึกสำหรับทำต่อ

ward `ped` · dir `data_ped` · รูปแบบเดียวกับ Gen Sx (stem/gray/opts 5/ans/key/interp/why/wrong×4/trap/summary/notes/guide/opinion/variants + kimg + tg)

## ลงแล้ว (690 ข้อ)
| ชุด | ไฟล์ | rid | หมายเหตุ |
|---|---|---|---|
| 78A | data_b1–b3 | 1–74 | คีย์ในไฟล์ |
| 78B | data_b4–b6 | 75–149 | orig 1–67 + x1–x8 · 78C = ไฟล์เดียวกับ 78B (ต่างแค่หัว) → ลงเป็น RoB อย่างเดียว |
| 78D | data_b7–b8 | 150–199 | คอลัมน์คีย์ว่าง → เฉลยโดย Claude ทั้งหมด |
| 77A | data_b9–b12 | 200–302 | 102 ข้อ + 82b (เลข 82 ซ้ำในไฟล์) |
| 77B | data_b13–b14 | 303–367 | 65 ข้อ · ข้อ 41/42 ต้นฉบับเป็นภาพแคปข้อเก่าพร้อมลายมือเฉลย (ไม่แนบรูป) |
| 77D | data_b15–b16 | 368–440 | ไฟล์จัดตามระบบ → orig "บท.ข้อ" (ชื่อบทใน chapters.js) · คีย์ = Key by Vchakarn (ปกเขียน "MCQ and OSCE" แต่**ไม่มีส่วน OSCE**) |
| 76A | data_b17 | 441–481 | คีย์ Key AC PED 76 by MDCU77 RoD (ไฟล์เดียวกับ 76D) · ไม่มีข้อ 24 · ข้อ 9 HUS → 9, 9b |
| 76B | data_b18–b19 | 482–556 | recall 75 ข้อ · คีย์ = วงคำตอบลายมือ + สไลด์ (หลายข้อไม่ได้วง → Claude) |
| 76D | data_b20 | 557–564 | 8 ข้อ · คีย์ส่วน Rotate D ของไฟล์ 76 |
| 75D | data_b20–b21 | 565–625 | 61 ข้อ · ไม่มีไฟล์คีย์ → Claude ทั้งหมด |
| 74A | data_b22 | 626–665 | 40 ข้อ ไม่มีเลข → orig ตามลำดับ · ไม่มีคีย์ · หลายข้อตรง 77A |
| 74B | data_b23 | 666–686 | recall 21 ข้อ (orig = เลขข้อสอบจริง 1–120 + XX) · ไม่มีคีย์ |
| 74D | data_b23 | 687–690 | 5 ข้อ ไม่มีเลข · ไม่มีคีย์ |

rid = ลำดับใน QB รวมทุกไฟล์ data_b1..bN — "ข้อ N" (N ≥ 10) ในข้อความถูกแปลงเป็นลิงก์ตาม rid → ห้ามเขียนเลขข้อในชุดตรง ๆ ให้ใช้ rid (ตรวจด้วย `node /tmp/ped/tools/rid.js "MDCU77|RoB|62"` หรือนับเอง)

## ข้อที่ไม่ตามคีย์ (มี flag ⚠ + opinion)
78A: 61, 69 · 78B: 4, 46, 57 · 77A: 8, 62, 75, 77, 82 · 77B: 20, 25, 63 · 77D: 6.1 (AGN → furosemide), 7.7 (Ballard 36 wk → B) · 76A: 40 (symptomatic polycythemia → PET) · 76B: 16, 17 (tamponade → neck vein), 35 (นมแม่ถ่ายเหลวปกติ), 50 (SSSS → ไตขับ toxin ไม่ดี), 53 (sequence) · 76D: 2 (vit K def ให้ตรง 78B 41)

## รูป
- คีย์: `img/kp<ปี><ro>_<orig>[_b,_c,_d]` (77D ใช้ `kp77d_<บท>-<ข้อ>`) · โจทย์: `img/qp<ปี><ro>_<orig>`
- 76A/76D: crop ตามแถวตาราง (เลขข้อในคอลัมน์ซ้าย) ต่อหน้าถัดไปเป็น _b, _c · 76B: crop ตามเลขข้อ ถ้าข้อซ้ำ 2 หน้า (หน้า 3/4, 7/8, 12/13) เลือกหน้าที่มีลายมือ (58–60 เก็บทั้งสองหน้า) · หน้า 10 (flowchart asthma) → kp76b_45_b
- 77B key PDF มีหัวตารางแถว 1–3 ซ้ำทุกหน้า → ตัดด้วย croprange2 `--hdr`

## HY + dups (ทำแล้ว 15 พ.ย. 2026)
- `sum_mcq_<slug>.js` ครบทั้ง 22 แท็ก (`node tools/sumcheck.js data_ped MCQ` → bad 0, ครอบคลุมทุกข้อ) · ใช้ helper `k("78A12 77D1.1 …")` แปลงเป็น key `MDCU78|RoA|12`
- `dups.js` สร้างจาก field `seen` ของข้อใหม่ (74–76) + กลุ่มที่เพิ่มเองจาก similarity ของข้อเก่า (77/78) แล้วรัน `node tools/seen2dups.js data_ped` (แก้ regex ให้รับเลขข้อแบบมีจุด เช่น 9.1 แล้ว) → 121 กลุ่ม
- เวลาเพิ่มข้อใหม่: ใส่ `seen:"ซ้ำ MDCU77 RoA ข้อ 33 …"` แล้วรัน seen2dups (กลุ่มเดิมคงอยู่) + เติม member ใน sum_mcq ของแท็กนั้น

## ยังไม่ทำ
- OSCE Ped: ยังไม่มีไฟล์ OSCE (ไฟล์ Vchakarn มีแต่ MCQ)

## ขั้นตอน
`DIR=data_ped node tools/validate.js` (ต้อง bad 0) → tags.js สร้างจาก q.tg (vocab ใน TAGS_VOCAB.md) → `python3 build_site.py` + `python3 build_site.py --inst si` → commit → push

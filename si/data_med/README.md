# Internal Medicine Y4 (SI) — ข้อสอบ

ลง MCQ ชุดแรก 3 พ.ย. 2026 จากไฟล์ Q+key ในไฟล์เดียว · เฉพาะ MCQ

| ชุด | ไฟล์ข้อมูล | โค้ดไฟล์ | จำนวน |
|---|---|---|---|
| SI132 Ro401–402 | `data_b1.js` | SIM132A | 51 |
| SI132 Ro403–404 | `data_b2.js` | SIM132B | 51 |
| SI132 Ro405–406 | `data_b3.js` | SIM132C | 51 |
| SI133 Ro401–402 | `data_b4.js` | SIM133A | 93 |
| SI133 Ro403–404 | `data_b5.js` | SIM133B | 34 |
| SI133 Ro405–406 | `data_b6.js` | SIM133C | 35 |
| SI133 Ro407–408 | `data_b7.js` | SIM133D | 31 |

แท็ก `tags.js` (คำศัพท์ `TAGS_VOCAB.md`) · brief + เครื่องมือ `parts/simed/` · สรุป High-yield `sum_mcq_*.js`, `sum_osce_*.js`
รูปอยู่ `si/img/` เท่านั้น (prefix `qs132a_`, `ks132a_` ฯลฯ)

## OSCE (ลง 3 พ.ย. 2026 รวม 147 ข้อ · brief `parts/simed/OSCE_BRIEF.md` · ตรวจ `parts/simed/check_osce.js`)
| ชุด | ไฟล์ข้อมูล | โค้ดไฟล์ | จำนวน | หมายเหตุ |
|---|---|---|---|---|
| SI130 Ro409–412 | `osce_b0.js` | SIOS130 | 25 | ไฟล์ไม่มีรูปคลินิก · คอลัมน์ Answer เป็นคำตอบผู้จด |
| SI132 Ro403–404 | `osce_b1.js` | SIOS132 | 25 | |
| SI132 Ro405–406 | `osce_b3.js` | SIOS132C | 19 | orig A1–A9 / B1–B10 / B3+ (ไฟล์แบ่ง 2 ชุด ไม่มีเลข A8) |
| SI133 Ro403–404 | `osce_b4.js` | SIOS133B | 24 | sec LAB 1–11 + เดินวน 1–13 |
| SI133 Ro405–406 | `osce_b5.js` | SIOS133C | 25 | |
| SI133 Ro407–408 | `osce_b6.js` | SIOS133D | 25 | sec OSCE 1–15 + LAB 1–10 |
| SIXX RoX | `osce_b7.js` | SIOSXX | 4 | กระดาษคำตอบจริง มีคะแนนอาจารย์ · ไม่มีรูป |

แหล่งอ้างอิงให้ AI แต่ง/ตรวจ: `osce_ref.js` (ย่อจาก `parts/simed/OSCE_REF.md`: Key PBS 25 โรค, Key Blood transfusion + reaction)

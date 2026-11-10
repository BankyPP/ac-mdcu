# Internal Medicine Y4 (SI) — ข้อสอบ

ลง MCQ ชุดแรก 3 พ.ย. 2026 จากไฟล์ Q+key ในไฟล์เดียว · เฉพาะ MCQ

| ชุด | ไฟล์ข้อมูล | โค้ดไฟล์ | จำนวน | หมายเหตุ |
|---|---|---|---|---|
| SI132 Ro401–402 | `data_b1.js` | SIM132A | 51 |
| SI132 Ro403–404 | `data_b2.js` | SIM132B | 51 |
| SI132 Ro405–406 | `data_b3.js` | SIM132C | 51 |
| SI133 Ro401–402 | `data_b4.js` | SIM133A | 93 |
| SI133 Ro403–404 | `data_b5.js` | SIM133B | 34 |
| SI133 Ro405–406 | `data_b6.js` | SIM133C | 35 |
| SI133 Ro407–408 | `data_b7.js` | SIM133D | 31 |
| SI130 Ro401–404 | `data_b8.js` | SIM130A | 8 | ไม่มีคีย์ (เฉลยโดย Claude) · ลง 9 พ.ย. 2026 |
| SI130 Ro405–408 | `data_b9.js` | SIM130B | 28 | คีย์ลายมือ (X / วงเหลือง / ไฮไลต์ม่วง) |
| SI130 Ro409–412 | `data_b10.js` | SIM130C | 21 | คีย์วงน้ำเงิน · เลข 2 แยกเป็น 2 ข้อ |
| SI130 Ro417–420 | `data_b11.js` | SIM130D | 7 | ไม่มีคีย์ |
| SI130 Pre-MCQ | `data_b12.js` (Q1–30) + `data_b13.js` (Q31–60) | SIM130P | 60 | ข้อสอบ MCQ จำลอง Moodle SIMD415/64 · คีย์ Moodle |

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

## ลง 10 พ.ย. 2026 — SI128 + SI129 และเติมคีย์ SI127 (brief `parts/simed/TASK128_129.md`, `MERGE127.md`, `SUMUPD128.md`)
| ชุด | ไฟล์ข้อมูล | โค้ดไฟล์ | จำนวน | หมายเหตุ |
|---|---|---|---|---|
| SI128 Ro401–404 MCQ | `data_b27.js` | SIM128K (= SIM128A + คีย์) | 6 | คีย์ไฮไลต์เหลือง Key 128 |
| SI128 Ro405–408 MCQ | `data_b28.js` (1–55) + `data_b29.js` (56–113) | SIM128B | 112 | **ไม่มีคีย์** · ไม่มีเลข 111 (ไม่มีเนื้อหา) |
| SI128 Ro409–412 MCQ | `data_b30.js` | SIM128K (= SIM128C + คีย์) | 24 | ตอบต่างคีย์ 1, 4, 12, 22 |
| SI128 Ro413–416 MCQ | `data_b31.js` | SIM128K (= SIM128D + คีย์) | 28 | |
| SI129 Ro405–408 MCQ | `data_b32.js` | SIM129 | 29 | สองชุดเลขในกระดาษเดียว → "n (ชุดที่ 2)" |
| SI129 Ro409–412 MCQ | `data_b33.js` | SIM129 | 47 | ไม่มีเลข 14 ในไฟล์ · ตอบต่างคีย์ 18, 44 |
| SI129 Ro417–420 MCQ | — | — | 0 | PART2 MCQ ในไฟล์ว่าง |
| SI128 Ro401–404 OSCE+CRQ | `osce_b17.js` | SIOS128A | 25 | CRQ 1–8 `sec:"CRQ"` |
| SI128 Ro405–408 OSCE | `osce_b18.js` | SIOS128B | 30 | ฐานพัก 9 ไม่สร้าง · ไม่มีรูป |
| SI128 Ro409–412 OSCE | `osce_b19.js` | SIOS128C | 31 | orig "4+" = แถวไม่มีเลข |
| SI128 Ro413–416 OSCE | `osce_b20.js` | SIOS128D | 30 | ไม่มีรูป |
| SI129 Ro405–408 SEQ | `osce_b21.js` | SIOS129B | 14 | SEQ = OSCE `sec:"SEQ"` (เหมือน CRQ) |
| SI129 Ro417–420 OSCE | `osce_b22.js` | SIOS129E | 25 | |

SI127 (data_b21–26, osce_b13): เติมคีย์จากไฟล์ Key_127 (SIM127K) — ทุกข้อตรงกับข้อเดิม ไม่มีข้อใหม่ · รูปคีย์ `kk127<r>_*` · ข้อที่เปลี่ยนคำตอบตามคีย์และข้อที่ยังตอบต่างคีย์ ดู flag/opinion ของแต่ละข้อ

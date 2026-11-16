# งานวิเคราะห์ชุด MCQ MDCU69–65 (Gen Sx + Subspe Sx) — รอบ 16 พ.ย. 2026

**repo: `/home/claude/ac-mdcu`** (เอกสารเก่าเขียน `/home/claude/sx-mcq` = โฟลเดอร์เดียวกัน)

## ไฟล์ต้นฉบับ 2 ไฟล์ (ทั้งคู่ = recall + เฉลย/เครื่องหมาย/ลายมือในไฟล์เดียว, ไม่มี kfile แยก)
| โค้ด | ไฟล์ | โฟลเดอร์ทำงาน (อ่านอย่างเดียว ห้ามรันอะไรในนั้น) |
|---|---|---|
| **GSUPK** (ไฟล์ A) | `01_2_MCQs_Key_1.pdf` "GENERAL SURGERY SUPPLEMENTARY MATERIAL" 227 หน้า | `A=/tmp/claude-0/-home-claude/c025b845-1cff-5a3c-8ffd-003abd1302f0/scratchpad/pdf` : `src.pdf`, `p-NNN.png` (150 dpi), `t/NNN.txt` (pdftotext -layout ต่อหน้า — ไทยมักเพี้ยน ลายมือเป็นขยะ **ยึดภาพเสมอ**), `imgs74.txt` (pdfimages -list หน้า 74–227) |
| **GSUP4K** (ไฟล์ B) | `01_5_MCQs_Key_4.pdf` ไฟล์รวม AC ศัลย์ปี 2558–2555 292 หน้า | `B=/tmp/claude-0/-home-claude/c025b845-1cff-5a3c-8ffd-003abd1302f0/scratchpad/pdfB` : `src.pdf`, `p-NNN.png` (150 dpi), `t/NNN.txt`, `imgs.txt` |

- สคริปต์ของคุณเขียนไว้ที่ `/tmp/claude-0/-home-claude/c025b845-1cff-5a3c-8ffd-003abd1302f0/scratchpad/scripts/<code>/` · รัน python ด้วย `python3 -I` · ซูมเองได้ `pdftoppm -f N -l N -r 200/300 -x/-y/-W/-H`
- ปี → รุ่น (ปี พ.ศ. − 2490): 2559 = MDCU69 · 2558 = 68 · 2557 = 67 · 2556 = 66 · 2555 = 65 · **R1 = RoA, R2 = RoB, R3 = RoC, R4 = RoD**
- **OSCE / MEQ / PowerPoint ในไฟล์ B ใส่ไปแล้ว (Subspe OSCE) — ห้ามทำซ้ำ** ทำเฉพาะ MCQ

## ชุดของรอบนี้
Gen Sx → ไฟล์ข้อมูลใน `data/` · Subspe Sx → `data_subspe/` · prefix รูป Gen = `q<yy><r>_` / `k<yy><r>_` (เช่น q67a_, k67a_) · Subspe = `qs<yy><r>_` / `ks<yy><r>_`

| code | ชุด | ไฟล์ A (GSUPK) หน้า | ไฟล์ B (GSUP4K) หน้า | data (ผู้ดูแลทำ) |
|---|---|---|---|---|
| a69 | Gen MDCU69 RoA | 74–92 | — | data/data_b29.js |
| c69 | Gen MDCU69 RoC (ไฟล์มี R1, R3 เท่านั้น) | 93–112 | — | data/data_b30.js |
| a68 | Gen MDCU68 RoA | 113–127 | 1–15 | data/data_b31.js |
| c68 | Gen MDCU68 RoC | 128–135 | — | data/data_b32.js |
| d68 | Gen MDCU68 RoD | 136–145 | — | data/data_b33.js |
| a67 | Gen MDCU67 RoA | 146–151 | 16–20 | data/data_b34.js |
| b67 | Gen MDCU67 RoB | 152–159 | 71–77 | data/data_b35.js |
| c67 | Gen MDCU67 RoC | 160–167 | 118–124 | data/data_b36.js |
| d67 | Gen MDCU67 RoD | 168–174 | 180–185 | data/data_b37.js |
| a66 | Gen MDCU66 RoA (หัวกระดาษเขียน "Rotate 2/2556" แต่อยู่ในช่วง R1 และ R2 มีชุดแยก → **RoA**) | 175–181 | 221–226 | data/data_b38.js |
| b66 | Gen MDCU66 RoB | 182–186 | 233–236 (+ดู 238–241 ว่ามี MCQ Gen ไหม) | data/data_b39.js |
| c66 | Gen MDCU66 RoC | 187–190 | 240–244 | data/data_b40.js |
| d66 | Gen MDCU66 RoD | 191–195 | 250–253 | data/data_b41.js |
| a65 + sa65 | MDCU65 RoA — **ข้อสอบ "Surgery" รวมฉบับเดียว** | 196–207 | 259–266 | Gen data/data_b42.js · Subspe data_subspe/data_b10.js |
| b65 + sb65 | MDCU65 RoB — รวมฉบับเดียว | 208–222 | 269–280 | Gen data/data_b43.js · Subspe data_subspe/data_b11.js |
| c65 + sc65 | MDCU65 RoC — รวมฉบับเดียว | 223–227 | 285–292 | Gen data/data_b44.js · Subspe data_subspe/data_b12.js |
| sa67 | Subspe MDCU67 RoA | — | 52–70 | data_subspe/data_b2.js |
| sb67 | Subspe MDCU67 RoB | — | 78–85 | data_subspe/data_b3.js |
| sc67 | Subspe MDCU67 RoC (ไฟล์มี 2 ฉบับ: 125–137 และ 138–150 → รวมตามกติกาปีเดียวกัน) | — | 125–150 | data_subspe/data_b4.js |
| sd67 | Subspe MDCU67 RoD | — | 186–190 | data_subspe/data_b5.js |
| sa66 | Subspe MDCU66 RoA (1/2556) | — | 227–229 | data_subspe/data_b6.js |
| sb66 | Subspe MDCU66 RoB (ดูว่ามี MCQ Subspe ไหม ถ้าไม่มี รายงานแล้วจบ) | — | 237–241 | data_subspe/data_b7.js |
| sc66 | Subspe MDCU66 RoC | — | 245–246 | data_subspe/data_b8.js |
| sd66 | Subspe MDCU66 RoD (หัวหน้าเขียน 4/2557 แต่อยู่ในช่วง 4/2556 → MDCU66 RoD เหมือน OSCE) | — | 254–257 | data_subspe/data_b9.js |

- ขอบหน้าในตารางคือที่ผู้ดูแลเดา — **ตรวจเองว่าหน้าแรก/หน้าสุดท้ายของชุดถูก** (ห้ามเอาข้อของชุดอื่นมา; ถ้าเจอหน้าเกี่ยวข้องนอกช่วง รายงาน) · ถ้าในช่วงหน้าของชุด Gen เจอส่วน Subspecialty (หรือกลับกัน) ให้รายงาน ไม่ต้องทำ
- **MDCU65 (2555) = ข้อสอบศัลย์รวม** → แยกรายข้อตามขอบเขตวอร์ดที่ผู้ใช้กำหนด: **Subspe = colorectal/anorectal, CVT (cardiothoracic), neuro, pediatric surgery, uro, plastic/burn** · ที่เหลือ (HPB, breast, vascular, upper GI/small bowel/appendix/hernia, endocrine/thyroid, trauma, periop/fluid/nutrition/infection, onco ทั่วไป ฯลฯ) → **Gen** · ทำ SPEC 2 ไฟล์ (`SPEC65A.md` = Gen, `SPECS65A.md` = Subspe) เลขข้อในแต่ละชุดนับใหม่ แต่ `orig` = เลขต้นฉบับ · ข้อที่ก้ำกึ่งให้เลือกตามหัวข้อหลักของโจทย์ แล้วรายงาน

## รวม 2 ไฟล์ (กติกาถาวรของผู้ใช้ — `kit/กติกาการรวมคีย์หลายปี` สรุปใน ANALYST5 "กติกาใหม่")
- ชุดที่มีทั้งไฟล์ A และ B = **ปีเดียวกัน → ชุดเดียว** ใส่ทุกข้อจากทั้งสองไฟล์
- โจทย์ + ช้อยเหมือนกัน (หรือน่าจะเหมือนกันมาก — คนละคนจดข้อเดียวกัน) → **ข้อเดียว** ตัดสินคีย์จากทั้งสองไฟล์ (ไม่ตรงกัน → ตามหลักฐานที่น่าเชื่อถือ บอกใน notes ว่าแต่ละไฟล์ตอบอะไร) · ต่างกันแม้คำเดียว/รายละเอียดเดียว (ที่ไม่ใช่แค่จดพลาด) → **แยกข้อ**
- ช่องข้อมูลแหล่งที่มา:
  - มีแค่ไฟล์ A: `file:"GSUPK"`, `page` = หน้า A, `page2 = page`
  - มีแค่ไฟล์ B: `file:"GSUP4K"`, `page` = หน้า B, `page2 = page`
  - มีทั้งสองไฟล์: `file` = ไฟล์ที่จดโจทย์ครบกว่า, `page`/`page2` = หน้าในไฟล์นั้น, **`file2` = อีกไฟล์, `page3` = หน้าในอีกไฟล์, `orig2` = เลขข้อในอีกไฟล์** (เว็บแสดง "และไฟล์ …") · kimg ครอปจากทั้งสองไฟล์ (`k<pfx>_<rid>.jpg` จากไฟล์ A, `k<pfx>_<rid>b.jpg` จากไฟล์ B)
- KS (ต่อท้ายคีย์): ตัวประกอบไฟล์มีค่าคงที่ให้ใช้ — `KSA` = " (คีย์ในไฟล์ GS Supplementary)", `KSB` = " (คีย์ในไฟล์ AC ศัลย์ 2555–2558)", `KSAB` = " (คีย์ในไฟล์ GS Supplementary + AC ศัลย์ 2555–2558)" · ค่าเริ่มของชุด (`KS`) = KSA ถ้าชุดมีไฟล์ A, ไม่งั้น KSB · ระบุใน SPEC ว่าข้อไหนใช้ค่าไหน

## อ่านก่อน (ตามลำดับ)
`parts/ANALYST.md` (ขั้นตอน 1–11) → `parts/ANALYST2.md` (topic list + DUPS ของ Gen) → `parts/ANALYST3.md` (**กติกาถาวรของผู้ใช้ 1–10 + เลขข้อ/orig + ส่งกลับ — ใช้ทั้งหมด**) → `parts/ANALYST4.md` (ส่วน "ข้อที่เขียนว่า 'จำ'") → `parts/ANALYST5.md` (รอบ 70–72 ไฟล์ A เดียวกัน — รูปแบบเครื่องหมายคำตอบ, กติกาใหม่, ความสอดคล้องทั้งคลัง) → แบบฟอร์ม SPEC **`parts/SPEC72A.md`** หรือ `parts/SPEC70C.md` (ไฟล์ A แบบเดียวกัน) — ลอกโครงสร้าง ส่วนหัว รูปแบบตาราง; checker ต้นแบบ `parts/check_72a.js` (แก้ set/ro/file, prefix รูป, KS, เพดานเลข "ข้อ N", และให้ผ่านช่อง file2/page3/orig2)
- **ชุด Subspe:** topic/tag ใช้คลัง Subspe — `data_subspe/TAGS_VOCAB.md`, `data_subspe/topics.js`, `data_subspe/tags.js`; ข้อสอบเดิม Subspe = `data_subspe/data_b1.js` (MDCU79 RoC 51 ข้อ) — ค้น `DIR=data_subspe node tools/find.js "<regex>"`

## ความสอดคล้องทั้งคลัง
คลัง Gen Sx ตอนนี้ = `data/data_b1–b28` (1,628 ข้อ, MDCU79–70) — ค้น `cd /home/claude/ac-mdcu && DIR=data node tools/find.js "<regex>"`; ข้อเรื่องเดียวกันต้องตอบให้ตรงกัน หรือรายงานถ้าคลังเดิมดูผิด (ห้ามแก้ data) · ต่างปี = ต่างข้อเสมอ (ใส่ DUPS) · ชุดพี่น้องรอบนี้ทำขนานกัน: ข้อซ้ำกับชุดพี่น้องใส่ DUPS แบบ `"MDCU67|RoA|<orig>"` ได้ (ไม่บังคับ)
- ข้อที่ไฟล์เขียน "ซ้ำ AC …"/"ซ้ำ rotate 3/57 ข้อ 51" → ดึงโจทย์จริงจากปี/ข้อนั้นมาใส่ (ถ้าหาเจอในไฟล์ใดไฟล์หนึ่งหรือคลัง) ไม่ปล่อยเป็นโน้ต
- ส่วนเฉลยที่มีแต่ "A." หรือช้อยเดียวซ้ำทั้งแถว = ของปลอมให้ดูครบ → ถือว่าไม่มีคีย์

## สิ่งที่ต้องทำ
1. ดูทุกหน้าของชุดตัวเองด้วยตา (ทั้งไฟล์ A และ B) — สรุปวิธีอ่านเครื่องหมายคำตอบของแต่ละไฟล์ไว้ในส่วนหัว SPEC
2. จับคู่ข้อระหว่างไฟล์ A กับ B (ถ้ามี) → ตาราง SPEC หนึ่งแถวต่อหนึ่งข้อของชุด พร้อมคอลัมน์แหล่ง (A / B / A+B)
3. ครอปรูป: `img/q<pfx>_<rid>.jpg` (≤700px, q~72), `img/k<pfx>_<rid>.jpg` / `..._<rid>b.jpg` (760px, q~64; ต่อแนวตั้งได้) — ข้อที่มีลายมือ/เครื่องหมายต้องมี kimg · ตรวจกับ imgs list ว่ารูปเนื้อหาใช้ครบ + รูปที่ถูกตัด/เลยขอบหน้า · **ห้ามมีชื่อคน/HN/ชื่อเฟซบุ๊กในรูปหรือข้อความ** (ปิดทับ)
4. เขียน `parts/SPEC<ชุด>.md` (ชื่อไฟล์: SPEC69A, SPEC67B, SPECS67A …; ตาราง Part ละ ~15–18 ข้อ) + `parts/check_<code>.js` + `parts/meta6965/<code>_tt.json` และ `<code>_dups.json`
5. **ห้ามเขียน** data/, data_subspe/, config.json, topics/tags/dups, ไฟล์ของชุดอื่น หรือ git

## ส่งกลับ
ตาม ANALYST3.md "ส่งกลับ" (สั้น) + จำนวนข้อ (แยกที่มาจาก A / B / A+B) + จำนวน Part + ขอบหน้าที่ตรวจแล้ว + ข้อ "จำ"/"ซ้ำ AC" ที่พบ — ปิดท้ายด้วย JSON 2 บรรทัด TOPICS_TAGS และ DUPS (ชุด 65: แยก Gen/Subspe)

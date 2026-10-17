# SPEC — OB-GYN MEQ ข้อสอบเก่า (AC) ชุด 77A/B/C/D, 78B/C/D, 79B

เว็บคลังข้อสอบเก่าของนิสิตแพทย์จุฬาฯ ปี 4 (repo `/home/claude/ac-mdcu`). งานนี้ = ใส่ **MEQ (modified essay question) ข้อสอบเก่าวอร์ด OB-GYN** ทีละชุด เป็นไฟล์ bank `data_obgyn/meq_b<N>.js`. **ความถูกต้องทางการแพทย์สำคัญที่สุด** ผู้ใช้ตรวจเองทุกข้อ.

## รูปแบบ — ทำตาม bank ที่มีอยู่แล้วทุกอย่าง (อ่านก่อนเขียน)
- **สไตล์ 1 (case-based, ข้อมูลใหม่เปิดทีละช่วง):** `data_obgyn/meq_b1.js` (อ่านทั้งไฟล์ — เป็นตัวอย่างหลัก) และ `data_obgyn/meq_b3.js`
- **สไตล์ 2 (short answer ข้อเดียวจบ `sa:true`):** `data_obgyn/meq_b2.js` (ดู 3–4 ข้อแรก)
- โครงสร้าง: **ข้อ (case)** `{set, ro, file, page, orig, title, stem, gray, parts:[…], interp, approach, trap, summary:[…], notes, kimg:[…], tags:[…], opinion}` → **parts** = ช่วงที่เปิดพร้อมกัน `{info?, igray?, img?, subs:[…]}` (part แรกไม่มี info; part ถัดไป**ต้องมี info** = ข้อมูลใหม่ที่โจทย์เพิ่มให้ เช่น ผล lab/US; ไม่มีข้อมูลใหม่คั่น = อยู่ part เดียวกัน) → **subs** = คำถามย่อย `{q, gray, tags, marks, ctx, qx, rubric, key, kimg, ans, exp, points, kw, img?, flag?}`
  - `stem`/`q`/`info` = ภาษาอังกฤษ formal แบบข้อสอบจริง แปลจากต้นฉบับให้ตรง ห้ามเติมคำใบ้/diagnosis ที่ต้นฉบับไม่ได้ให้ · `gray`/`igray` = ข้อความต้นฉบับตรงตัว (ไทยได้)
  - `marks` = คะแนนตามต้นฉบับ (ถ้าไม่บอก ประมาณตามจำนวนประเด็น) · `ctx` = สรุปสถานการณ์ถึงตอนนี้ 1 บรรทัด (ไทย) · `qx` = โจทย์ต้องการอะไร (ไทย)
  - `key` = **เฉลยจากไฟล์เฉลยตรงตัว** + `" (เฉลยในไฟล์ <ชื่อไฟล์ย่อ>)"`; ไม่มีในไฟล์ → `"ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)"` (ถ้าไฟล์โจทย์มีคนจดคำตอบไว้ ใส่ต่อท้าย "— ผู้จดใส่ไว้: …")
  - `ans` = เฉลยของเรา (คำตอบตัวอย่างที่ได้เต็ม) · `exp` = อธิบายละเอียด `<ul><li>` เกณฑ์ ตัวเลข ขนาดยา guideline · `rubric` = `<b>ได้</b>: … · <b>บางส่วน</b>: … · <b>ไม่ได้</b>: …`
  - `points` = checklist ประเด็นที่ต้องมี (string หรือ `A(label,[ตัวเลือก…],need)`) · `kw` = **regex ภาษาไทย+อังกฤษ ต่อประเด็น ยาวเท่า points** (string point → `["regex",…]`; A-point → `[["regex"],["regex"],…]` ตามจำนวน any) — ให้ match คำตอบนิสิตที่เขียนได้หลายแบบ (ย่อ/เต็ม/ไทย/อังกฤษ)
  - `tags` (case และทุก sub) จากรายการนี้เท่านั้น: `ante` Antenatal care · `labor` Labor & delivery · `pp` Postpartum · `comp` Obstetric complications · `med` Medical diseases in pregnancy · `gyn` Gynecology · `onco` Gyn oncology · `repro` Reproductive & family planning
  - case-level: `interp` (โจทย์ทั้งข้อกำลังวัดอะไร), `approach` (แนวคิดทีละ part), `trap`, `summary` (4–8 bullet ความรู้ครบในตัว), `notes` (ถอดทุกอย่างที่จดในไฟล์ + ข้อสังเกต + สิ่งที่เราเติม/แก้), `opinion` (เห็นด้วยกับเฉลยไฟล์ไหม ความมั่นใจ)
  - `flag:"⚠ …"` ใน sub ที่ recall ไม่ครบจนต้องแต่งคำถาม / ไม่เห็นด้วยกับเฉลยไฟล์ / ตีความได้หลายแบบ
- HTML ได้ (`<b> <ul><li> <br> <sub> <sup>`) · `&lt;` `&gt;` แทน < > ในข้อความ · ห้าม backtick ในข้อมูล (template literal ของ JS ใช้ backtick ได้แค่เป็นตัวครอบ string แบบใน meq_b1.js แต่ห้ามมี backtick ข้างในข้อความ) · รูปในข้อความใช้ `{{IMG:ชื่อ}}` (ชื่อรูปต้องเป็น `[a-z0-9_]` เท่านั้น)
- ไฟล์ bank ห่อด้วย `(function(){ … QB.push(C({…}), C({…})); })();` แบบ meq_b1.js; helper `C` ตั้ง set/ro/file ของชุด, `A(label,any,need)`

## กติกาเนื้อหา (ผู้ใช้สั่ง — ใช้กับทุกชุด)
1. **ใส่ครบทุกข้อ/ทุกคำถามย่อยที่มีอะไรจดไว้** แม้จดแค่คำเดียวแต่บอกได้ว่าเรื่องอะไร → แต่งคำถามให้เข้ากับเรื่องนั้น (flag ⚠ recall ไม่ครบ). ข้ามเฉพาะส่วนที่ไม่มีอะไรบอกเรื่องเลยจริง ๆ (ตรวจทั้งไฟล์โจทย์และไฟล์เฉลย).
2. โจทย์ใกล้ต้นฉบับที่สุด ไม่ใบ้เกินที่ข้อสอบจริงให้; คำถามที่แต่งเองต้องเป็นแบบ case และอังกฤษ formal.
3. **รูป:** รูปที่อยู่ในโจทย์ (US, CTG, partograph, ภาพ ฯลฯ) ต้องแคปใส่ (`img` ของ case/part/sub ตามตำแหน่งที่โจทย์ให้). รูป/ลายมือ/ไฮไลต์ในไฟล์เฉลย → แคปใส่ `kimg` ของ sub นั้น. **รูปที่ถูกตัด** (เลยขอบหน้า/แสดงไม่ครบ) ยังต้องแคป + บอกในเฉลยข้อนั้น + รายงาน. ตรวจแล้ว: Key 77B หน้า 3 (รูปล่าง y≈609–856 เลยขอบล่าง), หน้า 5 (รูปเต็มหน้าเลยขอบทุกด้าน), หน้า 8 (รูปขวาเลยขอบขวา) — ถ้ารูปที่ฝังในไฟล์ครบกว่าที่แสดง ดึงด้วย `pdfimages -j -f N -l N <pdf> <dir>/x` แล้วใช้รูปเต็ม (บอกว่าในไฟล์ถูกตัด).
4. **kimg ทุก sub**: ครอปส่วนที่เป็นเฉลยของคำถามย่อยนั้นจากไฟล์เฉลย; ชุดที่ไม่มีไฟล์เฉลย/เฉลยว่าง → ครอปคำถามย่อยนั้นจากไฟล์โจทย์ (ให้ผู้ใช้เห็นต้นฉบับ).
5. MEQ ใช้แค่เฉลยจากไฟล์ + เฉลยที่ Claude เขียน (ไม่ดึง resource/โน้ตอื่น).

## เครื่องมือ
- หน้า 110 dpi สำหรับดู: `/tmp/claude-0/meq/hr/<ชื่อไฟล์ไม่มี .pdf>-NN.jpg` · ข้อความ (ร่าง ต้องเทียบรูป — ไทยจาก PDF มักสระเพี้ยน): `/tmp/claude-0/meq/pt/<ชื่อไฟล์>.txt` · PDF: `/tmp/claude-0/meq/src/<ชื่อไฟล์>.pdf` · ซูม: `pdftoppm -r 250 -f N -l N -jpeg <pdf> <ของคุณใน scratch>`
- ครอปรูป: `python3 /home/claude/ac-mdcu/tools/crop_pdf.py <pdf> <page> <y0> <y1> <name> [x0 x1]` (หน่วย pt จากมุมบนซ้าย; หาตำแหน่งด้วย `python3 -c "import pdfplumber;…extract_words()"`) → `img/<name>.jpg` · **ตั้งชื่อด้วย prefix ของชุดคุณเท่านั้น** (ตารางด้านล่าง) เช่น `kmq77b_1a` (ข้อ 1 คำถาม a), `qmq77b_1` (รูปโจทย์) · ห้ามทับรูปของคนอื่น · **เปิดดูทุกรูปที่ครอป**
- ตรวจ: `node /home/claude/ac-mdcu/parts/check_meq.js /home/claude/ac-mdcu/data_obgyn/meq_b<N>.js` ต้องได้ `bad 0`

## ชุด (หนึ่งชุด = หนึ่งไฟล์ bank)
| bank | ชุด | set / ro | file (โค้ด) | ไฟล์โจทย์ | ไฟล์เฉลย | prefix รูป |
|---|---|---|---|---|---|---|
| meq_b6 | 77A | MDCU77 / RoA | M77AQ | 77A_MEQ_OBGYN (11 หน้า) | — | `qmq77a_` `kmq77a_` |
| meq_b7 | 77B | MDCU77 / RoB | M77BQ (+ kfile M77BK) | 77B_MEQ_OBGYN_AC (11) | Key_77B_MEQ_OBGYN_rotate_B_MDCU_77__________ (12 หน้า มีรูป/ลายมือ 16 รูป) | `qmq77b_` `kmq77b_` |
| meq_b8 | 77C | MDCU77 / RoC | M77CQ | 77C_MEQ_OBGYN_AC (5) — recall ย่อ ("อันนี้แค่ pick up key points") | — | `qmq77c_` `kmq77c_` |
| meq_b9 | 77D | MDCU77 / RoD | M77DQ (+ M77DK) | 77D_MEQ_OBGYN_AC (4 หน้า มีรูป 5) | Key_77D_MEQ_OBGYN_Rotate_D (13 หน้า รูป 12) | `qmq77d_` `kmq77d_` |
| meq_b10 | 78B | MDCU78 / RoB | M78BQ (+ M78BK) | 78B_MEQ_OBGYN_AC78_MEQ_OBGYN_rotate_B (12) | Key_78B_… (เกือบว่าง: มีแค่ "urine", "transvaginal", "เฉลย:" บางที่) | `qmq78b_` `kmq78b_` |
| meq_b11 | 78C | MDCU78 / RoC | M78CQ | 78C_MEQ_…_rotate_C (5) | — | `qmq78c_` `kmq78c_` |
| meq_b12 | 78D | MDCU78 / RoD | M78DQ (+ M78DK) | 78D_MEQ_…_Rotate_D (6) | Key_78D_… (เกือบว่าง: ข้อ 4.2 + "Menstrual pattern / Frequency / Since when? / Transvaginal ultrasound / Laparoscopy") | `qmq78d_` `kmq78d_` |
| meq_b13 | 79B | MDCU79 / RoB | M79BQ | 79B_MEQ_OBGYN_AC79_MEQ_OBGYN_RoB (7) | — (ไม่มีคีย์) | `qmq79b_` `kmq79b_` |
- `C=o=>Object.assign({set:"MDCU77",ro:"RoA",file:"M77AQ",opinion:""},o)` (ชุดที่มีไฟล์เฉลยเพิ่ม `kfile:"M77BK"`) · `page` = หน้าในไฟล์โจทย์ (ใส่ `page2` = หน้าในไฟล์เฉลยถ้ามี) · `orig` = เลขข้อตามไฟล์ ("1", "2", …; ถ้าไฟล์แบ่ง Part 1 MEQ / Part 2 short answer ให้ใช้ "MEQ 1" / "SA 3" ฯลฯ ให้ผู้ใช้หาเจอ) · ข้อ short answer เดี่ยว ๆ → `sa:true` ทำแบบ meq_b2
- ไฟล์โจทย์บางชุดมีคนจดคำตอบ/เฉลยไว้ในตัว → ถือเป็นเฉลยในไฟล์ (บอกใน key ว่ามาจากไฟล์โจทย์)

## รายงานสุดท้าย (สั้น)
ไฟล์ + จำนวนข้อ/คำถามย่อย + orig · รูปที่สร้าง · รูปที่ถูกตัด (ข้อไหน) · ทุก flag · ส่วนที่ข้าม (และทำไม) · สิ่งที่ไม่แน่ใจ

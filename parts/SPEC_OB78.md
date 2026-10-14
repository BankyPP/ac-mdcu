# SPEC — ข้อสอบเก่า (AC) MCQ วอร์ด OB-GYN ชุด MDCU78 Rotate B / C / D

เว็บคลังข้อสอบเก่าสำหรับนิสิตแพทย์จุฬาฯ ปี 4 (repo `/home/claude/sx-mcq`) — กำลังเพิ่ม **MCQ ข้อสอบเก่าของวอร์ดสูติ-นรีเวช (OB-GYN)** เป็นครั้งแรก. คุณได้รับมอบหมาย "ช่วงข้อ" ช่วงหนึ่ง (ดูใน assignment) ให้ถอดและเขียนเป็นข้อสอบ MCQ พร้อมเฉลยละเอียด. **ความถูกต้องทางการแพทย์สำคัญที่สุด** และผู้ใช้ตรวจเองทุกข้อ.

## ไฟล์ต้นฉบับ (ทุกไฟล์เป็นเอกสารพิมพ์จาก Google Docs ส่งออกจาก iOS — ตรวจทุกหน้าแล้ว **ไม่มีลายมือ ไม่มีการวง/ไฮไลต์** มีแต่ตัวพิมพ์; ถ้าคุณเห็นอะไรที่ไม่ใช่ตัวพิมพ์ เช่น ตัวหนา สี ขีดฆ่า ให้ถอดและบอกใน notes)
รูปหน้า 150 dpi: `/tmp/claude-0/ob/hr/<F>-NN.jpg` · ข้อความต่อหน้า (pdftotext -layout ใช้เป็นร่าง ต้องเทียบกับรูปเสมอ — คอลัมน์โจทย์/ช้อยอาจสลับบรรทัดกัน): `/tmp/claude-0/ob/pt/<F>-NN.txt` · PDF: `/tmp/claude-0/ob/src/<F>.pdf` (ซูมได้ด้วย `pdftoppm -r 300 -f N -l N -jpeg`)

| F | โค้ดในเว็บ (file/kfile) | ไฟล์ | เนื้อหา |
|---|---|---|---|
| bQ | `O78BQ` | 78B_OBGYN_AC78_MCQ_OBGYN_Rotate_B.pdf (19 หน้า) | "AC-MCQ Rotate B" ตาราง ข้อ/โจทย์/Choice — ข้อ 1–49 มีเลข เป็นโจทย์ภาษาอังกฤษเต็ม ๆ; ต่อจากข้อ 49 (หน้า 14–19) เป็นแถว**ไม่มีเลข** recall สั้น ๆ ไทยปนอังกฤษ (ช้อยไม่ครบ) แล้วปิดท้ายด้วยกล่อง "ข้ออื่นๆ" = รายการ recall สั้น ๆ ขึ้นต้นด้วย "-" ไม่มีช้อย |
| bK | `O78BK` | Key_78B_OBGYN_AC_MCQs_OBGYN_rotate_B.pdf (7 หน้า) | "Key AC-MCQ Rotate B" ตาราง ข้อ/Choice/เฉลยละเอียด — ส่วนใหญ่มีแค่ตัวอักษร (บางข้อ "C/D?", "B/C?", "C/E?", "A + E"); เฉลยละเอียดมีแค่ข้อ 3 ("น้ำ>ฉี่>สี>บวม>ตาย เรียง stage 1>5 ตามนี้เลย") และข้อ 13 ("Clinda 2nd line"); แถว 39 และ 51 มี "A." อยู่ในช่องเฉลยละเอียด (ไม่มีความหมาย = ช่องว่างในเทมเพลต); แถว 50–65 ว่าง (เลขแถวในไฟล์: 59, 60, 61, 65, 63, 64, 65) |
| cQ | `O78CQ` | 78C_OBGYN_AC78_MCQ_OBGYN_rotate_C.pdf (29 หน้า) | หน้า 1–12 แท็บ "Obstetric" แบ่ง **Chapter** (ANC, Labor and delivery & dystocia, Preterm and (P)PROM, Postterm, fetal surveillance, Anemia and Thalassemia, Puerperium care and puerperium complication, Second half bleeding, Hypertensive, Medical disease in pregnancy…, Multifetal gestation and Polyhydramnios, Infectious in pregnancy, อื่น ๆ) แถวส่วนใหญ่**ไม่มีเลขข้อ**; หน้า 13–19 แท็บ "Gynecology" (Anatomy, Amenorrhea puberty, Dysmenorrhea & Endometriosis, Infertility, Sexual assault, First half bleeding, Endometrium, Leukorrhea and STD, Sexual problems, Pelvic organ prolapsed and urinary incontinence, Ovarian neoplasm, Vulva, Cervix, อื่น ๆ); หน้า 20–29 **"Tab 1"** = recall ชุดเดียวกันอีกฉบับ ข้อ 1–36 มีเลข (ข้อความอยู่ที่ `/tmp/claude-0/ob/c_tab1.txt`) — **ทุกข้อใน Tab 1 คือข้อเดียวกับที่อยู่ใน chapter (ไม่ใช่ข้อใหม่)** ห้ามเขียนแยกเป็นข้อใหม่ ให้รวมเข้าข้อใน chapter (ดูหัวข้อ Tab 1 ด้านล่าง) |
| cK | `O78CK` | KEY_78C_OBGYN_AC_MCQs_OBGYN_rotate_C.pdf (11 หน้า) | "Key Obstetric" + "Key Gynecology" ตาราง ข้อ/Choice/เฉลยละเอียด แบ่ง chapter แบบเดียวกับ cQ — **แถวเรียงตรงกับแถวใน cQ ทีละแถวภายใน chapter เดียวกัน** (นับลำดับแถวที่มีโจทย์); ช่อง Choice มีแค่ตัวอักษร; เทมเพลตมี chapter เกินมา (PID, Sexual assault, Puberty…, GTD ในแท็บ Obstetric) ที่ว่างเปล่า; "A." ที่อยู่ในช่องเฉลยละเอียด = ช่องว่างของเทมเพลต ไม่ใช่คำตอบ |
| dQ | `O78DQ` | 78D_OBGYN_AC_MCQs_OBGYN_rotate_D_2.pdf (44 หน้า) | หน้า 1–15 แท็บ Obstetric (chapter แบบเดียวกัน + chapter ในแท็บนี้: PID, Sexual assault, Puberty and amenorrhea, Menopause and menopausal disorder, Endometrial cancer, Cervical CA screeningS, Neoplasm of vulva and vagina, GTD); หน้า 16–22 แท็บ Gynecology (หน้า 20 มีรูปจริง 1 รูป = ภาพถ่าย gross ของ cystic teratoma มีผม → บันทึกแล้วเป็น `qob78d_ovary`); **หน้า 23–44 "เฉลย AC MCQ OBGYN — Rotate D" = เฉลยที่ AI เขียน** ข้อ 1–72 (PART 1: OBSTETRICS ข้อ 1–41; PART 2: GYNAECOLOGY ข้อ 42–64 = chapter PID…GTD ที่อยู่ในแท็บ Obstetric; "GYNECOLOGY เพิ่มเติม" ข้อ 65–72 = แท็บ Gynecology) + หน้า 37 และ 43–44 มีรายการ "จุดที่ต้องแก้จากข้อสอบเก่า" (อ่านด้วย) — ✅ = คำตอบ, ⚠️ = AI ไม่มั่นใจ/โจทย์ไม่ครบ |
| dK | `O78DK` | Key_78D_OBGYN_AC_MCQs_OBGYN_rotate_D.pdf (10 หน้า) | เทมเพลตเฉลยอีกแหล่ง — **ตรวจแล้วว่างทั้งไฟล์** (มีแต่ "A." ของเทมเพลตในบางแถว) ไม่มีคำตอบเลย |

รูปโจทย์ที่บันทึกไว้แล้ว (ใช้ `img:"<key>"`): `qob78b_17` (bQ หน้า 7 ข้อ 17 ภาพถ่ายทารก — ดูรูปแล้วตีความเอง), `qob78b_25` (bQ หน้า 9 ข้อ 25 อัลตราซาวนด์ครรภ์แฝด — ดูรูปแล้วตีความเองว่าผนังกั้นเป็นแบบไหน), `qob78d_ovary` (dQ หน้า 20 Ovarian neoplasm). ไม่มีรูปอื่นในไฟล์ (dQ "Picture of theca lutein cyst", "Picture of Lambda sign" เป็นแค่ข้อความ — ไม่มีรูป ห้ามแต่งว่ามีรูป; เขียนโจทย์เป็นคำบรรยายภาพแทนได้โดยไม่ใบ้คำตอบ)

## รูปแบบเอาต์พุต
เขียนไฟล์ที่ assignment กำหนด (`/home/claude/sx-mcq/parts/ob78<x>_p<N>.js`) มีแค่รายการ `A({...}),` ต่อกัน ไม่มี header. Header (ใส่ให้ตอนรวมไฟล์) มีตัวช่วย:
```js
const LT="ABCDE";
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)";
const RC=(x)=>NK+" — ผู้จดใส่คำตอบไว้: "+x;
// 78B: KS=" (คีย์ในไฟล์ Key 78B)"  KI=(...n)=>n.map(i=>"kob78b_"+i)  QI=n=>"qob78b_"+n ; A ใส่ set:"MDCU78", ro:"RoB", file:"O78BQ", kfile:"O78BK"
// 78C: KS=" (คีย์ในไฟล์ KEY 78C)"  KI=(...n)=>n.map(i=>"kob78c_"+i)                    ; A ใส่ set:"MDCU78", ro:"RoC", file:"O78CQ", kfile:"O78CK"
// 78D: KS=" (เฉลย AI ท้ายไฟล์ 78D)" KI=(...n)=>n.map(i=>"kob78d_"+i)                    ; A ใส่ set:"MDCU78", ro:"RoD", file:"O78DQ", kfile:"O78DQ"
// wrong เป็น array 4 ตัว เรียงตามตัวอักษรของช้อยที่ผิด (A แปลงเป็น object ให้เอง)
```
แต่ละข้อ:
```js
A({page:<หน้าในไฟล์โจทย์>, page2:<หน้าในไฟล์เฉลย (78D = หน้าเฉลย AI ในไฟล์ dQ) หรือ "-" ถ้าไม่มี>, orig:"<ดูกติกา orig>", kimg:KI("<ชื่อรูปเฉลยที่ครอป>"), img:"<ถ้ามีรูปโจทย์>",
  tp:"<หัวข้อ 1 อันจากรายการ TOPIC>", tg:["<tag กว้าง 1–4 อันจากรายการ TAG>"], t1:"<78C เท่านั้น: เลขข้อใน Tab 1 ถ้าตรง>",
  stem:"<โจทย์อังกฤษ formal>",
  gray:"<ข้อความต้นฉบับตรงตัว: โจทย์> — <ช้อยต้นฉบับ A. … B. …>",
  opts:["…","…","…","…","…"],   // 5 ข้อเสมอ
  ans:<0-4>, key:"<ตัวอักษรตามช้อยใหม่ของเรา> <ข้อความช้อยที่คีย์เลือก>"+KS,   // ไม่มีคีย์ → NK ; flag:"⚠ …" ถ้าต้องติดธง
  interp:"…", why:"…", wrong:["…","…","…","…"], trap:"…",
  summary:["…",…], notes:"…", mnemonic:"…", guide:"…", opinion:"…", variants:["…","…"]}),
```
- HTML ได้ (`<b>`), ในเนื้อหาเขียน `&lt;` `&gt;` แทน < >, ห้าม backtick, ใช้ double quote ใน JS string และ escape ภายในเป็น `\"`
- เนื้อหาเฉลยภาษาไทยปนศัพท์แพทย์อังกฤษ (เหมือนชุด Gen Sx — ดูตัวอย่างข้อที่เขียนเสร็จแล้วใน `/home/claude/sx-mcq/data/data_b13.js` 2–3 ข้อแรก และ `/home/claude/sx-mcq/examples/data_b1.example.js`)

## orig / เลขข้อ (สำคัญ — เป็น key ของ topic/tag `"MDCU78|Ro<x>|<orig>"` ต้องไม่ซ้ำในชุด)
- **78B:** ข้อ 1–49 → `orig:"1"`…`"49"` ตามเลขในไฟล์. แถวไม่มีเลขหลังข้อ 49 → นับต่อ `"50"`, `"51"`, … ตามลำดับแถวในไฟล์ (แถว 1 แถว = 1 ข้อ; ช่องคำตอบในไฟล์ key แถว 50+ ว่างทั้งหมด). รายการในกล่อง "ข้ออื่นๆ" → `orig:"อื่นๆ 1"`, `"อื่นๆ 2"`, … ตามลำดับ.
- **78C / 78D:** `orig:"<ชื่อ chapter ตามไฟล์> <ลำดับแถวที่มีโจทย์ใน chapter นั้น เริ่ม 1>"` — ใส่คำนำหน้าแท็บให้ chapter ที่ชื่อซ้ำกันระหว่างแท็บ: แท็บ Gynecology ใช้ `"Gyn <chapter> <n>"` ทุก chapter (เช่น `"Gyn Anatomy 1"`, `"Gyn อื่น ๆ 2"`), แท็บ Obstetric ใช้ชื่อ chapter ตรง ๆ (เช่น `"ANC 3"`, `"Labor and delivery & dystocia 5"`, `"Sexual assault 1"`). ชื่อ chapter ยาวให้ย่อแบบคงที่: "Puerperium care and puerperium complication"→`"Puerperium"`, "Medical disease in pregnancy: Heart disease,DM, UTI, thyroid"→`"Medical disease"`, "Multifetal gestation and Polyhydramnios"→`"Multifetal"`, "Pelvic organ prolapsed and urinary incontinence"→`"POP & UI"`, "Labor and delivery & dystocia"→`"Labor & dystocia"`, "Preterm and (P)PROM"→`"Preterm & PROM"`, "Anemia and Thalassemia"→`"Anemia"`, "Dysmenorrhea & Endometriosis"→`"Dysmenorrhea"`, "Cervical CA screeningS"→`"Cervical screening"`, "Neoplasm of vulva and vagina"→`"Vulva & vagina"`, "Menopause and menopausal disorder"→`"Menopause"`, "Puberty and amenorrhea"→`"Puberty"`, "Amenorrhea, puberty"→`"Amenorrhea"`, "Leukorrhea and STD"→`"Leukorrhea & STD"`, "Infectious in pregnancy"→`"Infection"`, "Second half bleeding"→`"Second half bleeding"`, ที่เหลือใช้ชื่อเดิม (ANC, Postterm, fetal surveillance→`"Fetal surveillance"`, Hypertensive, อื่น ๆ, PID, Sexual assault, Endometrial cancer, GTD, Anatomy, Infertility, First half bleeding, Endometrium, Sexual problems, Ovarian neoplasm, Vulva, Cervix). ตัวอย่าง: `"Preterm & PROM 2"`, `"Gyn POP & UI 1"`, `"Gyn Leukorrhea & STD 3"`.
- **แถวว่าง** (มีแค่ "A." / "B." / "1." หรือเลขข้อ ไม่มีโจทย์) **ไม่นับ** และไม่เขียน. แถวที่มีแค่คำ/หัวข้อสั้น ๆ (เช่น "Macrosomia ???", "Postterm — amniotomy", "ectopic") **นับเป็นข้อ** (ดูกติกา recall ไม่ครบ).
- โจทย์ 2 ข้อที่จดไว้ในแถวเดียว → แยกเป็น 2 ข้อ: `"… 3"` และ `"… 3b"`.

## คีย์ (key) — แหล่งเฉลยของแต่ละชุด
- **78B:** ตัวอักษรในไฟล์ bK ตามเลขข้อ (ตัวอักษรอ้างช้อยในไฟล์โจทย์ — แปลงเป็นตัวอักษรของช้อยใหม่ของเรา). คีย์แบบ "C/D?", "A + E" ฯลฯ = รุ่นพี่ไม่แน่ใจ/ตอบ 2 ช้อย → ตอบตามหลักฐาน, key เขียนตามไฟล์ เช่น `key:"คีย์เขียน C/D? (ไม่แน่ใจ) — ตรงกับช้อย B/C ของเรา"+KS`, ติด `flag:"⚠ …"` อธิบายใน opinion. ข้อ 50+ และ "อื่นๆ" ไม่มีคีย์ → `key:NK` (ถ้าผู้จดเขียนคำตอบไว้ในคอลัมน์ช้อย เช่น "A. reassure" ที่มีช้อยเดียว ให้ใช้ `RC("reassure")`).
- **78C:** ตัวอักษรในไฟล์ cK ของแถวที่ตรงกัน (แถวลำดับเดียวกันใน chapter เดียวกัน — ตรวจด้วยตาว่าตัวอักษรเข้ากับช้อยของแถวนั้นจริง; ถ้าดูแล้วเลื่อนแถว ให้บอกใน notes). ช้อยในไฟล์โจทย์มักมีไม่ครบ (บางแถวมีช้อยเดียว "A. …" = ผู้จดจำได้แค่คำตอบ) → คีย์ "A" ของแถวที่มีช้อยเดียว = คำตอบคือข้อความนั้น. แถวที่ cK ว่าง → `NK` (ถ้า cQ มีช้อยเดียวให้ใช้ `RC("…")`).
- **78D:** คำตอบในเฉลย AI ท้ายไฟล์ dQ (✅ ตอบ …). ต้องจับคู่ข้อ AI 1–72 กับแถวโจทย์ให้ถูก (ดูหัวข้อ AI ใช้คำบรรยายโจทย์ภาษาไทยสั้น ๆ). key: `key:"<ตัวอักษรของเรา> <ข้อความ>"+KS` และถ้า AI ติด ⚠️ หรือบอกว่าไม่มีคำตอบที่ถูก ให้เขียน key ตามที่ AI เขียน + flag. เฉลย AI **ไม่ใช่เฉลยของรุ่นพี่** — ตรวจทุกข้อกับตำรา/guideline; ไม่เห็นด้วย → ตอบตามหลักฐาน + flag + opinion. ไฟล์ dK ว่างทั้งไฟล์ → ใส่ใน notes ทุกข้อของ 78D สั้น ๆ: "ไฟล์ Key 78D อีกแหล่งไม่มีคำตอบข้อนี้".
- **kimg (รูปเฉลย) — ทุกข้อที่ไฟล์เฉลยมีอะไรของข้อนั้น ต้องมี kimg:** ครอปจาก `/tmp/claude-0/ob/hr/<F>-NN.jpg` (150 dpi) ให้เห็นแถวนั้นทั้งแถว (เลขข้อ + Choice + เฉลยละเอียด; 78D = บล็อกเฉลย AI ของข้อนั้นตั้งแต่หัวข้อจนจบคำอธิบาย — ถ้าข้ามหน้าให้ครอป 2 รูป `…_<n>` และ `…_<n>b`). ย่อกว้างไม่เกิน 1100 px, JPEG quality 82, บันทึก `/home/claude/sx-mcq/img/<ชื่อ>.jpg`: 78B `kob78b_<เลขข้อ>` · 78C `kob78c_<slug>` (slug = orig แปลงเป็นตัวพิมพ์เล็ก ไม่มีช่องว่าง/อักขระพิเศษ เช่น "Labor & dystocia 5"→`labor5`, "Gyn Anatomy 1"→`gynanat1` — ตั้งให้สั้นและไม่ซ้ำ) · 78D `kob78d_ai<เลขข้อ AI>`. **เปิดดูทุกรูปที่ครอป** ว่าครบแถวไม่ถูกตัด. ห้ามทับไฟล์ที่มีอยู่แล้ว. แถวที่ไฟล์เฉลยว่างเปล่า (ไม่มีตัวอักษร) ไม่ต้องมี kimg.

## Tab 1 ของ 78C (เฉพาะงาน 78C)
อ่าน `/tmp/claude-0/ob/c_tab1.txt` (Tab 1 ข้อ 1–36, หน้า cQ 21–27). สำหรับทุกข้อในช่วงของคุณที่ตรงกับข้อใน Tab 1: ใส่ `t1:"<เลข>"`, ต่อท้าย gray ด้วย `" · Tab 1 ข้อ <เลข> (หน้า <p>): <ข้อความ Tab 1 ตรงตัว + ช้อย>"` และถ้า Tab 1 มีช้อย/ข้อมูลเพิ่มจาก chapter (เช่น ช้อยครบกว่า) ให้ใช้ข้อมูลนั้นสร้างช้อย และบอกใน notes ว่าต่างกันอย่างไร. ห้ามเขียนข้อ Tab 1 แยกเป็นข้อใหม่.

## กติกาเขียน (สำคัญมาก — ผู้ใช้ตรวจเองทุกข้อ)
1. **stem ใกล้ต้นฉบับที่สุด ห้ามใบ้เกินที่ข้อสอบจริงให้**: ให้ค่าแลปแล้วห้ามวงเล็บแปลผล/diagnosis, ห้ามบอกชื่อโรค/sign ที่ให้ตีความเอง, ห้ามเติม normal range ที่ต้นฉบับไม่มี, ห้ามคำใบ้ ("classic"), ห้ามตัดตัวลวง — เติมได้แค่ที่จำเป็นให้อ่านรู้เรื่องและเหลือคำตอบเดียว. โจทย์อังกฤษ formal เหมือนข้อสอบจริง.
2. **recall ไม่ครบ** (ส่วนใหญ่ของ 78C/78D และแถว 50+/อื่นๆ ของ 78B): เขียนเป็นโจทย์ case-based ที่สมบูรณ์ ถามประเด็นที่ recall บอกให้ตรงที่สุด ใช้ช้อยที่ผู้จดจำได้ทั้งหมด (แปลตรง) แล้วแต่งตัวลวงเพิ่มให้ครบ 5 ที่สมเหตุสมผล รูปแบบ/ความยาวใกล้กัน. ใน notes เขียนว่า "ต้นฉบับจดไว้: … — โจทย์และช้อย X ข้อเป็นของต้นฉบับ ที่เหลือเติมเอง". ถ้า recall คลุมเครือจนเดาโจทย์ได้หลายแบบ เลือกแบบที่น่าจะออกที่สุด ติด `flag:"⚠ recall ไม่ครบ — …"` และบอกใน opinion/variants ว่าถ้าถามอีกแบบจะตอบอะไร.
3. **ต้นฉบับตอบได้ ≥2 ช้อย**: เติมข้อมูลเท่าที่พอให้เหลือคำตอบเดียว แล้วในเฉลยเขียน (1) ต้นฉบับตอบได้ช้อยไหนบ้าง (2) เติมอะไร (3) ถ้าโจทย์ให้แบบไหนจะตอบอีกช้อย — ใส่ใน wrong ของช้อยนั้น + opinion และติด flag ⚠.
4. **ช้อย**: แปลจากต้นฉบับให้ตรง ไม่เติมข้อมูล; ห้ามวงเล็บ, ห้าม " / ", ห้าม " — ", ห้าม " - " คั่นคำอธิบาย, ห้าม "e.g.", ห้าม "เช่น"; ช้อยถูกไม่ยาว/ละเอียดกว่าช้อยอื่น (ไม่เกินช้อยลวงที่ยาวสุด ×1.3). ช้อยต้นฉบับภาษาไทย → แปลเป็นอังกฤษ. ข้อ "NOT"/"EXCEPT" คงรูปแบบเดิม (เขียน NOT ตัวพิมพ์ใหญ่).
5. **why** เจาะจง มีเกณฑ์/ตัวเลข/กลไก; **wrong** ครบ 4 ช้อย บอกว่าทำไมผิดและจะถูกเมื่อไร; **trap** กับดัก; **interp** แปล/ตีความโจทย์ว่ากำลังถามอะไร.
6. **summary** = ความรู้เต็มของเรื่องนี้ในข้อนี้ (4–8 bullet: เกณฑ์ ตัวเลข การแยกโรค การตรวจ การรักษา) อ่านจบไม่ต้องเปิดข้ออื่น — ห้ามเขียนแค่ "ดูข้อ XX" (อ้างข้ออื่นได้เป็น bullet สุดท้ายเท่านั้น โดยอ้างชุด+orig เช่น "ดู 78C ANC 2" — ห้ามใช้ "ข้อ <เลข>" ลอย ๆ)
7. **guide**: ตำรา/guideline จริงพร้อมปี เช่น "Williams Obstetrics 26th ed. 2022", "RTCOG Clinical Practice Guideline <เรื่อง> <ปี>", "ACOG Practice Bulletin No. 222 (2020)", "ASCCP 2019 risk-based guidelines", "FIGO 2018 cervical cancer staging", "FIGO 2023 endometrial cancer staging", "CDC STI Treatment Guidelines 2021", "Berek & Novak's Gynecology 16th ed.", "Speroff's Clinical Gynecologic Endocrinology and Infertility 9th ed.", "WHO Medical Eligibility Criteria for Contraceptive Use 6th ed. 2025" — **ห้ามแต่งชื่อ guideline ที่ไม่มีจริง**; ถ้าไม่แน่ใจเลข bulletin ให้ใส่แค่ชื่อเรื่องและปีที่แน่ใจ. บริบทไทย: ใช้แนวทาง RTCOG / กรมอนามัย / โรงพยาบาลจุฬาฯ (ถ้าโจทย์อ้าง) เป็นหลักเมื่อต่างจากตะวันตก แล้วบอกความต่าง.
8. **opinion**: เห็นด้วยกับคีย์ไหม ความมั่นใจ และถ้าติด ⚠ อธิบายเต็ม ("" ได้ถ้าเห็นด้วยและไม่มีอะไรเพิ่ม).
9. **mnemonic** ใส่เมื่อมีวิธีจำที่ดีจริง ("" ถ้าไม่มี) · **variants** 2–3 โจทย์แบบใหม่ที่อาจออก.
10. **notes**: ถอดทุกอย่างในไฟล์เฉลยของข้อนั้น (ตัวอักษร + เฉลยละเอียด + สำหรับ 78D สรุปคำอธิบายของ AI เกือบตรงตัว รวมเครื่องหมาย ✅/⚠️) + ข้อสังเกตในไฟล์โจทย์ (เช่น "???", "(เหมือน AC)", "ตรง yuzu", ตัวหนา) + บอกว่าส่วนไหนของโจทย์/ช้อยต้นฉบับ ส่วนไหนเติมเอง. ฝังรูปได้ด้วย `{{IMG:<key>}}`.
11. ห้ามแต่งข้อเท็จจริงทางการแพทย์ที่ไม่แน่ใจ ถ้าไม่แน่ใจตัวเลขให้เขียนแบบที่แน่ใจ.
12. **ข้อซ้ำ**: ถ้าข้อในช่วงของคุณถามเรื่องเดียวกับข้ออื่นในชุดเดียวกัน (เช่น ภายในช่วงของคุณ) ยังเขียนเป็นคนละข้อตามไฟล์ แต่ตอบให้สอดคล้องกัน. (ข้อซ้ำข้ามชุดผู้ประสานงานจะจัดการเอง.)

## TOPIC (ใส่ `tp` 1 ค่า ตรงตัวอักษร)
"Antenatal care & prenatal diagnosis" · "Normal & abnormal labor" · "Preterm labor & PROM" · "Postterm & induction of labor" · "Fetal surveillance & FGR" · "Anemia & thalassemia in pregnancy" · "Puerperium & postpartum hemorrhage" · "Antepartum hemorrhage" · "Hypertensive disorders in pregnancy" · "Medical diseases in pregnancy" · "Multifetal gestation & amniotic fluid" · "Infections in pregnancy" · "Early pregnancy loss & ectopic pregnancy" · "Gestational trophoblastic disease" · "Gynecologic anatomy" · "Puberty, amenorrhea & menopause" · "Dysmenorrhea, endometriosis & pelvic pain" · "Infertility" · "Contraception & abortion" · "Sexual assault & sexual health" · "Vaginitis, STI & PID" · "Pelvic organ prolapse & incontinence" · "Ovarian & adnexal mass" · "Cervical neoplasia & screening" · "Uterine & endometrial disease" · "Vulvar & vaginal disease" · "Neonate & lactation" · "Ethics, epidemiology & others"

## TAG (ใส่ `tg` 1–4 ค่า ตรงตัวอักษร — หัวข้อกว้างระดับบท ไม่ใช่ชื่อ diagnosis; `Onco` ติดคู่ทุกข้อที่เป็นมะเร็ง/ก้อนเนื้องอก ไว้ท้าย)
"ANC" · "Prenatal genetics" · "Labor" · "Operative delivery" · "Preterm & PROM" · "Induction of labor" · "Fetal surveillance" · "Anemia & thalassemia" · "Puerperium" · "PPH" · "APH" · "Hypertension in pregnancy" · "Medical disease in pregnancy" · "Multifetal" · "Amniotic fluid" · "Infection in pregnancy" · "Early pregnancy" · "GTD" · "Anatomy" · "Reproductive endocrinology" · "Menopause" · "Pelvic pain & endometriosis" · "Infertility" · "Contraception" · "Abortion" · "Sexual assault" · "Sexual health" · "Vaginitis & STI" · "PID" · "Pelvic floor" · "Ovary" · "Cervix" · "Uterus & endometrium" · "Vulva & vagina" · "Neonate" · "Lactation" · "Ethics & epidemiology" · "Onco"

## ตรวจก่อนส่ง (บังคับ)
`node /home/claude/sx-mcq/parts/check_ob.js <b|c|d> <ไฟล์ของคุณ>` ต้องได้ `bad 0` (ตรวจ field ครบ, ช้อย 5, ans, wrong 4, รูปมีจริง, tp/tg อยู่ในรายการ, ช้อยถูกไม่ยาวเกิน, ช้อยไม่มีวงเล็บ/—/e.g.). แล้วเปิดดู kimg ทุกรูปอีกครั้ง.

## รายงานสุดท้าย (ข้อความสุดท้ายของคุณ — สั้น)
ไฟล์ที่เขียน, จำนวนข้อ, รายการ orig ทั้งหมดตามลำดับ (+ t1 ถ้ามี), รูปที่สร้าง, ทุก flag (ไฟล์ว่าอะไร vs ที่ถูก), แถวที่ข้าม (ว่าง) และสิ่งที่ไม่แน่ใจ, 78D: ตารางจับคู่ เลขข้อ AI → orig.

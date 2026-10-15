# SPEC — ข้อสอบเก่า (AC) MCQ วอร์ด OB-GYN ชุด MDCU79 Rotate B (79B)

แม่แบบ = `parts/SPEC_OB78.md` — **อ่านไฟล์นั้นก่อน** แล้วใช้หัวข้อ "รูปแบบเอาต์พุต", "กติกาเขียน" ข้อ 1–12, "TOPIC", "TAG" ตามเดิมทุกอย่าง (ในไฟล์นั้น path `/home/claude/sx-mcq/...` = ตอนนี้ `/home/claude/ac-mdcu/...`). ส่วนที่ต่างสำหรับ 79B อยู่ด้านล่าง (ถ้าขัดกัน ยึดไฟล์นี้).
**ความละเอียดเฉลยต้องเท่าชุด 78** — เปิดดูตัวอย่าง 2–3 ข้อแรกใน `parts/ob78c_p1.js` และ `parts/ob78b_p1.js` ก่อนเขียน (interp/why/wrong 4 ช้อย/trap/summary 4–8 bullet/guide/opinion/mnemonic/variants/notes ครบทุกข้อ).

## ไฟล์ต้นฉบับ (ตัวพิมพ์จาก Google Docs — ไม่มีลายมือ ไม่มีรูปฝังเลยทั้ง 2 ไฟล์; pdfimages ว่าง)
รูปหน้า 150 dpi: `/tmp/claude-0/ob79/hr/<F>-NN.jpg` · ข้อความต่อหน้า: `/tmp/claude-0/ob79/pt/<F>-NN.txt` · PDF: `/tmp/claude-0/ob79/src/<F>.pdf`

| F | โค้ด | ไฟล์ | เนื้อหา |
|---|---|---|---|
| bQ | `O79BQ` | 79B_OBGYN_AC79_MCQs_OBGYN_Ro_B.pdf (14 หน้า) | ตาราง ข้อ/Choice/**เฉลย** แบ่ง Chapter แบบ 78C — แท็บ Obstetric หน้า 2–10, แท็บ Gynecology หน้า 11–14. **คอลัมน์ "เฉลย" ในไฟล์โจทย์มีคำตอบที่ผู้จดใส่ไว้บางข้อ** |
| bK | `O79BK` | Key_79B_OBGYN_AC79_MCQs_OBGYN_Ro_B.pdf (9 หน้า) | ตาราง ข้อ/Choice/เฉลย — มีแค่ตัวอักษรในช่อง Choice (ตรงกับคอลัมน์เฉลยของไฟล์โจทย์) ช่อง "เฉลย" ว่างทุกแถว |

## Helpers (header ใส่ให้ตอนรวม — ใช้ได้เลยในไฟล์ของคุณ)
```js
const KS=" (คีย์ในไฟล์ Key 79B)", KI=(...n)=>n.map(i=>"kob79b_"+i);   // NK, RC, LT เหมือน 78
// A ใส่ set:"MDCU79", ro:"RoB", file:"O79BQ", kfile:"O79BK" ให้เอง
```
ตรวจ: `node /home/claude/ac-mdcu/parts/check_ob.js b <ไฟล์ของคุณ> 79` ต้องได้ `bad 0`.

## orig
ใช้แบบ 78C: `"<chapter ย่อ> <ลำดับแถวที่มีโจทย์ใน chapter เริ่ม 1>"`, แท็บ Gynecology นำหน้า `"Gyn "`. ชื่อย่อ chapter ตาม SPEC_OB78. **ยกเว้น Infectious in pregnancy: ไฟล์ใส่เลข 6 และ 7 → ใช้ `"Infection 6"`, `"Infection 7"` ตามไฟล์** (ให้ผู้ใช้หาในไฟล์เจอ).
แถวที่ข้าม (ไม่มีอะไรบอกเรื่องเลย — ตรวจแล้วทั้ง 2 ไฟล์): Anemia 1 (ว่าง), Gyn Amenorrhea 1 ("?" + เฉลย "A."), Gyn Infertility 1 ("?" + "A."), Gyn Leukorrhea & STD ("?"), Gyn Vulva & vagina ("?"), Gyn Menopause ("?"), Gyn อื่น ๆ 1 (ว่าง).

## kimg (ครอปด้วยสคริปต์แล้ว อยู่ใน `img/` — ห้ามสร้าง/ทับเพิ่ม; ใช้ตามตารางนี้เท่านั้น)
`anc3, fetal1, fetal2, first1, first2, second1, ht1, ht2, ht3, med1, oth1, oth2, oth3, oth6, gynanat1, gynanat2, gynanat3, gynanat4, gyndys1, gynsexp1` (แถวในไฟล์ Key) · `qpuer1` (ไฟล์โจทย์ — Puerperium 1 คำตอบ "3" อยู่ในคอลัมน์เฉลยของไฟล์โจทย์เท่านั้น) · `qgynsa1, qgynsa1b` (ไฟล์โจทย์ — Gyn Sexual assault 1 ช่องเฉลย "F. ไม่เห็นสอนเลย", ข้ามหน้า). ข้อที่ไม่มีในรายการนี้ = ไฟล์เฉลยว่าง → ไม่มี kimg, `page2:"-"`.
`page2` = หน้าในไฟล์ Key ของแถวที่มีตัวอักษร (ข้อ qpuer1/qgynsa1 ใส่ `page2:"-"` และบอกใน notes ว่าคำตอบอยู่ในไฟล์โจทย์).

## key
- ตัวอักษรในไฟล์ (Key = คอลัมน์เฉลยไฟล์โจทย์) อ้างช้อยของไฟล์โจทย์ → แปลงเป็นตัวอักษรของเรา: `key:"<ตัวอักษรเรา> <ข้อความ>"+KS` (ถ้าเรียงช้อยใหม่ให้บอกใน notes ว่าในไฟล์เป็นตัวไหน)
- ไม่มีคีย์ → `NK`; ผู้จดเขียนคำตอบไว้ในตัวโจทย์ (เช่น "ตอบ stage 3", แถวที่มีช้อยเดียว) → `RC("…")`
- **ไม่เห็นด้วยกับคีย์ → ตอบตามหลักฐาน + `flag:"⚠ …"` + opinion อธิบายเต็ม** (key ยังเขียนตามไฟล์ เช่น `key:"คีย์เขียน A (Umbilical cord compression) — ไม่ตรงกับหลักฐาน; ตอบ B"+KS`)
- **ทุกข้อที่ไม่แน่ใจ/ตีความได้หลายแบบ/recall ไม่ครบจนเดาโจทย์ → ติด `flag:"⚠ …"`** (Opus จะตรวจทุกข้อที่มี ⚠)

## ข้อซ้ำกับ 78B/C/D (ต้องทำ)
รายการข้อเดิมทั้งหมด 273 ข้อ (key ¦ topic ¦ stem 220 ตัวอักษร ¦ คำตอบ): `/tmp/claude-0/ob79/existing.txt` (ดูข้อเต็มได้ใน `data_obgyn/data_b1..3.js`). สำหรับทุกข้อของคุณ หาข้อที่เป็นข้อเดียวกัน/คำถาม+ช้อยเดียวกัน/ประเด็นเดียวกันที่ออกซ้ำ → (1) ตอบให้สอดคล้องกับข้อเดิม (ถ้าข้อเดิมตอบต่างจากที่คุณคิดว่าถูก ห้ามแก้ข้อเดิม — รายงาน) (2) ใส่บรรทัดท้ายสุดของ summary ได้ เช่น "ดู 78C Gyn Sexual assault 2" (3) **รายงานกลุ่มข้อซ้ำในรายงานสุดท้ายเป็น JSON array ของ key** เช่น `["MDCU79|RoB|ANC 3","MDCU78|RoC|ANC 7"]` · หมายเหตุในไฟล์ "ตรงแอค", "ตรงแอค yuzu", "ตรงแอค 77A", "ตรงแอค 78C" = ผู้จดบอกว่าตรงกับข้อสอบเก่า/แหล่งอื่น → ถอดลง notes และหาข้อเดิมให้เจอ.

## รายการข้อ (สิ่งที่คิดไว้แล้ว — ตรวจเองซ้ำทุกข้อ)
### ส่วนที่ 1 → `parts/ob79b_p1.js` (28 ข้อ, แท็บ Obstetric ANC … Infection)
| orig | หน้า Q/K | ประเด็น / คีย์ / ข้อควรระวัง |
|---|---|---|
| ANC 1 | 2/- | High-risk factor for preeclampsia (ACOG/USPSTF aspirin) — ช้อย 5 ตัวครบ; ไม่มีคีย์ → multifetal (triplet) เป็น high risk; ที่เหลือ moderate |
| ANC 2 | 2/- | ยาที่ปลอดภัย/ควรกินประจำ — ช้อย 5 = "????" → แต่งตัวลวงเอง (บอกใน notes); คำตอบ ferrous sulfate; vitamin A &gt;10,000 IU/day teratogenic |
| ANC 3 | 2/2 kimg anc3 | 2nd-trimester quad screen Down → hCG ↑ (คีย์ C ✓); "PPAP A" ในไฟล์ = PAPP-A (บอกใน notes) |
| ANC 4 | 2/- | วัคซีนไข้หวัดใหญ่ ฉีดตอนไหน — มีแค่โจทย์ ช้อย "A." ว่าง → แต่งช้อยเอง ⚠ recall ไม่ครบ (inactivated, ฉีดได้ทุกไตรมาส ในฤดูระบาด/เร็วที่สุด) |
| ANC 5 | 3/- | sex ในครรภ์ไม่มี risk → safe in uncomplicated pregnancy; ช้อย 4 ตัว เติม 1 |
| Labor & dystocia 1 | 3/- | Primigravida 2nd stage 2 ชม. station +1 contraction adequate — ช้อย CS / observe another 2 h / forceps / vacuum (+1 เติม). station +1 ทำ operative vaginal ไม่ได้ (ต้อง ≥+2). ACOG 2014 (Safe prevention of primary CD): nullipara pushing ≥3 h ก่อนวินิจฉัย arrest; ตำราเก่า/Williams: prolonged 2nd stage nullipara &gt;2 h (ไม่มี epidural) → ตีความได้ 2 แบบ ⚠ — เลือกตามหลักฐานที่หนักกว่า เติมข้อมูลให้เหลือคำตอบเดียว อธิบายทั้ง 2 ทาง |
| Preterm & PROM 1 | 3/- | NEC (bowel distension, bloody stool, pneumoperitoneum); "(ออกอะไรก็ไม่รู้อะพรี่)" ลง notes |
| Postterm 1 | 3–4/- | 42 wk no contraction มา ANC — ช้อย CS / ใส่ prostaglandin เหน็บ / fetal surveillance (+2) → ≥42 wk ควร induce (cervical ripening ด้วย PGE ถ้า cervix unfavorable) |
| Fetal surveillance 1 | 4/3 fetal1 | early deceleration → fetal head compression (คีย์ C ✓); "(อยู่บทนี้มั้ยนะ)" ลง notes |
| Fetal surveillance 2 | 4/3 fetal2 | late deceleration — **คีย์ A = umbilical cord compression ผิด** → ตอบ uteroplacental insufficiency + ⚠ |
| Puerperium 1 | 4/- kimg qpuer1 | mastitis — ช้อย 4 ตัว (Bactrim/Gentamicin/Cephalexin/Metronidazole) +1 เติม (ห้ามเติม dicloxacillin ที่จะแย่งคำตอบ); ผู้จดใส่ "3" = Cephalexin ในไฟล์โจทย์ (ไฟล์ Key ว่าง) |
| Puerperium 2 | 5/- | รกค้าง อะไรไม่ควรทำ — uterotonic drug / broad IV antimicrobial / ล้วงรก (+2 เติม) ⚠ ตีความ (WHO 2012: oxytocin ได้, ergometrine/PGE2 ไม่แนะนำ, ให้ single-dose prophylactic antibiotic เมื่อล้วงรก ไม่ใช่ broad-spectrum ต่อเนื่อง) — ทำให้เหลือคำตอบเดียวด้วยถ้อยคำช้อย/โจทย์ที่จำเป็นที่สุด อธิบายใน opinion |
| Puerperium 3 | 5/- | red soft tissue ที่ฝีเย็บ + PPH + BP drop → uterine inversion |
| Puerperium 4 | 5/- | ล้วงรกได้เป็นชิ้น ๆ (piecemeal) + เลือดออกมาก → placenta accreta spectrum → management (curette / hysterectomy +3 เติม) |
| First half bleeding 1 | 5/3 first1 | os open ไม่มีชิ้นเนื้อ → inevitable (คีย์ B ✓) |
| First half bleeding 2 | 6/3 first2 | os closed, viable fetus → threatened (คีย์ C ✓) |
| Second half bleeding 1 | 6/3 second1 | pain + bleeding + uterine tenderness → abruption (มีช้อยเดียว "1.placenta abruption" = RC); ไฟล์ Key เขียน "3." ในช่อง Choice — ไม่ตรงกับอะไร บอกใน notes |
| Second half bleeding 2 | 6/- | ARM แล้วน้ำปนเลือด FHR drop ทันที → ruptured vasa previa (RC) |
| Second half bleeding 3 | 6/- | GA 30 painless bleeding → ultrasound for placental location (RC; ห้าม PV) |
| Hypertensive 1 | 6/4 ht1 | BP 180/110 → labetalol (คีย์ B ✓) ช้อย D ว่าง → เติม 2 |
| Hypertensive 2 | 6/- | **แถวนี้มี 2 โจทย์** — ส่วนแรก: GA 28 BP 150/90 ซ้ำ no proteinuria no severe feature baseline ปกติ → diagnosis (ไม่มีช้อย → แต่งเอง; gestational hypertension) |
| Hypertensive 2b | 6–7/4 ht2 | ส่วนที่สอง: criteria ข้อไหนทำให้เป็น severe — Platelet 120,000 / LDH 450 / **"BUN = 1.3"** / AST 35; คีย์ C — ⚠ ต้นฉบับเขียน BUN น่าจะหมายถึง serum creatinine 1.3 mg/dL (&gt;1.1) → เขียนช้อยเป็น creatinine แล้วบอกเหตุผลใน notes/opinion; kimg ht2 |
| Hypertensive 3 | 7/4 ht3 | BP 152/91 ซ้ำ, protein 1+ (dipstick), lab ปกติ, ไม่มี severe → คีย์ B gestational hypertension — ตรวจกับ ACOG (dipstick 1+ ไม่พอวินิจฉัย proteinuria; ใช้ 2+ เมื่อไม่มีวิธี quantitative) ถ้าเห็นด้วยไม่ต้อง ⚠ แต่อธิบายจุดหลอกให้ชัด |
| Medical disease 1 | 7/4 med1 | CV finding ที่ผิดปกติในคนท้อง → diastolic murmur (คีย์ "2. Diastolic murmur" ✓); "ตรงแอคจ้า", "(โจทย์ถามว่าไรนะ)" ลง notes; ช้อย 4 +1 เติม (finding ที่ปกติในครรภ์) |
| Multifetal 1 | 7/- | Twin A vertex 1000 g, Twin B breech 1700 g → route (vaginal / CS +3 เติม) |
| Multifetal 2 | 7/- | คลอดแฝดคนแรกแล้ว คนที่สอง cephalic membrane intact → ARM / CS / internal podalic version (+2) |
| Infection 6 | 8/- | แม่ anti-HIV + confirmed → start ART regardless of CD4 (+3 เติม) |
| Infection 7 | 8/- | คู่ serodiscordant ชาย HIV+ หญิง − อยากมีลูก → ART ฝ่ายชายจน VL undetectable ก่อน (U=U) (+3 เติม) |

### ส่วนที่ 2 → `parts/ob79b_p2.js` (26 ข้อ, GTD + อื่น ๆ + แท็บ Gynecology)
| orig | หน้า Q/K | ประเด็น / คีย์ / ข้อควรระวัง |
|---|---|---|
| GTD 1 | 8/- | อายุ 40+ ลูก 3 คน N/V uterus &gt; dates, usg เป็น mole — D&C / suction curettage / hysterectomy (+2) — ข้อสอบจริงให้รูป US แต่ไฟล์ไม่ได้แคปไว้ ("ให้รูปมาไม่ได้บอกตรงๆ") → บรรยายภาพใน stem โดยไม่บอกชื่อโรค + บอกใน notes ว่าไม่มีรูปในไฟล์; ⚠ ตีความ (suction curettage = มาตรฐาน; hysterectomy เป็นทางเลือกเมื่อไม่ต้องการมีบุตร/อายุ ≥40 ลด post-molar GTN) |
| อื่น ๆ 1 | 8/5 oth1 | ผู้ป่วยรายใหม่ preeclampsia ปี 2568 → incidence (คีย์ B ✓) "(ออกมาทำไร๊)" ลง notes |
| อื่น ๆ 2 | 8/5 oth2 | GDM ทั้งหมดที่ GA 28 wk → prevalence (คีย์ B ✓) "ver.2" |
| อื่น ๆ 3 | 9/5 oth3 | sens 90 spec 90 prev 5% PPV — **คีย์ D 90% ผิด**: PPV = 4.5/(4.5+9.5) = 32% ≈ 33% → ⚠ |
| อื่น ๆ 4 | 9/- | "domestic violence ตรงแอค" มีแค่หัวข้อ → แต่งโจทย์ case-based ให้ตรงประเด็นที่ข้อเดิมใน existing.txt ถาม (78B ข้อ 14) ⚠ recall ไม่ครบ |
| อื่น ๆ 5 | 9/- | "Asymmetrical FGR ถามอะไรวะ" มีแค่หัวข้อ → แต่งโจทย์ (ดู 78B ข้อ 44) ⚠ recall ไม่ครบ |
| อื่น ๆ 6 | 9/5 oth6 | conceptus at implantation → blastocyst (คีย์ E ✓) "ตรงแอค yuzu" |
| อื่น ๆ 7 | 9/- | highest O2 in fetal circulation — portal vein / ductus venosus / umbilical artery / ductus arteriosus / descending aorta → ductus venosus |
| อื่น ๆ 8 | 9–10/- | อวัยวะแรกที่สร้าง RBC — spleen / liver / yolk sac / bone marrow (+1) → yolk sac |
| อื่น ๆ 9 | 10/- | umbilical cord prolapse — call for help / immediate cesarean (+3) → initial step; ระวังอย่าเติมช้อย "elevate presenting part" ที่แย่งคำตอบ (หรือถ้าใส่ ต้องเขียน stem ให้ชัด) |
| อื่น ๆ 10 | 10/- | เด็กแรกเกิด ptosis — Horner syndrome / Down syndrome (+3) — แต่ง case (เช่น หลัง shoulder dystocia มี Klumpke) ห้ามบอกชื่อ sign ที่ให้ตีความ |
| อื่น ๆ 11 | 10/- | "blind vaginal pouch def diag — 1.ultrasound 2.(ว่าง)" → primary amenorrhea + blind vaginal pouch (MRKH vs CAIS) definitive dx ⚠ ตีความ (karyotype แยก CAIS กับ MRKH; US/MRI ดูมดลูก) |
| Gyn Anatomy 1 | 11/7 gynanat1 | main support of uterus → uterosacral + cardinal (คีย์ D ✓) "ตรงแอค yuzu" |
| Gyn Anatomy 2 | 11/7 gynanat2 | kidney develops from ureteric bud + metanephric mesoderm (คีย์ D ✓) "ตรงแอค77A" |
| Gyn Anatomy 3 | 11/7 gynanat3 | lateral wall of pelvic cavity → obturator internus (คีย์ B ✓) |
| Gyn Anatomy 4 | 11–12/7 gynanat4 | ทำหมันชายตัดที่ → vas deferens (คีย์ C ✓) |
| Gyn Anatomy 5 | 12/- | ทำหมันหญิง anatomy — ไม่มีคีย์; ลำดับที่ cornu หน้า→หลัง: round ligament, tube, utero-ovarian ligament → "Round ligament is anterior to fallopian tube" (ช้อย E uterosacral posterior to tube — ตรวจว่ากำกวมไหม) |
| Gyn Dysmenorrhea 1 | 12/7 gyndys1 | 46 ปี P2-0-1-2 severe endometriosis DMPA 6 เดือนไม่ดีขึ้น → คีย์ B GnRH antagonist — ตรวจ (ESHRE 2022: 2nd-line GnRH analogue; definitive TAH-BSO เมื่อครอบครัวสมบูรณ์และ medical fail) ⚠ ถ้าตีความได้ 2 แบบ |
| Gyn Sexual assault 1 | 12–13/- kimg qgynsa1, qgynsa1b | GHB detection window in blood — 2/4/6/12/24 hr; ผู้จดเขียนช่องเฉลย "F. ไม่เห็นสอนเลย" (ไม่ใช่คำตอบ) → key NK + ถอดลง notes; "(ตรงแอค 78C)" → **ตอบให้ตรงกับ 78C Gyn Sexual assault 2** |
| Gyn Sexual problems 1 | 13/8 gynsexp1 | vasocongestion + lubrication phase ไหน — arousal / orgasm / desire / plateau / excitement; คีย์เขียน "F" (ไม่มีช้อย F) → ⚠; arousal กับ excitement ทับกัน → เติมโมเดลใน stem (เช่น Masters and Johnson) ให้เหลือคำตอบเดียว อธิบาย |
| Gyn POP & UI 1 | 13/- | "บรรยาย prolapse มา ตอบ stage 3" → แต่ง case POP-Q ที่เป็น stage III; `RC("stage 3")` ⚠ recall ไม่ครบ |
| Gyn Ovarian neoplasm 1 | 13/- | N/V acute RLQ pain + mass แถว cul-de-sac + vital signs ปกติ — ข้อใดไม่ใช่ ddx (ectopic, ruptured cyst, hemorrhagic cyst, twisted cyst, phlegmon appendicitis) ⚠ ทุกตัวเป็น ddx ได้ → เติมข้อมูลน้อยที่สุดให้เหลือคำตอบเดียว (เช่น urine hCG negative) แล้วอธิบาย |
| Gyn Ovarian neoplasm 2 | 13/- | เด็ก 16 ปี solid adnexal mass tumor marker — LDH / HE4 / CA125 / CA19-9 / CEA → LDH (dysgerminoma) |
| Gyn Endometrial cancer 1 | 14/- | EIN ควรแนะนำ — "ไม่มีทางเป็นมะเร็ง" / "เป็น precancerous" (+3) |
| Gyn Cervical screening 1 | 14/- | HSIL ทำอะไรต่อ — Pap / colposcopy+biopsy / HPV testing (+2; ห้ามเติม LEEP ที่แย่งคำตอบ หรือถ้าเติมต้องอธิบาย) |
| Gyn PID 1 | 14/- | TOA รักษา — observe / admit IV antibiotics / C ว่าง (+3) |

## รายงานสุดท้าย (สั้น)
ไฟล์ + จำนวนข้อ + orig ตามลำดับ · ทุก flag (ไฟล์ว่าอะไร vs ที่ตอบ) · กลุ่มข้อซ้ำเป็น JSON (และข้อเดิมที่ตอบไม่ตรงกับที่คุณคิด) · สิ่งที่ไม่แน่ใจ

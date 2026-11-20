SUMM.push({
 "tag": "Uro",
 "title": "Urology",
 "intro": "<ul><li>แท็กที่ใหญ่ที่สุดของวอร์ด (MDCU79 RoC 15 ข้อย่อย) แบ่งเป็น 4 ก้อน: <b>uro-oncology</b> (testicular germ cell tumor ออกซ้ำ 2 เคส, bladder CIS, UTUC, angiomyolipoma), <b>นิ่ว / การอุดตัน</b> (obstructed infected kidney ออกซ้ำ 2 เคส, staghorn, bladder stone จาก BPH, AUR), <b>UTI / STI</b> (UTI ในหญิงตั้งครรภ์ออกซ้ำ 2 เคส, gonococcal urethritis) และ <b>อวัยวะเพศเด็ก</b> (paraphimosis, epispadias)</li><li>รูปแบบหลักคือ vignette สั้น → ถาม Dx หรือ next step / most appropriate management — ตัวตัดสินมักเป็นคำเดียวในโจทย์: AFP ปกติ, ไข้ + การอุดตัน, macroscopic fat, CIS, high-grade upper tract</li><li>หลายเคสเป็น recall ที่ไม่ครบและ Claude เติม stem / ช้อยให้ (⚠) — จำหลักการตัดสินใจไว้ เพราะถ้าโจทย์จริงเปลี่ยนรายละเอียด คำตอบเปลี่ยนตาม</li><li>MDCU79 RoD (ไฟล์ AC 79D ส่วน Subspe) เพิ่มเข้ามา: ครอบคลุมเกือบทุกเรื่องของ uro — PSA สูง, testicular tumor (inguinal orchiectomy + lymphatic drainage), NMIBC/UTUC, RCC, นิ่ว + ไข้ (อุด vs ไม่อุด), emphysematous pyelonephritis, AUR, UDT ในเด็ก</li><li>AC Subspe MDCU78 (RoA–RoD) เพิ่มเข้ามา: renal colic analgesia (แพ้ NSAID), cystine, BPH medical, NMIBC BCG, Bosniak, renal abscess, bladder SCC, UDT, VUR, testicular mass DDx, ASB ในคนท้อง, PSA screening, emphysematous pyelitis, TCC site</li></ul>",
 "groups": [
  {
   "title": "Uro-oncology",
   "sections": [
    {
     "id": "testis-gct",
     "title": "Testicular germ cell tumor: seminoma (hCG สูง + AFP ปกติ)",
     "trend": "ออกซ้ำในชุดเดียวกัน 2 เคส ถาม Dx จาก tumor marker pattern",
     "asked": [
      "ชายหนุ่มก้อนอัณฑะแข็งไม่เจ็บ β-hCG สูง AFP ปกติ → most likely diagnosis (ตัวลวง Leydig, Sertoli, yolk sac, epididymitis)",
      "รุ่นที่ให้ US heterogeneous + calcification ร่วม → ยังตอบ seminoma เพราะเป็น germ cell tumor ตัวเดียวในช้อย",
      "ก้อนแข็งในอัณฑะ + US hypoechoic → next step (79D)",
      "ต่อมน้ำเหลืองที่ <b>ไม่ใช่</b> ทางแพร่ของ non-seminoma (79D)",
      "ก้อนอัณฑะแข็งไม่เจ็บ: NOT DDx = epididymo-orchitis (78B)"
     ],
     "pattern": [
      "Solid <b>intratesticular</b> mass ชาย 15–40 ปี = germ cell tumor จนกว่าจะพิสูจน์ว่าไม่ใช่",
      "<b>AFP สูง = มี nonseminoma component เสมอ</b> (pure seminoma ไม่หลั่ง AFP); seminoma หลั่ง β-hCG ได้ ~15–20%",
      "Yolk sac → AFP สูง; choriocarcinoma → hCG สูงมาก; teratoma → marker ปกติ; Leydig / Sertoli → marker ปกติ อาการจาก hormone",
      "Work-up: scrotal US + AFP, β-hCG, LDH ก่อนผ่า → <b>radical inguinal orchiectomy</b> (high ligation ที่ internal ring) → CT chest-abdomen-pelvis + marker ซ้ำเพื่อ staging (S0–S3)",
      "Seminoma stage I → surveillance หรือ carboplatin 1 cycle; stage II–III → BEP / EP (RT ใน IIA–B); counsel sperm banking",
      "ก้อน intratesticular = มะเร็งจนกว่าพิสูจน์ได้ → tumor markers (AFP, β-hCG, LDH) → <b>radical inguinal orchiectomy</b> · ห้าม transscrotal biopsy/orchiectomy",
      "Lymphatic drainage: right testis → <b>interaortocaval</b> · left testis → <b>para-aortic</b> · distant: retrocrural, mediastinum, left supraclavicular · <b>inguinal LN ไม่ใช่ทางปกติ</b> (เกิดเฉพาะ scrotal violation)"
     ],
     "pearls": [
      "ห้าม trans-scrotal biopsy หรือ scrotal approach (เปลี่ยน lymphatic drainage)",
      "เห็น hCG สูงอย่ารีบตอบ nonseminoma — ตัวแยกคือ AFP",
      "URO 1 เป็น recall ที่ echo pattern เข้ากับ nonseminoma มากกว่า แต่ในช้อยมี germ cell tumor ตัวเดียว คำตอบจึงมั่นใจปานกลาง",
      "79D Uro 3 คีย์ไฟล์ตอบ para-aortic (ผิด) — para-aortic คือ landing zone หลักของ left testis; ตอบ inguinal"
     ],
     "members": [
      "MDCU79|RoC|URO 1",
      "MDCU79|RoC|URO 9",
      "MDCU79|RoD|Uro 2",
      "MDCU79|RoD|Uro 3",
      "MDCU78|RoB|28"
     ]
    },
    {
     "id": "bladder-cis",
     "title": "Bladder carcinoma in situ หลัง TURBT → intravesical BCG",
     "asked": [
      "Bladder CIS ที่ TURBT เอารอยโรคที่เห็นออกหมดแล้ว → next management (ตัวลวง intravesical chemo, cystectomy, surveillance)",
      "High-grade NMIBC หลัง TURBT → manage ต่อ (79D)",
      "High-grade NMIBC → BCG (78B)"
     ],
     "pattern": [
      "CIS = flat high-grade → จัดเป็น <b>high-risk NMIBC</b> (เช่นเดียวกับ T1, high-grade, หลายก้อนใหญ่เป็นซ้ำ)",
      "High-risk → <b>intravesical BCG</b> induction สัปดาห์ละครั้ง 6 สัปดาห์ + maintenance 1–3 ปี (SWOG schedule)",
      "Low-risk (Ta low-grade เดี่ยว <3 cm) → single immediate post-TURBT chemo instillation; intermediate → chemo หรือ BCG",
      "ห้าม BCG ภายใน 2 สัปดาห์หลัง TURBT, gross hematuria, traumatic catheterization, UTI; BCG sepsis → anti-TB drugs",
      "BCG-unresponsive → radical cystectomy; ติดตาม cystoscopy + urine cytology ทุก 3 เดือนปีแรก + upper tract imaging",
      "High-risk NMIBC (high grade, T1, CIS): re-TURBT 2–6 สัปดาห์ (T1/ไม่มี muscle ในชิ้นเนื้อ) → <b>BCG induction 6 สัปดาห์ + maintenance 1–3 ปี</b> (EAU 2024) · BCG เริ่ม 2–4 สัปดาห์หลัง TURBT ไม่ให้ทันที",
      "Single immediate instillation = chemotherapy (MMC/gemcitabine) ใน low/intermediate risk · radical cystectomy = very high risk/BCG-unresponsive"
     ],
     "pearls": [
      "in situ ไม่ได้แปลว่าแค่ติดตาม — CIS ของ bladder ลุกลามเป็น muscle-invasive ได้ราวครึ่งหนึ่งถ้าไม่รักษา",
      "single post-TURBT chemo ใช้กับ papillary low / intermediate-risk ไม่ใช่ CIS",
      "79D Uro 7 คีย์ไฟล์ตอบ partial cystectomy (ผิด) — partial cystectomy ใช้น้อยมากใน MIBC ก้อนเดี่ยวที่ dome"
     ],
     "members": [
      "MDCU79|RoC|URO 3",
      "MDCU79|RoD|Uro 7",
      "MDCU78|RoB|19"
     ]
    },
    {
     "id": "utuc",
     "title": "Upper tract urothelial carcinoma high-risk → nephroureterectomy + bladder cuff",
     "asked": [
      "ชายสูบบุหรี่ painless gross hematuria, ก้อน 3 cm ที่ proximal ureter + hydronephrosis, biopsy high-grade UC → management (ตัวลวง radical nephrectomy, BCG, ESWL, DJ stent)",
      "Upper ureter tumor 3 cm สูบบุหรี่ ไตอีกข้างปกติ → การรักษา (79D)"
     ],
     "pattern": [
      "High-risk UTUC: high-grade, ≥2 cm, hydronephrosis, multifocal, invasive บน CT, variant histology",
      "High-risk → <b>radical nephroureterectomy with bladder cuff excision</b> ± lymphadenectomy + single post-op intravesical chemo (bladder recurrence 22–47%)",
      "Adjuvant platinum chemo ใน pT2–T4 หรือ N+ (POUT)",
      "Low-risk (unifocal, <2 cm, low-grade) → kidney-sparing: ureteroscopic ablation, segmental ureterectomy",
      "Work-up: CT urography + cystoscopy (bladder tumor ร่วม ~17%) + ureteroscopy ± biopsy + cytology; อายุน้อยหรือมีประวัติครอบครัว → นึกถึง Lynch",
      "UTUC ≥2 cm = high risk → <b>RNU + bladder cuff excision</b> + single postoperative intravesical chemo"
     ],
     "pearls": [
      "radical nephrectomy คือผ่าตัดของ RCC — urothelial ต้องเอาทั้งท่อรวมรูเปิด ureter (เหลือ stump → มะเร็งซ้ำ)",
      "URO 4 recall มีแค่หัวข้อ + ช้อยเดียว Claude เติม stem high-risk ให้ — ถ้าโจทย์จริงเป็น low-risk คำตอบจะเปลี่ยนเป็น kidney-sparing"
     ],
     "members": [
      "MDCU79|RoC|URO 4",
      "MDCU79|RoD|Uro 13"
     ]
    },
    {
     "id": "aml",
     "title": "Renal angiomyolipoma เล็กไม่มีอาการ → observe",
     "asked": [
      "หญิง 45 ปี incidental renal mass 2 cm มี macroscopic fat บน CT ไม่มีอาการ → management"
     ],
     "pattern": [
      "<b>Macroscopic fat (HU ติดลบ) ใน renal mass ≈ AML</b> — ไม่ต้อง biopsy",
      "เล็ก ไม่มีอาการ → active surveillance ด้วย US / CT เป็นระยะ",
      "Intervene เมื่อ: มีอาการ / เลือดออก (Wunderlich: flank pain + mass + shock), ก้อนโต (เกณฑ์ดั้งเดิม ≥4 cm) หรือโตเร็ว, aneurysm ในก้อน ≥5 mm, หญิงวางแผนตั้งครรภ์, เข้าถึงการรักษาฉุกเฉินยาก",
      "เลือดออกเฉียบพลัน → selective arterial embolization; ทางเลือก nephron-sparing surgery; TSC ก้อนโต → everolimus",
      "~20% สัมพันธ์ tuberous sclerosis (หลายก้อน สองข้าง)"
     ],
     "pearls": [
      "embolization ใช้กับ AML ที่เลือดออกหรือเสี่ยงสูง ไม่ใช่ก้อนเล็กไม่มีอาการ",
      "recall มีแค่คำว่า Angiomyolipoma + observe — stem ทั้งหมดแต่งให้คำตอบเป็น observe"
     ],
     "members": [
      "MDCU79|RoC|URO 6"
     ]
    },
    {
     "id": "prostate-psa",
     "title": "PSA สูงโดยไม่มี UTI → MRI prostate + biopsy",
     "trend": "ถามขั้นต่อไปเมื่อ PSA สูง แยกจากการรักษา BPH",
     "asked": [
      "ชาย 65 LUTS ต่อมโตเล็กน้อย PSA 12 ไม่มี UTI → management",
      "ชาย 52 ขอคัดกรอง → shared decision-making (78D)"
     ],
     "pattern": [
      "PSA สูง (&gt;4 หรือ age-specific) ไม่มีสาเหตุอื่น → <b>pre-biopsy mpMRI → targeted ± systematic biopsy</b> (EAU 2024)",
      "ห้ามให้ 5-ARI ก่อนสืบค้น (ลด PSA ~50%) · antibiotic แล้ววัดซ้ำเฉพาะเมื่อมี prostatitis/UTI"
     ],
     "pearls": [
      "ตัวลวง: alpha-blocker/5-ARI แล้วติดตาม (รักษา BPH ก่อนแยกมะเร็ง)"
     ],
     "members": [
      "MDCU79|RoD|Uro 1",
      "MDCU78|RoD|81"
     ]
    },
    {
     "id": "rcc",
     "title": "Solid renal mass + hematuria → renal cell carcinoma",
     "trend": "ให้ CT ก้อนไตแล้วถาม Dx เทียบกับ AML / TCC / XGP",
     "asked": [
      "Intermittent gross hematuria + น้ำหนักลด + CT solid enhancing renal mass → Dx"
     ],
     "pattern": [
      "Solid enhancing mass ในเนื้อไต ไม่มีไขมัน = <b>RCC</b> · มี macroscopic fat (HU ติดลบ) = AML · filling defect ใน collecting system = urothelial carcinoma",
      "T1a ≤4 cm → partial nephrectomy · ใหญ่/ลุกลาม → radical nephrectomy · paraneoplastic: polycythemia, hypercalcemia, HT, Stauffer"
     ],
     "members": [
      "MDCU79|RoD|Uro 8"
     ]
    },
    {
     "id": "wilms",
     "title": "Wilms tumor ในเด็ก (ก้อนจากไต ไม่ข้าม midline)",
     "asked": [
      "แม่คลำก้อนท้องลูกตอนอาบน้ำ US ก้อนในไต HT ไม่ข้าม midline ไม่มีท้องเสีย → Dx"
     ],
     "pattern": [
      "Wilms: เด็กดูดี ก้อนเรียบจากไต ไม่ข้าม midline HT ~25% · Neuroblastoma: adrenal ข้าม midline เด็กป่วย calcification VMA/HVA สูง (VIP → watery diarrhea)",
      "Mesoblastic nephroma = ทารก &lt;3 เดือน"
     ],
     "members": [
      "MDCU79|RoD|Ped 12"
     ]
    },
    {
     "id": "bosniak",
     "title": "Renal cyst ที่ enhance (Bosniak III–IV) → surgical excision",
     "asked": [
      "(78B คีย์: complicated renal cyst)"
     ],
     "pattern": [
      "Bosniak I–II benign · IIF follow · III–IV ผ่าตัด"
     ],
     "members": [
      "MDCU78|RoB|20"
     ]
    },
    {
     "id": "bladder-scc-uro",
     "title": "Bladder SCC ↔ chronic infection/irritation",
     "asked": [
      "(78B)"
     ],
     "pattern": [
      "Schistosoma, catheter, stone"
     ],
     "members": [
      "MDCU78|RoB|22"
     ]
    },
    {
     "id": "tcc-site-uro",
     "title": "TCC least likely ที่ urethra",
     "asked": [
      "(78D)"
     ],
     "pattern": [
      "Bladder 90–95% · upper tract 5–10%"
     ],
     "members": [
      "MDCU78|RoD|85"
     ]
    }
   ]
  },
  {
   "title": "นิ่วและการอุดตันทางเดินปัสสาวะ",
   "sections": [
    {
     "id": "obstructed-infected-kidney",
     "title": "Obstructed infected kidney (นิ่ว ureter + ไข้) → urgent decompression",
     "trend": "ออก 2 เคสในชุดเดียว ตัวลวงเป็นวิธีเอานิ่วออกทันที",
     "asked": [
      "ไข้ หนาวสั่น CVA tenderness, UA pyuria, นิ่ว proximal ureter 7 mm + hydronephrosis → นอกจาก IV ATB ต้องทำอะไร → urgent DJ stent",
      "ไข้ + UA nitrite + Cr 2.1 + นิ่ว 8 mm mild hydronephrosis → urgent decompression ด้วย stent หรือ PCN",
      "ไข้ 39 + CVA tenderness + นิ่วท่อไต 5 mm + hydronephrosis → DJ stent (79D)",
      "ไข้ + นิ่ว renal pelvis 5 mm <b>ไม่มี hydronephrosis</b> → antibiotics + hydration (79D)"
     ],
     "pattern": [
      "<b>Obstruction + infection = urologic emergency</b> → urgent decompression + IV ATB + urine / blood culture",
      "Retrograde DJ stent = percutaneous nephrostomy ได้ผลเท่ากัน (EAU); PCN เมื่อส่องย้อนไม่ได้ / unstable มาก, DJ เมื่อมี coagulopathy",
      "เลื่อน definitive (ESWL, URS, PCNL) ไปหลังติดเชื้อหาย",
      "ข้อบ่งชี้ intervene ด่วนอื่น: AKI, solitary kidney / bilateral obstruction, ปวดหรืออาเจียนคุมไม่ได้",
      "Uncomplicated: NSAID แก้ปวด, MET ด้วย tamsulosin สำหรับ distal >5 mm, ติดตามไม่เกิน 4–6 สัปดาห์; CT KUB non-contrast เป็นมาตรฐาน",
      "ตัดสินด้วย <b>การอุดกั้น</b>: อุด + ติดเชื้อ → decompress (DJ/PCN) + IV ATB · ไม่อุด → ATB ตาม culture · ห้าม ESWL/URS/PCNL ขณะติดเชื้อ"
     ],
     "pearls": [
      "นิ่วเล็กหรือ hydronephrosis mild ไม่เปลี่ยนกฎ — มีไข้ + อุดตันต้อง drain ก่อนเสมอ",
      "ห้ามแตกนิ่วขณะติดเชื้อ (ปล่อย endotoxin → urosepsis)",
      "URO 5 recall มีแค่ CVA tenderness + 2 ช้อย — ถ้าโจทย์จริงไม่มีไข้ นิ่วเล็กจะตอบ MET / ESWL"
     ],
     "members": [
      "MDCU79|RoC|URO 5",
      "MDCU79|RoC|URO 8",
      "MDCU79|RoD|Uro 5",
      "MDCU79|RoD|Uro 14"
     ]
    },
    {
     "id": "staghorn",
     "title": "Staghorn calculus = struvite / infection stone",
     "asked": [
      "หญิง recurrent UTI มี staghorn calculus → most common etiology (ตัวลวง cystinuria, hyperparathyroidism, uric acid)"
     ],
     "pattern": [
      "Staghorn ส่วนใหญ่ = <b>struvite (magnesium ammonium phosphate) + carbonate apatite</b>",
      "กลไก: urease-producing bacteria (<b>Proteus mirabilis</b> มากสุด, Klebsiella, Pseudomonas, Providencia) → ammonia → urine pH >7.2 → ตกตะกอน; coffin-lid crystals",
      "รักษา: <b>PCNL</b> เป้าหมาย stone-free ทั้งหมด ± ESWL / flexible URS + ATB ตาม culture; ไตไม่ทำงาน → nephrectomy",
      "ป้องกันซ้ำ: เอานิ่วออกหมด, รักษา UTI, acetohydroxamic acid ในผู้ผ่าตัดไม่ได้"
     ],
     "pearls": [
      "E. coli ไม่สร้าง urease",
      "cystine ทำ staghorn ได้แต่พบน้อย — โจทย์ถาม most common + มี recurrent UTI"
     ],
     "members": [
      "MDCU79|RoC|URO 7"
     ]
    },
    {
     "id": "bladder-stone-bph",
     "title": "Bladder stone จาก BPH → transurethral cystolitholapaxy",
     "asked": [
      "ชายสูงอายุ BPH กินยาไม่สม่ำเสมอ terminal hematuria, dysuria, ปัสสาวะไม่สุด, CT ก้อนกลมทึบในกระเพาะปัสสาวะ 3 cm → management (ตัวลวง ESWL, open cystolithotomy, treat BPH 3 เดือน)",
      "ปัสสาวะสะดุดหยุดกลางสาย ดีขึ้นเมื่อเปลี่ยนท่า → bladder calculus (79D)"
     ],
     "pattern": [
      "Bladder stone ในผู้ใหญ่ส่วนใหญ่เป็น <b>secondary</b> จาก bladder outlet obstruction (BPH, stricture), neurogenic bladder, foreign body",
      "อาการ: terminal hematuria, ปวดร้าวปลายองคชาต, ปัสสาวะสะดุดแล้วเปลี่ยนท่าจึงออก",
      "รักษาแรกในผู้ใหญ่ (EAU): <b>transurethral cystolithotripsy / cystolitholapaxy</b> + แก้ BOO ใน session เดียว (TURP / HoLEP)",
      "Percutaneous เมื่อส่องผ่าน urethra ไม่ได้; open cystolithotomy เมื่อนิ่วใหญ่มาก หรือทำร่วม open prostatectomy; ESWL ได้ผลต่ำ",
      "Bladder stone จาก BPH = ข้อบ่งชี้ผ่าตัด BPH",
      "Interrupted stream ที่ดีขึ้นเมื่อเปลี่ยนท่า + terminal hematuria/ปวดปลายองคชาต = bladder stone (ball-valve ที่ bladder neck)"
     ],
     "pearls": [
      "recall ไม่บอกขนาดนิ่ว (บอกแค่ก้อนใหญ่ ๆ) Claude เติม 3 cm — ถ้านิ่วใหญ่มากคำตอบจะเป็น open cystolithotomy จึงมั่นใจปานกลาง"
     ],
     "members": [
      "MDCU79|RoC|URO 6b",
      "MDCU79|RoD|Uro 12"
     ]
    },
    {
     "id": "aur-bph",
     "title": "Acute urinary retention จาก BPH → urethral catheterization",
     "asked": [
      "ชาย 72 ปี BPH ปัสสาวะไม่ออก 12 ชม. คลำ bladder ได้ กดเจ็บ → initial management (ตัวลวง emergency TURP, alpha-blocker อย่างเดียว, suprapubic cystostomy, furosemide)",
      "AUR จาก BPH หลังสวนระบายแล้ว → manage ต่อ (79D)"
     ],
     "pattern": [
      "Decompress ทันที: <b>urethral catheter</b> 14–16 Fr (coudé ถ้าผ่านต่อมลูกหมากยาก); ใส่ไม่ได้ → suprapubic cystostomy",
      "หลังระบาย: เฝ้าระวัง post-obstructive diuresis (>200 mL/h), decompression hematuria, ตรวจ Cr",
      "Alpha-blocker ≥2–3 วันก่อน trial without catheter (TWOC); 5-ARI ถ้า prostate >30–40 mL",
      "ล้ม TWOC / retention ซ้ำ, recurrent UTI, hematuria, bladder stone, renal insufficiency → elective TURP / HoLEP",
      "ตัวกระตุ้น AUR: anticholinergic, ยาแก้หวัด sympathomimetic, opioid, แอลกอฮอล์, ท้องผูก, หลังดมยา",
      "คาสาย + <b>alpha-blocker</b> แล้ว <b>trial without catheter</b> · TWOC ล้มเหลว/retention ซ้ำ → TURP · ระวัง post-obstructive diuresis"
     ],
     "pearls": [
      "TURP เป็น definitive แต่ไม่ใช่ initial ในภาวะเฉียบพลัน",
      "suprapubic เป็นทางเลือกเมื่อใส่ทาง urethra ไม่ได้เท่านั้น"
     ],
     "members": [
      "MDCU79|RoC|URO 10",
      "MDCU79|RoD|Uro 15"
     ]
    },
    {
     "id": "ureteric-stone-kub",
     "title": "Renal colic + KUB เงาทึบแนวท่อไต → ureteric stone",
     "asked": [
      "ปวดเอวซ้ายร้าวขาหนีบ CVA tenderness ให้ KUB → Dx (mid ureteric stone vs UPJO)"
     ],
     "pattern": [
      "แนวท่อไตบน KUB: ปลาย transverse process → SI joint → ischial spine · upper (ถึงขอบบน sacrum) / mid (ทับ SI joint) / distal",
      "NCCT KUB = มาตรฐานยืนยัน · phlebolith กลมมีจุดใสอยู่ต่ำใน pelvis"
     ],
     "pearls": [
      "79D: รูปในไฟล์เป็นรูปใกล้เคียง เงาอยู่ระดับ L3 (upper ureter) แต่ช้อยมีแค่ mid ureteric stone กับ UPJO"
     ],
     "members": [
      "MDCU79|RoD|Uro 6"
     ]
    },
    {
     "id": "citrate",
     "title": "Citrate ป้องกันนิ่ว: จับ calcium เป็น soluble complex",
     "asked": [
      "ทำไม citrate ลดการเกิดนิ่ว"
     ],
     "pattern": [
      "Citrate จับ Ca → ลด supersaturation ของ CaOx/CaP + ยับยั้ง crystal growth · K citrate → urine alkaline (ละลาย uric acid/cystine)",
      "Hypocitraturia: distal RTA, chronic diarrhea, hypokalemia, thiazide"
     ],
     "members": [
      "MDCU79|RoD|Uro 11"
     ]
    },
    {
     "id": "renal-colic-analgesia",
     "title": "Renal colic: NSAIDs first-line · แพ้ NSAID → opioid",
     "asked": [
      "Renal colic แพ้ NSAIDs → morphine (78B)"
     ],
     "pattern": [
      "NSAID &gt; opioid ใน renal colic; MET tamsulosin สำหรับ distal 5–10 mm"
     ],
     "members": [
      "MDCU78|RoB|16"
     ]
    },
    {
     "id": "cystine",
     "title": "Hexagonal crystals = cystine",
     "asked": [
      "UA hexagonal crystals (78B)"
     ],
     "pattern": [
      "Coffin lid = struvite · envelope = Ca oxalate · rhomboid = uric acid"
     ],
     "members": [
      "MDCU78|RoB|17"
     ]
    },
    {
     "id": "bph-medical",
     "title": "BPH IPSS 22 ต่อมเล็ก PSA 1 → alpha-blocker",
     "asked": [
      "(78B)"
     ],
     "pattern": [
      "5-ARI ต่อม &gt;30–40 mL · surgery เมื่อมี indication"
     ],
     "members": [
      "MDCU78|RoB|18"
     ]
    }
   ]
  },
  {
   "title": "UTI และ STI",
   "sections": [
    {
     "id": "uti-pregnancy",
     "title": "UTI ในหญิงตั้งครรภ์หลังรักษาครบ → repeat urine culture (test of cure)",
     "trend": "ออกซ้ำ 2 เคสเกือบเหมือนกัน — ตัวลวงคือ observe และ prophylaxis จนคลอด",
     "asked": [
      "ครรภ์ 18–20 สัปดาห์ cystitis E. coli ได้ nitrofurantoin ครบ อาการหาย → next step",
      "ASB ในครรภ์ รักษาแล้ว culture ซ้ำยังเจอเชื้อเดิม → investigate (79D)",
      "ASB คนท้องหลังรักษายังบวก → ให้ยาอีกคอร์ส (78B)"
     ],
     "pattern": [
      "ในครรภ์ bacteriuria ทุกแบบต้องรักษา และ <b>ส่ง urine culture ซ้ำ ~1–2 สัปดาห์หลังจบยา</b> แล้ว screen เป็นระยะจนคลอด",
      "เหตุผล: hydroureter + stasis → เป็นซ้ำบ่อย; ไม่รักษา ASB → pyelonephritis 20–35%, preterm, LBW",
      "ASB: screen urine culture ตอนฝากครรภ์ครั้งแรก, รักษาทุกราย (IDSA 2019)",
      "ยาปลอดภัย: nitrofurantoin (เลี่ยงใกล้คลอด / G6PD), cephalexin, amoxicillin-clavulanate, fosfomycin; เลี่ยง TMP-SMX ไตรมาสแรกและใกล้คลอด, ห้าม fluoroquinolone, tetracycline",
      "เป็นซ้ำ ≥2 ครั้งหรือหลัง pyelonephritis → suppressive nitrofurantoin / cephalexin ก่อนนอนจนคลอด",
      "Pyelonephritis ในครรภ์ → admit + IV ceftriaxone / cefazolin; ไม่ดีขึ้น 48–72 ชม. → renal US",
      "Persistent bacteriuria ในครรภ์ → รักษาซ้ำตาม sensitivity ± suppressive + <b>US KUB</b> (ไม่มีรังสี) หาความผิดปกติ"
     ],
     "pearls": [
      "อย่าใช้หลักของหญิงไม่ตั้งครรภ์ (หายแล้วไม่ต้องตรวจซ้ำ)",
      "prophylaxis จนคลอดไม่ใช่ขั้นแรกหลังติดเชื้อครั้งแรก",
      "79C (หลังรักษาครั้งแรก) ตอบ repeat culture · 79D (culture ซ้ำแล้วยังเจอเชื้อเดิม) ตอบ US KUB"
     ],
     "members": [
      "MDCU79|RoC|URO 2",
      "MDCU79|RoC|URO 12",
      "MDCU79|RoD|Uro 4",
      "MDCU78|RoB|52"
     ]
    },
    {
     "id": "gonococcal-urethritis",
     "title": "Gonococcal urethritis → ceftriaxone IM + doxycycline",
     "asked": [
      "ชายหนุ่ม dysuria + หนองท่อปัสสาวะ Gram stain intracellular gram-negative diplococci ตรวจ chlamydia ไม่ได้ → treatment",
      "Urethral discharge + GN diplococci → Dx (79D)"
     ],
     "pattern": [
      "<b>CDC 2021: ceftriaxone 500 mg IM ครั้งเดียว</b> (1 g ถ้า ≥150 kg)",
      "ยังไม่ exclude chlamydia → <b>เพิ่ม doxycycline 100 mg bid 7 วัน</b> (ตั้งครรภ์ใช้ azithromycin 1 g)",
      "แพ้ cephalosporin รุนแรง → gentamicin 240 mg IM + azithromycin 2 g",
      "รักษาคู่นอน, งดเพศสัมพันธ์ 7 วัน, ตรวจ HIV + syphilis, retest 3 เดือน",
      "NGU: Chlamydia มากสุด, Mycoplasma genitalium, Trichomonas; NAAT first-void urine เป็นมาตรฐาน"
     ],
     "pearls": [
      "regimen เก่า ceftriaxone + azithromycin ถูกยกเลิกเป็น routine — azithromycin เดี่ยวผิด",
      "ไม่ใช้ fluoroquinolone ใน gonorrhea"
     ],
     "members": [
      "MDCU79|RoC|URO 11",
      "MDCU79|RoD|Uro 9"
     ]
    },
    {
     "id": "emphysematous-pyelo",
     "title": "Emphysematous pyelonephritis (เบาหวาน + gas ในเนื้อไต)",
     "asked": [
      "หญิงเบาหวาน ไข้สูง ปวดสีข้าง CT gas ใน renal parenchyma → Dx",
      "CT แก๊สใน collecting system: pyelitis vs pyelonephritis (78D)"
     ],
     "pattern": [
      "แก๊สในเนื้อไต = EPN · ใน collecting system = emphysematous pyelitis · ใน bladder = emphysematous cystitis",
      "รักษา: IV ATB + คุมน้ำตาล + percutaneous drainage; ไม่ตอบ/รุนแรง → nephrectomy (Huang–Tseng)"
     ],
     "members": [
      "MDCU79|RoD|Uro 10",
      "MDCU78|RoD|83"
     ]
    },
    {
     "id": "renal-abscess-uro",
     "title": "Renal abscess ตามขนาด (3 / 5 cm)",
     "asked": [
      "3.5 cm → IV ATB (78B)",
      "&gt;5 cm ไม่ตอบยา → percutaneous drainage (78D)"
     ],
     "pattern": [
      "&lt;3 ATB · 3–5 ATB ± drain · &gt;5 drain"
     ],
     "members": [
      "MDCU78|RoB|21",
      "MDCU78|RoD|82"
     ]
    }
   ]
  },
  {
   "title": "อวัยวะเพศชายในเด็ก",
   "sections": [
    {
     "id": "paraphimosis",
     "title": "Paraphimosis → manual reduction ก่อน",
     "asked": [
      "เด็ก 6 ปี paraphimosis 4 ชม. glans ยังชมพู → next step (ตัวลวง dorsal slit, emergency circumcision, topical steroid)",
      "Physiologic phimosis เด็ก 3 ปี ไม่มี scar → topical steroid + คำแนะนำ (79D)"
     ],
     "pattern": [
      "Emergency: ประเมิน perfusion ของ glans",
      "ขั้น 1: analgesia (dorsal penile block / sedation) + ลดบวม (manual compression, ice, granulated sugar, puncture) → <b>manual reduction</b>",
      "ขั้น 2: ล้มเหลว → dorsal slit",
      "ขั้น 3: elective circumcision ภายหลัง",
      "Phimosis (รูดไม่ลง) → topical steroid ก่อน, circumcision ถ้าไม่ได้ผล",
      "Physiologic phimosis: ไม่ดึงรั้ง · มีปัญหา → 0.05% betamethasone 4–8 สัปดาห์ · circumcision เมื่อ pathologic (scar/BXO), balanoposthitis ซ้ำ"
     ],
     "pearls": [
      "สับสน phimosis กับ paraphimosis — topical steroid เป็นของ phimosis"
     ],
     "members": [
      "MDCU79|RoC|Ped 2",
      "MDCU79|RoD|Ped 4"
     ]
    },
    {
     "id": "epispadias",
     "title": "Epispadias vs hypospadias",
     "asked": [
      "ทารกชาย meatus ด้าน dorsal + ventral hooded prepuce + dorsal chordee, bladder ปกติ → Dx",
      "Hypospadias (ventral meatus, chordee, dorsal hood) → ต้องหาอะไรร่วม = UDT (79D)"
     ],
     "pattern": [
      "<b>Epispadias</b>: meatus dorsal, dorsal chordee, ventral hood, pubic diastasis; penopubic → incontinence; ส่วนใหญ่อยู่ใน exstrophy-epispadias complex",
      "<b>Hypospadias</b>: meatus ventral, ventral chordee, dorsal hood; ห้าม circumcise; ซ่อม 6–18 เดือน; proximal หรือมี undescended testis → ตรวจ DSD",
      "Bladder exstrophy: bladder plate เปิดที่ผนังหน้าท้อง + epispadias + pubic diastasis",
      "Hypospadias ร่วม UDT/inguinal hernia · hypospadias + คลำอัณฑะไม่ได้ = นึกถึง DSD (CAH) · ห้าม circumcision"
     ],
     "pearls": [
      "chordee กับ hood อยู่ฝั่งตรงข้ามกันเสมอ — hypo = ventral, epi = dorsal",
      "recall มีแค่ลักษณะ Claude เติมว่า bladder ปกติเพื่อแยกจาก exstrophy"
     ],
     "members": [
      "MDCU79|RoC|Ped 3",
      "MDCU79|RoD|Ped 16"
     ]
    },
    {
     "id": "udt",
     "title": "Undescended testis: palpable → orchidopexy · non-palpable → laparoscopy",
     "trend": "ถามทั้งเวลาผ่าตัดและการตรวจเมื่อคลำไม่ได้",
     "asked": [
      "เด็ก 4 ปี UDT คลำได้ใน inguinal canal → orchidopexy ทันที",
      "เด็ก 18 เดือน non-palpable + US ไม่พบ → diagnostic laparoscopy",
      "Bilateral palpable UDT 15 เดือน → orchiopexy (78B)"
     ],
     "pattern": [
      "ส่งต่อถ้าไม่ลงภายใน 6 เดือน · orchidopexy ภายใน 18 เดือน (AUA/EAU) · hormone ไม่แนะนำ",
      "Non-palpable: EUA → <b>diagnostic laparoscopy</b> (US/MRI ไม่แนะนำ) · bilateral non-palpable → แยก DSD/anorchia (karyotype, 17-OHP, hCG test)"
     ],
     "members": [
      "MDCU79|RoD|Uro 16",
      "MDCU79|RoD|Uro 17",
      "MDCU79|RoD|Ped 16",
      "MDCU78|RoB|23"
     ]
    },
    {
     "id": "hydrocele",
     "title": "Non-communicating hydrocele (ส่องไฟผ่าน บีบไม่ยุบ)",
     "asked": [
      "ก้อนถุงอัณฑะขวาส่องไฟผ่าน นอน/บีบไม่ยุบ → Dx"
     ],
     "pattern": [
      "Communicating: ขนาดเปลี่ยน บีบยุบ → herniotomy · non-communicating ทารก → observe 1–2 ปี · varicocele = bag of worms ซ้าย ยุบเมื่อนอน"
     ],
     "members": [
      "MDCU79|RoD|Ped 7"
     ]
    },
    {
     "id": "cah-dsd",
     "title": "DSD (คลำ gonad ไม่ได้ + hypospadias) → CAH salt-wasting: Na ต่ำ",
     "asked": [
      "DSD + UDT + hypospadias → electrolyte ที่ผิดปกติ"
     ],
     "pattern": [
      "21-OH deficiency: <b>hyponatremia + hyperkalemia</b>, acidosis, hypoglycemia ช่วง 1–3 สัปดาห์ · 17-OHP สูง · hydrocortisone + fludrocortisone + NaCl",
      "11β-OH: HT + hypokalemia"
     ],
     "members": [
      "MDCU79|RoD|Ped 17"
     ]
    },
    {
     "id": "vur-uro",
     "title": "VUR: CAP ก่อน, reimplant เมื่อ breakthrough · VCUG ปกติ → หยุดยา",
     "asked": [
      "VUR IV + recurrent UTI (78B)",
      "VCUG ปกติหลังกินยา 3 ปี (78D)"
     ],
     "pattern": [
      "RIVUR: CAP ลด febrile UTI"
     ],
     "members": [
      "MDCU78|RoB|24",
      "MDCU78|RoD|84"
     ]
    }
   ]
  }
 ]
});

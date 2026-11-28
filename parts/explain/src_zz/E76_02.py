import json
A=json.load(open('/home/claude/h/all.json'))
P={}
V={}  # key -> new variant appended to existing list
K='MDCU76|RoA|'

V[K+'14']="ก้อน ground-glass เด่น ขนาด 1.5 cm อยู่ peripheral ส่วน solid น้อยมาก ไม่มีต่อมน้ำเหลือง → sublobar resection (wedge ที่ margin กว้างพอ หรือ segmentectomy) ได้ผลดีมาก (JCOG0804) ไม่จำเป็นต้อง lobectomy"
V[K+'15']="ผู้ป่วย HIV CD4 40 มีก้อน ring-enhancing หลายก้อนที่ basal ganglia ไข้ต่ำ ๆ → toxoplasmosis → ให้ pyrimethamine + sulfadiazine ลองรักษา 2 สัปดาห์ ถ้าก้อนไม่ยุบจึง biopsy หา primary CNS lymphoma"
V[K+'16']="ผู้ใหญ่ถูกไฟฟ้าแรงสูง แผลทางเข้าออกที่มือและเท้าดูเล็ก แต่แขนบวมตึง ปัสสาวะสีโค้ก → deep tissue injury + rhabdomyolysis → สารน้ำให้ปัสสาวะราว 100 mL/h จนใส (ATLS) + fasciotomy ถ้ามี compartment syndrome — %TBSA ประเมินต่ำกว่าความจริง"
V[K+'17']="ชายมี intersphincteric fistula ต่ำ ทางเดินผ่านหูรูดน้อยมาก กลั้นอุจจาระปกติ → fistulotomy (เปิด tract วางแผลให้หายจากก้นขึ้นมา) อัตราหายสูงสุดในทุกวิธี ไม่ต้องใช้วิธีเก็บหูรูด"
V[K+'18']="ชาย 28 ปี AVM แตกเกิดก้อนเลือดใน temporal ขนาดใหญ่ midline shift ซึมลงเร็ว → craniotomy เอาก้อนเลือดออกช่วยชีวิตก่อน แล้วทำ DSA วางแผนรักษา AVM ภายหลัง (ยกเว้น nidus เล็กผิวเผินที่ตัดไปพร้อมกันได้)"
V[K+'19']="ทารกชายแรกเกิด prenatal US พบไตบวมน้ำสองข้าง กระเพาะปัสสาวะผนังหนา VCUG พบท่อปัสสาวะส่วนหลังขยายร่วม reflux สองข้าง → posterior urethral valves → ใส่สายสวนแล้วทำ valve ablation ก่อน (reflux เป็นผลตามมา ไม่ reimplant ทันที)"
V[K+'20']="หญิงผอม BMI 19 ไขมันหน้าท้องน้อย ต้องการซ่อมเต้านมด้วยเนื้อตัวเองหลังฉายแสง → latissimus dorsi flap (thoracodorsal artery) ร่วม implant หรือ free flap จากต้นขาด้านใน (PAP/TUG) แทน TRAM"
V[K+'21']="ทารก 6 สัปดาห์ ตัวเหลือง อุจจาระซีด US พบถุงน้ำเล็กที่ porta hepatis แต่ท่อน้ำดีในตับไม่ขยาย → สงสัย cystic biliary atresia (choledochal cyst มักมีท่อในตับขยาย) → IOC ยืนยันแล้วทำ Kasai โดยเร็ว"
V[K+'22']="ทารกแรกเกิดคางเล็กมาก ลิ้นตกไปด้านหลังอุดทางเดินหายใจ เพดานโหว่รูปตัว U แต่หนังตาและโหนกแก้มปกติ → Pierre Robin sequence → จัดท่าคว่ำ/nasopharyngeal airway และตรวจตาหา Stickler syndrome ที่พบร่วมบ่อย"
V[K+'23']="หลัง CABG ใช้ bilateral IMA ในผู้ป่วยเบาหวานอ้วน 3 สัปดาห์มีไข้ แผลกลางอกมีหนองซึม กระดูก sternum ขยับได้ → deep sternal wound infection/mediastinitis → debridement + ปิดด้วย pectoralis หรือ omental flap"
V[K+'24']="อัลตราซาวด์ทารกในครรภ์ 20 สัปดาห์ พบ omphalocele ถุงเล็กมีแต่ลำไส้ ไม่มีตับ → เสี่ยงโครโมโซมผิดปกติสูงกว่าถุงที่มีตับ → แนะนำ amniocentesis ตรวจโครโมโซม + fetal echocardiography"
V[K+'25']="ทารกคลอดก่อนกำหนด 30 สัปดาห์ ผลคัดกรอง 17-OHP สูงเล็กน้อย อวัยวะเพศปกติ electrolytes ปกติ → อาจเป็นผลบวกลวงจาก prematurity/stress → ตรวจซ้ำและยืนยันด้วย LC-MS/MS หรือ ACTH stimulation ก่อนให้ยา"
V[K+'26']="ผู้ป่วยบาดเจ็บศีรษะ GCS 7 รูม่านตาขวาขยาย แต่แขนขาขวาอ่อนแรง CT พบ epidural hematoma ด้านขวา → Kernohan phenomenon → เชื่อข้างของรูม่านตา ผ่าตัด craniotomy ด้านขวา"
V[K+'27']="ชาย 60 ปีเคยรักษามะเร็งปอด ซึมลง CT พบก้อน ring-enhancing หลายก้อนตรงรอยต่อ gray–white matter edema มาก → brain metastasis → MRI ทั้งสมอง แล้วเลือก SRS หรือผ่าตัดตามจำนวน/ขนาดก้อน"
V[K+'28']="หญิงตั้งครรภ์ 28 สัปดาห์ หอบเหนื่อยเฉียบพลัน สงสัย pulmonary embolism ขาไม่บวม → ทำ CTPA ได้เมื่อจำเป็น iodinated contrast ไม่ก่อวิรูป ทารกไม่ต้องตรวจไทรอยด์เพิ่มนอกจากคัดกรองแรกเกิดตามปกติ (ACR)"
V[K+'29']="เด็ก 11 ปี พ่อเป็น FAP ที่ยืนยัน APC mutation → ตรวจยีนเด็ก ถ้าพบยีนเดียวกัน → เริ่มส่องกล้องลำไส้ใหญ่ทุก 1–2 ปีตั้งแต่อายุ 10–12 ปี และวางแผน prophylactic colectomy เมื่อ polyp มากจนคุมด้วยกล้องไม่ได้"
V[K+'30']="ชายมีแผล pilonidal sinus เรื้อรังมากว่า 20 ปี ขอบแผลนูนแข็ง แตกเลือดง่าย → ตัดชิ้นเนื้อหา squamous cell carcinoma ที่เกิดในแผลเรื้อรัง → wide local excision (ไม่ใช่แค่ระบายหนอง)"
V['MDCU76|RoC|Neuro 1']="ญาติร่วมบ้านของผู้ป่วย NCC เห็นปล้องพยาธิขาวแบนหลุดออกมากับอุจจาระ → taeniasis (พาหะที่ปล่อยไข่ T. solium) → praziquantel หรือ niclosamide + สอนล้างมือ ป้องกันคนในบ้านเป็น cysticercosis เพิ่ม"
V['MDCU76|RoC|Neuro 2']="ทารกแรกเกิด 5 วัน ไข้ ซึม กระหม่อมโป่ง ได้ ampicillin + gentamicin สูตร sepsis อยู่ → สงสัย meningitis → เพิ่ม cefotaxime (หรือ ceftazidime/meropenem) เพราะ gentamicin ใน CSF ต่ำเกินจะคลุม gram-negative ในสมอง"

P[K+'16']=dict(wrong=dict(D="Superficial (first-degree): ทำลายเฉพาะ epidermis แผลแดง แห้ง เจ็บ ไม่มีตุ่มพอง กดแล้ว blanch เช่น sunburn หายเองใน 3–7 วันไม่มีแผลเป็น และไม่นับใน %TBSA · แผลที่มี hemorrhagic bullae ลึกกว่านี้มาก · จะถูกถ้าเป็นชายที่ตากแดดทั้งวันแล้วหลังแดงแสบโดยไม่มีตุ่มน้ำ"))

P[K+'20']=dict(summary=[
"<b>Pedicled TRAM</b> อยู่ได้ด้วย <b>superior epigastric artery</b> (แขนงปลายของ internal thoracic/mammary artery ที่ลอดใต้ costal margin เข้า rectus sheath) — ตัด DIEA ทิ้งแล้วหมุนกล้าม rectus ขึ้นทางอุโมงค์ใต้ผิว เลือดไปผิวหน้าท้องล่างผ่าน choke vessels",
"Free TRAM / muscle-sparing TRAM / <b>DIEP</b> ใช้ <b>deep inferior epigastric artery และ vein</b> (จาก external iliac — dominant supply ของผิวหน้าท้องล่าง) ต่อเข้ากับ internal mammary vessels ด้วย microsurgery · DIEP เก็บกล้ามและ fascia ไว้ จึง bulge/hernia น้อยกว่า",
"Perfusion zone ของ flap หน้าท้อง (Hartrampf; Holm ปรับลำดับ II/III ตาม perfusion study): zone I เหนือกล้ามที่เป็น pedicle เลือดดีสุด · zone IV ด้านนอกสุดฝั่งตรงข้ามเลือดน้อยสุด มักตัดทิ้ง",
"Flap ทางเลือกอื่น: latissimus dorsi (thoracodorsal artery มักร่วม implant) · SIEA flap (superficial inferior epigastric ไม่ผ่ากล้ามเลย) · PAP flap (profunda artery perforator ต้นขา) · TUG flap (medial circumflex femoral)",
"ปัจจัยเสี่ยงของ TRAM: สูบบุหรี่, BMI สูง, เบาหวาน, แผลผ่าตัดหน้าท้องเดิมที่ตัดผ่านกล้าม rectus หรือหลอดเลือด (เช่น subcostal) — ทำให้ fat necrosis, partial flap loss และแผล donor แยกมากขึ้น",
"ภาวะแทรกซ้อน: donor site bulge/hernia (pedicled TRAM มากสุด มักซ่อมด้วย mesh), fat necrosis, partial flap loss (pedicled มากกว่า free) · free flap เสี่ยง venous congestion/arterial thrombosis ต้องเฝ้าดูใกล้ชิด 48–72 ชม.แรก",
"จังหวะเวลา: immediate หรือ delayed reconstruction · ถ้าต้องฉายรังสีหลัง mastectomy มักเลื่อนการซ่อมด้วยเนื้อตัวเองไปหลังฉายแสง (บางรายใส่ tissue expander รอก่อน) · ทางเลือกที่ไม่ใช้เนื้อตัวเอง = tissue expander → implant"])

P[K+'21']=dict(opinion="เห็นด้วยกับคีย์ A ความมั่นใจสูง — ไฟล์ Key 76A วง A ลายมือ \"triangular cord sign positive → IOC\" และ \"&gt;60 day → IOC\" ซึ่งทารกอายุ 2 เดือนเข้าเกณฑ์ทั้งสองข้อ · แนวทาง NASPGHAN/ESPGHAN 2017 เรื่อง cholestatic jaundice ในทารกใช้ US, HIDA และ liver biopsy ช่วยคัดกรอง แต่การยืนยันก่อน Kasai ยังเป็น intraoperative cholangiography ตรงคีย์ · ปัจจุบันหลายประเทศเพิ่ม stool color card และ direct bilirubin แรกเกิดเพื่อจับได้ก่อน 60 วัน")

P[K+'23']=dict(
trap="ช้อย D (radial artery) ล่อเพราะเป็น arterial graft และ guideline ใหม่ยกย่อง แต่หลักฐานด้าน survival ที่ชัดที่สุดเป็นของ LIMA–LAD · ช้อย B ใช้ conduit ถูกแต่ผิดเป้า — ต้องจับคู่ทั้ง conduit ที่ดีที่สุด (LIMA) กับเส้นที่เลี้ยงกล้ามเนื้อหัวใจมากที่สุด (LAD) · SVG ไป LAD (C) patency ต่ำกว่ามากจาก vein graft disease",
summary=[
"Graft ที่ให้ทั้ง patency และ survival ดีที่สุด = <b>LIMA แบบ in situ → LAD</b> (Loop 1986) · class 1 ทั้ง ACC/AHA/SCAI 2021 และ ESC/EACTS 2018 · ทำในเกือบทุกรายที่ต้อง bypass LAD",
"ทำไม LIMA ดี: internal elastic lamina ต่อเนื่องไม่มีรูเปิด, endothelium สร้าง nitric oxide/prostacyclin มาก จึงแทบไม่เกิด atherosclerosis · patency 10 ปี &gt; 90% · ต้องแน่ใจว่า subclavian ซ้ายไม่ตีบเพราะเป็นต้นทาง",
"SVG ล้มเหลว 3 ระยะ: เดือนแรก thrombosis (เทคนิค) · 1–12 เดือน intimal hyperplasia · หลัง 1 ปี atherosclerosis ของ graft → patency 10 ปีราว 50–60% · ป้องกันด้วย aspirin ตลอดชีวิต + high-intensity statin",
"Conduit ที่สอง: ACC/AHA 2021 แนะนำ <b>radial artery แทน SVG</b> สำหรับเส้นสำคัญอันดับสองที่ตีบรุนแรง (class 1) · ถ้าเป้าหมายตีบไม่มาก competitive flow ทำให้ radial spasm/อุดตัน (string sign) · ตรวจ ulnar collateral (Allen test) ก่อนเลาะ",
"Bilateral IMA อาจดีระยะยาวในผู้ป่วยอายุน้อยที่ไม่เสี่ยงแผล แต่ ART trial 10 ปีไม่ต่างอย่างมีนัยสำคัญแบบ intention-to-treat · เพิ่ม sternal wound infection ในเบาหวาน/อ้วน → เลาะแบบ skeletonized ลดความเสี่ยง",
"ข้อบ่งชี้ CABG มากกว่า PCI: left main disease, triple-vessel disease โดยเฉพาะ SYNTAX score สูง, เบาหวานร่วม multivessel disease (FREEDOM), LV dysfunction จาก ischemia (STICH) · 2-vessel ที่มี proximal LAD"],
opinion="เห็นด้วยกับคีย์ A ความมั่นใจสูง — ไฟล์ Key 76A วง A (เขียนว่า \"จ้ำ\") · LIMA–LAD เป็นคำแนะนำ class 1 ใน ACC/AHA/SCAI 2021 และ ESC/EACTS 2018 · สิ่งที่ guideline ปัจจุบันเพิ่มจากเนื้อหาเดิมคือแนะนำ radial artery แทน SVG สำหรับเส้นสำคัญอันดับสอง (class 1, 2021) แต่ไม่เปลี่ยนคำตอบ เพราะ graft ที่พิสูจน์ survival benefit ชัดที่สุดยังเป็น LIMA–LAD")

P[K+'25']=dict(opinion="เห็นด้วยกับคีย์ A ความมั่นใจสูง — ไฟล์ Key 76A วง A เขียน \"+ 17-OHP ↑\" และลายมือ \"ส่งเพราะ 21-OH def. กลัว hypovolemia, shock\" · Endocrine Society CAH guideline 2018 ให้ตรวจ 17-OHP ร่วม electrolytes ในทารกที่สงสัย และติดตาม Na/K ช่วงสัปดาห์แรก · karyotype/SRY ยังต้องส่งทุกรายตาม DSD consensus แต่ไม่ใช่สิ่งที่เร่งด่วนที่สุด · 17-OHP ควรเจาะหลังอายุ 24–48 ชม.เพื่อลดผลบวกลวง")

P[K+'26']=dict(summary=[
"<b>Kernohan phenomenon</b> (Kernohan–Woltman notch): ก้อน supratentorial ดัน midbrain ไปฝั่งตรงข้าม → cerebral peduncle ฝั่งตรงข้ามถูกกดกับขอบ tentorium → <b>hemiparesis ข้างเดียวกับก้อน</b> = false-localizing sign · รูม่านตาที่ขยายยังอยู่ข้างเดียวกับก้อน จึงเชื่อม่านตามากกว่า",
"Uncal herniation แบบทั่วไป: CN III ข้างเดียวกันถูกกด (parasympathetic fiber อยู่ผิวนอก → ม่านตาขยายก่อน ptosis/ophthalmoplegia) + อ่อนแรงข้ามข้าง + ซึมลงจาก reticular activating system · PCA ถูกกดได้ → occipital infarct",
"Monro–Kellie: สมอง + เลือด + CSF ในกะโหลกปริมาตรรวมคงที่ เมื่อชดเชยหมด ICP พุ่ง · ICP ปกติ 5–15 mmHg · BTF 4th ed. (2016) รักษาเมื่อ &gt; 22 mmHg · CPP = MAP − ICP เป้า 60–70 mmHg",
"Herniation อื่น: subfalcine (cingulate gyrus ลอดใต้ falx กด ACA → ขาข้างตรงข้ามอ่อนแรง) · central (diencephalon เลื่อนลงตรง ม่านตาเล็กแล้วค้างกลาง) · tonsillar (ผ่าน foramen magnum กด medulla → หยุดหายใจ) · upward (ก้อน posterior fossa ดันขึ้น)",
"Cushing triad = ความดันสูง (pulse pressure กว้าง) + หัวใจเต้นช้า + หายใจไม่สม่ำเสมอ บอก brainstem ถูกกดจาก ICP สูงระยะท้าย ไม่ใช่สัญญาณเตือนระยะแรก",
"Duret hemorrhage: เลือดออกเป็นเส้นแนวกลางของ pons/midbrain จาก perforating branch ของ basilar ถูกยืดขาดเมื่อ brainstem เลื่อนลง — พบในระยะท้ายของ descending herniation พยากรณ์แย่มาก",
"รักษาเร่งด่วน: ทางเดินหายใจ, หัวสูง 30°, mannitol 0.25–1 g/kg หรือ hypertonic saline, hyperventilation ชั่วคราว (PaCO2 30–35) เป็นสะพาน แล้วผ่าตัดเอาก้อน/เลือดออก หรือ decompressive craniectomy"])

P[K+'28']=dict(
why="ข้อ NOT ต้องแยก \"ข้อบ่งชี้\" ออกจาก \"ข้อควรระวัง\" · <b>Hematuria</b> เป็นข้อบ่งชี้ของ CT with contrast — <b>CT urography</b> ต้องฉีดสีเพื่อดู upper tract หาก้อนที่ไต ท่อไต และ urothelial carcinoma (AUA 2020: microhematuria ความเสี่ยงสูงและ gross hematuria ทุกราย → CT urography + cystoscopy) และไม่ได้แปลว่าไตเสื่อม → D เป็นคำตอบ · ช้อยอื่นเป็น precaution ที่ต้องชั่งประโยชน์–ความเสี่ยง: <b>ตั้งครรภ์</b> (สารผ่านรกได้แต่ไม่ก่อวิรูป ใช้เมื่อจำเป็น) · <b>เคยแพ้รุนแรง</b> (เลี่ยง หรือ premedication + เปลี่ยนชนิดสาร) · <b>ไตเสื่อม</b> eGFR &lt; 30 หรือ AKI เสี่ยง contrast-associated AKI (ให้ NSS ป้องกัน ใช้สารน้อยที่สุด) · <b>hyperthyroidism ที่มีอาการ</b> (iodine กระตุ้น thyrotoxicosis และขัดการดูด radioiodine ราว 6 สัปดาห์) · ตรงคีย์ ไฟล์ Key 76A วง D ลายมือที่ C <b>\"กลัว AKI?\"</b> และแปะสไลด์ Contraindications and Precautions (Pregnant · previous moderate to severe adverse reaction · symptomatic hyperthyroidism or within 6 weeks of radioiodine)",
summary=[
"ข้อห้าม/ข้อควรระวังของ iodinated contrast เกือบทั้งหมดเป็น <b>relative</b> ต้องชั่งประโยชน์ · <b>hematuria เป็นข้อบ่งชี้</b> ของ CT urography ไม่ใช่ข้อห้าม — ไตเสื่อมดูจาก eGFR ไม่ใช่จากเลือดในปัสสาวะ",
"Allergic-like reaction: ประวัติแพ้ปานกลาง–รุนแรงต่อสารกลุ่มเดียวกันคือความเสี่ยงหลัก → ใช้ imaging อื่น หรือ premedication (ACR: prednisone 50 mg ที่ 13, 7, 1 ชม.ก่อน + diphenhydramine 50 mg 1 ชม.ก่อน) และเปลี่ยนชนิดสาร · แพ้อาหารทะเล/povidone-iodine ไม่ใช่ข้อบ่งชี้ premedication",
"Contrast-associated AKI (ACR–NKF 2020): eGFR ≥ 45 เสี่ยงแทบไม่มี · 30–44 พิจารณารายบุคคล · <b>eGFR &lt; 30 ที่ไม่ได้ฟอกไต หรือ AKI</b> → IV NSS ป้องกัน ใช้ปริมาณน้อยที่สุด · นิยาม AKI ตาม KDIGO (Cr เพิ่ม ≥ 0.3 mg/dL ใน 48 ชม. หรือ ≥ 1.5 เท่าใน 7 วัน)",
"Thyroid: iodine ปริมาณมากกระตุ้น iodine-induced hyperthyroidism (Jod-Basedow) ใน Graves/toxic nodular goiter ที่ยังไม่คุม · และทำให้ต่อมไทรอยด์อิ่มตัวด้วย iodine จนดูด radioiodine ไม่ได้ราว 4–6 สัปดาห์ → เลื่อนฉีดสีถ้าจะทำ radioiodine scan/therapy",
"ตั้งครรภ์และให้นม: สารผ่านรกได้แต่ไม่พบว่าก่อวิรูป ใช้ได้เมื่อจำเป็นและไม่มี imaging อื่นแทน · ให้นมลูกต่อได้ไม่ต้องหยุด (สารออกทางน้ำนมและถูกดูดซึมจากลำไส้ทารกน้อยมาก)",
"Hematuria workup (AUA 2020): microhematuria = ≥ 3 RBC/HPF · แบ่งความเสี่ยงตามอายุ เพศ สูบบุหรี่ ระดับเลือด → ความเสี่ยงต่ำอาจตรวจซ้ำ/US · ความเสี่ยงสูงและ gross hematuria → CT urography + cystoscopy"],
opinion="เห็นด้วยกับคีย์ D ความมั่นใจสูง — ไฟล์ Key 76A วง D และแปะสไลด์ Contraindications and Precautions (ตั้งครรภ์, เคยแพ้ปานกลาง–รุนแรง, symptomatic hyperthyroidism/ภายใน 6 สัปดาห์ของ radioiodine) · ลายมือที่ช้อย C \"กลัว AKI?\" ถูก: ACR Manual on Contrast Media 2024 และ ACR–NKF 2020 นับ eGFR &lt; 30 หรือ AKI เป็นกลุ่มที่ต้องป้องกัน แม้สไลด์ไม่ได้เขียนไว้ · hematuria เป็นข้อบ่งชี้ CT urography จึงเป็นข้อเดียวที่ไม่ใช่ precaution")

P[K+'29']=dict(
interp="โจทย์ให้ผล colonoscopy: adenomatous polyp <b>หลายร้อยก้อนกระจายทั่ว colon</b> (เกณฑ์ classic FAP คือ ≥ 100 ก้อน) → familial adenomatous polyposis · ถามจริงคือ germline gene ที่เป็นสาเหตุ ต้องแยกจาก hereditary CRC ที่ polyp น้อย (Lynch: MMR genes) และ polyposis ชนิด hamartoma",
opinion="เห็นด้วยกับคีย์ A ความมั่นใจสูง — ไฟล์ Key 76A วง A เขียน \"FAP\" · adenoma หลายร้อยก้อนเป็นภาพของ APC germline mutation · NCCN Genetic/Familial High-Risk Assessment: Colorectal (2024) แนะนำตรวจ multigene panel (รวม APC และ MUTYH) เมื่อมี adenoma สะสมตั้งแต่ราว 10 ก้อนขึ้นไป เพราะภาพส่องกล้องแยก APC กับ MUTYH ไม่ได้แน่นอน แต่คำตอบที่น่าจะเป็นที่สุดยังเป็น APC ตามคีย์")

P[K+'30']=dict(summary=[
"<b>Pilonidal disease</b> = โรคที่เกิดภายหลัง: ขนที่หลุดถูกแรงเสียดสีและแรงดูดในร่องก้นดันเข้ารูขุมขนที่ขยาย (<b>midline pits</b>) → foreign body reaction → sinus/ฝี · วินิจฉัยจากตำแหน่งแนวกลางร่องก้นเหนือ sacrococcyx + pits แนวกลาง",
"ระบาดวิทยา: ชายหนุ่มวัย 15–30 ปีพบมากกว่าหญิงหลายเท่า ปัจจัยเสี่ยง ขนดก อ้วน นั่งนาน (คนขับรถ) ร่องก้นลึก เหงื่อมาก · พบน้อยหลังอายุ 40",
"อาการ 3 แบบ: ไม่มีอาการ (มีแต่ pits) · ฝีเฉียบพลัน (ก้อนแดงร้อน fluctuant มักเยื้องข้าง pits) · sinus เรื้อรังมีน้ำเหลือง/หนองซึมเป็นพัก ๆ",
"ฝีเฉียบพลัน: <b>incision and drainage</b> แผลเยื้องจาก midline ใต้ยาชาเฉพาะที่ · ยาปฏิชีวนะเฉพาะเมื่อมี cellulitis ลุกลามหรือภูมิคุ้มกันต่ำ (ASCRS 2019) · หลังระบายราวครึ่งหนึ่งหายไม่กลับเป็นซ้ำ",
"โรคเรื้อรัง/กลับเป็นซ้ำ: excision ร่วม <b>off-midline closure/flap</b> (Karydakis, Bascom cleft lift, Limberg) recurrence ต่ำกว่า midline primary closure ชัดเจน · เปิดแผลไว้หายเองแผลหายช้าแต่ recurrence ต่ำกว่า midline closure",
"ทางเลือก minimally invasive: pit picking (Bascom/Gips), EPSiT (ส่องกล้องเผาทางเดิน), laser — เจ็บน้อย กลับไปทำงานเร็ว แต่ recurrence สูงกว่า flap บ้าง",
"DDx: hidradenitis suppurativa (หลายตำแหน่ง รักแร้/ขาหนีบ), perianal fistula (ทางเปิดใกล้ทวาร ต่อกับ anal canal), furuncle/carbuncle · ป้องกันเป็นซ้ำ: กำจัดขน (โกน/laser) และรักษาความสะอาด"])

P['MDCU76|RoC|Neuro 1']=dict(summary=[
"<b>Neurocysticercosis</b>: คนเป็นโฮสต์กึ่งกลางจากการกิน<b>ไข่</b> T. solium (fecal–oral จากผู้ที่มีพยาธิตัวเต็มวัยในลำไส้) · กินหมูดิบที่มี cysticerci ทำให้เป็น taeniasis ไม่ใช่ NCC โดยตรง · สาเหตุ acquired epilepsy อันดับต้นในประเทศกำลังพัฒนา",
"ระยะของ cyst (Escobar): vesicular (cyst ใส + scolex, edema น้อย) → colloidal (ring enhance + edema มาก อาการมากสุด) → granular nodular → calcified (จุดหินปูน)",
"เกณฑ์วินิจฉัย Del Brutto (ปรับปี 2017): absolute = ชิ้นเนื้อยืนยัน, <b>cyst with scolex</b> ใน imaging, subretinal cyst จาก fundoscopy · MRI เห็น scolex และ cyst ใน ventricle ดีกว่า CT ส่วน CT เห็นหินปูนดีกว่า · serology (EITB) ไวต่ำในรายที่มีก้อนเดียว",
"ก่อนให้ยาฆ่าพยาธิ (IDSA/ASTMH 2017): ตรวจตาหา cyst ใน eye · ประเมิน hydrocephalus/ICP สูงก่อน · ตรวจหรือรักษา Strongyloides และคัด latent TB ถ้าต้องให้ steroid นาน",
"Parenchymal viable cyst: 1–2 cysts → albendazole 15 mg/kg/day 10–14 วัน · &gt; 2 cysts → albendazole + praziquantel 50 mg/kg/day · ให้ corticosteroid ร่วมเสมอ · AED ทุกรายที่ชัก",
"Calcified lesion → AED อย่างเดียว ไม่ให้ยาฆ่าพยาธิ (ตายแล้ว) · single enhancing lesion → albendazole + steroid ช่วยให้ cyst ยุบเร็วและลดการชักซ้ำ",
"Extraparenchymal: intraventricular cyst + hydrocephalus → neuroendoscopic removal (ดีที่สุด) หรือ VP shunt · subarachnoid/racemose → ยาฆ่าพยาธินานกว่า + steroid · cyst ในตา → ผ่าตัดเอาออกก่อนให้ยา"])

P['MDCU76|RoC|Neuro 2']=dict(
why="การผ่าน BBB ขึ้นกับ lipophilicity, ขนาดโมเลกุล, การแตกตัวเป็นประจุ, protein binding และ efflux pump (P-glycoprotein) · <b>Aminoglycoside</b> เป็นโมเลกุลมีขั้วสูง ละลายน้ำ ไม่ละลายไขมัน จึงเข้า CSF ได้น้อยแม้ meninges อักเสบ และเพิ่มขนาดยาให้ถึงระดับรักษาใน CSF ไม่ได้เพราะ therapeutic index แคบ (nephrotoxicity, ototoxicity) → ไม่ใช้เป็นยา systemic รักษา meningitis/brain abscess · ถ้าจำเป็น (gram-negative ดื้อยา, ventriculitis) ให้ <b>intraventricular</b> gentamicin/amikacin ผ่าน EVD (IDSA 2017) · ช้อยอื่นใช้ได้: <b>penicillin</b> และ <b>vancomycin</b> ผ่านได้พอเมื่อ meninges อักเสบ (การอักเสบเปิด tight junction) จึงต้องใช้ขนาดสูง · <b>chloramphenicol</b> ละลายไขมัน และ <b>fosfomycin</b> โมเลกุลเล็ก protein binding ต่ำ ผ่านได้ดีแม้ meninges ปกติ · ตรงคีย์ ไฟล์ Key 76C กากบาทแดงที่ <b>e</b> (ต้นฉบับเขียน \"ตรงแอค เปลี่ยนช้อยส์เฉยๆ\")",
summary=[
"<b>Aminoglycoside ไม่ใช้รักษา CNS infection แบบ systemic</b> เพราะผ่าน BBB น้อยแม้อักเสบ และเพิ่มขนาดไม่ได้จาก nephro/ototoxicity · ใช้ได้เฉพาะทาง intraventricular หรือเป็นยาเสริม synergy",
"ตัวกำหนดการผ่าน BBB: ละลายไขมัน, โมเลกุลเล็ก, ไม่แตกตัว, protein binding ต่ำ, ไม่ถูก efflux pump · meninges อักเสบเปิด tight junction ให้ beta-lactam ผ่านมากขึ้น แต่จะลดลงเมื่ออักเสบดีขึ้น จึงคงขนาดสูงตลอด course",
"ผ่าน CSF ดีแม้ไม่อักเสบ: chloramphenicol, metronidazole, rifampicin, TMP-SMX, fluoroquinolone, linezolid, fosfomycin",
"ผ่านเมื่ออักเสบ (ต้องใช้ขนาดสูง): penicillin G, ampicillin, ceftriaxone/cefotaxime, ceftazidime, cefepime, meropenem, vancomycin",
"ผ่านไม่ดี: aminoglycoside, colistin/polymyxin B, cefazolin (1st-gen cephalosporin), clindamycin, macrolide · IDSA 2017: ventriculitis เชื้อดื้อที่ยา systemic ไม่พอ → intraventricular gentamicin, amikacin, vancomycin หรือ colistin ผ่าน EVD แล้วปิดสาย 15–60 นาที",
"Empiric bacterial meningitis ผู้ใหญ่: ceftriaxone + vancomycin (+ ampicillin ถ้าอายุ &gt; 50 ปี/ภูมิคุ้มกันต่ำ คลุม Listeria) + dexamethasone 0.15 mg/kg ทุก 6 ชม. 4 วัน เริ่มก่อนหรือพร้อมยาปฏิชีวนะโดสแรก",
"Brain abscess empiric: ceftriaxone/cefotaxime + metronidazole (+ vancomycin หลังผ่าตัด/บาดเจ็บ หรือสงสัย MRSA) · หลังผ่าตัดสมองหรือ shunt → vancomycin + cefepime/ceftazidime/meropenem"],
opinion="เห็นด้วยกับคีย์ E ความมั่นใจสูง — ไฟล์ Key 76C กากบาทแดงที่ e (ต้นฉบับเขียน \"ตรงแอค เปลี่ยนช้อยส์เฉยๆ\") · IDSA 2017 (healthcare-associated ventriculitis and meningitis) ใช้ aminoglycoside ใน CNS เฉพาะทาง intraventricular เมื่อยา systemic ไม่พอ ไม่ใช้ systemic เดี่ยว · จุดที่อาจลังเลคือ vancomycin ซึ่งผ่านได้น้อยเมื่อ meninges ปกติ แต่ยังเป็นยาหลักใน empiric regimen จึงไม่ใช่คำตอบ")

w16=dict(A[K+'16']['wrong']);w16.update(P[K+'16']['wrong']);P[K+'16']['wrong']=w16
want=json.load(open('/home/claude/h/u/e/76_02.json'))
for k in want:
  P.setdefault(k,{})
  if k in V:
    old=list(A[k].get('variants') or [])
    P[k]['variants']=old+[V[k]]
json.dump(P,open('/home/claude/ac-mdcu/parts/explain/data_subspe/zz76_02.json','w'),ensure_ascii=False,indent=1)
print(len(P))

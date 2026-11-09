(function(){
/* SI130 Ro417–420 — SIM130D (s130d.pdf "SIMD415 Medicine SUMMATIVE 417-420", SIRIRAJ 130, 3 หน้า: หน้า 1 = ปก, หน้า 2–3 = ตาราง MCQ)
   รูปแบบการสอบที่ไฟล์บอก: หัวตาราง "MCQ ( Multiple choice questions) - 50ข้อ" (จำนวนข้อสอบจริง ไม่ใช่โจทย์) · ได้ recall มาเพียง 7 ข้อ
   ไฟล์ recall พิมพ์เป็นตาราง (เลข / Question / Choices) ไม่มีคีย์ ไม่มีลายมือ ไม่มีวง/กากบาท ไม่มีรูป → ทุกข้อ key:NK เฉลยโดย Claude · ไม่มีส่วน OSCE/LAB/MEQ
   เลขข้อ 1–7 ครบ ไม่มีแถวว่าง ไม่มีแถวข้ามหน้า (เลข 1–4 หน้า 2, เลข 5–7 หน้า 3)
   ช้อยไม่ครบ: เลข 1 และ 6 มี 3 ช้อย · เลข 5 มีช้อยเดียว "S. Suis ช้อยอื่นเป็น strep สายพันธุ์อื่น" → Claude เติมเป็น streptococcus สายพันธุ์อื่น
   เลข 4 ผู้จดเขียน "ข้อสอบเก่าเลย" ไม่บอกปี → พบโจทย์เดียวกันในไฟล์ MCQ ลอง SIMD415 (s130p Question 55) จึงใช้โจทย์เต็มจากที่นั่น */
const KS=" (คีย์ในไฟล์ SI130 417–420)";
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)";
const RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x;
const KI=(...n)=>n.map(i=>"ks130d_"+i);
const QI=n=>"qs130d_"+n;
const R_=o=>Object.assign({set:"SI130",ro:"Ro417–420",file:"SIM130D",key:NK,mnemonic:"",guide:"",notes:"",opinion:""},o);
QB.push(
R_({page:2,orig:"1",
 stem:"A 30-year-old woman presents with proximal muscle weakness, grade II/V, of all extremities for 2 weeks. She has no symptoms of other systems. Electrolytes: Na 140, K 2.0, Cl 108, HCO3 24 mmol/L. Urine: sp.gr 1.025, Na 60, K 10, Cl 60 mmol/L. What is the most likely diagnosis?",
 gray:"ผู้ป่วยหญิง 30 ปี มาด้วยอาการ Proximal muscle weakness grade II/V all extremities มา 2 สัปดาห์ ไม่มีอาการระบบอื่นๆ Elyte : Na140, K2.0, Cl108, HCO3 24 UA : Sp.gr 1.025 Na60 K10 Cl60 ผู้ป่วยเป็นโรคอะไร — 1. Hypokalemic periodic paralysis 2. Adrenal insufficiency 3. Bulimia nervosa",
 opts:["Hypokalemic periodic paralysis","Adrenal insufficiency","Bulimia nervosa","Distal renal tubular acidosis","Primary hyperaldosteronism"],ans:0,
 opinion:"เฉลยโดย Claude มั่นใจปานกลาง: urine K 10 mmol/L ในปัสสาวะเข้มข้น (sp.gr 1.025) = ไตเก็บ K ได้ดี ไม่ใช่ renal loss · acid–base ปกติและ urine Cl สูง ไม่เข้ากับอาเจียน (bulimia) · ในช้อยที่มี เหลือ transcellular shift = hypokalemic periodic paralysis · ข้อสังเกต: อ่อนแรง 2 สัปดาห์ยาวกว่า periodic paralysis ทั่วไป (ชั่วโมงถึงวัน) แต่คงตาม recall",
 notes:"ต้นฉบับมี 3 ช้อย · ช้อย Distal renal tubular acidosis และ Primary hyperaldosteronism Claude เติม · หน่วย mmol/L Claude ใส่",
 guide:"Harrison's Principles of Internal Medicine 21st ed 2022, Fluid and Electrolyte Disturbances",
 interp:"K 2.0 + <b>urine K ต่ำ</b> (10) + <b>HCO3 ปกติ</b> + <b>urine Cl ไม่ต่ำ</b> → ไม่ใช่เสีย K ทางไต ไม่ใช่อาเจียน = <b>K shift เข้าเซลล์</b>",
 why:"แนวทาง hypokalemia: (1) แยก <b>renal loss</b> ด้วย urine K (spot &gt; 20 mmol/L, TTKG &gt; 4, UK/UCr &gt; 13 mEq/g) จาก <b>extrarenal loss หรือ shift</b> (urine K ต่ำ) (2) ดู acid–base · urine K ต่ำ + acid–base ปกติ = <b>transcellular shift</b> → <b>hypokalemic periodic paralysis</b> (familial, sporadic, <b>thyrotoxic</b> — ต้องส่ง TSH, FT4 ทุกราย) · กระตุ้นด้วยอาหารคาร์โบไฮเดรตสูง ออกกำลังหนักแล้วพัก · รักษา: KCl ทางปาก ขนาดน้อย (เสี่ยง rebound hyperkalemia), thyrotoxic ให้ non-selective beta-blocker",
 wrong:{"B":"Adrenal insufficiency ขาด aldosterone → <b>hyperkalemia</b> + hyponatremia ไม่ใช่ K ต่ำ","C":"Bulimia ที่อาเจียน → <b>metabolic alkalosis + urine Cl ต่ำ</b> (&lt; 20) แต่โจทย์ HCO3 24 urine Cl 60 · ถ้าใช้ยาระบายจะเป็น metabolic acidosis","D":"Distal RTA เสีย K ทางไต (urine K สูง) + normal anion gap metabolic acidosis ซึ่ง HCO3 ต้องต่ำ","E":"Primary hyperaldosteronism: ความดันสูง + metabolic alkalosis + urine K สูง (renal loss)"},
 trap:"เห็น K 2.0 ในหญิงสาวแล้วคิด bulimia — ต้องดู urine Cl และ HCO3 ก่อน",
 summary:["Hypokalemia: ดู urine K ก่อนแยก renal กับ non-renal","Urine K ต่ำ + acid–base ปกติ = shift → periodic paralysis","อาเจียน = alkalosis + urine Cl ต่ำ","dRTA = NAGMA + urine K สูง","HPP ทุกรายตรวจ TSH หา thyrotoxic periodic paralysis"],
 variants:["ถ้ามี HT + metabolic alkalosis + urine K สูง → primary hyperaldosteronism","ถ้า HCO3 14 + urine pH &gt; 5.5 + urine K สูง → distal RTA"]}),

R_({page:2,orig:"2",
 stem:"Which of the following drugs can cause hypoglycemia?",
 gray:"ยาอะไร hypoglycemia — 1. Metformin 2. Pioglitazone 3. Acarbose 4. Atenolol 5. Glipizide",
 opts:["Metformin","Pioglitazone","Acarbose","Atenolol","Glipizide"],ans:4,
 opinion:"เฉลยโดย Claude มั่นใจสูง: sulfonylurea (glipizide) กระตุ้นการหลั่ง insulin โดยไม่ขึ้นกับระดับน้ำตาล จึงทำให้ hypoglycemia ได้เมื่อใช้เดี่ยว ส่วน metformin, TZD, acarbose ใช้เดี่ยวไม่ทำให้ hypoglycemia (ADA Standards of Care 2025)",
 notes:"ต้นฉบับครบ 5 ช้อย",
 guide:"ADA Standards of Care in Diabetes 2025",
 interp:"ถามยาที่<b>ทำให้น้ำตาลต่ำ</b>ได้เอง",
 why:"<b>Sulfonylurea</b> (glipizide, gliclazide, glibenclamide) จับ SUR1 ปิด K-ATP channel ที่ beta cell → หลั่ง insulin แม้น้ำตาลต่ำ → <b>hypoglycemia</b> โดยเฉพาะผู้สูงอายุ CKD อดอาหาร · glibenclamide เสี่ยงสุด (ออกฤทธิ์ยาว มี active metabolite ขับทางไต) · glipizide และ gliclazide ปลอดภัยกว่าในผู้สูงอายุ · ยากลุ่มอื่นที่ทำให้ hypoglycemia: <b>insulin, meglitinide</b> · hypoglycemia จาก sulfonylurea อาจนานและกลับซ้ำ ต้อง observe 24 ชั่วโมงขึ้นไป อาจให้ octreotide",
 wrong:{"A":"Metformin ลด hepatic gluconeogenesis ไม่กระตุ้น insulin ใช้เดี่ยวไม่ทำให้ hypoglycemia","B":"Pioglitazone เพิ่ม insulin sensitivity ใช้เดี่ยวไม่ทำให้ hypoglycemia (ผลข้างเคียง: บวมน้ำ HF น้ำหนักขึ้น กระดูกหัก)","C":"Acarbose ยับยั้ง alpha-glucosidase ชะลอดูดซึมคาร์โบไฮเดรต ใช้เดี่ยวไม่ทำให้ hypoglycemia · ถ้าเกิดร่วมกับยาอื่นต้องแก้ด้วย glucose ไม่ใช่ sucrose","D":"Atenolol บดบังอาการเตือน (ใจสั่น มือสั่น) ของ hypoglycemia แต่ไม่ได้ทำให้น้ำตาลต่ำเอง"},
 trap:"เลือก atenolol เพราะจำว่า beta-blocker เกี่ยวกับ hypoglycemia — มัน mask อาการ ไม่ได้เป็นสาเหตุ",
 summary:["ยาเบาหวานที่ทำให้ hypoglycemia: insulin, sulfonylurea, meglitinide","Metformin, TZD, acarbose, DPP-4i, SGLT2i, GLP-1 RA ใช้เดี่ยวไม่ทำให้ hypoglycemia","Glibenclamide เสี่ยงสุด เลี่ยงในผู้สูงอายุและ CKD","Beta-blocker บดบังอาการเตือน ยกเว้นเหงื่อออก","Hypoglycemia จาก SU อาจนาน ต้อง observe"],
 variants:["ถ้าถามยาที่ต้องแก้ hypoglycemia ด้วย glucose เท่านั้น → acarbose","ถ้าถามอาการเตือนที่ยังเหลือเมื่อใช้ beta-blocker → เหงื่อออก"]}),

R_({page:2,orig:"3",
 stem:"An elderly patient presents with constipation. Current medications include aspirin, calcium carbonate, folate, metformin, and enalapril. Which drug is the most likely cause of the constipation?",
 gray:"คนไข้แก่ constipation กินยา ASA, calcium carbonate, folate, metformin, enalapril อะไร ทำให้เกิด Constipation — 1. ASA 2. Enalapril 3. Folic acid 4. Metformin 5. Calcium",
 opts:["Aspirin","Enalapril","Folic acid","Metformin","Calcium carbonate"],ans:4,
 opinion:"เฉลยโดย Claude มั่นใจสูง: calcium carbonate เป็นยาที่ทำให้ท้องผูกได้บ่อยและชัดเจนที่สุดในรายการ ส่วน metformin มักทำให้ท้องเสีย",
 notes:"ASA เขียนเต็มเป็น Aspirin · ต้นฉบับเขียน Calcium Claude ใส่เป็น Calcium carbonate ตามยาในโจทย์ · ต้นฉบับครบ 5 ช้อย",
 guide:"AGA Medical Position Statement on Constipation 2013; Harrison's Principles of Internal Medicine 21st ed 2022",
 interp:"ผู้สูงอายุท้องผูก + polypharmacy → หายาที่เป็นสาเหตุ",
 why:"ยาที่ทำให้ท้องผูกบ่อย: <b>calcium และ aluminium antacid, iron</b>, opioid, anticholinergic (TCA, antihistamine, antipsychotic), <b>non-DHP CCB (verapamil)</b>, clonidine, 5-HT3 antagonist, cholestyramine, diuretic · ผู้สูงอายุท้องผูกต้อง<b>ทบทวนยาก่อนเสมอ</b> และดู red flag (เลือดออก น้ำหนักลด ซีด อายุ &gt; 50 ที่ไม่เคยส่องกล้อง) · รักษา: ปรับยา ใยอาหาร น้ำ ออกกำลัง แล้วใช้ osmotic laxative (PEG, lactulose)",
 wrong:{"A":"Aspirin ขนาดต่ำทำให้ dyspepsia, GI bleed ไม่ใช่สาเหตุท้องผูกที่เด่น","B":"Enalapril ผลข้างเคียงเด่นคือไอแห้ง hyperkalemia angioedema ไม่ทำให้ท้องผูก","C":"Folic acid ไม่มีผลต่อการขับถ่าย","D":"Metformin ทำให้ท้องเสีย ท้องอืด คลื่นไส้ มากกว่าท้องผูก"},
 trap:"เลือก metformin เพราะจำว่ามีผลข้างเคียงทางเดินอาหาร — แต่ทำให้ท้องเสีย ไม่ใช่ท้องผูก",
 summary:["ยาที่ทำให้ท้องผูก: calcium, aluminium, iron, opioid, anticholinergic, verapamil","Metformin ทำให้ท้องเสีย","Magnesium antacid ทำให้ท้องเสีย","ท้องผูกในผู้สูงอายุ ทบทวนยาก่อน","มี red flag → colonoscopy"],
 variants:["ถ้าในรายการมี amitriptyline → anticholinergic ทำให้ท้องผูก","ถ้าถาม antacid ที่ทำให้ท้องเสีย → magnesium hydroxide"]}),

R_({page:2,orig:"4",
 stem:"A 30-year-old man presents with clear rhinorrhea, nasal congestion, and sneezing for 6 months. PE: pale nasal mucosa on both sides with mucous discharge, granular pharynx, otherwise normal. What is the most appropriate investigation?",
 gray:"ชายอายุ 30 ปี clear rhinorrhea, nasal congestion PE เจอ pale mucosa, granular pharynx ข้อสอบเก่าเลย — 1. Allergy skin test 2. Flexible rhinoscopy 3. Paranasal sinus X-ray 4. Serum IgE 5. Nasal discharge cytology",
 opts:["Allergy skin test","Flexible rhinoscopy","Paranasal sinus X-ray","Serum IgE","Nasal discharge cytology"],ans:0,
 opinion:"เฉลยโดย Claude มั่นใจสูง: อาการและตรวจร่างกายเข้ากับ allergic rhinitis การตรวจที่เหมาะสมคือหา allergen ที่จำเพาะด้วย skin prick test (ARIA 2020, AAO-HNSF 2015) · ไฟล์ MCQ ลอง SIMD415 (s130p Question 55) โจทย์เดียวกัน เฉลย Allergy skin testing",
 notes:"ผู้จดเขียนว่าข้อสอบเก่าเลย ไม่บอกปี · sneezing, 6 เดือน, mucous discharge ทั้งสองข้าง และ others normal นำมาจากโจทย์เต็มในไฟล์ MCQ ลอง SIMD415 (s130p Question 55) · ต้นฉบับครบ 5 ช้อย",
 guide:"ARIA Guideline 2019–2020 update; AAO-HNSF Clinical Practice Guideline: Allergic Rhinitis 2015",
 interp:"น้ำมูกใส คัดจมูก จาม เรื้อรัง + <b>pale nasal mucosa</b> + <b>granular pharynx</b> (postnasal drip) = <b>allergic rhinitis</b>",
 why:"วินิจฉัย <b>allergic rhinitis</b> จากประวัติและตรวจร่างกาย: จาม น้ำมูกใส คัดจมูก คันจมูก · ตรวจพบ <b>pale bluish, boggy turbinate</b>, allergic shiner, nasal crease, cobblestone posterior pharynx · ยืนยันหา allergen ด้วย <b>skin prick test</b> (ไว ถูก รู้ผลใน 15–20 นาที) หรือ <b>specific IgE</b> ในเลือดเมื่อทำ skin test ไม่ได้ (ผื่นทั่ว กิน antihistamine) · ใช้วางแผนหลีกเลี่ยงสารก่อภูมิแพ้และ immunotherapy · รักษา: <b>intranasal corticosteroid</b> เป็นหลัก ± oral second-generation antihistamine",
 wrong:{"B":"Flexible rhinoscopy ใช้เมื่อมีอาการข้างเดียว เลือดออก สงสัย polyp หรือก้อน หรือไม่ตอบสนองต่อการรักษา","C":"Paranasal sinus X-ray ความไวต่ำ ไม่แนะนำ ถ้าสงสัย chronic rhinosinusitis ใช้ CT","D":"Total serum IgE ไม่จำเพาะ ปกติได้ใน AR และสูงได้ในภาวะอื่น ไม่แนะนำ (ต่างจาก specific IgE)","E":"Nasal cytology หา eosinophil ใช้แยก NARES ไม่ใช่การตรวจมาตรฐาน"},
 trap:"เลือก Serum IgE เพราะคิดว่าภูมิแพ้ต้องดู IgE — total IgE ไม่ช่วย ต้องเป็น allergen-specific test",
 summary:["AR: จาม น้ำมูกใส คัดจมูก + pale boggy mucosa","ยืนยัน allergen: skin prick test หรือ specific IgE","Total IgE และ sinus X-ray ไม่แนะนำ","รักษาหลัก: intranasal corticosteroid","อาการข้างเดียว เลือดออก → nasal endoscopy"],
 variants:["ถ้ากิน antihistamine อยู่และทำ skin test ไม่ได้ → serum specific IgE","ถ้าถามยาที่ได้ผลดีสุด → intranasal corticosteroid"]}),

R_({page:3,orig:"5",
 stem:"A patient presents with fever, hearing loss, and weakness. He has a history of eating uncooked pork. What is the most likely causative organism?",
 gray:"Fever, hearing loss, weakness, history of eating uncooked pork — 1. S. Suis ช้อยอื่นเป็น strep สายพันธุ์อื่น",
 opts:["Streptococcus suis","Streptococcus pneumoniae","Streptococcus agalactiae","Streptococcus pyogenes","Streptococcus gallolyticus"],ans:0,
 opinion:"เฉลยโดย Claude มั่นใจสูง: กินหมูดิบ + ไข้ + หูดับ = Streptococcus suis แบบฉบับ · สอดคล้องกับชุด SI133 หลายรอบที่ถามเรื่องเดียวกันและเฉลย S. suis",
 notes:"ต้นฉบับมีช้อยเดียว S. Suis และบอกว่าช้อยอื่นเป็น strep สายพันธุ์อื่น · Claude เติม S. pneumoniae, S. agalactiae, S. pyogenes, S. gallolyticus",
 guide:"Wertheim et al., Streptococcus suis: an emerging human pathogen, Clin Infect Dis 2009",
 interp:"<b>กินหมูดิบ</b> + ไข้ + <b>หูดับ</b> = S. suis meningitis",
 why:"<b>Streptococcus suis</b> = เชื้อในสุกร ติดคนจาก<b>การกินหมูดิบหรือสุกไม่ทั่ว (ลาบ หลู้ เลือดสด)</b> หรือแผลสัมผัสเนื้อหมู · พบมากในภาคเหนือของไทย · อาการ: <b>meningitis + sensorineural hearing loss</b> (มักถาวร สองข้าง), เวียนศีรษะ เดินเซจาก vestibular involvement, septicemia, purpura fulminans, septic shock · ย้อมพบ gram-positive cocci in pairs/chains, alpha-hemolysis บน sheep blood agar · รักษา: <b>ceftriaxone หรือ penicillin G</b> ± dexamethasone เพื่อลดหูดับ",
 wrong:{"B":"S. pneumoniae สาเหตุ bacterial meningitis ผู้ใหญ่ที่พบบ่อยสุดและทำหูตึงได้ แต่ไม่สัมพันธ์กับการกินหมูดิบ","C":"S. agalactiae (GBS) ในไทยพบสายพันธุ์ ST283 จาก<b>การกินปลาน้ำจืดดิบ</b> (ก้อยปลา) ทำ meningitis, septic arthritis","D":"S. pyogenes ทำ pharyngitis, cellulitis, necrotizing fasciitis, toxic shock ไม่ใช่ meningitis จากหมู","E":"S. gallolyticus (S. bovis) สัมพันธ์กับ endocarditis และ colorectal cancer"},
 trap:"สับสน S. agalactiae จากปลาดิบกับ S. suis จากหมูดิบ",
 summary:["หมูดิบ + meningitis + หูดับ = S. suis","S. suis หูดับมักถาวรและเป็นสองข้าง","ปลาน้ำจืดดิบ → GBS ST283","S. gallolyticus → endocarditis + ส่องกล้องหามะเร็งลำไส้","รักษา ceftriaxone หรือ penicillin G"],
 variants:["ถ้าตรวจ Weber ไปข้างดี Rinne AC &gt; BC → sensorineural hearing loss จาก S. suis","ถ้าถามยา → ceftriaxone"]}),

R_({page:3,orig:"6",
 stem:"A 50-year-old man who is a heavy smoker presents with exertional dyspnea, fatigue, and marked weight loss. Lymph nodes are palpable at the right supraclavicular and cervical groups. PE: RS shows trachea shifted to the right side, decreased breath sounds, and dullness on percussion on the right side. What is the most likely underlying disease?",
 gray:"ผู้ป่วยชาย อายุ50ปี heavy smoker มาด้วยเหนื่อยง่าย อ่อนเพลีย น้ำหนักลดเยอะ คลำได้ LN at rt. Supraclavicular, cervical group PE: RS เจอ trachea shift to Rt.side, decreased breath sound and dullness percussion on right side. ผู้ป่วยเป็นโรคอะไร — 1. CA lung 2. Lymphoma 3. Atelectasis",
 opts:["Carcinoma of the lung","Lymphoma","Atelectasis","Massive pleural effusion","Pulmonary tuberculosis"],ans:0,
 flag:"⚠ Atelectasis เป็นสิ่งที่ตรวจพบจริง (หลอดลมเอียงเข้าหาข้างที่ทึบ = ปอดแฟบ) แต่คำถามถามโรค Claude แปลเป็น underlying disease → ตอบ CA lung ที่อุดหลอดลมจนปอดแฟบ",
 opinion:"เฉลยโดย Claude มั่นใจปานกลางถึงสูง: ผู้ชายสูบบุหรี่หนัก น้ำหนักลด supraclavicular LN + volume loss ข้างขวา (trachea shift เข้าหาข้างที่ dullness) = bronchogenic carcinoma อุดหลอดลมทำให้ปอดแฟบ และกระจายไป N3",
 notes:"ต้นฉบับมี 3 ช้อย · ช้อย Massive pleural effusion และ Pulmonary tuberculosis Claude เติม · ต้นฉบับถาม 'ผู้ป่วยเป็นโรคอะไร' Claude แปลเป็น most likely underlying disease",
 guide:"Bates' Guide to Physical Examination and History Taking 13th ed 2021; NCCN Guidelines Non-Small Cell Lung Cancer 2025",
 interp:"<b>Trachea เอียงเข้าหา</b>ข้างที่ dullness + breath sound ลด = <b>volume loss (collapse)</b> · สูบบุหรี่ น้ำหนักลด <b>supraclavicular LN</b> = มะเร็งปอด",
 why:"แยกตามทิศหลอดลม: <b>เอียงเข้าหา</b>ข้างพยาธิสภาพ = ปริมาตรลด (<b>atelectasis/collapse</b>, pneumonectomy, fibrosis) · <b>เอียงหนี</b> = มีของดันออก (massive effusion, tension pneumothorax, ก้อนใหญ่) · collapse ในผู้ใหญ่สูบบุหรี่ต้องคิด<b>มะเร็งปอดอุดหลอดลม</b> (squamous cell, small cell มักอยู่ central) · supraclavicular LN ข้างเดียวกัน = N3 → stage III ขึ้นไป · ตรวจ: CXR, CT chest with contrast, <b>bronchoscopy + biopsy</b> หรือ <b>biopsy ต่อมน้ำเหลือง supraclavicular</b> ซึ่งเข้าถึงง่ายสุดและได้ทั้ง diagnosis และ stage",
 wrong:{"B":"Lymphoma ทำต่อมน้ำเหลืองโต น้ำหนักลด แต่ไม่ค่อยอุดหลอดลมจนปอดแฟบ มักเป็น mediastinal mass หรือ effusion ที่ดันหลอดลมหนี และไม่สัมพันธ์กับบุหรี่","C":"Atelectasis คือสิ่งที่ตรวจพบ (ปอดแฟบ) ไม่ใช่โรคต้นเหตุ ต้องหาสาเหตุที่อุดหลอดลม","D":"Massive pleural effusion ดัน trachea <b>หนี</b>ไปด้านตรงข้าม ไม่ใช่เข้าหา","E":"TB ทำน้ำหนักลด LN โต ได้ แต่ปอดแฟบทั้งข้างพร้อม supraclavicular LN แข็งในผู้สูบบุหรี่หนักเข้ากับมะเร็งมากกว่า"},
 trap:"เห็น dullness + breath sound ลดแล้วตอบ effusion — ต้องดูทิศของ trachea ก่อน",
 summary:["Trachea เอียงเข้าหา = collapse, fibrosis","Trachea เอียงหนี = massive effusion, tension pneumothorax","สูบบุหรี่ + lobar collapse → มะเร็งปอดอุดหลอดลม","Supraclavicular LN = N3 และเป็นจุด biopsy ที่ง่าย","ปอดแฟบเป็น finding ต้องหาสาเหตุเสมอ"],
 variants:["ถ้าถามการตรวจยืนยัน → biopsy supraclavicular LN หรือ bronchoscopy","ถ้า trachea เอียงไปซ้าย dullness ขวา → massive pleural effusion"]}),

R_({page:3,orig:"7",
 stem:"A patient was bitten by a Russell's viper. He has ecchymosis all over the body and is still bleeding from the gums. Platelet count is 60,000/µL, and PT and APTT are prolonged. Specific Russell's viper antivenom has already been given at an adequate dose. What is the most appropriate treatment to give next?",
 gray:"โดน Russel viper กัด ecchymosis เต็มตัว platelet 60,000 PT and APTT prolong ถามว่า ให้อะไรดี — 1. Vit.K 2. Cryoprecipitate 3. FFP 4. Platelet 5. Whole blood",
 opts:["Vitamin K","Cryoprecipitate","Fresh frozen plasma","Platelet concentrate","Whole blood"],ans:2,
 flag:"⚠ คำตอบที่ถูกที่สุดในชีวิตจริงคือ antivenom แต่ไม่มีในช้อย · Claude เติมว่าได้ antivenom ขนาดเพียงพอแล้วและยังมีเลือดออก เพื่อให้ช้อย FFP เป็นคำตอบเดียว · ไม่แน่ใจว่าโจทย์จริงเขียนอย่างไร",
 opinion:"เฉลยโดย Claude มั่นใจปานกลาง: Russell's viper venom กระตุ้น factor X และ V → consumption coagulopathy (PT, APTT ยาว fibrinogen ต่ำ) · การรักษาหลักคือ antivenom (WHO SEARO 2016) ส่วน blood component ให้เมื่อยังมีเลือดออกหลังได้ antivenom เพียงพอ หรือไม่มี antivenom · ในช้อยที่มี FFP แก้ทั้ง PT และ APTT ได้กว้างที่สุด",
 notes:"ต้นฉบับสะกด Russel = Russell's viper · 'เลือดออกเหงือก' และ 'ได้ antivenom ขนาดเพียงพอแล้ว' Claude เติม · ช้อยเขียนเต็ม Vit.K เป็น Vitamin K, FFP เป็น Fresh frozen plasma, Platelet เป็น Platelet concentrate · ต้นฉบับครบ 5 ช้อย",
 guide:"WHO SEARO Guidelines for the Management of Snakebites 2nd ed 2016",
 interp:"งูแมวเซากัด + <b>เลือดออกทั่วตัว</b> + <b>PT และ APTT ยาว</b> + เกล็ดเลือดต่ำ = venom-induced consumption coagulopathy",
 why:"<b>Russell's viper</b> (งูแมวเซา, Daboia siamensis) พิษมี <b>factor X activator และ factor V activator</b> → กินปัจจัยการแข็งตัว (fibrinogen, V, X) + เกล็ดเลือดต่ำ + เสี่ยง <b>AKI</b> (สำคัญมาก) · ตรวจ <b>20-minute whole blood clotting test (VCT)</b> ที่ข้างเตียง · การรักษาหลัก: <b>specific antivenom</b> เมื่อมี systemic bleeding หรือ VCT &gt; 20 นาที ให้ซ้ำทุก 6 ชั่วโมงจนเลือดแข็งตัวได้ · ถ้ายังเลือดออกหลังได้ antivenom เพียงพอ → <b>FFP</b> (แทนทุก factor) ± cryoprecipitate (fibrinogen) ± platelet ถ้าต่ำมาก · ติดตาม urine output และ creatinine",
 wrong:{"A":"Vitamin K ใช้กับการขาด factor ที่สร้างจากตับ (warfarin, vitamin K deficiency) ไม่ช่วยใน consumption จากพิษงู","B":"Cryoprecipitate ให้ fibrinogen, VIII, XIII เป็นหลัก ไม่แทน factor V และ X ที่ถูกพิษกินไป ใช้เสริมเมื่อ fibrinogen ต่ำมาก","D":"Platelet 60,000 ไม่ใช่สาเหตุหลักของเลือดออก ให้เมื่อ &lt; 50,000 ร่วมกับเลือดออกรุนแรงต่อเนื่อง","E":"Whole blood ใช้เมื่อเสียเลือดมากจนช็อก ไม่ใช่การแก้ coagulopathy โดยตรง"},
 trap:"ลืมว่า antivenom คือยาหลัก — blood product ให้เพื่อเสริมหลัง antivenom เท่านั้น ถ้าให้ก่อน venom ยังอยู่จะถูกกินหมด",
 summary:["Russell's viper: factor X, V activator → coagulopathy + AKI","ตรวจ 20-minute whole blood clotting test","รักษาหลัก = specific antivenom ซ้ำทุก 6 ชั่วโมงจน VCT ปกติ","เลือดออกต่อหลัง antivenom → FFP ± cryo ± platelet","Green pit viper: เกล็ดเลือดต่ำ fibrinogen ต่ำ ไม่ทำ AKI"],
 variants:["ถ้ายังไม่ได้ antivenom และมีในช้อย → Russell's viper antivenom","ถ้าถามภาวะแทรกซ้อนที่ต้องติดตาม → AKI"]})
);
})();

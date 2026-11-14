/* Morning round MEQ — Internal Medicine Y4 MDCU (ผู้ใช้สั่ง 14 พ.ย. 2026)
   วันละ 1 เคส (1 โรค) · ทุกคนได้เคสเดียวกันตามวันที่ (07:30 ตามนาฬิกาเครื่อง) · ระหว่างทำไม่บอกระบบ/ที่มา (เหมือน Legendary)
   ระบบ/โรค/ความยาก = สุ่มล้วน (ระบบซ้ำในสัปดาห์ได้) มีกฎ 3 ข้อ: (1) โรคเดียวกันห้ามอยู่ใน 7 วันติดกัน (แม้ต่าง variant) (2) ระบบเดียวกันห้ามอยู่ 2 วันติดกัน
   (3) เคสเดิมห้ามออกซ้ำใน Morning ตลอดไป — โรคเดิมกลับมาได้เฉพาะ variant ใหม่
   รูปแบบเคส (ผู้ใช้สั่ง 14 พ.ย. 2026 บ่าย — ใช้ตั้งแต่เคสที่ 1 วันจันทร์ 16 พ.ย. เป็นต้นไป):
   • 4–5 Part ทุกวัน (สุ่ม 4 หรือ 5) · stem บนสุดให้แค่อายุ เพศ CC และระยะเวลา · Part 1 ถามซักประวัติ (Hx) เพิ่มเท่านั้น
   • Part ที่เหลือ สุ่มหัวข้อจาก: Hx · PE · Investigation · Lab interpretation · Dx · DDx · Severity (เฉพาะโรคที่ปี 4 ควรรู้ classification เช่น BISAP, KDIGO, Killip — ถามชื่อ classification + แปลผล) · Management
     (Claude เรียง Part ที่สุ่มได้ตามลำดับการดูแลผู้ป่วยจริง; ข้อมูลเพิ่มเปิดทีละ Part ผ่าน info)
   • 1 Part (ข้อใหญ่) มีข้อเล็ก 1–2 ข้อเหมือนข้อสอบเก่า (เว็บนับข้อเล็กแต่ละข้อเป็น "Part" บนป้ายเหมือนข้อสอบเก่า)
   • รูปแบบข้อเล็ก สุ่มได้ทุกหัวข้อ: ไม่มีข้อบังคับ / จำกัดจำนวน (lim:N — "ตรวจ 3 อย่าง", นับเฉพาะ N อย่างแรกที่ตอบ เฉลยลิสต์ได้เยอะ) ไม่เกิน 1 ข้อเล็กต่อ Part /
     ถามเหตุผลเพิ่ม (ทำอะไร เพราะอะไร) ไม่เกิน 1 ข้อเล็กต่อ Part — ข้อเดียวกันมีทั้งสองอย่างได้
   • เคสทดลอง 14 พ.ย. เป็นแบบเดิม (ให้ประวัติ+ตรวจร่างกายครบใน stem) — ไม่แก้เพราะผู้ใช้เริ่มทำไปแล้ว
   ลำดับ (ผู้ใช้สั่ง 14 พ.ย. 2026): เคส 14 พ.ย. (เสาร์) = เคสทดลองให้ผู้ใช้ลองก่อน แบบเดิม · 15 พ.ย. ไม่มีเคส · เริ่มนับจริงวันจันทร์ 16 พ.ย. = เคสที่ 1 (no:1)
   ชุด 7 วันแรก (ระบบไม่ซ้ำ Claude เลือกเอง): 16 Endocrine (DKA — โรคเดียวกับเคสทดลอง เขียนใหม่ตามรูปแบบใหม่) · 17 ID/Tropical (leptospirosis) · 18 Cardio (inferior STEMI + RV)
   · 19 Hemato (IDA) · 20 Nephro (AKI) · 21 Pulmo (AECOPD) · 22 Neuro (acute ischemic stroke)
   ถ้าวันนี้ไม่มีเคสแต่มีเคสวันถัดไป กล่องบนหน้า home ขึ้น "รอ<วัน> 07:30 เริ่มเคสที่ N" (no ของเคสนั้น)
   เฉลยโดย Claude ตาม guideline ล่าสุด (ADA/JBDS DKA 2024 consensus, WHO/Thai leptospirosis, ESC/AHA STEMI, GOLD 2025, AHA/ASA stroke, KDIGO AKI) */
const MK="เคส Morning round — โจทย์และเฉลยแต่งโดย Claude (ไม่มีเฉลยในไฟล์)";
const P=(t,...re)=>({t,re});
const G=(label,need,...opts)=>({label,need,opts});
function B(q,marks,o){const pts=[],kw=[];(o.pts||[]).forEach(p=>{if(p.opts){pts.push({label:p.label,any:p.opts.map(x=>x.t),need:p.need});kw.push(p.opts.map(x=>x.re));}else{pts.push(p.t);kw.push(p.re);}});
  const s=Object.assign({q,marks,key:MK},o);delete s.pts;s.points=pts;s.kw=kw;return s;}
QB.push(

/* ======================= 14 พ.ย. 2026 · Endocrine · DKA (ปานกลาง) ======================= */
{day:"2026-11-14",sec:"MEQ",
 stem:`A 19-year-old woman with type 1 diabetes mellitus (on basal–bolus insulin) comes to the emergency department with vomiting and diffuse abdominal pain for 2 days. She stopped all her insulin because she could not eat.<br>Vital signs: BT 37.8 °C, PR 124/min, BP 96/58 mmHg, RR 32/min with deep breathing. Her mucous membranes are dry and her breath has a fruity odor. She is drowsy but obeys commands.`,
 parts:[
  {subs:[B("1. What is the most likely diagnosis? List the 3 most important investigations you would send immediately.",4,{
   ans:`<b>Diabetic ketoacidosis (DKA)</b> precipitated by insulin omission<br>Immediate: capillary/plasma <b>glucose</b> · <b>blood (or urine) ketones</b> (β-hydroxybutyrate) · <b>venous/arterial blood gas</b> · plus electrolytes (Na, K, Cl, HCO₃), BUN/Cr`,
   exp:"Kussmaul breathing + กลิ่นผลไม้ + ขาดอินซูลินใน T1DM = DKA จนกว่าจะพิสูจน์ได้ว่าไม่ใช่ · ต้องยืนยัน 3 อย่าง: น้ำตาลสูง (หรือมีเบาหวาน), ketone สูง (β-OHB ≥ 3 mmol/L), metabolic acidosis (pH < 7.3 หรือ HCO₃ < 18) · ส่ง K ก่อนให้ insulin เสมอ",
   pts:[P("Diabetic ketoacidosis (DKA)","DKA","ketoacidosis"),P("Plasma / capillary glucose","glucose","DTX","น้ำตาล","sugar"),P("Blood or urine ketone (β-hydroxybutyrate)","ketone","hydroxybutyrate","β-?OHB","คีโตน"),P("Blood gas (VBG / ABG)","[VA]BG","blood gas","pH"),P("Electrolytes incl. potassium","electrolyte","potassium","\\bK\\b","โพแทสเซียม")]})]},
  {info:`Results: plasma glucose 486 mg/dL · venous pH 7.08, pCO₂ 20 mmHg, HCO₃⁻ 7 mEq/L · Na 131, K 5.6, Cl 96 mEq/L · BUN 32, Cr 1.4 mg/dL · β-hydroxybutyrate 6.2 mmol/L`,
   subs:[B("2. Interpret the acid–base status (show the anion gap and whether respiratory compensation is appropriate). How severe is this episode?",5,{
   ans:`Anion gap = 131 − (96 + 7) = <b>28</b> → <b>high anion gap metabolic acidosis</b> (ketoacidosis)<br>Winter's formula: expected pCO₂ = 1.5 × 7 + 8 = 18.5 ± 2 (16.5–20.5) → pCO₂ 20 = <b>appropriate respiratory compensation</b><br>Corrected Na ≈ 131 + 1.6 × (486 − 100)/100 ≈ 137 mEq/L<br>Severity: HCO₃⁻ < 10 / pH near 7.0 + drowsy → <b>severe DKA</b>`,
   exp:"AG ปกติ ~8–12 · Winter: pCO₂ = 1.5×HCO₃ + 8 ± 2 · ADA: severe เมื่อ pH < 7.00 หรือ HCO₃ < 10 หรือซึม/stupor — เคสนี้ HCO₃ 7 + ซึม = severe · K 5.6 สูงจาก shift ออกนอกเซลล์ แต่ total body K ต่ำ",
   pts:[P("High anion gap metabolic acidosis","high anion gap","HAGMA","anion gap","AG"),P("AG = 28","28"),P("Appropriate respiratory compensation (Winter's)","appropriate","Winter","compensat"),P("Severe DKA","severe")]})]},
  {subs:[B("3. Write the orders for the first 2 hours (fluid, insulin, potassium, bicarbonate).",6,{
   ans:`• <b>IV 0.9% NaCl 1–1.5 L (15–20 mL/kg) in the first hour</b>, then 250–500 mL/h guided by volume status<br>• K⁺ 5.6 (≥ 3.5) → <b>start regular insulin IV infusion 0.1 U/kg/h</b> (± bolus 0.1 U/kg)<br>• Potassium: K > 5.0–5.2 → no K yet, recheck every 2 h; add KCl 20–30 mEq per litre once K ≤ 5.0–5.2 (if K < 3.5 hold insulin and replace first)<br>• <b>No bicarbonate</b> (only if pH < 6.9)<br>• Monitor glucose hourly, electrolytes/VBG every 2–4 h, urine output; add dextrose (D5–D10) when glucose < 250 mg/dL`,
   exp:"ลำดับ: น้ำก่อน → ดู K ก่อนให้ insulin → insulin → เติม K ตามระดับ · ห้ามให้ insulin ถ้า K < 3.5 (หัวใจเต้นผิดจังหวะ) · bicarbonate ไม่ช่วยและอาจทำให้ hypokalemia/cerebral edema",
   pts:[P("IV isotonic saline bolus (≈1 L / 15–20 mL/kg first hour)","NSS","0\\.9","saline","isotonic","balanced"),P("Insulin IV infusion 0.1 U/kg/h","insulin","0\\.1 ?U","RI"),P("Check K before insulin / K replacement plan by level","K","potassium","KCl","โพแทสเซียม"),P("No bicarbonate (unless pH < 6.9)","bicarb","NaHCO","ไม่ให้"),P("Add dextrose when glucose < 250 / hourly glucose monitoring","dextrose","D5","D10","250","monitor")]})]},
  {info:`After 10 hours: glucose 190 mg/dL, venous pH 7.34, HCO₃⁻ 19, anion gap 11, β-hydroxybutyrate 0.4 mmol/L. She is alert and asks for food.`,
   subs:[B("4. Has the DKA resolved? How will you switch her back to subcutaneous insulin, and what advice prevents another episode?",5,{
   ans:`<b>Resolved</b>: ketones < 0.6 mmol/L and venous pH ≥ 7.3 (or HCO₃⁻ ≥ 18); (older ADA: glucose < 200 + 2 of HCO₃ ≥ 15, pH > 7.3, AG ≤ 12)<br>• Give <b>basal SC insulin 1–2 h before stopping the IV infusion</b> (overlap), restart basal–bolus with meals<br>• Sick-day rules: <b>never stop basal insulin</b>, check glucose/ketones more often, drink fluids, seek care early with vomiting<br>• Diabetes education / follow-up`,
   exp:"หยุด insulin drip ทันทีโดยไม่มี SC basal ซ้อน = rebound ketoacidosis · สาเหตุชักนำที่พบบ่อย: ขาดยา, ติดเชื้อ, MI, ตั้งครรภ์ — ถามและแก้ทุกครั้ง",
   pts:[P("DKA resolved (criteria)","resolve","หาย","ketone","pH"),P("Overlap SC basal insulin 1–2 h before stopping IV insulin","overlap","basal","1-2","2 ?h","ซ้อน"),P("Sick-day rules: never stop basal insulin, check ketones","sick ?day","never stop","ห้ามหยุด","ketone"),P("Education / find precipitating cause","educat","สอน","precipitat","ติดเชื้อ")]})]}
 ],
 interp:"ระบบ: Endocrinology · โรค: Diabetic ketoacidosis · ความยาก: ปานกลาง — ถามครบตั้งแต่วินิจฉัย แปล acid–base สั่งการรักษาตามลำดับ จนถึงเกณฑ์หายและเปลี่ยนเป็น SC insulin",
 approach:"ซักประวัติ/ตรวจ → นึกถึง DKA → ยืนยัน 3 อย่าง (glucose, ketone, acidosis) → แปล AG + Winter → severity → น้ำ → ดู K → insulin → K replacement → dextrose → เกณฑ์หาย → overlap basal",
 summary:["DKA = hyperglycemia + ketonemia (β-OHB ≥ 3) + metabolic acidosis","ดู K ก่อนให้ insulin: K < 3.5 ให้ K ก่อน · 3.5–5.0 ให้ insulin + K · > 5.0–5.2 insulin ได้ ยังไม่ให้ K","Bicarbonate เฉพาะ pH < 6.9","เติม dextrose เมื่อ glucose < 250 แต่ insulin ต่อจน ketone หาย","ให้ SC basal ซ้อน 1–2 ชม. ก่อนหยุด IV insulin"]},

/* ======================= 16 พ.ย. 2026 (วันจันทร์ · เคสที่ 1) · Endocrine · DKA (ปานกลาง) · 5 Part: Hx → Hx → PE → Ix → Severity — โรคเดียวกับเคสทดลอง 14 พ.ย. (ผู้ใช้สั่งให้ใช้ซ้ำ) แต่เขียนใหม่ตามรูปแบบใหม่ ======================= */
{day:"2026-11-16",no:1,sec:"MEQ",
 stem:`A 19-year-old woman comes to the emergency department because of vomiting and abdominal pain for 2 days.`,
 parts:[
  {subs:[
   B("1.1 List 3 more questions you would ask about her vomiting and abdominal pain.",3,{lim:3,
   ans:`Any 3: <b>site, onset, character and radiation of the pain</b> · <b>content of vomitus</b> (bile, blood, coffee-ground, feculent) · <b>frequency / ability to keep fluids down</b> · <b>bowel habit</b> (diarrhea, constipation, obstipation) · <b>fever</b> · <b>relation to food</b> · <b>last menstrual period</b> (pregnancy, ectopic) · urinary symptoms`,
   exp:"ซักให้ครบเพื่อแยก surgical abdomen, GI infection, pregnancy, metabolic causes · โจทย์ให้ 3 อย่าง นับเฉพาะ 3 อย่างแรก",
   pts:[G("Questions (3)",3,P("Site / onset / character / radiation","site","onset","character","radiat","ตำแหน่ง","ร้าว"),P("Content of vomitus","vomitus","bile","blood","coffee","content","อาเจียนเป็น"),P("Frequency / keeping fluids down","frequen","how many","fluid","กี่ครั้ง"),P("Bowel habit","bowel","diarrh","constipat","ถ่าย"),P("Fever","fever","ไข้"),P("Relation to food","food","meal","อาหาร"),P("Last menstrual period / pregnancy","LMP","menstru","pregnan","ประจำเดือน"),P("Urinary symptoms","urin","dysuria","ปัสสาวะ"))]}),
   B("1.2 Which symptoms would you ask about to look for an endocrine or metabolic cause?",2,{
   ans:`<b>Polyuria, polydipsia, weight loss</b> (hyperglycemia) · <b>rapid deep breathing</b> (acidosis) · <b>drowsiness / confusion</b> · fatigue · (thyroid / adrenal: weight change, salt craving, skin darkening)`,
   exp:"ปวดท้อง + อาเจียน ในคนอายุน้อย ต้องนึกถึง DKA และ adrenal crisis เสมอ",
   pts:[P("Polyuria / polydipsia / weight loss","polyuri","polydips","weight","ปัสสาวะบ่อย","กระหายน้ำ","น้ำหนัก"),P("Rapid deep breathing / drowsiness","breath","dyspn","drows","confus","หอบ","ซึม")]})]},
  {info:`She has type 1 diabetes mellitus on basal–bolus insulin. She stopped all her insulin 2 days ago because she could not eat. She has had polyuria and thirst for 3 days.`,
   subs:[
   B("2.1 What would you ask to find what precipitated this episode, and why?",3,{
   ans:`• <b>Infection</b> — fever, cough, dysuria, sore throat (most common precipitant with insulin omission)<br>• <b>Reason for missing insulin</b> — misunderstanding of sick-day rules, cost/access, eating disorder, psychological issues<br>• <b>Pregnancy</b> — LMP (DKA occurs at lower glucose; affects management)<br>• <b>Drugs</b> — SGLT2 inhibitor, steroids, antipsychotics<br>• <b>Alcohol / pancreatitis</b>, chest pain (MI), trauma, recent illness`,
   exp:"หาสาเหตุชักนำเสมอ (5 I: Infection, Infarction, Insulin omission, Intoxication, Infant/pregnancy) · ต้องบอกเหตุผล",
   pts:[P("Infection symptoms","infect","fever","cough","dysuria","ติดเชื้อ","ไข้"),P("Why insulin was missed / sick-day knowledge","sick.?day","omission","why","cost","access","ทำไม"),P("Pregnancy / LMP","pregnan","LMP","menstru","ตั้งครรภ์"),P("Drugs / alcohol / pancreatitis / MI","SGLT","steroid","alcohol","pancreat","MI","chest pain"),P("Reason given","because","เพราะ","เพื่อ","→","->","precipit","คิดถึง")]}),
   B("2.2 Which questions help you assess her diabetes self-management?",2,{
   ans:`Insulin types and doses, injection technique and sites · <b>home glucose / ketone monitoring</b> · knowledge of <b>sick-day rules</b> · hypoglycemia episodes · previous DKA admissions · last HbA1c, follow-up and diabetes education`,
   exp:"เคส DKA จากหยุดยา = โอกาสสอน sick-day rules",
   pts:[P("Insulin doses / technique","dose","technique","inject","ขนาด"),P("Glucose / ketone monitoring","monitor","SMBG","DTX","ketone","เจาะ"),P("Sick-day rules / education","sick.?day","educat","สอน"),P("Previous DKA / HbA1c / follow-up","previous","HbA1c","A1c","follow")]})]},
  {info:`BT 37.8 °C, PR 124/min, BP 96/58 mmHg, RR 32/min, SpO₂ 98% on room air.`,
   subs:[
   B("3.1 What would you look for on physical examination, and why?",4,{
   ans:`• <b>Kussmaul (deep, rapid) breathing</b> — respiratory compensation for metabolic acidosis<br>• <b>Fruity (acetone) breath</b> — ketosis<br>• <b>Volume status</b> — dehydration / hypovolemic shock<br>• <b>Level of consciousness (GCS)</b> — severity, cerebral edema<br>• <b>Abdominal examination</b> — DKA abdominal pain vs a surgical cause (peritonitis, pancreatitis, appendicitis)<br>• <b>Source of infection</b> — throat, chest, urinary tract, skin, injection sites`,
   exp:"ต้องบอกเหตุผลว่าตรวจเพื่ออะไร",
   pts:[P("Kussmaul breathing","kussmaul","deep","หายใจหอบลึก"),P("Fruity / acetone breath","fruity","acetone","ketone","ผลไม้"),P("Volume status / dehydration","dehydrat","volume","mucous","turgor","ขาดน้ำ"),P("Consciousness / GCS","conscious","GCS","drows","ซึม"),P("Abdominal exam (surgical cause)","abdom","peritonit","guarding","ท้อง"),P("Source of infection","infect","source","ติดเชื้อ"),P("Reason given","because","เพราะ","เพื่อ","→","->","to ")]}),
   B("3.2 List 4 signs of volume depletion you would look for.",3,{lim:4,
   ans:`Any 4: <b>tachycardia</b> · <b>hypotension / postural drop</b> · <b>dry mucous membranes</b> · <b>decreased skin turgor</b> · <b>prolonged capillary refill</b> · <b>sunken eyes</b> · <b>flat neck veins / low JVP</b> · <b>decreased urine output</b> · cool extremities · altered consciousness`,
   exp:"DKA ขาดน้ำเฉลี่ย 6 ลิตร (~100 mL/kg) · ต้องตอบ 4 อย่าง",
   pts:[G("Signs (4)",4,P("Tachycardia","tachycard","pulse","ชีพจรเร็ว"),P("Hypotension / postural drop","hypotens","postural","orthostat","BP"),P("Dry mucous membranes","mucous","dry","tongue","ปากแห้ง"),P("Decreased skin turgor","turgor","skin"),P("Prolonged capillary refill","capillary","refill"),P("Sunken eyes","sunken","ตาลึก"),P("Flat neck veins / low JVP","JVP","neck vein","jugular"),P("Low urine output","urine","oligur","ปัสสาวะ"),P("Cool extremities","cool","cold","เย็น"),P("Altered consciousness","conscious","drows","ซึม"))]})]},
  {info:`Deep sighing respirations; fruity odour on the breath; dry tongue; capillary refill 3 seconds. Drowsy but obeys commands (GCS E3V5M6). Diffuse mild abdominal tenderness without guarding or rebound.`,
   subs:[
   B("4.1 Which investigations confirm the diagnosis? Give the reason for each.",4,{
   ans:`• <b>Plasma / capillary glucose</b> — hyperglycemia (≥ 200 mg/dL, or known diabetes)<br>• <b>Blood β-hydroxybutyrate</b> (or urine ketone) — ketonemia ≥ 3.0 mmol/L<br>• <b>Venous / arterial blood gas</b> — metabolic acidosis (pH < 7.3 and/or HCO₃⁻ < 18)<br>• <b>Electrolytes</b> (Na, K, Cl, HCO₃⁻) — anion gap, potassium before insulin, corrected Na<br>(2024 international consensus: D-K-A = Diabetes/hyperglycemia + Ketonemia + Acidosis)`,
   exp:"ยืนยัน DKA ต้องครบ 3 ข้อ · ต้องบอกเหตุผลของแต่ละการตรวจ",
   pts:[P("Glucose","glucose","DTX","sugar","น้ำตาล"),P("Ketone (β-OHB)","ketone","hydroxybutyrate","β-?OHB","BHB"),P("Blood gas","[VA]BG","blood gas","pH"),P("Electrolytes / anion gap / K","electrolyte","anion gap","potassium","\\bK\\b"),P("Reason given","because","เพราะ","เพื่อ","to ","→","->","confirm","ดู")]}),
   B("4.2 What other tests would you send to look for the precipitating cause or complications?",3,{
   ans:`<b>CBC</b> · <b>urinalysis / urine culture</b> · <b>blood culture</b> (if febrile) · <b>chest X-ray</b> · <b>ECG</b> (hyperkalemia, ischemia) · <b>serum lipase</b> (pancreatitis) · <b>urine β-hCG</b> · BUN/Cr, phosphate, magnesium · (troponin if chest pain)`,
   exp:"หาการติดเชื้อ ตั้งครรภ์ ตับอ่อนอักเสบ MI ที่เป็นตัวชักนำ",
   pts:[P("CBC","CBC"),P("UA / cultures","UA","urinalysis","culture","H/C"),P("CXR","CXR","chest x"),P("ECG","ECG","EKG"),P("Lipase / β-hCG / renal function","lipase","amylase","hCG","pregnan","BUN","Cr")]})]},
  {info:`Plasma glucose 486 mg/dL · venous pH 7.08, pCO₂ 20 mmHg, HCO₃⁻ 7 mEq/L · Na 131, K 5.6, Cl 96 mEq/L · BUN 32, Cr 1.4 mg/dL · β-hydroxybutyrate 6.2 mmol/L`,
   subs:[B("5. Grade the severity of this DKA. Name the classification and give the 3 criteria you used.",4,{lim:3,
   ans:`<b>ADA severity classification of DKA</b> (hyperglycemic crises) → <b>severe DKA</b><br>Criteria (any 3): <b>pH 7.08</b> (moderate 7.00–7.24; severe < 7.00) · <b>HCO₃⁻ 7</b> (severe < 10) · <b>mental status: drowsy</b> (moderate–severe; stupor/coma = severe) · <b>anion gap 131 − (96 + 7) = 28</b> (> 12; > 14 in moderate–severe)<br>Grade by the <b>worst</b> criterion → HCO₃⁻ < 10 = severe`,
   exp:"ADA: mild pH 7.25–7.30, HCO₃ 15–18, alert · moderate pH 7.00–7.24, HCO₃ 10–< 15, alert/drowsy · severe pH < 7.00, HCO₃ < 10, stupor/coma · ใช้เกณฑ์ที่แย่ที่สุด · ต้องตอบ 3 เกณฑ์",
   pts:[P("ADA classification","ADA","american diabetes"),P("Severe DKA","severe"),G("Criteria used (3)",3,P("pH","pH","7\\.08"),P("HCO₃⁻","HCO","bicarb","\\b7\\b"),P("Mental status","mental","conscious","drows","GCS","ซึม"),P("Anion gap","anion gap","AG","28"))]})]}
 ],
 interp:"ระบบ: Endocrinology · โรค: Diabetic ketoacidosis (severe) จากหยุด insulin · ความยาก: ปานกลาง — เริ่มจาก CC อาเจียน + ปวดท้อง ต้องซักเอาเองจนนึกถึง DKA หาสาเหตุชักนำ ตรวจร่างกายพร้อมเหตุผล เลือกการตรวจยืนยัน และจัด severity ตาม ADA",
 approach:"CC ปวดท้อง + อาเจียน → ซักลักษณะ + โรคประจำตัว/ยา + อาการ hyperglycemia → T1DM หยุด insulin → หาสาเหตุชักนำ (5 I) → ตรวจ Kussmaul, กลิ่น, volume, GCS, ท้อง → glucose + β-OHB + blood gas + electrolytes → ADA severity",
 summary:["DKA = hyperglycemia + ketonemia (β-OHB ≥ 3) + metabolic acidosis","สาเหตุชักนำ 5 I: Infection, Infarction, Insulin omission, Intoxication, Infant (pregnancy)","ใช้ blood β-OHB ไม่ใช่ urine nitroprusside ในการติดตาม","ADA severity: severe = pH < 7.00 หรือ HCO₃ < 10 หรือ stupor/coma (ใช้เกณฑ์ที่แย่สุด)","SGLT2 inhibitor → euglycemic DKA"]},

/* ======================= 17 พ.ย. 2026 (วันอังคาร · เคสที่ 2) · Infectious / Tropical · Leptospirosis (ยาก) · 5 Part: Hx → Hx → PE → DDx → Mx ======================= */
{day:"2026-11-17",no:2,sec:"MEQ",
 stem:`A 42-year-old man from Sisaket province comes to the hospital because of high fever and muscle pain for 5 days.`,
 parts:[
  {subs:[B("1. List 5 more history items you would ask, with the reason for each.",5,{lim:5,
   ans:`Any 5, each with a reason, e.g.<br>• <b>Occupation / exposure to flood water, mud, rice field, rats</b> → leptospirosis<br>• <b>Forest / bush / field work, camping</b> → scrub typhus (eschar); forest or border travel → malaria<br>• <b>Pattern and site of myalgia (calf pain)</b> → leptospirosis<br>• <b>Headache, retro-orbital pain, rash, bleeding</b> → dengue<br>• <b>Yellow eyes, dark urine, decreased urine</b> → hepatic/renal involvement (severe disease)<br>• <b>Cough, hemoptysis, dyspnea</b> → pulmonary involvement<br>• <b>Underlying diabetes / kidney disease / alcohol</b> → melioidosis risk, severity<br>• Sick contacts, drugs already taken (NSAIDs, antibiotics)`,
   exp:"ไข้เฉียบพลันในไทย ต้องซักเพื่อแยก lepto, scrub typhus, dengue, malaria, melioidosis และหาอวัยวะที่เสียหาย · <b>โจทย์ให้ตอบ 5 อย่าง</b> — นับเฉพาะ 5 อย่างแรกที่ตอบ และแต่ละข้อต้องมีเหตุผล",
   pts:[G("History items (5)",5,P("Water / flood / mud / rice field / rat exposure","flood","water","mud","rice","field","rat","น้ำ","โคลน","นา","หนู"),P("Forest / bush / travel","forest","bush","jungle","camp","travel","ป่า","เดินทาง"),P("Calf pain / site of myalgia","calf","น่อง"),P("Rash / bleeding / retro-orbital pain","rash","bleed","retro.?orbital","ผื่น","เลือดออก"),P("Jaundice / dark urine","jaundice","yellow","dark urine","ตาเหลือง","ตัวเหลือง","ปัสสาวะสีเข้ม"),P("Urine output","urine output","oligur","ปัสสาวะออกน้อย","ปัสสาวะน้อย"),P("Cough / hemoptysis / dyspnea","cough","hemopty","dyspn","ไอ","หอบ","เหนื่อย"),P("Underlying disease (DM, CKD, alcohol)","diabet","\\bDM\\b","CKD","alcohol","underlying","โรคประจำตัว"),P("Drugs already taken","drug","NSAID","antibiotic","medicat","ยา")),P("A reason given for each item","because","เพราะ","เพื่อ","r/o","rule out","suggest","→","->","คิดถึง")]})]},
  {info:`He is a rice farmer. Two weeks ago he worked in his flooded field without boots. The pain is worst in both calves. He has a severe headache.`,
   subs:[B("2. List 3 more symptoms you would specifically ask about to detect organ complications of severe disease.",3,{lim:3,
   ans:`Any 3: <b>yellow eyes / jaundice</b> · <b>decreased urine output</b> (AKI) · <b>cough with hemoptysis or dyspnea</b> (pulmonary hemorrhage) · <b>bleeding</b> (gum, GI) · <b>confusion / drowsiness</b> (meningitis, uremia) · chest pain / palpitation (myocarditis)`,
   exp:"ประวัติตอนนี้ชี้ leptospirosis — Weil's disease = jaundice + AKI + bleeding · pulmonary hemorrhage เป็นสาเหตุตายหลัก ต้องถามทุกครั้ง",
   pts:[G("Complication symptoms (3)",3,P("Jaundice","jaundice","yellow","ตาเหลือง","ตัวเหลือง"),P("Decreased urine","urine","oligur","ปัสสาวะ"),P("Hemoptysis / dyspnea","hemopty","dyspn","cough","ไอเป็นเลือด","หอบ","เหนื่อย"),P("Bleeding","bleed","เลือดออก"),P("Confusion / drowsiness","confus","drows","alteration","ซึม","สับสน"),P("Chest pain / palpitation","chest pain","palpitat","ใจสั่น","เจ็บหน้าอก"))]})]},
  {info:`For the past day his eyes have turned yellow and he passes less urine. No cough, no bleeding.<br>BT 39.2 °C, PR 112/min, BP 100/60 mmHg, RR 24/min, SpO₂ 97% on room air.`,
   subs:[
   B("3.1 List 4 physical signs you would specifically look for.",4,{lim:4,
   ans:`Any 4: <b>conjunctival suffusion</b> · <b>jaundice</b> · <b>calf tenderness</b> · <b>eschar</b> (scrub typhus) · <b>lymphadenopathy</b> · <b>rash / petechiae / tourniquet test</b> (dengue) · <b>hepatosplenomegaly</b> · <b>signs of dehydration</b> · lung crackles · neck stiffness`,
   exp:"ตรวจหาสิ่งที่ช่วยแยกโรค (eschar, ผื่น) และหาอวัยวะที่เสีย (ตา, ปอด, ตับ, สติ) · โจทย์ให้ 4 อย่าง นับเฉพาะ 4 อย่างแรก",
   pts:[G("Signs (4)",4,P("Conjunctival suffusion","conjunctiv","suffusion","ตาแดง"),P("Jaundice","jaundice","icteric","ตาเหลือง"),P("Calf tenderness","calf","น่อง"),P("Eschar","eschar"),P("Lymphadenopathy","lymph","ต่อมน้ำเหลือง"),P("Rash / petechiae / tourniquet test","rash","petechi","tourniquet","ผื่น","จุดเลือด"),P("Hepatosplenomegaly","hepato","spleno","ตับโต","ม้ามโต"),P("Dehydration","dehydrat","mucous","skin turgor","ขาดน้ำ"),P("Lung crackles","crackle","crepitation","lung"),P("Neck stiffness","neck stiff","meninge","คอแข็ง"))]}),
   B("3.2 He has red eyes without discharge. What is this sign called, and how does it differ from conjunctivitis?",2,{
   ans:`<b>Conjunctival suffusion</b> — dilated conjunctival vessels <b>without purulent discharge or inflammation</b>, mostly over the bulbar conjunctiva; conjunctivitis has discharge, itching/grittiness and inflammation. Highly suggestive of leptospirosis`,
   exp:"Conjunctival suffusion ไม่มีขี้ตา ไม่คัน — เป็นลักษณะเด่นของ leptospirosis (พบได้ใน hantavirus ด้วย)",
   pts:[P("Conjunctival suffusion","suffusion"),P("No discharge / no inflammation","discharge","ขี้ตา","no inflamm","ไม่มีหนอง")]})]},
  {info:`Examination: conjunctival suffusion, icteric sclerae, marked tenderness of both calves. No eschar, no rash, no lymphadenopathy, no hepatosplenomegaly. Lungs clear.`,
   subs:[
   B("4.1 What is your most likely diagnosis? Give the differential diagnosis.",4,{
   ans:`Most likely: <b>Leptospirosis (severe / Weil's disease)</b><br>DDx: <b>scrub typhus</b> · <b>dengue</b> · <b>malaria</b> · <b>melioidosis</b> · acute viral hepatitis · other sepsis with cholestasis (e.g. cholangitis)`,
   exp:"สัมผัสน้ำท่วม + ปวดน่อง + conjunctival suffusion + jaundice + AKI = Weil's disease",
   pts:[P("Leptospirosis / Weil's disease","lepto","weil"),G("Differentials (≥ 3)",3,P("Scrub typhus","scrub","typhus","rickett"),P("Dengue","dengue","เดงกี","ไข้เลือดออก"),P("Malaria","malaria","มาลาเรีย"),P("Melioidosis","melioid"),P("Viral hepatitis","hepatitis","ตับอักเสบ"),P("Cholangitis / sepsis","cholangit","sepsis"))]}),
   B("4.2 Which laboratory pattern would favour leptospirosis over dengue?",3,{
   ans:`Leptospirosis: <b>neutrophilic leukocytosis</b>, <b>high direct bilirubin with only mild AST/ALT rise</b>, <b>AKI (often with hypokalemia)</b>, <b>raised CK</b><br>Dengue: <b>leukopenia</b>, thrombocytopenia with <b>rising hematocrit</b>, AST > ALT, NS1/IgM positive`,
   exp:"WBC สูง + bilirubin สูงมากแต่ transaminase ขึ้นนิดเดียว + CK สูง = lepto · dengue = WBC ต่ำ + Hct ขึ้น",
   pts:[P("Leukocytosis (lepto) vs leukopenia (dengue)","leukocyt","leukopen","WBC"),P("High bilirubin with mild transaminase rise","bilirubin","transaminase","AST","ALT"),P("AKI / hypokalemia / high CK","AKI","Cr","hypokal","CK","creatin"),P("Rising hematocrit / NS1 in dengue","hematocrit","Hct","NS1","hemoconcent")]})]},
  {info:`CBC: WBC 14,500/µL (N 88%), platelets 62,000/µL · BUN 68, Cr 4.1 mg/dL, K 3.2 mEq/L · Total bilirubin 12.6 (direct 9.8) mg/dL, AST 98, ALT 76 U/L · CK 2,100 U/L · Leptospira IgM rapid test: positive.`,
   subs:[
   B("5.1 Write the antibiotic treatment for this patient.",3,{
   ans:`Severe disease: <b>IV penicillin G 1.5 million units every 6 h</b> or <b>ceftriaxone 1–2 g IV once daily</b> × 7 days (mild disease: doxycycline 100 mg bid)<br>Plus IV fluid, potassium replacement, monitor urine output, watch for Jarisch–Herxheimer reaction`,
   exp:"Severe = penicillin G หรือ ceftriaxone · เริ่มยาทันทีเมื่อสงสัย ไม่ต้องรอผลยืนยัน",
   pts:[P("IV penicillin G or ceftriaxone","penicillin","PGS","ceftriax"),P("Supportive: fluid / K replacement / monitor urine","fluid","KCl","potassium","urine","supportive")]}),
   B("5.2 On day 2 his urine output falls to 0.2 mL/kg/h. List 3 indications for urgent dialysis.",3,{lim:3,
   ans:`Any 3: <b>refractory hyperkalemia</b> · <b>severe metabolic acidosis</b> · <b>volume overload / pulmonary edema</b> · <b>uremic complications</b> (encephalopathy, pericarditis, bleeding) · <b>pulmonary hemorrhage with oliguria</b> · some toxins (AEIOU)<br>In severe leptospirosis, <b>early (daily) dialysis</b> is preferred`,
   exp:"AEIOU: Acidosis, Electrolyte (K), Intoxication, Overload, Uremia · ใน lepto ฟอกไตเร็วช่วยลดอัตราตาย",
   pts:[G("Dialysis indications (3)",3,P("Hyperkalemia","hyperkal","K ?>","\\bK\\b"),P("Acidosis","acidos"),P("Volume overload / pulmonary edema","overload","pulmonary edema","น้ำเกิน"),P("Uremic complications","uremi","pericard","encephalop"),P("Intoxication","intox","toxin","poison"),P("Refractory oliguria / pulmonary hemorrhage","oligur","hemorrh"))]})]}
 ],
 interp:"ระบบ: Infectious disease / Tropical medicine · โรค: Severe leptospirosis (Weil's disease) · ความยาก: ยาก — เริ่มจาก CC ไข้ + ปวดกล้ามเนื้อ ต้องซักให้เจอ exposure เอง ตรวจหาสิ่งที่ช่วยแยก แล้วรักษาและรู้ข้อบ่งชี้ฟอกไต",
 approach:"CC ไข้เฉียบพลัน → ซัก exposure (น้ำท่วม/ป่า/ยุง) + อวัยวะที่เสีย → ตรวจ conjunctival suffusion, calf tenderness, eschar, ผื่น → แยก lepto/scrub/dengue/malaria → ให้ยาทันที → เฝ้าระวัง AKI + pulmonary hemorrhage → early dialysis",
 summary:["Lepto: ปวดน่อง + conjunctival suffusion + สัมผัสน้ำ/โคลน","Weil = jaundice + AKI + bleeding · pulmonary hemorrhage = สาเหตุตายหลัก","ไม่มี eschar ไม่ได้ตัด scrub typhus","Severe: penicillin G หรือ ceftriaxone · mild: doxycycline","AKI ของ lepto มัก non-oliguric + hypokalemia · ฟอกไตเร็วเมื่อ oliguric"]},

/* ======================= 18 พ.ย. 2026 (วันพุธ · เคสที่ 3) · Cardiology · Inferior STEMI + RV infarction (ยาก) · 4 Part: Hx → Hx → PE → DDx ======================= */
{day:"2026-11-18",no:3,sec:"MEQ",
 stem:`A 66-year-old man comes to the emergency department because of chest pain for 1 hour.`,
 parts:[
  {subs:[
   B("1.1 What will you ask to characterize his chest pain?",4,{
   ans:`<b>Onset</b> (sudden / at rest / exertion), <b>character</b> (crushing, pressure, tearing, pleuritic), <b>site and radiation</b> (jaw, arm, back), <b>severity</b>, <b>duration</b>, <b>aggravating / relieving factors</b> (exertion, rest, nitrate, position, breathing), <b>associated symptoms</b> (sweating, nausea, dyspnea, syncope, palpitation) — SOCRATES`,
   exp:"ใช้ SOCRATES / OPQRST ครบทุกด้าน · tearing ร้าวหลัง = dissection · pleuritic = PE/pericarditis · positional = pericarditis",
   pts:[P("Onset","onset","sudden","เริ่ม","ทันที"),P("Character","character","crush","pressure","tear","squeez","ลักษณะ","แน่น"),P("Site / radiation","radiat","site","jaw","arm","back","ร้าว"),P("Duration / severity","duration","severity","score","นาน","รุนแรง"),P("Aggravating / relieving factors","aggravat","reliev","exert","rest","position","ทำให้"),P("Associated symptoms","sweat","diaphores","nausea","dyspn","syncope","เหงื่อ","เหนื่อย")]}),
   B("1.2 What other history must you ask before giving antiplatelets or fibrinolytic therapy?",3,{
   ans:`<b>Bleeding risk / contraindications</b>: previous intracranial hemorrhage or stroke, recent major surgery or trauma (incl. head injury), active bleeding / GI bleeding, known bleeding disorder, <b>anticoagulant use</b>, uncontrolled hypertension, suspected aortic dissection<br>Drug allergy (aspirin), recent PDE-5 inhibitor use (before nitrate)`,
   exp:"ต้องถาม contraindication ของ fibrinolysis ก่อนเสมอ · ใช้ sildenafil ใน 24 ชม. (tadalafil 48 ชม.) ห้ามให้ nitrate",
   pts:[P("Previous ICH / stroke","stroke","ICH","intracranial","hemorrhag"),P("Recent surgery / trauma / head injury","surgery","trauma","head injury","ผ่าตัด","อุบัติเหตุ"),P("Active / GI bleeding / bleeding disorder","bleed","GI","เลือดออก"),P("Anticoagulant use","anticoag","warfarin","DOAC","ยาละลาย","ยาต้านการแข็งตัว"),P("Allergy / PDE-5 inhibitor","allerg","sildenafil","PDE","แพ้")]})]},
  {info:`Crushing retrosternal pain at rest, radiating to the left arm, with sweating and nausea. He has diabetes, hypertension and a 40-pack-year smoking history. No previous bleeding, stroke or surgery.`,
   subs:[
   B("2.1 Which features make this pain high-risk for acute coronary syndrome?",3,{
   ans:`<b>Typical ischemic pain</b> — crushing, retrosternal, at rest, > 20 min, radiating to the arm, with <b>sweating and nausea</b> · <b>Risk factors</b>: older man, diabetes, hypertension, heavy smoking`,
   exp:"Pain ที่ rest > 20 นาที + autonomic symptoms + risk factors หลายตัว = ACS จนกว่าจะพิสูจน์ได้ว่าไม่ใช่",
   pts:[P("Typical character (crushing, retrosternal, radiating)","crush","retrosternal","radiat","typical"),P("At rest / prolonged","rest","prolong","> ?20","duration"),P("Sweating / nausea","sweat","diaphores","nausea","เหงื่อ"),P("Risk factors (DM, HT, smoking, age, male)","diabet","DM","hypertens","HT","smok","risk")]}),
   B("2.2 Which other life-threatening causes of chest pain must you rule out on history? Give one question for each and why.",4,{
   ans:`• <b>Aortic dissection</b> — sudden tearing pain radiating to the back? (dissection extending into the coronary ostium can mimic inferior MI; fibrinolysis would be fatal)<br>• <b>Pulmonary embolism</b> — pleuritic pain, dyspnea, immobilization, leg swelling?<br>• <b>Tension pneumothorax</b> — sudden pleuritic pain with dyspnea?<br>• <b>Cardiac tamponade / pericarditis</b> — positional pain, recent viral illness, malignancy?<br>• <b>Esophageal rupture</b> — after vomiting?`,
   exp:"Life-threatening chest pain 6 อย่าง: ACS, aortic dissection, PE, tension pneumothorax, tamponade, esophageal rupture · โจทย์ถามเหตุผล — ต้องบอกว่าถามเพื่อแยกโรคอะไร",
   pts:[P("Aortic dissection (tearing, back)","dissect","tear","back"),P("Pulmonary embolism","pulmonary emb","\\bPE\\b","DVT","immobil","leg swell"),P("Pneumothorax","pneumothorax"),P("Tamponade / pericarditis","tamponade","pericard"),P("Esophageal rupture","esophag","boerhaave","vomit"),P("Reason given for each question","because","เพราะ","เพื่อ","to rule","r/o","แยก")]})]},
  {info:`BP 84/50 mmHg (right arm), PR 52/min regular, RR 20/min, SpO₂ 96% on room air.`,
   subs:[
   B("3.1 Interpret the vital signs.",2,{
   ans:`<b>Hypotension with relative bradycardia</b> — in a patient with ischemic chest pain think of <b>inferior MI with sinus bradycardia / AV block</b> (vagal, RCA supplies SA/AV node) and <b>RV infarction</b> or <b>cardiogenic shock</b>; normal SpO₂`,
   exp:"BP ต่ำ + ชีพจรช้า ใน ACS = นึกถึง inferior MI (RCA) ± RV infarction ± heart block",
   pts:[P("Hypotension / shock","hypotens","shock","low BP","ความดันต่ำ"),P("Bradycardia","bradycard","heart block","AV block","ช้า"),P("Suggests inferior MI / RV infarct (RCA)","inferior","RV","right ventric","RCA")]}),
   B("3.2 What else will you examine, and why?",4,{
   ans:`• <b>BP in both arms / all pulses</b> — differential BP or pulse deficit suggests aortic dissection<br>• <b>JVP and Kussmaul sign</b> — raised JVP with clear lungs = RV infarction (or tamponade/PE)<br>• <b>Lung auscultation</b> — crackles = LV failure (Killip class)<br>• <b>Heart sounds / new murmur</b> — MR (papillary muscle rupture), VSD; muffled sounds / rub = tamponade/pericarditis<br>• <b>Signs of shock / perfusion</b> — cold clammy skin, capillary refill, consciousness, urine output<br>• Trachea and breath sounds (pneumothorax), leg swelling (DVT)`,
   exp:"แต่ละท่าต้องบอกเหตุผล (ตรวจเพื่อดูอะไร) · JVP สูง + ปอดใส + BP ต่ำ = RV infarction triad",
   pts:[P("BP both arms / pulses (dissection)","both arm","pulse","bilateral","dissect","แขนสองข้าง"),P("JVP / Kussmaul (RV infarct)","JVP","jugular","Kussmaul"),P("Lung crackles (LV failure, Killip)","crackle","crepitation","lung","Killip","ปอด"),P("New murmur / muffled heart sounds / rub","murmur","muffled","rub","heart sound","MR","VSD"),P("Perfusion / shock signs","perfusion","capillary","cold","clammy","urine","conscious"),P("Reason given for each","because","เพราะ","เพื่อ","to ","r/o","ดู")]})]},
  {info:`JVP is raised 8 cm above the sternal angle; lungs are clear. BP left arm 86/52 mmHg. Heart sounds normal, no murmur. Cool extremities.`,
   subs:[B("4. Give 3 differential diagnoses for this presentation, with one finding that supports or opposes each.",6,{lim:3,
   ans:`Most likely first: <b>Inferior STEMI with right ventricular infarction</b> (hypotension + raised JVP + clear lungs + bradycardia; confirm with ECG incl. V4R)<br>Others (any 2):<br>• <b>Cardiac tamponade</b> — raised JVP + hypotension, but heart sounds normal and no pulsus paradoxus/rub; check bedside echo<br>• <b>Massive pulmonary embolism</b> — raised JVP + shock, but chest pain crushing not pleuritic, SpO₂ normal<br>• <b>Aortic dissection</b> (extending to RCA) — but BP equal in both arms and no tearing back pain<br>• Tension pneumothorax — raised JVP + shock, but lungs clear with normal breath sounds`,
   exp:"BP ต่ำ + JVP สูง + ปอดใส = ventricle ขวาทำงานไม่ได้หรือถูกบีบ → RV infarct, tamponade, massive PE, tension pneumothorax · <b>ต้องตอบ 3 โรค</b> นับเฉพาะ 3 อย่างแรก และแต่ละโรคต้องมีสิ่งที่ตรวจพบสนับสนุนหรือค้าน",
   pts:[G("Differential diagnoses (3)",3,P("Inferior STEMI + RV infarction","RV","right ventric","inferior","STEMI","MI"),P("Cardiac tamponade","tamponade"),P("Massive pulmonary embolism","pulmonary emb","\\bPE\\b","embol"),P("Aortic dissection","dissect"),P("Tension pneumothorax","pneumothorax")),P("A supporting / opposing finding for each","because","เพราะ","support","against","oppos","JVP","clear","murmur","สนับสนุน","ค้าน")]})]}
 ],
 interp:"ระบบ: Cardiology · โรค: Inferior STEMI + RV infarction · ความยาก: ยาก — เริ่มจาก CC เจ็บหน้าอก ต้องซักประวัติ chest pain ครบ ถาม contraindication ของยา ตรวจร่างกายเพื่อแยก life-threatening chest pain และให้ DDx ของ hypotension + JVP สูง + ปอดใส",
 approach:"CC chest pain → SOCRATES + risk factors + contraindication ยา → ตัด dissection/PE/pneumothorax/tamponade จากประวัติ → vital signs (BP ต่ำ + ช้า) → ตรวจ BP 2 แขน, JVP, ปอด, murmur → DDx: RV infarct vs tamponade vs PE vs dissection → ECG + V4R + echo",
 summary:["Chest pain ต้องคิด 6 โรคอันตราย: ACS, dissection, PE, pneumothorax, tamponade, esophageal rupture","Inferior MI + BP ต่ำ + JVP สูง + ปอดใส = RV infarction → ทำ V4R","RV infarct: ห้าม nitrate/diuretic · ให้ IV fluid","ถาม contraindication ของ fibrinolysis ก่อนให้ยาเสมอ","วัด BP 2 แขนเมื่อสงสัย dissection"]},

/* ======================= 19 พ.ย. 2026 (วันพฤหัสบดี · เคสที่ 4) · Hematology · Iron deficiency anemia (ง่าย) · 4 Part: Hx → Lab → Dx → DDx ======================= */
{day:"2026-11-19",no:4,sec:"MEQ",
 stem:`A 32-year-old woman comes to the outpatient clinic because of fatigue and shortness of breath on climbing stairs for 3 months.`,
 parts:[
  {subs:[
   B("1.1 What history would you ask to find the cause of her dyspnea?",3,{
   ans:`• <b>Cardiac</b>: orthopnea, PND, leg swelling, palpitation, chest pain<br>• <b>Pulmonary</b>: cough, wheeze, sputum, smoking, TB contact<br>• <b>Anemia</b>: pallor, dizziness, bleeding, diet<br>• <b>Thyroid</b>: weight change, heat/cold intolerance, palpitation<br>• Constitutional: fever, weight loss, night sweats`,
   exp:"Dyspnea on exertion เรื้อรัง แบ่งเป็น cardiac, pulmonary, anemia, metabolic (thyroid), deconditioning",
   pts:[P("Cardiac symptoms (orthopnea, PND, edema)","orthopn","PND","edema","swell","heart","cardiac","บวม"),P("Pulmonary symptoms (cough, wheeze)","cough","wheez","sputum","lung","ไอ"),P("Anemia symptoms / bleeding","anemi","pale","bleed","ซีด","เลือด"),P("Thyroid / constitutional","thyroid","weight","fever","night sweat","น้ำหนัก")]}),
   B("1.2 If you suspect anemia, list 4 questions to find its cause.",4,{lim:4,
   ans:`Any 4: <b>menstrual history</b> (duration, number of pads, clots) · <b>GI bleeding</b> (melena, hematochezia, hematemesis) · <b>diet</b> (vegetarian, poor intake) · <b>pica</b> (ice, soil) · <b>family history of thalassemia / anemia</b> · <b>jaundice, dark urine</b> (hemolysis) · <b>drugs</b> (NSAIDs, aspirin) · previous pregnancies / breastfeeding · GI symptoms of malabsorption · chronic disease (CKD, autoimmune)`,
   exp:"ผู้หญิงวัยเจริญพันธุ์ สาเหตุ anemia ที่พบบ่อยสุดคือเสียเลือดทางประจำเดือน · ในไทยถามประวัติครอบครัว thalassemia เสมอ · โจทย์ให้ 4 อย่าง นับเฉพาะ 4 อย่างแรก",
   pts:[G("Cause-finding questions (4)",4,P("Menstrual history","menstru","period","menorrhag","pad","ประจำเดือน"),P("GI bleeding","melena","GI","hematochez","hematemes","ถ่ายดำ"),P("Diet","diet","vegetarian","อาหาร","มังสวิรัติ"),P("Pica","pica","ice","ice craving","น้ำแข็ง"),P("Family history thalassemia","thalass","family","ครอบครัว"),P("Hemolysis symptoms","jaundice","dark urine","hemoly","ตาเหลือง"),P("Drugs (NSAIDs)","NSAID","aspirin","drug","ยา"),P("Pregnancy / breastfeeding","pregnan","breast","ตั้งครรภ์"),P("Chronic disease","CKD","chronic","autoimmune"))]})]},
  {info:`Her periods last 8 days and she uses about 10 pads a day on the heaviest days. She often craves ice. She looks pale; PR 104/min; spoon-shaped nails.<br>CBC: Hb 7.8 g/dL, Hct 26%, <b>RBC 3.6 × 10⁶/µL</b>, MCV 64 fL, MCH 19 pg, RDW 19%, WBC 6,800/µL, platelets 480,000/µL, reticulocyte 0.6%<br>Blood smear: microcytic hypochromic RBCs with anisopoikilocytosis and pencil cells`,
   subs:[B("2. List the 3 most important abnormal findings in this CBC and blood smear, with what each means.",4,{lim:3,
   ans:`Any 3: <b>Microcytic hypochromic anemia</b> (low Hb, MCV 64, MCH 19) · <b>high RDW</b> (anisocytosis — favours iron deficiency over thalassemia trait) · <b>reactive thrombocytosis</b> (platelets 480,000 — seen in iron deficiency / bleeding) · <b>low reticulocyte count</b> (hypoproliferative, inadequate marrow response) · <b>pencil cells</b> (typical of iron deficiency)`,
   exp:"Microcytic + RDW สูง + plt สูง + pencil cell = แนว iron deficiency · retic ต่ำ = ไขกระดูกสร้างไม่ทัน (ขาดวัตถุดิบ) · ต้องตอบ 3 อย่าง นับเฉพาะ 3 อย่างแรก",
   pts:[G("Abnormal findings (3)",3,P("Microcytic hypochromic anemia","microcyt","hypochrom","MCV","MCH"),P("High RDW","RDW","anisocyt"),P("Thrombocytosis","thrombocytos","platelet","เกล็ดเลือดสูง"),P("Low reticulocyte","retic","hypoprolif"),P("Pencil cells","pencil","pencil cell"))]})]},
  {info:`Iron studies: serum ferritin 6 ng/mL, serum iron 22 µg/dL, TIBC 460 µg/dL, transferrin saturation 5%.`,
   subs:[
   B("3.1 What is the diagnosis and its most likely cause?",2,{
   ans:`<b>Iron deficiency anemia</b> due to <b>chronic blood loss from heavy menstrual bleeding (menorrhagia)</b>`,
   exp:"ประจำเดือนนาน 8 วัน + 10 ผ้า/วัน = heavy menstrual bleeding",
   pts:[P("Iron deficiency anemia","iron def","IDA","ขาดธาตุเหล็ก"),P("From menorrhagia / heavy menstrual bleeding","menorrhag","menstru","heavy","HMB","ประจำเดือน")]}),
   B("3.2 Does she need investigation for gastrointestinal blood loss? Why?",3,{
   ans:`<b>Not routinely now</b> — she is a young premenopausal woman with a clear cause (menorrhagia) and no GI symptoms; screen with history ± stool occult blood / celiac serology. <b>Investigate the GI tract (endoscopy)</b> if she has GI symptoms, positive stool occult blood, family history of GI cancer, or <b>fails to respond to oral iron</b>. Men and postmenopausal women always need GI evaluation`,
   exp:"สาเหตุชัดและอายุน้อย → ไม่ต้องส่องกล้องทุกราย · ผู้ชาย/หญิงวัยหมดประจำเดือนต้องหา GI loss เสมอ · ต้องบอกเหตุผล",
   pts:[P("Not routinely (clear cause, young, no GI symptoms)","not","no","ไม่","clear cause","young","premenopaus"),P("Indications: GI symptoms / occult blood / no response to iron","GI symptom","occult","no response","fail","refractory","endoscop")]})]},
  {subs:[
   B("4.1 Give the differential diagnosis of microcytic anemia.",3,{
   ans:`<b>Iron deficiency</b> · <b>thalassemia</b> (trait / HbE / HbH) · <b>anemia of chronic disease</b> (late) · <b>sideroblastic anemia</b> · lead poisoning — "TAILS"`,
   exp:"TAILS: Thalassemia, Anemia of chronic disease, Iron deficiency, Lead, Sideroblastic",
   pts:[P("Iron deficiency","iron"),P("Thalassemia / HbE","thalass","HbE","Hb E"),P("Anemia of chronic disease","chronic disease","inflammation","ACD"),P("Sideroblastic / lead","sideroblast","lead")]}),
   B("4.2 Calculate the Mentzer index. Does it favour thalassemia trait?",2,{
   ans:`Mentzer index = MCV / RBC = 64 / 3.6 ≈ <b>17.8</b> → <b>> 13 favours iron deficiency</b> (< 13 favours thalassemia trait)`,
   exp:"Thal trait: RBC count สูง แม้ MCV เล็ก → index < 13 · IDA: RBC ต่ำ → index > 13",
   pts:[P("Mentzer ≈ 17.8","17\\.?[0-9]?","18","Mentzer"),P("> 13 favours iron deficiency","> ?13","iron","IDA","not thal")]})]}
 ],
 interp:"ระบบ: Hematology · โรค: Iron deficiency anemia from heavy menstrual bleeding · ความยาก: ง่าย — เริ่มจาก CC เหนื่อยง่าย ต้องซักแยกสาเหตุของ dyspnea และ anemia เอง แล้วแปล CBC, iron studies, Mentzer index",
 approach:"CC เหนื่อยง่าย → ซัก cardiac/pulmonary/anemia/thyroid → ซักหาสาเหตุ anemia (ประจำเดือน, GI, อาหาร, thal) → CBC microcytic + RDW สูง + plt สูง → iron studies ยืนยัน → DDx TAILS + Mentzer → Hb typing",
 summary:["IDA: microcytic hypochromic + RDW สูง + plt สูง + pencil cell","Ferritin < 30 ยืนยัน · TSAT ต่ำ · TIBC สูง","Mentzer (MCV/RBC) > 13 = IDA · < 13 = thal trait","หญิงวัยเจริญพันธุ์ + สาเหตุชัด ไม่ต้องส่องกล้องทุกราย","IDA ทำให้ HbA2 ต่ำ อาจบัง β-thal trait"]},

/* ======================= 20 พ.ย. 2026 (วันศุกร์ · เคสที่ 5) · Nephrology · AKI + hyperkalemia (ปานกลาง) · 4 Part: Hx → Hx → DDx → Severity ======================= */
{day:"2026-11-20",no:5,sec:"MEQ",
 stem:`A 72-year-old woman comes to the emergency department because of dizziness and passing little urine for 2 days.`,
 parts:[
  {subs:[
   B("1.1 What history would you ask?",3,{
   ans:`• <b>Volume loss</b>: vomiting, diarrhea, poor intake, bleeding, fever/sweating<br>• <b>Dizziness</b>: orthostatic (on standing) vs vertigo, syncope, palpitation<br>• <b>Urinary</b>: urine volume, dysuria, hematuria, frothy urine, difficulty voiding / weak stream (obstruction)<br>• <b>Underlying disease</b>: hypertension, diabetes, CKD, heart failure, liver disease<br>• Recent contrast or infection; edema, dyspnea`,
   exp:"ปัสสาวะน้อย = คิด AKI → ซักแบ่ง prerenal / renal / postrenal เสมอ",
   pts:[P("Volume loss (vomiting, diarrhea, intake, bleeding)","vomit","diarrh","intake","bleed","อาเจียน","ถ่ายเหลว","กิน"),P("Character of dizziness (orthostatic, syncope)","orthostat","standing","syncope","postural","ลุกยืน","หน้ามืด"),P("Urinary / obstructive symptoms","dysuria","hematuria","weak stream","obstruct","void","ปัสสาวะ"),P("Underlying disease","hypertens","diabet","CKD","heart failure","underlying","โรคประจำตัว")]}),
   B("1.2 Which medications would you ask about specifically, and why?",3,{
   ans:`• <b>ACE inhibitor / ARB</b> — reduce efferent arteriolar tone → fall in GFR when volume depleted; also cause hyperkalemia<br>• <b>Diuretics</b> — volume depletion<br>• <b>NSAIDs</b> — afferent vasoconstriction (prerenal), interstitial nephritis<br>• <b>Nephrotoxins</b>: aminoglycosides, contrast, some herbal medicines<br>• <b>K-raising drugs</b>: spironolactone, K supplements, trimethoprim<br>• Metformin (lactic acidosis risk in AKI)`,
   exp:"\"Triple whammy\" = ACEI/ARB + diuretic + NSAID → AKI ในผู้สูงอายุ · ต้องบอกเหตุผลของยาแต่ละตัว",
   pts:[P("ACEI / ARB","ACE","ARB","enalapril","losartan","pril","sartan"),P("Diuretics","diuretic","thiazide","furosemide","HCTZ","ยาขับปัสสาวะ"),P("NSAIDs","NSAID","ibuprofen","diclofenac"),P("Nephrotoxins / K-raising drugs","aminoglycoside","contrast","herbal","spironolact","potassium","สมุนไพร"),P("Reason given for each","because","เพราะ","เพื่อ","afferent","efferent","GFR","volume","hyperkal")]})]},
  {info:`She has watery diarrhea 6–8 times a day for 3 days. She has hypertension treated with enalapril 20 mg/day and hydrochlorothiazide 25 mg/day, and has been taking ibuprofen 400 mg three times a day for knee pain for 1 week. Baseline creatinine 3 months ago was 0.9 mg/dL.`,
   subs:[B("2. What further history would you ask to look for intrinsic renal or postrenal causes? Give the reason for each.",4,{
   ans:`<b>Intrinsic renal</b><br>• Prolonged hypotension / shock, sepsis → ischemic ATN<br>• Fever, rash, arthralgia after starting a drug (NSAID) → acute interstitial nephritis<br>• Hematuria, frothy urine, edema, rash, hemoptysis → glomerulonephritis / vasculitis<br>• Recent contrast, aminoglycoside, muscle injury / dark urine → toxic ATN / rhabdomyolysis<br><b>Postrenal</b><br>• Difficulty voiding, frequency, nocturia, incomplete emptying → bladder outlet obstruction<br>• Flank pain, stones → ureteric obstruction<br>• Pelvic malignancy / previous pelvic radiation`,
   exp:"แม้ประวัติชี้ prerenal (triple whammy + diarrhea) ต้องซักให้ครบทุกกลุ่ม · ต้องบอกเหตุผล (ถามเพื่อคิดถึงโรคอะไร)",
   pts:[P("Prolonged hypotension / sepsis → ATN","ATN","tubular necros","shock","sepsis","hypotens"),P("Fever / rash after drug → AIN","AIN","interstitial","rash","fever"),P("Hematuria / frothy urine / edema → GN","hematuria","frothy","edema","glomerul","GN","vasculit"),P("Contrast / nephrotoxin / dark urine → toxic ATN, rhabdo","contrast","rhabdo","dark urine","myoglobin","toxic"),P("Voiding symptoms / stones → obstruction","obstruct","void","stone","flank","prostat","BOO","นิ่ว"),P("Reason given","because","เพราะ","เพื่อ","→","->","คิดถึง","r/o")]})]},
  {info:`BP 96/60 mmHg (supine), 78/50 mmHg (standing); PR 108/min. Dry tongue. Bladder not palpable.<br>BUN 72, Cr 3.2 mg/dL · Na 134, <b>K 6.4</b>, HCO₃⁻ 16 mEq/L · UA: specific gravity 1.025, no protein, no blood, a few hyaline casts · FENa 0.4% · Urine output 0.3 mL/kg/h over the last 12 hours`,
   subs:[B("3. Give the differential diagnosis of her AKI by category, and state which is most likely with your evidence.",5,{
   ans:`• <b>Prerenal (most likely)</b> — volume loss from diarrhea + diuretic, ACEI and NSAID (\"triple whammy\"); orthostatic hypotension, dry tongue, <b>BUN:Cr ≈ 22 (> 20)</b>, <b>FENa < 1%</b>, high urine SG, bland sediment with hyaline casts<br>• <b>Intrinsic renal</b>: ischemic ATN if prolonged (muddy brown casts, FENa > 2%) · NSAID-induced AIN (WBC casts, eosinophiluria)<br>• <b>Postrenal</b>: bladder outlet obstruction — less likely (bladder not palpable); confirm with bladder scan / ultrasound`,
   exp:"FENa < 1% + BUN/Cr > 20 + hyaline cast = prerenal · ถ้ายังไม่แก้จะกลายเป็น ATN · ทำ US ตัด obstruction เสมอในผู้สูงอายุ",
   pts:[P("Prerenal most likely","prerenal","pre-renal"),P("Evidence: FENa < 1% / BUN:Cr > 20 / bland UA / orthostatic","FENa","BUN","ratio","hyaline","orthostat","SG"),P("Triple whammy (ACEI + diuretic + NSAID) + diarrhea","triple","whammy","ACE","NSAID","diuretic","diarrh"),P("Intrinsic: ATN / AIN","ATN","AIN","intrinsic","interstitial","tubular"),P("Postrenal: obstruction (ultrasound)","postrenal","post-renal","obstruct","ultrasound","US")]})]},
  {subs:[B("4. Stage the severity of her AKI. Name the classification and show the criteria you used.",4,{
   ans:`<b>KDIGO AKI stage 3</b><br>• Creatinine 3.2 / baseline 0.9 = <b>3.6 × baseline (≥ 3.0 ×)</b> and Cr ≥ 4.0 not required since ≥ 3 × already = stage 3<br>• Urine output 0.3 mL/kg/h for 12 h = stage 2–3 by urine (stage 3 = < 0.3 for ≥ 24 h or anuria ≥ 12 h) — <b>use the worse of the two → stage 3</b><br>KDIGO: stage 1 = Cr 1.5–1.9 × or ↑ ≥ 0.3 mg/dL in 48 h, UO < 0.5 for 6–12 h · stage 2 = 2.0–2.9 ×, UO < 0.5 ≥ 12 h · stage 3 = ≥ 3.0 × or Cr ≥ 4.0 or RRT, UO < 0.3 ≥ 24 h or anuria ≥ 12 h`,
   exp:"KDIGO ใช้ทั้ง creatinine และ urine output แล้วเอาอันที่แย่กว่า · baseline ภายใน 7 วัน (หรือค่าก่อนหน้าที่น่าเชื่อถือ)",
   pts:[P("KDIGO","KDIGO"),P("Stage 3","stage ?3","stage III","ระยะ ?3"),P("Cr ≥ 3 × baseline (3.6 ×)","3\\.6","≥ ?3","3 ?x","3 ?times","3 เท่า"),P("Uses urine output criterion / worse of the two","urine","UO","0\\.3","worse")]})]}
 ],
 interp:"ระบบ: Nephrology · โรค: Prerenal AKI (triple whammy + diarrhea) with hyperkalemia · ความยาก: ปานกลาง — เริ่มจาก CC เวียนหัว + ปัสสาวะน้อย ต้องซักหายาและสาเหตุเอง แยก prerenal/renal/postrenal และ stage ด้วย KDIGO",
 approach:"CC ปัสสาวะน้อย → ซัก volume loss + ยา (ACEI/ARB, diuretic, NSAID) → ซักหา intrinsic/postrenal → ตรวจ volume + bladder → BUN/Cr, FENa, UA → prerenal → KDIGO stage",
 summary:["Triple whammy = ACEI/ARB + diuretic + NSAID","Prerenal: FENa < 1%, BUN/Cr > 20, UA ใส มี hyaline cast","ATN: FENa > 2%, muddy brown casts · AIN: WBC casts","KDIGO stage 3 = Cr ≥ 3 × baseline หรือ ≥ 4.0 หรือ RRT · UO < 0.3 ≥ 24 ชม. หรือ anuria ≥ 12 ชม.","ใช้ทั้ง Cr และ urine output เอาอันที่แย่กว่า"]},

/* ======================= 21 พ.ย. 2026 (วันเสาร์ · เคสที่ 6) · Pulmonology · Acute exacerbation of COPD (ง่าย) · 5 Part: Hx → PE → Ix → Lab → DDx ======================= */
{day:"2026-11-21",no:6,sec:"MEQ",
 stem:`A 68-year-old man comes to the emergency department because of worsening shortness of breath for 3 days.`,
 parts:[
  {subs:[
   B("1.1 What would you ask about his shortness of breath, and why?",3,{
   ans:`• <b>Onset</b> (sudden → pneumothorax / PE; gradual → exacerbation, heart failure)<br>• <b>Severity / functional limit</b> (at rest, can speak in sentences) → severity<br>• <b>Orthopnea / PND</b> → heart failure<br>• <b>Cough, sputum amount and colour, fever</b> → infective exacerbation / pneumonia<br>• <b>Wheeze</b> → airway disease<br>• <b>Chest pain</b> (pleuritic → PE, pneumothorax; crushing → ACS)<br>• Leg swelling, immobilization → PE / heart failure`,
   exp:"แต่ละคำถามต้องบอกว่าถามเพื่อแยกอะไร",
   pts:[P("Onset (sudden vs gradual)","onset","sudden","gradual","ทันที"),P("Orthopnea / PND (heart failure)","orthopn","PND","heart failure"),P("Cough / sputum / fever (infection)","cough","sputum","fever","ไอ","เสมหะ","ไข้"),P("Wheeze / chest pain","wheez","chest pain","pleuritic"),P("Reason given","because","เพราะ","เพื่อ","→","->","r/o","คิดถึง")]}),
   B("1.2 List 3 symptoms that would suggest a cause other than airway disease.",3,{lim:3,
   ans:`Any 3: <b>orthopnea / PND</b> (heart failure) · <b>leg swelling</b> (heart failure, DVT → PE) · <b>sudden pleuritic chest pain</b> (pneumothorax, PE) · <b>hemoptysis</b> (PE, cancer, TB) · <b>crushing chest pain</b> (ACS) · <b>palpitation</b> (arrhythmia) · weight loss / night sweats (cancer, TB)`,
   exp:"ผู้ป่วย COPD เหนื่อยมากขึ้นไม่จำเป็นต้องเป็น exacerbation เสมอ · ต้องตอบ 3 อย่าง นับเฉพาะ 3 อย่างแรก",
   pts:[G("Non-airway symptoms (3)",3,P("Orthopnea / PND","orthopn","PND"),P("Leg swelling","leg","swell","edema","ขาบวม"),P("Sudden pleuritic chest pain","pleuritic","sudden","chest pain"),P("Hemoptysis","hemopty","ไอเป็นเลือด"),P("Crushing chest pain","crush","ACS","angina"),P("Palpitation","palpitat","ใจสั่น"),P("Weight loss / night sweats","weight","night sweat","น้ำหนักลด"))]})]},
  {info:`He is an ex-smoker of 50 pack-years with known COPD on tiotropium. His sputum has increased in amount and turned yellow-green. He had 2 exacerbations last year, one needing admission. No orthopnea, leg swelling or chest pain.`,
   subs:[
   B("2.1 List 4 signs you would look for to assess the severity of his respiratory distress.",4,{lim:4,
   ans:`Any 4: <b>respiratory rate</b> · <b>SpO₂ / cyanosis</b> · <b>use of accessory muscles</b> / intercostal retraction · <b>ability to speak in sentences</b> · <b>consciousness / drowsiness</b> (CO₂ narcosis) · <b>paradoxical abdominal breathing</b> · heart rate · BP · flapping tremor (asterixis) · silent chest`,
   exp:"สัญญาณ severe: พูดไม่เป็นประโยค, ใช้กล้ามเนื้อช่วยหายใจ, paradoxical breathing, ซึม (CO₂ คั่ง) · ต้องตอบ 4 อย่าง",
   pts:[G("Severity signs (4)",4,P("Respiratory rate","RR","respiratory rate","อัตราการหายใจ"),P("SpO₂ / cyanosis","SpO","cyanos","O2 sat","เขียว"),P("Accessory muscle use / retraction","accessory","retract","กล้ามเนื้อช่วย"),P("Ability to speak in sentences","speak","sentence","พูด"),P("Consciousness / drowsiness","conscious","drows","confus","GCS","ซึม"),P("Paradoxical breathing","paradox"),P("Heart rate / BP","heart rate","\\bHR\\b","pulse","\\bBP\\b","ชีพจร"),P("Asterixis / flapping tremor","asterix","flapping"),P("Silent chest","silent"))]}),
   B("2.2 Which physical signs would suggest pneumothorax or heart failure instead?",3,{
   ans:`<b>Pneumothorax</b>: unilateral decreased breath sounds, hyperresonance, tracheal deviation (tension), asymmetric chest movement<br><b>Heart failure</b>: raised JVP, S3 gallop, bilateral basal fine crackles, pitting leg edema, displaced apex, hepatomegaly`,
   exp:"COPD มี bulla → pneumothorax ได้ง่าย และมี cor pulmonale/HF ร่วมบ่อย",
   pts:[P("Pneumothorax: unilateral ↓ breath sounds / hyperresonance / tracheal shift","unilateral","hyperreson","trachea","decreased breath","asymmetr"),P("Heart failure: raised JVP / S3 / basal crackles / edema","JVP","S3","crackle","edema","gallop")]})]},
  {info:`BT 37.9 °C, PR 112/min, BP 138/84 mmHg, RR 28/min, SpO₂ 86% on room air. He speaks in short phrases and uses accessory muscles. Diffuse expiratory wheeze with prolonged expiration; no focal crackles; breath sounds equal on both sides. Alert, no asterixis.`,
   subs:[
   B("3.1 What investigations will you send?",3,{
   ans:`<b>ABG</b> · <b>chest X-ray</b> · <b>CBC</b> · electrolytes, BUN/Cr, glucose · <b>ECG</b> (arrhythmia, ischemia, cor pulmonale) · sputum Gram stain/culture (if purulent, severe, or recent antibiotics) · ± troponin / BNP, D-dimer or CTPA if PE suspected · ± influenza / COVID test`,
   exp:"ใน AECOPD ที่ admit: ABG, CXR, ECG, CBC, electrolytes เป็นพื้นฐาน",
   pts:[P("ABG","ABG","arterial blood gas","blood gas"),P("Chest X-ray","CXR","chest x","film"),P("CBC / electrolytes / renal function","CBC","electrolyte","BUN","Cr"),P("ECG","ECG","EKG"),P("Sputum culture / viral test","sputum","culture","gram","influenza","COVID")]}),
   B("3.2 Why is an arterial blood gas needed in this patient?",2,{
   ans:`SpO₂ 86% and moderate–severe distress in a COPD patient (likely <b>chronic CO₂ retainer</b>) → ABG shows <b>hypercapnia and respiratory acidosis</b> (pH < 7.35 + PaCO₂ > 45 = indication for <b>non-invasive ventilation</b>), guides the <b>oxygen target 88–92%</b>, and checks response to treatment`,
   exp:"SpO₂ บอก PaCO₂ ไม่ได้ · ให้ O₂ มากไปใน CO₂ retainer ทำให้ CO₂ คั่งมากขึ้น",
   pts:[P("Detect hypercapnia / respiratory acidosis","hypercap","CO2","CO₂","acidos","pH"),P("Decide NIV","NIV","non.?invasive","BiPAP"),P("Guide O₂ target 88–92%","88","92","target","O2","oxygen")]})]},
  {info:`ABG on room air: pH 7.30, PaCO₂ 62 mmHg, PaO₂ 52 mmHg, HCO₃⁻ 30 mEq/L · CBC: WBC 12,400/µL (N 82%) · CXR: no infiltrate, no pneumothorax.`,
   subs:[
   B("4.1 Interpret the ABG. Is the respiratory acidosis acute, chronic, or acute-on-chronic?",4,{
   ans:`<b>Respiratory acidosis with hypoxemia</b><br>Expected HCO₃⁻ for PaCO₂ 62 (↑22): acute ≈ 24 + 2.2 = 26; chronic ≈ 24 + 7.7 ≈ 32 (or 24 + 0.35 × 22)<br>Measured HCO₃⁻ 30 and pH 7.30 lie between → <b>acute-on-chronic respiratory acidosis</b> (type 2 respiratory failure)`,
   exp:"Acute: HCO₃ ↑ 1 ต่อ PaCO₂ ↑ 10 · Chronic: ↑ 3.5–4 ต่อ 10 · อยู่ระหว่าง = acute on chronic",
   pts:[P("Respiratory acidosis","respiratory acidos"),P("Hypoxemia / type 2 respiratory failure","hypox","type ?2","type II","respiratory failure"),P("Acute-on-chronic","acute.on.chronic","acute on top"),P("Compensation calculation","expected","1 ?per","3\\.5","0\\.35","calculat","26","32")]}),
   B("4.2 List 3 features of hyperinflation you would expect on his chest X-ray.",3,{lim:3,
   ans:`Any 3: <b>more than 6 anterior (or 10 posterior) ribs</b> visible above the diaphragm · <b>flattened hemidiaphragms</b> · <b>increased retrosternal air space</b> (lateral film) · <b>narrow, vertical (tubular) heart</b> · increased AP diameter · hyperlucent lung fields · bullae`,
   exp:"ต้องตอบ 3 อย่าง นับเฉพาะ 3 อย่างแรก",
   pts:[G("Hyperinflation features (3)",3,P("> 6 anterior / > 10 posterior ribs","rib","6","10","ซี่"),P("Flattened diaphragm","flat","diaphragm","กะบังลม"),P("Increased retrosternal space","retrosternal"),P("Narrow vertical heart","narrow","vertical","tubular","heart"),P("Increased AP diameter","AP diameter","barrel"),P("Hyperlucency","hyperlucen","lucen","dark"),P("Bullae","bulla"))]})]},
  {subs:[B("5. Give 3 conditions that can mimic or trigger this exacerbation which you must consider.",3,{lim:3,
   ans:`Any 3: <b>pneumonia</b> · <b>pulmonary embolism</b> · <b>heart failure / cardiogenic pulmonary edema</b> · <b>pneumothorax</b> · <b>acute coronary syndrome / arrhythmia (AF)</b> · pleural effusion · drugs (sedatives, β-blockers) · lung cancer`,
   exp:"GOLD แนะนำให้หาโรคเหล่านี้เสมอใน AECOPD โดยเฉพาะเมื่อไม่ตอบสนองต่อการรักษา",
   pts:[G("Mimics / triggers (3)",3,P("Pneumonia","pneumonia","ปอดอักเสบ"),P("Pulmonary embolism","pulmonary emb","\\bPE\\b","embol"),P("Heart failure","heart failure","HF","pulmonary edema","CHF"),P("Pneumothorax","pneumothorax"),P("ACS / arrhythmia","ACS","MI","arrhythm","AF","atrial"),P("Pleural effusion","effusion"),P("Sedative / β-blocker","sedat","beta","β"),P("Lung cancer","cancer","malignan","tumor"))]})]}
 ],
 interp:"ระบบ: Pulmonology · โรค: Acute exacerbation of COPD with acute-on-chronic type 2 respiratory failure · ความยาก: ง่าย — เริ่มจาก CC เหนื่อย ต้องซักแยก airway vs non-airway เอง ประเมินความรุนแรง ส่งตรวจ แปล ABG/CXR และนึกถึงโรคที่เลียนแบบ",
 approach:"CC เหนื่อย 3 วัน → ซักลักษณะ dyspnea + ประวัติ COPD/สูบบุหรี่/exacerbation เดิม + อาการที่ไม่ใช่ airway → ประเมิน severity + หา pneumothorax/HF → ABG, CXR, ECG → acute-on-chronic resp acidosis → DDx pneumonia/PE/HF/pneumothorax/ACS",
 summary:["AECOPD: dyspnea ↑, sputum ↑, sputum purulent (Anthonisen)","Severe: พูดไม่เป็นประโยค, accessory muscle, paradoxical breathing, ซึม","ABG: pH < 7.35 + PaCO₂ > 45 = NIV · O₂ target 88–92%","Acute HCO₃ ↑ 1 / PaCO₂ 10 · chronic ↑ 3.5 / 10","ไม่ทำ spirometry ช่วงกำเริบ · หา pneumonia/PE/HF/pneumothorax เสมอ"]},

/* ======================= 22 พ.ย. 2026 (วันอาทิตย์ · เคสที่ 7) · Neurology · Acute ischemic stroke (ซับซ้อน) · 5 Part: Hx → Lab/imaging → Dx → DDx → Mx ======================= */
{day:"2026-11-22",no:7,sec:"MEQ",
 stem:`A 58-year-old man is brought to the emergency department because he suddenly could not move his right arm and leg.`,
 parts:[
  {subs:[B("1. List 4 history items you must ask first because they decide acute treatment.",4,{lim:4,
   ans:`Any 4: <b>time last known well</b> (exact onset time) · <b>anticoagulant use</b> (warfarin, DOAC — last dose) · <b>previous stroke / intracranial hemorrhage</b> · <b>recent major surgery, trauma or head injury</b> · <b>active bleeding</b> (GI/GU) · <b>seizure at onset</b> (Todd's paralysis) · <b>diabetes / hypoglycemia</b> · <b>pre-stroke functional status</b> (mRS) · headache / vomiting (hemorrhage)`,
   exp:"คำถามแรกสำคัญที่สุด = last known well (เพื่อดู window ของ thrombolysis 4.5 ชม. / thrombectomy 24 ชม.) · ต้องตอบ 4 อย่าง นับเฉพาะ 4 อย่างแรก",
   pts:[G("Acute-treatment history items (4)",4,P("Time last known well / onset time","last known well","LKW","onset","time","เวลา"),P("Anticoagulant use","anticoag","warfarin","DOAC","ยาละลาย","ยาต้านการแข็งตัว"),P("Previous stroke / ICH","previous stroke","ICH","hemorrhage","stroke"),P("Recent surgery / trauma / head injury","surgery","trauma","head injury","ผ่าตัด"),P("Active bleeding","bleed","เลือดออก"),P("Seizure at onset","seizure","ชัก","Todd"),P("Diabetes / hypoglycemia","diabet","glucose","hypoglyc","DTX"),P("Pre-stroke function (mRS)","function","mRS","baseline","ADL"),P("Headache / vomiting","headache","vomit","ปวดหัว"))]})]},
  {info:`He was last seen well at 08:10 while having breakfast with his wife; he arrived at 09:00. He has hypertension and atrial fibrillation and takes no anticoagulant. No previous stroke, bleeding, surgery or seizure.<br>BP 178/96 mmHg, PR 96/min irregular. He cannot speak or follow commands; eyes deviated to the left; right face, arm and leg weakness (grade 0–1/5); right hemianopia. NIHSS 20.<br>Capillary glucose 132 mg/dL · platelets 210,000/µL · INR 1.0<br>Non-contrast CT brain (09:12): no hemorrhage, early loss of the left insular ribbon, ASPECTS 9 · CT angiography: occlusion of the left M1 middle cerebral artery`,
   subs:[
   B("2.1 Interpret the CT brain and CT angiography.",3,{
   ans:`• <b>No intracranial hemorrhage</b> → ischemic stroke, eligible for thrombolysis<br>• Early ischemic change (loss of insular ribbon) but <b>small infarct core — ASPECTS 9</b> (≥ 6 = favourable)<br>• <b>Large vessel occlusion: left M1 MCA</b> → candidate for mechanical thrombectomy`,
   exp:"CT แรกมีไว้ตัด hemorrhage · ASPECTS 10 = ปกติ, ลบ 1 ต่อแต่ละบริเวณ MCA ที่เสีย · LVO = thrombectomy",
   pts:[P("No hemorrhage","no hemorrh","no bleed","ไม่มีเลือดออก","no ICH"),P("ASPECTS 9 / small core","ASPECTS","9","core","early ischem"),P("Left M1 MCA occlusion / LVO","M1","MCA","LVO","large vessel","occlu")]}),
   B("2.2 Interpret the blood tests relevant to thrombolysis.",2,{
   ans:`Glucose 132 mg/dL — no hypoglycemia (< 50) mimic or contraindication · Platelets 210,000 (≥ 100,000) · INR 1.0 (≤ 1.7) — <b>no laboratory contraindication to IV thrombolysis</b>. (Do not delay thrombolysis waiting for platelet/INR if no anticoagulant use or known coagulopathy — only glucose is mandatory)`,
   exp:"ก่อนให้ยาละลายลิ่มเลือดต้องรู้ glucose เท่านั้น · plt < 100,000 หรือ INR > 1.7 = ห้ามให้",
   pts:[P("Glucose normal (no hypoglycemia)","glucose","DTX","hypoglyc","132"),P("Platelet ≥ 100,000 / INR ≤ 1.7","platelet","INR","1\\.7","100"),P("No contraindication to thrombolysis","no contraindic","eligible","ให้ได้","can give")]})]},
  {subs:[
   B("3.1 Where is the lesion?",2,{
   ans:`<b>Left middle cerebral artery territory</b> (left M1 — cortical and subcortical: frontal, parietal, temporal lobes and internal capsule) of the <b>dominant hemisphere</b>`,
   exp:"Aphasia = dominant hemisphere (ซ้ายในคนถนัดขวาเกือบทั้งหมด)",
   pts:[P("Left MCA territory","left","MCA","middle cerebral"),P("Dominant hemisphere","dominant")]}),
   B("3.2 List 3 clinical findings that support your localization.",3,{lim:3,
   ans:`Any 3: <b>global aphasia</b> (dominant hemisphere) · <b>right hemiplegia including face and arm</b> (face/arm ≥ leg) · <b>gaze deviation to the left</b> (toward the lesion, frontal eye field) · <b>right homonymous hemianopia</b> (optic radiation) · right hemisensory loss`,
   exp:"Eyes look toward the lesion in cortical stroke · ต้องตอบ 3 อย่าง",
   pts:[G("Localizing findings (3)",3,P("Aphasia","aphasia","speak"),P("Right hemiplegia / face-arm weakness","hemipleg","hemipares","right","weak","face"),P("Gaze deviation to the left","gaze","deviat","eye"),P("Right homonymous hemianopia","hemianop","visual field"),P("Right hemisensory loss","sensory"))]})]},
  {subs:[
   B("4.1 Give 3 stroke mimics you must consider, and how you would exclude each.",4,{lim:3,
   ans:`Any 3, each with how to exclude:<br>• <b>Hypoglycemia</b> — capillary glucose (132 → excluded)<br>• <b>Seizure with Todd's paralysis</b> — witnessed seizure, tongue bite, history of epilepsy (none)<br>• <b>Intracranial hemorrhage / tumor / subdural hematoma</b> — CT brain (excluded)<br>• <b>Complicated migraine</b> — history of migraine aura, headache<br>• Conversion disorder · Bell's palsy (face only) · hypertensive encephalopathy · CNS infection`,
   exp:"Mimic ที่ต้องตัดก่อนให้ยา: hypoglycemia (DTX), hemorrhage (CT) · ต้องตอบ 3 อย่าง พร้อมวิธีตัดออก",
   pts:[G("Stroke mimics (3)",3,P("Hypoglycemia","hypoglyc","น้ำตาลต่ำ"),P("Seizure / Todd's paralysis","seizure","Todd","ชัก"),P("Hemorrhage / tumor / subdural","hemorrh","tumor","subdural","SDH","mass"),P("Migraine","migraine"),P("Conversion / functional","conversion","functional","psychogen"),P("Bell's palsy","bell"),P("Hypertensive encephalopathy / infection","hypertensive enceph","PRES","infection","encephalitis","meningitis")),P("How to exclude each (glucose, CT, history)","glucose","DTX","CT","history","exclude","ตัด")]}),
   B("4.2 Can ischemic stroke be distinguished from hemorrhagic stroke clinically?",2,{
   ans:`<b>No</b> — headache, vomiting, reduced consciousness and very high BP favour hemorrhage, but no clinical feature is reliable; <b>non-contrast CT (or MRI) is required</b> before any antithrombotic or thrombolytic treatment`,
   exp:"ต้องทำ CT ทุกราย ห้ามตัดสินจากอาการ",
   pts:[P("No","no","not","ไม่"),P("Need CT / MRI","CT","MRI","imaging")]})]},
  {subs:[B("5. List 4 immediate management steps in order, with the reason for each.",6,{lim:4,
   ans:`Any 4, in a sensible order, each with a reason:<br>1. <b>Keep BP < 185/110 before thrombolysis</b> (here 178/96 — acceptable) and <b>< 180/105 for 24 h after</b> — lowers hemorrhagic transformation<br>2. <b>IV thrombolysis now</b> — within 4.5 h of last known well (≈ 1 h), no contraindication: alteplase 0.9 mg/kg (max 90 mg; 10% bolus, rest over 60 min) or tenecteplase 0.25 mg/kg bolus (max 25 mg)<br>3. <b>Mechanical thrombectomy</b> — LVO (M1) + NIHSS ≥ 6 + ASPECTS ≥ 6 within 6 h (do not wait to see the response to thrombolysis)<br>4. <b>Admit to stroke unit / ICU</b> with neuro checks and BP monitoring; NPO until <b>swallowing screen</b> (aspiration)<br>5. No antiplatelet/anticoagulant for 24 h after thrombolysis; repeat CT at 24 h<br>6. Later: <b>DOAC for AF</b> (timing by infarct size), statin, rehabilitation`,
   exp:"Time is brain — door-to-needle ≤ 60 นาที · ให้ thrombolysis แล้วส่ง thrombectomy ต่อทันที · ต้องตอบ 4 อย่าง นับเฉพาะ 4 อย่างแรก แต่ละข้อมีเหตุผล",
   pts:[G("Management steps (4)",4,P("BP target < 185/110 (then < 180/105)","185","180","BP"),P("IV thrombolysis (alteplase / tenecteplase)","thromboly","alteplase","rt-?PA","tenecteplase","TNK","rtPA"),P("Mechanical thrombectomy","thrombectomy","endovascular","EVT"),P("Stroke unit / monitoring","stroke unit","ICU","monitor","neuro ?check"),P("NPO / swallowing screen","NPO","swallow","กลืน"),P("No antithrombotic 24 h / repeat CT","24 ?h","repeat CT","no antiplatelet"),P("DOAC / statin / rehab later","DOAC","anticoag","statin","rehab")),P("Reason given for each","because","เพราะ","เพื่อ","within","window","LVO","reduce","ป้องกัน")]})]}
 ],
 interp:"ระบบ: Neurology · โรค: Acute ischemic stroke, left M1 MCA occlusion (cardioembolic from AF) · ความยาก: ซับซ้อน — เริ่มจาก CC แขนขาขวาอ่อนแรงเฉียบพลัน ต้องรู้ว่าต้องถามอะไรก่อนให้ยา แปล CT/CTA และแลป localize รอยโรค แยก mimic และสั่งการรักษาตามลำดับ",
 approach:"CC อ่อนแรงเฉียบพลัน → last known well + anticoagulant + contraindication → DTX + CT non-contrast + CTA → ไม่มีเลือดออก + LVO → localize left MCA (aphasia, gaze, hemianopia) → ตัด mimic → BP < 185/110 → IV thrombolysis + thrombectomy → stroke unit → DOAC, statin, rehab",
 summary:["คำถามแรก = last known well · thrombolysis ≤ 4.5 ชม. · thrombectomy ≤ 6 ชม. (ถึง 24 ชม. ถ้าภาพเข้าเกณฑ์)","ก่อนให้ยาต้องรู้ glucose · plt ≥ 100,000 · INR ≤ 1.7","Gaze deviation ไปทางรอยโรค + aphasia = MCA ซีก dominant","BP < 185/110 ก่อนให้ยา · < 180/105 × 24 ชม. หลังให้","AF + stroke → DOAC (ไม่ต้องให้ aspirin ร่วม)"]}

);

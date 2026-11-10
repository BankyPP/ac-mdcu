(function(){
/* SI Med OSCE — SI129 Rotate 405–408 ส่วน SEQ — ไฟล์ k129.pdf "Key_129 Many Ro MCQ OSCE SI129 MCQ SEQ Key" (โค้ด SIOS129B) หน้า 10–12 · ฉบับไม่มีคีย์ s129.pdf ใช้เทียบข้อความ
   หัวไฟล์ (หน้า 1) "Medicine 1 SIMD 415 Rotate 405-408 Multiple Choice & SEQ 14-15 OCT 2021 3 hours · THIS PAPER SCORES 55 MARKS. (MCQ 30, SEQ 25)"
   หน้า 10 หัวตาราง "PART3 SEQ ไม่ต้องเรียงข้อจำข้อไหนได้ใส่เลย" — recall เป็นแถว 1–16 มีหัวข้อคำถามย่อยในช่อง A, B, C · MCQ หน้า 1–9 ลงแยกใน data_b32.js
   ผู้ใช้กำหนด: SEQ = OSCE (sec:"SEQ", orig:"SEQ n") · ไฟล์ไม่มีเฉลย SEQ ตรง ๆ — มีแค่ลายมือ/สไลด์ที่ผู้จดแปะ (ใช้เป็นแนวทาง ถอดลง notes และครอปเป็น kimg) → key:NK เป็นหลัก ข้อย่อยที่มีคำตอบเขียนไว้ระบุใน key
   ข้าม: SEQ 13 และ SEQ 16 แถวว่างทั้งแถว · ไม่มีฐานพัก
   รูปในโจทย์: ไฟล์ไม่มีรูปข้อสอบจริง ยกเว้น SEQ 12 (Gram stain ที่ผู้จดแปะ มีลูกศร ไม่มีคำตอบติด) และ SEQ 9 (ภาพผื่นจากสไลด์ที่ผู้จดแปะ ครอปหลบหัวข้อสไลด์ที่เป็นคำตอบ) · ที่เหลือ NOIMG
   SEQ 6 ภาพเอกซเรย์ที่แปะมีป้ายคำตอบทับ → ใช้เป็น kimg เท่านั้น · SEQ 10 ลายมือ "ไปดูหน้าสุดท้าย" = หน้า 33 ของไฟล์ (ABG infographic) → ต่อภาพเป็น kimg
   marks: ไฟล์ไม่บอกคะแนนรายข้อ (SEQ รวม 25 คะแนน) → Claude กำหนดข้อละ 1–2 คะแนน
   recall ส่วนใหญ่สั้นมาก (หัวข้อ + คำถามย่อย) → ประวัติ/ค่าที่ Claude เติมระบุใน flag ทุกสถานี */
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)";
const P=(t,...re)=>({t,re});
const G=(label,need,...opts)=>({label,need,opts});
const H=(label,w)=>({h:label,w});
const CR=x=>Object.assign(x,{crit:1});
function B(q,marks,o){const pts=[],kw=[],crit=[],secs=[];(o.pts||[]).forEach(p=>{if(p.h){secs.push([p.h,pts.length,p.w||0]);return;}
  if(p.crit)crit.push(pts.length);
  if(p.opts){pts.push({label:p.label,any:p.opts.map(x=>x.t),need:p.need});kw.push(p.opts.map(x=>x.re));}else{pts.push(p.t);kw.push(p.re);}});
  const s=Object.assign({q,marks,key:NK},o);delete s.pts;s.points=pts;s.kw=kw;if(crit.length)s.crit=crit;if(secs.length)s.secs=secs;return s;}
const S=(...subs)=>[{subs}];
const NOIMG="ไม่มีรูปในไฟล์ — ข้อนี้ฝึกบรรยายสิ่งที่คาดว่าจะเห็น";
const Co=o=>Object.assign({set:"SI129",ro:"Ro405–408",file:"SIOS129B",sec:"SEQ",opinion:""},o);
QB.push(

/* ===== SEQ 1 ===== */
Co({page:10,orig:"SEQ 1",topic:"micro",sub:"AFB",title:"Long-term steroid use with a cavitary lung nodule — sputum smear (modified acid-fast stain)",
 seen:"SI128 Ro401–404 ข้อ 5 (sputum acid-fast stain — คนละโจทย์ เรื่องใกล้กัน)",
 stem:"A 55-year-old man who has received long-term prednisolone for nephrotic syndrome presents with fever and productive cough for 3 weeks. His chest radiograph shows a cavitary nodule in the right upper lobe. A sputum smear stained with a modified acid-fast stain is obtained (the image is not available in the file).<br>1.1 Interpret the sputum smear (describe the expected finding).<br>1.2 Give the most likely organism.",
 gray:"1. แปลผล sputum (น่าจะ MAF) — A. B. C. D. E. (ช่องคำถามย่อยว่าง)",
 flag:"NOIMG · recall มีแค่ \"แปลผล sputum (น่าจะ MAF)\" — ประวัติผู้ป่วยและข้อย่อย 1.2 Claude เติม (ตีความ MAF = modified acid-fast stain ซึ่งใช้หา Nocardia)",
 notes:"ไม่มีลายมือ/สไลด์ของข้อนี้ (สไลด์ที่ทับแถวนี้เป็นโน้ตของ SEQ 2)",
 parts:S(
  B("1.1 Interpret the sputum smear stained with modified acid-fast stain.",1,{tags:["micro"],
   ans:"Modified acid-fast stain (Kinyoun ที่ล้างสีด้วยกรดอ่อน 0.5–1% H2SO4): เห็น <b>thin, beaded, branching filamentous bacilli</b> ติดสีแดงบางส่วน (<b>partially/weakly acid-fast</b>) บนพื้นสีน้ำเงิน ± มี PMN",
   exp:"Nocardia เป็น aerobic actinomycete ที่ Gram บวกแบบเป็นจุด (beaded) แตกกิ่ง · ติดสี modified AFB (เพราะผนังมี mycolic acid สายสั้น) แต่<b>ไม่ติดสี Ziehl-Neelsen มาตรฐาน</b> · Actinomyces แตกกิ่งเหมือนกันแต่ <b>ไม่ติด</b> modified AFB และเป็น anaerobe · Mycobacterium tuberculosis เป็นแท่งตรงไม่แตกกิ่ง ติดสี AFB แรง",
   rubric:"ได้เต็ม = branching + beaded filament + partially acid-fast · ตอบแค่ \"AFB positive\" ได้น้อย · ตอบ acid-fast straight rods (แบบ TB) = ผิด",
   pts:[CR(P("Branching filamentous bacilli","branch","แตกกิ่ง","filament","เส้นใย")),P("Beaded appearance","bead","เป็นจุด","ลูกปัด"),P("Partially / weakly acid-fast (red) on modified stain","partial","weak","acid.?fast","ติดสีแดง","modified")]}),
  B("1.2 Give the most likely organism.",1,{tags:["micro"],flag:"ข้อย่อยนี้ Claude เติม",
   ans:"<b>Nocardia</b> spp. (pulmonary nocardiosis เช่น N. asteroides complex, N. farcinica)",
   exp:"ปัจจัยเสี่ยง: <b>steroid ระยะยาว</b>, transplant, malignancy, HIV · ปอด: nodule/cavity/consolidation · แพร่กระจายไป<b>สมอง</b> (brain abscess) และผิวหนังได้ → ทำ <b>MRI/CT brain ทุกราย</b> · รักษา: <b>TMP-SMX</b> (± imipenem หรือ amikacin ในรายรุนแรง/CNS) นาน 6–12 เดือน · ยืนยันด้วย culture (โตช้า 2–7 วัน แจ้งแลปให้เลี้ยงนาน) และ MALDI-TOF/16S",
   rubric:"ได้เต็ม = Nocardia · ตอบ Actinomyces หรือ M. tuberculosis = ไม่ได้คะแนน",
   pts:[CR(P("Nocardia","nocardia","โนคาร์เดีย"))]})
 ),
 interp:"สถานีอ่าน modified AFB: ภาพ branching beaded partially acid-fast ในผู้ได้ steroid = Nocardia",
 summary:["Nocardia: Gram บวก beaded branching + partially acid-fast บน modified AFB","Actinomyces แตกกิ่งแต่ไม่ติด acid-fast และเป็น anaerobe","ผู้ได้ steroid + cavity ในปอด → นึกถึง Nocardia, TB, fungus","Nocardia ต้องหา brain abscess ทุกราย · รักษา TMP-SMX 6–12 เดือน"]}),

/* ===== SEQ 2 ===== */
Co({page:10,orig:"SEQ 2",topic:"lab",sub:"CKD diet",title:"Choosing a seasoning sauce for a patient with stage 5 chronic kidney disease",kimg:["os129b_k2"],
 stem:"A patient with chronic kidney disease stage 5 who is not yet on dialysis asks which seasoning sauce to use at home.<br>Sauce A: sodium 520 mg per tablespoon.<br>Sauce B: sodium 350 mg per teaspoon.<br>2.1 Which sauce should be recommended?<br>2.2 Explain why.<br>2.3 If sauce A is used, how many tablespoons per day can the patient consume?",
 gray:"2. ซอสให้ CKD stage 5 อันไหนดี มี A:Na 520 mg/ ช้อนโต๊ะมี , B : Na ____mg / ช้อนชา — A. ให้อะไรดี B. เพราะอะไร C. ถ้าให้ A หนึ่งวันจะกินได้กี่ช้อนโต๊ะ",
 flag:"ค่าโซเดียมของซอส B ในไฟล์เว้นว่าง (\"____ mg/ช้อนชา\") — Claude ใส่ 350 mg/ช้อนชา ให้คำนวณเทียบได้ · sub \"CKD diet\" เพิ่มใหม่ (ไม่มีในรายการ)",
 notes:"ลายมือ: \"NaCl 1 ช้อนชา = NaCl 5 g ~ Na 2 g\"<br>สไลด์ Protein intake in kidney diseases (g/kg/day): no CKD 0.8 (RDA) · CKD GFR &lt; 30: 0.6–0.8 (avoid &gt; 1.3), low-protein diet · CKD 0.3–0.4 very-low-protein diet + EAA/KA supplement · CAPD 1.2–1.5 · HD 1.2–1.4 · AKI non-stress 0.8–1.0, AKI on RRT high stress 1.0–1.5, CRRT up to 1.7 (KDIGO 2012/2013, ESPEN)<br>สไลด์ Sodium: mild–moderate CKD Na &lt; 4 g (174 mmol), &lt; 3 g (131 mmol) ถ้ามี HT · advanced CKD หรือ dialysis Na &lt; 3 g (131 mmol) · หลีกเลี่ยง &lt; 1.5 g (87 mmol) ถ้าเสี่ยง hyponatremia<br>สไลด์ Potassium intake in CKD (NEJM 2017): ผักผลไม้เป็นแหล่ง K และดีต่อสุขภาพ · ประชากรทั่วไปแนะนำ K 4.7 g/day (120 mmol) · จำกัด K เฉพาะ CKD ที่มี hyperkalemia (K &gt; 5.5) แนะนำ 3 g/day (&lt; 77 mmol) · ไม่ควรตัดผักผลไม้จนท้องผูก (เพิ่มการดูดซึม K จากลำไส้)",
 parts:S(
  B("2.1 Which sauce should be recommended?",1,{tags:["lab"],
   ans:"<b>ซอส A</b>",
   exp:"เทียบหน่วยเดียวกันก่อน: 1 ช้อนโต๊ะ = 3 ช้อนชา → ซอส B = 350 × 3 = <b>1,050 mg Na ต่อช้อนโต๊ะ</b> สูงกว่าซอส A (520 mg) ราว 2 เท่า",
   rubric:"ได้เต็มเมื่อตอบ A พร้อมเทียบหน่วย · ตอบ B เพราะเห็นตัวเลขน้อยกว่า = ผิด",
   pts:[CR(P("Sauce A","ซอส ?a\\b","sauce ?a\\b","ซอส ?เอ","ยี่ห้อ ?a\\b"))]}),
  B("2.2 Explain why.",2,{tags:["lab"],
   ans:"<ul><li>เทียบต่อปริมาตรเท่ากัน ซอส B มีโซเดียม 1,050 mg/ช้อนโต๊ะ ซอส A 520 mg/ช้อนโต๊ะ → <b>A โซเดียมต่ำกว่า</b></li><li>CKD ระยะ 5 ขับโซเดียมได้น้อย โซเดียมเกินทำให้ <b>ความดันสูง บวม น้ำเกิน หัวใจวาย</b> และโปรตีนรั่วมากขึ้น · KDIGO 2024 แนะนำโซเดียม &lt; 2 g/วัน</li><li>ระวังซอส/เกลือสูตร \"ลดโซเดียม\" ที่ใช้ <b>KCl แทน</b> → hyperkalemia ใน CKD 5</li></ul>",
   exp:"การแปลงหน่วย: NaCl 1 ช้อนชา ≈ 5 g ≈ Na 2 g (ลายมือในไฟล์) · Na (mg) × 2.5 ≈ NaCl (mg) · Na 1 g ≈ 43.5 mmol · CKD จำกัดโปรตีน 0.6–0.8 g/kg/day ใน non-dialysis GFR &lt; 30 (ไม่มีเบาหวาน อาจ 0.55–0.6 หรือ VLPD + keto-analog) และจำกัด K/P ตามระดับในเลือด",
   rubric:"ต้องมีการเทียบหน่วย (ช้อนชา × 3 = ช้อนโต๊ะ) และเหตุผลทางคลินิก (โซเดียมเกิน → HT, edema, volume overload) · พูดถึง KCl ใน low-sodium salt ได้คะแนนเพิ่ม",
   pts:[CR(P("Compare per same volume: 1 tablespoon = 3 teaspoons → B has more sodium","ช้อนชา","teaspoon","3 เท่า","x ?3","× ?3","1,?050","สามเท่า")),P("Sodium excess in CKD → hypertension, edema, volume overload","ความดัน","hypertens","บวม","edema","volume","น้ำเกิน","overload"),P("Target sodium intake &lt; 2 g/day","2 ?g","2,?000","2 กรัม"),P("Beware potassium in low-sodium (KCl) substitutes","kcl","โพแทสเซียม","potassium","hyperkal")]}),
  B("2.3 If sauce A is used, how many tablespoons per day can the patient consume?",1,{tags:["lab"],
   ans:"เป้าโซเดียม <b>&lt; 2,000 mg/วัน</b> (KDIGO 2024) → 2,000 ÷ 520 ≈ 3.8 → <b>ไม่เกิน 3 ช้อนโต๊ะต่อวัน</b> ถ้าเป็นแหล่งโซเดียมเดียว (จริงควรน้อยกว่านี้ เพราะอาหารอื่นมีโซเดียมอยู่แล้ว)",
   exp:"ถ้าใช้เกณฑ์ในสไลด์ที่ผู้จดแปะ (advanced CKD Na &lt; 3 g) จะได้ 3,000 ÷ 520 ≈ 5 ช้อนโต๊ะ · ข้อสอบน่าจะต้องการให้แสดงวิธีคิด เป้าโซเดียม ÷ โซเดียมต่อช้อน และปัดลง",
   rubric:"ได้เต็มเมื่อแสดงการคำนวณจากเป้าโซเดียมที่ระบุ (2 g → ≤ 3 ช้อน หรือ 3 g → ≤ 5 ช้อน) และปัดลง · ตอบตัวเลขโดยไม่มีที่มาได้ครึ่ง",
   pts:[CR(P("Calculation: sodium target ÷ 520 mg (about 3 tablespoons with 2 g/day)","520","3 ช้อน","3 tablespoon","3 tbsp","3\\.8","สามช้อน")),P("Round down; other foods also contain sodium","ปัดลง","อาหารอื่น","other food","น้อยกว่า")]})
 ),
 interp:"สถานีโภชนบำบัด CKD: เทียบหน่วยช้อนชา–ช้อนโต๊ะ คำนวณโซเดียมตามเป้า และรู้ข้อจำกัดเกลือทดแทน KCl",
 summary:["1 ช้อนโต๊ะ = 3 ช้อนชา · NaCl 1 ช้อนชา ≈ 5 g ≈ Na 2 g","CKD: โซเดียม &lt; 2 g/วัน (KDIGO 2024)","เกลือ/ซอสลดโซเดียมมักใช้ KCl → ระวัง hyperkalemia ใน CKD ระยะท้าย","โปรตีน CKD ไม่ล้างไต 0.6–0.8 g/kg/day · ล้างไต 1.0–1.2 g/kg/day ขึ้นไป"]}),

/* ===== SEQ 3 ===== */
Co({page:10,orig:"SEQ 3",topic:"micro",sub:"Stool exam",title:"Diarrhea after self-medication",
 stem:"A 50-year-old woman bought an antibiotic (amoxicillin–clavulanate) from a pharmacy for a sore throat and took it herself for 7 days. Two days later, she developed watery diarrhea 6–8 times a day, low-grade fever, and lower abdominal cramps.<br>3.1 What is the most likely causative organism?<br>3.2 What investigation would you send?<br>3.3 How would you treat her?",
 gray:"3. ท้องเสีย ซื้อยามากินเอง — A. เชื้ออะไร B. ส่ง investigation อะไร C. treat ยังไง",
 flag:"recall มีแค่ \"ท้องเสีย ซื้อยามากินเอง\" — ชนิดยา (ยาปฏิชีวนะ) อายุ อาการ Claude เติม · ตีความว่าซื้อยาปฏิชีวนะกินเองแล้วท้องเสีย",
 notes:"ไม่มีลายมือ/สไลด์ของข้อนี้",
 parts:S(
  B("3.1 What is the most likely causative organism?",1,{tags:["micro"],
   ans:"<b>Clostridioides difficile</b> (antibiotic-associated diarrhea/colitis)",
   exp:"ยาเสี่ยงสูง: clindamycin, cephalosporin รุ่น 2–3, fluoroquinolone, penicillin + β-lactamase inhibitor, carbapenem · เกิดระหว่างใช้ยาถึง ~3 เดือนหลังหยุด · community-onset CDI พบได้ในผู้ใช้ยาปฏิชีวนะเอง",
   rubric:"ได้เต็ม = C. difficile · ตอบ antibiotic-associated diarrhea ไม่ระบุเชื้อได้ครึ่ง",
   pts:[CR(P("Clostridioides (Clostridium) difficile","difficile","c\\.? ?diff","คลอสทริเดียม"))]}),
  B("3.2 What investigation would you send?",1,{tags:["micro"],
   ans:"<b>Stool C. difficile testing</b> ในอุจจาระเหลว: <b>GDH antigen + toxin A/B EIA</b> (two-step) หรือ <b>NAAT (PCR) + toxin</b> · ร่วมกับ CBC (WBC), creatinine, albumin, lactate เพื่อประเมินความรุนแรง",
   exp:"ส่งเมื่อถ่ายเหลว ≥ 3 ครั้งใน 24 ชั่วโมง ไม่ได้ยาระบาย · NAAT อย่างเดียวไวมากแต่แยก colonization ไม่ได้ · ไม่ส่งซ้ำหลังรักษา (test of cure) · Severe: WBC ≥ 15,000 หรือ Cr &gt; 1.5 mg/dL · Fulminant: hypotension, shock, ileus, megacolon → CT abdomen",
   rubric:"ได้เต็ม = toxin assay (หรือ GDH/NAAT + toxin) + ตรวจประเมินความรุนแรง · ตอบ stool culture ธรรมดาไม่ได้คะแนน",
   pts:[CR(P("Stool C. difficile toxin / GDH / NAAT","toxin","gdh","naat","pcr","glutamate")),P("Severity assessment: CBC (WBC), creatinine","cbc","wbc","creatinine","\\bcr\\b","albumin","lactate")]}),
  B("3.3 How would you treat her?",2,{tags:["micro"],
   ans:"<ul><li><b>หยุดยาปฏิชีวนะ</b>ที่เป็นต้นเหตุ (และไม่ซื้อยากินเอง) · เลี่ยงยาหยุดถ่าย (loperamide) และ PPI ที่ไม่จำเป็น</li><li>สารน้ำและเกลือแร่ทดแทน</li><li>ยา non-severe/severe: <b>fidaxomicin 200 mg bid 10 วัน</b> หรือ <b>oral vancomycin 125 mg qid 10 วัน</b> · metronidazole 500 mg tid 10 วัน เฉพาะ non-severe เมื่อไม่มีสองตัวแรก</li><li>Fulminant: oral vancomycin 500 mg qid + IV metronidazole ± ผ่าตัด</li><li>Infection control: contact precaution ล้างมือด้วยสบู่และน้ำ (alcohol ฆ่า spore ไม่ได้)</li></ul>",
   exp:"IDSA/SHEA 2021 focused update ให้ fidaxomicin เป็นทางเลือกแรก (ลด recurrence) oral vancomycin ทดแทนได้ · recurrence ครั้งแรก: fidaxomicin หรือ vancomycin tapered/pulsed · recurrence หลายครั้ง: fecal microbiota transplantation",
   rubric:"ได้เต็ม = หยุดยาปฏิชีวนะต้นเหตุ + oral vancomycin หรือ fidaxomicin ขนาดถูก + สารน้ำ · ให้ IV vancomycin = ผิด (ไม่ถึงลำไส้) · ให้ loperamide = หักคะแนน",
   pts:[CR(P("Stop the offending antibiotic","หยุดยา","stop","discontinu","งดยา")),CR(G("Specific therapy",1,P("Oral vancomycin 125 mg qid 10 days","vancomycin","แวนโค"),P("Fidaxomicin 200 mg bid 10 days","fidaxomicin"))),P("Fluid and electrolyte replacement","สารน้ำ","fluid","ors","เกลือแร่","electrolyte"),P("Avoid antimotility drugs; contact precautions, hand washing with soap","loperamide","ยาหยุดถ่าย","antimotil","contact","ล้างมือ","สบู่")]})
 ),
 interp:"สถานี CDI: ท้องเสียหลังใช้ยาปฏิชีวนะ → ส่ง toxin assay และรักษาด้วย oral vancomycin หรือ fidaxomicin",
 summary:["ท้องเสียหลังใช้ยาปฏิชีวนะ (ถึง 3 เดือนหลังหยุด) → C. difficile","ตรวจ: GDH + toxin หรือ NAAT + toxin ในอุจจาระเหลว","รักษา: หยุดยาต้นเหตุ + fidaxomicin หรือ oral vancomycin 10 วัน","ล้างมือด้วยสบู่ เพราะ alcohol ฆ่า spore ไม่ได้"]}),

/* ===== SEQ 4 ===== */
Co({page:10,orig:"SEQ 4",topic:"img",sub:"CXR",title:"Solitary lung mass on chest radiograph",kimg:["os129b_k4"],
 stem:"An adult patient's chest radiograph shows a solitary round mass, about 4 cm in diameter, in the right upper lung zone (the image is not available in the file).<br>4.1 Give 3 differential diagnoses.",
 gray:"4. cxr lung mass — A. ddx 3 โรค",
 flag:"NOIMG · ขนาดและตำแหน่งก้อน Claude เติมเป็นคำบรรยายกลาง ๆ",
 notes:"สไลด์ Differential diagnosis of solitary pulmonary nodule/mass (มหาวิทยาลัยมหิดล): malignancy — primary lung cancer, solitary metastasis · benign — hamartoma, arteriovenous malformation · infectious — granuloma, round pneumonia, abscess, septic embolus · non-infectious — amyloidoma, subpleural lymph node, rheumatoid nodule (ไฮไลต์), Wegener granulomatosis (ไฮไลต์), focal scarring, infarct · congenital — sequestration, bronchogenic cyst, bronchial atresia with mucoid impaction<br>สไลด์ Lesion mimics SPN on CXR: external object (nipple, skin nodule, ECG lead) — ลายมือเล็ก \"ใช้ nipple marker(?)\" · bone island in rib · healing rib fracture · pleural plaque",
 parts:S(
  B("4.1 Give 3 differential diagnoses.",2,{tags:["img"],
   ans:"<ul><li><b>Bronchogenic carcinoma</b> (primary lung cancer) — ต้องคิดก่อนในผู้ใหญ่โดยเฉพาะสูบบุหรี่ อายุ &gt; 40</li><li><b>Pulmonary tuberculosis</b> (tuberculoma)</li><li><b>Lung abscess</b> หรือ round pneumonia</li><li>Solitary metastasis</li><li>Fungal infection (cryptococcoma, aspergilloma)</li><li>Hamartoma (benign; popcorn calcification)</li></ul>",
   exp:"Nodule ≤ 3 cm · mass &gt; 3 cm (มีโอกาสมะเร็งสูง) · ลักษณะชวนมะเร็ง: spiculated margin, ขนาดโต, upper lobe, ไม่มี calcification แบบ benign · benign calcification: central, diffuse, laminated, popcorn · ขั้นต่อไป: เทียบฟิล์มเก่า → CT chest with contrast → เสมหะ AFB/molecular test (บริบทไทย) → bronchoscopy หรือ CT-guided biopsy · ระวัง lesion mimic (nipple shadow, ECG lead, bone island)",
   rubric:"ได้เต็ม = 3 โรคจากต่างกลุ่ม โดยมีมะเร็งปอดและ TB · ตอบชื่อโรคซ้ำกลุ่มเดียวกัน (เช่น มะเร็ง 3 ชนิด) ได้บางส่วน",
   pts:[CR(G("Differential diagnoses (3)",3,P("Bronchogenic carcinoma / primary lung cancer","carcinoma","lung cancer","มะเร็งปอด","bronchogenic","adenocarcinoma","squamous"),P("Tuberculosis / tuberculoma","tuber","\\btb\\b","วัณโรค"),P("Lung abscess / round pneumonia","abscess","ฝี","round pneumonia","pneumonia"),P("Metastasis","metasta","กระจาย"),P("Fungal infection (cryptococcoma, aspergilloma)","fung","crypto","asperg","เชื้อรา"),P("Hamartoma","hamartoma")))]})
 ),
 interp:"สถานี CXR lung mass: ddx ตามกลุ่มสาเหตุ malignancy, infection (TB, abscess, fungus), benign",
 summary:["Nodule ≤ 3 cm · mass &gt; 3 cm (โอกาสมะเร็งสูง)","Ddx: lung cancer, metastasis, TB, abscess, fungus, hamartoma, AVM","Benign calcification: central, diffuse, laminated, popcorn","ขั้นต่อไป: เทียบฟิล์มเก่า → CT chest → เสมหะ/biopsy"]}),

/* ===== SEQ 5 ===== */
Co({page:10,orig:"SEQ 5",topic:"ekg",sub:"STEMI/ischemia",title:"Elderly man with diabetes and hypertension presenting with chest pain — 12-lead EKG",kimg:["os129b_k5"],
 stem:"An elderly man with diabetes mellitus and hypertension comes to the hospital because of chest pain. A 12-lead EKG is obtained (the tracing is not available in the file).<br>5.1 Interpret the EKG.<br>5.2 Give the diagnosis.",
 gray:"5. ลุงแก่ มี DM HT มาโรงบาลเพราะเจ็บหัวใจ ให้ EKG น่าจะ STEMI — A. อ่านจ่ะ B. dx",
 flag:"NOIMG · ไม่มี EKG ในไฟล์ ผู้จดจำว่า \"น่าจะ STEMI\" — เฉลยเป็นหลักการอ่านและเกณฑ์ STEMI ไม่ระบุผนังที่แน่นอน",
 notes:"สไลด์ ตารางที่ 10.2 การบอกตำแหน่งกล้ามเนื้อหัวใจที่ตายโดยใช้ Q wave: V1–V2 septal wall · V3–V4 anterior wall · V5–V6, I, aVL lateral wall · II, III, aVF inferior wall<br>สไลด์ reciprocal change (ขีดเส้นใต้): ใน STEMI นอกจาก ST elevation อาจพบ ST depression ในบริเวณอื่น — anterior wall STEMI พบ ST depression ใน II, III, aVF · inferior wall STEMI พบ ST depression ใน V1–V3(?) · ใน inferior STEMI ต้องระวังว่าเป็น mirror image หรือ posterior wall infarction ร่วม · reciprocal change ช่วยเพิ่ม positive predictive value &gt; 90% และผู้ป่วยที่มี reciprocal change มีกล้ามเนื้อขาดเลือดมากกว่า<br>สไลด์ isolated posterior wall MI: มักจาก left circumflex อุดตัน ไม่เห็น ST elevation ใน 12-lead · พบ ST depression ≥ 0.5 mm ใน V1–V3 (ภาพสะท้อน) → ติด lead V7–V9 ถ้า ST elevation ≥ 0.5 mm ให้รักษาแบบ STEMI",
 parts:S(
  B("5.1 Interpret the EKG.",3,{tags:["ekg"],
   ans:"อ่านเป็นระบบ: rate, rhythm (sinus?), axis, intervals (PR, QRS, QT), P/QRS/ST/T · ภาพที่คาดใน STEMI:<ul><li><b>ST-segment elevation</b> ที่ J point ใน <b>≥ 2 contiguous leads</b> — ≥ 1 mm ทุก lead ยกเว้น V2–V3 (ชาย ≥ 40 ปี ≥ 2 mm, ชาย &lt; 40 ปี ≥ 2.5 mm, หญิง ≥ 1.5 mm)</li><li>ระบุ<b>ตำแหน่ง</b>: II, III, aVF = inferior · V1–V4 = anteroseptal/anterior · I, aVL, V5–V6 = lateral</li><li><b>Reciprocal ST depression</b> ในผนังตรงข้าม (inferior STEMI → I, aVL)</li><li>อาจมี hyperacute T wave, pathologic Q wave · inferior STEMI ให้ติด V4R หา RV infarction</li></ul>",
   exp:"เกณฑ์ตาม Fourth Universal Definition of MI 2018 · STEMI equivalents: new LBBB + อาการ (Sgarbossa), posterior MI (ST depression V1–V3 + tall R → V7–V9), de Winter T wave, ST elevation in aVR + diffuse ST depression (left main/3-vessel)",
   rubric:"ได้เต็ม = อ่านครบระบบ + ST elevation ระบุ lead ที่ contiguous + reciprocal change · บอกแค่ \"ST elevation\" ไม่ระบุตำแหน่งได้น้อย",
   pts:[H("Systematic reading",30),P("Rate, rhythm, axis, intervals","rate","rhythm","sinus","axis","interval","อัตรา"),
    H("Ischemic changes",70),CR(P("ST elevation in ≥ 2 contiguous leads","st elevat","st ยก","stemi","st segment elevation")),P("Localize the wall (inferior, anterior, lateral)","inferior","anterior","lateral","septal","ii, ?iii","v1","v2","ผนัง"),P("Reciprocal ST depression","reciprocal","st depress","กดต่ำ","mirror"),P("Q wave / hyperacute T wave","q wave","hyperacute","t wave")]}),
  B("5.2 Give the diagnosis.",2,{tags:["ekg"],
   ans:"<b>Acute ST-elevation myocardial infarction (STEMI)</b> ระบุผนังตาม lead ที่ ST ยก (เช่น acute inferior wall STEMI)",
   exp:"การรักษา: activate cath lab → <b>primary PCI</b> ภายใน 90–120 นาทีจาก first medical contact · ถ้าทำไม่ได้ภายใน 120 นาที ให้ <b>fibrinolysis</b> (tenecteplase/streptokinase) ภายใน 10 นาทีของการวินิจฉัย แล้วส่งต่อ · ยา: aspirin 300 mg เคี้ยว + P2Y12 inhibitor (ticagrelor/prasugrel/clopidogrel) + anticoagulant + high-intensity statin · O2 เมื่อ SpO2 &lt; 90% · ระวัง nitrate ใน RV infarct · ผู้ป่วยเบาหวานสูงอายุอาจเจ็บไม่ชัด (silent/atypical)",
   rubric:"ได้เต็ม = acute STEMI + ระบุผนัง · ตอบ ACS/MI กว้าง ๆ ได้บางส่วน · ตอบ NSTEMI = ผิด",
   pts:[CR(P("Acute ST-elevation myocardial infarction","stemi","st.?elevation myocardial","st elevation mi")),P("Specify the infarct wall","inferior","anterior","lateral","septal","posterior","ผนัง")]})
 ),
 interp:"สถานี EKG STEMI: อ่านเป็นระบบ ระบุ ST elevation ใน contiguous leads ตำแหน่งผนัง และ reciprocal change",
 summary:["STEMI: ST elevation ≥ 1 mm ใน ≥ 2 contiguous leads (V2–V3 ใช้เกณฑ์ตามเพศ/อายุ)","II, III, aVF = inferior · V1–V4 = anterior · I, aVL, V5–V6 = lateral","Reciprocal change เพิ่มความมั่นใจ · inferior STEMI ติด V4R หา RV infarct","Posterior MI: ST depression V1–V3 → ติด V7–V9","Primary PCI ภายใน 120 นาที มิฉะนั้น fibrinolysis ภายใน 10 นาที"]}),

/* ===== SEQ 6 ===== */
Co({page:10,orig:"SEQ 6",topic:"img",sub:"Bone/joint film",title:"Recurrent painful swelling of the feet — foot radiograph",kimg:["os129b_k6"],
 seen:"SI128 Ro405–408 · SI127 Ro413–416 (ภาพรังสี punched-out erosion — คนละโจทย์ เรื่องเดียวกัน)",
 stem:"A 55-year-old man has had recurrent attacks of painful swelling of the joints of his feet for 10 years. There are firm nodules over the first metatarsophalangeal joint. A radiograph of the foot is obtained (the image is not available in the file).<br>6.1 Describe the radiograph.<br>6.2 Give the diagnosis.",
 gray:"6. เป็นเก๊าท์ มี tophi overhanging+punchout เยอะๆ — A. จงอ่าน B. จงไดแอก",
 flag:"NOIMG · ภาพเอกซเรย์ที่ผู้จดแปะมีป้ายคำตอบทับ (tophi, punch-out, overhanging edge) จึงใช้เป็น kimg เท่านั้น · ประวัติผู้ป่วย Claude แต่ง (recall บอกคำตอบไว้ในตัว)",
 notes:"สไลด์ตารางอ่านฟิล์มข้อ (ITEM / FINDING / SPECIFIC KEYWORD): 1 general description — site, Rt/Lt · 2 joint space — normal/narrow, weight-bearing joint: uniform/non-uniform · 3 joint surface — regular/irregular, erosion/destruction: marginal, punch-out · proliferation: osteophyte, syndesmophyte · 4 subchondral bone — sclerosis/cyst · 5 periarticular area — osteopenia/osteoporosis · 6 bone others — generalized osteopenia, 2nd metacarpal mid-shaft · 7 periosteal reaction — solid/interrupted · 8 alignment — deform/dislocate/sublux · 9 soft tissue — normal/swelling: nodular (ลายมือ \"tophi\"), sausage (ลายมือ \"เป็นอักเสบตลอดแนว, มักเป็นทั้งนิ้ว\" → \"Spondyloarthropathy\"), fusiform (ลายมือ \"non-specific มากที่สุด\")<br>ภาพเอกซเรย์ตัวอย่าง: nodular soft tissue swelling (tophi), punch-out lesion, overhanging edge",
 parts:S(
  B("6.1 Describe the radiograph.",3,{tags:["img"],
   ans:"Plain radiograph ของเท้า (AP):<ul><li><b>Punched-out erosions</b> ขอบคม มี sclerotic rim และ <b>overhanging edge</b> (rat-bite) บริเวณ juxta-articular ของ 1st MTP joint (± ข้ออื่น)</li><li><b>Nodular (lobulated) soft-tissue swelling</b> รอบข้อ = tophi (อาจมีจุดหินปูน)</li><li><b>Joint space ค่อนข้างคงอยู่</b>จนระยะท้าย</li><li><b>ไม่มี periarticular osteopenia</b> ชัดเจน (ต่างจาก RA)</li></ul>",
   exp:"Overhanging edge เกิดจาก tophus กัดกร่อนกระดูกและกระดูกงอกยื่นคลุมขอบ · erosion ใน gout มักอยู่ห่างจากผิวข้อเล็กน้อย (para-articular) · RA: marginal erosion + periarticular osteopenia + joint space แคบสม่ำเสมอ · psoriatic: pencil-in-cup + periostitis + sausage digit",
   rubric:"ได้เต็ม = punched-out erosion + overhanging edge + soft-tissue tophi + joint space/bone density ปกติ · ตอบแค่ \"erosion\" ได้น้อย",
   pts:[H("Bone",60),CR(P("Punched-out erosions with sclerotic margin","punch","erosion","กัดกร่อน","เจาะ")),P("Overhanging edge","overhang","rat.?bite","ยื่น"),P("Joint space relatively preserved; no periarticular osteopenia","joint space","osteopenia","ช่องข้อ","กระดูกบาง"),
    H("Soft tissue",40),P("Nodular soft-tissue swelling (tophi)","tophi","tophus","nodular","soft tissue","ก้อน")]}),
  B("6.2 Give the diagnosis.",2,{tags:["img"],
   ans:"<b>Chronic tophaceous gout</b> (gouty arthritis with tophi)",
   exp:"รักษา: urate-lowering therapy (allopurinol เริ่มขนาดต่ำ 100 mg/วัน ปรับขึ้น; ตรวจ <b>HLA-B*5801</b> ก่อนให้ในคนไทย) เป้า urate &lt; 6 mg/dL (มี tophi &lt; 5) + prophylaxis colchicine 3–6 เดือนเมื่อเริ่มยา · ทางเลือก febuxostat, probenecid · acute flare: colchicine, NSAID หรือ steroid (ACR 2020)",
   rubric:"ได้เต็ม = chronic tophaceous gout · ตอบ gout เฉย ๆ ได้บางส่วน · ตอบ RA หรือ psoriatic arthritis = ผิด",
   pts:[CR(P("Chronic tophaceous gout","gout","เก๊าท์","เกาต์")),P("Tophaceous / chronic","tophaceous","chronic","เรื้อรัง","tophi")]})
 ),
 interp:"สถานีอ่านฟิล์มข้อ: punched-out erosion + overhanging edge + tophi = chronic tophaceous gout",
 summary:["Gout film: punched-out erosion + overhanging edge + tophi, joint space และ bone density คงอยู่","RA: marginal erosion + periarticular osteopenia + joint space แคบสม่ำเสมอ","Sausage digit → spondyloarthropathy · fusiform swelling ไม่จำเพาะ","Gout ที่มี tophi: ULT เป้า urate &lt; 5 mg/dL · ตรวจ HLA-B*5801 ก่อน allopurinol"]}),

/* ===== SEQ 7 ===== */
Co({page:11,orig:"SEQ 7",topic:"hx",sub:"Chronic cough",ex:1,title:"Cough with whitish sputum in the morning and occasional wheeze",kimg:["os129b_k7"],
 stem:"A 62-year-old man presents with chronic cough productive of whitish sputum, worse in the morning, and occasional wheezing.<br>7.1 Give 3 differential diagnoses.<br>7.2 What further investigations would you send?<br>7.3 Outline the management.",
 gray:"7. ไอ เสมหะขาวขุ่น หายใจมีเสียงวี๊ดบางครั้ง ชอบเป็นตอนเช้า — A. จงดิฟไดแอ่กมาสามโรค B. ส่ง investigation เพิ่มเติม C. management",
 flag:"ต้นฉบับเป็นข้อเขียน (SEQ) ไม่ได้ให้ซักประวัติ — จัด topic hx เพราะเป็นอาการนำ · อายุ Claude เติม · บทผู้ป่วย (sp) Claude แต่งไว้ใช้ฝึกแบบมีผู้คุม",
 sp:"(บทแต่งโดย Claude) ชาย 62 ปี อาชีพเผาถ่าน ไอมีเสมหะขาวขุ่นทุกเช้ามา 3 ปี ปีละหลายเดือน · เหนื่อยเวลาเดินขึ้นบันได 1 ชั้นมา 1 ปี ค่อย ๆ มากขึ้น · บางครั้งหายใจมีเสียงวี้ด · สูบบุหรี่วันละ 1 ซอง มา 40 ปี ยังสูบอยู่ · ไม่มีไข้ น้ำหนักไม่ลด ไม่ไอเป็นเลือด · ไม่เคยเป็นหอบหืดหรือภูมิแพ้ตอนเด็ก · ปีที่แล้วเหนื่อยมากต้องนอนรพ. 1 ครั้ง · ไม่มีขาบวม นอนราบได้",
 notes:"สไลด์ \"กรณีศึกษาที่ 1 Diagnosis of COPD\" + ลายมือ: \"# bronchiectasis มี dyspnea ได้ แต่ต้องเป็นมากๆ อาการ typical: ไอเรื้อรัง, เสมหะเยอะ เขียว, เหลือง, coarse crepitation\" · \"# COPD typical: ไอ, เสมหะเยอะสีขาวตอนเช้า\" · ที่ SYMPTOMS \"non specific ∴ ต้องดู risk ประกอบด้วยเสมอ\" · \"COPD: chronic progressive dyspnea, บางคนอาจเป็นแบบ intermittent ได้\" · ที่ chronic cough \"ไอ เสมหะสีขาวตอนเช้า\" · RISK FACTORS: tobacco \"(80%)\", occupation \"อาชีพเผาถ่านไม้\", indoor/outdoor pollution · Investigation \"(1) Chest X-rays เพื่อ R/O โรคอื่นๆ ก่อน (2) Spirometry: required to establish diagnosis (post-bronchodilator FEV1/FVC &lt; 0.70)\"<br>สไลด์ GOLD Differential diagnosis of COPD: COPD (onset mid-life, slowly progressive, smoking/exposure) · asthma (onset early, vary day to day, worse night/early morning, allergy/rhinitis/eczema, family history, obesity) · congestive heart failure (CXR dilated heart, pulmonary edema, PFT volume restriction) · bronchiectasis (large volume purulent sputum, bacterial infection, CXR/CT bronchial dilation and wall thickening) · tuberculosis (all ages, CXR infiltrate, microbiology, high local prevalence) · obliterative bronchiolitis (young nonsmokers, RA or fume exposure, after transplant, CT hypodense areas on expiration) · diffuse panbronchiolitis (Asian, male nonsmokers, chronic sinusitis, centrilobular nodules)",
 parts:S(
  B("7.1 Give 3 differential diagnoses.",2,{tags:["hx"],
   ans:"<ul><li><b>COPD</b> (chronic bronchitis phenotype) — ไอเสมหะขาวตอนเช้าเรื้อรัง + exposure (บุหรี่ biomass)</li><li><b>Asthma</b> — wheeze เป็นครั้งคราว แปรปรวน</li><li><b>Bronchiectasis</b> — ไอเสมหะเรื้อรัง (มักมากและเหลืองเขียว)</li><li>Pulmonary tuberculosis · congestive heart failure · asthma–COPD overlap</li></ul>",
   exp:"แยกด้วยประวัติ: อายุที่เริ่ม (asthma เด็ก, COPD &gt; 40), ความเสี่ยง (บุหรี่ ≥ 10 pack-years, ควันจากการเผาไหม้, ฝุ่นอาชีพ), ลักษณะเสมหะ, ความแปรปรวนของอาการ, atopy, ไข้ น้ำหนักลด (TB)",
   rubric:"ได้เต็ม = 3 โรคที่สมเหตุสมผล โดยมี COPD และ asthma · bronchiectasis/TB/CHF เป็นตัวที่ 3 ได้",
   pts:[CR(G("Differential diagnoses (3)",3,P("COPD / chronic bronchitis","copd","chronic bronchitis","ถุงลมโป่งพอง","emphysema"),P("Asthma","asthma","หอบหืด"),P("Bronchiectasis","bronchiectasis","หลอดลมโป่งพอง"),P("Pulmonary tuberculosis","tuber","\\btb\\b","วัณโรค"),P("Congestive heart failure","heart failure","\\bchf\\b","หัวใจล้มเหลว","หัวใจวาย"),P("Asthma–COPD overlap","overlap")))]}),
  B("7.2 What further investigations would you send?",2,{tags:["hx"],
   ans:"<ul><li><b>Spirometry pre/post bronchodilator</b> — COPD: post-BD <b>FEV1/FVC &lt; 0.70</b> · asthma: FEV1 เพิ่ม &gt; 12% และ &gt; 200 mL</li><li><b>Chest radiograph</b> — แยกโรคอื่น (TB, มะเร็ง, หัวใจโต, bronchiectasis)</li><li>CBC — blood eosinophil (ช่วยตัดสิน ICS), polycythemia</li><li>Pulse oximetry ± ABG ถ้า SpO2 ≤ 92%</li><li>เสมหะ AFB/molecular test ถ้าสงสัย TB · HRCT ถ้าสงสัย bronchiectasis · alpha-1 antitrypsin (WHO แนะนำตรวจครั้งหนึ่ง)</li></ul>",
   exp:"GOLD 2025: spirometry จำเป็นต่อการวินิจฉัย · ไม่ใช้ FEV1 แบ่งกลุ่มการรักษาแต่ใช้บอกความรุนแรงของ airflow obstruction (GOLD 1–4) · ประเมินอาการด้วย mMRC/CAT และประวัติ exacerbation",
   rubric:"ได้เต็ม = spirometry with bronchodilator (CR) + CXR + อย่างน้อย 1 อย่างจาก CBC eosinophil/SpO2",
   pts:[CR(P("Spirometry with bronchodilator reversibility","spirometr","fev1","pft","pulmonary function","bronchodilator")),P("Chest radiograph","cxr","chest x","x-?ray","เอกซเรย์","ภาพรังสี"),P("CBC with blood eosinophil count","cbc","eosin"),P("Pulse oximetry / ABG","spo2","oximet","abg","blood gas"),P("Sputum AFB / HRCT when indicated","afb","sputum (afb|exam|gene)","เสมหะ","hrct","ct chest")]}),
  B("7.3 Outline the management.",2,{tags:["hx"],
   ans:"(สมมติยืนยันเป็น COPD)<ul><li><b>เลิกบุหรี่</b> (counseling + varenicline/nicotine replacement) และลดการสัมผัสควัน/ฝุ่นอาชีพ</li><li><b>Bronchodilator ยาวนาน</b>: LAMA + LABA (GOLD group B และ E) · ถ้า eosinophil ≥ 300 และมี exacerbation → เพิ่ม ICS (LABA+LAMA+ICS) · SABA ใช้เมื่อมีอาการ</li><li>สอน<b>เทคนิคการใช้ยาพ่น</b></li><li><b>วัคซีน</b>: influenza, pneumococcal, COVID-19, RSV (≥ 60 ปี), Tdap</li><li><b>Pulmonary rehabilitation</b> · ออกกำลังกาย โภชนาการ</li><li>Long-term O2 ถ้า PaO2 ≤ 55 mmHg หรือ SpO2 ≤ 88%</li><li>นัดติดตามอาการและ exacerbation · ถ้าเป็น asthma → ICS-formoterol ตาม GINA</li></ul>",
   exp:"GOLD 2025 จัดกลุ่ม A (อาการน้อย ไม่มี exacerbation → bronchodilator ตัวเดียว), B (อาการมาก → LABA+LAMA), E (exacerbation ≥ 2 ครั้ง หรือนอนรพ. ≥ 1 ครั้ง → LABA+LAMA ± ICS ถ้า eos ≥ 300) · ห้ามใช้ ICS เดี่ยวใน COPD · ห้ามใช้ LABA เดี่ยวใน asthma",
   rubric:"ได้เต็ม = เลิกบุหรี่ (CR) + long-acting bronchodilator + วัคซีน/pulmonary rehab · ตอบแค่ยาโดยไม่พูดถึงบุหรี่ได้ไม่เกินครึ่ง",
   pts:[CR(P("Smoking cessation / avoid exposure","เลิกบุหรี่","smoking cessation","stop smoking","quit","บุหรี่")),P("Long-acting bronchodilator (LAMA, LABA)","lama","laba","tiotropium","bronchodilator","ยาพ่นขยายหลอดลม","salmeterol","formoterol"),P("Vaccination (influenza, pneumococcal)","vaccin","วัคซีน","influenza","pneumococc"),P("Pulmonary rehabilitation / exercise","rehab","ฟื้นฟู","exercise","ออกกำลัง"),P("Inhaler technique education","technique","เทคนิค","สอนพ่น","สอนการใช้ยา")]})
 ),
 interp:"สถานี chronic cough with sputum: ddx COPD/asthma/bronchiectasis → spirometry → รักษา COPD ตาม GOLD",
 summary:["COPD typical: ไอเสมหะขาวตอนเช้า + เหนื่อยค่อย ๆ มากขึ้น + exposure","วินิจฉัยด้วย post-BD FEV1/FVC &lt; 0.70 · CXR ใช้แยกโรคอื่น","Bronchiectasis: เสมหะมาก เหลืองเขียว coarse crackles → HRCT","COPD: เลิกบุหรี่ + LAMA/LABA ± ICS (eos ≥ 300 + exacerbation) + วัคซีน + rehab"]}),

/* ===== SEQ 8 ===== */
Co({page:11,orig:"SEQ 8",topic:"lab",sub:"CSF",title:"Neck stiffness with CSF eosinophilia",kimg:["os129b_k8"],
 stem:"A 30-year-old man presents with severe headache and neck stiffness for 5 days. He has no fever and no focal neurological deficit. Lumbar puncture: opening pressure 28 cmH2O; CSF white cell count 400 cells/µL with 40% eosinophils; protein 80 mg/dL; glucose 55 mg/dL (blood glucose 100 mg/dL).<br>8.1 Give the diagnosis.<br>8.2 Name the most likely causative organism(s).",
 gray:"8. คอแข็ง เจาะlp เจออีโอสิโนฟิวเย้อะม้าก — A. diag B. เชื้อ\\ตัวอะไร",
 flag:"ค่า CSF ทั้งหมด อายุ อาการ Claude เติม (recall บอกแค่ eosinophil สูงมาก)",
 notes:"สไลด์ Eosinophilic meningoencephalitis: helminthic infection (ไฮไลต์) migrate to meninges or brain parenchyma · causes: Angiostrongylus cantonensis (rat-lung worm) (ไฮไลต์), Gnathostoma spinigerum (พยาธิตัวจี๊ด) (ไฮไลต์), neurocysticercosis (ไฮไลต์) — ลายมือ \"cyst lesion อยู่ใน CSF circulating sys. เช่น ventricle/basal cistern ⇒ eosinophil สูงใน CSF\", Strongyloides stercoralis: disseminated strongyloidiasis (ไฮไลต์) — ลายมือ \"# protozoa infection มักไม่ทำให้ eosinophil สูง\" · CSF profile shows prominent eosinophils (ไฮไลต์) · neurological symptoms: headache, vomiting, neurological deficits, abnormal behaviors",
 parts:S(
  B("8.1 Give the diagnosis.",1,{tags:["lab"],key:"สไลด์ที่ผู้จดแปะ: Eosinophilic meningoencephalitis",
   ans:"<b>Eosinophilic meningitis</b> (CSF eosinophil ≥ 10 cells/µL หรือ ≥ 10% ของ WBC)",
   exp:"เกณฑ์: CSF eosinophil ≥ 10/µL หรือ ≥ 10% · สาเหตุในไทย: <b>parasite</b> เป็นหลัก · อื่น ๆ: coccidioidomycosis, cryptococcus (บางราย), ยา, VP shunt, lymphoma",
   rubric:"ได้เต็ม = eosinophilic meningitis (หรือ meningoencephalitis) · ตอบ aseptic/viral meningitis = ผิด",
   pts:[CR(P("Eosinophilic meningitis / meningoencephalitis","eosinophilic mening","eosinophilic meningoenceph","เยื่อหุ้มสมองอักเสบ.*อีโอสิ","อีโอสิโนฟิล"))]}),
  B("8.2 Name the most likely causative organism(s).",2,{tags:["lab"],key:"สไลด์ที่ผู้จดแปะ (ไฮไลต์): Angiostrongylus cantonensis, Gnathostoma spinigerum, neurocysticercosis, Strongyloides stercoralis",
   ans:"<ul><li><b>Angiostrongylus cantonensis</b> (rat lung worm) — พบบ่อยที่สุด จากกินหอยโข่ง/หอยทากดิบ · ปวดศีรษะรุนแรง ชาผิวหนัง ไม่ค่อยมี focal deficit</li><li><b>Gnathostoma spinigerum</b> (พยาธิตัวจี๊ด) — กินปลาน้ำจืด กบ ไก่ดิบ · ปวดร้าวตามเส้นประสาท/radiculomyelitis เลือดออกในสมอง CSF อาจเป็นสีเลือด</li><li>อื่น ๆ: neurocysticercosis, disseminated strongyloidiasis</li></ul>",
   exp:"รักษา Angiostrongylus: ยาแก้ปวด + เจาะระบาย CSF ซ้ำลดความดัน + <b>prednisolone 60 mg/วัน 2 สัปดาห์</b> (ลดระยะปวดศีรษะ) · ไม่ให้ยาฆ่าพยาธิเดี่ยว ๆ (อาจแย่ลงจากตัวตาย) · Gnathostoma: albendazole 400 mg bid 21 วัน หรือ ivermectin + steroid · ป้องกัน: ไม่กินหอย ปลา กบดิบ · protozoa ไม่ทำ eosinophilia",
   rubric:"ได้เต็ม = Angiostrongylus cantonensis (CR) ± Gnathostoma spinigerum · ตอบเฉพาะ Gnathostoma ได้บางส่วน · ตอบเชื้อแบคทีเรีย/ไวรัส = ผิด",
   pts:[CR(P("Angiostrongylus cantonensis","angiostrongyl","หอยโข่ง","rat.?lung")),P("Gnathostoma spinigerum","gnathostom","ตัวจี๊ด"),P("Other: neurocysticercosis, Strongyloides","cysticerc","strongyl")]})
 ),
 interp:"สถานี CSF eosinophilia: eosinophilic meningitis → พยาธิ Angiostrongylus, Gnathostoma",
 summary:["Eosinophilic meningitis: CSF eosinophil ≥ 10/µL หรือ ≥ 10%","ไทย: Angiostrongylus (หอยโข่งดิบ) พบบ่อยสุด · Gnathostoma (ปลา/กบดิบ) ปวดร้าวตามเส้นประสาท เลือดออกในสมอง","Angiostrongylus: แก้ปวด + เจาะระบาย CSF + prednisolone 2 สัปดาห์","Protozoa ไม่ทำ eosinophilia"]}),

/* ===== SEQ 9 ===== */
Co({page:11,orig:"SEQ 9",topic:"skin",sub:"Fungal skin",title:"Red skin-fold rash — clinical photograph and skin scraping",img:["os129b_9"],imgNote:"Clinical photographs of erythematous lesions in skin folds (neck and axilla) — taken from the note-taker's pasted slide, not the original exam image",kimg:["os129b_k9"],
 seen:"SI128 Ro405–408 ข้อ 17 (skin lesion at the axilla — คนละโจทย์ เรื่องใกล้กัน)",
 stem:"A patient presents with an itchy, burning red rash in the axilla. Clinical photographs of the skin-fold lesions are shown. A skin scraping is examined under the microscope (the microscopic image is not available in the file).<br>9.1 Describe the skin lesion.<br>9.2 Interpret the expected microscopic finding.<br>9.3 Give the diagnosis.",
 gray:"9. รูป candida ที่จั๊กแร้ ปื้นแดงๆ กับ รูป candida — A. จงอ่าน lesion ที่ผิวหนัง B. จงอ่านผล MICROSOPIC C. จงไดแอก",
 flag:"รูปผื่นใช้ภาพจากสไลด์ที่ผู้จดแปะ (ครอปหลบหัวข้อสไลด์ \"Intertrigo\") ไม่ใช่รูปข้อสอบจริง · รูป microscopic ไม่มีในไฟล์ (NOIMG สำหรับ 9.2)",
 notes:"ลายมือที่หัวสไลด์ Cutaneous mycoses: \"Intertrigo\" (intertriginous dermatitis) + \"คัน, เจ็บ, แสบ มักเป็นตาม skin fold\" · ข้อความสไลด์: vesicles or papules on moist erythematous skin with an irregular macerated scaly border with satellite lesions · chronic with an onset of itching, burning, pain, and stinging in skin folds<br>สไลด์ Four cardinal features + ลายมือ: morphology (1° lesion คืออะไร: macule, patch, papule, plaque, nodule, wheal, vesicle, bulla(?), pustule, cyst · # color · # 2° change: scale, crust, lichenification, erosion, ulcer, scar) · shape: linear, round, oval, annular, target · arrangement: linear, arcuate, annular, nummular, serpiginous, group, polycyclic, scattered, dermatomal, kissing, reticulate, satellite · distribution: sun-exposed, seborrheic, intertriginous, extensor/flexor, dermatomal, Blaschkoid, medial/lateral surface",
 parts:S(
  B("9.1 Describe the skin lesion.",2,{tags:["skin"],
   ans:"<b>Well-defined, bright red (beefy-red), moist, macerated erythematous patches/plaques</b> ในบริเวณ<b>ข้อพับ (intertriginous: axilla, neck fold)</b> ขอบไม่เรียบมีขุยเล็กน้อย + <b>satellite papules/pustules</b> กระจายรอบขอบ",
   exp:"บรรยายตาม 4 cardinal features: morphology (patch/plaque, papule, pustule + 2° change maceration, scale) · color (แดงสด) · arrangement (<b>satellite</b>) · distribution (<b>intertriginous</b>) · candida มักกินลึกถึงก้นพับ ต่างจาก tinea cruris ที่ขอบนูนชัด ตรงกลางจาง (central clearing) และไม่มี satellite",
   rubric:"ได้เต็ม = erythematous patch/plaque + intertriginous distribution + satellite lesions · บรรยายแค่ \"ผื่นแดง\" ได้น้อย",
   pts:[CR(P("Erythematous macerated patches / plaques","erythemat","แดง","patch","plaque","ปื้น","macerat")),CR(P("Satellite papules / pustules","satellite","ดาวกระจาย","บริวาร")),P("Intertriginous distribution (axilla, skin folds)","intertrig","axilla","รักแร้","จั๊กแร้","ข้อพับ","skin fold","ซอก")]}),
  B("9.2 Interpret the expected microscopic finding.",1,{tags:["skin"],flag:NOIMG,
   ans:"KOH preparation (หรือ Gram stain): <b>budding yeast cells</b> ร่วมกับ <b>pseudohyphae</b> (± true hyphae) = Candida",
   exp:"Dermatophyte (tinea) เห็น <b>septate branching hyphae</b> ไม่มี budding yeast · Malassezia (pityriasis versicolor) เห็น short hyphae + round yeast แบบ spaghetti and meatballs",
   rubric:"ได้เต็ม = budding yeast + pseudohyphae · ตอบ septate hyphae = ผิด (dermatophyte)",
   pts:[CR(P("Budding yeast cells","budding","yeast","ยีสต์","แตกหน่อ")),P("Pseudohyphae","pseudohyph","pseudo.?hyph")]}),
  B("9.3 Give the diagnosis.",1,{tags:["skin"],key:"ลายมือที่หัวสไลด์: Intertrigo (intertriginous dermatitis) · recall: รูป candida",
   ans:"<b>Cutaneous candidiasis — candidal intertrigo</b>",
   exp:"ปัจจัยเสี่ยง: อ้วน เบาหวาน เหงื่อออก ความอับชื้น ยาปฏิชีวนะ steroid ภูมิคุ้มกันต่ำ ทารก (ผ้าอ้อม) · รักษา: ทำให้แห้ง ลดความอับชื้น + <b>topical azole</b> (clotrimazole, miconazole) วันละ 2 ครั้ง 2–4 สัปดาห์ หรือ nystatin · เป็นมาก/ดื้อ → oral fluconazole · ตรวจหาเบาหวานในผู้ใหญ่ที่เป็นซ้ำ",
   rubric:"ได้เต็ม = cutaneous candidiasis/candidal intertrigo · ตอบ intertrigo ไม่ระบุเชื้อได้บางส่วน · ตอบ tinea = ผิด",
   pts:[CR(P("Cutaneous candidiasis / candidal intertrigo","candid","แคนดิดา","ยีสต์","yeast infection")),P("Intertrigo","intertrigo")]})
 ),
 interp:"สถานีผิวหนังเชื้อรา: ผื่นแดงชื้นในข้อพับ + satellite lesion + budding yeast/pseudohyphae = candidal intertrigo",
 summary:["Candidal intertrigo: ผื่นแดงสด ชื้น ในข้อพับ + satellite papules/pustules","KOH: budding yeast + pseudohyphae","Tinea: ขอบนูนชัด central clearing ไม่มี satellite · KOH septate hyphae","รักษา: ทำให้แห้ง + topical azole หรือ nystatin · หาเบาหวานถ้าเป็นซ้ำ"]}),

/* ===== SEQ 10 ===== */
Co({page:11,orig:"SEQ 10",topic:"lab",sub:"ABG",title:"Blood chemistry and arterial blood gas interpretation",kimg:["os129b_k10"],
 stem:"Blood chemistry: Na 138 mmol/L, Cl 97 mmol/L, HCO3 12 mmol/L.<br>Arterial blood gas (room air): pH 7.35, PaCO2 22 mmHg.<br>10.1 Interpret the blood chemistry and ABG.",
 gray:"10. แปลผล ABG lab : Na 138 ,HCO3 12 Cl 97 (ไม่ชัวร์แต่คุ้นๆว่าคิดได้ pure wide) ABG : pH 7.35, PaCO2 22, PaO2 ,SpO2 — A. จงแปลผล blood chem and ABG",
 flag:"ค่า PaO2 และ SpO2 ในไฟล์เว้นว่าง (ผู้จดจำไม่ได้) จึงไม่ได้ใส่ · ค่าอื่นตามไฟล์ (ผู้จดไม่มั่นใจ)",
 notes:"ผู้จดเขียนในโจทย์ว่า \"ไม่ชัวร์แต่คุ้นๆ ว่าคิดได้ pure wide\" · ลายมือในแถวคำถาม: \"ไปดูหน้าสุดท้าย\" = หน้า 33 ของไฟล์ — infographic ABG interpretation: ค่าปกติ arterial (pH 7.35–7.45, pO2 80–100, pCO2 35–45, HCO3 21–25, O2 sat 95–99%, BE −2 ถึง +2) / venous · (1) oxygenation: mild hypoxemia PaO2 60–79, moderate 40–59, severe &lt; 40 (2) ventilation: hyperventilation pCO2 &lt; 35, hypoventilation &gt; 45 (3) acid–base primary disorder ตามทิศ pH/HCO3/PaCO2 · expected compensation: metabolic acidosis PaCO2 = 1.5 × HCO3 + 8 ± 2 (หรือ ↓PaCO2 = 1.2 × ΔHCO3) · metabolic alkalosis ↑PaCO2 = 0.7 × ΔHCO3 · respiratory acidosis acute ↑HCO3 = 0.1 × ΔPaCO2, chronic 0.4 · respiratory alkalosis acute ↓HCO3 = 0.2 × ΔPaCO2, chronic 0.5 (acute &lt; 48 ชั่วโมง) · metabolic acidosis: serum AG = Na − (Cl + HCO3) normal 12 ± 2 (albumin &lt; 4 บวก AG 2.5 ต่อ albumin ที่ลด 1 g/dL) · high AG → ΔAG/ΔHCO3 &gt; 2 = met. alkalosis/resp. acidosis ร่วม · &lt; 1 = normal AG met. acidosis/resp. alkalosis ร่วม · normal AG → urine AG = (Na + K) − Cl: บวก (ไตเสีย ขับ NH4+ ไม่ได้) ddx RTA · ลบ ddx GI causes · ตาราง RTA type II (proximal, ↓HCO3 reabsorption, K ↓, urine pH &lt; 5.5, osteomalacia/Fanconi) · type I (α-intercalated, ↓H+ secretion, K ↓, urine pH &gt; 5.5, nephrocalcinosis) · type IV (principal cell, aldosterone deficiency, K ↑) · 3° disorder: ถ้าซ้ำกับ 2° disorder เลือก res. ถ้าไม่ซ้ำเลือก met.",
 parts:S(
  B("10.1 Interpret the blood chemistry and ABG.",4,{tags:["lab"],key:"ผู้จดจำว่าคิดได้ \"pure wide\" (ไม่มั่นใจ) และอ้างไปที่ infographic หน้าสุดท้าย",
   ans:"<ol><li><b>pH 7.35</b> = ขอบล่างของปกติ (เอียงไปทาง acidemia) · HCO3 12 ต่ำ PaCO2 22 ต่ำ → <b>primary metabolic acidosis</b></li><li><b>Anion gap</b> = 138 − (97 + 12) = <b>29</b> → <b>high anion gap metabolic acidosis</b></li><li><b>Expected PaCO2</b> (Winter) = 1.5 × 12 + 8 ± 2 = <b>24–28</b> · วัดได้ 22 ต่ำกว่าที่คาด → <b>concomitant respiratory alkalosis</b></li><li><b>ΔAG/ΔHCO3</b> = (29 − 12) ÷ (24 − 12) = 17/12 ≈ <b>1.4</b> (อยู่ช่วง 1–2) → ไม่มี metabolic alkalosis หรือ normal AG acidosis ร่วม (pure high AG)</li><li><b>สรุป</b>: high anion gap metabolic acidosis ร่วมกับ respiratory alkalosis · oxygenation ประเมินไม่ได้ (ไม่มี PaO2)</li></ol>",
   exp:"สาเหตุที่ทำ wide AG metabolic acidosis + respiratory alkalosis พร้อมกัน: <b>salicylate poisoning</b>, <b>sepsis</b> (lactic acidosis + กระตุ้นการหายใจ), liver failure, (PE/pneumonia ร่วม lactic acidosis) · ขั้นต่อไป: วัด lactate, ketone, BUN/Cr, serum osmolality (osmolar gap — methanol/ethylene glycol), salicylate level · ข้อสังเกต: ผู้จดจำว่าได้ \"pure wide\" ตรงกับ Δratio แต่ต้องดู compensation ด้วยจึงเห็น respiratory alkalosis ที่ซ้อนอยู่ · ถ้าใช้ normal AG 10 (บางตำรา) Δratio = 19/12 ≈ 1.6 สรุปเหมือนกัน",
   rubric:"ได้เต็ม = metabolic acidosis + AG 29 (wide) + expected PaCO2 24–28 → respiratory alkalosis ร่วม + Δratio ≈ 1.4 (ไม่มี disorder อื่น) · ตอบแค่ \"wide AG metabolic acidosis with respiratory compensation\" ได้ไม่เกินครึ่ง",
   pts:[H("Primary disorder",20),CR(P("Primary metabolic acidosis","metabolic acidosis","เมตาบอลิก","met\\.? ?acid")),
    H("Anion gap",25),CR(P("Anion gap = 29, high anion gap","29","wide","high ag","high anion","\\bag\\b.*สูง","hagma")),
    H("Compensation",30),P("Expected PaCO2 = 1.5 × HCO3 + 8 ± 2 = 24–28","winter","1\\.5","24 ?[-–] ?28","= ?26","expected"),CR(P("Concomitant respiratory alkalosis","respiratory alkalosis","resp\\.? ?alk","หายใจเร็วเกิน")),
    H("Delta ratio",25),P("ΔAG/ΔHCO3 ≈ 1.4 → no additional metabolic disorder","delta","Δ ?ag","1\\.4","17/12","pure")]})
 ),
 interp:"สถานี ABG: ทำครบ primary disorder → AG → expected compensation (Winter) → Δratio · ซ่อน respiratory alkalosis",
 summary:["AG = Na − (Cl + HCO3) ปกติ 12 ± 2 (ปรับตาม albumin)","Metabolic acidosis: expected PaCO2 = 1.5 × HCO3 + 8 ± 2 · ต่ำกว่าคาด = respiratory alkalosis ร่วม","ΔAG/ΔHCO3: &lt; 1 มี NAGMA ร่วม · 1–2 pure · &gt; 2 มี metabolic alkalosis ร่วม","Wide AG MA + respiratory alkalosis: salicylate, sepsis, liver failure"]}),

/* ===== SEQ 11 ===== */
Co({page:11,orig:"SEQ 11",topic:"img",sub:"Acute abdomen film",title:"Sudden severe epigastric pain — upright radiograph",kimg:["os129b_k11"],
 stem:"A 50-year-old man with a history of recurrent dyspepsia who takes NSAIDs for knee pain presents with sudden severe epigastric pain that spread over the whole abdomen 4 hours ago. His abdomen is rigid. An upright chest radiograph is obtained (the image is not available in the file).<br>11.1 Read the radiograph.<br>11.2 Give the diagnosis.<br>11.3 Outline the management.",
 gray:"11. x- ray peptic ulcer perforation — A. จงอ่าน B. จงไดแอก C. จง manage",
 flag:"NOIMG · ประวัติผู้ป่วย Claude แต่ง (recall บอกคำตอบไว้ในตัว)",
 notes:"ลายมือ: \"Pneumoperitoneum\" (วงเล็บคร่อมสไลด์) · ลายมือแถวบน (ของ SEQ 10) \"ไปดูหน้าสุดท้าย\"<br>สไลด์ Pneumoperitoneum signs (Radiopaedia): chest radiograph — erect CXR ไวที่สุดในภาพรังสีธรรมดาสำหรับ free intraperitoneal gas: subdiaphragmatic free gas, leaping dolphin sign, cupola sign (supine), continuous diaphragm sign · abdominal radiograph — bowel-related: double wall sign (Rigler, bas-relief), telltale triangle sign · peritoneal ligament-related: football sign, falciform ligament sign, lateral umbilical ligament sign (inverted V), urachus sign · RUQ: cupola, fissure for ligamentum teres, hepatic edge, lucent liver, Morison pouch (doge cap), periportal free gas",
 parts:S(
  B("11.1 Read the radiograph.",2,{tags:["img"],key:"ลายมือในไฟล์: Pneumoperitoneum",
   ans:"Upright chest radiograph: <b>free air under the diaphragm</b> (subdiaphragmatic free gas) — เงาดำรูปพระจันทร์เสี้ยวใต้ hemidiaphragm (มักเห็นชัดข้างขวา เหนือตับ) = <b>pneumoperitoneum</b> · ภาพอื่นที่อาจเห็นในฟิล์มท้องท่านอน: Rigler (double wall) sign, football sign, falciform ligament sign",
   exp:"Erect CXR เห็น free air ได้ตั้งแต่ ~1 mL ถ้าให้ผู้ป่วยนั่ง/ยืน 5–10 นาทีก่อนถ่าย · ถ้ายืนไม่ได้ใช้ left lateral decubitus · ข้างซ้ายแยกกับ gastric bubble (มี fundal wall และ air-fluid level) · Chilaiditi sign (ลำไส้แทรกระหว่างตับกับกะบังลม) เป็นตัวลวง · CT abdomen ไวที่สุด",
   rubric:"ได้เต็ม = free air under diaphragm/pneumoperitoneum บอกตำแหน่ง · บอก Chilaiditi หรือ gastric bubble = ผิด",
   pts:[CR(P("Free air under the diaphragm (pneumoperitoneum)","free air","pneumoperitone","subdiaphragm","ลมใต้กะบังลม","อากาศใต้กะบังลม","ลมรั่ว")),P("Location: under the right/both hemidiaphragms","right","ขวา","both","สองข้าง","hemidiaphragm","กะบังลม")]}),
  B("11.2 Give the diagnosis.",1,{tags:["img"],
   ans:"<b>Perforated peptic ulcer</b> (hollow viscus perforation) with generalized peritonitis",
   exp:"Perforated PU: ปวดลิ้นปี่ทันทีรุนแรง → ทั่วท้อง ท้องแข็ง (board-like rigidity) · ปัจจัยเสี่ยง: <b>NSAIDs</b>, <b>H. pylori</b>, บุหรี่, steroid · มักเป็น duodenal ulcer ด้านหน้า",
   rubric:"ได้เต็ม = perforated peptic ulcer · ตอบ hollow viscus perforation ไม่ระบุได้บางส่วน",
   pts:[CR(P("Perforated peptic ulcer","perforat","ทะลุ","ulcer","แผลในกระเพาะ"))]}),
  B("11.3 Outline the management.",2,{tags:["img"],
   ans:"<ul><li><b>NPO</b> + <b>NG tube</b> decompression</li><li><b>IV fluid resuscitation</b> + Foley ติดตามปัสสาวะ</li><li><b>IV broad-spectrum antibiotics</b> (เช่น ceftriaxone + metronidazole หรือ piperacillin–tazobactam)</li><li><b>IV PPI</b> + ยาแก้ปวด · หยุด NSAIDs</li><li><b>ปรึกษาศัลยแพทย์ผ่าตัดด่วน</b> — laparoscopic/open repair ด้วย omental (Graham) patch + peritoneal lavage</li><li>ตรวจ <b>H. pylori</b> และให้ eradication หลังผ่าตัด</li></ul>",
   exp:"ผ่าตัดยิ่งช้า mortality ยิ่งสูง (Boey score: shock, comorbidity, perforation &gt; 24 ชั่วโมง) · conservative (Taylor method) ใช้เฉพาะรายเลือกที่ทะลุปิดเองและเสี่ยงผ่าตัดสูง · ก่อนผ่าตัดเจาะ CBC, electrolyte, BUN/Cr, coagulation, group match",
   rubric:"ได้เต็ม = resuscitation (NPO, NG, IV fluid) + IV antibiotics + IV PPI + ผ่าตัดด่วน (CR) · ไม่ปรึกษาศัลย์ = ไม่ผ่าน",
   pts:[P("NPO and NG decompression","npo","งดน้ำงดอาหาร","\\bng\\b","ng tube","nasogastric","สายยาง"),P("IV fluid resuscitation","iv fluid","สารน้ำ","resuscit","crystalloid","nss"),P("IV broad-spectrum antibiotics","antibiotic","ยาปฏิชีวนะ","ceftriaxone","metronidazole","piperacillin"),P("IV PPI; stop NSAIDs","ppi","omeprazole","pantoprazole","nsaid"),CR(P("Urgent surgical repair (omental patch)","surg","ผ่าตัด","ศัลย","omental","graham","laparo")),P("H. pylori testing and eradication","pylori","eradicat")]})
 ),
 interp:"สถานีฟิล์ม acute abdomen: free air under diaphragm → perforated PU → resuscitate + antibiotic + PPI + ผ่าตัดด่วน",
 summary:["Erect CXR: free air under diaphragm = pneumoperitoneum","ฟิล์มท่านอน: Rigler sign, football sign, falciform ligament sign","ระวังตัวลวง: gastric bubble, Chilaiditi sign","Perforated PU: NPO, NG, IV fluid, IV antibiotic, IV PPI, ผ่าตัด omental patch + H. pylori eradication"]}),

/* ===== SEQ 12 ===== */
Co({page:12,orig:"SEQ 12",topic:"micro",sub:"Gram stain",title:"Ventilated patient with purulent tracheal secretions — Gram stain",img:["os129b_12"],imgNote:"Gram stain of endotracheal aspirate (arrows mark the organisms)",kimg:["os129b_k12"],
 seen:"SI128 Ro405–408 ข้อ 15 · SI130 Ro409–412 ข้อ 22 · SI131 Ro401–404 ข้อ 1 · SI127 Ro413–416 ข้อ 1 (Gram stain ใน VAP — คนละโจทย์ เรื่องเดียวกัน)",
 stem:"A patient who has been on mechanical ventilation in the intensive care unit for 7 days develops fever, increased purulent tracheal secretions, and a new infiltrate on chest radiograph. A Gram stain of the endotracheal aspirate is shown.<br>12.1 Read the Gram stain.<br>12.2 Write the full name of the most likely organism.",
 gray:"12. on ventilator ดูด fluid ขึ้นมา เป็น gram neg coccobacilli — A. จงอ่าน B. จงเขียนชื่อเชื้อตัวเต็ม",
 flag:"รูป Gram stain มาจากที่ผู้จดแปะ (ไม่มีคำตอบเขียนในรูป) · ไข้ ระยะใส่ท่อ CXR Claude เติม",
 notes:"ลายมือข้างรูป (ช่องข้อ B): \"Acinetobacter baumannii\"",
 parts:S(
  B("12.1 Read the Gram stain.",1,{tags:["micro"],key:"recall ในไฟล์: gram neg coccobacilli",
   ans:"<b>Gram-negative coccobacilli</b> (สีชมพูแดง รูปแท่งสั้นป้อมเกือบกลม มักอยู่เป็นคู่ — diplococcobacilli) ตามลูกศร",
   exp:"Gram negative ติดสี safranin (ชมพู) เพราะผนัง peptidoglycan บาง · coccobacilli ที่สำคัญ: <b>Acinetobacter</b> (มักเป็นคู่ ทนการล้างสี อาจดูเหมือน Gram variable), Haemophilus influenzae, Bordetella, Brucella · Acinetobacter อาจถูกอ่านเป็น Gram-negative diplococci (คล้าย Neisseria/Moraxella)",
   rubric:"ได้เต็ม = Gram-negative coccobacilli · ตอบ Gram-negative bacilli ได้บางส่วน · ตอบ Gram positive = ผิด",
   pts:[CR(P("Gram-negative","gram.?neg","gnb","แกรมลบ","gram ?-")),CR(P("Coccobacilli","coccobacil","cocco.?bacil","แท่งสั้น"))]}),
  B("12.2 Write the full name of the most likely organism.",1,{tags:["micro"],key:"ลายมือในไฟล์: Acinetobacter baumannii",
   ans:"<b>Acinetobacter baumannii</b>",
   exp:"เชื้อก่อ <b>VAP</b> และ nosocomial infection ที่พบบ่อยใน ICU ไทย อยู่ในสิ่งแวดล้อมรพ.นาน · มักดื้อยา: <b>carbapenem-resistant A. baumannii (CRAB)</b> · รักษาตามผลเพาะเชื้อ: ไวต่อยา → ampicillin–sulbactam ขนาดสูง หรือ carbapenem · CRAB → <b>sulbactam ขนาดสูง</b> ร่วมกับยาอื่น (polymyxin B/colistin, minocycline, tigecycline, cefiderocol) หรือ sulbactam–durlobactam + carbapenem (IDSA AMR Guidance 2024) · ป้องกัน: hand hygiene, contact precaution, VAP bundle",
   rubric:"ได้เต็ม = ชื่อเต็ม Acinetobacter baumannii สะกดถูก · ตอบ Acinetobacter spp. ได้ครึ่ง · ตอบ H. influenzae ไม่ได้คะแนน (บริบท VAP ใน ICU)",
   pts:[CR(P("Acinetobacter baumannii","acinetobacter","อะซิเนโต")),P("Species: baumannii","baumann")]})
 ),
 interp:"สถานี Gram stain VAP: Gram-negative coccobacilli ในผู้ป่วยใส่ท่อช่วยหายใจ = Acinetobacter baumannii",
 summary:["VAP + Gram-negative coccobacilli → Acinetobacter baumannii","Acinetobacter มักเป็นคู่ อาจดูเหมือน diplococci","CRAB: high-dose sulbactam-based combination หรือ polymyxin ตามผลความไว","Gram-negative coccobacilli อื่น: H. influenzae, Bordetella, Brucella"]}),

/* ===== SEQ 14 ===== */
Co({page:12,orig:"SEQ 14",topic:"micro",sub:"UA",title:"Urinary sediment — six types of casts",kimg:["os129b_k14"],
 stem:"Six photomicrographs of urinary casts are shown (the images are not available in the file).<br>14.1 Identify each cast.<br>14.2 Which casts can be found in nephrotic syndrome?",
 gray:"14. ให้รูป urinary casts มา 6 รูป — A. ให้ระบุแต่ละอันคืออะไร B. รูปอะไรเจอได้บ้างใน Nephrotic syndrome",
 flag:"NOIMG · ไฟล์ไม่มีรูป cast ทั้ง 6 รูป — เฉลยเป็น cast 6 ชนิดหลักที่น่าจะออกสอบ",
 notes:"สไลด์ Urinalysis: casts (Comprehensive Clinical Nephrology 6th ed): hyaline — normal individual, dehydration, heavy exercise · granular — acute tubular necrosis (muddy brown cast) · waxy — CKD · fatty — proteinuria (nephrotic syndrome) · erythrocyte — glomerular hematuria, AIN · leukocyte — AIN, acute pyelonephritis, proliferative GN · renal tubular epithelial cell — ATN, AIN · bilirubin — hyperbilirubinemia (TB &gt; 20), bile cast nephropathy<br>สไลด์ Interpretation of the urinary sediment: nephrotic syndrome — OFB, lipiduria, marked cylindruria (ลายมือเล็ก \"มี proteinuria เยอะ(?)\") · associated RTECs, RTEC casts, microscopic hematuria · nephritic syndrome (ลายมือ \"ex. glomerulonephritis\") — dysmorphic RBC, RBC or Hb casts · mild leukocyturia, RTECs, RTEC casts, waxy casts · ATN — RTECs, RTEC casts and muddy brown granular casts · UTI — leukocyturia, bacteriuria · superficial transitional cells, triple phosphate crystals, leukocyte casts (ลายมือ \"แปลว่าเป็น upper UTI\") · urinary contamination — squamous epithelial cells, Candida/Trichomonas · urological disorder — isomorphic hematuria, leukocyturia, deep/superficial urothelial cells",
 parts:S(
  B("14.1 Identify each cast.",3,{tags:["micro"],flag:NOIMG,
   ans:"Cast ที่พบบ่อย (คาดว่าเป็น 6 ชนิดนี้):<ul><li><b>Hyaline cast</b> — ใส ไม่มีเซลล์ ขอบจาง (Tamm-Horsfall protein): ปกติ ขาดน้ำ ออกกำลังกาย</li><li><b>Granular cast</b> — มีเม็ดละเอียด/หยาบ · <b>muddy brown</b> = ATN</li><li><b>Waxy cast</b> — ทึบ มันวาว ขอบคม มีรอยแตกหยัก: CKD (tubular stasis)</li><li><b>Fatty cast</b> — มีหยดไขมัน (Maltese cross ใต้ polarized light): nephrotic syndrome</li><li><b>RBC cast</b> — มีเม็ดเลือดแดงในเนื้อ cast: glomerulonephritis (nephritic)</li><li><b>WBC cast</b> — มีเม็ดเลือดขาว: acute pyelonephritis, AIN</li><li>(อื่น ๆ: renal tubular epithelial cell cast — ATN, AIN · broad cast — CKD)</li></ul>",
   exp:"Cast สร้างใน distal tubule/collecting duct จาก Tamm-Horsfall (uromodulin) จึงบอกว่าความผิดปกติมาจาก<b>ไต</b> · RBC cast จำเพาะต่อ glomerular bleeding · WBC cast แยก upper UTI จาก cystitis",
   rubric:"ให้คะแนนตามชนิดที่ระบุถูก + ความหมายทางคลินิก · ต้องรู้อย่างน้อย hyaline, granular, waxy, fatty, RBC, WBC",
   pts:[CR(G("Cast types identified",4,P("Hyaline cast","hyaline"),P("Granular / muddy brown cast","granular","muddy"),P("Waxy cast","waxy"),P("Fatty cast","fatty","fat","ไขมัน","oval fat"),P("RBC cast","rbc","red cell","erythrocyte","เม็ดเลือดแดง"),P("WBC cast","wbc","white cell","leukocyte","เม็ดเลือดขาว"),P("Renal tubular epithelial cell cast","epithelial","rtec","tubular"))),P("Clinical association of each cast","atn","glomerulonephritis","pyelonephritis","nephrotic","ckd","ain")]}),
  B("14.2 Which casts can be found in nephrotic syndrome?",1,{tags:["micro"],
   ans:"<b>Fatty cast</b> (และ oval fat bodies — Maltese cross ใต้ polarized light) และ <b>hyaline cast</b> (proteinuria มาก) · อาจพบ RTE cell cast และ waxy cast (ถ้าไตเสื่อมเรื้อรัง)",
   exp:"Nephrotic syndrome: proteinuria &gt; 3.5 g/วัน + hypoalbuminemia + edema + hyperlipidemia/<b>lipiduria</b> · sediment เรียกว่า \"bland\" (ไม่มี RBC cast) · ถ้าเห็น RBC cast ให้คิด nephritic หรือ mixed (เช่น lupus nephritis class IV/V, MPGN)",
   rubric:"ได้เต็ม = fatty cast/oval fat body + hyaline cast · ตอบ RBC cast = ผิด",
   pts:[CR(P("Fatty cast / oval fat bodies","fatty","fat","ไขมัน","maltese","oval fat")),P("Hyaline cast","hyaline")]})
 ),
 interp:"สถานี urinary casts: ระบุชนิด cast + ความหมาย · nephrotic = fatty cast/oval fat body",
 summary:["Hyaline: ปกติ/ขาดน้ำ · muddy brown granular: ATN · waxy/broad: CKD","RBC cast = glomerulonephritis · WBC cast = pyelonephritis, AIN","Fatty cast + oval fat body (Maltese cross) = nephrotic syndrome","Cast บอกว่ามีพยาธิสภาพในไต (สร้างใน tubule จาก uromodulin)"]}),

/* ===== SEQ 15 ===== */
Co({page:12,orig:"SEQ 15",topic:"micro",sub:"Stool exam",title:"Larva found on stool examination",kimg:["os129b_k15"],
 seen:"SI128 Ro409–412 ข้อ 10 · SI127 Ro417–420 ข้อ 16 · SI131 Ro413–416 ข้อ 21 (stool exam พยาธิ — คนละโจทย์ เรื่องใกล้กัน)",
 stem:"A 45-year-old farmer from northeastern Thailand has intermittent abdominal discomfort. Stool examination shows the larva in the photomicrograph (the image is not available in the file).<br>15.1 Name the organism and its stage.<br>15.2 Give the diagnosis.<br>15.3 Outline the treatment.",
 gray:"15. รูป strongyloid — A. เชื้ออะไร ระยะ B. diag C. treatment",
 flag:"NOIMG · รูปที่ผู้จดแปะมีป้ายชื่อ/ระยะเป็นคำตอบ จึงใช้เป็น kimg เท่านั้น · ประวัติผู้ป่วย Claude แต่ง",
 notes:"สไลด์ Diagnostic stage — rhabditiform larva (L1) ตัวอ่อนระยะที่ 1 ระยะที่ตรวจพบในอุจจาระ (ไฮไลต์) size 200–300 × 15–18 µm: short buccal cavity, rhabditiform esophagus, large genital primordium · ลายมือ \"หางแหลม, อ้วนๆ ป้อมๆ, หัวมน-หางเรียว(?)\" · ที่ปาก \"short buccal cavity\" · ที่ลูกศร \"genital primordial คล้ายข้าวหลามตัด จะเติบโตเป็น sex organ\" · ที่ esophagus \"โป่ง–คอด–โป่ง หลอดอาหารคล้ายพิณ(?)\"<br>Filariform larva (L3) ตัวอ่อนระยะที่ 3 = infective stage (ไฮไลต์) size 500 × 15 µm: filariform esophagus (ลายมือ \"หลอดอาหารตรงยาว ไม่มีโป่ง\"), notch tail (หางแยกเป็นรูป W), อาจพบได้ในปอด · ลายมือ \"ยาวกว่า L1 สองเท่า เรียวยาว\"<br>สไลด์ Treatment: ivermectin 200 mcg/kg/day PO 2 วัน (อัตรารักษาหาย 97%) · disseminated/hyperinfection ให้ซ้ำทุก 15 วันหากยังตรวจพบพยาธิในอุจจาระ · ผู้ป่วยภูมิคุ้มกันบกพร่องที่มี sepsis หรือ meningitis ให้ยาต่อเนื่องจนตรวจไม่พบเชื้อในเสมหะหรืออุจจาระเป็นเวลา 2 สัปดาห์ · อาจให้ทาง subcutaneous หรือ enema ถ้ากินไม่ได้ · ยาทางเลือก albendazole 400 mg PO bid 7 วัน",
 parts:S(
  B("15.1 Name the organism and its stage.",2,{tags:["micro"],key:"recall: รูป strongyloid · สไลด์ที่แปะ: rhabditiform larva (L1) = diagnostic stage ในอุจจาระ",
   ans:"<b>Strongyloides stercoralis — rhabditiform larva (L1)</b> (diagnostic stage ในอุจจาระ): <b>short buccal cavity</b>, rhabditiform esophagus (โป่ง–คอด–โป่ง), <b>prominent genital primordium</b> · (ถ้าเป็น filariform larva L3: ยาว ~500 µm esophagus ยาวตรง <b>notched tail</b> = infective stage พบในเสมหะช่วง hyperinfection)",
   exp:"แยกจาก hookworm rhabditiform larva: hookworm มี <b>long buccal cavity</b> และ genital primordium เล็ก · อุจจาระสดปกติไม่เห็นไข่ Strongyloides (ฟักในลำไส้) แต่เห็นไข่ hookworm · ตรวจเพิ่มความไว: agar plate culture, Baermann, formalin-ether concentration, serology",
   rubric:"ได้เต็ม = Strongyloides stercoralis + rhabditiform larva พร้อมลักษณะ (short buccal cavity, genital primordium) · บอกชื่อเชื้อไม่บอกระยะได้ครึ่ง",
   pts:[CR(P("Strongyloides stercoralis","strongyl","สตรองจิลอยด์","พยาธิเส้นด้าย")),P("Rhabditiform larva (L1)","rhabditi","\\bl1\\b","ระยะที่ 1"),P("Short buccal cavity, prominent genital primordium","buccal","genital","primordi")]}),
  B("15.2 Give the diagnosis.",1,{tags:["micro"],
   ans:"<b>Strongyloidiasis</b> (intestinal) — ต้องประเมิน <b>hyperinfection/disseminated strongyloidiasis</b> ถ้าได้ steroid/ภูมิคุ้มกันบกพร่อง (HTLV-1)",
   exp:"Autoinfection ทำให้อยู่ในร่างกายได้หลายสิบปี · อาการ: ปวดท้อง ท้องเสีย larva currens (ผื่นคันเป็นทางเคลื่อนเร็ว) eosinophilia · hyperinfection: ไอ หอบ ปอดอักเสบ larva ในเสมหะ + <b>gram-negative sepsis/meningitis</b> (เชื้อลำไส้ติดไปกับตัวอ่อน) · คัดกรองหรือให้ ivermectin ก่อนเริ่ม steroid ขนาดสูงในคนจากพื้นที่ระบาด",
   rubric:"ได้เต็ม = strongyloidiasis (+ พูดถึง hyperinfection risk ได้คะแนนเพิ่ม)",
   pts:[CR(P("Strongyloidiasis","strongyloidiasis","strongyl")),P("Assess hyperinfection risk (steroid, HTLV-1)","hyperinfection","dissemin","steroid","htlv")]}),
  B("15.3 Outline the treatment.",1,{tags:["micro"],
   ans:"<b>Ivermectin 200 µg/kg/วัน PO 1–2 วัน</b> (สไลด์ในไฟล์ให้ 2 วัน หายราว 97%) · ยาทางเลือก <b>albendazole 400 mg bid 7 วัน</b> (ได้ผลด้อยกว่า) · hyperinfection: ivermectin ทุกวันจนตรวจเสมหะ/อุจจาระไม่พบเชื้อ ≥ 2 สัปดาห์ + ลด immunosuppression + ยาปฏิชีวนะครอบคลุม gram-negative ถ้ามี sepsis · ตรวจอุจจาระซ้ำหลังรักษา",
   exp:"Ivermectin ห้ามในหญิงตั้งครรภ์ (ข้อมูลจำกัด) และระวังในพื้นที่ Loa loa · CDC แนะนำ ivermectin 200 µg/kg/day 1–2 วัน",
   rubric:"ได้เต็ม = ivermectin ขนาดถูก · albendazole เป็นทางเลือก ได้บางส่วนถ้าไม่บอก ivermectin",
   pts:[CR(P("Ivermectin 200 µg/kg","ivermectin","ไอเวอร์เมคติน")),P("Alternative: albendazole 400 mg bid 7 days","albendazole"),P("Hyperinfection: daily until negative ≥ 2 weeks; reduce immunosuppression","2 สัปดาห์","2 weeks","hyperinfection","ลด steroid","immunosuppress")]})
 ),
 interp:"สถานีพยาธิในอุจจาระ: rhabditiform larva short buccal cavity + genital primordium = Strongyloides → ivermectin",
 summary:["Strongyloides L1 ในอุจจาระ: short buccal cavity + genital primordium เด่น (hookworm: long buccal cavity)","L3 filariform: notched tail = infective stage พบในเสมหะช่วง hyperinfection","Hyperinfection: ผู้ได้ steroid/HTLV-1 + gram-negative sepsis/meningitis","รักษา: ivermectin 200 µg/kg/day 1–2 วัน · ทางเลือก albendazole 400 mg bid 7 วัน"]})
);
})();

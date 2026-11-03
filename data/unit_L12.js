/* Unit round — L12 Preoperative & postoperative care · Punthita Aimsupanimitr, MD (Dept of General Surgery, KCMH)
   ต้นฉบับ: L12_Preop_-_Postop_care_78.pdf (48 หน้า, สไลด์ + ลายมือ 78) + L12_Pre_and_Post-Operative_Care_jod.pdf (44 หน้า, สไลด์เวอร์ชันเก่ากว่า + ลายมือ jod; p2 = โน้ต bedside)
   200 ข้อ case-based · รูปหน้าเต็ม img/l12_p<N> (78) / l12b_p<N> (jod) · รูปโจทย์ img/l12_q<n> · เฉลยบอกที่มาทุกข้อ · ข้อที่เกินไฟล์มี outside:"นอกสไลด์: …"
   สัญลักษณ์คณะ: มีแค่ 78 p39 (ฟอร์ม Caprini: ❌ + 🟢 = nice to know → ไม่ออก) · ไม่มี 🔴/🟡 */
(function(){
const L="ABCDE";
const U=o=>{if(Array.isArray(o.wrong)){const w={};let j=0;for(let i=0;i<5;i++)if(i!==o.ans)w[L[i]]=o.wrong[j++];o.wrong=w;}
  if(o.outside)o.why=(o.why||"")+"<br><b>นอกสไลด์:</b> "+String(o.outside).replace(/^นอกสไลด์:\s*/,"");
  if(o.mnemonic==="")delete o.mnemonic;return o;};
W.UNIT.push({id:"L12",title:"L12 Preoperative & postoperative care",short:"L12",src:"L12_Preop_-_Postop_care_78.pdf + L12_Pre_and_Post-Operative_Care_jod.pdf (Punthita Aimsupanimitr, MD)",topic:"Perioperative care & Surgical infection",tags:["Pre-op & post-op"],QB:[
U({n:1,
  stem:"A 66-year-old man with diabetes and hypertension is scheduled for an elective sigmoid colectomy for cancer. At the preoperative clinic, the attending asks the student to state why a formal preoperative evaluation is performed. Which statement best describes the aims of preoperative evaluation?",
  opts:["Confirm the cancer diagnosis, stage the tumor and decide whether the operation should be performed at all","Obtain routine laboratory and imaging results for every patient so that anesthesia can proceed without delay","Identify comorbidities and medications, assess perioperative risk, optimize the patient and plan postoperative care","Estimate the hospital stay, calculate the treatment cost and complete the consent form before admission","Replace all long-term medications with substitutes and discharge the patient on the day of surgery"],
  ans:2,
  notes:"สไลด์ไฟล์ 78 หน้า 3 พิมพ์ว่า <b>\"Aim: Identify any comorbidity and medication · Assessment perioperative risk · Preoperative optimization of comorbidities and intervention to lower risk · Development of postoperative care plan\"</b><br>ลายมือไฟล์ 78 หน้า 3: <b>\"พยายามทำให้อยู่ใน optimal condition\"</b><br>ไฟล์ jod หน้า 5 พิมพ์ว่า <b>\"To identify and quantify any comorbidity that may affect the operative outcome\"</b> ลายมือ <b>\"หา u/d ที่ known + unknown\"</b>",
  kimg:["l12_p3","l12b_p5"],
  interp:"โจทย์ถามจุดประสงค์ของ preoperative evaluation ตามสไลด์ ไม่ใช่การวินิจฉัยโรคหรือการเตรียมเอกสาร",
  why:"78 หน้า 3 ระบุ 4 aim = identify comorbidity + medication · assess perioperative risk · preoperative optimization · development of postoperative care plan ตรงกับตัวเลือกที่ถูก ส่วน jod หน้า 5 เพิ่มคำว่า quantify comorbidity (สองไฟล์เขียนต่างกันแต่ไม่ขัดกัน)",
  wrong:["การวินิจฉัยและ staging เป็นงาน work-up ก่อนตัดสินใจผ่า ไม่ใช่ aim ของ preoperative evaluation ที่ทำหลังตัดสินใจผ่าแล้ว — จะถูกถ้าผู้ป่วยมาครั้งแรกด้วยก้อนในลำไส้ที่ยังไม่มีผลชิ้นเนื้อ","การส่งตรวจทุกอย่างเป็น routine ไม่ใช่ aim เพราะ testing ใช้ confirm Hx&PE — จะถูกถ้าเป็นผู้ป่วยอายุมากที่ต้อง screening ตามโรคประจำตัวหลายโรคและวิสัญญีขอ panel เฉพาะ","การประเมินค่ารักษาและเอกสารเป็นงาน administrative ไม่ใช่เป้าหมายทางคลินิก — จะถูกถ้าผู้ป่วยกำลังทำเรื่องเบิกสิทธิ์การรักษา","การเปลี่ยนยาประจำทั้งหมดและจำหน่ายวันผ่าไม่ใช่ aim — จะถูกถ้าเป็นผู้ป่วย ambulatory surgery ที่ผ่าตัดเล็กและกลับบ้านวันเดียว"],
  trap:"อย่าเลือกตัวเลือกที่ให้ตรวจทุกอย่างเป็น routine เพราะสไลด์ให้ตรวจตามข้อบ่งชี้",
  summary:["Preoperative evaluation = หา comorbidity และยา → ประเมิน perioperative risk → optimize ก่อนผ่า → วางแผน postoperative care","เริ่มจาก History + Physical examination ก่อนเสมอ","Testing ใช้ confirm Hx & PE ไม่ใช่ routine","ตัวอย่าง optimization: หยุดบุหรี่ ควบคุม DM/HT และภาวะโภชนาการ"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 3 (= ไฟล์ jod หน้า 5) · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod"}),
U({n:2,
  stem:"A 35-year-old healthy man is booked for elective inguinal hernia repair. He has no symptoms, takes no medication and has a normal physical examination. The intern wants to send a chest film, an EKG and a panel of blood tests on every patient as a routine. According to the lecture framework for general preoperative risk assessment, what is the correct approach?",
  opts:["Rely on history and examination first and order tests only to confirm what they suggest","Order chest film, EKG and blood tests on every patient because testing is the first step of assessment","Order the full panel whenever surgery is elective because there is time to review abnormal results","Skip history and examination in young patients and decide on testing by the age of the patient alone","Order tests only after the anesthesiologist has examined the patient and requested a complete panel"],
  ans:0,
  notes:"สไลด์ไฟล์ 78 หน้า 4 พิมพ์ว่า <b>\"History & Physical examination\"</b> (ตัวใหญ่) → <b>\"Preoperative testing: Chest film, EKG, blood test\"</b> ลายมือ <b>\"ช่วย confirm Hx & PE\"</b><br>สไลด์ไฟล์ 78 หน้า 5: <b>\"General preoperative risk assessment: History · Physical examination · Preoperative testing: not routinely\"</b><br>ไฟล์ jod หน้า 7 ลายมือ: <b>\"→ in case ส่งสัย Hx + PE\"</b>",
  kimg:["l12_p4","l12_p5","l12b_p7","l12b_p4"],
  interp:"คนไข้อายุน้อยไม่มีอาการและตรวจร่างกายปกติ โจทย์ถามหลักการสั่งตรวจก่อนผ่า",
  why:"78 หน้า 4–5: Hx & PE มาก่อน แล้ว testing (chest film, EKG, blood test) เพื่อ confirm Hx & PE และ \"not routinely\" · jod หน้า 7 ลายมือ \"in case สงสัยจาก Hx + PE\" ตรงกัน · jod หน้า 4 จัดลำดับ preoperative management = determining the need for surgery → history → physical examination → investigation",
  wrong:["การส่งตรวจทุกรายทันทีขัดกับหลัก \"not routinely\" ของ testing — จะถูกถ้าผู้ป่วยอายุ 70 ปี มี DM, HT และ CKD ที่ต้องตรวจ Cr และ EKG ตามโรค","การผ่าตัด elective ไม่ใช่เหตุผลส่งตรวจทุกอย่าง ข้อบ่งชี้ต้องมาจากผู้ป่วย — จะถูกถ้าผู้ป่วยมีโรคหัวใจและมีอาการเปลี่ยนไปก่อนผ่า","History และ PE เป็นขั้นแรกเสมอไม่ว่าอายุเท่าใด — จะถูกถ้าเป็นผู้ป่วยฉุกเฉินที่ไม่รู้สึกตัวและไม่มีเวลาซักประวัติ","ลำดับไม่ขึ้นกับคำสั่งวิสัญญีแพทย์ test ต้องมาจาก Hx/PE และชนิดผ่าตัด — จะถูกถ้าวิสัญญีพบ difficult airway และขอ cervical spine film"],
  trap:"คำว่า elective หรืออายุน้อยไม่ได้ทำให้ต้องส่งตรวจทุกอย่าง",
  summary:["ลำดับ: History → Physical examination → Testing เมื่อสงสัย","Preoperative testing = not routine ใช้ confirm Hx & PE","Test ต้องสัมพันธ์กับ comorbidity และชนิดการผ่าตัด","jod หน้า 4 ลำดับ: determining the need for surgery → history → PE → investigation"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 4–5 (= ไฟล์ jod หน้า 6–7, ไฟล์ jod หน้า 4) · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod"}),
U({n:3,
  stem:"Two patients are listed for the same elective cholecystectomy next week: a healthy 30-year-old woman and a 60-year-old man with chronic kidney disease and heart failure who takes diuretics. The resident orders a different set of preoperative tests for each. Which statement from the lecture best justifies this?",
  opts:["Test panels are fixed for each decade of life and do not depend on the patient's diseases","Test panels are determined by the ward to which the patient will be admitted after surgery","Test panels are the same for everyone but sick patients receive stricter reference ranges","Tests are selected according to comorbidities, history and examination, and the operative risk","Test panels depend mainly on the seniority of the surgeon who will perform the operation"],
  ans:3,
  notes:"สไลด์ไฟล์ 78 หน้า 11 พิมพ์ว่า <b>\"Selective use of laboratory tests based on: Patient's comorbidities · History and physical examination · Operative risk: type of operation, timing of operation\"</b><br>สไลด์ไฟล์ 78 หน้า 20: <b>\"Laboratory test: Not routine test\"</b>",
  kimg:["l12_p11","l12_p20"],
  interp:"ผู้ป่วยสองรายผ่าตัดเดียวกันแต่ comorbidity ต่างกัน โจทย์ถามหลักการเลือก test",
  why:"78 หน้า 11: selective use of laboratory tests based on (1) comorbidities (2) Hx & PE (3) operative risk คือชนิดและเวลาผ่าตัด · หน้า 20 ย้ำ \"not routine test\" ผู้ป่วยโรคไต/หัวใจล้มเหลวที่ใช้ยาขับปัสสาวะจึงต้องได้ test เฉพาะ เช่น renal function, electrolytes",
  wrong:["panel ไม่ได้ตายตัวตามทศวรรษอายุ — จะถูกถ้าเป็นโปรแกรมตรวจสุขภาพประจำปีที่กำหนดตามกลุ่มอายุ ไม่ใช่การเตรียมผ่าตัด","ตึกที่ admit ไม่เกี่ยวกับการเลือก test — จะถูกถ้าผู้ป่วยต้อง admit ICU ซึ่งมีชุดตรวจแรกรับเฉพาะของหอ","การเปลี่ยนเกณฑ์ปกติตามโรคไม่ใช่หลักการเลือก test — จะถูกถ้าห้องปฏิบัติการมีค่าอ้างอิงเฉพาะผู้ป่วยโรคไตเรื้อรัง","ระดับอาวุโสของศัลยแพทย์ไม่ใช่ปัจจัย — จะถูกถ้าเป็นการเลือกว่าใครควรเป็นผู้ผ่าตัดในรายที่ซับซ้อน"],
  trap:"ผ่าตัดเหมือนกันไม่ได้แปลว่า test เหมือนกัน เพราะ test เลือกตามตัวผู้ป่วย",
  summary:["Lab ก่อนผ่าเลือกใช้ตาม 3 ปัจจัย: comorbidity, Hx&PE, operative risk","Operative risk = ชนิดและเวลา (timing) ของการผ่าตัด","ไม่มี routine panel สำหรับทุกคน","โรคไต/ยาขับปัสสาวะ → ตรวจ renal function และ electrolytes"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 11, 20 · ไม่มีสัญลักษณ์ · ลายมือไม่มี"}),
U({n:4,
  stem:"A 52-year-old woman is scheduled for elective thyroid lobectomy. Her health has not changed since a visit 3 months ago at the same hospital, when her hemoglobin and creatinine were normal. The intern asks whether to repeat all the laboratory tests. According to the lecture, what is reasonable?",
  opts:["Repeat every test because results older than one month cannot be used for surgery","Use the earlier normal results because they were obtained within the past four months","Repeat every test because only results from the day before surgery are accepted","Repeat the tests only if she is older than 65 years regardless of her condition","Use the earlier results only if they were obtained within the past one week"],
  ans:1,
  notes:"สไลด์ไฟล์ jod หน้า 12 พิมพ์ว่า <b>\"it is probably safe to use test results that were performed and were normal within the past four months\"</b> (ไฮไลต์เหลือง)",
  kimg:["l12b_p12"],
  interp:"ผลปกติเมื่อ 3 เดือนก่อน สุขภาพไม่เปลี่ยน โจทย์ถามว่าต้องตรวจซ้ำหรือไม่",
  why:"jod หน้า 12: ผลตรวจที่ปกติและทำภายใน 4 เดือน \"probably safe to use\" · ผู้ป่วยทำเมื่อ 3 เดือนก่อนและสุขภาพไม่เปลี่ยน จึงใช้ผลเดิมได้ ไม่ต้องตรวจซ้ำ",
  wrong:["สไลด์ไม่ได้กำหนดว่าต้องใหม่กว่า 1 เดือน — จะถูกถ้ากำหนดช่วงสั้น 1 เดือน","สไลด์ไม่ต้องการผลวันก่อนผ่าตัดเท่านั้น — จะถูกถ้าผู้ป่วยมีโรคเปลี่ยนแปลง","อายุ >65 ไม่ใช่เกณฑ์ในการตรวจซ้ำตามสไลด์นี้ — จะถูกถ้าถามถึง CBC ใน major surgery","ช่วง 1 สัปดาห์สั้นเกินกว่าที่สไลด์ระบุ — จะถูกถ้าผู้ป่วยมีอาการเปลี่ยนแปลงล่าสุด"],
  trap:"ผลต้องปกติและสุขภาพไม่เปลี่ยน ถ้ามีอาการหรือโรคใหม่ต้องตรวจใหม่",
  summary:["ผลตรวจปกติภายใน 4 เดือน ใช้ได้ (probably safe)","ใช้เมื่อสถานะสุขภาพไม่เปลี่ยน","ช่วยลดการตรวจซ้ำที่ไม่จำเป็น","สไลด์เดียวกันระบุ lab มี little benefit และ false positive สูง"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 12 · ไม่มีสัญลักษณ์ · ลายมือไม่มี (ไฮไลต์เหลือง)"}),
U({n:5,
  stem:"A 24-year-old healthy woman is admitted for elective excision of a lipoma. An intern orders a large battery of laboratory tests. One mildly abnormal result leads to further investigations and delays the operation by two weeks. Which statement from the lecture best explains the problem with this practice?",
  opts:["Laboratory studies are accurate but cost more than the operation itself in most patients","Laboratory studies damage organ function when they are repeated more than once","Laboratory studies always miss true disease in young patients without symptoms","Laboratory studies are valid only when ordered by the anesthesiologist before admission","Laboratory studies give little benefit and carry a high incidence of false positive results"],
  ans:4,
  notes:"สไลด์ไฟล์ jod หน้า 12 พิมพ์ว่า <b>\"Laboratory studies: little benefit (ขีดเส้นใต้) · high incidence of false positive results · selective use of laboratory tests\"</b>",
  kimg:["l12b_p12"],
  interp:"ผู้ป่วยอายุน้อยแข็งแรง ตรวจจำนวนมากแล้วได้ผลผิดปกติเล็กน้อยที่ทำให้ล่าช้า",
  why:"jod หน้า 12: lab studies → little benefit และ high incidence of false positive results จึงต้อง selective use · ผลบวกลวงทำให้ตรวจต่อโดยไม่จำเป็น เหมือนกรณีนี้",
  wrong:["ค่ารักษาไม่ใช่ปัญหาที่ทำให้ผ่าตัดล่าช้าในกรณีนี้ — จะถูกถ้าโจทย์บอกว่าผู้ป่วยไม่มีสิทธิ์เบิกค่าตรวจและต้องจ่ายเอง","การเจาะเลือดซ้ำไม่ได้ทำลายอวัยวะ — จะถูกถ้าผู้ป่วยถูกเจาะเลือดทุกวันจนเกิด iatrogenic anemia","ปัญหาคือผลบวกลวง ไม่ใช่ผลลบลวงทุกราย — จะถูกถ้าเป็น test ที่ความไวต่ำมากในผู้ป่วยที่มีอาการชัดเจน","ผู้สั่งไม่ใช่ปัจจัยต่อความแม่นยำ — จะถูกถ้ามีข้อกำหนด รพ. ว่า test เฉพาะทางต้องสั่งโดยวิสัญญีแพทย์"],
  trap:"อย่าเข้าใจว่า test ให้ผลลบลวง สไลด์เน้น false positive",
  summary:["ตรวจทุกอย่างในคนแข็งแรง ประโยชน์น้อย (little benefit)","ผลบวกลวงสูง (high incidence of false positive) ทำให้ตรวจต่อโดยไม่จำเป็นและเลื่อนผ่า","จึงต้องใช้ selective use ตาม Hx&PE และชนิดการผ่าตัด","ผลปกติภายใน 4 เดือนใช้ซ้ำได้ถ้าสุขภาพไม่เปลี่ยน"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 12 · ไม่มีสัญลักษณ์ · ลายมือไม่มี"}),
U({n:6,
  stem:"After an upper abdominal incision, a 45-year-old man with severe wound pain avoids deep breathing and coughing. His surgeon says this sequence is the reason the pulmonary system is evaluated before any operation. Which complication does the handwritten note beside Pulmonary Evaluation link to this sequence?",
  opts:["Pulmonary embolism","Pneumothorax","Atelectasis","Pulmonary edema","Aspiration pneumonitis"],
  ans:2,
  notes:"ไฟล์ jod หน้า 6 สไลด์พิมพ์ <b>\"Pulmonary Evaluation\"</b> ลายมือต่อท้าย: <b>\"เจ็บแผล หายใจไม่ [ลึก?] → atelectasis\"</b> (บรรทัด Cardiac: \"Sx = stress → symp ↑ → HR ↑, post-op MI\" · Renal: \"blood loss → renal blood flow ↓ → AKI\" · Diabetes: \"→ delayed wound healing\")",
  kimg:["l12b_p6"],
  interp:"เจ็บแผลหลังผ่าตัดช่องท้องส่วนบนทำให้ไม่หายใจลึก จึงเกิดภาวะปอดแฟบ",
  why:"jod หน้า 6 ลายมือข้าง Pulmonary Evaluation: เจ็บแผล → หายใจไม่ลึก → atelectasis (คำว่า ลึก/ไว อ่านไม่ชัด แต่ลำดับชัดว่าจบที่ atelectasis) · ตรงกับ 78 หน้า 33 ที่ระบุ atelectasis เป็น pulmonary complication",
  wrong:["PE เกิดจาก VTE ซึ่งสไลด์แยกไว้ที่ DVT prophylaxis — จะถูกถ้าผู้ป่วยนอนนานและขาบวม","Pneumothorax เกิดจากการบาดเจ็บหรือหัตถการ ไม่ใช่จากเจ็บแผลแล้วหายใจตื้น — จะถูกถ้ามี central line หรือ barotrauma","Pulmonary edema เกิดจาก fluid overload/หัวใจ ไม่ใช่เจ็บแผล — จะถูกถ้าให้ fluid มากและ EF ต่ำ","Aspiration เกิดจากสำลักตอน induction ไม่ใช่การหายใจตื้นจากเจ็บแผล — จะถูกถ้ามีอาเจียนขณะ induction"],
  trap:"อย่าเลือก PE เพราะ PE เป็นเรื่อง VTE ไม่ใช่เรื่องหายใจตื้น",
  summary:["เจ็บแผล → หายใจตื้น → atelectasis","ผ่าตัดช่องท้องส่วนบนเสี่ยง pulmonary complication","Cardiac: surgical stress → sympathetic ↑ → HR ↑ → post-op MI","Renal: blood loss → renal blood flow ↓ → AKI","DM → delayed wound healing"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 6 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:7,
  stem:"A 70-year-old man undergoes a major operation with an estimated blood loss of 1.5 liters. A student explains why renal function is considered in the preoperative risk assessment. Which sequence is written beside Renal Evaluation in the handwriting of the older lecture deck?",
  opts:["Blood loss lowers renal blood flow and can lead to acute kidney injury","Blood loss raises renal blood flow and can lead to renal hypertension","Blood loss triggers excess diuresis and can lead to hypernatremia","Surgical stress lowers urine output and can lead to nephrotic syndrome","Anesthesia raises renal blood flow and can lead to renal calculi"],
  ans:0,
  notes:"ไฟล์ jod หน้า 6 สไลด์พิมพ์ <b>\"Renal Evaluation\"</b> ลายมือ: <b>\"blood loss → renal blood flow ↓ → AKI\"</b><br>ไฟล์ jod หน้า 15 พิมพ์: <b>\"correct electrolyte, avoid nephrotoxic drug, maintain intravascular volume\"</b>",
  kimg:["l12b_p6","l12b_p15"],
  interp:"เสียเลือดมาก โจทย์ถามเหตุผลที่ต้องประเมินไตก่อนผ่า",
  why:"jod หน้า 6 ลายมือ: blood loss → renal blood flow ↓ → AKI จึงต้องประเมินและรักษาระดับ intravascular volume · สอดคล้องกับ jod หน้า 15 ให้ maintain intravascular volume และเลี่ยงยาที่เป็นพิษต่อไต",
  wrong:["ทิศทางกลับกัน เสียเลือดทำให้ renal blood flow ลดลง — จะถูกถ้าเป็นภาวะ volume overload","เสียเลือดทำให้ปัสสาวะน้อยลงมากกว่า — จะถูกถ้าให้ diuretic ขนาดสูง","nephrotic syndrome ไม่ใช่ผลจากเสียเลือด — จะถูกถ้ามี glomerular disease","anesthesia ทำให้ความดันและ renal perfusion ลดได้ ไม่ใช่เพิ่ม และนิ่วไม่เกี่ยว — จะถูกถ้าถามถึงโรคนิ่ว"],
  trap:"ทิศทางของ renal blood flow คือลดลง",
  summary:["Blood loss → renal blood flow ↓ → AKI","ป้องกัน: แก้ electrolyte, เลี่ยง nephrotoxic drug, รักษา intravascular volume","ผู้ป่วย CKD/DM/HT เสี่ยง AKI","ยา ACEI, ARB, diuretic, NSAID เพิ่มความเสี่ยง"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 6, 15 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:8,
  stem:"A 62-year-old woman is assessed before an elective hemicolectomy. The student wants to assess her functional capacity and cardiovascular fitness during the history. Which group of symptoms should be asked about according to the lecture?",
  opts:["Palpitations, orthopnea and syncope","Fatigue, weight loss and night sweats","Cough, wheeze and sputum production","Chest pain, dyspnea and claudication","Edema, oliguria and nocturia"],
  ans:3,
  notes:"สไลด์ไฟล์ 78 หน้า 6 พิมพ์ว่า <b>\"Functional capacity / cardiovascular fitness: Chest pain · Dyspnea · Claudication\"</b> (ไฮไลต์ม่วง)",
  kimg:["l12_p6"],
  interp:"โจทย์ถามหัวข้อประวัติที่ใช้ประเมิน functional capacity",
  why:"78 หน้า 6 หัวข้อ History ระบุ functional capacity / cardiovascular fitness ถามด้วย chest pain, dyspnea, claudication ครอบคลุมหัวใจ ปอด และหลอดเลือดส่วนปลาย",
  wrong:["เป็นอาการหัวใจที่ถามได้ แต่ไม่ใช่ชุดที่สไลด์ใช้ประเมิน functional capacity — จะถูกถ้าถามการประเมินการเต้นหัวใจผิดจังหวะ","อาการทั่วไปของมะเร็ง ไม่ใช่ functional capacity — จะถูกถ้าถามถึงสถานะโภชนาการ","เป็นอาการระบบหายใจ ไม่ครอบคลุมหัวใจและหลอดเลือดส่วนปลาย — จะถูกถ้าถามถึง pulmonary ROS","เป็นอาการของไตและหัวใจล้มเหลว ไม่ใช่ชุดของ functional capacity — จะถูกถ้าถามถึง renal ROS"],
  trap:"ตัวเลือก palpitations, orthopnea, syncope ฟังดูเป็นหัวใจแต่ไม่ใช่ชุดในสไลด์",
  summary:["Functional capacity = chest pain, dyspnea, claudication","ถามร่วมกับยา อาการแพ้ บุหรี่ แอลกอฮอล์","ถามประวัติ complication จากการดมยา","เป็นส่วนหนึ่งของการประเมินความเสี่ยงหัวใจ"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 6 · ไม่มีสัญลักษณ์ · ลายมือไม่มี"}),
U({n:9,
  stem:"A 58-year-old man is scheduled for an elective inguinal hernia repair. He says he becomes breathless after walking only a few meters on level ground. According to the handwriting on the history slide of the older deck, what does this suggest?",
  opts:["Poor nutritional status that needs albumin replacement","Heart or lung disease that needs cardiac evaluation","Anemia that needs preoperative blood transfusion","Difficult airway that needs anesthetic review","Renal impairment that needs preoperative dialysis"],
  ans:1,
  notes:"ไฟล์ jod หน้า 8 กรอบ History: <b>\"Exercise capacity: cardiac evaluation\"</b> ลายมือ <b>\"→ เดินนิดหน่อยก็เหนื่อย = heart / lung พัง\"</b><br>ลายมือบรรทัดถัดไป <b>\"Smoking and Alcohol use → lung / liver พัง\"</b>",
  kimg:["l12b_p8"],
  interp:"เหนื่อยง่ายเมื่อเดินระยะสั้น บ่งถึง exercise capacity ต่ำ",
  why:"jod หน้า 8 ลายมือข้าง Exercise capacity: เดินนิดหน่อยก็เหนื่อย = heart/lung พัง จึงต้อง cardiac evaluation · ตรงกับ 78 หน้า 6 ที่ถาม chest pain/dyspnea/claudication",
  wrong:["สไลด์เชื่อมอาการเหนื่อยง่ายกับหัวใจ/ปอด ไม่ใช่ภาวะทุพโภชนาการ — จะถูกถ้ามี weight loss","anemia อาจทำให้เหนื่อย แต่สไลด์บันทึกว่าเหนื่อยเมื่อเดินน้อย = heart/lung พัง — จะถูกถ้ามีซีดชัดเจน","Airway ประเมินด้วย Mallampati ไม่ใช่ exercise tolerance — จะถูกถ้ามีเสียงแหบ","ไตวายต้อง dialysis เมื่อ ESRD ไม่ใช่เหตุผลจากการเหนื่อยเมื่อเดิน — จะถูกถ้ามี uremia"],
  trap:"เหนื่อยง่ายไม่ได้แปลว่าซีดหรือโภชนาการแย่โดยอัตโนมัติ",
  summary:["เหนื่อยง่ายเมื่อออกแรงน้อย = exercise capacity ต่ำ = สงสัย heart/lung disease","ต้อง cardiac evaluation","สูบบุหรี่ → ปอด · ดื่มแอลกอฮอล์ → ตับ","อายุมาก = ความเสี่ยงสูง"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 8 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:10,
  stem:"A 38-year-old woman is listed for an elective operation under general anesthesia. She reports that during a previous operation the team had great difficulty placing the breathing tube, and her brother once developed a very high fever with muscle rigidity during anesthesia. Which pair of conditions does the lecture list under previous complications with anesthesia to be asked about?",
  opts:["Postoperative nausea and prolonged paralysis","Awareness during anesthesia and hypothermia","Aspiration pneumonia and spinal headache","Latex anaphylaxis and bradycardia","Difficult airway and malignant hyperthermia"],
  ans:4,
  notes:"สไลด์ไฟล์ 78 หน้า 6 พิมพ์ว่า <b>\"Previous complication with anesthesia: Malignant hyperthermia · Difficult airway\"</b> (ไฮไลต์ม่วง)<br>ไฟล์ jod หน้า 8: <b>\"Previous surgery & anesthesia: any adverse reaction\"</b>",
  kimg:["l12_p6","l12b_p8"],
  interp:"ประวัติใส่ท่อยากและญาติมีไข้สูงกล้ามเนื้อแข็งตอนดมยา โจทย์ถามหัวข้อที่สไลด์ให้ถามเรื่องการดมยาเดิม",
  why:"78 หน้า 6: previous complication with anesthesia = malignant hyperthermia และ difficult airway · jod หน้า 8 ให้ถาม any adverse reaction ต่อการผ่าตัด/ดมยาที่ผ่านมา",
  wrong:["พบได้ แต่ไม่ใช่คู่ที่สไลด์ระบุ — จะถูกถ้าถามผลข้างเคียงทั่วไปของยาดมสลบ","ไม่ใช่คู่ที่สไลด์ระบุ — จะถูกถ้าถามภาวะแทรกซ้อนของ anesthesia depth","ไม่ใช่คู่ที่สไลด์ระบุ — จะถูกถ้าถามภาวะแทรกซ้อนของ spinal anesthesia","ไม่ใช่คู่ที่สไลด์ระบุ — จะถูกถ้าถามประวัติแพ้ยาและวัสดุ"],
  trap:"ประวัติ MH ในญาติก็สำคัญ เพราะเป็นโรคพันธุกรรม",
  summary:["ถามประวัติ complication จากการดมยา: malignant hyperthermia และ difficult airway","ถามประวัติผ่าตัดเดิมและ adverse reaction","ถามประวัติแพ้ยาและแพ้อาหาร","ข้อมูลนี้ส่งต่อวิสัญญีแพทย์"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 6 (= ไฟล์ jod หน้า 8) · ไม่มีสัญลักษณ์ · ลายมือไม่มี"}),
U({n:11,
  stem:"A 29-year-old woman is listed for an elective laparoscopic cholecystectomy under general anesthesia. During the review of systems the student covers the airway, cardiovascular, pulmonary, liver, renal, endocrine and neurologic systems. Which additional item should be specifically asked in this patient?",
  opts:["Possibility of pregnancy","Age at menarche","Family history of breast cancer","History of cervical cancer screening","Number of previous deliveries"],
  ans:0,
  notes:"สไลด์ไฟล์ 78 หน้า 7 พิมพ์ (ตัวแดง ***) <b>\"Review of system: All organ system: Airway, cardiovascular, pulmonary, liver, renal, endocrine, neurologic · Female: pregnancy\"</b> (ไฮไลต์ม่วง)",
  kimg:["l12_p7"],
  interp:"โจทย์ถามรายการ ROS ที่ต้องถามเพิ่มในผู้หญิงวัยเจริญพันธุ์",
  why:"78 หน้า 7: ROS ครบทุกระบบ (airway, CV, pulmonary, liver, renal, endocrine, neurologic) และ \"Female: pregnancy\" เพราะการตั้งครรภ์มีผลต่อการเลือกยา การถ่ายภาพรังสี และเวลาผ่าตัด",
  wrong:["ไม่อยู่ในรายการ ROS ของสไลด์ — จะถูกถ้าถามประวัติสูตินรีเวชทั่วไป","ไม่เกี่ยวกับการดมยาหรือการผ่าตัดครั้งนี้ — จะถูกถ้าเป็นการคัดกรองมะเร็งเต้านม","ไม่อยู่ในรายการ ROS ของสไลด์ — จะถูกถ้าผู้ป่วยมีโรคปากมดลูก","จำนวนการคลอดไม่ใช่ข้อที่สไลด์ระบุ — จะถูกถ้าผ่าตัดทางนรีเวช"],
  trap:"ประวัติสูตินรีเวชอื่น ๆ ไม่ใช่รายการที่สไลด์เน้น",
  summary:["ROS ต้องครอบคลุม airway, CV, pulmonary, liver, renal, endocrine, neurologic","ผู้หญิงวัยเจริญพันธุ์ต้องถามเรื่อง pregnancy ทุกราย เพราะมีผลต่อยา รังสี และเวลาผ่า","ถามภาวะโภชนาการและ weight loss ร่วมด้วย โดยเฉพาะในมะเร็ง","ข้อมูลช่วยตัดสินว่าต้องส่ง test ใดเพิ่ม"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 7 · ไม่มีสัญลักษณ์ (ตัวแดง *** บนสไลด์) · ลายมือไม่มี"}),
U({n:12,
  stem:"A 70-kg man with gastric outlet obstruction is listed for elective surgery. He reports that his weight fell from 70 kg to 66 kg over the last month. According to the lecture definition of significant weight loss, how should this be classified?",
  opts:["Not significant, because the loss is below 10 percent of body weight","Not significant, because the loss occurred over only one month","Significant, because the loss exceeds 5 percent in one month","Significant only if the loss also exceeds 10 percent in one month","Significant only if the serum albumin level is also low"],
  ans:2,
  notes:"สไลด์ไฟล์ 78 หน้า 9 พิมพ์ว่า <b>\"Poor nutritional status: significant weight loss - 5% in 1 month, 10% in 6 months\"</b> (ไฮไลต์ม่วง) → poor wound healing, postoperative complication, risk of infection<br>ไฟล์ jod หน้า 10 เหมือนกัน (ขีดเส้นใต้น้ำเงิน)",
  kimg:["l12_p9","l12b_p10"],
  interp:"คำนวณเปอร์เซ็นต์น้ำหนักที่ลด: 4/70 = 5.7% ใน 1 เดือน",
  why:"78 หน้า 9 / jod หน้า 10: significant weight loss = 5% ใน 1 เดือน หรือ 10% ใน 6 เดือน · ผู้ป่วยลด 4 กก. จาก 70 กก. = 5.7% ใน 1 เดือน เกิน 5% จึง significant",
  wrong:["เกณฑ์ 10% ใช้กับช่วง 6 เดือน ไม่ใช่ 1 เดือน — จะถูกถ้าน้ำหนักลดช้า ๆ จาก 70 เป็น 62 กก. ใน 6 เดือน","ช่วง 1 เดือนที่สั้นทำให้การลดเร็วและมีนัยสำคัญมากกว่า — จะถูกถ้าน้ำหนักลดไม่ถึง 5% เช่น 2 กก. ใน 1 เดือน","เกณฑ์ 10% ใน 1 เดือนไม่ได้อยู่ในนิยาม — จะถูกถ้าเป็นการลดน้ำหนักเฉียบพลันจากภาวะขาดน้ำรุนแรง","albumin ไม่ใช่เกณฑ์ของนิยามนี้ — จะถูกถ้าใช้เกณฑ์ ESPEN ซึ่งรวม albumin <30 g/L"],
  trap:"อย่าใช้เกณฑ์ 10% กับระยะ 1 เดือน",
  summary:["Significant weight loss = 5% ใน 1 เดือน หรือ 10% ใน 6 เดือน","คำนวณ % = น้ำหนักที่ลด ÷ น้ำหนักเดิม × 100","ผลเสีย: แผลหายช้า, complication หลังผ่า, ติดเชื้อ","ควร improve nutrition ก่อนผ่า"],
  tags:["Pre-op & post-op","Nutrition"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 9 (= ไฟล์ jod หน้า 10) · ไม่มีสัญลักษณ์ · ลายมือไม่มี (ไฮไลต์/ขีดเส้นใต้)"}),
U({n:13,
  stem:"A 50-kg woman scheduled for elective hysterectomy reports that over the past 6 months her weight gradually fell from 50 kg to 46 kg. She has no other nutritional problem. According to the definition of significant weight loss given in the lecture, how should her weight loss be classified?",
  opts:["Significant, because any loss above 5 percent counts regardless of time","Significant, because a loss of 4 kg exceeds the limit of 3 kg","Not significant, because only a loss above 15 percent in 6 months counts","Not significant, because it is below 10 percent over 6 months","Significant only if her body mass index is below 25"],
  ans:3,
  notes:"สไลด์ไฟล์ 78 หน้า 9 พิมพ์ว่า <b>\"significant weight loss - 5% in 1 month, 10% in 6 months\"</b><br>ไฟล์ jod หน้า 10 เหมือนกัน",
  kimg:["l12_p9","l12b_p10"],
  interp:"ลด 4 กก. จาก 50 กก. = 8% ใน 6 เดือน ต้องเทียบกับเกณฑ์ที่ตรงช่วงเวลา",
  why:"เกณฑ์คือ 5% ใน 1 เดือน หรือ 10% ใน 6 เดือน · 8% ใน 6 เดือนยังต่ำกว่า 10% และเป็นการลดช้า ไม่ถึงเกณฑ์ตามสไลด์ (ยังควรสังเกตภาวะโภชนาการด้านอื่น)",
  wrong:["เกณฑ์ 5% ใช้กับช่วง 1 เดือน ไม่ใช่ทุกช่วงเวลา — จะถูกถ้าผู้ป่วยลด 2.5 กก. ภายใน 1 เดือน","การเทียบกับน้ำหนัก 3 กก. ไม่ใช่นิยาม — จะถูกถ้าเป็นเด็กที่ใช้เกณฑ์ตามอายุ","เกณฑ์ที่ใช้คือ 10% ไม่ใช่ 15% ใน 6 เดือน — จะถูกถ้าใช้เกณฑ์ ESPEN ที่ใช้ช่วง 10–15%","BMI ไม่ใช่เกณฑ์ของนิยามนี้ — จะถูกถ้าถามเกณฑ์ severe nutritional risk ที่ใช้ BMI <18.5"],
  trap:"ตัวเลข 5% และ 10% คู่กับช่วงเวลา 1 และ 6 เดือน ไม่ใช่ใช้สลับกันได้",
  summary:["เกณฑ์ significant weight loss: 5% ใน 1 เดือน หรือ 10% ใน 6 เดือน","ตัวอย่าง 50 → 46 กก. ใน 6 เดือน = 8% จึงต่ำกว่า 10% ไม่ถึงเกณฑ์","ต้องจับคู่ตัวเลขกับช่วงเวลา ห้ามใช้ 5% กับ 6 เดือน","แม้ไม่ถึงเกณฑ์ ก็ยังประเมินโภชนาการจาก PE และ BMI"],
  tags:["Pre-op & post-op","Nutrition"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 9 (= ไฟล์ jod หน้า 10) · ไม่มีสัญลักษณ์ · ลายมือไม่มี (ไฮไลต์/ขีดเส้นใต้)"}),
U({n:14,
  stem:"A 66-year-old man with esophageal cancer has lost a large amount of weight and is listed for esophagectomy. The team wants to improve his nutrition before surgery. Which set of postoperative problems does the lecture associate with poor nutritional status?",
  opts:["Delayed gastric emptying, ileus and hypercalcemia","Poor wound healing, postoperative complications and infection","Wound hematoma, urinary retention and hyperglycemia","Hypercoagulability, tachycardia and hypernatremia","Prolonged paralysis, hypothermia and delayed emergence"],
  ans:1,
  notes:"สไลด์ไฟล์ 78 หน้า 9 พิมพ์ว่า <b>\"Poor nutritional status: significant weight loss → poor wound healing · postoperative complication · risk of infection\"</b><br>ไฟล์ jod หน้า 8 ลายมือข้าง Nutritional status: <b>\"→ improve nutrition before Sx\"</b>",
  kimg:["l12_p9","l12b_p10","l12b_p8"],
  interp:"ผู้ป่วยมะเร็งหลอดอาหารน้ำหนักลดมาก ถามผลเสียของภาวะทุพโภชนาการ",
  why:"78 หน้า 9: poor nutritional status → poor wound healing, postoperative complication, risk of infection (jod หน้า 10 ขีดเส้นใต้ทั้ง 3 ข้อ) · ลายมือ jod หน้า 8 สรุปว่าควร improve nutrition before Sx",
  wrong:["ไม่ใช่ผลของ poor nutritional status ตามสไลด์ — จะถูกถ้าถามผลของยาแก้ปวดกลุ่ม opioid","ไม่ใช่ผลที่สไลด์ระบุ — จะถูกถ้าถามภาวะแทรกซ้อนของหัตถการระบบปัสสาวะ","ไม่ใช่ผลที่สไลด์ระบุ — จะถูกถ้าถามถึง OCP และ dehydration","เป็นผลของยาดมสลบมากกว่า ไม่ใช่ของภาวะทุพโภชนาการ — จะถูกถ้าถามถึงการฟื้นจากยาสลบ"],
  trap:"ตัวเลือกอื่นเป็นปัญหาของยาหรือหัตถการ ไม่ใช่ของโภชนาการ",
  summary:["Poor nutrition → แผลหายช้า, complication, ติดเชื้อ","เกณฑ์: weight loss 5% ใน 1 เดือน หรือ 10% ใน 6 เดือน","ควร improve nutrition ก่อนผ่า","มะเร็งมักมี weight loss"],
  tags:["Pre-op & post-op","Nutrition"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 9 (= ไฟล์ jod หน้า 10, ไฟล์ jod หน้า 8) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:15,
  stem:"A 64-year-old man with gastric cancer awaits gastrectomy. He has lost 12 percent of body weight in 6 months, his BMI is 18 kg/m2 and his serum albumin is 28 g/L, with normal liver and renal function. Which management is most appropriate before this major operation?",
  opts:["Proceed immediately because any delay for nutrition worsens the cancer outcome","Start nutrition therapy only after the operation once oral intake has resumed","Give albumin infusion on the morning of surgery to correct the level","Postpone surgery for six months until the weight returns to the previous level","Give nutrition therapy for 7 to 14 days before surgery even if the operation is delayed"],
  ans:4,
  notes:"สไลด์ไฟล์ 78 หน้า 9 พิมพ์ว่า <b>\"Poor nutritional status: significant weight loss - 5% in 1 month, 10% in 6 months\"</b><br>ไฟล์ jod หน้า 8 ลายมือ: <b>\"→ improve nutrition before Sx\"</b> · ไฟล์ 78 หน้า 7 ลายมือ: <b>\"– e.g. ใน CA\"</b> ข้าง weight loss",
  kimg:["l12_p9","l12b_p8","l12_p7"],
  interp:"น้ำหนักลด 12% ใน 6 เดือน BMI ต่ำ albumin ต่ำ ก่อนผ่าตัดใหญ่ ถามแนวทางจัดการ",
  why:"ไฟล์บอกให้ improve nutrition before Sx ส่วนระยะเวลาและเกณฑ์ severe nutritional risk มาจาก ESPEN 2021: weight loss >10–15% ใน 6 เดือน, BMI <18.5, SGA C หรือ albumin <30 g/L → nutrition therapy 7–14 วันก่อน major surgery แม้ต้องเลื่อนผ่า",
  wrong:["ผู้ป่วยมี severe nutritional risk การเลื่อนผ่า 1–2 สัปดาห์เพื่อ nutrition therapy ให้ประโยชน์ — จะถูกถ้าผู้ป่วยไม่เสี่ยงทุพโภชนาการ","การให้หลังผ่าตัดอย่างเดียวช้าเกินไปสำหรับ severe risk — จะถูกถ้าผู้ป่วยสามารถกินได้ปกติ","การให้ albumin ไม่ได้แก้ภาวะทุพโภชนาการ — จะถูกถ้ามีเหตุจำเพาะเช่น hypovolemia","การเลื่อน 6 เดือนนานเกินไปสำหรับมะเร็ง — จะถูกถ้าเป็นโรคไม่เร่งด่วน"],
  trap:"ไม่ใช่การเติม albumin แต่เป็น nutrition therapy เต็มรูปแบบก่อนผ่า",
  summary:["ผู้ป่วย weight loss มาก ควร improve nutrition ก่อนผ่า (ไฟล์)","ESPEN 2021: severe nutritional risk = weight loss >10–15% ใน 6 เดือน, BMI <18.5, SGA C, albumin <30 g/L","ให้ nutrition therapy 7–14 วัน ก่อน major surgery","ยอมเลื่อนผ่าได้ถ้าจำเป็น"],
  tags:["Pre-op & post-op","Nutrition"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 9 + ไฟล์ jod หน้า 8 · ไม่มีสัญลักษณ์ · ลายมือ jod และ 78",
  outside:"นอกสไลด์: เกณฑ์ ESPEN 2021 (albumin <30 g/L, BMI <18.5) และระยะ 7–14 วันของ nutrition therapy · ไฟล์ให้แค่ significant weight loss และ improve nutrition before Sx"}),
U({n:16,
  stem:"A 55-year-old man with controlled hypertension may be offered a minor skin lesion excision under local anesthesia or a major hepatic resection next month. A colleague proposes ordering exactly the same panel of tests for both. Which statement matches the lecture?",
  opts:["The panel should differ because test selection also depends on the type and timing of the operation","The panel should be identical because only the comorbidity of the patient decides testing","The panel should be identical because the patient rather than the operation carries the risk","The panel should differ only according to the anesthetic technique chosen by the team","The panel should differ only according to the day of the week of the operation"],
  ans:0,
  notes:"สไลด์ไฟล์ 78 หน้า 11 พิมพ์ว่า <b>\"Operative risk: type of operation, timing of operation\"</b><br>ไฟล์ jod หน้า 7 ลายมือข้าง Surgical risk assessment: <b>\"minor – major Sx ต่างกัน\"</b>",
  kimg:["l12_p11","l12b_p7"],
  interp:"ผู้ป่วยคนเดียวกันแต่การผ่าตัดเล็กกับใหญ่ต่างกัน ถามหลักการเลือก test",
  why:"78 หน้า 11: selective tests ตาม comorbidity, Hx&PE และ operative risk (type, timing) · jod หน้า 7 ลายมือ: minor–major Sx ต่างกัน จึงเลือก test ต่างกัน",
  wrong:["ความเสี่ยงไม่ได้ขึ้นกับตัวผู้ป่วยอย่างเดียว — จะถูกถ้าผู้ป่วยสองรายผ่าตัดเดียวกันและ comorbidity ต่างกัน","การคิดว่าผู้ป่วยเป็นผู้แบกความเสี่ยงเพียงฝ่ายเดียวไม่ถูก — จะถูกถ้าการผ่าตัดทั้งสองชนิดเสี่ยงเท่ากัน","ชนิดการดมยาไม่ใช่เกณฑ์หลักของสไลด์ — จะถูกถ้าวางแผน neuraxial anesthesia ซึ่งต้องตรวจ coagulation","วันในสัปดาห์ไม่ใช่เกณฑ์ — จะถูกถ้า timing หมายถึงความเร่งด่วนของโรค เช่น ผ่าตัดฉุกเฉิน"],
  trap:"ความเสี่ยงไม่ได้มาจากตัวผู้ป่วยอย่างเดียว",
  summary:["Operative risk = ชนิดและเวลาของการผ่าตัด","Minor กับ major surgery ใช้ test ต่างกัน","Major surgery มักต้อง CBC, renal function เพิ่ม","เลือก test ตามหลัก selective"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 11 + ไฟล์ jod หน้า 7 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:17,
  stem:"A 62-year-old man with a previous ischemic stroke takes clopidogrel daily. He has no coronary stent. He is booked for an elective open colectomy, and neuraxial anesthesia is not planned. According to the lecture, how long before surgery should the clopidogrel be stopped?",
  opts:["1 day","2 days","3 days","5 days","14 days"],
  ans:3,
  notes:"ไฟล์ jod หน้า 9 สไลด์ <b>\"Antiplatelet: Aspirin, Clopidogrel\"</b> ลายมือ <b>\"Clopidogrel = หยุด 5-7 วันก่อนผ่า\"</b><br>ไฟล์ 78 หน้า 8 ไฮไลต์ <b>\"Antiplatelet: Aspirin, Clopidogrel\"</b>",
  kimg:["l12_p8","l12b_p9"],
  interp:"ผู้ป่วยใช้ clopidogrel ไม่มี stent ผ่าตัด elective ถามระยะเวลาหยุดยา",
  why:"jod หน้า 9 ลายมือ: clopidogrel หยุด 5–7 วันก่อนผ่า · แนวทาง 2024 AHA/ACC หยุด clopidogrel ประมาณ 5 วัน (prasugrel 7, ticagrelor 3) จึงเลือก 5 วัน · ⚠ ไม่ตรงกัน: ลายมือ aspirin \"หยุด 7 วัน\" ต่างจาก guideline ใหม่ที่ให้ต่อ aspirin ในผู้ป่วยส่วนใหญ่ แต่ข้อนี้ถาม clopidogrel เท่านั้น",
  wrong:["สั้นเกินไปสำหรับยับยั้งเกล็ดเลือดแบบ irreversible — จะถูกถ้าเป็นยา reversible ที่ออกฤทธิ์สั้น","สั้นเกินไป ไม่ถึงช่วงที่ไฟล์ระบุ — จะถูกถ้าถามถึง ticagrelor ซึ่งหยุดประมาณ 3 วัน","ยังสั้นกว่าช่วง 5–7 วันที่ลายมือระบุ — จะถูกถ้าเป็น ticagrelor","นานเกินไปและเพิ่มความเสี่ยงโรคหลอดเลือดสมอง — จะถูกถ้าไม่มีความเสี่ยง thrombosis"],
  trap:"ตัวเลือก 1–3 วันเป็นช่วงของ ticagrelor หรือ DOAC ไม่ใช่ clopidogrel",
  summary:["Clopidogrel หยุด 5–7 วัน (ลายมือ jod) ≈ 5 วัน (2024 AHA/ACC)","Prasugrel 7 วัน · ticagrelor 3 วัน","ห้ามหยุด DAPT เองถ้ามี stent ใหม่ ต้องปรึกษา cardiology","Aspirin: guideline ใหม่ให้ต่อในส่วนใหญ่"],
  tags:["Pre-op & post-op","Hemostasis & transfusion"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 9 (= ไฟล์ 78 หน้า 8) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:18,
  stem:"A 67-year-old man had a drug-eluting coronary stent placed 2 months ago and takes aspirin and clopidogrel. He now needs a non-urgent cholecystectomy. A junior colleague wants to stop both drugs 7 days before surgery according to an old handwritten rule. What is the most appropriate course?",
  opts:["Stop both drugs 7 days before surgery and operate as scheduled","Stop only the aspirin and continue the clopidogrel until the day of operation","Stop clopidogrel for 14 days and replace it with warfarin before surgery","Not stop dual antiplatelet therapy by himself and discuss the timing with the cardiologist","Stop both drugs 5 days before surgery and give heparin bridging"],
  ans:3,
  notes:"ไฟล์ jod หน้า 9 ลายมือ: <b>\"Aspirin = หยุด 7 วันก่อนผ่า · Clopidogrel = หยุด 5-7 วันก่อนผ่า\"</b><br>ไฟล์ 78 หน้า 8 ไฮไลต์ <b>\"Antiplatelet: Aspirin, Clopidogrel\"</b> (ถามยาทุกกลุ่มก่อนผ่า)",
  kimg:["l12b_p9","l12_p8"],
  interp:"stent ใหม่ (DES <3 เดือน) ร่วมกับกฎ 7 วันแบบเก่า ต้องรู้ว่า guideline ปัจจุบันต่างกัน",
  why:"⚠ ไม่ตรงกัน: ลายมือ jod เขียนให้หยุด aspirin 7 วัน แต่ CHEST 2022 และ 2024 AHA/ACC แนะนำต่อ aspirin ในส่วนใหญ่ และห้ามหยุด DAPT เองเมื่อ stent ใหม่ (BMS <30 วัน, DES <3 เดือน) ให้ปรึกษา cardiology และเลื่อนผ่า elective",
  wrong:["การหยุดทั้งสองตัวใน stent ใหม่เสี่ยง stent thrombosis — จะถูกถ้า stent ใส่นานกว่า 12 เดือนหรือผู้ป่วยไม่เคยใส่ stent","การหยุด aspirin ตัวเดียวและคง clopidogrel ไม่ใช่แนวทาง (ควรต่อ aspirin) — จะถูกถ้าเป็นผู้ป่วยที่เสี่ยง bleeding สูงมากและมี stent นานแล้ว","warfarin ไม่ใช้ทดแทน antiplatelet ในผู้ป่วย stent — จะถูกถ้าผู้ป่วยมี AF ร่วม","heparin bridging ไม่ป้องกัน stent thrombosis แทน DAPT — จะถูกถ้าเป็นผู้ป่วย mechanical valve"],
  trap:"อย่านำกฎ 7 วันในลายมือไปใช้กับผู้ป่วย stent ใหม่",
  summary:["Stent ใหม่: ห้ามหยุด DAPT เอง ปรึกษา cardiology","BMS <30 วัน · DES <3 เดือน = เสี่ยงสูง","Aspirin ส่วนใหญ่ควรต่อ (CHEST 2022, 2024 AHA/ACC)","เลื่อนผ่า elective ถ้าอยู่ในช่วงเสี่ยง"],
  tags:["Pre-op & post-op","Hemostasis & transfusion"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 9 + ไฟล์ 78 หน้า 8 · ไม่มีสัญลักษณ์ · ลายมือ jod",
  outside:"นอกสไลด์: guideline ปัจจุบันเรื่อง DAPT หลัง coronary stent และการต่อ aspirin (ไฟล์มีแต่ลายมือ aspirin หยุด 7 วัน)"}),
U({n:19,
  stem:"A 70-year-old man with chronic atrial fibrillation takes warfarin and is scheduled for an elective right hemicolectomy under general anesthesia. Which plan matches the lecture for the vitamin K antagonist?",
  opts:["Stop the drug 1 day before surgery and operate regardless of the INR","Stop the drug about 5 days before surgery and check the INR before the operation","Continue the drug unchanged and give vitamin K on the morning of surgery","Stop the drug 2 days before surgery and start a direct oral anticoagulant","Stop the drug 12 hours before surgery and check the platelet count"],
  ans:1,
  notes:"ไฟล์ jod หน้า 9 สไลด์ <b>\"Anticoagulant: Vit K antagonist, DOAC\"</b> ลายมือ <b>\"หยุด warfarin 5-7 วันก่อนผ่า\"</b><br>ไฟล์ 78 หน้า 8 ไฮไลต์ <b>\"Anticoagulant: Vitamin K antagonist, Direct oral anticoagulant\"</b>",
  kimg:["l12_p8","l12b_p9"],
  interp:"ผู้ป่วย AF ใช้ warfarin ผ่าตัด elective ถามการหยุดยาและการติดตาม",
  why:"jod หน้า 9 ลายมือ: หยุด warfarin 5–7 วัน · แนวทาง CHEST 2022 หยุดประมาณ 5 วันและเช็ก INR ก่อนผ่า (ส่วนใหญ่ไม่ต้อง bridging) ตรงกับลายมือ",
  wrong:["1 วันสั้นเกินไป INR ยังสูง — จะถูกถ้าเป็น DOAC ที่ออกฤทธิ์สั้น","การต่อ warfarin แล้วให้ vitamin K เช้าวันผ่าไม่ใช่แผนที่วางไว้ — จะถูกถ้าเป็นผ่าตัดฉุกเฉิน","2 วันสั้นเกินไปและการเปลี่ยนเป็น DOAC ไม่ใช่แผนมาตรฐาน — จะถูกถ้าผู้ป่วยใช้ DOAC อยู่แล้ว","12 ชั่วโมงสั้นมากและเกล็ดเลือดไม่ใช่ตัวติดตาม warfarin — จะถูกถ้าเป็นการให้ heparin"],
  trap:"warfarin ต้องหยุดนานกว่า DOAC มาก",
  summary:["Warfarin หยุดประมาณ 5 วันก่อนผ่า (ลายมือ 5–7 วัน) และเช็ก INR ก่อนผ่า","DOAC หยุดสั้นกว่า คือ 1–2 วัน","ส่วนใหญ่ไม่ต้อง bridging (CHEST 2022)","การให้ vitamin K เช้าวันผ่าใช้ในรายเร่งด่วน ไม่ใช่แผนปกติ"],
  tags:["Pre-op & post-op","Hemostasis & transfusion"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 9 (= ไฟล์ 78 หน้า 8) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:20,
  stem:"A 74-year-old man with atrial fibrillation takes rivaroxaban and has normal renal function. He is booked for an elective open sigmoid colectomy, which has a high bleeding risk. Which plan is most appropriate for the anticoagulant?",
  opts:["Continue the drug until the morning of surgery without change","Stop the drug on the morning of surgery only","Stop the drug 5 days before surgery with heparin bridging","Stop the drug 10 days before surgery and start aspirin","Stop the drug 2 days before surgery without bridging"],
  ans:4,
  notes:"ไฟล์ jod หน้า 9 สไลด์ <b>\"Anticoagulant: Vit K antagonist, DOAC\"</b> ลายมือ <b>\"หยุด DOAC 1-2 วันก่อนผ่า\"</b><br>ไฟล์ 78 หน้า 8: ไฮไลต์ <b>\"Direct oral anticoagulant\"</b>",
  kimg:["l12b_p9","l12_p8"],
  interp:"DOAC ผ่าตัดที่ bleeding risk สูง การทำงานของไตปกติ",
  why:"jod หน้า 9 ลายมือเขียนว่า \"หยุด DOAC 1-2 วันก่อนผ่า\" ผู้ป่วยรายนี้ใช้ rivaroxaban ไตปกติ และผ่าตัด open colectomy ซึ่งมี bleeding risk สูง จึงเลือกปลายช่วงคือหยุด 2 วัน (ผ่าตัด bleeding risk ต่ำหยุด 1 วัน ตาม CHEST 2022) ไม่ต้อง bridging ด้วย heparin ต่างจาก warfarin ที่ต้องหยุดประมาณ 5 วัน",
  wrong:["ไม่หยุดยาเสี่ยงเลือดออกในผ่าตัดที่ bleeding risk สูง — จะถูกถ้าเป็นหัตถการ bleeding risk ต่ำมาก","หยุดเช้าวันผ่ายังมียาในร่างกาย — จะถูกถ้ายาถูกขับเร็วและ bleeding risk ต่ำมาก","5 วันและ bridging เป็นรูปแบบของ warfarin — จะถูกถ้าใช้ warfarin","10 วันนานเกินไปและ aspirin ไม่ใช่ทดแทน — จะถูกถ้ามี stent"],
  trap:"DOAC ไม่ต้อง bridging ต่างจาก warfarin ในบางกรณี",
  summary:["DOAC หยุด 1–2 วันก่อนผ่า ตามลายมือ jod หน้า 9","Bleeding risk สูงหยุด 2 วัน ต่ำหยุด 1 วัน ปรับตาม CrCl","ส่วนใหญ่ไม่ต้อง bridging ด้วย heparin","Warfarin ต้องหยุดนานกว่า คือ 5 วัน"],
  tags:["Pre-op & post-op","Hemostasis & transfusion"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 9 (= ไฟล์ 78 หน้า 8) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:21,
  stem:"A 55-year-old woman with rheumatoid arthritis has taken daily prednisolone for 3 years and is scheduled for an elective abdominal hysterectomy. During planning the anesthesiologist is concerned about her long-term steroid use. Which problem is written in the handwriting beside corticosteroid on the medication slide?",
  opts:["Adrenal insufficiency and infection","Electrolyte imbalance and arrhythmia","Acidosis from renal impairment","Hypercoagulable state","Bleeding from platelet inhibition"],
  ans:0,
  notes:"ไฟล์ jod หน้า 9 สไลด์ <b>\"Corticosteroid\"</b> ลายมือ <b>\"→ อาจมี adrenal insuff / infection\"</b><br>ไฟล์ 78 หน้า 8 ไฮไลต์รวม <b>\"Corticosteroid / Diuretics / Hypoglycemic drug\"</b>",
  kimg:["l12b_p9","l12_p8"],
  interp:"ใช้ steroid ระยะยาว โจทย์ถามผลเสียที่ลายมือเขียนไว้",
  why:"jod หน้า 9 ลายมือ: corticosteroid → อาจมี adrenal insufficiency / infection · กลไก: steroid ระยะยาวกด HPA axis ถ้าผ่าตัดโดยไม่ได้รับ stress dose จะเกิด adrenal insufficiency และติดเชื้อง่าย",
  wrong:["เป็นผลของ diuretic ตามลายมือ — จะถูกถ้าผู้ป่วยใช้ furosemide","เป็นผลของ hypoglycemic drug (metformin) ตามลายมือ — จะถูกถ้าผู้ป่วยใช้ metformin ร่วมกับโรคไต","เป็นผลของ OCPs ตามลายมือ — จะถูกถ้าผู้ป่วยใช้ยาคุมกำเนิด","เป็นผลของ antiplatelet ตามลายมือ — จะถูกถ้าผู้ป่วยใช้ aspirin หรือ clopidogrel"],
  trap:"ตัวเลือกอื่นเป็นผลของยาอีกกลุ่มในหน้าเดียวกัน",
  summary:["Corticosteroid ระยะยาว กด HPA axis → adrenal insufficiency และติดเชื้อง่าย","ถ้าผ่าตัดโดยไม่ให้ stress dose อาจมีความดันต่ำรุนแรง","Diuretic → electrolyte imbalance · hypoglycemic → acidosis เมื่อไตไม่ดี · OCPs → hypercoagulable","จำผลเสียของยาแต่ละกลุ่มให้จับคู่ถูก"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 9 (= ไฟล์ 78 หน้า 8) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:22,
  stem:"A 72-year-old woman with heart failure takes furosemide and hydrochlorothiazide and is scheduled for hip hemiarthroplasty. The anesthesiologist asks about the perioperative problem expected with her diuretics. Which problem is written in the handwriting beside diuretics on the medication slide?",
  opts:["Adrenal insufficiency","Lactic acidosis","Hypercoagulable state","Electrolyte imbalance","Platelet dysfunction"],
  ans:3,
  notes:"ไฟล์ jod หน้า 9 สไลด์ <b>\"Diuretics\"</b> ลายมือ <b>\"→ e'lyte imbalance\"</b><br>ไฟล์ 78 หน้า 8: <b>\"Corticosteroid / Diuretics / Hypoglycemic drug\"</b>",
  kimg:["l12b_p9","l12_p8"],
  interp:"ยาขับปัสสาวะสองตัวในผู้ป่วยหัวใจล้มเหลว ถามปัญหาที่ต้องระวังก่อนผ่า",
  why:"jod หน้า 9 ลายมือ: diuretics → electrolyte imbalance · diuretic ทำให้ K, Na, Mg เสีย อาจเกิด arrhythmia จึงควรตรวจ electrolytes ก่อนผ่า",
  wrong:["เป็นผลของ corticosteroid — จะถูกถ้าผู้ป่วยใช้ prednisolone ระยะยาว","เป็นผลของ hypoglycemic drug — จะถูกถ้าใช้ metformin ร่วมกับไตเสื่อม","เป็นผลของ OCPs — จะถูกถ้าผู้ป่วยใช้ยาคุมกำเนิด","เป็นผลของ antiplatelet — จะถูกถ้าใช้ aspirin หรือ clopidogrel"],
  trap:"Adrenal insufficiency เป็นปัญหาของ steroid ไม่ใช่ diuretic",
  summary:["Diuretic ทำให้เสีย K, Na, Mg → electrolyte imbalance → arrhythmia","ตรวจ electrolytes ก่อนผ่าในผู้ป่วยที่ใช้ diuretic","ยาอื่นในสไลด์: steroid → adrenal insufficiency, OCPs → hypercoagulable","ผู้ป่วยหัวใจล้มเหลวใช้ diuretic บ่อย จึงเสี่ยงเป็นพิเศษ"],
  tags:["Pre-op & post-op","Fluid & electrolyte"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 9 (= ไฟล์ 78 หน้า 8) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:23,
  stem:"A 68-year-old diabetic man with chronic kidney disease takes metformin and is scheduled for a major abdominal operation. The student is asked what concern the hypoglycemic drug raises and how it should be handled. Which answer matches the handwriting on the medication slides?",
  opts:["Continue it and double the dose to prevent perioperative hyperglycemia","Withhold it for 3 weeks before surgery to prevent severe hypoglycemia","Withhold it on the day of surgery because poor renal function can lead to acidosis","Continue it unchanged because it never affects the acid-base balance","Replace it with a sulfonylurea on the morning of surgery"],
  ans:2,
  notes:"ไฟล์ 78 หน้า 8 ลายมือ: <b>\"ถ้าไม่หยุดอาจเกิด met. acid.\"</b> (ลูกศรชี้จากแถว <b>Corticosteroid / Diuretics / Hypoglycemic drug</b>)<br>ไฟล์ jod หน้า 9 ลายมือข้าง Hypoglycemic drug: <b>\"→ ไตไม่ดี = อาจเกิด acidosis\"</b>",
  kimg:["l12_p8","l12b_p9"],
  interp:"เบาหวานร่วมกับไตเรื้อรัง ใช้ metformin ก่อนผ่าใหญ่",
  why:"78 หน้า 8: ถ้าไม่หยุดอาจเกิด metabolic acidosis · jod หน้า 9: ไตไม่ดี = อาจเกิด acidosis (metformin + ไตวาย/hypoperfusion → lactic acidosis) จึงงด metformin ในวันผ่าตัด",
  wrong:["เพิ่มขนาดยาไม่ใช่แนวทาง และ metformin เสี่ยง acidosis ในไตเสื่อม — จะถูกถ้าไม่มีโรคไต","การหยุด 3 สัปดาห์ไม่จำเป็น — จะถูกถ้าเป็นยาที่ออกฤทธิ์ยาวนานเช่น insulin ชนิดพิเศษ","ลายมือระบุว่าถ้าไม่หยุดอาจเกิด metabolic acidosis — จะถูกถ้าไตปกติและผ่าตัดเล็ก","การเปลี่ยนเป็น sulfonylurea ในวันผ่าเสี่ยง hypoglycemia — จะถูกถ้าแพทย์ตัดสินใจเปลี่ยนยาเพื่อคุมน้ำตาลระยะยาว"],
  trap:"อย่าลืมเงื่อนไข \"ไตไม่ดี\" ที่ทำให้เกิด acidosis",
  summary:["Metformin + ไตไม่ดี หรือ hypoperfusion → lactic/metabolic acidosis","ลายมือ 78: ถ้าไม่หยุดอาจเกิด metabolic acidosis","งด metformin ในวันผ่าตัด","เบาหวานคุมไม่ดีทำให้แผลหายช้า (jod หน้า 6)"],
  tags:["Pre-op & post-op","Metabolic response"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 8 (= ไฟล์ jod หน้า 9) · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod"}),
U({n:24,
  stem:"A 58-year-old woman with type 2 diabetes takes empagliflozin and is scheduled for elective hysterectomy next week. To reduce the risk of euglycemic ketoacidosis, how many days before surgery should the SGLT2 inhibitor be stopped?",
  opts:["1 day","2 days","3 days","7 days","14 days"],
  ans:2,
  notes:"ไฟล์ 78 หน้า 8 ลายมือ: <b>\"ถ้าไม่หยุดอาจเกิด met. acid.\"</b> ที่ Hypoglycemic drug<br>ไฟล์ jod หน้า 9 ลายมือ: <b>\"Hypoglycemic drug → ไตไม่ดี = อาจเกิด acidosis\"</b>",
  kimg:["l12_p8","l12b_p9"],
  interp:"SGLT2 inhibitor เป็น hypoglycemic drug ที่เสี่ยง ketoacidosis ถามเวลาหยุดก่อนผ่า",
  why:"ไฟล์ระบุแค่ว่ายากลุ่ม hypoglycemic อาจทำให้เกิด acidosis ถ้าไม่หยุด · แนวทางปัจจุบันให้หยุด SGLT2 inhibitor 3 วันก่อนผ่า (ertugliflozin 4 วัน) เพื่อกัน euglycemic ketoacidosis",
  wrong:["สั้นเกินไปสำหรับยา SGLT2 inhibitor — จะถูกถ้าเป็น metformin ซึ่งงดวันผ่า","ยังสั้นกว่าที่แนะนำ — จะถูกถ้าเป็นยาที่ออกฤทธิ์สั้นกว่า","นานเกินไปโดยไม่มีประโยชน์เพิ่ม — จะถูกถ้าใช้ ertugliflozin ซึ่งหยุด 4 วัน","นานเกินไปและเสี่ยง hyperglycemia — จะถูกถ้าเป็น antiplatelet"],
  trap:"Metformin งดวันผ่า แต่ SGLT2 inhibitor ต้องหยุดล่วงหน้า 3 วัน",
  summary:["SGLT2 inhibitor หยุด 3 วันก่อนผ่า (ertugliflozin 4 วัน)","เหตุผล: ป้องกัน euglycemic ketoacidosis","Metformin งดวันผ่า ต่างจาก SGLT2i ที่ต้องหยุดล่วงหน้า","ไฟล์ระบุเพียงว่ายา hypoglycemic อาจทำให้ acidosis"],
  tags:["Pre-op & post-op","Metabolic response"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 8 (= ไฟล์ jod หน้า 9) · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod",
  outside:"นอกสไลด์: การหยุด SGLT2 inhibitor 3 วัน (ertugliflozin 4 วัน) เพื่อกัน euglycemic ketoacidosis · ไฟล์ระบุแค่ว่ายา hypoglycemic อาจทำให้เกิด acidosis"}),
U({n:25,
  stem:"A 34-year-old woman is scheduled for an elective pelvic operation and takes several long-term medications. The surgeon is concerned that one of her drugs may produce a hypercoagulable state. Which drug is most likely responsible according to the medication slide handwriting?",
  opts:["Furosemide tablets","Oral contraceptive pills","Prednisolone tablets","Metformin tablets","Clopidogrel tablets"],
  ans:1,
  notes:"ไฟล์ jod หน้า 9 สไลด์ <b>\"OCPs\"</b> ลายมือ <b>\"→ hypercoagulable state\"</b><br>ไฟล์ 78 หน้า 8: ไม่มีข้อ OCPs ตัวพิมพ์ (มีเฉพาะ Over the counter medication)",
  kimg:["l12b_p9","l12_p8"],
  interp:"ยาใดที่ทำให้เลือดแข็งตัวง่าย เป็นเรื่อง VTE",
  why:"jod หน้า 9 ลายมือ: OCPs → hypercoagulable state · เพิ่มความเสี่ยง VTE จึงต้องถามประวัติยาคุมก่อนผ่า (ดูเรื่อง VTE prophylaxis ใน L12-10)",
  wrong:["ผลคือ electrolyte imbalance — จะถูกถ้าถามผลเสียของ diuretic","ผลคือ adrenal insufficiency และติดเชื้อ — จะถูกถ้าถามผลเสียของ corticosteroid","ผลคือ acidosis เมื่อไตไม่ดี — จะถูกถ้าถามผลเสียของ hypoglycemic drug","เป็น antiplatelet เพิ่มความเสี่ยงเลือดออก — จะถูกถ้าถามถึง bleeding"],
  trap:"Clopidogrel เพิ่มเลือดออก ไม่ใช่ทำให้เลือดแข็งตัวง่าย",
  summary:["OCPs → hypercoagulable state → เพิ่มความเสี่ยง VTE","ถามประวัติยาคุมกำเนิดในหญิงวัยเจริญพันธุ์ก่อนผ่าใหญ่โดยเฉพาะผ่าตัดอุ้งเชิงกราน","Clopidogrel เพิ่มเลือดออก ไม่ใช่เลือดแข็งตัวง่าย","Prednisolone → adrenal insufficiency · furosemide → electrolyte imbalance"],
  tags:["Pre-op & post-op","Vascular"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 9 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:26,
  stem:"A 63-year-old man takes losartan only for hypertension and has no heart failure. He is scheduled for an elective major abdominal operation under general anesthesia. Which instruction regarding the angiotensin receptor blocker is most appropriate?",
  opts:["Omit the dose for 24 hours before surgery","Take a double dose on the morning of surgery","Stop two weeks before surgery and start a diuretic","Stop one week before surgery and start a beta-blocker","Stop three days before surgery and restart seven days afterwards"],
  ans:0,
  notes:"ไฟล์ 78 หน้า 15 (หน้าไต) พิมพ์ว่า <b>\"Drug: ACEI, ARB, diuretics, NSAIDs\"</b> เป็นยาที่เกี่ยวกับความเสี่ยงไต<br>ไฟล์ 78 หน้า 8 ถามยาทุกกลุ่มที่ใช้ก่อนผ่า",
  kimg:["l12_p8","l12_p15"],
  interp:"ใช้ ARB เพื่อรักษาความดันสูงอย่างเดียว ไม่มี heart failure",
  why:"ไฟล์ระบุเพียงให้ถามยา ACEI/ARB ที่เกี่ยวกับไต · 2024 AHA/ACC: ถ้าใช้ ACEI/ARB เพื่อ HT อาจงด 24 ชม. ก่อนผ่า ส่วนใช้รักษา HFrEF ให้ต่อ",
  wrong:["เสี่ยงความดันต่ำหลังดมยา — จะถูกถ้าต้องการลดความดันสูงมาก","การหยุดนาน 2 สัปดาห์ไม่จำเป็น และ diuretic ไม่ใช่ทดแทนที่แนะนำ — จะถูกถ้าความดันคุมไม่ได้","การหยุด 1 สัปดาห์นานเกิน — จะถูกถ้าเป็นยา antiplatelet","การหยุด 3 วันและเริ่มใหม่หลัง 7 วันนานเกินไป — จะถูกถ้าไตมีปัญหา"],
  trap:"ถ้าเป็น HFrEF ให้ต่อยา ไม่ใช่งด",
  summary:["ARB/ACEI ที่ใช้คุม HT อาจงด 24 ชม. ก่อนผ่า (2024 AHA/ACC)","ถ้าใช้รักษา HFrEF ให้ต่อยา","β-blocker และ statin ที่ใช้อยู่ให้ต่อ","ACEI, ARB, diuretic, NSAID เพิ่มความเสี่ยง AKI (78 หน้า 15)"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 8, 15 · ไม่มีสัญลักษณ์ · ลายมือไม่มี",
  outside:"นอกสไลด์: การงด ACEI/ARB 24 ชม. ก่อนผ่าเมื่อใช้คุมความดัน (2024 AHA/ACC) · ไฟล์ให้แค่ว่ายาเหล่านี้เพิ่มความเสี่ยงไต"}),
U({n:27,
  stem:"A 57-year-old woman scheduled for an elective operation tells the nurse that she takes no medication. The nurse notices that she often buys analgesic tablets at a pharmacy for her knee pain. What is the most appropriate step in the medication history?",
  opts:["Record no medication because over-the-counter drugs do not affect surgery","Ask only about drugs prescribed by the hospital","Ask only about drugs that she takes every day","Ask about drugs from the hospital and those bought by herself over the counter","Ask only about drugs given by injection"],
  ans:3,
  notes:"ไฟล์ 78 หน้า 6 ลายมือใต้ chest pain: <b>\"ทั้งที่ รพ. & ซื้อเอง\"</b> ข้าง Medication, allergy, tabaco and alcohol use<br>ไฟล์ 78 หน้า 8 พิมพ์ตัวใหญ่ท้ายสไลด์: <b>\"Over the counter medication\"</b>",
  kimg:["l12_p6","l12_p8"],
  interp:"ผู้ป่วยปฏิเสธยา แต่ซื้อยาแก้ปวดเอง ต้องซักประวัติยาให้ครบ",
  why:"78 หน้า 6 ลายมือ \"ทั้งที่ รพ. & ซื้อเอง\" และหน้า 8 มีหัวข้อ Over the counter medication จึงต้องถามยาทุกแหล่ง · ยาแก้ปวดที่ซื้อเองอาจเป็น NSAIDs หรือ aspirin ที่มีผลต่อเลือดออกและไต",
  wrong:["ยาที่ซื้อเองอาจเป็น NSAIDs/aspirin เพิ่มเลือดออกและกระทบไต — จะถูกถ้าผู้ป่วยไม่ใช้ยาใดเลย","ลายมือ 78 ระบุว่าถามทั้งยาที่ รพ. และที่ซื้อเอง — จะถูกถ้าผู้ป่วยรับยาจาก รพ. เท่านั้น","ยาที่ใช้เป็นครั้งคราวก็สำคัญ — จะถูกถ้าเป็นยาที่มีผลก่อนผ่าเฉพาะยาประจำ","ยาทุกทางให้มีความสำคัญ — จะถูกถ้าผู้ป่วยมีโรคที่ต้องรับยาฉีดเท่านั้น"],
  trap:"ผู้ป่วยมักไม่นับยาที่ซื้อเองว่าเป็นยา",
  summary:["ถามยาทั้งที่ รพ. และที่ซื้อเอง (OTC)","ยาแก้ปวดที่ซื้อเองอาจเป็น NSAIDs หรือ aspirin เพิ่มเลือดออกและกระทบไต","ถามสมุนไพรและอาหารเสริมด้วย","ผู้ป่วยมักไม่นับยาที่ซื้อเองว่าเป็นยา"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 6, 8 · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:28,
  stem:"A medical student examines a 54-year-old man before elective surgery. Which set of findings forms the vital sign and anthropometric part of the preoperative physical examination in the lecture?",
  opts:["Blood pressure, heart rate, temperature, urine output and waist circumference","Pulse, temperature, blood glucose, hematocrit and body surface area","Blood pressure, heart rate, respiratory rate, oxygen saturation, weight and height for BMI","Blood pressure, heart rate, pain score, peak expiratory flow and ideal body weight","Temperature, respiratory rate, urine specific gravity, weight and skin turgor"],
  ans:2,
  notes:"สไลด์ไฟล์ 78 หน้า 10 พิมพ์ว่า <b>\"Vital sign: BP, heart rate, respiratory rate, oxygen saturation · Weight, Height → BMI: obese, malnutrition\"</b>",
  kimg:["l12_p10"],
  interp:"ถามองค์ประกอบ vital sign และการวัดน้ำหนักส่วนสูงใน PE ก่อนผ่า",
  why:"78 หน้า 10 พิมพ์ในหมวด physical examination ว่า \"Vital sign: BP, heart rate, respiratory rate, oxygen saturation\" และ \"Weight, Height → BMI: obese, malnutrition\" จึงเป็นชุดที่ครบตามสไลด์ ส่วนตัวเลือกอื่นมีรายการที่ไม่อยู่ในสไลด์ เช่น temperature, urine output, pain score, peak flow และ skin turgor",
  wrong:["ไม่มี temperature, urine output, waist circumference ในสไลด์ — จะถูกถ้าถามผู้ป่วยในหอผู้ป่วยวิกฤต","น้ำตาลและ Hct เป็นผลตรวจ ไม่ใช่ vital sign ในสไลด์ — จะถูกถ้าเป็นการตรวจ point-of-care","ไม่มี pain score และ peak flow ในสไลด์ — จะถูกถ้าถามผู้ป่วยหอบหืด","ไม่มี urine specific gravity และ skin turgor ในสไลด์ — จะถูกถ้าถามภาวะขาดน้ำ"],
  trap:"ตัวเลือกอื่นมีรายการที่ไม่อยู่ในสไลด์ เช่น temperature",
  summary:["Vital sign: BP, heart rate, respiratory rate, oxygen saturation","Weight และ height → คำนวณ BMI ดู obese และ malnutrition","CVS: heart sound, murmur, rhythm, peripheral edema","Airway: Mallampati classification"],
  tags:["Pre-op & post-op","Nutrition"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 10 · ไม่มีสัญลักษณ์ · ลายมือไม่มี (ไฮไลต์ม่วง)"}),
U({n:29,
  stem:"A 60-year-old man with a history of heavy alcohol use is examined before an elective hernia repair. Which findings listed in the lecture should be sought on gastrointestinal examination?",
  opts:["Bowel sounds, rebound tenderness, hernial orifices and rectal tone","Abdominal wall scars, striae, stoma sites and abdominal girth","Murphy sign, McBurney tenderness, Rovsing sign and psoas sign","Caput medusae, spider naevi, palmar erythema and gynecomastia","Jaundice, abdominal mass, liver and spleen size and ascites"],
  ans:4,
  notes:"สไลด์ไฟล์ 78 หน้า 10 พิมพ์ว่า <b>\"Gastrointestinal: jaundice, abdominal mass, liver and spleen size, ascites\"</b><br>ไฟล์ jod หน้า 11: <b>\"General: anemia, jaundice, nutritional status · GI: abdominal mass, ascites\"</b>",
  kimg:["l12_p10","l12b_p11"],
  interp:"ผู้ป่วยดื่มสุราหนัก โจทย์ถามรายการตรวจ GI ที่สไลด์ระบุ",
  why:"78 หน้า 10: GI = jaundice, abdominal mass, liver and spleen size, ascites · jod หน้า 11 มี abdominal mass, ascites และใส่ jaundice ไว้ในหมวด General รวมกับ anemia และ nutritional status",
  wrong:["เป็นการตรวจช่องท้องทั่วไป ไม่ใช่รายการ GI ในสไลด์ — จะถูกถ้าถามผู้ป่วยปวดท้องเฉียบพลัน","เป็นการสังเกตผนังหน้าท้อง ไม่ใช่รายการในสไลด์ — จะถูกถ้าถามผู้ป่วยหลังผ่าตัดเดิม","เป็น sign ของ acute appendicitis/cholecystitis ไม่ใช่การตรวจก่อนผ่า — จะถูกถ้ามีปวดท้องเฉียบพลัน","เป็น stigmata ของ chronic liver disease ซึ่งพบได้ แต่สไลด์ระบุ jaundice, mass, liver/spleen size, ascites — จะถูกถ้าถามถึง signs of portal HT ที่ 78 หน้า 18"],
  trap:"stigmata ของโรคตับเรื้อรังฟังเข้ากับสุรา แต่ไม่ใช่รายการที่สไลด์ระบุ",
  summary:["GI: jaundice, abdominal mass, liver และ spleen size, ascites","General (jod): anemia, jaundice, nutritional status","Neuro: consciousness level, muscle power","CVS (jod): pulse BP, heart sound, bruits, peripheral edema"],
  tags:["Pre-op & post-op","Liver"],
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 10 (= ไฟล์ jod หน้า 11) · ไม่มีสัญลักษณ์ · ลายมือไม่มี"}),
U({n:30,
  stem:"A healthy 40-year-old woman is booked for elective excision of a lipoma. The intern's order sheet includes several laboratory tests. In the laboratory studies slide of the older deck, which group of tests is pointed to by the handwritten arrows as not recommended for routine use?",
  opts:["Electrolytes, liver function test, coagulation tests and chest film","Electrolytes, liver function test, coagulation tests and urinalysis","Electrolytes, renal function, coagulation tests and urinalysis","Complete blood count, liver function test, coagulation tests and urinalysis","Electrolytes, liver function test, EKG and urinalysis"],
  ans:1,
  notes:"ไฟล์ jod หน้า 13 สไลด์ <b>\"Laboratory Studies: CBC · Electrolytes · Renal function · Liver function test · Coagulation tests · EKG · Chest x-ray\"</b> ลายมือ: ลูกศรจาก Electrolytes, LFT, Coagulation tests และ <b>\"UA\"</b> → <b>\"not recommend for routine test\"</b><br>ไฟล์ jod หน้า 17: <b>\"LFT, coagulogram, UA are not routine test\"</b>",
  kimg:["l12b_p13","l12b_p17"],
  interp:"ถามกลุ่ม test ที่ลายมือระบุว่าไม่แนะนำเป็น routine ในสไลด์ jod หน้า 13",
  why:"jod หน้า 13 ลายมือ: ลูกศรจาก electrolytes, LFT, coagulation tests และ UA ชี้ไปที่ not recommend for routine test · jod หน้า 17 ย้ำ LFT, coagulogram, UA not routine ⚠ ไม่ตรงกัน: โน้ต bedside (jod หน้า 2) ใส่ UA เป็น basic lab และ pre-admission center ส่ง electrolytes, LFT, PT/aPTT ก่อนผ่า เป็นนโยบาย รพ.",
  wrong:["chest film ไม่ได้อยู่ในกลุ่มที่ลูกศรชี้ — จะถูกถ้าแทนที่ urinalysis ด้วย CXR","renal function ไม่ได้ถูกลูกศรชี้ใน jod หน้า 13 — จะถูกถ้าแทน LFT","CBC ไม่ได้ถูกลูกศรชี้ — จะถูกถ้าเป็นผ่าตัดเล็ก (jod หน้า 14 ลายมือ ไม่ส่ง CBC ใน minor operation)","EKG ไม่ได้ถูกลูกศรชี้ใน jod หน้า 13 — จะถูกถ้าแทนที่ coagulation tests"],
  trap:"EKG และ CXR ก็ไม่ใช่ routine ตามสไลด์ 78 แต่ข้อนี้ถามกลุ่มที่ลูกศรชี้ใน jod",
  summary:["ไม่แนะนำ routine: electrolytes, LFT, coagulation tests, UA","ส่งตาม Hx เช่น ดื่มสุรา, jaundice","CBC ไม่ส่งใน minor operation","รพ. บางแห่งมี protocol ต่างจากหลักฐาน"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 13, 17 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:31,
  img:"l12_q31",
  stem:"Before general anesthesia, an anesthesiologist examines the oropharynx of a 45-year-old man who is sitting with his mouth fully open and tongue protruded. The view obtained is shown in the image. Which Mallampati class does this view represent, and what does it predict about tracheal intubation?",
  opts:["Class I, intubation expected to be easy","Class II, intubation expected to be easy","Class III, intubation expected to be difficult","Class IV, intubation expected to be difficult","Class III, intubation expected to be easy"],
  ans:2,
  notes:"ไฟล์ jod หน้า 11 สไลด์ <b>\"Airway assessment: Mallampati classification\"</b> ลายมือ <b>\"→ บอกว่าคนไข้ใส่ tube ยากไหม\"</b><br>รูปในสไลด์: <b>\"Class III: Visualization of only the base of the uvula\"</b>, <b>\"Class IV: Soft palate is not visible at all\"</b><br>ไฟล์ 78 หน้า 10: <b>\"Airway assessment: Mallampati classification\"</b>",
  kimg:["l12b_p11","l12_p10","l12_mallampati"],
  interp:"ภาพแสดงการมองเห็นเพียงโคนของ uvula ต้องจับคู่กับ Mallampati class และผลต่อการใส่ท่อ",
  why:"jod หน้า 11: Class III = visualization of only the base of the uvula · ลายมือ: Mallampati บอกว่าใส่ tube ยากไหม ดังนั้น class สูง (III–IV) คาดว่าใส่ท่อยาก · ภาพนี้เห็นเพียงโคน uvula จึงเป็น class III",
  wrong:["Class I เห็น soft palate ครบ ภาพนี้เห็นเพียงโคน uvula — จะถูกถ้าเห็นเพดานอ่อนและ uvula ชัด","Class II เห็น uvula ครบ ภาพนี้เห็นเฉพาะโคน uvula — จะถูกถ้าเห็น uvula ทั้งอัน","Class IV ไม่เห็น soft palate เลย ภาพนี้ยังเห็นโคน uvula — จะถูกถ้าเห็นเพียงลิ้น","Class III ถูกต้อง แต่ class สูงทำนายว่าใส่ท่อยาก ไม่ใช่ง่าย — จะถูกถ้าเป็น class I–II"],
  trap:"อย่าสับสน class III (เห็นโคน uvula) กับ class IV (ไม่เห็น soft palate เลย)",
  summary:["Mallampati I: เห็น soft palate ครบ · II: เห็น uvula ครบ","III: เห็นเฉพาะโคน uvula · IV: ไม่เห็น soft palate เลย","Class สูง (III–IV) คาดว่าใส่ท่อยาก","ลายมือ jod: Mallampati บอกว่าใส่ tube ยากไหม"],
  mnemonic:"I เห็นเพดาน · II เห็น uvula · III เห็นโคน uvula · IV ไม่เห็นเพดาน",
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 11 (= ไฟล์ 78 หน้า 10) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:32,
  img:"l12_q32",
  stem:"A 60-year-old woman is assessed by the anesthesiologist before an elective operation. With her mouth fully open and tongue protruded while sitting, the oropharyngeal view is shown in the image. Which statement correctly describes this view?",
  opts:["Class I with complete view of the soft palate","Class II with complete view of the uvula","Class III with only the base of the uvula visible","Class IV with the soft palate not visible at all","Class II with only the base of the uvula visible"],
  ans:3,
  notes:"ไฟล์ jod หน้า 11 รูป Mallampati: <b>\"Class IV: Soft palate is not visible at all\"</b><br>ลายมือ: <b>\"→ บอกว่าคนไข้ใส่ tube ยากไหม\"</b>",
  kimg:["l12b_p11","l12_p10","l12_mallampati"],
  interp:"ภาพไม่เห็นแม้แต่เพดานอ่อน เห็นเพียงลิ้น",
  why:"jod หน้า 11: Class IV = soft palate is not visible at all · ภาพนี้เห็นเพียงลิ้นเต็มช่องปาก จึงเป็น class IV ซึ่งทำนายว่าใส่ท่อยากที่สุด",
  wrong:["Class I ต้องเห็น soft palate ครบ ภาพนี้ไม่เห็น — จะถูกถ้าเห็นเพดานอ่อนและ uvula","Class II ต้องเห็น uvula ครบ ภาพนี้ไม่เห็น uvula — จะถูกถ้าเห็น uvula ทั้งอัน","Class III ต้องเห็นโคน uvula ภาพนี้ไม่เห็นแม้แต่ soft palate — จะถูกถ้าเห็นโคน uvula","การจับคู่ class II กับโคน uvula ผิด ต้องเป็น class III — จะถูกถ้านิยามถูกสลับ"],
  trap:"ต้องแยก class III และ IV ให้ได้ เพราะ III ยังเห็นโคน uvula",
  summary:["Mallampati IV: ไม่เห็น soft palate เลย เห็นเพียงลิ้น","III ยังเห็นโคน uvula จึงแยกกันได้","Class IV ทำนายว่าใส่ท่อยากที่สุด","เป็นส่วนของ airway assessment ใน PE ก่อนดมยา"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 11 (= ไฟล์ 78 หน้า 10) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:33,
  stem:"A 56-year-old man who smokes 20 cigarettes and drinks heavily every day is assessed before an elective operation. According to the handwriting on the history slide of the older deck, which two organs does his smoking and alcohol history alert the doctor to?",
  opts:["Heart and kidney","Lung and liver","Brain and pancreas","Stomach and spleen","Bone and thyroid"],
  ans:1,
  notes:"ไฟล์ jod หน้า 8 กรอบ History: <b>\"Smoking and Alcohol use\"</b> ลายมือ <b>\"→ lung / liver พัง\"</b><br>ไฟล์ 78 หน้า 6: <b>\"Medication, allergy, tabaco and alcohol use\"</b>",
  kimg:["l12b_p8","l12_p6"],
  interp:"สูบบุหรี่และดื่มสุราเป็นประจำ ถามอวัยวะที่ต้องระวัง",
  why:"jod หน้า 8 ลายมือ: smoking and alcohol use → lung / liver พัง จึงต้องประเมินปอดและตับก่อนผ่า · สอดคล้อง 78 หน้า 6 ที่ให้ถามบุหรี่และแอลกอฮอล์ในประวัติ",
  wrong:["ลายมือเขียน smoking → lung, alcohol → liver — จะถูกถ้าถามเรื่อง exercise capacity","ไม่ใช่อวัยวะที่ลายมือระบุ — จะถูกถ้าถามผลต่อระบบประสาท","ไม่ใช่อวัยวะที่ลายมือระบุ — จะถูกถ้าถามผลเสียต่อทางเดินอาหาร","ไม่เกี่ยวกับประวัติสูบบุหรี่และดื่มสุราในสไลด์ — จะถูกถ้าถามโรคกระดูกและต่อมไทรอยด์"],
  trap:"ลายมือจับคู่บุหรี่กับปอด และสุรากับตับ",
  summary:["สูบบุหรี่ → ปอด · ดื่มสุรา → ตับ (ลายมือ jod หน้า 8)","เหนื่อยง่ายเมื่อเดินน้อย = heart/lung พัง → cardiac evaluation","ถามประวัติแพ้ยาและการผ่าตัด/ดมยาเดิม","อายุมาก = ความเสี่ยงสูง"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 8 (= ไฟล์ 78 หน้า 6) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:34,
  stem:"According to the bedside pre-op note, an EKG is requested in a patient under 40 years old only when there is a reason. Which of the following patients under 40 years old qualifies for an EKG before an elective operation?",
  opts:["A woman with a penicillin allergy","A man who smokes five cigarettes per day","A woman with a body mass index of 27","A man with a family history of colon cancer","A man who has palpitations"],
  ans:4,
  notes:"ไฟล์ jod หน้า 2 โน้ต bedside ลายมือ: <b>\"EKG: <40 yo → U/D heart disease, thyrotoxicosis, DM, HT, dyslipidemia · มีใจสั่น, chest pain, syncope · PE ผิดปกติ: murmur, heave, thrill · กินยาที่ทำให้ใจสั่นได้ e.g. β-blocker\"</b> · <b>\">40 yo ทำทุกคน\"</b>",
  kimg:["l12b_p2"],
  interp:"ผู้ป่วยอายุ <40 ปีจะตรวจ EKG เมื่อมีเหตุ โจทย์ถามว่ากรณีใดเข้าเกณฑ์",
  why:"jod หน้า 2: อายุ <40 ปีทำ EKG เมื่อมีโรคหัวใจ/ไทรอยด์เป็นพิษ/DM/HT/dyslipidemia หรือมีอาการใจสั่น chest pain syncope หรือ PE ผิดปกติ · ใจสั่นจึงเข้าเกณฑ์ · ⚠ กฎ >40 ปีทำทุกคนเป็นแนวปฏิบัติท้องถิ่นของโน้ต ต่างจาก ESC 2022 ที่ไม่ routine ข้อนี้ไม่ได้ขึ้นกับประเด็นนั้น",
  wrong:["แพ้ยาไม่ใช่ข้อบ่งชี้ EKG ในโน้ต — จะถูกถ้าถามเรื่องการให้ antibiotic prophylaxis","บุหรี่ไม่ใช่ข้อบ่งชี้ EKG ในกลุ่มอายุ <40 ตามโน้ต — จะถูกถ้าถามเรื่อง CXR","BMI 27 ไม่ใช่ข้อบ่งชี้ในโน้ต — จะถูกถ้ามีโรคร่วมเช่น DM, HT","ประวัติมะเร็งลำไส้ในครอบครัวไม่เกี่ยวกับหัวใจ — จะถูกถ้าถามเรื่องการคัดกรองมะเร็ง"],
  trap:"ข้อนี้ถามกลุ่มอายุ <40 ปีเท่านั้น",
  summary:["อายุ <40: EKG เมื่อมีโรคหัวใจหรือปัจจัยเสี่ยง มีอาการ หรือตรวจพบ murmur/heave/thrill","ยาที่ทำให้ใจสั่น เช่น β-blocker","โน้ต: >40 ปีทำทุกคน (ท้องถิ่น) ⚠ ESC 2022 ไม่ routine","Basic lab: CBC, EKG, CXR, UA, anti-HIV"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:35,
  stem:"A 55-year-old man who smokes 20 cigarettes daily is listed for an elective gastrectomy in 8 weeks. The surgeon asks him to stop smoking, explaining that this is an example of preoperative optimization. Which benefit is written in the handwriting beside the aim slide of the older deck?",
  opts:["Ciliary function returns","Hemoglobin level returns to normal","Serum albumin level rises","Wound tension at the incision decreases","Renal blood flow increases"],
  ans:0,
  notes:"ไฟล์ jod หน้า 5 สไลด์ <b>\"Preoperative optimization\"</b> ลายมือ <b>\"e.g. หยุดบุหรี่ → cilia fⁿ กลับมาทำงานได้\"</b><br>ไฟล์ 78 หน้า 3: <b>\"Preoperative optimization of comorbidities and intervention to lower risk\"</b>",
  kimg:["l12b_p5","l12_p3"],
  interp:"หยุดบุหรี่ก่อนผ่าเป็นตัวอย่าง preoperative optimization",
  why:"jod หน้า 5 ลายมือ: ตัวอย่าง optimization คือหยุดบุหรี่ แล้ว cilia function กลับมาทำงานได้ ลดความเสี่ยง pulmonary complication · 78 หน้า 3 ระบุ preoperative optimization เป็น aim ข้อหนึ่ง",
  wrong:["การหยุดบุหรี่ไม่ได้ทำให้ Hb ปกติ — จะถูกถ้าถามเรื่อง CO ที่ลดลง","การหยุดบุหรี่ไม่เกี่ยวกับ albumin — จะถูกถ้าเป็นการให้โภชนาการ","ไม่ใช่ผลที่ลายมือระบุ — จะถูกถ้าถามเรื่องเทคนิคการเย็บแผล","ไม่เกี่ยวกับบุหรี่ — จะถูกถ้าถามเรื่อง blood loss และ AKI"],
  trap:"ประโยชน์ของการหยุดบุหรี่ในที่นี้คือ cilia ไม่ใช่เลือดหรือไต",
  summary:["Optimization ตัวอย่าง: หยุดบุหรี่ → cilia function ฟื้น","ควบคุม DM, HT, โภชนาการให้ดีก่อนผ่า","หยุดบุหรี่ประมาณ 8 สัปดาห์ (78 หน้า 37)","เป้าหมายคือให้อยู่ใน optimal condition"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 5 (= ไฟล์ 78 หน้า 3) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:36,
  stem:"A 31-year-old woman had a needle-stick exposure from an unknown source 3 weeks ago, and her preoperative anti-HIV antibody result is negative. Which statement about the window period matches the bedside pre-op note?",
  opts:["Antigen appears at 2 to 3 weeks and antibody at about 3 months, so a negative result does not exclude infection","Antibody appears at 2 to 3 weeks and antigen at about 3 months, so the negative result is reliable","Both antigen and antibody appear within 3 days, so infection is excluded by the negative result","Antigen and antibody both appear only after 6 months, so testing is repeated then","Antibody appears at 3 weeks, so the negative result excludes infection acquired 3 weeks ago"],
  ans:0,
  notes:"ไฟล์ jod หน้า 2 ลายมือ: <b>\"Anti-HIV: ติดเชื้อแต่ Ab ยังไม่ขึ้น = window period { Ag 2-3 weeks · Ab 3 months }\"</b>",
  kimg:["l12b_p2"],
  interp:"สัมผัสเชื้อ 3 สัปดาห์ก่อน ผล Ab ลบ ต้องตีความเรื่อง window period",
  why:"jod หน้า 2 ลายมือ: ติดเชื้อแต่ Ab ยังไม่ขึ้น = window period โดย Ag 2–3 สัปดาห์ และ Ab 3 เดือน · ที่ 3 สัปดาห์ Ab ยังไม่ขึ้น ผลลบจึงไม่ตัดการติดเชื้อ (CDC: 4th gen ตรวจพบ ≈18–45 วัน)",
  wrong:["สลับลำดับ antigen และ antibody — จะถูกถ้าโน้ตเขียน Ab 2–3 สัปดาห์","โน้ตเขียน Ag 2–3 สัปดาห์ และ Ab 3 เดือน ไม่ใช่ 3 วัน — จะถูกถ้าใช้ nucleic acid test","โน้ตไม่ได้ระบุ 6 เดือน — จะถูกถ้าเป็นการตรวจแบบเก่าที่ต้องตรวจซ้ำนาน","Ab ยังไม่ขึ้นที่ 3 สัปดาห์ ผลลบจึงไม่ตัดการติดเชื้อ — จะถูกถ้ารับเชื้อนานกว่า 3 เดือน"],
  trap:"ผล negative ไม่ได้แปลว่าไม่ติดเชื้อ",
  summary:["Window period = ติดเชื้อแล้วแต่ Ab ยังไม่ขึ้น","Ag ตรวจพบ 2–3 สัปดาห์ · Ab ประมาณ 3 เดือน (ลายมือ jod หน้า 2)","ผลลบที่ 3 สัปดาห์จึงไม่ตัดการติดเชื้อ","CDC: 4th generation ตรวจพบได้ประมาณ 18–45 วัน"],
  tags:["Pre-op & post-op","Surgical safety"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:37,
  stem:"A 40-year-old man with a history of injecting drugs has a negative anti-HIV result before elective surgery. The registrar tells the theatre nurse that ordinary precautions are enough because the result is negative. What does the bedside pre-op note say about this?",
  opts:["Universal precautions can be relaxed because the negative result excludes infection","Universal precautions are still needed because a negative result does not rule out infection","Universal precautions are needed only when the anti-HIV result is positive","Universal precautions are needed only when the patient reports symptoms","Surgery must be delayed for 3 months until the antibody can be retested"],
  ans:1,
  notes:"ไฟล์ jod หน้า 2 ลายมือ (สีชมพู): <b>\"negative not R/O → still need universal precaution\"</b> · <b>\"- ใส่ถุงมือ 2 ชั้น x, x+½ เอาเบอร์ใหญ่กว่าไว้ข้างใน\"</b>",
  kimg:["l12b_p2"],
  interp:"ผล anti-HIV ลบ แต่มีความเสี่ยง โจทย์ถามมาตรการป้องกัน",
  why:"jod หน้า 2: negative not R/O → still need universal precaution เพราะอาจอยู่ใน window period · ปฏิบัติกับผู้ป่วยทุกรายเสมือนมีเชื้อ เช่น ใส่ถุงมือ 2 ชั้น",
  wrong:["ผลลบไม่ตัดการติดเชื้อในช่วง window period — จะถูกถ้ายืนยันด้วย test ที่ไวกว่า","โน้ตระบุ negative not R/O → still need universal precaution — จะถูกถ้าผล negative และไม่มีความเสี่ยง","ผู้ติดเชื้อมักไม่มีอาการ จึงต้องป้องกันทุกราย — จะถูกถ้าถามถึงโรคติดต่อทางเดินหายใจ","โน้ตไม่ได้กำหนดให้เลื่อนผ่า — จะถูกถ้าเป็นการผ่าตัด elective ที่ไม่จำเป็นเร่งด่วน"],
  trap:"ผล negative ไม่ได้แปลว่าปลอดภัย",
  summary:["Negative anti-HIV not R/O infection เพราะอาจอยู่ใน window period","ต้องทำ universal precaution กับผู้ป่วยทุกราย","ใส่ถุงมือ 2 ชั้นตามโน้ต","ไม่ต้องเลื่อนผ่าเพียงเพราะผลลบ"],
  tags:["Pre-op & post-op","Surgical safety"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:38,
  stem:"A surgical intern is gloving for an operation on a patient with unknown HIV status and wears two pairs of gloves. Sizes 7 and 7.5 are available. How should the two pairs be arranged according to the handwriting on the bedside pre-op note?",
  opts:["Size 7 inside and size 7.5 outside","Two pairs of size 7.5","Size 7.5 inside and size 7 outside","Two pairs of size 7","Size 7.5 inside and size 8 outside"],
  ans:2,
  notes:"ไฟล์ jod หน้า 2 ลายมือสีชมพู: <b>\"ใส่ถุงมือ 2 ชั้น x, x+½ เอาเบอร์ใหญ่กว่าไว้ข้างใน\"</b>",
  kimg:["l12b_p2"],
  interp:"ใส่ถุงมือสองชั้น ถามการจัดเบอร์ตามลายมือ",
  why:"jod หน้า 2 ลายมือสีชมพูใต้หัวข้อ anti-HIV เขียนว่า \"ใส่ถุงมือ 2 ชั้น x, x+½ เอาเบอร์ใหญ่กว่าไว้ข้างใน\" แปลว่าสองชั้นใช้เบอร์ต่างกันครึ่งเบอร์ และเบอร์ใหญ่กว่าอยู่ชั้นใน ดังนั้นเมื่อมีเบอร์ 7 และ 7.5 ต้องใส่ 7.5 ไว้ข้างในและ 7 ไว้ข้างนอก เป็นส่วนหนึ่งของ universal precaution",
  wrong:["กลับด้าน โน้ตเขียนเอาเบอร์ใหญ่กว่าไว้ข้างใน — จะถูกถ้าโน้ตเขียนให้เบอร์เล็กอยู่ใน","สองชั้นเบอร์ 7.5 เท่ากัน ไม่ตรงกับ x และ x+½ — จะถูกถ้าโน้ตให้ใช้เบอร์เดียวกัน","สองชั้นเบอร์ 7 เท่ากัน ไม่ตรงกับ x และ x+½ — จะถูกถ้าโน้ตให้ใช้เบอร์เดียวกัน","ต้องต่างกันครึ่งเบอร์ ไม่ใช่ 1 เบอร์ — จะถูกถ้าโน้ตเขียน x, x+1"],
  trap:"เบอร์ใหญ่อยู่ข้างใน ไม่ใช่ข้างนอก",
  summary:["ถุงมือ 2 ชั้นใช้เบอร์ x และ x+½","เอาเบอร์ใหญ่กว่า (x+½) ไว้ข้างใน","เป็นส่วนของ universal precaution","ใช้เมื่อสงสัยการติดเชื้อทางเลือด เช่น HIV"],
  tags:["Pre-op & post-op","Surgical safety"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:39,
  stem:"A 48-year-old man with alcoholic liver disease will attend the pre-admission center on the day before his elective operation. Which set of tests is listed under the pre-admission center in the bedside pre-op note?",
  opts:["CBC, EKG, chest film, urinalysis and anti-HIV antibody","Fasting glucose, HbA1c, lipid profile, thyroid function and urine culture","CBC, blood group, cross-match, urine pregnancy test and EKG","Arterial blood gas, spirometry, chest film, echocardiogram and troponin","BUN and creatinine, electrolytes, liver function test, PT, aPTT and INR"],
  ans:4,
  notes:"ไฟล์ jod หน้า 2 ลายมือ (ไฮไลต์เขียว): <b>\"Pre-admission center @ ตึกจักรพงษ์ ก่อนวันผ่าตัด: BUN/Cr, elytes · Liver function test · PT, aPTT, INR\"</b><br>ไฟล์ jod หน้า 17: <b>\"LFT, coagulogram, UA are not routine test → ดูตาม Hx\"</b>",
  kimg:["l12b_p2","l12b_p17"],
  interp:"ถามรายการ lab ที่ศูนย์ pre-admission ส่งตามโน้ต bedside",
  why:"jod หน้า 2: pre-admission center ส่ง BUN/Cr, electrolytes, LFT, PT/aPTT/INR ก่อนวันผ่า · ⚠ ไม่ตรงกัน: jod หน้า 13, 17 บอกว่า electrolytes, LFT, coagulation ไม่ใช่ routine ให้ส่งตาม Hx (เช่น ดื่มสุรา) จึงเป็นความต่างของ protocol รพ. กับหลักฐาน · ผู้ป่วยรายนี้มีโรคตับจึงมีข้อบ่งชี้ชัด",
  wrong:["เป็น basic lab ในโน้ตที่ทำก่อนหน้า ไม่ใช่ชุดของ pre-admission center — จะถูกถ้าถามถึง basic lab pre-op","ไม่อยู่ในรายการ pre-admission center — จะถูกถ้าผู้ป่วยเป็นเบาหวานหรือมีโรคไทรอยด์","ไม่อยู่ในรายการ — จะถูกถ้าถามถึงการเตรียมเลือดสำหรับผ่าตัดที่เสียเลือดมาก","เป็นการตรวจปอดและหัวใจ ไม่ใช่ชุดของ pre-admission center — จะถูกถ้ามีโรคปอดหรือหัวใจ"],
  trap:"basic lab (CBC, EKG, CXR, UA, anti-HIV) กับชุด pre-admission center เป็นคนละชุด",
  summary:["Pre-admission center: BUN/Cr, electrolytes, LFT, PT/aPTT/INR","Basic lab: CBC, EKG, CXR, UA, anti-HIV","ส่งก่อนวันผ่าตัด","หลักฐาน: LFT, coag, electrolytes ส่งตาม Hx"],
  tags:["Pre-op & post-op"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:40,
  stem:"A 52-year-old woman will have an elective operation under general anesthesia tomorrow morning, and the ward orders nil per os after midnight. A student asks why. According to the bedside pre-op note, what is the main reason?",
  opts:["The muscle relaxant allows stomach contents to come out through the mouth and be aspirated","Food in the stomach makes anesthetic drugs poorly absorbed","Food in the stomach raises the intracranial pressure during anesthesia","Food in the stomach lowers the blood pressure during induction","Fasting is needed so that blood glucose falls before the operation"],
  ans:0,
  notes:"ไฟล์ jod หน้า 2 ข้อ 1 พิมพ์ว่า <b>\"NPO AMN = nil per os after midnight ต้องงดอาหาร+สวนตูด เพราะได้ muscle relaxant > อาหารจะออกทางปากทำให้สำลัก, ขี้ไหลได้ (ต้องให้ muscle relaxant > relax masseter > insert tube)\"</b>",
  kimg:["l12b_p2"],
  interp:"ถามเหตุผลของ NPO ก่อนดมยา",
  why:"jod หน้า 2: ได้ muscle relaxant ทำให้ไม่มี protective reflex อาหารจึงออกทางปากและสำลักได้ จึงต้องงดอาหาร (ขี้ไหลได้ จึงสวนตูดด้วย) · ⚠ แนวปฏิบัติปัจจุบัน (ASA) ให้ clear liquid ได้จนถึง 2 ชม. ก่อนดมยา",
  wrong:["โน้ตให้เหตุผลเรื่องสำลักจาก muscle relaxant ไม่ใช่การดูดซึมยา — จะถูกถ้ายาดมเป็นยากิน","ไม่ใช่เหตุผลในโน้ต — จะถูกถ้าถามเรื่องผู้ป่วยบาดเจ็บศีรษะ","ไม่ใช่เหตุผลในโน้ต — จะถูกถ้าถามเรื่อง sympathetic block","ไม่ใช่เหตุผลในโน้ต และการอดอาหารไม่ได้ทำเพื่อลดน้ำตาล — จะถูกถ้าผู้ป่วยเบาหวานต้องควบคุมน้ำตาล"],
  trap:"เหตุผลคือป้องกันสำลัก ไม่ใช่เรื่องยาหรือน้ำตาล",
  summary:["NPO เพราะ muscle relaxant ทำให้อาหารออกทางปากและสำลักได้","สวนตูดเพราะอุจจาระไหลได้เมื่อกล้ามเนื้อคลาย","ASA ปัจจุบัน: clear liquid ถึง 2 ชม., light meal 6 ชม.","รพ. ไทยหลายแห่งยังใช้ NPO หลังเที่ยงคืน ให้ทำตาม protocol"],
  tags:["Pre-op & post-op","Surgical safety"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside · pre-op order) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:41,
  stem:"A hospital protocol orders nil per os after midnight for a healthy 30-year-old man scheduled for elective surgery at 2 pm the next day. According to the current ASA fasting guideline, which intake is acceptable on the morning of surgery?",
  opts:["Clear liquids until 30 minutes before anesthesia","Clear liquids until 2 hours before anesthesia","A light meal until 2 hours before anesthesia","A fried meal until 4 hours before anesthesia","Nothing by mouth for 12 hours before anesthesia"],
  ans:1,
  notes:"ไฟล์ jod หน้า 2 ข้อ 1 พิมพ์ว่า <b>\"NPO AMN = nil per os after midnight ต้องงดอาหาร+สวนตูด เพราะได้ muscle relaxant\"</b>",
  kimg:["l12b_p2"],
  interp:"โรงพยาบาลสั่ง NPO หลังเที่ยงคืน แต่โจทย์ถามตามแนวปฏิบัติปัจจุบัน",
  why:"⚠ ไม่ตรงกัน: โน้ต jod หน้า 2 ใช้ NPO after midnight แต่ ASA fasting guideline ให้ clear liquid ได้ถึง 2 ชม. ก่อนดมยา, light meal 6 ชม., อาหารทอดมัน ≥8 ชม. และ ERAS แนะนำ carbohydrate drink ก่อนผ่า · รพ.ไทยหลายแห่งยังใช้ NPO หลังเที่ยงคืน ให้ทำตาม protocol",
  wrong:["30 นาทีสั้นเกินไป — จะถูกถ้าให้ยาเพียงเล็กน้อยกับน้ำจิบ","light meal ต้องงด 6 ชม. ก่อนดมยา — จะถูกถ้าเป็นเพียงน้ำใส","อาหารทอดมันต้องงดอย่างน้อย 8 ชม. — จะถูกถ้าเป็นอาหารเบา","เป็นแนวเดิมแบบ NPO หลังเที่ยงคืนที่ไม่จำเป็นสำหรับ clear liquid — จะถูกถ้าผู้ป่วยมี gastric emptying ช้า"],
  trap:"นโยบาย รพ. กับ guideline ต่างกัน ข้อนี้ถามตาม ASA",
  summary:["ASA fasting: clear liquid ถึง 2 ชม. ก่อนดมยา","Light meal 6 ชม. · อาหารมันหรือทอด ≥8 ชม.","ERAS แนะนำ carbohydrate drink ก่อนผ่า","ผู้ป่วยใช้ GLP-1 RA ต้องประเมินความเสี่ยง"],
  tags:["Pre-op & post-op","Surgical safety"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside · pre-op order) · ไม่มีสัญลักษณ์ · ลายมือ jod",
  outside:"นอกสไลด์: เวลางดน้ำและอาหารตาม ASA fasting guideline · ไฟล์ให้แค่ NPO after midnight"}),
U({n:42,
  stem:"A 50-kg man who has been fasting receives 5 percent dextrose in half-strength saline through a large-bore cannula during surgery. According to the handwritten explanation on the pre-op order, why is dextrose included in the fluid?",
  opts:["It raises the serum sodium to correct dilutional hyponatremia","It expands the intravascular volume as effectively as a colloid","It supplies enough calories to meet the full nutritional need","It stimulates insulin release, which suppresses hepatic gluconeogenesis","It increases serum potassium to prevent hypokalemia"],
  ans:3,
  notes:"ไฟล์ jod หน้า 2 ข้อ 2 พิมพ์: <b>\"5%DNSS/2 (50kg=2100cc) 1000 cc rate 80 cc/hour 2 bottles · dextrose > insulin หลั่ง > ยับยั้ง gluconeogenesis จากตับ\"</b>",
  kimg:["l12b_p2"],
  interp:"ถามเหตุผลที่ใส่ dextrose ใน maintenance fluid ตามโน้ต",
  why:"jod หน้า 2: dextrose → insulin หลั่ง → ยับยั้ง gluconeogenesis จากตับ (ลดการสลายโปรตีน) · เป็นเหตุผลของการให้ 5%D-NSS/2 ในผู้ป่วยที่อดอาหาร ส่วนปริมาณ 2100 cc/วัน สอดคล้องกฎ 4-2-1 (≈ 90 mL/ชม.)",
  wrong:["โน้ตไม่ได้ให้เหตุผลเรื่องแก้ sodium — จะถูกถ้าเป็นสารละลาย hypertonic saline","dextrose กระจายเข้าเซลล์ ไม่ขยาย intravascular volume — จะถูกถ้าเป็น colloid","dextrose 5% ให้พลังงานน้อย ไม่พอตามความต้องการ — จะถูกถ้าเป็น parenteral nutrition","dextrose กับ insulin พา K เข้าเซลล์ ทำให้ K ลด ไม่เพิ่ม — จะถูกถ้าเป็นการรักษา hyperkalemia"],
  trap:"dextrose ในโน้ตให้เพื่อกลไกผ่าน insulin ไม่ใช่เพื่อพลังงานเต็มที่",
  summary:["Dextrose → insulin ↑ → ยับยั้ง gluconeogenesis จากตับ","5%DNSS/2 สำหรับ 50 kg ≈ 2100 cc ต่อวัน","ใช้ rate ประมาณ 80 cc/ชม.","fluid ให้ในห้องผ่าตัดโดยวิสัญญีแพทย์"],
  tags:["Pre-op & post-op","Fluid & electrolyte","Metabolic response"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside · pre-op order) · ไม่มีสัญลักษณ์ · ลายมือไม่มี (พิมพ์ในโน้ต)"}),
U({n:43,
  stem:"During a long preoperative fast, a nurse who has run out of crystalloid prepares to run sterile water into an intravenous line as maintenance fluid. A senior stops her. Which sequence is given in the pre-op order note as the reason?",
  opts:["Cells shrink, potassium falls, and hypokalemia can cause ventricular tachycardia","Cells shrink but survive, and only hypernatremia occurs without serious harm","Cells burst, potassium is released, and hyperkalemia can stop the heart in diastole","Platelets aggregate, and pulmonary embolism can cause sudden death","Hepatocytes swell, and liver failure can follow within a few hours"],
  ans:2,
  notes:"ไฟล์ jod หน้า 2: <b>\"hypotonic saline > cell แตก > hyperkalemia > diastolic stand still ตายได้ ไม่มีใครให้ hypotonic · hypertonic saline cell แค่เหี่ยวแต่ไม่ตาย\"</b>",
  kimg:["l12b_p2"],
  interp:"น้ำจืดเป็น hypotonic มากที่สุด ถามกลไกอันตรายตามโน้ต",
  why:"jod หน้า 2: hypotonic fluid → เซลล์แตก → K ออกมา → hyperkalemia → diastolic standstill ตายได้ จึงไม่มีใครให้ hypotonic · ส่วน hypertonic saline เซลล์แค่เหี่ยวแต่ไม่ตาย",
  wrong:["เซลล์เหี่ยวเกิดกับ hypertonic ไม่ใช่ hypotonic — จะถูกถ้าให้ hypertonic saline","ลักษณะ \"เซลล์เหี่ยวแต่ไม่ตาย\" เป็นของ hypertonic saline — จะถูกถ้าให้ hypertonic saline","น้ำจืดทำให้เม็ดเลือดแดงแตก ไม่ใช่ทำให้เกล็ดเลือดจับตัว — จะถูกถ้าเป็นภาวะ hypercoagulable","น้ำจืดทำให้ cell lysis ไม่ได้ทำให้ตับวายใน 1–2 ชม. — จะถูกถ้าให้ lactate ในโรคตับวาย"],
  trap:"แยก hypotonic (เซลล์แตก) กับ hypertonic (เซลล์เหี่ยว)",
  summary:["Hypotonic → cell แตก → hyperkalemia → diastolic standstill","Hypertonic → cell เหี่ยวแต่ไม่ตาย","ไม่ให้ hypotonic/น้ำจืดทางหลอดเลือดดำ","5%D-NSS/2 ใช้ได้เพราะ dextrose ถูก metabolize"],
  tags:["Pre-op & post-op","Fluid & electrolyte"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside · pre-op order) · ไม่มีสัญลักษณ์ · ลายมือไม่มี (พิมพ์ในโน้ต)"}),
U({n:44,
  stem:"A 60-kg man undergoing a long operation is receiving several liters of 0.9 percent sodium chloride. The senior prefers another crystalloid, citing a property of this fluid noted in the pre-op order. Which property is it?",
  opts:["Its sodium content is much lower than that of plasma","Its potassium content can precipitate arrhythmia","Its osmolarity is lower than plasma and swells the cells","Its buffer must be converted by the liver to bicarbonate","Its chloride content is higher than that of plasma"],
  ans:4,
  notes:"ไฟล์ jod หน้า 2: <b>\"NSS ไม่ควรใช้ Cl เกิน ไม่เหมือน plasma\"</b>",
  kimg:["l12b_p2"],
  interp:"ให้ NSS ปริมาณมาก ถามข้อเสียของ fluid ตามโน้ต",
  why:"jod หน้า 2 ข้อ 2 ของ pre-op order เขียนว่า \"NSS ไม่ควรใช้ Cl เกิน ไม่เหมือน plasma\" หมายความว่า 0.9% NaCl มี chloride สูงกว่า plasma เมื่อให้ปริมาณมากระหว่างผ่าตัดยาวจึงเกิด hyperchloremic metabolic acidosis ได้ จึงเลือก crystalloid อื่นที่ใกล้เคียง plasma มากกว่า",
  wrong:["sodium ใน NSS ใกล้ plasma ไม่ต่ำมาก — จะถูกถ้าเป็น half-strength saline","NSS ไม่มี potassium — จะถูกถ้าให้ KCl เสริม","NSS isotonic ไม่ทำให้เซลล์บวม — จะถูกถ้าเป็นน้ำจืดหรือ hypotonic","NSS ไม่มี buffer ที่ต้องเปลี่ยนที่ตับ ส่วนนี้เป็นประเด็นของ lactate/acetate — จะถูกถ้าเป็น lactated Ringer"],
  trap:"NSS isotonic แต่มี chloride สูงกว่า plasma",
  summary:["NSS มี chloride สูงกว่า plasma","ให้ปริมาณมาก → hyperchloremic metabolic acidosis","ควรเลือก balanced crystalloid","Hypotonic fluid ห้ามให้เพราะ cell แตก"],
  tags:["Pre-op & post-op","Fluid & electrolyte"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside · pre-op order) · ไม่มีสัญลักษณ์ · ลายมือไม่มี (พิมพ์ในโน้ต)"}),
U({n:45,
  stem:"A 55-year-old man with severe liver failure needs a balanced crystalloid during an operation. According to the note on lactate versus acetate in the pre-op order, which buffer is preferred and why?",
  opts:["Acetate, because it is converted to bicarbonate in the liver and muscle","Lactate, because it is converted to bicarbonate only in the kidney","Lactate, because muscle converts it to bicarbonate faster than acetate","Acetate, because it is converted to bicarbonate only in the kidney","Neither, because every buffer worsens liver failure"],
  ans:0,
  notes:"ไฟล์ jod หน้า 2 (ไฮไลต์เขียว): <b>\"ringer lactate vs acetate = ไม่ควรใช้ lactate เพราะต้องไปเปลี่ยนที่ตับ แต่ acetate เปลี่ยนเป็น bicarb ได้ที่ตับ+กล้ามเนื้อ > stress > liver failure\"</b>",
  kimg:["l12b_p2"],
  interp:"ผู้ป่วยตับวายรุนแรง ถามชนิด buffer ใน balanced fluid",
  why:"jod หน้า 2: ไม่ควรใช้ lactate เพราะต้องเปลี่ยนที่ตับ แต่ acetate เปลี่ยนเป็น bicarbonate ได้ที่ตับและกล้ามเนื้อ · ⚠ ตรวจ: ในผู้ป่วยผ่าตัดทั่วไป LR ใช้ได้ ข้อควรระวังจริงคือ severe liver failure หรือ lactic acidosis จึงเลือก acetate ในข้อนี้",
  wrong:["lactate ต้องถูกเปลี่ยนที่ตับ ไม่ใช่ไต — จะถูกถ้าตับปกติ","โน้ตระบุว่า lactate ต้องไปเปลี่ยนที่ตับ ไม่ใช่กล้ามเนื้อ — จะถูกถ้าเป็น acetate","acetate เปลี่ยนที่ตับและกล้ามเนื้อ ไม่ใช่เฉพาะที่ไต — จะถูกถ้าผู้ป่วยไตวายอย่างเดียว","โน้ตเลือก acetate ไม่ได้ปฏิเสธทุก buffer — จะถูกถ้าไม่มี fluid ให้เลือก"],
  trap:"ข้อนี้ผู้ป่วยตับวายรุนแรง ผู้ป่วยทั่วไปใช้ LR ได้",
  summary:["Lactate ต้องถูกเปลี่ยนที่ตับ จึงเลี่ยงในตับวายรุนแรง","Acetate เปลี่ยนเป็น bicarbonate ที่ตับและกล้ามเนื้อ","ผู้ป่วยผ่าตัดทั่วไปใช้ LR ได้","ข้อควรระวังจริง: severe liver failure และ lactic acidosis"],
  tags:["Pre-op & post-op","Fluid & electrolyte","Liver"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside · pre-op order) · ไม่มีสัญลักษณ์ · ลายมือไม่มี (พิมพ์ในโน้ต)"}),
U({n:46,
  stem:"A patient is scheduled for an elective laparotomy tomorrow morning. The ward nurse asks how the skin should be prepared on the ward according to the pre-op order in the bedside note. Which preparation is listed?",
  opts:["Scrubbing the abdomen with povidone iodine in alcohol","Bathing with chlorhexidine in water","Shaving the abdomen with a razor","Washing with alcohol only","Washing with plain soap without antiseptic"],
  ans:1,
  notes:"ไฟล์ jod หน้า 2 ข้อ 3 พิมพ์: <b>\"Prep skin อาบน้ำด้วย chlorhexidine in water\"</b>",
  kimg:["l12b_p2"],
  interp:"ถามวิธีเตรียมผิวหนังก่อนผ่าตัดตามโน้ต",
  why:"jod หน้า 2 ข้อ 3 ของ pre-op order พิมพ์ว่า \"Prep skin อาบน้ำด้วย chlorhexidine in water\" คือให้ผู้ป่วยอาบน้ำด้วย chlorhexidine ก่อนผ่าตัดเพื่อลดจำนวนเชื้อที่ผิวหนังและลดความเสี่ยง surgical site infection ตัวเลือกอื่นที่เป็นการโกนด้วยมีดโกน แอลกอฮอล์อย่างเดียว หรือสบู่ธรรมดา ไม่ใช่วิธีที่โน้ตระบุ",
  wrong:["โน้ตระบุ chlorhexidine ไม่ใช่ povidone iodine — จะถูกถ้าเป็นการเตรียมผิวในห้องผ่าตัดตามนโยบายเฉพาะ","การโกนด้วยมีดโกนเพิ่มความเสี่ยงติดเชื้อแผล — จะถูกถ้าเป็นการตัดขนด้วย clipper","แอลกอฮอล์อย่างเดียวไม่ใช่ที่โน้ตระบุ — จะถูกถ้าเป็นการ prep ในห้องผ่า","สบู่ธรรมดาไม่ใช่ที่โน้ตระบุ — จะถูกถ้าไม่มี chlorhexidine"],
  trap:"โกนขนด้วยมีดโกนไม่แนะนำ",
  summary:["Prep skin ก่อนผ่า: อาบน้ำด้วย chlorhexidine in water","เป้าหมายคือลดเชื้อผิวหนังและ SSI","ไม่โกนขนด้วยมีดโกน","Antibiotic prophylaxis ให้ใน OR หลังใส่ tube"],
  tags:["Pre-op & post-op","Surgical infection"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside · pre-op order) · ไม่มีสัญลักษณ์ · ลายมือไม่มี (พิมพ์ในโน้ต)"}),
U({n:47,
  stem:"A 45-year-old man with no known drug allergy is to receive a prophylactic antibiotic for a clean-contaminated operation. According to the pre-op order in the bedside note, where and when is the antibiotic given?",
  opts:["On the ward the night before the operation","On the ward one hour before leaving for the operating room","In the operating room before induction of anesthesia","In the operating room after the endotracheal tube has been inserted","In the recovery room after the operation has finished"],
  ans:3,
  notes:"ไฟล์ jod หน้า 2 ข้อ 4 พิมพ์: <b>\"Antibiotics prophylaxis ไปให้ใน OR หลังใส่ tube เผื่อแพ้ยา\"</b>",
  kimg:["l12b_p2"],
  interp:"ถามสถานที่และเวลาให้ antibiotic prophylaxis ตามโน้ต",
  why:"jod หน้า 2 ข้อ 4: ให้ใน OR หลังใส่ tube เผื่อแพ้ยา (ถ้าแพ้ จะมีวิสัญญีควบคุมทางเดินหายใจ) · แนวปฏิบัติทั่วไปให้ภายใน ≤60 นาทีก่อน incision สอดคล้องกัน",
  wrong:["โน้ตให้ในห้องผ่าตัด ไม่ใช่ที่ ward คืนก่อน — จะถูกถ้าเป็นการเตรียมลำไส้ด้วยยากิน","โน้ตให้ในห้องผ่าตัด ไม่ใช่ที่ ward — จะถูกถ้าโรงพยาบาลมี protocol ให้ที่ ward","ต้องให้หลังใส่ท่อ ไม่ใช่ก่อน เผื่อแพ้ยาจะมีวิสัญญีดูแลทางเดินหายใจ — จะถูกถ้าไม่มีเสี่ยงแพ้","ให้หลังผ่าตัดเสร็จช้าเกินไปสำหรับ prophylaxis — จะถูกถ้าเป็นการรักษา"],
  trap:"ให้หลังใส่ท่อ ไม่ใช่ก่อน induction",
  summary:["Antibiotic prophylaxis ให้ใน OR หลังใส่ tube เผื่อแพ้ยา","ถ้าแพ้จะมีวิสัญญีควบคุมทางเดินหายใจได้ทันที","ให้ภายใน ≤60 นาทีก่อน incision","ไม่ให้ล่วงหน้าเป็นวันที่ ward"],
  tags:["Pre-op & post-op","Surgical infection"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside · pre-op order) · ไม่มีสัญลักษณ์ · ลายมือไม่มี (พิมพ์ในโน้ต)"}),
U({n:48,
  stem:"A house officer prepares the pre-op order for an elective laparotomy using the bedside pre-op note as a guide. Which combination of orders matches the note?",
  opts:["NPO after midnight, povidone iodine bath, antibiotic on the ward and Foley catheter insertion","Light breakfast, chlorhexidine bath, antibiotic in the OR and void before going to the OR","NPO after midnight, chlorhexidine bath, antibiotic in the OR and void before going to the OR","NPO after midnight, large intravenous fluid on the ward, antibiotic on the ward and enema","NPO after midnight, chlorhexidine bath, antibiotic one day before and Foley catheter insertion"],
  ans:2,
  notes:"ไฟล์ jod หน้า 2 PRE OP ORDER: <b>\"1. NPO AMN · 2. IV fluid ไปให้ใน OR โดยวิสัญญีแพทย์ · 3. Prep skin อาบน้ำด้วย chlorhexidine in water · 4. Antibiotics prophylaxis ไปให้ใน OR หลังใส่ tube · 5. Void ก่อนไป OR\"</b>",
  kimg:["l12b_p2"],
  interp:"ต้องจับคู่ชุดคำสั่งก่อนผ่าที่ถูกต้องทั้งชุดตามโน้ต",
  why:"jod หน้า 2: NPO after midnight · IV fluid ให้ใน OR · อาบน้ำ chlorhexidine · antibiotic ใน OR หลังใส่ tube · void ก่อนไป OR · ⚠ ตรวจ: NPO และ enema เป็นแนวเดิม guideline ปัจจุบันต่างกัน",
  wrong:["โน้ตใช้ chlorhexidine ไม่ใช่ povidone iodine และให้ antibiotic ใน OR — จะถูกถ้าโน้ตระบุ Foley","โน้ตสั่ง NPO หลังเที่ยงคืน — จะถูกถ้าเป็นแนวปฏิบัติ ERAS ที่ให้ carbohydrate drink","โน้ตให้ fluid ใน OR โดยวิสัญญีและ antibiotic ใน OR — จะถูกถ้าโน้ตระบุให้ที่ ward","โน้ตให้ antibiotic ใน OR ไม่ใช่ล่วงหน้า 1 วัน และสั่ง void ไม่ใช่ Foley — จะถูกถ้าเป็นการผ่าตัดที่ต้องวัดปัสสาวะ"],
  trap:"ทุกข้ออาจผิดเพียง 1–2 รายการ ต้องไล่ตรวจทีละรายการ",
  summary:["NPO after midnight","IV fluid ให้ใน OR โดยวิสัญญีแพทย์","Prep skin ด้วย chlorhexidine bath","Antibiotic ใน OR หลังใส่ tube และ void ก่อนไป OR"],
  tags:["Pre-op & post-op","Surgical safety"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside · pre-op order) · ไม่มีสัญลักษณ์ · ลายมือไม่มี (พิมพ์ในโน้ต)"}),
U({n:49,
  stem:"A 62-year-old woman is listed for an elective right hemicolectomy. The old order sheet includes a rectal enema and mechanical bowel preparation for every patient, following the bedside note that orders NPO together with an enema. According to ERAS recommendations, what is the best practice?",
  opts:["Give mechanical bowel preparation to every colon patient","Give an enema the night before surgery only","Give an oral purgative for three days before surgery","Give nothing by mouth for 24 hours together with an enema","Do not use mechanical bowel preparation routinely"],
  ans:4,
  notes:"ไฟล์ jod หน้า 2 ข้อ 1: <b>\"NPO AMN ต้องงดอาหาร+สวนตูด เพราะได้ muscle relaxant > ขี้ไหลได้\"</b>",
  kimg:["l12b_p2"],
  interp:"โน้ตสั่งสวนตูดร่วมกับ NPO แต่ถามแนวปฏิบัติ ERAS",
  why:"โน้ตให้สวนตูดเพราะอุจจาระไหลเมื่อได้ muscle relaxant · ⚠ ไม่ตรงกัน: ERAS 2018 ไม่แนะนำ routine mechanical bowel preparation (ใช้เฉพาะ rectal surgery คู่กับ oral antibiotic)",
  wrong:["ERAS ไม่แนะนำ mechanical bowel prep แบบ routine — จะถูกถ้าเป็นผ่าตัด rectum ที่ใช้คู่กับ oral antibiotic","การสวนอย่างเดียวก็เป็น bowel prep แบบ mechanical ไม่แนะนำ routine — จะถูกถ้ามีข้อบ่งชี้เฉพาะ","ยาถ่ายหลายวันไม่ได้ลดการติดเชื้อและเพิ่ม dehydration — จะถูกถ้าเตรียมส่องกล้อง","การอด 24 ชม. ไม่จำเป็น — จะถูกถ้าผู้ป่วยมีลำไส้อุดตัน"],
  trap:"ข้อนี้ต่างจากที่ไฟล์สอน คำตอบอ้าง ERAS ไม่ใช่โน้ต",
  summary:["โน้ต: สวนตูดเพราะอุจจาระไหลเมื่อได้ muscle relaxant","ERAS 2018: ไม่ routine mechanical bowel prep","ใช้เฉพาะ rectal surgery ร่วมกับ oral antibiotic","ทำตาม protocol ของ รพ."],
  tags:["Pre-op & post-op","Surgical infection"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside · pre-op order) · ไม่มีสัญลักษณ์ · ลายมือไม่มี (พิมพ์ในโน้ต)",
  outside:"นอกสไลด์: คำแนะนำ ERAS เรื่อง mechanical bowel preparation · ไฟล์ให้แค่ NPO และสวนตูด"}),
U({n:50,
  stem:"A 47-year-old man who drinks heavily every day and has mild jaundice is scheduled for an elective herniorrhaphy. According to the lecture, which approach to additional laboratory tests is appropriate?",
  opts:["Request no further tests because liver function tests are never indicated before surgery","Request only urinalysis because jaundice is shown in the urine","Request only a chest film because alcohol affects the lungs","Request only electrolytes because alcohol causes dehydration","Request liver function tests and coagulation tests because the history points to liver disease"],
  ans:4,
  notes:"ไฟล์ jod หน้า 17 สไลด์ <b>\"LFT, coagulogram, UA are not routine test\"</b> ลายมือ <b>\"→ ดูตาม Hx e.g. กินเหล้า, jaundice\"</b>",
  kimg:["l12b_p17","l12b_p13"],
  interp:"ดื่มสุรามากและมี jaundice เป็นข้อบ่งชี้ทางประวัติที่ทำให้ส่ง LFT และ coagulogram",
  why:"jod หน้า 17: LFT, coagulogram, UA ไม่ใช่ routine ให้ดูตาม Hx เช่นกินเหล้า jaundice · ผู้ป่วยรายนี้มีประวัติทั้งสองจึงส่ง LFT และ coagulogram",
  wrong:["LFT ไม่ใช่ routine แต่ส่งตาม Hx เช่นดื่มสุรา, jaundice — จะถูกถ้าไม่มี Hx โรคตับ","UA ไม่ใช่ test ที่เกี่ยวกับโรคตับในสไลด์ — จะถูกถ้ามีอาการทางปัสสาวะ","CXR ไม่เกี่ยวกับ jaundice ในสไลด์ — จะถูกถ้าสงสัยโรคปอด","electrolytes ไม่ใช่ routine และไม่ตอบโจทย์โรคตับ — จะถูกถ้าใช้ diuretic"],
  trap:"not routine ไม่ได้แปลว่าไม่ส่งเลย",
  summary:["LFT, coagulogram, UA ไม่ใช่ routine test","ส่งตาม Hx เช่น ดื่มสุรา, jaundice (ลายมือ jod หน้า 17)","ผู้ป่วยโรคตับมีความเสี่ยงเลือดออก จึงต้องดู coagulation","not routine ไม่ได้แปลว่าไม่ส่งเลย"],
  tags:["Pre-op & post-op","Liver"],
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 17 (+ ไฟล์ jod หน้า 13) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({
 "n": 51,
 "stem": "A 70-year-old man with well-controlled hypertension and no other illness is scheduled for elective open right hemicolectomy for caecal cancer. He has no history of bleeding, anemia, or liver disease. Which laboratory test is indicated for him on the basis of his age and the type of operation alone?",
 "opts": [
  "Complete blood count",
  "Coagulation profile",
  "Liver function tests",
  "Urinalysis",
  "HbA1c"
 ],
 "ans": 0,
 "notes": "สไลด์ไฟล์ 78 หน้า 13 พิมพ์ว่า <b>\"Patient > 65 years old + major surgery\"</b> (ไฮไลต์ม่วง)<br>สไลด์ไฟล์ jod หน้า 14 พิมพ์ว่า <b>\"all patients 65 years of age or older who are undergoing major surgery\"</b>",
 "kimg": [
  "l12_p13",
  "l12b_p14"
 ],
 "interp": "อายุ 70 ปี + ผ่าตัดใหญ่ (colectomy) โดยไม่มีปัจจัยอื่น จึงต้องหาข้อบ่งชี้ที่มาจากอายุ + ชนิดผ่าตัดอย่างเดียว",
 "why": "สไลด์ 78 หน้า 13 พิมพ์ว่า <b>\"Patient > 65 years old + major surgery\"</b> (ไฮไลต์ม่วง) และ jod หน้า 14 พิมพ์ <b>\"all patients 65 years of age or older who are undergoing major surgery\"</b> ซึ่งตรงกันทั้งสองไฟล์ ผู้ป่วยอายุ 70 ปีที่จะทำ open right hemicolectomy จึงเข้าเกณฑ์ด้วยอายุและชนิดผ่าตัดเพียงอย่างเดียว โดยไม่ต้องมี anemia risk หรือประวัติเลือดออกเพิ่ม",
 "wrong": [
  "PT/aPTT/platelet ส่งเมื่อมีประวัติเลือดออกผิดปกติ โรคตับหรือไต หรือกินยา antiplatelet/anticoagulant ซึ่งผู้ป่วยรายนี้ไม่มี — จะถูกถ้าเขากิน warfarin หรือมีประวัติเลือดออกง่ายในครอบครัว",
  "LFT ส่งตามประวัติ เช่น ดื่มสุราหนัก ดีซ่าน หรือสัญญาณตับแข็ง ซึ่งโจทย์ระบุว่าไม่มี — จะถูกถ้ามี jaundice และ hepatomegaly ร่วมกับดื่มสุราเรื้อรัง",
  "UA ส่งเมื่อสงสัย UTI หรือก่อน endoscopic urologic procedure เช่น TURP ไม่ใช่เพราะอายุ — จะถูกถ้ามีฉี่แสบขัดหรือกำลังจะทำ TURP",
  "HbA1c แนะนำในผู้เสี่ยงเบาหวาน เช่น BMI สูง ประวัติครอบครัว อาการ DM หรือกินยา steroid — จะถูกถ้าผู้ป่วยมี polyuria และน้ำหนักเกิน"
 ],
 "trap": "ตัวเลือกอื่นต้องมี Hx เฉพาะ (bleeding, ตับ, ปัสสาวะ, DM) จึงไม่ถูกกระตุ้นด้วยอายุอย่างเดียว",
 "summary": [
  "CBC ส่งใน 3 กลุ่ม: high-risk surgery ที่คาดว่าเสียเลือดมาก (78 ขีดเส้นใต้ High risk) · อายุ >65 ปี + major surgery · มี risk/symptom ของ anemia",
  "ผู้ป่วยอายุ >65 ปีที่ผ่าตัดใหญ่ส่ง CBC ได้แม้สุขภาพดีและไม่มีอาการซีด",
  "Cr/eGFR ใช้เกณฑ์อายุที่ต่างกันคือ >50 ปี + major surgery ส่วน CBC ใช้ >65 ปี",
  "Test อื่น (coag, LFT, UA, HbA1c) ต้องมี Hx หรือ risk เฉพาะของแต่ละตัว ไม่ได้ส่งเพียงเพราะอายุ"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 13 (= jod หน้า 14) · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 52,
 "stem": "A healthy 28-year-old woman is booked for day-case excision of a small subcutaneous lipoma of the forearm under local anesthesia. She takes no medication and has no past history. The surgical resident asks which preoperative laboratory work-up is appropriate for her.",
 "opts": [
  "Complete blood count only",
  "Complete blood count and serum electrolytes",
  "No routine laboratory tests",
  "Complete blood count and coagulation profile",
  "Complete blood count, creatinine and liver function tests"
 ],
 "ans": 2,
 "notes": "ลายมือไฟล์ jod หน้า 14 ที่ CBC เขียนว่า <b>\"→ ไม่ส่งใน minor operation\"</b><br>สไลด์ไฟล์ jod หน้า 13 ลายมือลูกศรจาก Electrolytes, LFT, Coag และ UA → <b>\"not recommend for routine test\"</b><br>สไลด์ไฟล์ 78 หน้า 20 พิมพ์ว่า <b>\"Not routine test\"</b>",
 "kimg": [
  "l12b_p14",
  "l12b_p13",
  "l12_p20"
 ],
 "interp": "ผู้ป่วยสุขภาพดี ไม่มียา ผ่าตัด minor ใต้ local — ไม่มีข้อบ่งชี้ใดๆ",
 "why": "ลายมือ jod หน้า 14 ข้าง CBC เขียนว่า <b>\"→ ไม่ส่งใน minor operation\"</b> และ jod หน้า 13 มีลูกศรลายมือจาก Electrolytes, LFT, Coagulation และ UA ไปที่ <b>\"not recommend for routine test\"</b> สอดคล้องกับ 78 หน้า 20 ที่พิมพ์ <b>\"Not routine test\"</b> หญิงอายุ 28 สุขภาพดี ไม่กินยา ผ่าตัดเล็กใต้ local ไม่มีข้อบ่งชี้ใดเลย การส่ง lab เผื่อไว้เพิ่มผล false positive และไม่เปลี่ยนการดูแล",
 "wrong": [
  "CBC อย่างเดียวไม่มีข้อบ่งชี้ เพราะไม่ใช่ high-risk surgery อายุไม่ถึง 65 และไม่มี anemia risk — จะถูกถ้าเธอมีประจำเดือนมากหรือซีดอยู่เดิม",
  "CBC + electrolyte เกินความจำเป็น electrolyte ส่งเฉพาะผู้มีโรคไตหรือกิน diuretic/ACEI/ARB — จะถูกถ้าเธอกิน furosemide เรื้อรัง",
  "CBC + coag ไม่มีข้อบ่งชี้เพราะไม่มี Hx เลือดออกและไม่กินยากันเลือดแข็ง — จะถูกถ้ามีประวัติฟกช้ำง่ายหรือกิน warfarin",
  "ชุดตรวจ CBC, Cr, LFT เกินจากหลัก selective testing ของ jod — จะถูกถ้าเป็นผู้สูงอายุที่ผ่าตัดใหญ่และมีโรคตับร่วม"
 ],
 "trap": "อย่าส่ง lab 'เผื่อไว้' ในผู้ป่วยสุขภาพดี",
 "summary": [
  "Preop lab ไม่ใช่ routine ต้องส่งตามข้อบ่งชี้ที่เปลี่ยนการดูแลได้",
  "ผู้ป่วยสุขภาพดี ไม่กินยา ผ่าตัดเล็ก ไม่ต้องส่ง lab ใดๆ",
  "jod ระบุ CBC ไม่ส่งใน minor operation ส่วน electrolyte, LFT, coag, UA ก็ไม่ routine",
  "การส่ง test ที่ไม่มีข้อบ่งชี้เพิ่ม false positive และค่าใช้จ่าย"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 14 + 13 (= 78 หน้า 20) · ไม่มีสัญลักษณ์ · ลายมือ jod"
}),
U({
 "n": 53,
 "stem": "A 45-year-old man with alcoholic cirrhosis and a 10 kg weight loss over 6 months is booked for elective laparoscopic cholecystectomy. Minimal blood loss is anticipated and he is not yet 65 years old. A student asks why a complete blood count is still requested. What is the best justification?",
 "opts": [
  "Age over 65 years with major surgery",
  "Expected significant intraoperative blood loss",
  "Planned use of neuraxial anesthesia",
  "Routine requirement for every surgical patient",
  "Liver disease and malnutrition are risks for anemia"
 ],
 "ans": 4,
 "notes": "สไลด์ไฟล์ 78 หน้า 13 พิมพ์ว่า <b>\"Risk / symptoms of anemia: extreme age, liver disease, hematologic disease, history of bleeding, malnutrition\"</b> (ไฮไลต์ม่วง)",
 "kimg": [
  "l12_p13"
 ],
 "interp": "อายุไม่ถึง 65 ผ่าตัดเสียเลือดน้อย แต่มี cirrhosis + น้ำหนักลด 10 กก. = liver disease + malnutrition",
 "why": "78 หน้า 13 พิมพ์ว่า <b>\"Risk / symptoms of anemia: extreme age, liver disease, hematologic disease, history of bleeding, malnutrition\"</b> (ไฮไลต์ม่วง) ผู้ป่วยรายนี้อายุ 45 ปี ผ่าตัด lap chole เสียเลือดน้อย จึงไม่เข้าข้ออายุหรือ high blood loss แต่มี cirrhosis (liver disease) และน้ำหนักลด 10 กก. (malnutrition) ซึ่งตรงกับรายการ risk of anemia โดยตรง ข้อนี้มีเฉพาะใน 78 (jod ไม่มีข้อนี้)",
 "wrong": [
  "เกณฑ์ >65 ปี + major surgery ไม่ตรงกับผู้ป่วยอายุ 45 ปีที่ผ่าตัดผ่านกล้อง — จะถูกถ้าเขาอายุ 70 และกำลังทำ colectomy",
  "lap chole เสียเลือดน้อยมาก จึงไม่ใช่ high-risk surgery ที่เสียเลือดมาก — จะถูกถ้ากำลังทำ hepatectomy หรือ aortic surgery",
  "neuraxial anesthesia เป็นข้อบ่งชี้ของการตรวจ coagulation ไม่ใช่ CBC และผู้ป่วยจะได้ general anesthesia — จะถูกถ้าถามเหตุผลของ PT/aPTT ก่อน epidural",
  "สไลด์ไม่ได้ให้ส่ง CBC ในทุกราย และ jod เขียนว่าไม่ส่งใน minor operation — จะถูกถ้ามีนโยบายโรงพยาบาลกำหนดไว้ ซึ่งไม่ใช่เกณฑ์ในสไลด์"
 ],
 "trap": "อย่าตัดสินจากอายุหรือขนาดผ่าตัดอย่างเดียว",
 "summary": [
  "CBC มี 3 กลุ่มข้อบ่งชี้: high-risk/เสียเลือดมาก, >65 ปี + major surgery, risk หรืออาการของ anemia",
  "Risk of anemia: extreme age, liver disease, hematologic disease, hx bleeding, malnutrition",
  "ผู้ป่วย cirrhosis มักมี anemia และ thrombocytopenia ร่วมด้วย",
  "เกณฑ์เรื่อง anemia risk พบเฉพาะในสไลด์ 78 (jod ไม่ส่ง CBC ใน minor operation)"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 13 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 54,
 "stem": "A 62-year-old man is on postoperative day 1 after elective total gastrectomy. He is hemodynamically stable, asymptomatic, and walking along the ward. There is no sign of active bleeding. His hemoglobin is 8.2 g/dL. What is the most appropriate management of his anemia?",
 "opts": [
  "Transfuse 1 unit of packed red cells",
  "Observe without transfusion",
  "Transfuse 2 units of packed red cells",
  "Transfuse fresh frozen plasma",
  "Transfuse to keep hematocrit above 30 percent"
 ],
 "ans": 1,
 "notes": "สไลด์ไฟล์ jod หน้า 14 พิมพ์ว่า <b>\"Transfusion when: Hb < 7–8 g/dL\"</b> และ <b>\"in patient with symptoms\"</b><br>ลายมือ jod ข้างเคียงเขียนว่า <b>\"(major Sx ?? Hct >30)\"</b> (อ่านไม่ชัด)",
 "kimg": [
  "l12b_p14"
 ],
 "interp": "ผู้ป่วยเสถียร ไม่มีอาการ Hb 8.2 — สูงกว่าช่วง 7–8 ที่ jod ให้ และไม่มี symptom",
 "why": "jod หน้า 14 พิมพ์ว่า <b>\"Transfusion when: Hb < 7–8 g/dL\"</b> และ <b>\"in patient with symptoms\"</b> ผู้ป่วยรายนี้ Hb 8.2 สูงกว่าช่วง 7–8 และไม่มีอาการ เสถียร ไม่มีเลือดออก จึงไม่มีข้อบ่งชี้ ⚠ ลายมือ \"Hct >30\" อ่านไม่ชัดและเป็นกฎเก่า แนวทาง AABB 2023 ใช้ restrictive Hb <7 ในผู้ป่วยเสถียร ทั้งสองแนวทางจึงให้คำตอบเดียวกันที่ Hb 8.2",
 "wrong": [
  "การให้ 1 unit ไม่มีข้อบ่งชี้เมื่อ Hb เกิน 8 และผู้ป่วยไม่มีอาการ — จะถูกถ้า Hb ต่ำกว่า 7 หรือมีเหนื่อย แน่นหน้าอก",
  "การให้ 2 unit เกินจำเป็นยิ่งกว่า เพราะแนวทาง restrictive ให้ทีละหน่วยแล้วประเมินซ้ำ — จะถูกถ้ามี active bleeding จน Hb ตกเร็ว",
  "FFP ใช้แก้ coagulopathy ที่ INR สูงและมีเลือดออก ไม่ใช่ anemia — จะถูกถ้ามีเลือดออกร่วมกับ INR ยาว",
  "เกณฑ์ Hct >30 เป็นกฎเก่าที่ AABB 2023 เลิกใช้ automatic — จะถูกถ้าเป็นผู้ป่วยโรคหัวใจที่แพทย์ตั้งเป้าสูงเป็นรายบุคคล"
 ],
 "trap": "ผู้เรียนมักให้เลือดตามตัวเลข Hb 10 หรือ Hct 30 เดิม",
 "summary": [
  "เกณฑ์ให้เลือดใน jod: Hb <7–8 g/dL หรือมีอาการ",
  "AABB 2023: restrictive ผู้ป่วยเสถียรให้เมื่อ Hb <7 g/dL",
  "ผู้ป่วยเสถียรไม่มีอาการและ Hb >8 ให้ observe ไม่ต้องให้เลือด",
  "ไม่ใช้กฎเก่า Hb 10 หรือ Hct 30 อัตโนมัติ และให้เลือดทีละ unit"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 14 · ไม่มีสัญลักษณ์ · ลายมือ jod"
}),
U({
 "n": 55,
 "stem": "A 66-year-old woman is on postoperative day 2 after elective right hemicolectomy. Hemoglobin is 8.4 g/dL. She has become short of breath on walking, with heart rate 118 beats per minute and dizziness on standing, and no overt bleeding is seen. What is the most appropriate management?",
 "opts": [
  "Observe and recheck hemoglobin in 1 week",
  "Start oral iron and continue observation",
  "Transfuse fresh frozen plasma",
  "Transfuse packed red cells",
  "Transfuse platelet concentrate"
 ],
 "ans": 3,
 "notes": "สไลด์ไฟล์ jod หน้า 14 พิมพ์ว่า <b>\"Transfusion when: Hb < 7–8 g/dL ... in patient with symptoms\"</b>",
 "kimg": [
  "l12b_p14"
 ],
 "interp": "Hb 8.4 อยู่เหนือเกณฑ์ตัวเลข แต่มีอาการหายใจเหนื่อย ใจสั่น เวียนศีรษะ (symptomatic anemia)",
 "why": "jod หน้า 14 ให้ข้อบ่งชี้การให้เลือดสองแบบคือ <b>\"Hb < 7–8 g/dL\"</b> หรือ <b>\"in patient with symptoms\"</b> Hb 8.4 อยู่เหนือเกณฑ์ตัวเลข แต่ผู้ป่วยมีเหนื่อยขณะเดิน หัวใจเต้น 118 และหน้ามืดเมื่อลุกยืน ซึ่งเป็นอาการจาก anemia เข้าข้อหลัง จึงให้ packed red cells แม้ไม่มีเลือดออกให้เห็น",
 "wrong": [
  "การรอ 1 สัปดาห์ไม่เหมาะเมื่อมี tachycardia และเหนื่อย เพราะ oxygen delivery ไม่พอ — จะถูกถ้าไม่มีอาการและ Hb 8.4 คงที่",
  "iron กินใช้เวลาหลายสัปดาห์ ไม่แก้ symptomatic anemia เฉียบพลัน — จะถูกถ้า Hb คงที่และไม่มีอาการ",
  "FFP แก้การขาด clotting factor ไม่เพิ่ม Hb — จะถูกถ้า INR สูงและมีเลือดออก",
  "platelet concentrate ใช้เมื่อ platelet ต่ำหรือเลือดออก ไม่ใช่ anemia — จะถูกถ้า platelet 30,000 และมี bleeding"
 ],
 "trap": "อย่าใช้ตัวเลข Hb อย่างเดียว ต้องดูอาการร่วมด้วย",
 "summary": [
  "ให้เลือดเมื่อ Hb ต่ำกว่าเกณฑ์ หรือผู้ป่วยมีอาการจาก anemia",
  "อาการที่ควรให้เลือด: เหนื่อย tachycardia หน้ามืด แน่นหน้าอก",
  "ผ่าตัดที่เสียเลือดมาก เช่น CVT และ vascular surgery มีเกณฑ์ตามปริมาณเลือดเสีย (ลายมือ jod)",
  "FFP และ platelet ไม่ใช่การรักษา anemia"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 14 · ไม่มีสัญลักษณ์ · ลายมือ jod"
}),
U({
 "n": 56,
 "stem": "A 78-year-old man is on postoperative day 1 after internal fixation of a femoral neck fracture. He is hemodynamically stable and has no symptoms. His hemoglobin is 7.6 g/dL. According to the restrictive transfusion guideline for orthopedic surgery, what should be done?",
 "opts": [
  "Observe and recheck hemoglobin in 24 hours",
  "Transfuse packed red cells",
  "Give oral iron and observe",
  "Give erythropoietin only",
  "Transfuse fresh frozen plasma"
 ],
 "ans": 1,
 "notes": "สไลด์ไฟล์ jod หน้า 14 พิมพ์ว่า <b>\"Transfusion when: Hb < 7–8 g/dL\"</b><br>Round I/O เสริม: AABB 2023 ใช้ 8 g/dL ใน orthopedic/cardiac surgery หรือมี CVD เดิม",
 "kimg": [
  "l12b_p14"
 ],
 "interp": "ผู้ป่วยเสถียร Hb 7.6 หลังผ่าตัด orthopedic — ต้องรู้ว่าเกณฑ์ผ่าตัดกระดูกต่างจาก 7",
 "why": "jod หน้า 14 พิมพ์ <b>\"Transfusion when: Hb < 7–8 g/dL\"</b> ซึ่งเป็นช่วงที่ต้องแยกตามผู้ป่วย Round I/O เสริม AABB 2023: ผู้ป่วยเสถียรทั่วไปให้เมื่อ Hb <7 แต่ใน orthopedic หรือ cardiac surgery และผู้มี CVD เดิมใช้ 8 g/dL ผู้ป่วย hip fracture อายุ 78 ปี Hb 7.6 ต่ำกว่า 8 จึงให้เลือด การใช้เกณฑ์ 7 กับทุกรายจะตอบผิดข้อนี้",
 "wrong": [
  "การรอ 24 ชม. ไม่เหมาะเพราะ Hb 7.6 ต่ำกว่า 8 ซึ่งเป็นเกณฑ์ orthopedic — จะถูกถ้าเป็นผ่าตัดช่องท้องทั่วไปที่ใช้เกณฑ์ 7",
  "iron กินไม่ทันแก้ Hb ต่ำหลังผ่าตัดกระดูกหัก — จะถูกถ้า Hb สูงกว่าเกณฑ์และต้องการเสริมระยะยาว",
  "EPO ไม่ใช่การรักษา acute postoperative anemia และออกฤทธิ์ช้า — จะถูกถ้าเป็น anemia of CKD",
  "FFP ไม่เพิ่มเม็ดเลือดแดง — จะถูกถ้ามี coagulopathy ที่ทำให้เลือดออก"
 ],
 "trap": "ใช้เกณฑ์ 7 สำหรับทุกผู้ป่วยจะพลาดข้อนี้",
 "summary": [
  "AABB 2023: ผู้ป่วยเสถียรทั่วไปให้เลือดเมื่อ Hb <7 g/dL",
  "Orthopedic/cardiac surgery หรือมี CVD เดิมใช้เกณฑ์ 8 g/dL",
  "jod: Hb <7–8 g/dL หรือมีอาการ",
  "ให้ทีละ unit แล้วประเมินซ้ำ"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 14 · ไม่มีสัญลักษณ์ · ลายมือ jod",
 "outside": "นอกสไลด์: เกณฑ์ 8 g/dL เฉพาะ orthopedic/cardiac surgery ตาม AABB 2023 (สไลด์ให้เพียงช่วง 7–8)"
}),
U({
 "n": 57,
 "stem": "A 55-year-old man with no comorbidity and no regular medication is scheduled for elective total gastrectomy for early gastric cancer. He has no history of kidney disease and has not received contrast. Which renal test is justified by his age and the type of operation?",
 "opts": [
  "Urinalysis for protein",
  "Renal ultrasonography",
  "24-hour urine protein",
  "Serum creatinine",
  "Timed urine creatinine clearance"
 ],
 "ans": 3,
 "notes": "สไลด์ไฟล์ 78 หน้า 15 พิมพ์ว่า <b>\"Serum creatinine concentration\"</b> และ <b>\"Patient over 50 years old + major surgery\"</b> (ไฮไลต์ม่วง)<br>สไลด์ไฟล์ jod หน้า 15 พิมพ์ว่า <b>\"patients over the age of 50 undergo intermediate- or high-risk surgery\"</b>",
 "kimg": [
  "l12_p15",
  "l12b_p15"
 ],
 "interp": "อายุ >50 ปีโดยไม่มีโรคร่วม ผ่าตัดใหญ่ — ข้อบ่งชี้มาจากอายุ + ชนิดผ่าตัด",
 "why": "78 หน้า 15 พิมพ์ <b>\"Serum creatinine concentration\"</b> และ <b>\"Patient over 50 years old + major surgery\"</b> (ไฮไลต์ม่วง) ส่วน jod หน้า 15 พิมพ์ <b>\"patients over the age of 50 undergo intermediate- or high-risk surgery\"</b> ชายอายุ 55 ที่ทำ total gastrectomy เข้าเกณฑ์ทั้งสองแบบโดยไม่ต้องมีโรคไตหรือยา ⚠ ถ้อยคำสองไฟล์ต่างเล็กน้อยแต่ความหมายใกล้กัน",
 "wrong": [
  "UA ไม่ใช่ routine และไม่ใช่การประเมินไตตามอายุ — จะถูกถ้าสงสัย UTI หรือจะทำ TURP",
  "ultrasound ไตไม่ใช่ preop test ตามสไลด์ — จะถูกถ้าสงสัย hydronephrosis หรือก้อนที่ไต",
  "24-hour urine protein ไม่ใช่ screening ก่อนผ่าตัด — จะถูกถ้าสงสัย nephrotic syndrome",
  "timed creatinine clearance ไม่ใช่สิ่งที่สไลด์ระบุ ใช้ serum Cr/eGFR — จะถูกถ้าต้องวัด GFR แม่นยำในโรคไตที่ทราบแล้ว"
 ],
 "trap": "",
 "summary": [
  "Cr/eGFR ส่งเมื่ออายุ >50 ปี + major surgery (78) หรือ intermediate/high-risk surgery (jod)",
  "หรือเมื่อเสี่ยง CKD/AKI: DM, CHF, HT, vascular disease, SLE",
  "ยาเสี่ยง: ACEI, ARB, diuretic, NSAIDs, nephrotoxic drug, contrast",
  "CBC ใช้เกณฑ์อายุ >65 ปี ส่วน Cr ใช้ >50 ปี"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 15 (= jod หน้า 15) · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 58,
 "stem": "A 64-year-old woman with poorly controlled diabetes and hypertension takes enalapril and regular ibuprofen for knee pain. She is scheduled for elective laparoscopic cholecystectomy. Which test is most clearly indicated because of her risk profile?",
 "opts": [
  "Serum creatinine",
  "Pulmonary function test",
  "Fasting lipid profile",
  "Thyroid function test",
  "Hepatitis B surface antigen"
 ],
 "ans": 0,
 "notes": "สไลด์ไฟล์ 78 หน้า 15 พิมพ์ว่า <b>\"Risk of CKD / AKI: DM, CHF, HT, vascular disease, SLE\"</b> และ <b>\"Drug: ACEI, ARB, diuretics, NSAIDs\"</b> (ไฮไลต์ม่วง)",
 "kimg": [
  "l12_p15",
  "l12b_p15"
 ],
 "interp": "DM + HT + ยา ACEI + NSAIDs = เสี่ยง CKD/AKI ครบ",
 "why": "78 หน้า 15 พิมพ์ <b>\"Risk of CKD / AKI: DM, CHF, HT, vascular disease, SLE\"</b> และ <b>\"Drug: ACEI, ARB, diuretics, NSAIDs\"</b> (ไฮไลต์ม่วง) ผู้ป่วยมี DM คุมไม่ดี HT และกิน enalapril (ACEI) ร่วมกับ ibuprofen (NSAID) ซึ่งเสี่ยง AKI ครบ แม้ lap chole เป็น intermediate-risk ก็ควรตรวจ serum creatinine ก่อนผ่าตัดเพื่อตั้ง baseline และแก้ปัจจัยเสี่ยง",
 "wrong": [
  "PFT ไม่ใช่ routine และไม่เกี่ยวกับการทำงานของไต — จะถูกถ้าเธอมี COPD รุนแรงหรือจะตัดปอด",
  "lipid profile ไม่ใช่ preop test ที่สไลด์ระบุ — จะถูกถ้าถามเรื่องลดความเสี่ยงหลอดเลือดระยะยาวในคลินิก",
  "TFT ส่งเมื่อมีอาการหรือก้อนที่ต่อมไทรอยด์ — จะถูกถ้าใจสั่น น้ำหนักลดและตาโปน",
  "HBsAg ไม่เกี่ยวกับ risk CKD/AKI — จะถูกถ้ามีความเสี่ยงติดเชื้อไวรัสตับอักเสบหรือใช้ยาเสพติดฉีด"
 ],
 "trap": "แม้ผ่าตัด intermediate-risk ก็ส่ง Cr ได้เพราะมีปัจจัยเสี่ยงไต",
 "summary": [
  "ส่ง Cr/eGFR เมื่อมีปัจจัยเสี่ยง CKD/AKI: DM, CHF, HT, vascular disease, SLE",
  "ยาเสี่ยง: ACEI, ARB, diuretic, NSAIDs, nephrotoxic drug, contrast",
  "ผ่าตัด intermediate-risk ที่มีปัจจัยเสี่ยงไตก็ควรส่ง Cr",
  "การดูแล: แก้ electrolyte, เลี่ยง nephrotoxic drug, รักษา intravascular volume"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 15 (= jod หน้า 15) · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 59,
 "stem": "A 60-year-old man with end-stage renal disease on hemodialysis is scheduled for elective ventral hernia repair on Thursday morning. His dialysis unit asks when the last session should be done before surgery. What is the most appropriate timing?",
 "opts": [
  "On the morning of surgery",
  "Immediately after the operation",
  "On the day before surgery",
  "Three days before surgery",
  "Dialysis is unnecessary before surgery"
 ],
 "ans": 2,
 "notes": "สไลด์ไฟล์ jod หน้า 15 พิมพ์ว่า <b>\"Patient with ESRD: dialysis before surgery\"</b><br>ลายมือ jod เขียนว่า <b>\"(ก่อน Sx 1 day) └ ทำวัน Sx = e'lyte imbalance\"</b> และ <b>\"(GFR <10) └ เสี่ยง uremic bleeding\"</b>",
 "kimg": [
  "l12b_p15"
 ],
 "interp": "ESRD ที่ฟอกเลือดประจำ ถามเวลาฟอกครั้งสุดท้ายก่อนผ่าตัด elective",
 "why": "ลายมือ jod หน้า 15 เขียนว่า <b>\"(ก่อน Sx 1 day) └ ทำวัน Sx = e'lyte imbalance\"</b> ข้างข้อความ <b>\"Patient with ESRD: dialysis before surgery\"</b> ดังนั้น ESRD ที่ฟอกประจำควรฟอกครั้งสุดท้ายราว 1 วันก่อนผ่าตัด เพื่อให้ uremia และ volume/K ดีขึ้นแต่ไม่ฟอกในวันผ่าตัดเองเพราะเสี่ยง electrolyte imbalance",
 "wrong": [
  "ฟอกเช้าวันผ่าตัดเสี่ยง electrolyte imbalance ตามลายมือ jod — จะถูกถ้าเป็นผ่าตัดฉุกเฉินที่มี hyperkalemia คุกคามชีวิตและรอไม่ได้",
  "ฟอกหลังผ่าตัดไม่ช่วยป้องกัน uremic bleeding ระหว่างผ่า — จะถูกถ้าเป็นการดูแลหลังผ่าตัดตามรอบปกติ",
  "ห่าง 3 วันทำให้ uremia และ K สะสมกลับมา — จะถูกถ้าไม่มีปัญหา volume/K และฟอกตามรอบ",
  "สไลด์ระบุชัดว่า ESRD ต้อง dialysis before surgery — จะถูกถ้าไตยังทำงานดีและ eGFR สูง"
 ],
 "trap": "คิดว่าฟอกให้ใกล้เวลาผ่าที่สุดดีที่สุด",
 "summary": [
  "ESRD: dialysis ก่อนผ่าตัดราว 1 วัน (ลายมือ jod)",
  "ไม่ฟอกวันผ่าตัดเพราะเสี่ยง electrolyte imbalance (และ heparin ค้างจากการฟอก)",
  "GFR <10 เสี่ยง uremic bleeding จึงต้องฟอกก่อนผ่า",
  "ผ่าตัดฉุกเฉินใน ESRD ที่ฟอกไม่ทันต้องแก้ hyperkalemia ตามสถานการณ์"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 15 (+ 78 หน้า 14) · ไม่มีสัญลักษณ์ · ลายมือ jod"
}),
U({
 "n": 60,
 "stem": "A 58-year-old man with end-stage renal disease and an eGFR of 8 mL/min has missed two dialysis sessions. He needs an elective laparotomy for adhesiolysis. The coagulation slide lists preoperative dialysis in such patients. Which perioperative problem does it aim to prevent?",
 "opts": [
  "Surgical site infection",
  "Anastomotic leakage",
  "Deep vein thrombosis",
  "Postoperative ileus",
  "Uremic bleeding"
 ],
 "ans": 4,
 "notes": "สไลด์ไฟล์ 78 หน้า 14 พิมพ์ว่า <b>\"Preoperative dialysis in ESRD patient: prevent uremic bleeding\"</b> (ไฮไลต์ม่วง)<br>ลายมือ 78 เขียนว่า <b>\"eGFR<10-15 → vWF อาจผิดปกติ ถ้าไม่ได้ฟอกเลือด\"</b>",
 "kimg": [
  "l12_p14",
  "l12b_p15"
 ],
 "interp": "ESRD eGFR 8 ขาดฟอกเลือด — ถามเหตุผลที่สไลด์ให้ฟอกก่อนผ่า",
 "why": "78 หน้า 14 พิมพ์ <b>\"Preoperative dialysis in ESRD patient: prevent uremic bleeding\"</b> (ไฮไลต์ม่วง) และลายมือเสริมว่า <b>\"eGFR<10-15 → vWF อาจผิดปกติ ถ้าไม่ได้ฟอกเลือด\"</b> jod หน้า 15 ก็เขียน <b>\"(GFR <10) └ เสี่ยง uremic bleeding\"</b> ผู้ป่วย eGFR 8 ที่ขาดฟอกจึงเสี่ยงเลือดออกจาก platelet/vWF dysfunction ซึ่งเป็นเหตุผลของการฟอกก่อนผ่าตัดที่สไลด์ระบุ",
 "wrong": [
  "SSI ป้องกันด้วย antibiotic prophylaxis และคุมน้ำตาล ไม่ใช่เหตุผลที่สไลด์ให้ฟอก — จะถูกถ้าถามเรื่อง glycemic control ใน DM",
  "anastomotic leak เกี่ยวกับ nutrition perfusion และเทคนิคผ่าตัด — จะถูกถ้าถามเรื่อง albumin ต่ำหรือ bowel prep",
  "DVT ป้องกันตาม Caprini ด้วย GCS/IPC หรือยา — จะถูกถ้าถามเรื่อง VTE prophylaxis",
  "ileus ไม่ใช่เหตุผลหลักของการฟอกก่อนผ่า — จะถูกถ้ามี hypokalemia หรือ opioid หลังผ่า"
 ],
 "trap": "",
 "summary": [
  "Uremia ทำให้ platelet function และ vWF ผิดปกติ → uremic bleeding",
  "ESRD หรือ eGFR <10–15 ควรฟอกเลือดก่อนผ่า",
  "ฟอกราว 1 วันก่อนผ่าตัดไม่ใช่วันผ่า",
  "ผู้ป่วยที่ขาดฟอกและเลือดออกง่ายอาจต้องได้รับการแก้ไขก่อนผ่าตัด elective"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 14 + jod หน้า 15 · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod"
}),
U({
 "n": 61,
 "stem": "A 66-year-old man with chronic kidney disease stage 3 and a creatinine of 1.9 mg/dL is scheduled for elective sigmoid colectomy. The resident is asked how to protect his renal function perioperatively. Which measure is recommended?",
 "opts": [
  "Restrict all intravenous fluids",
  "Continue regular NSAIDs for analgesia",
  "Maintain intravascular volume",
  "Give routine intravenous contrast studies",
  "Start high-dose loop diuretic"
 ],
 "ans": 2,
 "notes": "สไลด์ไฟล์ jod หน้า 15 พิมพ์ว่า <b>\"Correct electrolyte, avoid nephrotoxic drug, maintainance intravascular volume\"</b>",
 "kimg": [
  "l12b_p15"
 ],
 "interp": "CKD ก่อนผ่าตัด ถามมาตรการดูแลไตตามสไลด์",
 "why": "jod หน้า 15 พิมพ์การดูแลผู้ป่วยโรคไตว่า <b>\"Correct electrolyte, avoid nephrotoxic drug, maintainance intravascular volume\"</b> ผู้ป่วย CKD stage 3 ที่ Cr 1.9 ทำ sigmoid colectomy จึงต้องรักษา intravascular volume ไม่ให้เกิด hypovolemia และ AKI ร่วมกับเลี่ยงยาที่พิษต่อไต",
 "wrong": [
  "การจำกัดสารน้ำทั้งหมดทำให้ hypovolemia และไตบาดเจ็บ — จะถูกถ้ามี pulmonary edema หรือ fluid overload ชัดเจน",
  "NSAIDs เป็นยาเสี่ยง AKI ในสไลด์ — จะถูกถ้าไตปกติและไม่มีข้อห้ามใช้",
  "contrast เป็น nephrotoxic ที่สไลด์ให้เลี่ยง — จะถูกถ้าจำเป็นต้องวินิจฉัยด่วนและเตรียมป้องกันไตแล้ว",
  "loop diuretic ขนาดสูงทำให้ volume depletion และ electrolyte ผิดปกติ — จะถูกถ้ามีน้ำเกินและ CHF"
 ],
 "trap": "NSAIDs/ACEI/diuretic เป็นยาที่ควรระวังในผู้ป่วยไต",
 "summary": [
  "การดูแลไตก่อนผ่าตัด: แก้ electrolyte, เลี่ยง nephrotoxic drug, รักษา intravascular volume",
  "nephrotoxic: NSAIDs, aminoglycoside, contrast, ACEI/ARB ในบางสภาวะ",
  "กลุ่มเสี่ยง CKD/AKI: DM, CHF, HT, vascular disease, SLE",
  "ESRD ต้อง dialysis ก่อนผ่าตัดราว 1 วัน"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 15 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 62,
 "stem": "A 52-year-old woman who underwent Roux-en-Y gastric bypass 3 years ago has chronic diarrhea and poor oral intake. She is booked for elective laparoscopic cholecystectomy. Which preoperative test is most justified by her history?",
 "opts": [
  "Serum amylase",
  "Coagulation profile",
  "Chest radiograph",
  "Urinalysis",
  "Serum electrolytes"
 ],
 "ans": 4,
 "notes": "สไลด์ไฟล์ 78 หน้า 16 พิมพ์ว่า <b>\"s/p gastric bypass\"</b>, <b>\"malnutrition / malabsorption\"</b> ในกลุ่มเสี่ยง electrolyte imbalance (ไฮไลต์ม่วง arrhythmia)",
 "kimg": [
  "l12_p16"
 ],
 "interp": "gastric bypass + ท้องเสียเรื้อรัง + กินน้อย = malabsorption/malnutrition",
 "why": "78 หน้า 16 รายการกลุ่มเสี่ยง electrolyte imbalance รวม <b>\"s/p gastric bypass\"</b> และ <b>\"malnutrition / malabsorption\"</b> (ไฮไลต์ม่วงที่ arrhythmia ซึ่งเป็นผลเสียของ electrolyte ผิดปกติ) ผู้ป่วย Roux-en-Y ท้องเสียเรื้อรังและกินน้อยจึงเสี่ยง K, Mg และ Ca ผิดปกติ ควรส่ง serum electrolytes ก่อน lap chole ส่วน jod หน้า 16 เขียนว่า electrolyte ไม่ใช่ routine ซึ่งสอดคล้องกับการส่งเฉพาะผู้เสี่ยง",
 "wrong": [
  "amylase ไม่ใช่ preop test ในสไลด์ — จะถูกถ้าปวดท้องส่วนบนและสงสัย pancreatitis",
  "coag ส่งเมื่อมีประวัติเลือดออกหรือยา anticoagulant ซึ่งโจทย์ไม่มี — จะถูกถ้ามี vitamin K malabsorption ร่วมกับ bleeding",
  "CXR ส่งเมื่อสงสัยโรคหัวใจ/ปอด ซึ่งไม่มีอาการ — จะถูกถ้าไอเรื้อรังหรือหอบ",
  "UA ส่งเมื่อสงสัย UTI หรือก่อน TURP — จะถูกถ้ามีฉี่แสบขัด"
 ],
 "trap": "jod เขียนว่า electrolyte ไม่ใช่ routine — ตรงกับการส่งเฉพาะกลุ่มเสี่ยง",
 "summary": [
  "Electrolyte ส่งในกลุ่มเสี่ยง ไม่ใช่ routine (jod)",
  "เสี่ยง: renal disease, diuretic/ACEI/ARB, digoxin, steroid, s/p gastric bypass, malnutrition/malabsorption",
  "ผลเสียของ electrolyte ผิดปกติ: arrhythmia",
  "78 เพิ่ม digoxin, steroid และ gastric bypass ที่ jod ไม่มี"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 16 (= jod หน้า 16) · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 63,
 "stem": "A 57-year-old man with end-stage renal disease on hemodialysis underwent a session with heparin 2 hours before an elective operation. During surgery there is diffuse oozing from the wound with a prolonged aPTT and normal platelet count. What is the most likely cause?",
 "opts": [
  "Uremic platelet dysfunction from missed dialysis",
  "Residual heparin from the dialysis circuit",
  "Dilutional thrombocytopenia",
  "Vitamin K deficiency",
  "Factor VIII deficiency"
 ],
 "ans": 1,
 "notes": "ลายมือไฟล์ jod หน้า 15 เขียนว่า <b>\"ทำวัน Sx = e'lyte imbalance\"</b> และ <b>\"ก่อน Sx 1 day\"</b> (ใช้อธิบายเหตุผลของการฟอกก่อนผ่า 1 วัน)",
 "kimg": [
  "l12b_p15"
 ],
 "interp": "ฟอกด้วย heparin 2 ชม.ก่อนผ่า aPTT ยาว platelet ปกติ มี oozing",
 "why": "ลายมือ jod หน้า 15 เขียนว่าไม่ควรฟอกวันผ่าตัด (<b>\"ทำวัน Sx = e'lyte imbalance\"</b>) และฟอกก่อนผ่า 1 วัน ส่วนเหตุผลเรื่อง heparin ในวงจรฟอกเป็นความรู้เสริมนอกสไลด์ ผู้ป่วยฟอกด้วย heparin เมื่อ 2 ชม.ก่อนผ่า มี oozing กระจายโดย aPTT ยาวและ platelet ปกติ ชี้ residual heparin ซึ่งเป็นเหตุผลหนึ่งที่ควรเว้นระยะหลังฟอก",
 "wrong": [
  "ผู้ป่วยเพิ่งฟอก uremic platelet dysfunction จึงไม่น่าเป็นสาเหตุหลัก และมันไม่ทำให้ aPTT ยาว — จะถูกถ้าขาดฟอกหลายครั้งและ BUN สูง",
  "platelet ปกติจึงไม่ใช่ dilutional thrombocytopenia — จะถูกถ้า platelet ต่ำหลังให้สารน้ำหรือเลือดปริมาณมาก",
  "vitamin K deficiency ทำให้ PT ยาวเด่น — จะถูกถ้ามี obstructive jaundice หรือกิน warfarin",
  "factor VIII deficiency ต้องมีประวัติเลือดออกตั้งแต่เด็ก — จะถูกถ้ามี Hx ในครอบครัวและ aPTT ยาวโดยไม่ได้รับ heparin"
 ],
 "trap": "นักเรียนมักเลือก uremic bleeding เพราะเป็นผู้ป่วย ESRD",
 "summary": [
  "ฟอกเลือดก่อนผ่าตัดราว 1 วัน ไม่ใช่วันผ่า",
  "ฟอกวันผ่า: electrolyte imbalance (jod) และ heparin ค้างจากวงจร",
  "aPTT ยาว + platelet ปกติ ชี้ heparin effect",
  "Uremic bleeding มาจาก platelet/vWF dysfunction ใน ESRD ที่ไม่ได้ฟอก"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 15 · ไม่มีสัญลักษณ์ · ลายมือ jod",
 "outside": "นอกสไลด์: heparin ค้างจากการฟอกเลือด (สไลด์/ลายมือให้เหตุผลเฉพาะ electrolyte imbalance)"
}),
U({
 "n": 64,
 "img": "l12_q64",
 "stem": "A 60-year-old man is scheduled for elective repair of a hiatal hernia. Using the table of the European guideline shown, which category of surgical risk, defined by the estimated 30-day risk of cardiovascular death, myocardial infarction and stroke, applies to this operation?",
 "opts": [
  "Low surgical risk",
  "High surgical risk",
  "Very low surgical risk",
  "Intermediate surgical risk",
  "Very high surgical risk"
 ],
 "ans": 3,
 "notes": "สไลด์ไฟล์ 78 หน้า 12 (ESC 2022 Table 5) พิมพ์ว่า <b>\"Intermediate surgical risk (1–5%)\"</b> ประกอบด้วย <b>\"Intraperitoneal: splenectomy, hiatal hernia repair, cholecystectomy\"</b>",
 "kimg": [
  "l12_p12"
 ],
 "interp": "ถามจัดกลุ่ม risk ตาม ESC 2022 Table 5 จากรูป ผู้ป่วยผ่าตัด hiatal hernia repair",
 "why": "รูปแสดงตาราง ESC 2022 Table 5 ซึ่ง 78 หน้า 12 พิมพ์ว่า <b>\"Intermediate surgical risk (1–5%)\"</b> มี <b>\"Intraperitoneal: splenectomy, hiatal hernia repair, cholecystectomy\"</b> ตารางเป็นค่าประมาณ risk 30 วันของ CV death, MI และ stroke จากชนิดผ่าตัดเท่านั้น hiatal hernia repair อยู่คอลัมน์กลาง จึงเป็น intermediate",
 "wrong": [
  "low (<1%) เป็นกลุ่ม breast, dental, thyroid, eye, minor gynae, superficial — จะถูกถ้าเป็นผ่าตัดเล็กเหล่านี้",
  "high (>5%) เป็น oesophagectomy, Whipple, liver resection, perforated bowel — จะถูกถ้าผ่าตัดหลอดอาหารหรือตับ",
  "ตารางไม่มีกลุ่ม very low — จะถูกถ้าตารางมีหลายระดับกว่านี้",
  "ตารางไม่มีกลุ่ม very high — จะถูกถ้าตารางมีหลายระดับกว่านี้"
 ],
 "trap": "Intraperitoneal ไม่ได้แปลว่าเสี่ยงสูงเสมอ ต้องดูรายการในตาราง",
 "summary": [
  "ESC 2022 Table 5: low <1%, intermediate 1–5%, high >5%",
  "ค่า risk คือ 30-day CV death, MI, stroke ตามชนิดผ่าตัดอย่างเดียว",
  "Intermediate: lap chole, splenectomy, hiatal hernia, head/neck, EVAR, hip/spine, renal transplant",
  "Intraperitoneal ไม่ได้เสี่ยงสูงทั้งหมด"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 12 · ไม่มีสัญลักษณ์ · ลายมือ 78 (ไม่ใช้ในข้อนี้)"
}),
U({
 "n": 65,
 "stem": "A 48-year-old man with a BMI of 34 kg/m2, whose father has diabetes, reports polyuria and thirst for 2 months. He is scheduled for elective ventral hernia repair. Which preoperative test is recommended for him?",
 "opts": [
  "HbA1c",
  "Serum amylase",
  "Urine culture",
  "Fasting lipid profile",
  "Thyroid function test"
 ],
 "ans": 0,
 "notes": "สไลด์ไฟล์ 78 หน้า 17 พิมพ์ว่า <b>\"Recommend HbA1C\"</b>, <b>\"Risk of hyperglycemia: DM, high BMI, family history of DM\"</b>, <b>\"sign and symptoms of DM\"</b>",
 "kimg": [
  "l12_p17"
 ],
 "interp": "BMI สูง ประวัติครอบครัว DM และอาการ polyuria/polydipsia = กลุ่มเสี่ยง hyperglycemia",
 "why": "78 หน้า 17 พิมพ์ <b>\"Recommend HbA1C\"</b> และ <b>\"Risk of hyperglycemia: DM, high BMI, family history of DM\"</b> พร้อม <b>\"sign and symptoms of DM\"</b> ผู้ป่วย BMI 34 มีบิดาเป็น DM และมี polyuria กับกระหายน้ำ 2 เดือน ครบทั้งปัจจัยเสี่ยงและอาการ จึงแนะนำ HbA1c ก่อนผ่าตัด (ข้อมูลส่วนนี้มีเฉพาะในไฟล์ 78)",
 "wrong": [
  "amylase ไม่ใช่การประเมิน DM — จะถูกถ้าปวดท้องและสงสัย pancreatitis",
  "urine culture ใช้เมื่อสงสัย UTI — จะถูกถ้ามีไข้ ฉี่แสบขัด",
  "lipid profile ไม่ใช่ preop test ที่สไลด์แนะนำ — จะถูกถ้าคลินิกประเมินความเสี่ยงหลอดเลือดระยะยาว",
  "TFT ส่งเมื่อสงสัยโรคไทรอยด์ — จะถูกถ้ามีใจสั่น น้ำหนักลด หรือ goiter"
 ],
 "trap": "",
 "summary": [
  "HbA1c แนะนำในผู้เสี่ยง hyperglycemia",
  "เสี่ยง: DM, BMI สูง, FHx DM, อาการ DM, ยา steroid",
  "Hyperglycemia เพิ่ม CV events และ postoperative infection",
  "jod หน้า 6 ลายมือ: Diabetes → delayed wound healing"
 ],
 "tags": [
  "Pre-op & post-op",
  "Metabolic response"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 17 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 66,
 "stem": "A 56-year-old woman with long-standing diabetes has an HbA1c of 11.2 percent before elective colectomy. The resident explains to her what her uncontrolled hyperglycemia increases the risk of after the operation. Which complication does the lecture list?",
 "opts": [
  "Malignant hyperthermia",
  "Postoperative hypothermia",
  "Anesthetic awareness",
  "Postoperative infection",
  "Difficult intubation"
 ],
 "ans": 3,
 "notes": "สไลด์ไฟล์ 78 หน้า 17 พิมพ์ว่า <b>\"Complication: increased risk of CV events, postoperative infection\"</b> (ไฮไลต์ม่วง)<br>ไฟล์ jod หน้า 6 (เรื่อง history) เขียนว่า <b>\"Diabetes → delayed wound healing\"</b>",
 "kimg": [
  "l12_p17",
  "l12b_p6"
 ],
 "interp": "เบาหวานคุมไม่ดีก่อนผ่าตัด ถามผลแทรกซ้อนที่สไลด์ระบุ",
 "why": "78 หน้า 17 พิมพ์ <b>\"Complication: increased risk of CV events, postoperative infection\"</b> (ไฮไลต์ม่วง) และ jod หน้า 6 เขียนมือ <b>\"Diabetes → delayed wound healing\"</b> ผู้ป่วยที่ HbA1c 11.2% จึงเสี่ยงติดเชื้อหลังผ่าตัดและแผลหายช้า ส่วน MH, hypothermia, awareness และ difficult intubation ไม่ใช่ผลของ hyperglycemia",
 "wrong": [
  "MH เป็นปฏิกิริยาต่อยาสลบ volatile หรือ succinylcholine — จะถูกถ้ามีไข้สูงและ CO2 สูงในห้องผ่าตัด",
  "hypothermia เกี่ยวกับอุณหภูมิห้องผ่าตัดและสารน้ำเย็น ไม่ใช่ glucose — จะถูกถ้าถามเรื่องการอุ่นผู้ป่วย",
  "awareness เกี่ยวกับความลึกของยาสลบ — จะถูกถ้ากล้ามเนื้อคลายตัวโดยได้ยาสลบไม่พอ",
  "difficult intubation ประเมินด้วย Mallampati ไม่ใช่ HbA1c — จะถูกถ้าคอแข็งหรืออ้าปากได้น้อย"
 ],
 "trap": "",
 "summary": [
  "Hyperglycemia เพิ่มความเสี่ยง CV events และ postoperative infection (78)",
  "DM ทำให้ wound healing ช้า (ลายมือ jod)",
  "แนะนำ HbA1c ในผู้เสี่ยง DM",
  "ผู้ที่ HbA1c สูงมากควรพิจารณาเลื่อนผ่าตัด elective ถ้าเลื่อนได้"
 ],
 "tags": [
  "Pre-op & post-op",
  "Metabolic response"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 17 + jod หน้า 6 · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod"
}),
U({
 "n": 67,
 "stem": "A 61-year-old man with type 2 diabetes is to have elective hernia repair. On the morning of surgery his point-of-care glucose is 240 mg/dL. According to ADA perioperative standards, what is the recommended range for glucose during the perioperative period?",
 "opts": [
  "100 to 180 mg/dL",
  "70 to 100 mg/dL",
  "180 to 250 mg/dL",
  "60 to 140 mg/dL",
  "200 to 300 mg/dL"
 ],
 "ans": 0,
 "notes": "สไลด์ไฟล์ 78 หน้า 17 พิมพ์ว่า <b>\"Recommend HbA1C\"</b> และ <b>\"Complication: increased risk of CV events, postoperative infection\"</b><br>Round I/O เสริม ADA 2025: เป้า glucose ช่วงผ่าตัด 100–180 mg/dL",
 "kimg": [
  "l12_p17"
 ],
 "interp": "ถามเป้า glucose ตอนผ่าตัดซึ่งสไลด์ไม่ให้ตัวเลข",
 "why": "สไลด์ 78 หน้า 17 บอกว่า hyperglycemia เพิ่ม <b>\"CV events, postoperative infection\"</b> แต่ไม่ให้ตัวเลขเป้า ความรู้เสริมจาก ADA Standards of Care 2025 ให้ glucose ช่วงผ่าตัด 100–180 mg/dL วัดภายใน ~4 ชม.ก่อนผ่า ผู้ป่วยที่มี glucose 240 จึงสูงเกินเป้า และไม่ควรคุมเข้มจนต่ำกว่า 100",
 "wrong": [
  "70–100 mg/dL เป็นช่วงต่ำจนเสี่ยง hypoglycemia — จะถูกถ้าถามระดับน้ำตาลอดอาหารในคนปกติ",
  "180–250 mg/dL ยอมให้ hyperglycemia ต่อไป เพิ่ม infection — จะถูกถ้ามีผู้ป่วยวิกฤตและนโยบายเก่า",
  "60–140 mg/dL เป็น tight control ซึ่งเพิ่ม hypoglycemia — จะถูกถ้าเป็นเป้าตามมาตรฐานที่ไม่ใช้แล้ว",
  "200–300 mg/dL สูงมากและเสี่ยง infection และ DKA/HHS — จะถูกถ้าถามช่วงที่ต้องเลื่อนผ่าตัดทันที"
 ],
 "trap": "ไม่ควร tight control ต่ำกว่า 100",
 "summary": [
  "ADA 2025: เป้า glucose ช่วงผ่าตัด 100–180 mg/dL",
  "วัด glucose ภายใน ~4 ชม.ก่อนผ่า",
  "หลีกเลี่ยง tight control เพราะเสี่ยง hypoglycemia",
  "เลื่อนผ่า elective ถ้า HbA1c สูงมากและเลื่อนได้"
 ],
 "tags": [
  "Pre-op & post-op",
  "Metabolic response"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 17 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง",
 "outside": "นอกสไลด์: ช่วงเป้า glucose 100–180 mg/dL ตาม ADA 2025 (สไลด์ไม่ระบุตัวเลข)"
}),
U({
 "n": 68,
 "stem": "A 50-year-old man who drinks about 10 standard drinks daily has had jaundice and dark urine for 2 weeks. He is referred for elective inguinal hernia repair. Which test is indicated by this history before surgery?",
 "opts": [
  "Pulmonary function test",
  "Urine cytology",
  "Liver function tests",
  "Fasting lipid profile",
  "Troponin T"
 ],
 "ans": 2,
 "notes": "สไลด์ไฟล์ 78 หน้า 18 พิมพ์ว่า <b>\"Suspected acute heatitis (viral, alcoholic, drug)\"</b> และ <b>\"alcoholic drinking\"</b>, <b>\"jaundice\"</b><br>ลายมือ jod หน้า 17 เขียนว่า <b>\"→ ดูตาม Hx e.g. กินเหล้า, jaundice\"</b>",
 "kimg": [
  "l12_p18",
  "l12b_p17"
 ],
 "interp": "ดื่มสุราหนัก + jaundice + ปัสสาวะสีเข้ม = ข้อบ่งชี้ LFT",
 "why": "78 หน้า 18 พิมพ์ <b>\"Suspected acute heatitis (viral, alcoholic, drug)\"</b> (สะกดตามต้นฉบับ = hepatitis) และตัวชี้ <b>\"alcoholic drinking\"</b>, <b>\"jaundice\"</b> ส่วนลายมือ jod หน้า 17 เขียนว่า LFT, coagulogram, UA ไม่ routine <b>\"→ ดูตาม Hx e.g. กินเหล้า, jaundice\"</b> ผู้ป่วยดื่มหนักและตัวเหลือง 2 สัปดาห์จึงเป็นข้อบ่งชี้ของ LFT ชัดเจน",
 "wrong": [
  "PFT ไม่เกี่ยวกับตับ — จะถูกถ้ามี COPD รุนแรงหรือจะตัดปอด",
  "urine cytology ใช้เมื่อสงสัย urothelial cancer ไม่อธิบาย jaundice — จะถูกถ้ามี painless hematuria",
  "lipid profile ไม่ใช่ preop test ที่สไลด์ระบุ — จะถูกถ้าประเมินความเสี่ยงหัวใจและหลอดเลือดระยะยาว",
  "troponin T ใช้เมื่อสงสัย MI หรือประเมิน perioperative MI — จะถูกถ้ามีแน่นหน้าอก"
 ],
 "trap": "LFT ไม่ใช่ routine แต่ส่งตามประวัติ",
 "summary": [
  "LFT ส่งเมื่อสงสัย acute hepatitis (viral, alcoholic, drug) หรือสัญญาณ cirrhosis",
  "ตัวชี้: IV drug use, alcoholic drinking, blood transfusion, hepatosplenomegaly, jaundice, portal HT",
  "LFT, coagulogram, UA ไม่ routine ส่งตาม Hx (jod)",
  "สงสัยตับแข็งใช้ Child-Pugh ประเมิน"
 ],
 "tags": [
  "Pre-op & post-op",
  "Liver"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 18 + jod หน้า 17 · ไม่มีสัญลักษณ์ · ลายมือ jod"
}),
U({
 "n": 69,
 "stem": "A 55-year-old man has ascites, spider angiomata and splenomegaly, and is scheduled for elective umbilical hernia repair. A clinical score is requested to estimate the severity of his liver disease before surgery. Which score is used?",
 "opts": [
  "Revised Cardiac Risk Index",
  "Caprini score",
  "Mallampati score",
  "Glasgow Coma Scale",
  "Child-Pugh score"
 ],
 "ans": 4,
 "notes": "สไลด์ไฟล์ 78 หน้า 18 พิมพ์ว่า <b>\"Risk / signs of cirrhosis: Child Pugh score\"</b>",
 "kimg": [
  "l12_p18"
 ],
 "interp": "ascites, spider angiomata, splenomegaly = signs of cirrhosis/portal hypertension",
 "why": "78 หน้า 18 พิมพ์ <b>\"Risk / signs of cirrhosis: Child Pugh score\"</b> ผู้ป่วยมี ascites, spider angiomata และ splenomegaly ซึ่งเป็น signs ของ cirrhosis/portal hypertension จึงใช้ Child-Pugh ประเมินความรุนแรงของโรคตับและความเสี่ยงผ่าตัด ส่วน RCRI, Caprini, Mallampati และ GCS ประเมินระบบอื่น",
 "wrong": [
  "RCRI ประเมินความเสี่ยงหัวใจ (MACE) ใน non-cardiac surgery — จะถูกถ้าผู้ป่วยมี CAD หรือ HF",
  "Caprini ประเมิน VTE และกำหนด prophylaxis — จะถูกถ้าถามความเสี่ยง DVT หลังผ่าตัด",
  "Mallampati ประเมิน airway และโอกาส difficult intubation — จะถูกถ้าถามก่อนดมยาสลบ",
  "GCS ประเมินระดับความรู้สึกตัว — จะถูกถ้าเป็นผู้ป่วยบาดเจ็บศีรษะ"
 ],
 "trap": "",
 "summary": [
  "สงสัย cirrhosis หรือมี signs of portal HT ใช้ Child-Pugh ประเมิน",
  "Signs: ascites, spider angiomata, splenomegaly, jaundice",
  "ตัวแปร Child-Pugh: bilirubin, albumin, INR, ascites, encephalopathy",
  "Child C มี mortality ผ่าตัด elective สูงมาก"
 ],
 "tags": [
  "Pre-op & post-op",
  "Liver"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 18 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 70,
 "stem": "A 58-year-old man with alcoholic cirrhosis has bilirubin 2.5 mg/dL, albumin 3.0 g/dL, INR 1.9, mild controlled ascites and no encephalopathy. He needs elective cholecystectomy. What is his Child-Pugh class?",
 "opts": [
  "Class A",
  "Class B",
  "Class C",
  "Class A with ascites",
  "Class D"
 ],
 "ans": 1,
 "notes": "สไลด์ไฟล์ 78 หน้า 18 พิมพ์ว่า <b>\"Risk / signs of cirrhosis: Child Pugh score\"</b> (ไม่มีตารางคะแนนในสไลด์)",
 "kimg": [
  "l12_p18"
 ],
 "interp": "ต้องใช้ตาราง Child-Pugh: bilirubin 2–3 = 2, albumin 2.8–3.5 = 2, INR 1.7–2.3 = 2, ascites เล็กน้อย = 2, ไม่มี encephalopathy = 1",
 "why": "สไลด์ 78 หน้า 18 ระบุเพียงชื่อ <b>\"Child Pugh score\"</b> ไม่มีตารางคะแนน ความรู้เสริม: bilirubin 2–3 = 2 คะแนน, albumin 2.8–3.5 = 2, INR 1.7–2.3 = 2, ascites เล็กน้อยคุมได้ = 2, ไม่มี encephalopathy = 1 รวม 9 คะแนน ซึ่งอยู่ในช่วง 7–9 คือ Child B (5–6 = A, 10–15 = C)",
 "wrong": [
  "Class A ต้องรวม 5–6 คะแนน เช่น bilirubin <2, albumin >3.5, INR <1.7 และไม่มี ascites — จะถูกถ้าผล lab ปกติเกือบทั้งหมด",
  "Class C ต้อง 10–15 คะแนน เช่น bilirubin >3, albumin <2.8, INR >2.3 และ encephalopathy — จะถูกถ้าตับวายรุนแรง",
  "ไม่มีระดับ A ที่มี ascites เป็น class ย่อย — จะถูกถ้าเป็นเกณฑ์อื่นที่ไม่ใช่ Child-Pugh",
  "Child-Pugh มีเพียง A, B, C ไม่มี D — จะถูกถ้าเป็นระบบจัดระดับอื่น"
 ],
 "trap": "",
 "summary": [
  "Child-Pugh 5 ตัวแปร: bilirubin, albumin, INR, ascites, encephalopathy",
  "5–6 = A, 7–9 = B, 10–15 = C",
  "Child B ความเสี่ยงผ่าตัดปานกลาง Child C สูงมาก ควรเลี่ยง elective",
  "ตัวอย่างนี้ 2+2+2+2+1 = 9 = Child B"
 ],
 "tags": [
  "Pre-op & post-op",
  "Liver"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 18 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง",
 "outside": "นอกสไลด์: ตารางคะแนน Child-Pugh และช่วงคะแนน (สไลด์เพียงระบุชื่อ score)"
}),
U({
 "n": 71,
 "stem": "A 44-year-old man is scheduled for elective inguinal hernia repair. At the pre-anesthetic clinic he states that for 3 days he has felt incomplete emptying after each void with mild burning on urination. Which test should be done before surgery?",
 "opts": [
  "Urine cytology",
  "Cystoscopy",
  "Intravenous pyelography",
  "Abdominal ultrasonography",
  "Urinalysis"
 ],
 "ans": 4,
 "notes": "สไลด์ไฟล์ 78 หน้า 19 พิมพ์ว่า <b>\"Suspected UTI\"</b> (ไฮไลต์ม่วง) ลายมือ 78 เขียนว่า <b>\"มีอาการ e.g. ฉี่ไม่สุด\"</b>",
 "kimg": [
  "l12_p19"
 ],
 "interp": "ปัสสาวะไม่สุด + แสบขัด = อาการที่ทำให้สงสัย UTI",
 "why": "78 หน้า 19 พิมพ์ <b>\"Suspected UTI\"</b> (ไฮไลต์ม่วง) และลายมือเสริมว่า <b>\"มีอาการ e.g. ฉี่ไม่สุด\"</b> ผู้ป่วยมีฉี่ไม่สุดและแสบขัด 3 วัน จึงสงสัย UTI ต้องส่ง UA ก่อนผ่าตัด ส่วน jod หน้า 17 ระบุว่า UA ไม่ routine ซึ่งไม่ขัดกันเพราะข้อนี้มีอาการเฉพาะ",
 "wrong": [
  "urine cytology ใช้หา malignant cells ไม่ใช่ประเมิน UTI — จะถูกถ้ามี painless hematuria",
  "cystoscopy เป็นหัตถการ ไม่ใช่ test พื้นฐานก่อนผ่าตัด — จะถูกถ้าสงสัยเนื้องอกหรือนิ่วในกระเพาะปัสสาวะ",
  "IVP ไม่ใช่ test ที่สไลด์ระบุ — จะถูกถ้าสงสัยนิ่วหรือความผิดปกติทางเดินปัสสาวะส่วนบน",
  "ultrasound ไม่ใช่ลำดับแรกของ UTI — จะถูกถ้าสงสัย hydronephrosis หรือมี retention"
 ],
 "trap": "UA ไม่ใช่ routine (jod)",
 "summary": [
  "UA ส่งเมื่อสงสัย UTI (มีอาการ เช่น ฉี่ไม่สุด แสบขัด)",
  "UA ส่งก่อน endoscopic urologic procedure เช่น TURP",
  "UA ไม่ routine ในผู้ป่วยไม่มีอาการ (jod)",
  "ถ้าสงสัย UTI ก่อนผ่าตัด elective ควรรักษาก่อนผ่า"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 19 (+ jod หน้า 17) · ไม่มีสัญลักษณ์ · ลายมือ 78"
}),
U({
 "n": 72,
 "stem": "A 70-year-old man with benign prostatic hyperplasia is listed for transurethral resection of the prostate. He has no urinary symptoms other than a weak stream. What is the reason urinalysis is requested before the operation?",
 "opts": [
  "Age over 65 years with major surgery",
  "Endoscopic urologic procedure",
  "Expected significant blood loss",
  "Risk of electrolyte abnormality",
  "Previous myocardial infarction"
 ],
 "ans": 1,
 "notes": "สไลด์ไฟล์ 78 หน้า 19 พิมพ์ว่า <b>\"Undergo endoscopic urologic procedure: TURP\"</b> (ไฮไลต์ม่วง)",
 "kimg": [
  "l12_p19"
 ],
 "interp": "TURP คือ endoscopic urologic procedure และผู้ป่วยไม่มีอาการ UTI",
 "why": "78 หน้า 19 พิมพ์ <b>\"Undergo endoscopic urologic procedure: TURP\"</b> (ไฮไลต์ม่วง) ผู้ป่วย BPH ที่จะทำ TURP ไม่มีอาการ UTI แต่ TURP เป็น endoscopic urologic procedure จึงส่ง UA ก่อนผ่าเพื่อไม่ให้ทำหัตถการผ่านทางเดินปัสสาวะที่ติดเชื้อ เหตุผลอื่นเป็นเกณฑ์ของ test อื่น",
 "wrong": [
  "อายุ >65 + major surgery เป็นเกณฑ์ของ CBC และ Cr ไม่ใช่ UA — จะถูกถ้าถามเหตุผลส่ง CBC",
  "เสียเลือดมากเป็นเกณฑ์ของ CBC — จะถูกถ้าถามเหตุผลส่ง CBC ก่อนผ่าตัด hepatectomy",
  "เสี่ยง electrolyte abnormality เป็นเกณฑ์ของ electrolyte — จะถูกถ้ากิน diuretic",
  "previous MI เป็นเหตุผลของ EKG baseline — จะถูกถ้าถามเรื่องหัวใจ"
 ],
 "trap": "อย่าเลือกเหตุผลของ test อื่นมาปน",
 "summary": [
  "UA ส่งเมื่อสงสัย UTI หรือก่อน endoscopic urologic procedure (TURP)",
  "UA ไม่ routine ในผู้ป่วยทั่วไป",
  "แต่ละ test มีข้อบ่งชี้เฉพาะ อย่าปนเกณฑ์ข้ามกัน",
  "TURP เป็น low surgical risk ใน ESC Table 5"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 19 · ไม่มีสัญลักษณ์ · ลายมือ 78 (ไม่ใช้)"
}),
U({
 "n": 73,
 "stem": "A 72-year-old man with hypertension and type 2 diabetes is scheduled for excision of a superficial lipoma of the back under local anesthesia. He has no cardiac symptoms. What is the most appropriate preoperative cardiac testing?",
 "opts": [
  "12-lead electrocardiogram",
  "Electrocardiogram and echocardiography",
  "Electrocardiogram and exercise stress test",
  "No routine electrocardiogram",
  "Coronary angiography"
 ],
 "ans": 3,
 "notes": "สไลด์ไฟล์ 78 หน้า 21 พิมพ์ว่า <b>\"Not routinely use in low risk surgery\"</b> (ESC 2022)<br>78 หน้า 12 Table 5 ใน low risk มี <b>\"Superficial surgery\"</b>",
 "kimg": [
  "l12_p21",
  "l12_p12"
 ],
 "interp": "ผู้ป่วยอายุ >65 + HT + DM แต่ผ่าตัด superficial lipoma = low surgical risk",
 "why": "78 หน้า 21 พิมพ์ ESC 2022: <b>\"Not routinely use in low risk surgery\"</b> และ 78 หน้า 12 Table 5 จัด <b>\"Superficial surgery\"</b> เป็น low risk (<1%) ผู้ป่วยอายุ 72 ปีมี HT และ DM แต่ผ่าตัด lipoma ผิวหนังจึงไม่ต้องทำ EKG ⚠ jod หน้า 19 ใช้เกณฑ์เก่า (ชาย >45, หญิง >55) ซึ่งขัดกับ ESC 2022 จึงใช้ ESC 2022 เป็นหลัก",
 "wrong": [
  "ECG ใน low-risk surgery ไม่ routine แม้มี risk factor — จะถูกถ้าเป็น intermediate หรือ high-risk surgery",
  "echo ไม่มีข้อบ่งชี้เมื่อไม่มีอาการหรือ murmur — จะถูกถ้ามีหอบ บวม หรือ murmur ใหม่",
  "stress test ไม่ทำใน low-risk surgery — จะถูกถ้าผ่าตัด high-risk ที่ METs ต่ำ",
  "angiography ไม่ใช่ preop test ในผ่าตัดเล็กไม่มีอาการ — จะถูกถ้ามี ACS หรือ unstable angina"
 ],
 "trap": "⚠ jod ใช้เกณฑ์เก่า (ชาย >45, หญิง >55) ซึ่งขัดกับ ESC 2022 — ใช้ ESC 2022 เป็นหลัก",
 "summary": [
  "ESC 2022: ไม่ routine EKG ใน low-risk surgery",
  "Superficial, breast, dental, eye, thyroid, TURP เป็น low risk (<1%)",
  "EKG ทำเมื่อ ≥65 หรือมี risk factor + intermediate–high risk surgery",
  "⚠ jod ใช้เกณฑ์อายุเก่า ชาย >45 หญิง >55"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 21 (+ หน้า 12 · jod หน้า 18–19) · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 74,
 "stem": "A 70-year-old woman with hypertension and diabetes is scheduled for elective laparoscopic cholecystectomy. Her functional capacity is good and she has no cardiac symptoms. Which action fits the 2022 European guideline taught in the lecture?",
 "opts": [
  "Obtain a 12-lead electrocardiogram",
  "Proceed without electrocardiogram",
  "Obtain a chest radiograph only",
  "Obtain a pulmonary function test",
  "Obtain serum troponin only"
 ],
 "ans": 0,
 "notes": "สไลด์ไฟล์ 78 หน้า 21 พิมพ์ว่า <b>\"patient over 65 / risk factor + intermediate – high risk surgery\"</b><br>78 หน้า 12 Table 5 intermediate: <b>\"Intraperitoneal: splenectomy, hiatal hernia repair, cholecystectomy\"</b>",
 "kimg": [
  "l12_p21",
  "l12_p12"
 ],
 "interp": "อายุ 70 + HT + DM; chole = intermediate surgical risk",
 "why": "78 หน้า 21 พิมพ์ว่า <b>\"patient over 65 / risk factor + intermediate – high risk surgery\"</b> และ Table 5 หน้า 12 จัด <b>\"cholecystectomy\"</b> เป็น intermediate risk ผู้ป่วยอายุ 70 ปีมี HT และ DM จึงเข้าเกณฑ์ ESC 2022 ครบทั้งอายุ/risk factor และชนิดผ่าตัด ต้องทำ 12-lead ECG ก่อนผ่าตัด",
 "wrong": [
  "ข้ามไปโดยไม่ทำ ECG ผิดเพราะเข้าเกณฑ์ ≥65 + intermediate risk — จะถูกถ้าเป็น low-risk surgery",
  "CXR ไม่ใช่การตรวจหัวใจแทน EKG — จะถูกถ้าสงสัยโรคปอดหรือหัวใจวาย",
  "PFT ไม่ใช่ cardiac test — จะถูกถ้ามี COPD รุนแรง",
  "troponin อย่างเดียวไม่ใช่ข้อที่สไลด์ให้ในข้อนี้ — จะถูกถ้าเป็น high-risk surgery ตาม ESC 2022 algorithm"
 ],
 "trap": "",
 "summary": [
  "ESC 2022 EKG: known coronary/significant heart disease",
  "<65 ปีไม่มี risk factor + high-risk surgery",
  "≥65 ปีหรือมี risk factor + intermediate–high risk surgery",
  "Lap chole = intermediate risk (1–5%)"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 21 + 12 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 75,
 "stem": "A healthy 55-year-old man with no cardiovascular risk factor is scheduled for elective pancreaticoduodenectomy. He is asymptomatic. Which preoperative cardiac test is indicated by the lecture criteria?",
 "opts": [
  "No cardiac test is needed",
  "Echocardiography only",
  "12-lead electrocardiogram",
  "Coronary angiography",
  "24-hour Holter monitoring"
 ],
 "ans": 2,
 "notes": "สไลด์ไฟล์ 78 หน้า 21 พิมพ์ว่า <b>\"patient <65 w/o risk factor + high-risk surgery\"</b><br>78 หน้า 12 high risk: <b>\"Duodenal-pancreatic surgery\"</b>",
 "kimg": [
  "l12_p21",
  "l12_p12"
 ],
 "interp": "ผู้ป่วยไม่มี risk factor แต่ผ่าตัด duodenal-pancreatic = high surgical risk (>5%)",
 "why": "78 หน้า 21 พิมพ์ว่า <b>\"patient <65 w/o risk factor + high-risk surgery\"</b> และ Table 5 หน้า 12 จัด <b>\"Duodenal-pancreatic surgery\"</b> เป็น high risk (>5%) ผู้ป่วยอายุ 55 ปีสุขภาพดีแต่ผ่าตัด Whipple จึงเข้าเกณฑ์ ECG แม้ไม่มี risk factor เพราะตัวผ่าตัดเองมีความเสี่ยงสูง",
 "wrong": [
  "ไม่ต้องตรวจเลยผิดเพราะ high-risk surgery ทำให้ต้องทำ ECG แม้อายุน้อย — จะถูกถ้าเป็น low-risk surgery เช่น lipoma",
  "echo อย่างเดียวไม่ใช่การตรวจพื้นฐานในผู้ไม่มีอาการ — จะถูกถ้ามี murmur หรือ HF",
  "angiography ไม่ใช่ screening — จะถูกถ้ามี ACS",
  "Holter ไม่ใช่ screening — จะถูกถ้าสงสัย arrhythmia"
 ],
 "trap": "อย่าคิดว่าคนอายุน้อยสุขภาพดีไม่ต้องทำ EKG ในผ่าตัดใหญ่",
 "summary": [
  "ECG ทำใน high-risk surgery แม้อายุ <65 และไม่มี risk factor",
  "High risk >5%: Whipple, liver resection, oesophagectomy, adrenal, major vascular",
  "ไม่ routine ใน low-risk surgery",
  "Intermediate/high ใน ≥65 หรือมี risk factor ทำ ECG"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 21 + 12 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 76,
 "stem": "A 68-year-old man had a myocardial infarction 3 years ago and is scheduled for elective laparoscopic cholecystectomy. The anesthesiologist requests an electrocardiogram even though he is now asymptomatic. What is the purpose of this test?",
 "opts": [
  "To establish a preoperative baseline",
  "To exclude pulmonary embolism",
  "To measure left ventricular ejection fraction",
  "To predict difficult airway",
  "To detect anemia"
 ],
 "ans": 0,
 "notes": "สไลด์ไฟล์ 78 หน้า 21 พิมพ์ว่า <b>\"previous myocardial infarction, preoperative baseline\"</b> (ไฮไลต์ม่วง)",
 "kimg": [
  "l12_p21"
 ],
 "interp": "เคยเป็น MI แล้วขอ EKG ในผู้ไม่มีอาการ ถามวัตถุประสงค์",
 "why": "78 หน้า 21 ไฮไลต์ม่วงที่ <b>\"previous myocardial infarction, preoperative baseline\"</b> หมายถึงผู้ป่วยที่เคยเป็น MI ควรมี ECG พื้นฐานก่อนผ่าตัดไว้เทียบ ผู้ป่วยรายนี้เคย MI เมื่อ 3 ปีก่อนและไม่มีอาการ ECG จึงมีหน้าที่เป็น baseline ถ้าหลังผ่าตัดมีแน่นหน้าอกหรือสงสัย perioperative MI จะได้เทียบการเปลี่ยนแปลงได้ ส่วนลายมือ 78 ใต้คำว่า EKG อ่านไม่ชัด (ไม่ใช้)",
 "wrong": [
  "ECG ไม่ใช่การวินิจฉัย PE หลัก — จะถูกถ้าหอบเฉียบพลันและสงสัย PE ซึ่ง ECG อาจช่วยดู S1Q3T3 หรือ tachycardia",
  "การวัด EF ต้องใช้ echocardiography ไม่ใช่ ECG — จะถูกถ้าสงสัย HF หรือ valve disease",
  "ECG ไม่เกี่ยวกับ airway ซึ่งประเมินด้วย Mallampati — จะถูกถ้าถามเรื่อง difficult intubation",
  "ECG ตรวจ anemia ไม่ได้ ต้องใช้ CBC — จะถูกถ้ามีซีดจนหัวใจเต้นเร็ว"
 ],
 "trap": "",
 "summary": [
  "ECG ใน previous MI มีประโยชน์เป็น preoperative baseline",
  "ใช้เทียบเมื่อสงสัย perioperative MI หลังผ่าตัด",
  "ESC 2022: known coronary disease เป็นข้อบ่งชี้ ECG",
  "ECG ไม่วัด EF ต้องใช้ echo"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 21 · ไม่มีสัญลักษณ์ · ลายมือ 78 (ไม่ชัด ไม่ใช้)"
}),
U({
 "n": 77,
 "stem": "A 63-year-old man with type 2 diabetes and hypertension has a preoperative electrocardiogram reported as normal before elective colectomy. The resident writes in the note that no further cardiac evaluation is needed. What is the best response by the attending?",
 "opts": [
  "A normal tracing excludes perioperative myocardial infarction",
  "A normal tracing makes stress testing mandatory",
  "A normal tracing still requires further cardiac risk assessment",
  "A normal tracing is an indication for coronary angiography",
  "A normal tracing allows omission of all cardiac evaluation"
 ],
 "ans": 2,
 "notes": "ลายมือ jod หน้า 18 เขียนว่า <b>\"{abnormal = แก้ไข ; normal = ประเมิน risk MI เพิ่ม}\"</b><br>สไลด์ jod หน้า 18 พิมพ์ว่า <b>\"Unrecognized infarctions may be relatively common\"</b>",
 "kimg": [
  "l12b_p18"
 ],
 "interp": "EKG ปกติในผู้ป่วย DM+HT; ถามว่าต้องทำอะไรต่อ",
 "why": "ลายมือ jod หน้า 18 เขียนว่า <b>\"{abnormal = แก้ไข ; normal = ประเมิน risk MI เพิ่ม}\"</b> และสไลด์พิมพ์ <b>\"Unrecognized infarctions may be relatively common\"</b> ผู้ป่วยอายุ 63 ปีเป็น DM+HT ที่ ECG ปกติจึงยังต้องประเมิน risk MI/หัวใจต่อ เพราะ ECG ปกติไม่ได้ยกเว้นโรคหลอดเลือดหัวใจและ MI ที่ไม่มีอาการพบได้บ่อย",
 "wrong": [
  "ECG ปกติไม่ได้ยกเว้น perioperative MI โดยเฉพาะ silent infarction ใน DM — จะถูกถ้ามี negative predictive value สูงที่สไลด์ไม่ได้ให้",
  "ECG ปกติไม่ได้บังคับ stress test ให้ทำ — จะถูกถ้า METs ต่ำและเป็น high-risk surgery",
  "ECG ปกติไม่ใช่ข้อบ่งชี้ angiography — จะถูกถ้ามี ACS หรือ unstable angina",
  "การข้ามการประเมินหัวใจทั้งหมดขัดกับลายมือ jod — จะถูกถ้าผ่าตัด low-risk และไม่มี risk factor"
 ],
 "trap": "EKG ปกติไม่ได้แปลว่าปลอดภัย",
 "summary": [
  "jod: ECG abnormal → แก้ไข, normal → ประเมิน risk MI เพิ่ม",
  "Unrecognized infarction พบได้บ่อยโดยเฉพาะ DM",
  "ความชุกของ abnormal ECG เพิ่มตามอายุอย่าง exponential",
  "ECG ปกติไม่ได้แปลว่าความเสี่ยงหัวใจต่ำ"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 18 · ไม่มีสัญลักษณ์ · ลายมือ jod"
}),
U({
 "n": 78,
 "img": "l12_q78",
 "stem": "A 58-year-old man has poorly controlled type 2 diabetes and chronic obstructive pulmonary disease with exertional dyspnea. He is independent in daily living and is scheduled for elective cholecystectomy. Using the classification table shown, what is his ASA physical status?",
 "opts": [
  "ASA I",
  "ASA II",
  "ASA IV",
  "ASA V",
  "ASA III"
 ],
 "ans": 4,
 "notes": "สไลด์ไฟล์ 78 หน้า 24 พิมพ์ว่า <b>\"III: A patient with severe systemic disease ... poorly controlled DM or HTN, COPD, morbid obesity ...\"</b>",
 "kimg": [
  "l12_p24",
  "l12b_p22"
 ],
 "interp": "DM คุมไม่ดี + COPD ที่มี functional limitation",
 "why": "รูปตาราง ASA (78 หน้า 24) ระบุ class III ว่า <b>\"A patient with severe systemic disease\"</b> ตัวอย่างรวม <b>\"poorly controlled DM or HTN, COPD, morbid obesity (BMI ≥ 40) ...\"</b> ผู้ป่วยมี DM คุมไม่ดีและ COPD ที่หอบเมื่อออกแรง (substantive functional limitation) แต่ยังทำกิจวัตรเองได้และไม่ถึง constant threat to life จึงเป็น ASA III",
 "wrong": [
  "ASA I คือสุขภาพดี ไม่สูบ ไม่ดื่ม — จะถูกถ้าไม่มีโรคประจำตัว",
  "ASA II คือโรคเล็กน้อยไม่มี functional limitation เช่น well-controlled DM/HTN — จะถูกถ้า DM คุมดีและปอดเล็กน้อย",
  "ASA IV คือ constant threat to life เช่น MI <3 เดือน sepsis — จะถูกถ้ามี decompensation หรือ ischemia ต่อเนื่อง",
  "ASA V คือ moribund ไม่รอดถ้าไม่ผ่าตัด — จะถูกถ้ามี ruptured aneurysm"
 ],
 "trap": "อย่าสับสนกับ ASA II (well-controlled DM/HTN)",
 "summary": [
  "ASA I = normal healthy",
  "ASA II = mild systemic disease: smoker, social alcohol, pregnancy, BMI 30–40, well-controlled DM/HTN",
  "ASA III = poorly controlled DM/HTN, COPD, BMI ≥40, active hepatitis, alcohol dependence, pacemaker, ESRD on regular dialysis, MI/CVA/stent >3 เดือน",
  "ASA IV = constant threat to life: MI/CVA <3 เดือน, sepsis, DIC, ARDS, ESRD ไม่ฟอกประจำ"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 24 (= jod หน้า 22) · ไม่มีสัญลักษณ์ · ลายมือ 78"
}),
U({
 "n": 79,
 "stem": "A 52-year-old woman with hypertension takes furosemide and is scheduled for elective open cholecystectomy. She has no known heart disease. According to the older criteria on the preoperative ECG slide, which feature of this patient independently supports obtaining an electrocardiogram?",
 "opts": [
  "Female sex under 65 years",
  "Diuretic related electrolyte risk",
  "Normal body mass index",
  "Absence of cardiac symptoms",
  "Previous uncomplicated anesthesia"
 ],
 "ans": 1,
 "notes": "สไลด์ไฟล์ jod หน้า 19 พิมพ์ว่า <b>\"risk for electrolyte abnormalities such as diuretic use\"</b> และ <b>\"systemic disease associated with possible unrecognized heart disease such as DM or HT\"</b> (ไฮไลต์เหลือง)",
 "kimg": [
  "l12b_p19",
  "l12_p21"
 ],
 "interp": "หญิงอายุ 52 ใช้ furosemide ไม่เข้าเกณฑ์อายุของ jod (หญิง >55) จึงต้องมองข้ออื่น",
 "why": "jod หน้า 19 พิมพ์เกณฑ์ ECG เก่าว่า <b>\"Men > 45 years, Women > 55 years\"</b> รวมกับ <b>\"risk for electrolyte abnormalities such as diuretic use\"</b> และ <b>\"systemic disease ... such as DM or HT\"</b> หญิงอายุ 52 ปีไม่เข้าเกณฑ์อายุ แต่ใช้ furosemide จึงเข้าข้อ diuretic ⚠ ไฟล์ 78 ใช้ ESC 2022 ซึ่งผู้ป่วยก็เข้าเกณฑ์ (HT เป็น risk factor + cholecystectomy intermediate) คำตอบจึงตรงกันทั้งสองไฟล์",
 "wrong": [
  "เพศหญิงอายุ <55 ปีไม่ถึงเกณฑ์หญิง >55 ของ jod — จะถูกถ้าเธออายุ 60",
  "BMI ปกติไม่ใช่เกณฑ์ ECG — จะถูกถ้าเป็นโรคอ้วนร่วมกับ DM",
  "การไม่มีอาการไม่ใช่ข้อบ่งชี้ ECG เป็นข้อยกเว้นด้วยซ้ำ — จะถูกถ้ามี known cardiac disease",
  "ประวัติดมยาที่ผ่านมาไม่เกี่ยวกับเกณฑ์ ECG — จะถูกถ้าถามเรื่อง malignant hyperthermia"
 ],
 "trap": "เกณฑ์อายุของ jod เก่า (ชาย >45/หญิง >55) ไม่ตรงกับ ESC 2022",
 "summary": [
  "jod: ชาย >45, หญิง >55, known cardiac disease, clinical suspicion",
  "jod: เสี่ยง electrolyte abnormality เช่น diuretic, ระบบที่อาจมีโรคหัวใจซ่อน เช่น DM/HT, major surgery",
  "78 (ESC 2022): known heart disease, <65 ไม่มี risk factor + high-risk surgery, ≥65/risk factor + intermediate–high risk",
  "⚠ เกณฑ์อายุของ jod เก่ากว่า ESC 2022"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 19 (+ 78 หน้า 21) · ไม่มีสัญลักษณ์ · ลายมือ jod"
}),
U({
 "n": 80,
 "stem": "A healthy 35-year-old non-smoking man is scheduled for elective inguinal hernia repair under general anesthesia. He has no cough, dyspnea or chest symptoms and has a normal chest examination. What is the appropriate approach regarding a preoperative chest radiograph?",
 "opts": [
  "Order a chest radiograph for every patient having general anesthesia",
  "Order a chest radiograph and spirometry",
  "Order a chest radiograph only if he is older than 40 years",
  "Do not order a routine chest radiograph",
  "Order a chest CT scan for screening"
 ],
 "ans": 3,
 "notes": "สไลด์ไฟล์ 78 หน้า 22 พิมพ์ว่า <b>\"Not be routinely performed\"</b> และ <b>\"Patients with suspected cardiac or pulmonary disease\"</b><br>สไลด์ไฟล์ jod หน้า 20 พิมพ์ว่า <b>\"Not routinely performed\"</b>",
 "kimg": [
  "l12_p22",
  "l12b_p20"
 ],
 "interp": "สุขภาพดี ไม่มีอาการ ตรวจร่างกายปกติ",
 "why": "78 หน้า 22 พิมพ์ว่า <b>\"Not be routinely performed\"</b> และ <b>\"Patients with suspected cardiac or pulmonary disease\"</b> ส่วน jod หน้า 20 ก็พิมพ์ <b>\"Not routinely performed\"</b> ชายอายุ 35 ปีสุขภาพดีไม่สูบบุหรี่ ไม่มีอาการ ตรวจปอดปกติ จึงไม่ต้อง CXR แม้จะดมยาสลบ",
 "wrong": [
  "การทำ CXR ในทุกรายที่ดมยาสลบขัดกับคำว่า not routine — จะถูกถ้ามีอาการหรือสงสัยโรคหัวใจ/ปอด",
  "CXR + spirometry ไม่มีข้อบ่งชี้ในผู้ไม่มีอาการ — จะถูกถ้าสงสัย COPD หรือจะตัดปอด",
  "เกณฑ์อายุ >40 ปีไม่มีในสไลด์ (jod ใช้ >50 ปี + major surgery) และผ่าตัดนี้เป็น minor — จะถูกถ้าเป็นผู้สูงอายุผ่าตัดใหญ่ตาม jod",
  "CT chest เป็นการตรวจเกินจำเป็น — จะถูกถ้ามีก้อนในปอดหรือสงสัยมะเร็ง"
 ],
 "trap": "ไม่ต้อง CXR ทุกคน",
 "summary": [
  "CXR ไม่ routine ทำเมื่อสงสัยโรคหัวใจหรือปอด",
  "Risk factor ตาม 78: smoking, recent URI, advanced age",
  "jod เพิ่ม: >50 ปี + major surgery",
  "ผู้ป่วยสุขภาพดีไม่มีอาการไม่ต้อง CXR"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 22 (= jod หน้า 20) · ไม่มีสัญลักษณ์ · ลายมือ 78"
}),
U({
 "n": 81,
 "stem": "A 62-year-old man scheduled for elective colectomy reports progressive exertional dyspnea and orthopnea for 1 month. Crackles are heard at both lung bases. Which investigation is indicated before surgery on the basis of the examination alone?",
 "opts": [
  "Urinalysis",
  "Chest radiograph",
  "Serum amylase",
  "Hepatitis B surface antigen",
  "Coagulation profile"
 ],
 "ans": 1,
 "notes": "สไลด์ไฟล์ 78 หน้า 22 พิมพ์ว่า <b>\"Patients with suspected cardiac or pulmonary disease\"</b>",
 "kimg": [
  "l12_p22",
  "l12b_p20"
 ],
 "interp": "หอบเหนื่อย orthopnea crackles = สงสัยโรคหัวใจ/ปอด",
 "why": "78 หน้า 22 พิมพ์ <b>\"Patients with suspected cardiac or pulmonary disease\"</b> และ jod หน้า 20 พิมพ์ข้อเดียวกัน ผู้ป่วยมีหอบเหนื่อยเพิ่มขึ้น orthopnea 1 เดือน และ crackles ที่ฐานปอดสองข้าง ซึ่งชี้ cardiac/pulmonary disease (เช่น heart failure หรือ pulmonary edema) จึงต้องทำ CXR ก่อนผ่าตัด",
 "wrong": [
  "UA ไม่เกี่ยวกับอาการทางปอดและหัวใจ — จะถูกถ้ามีฉี่แสบขัดหรือจะทำ TURP",
  "amylase ไม่ใช่ preop test ในสไลด์ — จะถูกถ้าปวดท้องบนและสงสัย pancreatitis",
  "HBsAg ไม่ใช่ข้อบ่งชี้จากอาการเหล่านี้ — จะถูกถ้ามี risk ไวรัสตับอักเสบ",
  "coag ส่งเมื่อมีประวัติเลือดออกหรือกินยา anticoagulant — จะถูกถ้ากิน warfarin"
 ],
 "trap": "",
 "summary": [
  "CXR ส่งเมื่อสงสัย cardiac หรือ pulmonary disease",
  "อาการที่ชี้: dyspnea, orthopnea, crackles, ไอเรื้อรัง",
  "เสี่ยง: smoking, recent URI, advanced age (78)",
  "ไม่ใช้เป็น routine screening"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 22 (= jod หน้า 20) · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 82,
 "img": "l12_q82",
 "stem": "A 66-year-old man had a myocardial infarction 6 weeks ago and is hospitalized for an urgent cholecystectomy. Using the examples of ASA classes and the table shown, which ASA class and approximate perioperative mortality apply?",
 "opts": [
  "ASA III with about 1.2 percent mortality",
  "ASA II with about 0.2 percent mortality",
  "ASA V with about 34 percent mortality",
  "ASA IV with about 8 percent mortality",
  "ASA I with less than 0.03 percent mortality"
 ],
 "ans": 3,
 "notes": "สไลด์ไฟล์ 78 หน้า 24 พิมพ์ว่า <b>\"IV ... recent (< 3 months) MI, CVA, TIA, or CAD/stents\"</b><br>สไลด์ไฟล์ 78 หน้า 25 พิมพ์ว่า <b>\"4 ... constant threat to life — 8 %\"</b>",
 "kimg": [
  "l12_p24",
  "l12_p25",
  "l12b_p23"
 ],
 "interp": "MI 6 สัปดาห์ (<3 เดือน) = ตัวอย่างใน ASA IV",
 "why": "78 หน้า 24 พิมพ์ว่า ASA IV คือ <b>\"A patient with severe systemic disease that is a constant threat to life\"</b> ตัวอย่างรวม <b>\"recent (< 3 months) MI, CVA, TIA, or CAD/stents\"</b> และ 78 หน้า 25 (ตารางในรูป) ให้ mortality ของ class 4 = 8% ผู้ป่วย MI เมื่อ 6 สัปดาห์ก่อน (<3 เดือน) จึงเป็น ASA IV และ mortality ประมาณ 8%",
 "wrong": [
  "ASA III ใช้ MI เกิน 3 เดือน mortality 1.2% — จะถูกถ้า MI เมื่อ 5 เดือนก่อนและคงที่",
  "ASA II คือโรคเล็กน้อย mortality 0.2% — จะถูกถ้ามีเพียง well-controlled HTN",
  "ASA V คือ moribund mortality 34% — จะถูกถ้าไม่ผ่าตัดจะเสียชีวิต เช่น ruptured aneurysm",
  "ASA I คือสุขภาพดี mortality <0.03% — จะถูกถ้าไม่มีโรค"
 ],
 "trap": "MI >3 เดือนเป็น ASA III",
 "summary": [
  "ASA mortality: I <0.03%, II 0.2%, III 1.2%, IV 8%, V 34%",
  "MI/CVA/TIA/stent <3 เดือน = IV, >3 เดือน = III",
  "ASA VI = brain-dead organ donor ไม่มีค่า mortality",
  "ตัวเลข mortality เป็นข้อมูลเก่าใช้เปรียบเทียบเชิงแนวโน้ม"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 24–25 (= jod หน้า 22–23) · ไม่มีสัญลักษณ์ · ลายมือ jod"
}),
U({
 "n": 83,
 "stem": "A 32-year-old woman is scheduled for elective laparoscopic cholecystectomy next week. For 5 days she has had a productive cough and low-grade fever after an upper respiratory infection. Which preoperative test is supported by the lecture?",
 "opts": [
  "Chest radiograph",
  "Urinalysis",
  "Liver function tests",
  "HbA1c",
  "Serum creatinine"
 ],
 "ans": 0,
 "notes": "สไลด์ไฟล์ 78 หน้า 22 พิมพ์ว่า <b>\"Risk factor: smoking, recent URI, advanced age\"</b>",
 "kimg": [
  "l12_p22"
 ],
 "interp": "URI ล่าสุด ไอ มีเสมหะ ไข้ต่ำ",
 "why": "78 หน้า 22 พิมพ์ในหัวข้อ CXR ว่า <b>\"Risk factor: smoking, recent URI, advanced age\"</b> ผู้ป่วยมี URI ล่าสุด ไอมีเสมหะ 5 วันและไข้ต่ำ จึงเข้าข้อ recent URI ซึ่งต้องดูว่ามีโรคปอด เช่น pneumonia หรือไม่ก่อนผ่าตัด elective การตรวจที่ตรงกับสไลด์คือ CXR",
 "wrong": [
  "UA ไม่เกี่ยวกับ URI — จะถูกถ้ามีฉี่แสบขัด",
  "LFT ส่งตามประวัติตับ — จะถูกถ้ามีดีซ่านหรือดื่มสุราหนัก",
  "HbA1c ส่งในผู้เสี่ยง DM — จะถูกถ้ามีอาการ polyuria หรือ BMI สูง",
  "Cr ส่งเมื่อ >50 ปี major surgery หรือเสี่ยงไต — จะถูกถ้ากิน ACEI/NSAIDs"
 ],
 "trap": "",
 "summary": [
  "CXR ไม่ routine",
  "Risk factor ของ CXR: smoking, recent URI, advanced age",
  "สงสัย cardiac/pulmonary disease เป็นข้อบ่งชี้หลัก",
  "URI ล่าสุดควรประเมินก่อนผ่าตัด elective ว่ามี pneumonia หรือไม่"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 22 · ไม่มีสัญลักษณ์ · ลายมือ 78 (ไม่ใช้)"
}),
U({
 "n": 84,
 "stem": "During preoperative evaluation of a 68-year-old man for elective colectomy, the attending asks the student to name the complications whose risk must be evaluated for every patient according to the lecture. Which set is correct?",
 "opts": [
  "Cardiovascular, hepatic, renal and endocrine",
  "Pulmonary, neurologic, dermatologic and ocular",
  "Cardiovascular, pulmonary, bleeding and venous thromboembolism",
  "Bleeding, cardiovascular, dental and renal",
  "Hepatic, pulmonary, endocrine and thromboembolic"
 ],
 "ans": 2,
 "notes": "สไลด์ไฟล์ 78 หน้า 23 พิมพ์ว่า <b>\"Risk of cardiovascular complication · pulmonary complication · VTE\"</b><br>jod หน้า 21 พิมพ์เพิ่ม <b>\"Risk of bleeding\"</b> และลายมือเขียน <b>\"└ ดู risk ทุก organ !\"</b>",
 "kimg": [
  "l12_p23",
  "l12b_p21"
 ],
 "interp": "ถามภาพรวม risk evaluation ของผู้ป่วยก่อนผ่าตัด",
 "why": "78 หน้า 23 พิมพ์ risk evaluation 3 ด้านคือ <b>\"Risk of cardiovascular complication · pulmonary complication · VTE\"</b> ส่วน jod หน้า 21 เพิ่ม <b>\"Risk of bleeding\"</b> และลายมือ <b>\"└ ดู risk ทุก organ !\"</b> ⚠ ต่างกันเล็กน้อย เมื่อรวมทั้งสองไฟล์จึงเป็น CV, pulmonary, bleeding และ VTE ซึ่งเป็นหัวข้อที่ตามมาในบทเรียน",
 "wrong": [
  "ชุด hepatic/renal/endocrine เป็นระบบที่ประเมินด้วย lab ตามข้อบ่งชี้ ไม่ใช่หัวข้อ risk evaluation หลัก — จะถูกถ้าถามเรื่อง selective lab",
  "neurologic/dermatologic/ocular ไม่อยู่ในหัวข้อ risk evaluation — จะถูกถ้าเป็นการตรวจร่างกายตามระบบ",
  "dental และ renal ไม่ใช่หัวข้อหลักของ risk evaluation — จะถูกถ้าถามเรื่องการตรวจร่างกายหรือ lab เฉพาะราย",
  "hepatic และ endocrine ไม่ใช่หัวข้อหลัก — จะถูกถ้าผู้ป่วยมีโรคตับหรือ DM ที่ต้องประเมินเพิ่ม"
 ],
 "trap": "",
 "summary": [
  "Risk evaluation: CV, pulmonary, bleeding, VTE",
  "78 มี 3 หัวข้อ (CV, pulmonary, VTE) jod เพิ่ม bleeding",
  "ลายมือ jod: ดู risk ทุก organ",
  "แต่ละหัวข้อตามด้วยเครื่องมือประเมิน เช่น RCRI, pulmonary risk, bleeding risk, Caprini"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 23 (= jod หน้า 21) · ไม่มีสัญลักษณ์ · ลายมือ jod"
}),
U({
 "n": 85,
 "stem": "A resident compares two patients: a healthy 30-year-old undergoing liver resection and a healthy 30-year-old undergoing breast lumpectomy. She states that the ESC surgical risk estimate for the two operations differs but the ASA class does not. What does the ESC surgical risk estimate take into account?",
 "opts": [
  "Only the patient's comorbidities",
  "Both the operation and the comorbidities",
  "Only the anesthetic technique",
  "Only the surgeon's experience",
  "Only the specific surgical intervention"
 ],
 "ans": 4,
 "notes": "สไลด์ไฟล์ 78 หน้า 12 พิมพ์ว่า <b>\"Surgical risk estimate is a broad approximation of 30 day risk of CV death, MI, and stroke that takes into account only the specific surgical intervention, without considering the patient's comorbidities.\"</b><br>78 หน้า 24 ลายมือ <b>\"ดูที่คนไข้อย่างเดียว ไม่ได้ดู type of Sx.\"</b>",
 "kimg": [
  "l12_p12",
  "l12_p24"
 ],
 "interp": "เปรียบเทียบ ESC (ตามผ่าตัด) กับ ASA (ตามคนไข้)",
 "why": "78 หน้า 12 พิมพ์ว่า <b>\"Surgical risk estimate is a broad approximation of 30 day risk of CV death, MI, and stroke that takes into account only the specific surgical intervention, without considering the patient's comorbidities\"</b> ส่วนลายมือ 78 หน้า 24 บอกว่า ASA <b>\"ดูที่คนไข้อย่างเดียว ไม่ได้ดู type of Sx.\"</b> ESC Table 5 จึงดูเฉพาะชนิดผ่าตัด ขณะที่ ASA ดูเฉพาะผู้ป่วย",
 "wrong": [
  "comorbidities เป็นสิ่งที่ ASA ประเมิน ไม่ใช่ ESC Table 5 — จะถูกถ้าถามว่า ASA ดูอะไร",
  "ESC Table 5 ไม่รวม comorbidities ตามคำอธิบายท้ายตาราง — จะถูกถ้าเป็น RCRI หรือ NSQIP ที่รวมปัจจัยผู้ป่วย",
  "เทคนิคการให้ยาสลบไม่ใช่ปัจจัยในนิยาม — จะถูกถ้าเป็นการประเมินความเสี่ยงของ anesthesia",
  "ประสบการณ์ศัลยแพทย์ไม่ใช่ปัจจัยในนิยาม — จะถูกถ้าเป็น quality indicator ของสถาบัน"
 ],
 "trap": "สลับ ESC กับ ASA",
 "summary": [
  "ESC Table 5: จัดตามชนิดผ่าตัดอย่างเดียว ไม่ดู comorbidities",
  "ASA: จัดตามสภาพผู้ป่วยอย่างเดียว ไม่ดูชนิดผ่าตัด",
  "ค่าที่ประมาณ: 30-day CV death, MI, stroke",
  "ผู้ป่วยสุขภาพดีสองคน ผ่าตัดต่างกัน ASA เท่ากันแต่ ESC risk ต่างกัน"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 12 + 24 · ไม่มีสัญลักษณ์ · ลายมือ 78"
}),
U({
 "n": 86,
 "stem": "A 45-year-old woman is scheduled for elective lumpectomy for a small breast cancer. According to the European surgical risk table in the lecture, how is the cardiovascular risk of this operation categorized?",
 "opts": [
  "Intermediate risk, 1 to 5 percent",
  "High risk, above 5 percent",
  "Low risk, below 1 percent",
  "Intermediate risk, 5 to 10 percent",
  "High risk, above 10 percent"
 ],
 "ans": 2,
 "notes": "สไลด์ไฟล์ 78 หน้า 12 พิมพ์ว่า <b>\"Low surgical risk (<1%)\"</b> มี <b>\"Breast\"</b> (ไฮไลต์ม่วง)",
 "kimg": [
  "l12_p12"
 ],
 "interp": "breast surgery ในตาราง ESC 2022 Table 5",
 "why": "78 หน้า 12 Table 5 พิมพ์ <b>\"Low surgical risk (<1%)\"</b> และมี <b>\"Breast\"</b> (ไฮไลต์ม่วง) ร่วมกับ dental, thyroid, eye, minor gynaecological ผู้ป่วย lumpectomy ผ่าตัดเต้านมเล็กจึงเป็น low risk <1% ตารางอ้างอิงจากชนิดผ่าตัดอย่างเดียว",
 "wrong": [
  "intermediate 1–5% เป็นกลุ่ม lap chole, splenectomy, hiatal hernia — จะถูกถ้าเป็นผ่าตัดช่องท้องเหล่านี้",
  "high >5% เป็นกลุ่ม oesophagectomy, Whipple, liver resection — จะถูกถ้าเป็นผ่าตัดใหญ่เหล่านี้",
  "ช่วง 5–10% ไม่มีในตาราง ESC 2022 — จะถูกถ้าตารางแบ่งละเอียดกว่านี้",
  "ช่วง >10% ไม่มีในตาราง — จะถูกถ้าตารางมีหลายระดับกว่านี้"
 ],
 "trap": "",
 "summary": [
  "Low <1%: breast, dental, thyroid, eye, minor gynae, minor ortho, reconstructive, superficial, TURP, minor VATS",
  "Intermediate 1–5%: lap chole, splenectomy, hiatal hernia, head/neck, EVAR",
  "High >5%: adrenal, Whipple, liver resection, oesophagectomy, perforated bowel",
  "ไม่ต้องทำ ECG routine ใน low risk"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 12 · ไม่มีสัญลักษณ์ · ลายมือ 78 (ไม่ใช้)"
}),
U({
 "n": 87,
 "stem": "A 55-year-old man has a neck dissection planned for metastatic squamous cell carcinoma. Using the European surgical risk table, which category applies to head and neck surgery?",
 "opts": [
  "Low risk, below 1 percent",
  "High risk, above 5 percent",
  "Low risk, below 0.5 percent",
  "High risk, above 10 percent",
  "Intermediate risk, 1 to 5 percent"
 ],
 "ans": 4,
 "notes": "สไลด์ไฟล์ 78 หน้า 12 พิมพ์ว่า <b>\"Intermediate surgical risk (1–5%)\"</b> มี <b>\"Head or neck surgery\"</b>",
 "kimg": [
  "l12_p12"
 ],
 "interp": "head or neck surgery ใน ESC Table 5",
 "why": "78 หน้า 12 Table 5 พิมพ์ <b>\"Intermediate surgical risk (1–5%)\"</b> และมี <b>\"Head or neck surgery\"</b> ซึ่งต่างจาก <b>\"Endocrine: thyroid\"</b> ที่เป็น low ผู้ป่วย neck dissection จึงเป็น intermediate risk",
 "wrong": [
  "low (<1%) เป็น thyroid, breast, dental, eye — จะถูกถ้าเป็นผ่าตัดเหล่านั้น",
  "high (>5%) เป็น oesophagectomy, Whipple — จะถูกถ้าเป็นผ่าตัดเหล่านั้น",
  "ช่วง <0.5% ไม่มีในตาราง — จะถูกถ้าตารางแบ่งละเอียดกว่านี้",
  "ช่วง >10% ไม่มีในตาราง — จะถูกถ้าตารางมีหลายระดับกว่านี้"
 ],
 "trap": "Thyroid (low) ต่างจาก head & neck (intermediate)",
 "summary": [
  "Head or neck surgery = intermediate risk",
  "Thyroid = low risk",
  "Intermediate: carotid asymptomatic/symptomatic CEA, EVAR, lap chole, intrathoracic non-major, hip/spine, renal transplant",
  "ต้องดูชนิดผ่าตัดทีละรายการ"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 12 · ไม่มีสัญลักษณ์ · ลายมือ 78 (ไม่ใช้)"
}),
U({
 "n": 88,
 "stem": "A 70-year-old woman presents with peritonitis from a perforated sigmoid diverticulitis and needs emergency operation to repair or resect the perforated bowel. How is the cardiovascular surgical risk of this operation categorized in the lecture table?",
 "opts": [
  "Low risk, below 1 percent",
  "High risk, above 5 percent",
  "Intermediate risk, 1 to 5 percent",
  "Intermediate risk, 3 to 10 percent",
  "Low risk, below 3 percent"
 ],
 "ans": 1,
 "notes": "สไลด์ไฟล์ 78 หน้า 12 พิมพ์ว่า <b>\"High surgical risk (>5%)\"</b> มี <b>\"Repair of perforated bowel\"</b>",
 "kimg": [
  "l12_p12"
 ],
 "interp": "perforated bowel repair ใน ESC Table 5",
 "why": "78 หน้า 12 Table 5 พิมพ์ <b>\"High surgical risk (>5%)\"</b> และมี <b>\"Repair of perforated bowel\"</b> ผู้ป่วย perforated diverticulitis ที่ผ่าตัดซ่อม/ตัดลำไส้ฉุกเฉินจึงเป็น high risk (>5%) โดยตารางไม่ได้พิจารณา comorbidities",
 "wrong": [
  "low (<1%) เป็น superficial, breast, thyroid — จะถูกถ้าผ่าตัดเล็ก",
  "intermediate 1–5% เป็น lap chole, hiatal hernia — จะถูกถ้าผ่าตัดช่องท้องไม่ฉุกเฉิน",
  "ช่วง 3–10% ไม่มีในตาราง — จะถูกถ้าตารางแบ่งละเอียดกว่านี้",
  "ช่วง <3% ไม่มีในตาราง — จะถูกถ้าตารางมีหลายระดับกว่านี้"
 ],
 "trap": "",
 "summary": [
  "High >5%: adrenal, aortic/major vascular, Whipple, liver resection/bile duct, oesophagectomy, open limb revascularization/amputation, pneumonectomy, lung/liver transplant, perforated bowel, total cystectomy",
  "ผ่าตัดฉุกเฉินช่องท้องที่ลำไส้ทะลุมี risk สูง",
  "ASA ต้องประเมินแยกจากชนิดผ่าตัด"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 12 · ไม่มีสัญลักษณ์ · ลายมือ 78 (ไม่ใช้)"
}),
U({
 "n": 89,
 "stem": "A 40-year-old woman has a functioning adrenal tumor and is planned for adrenalectomy. A student remembers that thyroid surgery is a low-risk operation and assumes endocrine surgery is generally low risk. Using the table, how is adrenal resection categorized?",
 "opts": [
  "Low risk, below 1 percent",
  "Intermediate risk, 1 to 5 percent",
  "Low risk, below 3 percent",
  "High risk, above 5 percent",
  "Intermediate risk, 3 to 10 percent"
 ],
 "ans": 3,
 "notes": "สไลด์ไฟล์ 78 หน้า 12 พิมพ์ว่า <b>\"Endocrine: thyroid\"</b> อยู่ใน low และ <b>\"Adrenal resection\"</b> อยู่ใน high surgical risk (>5%)",
 "kimg": [
  "l12_p12"
 ],
 "interp": "adrenalectomy ต่างจาก thyroid",
 "why": "78 หน้า 12 Table 5 พิมพ์ <b>\"Endocrine: thyroid\"</b> ใน low risk แต่ <b>\"Adrenal resection\"</b> อยู่ใน <b>\"High surgical risk (>5%)\"</b> ผู้ป่วย adrenalectomy จึงเป็น high risk แม้ไทรอยด์จะเป็น low การสรุปว่า endocrine surgery ทั้งหมดเป็น low จึงผิด",
 "wrong": [
  "low (<1%) ใช้กับ thyroid เท่านั้นในกลุ่ม endocrine — จะถูกถ้าเป็น thyroidectomy",
  "intermediate ไม่มี adrenal ในรายการ — จะถูกถ้าเป็น carotid, EVAR, head/neck",
  "ช่วง <3% ไม่มีในตาราง — จะถูกถ้าตารางมีหลายระดับกว่านี้",
  "ช่วง 3–10% ไม่มีในตาราง — จะถูกถ้าตารางแบ่งละเอียดกว่านี้"
 ],
 "trap": "อย่าสรุปทั้งกลุ่ม endocrine เป็น low",
 "summary": [
  "Endocrine: thyroid = low risk",
  "Adrenal resection = high risk (>5%)",
  "ต้องดูชนิดผ่าตัดทีละรายการ ไม่ใช่ทั้งกลุ่มอวัยวะ",
  "ตารางไม่รวม comorbidities ของผู้ป่วย"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 12 · ไม่มีสัญลักษณ์ · ลายมือ 78 (ไม่ใช้)"
}),
U({
 "n": 90,
 "stem": "A 72-year-old diabetic man has acute limb ischaemia with a cold, pulseless leg and is booked for an emergency below-knee amputation. Which surgical-risk category does the table assign to open lower limb revascularization for acute ischaemia or amputation?",
 "opts": [
  "High risk, above 5 percent",
  "Low risk, below 1 percent",
  "Intermediate risk, 1 to 5 percent",
  "Low risk, below 3 percent",
  "Intermediate risk, 3 to 10 percent"
 ],
 "ans": 0,
 "notes": "สไลด์ไฟล์ 78 หน้า 12 พิมพ์ว่า <b>\"Open lower limb revascularization for acute limb ischaemia or amputation\"</b> ใน High surgical risk (>5%)<br>ลายมือ 78 ขีด 'vascular' ในคอลัมน์ high",
 "kimg": [
  "l12_p12"
 ],
 "interp": "ชนิดผ่าตัด: acute limb ischaemia → amputation",
 "why": "78 หน้า 12 Table 5 พิมพ์ใน High surgical risk (>5%) ว่า <b>\"Open lower limb revascularization for acute limb ischaemia or amputation\"</b> และลายมือ 78 ขีดไฮไลต์ vascular ที่ high ผู้ป่วยรายนี้ผ่าตัด amputation ฉุกเฉินจึงเป็น high risk ส่วน peripheral arterial angioplasty อยู่ intermediate",
 "wrong": [
  "low (<1%) เป็นผ่าตัดเล็กอย่าง breast, dental, superficial — จะถูกถ้าเป็นผ่าตัดเหล่านั้น",
  "intermediate เป็น peripheral arterial angioplasty และ EVAR — จะถูกถ้าทำ endovascular แทน open",
  "ช่วง <3% ไม่มีในตาราง — จะถูกถ้าตารางมีหลายระดับกว่านี้",
  "ช่วง 3–10% ไม่มีในตาราง — จะถูกถ้าตารางแบ่งละเอียดกว่านี้"
 ],
 "trap": "Angioplasty (intermediate) ≠ open revascularization (high)",
 "summary": [
  "High >5%: aortic/major vascular, open limb revascularization/amputation, carotid symptomatic CAS",
  "Intermediate: peripheral arterial angioplasty, EVAR, carotid CEA",
  "Vascular surgery มักเป็น high risk",
  "ESC Table 5 ไม่รวม comorbidities"
 ],
 "tags": [
  "Pre-op & post-op",
  "Vascular"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 12 · ไม่มีสัญลักษณ์ · ลายมือ 78"
}),
U({
 "n": 91,
 "stem": "A 56-year-old man with hypertension is scheduled for an elective operation. The surgeon proposes using a calculator that combines the patient's risk factors with the exact planned procedure to give a percentage risk of complications and death for him individually. Which tool is described?",
 "opts": [
  "ASA physical status classification",
  "Mallampati classification",
  "Child-Pugh score",
  "ACS NSQIP surgical risk calculator",
  "Caprini score"
 ],
 "ans": 3,
 "notes": "สไลด์ไฟล์ 78 หน้า 28 พิมพ์ว่า <b>\"The American College of Surgeons NSQIP risk calculator\"</b><br>ลายมือ 78 หน้า 24 เขียนว่า <b>\"ดูที่คนไข้อย่างเดียว ไม่ได้ดู type of Sx.\"</b> (ASA)",
 "kimg": [
  "l12_p28",
  "l12_p24"
 ],
 "interp": "ถามเครื่องมือที่ใช้ปัจจัยผู้ป่วยร่วมกับชนิดผ่าตัด",
 "why": "78 หน้า 28 ภาพหน้าจอ <b>\"The American College of Surgeons NSQIP risk calculator\"</b> กรอกปัจจัยผู้ป่วย (age, ASA, DM, HTN, CHF, dyspnea ฯลฯ) ร่วมกับหัตถการ (CPT code) เพื่อให้ % risk รายบุคคล ส่วนลายมือ 78 หน้า 24 บอกว่า ASA <b>\"ดูที่คนไข้อย่างเดียว ไม่ได้ดู type of Sx.\"</b> เครื่องมือที่ใช้ทั้งผู้ป่วยและชนิดผ่าตัดจึงเป็น NSQIP",
 "wrong": [
  "ASA ดูผู้ป่วยอย่างเดียวไม่ใช้ชนิดผ่าตัด และไม่ให้ % risk — จะถูกถ้าถามระบบจัดกลุ่มสภาพผู้ป่วย",
  "Mallampati ประเมิน airway — จะถูกถ้าถามก่อนใส่ท่อช่วยหายใจ",
  "Child-Pugh ประเมินตับ — จะถูกถ้าผู้ป่วยตับแข็ง",
  "Caprini ประเมิน VTE — จะถูกถ้าถามเรื่อง DVT prophylaxis"
 ],
 "trap": "",
 "summary": [
  "ACS NSQIP: web calculator ให้ % risk complication/mortality รายบุคคล",
  "ใช้ตัวแปรผู้ป่วยและรหัสหัตถการ (CPT)",
  "ASA ไม่ดูชนิดผ่าตัด",
  "ESC Table 5 ดูเฉพาะชนิดผ่าตัด"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 28 + 24 · ไม่มีสัญลักษณ์ · ลายมือ 78",
 "outside": "นอกสไลด์: การใช้รหัส CPT ของหัตถการใน NSQIP (สไลด์เป็นภาพหน้าจอตัวแปรผู้ป่วย)"
}),
U({
 "n": 92,
 "stem": "A 40-year-old man smokes 10 cigarettes daily, has a BMI of 32 kg/m2, and takes amlodipine with well-controlled blood pressure. He is scheduled for elective inguinal hernia repair. What is his ASA physical status?",
 "opts": [
  "ASA II",
  "ASA I",
  "ASA III",
  "ASA IV",
  "ASA V"
 ],
 "ans": 0,
 "notes": "สไลด์ไฟล์ 78 หน้า 24 พิมพ์ว่า <b>\"II: mild systemic disease ... current smoker, social alcohol drinker, pregnancy, obesity (30 < BMI < 40), well-controlled DM/HTN\"</b>",
 "kimg": [
  "l12_p24",
  "l12b_p22"
 ],
 "interp": "สูบบุหรี่ BMI 32 HTN คุมดี = ตัวอย่าง ASA II",
 "why": "78 หน้า 24 พิมพ์ ASA II ว่า <b>\"Mild diseases only without substantive functional limitations ... current smoker, social alcohol drinker, pregnancy, obesity (30 < BMI < 40), well-controlled DM/HTN\"</b> ผู้ป่วยสูบบุหรี่ BMI 32 และ HT ที่คุมดี ตรงตัวอย่าง ASA II ทุกข้อ",
 "wrong": [
  "ASA I ต้องไม่สูบบุหรี่และไม่มีโรค — จะถูกถ้าสุขภาพดีสมบูรณ์",
  "ASA III ต้องมี functional limitation เช่น poorly controlled DM/HTN — จะถูกถ้า HT คุมไม่ได้",
  "ASA IV คือ constant threat to life — จะถูกถ้า MI <3 เดือน หรือ sepsis",
  "ASA V คือ moribund — จะถูกถ้าไม่ผ่าตัดจะเสียชีวิต"
 ],
 "trap": "HTN คุมดีเป็น II ถ้าคุมไม่ดีเป็น III",
 "summary": [
  "ASA II: smoker, social alcohol, pregnancy, BMI 30–40, well-controlled DM/HTN, mild lung disease",
  "คุมไม่ดี (poorly controlled) → ASA III",
  "BMI ≥40 → ASA III",
  "ASA ไม่ดูชนิดผ่าตัด"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 24 (= jod หน้า 22) · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 93,
 "stem": "A 50-year-old man with alcohol dependence and a BMI of 43 kg/m2 is scheduled for elective laparoscopic cholecystectomy. He is otherwise independent. What is his ASA physical status?",
 "opts": [
  "ASA I",
  "ASA II",
  "ASA III",
  "ASA IV",
  "ASA V"
 ],
 "ans": 2,
 "notes": "สไลด์ไฟล์ 78 หน้า 24 พิมพ์ว่า <b>\"III: ... morbid obesity (BMI ≥ 40), active hepatitis, alcohol dependence or abuse\"</b>",
 "kimg": [
  "l12_p24"
 ],
 "interp": "alcohol dependence + BMI ≥40",
 "why": "78 หน้า 24 พิมพ์ ASA III ว่า <b>\"Substantive functional limitations; one or more moderate to severe diseases ... morbid obesity (BMI ≥ 40), active hepatitis, alcohol dependence or abuse\"</b> ผู้ป่วยมี BMI 43 และ alcohol dependence เข้าตัวอย่าง ASA III ทั้งสองข้อ แม้ยังทำกิจวัตรเองได้",
 "wrong": [
  "ASA I ต้องไม่มีโรคและไม่ดื่ม — จะถูกถ้าสุขภาพดีสมบูรณ์",
  "ASA II ใช้ BMI 30–40 และดื่มสังคม — จะถูกถ้า BMI 35 และไม่ติดสุรา",
  "ASA IV คือ constant threat to life — จะถูกถ้ามี decompensated cirrhosis ที่คุกคามชีวิต",
  "ASA V คือ moribund — จะถูกถ้าไม่ผ่าตัดจะเสียชีวิต"
 ],
 "trap": "BMI 30–40 = II ส่วน ≥40 = III",
 "summary": [
  "ASA III: poorly controlled DM/HTN, COPD, BMI ≥40, active hepatitis, alcohol dependence, pacemaker, moderate reduced EF, ESRD on regular dialysis",
  "BMI 30–40 = ASA II",
  "MI/CVA/stent >3 เดือน = ASA III",
  "ASA IV: <3 เดือน และ sepsis/DIC/ARDS"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 24 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 94,
 "stem": "A 64-year-old woman with sepsis from an infected pancreatic necrosis has DIC and ARDS and is brought to theater for debridement. She is not expected to die within hours without surgery. What is her ASA physical status?",
 "opts": [
  "ASA II",
  "ASA III",
  "ASA V",
  "ASA VI",
  "ASA IV"
 ],
 "ans": 4,
 "notes": "สไลด์ไฟล์ 78 หน้า 24 พิมพ์ว่า <b>\"IV: ... sepsis, DIC, ARDS ...\"</b>",
 "kimg": [
  "l12_p24",
  "l12b_p22"
 ],
 "interp": "sepsis + DIC + ARDS แต่ไม่ถึงขั้น moribund",
 "why": "78 หน้า 24 พิมพ์ ASA IV ว่า <b>\"Severe systemic disease that is a constant threat to life ... sepsis, DIC, ARDS\"</b> ผู้ป่วยมี sepsis จาก infected necrosis ร่วมกับ DIC และ ARDS แต่ยังไม่ถึงขั้น moribund (ไม่คาดว่าจะเสียชีวิตภายในไม่กี่ชั่วโมงถ้าไม่ผ่า) จึงเป็น ASA IV ไม่ใช่ V",
 "wrong": [
  "ASA II คือโรคเล็กน้อยไม่มี functional limitation — จะถูกถ้ามีเพียง HT ที่คุมดี",
  "ASA III คือโรครุนแรงแต่ไม่คุกคามชีวิตทันที — จะถูกถ้าเป็น COPD หรือ DM คุมไม่ดี",
  "ASA V คือ moribund ไม่รอดถ้าไม่ผ่า — จะถูกถ้ามี ruptured aneurysm หรือ multiple organ failure ร่วมกับ bowel ischemia",
  "ASA VI คือ brain-dead donor — จะถูกถ้าเป็นผู้บริจาคอวัยวะ"
 ],
 "trap": "แยกจาก V ที่ไม่คาดว่าจะรอดถ้าไม่ผ่าตัด",
 "summary": [
  "ASA IV: MI/CVA/TIA/stent <3 เดือน, ongoing ischemia, severe valve disease, severe low EF, sepsis, DIC, ARDS, ESRD ไม่ฟอกประจำ",
  "ASA V: ruptured aneurysm, massive trauma, intracranial bleed with mass effect, ischemic bowel + organ dysfunction",
  "ASA VI: brain-dead donor",
  "ใช้ mortality ประมาณ IV 8%, V 34%"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 24 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 95,
 "stem": "A 68-year-old man had a myocardial infarction 5 months ago with a drug-eluting stent and is now stable with moderate exercise capacity. He is scheduled for elective inguinal hernia repair. What is his ASA physical status?",
 "opts": [
  "ASA I",
  "ASA III",
  "ASA II",
  "ASA IV",
  "ASA V"
 ],
 "ans": 1,
 "notes": "สไลด์ไฟล์ 78 หน้า 24 พิมพ์ว่า <b>\"III: ... history (> 3 months) of MI, CVA, TIA, or CAD/stents\"</b> และ IV <b>\"recent (< 3 months)\"</b>",
 "kimg": [
  "l12_p24",
  "l12b_p22"
 ],
 "interp": "MI เมื่อ 5 เดือนก่อน (>3 เดือน)",
 "why": "78 หน้า 24 พิมพ์ ASA III ว่า <b>\"history (> 3 months) of MI, CVA, TIA, or CAD/stents\"</b> ส่วน ASA IV ใช้ <b>\"recent (< 3 months)\"</b> ผู้ป่วย MI เมื่อ 5 เดือนก่อนและคงที่จึงเป็น ASA III เส้นแบ่งอยู่ที่ 3 เดือน",
 "wrong": [
  "ASA I ต้องไม่มีโรคเลย — จะถูกถ้าไม่เคยมี MI",
  "ASA II ไม่มี MI หรือ stent เป็นตัวอย่าง — จะถูกถ้าเป็นโรคเล็กน้อย เช่น HTN คุมดี",
  "ASA IV ใช้ MI <3 เดือน — จะถูกถ้า MI เมื่อ 6 สัปดาห์ก่อน",
  "ASA V คือ moribund — จะถูกถ้าไม่ผ่าตัดจะเสียชีวิต"
 ],
 "trap": "ตัดสินที่ช่วงเวลา 3 เดือน",
 "summary": [
  "MI/CVA/TIA/CAD stents >3 เดือน = ASA III",
  "<3 เดือน = ASA IV",
  "ESRD ฟอกประจำ = III ไม่ฟอกประจำ = IV",
  "ASA ไม่ดูชนิดผ่าตัด"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 24 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 96,
 "stem": "A previously healthy 20-year-old man with a normal examination presents with acute appendicitis and is taken to theater for emergency laparoscopic appendectomy within hours. Which ASA classification should be recorded?",
 "opts": [
  "ASA I",
  "ASA IIE",
  "ASA IIIE",
  "ASA VE",
  "ASA IE"
 ],
 "ans": 4,
 "notes": "สไลด์ไฟล์ 78 หน้า 24 พิมพ์ว่า <b>\"The addition of 'E' denoted emergency surgery: ... delay in treatment ... would lead to a significant increase in the threat to life or body part.\"</b>",
 "kimg": [
  "l12_p24",
  "l12b_p22"
 ],
 "interp": "healthy + emergency",
 "why": "78 หน้า 24 พิมพ์ท้ายตารางว่า <b>\"The addition of 'E' denoted emergency surgery: an emergency is defined as existing when delay in treatment ... would lead to a significant increase in the threat to life or body part\"</b> ชายอายุ 20 ปีสุขภาพดีเป็น ASA I และผ่าตัดไส้ติ่งอักเสบฉุกเฉินจึงเป็น ASA IE ASA ไม่ดูชนิดผ่าตัดแต่ E ดูความเร่งด่วน",
 "wrong": [
  "ASA I โดยไม่มี E ไม่ครบเพราะเป็นผ่าตัดฉุกเฉิน — จะถูกถ้าเป็น elective",
  "ASA IIE ต้องมีโรคเล็กน้อย เช่น smoker หรือ BMI 30–40 — จะถูกถ้าเขาสูบบุหรี่",
  "ASA IIIE ต้องมีโรครุนแรง เช่น poorly controlled DM — จะถูกถ้ามี DM คุมไม่ดี",
  "ASA VE คือ moribund — จะถูกถ้าช็อกรุนแรงและไม่รอดโดยไม่ผ่า"
 ],
 "trap": "ASA ไม่ดู type of surgery แต่ E ดูความเร่งด่วน",
 "summary": [
  "E = emergency surgery ต่อท้ายเลข ASA เช่น ASA IE",
  "เกณฑ์ E: delay in treatment เพิ่ม threat to life or body part อย่างมีนัยสำคัญ",
  "ASA I = normal healthy",
  "ASA ดูผู้ป่วย E ดูความเร่งด่วน"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 24 · ไม่มีสัญลักษณ์ · ลายมือ 78 (ไม่ใช้)"
}),
U({
 "n": 97,
 "stem": "A 74-year-old man with a ruptured abdominal aortic aneurysm is hypotensive and unconscious and is rushed to theater. He is not expected to survive without the operation. Which classification is recorded?",
 "opts": [
  "ASA IV",
  "ASA VE",
  "ASA VI",
  "ASA IVE",
  "ASA V"
 ],
 "ans": 1,
 "notes": "สไลด์ไฟล์ 78 หน้า 24 พิมพ์ว่า <b>\"V: A moribund patient who is not expected to survive without the operation ... ruptured abdominal/thoracic aneurysm\"</b> และ <b>\"E\"</b> = emergency",
 "kimg": [
  "l12_p24",
  "l12b_p22"
 ],
 "interp": "ruptured AAA + moribund + emergency",
 "why": "78 หน้า 24 พิมพ์ ASA V ว่า <b>\"A moribund patient who is not expected to survive without the operation\"</b> ตัวอย่าง <b>\"ruptured abdominal/thoracic aneurysm\"</b> และต่อท้าย E สำหรับผ่าตัดฉุกเฉิน ผู้ป่วย ruptured AAA ที่ความดันตกและไม่รู้สึกตัวจึงเป็น ASA VE",
 "wrong": [
  "ASA IV ไม่ใช่ moribund และไม่มี E — จะถูกถ้าเป็น MI/sepsis ที่ยังมี reserve",
  "ASA VI คือ brain-dead organ donor — จะถูกถ้าเป็นผู้บริจาคอวัยวะ",
  "ASA IVE ยังไม่ถึงขั้น moribund — จะถูกถ้าผู้ป่วยเสถียรกว่าและพอรอได้",
  "ASA V ขาด E ทั้งที่ผ่าตัดฉุกเฉิน — จะถูกถ้าเป็นการผ่าตัดตามแผน"
 ],
 "trap": "",
 "summary": [
  "ASA V ตัวอย่าง: ruptured abdominal/thoracic aneurysm, massive trauma, intracranial bleed with mass effect, ischemic bowel + multi-organ dysfunction",
  "E ต่อท้ายเมื่อผ่าตัดฉุกเฉิน",
  "ASA VI = brain-dead donor",
  "Mortality ASA V ประมาณ 34%"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 24 · ไม่มีสัญลักษณ์ · ลายมือ 78 (ไม่ใช้)"
}),
U({
 "n": 98,
 "img": "l12_q98",
 "stem": "A 65-year-old woman with diabetes and hypertension is being assessed for elective hemicolectomy. Using the risk calculator form shown, which patient variable is entered by the surgeon?",
 "opts": [
  "Mallampati class",
  "Serum troponin level",
  "Child-Pugh score",
  "Dyspnea",
  "Caprini score"
 ],
 "ans": 3,
 "notes": "สไลด์ไฟล์ 78 หน้า 28 พิมพ์ว่า <b>\"The American College of Surgeons NSQIP risk calculator\"</b> พร้อมตัวแปร Age group, Sex, Functional status, Emergency case, ASA class, ... Dyspnea ...",
 "kimg": [
  "l12_p28"
 ],
 "interp": "ภาพฟอร์ม NSQIP calculator",
 "why": "รูปจาก 78 หน้า 28 แสดงฟอร์ม <b>\"The American College of Surgeons NSQIP risk calculator\"</b> ตัวแปรในภาพมี Age group, Sex, Functional status, Emergency case, ASA class, steroid, ascites, sepsis, ventilator, disseminated cancer, DM, HTN, CHF, <b>Dyspnea</b>, smoker, severe COPD, dialysis, acute renal failure และ BMI จึงไม่มี Mallampati, troponin, Child-Pugh หรือ Caprini",
 "wrong": [
  "Mallampati ใช้ประเมิน airway ไม่มีในฟอร์ม — จะถูกถ้าถามเครื่องมือก่อนดมยาสลบ",
  "troponin เป็น biomarker ของ MI ไม่มีในฟอร์ม — จะถูกถ้าเป็น ESC 2022 algorithm",
  "Child-Pugh ประเมินตับ ไม่มีในฟอร์ม (มีเพียง ascites) — จะถูกถ้าผู้ป่วยตับแข็ง",
  "Caprini ประเมิน VTE ไม่มีในฟอร์ม — จะถูกถ้าถามความเสี่ยง DVT"
 ],
 "trap": "",
 "summary": [
  "NSQIP ตัวแปร: age group, sex, functional status, emergency, ASA, steroid, ascites, sepsis, ventilator, cancer, DM, HTN, CHF, dyspnea, smoker, severe COPD, dialysis, ARF, BMI",
  "ใช้ร่วมกับ CPT ของหัตถการ",
  "ASA class เป็นตัวแปรหนึ่งของ NSQIP",
  "ให้ % risk รายบุคคล"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 28 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({
 "n": 99,
 "stem": "Two patients are scheduled on the same day. Patient A is a healthy 30-year-old man for lap appendectomy. Patient B is a healthy 30-year-old man for a major liver resection. A student wants to assign a higher ASA class to patient B because the operation is bigger. How should ASA classes compare?",
 "opts": [
  "Both patients have the same ASA class",
  "Patient B has a higher ASA class",
  "Patient A has a higher ASA class",
  "Patient B is ASA III automatically",
  "Patient A is ASA E automatically"
 ],
 "ans": 0,
 "notes": "ลายมือ 78 หน้า 24 เขียนว่า <b>\"บอกว่าคนไข้มีความเสี่ยงในการเสียชีวิตคร่าวๆ : ดูที่คนไข้อย่างเดียว ไม่ได้ดู type of Sx.\"</b>",
 "kimg": [
  "l12_p24",
  "l12b_p23"
 ],
 "interp": "ASA ดูผู้ป่วยอย่างเดียว",
 "why": "ลายมือ 78 หน้า 24 เขียนว่า <b>\"บอกว่าคนไข้มีความเสี่ยงในการเสียชีวิตคร่าวๆ : ดูที่คนไข้อย่างเดียว ไม่ได้ดู type of Sx.\"</b> และ jod หน้า 23 เขียน <b>\"= ประเมิน mortality จาก u/d + CC\"</b> ผู้ป่วยสองรายสุขภาพดีทั้งคู่ จึงเป็น ASA I เท่ากัน แม้ liver resection ใหญ่กว่า (ความต่างอยู่ที่ ESC Table 5 ซึ่ง liver resection เป็น high risk)",
 "wrong": [
  "ASA ไม่ดูขนาดผ่าตัด จึงไม่ทำให้ B สูงกว่า — จะถูกถ้าถาม ESC surgical risk",
  "ผู้ป่วย A ไม่มีเหตุให้ ASA สูงกว่า B — จะถูกถ้า A มีโรครุนแรง",
  "ไม่มีกฎ ASA III อัตโนมัติจากขนาดผ่าตัด — จะถูกถ้า B มี poorly controlled DM หรือ COPD",
  "E ใช้กับผ่าตัดฉุกเฉินเท่านั้น lap appendectomy ตามนัดไม่ใช่ — จะถูกถ้าผ่าตัดฉุกเฉิน"
 ],
 "trap": "",
 "summary": [
  "ASA ประเมินผู้ป่วยอย่างเดียว ไม่ดูชนิดผ่าตัด",
  "ESC Table 5 ประเมินชนิดผ่าตัด (liver resection = high)",
  "ผู้ป่วยสุขภาพดี = ASA I",
  "ASA เป็นการประเมิน mortality ความเสี่ยงคร่าวๆ จาก underlying disease"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 24 + jod หน้า 23 · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod"
}),
U({
 "n": 100,
 "stem": "A 62-year-old man with end-stage renal disease has missed his last two dialysis sessions and has a serum potassium of 6.2 mEq/L. He needs elective inguinal hernia repair. What is his ASA physical status compared with a similar patient who attends scheduled dialysis?",
 "opts": [
  "ASA III, versus ASA II for regular dialysis",
  "ASA IV, versus ASA IV for regular dialysis",
  "ASA IV, versus ASA III for regular dialysis",
  "ASA V, versus ASA III for regular dialysis",
  "ASA III, versus ASA III for regular dialysis"
 ],
 "ans": 2,
 "notes": "สไลด์ไฟล์ 78 หน้า 24 พิมพ์ว่า <b>\"III: ... ESRD undergoing regularly scheduled dialysis\"</b> และ <b>\"IV: ... ESRD not undergoing regularly scheduled dialysis\"</b>",
 "kimg": [
  "l12_p24",
  "l12b_p22"
 ],
 "interp": "ESRD ที่ขาดการฟอกเลือด ต้องแยกจาก ESRD ที่ฟอกประจำ ตามตัวอย่างใน ASA III และ IV",
 "why": "78 หน้า 24 พิมพ์ ASA III ว่า <b>\"ESRD undergoing regularly scheduled dialysis\"</b> และ ASA IV ว่า <b>\"ESRD not undergoing regularly scheduled dialysis\"</b> ผู้ป่วยขาดฟอก 2 ครั้ง K 6.2 จึงเป็น ASA IV ส่วนผู้ป่วยที่ฟอกประจำเป็น ASA III ความต่างนี้เป็นตัวอย่างชัดของการแยก III กับ IV",
 "wrong": [
  "ASA III vs II ผิด เพราะ ESRD ที่ฟอกประจำคือ III ไม่ใช่ II — จะถูกถ้าเป็นโรคไตเรื้อรังระยะต้นที่ไม่ใช่ ESRD",
  "ASA IV vs IV ผิด เพราะผู้ที่ฟอกประจำคือ III — จะถูกถ้าทั้งคู่ขาดฟอก",
  "ASA V vs III ผิด เพราะไม่ถึง moribund — จะถูกถ้าไม่ผ่าตัดจะเสียชีวิต",
  "ASA III vs III ผิด เพราะผู้ขาดฟอกถูกจัดเป็น IV — จะถูกถ้าทั้งคู่ฟอกประจำ"
 ],
 "trap": "",
 "summary": [
  "ESRD ฟอกประจำ = ASA III",
  "ESRD ไม่ฟอกประจำ = ASA IV",
  "ASA IV อื่นๆ: MI/CVA <3 เดือน, sepsis, DIC, ARDS",
  "ผู้ป่วยขาดฟอกควรฟอกก่อนผ่าตัด elective ราว 1 วัน"
 ],
 "tags": [
  "Pre-op & post-op"
 ],
 "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 24 · ไม่มีสัญลักษณ์ · ไม่มีลายมือที่เกี่ยวข้อง"
}),
U({n:101, stem:"A 68-year-old man with stable coronary artery disease undergoes an elective open right hemicolectomy under general anesthesia. On the second postoperative day he reports chest tightness and his troponin level is elevated. According to the lecture, which mechanism best explains myocardial infarction occurring around the time of surgery?",
  opts:["Direct myocardial toxicity from the inhaled anesthetic agent","Hypokalemia produced by the preoperative bowel preparation","Surgical stress with increased sympathetic activity and a higher heart rate","Air embolism through the central venous catheter","Hypoxemia from residual neuromuscular blockade"], ans:2,
  notes:"สไลด์ไฟล์ 78 หน้า 26 พิมพ์ว่า <b>\"Perioperative myocardial infarction\"</b> (หัวข้อ Risk evaluation : Cardiovascular)<br>ลายมือไฟล์ jod หน้า 6 เขียนว่า <b>\"Sx = stress → symp ↑ → HR ↑, post-op MI\"</b>",
  kimg:["l12_p26","l12b_p24"],
  interp:"ผู้ป่วยเสี่ยงโรคหลอดเลือดหัวใจ มี MI หลังผ่าตัด โจทย์ถามกลไกตามที่ lecture สอน",
  why:"ลายมือ jod เขียนว่า \"Sx = stress → symp ↑ → HR ↑, post-op MI\" และสไลด์ 78 หน้า 26 ระบุหัวข้อ Perioperative myocardial infarction ไว้ภายใต้ cardiovascular risk การผ่าตัดใหญ่ทำให้ sympathetic activity เพิ่ม หัวใจเต้นเร็วขึ้นและ oxygen demand สูงกว่า supply ในผู้ป่วย CAD เสถียรจึงเกิด MI ได้ ซึ่งพบบ่อยใน 3 วันแรกหลังผ่าตัดร่วมกับ fluid shift",
  wrong:["ยาดมสลบไม่ได้เป็นพิษต่อกล้ามเนื้อหัวใจโดยตรงตามที่ lecture สอน จะถูกถ้าโจทย์ถามภาวะ halothane hepatitis หรือ arrhythmia จากยาดมบางชนิดในห้องผ่าตัด", "bowel prep ทำให้เสียน้ำและ K ได้แต่ไม่ใช่กลไกหลักของ MI วันที่ 2 จะถูกถ้าโจทย์ให้ ECG มี U wave หรือ ventricular ectopy หลังเตรียมลำไส้", "air embolism พบได้น้อยและให้ภาพช็อกหรือ hypoxia เฉียบพลันขณะใส่หรือถอดสาย จะถูกถ้ามีอาการทันทีหลังใส่ CVC", "residual NMB ทำให้หายใจไม่พอและ hypoxemia ใน PACU ไม่ใช่กลไกที่ lecture สอนสำหรับ periop MI จะถูกถ้าผู้ป่วยหายใจตื้นและอ่อนแรงตั้งแต่ตื่นจากยาสลบ"],
  trap:"อย่าเลือกพิษของยาดมสลบ ทั้งที่ lecture เน้น stress response",
  summary:["Periop MI เกิดจาก stress ของการผ่าตัด → sympathetic activity ↑ → HR ↑ ทำให้ O2 demand เพิ่ม", "ช่วงเสี่ยงคือ 3 วันแรกหลังผ่าตัด ร่วมกับ fluid shift", "ผู้ป่วย CAD หรือมี risk factor ต้องประเมินความเสี่ยงหัวใจก่อนผ่าตัดทุกราย", "ลายมือ jod: Sx = stress → symp ↑ → HR ↑ → post-op MI"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 26 (= jod หน้า 24) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:102, img:"l12_q102", stem:"A 68-year-old woman with hypertension and type 2 diabetes is scheduled for an elective open cholecystectomy for complicated gallstone disease, classified as an intermediate-risk non-cardiac operation. She has no known cardiovascular disease. Using the algorithm shown, which preoperative assessment is recommended with the highest class of recommendation?",
  opts:["ECG and cardiac biomarkers","No cardiac assessment is needed","Pharmacologic stress echocardiography","Coronary angiography","Transthoracic echocardiography alone"], ans:0,
  notes:"สไลด์ไฟล์ 78 หน้า 30 (2022 ESC algorithm) พิมพ์ว่า <b>\"≥65 years or with CV risk factors → Intermediate-risk NCS: ECG, biomarkers (Class I); Functional capacity (Class IIa)\"</b>",
  kimg:["l12_p30"],
  interp:"อายุ ≥65 และมี CV risk factor (HTN, DM) ผ่าตัด intermediate-risk แบบ elective → อ่านคอลัมน์กลางของ algorithm",
  why:"ผู้ป่วยอายุ ≥65 ปีและมี CV risk factor (HTN, DM) จึงอยู่คอลัมน์กลางของ ESC 2022 algorithm ที่หน้า 30 การผ่าตัดถุงน้ำดีแบบเปิดเป็น intermediate-risk NCS และ elective จึงไม่ใช่ emergent หรือ time-sensitive ช่องนี้พิมพ์ว่า \"ECG, biomarkers (Class I)\" และ \"Functional capacity (Class IIa)\" ดังนั้น ECG กับ hs-troponin หรือ BNP เป็นข้อแนะนำ Class สูงสุด",
  wrong:["ไม่ต้องประเมินเลยใช้กับ low-risk NCS หรือผู้ป่วย <65 ปีที่ไม่มี CV risk factor จะถูกถ้าเธออายุ 40 ปี ไม่มี HTN และ DM", "stress imaging ไม่อยู่ในขั้นแรกของ algorithm ใช้เมื่อ functional capacity ต่ำและผลเปลี่ยนการรักษา จะถูกถ้าเธอเดินขึ้นบันไดไม่ได้และมี CAD ที่สงสัยรุนแรง", "angiography ไม่ได้ระบุเป็น preoperative test ใน algorithm จะถูกถ้ามี ACS หรือ unstable angina ที่ต้องรักษาก่อน", "echo อย่างเดียวไม่ใช่ข้อแนะนำ Class I ในกล่องนี้ จะถูกถ้ามีอาการ HF ใหม่หรือ murmur ที่สงสัย valve รุนแรง"],
  trap:"ต้องดูทั้งอายุและ CV risk factor ก่อนเลือกคอลัมน์",
  summary:["ESC 2022: ทุกราย history, exam, standard lab, เลิกบุหรี่, optimize ยา","≥65 ปีหรือมี CV risk factor + intermediate-risk: ECG + biomarkers (I) + functional capacity (IIa)","Low-risk NCS: ไม่ต้องทดสอบเพิ่ม","<65 ไม่มีความเสี่ยง + intermediate: None"],
  tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 30 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:103, stem:"A 70-year-old man with angina and a previous myocardial infarction, a transient ischemic attack two years ago, insulin-treated diabetes, serum creatinine 2.4 mg/dL, hypertension on three drugs and COPD is scheduled for elective surgery. Using the clinical risk factors of the revised cardiac risk index listed in the lecture, how many does he have?",
  opts:["Two","Three","Five","Four","Six"], ans:3,
  notes:"สไลด์ไฟล์ 78 หน้า 29 (ESC 2022 Table 4) พิมพ์ว่า <b>\"Ischaemic heart disease · Heart failure · Stroke or TIA · Renal dysfunction (serum creatinine >170 µmol/L or 2 mg/dL) · Diabetes mellitus requiring insulin therapy\"</b>",
  kimg:["l12_p29"],
  interp:"นับข้อ RCRI 5 ข้อ: IHD, HF, stroke/TIA, Cr >2, DM on insulin — HTN และ COPD ไม่ใช่ข้อ",
  why:"สไลด์ 78 หน้า 29 (ESC 2022 Table 4) ระบุ RCRI 5 ข้อคือ IHD (angina และ/หรือ MI เก่า), heart failure, stroke หรือ TIA, Cr >2 mg/dL (>170 µmol/L) และ DM ที่ต้องใช้ insulin ผู้ป่วยรายนี้มี angina/MI เก่า 1, TIA 1, Cr 2.4 1, DM on insulin 1 รวม 4 ข้อ ส่วน HTN และ COPD ไม่ใช่ข้อของ RCRI",
  wrong:["ขาดไป 2 ข้อ จะถูกถ้าผู้ป่วยมีแค่ IHD กับ TIA และไม่มี Cr สูงหรือ insulin", "ขาดไป 1 ข้อ จะถูกถ้า Cr ของเขาต่ำกว่า 2 mg/dL จึงไม่นับ renal dysfunction", "5 ข้อต้องมี HF ด้วย แต่โจทย์ไม่ได้ให้ HF จะถูกถ้ามี pulmonary edema และ EF ต่ำ", "6 ข้อไม่ใช่ RCRI ของสไลด์ และ HTN กับ COPD ไม่นับ จะถูกถ้าใช้ RCRI ต้นฉบับแล้วผ่าตัดเป็น high-risk surgery ที่เพิ่มอีก 1 ข้อ"],
  trap:"HTN และ COPD ไม่ใช่ข้อของ RCRI",
  summary:["RCRI ใน ESC 2022 มี 5 ข้อ ข้อละ 1 คะแนน: IHD, HF, stroke/TIA, Cr >2 mg/dL, DM on insulin", "Cr นับเมื่อ >170 µmol/L หรือ 2 mg/dL (หรือ CrCl <60 ตามสไลด์)", "HTN, COPD และอายุไม่ใช่ข้อของ RCRI", "ผู้ป่วยตัวอย่างได้ 4 คะแนน คือ MI/angina, TIA, Cr สูง, DM on insulin"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 29 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:104, stem:"A 62-year-old man receives general anesthesia for a long laparotomy and a large volume of intravenous fluid intraoperatively. He is stable in the ward but on the third postoperative day he develops dyspnea and pulmonary edema although his urine output is adequate. According to the handwritten explanation in the lecture, what is the most likely mechanism?",
  opts:["Complete loss of vascular tone persisting for several days","Fluid returns into the vascular space as inflammatory cytokines fall","Ongoing vascular leakage from rising cytokine levels","Stress-induced sodium retention from adrenal excess","Pulmonary embolism from venous stasis"], ans:1,
  notes:"ลายมือไฟล์ jod หน้า 24 เขียนว่า <b>\"ดมยาสลบ → loss m. tone → vasodilate + ให้ volume เติมเยอะ + stress จาก Sx → cytokine → vascular leakage\"</b><br><b>\"post op. → ↓ stress → ↓ inflam. cytokine → fluid กลับเข้า vascular (~day 3) → HF ได้\"</b>",
  kimg:["l12b_p24"],
  interp:"ผ่าตัดใหญ่ + ให้ volume มาก แล้วมี pulmonary edema วันที่ 3 โดยปัสสาวะดี → fluid ที่รั่วออกไปกลับเข้าหลอดเลือด",
  why:"ลายมือ jod หน้า 24 เขียนว่า ระหว่างดมยาสลบ muscle tone หาย เกิด vasodilate ร่วมกับ volume ที่ให้มาก และ stress จากผ่าตัดกระตุ้น cytokine จึงเกิด vascular leakage แล้ว post-op stress ลด cytokine ลด fluid กลับเข้า vascular ราววันที่ 3 จนเกิด HF ได้ ผู้ป่วยที่ให้ volume มากและ pulmonary edema วันที่ 3 โดยปัสสาวะดีจึงตรงกับกลไกนี้",
  wrong:["vascular tone กลับมาเมื่อฤทธิ์ยาสลบหมด ไม่ใช่การสูญเสียต่อเนื่องหลายวัน จะถูกถ้าผู้ป่วยมี neurogenic หรือ septic shock ที่ vasodilate นาน", "ข้อนี้ไม่ใช่คำตอบเพราะ leakage เกิดช่วงที่ cytokine สูงคือระหว่างและทันทีหลังผ่าตัด จะถูกถ้าบวมเฉียบพลันใน 24 ชั่วโมงแรก", "adrenal excess ไม่ใช่กลไกที่ลายมืออธิบาย จะถูกถ้าผู้ป่วยได้ steroid ขนาดสูงและมี Na ค้าง", "PE ทำให้ hypoxia และ RV strain ไม่ใช่ pulmonary edema จะถูกถ้าขาบวมข้างเดียวและ CXR ปอดโปร่ง"],
  trap:"วันที่ 3 คือช่วง fluid mobilization กลับเข้า vascular",
  summary:["ระหว่างผ่าตัด: vasodilate + volume + stress → cytokine → vascular leakage","หลังผ่าตัด stress ลด cytokine ลด → fluid กลับเข้า vascular ราววันที่ 3","เสี่ยง HF ในผู้ป่วยโรคหัวใจ"],
  tags:["Pre-op & post-op","Fluid & electrolyte"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 24 (= 78 หน้า 26) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:105, stem:"Before elective surgery a 58-year-old woman is asked about her daily activity to estimate functional capacity. She lives alone and walks without a stick. Which activity best indicates that her functional capacity is at least 4 METs?",
  opts:["Eating and dressing without help","Walking slowly around her house","Preparing a light meal while sitting","Washing her face and brushing teeth","Walking on level ground at 4 miles per hour"], ans:4,
  notes:"สไลด์ไฟล์ 78 หน้า 32 พิมพ์ว่า <b>\"4 METs: Can you … climb a flight of stairs or walk up a hill? Walk on level ground at 4 mph or 6.4 km/h?\"</b><br>ลายมือ 78 เขียนว่า <b>\">4 METs → OK!\"</b>",
  kimg:["l12_p32","l12b_p27"],
  interp:"ถาม activity ที่เทียบเท่า ≥4 METs ตามรายการ 'Can you …' ของสไลด์",
  why:"สไลด์ 78 หน้า 32 (และ jod หน้า 27) ระบุ 4 METs เทียบกับคำถามว่าเดินบนพื้นราบ 4 mph หรือ 6.4 km/h ได้ไหม และขึ้นบันได 1 ช่วงได้ไหม ลายมือ 78 เขียน \">4 METs → OK!\" กิจกรรมพื้นฐาน เช่น แต่งตัว กินข้าว เดินช้าในบ้านใช้พลังงานน้อยกว่า 4 METs จึงไม่ยืนยัน functional capacity ที่ดี",
  wrong:["กินและแต่งตัวเองได้เป็นกิจวัตรพื้นฐานที่ใช้พลังงานต่ำกว่า 4 METs จะถูกถ้าโจทย์ถามผู้ป่วยที่ดูแลตนเองได้แต่เดินไม่ไหว", "เดินช้า ๆ ในบ้านยังต่ำกว่าความเร็ว 4 mph จะถูกถ้าเธอเดินเร็วบนพื้นราบได้ 6.4 km/h", "เตรียมอาหารเบา ๆ ขณะนั่งเป็นกิจกรรมพลังงานต่ำ ไม่ถึงเกณฑ์ 4 METs จะถูกถ้าโจทย์เป็นงานบ้านหนัก เช่น ถูพื้นหรือยกเฟอร์นิเจอร์", "ล้างหน้าแปรงฟันเป็นการดูแลตนเองขั้นพื้นฐาน ไม่ถึง 4 METs จะถูกถ้าโจทย์ถามคนที่ยังช่วยเหลือตัวเองได้ในระดับต่ำสุดเท่านั้น"],
  trap:"ต้องเป็นความเร็ว 4 mph ไม่ใช่เดินช้า ๆ",
  summary:["1 MET = 3.5 mL O2/kg/min ขณะพักท่านั่ง", "4 METs เทียบเท่าขึ้นบันได 1 ช่วง หรือเดินบนพื้นราบ 4 mph (6.4 km/h)", "≥4 METs หมายถึง functional capacity ดี ผ่าตัดได้โดยไม่ต้องตรวจหัวใจเพิ่ม", "ลายมือ 78: >4 METs → OK!"], tags:["Pre-op & post-op"], outside:"นอกสไลด์: ตัวเลือกผิดเป็นกิจกรรมพลังงานต่ำตามตาราง Duke ซึ่งไม่ได้พิมพ์ในสไลด์",
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 32 (= jod หน้า 27) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:106, stem:"A 52-year-old woman with no known cardiovascular disease, hypertension, diabetes, smoking or other cardiovascular risk factors is scheduled for an elective esophagectomy, a high-risk non-cardiac operation. According to the 2022 ESC algorithm shown in the lecture, what is recommended before surgery?",
  opts:["No cardiac assessment at all","Consider ECG and biomarkers","Mandatory pharmacologic stress test","Coronary angiography","Cardiology consultation with multidisciplinary decision"], ans:1,
  notes:"สไลด์ไฟล์ 78 หน้า 30 พิมพ์ว่า <b>\"<65 years without any CVD/CV risk factors → High-risk NCS: In patients >45 year, consider: ECG, biomarkers (Class IIa)\"</b>",
  kimg:["l12_p30"],
  interp:"อายุ <65 ไม่มีโรคหรือปัจจัยเสี่ยง แต่ผ่าตัด high-risk และอายุ >45",
  why:"ESC 2022 algorithm หน้า 30 คอลัมน์ซ้ายคือ <65 ปีที่ไม่มี CVD หรือ CV risk factor ช่อง High-risk NCS พิมพ์ว่า \"In patients >45 year, consider: ECG, biomarkers (Class IIa)\" ผู้ป่วยอายุ 52 ปีผ่าตัด esophagectomy ซึ่งเป็น high-risk จึงควรพิจารณา ECG และ biomarkers ระดับ IIa ไม่ใช่ Class I และไม่ต้อง stress test หรือ angiography",
  wrong:["None ใช้กับ low-risk และ intermediate-risk ในคอลัมน์นี้ แต่ผู้ป่วยผ่าตัด high-risk และอายุ >45 จะถูกถ้าเธออายุ 40 ปี", "stress test บังคับไม่ได้อยู่ในช่องนี้ จะถูกถ้ามี CAD ที่สงสัยหรือ functional capacity ต่ำและผลเปลี่ยนการรักษา", "angiography ไม่ใช่ข้อแนะนำก่อนผ่าตัดใน algorithm จะถูกถ้ามี ACS", "cardiology consultation และ multidisciplinary decision อยู่ในช่อง established CVD จะถูกถ้าเธอมี CAD หรือ HF อยู่เดิม"],
  trap:"ผู้ป่วยอายุน้อยแต่ high-risk surgery ยังควรพิจารณา ECG และ biomarkers",
  summary:["ESC 2022 <65 ปี ไม่มีความเสี่ยง: low และ intermediate = None","High-risk NCS และอายุ >45: consider ECG + biomarkers (IIa)","established CVD + high-risk: ECG, biomarkers (I) + functional capacity + cardiology consultation"],
  tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 30 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:107, stem:"A 74-year-old man with coronary artery disease and diabetes arrives in the emergency department with a perforated duodenal ulcer and peritonitis. The surgeon plans immediate laparotomy. According to the ESC 2022 algorithm, what is the appropriate approach to cardiac testing?",
  opts:["Complete a functional capacity assessment first","Obtain a pharmacologic stress test","Perform coronary angiography and revascularize","Delay surgery until cardiology review is complete","Proceed because cardiac testing is not feasible"], ans:4,
  notes:"สไลด์ไฟล์ 78 หน้า 30 พิมพ์ว่า <b>\"Emergent or urgent NCS → Y → Cardiac testing not feasible\"</b>",
  kimg:["l12_p30"],
  interp:"Perforation with peritonitis = emergent surgery",
  why:"ESC 2022 algorithm หน้า 30 ขั้นแรกคือถามว่า Emergent or urgent NCS หรือไม่ ถ้า Y ไปที่ \"Cardiac testing not feasible\" ผู้ป่วย perforated ulcer และ peritonitis ต้องผ่าตัดทันที จึงไม่ประเมิน capacity หรือส่งตรวจหัวใจ การประเมินหัวใจละเอียดสงวนไว้กับ elective และ time-sensitive ที่มีเวลา",
  wrong:["การประเมิน functional capacity อยู่ในกลุ่ม elective NCS ที่มีเวลา จะถูกถ้าเขามีไส้เลื่อนที่ผ่าตัดเมื่อไรก็ได้", "stress test ใช้ในผู้ป่วย elective เมื่อผลเปลี่ยนการรักษา และต้องใช้เวลา จะถูกถ้าเขาจะผ่าตัดอีก 1 เดือน", "angiography ไม่ใช่ขั้นของ algorithm และจะเสียเวลาจน peritonitis รุนแรง จะถูกถ้าเขามี STEMI ซึ่งรักษาก่อน", "การเลื่อนผ่าตัดทำให้ผู้ป่วย peritonitis อันตราย จะถูกถ้าผ่าตัดเป็น elective และมี ACS ที่ต้องรักษาก่อน"],
  trap:"อย่าเลื่อนผ่าตัดฉุกเฉินเพื่อตรวจหัวใจ",
  summary:["ESC 2022 ขั้นแรก: emergent/urgent NCS → ไม่ทำ cardiac testing ผ่าตัดทันที", "time-sensitive NCS → multidisciplinary decision ของ individualized testing", "elective NCS → ประเมินตามอายุ CV risk และชนิดผ่าตัด", "การเลื่อนผ่าตัดฉุกเฉินเพื่อตรวจหัวใจเป็นอันตรายมากกว่าประโยชน์"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 30 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:108, stem:"A 71-year-old man with a previous myocardial infarction has a colon cancer that should be resected within a few weeks. The operation cannot be left for several months but is not an emergency. According to the ESC 2022 algorithm, which approach is correct?",
  opts:["Treat as an emergency and skip all testing","Cancel surgery until coronary angiography","Multidisciplinary decision on individualized cardiac testing","Routine stress testing for every patient","Operate without any assessment because the tumour is malignant"], ans:2,
  notes:"สไลด์ไฟล์ 78 หน้า 30 พิมพ์ว่า <b>\"Time-sensitive NCS → Y → Multidisciplinary decision of individualized cardiac testing. If time, manage as elective NCS\"</b>",
  kimg:["l12_p30"],
  interp:"ผ่าตัดไม่ฉุกเฉินแต่รอนานไม่ได้ = time-sensitive",
  why:"ESC 2022 หน้า 30: ถ้าไม่ใช่ emergent/urgent ให้ถามต่อว่า Time-sensitive NCS ไหม ถ้า Y ได้ \"Multidisciplinary decision of individualized cardiac testing. If time, manage as elective NCS\" มะเร็งลำไส้ที่ต้องผ่าตัดภายในไม่กี่สัปดาห์ รอหลายเดือนไม่ได้แต่ก็ไม่ฉุกเฉินจึงเป็น time-sensitive ผู้ป่วยมี MI เก่าจึงควรปรึกษาทีมหลายสาขาเพื่อตัดสินการตรวจรายบุคคล",
  wrong:["การข้ามการทดสอบทั้งหมดเป็นของ emergent NCS จะถูกถ้ามีลำไส้ทะลุและ peritonitis", "การยกเลิกผ่าตัดเพื่อทำ angiography ไม่ใช่ขั้นบังคับและทำให้มะเร็งล่าช้า จะถูกถ้ามี unstable angina", "stress test ทุกราย algorithm ไม่ได้แนะนำ จะถูกถ้าทีมเห็นว่าผลเปลี่ยนการรักษาในผู้ป่วยรายนี้", "การผ่าตัดโดยไม่ประเมินเลยไม่เหมาะกับผู้ป่วย MI เก่า จะถูกถ้าเป็น emergent เช่น ลำไส้อุดตันทันที"],
  trap:"time-sensitive ไม่เท่ากับ emergent",
  summary:["ESC 2022: emergent/urgent NCS → cardiac testing not feasible ผ่าตัดทันที", "Time-sensitive NCS → multidisciplinary decision ของ individualized cardiac testing และถ้ามีเวลาให้จัดเป็น elective", "Elective NCS → ประเมินตามอายุ CV risk factor และชนิดผ่าตัด (ECG, biomarkers, functional capacity)", "มะเร็งที่ต้องผ่าภายในไม่กี่สัปดาห์ = time-sensitive ไม่ใช่ emergent"],
  tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 30 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:109, img:"l12_q109", stem:"A 66-year-old man with diabetes and chronic kidney disease is scheduled for an elective aortic aneurysm repair. He has no acute coronary syndrome, his estimated risk of major adverse cardiac events is elevated, and he becomes breathless after climbing one flight of stairs. The surgeon and cardiologist agree the result of further testing would change management. Which is the next step in the algorithm shown?",
  opts:["Pharmacologic stress testing","Proceed directly to surgery","Coronary revascularization immediately","Cancel the operation permanently","Treat according to acute coronary syndrome guidelines"], ans:0,
  notes:"สไลด์ไฟล์ 78 หน้า 27 (2014 ACC/AHA) พิมพ์ว่า <b>\"Poor OR unknown functional capacity (<4 METs): Will further testing impact decision making OR perioperative care? Yes → Pharmacologic stress testing (Class IIa)\"</b>",
  kimg:["l12_p27"],
  interp:"Elevated risk + poor functional capacity (<4 METs) + testing จะเปลี่ยนการตัดสินใจ",
  why:"ผู้ป่วยไม่มี ACS มีความเสี่ยง MACE สูงขึ้น (Step 5) และเหนื่อยหลังขึ้นบันได 1 ช่วงจึงมี functional capacity <4 METs ซึ่ง Step 6 ในหน้า 27 พิมพ์ว่า \"Will further testing impact decision making OR perioperative care?\" ถ้า Yes → \"Pharmacologic stress testing (Class IIa)\" โจทย์ระบุว่าผลจะเปลี่ยนการดูแล จึงตอบ stress testing ก่อนตัดสินใจผ่าตัด",
  wrong:["การไปผ่าตัดทันทีเป็นทางออกเมื่อ testing ไม่เปลี่ยนการดูแล (Step 7) จะถูกถ้าทีมเห็นว่าผลไม่เปลี่ยนการตัดสินใจ", "revascularization ทำเมื่อ stress test ผิดปกติ (Class I) ไม่ใช่ก่อนทดสอบ จะถูกถ้า stress test พบ ischemia มาก", "ไม่มีขั้นยกเลิกถาวรใน algorithm ผู้ป่วยยังมีทางเลือก GDMT หรือ alternate strategies จะถูกถ้าไม่เหมาะผ่าตัดและเลือก palliation", "ACS pathway ใช้เมื่อมี ACS ใน Step 2 ซึ่งผู้ป่วยไม่มี จะถูกถ้ามี unstable angina หรือ troponin สูง"],
  trap:"ต้องถามก่อนว่าผลทดสอบจะเปลี่ยนการดูแลหรือไม่",
  summary:["2014 ACC/AHA: emergency → risk stratify แล้วผ่าตัด, ACS → รักษาตาม GDMT", "ประเมิน MACE risk: <1% → ไม่ต้องตรวจเพิ่ม (Class III No Benefit)", "elevated risk และ ≥4 METs → ผ่าตัดได้ ไม่ต้องตรวจเพิ่ม", "<4 METs หรือไม่ทราบ → pharmacologic stress test (IIa) เฉพาะเมื่อผลเปลี่ยนการดูแล แล้ว revascularize ถ้าผิดปกติ"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 27 · ไม่มีสัญลักษณ์ · ไฮไลต์ม่วงของนักศึกษา"}),
U({n:110, stem:"A 55-year-old smoker with controlled hypertension is scheduled for an elective laparoscopic hernia repair. He has no active cardiac condition and his estimated perioperative risk of major adverse cardiac events is below 1 percent. According to the 2014 ACC/AHA algorithm in the lecture, what should be done?",
  opts:["Stress testing and then proceed","Functional capacity assessment and echocardiography","Coronary angiography before the operation","Proceed to surgery with no further cardiac testing","Postpone surgery until a cardiologist reviews him"], ans:3,
  notes:"สไลด์ไฟล์ 78 หน้า 27 พิมพ์ว่า <b>\"Low risk (<1%) → No further testing (Class III: No Benefit) → Proceed to surgery\"</b>",
  kimg:["l12_p27"],
  interp:"MACE risk <1% = low risk step 4",
  why:"2014 ACC/AHA algorithm หน้า 27: Step 3 ประเมิน MACE risk ถ้า Low risk (<1%) → \"No further testing (Class III: No Benefit)\" → Proceed to surgery ผู้ป่วยไม่มี active condition และ risk <1% สำหรับผ่าตัดไส้เลื่อนส่องกล้อง การตรวจเพิ่มจึงไม่มีประโยชน์ แม้จะสูบบุหรี่และเป็น HTN ก็ยังผ่าตัดได้",
  wrong:["stress test ใน low-risk ไม่มีประโยชน์ (Class III) จะถูกถ้า risk สูงและ capacity <4 METs", "การประเมิน capacity และ echo ไม่จำเป็นเมื่อ risk <1% จะถูกถ้าเป็น elevated risk ที่ต้องรู้ METs", "angiography ไม่มีข้อบ่งชี้เมื่อไม่มี ACS จะถูกถ้าผู้ป่วยมี angina ไม่คงที่", "การรอ cardiologist ไม่จำเป็นในผ่าตัดเล็กที่ risk ต่ำ จะถูกถ้าพบ murmur severe AS ใหม่"],
  trap:"การตรวจเพิ่มใน low-risk ไม่มีประโยชน์",
  summary:["2014 ACC/AHA Step 3: ประเมิน MACE risk จาก clinical + surgical risk", "Low risk (<1%) → No further testing (Class III: No Benefit) → proceed to surgery", "Elevated risk (Step 5) จึงถามต่อว่า functional capacity ≥4 METs หรือไม่", "ผ่าตัดไส้เลื่อนส่องกล้องและผู้ป่วยไม่มี ACS จึงไม่ต้องตรวจหัวใจเพิ่ม"],
  tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 27 · ไม่มีสัญลักษณ์ · ไฮไลต์ม่วงของนักศึกษา"}),
U({n:111, stem:"A 64-year-old woman with diabetes and hypertension has an elevated estimated risk of cardiac events for a planned elective total gastrectomy. She has no acute coronary syndrome and says she can climb two flights of stairs briskly without symptoms. Which action does the 2014 ACC/AHA algorithm in the lecture suggest?",
  opts:["Pharmacologic stress testing before surgery","Coronary revascularization before surgery","Cardiac catheterization routinely","Proceed to surgery without further testing","Cancel surgery and give palliation"], ans:3,
  notes:"สไลด์ไฟล์ 78 หน้า 27 พิมพ์ว่า <b>\"Moderate or greater (≥4 METs) functional capacity → Excellent (>10 METs) / Moderate–good (≥4–10 METs): No further testing → Proceed to surgery\"</b><br>ลายมือ 78 เขียนว่า <b>\">4 METs → OK!\"</b>",
  kimg:["l12_p27","l12_p32"],
  interp:"Elevated risk แต่ ≥4 METs (ขึ้นบันได 2 ช่วงได้)",
  why:"2014 ACC/AHA หน้า 27: elevated risk (Step 5) แล้วถาม functional capacity ถ้า \"Moderate or greater (≥4 METs)\" แบ่งเป็น Excellent >10 METs และ Moderate/Good ≥4–10 METs ทั้งสองกลุ่ม \"No further testing\" แล้ว \"Proceed to surgery\" ผู้ป่วยขึ้นบันได 2 ช่วงอย่างเร็วโดยไม่มีอาการ เกิน 4 METs ลายมือ 78 ก็เขียน \">4 METs → OK!\"",
  wrong:["stress test ใช้เมื่อ <4 METs หรือไม่ทราบ และผลเปลี่ยนการดูแล จะถูกถ้าเธอเดินขึ้นบันไดไม่ไหว", "revascularization ทำหลัง stress test ผิดปกติ ไม่ใช่การเตรียมผ่าตัดทั่วไป จะถูกถ้ามี left main หรือ ACS", "cath ไม่ใช่การตรวจ routine ใน algorithm จะถูกถ้ามี angina ไม่คงที่", "palliation อยู่ใน Step 7 ของผู้ป่วยที่ไม่เหมาะผ่าตัด จะถูกถ้าเธอมีมะเร็งระยะท้ายและ capacity ต่ำมาก"],
  trap:"ความเสี่ยงสูงแต่ capacity ดี ไม่ต้องตรวจเพิ่ม",
  summary:["Elevated risk + ≥4 METs → No further testing → proceed to surgery (Excellent >10 METs = IIa, 4–10 METs = IIb)", "<4 METs หรือไม่ทราบ → ถามว่า testing เปลี่ยนการตัดสินใจไหม ถ้าใช่ทำ pharmacologic stress test (IIa)", "ผล stress ผิดปกติ → revascularization ตาม CPG (Class I)", "ลายมือ 78: >4 METs → OK!"],
  tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 27 + 32 · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:112, stem:"A 60-year-old man with an elective inguinal hernia repair planned next week is seen in the clinic because of chest pain at rest for the last two days with ST depression on ECG and rising troponin. According to the 2014 ACC/AHA algorithm in the lecture, what is the next step?",
  opts:["Proceed to surgery as planned","Pharmacologic stress testing","Evaluate and treat according to guideline-directed medical therapy","Estimate surgical risk and test functional capacity","Proceed with heart rate control only"], ans:2,
  notes:"สไลด์ไฟล์ 78 หน้า 27 พิมพ์ว่า <b>\"ACS (Step 2) → Yes → Evaluate and treat according to GDMT\"</b>",
  kimg:["l12_p27"],
  interp:"อาการ ST depression และ troponin สูง = acute coronary syndrome",
  why:"ผู้ป่วยมีเจ็บอกขณะพัก ST depression และ troponin เพิ่ม คือ ACS ซึ่งอยู่ที่ Step 2 ของ algorithm 2014 ACC/AHA หน้า 27 \"ACS† (Step 2) → Yes → Evaluate and treat according to GDMT†\" ต้องรักษา ACS ก่อน จึงค่อยพิจารณาผ่าตัด elective ที่เสี่ยงน้อยอย่างไส้เลื่อน ไม่ควรเดินหน้าผ่าตัดตามนัด",
  wrong:["ผ่าตัดตามนัดไม่ปลอดภัยเมื่อมี ACS จะถูกถ้าอาการเดิมหายและ troponin ปกติ", "stress test อยู่ใน Step 6 หลังไม่มี ACS และ risk สูง จะถูกถ้าไม่มีอาการเจ็บอกขณะพัก", "การประเมิน risk และ capacity ทำใน Step 3 หลังคัดกรอง ACS แล้ว จะถูกถ้าไม่มี ACS", "การคุม HR อย่างเดียวไม่ใช่การรักษา ACS จะถูกถ้าอยู่ใน algorithm เก่าที่มี clinical predictor แต่ไม่มี active condition"],
  trap:"ต้องรักษา ACS ก่อนเสมอ",
  summary:["2014 ACC/AHA Step 1: emergency → clinical risk stratification แล้วผ่าตัด", "Step 2: ACS → evaluate and treat according to GDMT ก่อนผ่าตัด elective", "Step 3: ประเมิน MACE risk หลังไม่มี ACS แล้วจึงดู functional capacity", "เจ็บอกขณะพัก ST depression และ troponin สูง = ACS ต้องเลื่อนไส้เลื่อน elective"],
  tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 27 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:113, stem:"A 67-year-old man had a drug-eluting stent placed two months ago for stable chronic coronary disease. He now asks to have an elective, non-urgent cholecystectomy for symptomatic gallstones. According to current guidance, what is the most appropriate timing?",
  opts:["Proceed within the next week","Wait at least 6 months from stent placement","Wait only 14 days","Proceed if aspirin is stopped for 7 days","Wait at least 12 months for any stent"], ans:1,
  notes:"สไลด์ไฟล์ 78 หน้า 26 ลายมือ 78 เขียนว่า <b>\"ถ้าโอกาสเสี่ยง MI → อาจทำ PCI ก่อน\"</b> (หัวข้อ Perioperative MI)",
  kimg:["l12_p26","l12b_p24"],
  interp:"ถาม timing ผ่าตัด elective หลังใส่ DES (เนื้อหาเกินสไลด์)",
  why:"นอกสไลด์: แนวทาง 2024 AHA/ACC แนะนำ elective surgery หลังใส่ DES ในโรคหลอดเลือดหัวใจเรื้อรังควรรอ ≥6 เดือน ส่วนหลัง ACS รอ ≥12 เดือน balloon angioplasty ที่ไม่ใส่ stent รอ ≥14 วัน และผ่าตัด time-sensitive อาจรอ ≥3 เดือน ผู้ป่วยใส่ DES เพียง 2 เดือนเพื่อโรคเสถียรและผ่าตัดถุงน้ำดีแบบไม่เร่งด่วน จึงควรรอ ≥6 เดือน",
  wrong:["ผ่าตัดภายในสัปดาห์หน้าเสี่ยง stent thrombosis และ MI จะถูกถ้าเป็นผ่าตัดฉุกเฉิน เช่น cholecystitis ที่รอไม่ได้", "14 วันใช้กับ balloon angioplasty โดยไม่ใส่ stent จะถูกถ้าผู้ป่วยทำ POBA เท่านั้น", "การหยุด aspirin 7 วันไม่ใช่แนวทางปัจจุบัน ควรต่อ aspirin ถ้าทำได้ จะถูกถ้าผ่าตัด intracranial ที่เลือดออกไม่ได้", "12 เดือนใช้หลัง DES จาก ACS จะถูกถ้าผู้ป่วยมี MI ล่าสุดเป็นข้อบ่งชี้ใส่ stent"],
  trap:"DES หลัง ACS รอนานกว่า chronic coronary disease",
  summary:["Balloon ไม่ใส่ stent: รอ ≥14 วัน","DES ใน chronic coronary disease: elective ≥6 เดือน","DES หลัง ACS: ≥12 เดือน","time-sensitive อาจ ≥3 เดือน","ต่อ aspirin เมื่อทำได้"],
  tags:["Pre-op & post-op"], outside:"นอกสไลด์: ระยะเวลารอผ่าตัดหลังใส่ stent (2024 AHA/ACC) ไม่ได้อยู่ในสไลด์",
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 26 (= jod หน้า 24) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:114, stem:"A 74-year-old man with diabetes and a previous stroke is scheduled for cataract extraction under local anesthesia. He has no active cardiac condition. According to the older ACC/AHA stepwise algorithm in the jod handout, what is the correct management?",
  opts:["Postpone surgery until a stress test is done","Proceed with surgery as it is low-risk","Assess clinical predictors before proceeding","Obtain coronary angiography","Evaluate functional capacity before deciding"], ans:1,
  notes:"สไลด์ไฟล์ jod หน้า 25 พิมพ์ว่า <b>\"Step 3 Low-risk surgery (risk <1%): Superficial or endoscopic, Cataract, breast, Ambulatory surgery → Proceed with surgery\"</b>",
  kimg:["l12b_p25"],
  interp:"Cataract surgery = low-risk surgery (step 3) ไม่ต้องไปขั้นต่อ",
  why:"jod หน้า 25 Step 3 \"Low-risk surgery (risk <1%): Superficial or endoscopic, Cataract, breast, Ambulatory surgery → Proceed with surgery\" ผู้ป่วยไม่มี active cardiac condition จึงผ่าน Step 2 แล้ว cataract extraction เป็น low-risk ผ่าตัดได้ทันทีโดยไม่ต้องดู functional capacity หรือ clinical predictors แม้จะมี DM และ stroke",
  wrong:["stress test ใช้ใน Step 5 สำหรับ predictor + intermediate risk จะถูกถ้าเป็น vascular surgery", "การประเมิน clinical predictors อยู่ Step 5 หลังไม่ผ่าน Step 3 และ 4 จะถูกถ้าเป็นผ่าตัด intermediate-risk", "angiography ไม่มีใน algorithm ขั้นนี้ จะถูกถ้ามี unstable coronary syndrome", "functional capacity อยู่ใน Step 4 สำหรับผ่าตัดที่ไม่ใช่ low-risk จะถูกถ้าเป็น laparotomy"],
  trap:"ผู้ป่วยเสี่ยงสูงแต่ผ่าตัดเสี่ยงต่ำยังผ่าตัดได้",
  summary:["jod algorithm เก่า: Step 1 emergency, Step 2 active cardiac conditions, Step 3 low-risk surgery", "low-risk surgery (<1%): superficial/endoscopic, cataract, breast, ambulatory → proceed", "Step 4 ≥4 METs → proceed, Step 5 clinical predictors", "ผ่าตัดเสี่ยงต่ำไม่ต้องดู predictor แม้ผู้ป่วยมี DM และ stroke"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 25 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:115, stem:"A 62-year-old woman with a previous episode of heart failure that is now compensated, and diabetes, will undergo an elective intermediate-risk abdominal operation. She has no active cardiac condition but becomes breathless after climbing one flight of stairs. According to the older ACC/AHA stepwise algorithm in the jod handout, what is appropriate?",
  opts:["Cancel the operation and refer for palliation","Proceed with surgery without any precautions","Perform coronary angiography before the operation","Proceed with heart rate control or consider noninvasive testing","Treat as an active cardiac condition and postpone surgery"], ans:3,
  notes:"สไลด์ไฟล์ jod หน้า 25 พิมพ์ว่า <b>\"≥1 clinical predictors + Intermediate risk or vascular surgery → Proceed to surgery with heart rate control or consider noninvasive testing if it will change management\"</b><br>ลายมือ jod เขียนที่ Step 4 ว่า <b>\"เหนื่อยง่าย → ต้อง w/u\"</b> และข้าง noninvasive testing ว่า <b>\"exercise stress test\"</b>",
  kimg:["l12b_p25"],
  interp:"ไม่มี active cardiac condition, ผ่าตัดไม่ใช่ low-risk, capacity ต่ำ (<4 METs), มี clinical predictor (HF, DM) และเป็น intermediate-risk → ไปที่ Step 5",
  why:"jod Step 5: มี clinical predictor ≥1 ข้อ + intermediate-risk surgery → ผ่าตัดโดยคุม heart rate หรือพิจารณา noninvasive testing (ลายมือ: exercise stress test) เฉพาะเมื่อผลจะเปลี่ยนการดูแล ลายมือ Step 4 บอกว่าเหนื่อยง่ายต้อง work up ต่อ",
  wrong:["ไม่มีข้อไหนใน algorithm ให้ยกเลิกในขั้นนี้ — จะถูกถ้าไม่เหมาะผ่าตัดเลยและเลือก palliation","การผ่าตัดโดยไม่ทำอะไรเลยใช้กับกรณีที่ไม่มี clinical predictor — จะถูกถ้าผู้ป่วยไม่มีโรคร่วมเลย","angiography ไม่ใช่ขั้นของ algorithm — จะถูกถ้าผล noninvasive test ผิดปกติรุนแรง","HF ที่ compensated ไม่ใช่ active cardiac condition (ต้องเป็น decompensated NYHA IV) — จะถูกถ้าเธอมี HF ที่กำเริบ"],
  trap:"HF ที่ compensated เป็นแค่ clinical predictor ไม่ใช่ active cardiac condition",
  summary:["Step 4: functional capacity ≥4 METs → proceed","Step 5 clinical predictors: IHD, compensated/prior HF, cerebrovascular disease, DM, renal insufficiency","ไม่มี predictor → proceed with surgery","≥1 predictor + intermediate risk หรือ vascular surgery → HR control หรือ noninvasive testing ถ้าเปลี่ยนการดูแล"],
  tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 25 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:116, img:"l12_q116", stem:"A 69-year-old man scheduled for an elective hernia repair next week is found to have new atrial fibrillation with a ventricular rate of 140 per minute and mild breathlessness. Using the older ACC/AHA stepwise algorithm in the handout, what should be done with the operation?",
  opts:["Proceed with surgery as planned","Proceed with a beta-blocker only","Proceed after an exercise stress test","Cancel the operation permanently","Postpone surgery until the rhythm is stabilized"], ans:4,
  notes:"สไลด์ไฟล์ jod หน้า 25 พิมพ์ว่า <b>\"Step 2 Active cardiac conditions … Significant arrhythmias (… atrial fibrillation with rapid ventricular rate >100 …) → Postpone surgery until stabilized or corrected\"</b>",
  kimg:["l12b_p25"],
  interp:"AF with rapid ventricular rate >100 อยู่ในรายการ active cardiac condition ของ Step 2",
  why:"jod Step 2: active cardiac conditions (unstable coronary syndrome, decompensated HF, significant arrhythmia, severe valvular disease) → postpone surgery until stabilized or corrected ผู้ป่วยมี AF rate 140 ต่อนาทีและเหนื่อย ซึ่งอยู่ใน active cardiac condition ข้อ significant arrhythmias จึงต้องควบคุมจังหวะก่อน แล้วค่อยผ่าตัด elective ได้",
  wrong:["ผ่าตัดทันทีเสี่ยงสูงเพราะยังมี active condition — จะถูกถ้าเป็น emergency","beta-blocker อย่างเดียวไม่ได้ทำให้ stabilized และไม่ใช่ทางเลือกของ Step 2 — จะถูกถ้า rate คุมได้แล้วและไปต่อ Step 3","stress test ทำใน Step 5 หลังไม่มี active condition — จะถูกถ้าจังหวะปกติแล้ว","ไม่ต้องยกเลิกถาวร เลื่อนจนแก้ไขเสร็จ — จะถูกถ้ามะเร็งระยะท้ายที่ไม่เหมาะผ่า"],
  trap:"Step 2 อยู่ก่อน Step 3 low-risk surgery จึงต้องแก้ active condition ก่อนแม้ผ่าตัดเล็ก",
  summary:["Active cardiac conditions: unstable coronary syndrome, decompensated HF, significant arrhythmia, severe AS/MS","ต้อง postpone elective surgery จน stabilized หรือแก้ไข","emergency surgery (Step 1) ข้ามไปผ่าตัดพร้อม medical risk reduction"],
  tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 25 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:117, stem:"A 55-year-old man with end-stage renal disease missed his last two dialysis sessions and presents with prolonged bleeding from an arteriovenous fistula after minor trauma. Platelet count and coagulation tests are normal and he needs urgent fistula revision. In addition to dialysis, which agent can reduce uremic bleeding?",
  opts:["Protamine sulfate","Vitamin K","Desmopressin","Prothrombin complex concentrate","Unfractionated heparin"], ans:2,
  notes:"สไลด์ไฟล์ 78 หน้า 14 พิมพ์ว่า <b>\"Preoperative dialysis in ESRD patient: prevent uremic bleeding\"</b><br>ลายมือ 78 เขียนว่า <b>\"eGFR <10–15 → vWF อาจผิดปกติ ถ้าไม่ได้ฟอกเลือด\"</b>",
  kimg:["l12_p14","l12b_p15"],
  interp:"ESRD ไม่ได้ฟอกเลือด เลือดออกนานทั้งที่ platelet count และ coag ปกติ = platelet dysfunction จาก uremia",
  why:"สไลด์: ESRD ต้อง dialysis ก่อนผ่าตัดเพื่อป้องกัน uremic bleeding (platelet dysfunction) ถ้ายังเลือดออกหรือต้องผ่าตัดด่วนนอกสไลด์ใช้ desmopressin (DDAVP) 0.3 µg/kg IV หรือ cryoprecipitate ผู้ป่วยขาดฟอกเลือดจึงมี uremic toxin ทำให้ platelet เสียหน้าที่ จึงเลือดออกนานแม้ count และ coag ปกติ ซึ่งแก้ด้วย dialysis และ desmopressin",
  wrong:["protamine ใช้ตีฤทธิ์ heparin — จะถูกถ้าเลือดออกจากยา heparin","vitamin K แก้ภาวะขาด factor จาก warfarin — จะถูกถ้า INR สูงจาก warfarin","PCC แก้ฤทธิ์ warfarin หรือ factor ต่ำ — จะถูกถ้า INR สูง","heparin จะทำให้เลือดออกมากขึ้น — จะถูกถ้ามี thrombosis ที่ต้อง anticoagulate"],
  trap:"count และ coag ปกติแต่เลือดออก คิดถึง platelet function",
  summary:["ESRD: dialysis ก่อนผ่าตัดป้องกัน uremic bleeding","ควรฟอกก่อนผ่าตัดประมาณ 1 วัน","uremic bleeding = platelet dysfunction","เลือดออกหรือผ่าตัดด่วน: desmopressin, cryoprecipitate"],
  tags:["Pre-op & post-op","Hemostasis & transfusion"], outside:"นอกสไลด์: desmopressin สำหรับ uremic bleeding ไม่ได้อยู่ในสไลด์",
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 14 (= jod หน้า 15) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:118, stem:"A 66-year-old man with asymptomatic stable single-vessel coronary disease is scheduled for an elective colectomy for cancer. A surgeon suggests percutaneous coronary intervention first to lower the chance of perioperative myocardial infarction. According to current perioperative guidance, which is most appropriate?",
  opts:["Percutaneous coronary intervention for every patient with coronary disease","Proceed and revascularize only for the usual indications","Coronary artery bypass grafting before the colectomy","Delay the colectomy for twelve months after stenting","Routine stress test followed by angiography"], ans:1,
  notes:"ลายมือไฟล์ 78 หน้า 26 เขียนข้างหัวข้อ Perioperative myocardial infarction ว่า <b>\"ถ้าโอกาสเสี่ยง MI → อาจทำ PCI ก่อน\"</b>",
  kimg:["l12_p26","l12b_p24"],
  interp:"ถามว่าควร PCI หรือ revascularize ก่อนผ่าตัดทุกรายหรือไม่ ผู้ป่วยเสถียรและไม่มีอาการ",
  why:"2024 AHA/ACC: revascularization ก่อนผ่าตัดทำเฉพาะข้อบ่งชี้เดิม (เช่น ACS, left main >50%) ไม่ได้ลด periop risk ในผู้ป่วยทั่วไป ⚠ ลายมือ 78 'อาจทำ PCI ก่อน' ใช้ได้เฉพาะกรณีที่มีข้อบ่งชี้นั้น ผู้ป่วยเสถียรไม่มีอาการและไม่มี ACS หรือ left main จึงไม่เข้าข้อบ่งชี้ จึงผ่าตัดตามแผนได้โดยคุม GDMT และต่อ aspirin เมื่อทำได้",
  wrong:["การทำ PCI ทุกรายไม่ลด risk และเพิ่มความล่าช้า — จะถูกถ้ามี ACS หรือ left main >50%","CABG ก่อนผ่าตัดไม่ได้แนะนำในผู้ป่วยเสถียร — จะถูกถ้ามี left main disease","การรอ 12 เดือนใช้หลัง DES จาก ACS และไม่เหมาะกับมะเร็ง — จะถูกถ้าเพิ่งใส่ DES หลัง ACS","ไม่ต้อง stress test + angiography routine — จะถูกถ้ามีอาการหรือ capacity ต่ำและผลเปลี่ยนการรักษา"],
  trap:"ลายมือ 'อาจทำ PCI ก่อน' ไม่ได้แปลว่าต้องทำทุกราย",
  summary:["Revascularization ก่อนผ่าตัด ทำตามข้อบ่งชี้ปกติเท่านั้น เช่น ACS หรือ left main >50%", "ไม่ลด periop risk ในผู้ป่วยโรคหลอดเลือดหัวใจเสถียรทั่วไป", "ลายมือ 78 \"อาจทำ PCI ก่อน\" ใช้ได้เฉพาะกรณีมีข้อบ่งชี้ ⚠", "ต่อ aspirin และ statin เมื่อทำได้ ตาม 2024 AHA/ACC"],
  tags:["Pre-op & post-op"], outside:"นอกสไลด์: ข้อบ่งชี้ revascularization ก่อนผ่าตัดตาม 2024 AHA/ACC",
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 26 (= jod หน้า 24) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:119, stem:"Before an elective operation, an anesthesiologist reviews a patient's chart and counts risk factors from the revised cardiac risk index shown in the lecture. Which of the following is NOT one of the clinical risk factors listed?",
  opts:["Heart failure","Stroke or transient ischemic attack","Diabetes requiring insulin therapy","Serum creatinine above 2 mg/dL","Hypertension on three medications"], ans:4,
  notes:"สไลด์ไฟล์ 78 หน้า 29 (ESC 2022 Table 4) พิมพ์ว่า <b>\"Ischaemic heart disease · Heart failure · Stroke or TIA · Renal dysfunction (serum creatinine >170 µmol/L or 2 mg/dL) · Diabetes mellitus requiring insulin therapy\"</b>",
  kimg:["l12_p29"],
  interp:"โจทย์ถามข้อที่ไม่อยู่ในรายการ RCRI",
  why:"สไลด์ 78 หน้า 29 (ESC 2022 Table 4) พิมพ์ RCRI 5 ข้อคือ ischaemic heart disease, heart failure, stroke/TIA, renal dysfunction (Cr >170 µmol/L หรือ 2 mg/dL) และ DM ที่ต้องใช้ insulin ไม่มี hypertension ในรายการ แม้ HTN พบบ่อยมากและเป็น CV risk factor ใน algorithm ของ ESC แต่ไม่ใช่ข้อของ RCRI",
  wrong:["HF เป็นข้อที่ 2 ของ RCRI ใน Table 4 จะถูกถ้าโจทย์ถามข้อที่เป็น RCRI", "stroke หรือ TIA เป็นข้อที่ 3 ของ RCRI จะถูกถ้าถามข้อที่นับ", "DM ที่ต้องรักษาด้วย insulin เป็นข้อที่ 5 ของ RCRI จะถูกถ้าถามข้อที่นับ", "Cr >2 mg/dL (170 µmol/L) เป็นข้อที่ 4 ของ RCRI จะถูกถ้าถามข้อที่นับ"],
  trap:"HTN พบบ่อยจึงมักถูกนับผิด แต่ไม่ใช่ข้อของ RCRI",
  summary:["RCRI 5 ข้อ: IHD, HF, stroke/TIA, Cr >2 mg/dL, DM on insulin", "HTN เป็น CV risk factor ทั่วไป แต่ไม่นับเป็นคะแนน RCRI", "COPD อายุ และสูบบุหรี่ ก็ไม่นับใน RCRI", "DM ต้องใช้ insulin จึงจะนับ"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 29 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:120, stem:"A 70-year-old man with type 2 diabetes controlled by metformin and serum creatinine 2.4 mg/dL has no other illness. Before a planned elective laparotomy, how many revised cardiac risk index factors from the lecture does he have?",
  opts:["One","Two","Three","Four","None"], ans:0,
  notes:"สไลด์ไฟล์ 78 หน้า 29 พิมพ์ว่า <b>\"Renal dysfunction (serum creatinine >170 µmol/L or 2 mg/dL …)\"</b> และ <b>\"Diabetes mellitus requiring insulin therapy\"</b>",
  kimg:["l12_p29"],
  interp:"DM ที่ไม่ใช้ insulin ไม่นับ แต่ Cr 2.4 เกิน 2 mg/dL",
  why:"สไลด์ 78 หน้า 29 ระบุ \"Renal dysfunction (serum creatinine >170 µmol/L or 2 mg/dL ...)\" นับ 1 ข้อ ส่วน \"Diabetes mellitus requiring insulin therapy\" ต้องใช้ insulin จึงนับ ผู้ป่วยกิน metformin จึงไม่นับ DM ผู้ป่วยมี Cr 2.4 mg/dL ซึ่งเกิน 2 mg/dL จึงได้ RCRI 1 คะแนนเท่านั้น",
  wrong:["2 ข้อจะถูกถ้าเขาใช้ insulin รักษา DM อยู่", "3 ข้อจะถูกถ้าเขามี Cr สูง ใช้ insulin และเคยเป็น stroke ด้วย", "4 ข้อจะถูกถ้ามี IHD, HF, Cr สูง และ DM on insulin ครบ", "ไม่มีข้อเลยจะถูกถ้า Cr ปกติ และ DM คุมด้วยยากินจึงไม่นับ"],
  trap:"DM นับเฉพาะรายที่ต้องใช้ insulin",
  summary:["RCRI นับ renal dysfunction เมื่อ Cr >2 mg/dL (>170 µmol/L)", "DM นับเฉพาะรายที่ต้องใช้ insulin ไม่นับยากินอย่าง metformin", "ผู้ป่วยตัวอย่างมี 1 คะแนนจาก Cr", "RCRI คะแนนสูงขึ้น ความเสี่ยง MACE สูงขึ้น"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 29 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:121, stem:"A 60-year-old woman with diabetes treated with insulin and a stroke two years ago is scheduled for elective surgery. She also has hypertension and hyperlipidemia on treatment. How many risk factors from the revised cardiac risk index listed in the lecture does she have?",
  opts:["Two","One","Three","Four","None"], ans:0,
  notes:"สไลด์ไฟล์ 78 หน้า 29 พิมพ์ว่า <b>\"Stroke or transient ischaemic attack\"</b> และ <b>\"Diabetes mellitus requiring insulin therapy\"</b>",
  kimg:["l12_p29"],
  interp:"นับเฉพาะ stroke และ DM on insulin; HTN และ hyperlipidemia ไม่อยู่ใน RCRI",
  why:"สไลด์ 78 หน้า 29 ระบุ stroke หรือ TIA และ DM ที่ต้องใช้ insulin เป็นข้อของ RCRI ผู้ป่วยหญิงมี stroke เมื่อ 2 ปีก่อน 1 ข้อ และใช้ insulin 1 ข้อ รวม 2 ข้อ ส่วน HTN และ hyperlipidemia แม้จะรักษาอยู่ก็ไม่อยู่ในรายการ RCRI จึงไม่นับ",
  wrong:["1 ข้อจะถูกถ้าเธอเป็น DM แต่คุมด้วยยากินหรือไม่เคยเป็น stroke", "3 ข้อจะถูกถ้านับ HTN เป็นข้อ ซึ่ง RCRI ไม่นับ หรือเธอมี HF ร่วมด้วย", "4 ข้อจะถูกถ้านับ HTN และไขมันสูงผิด หรือมี IHD กับ Cr สูงเพิ่ม", "ไม่มีข้อเลยจะถูกถ้าเธอไม่มี stroke และ DM ไม่ใช้ insulin"],
  trap:"HTN และ hyperlipidemia ไม่นับ",
  summary:["stroke หรือ TIA เป็นข้อของ RCRI แม้เกิดขึ้นเมื่อปีก่อน ๆ", "DM on insulin นับ 1 ข้อ", "HTN และ hyperlipidemia ไม่นับ", "ผู้ป่วยตัวอย่างได้ 2 คะแนน"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 29 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:122, stem:"A 66-year-old man with non-valvular atrial fibrillation takes warfarin and is scheduled for elective inguinal hernia repair next month. According to the handwritten note in the jod handout, how long before surgery should warfarin be stopped?",
  opts:["The morning of surgery","1 to 2 days","12 to 24 hours","5 to 7 days","At least 3 months"], ans:3,
  notes:"สไลด์ไฟล์ jod หน้า 33 พิมพ์ว่า <b>\"Oral Anticoagulant: Vitamin K antagonist, Direct oral anticoagulant\"</b><br>ลายมือ jod หน้า 9 เขียนว่า <b>\"หยุด warfarin 5-7 วันก่อนผ่า\"</b>",
  kimg:["l12b_p33","l12b_p9"],
  interp:"ถามเวลาหยุด warfarin (vitamin K antagonist) ก่อนผ่าตัด elective",
  why:"ลายมือ jod หน้า 9 เขียนข้าง Vit K antagonist ว่า \"หยุด warfarin 5-7 วันก่อนผ่า\" และสไลด์ jod หน้า 33 พิมพ์ว่า Oral Anticoagulant: Vitamin K antagonist, Direct oral anticoagulant ตัวเลข 5–7 วันมาจากลายมือ jod ส่วน CHEST 2022 แนะนำหยุด warfarin ประมาณ 5 วันก่อนผ่าตัด และไม่ต้อง bridging ในผู้ป่วย AF เพื่อให้ INR ลดลงสู่ระดับผ่าตัดได้",
  wrong:["ผ่าตัดเช้าวันเดียวกันขณะ INR ยังสูงจะเลือดออกมาก จะถูกถ้าเป็นผ่าตัดฉุกเฉินที่ให้ vitamin K หรือ PCC", "1–2 วันคือเวลาของ DOAC ตามลายมือ jod จะถูกถ้าเขากิน rivaroxaban หรือ apixaban ไตปกติ", "12–24 ชั่วโมงคือเวลาของ LMWH ตามลายมือ จะถูกถ้าเขาได้ enoxaparin", "3 เดือนนานเกินไปและเสี่ยง stroke จะถูกถ้าเป็นการเลื่อนผ่าตัด elective หลัง VTE เฉียบพลัน"],
  trap:"warfarin ต้องหยุดนานกว่า DOAC",
  summary:["warfarin หยุด 5–7 วันตามลายมือ jod (CHEST 2022 ประมาณ 5 วัน)", "DOAC หยุด 1–2 วัน, UFH หยุด 5 ชั่วโมง, LMWH หยุด 12–24 ชั่วโมง", "AF ที่ใช้ warfarin และ DOAC ไม่ต้อง bridging ตาม CHEST 2022", "ต้องหยุดนานเพื่อให้ INR ลดลงก่อนผ่าตัด"], tags:["Pre-op & post-op","Hemostasis & transfusion"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 33 + 9 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:123, stem:"A 72-year-old woman with normal renal function takes rivaroxaban for atrial fibrillation and is scheduled for an elective cholecystectomy. According to the handwritten note in the jod handout, how long before surgery is the direct oral anticoagulant stopped?",
  opts:["5 to 7 days","12 to 24 hours","1 to 2 days","5 hours","3 weeks"], ans:2,
  notes:"สไลด์ไฟล์ jod หน้า 33 พิมพ์ว่า <b>\"Oral Anticoagulant: Vitamin K antagonist, Direct oral anticoagulant\"</b><br>ลายมือ jod หน้า 9 เขียนว่า <b>\"หยุด DOAC 1-2 วันก่อนผ่า\"</b>",
  kimg:["l12b_p33","l12b_p9"],
  interp:"Rivaroxaban คือ DOAC",
  why:"ลายมือ jod หน้า 9 เขียนข้าง DOAC ว่า \"หยุด DOAC 1-2 วันก่อนผ่า\" ตัวเลขนี้มาจากลายมือ jod ส่วน CHEST 2022 แนะนำ 1 วันก่อนผ่าตัดที่เสี่ยงเลือดออกต่ำ และ 2 วันสำหรับเสี่ยงเลือดออกสูง ผู้ป่วยกิน rivaroxaban ซึ่งเป็น DOAC ไตปกติ จึงหยุดสั้นกว่า warfarin และไม่ต้อง bridging",
  wrong:["5–7 วันคือเวลาของ warfarin จะถูกถ้าผู้ป่วยกิน warfarin เพื่อ AF", "12–24 ชั่วโมงคือเวลาของ LMWH จะถูกถ้าเธอได้ enoxaparin ฉีด", "5 ชั่วโมงคือเวลาของ UFH ทางหลอดเลือด จะถูกถ้าเธอได้ heparin drip", "3 สัปดาห์นานเกินไปโดยไม่มีเหตุผล จะถูกถ้ามีภาวะ AKI ที่กำจัดยาช้ามาก"],
  trap:"อย่าสับสนระหว่าง DOAC กับ warfarin",
  summary:["DOAC หยุด 1–2 วันก่อนผ่าตัด (ลายมือ jod) และ CHEST 2022 1 หรือ 2 วันตามความเสี่ยงเลือดออก", "warfarin ต้องหยุดนานกว่า คือ 5–7 วัน", "DOAC ไม่ต้อง bridging", "UFH 5 ชั่วโมง, LMWH 12–24 ชั่วโมง"], tags:["Pre-op & post-op","Hemostasis & transfusion"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 33 + 9 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:124, stem:"A resident is explaining exercise capacity to a patient before elective surgery and quotes the lecture definition of one metabolic equivalent. Which statement correctly defines one MET?",
  opts:["Heart rate of 100 beats per minute during exercise","Oxygen saturation of 95 percent while breathing room air","Oxygen consumed climbing one flight of stairs","Oxygen uptake of walking on level ground at 4 mph","Resting oxygen uptake of 3.5 mL per kg per minute while sitting"], ans:4,
  notes:"สไลด์ไฟล์ 78 หน้า 31 พิมพ์ว่า <b>\"1 MET = 3.5 mL O2 uptake/kg per min (resting O2 uptake in a sitting position)\"</b>",
  kimg:["l12_p31","l12b_p26"],
  interp:"ถามนิยามของ 1 MET",
  why:"สไลด์ 78 หน้า 31 (และ jod หน้า 26) พิมพ์ว่า \"1 MET = 3.5 mL O2 uptake/kg per min (resting O2 uptake in a sitting position)\" ลายมือ 78 เขียนว่า METs มักใช้บอก functional class ดังนั้นหน่วย MET อ้างอิงกับการใช้ออกซิเจนขณะพักท่านั่ง ส่วนกิจกรรมอย่างขึ้นบันได 1 ช่วงหรือเดิน 4 mph คือตัวอย่างของ 4 METs",
  wrong:["HR 100 ต่อนาทีไม่เกี่ยวกับนิยาม MET จะถูกถ้าโจทย์ถามเกณฑ์ tachycardia", "SpO2 95% เป็นค่าวัดออกซิเจนในเลือด ไม่ใช่การใช้ออกซิเจนของร่างกาย จะถูกถ้าถามการประเมิน hypoxemia", "ขึ้นบันได 1 ช่วงเท่ากับ 4 METs ไม่ใช่ 1 MET จะถูกถ้าโจทย์ถามตัวอย่างของ 4 METs", "เดินพื้นราบ 4 mph เท่ากับ 4 METs ไม่ใช่ 1 MET จะถูกถ้าถามตัวอย่างกิจกรรมที่ถึง 4 METs"],
  trap:"นิยามเป็นค่าตอนพัก ไม่ใช่ค่าตอนออกกำลัง",
  summary:["1 MET = 3.5 mL O2/kg/min ขณะพักท่านั่ง", "4 METs = ขึ้นบันได 1 ช่วงหรือเดิน 4 mph (6.4 km/h)", "Unlimited exercise tolerance โดยทั่วไป risk ต่ำมาก", "ใช้ METs แบ่ง functional class ก่อนผ่าตัด"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 31 (= jod หน้า 26) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:125, stem:"A 59-year-old woman is assessed before elective surgery. She tells you she climbs to the second floor of her house every day without becoming breathless. According to the handwriting in the lecture, what functional capacity does this correspond to?",
  opts:["Below 4 METs","Above 10 METs","About 4 METs","Unknown capacity","About 1 MET"], ans:2,
  notes:"ลายมือไฟล์ 78 หน้า 32 เขียนว่า <b>\"เดินขึ้นบ้าน 2 ชั้นได้ไม่หอบ → 4 METs\"</b> และ <b>\">4 METs → OK!\"</b><br>ลายมือ jod หน้า 27 เขียนว่า <b>\"เดินขึ้นชั้น 2 โดยไม่หอบ, ไม่เหนื่อย\"</b>",
  kimg:["l12_p32","l12b_p27"],
  interp:"ขึ้นบ้าน 2 ชั้นได้ไม่หอบ = เทียบ climb a flight of stairs",
  why:"ลายมือ 78 หน้า 32 เขียนว่า \"เดินขึ้นบ้าน 2 ชั้นได้ไม่หอบ → 4 METs\" และลายมือ jod หน้า 27 เขียน \"เดินขึ้นชั้น 2 โดยไม่หอบ, ไม่เหนื่อย\" ที่ 4 METs ซึ่งเทียบกับข้อ climb a flight of stairs ในสไลด์ ผู้ป่วยขึ้นชั้นสองทุกวันไม่หอบ จึงมี capacity ประมาณ 4 METs ถือว่าดีพอสำหรับผ่าตัด",
  wrong:["ต่ำกว่า 4 METs คือขึ้นบันไดไม่ไหว จะถูกถ้าเธอเหนื่อยตั้งแต่ครึ่งชั้น", "มากกว่า 10 METs ต้องออกกำลังหนักมาก เช่น วิ่งหรือกีฬาหนัก จะถูกถ้าเธอวิ่งมาราธอนได้", "capacity ไม่ใช่ unknown เพราะผู้ป่วยให้ประวัติชัด จะถูกถ้าเธอไม่เคยขึ้นบันไดและไม่ทราบว่าทำได้หรือไม่", "1 MET คือขณะพักนั่งเฉย จะถูกถ้าเธอเดินไม่ได้และต้องนอนติดเตียง"],
  trap:"บ้าน 2 ชั้นเท่ากับขึ้นบันไดหนึ่งช่วง ไม่ใช่สองช่วง",
  summary:["เดินขึ้นบ้าน 2 ชั้นไม่หอบ ≈ ขึ้นบันได 1 ช่วง ≈ 4 METs", "4 METs เป็นจุดตัดของ functional capacity ดี", "≥4 METs ผ่าตัดได้ ไม่ต้องตรวจหัวใจเพิ่ม", "ขึ้นบันได 2 ช่วงไม่ได้ ให้ข้อมูลเสี่ยงเพิ่มเหนือ RCRI"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 32 (= jod หน้า 27) · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod"}),
U({n:126, stem:"A 63-year-old man has one revised cardiac risk index factor and reports that he cannot climb two flights of stairs. Compared with using the RCRI alone, how does this inability influence the estimate of his 30-day cardiac event rate?",
  opts:["It lowers the estimated risk below the RCRI score","It adds incremental predictive value to the RCRI","It has no predictive value beyond the RCRI","It replaces the RCRI completely","It matters only in emergency surgery"], ans:1,
  notes:"สไลด์ไฟล์ 78 หน้า 32 พิมพ์ว่า <b>\"inability to climb two flights of stairs added incremental value to the 30-day cardiac event rate when added to the RCRI\"</b>",
  kimg:["l12_p32"],
  interp:"ถามว่าความสามารถในการขึ้นบันไดเพิ่มข้อมูลเหนือ RCRI หรือไม่",
  why:"สไลด์ 78 หน้า 32 ท้ายหน้าพิมพ์ว่า \"inability to climb two flights of stairs added incremental value to the 30-day cardiac event rate when added to the RCRI\" ผู้ป่วยมี RCRI 1 ข้อและขึ้นบันได 2 ช่วงไม่ได้ จึงมีความเสี่ยงสูงกว่าที่คะแนน RCRI อย่างเดียวบอก ข้อมูล capacity จึงใช้ร่วมกับ RCRI ไม่ได้แทนที่",
  wrong:["ความเสี่ยงไม่ได้ต่ำลง ตรงข้ามกับสไลด์ จะถูกถ้าเขาขึ้นบันไดได้ดีมากแล้ว risk ต่ำกว่าที่คาด", "สไลด์กล่าวว่า capacity เพิ่มข้อมูลเหนือ RCRI จึงไม่ใช่ไม่มีคุณค่า จะถูกถ้าใช้ผู้ป่วยที่ตรวจ stress test ผิดปกติอยู่แล้ว", "RCRI ยังใช้ต่อ ไม่ได้ถูกแทนที่ จะถูกถ้ามีเครื่องมืออื่น เช่น NSQIP ที่ใช้ตัวแปรหลายตัวกว่า", "ใช้ได้ใน elective surgery ทุกชนิด ไม่เฉพาะ emergency จะถูกถ้าโจทย์ถามผ่าตัดฉุกเฉินที่ไม่มีเวลาประเมิน"],
  trap:"อย่าใช้ RCRI อย่างเดียวโดยไม่ถาม functional capacity",
  summary:["Unlimited exercise tolerance = risk ต่ำมาก","ขึ้นบันได 2 ช่วงไม่ได้ เพิ่ม incremental value ต่อ RCRI","ใช้ร่วมกับ RCRI ไม่ใช่แทนที่"],
  tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 32 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:127, stem:"The revised cardiac risk index in the lecture lists five clinical risk factors, whereas the original index described by Lee in 1999 had six. Which additional factor was included in the original index?",
  opts:["Age above 70 years","High-risk surgery","Hypertension","Cigarette smoking","Obesity"], ans:1,
  notes:"สไลด์ไฟล์ 78 หน้า 29 พิมพ์ว่า <b>\"ESC 2022 Table 4 — Clinical risk factors according to the revised cardiac risk index\"</b> (5 ข้อ) และ Table 5 แยกชนิดผ่าตัด",
  kimg:["l12_p29","l12_p12"],
  interp:"ถามข้อที่ 6 ของ RCRI ต้นฉบับ ซึ่ง ESC 2022 แยกไปไว้ในตารางชนิดผ่าตัด",
  why:"สไลด์ 78 หน้า 29 ใช้ ESC 2022 Table 4 ที่มี RCRI 5 ข้อ แต่ RCRI ต้นฉบับของ Lee 1999 มี 6 ข้อ ข้อที่เพิ่มคือ high-risk surgery (intraperitoneal, intrathoracic, suprainguinal vascular) ESC 2022 แยกประเมินชนิดผ่าตัดไว้ใน Table 5 (low <1%, intermediate 1–5%, high >5%) จึงเหลือ 5 ข้อในตาราง",
  wrong:["อายุ >70 ปีไม่ใช่ข้อของ RCRI จะถูกถ้าโจทย์ถามเครื่องมืออย่าง ASA หรือ NSQIP ที่ใช้อายุ", "HTN ไม่ใช่ข้อของ RCRI ไม่ว่าฉบับใด จะถูกถ้าโจทย์ถามปัจจัยเสี่ยง CV ทั่วไป", "การสูบบุหรี่เป็นปัจจัยเสี่ยงของ pulmonary complication ไม่ใช่ RCRI จะถูกถ้าถามความเสี่ยงปอด", "โรคอ้วนไม่ใช่ข้อของ RCRI แต่เป็นความเสี่ยงของ pulmonary complication จะถูกถ้าถามตามลายมือ jod หน้า 29"],
  trap:"ESC 2022 แยกชนิดผ่าตัดออกจาก RCRI",
  summary:["RCRI ต้นฉบับ (Lee 1999) มี 6 ข้อ = 5 ข้อ + high-risk surgery", "high-risk surgery = intraperitoneal, intrathoracic, suprainguinal vascular", "ESC 2022 แยกชนิดผ่าตัดไปไว้ใน Table 5 จึงเหลือ RCRI 5 ข้อ", "แต่ละข้อ 1 คะแนน คะแนนมากเสี่ยง MACE สูง"], tags:["Pre-op & post-op"], outside:"นอกสไลด์: ข้อที่ 6 ของ RCRI ต้นฉบับไม่ได้พิมพ์ในสไลด์",
  src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 29 + 12 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:128, stem:"A 57-year-old woman who exercises vigorously every day and has unlimited exercise tolerance without symptoms is scheduled for an elective abdominal operation. According to the lecture, how is her cardiac risk characterized?",
  opts:["Generally very low risk","Moderate risk until troponin is measured","High risk because of her age","Unknown without echocardiography","Equal to a sedentary patient"], ans:0,
  notes:"สไลด์ไฟล์ 78 หน้า 31 พิมพ์ว่า <b>\"Unlimited exercise tolerance generally have a very low risk\"</b>",
  kimg:["l12_p31","l12b_p26"],
  interp:"ออกกำลังได้ไม่จำกัด = functional capacity ยอดเยี่ยม",
  why:"สไลด์ 78 หน้า 31 และ jod หน้า 26 พิมพ์ว่า \"Unlimited exercise tolerance generally have a very low risk\" ผู้ป่วยออกกำลังกายหนักทุกวันโดยไม่มีอาการ มี functional capacity ยอดเยี่ยม (>10 METs) จึงถือว่าความเสี่ยงหัวใจต่ำมาก ไม่ต้องตรวจเพิ่มก่อนผ่าตัด elective ตามหลักของทุก algorithm",
  wrong:["ไม่ต้องรอ troponin เมื่อ capacity ดี จะถูกถ้าเธอมีอาการเจ็บอกหรือเป็น ACS ที่ต้องตรวจก่อน", "อายุ 57 ปีอย่างเดียวไม่ทำให้เสี่ยงสูงเมื่อ capacity ดี จะถูกถ้าเธอมี RCRI หลายข้อ", "ไม่ต้อง echo เพราะ capacity ดีมากแล้ว จะถูกถ้ามี murmur ใหม่หรืออาการ HF", "capacity ที่ดีแตกต่างจากคนไม่ออกกำลังอย่างมาก จะถูกถ้าเธอนั่งนิ่งและเหนื่อยง่าย"],
  trap:"",
  summary:["Unlimited exercise tolerance → very low risk", "functional capacity เป็นขั้นหลักใน algorithm ทุกฉบับ", "capacity >10 METs ไม่ต้อง testing เพิ่ม", "capacity ต่ำ (<4 METs) จึงพิจารณาตรวจเพิ่มถ้าผลเปลี่ยนการดูแล"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 31 (= jod หน้า 26) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:129, stem:"A 68-year-old man with coronary stents placed several years ago takes aspirin 81 mg daily and is scheduled for an elective cholecystectomy. A handwritten note in one handout says to stop aspirin 7 days before surgery. According to current perioperative guidance, what is most appropriate?",
  opts:["Stop aspirin for 7 days before surgery","Stop aspirin for 3 days and bridge with heparin","Replace aspirin with warfarin before surgery","Continue aspirin through the perioperative period","Stop aspirin and start clopidogrel instead"], ans:3,
  notes:"ลายมือไฟล์ jod หน้า 9 เขียนข้าง Aspirin ว่า <b>\"= หยุด 7 วันก่อนผ่า\"</b> และ Clopidogrel <b>\"= หยุด 5-7 วันก่อนผ่า\"</b><br>สไลด์ jod หน้า 33 พิมพ์ว่า <b>\"Antiplatelet: Aspirin, Clopidogrel\"</b>",
  kimg:["l12b_p9","l12b_p33","l12_p8"],
  interp:"ผู้ป่วยมี stent กิน aspirin ผ่าตัด elective ทั่วไป — ลายมือ 7 วันขัดกับแนวทางปัจจุบัน",
  why:"⚠ ไม่ตรงกัน: ลายมือ jod หน้า 9 เขียนข้าง Aspirin ว่า \"= หยุด 7 วันก่อนผ่า\" แต่แนวทางปัจจุบัน CHEST 2022 และ 2024 AHA/ACC แนะนำให้ต่อ aspirin ในผ่าตัด elective non-cardiac ส่วนใหญ่ โดยเฉพาะผู้ป่วยมี coronary stent เพราะเสี่ยง stent thrombosis และ MI มากกว่าเลือดออกที่เพิ่มเล็กน้อย จึงตอบต่อ aspirin",
  wrong:["การหยุด 7 วันเป็นแนวเก่า เพิ่มความเสี่ยง stent thrombosis จะถูกถ้าผ่าตัด intracranial หรือ spinal ที่เลือดออกเล็กน้อยก็อันตราย", "aspirin ไม่ต้อง bridge ด้วย heparin และ bridging เพิ่มเลือดออก จะถูกถ้ากำลังใช้ warfarin ใน mechanical valve ที่เสี่ยงสูง", "warfarin ไม่ใช่ยาทดแทน aspirin ใน stent และเสี่ยงเลือดออกมาก จะถูกถ้ามี AF ที่ต้อง anticoagulate", "การเปลี่ยนเป็น clopidogrel เพิ่มเลือดออกและต้องหยุด 5–7 วันตามลายมือ จะถูกถ้าแพ้ aspirin"],
  trap:"ลายมือ 'หยุด 7 วัน' เป็นแนวทางเก่า",
  summary:["แนวทางปัจจุบัน ต่อ aspirin ในผ่าตัด elective non-cardiac ส่วนใหญ่","หยุดเฉพาะผ่าตัดที่เลือดออกไม่ได้ เช่น intracranial","clopidogrel ปกติหยุด 5–7 วัน (ตามลายมือ)","⚠ ไฟล์ jod ลายมือเขียน aspirin 7 วัน"],
  tags:["Pre-op & post-op","Hemostasis & transfusion"], outside:"นอกสไลด์: การต่อ aspirin ตาม CHEST 2022 และ 2024 AHA/ACC ไม่ได้อยู่ในสไลด์",
  src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 9 + 33 (= 78 หน้า 8) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:130, stem:"A 64-year-old smoker has had a laparotomy for peritonitis. On postoperative day 2 he breathes shallowly, is reluctant to cough or move, and a chest x-ray shows linear opacities with volume loss at the left base. If this problem is not corrected, which sequence of events does the lecture describe?",
  opts:["Pneumonia, then atelectasis, then prolonged ventilation","Pleural effusion, then empyema, then lung abscess","Bronchospasm, then aspiration, then ARDS","Atelectasis, then pneumonia, then prolonged ventilation","Atelectasis, then pulmonary embolism, then respiratory failure"], ans:3,
  notes:"สไลด์ไฟล์ 78 หน้า 33 พิมพ์ว่า <b>\"Atelectasis → Pneumonia → Prolonged mechanical ventilation support\"</b><br>ลายมือ 78 <b>\"ถ้าไม่ได้รับการแก้ไข\"</b> ที่ลูกศรไป Pneumonia และ <b>\"ใส่ tube\"</b> ที่ลูกศรไป Prolonged MV",
  kimg:["l12_p33","l12b_p28"],
  interp:"หลังผ่าตัดช่องท้องส่วนบน หายใจตื้น ภาพรังสีมี volume loss ที่ฐานปอด",
  why:"สไลด์ 78 หน้า 33 และ jod หน้า 28 พิมพ์ลำดับ \"Atelectasis → Pneumonia → Prolonged mechanical ventilation support\" ลายมือ 78 เขียน \"ถ้าไม่ได้รับการแก้ไข\" ที่ลูกศรไป pneumonia และ \"ใส่ tube\" ที่ลูกศรไป prolonged MV ผู้ป่วยสูบบุหรี่ ผ่าตัดช่องท้องส่วนบน หายใจตื้น ภาพรังสีมี volume loss จึงเริ่มจาก atelectasis",
  wrong:["การเรียง pneumonia ก่อน atelectasis กลับลำดับ จะถูกถ้าเป็น aspiration pneumonia ที่ทำให้ปอดแฟบตามมา", "pleural effusion → empyema → abscess เป็นสายของการติดเชื้อในช่องเยื่อหุ้มปอด จะถูกถ้ามีไข้สูงและน้ำในเยื่อหุ้มปอดหลังปอดบวม", "bronchospasm → aspiration → ARDS ไม่ใช่ลำดับของสไลด์ จะถูกถ้าสำลักตอนใส่ท่อช่วยหายใจ", "PE ไม่ใช่ขั้นต่อจาก atelectasis จะถูกถ้ามีขาบวมข้างเดียวและ SpO2 ตกเฉียบพลัน"],
  trap:"atelectasis เป็นจุดเริ่มต้น ไม่ใช่ผลจาก pneumonia",
  summary:["postoperative pulmonary complication: atelectasis → pneumonia → prolonged MV", "ลายมือ 78: ถ้าไม่ได้รับการแก้ไข → pneumonia, ใส่ tube → prolonged MV", "ลายมือ jod: prolonged MV อาจต้อง tracheostomy", "ป้องกันตั้งแต่ atelectasis ด้วย IS, ไอ, หายใจลึก, คุมปวด"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 33 (= jod หน้า 28) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:131, img:"l12_q131", stem:"A 66-year-old man will undergo an esophagectomy. His anesthesiologist uses the table shown to separate patient-related from procedure-related risk factors for postoperative pulmonary complications. Which combination contains only procedure-related risk factors?",
  opts:["Heart failure and COPD","Abnormal chest x-ray and age at least 60 years","Cigarette use and ASA class 3","Functional dependence and recent respiratory infection","Prolonged surgery and general anesthesia"], ans:4,
  notes:"สไลด์ไฟล์ 78 หน้า 35 พิมพ์ว่า <b>\"PROCEDURE-RELATED: general anesthesia (when compared to neuraxial) · prolonged surgery (>2 hours) · emergency surgery · long-acting neuromuscular blockers · routine nasogastric tubes after abdominal surgery\"</b>",
  kimg:["l12_p35"],
  interp:"ใช้ตารางแยกปัจจัยฝั่งผู้ป่วยกับฝั่งหัตถการ",
  why:"ตารางในสไลด์ 78 หน้า 35 (Decision making in perioperative medicine 2021) แบ่งคอลัมน์ Procedure-related: upper abdominal/aortic/esophageal/neuro/head and neck surgery, general anesthesia (เทียบ neuraxial), prolonged surgery >2 hours, emergency surgery, long-acting NMB และ routine NG tube ส่วน HF, COPD, ASA 3–5, อายุ ≥60, สูบบุหรี่ภายใน 8 สัปดาห์ จัดเป็น patient-related ผ่าตัดนานกับ GA จึงเป็นคู่ที่ถูก",
  wrong:["HF และ COPD อยู่คอลัมน์ patient-related จะถูกถ้าโจทย์ถามปัจจัยที่มาจากผู้ป่วย", "CXR ผิดปกติและอายุ ≥60 ปีเป็น patient-related จะถูกถ้าถามปัจจัยผู้ป่วย", "การสูบบุหรี่ภายใน 8 สัปดาห์และ ASA 3–5 เป็น patient-related จะถูกถ้าถามปัจจัยผู้ป่วย", "functional dependence และ URI ใน 1 เดือนเป็น patient-related จะถูกถ้าถามปัจจัยผู้ป่วย"],
  trap:"ASA class เป็นของผู้ป่วย ไม่ใช่ของหัตถการ",
  summary:["Patient-related: อายุ ≥60, ASA 3–5, สูบบุหรี่ภายใน 8 สัปดาห์, CXR ผิดปกติ, HF, functional dependence, COPD, URI ใน 1 เดือน, OSA", "Procedure-related: upper abdominal, aortic/vascular, esophageal, neurosurgery, head and neck", "GA (เทียบ neuraxial), ผ่าตัด >2 ชั่วโมง, emergency, long-acting NMB, routine NG tube"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 35 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:132, stem:"A 48-year-old woman with morbid obesity is scheduled for an upper abdominal operation. According to the handwritten explanation in the jod handout, why does obesity increase postoperative pulmonary risk?",
  opts:["Chest wall resistance rises and carbon dioxide is retained","Lung compliance increases and airways stay open","Surfactant production increases after anesthesia","Cough strength is greater than normal","Pulmonary vascular resistance falls under anesthesia"], ans:0,
  notes:"ลายมือไฟล์ jod หน้า 29 เขียนข้าง Obesity, especially morbid obesity ว่า <b>\"→ resistance of chest wall ↑, CO2 คั่ง, OSA\"</b>",
  kimg:["l12b_p29"],
  interp:"ถามกลไกที่ลายมือ jod อธิบายความเสี่ยงของโรคอ้วน",
  why:"ลายมือ jod หน้า 29 เขียนข้าง Obesity especially morbid obesity ว่า \"→ resistance of chest wall ↑, CO2 คั่ง, OSA\" ผู้ป่วยอ้วนมากผ่าตัดช่องท้องส่วนบน ผนังทรวงอกหนักทำให้หายใจน้อย CO2 คั่ง และมักมี OSA ร่วม จึงเสี่ยง atelectasis และ pulmonary complication หลังผ่าตัดมากขึ้น",
  wrong:["compliance ในโรคอ้วนลดลงไม่ใช่เพิ่ม จะถูกถ้าโจทย์ถามกลไกของ emphysema ที่ปอดยืดมาก", "surfactant ไม่ใช่กลไกที่ลายมืออธิบาย จะถูกถ้าโจทย์ถาม RDS หรือ ARDS", "ผู้ป่วยอ้วนไอได้อ่อนลง ไม่ใช่แรงกว่าปกติ จะถูกถ้าเป็นนักกีฬาแข็งแรง", "vascular resistance ที่ปอดไม่ใช่กลไกนี้ จะถูกถ้าโจทย์ถามภาวะ pulmonary hypertension จาก OSA เรื้อรัง"],
  trap:"",
  summary:["jod: obesity โดยเฉพาะ morbid obesity เพิ่มความเสี่ยง pulmonary complication", "กลไก: chest wall resistance ↑, CO2 คั่ง, OSA", "upper abdomen/thoracic surgery ทำให้หายใจน้อย → atelectasis", "jod เพิ่ม obesity, asthma และ sputum >2 oz/day จาก 78"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 29 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:133, stem:"A 70-year-old man develops postoperative pneumonia and remains dependent on mechanical ventilation for three weeks with repeated failure of weaning. According to the handwritten addition in the jod handout to prolonged mechanical ventilation, which procedure may be needed?",
  opts:["Tracheostomy","Bronchial stenting","Lobectomy","Chest drain insertion","Thoracotomy"], ans:0,
  notes:"ลายมือไฟล์ jod หน้า 28 เขียนต่อจาก Prolonged mechanical ventilation support ว่า <b>\"→ อาจต้อง tracheostomy\"</b>",
  kimg:["l12b_p28","l12_p33"],
  interp:"Ventilator นาน wean ไม่สำเร็จ",
  why:"ลายมือ jod หน้า 28 เขียนต่อจากกล่อง Prolonged mechanical ventilation support ว่า \"→ อาจต้อง tracheostomy\" ผู้ป่วย pneumonia หลังผ่าตัดที่ต้องใช้เครื่องช่วยหายใจ 3 สัปดาห์และ wean ไม่สำเร็จเข้ากับเหตุการณ์ปลายของลำดับ atelectasis → pneumonia → prolonged MV จึงต้อง tracheostomy",
  wrong:["stent หลอดลมใช้กับตีบหรือเนื้องอก ไม่ใช่ปัญหา wean จะถูกถ้ามี tracheal stenosis จากท่อใส่นาน", "lobectomy ไม่ใช่การรักษา pneumonia ทั่วไป จะถูกถ้ามีเนื้องอกหรือ lung abscess ที่ไม่ตอบสนอง", "chest drain ใช้กับ pneumothorax หรือ pleural effusion จะถูกถ้า CXR พบลมหรือน้ำในเยื่อหุ้มปอด", "thoracotomy ไม่ใช่การรักษา prolonged MV จะถูกถ้ามีเลือดออกในทรวงอกหลังผ่าตัด"],
  trap:"",
  summary:["ลำดับ pulmonary complication: atelectasis → pneumonia → prolonged MV", "ลายมือ jod: prolonged MV อาจต้อง tracheostomy", "แก้ที่ต้นเหตุด้วย lung expansion ป้องกัน atelectasis", "ถ้าไม่แก้ไขต้องใส่ท่อช่วยหายใจ"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 28 (= 78 หน้า 33) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:134, stem:"A 62-year-old man with a 30-pack-year smoking history is scheduled for an elective inguinal hernia repair. The resident wants to order spirometry as a routine preoperative test. Which statement from the lecture is most appropriate?",
  opts:["Spirometry is required for every smoker","Spirometry is not routine for non-thoracic surgery","Spirometry should replace the clinical assessment","Spirometry is needed before every hernia repair","Spirometry should be done only after the operation"], ans:1,
  notes:"สไลด์ไฟล์ 78 หน้า 36 พิมพ์ว่า <b>\"Not routine use in nonthoracic surgery\"</b> และ <b>\"Clinical findings are more predictive of the risk of postoperative pulmonary complication than are spirometric results\"</b><br>ลายมือ 78 <b>\"ถ้าไม่ได้จะไปตัดปอด → ดูแลเหมือนกัน ∴ PFT ไม่จำเป็น\"</b>",
  kimg:["l12_p36","l12b_p30"],
  interp:"ผ่าตัดไส้เลื่อนไม่ใช่ผ่าตัดทรวงอก",
  why:"สไลด์ 78 หน้า 36 พิมพ์ว่า \"Not routine use in nonthoracic surgery\" และ \"Clinical findings are more predictive of the risk of postoperative pulmonary complication than are spirometric results\" ลายมือ 78 เขียนว่าถ้าไม่ได้ตัดปอดก็ดูแลเหมือนเดิม PFT จึงไม่จำเป็น และ PFT สงวนไว้ให้ dyspnea ที่อธิบายไม่ได้หลังประเมินละเอียด ผู้ป่วยสูบบุหรี่ที่ซ่อมไส้เลื่อนจึงไม่ต้องสั่ง routine",
  wrong:["การสูบบุหรี่ไม่ใช่ข้อบ่งชี้ของ PFT จะถูกถ้าเขามี dyspnea ที่ยังอธิบายไม่ได้", "PFT ไม่ได้ใช้แทนการประเมินทางคลินิก ซึ่งทำนายได้ดีกว่า จะถูกถ้าไม่มีข้อมูลทางคลินิก", "ไส้เลื่อนไม่เข้าข้อบ่งชี้ PFT จะถูกถ้ากำลังจะตัดปอดและต้องคาดการณ์ปอดที่เหลือ", "การทำหลังผ่าตัดไม่ช่วยตัดสินใจก่อนผ่าตัด จะถูกถ้าติดตามการฟื้นตัวหลังตัดปอด"],
  trap:"ผู้สูบบุหรี่ ไม่ใช่ข้อบ่งชี้ของ PFT",
  summary:["PFT ไม่ routine ในผ่าตัดนอกทรวงอก","สงวนไว้สำหรับ dyspnea ที่อธิบายไม่ได้หลังประเมินละเอียด","clinical findings ทำนายดีกว่า spirometry","จะตัดปอดจึงทำ PFT"],
  tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 36 (= jod หน้า 30) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:135, stem:"A 62-year-old man with chronic bronchitis is evaluated before elective surgery. The jod handout lists several features of history and examination as risk factors for postoperative pulmonary complications. Which feature is included?",
  opts:["Seasonal allergic rhinitis","Mild intermittent dry cough","Sputum over 2 ounces per day","Previous appendectomy","Childhood measles infection"], ans:2,
  notes:"สไลด์ไฟล์ jod หน้า 29 พิมพ์ว่า <b>\"Risk of pulmonary complication: Older age · Obesity · Smoking · Known pulmonary disease: COPD, asthma · Sputum production exceeding 2 ounces/day\"</b>",
  kimg:["l12b_p29","l12_p34"],
  interp:"ถามข้อที่ jod ระบุเป็น risk",
  why:"สไลด์ jod หน้า 29 พิมพ์ Risk of pulmonary complication: older age, obesity, smoking, known pulmonary disease (COPD, asthma) และ \"Sputum production exceeding 2 ounces/day\" ส่วน 78 หน้า 34 ไม่มีข้อ sputum แต่เพิ่ม OSA, recent respiratory infection, ผ่าตัด >2 ชม. และ emergency ผู้ป่วย chronic bronchitis ที่มีเสมหะมากจึงเข้าข้อนี้",
  wrong:["allergic rhinitis ตามฤดูกาลไม่อยู่ในรายการ risk จะถูกถ้าร่วมกับ asthma ที่ควบคุมไม่ได้", "ไอแห้งเล็กน้อยเป็นระยะไม่ใช่ risk ตามสไลด์ จะถูกถ้ามีเสมหะมากกว่า 2 oz ต่อวัน", "การเคยผ่าตัดไส้ติ่งไม่เกี่ยวกับปอด จะถูกถ้าการผ่าตัดครั้งนี้เป็น upper abdominal", "โรคติดเชื้อวัยเด็กไม่ใช่ risk จะถูกถ้าเป็น recent respiratory infection ใน 1 เดือน"],
  trap:"",
  summary:["jod: older age, obesity, smoking, COPD/asthma, sputum >2 oz/day", "jod: upper abdomen และ thoracic surgery ทำให้หายใจน้อย → atelectasis", "78: อายุ, สูบบุหรี่ 8 สัปดาห์, COPD, OSA, recent URI, ผ่าตัดช่องท้องส่วนบน/ทรวงอก, >2 ชม., emergency", "ข้อที่ตรงกัน: อายุ, smoking, COPD, upper abdomen/thoracic surgery"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 29 (= 78 หน้า 34) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:136, stem:"A 55-year-old man who smokes a pack a day is scheduled for an elective gastrectomy in several months. He asks how long he should abstain from smoking before the operation to reduce postoperative pulmonary complications according to the lecture.",
  opts:["24 hours","8 weeks","3 days","1 week","2 weeks"], ans:1,
  notes:"สไลด์ไฟล์ 78 หน้า 37 พิมพ์ว่า <b>\"Smoking cessation for 8 weeks\"</b> (ไฮไลต์ม่วง)<br>สไลด์ jod หน้า 31 ไฮไลต์เหลือง <b>\"Smoking cessation\"</b> และ <b>\"8 weeks\"</b>",
  kimg:["l12_p37","l12b_p31"],
  interp:"ถามระยะเวลาเลิกบุหรี่ก่อนผ่าตัด",
  why:"สไลด์ 78 หน้า 37 พิมพ์ \"Smoking cessation for 8 weeks\" (ไฮไลต์ม่วง) และ jod หน้า 31 ไฮไลต์เหลืองทั้ง Smoking cessation และ 8 weeks ตารางหน้า 35 ก็ใช้ \"Cigarette use within 8 weeks before surgery\" เป็น patient-related risk ผู้ป่วยมีเวลาหลายเดือนจึงควรเลิกอย่างน้อย 8 สัปดาห์ (นอกสไลด์ ประโยชน์ชัดตั้งแต่ ≥4 สัปดาห์)",
  wrong:["24 ชั่วโมงสั้นเกินไปและเพียงลด carbon monoxide จะถูกถ้าโจทย์ถามผลเฉียบพลันต่อ carboxyhemoglobin", "3 วันสั้นเกินไปที่จะลด pulmonary complication จะถูกถ้าโจทย์ถามผลต่อ CO หรือ nicotine เท่านั้น", "1 สัปดาห์ยังสั้นกว่า 8 สัปดาห์ของสไลด์ และเสมหะอาจมากขึ้นชั่วคราว จะถูกถ้าไม่มีเวลาหยุดนานกว่านี้", "2 สัปดาห์ยังไม่ถึงเกณฑ์ที่สไลด์ระบุ จะถูกถ้าผ่าตัดด่วนและหยุดได้เท่าที่ทันเท่านั้น"],
  trap:"หยุดสั้นเกินไปไม่ได้ลดความเสี่ยงปอดอย่างมีนัยสำคัญ",
  summary:["เลิกบุหรี่ 8 สัปดาห์ก่อนผ่าตัดลด pulmonary complication", "COPD ต้องรักษาให้ดีที่สุดก่อนผ่า", "เลื่อนผ่าตัด elective ถ้ามี viral URI", "หลังผ่า: ไอ, IS, หายใจลึก, คุมปวด, ลุกเดินเร็ว"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 37 (= jod หน้า 31) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:137, stem:"A 40-year-old woman is scheduled for an elective cholecystectomy tomorrow. For two days she has had rhinorrhea, sore throat and a cough with low-grade fever. What does the lecture recommend regarding the operation?",
  opts:["Proceed because the operation is minor","Give prophylactic steroids and proceed","Start intravenous antibiotics and proceed","Delay the elective surgery","Change to regional anesthesia"], ans:3,
  notes:"สไลด์ไฟล์ 78 หน้า 37 พิมพ์ว่า <b>\"Delay elective surgery in the presence of a viral URI\"</b> (ไฮไลต์ม่วง/เหลือง)",
  kimg:["l12_p37","l12b_p31"],
  interp:"อาการ URI เฉียบพลันก่อนผ่าตัด elective",
  why:"สไลด์ 78 หน้า 37 พิมพ์ \"Delay elective surgery in the presence of a viral URI\" และไฮไลต์ทั้ง 78 และ jod หน้า 31 ผู้ป่วยมีน้ำมูก เจ็บคอ ไอ และไข้ต่ำ 2 วัน เป็น viral URI ที่เพิ่มความเสี่ยง pulmonary complication และ airway reactivity ในการดมยาสลบ ผ่าตัดถุงน้ำดีแบบ elective จึงควรเลื่อน",
  wrong:["ผ่าตัดเล็กก็ยังเพิ่มความเสี่ยงปอดจาก URI จะถูกถ้าเป็นผ่าตัดฉุกเฉินที่เลื่อนไม่ได้", "steroid ไม่ใช่มาตรการของสไลด์ จะถูกถ้ามี asthma exacerbation ที่ต้องรักษาก่อน", "การติดเชื้อเป็นไวรัสจึงไม่ใช้ยาปฏิชีวนะ จะถูกถ้ามี bacterial pneumonia ที่ CXR เห็นหนอง", "regional anesthesia ไม่ใช่คำแนะนำของสไลด์ แม้ลดการใช้ GA ได้ จะถูกถ้าเป็นผ่าตัดขาที่ทำ spinal ได้และเลื่อนไม่ได้"],
  trap:"",
  summary:["viral URI → เลื่อน elective surgery", "recent respiratory infection ใน 1 เดือนเป็น patient-related risk", "เลิกบุหรี่ 8 สัปดาห์และรักษา COPD ก่อนผ่า", "ลดการใช้ GA เป็นมาตรการเสริม"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 37 (= jod หน้า 31) · ไม่มีสัญลักษณ์ · ไฮไลต์"}),
U({n:138, img:"l12_q138", stem:"Before an upper abdominal operation a nurse teaches a 60-year-old patient to inhale through the device shown and to raise the balls, and she asks him to use it regularly after surgery. What is the purpose of this device?",
  opts:["To deliver oxygen at a fixed concentration","To measure forced vital capacity for diagnosis","To suction retained secretions from the airway","To administer nebulized bronchodilators","To expand the lungs and prevent atelectasis"], ans:4,
  notes:"สไลด์ไฟล์ 78 หน้า 37 พิมพ์ว่า <b>\"Lung expansion maneuvers such as coughing, incentive spirometry, and voluntary deep breaths\"</b><br>ลายมือ 78 <b>\"incentive spirometry\"</b>, <b>\"ดูดหลังผ่า เพื่อไม่ให้เกิด atelectasis\"</b><br>ลายมือ jod <b>\"→ Triflow → ฝึกก่อนผ่า + ใช้หลังผ่า\"</b>",
  kimg:["l12_p37","l12b_p31"],
  interp:"รูปคือ Triflow incentive spirometer สามลูกบอล",
  why:"รูปคือ Triflow incentive spirometer สามลูกบอล สไลด์ 78 หน้า 37 พิมพ์ lung expansion maneuvers เช่น coughing, incentive spirometry และ voluntary deep breaths ลายมือ 78 เขียนว่า \"ดูดหลังผ่า เพื่อไม่ให้เกิด atelectasis\" และลายมือ jod เขียน \"Triflow → ฝึกก่อนผ่า + ใช้หลังผ่า\" จึงใช้ขยายปอด ไม่ใช่ให้ยาหรือออกซิเจน",
  wrong:["ไม่ได้ส่งออกซิเจน ความเข้มข้นคงที่ใช้หน้ากาก Venturi จะถูกถ้าผู้ป่วย COPD ที่ต้องควบคุม FiO2", "ไม่ได้ใช้วัด FVC เพื่อวินิจฉัย เครื่องนั้นคือ spirometer ใน PFT จะถูกถ้าโจทย์ถามการประเมิน obstructive/restrictive", "ไม่ได้ดูดเสมหะ ต้องใช้ suction catheter จะถูกถ้าผู้ป่วยไอไม่ออกและมีเสมหะค้างมาก", "ไม่ใช่ nebulizer ที่ให้ยา bronchodilator จะถูกถ้าผู้ป่วย asthma หอบหลังผ่าตัด"],
  trap:"incentive spirometer ไม่ใช่เครื่องวัด PFT",
  summary:["Incentive spirometry (Triflow) เป็น lung expansion maneuver", "ฝึกก่อนผ่าตัดและใช้หลังผ่าตัดเพื่อป้องกัน atelectasis", "ร่วมกับไอ หายใจลึก คุมปวด ลุกเดินเร็ว", "IS ไม่ใช่เครื่องวัด PFT"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 37 (= jod หน้า 31) · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod"}),
U({n:139, stem:"A 55-year-old man on postoperative day 1 after a laparotomy lies still, splints his abdomen and takes shallow breaths. Which approach from the lecture best helps him to breathe deeply and avoid pulmonary complications?",
  opts:["Restrict oral intake","Strict bed rest","Analgesia with early mobilization","Chest wall strapping","Sedation with benzodiazepines"], ans:2,
  notes:"สไลด์ไฟล์ 78 หน้า 37 พิมพ์ว่า <b>\"Adequate pain control and early mobilization\"</b><br>ลายมือ jod หน้า 31 เขียนว่า <b>\"∴ pain = หายใจลึกไม่ได้\"</b>",
  kimg:["l12_p37","l12b_p31"],
  interp:"ปวดแผลทำให้หายใจตื้นและไม่ไอ",
  why:"สไลด์ 78 หน้า 37 พิมพ์ \"Adequate pain control and early mobilization\" และลายมือ jod หน้า 31 เขียนว่า \"∴ pain = หายใจลึกไม่ได้\" ผู้ป่วยหลังผ่าตัดเปิดช่องท้องที่นอนนิ่งและกอดท้อง หายใจตื้นเพราะปวด จึงต้องคุมปวดให้พอแล้วกระตุ้นให้ลุกเดินเร็วเพื่อให้หายใจลึกและป้องกัน atelectasis",
  wrong:["การงดน้ำและอาหารไม่ช่วยการหายใจ จะถูกถ้าสงสัย ileus หรือ aspiration risk", "การนอนนิ่งทำให้ atelectasis และ VTE มากขึ้น จะถูกถ้ามี DVT ที่ห้ามลุก", "การรัดอกจำกัดการขยายทรวงอก จะถูกถ้ามีซี่โครงหักที่ต้องประคอง ซึ่งไม่ใช่กรณีนี้", "benzodiazepine กดการหายใจและทำให้ไอไม่ได้ จะถูกถ้าผู้ป่วยกระสับกระส่ายรุนแรงจนอันตรายและติดตามใกล้ชิด"],
  trap:"",
  summary:["หลังผ่าตัด: คุมปวดให้พอและลุกเดินเร็ว", "ปวดทำให้หายใจลึกไม่ได้ (ลายมือ jod)", "ใช้ร่วมกับ IS ไอ และหายใจลึก", "ก่อนผ่าตัด: เลิกบุหรี่ รักษา COPD เลื่อนผ่าถ้า URI"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 37 (= jod หน้า 31) · ไม่มีสัญลักษณ์ · ไฮไลต์ + ลายมือ jod"}),
U({n:140, stem:"A 67-year-old man is scheduled for a lumbar spine operation under spinal anesthesia while taking no anticoagulants. According to the bleeding risk evaluation in the lecture, which preoperative tests are most relevant to this planned anesthetic technique?",
  opts:["aPTT, PT and platelet count","Chest radiograph","Pulmonary function tests","Serum albumin level","Exercise electrocardiogram"], ans:0,
  notes:"สไลด์ไฟล์ 78 หน้า 14 พิมพ์ว่า <b>\"Coagulation: aPTT, PT, Platelet count\"</b> และใน Risk of bleeding มี <b>\"Neuraxial anesthesia, intracranial neurosurgery, major surgery\"</b>",
  kimg:["l12_p14","l12b_p32"],
  interp:"neuraxial anesthesia อยู่ในรายการที่ต้องประเมินเลือดออก",
  why:"สไลด์ 78 หน้า 14 หัวข้อ Coagulation พิมพ์ Test: aPTT, PT, Platelet count และในกล่อง Risk of bleeding มี \"Neuraxial anesthesia, intracranial neurosurgery, major surgery\" ผู้ป่วยที่จะทำ spinal anesthesia จึงควรมี aPTT, PT และ platelet count ปกติก่อน (นอกสไลด์ ตามแนวทาง ASRA เพราะเสี่ยง spinal hematoma)",
  wrong:["CXR ไม่เกี่ยวกับเลือดออกจากการฉีดยาเข้า neuraxial จะถูกถ้ามีโรคปอดหรือหัวใจที่ต้องประเมินก่อน", "PFT ไม่เกี่ยวกับเลือดออก จะถูกถ้ามี dyspnea ที่อธิบายไม่ได้ก่อนผ่าตัดปอด", "albumin ประเมินภาวะโภชนาการ จะถูกถ้าผู้ป่วยน้ำหนักลดมากและสงสัยขาดสารอาหาร", "exercise ECG ประเมินหัวใจ จะถูกถ้ามี capacity ต่ำและผลเปลี่ยนการดูแล"],
  trap:"",
  summary:["Coag tests: aPTT, PT, platelet count", "ตรวจเมื่อมี bleeding risk: ประวัติ FHx, โรคตับ/ไต, ยา antiplatelet/anticoagulant", "neuraxial, intracranial neurosurgery, major surgery เป็นสถานการณ์ที่เข้มงวด", "ไม่ต้องตรวจ routine ในผู้ป่วยทั่วไป"], tags:["Pre-op & post-op","Hemostasis & transfusion"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 14 (= jod หน้า 32) · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:141, stem:"After elective colectomy a surgeon routinely inserts a nasogastric tube in every patient. According to the table in the lecture, how is routine nasogastric tube use after abdominal surgery classified regarding pulmonary complications?",
  opts:["Protective factor that lowers pulmonary risk","A factor with no effect on pulmonary risk","A risk factor only for emergency operations","A procedure-related risk factor","A patient-related risk factor"], ans:3,
  notes:"สไลด์ไฟล์ 78 หน้า 35 พิมพ์ว่า <b>\"PROCEDURE-RELATED RISK FACTORS … Routine use of nasogastric tubes after abdominal surgery\"</b>",
  kimg:["l12_p35"],
  interp:"ถามการจัดกลุ่มใน patient- vs procedure-related",
  why:"ตารางสไลด์ 78 หน้า 35 ใส่ \"Routine use of nasogastric tubes after abdominal surgery\" ไว้ในคอลัมน์ PROCEDURE-RELATED RISK FACTORS ร่วมกับ GA, ผ่าตัด >2 ชั่วโมง, emergency และ long-acting NMB การใส่ NG routine เป็นการกระทำของทีมผ่าตัดที่เพิ่ม risk ของ pulmonary complication จึงควรใช้ NG แบบเลือกใส่เท่านั้น",
  wrong:["NG tube ไม่ได้ลดความเสี่ยงปอด ตารางจัดเป็น risk จะถูกถ้ามีลำไส้อุดตันที่ต้อง decompress เพื่อกัน aspiration", "ตารางระบุว่ามีผลเพิ่ม risk ไม่ใช่ไม่มีผล จะถูกถ้าเป็น NG ที่ใส่เฉพาะราย", "ตารางไม่จำกัดเฉพาะผ่าตัดฉุกเฉิน จะถูกถ้าโจทย์ระบุเป็น emergency surgery ซึ่งเป็นอีกข้อ", "NG tube เป็นการกระทำของทีม ไม่ใช่ลักษณะของผู้ป่วย จะถูกถ้าโจทย์ถามอายุหรือ COPD"],
  trap:"",
  summary:["routine NG tube หลังผ่าตัดช่องท้องเป็น procedure-related risk", "procedure-related อื่น: GA, ผ่าตัด >2 ชั่วโมง, emergency, long-acting NMB", "ควรใส่ NG แบบ selective ไม่ routine", "ตารางจาก Decision making in perioperative medicine 2021"], tags:["Pre-op & post-op"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 35 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:142, stem:"A 45-year-old woman is scheduled for a major abdominal operation. She reports easy bruising and prolonged bleeding after a dental extraction. Which initial laboratory tests are listed in the lecture for evaluating her bleeding risk?",
  opts:["Bleeding time alone","Hemoglobin level only","Liver function tests only","Thrombin time and fibrinogen","aPTT, PT and platelet count"], ans:4,
  notes:"สไลด์ไฟล์ 78 หน้า 14 พิมพ์ว่า <b>\"Coagulation: Test: aPTT, PT, Platelet count\"</b><br>สไลด์ jod หน้า 32: <b>\"Major operation: PTT and platelet count\"</b>",
  kimg:["l12_p14","l12b_p32"],
  interp:"ประวัติ easy bruising และเลือดออกนาน",
  why:"สไลด์ 78 หน้า 14 หัวข้อ Coagulation พิมพ์ \"Test: aPTT, PT, Platelet count\" และ jod หน้า 32 พิมพ์ Major operation: PTT and platelet count ผู้ป่วยมีประวัติ easy bruising และเลือดออกนานหลังถอนฟัน จึงเข้า risk of bleeding และควรส่ง aPTT, PT และ platelet count เป็นชุดแรก ส่วน bleeding time เป็นตรวจเพิ่มตามลายมือ",
  wrong:["bleeding time เป็นการตรวจเพิ่มตามลายมือ ไม่ใช่ตรวจเริ่มต้น จะถูกถ้า aPTT PT และ platelet ปกติแล้วสงสัย vWF disease", "Hb อย่างเดียวบอกความซีดไม่บอกการแข็งตัว จะถูกถ้าถามภาวะซีดก่อนผ่าตัด", "LFT อย่างเดียวไม่ประเมินการแข็งตัว จะถูกถ้าสงสัยโรคตับที่ทำให้ PT ยาว", "thrombin time และ fibrinogen ไม่อยู่ในรายการของสไลด์ จะถูกถ้าสงสัย DIC หรือภาวะ hypofibrinogenemia"],
  trap:"bleeding time เป็นการตรวจเพิ่ม ไม่ใช่ตัวแรก",
  summary:["ชุดตรวจ coag: aPTT, PT, platelet count", "major operation: PTT และ platelet count (jod)", "ตรวจเพิ่มได้ เช่น bleeding time เมื่อสงสัย vWF disease (ลายมือ)", "ไม่ใช่ routine ส่งเมื่อมีประวัติเลือดออก ตับ ไต หรือใช้ยา"], tags:["Pre-op & post-op","Hemostasis & transfusion"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 14 (= jod หน้า 32) · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:143, stem:"A 30-year-old woman with a family history of significant hemorrhage has a normal platelet count, PT and aPTT before an elective operation. According to the handwritten additions in the lecture, which further test and possible diagnosis should be considered?",
  opts:["D-dimer for thrombophilia","Serum ferritin for iron deficiency","Bleeding time for von Willebrand disease","Serum albumin for nutritional status","HbA1c for glycemic control"], ans:2,
  notes:"ลายมือไฟล์ 78 หน้า 14 เขียนว่า <b>\"อาจตรวจอย่างอื่นเพิ่ม e.g. bleeding time\"</b> และ <b>\"e.g vWF disease\"</b> ข้าง Family history of abnormal bleeding",
  kimg:["l12_p14"],
  interp:"ประวัติครอบครัว + coag ปกติ → ตรวจเพิ่ม",
  why:"ลายมือ 78 หน้า 14 เขียนใต้ Risk of bleeding ว่า \"อาจตรวจอย่างอื่นเพิ่ม e.g. bleeding time\" และข้าง Family history ว่า \"e.g vWF disease\" ผู้ป่วยหญิงมีประวัติครอบครัวเลือดออกแต่ platelet, PT และ aPTT ปกติ ซึ่งไม่ตัด vWF disease จึงควรตรวจเพิ่ม เช่น bleeding time",
  wrong:["D-dimer ใช้คัด VTE ไม่ใช่โรคเลือดออกง่าย จะถูกถ้าโจทย์เป็นขาบวมข้างเดียวและสงสัย DVT", "ferritin ประเมินภาวะขาดเหล็ก ไม่ได้ประเมินการห้ามเลือด จะถูกถ้ามีซีดและอ่อนเพลีย", "albumin ประเมินโภชนาการ จะถูกถ้าน้ำหนักลดและสงสัยขาดสารอาหาร", "HbA1c ประเมินการคุมน้ำตาล จะถูกถ้าผู้ป่วยเป็น DM และต้องเตรียมก่อนผ่าตัด"],
  trap:"PT และ aPTT ปกติไม่ตัด vWF disease",
  summary:["ประวัติครอบครัวเลือดออกผิดปกติ → นึกถึง vWF disease", "PT, aPTT, platelet ปกติ ไม่ตัด vWF disease", "ตรวจเพิ่มได้ เช่น bleeding time (ลายมือ 78)", "ชุดแรก: aPTT, PT, platelet count"], tags:["Pre-op & post-op","Hemostasis & transfusion"], src:"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 14 · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:144, stem:"A 55-year-old man with end-stage renal disease on hemodialysis is scheduled for an elective operation. According to the handwritten note in the jod handout, when should dialysis be scheduled relative to surgery?",
  opts:["One day before surgery","On the morning of surgery","Immediately after surgery","One week before surgery","Only if potassium is abnormal"], ans:0,
  notes:"ลายมือไฟล์ jod หน้า 15 เขียนว่า <b>\"(ก่อน Sx 1 day) └ ทำวัน Sx = e'lyte imbalance\"</b> และ <b>\"(GFR <10) └ เสี่ยง uremic bleeding\"</b>",
  kimg:["l12b_p15","l12_p14"],
  interp:"ถามเวลาฟอกเลือดก่อนผ่าตัดใน ESRD",
  why:"ลายมือ jod หน้า 15 เขียนใต้ ESRD ว่า \"ก่อน Sx 1 day\" และ \"ทำวัน Sx = e'lyte imbalance\" รวมทั้ง GFR <10 เสี่ยง uremic bleeding จึงต้อง dialysis ก่อนผ่าตัด สไลด์ 78 หน้า 14 ก็พิมพ์ว่า preoperative dialysis ป้องกัน uremic bleeding ฟอกก่อนผ่าตัด 1 วันเพื่อแก้ uremia และให้ electrolyte และ volume ปรับตัวก่อนผ่า",
  wrong:["ฟอกเช้าวันผ่าตัดทำให้ electrolyte imbalance ตามลายมือ จะถูกถ้ามี hyperkalemia เฉียบพลันที่ต้องฟอกด่วนก่อนเข้าห้องผ่าตัด", "ฟอกหลังผ่าตัดไม่ช่วยป้องกัน uremic bleeding ระหว่างผ่าตัด จะถูกถ้ามี overload หลังผ่าตัดที่ต้องฟอกต่อ", "1 สัปดาห์นานเกินไปจน uremic toxin สะสมใหม่ จะถูกถ้าเป็นรอบฟอกประจำที่ทำสม่ำเสมอ", "ESRD ต้องเตรียมทุกราย ไม่ใช่เฉพาะเมื่อ K ผิดปกติ จะถูกถ้าเป็น CKD ระยะต้นที่ยังไม่ต้องฟอก"],
  trap:"อย่าฟอกวันเดียวกับผ่าตัด",
  summary:["ESRD: dialysis ก่อนผ่าตัด 1 วัน (ลายมือ jod)", "ฟอกวันเดียวกับผ่าตัด → electrolyte imbalance", "GFR <10 เสี่ยง uremic bleeding", "หลีกเลี่ยงยาที่เป็นพิษต่อไต และรักษา intravascular volume"], tags:["Pre-op & post-op","Fluid & electrolyte"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 15 (= 78 หน้า 14) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:145, stem:"Four patients are listed for elective hernia repair. According to the lecture's statement that coagulation tests, LFT and urinalysis are not routine and are ordered according to history, for which patient is a coagulation profile most justified?",
  opts:["A 25-year-old woman with no bleeding history and normal examination","A 35-year-old man with controlled hypertension and normal examination","A 40-year-old woman with seasonal asthma and normal examination","A 30-year-old man who takes no medications and has normal examination","A 55-year-old man with heavy alcohol use and jaundice on examination"], ans:4,
  notes:"สไลด์ไฟล์ jod หน้า 17 พิมพ์ว่า <b>\"LFT, coagulogram, UA are not routine test\"</b><br>ลายมือ jod เขียนว่า <b>\"→ ดูตาม Hx e.g. กินเหล้า, jaundice\"</b><br>สไลด์ 78 หน้า 14: <b>\"Liver disease (alcohol use), renal disease\"</b>",
  kimg:["l12b_p17","l12_p14"],
  interp:"ถามว่าใครเข้าข่ายส่ง coag ตามประวัติ ไม่ routine",
  why:"สไลด์ jod หน้า 17 พิมพ์ \"LFT, coagulogram, UA are not routine test\" ลายมือเขียนว่า \"→ ดูตาม Hx e.g. กินเหล้า, jaundice\" และสไลด์ 78 หน้า 14 ระบุ Liver disease (alcohol use) เป็น risk of bleeding ชายอายุ 55 ปีดื่มหนักและตัวเหลืองจึงเข้าข่ายโรคตับที่ทำให้การแข็งตัวผิดปกติ ผู้ป่วยอีก 4 รายไม่มีประวัติชี้นำ",
  wrong:["หญิง 25 ปีไม่มีประวัติเลือดออกและตรวจปกติไม่มีข้อบ่งชี้ จะถูกถ้าเธอมี easy bruising หรือ FHx เลือดออก", "ชาย 35 ปีที่ HTN คุมได้ไม่ใช่ข้อบ่งชี้ coag จะถูกถ้าเขากิน warfarin หรือ antiplatelet", "ผู้ป่วย asthma ตามฤดูกาลไม่เกี่ยวกับการแข็งตัว จะถูกถ้าเธอใช้ยาที่ผลต่อเลือด เช่น aspirin ขนาดสูงเป็นประจำ", "ชาย 30 ปีไม่กินยาและตรวจปกติ ไม่ต้องส่งตรวจ จะถูกถ้ามีประวัติเลือดออกผิดปกติหลังถอนฟัน"],
  trap:"ไม่ส่งทุกราย ส่งตามประวัติ",
  summary:["LFT, coagulogram, UA ไม่ routine ส่งตามประวัติ (jod หน้า 17)", "ข้อบ่งชี้ coag: กินเหล้า, jaundice, โรคตับ/ไต, FHx เลือดออก, ใช้ antithrombotic", "Liver disease (alcohol use) เป็น risk of bleeding ใน 78 หน้า 14", "คนปกติสุขภาพดีผ่าตัดเล็กไม่ต้องตรวจ coag"], tags:["Pre-op & post-op","Hemostasis & transfusion"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 17 (+ 78 หน้า 14) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:146, stem:"A 60-year-old man has a platelet count of 42,000 per mm3 from a correctable cause and is listed for an elective hemicolectomy. What does the lecture recommend about the timing of surgery?",
  opts:["Postpone the elective operation","Proceed immediately without treatment","Give prophylactic aspirin","Start heparin before the operation","Cancel the operation permanently"], ans:0,
  notes:"สไลด์ไฟล์ jod หน้า 34 พิมพ์ว่า <b>\"Elective surgery: Postponed if the platelet count is < 50,000/mm³ (esp. correctable cause)\"</b><br>78 หน้า 14: <b>\"Clinically significant thrombocytopenia: < 50,000\"</b> ลายมือ <b>\"ทำ major Sx ไม่ได้ ถ้าต้องทำ → ให้ platelet conc.\"</b>",
  kimg:["l12b_p34","l12_p14"],
  interp:"plt <50,000 + elective + แก้ไขได้",
  why:"jod หน้า 34 พิมพ์ \"Elective surgery: Postponed if the platelet count is < 50,000/mm³ (esp. correctable cause)\" และสไลด์ 78 หน้า 14 พิมพ์ clinically significant thrombocytopenia <50,000 ลายมือเขียนว่าทำ major Sx ไม่ได้ ถ้าจำเป็นให้ platelet concentrate ผู้ป่วย plt 42,000 สาเหตุแก้ไขได้และผ่าตัด elective จึงควรเลื่อนเพื่อแก้ก่อน",
  wrong:["ผ่าตัดทันทีทั้งที่ plt <50,000 เสี่ยงเลือดออกมาก จะถูกถ้าเป็นผ่าตัดฉุกเฉินและให้ platelet concentrate ก่อน", "aspirin ทำให้ platelet ทำงานเสียและเพิ่มเลือดออก จะถูกถ้าผู้ป่วยมี plt สูงมากและเสี่ยง thrombosis", "heparin ยิ่งเพิ่มเลือดออกในผู้ป่วย plt ต่ำ จะถูกถ้ามี DVT และ plt ยังปลอดภัย", "การยกเลิกถาวรไม่จำเป็น เพราะสาเหตุแก้ไขได้ จะถูกถ้ามะเร็งระยะสุดท้ายที่ไม่เหมาะผ่าตัด"],
  trap:"",
  summary:["plt <50,000 → เลื่อน elective surgery โดยเฉพาะถ้าแก้สาเหตุได้", "major Sx ไม่ได้ ถ้าจำเป็นให้ platelet concentrate (ลายมือ 78)", "plt <10,000 → เลือดออกเอง", "platelet transfusion ให้ก่อนและระหว่างผ่าตัดได้"], tags:["Hemostasis & transfusion"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 34 (= 78 หน้า 14) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({n:147, stem:"A 35-year-old woman has a platelet count of 8,000 per mm3 and has not yet bled. According to the lecture, which risk is associated with this level of platelet count?",
  opts:["Risk only when a surgical incision is made","No increased bleeding risk","Risk of spontaneous bleeding","Risk of arterial thrombosis","Risk of hemolysis"], ans:2,
  notes:"สไลด์ไฟล์ jod หน้า 34 พิมพ์ว่า <b>\"Spontaneous bleeding if the platelet count is < 10,000/mm³\"</b>",
  kimg:["l12b_p34"],
  interp:"plt <10,000 ไม่ต้องผ่าตัดก็เสี่ยงเลือดออก",
  why:"jod หน้า 34 พิมพ์ \"Spontaneous bleeding if the platelet count is < 10,000/mm³\" ผู้ป่วยมี plt 8,000 ต่ำกว่า 10,000 จึงเสี่ยงเลือดออกเองแม้ไม่มีแผลหรือการผ่าตัด เช่น เลือดออกใต้ผิวหนังหรือทางเดินอาหาร ต่างจากช่วง 10,000–50,000 ที่เป็นข้อเลื่อนผ่าตัด elective และสไลด์บอกว่าอาจให้ platelet transfusion ก่อนและระหว่างผ่าตัด",
  wrong:["ความเสี่ยงเฉพาะตอนผ่าตัดเป็นของช่วง 10,000–50,000 จะถูกถ้า plt 30,000 และไม่มีเลือดออกเอง", "ที่ระดับนี้มีความเสี่ยงเลือดออกเองชัดเจน ไม่ใช่ไม่เพิ่ม จะถูกถ้า plt ปกติ", "plt ต่ำไม่ทำให้เกิด arterial thrombosis ตามสไลด์ จะถูกถ้าเป็น HIT ที่ plt ต่ำแต่เกิดลิ่มเลือด", "plt ต่ำไม่ใช่ hemolysis จะถูกถ้ามีโลหิตจางจากเม็ดเลือดแดงแตกและ schistocyte ใน TTP"],
  trap:"",
  summary:["plt <50,000 → เลื่อน elective surgery", "plt <10,000 → spontaneous bleeding", "platelet transfusion ก่อนและระหว่างผ่าตัดได้", "clinically significant thrombocytopenia ใน 78 คือ <50,000"], tags:["Hemostasis & transfusion"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 34 · ไม่มีสัญลักษณ์ · ไม่มีลายมือ"}),
U({n:148, stem:"A patient whose platelet count is low because of ongoing consumption must undergo surgery and needs platelet transfusion. According to the jod handwriting, when should the platelets be given?",
  opts:["One week before surgery","Two days before surgery","The night before surgery","Only after bleeding starts","Close to the time of surgery"], ans:4,
  notes:"ลายมือไฟล์ jod หน้า 34 เขียนข้าง Platelet transfusion ว่า <b>\"∴ ต่ำจาก plt consumption → ให้ล่วงหน้านานก็กลับไปต่ำอีก\"</b>",
  kimg:["l12b_p34"],
  interp:"consumption ต่อเนื่อง platelet ที่ให้ล่วงหน้าจะถูกใช้หมด",
  why:"ลายมือ jod หน้า 34 เขียนข้าง Platelet transfusion ว่า \"∴ ต่ำจาก plt consumption → ให้ล่วงหน้านานก็กลับไปต่ำอีก\" ผู้ป่วยที่ platelet ต่ำเพราะถูกใช้ไปอย่างต่อเนื่อง เช่น DIC จึงควรให้ platelet ใกล้เวลาผ่าตัด (ก่อนและระหว่างผ่าตัด) เพื่อให้ระดับสูงพอในช่วงที่ตัดและเสี่ยงเลือดออก",
  wrong:["ให้ล่วงหน้า 1 สัปดาห์ platelet ถูกใช้หมดไปแล้ว จะถูกถ้า plt ต่ำจากการผลิตลดลงซึ่งอยู่นานกว่า", "ให้ล่วงหน้า 2 วันยังถูกใช้หมดก่อนผ่าตัด จะถูกถ้าผู้ป่วยได้ platelet ที่ตอบสนองดีและ plt ต่ำจากสาเหตุไม่ต่อเนื่อง", "คืนก่อนผ่าตัดยังห่างเกินไปสำหรับ consumption ต่อเนื่อง จะถูกถ้ามีการตรวจ post-transfusion count ตอนเช้า", "การรอเลือดออกก่อนจึงให้ไม่ปลอดภัย จะถูกถ้าผู้ป่วยไม่ผ่าตัดและ plt สูงกว่า 10,000"],
  trap:"",
  summary:["plt ต่ำจาก consumption → ให้ platelet ใกล้เวลาผ่าตัด", "ให้ล่วงหน้านาน platelet ถูกใช้หมดและกลับไปต่ำอีก", "platelet transfusion ก่อนและระหว่างผ่าตัดได้", "<50,000 เลื่อน elective, <10,000 เลือดออกเอง"], tags:["Hemostasis & transfusion"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 34 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:149, stem:"A patient receiving an intravenous unfractionated heparin infusion for deep vein thrombosis needs an elective operation. According to the handwriting in the jod handout, how long before surgery should the infusion be stopped?",
  opts:["24 hours","12 hours","2 days","5 hours","30 minutes"], ans:3,
  notes:"ลายมือไฟล์ jod หน้า 33 เขียนข้าง Unfractionated Heparin ว่า <b>\"หยุดยาก่อนผ่า 5 hr\"</b>",
  kimg:["l12b_p33"],
  interp:"UFH ครึ่งชีวิตสั้น",
  why:"ลายมือ jod หน้า 33 เขียนข้าง Parenteral Anticoagulant: Unfractionated Heparin ว่า \"หยุดยาก่อนผ่า 5 hr\" ซึ่งสอดคล้องกับ CHEST 2022 ที่แนะนำหยุด UFH ทางหลอดเลือดดำราว 4–6 ชั่วโมงก่อนผ่าตัด เพราะ UFH ครึ่งชีวิตสั้น การหยุดสั้นกว่า LMWH ทำให้ aPTT กลับเข้าสู่ปกติทันผ่าตัด",
  wrong:["24 ชั่วโมงเป็นของ LMWH ขนาดรักษา จะถูกถ้าผู้ป่วยได้ enoxaparin", "12 ชั่วโมงเป็นช่วงต้นของ LMWH ตามลายมือ จะถูกถ้าใช้ LMWH ขนาดป้องกัน", "2 วันเป็นช่วงของ DOAC ตามลายมือ จะถูกถ้าผู้ป่วยกิน rivaroxaban", "30 นาทียังสั้นเกินไป aPTT ยังยาวและเสี่ยงเลือดออก จะถูกถ้าต้องผ่าตัดฉุกเฉินและแก้ฤทธิ์ด้วย protamine"],
  trap:"UFH หยุดเร็วกว่า LMWH",
  summary:["UFH หยุดก่อนผ่า 5 ชั่วโมง (CHEST 2022 ประมาณ 4–6 ชั่วโมง)", "LMWH หยุด 12–24 ชั่วโมง", "DOAC 1–2 วัน และ warfarin 5–7 วัน", "ครึ่งชีวิตสั้นจึงหยุดเร็วกว่ายาอื่น"], tags:["Hemostasis & transfusion"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 33 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({n:150, stem:"A patient on enoxaparin for treatment of venous thromboembolism needs an elective operation. According to the handwriting in the jod handout, how long before surgery is low molecular weight heparin stopped?",
  opts:["5 hours","12 to 24 hours","3 days","7 days","30 minutes"], ans:1,
  notes:"ลายมือไฟล์ jod หน้า 33 เขียนข้าง Low molecular weight heparin ว่า <b>\"หยุดยาก่อนผ่า 12-24 hr\"</b>",
  kimg:["l12b_p33"],
  interp:"LMWH (enoxaparin)",
  why:"ลายมือ jod หน้า 33 เขียนข้าง Parenteral Anticoagulant: Low molecular weight heparin ว่า \"หยุดยาก่อนผ่า 12-24 hr\" CHEST 2022 ระบุขนาดรักษาควรให้ dose สุดท้ายประมาณ 24 ชั่วโมงก่อนผ่าตัด ส่วนขนาดป้องกันประมาณ 12 ชั่วโมง ผู้ป่วยได้ enoxaparin รักษา VTE จึงหยุดในช่วง 12–24 ชั่วโมง",
  wrong:["5 ชั่วโมงคือเวลาของ UFH ทางหลอดเลือด จะถูกถ้าผู้ป่วยได้ heparin drip", "3 วันเป็นช่วงที่นานเกินสำหรับ LMWH จะถูกถ้ามีไตวายมากที่กำจัดยาช้า", "7 วันเป็นเวลาของ aspirin ตามลายมือ จะถูกถ้าเป็น antiplatelet", "30 นาทียังสั้นเกินไป LMWH ยังออกฤทธิ์ จะถูกถ้าต้องผ่าตัดฉุกเฉินและพิจารณา protamine บางส่วน"],
  trap:"",
  summary:["LMWH หยุด 12–24 ชั่วโมงก่อนผ่าตัด", "CHEST 2022: ขนาดรักษา ≈24 ชั่วโมง ขนาดป้องกัน ≈12 ชั่วโมง", "UFH 5 ชั่วโมง, DOAC 1–2 วัน, warfarin 5–7 วัน", "ใช้ในผู้ป่วยที่ได้ enoxaparin รักษา VTE"], tags:["Hemostasis & transfusion"], src:"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 33 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 151, "img": "l12_q151", "stem": "A 52-year-old woman is scheduled for an elective open cholecystectomy. The surgical team completes the Caprini risk assessment and obtains a total risk factor score of 2. According to the category table shown, which prophylaxis regimen is recommended?", "opts": ["Early ambulation only", "IPC, LDUH or LMWH", "Pharmacological prophylaxis only, either LMWH or warfarin", "No specific measures at all", "ES/GCS, IPC, LDUH or LMWH"], "ans": 4, "notes": "สไลด์ไฟล์ 78 หน้า 40 (= jod หน้า 37) พิมพ์ตาราง <b>\"Caprini risk assessment model categories and recommended prophylaxis\"</b><br>แถว <b>\"2 · 10–20 · Moderate · ES/GCS, IPC, LDUH or LMWH\"</b>", "kimg": ["l12_p40", "l12b_p37"], "interp": "score รวม 2 = Moderate risk ตามตารางหมวดหมู่ ไม่ต้องรวมคะแนนจากฟอร์ม", "why": "ตารางหน้า 40: score 2 → <b>Moderate</b> (DVT 10–20%) → prophylaxis <b>ES/GCS, IPC, LDUH or LMWH</b> เป็นทางเลือกทั้งกลไกและยาขนาดต่ำ โจทย์ให้ score รวมไว้แล้ว จึงอ่านแถว score 2 ของตารางได้ทันที ไม่ต้องบวกคะแนนรายข้อ และ regimen ของ Moderate มี 4 ทางเลือกที่ใช้อย่างใดอย่างหนึ่งได้ ซึ่งต่างจาก High ที่ตัด ES/GCS ออก และต่างจาก Highest ที่เน้นยาเป็นหลัก", "wrong": ["Early ambulation only เป็น regimen ของ Low (score 0–1) ซึ่งไม่ต้องใช้อุปกรณ์หรือยา ซึ่งผู้ป่วยมี risk สูงกว่า Low ที่ต้องใช้เพียงการเดิน — จะถูกถ้าผู้ป่วยรายนี้มี Caprini score 0–1 เช่นผ่าตัดเล็กและเดินได้", "IPC, LDUH or LMWH เป็น regimen ของ High (score 3–4) และไม่มี ES/GCS ให้เลือก ซึ่งข้ามขั้น Moderate และตัด ES/GCS ที่ผู้ป่วยใช้ได้ออก — จะถูกถ้ารวมคะแนนได้ 3–4 เช่นผ่าตัดใหญ่นานและมีมะเร็ง", "ยาอย่างเดียวด้วย LMWH หรือ warfarin เป็นแนวของ Highest (≥5) ซึ่งเป็นการให้ยาอย่างเดียวที่เกินระดับของ score 2 — จะถูกถ้าผู้ป่วยมี score ≥5 เช่น ผ่าตัดมะเร็งช่องท้องใหญ่ในผู้สูงอายุ", "No specific measures คือ Low (0–1) และ score 2 ยังมี DVT risk 10–20% ซึ่งต้องมี prophylaxis ซึ่งขัดกับตารางที่ให้ regimen เริ่มตั้งแต่ score 2 — จะถูกถ้า score รวมเพียง 0–1"], "trap": "อย่าสลับ Moderate (มี ES/GCS) กับ High (เริ่มที่ IPC)", "summary": ["Caprini score 2 = Moderate risk, incidence DVT 10–20%", "Regimen ของ Moderate = ES/GCS, IPC, LDUH or LMWH (เป็นกลุ่มเดียวที่มี ES/GCS ในตัวเลือก)", "Low (0–1) = early ambulation เท่านั้น · High (3–4) = IPC, LDUH or LMWH · Highest (≥5) = ยาเป็นหลัก", "ใช้ตารางหมวดหมู่ ไม่ต้องบวกคะแนนจากฟอร์มรายข้อ (ฟอร์มเป็น nice to know)", "จำเป็นต้องรู้ว่า ES/GCS ปรากฏเฉพาะใน Moderate (score 2) ไม่ปรากฏใน High (3–4)"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 40 (= jod หน้า 37) · ไม่มีสัญลักษณ์"}),
U({"n": 152, "stem": "A 28-year-old man undergoes an uncomplicated minor elective procedure and walks on the same evening. His Caprini total risk factor score is 1. What is the appropriate venous thromboembolism prophylaxis for him?", "opts": ["No specific measures other than early ambulation", "IPC alone for the whole admission", "Prophylactic LMWH daily", "LDUH twice daily with elastic stockings", "Warfarin with an INR target"], "ans": 0, "notes": "สไลด์ไฟล์ 78 หน้า 40 (= jod หน้า 37) พิมพ์ตาราง <b>\"Caprini risk assessment model categories and recommended prophylaxis\"</b><br>แถว <b>\"0–1 · <10 · Low · No specific measures, early ambulation\"</b>", "kimg": ["l12_p40", "l12b_p37"], "interp": "score 1 อยู่ในกลุ่ม Low risk ผู้ป่วยเดินได้เอง", "why": "ตารางหน้า 40: score 0–1 = <b>Low</b> (DVT &lt;10%) → <b>No specific measures, early ambulation</b> ไม่ต้องให้ยาหรือเครื่องมือ โจทย์บอกว่าผ่าตัดเล็กและผู้ป่วยเดินได้ในเย็นวันเดียวกัน ซึ่งตรงกับหลัก early ambulation ของ Low risk ตารางระบุว่าไม่ต้องมีมาตรการเฉพาะอื่น และอุบัติการณ์ DVT ในกลุ่มนี้ต่ำกว่า 10% จึงไม่คุ้มกับความเสี่ยงเลือดออกจากยา", "wrong": ["IPC ตลอดการนอนโรงพยาบาลเป็นการป้องกันระดับ High (3–4) ซึ่งเกินความจำเป็นสำหรับชายหนุ่มที่เดินได้ ซึ่งเกินความจำเป็นสำหรับผู้ป่วยที่เดินได้ — จะถูกถ้ามี score 3–4 และห้ามใช้ยา", "LMWH ประจำวันเป็นทางเลือกตั้งแต่ Moderate (score 2) ขึ้นไป และเพิ่มความเสี่ยงเลือดออกโดยไม่จำเป็นใน score 1 ซึ่งเพิ่มเลือดออกโดยประโยชน์น้อยใน risk ต่ำ — จะถูกถ้า score ≥2", "LDUH ร่วม ES เป็น regimen ของ Moderate หรือ High ไม่ใช่ Low ซึ่งใช้ทั้งยาและอุปกรณ์ในผู้ป่วยที่ไม่ต้องการ — จะถูกถ้ามี score 2 เช่นผ่าตัดช่องท้องเปิดในวัยกลางคน", "Warfarin เป็นยาใน Highest (≥5) ที่ต้องติดตาม INR และไม่เหมาะกับ Low ซึ่งเป็นยา Highest และไม่มีใน Low — จะถูกถ้ามี score ≥5 เช่นผ่าตัดมะเร็งใหญ่"], "trap": "การให้ยาในผู้ป่วย Low risk เพิ่มเลือดออกโดยไม่จำเป็น", "summary": ["Caprini 0–1 = Low risk, incidence DVT &lt;10%", "Prophylaxis = no specific measures, early ambulation", "ยาและอุปกรณ์เริ่มที่ score 2 ขึ้นไป (Moderate: ES/GCS, IPC, LDUH or LMWH)", "ให้ยาในผู้ป่วย Low risk เพิ่มเลือดออกโดยประโยชน์น้อย", "การป้องกันแบบเข้มงวดเกินไปไม่ได้เพิ่มประโยชน์ใน Low risk และเพิ่มเลือดออก"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 40 (= jod หน้า 37) · ไม่มีสัญลักษณ์"}),
U({"n": 153, "img": "l12_q153", "stem": "A 60-year-old man has a Caprini total risk factor score of 4 before an elective colectomy. Using the table shown, what is the approximate incidence of deep vein thrombosis expected in his risk category?", "opts": ["Less than 10 percent", "10 to 20 percent", "40 to 60 percent", "More than 60 percent", "20 to 40 percent"], "ans": 4, "notes": "สไลด์ไฟล์ 78 หน้า 40 (= jod หน้า 37) พิมพ์ตาราง <b>\"Caprini risk assessment model categories and recommended prophylaxis\"</b><br>แถว <b>\"3–4 · 20–40 · High\"</b> และ <b>\"≥5 · 40–60\"</b>", "kimg": ["l12_p40", "l12b_p37"], "interp": "score 4 = High risk โจทย์ถามตัวเลขอุบัติการณ์ DVT ในตาราง", "why": "ตารางหน้า 40: score 3–4 → <b>Incidence of DVT 20–40%</b> (High) ส่วน ≥5 เพิ่มเป็น 40–60% โจทย์ให้ score 4 และถามตัวเลข จึงอ่านแถว 3–4 ของคอลัมน์ Incidence ได้ 20–40% และ Risk level คือ High ซึ่งอยู่ถัดจาก Moderate (10–20%) และต่ำกว่า Highest (40–60%) ที่มี mortality 1–5%", "wrong": ["&lt;10% เป็นอุบัติการณ์ของ Low (score 0–1) ซึ่งผู้ป่วยที่เดินได้และผ่าเล็ก ซึ่งเป็นอุบัติการณ์ของผู้ป่วยที่ผ่าเล็กและเดินได้ — จะถูกถ้า score รวม 0–1", "10–20% เป็นของ Moderate (score 2) ซึ่งต่ำกว่า score 4 หนึ่งขั้น ซึ่งเป็นช่วงของ risk ปานกลางที่ต่ำกว่า score 4 — จะถูกถ้ารวมคะแนนได้เพียง 2", "40–60% เป็นของ Highest (score ≥5) ซึ่งสูงกว่า score 4 หนึ่งขั้น ซึ่งเป็นช่วงของ Highest ที่สูงกว่า score 4 — จะถูกถ้าผู้ป่วยมีมะเร็งช่องท้องร่วมกับอายุมากและนอนติดเตียง รวม ≥5", "ตารางไม่มีหมวดสูงกว่า 60% (Highest คือ 40–60% และ 1–5% mortality) ซึ่งเกินช่วงสูงสุดที่ตารางรายงาน — จะถูกถ้าตารางเพิ่มหมวด very high"], "trap": "ระวังเลื่อนแถวผิดเพราะช่วงตัวเลขเรียงต่อกัน", "summary": ["Caprini 3–4 = High risk, incidence DVT 20–40%", "Low &lt;10% · Moderate 10–20% · High 20–40% · Highest 40–60% (mortality 1–5%)", "High risk ใช้ IPC, LDUH or LMWH", "ตัวเลข incidence เรียงต่อกัน ต้องเทียบแถวให้ตรง score", "ตัวเลขขั้นบันได: &lt;10, 10–20, 20–40, 40–60 เรียงตามหมวด Low, Moderate, High, Highest"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 40 (= jod หน้า 37) · ไม่มีสัญลักษณ์"}),
U({"n": 154, "stem": "A 68-year-old woman with a Caprini total risk factor score of 6 is scheduled for a major abdominal cancer resection. She has no bleeding disorder. Which prophylaxis plan matches the highest risk category in the lecture table?", "opts": ["Early ambulation alone", "LMWH, with or without IPC", "Elastic stockings alone", "IPC alone", "Aspirin alone"], "ans": 1, "notes": "สไลด์ไฟล์ 78 หน้า 40 (= jod หน้า 37) พิมพ์ตาราง <b>\"Caprini risk assessment model categories and recommended prophylaxis\"</b><br>แถว <b>\"≥5 · 40–60 · Highest · Pharmacological: LDUH, LMWH, warfarin or F-Xa inhibitor alone or in combination with ES/GCS or IPC\"</b>", "kimg": ["l12_p40", "l12b_p37"], "interp": "score 6 ≥5 = Highest ผู้ป่วยไม่มี bleeding risk", "why": "ตารางหน้า 40: ≥5 = <b>Highest</b> → ต้องใช้ยา (LDUH, LMWH, warfarin หรือ F-Xa inhibitor) ได้ทั้งตัวยาเดี่ยวหรือร่วมกับ ES/GCS หรือ IPC โจทย์ระบุ score 6 และไม่มี bleeding disorder จึงเข้า Highest ที่มี DVT 40–60% ตารางจัดยา LDUH, LMWH, warfarin หรือ F-Xa inhibitor เป็นแกน และเติม ES/GCS หรือ IPC ได้ จึงตอบ LMWH ที่มีหรือไม่มี IPC", "wrong": ["Early ambulation เพียงอย่างเดียวเป็นของ Low และไม่พอสำหรับมะเร็งช่องท้องใหญ่ในผู้สูงอายุ ซึ่งเป็นของ Low และไม่พอกับ risk ที่ 40–60% — จะถูกถ้า score 0–1", "ES อย่างเดียวไม่ถึงระดับ Highest เพราะต้องใช้ยาเป็นหลัก ซึ่งให้การป้องกันน้อยกว่าที่ Highest ต้องการ — จะถูกถ้ามี score 2 และไม่มีข้อห้ามใช้ ES", "IPC อย่างเดียวเป็น regimen ของ High (3–4) และ Highest ยังคงให้ใช้เฉพาะเมื่อมี bleeding risk สูงจนให้ยาไม่ได้ ซึ่งใช้ได้เฉพาะกรณีไม่สามารถให้ยาเพราะเลือดออก — จะถูกถ้ามีเลือดออกรุนแรง", "Aspirin ไม่ได้อยู่ในตารางยา (LDUH, LMWH, warfarin, F-Xa inhibitor) และกันเลือดดำอุดตันได้น้อยกว่ายา anticoagulant ซึ่งไม่มีหลักฐานในตารางสำหรับป้องกัน VTE — จะถูกถ้าตารางระบุให้"], "trap": "mechanical อย่างเดียวไม่พอใน Highest ยกเว้นมี bleeding risk สูง", "summary": ["Caprini ≥5 = Highest risk, incidence DVT 40–60%", "Regimen = pharmacological: LDUH, LMWH, warfarin หรือ F-Xa inhibitor alone หรือร่วมกับ ES/GCS หรือ IPC", "ถ้ามี bleeding risk สูงต้องเริ่มด้วย mechanical (IPC) ก่อน", "Mechanical อย่างเดียวไม่เพียงพอใน Highest ถ้าให้ยาได้", "ข้อห้ามให้ยา (bleeding) เป็นเงื่อนไขเดียวที่ทำให้ใช้ mechanical อย่างเดียวใน Highest"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 40 (= jod หน้า 37) · ไม่มีสัญลักษณ์"}),
U({"n": 155, "stem": "On postoperative day 5 a 70-year-old man has unilateral calf swelling and duplex ultrasound confirms a deep vein thrombosis. A junior resident proposes to calculate his Caprini score to decide on treatment. Why is this inappropriate?", "opts": ["It estimates risk of new DVT, not existing DVT", "The score is validated only for pulmonary embolism", "The score applies only to orthopedic patients", "The score cannot be used after day 3", "The score is valid only in patients under 40 years"], "ans": 0, "notes": "สไลด์ไฟล์ 78 หน้า 38 (= jod หน้า 35) พิมพ์ว่า <b>\"Caprini score : DVT risk assessment\"</b><br>ลายมือไฟล์ jod หน้า 35 เขียนว่า <b>\"บอก risk ในการเกิด DVT → ไม่ได้ถ้าเป็น DVT อยู่แล้ว\"</b>", "kimg": ["l12_p38", "l12b_p35"], "interp": "ผู้ป่วยเป็น DVT ไปแล้ว ถามเหตุผลที่คำนวณ Caprini ไม่เหมาะ", "why": "ลายมือ jod หน้า 35: Caprini บอก <b>risk ของการเกิด DVT</b> ใช้ไม่ได้เมื่อเป็น DVT อยู่แล้ว ผู้ป่วยรายนี้ต้องการการรักษา DVT ไม่ใช่การจัดกลุ่มเพื่อป้องกัน โจทย์ยืนยัน DVT ด้วย ultrasound ไปแล้ว ผู้ป่วยจึงพ้นจากวัตถุประสงค์ของ score ที่ใช้ทำนายว่าจะเกิดหรือไม่ การตัดสินใจต่อไปคือรักษา DVT และดูแลไม่ให้ลามเป็น PE ไม่ใช่เลือก prophylaxis", "wrong": ["Caprini ไม่ได้ validate เฉพาะ PE แต่ประเมินความเสี่ยงเกิด DVT เพราะ score ไม่ได้ออกแบบเฉพาะ PE — จะถูกถ้ามีเครื่องมือเฉพาะ PE เช่น Wells score สำหรับ PE", "Caprini ใช้กับผู้ป่วยศัลยกรรมทั่วไปด้วย ไม่จำกัด orthopedic เพราะใช้ในศัลยกรรมทั่วไปได้ด้วย — จะถูกถ้าเป็นเครื่องมือที่ออกแบบเฉพาะข้อเทียม", "ไม่มีขีดจำกัดตามวันหลังผ่า เหตุที่ใช้ไม่ได้คือเป็น DVT แล้ว เพราะไม่มีข้อจำกัดเรื่องวันที่หลังผ่า — จะถูกถ้าเป็นเครื่องมือที่ออกแบบใช้เฉพาะก่อนผ่าตัด", "อายุเป็นปัจจัยให้คะแนน (41–60, 60–74, ≥75) ไม่ใช่เงื่อนไขการใช้ เพราะอายุเป็นเพียงปัจจัยให้คะแนน — จะถูกถ้าเกณฑ์จำกัดผู้ป่วยตามอายุ"], "trap": "score ใช้เลือก prophylaxis ไม่ใช่ตัดสินการรักษา", "summary": ["Caprini score = DVT risk assessment บอกความเสี่ยงที่จะเกิด DVT", "ใช้ไม่ได้ถ้าเป็น DVT อยู่แล้ว (ลายมือ jod) เพราะต้องวินิจฉัยด้วย Doppler และรักษา", "ใช้เลือก prophylaxis ตามหมวด Low, Moderate, High, Highest", "VTE ครอบคลุม DVT และ PE", "ผู้ป่วยที่เป็น DVT แล้วเปลี่ยนจาก prophylaxis เป็นการรักษา"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 38 (= jod หน้า 35) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 156, "stem": "A 55-year-old woman after a hysterectomy has mild leg swelling that is attributed to dependent edema and not investigated for several days. She then develops sudden pleuritic chest pain and dyspnea. Which complication does the lecture warn can follow a delayed diagnosis of her original problem?", "opts": ["Atelectasis", "Anastomotic leakage", "Thrombophlebitis of the arm", "Pulmonary embolism", "Surgical site infection"], "ans": 3, "notes": "สไลด์ไฟล์ 78 หน้า 38 (= jod หน้า 35) พิมพ์ว่า <b>\"VTE\"</b> (ลายมือ 78: VTE แตกเป็น DVT และ PE)<br>ลายมือไฟล์ jod หน้า 35 เขียนว่า <b>\"Dx ช้า → อาจเป็น PE ได้\"</b>", "kimg": ["l12_p38", "l12b_p35"], "interp": "บวมขาที่ไม่ได้ตรวจ ตามด้วยเจ็บหน้าอกและหอบเฉียบพลัน", "why": "ลายมือ jod หน้า 35: <b>Dx (DVT) ช้า → อาจเป็น PE ได้</b> และลายมือ 78 ระบุว่า VTE = DVT + PE โจทย์บอกว่าขาบวมถูกมองข้ามหลายวันแล้วเกิดเจ็บ pleuritic และหอบเฉียบพลัน ซึ่งตรงกับลายมือ jod ที่ว่าวินิจฉัย DVT ช้าอาจเป็น PE ได้ ลิ่มเลือดจากขาหลุดไปที่ปอดจึงอธิบายทั้งอาการและเวลา", "wrong": ["Atelectasis เป็นสาเหตุไข้ POD 1–3 และไม่ใช่ผลของ DVT ที่ตามช้า เพราะเกิดวัน 1–3 และไม่มีขาบวม — จะถูกถ้ามีไข้ POD 2 หายใจตื้นและ CXR volume loss โดยไม่มีขาบวม", "Anastomotic leakage เกิดหลังผ่าต่อลำไส้ POD 5–10 และไม่ทำให้ขาบวม เพราะเกี่ยวกับการต่อลำไส้และปวดท้อง — จะถูกถ้ามีผ่า bowel ร่วมกับปวดท้องและไข้", "Thrombophlebitis ที่แขนเป็นการอักเสบของเส้นเลือดดำส่วนปลายจากสายน้ำเกลือ ไม่ทำให้เจ็บ pleuritic เพราะเป็นการอักเสบเฉพาะที่ของหลอดเลือดแขน — จะถูกถ้ามีเส้น IV แดงเจ็บที่แขน", "SSI เป็นปัญหาที่แผล ไม่ทำให้หอบและเจ็บ pleuritic เพราะเป็นปัญหาที่แผลและไม่ทำให้เจ็บหน้าอก — จะถูกถ้าแผลมีหนองและแดงร้อน"], "trap": "อย่าอธิบายอาการปอดเฉียบพลันว่าเป็น atelectasis ทั้งที่มีขาบวมนำมาก่อน", "summary": ["VTE = DVT + PE (ลายมือ 78 และ jod)", "DVT ที่วินิจฉัยช้าอาจกลายเป็น PE (ลายมือ jod)", "ขาบวมข้างเดียวหลังผ่าต้องนึกถึง DVT และส่ง Doppler", "DVT/VTE มักเกิดราว POD 7 (5–10)", "Caprini ใช้ป้องกันก่อนเกิดเหตุการณ์นี้", "อาการหอบและเจ็บ pleuritic หลังขาบวมคือ PE จนกว่าจะพิสูจน์ไม่ใช่"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 38 (= jod หน้า 35) · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod"}),
U({"n": 157, "stem": "A ward nurse applies sequential compression sleeves to the legs of a bedridden patient with a high Caprini category and explains that the sleeves inflate and deflate alternately. Which physiologic effect is the intended mechanism of this device?", "opts": ["Reduced arterial inflow to the legs", "Increased venous return from the legs", "Lowered platelet aggregation", "Reduced hepatic synthesis of clotting factors", "Increased capillary leakage in the calf"], "ans": 1, "notes": "สไลด์ไฟล์ 78 หน้า 40 (= jod หน้า 37) พิมพ์ว่า <b>\"IPC = intermittent pneumatic compression\"</b><br>ลายมือไฟล์ jod หน้า 37 เขียนว่า <b>\"IPC … เพิ่ม venous return (เป่าลม–คลายสลับกัน)\"</b>", "kimg": ["l12_p40", "l12b_p37"], "interp": "IPC พองและคลายสลับกัน ถามกลไกที่ทำให้ลด DVT", "why": "ลายมือ jod หน้า 37: IPC <b>เพิ่ม venous return</b> โดยเป่าลมและคลายสลับกัน ลดการคั่งของเลือดดำ โจทย์บอกว่าแขนปลอกพองและคลายสลับกัน ซึ่งตรงกับลายมือ jod ที่เขียนว่าเป่าลม–คลายสลับกันเพื่อเพิ่ม venous return ลดเลือดดำคั่งที่ขาซึ่งเป็นปัจจัยหนึ่งของลิ่มเลือด จึงต่างจากยาที่ออกฤทธิ์ที่การแข็งตัวของเลือด", "wrong": ["IPC ไม่ลด arterial inflow การบีบเป็นจังหวะเพื่อดันเลือดดำกลับ เพราะเป้าหมายคือดันเลือดดำกลับ — จะถูกถ้าเป็น tourniquet หรือการกดรัดแบบคงที่ที่ลดเลือดแดง", "IPC เป็นอุปกรณ์กลไก ไม่มีผลต่อเกล็ดเลือด เพราะเป็นอุปกรณ์กลไกไม่ใช่ยา — จะถูกถ้าเป็นยา antiplatelet เช่น aspirin หรือ clopidogrel", "การลดการสร้าง clotting factor ที่ตับเป็นกลไกของ warfarin เพราะเป็นกลไกของ warfarin — จะถูกถ้าถามถึงยา warfarin ใน Highest", "IPC ไม่เพิ่ม capillary leakage และเป้าหมายคือลดเลือดคั่ง เพราะเป้าหมายคือลดเลือดคั่ง — จะถูกถ้าถามกลไกของอาการบวมจากเซปซิส"], "trap": "GCS/ES เป็นแรงกดคงที่ ส่วน IPC เป็นจังหวะ", "summary": ["IPC = intermittent pneumatic compression เป่าลมและคลายสลับกัน", "กลไก = เพิ่ม venous return (ลายมือ jod) ลดเลือดดำคั่งที่ขา", "GCS = graduated compression stockings (ลายมือ jod: ถุงน่องหลอดเลือดขอด)", "IPC อยู่ใน regimen ของ Moderate และ High และใช้ได้เมื่อ bleeding risk สูง", "IPC ต่างจาก GCS ตรงที่เป็นแรงบีบเป็นจังหวะและใช้เมื่อ bleeding risk สูงได้"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 37 (= 78 หน้า 40) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 158, "stem": "A 72-year-old man with a Caprini score of 7 undergoes major pelvic cancer surgery. Which of the following is listed among the pharmacological options for the highest-risk category in the lecture?", "opts": ["Clopidogrel", "A factor Xa inhibitor", "Dextran infusion", "Systemic thrombolysis", "Antithrombin concentrate"], "ans": 1, "notes": "สไลด์ไฟล์ 78 หน้า 40 (= jod หน้า 37) พิมพ์ตาราง <b>\"Caprini risk assessment model categories and recommended prophylaxis\"</b><br>แถว <b>\"≥5 … Pharmacological: LDUH, LMWH, warfarin or F-Xa inhibitor\"</b>", "kimg": ["l12_p40", "l12b_p37"], "interp": "ถามรายการยาในกลุ่ม Highest", "why": "ตารางหน้า 40 ระบุยา 4 ชนิด: <b>LDUH, LMWH, warfarin, F-Xa inhibitor</b> โจทย์ให้ score 7 ซึ่งเข้า Highest จึงต้องเลือกจากรายการยาในแถว ≥5 ของตาราง คือ LDUH, LMWH, warfarin และ F-Xa inhibitor ตัวเลือกอื่นไม่ถูกกล่าวถึงเป็นยาป้องกันในสไลด์", "wrong": ["Clopidogrel เป็น antiplatelet ไม่อยู่ในรายการยาป้องกัน VTE ของสไลด์ เพราะเป็นยาต้านเกล็ดเลือด — จะถูกถ้าถามยาหลัง stent หลอดเลือดหัวใจ", "Dextran ไม่อยู่ในตารางป้องกัน VTE ของสไลด์ และปัจจุบันแทบไม่ใช้ป้องกัน VTE เพราะเสี่ยง anaphylaxis, volume overload และเลือดออก — จะถูกถ้าถามยา plasma expander ที่เคยใช้ป้องกัน VTE ในอดีต", "Thrombolysis ใช้รักษา massive PE ไม่ใช่ prophylaxis เพราะใช้รักษา ไม่ใช่ป้องกัน — จะถูกถ้าผู้ป่วยมี PE ที่ช็อก", "Antithrombin concentrate ใช้ในภาวะขาด antithrombin ไม่ใช่ prophylaxis ทั่วไป เพราะใช้เฉพาะ AT deficiency — จะถูกถ้าผู้ป่วยมี AT deficiency ที่ดื้อ heparin"], "trap": "ยา antiplatelet ไม่ใช่ prophylaxis ตามตาราง", "summary": ["Highest (≥5) ใช้ pharmacological prophylaxis: LDUH, LMWH, warfarin หรือ F-Xa inhibitor", "ใช้ยาตัวเดียวหรือร่วมกับ ES/GCS หรือ IPC", "Antiplatelet ไม่ใช่ยาป้องกัน VTE ตามตาราง", "ถ้า bleeding risk สูงต้องใช้ mechanical ก่อน", "ยารายการใน Highest มี 4 ชนิดและใช้ร่วมกับ ES/GCS หรือ IPC ได้"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 40 (= jod หน้า 37) · ไม่มีสัญลักษณ์"}),
U({"n": 159, "stem": "A 66-year-old woman has a high Caprini risk for an emergency laparotomy but also has active gastrointestinal bleeding and a platelet count of 30,000 per microliter. Which prophylaxis is most appropriate at this stage?", "opts": ["Full dose warfarin at once", "LMWH at once with an elastic stocking", "LDUH three times daily from tonight", "IPC first, then drugs once bleeding falls", "No prophylaxis of any kind"], "ans": 3, "notes": "สไลด์ไฟล์ 78 หน้า 40 (= jod หน้า 37) พิมพ์ตาราง <b>\"Caprini risk assessment model categories and recommended prophylaxis\"</b><br>ตารางให้ <b>\"IPC\"</b> ในกลุ่ม High และ Moderate และให้ยาในกลุ่ม Highest", "kimg": ["l12_p40", "l12b_p37"], "interp": "VTE risk สูงแต่ bleeding risk สูง ต้องใช้ mechanical ก่อน", "why": "ผู้ป่วย high VTE risk ที่มี high bleeding risk ใช้ <b>mechanical (IPC)</b> ก่อน แล้วเติมยาเมื่อเลือดออกลดลง (Round I/O เสริม) ตารางสไลด์มี IPC เป็นทางเลือก โจทย์ให้ทั้ง VTE risk สูงและ bleeding risk สูง (เลือดออกทางเดินอาหาร เกล็ดเลือด 30,000) หลักคือเริ่มด้วยอุปกรณ์ที่ไม่เพิ่มเลือดออก เช่น IPC ซึ่งมีในตาราง แล้วจึงเติมยาเมื่อเลือดออกควบคุมได้", "wrong": ["Warfarin ในผู้ป่วยเลือดออกและเกล็ดเลือด 30,000 เพิ่มเลือดออกรุนแรง ซึ่งเพิ่มเลือดออกในผู้ป่วยที่เกล็ดเลือด 30,000 — จะถูกถ้าไม่มี active bleeding และ platelet ปกติ", "LMWH ทันทีขณะมีเลือดออกทางเดินอาหารเพิ่มอันตราย แม้ใช้ร่วม ES ซึ่งเป็น anticoagulant ขณะมี active bleeding — จะถูกถ้า bleeding risk ต่ำ", "LDUH ทุก 8 ชม. ก็เป็น anticoagulant ที่เพิ่มเลือดออก ซึ่งยังเป็นยาที่เพิ่มเลือดออกเช่นกัน — จะถูกถ้าเลือดออกหยุดแล้วและ platelet ฟื้น", "ไม่ให้เลยทิ้งความเสี่ยง VTE สูงของผ่าตัดฉุกเฉิน mechanical ทำได้ ซึ่งทิ้งความเสี่ยง VTE สูงของ emergency surgery — จะถูกถ้า VTE risk ต่ำและเดินได้"], "trap": "ห้ามให้ยา anticoagulant ตอนมี active bleeding", "summary": ["High VTE risk แต่ bleeding risk สูง → ใช้ mechanical (IPC) ก่อน", "เติมยาเมื่อ bleeding risk ลดลง", "IPC อยู่ในตัวเลือกของ Moderate และ High", "Anticoagulant ห้ามให้ขณะมี active bleeding หรือ platelet ต่ำมาก", "VTE risk สูงไม่ได้หมายถึงต้องให้ยาเสมอ ต้องชั่งกับ bleeding risk"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 40 (= jod หน้า 37) · ไม่มีสัญลักษณ์", "outside": "นอกสไลด์: การเลือก mechanical ก่อนเมื่อ bleeding risk สูง (สไลด์มีเฉพาะตารางหมวดหมู่)"}),
U({"n": 160, "stem": "A 62-year-old man underwent a major open colectomy for cancer and is ready for discharge on postoperative day 6. His Caprini category is the highest. What is the recommended approach to his pharmacological prophylaxis at discharge?", "opts": ["Stop it at discharge", "Replace it with elastic stockings only", "Give it only on the evening before each clinic visit", "Continue it for exactly two more days", "Continue it for weeks after discharge"], "ans": 4, "notes": "สไลด์ไฟล์ 78 หน้า 40 (= jod หน้า 37) พิมพ์ว่า <b>\"Highest: Pharmacological: LDUH, LMWH, warfarin or F-Xa inhibitor\"</b><br>ลายมือไฟล์ jod หน้า 37 เขียนว่า <b>\"อาจให้ยาหลังผ่า 2 wk\"</b>", "kimg": ["l12_p40", "l12b_p37"], "interp": "ถามระยะเวลาให้ prophylaxis ใน Highest หลังผ่า cancer", "why": "ลายมือ jod: อาจให้ยาต่อหลังผ่า 2 wk ส่วนแนวทาง extended prophylaxis ประมาณ 4 สัปดาห์ (⚠ ตัวเลขสองแหล่งต่างกัน แต่หลักการเดียวกันคือให้ต่อหลังจำหน่าย) โจทย์เป็น cancer surgery ช่องท้องใหญ่และ Caprini Highest ความเสี่ยง VTE ยังคงอยู่หลังกลับบ้าน ลายมือ jod ใกล้แถว Highest เขียนให้ยาหลังผ่าอีกราว 2 สัปดาห์ ขณะแนวปฏิบัติ extended prophylaxis ราว 4 สัปดาห์ จึงต้องไม่หยุดที่จำหน่าย", "wrong": ["หยุดเมื่อจำหน่ายทั้งที่ยังอยู่ในช่วงเสี่ยงหลังผ่าตัดมะเร็ง ซึ่งพลาดช่วงเสี่ยงหลังผ่าตัดมะเร็ง — จะถูกถ้าเป็นผ่าตัดเล็ก score 0–1", "ES อย่างเดียวหลังจำหน่ายไม่พอสำหรับ Highest ซึ่งไม่พอสำหรับ risk ระดับสูงสุด — จะถูกถ้าผู้ป่วยมี score 2 และไม่ต้องใช้ยา", "ไม่มีแนวทางให้ยาเฉพาะวันก่อนนัดตรวจ ซึ่งไม่ใช่แนวทางที่ระบุ — จะถูกถ้าเป็น regimen ที่สไลด์ระบุ", "2 วันสั้นเกินไปสำหรับผู้ป่วยมะเร็งที่เสี่ยง VTE สูงต่อเนื่อง ซึ่งสั้นเกินสำหรับผ่าตัดมะเร็ง — จะถูกถ้าเป็นผ่าตัดเล็ก"], "trap": "คำตอบไม่ขึ้นกับจำนวนสัปดาห์ที่แน่นอน", "summary": ["Highest risk ให้ยาต่อได้หลังจำหน่าย (ลายมือ jod: 2 wk)", "Extended prophylaxis ประมาณ 4 สัปดาห์หลัง cancer surgery ช่องท้องหรืออุ้งเชิงกราน", "ตัวเลขสัปดาห์ของสองแหล่งต่างกัน (⚠) แต่หลักการคือไม่หยุดที่จำหน่าย", "ต้องชั่งกับ bleeding risk", "ตัวเลข 2 สัปดาห์ (jod) กับ 4 สัปดาห์ (แนวทาง) ต่างกัน แต่หลักเดียวกันคือให้ต่อ"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 37 (= 78 หน้า 40) · ไม่มีสัญลักษณ์ · ลายมือ jod", "outside": "นอกสไลด์: แนวคิด extended prophylaxis หลัง cancer surgery (สไลด์ไม่ระบุระยะ)"}),
U({"n": 161, "stem": "A 45-year-old woman recovering from a hernia repair has a temperature of 38.4 °C on postoperative day 2. Her intern wonders whether this reaches the definition of postoperative fever used in the lecture. Which temperature definition does the lecture give?", "opts": ["Temperature above 37 degrees Celsius", "Temperature above 37.5 degrees Celsius", "Temperature above 38 degrees Celsius", "Temperature above 39 degrees Celsius", "Temperature above 40 degrees Celsius"], "ans": 2, "notes": "สไลด์ไฟล์ 78 หน้า 41 พิมพ์ว่า <b>\"Postoperative Fever : > 38 degree\"</b>", "kimg": ["l12_p41", "l12b_p38"], "interp": "ถามเกณฑ์อุณหภูมิของ postoperative fever", "why": "หน้า 41: <b>Postoperative fever = &gt; 38 °C</b> ผู้ป่วย 38.4 จึงเข้าเกณฑ์ โจทย์ให้อุณหภูมิ 38.4 °C ซึ่งเกิน 38 ตามนิยามหน้า 41 ของ 78 จึงนับเป็นไข้หลังผ่า และต้องถูกจัดตามเวลา (POD 2 = acute) แล้วค้นสาเหตุตาม 7 W", "wrong": ["37 °C ต่ำเกินนิยามของสไลด์ ซึ่งต่ำเกินกว่านิยามที่สไลด์ใช้ — จะถูกถ้าถามคำนิยาม low-grade หรือ normal upper limit", "37.5 °C ไม่ใช่เกณฑ์ที่สไลด์ใช้ ซึ่งไม่ใช่เกณฑ์ของสไลด์ — จะถูกถ้าแหล่งอื่นกำหนดเกณฑ์ไข้ต่ำกว่า", "39 °C เป็นไข้สูง ไม่ใช่เกณฑ์ขั้นต่ำของ postoperative fever ซึ่งสูงเกินกว่าเกณฑ์ขั้นต่ำ — จะถูกถ้าถามเรื่อง high fever", "สไลด์ใช้ 40 °C เมื่ออธิบาย MH ที่มี high-grade fever แต่ไม่ใช่นิยามของ postoperative fever ทั่วไปและไม่ใช่เกณฑ์วินิจฉัย MH ซึ่งใช้อธิบาย MH เท่านั้น — จะถูกถ้าถามลักษณะของ MH"], "trap": "สไลด์พูดถึง 40 °C ในบริบท MH เท่านั้น ไม่ใช่เกณฑ์วินิจฉัย", "summary": ["Postoperative fever = อุณหภูมิ &gt;38 °C (78 หน้า 41)", "ผู้ป่วย 38.4 °C เข้าเกณฑ์ ส่วน 38.0 °C ยังไม่เกิน", "MH เป็นไข้สูงมาก (สไลด์ระบุ &gt;40 °C) แต่ไข้สูงเป็นอาการช้าและไม่ใช่เกณฑ์วินิจฉัย", "ไข้หลังผ่าต้องแบ่งตามเวลา immediate, acute, subacute, delayed", "เกณฑ์ &gt;38 °C ใช้กับทุกการผ่าตัดไม่ว่าเล็กหรือใหญ่"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 41 (= jod หน้า 38) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({"n": 162, "stem": "A 33-year-old man has a temperature of 38.6 °C on the first evening after a small lipoma excision under local anesthesia. A junior colleague says that fever after such a minor procedure does not need evaluation. What does the lecture note advise?", "opts": ["Evaluate fever only after abdominal operations", "Evaluate fever only after prolonged operations", "Ignore fever in the first 24 hours", "Always evaluate fever whatever the operation was", "Evaluate fever only if wound is red"], "ans": 3, "notes": "สไลด์ไฟล์ 78 หน้า 41 พิมพ์ว่า <b>\"Postoperative Fever : > 38 degree\"</b><br>ลายมือไฟล์ 78 หน้า 41 เขียนว่า <b>\"✱ ไม่ว่าผ่าอะไรต้องดู fever เสมอ\"</b>", "kimg": ["l12_p41", "l12b_p38"], "interp": "ผ่าตัดเล็กแต่ไข้เกินเกณฑ์ ถามหลักการของไข้หลังผ่า", "why": "ลายมือ 78 หน้า 41: <b>ไม่ว่าผ่าอะไรต้องดู fever เสมอ</b> โจทย์ให้ผ่าเล็กมากแต่ไข้ 38.6 °C เกินนิยาม ลายมือ 78 (✱) ชี้ว่าไม่ว่าผ่าอะไรก็ต้องดูไข้เสมอ เพราะสาเหตุอาจมาจากยา ติดเชื้อเดิม หรือภาวะที่ไม่ขึ้นกับขนาดการผ่า", "wrong": ["ไม่มีการจำกัดเฉพาะผ่าช่องท้อง ลายมือระบุไม่ว่าผ่าอะไรก็ต้องดู เพราะลายมือระบุทุกการผ่าตัด — จะถูกถ้าเป็นนโยบายของหน่วยเฉพาะ", "ไม่จำกัดเฉพาะผ่านาน ผ่าตัดเล็กก็มี SSI หรือ UTI ได้ เพราะผ่าตัดเล็กก็เกิดไข้จากสาเหตุสำคัญได้ — จะถูกถ้ามีเกณฑ์ผ่าเกิน 2 ชม.", "ไม่มีคำแนะนำให้เมินไข้ใน 24 ชม. เพราะ MH และ transfusion reaction เกิดเร็ว เพราะ MH และ transfusion reaction เกิดเร็ว — จะถูกถ้าไข้ต่ำและมีสัญญาณชีพคงที่ ซึ่งสังเกตได้", "ไข้บางสาเหตุ เช่น UTI, VTE, MH ไม่มีแผลแดง เพราะ UTI และ VTE ไม่ทำให้แผลแดง — จะถูกถ้าเฉพาะสงสัย SSI"], "trap": "ขนาดผ่าตัดไม่ได้ทำให้ละเลยไข้ได้", "summary": ["Postoperative fever &gt;38 °C ต้องประเมินเสมอ", "ลายมือ 78: ไม่ว่าผ่าอะไรต้องดู fever เสมอ", "ประเมินตามเวลาที่เกิดและ 7 W", "ผ่าตัดเล็กไม่ได้ทำให้ละเลยไข้ได้", "ขนาดการผ่าตัดไม่ใช่เหตุผลที่จะข้ามการประเมินไข้"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 41 (= jod หน้า 38) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({"n": 163, "stem": "A 58-year-old man has a temperature of 38.8 °C on postoperative day 4 after a colectomy. Into which timing category of postoperative fever does this episode fall?", "opts": ["Acute fever", "Immediate fever", "Subacute fever", "Delayed fever", "Chronic fever"], "ans": 0, "notes": "ลายมือไฟล์ jod หน้า 38 เขียนว่า <b>\"acute : 1st wk after Sx\"</b><br>สไลด์ไฟล์ 78 หน้า 44–45 หัวข้อ <b>\"ACUTE FEVER\"</b> แยกตาม POD", "kimg": ["l12_p44", "l12b_p38"], "interp": "POD 4 อยู่ในสัปดาห์แรก", "why": "jod หน้า 38: <b>acute = 1st wk after Sx</b> และสไลด์ 78 หน้า 44–45 ระบุ Acute fever ตาม POD 1–7 โจทย์ให้ POD 4 หลัง colectomy ซึ่งอยู่ในสัปดาห์แรก หน้า 44–45 ของ 78 แยก acute ตาม POD 1–3, 3–5, 5 และ 7 และลายมือ jod ระบุ acute คือ 1st wk after Sx", "wrong": ["Immediate คือไข้ในชั่วโมงแรกหลังผ่า เช่นใน PACU จาก MH หรือเลือด ซึ่งต้องเกิดภายในชั่วโมงแรก — จะถูกถ้าไข้เกิด 1–2 ชม. หลังผ่า", "Subacute คือสัปดาห์ที่ 1–4 เช่น deep space abscess ที่ POD 10–14 ซึ่งเกิดสัปดาห์ที่ 1–4 — จะถูกถ้าไข้เกิดสัปดาห์ที่ 2–3", "Delayed คือหลายสัปดาห์ถึงเกิน 1 เดือน เช่น postpericardiotomy ซึ่งเกิน 1 เดือน — จะถูกถ้าไข้เกิดที่ 6–8 สัปดาห์", "สไลด์แบ่งไข้หลังผ่าตัดเป็น immediate, acute, subacute, delayed เท่านั้น ไม่มีหมวด chronic — จะถูกถ้าถามไข้เรื้อรังที่ไม่ได้สัมพันธ์กับการผ่าตัด เช่น fever of unknown origin ที่เป็นมานาน >3 สัปดาห์"], "trap": "เส้นแบ่ง acute กับ subacute คือสิ้นสัปดาห์แรก", "summary": ["Immediate = ชั่วโมงแรกหลังผ่า (jod: hrs after Sx)", "Acute = สัปดาห์แรก (POD 1–7) เช่น atelectasis, UTI, SSI, VTE", "Subacute = 1–4 สัปดาห์ เช่น deep space infection", "Delayed = &gt;1 เดือน (หรือ &gt;4 สัปดาห์ ตามหน้า 43) เช่น SSTI, viral, postpericardiotomy", "เส้นแบ่งสัปดาห์แรกคือจุดแยก acute จาก subacute"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 38 (= 78 หน้า 44–45) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 164, "stem": "A 49-year-old woman has a fever of 38.5 °C three weeks after an open hysterectomy. She had been afebrile and discharged on day 5. Which timing category of postoperative fever applies?", "opts": ["Immediate fever", "Acute fever", "Delayed fever", "Subacute fever", "Perioperative fever"], "ans": 3, "notes": "ลายมือไฟล์ jod หน้า 38 เขียนว่า <b>\"subacute : 1–4 wks after Sx\"</b><br>สไลด์ไฟล์ 78 หน้า 46 พิมพ์ว่า <b>\"Postoperative weeks 1 and 4\"</b>", "kimg": ["l12_p46", "l12b_p38"], "interp": "ไข้สัปดาห์ที่ 3 หลังผ่า", "why": "jod หน้า 38: <b>subacute = 1–4 wks after Sx</b> สอดคล้องสไลด์ 78 หน้า 46 ที่ตีความว่า weeks 1 to 4 (⚠ ข้อความ \"weeks 1 and 4\") โจทย์ให้ไข้สัปดาห์ที่ 3 ในผู้ป่วยที่จำหน่ายแล้ว ซึ่งอยู่ระหว่าง 1–4 สัปดาห์ตามลายมือ jod หน้า 38 และสไลด์หน้า 46 เขียนว่า weeks 1 and 4 ซึ่งอ่านเป็นช่วงสัปดาห์ที่ 1 ถึง 4 ⚠", "wrong": ["Immediate คือชั่วโมงแรก เช่นในห้องพักฟื้น ซึ่งไข้ในชั่วโมงแรกเท่านั้น — จะถูกถ้าไข้เกิดไม่กี่ชั่วโมงหลังผ่า", "Acute คือสัปดาห์แรก (POD 1–7) ซึ่งสัปดาห์ที่ 3 เลยช่วงนี้ ซึ่งจบภายในสัปดาห์แรก — จะถูกถ้าไข้เกิด POD 3–5", "Delayed คือ &gt;1 เดือน ซึ่งสัปดาห์ที่ 3 ยังไม่ถึง ซึ่งเกิน 1 เดือน — จะถูกถ้าไข้เกิดสัปดาห์ที่ 6–8", "ไม่มีหมวด perioperative แยกในหมวดไข้ ซึ่งไข้ระหว่างผ่าตัดจัดเป็น immediate — จะถูกถ้าไข้เกิดตอนผ่าตัดซึ่งเป็น immediate"], "trap": "ข้อความ 'weeks 1 and 4' อ่านเป็นช่วงสัปดาห์ที่ 1 ถึง 4", "summary": ["Subacute fever = 1–4 สัปดาห์หลังผ่า (ลายมือ jod)", "สไลด์เขียน weeks 1 and 4 ตีความเป็นสัปดาห์ที่ 1 ถึง 4 (⚠)", "สาเหตุเด่น: deep space infection (abdominal collection), drug fever, device or implant infection", "Deep space ตรวจด้วย DRE และ CT", "ไข้ที่จำหน่ายแล้วสัปดาห์ที่ 2–3 มักเป็น deep space infection หรือ drug fever"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 46 (= jod หน้า 38, 42) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 165, "stem": "A 61-year-old man develops a fever of 38.4 °C eight weeks after a coronary artery bypass operation. Which timing category of postoperative fever best describes this?", "opts": ["Delayed fever", "Immediate fever", "Acute fever", "Subacute fever", "Perioperative fever"], "ans": 0, "notes": "ลายมือไฟล์ jod หน้า 38 เขียนว่า <b>\"delayed : > 1 month after Sx\"</b><br>สไลด์ไฟล์ jod หน้า 43 พิมพ์ว่า <b>\"Fever after more than 4 weeks\"</b>", "kimg": ["l12b_p43", "l12b_p38"], "interp": "ไข้ 8 สัปดาห์หลังผ่า เกินช่วง subacute", "why": "jod หน้า 38 ระบุ delayed &gt;1 month และหน้า 43 ระบุ more than 4 weeks (⚠ ต่างกันเล็กน้อย แต่ 8 สัปดาห์เข้าทั้งสอง) โจทย์ให้ไข้ 8 สัปดาห์หลัง CABG ซึ่งเกิน 4 สัปดาห์ตามสไลด์ jod หน้า 43 และเกิน 1 เดือนตามลายมือหน้า 38 สองนิยามต่างกันเล็กน้อยแต่คำตอบเดียวกัน (⚠) สาเหตุทั่วไปคือ SSTI, viral และ postpericardiotomy", "wrong": ["Immediate คือชั่วโมงแรกหลังผ่า ซึ่งต้องเกิดในชั่วโมงแรก — จะถูกถ้าไข้เกิดใน PACU", "Acute คือสัปดาห์แรก ซึ่งต้องเกิดภายใน 7 วัน — จะถูกถ้าไข้เกิดภายใน 7 วัน", "Subacute คือ 1–4 สัปดาห์ ซึ่ง 8 สัปดาห์เลยช่วงนี้ ซึ่งจบก่อนสัปดาห์ที่ 4 — จะถูกถ้าไข้เกิดสัปดาห์ที่ 2–4", "ไม่มีหมวด perioperative ในรายการไข้หลังผ่า ซึ่งไม่ใช่หมวดของไข้หลังผ่า — จะถูกถ้าเป็นไข้ระหว่างผ่าซึ่งจัดเป็น immediate"], "trap": "ขอบเขต 4 สัปดาห์กับ 1 เดือนต่างกันเล็กน้อย", "summary": ["Delayed fever = &gt;1 เดือนหลังผ่า (jod หน้า 38) หรือ &gt;4 สัปดาห์ (jod หน้า 43) ⚠ ต่างกันเล็กน้อย", "สาเหตุ: SSTI, viral infections, postpericardiotomy syndrome (noninfection)", "ไข้ 8 สัปดาห์เข้าทั้งสองนิยาม", "ต้องแยกจาก subacute (1–4 สัปดาห์)", "ผู้ป่วยหลังผ่าตัดหัวใจที่มีไข้ช้าให้นึกถึง postpericardiotomy"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 38, 43 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 166, "stem": "On postoperative day 5 a 64-year-old man has a temperature of 38.7 °C. Examination shows erythema, tenderness and purulent discharge around the entry site of his subclavian central venous catheter. Using the \"W\" mnemonic of the lecture, which W category does the most likely cause belong to?", "opts": ["Wind", "Wire", "Water", "Wound", "Walking"], "ans": 1, "notes": "สไลด์ไฟล์ 78 หน้า 43 พิมพ์ลำดับ <b>\"Wind – atelectasis, pneumonia · Water – UTI · Wound – SSI · Wire – central catheter · Walking – VTE\"</b>", "kimg": ["l12_p43", "l12b_p40"], "interp": "ติดเชื้อที่ตำแหน่ง central line", "why": "78 หน้า 43: <b>Wire = central catheter</b> (jod ใช้ Vein) CRBSI และ thrombophlebitis จึงอยู่ในกลุ่ม Wire โจทย์ระบุ erythema และหนองที่ตำแหน่งใส่ subclavian CVC ซึ่งหน้า 43 ของ 78 จัดเป็น Wire (central catheter) และหน้า 45 ระบุ CRBSI และ thrombophlebitis ที่ POD 5", "wrong": ["Wind คือ atelectasis และ pneumonia ซึ่งต้องมีอาการทางปอด ซึ่งต้องมีอาการทางปอด — จะถูกถ้ามีไอเสมหะหรือ CXR ผิดปกติ", "Water คือ UTI จาก Foley ซึ่งต้องมี Foley และอาการปัสสาวะ — จะถูกถ้ามีสายสวนและปัสสาวะขุ่นหรือแสบขัด", "Wound คือ SSI ที่แผลผ่าตัด แต่แผลผ่าตัดของผู้ป่วยรายนี้ปกติ ซึ่งแผลผ่าตัดของผู้ป่วยปกติ — จะถูกถ้าแผลผ่าตัดแดงมีหนอง", "Walking คือ VTE ซึ่งต้องมีขาบวมโดยไม่มีแผลที่สาย — จะถูกถ้ามีขาบวมหรือหอบเฉียบพลันโดยไม่มีสายหลอดเลือดอักเสบ"], "trap": "ไม่ใช่ Wound เพราะแผลผ่าตัดปกติ", "summary": ["W ใน 78 หน้า 43 เรียงตามเวลา (ลายมือ): Wind, Water, Wound, Wire, Walking", "Wind = atelectasis, pneumonia · Water = UTI · Wound = SSI", "Wire = central catheter (CRBSI, thrombophlebitis) · Walking = VTE", "jod ใช้ Vein แทน Wire/Walking และตาราง 7 W เพิ่ม Wonder drugs, Withdrawal, Wonky glands", "รอยโรคที่สายหลอดเลือดคือ Wire ไม่ใช่ Wound"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 43 (= jod หน้า 40) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({"n": 167, "stem": "A 60-year-old man starts a new antibiotic on postoperative day 6 for a chest infection. On day 10 he develops a fever of 38.2 °C with a rash and peripheral eosinophilia, while wound, chest and urine examinations are unremarkable. According to the fever evaluation table, which approach is appropriate?", "opts": ["Order a venous Doppler ultrasound", "Remove the urinary catheter and send urine culture", "Administer a benzodiazepine and consult psychiatry", "Give fluid resuscitation and glucocorticoids", "Stop suspected drugs and give supportive care"], "ans": 4, "notes": "ตารางไฟล์ jod หน้า 38 แถว <b>\"Wonder drugs · Medications · Any · Review medication history and patient history, stop suspected medications, provide supportive care\"</b><br>สไลด์ 78 หน้า 46 <b>\"Drugs fever — Diagnosis of exclusion includes rash and peripheral eosinophilia\"</b>", "kimg": ["l12b_p38", "l12_p46"], "interp": "ไข้มา ผื่นและ eosinophilia หลังเริ่มยาใหม่", "why": "ตาราง Wonder drugs: เวลา <b>Any</b> วิธีจัดการคือทบทวนยา หยุดยาที่สงสัย และดูแลประคับประคอง โจทย์เริ่มยาใหม่ก่อนไข้ มีผื่นและ eosinophilia ในขณะที่ตรวจแผล ปอด และปัสสาวะปกติ ตรงกับ drug fever ที่สไลด์หน้า 46 เรียกว่า diagnosis of exclusion และตาราง Wonder drugs เวลา any แนะนำทบทวนยาและหยุดยาที่สงสัย", "wrong": ["Doppler ใช้ใน DVT ซึ่งต้องมีขาบวมและไข้ &gt;72 ชม. ซึ่งต้องมีขาบวมและเวลา &gt;72 ชม. — จะถูกถ้าผู้ป่วยมีขาบวมข้างเดียว", "เอาสายสวนออกและส่งเพาะเชื้อปัสสาวะเป็นของ UTI ซึ่งต้องมีสายสวนและปัสสาวะผิดปกติ — จะถูกถ้ามี Foley ร่วมกับ pyuria", "Benzodiazepine เป็นของ delirium tremens ซึ่งต้องมีประวัติถอนสุรา — จะถูกถ้าผู้ป่วยดื่มหนักและสั่นวุ่นวายหลัง 72 ชม.", "Fluid และ glucocorticoid เป็นของ adrenal insufficiency ซึ่งต้องมีประวัติ steroid และช็อก — จะถูกถ้าผู้ป่วยใช้ steroid เรื้อรังและช็อกใน 12 ชม. แรก"], "trap": "Drug fever เป็น diagnosis of exclusion", "summary": ["Wonder drugs = ไข้จากยา เวลา any", "แนวทาง: ทบทวนประวัติยา หยุดยาที่สงสัย ดูแลประคับประคอง", "Drug fever เป็น diagnosis of exclusion มักมีผื่นและ peripheral eosinophilia (78 หน้า 46) ไข้มักไม่สูง (ลายมือ jod)", "ต้องแยก SSI, UTI, pneumonia, DVT ก่อน", "Drug fever ต้องตัดสาเหตุอื่นก่อนจึงสรุป"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 38 + ไฟล์ 78 หน้า 46 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 168, "img": "l12_q168", "stem": "A bedridden 74-year-old woman has fever and a swollen left calf on postoperative day 4. According to the table shown, which cause is expected to present only after more than 72 hours?", "opts": ["Atelectasis", "Urinary tract infection", "Deep vein thrombosis", "Thyroid storm", "Adrenal insufficiency"], "ans": 2, "notes": "ตารางไฟล์ jod หน้า 38 <b>\"Walking · DVT · &gt;72 · Venous Doppler ultrasound, sequential compression devices\"</b>", "kimg": ["l12b_p38", "l12_p43"], "interp": "ขาบวมและไข้วันที่ 4 ถามเวลาที่ตารางระบุ", "why": "ตาราง: <b>DVT &gt;72 ชม.</b> (Walking) แนวทางคือ venous Doppler ultrasound และ sequential compression devices โจทย์ให้ไข้ POD 4 ร่วมกับขาซ้ายบวมในผู้ป่วยนอนติดเตียง ตรงกับแถว DVT ในกลุ่ม Walking ซึ่งตารางระบุ &gt;72 ชม. และจัดการด้วย venous Doppler ultrasound และ sequential compression devices", "wrong": ["Atelectasis มีเวลา &lt;48 ชม. ซึ่งเกิด &lt;48 ชม. — จะถูกถ้าไข้และหายใจตื้นใน 2 วันแรก", "UTI มีเวลา &gt;48 ชม. ไม่ใช่ &gt;72 ซึ่งเป็น &gt;48 ไม่ใช่ &gt;72 — จะถูกถ้าตารางระบุ 72 ชม. สำหรับ UTI", "Thyroid storm มีเวลา &lt;48 ชม. ซึ่งเกิด &lt;48 ชม. เช่นกัน — จะถูกถ้ามี Graves ที่ควบคุมไม่ดีและไข้วันแรก", "Adrenal insufficiency มีเวลา &lt;12 ชม. ซึ่งเกิด &lt;12 ชม. — จะถูกถ้าผู้ป่วยใช้ steroid เรื้อรังและช็อกหลังผ่าไม่นาน"], "trap": "UTI และ pneumonia เป็น &gt;48 ส่วน SSI และ DVT เป็น &gt;72", "summary": ["ตาราง 7 W: Atelectasis &lt;48 · Pneumonia &gt;48 · UTI &gt;48 · SSI &gt;72 · DVT &gt;72 · Delirium tremens &gt;72", "Adrenal insufficiency &lt;12 · Thyroid storm &lt;48 · Medications any", "DVT (Walking): venous Doppler ultrasound และ sequential compression devices", "ขาบวมข้างเดียวร่วมกับไข้ต้องส่ง Doppler", "แยก &gt;48 (pneumonia, UTI) จาก &gt;72 (SSI, DVT, DTs)"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 38 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 169, "img": "l12_q169", "stem": "A 52-year-old man with heavy daily alcohol use undergoes a hernia repair. On postoperative day 4 (96 hours) he is agitated with tremor and a fever of 38.5 °C. Which approach is shown for this cause in the table?", "opts": ["Chest radiograph, sputum culture and antibiotics", "Benzodiazepine and psychiatry consultation", "Removal of catheter, urinalysis and urine culture", "Venous Doppler ultrasound and compression devices", "Administer a beta-blocker, a thionamide and iodine"], "ans": 1, "notes": "ตารางไฟล์ jod หน้า 38 แถว <b>\"Withdrawal · Delirium tremens · &gt;72 · Review patient history, administer benzodiazepine, consult psychiatry\"</b><br>สไลด์ 78 หน้า 47 <b>\"Alcohol withdrawal\"</b>", "kimg": ["l12b_p38", "l12_p47"], "interp": "ดื่มแอลกอฮอล์หนัก อาการวุ่นวายสั่นหลัง 72 ชม.", "why": "ตาราง Withdrawal: delirium tremens เวลา <b>&gt;72 ชม.</b> จัดการด้วย <b>benzodiazepine</b> และปรึกษาจิตเวช โจทย์ให้ประวัติดื่มหนักและอาการสั่นวุ่นวายที่ 96 ชม. ตรงกับ Withdrawal ที่ตารางระบุ delirium tremens &gt;72 ชม. จัดการด้วยทบทวนประวัติ ให้ benzodiazepine และปรึกษาจิตเวช", "wrong": ["CXR และ sputum culture เป็นของ pneumonia ซึ่งต้องมีไอเสมหะและ crackles ซึ่งต้องมีอาการปอด — จะถูกถ้าผู้ป่วยมีอาการทางปอดชัดเจน", "Remove catheter และ UA เป็นของ UTI ซึ่งต้องมีสายสวน — จะถูกถ้าผู้ป่วยมี Foley คาและปัสสาวะขุ่น", "Doppler และ compression device เป็นของ DVT ซึ่งต้องมีขาบวม — จะถูกถ้ามีขาบวมและไข้", "Beta-blocker, thionamide และ iodine เป็นของ thyroid storm ซึ่งต้องมี hyperthyroidism — จะถูกถ้าผู้ป่วยมี hyperthyroidism และ tachycardia สูง"], "trap": "ต้องอ่านเวลา &gt;72 ชม. ที่ตรงกับ DTs", "summary": ["Withdrawal = delirium tremens เวลา &gt;72 ชม.", "วิธีจัดการ: ทบทวนประวัติ ให้ benzodiazepine ปรึกษาจิตเวช", "Alcohol withdrawal เป็นสาเหตุอื่นของไข้ (78 หน้า 47)", "ซักประวัติดื่มก่อนผ่าตัดเพื่อคาดการณ์", "แยก withdrawal จากไข้ติดเชื้อโดยประวัติการดื่มและช่วงเวลา &gt;72 ชม."], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 38 + ไฟล์ 78 หน้า 47 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 170, "stem": "A 56-year-old woman who has taken prednisolone for years has hypotension and a fever of 38.4 °C eight hours after a laparotomy. Her wound and chest are unremarkable. Which management is listed for this cause?", "opts": ["Antibiotics and sputum culture", "Beta-blocker, thionamide and iodine", "Benzodiazepine and psychiatry consult", "Fluid resuscitation and glucocorticoids", "Stop all medications and observe"], "ans": 3, "notes": "ตารางไฟล์ jod หน้า 38 แถว <b>\"Wonky glands · Adrenal insufficiency · &lt;12 · Review patient history and medication history, administer fluid resuscitation and glucocorticoids\"</b>", "kimg": ["l12b_p38", "l12_p43"], "interp": "ใช้ steroid เรื้อรัง ช็อกและไข้ภายในชั่วโมงแรก", "why": "ตาราง Wonky glands: <b>adrenal insufficiency &lt;12 ชม.</b> → fluid resuscitation + glucocorticoids โจทย์ให้ prednisolone เรื้อรัง ความดันต่ำ และไข้ภายใน 8 ชม. ซึ่งอยู่ในช่วง &lt;12 ชม. ของ adrenal insufficiency ตาราง Wonky glands แนะนำทบทวนประวัติยาและให้ fluid resuscitation ร่วมกับ glucocorticoid", "wrong": ["Antibiotics และ sputum culture เป็นของ pneumonia ซึ่งไม่มีอาการทางปอดในผู้ป่วยรายนี้ ซึ่งไม่มีอาการปอด — จะถูกถ้ามี crackles ไอเสมหะ", "Beta-blocker, thionamide, iodine เป็นของ thyroid storm ซึ่งต้องมี hyperthyroidism — จะถูกถ้ามี hyperthyroid และ tachycardia", "Benzodiazepine เป็นของ withdrawal &gt;72 ชม. ซึ่งต้องมีประวัติถอนสุรา — จะถูกถ้ามีประวัติดื่มหนักและสั่น", "การหยุดยาทั้งหมดอันตรายใน steroid dependence เพราะต้องเสริม glucocorticoid ซึ่งอันตรายในผู้ใช้ steroid เรื้อรัง — จะถูกถ้าเป็น drug fever ที่ต้องหยุดยาที่สงสัยเฉพาะตัว"], "trap": "การหยุด steroid ที่ใช้เรื้อรังเป็นสาเหตุ", "summary": ["Adrenal insufficiency เป็นสาเหตุของไข้ใน &lt;12 ชม. (Wonky glands)", "เหตุ: ผู้ป่วยใช้ steroid เรื้อรังที่ไม่ได้รับ stress dose", "แนวทาง: ทบทวนประวัติยา ให้ fluid resuscitation และ glucocorticoid", "คิดถึงเมื่อมีความดันต่ำร่วมไข้ในชั่วโมงแรก", "ผู้ใช้ steroid เรื้อรังต้องได้ stress dose ช่วงผ่าตัด"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 38 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 171, "stem": "A 38-year-old woman with poorly controlled Graves disease undergoes an emergency laparotomy. On the morning after surgery she has fever 39.6 °C, tachycardia 150 per minute and agitation. Which treatment combination does the lecture table list?", "opts": ["Fluid resuscitation and glucocorticoids", "Incentive spirometry and early mobilization", "A beta-blocker, a thionamide and iodine", "Dantrolene and cooling blankets", "Venous Doppler and compression devices"], "ans": 2, "notes": "ตารางไฟล์ jod หน้า 38 แถว <b>\"Wonky glands · Thyroid storm · &lt;48 · administer a beta-blocker, a thionamide, and iodine and consult endocrinology\"</b>", "kimg": ["l12b_p38", "l12_p43"], "interp": "Graves ควบคุมไม่ดี ไข้ใจสั่น วุ่นวายใน 24 ชม.", "why": "ตาราง: <b>thyroid storm &lt;48 ชม.</b> ใช้ beta-blocker, thionamide, iodine และปรึกษา endocrinology โจทย์ให้ Graves ควบคุมไม่ดี ไข้ 39.6 ชีพจร 150 และกระสับกระส่ายในเช้าวันหลังผ่า ตรงกับ thyroid storm (&lt;48 ชม.) ที่ตารางแนะนำ beta-blocker, thionamide, iodine และปรึกษา endocrinology", "wrong": ["Fluid และ glucocorticoid เป็นของ adrenal insufficiency ซึ่งต้องมีประวัติ steroid — จะถูกถ้ามีประวัติใช้ steroid และเกิด &lt;12 ชม.", "Incentive spirometry เป็นของ atelectasis ซึ่งต้องมี CXR volume loss — จะถูกถ้ามี CXR volume loss ไข้ต่ำ", "Dantrolene และ cooling เป็นของ MH ซึ่งต้องมี rigidity — จะถูกถ้ามี rigidity และได้ volatile agent กับ succinylcholine", "Doppler และ compression device เป็นของ DVT ซึ่งต้องมีขาบวม — จะถูกถ้ามีขาบวมใน &gt;72 ชม."], "trap": "Dantrolene ไม่ใช่ยาของ thyroid storm", "summary": ["Thyroid storm เกิด &lt;48 ชม. (Wonky glands)", "แนวทาง: beta-blocker, thionamide, iodine และปรึกษา endocrinology", "เบาะแส: Graves ควบคุมไม่ดี, tachycardia, agitation, ไข้สูง", "ต่างจาก MH ที่มี rigidity และ EtCO2 สูง", "ไข้สูงร่วมหัวใจเต้นเร็วมากในผู้ป่วย Graves ใน 48 ชม. แรกคือ thyroid storm"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 38 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 172, "stem": "A 66-year-old smoker has a fever of 38.9 °C, productive cough and crackles at the right base on postoperative day 3 (72 hours) after a gastrectomy. Which approach does the fever evaluation table list for this problem occurring after 48 hours?", "opts": ["Incentive spirometry and early mobilization", "Venous Doppler ultrasound", "Chest radiograph, sputum culture and antibiotics", "Removal of catheter and urinalysis", "Review medication history and stop suspected drugs"], "ans": 2, "notes": "ตารางไฟล์ jod หน้า 38 แถว <b>\"Wind · Pneumonia · &gt;48 · Chest radiograph, sputum culture, antibiotics\"</b>", "kimg": ["l12b_p38", "l12_p44"], "interp": "ไอมีเสมหะ ปอดมี crackles หลัง 48 ชม.", "why": "ตาราง: <b>pneumonia &gt;48 ชม.</b> → CXR, sputum culture, antibiotics (atelectasis &lt;48 ชม. ใช้ incentive spirometry) โจทย์ให้ไอมีเสมหะ crackles ที่ฐานปอดขวา และเวลา 72 ชม. (&gt;48) ซึ่งตารางจัดเป็น pneumonia แนะนำ chest radiograph, sputum culture และ antibiotics ส่วน atelectasis &lt;48 ชม. ใช้ incentive spirometry", "wrong": ["Incentive spirometry เป็นของ atelectasis ที่เกิด &lt;48 ชม. และไม่มีเสมหะหนอง ซึ่งใช้กับ atelectasis เร็วกว่า 48 ชม. — จะถูกถ้าไข้ POD 1 และ CXR volume loss", "Doppler เป็นของ DVT ซึ่งต้องมีขาบวม — จะถูกถ้ามีขาบวมและไข้ &gt;72 ชม.", "Remove catheter เป็นของ UTI ซึ่งต้องมีสายสวน — จะถูกถ้ามี Foley และปัสสาวะผิดปกติ", "Stop drugs เป็นของ drug fever ซึ่งต้องมีผื่น — จะถูกถ้ามีผื่นและ eosinophilia โดยไม่มีอาการปอด"], "trap": "ต้องแยก atelectasis (&lt;48) กับ pneumonia (&gt;48)", "summary": ["Pneumonia เป็น Wind ที่เกิด &gt;48 ชม.", "แนวทาง: chest radiograph, sputum culture, antibiotics", "Atelectasis &lt;48 ชม. ใช้ incentive spirometry, pulmonary toilet, early mobilization", "Unresolved atelectasis กลายเป็น pneumonia ที่ POD 3–5", "ผู้สูบบุหรี่หลังผ่าช่องท้องส่วนบนเสี่ยง pneumonia สูง"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 38 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 173, "stem": "A 72-year-old man with an indwelling Foley catheter has dysuria, suprapubic discomfort and a fever of 38.5 °C on postoperative day 3. What is the first step listed in the evaluation table for this problem?", "opts": ["Start broad spectrum antibiotics and keep the catheter", "Obtain a venous Doppler of both legs", "Perform CT of the abdomen at once", "Give incentive spirometry", "Remove the catheter, then urinalysis and urine culture"], "ans": 4, "notes": "ตารางไฟล์ jod หน้า 38 แถว <b>\"Water · UTI · &gt;48 · Removal of catheter, urinalysis, urine culture, antibiotics\"</b><br>ลายมือ 78 หน้า 44–45 <b>\"จาก foley catheter\"</b>", "kimg": ["l12b_p38", "l12_p44"], "interp": "Foley + dysuria + ไข้ POD 3", "why": "ตาราง Water: <b>UTI &gt;48 ชม.</b> → เอา catheter ออก, urinalysis, urine culture, antibiotics โจทย์ให้ Foley คาอยู่ ไข้ แสบขัด และปวดหัวหน่าวที่ POD 3 ตรงกับ UTI (&gt;48 ชม.) ตารางแนะนำเอา catheter ออกก่อนแล้ว urinalysis, urine culture และ antibiotics", "wrong": ["เก็บสายสวนและให้ antibiotics ไม่แก้แหล่งของเชื้อ ซึ่งไม่แก้แหล่งเชื้อ — จะถูกถ้าผู้ป่วยจำเป็นต้องคาสายต่อเพราะ retention", "Doppler เป็นของ DVT ซึ่งต้องมีขาบวม — จะถูกถ้ามีขาบวมข้างเดียว", "CT ท้องเป็นของ deep space infection ที่ POD 7–10 ซึ่งต้องมี collection — จะถูกถ้าปวดท้องและไข้สูงต่อเนื่อง", "Incentive spirometry เป็นของ atelectasis ซึ่งต้องมี CXR ผิดปกติ — จะถูกถ้ามี CXR volume loss"], "trap": "ต้องเอา catheter ออกก่อน ไม่ใช่เพียงให้ยา", "summary": ["UTI (Water) เกิด &gt;48 ชม. มักเป็น cath-related (jod)", "แนวทาง: เอา catheter ออก, urinalysis, urine culture, antibiotics", "POD 3–5 คือช่วง cath และ wound (jod)", "เอา Foley ออกให้เร็วที่สุดเพื่อป้องกัน", "แหล่งเชื้อต้องถูกขจัดควบคู่กับยา"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 38 + ไฟล์ 78 หน้า 44 · ไม่มีสัญลักษณ์ · ลายมือ jod + 78"}),
U({"n": 174, "stem": "A 58-year-old woman has a fever of 39.1 °C on postoperative day 5 after a colectomy. The midline wound is swollen with spreading redness and fluctuance, and she has pain at rest. Management of a deep or organ space SSI is listed in the table. Which approach is correct?", "opts": ["Screening blood count and antibiotics only", "Incentive spirometry and early mobilization", "Imaging with drainage, culture and antibiotics", "Venous Doppler and compression devices", "Review of all drugs and observation only"], "ans": 2, "notes": "ตารางไฟล์ jod หน้า 38 แถว <b>\"Wound · SSI · &gt;72 · … radiography, OR or interventional radiology drainage, culture, and antibiotics (for a deep or organ/space SSI)\"</b>", "kimg": ["l12b_p38", "l12_p45"], "interp": "แผลบวมแดง fluctuate ปวดขณะพัก = SSI ลึก", "why": "ตาราง: SSI &gt;72 ชม. ถ้า deep/organ space ต้อง <b>radiography, drainage (OR/IR), culture, antibiotics</b> ส่วน superficial ใช้ CBC with differential และ antibiotics โจทย์ให้แผลบวมแดงกระจาย มี fluctuance และปวดขณะพัก (เกิน 72 ชม.) ซึ่งสื่อถึง SSI ลึกหรือ organ space ตารางแนะนำ radiography, drainage โดยผ่าตัดหรือ IR, culture และ antibiotics ต่างจาก superficial ที่ใช้ CBC และ antibiotics", "wrong": ["CBC และ antibiotics เป็นแนวทางของ superficial SSI ซึ่งเป็นแนวทางของ SSI ตื้นเท่านั้น — จะถูกถ้าเป็นแผลแดงตื้น ไม่มี collection", "Incentive spirometry เป็นของ atelectasis ซึ่งต้องมี CXR volume loss — จะถูกถ้ามี CXR volume loss", "Doppler เป็นของ DVT ซึ่งต้องมีขาบวม — จะถูกถ้ามีขาบวมข้างเดียว", "Observation อย่างเดียวไม่พอสำหรับแผลที่มีหนองและปวดขณะพัก ซึ่งไม่เพียงพอเมื่อมี fluctuance — จะถูกถ้าไม่มี wound sign และไข้ต่ำ"], "trap": "ต้องแยก superficial กับ deep SSI", "summary": ["SSI (Wound) เกิด &gt;72 ชม.", "Superficial SSI: CBC with differential และ antibiotics", "Deep หรือ organ/space SSI: radiography, drainage โดยผ่าตัดหรือ IR, culture, antibiotics", "ปวดแผลแม้นอนนิ่งชี้ wound infection (ลายมือ jod)", "fluctuance หมายถึงมี collection ที่ต้อง drain"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 38 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 175, "stem": "A house officer is reviewing the usual order in which febrile problems appear after abdominal surgery. Which sequence of causes from earliest to latest matches the handwritten note on the acute fever page?", "opts": ["Water, then Wind, then Vein, then Wound", "Wound, then Wind, then Water, then Vein", "Vein, then Wound, then Water, then Wind", "Wind, then Wound, then Vein, then Water", "Wind, then Water, then Wound, then Vein"], "ans": 4, "notes": "ลายมือไฟล์ jod หน้า 40 (ACUTE FEVER) เขียนว่า <b>\"Wind – Water – Wound – Vein\"</b><br>สไลด์ 78 หน้า 44–45 POD 1–3, 3–5, 5, 7", "kimg": ["l12b_p40", "l12_p44"], "interp": "ถามลำดับ W ตามเวลา", "why": "jod หน้า 40: <b>Wind – Water – Wound – Vein</b> ตรงกับ POD 1–3 ปอด, 3–5 UTI/ปอดอักเสบ, 5 แผล, 7 VTE โจทย์ถามลำดับตามลายมือ jod หน้า 40 ที่เขียน Wind – Water – Wound – Vein ซึ่งสอดคล้องกับ POD ในสไลด์ 78 คือ POD 1–3 ปอด, 3–5 UTI/pneumonia, 5 แผลหรือสาย และ 7 VTE", "wrong": ["Water ก่อน Wind ไม่ตรงลำดับ เพราะ atelectasis เกิดวัน 1–3 ก่อน UTI วัน 3–5 ซึ่งสลับ atelectasis กับ UTI — จะถูกถ้าผู้ป่วยมี Foley คามาก่อน", "Wound ก่อน Wind ไม่ตรง เพราะแผลติดเชื้อมักเกิด POD 5–7 ซึ่งให้แผลเกิดก่อนปอด — จะถูกถ้าเป็น necrotizing SSI ที่เกิดเร็ว", "Vein ก่อน เป็นลำดับย้อน VTE มักเกิดช้า POD 7 ซึ่งเรียงย้อนจาก VTE — จะถูกถ้าผู้ป่วยนอนนานก่อนผ่า", "Water ท้ายสุดผิด เพราะ UTI เกิด POD 3–5 ซึ่งวาง UTI ท้ายสุด — จะถูกถ้าสายสวนถูกใส่ตอนปลายสัปดาห์"], "trap": "Vein (หรือ Wire/Walking) มักมาทีหลังสุด", "summary": ["ลายมือ jod: Wind – Water – Wound – Vein ตามเวลา", "Wind POD 1–3 · Water POD 3–5 · Wound POD 5–7 · Vein/VTE POD 7", "สไลด์ 78 หน้า 43 มี Wire ระหว่าง Wound กับ Walking", "ใช้เรียงสาเหตุไข้ในสัปดาห์แรก", "ลำดับเวลาช่วยตั้งสมมติฐานตามวันหลังผ่า"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 40 (= 78 หน้า 43–45) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 176, "stem": "A 45-year-old woman develops a fever of 38.6 °C two hours after emergency surgery for a perforated appendix. She received packed red cells during the operation. Which of the following is listed in the lecture as a cause of immediate postoperative fever?", "opts": ["Anastomotic leakage", "Central line infection", "Deep space abscess", "Blood products given to the patient", "Postpericardiotomy syndrome"], "ans": 3, "notes": "สไลด์ไฟล์ 78 หน้า 42 พิมพ์ว่า <b>\"Medications or blood products to which the patient was exposed\"</b> · <b>\"Trauma suffered prior to surgery\"</b> · <b>\"Infections that were present prior to surgery\"</b>", "kimg": ["l12_p42", "l12b_p39"], "interp": "ไข้ในชั่วโมงแรกหลังได้ blood product", "why": "หน้า 42: สาเหตุ immediate fever ได้แก่ <b>medications หรือ blood products</b>, trauma, infection ก่อนผ่า และ malignant hyperthermia โจทย์ให้ไข้ 2 ชม. หลังผ่าฉุกเฉินที่ได้รับเลือด ซึ่งตรงกับหน้า 42 ของ 78 ที่ระบุ immediate fever จาก medications หรือ blood products รวมถึง trauma และ infection ก่อนผ่า", "wrong": ["Anastomotic leakage เกิดช่วง POD 5–10 ไม่ใช่ชั่วโมงแรก ซึ่งเกิด POD 5–10 — จะถูกถ้ามีไข้ POD 7 หลังต่อ bowel", "CRBSI เกิด POD 5 จากสายหลอดเลือดที่คามา ซึ่งเกิด POD 5 จากสายหลอดเลือด — จะถูกถ้ามี central line หลายวันและแดงรอบสาย", "Deep space abscess เป็น subacute ซึ่งเป็น subacute — จะถูกถ้าไข้และปวดท้อง POD 10", "Postpericardiotomy syndrome เป็น delayed หลังผ่าตัดหัวใจหลายสัปดาห์ ซึ่งเป็น delayed — จะถูกถ้าไข้ 5 สัปดาห์หลัง CABG"], "trap": "สาเหตุที่เกิด POD 5 ขึ้นไปไม่ใช่ immediate", "summary": ["Immediate fever (ชั่วโมงแรก) สาเหตุตามสไลด์: ยาหรือ blood products, trauma, infection ที่มีอยู่ก่อนผ่า, MH", "ผู้ป่วยที่ไส้ติ่งแตกมีการติดเชื้อก่อนผ่า", "Immediate มักเกิดก่อนหรือระหว่างผ่า (ลายมือ jod)", "สาเหตุที่เกิด POD 5 ขึ้นไปไม่ใช่ immediate", "ไข้ชั่วโมงแรกต้องถามเรื่องเลือดและยาที่ให้ก่อน"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 42 (= jod หน้า 39) · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod"}),
U({"n": 177, "stem": "During a laparoscopic cholecystectomy under sevoflurane and succinylcholine, a 30-year-old man develops rigidity of the jaw and limbs, tachycardia and a core temperature rising to 41 °C. Which drug is the specific treatment?", "opts": ["Intravenous acetaminophen", "Intravenous hydrocortisone", "Intravenous propranolol", "Intravenous dantrolene", "Intravenous naloxone"], "ans": 3, "notes": "สไลด์ไฟล์ 78 หน้า 42 พิมพ์ว่า <b>\"Malignant hyperthermia (high-grade fever (greater than 40 C))\"</b><br>ลายมือไฟล์ jod หน้า 39 เขียนว่า <b>\"Treatment is IV dantrolene, 100% oxygen, correction of acidosis, cooling blankets…\"</b>", "kimg": ["l12_p42", "l12b_p39"], "interp": "volatile agent + succinylcholine ไข้ &gt;40 °C กล้ามเนื้อแข็ง", "why": "jod หน้า 39: การรักษา MH คือ <b>IV dantrolene</b> ร่วมกับ 100% oxygen, แก้ acidosis, cooling blankets และเฝ้าระวัง myoglobinuria โจทย์ให้ sevoflurane ร่วม succinylcholine ตามด้วยกล้ามเนื้อแข็ง ชีพจรเร็ว และอุณหภูมิ 41 °C ซึ่งเข้ากับ MH ลายมือ jod หน้า 39 ระบุรักษาด้วย IV dantrolene, 100% oxygen, แก้ acidosis, cooling blankets และเฝ้าระวัง myoglobinuria", "wrong": ["Acetaminophen ลดไข้ตามปกติแต่ MH เกิดจาก hypermetabolism ที่กล้ามเนื้อ ซึ่งไม่แก้ hypermetabolism ในกล้ามเนื้อ — จะถูกถ้าเป็นไข้หลังผ่าที่ไม่มีสาเหตุสำคัญ", "Hydrocortisone เป็นของ adrenal insufficiency ซึ่งเป็นของ adrenal insufficiency — จะถูกถ้ามีประวัติใช้ steroid เรื้อรังและความดันต่ำ", "Propranolol เป็นของ thyroid storm ซึ่งเป็นของ thyroid storm — จะถูกถ้ามี Graves และ tachycardia โดยไม่มี rigidity", "Naloxone ใช้ย้อน opioid ซึ่งใช้ย้อน opioid — จะถูกถ้ามีกดการหายใจและรูม่านตาเล็ก"], "trap": "ยาลดไข้ไม่ได้ผลเพราะไข้มาจาก muscle hypermetabolism", "summary": ["MH เกิดหลัง volatile anesthetic หรือ succinylcholine", "สไลด์ระบุ high-grade fever &gt;40 °C แต่ไข้เป็นอาการช้า", "รักษา IV dantrolene, 100% oxygen, แก้ acidosis, cooling blankets, เฝ้าระวัง myoglobinuria", "ตามด้วย kidney injury ถ้าไม่ควบคุม", "ไข้สูงเป็นอาการช้าของ MH ยากลุ่ม antipyretic ไม่ได้ผล"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 42 (= jod หน้า 39) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 178, "stem": "A 25-year-old man is anesthetized for appendectomy and a malignant hyperthermia crisis occurs. Which pair of agents does the lecture handwriting name as the trigger?", "opts": ["Propofol with fentanyl and midazolam", "Volatile anesthetic with succinylcholine", "Ketamine with vecuronium and morphine", "Lidocaine with bupivacaine and epinephrine", "Midazolam with morphine and ondansetron"], "ans": 1, "notes": "ลายมือไฟล์ jod หน้า 39 เขียนว่า <b>\"After inhalational anesthetics or muscle relaxant (e.g. halothane or succinylcholine)\"</b>", "kimg": ["l12b_p39", "l12_p42"], "interp": "ถามตัวกระตุ้น MH ตามโน้ต", "why": "jod หน้า 39: <b>inhalational anesthetics หรือ muscle relaxant (halothane, succinylcholine)</b> (halothane เป็นยาเก่า ปัจจุบันใช้ sevoflurane ฯลฯ) โจทย์ถามตัวกระตุ้นตามลายมือ jod หน้า 39 ที่เขียนว่า After inhalational anesthetics or muscle relaxant ยกตัวอย่าง halothane และ succinylcholine จึงต้องเป็นยาสลบสูดดมร่วมกับยาหย่อนกล้ามเนื้อกลุ่ม depolarizing", "wrong": ["Propofol, fentanyl และ midazolam เป็นยากลุ่ม non-triggering (TIVA ที่ใช้ได้อย่างปลอดภัยในผู้ป่วย MH-susceptible) — จะถูกถ้าถามว่ายาระงับความรู้สึกชุดใดเหมาะกับผู้ป่วยที่มีประวัติ MH", "Ketamine, vecuronium และ morphine ไม่ใช่ trigger เพราะ vecuronium เป็น non-depolarizing ซึ่งไม่ใช่ trigger — จะถูกถ้าเป็น succinylcholine", "Lidocaine, bupivacaine และ epinephrine เป็นยาชาเฉพาะที่ ไม่ใช่ trigger ซึ่งเป็นยาชาเฉพาะที่ ไม่ใช่ trigger — จะถูกถ้ามีรายงานว่ากระตุ้น", "Midazolam, morphine และ ondansetron ไม่ใช่ trigger ซึ่งไม่ใช่ trigger — จะถูกถ้าแพ้ยากลุ่มเหล่านี้"], "trap": "เกี่ยวกับยาสลบสูดดมและ succinylcholine", "summary": ["Trigger ของ MH: inhalational anesthetic และ muscle relaxant (halothane, succinylcholine)", "ปัจจุบันใช้ sevoflurane, desflurane, isoflurane แทน halothane", "สไลด์ระบุไข้ &gt;40 °C แต่เป็นอาการช้า", "รักษา IV dantrolene", "ต้องซักประวัติแพ้หรือ MH ในครอบครัวก่อนใช้ trigger"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 39 (= 78 หน้า 42) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 179, "stem": "Arterial blood gas is obtained from a patient in whom malignant hyperthermia is suspected soon after induction with succinylcholine. Which laboratory abnormality does the handwritten lecture note list for this condition?", "opts": ["Metabolic acidosis", "Metabolic alkalosis", "Hypoglycemia", "Hypernatremia", "Isolated respiratory alkalosis"], "ans": 0, "notes": "ลายมือไฟล์ jod หน้า 39 เขียนว่า <b>\"Laboratory studies : metabolic acidosis and hypercalcemia\"</b>", "kimg": ["l12b_p39", "l12_p42"], "interp": "ถามความผิดปกติทางห้องปฏิบัติการของ MH", "why": "jod หน้า 39: lab ของ MH คือ <b>metabolic acidosis</b> (และ hypercalcemia ตามที่เขียน ⚠ จริง ๆ คือ Ca ใน myoplasm ไม่ใช่ serum Ca) ตำราเน้น hyperkalemia, CK ↑, mixed acidosis โจทย์ให้ผู้ป่วยสงสัย MH หลัง succinylcholine และถามผลทางห้องปฏิบัติการ ลายมือ jod หน้า 39 เขียน metabolic acidosis จึงเป็นข้อที่ตรง ส่วน hypercalcemia ที่เขียนไว้ไม่ใช้เป็นตัวตัดสิน (⚠) เพราะคือ Ca ใน myoplasm", "wrong": ["Metabolic alkalosis ตรงข้ามกับ MH ที่มี lactic และ respiratory acidosis ซึ่งตรงข้ามกับ lactic และ respiratory acidosis — จะถูกถ้าอาเจียนมากหรือดูด NG", "Hypoglycemia ไม่ใช่ลักษณะของ MH เพราะ hypermetabolism ใช้ glucose แต่ไม่ใช่ lab หลัก ซึ่งไม่ใช่ลักษณะของ MH — จะถูกถ้าให้ insulin เกิน", "Hypernatremia ไม่ได้ระบุเกี่ยวกับ MH ซึ่งไม่ได้ระบุ — จะถูกถ้าขาดน้ำรุนแรง", "Respiratory alkalosis เป็นของ atelectasis POD 1–3 ซึ่งเป็นของ atelectasis — จะถูกถ้ามีหายใจเร็วจากปอดแฟบ"], "trap": "ไม่ใช้ hypercalcemia เป็นตัวตัดสิน", "summary": ["Lab ของ MH ตามลายมือ jod: metabolic acidosis", "Ca ใน myoplasm เพิ่มเป็นกลไกหลัก ไม่ใช่ serum Ca (⚠)", "ตำราเน้น hyperkalemia, CK สูง, acidosis ผสม, EtCO2 สูง", "Myoglobinuria ทำให้ kidney injury", "ตำราระบุ hyperkalemia, CK สูง, EtCO2 สูง เป็น lab สำคัญของ MH"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 39 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 180, "stem": "A 28-year-old man is treated with dantrolene, oxygen and cooling for malignant hyperthermia. In the recovery unit his urine becomes dark brown. Which complication does the lecture warn about after myoglobinuria?", "opts": ["Hepatic failure", "Pancreatitis", "Kidney injury", "Intestinal ischemia", "Cerebral edema"], "ans": 2, "notes": "ลายมือไฟล์ jod หน้า 39 เขียนว่า <b>\"watching for myoglobinuria ↳ เกิด kidney injury ตามมา\"</b>", "kimg": ["l12b_p39", "l12_p42"], "interp": "ปัสสาวะสีน้ำตาลหลัง MH", "why": "jod หน้า 39: myoglobinuria ตามด้วย <b>kidney injury</b> (rhabdomyolysis → AKI) โจทย์ให้ปัสสาวะสีน้ำตาลเข้มหลังรักษา MH ซึ่งบ่งว่ามี myoglobinuria ลายมือ jod หน้า 39 เขียนว่า watching for myoglobinuria ตามด้วย kidney injury ผ่านกลไก rhabdomyolysis", "wrong": ["Hepatic failure ไม่ใช่ผลของ myoglobinuria ซึ่งไม่เกี่ยวกับ myoglobin — จะถูกถ้ามี halothane hepatitis", "Pancreatitis ไม่ใช่ผลของ rhabdomyolysis โดยตรง ซึ่งไม่ใช่ผลของ rhabdomyolysis — จะถูกถ้ามี hypertriglyceridemia รุนแรง", "Intestinal ischemia ไม่สัมพันธ์กับ myoglobin ซึ่งไม่สัมพันธ์ — จะถูกถ้ามี low flow หรือ mesenteric thrombosis", "Cerebral edema ไม่ใช่ผลของ myoglobinuria ซึ่งไม่ใช่ผลของ myoglobinuria — จะถูกถ้ามีบาดเจ็บศีรษะหรือ hyponatremia เฉียบพลัน"], "trap": "จึงต้องดู urine output และสี", "summary": ["MH ทำ rhabdomyolysis ปล่อย myoglobin", "ปัสสาวะสีน้ำตาลคือ myoglobinuria", "ผลตามมา: kidney injury (ลายมือ jod)", "เฝ้าระวัง urine output หลังให้ dantrolene", "การให้สารน้ำและติดตามปัสสาวะลดความเสี่ยง AKI"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 39 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 181, "stem": "During a general anesthetic with sevoflurane and succinylcholine the anesthetist notes a rapidly rising end-tidal CO2, tachycardia and masseter rigidity while the temperature is still 37.8 °C. What is the most appropriate immediate action?", "opts": ["Wait until the temperature exceeds 40 degrees", "Stop the volatile agent and give intravenous dantrolene", "Give intravenous acetaminophen", "Give more succinylcholine", "Lower the ventilation rate"], "ans": 1, "notes": "สไลด์ไฟล์ 78 หน้า 42 พิมพ์ว่า <b>\"Malignant hyperthermia (high-grade fever (greater than 40 C))\"</b><br>ลายมือไฟล์ jod หน้า 39 <b>\"Treatment is IV dantrolene…\"</b>", "kimg": ["l12_p42", "l12b_p39"], "interp": "EtCO2 สูงขึ้น กล้ามเนื้อแข็ง ก่อนไข้สูง", "why": "ไข้ &gt;40 °C เป็นอาการช้า สัญญาณเริ่มแรกคือ EtCO2 สูง, tachycardia, rigidity ให้ <b>หยุด trigger และให้ dantrolene</b> ทันที โจทย์ให้ EtCO2 สูงขึ้นเร็ว ชีพจรเร็ว และ masseter rigidity ทั้งที่อุณหภูมิเพียง 37.8 °C ซึ่งเป็นสัญญาณเริ่มของ MH ตามที่ Round I/O เสริม สไลด์ระบุไข้ &gt;40 °C แต่เป็นอาการช้า จึงหยุด volatile agent และให้ dantrolene ทันที", "wrong": ["การรอไข้ถึง &gt;40 °C ช้าเกินไปเพราะไข้เป็นอาการช้า ซึ่งช้าเกินไป — จะถูกถ้ามีไข้ธรรมดาที่ไม่มี rigidity และ EtCO2 ปกติ", "Acetaminophen ไม่แก้ hypermetabolism ซึ่งไม่แก้สาเหตุ — จะถูกถ้ามีไข้ติดเชื้อทั่วไป", "Succinylcholine เป็น trigger และเพิ่มอันตราย ซึ่งเป็นตัวกระตุ้น — จะถูกถ้าไม่ใช่ MH", "ลด ventilation ทำให้ CO2 คั่งมากขึ้น ซึ่งทำให้ CO2 คั่ง — จะถูกถ้า EtCO2 ต่ำจาก hyperventilation"], "trap": "อย่ารอไข้สูงก่อนรักษา", "summary": ["สัญญาณเริ่มแรกของ MH: EtCO2 สูงขึ้น, tachycardia, masseter หรือ generalized rigidity", "ไข้สูงเป็นอาการช้าและไม่ใช่เกณฑ์วินิจฉัย", "หยุด volatile agent และ succinylcholine", "ให้ dantrolene ทันที (2.5 mg/kg ซ้ำจนสงบ)", "อย่ารอไข้สูงก่อนวินิจฉัย MH"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 42 (= jod หน้า 39) · ไม่มีสัญลักษณ์ · ลายมือ jod", "outside": "นอกสไลด์: สัญญาณเริ่มต้นของ MH และการหยุด trigger (สไลด์พูดถึงไข้ &gt;40 และ dantrolene)"}),
U({"n": 182, "stem": "A 40-year-old woman receiving packed red cells after surgery develops chills and a temperature of 38.9 °C thirty minutes into the second unit. Which action is most appropriate first?", "opts": ["Stop the transfusion and keep the intravenous line open", "Continue the transfusion at a slower rate", "Give dantrolene at once", "Start oral amoxicillin", "Apply incentive spirometry"], "ans": 0, "notes": "สไลด์ไฟล์ 78 หน้า 42 พิมพ์ว่า <b>\"Medications or blood products to which the patient was exposed\"</b>", "kimg": ["l12_p42", "l12b_p39"], "interp": "ไข้และหนาวสั่นระหว่างให้เลือด", "why": "blood products เป็นสาเหตุ immediate fever ตามสไลด์ จึงต้อง <b>หยุดการให้เลือด</b> และประเมิน transfusion reaction โจทย์ให้ไข้และหนาวสั่นกลางการให้ packed red cells ซึ่งสไลด์หน้า 42 ระบุ blood products เป็นสาเหตุ immediate fever จึงหยุดให้เลือดและคงเส้น IV ไว้ก่อนประเมินต่อตามข้อมูลนอกสไลด์", "wrong": ["ชะลอแล้วให้ต่ออาจทำให้ reaction รุนแรงขึ้น ซึ่งอาจทำให้ reaction รุนแรงขึ้น — จะถูกถ้าเป็นไข้เล็กน้อยก่อนเริ่มให้เลือดและประเมินแล้วไม่ใช่ reaction", "Dantrolene เป็นของ MH ซึ่งเป็นของ MH — จะถูกถ้ามี rigidity ระหว่างดมยาสลบ", "Amoxicillin ทางปากไม่ใช่การจัดการขั้นแรกของ reaction ซึ่งไม่ใช่ขั้นแรก — จะถูกถ้ามีติดเชื้อที่เชื่อถือได้", "Incentive spirometry เป็นของ atelectasis ซึ่งเป็นของ atelectasis — จะถูกถ้ามี CXR volume loss"], "trap": "ไม่ให้ต่อโดยไม่ประเมิน", "summary": ["Blood products เป็นสาเหตุของ immediate fever", "ไข้และหนาวสั่นขณะให้เลือดต้องคิดถึง transfusion reaction", "หยุดการให้เลือดและคงเส้น IV ไว้", "ส่งตรวจเพื่อยืนยันตามแนวทางธนาคารเลือด", "ขั้นแรกเมื่อสงสัย transfusion reaction คือหยุดเลือด"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 42 (= jod หน้า 39) · ไม่มีสัญลักษณ์", "outside": "นอกสไลด์: การจัดการ transfusion reaction (สไลด์ระบุเพียงว่า blood products เป็นสาเหตุ)"}),
U({"n": 183, "stem": "On postoperative day 2 a 55-year-old man after an open cholecystectomy has a temperature of 38.1 °C, shallow breathing and reduced breath sounds at the left base. Chest radiograph shows volume loss. Which measure is listed for management?", "opts": ["Immediate bronchoscopy", "Therapeutic anticoagulation", "Intravenous dantrolene", "Open drainage of the abdomen", "Chest physiotherapy and ambulation"], "ans": 4, "notes": "สไลด์ไฟล์ 78 หน้า 44 พิมพ์ว่า <b>\"POD 1 to 3 · Atelectasis · chest x-ray with volume loss · Chest physiotherapy, Position and ambulation\"</b><br>ลายมือ 78 <b>\"อาจมีไข้ต่ำๆ\"</b>", "kimg": ["l12_p44", "l12b_p40"], "interp": "POD 2, CXR volume loss", "why": "หน้า 44: atelectasis POD 1–3 → <b>chest physiotherapy, position and ambulation</b> (jod เพิ่ม Triflow) โจทย์ให้ POD 2 ไข้ 38.1 หายใจตื้น เสียงหายใจลดที่ฐานซ้าย และ CXR volume loss ตรงกับ atelectasis หน้า 44 ของ 78 ที่แนะนำ chest physiotherapy, position และ ambulation (jod เพิ่ม Triflow)", "wrong": ["Bronchoscopy ไม่ใช่ขั้นแรกใน atelectasis ไม่รุนแรง ซึ่งไม่ใช่ขั้นแรก — จะถูกถ้ามี lobar collapse และ mucus plug ที่ไม่ตอบสนอง", "Anticoagulation เป็นของ VTE ซึ่งเป็นของ VTE — จะถูกถ้ามี PE ที่ยืนยัน", "Dantrolene เป็นของ MH ซึ่งเป็นของ MH — จะถูกถ้ามี rigidity ระหว่างดมยา", "Open drainage เป็นของ abscess ซึ่งเป็นของ abscess — จะถูกถ้า CT พบ collection ใน POD 10"], "trap": "ยังไม่ต้องใช้ยา", "summary": ["POD 1–3 = atelectasis (Wind) อาจมีไข้ต่ำ ๆ (ลายมือ 78)", "Dx ด้วยอาการและ CXR (ลายมือ jod) พบ volume loss", "Management: chest physiotherapy, position, ambulation, Triflow", "อาจ asymptomatic หรือ work of breathing เพิ่ม", "การรักษา atelectasis คือการขยายปอดและเคลื่อนไหว ไม่ต้องใช้ยา"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 44 (= jod หน้า 40) · ไม่มีสัญลักษณ์ · ลายมือ 78 + jod"}),
U({"n": 184, "stem": "A 62-year-old woman on postoperative day 2 has low-grade fever and rapid shallow breathing. Her arterial blood gas is obtained. According to the lecture and handwriting on atelectasis, which acid-base disturbance is expected?", "opts": ["Respiratory acidosis", "Respiratory alkalosis", "Metabolic acidosis", "Metabolic alkalosis", "Normal acid-base status"], "ans": 1, "notes": "สไลด์ไฟล์ 78 หน้า 44 พิมพ์ว่า <b>\"asymptomatic or with increased work of breathing, respiratory alkalosis, chest x-ray with volume loss\"</b><br>ลายมือไฟล์ jod หน้า 40 <b>\"[hypervent]\"</b>", "kimg": ["l12_p44", "l12b_p40"], "interp": "หายใจเร็วตื้น ใน atelectasis", "why": "หน้า 44 และ jod หน้า 40: atelectasis → <b>respiratory alkalosis</b> (hyperventilation) โจทย์ให้ POD 2 ไข้ต่ำและหายใจเร็วตื้น ซึ่งตรงกับ atelectasis ที่หน้า 44 ระบุ respiratory alkalosis และลายมือ jod เขียน hypervent เพื่ออธิบายว่าหายใจเร็วทำให้ CO2 ลดลง", "wrong": ["Respiratory acidosis เป็นของ hypoventilation เช่น opioid เกินขนาด ซึ่งเป็นของ hypoventilation — จะถูกถ้าผู้ป่วยซึมและหายใจช้า", "Metabolic acidosis เป็นของ MH หรือ sepsis ซึ่งเป็นของ MH หรือ sepsis — จะถูกถ้ามี lactate สูงและช็อก", "Metabolic alkalosis เป็นของการอาเจียนหรือ NG loss ซึ่งเป็นของอาเจียน — จะถูกถ้าสูญเสีย gastric acid", "ผู้ป่วยหายใจเร็วจึงมี ABG ผิดปกติ ซึ่งสไลด์ระบุว่าผิดปกติ — จะถูกถ้าไม่มีอาการและหายใจปกติ"], "trap": "อย่าเลือก acidosis เพราะปอดแฟบ", "summary": ["Atelectasis: respiratory alkalosis จาก hyperventilation (ลายมือ jod)", "CXR มี volume loss, work of breathing เพิ่มหรือไม่มีอาการ", "เกิด POD 1–3", "แยกจาก MH ที่มี metabolic และ respiratory acidosis", "atelectasis ให้ respiratory alkalosis ต่างจาก MH ที่เป็น acidosis"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 44 (= jod หน้า 40) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 185, "stem": "A 68-year-old man had a Foley catheter placed for a long operation and it has remained in situ for five days because he is mobilizing slowly. He now has fever with dysuria. Which preventive principle does the handwriting on this page emphasize?", "opts": ["The infection risk is constant whatever the duration", "The infection risk falls after the third day", "The infection risk rises with every day the catheter stays", "The infection risk depends only on the antibiotics given", "The infection risk is unrelated to catheter use"], "ans": 2, "notes": "สไลด์ไฟล์ 78 หน้า 44 พิมพ์ว่า <b>\"Urinary tract infection\"</b> (POD 3 to 5)<br>ลายมือ 78 <b>\"จาก foley catheter ↳ infection เพิ่ม 10% ต่อวัน\"</b>", "kimg": ["l12_p44", "l12b_p40"], "interp": "คา Foley นาน เกิด UTI", "why": "ลายมือ 78: UTI จาก Foley และ <b>ความเสี่ยงเพิ่มทุกวัน</b> (⚠ ตัวเลข ~10%/วัน เป็นประมาณ จริง ~3–7%) จึงควรเอาสายออกเร็วที่สุด โจทย์ให้ Foley คา 5 วันแล้วไข้และแสบขัด ลายมือ 78 หน้า 44 ระบุว่า UTI จาก foley catheter และ infection เพิ่มวันละ ~10% (ตัวเลขประมาณ ⚠ จริงราว 3–7%) จึงควรเอาสายออกเร็วที่สุด", "wrong": ["ความเสี่ยงไม่คงที่ แต่เพิ่มตามวันที่คา เพราะความเสี่ยงไม่คงที่ — จะถูกถ้าเป็นระบบปิดที่ไม่มีการสวนซ้ำ", "ไม่มีข้อมูลว่าความเสี่ยงลดหลังวันที่ 3 เพราะไม่ลดลงหลังวัน 3 — จะถูกถ้าเป็นสาเหตุอื่น", "ยาปฏิชีวนะไม่ใช่ปัจจัยเดียว สายสวนเป็นแหล่งหลัก เพราะสายสวนเป็นแหล่งหลัก — จะถูกถ้าเกิดจาก urinary obstruction", "UTI POD 3–5 สัมพันธ์กับ Foley โดยตรง เพราะ UTI สัมพันธ์กับสายสวน — จะถูกถ้าผู้ป่วยไม่มีสายสวน"], "trap": "ไม่ใช้ตัวเลขเปอร์เซ็นต์เป็นเกณฑ์", "summary": ["UTI POD 3–5 มักเกิดจาก Foley catheter", "ความเสี่ยงเพิ่มตามวันที่คา (ลายมือ 78 ใช้ ~10%/วัน ⚠ ตัวเลขประมาณ จริงราว 3–7%)", "ป้องกัน: เอาสายออกเร็วที่สุด", "ตรวจ UA และ urine culture", "ตัวเลขเปอร์เซ็นต์ต่อวันไม่ใช่ประเด็น แต่ความเสี่ยงเพิ่มตามวันที่คา"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 44 (= jod หน้า 40) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({"n": 186, "stem": "A 63-year-old man on postoperative day 6 after a low anterior resection with a colorectal anastomosis has fever of 38.8 °C, worsening abdominal pain and tachycardia. Which cause listed for postoperative day 5 and beyond must be considered first?", "opts": ["Anastomotic leakage", "Atelectasis", "Urinary tract infection from the catheter", "Postpericardiotomy syndrome", "Alcohol withdrawal"], "ans": 0, "notes": "สไลด์ไฟล์ 78 หน้า 44–45 พิมพ์ว่า <b>\"POD 5: Surgical site infection, anastomosis leakage\"</b> และ <b>\"POD 7 (5 to 10): Surgical site infection, anastomosis leakage\"</b><br>ลายมือ 78 <b>\"e.g. ต่อ bowel\"</b>", "kimg": ["l12_p45", "l12b_p41"], "interp": "ผ่าต่อลำไส้ POD 6 ปวดท้องและไข้", "why": "หน้า 44–45: <b>POD 5 และ POD 7 (5–10)</b> มี anastomosis leakage โจทย์ให้ POD 6 หลัง low anterior resection ไข้ 38.8 ปวดท้องมากขึ้น และชีพจรเร็ว ตรงกับ anastomosis leakage ที่หน้า 44–45 ของ 78 ระบุที่ POD 5 และ POD 7 (5–10) พร้อมลายมือ e.g. ต่อ bowel", "wrong": ["Atelectasis เกิดวัน 1–3 และไม่ทำให้ปวดท้อง ซึ่งเกิดวัน 1–3 — จะถูกถ้าไข้ POD 2 และ CXR volume loss", "UTI ไม่อธิบายปวดท้องรุนแรงและ tachycardia หลังต่อลำไส้ ซึ่งไม่อธิบายปวดท้อง — จะถูกถ้ามี dysuria และ Foley", "Postpericardiotomy เป็น delayed หลังผ่าตัดหัวใจ ซึ่งเป็น delayed — จะถูกถ้าไข้ 5 สัปดาห์หลัง CABG", "Alcohol withdrawal เกิด &gt;72 ชม. ด้วยอาการสั่นวุ่นวาย ซึ่งเกิด &gt;72 ชม. — จะถูกถ้ามีประวัติดื่มหนักและไม่มีสัญญาณช่องท้อง"], "trap": "ต้องนึกถึง leak ก่อนในผ่าต่อลำไส้", "summary": ["Anastomosis leakage เกิด POD 5 และ POD 7 (5–10)", "เบาะแส: ผ่าต่อ bowel, ปวดท้อง, ไข้, tachycardia", "78 ลายมือ: e.g. ต่อ bowel", "CT และการ drain ตามความรุนแรง", "ผ่าตัดต่อลำไส้ที่ POD 5–10 ต้องไม่พลาด leak"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 45 (= jod หน้า 41) · ไม่มีสัญลักษณ์ · ลายมือ 78"}),
U({"n": 187, "stem": "A 59-year-old man has fever of 38.7 °C on postoperative day 5 and a tender, erythematous cord along the forearm vein where a peripheral cannula has been placed for several days. The abdominal wound is clean. Which cause is most likely?", "opts": ["Anastomotic leakage", "Atelectasis", "Thrombophlebitis", "Delirium tremens", "Drug fever"], "ans": 2, "notes": "สไลด์ไฟล์ 78 หน้า 45 พิมพ์ว่า <b>\"POD 5: … Thrombophlebitis, CRBSI\"</b><br>ลายมือ jod หน้า 41 <b>\"wound infx\"</b>", "kimg": ["l12_p45", "l12b_p41"], "interp": "แนวเส้นเลือดดำแดงเจ็บที่ใส่ cannula", "why": "หน้า 45: POD 5 มี <b>thrombophlebitis และ CRBSI</b> (Wire/Vein) โจทย์ให้ POD 5 แนวเส้นเลือดที่ forearm แดงและเจ็บตรง cannula ซึ่งสไลด์ 78 หน้า 45 จัดเป็น thrombophlebitis หรือ CRBSI ที่ POD 5 (Wire หรือ Vein) และลายมือ jod เขียน thrombophlebitis / wound infx", "wrong": ["Anastomotic leakage ไม่ทำให้เส้นเลือดอักเสบ ซึ่งไม่ทำให้เส้นเลือดอักเสบ — จะถูกถ้ามีปวดท้องและผ่าต่อ bowel", "Atelectasis เกิด POD 1–3 ซึ่งเกิดวัน 1–3 — จะถูกถ้ามี CXR volume loss", "DTs เกิด &gt;72 ชม. ด้วยอาการวุ่นวาย ซึ่งต้องมีประวัติดื่มหนัก — จะถูกถ้ามีประวัติดื่มหนัก", "Drug fever มีผื่นและ eosinophilia โดยไม่มีเส้นอักเสบ ซึ่งต้องมีผื่น — จะถูกถ้ามีผื่นหลังเริ่มยาใหม่"], "trap": "ดูที่เส้น IV ก่อนหาสาเหตุอื่น", "summary": ["POD 5: thrombophlebitis, CRBSI (Wire/Vein)", "ตรวจหา erythema และ tenderness ตามเส้น IV", "ลายมือ jod: Thrombophlebitis / wound infx", "ถอด cannula หรือ line ที่สงสัย", "ตรวจตำแหน่ง IV ทุกตำแหน่งเมื่อไข้ POD 5"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 45 (= jod หน้า 41) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 188, "stem": "A 48-year-old woman on postoperative day 7 after a laparotomy has fever and says the wound hurts even when she lies completely still. The skin edge is red and warm. Which cause does the handwriting associate with this symptom?", "opts": ["Atelectasis", "Thrombophlebitis", "Urinary tract infection", "Wound infection", "Pulmonary embolism"], "ans": 3, "notes": "สไลด์ไฟล์ 78 หน้า 45 พิมพ์ว่า <b>\"POD 7 (5 to 10): Surgical site infection, anastomosis leakage\"</b><br>ลายมือไฟล์ jod หน้า 41 <b>\"Wound infection → นอนนิ่งๆ ก็ปวด\"</b>", "kimg": ["l12_p45", "l12b_p41"], "interp": "แผลแดงร้อนปวดขณะพัก", "why": "jod หน้า 41: wound infection = <b>นอนนิ่งๆ ก็ปวด</b> โจทย์ให้ POD 7 แผลแดงร้อนและปวดแม้นอนนิ่ง ๆ ซึ่งตรงกับลายมือ jod หน้า 41 ที่เขียนว่า wound infection ปวดแม้นอนนิ่ง จึงต้องชี้ SSI ไม่ใช่ปัญหาปอดหรือไต", "wrong": ["Atelectasis ไม่ทำให้ปวดแผลขณะพัก ซึ่งไม่ทำให้ปวดแผล — จะถูกถ้ามีหายใจตื้นและ CXR volume loss", "Thrombophlebitis ปวดตามเส้นเลือดไม่ใช่แผล ซึ่งปวดตามเส้นเลือด — จะถูกถ้ามีเส้น IV แดง", "UTI ปวดหัวหน่าวและแสบขัด ซึ่งปวดหัวหน่าว — จะถูกถ้ามี Foley", "PE เจ็บ pleuritic และหอบ ซึ่งเจ็บ pleuritic — จะถูกถ้ามีขาบวมและ hypoxia"], "trap": "ปวดแผลขณะพักชี้ SSI", "summary": ["Wound infection POD 7 (5–10) ปวดแม้นอนนิ่ง ๆ (ลายมือ jod)", "เบาะแส: แดง ร้อน บวม หนอง", "แยกจาก atelectasis และ UTI", "SSI มักพบ &gt;72 ชม.", "ปวดแผลขณะพักเป็นสัญญาณ SSI"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 41 (= 78 หน้า 45) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 189, "stem": "A 72-year-old woman, bedridden since a hip procedure, develops fever of 38.4 °C on postoperative day 7 with right leg swelling and sudden dyspnea. The surgical wound is clean. Which cause is listed for this day?", "opts": ["Atelectasis", "Urinary tract infection", "Venous thromboembolism", "Device related infection", "Postpericardiotomy syndrome"], "ans": 2, "notes": "สไลด์ไฟล์ 78 หน้า 45 พิมพ์ว่า <b>\"POD 7 (5 to 10): Venous thromboembolism\"</b><br>ลายมือ jod หน้า 41 <b>\"Venothromboembolism → PE, DVT\"</b>", "kimg": ["l12_p45", "l12b_p41"], "interp": "ขาบวมและหอบ POD 7", "why": "หน้า 45: POD 7 มี <b>venous thromboembolism</b> (jod: PE, DVT) โจทย์ให้ผู้ป่วยนอนติดเตียง ไข้ POD 7 ขาขวาบวม และหอบเฉียบพลันโดยแผลสะอาด ตรงกับหน้า 45 ของ 78 ที่ระบุ venous thromboembolism ที่ POD 7 (5–10) และลายมือ jod ระบุ PE, DVT", "wrong": ["Atelectasis เกิด POD 1–3 ซึ่งเกิดวัน 1–3 — จะถูกถ้าไข้ POD 2 หายใจตื้น", "UTI ไม่ทำให้ขาบวมและหอบ ซึ่งไม่ทำให้ขาบวม — จะถูกถ้ามีสายสวนและปัสสาวะผิดปกติ", "Device-related infection เป็น subacute ซึ่งเป็น subacute — จะถูกถ้ามี implant และไข้ 3 สัปดาห์", "Postpericardiotomy เป็น delayed หลังผ่าตัดหัวใจ ซึ่งเป็น delayed — จะถูกถ้าเจ็บหน้าอกหลังผ่า CABG สัปดาห์ที่ 5"], "trap": "ขาบวมร่วมหอบ ชี้ VTE", "summary": ["POD 7 (5–10): VTE", "ลายมือ jod: VTE → PE, DVT", "เบาะแส: นอนนาน ขาบวม หอบเฉียบพลัน", "ป้องกันด้วย Caprini-based prophylaxis", "VTE เป็นสาเหตุไข้ที่เกิด POD 7"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 45 (= jod หน้า 41) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 190, "stem": "A 54-year-old man develops a fever of 39.5 °C twenty hours after a bowel resection. He has severe pain at the wound far out of proportion to its appearance, rapidly spreading erythema with blisters, and hypotension. Which cause must be considered first?", "opts": ["Necrotizing surgical site infection", "Atelectasis", "Urinary tract infection", "Drug fever", "Postpericardiotomy syndrome"], "ans": 0, "notes": "สไลด์ไฟล์ 78 หน้า 44–45 พิมพ์ว่า <b>\"Surgical site infection\"</b> ที่ POD 5 และ POD 7<br>(Round I/O เสริม: ไข้เร็วร่วมปวดมากและช็อก ต้องนึกถึง necrotizing SSI)", "kimg": ["l12_p45", "l12b_p41"], "interp": "ไข้เร็วภายใน 24 ชม. ปวดมากเกินสัดส่วน ช็อก", "why": "สไลด์พูดถึง SSI ในสัปดาห์แรก ตำราระบุว่าไข้เร็ว &lt;24–48 ชม. ร่วมปวดมากและช็อกต้องนึกถึง <b>necrotizing SSI</b> (Group A Streptococcus, Clostridium) ซึ่งต้องผ่าตัดด่วน โจทย์ให้ไข้ภายใน 20 ชม. ปวดเกินสัดส่วน ผิวหนังมีตุ่มน้ำ และความดันต่ำ สไลด์พูดถึง SSI ที่ POD 5–7 แต่ Round I/O เสริมว่าไข้เร็วร่วมปวดมากและช็อกเป็น necrotizing SSI จาก Group A Streptococcus หรือ Clostridium", "wrong": ["Atelectasis ไข้ต่ำและไม่ช็อกจากแผล ซึ่งไข้ต่ำและไม่ช็อก — จะถูกถ้า POD 2 มี CXR volume loss", "UTI ไม่อธิบายแผลที่เป็นพังผืดและผิวหนังตาย ซึ่งไม่อธิบายแผล — จะถูกถ้ามี dysuria", "Drug fever ไม่มีช็อกและปวดแผลรุนแรง ซึ่งไม่ช็อกจากแผล — จะถูกถ้ามีผื่นและ eosinophilia", "Postpericardiotomy ไม่ใช่ภายใน 24 ชม. ซึ่งไม่เกิดใน 24 ชม. — จะถูกถ้าไข้ 5 สัปดาห์หลังผ่าตัดหัวใจ"], "trap": "ไข้เร็วและช็อกต่างจาก SSI ธรรมดา", "summary": ["SSI ทั่วไป POD 5–7", "Necrotizing SSI: ไข้เร็ว ปวดเกินสัดส่วน ผิวหนังมีตุ่มน้ำ ช็อก", "สาเหตุ Group A Streptococcus, Clostridium", "ต้องผ่าตัด debridement ด่วน", "ไข้เร็วร่วมปวดมากเป็นสัญญาณอันตรายต้องผ่าตัดด่วน"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 44–45 (= jod หน้า 40–41) · ไม่มีสัญลักษณ์", "outside": "นอกสไลด์: necrotizing SSI (สไลด์มีเพียง SSI POD 5–7)"}),
U({"n": 191, "stem": "On the first postoperative evening a 50-year-old man after an elective hernia repair has a temperature of 38.3 °C. He is comfortable with clear lungs, a normal wound, normal urine and no leg swelling. Which management is most appropriate?", "opts": ["Broad spectrum intravenous antibiotics", "Bronchoscopy", "Clinical observation and repeat examination", "CT of the abdomen", "Venous Doppler of both legs"], "ans": 2, "notes": "สไลด์ไฟล์ 78 หน้า 44 พิมพ์ว่า <b>\"POD 1 to 3: Atelectasis\"</b><br>ลายมือ 78 <b>\"อาจมีไข้ต่ำๆ\"</b>", "kimg": ["l12_p44", "l12b_p40"], "interp": "POD 1 ตรวจไม่พบแหล่ง", "why": "สไลด์ระบุ atelectasis POD 1–3 แต่ Round I/O เสริมว่าหลักฐานว่า atelectasis ทำให้ไข้ใน 48 ชม. ไม่ชัด ไข้ POD 1–2 มักจากการอักเสบหลังผ่า จึงสังเกตและตรวจซ้ำ โจทย์ให้ POD 1 ไข้ 38.3 แต่ตรวจปอด แผล ปัสสาวะ และขาปกติ สไลด์ระบุ atelectasis POD 1–3 แต่ Round I/O เสริมว่าหลักฐานว่าเป็นสาเหตุไข้ใน 48 ชม. แรกไม่ชัด ส่วนมากเป็น inflammatory response จึงสังเกตและตรวจซ้ำ", "wrong": ["ยาปฏิชีวนะวงกว้างไม่จำเป็นเมื่อไม่มีแหล่งติดเชื้อ ซึ่งไม่มีแหล่งติดเชื้อ — จะถูกถ้าพบ pneumonia หรือ SSI", "Bronchoscopy ไม่จำเป็นเมื่อปอดปกติ ซึ่งปอดปกติ — จะถูกถ้ามี lobar collapse", "CT ท้องเป็นของ deep space infection POD 7–10 ซึ่งไม่มีอาการท้อง — จะถูกถ้ามีปวดท้องและไข้", "Doppler ไม่จำเป็นเมื่อไม่มีขาบวม ซึ่งไม่มีขาบวม — จะถูกถ้าสงสัย DVT"], "trap": "ไม่รีบให้ยาปฏิชีวนะทุกครั้ง", "summary": ["สไลด์ระบุ atelectasis POD 1–3", "หลักฐานว่า atelectasis ทำไข้ใน 48 ชม. แรกยังไม่ชัด (Mavros 2011)", "ไข้ POD 1–2 มักเป็น inflammatory response", "สังเกตและตรวจซ้ำถ้าไม่มี red flag", "ไม่ต้องส่งตรวจมากเมื่อไม่มี red flag และไม่มีแหล่ง"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 44 (= jod หน้า 40) · ไม่มีสัญลักษณ์ · ลายมือ 78", "outside": "นอกสไลด์: หลักฐานว่า atelectasis อาจไม่ใช่สาเหตุไข้ใน 48 ชม. แรก"}),
U({"n": 192, "stem": "A 57-year-old man on postoperative day 10 after a sigmoid colectomy has persistent spiking fever, pelvic discomfort and tenesmus. His wound and chest are normal. Which workup does the lecture list for the suspected cause?", "opts": ["Chest radiograph and sputum culture", "Venous Doppler ultrasound", "Urinalysis and urine culture", "Digital rectal examination and CT scan", "Skin biopsy and eosinophil count"], "ans": 3, "notes": "สไลด์ไฟล์ 78 หน้า 46 พิมพ์ว่า <b>\"Deep space infection : abdominal collection · Workup : Digital rectal exam, CT scan to localize intra-abdominal abscess\"</b>", "kimg": ["l12_p46", "l12b_p42"], "interp": "ไข้สัปดาห์ที่ 2 ปวดอุ้งเชิงกราน tenesmus", "why": "หน้า 46: deep space infection → <b>DRE และ CT scan</b> เพื่อหา abscess ในช่องท้อง โจทย์ให้ POD 10 ไข้สูงเป็นพัก ๆ อึดอัดอุ้งเชิงกราน และ tenesmus ซึ่งเข้ากับ deep space infection (abdominal collection) ที่หน้า 46 ระบุ workup คือ digital rectal exam และ CT scan", "wrong": ["CXR และ sputum culture เป็นของ pneumonia ซึ่งต้องมีอาการปอด — จะถูกถ้าไอเสมหะและ crackles", "Doppler เป็นของ DVT ซึ่งต้องมีขาบวม — จะถูกถ้าขาบวม", "UA และ urine culture เป็นของ UTI ซึ่งต้องมี dysuria — จะถูกถ้ามี dysuria", "Skin biopsy ไม่ใช่การตรวจใน drug fever และไม่ช่วยหา abscess ซึ่งใช้ในผื่นไม่ทราบสาเหตุ — จะถูกถ้าเป็นผื่นที่ไม่ทราบสาเหตุ"], "trap": "DRE ช่วยหา pelvic abscess", "summary": ["Subacute: deep space infection (abdominal collection)", "Workup: digital rectal exam และ CT เพื่อหา intra-abdominal abscess", "POD 10 (jod)", "DRE ตรวจ pelvic abscess", "รักษาด้วย drainage และ antibiotics", "tenesmus และอุ้งเชิงกรานเจ็บชี้ pelvic abscess ที่ DRE คลำได้"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 46 (= jod หน้า 42) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 193, "stem": "CT of a 60-year-old man with subacute fever shows a well-defined 6 cm intra-abdominal fluid collection. He is hemodynamically stable. Which treatment options are given in the lecture for this condition?", "opts": ["Antibiotics alone without drainage", "Antibiotics with drainage", "Chest physiotherapy and positioning", "Stop suspected medications", "Benzodiazepine and psychiatry consult"], "ans": 1, "notes": "ลายมือไฟล์ jod หน้า 42 เขียนว่า <b>\"Treatment includes Antibiotic treatment, Percutaneous drainage and Open Drainage\"</b>", "kimg": ["l12b_p42", "l12_p46"], "interp": "collection ในช่องท้อง ผู้ป่วยคงที่", "why": "jod หน้า 42: การรักษา deep space infection คือ <b>antibiotic, percutaneous drainage, open drainage</b> โจทย์ให้ CT พบ collection 6 ซม. ผู้ป่วยคงที่ ลายมือ jod หน้า 42 ระบุ treatment includes antibiotic treatment, percutaneous drainage and open drainage จึงต้องมี drainage ร่วมกับยา", "wrong": ["Antibiotics อย่างเดียวไม่พอสำหรับ collection ขนาด 6 ซม. ซึ่งไม่พอสำหรับ collection ขนาด 6 ซม. — จะถูกถ้า collection เล็กมากและตอบสนอง", "Chest physiotherapy เป็นของ atelectasis ซึ่งเป็นของ atelectasis — จะถูกถ้ามี CXR volume loss", "Stop suspected medications เป็นของ drug fever ซึ่งเป็นของ drug fever — จะถูกถ้ามีผื่นและ eosinophilia", "Benzodiazepine เป็นของ DTs ซึ่งเป็นของ delirium tremens — จะถูกถ้ามี withdrawal"], "trap": "abscess ต้อง drain", "summary": ["Deep space infection: antibiotic, percutaneous drainage, open drainage (jod หน้า 42)", "เลือกวิธีตามความคงที่และตำแหน่ง", "Percutaneous drainage ถ้า collection เข้าถึงได้", "Open drainage ถ้า percutaneous ไม่สำเร็จ", "เริ่ม percutaneous ถ้าเข้าถึงได้ และ open drainage ถ้าไม่สำเร็จ"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 42 (= 78 หน้า 46) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 194, "stem": "A 66-year-old man has had a fever of 38.0 °C for three days, twelve days after surgery and a new antibiotic. He feels well, with a rash and peripheral eosinophilia but no focus of infection. Which statement describes the nature of this diagnosis?", "opts": ["It is confirmed by CT of the abdomen", "It is confirmed by blood culture", "It is confirmed by chest radiograph", "It is confirmed by venous Doppler", "It is a diagnosis of exclusion"], "ans": 4, "notes": "สไลด์ไฟล์ 78 หน้า 46 พิมพ์ว่า <b>\"Drugs fever · Diagnosis of exclusion includes rash and peripheral eosinophilia\"</b><br>ลายมือ jod หน้า 42 <b>\"ไข้มักไม่สูง\"</b>", "kimg": ["l12_p46", "l12b_p42"], "interp": "ไข้ต่ำ ผื่นและ eosinophilia หลังเริ่มยา", "why": "หน้า 46: drug fever เป็น <b>diagnosis of exclusion</b> ร่วมกับ rash และ eosinophilia (jod: ไข้มักไม่สูง) โจทย์ให้ไข้ต่ำ ผื่น และ eosinophilia หลังเริ่มยาใหม่โดยไม่พบแหล่งติดเชื้อ สไลด์หน้า 46 ระบุ drug fever เป็น diagnosis of exclusion และลายมือ jod ว่าไข้มักไม่สูง", "wrong": ["CT ใช้หา abscess แต่ drug fever ไม่มีหลักฐานทางภาพ ซึ่งหา abscess ไม่ใช่ยืนยัน drug fever — จะถูกถ้ามีไข้สูงและปวดท้อง", "Blood culture ไม่ยืนยัน drug fever ซึ่งใช้ใน CRBSI — จะถูกถ้าสงสัย CRBSI", "CXR ไม่ยืนยัน drug fever ซึ่งใช้ใน pneumonia — จะถูกถ้ามีไอเสมหะ", "Doppler ไม่ยืนยัน drug fever ซึ่งใช้ใน DVT — จะถูกถ้ามีขาบวม"], "trap": "วินิจฉัยหลังตัดสาเหตุอื่นออก", "summary": ["Drug fever เป็น diagnosis of exclusion", "มี rash และ peripheral eosinophilia", "ไข้มักไม่สูง (ลายมือ jod)", "จัดการ: ทบทวนยา หยุดยาที่สงสัย supportive care", "ต้องตัดสาเหตุอื่นออกก่อนแล้วจึงหยุดยาที่สงสัย"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 46 (= jod หน้า 42) · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 195, "stem": "A 70-year-old woman had a prosthetic vascular graft placed three weeks ago. She now has a persistent low-grade fever with no pulmonary, urinary or wound source. Which subacute cause should be considered?", "opts": ["Atelectasis", "Anastomotic leakage", "Thyroid storm", "Alcohol withdrawal", "Implant infection"], "ans": 4, "notes": "สไลด์ไฟล์ 78 หน้า 46 พิมพ์ว่า <b>\"Device / implanted related infection\"</b> (เฉพาะ 78)", "kimg": ["l12_p46", "l12b_p42"], "interp": "มี implant ไข้เรื้อรัง ไม่มีแหล่งอื่น", "why": "หน้า 46: subacute fever รวม <b>device / implanted related infection</b> โจทย์ให้ vascular graft เมื่อ 3 สัปดาห์ก่อนและไข้ต่ำเรื้อรังโดยไม่มีแหล่งอื่น ซึ่งตรงกับ device or implanted related infection ที่หน้า 46 ของ 78 ระบุไว้ใน subacute fever", "wrong": ["Atelectasis เกิด POD 1–3 ซึ่งเกิดวัน 1–3 — จะถูกถ้าไข้ POD 2", "Anastomotic leakage เกิดหลังต่อ bowel POD 5–10 ซึ่งต้องมีผ่าตัดต่อลำไส้ — จะถูกถ้าผ่าต่อลำไส้", "Thyroid storm เกิด &lt;48 ชม. ซึ่งเกิด &lt;48 ชม. — จะถูกถ้ามี Graves", "Alcohol withdrawal เกิด &gt;72 ชม. ซึ่งเกิด &gt;72 ชม. — จะถูกถ้าดื่มหนัก"], "trap": "มี implant ให้นึกถึง", "summary": ["Subacute fever รวม device or implanted related infection (78 หน้า 46)", "เบาะแส: implant หรือ graft ไข้เรื้อรังไม่มีแหล่งอื่น", "ต้องแยกจาก deep space infection และ drug fever", "รักษาอาจต้อง remove device", "มี implant ให้คิดเสมอเมื่อไข้ไม่มีแหล่ง"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 46 · ไม่มีสัญลักษณ์"}),
U({"n": 196, "stem": "A 52-year-old woman has a fever of 38.3 °C six weeks after surgery. Examination shows a red, warm, tender area of the lower leg without a surgical wound problem, and she has no dyspnea. Which cause belongs to the delayed fever list?", "opts": ["Atelectasis", "Anastomotic leakage", "Thyroid storm", "Soft tissue infection", "Transfusion reaction"], "ans": 3, "notes": "สไลด์ไฟล์ jod หน้า 43 พิมพ์ว่า <b>\"Fever after more than 4 weeks · Skin and soft tissue infections (SSTI) · Viral infections\"</b>", "kimg": ["l12b_p43", "l12b_p38"], "interp": "ไข้ 6 สัปดาห์ ผิวหนังติดเชื้อ", "why": "jod หน้า 43: delayed fever &gt;4 สัปดาห์ → <b>SSTI, viral infections</b> และ postpericardiotomy โจทย์ให้ไข้ 6 สัปดาห์หลังผ่าและผิวหนังขาแดงร้อนเจ็บโดยแผลไม่มีปัญหา ซึ่งเป็น skin and soft tissue infection ตามรายการ delayed fever หน้า 43 ของ jod (SSTI, viral, noninfection)", "wrong": ["Atelectasis เกิด POD 1–3 ซึ่งเกิดวัน 1–3 — จะถูกถ้าไข้ POD 2", "Anastomotic leakage เกิด POD 5–10 ซึ่งเกิด POD 5–10 — จะถูกถ้ามีปวดท้อง", "Thyroid storm เกิด &lt;48 ชม. ซึ่งเกิด &lt;48 ชม. — จะถูกถ้ามี Graves", "Transfusion reaction เป็น immediate ซึ่งเป็น immediate — จะถูกถ้าไข้ขณะให้เลือด"], "trap": "ไข้ช้าเปลี่ยนสาเหตุ", "summary": ["Delayed fever &gt;4 สัปดาห์ (jod หน้า 43)", "สาเหตุ: SSTI, viral infections", "Noninfection: postpericardiotomy syndrome", "ต่างจาก subacute ที่เป็น deep space infection", "delayed fever ต่างจากสาเหตุสัปดาห์แรกที่เกี่ยวกับแผลหรือสาย"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 43 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 197, "stem": "A 58-year-old man has fever, pleuritic chest pain and a pericardial rub five weeks after coronary artery bypass grafting. Cultures are negative. Which non-infectious cause appears in the delayed fever list?", "opts": ["Anastomotic leakage", "Postpericardiotomy syndrome", "Drug fever from antibiotics", "Deep space abscess formation", "Acute gouty arthritis"], "ans": 1, "notes": "สไลด์ไฟล์ jod หน้า 43 พิมพ์ว่า <b>\"Noninfection : postpericardiotomy syndrome\"</b><br>ลายมือเหลืองบน jod หน้า 43 (อ่านไม่ชัด สื่อถึงผ่าตัดหัวใจ)", "kimg": ["l12b_p43", "l12b_p38"], "interp": "CABG 5 สัปดาห์ เจ็บหน้าอกและ pericardial rub", "why": "jod หน้า 43: delayed fever ที่ไม่ติดเชื้อคือ <b>postpericardiotomy syndrome</b> โจทย์ให้ 5 สัปดาห์หลัง CABG ไข้ เจ็บ pleuritic pericardial rub และ culture ลบ ซึ่งเป็นกลุ่ม noninfection ใน delayed fever ที่หน้า 43 ของ jod คือ postpericardiotomy syndrome", "wrong": ["Anastomotic leakage เกิด POD 5–10 ซึ่งเกิด POD 5–10 — จะถูกถ้าไข้ POD 7", "Drug fever มีผื่นและ eosinophilia ซึ่งมีผื่นและ eosinophilia — จะถูกถ้าเริ่มยาใหม่ก่อนไข้", "Deep space abscess เป็น subacute และต้องมี collection ซึ่งเป็น subacute — จะถูกถ้าปวดท้อง", "Acute gouty arthritis เป็น other cause ที่มีข้ออักเสบเด่น ซึ่งมีข้อบวมเด่น — จะถูกถ้าข้อบวมแดง"], "trap": "เพียงเกิดหลังผ่าตัดหัวใจ", "summary": ["Delayed fever ไม่ติดเชื้อ: postpericardiotomy syndrome", "เกิดหลังผ่าตัดหัวใจ (ลายมือ jod อ่านไม่ชัด)", "เบาะแส: เจ็บหน้าอก pericardial rub culture ลบ", "แยกจาก SSTI และ viral infection", "culture ลบและมี pericardial rub ชี้ภาวะอักเสบไม่ใช่ติดเชื้อ"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ jod หน้า 43 · ไม่มีสัญลักษณ์ · ลายมือ jod"}),
U({"n": 198, "stem": "A 62-year-old man in the intensive care unit has had a nasogastric tube for nine days after a major operation. He has fever of 38.6 °C, purulent nasal discharge and facial tenderness. Which cause from the list of other causes of fever is most likely?", "opts": ["Sinusitis", "Acute gout", "Acute pancreatitis", "Alcohol withdrawal", "Clostridioides difficile infection"], "ans": 0, "notes": "สไลด์ไฟล์ 78 หน้า 47 พิมพ์ว่า <b>\"Sinisitis : prolonged NG tube\"</b> (สะกดตามสไลด์) และ <b>\"C difficile infection\"</b> · <b>\"Acute gout\"</b>", "kimg": ["l12_p47", "l12b_p38"], "interp": "NG นาน หนองจมูก ปวดหน้า", "why": "หน้า 47: <b>sinusitis จาก prolonged NG tube</b> โจทย์ให้ NG tube 9 วัน หนองจมูก และปวดหน้า ซึ่งหน้า 47 ของ 78 ระบุ sinusitis จาก prolonged NG tube (สะกดตามสไลด์ Sinisitis) ในรายการ other cause", "wrong": ["Acute gout ปวดข้อ ซึ่งปวดข้อ — จะถูกถ้ามีข้อบวมแดงและเกิดในผู้ป่วยที่ใช้ยาขับปัสสาวะ", "Pancreatitis ปวดท้องบนและ amylase สูง ซึ่งปวดท้องบน — จะถูกถ้า epigastric pain", "Withdrawal มีสั่นและวุ่นวาย ซึ่งสั่นวุ่นวาย — จะถูกถ้าดื่มหนัก", "C difficile มีท้องเสีย ซึ่งท้องเสีย — จะถูกถ้าท้องเสียหลังยาปฏิชีวนะ"], "trap": "ต้องดูหู คอ จมูก", "summary": ["Other causes (78 หน้า 47): preexisting infection, alcohol withdrawal, acute pancreatitis, acalculous cholecystitis, sinusitis, C difficile, acute gout", "Sinusitis จาก prolonged NG tube", "เบาะแส: หนองจมูก ปวดหน้า", "ถอด NG tube และรักษา", "ถอด NG tube เร็วลดโอกาส sinusitis"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 47 · ไม่มีสัญลักษณ์"}),
U({"n": 199, "stem": "A 68-year-old man in intensive care after a long cardiac operation has fever, right upper quadrant tenderness and rising bilirubin without gallstones on ultrasound. Which cause from the list of other causes of fever applies?", "opts": ["Sinusitis", "Acute gout", "Alcohol withdrawal", "Atelectasis", "Acalculous cholecystitis"], "ans": 4, "notes": "สไลด์ไฟล์ 78 หน้า 47 พิมพ์ว่า <b>\"Acute pancreatitis, acalculous cholecystitis\"</b>", "kimg": ["l12_p47", "l12b_p38"], "interp": "ICU ปวด RUQ ไม่มีนิ่ว", "why": "หน้า 47: other causes รวม <b>acalculous cholecystitis</b> และ acute pancreatitis โจทย์ให้ผู้ป่วย ICU หลังผ่าตัดหัวใจที่มีไข้ ปวด RUQ และ bilirubin สูงโดย ultrasound ไม่พบนิ่ว ซึ่งตรงกับ acalculous cholecystitis ที่หน้า 47 ของ 78 รวมกับ acute pancreatitis ในรายการ other cause", "wrong": ["Sinusitis ต้องมี NG tube นานและหนองจมูก ซึ่งต้องมี NG tube นาน — จะถูกถ้ามี NG นานและปวดหน้า", "Gout ปวดข้อ ซึ่งปวดข้อ — จะถูกถ้าข้อบวมแดง", "Withdrawal มีสั่น ซึ่งสั่นวุ่นวาย — จะถูกถ้าดื่มหนัก", "Atelectasis ไม่ปวด RUQ ซึ่งเกิดวัน 1–3 — จะถูกถ้าไอหายใจตื้น CXR volume loss"], "trap": "ไม่มีนิ่วก็เป็น cholecystitis ได้", "summary": ["Other causes: acute pancreatitis, acalculous cholecystitis", "เกิดในผู้ป่วยวิกฤต ICU หลังผ่าตัดใหญ่", "เบาะแส: ไข้ ปวด RUQ ไม่มีนิ่ว", "ทบทวนสาเหตุท้องที่ไม่เกี่ยวกับแผลผ่าตัด", "ผู้ป่วยวิกฤตเสี่ยง cholecystitis แม้ไม่มีนิ่ว"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 47 · ไม่มีสัญลักษณ์"}),
U({"n": 200, "stem": "In the conclusion of the lecture, a senior explains to students how good postoperative outcomes are achieved. Which statement best summarizes the lecture flow from pre-operative management to good outcome?", "opts": ["Pre-operative risk assessment guides perioperative and postoperative care", "Postoperative care is unrelated to preoperative findings", "Only the operation itself determines the outcome", "Pain control alone guarantees a good outcome", "Infection prevention replaces risk assessment"], "ans": 0, "notes": "สไลด์ไฟล์ 78 หน้า 48 พิมพ์ว่า <b>\"Preoperative Management: History · Physical Examination · Nutritional status · Investigation · Risk assessment → Perioperative Period → Postoperative Care: Pain Management · Pulmonary Complication · Infection → Good Outcome\"</b><br>ลายมือ jod หน้า 44 <b>\"ต้องดูสิ่งที่กังวลตอน pre-op ด้วย\"</b>", "kimg": ["l12_p48", "l12b_p44"], "interp": "ถามภาพรวมของ conclusion", "why": "หน้า 48: <b>preoperative management → perioperative → postoperative care → good outcome</b> และ jod: ต้องดูสิ่งที่กังวลตอน pre-op ด้วย โจทย์ถามภาพรวมของ conclusion ซึ่งหน้า 48 ของ 78 วาดเป็นลูกศร preoperative management, perioperative period, postoperative care ไปสู่ good outcome และลายมือ jod เขียนว่าต้องดูสิ่งที่กังวลตอน pre-op ด้วย", "wrong": ["Postop care ไม่ได้แยกจาก preop เพราะลายมือระบุให้ดูสิ่งที่กังวลตอน pre-op ซึ่งขัดกับลายมือ jod — จะถูกถ้ามี complication ที่ไม่เคยประเมิน", "ผลลัพธ์ขึ้นกับ preop periop และ postop ซึ่งผลลัพธ์ขึ้นกับหลายช่วง — จะถูกถ้าไม่มีปัญหาอื่น", "Pain เป็นเพียงหนึ่งใน pain, pulmonary complication, infection ซึ่งเป็นเพียงหนึ่งใน postoperative care — จะถูกถ้ามีเพียงปวด", "Infection prevention ไม่ทดแทน risk assessment ซึ่งเป็นเพียงหนึ่งในปัญหา — จะถูกถ้ามีการประเมินแล้ว"], "trap": "ผลลัพธ์ต่อเนื่องจาก pre-op", "summary": ["Preop: history, PE, nutrition, investigation, risk assessment", "Periop → postop care: pain management, pulmonary complication, infection", "เป้าหมาย good outcome", "ลายมือ jod: ต้องดูสิ่งที่กังวลตอน pre-op ด้วย", "ปัญหาหลังผ่าตัดมักสืบมาจากความเสี่ยงที่ประเมินได้ตั้งแต่ pre-op"], "tags": ["Pre-op & post-op"], "src": "L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 48 (= jod หน้า 44) · ไม่มีสัญลักษณ์ · ลายมือ jod"})
]});
})();

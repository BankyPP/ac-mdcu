(function(){
/* SI Med OSCE — SI133 Rotation 403–404 (ข้อสอบอายุรศาสตร์ SI133) — ไฟล์ s133b.pdf (โค้ด SIOS133B) 10 หน้า
   ไฟล์บอก: OSCE 30 นาที (5 นาที/สถานี) · หน้า 1 = ปก/กติกา (ไม่มีข้อสอบ) · หน้า 2–6 = "OSCE / LAB" 11 สถานี (ในไฟล์เป็นข้อ 1–11) · หน้า 7–10 = "OSCE – ที่เดินวน ๆ กัน" 13 สถานี (ข้อ 1–13)
   ไม่พบ MCQ/MEQ ในไฟล์นี้ และไม่พบกรอบปิดทับ · ตัวแดงในหน้า 7–10 = เฉลยของผู้จด · ตัวขีดฆ่าในหน้า 3–6 = ผู้จดขีดทิ้งแล้วเขียนแก้ด้วยลายมือน้ำเงิน
   การตั้ง orig: LAB = sec:"LAB" orig:"LAB 1"–"LAB 11" · ส่วนที่เดินวน = orig:"1"–"13" · รวม 24 สถานี ไม่มีฐานพัก
   รูป: LAB = os133b_l<n> (รูปเฉลยหรือภาพต้นฉบับที่มีป้าย = os133b_kl<n>) · ส่วนเดินวน = os133b_<n> (kimg = os133b_k<n>)
   รูป LAB 1, 4, 7, 8, 9, 10, 11 และส่วนเดินวน 1, 13 มีลายมือ/ป้ายคำตอบทับในต้นฉบับ → ลบออกด้วยโปรแกรมแล้ว (ภาพที่ลบอาจมีรอยเบลอเล็กน้อย) · ภาพเต็มที่มีป้ายเก็บเป็น kimg
   ไม่มีรูปในไฟล์: LAB 2 (EKG), LAB 5, LAB 6 (CXR) — ใช้ NOIMG */
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
const ADD="ข้อย่อยนี้ Claude เติม (ไม่มีในไฟล์)";
const NOIMG="ไม่มีรูปในไฟล์ — ข้อนี้ฝึกบรรยายสิ่งที่คาดว่าจะเห็น";
const CLN="รูปโจทย์ลบลายมือ/ป้ายคำตอบที่ผู้จดทับไว้ออกด้วยโปรแกรมแล้ว (อาจมีรอยเบลอเล็กน้อย)";
const Co=o=>Object.assign({set:"SI133",ro:"Ro403–404",file:"SIOS133B",opinion:""},o);
QB.push(

Co({page:2,sec:"LAB",orig:"LAB 1",topic:"micro",sub:"Malaria",title:"Fever with jaundice — blood smear",img:["os133b_l1"],imgNote:"Thin blood smear, Wright–Giemsa stain, high power",
 stem:`A Burmese woman presents with fever. Physical examination shows hepatomegaly and moderate jaundice. Her CBC shows thrombocytopenia and leukopenia. A thin blood smear is shown.`,
 gray:"1 หญิงพม่า, มีไข้, ตับโต, moderate juandice CBC, Plt ต่ำ, WBC ต่ำ · จง diag: Malaria · บอกชื่อ organism: P. falciparum",
 flag:CLN+" · ผู้จดไฮไลต์ \"Plt ต่ำ, WBC ต่ำ\" และล้อมกรอบ",
 notes:"ลายมือน้ำเงิน: \"Pf\" บนรูป และ \"Pf\" (อ่านเป็น Mf ก็ได้ (?)) เหนือกรอบที่ล้อมคำว่า \"Plt ต่ำ, WBC ต่ำ\" · ไฮไลต์ฟ้า: Plt ต่ำ, WBC ต่ำ",
 parts:S(
  B("1.1 Diagnosis",2,{tags:["micro"],key:"Malaria",
   ans:"<b>Malaria</b> (ไข้ + ตับโต + jaundice + thrombocytopenia + leukopenia + พบเชื้อใน RBC บน thin smear)",
   exp:"ในรูปเห็นเชื้อรูปวงแหวน (ring form) เล็ก ๆ อยู่ใน RBC หลายเซลล์ · ไข้ร่วมกับเกล็ดเลือดต่ำ/WBC ต่ำ/ดีซ่าน ในผู้ป่วยจากพื้นที่ระบาด ต้องนึกถึงมาลาเรียก่อนเสมอ · ส่งตรวจ thick + thin smear หรือ RDT",
   rubric:"ได้เต็ม = Malaria · ตอบแค่ \"พยาธิในเม็ดเลือด/parasite\" ได้บางส่วน",
   pts:[CR(P("Malaria","malaria","มาลาเรีย"))]}),
  B("1.2 Name the organism",2,{tags:["micro"],key:"P. falciparum",
   ans:"<b><i>Plasmodium falciparum</i></b>",
   exp:"ลักษณะที่เข้า falciparum: ring form เล็ก บาง มี <b>chromatin 2 จุด</b> (double dots) · พบ <b>หลายตัวใน RBC เดียว</b> · accolé form (ติดขอบ RBC) · RBC ที่ติดเชื้อ<b>ไม่โต</b> · parasitemia สูง · ในเลือดส่วนปลายปกติพบเฉพาะ ring และ gametocyte (รูปกล้วย) ไม่พบ schizont<br>Jaundice (bilirubin &gt; 3 mg/dL) ร่วมกับ parasite &gt; 100,000/µL เข้าเกณฑ์ severe malaria (WHO) → IV artesunate",
   rubric:"ได้เต็ม = P. falciparum / Pf · ตอบ P. vivax / knowlesi / malariae = ไม่ได้",
   pts:[CR(P("Plasmodium falciparum","falciparum","\\bp\\.? ?f\\b","ฟัลซิ"))]})),
 interp:"สถานีสไลด์: ไข้ + ตับโต + ดีซ่าน + Plt/WBC ต่ำ + ring form หลายตัวใน RBC = malaria จาก P. falciparum",
 summary:["P. falciparum: ring เล็ก double chromatin dots, หลายตัวต่อ RBC, accolé form, RBC ไม่โต","Plt ต่ำ + WBC ต่ำ + ดีซ่านในผู้ป่วยไข้จากพื้นที่ระบาด → นึกถึง malaria","Jaundice + parasitemia &gt; 100,000/µL = severe malaria → IV artesunate"]}),

Co({page:3,sec:"LAB",orig:"LAB 2",topic:"ekg",sub:"Electrolyte EKG",title:"CKD stage 4 with abnormal electrolytes — EKG",imgNote:NOIMG,
 stem:`A man with diabetes mellitus, hypertension and chronic kidney disease stage 4 has an abnormal serum electrolyte result. His 12-lead EKG is shown. Describe the EKG and give the diagnosis.`,
 gray:"2 ผป.ชาย DM, HT, CKD stage 4 มีผล electrolyte จงบรรยาย EKG · -sinus rhythm, diffuse Tall peak T wave, prolonged PR interval, wide QRS complex, LV hypertrophy · -Diagnosis(20 points) hyperkalemia",
 flag:"⚠ NOIMG — ไฟล์ไม่มีรูป EKG (มีแต่ข้อความบรรยายคำตอบ) ข้อนี้ให้บรรยายสิ่งที่คาดว่าจะเห็น · ไม่ทราบค่า electrolyte ที่โจทย์ให้ (ไฟล์ไม่ระบุ) จึงไม่ใส่ตัวเลข",
 notes:"ลายมือน้ำเงิน (ไฮไลต์ฟ้าที่ sinus rhythm): <i>Sinus rhythm 3 อย่าง</i> → (1) P wave บวกใน lead I, II, aVF และลบใน lead aVR (2) P wave morphology สม่ำเสมอ (?) (3) P-P interval regular (?) · <i>Tall peak T wave</i> = ≥ 5 mm ใน limb lead, ≥ 10 mm ใน V1–V6 (ลายมือเขียน \"&gt;\") · <i>PR interval</i> &gt; 5 ช่องเล็ก · <i>wide QRS</i> &gt; 2.5(?) ช่องเล็ก (อ่านเลขไม่ชัด) · <i>LVH</i>: Cornell criteria R(aVL) + S(V3) &gt; 20 mm ในผู้หญิง, &gt; 28 mm ในผู้ชาย · S(V1 หรือ V2) + R(V5 หรือ V6) &gt; 7(?) ช่องใหญ่ (ไฮไลต์ ช่องใหญ่) · ข้างคำว่า glucose 110: \"pre DM\"",
 parts:S(
  B("2.1 Describe the EKG",4,{tags:["ekg"],key:"sinus rhythm, diffuse Tall peak T wave, prolonged PR interval, wide QRS complex, LV hypertrophy",
   ans:"<b>Sinus rhythm</b> (P นำหน้าทุก QRS, P บวกใน I, II, aVF และลบใน aVR, regular) · <b>diffuse tall peaked T waves</b> · <b>prolonged PR interval</b> (&gt; 0.20 s = &gt; 5 ช่องเล็ก) · <b>wide QRS complex</b> · <b>LV hypertrophy</b>",
   exp:"ลำดับการเปลี่ยนแปลงของ hyperkalemia: peaked T → PR ยาว, P แบนลง/หาย → QRS กว้าง → sine wave → VF/asystole<br>Peaked T: สูง ≥ 5 mm ใน limb lead หรือ ≥ 10 mm ใน precordial lead ฐานแคบ แหลมสมมาตร<br>QRS กว้าง: เกณฑ์ปกติคือ &lt; 0.12 s (&lt; 3 ช่องเล็ก) — ลายมือในไฟล์เขียนตัวเลข 2.5(?) ช่องเล็ก (= 0.10 s) อ่านไม่ชัด<br>LVH (ผู้ป่วย HT): Cornell = R aVL + S V3 &gt; 28 mm (ชาย) / &gt; 20 mm (หญิง) · Sokolow–Lyon = S V1 + R V5/V6 ≥ 35 mm",
   rubric:"ได้เต็มต่อข้อ = ระบุลักษณะนั้นได้ · ไม่ใส่ sinus rhythm ได้น้อยกว่า",
   pts:[H("Rhythm",20),P("Sinus rhythm","sinus","ไซนัส"),
    H("Findings of the abnormal electrolyte",60),CR(P("Diffuse tall peaked T waves","tall","peak","t wave สูง","t สูง","แหลม")),P("Prolonged PR interval","prolong\\w* pr","pr prolong","pr.{0,15}(ยาว|นาน|เกิน|>)","first.?degree","1st.?degree","long pr"),P("Wide QRS complex","wide","กว้าง","broad","qrs.{0,15}(prolong|widen|เกิน|นาน)"),
    H("Associated",20),P("Left ventricular hypertrophy","lvh","ventricular hypertrophy","ห้องล่างซ้ายโต","ventricle.{0,10}โต")]}),
  B("2.2 Diagnosis",3,{tags:["ekg"],key:"hyperkalemia",
   ans:"<b>Hyperkalemia</b> (CKD stage 4 → ขับ K ได้น้อย ± ยา ACEI/ARB) · LVH จาก HT เรื้อรัง",
   exp:"ถ้า K สูงจริงพร้อมการเปลี่ยนแปลง EKG (QRS กว้าง) ถือเป็นภาวะฉุกเฉิน: IV calcium gluconate ปกป้องกล้ามเนื้อหัวใจ → ลด K ในเลือด (insulin + glucose, salbutamol nebulizer, NaHCO3 ถ้ามี acidosis) → ขับ K ออก (furosemide, resin, dialysis)",
   rubric:"ได้เต็ม = hyperkalemia · ตอบ hypocalcemia หรือ MI = ไม่ได้",
   pts:[CR(P("Hyperkalemia","hyperkal","hyper-kal","k สูง","โพแทสเซียมสูง","potassium.{0,12}(สูง|high|elevat)"))]})),
 interp:"สถานี EKG: CKD + peaked T + PR ยาว + QRS กว้าง = hyperkalemia",
 summary:["Hyperkalemia: peaked T → PR ยาว/P แบน → QRS กว้าง → sine wave","Peaked T ≥ 5 mm ใน limb lead, ≥ 10 mm ใน precordial lead","EKG เปลี่ยน → IV calcium gluconate ก่อน แล้วลด K"]}),

Co({page:3,sec:"LAB",orig:"LAB 3",topic:"lab",sub:"LFT",title:"Overweight patient with abnormal liver tests — interpretation",
 stem:`A patient has an overweight BMI. Laboratory results: AST mildly elevated, ALT mildly elevated, albumin and globulin normal, fasting plasma glucose 110 mg/dL, triglyceride 200 mg/dL, cholesterol 250 mg/dL. Interpret the results and state the further investigations you would order.`,
 gray:"3.BMI overweight, AST mild elevate, ALT mild elevate, Alb/Glob normal, fasting glucose 110, TG 200, cholesterol 250-> hepatocellular injury (possibly NAFLD)-> ส่งตรวจอะไรเพิ่มเติม ->HBs Ag, Anti-HBV IgM, Fibroscan, ANA for chronic hepatitis (ผู้จดขีด NAFLD และ Anti-HBV IgM ทิ้ง เขียน MASLD และ Anti-HCV แทน)",
 flag:"โจทย์ไม่มีตัวเลข AST/ALT (ไฟล์ให้เป็นข้อความ mild elevate) — ไม่แต่งตัวเลข · ผู้จดขีด \"NAFLD\" ทิ้งแล้วเขียน MASLD (ชื่อใหม่ปี 2023) · ผู้จดขีด \"Anti-HBV IgM\" ทิ้งแล้วเขียน \"Anti-HCV\"",
 notes:"ลายมือน้ำเงิน: <i>pre DM</i> (ข้าง fasting glucose 110) · <i>MASLD</i> (แทน NAFLD) · \"ต้องมีปัจจัยเสี่ยง cardiometabolic(?)\" · <i>MASH, Alcoholic steatohepatitis</i> (ชื่อที่ต้องแยก) · \"ต้อง rule out chronic viral hepatitis or chronic hepatitis อื่น ๆ ex. Autoimmune\" · แก้ Anti-HBV IgM → <i>Anti-HCV</i>",
 parts:S(
  B("3.1 Interpret the laboratory results",3,{tags:["lab"],key:"hepatocellular injury (possibly NAFLD)",
   ans:"<b>Hepatocellular pattern</b> (AST/ALT สูงเล็กน้อย, Alb/Glob ปกติ = synthetic function ยังดี) ร่วมกับ <b>metabolic risk</b> (overweight, TG/cholesterol สูง, fasting glucose 100–125 = prediabetes) → นึกถึง <b>MASLD</b> (เดิมเรียก NAFLD)",
   exp:"MASLD (2023): hepatic steatosis + ≥ 1 cardiometabolic risk factor (BMI ≥ 23 ในชาวเอเชีย, glucose ผิดปกติ/DM, BP สูง, TG สูง, HDL ต่ำ) โดยไม่มีสาเหตุอื่น · ถ้ามี inflammation/ballooning = MASH · ต้องแยกการดื่มแอลกอฮอล์ (MetALD/ALD) · ยืนยัน steatosis ด้วย ultrasound/CAP",
   rubric:"ได้เต็ม = hepatocellular injury + MASLD/NAFLD · ได้บางส่วน = ระบุแค่ transaminase สูงเล็กน้อย",
   pts:[P("Hepatocellular injury (mild transaminase elevation)","hepatocellular","hepatic injury","ตับอักเสบ","transaminase","ast.{0,10}alt","เอนไซม์ตับ"),CR(P("MASLD / NAFLD (fatty liver)","masld","nafld","fatty","steato","ไขมันพอกตับ","mash")),P("Metabolic risk: overweight, dyslipidemia, prediabetes","metabolic","pre.?dm","prediab","impaired fasting","dyslipid","overweight","อ้วน","ไขมันสูง","cardiometabolic")]}),
  B("3.2 Further investigations",3,{tags:["lab"],key:"HBs Ag, Anti-HBV IgM (ผู้จดแก้เป็น Anti-HCV), Fibroscan, ANA for chronic hepatitis",
   ans:"<b>HBsAg</b> · <b>Anti-HCV</b> · <b>FibroScan</b> (liver stiffness + CAP ประเมิน fibrosis/steatosis) · <b>ANA</b> (autoimmune hepatitis)",
   exp:"เป้าหมาย: ตัดสาเหตุ chronic hepatitis อื่น (ไวรัส B/C, autoimmune) แล้วประเมินระดับ fibrosis · เสริม (Claude): ประวัติแอลกอฮอล์/ยา-สมุนไพร, ultrasound ตับ, FIB-4 (จาก AST, ALT, Plt, อายุ)<br>ผู้จดแก้ Anti-HBV IgM เป็น Anti-HCV — สมเหตุสมผล เพราะ anti-HBc IgM ใช้ดู acute hepatitis B ส่วน chronic ใช้ HBsAg (± anti-HBc total, anti-HBs)",
   rubric:"ได้เต็มเมื่อตอบครบ 4 รายการ · ตอบ ≥ 3 ได้เกือบเต็ม",
   pts:[G("Investigations (≥ 3 of 4)",3,P("HBsAg","hbs ?ag","hbsag","hepatitis b","ไวรัสตับอักเสบ ?บี"),P("Anti-HCV","anti[- ]?hcv","hepatitis c","hcv","ไวรัสตับอักเสบ ?ซี"),P("FibroScan / liver stiffness","fibro ?scan","elastograph","stiffness","transient"),P("ANA (autoimmune hepatitis)","\\bana\\b","antinuclear","autoimmune","anti[- ]?sma"))]})),
 interp:"สถานี Lab: transaminase สูงเล็กน้อย + metabolic risk = MASLD แล้วส่งตรวจแยก chronic hepatitis อื่นและประเมิน fibrosis",
 summary:["MASLD = steatosis + cardiometabolic risk factor ≥ 1 โดยไม่มีสาเหตุอื่น","แยกสาเหตุ: HBsAg, anti-HCV, ANA, แอลกอฮอล์/ยา","ประเมิน fibrosis: FIB-4 → FibroScan"]}),

Co({page:3,sec:"LAB",orig:"LAB 4",topic:"img",sub:"Skull film",title:"Fatigue for 1 month — skull radiograph",img:["os133b_l4"],kimg:["os133b_kl4"],imgNote:"Lateral skull radiograph",
 stem:`A patient presents with fatigue for 1 month. A lateral skull radiograph is shown. Describe the film, list five investigations you would request, and give the diagnosis.`,
 gray:"4. ผป. มาด้วยอาการอ่อนเพลีย 1 เดือน จงบรรยายภาพถ่ายรังสี (AP lateral → ผู้จดแก้ lateral) · Osteolytic lesion/ punch out, multiple lesion, uniform (ขีดทิ้ง) · Investigation อะไรบ้าง 5 อย่าง -Bone marrow study, Serum electrophoresis, BUN,Cr, Serum Calcium, CBC, Bone scan (ขีดทิ้ง) · Diag อะไร -Multiple myeloma",
 flag:CLN+" (ลบข้อความเหลืองบนรูปที่เขียนว่าไม่มี sclerotic bone) · ภาพที่มีข้อความเก็บเป็นรูปเฉลย",
 notes:"ลายมือน้ำเงิน: <i>MM</i> (ข้างรูป) · <i>Skull film: multiple punch out osteolytic lesion without sclerotic border varying in size</i> (แทนข้อความที่ขีดทิ้ง ซึ่งเขียนว่า uniform) · <i>MM CRAB</i> · \"Bone marrow study\" มีลายมือเหนือคำ (อ่านไม่ออก (?) ประมาณ \"ใช้ยืนยันการวินิจฉัย MM\") · \"Serum electrophoresis\" มีลายมือเหนือคำ <i>protein</i> · \"Bone scan\" ถูกขีดทิ้ง เขียนแทนเป็น <i>film bone survey</i> · ลายมือเหลืองบนรูป: \"ไม่มี sclerotic bone\"",
 parts:S(
  B("4.1 Describe the radiograph",3,{tags:["img"],key:"Skull film: multiple punch out osteolytic lesions without sclerotic border, varying in size",
   ans:"Lateral skull film: <b>multiple punched-out osteolytic lesions</b> กระจายทั่ว calvarium · ขอบชัด <b>ไม่มี sclerotic rim</b> · ขนาดต่างกัน (ไฟล์เดิมพิมพ์ \"uniform\" แต่ผู้จดขีดทิ้งแล้วแก้เป็น varying in size)",
   exp:"ลักษณะ \"raindrop / pepper-pot skull\" ของ multiple myeloma · lytic lesion ของ myeloma มัก<b>ไม่มี reactive sclerosis</b> เพราะ osteoblast ถูกกด (ต่างจาก metastasis ที่อาจมีขอบ sclerotic) · bone scan จึงมัก negative/ไม่ไว",
   rubric:"ได้เต็ม = punched-out osteolytic lesions หลายตำแหน่ง + ไม่มี sclerotic rim · ได้บางส่วน = osteolytic lesions",
   pts:[CR(P("Multiple punched-out osteolytic lesions","punch","osteolytic","lytic","multiple","รูพรุน","ทะลุ")),P("No sclerotic border","sclerotic","ไม่มีขอบ","no rim","without sclerotic"),P("Varying sizes","varying","vary","different size","ขนาดต่าง","หลายขนาด")]}),
  B("4.2 List five investigations",5,{tags:["img"],key:"Bone marrow study, Serum electrophoresis, BUN/Cr, Serum calcium, CBC (ไม่ใช่ bone scan — ผู้จดแก้เป็น film bone survey)",
   ans:"<b>Bone marrow aspiration/biopsy</b> · <b>Serum protein electrophoresis</b> (± urine, immunofixation, serum free light chain) · <b>BUN, Cr</b> · <b>Serum calcium</b> · <b>CBC</b> · <b>Film bone survey</b> (skeletal survey)",
   exp:"ตรวจตามเกณฑ์ <b>CRAB</b>: hyperCalcemia, Renal impairment, Anemia, Bone lesion · Dx myeloma = plasma cell ในไขกระดูก ≥ 10% (หรือ plasmacytoma จากชิ้นเนื้อ) + myeloma-defining event (CRAB หรือ SLiM: clonal PC ≥ 60%, FLC ratio ≥ 100, MRI &gt; 1 focal lesion)<br>ปัจจุบัน IMWG แนะนำ whole-body low-dose CT (หรือ PET-CT/MRI) แทน plain skeletal survey ได้ · bone scan ไม่ไวสำหรับ lytic lesion ของ myeloma (ผู้จดขีดทิ้ง ตรงกัน)",
   rubric:"นับ 1 คะแนนต่อรายการที่ถูก สูงสุด 5 · ตอบ bone scan ไม่ได้คะแนน",
   pts:[G("Any five investigations",5,P("Bone marrow study","bone marrow","bm biopsy","bma","ไขกระดูก","bm study"),P("Serum protein electrophoresis / immunofixation","electrophoresis","\\bspep\\b","\\bupep\\b","immunofixation","\\bsife\\b","m[- ]?protein","paraprotein"),P("BUN / creatinine","\\bbun\\b","creatinine","\\bcr\\b","renal function","ไต"),P("Serum calcium","calcium","\\bca\\b","แคลเซียม"),P("CBC","\\bcbc\\b","complete blood","hemoglobin","hb\\b"),P("Film bone survey / skeletal survey","bone survey","skeletal survey","low.?dose","whole.?body","wbct","\\bmri\\b","pet"),P("Serum free light chain","free light","\\bflc\\b"))]}),
  B("4.3 Diagnosis",2,{tags:["img"],key:"Multiple myeloma",
   ans:"<b>Multiple myeloma</b>",
   exp:"อ่อนเพลียจาก anemia (marrow infiltration + CKD) · พบ lytic lesion หลายจุด → นึก MM เป็นอันดับแรก · แยก: bone metastasis (มีขอบ sclerotic ได้, ตำแหน่งต่างกัน), hyperparathyroidism (brown tumor, salt-and-pepper skull)",
   pts:[CR(P("Multiple myeloma","myeloma","\\bmm\\b","มัยอีโลมา","plasma cell"))]})),
 interp:"สถานีรูป: punched-out lytic lesion ที่กะโหลก + อ่อนเพลีย = multiple myeloma — ตรวจตาม CRAB",
 summary:["Punched-out lytic lesions ไม่มี sclerotic rim = myeloma","CRAB: Ca สูง, Renal, Anemia, Bone","ตรวจ: BM study, SPEP/UPEP + immunofixation, Cr, Ca, CBC, skeletal survey"]}),
);
})();

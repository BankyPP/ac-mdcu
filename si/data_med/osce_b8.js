(function(){
/* SI Med OSCE — SI131 Rotation 401–404 — ไฟล์ s131a.pdf (โค้ด SIOS131A) 4 หน้า
   หน้า 1–4 บน = MCQ (ลงแล้ว) · ส่วน "OSCE" อยู่ครึ่งล่างหน้า 4 เท่านั้น: 4 สถานี พิมพ์ตัวดำ (โจทย์) + ตัวน้ำเงิน "Key" (คำตอบผู้จด) + ตัวแดง (ข้อเตือนของผู้จด)
   ไม่มีลายมือ/ไฮไลต์/รูปในส่วน OSCE (ลายมือ + ตารางเชื้อเล็ก ๆ บนหน้า 4 เป็นของ MCQ ข้อ 24–25) → ทุกสถานีที่อ้างภาพใช้ NOIMG
   key = ข้อความ "Key" ของผู้จดตามตัว (ไม่ใช่เฉลยทางการ) — Claude ตรวจกับตำราแล้ว
   ข้อ 4: ไฟล์จบที่ "b. Dx" ไม่มีคำตอบ (ถูกตัดท้ายไฟล์) → Claude เฉลย Dx เอง (บอกใน flag)
   ข้อ 3: หัวข้อในไฟล์ "Hx (seizure)" แต่ Key = vasovagal syncope → topic hx, sub "Syncope" · บทผู้ป่วย (sp) Claude แต่ง */
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
const Co=o=>Object.assign({set:"SI131",ro:"Ro401–404",file:"SIOS131A",opinion:""},o);
QB.push(

Co({page:4,orig:"1",topic:"micro",sub:"Gram stain",title:"70-year-old man in the ICU — sputum Gram stain",imgNote:NOIMG,
 seen:"คล้าย SI130 Ro409–412 ข้อ 22 (sputum Gram stain ผู้ป่วยใส่เครื่องช่วยหายใจ — คนละเชื้อ)",
 stem:`A 70-year-old man is admitted to the intensive care unit. A sputum specimen is collected for Gram stain and examined under the microscope.<br>a. Describe the Gram-stained smear.<br>b. Name the most likely organism.`,
 gray:"1. Lab (sputum G/S) : ชาย 70 ปี นอนอยู่ที่ ICU ทําการเก็บเสมหะทํา sputum G/S · a. บรรยาย → Key adequate sputum (PMN >= 25 cells/LPF, squamous epithelial cells < 10 cells/LPF), gram negative medium to large coccobacilli · b. บอกชื่อเชื้อ → Key Acinetobacter baumannii",
 flag:"⚠ ไม่มีรูปในไฟล์ — ถามสิ่งที่คาดว่าจะเห็น",
 notes:"ไฟล์พิมพ์โจทย์ตัวดำ + Key ตัวน้ำเงิน · ไม่มีลายมือ",
 parts:S(
  B("1.1 Describe the Gram-stained smear.",3,{tags:["micro"],key:"adequate sputum (PMN >= 25 cells/LPF, squamous epithelial cells < 10 cells/LPF), gram negative medium to large coccobacilli",
   ans:"<b>Adequate sputum</b> specimen: PMN ≥ 25 cells/LPF, squamous epithelial cells &lt; 10 cells/LPF · <b>Gram-negative medium-to-large coccobacilli</b> (มักเรียงเป็นคู่) ปนกับ PMN จำนวนมาก",
   exp:"ประเมินคุณภาพเสมหะก่อนเสมอ (Bartlett/Murray-Washington): PMN ≥ 25 + squamous &lt; 10 ต่อ LPF = มาจากทางเดินหายใจส่วนล่าง ไม่ใช่น้ำลาย · GN coccobacilli ที่อ้วนเป็นคู่ในผู้ป่วย ICU นึกถึง <i>Acinetobacter</i> (บางครั้งติดสีคล้าย Gram-positive เพราะ decolorize ยาก) · GN coccobacilli ตัวเล็กในคนนอก รพ. นึกถึง <i>H. influenzae</i>",
   rubric:"ได้เต็ม = บอกว่า adequate พร้อมเกณฑ์ + GN coccobacilli · ตอบ GN bacilli เฉย ๆ ได้บางส่วน",
   pts:[H("Specimen quality",40),P("Adequate sputum","adequate","เสมหะดี","คุณภาพ"),P("PMN ≥ 25/LPF and squamous epithelial cells < 10/LPF","25","squamous","epithelial","< ?10"),
    H("Organism morphology",60),CR(P("Gram-negative","gram[- ]?neg","\\bgnb\\b","\\bgncb\\b","แกรมลบ")),P("Coccobacilli (medium to large)","coccobacill","cocco-bacill")]}),
  B("1.2 Name the most likely organism.",2,{tags:["micro"],key:"Acinetobacter baumannii",
   ans:"<b><i>Acinetobacter baumannii</i></b>",
   exp:"เชื้อก่อ hospital-acquired/ventilator-associated pneumonia ที่พบบ่อยมากใน ICU ไทย มักดื้อยาหลายขนาน (carbapenem-resistant) · ยาที่ใช้ขึ้นกับความไวต่อยา เช่น colistin, sulbactam ขนาดสูง (ampicillin-sulbactam / sulbactam-durlobactam ถ้ามี), cefiderocol",
   rubric:"ต้องเขียนชื่อเต็มสกุล + species · ตอบ Acinetobacter spp. ได้บางส่วน",
   pts:[CR(P("Acinetobacter baumannii","acinetobacter","baumannii"))]})
 ),
 interp:"Sputum Gram stain ใน ICU: ประเมิน adequacy ก่อน แล้วบรรยายรูปร่างเชื้อ → นึกถึงเชื้อ nosocomial",
 summary:["Adequate sputum: PMN ≥ 25/LPF และ squamous epithelial < 10/LPF","GN coccobacilli อ้วนเป็นคู่ในผู้ป่วย ICU = Acinetobacter baumannii (ดื้อยาบ่อย)","GN coccobacilli ตัวเล็กนอก รพ. = H. influenzae"]}),

Co({page:4,orig:"2",topic:"micro",sub:"PBS",title:"70-year-old woman with fatigue and constipation — blood smear",imgNote:NOIMG,
 seen:"SI130 Ro409–412 ข้อ 24 · SI132 Ro403–404 ข้อ 12 · SI133 Ro405–406 ข้อ 1 (เพลีย + ท้องผูก → rouleaux)",
 stem:`A 70-year-old woman presents with fatigue for 3 months and constipation for 1 week. Her peripheral blood smear is examined under the microscope.<br>a. Describe the blood smear.<br>b. Give your differential diagnosis.<br>c. Name the investigations you would request.`,
 gray:"2. Lab (blood smear) : หญิง 70 ปี มาด้วยอ่อนเพลีย 3 mo ท้องผูกมา 1 wk · a. บรรยาย → Key RBC : NCNC, Rouleaux formation · WBC normal in number PMN predominate, normal platelet normal staining · b. Ddx → Key multiple myeloma > chronic inflammation, autoimmune, infection · c. บอกชื่อการส่งตรวจ → Key serum protein electrophoresis, bone marrow study, immunofixation",
 flag:"⚠ ไม่มีรูปในไฟล์ — ถามสิ่งที่คาดว่าจะเห็น",
 notes:"ไฟล์พิมพ์โจทย์ตัวดำ + Key ตัวน้ำเงิน · ไม่มีลายมือ",
 parts:S(
  B("2.1 Describe the blood smear.",4,{tags:["micro"],key:"RBC : NCNC, Rouleaux formation · WBC normal in number PMN predominate, normal platelet normal staining",
   ans:"<b>RBC:</b> normochromic normocytic RBC, no anisocytosis/poikilocytosis, <b>rouleaux formation</b> (± blue-staining background)<br><b>WBC:</b> normal in number, neutrophil predominate<br><b>Platelet:</b> normal in number, normal staining",
   exp:"Rouleaux = เม็ดเลือดแดง ≥ 4 เซลล์เรียงซ้อนเหมือนเหรียญ ต้องเห็นใน <b>thin area</b> (บริเวณหนาพบได้ในคนปกติ) · เกิดจาก globulin สูง (paraprotein หรือ polyclonal) · พื้นหลังติดสีน้ำเงินจากโปรตีนสูง (OSCE_REF: Key PBS ข้อ MM)",
   rubric:"ได้เต็ม = NCNC + rouleaux + WBC/Plt ปกติ · ไม่บอก rouleaux ได้ไม่เกินครึ่ง",
   pts:[H("RBC",60),P("Normochromic normocytic RBC","normochrom","normocyt","\\bncnc\\b"),CR(P("Rouleaux formation","rouleau","เรียงซ้อน","เหรียญ")),P("Blue-staining background","blue","background","พื้นหลัง"),
    H("WBC",20),P("WBC normal in number, neutrophil predominate","normal (wbc|in number)","neutrophil","pmn","predominan"),
    H("Platelet",20),P("Platelet normal in number, normal staining","(platelet|plt).{0,25}normal","normal (platelet|plt)","adequate")]}),
  B("2.2 Give your differential diagnosis.",3,{tags:["micro"],key:"multiple myeloma > chronic inflammation, autoimmune, infection",
   ans:"<b>Multiple myeloma</b> (นึกถึงที่สุด) > ภาวะ globulin สูงจากสาเหตุอื่น: chronic inflammation, autoimmune disease, chronic infection · อื่น ๆ: Waldenström macroglobulinemia, lymphoma",
   exp:"หญิงสูงอายุ เพลีย (anemia) + ท้องผูก (hypercalcemia) + rouleaux = CRAB ของ MM (Calcium, Renal, Anemia, Bone) · polyclonal gammopathy จาก infection/inflammation/autoimmune/cirrhosis ก็ทำให้เกิด rouleaux ได้",
   rubric:"ต้องมี MM เป็นอันดับแรก · ตอบ MM อย่างเดียวได้ส่วนใหญ่",
   pts:[CR(P("Multiple myeloma","myeloma","\\bmm\\b","plasma cell")),G("Other causes of high globulin ≥1",1,P("Chronic inflammation","inflamm","อักเสบ"),P("Autoimmune disease","autoimmun","\\bsle\\b","ภูมิ"),P("Chronic infection","infect","ติดเชื้อ"),P("Waldenström / lymphoma","waldenstr","lymphoma"))]}),
  B("2.3 Name the investigations you would request.",3,{tags:["micro"],key:"serum protein electrophoresis, bone marrow study, immunofixation",
   ans:"<b>Serum protein electrophoresis (SPEP)</b> + <b>serum immunofixation</b> (± serum free light chain) · <b>Bone marrow study</b> (clonal plasma cells ≥ 10%) · ประเมิน CRAB: serum calcium, BUN/Cr, CBC, skeletal survey/low-dose whole-body CT",
   exp:"IMWG: MM = clonal BM plasma cells ≥ 10% (หรือ plasmacytoma) + myeloma-defining event (CRAB หรือ BM plasma ≥ 60%, FLC ratio ≥ 100, MRI focal lesion > 1)",
   rubric:"ได้เต็ม = SPEP/immunofixation + BM study · บอกแค่ calcium/Cr ได้บางส่วน",
   pts:[CR(G("Detect monoclonal protein",1,P("Serum protein electrophoresis","electrophoresis","\\bspep\\b","\\bupep\\b"),P("Immunofixation","immunofix"),P("Serum free light chain","free light","\\bflc\\b"))),CR(P("Bone marrow study","bone marrow","\\bbm\\b","ไขกระดูก")),P("Serum calcium, BUN/Cr, skeletal survey","calcium","\\bca\\b","creatinine","\\bcr\\b","skeletal","bone survey","whole.?body")]})
 ),
 interp:"PBS: rouleaux formation ในผู้สูงอายุที่มีอาการ CRAB → คิดถึง MM แล้วส่ง SPEP/immunofixation + BM",
 summary:["Rouleaux ต้องดูใน thin area — เกิดจาก globulin สูง","เพลีย + ท้องผูก (hypercalcemia) ในผู้สูงอายุ = นึกถึง multiple myeloma (CRAB)","Ix: SPEP + immunofixation (± FLC), bone marrow study, Ca, Cr, skeletal imaging"]}),

Co({page:4,orig:"3",topic:"hx",sub:"Syncope",ex:1,title:"History taking — loss of consciousness before arrival",
 stem:`A woman presents after an episode of loss of consciousness before arriving at the hospital.<br>a. Take a history.<br>b. Give your diagnosis.`,
 gray:"3. Hx (seizure) : ผู้ป่วยหญิงมาด้วยหมดสติก่อนมารพ. · a. ซักประวัติ → Key onset, duration, อาการนำก่อนหมดสติ (เห็นแสง หูวิ้ง ได้กลิ่น ไรงี้), เคยเป็นมาก่อนมั้ย กี่ครั้ง, ตอนที่หมดสติมีคนอยู่ด้วยมั้ย, ตอนหมดสติมีชักกระตุกมั้ย, หลังฟื้นมีรู้สึกมึนงงมั้ย จำเหตุการณ์ก่อนหมดสติได้มั้ย, ช่วงหมดสติมีฉี่-ขี้ราดมั้ย · b. Dx → Key vasovagal syncope",
 flag:"บทผู้ป่วย (sp) อายุ ตัวกระตุ้น และรายละเอียด Claude แต่งให้เข้ากับ vasovagal syncope · หัวข้อในไฟล์เขียน \"Hx (seizure)\" แต่เฉลยเป็น syncope (ข้อสอบให้แยก syncope กับ seizure)",
 notes:"ไฟล์พิมพ์โจทย์ตัวดำ + Key ตัวน้ำเงิน · หัวข้อ \"Hx (seizure)\" · ไม่มีลายมือ",
 sp:"หญิง 25 ปี (บทแต่งโดย Claude) เมื่อเช้ายืนเข้าแถวกลางแดดนานราว 30 นาที ยังไม่ได้กินข้าวเช้า · ก่อนล้มรู้สึกร้อนวูบวาบ เหงื่อออก คลื่นไส้ ตาพร่ามืด หูอื้อ แล้วล้มลง · เพื่อนที่อยู่ด้วยเล่าว่าหมดสติไม่ถึง 1 นาที ตัวซีด มีกระตุกแขนสั้น ๆ 2–3 ครั้ง ไม่มีเกร็งทั้งตัว ไม่กัดลิ้น ไม่มีปัสสาวะ/อุจจาระราด · ฟื้นแล้วรู้ตัวดีทันที จำเหตุการณ์ก่อนล้มได้ ไม่สับสน เพลียเล็กน้อย · เคยเป็นแบบนี้ 1 ครั้งตอนเจาะเลือด · ไม่มีใจสั่น เจ็บหน้าอก หอบเหนื่อย ก่อนล้ม ไม่ได้เกิดขณะออกแรง · ไม่มีโรคประจำตัว ไม่กินยา · ครอบครัวไม่มีใครเสียชีวิตกะทันหัน/โรคหัวใจ · ไม่มีอ่อนแรง พูดไม่ชัด ปวดศีรษะ",
 parts:S(
  B("3.1 Take a history.",8,{tags:["hx"],key:"onset, duration, อาการนำก่อนหมดสติ (เห็นแสง หูวิ้ง ได้กลิ่น ไรงี้), เคยเป็นมาก่อนมั้ย กี่ครั้ง, ตอนที่หมดสติมีคนอยู่ด้วยมั้ย, ตอนหมดสติมีชักกระตุกมั้ย, หลังฟื้นมีรู้สึกมึนงงมั้ย จำเหตุการณ์ก่อนหมดสติได้มั้ย, ช่วงหมดสติมีฉี่-ขี้ราดมั้ย",
   ans:"แนะนำตัว + ยืนยันตัวผู้ป่วย → <b>ก่อนหมดสติ</b>: กำลังทำอะไร/ท่าทาง (ยืนนาน, ลุกเร็ว, ออกแรง, ไอ/ปัสสาวะ), ตัวกระตุ้น (ร้อน, ความเจ็บปวด, เห็นเลือด), <b>อาการนำ</b> (ร้อนวูบ เหงื่อออก คลื่นไส้ ตาพร่ามืด หูอื้อ vs aura: เห็นแสง ได้กลิ่น) · ใจสั่น/เจ็บหน้าอก (cardiac) → <b>ขณะหมดสติ</b> (ถามพยาน): นานเท่าไร, สีหน้า, ชัก/กระตุก ลักษณะและระยะเวลา, กัดลิ้น, ปัสสาวะ/อุจจาระราด → <b>หลังฟื้น</b>: ฟื้นทันทีหรือสับสนนาน (postictal), จำเหตุการณ์ได้ไหม, อ่อนแรง → เคยเป็นมาก่อน กี่ครั้ง · โรคประจำตัว (หัวใจ, DM), ยา (ลดความดัน, ยายืด QT), ครอบครัวเสียชีวิตกะทันหัน · red flag ของ cardiac syncope",
   exp:"เป้าหมาย: แยก <b>syncope</b> (reflex / orthostatic / cardiac) ออกจาก <b>seizure</b> และ non-syncopal LOC · ชี้ไปทาง seizure: aura, กัดลิ้นด้านข้าง, เกร็งกระตุกนาน, หน้าเขียว, postictal confusion นาน · ชี้ไปทาง vasovagal: ตัวกระตุ้น (ยืนนาน ร้อน เจ็บ เห็นเลือด) + prodrome autonomic (เหงื่อ คลื่นไส้ ตาลาย) + ฟื้นเร็ว · กระตุกสั้น ๆ (convulsive syncope) พบได้ใน syncope · red flag cardiac: เกิดขณะออกแรง/นอนราบ, ใจสั่นนำ, ไม่มี prodrome, โรคหัวใจ, FH sudden death (ESC 2018)",
   rubric:"ได้เต็ม = ซักครบ 3 ช่วง (ก่อน–ขณะ–หลัง) + พยาน + แยก cardiac red flag · ไม่ถามพยาน/ไม่ถาม postictal เสียคะแนนหัวข้อนั้น",
   pts:[H("Opening",5),P("Introduce yourself and identify the patient","แนะนำตัว","introduce","ชื่อ","name"),
    H("Before the event",35),P("Onset, activity / posture and triggers (prolonged standing, heat, pain, exertion)","onset","ยืน","ท่า","posture","กำลังทำ","trigger","กระตุ้น","ร้อน","exert","ออกแรง"),CR(P("Prodrome / aura (sweating, nausea, blurred vision, tinnitus vs flashing light, smell)","อาการนำ","prodrome","aura","เหงื่อ","คลื่นไส้","ตาลาย","ตาพร่า","หูวิ้ง","หูอื้อ","เห็นแสง","กลิ่น")),P("Palpitation / chest pain before the event","ใจสั่น","palpitat","เจ็บหน้าอก","chest pain"),
    H("During the event (witness)",30),P("Witness present? duration of unconsciousness","พยาน","witness","มีคนอยู่","duration","นานเท่า"),CR(P("Jerking / convulsion","ชัก","กระตุก","convuls","jerk","seizure")),P("Tongue biting, urinary / fecal incontinence","กัดลิ้น","tongue","ฉี่","ปัสสาวะราด","ขี้","อุจจาระราด","incontinen"),
    H("After the event",20),CR(P("Post-event confusion and memory of events before LOC","มึน","งง","สับสน","confus","postictal","จำ","memory","amnesia")),
    H("Past history",10),P("Previous episodes, underlying disease, drugs, family history of sudden death","เคยเป็น","กี่ครั้ง","previous","recurr","โรคประจำตัว","กินยา","ใช้ยา","drug","ครอบครัว","family","sudden")]}),
  B("3.2 Give your diagnosis.",2,{tags:["hx"],key:"vasovagal syncope",
   ans:"<b>Vasovagal syncope</b> (reflex / neurally mediated syncope)",
   exp:"Ddx: orthostatic hypotension, cardiac syncope (arrhythmia, structural), seizure · ตรวจเพิ่ม: orthostatic BP, 12-lead EKG ทุกราย",
   rubric:"ตอบ syncope เฉย ๆ ได้บางส่วน · ตอบ seizure ไม่ได้คะแนน",
   pts:[CR(P("Vasovagal (reflex) syncope","vasovagal","reflex syncope","neurally","neurocardiogenic"))]})
 ),
 interp:"ซักประวัติหมดสติ: แยก syncope กับ seizure จากเหตุการณ์ก่อน–ขณะ–หลัง (ถามพยาน) และคัด cardiac syncope",
 summary:["Vasovagal: ตัวกระตุ้น (ยืนนาน ร้อน เจ็บ) + prodrome (เหงื่อ คลื่นไส้ ตาลาย) + ฟื้นเร็ว ไม่สับสน","Seizure: aura, กัดลิ้นด้านข้าง, เกร็งกระตุกนาน, postictal confusion","Red flag cardiac syncope: ขณะออกแรง/นอน, ใจสั่นนำ, ไม่มี prodrome, โรคหัวใจ, FH sudden death → EKG ทุกราย"]}),

Co({page:4,orig:"4",topic:"img",sub:"Acute abdomen film",title:"70-year-old woman — acute abdomen series",imgNote:NOIMG,
 seen:"คล้าย SI132 Ro403–404 ข้อ 3 (acute abdomen series ท้องอืด bowel sound high pitch)",
 stem:`A 70-year-old woman is evaluated with an acute abdomen series.<br>a. Read the films.<br>b. Give your diagnosis.`,
 gray:"4. Xray (acute abdomen series) : หญิง 70 ปี ให้ film acute abdomen series มา · a. อ่าน film → Key **อย่าลืมเขียนชื่อ film ที่บรรยายด้วยจ้า · Film chest upright : no free air under dome of diaphragm · Film abdomen upright : stepladder pattern (different height of air-fluid level in the same loop) · Film abdomen supine : small bowel dilatation with air-fluid filled · b. Dx (ไฟล์จบตรงนี้)",
 flag:"⚠ ไม่มีรูปในไฟล์ — ถามสิ่งที่คาดว่าจะเห็น · ⚠ ไฟล์ถูกตัดท้าย: ข้อ b. Dx ไม่มีคำตอบ → Claude เฉลย Dx เอง (small bowel obstruction) จาก Key ข้อ a",
 notes:"ไฟล์พิมพ์โจทย์ตัวดำ + Key ตัวน้ำเงิน · ตัวแดง: \"**อย่าลืมเขียนชื่อ film ที่บรรยายด้วยจ้า\" · ไฟล์จบที่ \"b. Dx\" ท้ายหน้า 4 (ไม่มีหน้าถัดไป)",
 parts:S(
  B("4.1 Read the films.",6,{tags:["img"],key:"**อย่าลืมเขียนชื่อ film ที่บรรยายด้วยจ้า · Film chest upright : no free air under dome of diaphragm · Film abdomen upright : stepladder pattern (different height of air-fluid level in the same loop) · Film abdomen supine : small bowel dilatation with air-fluid filled",
   ans:"<b>Plain film chest upright</b>: no free air under the dome of diaphragm<br><b>Plain film abdomen upright</b>: multiple air-fluid levels with <b>stepladder pattern</b> (different heights of air-fluid level in the same loop)<br><b>Plain film abdomen supine</b>: <b>dilated small bowel loops</b> (centrally located, valvulae conniventes ข้ามเต็มความกว้าง, &gt; 3 cm) · paucity of colonic gas",
   exp:"ต้องเขียนชื่อฟิล์มทุกครั้งที่บรรยาย (ผู้จดย้ำ) · small bowel แยกจาก large bowel: อยู่ตรงกลาง, จำนวนมาก, valvulae conniventes ข้ามทั้งความกว้างลำไส้ vs haustra ข้ามไม่ตลอด · กฎ 3-6-9 (small bowel &gt; 3 cm, colon &gt; 6 cm, cecum &gt; 9 cm) · ตรวจ free air เสมอ เพื่อตัด perforation",
   rubric:"ได้เต็ม = ระบุชื่อฟิล์ม + ผลแต่ละฟิล์ม · ไม่เขียนชื่อฟิล์มหักคะแนน (ตามข้อเตือนผู้จด)",
   pts:[H("Chest upright",25),P("Name the film: chest upright","chest upright","upright chest","cxr","ปอด"),P("No free air under the diaphragm","no free air","free air","ไม่มีลม","under (the )?(dome|diaphragm)"),
    H("Abdomen upright",35),P("Name the film: abdomen upright","abdomen upright","upright abdomen","erect"),CR(P("Multiple air-fluid levels, stepladder pattern (different heights in the same loop)","step.?ladder","air.?fluid","different height","ระดับต่างกัน"))
    ,H("Abdomen supine",40),P("Name the film: abdomen supine","supine"),CR(P("Dilated small bowel loops (valvulae conniventes)","small bowel","dilat","valvulae","conniven","ลำไส้เล็ก","โป่ง")),P("Paucity of colonic gas","paucity","colonic gas","no gas","rectal gas","ลมในลำไส้ใหญ่")]}),
  B("4.2 Give your diagnosis.",2,{tags:["img"],key:NK,flag:"ไฟล์ถูกตัดท้าย — Key ข้อ b ไม่มี Claude เฉลยเอง",
   ans:"<b>Mechanical small bowel obstruction</b> (ไม่มี perforation) · สาเหตุในผู้สูงอายุ: adhesion (ถ้าเคยผ่าตัด), incarcerated hernia, tumor, gallstone ileus",
   exp:"Mx: NPO, NG tube decompression, IV fluid แก้ electrolyte, ตรวจ hernia ทุกช่อง, CT abdomen with contrast หาสาเหตุและ sign of strangulation → ปรึกษาศัลยแพทย์ · ทางเลือกต่าง: paralytic ileus (ลมกระจายทั้ง small + large bowel, ไม่มี transition)",
   rubric:"ตอบ intestinal obstruction ได้บางส่วน · ตอบ ileus ไม่ได้คะแนน",
   pts:[CR(P("Small bowel obstruction","small bowel obstruct","\\bsbo\\b","ลำไส้เล็กอุดตัน","bowel obstruct","intestinal obstruct")),P("Mechanical (no perforation)","mechanical","no perforat","adhesion","hernia")]})
 ),
 interp:"Acute abdomen series: เขียนชื่อฟิล์มทุกครั้ง แล้วไล่ free air → air-fluid level → ขนาด/ชนิดลำไส้ที่โป่ง",
 summary:["อ่าน AAS ครบ 3 ฟิล์ม: chest upright (free air), abdomen upright (air-fluid level), abdomen supine (bowel gas pattern)","Stepladder air-fluid levels + small bowel dilatation + paucity of colonic gas = mechanical SBO","กฎ 3-6-9: small bowel > 3 cm, colon > 6 cm, cecum > 9 cm"]})
);
})();

(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU72 RoD (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   72D: OSCE 12 สถานี (SO22 หน้า 25–26) + MEQ 13 ข้อ (SM21 หน้า 28–30) · จดเป็นหัวข้อ ส่วนใหญ่ไม่มีรูป · เฉลยโดย Claude */
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
const KF="ไม่มีไฟล์เฉลย: ";
const KH="มีคีย์ลายมือในไฟล์ (ดูรูปเฉลย) · ขยายความโดย Claude";
const KS2="มีแนวคำตอบในไฟล์ (หน้า Suggestions/Review) · ขยายความโดย Claude";
const BS=(q,m,o)=>B(q,m,Object.assign({key:KS2},o));
const BK=(q,m,o)=>B(q,m,Object.assign({key:KH},o));
const Co=o=>Object.assign({set:"MDCU72",ro:"RoD",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:26,orig:"1",topic:"suture",sub:"Vertical mattress",ex:1,proc:1,title:"Vertical mattress with surgical knot — 2 stitches",
 stem:`Place 2 vertical mattress sutures using a surgical knot. Local anesthesia is not required.`,
 gray:"1. Vertical mattress + surgical knot 2 stitch ไม่ต้องฉีดยาชา",
 notes:"ไม่มีไฟล์เฉลย · ไฟล์: ข้อสอบ 12 ข้อ ข้อละ 4 นาที มีข้อพัก 1 ข้อให้เขียนรีวิววอร์ด",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Technique.",6,{tags:["suture"],ans:"Far-far (ห่างขอบ 4–8 มม. ลึก) → near-near (1–2 มม. ตื้น) · <b>surgical knot</b> = รอบแรกพัน 2 รอบ (double throw) แล้วตามด้วย single throw สลับทิศ (square) · ขอบแผล evert ไม่รัดแน่น · ปมไว้ข้างแผล · ระยะห่างเท่ากัน",rubric:"1/ประเด็น",pts:[CR(P("Far-far","far")),CR(P("Near-near","near")),CR(P("Surgical knot: double first throw","double","surgeon","surgical knot","2 รอบ")),P("Square subsequent throws","square","สลับ"),P("Eversion without strangulation","evert","tight"),P("Knot at side, even spacing","side","spacing")]})
 ),
 interp:"Vertical mattress",
 summary:["Far-far then near-near","Surgeon's knot: double first throw","Evert edges"]}),

/* ===== OSCE 2 ===== */
Co({page:26,orig:"2",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Sterile gloving and dry dressing",
 stem:`Put on sterile gloves and perform a dry dressing of the wound.`,
 gray:"2. ใส่ถุงมือ + dry dressing (อย่าลืมแนะนำตัว!!)",
 notes:"ไม่มีไฟล์เฉลย · ไฟล์เน้น อย่าลืมแนะนำตัว",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Dry dressing.",7,{tags:["proc"],ans:"<b>แนะนำตัว</b> ถามชื่อ อธิบาย ขออนุญาต · ล้างมือ เตรียม set ทำแผล · ถอด dressing เก่า ประเมินแผล · ใส่ <b>sterile gloves</b> ถูกวิธี · <b>เช็ดแผลสะอาด (sutured wound) ด้วย NSS/antiseptic จากแผลออกด้านนอก</b> (clean to dirty, ทีละครั้ง) · ปิด <b>dry sterile gauze</b> ติด tape · ทิ้งขยะติดเชื้อ ล้างมือ แจ้งผู้ป่วย",rubric:"1/ประเด็น",pts:[CR(P("Introduce and consent","introduc","แนะนำ","consent")),P("Hand hygiene and prepare set","hand","set","ล้างมือ"),P("Remove old dressing and assess","remove","assess","ประเมิน"),CR(P("Sterile gloving correctly","glove","ถุงมือ")),CR(P("Clean from wound outward","outward","inside out","จากใน","clean")),P("Cover with dry gauze","dry gauze","gauze","ปิด"),P("Dispose and hand hygiene","dispose","ทิ้ง")]})
 ),
 interp:"Dry dressing",
 summary:["Introduce yourself","Clean wound outward, one swab one stroke","Dry sterile gauze cover"]}),

/* ===== OSCE 3 ===== */
Co({page:26,orig:"3",topic:"pe",sub:"Prostate",ex:1,proc:1,title:"Elderly man with LUTS — PR on model",
 stem:`An elderly man presents with lower urinary tract symptoms. Perform PR on the model (no examiner observes).<br>Describe the PR findings and give the most likely diagnosis.`,
 gray:"3. ผู้ป่วยชายอายุมาก มาด้วย LUTS ให้ PR prostate (ไม่มีอาจารย์คุม) ให้บรรยายผล PR ได้ + most likely diagnosis",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("3.1 PR findings.",4,{tags:["pe"],ans:"Anal tone ปกติ · rectal mucosa เลื่อนได้ · <b>prostate โต (~30–40 g) ผิวเรียบ consistency rubbery ไม่เจ็บ median sulcus ยังคลำได้</b> · ไม่มีก้อนแข็ง",rubric:"1/ประเด็น",pts:[P("Anal tone","tone"),CR(P("Size enlarged","enlarg","size","gram","โต")),CR(P("Smooth, rubbery","smooth","rubbery")),P("Median sulcus present","sulcus"),P("No hard nodule","nodul","hard")]}),
  B("3.2 Most likely diagnosis.",2,{tags:["pe"],ans:"<b>Benign prostatic hyperplasia (BPH)</b> (ถ้าแข็งเป็นปุ่ม sulcus หาย → CA prostate)",rubric:"ได้",pts:[CR(P("BPH","bph","benign prostatic"))]})
 ),
 interp:"BPH",
 summary:["BPH: smooth rubbery, sulcus present","CA: hard nodular, sulcus lost","Next: IPSS, PSA, U/S PVR"]}),

/* ===== OSCE 4 ===== */
Co({page:26,orig:"4",topic:"hx",sub:"Corrosive ingestion",title:"Write orders for corrosive ingestion",
 stem:`A patient has ingested a corrosive agent. Vital signs are given.<br>Write the treatment orders.`,
 gray:"4. เขียนคำสั่งการรักษาคนไข้ที่กิน corrosive agent มา ให้ vital sign มา",
 notes:"ไม่มีไฟล์เฉลย · ไม่ทราบ V/S ที่ให้ — เฉลยหลักการ",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("4.1 Orders.",8,{tags:["hx"],ans:"<b>ABC</b>: ประเมิน airway (stridor, hoarseness, drooling) → intubate เร็วถ้าบวม (fiberoptic, ไม่ blind) · <b>NPO</b> · <b>ห้ามกระตุ้นอาเจียน ห้ามล้างท้อง ห้ามใส่ NG แบบ blind ห้ามให้ neutralizing agent/charcoal</b> · IV fluid resuscitation ตาม V/S · <b>PPI IV</b> (omeprazole 40 mg IV) · analgesic · CXR upright + plain abdomen (free air/mediastinum) ± <b>CT chest/abdomen</b> · CBC, electrolyte, ABG, lactate · <b>EGD ภายใน 12–24 (ไม่เกิน 48) ชม.</b> เพื่อ grade injury (Zargar) · ถ้ามี perforation/peritonitis → emergency surgery · ปรึกษาจิตเวชถ้าตั้งใจ · ติดตาม stricture ระยะยาว",rubric:"1/ประเด็น",pts:[CR(P("Airway assessment / early intubation","airway","intubat","abc")),CR(P("NPO, no emesis, no lavage, no neutralization","npo","emesis","อาเจียน","lavage","neutral")),P("IV fluid","fluid","iv"),P("PPI IV","ppi","omeprazole"),P("Imaging: CXR / CT for perforation","cxr","ct","x-ray","free air"),P("Labs: CBC, ABG, electrolyte","cbc","abg","electrolyte"),CR(P("EGD within 12–24 h","egd","endoscop")),P("Surgery if perforation","perforat","surg"),P("Psychiatric consult if intentional","psych","จิตเวช")]})
 ),
 interp:"Corrosive",
 summary:["No emesis, lavage, neutralization, blind NG","EGD within 12–24 h for grading","CT for perforation; surgery if peritonitis"]}),

/* ===== OSCE 5 ===== */
Co({page:26,orig:"5",topic:"inst",sub:"Urology device",title:"DJ stent — what and what for",
 stem:`A device is shown. What is it and what is it used for?`,
 gray:"5. ให้ DJ stent มา ถามว่าคืออะไร ใช้ทำอะไร",flag:NOIMG,imgAlt:"ท่อพลาสติกยาว ปลายขดเป็นวงสองด้าน",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Name and use.",4,{tags:["inst"],ans:"<b>Double-J ureteric stent</b> — ระบาย ureter ที่อุดกั้น (นิ่ว, tumor, stricture, ตั้งครรภ์), หลัง ureteroscopy/pyeloplasty/ureteric injury · ถอดหรือเปลี่ยนภายใน 3–6 เดือน",rubric:"1/ประเด็น",pts:[CR(P("Double-J stent","double j","dj","ureteric stent","ureteral stent")),CR(P("Relieve ureteric obstruction","obstruct","drain","ระบาย")),P("Remove within 3–6 months","remove","ถอด","3")]})
 ),
 interp:"DJ stent",
 summary:["Kidney-to-bladder stent","Relieve obstruction / after URS","Do not forget to remove"]}),

/* ===== OSCE 6 ===== */
Co({page:26,orig:"6",topic:"pe",sub:"Acute abdomen",ex:1,title:"Abdominal exam — right-sided abdominal pain",
 stem:`Examine the abdomen of a patient with right-sided abdominal pain and give the diagnosis.`,
 gray:"6. ตรวจท้องคนไข้ มาด้วยปวดท้องด้านขวา พร้อมวินิจฉัย (อย่าลืม PR dx. Acute appendicitis)",
 notes:"ไฟล์: อย่าลืม PR · dx acute appendicitis",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("6.1 Examination.",7,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต จัดท่า · inspection · auscultation · <b>palpation เริ่มจากจุดไกล</b>: <b>McBurney tenderness, guarding, rebound</b> · <b>Rovsing, psoas, obturator</b> · percussion · <b>บอกว่าจะตรวจ PR</b> (tenderness ทางขวา)",rubric:"1/ประเด็น",pts:[P("Introduce and position","introduc","consent","แนะนำ"),CR(P("McBurney tenderness","mcburney")),CR(P("Guarding and rebound","guard","rebound")),P("Rovsing sign","rovsing"),P("Psoas and obturator","psoas","obturator"),CR(P("PR","pr","rectal"))]}),
  BS("6.2 Diagnosis.",2,{tags:["pe"],ans:"<b>Acute appendicitis</b>",rubric:"ได้",pts:[CR(P("Acute appendicitis","appendicitis"))]})
 ),
 interp:"Appendicitis exam",
 summary:["Start palpation away from pain","Rovsing, psoas, obturator","Don't forget PR"]}),

/* ===== OSCE 7 ===== */
Co({page:26,orig:"7",topic:"img",sub:"Mammogram",title:"Mammogram and breast ultrasound",
 stem:`A mammogram and a breast ultrasound are shown.<br>1. What investigation is each picture and which view?<br>2. Describe the lesion.<br>3. Give the diagnosis.<br>4. What further investigation will you send?`,
 gray:"7. ให้ Mammogram กับ ultrasound นมมา ถามว่าภาพนี้คือการตรวจชื่ออะไร + view ไหน ให้บรรยายรอยโรค, diag, ส่ง investigation อะไรเพิ่ม",
 flag:NOIMG,imgAlt:"Mammogram CC/MLO + US เต้านม มีก้อนขอบไม่เรียบ",
 notes:"ไม่มีไฟล์เฉลย · ไม่มีรูป — เฉลยตัวอย่างก้อนสงสัยมะเร็ง",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("7.1 Answer.",8,{tags:["img"],ans:"<b>Mammogram</b> — <b>CC และ MLO</b> view · <b>Breast ultrasound</b> · Lesion: ตำแหน่ง ขนาด <b>irregular/spiculated hyperdense mass</b> ± microcalcification · US: <b>hypoechoic, irregular, taller-than-wide, posterior shadowing</b> · Dx: <b>suspicious for carcinoma of breast (BI-RADS 4–5)</b> · Ix: <b>US-guided core needle biopsy</b> + axillary US (FNA node ถ้าโต) · ยืนยันแล้ว staging",rubric:"1/ประเด็น",pts:[CR(P("Mammogram CC and MLO","cc","mlo")),P("Breast ultrasound","ultrasound","us"),CR(P("Describe mass features","spicul","irregular","hypoecho","taller")),P("BI-RADS","bi-rads","birads"),CR(P("Carcinoma of breast","carcinoma","cancer","มะเร็ง")),CR(P("Core needle biopsy","core","biopsy"))]})
 ),
 interp:"MMG + US",
 summary:["MMG views: CC + MLO","Malignant US: irregular, taller-than-wide, shadowing","Core biopsy"]}),

/* ===== OSCE 8 ===== */
Co({page:26,orig:"8",topic:"hx",sub:"Breast",ex:1,title:"History — right breast complaint",
 stem:`A simulated patient presents with a complaint in the right breast (pain/lump). Take a history and state what investigations you will send.`,
 gray:"8. ให้ซักประวัติคนไข้ มาด้วยเจ็บ...เต้านมขวา และจะส่งตรวจอะไรเพิ่มเติม (ข้อความในไฟล์อ่านไม่ออกบางส่วน)",
 notes:"ไม่มีไฟล์เฉลย · ข้อความในไฟล์เสียบางส่วน (เจ็บ/ก้อนที่เต้านมขวา) · ตรวจคีย์ 22 พ.ย. 2026: เดิม ‘อายุ &lt;30–35 ปี → US · ≥35–40 ปี → mammogram + US’ (ข้อ 8.2) → แก้จุดตัดอายุเป็น 30 ปี ตาม NCCN Breast Cancer Screening and Diagnosis (palpable mass: อายุ &lt;30 ปี US; ≥30 ปี diagnostic mammogram + US) และ ACR Appropriateness Criteria Palpable Breast Masses 2022 (30–39 ปี US หรือ mammogram/DBT; ≥40 ปี mammogram/DBT + US)",opinion:"ความมั่นใจปานกลาง · ตรวจคีย์ (22 พ.ย. 2026): จุดตัดอายุสำหรับ imaging ก้อนเต้านม = 30 ปี (NCCN): &lt;30 → US · ≥30 → diagnostic mammogram + US · ความมั่นใจสูง",
 parts:S(
  B("8.1 History.",7,{tags:["hx"],ans:"อาการหลัก: ปวด (cyclical vs non-cyclical), ก้อน (ขนาด โต), <b>nipple discharge</b>, ผิวแดง/บวม (mastitis), ไข้ · ให้นมบุตร · ประจำเดือน LMP, menarche, menopause · <b>ยาคุม/HRT</b> · ประวัติครอบครัวมะเร็งเต้านม/รังไข่ · ประวัติก้อนหรือ biopsy เดิม · อาการ metastasis",rubric:"1/ประเด็น",pts:[CR(P("Pain characteristics and cyclicity","cycl","pain","ปวด")),CR(P("Lump","lump","ก้อน")),P("Nipple discharge","discharge","nipple"),P("Redness, fever, lactation","fever","red","lactat","ให้นม"),P("Menstrual and hormonal history","lmp","menarche","hormone","ยาคุม"),CR(P("Family history","family","ครอบครัว"))]}),
  B("8.2 Investigations.",3,{tags:["hx"],ans:"<b>อายุ &lt;30 ปี → ultrasound</b> (± mammogram ถ้า US สงสัย) · <b>≥30 ปี → diagnostic mammogram + ultrasound</b> (NCCN; ACR 2022: 30–39 ปี US หรือ mammogram/DBT, ≥40 ปี mammogram/DBT + US) · ก้อนสงสัย → <b>core needle biopsy</b> (triple assessment) · mastitis/abscess → US ± aspiration + culture",rubric:"1/ประเด็น",pts:[CR(P("Ultrasound","ultrasound","us")),CR(P("Mammogram by age","mammogra")),P("Biopsy / triple assessment","biopsy","triple")]})
 ),
 interp:"Hx breast",
 summary:["Triple assessment","<35 US, ≥35–40 MMG + US","Ask hormonal and family history"]}),

/* ===== OSCE 9 ===== */
Co({page:26,orig:"9",topic:"inst",sub:"Suture materials",title:"Choose sutures — muscle, vessel ligation, skin",
 stem:`Suture packets are laid out. Answer mono/polyfilament and absorbable/non-absorbable for each choice.<br>1. Which suture for muscle?<br>2. Which for ligating a vessel?<br>3. Which for skin?`,
 gray:"9. ไหม ให้ซองมาวางเรียง (ถาม mono/polyfilament, absorb/non-absorb) 1. อะไรเย็บ muscle 2. อะไรผูกเส้นเลือด 3. อะไรเย็บผิวหนัง",
 flag:NOIMG,imgAlt:"ซองไหมวางเรียง 4 ซอง เห็นชื่อยี่ห้อ: VICRYL (ไหมม่วงถักเกลียว) · MERSILK (ไหมดำถักเกลียว) · PROLENE (ไหมน้ำเงินเส้นเดี่ยว) · ETHILON (ไหมดำเส้นเดี่ยวผิวเรียบ)",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("9.1 Muscle.",2,{tags:["inst"],ans:"<b>Vicryl (polyglactin 910)</b> — polyfilament (braided), absorbable",rubric:"1/ประเด็น",pts:[CR(P("Vicryl","vicryl","polyglactin")),P("Braided absorbable","braid","poly","absorb")]}),
  B("9.2 Vessel ligation.",2,{tags:["inst"],ans:"<b>Silk</b> (non-absorbable, polyfilament) หรือ <b>Vicryl</b> · (anastomosis หลอดเลือด = Prolene monofilament non-absorbable)",rubric:"1/ประเด็น",pts:[CR(P("Silk or Vicryl","silk","vicryl")),P("Prolene for vascular anastomosis","prolene")]}),
  B("9.3 Skin.",2,{tags:["inst"],ans:"<b>Nylon (Ethilon/Dafilon)</b> — monofilament, non-absorbable · (subcuticular: Monocryl monofilament absorbable)",rubric:"1/ประเด็น",pts:[CR(P("Nylon","nylon","ethilon","dafilon")),P("Monofilament non-absorbable","monofilament","non-absorb")]})
 ),
 interp:"Suture choice",
 summary:["Muscle: Vicryl","Ligation: silk/Vicryl","Skin: nylon"]}),

/* ===== OSCE 10 ===== */
Co({page:26,orig:"10",topic:"inst",sub:"Surgical instruments",title:"Instruments — Allis, Deaver, JP drain, scissors, ostomy bag",
 stem:`Name each item and its use: Allis tissue forceps, Deaver retractor, Jackson-Pratt drain (tube only), curved Mayo or Metzenbaum scissors, ostomy bag.`,
 gray:"10. ถามเครื่องมือ + ใช้ทำอะไร (เครื่องมือที่เจอ: allis tissue forceps, deaver retractor, Jackson-Pratt ให้มาแค่สาย, curved mayo หรือ metzenbaum ไม่แน่ใจ, ostomy bag)",
 flag:NOIMG,imgAlt:"Allis forceps, Deaver retractor, สาย JP drain, กรรไกรโค้ง, ถุง ostomy",
 notes:"ไม่มีไฟล์เฉลย · ชื่ออุปกรณ์มาจากไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("10.1 Uses.",5,{tags:["inst"],ans:"<b>Allis</b> — จับเนื้อเยื่อ/fascia ที่จะตัดออก (มีฟัน traumatic) · <b>Deaver retractor</b> — retractor ใหญ่โค้งรูปตัว ? ดึงรั้งอวัยวะในช่องท้องลึก (ตับ, ลำไส้) · <b>Jackson-Pratt drain</b> — closed suction drain ปลาย fenestrated ต่อ bulb · <b>Curved Mayo</b> ตัดเนื้อเยื่อหนา/<b>Metzenbaum</b> ตัดเนื้อเยื่อบาง dissect · <b>Ostomy bag</b> — รองรับอุจจาระ/ปัสสาวะจาก stoma (colostomy, ileostomy, urostomy)",rubric:"1/ชิ้น",pts:[P("Allis — grasp tissue to be removed","allis"),CR(P("Deaver — deep abdominal retraction","deaver")),CR(P("JP — closed suction drain","jackson","jp","closed suction")),P("Mayo/Metzenbaum scissors","mayo","metzenbaum"),P("Ostomy bag — collect stoma output","ostomy","stoma")]})
 ),
 interp:"Instruments",
 summary:["Deaver = deep abdominal retractor","JP = closed suction drain","Metzenbaum = delicate dissection"]}),

/* ===== OSCE 11 ===== */
Co({page:26,orig:"11",topic:"img",sub:"Hepatobiliary",title:"Ultrasound — gallbladder stone",
 stem:`An ultrasound of the gallbladder is shown.<br>1. What investigation is this?<br>2. Describe the picture.<br>3. Identify A and B.<br>4. Give the diagnosis and treatment.`,
 gray:"11. ให้รูป US gallbladder stone ถามชื่อการตรวจ, บรรยายภาพ, ที่ชี้ในรูปคืออะไร A,B, diag, treatment",
 flag:NOIMG,imgAlt:"US ถุงน้ำดี มีก้อน hyperechoic ในถุง (A) และเงาดำด้านหลัง (B)",
 notes:"ไม่มีไฟล์เฉลย · ไม่มีรูป — A/B ตีความว่า stone และ acoustic shadow · ตรวจคีย์ 22 พ.ย. 2026: เดิม ‘ผนังหนา >3 มม.’ → แก้เป็น ‘≥4 มม.’ (ข้อ 11.1) ตาม Tokyo Guidelines 2018 (TG18, Yokoe et al. JHBPS 2018 CQ5: GB wall thickening ≥4 mm; TG13 ใช้ ≥5 mm)",opinion:"ความมั่นใจปานกลาง · ตรวจคีย์ (22 พ.ย. 2026): เกณฑ์ผนังถุงน้ำดีหนาใน US ใช้ ≥4 mm ตาม TG18 (TG13 ใช้ ≥5 mm) — ถ้าเขียนตัวเลขให้ระบุชื่อแนวทาง · ความมั่นใจสูง",
 parts:S(
  B("11.1 Answer.",7,{tags:["img"],ans:"<b>Ultrasound of the upper abdomen (gallbladder)</b> · <b>hyperechoic foci ในถุงน้ำดี ที่เคลื่อนตามท่า (mobile)</b> มี <b>posterior acoustic shadowing</b> · A = <b>gallstone</b>, B = <b>acoustic shadow</b> · (ถ้า acute cholecystitis: ผนังหนา ≥4 มม. (TG18; TG13 ≥5 มม.), pericholecystic fluid, sonographic Murphy) · Dx: <b>cholelithiasis</b> · Rx: symptomatic → <b>laparoscopic cholecystectomy</b>; asymptomatic → observe (ยกเว้นกลุ่มเสี่ยง)",rubric:"1/ประเด็น",pts:[CR(P("Ultrasound","ultrasound","us")),CR(P("Hyperechoic mobile foci with shadow","hyperecho","shadow")),P("A stone, B acoustic shadow","stone","shadow"),CR(P("Cholelithiasis","cholelith","gallstone")),CR(P("Laparoscopic cholecystectomy if symptomatic","cholecystectomy")),P("Asymptomatic: observe","asymptom","observe")]})
 ),
 interp:"Gallstone US",
 summary:["Mobile echogenic focus + posterior shadow","Symptomatic → lap chole","Cholecystitis: wall ≥4 mm (TG18), fluid, Murphy"]}),

/* ===== OSCE 12 ===== */
Co({page:26,orig:"12",topic:"spot",sub:"Uro/Genital",title:"Paraphimosis",
 stem:`A picture of paraphimosis is shown. Give the diagnosis and management.`,
 gray:"12. ให้รูป paraphimosis มา ถาม diag, management",flag:NOIMG,imgAlt:"องคชาตเด็ก: หนังหุ้มปลายร่นค้างอยู่หลัง glans เป็นวงรัดแน่น glans และหนังส่วนที่อยู่ปลายวงรัดบวมเป่งแดงคล้ำ ดึงหนังกลับมาคลุมไม่ได้",
 notes:"ไม่มีไฟล์เฉลย · ไฟล์ระบุคำตอบ paraphimosis",opinion:"ความมั่นใจสูง",
 parts:S(
  B("12.1 Diagnosis and management.",5,{tags:["spot"],ans:"<b>Paraphimosis</b> · analgesia/penile block · ลดบวม (compress, ice, sugar, puncture) · <b>manual reduction</b> · ล้มเหลว → <b>dorsal slit</b> · ต่อมา <b>circumcision</b>",rubric:"1/ประเด็น",pts:[CR(P("Paraphimosis","paraphimosis")),P("Analgesia","block","analges"),CR(P("Manual reduction","manual","reduc")),CR(P("Dorsal slit","dorsal slit")),P("Circumcision","circumcis")]})
 ),
 interp:"Paraphimosis",
 summary:["Reduce → dorsal slit → circumcision"]}),

/* ===== MEQ ===== */
SA({page:29,orig:"MEQ 1",num:"SA 1",sub:"Anorectal",flag:NOIMG,imgAlt:"ข้างรูทวารตำแหน่ง 5 นาฬิกา มีก้อนบวมนูนแดง ผิวตึงมัน ขนาด ~3 cm กดเจ็บมาก ตรงกลางคลำได้หยุ่นเป็นน้ำ (fluctuation) ยังไม่มีหนองไหลออก",title:"Short answer — perianal abscess",
 stem:`A picture of a perianal abscess is shown. What is the diagnosis and treatment?`,
 gray:"1. ให้รูป Perianal abscess + treatment",
 notes:"ไม่มีเฉลยในไฟล์ · ไฟล์บอกว่าเป็น perianal abscess",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Diagnosis and treatment.",4,{tags:["spot"],ans:"<b>Perianal abscess</b> · <b>Incision and drainage</b> (cruciate/elliptical incision ใกล้ anal verge เพื่อให้ fistula สั้น) · antibiotic เฉพาะ cellulitis กว้าง, DM, immunocompromised, valvular disease · sitz bath · แจ้งว่าอาจกลายเป็น fistula-in-ano (~30–50%)",rubric:"1/ประเด็น",pts:[CR(P("Perianal abscess","perianal abscess","abscess")),CR(P("Incision and drainage","incision","i&d","drain")),P("Antibiotics only if indicated","antibiot"),P("Risk of fistula","fistula")]})
 ),
 interp:"Perianal abscess",
 summary:["Treatment is I&D","Incise close to anal verge","Up to 1/3–1/2 develop fistula"]}),

SA({page:29,orig:"MEQ 2",num:"SA 2",sub:"Others",flag:NOIMG,imgAlt:"แผลผ่าตัดหน้าท้องที่มี retention suture พาดผ่าน และท่อ Penrose drain",title:"Short answer — Penrose drain and retention suture",
 stem:`Pictures of a Penrose drain and retention sutures are shown. What is each used for?`,
 gray:"2. ให้รูป penrose drain กับ retention suture*** (เหมือนในรูปแต่เป็นสีแดง) ถามว่าใช้ทำอะไร (รูปในไฟล์เป็นภาพแคปจากโซเชียล — ไม่ได้นำมาลง)",
 notes:"ไม่มีเฉลยในไฟล์ · รูปในไฟล์เป็นภาพแคปโพสต์โซเชียล จึงไม่นำมาใส่",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Uses.",4,{tags:["spot"],ans:"<b>Penrose drain</b> — passive (open) drain ระบายของเหลว/หนอง/เลือดจากโพรงหรือแผลตื้นด้วย capillary action และแรงโน้มถ่วง · <b>Retention (tension) suture</b> — เย็บ full-thickness ผ่านทุกชั้นของผนังหน้าท้อง (มีท่อ/bolster กันบาด) เพื่อ<b>ลดแรงตึงและป้องกัน wound dehiscence/burst abdomen</b> ในผู้ป่วยเสี่ยง (malnutrition, steroid, re-closure, มะเร็ง, ไอมาก)",rubric:"1/ประเด็น",pts:[CR(P("Penrose — passive drainage","penrose","passive")),CR(P("Retention suture — prevent dehiscence","dehiscence","burst","retention")),P("Full-thickness, reduce tension","full","tension","แรงตึง")]})
 ),
 interp:"Penrose + retention suture",
 summary:["Penrose = passive drain","Retention suture prevents dehiscence","Use in high-risk abdominal closure"]}),

SA({page:29,orig:"MEQ 3",num:"SA 3",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"เด็กเล็ก 2 รูป: (1) สะดือนูนเป็นก้อนกลมนุ่มขนาด ~1.5 cm โป่งมากขึ้นเวลาร้องไห้ กดกลับเข้าได้ คลำได้ขอบรูที่ผนังหน้าท้อง (2) ขาหนีบขวามีก้อนนุ่มยาวลงไปถึงถุงอัณฑะ โตเวลาเบ่ง/ร้อง ยุบได้เมื่อนอนนิ่ง ส่องไฟไม่สว่าง คลำขอบบนของก้อนไม่ได้",title:"Short answer — umbilical hernia and indirect inguinal hernia in a child",
 stem:`A child has umbilical hernia and indirect inguinal hernia. Give the diagnosis and management.`,
 gray:"3. ให้รูปเด็ก umbilical hernia + indirect inguinal hernia ถาม diag, management",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Management.",5,{tags:["spot"],ans:"<b>Umbilical hernia</b>: ส่วนใหญ่ปิดเอง → <b>observe ถึง 4–5 ปี</b>; ผ่าตัดถ้าไม่ปิด, defect >1.5–2 ซม., incarceration · <b>Indirect inguinal hernia</b>: <b>ไม่ปิดเอง → elective herniotomy (high ligation of sac) โดยเร็วหลังวินิจฉัย</b> (เสี่ยง incarceration สูงในทารก) · ถ้า incarcerated → manual reduction แล้วผ่าตัดใน 24–48 ชม.",rubric:"1/ประเด็น",pts:[CR(P("Umbilical: observe to 4–5 years","observe","4","5")),P("Umbilical surgery indications","large","incarcer","1.5"),CR(P("Inguinal: herniotomy soon","herniotomy","high ligation")),P("Do not wait for inguinal hernia","early","เร็ว","soon")]})
 ),
 interp:"Pediatric hernias",
 summary:["Umbilical: wait to 4–5 years","Inguinal: herniotomy soon after diagnosis","No mesh in children"]}),

SA({page:29,orig:"MEQ 4",num:"SA 4",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"รูป 1: ทารกแรกเกิดชาย บริเวณที่ควรเป็นรูทวารเป็นผิวเรียบ ไม่มีรู ไม่มีขี้เทาออกที่ perineum · รูป 2: ฟิล์มท่าคว่ำยกก้น ถ่ายด้านข้างตอนอายุ 24 ชม. วางเหรียญโลหะไว้ที่ตำแหน่งทวาร ลมในปลาย rectum อยู่สูง ห่างจากเหรียญประมาณ 2 cm",title:"Short answer — neonate without anal opening",
 stem:`A newborn has no anal opening. A prone cross-table lateral film is shown.<br>Name the film, give the diagnosis and management.`,
 gray:"4. ให้รูปเด็กไม่มีรูก้น กับรูป film prone lateral cross table ถามชื่อ film, diag, management",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Answer.",5,{tags:["spot"],ans:"<b>Prone cross-table lateral X-ray</b> (ถ่ายหลังอายุ ≥24 ชม.) · Dx: <b>anorectal malformation (imperforate anus)</b> · วัดระยะ rectal gas ถึงผิวหนัง: <b><1 ซม. → low → anoplasty (PSARP แบบจำกัด)</b>; <b>>1 ซม. → high → colostomy ก่อน แล้ว PSARP แล้วปิด colostomy</b> · หา VACTERL",rubric:"1/ประเด็น",pts:[CR(P("Prone cross-table lateral film","cross-table","cross table","prone")),CR(P("Anorectal malformation","anorectal","imperforate")),P("Measure gas-skin distance 1 cm","1 cm","distance","ระยะ"),CR(P("Low: anoplasty; high: colostomy then PSARP","colostomy","psarp","anoplasty")),P("VACTERL","vacterl")]})
 ),
 interp:"ARM film",
 summary:["Cross-table lateral after 24 h","<1 cm low → anoplasty","≥1 cm high → colostomy → PSARP"]}),

SA({page:29,orig:"MEQ 5",num:"SA 5",sub:"Plastic",flag:NOIMG,imgAlt:"ฟิล์มใบหน้าหลาย view (panoramic และ Towne view): เห็นแนวกระดูกหักผ่านมุมขากรรไกรล่างข้างขวา ปลายกระดูกเคลื่อนเล็กน้อย ฟันบนล่างสบกันไม่พอดี ฝั่งซ้ายปกติ",title:"Short answer — trauma with jaw films",
 stem:`An accident victim has several views of facial films. Give the diagnosis and management.`,
 gray:"5. คนประสบอุบัติเหตุ ให้รูป film มาหลายๆ view ถาม diag, management (น่าจะ Rt. mandibular fracture, ทำ ORIF)",
 notes:"แนวคำตอบในไฟล์: น่าจะ Rt. mandibular fracture, ทำ ORIF",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("5.1 Diagnosis and management.",5,{tags:["spot"],ans:"<b>Right mandibular fracture</b> (ดู panoramic/Towne view) · ATLS: airway (bilateral parasymphyseal fracture → tongue ตกปิด airway) · ยาแก้ปวด antibiotic (open fracture เข้าช่องปาก) tetanus · <b>ORIF (miniplate)</b> หรือ <b>maxillomandibular fixation (MMF)</b> เพื่อคืน <b>occlusion</b>",rubric:"1/ประเด็น",pts:[CR(P("Mandibular fracture","mandib")),P("Airway first","airway","atls"),P("Antibiotic for open fracture","antibiot"),CR(P("ORIF or MMF","orif","mmf","fixation")),P("Restore occlusion","occlusion","การสบฟัน")]})
 ),
 interp:"Mandible fracture",
 summary:["Airway risk in bilateral parasymphyseal","Open into mouth → antibiotics","ORIF/MMF to restore occlusion"]}),

SA({page:29,orig:"MEQ 6",num:"SA 6",sub:"Plastic",flag:NOIMG,imgAlt:"ฝ่าเท้าผู้ใหญ่ มีไฝสีดำปนน้ำตาลหลายเฉด ขนาด ~2.5 cm ไม่สมมาตร ขอบขรุขระไม่ชัด มีส่วนนูนเป็นตุ่มตรงกลาง",title:"Short answer — pigmented lesion on the foot",
 stem:`A patient has had a pigmented lesion on the foot for some months (likely malignant melanoma). What is the management?`,
 gray:"6. ผู้ป่วยมีไฝที่เท้ามา x เดือน ให้รูปมา (น่าจะ malignant melanoma) ถาม management",
 notes:"แนวคำตอบในไฟล์: น่าจะ malignant melanoma",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("6.1 Management.",6,{tags:["spot"],ans:"<b>Excisional biopsy</b> margin 1–3 มม. (ไม่ shave) หรือ incisional/punch ถ้าใหญ่ (acral lentiginous melanoma พบบ่อยในคนเอเชีย) → ดู <b>Breslow thickness</b> · <b>Wide local excision</b> ตามความหนา: in situ 0.5–1 ซม., ≤1 มม. 1 ซม., 1–2 มม. 1–2 ซม., >2 มม. 2 ซม. · <b>Sentinel lymph node biopsy</b> ถ้า ≥0.8 มม. หรือมี ulceration · คลำ inguinal node, staging (CT/PET ใน stage สูง) · adjuvant immunotherapy (anti-PD-1) ใน stage III",rubric:"1/ประเด็น",pts:[CR(P("Excisional biopsy","excisional","biopsy")),CR(P("Breslow thickness","breslow","thickness")),CR(P("Wide local excision with margins","wide","margin","wle")),P("Sentinel node biopsy","sentinel","slnb"),P("Staging","staging","ct","pet"),P("Adjuvant immunotherapy","immuno","pd-1","adjuvant")]})
 ),
 interp:"Melanoma",
 summary:["Excisional biopsy first","WLE margin by Breslow","SLNB if ≥0.8 mm or ulcerated"]}),

SA({page:29,orig:"MEQ 7",num:"SA 7",sub:"Plastic",img:["mm29_7"],title:"Short answer — soft mass on the back",
 stem:`A patient has had a soft mass on the back for 3 months.<br>1. What is the diagnosis?<br>2. What are the indications for surgery?<br>3. Name the operation.`,
 gray:"7. ผู้ป่วยมาด้วยก้อนนิ่มที่หลัง มา 3 เดือน ถาม diag, indication ในการผ่าตัด, ชื่อการผ่าตัด",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("7.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Lipoma</b> (ก้อนนิ่ม lobulated, slip sign, ไม่ติดผิวหนัง)",rubric:"ได้",pts:[CR(P("Lipoma","lipoma"))]}),
  B("7.2 Indications for surgery.",3,{tags:["spot"],ans:"<b>Cosmetic</b>/ผู้ป่วยต้องการ · <b>มีอาการ</b> ปวด กดเบียด · <b>โตเร็ว, ใหญ่ >5 ซม., อยู่ลึก (subfascial), แข็ง/ติดแน่น</b> → สงสัย liposarcoma (ต้อง MRI + core biopsy ก่อน)",rubric:"1/ประเด็น",pts:[P("Cosmetic","cosmetic","ความงาม"),P("Symptomatic","pain","symptom","ปวด"),CR(P("Suspicious features: rapid growth, >5 cm, deep","5 cm","rapid","deep","liposarcoma","โตเร็ว"))]}),
  B("7.3 Operation.",1,{tags:["spot"],ans:"<b>Excision of lipoma</b> (enucleation/marginal excision)",rubric:"ได้",pts:[CR(P("Excision","excision","enucleat"))]})
 ),
 interp:"Lipoma",
 summary:["Soft, lobulated, slip sign","Suspicious: >5 cm, deep, rapid growth → MRI + biopsy","Excision"]}),

SA({page:29,orig:"MEQ 8",num:"SA 8",sub:"Others",flag:NOIMG,imgAlt:"เท้าผู้ป่วยเบาหวาน: นิ้วเท้าที่ 2 ดำแห้งแข็งเหี่ยว มีเส้นแบ่งเขตชัดกับผิวปกติ ไม่มีหนองหรือกลิ่น · ผิวเท้ามันวาว ขนร่วง เล็บหนา เท้าเย็นซีด",title:"Short answer — black dry toe in a diabetic",
 stem:`A diabetic patient has a dry black toe.<br>1. Give the differential diagnosis.<br>2. What investigations will you send?`,
 gray:"8. ให้รูปคนเป็น DM นิ้วเท้าดำๆ แห้งๆ มา ถาม differential diag, ส่งตรวจอะไรเพิ่ม",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("8.1 Differential diagnosis.",2,{tags:["spot"],ans:"<b>Dry gangrene from peripheral arterial disease</b> (diabetic ischemic foot) · embolic occlusion (AF) · Buerger disease · (wet gangrene ถ้าติดเชื้อ)",rubric:"1/ประเด็น",pts:[CR(P("Dry gangrene from PAD","gangren","pad","ischem")),P("Embolism or Buerger","embol","buerger")]}),
  B("8.2 Investigations.",4,{tags:["spot"],ans:"<b>ABI / toe-brachial index</b> · <b>Duplex ultrasound</b> · <b>CTA</b> หรือ angiogram เพื่อวางแผน revascularization · CBC, FBS/HbA1c, Cr, ESR/CRP · <b>X-ray foot</b> (osteomyelitis, gas) · ECG (AF)",rubric:"1/ประเด็น",pts:[CR(P("ABI or TBI","abi","tbi","index")),P("Duplex","duplex","doppler"),CR(P("CTA or angiography","cta","angiogra")),P("HbA1c, CBC, Cr","hba1c","fbs","cbc","creat"),P("Foot X-ray","x-ray","film","osteomyel")]})
 ),
 interp:"Diabetic gangrene",
 summary:["ABI (may be falsely high) → TBI","Duplex → CTA for revascularization","X-ray foot for osteomyelitis"]}),

SA({page:29,orig:"MEQ 9",num:"SA 9",sub:"Neuro",flag:NOIMG,imgAlt:"ไม่มีรูป — สถานการณ์ head injury",title:"Short answer — head injury scenario: GCS, signs, CT",
 stem:`A head injury scenario is given (2 parts, long and changing quickly).<br>1. Calculate the GCS.<br>2. What signs may be found?<br>3. What would the CT show?`,
 gray:"9. ให้สถานการณ์มา แล้วให้ประเมิน GCS score (มีสองรอบ+โจทย์ยาวๆ เปลี่ยนหน้าเร็วมาก) ถามว่าเจอ sign อะไรได้บ้าง, ถ้า CT น่าจะเจออะไร",
 notes:"ไม่มีเฉลยในไฟล์ · ไม่มีรายละเอียดเคส — เฉลยตามแบบ epidural hematoma (lucid interval)",opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไม่มีเฉลยในไฟล์และไม่ทราบรายละเอียดเคส — ยืนยันจากแหล่งอ้างอิงไม่ได้ว่าเป็นโรคใด คงตัวอย่าง epidural hematoma (lucid interval, ipsilateral dilated pupil, contralateral hemiparesis, biconvex hyperdensity ไม่ข้าม suture) · การคิด GCS และ sign ตาม ATLS 10th · ความมั่นใจต่ำ",
 parts:S(
  B("9.1 GCS.",2,{tags:["spot"],ans:"<b>E (1–4) + V (1–5) + M (1–6)</b> = 3–15 · ใส่ T ถ้า intubated · มีสองรอบ → GCS ลดลง ≥2 = deterioration",rubric:"1/ประเด็น",pts:[CR(P("E+V+M components","eye","verbal","motor","e","v","m")),P("Drop ≥2 = deterioration","drop","ลดลง")]}),
  B("9.2 Signs.",2,{tags:["spot"],ans:"<b>Lucid interval</b> แล้วซึมลง · <b>ipsilateral dilated pupil</b> (CN III) · contralateral hemiparesis · <b>Cushing triad</b> (hypertension, bradycardia, irregular breathing) · signs ของ skull base fracture (raccoon eyes, Battle sign, CSF leak)",rubric:"1/ประเด็น",pts:[P("Lucid interval","lucid"),CR(P("Dilated pupil / herniation","pupil","anisocoria","herniat")),P("Hemiparesis","hemipar","weakness"),P("Cushing triad","cushing","bradycard")]}),
  B("9.3 CT finding.",2,{tags:["spot"],ans:"<b>Epidural hematoma</b> — <b>biconvex (lentiform) hyperdensity</b> ไม่ข้าม suture line ± skull fracture (middle meningeal artery) · (subdural = crescent ข้าม suture)",rubric:"1/ประเด็น",pts:[CR(P("Epidural hematoma, biconvex","epidural","biconvex","lentiform")),P("Subdural crescent as contrast","subdural","crescent")]})
 ),
 interp:"Head injury",
 summary:["GCS = E4 V5 M6","EDH: lucid interval, biconvex, does not cross sutures","Blown pupil = uncal herniation"]}),

SA({page:29,orig:"MEQ 10",num:"SA 10",sub:"Breast",flag:NOIMG,imgAlt:"ผิวเต้านมบวมเป็นรูขุมขนแบบเปลือกส้ม",title:"Short answer — peau d'orange",
 stem:`A picture of a breast with peau d'orange is shown.<br>1. Describe it.<br>2. Give the diagnosis.<br>3. What further investigations will you send?`,
 gray:"10. ให้รูปนมมา มี peau de orange มั้ง ให้บรรยาย, diag, ส่งตรวจอะไรเพิ่ม, ถามอะไรไม่รู้อีกข้อ",
 notes:"ไม่มีเฉลยในไฟล์ · คำถามอีก 1 ข้อผู้เขียนจำไม่ได้",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("10.1 Description and diagnosis.",3,{tags:["spot"],ans:"<b>Peau d'orange</b> — ผิวบวมเห็นรูขุมขนบุ๋ม จาก <b>dermal lymphatic obstruction</b> (edema) ± erythema, nipple retraction · Dx: <b>locally advanced breast cancer (T4b) / inflammatory breast cancer (T4d)</b> ถ้าแดง >1/3 ของเต้านม เกิดเร็ว",rubric:"1/ประเด็น",pts:[CR(P("Peau d'orange","peau","orange","เปลือกส้ม")),P("Dermal lymphatic obstruction","lymphatic","edema"),CR(P("Locally advanced or inflammatory breast cancer","inflammatory","locally advanced","t4","carcinoma"))]}),
  B("10.2 Investigations.",3,{tags:["spot"],ans:"<b>Mammogram + ultrasound</b> · <b>core needle biopsy</b> (ER/PR/HER2) ± <b>skin punch biopsy</b> (dermal lymphatic invasion) · <b>staging</b>: CXR/CT chest-abdomen, bone scan หรือ PET-CT · → neoadjuvant systemic therapy → modified radical mastectomy → radiation",rubric:"1/ประเด็น",pts:[P("Mammogram and US","mammogra","ultrasound"),CR(P("Core biopsy with receptors","core","biopsy","er","her2")),CR(P("Staging scans","staging","ct","bone scan","pet")),P("Neoadjuvant then MRM","neoadjuvant","mrm","mastectomy")]})
 ),
 interp:"Peau d'orange",
 summary:["Dermal lymphatic obstruction","T4b/T4d","Biopsy + full staging → neoadjuvant first"]}),

SA({page:29,orig:"MEQ 11",num:"SA 11",sub:"Others",flag:NOIMG,imgAlt:"นิ้วเท้าหัวแม่เท้า: ผิวพับข้างเล็บบวมแดงร้อน กดเจ็บมาก มีหนองสีเหลืองใต้ผิวข้างเล็บ เล็บด้านนั้นงุ้มจิกเข้าเนื้อ",title:"Short answer — paronychia",
 stem:`A picture of paronychia is shown (same as before). Give the diagnosis, cause and management.`,
 gray:"11. Paronychia เหมือนเดิม",
 notes:"ไม่มีเฉลยในไฟล์ · ไฟล์ระบุว่าเป็น paronychia เหมือนปีก่อน",opinion:"ความมั่นใจสูง",
 parts:S(
  B("11.1 Answer.",4,{tags:["spot"],ans:"<b>Acute paronychia</b> · สาเหตุ: <b>ingrown nail</b>/บาดเจ็บรอบเล็บ + <b>S. aureus</b> · Rx: warm soak, <b>dicloxacillin 500 mg qid 7 วัน</b> · มีหนอง → <b>I&D</b> · ingrown → wedge resection",rubric:"1/ประเด็น",pts:[CR(P("Paronychia","paronychia")),P("S. aureus / ingrown","staph","ingrown"),CR(P("Antibiotic","dicloxa","cephalexin","antibiot")),CR(P("I&D if pus","incision","drain","i&d"))]})
 ),
 interp:"Paronychia",
 summary:["Soak + antibiotic","I&D if abscess","Wedge resection for ingrown nail"]}),

SA({page:29,orig:"MEQ 12",num:"SA 12",sub:"Others",flag:NOIMG,title:"Short answer — upper GI bleeding twice before arrival",
 stem:`A patient had 2 episodes of upper GI bleeding before arriving at hospital.<br>1. Name 3 further history items you will ask.<br>2. What is the management?`,
 gray:"12. UGIB มา 2 รอบก่อนมารพ. จะซักประวัติอะไรเพิ่ม 3 อย่าง, management",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("12.1 Three history items.",3,{tags:["spot"],ans:"<b>NSAIDs/aspirin/antiplatelet/anticoagulant</b> · <b>แอลกอฮอล์, ตับแข็ง/HBV-HCV</b> (variceal) · ประวัติ <b>peptic ulcer/H. pylori</b>, ปวดท้องใต้ลิ้นปี่ · อาเจียนรุนแรงก่อนมีเลือด (Mallory-Weiss) · น้ำหนักลด กลืนลำบาก (มะเร็ง) · ปริมาณ/ลักษณะเลือด, ถ่ายดำ, หน้ามืด",rubric:"1/ข้อ",pts:[CR(P("NSAIDs / anticoagulant","nsaid","aspirin","anticoag","antiplatelet")),CR(P("Alcohol / liver disease","alcohol","เหล้า","cirrho","liver","ตับ")),P("Peptic ulcer history","ulcer","pylori","dyspeps"),P("Retching before bleeding","retch","mallory","อาเจียน"),P("Weight loss / dysphagia","weight","dysphag")]}),
  B("12.2 Management.",5,{tags:["spot"],ans:"<b>ABC</b>, 2 large-bore IV, crystalloid · CBC, G/M, coag, BUN/Cr · <b>transfuse Hb <7 (8 ถ้ามีโรคหัวใจ)</b> · <b>Glasgow-Blatchford score</b> · <b>IV PPI</b> (omeprazole 80 mg IV bolus → infusion 8 mg/h หรือ 40 mg IV bid) · สงสัย varices: <b>octreotide/terlipressin + ceftriaxone</b> · <b>EGD ภายใน 24 ชม.</b> (endoscopic hemostasis) · ล้มเหลว → angioembolization/surgery",rubric:"1/ประเด็น",pts:[CR(P("Resuscitation: large-bore IV, fluid","resusc","large","fluid","abc")),P("Transfusion threshold","transfus","hb 7","prbc"),P("Risk score","blatchford","rockall"),CR(P("IV PPI","ppi","omeprazole","pantoprazole")),P("Variceal: octreotide/terlipressin + antibiotic","octreotide","terlipressin","ceftriaxone"),CR(P("Endoscopy within 24 h","egd","endoscop"))]})
 ),
 interp:"UGIB",
 summary:["Resuscitate, transfuse Hb <7","IV PPI; varices: vasoactive + antibiotic","EGD within 24 h"]}),

SA({page:30,orig:"MEQ 13",num:"SA 13",sub:"Burn",flag:NOIMG,imgAlt:"แผลไหม้น้ำร้อนลวกที่หน้าแขน: ผิวแดงชมพูชุ่มชื้น มีตุ่มพองน้ำใสหลายตุ่ม กดแล้วซีดและแดงกลับเร็ว",title:"Short answer — burn depth",
 stem:`A picture of a burn is shown; the patient says it still hurts.<br>What degree is it, and what is the management?`,
 gray:"13. ให้รูป burn มา โจทย์บอกว่ายังเจ็บ? ถามว่า degree ไหน, management (ข้อความในไฟล์: โจทย์บอกว่ายังเจ็บ)",
 notes:"ไม่มีเฉลยในไฟล์ · ⚠ ข้อความไฟล์อ่านได้ว่า 'โจทย์บอกว่ายังเจ็บ' — ถ้ายังเจ็บเป็นแผล partial thickness; เฉลยทั้งสองแบบ"+" · ตรวจคีย์ 21 พ.ย. 2026: ไม่มีคีย์เดิม — แก้เกณฑ์ fluid resuscitation เป็น ≥20% TBSA, 2 mL/kg/%TBSA ตาม ABA/ATLS 10th",opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไม่มีเฉลยในไฟล์ · คำบอก ยังเจ็บ ชี้ partial-thickness (2nd degree) ส่วนภาพที่ Claude บรรยาย (ขาวซีดแข็ง) เป็น full-thickness — คงเฉลยทั้งสองแบบ · แก้เกณฑ์ให้สารน้ำจาก >15–20% เป็น ≥20% TBSA เริ่ม 2 mL/kg/%TBSA ตาม American Burn Association Burn Resuscitation Guidelines (สรุปใน AFP 2025) และ ATLS 10th · ความมั่นใจต่ำ (ไม่เห็นรูป)",
 parts:S(
  B("13.1 Degree and management.",5,{tags:["spot"],ans:"ถ้า <b>ยังเจ็บ, แดง ชื้น มี blister, blanch</b> → <b>superficial partial-thickness (2nd degree)</b>: ทำแผล topical/biologic dressing หายใน 2–3 สัปดาห์ · ถ้า <b>ไม่เจ็บ ขาวซีด/แข็งแบบหนัง ไม่ blanch</b> → <b>full-thickness (3rd degree)</b>: <b>early excision + split-thickness skin graft</b>, escharotomy ถ้าเป็นรอบแขนขา/ทรวงอก · ทั้งหมด: ABC, %TBSA, <b>fluid resuscitation ถ้า ≥20% TBSA</b> (ผู้ใหญ่เริ่ม 2 mL/kg/%TBSA ใน 24 ชม. ครึ่งแรกใน 8 ชม. ปรับตาม urine 0.5 mL/kg/h; Parkland 4 mL เป็นขอบบน), tetanus, analgesia",rubric:"1/ประเด็น",pts:[CR(P("Correct degree from pain/appearance","partial","full","2nd","3rd","second","third")),P("Superficial: dressing, heals 2–3 wk","dressing","silver","heal"),CR(P("Full thickness: excision and graft","graft","excision")),P("Escharotomy if circumferential","escharotomy"),P("Fluid resuscitation and tetanus","parkland","fluid","tetanus")]})
 ),
 interp:"Burn depth",
 summary:["Painful + blister + blanch = superficial partial","Painless, leathery = full thickness","Full thickness → excision + STSG"]})

);
})();

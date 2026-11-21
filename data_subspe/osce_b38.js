(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU69 RoA (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   69 R1: OSCE 12 สถานี (SO22 หน้า 39–52 มีแนวคำตอบ) + MEQ 14 ข้อ (SM21 หน้า 48–65 มีเฉลย) */
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
const Co=o=>Object.assign({set:"MDCU69",ro:"RoA",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:40,orig:"1",topic:"suture",sub:"Simple interrupted",ex:1,proc:1,title:"Local anesthesia and simple interrupted suture with instrument tie",
 stem:`Demonstrate local anesthetic injection and suture the wound with 2 simple interrupted stitches tied with instruments.<br>(No skin prep needed; assume gloves are on. Start from drawing up the anesthetic.)`,
 gray:"1. แสดงวิธีการฉีดยาชาและเย็บแผลด้วย simple interrupted 2 sticht ผูกด้วยเครื่องมือ (ไม่ต้องทายาฆ่าเชื้อ สมมติว่าใส่ถุงมือแล้ว เริ่มจาก draw ยาชา แสดงวิธีฉีด แล้วก็เย็บ)",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Local anesthesia.",4,{tags:["proc"],ans:"ตรวจยา 1% lidocaine ถามแพ้ยา · <b>ดูดยาด้วยเข็มใหญ่ เปลี่ยนเป็นเข็มเล็ก</b> ไล่อากาศ · แทงผ่านขอบแผล <b>aspirate</b> ก่อนฉีด ฉีดช้าขณะถอย · รอ ทดสอบชา",rubric:"1/ประเด็น",pts:[P("Check drug and allergy","check","allerg","แพ้"),P("Draw up and change needle","draw","ดูด","เปลี่ยนเข็ม","change"),CR(P("Aspirate before inject","aspirat")),P("Test anesthesia","test","ทดสอบ")]}),
  B("1.2 Simple interrupted with instrument tie.",4,{tags:["suture"],ans:"เข็มตั้งฉาก ขึ้นกลางแผล แล้วแทงอีกฝั่งระยะเท่ากัน · <b>instrument tie</b> 3 throw (square) · ปมข้างแผล ตัดไหมเหลือ 5 มม. · 2 เข็มระยะห่างเท่ากัน",rubric:"1/ประเด็น",pts:[CR(P("Perpendicular, equal bites","perpendic","equal","เท่ากัน")),CR(P("Instrument tie square knot","instrument","square")),P("Knot at side","side","ข้าง"),P("Tail length and spacing","tail","spacing")]})
 ),
 interp:"LA + simple suture",
 summary:["Aspirate before injecting","Equal bites","Instrument tie, knot to the side"]}),

/* ===== OSCE 2 ===== */
Co({page:41,orig:"2",topic:"hx",sub:"UGIB",ex:1,title:"History — upper GI bleeding (two simulated patients)",
 stem:`Two simulated patients: one presents with upper GI bleeding, the other with abdominal pain. Take a history.`,
 gray:"2. จงซักประวัติผู้ป่วย มีสองคน คนนึงมาด้วย upper GI bleed อีกคนมาด้วย abdominal pain",
 notes:"ในไฟล์มีโน้ตลายมือแนวการซัก (variceal vs non-variceal, chronic liver stigmata, dehydrate, anemic symptom)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("2.1 UGIB history.",8,{tags:["hx"],ans:"ลักษณะเลือด (สด/coffee ground), ถ่ายดำ, ปริมาณ จำนวนครั้ง · <b>อาการเสียเลือด/ซีด</b>: หน้ามืด ใจสั่น เหนื่อย · <b>แยก variceal vs non-variceal</b>: <b>แอลกอฮอล์, ตับแข็ง/HBV-HCV, ท้องโต ตัวเหลือง</b> (chronic liver stigmata) · <b>NSAIDs/aspirin/anticoagulant</b>, ประวัติ peptic ulcer, dyspepsia · อาเจียนรุนแรงก่อน (Mallory-Weiss) · <b>น้ำหนักลด กลืนลำบาก อิ่มเร็ว</b> (CA) · โรคประจำตัว",rubric:"1/ประเด็น",pts:[P("Character, amount, melena","melena","coffee","ถ่ายดำ","amount"),CR(P("Symptoms of blood loss","dizz","syncope","หน้ามืด","anemi","ใจสั่น")),CR(P("Liver disease, alcohol (variceal)","alcohol","เหล้า","cirrho","liver","ตับ")),CR(P("NSAIDs / anticoagulant","nsaid","aspirin","anticoag")),P("Peptic ulcer history","ulcer","dyspeps"),P("Retching (Mallory-Weiss)","retch","mallory"),P("Alarm features","weight","dysphag","satiety")]})
 ),
 interp:"UGIB history",
 summary:["Variceal vs non-variceal","NSAIDs, alcohol, liver disease","Alarm features for cancer"]}),

/* ===== OSCE 3 ===== */
Co({page:42,orig:"3",topic:"pe",sub:"Anorectal exam",ex:1,proc:1,img:["mo42_1"],title:"Rectal bleeding — examination and diagnosis",
 stem:`A patient has bleeding per rectum. Demonstrate the physical examination and give the diagnosis.<br>(The simulated patient lies on the bed while you demonstrate PR on a model; the picture of the lesion is then shown.)`,
 gray:"3. ผู้ป่วยถ่ายเป็นเลือดมา จงแสดงวิธีตรวจร่างกาย และวินิจฉัย (ผู้ป่วยจำลองนอนบนเตียง PR บนหุ่น แต่ผู้ป่วยจะแสดงตลอดแบบร้องว่าเจ็บ ละมีรูป lesion ให้ดู)",
 notes:"ไม่มีเฉลยในไฟล์ · SP แสดงอาการเจ็บตลอด → เข้ากับ anal fissure",opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Examination.",5,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต · left lateral · <b>inspection แยก buttock เบาๆ</b> (fissure เห็นได้จากการดู) · ถ้าผู้ป่วยเจ็บมาก <b>ไม่ควรฝืน PR/proctoscopy</b> → ทำภายใต้ยาชา/EUA · อธิบายผู้ป่วย",rubric:"1/ประเด็น",pts:[P("Consent, position","consent","left lateral"),CR(P("Gentle inspection with buttock separation","inspect","separat","แยก")),CR(P("Avoid forceful PR if very painful","avoid","pain","เจ็บ","eua")),P("Explain findings","explain","อธิบาย")]}),
  B("3.2 Diagnosis.",2,{tags:["pe"],ans:"<b>Anal fissure (posterior midline)</b> ± sentinel pile → ถ้าเรื้อรัง (>6 สัปดาห์, มี sentinel tag, hypertrophied papilla) = chronic",rubric:"ได้",pts:[CR(P("Anal fissure","fissure"))]})
 ),
 interp:"Anal fissure",
 summary:["Painful bleeding","Inspection is enough; avoid forceful PR","Posterior midline; sentinel pile = chronic"]}),

/* ===== OSCE 4 ===== */
Co({page:43,orig:"4",topic:"img",sub:"Urolithiasis",title:"IVP — right renal stone",
 stem:`An IVP is shown.<br>1. Describe what you see.<br>2. Diagnosis.<br>3. Management.`,
 gray:"4. IVP 4.1 จงบรรยายสิ่งที่เห็น 4.2 Diagnosis 4.3 Management (Right renal stone)",
 flag:NOIMG,imgAlt:"IVP มีนิ่วไตขวา",
 notes:"แนวคำตอบในไฟล์: right renal stone",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("4.1 Answer.",6,{tags:["img"],ans:"Scout: <b>radio-opaque density ที่ไตขวา</b> · contrast: filling defect/hydronephrosis ไตขวา ± delayed excretion · Dx: <b>right renal stone</b> · Mx: <2 ซม. <b>ESWL/RIRS</b>, >2 ซม. <b>PCNL</b>, ติดเชื้อ+อุดกั้น → drain ก่อน · ดื่มน้ำ หาสาเหตุ",rubric:"1/ประเด็น",pts:[CR(P("Opaque stone at right kidney","opaque","stone","calcul")),P("Hydronephrosis or delayed excretion","hydroneph","delay"),CR(P("Right renal stone","renal stone","nephrolith")),CR(P("ESWL/RIRS/PCNL by size","eswl","pcnl","rirs")),P("Drain if infected","drain","stent","pcn")]})
 ),
 interp:"Renal stone",
 summary:["<2 cm ESWL/RIRS","≥2 cm PCNL","Infected obstruction → drain"]}),

/* ===== OSCE 5 ===== */
Co({page:44,orig:"5",topic:"inst",sub:"Tubes",img:["mo44_1","mo44_2"],title:"NG tube and chest tube — 3 indications each",
 stem:`An NG tube and a chest tube are shown. What are they, and give 3 indications for each.`,
 gray:"5. ให้ NG tube , Chest tube มาถามว่าคืออะไร indicationอย่างละ 3 ข้อ",
 notes:"แนวคำตอบในไฟล์: NG — gastric decompression, evaluation of UGIB, feeding · chest tube — drain hemothorax, pneumothorax, pleural effusion",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 NG tube.",3,{tags:["inst"],ans:"<b>Nasogastric tube</b>: <b>gastric decompression</b> (obstruction, ileus) · <b>evaluation of UGIB</b> · <b>feeding</b>/ให้ยา · gastric lavage",rubric:"1/ข้อ",pts:[CR(P("Decompression","decompress")),P("Evaluate UGIB","ugib","bleed"),P("Feeding","feed","อาหาร")]}),
  BS("5.2 Chest tube.",3,{tags:["inst"],ans:"<b>Chest tube (intercostal drainage)</b>: <b>pneumothorax</b>, <b>hemothorax</b>, <b>pleural effusion/empyema</b>, chylothorax, หลังผ่าตัดทรวงอก",rubric:"1/ข้อ",pts:[CR(P("Pneumothorax","pneumothorax")),CR(P("Hemothorax","hemothorax")),P("Effusion/empyema","effusion","empyema")]})
 ),
 interp:"NG + chest tube",
 summary:["NG: decompression, UGIB evaluation, feeding","Chest tube: pneumo-, hemothorax, effusion"]}),

/* ===== OSCE 6 ===== */
Co({page:45,orig:"6",topic:"img",sub:"Mammogram",title:"Mammogram — right breast cancer with axillary node",
 stem:`A mammogram is shown.<br>1. Name the investigation and views.<br>2. Describe it.<br>3. What further investigation for diagnosis?`,
 gray:"6. ให้ mammogram มา 6.1 ชื่อการตรวจ ท่าไหน 6.2 บรรยายmammogram 6.3 ตรวจอะไรเพิ่มเติมเพื่อวินิจฉัย ( right CA breast with axillary lymph node metas)",
 flag:NOIMG,imgAlt:"Mammogram เต้านมขวา มีก้อนและต่อมน้ำเหลืองรักแร้โต",
 notes:"แนวคำตอบในไฟล์: craniocaudal, mediolateral oblique · right CA breast with axillary lymph node metastasis",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("6.1 Answer.",6,{tags:["img"],ans:"<b>Mammography — craniocaudal (CC) และ mediolateral oblique (MLO)</b> · ก้อน <b>irregular/spiculated hyperdense mass</b> เต้านมขวา ± microcalcification + <b>enlarged dense axillary lymph node</b> → <b>right breast carcinoma with axillary node metastasis</b> (BI-RADS 5) · Ix: <b>US-guided core needle biopsy</b> ของก้อน + <b>FNA/core ของ axillary node</b> · receptor ER/PR/HER2 · staging",rubric:"1/ประเด็น",pts:[CR(P("CC and MLO","cc","mlo","craniocaudal")),CR(P("Spiculated mass","spicul","irregular","mass")),CR(P("Axillary node","axill","node")),P("Breast cancer BI-RADS 5","carcinoma","cancer","bi-rads"),CR(P("Core biopsy of mass and node","biopsy","core","fna"))]})
 ),
 interp:"Breast cancer MMG",
 summary:["CC + MLO","Spiculated mass + dense axillary node","Core biopsy mass + node"]}),

/* ===== OSCE 7 ===== */
Co({page:46,orig:"7",topic:"inst",sub:"Suture materials",title:"PDS, Vicryl, catgut, Prolene mesh",
 stem:`PDS (generic name hidden), Vicryl (all names hidden), catgut (all names hidden) and Prolene mesh are shown.<br>1. Generic name.<br>2. Nature (natural/synthetic) and filament type (mono/multi).<br>3. One example of use.`,
 gray:"7. ให้ PDS (ปิดชื่อสามัญ), Vicryl (ปิดชื่อทั้งหมด), Catgut (ปิดชื่อทั้งหมด), แผ่น prolene mesh 1.ถามชื่อสามัญ 2.ถามธรรมชาติของเส้นใย (natural/synthetic) และลักษณะเส้นใย (แบบmono/multi) 3.ตัวอย่างการใช้งาน 1 อย่าง",
 notes:"แนวคำตอบในไฟล์: PDS = polydioxanone, synthetic monofilament absorbable → hollow viscus · Vicryl = polyglactin, synthetic multifilament absorbable → muscle, subcutaneous tissue · Catgut = natural multifilament absorbable · Prolene mesh → herniorrhaphy",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("7.1 Answer.",8,{tags:["inst"],ans:"<b>PDS = polydioxanone</b>: synthetic, monofilament, absorbable (ช้า) → เย็บ hollow viscus/fascia · <b>Vicryl = polyglactin 910</b>: synthetic, multifilament, absorbable → muscle, subcutaneous · <b>Catgut</b>: natural (ลำไส้แกะ/วัว), multifilament (twisted), absorbable → mucosa, peritoneum · <b>Prolene (polypropylene) mesh</b>: synthetic monofilament non-absorbable → <b>hernia repair (herniorrhaphy/hernioplasty)</b>",rubric:"1/ประเด็น",pts:[CR(P("PDS polydioxanone","polydioxanone")),P("PDS synthetic monofilament","monofilament"),CR(P("Vicryl polyglactin","polyglactin")),P("Vicryl synthetic multifilament","multifilament","braided"),P("Catgut natural","natural","catgut"),CR(P("Prolene mesh for hernia","hernia","mesh")),P("Examples of use","viscus","fascia","subcut","muscle")]})
 ),
 interp:"Suture materials",
 summary:["PDS: synthetic mono absorbable","Vicryl: synthetic multi absorbable","Mesh: hernia repair"]}),

/* ===== OSCE 8 ===== */
Co({page:47,orig:"8",topic:"inst",sub:"Surgical instruments",title:"Allis, Crile, Army-Navy, Metzenbaum",
 stem:`Allis forceps, Crile arterial clamp, Army-Navy retractor and Metzenbaum scissors are shown.<br>1. Name each.<br>2. Use.`,
 gray:"8.ให้อุปกรณ์ allis, crile arterial clamp, army navy, metzenbaum 1. ถามชื่ออุปกรณ์ 2. การใช้งาน",
 flag:NOIMG,imgAlt:"Allis forceps, Crile clamp, Army-Navy retractor, Metzenbaum scissors",
 notes:"แนวคำตอบในไฟล์: Allis → grasping fascia, breast tissue · Crile → clamp vessels · Army-Navy → retract tissue in minor procedure · Metzenbaum (curved) → cut delicate tissue",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("8.1 Answer.",4,{tags:["inst"],ans:"<b>Allis forceps</b> — จับ fascia, breast tissue · <b>Crile arterial clamp</b> — clamp vessels · <b>Army-Navy retractor</b> — retract tissue ในหัตถการเล็ก · <b>Metzenbaum scissors (curved)</b> — ตัดเนื้อเยื่อบอบบาง",rubric:"1/ชิ้น",pts:[CR(P("Allis — grasp fascia","allis")),CR(P("Crile — clamp vessels","crile","artery","clamp")),P("Army-Navy — retract","army","navy"),P("Metzenbaum — delicate tissue","metzenbaum")]})
 ),
 interp:"Instruments",
 summary:["Allis grasps tissue to be removed","Crile clamps small vessels","Metzenbaum for delicate dissection"]}),

/* ===== OSCE 9 ===== */
Co({page:48,orig:"9",topic:"img",sub:"Bowel obstruction",title:"Acute abdomen series — small bowel obstruction",
 stem:`An acute abdomen series is given.<br>1. Which films and positions does it include?<br>2. Describe the findings.<br>3. What is the most common cause?`,
 gray:"9. ให้ film acute abdomen series ถาม 1. ประกอบด้วย film อะไรบ้าง ท่าไหน 2. บรรยายสิ่งที่พบ 3. สาเหตุที่พบบ่อยที่สุดให้เกิดภาวะนี้ (Small bowel obstruction)",
 flag:NOIMG,imgAlt:"Acute abdomen series ลำไส้เล็กขยาย",
 notes:"แนวคำตอบในไฟล์: upright chest film, upright abdominal film, supine abdominal film · disproportional dilatation of small bowel, different air-fluid level in the same loop · adhesion band",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 Answer.",6,{tags:["img"],ans:"<b>Upright chest, upright abdomen, supine abdomen</b> · <b>disproportional dilatation of small bowel</b>, <b>air-fluid levels ต่างระดับใน loop เดียวกัน</b> (step-ladder) · สาเหตุบ่อยสุด <b>adhesion band</b>",rubric:"1/ประเด็น",pts:[CR(P("Upright chest","chest")),P("Upright and supine abdomen","upright","supine"),CR(P("Dilated small bowel","dilat","small bowel")),P("Differential air-fluid levels","air-fluid","air fluid","different"),CR(P("Adhesion","adhesion","band"))]})
 ),
 interp:"SBO",
 summary:["3 films","Different air-fluid levels in same loop","Adhesion"]}),

/* ===== OSCE 10 ===== */
Co({page:49,orig:"10",topic:"inst",sub:"Urinary catheter",title:"Three-way Foley — name and indication",
 stem:`1. Name the device.<br>2. Indication.`,
 gray:"10 ให้ 3 way catheter ถาม 1. ชื่ออุปกรณ์ 2. Indication",flag:NOIMG,imgAlt:"สายสวน 3 ทาง",
 notes:"แนวคำตอบในไฟล์: 3-way foley catheter · continuous irrigate bladder",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("10.1 Answer.",4,{tags:["inst"],ans:"<b>Three-way Foley catheter</b> · <b>continuous bladder irrigation</b>",rubric:"1/ประเด็น",pts:[CR(P("Three-way Foley","3-way","three-way","3 way","three way")),CR(P("Continuous bladder irrigation","irrigat","cbi"))]})
 ),
 interp:"3-way Foley",
 summary:["Continuous bladder irrigation"]}),

/* ===== OSCE 11 ===== */
Co({page:50,orig:"11",topic:"hx",sub:"Prostate",ex:1,title:"LUTS — ask by IPSS",
 stem:`A man presents with LUTS. What questions will you ask?`,
 gray:"11. ผู้ป่วยชายมาด้วย LUTS จะถามคำถามอะไรบ้าง (ตาม IPSS score เลย)",
 notes:"แนวคำตอบในไฟล์: ตาม IPSS — frequency, urgency, nocturia (0–5), poor stream, intermittency, straining, incompleteness, quality of life (0–6)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("11.1 IPSS questions.",8,{tags:["hx"],ans:"<b>IPSS</b> 7 ข้อ (0–5 คะแนน): <b>incomplete emptying</b>, <b>frequency</b> (<2 ชม.), <b>intermittency</b>, <b>urgency</b>, <b>weak stream</b>, <b>straining</b>, <b>nocturia</b> + <b>quality of life</b> (0–6) · แปลผล 0–7 mild, 8–19 moderate, 20–35 severe",rubric:"1/ข้อ",pts:[P("Incomplete emptying","incomplete"),CR(P("Frequency","frequency")),P("Intermittency","intermitt"),P("Urgency","urgency"),CR(P("Weak stream","weak","poor stream")),P("Straining","strain"),CR(P("Nocturia","nocturia")),P("Quality of life","quality","qol")]})
 ),
 interp:"IPSS",
 summary:["7 questions + QoL","0–7 mild, 8–19 moderate, 20–35 severe"]}),

/* ===== OSCE 12 ===== */
Co({page:52,orig:"12",topic:"proc",sub:"Scrub and gloving",ex:1,proc:1,title:"Dry hands and put on sterile gloves",
 stem:`Demonstrate drying the hands and putting on sterile gloves (assume hands have been washed; choose the glove size yourself).`,
 gray:"12. แสดงวิธีเช็ดมือ และสวมถุงมือ sterile (สมมติว่าล้างมือเสร็จแล้ว ว่าแบบล้างมือแล้วเข้ามา มี size ถุงมือให้เลือก เตรียมก่อนเริ่มเลย)",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("12.1 Technique.",6,{tags:["proc"],ans:"เลือก size และเปิดห่อถุงมือก่อน · <b>เช็ดมือด้วยผ้า sterile</b>: ใช้ด้านหนึ่งต่อมือหนึ่ง เช็ดจากนิ้ว → ฝ่ามือ → แขน ถึงศอก ไม่ย้อน มือสูงกว่าศอก · <b>ใส่ถุงมือ</b>: มือเปล่าแตะเฉพาะด้านในของ cuff ข้างแรก · มือที่ใส่แล้วสอดใต้ cuff ข้างสอง",rubric:"1/ประเด็น",pts:[P("Prepare glove size","size"),CR(P("Dry with sterile towel, one side per hand","towel","ผ้า","one side")),CR(P("Fingers to elbow, no return","elbow","ศอก","finger","นิ้ว")),CR(P("Inner cuff only with bare hand","inner","inside","ด้านใน")),P("Gloved hand under cuff","under","cuff")]})
 ),
 interp:"Drying + gloving",
 summary:["Towel: one side per hand, fingers → elbow","Bare hand touches only inside","Gloved hand under cuff"]}),

/* ===== MEQ ===== */
SA({page:49,orig:"MEQ 1",num:"SA 1",sub:"Hepatobiliary",img:["mm49_1"],title:"Short answer — jaundice in a 35-year-old man",
 stem:`A 35-year-old man has jaundice for 1 month without pain or fever. PE: mild icteric sclerae. LFT: TB 21, DB 17, SGOT 40, SGPT 45, ALP 240.<br>1. Type of hyperbilirubinemia?<br>2. Give 3 differential diagnoses.`,
 gray:"1 ผู้ป่วยชายอายุ 35 ปี ตัวเหลืองตาเหลืองมา1 เดือน ไม่ปวดท้อง ไม่มีไข้ PE : mild icteric sclerae Lab: LFT - total bilirubin 21, direct bilirubin 17, sgot 40, sgpt 45, alp 240 1.1 บอกชนิดของhyperbilirubinในผู้ป่วยรายนี้ 1.2 ddx 3 โรค",
 notes:"เฉลยในไฟล์: conjugated hyperbilirubinemia · CA ampulla, CA head of pancreas, cholangiocarcinoma",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 Type.",2,{tags:["spot"],ans:"<b>Conjugated (direct) hyperbilirubinemia</b> แบบ <b>obstructive/cholestatic</b> (ALP สูง, transaminase เกือบปกติ)",rubric:"1/ประเด็น",pts:[CR(P("Conjugated/direct","conjugat","direct")),P("Obstructive pattern","obstruct","cholestat")]}),
  BS("1.2 DDx.",3,{tags:["spot"],ans:"<b>Painless obstructive jaundice</b>: <b>CA ampulla</b>, <b>CA head of pancreas</b>, <b>cholangiocarcinoma</b> (± CBD stone, choledochal cyst)",rubric:"1/โรค",pts:[CR(P("CA ampulla","ampull")),CR(P("CA head of pancreas","pancrea")),CR(P("Cholangiocarcinoma","cholangio"))]})
 ),
 interp:"Obstructive jaundice",
 summary:["DB/TB >50%, high ALP = obstructive","Painless → malignancy","Periampullary tumors"]}),

SA({page:50,orig:"MEQ 2",num:"SA 2",sub:"Others",img:["mm50_1"],title:"Short answer — abdominal pain with guarding: CXR",
 stem:`A woman has abdominal pain with guarding.<br>1. What imaging and position?<br>2. Describe what you see.<br>3. Give 2 differential diagnoses.`,
 gray:"2 ผู้ป่วยหญิงปวดท้องมีกด guarding 2.1 Imaging ที่เห็นคืออะไร ท่าที่เห็นคืออะไร 2.2 อธิบายสิ่งที่เห็น 2.3 Differential diagnosis มา 2 โรค",
 notes:"เฉลยในไฟล์: chest PA upright · free air under diaphragm both sides · gut obstruction with hollow viscus organ perforation, perforated peptic ulcer",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("2.1 Answer.",5,{tags:["spot"],ans:"<b>Chest X-ray PA upright</b> · <b>free air under both hemidiaphragms</b> (pneumoperitoneum) · DDx: <b>perforated peptic ulcer</b>, <b>hollow viscus perforation</b> (เช่น จาก gut obstruction, perforated appendicitis/diverticulitis)",rubric:"1/ประเด็น",pts:[CR(P("CXR upright","upright","chest")),CR(P("Free air under diaphragm","free air","diaphragm")),CR(P("Perforated peptic ulcer","peptic","ulcer")),P("Other hollow viscus perforation","perforat","hollow")]})
 ),
 interp:"Pneumoperitoneum",
 summary:["Upright CXR best for free air","Perforated PU most common","Emergency surgery"]}),

SA({page:51,orig:"MEQ 3",num:"SA 3",sub:"Anorectal",kimg:["mm51_1"],flag:NOIMG,imgAlt:"ก้อนริดสีดวงยื่นจากทวารหนัก",title:"Short answer — hemorrhoid that must be pushed back",
 stem:`A patient has rectal bleeding and an anal mass that must be pushed back manually.<br>1. Grading.<br>2. Management.`,
 gray:"3. ผู้ป่วยมีอาการถ่ายเป็นเลือด มีก้อนที่ทวารหนัก ต้องใช้มือดันกลับ 3.1 Grading 3.2 Management",
 notes:"เฉลยในไฟล์: grade III · stapler hemorrhoidopexy · (รูปในไฟล์มีหัวข้อ Prolapsed Internal Hemorrhoids จึงใส่เป็นรูปเฉลย)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("3.1 Answer.",4,{tags:["spot"],ans:"<b>Internal hemorrhoid grade III</b> (prolapse ต้องดันกลับเอง) · Mx: <b>stapled hemorrhoidopexy</b> หรือ <b>hemorrhoidectomy</b> (± RBL ในบางราย) + fiber, sitz bath",rubric:"1/ประเด็น",pts:[CR(P("Grade III","grade iii","grade 3","iii")),CR(P("Stapled hemorrhoidopexy or hemorrhoidectomy","stapl","hemorrhoidectomy","pph")),P("Conservative measures","fiber","sitz")]})
 ),
 interp:"Grade III hemorrhoid",
 summary:["III = manual reduction","Stapled hemorrhoidopexy / hemorrhoidectomy"]}),

SA({page:52,orig:"MEQ 4",num:"SA 4",sub:"Plastic",img:["mm52_1"],title:"Short answer — cleft palate timing",
 stem:`1. Diagnosis.<br>2. Appropriate age for surgery.<br>3. Reasons for that age.`,
 gray:"4. 4.1 diagnosis 4.2 อายุที่เหมาะสมจะทำการผ่าตัด 4.3 เหตุผลที่ผ่าตัดที่อายุเท่านั้น",
 notes:"เฉลยในไฟล์: bilateral incomplete cleft palate · 1 year · ผ่าเร็วไปจะรบกวน maxillary growth + ปากเด็กเล็ก ผ่ายาก เย็บยาก · ผ่าช้าไปจะรบกวน speech development เพราะเด็กจะเริ่มพูดเมื่ออายุ 1 ปี",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("4.1 Answer.",5,{tags:["spot"],ans:"<b>Cleft palate</b> (คีย์ไฟล์: bilateral incomplete) · <b>~1 ปี (9–12 เดือน)</b> · เร็วเกิน → <b>รบกวน maxillary growth</b>, ปากเล็ก ผ่า/เย็บยาก · ช้าเกิน → <b>รบกวน speech development</b> (เริ่มพูด ~1 ปี)",rubric:"1/ประเด็น",pts:[CR(P("Cleft palate","cleft palate","palate")),CR(P("About 1 year","1 year","1 ปี","12","9")),P("Too early: maxillary growth","maxill","growth"),CR(P("Too late: speech","speech","พูด"))]})
 ),
 interp:"Cleft palate",
 summary:["~1 year","Early → maxillary growth","Late → speech"]}),

SA({page:53,orig:"MEQ 5",num:"SA 5",sub:"Plastic",img:["mm53_1"],title:"Short answer — wound after 10 months bedridden",
 stem:`A man injured in an accident 10 months ago has the wound shown.<br>1. In what position does he lie?<br>2. Which bone is under it?`,
 gray:"5. ผู้ป่วยชายประสบอุบัติเหตุ 10 เดือน มีแผลดังรูป 5.1 ผู้ป่วยอยู่ในท่าใด 5.2 กระดูกอะไรอยู่ข้างใต้",
 notes:"เฉลยในไฟล์: supine · sacrum",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 Answer.",3,{tags:["spot"],ans:"Pressure ulcer · ท่า <b>supine (นอนหงาย)</b> · กระดูก <b>sacrum</b>",rubric:"1/ประเด็น",pts:[CR(P("Supine","supine","หงาย")),CR(P("Sacrum","sacr"))]})
 ),
 interp:"Sacral sore",
 summary:["Supine → sacrum"]}),

SA({page:54,orig:"MEQ 6",num:"SA 6",sub:"Neuro",flag:NOIMG,imgAlt:"ไม่มีรูป — สถานการณ์ head injury",title:"Short answer — head injury: serial GCS, signs, CT",
 stem:`(4 sub-questions, 1 minute each)<br>1. A 25-year-old Thai man in a car crash: on arrival opens eyes to voice, speaks in confused sentences, obeys commands. GCS?<br>2. Later: eyes do not open even to pain, speaks incomprehensible sounds, left arm decerebrate, right arm flexion. GCS?<br>3. What signs may be found?<br>4. Describe the expected CT brain (no picture).`,
 gray:"6. มี 4 ข้อย่อย ข้อละ 1 นาที 6.1 ผู้ป่วยชายไทย อายุ 25 ปี ประสบอุบัติเหตุรถชน แรกรับ ลืมตาเมื่อเรียกชื่อ พูดเป็นประโยคแต่สับสน สามารถทำตามสั่งได้ จงประเมิน GCS 6.2 หลังจากนั้น ผู้ป่วยไม่สามารถลืมตาได้เมื่อกระตุ้นด้วยความเจ็บปวด พูดเป็นคำๆไม่มีความหมาย แขนซ้าย decerebrate แขนขวา flexion จงประเมิน GCS อีกครั้ง 6.3 จะสามารถตรวจพบอาการแสดงอะไรได้บ้าง 6.4 จงอธิบายสิ่งที่พบใน CT brain (ไม่มีรูปให้)",
 notes:"เฉลยในไฟล์: 6.1 E3M6V4 · 6.2 E1M3V2 · 6.3 ↑ICP: change in vital sign (↑SBP, ↓pulse, altered respiratory pattern), papilledema, seizure, impaired eye movement (CN VI palsy); uncal herniation: ipsilateral pupil dilatation, contralateral hemiparesis · 6.4 epidural hematoma: lentiform-shape hyperdensity lesion between skull + dura",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("6.1 First GCS.",1,{tags:["spot"],ans:"<b>E3V4M6 = 13</b>",rubric:"ได้",pts:[CR(P("E3V4M6 = 13","13","e3"))]}),
  BS("6.2 Second GCS.",1,{tags:["spot"],ans:"<b>E1V2M3 = 6</b> (ใช้ best motor = flexion ผิดปกติ M3)",rubric:"ได้",pts:[CR(P("E1V2M3 = 6","6","e1"))]}),
  BS("6.3 Signs.",3,{tags:["spot"],ans:"<b>↑ICP</b>: Cushing (↑SBP, ↓HR, irregular respiration), papilledema, seizure, CN VI palsy · <b>uncal herniation</b>: <b>ipsilateral pupil dilatation</b>, <b>contralateral hemiparesis</b>",rubric:"1/ประเด็น",pts:[CR(P("Cushing response","cushing","bradycard","systolic","vital")),P("Papilledema, CN VI","papilled","vi"),CR(P("Ipsilateral dilated pupil","pupil","dilat")),P("Contralateral hemiparesis","hemipar","contralateral")]}),
  BS("6.4 CT.",2,{tags:["spot"],ans:"<b>Epidural hematoma</b> — <b>lentiform (biconvex) hyperdense lesion between skull and dura</b> ไม่ข้าม suture",rubric:"1/ประเด็น",pts:[CR(P("Epidural hematoma","epidural")),CR(P("Lentiform hyperdensity","lentiform","biconvex","lens"))]})
 ),
 interp:"EDH",
 summary:["GCS 13 → 6","Uncal herniation: ipsilateral pupil, contralateral weakness","EDH biconvex"]}),

SA({page:58,orig:"MEQ 7",num:"SA 7",sub:"Pediatric surgery",img:["mm58_1"],kimg:["mm58_2","mm58_3"],title:"Short answer — omphalocele",
 stem:`1. Diagnosis.<br>2. Associated anomalies.<br>3. Initial management.`,
 gray:"7. 7.1 Diagnosis 7.2 ความผิดปกติที่พบร่วมด้วย 7.3. Initial management",
 notes:"เฉลยในไฟล์: omphalocele + สไลด์ associated anomalies และ treatment (sterile protection, hypothermia prevention, adequate fluid resuscitation, antibiotic)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("7.1 Answer.",6,{tags:["spot"],ans:"<b>Omphalocele</b> · anomaly 50–80%: <b>cardiac</b>, genitourinary, musculoskeletal, <b>Beckwith-Wiedemann</b>, neural tube, <b>pentalogy of Cantrell</b>, chromosomal · Initial: <b>sterile protection</b> ของถุง, <b>ป้องกัน hypothermia</b>, <b>fluid resuscitation</b>, antibiotic, NG decompression, glucose",rubric:"1/ประเด็น",pts:[CR(P("Omphalocele","omphalocele")),CR(P("Cardiac anomalies","cardiac")),P("Beckwith-Wiedemann / Cantrell","beckwith","cantrell"),CR(P("Sterile protection","sterile","cover","protect")),P("Prevent hypothermia","hypotherm","warm"),P("Fluid and antibiotic","fluid","antibiot")]})
 ),
 interp:"Omphalocele",
 summary:["Anomalies 50–80%","Cover, warm, fluid, antibiotic","Echo"]}),

SA({page:59,orig:"MEQ 8",num:"SA 8",sub:"Colorectal",img:["mm59_1"],title:"Short answer — ostomy appliance",
 stem:`1. What is the device in the picture?<br>2. In which disease and procedure is it used?`,
 gray:"8. 8.1 อุปกรณ์ในรูปคืออะไร 8.2 ใช้ในโรค/ภาวะอะไร และใช้ในหัตถการอะไร",
 notes:"เฉลยในไฟล์: ostomy baseplate + pouch · left side colon cancer → Hartmann's procedure",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("8.1 Answer.",4,{tags:["spot"],ans:"<b>Ostomy baseplate (flange) + pouch</b> (two-piece system) · ใช้กับ end colostomy เช่น <b>left-sided colon cancer → Hartmann's procedure</b> · (APR ใน low rectal cancer, ileostomy ใน total colectomy)",rubric:"1/ประเด็น",pts:[CR(P("Ostomy baseplate and pouch","baseplate","pouch","ostomy")),CR(P("Hartmann's procedure","hartmann")),P("Left colon cancer","colon cancer","left"),P("APR or ileostomy","apr","ileostomy")]})
 ),
 interp:"Ostomy appliance",
 summary:["Two-piece: baseplate + pouch","Hartmann's for obstructed left colon cancer"]}),

SA({page:60,orig:"MEQ 9",num:"SA 9",sub:"Pediatric surgery",img:["mm60_1"],title:"Short answer — boy with imperforate anus",
 stem:`1. Diagnosis.<br>2. Management.<br>3. Other associated anomalies.`,
 gray:"9. 9.1 Diagnosis 9.2 Management 9.3 ความผิดปกติอื่นๆที่พบร่วมด้วย",
 notes:"เฉลยในไฟล์: rectourethral fistula · colostomy → PSARP + anal dilatation → close colostomy · vertebral defect, cardiac defect, TE fistula, renal dysplasia, limb anomalies",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 Answer.",6,{tags:["spot"],ans:"<b>Anorectal malformation with rectourethral fistula</b> (เด็กชาย ไม่มี perineal fistula) · <b>colostomy → PSARP + anal dilatation → closure of colostomy</b> · <b>VACTERL</b>: vertebral, cardiac, TE fistula, renal dysplasia, limb",rubric:"1/ประเด็น",pts:[CR(P("ARM with rectourethral fistula","rectourethral","anorectal")),CR(P("Colostomy","colostomy")),CR(P("PSARP","psarp")),P("Anal dilatation and closure","dilat","clos"),CR(P("VACTERL","vacterl","vertebr","cardiac","renal"))]})
 ),
 interp:"ARM",
 summary:["Male: rectourethral most common","Colostomy → PSARP → closure","VACTERL"]}),

SA({page:61,orig:"MEQ 10",num:"SA 10",sub:"Plastic",img:["mm61_1"],title:"Short answer — growing black lesion on the nose",
 stem:`A patient has a black lesion on the nose that keeps growing.<br>1. Diagnosis.<br>2. Management.`,
 gray:"10 ผู้ป่วยมีไฝดำที่จมูก โตขึ้นเรื่อยๆ 10.1 diagnosis 10.2 management",
 notes:"เฉลยในไฟล์: malignant melanoma · Mohs microscopic surgery · sentinel lymph node biopsy",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("10.1 Answer.",4,{tags:["spot"],ans:"<b>Malignant melanoma</b> ของจมูก · biopsy → <b>wide excision (หรือ Mohs ตามคีย์ในไฟล์ — บริเวณใบหน้าเพื่อเก็บเนื้อเยื่อ)</b> + <b>sentinel lymph node biopsy</b> → reconstruction (flap)",rubric:"1/ประเด็น",pts:[CR(P("Melanoma","melanoma")),CR(P("Wide excision or Mohs","excision","mohs")),CR(P("Sentinel node biopsy","sentinel")),P("Reconstruction","flap","reconstruct")]})
 ),
 interp:"Facial melanoma",
 summary:["Biopsy → excision","SLNB","Flap reconstruction"]}),

SA({page:62,orig:"MEQ 11",num:"SA 11",sub:"Others",flag:NOIMG,imgAlt:"ก้อนที่ขาหนีบขวาลงถุงอัณฑะ",title:"Short answer — right groin swelling into the scrotum",
 stem:`A man has a right groin lump descending into the scrotum, which goes back in.<br>1. Diagnosis.<br>2. Two causes.<br>3. Management.`,
 gray:"11. ผู้ป่วยชาย มีก้อนที่ขาหนีบข้างขวาลงมาที่ถุงอัณฑะ เคลื่อนเข้าออกได้ 11.1 diagnosis 11.2 สาเหตุ 2อย่าง 11.3 management",
 notes:"เฉลยในไฟล์: right indirect inguinal hernia · chronic cough, chronic constipation · herniotomy + herniorrhaphy",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("11.1 Answer.",5,{tags:["spot"],ans:"<b>Right indirect inguinal hernia</b> (inguinoscrotal, reducible) · สาเหตุ/risk: <b>chronic cough</b>, <b>chronic constipation</b> (BPH, ยกของหนัก) + patent processus vaginalis · Mx: <b>herniotomy + herniorrhaphy/hernioplasty (Lichtenstein mesh)</b>",rubric:"1/ประเด็น",pts:[CR(P("Indirect inguinal hernia","indirect","inguinal")),P("Chronic cough","cough"),P("Constipation or BPH","constipat","bph"),CR(P("Herniotomy + herniorrhaphy/plasty","herniorrhaphy","hernioplasty","herniotomy","lichtenstein"))]})
 ),
 interp:"Inguinal hernia",
 summary:["Inguinoscrotal = indirect","Raised pressure causes","Lichtenstein mesh repair"]}),

SA({page:63,orig:"MEQ 12",num:"SA 12",sub:"Others",img:["mm63_1"],title:"Short answer — toe ulcers with skin atrophy",
 stem:`1. Diagnosis.<br>2. Further physical examination.<br>3. Risk factors.`,
 gray:"12. 12.1 diagnosis 12.2 ตรวจร่างกายอะไรเพิ่มเติม 12.3 risk factor",
 notes:"เฉลยในไฟล์: chronic arterial insufficiency · ABI, peripheral pulse, ... heart, atrophic change of skin · atherosclerosis, smoking, DM, hyperlipidemia, age, family history",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("12.1 Answer.",6,{tags:["spot"],ans:"<b>Chronic arterial insufficiency (ischemic ulcers)</b> ที่ปลายนิ้วเท้า · ตรวจ: <b>peripheral pulses</b>, <b>ABI</b>, Buerger test, capillary refill, <b>atrophic skin changes</b> (ขนร่วง ผิวมัน เล็บหนา), ตรวจหัวใจ (AF) · risk: <b>atherosclerosis — smoking, DM, hyperlipidemia</b>, HT, อายุ, ประวัติครอบครัว",rubric:"1/ประเด็น",pts:[CR(P("Chronic arterial insufficiency","arterial","ischem","pad")),CR(P("Pulses and ABI","pulse","abi")),P("Trophic changes","atroph","hair","trophic"),CR(P("Smoking","smok")),P("DM, hyperlipidemia","diabet","dm","lipid")]})
 ),
 interp:"Arterial ulcer",
 summary:["Punched-out ulcers at toes","Pulses + ABI","Smoking, DM, DLP"]}),

SA({page:64,orig:"MEQ 13",num:"SA 13",sub:"Breast",img:["mm64_1"],title:"Short answer — swollen arm",
 stem:`The arm is painful and swollen.<br>1. Diagnosis.<br>2. Cause.`,
 gray:"13. แขนปวดบวมแดงร้อน 1. Diagnosis 2. Cause",
 notes:"เฉลยในไฟล์: lymphedema · inadequate lymphatic drainage — post lymph node dissection, post radiation",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("13.1 Answer.",4,{tags:["spot"],ans:"<b>Lymphedema of the arm</b> (± cellulitis ถ้าแดงร้อน) · สาเหตุ: <b>inadequate lymphatic drainage หลัง axillary lymph node dissection</b> และ/หรือ <b>หลังฉายรังสี</b> (มะเร็งเต้านม) · Rx: compression, lymphatic massage, exercise, ดูแลผิว, รักษา cellulitis",rubric:"1/ประเด็น",pts:[CR(P("Lymphedema","lymphedema","lymphoedema")),CR(P("After axillary node dissection","dissection","axill","node")),P("After radiation","radiat"),P("Compression therapy","compress")]})
 ),
 interp:"Arm lymphedema",
 summary:["After ALND ± radiotherapy","Compression + physiotherapy","Watch for cellulitis"]}),

SA({page:65,orig:"MEQ 14",num:"SA 14",sub:"Pediatric surgery",img:["mm65_1"],title:"Short answer — full-term newborn with breathing difficulty",
 stem:`A full-term newborn has difficult breathing with decreased breath sounds on the left.<br>1. Diagnosis.<br>2. Management.`,
 gray:"14 เด็ก full term มี difficult breathing decrease breath sound ข้างซ้าย 14.1 diagnosis 14.2 management",
 notes:"เฉลยในไฟล์: congenital diaphragmatic hernia · intubation + O2 support, NPO, NG tube, IV fluid, correct electrolyte imbalance, routine lab, รอให้ clinical stable → surgery repair",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("14.1 Answer.",5,{tags:["spot"],ans:"<b>Congenital diaphragmatic hernia (left)</b> · <b>intubation + O2</b> (ห้าม bag-mask) · <b>NPO, NG tube</b> · IV fluid, correct electrolyte · lab · <b>stabilize (PHT) แล้วจึงผ่าตัดซ่อม</b>",rubric:"1/ประเด็น",pts:[CR(P("CDH","diaphragm","cdh")),CR(P("Intubation, no bag-mask","intubat","bag")),CR(P("NG decompression, NPO","ng","npo")),P("IV fluid, electrolytes","fluid","electrolyte"),CR(P("Delayed repair after stabilization","stable","delay","repair"))]})
 ),
 interp:"CDH",
 summary:["Intubate, no bag-mask","NG decompression","Stabilize → repair"]})

);
})();

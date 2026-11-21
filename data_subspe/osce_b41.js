(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU68 RoC (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   68 R3 (หัวไฟล์ Rotate 3/2558): OSCE 12 สถานี (SO22 หน้า 60–64; หน้า 63–64 ใบผล patho ไม่นำมาลง) + MEQ 13 ข้อ (SM21 หน้า 75–78 มีเฉลย) */
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
const Co=o=>Object.assign({set:"MDCU68",ro:"RoC",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:61,orig:"1",topic:"proc",sub:"Local anesthesia",ex:1,proc:1,title:"Sterile gloving and local anesthetic injection (simulated patient)",
 stem:`Demonstrate putting on sterile gloves and injecting local anesthetic (draping and skin prep done). A simulated patient sits by the arm model.`,
 gray:"1. จงแสดงการใส่ถุงมือ Sterile และวิธีการฉีดยาชา (ปูผ้าและทำความสะอาดแผลแล้ว) Ans. ข้อนี้จะมีแขนหุ่นมา 1 แขน พร้อมกับป้าคนนึง ... ป้าคนนั้นคือผู้ป่วยจำลอง เวลาจะฉีดยาแกจะร้องโอ้ยยยย ... สรุปคือก่อนฉีดอย่าลืมถามว่าแพ้ยาชาไหม แล้วก็บอกคนไข้ว่าจะฉีดแล้ว",
 notes:"แนวคำตอบในไฟล์: ก่อนฉีดถามแพ้ยาชา และบอกคนไข้ว่าจะฉีด · หัวไฟล์ AC Subspecialties Sx Rotate 3/2558",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 Technique.",6,{tags:["proc"],ans:"Sterile gloving ถูกวิธี · <b>ถามแพ้ยาชา</b> · ตรวจยา · <b>บอกผู้ป่วยก่อนฉีด</b> · แทงผ่านขอบแผล aspirate ฉีดช้า · ปลอบ/สื่อสารกับผู้ป่วยตลอด · ทดสอบชา",rubric:"1/ประเด็น",pts:[CR(P("Sterile gloving","glove")),CR(P("Ask allergy","allerg","แพ้")),CR(P("Warn patient before injecting","warn","บอก")),P("Aspirate","aspirat"),P("Communicate throughout","communic","reassur"),P("Test anesthesia","test")]})
 ),
 interp:"LA with SP",
 summary:["Ask allergy","Warn before needle","Talk to the patient"]}),

/* ===== OSCE 2 ===== */
Co({page:61,orig:"2",topic:"hx",sub:"Acute abdomen",ex:1,title:"History — 22-year-old woman with 6 hours of abdominal pain",
 stem:`A 22-year-old woman has abdominal pain for 6 hours before arrival. Take a history.`,
 gray:"2. ผู้ป่วยหญิง อายุ 22 ปี มาด้วยอาการปวดท้อง 6 ชม. ก่อนมารพ. จงซักประวัติ (Ans. มีโพยอยู่ข้างล่าง)",
 notes:"ไฟล์ระบุว่ามีโพยแนบ (ไม่ได้อยู่ในหน้านี้)",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 History.",8,{tags:["hx"],ans:"SOCRATES: onset, ตำแหน่ง, <b>migration (รอบสะดือ → RLQ)</b>, ลักษณะ, ร้าว · anorexia, N/V, ไข้ · ถ่าย/ปัสสาวะ (dysuria, hematuria) · <b>LMP, ประจำเดือนขาด, เลือดออกทางช่องคลอด, ตกขาว, เพศสัมพันธ์/คุมกำเนิด</b> (ectopic, PID, ovarian torsion/rupture) · ประวัติผ่าตัด, โรคประจำตัว, ยา",rubric:"1/ประเด็น",pts:[CR(P("Onset, site, migration","migrat","onset","ย้าย")),P("Anorexia, N/V, fever","anorexia","vomit","fever"),P("Urinary symptoms","dysuria","urin"),CR(P("LMP and vaginal bleeding","lmp","ประจำเดือน","vaginal")),CR(P("Sexual history / contraception","sexual","contracep","เพศสัมพันธ์","คุม")),P("Discharge (PID)","discharge","ตกขาว"),P("Past history","surgery","drug")]})
 ),
 interp:"RLQ pain young woman",
 summary:["Appendicitis vs gynecologic causes","LMP, sexual history","UPT always"]}),

/* ===== OSCE 3 ===== */
Co({page:61,orig:"3",topic:"pe",sub:"Breast examination",ex:1,title:"Breast examination on a model as if a real patient",
 stem:`A woman comes for a breast examination. Demonstrate it on the model as if on a real patient.`,
 gray:"3. ผู้ป่วยหญิงมารับการตรวจเต้านม จงแสดงการตรวจเต้านมโดยปฏิบัติกับหุ่นให้เหมือนผู้ป่วยจริง Ans. ก่อนคลำอย่าลืมแนะนำตัว ขออนุญาต แล้วก็เรียกพยาบาลด้วยนะ ... คลำได้ก็บรรยายให้อาจารย์ฟัง",
 notes:"แนวคำตอบในไฟล์: แนะนำตัว ขออนุญาต เรียกพยาบาล (chaperone) คลำได้ก็บรรยาย",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("3.1 Examination.",8,{tags:["pe"],ans:"<b>แนะนำตัว ขออนุญาต เรียกพยาบาล (chaperone)</b> · inspection 3 ท่า · palpation ทุก quadrant + axillary tail ด้วย pulp นิ้ว · nipple discharge · <b>axillary, supraclavicular nodes</b> · ตรวจสองข้าง · <b>บรรยายก้อนที่คลำได้</b> (ตำแหน่ง ขนาด consistency mobility)",rubric:"1/ประเด็น",pts:[CR(P("Introduce, consent, chaperone","chaperone","พยาบาล","consent","อนุญาต")),P("Inspection","inspect"),CR(P("Palpate all quadrants","quadrant","palpat")),P("Axillary tail, nipple","tail","nipple"),CR(P("Lymph nodes","axill","supraclav","node")),P("Describe lump","size","mobil","describe","บรรยาย")]})
 ),
 interp:"Breast exam",
 summary:["Chaperone","All quadrants + axillary tail","Nodes"]}),

/* ===== OSCE 4 ===== */
Co({page:61,orig:"4",topic:"img",sub:"Mammogram",title:"Mammogram — films, lesion, diagnosis, investigation",
 stem:`A mammogram is shown.<br>1. Name of investigation and films.<br>2. Describe the lesion.<br>3. Diagnosis.<br>4. Further investigation.`,
 gray:"4. ให้รูป Mammogram มา ถาม 4.1 ชื่อการตรวจ มีฟิล์มอะไรบ้าง 4.2 จงบรรยาย lesion 4.3 Diagnosis 4.4 ส่งตรวจอะไรเพิ่มเติม",
 flag:NOIMG,imgAlt:"Mammogram",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("4.1 Answer.",6,{tags:["img"],ans:"<b>Mammography — CC และ MLO ทั้งสองข้าง</b> · lesion: ตำแหน่ง ขนาด shape <b>margin</b> density <b>calcification</b>, skin/nipple, axillary node · Dx ตาม BI-RADS (spiculated = carcinoma) · <b>US + core needle biopsy</b>",rubric:"1/ประเด็น",pts:[CR(P("CC and MLO","cc","mlo")),CR(P("Describe margin, density, calcification","margin","density","calcif","spicul")),P("BI-RADS / diagnosis","bi-rads","carcinoma"),CR(P("US + core biopsy","biopsy","ultrasound"))]})
 ),
 interp:"Mammogram",
 summary:["CC + MLO","BI-RADS","Core biopsy"]}),

/* ===== OSCE 5 ===== */
Co({page:61,orig:"5",topic:"inst",sub:"Surgical instruments",title:"Vascular graft, mesh, Penrose drain",
 stem:`Name each item (vascular graft, mesh, Penrose drain), its use and the procedure in which it is used.`,
 gray:"5. ให้อุปกรณ์มา 3 อย่าง (Vascular graft, Mesh, Penrose drain) จงบอกชื่ออุปกรณ์ ประโยชน์ และชื่อหัตถการที่ใช้",
 flag:NOIMG,imgAlt:"Vascular graft, mesh, Penrose drain",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Answer.",6,{tags:["inst"],ans:"<b>Vascular graft (Dacron/PTFE)</b> — แทน/bypass หลอดเลือด: <b>AAA repair, aortobifemoral, femoropopliteal bypass</b>, AV graft · <b>Polypropylene mesh</b> — เสริมผนังหน้าท้อง: <b>Lichtenstein hernioplasty</b>, ventral/incisional hernia repair · <b>Penrose drain</b> — passive drain: <b>I&D abscess</b>, appendiceal abscess",rubric:"1/ชิ้น",pts:[CR(P("Vascular graft","graft")),P("AAA repair / bypass","aaa","aneurysm","bypass"),CR(P("Mesh","mesh")),P("Hernioplasty","hernio","lichtenstein"),CR(P("Penrose drain","penrose")),P("Abscess drainage","abscess")]})
 ),
 interp:"Graft, mesh, drain",
 summary:["Graft: AAA, bypass","Mesh: Lichtenstein","Penrose: passive drain"]}),

/* ===== OSCE 6 ===== */
Co({page:61,orig:"6",topic:"img",sub:"Urolithiasis",title:"IVP — 8 films, right hydronephrosis",
 stem:`Eight IVP films show right hydronephrosis.<br>1. Read the IVP.<br>2. Diagnosis.<br>3. Management.`,
 gray:"6. ให้ film IVP มา 8 แผ่น มี hydronephrosis ข้างขวา 6.1 จงอ่านผล IVP 6.2 Diagnosis 6.3 Management (Ans. ข้อนี้มีนิ่วอยู่ที่ UVJ junction ด้านขวา)",
 flag:NOIMG,imgAlt:"IVP 8 แผ่น ไตขวาบวมน้ำ",
 notes:"แนวคำตอบในไฟล์: นิ่วอยู่ที่ UVJ ด้านขวา",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("6.1 Answer.",6,{tags:["img"],ans:"Scout: radio-opacity ใน pelvis ด้านขวา · delayed nephrogram ขวา · <b>right hydronephrosis + hydroureter ถึงระดับ UVJ</b> · Dx: <b>right UVJ (distal ureteric) stone with obstruction</b> · Mx: analgesia (NSAIDs) · ≤5–10 มม. → <b>medical expulsive therapy (tamsulosin)</b> · ใหญ่/ไม่หลุด/ติดเชื้อ → <b>ureteroscopic lithotripsy (URS)</b> หรือ ESWL; infected → DJ/PCN ก่อน",rubric:"1/ประเด็น",pts:[P("Scout opacity","scout","opaque"),CR(P("Hydronephrosis and hydroureter to UVJ","hydroneph","hydroureter","uvj")),CR(P("Distal ureteric (UVJ) stone","uvj","ureteric stone","ureteral stone","vesicoureteric")),P("MET with tamsulosin","tamsulosin","expulsive"),CR(P("URS / ESWL","urs","ureteroscop","eswl")),P("Drain if infected","stent","pcn","dj")]})
 ),
 interp:"UVJ stone",
 summary:["UVJ is the narrowest point","MET ≤10 mm","URS for distal stones"]}),

/* ===== OSCE 7 ===== */
Co({page:61,orig:"7",topic:"img",sub:"Bowel obstruction",img:["mo61_1"],title:"49-year-old with distension and no stool for 2 days",
 stem:`A 49-year-old man has abdominal distension and no stool for 2 days.<br>1. What is the film series and its components?<br>2. Describe.<br>3. Diagnosis.<br>4. Most likely causes.`,
 gray:"7. ชายอายุ 49 ปีมาด้วยท้องอืด ไม่อุจจาระมา 2 วัน 7.1 ฟิล์มเรียกว่าอะไร ประกอบด้วยฟิล์มอะไรบ้าง 7.2 จงบรรยายลักษณะจากฟิล์ม 7.3 จงวินิจฉัย 7.4 บอกโรคที่เป็นไปได้มากที่สุด",
 notes:"แนวคำตอบในไฟล์: different height in the same loop · small bowel obstruction · 1st = adhesion band, 2nd = hernia",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("7.1 Answer.",6,{tags:["img"],ans:"<b>Acute abdomen series</b>: CXR upright, abdomen upright, abdomen supine · dilated small bowel, <b>air-fluid levels ต่างระดับใน loop เดียวกัน</b> · Dx: <b>small bowel obstruction</b> · สาเหตุ: <b>1. adhesion band 2. hernia</b>",rubric:"1/ประเด็น",pts:[CR(P("Acute abdomen series","acute abdomen")),P("Three films","upright","supine"),CR(P("Different-height air-fluid levels","different","air-fluid","air fluid")),CR(P("SBO","small bowel obstruction","sbo")),CR(P("Adhesion then hernia","adhesion","hernia"))]})
 ),
 interp:"SBO",
 summary:["Adhesion > hernia","Different heights in same loop"]}),

/* ===== OSCE 8 ===== */
Co({page:61,orig:"8",topic:"path",sub:"Breast cancer staging",title:"Breast pathology report — TNM staging",
 stem:`A long breast pathology report (about 2 A4 pages) is given: 2 masses, lymph node positive 1/13. Give the TNM staging.`,
 gray:"8. ให้ใบผล patho นมมา ให้อ่าน TNM staging Ans. ใบยาวมากกกกกก ประมาณ 2 หน้า A4 ให้รีบๆ ดูแถวตอนสรุปจะดีกว่า ในโจทย์มี 2 ก้อน ให้ LN positive(1/13) ไม่แน่ใจมี metastasis ป่าว",
 flag:NOIMG,imgAlt:"ใบผลพยาธิวิทยาเต้านม (ไม่ได้นำมาลงเพราะเป็นรายงานผู้ป่วย)",
 notes:"แนวคำตอบในไฟล์: อ่านตอนสรุป · 2 ก้อน · LN 1/13 · ไม่ทราบ metastasis · ใบผลในไฟล์ไม่นำมาลง",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("8.1 Staging.",5,{tags:["path"],ans:"อ่าน synoptic/summary · <b>หลายก้อน → ใช้ขนาดก้อนใหญ่สุดเป็น T + ใส่ (m)</b> เช่น pT2(m) · <b>LN 1/13 positive → pN1a</b> · M: ไม่มีข้อมูล → <b>cM0</b> (AJCC 8th ไม่มี MX — ถ้ายังไม่ได้ทำ staging ให้เขียน cM0 แล้วส่ง staging) · รวม เช่น pT2(m)N1aM0 = stage IIB",rubric:"1/ประเด็น",pts:[CR(P("T by largest tumor with (m)","largest","(m)","multifocal","t2","t1")),CR(P("pN1a for 1 node","n1")),P("cM0 (no MX in AJCC 8th) + staging","m0","staging"),P("Stage grouping","stage")]})
 ),
 interp:"pTNM",
 summary:["Multifocal: largest tumor + (m)","1–3 nodes = pN1a","M needs clinical staging"]}),

/* ===== OSCE 9 ===== */
Co({page:62,orig:"9",topic:"img",sub:"Hepatobiliary",img:["mo62_1"],title:"Recurrent postprandial pain — ultrasound",
 stem:`A man has recurrent abdominal pain after meals; an ultrasound is shown.<br>1. Describe.<br>2. Diagnosis.<br>3. Treatment.`,
 gray:"9. ผู้ชายปวดท้องหลังกินข้าวเป็นๆหายๆ ทำ U/S พบ 9.1 จงบรรยาย 9.2 Diagnosis (Symptomatic gallstone) 9.3 Treatment",
 notes:"แนวคำตอบในไฟล์: symptomatic gallstone",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 Answer.",5,{tags:["img"],ans:"<b>Hyperechoic foci ใน gallbladder with posterior acoustic shadowing</b> (เคลื่อนตามท่า) ผนังไม่หนา ไม่มี pericholecystic fluid · Dx: <b>symptomatic gallstone (biliary colic)</b> · Rx: <b>elective laparoscopic cholecystectomy</b>",rubric:"1/ประเด็น",pts:[CR(P("Echogenic stones with shadow","hyperecho","shadow","echogenic")),P("No wall thickening","wall"),CR(P("Symptomatic gallstone","gallstone","cholelith")),CR(P("Lap cholecystectomy","cholecystectomy"))]})
 ),
 interp:"Symptomatic gallstone",
 summary:["Stones + shadow","Elective LC"]}),

/* ===== OSCE 10 ===== */
Co({page:62,orig:"10",topic:"inst",sub:"Suture materials",img:["mo62_3","mo62_4","mo62_5"],title:"Three sutures — name, properties, use",
 stem:`Three sutures are laid out (pictures 1–3).<br>1. Name.<br>2. Properties.<br>3. Use.`,
 gray:"10. วางไหมมา 3 ชนิด 10.1 จงบอกชื่อของไหม 10.2 คุณสมบัติ 10.3 การใช้งาน",
 notes:"ไม่มีเฉลยในไฟล์ · Claude อ่านรูป: 1 เส้นสีน้ำตาลเหลือง = chromic catgut, 2 เส้นสีฟ้า = Prolene, 3 เส้นดำ = silk (หรือ nylon)",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("10.1 Answer.",6,{tags:["inst"],ans:"1 <b>Chromic catgut</b> — natural, multifilament, absorbable → mucosa, perineum · 2 <b>Prolene (polypropylene)</b> — synthetic, monofilament, non-absorbable → vascular anastomosis, hernia, skin · 3 <b>Silk</b> — natural, braided, non-absorbable → ligation, ยึด drain (ถ้าเส้นดำ monofilament = nylon → skin)",rubric:"1/ประเด็น",pts:[CR(P("Chromic catgut","catgut")),P("Catgut properties/use","natural","absorb","mucosa","perineum"),CR(P("Prolene","prolene","polypropylene")),P("Prolene use","vascular","vessel"),CR(P("Silk or nylon","silk","nylon")),P("Silk use: ligation","ligat","tie")]})
 ),
 interp:"Sutures",
 summary:["Catgut: natural absorbable","Prolene: vessels","Silk: ligation"]}),

/* ===== OSCE 11 ===== */
Co({page:62,orig:"11",topic:"inst",sub:"Urinary catheter",img:["mo62_2"],title:"Three-way Foley catheter",
 stem:`1. Name of the device.<br>2. Indication.`,
 gray:"11. 11.1 จงบอกชื่ออุปกรณ์ (3 way Foley Catheter) 11.2 Indication",
 notes:"แนวคำตอบในไฟล์: 3 way Foley catheter",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("11.1 Answer.",4,{tags:["inst"],ans:"<b>Three-way Foley catheter</b> · <b>continuous bladder irrigation</b>",rubric:"1/ประเด็น",pts:[CR(P("Three-way","3-way","three-way","3 way","three way")),CR(P("Continuous bladder irrigation","irrigat"))]})
 ),
 interp:"3-way Foley",
 summary:["CBI"]}),

/* ===== OSCE 12 ===== */
Co({page:62,orig:"12",topic:"pe",sub:"Prostate",ex:1,proc:1,title:"Thai man with LUTS — PR on model",
 stem:`A Thai man in his fifties has difficulty voiding, incomplete emptying and frequency (PR on a model).<br>1. Describe the mass.<br>2. Diagnosis.<br>3. Treatment.`,
 gray:"12. ชายไทยอายุ 5x ปี มาด้วยอาการปัสสาวะลำบาก ปัสสาวะไม่สุด ปัสสาวะบ่อย (PR หุ่นจำลอง) 12.1 จงบรรยายลักษณะก้อน 12.2 จงให้การวินิจฉัย 12.3 จงบอกวิธีการรักษา Ans. น่าจะตอบ BPH มั้งนะ",
 notes:"แนวคำตอบในไฟล์: น่าจะ BPH",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("12.1 Answer.",6,{tags:["pe"],ans:"Prostate <b>โต เรียบ rubbery median sulcus คลำได้ ไม่เจ็บ</b> · Dx: <b>BPH</b> · Rx: IPSS, UA, PSA, Cr, PVR · mild → watchful waiting + lifestyle · moderate–severe → <b>alpha-blocker (tamsulosin/doxazosin)</b> ± <b>5-alpha reductase inhibitor (finasteride)</b> ถ้า prostate >30–40 g · failure/complication (retention, stone, hematuria, renal impairment) → <b>TURP</b>",rubric:"1/ประเด็น",pts:[CR(P("Smooth rubbery enlarged","smooth","rubbery","enlarg")),CR(P("BPH","bph")),CR(P("Alpha-blocker","alpha","tamsulosin","doxazosin")),P("5-ARI","finasteride","5-alpha","dutasteride"),CR(P("TURP for failure/complications","turp"))]})
 ),
 interp:"BPH",
 summary:["Alpha-blocker ± 5-ARI","TURP for complications","Check PSA"]}),

/* ===== MEQ ===== */
SA({page:76,orig:"MEQ 1",num:"SA 1",sub:"Others",img:["mm76_1"],title:"Short answer — painful black fingertips",
 stem:`A patient has finger pain with fingertips that look as shown.<br>1. Diagnosis.<br>2. Treatment.`,
 gray:"1. ผู้ป่วยมาด้วยอาการปวดนิ้ว มีนิ้วลักษณะนิ้วมือที่ดำขึ้น 1.1 Diagnosis 1.2 Treatment",
 notes:"เฉลยในไฟล์: chronic arterial occlusion (thromboangiitis obliterans?) · lifestyle modification e.g. smoking cessation, ATB prophylaxis and amputation?, revascularization?",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("1.1 Answer.",5,{tags:["spot"],ans:"<b>Chronic arterial occlusion with digital gangrene</b> — นึกถึง <b>thromboangiitis obliterans (Buerger)</b> ในชายสูบบุหรี่ · Rx: <b>หยุดบุหรี่</b>, wound care, antibiotic ถ้าติดเชื้อ, vasodilator/iloprost, รอ demarcation → <b>amputation</b>; revascularization ถ้ามี target vessel",rubric:"1/ประเด็น",pts:[CR(P("Chronic arterial occlusion / Buerger","arterial","buerger","thromboangiitis","ischem")),CR(P("Smoking cessation","smok","บุหรี่")),P("Antibiotic / wound care","antibiot","wound"),P("Amputation","amput"),P("Revascularization","revascular")]})
 ),
 interp:"Digital ischemia",
 summary:["Stop smoking","Amputation after demarcation"]}),

SA({page:76,orig:"MEQ 2",num:"SA 2",sub:"Pediatric surgery",img:["mm76_3"],title:"Short answer — boy with right groin swelling",
 stem:`1. Diagnosis.<br>2. Treatment.`,
 gray:"2. 2.1 Diagnosis 2.2 Treatment",
 notes:"เฉลยในไฟล์: right indirect inguinal hernia · right transinguinal herniotomy",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("2.1 Answer.",3,{tags:["spot"],ans:"<b>Right indirect inguinal hernia</b> · <b>right transinguinal herniotomy</b> (high ligation of sac) โดยเร็ว",rubric:"1/ประเด็น",pts:[CR(P("Indirect inguinal hernia","inguinal")),CR(P("Herniotomy","herniotomy"))]})
 ),
 interp:"Pediatric IIH",
 summary:["Herniotomy, no mesh"]}),

SA({page:76,orig:"MEQ 3",num:"SA 3",sub:"Colorectal",img:["mm76_5"],title:"Short answer — colonoscopy",
 stem:`1. What is this investigation?<br>2. Give 4 indications.`,
 gray:"3. 3.1 การตรวจชื่ออะไร 3.2 จงบอก indication ของการตรวจนี้ 4 ข้อ",
 notes:"เฉลยในไฟล์: flexible colonoscopy",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("3.1 Answer.",5,{tags:["spot"],ans:"<b>Flexible colonoscopy</b> · LGIB/FIT+, change in bowel habit, IDA, CRC screening/surveillance, polyp, IBD",rubric:"1/ประเด็น",pts:[CR(P("Colonoscopy","colonoscop")),P("Bleeding","bleed"),P("Bowel habit","habit"),P("Anemia","anemia"),P("Screening","screen","surveil")]})
 ),
 interp:"Colonoscopy",
 summary:["Bleeding, habit, IDA, screening"]}),

SA({page:76,orig:"MEQ 4",num:"SA 4",sub:"Anorectal",img:["mm76_2"],title:"Short answer — anal lesion seen through a speculum",
 stem:`1. Describe the lesion.<br>2. Diagnosis.<br>3. Treatment.`,
 gray:"4. 4.1 จงบรรยายลักษณะ lesion 4.2 Diagnosis 4.3 Treatment",
 notes:"เฉลยในไฟล์: hypertrophic anal papilla, sentinel pile, fibrotic edge · chronic anal fissure · lifestyle modification → NTG ointment → botox injection → LIS",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("4.1 Answer.",5,{tags:["spot"],ans:"<b>Hypertrophic anal papilla, sentinel pile, fibrotic edge</b> (เห็น internal sphincter fibers ที่ฐาน) · Dx: <b>chronic anal fissure</b> · Rx: <b>lifestyle (fiber, sitz bath) → NTG/diltiazem ointment → botox injection → lateral internal sphincterotomy</b>",rubric:"1/ประเด็น",pts:[CR(P("Sentinel pile, hypertrophied papilla","sentinel","papilla")),P("Fibrotic edge","fibrot","edge"),CR(P("Chronic anal fissure","fissure")),P("NTG/diltiazem","ntg","nitro","diltiazem"),CR(P("LIS","sphincterotomy","lis")),P("Botox","botox","botulinum")]})
 ),
 interp:"Chronic fissure",
 summary:["Triad: sentinel pile, papilla, fissure","GTN → botox → LIS"]}),

SA({page:76,orig:"MEQ 5",num:"SA 5",sub:"Neuro",flag:NOIMG,imgAlt:"ไม่มีรูป",title:"Short answer — head injury with 5 minutes of unconsciousness",
 stem:`A patient was hit on the head and lost consciousness for 5 minutes; symptoms are described.<br>1. GCS.<br>2. Neurological signs likely to be found.`,
 gray:"5. โดนตีหัว สลบไป 5 min บอกอาการ 5.1 ถาม GCS 5.2 neuro sign ที่น่าจะพบ",
 notes:"เฉลยในไฟล์: signs of increased ICP, uncal herniation, cushing triad · ไม่มีรายละเอียดเคสสำหรับคำนวณ GCS",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("5.1 Answer.",4,{tags:["spot"],ans:"GCS = E+V+M ตามอาการในโจทย์ · signs: <b>↑ICP</b> (ปวดหัว อาเจียน papilledema, CN VI palsy) · <b>uncal herniation</b> (ipsilateral dilated pupil, contralateral hemiparesis) · <b>Cushing triad</b> (HT, bradycardia, irregular respiration) · lucid interval (EDH)",rubric:"1/ประเด็น",pts:[P("GCS components","e","v","m","gcs"),CR(P("Increased ICP signs","icp","papilled","vomit")),CR(P("Uncal herniation","uncal","pupil")),CR(P("Cushing triad","cushing"))]})
 ),
 interp:"Head injury",
 summary:["↑ICP, uncal herniation, Cushing triad"]}),

SA({page:76,orig:"MEQ 6",num:"SA 6",sub:"Others",img:["mm76_4"],title:"Short answer — red hot lump on the arm",
 stem:`A lump on the arm for 3 months; for 3 days it has been painful, swollen, red and hot.<br>1. Diagnosis.<br>2. Management.`,
 gray:"6. ผู้ป่วยมาด้วยก้อนที่แขนดังภาพ เป็นมานาน 3 เดือน ขณะนี้ ปวด บวม แดง ร้อน มา 3 วัน 6.1 Diagnosis 6.2 Management",
 notes:"เฉลยในไฟล์: furuncle (เป็นก้อนจากเม็ดสิวเอารูปมา) · I&D + ATB · (ประวัติ 3 เดือนเข้ากับ infected epidermal cyst ด้วย)",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("6.1 Answer.",4,{tags:["spot"],ans:"<b>Furuncle</b> (ตามคีย์ในไฟล์) / infected epidermal cyst (ก้อนเดิม 3 เดือน) · <b>incision and drainage + antibiotic</b> (dicloxacillin/cephalexin) · cyst → excision ภายหลัง",rubric:"1/ประเด็น",pts:[CR(P("Furuncle / infected cyst","furuncle","cyst","abscess")),CR(P("I&D","incision","drain","i&d")),P("Antibiotic","antibiot","atb")]})
 ),
 interp:"Furuncle",
 summary:["I&D + antibiotic"]}),

SA({page:77,orig:"MEQ 7",num:"SA 7",sub:"Others",img:["mm77_1"],title:"Short answer — CXR with free air",
 stem:`1. Describe the CXR.<br>2. Two differential diagnoses.<br>3. Treatment.`,
 gray:"7. 7.1 จงบรรยาย CXR 7.2 Differential diagnosis 2 โรค 7.3 Treatment",
 notes:"เฉลยในไฟล์: free air under diaphragm both sides · peptic ulcer perforation, bowel perforation · explore laparotomy",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("7.1 Answer.",5,{tags:["spot"],ans:"<b>Free air under both hemidiaphragms</b> · DDx: <b>perforated peptic ulcer</b>, <b>bowel perforation</b> · Rx: resuscitation, NPO, NG, IV antibiotic, PPI → <b>exploratory laparotomy</b> (graham patch/repair)",rubric:"1/ประเด็น",pts:[CR(P("Free air under diaphragm","free air")),CR(P("Perforated peptic ulcer","peptic","ulcer")),P("Bowel perforation","bowel"),CR(P("Exploratory laparotomy","laparotomy","explor"))]})
 ),
 interp:"Pneumoperitoneum",
 summary:["Free air = perforation","Explore"]}),

SA({page:77,orig:"MEQ 8",num:"SA 8",sub:"Plastic",img:["mm77_3"],title:"Short answer — cleft lip: timing and reasons",
 stem:`1. Diagnosis.<br>2. Appropriate age for surgery with reasons.`,
 gray:"8. 8.1 Diagnosis 8.2 จงบอกอายุที่เหมาะสมที่จะผ่าตัดแก้ไข พร้อมเหตุผล",
 notes:"เฉลยในไฟล์: left unilateral complete cleft lip · 10 wk · psychi, safety by rule of ten, technical feasibility",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("8.1 Answer.",5,{tags:["spot"],ans:"<b>Left unilateral complete cleft lip</b> · <b>10 สัปดาห์</b> · เหตุผล: <b>psychological</b> (ครอบครัว), <b>safety by rule of ten</b>, <b>technical feasibility</b> (เนื้อเยื่อใหญ่พอ)",rubric:"1/ประเด็น",pts:[CR(P("Cleft lip","cleft lip")),CR(P("10 weeks","10")),P("Psychological","psych"),CR(P("Rule of ten","rule")),P("Technical feasibility","technic","feasib")]})
 ),
 interp:"Cleft lip",
 summary:["10 weeks","Rule of 10s"]}),

SA({page:77,orig:"MEQ 9",num:"SA 9",sub:"Plastic",img:["mm77_5"],title:"Short answer — pressure sore",
 stem:`1. In what position was the patient to get this lesion?<br>2. Which bone?`,
 gray:"9. 9.1 ถามว่าผู้ป่วยอยู่ในท่าใดถึงเกิด lesion นี้ 9.2 โดนกระดูกอะไร",
 notes:"เฉลยในไฟล์: supine · sacrum",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 Answer.",2,{tags:["spot"],ans:"<b>Supine</b> · <b>sacrum</b>",rubric:"1/ประเด็น",pts:[CR(P("Supine","supine","หงาย")),CR(P("Sacrum","sacr"))]})
 ),
 interp:"Pressure sore",
 summary:["Supine → sacrum"]}),

SA({page:77,orig:"MEQ 10",num:"SA 10",sub:"Pediatric surgery",img:["mm77_2"],title:"Short answer — newborn with imperforate anus",
 stem:`A newborn with imperforate anus.<br>1. Diagnosis.<br>2. Management.`,
 gray:"10. Newborn with imperforated anus 10.1 Diagnosis 10.2 Management",
 notes:"เฉลยในไฟล์: rectourethral fistula · colostomy → PSARP + anal dilatation → ปิด colostomy",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("10.1 Answer.",4,{tags:["spot"],ans:"<b>Anorectal malformation with rectourethral fistula</b> · <b>colostomy → PSARP + anal dilatation → colostomy closure</b>",rubric:"1/ประเด็น",pts:[CR(P("Rectourethral fistula / ARM","rectourethral","anorectal")),CR(P("Colostomy","colostomy")),CR(P("PSARP","psarp")),P("Closure","clos","ปิด")]})
 ),
 interp:"ARM",
 summary:["Colostomy → PSARP → closure"]}),

SA({page:77,orig:"MEQ 11",num:"SA 11",sub:"Colorectal",img:["mm77_4"],title:"Short answer — colostomy bag",
 stem:`1. What is this device?<br>2. Name 2 diseases in which it is used, with the operation.`,
 gray:"11. 11.1 อุปกรณ์นี้ชื่ออะไร 11.2 จงบอกชื่อโรคที่ใช้อุปกรณ์นี้ พร้อมชื่อการผ่ามา 2 อย่าง",
 notes:"เฉลยในไฟล์: ostomy baseplate + pouch · left side colon cancer → Hartmann's procedure · CA rectum involve sphincter → APR",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("11.1 Answer.",4,{tags:["spot"],ans:"<b>Ostomy baseplate + pouch (colostomy bag)</b> · <b>left-sided colon cancer → Hartmann's procedure</b> · <b>rectal cancer involving sphincter → APR</b>",rubric:"1/ประเด็น",pts:[CR(P("Ostomy/colostomy bag","ostomy","colostomy")),CR(P("Hartmann's","hartmann")),CR(P("APR","apr","abdominoperineal"))]})
 ),
 interp:"Colostomy",
 summary:["Hartmann's","APR"]}),

SA({page:77,orig:"MEQ 12",num:"SA 12",sub:"Burn",flag:NOIMG,imgAlt:"แผลไฟไหม้",title:"Short answer — burn depth and care",
 stem:`A picture of a burn wound.<br>1. How deep is it?<br>2. How do you care for it?`,
 gray:"12. ให้รูปแผล burn ถามว่า 12.1 แผลลึกระดับไหน 12.2 ดูแลแผลยังไง",
 notes:"ไม่มีเฉลยในไฟล์ · ไม่มีรูป",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("12.1 Answer.",4,{tags:["spot"],ans:"ประเมินความลึก: superficial (epidermis, แดง เจ็บ ไม่มี blister) · <b>superficial partial</b> (blister, ชื้น, blanch, เจ็บมาก) · <b>deep partial</b> (blanch ช้า, เจ็บน้อย) · <b>full thickness</b> (ขาว/หนัง ไม่เจ็บ) · ดูแล: ล้าง NSS, debride blister ใหญ่, topical (silver sulfadiazine)/biologic dressing; deep/full → excision + STSG · tetanus, analgesia",rubric:"1/ประเด็น",pts:[CR(P("Correct depth by features","partial","full","superficial","deep")),P("Clean and debride","clean","debride","nss"),CR(P("Topical/dressing","silver","dressing","topical")),P("Graft for deep/full","graft","excision")]})
 ),
 interp:"Burn depth",
 summary:["Blanching and pain guide depth","Deep → excision + graft"]}),

SA({page:78,orig:"MEQ 13",num:"SA 13",sub:"Pediatric surgery",img:["mm78_1"],title:"Short answer — neonatal chest film",
 stem:`1. Diagnosis.<br>2. Management.`,
 gray:"13. 13.1 Diagnosis 13.2 Management",
 notes:"เฉลยในไฟล์: congenital diaphragmatic hernia · intubation, O2 support · NPO, IV fluid, electrolyte correction · clinically stable → then surgical treatment",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("13.1 Answer.",5,{tags:["spot"],ans:"<b>Congenital diaphragmatic hernia</b> · <b>intubation, O2</b> (ไม่ bag-mask) · <b>NPO, NG</b>, IV fluid, electrolyte · <b>clinically stable → surgical repair</b>",rubric:"1/ประเด็น",pts:[CR(P("CDH","diaphragm","cdh")),CR(P("Intubation","intubat")),P("NPO, NG, IV fluid","npo","ng","fluid"),CR(P("Delayed surgery when stable","stable","delay"))]})
 ),
 interp:"CDH",
 summary:["Intubate","Stabilize → repair"]})

);
})();

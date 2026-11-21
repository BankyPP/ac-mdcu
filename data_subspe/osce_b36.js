(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU70 RoB (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   70 R2 (หัวไฟล์ Rotate D MDCU70): OSCE 9 สถานี (SO22 หน้า 36–38) + MEQ 12 ข้อ (SM21 หน้า 41–43) */
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
const Co=o=>Object.assign({set:"MDCU70",ro:"RoB",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:37,orig:"1",topic:"suture",sub:"Vertical mattress",ex:1,proc:1,title:"Gloves, local anesthesia, vertical mattress with instrument tie",
 stem:`Put on gloves, inject local anesthesia, place 1 vertical mattress suture and tie with instruments.`,
 gray:"1. ใส่ถุงมือ ฉีดยา เย็บ vertical matress1strip + ผูกด้วยเครื่องมือ",
 notes:"ไม่มีเฉลยในไฟล์ · หัวไฟล์ OSCE surgery Rotate D MDCU70",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Technique.",7,{tags:["suture"],ans:"Sterile gloving · ทำความสะอาด · ยาชา lidocaine (ถามแพ้ยา, aspirate) ทดสอบชา · <b>far-far → near-near</b> · <b>instrument tie</b>: พันไหมรอบ needle holder 2 รอบ แล้ว 1 รอบสลับทิศ (square) · ปมข้างแผล evert",rubric:"1/ประเด็น",pts:[P("Sterile gloves","glove","ถุงมือ"),P("Local anesthesia with aspiration","aspirat","lidocaine"),CR(P("Far-far","far")),CR(P("Near-near","near")),CR(P("Instrument tie square","instrument","square","พัน")),P("Eversion","evert")]})
 ),
 interp:"VM + instrument tie",
 summary:["Far-far, near-near","Instrument tie: double then single reversed","Test anesthesia first"]}),

/* ===== OSCE 2 ===== */
Co({page:37,orig:"2",topic:"hx",sub:"Hepatobiliary",ex:1,title:"History — woman with 3 months of epigastric pain",
 stem:`A woman has had abdominal pain for 3 months (epigastric pain lasting 15–30 minutes, worse after meals...).<br>Take a history and choose 1 investigation.`,
 gray:"2. ซักประวัติผู้ป่วย หญิง ให้CC:ปวดท้องนาน3เดือน และจะส่ง investigation อะไร 1 อย่าง (epigastium pain ปวดตื้อๆ15-30min กินอาหารแล้วปวดมากขึ้น...)",
 notes:"แนวคำตอบในไฟล์: transabdominal ultrasound",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("2.1 History.",6,{tags:["hx"],ans:"ลักษณะปวด ตำแหน่ง ร้าวไปสะบักขวา/หลัง · <b>สัมพันธ์กับอาหาร (มัน)</b> · ระยะเวลา (biliary colic <6 ชม.) · คลื่นไส้อาเจียน · ไข้ · <b>ดีซ่าน ปัสสาวะเข้ม อุจจาระซีด</b> · แยก peptic ulcer (ปวดตอนหิว, NSAIDs), GERD, pancreatitis · น้ำหนักลด กลืนลำบาก ถ่ายดำ (alarm features) · risk gallstone (หญิง อ้วน 40, หลายลูก)",rubric:"1/ประเด็น",pts:[CR(P("Pain character, radiation, relation to meal","meal","อาหาร","radiat","ร้าว")),P("Nausea/vomiting, fever","nause","fever"),CR(P("Jaundice, dark urine, pale stool","jaundice","เหลือง","pale")),P("Peptic ulcer features / NSAIDs","nsaid","ulcer","hunger","หิว"),CR(P("Alarm features","weight","melena","dysphag","alarm")),P("Gallstone risk factors","female","obes","risk")]}),
  BS("2.2 Investigation.",2,{tags:["hx"],ans:"<b>Transabdominal ultrasound</b> (gallstone)",rubric:"ได้",pts:[CR(P("Ultrasound","ultrasound","us","usg"))]})
 ),
 interp:"Biliary colic",
 summary:["Postprandial epigastric/RUQ pain","Ask jaundice and alarm features","US first"]}),

/* ===== OSCE 3 ===== */
Co({page:37,orig:"3",topic:"proc",sub:"Anorectal exam",ex:1,proc:1,title:"PR in a patient with rectal bleeding",
 stem:`Demonstrate PR examination for a patient presenting with bleeding per rectum.`,
 gray:"3. แสดงการตรวจ PR ผู้ป่วยมาด้วยถ่ายเป็นเลือด",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Technique.",6,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต chaperone · left lateral · inspection (hemorrhoid, fissure, fistula) · lubricate บอกก่อนสอด · คลำ 360° (mass, tenderness) · anal tone · ดูถุงมือ (เลือดสด/คล้ำ, mucus) · เช็ด รายงาน",rubric:"1/ประเด็น",pts:[P("Consent, chaperone","consent","chaperone"),P("Left lateral","left lateral"),CR(P("Inspection","inspect")),CR(P("Palpate 360","360","palpat")),P("Anal tone","tone","ขมิบ"),CR(P("Inspect glove","glove","ถุงมือ"))]})
 ),
 interp:"PR",
 summary:["Inspect first","360° palpation","Check glove"]}),

/* ===== OSCE 4 ===== */
Co({page:37,orig:"4",topic:"img",sub:"Colorectal",img:["mo37_1"],title:"Barium enema — read the film",
 stem:`A barium enema film is shown. Read the film.`,
 gray:"4. เรื่องx-ray Ba enema ให้อ่านฟิล์ม",
 notes:"ไม่มีเฉลยในไฟล์ · Claude อ่าน: ส่วน descending/sigmoid colon ตีบยาว ผิวไม่เรียบ",opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไม่มีเฉลยในไฟล์ · barium enema ในรูปอ่านยาก — ยืนยันจากแหล่งอ้างอิงไม่ได้ว่าข้อสอบต้องการโรคใด คงคำตอบ segment ตีบขอบไม่เรียบ → DDx colorectal carcinoma (apple-core), diverticular stricture, IBD, ischemic colitis → colonoscopy + biopsy เพื่อยืนยัน (NCCN Colon Cancer 2025) · ความมั่นใจต่ำ",
 parts:S(
  B("4.1 Interpretation.",4,{tags:["img"],ans:"<b>Double-contrast barium enema</b> · มี <b>segment ตีบแคบ ขอบไม่เรียบ</b> ที่ descending/sigmoid colon → ddx <b>colorectal carcinoma (apple-core/annular lesion)</b>, stricture จาก diverticular disease, IBD, ischemic colitis · → <b>colonoscopy with biopsy</b>",rubric:"1/ประเด็น",pts:[CR(P("Barium enema","barium","enema")),CR(P("Narrowed irregular segment","narrow","stricture","apple","annular","ตีบ")),P("Carcinoma in DDx","carcinoma","cancer"),P("Colonoscopy with biopsy","colonoscop","biopsy")]})
 ),
 interp:"Ba enema stricture",
 summary:["Apple-core = annular carcinoma","DDx: diverticular, IBD, ischemic stricture","Colonoscopy + biopsy"]}),

/* ===== OSCE 5 ===== */
Co({page:37,orig:"5",topic:"inst",sub:"Surgical instruments",title:"Vascular graft, chest tube, Redivac, Metzenbaum, Babcock",
 stem:`Five instruments A–E are on the table. Name each and its use.<br>A vascular graft · B chest tube · C Redivac · D curved Metzenbaum scissors · E Babcock forceps`,
 gray:"5. มีเครื่องมือวางบนโต๊ะ5อันแปะป้ายA-E ให้บอกชื่อ+การใช้งาน A Vascular graft B Chest tube C Redivac D Curved Metzenbaum scissors E Babcock forceps",
 flag:NOIMG,imgAlt:"Vascular graft, chest tube, Redivac drain, Metzenbaum scissors, Babcock forceps",
 notes:"แนวคำตอบในไฟล์: chest tube or thoracostomy tube = to appose the parietal and visceral pleura by draining blood, pus, fluid, chyle, or air",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 Uses.",5,{tags:["inst"],ans:"A <b>Vascular graft</b> (Dacron/PTFE) — bypass/แทนหลอดเลือด เช่น AAA repair, fem-pop bypass · B <b>Chest tube</b> — ระบายเลือด หนอง น้ำ chyle หรือลม ให้ parietal และ visceral pleura แนบกัน · C <b>Redivac</b> — closed high-vacuum drain หลังผ่าตัด · D <b>Curved Metzenbaum</b> — ตัด/เลาะเนื้อเยื่อบอบบาง · E <b>Babcock</b> — จับเนื้อเยื่อบอบบางแบบ atraumatic (ลำไส้ ไส้ติ่ง)",rubric:"1/ชิ้น",pts:[P("Vascular graft — bypass","graft","bypass"),CR(P("Chest tube — drain pleura","chest","pleura","thoracostomy")),P("Redivac — closed suction","redivac","vacuum"),P("Metzenbaum — delicate","metzenbaum","delicate"),CR(P("Babcock — atraumatic","babcock","atraumatic"))]})
 ),
 interp:"Instruments",
 summary:["Babcock = atraumatic","Redivac = closed high vacuum","Graft: Dacron/PTFE"]}),

/* ===== OSCE 6 ===== */
Co({page:37,orig:"6",topic:"suture",sub:"Suture selection",title:"Suture for radial artery, vein ligation, subcutaneous, skin",
 stem:`A patient has an injury needing repair of the radial artery, ligation of a vein, subcutaneous and skin closure. Choose the suture for each in order and state trade name, filament type and absorbability (packets A–E with names hidden).`,
 gray:"6. ผู้ป่วยได้รับอุบัติเหตุจำเป็นต้องเย็บ radial artery, ผูก vein, เย็บ subcu, เย็บ skin ต้องใช้ไหมแบบใดตามลำดับ และบอกด้วยว่าไหมที่ตอบมีชื่อการค้า เส้นใย การabsorbด้วย //ให้ช้อยA-Eเป็นไหมจริงปิดชื่อ (ตอบ prolene, silk, vicryl, nylon)",
 flag:NOIMG,imgAlt:"ซองไหม A–E ปิดชื่อ",
 notes:"แนวคำตอบในไฟล์: prolene, silk, vicryl, nylon",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("6.1 Choices.",4,{tags:["suture"],ans:"Radial artery → <b>Prolene (polypropylene)</b> synthetic monofilament non-absorbable · ผูก vein → <b>silk</b> natural multifilament non-absorbable · subcutaneous → <b>Vicryl (polyglactin 910)</b> synthetic multifilament absorbable · skin → <b>nylon (Ethilon/Dafilon)</b> synthetic monofilament non-absorbable",rubric:"1/ข้อ",pts:[CR(P("Artery: Prolene","prolene","polypropylene")),P("Vein ligation: silk","silk"),P("Subcutaneous: Vicryl","vicryl"),CR(P("Skin: nylon","nylon"))]})
 ),
 interp:"Suture choice",
 summary:["Vessel anastomosis = Prolene","Ligation = silk","Subcu Vicryl, skin nylon"]}),

/* ===== OSCE 7 ===== */
Co({page:37,orig:"9",topic:"pe",sub:"Prostate",ex:1,proc:1,title:"PR on a prostate model",
 stem:`Perform PR on the model.<br>A. Describe the findings.<br>B. Give the diagnosis.`,
 gray:"9. มีหุ่นเจ้าเดิม ให้PR (คลำ prostate) A. อธิบายสิ่งที่พบ B. diagnosis",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("7.1 Findings and diagnosis.",5,{tags:["pe"],ans:"ขนาด, ผิว (smooth/nodular), consistency (rubbery/hard), median sulcus, tenderness · โตเรียบ rubbery sulcus มี → <b>BPH</b> · แข็งเป็นปุ่ม sulcus หาย → <b>CA prostate</b> → PSA + biopsy",rubric:"1/ประเด็น",pts:[CR(P("Size","size","enlarg","ขนาด")),P("Surface","smooth","nodul"),CR(P("Consistency","rubbery","hard","firm")),P("Median sulcus","sulcus"),CR(P("BPH or carcinoma","bph","carcinoma","cancer"))]})
 ),
 interp:"DRE prostate",
 summary:["BPH: smooth rubbery","CA: hard nodular","Sulcus lost in CA"]}),

/* ===== OSCE 8 ===== */
Co({page:37,orig:"10",topic:"spot",sub:"Uro/Genital",img:["mo38_1"],title:"Penile mass for 3 months",
 stem:`A man has had a penile lesion for 3 months; it is not painful. Give the diagnosis and management.`,
 gray:"10.ผู้ชายมีแผลที่อวัยวะเพศมา 3 เดือน ไม่เจ็บแผล จงวินิจฉัย management",
 notes:"เฉลยในไฟล์: Dx squamous cell carcinoma of penis · Mx incisional biopsy → circumcision/partial penectomy/total penectomy + groin LN dissection",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("8.1 Diagnosis and management.",5,{tags:["spot"],ans:"<b>Squamous cell carcinoma of the penis</b> (exophytic fungating mass, uncircumcised, HPV, phimosis) · <b>incisional biopsy</b> · ตามขนาด/ตำแหน่ง: <b>circumcision/wide excision (prepuce) → partial penectomy (margin) → total penectomy + perineal urethrostomy</b> · <b>inguinal (groin) lymph node dissection</b> ตาม risk",rubric:"1/ประเด็น",pts:[CR(P("SCC of penis","squamous","scc","carcinoma")),CR(P("Biopsy","biopsy")),CR(P("Penectomy / circumcision by extent","penectomy","circumcis","excision")),P("Inguinal lymph node dissection","inguinal","groin","lymph")]})
 ),
 interp:"Penile SCC",
 summary:["Risk: phimosis, uncircumcised, HPV","Biopsy → partial/total penectomy","Inguinal node dissection"]}),

/* ===== OSCE 9 ===== */
Co({page:38,orig:"12",topic:"proc",sub:"Skin prep and draping",ex:1,proc:1,title:"Gloving, draping and skin preparation",
 stem:`Demonstrate gloving, draping and cleaning of the wound area (cotton/gauze is provided).`,
 gray:"12. ให้แสดงการใส่ถุงมือ+คลุมผ้า+ทำความสะอาดแผล (มีแขนเทียมให้) **ใน checklist(อาจารย์เอาให้ดูหลังสอบ แปบนึง) เห็นมีตัวเข้มว่า ต้องใช้ sponge คีบ",
 notes:"แนวคำตอบในไฟล์: ใน checklist เน้นว่า ต้องใช้ sponge holder คีบ",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 Technique.",6,{tags:["proc"],ans:"Sterile gloving · <b>ใช้ sponge-holding forceps คีบ gauze</b> ชุบ antiseptic (povidone/chlorhexidine) — ไม่ใช้มือ · <b>ทาจากแผล/จุดผ่าออกด้านนอก</b> เป็นวงกว้าง ไม่ย้อนกลับ เปลี่ยน gauze ทุกรอบ · ทา 2–3 รอบ รอแห้ง · <b>คลุมผ้า sterile</b> เหลือเฉพาะบริเวณทำหัตถการ",rubric:"1/ประเด็น",pts:[P("Sterile gloving","glove"),CR(P("Use sponge-holding forceps","sponge","forceps","คีบ")),CR(P("Center outward, do not return","outward","center","จากใน","ออกนอก")),P("New gauze each pass, repeat","new gauze","เปลี่ยน","repeat","รอบ"),CR(P("Sterile draping","drap","คลุม"))]})
 ),
 interp:"Prep and drape",
 summary:["Sponge holder, not fingers","Inside → outside, never back","Drape leaving only field"]}),

/* ===== MEQ ===== */
SA({page:42,orig:"MEQ 1",num:"SA 1",sub:"Others",flag:NOIMG,imgAlt:"ผิวคล้ำบริเวณเหนือข้อเท้าด้านใน",kimg:["mm42_2","mm42_3","mm42_4","mm42_5"],title:"Short answer — hyperpigmentation above the ankle",
 stem:`An elderly man has hyperpigmentation above the medial ankle (likely chronic venous insufficiency).<br>A. Describe the lesion.<br>B. Diagnosis.<br>C. Management.`,
 gray:"1. ยืนขายก๋วยเตี๋ยว รูป hyperpigment เหนือข้อเท้าขวา น่าจะ chronic venous insuff ถาม A. อธิบาย lesion B. diagnosis C. management",
 notes:"ไฟล์แนบสไลด์ venous disease เป็นแนวคำตอบ · หัวไฟล์ MEQ surgery Rotate D MDCU70",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 Describe.",2,{tags:["spot"],ans:"<b>Hyperpigmentation (hemosiderin)</b> ที่ gaiter area เหนือ medial malleolus ± lipodermatosclerosis, eczema, varicose veins, edema, ulcer",rubric:"1/ประเด็น",pts:[CR(P("Hyperpigmentation at gaiter area","hyperpig","gaiter","medial","hemosiderin")),P("Lipodermatosclerosis or varicose veins","lipoderm","varicose","eczema")]}),
  BS("1.2 Diagnosis.",1,{tags:["spot"],ans:"<b>Chronic venous insufficiency</b> (CEAP C4)",rubric:"ได้",pts:[CR(P("Chronic venous insufficiency","venous"))]}),
  BS("1.3 Management.",4,{tags:["spot"],ans:"<b>Duplex ultrasound</b> (reflux) · <b>ยกขาสูง, compression stocking</b>, ออกกำลังกล้ามเนื้อน่อง, ลดน้ำหนัก หลีกเลี่ยงยืนนาน · ดูแลผิว · venoactive drugs · ทำหัตถการเมื่อ reflux: <b>endovenous ablation, sclerotherapy, high ligation & stripping</b>",rubric:"1/ประเด็น",pts:[CR(P("Duplex ultrasound","duplex")),CR(P("Elevation and compression","compress","stocking","elevat","ยกขา")),P("Avoid prolonged standing","stand","ยืน"),P("Ablation, sclerotherapy, stripping","ablation","sclero","strip","ligation")]})
 ),
 interp:"CVI",
 summary:["Gaiter-area pigmentation","Duplex for reflux","Compression → ablation/stripping"]}),

SA({page:42,orig:"MEQ 9",num:"SA 2",sub:"Neuro",flag:NOIMG,imgAlt:"วิดีโอตรวจการกลอกตาและรูม่านตา",title:"Short answer — video of eye movement and pupils",
 stem:`A video shows the patient looking right, left, up, down, then a light shone into each eye (cannot look up; pupils do not constrict to light).<br>A. Describe the abnormality.<br>B. Diagnosis.`,
 gray:"9. ให้วิดีโอตรวจร่างกาย ให้ผู้ป่วยมองขวา ซ้าย บน ล่าง แล้วเอาไฟส่องทีละข้าง (มองขึ้นบนไม่ได้ ม่านตาไม่หด) A. อธิบายความผิดปกติที่ตรวจได้ B. diagnosis",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Answer.",4,{tags:["spot"],ans:"<b>Upward gaze palsy</b> + <b>pupils ไม่หดต่อแสง แต่หดเมื่อมองใกล้ (light-near dissociation)</b> ± convergence-retraction nystagmus · Dx: <b>Parinaud (dorsal midbrain) syndrome</b> — pineal tumor, hydrocephalus",rubric:"1/ประเด็น",pts:[CR(P("Upward gaze palsy","upward","gaze")),CR(P("Light-near dissociation","near","light")),CR(P("Parinaud syndrome","parinaud","dorsal midbrain")),P("Pineal tumor","pineal")]})
 ),
 interp:"Parinaud",
 summary:["Upgaze palsy + light-near dissociation","Pineal region"]}),

SA({page:42,orig:"MEQ 10",num:"SA 3",sub:"Plastic",flag:NOIMG,imgAlt:"ก้อนบนหนังศีรษะ",title:"Short answer — SCC of the scalp",
 stem:`A scalp mass is squamous cell carcinoma involving epidermis and dermis but not reaching the galea. (The lesion should be removed in one piece.)<br>A. What margin is needed?<br>B. How will you close the wound?`,
 gray:"10. ให้รูปก้อนบนหัวมา บอกว่าเป็น squamous cell carcinoma กินลงไปชั้น epidermis+dermisแต่ไม่ถึงscalp ถาม เรื่องการผ่าก้อน \"Lesion เหมือนมองลงในone piece\" A. ต้องตัด margin ยังไง (ตอบ บวกทุกด้าน1cm) B. จะปิดแผลด้วยอะไร = flap",
 notes:"แนวคำตอบในไฟล์: margin ทุกด้าน 1 cm · ปิดด้วย flap · ตรวจคีย์ 22 พ.ย. 2026: เดิม ‘(low-risk 4–6 มม., high-risk ≥6 มม.–1 ซม.)’ → คง 1 ซม. ตามคีย์ แต่ระบุว่า scalp = high-risk ตาม NCCN Squamous Cell Skin Cancer (low-risk 4–6 mm; high-risk: Mohs/PDEMA preferred หรือ wider margin ≥6 mm)",opinion:"ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): margin ~1 ซม. ใช้ได้สำหรับ scalp SCC (high-risk ตาม NCCN; low-risk ใช้ 4–6 มม.) · ความมั่นใจสูง",
 parts:S(
  BS("3.1 Margin.",2,{tags:["spot"],ans:"<b>Wide excision margin ~1 ซม. ทุกด้าน</b> ตามคีย์ — NCCN: low-risk SCC ใช้ standard excision margin 4–6 มม. · SCC ที่หนังศีรษะ (head and neck) จัดเป็น <b>high-risk</b> → Mohs/PDEMA เป็นวิธีที่แนะนำ หรือ standard excision ด้วย margin กว้างกว่า (≥6 มม. ราว 1 ซม.) และตรวจ margin ก่อนปิดแผลด้วย flap deep margin ถึงชั้นใต้รอยโรค ตัดออกเป็นชิ้นเดียว",rubric:"ได้",pts:[CR(P("1 cm margin","1 cm","1cm","1 ซม"))]}),
  BS("3.2 Closure.",2,{tags:["spot"],ans:"<b>Local flap</b> (rotation/transposition flap ของ scalp) — scalp ยืดหยุ่นน้อย ปิดตรงไม่ได้ · (STSG ได้ถ้า periosteum ยังอยู่)",rubric:"ได้",pts:[CR(P("Flap","flap"))]})
 ),
 interp:"Scalp SCC",
 summary:["Margin ~1 cm","Scalp inelastic → local flap"]}),

SA({page:42,orig:"MEQ 11",num:"SA 4",sub:"Plastic",flag:NOIMG,imgAlt:"เด็กปากแหว่งข้างซ้ายร่วมเพดานโหว่",title:"Short answer — unilateral cleft lip and palate",
 stem:`A child has left unilateral cleft lip with cleft palate.<br>A. Diagnosis.<br>B. Appropriate age for surgery.<br>C. Advice to the mother.`,
 gray:"11. ให้รูปเด็ก unilateral cleft lipซ้าย+cleft palate มา A. diagnosis B. อายุผ่าที่เหมาะสม C. ให้คำแนะนำแม่อะไร",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Answer.",6,{tags:["spot"],ans:"<b>Left unilateral complete cleft lip and palate</b> · Lip: <b>~3 เดือน (rule of 10s)</b> · Palate: <b>9–12 เดือน</b> · Advice: feeding ท่าตั้ง ขวด/จุกพิเศษ เรอบ่อย, ติดตามน้ำหนัก, ตรวจหู/การได้ยิน, cleft team (speech, orthodontic, alveolar bone graft), genetic counseling",rubric:"1/ประเด็น",pts:[CR(P("Unilateral cleft lip and palate","cleft lip","cleft")),CR(P("Lip at ~3 months","3 m","10 w","3 เดือน")),CR(P("Palate at 9–12 months","9","12")),P("Feeding advice","feed","นม"),P("Ear/hearing, team, genetics","ear","hearing","team","genetic")]})
 ),
 interp:"CLP",
 summary:["Lip ~3 mo, palate 9–12 mo","Feeding + hearing","Cleft team"]}),

SA({page:42,orig:"MEQ 12",num:"SA 5",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"X-ray ทารก NG ขดใน upper pouch ไม่มีลมในลำไส้",title:"Short answer — esophageal atresia with gasless abdomen",
 stem:`A neonate has esophageal atresia; the X-ray shows no air in the bowel.<br>A. Which type?<br>B. What other anomalies should you look for?`,
 gray:"12. โจทย์บอกว่าเด็กเป็น Esophageal atresia ให้ภาพ X-ray ไม่มี air in bowel เลย A. ถามว่าเป็น esophageal atresia type ไหน B. ความผิดปกติอื่นๆที่ต้อง look forคือ?",
 notes:"ไม่มีเฉลยในไฟล์ (เหมือน 71 R1 MEQ: isolated EA without TEF)",opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Answer.",4,{tags:["spot"],ans:"<b>Isolated EA without TEF (Gross A)</b> หรือ EA with proximal TEF (Gross B) — ทั้งสองไม่มีลมในท้อง · <b>VACTERL</b> (echo, renal U/S, spine, limb, anorectal)",rubric:"1/ประเด็น",pts:[CR(P("Isolated EA without distal fistula","isolated","without","type a","gross a")),CR(P("VACTERL","vacterl","vater"))]})
 ),
 interp:"EA gasless",
 summary:["Gasless abdomen = no distal TEF","VACTERL work-up"]}),

SA({page:42,orig:"MEQ 14",num:"SA 6",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"ทารกไม่มีรูทวาร",title:"Short answer — infant without anus",
 stem:`An infant has no anal opening.<br>A. Diagnosis.<br>B. Initial management.<br>C. Approach.`,
 gray:"14. ให้ภาพเด็ก ไม่มีรูก้น A. diagnosis B. initial management C. approach อย่างไร",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 Answer.",6,{tags:["spot"],ans:"<b>Anorectal malformation</b> · Initial: <b>NPO, NG decompression, IV fluid</b>, antibiotics, ตรวจ VACTERL · <b>รอ 24 ชม.</b> ดู perineal fistula/meconium ในปัสสาวะ → <b>cross-table lateral (prone) film</b> · perineal fistula/<1 ซม. → <b>anoplasty</b> · ไม่มี fistula/>1 ซม./rectourinary → <b>colostomy → PSARP → closure</b>",rubric:"1/ประเด็น",pts:[CR(P("Anorectal malformation","anorectal","imperforate")),CR(P("NPO, NG, IV fluid","npo","ng","fluid")),P("Wait 24 h for fistula","24","fistula","meconium"),P("Cross-table lateral film","cross","lateral","invertogram"),CR(P("Anoplasty vs colostomy then PSARP","anoplasty","colostomy","psarp"))]})
 ),
 interp:"ARM",
 summary:["Wait 24 h","Perineal fistula → anoplasty","Otherwise colostomy → PSARP"]}),

SA({page:42,orig:"MEQ xx",num:"SA 7",sub:"Burn",flag:NOIMG,imgAlt:"แผลไหม้ครึ่งตัวบนและแขนขวา",title:"Short answer — burn of upper body and right arm",
 stem:`A burn of the upper half of the trunk and the right arm (likely superficial second degree). Give the degree and management.`,
 gray:"xx. รูป burn ครึ่งตัวบน+แขนขวา น่าจะ 2nd sup. ถาม degree, management",
 notes:"ผู้เขียนคิดว่าเป็น 2nd superficial · ตรวจคีย์ 22 พ.ย. 2026: เดิม ‘Parkland 4 ml/kg/%TBSA (ถ้า >15–20%)’ → แก้เกณฑ์เป็น ≥20% TBSA และเริ่ม 2 mL/kg/%TBSA ตาม ATLS 10th ed. (2018) / ABA Advanced Burn Life Support 2018: ให้สารน้ำเมื่อผู้ใหญ่ burn (partial + full thickness) ≥20% TBSA, เริ่ม Ringer's lactate 2 mL × kg × %TBSA (เด็ก 3 mL, electrical 4 mL) ครึ่งแรกใน 8 ชม. แล้ว titrate ตาม UO — Parkland 4 mL เป็นขอบบน/สูตรดั้งเดิม",opinion:"ความมั่นใจปานกลาง · ตรวจคีย์ (22 พ.ย. 2026): เกณฑ์ให้สารน้ำผู้ใหญ่ ≥20% TBSA และสูตรเริ่มต้น 2 mL/kg/%TBSA (ATLS 10th/ABLS) — ถ้าโจทย์ถาม Parkland ให้คำนวณ 4 mL ตามที่ถาม · ความมั่นใจสูง",
 parts:S(
  BS("7.1 Answer.",5,{tags:["spot"],ans:"<b>Superficial second-degree (partial thickness) burn</b> · %TBSA: ลำตัวหน้า 18% (ครึ่งบน ~9%) + แขนขวา 9% · ABC, inhalation · รายนี้: ลำตัวหน้าครึ่งบน 9% + แขนขวา 9% ≈ <b>18% (&lt;20%)</b> → ยังไม่ต้องใช้สูตร ให้ดื่ม/IV ตาม UO (ถ้ารวมหลังครึ่งบน ≈27%) · ผู้ใหญ่ ≥20% TBSA (ไม่นับ superficial/1st degree) → <b>RL เริ่ม 2 mL/kg/%TBSA</b> (ATLS 10th/ABLS; Parkland 4 mL/kg/%TBSA = สูตรดั้งเดิม) ครึ่งแรกใน 8 ชม. · UO 0.5 ml/kg/h · analgesia, tetanus · ทำแผล silver sulfadiazine/biologic dressing · หายใน 2–3 สัปดาห์",rubric:"1/ประเด็น",pts:[CR(P("Superficial partial thickness","superficial","partial","2nd","second")),P("TBSA estimate","tbsa","rule of nine","%"),CR(P("Fluid if ≥20% TBSA: 2 mL/kg/%TBSA (Parkland 4 mL)","parkland","2 ml","4 ml","ml/kg")),P("Tetanus and analgesia","tetanus","analges"),P("Dressing","dressing","silver")]})
 ),
 interp:"Burn",
 summary:["Rule of nines","Fluids if ≥20% TBSA: 2 mL/kg/%TBSA (ATLS 10th; Parkland 4 mL)","Superficial heals 2–3 weeks"]}),

SA({page:42,orig:"MEQ xx2",num:"SA 8",sub:"Anorectal",flag:NOIMG,imgAlt:"แผลปริที่ขอบทวารหนักด้านหลัง",title:"Short answer — acute anal fissure",
 stem:`A picture of an acute anal fissure. Give the diagnosis and management.`,
 gray:"xx. รูป acute anal fissure ถาม dx, management",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("8.1 Answer.",4,{tags:["spot"],ans:"<b>Acute anal fissure</b> · fiber + น้ำ, stool softener, <b>sitz bath</b>, topical anesthetic, <b>GTN/diltiazem ointment</b> · chronic → botox/<b>lateral internal sphincterotomy</b>",rubric:"1/ประเด็น",pts:[CR(P("Anal fissure","fissure")),CR(P("Fiber, sitz bath, softener","fiber","sitz","softener")),P("GTN or diltiazem","gtn","nitrate","diltiazem"),P("LIS for chronic","sphincterotomy","lis","botulinum")]})
 ),
 interp:"Anal fissure",
 summary:["Conservative first","Topical GTN/diltiazem","LIS for chronic"]}),

SA({page:43,orig:"MEQ xx3",num:"SA 9",sub:"Others",img:["mm43_1"],title:"Short answer — umbilical hernia in an adult",
 stem:`A picture of umbilical hernia. Give the diagnosis and 3 risk factors.`,
 gray:"xx. ให้ภาพ umbilical hernia ให้วินิจฉัย บอก risk มา 3 ข้อ",
 notes:"เฉลยในไฟล์: 1. Pregnancy 2. Obesity 3. Ascites",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 Answer.",4,{tags:["spot"],ans:"<b>Umbilical (paraumbilical) hernia</b> · risk: <b>pregnancy</b>, <b>obesity</b>, <b>ascites</b> (เช่น ตับแข็ง) · อื่น: ไอเรื้อรัง, เบ่ง, multiparity",rubric:"1/ประเด็น",pts:[CR(P("Umbilical hernia","umbilical")),P("Pregnancy","pregnan","ตั้งครรภ์"),P("Obesity","obes","อ้วน"),CR(P("Ascites","ascites","ท้องมาน"))]})
 ),
 interp:"Adult umbilical hernia",
 summary:["Raised intra-abdominal pressure","Pregnancy, obesity, ascites","Adults do not close spontaneously → repair"]}),

SA({page:43,orig:"MEQ xx4",num:"SA 10",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"เด็กมีถุงอัณฑะบวม ดันกลับได้",title:"Short answer — reducible groin/scrotal swelling in a child",
 stem:`A child has a reducible swelling.<br>A. Diagnosis.<br>B. Management.`,
 gray:"xx. ให้ภาพไข่เด็กบวม reducible A. diagnosis B. management",
 notes:"เฉลยในไฟล์: indirect inguinal hernia · herniotomy",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("10.1 Answer.",3,{tags:["spot"],ans:"<b>Indirect inguinal hernia</b> · <b>elective herniotomy</b> (high ligation of sac) โดยเร็ว",rubric:"1/ประเด็น",pts:[CR(P("Indirect inguinal hernia","inguinal")),CR(P("Herniotomy","herniotomy"))]})
 ),
 interp:"Pediatric IIH",
 summary:["Patent processus vaginalis","Herniotomy soon"]}),

SA({page:43,orig:"MEQ xx5",num:"SA 11",sub:"Others",img:["mm43_2"],title:"Short answer — closed suction drain",
 stem:`What is this, how does it work, and in which operations is it used?`,
 gray:"xx. ชื่ออะไร มีหน้าที่ และหลักการทำงาน ใช้ในการผ่าตัดอะไรบ้าง",
 notes:"เฉลยในไฟล์: Jackson-Pratt drain (JP drain) · common uses: abdominal surgery, breast surgery, mastectomy, thoracic surgery",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("11.1 Answer.",4,{tags:["spot"],ans:"<b>Jackson-Pratt (JP) drain</b> — <b>closed suction drain</b>: บีบ bulb (grenade) ให้แฟบแล้วปิดจุก → แรงดันลบดูดของเหลวผ่านปลาย fenestrated · ใช้: <b>abdominal surgery, breast surgery/mastectomy, thoracic surgery</b>, thyroidectomy",rubric:"1/ประเด็น",pts:[CR(P("Jackson-Pratt drain","jackson","jp")),CR(P("Closed suction / negative pressure","suction","negative","closed")),P("Uses: abdominal, breast, thoracic","abdominal","breast","mastectomy","thoracic")]})
 ),
 interp:"JP drain",
 summary:["Bulb compressed → negative pressure","Closed system","Mastectomy, abdominal surgery"]}),

SA({page:43,orig:"MEQ xx6",num:"SA 12",sub:"Anorectal",flag:NOIMG,imgAlt:"ก้อนบวมแดงข้างทวารหนัก",title:"Short answer — perianal pain for 2 days",
 stem:`A 30-year-old woman has buttock pain for 2 days. What is it and how will you manage it?`,
 gray:"xx. หญิง 30 ปี เจ็บก้นมา 2 วัน รูปนี้ ถามว่าเป็นไร manage ยังไง",
 notes:"เฉลยในไฟล์: incision and drainage",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("12.1 Answer.",3,{tags:["spot"],ans:"<b>Perianal abscess</b> · <b>incision and drainage</b> · antibiotic เฉพาะรายเสี่ยง · sitz bath",rubric:"1/ประเด็น",pts:[CR(P("Perianal abscess","abscess")),CR(P("Incision and drainage","incision","drain","i&d"))]})
 ),
 interp:"Perianal abscess",
 summary:["I&D","Fistula may follow"]})

);
})();

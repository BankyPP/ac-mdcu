(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU72 RoA (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   72A: OSCE 9 สถานี (SO22 หน้า 3–4) + MEQ 12 ข้อ (SM21 หน้า 2–4) · OSCE ไม่มีเฉลย (Claude) · MEQ มีคีย์ลายมือ · รูป mm/mo */
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
const Co=o=>Object.assign({set:"MDCU72",ro:"RoA",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:4,orig:"1",topic:"hx",sub:"Liver mass",ex:1,title:"History taking — liver mass",
 stem:`A simulated patient has been found to have a mass in the liver.<br>Take a complete history. The examiner ticks each point you cover.`,
 gray:"1. ซักประวัติผู้ป่วยมาด้วยก้อนในตับให้ครอบคลุม (SP ตอบ negative ทั้งหมด ซักไปจนหมดเวลา)",
 sp:"SP ตอบปฏิเสธทุกข้อ — ข้อนี้วัดว่าซักครบทุกประเด็นหรือไม่",
 notes:"ไม่มีไฟล์เฉลย · คอมเมนต์ในไฟล์: อาจารย์ติ๊กประเด็นที่ซัก SP ตอบ negative ทั้งหมด",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 History of a liver mass.",10,{tags:["hx"],ans:"<b>อาการของก้อน</b>: ปวดใต้ชายโครงขวา, คลำได้ก้อน, อิ่มเร็ว · <b>constitutional</b>: น้ำหนักลด ไข้ เบื่ออาหาร · <b>ตัวเหลือง ปัสสาวะเข้ม อุจจาระซีด คัน</b> · <b>อาการตับแข็ง/decompensation</b>: ท้องโต ขาบวม อาเจียนเป็นเลือด ถ่ายดำ สับสน · <b>risk ของ HCC</b>: HBV/HCV, แอลกอฮอล์, ตับแข็ง, aflatoxin, fatty liver/DM, ประวัติครอบครัว · <b>risk ของ cholangiocarcinoma</b>: กินปลาดิบ (liver fluke, อีสาน), นิ่ว · <b>มะเร็งที่อื่น (metastasis)</b>: ถ่ายผิดปกติ/ถ่ายเป็นเลือด, ก้อนเต้านม, ไอ · <b>ฝีในตับ</b>: ไข้หนาวสั่น, ท้องเสียบิด (amoebic) · ยาคุมกำเนิด/steroid (adenoma) · ยาที่ใช้ แพ้ยา โรคประจำตัว ผ่าตัด",rubric:"1/ประเด็น",pts:[P("Pain, mass, early satiety","pain","ปวด","satiety","อิ่ม"),CR(P("Weight loss, fever, anorexia","weight","น้ำหนัก","fever","ไข้")),CR(P("Jaundice, dark urine, pale stool, itch","jaundice","เหลือง","pale","คัน")),P("Decompensated cirrhosis symptoms","ascites","ท้องโต","hematemesis","melena","ถ่ายดำ","confus"),CR(P("Hepatitis B/C, alcohol","hbv","hepatitis","ตับอักเสบ","alcohol","เหล้า")),P("Raw fish / liver fluke","raw fish","ปลาดิบ","fluke","พยาธิ"),P("Primary cancer elsewhere","primary","colon","breast","มะเร็ง","metast"),P("Abscess symptoms","abscess","ฝี","chill","หนาวสั่น","dysentery"),P("OCP or steroid use","ocp","ยาคุม","steroid"),P("Past history, drugs, family history","family","ครอบครัว","drug","underlying","โรคประจำตัว")]})
 ),
 interp:"Hx liver mass",
 summary:["HCC risk: HBV/HCV, cirrhosis, alcohol, aflatoxin","CCA risk: liver fluke (raw fish)","Ask for primary cancer elsewhere and abscess symptoms"]}),

/* ===== OSCE 2 ===== */
Co({page:4,orig:"2",topic:"suture",sub:"Vertical mattress",ex:1,proc:1,title:"Vertical mattress suture — 3 stitches in 2 minutes",
 stem:`Perform 3 vertical mattress sutures on the pad within 2 minutes.<br>Sterile gloves are provided.`,
 gray:"2. เย็บ vertical mattress 3 sutures ใน 2 นาที มีกล่องถุงมือให้ใส่ (บางฐานอาจารย์ให้ข้ามขั้นใส่ถุงมือ)",
 notes:"ไม่มีไฟล์เฉลย · อาจารย์บางฐานให้ข้ามขั้นใส่ถุงมือเพราะเวลาน้อย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Vertical mattress technique.",6,{tags:["suture"],ans:"จับ needle holder ที่ 1/3–1/2 จากโคนเข็ม · <b>far-far</b>: แทงห่างขอบแผล ~4–8 มม. ลึกถึง dermis/subcutis ข้ามไปอีกฝั่งระยะเท่ากัน · <b>near-near</b>: ย้อนกลับ ห่างขอบ ~1–2 มม. ตื้นในชั้น dermis · ผูกปมด้านเดียวกับจุดแทงแรก <b>ขอบแผล evert</b> ไม่รัดแน่นเกิน · ปมอยู่ข้างแผล ตัดไหมเหลือ ~5 มม. · ระยะห่างแต่ละเข็มเท่ากัน",rubric:"1/ประเด็น",pts:[P("Correct needle holder grip","grip","holder","1/3"),CR(P("Far-far bite","far")),CR(P("Near-near bite","near")),CR(P("Wound edge eversion","evert")),P("Knot placed to one side, not too tight","side","tight","แน่น"),P("Even spacing and correct tail length","spacing","tail","ระยะ")]})
 ),
 interp:"Vertical mattress",
 summary:["Far-far then near-near","Gives eversion — good for lax skin, palm, sole","Tie on the side, do not strangulate"]}),

/* ===== OSCE 3 ===== */
Co({page:4,orig:"3",topic:"hx",sub:"Hematuria",title:"Hematuria — investigation and differential diagnosis",
 stem:`A patient presents with blood in the urine. Further history is given in the station.<br>1. Write the investigations.<br>2. Write the differential diagnoses.`,
 gray:"3. ให้ประวัติผู้ป่วยปัสสาวะมีเลือดปน (มีรายละเอียดมากกว่านี้) เขียน investigation + differentials",
 notes:"ไม่มีไฟล์เฉลย · ไฟล์ไม่ได้ให้รายละเอียดประวัติ → เฉลยแบบครอบคลุม gross painless hematuria ในผู้ใหญ่",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("3.1 Investigations.",5,{tags:["hx"],ans:"<b>UA + urine microscopy</b> (RBC morphology, dysmorphic RBC/cast → glomerular) · urine culture · CBC, BUN/Cr, coagulation · <b>urine cytology</b> · <b>CT urography</b> (upper tract) · <b>cystoscopy</b> (lower tract — gold standard สำหรับ bladder) · U/S KUB ถ้าไตไม่ดี/ตั้งครรภ์",rubric:"1/ประเด็น",pts:[CR(P("Urinalysis and microscopy","ua","urinalysis","microscop")),P("Urine culture","culture"),P("Renal function and coagulation","creatinine","cr","coag","bun"),P("Urine cytology","cytology"),CR(P("CT urography","ct uro","ctu","ct")),CR(P("Cystoscopy","cystoscop"))]}),
  B("3.2 Differential diagnoses.",4,{tags:["hx"],ans:"<b>Bladder cancer (urothelial carcinoma)</b> — painless gross hematuria ผู้สูงอายุ สูบบุหรี่ · <b>Renal cell carcinoma</b> · upper tract urothelial carcinoma · <b>urolithiasis</b> (มีปวด colic) · <b>UTI/hemorrhagic cystitis</b> · BPH · glomerulonephritis · trauma, coagulopathy/anticoagulant",rubric:"1/ประเด็น",pts:[CR(P("Bladder cancer","bladder ca","urothelial","bladder cancer","transitional")),P("Renal cell carcinoma","rcc","renal cell"),P("Urolithiasis","stone","นิ่ว","lithiasis"),P("UTI or cystitis","uti","cystitis","infection"),P("BPH","bph","prostat"),P("Glomerular disease","glomerul")]})
 ),
 interp:"Hematuria",
 summary:["Painless gross hematuria in smoker = bladder cancer until proven otherwise","Work-up: CT urography + cystoscopy + cytology","Dysmorphic RBC/cast = glomerular"]}),

/* ===== OSCE 4 ===== */
Co({page:4,orig:"4",topic:"pe",sub:"Breast examination",ex:1,title:"Breast examination with explanation",
 stem:`Perform a complete breast examination on the model and explain each step as you go.`,
 gray:"4. แสดงการตรวจเต้านมทั้งหมด และอธิบายขั้นตอน (หุ่นมี lesion จริง คำสั่งไม่ได้บอกให้รายงาน แต่บางคนรายงานด้วย)",
 notes:"ไม่มีไฟล์เฉลย · หุ่นมี lesion อยู่จริง — รายงานสิ่งที่พบเพิ่มได้",opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Breast examination.",10,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต มี chaperone ล้างมือ เปิดเผยถึงเอว · <b>Inspection</b> 3 ท่า: แขนข้างลำตัว, ยกแขนเหนือศีรษะ, เท้าสะเอวเกร็งอก — ดูขนาด/สมมาตร, skin (peau d'orange, dimpling, redness, ulcer), <b>nipple retraction/discharge</b> · <b>Palpation</b> ท่านอน มือรองศีรษะข้างที่ตรวจ ใช้ pulp ของ 3 นิ้วกลาง คลำทุก quadrant + <b>axillary tail</b> แบบ vertical strip/วงกลม · บีบ nipple ดู discharge · ถ้าพบก้อน บอก ตำแหน่ง (o'clock, ห่างหัวนม), ขนาด, ผิว, ขอบ, consistency, mobility, fixation to skin/chest wall · <b>Lymph nodes</b>: axillary (5 กลุ่ม), supraclavicular, infraclavicular · ตรวจอีกข้างเปรียบเทียบ ขอบคุณ คลุมผ้า",rubric:"1/ประเด็น",pts:[P("Introduce, consent, chaperone, expose","consent","chaperone","แนะนำ","อนุญาต"),CR(P("Inspection in 3 positions","inspect","arm","สะเอว","position","ยกแขน")),P("Skin and nipple changes","peau","dimpl","retract","nipple","หัวนม"),CR(P("Palpate all quadrants with finger pads","quadrant","pulp","pad","คลำ")),P("Axillary tail","tail"),P("Nipple discharge","discharge"),P("Describe lump characteristics","size","mobil","consist","ขนาด"),CR(P("Axillary lymph nodes","axill")),P("Supraclavicular nodes","supraclav"),P("Examine other breast and thank","both","other","อีกข้าง","ขอบคุณ")]})
 ),
 interp:"Breast exam",
 summary:["Inspect in 3 positions","Palpate all quadrants + axillary tail","Axillary and supraclavicular nodes"]}),

/* ===== OSCE 5 ===== */
Co({page:4,orig:"5",topic:"inst",sub:"Surgical instruments",title:"Identify instruments and their uses",
 stem:`Name each item and state what it is used for.<br>A. Penrose drain<br>B. Skin/abdominal stapler<br>C. Army-Navy retractor<br>D. Chest tube<br>E. Rubber band ligator`,
 gray:"5. Identify + บอกที่ใช้: penrose drainage, abdominal stapler, army navy retractor, chest tube, (rubber band ligator?),…",
 flag:NOIMG,imgAlt:"ท่อยางแบนนิ่ม · ที่เย็บแผลแบบลวด · retractor ปลายสองด้านรูปตัว L · ท่อพลาสติกใสมีรูข้างและเส้นทึบรังสี · อุปกรณ์รัดยางสำหรับริดสีดวง",
 notes:"ไม่มีไฟล์เฉลย · ชื่ออุปกรณ์มาจากไฟล์ — ไม่มีรูป · ตรวจคีย์ 22 พ.ย. 2026: เดิม ‘Skin stapler — เย็บปิดผิวหนัง/fascia เร็ว’ → ตัด ‘fascia’ ออก (skin stapler ใช้ปิดผิวหนัง; fascia ปิดด้วยไหม เช่น looped PDS/nylon) ตาม Ethicon Wound Closure Manual / Schwartz 11e",opinion:"ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): skin stapler ใช้ปิดผิวหนังเท่านั้น · ความมั่นใจสูง",
 parts:S(
  B("5.1 Names and uses.",5,{tags:["inst"],ans:"<b>Penrose drain</b> — passive drain ท่อยางแบน ระบายของเหลว/หนองจากแผลตื้นหรือโพรง · <b>Skin stapler</b> — เย็บปิดผิวหนังได้เร็ว (ใช้กับผิวหนังเท่านั้น ไม่ใช้ปิด fascia) (และ linear/GIA stapler สำหรับต่อลำไส้) · <b>Army-Navy retractor</b> — hand-held retractor ดึงผิวหนังและชั้นตื้นในแผลเล็ก · <b>Chest tube (intercostal drainage tube)</b> — ระบายลม/เลือด/หนองในช่องเยื่อหุ้มปอด ต่อกับ underwater seal · <b>Rubber band ligator</b> — รัดยางริดสีดวงทวารภายใน grade I–III (ไม่ใช่ external)",rubric:"1/ชิ้น",pts:[CR(P("Penrose drain — passive drainage","penrose")),P("Stapler — skin closure","staple"),P("Army-Navy retractor — superficial retraction","army","navy"),CR(P("Chest tube — pleural drainage","chest tube","icd","intercostal","pleura")),P("Rubber band ligator — internal hemorrhoid","rubber","band","hemorrhoid","ริดสีดวง")]})
 ),
 interp:"Instruments",
 summary:["Penrose = passive drain","Chest tube to underwater seal","RBL only for internal hemorrhoid grade I–III"]}),

/* ===== OSCE 6 ===== */
Co({page:4,orig:"6",topic:"inst",sub:"Urinary catheter",img:["mm4_5"],kimg:["mm4_5k"],title:"Three-way Foley catheter",
 stem:`1. Name this device.<br>2. Give a specific indication.`,
 gray:"6. three-way foley catheter + indication (ในไฟล์ MEQ รวม = OSCE11)",
 notes:"ไฟล์ OSCE ไม่มีเฉลย · ไฟล์ MEQ รวม (SM21 หน้า 4 'OSCE11') มีคีย์ลายมือ: 3-way Foley catheter, continuous bladder irrigation (after clot removal)",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("6.1 Name.",2,{tags:["inst"],ans:"<b>Three-way Foley catheter</b> (3 lumens: drainage, balloon, irrigation inflow)",rubric:"ได้",pts:[CR(P("Three-way Foley catheter","3-way","three-way","3 way","three way"))]}),
  BK("6.2 Specific indication.",2,{tags:["inst"],ans:"<b>Continuous bladder irrigation</b> — gross hematuria/clot retention, หลัง TURP หรือหลังเอา clot ออก",rubric:"ได้",pts:[CR(P("Continuous bladder irrigation","irrigat","cbi")),P("Clot retention or after TURP","clot","turp","hematuria")]})
 ),
 interp:"3-way Foley",
 summary:["3 ports: drainage, balloon, irrigation","Indication: continuous bladder irrigation","Clot retention, post-TURP"]}),

/* ===== OSCE 7 ===== */
Co({page:4,orig:"7",topic:"inst",sub:"Suture materials",title:"Suture packets by color",
 stem:`Suture packets are shown by their colors.<br>Name each suture and state its type.`,
 gray:"7. ให้สีซองไหมมา ให้บอกชื่อไหม + ชนิดไหม",flag:NOIMG,imgAlt:"ซองไหมหลายสี เช่น ม่วง, ฟ้าอ่อน/ม่วงอ่อน, น้ำตาล, เขียว, ดำ",
 notes:"ไม่มีไฟล์เฉลย · ไม่มีรูปซอง — เฉลยตามสีซองยี่ห้อ Ethicon ที่ใช้บ่อย · ตรวจคีย์ 22 พ.ย. 2026: สีซองไหมในคำตอบตรวจสอบกับแหล่งอ้างอิงไม่ได้ทั้งหมด (สีต่างกันตามยี่ห้อ/รุ่น) → คงคำตอบ เพิ่มคำเตือน และลดความมั่นใจ",opinion:"ความมั่นใจปานกลาง · ตรวจคีย์ (22 พ.ย. 2026): สีซองไหมยืนยันจากแหล่งอ้างอิงไม่ได้ทุกสี และต่างกันตามผู้ผลิต — ความมั่นใจต่ำ (สีซอง) / สูง (ชนิดและคุณสมบัติของไหมแต่ละชนิด)",
 parts:S(
  B("7.1 Name and type by packet color.",6,{tags:["inst"],ans:"<b>ม่วง</b> = Vicryl (polyglactin 910) — absorbable, braided, synthetic · <b>ม่วงอ่อน/ชมพู</b> = Vicryl Rapide · <b>ฟ้า/น้ำเงิน</b> = Prolene (polypropylene) — non-absorbable, monofilament · <b>เขียวเข้ม</b> = Ethibond (polyester) — non-absorbable, braided · <b>เหลือง/น้ำตาล</b> = chromic catgut — absorbable, natural · <b>ฟ้าอ่อน/ม่วงอมเทา</b> = Monocryl (poliglecaprone) — absorbable, monofilament · <b>ดำ/เขียวอมดำ</b> = Ethilon (nylon) — non-absorbable monofilament · <b>ดำ (ซองฟ้าเข้ม)</b> = silk — non-absorbable braided natural · <b>เทา/เงิน</b> = PDS — absorbable monofilament ช้า · ⚠ สีซองต่างกันตามผู้ผลิตและรุ่น (ยืนยันกับแหล่งอ้างอิงไม่ได้ทุกสี) — ในห้องสอบให้ดูลักษณะเส้นไหม (สี braided/monofilament, ซองมีน้ำยา = catgut) ประกอบเสมอ",rubric:"1/ชนิด",pts:[CR(P("Vicryl absorbable braided","vicryl","polyglactin")),CR(P("Prolene non-absorbable monofilament","prolene","polypropylene")),P("Nylon non-absorbable monofilament","nylon","ethilon"),P("Silk non-absorbable braided","silk"),P("Chromic catgut absorbable natural","catgut","chromic"),P("PDS or Monocryl absorbable monofilament","pds","monocryl")]})
 ),
 interp:"Suture colors",
 summary:["Vicryl = absorbable braided (purple)","Prolene = non-absorbable monofilament (blue)","Silk = braided natural non-absorbable"]}),

/* ===== OSCE 8 ===== */
Co({page:4,orig:"8",topic:"img",sub:"Mammogram",title:"Mammogram — views, findings and differential diagnosis",
 stem:`A mammogram is shown.<br>1. Name the views.<br>2. Describe the findings.<br>3. Give the differential diagnoses.`,
 gray:"8. บรรยายผล mammogram + บอกชื่อ view + บอก differential diagnoses ที่คิดถึง",flag:NOIMG,imgAlt:"Mammogram 2 view ของเต้านมข้างเดียว มีก้อน high density ขอบ spiculated",
 notes:"ไม่มีไฟล์เฉลย · ไม่มีรูป — เฉลยตัวอย่างเป็นก้อน spiculated",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("8.1 Views.",2,{tags:["img"],ans:"<b>Craniocaudal (CC)</b> และ <b>Mediolateral oblique (MLO)</b> view — MLO เห็น pectoralis major และ axillary tail",rubric:"1/view",pts:[CR(P("CC view","cc","craniocaudal")),CR(P("MLO view","mlo","mediolateral"))]}),
  B("8.2 Findings.",3,{tags:["img"],ans:"บอกข้าง ตำแหน่ง (quadrant/o'clock), <b>mass</b>: shape, <b>margin (spiculated/circumscribed)</b>, density · <b>microcalcification</b> (pleomorphic, linear branching) · architectural distortion, skin thickening, nipple retraction, axillary node · ให้ <b>BI-RADS</b>",rubric:"1/ประเด็น",pts:[P("Location","quadrant","o'clock","location","ตำแหน่ง"),CR(P("Mass margin and density","spicul","margin","density","ขอบ")),P("Calcification","calcif"),P("BI-RADS category","bi-rads","birads")]}),
  B("8.3 Differential diagnoses.",3,{tags:["img"],ans:"Spiculated mass → <b>invasive ductal carcinoma</b> (BI-RADS 5), ddx radial scar, fat necrosis, post-surgical scar · Circumscribed → fibroadenoma, cyst, phyllodes",rubric:"1/ประเด็น",pts:[CR(P("Breast carcinoma","carcinoma","cancer","idc","มะเร็ง")),P("Fibroadenoma or cyst","fibroadenoma","cyst"),P("Fat necrosis or radial scar","fat necrosis","radial scar","phyllodes")]})
 ),
 interp:"Mammogram",
 summary:["Standard views: CC + MLO","Spiculated mass ± pleomorphic calcification = malignant","Report BI-RADS"]}),

/* ===== OSCE 9 ===== */
Co({page:4,orig:"9",topic:"suture",sub:"Suture selection",img:["mo4_1"],title:"Episiotomy repair — choose sutures",
 stem:`The pictures show repair of a perineal wound (episiotomy) and suture packets A–E.<br>For each layer, choose the suture and give its name, type (mono/multifilament, absorbable or not) and the technique used.`,
 gray:"9. ถามเรื่องด้ายกับการใช้ตามนี้เลย (รูป: ภาพวาดเย็บแผลฝีเย็บเป็นชั้นๆ (6.1)–(6.4) + ซองไหม A–E + ตารางตัวอักษร ชื่อสามัญ ชื่อการค้า mono/multifilament absorbable/non-absorbable โครงสร้าง)",
 notes:"ไม่มีไฟล์เฉลย · รูปในไฟล์เล็ก อ่านชื่อซองไม่ได้ทั้งหมด — เฉลยตามหลักการเย็บ episiotomy · ตรวจคีย์ 21 พ.ย. 2026: เดิมตอบ continuous locking → แก้เป็น continuous non-locking ตาม NICE NG235 (2023) rec 1.12.20",opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไฟล์ไม่มีเฉลย — คำตอบเดิมของคลังเขียน vaginal mucosa แบบ continuous locking ซึ่งขัดกับ NICE NG235 (2023) 1.12.20 \"continuous non-locked suturing technique for the vaginal wall and muscle layer\" จึงแก้เป็น continuous non-locked ทั้งผนังช่องคลอดและชั้นกล้ามเนื้อ · วัสดุ = absorbable synthetic (NICE 1.12.21) เช่น Vicryl Rapide 2-0 (Cochrane Kettle 2010: synthetic เจ็บน้อยกว่า catgut) · ผิวหนังเย็บเฉพาะเมื่อขอบไม่ชิด แบบ continuous subcuticular (NICE 1.12.19) · ความมั่นใจปานกลาง (รูปเล็ก อ่านซองไม่ครบ)",
 parts:S(
  B("9.1 Suture choice and technique by layer.",6,{tags:["suture"],ans:"<b>Vaginal mucosa</b>: absorbable synthetic (<b>Vicryl Rapide / Vicryl 2-0</b>; chromic catgut เป็นคำตอบเดิมในไทย) แบบ <b>continuous non-locking</b> เริ่มเหนือ apex 1 ซม. ถึง hymenal ring · <b>Perineal muscle</b>: absorbable 2-0 แบบ <b>continuous non-locking</b> (NICE NG235 2023: continuous non-locked ทั้ง vaginal wall และ muscle) · <b>Skin</b>: ถ้าขอบชิดดีไม่ต้องเย็บ; ถ้าต้องเย็บ = absorbable 3-0 แบบ <b>continuous subcuticular</b> (ไม่ต้องตัดไหม) · Vicryl = polyglactin, synthetic, <b>multifilament (braided), absorbable</b> · chromic catgut = natural, absorbable · ห้ามใช้ non-absorbable เช่น nylon/silk ที่ฝีเย็บ",rubric:"1/ประเด็น",pts:[CR(P("Absorbable suture for all layers","absorb")),P("Vaginal mucosa continuous non-locking from above apex","non-lock","non lock","apex","continuous"),P("Muscle layer","muscle","กล้ามเนื้อ"),CR(P("Skin subcuticular","subcuticular","intradermal")),P("Vicryl is synthetic braided absorbable","vicryl","polyglactin","braided","multifilament"),P("Avoid non-absorbable","non-absorb","nylon","silk")]})
 ),
 interp:"Episiotomy suture",
 summary:["All layers absorbable synthetic (Vicryl Rapide; catgut = old answer)","Vaginal wall + muscle: continuous non-locking (NICE NG235), mucosa from 1 cm above apex","Skin: subcuticular only if needed"]}),

/* ===== MEQ ===== */
SA({page:3,orig:"MEQ 1",num:"SA 1",sub:"Head & neck",img:["mm3_1"],kimg:["mm3_1k"],title:"Short answer — midline neck mass",
 stem:`A midline neck mass has been present for many years and has enlarged over the last year.<br>1. What is the provisional diagnosis?<br>2. Give 1 investigation.`,
 gray:"MEQ1. มีก้อนที่คอมานานหลายปี ช่วง 1 ปีนี้โตมากขึ้น 1.1 Provisional diagnosis 1.2 Investigation 1 ข้อ",
 notes:"คีย์ลายมือ: Thyroglossal duct cyst · U/S, thyroid scan (r/o ectopic thyroid gland), blood test",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("1.1 Provisional diagnosis.",2,{tags:["spot"],ans:"<b>Thyroglossal duct cyst</b> — ก้อน midline ใกล้ hyoid เคลื่อนขึ้นเมื่อแลบลิ้น/กลืน",rubric:"ได้",pts:[CR(P("Thyroglossal duct cyst","thyroglossal"))]}),
  BK("1.2 One investigation.",2,{tags:["spot"],ans:"<b>Ultrasound neck</b> (ดู cyst และว่ามี thyroid gland ปกติ) หรือ <b>thyroid scan</b> เพื่อ r/o <b>ectopic thyroid</b> ก่อนผ่าตัด · TFT",rubric:"ได้",pts:[CR(P("Ultrasound or thyroid scan","u/s","ultrasound","ultrasono","thyroid scan","scan")),P("Rule out ectopic thyroid","ectopic")]})
 ),
 interp:"TGDC",
 summary:["Midline, moves with tongue protrusion","U/S or thyroid scan to exclude ectopic thyroid","Rx: Sistrunk operation"]}),

SA({page:3,orig:"MEQ 2",num:"SA 2",sub:"Anorectal",img:["mm3_2"],kimg:["mm3_2k"],title:"Short answer — prolapsed anal mass",
 stem:`A patient has heavy bleeding per rectum. A mass at the anus must be pushed back manually.<br>1. Describe the mass.<br>2. What is the cause?<br>3. What is the treatment?`,
 gray:"MEQ2 มีเลือดออกทางทวารหนัก ตรวจพบมีก้อนที่ทวารหนัก ต้องดันกลับเอง 2.1 บรรยายลักษณะของก้อน 2.2 สาเหตุ (ในไฟล์ขีดฆ่าบางส่วน) 2.3 Treatment",
 notes:"คีย์ลายมือ: thrombosed circumferential mass protruding from anal canal · (strangulated prolapsed hemorrhoid — ถูกขีดฆ่า) · closed hemorrhoidectomy (urgent) · ⚠ ข้อ 2.2 ในไฟล์ถูกขีดฆ่า ทั้งคำถามและคีย์",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("2.1 Describe the mass.",2,{tags:["spot"],ans:"<b>Circumferential, purplish, thrombosed mass protruding from the anal canal</b> มี mucosa คลุม บวม",rubric:"1/ประเด็น",pts:[CR(P("Circumferential protruding mass","circumferential","protrud","prolaps")),P("Thrombosed, purplish","thromb","purpl")]}),
  BK("2.2 Cause.",2,{tags:["spot"],ans:"<b>Prolapsed internal hemorrhoid grade IV</b> ที่ <b>thrombosed/strangulated</b> (ต้องดันกลับเอง = grade III)",rubric:"ได้",pts:[CR(P("Prolapsed (strangulated) internal hemorrhoid","hemorrhoid","ริดสีดวง"))]}),
  BK("2.3 Treatment.",2,{tags:["spot"],ans:"<b>Hemorrhoidectomy</b> (closed, Ferguson) — urgent ในราย thrombosed/strangulated",rubric:"ได้",pts:[CR(P("Hemorrhoidectomy","hemorrhoidectomy"))]})
 ),
 interp:"Prolapsed hemorrhoid",
 summary:["Grade III = manual reduction, IV = irreducible","Thrombosed/strangulated → urgent hemorrhoidectomy","Closed (Ferguson) technique"]}),

SA({page:3,orig:"MEQ 3",num:"SA 3",sub:"Burn",title:"Short answer — superficial vs deep second-degree burn",
 stem:`Compare superficial second-degree burn and deep second-degree burn in every aspect, including management.`,
 gray:"MEQ3 จงบอกความแตกต่างระหว่าง superficial second-degree burn กับ deep second-degree burn ในทุกๆด้าน รวมทั้งการดูแลรักษา",kimg:["mm3_3k"],
 notes:"คีย์ลายมือ: superficial 2nd degree heal without scarring (~2 wk) · deep 2nd degree heal with severe scarring → pressure garment",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("3.1 Comparison.",6,{tags:["spot"],ans:"<b>Superficial partial thickness</b>: ถึง papillary dermis · แดง ชื้น <b>มี blister</b> · <b>blanch</b> กดแล้วซีด capillary refill ดี · <b>เจ็บมาก</b> · หายเอง <b>ภายใน 2–3 สัปดาห์ ไม่มีแผลเป็น</b> · Rx: ทำแผล, topical (silver sulfadiazine)/biologic dressing · <b>Deep partial thickness</b>: ถึง reticular dermis · ซีด/ด่าง แดงคล้ำ ชื้นน้อยกว่า · <b>blanch ช้า/ไม่ blanch</b> · ความรู้สึกลดลง (รู้สึกกดได้) · หาย <b>>3 สัปดาห์ เกิด hypertrophic scar/contracture</b> · Rx: <b>early tangential excision + split-thickness skin graft</b>, ป้องกันแผลเป็นด้วย <b>pressure garment</b>, splint, physiotherapy",rubric:"1/ประเด็น",pts:[P("Depth: papillary vs reticular dermis","papillary","reticular"),P("Blister, moist vs pale","blister","moist","pale"),CR(P("Blanching present vs absent or sluggish","blanch")),P("Pain severe vs reduced","pain","เจ็บ"),CR(P("Healing <3 wk without scar vs >3 wk with scar","scar","3 wk","2 wk","แผลเป็น","สัปดาห์")),CR(P("Deep: excision and skin graft","graft","excision")),P("Pressure garment","pressure garment")]})
 ),
 interp:"2nd-degree burn",
 summary:["Superficial: blister, blanch, painful, heals <3 wk no scar","Deep: no blanch, less pain, heals >3 wk with scar","Deep: excision + STSG, pressure garment"]}),

SA({page:3,orig:"MEQ 4",num:"SA 4",sub:"Plastic",img:["mm3_4"],kimg:["mm3_4k"],title:"Short answer — cleft lip",
 stem:`An infant has the condition shown.<br>1. Give advice on caring for this patient to the mother.<br>2. What is the recommended age to repair the problem as seen in the picture? Why?`,
 gray:"MEQ4 4.1 จงให้คำแนะนำในการดูแลผู้ป่วยต่อมารดา 4.2 What is the recommended age to repair the problem as seen in the picture? Reason?",
 notes:"คีย์ลายมือ: feeding technique (special feeding), genetic counseling · 3 months (10 weeks) — rule of 10",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("4.1 Advice to the mother.",4,{tags:["spot"],ans:"<b>Feeding</b>: ให้นมท่าตั้งตรง, ขวด/จุกนมพิเศษ (soft squeeze bottle), เรอบ่อย ระวังสำลัก · ติดตาม <b>น้ำหนักตัว</b> · ตรวจ <b>cleft palate</b> และหูชั้นกลาง/การได้ยิน · อธิบายแผนผ่าตัดเป็นขั้น (lip, palate, speech therapy, alveolar bone graft) ดูแลโดยทีม <b>cleft team</b> · <b>genetic counseling</b>",rubric:"1/ประเด็น",pts:[CR(P("Feeding technique","feed","นม","bottle")),P("Monitor weight","weight","น้ำหนัก"),P("Check palate and hearing","palate","hearing","ear","หู"),P("Staged surgery and team care","team","stage","speech"),P("Genetic counseling","genetic")]}),
  BK("4.2 Age of repair and reason.",3,{tags:["spot"],ans:"<b>ประมาณ 3 เดือน (10 สัปดาห์)</b> — <b>Rule of 10s</b>: อายุ ≥10 สัปดาห์, น้ำหนัก ≥10 ปอนด์, Hb ≥10 g/dL → ปลอดภัยต่อการดมยา ทันเวลาก่อนพัฒนาการ (palate ~9–12 เดือน ก่อนพูด)",rubric:"1/ประเด็น",pts:[CR(P("About 3 months or 10 weeks","3 m","10 w","3 เดือน","10 สัปดาห์","three month","ten week")),CR(P("Rule of 10s: weight and Hb","rule of 10","10 lb","hb","weight"))]})
 ),
 interp:"Cleft lip",
 summary:["Lip repair ~3 months (rule of 10s)","Palate repair 9–12 months before speech","Feeding + cleft team + genetic counseling"]}),

SA({page:3,orig:"MEQ 5",num:"SA 5",sub:"Plastic",img:["mm3_5"],kimg:["mm3_5k"],title:"Short answer — cheek laceration",
 stem:`A patient was slashed across the face with a knife as shown.<br>Which nerve may be injured and how would you examine it? Which other structure is at risk?`,
 gray:"MEQ5 5. ผู้ป่วยถูกฟันด้วยมีดที่บริเวณใบหน้าเกิดบาดแผลดังรูป จะเกิด injury ต่อ nerve ใดบ้าง และจะตรวจได้อย่างไร",
 notes:"คีย์ลายมือ: buccal branch of facial n. → ยิ้ม/ป่องแก้ม · Stensen duct",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("5.1 Nerve and examination.",4,{tags:["spot"],ans:"<b>Buccal branch of facial nerve</b> (± zygomatic) — ตรวจโดยให้ <b>ยิ้ม/ยิงฟัน, ป่องแก้ม, เป่าลม</b> ดูมุมปากขยับสมมาตร · ถ้าบาดแผลอยู่ <b>proximal ต่อ lateral canthus line</b> → ควร explore และต่อเส้นประสาทภายใน 72 ชม.",rubric:"1/ประเด็น",pts:[CR(P("Buccal branch of facial nerve","buccal","facial")),CR(P("Smile, puff cheek, show teeth","smile","puff","ยิ้ม","ป่อง","teeth")),P("Repair if proximal to lateral canthus","canthus","repair","72")]}),
  BK("5.2 Other structure.",2,{tags:["spot"],ans:"<b>Parotid (Stensen) duct</b> — อยู่บนเส้นจาก tragus ถึงกลาง upper lip · ตรวจโดยใส่ probe/cannula จากรูเปิดตรง upper 2nd molar ดูว่ามีน้ำเกลือรั่วจากแผล",rubric:"ได้",pts:[CR(P("Parotid (Stensen) duct","stensen","parotid"))]})
 ),
 interp:"Facial laceration",
 summary:["Buccal branch: smile, puff cheek","Stensen duct: tragus to mid upper lip line","Explore nerve injury proximal to lateral canthus"]}),

SA({page:3,orig:"MEQ 6",num:"SA 6",sub:"Pediatric surgery",img:["mm3_6"],kimg:["mm3_6k"],title:"Short answer — newborn bilious vomiting",
 stem:`A previously healthy newborn develops sudden bilious vomiting. An abdominal X-ray is shown.<br>1. What is the provisional diagnosis?<br>2. What is the treatment?`,
 gray:"MEQ6 A newborn baby with sudden bilious vomiting, previously healthy 6.1 Provisional diagnosis 6.2 Treatment",
 notes:"คีย์ลายมือ: Midgut volvulus · Ladd's procedure",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("6.1 Provisional diagnosis.",2,{tags:["spot"],ans:"<b>Malrotation with midgut volvulus</b> — ยืนยันด้วย UGI study (corkscrew, DJ junction อยู่ขวาของ midline)",rubric:"ได้",pts:[CR(P("Midgut volvulus / malrotation","volvulus","malrotation"))]}),
  BK("6.2 Treatment.",3,{tags:["spot"],ans:"Resuscitate, NPO, NG decompression, IV antibiotics → <b>emergency Ladd's procedure</b>: detorsion ทวนเข็มนาฬิกา, ตัด Ladd's bands, ขยาย mesentery base, appendectomy, วางลำไส้เล็กขวา/ลำไส้ใหญ่ซ้าย",rubric:"1/ประเด็น",pts:[P("Resuscitation and NG decompression","ng","resus","npo"),CR(P("Emergency Ladd's procedure","ladd")),P("Counterclockwise detorsion","counter","detors")]})
 ),
 interp:"Midgut volvulus",
 summary:["Bilious vomiting in neonate = malrotation/volvulus until proven otherwise","UGI: DJ flexure right of midline, corkscrew","Emergency Ladd's procedure"]}),

SA({page:3,orig:"MEQ 7",num:"SA 7",sub:"Pediatric surgery",img:["mm3_7"],kimg:["mm3_7k"],title:"Short answer — omphalocele",
 stem:`A newborn has the abdominal wall defect shown.<br>1. What is the diagnosis?<br>2. What anomalies do you have to look for?<br>3. What is your initial management?`,
 gray:"MEQ7 7.1 What is the diagnosis? 7.2 What anomalies do you have to look for? 7.3 What is your initial management?",
 notes:"คีย์ลายมือ: Omphalocele · Beckwith-Wiedemann syndrome, Wilms tumor · IV access, dressing/cover sac, keep warm, NG tube decompression, NPO, ...",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("7.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Omphalocele</b> — มีถุงหุ้ม สายสะดือออกจากถุง",rubric:"ได้",pts:[CR(P("Omphalocele","omphalocele","exomphalos"))]}),
  BK("7.2 Associated anomalies.",3,{tags:["spot"],ans:"<b>Cardiac anomalies</b> (echo) · <b>chromosomal</b> (trisomy 13, 18, 21) · <b>Beckwith-Wiedemann syndrome</b> (macroglossia, gigantism, hypoglycemia, <b>Wilms tumor</b>/hepatoblastoma) · Pentalogy of Cantrell · OEIS",rubric:"1/ประเด็น",pts:[CR(P("Cardiac anomalies","cardiac","heart","หัวใจ")),P("Chromosomal anomalies","trisomy","chromosom"),CR(P("Beckwith-Wiedemann","beckwith")),P("Hypoglycemia or Wilms tumor","hypoglyc","wilm")]}),
  BK("7.3 Initial management.",4,{tags:["spot"],ans:"<b>Keep warm</b> · <b>คลุมถุงด้วย sterile saline gauze/plastic wrap</b> ป้องกันแตกและเสียน้ำ · <b>NG tube decompression</b>, NPO · <b>IV fluid</b> · ตรวจ <b>blood sugar</b> · antibiotics ถ้าถุงแตก · echo และหา anomalies · ต่อมาปิดแบบ primary หรือ staged (silo) / paint ถุงถ้าใหญ่มาก",rubric:"1/ประเด็น",pts:[P("Keep warm","warm","อุ่น"),CR(P("Cover sac with sterile moist dressing","cover","gauze","wrap","dressing","คลุม")),CR(P("NG decompression and NPO","ng","npo","orogastric")),P("IV fluid","iv","fluid"),P("Check blood sugar","glucose","sugar","dtx")]})
 ),
 interp:"Omphalocele",
 summary:["Sac + cord inserted on sac","Look for cardiac, chromosomal, Beckwith-Wiedemann","Warm, cover, NG, IV fluid, glucose"]}),

SA({page:3,orig:"MEQ 8",num:"SA 8",sub:"Others",img:["mm3_8"],kimg:["mm3_8k"],title:"Short answer — post-operative order after hernia repair",
 stem:`The picture shows an inguinal hernia repair.<br>Write the post-operative orders.`,
 gray:"MEQ8 8. จงเขียน Postoperative order ของการผ่าตัดเพื่อรักษาไส้เลื่อน",
 notes:"คีย์ลายมือ: One day — routine post-op care, V/S q15min ×4 then q30min ×2 then q1h until stable, morphine 3 mg IV prn q4h, metoclopramide 10 mg IV prn q8h, 5%D/N/2 1000 ml rate 80 ml/hr, observe void (ไม่ปัสสาวะใน 6 ชม. ให้แจ้ง), observe scrotal/wound hematoma · Continue — regular diet, record V/S, I/O, paracetamol (500) 2 tab po prn q4–6h",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("8.1 Post-operative orders.",8,{tags:["spot"],ans:"<b>One day</b>: post-op care · <b>V/S q15 min ×4, q30 min ×2, then q1h until stable</b> · <b>observe voiding</b> — ถ้าไม่ปัสสาวะใน 6 ชม. ให้แจ้ง (urinary retention) · <b>observe wound/scrotal hematoma</b> · IV fluid 5%D/N/2 rate 80 ml/hr จนกินได้ · <b>analgesic</b>: morphine 3 mg IV prn q4h · antiemetic: metoclopramide 10 mg IV prn q8h · <b>Continuous</b>: diet เมื่อฟื้นจากยาสลบ (regular diet) · record V/S, I/O · paracetamol 500 mg 2 tab po prn q4–6h · ambulation เร็ว, หลีกเลี่ยงยกของหนัก",rubric:"1/ประเด็น",pts:[CR(P("Vital signs schedule","v/s","vital","q15")),CR(P("Observe voiding / retention","void","ปัสสาวะ","retention")),CR(P("Observe wound and scrotal hematoma","hematoma","scrot","wound")),P("IV fluid","fluid","5%d","iv"),CR(P("Analgesic","morphine","paracetamol","analges","pain")),P("Antiemetic","metoclopramide","antiemetic","n/v"),P("Diet","diet","อาหาร"),P("Record I/O","i/o","intake")]})
 ),
 interp:"Post-op order",
 summary:["One-day: V/S, IV fluid, analgesic, antiemetic, watch voiding","Hernia: watch urinary retention + scrotal hematoma","Continuous: diet, I/O, oral analgesic"]}),

SA({page:4,orig:"MEQ 9",num:"SA 9",sub:"Others",img:["mm4_1"],kimg:["mm4_1k"],title:"Short answer — gangrenous toe",
 stem:`A foot lesion is shown.<br>1. Describe the lesion.<br>2. Give 3 causes.<br>3. Give 3 physical examinations.`,
 gray:"MEQ9 9.1 Describe the lesion 9.2 Cause (3 ข้อ) 9.3 Physical examination (3 ข้อ)",
 notes:"คีย์ลายมือ: gangrenous right 2nd toe · hypertension, smoking, dyslipidemia → atherosclerotic change · extremities pulse, ABI, handheld Doppler ultrasonography",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("9.1 Describe the lesion.",2,{tags:["spot"],ans:"<b>Dry gangrene of the right 2nd toe</b> — ดำ แห้ง ขอบเขตชัด มี ulcer/slough ที่ฝ่าเท้า",rubric:"1/ประเด็น",pts:[CR(P("Gangrene","gangren")),P("Site: right 2nd toe","2nd","second","toe","นิ้ว")]}),
  BK("9.2 Three causes.",3,{tags:["spot"],ans:"<b>Atherosclerosis (PAD)</b> จาก risk: <b>DM, hypertension, smoking, dyslipidemia</b> · diabetic foot (neuropathy + ischemia + infection) · embolism, Buerger disease",rubric:"1/ข้อ",pts:[CR(P("Atherosclerosis / PAD","atheroscl","pad","ischem")),P("Diabetes","diabet","dm","เบาหวาน"),P("Smoking","smok","บุหรี่"),P("Hypertension or dyslipidemia","hypertens","dyslipid")]}),
  BK("9.3 Three physical examinations.",3,{tags:["spot"],ans:"<b>คลำชีพจรส่วนปลาย</b> (femoral, popliteal, DP, PT) · <b>ABI</b> · <b>handheld Doppler</b> · capillary refill, Buerger test, monofilament (neuropathy)",rubric:"1/ข้อ",pts:[CR(P("Peripheral pulses","pulse","ชีพจร")),CR(P("ABI","abi","ankle")),P("Handheld Doppler","doppler"),P("Monofilament or Buerger test","monofilament","buerger","capillary")]})
 ),
 interp:"Toe gangrene",
 summary:["Gangrene → check PAD","Pulses, ABI, Doppler","Risk: DM, HT, smoking, DLP"]}),

SA({page:4,orig:"MEQ 10",num:"SA 10",sub:"Breast",img:["mm4_2"],kimg:["mm4_2k"],title:"Short answer — red breast in a breastfeeding woman",
 stem:`A woman with a history of breastfeeding has the breast shown.<br>1. Describe the lesion.<br>2. Give 2 differential diagnoses.`,
 gray:"MEQ10 Female with history of breast feeding 10.1 Describe the lesion 10.2 Give 2 differential diagnosis",
 notes:"คีย์ลายมือ: redness of skin at right upper outer periareolar area · acute mastitis of right breast, inflammatory carcinoma?",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("10.1 Describe the lesion.",2,{tags:["spot"],ans:"<b>Erythema (redness) of the skin at the upper outer periareolar area of the right breast</b> ± บวม ไม่เห็น ulcer",rubric:"1/ประเด็น",pts:[CR(P("Erythema of skin","erythema","red","แดง")),P("Location: upper outer periareolar","upper outer","periareolar","areola")]}),
  BK("10.2 Two differential diagnoses.",2,{tags:["spot"],ans:"<b>Lactational (acute) mastitis</b> / breast abscess · <b>Inflammatory breast carcinoma</b> (ถ้าไม่ดีขึ้นหลังยาฆ่าเชื้อ → biopsy)",rubric:"1/ข้อ",pts:[CR(P("Acute mastitis or abscess","mastitis","abscess")),CR(P("Inflammatory breast cancer","inflammatory"))]})
 ),
 interp:"Mastitis",
 summary:["Lactation + red breast = mastitis","Abscess → aspiration/I&D","Not improving → think inflammatory carcinoma, biopsy"]}),

SA({page:4,orig:"MEQ 11",num:"SA 11",sub:"Pediatric surgery",img:["mm4_3"],kimg:["mm4_3k"],title:"Short answer — imperforate anus",
 stem:`A newborn has imperforate anus.<br>1. What is the diagnosis?<br>2. What associated anomalies should you look for?<br>3. What is the treatment?`,
 gray:"MEQ11 A newborn with imperforate anus 11.1 Diagnosis 11.2 Associated anomalies 11.3 Treatment",
 notes:"คีย์ลายมือ: Anorectal malformation (rectourethral? fistula) · VACTERL: vertebral, anorectal, cardiac, TE fistula, renal, limb · 3-stage operation: colostomy → PSARP → closure of colostomy",opinion:"ความมั่นใจปานกลาง (คีย์ชนิด fistula อ่านไม่ชัด)",
 parts:S(
  BK("11.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Anorectal malformation</b> ในเด็กชาย ไม่มี perineal fistula ให้เห็น → น่าจะเป็น <b>high type (rectourethral/rectovesical fistula)</b> ดู meconium ในปัสสาวะ",rubric:"1/ประเด็น",pts:[CR(P("Anorectal malformation","anorectal","arm","imperforate")),P("High type with rectourethral fistula","rectourethral","high","urethral")]}),
  BK("11.2 Associated anomalies.",3,{tags:["spot"],ans:"<b>VACTERL</b>: Vertebral, Anorectal, Cardiac, TracheoEsophageal fistula, Renal, Limb · ตรวจ echo, U/S KUB และไขสันหลัง, spine X-ray, ใส่ NG ดู esophageal atresia",rubric:"1/ประเด็น",pts:[CR(P("VACTERL","vacterl","vater")),P("Cardiac","cardiac","heart"),P("Renal","renal","kidney","ไต"),P("Vertebral or spinal","vertebr","spin","sacr")]}),
  BK("11.3 Treatment.",3,{tags:["spot"],ans:"High type → <b>3-stage</b>: (1) <b>diverting colostomy</b> แรกเกิด (2) <b>PSARP</b> ~1–3 เดือน (3) <b>colostomy closure</b> + anal dilatation · Low type (perineal fistula) → anoplasty ได้เลย",rubric:"1/ประเด็น",pts:[CR(P("Colostomy","colostomy")),CR(P("PSARP","psarp","posterior sagittal")),P("Colostomy closure","closure","ปิด")]})
 ),
 interp:"ARM",
 summary:["Wait 24 h for meconium sign / invertogram","VACTERL work-up","High: colostomy → PSARP → closure"]}),

SA({page:4,orig:"MEQ 12",num:"SA 12",sub:"Others",img:["mm4_4"],kimg:["mm4_4k","mm4_4b"],title:"Short answer — painful toe for 2 days",
 stem:`A patient has had toe pain for 2 days.<br>1. What is the diagnosis?<br>2. What is the cause?<br>3. What is the management?`,
 gray:"MEQ12 เจ็บเท้ามา 2 วัน 12.1 Diagnosis 12.2 Cause 12.3 Management",
 notes:"คีย์ลายมือ (สีแดง): Paronychia · ingrown toenail → infection · warm soak + oral antibiotic · incision & drainage · remove nail",opinion:"ความมั่นใจสูง",
 parts:S(
  BK("12.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Acute paronychia</b> (± ingrown toenail) ของนิ้วหัวแม่เท้า",rubric:"ได้",pts:[CR(P("Paronychia","paronychia"))]}),
  BK("12.2 Cause.",2,{tags:["spot"],ans:"<b>Ingrown toenail</b> (ตัดเล็บสั้น/โค้ง รองเท้าคับ) → <b>bacterial infection</b> ส่วนใหญ่ <b>Staphylococcus aureus</b>/Streptococcus",rubric:"1/ประเด็น",pts:[CR(P("Ingrown toenail","ingrown")),P("Staph or Strep infection","staph","strep","infect")]}),
  BK("12.3 Management.",3,{tags:["spot"],ans:"ระยะแรก: <b>warm soak</b>, ยกสูง, <b>oral antibiotic</b> (dicloxacillin/cephalexin) · มีหนอง → <b>incision and drainage</b> · ingrown → <b>partial nail avulsion</b> ± matricectomy (wedge resection) · สอนตัดเล็บตรง",rubric:"1/ประเด็น",pts:[P("Warm soak","warm","soak","แช่"),CR(P("Oral antibiotic","antibiot","dicloxa","cephalexin")),CR(P("Incision and drainage","incision","drain","i&d")),P("Partial nail removal","nail","avulsion","wedge","ถอดเล็บ")]})
 ),
 interp:"Paronychia",
 summary:["Ingrown toenail → paronychia","Early: soak + antibiotics","Pus: I&D; recurrent ingrown: wedge resection"]})

);
})();

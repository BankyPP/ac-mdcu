(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "AC osce 74D" → MDCU74 RoD (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO74DQ = AC_74D_OSCE_Subspe_GenSx_Osce_Rotate_D.pdf (3 หน้า จดเป็นหัวข้อ) · OSCE 12 สถานี · MEQ 10 ข้อ → sec "Short Answers"
   ไม่มีไฟล์เฉลย — เฉลยโดย Claude ทั้งหมด · รูปในโจทย์ os74d_* */
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
const Co=o=>Object.assign({set:"MDCU74",ro:"RoD",file:"SO74DQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:1,orig:"1",topic:"pe",sub:"DRE/Prostate",title:"DRE on a prostate model — hard gland",
 stem:`A prostate examination model is provided.<br>1. Examine and describe your findings.<br>2. What is the diagnosis?`,
 gray:"1. PR หุ่น prostate แข็งๆ อัน wood like บรรยาย + วินิจฉัย",
 notes:"ไม่มีไฟล์เฉลย · ผู้จดบอกว่าต่อมแข็งเหมือนไม้ (wood-like)",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Describe.",6,{tags:["pe"],ans:"Sphincter tone · size · <b>consistency แข็งมาก (stony/woody hard)</b> · surface <b>nodular/irregular</b> · <b>median sulcus หาย</b> · fixed, mucosa ไม่เคลื่อนบนต่อม · ไม่กดเจ็บ · ถุงมือ",rubric:"1/ประเด็น",pts:[P("Size","size"),CR(P("Stony hard","hard","stony","wood","แข็ง")),P("Irregular, nodular","irregular","nodul"),P("Obliterated median sulcus","sulcus"),P("Fixed mucosa","fix","mobil")]}),
  B("1.2 Diagnosis.",2,{tags:["pe"],ans:"<b>Carcinoma of the prostate</b>",rubric:"ได้",pts:[CR(P("Prostate cancer","cancer","carcinoma"))]})
 ),
 interp:"Hard prostate",
 summary:["Hard, nodular, sulcus obliterated → CA","Next: PSA, MRI, biopsy"]}),

/* ===== OSCE 2 ===== */
Co({page:1,orig:"2",topic:"proc",sub:"Local anesthesia",ex:1,proc:1,title:"Local anesthesia and one simple stitch",
 stem:`The examiner is observing.<br>1. Demonstrate local anesthetic infiltration of a wound.<br>2. Place one simple interrupted stitch.`,
 gray:"2. ฉีดยาชา + simple suture 1 ครั้ง",
 notes:"ไม่มีไฟล์เฉลย · ข้อคล้ายกับ 75D OSCE 7",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Local anesthesia.",4,{tags:["proc"],ans:"1% lidocaine ± adrenaline · ตรวจยา · ดูดด้วยเข็มใหญ่ เปลี่ยนเป็นเข็มเล็ก 25G · แทงผ่านขอบแผล · <b>aspirate ก่อนฉีด</b> · ฉีดช้า ๆ · รอและทดสอบชา · max 4.5 mg/kg (7 mg/kg with adrenaline)",rubric:"ได้",pts:[CR(P("Aspirate before injecting","aspirat")),P("Through wound edges, slowly","edge","slow"),P("Maximum dose","4.5","7 mg","max")]}),
  B("2.2 Simple stitch.",4,{tags:["proc"],ans:"แทงตั้งฉาก ระยะเท่ากัน · instrument tie ปมแรก 2 รอบ + กลับทิศ · ปมข้างแผล",rubric:"ได้",pts:[CR(P("Equal perpendicular bites","perpendic","equal")),CR(P("Square knot","knot","square"))]})
 ),
 interp:"LA + suture",
 summary:["Aspirate before injection","Max lidocaine dose"]}),

/* ===== OSCE 3 ===== */
Co({page:1,orig:"3",topic:"hx",sub:"Other history",ex:1,title:"History taking — dysphagia (achalasia)",
 stem:`A simulated patient presents with difficulty swallowing. Take a history.`,
 gray:"3. ซักประวัติกลืนลำบาก achalasia",
 sp:"หญิง 35 ปี กลืนลำบากทั้งของแข็งและของเหลวตั้งแต่แรก 1 ปี ค่อย ๆ เป็นมากขึ้น ขย้อนอาหารที่ไม่ย่อยตอนนอน ไอตอนกลางคืน น้ำหนักลดเล็กน้อย ไม่สูบบุหรี่ไม่ดื่มสุรา",
 notes:"ไม่มีไฟล์เฉลย · ผู้จดเขียนว่าเป็น achalasia",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Dysphagia history.",10,{tags:["hx"],ans:"<b>Oropharyngeal vs esophageal</b> (เริ่มกลืนแล้วสำลัก/ไอทันที vs ติดหลังกลืน) · <b>solid หรือ liquid</b> (ทั้งคู่ตั้งแต่แรก = motility เช่น achalasia; solid แล้วค่อย ๆ liquid = mechanical/มะเร็ง) · progressive/intermittent · ตำแหน่งที่ติด · <b>regurgitation</b> อาหารไม่ย่อย, ไอกลางคืน/aspiration · odynophagia · heartburn · <b>น้ำหนักลด</b> · chest pain · risk ของมะเร็ง (smoking, alcohol, อายุ), กินสารกัดกร่อน, GERD เดิม · ประวัติเดินทาง (Chagas)",rubric:"สัดส่วนตามหมวด",
   pts:[H("Characterize",50),CR(P("Solid vs liquid from onset","solid","liquid","ของแข็ง","ของเหลว")),P("Oropharyngeal vs esophageal","oropharyn","esophag"),P("Progression, level","progress","level","ตำแหน่ง"),H("Associated",30),P("Regurgitation, night cough","regurgit","cough","ไอ"),P("Weight loss","weight","น้ำหนัก"),P("Heartburn, odynophagia, chest pain","heartburn","odyno","chest"),H("Risk",20),P("Smoking, alcohol, caustic","smok","alcohol","caustic","กัดกร่อน")]})
 ),
 interp:"Achalasia history",
 summary:["Achalasia: dysphagia to solids and liquids, regurgitation","Ba swallow: bird beak","Manometry: incomplete LES relaxation + aperistalsis (gold standard)","Rx: pneumatic dilatation, Heller myotomy + fundoplication, POEM"]}),

/* ===== OSCE 4 ===== */
Co({page:1,orig:"4",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Sterile gloving and wet dressing",
 stem:`The examiner is observing.<br>1. Put on sterile gloves.<br>2. Perform a wet dressing of an infected open wound.`,
 gray:"4. ใส่ถุงมือ sterile + Wet dressing",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Sterile gloving.",3,{tags:["proc"],ans:"Open gloving ไม่ให้ปนเปื้อน",rubric:"ได้",pts:[CR(P("No contamination","contamin","sterile")),P("Cuff technique","cuff")]}),
  B("4.2 Wet dressing.",7,{tags:["proc"],ans:"ประเมินแผล (ขนาด discharge กลิ่น granulation) · เช็ดผิวรอบแผลด้วย antiseptic จาก<b>ในออกนอก</b> · <b>ล้างแผลด้วย NSS</b> · debride slough/ซับหนอง · <b>ชุบ gauze ด้วย NSS บิดหมาด</b> วางสัมผัสพื้นแผล/อุดโพรง (ไม่แน่น) · ปิดทับด้วย gauze แห้ง · ติดเทป · ทิ้งขยะ ล้างมือ · บันทึก",exp:"Wet-to-dry ช่วย mechanical debridement · ทำวันละ 1–2 ครั้ง",rubric:"ได้ตามขั้น",pts:[P("Assess wound","assess","ประเมิน","discharge"),P("Clean surrounding skin inside-out","inside","outward","ในออกนอก"),CR(P("Irrigate with NSS","nss","saline","irrigat","ล้าง")),CR(P("Moist gauze into wound, dry cover","moist","wet","หมาด","ชุบ")),P("Secure, dispose, document","tape","dispose","record")]})
 ),
 interp:"Wet dressing",
 summary:["Dry dressing = closed wound","Wet dressing = open/infected wound","Moist gauze, not tightly packed"]}),

/* ===== OSCE 5 ===== */
Co({page:1,orig:"5",topic:"inst",sub:"Surgical instrument",title:"Instruments — name and use",
 stem:`Five items are on the table: curved Mayo scissors, a trocar, a Deaver retractor, a towel clamp and a chest drain.<br>1. Name each item and state its use.`,
 gray:"5. อุปกรณ์ 5 อัน curved mayo scissors, trocar, Deaver retractor, towel clamp, chest drain",
 imgAlt:"เครื่องมือ 5 ชิ้น",flag:NOIMG,
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Name and use.",10,{tags:["inst"],ans:"<b>Curved Mayo scissors</b>: ตัดเนื้อเยื่อหนา (fascia) · <b>Trocar</b>: แทงผ่านผนังหน้าท้องเพื่อใส่กล้อง/เครื่องมือ laparoscopy (หรือ trocar ของ chest drain) · <b>Deaver retractor</b>: รั้งผนังหน้าท้อง/อวัยวะลึก · <b>Towel clamp (Backhaus)</b>: ยึดผ้า drape ให้อยู่กับที่/จับกระดูก · <b>Chest drain</b>: ระบายลม/เลือด/หนองในช่องเยื่อหุ้มปอด",rubric:"2/ชิ้น",pts:[P("Mayo scissors","mayo","cut"),P("Trocar for laparoscopic port","trocar","port","laparoscop"),P("Deaver retractor","deaver","retract"),P("Towel clamp for drapes","towel","drape","backhaus"),CR(P("Chest drain","chest","pleural","pneumothorax"))]})
 ),
 interp:"Instruments",
 summary:["Towel clamp: drapes","Trocar: laparoscopic access","Chest drain: safe triangle"]}),

/* ===== OSCE 6 ===== */
Co({page:1,orig:"6",topic:"pe",sub:"Head & neck",ex:1,title:"Neck mass examination — midline cyst",
 stem:`A patient presents with a midline neck mass (picture shown). The examiner is observing.<br>1. Examine the neck mass.<br>2. What is the diagnosis?`,
 gray:"6. จงแสดงการตรวจร่างกายมาด้วยก้อนที่คอ + วินิจฉัย (ดูรูป) dx thyroglossal duct cyst",
 imgAlt:"ก้อนกลมที่กลางคอเหนือ thyroid cartilage",flag:NOIMG,
 notes:"ไม่มีไฟล์เฉลย · ผู้จดเขียน dx thyroglossal duct cyst",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 Examination.",6,{tags:["pe"],ans:"Inspection: ตำแหน่ง (midline/lateral, สัมพันธ์ hyoid) · ให้<b>กลืนน้ำ</b> (ก้อนเคลื่อนขึ้น = สัมพันธ์ larynx/thyroid) · ให้<b>แลบลิ้น</b> (TGDC เคลื่อนขึ้น) · palpation จากด้านหลัง: ขนาด ผิว consistency fluctuation tenderness · transillumination · คลำ thyroid และ <b>cervical lymph nodes</b> · ตรวจ trachea",rubric:"ได้ตามขั้น",pts:[P("Inspection, position","inspect","midline"),CR(P("Swallowing test","swallow","กลืน")),CR(P("Tongue protrusion","tongue","ลิ้น","protru")),P("Palpation from behind, lymph nodes","palpat","behind","lymph","node")]}),
  B("6.2 Diagnosis.",2,{tags:["pe"],ans:"<b>Thyroglossal duct cyst</b> → Sistrunk operation (หลัง US ยืนยันต่อม thyroid ปกติ)",rubric:"ได้",pts:[CR(P("Thyroglossal duct cyst","thyroglossal","tgdc"))]})
 ),
 interp:"TGDC",
 summary:["Moves with swallowing and tongue protrusion","US to confirm normal thyroid","Sistrunk procedure"]}),

/* ===== OSCE 7 ===== */
Co({page:2,orig:"7",topic:"suture",sub:"Suture material",title:"Choose sutures for different tissues",
 stem:`Prolene, silk, nylon, Vicryl and catgut are provided. Choose sutures for four of these tasks: suturing muscle, bowel anastomosis, ligating an artery, ligating a vein, and closing skin. For each, give the generic name, mono- or polyfilament, and absorbable or non-absorbable.`,
 gray:"7. ไหม เย็บกล้ามเนื้อ ลำไส้ ผูกเส้นเลือดแดง เส้นเลือดดำ เย็บผิวหนัง (ให้ prolene silk nylon vicryl catgut เลือกตอบ 4 ข้อ) เติม generic name, mono/polyfilament, absorbable/non-absorbable",
 notes:"ไม่มีไฟล์เฉลย · ข้อคล้ายกับ 75C OSCE 2",
 opinion:"ความมั่นใจปานกลาง (การเลือกไหมยืดหยุ่น)",
 parts:S(
  B("7.1 Muscle.",2,{tags:["suture"],ans:"<b>Vicryl (polyglactin 910)</b> — polyfilament (braided), absorbable",rubric:"ได้",pts:[CR(P("Vicryl","vicryl","polyglactin"))]}),
  B("7.2 Bowel.",2,{tags:["suture"],ans:"<b>Vicryl</b> 3-0 (หรือ silk สำหรับ seromuscular layer) — braided, absorbable",rubric:"ได้",pts:[CR(P("Vicryl or silk","vicryl","silk"))]}),
  B("7.3 Ligate artery / vein.",2,{tags:["suture"],ans:"<b>Silk</b> — natural, polyfilament (braided), non-absorbable (ligate vessel) · vascular anastomosis ใช้ Prolene",rubric:"ได้",pts:[CR(P("Silk","silk"))]}),
  B("7.4 Skin.",2,{tags:["suture"],ans:"<b>Nylon</b> — monofilament, non-absorbable",rubric:"ได้",pts:[CR(P("Nylon","nylon","ethilon"))]})
 ),
 interp:"Suture selection",
 summary:["Vicryl: braided absorbable","Silk: braided non-absorbable ligature","Nylon/Prolene: monofilament non-absorbable","Catgut: natural absorbable"]}),

/* ===== OSCE 8 ===== */
Co({page:2,orig:"8",topic:"hx",sub:"Other history",ex:1,title:"Hematuria — history and examination (written)",
 stem:`A patient presents with hematuria.<br>1. Write the history you would take.<br>2. What physical examination would you perform?`,
 gray:"8. ซักประวัติ hematuria + จะตรวจร่างกายอะไร (เขียนตอบใส่กระดาษ)",
 notes:"ไม่มีไฟล์เฉลย · ข้อคล้ายกับ 74A OSCE 9, 75D MEQ 2",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("8.1 History.",5,{tags:["hx"],ans:"Gross/micro, timing, clots, pain/painless · LUTS, flank pain, ไข้ · smoking, occupational chemicals · anticoagulant, cyclophosphamide · stones, trauma, exercise, menstruation · weight loss · family history",rubric:"ได้",pts:[P("Timing, clots, pain","timing","clot","pain"),CR(P("Smoking/occupational","smok","chemical")),P("Drugs, stone, infection, trauma","anticoag","stone","infect","trauma")]}),
  B("8.2 Examination.",4,{tags:["hx"],ans:"BP, pallor, edema · abdomen (kidney, bladder) · genitalia · <b>DRE</b> (ชาย)/pelvic (หญิง)",rubric:"ได้",pts:[P("BP, pallor, edema","bp","pallor","edema"),P("Abdomen","kidney","bladder","abdom"),CR(P("DRE / pelvic exam","dre","rectal","pelvic"))]})
 ),
 interp:"Hematuria",
 summary:["Painless gross hematuria → urothelial cancer workup","CT urography + cystoscopy"]}),

/* ===== OSCE 9 ===== */
Co({page:2,orig:"9",topic:"img",sub:"Clinical photograph",title:"Prolapsed hemorrhoids — identify and treat",
 stem:`A picture of prolapsed, thrombosed (possibly strangulated) internal hemorrhoids is shown.<br>1. What is it?<br>2. What is the treatment?`,
 gray:"9. ให้รูป Prolapsed hemorrhoid (strangulated/thrombosed มั้งนะ) ถามว่าคือไร + tx",
 imgAlt:"ก้อนริดสีดวงหลายหัวยื่นออกนอกทวาร สีม่วงคล้ำ บวม",flag:NOIMG,
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("9.1 Diagnosis.",2,{tags:["img"],ans:"<b>Prolapsed thrombosed (strangulated) internal hemorrhoids</b> grade IV",rubric:"ได้",pts:[CR(P("Prolapsed/strangulated hemorrhoids","hemorrhoid","prolaps","strangul","thrombos"))]}),
  B("9.2 Treatment.",3,{tags:["img"],ans:"ปวดมาก/strangulated → <b>urgent excisional hemorrhoidectomy</b> (Milligan-Morgan/Ferguson) · ระหว่างรอ: analgesic, sitz bath, stool softener · ไม่ทำ rubber band ligation ในระยะนี้",rubric:"ได้",pts:[CR(P("Hemorrhoidectomy","hemorrhoidectomy","excision","milligan","ferguson")),P("Analgesia, sitz bath, softener","analges","sitz","soften")]})
 ),
 interp:"Strangulated hemorrhoids",
 summary:["Grade IV/strangulated → hemorrhoidectomy","RBL for grade I–III"]}),

/* ===== OSCE 10 ===== */
Co({page:2,orig:"10",topic:"inst",sub:"Tube/Catheter",title:"Foley catheter insertion (written)",
 stem:`Write the steps for inserting a Foley urinary catheter.`,
 gray:"10. วิธีใส่ foley (เขียนตอบ)",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("10.1 Steps.",8,{tags:["inst","proc"],ans:"Indication/consent · เลือกขนาด (ผู้ใหญ่ 14–16 Fr) · ล้างมือ sterile glove, test balloon · ทำความสะอาด meatus · lidocaine gel · ชาย: จับองคชาตตั้ง 90° สอดจนสุด · <b>รอ urine แล้วเป่า balloon ด้วย sterile water</b> · ดึงกลับ · ต่อ closed drainage ถุงต่ำกว่ากระเพาะ · ชาย: ดึง foreskin กลับ · ติดเทป · บันทึก",rubric:"ได้ตามขั้น",pts:[P("Consent, size","consent","size","fr"),CR(P("Aseptic technique","steril","aseptic")),P("Lubricant gel","gel","lubric","lidocaine"),CR(P("Inflate after urine flows","urine","after","ไหล")),P("Closed drainage, foreskin, secure","closed","foreskin","tape","bag")]})
 ),
 interp:"Catheterization",
 summary:["Aseptic, closed system","Inflate after urine","Reposition foreskin"]}),

/* ===== OSCE 11 ===== */
Co({page:2,orig:"11",topic:"path",sub:"Other spot",title:"Indications for lipoma excision",
 stem:`A patient has a subcutaneous lipoma. List the indications for excision.`,
 gray:"11. Indication lipoma excision",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("11.1 Indications.",5,{tags:["path"],ans:"<b>มีอาการ</b> (เจ็บ กดเส้นประสาท) · ขนาดใหญ่ (&gt;5 cm) หรือ<b>โตเร็ว</b> · ลักษณะสงสัย <b>liposarcoma</b> (ใหญ่ ลึกใต้ fascia แข็ง fixed) · ความสวยงาม/ผู้ป่วยต้องการ · รบกวนการใช้งาน · วินิจฉัยไม่แน่ชัด",rubric:"1/ข้อ",pts:[CR(P("Symptomatic / pain","symptom","pain","เจ็บ")),CR(P("Large >5 cm, rapid growth, suspicious for sarcoma","5 cm","rapid","sarcoma","โตเร็ว","deep")),P("Cosmetic / functional / patient wish","cosmetic","function","ความสวย","ต้องการ")]})
 ),
 interp:"Lipoma",
 summary:["Soft, mobile, slip sign","Deep/large/rapid → MRI ± biopsy (sarcoma)","Excise with capsule"]}),

/* ===== OSCE 12 ===== */
Co({page:3,orig:"12",topic:"inst",sub:"Ostomy appliance",title:"Stoma and ostomy bag",img:["os74d_12"],
 stem:`A picture is shown and an ostomy bag is on the table.<br>1. What is shown in the picture?<br>2. What is the ostomy bag and what is it used for?`,
 gray:"12. ให้รูปนี้ถามว่าคืออะไร + ให้ ostomy bag ถามว่าคืออะไร ใช้ทำอะไร",
 notes:"ไม่มีไฟล์เฉลย · รูป: stoma สีชมพูกลมบนผนังหน้าท้อง",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("12.1 Picture.",2,{tags:["inst"],ans:"<b>Stoma (end colostomy/ileostomy)</b> บนผนังหน้าท้อง — mucosa ชมพู ชุ่ม ยื่นเล็กน้อย",rubric:"ได้",pts:[CR(P("Stoma / colostomy / ileostomy","stoma","colostomy","ileostomy"))]}),
  B("12.2 Ostomy bag.",3,{tags:["inst"],ans:"<b>Ostomy appliance (pouch + baseplate)</b> — เก็บอุจจาระ/ของเสียจาก stoma ป้องกันผิวหนังรอบ stoma ตัดรูให้ใหญ่กว่า stoma ~2–3 mm",rubric:"ได้",pts:[CR(P("Collect effluent from stoma","collect","เก็บ","pouch","bag")),P("Protect peristomal skin, cut to size","skin","size","ผิวหนัง")]})
 ),
 interp:"Stoma appliance",
 summary:["Colostomy: left iliac fossa, flush","Ileostomy: right iliac fossa, spout 2–3 cm","Peristomal skin care"]}),

SA({page:2,orig:"MEQ 1",num:"SA 1",sub:"Pediatric surgery",title:"Short answer — neonatal abdominal film",
 stem:`A neonate with bilious vomiting has a plain abdominal radiograph showing a double bubble with no distal gas.<br>1. What is the diagnosis?<br>2. What is its most common cause and associated condition?`,
 gray:"MEQ 1. ให้ film duodenal atresia มา ถาม dx กับสาเหตุที่พบมากสุด (T_T)",
 flag:NOIMG,imgAlt:"AXR: double bubble (stomach + duodenum) ไม่มีลมส่วนปลาย",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ความมั่นใจปานกลาง (ไม่ชัดว่า \"สาเหตุ\" หมายถึงอะไร)",
 parts:S(
  B("1.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Duodenal atresia</b> (double bubble sign)",rubric:"ได้",pts:[CR(P("Duodenal atresia","duodenal atresia","double bubble"))]}),
  B("1.2 Cause and association.",2,{tags:["spot"],ans:"สาเหตุ: <b>failure of recanalization</b> ของ duodenum (สัปดาห์ที่ 8–10) · associated: <b>Down syndrome (~30%)</b>, annular pancreas, malrotation, cardiac anomaly",rubric:"ได้",pts:[CR(P("Failure of recanalization","recanaliz")),P("Down syndrome","down","trisomy 21")]})
 ),
 interp:"Duodenal atresia",
 summary:["Double bubble","Down syndrome 30%","Duodenoduodenostomy (diamond)"]}),

SA({page:2,orig:"MEQ 2",num:"SA 2",sub:"Hernia/Abdominal wall",title:"Short answer — name the hernias",img:["os74d_m2"],
 stem:`Name the type of hernia at each labelled site in the diagram (labels hidden in the exam).`,
 gray:"2. ให้เติมชนิดของ hernia (ออกรูปนี้เลย ปิดตัวหนังสือ)",
 flag:"รูปในไฟล์มีชื่อกำกับ (ข้อสอบจริงปิดตัวหนังสือ)",
 notes:"ไม่มีไฟล์เฉลย · รูปแผนภาพ hernia บนผนังหน้าท้อง",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Hernia types.",6,{tags:["spot"],ans:"<b>Epigastric</b> (linea alba เหนือสะดือ) · <b>Umbilical</b> · <b>Incisional</b> (แผลผ่าตัด) · <b>Spigelian</b> (lateral ต่อ rectus ตาม semilunar line) · <b>Inguinal</b> (เหนือ inguinal ligament) · <b>Femoral</b> (ใต้ inguinal ligament, medial ต่อ femoral vein)",rubric:"1/ชนิด",pts:[P("Epigastric","epigastric"),P("Umbilical","umbilical"),P("Incisional","incisional"),P("Spigelian","spigelian"),P("Inguinal","inguinal"),P("Femoral","femoral")]})
 ),
 interp:"Abdominal wall hernias",
 summary:["Femoral: below and lateral to pubic tubercle, high strangulation risk","Spigelian: semilunar line below arcuate line"]}),

SA({page:2,orig:"MEQ 3",num:"SA 3",sub:"Acute abdomen series",title:"Short answer — abdominal pain 6 months after appendectomy",img:["os74d_m3"],
 stem:`A patient who had an appendectomy 6 months ago now has abdominal pain and distension. Films are shown.<br>1. What is this series called?<br>2. Interpret the films.<br>3. What is the diagnosis and its most common cause?<br>4. How would you manage it?`,
 gray:"3. ให้ประวัติคนไข้หลังผ่าตัดไส้ติ่งมา 6 เดือน การตรวจชุดนี้เรียกว่า? อ่านผลฟิล์ม? Dx? สาเหตุที่พบได้บ่อยที่สุด? Management?",
 notes:"ไม่มีไฟล์เฉลย · ข้อคล้ายกับ 75C MEQ 4",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Series.",1,{tags:["spot"],ans:"<b>Acute abdomen series</b> (supine + upright abdomen ± upright CXR)",rubric:"ได้",pts:[CR(P("Acute abdomen series","acute abdomen","supine","upright"))]}),
  B("3.2 Interpretation.",2,{tags:["spot"],ans:"Dilated small bowel loops ตรงกลาง, valvulae conniventes, step-ladder, air-fluid levels ต่างระดับ, colonic gas น้อย",rubric:"ได้",pts:[CR(P("Dilated small bowel, air-fluid levels","dilat","small bowel","air-?fluid","step"))]}),
  B("3.3 Diagnosis and cause.",2,{tags:["spot"],ans:"<b>Small bowel obstruction</b> จาก <b>postoperative adhesion</b>",rubric:"ได้",pts:[CR(P("SBO from adhesion","obstruct","adhesion"))]}),
  B("3.4 Management.",3,{tags:["spot"],ans:"NPO, NG decompression, IV fluid, electrolyte · water-soluble contrast challenge · ผ่าตัด (adhesiolysis) เมื่อมี strangulation/ไม่ดีขึ้น 48–72 ชม.",rubric:"ได้",pts:[CR(P("NPO, NG, IV fluid","npo","ng","fluid")),P("Surgery if strangulation/failure","surgery","adhesiolysis","strangul")]})
 ),
 interp:"Adhesive SBO",
 summary:["Adhesion most common","Conservative first if no strangulation"]}),

SA({page:3,orig:"MEQ 4",num:"SA 4",sub:"Neuro motor/reflex",title:"Short answer — muscle testing clip",
 stem:`A clip shows a patient dorsiflexing the ankle against the examiner's resistance.<br>1. Which muscle is being tested?<br>2. Which nerve root does it represent?`,
 gray:"4. คลิปตรวจ muscle test ถามว่าตรวจ muscle อะไร และ nerve root ไหน (น่าจะสุ่มออก 3 รูป)",
 flag:"ไฟล์บอกว่าเป็นคลิป/สุ่มรูป 3 แบบ ไม่ระบุว่าท่าไหน — Claude เลือกท่า ankle dorsiflexion เป็นตัวอย่าง",
 notes:"ไม่มีไฟล์เฉลย · ข้อคล้ายกับ 75C MEQ 10",
 opinion:"ไฟล์ไม่ระบุท่า — Claude แต่งตัวอย่าง ความมั่นใจสูงตามท่าที่แต่ง",
 parts:S(
  B("4.1 Muscle.",1,{tags:["spot"],ans:"<b>Tibialis anterior</b>",rubric:"ได้",pts:[CR(P("Tibialis anterior","tibialis"))]}),
  B("4.2 Root.",1,{tags:["spot"],ans:"<b>L4</b> (L4–L5)",rubric:"ได้",pts:[CR(P("L4","l4"))]})
 ),
 interp:"Myotomes",
 summary:["Hip flexion L2 · knee extension L3–4 · ankle dorsiflexion L4 · great toe extension L5 · plantar flexion S1","Shoulder abduction C5 · elbow flexion C5–6 · wrist extension C6 · elbow extension C7 · finger flexion C8 · finger abduction T1"]}),

SA({page:3,orig:"MEQ 5",num:"SA 5",sub:"Plastic/Skin/Burn",title:"Short answer — pigmented lesion (melanoma)",
 stem:`A photograph of an asymmetric, irregularly pigmented lesion with irregular borders is shown.<br>1. Describe the lesion.<br>2. What is the diagnosis?<br>3. What is the management?`,
 gray:"5. Describe lesion? Dx? Management? (Malignant melanoma)",
 flag:NOIMG,imgAlt:"ก้อน/ปื้นสีดำ น้ำตาล ไม่สม่ำเสมอ ขอบขรุขระ",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Describe.",2,{tags:["spot"],ans:"ABCDE: <b>Asymmetry, irregular Border, variegated Color, Diameter &gt;6 mm, Evolving</b> ± ulceration/nodule",rubric:"ได้",pts:[CR(P("ABCDE features","asymmetr","border","color","diameter","abcde"))]}),
  B("5.2 Diagnosis.",1,{tags:["spot"],ans:"<b>Malignant melanoma</b>",rubric:"ได้",pts:[CR(P("Melanoma","melanoma"))]}),
  B("5.3 Management.",3,{tags:["spot"],ans:"<b>Excisional biopsy</b> 1–3 mm margin → Breslow thickness → <b>wide local excision</b> (≤1 mm: 1 cm; 1–2 mm: 1–2 cm; &gt;2 mm: 2 cm) ± <b>SLNB</b> (≥T1b) · staging ตาม stage",rubric:"ได้",pts:[P("Excisional biopsy","excisional","biopsy"),CR(P("Wide local excision by Breslow","wide","breslow")),P("SLNB","sentinel","slnb")]})
 ),
 interp:"Melanoma",
 summary:["ABCDE","Breslow → margin","SLNB ≥0.8 mm/ulcer"]}),

SA({page:3,orig:"MEQ 6",num:"SA 6",sub:"Vascular/Ulcer",title:"Short answer — plantar foot ulcer",img:["os74d_m6"],
 stem:`A photograph of a foot lesion is shown.<br>1. Describe the lesion.<br>2. What is the diagnosis?<br>3. What additional physical examinations would you perform?`,
 gray:"6. Describe lesion? Dx? Physical examination เพิ่มเติม?",
 notes:"ไม่มีไฟล์เฉลย · รูป: แผลกลมขอบหนา (callus) ที่ฝ่าเท้าใต้หัวกระดูก metatarsal",
 opinion:"ไม่มีเฉลย — Claude อ่านภาพ ความมั่นใจปานกลาง",
 parts:S(
  B("6.1 Describe.",2,{tags:["spot"],ans:"แผลกลม punched-out ขอบเป็น <b>callus หนา</b> ที่ <b>ฝ่าเท้าบริเวณ pressure point</b> (metatarsal head) พื้นแผลแดง ไม่เจ็บ",rubric:"ได้",pts:[CR(P("Punched-out ulcer with callus at pressure point","callus","punched","pressure","plantar"))]}),
  B("6.2 Diagnosis.",2,{tags:["spot"],ans:"<b>Neuropathic (diabetic) foot ulcer</b>",rubric:"ได้",pts:[CR(P("Neuropathic diabetic foot ulcer","neuropath","diabet"))]}),
  B("6.3 Additional examination.",3,{tags:["spot"],ans:"<b>Sensation: 10-g monofilament</b>, vibration (128 Hz tuning fork), ankle reflex · <b>Vascular: dorsalis pedis/posterior tibial pulses, ABI</b> · <b>probe-to-bone</b> (osteomyelitis) · ติดเชื้อ (แดง บวม หนอง) · deformity (Charcot, claw toe) · รองเท้า",rubric:"ได้",pts:[CR(P("Monofilament / sensation","monofilament","sensation","vibration")),CR(P("Pulses / ABI","pulse","abi","dorsalis")),P("Probe to bone / infection","probe","bone","infect"),P("Deformity","charcot","deform","claw")]})
 ),
 interp:"Diabetic neuropathic ulcer",
 summary:["Off-loading is key","Probe-to-bone → osteomyelitis","Check perfusion (ABI, toe pressure)"]}),

SA({page:3,orig:"MEQ 7",num:"SA 7",sub:"Mammogram",title:"Short answer — breast image view",
 stem:`A breast image (mammogram) is shown.<br>1. Name the view.<br>2. Describe the lesion.`,
 gray:"7. รูปนม ถาม view + describe lesion",
 flag:NOIMG,imgAlt:"Mammogram ภาพเดียว ถ่ายเฉียงเห็นแถบกล้ามเนื้อ pectoralis เป็นสามเหลี่ยมที่มุมบน · ส่วนบนของเต้านมมีก้อนความทึบสูงขนาด ~2 cm รูปร่างไม่สม่ำเสมอ ขอบเป็นแฉกแหลม",
 notes:"ไม่มีไฟล์เฉลย · ไม่รู้ภาพจริง",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไม่มีไฟล์เฉลยและไม่มีรูป — ยืนยันจากแหล่งอ้างอิงไม่ได้ว่าภาพจริงเป็นอะไร คงเฉลยแบบกรอบ (MLO เห็น pectoralis, CC; บรรยายตาม ACR BI-RADS Atlas 5th ed.: location, size, shape, margin, density, calcification, associated features → category) · ความมั่นใจต่ำ",
 parts:S(
  B("7.1 View.",1,{tags:["spot"],ans:"<b>MLO</b> (เห็น pectoralis major เป็นสามเหลี่ยมมุมบน) หรือ <b>CC</b> (เห็นเต้านมจากบนลงล่าง, หัวนมอยู่กึ่งกลาง)",rubric:"ได้",pts:[CR(P("MLO or CC","mlo","cc","oblique","craniocaudal"))]}),
  B("7.2 Describe.",3,{tags:["spot"],ans:"บรรยาย: ตำแหน่ง (quadrant/นาฬิกา), ขนาด, <b>shape</b>, <b>margin</b> (circumscribed vs spiculated), density, <b>calcification</b>, skin/nipple retraction, axillary node → BI-RADS",rubric:"ได้",pts:[P("Location, size","location","size","quadrant"),CR(P("Margin, shape","margin","spicul","circumscrib","shape")),P("Calcification, skin, nodes","calcif","skin","node")]})
 ),
 interp:"Mammogram reading",
 summary:["MLO: pectoralis visible","Spiculated mass → BI-RADS 5","Report with BI-RADS"]}),

SA({page:3,orig:"MEQ 8",num:"SA 8",sub:"Head & neck",title:"Short answer — preauricular sinus",
 stem:`A child has a preauricular sinus. Outline the management.`,
 gray:"8. Preauricular sinus บอกแนวทางการรักษา",
 flag:NOIMG,imgAlt:"เด็กมีรูเปิดเล็กขนาดหัวเข็มหน้าต่อขอบหน้าของใบหูตรงโคน helix ผิวรอบรูปกติ ผู้ปกครองเล่าว่าเคยบวมแดงมีหนองไหลออกจากรูนี้มาแล้ว 2 ครั้ง",
 notes:"ไม่มีไฟล์เฉลย · ข้อคล้ายกับ 74C เลข 6",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("8.1 Management.",4,{tags:["spot"],ans:"ไม่มีอาการ → <b>observe</b> ไม่ต้องผ่าตัด · ติดเชื้อ → ATB ± I&amp;D · ติดเชื้อซ้ำ → <b>complete excision ของ sinus tract</b> เมื่อสงบ · bilateral/มีอาการร่วม → ตรวจการได้ยิน + renal US (branchio-oto-renal)",rubric:"ได้",pts:[CR(P("Observe if asymptomatic","observe","asymptom")),CR(P("Excision if recurrent infection","excis","recurrent")),P("Antibiotics / I&D when infected","antibio","drain","i&amp;?d"),P("Hearing / renal evaluation","hearing","renal","kidney")]})
 ),
 interp:"Preauricular sinus",
 summary:["Asymptomatic: leave","Recurrent infection: excise completely"]}),

SA({page:3,orig:"MEQ 9",num:"SA 9",sub:"Plastic/Skin/Burn",title:"Short answer — burn depth and wound care",
 stem:`A photograph of a burn wound with blisters and a moist, pink, painful base is shown.<br>1. What degree of burn is this?<br>2. How would you care for the wound?`,
 gray:"9. Burn degree ไหน, วิธีการดูแลแผล",
 flag:NOIMG,imgAlt:"แผลไหม้มีตุ่มน้ำ พื้นชมพู ชุ่ม",
 notes:"ไม่มีไฟล์เฉลย · ไม่รู้ภาพจริง — Claude บรรยายเป็น superficial partial thickness",
 opinion:"ไฟล์ไม่มีรูป — Claude แต่งเอง ความมั่นใจปานกลาง",
 parts:S(
  B("9.1 Degree.",2,{tags:["spot"],ans:"<b>Superficial partial-thickness (superficial 2nd-degree) burn</b>",rubric:"ได้",pts:[CR(P("Superficial partial thickness / 2nd degree","partial","2nd","second","superficial"))]}),
  B("9.2 Wound care.",3,{tags:["spot"],ans:"Cooling ด้วยน้ำสะอาด 20 นาที (ระยะแรก) · analgesia · ล้าง NSS · จัดการ bleb (ใหญ่/ตึง → เจาะ/debride) · <b>topical antimicrobial (silver sulfadiazine)</b> หรือ silver/foam dressing · เปลี่ยนแผลสม่ำเสมอ · tetanus prophylaxis · หายใน 2–3 สัปดาห์",rubric:"ได้",pts:[P("Cool, analgesia, clean","cool","analges","clean","ล้าง"),CR(P("Topical antimicrobial / silver dressing","silver","sulfadiazine","dressing")),P("Tetanus prophylaxis","tetanus")]})
 ),
 interp:"Burn depth",
 summary:["Superficial partial: blister, moist, painful, blanch","Deep partial/full: excision + graft","Tetanus"]}),

SA({page:3,orig:"MEQ 10",num:"SA 10",sub:"Contrast GI study",title:"Short answer — barium swallow with bird's beak",
 stem:`A barium swallow shows a dilated esophagus tapering smoothly to a narrow gastroesophageal junction.<br>1. Describe the finding.<br>2. What is the diagnosis?`,
 gray:"10. Ba swallow บรรยาย Bird beak, Achalasia",
 flag:NOIMG,imgAlt:"Barium swallow: หลอดอาหารโป่ง ปลายเรียวแหลมเหมือนจะงอยปากนก",
 notes:"ไม่มีไฟล์เฉลย · คู่กับ OSCE 3 (ซักประวัติ achalasia)",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("10.1 Describe.",2,{tags:["spot"],ans:"Esophagus โป่ง ± air-fluid level · ส่วนปลายเรียวเล็กเป็น <b>\"bird's beak\"</b> ที่ GE junction",rubric:"ได้",pts:[CR(P("Dilated esophagus with bird's beak","bird","beak","dilat"))]}),
  B("10.2 Diagnosis.",2,{tags:["spot"],ans:"<b>Achalasia</b> (ยืนยันด้วย manometry และ endoscopy เพื่อแยก pseudoachalasia)",rubric:"ได้",pts:[CR(P("Achalasia","achalasia"))]})
 ),
 interp:"Achalasia",
 summary:["Bird's beak","Manometry gold standard","Exclude malignancy (pseudoachalasia) by endoscopy"]})
);
})();

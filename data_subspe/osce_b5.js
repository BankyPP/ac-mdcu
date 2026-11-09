(function(){
/* Surgery Subspecialties OSCE ข้อสอบเก่า AC — MDCU66 RoA ("Surgery Subspecialties: by Rotate 1/2556")
   ไฟล์: GSUP4K (01_5_MCQs_Key_4.pdf) หน้า 227–232 · หน้า 227–230 ส่วนใหญ่เป็น MCQ (ไม่ทำ) · [OSCE 13 ข้อ] เริ่มท้ายคอลัมน์ขวาหน้า 230 → หน้า 231 · [PowerPoint 14 ข้อ] หน้า 231 คอลัมน์ขวา → หน้า 232
   รูปแบบ: recall พิมพ์ (ไม่มีรูปข้อสอบจริงในไฟล์) + ลายมือ/ตัวพิมพ์สีแดงเป็นแนวคำตอบบางข้อ (OSCE 8, 9, 10; PPT 9, 10) + screenshot ตาราง Gross classification ของ TEF (ไฮไลต์ C) ข้าง PPT 7 → kimg os66a_k7
   OSCE: ข้อ 13 ไม่มีหัวข้อ "13." ในไฟล์ แต่มี 13.1/13.2 (เย็บแผล) → ลงเป็นสถานี 13
   PowerPoint: ไฟล์ใส่เลข 1–5 และ 12 · ข้ออื่นเป็นขีด (-) ไม่มีเลข → ไล่เลขตามลำดับ: PPT 6 fissure, 7 TEF, 8 gastroschisis, 9 cleft lip, 10 condyloma, 12 burn (เลขในไฟล์), 13 แผลกดทับ, 14 ตุ่มแดงที่แขน
     → PPT 11 ไม่มีในไฟล์ (ผู้จดไม่ได้จด) · PPT 2 กับ 3 เป็นเคสเดียวกัน (hernia) แต่ไฟล์แยกเลข → ลงแยก 2 สถานี (PPT 2 ผู้จดจำคำถามไม่ได้ → Claude แต่งคำถาม)
   ไม่มีรูปโจทย์ในไฟล์ทุกข้อ → imgNote NOIMG + imgAlt */
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
const Co=o=>Object.assign({set:"MDCU66",ro:"RoA",file:"GSUP4K",opinion:""},o);
QB.push(

/* ===== OSCE 1 ===== */
Co({page:230,sec:"OSCE",orig:"1",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Procedure — sterile gloving and dressing of an open bite wound",
 stem:`A patient was bitten by a dog 2 days ago. Wound debridement was performed and the wound has since been managed with wet dressings.<br>1.1 Demonstrate how to put on sterile gloves.<br>1.2 Demonstrate how to dress this wound using the wet dressing technique.`,
 gray:"[OSCE 13 ข้อ] 1. ผู้ป่วยถูกสุนัขกัดมา 2 วัน ทำ debridement และทำ wet dressing มาแล้ว · 1.1 จงแสดงวิธีใส่ถุงมือ sterile · 1.2 จงแสดงวิธีทำแผล dog bite แบบ wet dressing",
 sp:"หุ่นแขน/ขามีแผลเปิดจากสุนัขกัด หลัง debridement มี gauze เก่าปิดอยู่ · มี set ทำแผล (forceps 2 อัน, ถ้วย), NSS, gauze, ถุงมือ sterile, ถุงมือสะอาด, tape · ผู้คุมดู: เทคนิคใส่ถุงมือไม่ปนเปื้อน, ลำดับการทำแผล, ไม่เย็บปิดแผล, ความเหมาะสมของการชุบ gauze (หมาด ไม่โชก)",
 flag:"บทผู้คุม/อุปกรณ์ Claude แต่งตามโจทย์",
 parts:S(
  B("1.1 Demonstrate how to put on sterile gloves.",4,{tags:["proc"],
   ans:"<b>Closed/open gloving (open technique ในหอผู้ป่วย)</b>: ล้างมือ → เปิดซองชั้นนอกจับเฉพาะด้านนอก → เปิดซองชั้นในบนพื้นที่สะอาด → มือเปล่าจับ<b>ด้านในของขอบพับ (cuff)</b> ของถุงมือข้างแรกแล้วสวม → มือที่สวมแล้วสอด<b>นิ้วเข้าใต้ขอบพับ (ด้านนอก)</b> ของถุงมือข้างที่สอง แล้วสวม → คลี่ขอบพับโดยไม่แตะผิวหนัง → มืออยู่เหนือเอว/หน้าตัวตลอด",
   exp:"หลัก: ผิวมือเปล่าแตะได้เฉพาะด้านในของถุงมือ · ถุงมือที่สวมแล้วแตะได้เฉพาะด้านนอกของถุงมืออีกข้าง · ปนเปื้อน = เปลี่ยนใหม่",
   rubric:"ได้เต็ม = ไม่ปนเปื้อนเลย · ปนเปื้อนแล้วไม่รู้ตัว/ไม่เปลี่ยน = ไม่ผ่านข้อย่อยนี้",
   pts:[H("เตรียม",20),P("ล้างมือ / hand hygiene","ล้างมือ","hand hygiene","hand wash","alcohol"),P("เลือกขนาด ตรวจซองไม่ขาด/วันหมดอายุ","ขนาด","size","หมดอายุ","expir","ซอง"),
    H("ใส่ถุงมือ",60),P("เปิดซองจับเฉพาะด้านนอก","ด้านนอก.*ซอง","เปิดซอง","outer wrap","open.*package"),CR(P("ข้างแรก: มือเปล่าจับด้านในของขอบพับ","ด้านใน","inner","inside","ขอบพับ","cuff")),CR(P("ข้างที่สอง: นิ้วที่สวมถุงมือสอดใต้ขอบพับ (ด้านนอก)","ใต้ขอบพับ","under.*cuff","สอดนิ้ว","outer surface","ด้านนอก.*ถุงมือ")),P("คลี่ขอบพับไม่แตะผิวหนัง","คลี่","unfold","ไม่แตะผิว"),
    H("หลังใส่",20),P("มืออยู่เหนือเอว ไม่แตะสิ่งไม่ sterile / ปนเปื้อนเปลี่ยนใหม่","เหนือเอว","above.*waist","ปนเปื้อน","contaminat","เปลี่ยนใหม่")]}),
  B("1.2 Demonstrate wet dressing of this wound.",6,{tags:["proc"],
   ans:"<b>เตรียม</b>: แนะนำตัว ยืนยันตัวผู้ป่วย อธิบาย ขออนุญาต จัดท่า เตรียม set · ใส่ถุงมือสะอาดแกะ gauze เก่า (ติดแผลให้ชุบ NSS ก่อน) ทิ้งถังติดเชื้อ · <b>ประเมินแผล</b>: ขนาด ความลึก discharge/หนอง กลิ่น necrotic tissue granulation และ cellulitis รอบแผล<br><b>ทำ</b>: เปลี่ยนเป็นถุงมือ sterile/ใช้ forceps · ทำความสะอาดผิวรอบแผลด้วย antiseptic จากในออกนอก · ล้างในแผลด้วย <b>NSS</b> (ไม่ใช้ antiseptic เข้มข้นในแผล) · ชุบ gauze ด้วย NSS <b>บิดหมาด ไม่โชก</b> วางสัมผัสพื้นแผลทุกซอก (fill dead space หลวม ๆ ไม่อัดแน่น) · ปิดทับด้วย gauze แห้งหนา ๆ แล้วติด tape<br><b>หลังทำ</b>: <b>ไม่เย็บปิดแผล</b> (dog bite ติดเชื้อ/ปนเปื้อน → ปล่อยเปิด, delayed primary closure ถ้าแผลสะอาด) · เปลี่ยนแผลวันละ 2–3 ครั้ง · ตรวจ/ทบทวน rabies vaccine + RIG และ tetanus · ATB amoxicillin-clavulanate · นัดสังเกตอาการติดเชื้อ · ทิ้งขยะ ล้างมือ บันทึก",
   exp:"wet-to-moist dressing ช่วย debride ทางกลเบา ๆ และรักษาความชื้นให้ granulation ขึ้น · gauze ที่ชุ่มน้ำเกินทำให้ผิวรอบแผลเปื่อย (maceration) · แผลสุนัขกัดเสี่ยง Pasteurella, Capnocytophaga, anaerobes",
   rubric:"ได้เต็ม = ลำดับเตรียม-ทำ-หลังทำครบ ใช้ NSS บิดหมาด ไม่เย็บปิด · ลืม rabies/tetanus = หักบางส่วน",
   pts:[H("เตรียม",25),P("แนะนำตัว ยืนยันผู้ป่วย อธิบาย ขออนุญาต","แนะนำตัว","ยืนยัน","consent","ขออนุญาต","introduc"),P("แกะแผลเก่า (ชุบ NSS ถ้าติด) และประเมินแผล","แผลเก่า","old dressing","ประเมิน","assess","discharge","granulation"),
    H("ทำแผล",50),P("ทำความสะอาดผิวรอบแผลจากในออกนอก","รอบแผล","surrounding","ในออกนอก","inside.?out","antiseptic"),CR(P("ล้างแผลด้วย NSS","nss","normal saline","น้ำเกลือ")),CR(P("gauze ชุบ NSS บิดหมาด ใส่สัมผัสพื้นแผล ไม่อัดแน่น","หมาด","moist","บิด","wet gauze","ไม่อัด","loose")),P("ปิดทับ gauze แห้ง ติด tape","gauze แห้ง","dry gauze","tape","พลาสเตอร์"),
    H("หลังทำ",25),P("ไม่เย็บปิดแผล / delayed closure","ไม่เย็บ","delayed","leave open","เปิดไว้"),P("rabies + tetanus prophylaxis","rabies","พิษสุนัข","rig","tetanus","บาดทะยัก"),P("เปลี่ยนแผล 2–3 ครั้ง/วัน + ATB + สังเกตอาการติดเชื้อ","วันละ","bid","tid","amoxicillin","augmentin","ติดเชื้อ")]})
 ),
 interp:"หัตถการพื้นฐาน: sterile technique + การทำแผลเปิดที่ติดเชื้อ/ปนเปื้อน และการดูแลแผลสัตว์กัด",summary:["ถุงมือ sterile: มือเปล่าแตะด้านในขอบพับ ถุงมือที่สวมแล้วสอดใต้ขอบพับอีกข้าง","wet dressing: ล้าง NSS → gauze ชุบ NSS บิดหมาดใส่หลวม ๆ → gauze แห้งปิด","แผลสุนัขกัดติดเชื้อ: ไม่เย็บปิด + rabies/tetanus + amoxicillin-clavulanate"]}),

/* ===== OSCE 2 ===== */
Co({page:230,sec:"OSCE",orig:"2",topic:"hx",sub:"Other history",ex:1,title:"History — 40-year-old woman requesting breast cancer screening",
 stem:`A 40-year-old woman comes for her annual health check-up and requests screening for breast cancer. She has no complaints. Physical examination is not required.<br>2.1 Take a relevant history.<br>2.2 Give her advice on what she should do.`,
 gray:"2. ผู้ป่วยหญิงอายุ 40 ปี ต้องการตรวจหามะเร็งเต้านม (มาตรวจสุขภาพประจำปี ไม่เจออะไรผิดปกติ ไม่ต้องตรวจร่างกาย) · 2.1 จงแสดงการซักประวัติ · 2.2 จงให้คำแนะนำการปฏิบัติตัว",
 sp:"หญิง 40 ปี ไม่มีอาการ · ไม่คลำได้ก้อน ไม่มีน้ำ/เลือดออกจากหัวนม ไม่มีผิวหนังเปลี่ยน ไม่เจ็บเต้านม ไม่มีก้อนรักแร้ · ประจำเดือนครั้งแรกอายุ 12 ปี ยังมาสม่ำเสมอ · G2P2 คลอดบุตรคนแรกอายุ 28 ปี ให้นมบุตรคนละ 6 เดือน · เคยกินยาคุม 3 ปี เลิกแล้ว ไม่ใช้ฮอร์โมนอื่น · ไม่เคยมีก้อน/ตัดชิ้นเนื้อเต้านม ไม่เคยฉายแสงบริเวณหน้าอก · ไม่มีญาติสายตรงเป็นมะเร็งเต้านม/รังไข่ · ไม่ดื่มเหล้า ไม่สูบบุหรี่ BMI ปกติ ออกกำลังกายบ้าง · ไม่เคยตรวจ mammogram",
 flag:"บทผู้ป่วยจำลอง Claude แต่ง (ไฟล์บอกเพียงว่าตรวจสุขภาพ ไม่พบความผิดปกติ)",
 parts:S(
  B("2.1 Take a relevant history.",6,{tags:["hx"],
   ans:"<b>แนะนำตัว</b> ยืนยันชื่อ อายุ ขออนุญาต · <b>อาการเต้านม</b>: ก้อน เจ็บ น้ำ/เลือดออกจากหัวนม หัวนมบุ๋มใหม่ ผิวหนังเปลี่ยน (peau d'orange, แดง, แผล) ก้อนรักแร้ · อาการ metastasis (ปวดกระดูก น้ำหนักลด) · <b>ปัจจัยเสี่ยงฮอร์โมน</b>: อายุประจำเดือนครั้งแรก/หมดประจำเดือน, จำนวนบุตร อายุคลอดบุตรคนแรก, ให้นมบุตร, ยาคุม/HRT · <b>ประวัติเต้านม</b>: ก้อน/biopsy เดิม (atypical hyperplasia, LCIS) · <b>ฉายรังสีหน้าอก</b>ก่อนอายุ 30 · <b>ประวัติครอบครัว</b>มะเร็งเต้านม/รังไข่ (อายุที่เป็น, ชาย, BRCA) · lifestyle: alcohol, obesity, การออกกำลังกาย · ประวัติตรวจคัดกรองเดิม · <b>สรุป</b>ว่าเป็นกลุ่ม average risk",
   exp:"เป้าหมายคือแยก average risk กับ high risk (BRCA carrier/ญาติสายตรงหลายคน, chest irradiation อายุน้อย, lifetime risk ≥20%) เพราะคำแนะนำการคัดกรองต่างกัน",
   rubric:"ได้เต็ม = ถามอาการเต้านม + ปัจจัยเสี่ยงครบ 4 กลุ่ม (ฮอร์โมน, ประวัติเต้านม, รังสี, ครอบครัว) และสรุปความเสี่ยง",
   pts:[H("เริ่มต้น",10),P("แนะนำตัว ยืนยันผู้ป่วย","แนะนำตัว","introduc","ชื่อ"),
    H("อาการเต้านม",25),P("ก้อน/เจ็บ","ก้อน","lump","mass","เจ็บ"),P("nipple discharge / หัวนมบุ๋ม","หัวนม","nipple","discharge"),P("ผิวหนังเปลี่ยน / ก้อนรักแร้","ผิวหนัง","skin","รักแร้","axill"),
    H("ปัจจัยเสี่ยง",50),P("ประจำเดือนครั้งแรก/หมดประจำเดือน","ประจำเดือน","menarche","menopaus"),P("จำนวนบุตร อายุคลอดคนแรก ให้นมบุตร","บุตร","parity","คลอด","ให้นม","breastfe","nullipar"),P("ยาคุม / HRT","ยาคุม","oral contracep","hormone","hrt"),P("ก้อน/biopsy เต้านมเดิม","biopsy","ชิ้นเนื้อ","atypi","เคยมีก้อน"),P("ฉายรังสีบริเวณหน้าอก","รังสี","radiat","ฉายแสง"),CR(P("ประวัติครอบครัวมะเร็งเต้านม/รังไข่","ครอบครัว","family","ญาติ","brca","รังไข่","ovar")),P("alcohol / obesity / การออกกำลังกาย","เหล้า","alcohol","obes","น้ำหนัก","ออกกำลัง"),
    H("สรุป",15),P("สรุปเป็น average risk","average","ความเสี่ยงทั่วไป","ความเสี่ยงต่ำ","สรุป")]}),
  B("2.2 Give her advice on breast cancer screening.",4,{tags:["hx"],
   ans:"ผู้หญิง <b>average risk อายุ 40 ปี</b>: <b>Mammogram (± ultrasound ในเต้านมเนื้อแน่น)</b> เริ่มที่อายุ 40 ปี ทุก 1–2 ปี (ACR/NCCN แนะนำทุกปี; USPSTF 2024 ทุก 2 ปี อายุ 40–74) · <b>Clinical breast exam</b> โดยแพทย์/พยาบาลทุกปี · <b>Breast self-exam / breast awareness</b> ทุกเดือน 7–10 วันหลังเริ่มมีประจำเดือน · ลดปัจจัยเสี่ยง: คุมน้ำหนัก ออกกำลังกาย จำกัดแอลกอฮอล์ · <b>อาการที่ต้องมาก่อนนัด</b>: ก้อน หัวนมมีเลือด ผิวหนังบุ๋ม/แดง ก้อนรักแร้ · ถ้าภายหลังพบประวัติ high risk → เริ่มเร็วขึ้น + breast MRI, genetic counseling",
   exp:"Mammogram เป็นการคัดกรองเดียวที่ลดอัตราตายจากมะเร็งเต้านมได้ · BSE อย่างเดียวไม่ลดอัตราตาย แต่ช่วยให้รู้จักเต้านมตัวเอง · คนไทยเต้านมเนื้อแน่นบ่อย จึงมักทำ US ร่วม",
   rubric:"ได้เต็ม = mammogram เริ่มอายุ 40 + CBE + BSE + อาการที่ต้องกลับมาก่อนนัด",
   pts:[CR(P("Mammogram ± US ทุก 1–2 ปี","mammo","แมมโม")),P("Clinical breast exam ทุกปี","clinical breast","cbe","แพทย์ตรวจ"),P("Breast self-exam ทุกเดือนหลังประจำเดือน","self.?exam","bse","ตรวจด้วยตนเอง","ตรวจเอง","คลำเอง"),P("ลดปัจจัยเสี่ยง (น้ำหนัก ออกกำลังกาย alcohol)","น้ำหนัก","ออกกำลัง","alcohol","เหล้า","lifestyle"),P("อาการเตือนที่ต้องมาก่อนนัด","ก้อน","อาการ","มาก่อนนัด","red flag")]})
 ),
 interp:"ซักประวัติปัจจัยเสี่ยงมะเร็งเต้านมเพื่อจัดกลุ่มความเสี่ยง แล้วให้คำแนะนำคัดกรองตามกลุ่ม",summary:["ปัจจัยเสี่ยง: ฮอร์โมน (menarche/menopause/parity/HRT), ประวัติเต้านม, รังสีหน้าอก, ประวัติครอบครัว","average risk อายุ 40: mammogram ± US ทุก 1–2 ปี + CBE ทุกปี + breast awareness","high risk: เริ่มเร็วกว่า + MRI + genetic counseling"]}),

/* ===== OSCE 3 ===== */
Co({page:230,sec:"OSCE",orig:"3",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — elderly man with 6 months of urinary symptoms",
 stem:`A 70-year-old man presents with urinary frequency and difficulty voiding, needing to strain throughout micturition, for 6 months.<br>3.1 Demonstrate a digital rectal examination on the model (including positioning of the patient) and describe your findings.<br>3.2 What is the most likely diagnosis?<br>3.3 What further investigations would you request?`,
 gray:"3. ผู้ป่วยชาย อายุ 70 ปี ปัสสาวะบ่อย ปัสสาวะลำบาก ต้องเบ่งตลอด เป็นมานาน 6 เดือน · 3.1 จงแสดงวิธีตรวจต่อมลูกหมากทางทวารหนัก (ให้จัดท่าคนไข้ และตรวจกับหุ่น บรรยายลักษณะที่ตรวจได้) · 3.2 จงบอกการวินิจฉัยที่เป็นไปได้มากสุด · 3.3 จงบอกการตรวจเพิ่มเติมในรายนี้",
 sp:"ผู้ป่วยจำลองสำหรับจัดท่า + หุ่น DRE · ผลบนหุ่น: anal sphincter tone ปกติ · ต่อมลูกหมากโต ~ 3 นิ้วมือ ผิวเรียบ ยืดหยุ่น (rubbery) ไม่มี nodule แข็ง median sulcus ตื้น/คลำไม่ชัด ไม่กดเจ็บ ขอบบนคลำได้ ไม่ติดผนัง rectum · ถุงมือมีอุจจาระสีน้ำตาล ไม่มีเลือด",
 flag:"ผลตรวจบนหุ่น Claude แต่ง (ไฟล์ไม่บอก)",
 parts:S(
  B("3.1 Demonstrate DRE and describe the findings.",6,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว อธิบาย ขออนุญาต มี chaperone · จัดท่า <b>left lateral decubitus (Sims) งอเข่าชิดอก</b> (หรือ knee-chest/lithotomy) · สวมถุงมือ หล่อลื่นนิ้วชี้<br><b>ตรวจ</b>: ดู perianal (hemorrhoid, fissure, fistula, skin tag) · บอกผู้ป่วยก่อนสอด วางนิ้วที่ปากทวารแล้วค่อย ๆ สอด (ให้เบ่งเล็กน้อย) · ประเมิน <b>anal sphincter tone</b> · คลำผนัง rectum รอบทิศ · ต่อมลูกหมาก: <b>ขนาด ผิว ความแข็ง nodule median sulcus กดเจ็บ ขอบบน การยึดติด</b><br><b>หลังตรวจ</b>: ดูถุงมือ (เลือด มูก สีอุจจาระ) · เช็ดทำความสะอาด จัดเสื้อผ้า ขอบคุณ · รายงาน: prostate enlarged ~3 FB, smooth, rubbery, no nodule, obliterated median sulcus, non-tender",
   exp:"prostate ปกติ ~2 FB (20 g) ยืดหยุ่นคล้ายปลายจมูก มี median sulcus · BPH: โตเรียบ rubbery · CA prostate: แข็งเป็นหิน มี nodule ขอบไม่เรียบ · prostatitis: กดเจ็บมาก นุ่ม (ห้ามนวดในรายเฉียบพลัน)",
   rubric:"ได้เต็ม = จัดท่าถูก + ประเมิน sphincter tone + บรรยายต่อมลูกหมากครบ ≥5 ลักษณะ + ดูถุงมือ",
   pts:[H("เตรียม",20),P("แนะนำตัว ขออนุญาต chaperone","แนะนำตัว","ขออนุญาต","consent","chaperone"),CR(P("จัดท่า left lateral/Sims งอเข่า (หรือ knee-chest/lithotomy)","left lateral","sims","ตะแคงซ้าย","knee.?chest","lithotomy","งอเข่า")),P("ถุงมือ + หล่อลื่น","หล่อลื่น","lubric","เจล","gel"),
    H("ตรวจ",60),P("ดู perianal ก่อน","perianal","รอบทวาร","inspect","ดูรอบ"),P("anal sphincter tone","sphincter","tone"),P("ขนาด","ขนาด","size","fb","finger","กรัม"),P("ผิวเรียบ/ขรุขระ ความแข็ง","ผิว","surface","smooth","rubbery","consisten","แข็ง"),P("nodule","nodul","ก้อนแข็ง"),P("median sulcus","median sulcus","sulcus","ร่องกลาง"),P("กดเจ็บ / การยึดติด","กดเจ็บ","tender","fixed","ยึดติด"),
    H("หลังตรวจ",20),P("ดูถุงมือ: เลือด มูก อุจจาระ","ถุงมือ","glove","เลือด","blood","มูก"),P("ทำความสะอาด ขอบคุณ","ทำความสะอาด","เช็ด","ขอบคุณ","clean")]}),
  B("3.2 What is the most likely diagnosis?",2,{tags:["pe"],
   ans:"<b>Benign prostatic hyperplasia (BPH) with LUTS</b> (ทั้ง storage: frequency และ voiding: straining) · ddx: carcinoma of prostate, urethral stricture, neurogenic bladder, bladder stone",
   exp:"ชายสูงอายุ LUTS เรื้อรัง + DRE ต่อมโตเรียบยืดหยุ่น = BPH · ถ้าคลำได้แข็ง/nodule ต้องคิดถึง CA prostate",
   rubric:"ได้เต็ม = BPH · CA prostate อย่างเดียวโดยไม่มี hard nodule = บางส่วน",
   pts:[CR(P("BPH","bph","benign prostatic","ต่อมลูกหมากโต")),G("ddx ≥1",1,P("CA prostate","carcinoma","cancer","มะเร็ง","ca prostate"),P("Urethral stricture","stricture","ตีบ"),P("Neurogenic bladder","neurogenic"))]}),
  B("3.3 What further investigations would you request?",2,{tags:["pe"],
   ans:"<b>UA</b> (hematuria, infection) · <b>BUN/Cr</b> · <b>PSA</b> (หลังอธิบายข้อดีข้อเสีย) · <b>IPSS</b> score · <b>Uroflowmetry (Qmax) + post-void residual</b> (US) · <b>US KUB/prostate</b> (ขนาดต่อม, hydronephrosis, bladder stone) · ± FBS · ถ้า PSA สูง/DRE ผิดปกติ → MRI prostate ± TRUS-guided biopsy",
   exp:"การตรวจพื้นฐานใน LUTS: UA + PSA + creatinine + IPSS + PVR · uroflowmetry Qmax <10 ml/s สนับสนุน bladder outlet obstruction",
   rubric:"ได้เต็ม ≥4 รายการที่เหมาะสม · ส่ง IVP/CT เป็นอันดับแรก = ไม่เหมาะ",
   pts:[P("UA","\\bua\\b","urinalysis","ปัสสาวะ"),P("BUN/Cr","creatinine","\\bcr\\b","bun","ไต"),CR(P("PSA","psa")),P("Uroflowmetry / PVR","uroflow","qmax","pvr","post.?void","residual"),P("US KUB / prostate / IPSS","ultrasound","\\bus\\b","อัลตรา","ipss")]})
 ),
 interp:"ตรวจ DRE ถูกท่า ถูกลำดับ บรรยายต่อมลูกหมาก และวางแผน work-up LUTS",summary:["DRE: ท่า left lateral งอเข่า → ดูรอบทวาร → sphincter tone → ต่อมลูกหมาก (ขนาด ผิว ความแข็ง nodule sulcus กดเจ็บ) → ดูถุงมือ","BPH = โตเรียบ rubbery · CA = แข็ง มี nodule","work-up LUTS: UA, Cr, PSA, IPSS, uroflow + PVR, US"]}),

/* ===== OSCE 4 ===== */
Co({page:230,sec:"OSCE",orig:"4",topic:"img",sub:"IVP/KUB",title:"Imaging — complete excretory urography series",imgNote:NOIMG,imgAlt:"ภาพชุด intravenous pyelography ครบชุด (scout film และภาพหลังฉีดสารทึบรังสีหลายช่วงเวลา)",
 stem:`A complete series of intravenous pyelography (IVP) films is shown.<br>4.1 Describe the abnormal findings.<br>4.2 What is the diagnosis?<br>4.3 How would you treat this patient?`,
 gray:"4. ให้ฟิล์ม IVP มาครบชุด · 4.1 จงอ่านสิ่งผิดปกติในฟิล์ม · 4.2 จงบอกการวินิจฉัย · 4.3 จงบอกการรักษา",
 flag:"NOIMG · ไฟล์ไม่บอกว่าฟิล์มพบอะไร — เฉลยใช้ภาพที่พบบ่อยที่สุดในข้อสอบ (ureteric calculus with hydronephrosis) พร้อมกรอบการอ่าน",
 parts:S(
  B("4.1 Describe the abnormal findings.",4,{tags:["img"],
   ans:"อ่านเป็นระบบ: <b>Scout KUB</b> — radio-opaque density ตามแนว ureter/ไต/กระเพาะปัสสาวะ, psoas shadow, กระดูก · <b>Nephrogram</b> — ขนาด/รูปร่างไต, <b>delayed nephrogram</b> ข้างที่อุดตัน · <b>Pyelogram</b> — ขยายของ calyces (blunting/clubbing), pelvis, ureter (hydronephrosis/hydroureter) จนถึงระดับที่อุดตัน · filling defect · ภาพ delayed — สารทึบลงถึงระดับใด · bladder (filling defect, trabeculation), post-void residual<br>ตัวอย่างที่พบบ่อย: radio-opaque stone ที่ distal ureter ข้างหนึ่ง + delayed excretion + hydronephrosis/hydroureter เหนือก้อน",
   exp:"IVP ต้องอ่าน scout เสมอเพื่อไม่ให้นิ่วถูกสารทึบบดบัง · ปัจจุบัน non-contrast CT KUB เป็นมาตรฐานสำหรับนิ่ว",
   rubric:"ได้เต็ม = อ่านตามลำดับ scout → nephrogram → pyelogram → ureter → bladder และบอกระดับอุดตัน",
   pts:[P("อ่าน scout film (radio-opaque density)","scout","kub","radio.?opaque","ทึบ"),P("Delayed nephrogram/excretion","delay","nephrogram","excret","ช้า"),CR(P("Hydronephrosis/hydroureter + ระดับอุดตัน","hydroneph","hydroureter","calyc","ขยาย","dilat","obstruct")),P("Filling defect / bladder","filling defect","bladder","กระเพาะปัสสาวะ")]}),
  B("4.2 What is the diagnosis?",2,{tags:["img"],
   ans:"ตามภาพที่สมมติ: <b>ureteric calculus (เช่น left distal ureteric stone) with obstructive uropathy (hydronephrosis)</b> · ddx ของ filling defect: radiolucent stone (uric acid), TCC/urothelial tumor, blood clot",
   exp:"ระบุ ข้าง + ระดับ + ภาวะแทรกซ้อน (hydronephrosis, non-functioning kidney)",rubric:"ได้เต็ม = ระบุพยาธิสภาพ ข้าง ระดับ และการอุดตัน",
   pts:[CR(P("Ureteric stone / obstruction","stone","calcul","นิ่ว","obstruct")),P("ข้าง + ระดับ + hydronephrosis","left","right","ซ้าย","ขวา","distal","proximal","hydroneph")]}),
  B("4.3 How would you treat this patient?",2,{tags:["img"],
   ans:"<b>นิ่วท่อไต</b>: ปวด → NSAIDs (diclofenac) ± opioid · นิ่ว ≤5–10 mm distal ไม่มีติดเชื้อ → <b>medical expulsive therapy</b> (tamsulosin) ดื่มน้ำ ติดตาม · นิ่วใหญ่/ไม่ออก/อุดตันมาก → <b>URS (ureteroscopic lithotripsy)</b> หรือ ESWL · <b>ติดเชื้อร่วมกับอุดตัน (obstructed infected kidney) = emergency</b> → ATB + decompress ด้วย DJ stent หรือ PCN ก่อน แล้วค่อยเอานิ่วออก",
   exp:"นิ่วขนาด <5 mm ส่วนใหญ่หลุดเอง · หลักสำคัญที่สุด: obstruction + infection ต้องระบายก่อน",rubric:"ได้เต็ม = แยกตามขนาด/ภาวะแทรกซ้อน และบอก decompression เมื่อมีติดเชื้อ",
   pts:[P("ยาแก้ปวด NSAIDs","nsaid","diclofenac","แก้ปวด","analges"),P("MET tamsulosin สำหรับนิ่วเล็ก","tamsulosin","alpha.?block","expulsive","\\bmet\\b"),P("URS / ESWL","urs","ureteroscop","eswl","lithotrip"),P("ติดเชื้อร่วม → DJ stent / PCN","stent","dj","pcn","nephrostomy","decompress")]})
 ),
 interp:"อ่าน IVP อย่างเป็นระบบและเชื่อมกับการรักษานิ่วทางเดินปัสสาวะ",summary:["IVP: scout → nephrogram → pyelogram → ureter → bladder","นิ่วท่อไต: delayed nephrogram + hydronephrosis เหนือก้อน","รักษา: นิ่วเล็ก MET · นิ่วใหญ่ URS/ESWL · ติดเชื้อ+อุดตัน → stent/PCN ด่วน"]}),

/* ===== OSCE 5 ===== */
Co({page:231,sec:"OSCE",orig:"5",topic:"img",sub:"Mammogram",title:"Imaging — breast radiograph reading",imgNote:NOIMG,imgAlt:"ภาพถ่ายรังสีเต้านมทั้งสองข้าง 2 มุมมอง",
 stem:`A breast imaging study is shown.<br>5.1 What is this investigation called?<br>5.2 In which views was it taken?<br>5.3 Describe the abnormality and its location.`,
 gray:"5. ให้ฟิล์ม mammogram มา · 5.1 ฟิล์มนี้เรียกว่าอะไร · 5.2 ถ่ายในท่าใดบ้าง · 5.3 จงอ่านสิ่งผิดปกติในฟิล์ม และบอกตำแหน่ง",
 flag:"NOIMG · ไฟล์ไม่บอกลักษณะรอยโรค — 5.3 เฉลยตามรอยโรคที่พบบ่อย (suspicious mass)",
 parts:S(
  B("5.1 What is this investigation called?",1,{tags:["img"],ans:"<b>Mammogram</b> (screening/diagnostic bilateral mammography)",exp:"เอกซเรย์เต้านมพลังงานต่ำ บีบเต้านมให้แบน",rubric:"ได้เต็ม = mammogram",
   pts:[CR(P("Mammogram","mammo","แมมโม"))]}),
  B("5.2 In which views was it taken?",2,{tags:["img"],ans:"<b>Craniocaudal (CC)</b> และ <b>Mediolateral oblique (MLO)</b> ของทั้งสองข้าง (4 ภาพ: RCC, LCC, RMLO, LMLO)",exp:"MLO เห็น axillary tail และ pectoralis muscle · CC เห็นด้าน medial-lateral ชัด · ใช้ 2 มุมยืนยันตำแหน่งรอยโรค",rubric:"ได้เต็ม = ทั้ง CC และ MLO",
   pts:[CR(P("CC (craniocaudal)","\\bcc\\b","craniocaudal","cranio.?caudal")),CR(P("MLO (mediolateral oblique)","mlo","mediolateral","oblique"))]}),
  B("5.3 Describe the abnormality and its location.",4,{tags:["img"],
   ans:"บรรยายตาม BI-RADS lexicon: <b>mass</b> — shape (irregular), margin (<b>spiculated</b>/indistinct), density (high) · <b>calcification</b> — fine pleomorphic/linear branching, clustered/segmental · architectural distortion · associated features: skin thickening/retraction, nipple retraction, axillary lymphadenopathy · <b>ตำแหน่ง</b>: ข้าง + quadrant/ตำแหน่งนาฬิกา (จาก CC บอก inner/outer, จาก MLO บอก upper/lower) + ระยะจากหัวนม · สรุป BI-RADS (เช่น 5 = highly suggestive of malignancy) → core needle biopsy",
   exp:"spiculated irregular mass และ fine pleomorphic microcalcification = ลักษณะร้ายที่สำคัญ",rubric:"ได้เต็ม = บรรยาย mass/calcification ตาม lexicon + ตำแหน่งจาก 2 มุม + BI-RADS",
   pts:[CR(P("ลักษณะ mass: shape/margin (spiculated)/density","spicul","irregular","margin","ขอบ","mass","ก้อน")),P("Calcification","calcif","หินปูน"),P("ตำแหน่ง: ข้าง + quadrant/นาฬิกา","quadrant","นาฬิกา","o.?clock","upper outer","uoq","ตำแหน่ง"),P("BI-RADS category","bi.?rads","birads")]})
 ),
 interp:"รู้จัก mammogram มุมมองมาตรฐาน และบรรยายรอยโรคตาม BI-RADS",summary:["Mammogram มาตรฐาน 2 มุม: CC และ MLO ทั้งสองข้าง","บรรยาย mass (shape, margin, density), calcification, distortion, associated features","ตำแหน่ง: CC → inner/outer, MLO → upper/lower · สรุป BI-RADS"]}),

/* ===== OSCE 6 ===== */
Co({page:231,sec:"OSCE",orig:"6",topic:"inst",sub:"Surgical instrument",title:"Instruments — identify three surgical instruments and their uses",imgNote:NOIMG,imgAlt:"เครื่องมือผ่าตัด 3 ชิ้น A, B, C: A เป็นคีมปลายมีฟันเล็ก ๆ ล็อกได้, B เป็นกรรไกรปลายมนด้ามยาว, C เป็นแผ่นโลหะงอสองปลาย",
 stem:`Three surgical instruments (A, B and C) are shown.<br>6.1 Name each instrument.<br>6.2 Give one example of the use of each instrument.`,
 gray:"6. ให้อุปกรณ์ผ่าตัดมา 3 อย่าง A. Allis tissue forceps B. Metzenbaum C. Army navy retractor · 6.1 บอกชื่ออุปกรณ์ · 6.2 ยกตัวอย่างการใช้ประโยชน์มาอย่างละ 1 ข้อ",
 flag:"NOIMG (ชื่อเครื่องมือมาจาก recall)",
 parts:S(
  B("6.1 Name each instrument.",3,{tags:["inst"],key:"A. Allis tissue forceps · B. Metzenbaum · C. Army navy retractor (ชื่อใน recall)",
   ans:"A = <b>Allis tissue forceps</b> · B = <b>Metzenbaum scissors</b> · C = <b>Army-Navy retractor</b>",exp:"Allis: ปลายมีฟันเล็กหลายซี่ ล็อกได้ (traumatic) · Metzenbaum: กรรไกรด้ามยาว ปลายมน ใบสั้น · Army-Navy: retractor มือถือสองปลายขนาดต่างกัน",rubric:"ได้ 1 คะแนนต่อชื่อ",
   pts:[CR(P("Allis","allis")),CR(P("Metzenbaum","metzen","metz")),CR(P("Army-Navy retractor","army","navy"))]}),
  B("6.2 Give one use of each instrument.",3,{tags:["inst"],
   ans:"Allis: จับเนื้อเยื่อที่แข็งแรงหรือจะตัดทิ้ง เช่น จับขอบ fascia, จับเนื้อเต้านมก้อนที่จะตัด, จับขอบลำไส้ขณะทำ anastomosis/จับ appendix mesentery · Metzenbaum: <b>ตัด/เลาะเนื้อเยื่อบอบบาง</b> (dissection) — <b>ไม่ใช้ตัดไหม</b> · Army-Navy: <b>ถ่างผิวหนังและชั้นใต้ผิวหนัง</b>ในแผลเล็ก/ตื้น เช่น herniorrhaphy, appendectomy, thyroidectomy",
   exp:"การใช้ Metzenbaum ตัดไหมทำให้ใบกรรไกรทื่อ → ใช้ Mayo/suture scissors แทน",rubric:"ได้ 1 คะแนนต่อการใช้ที่ถูก",
   pts:[P("Allis: จับเนื้อเยื่อแข็งแรง/ที่จะตัดทิ้ง","จับ","grasp","fascia","tissue"),P("Metzenbaum: dissect/ตัดเนื้อเยื่อบอบบาง","dissect","เลาะ","delicate","บอบบาง","ตัดเนื้อเยื่อ"),P("Army-Navy: ถ่างผิวหนัง/ชั้นตื้น","ถ่าง","retract","ผิวหนัง","superficial","ชั้นตื้น","subcut")]})
 ),
 interp:"จำแนกเครื่องมือผ่าตัดพื้นฐานและหน้าที่",summary:["Allis = คีมจับเนื้อเยื่อมีฟัน (traumatic)","Metzenbaum = กรรไกร dissect เนื้อเยื่อบอบบาง ไม่ใช้ตัดไหม","Army-Navy = retractor มือถือสำหรับชั้นตื้น"]}),

/* ===== OSCE 7 ===== */
Co({page:231,sec:"OSCE",orig:"7",topic:"img",sub:"Ultrasound",title:"Imaging — woman with postprandial right upper quadrant pain",imgNote:NOIMG,imgAlt:"ภาพตรวจคลื่นเสียงช่องท้องส่วนบนขวา มีลูกศรชี้ตำแหน่งหนึ่ง",
 stem:`A 44-year-old woman with underlying diabetes and hypertension presents with right upper quadrant abdominal pain after meals. An abdominal imaging study is shown (arrow).<br>7.1 What is this investigation called?<br>7.2 Describe the abnormality.<br>7.3 What is the diagnosis?<br>7.4 Outline the management plan.`,
 gray:"7. หญิง 44 ปี U/D DM, HT มาด้วยปวดท้องด้านขวาบนหลังกินอาหาร ให้ฟิล์ม U/S abdomen มา มีลูกศรชี้ · 7.1 การตรวจนี้เรียกว่าอะไร · 7.2 จงบรรยายสิ่งผิดปกติ · 7.3 จงวินิจฉัย · 7.4 จงวางแผนการรักษา",
 flag:"NOIMG · ไฟล์ไม่บอกสิ่งที่ลูกศรชี้ — เฉลยตามภาพที่น่าจะเป็นที่สุดจากประวัติ (gallstone)",
 parts:S(
  B("7.1 What is this investigation called?",1,{tags:["img"],ans:"<b>Ultrasonography of the upper abdomen (hepatobiliary system)</b>",exp:"US เป็น first-line สำหรับ RUQ pain/สงสัยนิ่วถุงน้ำดี (sensitivity >95%)",rubric:"ได้เต็ม = ultrasound",
   pts:[CR(P("Ultrasound","ultraso","\\bus\\b","u/s","อัลตรา","sonogra"))]}),
  B("7.2 Describe the abnormality.",3,{tags:["img"],
   ans:"ใน gallbladder มี <b>hyperechoic (echogenic) foci พร้อม posterior acoustic shadow</b> เคลื่อนตามท่า (mobile, gravity-dependent) · ประเมินร่วม: GB wall thickness (>3–4 mm), pericholecystic fluid, sonographic Murphy sign, ขนาด CBD (ปกติ <6–7 mm) และ intrahepatic duct",
   exp:"acoustic shadow แยกนิ่วจาก polyp (polyp ไม่มี shadow และไม่ขยับ)",rubric:"ได้เต็ม = echogenic foci + posterior acoustic shadow + mobile + ประเมิน wall/CBD",
   pts:[CR(P("Hyperechoic foci ใน GB","hyperecho","echogenic","ก้อนสะท้อน","stone","นิ่ว")),CR(P("Posterior acoustic shadow","shadow","เงา")),P("Mobile / gravity-dependent","mobile","เคลื่อน","gravity","ขยับ"),P("GB wall / pericholecystic fluid / CBD","wall","ผนัง","pericholecystic","cbd","common bile")]}),
  B("7.3 What is the diagnosis?",2,{tags:["img"],ans:"<b>Symptomatic cholelithiasis (gallstones with biliary colic)</b> · ถ้ามีผนังหนา + pericholecystic fluid + Murphy sign + ไข้ → acute calculous cholecystitis",exp:"หญิง อายุ 40 กว่า DM อ้วน = ปัจจัยเสี่ยงนิ่วถุงน้ำดี · ปวดหลังกินอาหารมันเป็นลักษณะ biliary colic",rubric:"ได้เต็ม = gallstone/cholelithiasis",
   pts:[CR(P("Cholelithiasis / gallstone","cholelith","gallstone","นิ่วถุงน้ำดี","gall stone")),P("แยก acute cholecystitis","cholecystitis","ถุงน้ำดีอักเสบ")]}),
  B("7.4 Outline the management plan.",3,{tags:["img"],
   ans:"Symptomatic gallstone → <b>elective laparoscopic cholecystectomy</b> (เตรียมควบคุม DM/HT ก่อนผ่าตัด) · ระหว่างรอ: แก้ปวด (NSAIDs) เลี่ยงอาหารมัน · ถ้าเป็น <b>acute cholecystitis</b>: admit, NPO, IV fluid, analgesia, IV ATB แล้ว <b>early LC ภายใน 72 ชม.–1 สัปดาห์</b> (Tokyo Guidelines 2018) · ผู้ป่วยเสี่ยงผ่าตัดสูง/อาการหนัก → percutaneous cholecystostomy · สงสัย CBD stone (CBD กว้าง, LFT ผิดปกติ) → MRCP/ERCP ก่อน",
   exp:"DM เพิ่มความเสี่ยง gangrenous/emphysematous cholecystitis จึงควรผ่าตัดเมื่อมีอาการ",rubric:"ได้เต็ม = laparoscopic cholecystectomy + การดูแลเบื้องต้น + แผนกรณี CBD stone/acute cholecystitis",
   pts:[CR(P("Laparoscopic cholecystectomy","cholecystectomy","\\blc\\b","ตัดถุงน้ำดี","lap chole")),P("Analgesia / NPO / IV fluid / ATB ถ้าอักเสบ","nsaid","แก้ปวด","npo","antibiotic","ยาฆ่าเชื้อ","atb"),P("ควบคุม DM/HT ก่อนผ่าตัด","dm","เบาหวาน","น้ำตาล","glucose"),P("CBD stone → MRCP/ERCP","mrcp","ercp","cbd")]})
 ),
 interp:"อ่าน US นิ่วถุงน้ำดีและวางแผนรักษา symptomatic gallstone",summary:["นิ่วถุงน้ำดีใน US: echogenic focus + posterior acoustic shadow + เคลื่อนตามท่า","symptomatic gallstone → elective laparoscopic cholecystectomy","acute cholecystitis → NPO, IV fluid, ATB, early LC (TG18)"]}),

/* ===== OSCE 8 ===== */
Co({page:231,sec:"OSCE",orig:"8",topic:"suture",sub:"Suture material",title:"Suture materials — identify and classify three sutures",imgNote:NOIMG,imgAlt:"ไหมเย็บแผล 3 ชนิด: A เป็นไหมที่ไม่มีซอง, B และ C อยู่ในซองบรรจุเดิม (มีชื่อการค้าบนซอง)",
 stem:`Three suture materials are shown: A (without its package), B and C (in their original packages).<br>8.1 Give the generic name of each suture.<br>8.2 State what each is made of, whether it is absorbable, and whether it is monofilament or multifilament.<br>8.3 Give one example of the use of each suture.<br>8.4 Which of these sutures can be used to close the skin? (more than one answer is possible)`,
 gray:"8. ให้ไหมมา 3 แบบ A. silk (ไม่มีซอง) B. Vicryl (ซอง) C. Prolene (ซอง) · 8.1 จงบอกชื่อสามัญ (generic name) ของไหม · 8.2 บอกว่าทำมาจากอะไร การละลาย เส้นใย · 8.3 ยกตัวอย่างการใช้ประโยชน์อย่างละ 1 ข้อ · 8.4 ไหมชนิดไหนเอาไว้เย็บปิด skin ได้บ้าง ตอบได้มากกว่า 1 ข้อ · [ตัวแดงในไฟล์: Vicryl → Polyglactin, Prolene → Polypropylene, ข้อ 8.4: Silk vicryl]",
 notes:"ตัวพิมพ์สีแดงในไฟล์: ลูกศรจาก Vicryl → <b>Polyglactin</b> และ <b>Polypropylene</b> (ของ Prolene) · ใต้ 8.4: <b>Silk vicryl</b>",
 flag:"⚠ 8.4 ไฟล์ตอบ silk + vicryl — เฉลยนี้ตอบ silk + polypropylene (ดู opinion)",
 opinion:"8.4 ไฟล์ตอบ 'Silk vicryl' · ไม่เห็นด้วยบางส่วน: ไหมมาตรฐานสำหรับเย็บผิวหนังแบบ interrupted คือ non-absorbable (silk, nylon, polypropylene) ซึ่งตัดออกภายหลัง · Polypropylene เป็น monofilament ปฏิกิริยาเนื้อเยื่อต่ำ ติดเชื้อน้อย จึงเหมาะกับผิวหนังมาก (รวมถึง subcuticular แบบดึงออก) · Polyglactin 910 เป็น braided absorbable ใช้กับชั้น subcutaneous เป็นหลัก ถ้าใช้เย็บ skin มักเป็น subcuticular หรือชนิด rapide · จึงตอบ silk + polypropylene โดยให้ vicryl ได้คะแนนเมื่อระบุว่าเป็น subcuticular",
 parts:S(
  B("8.1 Give the generic name of each suture.",3,{tags:["suture"],key:"Vicryl → Polyglactin · Prolene → Polypropylene (ตัวแดงในไฟล์)",
   ans:"A = <b>Silk</b> · B = <b>Polyglactin 910</b> (Vicryl) · C = <b>Polypropylene</b> (Prolene)",exp:"ชื่อการค้า ≠ ชื่อสามัญ · nylon (Ethilon, Dafilon) เป็นอีกไหม non-absorbable monofilament ที่ใช้บ่อย",rubric:"1 คะแนนต่อชื่อสามัญ (ตอบชื่อการค้าไม่ได้คะแนน)",
   pts:[CR(P("Silk","silk","ไหมไหม")),CR(P("Polyglactin 910","polyglactin")),CR(P("Polypropylene","polypropyl"))]}),
  B("8.2 State the material, absorbability and filament type of each suture.",3,{tags:["suture"],
   ans:"<b>Silk</b>: natural (โปรตีนจากรังไหม), non-absorbable (ค่อย ๆ เสื่อมแต่จัดเป็น non-absorbable), <b>braided multifilament</b> · <b>Polyglactin 910</b>: synthetic, <b>absorbable</b> (hydrolysis; tensile strength ~2–3 สัปดาห์, ดูดซึมหมด ~56–70 วัน), <b>braided multifilament</b> · <b>Polypropylene</b>: synthetic, <b>non-absorbable</b>, <b>monofilament</b>",
   exp:"multifilament จับปมแน่นแต่เป็นที่หลบของเชื้อ · monofilament ลื่น ติดเชื้อน้อย ต้องผูกหลายปม",rubric:"ได้ 1 คะแนนต่อไหมที่ตอบครบ 3 ลักษณะ",
   pts:[P("Silk: natural, non-absorbable, braided","natural","ธรรมชาติ"),P("Polyglactin: synthetic, absorbable, braided","absorbable","ละลาย","ดูดซึม"),P("Polypropylene: synthetic, non-absorbable, monofilament","monofil","เส้นเดี่ยว","synthetic","สังเคราะห์")]}),
  B("8.3 Give one use of each suture.",3,{tags:["suture"],
   ans:"Silk: เย็บยึดสาย drain/tube กับผิวหนัง, ผูกหลอดเลือด, เย็บผิวหนัง · Polyglactin: ผูกหลอดเลือด, เย็บชั้น subcutaneous, เย็บต่อลำไส้ (anastomosis), fascia/peritoneum · Polypropylene: <b>vascular anastomosis</b>, เย็บผิวหนัง, ยึด mesh ใน hernia repair, ปิด fascia",
   exp:"ไหมที่ละลายได้ใช้กับเนื้อเยื่อที่หายเร็ว · non-absorbable ใช้ที่ต้องรับแรงนาน/หลอดเลือด",rubric:"ได้ 1 คะแนนต่อการใช้ที่ถูก",
   pts:[P("Silk: ยึด drain/tube, ผูกหลอดเลือด","drain","tube","ผูก","ligat"),P("Polyglactin: subcutaneous / anastomosis / ligation","subcut","ใต้ผิวหนัง","anastomos","fascia"),P("Polypropylene: vascular anastomosis / mesh / skin","vascular","หลอดเลือด","mesh","hernia")]}),
  B("8.4 Which sutures can be used to close the skin?",2,{tags:["suture"],key:"Silk vicryl (ตัวแดงในไฟล์)",
   ans:"<b>Silk และ Polypropylene</b> (non-absorbable; ตัดไหมออกตามกำหนด) · Polyglactin ใช้ได้เฉพาะ <b>subcuticular</b> (หรือชนิด rapide) — ไม่ใช่ไหมเย็บผิวหนังแบบ interrupted มาตรฐาน",
   exp:"ไหม braided absorbable ที่ค้างในผิวหนังทำให้เกิด inflammation/stitch abscess และรอยแผลเป็นมากกว่า",rubric:"ได้เต็ม = silk + polypropylene · ตอบ vicryl เพิ่มโดยระบุ subcuticular ไม่หัก · ตอบ silk + vicryl (ตามไฟล์) = ได้บางส่วน",
   pts:[CR(P("Silk","silk")),CR(P("Polypropylene (Prolene)","polypropyl","prolene"))]})
 ),
 interp:"แยกไหมตามวัสดุ การละลาย และโครงสร้างเส้นใย แล้วเลือกใช้ให้เหมาะกับเนื้อเยื่อ",summary:["Silk = natural, non-absorbable, braided","Polyglactin 910 (Vicryl) = synthetic, absorbable, braided","Polypropylene (Prolene) = synthetic, non-absorbable, monofilament","ผิวหนัง: non-absorbable (silk/nylon/polypropylene) · Vicryl ใช้ subcutaneous/subcuticular"]}),

/* ===== OSCE 9 ===== */
Co({page:231,sec:"OSCE",orig:"9",topic:"img",sub:"Acute abdomen series",title:"Imaging — man with postprandial epigastric pain",imgNote:NOIMG,imgAlt:"ภาพถ่ายรังสีชุดสำหรับผู้ป่วยปวดท้องเฉียบพลัน (ทรวงอกท่ายืน และช่องท้องท่านอน/ท่ายืน)",
 stem:`A man presents with epigastric pain after meals. A series of plain radiographs for acute abdomen is shown.<br>9.1 Which views were taken?<br>9.2 Give two possible causes of the findings.<br>9.3 Write the treatment orders, including intravenous fluid.`,
 gray:"9. ชาย มาด้วยปวดท้องที่ลิ้นปี่หลังกินอาหาร ให้ฟิล์ม acute abdomen series มา · 9.1 ถ่ายท่าใดบ้าง · 9.2 จงบอกสาเหตุที่เป็นไปได้ 2 ข้อ · 9.3 จงเขียนคำสั่งการรักษา IV fluid · [ตัวแดงในไฟล์: NPO, IV fluid]",
 notes:"ตัวพิมพ์สีแดงข้าง 9.3: <b>NPO</b> · <b>IV fluid</b>",
 flag:"NOIMG · ไฟล์ไม่บอกสิ่งที่พบในฟิล์ม — เฉลยสมมติภาพ pneumoperitoneum (free air ใต้กระบังลม) ซึ่งเข้ากับประวัติ peptic ulcer · อัตรา IV fluid/ขนาดยาเป็นตัวอย่างมาตรฐาน",
 parts:S(
  B("9.1 Which views were taken?",3,{tags:["img"],
   ans:"Acute abdomen series 3 ท่า: <b>CXR upright (PA)</b> · <b>Plain abdomen supine</b> · <b>Plain abdomen upright</b> (ถ้ายืน/นั่งไม่ได้ → <b>left lateral decubitus</b>)",
   exp:"CXR upright ดู free air ใต้กระบังลมได้ไวที่สุด (ต้องยืน/นั่ง ≥10 นาที) และดูโรคปอดที่ทำให้ปวดท้องส่วนบน",rubric:"1 คะแนนต่อท่า",
   pts:[CR(P("CXR upright","cxr","chest","ทรวงอก","ปอด")),P("Abdomen supine","supine","นอนหงาย","ท่านอน"),P("Abdomen upright / left lateral decubitus","upright","erect","ท่ายืน","decubitus")]}),
  B("9.2 Give two possible causes of the findings.",2,{tags:["img"],
   ans:"ภาพ <b>free air under the diaphragm (pneumoperitoneum)</b> → hollow viscus perforation: (1) <b>perforated peptic ulcer</b> (สาเหตุที่พบบ่อยที่สุด; เข้ากับปวดลิ้นปี่หลังอาหาร) (2) ลำไส้ใหญ่ทะลุ (diverticulitis, CA colon), ลำไส้ทะลุจาก trauma/foreign body · free air ที่ไม่ใช่ surgical: post-laparotomy/laparoscopy, peritoneal dialysis",
   exp:"สาเหตุที่ไม่ต้องผ่าตัดของ free air ต้องนึกถึงเสมอก่อนตัดสินใจ",rubric:"ได้เต็ม = perforated PU + สาเหตุอื่นที่สมเหตุผลอีก 1",
   pts:[CR(P("Perforated peptic ulcer","perforat","ทะลุ","peptic","ulcer","แผลในกระเพาะ")),P("สาเหตุอื่น: colon perforation / post-op / trauma","colon","diverticul","post.?op","หลังผ่าตัด","trauma","อุบัติเหตุ")]}),
  B("9.3 Write the treatment orders including IV fluid.",5,{tags:["img"],key:"NPO · IV fluid (ตัวแดงในไฟล์)",
   ans:"<b>Order for one day</b>: <b>NPO</b> · <b>IV fluid</b>: balanced crystalloid (เช่น LRS/Acetar) 1,000 ml IV load แล้ว 100–120 ml/hr ปรับตาม urine output ≥0.5 ml/kg/hr · Retain <b>NG tube</b> to gravity · Retain <b>Foley catheter</b>, record I/O · Lab: CBC, BUN/Cr, electrolyte, G/M, (amylase/lipase, LFT) · <b>PPI IV</b> (เช่น omeprazole 40 mg IV) · <b>ATB</b> IV ครอบคลุม gram-negative + anaerobe (ceftriaxone 2 g IV OD + metronidazole 500 mg IV q8h) · analgesic (morphine IV prn) · consent + เตรียม OR (exploratory laparotomy/laparoscopic omental patch repair)<br><b>Continuous</b>: V/S q1h, observe abdominal signs",
   exp:"perforated PU = surgical emergency: resuscitation → ATB → PPI → ผ่าตัด Graham patch · ตรวจ H. pylori และให้ eradication หลังผ่าตัด",
   rubric:"ได้เต็ม = NPO + IV fluid ที่ระบุชนิด/ปริมาณ/rate + NG + Foley/I-O + ATB + PPI + เตรียมผ่าตัด",
   pts:[CR(P("NPO","npo","งดน้ำ")),CR(P("IV fluid ระบุชนิดและ rate","lrs","acetar","nss","ringer","ml/h","ml/hr","cc/h","iv fluid")),P("NG tube + Foley/record I/O","ng","nasogastric","foley","i/o","intake")],}),
 ),
 interp:"เลือกท่าภาพถ่ายรังสีใน acute abdomen, รู้สาเหตุ pneumoperitoneum และเขียน order resuscitation",summary:["acute abdomen series = CXR upright + abdomen supine + upright (หรือ left lateral decubitus)","free air ใต้กระบังลม → perforated peptic ulcer มากที่สุด","order: NPO, IV crystalloid, NG, Foley, ATB, PPI, เตรียมผ่าตัด"]}),

/* ===== OSCE 10 ===== */
Co({page:231,sec:"OSCE",orig:"10",topic:"path",sub:"Order writing",title:"Orders — young man with right lower quadrant pain after surgery",
 stem:`A 21-year-old man presents with periumbilical pain that has shifted to the right lower quadrant over 18 hours, with anorexia and low-grade fever (37.9 °C). There is tenderness with guarding and rebound tenderness at McBurney's point. WBC 15,000/mm³ with 85% neutrophils. He undergoes surgery.<br>10.1 What is the name of the operation?<br>10.2 The pathology report shows acute gangrenous appendicitis. Write the postoperative orders.`,
 gray:"10. ชาย 21 ปี (ให้ประวัติกับผลตรวจร่างกายของ acute appendicitis) · 10.1 จงบอกชื่อการผ่าตัด · 10.2 ผล pathology ออกมาเป็น acute gangrenous appendicitis จงเขียนคำสั่งการรักษาหลังการผ่าตัด · [ตัวแดงในไฟล์: Appendectomy]",
 notes:"ตัวพิมพ์สีแดงข้าง 10.1: <b>Appendectomy</b>",
 flag:"ประวัติ/ตรวจร่างกาย/ค่า WBC/อุณหภูมิ Claude แต่ง (ไฟล์บอกแค่ว่าเป็นประวัติ acute appendicitis) · sub ใหม่ 'Order writing' (ไม่มีหมวดเขียน order ในรายการ) · อัตรา IV/ขนาดยาเป็นตัวอย่างมาตรฐาน",
 parts:S(
  B("10.1 What is the name of the operation?",2,{tags:["path"],key:"Appendectomy (ตัวแดงในไฟล์)",
   ans:"<b>Appendectomy</b> (open หรือ laparoscopic appendectomy)",exp:"ปัจจุบัน laparoscopic appendectomy เป็นมาตรฐานถ้าทำได้ (แผลติดเชื้อน้อยกว่า ฟื้นตัวเร็ว)",rubric:"ได้เต็ม = appendectomy",
   pts:[CR(P("Appendectomy","appendectomy","appendicectomy","ตัดไส้ติ่ง"))]}),
  B("10.2 Write the postoperative orders for acute gangrenous appendicitis.",6,{tags:["path"],
   ans:"<b>Order for one day</b>: Post-op care · V/S q15 min ×4, q30 min ×2, q1h until stable แล้ว q4h · Record I/O · Diet: NPO จนรู้สึกตัวดี → sips/liquid diet แล้ว advance ตามทน (early feeding) · <b>IV fluid</b> maintenance เช่น 5%D/N/2 1,000 ml IV rate 100 ml/hr จนกินได้ · <b>Analgesic</b>: morphine 3 mg IV prn q4h for pain + paracetamol 500 mg 1–2 tab oral q6h prn · Antiemetic prn · <b>ATB</b>: gangrenous จัดเป็น complicated ตามหลายแนวทาง → ให้ IV ต่อ เช่น ceftriaxone 2 g IV OD + metronidazole 500 mg IV q8h (ระยะสั้น 24 ชม.–3–5 วัน ตามความรุนแรง) · Lab ตามข้อบ่งชี้<br><b>Continuous</b>: early ambulation, incentive spirometry/deep breathing, observe wound และอาการติดเชื้อ (ไข้ ปวดเพิ่ม)",
   exp:"WSES 2020: complicated appendicitis ให้ ATB หลังผ่าตัด 3–5 วัน · uncomplicated ไม่ต้องให้ต่อ · gangrenous ที่ยังไม่ทะลุ หลายสถาบันให้ ≤24 ชม. — ตอบได้ทั้งสองแบบถ้าระบุเหตุผล",
   rubric:"ได้เต็ม = V/S, I/O, diet plan, IV fluid ระบุชนิด/rate, analgesic, ATB พร้อมเหตุผล, ambulation · ไม่สั่ง ATB เลย = หัก",
   pts:[H("Monitoring",20),P("V/S + record I/O","v/s","vital","สัญญาณชีพ","i/o","intake"),H("Diet/Fluid",30),P("NPO → sips/liquid → advance diet","npo","sips","liquid","อาหาร","diet"),P("IV fluid ระบุชนิด/rate","5%d","d5","nss","lrs","ml/h","ml/hr","iv fluid"),H("ยา",40),P("Analgesic","morphine","paracetamol","แก้ปวด","analges"),CR(P("ATB IV ต่อ (gram-neg + anaerobe)","ceftriaxone","metronidazole","cefoxitin","antibiotic","ยาฆ่าเชื้อ","atb")),H("อื่น ๆ",10),P("Early ambulation / ดูแผล","ambulat","ลุกเดิน","แผล","wound")]})
 ),
 interp:"เชื่อมผลพยาธิของไส้ติ่ง (uncomplicated vs complicated) กับการสั่งการรักษาหลังผ่าตัด",summary:["Appendicitis → appendectomy (laparoscopic ถ้าทำได้)","post-op order: V/S, I/O, diet plan, IV fluid, analgesic, ATB, ambulation","gangrenous/perforated → ATB หลังผ่าตัดระยะสั้น · uncomplicated → ไม่ต้องให้ต่อ"]}),

/* ===== OSCE 11 ===== */
Co({page:231,sec:"OSCE",orig:"11",topic:"inst",sub:"Tube/Catheter",title:"Devices — identify a urinary device and its indication",imgNote:NOIMG,imgAlt:"สายยางยาวปลายมีบอลลูน ปลายด้านนอกแยกเป็นหลายช่อง",
 stem:`A device is shown.<br>11.1 What is the name of this device?<br>11.2 Give one indication for its use.`,
 gray:"11. ให้ 3-way foley มา · 11.1 จงบอกชื่อ · 11.2 จงบอกข้อบ่งชี้ในการใช้อุปกรณ์นี้ 1 ข้อ",flag:"NOIMG",
 parts:S(
  B("11.1 What is the name of this device?",2,{tags:["inst"],key:"3-way foley (ระบุใน recall)",
   ans:"<b>Three-way Foley catheter</b> (3 ช่อง: drainage, balloon inflation, irrigation)",exp:"2-way Foley มีแค่ drainage + balloon · 3-way มีช่อง inflow สำหรับน้ำล้างเพิ่ม และมักมีขนาดใหญ่ (20–24 Fr)",rubric:"ได้เต็ม = 3-way Foley · ตอบ Foley อย่างเดียว = บางส่วน",
   pts:[CR(P("3-way Foley catheter","3.?way","three.?way","3 ทาง"))]}),
  B("11.2 Give one indication for this device.",2,{tags:["inst"],
   ans:"<b>Continuous bladder irrigation</b> ในภาวะ <b>gross hematuria with clots</b> เช่น หลัง TURP/ผ่าตัดกระเพาะปัสสาวะ, hemorrhagic cystitis, เลือดออกจาก bladder tumor (ป้องกัน clot retention)",exp:"ใช้ NSS ไหลเข้าทาง irrigation port ออกทาง drainage port",rubric:"ได้เต็ม = bladder irrigation จาก hematuria/clot",
   pts:[CR(P("Continuous bladder irrigation (hematuria/clot)","irrigat","ล้าง","hematuria","clot","ลิ่มเลือด","turp"))]})
 ),
 interp:"รู้จัก 3-way Foley และข้อบ่งชี้ continuous bladder irrigation",summary:["3-way Foley = drainage + balloon + irrigation port","ข้อบ่งชี้: continuous bladder irrigation ใน gross hematuria/clot เช่น หลัง TURP"]}),

/* ===== OSCE 12 ===== */
Co({page:231,sec:"OSCE",orig:"12",topic:"img",sub:"Other imaging",title:"Video — eye movement and pupillary examination",imgNote:NOIMG,imgAlt:"วิดีโอการตรวจการกลอกตาทุกทิศทางและการตอบสนองของรูม่านตาต่อแสงทั้งสองข้าง",
 stem:`A video of an eye examination (extraocular movements and pupillary responses) is shown.<br>12.1 Describe the abnormal findings.<br>12.2 What is the diagnosis?`,
 gray:"12. video ตรวจร่างกาย (ตรวจ EOM พบมี upward gaze palsy with pupil NRTL both eyes) · 12.1 จงบอกความผิดปกติที่พบ · 12.2 วินิจฉัย",
 flag:"NOIMG (ข้อสอบจริงเป็นวิดีโอ) · ลง topic img/Other imaging เพราะเป็นสื่อวิดีโอที่ไม่มีอาจารย์ในพาร์ท OSCE",
 parts:S(
  B("12.1 Describe the abnormal findings.",3,{tags:["img"],key:"upward gaze palsy with pupil NRTL both eyes (ใน recall)",
   ans:"<b>Vertical (upward) gaze palsy</b> ทั้งสองตา · <b>pupils ไม่ตอบสนองต่อแสงทั้งสองข้าง</b> (ถ้าตรวจ accommodation จะยังหดได้ = <b>light-near dissociation</b>) · อาจพบ convergence-retraction nystagmus และ eyelid retraction (Collier sign)",
   exp:"รอยโรคที่ dorsal midbrain (pretectal area, posterior commissure)",rubric:"ได้เต็ม = upgaze palsy + pupils ไม่ตอบสนองต่อแสง",
   pts:[CR(P("Upward gaze palsy","upward","upgaze","up.?gaze","มองขึ้น","vertical gaze")),CR(P("Pupil ไม่ตอบสนองต่อแสง / light-near dissociation","nrtl","not react","ไม่ตอบสนอง","light.?near","dissociat"))]}),
  B("12.2 What is the diagnosis?",3,{tags:["img"],
   ans:"<b>Parinaud syndrome (dorsal midbrain syndrome)</b> · สาเหตุที่สำคัญทางศัลยกรรมประสาท: <b>pineal region tumor</b> (germinoma, pineoblastoma/pinealoma) — มักร่วมกับ <b>obstructive hydrocephalus</b> (aqueductal compression) · อื่น ๆ: hydrocephalus/shunt failure, midbrain infarct/hemorrhage, MS",
   exp:"ส่ง MRI brain with gadolinium + tumor markers (β-hCG, AFP ใน CSF/serum) · hydrocephalus → ETV หรือ VP shunt",rubric:"ได้เต็ม = Parinaud syndrome + สาเหตุ pineal tumor",
   pts:[CR(P("Parinaud / dorsal midbrain syndrome","parinaud","dorsal midbrain")),P("สาเหตุ: pineal tumor ± hydrocephalus","pineal","pinealoma","germinoma","hydroceph")]})
 ),
 interp:"แปลผลตรวจตา → localize รอยโรค dorsal midbrain และนึกถึง pineal tumor",summary:["Parinaud: upgaze palsy + light-near dissociation + convergence-retraction nystagmus + lid retraction","สาเหตุสำคัญ: pineal region tumor กด dorsal midbrain ± obstructive hydrocephalus"]}),

/* ===== OSCE 13 ===== */
Co({page:231,sec:"OSCE",orig:"13",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — suturing techniques on a skin pad",
 stem:`Using the suture pad and instruments provided:<br>13.1 Place one vertical mattress suture and tie it with an instrument tie.<br>13.2 Place one simple interrupted suture and tie it using the one-hand technique.`,
 gray:"13.1 เย็บ vertical mattress 1 stitch ผูกด้วยเครื่องมือ · 13.2 เย็บ simple stitch 1 stitch ผูกด้วย one-hand technique (ไฟล์ไม่มีหัวข้อ 13. — มีเฉพาะ 13.1/13.2)",
 sp:"หุ่นผิวหนังมีแผลตรง · needle holder, toothed forceps, scissors, ไหม non-absorbable 3-0 พร้อมเข็ม cutting · ผู้คุมดู: การจับเข็ม/needle holder, มุมเข็มตั้งฉาก, ระยะ far-far near-near, ขอบแผล evert, ปม square ≥3 throws ไม่รัดแน่นเกิน, เทคนิค one-hand tie, ความปลอดภัยของเข็ม",
 flag:"ไฟล์ไม่มีหัวข้อหลักของ 13 (เห็นแค่ 13.1/13.2) · ขนาดไหม/อุปกรณ์ในบทผู้คุม Claude แต่ง",
 parts:S(
  B("13.1 Place one vertical mattress suture with an instrument tie.",5,{tags:["proc"],
   ans:"จับ needle holder ด้วย thumb–ring finger · จับเข็มที่ <b>1/3–1/2 จากโคนเข็ม</b> · แทงเข็ม<b>ตั้งฉาก</b>กับผิว หมุนตามความโค้งเข็ม · <b>Far-far</b>: แทงห่างขอบแผล ~5–10 mm ข้ามไปฝั่งตรงข้ามที่ระยะเท่ากัน ลึกถึง dermis/subcut · แล้วย้อนกลับ <b>near-near</b>: ห่างขอบ ~1–2 mm ตื้นใน dermis ออกฝั่งเดิม · ทั้งสองแนวอยู่ในแนวตั้งฉากกับแผลเดียวกัน → ขอบแผล <b>evert</b> · <b>Instrument tie</b>: พันไหมรอบ needle holder 2 รอบ (surgeon's knot) → ดึงขนานกับผิว → 1 รอบสลับทิศ → ทำ ≥3 throws เป็น square knot · ปมอยู่ข้างแผล ไม่รัดแน่นจนผิวซีด · ตัดไหมเหลือ ~3–5 mm · เก็บเข็มลงที่ปลอดภัย",
   exp:"vertical mattress ช่วย eversion ในบริเวณผิวหย่อน/หลังมือ/ข้อ · ความตึงที่มากเกินทำให้ขาดเลือด เกิดรอยไหม",rubric:"ได้เต็ม = ลำดับ far-far → near-near ถูก + eversion + square knot ไม่หลวม/ไม่แน่นเกิน",
   pts:[H("เตรียม/จับเครื่องมือ",20),P("จับ needle holder/เข็มถูกตำแหน่ง","needle holder","จับเข็ม","1/3","โคนเข็ม"),H("เย็บ",50),CR(P("Far-far แล้ว near-near","far.?far","near.?near","ไกล.*ใกล้")),P("แทงเข็มตั้งฉาก ตามความโค้ง","ตั้งฉาก","perpendicular","90","ความโค้ง"),P("ขอบแผล evert","evert","ปลิ้น","นูน"),H("ผูกปม",30),CR(P("Instrument tie: square knot ≥3 throws สลับทิศ","square","สลับ","throw","surgeon.?s knot","instrument tie")),P("ปมอยู่ข้างแผล ตึงพอดี ตัดไหม 3–5 mm","ข้างแผล","ตึงพอดี","ไม่แน่น","3.?5 mm","ตัดไหม")]}),
  B("13.2 Place one simple interrupted suture with a one-hand tie.",5,{tags:["proc"],
   ans:"แทงเข็มตั้งฉาก ห่างขอบแผล ~ 3–5 mm (ระยะเท่ากับความลึก) ลึกเท่ากันทั้งสองฝั่ง ออกฝั่งตรงข้ามในระยะเท่ากัน (bite สมมาตร) · <b>One-hand tie</b>: มือหนึ่งถือปลายไหมนิ่ง อีกมือใช้นิ้วชี้/นิ้วกลางคล้องทำปม — สลับ throw แบบนิ้วชี้กับนิ้วกลางให้ได้ <b>square knot ≥3 throws</b> · ดึงขนานกับผิว ขอบแผลชิดพอดีไม่ซ้อน · ตัดไหม · เก็บเข็ม",
   exp:"one-hand tie มีประโยชน์เมื่ออีกมือต้องจับเนื้อเยื่อ/ผูกในที่ลึก · ปมไม่สลับทิศ = granny knot หลุดง่าย",rubric:"ได้เต็ม = bite สมมาตร + one-hand tie สลับทิศได้ square knot",
   pts:[H("เย็บ",50),CR(P("Bite สมมาตร ระยะ/ความลึกเท่ากันสองฝั่ง","สมมาตร","symmetr","เท่ากัน","equal")),P("ขอบแผลชิด ไม่ซ้อน/evert เล็กน้อย","ชิด","approximat","evert"),H("ผูกปม",50),CR(P("One-hand tie สลับทิศได้ square knot ≥3 throws","one.?hand","มือเดียว","square","สลับ")),P("ความตึงพอดี ตัดไหม","ตึงพอดี","tension","ตัดไหม","cut")]})
 ),
 interp:"ทักษะเย็บแผลสองเทคนิคและการผูกปมทั้งแบบใช้เครื่องมือและมือเดียว",summary:["vertical mattress = far-far แล้ว near-near ในแนวเดียวกัน → ขอบ evert","ปมต้อง square knot ≥3 throws สลับทิศ ตึงพอดี อยู่ข้างแผล","simple interrupted: bite สมมาตรทั้งระยะและความลึก"]}),

/* ===== PowerPoint 1 ===== */
Co({page:231,sec:"PowerPoint",orig:"PPT 1",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — wound of a finger",imgNote:NOIMG,imgAlt:"ภาพแผลบริเวณนิ้วชี้มือซ้าย",
 stem:`A photograph of a wound on the patient's left index finger is shown.<br>1.1 Describe what you see.<br>1.2 What additional physical examination would you perform?<br>1.3 What is the most likely cause?`,
 gray:"[PowerPoint 14 ข้อ] 1. รูปแผลนิ้วชี้ขาซ้าย [sic] · 1.1 บรรยายสิ่งที่เห็น · 1.2 จะตรวจร่างกายอะไรเพิ่มเติมบ้าง · 1.3 คิดว่าเกิดจากอะไรมากที่สุด",
 flag:"NOIMG · ไฟล์ไม่บอกลักษณะแผลและสาเหตุ (ไฟล์พิมพ์ 'นิ้วชี้ขาซ้าย' น่าจะหมายถึงนิ้วชี้มือซ้าย) — เฉลยเป็นกรอบการบรรยาย/ตรวจแผลที่มือ และสาเหตุที่พบบ่อย (laceration จากของมีคม)",
 parts:S(
  B("1.1 Describe what you see.",3,{tags:["spot"],
   ans:"บรรยายเป็นระบบ: <b>ตำแหน่ง</b> (ด้าน volar/dorsal, phalanx ใด, ข้ามข้อหรือไม่) · <b>ชนิดแผล</b> (laceration ขอบเรียบ/ขรุขระ, puncture, avulsion, crush, bite) · ขนาด ความลึก สิ่งที่เห็นในแผล (tendon, กระดูก, สิ่งแปลกปลอม) · การปนเปื้อน · เลือดออก · สีปลายนิ้ว · ท่าทางของนิ้ว (resting cascade เสีย = สงสัย tendon ขาด) · อาการอักเสบ/ติดเชื้อ (บวมแดง หนอง)",
   exp:"แผลที่นิ้วด้าน volar เสี่ยงต่อ flexor tendon และ digital nerve/artery บาดเจ็บ",rubric:"ได้เต็ม = บอกตำแหน่ง ชนิด ขนาด/ความลึก สิ่งที่เห็นในแผล และท่าทางนิ้ว",
   pts:[P("ตำแหน่ง (volar/dorsal, phalanx)","volar","dorsal","ฝ่ามือ","หลังมือ","phalan","ข้อนิ้ว"),P("ชนิดแผล/ขอบแผล","laceration","ฉีกขาด","ขอบ","puncture","avulsion","crush"),P("ขนาด ความลึก สิ่งที่เห็นในแผล","ลึก","depth","tendon","เอ็น","กระดูก","size","ขนาด"),P("ท่าทางนิ้ว / การปนเปื้อน / ติดเชื้อ","cascade","ท่า","ปนเปื้อน","contamin","หนอง","บวมแดง")]}),
  B("1.2 What additional physical examination would you perform?",4,{tags:["spot"],
   ans:"<b>Neurovascular</b>: capillary refill/สีปลายนิ้ว, <b>sensation ของ digital nerve ทั้งสองข้าง (two-point discrimination)</b> · <b>Tendon</b>: <b>FDP</b> (งอ DIP ขณะจับ PIP ไว้), <b>FDS</b> (งอ PIP ขณะจับนิ้วอื่นเหยียด), extensor (เหยียด DIP/PIP — mallet/central slip) · <b>Bone/joint</b>: กดเจ็บ ผิดรูป ข้อมั่นคง (± X-ray นิ้วถ้าสงสัยกระดูกหัก/สิ่งแปลกปลอม) · ตรวจ ROM เทียบข้างดี",
   exp:"ตรวจ sensation ก่อนฉีดยาชาเสมอ (digital block จะบดบังผล)",rubric:"ได้เต็ม = neurovascular + FDP/FDS + extensor + กระดูก/X-ray",
   pts:[CR(P("Sensation digital nerve / 2-point discrimination","sensation","ความรู้สึก","2.?point","two.?point","digital nerve","ชา")),P("Capillary refill / circulation","capillary","refill","ไหลเวียน","pulse"),CR(P("Flexor tendon: FDP + FDS","fdp","fds","flexor","งอ")),P("Extensor tendon","extensor","เหยียด","mallet"),P("กระดูก/ข้อ ± X-ray","x.?ray","เอกซเรย์","กระดูก","fracture")]}),
  B("1.3 What is the most likely cause?",2,{tags:["spot"],
   ans:"ขึ้นกับภาพ — ที่พบบ่อยที่สุดของแผลนิ้วมือในข้อสอบ: <b>laceration จากของมีคม (มีด/กระจก)</b> ซึ่งอาจตัดผ่าน flexor tendon/digital nerve · ถ้าแผลเป็นรูเล็กหลายรู → <b>สัตว์กัด</b> (หมา/แมว/งู) · แผลบวมแดงมีหนองรอบเล็บ → paronychia · บวมตึงปลายนิ้ว → felon",
   exp:"การรักษาตามสาเหตุ: ล้างแผล ซ่อมเอ็น/เส้นประสาทภายใต้ magnification, บาดทะยัก, สัตว์กัดไม่เย็บปิด + ATB",rubric:"ให้คะแนนตามความสอดคล้องกับภาพ · ตอบกลไก + โครงสร้างที่อาจบาดเจ็บ = เต็ม",
   pts:[P("ของมีคม / laceration / bite ตามลักษณะแผล","มีด","ของมีคม","sharp","กระจก","glass","knife","bite","กัด"),P("ระบุโครงสร้างที่อาจบาดเจ็บ","tendon","เอ็น","nerve","เส้นประสาท")]})
 ),
 interp:"ประเมินแผลที่มืออย่างเป็นระบบ โดยเฉพาะ tendon และ digital nerve",summary:["แผลนิ้ว: บรรยายตำแหน่ง ชนิด ความลึก สิ่งที่เห็นในแผล ท่าทางนิ้ว","ตรวจ sensation ก่อน digital block · FDP (DIP), FDS (PIP), extensor","X-ray ถ้าสงสัยกระดูกหัก/สิ่งแปลกปลอม"]}),

/* ===== PowerPoint 2 ===== */
Co({page:231,sec:"PowerPoint",orig:"PPT 2",topic:"spot",sub:"Hernia/Abdominal wall",title:"Spot — man with a long-standing groin mass",imgNote:NOIMG,imgAlt:"ภาพบริเวณขาหนีบซ้ายของผู้ป่วยชายขณะยืน มีก้อนนูน",
 stem:`A 40-year-old man has had a mass in the left groin for 2 years. A photograph is shown.<br>2.1 Describe what you see.<br>2.2 What is the most likely diagnosis, and what are the differential diagnoses?`,
 gray:"2. ชาย 40 ปี มีก้อนที่ขาหนีบซ้ายเป็นมา 2 ปี (มีรูป hernia, จำคำถามไม่ได้)",
 flag:"NOIMG · ผู้จดจำคำถามไม่ได้ → คำถาม 2.1–2.2 Claude แต่ง (ข้อย่อยทั้งสอง Claude เติม)",
 parts:S(
  B("2.1 Describe what you see.",2,{tags:["spot"],flag:"ข้อย่อยนี้ Claude เติม",
   ans:"ก้อนนูนที่ขาหนีบซ้าย <b>อยู่เหนือ inguinal ligament</b> (เหนือ-ใน pubic tubercle) ทอดลงไปทาง scrotum (inguinoscrotal) · ขนาด ผิวหนังปกติ ไม่แดง ไม่มีแผล · บอกต่อว่าควรตรวจ: ยุบได้เมื่อนอน (reducible), <b>cough impulse</b>, ใส่นิ้วคลำ superficial ring, ตรวจ testis แยกจากก้อน, กดเจ็บ",
   exp:"inguinal hernia อยู่เหนือ-ใน pubic tubercle · femoral hernia อยู่ใต้-นอก",rubric:"ได้เต็ม = ตำแหน่งสัมพันธ์กับ inguinal ligament/pubic tubercle + ลงถุงอัณฑะหรือไม่ + ลักษณะผิวหนัง",
   pts:[P("ตำแหน่ง: เหนือ inguinal ligament / pubic tubercle","inguinal ligament","pubic tubercle","เหนือ","ขาหนีบ"),P("ทอดลง scrotum / ขนาด / ผิวหนัง","scrot","อัณฑะ","ผิวหนัง","ขนาด"),P("บอกการตรวจ: reducible, cough impulse","reduc","ยุบ","cough","ไอ")]}),
  B("2.2 What is the most likely diagnosis and the differential diagnoses?",3,{tags:["spot"],flag:"ข้อย่อยนี้ Claude เติม",key:"รูป hernia (ระบุใน recall)",
   ans:"<b>Left inguinal hernia</b> (ชายผู้ใหญ่ ส่วนใหญ่ indirect; ถ้าลง scrotum = complete/inguinoscrotal) — ปัจจุบัน reducible ไม่มีภาวะแทรกซ้อน · ddx: femoral hernia, hydrocele/encysted hydrocele of the cord, inguinal lymphadenopathy, lipoma of the cord, undescended testis, saphena varix",
   exp:"แยก direct/indirect ทางคลินิกไม่แม่นยำ (deep ring occlusion test) — ยืนยันระหว่างผ่าตัด",rubric:"ได้เต็ม = inguinal hernia + ddx ≥2",
   pts:[CR(P("Inguinal hernia","inguinal hernia","ไส้เลื่อนขาหนีบ","indirect","direct")),G("ddx ≥2",2,P("Femoral hernia","femoral"),P("Hydrocele","hydrocele"),P("Lymphadenopathy","lymph","ต่อมน้ำเหลือง"),P("Lipoma of cord","lipoma"),P("Undescended testis","undescend","อัณฑะค้าง"))]})
 ),
 interp:"spot diagnosis ก้อนที่ขาหนีบและ ddx",summary:["inguinal hernia: เหนือ-ใน pubic tubercle, cough impulse, reducible","ddx: femoral hernia, hydrocele of cord, lymph node, lipoma, undescended testis"]}),

/* ===== PowerPoint 3 ===== */
Co({page:231,sec:"PowerPoint",orig:"PPT 3",topic:"spot",sub:"Hernia/Abdominal wall",title:"Spot — management of a reducible groin mass",imgNote:NOIMG,imgAlt:"ภาพเดียวกับสไลด์ก่อนหน้า: ก้อนนูนบริเวณขาหนีบซ้ายของชาย 40 ปี",
 stem:`(Continued from the previous slide) A 40-year-old man has a reducible mass in the left groin for 2 years.<br>3.1 Outline the treatment.<br>3.2 Write the orders if elective surgery is planned.`,
 gray:"3. (ต่อจากข้อ 2.) · 3.1 บอกแนวทางการรักษา · 3.2 จงเขียนคำสั่งหากต้องการผ่าตัดแบบ elective",
 flag:"NOIMG · คำว่า reducible ในโจทย์ Claude เติมเพื่อให้ตอบ elective ได้ · ขนาดยาเป็นตัวอย่างมาตรฐาน",
 parts:S(
  B("3.1 Outline the treatment.",3,{tags:["spot"],
   ans:"Symptomatic inguinal hernia → <b>elective hernia repair</b>: <b>tension-free mesh repair</b> — open <b>Lichtenstein</b> หรือ laparoscopic (TEP/TAPP) · tissue repair (Shouldice/Bassini) ในกรณีไม่ใช้ mesh · แก้ปัจจัยที่เพิ่มแรงดันช่องท้อง (ไอเรื้อรัง ท้องผูก เบ่งปัสสาวะ — BPH) · <b>อาการเตือน incarceration/strangulation</b> (ก้อนดันกลับไม่ได้ ปวดมาก แดง อาเจียน) → มาโรงพยาบาลทันที (emergency surgery) · truss ไม่แนะนำ",
   exp:"EHS/HerniaSurge 2018: mesh repair ลด recurrence เทียบ tissue repair · watchful waiting ได้เฉพาะชายที่ไม่มีอาการ/อาการน้อย",rubric:"ได้เต็ม = elective mesh repair + แก้ปัจจัยเสี่ยง + อาการเตือน strangulation",
   pts:[CR(P("Elective hernia repair: tension-free mesh (Lichtenstein / TEP/TAPP)","mesh","lichtenstein","tep","tapp","herniorrhaphy","hernioplasty","repair")),P("แก้ปัจจัยเพิ่มแรงดันช่องท้อง","ไอ","ท้องผูก","cough","constipat","bph","เบ่ง"),P("อาการเตือน incarceration/strangulation","incarcerat","strangulat","ดันกลับไม่ได้","ติดคา")]}),
  B("3.2 Write the orders for elective surgery.",4,{tags:["spot"],
   ans:"<b>Pre-operative orders</b>: Admit · Set OR for <b>left inguinal herniorrhaphy (Lichtenstein mesh repair)</b> under spinal/GA/local · <b>Consent</b> ระบุข้าง + <b>site marking ข้างซ้าย</b> · <b>NPO after midnight</b> (หรือ NPO อาหาร 6–8 ชม. น้ำใส 2 ชม.) · Pre-op lab ตามอายุ/โรคร่วม (CBC; อายุ 40 สุขภาพดีไม่จำเป็นต้องตรวจมาก; ± CXR/EKG ตามข้อบ่งชี้) · IV fluid เช้าวันผ่าตัด (เช่น LRS 80 ml/hr ขณะ NPO) · <b>Prophylactic ATB</b> เช่น cefazolin 2 g IV ภายใน 60 นาทีก่อนลงมีด (เมื่อใช้ mesh) · ให้ปัสสาวะก่อนเข้าห้องผ่าตัด · งดยาต้านเกล็ดเลือด/anticoagulant ตามข้อบ่งชี้ · ทำความสะอาดผิว (ตัดขน clipper ไม่โกน)",
   exp:"site marking ทุกครั้งเมื่อผ่าตัดอวัยวะที่มีสองข้าง (WHO surgical safety checklist)",rubric:"ได้เต็ม = ชื่อการผ่าตัด + consent/site marking + NPO + lab + IV fluid + prophylactic ATB",
   pts:[P("Set OR + ชื่อการผ่าตัด","set or","herniorrhaphy","hernioplasty","lichtenstein"),P("Consent + site marking ข้างซ้าย","consent","ยินยอม","site mark","mark"),CR(P("NPO","npo","งดน้ำ","งดอาหาร")),P("Pre-op lab / IV fluid","cbc","lab","iv fluid","lrs","nss"),P("Prophylactic ATB (cefazolin)","cefazolin","prophyla","antibiotic","ยาฆ่าเชื้อ")]})
 ),
 interp:"การรักษา inguinal hernia และการเขียน pre-operative order",summary:["inguinal hernia ที่มีอาการ → elective tension-free mesh repair (Lichtenstein/TEP/TAPP)","pre-op order: set OR, consent + site marking, NPO, lab ตามข้อบ่งชี้, IV fluid, cefazolin prophylaxis","สอนอาการ strangulation → มา รพ. ทันที"]}),

/* ===== PowerPoint 4 ===== */
Co({page:231,sec:"PowerPoint",orig:"PPT 4",topic:"spot",sub:"Breast",title:"Spot — woman with 4 months of breast tightness",imgNote:NOIMG,imgAlt:"ภาพเต้านมซ้ายของผู้ป่วยหญิง",
 stem:`A woman presents with pain and a feeling of tightness in the left breast for 4 months. A photograph is shown.<br>4.1 Describe what you see.<br>4.2 What is the provisional diagnosis?<br>4.3 What investigations would you request?<br>4.4 Stage the disease.`,
 gray:"4. หญิง เจ็บตึงเต้านมซ้ายมา 4 เดือน มีรูป · 4.1 บรรยายสิ่งที่เห็น · 4.2 วินิจฉัยเบื้องต้น · 4.3 ส่งตรวจเพิ่มเติม · 4.4 staging",
 flag:"NOIMG · ไฟล์ไม่บอกลักษณะในรูป — เฉลยสมมติภาพมะเร็งเต้านมที่มีผิวหนังผิดปกติ (peau d'orange/แดง) ซึ่งเข้ากับคำถาม staging จากรูป",
 parts:S(
  B("4.1 Describe what you see.",3,{tags:["spot"],
   ans:"บรรยาย: ขนาดและความสมมาตรของเต้านมสองข้าง · <b>ผิวหนัง</b>: แดง (erythema) กินพื้นที่เท่าไร, <b>บวมแบบเปลือกส้ม (peau d'orange)</b>, ผิวหนังบุ๋ม (dimpling), แผล (ulceration), satellite nodules · <b>หัวนม</b>: ถูกดึงรั้ง/บุ๋ม (nipple retraction), แผลที่หัวนม · ก้อนที่มองเห็น · รักแร้/supraclavicular",
   exp:"การบรรยายผิวหนังสำคัญเพราะกำหนด T4 โดยตรง",rubric:"ได้เต็ม = บรรยายผิวหนัง (peau d'orange/erythema/ulcer) + หัวนม + ก้อน + สัดส่วนพื้นที่",
   pts:[CR(P("ผิวหนัง: peau d'orange / erythema / ulcer","peau","เปลือกส้ม","erythema","แดง","ulcer","แผล","บวม")),P("หัวนมบุ๋ม/ถูกรั้ง","nipple","หัวนม","retract"),P("ก้อน / ความไม่สมมาตร","ก้อน","mass","asymmetr","ไม่สมมาตร")]}),
  B("4.2 What is the provisional diagnosis?",2,{tags:["spot"],
   ans:"<b>Locally advanced carcinoma of the left breast</b> (skin involvement) — ถ้า erythema + edema กิน ≥1/3 ของผิวเต้านม เกิดเร็ว = <b>inflammatory breast cancer</b> · ddx: mastitis/breast abscess (มีไข้ ตอบสนอง ATB), granulomatous mastitis",
   exp:"เต้านมแดงบวมที่ไม่ดีขึ้นหลังให้ ATB 1–2 สัปดาห์ต้อง biopsy เสมอ",rubric:"ได้เต็ม = breast cancer (locally advanced/inflammatory) + ddx mastitis",
   pts:[CR(P("Breast cancer (locally advanced / inflammatory)","cancer","carcinoma","มะเร็ง","inflammatory","ca breast")),P("ddx mastitis / abscess","mastitis","abscess","ฝี","เต้านมอักเสบ")]}),
  B("4.3 What investigations would you request?",3,{tags:["spot"],
   ans:"<b>Triple assessment</b>: (1) clinical (2) <b>bilateral mammogram + breast/axillary US</b> (3) <b>core needle biopsy</b> ของก้อน (± skin punch biopsy ถ้าสงสัย inflammatory) → histology + <b>ER, PR, HER2, Ki-67</b> · ± FNA/core ของต่อมน้ำเหลืองรักแร้ · <b>Staging work-up</b> (locally advanced): CT chest/abdomen (หรือ CXR + US liver), <b>bone scan</b>, LFT, ALP, CBC · baseline echo ถ้าจะให้ anthracycline/anti-HER2",
   exp:"locally advanced/inflammatory → systemic staging ก่อนเริ่ม neoadjuvant chemotherapy",rubric:"ได้เต็ม = imaging + core biopsy + receptor + systemic staging",
   pts:[P("Mammogram + US","mammo","ultraso","\\bus\\b","แมมโม"),CR(P("Core needle biopsy (± skin punch)","core","biopsy","ชิ้นเนื้อ","punch")),P("ER/PR/HER2","\\ber\\b","her2","receptor","hormone"),P("Systemic staging: CT / bone scan / LFT","bone scan","ct","lft","alp","metasta")]}),
  B("4.4 Stage the disease.",2,{tags:["spot"],
   ans:"ผิวหนังบวม/peau d'orange/แผล/satellite nodule = <b>T4b</b> · ติดผนังทรวงอก = T4a · ทั้งสอง = T4c · <b>inflammatory = T4d</b> → <b>clinical stage อย่างน้อย IIIB</b> (T4 N0–2 M0) · N3 → IIIC · M1 → IV (AJCC anatomic stage)",
   exp:"T4 ไม่ขึ้นกับขนาดก้อน · AJCC 8th มี prognostic stage (รวม grade, ER/PR/HER2) แต่ระดับนิสิตใช้ anatomic stage ได้",rubric:"ได้เต็ม = T4 (b/d ตามภาพ) และ stage ≥ IIIB",
   pts:[CR(P("T4 (T4b/T4d)","t4")),P("Stage IIIB ขึ้นไป","iiib","3b","stage 3","stage iii","iiic","stage iv")]})
 ),
 interp:"spot locally advanced/inflammatory breast cancer: บรรยายผิวหนัง → triple assessment → staging T4",summary:["peau d'orange/แผล/satellite nodule = T4b · inflammatory = T4d","T4 N0–2 M0 = stage IIIB อย่างน้อย","ตรวจ: mammogram + US, core biopsy + ER/PR/HER2, systemic staging"]}),

/* ===== PowerPoint 5 ===== */
Co({page:231,sec:"PowerPoint",orig:"PPT 5",topic:"spot",sub:"Instrument/Device",title:"Spot — identify a surgical drain",imgNote:NOIMG,imgAlt:"ภาพท่อยางนิ่มแบน ผนังบาง สีเหลืองอ่อน ไม่มีกระเปาะดูด",
 stem:`A photograph of a surgical device is shown.<br>5.1 What is it?<br>5.2 Give two examples of operations in which this device is used.`,
 gray:"5. รูป pendose drain · 5.1 คืออะไร · 5.2 ยกตัวอย่างการผ่าตัดที่ต้องใช้อุปกรณ์นี้มา 2 การผ่าตัด",flag:"NOIMG",
 parts:S(
  B("5.1 What is it?",2,{tags:["spot"],key:"pendose drain (ระบุใน recall — สะกดถูกคือ Penrose)",
   ans:"<b>Penrose drain</b> — ท่อยาง latex นิ่ม แบน = <b>passive, open drain</b> (ระบายด้วย capillary action/แรงโน้มถ่วง/ความดันในโพรง)",exp:"ข้อเสีย: เป็นทางเข้าของเชื้อแบบ retrograde ระบายได้น้อย · ปัจจุบันในช่องท้องนิยม closed suction drain มากกว่า",rubric:"ได้เต็ม = Penrose drain",
   pts:[CR(P("Penrose drain","penrose","pendose"))]}),
  B("5.2 Give two operations in which this device is used.",2,{tags:["spot"],
   ans:"(1) <b>Incision and drainage ของฝีชั้นตื้น</b>/แผลติดเชื้อ (subcutaneous abscess, perianal abscess) เพื่อกันขอบแผลปิด · (2) <b>Inguinal herniorrhaphy</b> — ใช้คล้องและดึงรั้ง spermatic cord · อื่น ๆ: คล้องรั้งหลอดอาหารใน fundoplication/คล้องรั้งหลอดเลือด, เป็น tourniquet นิ้วมือ, seton ใน anal fistula",
   exp:"Penrose ใช้ได้ทั้งเป็นท่อระบายและเป็นสายคล้องดึงรั้งอวัยวะท่อ",rubric:"1 คะแนนต่อการผ่าตัดที่เหมาะสม",
   pts:[G("การผ่าตัด ≥2",2,P("I&D abscess","i&d","incision and drainage","ฝี","abscess"),P("Herniorrhaphy (คล้อง cord)","hernia","cord","ไส้เลื่อน"),P("Fundoplication / คล้องรั้งอวัยวะ","fundoplication","esophag","คล้อง","retract"),P("Finger tourniquet / seton","tourniquet","seton"))]})
 ),
 interp:"รู้จัก passive drain และการใช้งานของ Penrose",summary:["Penrose = passive open drain ยาง latex แบน","ใช้: I&D ฝีชั้นตื้น, คล้องรั้ง spermatic cord ใน hernia repair, คล้องหลอดอาหาร"]}),

/* ===== PowerPoint 6 ===== */
Co({page:231,sec:"PowerPoint",orig:"PPT 6",topic:"spot",sub:"Anorectal",title:"Spot — young woman with painful defecation and bleeding",imgNote:NOIMG,imgAlt:"ภาพบริเวณทวารหนักขณะแหวก anal verge",seen:"คล้าย MDCU66 RoB PPT 1 (chronic anal fissure)",
 stem:`A 30-year-old woman experiences pain during defecation and bleeding per rectum. A photograph of the anal region is shown.<br>6.1 What is the diagnosis?<br>6.2 Advise on the treatment.`,
 gray:"- หญิง 30 ปี ถ่ายอุจจาระแล้วเจ็บ และมีเลือดออก มีรูป · 1. วินิจฉัย · 2. จงให้คำแนะนำแนวทางการรักษา",
 flag:"NOIMG · ไฟล์ไม่บอกลักษณะในรูป — เฉลยตามอาการ (ปวดขณะถ่าย + เลือดออก = anal fissure) · ข้อนี้ไม่มีเลขในไฟล์ ไล่เลขตามลำดับเป็น PPT 6",
 parts:S(
  B("6.1 What is the diagnosis?",2,{tags:["spot"],
   ans:"<b>Anal fissure</b> (มักอยู่ <b>posterior midline</b>) — ถ้ามี sentinel skin tag, hypertrophied anal papilla, เห็นใยกล้ามเนื้อ internal sphincter ที่ก้นแผล หรือเป็น >6–8 สัปดาห์ = <b>chronic anal fissure</b> · fissure ที่ lateral/หลายแผล → นึกถึง Crohn's, TB, HIV, syphilis, CA",
   exp:"ปวดแสบมากขณะและหลังถ่าย + เลือดสดติดกระดาษเล็กน้อย = อาการคลาสสิก",rubric:"ได้เต็ม = anal fissure + บอก acute/chronic ตามลักษณะ",
   pts:[CR(P("Anal fissure","fissure","แผลปริ")),P("Posterior midline / acute vs chronic (sentinel tag)","posterior","midline","sentinel","chronic","acute","papilla")]}),
  B("6.2 Advise on the treatment.",3,{tags:["spot"],
   ans:"<b>Conservative (first line, 6–8 สัปดาห์)</b>: อาหารกากใยสูง/fiber supplement (psyllium), ดื่มน้ำมาก, stool softener, <b>warm sitz bath</b>, ยาชาเฉพาะที่ · <b>Topical sphincter relaxant</b>: <b>2% diltiazem</b> หรือ <b>0.2–0.4% nitroglycerin (GTN)</b> ointment วันละ 2 ครั้ง (GTN ปวดหัวบ่อย) · ไม่หาย/chronic → <b>botulinum toxin</b> ฉีด internal sphincter หรือ <b>lateral internal sphincterotomy (LIS)</b> (gold standard, หายสูงสุด เสี่ยง incontinence เล็กน้อย)",
   exp:"พยาธิกำเนิด: internal sphincter hypertonia → ขาดเลือดที่ posterior midline → แผลไม่หาย",rubric:"ได้เต็ม = conservative + topical diltiazem/GTN + LIS สำหรับ refractory",
   pts:[CR(P("Fiber / น้ำ / stool softener / sitz bath","fiber","ไฟเบอร์","กากใย","sitz","นั่งแช่","softener","ระบาย")),P("Topical diltiazem / GTN","diltiazem","gtn","nitroglycerin","glyceryl"),P("Refractory: botox / LIS","sphincterotomy","\\blis\\b","botulinum","botox")]})
 ),
 interp:"spot anal fissure และขั้นบันไดการรักษา",summary:["anal fissure: ปวดมากขณะถ่าย + เลือดสดเล็กน้อย, posterior midline","chronic: sentinel tag, hypertrophied papilla, เห็นใย internal sphincter","รักษา: fiber/sitz bath → diltiazem/GTN → botox หรือ LIS"]}),

/* ===== PowerPoint 7 ===== */
Co({page:231,sec:"PowerPoint",orig:"PPT 7",topic:"spot",sub:"Imaging film",title:"Spot — newborn chest radiograph with an esophageal anomaly",imgNote:NOIMG,imgAlt:"ภาพเอกซเรย์ทรวงอกและช่องท้องส่วนบนของทารกแรกเกิด ใส่สายทางปาก",kimg:["os66a_k7"],
 stem:`A newborn has been diagnosed with an anomaly of the esophagus and trachea. A chest radiograph is shown.<br>7.1 What type of anomaly is this?<br>7.2 Outline the initial management.`,
 gray:"- เด็กเป็น TE fistula ให้รูป CXR · 1. บอก type ของ TE fistula · 2. ____ [ไฟล์มี screenshot ตาราง Gross classification A–H ไฮไลต์ C: EA with distal TEF 86%]",
 notes:"ข้างข้อนี้ไฟล์มี screenshot ตารางชนิดของ EA/TEF (Gross: A isolated EA 7%, B EA with proximal TEF 2%, <b>C EA with distal TEF 86%</b> (ไฮไลต์+วงกลม), D EA with proximal and distal TEF <1%, H TEF without EA 4%) → kimg os66a_k7",
 flag:"NOIMG · คำถาม 7.2 ไฟล์เว้นว่าง (ผู้จดจำไม่ได้) → Claude เติม",
 parts:S(
  B("7.1 What type of anomaly is this?",3,{tags:["spot"],key:"C: EA with distal TEF (ไฮไลต์ใน screenshot ของไฟล์)",
   ans:"<b>Gross type C — esophageal atresia with distal tracheoesophageal fistula</b> (พบ ~85%) · CXR: <b>NG/OG tube ขดอยู่ใน upper esophageal pouch</b> + <b>มีลมในกระเพาะ/ลำไส้</b> (ลมเข้าผ่าน distal fistula) · ถ้า<b>ไม่มีลมในช่องท้อง (gasless abdomen)</b> → type A (pure EA) หรือ B",
   exp:"ลมในกระเพาะบอกว่ามี fistula ระหว่าง trachea กับ distal esophagus · ทำ X-ray ช่วงทรวงอก-ช่องท้องพร้อมสายในหลอดอาหารเสมอ",rubric:"ได้เต็ม = type C + เหตุผลจากภาพ (สายขดใน pouch + ลมในท้อง)",
   pts:[CR(P("Gross type C: EA with distal TEF","type c","\\bc\\b","distal")),P("สายขดใน upper pouch","coil","ขด","pouch"),P("มีลมในกระเพาะ/ลำไส้","gas","ลม","air","bubble")]}),
  B("7.2 Outline the initial management.",3,{tags:["spot"],flag:"ข้อย่อยนี้ Claude เติม",
   ans:"<b>NPO</b> · ใส่ <b>Replogle (double-lumen) tube</b> ใน upper pouch ต่อ <b>continuous low suction</b> กันสำลักน้ำลาย · <b>นอนศีรษะสูง 30–45°</b> (ลด reflux ของน้ำย่อยผ่าน fistula) · IV fluid + glucose, keep warm · ATB ถ้ามี aspiration pneumonia · เลี่ยง bag-mask ventilation แรง ๆ (ลมเข้ากระเพาะ) · <b>ตรวจหา VACTERL</b>: echocardiogram (ดู aortic arch ด้วย), US ไต, X-ray กระดูกสันหลัง/แขนขา, ตรวจทวารหนัก · ผ่าตัด: right extrapleural thoracotomy → ligate fistula + primary esophageal anastomosis",
   exp:"Echo ก่อนผ่าตัดเพื่อหาโรคหัวใจและ right-sided aortic arch (เปลี่ยนข้างที่เปิดทรวงอก)",rubric:"ได้เต็ม = NPO + Replogle suction + head up + หา VACTERL + แผนผ่าตัด",
   pts:[P("NPO","npo","งดน้ำ","งดนม"),CR(P("Replogle tube continuous suction upper pouch","replogle","suction","ดูด")),P("Head up 30–45°","head up","ศีรษะสูง","prone"),P("หา VACTERL (echo, renal US)","vacterl","vater","echo","associat"),P("ผ่าตัด ligate fistula + anastomosis","ligat","anastomos","thoracotomy","ผ่าตัด")]})
 ),
 interp:"แปล CXR ของ EA/TEF เป็นชนิดตาม Gross และดูแลเบื้องต้นก่อนผ่าตัด",summary:["Type C (EA + distal TEF) พบบ่อยสุด ~85%: สายขดใน upper pouch + มีลมในท้อง","gasless abdomen → pure EA (type A)","ดูแล: NPO, Replogle suction, head up, หา VACTERL, ผ่าตัด ligate fistula + anastomosis"]}),

/* ===== PowerPoint 8 ===== */
Co({page:231,sec:"PowerPoint",orig:"PPT 8",topic:"spot",sub:"Pediatric surgery",title:"Spot — newborn with an abdominal wall abnormality",imgNote:NOIMG,imgAlt:"ภาพทารกแรกเกิดเพศหญิง เห็นผนังหน้าท้องและสายสะดือ",
 stem:`A photograph of a newborn girl is shown.<br>8.1 What is the diagnosis?<br>8.2 Outline the initial management.`,
 gray:"- รูป gastroschisis in newborn female · 1. วินิจฉัย · 2. initial management",flag:"NOIMG",
 parts:S(
  B("8.1 What is the diagnosis?",2,{tags:["spot"],key:"gastroschisis (ระบุใน recall)",
   ans:"<b>Gastroschisis</b> — full-thickness defect ผนังหน้าท้อง <b>ด้านขวาของสะดือ</b> สายสะดือปกติ ลำไส้ออกมา<b>โดยไม่มีถุงหุ้ม</b> ลำไส้บวมหนา มี peel · ddx: <b>omphalocele</b> (ที่สะดือ มีถุงหุ้ม สายสะดือเกาะที่ถุง ความพิการร่วมสูง)",
   exp:"gastroschisis ความพิการร่วมต่ำ (ยกเว้น intestinal atresia ~10%) · omphalocele สัมพันธ์กับ chromosomal anomaly, cardiac, Beckwith-Wiedemann",rubric:"ได้เต็ม = gastroschisis + เหตุผล (ขวาสะดือ ไม่มีถุง)",
   pts:[CR(P("Gastroschisis","gastroschisis")),P("ขวาของสะดือ ไม่มีถุงหุ้ม","ขวา","right","ไม่มีถุง","no sac","without sac","sac"),P("แยกจาก omphalocele","omphalocele")]}),
  B("8.2 Outline the initial management.",4,{tags:["spot"],
   ans:"<b>ป้องกันการสูญเสียความร้อน/น้ำ</b>: ห่อลำไส้ด้วย<b>ถุงพลาสติกใส sterile (bowel bag)</b> หรือ plastic wrap — ไม่ใช้ gauze เปียก · จัด<b>นอนตะแคงขวา</b>/ประคองลำไส้ไม่ให้บิด-พับ (ดูสีลำไส้) · ตู้อบ keep warm · <b>OG/NG tube decompression</b> · NPO · <b>IV fluid</b> (ต้องการมากกว่าปกติ) + glucose · IV ATB · ตรวจหาความพิการร่วม (intestinal atresia) · ส่งต่อศัลยแพทย์เด็ก → <b>primary closure</b> หรือ <b>preformed silo + staged reduction</b> · TPN ระหว่างรอลำไส้ทำงาน",
   exp:"ลำไส้ที่ไม่มีถุงหุ้มสูญเสียความร้อน/น้ำมาก และเสี่ยงขาดเลือดจาก defect บีบ",rubric:"ได้เต็ม = bowel bag/ห่อ + กันอุณหภูมิต่ำ + decompression + IV fluid/ATB + แผนปิด defect",
   pts:[CR(P("ห่อลำไส้ด้วยถุง/พลาสติก sterile","bowel bag","ถุง","plastic","wrap","ห่อ")),P("Keep warm / ตะแคงขวา ป้องกันลำไส้บิด","warm","อุ่น","ตะแคง","lateral","kink"),P("OG/NG decompression + NPO","og","ng","decompress","npo"),P("IV fluid + ATB","iv fluid","สารน้ำ","antibiotic","ยาฆ่าเชื้อ","atb"),P("Primary closure / silo","silo","primary closure","ปิด")]})
 ),
 interp:"spot gastroschisis แยกจาก omphalocele และการดูแลเบื้องต้น",summary:["gastroschisis: ขวาของสะดือ ไม่มีถุงหุ้ม ความพิการร่วมน้อย (intestinal atresia)","ดูแล: bowel bag, keep warm, ตะแคงขวา, OG decompression, IV fluid + ATB → primary closure/silo"]}),

/* ===== PowerPoint 9 ===== */
Co({page:231,sec:"PowerPoint",orig:"PPT 9",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — infant with a congenital facial anomaly",imgNote:NOIMG,imgAlt:"ภาพใบหน้าทารก เห็นริมฝีปากบนด้านซ้าย",
 stem:`A photograph of an infant is shown.<br>9.1 What is the diagnosis?<br>9.2 When should surgery be performed?<br>9.3 What is the initial advice for the mother?`,
 gray:"- รูปเด็ก left cleft lip (ไม่เห็นว่ามี cleft palate ด้วยหรือไม่) · 1. diagnosis · 2. when to surgery · 3. initial management for mother · [ตัวแดงในไฟล์: 3 months · งดให้ลูกดื่มนมแม่]",
 notes:"ตัวพิมพ์สีแดงในไฟล์: เหนือ 'when to surgery' = <b>3 months</b> · ใต้ 'initial management for mother' = <b>งดให้ลูกดื่มนมแม่</b>",
 flag:"⚠ 9.3 ไฟล์ตอบ 'งดให้ลูกดื่มนมแม่' — เฉลยนี้ไม่เห็นด้วย (ดู opinion) · NOIMG",
 opinion:"9.3 ไฟล์ตอบให้งดนมแม่ · ไม่เห็นด้วย: ทารก cleft lip อย่างเดียว (ไม่มี cleft palate) ส่วนใหญ่ดูดนมแม่ได้เพราะเนื้อเต้านมช่วยอุดช่องโหว่ จึงควร<b>สนับสนุนให้นมแม่</b> (WHO/ACPA) · ถ้ามี cleft palate ร่วม การดูดเต้าทำได้ยากจริง ให้บีบนมแม่ป้อนด้วยขวด/จุกพิเศษ (squeeze bottle, Haberman) — ยังใช้นมแม่อยู่ ไม่ใช่งดนมแม่",
 parts:S(
  B("9.1 What is the diagnosis?",2,{tags:["spot"],key:"left cleft lip (ระบุใน recall)",
   ans:"<b>Left unilateral cleft lip</b> (ระบุ complete/incomplete ตามภาพ) — ต้องตรวจในปากว่ามี <b>cleft palate</b> ร่วมหรือไม่ (cleft lip and palate)",exp:"cleft lip ข้างเดียวพบด้านซ้ายบ่อยกว่าขวา",rubric:"ได้เต็ม = unilateral (left) cleft lip + ประเมิน palate",
   pts:[CR(P("Cleft lip (left, unilateral)","cleft lip","ปากแหว่ง")),P("ตรวจ cleft palate ร่วม","palate","เพดาน")]}),
  B("9.2 When should surgery be performed?",2,{tags:["spot"],key:"3 months (ตัวแดงในไฟล์)",
   ans:"<b>Cheiloplasty อายุประมาณ 3 เดือน</b> (rule of 10s: อายุ ≥10 สัปดาห์, น้ำหนัก ≥10 ปอนด์ (~4.5 kg), Hb ≥10 g/dL) · ถ้ามี cleft palate: palatoplasty อายุ 9–18 เดือน (ก่อนเริ่มพูด) · ± nasoalveolar molding ก่อนผ่าตัดปาก",
   exp:"ผ่าตัดเมื่อทารกแข็งแรงพอดมยาสลบได้ปลอดภัย",rubric:"ได้เต็ม = ~3 เดือน / rule of 10s",
   pts:[CR(P("~3 เดือน / rule of 10s","3 เดือน","3 month","three month","rule of 10","10 สัปดาห์","10 week"))]}),
  B("9.3 What is the initial advice for the mother?",3,{tags:["spot"],key:"งดให้ลูกดื่มนมแม่ (ตัวแดงในไฟล์)",
   ans:"<b>ให้คำปรึกษา</b>: ไม่ใช่ความผิดของแม่ แก้ไขได้ด้วยการผ่าตัดผลดี · <b>การให้นม</b>: cleft lip อย่างเดียว → <b>ให้นมแม่ต่อได้/สนับสนุน</b> ให้นมท่าตั้งตรง ใช้นิ้วช่วยปิดรอยแยกที่เต้า · ถ้ามี cleft palate → บีบนมแม่ป้อนด้วย squeeze bottle/จุกพิเศษ ท่าศีรษะสูง ให้เรอบ่อย ติดตามน้ำหนัก · <b>ทีมสหสาขา</b> (ศัลยแพทย์ตกแต่ง, หู คอ จมูก — otitis media, ฝึกพูด, ทันตกรรม/ทันตกรรมจัดฟัน) · genetic counseling (โอกาสเกิดซ้ำ) · นัดผ่าตัด",
   exp:"เป้าหมายแรกคือทารกได้นมพอและน้ำหนักขึ้นจนพร้อมผ่าตัด",rubric:"ได้เต็ม = counseling + feeding ที่ถูก (สนับสนุนนมแม่) + ทีมสหสาขา · ตอบงดนมแม่ = ไม่ได้คะแนนส่วน feeding",
   pts:[P("Counseling ไม่ใช่ความผิดแม่ ผ่าตัดได้ผลดี","ไม่ใช่ความผิด","reassur","counsel","ผ่าตัดได้"),CR(P("Feeding: สนับสนุนนมแม่ (ท่าตั้งตรง) / จุกพิเศษถ้ามี cleft palate","นมแม่","breastfe","ให้นม","feeding","squeeze","haberman","จุก")),P("ทีมสหสาขา / ฝึกพูด / genetic counseling","สหสาขา","multidisciplin","team","ฝึกพูด","speech","genetic")]})
 ),
 interp:"spot cleft lip: เวลาผ่าตัดและการดูแลการให้นม",summary:["cleft lip: cheiloplasty ~3 เดือน (rule of 10s) · cleft palate: 9–18 เดือน","cleft lip อย่างเดียวให้นมแม่ได้ · มี cleft palate ใช้ squeeze bottle/จุกพิเศษ","ทีมสหสาขา + genetic counseling"]}),

/* ===== PowerPoint 10 ===== */
Co({page:232,sec:"PowerPoint",orig:"PPT 10",topic:"spot",sub:"Anorectal",title:"Spot — young man with perianal lesions",imgNote:NOIMG,imgAlt:"ภาพบริเวณรอบทวารหนักของผู้ป่วยชาย มีรอยโรคนูนหลายตุ่ม",
 stem:`A 28-year-old single man. A photograph of the perianal region is shown.<br>10.1 What is the diagnosis?<br>10.2 What are the cause and risk factors?<br>10.3 How would you manage this patient?`,
 gray:"- male, single, 28 yr ให้รูป condyloma ที่รูก้น · 1. diagnosis · 2. cause and risk factors · 3. management · [ตัวแดงในไฟล์: HPV 6,11]",
 notes:"ตัวพิมพ์สีแดงข้าง 'cause and risk factors' = <b>HPV 6,11</b>",flag:"NOIMG",
 parts:S(
  B("10.1 What is the diagnosis?",2,{tags:["spot"],key:"condyloma (ระบุใน recall)",
   ans:"<b>Condyloma acuminata (perianal/anogenital warts)</b> — ตุ่มนูนผิวขรุขระคล้ายดอกกะหล่ำ หลายตุ่ม · ddx: <b>condyloma lata</b> (secondary syphilis — ผิวเรียบ แบน ชื้น), skin tag, giant condyloma (Buschke-Löwenstein), squamous cell carcinoma",
   exp:"ต้องแยก condyloma lata ด้วย VDRL/TPHA เสมอ",rubric:"ได้เต็ม = condyloma acuminata + ddx condyloma lata",
   pts:[CR(P("Condyloma acuminata / anal warts","condyloma acumin","condyloma","หูด","wart")),P("ddx condyloma lata (syphilis)","lata","syphilis","ซิฟิลิส")]}),
  B("10.2 What are the cause and risk factors?",2,{tags:["spot"],key:"HPV 6,11 (ตัวแดงในไฟล์)",
   ans:"สาเหตุ: <b>HPV type 6 และ 11</b> (low-risk ~90%) · ปัจจัยเสี่ยง: เพศสัมพันธ์กับคู่หลายคน/ไม่ใช้ถุงยาง, <b>receptive anal intercourse (MSM)</b>, ภูมิคุ้มกันต่ำ (<b>HIV</b>, ยากดภูมิ, ปลูกถ่ายอวัยวะ), สูบบุหรี่, มี STI อื่น, ไม่ได้รับวัคซีน HPV",
   exp:"HPV 16, 18 (high-risk) สัมพันธ์กับ anal intraepithelial neoplasia/anal SCC",rubric:"ได้เต็ม = HPV 6/11 + ปัจจัยเสี่ยง ≥2",
   pts:[CR(P("HPV 6, 11","hpv","papilloma")),G("ปัจจัยเสี่ยง ≥2",2,P("Multiple partners / unprotected sex","หลายคน","multiple","ถุงยาง","condom","unprotected"),P("Anal intercourse / MSM","anal","msm","ทางทวาร"),P("Immunocompromise / HIV","hiv","immuno","ภูมิคุ้มกัน"),P("Smoking","สูบ","smok"))]}),
  B("10.3 How would you manage this patient?",3,{tags:["spot"],
   ans:"<b>ตรวจเพิ่ม</b>: <b>anoscopy</b> (หารอยโรคใน anal canal) · <b>ตรวจ STI ร่วม</b>: anti-HIV, VDRL/TPHA, HBsAg · biopsy ถ้ารอยโรคผิดลักษณะ/ใหญ่/ดื้อการรักษา · <b>รักษา</b>: ขนาดเล็ก จำนวนน้อย อยู่นอก → topical: <b>podophyllin 25%</b> (แพทย์ทา)/podophyllotoxin 0.5%, <b>imiquimod 5%</b>, <b>TCA 80–90%</b>, <b>cryotherapy</b> · กว้าง/ใน anal canal/ดื้อการรักษา → <b>surgical excision + electrofulguration</b> ภายใต้ยาระงับความรู้สึก · <b>อื่น ๆ</b>: รักษาคู่นอน ใช้ถุงยาง งดเพศสัมพันธ์จนหาย วัคซีน HPV (ป้องกันสายพันธุ์อื่น) ติดตามการกลับเป็นซ้ำ (พบบ่อย)",
   exp:"ห้ามใช้ podophyllin/imiquimod ในหญิงตั้งครรภ์ · recurrence 20–30% ไม่ว่าวิธีใด",rubric:"ได้เต็ม = anoscopy + ตรวจ STI + เลือกวิธีรักษาตามขนาด/ตำแหน่ง + คู่นอน/ป้องกัน",
   pts:[P("Anoscopy","anoscop","ส่องกล้อง"),CR(P("ตรวจ STI ร่วม (HIV, syphilis)","hiv","vdrl","tpha","syphilis","sti","std")),P("Topical: podophyllin / imiquimod / TCA / cryotherapy","podophyll","imiquimod","tca","trichloro","cryo"),P("Surgical excision / electrofulguration","excision","ตัด","fulgur","cauter","จี้"),P("คู่นอน / ถุงยาง / HPV vaccine","คู่นอน","partner","ถุงยาง","condom","vaccin")]})
 ),
 interp:"spot perianal condyloma: สาเหตุ ปัจจัยเสี่ยง และการรักษาร่วมกับคัดกรอง STI",summary:["condyloma acuminata = HPV 6/11 · แยก condyloma lata (syphilis)","ตรวจ anoscopy + HIV/VDRL","รอยโรคเล็ก: podophyllin/imiquimod/TCA/cryo · ใหญ่/ใน anal canal: excision + fulguration"]}),

/* ===== PowerPoint 12 ===== */
Co({page:232,sec:"PowerPoint",orig:"PPT 12",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — comparing two depths of partial-thickness burn",
 stem:`12. Describe the differences between superficial and deep second-degree burns in all aspects, including treatment.`,
 gray:"12. จงบอกความแตกต่างระหว่าง superficial vs deep second-degree burn ในทุกด้าน รวมถึงการรักษา",
 flag:"ไฟล์ไม่บอกว่ามีรูปประกอบหรือไม่ — ลงเป็นคำถามบรรยาย · PPT 11 ไม่มีในไฟล์",
 parts:S(
  B("12.1 Compare superficial and deep second-degree burns (depth, appearance, sensation, healing, treatment).",6,{tags:["spot"],
   ans:"<ul><li><b>ความลึก</b>: superficial partial thickness = epidermis + <b>papillary dermis</b> · deep partial thickness = ลงถึง <b>reticular dermis</b></li><li><b>ลักษณะ</b>: superficial = แดง/ชมพู <b>ชื้น มีตุ่มพอง (blister)</b> กดซีดแล้ว<b>แดงกลับเร็ว</b> · deep = ซีดขาวปนชมพู/ด่าง (mottled) แห้งกว่า blister น้อย/แตก กดซีด<b>กลับช้าหรือไม่ซีด</b></li><li><b>ความรู้สึก</b>: superficial = <b>เจ็บมาก</b> · deep = เจ็บน้อยลง รู้สึกได้แค่แรงกด</li><li><b>ขน/ต่อม</b>: superficial ดึงขนไม่หลุดง่าย · deep ดึงขนหลุดง่าย</li><li><b>การหาย</b>: superficial หายเองใน <b>10–14 วัน (<3 สัปดาห์)</b> แผลเป็นน้อย อาจมีสีผิวเปลี่ยน · deep หาย<b>ช้า >3 สัปดาห์</b> เสี่ยง <b>hypertrophic scar/contracture</b></li><li><b>การรักษา</b>: superficial = conservative: ทำความสะอาด moist dressing (เช่น silver sulfadiazine, biosynthetic/silver dressing) แก้ปวด · deep = <b>early tangential excision + split-thickness skin graft</b> (ถ้าคาดว่าไม่หายใน 3 สัปดาห์) + ป้องกัน contracture (splint, pressure garment, กายภาพ)</li></ul>",
   exp:"เส้นแบ่งสำคัญทางคลินิก = จะหายเองภายใน 3 สัปดาห์หรือไม่ ซึ่งกำหนดการผ่าตัด",rubric:"1 คะแนนต่อด้านที่เปรียบเทียบถูก (ความลึก, ลักษณะ, ความเจ็บ, capillary refill, การหาย/แผลเป็น, การรักษา)",
   pts:[P("ความลึก: papillary vs reticular dermis","papillary","reticular"),P("ลักษณะ: ชื้น blister แดง vs ซีด ด่าง แห้ง","blister","พอง","ชื้น","moist","mottl","ซีด"),P("Capillary refill/blanching เร็ว vs ช้า","blanch","capillary","กดซีด","refill"),P("ความเจ็บ: มาก vs น้อย","เจ็บ","pain","sensation"),CR(P("การหาย: <3 สัปดาห์ vs >3 สัปดาห์ + แผลเป็น","3 สัปดาห์","3 week","14 วัน","hypertrophic","contracture","แผลเป็น","scar")),CR(P("รักษา: dressing vs excision + skin graft","graft","stsg","ปลูกถ่ายผิว","excision","dressing","silver"))]})
 ),
 interp:"แยกความลึกของแผลไหม้ระดับสองเพื่อเลือก conservative หรือผ่าตัด",summary:["superficial PT: papillary dermis, ชื้น blister, เจ็บมาก, หาย <3 สัปดาห์ → dressing","deep PT: reticular dermis, ซีดด่าง, เจ็บน้อย, หาย >3 สัปดาห์ แผลเป็นมาก → excision + STSG"]}),

/* ===== PowerPoint 13 ===== */
Co({page:232,sec:"PowerPoint",orig:"PPT 13",topic:"spot",sub:"Vascular/Ulcer",title:"Spot — ulcer in a bedridden trauma patient",imgNote:NOIMG,imgAlt:"ภาพแผลเรื้อรังบนผิวหนังเหนือปุ่มกระดูกของผู้ป่วยติดเตียง",
 stem:`A 29-year-old man was involved in a severe car accident and has been bedridden. He has developed an ulcer, shown in the photograph.<br>13.1 What is the diagnosis?<br>13.2 In which position does the patient mostly lie?<br>13.3 Which bone lies beneath the ulcer?`,
 gray:"- male 29 yr, severe car accident, has ulcer (รูปแผลกดทับ) · 1. วินิจฉัย · 2. ผู้ป่วยอยู่ในท่าไหนมาก · 3. กระดูกอะไรอยู่ใต้แผล",
 flag:"NOIMG · ไฟล์ไม่บอกตำแหน่งแผล — เฉลยสมมติตำแหน่งที่พบบ่อยสุด (sacrum) และให้ตำแหน่งอื่นไว้เทียบ · คำว่า bedridden ใน stem Claude เติม",
 parts:S(
  B("13.1 What is the diagnosis?",2,{tags:["spot"],key:"รูปแผลกดทับ (ระบุใน recall)",
   ans:"<b>Pressure injury (pressure ulcer/decubitus ulcer)</b> พร้อมบอก <b>stage</b> ตาม NPIAP: 1 = ผิวแดงกดไม่จาง (intact), 2 = partial thickness/ตุ่มพอง, 3 = full thickness ถึงไขมัน, 4 = เห็นกระดูก/เอ็น/กล้ามเนื้อ, unstageable = มี slough/eschar คลุม, deep tissue injury = ม่วงคล้ำ",
   exp:"ปัจจัยเสี่ยง: ไม่เคลื่อนไหว, ความรู้สึกลดลง (spinal cord injury), ความชื้น/กลั้นไม่ได้, ภาวะทุพโภชนาการ",rubric:"ได้เต็ม = pressure ulcer + stage ตามภาพ",
   pts:[CR(P("Pressure ulcer / decubitus","pressure","decubitus","กดทับ","bed sore")),P("Stage (NPIAP)","stage","ระยะ","npiap","npuap")]}),
  B("13.2 In which position does the patient mostly lie?",2,{tags:["spot"],
   ans:"แผลที่ <b>sacrococcygeal area</b> (พบบ่อยที่สุด) = ผู้ป่วย<b>นอนหงาย (supine)</b> เป็นส่วนใหญ่ · เทียบ: แผลที่สะโพกด้านข้าง = นอนตะแคง · แผลที่ ischium = นั่งรถเข็น/นั่งนาน · ส้นเท้า = นอนหงาย",
   exp:"การป้องกัน: พลิกตะแคงทุก 2 ชม., ที่นอนลดแรงกด, ดูแลความชื้น, โภชนาการ",rubric:"ได้เต็ม = ตอบท่าที่สอดคล้องกับตำแหน่งแผลในภาพ",
   pts:[CR(P("Supine (นอนหงาย) สำหรับแผล sacrum","supine","นอนหงาย","หงาย"))]}),
  B("13.3 Which bone lies beneath the ulcer?",2,{tags:["spot"],
   ans:"<b>Sacrum</b> (± coccyx) สำหรับแผล sacral · เทียบ: greater trochanter (ตะแคง), ischial tuberosity (นั่ง), calcaneus (ส้นเท้า), occiput (เด็ก)",
   exp:"แผล stage 4 ที่เห็นกระดูก ต้องประเมิน osteomyelitis",rubric:"ได้เต็ม = ตอบกระดูกที่สอดคล้องกับตำแหน่งแผล",
   pts:[CR(P("Sacrum","sacrum","sacral","กระเบนเหน็บ","coccyx"))]})
 ),
 interp:"spot pressure injury และสัมพันธ์ตำแหน่งแผลกับท่าและปุ่มกระดูก",summary:["pressure injury stage 1–4 + unstageable + deep tissue injury (NPIAP)","sacrum/coccyx = นอนหงาย · greater trochanter = ตะแคง · ischium = นั่ง · calcaneus = ส้นเท้า"]}),

/* ===== PowerPoint 14 ===== */
Co({page:232,sec:"PowerPoint",orig:"PPT 14",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — red lump on the arm",imgNote:NOIMG,imgAlt:"ภาพตุ่มนูนสีแดงบนผิวหนังบริเวณแขน",
 stem:`A photograph of a red lump on the arm is shown.<br>14.1 Describe what you see.<br>14.2 What is the diagnosis?`,
 gray:"- รูปตุ่มแดงที่แขน · A. บรรยาย · B. วินิจฉัย (infected epidermal cyst)",flag:"NOIMG",
 parts:S(
  B("14.1 Describe what you see.",3,{tags:["spot"],
   ans:"ก้อน<b>เดี่ยว</b> นูนรูปโดม ในชั้นผิวหนัง/ใต้ผิวหนังที่แขน ขนาด…cm ขอบชัด ผิวด้านบน<b>แดง บวม</b> (อักเสบ) อาจเห็น <b>central punctum</b> (รูเปิดตรงกลาง) ± หนอง/มีสารสีขาวเหลวเหมือนเนย (keratin) ไหลออก · บรรยายผิวรอบก้อน (cellulitis)",
   exp:"central punctum เป็นลักษณะเฉพาะของ epidermal cyst",rubric:"ได้เต็ม = ตำแหน่ง จำนวน รูปร่าง ขนาด ผิวด้านบนแดงอักเสบ + central punctum",
   pts:[P("ก้อนเดี่ยว นูนรูปโดม ขอบชัด","dome","โดม","นูน","ก้อน","nodule","ขอบชัด"),CR(P("ผิวด้านบนแดงอักเสบ","แดง","erythem","inflam","อักเสบ")),P("Central punctum","punctum","รูเปิด","รูตรงกลาง")]}),
  B("14.2 What is the diagnosis?",2,{tags:["spot"],key:"infected epidermal cyst (ระบุใน recall)",
   ans:"<b>Infected (inflamed) epidermal (epidermoid/sebaceous) cyst</b> · ddx: furuncle/carbuncle, skin abscess · การรักษา: ระยะอักเสบ → <b>I&D</b> + ประคบอุ่น ± ATB ถ้ามี cellulitis · หายอักเสบแล้ว (~4–6 สัปดาห์) → <b>complete excision เอาผนังถุงออกทั้งหมด</b> (ไม่งั้นกลับเป็นซ้ำ)",
   exp:"ผ่าเอาถุงออกขณะอักเสบทำได้ยากเพราะผนังเปื่อย",rubric:"ได้เต็ม = infected epidermal cyst",
   pts:[CR(P("Infected epidermal cyst","epiderm","sebaceous","ซีสต์","cyst")),P("ddx furuncle / abscess","furuncle","carbuncle","abscess","ฝี")]})
 ),
 interp:"spot epidermal cyst ที่อักเสบ และแนวทางรักษาเป็นขั้น",summary:["epidermal cyst: ก้อนโดมใต้ผิวหนัง มี central punctum","ระยะอักเสบ: I&D + ATB ถ้ามี cellulitis · หายอักเสบแล้ว: excision เอาผนังถุงออกทั้งหมด"]}),

);
})();

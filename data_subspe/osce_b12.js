(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "AC OSCE BY MDCU 79 Rotate C" → MDCU79 RoC (เพิ่ม 20 พ.ย. 2026)
   ไฟล์ SO79CQ = AC_79C_OSCE_Sx_OSCE_MDCU_79_Ro_C.pdf (22 หน้า, iOS) · หน้า 1–11 = ตาราง ข้อ / โจทย์ / รวม (ช่องเฉลยว่าง, ปกเขียน "เฉลยอยู่อีก Tab นะจ้ะ")
     หน้า 12–22 = ตารางชุดเดียวกัน + คอลัมน์ "เฉลย" (มีคำตอบแค่ข้อ 22, 24, 25, 26, 28, 29, 30 — ที่เหลือมีแต่เลข 1./2. ว่าง)
   สถานีในไฟล์: 1–12 และ 16–30 (ไม่มีข้อ 13–15 ในไฟล์) = 27 สถานี · ทุกสถานี sec "OSCE" (ไฟล์ไม่ได้แยกพาร์ท PowerPoint/MEQ)
   รูปในไฟล์ 11 รูป (ใช้จากครึ่งหลัง หน้า 13–22 ซึ่งเป็นรูปชุดเดียวกับครึ่งแรก): OSCE 6 CXR, 12 แผนภาพ Hartmann, 18 CT, 19 ขา, 26 (2 รูป), 27 แผนภาพไส้เลื่อน, 28 หู, 29 (2 ฟิล์ม), 30 CXR ทารก
     · OSCE 27 รูปต้นฉบับมีป้ายชื่อไส้เลื่อน (= คำตอบ) → ปิดป้ายเป็นเลข 1–6 ในรูปโจทย์ (os79c_27) และใช้รูปต้นฉบับเป็นรูปเฉลย (os79c_k27)
     · รูปเฉลย os79c_k22/24/25/26/28/29/30 = ครอปช่องเฉลยหน้า 18–22
   สถานีที่ไฟล์บอกว่ามีรูป/ของจริงแต่ไฟล์ไม่มีรูป: 5, 8, 9, 10, 11, 16, 17, 20, 21, 23, 24, 25 → imgNote NOIMG + imgAlt
   ผู้จดหลายข้อไม่ได้แยกว่ามีอาจารย์คุมหรือไม่ — ข้อ 1, 2, 3, 7, 22 เป็นหัตถการ/ตรวจ/ซักประวัติ จึงใส่ ex:1 · ข้อ 4 ผู้จดเขียนว่า "ไม่มีอาจารย์คุม" */
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
const Co=o=>Object.assign({set:"MDCU79",ro:"RoC",file:"SO79CQ",sec:"OSCE",opinion:""},o);
QB.push(

/* ===== OSCE 1 ===== */
Co({page:2,orig:"1",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — two simple interrupted sutures and wound dressing",
 stem:`A skin-suturing practice pad with a straight laceration, suture material, needle holder, toothed forceps, scissors and dressing materials are provided. The examiner is observing.<br>1. Close the wound with <b>two simple interrupted sutures</b>.<br>2. Dress the sutured wound.`,
 gray:"1 เย็บ simple stitch 2 อัน + ปิดแผลที่เย็บ",
 sp:"(Claude แต่งรายละเอียดอุปกรณ์) หุ่นผิวหนังมีแผลตรง · ไหม nylon 3-0/4-0 เข็ม reverse cutting · needle holder, toothed forceps, กรรไกรตัดไหม · ผ้าก๊อซ เทป/แผ่นปิดแผล · ผู้คุมดู: จับเครื่องมือถูก (เข็มที่ 1/3 หลัง), แทงตั้งฉาก, ระยะจากขอบแผล = ความลึก, ขอบแผล evert, instrument tie square knot ≥3 throws, ไหมยาว ~5 mm, ระยะห่าง 2 stitch เหมาะ, ปิดแผลสะอาด",
 flag:"ขนาดไหมและอุปกรณ์ในบทผู้คุม Claude แต่ง",
 notes:"ไฟล์จดสั้น: \"เย็บ simple stitch 2 อัน + ปิดแผลที่เย็บ\" ไม่มีเฉลย · ไม่ได้ระบุว่ามีอาจารย์คุม แต่เป็นสถานีหัตถการ จึงใส่เป็นสถานีมีผู้คุม · ตรวจคีย์ 22 พ.ย. 2026: เดิม exp ‘หนังศีรษะ/ลำตัว 7–10 วัน, แขนขา 10–14’ → แก้เป็น ลำตัว 10–14 วัน (เขียนคู่กับตำราเดิม 7–10) ตาม AAFP 2017 (Laceration Repair, Am Fam Physician 2017;95:628 Table 5: หน้า 3–5, หนังศีรษะ 7–10, แขน 7–10, ลำตัว 10–14, ขา 10–14, มือ/เท้า 10–14, ฝ่ามือ/ฝ่าเท้า 14–21 วัน — expert opinion)",
 opinion:"ไฟล์ไม่มีเฉลย — ขั้นตอนเขียนตามมาตรฐาน basic surgical skill (ความมั่นใจสูง); จุดที่คนตกบ่อยคือจับเข็มด้วยมือ ไม่ evert ขอบแผล และปมไม่ square · ตรวจคีย์ (22 พ.ย. 2026): วันตัดไหมลำตัว: AAFP 2017 = 10–14 วัน (ตำราเดิม/ตำราไทยหลายเล่ม 7–10 วัน) — ในข้อสอบเขียนเป็นช่วงตามตำแหน่งและระบุแหล่งได้ทั้งสอง · ความมั่นใจสูง",
 parts:S(
  B("1.1 Close the wound with two simple interrupted sutures.",8,{tags:["proc"],
   ans:"<b>เตรียม</b>: แนะนำตัว (บอกผู้คุมว่าเป็นหุ่น) ล้างมือ ใส่ถุงมือ · จับ needle holder แบบ thenar grip/ring grip · <b>จับเข็มที่ 1/2–2/3 จากปลาย (ค่อนไปทางท้ายเข็ม)</b> ปลายเข็มชี้ขึ้น ไม่ใช้มือจับเข็ม · <b>แทงตั้งฉากกับผิว</b> ห่างขอบแผล ~3–5 mm (ระยะ = ความลึก) หมุนข้อมือตามความโค้งของเข็ม ออกอีกฝั่งระยะเท่ากัน ลึกเท่ากัน (box shape → ขอบแผล <b>evert</b>) · ใช้ toothed forceps จับขอบแผลเบา ๆ (จับ dermis ไม่บีบผิว) · <b>instrument tie</b>: throw แรก 2 รอบ (surgeon's knot) + throw ที่ 2, 3 สลับทิศ = square knot · วางปมไว้ข้างแผล ไม่ตึงเกิน (แค่ขอบแผลชิด) · ตัดไหมเหลือ ~5 mm · stitch ที่ 2 ห่างพอดี (~5–10 mm) · ทิ้งเข็มลงภาชนะ sharps",
   exp:"Simple interrupted: ข้อดี — ถ้าเส้นหนึ่งหลุด เส้นอื่นยังอยู่, ปรับความตึงได้ทีละจุด · ตัดไหมหน้า 3–5 วัน, หนังศีรษะ 7–10 วัน, ลำตัว 10–14 วัน (AAFP 2017; ตำราเดิม 7–10), แขน 7–10 / ขา 10–14 วัน",
   rubric:"ได้ = จับเข็มด้วยเครื่องมือ + แทงตั้งฉาก + ระยะ/ความลึกเท่ากันสองฝั่ง + ขอบแผล evert + square knot + ตัดไหมยาวเหมาะ · ตก = จับเข็มด้วยมือ/เข็มหล่น/ปมหลุด",
   pts:[H("เตรียม",10),P("แนะนำตัว ล้างมือ ใส่ถุงมือ","แนะนำตัว","ล้างมือ","ถุงมือ","glove"),
    H("เทคนิคเย็บ",60),CR(P("จับเข็มด้วย needle holder ที่ ~2/3 จากปลาย ไม่ใช้มือ","needle holder","2/3","1/3","ไม่ใช้มือ","จับเข็ม")),CR(P("แทงตั้งฉาก ระยะและความลึกเท่ากันทั้งสองฝั่ง","ตั้งฉาก","perpendicular","90","เท่ากัน","equal","symmetr")),P("ขอบแผล evert","evert","ขอบแผลนูน","ปลิ้น"),P("ใช้ toothed forceps จับขอบเบา ๆ","toothed","forceps","ฟอร์เซป"),
    H("ผูกและตัด",30),CR(P("Instrument tie: surgeon's knot แล้ว square knot ≥3 throws","square","surgeon","instrument tie","3 throw","สามปม","สลับ")),P("ปมอยู่ข้างแผล ไม่ตึงเกิน ตัดไหม ~5 mm","ข้างแผล","ไม่ตึง","5 mm","ตัดไหม")]}),
  B("1.2 Dress the sutured wound.",2,{tags:["proc"],
   ans:"ทำความสะอาดรอบแผล (NSS/antiseptic จากแผลออกด้านนอก) · ซับให้แห้ง · ปิดด้วย sterile gauze/non-adherent dressing ให้คลุมแผลทั้งหมดและเกินขอบ · ติดเทปขวางแนวแผล ไม่ตึงรัด · ทิ้งของมีคม · ถอดถุงมือ ล้างมือ · แนะนำผู้ป่วย: ไม่ให้แผลเปียก 24–48 ชม., สังเกตอาการติดเชื้อ, นัดตัดไหม",
   exp:"แผลเย็บสะอาดปิดได้ 24–48 ชม. จากนั้นอาบน้ำได้ · ไม่จำเป็นต้องทายาปฏิชีวนะทุกแผล",
   rubric:"ได้ = ทำความสะอาด + ปิด sterile เกินขอบแผล + คำแนะนำ",
   pts:[P("ทำความสะอาดแผล จากในออกนอก","ทำความสะอาด","clean","nss","antiseptic","betadine"),CR(P("ปิด sterile gauze คลุมแผลทั้งหมด","gauze","ก๊อซ","ปิดแผล","dressing")),P("คำแนะนำ: ไม่เปียก สังเกตติดเชื้อ นัดตัดไหม","เปียก","ติดเชื้อ","ตัดไหม","infection","นัด")]})
 ),
 interp:"สถานีหัตถการพื้นฐาน: simple interrupted suture + instrument tie + ปิดแผล",
 summary:["จับเข็มที่ 2/3 จากปลาย ด้วย needle holder เท่านั้น","แทงตั้งฉาก ระยะ = ความลึก สองฝั่งเท่ากัน → ขอบ evert","Surgeon's knot + square knot ≥3 throws วางปมข้างแผล ตัดไหม ~5 mm","ปิดแผล sterile + คำแนะนำ + นัดตัดไหมตามตำแหน่ง"]}),

/* ===== OSCE 2 ===== */
Co({page:2,orig:"2",topic:"proc",sub:"Local anesthesia",ex:1,proc:1,title:"Procedure — sterile gloving and local anesthetic infiltration",
 stem:`A syringe, 1% lidocaine and two hypodermic needles (pink and purple hubs) are provided. The examiner is observing.<br>1. Put on sterile gloves.<br>2. Draw up the local anesthetic and infiltrate the wound edge on the skin pad, choosing the appropriate needle for each step.`,
 gray:"2. ใส่ถุงมือ+ฉีดยาชา มีหัวเข็มมาให้ 2 อัน ชมพูกับม่วง",
 sp:"(Claude แต่ง) หุ่นผิวหนังมีแผล · ถุงมือ sterile · syringe 10 mL · 1% lidocaine (ไม่มี adrenaline) · เข็ม 18G (ชมพู) และ 24–26G (ม่วง/น้ำตาล — สีหัวเข็มในไทยบางยี่ห้อ 24G = ม่วง) · ผู้คุมดู: ใส่ถุงมือไม่ปนเปื้อน, ตรวจยา/วันหมดอายุ, ใช้เข็มใหญ่ดูดยา เข็มเล็กฉีด, aspirate ก่อนฉีด, ฉีดผ่านขอบแผล, คำนวณ max dose",
 flag:"ขนาดเข็มตามสี และชนิด/ความเข้มข้นยาชา Claude แต่ง (ไฟล์บอกแค่สีชมพูกับม่วง)",
 notes:"ไฟล์: \"ใส่ถุงมือ+ฉีดยาชา มีหัวเข็มมาให้ 2 อัน ชมพูกับม่วง\" — ประเด็นคือเลือกเข็มชมพู (18G ใหญ่) ดูดยา และเข็มม่วง (เล็ก) ฉีด · ตรวจคีย์ 22 พ.ย. 2026: (1) opinion เดิมอ้าง ‘ISO 24G = เหลือง, 23G = น้ำเงิน’ ซึ่งเป็นรหัสสี IV cannula → แก้เป็นรหัสเข็ม hypodermic ISO 6009: 18G ชมพู, 24G ม่วง และคำตอบเดิม ‘ม่วง/25–27G’ → ‘ม่วง = 24G’ · (2) เดิม exp ‘ห้ามใช้ adrenaline ที่นิ้ว/องคชาต (คำแนะนำแบบดั้งเดิม…)’ → แก้เป็น ใช้ได้ที่นิ้ว/จมูก/หูถ้าไม่มี vascular compromise ตาม AAFP 2017 (Laceration Repair: A Practical Approach, Am Fam Physician 2017;95:628 — epinephrine ≤1:100,000 ปลอดภัยในนิ้วถ้าไม่มี vascular compromise; 1:200,000 ที่จมูกและหู; peripheral vascular compromise = ข้อห้าม)",
 opinion:"ไฟล์ไม่มีเฉลย — ประเด็นหลักที่ผู้จดเน้นคือการเลือกเข็มตามสี (ชมพู = 18G ใช้ดูดยา, ม่วง = เข็มเล็กใช้ฉีด) ความมั่นใจปานกลาง-สูง (รหัสสีเข็มฉีดยา hypodermic ตาม ISO 6009: 18G ชมพู · 21G เขียว · 22G ดำ · 23G น้ำเงิน · <b>24G ม่วง</b> · 25G ส้ม · 27G เทา — สีเหลือง 24G ที่เคยเขียนไว้เป็นรหัสของ IV cannula ตาม ISO 10555 ซึ่งเป็นคนละมาตรฐาน) · ตรวจคีย์ (22 พ.ย. 2026): รหัสสีเข็ม ISO 6009: 18G ชมพู (ดูดยา) · 24G ม่วง (ฉีด) · adrenaline ในนิ้วไม่ใช่ข้อห้ามแล้ว (AAFP 2017) · ความมั่นใจสูง",
 parts:S(
  B("2.1 Put on sterile gloves.",3,{tags:["proc"],
   ans:"ล้างมือ · เลือกขนาด ตรวจซองไม่ขาด/ไม่หมดอายุ · เปิดซองชั้นนอก วางซองชั้นใน บนพื้นที่สะอาด · มือเปล่าจับ<b>ด้านในของขอบพับ</b>ของถุงมือข้างแรกแล้วสวม · มือที่ใส่ถุงมือแล้ว<b>สอดนิ้วใต้ขอบพับ (ด้านนอก)</b>ของอีกข้างแล้วสวม · คลี่ขอบพับโดยไม่แตะผิว · มืออยู่เหนือเอว · ถ้าปนเปื้อน = เปลี่ยนใหม่",
   exp:"มือเปล่าแตะได้เฉพาะด้านในถุงมือ ถุงมือ sterile แตะได้เฉพาะด้านนอก",rubric:"ได้ = ไม่ปนเปื้อน · ตก = ปนเปื้อนแล้วไม่เปลี่ยน",
   pts:[P("ล้างมือ ตรวจซอง ขนาด","ล้างมือ","ซอง","ขนาด","หมดอายุ"),CR(P("ข้างแรกจับด้านในขอบพับ","ด้านใน","inside","ขอบพับ","cuff")),CR(P("ข้างที่สองสอดนิ้วใต้ขอบพับ","ใต้ขอบพับ","สอดนิ้ว","outer")),P("มือเหนือเอว ไม่แตะสิ่งไม่ sterile","เหนือเอว","waist","ไม่แตะ")]}),
  B("2.2 Draw up and infiltrate the local anesthetic.",7,{tags:["proc"],
   ans:"ตรวจยา: ชื่อ ความเข้มข้น (1% lidocaine = 10 mg/mL) ± adrenaline วันหมดอายุ ถามประวัติแพ้ยา · คำนวณ <b>max dose: lidocaine 4.5 mg/kg (≤300 mg) ไม่มี adrenaline, 7 mg/kg (≤500 mg) เมื่อมี adrenaline</b> · <b>ใช้เข็มชมพู (18G) ดูดยา</b> (ใหญ่ ดูดเร็ว) แล้ว<b>เปลี่ยนเป็นเข็มเล็ก (ม่วง = 24G) สำหรับฉีด</b> (เจ็บน้อย) · ไล่อากาศ · ทำความสะอาดผิว · แทงผ่าน<b>ขอบแผลที่เปิด</b> (เจ็บน้อยกว่าผ่านผิวหนังที่ยังดี) เข้าชั้น subcutaneous · <b>aspirate ก่อนฉีดเสมอ</b> (ไม่ให้เข้าหลอดเลือด) · ฉีดช้า ๆ ขณะถอยเข็ม ไล่ไปรอบแผล แทงครั้งต่อไปในบริเวณที่ชาแล้ว · รอ 2–5 นาทีแล้วทดสอบความชา · ไม่ recap เข็ม ทิ้ง sharps",
   exp:"เทคนิคลดเจ็บ: เข็มเล็ก ฉีดช้า ยาอุ่น buffered lidocaine (bicarbonate 1:10) · Adrenaline ใช้ที่นิ้ว จมูก หู ได้ถ้าไม่มี peripheral vascular compromise (AAFP 2017) — ตำราเดิมห้ามที่นิ้ว/องคชาต; องคชาตยังนิยมเลี่ยง · LAST: ชารอบปาก หูอื้อ ชัก arrhythmia → หยุดยา, airway, lipid emulsion 20%",
   rubric:"ได้ = ตรวจยา/แพ้ยา + max dose + เข็มใหญ่ดูด เข็มเล็กฉีด + aspirate + ฉีดผ่านขอบแผล · ตก = ไม่ aspirate/ใช้เข็มใหญ่ฉีด",
   pts:[H("ก่อนฉีด",30),P("ตรวจยา ถามแพ้ยา","แพ้","allerg","ตรวจยา","lidocaine","ชื่อยา"),P("คำนวณ max dose (4.5 / 7 mg/kg)","4.5","7 mg","max","300","ขนาดสูงสุด"),
    H("เลือกเข็ม",30),CR(P("เข็มชมพู 18G ดูดยา เปลี่ยนเข็มเล็ก (ม่วง) ฉีด","ชมพู","pink","18","ม่วง","purple","เปลี่ยนเข็ม","เข็มเล็ก")),
    H("ฉีด",40),CR(P("Aspirate ก่อนฉีด","aspirat","ดูดกลับ","ดึงกลับ")),P("แทงผ่านขอบแผล ฉีดช้า ๆ ขณะถอยเข็ม","ขอบแผล","wound edge","ช้า","ถอยเข็ม","subcut"),P("ทดสอบความชา ทิ้ง sharps ไม่ recap","ทดสอบ","test","sharps","recap")]})
 ),
 interp:"สถานีหัตถการ: sterile gloving + local infiltration — ประเด็นเลือกเข็มตามสี (ใหญ่ดูด เล็กฉีด) และความปลอดภัยของยาชา",
 summary:["Lidocaine max 4.5 mg/kg (300 mg) · กับ adrenaline 7 mg/kg (500 mg)","1% = 10 mg/mL","เข็มใหญ่ (ชมพู 18G) ดูดยา → เข็มเล็กฉีด","Aspirate ก่อนฉีด ฉีดผ่านขอบแผล ช้า ๆ","LAST → หยุดยา + airway + lipid emulsion"]}),

/* ===== OSCE 3 ===== */
Co({page:2,orig:"3",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — abdomen in a patient with upper abdominal pain, with an ultrasound",
 stem:`A simulated patient has right upper abdominal pain. The examiner is observing.<br>1. Perform an abdominal examination relevant to this complaint.<br>2. The ultrasound result is given (gallstones in a gallbladder). State your diagnosis.`,
 gray:"3 จงแสดงตรวจร่างกายคนปวดท้อง ให้รูป ultrasound เป็น symptomatic gallstone",
 sp:"(Claude แต่ง) หญิง 45 ปี ปวดใต้ชายโครงขวาหลังกินอาหารมัน ร้าวไปสะบักขวา · ผลตรวจที่ผู้คุมบอกเมื่อตรวจถูกวิธี: ไม่เหลือง ไม่มีไข้ · tenderness RUQ เล็กน้อย Murphy sign ลบ (หรือบวกถ้าผู้สอบตรวจถูกต้องในบทแบบ cholecystitis) · ไม่คลำได้ถุงน้ำดี · US: gallstones หลายก้อนมี posterior acoustic shadow ผนังถุงน้ำดีไม่หนา ไม่มี pericholecystic fluid CBD ไม่ขยาย",
 flag:NOIMG,imgAlt:"ภาพ ultrasound ถุงน้ำดีมีก้อนสะท้อนเสียงสูงหลายก้อนพร้อมเงาดำด้านหลัง",
 notes:"ไฟล์: \"จงแสดงตรวจร่างกายคนปวดท้อง ให้รูป ultrasound เป็น symptomatic gallstone\" — ไม่มีรูปในไฟล์ ไม่มีเฉลย · บทผู้ป่วยและผลตรวจ Claude แต่ง · ตรวจคีย์ 22 พ.ย. 2026: เดิม ‘ไม่มีผนังหนา >3 mm’ → แก้เป็น ‘≥4 mm’ (ข้อ 3.2) ตาม Tokyo Guidelines 2018 (TG18, Yokoe et al. JHBPS 2018 CQ5: GB wall thickening ≥4 mm; TG13 ใช้ ≥5 mm)",
 opinion:"ไฟล์ไม่มีเฉลย — ขั้นตอนตรวจท้องตามมาตรฐาน (ดู ฟัง เคาะ คลำ) + Murphy sign; การวินิจฉัยตามที่ผู้จดเขียน (symptomatic gallstone) ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): เกณฑ์ผนังถุงน้ำดีหนาใน US ใช้ ≥4 mm ตาม TG18 (TG13 ใช้ ≥5 mm) — ถ้าเขียนตัวเลขให้ระบุชื่อแนวทาง · ความมั่นใจสูง",
 parts:S(
  B("3.1 Perform the abdominal examination.",8,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต ล้างมือ ยืนขวาของผู้ป่วย จัดท่านอนหงายหมอนใบเดียว แขนข้างลำตัว เปิดหน้าท้องตั้งแต่ใต้ราวนมถึงขาหนีบ ถามจุดที่ปวด · <b>General</b>: jaundice (ตาขาว), ไข้, ท่าทาง · <b>Inspection</b>: distension, scar, การเคลื่อนไหวตามการหายใจ · <b>Auscultation</b> bowel sound ก่อนคลำ · <b>Percussion</b>: liver span, percussion tenderness · <b>Palpation</b>: light → deep เริ่มไกลจุดปวด ดูหน้าผู้ป่วย หา guarding/rebound · ตับ ม้าม ไต · <b>Murphy sign</b>: กดใต้ชายโครงขวาแนว midclavicular ให้หายใจเข้าลึก — หยุดหายใจเพราะเจ็บ = บวก · <b>Courvoisier</b>: คลำถุงน้ำดีโตไม่เจ็บ (ถ้าเหลือง) · ตรวจ hernia orifices · บอกว่าจะทำ PR",
   exp:"Murphy sign บวก (และ sonographic Murphy) ชี้ acute cholecystitis · symptomatic gallstone (biliary colic) มักกดเจ็บเล็กน้อย Murphy ลบ ไม่มีไข้",
   rubric:"ได้ = เตรียมถูก + ดู→ฟัง→เคาะ→คลำ + Murphy sign + organomegaly · ตก = คลำก่อนฟัง หรือคลำแรงที่จุดปวดก่อน",
   pts:[H("เตรียม",15),CR(P("แนะนำตัว ขออนุญาต ยืนขวา จัดท่า เปิดหน้าท้อง","แนะนำตัว","ขออนุญาต","ขวา","จัดท่า","expose","เปิดหน้าท้อง")),
    H("General + ดู ฟัง เคาะ",30),P("ดู jaundice ไข้","jaundice","ตาเหลือง","เหลือง","ไข้"),CR(P("ฟัง bowel sound ก่อนคลำ","bowel sound","ฟัง","auscult")),P("เคาะ liver span","percuss","เคาะ","liver span"),
    H("คลำ",55),CR(P("คลำ light → deep เริ่มไกลจุดปวด","light","deep","ไกล","away","ตื้น","ลึก")),CR(P("Murphy sign","murphy")),P("ตับ ม้าม ถุงน้ำดีโต (Courvoisier)","ตับ","liver","spleen","ม้าม","courvoisier","ถุงน้ำดี"),P("Guarding / rebound","guard","rebound","rigid")]}),
  B("3.2 State your diagnosis from the ultrasound.",2,{tags:["pe","img"],
   ans:"<b>Symptomatic gallstones (biliary colic)</b> — US: echogenic foci ในถุงน้ำดีพร้อม <b>posterior acoustic shadow</b> เคลื่อนตามท่า (gravity-dependent) · ไม่มีผนังหนา ≥4 mm (TG18; TG13 ≥5 mm), pericholecystic fluid หรือ sonographic Murphy (ซึ่งบ่งชี้ acute cholecystitis) · การรักษา: <b>elective laparoscopic cholecystectomy</b>",
   exp:"Tokyo Guidelines 2018 acute cholecystitis: local inflammation (Murphy, RUQ mass/pain/tenderness) + systemic (ไข้, CRP, WBC) + imaging",
   rubric:"ได้ = gallstone/symptomatic cholelithiasis + บอกลักษณะ US (shadow) ± แผนรักษา",
   pts:[CR(P("Symptomatic gallstone / biliary colic","gallstone","cholelithiasis","biliary colic","นิ่วในถุงน้ำดี")),P("US: echogenic + posterior acoustic shadow","shadow","echogenic","เงา"),P("Elective laparoscopic cholecystectomy","cholecystectomy","\\blc\\b","ผ่าตัดถุงน้ำดี")]})
 ),
 interp:"ตรวจท้องอย่างเป็นระบบในผู้ป่วยปวด RUQ และแปลผล US ว่าเป็นนิ่วถุงน้ำดีที่มีอาการ",
 summary:["ลำดับ: ดู → ฟัง → เคาะ → คลำ (เริ่มไกลจุดปวด)","Murphy sign บวก = acute cholecystitis","US นิ่ว: echogenic + posterior acoustic shadow + เคลื่อนตามท่า","Symptomatic gallstone → elective LC"]}),

/* ===== OSCE 4 ===== */
Co({page:2,orig:"4",topic:"pe",sub:"DRE/Prostate",title:"Physical examination — digital rectal examination of the prostate (no examiner)",
 stem:`A prostate examination model is provided. There is no examiner at this station.<br>1. Perform a digital rectal examination on the model.<br>2. Describe the characteristics of the prostate and give your diagnosis.`,
 gray:"4 ตรวจ prostate ไม่มีอาจารย์คุม ให้ Dx และบรรยายลักษณะของ prostate",
 sp:"(Claude แต่ง) หุ่น DRE · ต่อมลูกหมากในหุ่นสถานีนี้: โตสมมาตร ผิวเรียบ ขอบชัด ยางนุ่ม (rubbery) median sulcus ตื้นลงแต่ยังคลำได้ เคลื่อนที่ได้ ไม่กดเจ็บ (= BPH) · บางรอบอาจเปลี่ยนเป็นก้อนแข็งขรุขระ (CA prostate) หรือกดเจ็บ บวมนุ่ม (prostatitis)",
 flag:"ลักษณะต่อมในหุ่น Claude แต่ง (ไฟล์ไม่ได้บอก) — ในสอบจริงให้บรรยายตามที่คลำได้",
 notes:"ไฟล์: \"ตรวจ prostate ไม่มีอาจารย์คุม ให้ Dx และบรรยายลักษณะของ prostate\" · ไม่มีเฉลย",
 opinion:"ไฟล์ไม่มีเฉลย — เขียนตามหลักการตรวจ DRE และการบรรยายต่อมลูกหมาก (size, surface, consistency, sulcus, mobility, tenderness, nodule) ความมั่นใจสูง; Dx ขึ้นกับหุ่นที่ให้",
 parts:S(
  B("4.1 Describe the steps of the digital rectal examination.",4,{tags:["pe"],
   ans:"แนะนำตัว อธิบาย ขออนุญาต (ในผู้ป่วยจริงมี chaperone) · ท่า <b>left lateral (Sims)</b> เข่าชิดอก (หรือ lithotomy/knee-chest) · สวมถุงมือ · <b>Inspection</b> perianal: skin tag, hemorrhoid, fissure, fistula, discharge · หล่อลื่นนิ้วชี้ วางนิ้วที่ anal verge ให้ผู้ป่วยหายใจเข้าลึก ๆ แล้วค่อย ๆ สอด · ประเมิน <b>anal sphincter tone</b> (บีบนิ้ว) · คลำผนัง rectum รอบวง · ด้านหน้า (anterior) คลำ <b>prostate</b> · ถอนนิ้ว ดูสิ่งที่ติดถุงมือ (เลือด มูก อุจจาระสี) · เช็ดทำความสะอาด ขอบคุณ",
   exp:"ในชาย anterior wall = prostate, seminal vesicles (คลำไม่ได้ปกติ) · ในหญิง anterior = cervix",
   rubric:"ได้ = จัดท่าถูก + inspection + sphincter tone + คลำรอบ rectum + prostate + ดูถุงมือ",
   pts:[P("แนะนำตัว ขออนุญาต chaperone","แนะนำตัว","ขออนุญาต","chaperone","อธิบาย"),CR(P("ท่า left lateral / Sims","left lateral","sims","ตะแคงซ้าย","lateral")),P("Inspection perianal","inspect","ดูรอบทวาร","perianal","hemorrhoid","fissure"),P("Sphincter tone","tone","sphincter","บีบ"),CR(P("คลำ prostate ด้านหน้า + rectal wall รอบวง","prostate","ต่อมลูกหมาก","anterior","รอบวง","ผนัง")),P("ดูถุงมือ: เลือด มูก อุจจาระ","ถุงมือ","glove","เลือด","blood","มูก")]}),
  B("4.2 Describe the prostate and give your diagnosis.",6,{tags:["pe"],
   ans:"บรรยายต่อม: <b>size</b> (ปกติขนาดลูกเกาลัด ~20 g, ~2.5–3 cm กว้าง; โต = ประมาณขนาด/นิ้วที่เกิน), <b>surface</b> (เรียบ/ขรุขระ), <b>consistency</b> (ยาง rubbery = ปกติ/BPH · แข็งเหมือนหิน stony hard = CA · นุ่มบวม boggy = prostatitis), <b>median sulcus</b> (คลำได้/หาย), <b>lateral lobes</b> สมมาตรไหม, <b>nodule</b>, <b>mobility</b> ของ rectal mucosa เหนือต่อม, <b>tenderness</b> · ตัวอย่างหุ่นนี้: ต่อมโตประมาณ 40 g สมมาตร ผิวเรียบ ยาง median sulcus ตื้นลง ไม่มี nodule ไม่กดเจ็บ mucosa เลื่อนได้ → <b>Benign prostatic hyperplasia</b> · ถ้าแข็งขรุขระ มี nodule, sulcus หาย, ติดแน่น → <b>carcinoma of prostate</b> · บวมนุ่มกดเจ็บมาก + ไข้ → <b>acute prostatitis</b> (ห้ามนวด)",
   exp:"CA prostate ส่วนใหญ่เกิดที่ peripheral zone (คลำได้ทาง DRE) · BPH เกิดที่ transition zone",
   rubric:"ได้ = บรรยายครบ ≥5 ลักษณะ + Dx ที่เข้ากับสิ่งที่บรรยาย",
   pts:[G("ลักษณะที่บรรยาย (≥5)",5,P("Size","size","ขนาด","กรัม","\\bg\\b"),P("Surface","surface","ผิว","smooth","เรียบ","ขรุขระ"),P("Consistency","consisten","rubber","ยาง","แข็ง","hard","boggy"),P("Median sulcus","sulcus","ร่องกลาง"),P("Nodule","nodule","ก้อน"),P("Mobility of rectal mucosa","mobil","เลื่อน","fix"),P("Tenderness","tender","กดเจ็บ"),P("Symmetry of lobes","symmetr","สมมาตร","lobe")),CR(P("Dx เข้ากับสิ่งที่คลำ (BPH / CA prostate / prostatitis)","bph","benign prostatic","hyperplasia","carcinoma","cancer","prostatitis"))]})
 ),
 interp:"ตรวจ DRE บนหุ่นโดยไม่มีผู้คุม แล้วต้องเขียนบรรยายลักษณะต่อมให้ครบและวินิจฉัย",
 summary:["ท่า left lateral · inspection → tone → คลำรอบวง → prostate → ดูถุงมือ","บรรยาย: size, surface, consistency, sulcus, nodule, mobility, tenderness","BPH: โตเรียบ ยาง sulcus ตื้น · CA: แข็งขรุขระ nodule sulcus หาย · prostatitis: นุ่มบวมกดเจ็บ"]}),

/* ===== OSCE 5 ===== */
Co({page:2,orig:"5",topic:"img",sub:"Endoscopy",title:"Colonoscopy — indications, a diverticulosis image and its complications",
 stem:`This station is about colonoscopy.<br>1. Give the indications for colonoscopy.<br>2. A colonoscopic image is shown. What is the finding?<br>3. Give two complications of this condition.`,
 gray:"5 colonoscopy - indication - รูป diverticulosis - complication of diverticulosis 2 อัน",
 flag:NOIMG,imgAlt:"ภาพส่องกล้อง colonoscopy เห็นรูเปิดกลมหลายรูที่ผนังลำไส้ใหญ่ เยื่อบุรอบ ๆ ปกติ",
 notes:"ไฟล์จดหัวข้อ 3 ข้อย่อย ไม่มีรูปในไฟล์ ไม่มีเฉลย",
 opinion:"ไฟล์ไม่มีเฉลย — ตอบตามมาตรฐาน (ความมั่นใจสูง); ข้อย่อย complication ต้องตอบ 2 อย่าง: diverticulitis และ diverticular bleeding เป็นคำตอบหลัก",
 parts:S(
  B("5.1 Indications for colonoscopy.",3,{tags:["img"],
   ans:"<b>Diagnostic</b>: lower GI bleeding/hematochezia, iron deficiency anemia, positive FIT/FOBT, change in bowel habit/chronic diarrhea, ภาพรังสีผิดปกติ (ก้อน/ตีบ), สงสัย IBD (biopsy), ประเมินก่อน/หลังผ่าตัดมะเร็ง · <b>Screening/surveillance</b>: CRC screening อายุ ≥45 ปี (ทุก 10 ปี), ประวัติครอบครัว, หลังตัด polyp, หลังผ่าตัด CRC (1 ปี), IBD นาน ≥8 ปี · <b>Therapeutic</b>: polypectomy/EMR, หยุดเลือด, ขยายตีบ/ใส่ stent, detorsion sigmoid volvulus, decompression (Ogilvie), เอาสิ่งแปลกปลอม",
   exp:"ข้อห้าม: perforation, peritonitis, acute severe diverticulitis (รอ 6–8 สัปดาห์), fulminant colitis/toxic megacolon, hemodynamic unstable",
   rubric:"ได้ = ≥3 ข้อจาก diagnostic + screening + therapeutic",
   pts:[G("Indications (≥3)",3,P("LGIB / hematochezia","bleed","เลือด","hematochezia"),P("IDA / FIT positive","anemia","ซีด","fit","fobt","occult"),P("Change in bowel habit / chronic diarrhea","bowel habit","diarrh","ท้องเสีย","ท้องผูก"),P("CRC screening / surveillance","screen","คัดกรอง","surveillance","ติดตาม"),P("IBD evaluation","ibd","colitis","crohn"),P("Therapeutic: polypectomy, หยุดเลือด, stent, detorsion","polypectomy","therapeutic","stent","detorsion","หยุดเลือด"))]}),
  B("5.2 What is the finding?",2,{tags:["img"],
   ans:"<b>Colonic diverticulosis</b> — รูเปิดกลมหลายรู (diverticular orifices) ที่ผนัง colon (มักที่ sigmoid ในคนตะวันตก/ผู้สูงอายุ; ในเอเชีย right colon ได้บ่อย) เยื่อบุรอบปกติ ไม่มีการอักเสบ",
   exp:"Diverticulum ของ colon = false (pulsion) diverticulum — mucosa/submucosa ยื่นผ่านจุดอ่อนที่ vasa recta เข้าผนัง",
   rubric:"ได้ = diverticulosis",
   pts:[CR(P("Diverticulosis","diverticul"))]}),
  B("5.3 Two complications of diverticulosis.",3,{tags:["img"],
   ans:"<b>1. Diverticulitis</b> (uncomplicated, หรือ complicated: abscess, perforation/peritonitis, fistula — colovesical พบบ่อยสุด, stricture/obstruction) · <b>2. Diverticular bleeding</b> (painless massive LGIB จาก vasa recta แตก — มักที่ right colon) · ระบบ Hinchey: I pericolic abscess, II pelvic/distant abscess, III purulent peritonitis, IV fecal peritonitis",
   exp:"Uncomplicated diverticulitis: อาจไม่ต้องใช้ antibiotic ในผู้ที่ภูมิคุ้มกันปกติ (AGA 2021, ASCRS 2020) · abscess &gt;3–4 cm → percutaneous drainage · Hinchey III–IV → ผ่าตัด (Hartmann/primary anastomosis ± diversion)",
   rubric:"ได้ = 2 อย่างที่ถูก (diverticulitis + bleeding หรือ complication ของ diverticulitis)",
   pts:[G("Complications (2)",2,P("Diverticulitis","diverticulitis","อักเสบ"),P("Diverticular bleeding","bleed","เลือดออก","hemorrhage"),P("Abscess","abscess","ฝี"),P("Perforation / peritonitis","perforat","peritonitis","ทะลุ"),P("Fistula (colovesical)","fistula"),P("Stricture / obstruction","stricture","obstruct","ตีบ"))]})
 ),
 interp:"Colonoscopy: ข้อบ่งชี้, จำภาพ diverticulosis, รู้ complication หลัก",
 summary:["Colonoscopy: diagnostic, screening/surveillance, therapeutic","Diverticulosis = false diverticula, sigmoid (ตะวันตก) / right colon (เอเชีย)","Complication: diverticulitis (abscess, perforation, fistula, stricture) และ bleeding","ห้าม colonoscopy ใน acute diverticulitis — ทำหลัง 6–8 สัปดาห์"]}),

/* ===== OSCE 6 ===== */
Co({page:2,orig:"6",topic:"img",sub:"Chest X-ray",title:"Chest radiograph — pneumothorax: diagnosis, device and procedure",
 img:["os79c_6"],imgNote:"ภาพเอกซเรย์ทรวงอกท่า PA ของผู้ใหญ่ (ผู้จดบอกว่ารูปประมาณนี้ ไม่ใช่รูปจริง)",
 stem:`A thin, tall 27-year-old man has sudden dyspnea and chest pain. His chest radiograph is shown. Several devices labelled with letters are placed on the table.<br>1. What is the diagnosis?<br>2. Which device is used for treatment? Write its letter and its name.<br>3. What is the procedure called?`,
 gray:"6 คนไข้ชายผอมสูงอายุ 27 film pneumothorax (รูปประมาณนี้) 1)diag 2)รักษาด้วยอุปกรณ์อะไร (มีของวางไว้ ตอบตัวอักษรแล้วเขียนชื่อ) 3)หัตถการเรียกว่า",
 sp:"อุปกรณ์บนโต๊ะ (Claude แต่ง): A. chest tube (ICD) ต่อกับขวด underwater seal · B. NG tube · C. Foley catheter · D. JP drain · E. central venous catheter",
 flag:"รายการอุปกรณ์บนโต๊ะ Claude แต่ง (ไฟล์บอกแค่ว่ามีของวางไว้ ตอบตัวอักษร)",
 notes:"ผู้จดเขียน \"(รูปประมาณนี้)\" — รูปในไฟล์เป็นภาพใกล้เคียง ไม่มีเฉลย",
 opinion:"ไฟล์ไม่มีเฉลย — ชายผอมสูงอายุน้อย = primary spontaneous pneumothorax; คำตอบอุปกรณ์ที่ข้อสอบต้องการน่าจะเป็น chest tube/ICD + หัตถการ intercostal chest drainage (tube thoracostomy) ความมั่นใจปานกลาง-สูง · แนวทาง BTS 2023 ให้ทางเลือกน้อยกว่าในรายที่อาการน้อย (conservative/needle aspiration/ambulatory device) แต่ในบริบท OSCE ที่วางอุปกรณ์ให้เลือก ICD เป็นคำตอบ",
 parts:S(
  B("6.1 Diagnosis.",2,{tags:["img"],
   ans:"<b>Primary spontaneous pneumothorax</b> — บนฟิล์มหาเส้น <b>visceral pleural line</b> และบริเวณรอบนอกที่<b>ไม่มี lung markings</b> (hyperlucent) ± mediastinal shift ถ้า tension · ชายผอมสูง อายุ 20–30 ปี สูบบุหรี่ = จาก apical blebs/bullae",
   exp:"ขนาด BTS: ระยะจาก chest wall ถึง lung edge ระดับ hilum ≥2 cm = large · ACCP: apex-cupola ≥3 cm",
   rubric:"ได้ = pneumothorax (± บอกข้างและ primary spontaneous)",
   pts:[CR(P("Pneumothorax","pneumothorax","ลมรั่ว")),P("Primary spontaneous","primary","spontaneous","bleb","bulla")]}),
  B("6.2 Device (letter and name).",2,{tags:["img","inst"],
   ans:"<b>A — Intercostal chest drain (chest tube) ต่อกับ underwater-seal drainage system</b> · (ทางเลือกในรายอาการน้อยตาม BTS 2023: needle aspiration, small-bore Seldinger chest drain, ambulatory device หรือ conservative)",
   exp:"ขนาดท่อ: pneumothorax ทั่วไป small-bore (≤14 Fr) พอ · hemothorax/trauma ใช้ 28–32 Fr (ATLS ใหม่ 28–32 หรือเล็กกว่าได้)",
   rubric:"ได้ = ตัวอักษรที่ตรงกับ chest tube + ชื่อ",
   pts:[CR(P("Chest tube / intercostal drain + underwater seal","chest tube","intercostal","\\bicd\\b","underwater","chest drain"))]}),
  B("6.3 Name of the procedure.",2,{tags:["img","proc"],
   ans:"<b>Intercostal chest drainage (tube thoracostomy)</b> — ใส่ที่ <b>4th–5th ICS ระหว่าง anterior และ mid-axillary line</b> (triangle of safety: lateral border pectoralis major, anterior border latissimus dorsi, เส้นระดับ nipple/5th ICS) เหนือขอบบนของซี่โครงล่าง (หลีกเลี่ยง neurovascular bundle)",
   exp:"ป้องกันการเกิดซ้ำ (หลังเป็นครั้งที่ 2 หรือ persistent air leak &gt;3–5 วัน หรืออาชีพเสี่ยง เช่น นักบิน นักดำน้ำ) → VATS bullectomy + pleurodesis",
   rubric:"ได้ = tube thoracostomy / ICD insertion",
   pts:[CR(P("Tube thoracostomy / intercostal chest drainage","thoracostomy","intercostal","\\bicd\\b","chest drain","ใส่ท่อระบาย")),P("ตำแหน่ง 4th–5th ICS triangle of safety","triangle","4th","5th","ics","safety")]})
 ),
 interp:"ฟิล์ม pneumothorax ในชายผอมสูง → ICD (ตอบตัวอักษร + ชื่อ) → tube thoracostomy",
 summary:["Primary spontaneous PTX: ชายผอมสูง สูบบุหรี่ apical bleb","CXR: visceral pleural line + ไม่มี lung marking","BTS 2023: อาการน้อย → conservative/aspiration/ambulatory; มีอาการ/ใหญ่ → drain","ICD ที่ 4–5th ICS anterior–mid axillary (triangle of safety)","Recurrence/persistent leak → VATS bullectomy + pleurodesis"]}),

/* ===== OSCE 7 ===== */
Co({page:2,orig:"7",topic:"hx",sub:"Breast mass",ex:1,title:"History taking — a 20-year-old woman with a breast mass, and advice on next steps",
 stem:`A 20-year-old woman has noticed a lump in her breast. The examiner is observing.<br>1. Take a relevant history.<br>2. Advise her on what should be done next.`,
 gray:"7 ซักประวัติ breast mass 20 yr + แนะนำว่าให้ทำอะไรต่อ",
 sp:"(Claude แต่ง) หญิง 20 ปี นักศึกษา คลำพบก้อนเต้านมซ้าย 2 เดือนตอนอาบน้ำ ขนาดประมาณ 2 cm ขยับได้ ไม่เจ็บ ไม่เปลี่ยนตามรอบเดือน ไม่โตเร็ว ไม่มีน้ำไหลจากหัวนม ผิวหนังไม่เปลี่ยน ไม่คลำก้อนรักแร้ ไม่มีไข้ น้ำหนักไม่ลด · ประจำเดือนมาอายุ 12 ปี สม่ำเสมอ ไม่เคยตั้งครรภ์ ไม่ใช้ยาคุม · ไม่มีประวัติมะเร็งเต้านม/รังไข่ในครอบครัว ไม่เคยฉายรังสีหน้าอก · กังวลว่าเป็นมะเร็ง",
 flag:"บทผู้ป่วย Claude แต่ง (เลือกภาพ fibroadenoma)",
 notes:"ไฟล์: \"ซักประวัติ breast mass 20 yr + แนะนำว่าให้ทำอะไรต่อ\" ไม่มีเฉลย · ตรวจคีย์ 22 พ.ย. 2026: เดิม opinion ‘US ในหญิงอายุ &lt;30–40 ปี ตาม NCCN’ → แก้จุดตัดอายุเป็น 30 ปี ตาม NCCN Breast Cancer Screening and Diagnosis (palpable mass: อายุ &lt;30 ปี US; ≥30 ปี diagnostic mammogram + US) และ ACR Appropriateness Criteria Palpable Breast Masses 2022 (30–39 ปี US หรือ mammogram/DBT; ≥40 ปี mammogram/DBT + US)",
 opinion:"ไฟล์ไม่มีเฉลย — ประวัติแบบ fibroadenoma; คำแนะนำหลักคือ triple assessment โดยใช้ <b>ultrasound</b> (ไม่ใช่ mammogram) ในหญิงอายุ &lt;30 ปี ตาม NCCN (≥30 ปี diagnostic mammogram + US) ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): จุดตัดอายุสำหรับ imaging ก้อนเต้านม = 30 ปี (NCCN): &lt;30 → US · ≥30 → diagnostic mammogram + US · ความมั่นใจสูง",
 parts:S(
  B("7.1 Take a relevant history.",7,{tags:["hx"],
   ans:"<b>เปิด</b>: แนะนำตัว ยืนยันชื่อ ขออนุญาต ถาม CC · <b>ก้อน</b>: เวลาที่พบ/คลำได้อย่างไร, ตำแหน่ง, ขนาดและการเปลี่ยนแปลง (โตเร็ว?), เจ็บ, สัมพันธ์รอบเดือน, ก้อนเดียว/หลายก้อน/สองข้าง · <b>อาการร่วม</b>: nipple discharge (สี เลือด), nipple retraction, ผิวหนังเปลี่ยน (peau d'orange, แดง, แผล), ก้อนรักแร้, ไข้/บาดเจ็บ/ให้นมบุตร (abscess), อาการแพร่กระจาย (ปวดกระดูก น้ำหนักลด หอบ) · <b>Risk factors</b>: อายุ menarche, ประจำเดือน, ตั้งครรภ์/ให้นม, ยาคุม/ฮอร์โมน, ประวัติครอบครัว breast/ovarian cancer (BRCA), เคยฉายรังสีหน้าอก, เคยมีโรคเต้านม/ biopsy, แอลกอฮอล์ · <b>ปิด</b>: ถามความกังวล สรุป",
   exp:"Fibroadenoma: หญิงอายุ 15–35 ปี ก้อนเรียบ ขอบชัด ขยับได้มาก (breast mouse) ไม่เจ็บ · Fibrocystic change: เจ็บตามรอบเดือน หลายก้อนสองข้าง · Phyllodes: โตเร็ว ใหญ่",
   rubric:"ได้ = ลักษณะก้อนครบ + อาการร่วม (หัวนม ผิว รักแร้) + risk factors (ครอบครัว ฮอร์โมน รังสี) + ถามความกังวล",
   pts:[H("เปิด",10),P("แนะนำตัว ยืนยันชื่อ ถาม CC","แนะนำตัว","ชื่อ","ขออนุญาต"),
    H("ลักษณะก้อน",35),CR(P("Onset / ขนาด / การโต / เจ็บ","นานเท่าไร","เมื่อไร","ขนาด","โต","เจ็บ","pain","size","duration")),P("สัมพันธ์รอบเดือน","รอบเดือน","ประจำเดือน","menstru","cycle"),
    H("อาการร่วม",25),CR(P("Nipple discharge / retraction","หัวนม","nipple","discharge","น้ำไหล")),P("ผิวหนังเปลี่ยน","ผิวหนัง","skin","peau","บุ๋ม"),P("ก้อนรักแร้ / อาการแพร่กระจาย","รักแร้","axilla","น้ำหนักลด","weight","กระดูก"),
    H("Risk factors",25),CR(P("ประวัติครอบครัวมะเร็งเต้านม/รังไข่","ครอบครัว","family","brca","ญาติ")),P("Menarche / ตั้งครรภ์ / ยาคุม / ฮอร์โมน","menarche","ยาคุม","ฮอร์โมน","ตั้งครรภ์","hormone","pill"),P("ฉายรังสีหน้าอก","รังสี","radiation"),
    H("ปิด",5),P("ถามความกังวล สรุป","กังวล","concern","สรุป")]}),
  B("7.2 Advise her on what should be done next.",3,{tags:["hx"],
   ans:"อธิบายว่าก้อนในหญิงอายุน้อยส่วนใหญ่ไม่ใช่มะเร็ง (มักเป็น <b>fibroadenoma</b>) แต่ต้องตรวจให้แน่ใจด้วย <b>triple assessment</b>: (1) ตรวจร่างกายเต้านมและรักแร้ทั้งสองข้าง (2) <b>Breast ultrasound</b> (อายุ &lt;30 ปี — เนื้อเต้านมแน่น mammogram ไม่ไวและมีรังสี) (3) <b>Core needle biopsy</b> ถ้า US ไม่ใช่ simple cyst/BI-RADS 4–5 หรือก้อนน่าสงสัย · ถ้า fibroadenoma ยืนยันแล้ว &lt;2–3 cm → ติดตาม US 6 เดือน หรือผ่าตัดถ้าโตเร็ว/ใหญ่ &gt;3 cm/ผู้ป่วยต้องการ · เปิดโอกาสให้ถาม",
   exp:"NCCN Breast Screening and Diagnosis: อายุ &lt;30 ปี palpable mass → US first; ≥30 ปี → diagnostic mammogram + US",
   rubric:"ได้ = triple assessment + US (ไม่ใช่ mammogram) + biopsy ตามข้อบ่งชี้ + reassure และให้ถาม",
   pts:[CR(P("Breast ultrasound (ไม่ใช่ mammogram ในอายุนี้)","ultrasound","\\bus\\b","อัลตร้าซาวด์","usg")),P("Triple assessment / CNB ถ้าน่าสงสัย","triple","biopsy","core needle","cnb","ชิ้นเนื้อ"),P("อธิบายว่าน่าจะเป็น fibroadenoma ส่วนใหญ่ไม่ใช่มะเร็ง + ให้ถาม","fibroadenoma","ไม่ใช่มะเร็ง","benign","คำถาม","สงสัย")]})
 ),
 interp:"ซักประวัติก้อนเต้านมในหญิงอายุน้อยให้ครบและแนะนำ triple assessment โดยใช้ US",
 summary:["ประวัติ: ลักษณะก้อน + หัวนม/ผิว/รักแร้ + risk factors + ความกังวล","อายุ &lt;30 → US · ≥30 → mammogram + US","Triple assessment: clinical + imaging + CNB","Fibroadenoma: ติดตามหรือผ่าตัดเมื่อโต/ใหญ่/ต้องการ"]}),

/* ===== OSCE 8 ===== */
Co({page:3,orig:"8",topic:"inst",sub:"Tube/Catheter",title:"Device — three-way Foley catheter: name, use and indications",
 stem:`A catheter with three ports is shown.<br>1. What is it called? (20 points)<br>2. How is it used? (40 points)<br>3. Give its indications. (40 points)`,
 gray:"8 วาง three way foley 1) name (20 คะแนน) 2) วิธีใช้ (40 คะแนน) 3) indication (40 คะแนน)",
 flag:NOIMG,imgAlt:"สายสวนปัสสาวะยางสีเหลืองมีปลายแยก 3 ทาง",
 notes:"ไฟล์ให้สัดส่วนคะแนน 20/40/40 · ไม่มีรูปในไฟล์ (ของจริงวางบนโต๊ะ) ไม่มีเฉลย",
 opinion:"ไฟล์ไม่มีเฉลย — ตอบตามมาตรฐาน ความมั่นใจสูง; indication หลัก = continuous bladder irrigation ใน clot retention/hematuria และหลัง TURP",
 parts:S(
  B("8.1 Name.",2,{tags:["inst"],
   ans:"<b>Three-way Foley catheter</b> (three-way irrigation catheter) — มักขนาด 20–24 Fr",
   rubric:"ได้ = three-way Foley",
   pts:[CR(P("Three-way Foley catheter","three.?way","3.?way","สามทาง"))]}),
  B("8.2 How is it used?",4,{tags:["inst"],
   ans:"3 ช่อง: (1) <b>balloon port</b> — ใส่ sterile water ตามปริมาตรที่ระบุ (30–50 mL สำหรับ hemostasis/ดึงถ่วงหลัง TURP) (2) <b>drainage port</b> — ต่อถุงรองรับปัสสาวะ (3) <b>irrigation (inflow) port</b> — ต่อ NSS เข้ากระเพาะปัสสาวะอย่างต่อเนื่อง (continuous bladder irrigation, CBI) · ใส่แบบ aseptic: ทำความสะอาด หล่อลื่น (lidocaine gel) สอดจนสุดถึงโคน แล้วรอให้ปัสสาวะไหลก่อนเติม balloon · ปรับอัตรา irrigation ให้น้ำที่ออกมีสีชมพูอ่อน (rosé) · บันทึก input–output (urine = output − irrigation) · ระวัง drainage อุดตัน → กระเพาะโป่ง/แตก",
   exp:"Two-way Foley: balloon + drainage เท่านั้น · three-way ใหญ่กว่า ลำ drainage กว้างระบาย clot ได้ดี",
   rubric:"ได้ = อธิบาย 3 port ถูก + CBI + บันทึก I/O",
   pts:[CR(P("3 ports: balloon, drainage, irrigation","balloon","drainage","irrigation","inflow","3 ช่อง","สามช่อง")),P("Continuous bladder irrigation ด้วย NSS","continuous","\\bcbi\\b","nss","saline","ล้าง"),P("ปรับอัตรา + บันทึก I/O (urine = out − in)","i/o","input","output","บันทึก","rosé","สีชมพู")]}),
  B("8.3 Indications.",4,{tags:["inst"],
   ans:"<b>Continuous bladder irrigation</b> เพื่อป้องกัน/รักษา <b>clot retention</b>: หลัง <b>TURP</b>/TURBT/prostatectomy, gross hematuria จาก bladder tumor, <b>hemorrhagic cystitis</b> (cyclophosphamide, radiation), เลือดออกหลัง biopsy · ใช้ balloon ขนาดใหญ่ดึงถ่วงกด prostatic fossa ช่วยหยุดเลือดหลัง TURP · intravesical instillation (ยา) ได้โดยไม่ต้องถอดสาย",
   rubric:"ได้ = ≥2 indications ที่ถูก",
   pts:[G("Indications (≥2)",2,P("หลัง TURP / prostatectomy","turp","prostatectomy","turbt"),P("Clot retention / gross hematuria","clot","hematuria","เลือด"),P("Hemorrhagic cystitis","hemorrhagic cystitis","cyclophosphamide","radiation cystitis"),P("Intravesical instillation","instill","ใส่ยา"))]})
 ),
 interp:"รู้จัก three-way Foley: 3 ช่อง, CBI, ใช้หลัง TURP/clot retention",
 summary:["3 ports: balloon, drainage, irrigation","CBI ด้วย NSS ให้สีชมพูอ่อน · urine = output − irrigation","Indications: หลัง TURP, clot retention, hemorrhagic cystitis, gross hematuria"]}),

/* ===== OSCE 9 ===== */
Co({page:3,orig:"9",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a painful perianal lump at the 6 o'clock position",
 stem:`A patient has a painful perianal lump. A photograph shows a bluish, tense swelling at the anal verge at the 6 o'clock position.<br>1. What is the diagnosis?<br>2. How would you manage it?`,
 gray:"9 รูป thromboses external hemorrhoid? 6 oclock 1)dx 2)management",
 flag:NOIMG,imgAlt:"ภาพรอบทวาร มีก้อนสีม่วงคล้ำตึงที่ขอบทวารตำแหน่ง 6 นาฬิกา",
 notes:"ผู้จดเขียน \"thromboses external hemorrhoid?\" (ไม่แน่ใจ) ไม่มีรูปและเฉลย · ไม่ได้บอกระยะเวลาที่ปวด — การจัดการขึ้นกับว่าภายใน 72 ชม. หรือไม่",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไฟล์ไม่มีเฉลย (ผู้จดเขียน thrombosed external hemorrhoid?) · เห็นด้วย: ก้อนเจ็บที่ขอบทวาร = <b>thrombosed external hemorrhoid</b> · รักษาแบ่งตามเวลา: ปวดมากภายใน ~72 ชม. → <b>excision</b> ใต้ยาชาเฉพาะที่ (ดีกว่า incision อย่างเดียว) · หลัง 72 ชม. → conservative (sitz bath, fiber, analgesic, topical nifedipine + lidocaine) · คงคำตอบเดิม · แหล่งตัดสิน: ASCRS Clinical Practice Guidelines for the Management of Hemorrhoids 2024 (เลือก early surgical excision ในบางราย) · ความมั่นใจ: ปานกลาง-สูง",
 parts:S(
  B("9.1 Diagnosis.",3,{tags:["img"],
   ans:"<b>Thrombosed external hemorrhoid</b> — ก้อนสีม่วงคล้ำตึง เจ็บมาก ที่ขอบทวาร (ใต้ dentate line คลุมด้วย anoderm ที่มีเส้นประสาทรับความเจ็บ) · DDx: perianal abscess (แดงร้อน fluctuant ไข้), prolapsed thrombosed internal hemorrhoid, sentinel pile ของ fissure",
   rubric:"ได้ = thrombosed external hemorrhoid",
   pts:[CR(P("Thrombosed external hemorrhoid","thrombos","external hemorrhoid","perianal hematoma","ริดสีดวงภายนอก"))]}),
  B("9.2 Management.",5,{tags:["img"],
   ans:"<b>ภายใน 72 ชม.</b> ที่ปวดมาก → <b>excision of the thrombosed hemorrhoid</b> (elliptical excision ใต้ยาชาเฉพาะที่ — ปวดลดเร็ว recurrence น้อยกว่า incision อย่างเดียว) · <b>หลัง 72 ชม.</b> (ปวดเริ่มลด ก้อนเริ่มยุบ) → <b>conservative</b>: sitz bath, fiber, stool softener, analgesics (NSAID/paracetamol), topical nifedipine + lidocaine · แนะนำ: หลีกเลี่ยงการเบ่ง/นั่งนาน · ตรวจหาโรคร่วม (colonoscopy ตามอายุ/อาการ)",
   exp:"ASCRS 2018: early excision (within 72 h) ดีกว่า simple incision and evacuation (recurrence สูงกว่า)",
   rubric:"ได้ = แยกตามเวลา ≤72 ชม. excision / &gt;72 ชม. conservative",
   pts:[CR(P("≤72 ชม.: excision","72","excision","ตัด","excise")),CR(P(">72 ชม.: conservative (sitz bath, fiber, analgesic)","conservative","sitz","fiber","ไฟเบอร์","แช่","analges","softener"))]})
 ),
 interp:"Thrombosed external hemorrhoid — การรักษาขึ้นกับระยะเวลา (72 ชม.)",
 summary:["External hemorrhoid ใต้ dentate line → เจ็บมากเมื่อ thrombosed","≤72 ชม.: excision ใต้ยาชา","&gt;72 ชม.: conservative","แยก perianal abscess (แดงร้อน ไข้ → I&D)"]}),

/* ===== OSCE 10 ===== */
Co({page:3,orig:"10",topic:"inst",sub:"Surgical instrument",title:"Instruments and sutures in laparoscopic cholecystectomy converted to open",
 stem:`A description of an open/laparoscopic cholecystectomy is given. Instruments labelled with letters are placed beside the station. For each step, write the letter and name of the instrument used.<br>1. The retractor used to retract the abdominal wall.<br>2. The curved scissors used for fine dissection.<br>3. The retractor used to retract the liver.<br>4. The curved clamp applied to the cystic duct.<br>5. The drain placed at the end of the operation.<br>6. The suture (letter) used to ligate the bile duct: give its brand name, generic name, multifilament or monofilament, and absorbable or non-absorbable.<br>7. The suture (letter) used to close the wound: give the same properties.`,
 gray:"10 บรรยายผ่า LC ถามชื่ออุปกรณ์ (ในโจทย์จะเขียนบอกไว้ว่าใช้อุปกรณ์ตัวอักษรอะไร อุปกรวางอยู่ข้าง ๆ) 1)richardson retractor 2) curve mezenbaum scissor 3)deaver retractor 4)clamp โค้ง ๆ หนีบ cystic duct 5)ถามชื่อ drain (jp drain) 3) ใช้ด้าย _ ผูกท่อน้ำดี ถามคุณสมบัติด้ายด้วย (letter , ชื่อการค้า , generic name , multi/mono , absorb/non absorb) มีเทปดำปิดชื่อเหมือนใน AC เลย 4)ใช้ด้าย _ เย็บปิดแผล ถามคุณสมบัติด้ายด้วย",
 sp:"(Claude แต่งชนิดไหมที่วาง) ไหมผูกท่อน้ำดี/cystic duct ที่วางไว้: Vicryl 2-0 หรือ silk 2-0 · ไหมเย็บปิดแผล (fascia): PDS 1 หรือ nylon (skin) · ชื่อการค้าบนซองถูกปิดด้วยเทปดำ ต้องดูสี/ลักษณะไหมเอง",
 flag:NOIMG+" · ไฟล์ให้ชื่ออุปกรณ์ 1–5 มาเป็นหัวข้อ (ซึ่งเป็นคำตอบ) — ในโจทย์เขียนเป็นคำบรรยายหน้าที่แทน · ชนิดไหมที่วาง Claude แต่ง",imgAlt:"อุปกรณ์ผ่าตัดวางเรียงพร้อมป้ายตัวอักษร: retractor ขอบใหญ่, กรรไกรปลายโค้งยาว, retractor โค้งรูปตัว C, clamp ปลายโค้ง, ท่อระบายต่อกระเปาะ, ซองไหมที่ปิดชื่อด้วยเทปดำ",
 notes:"ไฟล์จดเลขข้อย่อยซ้ำ (1–5 แล้ว 3), 4) ใหม่สำหรับไหม) → เรียงใหม่เป็นข้อย่อย 1–7 · ผู้จดบอกว่า \"มีเทปดำปิดชื่อเหมือนใน AC เลย\"",
 opinion:"ชื่ออุปกรณ์ 1–5 ตรงตามที่ผู้จดบันทึก (ถือเป็นคำตอบ) ความมั่นใจสูง; ไหม 2 ข้อไฟล์ไม่บอกว่าวางไหมอะไร — เฉลยเขียนตามไหมที่นิยมใช้ (cystic duct: absorbable เช่น Vicryl หรือ silk/clip; ปิด fascia: PDS/nylon loop) ให้ตอบตามสี/ลักษณะของซองที่เห็นจริงในห้องสอบ",
 parts:S(
  B("10.1 Instruments 1–5 (letter and name).",5,{tags:["inst"],key:"ไฟล์ระบุ: 1 Richardson retractor · 2 curved Metzenbaum scissors · 3 Deaver retractor · 4 clamp โค้งหนีบ cystic duct · 5 JP drain",
   ans:"1. <b>Richardson retractor</b> (ดึงผนังหน้าท้อง) · 2. <b>Curved Metzenbaum scissors</b> (ตัด/เลาะเนื้อเยื่อบาง ไม่ใช้ตัดไหม — ตัดไหมใช้ Mayo) · 3. <b>Deaver retractor</b> (รูปตัว C โค้ง ดึงตับ/อวัยวะในช่องท้อง) · 4. <b>Right-angle clamp (Mixter)</b> หรือ curved hemostat (Kelly/Péan) ใช้หนีบ/ลอดใต้ cystic duct เพื่อผูก · 5. <b>Jackson-Pratt (JP) drain</b> — closed suction drain มีกระเปาะ (bulb) ใช้ดูด",
   exp:"Drain ชนิด closed suction: JP, Redivac · open passive: Penrose, corrugated",
   rubric:"ได้ 1 คะแนนต่อชื่อที่ถูก",
   pts:[P("Richardson retractor","richardson"),P("Curved Metzenbaum scissors","metzenbaum","metz"),P("Deaver retractor","deaver"),P("Right-angle / Mixter / curved clamp","right.?angle","mixter","kelly","pean","clamp"),P("Jackson-Pratt drain","jackson","\\bjp\\b","pratt")]}),
  B("10.2 Suture to ligate the duct — letter, brand, generic name, filament, absorbability.",3,{tags:["suture"],
   ans:"ตัวอย่าง (ตามซองที่วาง): <b>Vicryl</b> = polyglactin 910, <b>braided (multifilament)</b>, <b>absorbable</b> (ใน ~60–90 วัน คงแรง ~3 สัปดาห์) สีม่วง · หรือ <b>silk</b> (Mersilk) = braided, non-absorbable สีดำ · (ใน LC ปัจจุบันมักใช้ clip ที่ cystic duct; ผูก cystic duct/CBD ใช้ absorbable เพื่อไม่ให้เป็น nidus ของนิ่ว)",
   exp:"ไม่ใช้ non-absorbable ในท่อน้ำดี/ทางเดินปัสสาวะ — เป็น nidus นิ่ว",
   rubric:"ได้ = บอกครบ 4 คุณสมบัติตรงกับไหมที่เลือก",
   pts:[P("ชื่อการค้า (Vicryl / Mersilk)","vicryl","mersilk","silk"),P("Generic (polyglactin 910 / silk)","polyglactin","silk"),P("Multifilament / braided","multi","braid","ถัก"),P("Absorbable","absorb","ละลาย")]}),
  B("10.3 Suture to close the wound — same properties.",2,{tags:["suture"],
   ans:"ตัวอย่าง: ปิด fascia ด้วย <b>PDS</b> = polydioxanone, <b>monofilament</b>, <b>absorbable</b> (ช้า ~180–210 วัน) · หรือ <b>nylon (Ethilon)</b> = polyamide, monofilament, non-absorbable สำหรับเย็บผิวหนัง · หรือ <b>Prolene</b> = polypropylene, monofilament, non-absorbable",
   exp:"ปิด midline fascia แนะนำ small bites (5 mm × 5 mm) ด้วย slowly absorbable monofilament (STITCH trial) — suture length : wound length ≥4:1",
   rubric:"ได้ = คุณสมบัติถูกตามไหมที่เลือก",
   pts:[P("ชื่อการค้า/generic","pds","polydioxanone","nylon","ethilon","prolene","polypropylene"),P("Monofilament","mono"),P("Absorbable / non-absorbable ถูกตามชนิด","absorb","ละลาย")]})
 ),
 interp:"จำชื่ออุปกรณ์ผ่าตัดถุงน้ำดี + คุณสมบัติไหม 4 ข้อ (ชื่อการค้า generic filament absorbability) โดยดูจากซองที่ปิดชื่อ",
 summary:["Richardson (ผนังท้อง), Deaver (ตับ, รูปตัว C), Metzenbaum (เลาะเนื้อเยื่อ), right-angle (ลอด cystic duct), JP (closed suction)","Vicryl = polyglactin 910 braided absorbable (ม่วง)","PDS = polydioxanone monofilament absorbable ช้า","Nylon/Prolene = monofilament non-absorbable · Silk = braided non-absorbable"]}),

/* ===== OSCE 11 ===== */
Co({page:3,orig:"11",topic:"inst",sub:"Tube/Catheter",title:"Device — a tube seen on a film: name, collecting device, procedure and output measurement",
 stem:`A clinical scenario is given with a radiograph showing a tube. Devices labelled with letters are placed beside the table; answer with the letter and the name.<br>1. What is the tube seen on the film?<br>2. Which device collects the drainage from this procedure?<br>3. What is the procedure called?<br>4. What is used to measure the volume of the drainage?`,
 gray:"11 เล่าบลา ๆ ให้รูป film มี ng tube (มีอุปกรณ์วางไว้ข้างโต๊ะ มีอักษร แปะอยู่ ตอบเป็นตัวอักษรและชื่อ) 1)ถามชื่อสาย มีรูป film (ng tube) 2)ใช้อุปกรณ์อะไร รับของเสียจากหัตถการในภาพ 3)หัตการชื่อว่าอะไร 4)ใช้อะไรวัดปริมาณ ปสว",
 sp:"(Claude แต่ง) อุปกรณ์ข้างโต๊ะ: A. NG tube (Levin) · B. ถุงรองรับ (drainage bag) · C. กระบอกตวง (measuring cylinder/jug) · D. Foley catheter · E. ICD · F. urine bag with urometer",
 flag:NOIMG+" · รายการอุปกรณ์ Claude แต่ง · ข้อ 4 ผู้จดเขียน \"วัดปริมาณ ปสว\" (ปัสสาวะ?) ไม่ชัดว่าเป็นปริมาณสิ่งที่ออกทาง NG หรือปัสสาวะ — เฉลยครอบคลุมทั้งสอง",imgAlt:"ภาพเอกซเรย์ทรวงอกและช่องท้องส่วนบน เห็นสายทึบรังสีผ่านหลอดอาหารลงไปปลายอยู่ในกระเพาะอาหาร",
 notes:"ผู้จดจำโจทย์ได้ไม่ครบ (\"เล่าบลา ๆ\") · ไม่มีรูปในไฟล์ ไม่มีเฉลย",
 opinion:"ไฟล์ไม่มีเฉลย — ตอบตามบริบท NG decompression ความมั่นใจปานกลาง; ข้อ 4 อาจหมายถึงการวัดปัสสาวะ (urometer) หรือวัด NG content (กระบอกตวง) ให้ดูอุปกรณ์ที่วางจริง",
 parts:S(
  B("11.1 Name of the tube.",2,{tags:["inst","img"],
   ans:"<b>Nasogastric (NG) tube</b> (Levin tube — single lumen; หรือ Salem sump — double lumen) · บนฟิล์มยืนยันตำแหน่ง: สายลงตามแนว midline ผ่าน carina, ข้ามกระบังลม, ปลายอยู่ในกระเพาะใต้กระบังลมซ้าย ≥10 cm",
   rubric:"ได้ = NG tube",
   pts:[CR(P("NG tube","\\bng\\b","nasogastric","levin","salem","สายยางให้อาหาร"))]}),
  B("11.2 Device that collects the drainage.",2,{tags:["inst"],
   ans:"<b>Drainage bag</b> (ถุงรองรับ ต่อปลาย NG แบบ gravity drainage) หรือ <b>suction (low intermittent suction)</b> สำหรับ Salem sump",
   rubric:"ได้ = ถุงรองรับ/ระบบดูด",
   pts:[CR(P("Drainage bag / suction","bag","ถุง","suction","ดูด","drainage"))]}),
  B("11.3 Name of the procedure.",2,{tags:["inst","proc"],
   ans:"<b>Nasogastric intubation (NG insertion) for gastric decompression</b> — ใช้ใน bowel obstruction, ileus, upper GI bleeding (lavage), ป้องกัน aspiration, หลังผ่าตัด",
   rubric:"ได้ = NG intubation/gastric decompression",
   pts:[CR(P("NG intubation / gastric decompression","intubation","decompress","ใส่ ng","insertion","ระบาย"))]}),
  B("11.4 What is used to measure the volume?",2,{tags:["inst"],
   ans:"ปริมาณ NG drainage: เทใส่ <b>กระบอกตวง (measuring cylinder/jug)</b> หรือดูขีดบนถุงรองรับ · ปริมาณปัสสาวะ: <b>Foley catheter ต่อ urine bag ที่มี urometer</b> (วัดรายชั่วโมง) · บันทึกใน I/O chart เพื่อชดเชยน้ำ/electrolyte (NG content ทดแทนด้วย NSS + KCl)",
   rubric:"ได้ = อุปกรณ์วัดที่ถูกตามสิ่งที่ถาม",
   pts:[CR(P("กระบอกตวง / urometer / ขีดบนถุง","cylinder","jug","ตวง","urometer","ขีด","measur"))]})
 ),
 interp:"NG tube บนฟิล์ม → ถุงรองรับ → NG decompression → วัดปริมาณ",
 summary:["NG ยืนยันตำแหน่งด้วย CXR (ปลายใต้กระบังลมซ้าย) หรือ aspirate pH ≤5.5","Gravity drainage bag / low intermittent suction","ห้ามใส่ทางจมูกใน basal skull/midface fracture → OG","ทดแทน NG loss ด้วย NSS + KCl · บันทึก I/O"]}),

/* ===== OSCE 12 ===== */
Co({page:4,orig:"12",topic:"inst",sub:"Ostomy appliance",title:"Hartmann's procedure — fill in the operation and the devices used",
 img:["os79c_12"],imgNote:"แผนภาพลำไส้ใหญ่: colon ซ้ายต่อออกเป็นรูเปิดที่ผนังหน้าท้องด้านซ้าย และตอ rectum ด้านล่างถูกเย็บปิด",
 stem:`A diagram is shown. Real devices labelled with letters (an NG tube, an intercostal drain and an ostomy bag) are placed on the table. Fill in the blanks.<br>1. A ______ (name of the operation/approach) is performed to do a Hartmann's procedure.<br>2. ______ (letter) is used to decompress the stomach.<br>3. ______ (letter) is used to collect stool from the colostomy.`,
 gray:"12 OSCE ให้ฟิล์มอะไรสักอย่าง ผ่า….. (เติมชื่อหัตถการ) เพื่อทำ Hartmann procedure ใช้……. เพื่อ decompress กระเพาะ ใช้…….. เพื่อเก็บขี้จาก colostomy (มี NG ICD Ostomy bag ของจริงวางไว้ เอาตัวอักษรมาเติม)",
 notes:"ผู้จดเขียน \"ให้ฟิล์มอะไรสักอย่าง\" · รูปในไฟล์เป็นแผนภาพ Hartmann's procedure · ไม่มีเฉลย",
 opinion:"ไฟล์ไม่มีเฉลย — ช่อง 1 น่าจะเป็น exploratory laparotomy (ผ่าเปิดหน้าท้อง) ความมั่นใจปานกลาง; ช่อง 2–3 ตรงตัวจากอุปกรณ์ที่วาง (NG, ostomy bag) ความมั่นใจสูง · ICD เป็นตัวลวง",
 parts:S(
  B("12.1 Fill in the blanks.",6,{tags:["inst"],
   ans:"1. <b>Exploratory laparotomy</b> (midline laparotomy) เพื่อทำ <b>Hartmann's procedure</b> = resection ของ sigmoid/rectosigmoid + <b>end colostomy</b> + ปิดตอ rectum (rectal stump) — ใช้ใน perforated diverticulitis (Hinchey III–IV), obstructing/perforated sigmoid cancer, sigmoid volvulus with gangrene, ผู้ป่วย unstable ที่ไม่ควรต่อลำไส้ · 2. <b>NG tube</b> (ใส่ตัวอักษรของ NG) — decompress กระเพาะ · 3. <b>Ostomy (colostomy) bag</b> — เก็บอุจจาระจาก colostomy · (ICD ไม่เกี่ยว — ใช้ระบาย pleural space)",
   exp:"Reversal ของ Hartmann (ต่อ colon กับ rectum) ทำหลัง 3–6 เดือน · ทางเลือกปัจจุบันใน Hinchey III ที่ stable: primary anastomosis ± diverting ileostomy หรือ laparoscopic lavage (บางราย)",
   rubric:"ได้ = laparotomy + NG + ostomy bag ถูกตัวอักษร",
   pts:[CR(P("Exploratory laparotomy","laparotomy","เปิดหน้าท้อง","explor")),CR(P("NG tube → decompress stomach","\\bng\\b","nasogastric")),CR(P("Ostomy/colostomy bag → stool","ostomy","colostomy bag","ถุง"))]})
 ),
 interp:"Hartmann's procedure: laparotomy, end colostomy + rectal stump · อุปกรณ์หลังผ่าตัด NG และ ostomy bag",
 summary:["Hartmann = sigmoid resection + end colostomy + rectal stump","ข้อบ่งชี้: perforated diverticulitis Hinchey III–IV, obstructing/perforated sigmoid CA, gangrenous volvulus","NG = decompress stomach · ostomy bag = เก็บอุจจาระ · ICD = pleural drainage","Reversal 3–6 เดือน"]}),

/* ===== OSCE 16 ===== */
Co({page:4,orig:"16",topic:"img",sub:"Contrast GI study",title:"Barium swallow — description, name of the study, diagnosis and further investigations",
 stem:`A barium swallow film is shown.<br>1. Describe the film.<br>2. What is this investigation called?<br>3. What is the diagnosis?<br>4. Give two further investigations.`,
 gray:"16 film barium swallow 1)บรรยาย 2)ชื่อ investigation 3)diag 4)ตรวจเพิ่มเติม 2 อย่าง",
 flag:NOIMG+" · ไฟล์ไม่ได้บอกว่าฟิล์มเป็นโรคอะไร — เฉลยเขียนแบบ achalasia (bird's beak) ซึ่งพบบ่อยที่สุดใน OSCE barium swallow พร้อมเทียบกับ esophageal cancer (apple core/shouldering)",imgAlt:"ภาพ barium swallow ท่ายืน เห็นหลอดอาหารโป่งขยาย ส่วนปลายเรียวแหลมเป็นรูปจะงอยปากนก",
 notes:"ไฟล์ไม่มีเลขข้อสถานีเดิมที่ 13–15 (ข้ามจาก 12 ไป 16) · ไม่มีรูป ไม่มีเฉลย (คอลัมน์เฉลยมีแค่ \"1.\" / \"2.\" ว่าง)",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไฟล์ไม่มีเฉลยและไม่บอกโรค · เฉลยใช้ <b>achalasia</b> (bird beak) ซึ่งพบบ่อยที่สุดใน barium swallow ของ OSCE พร้อมวิธีแยกจาก carcinoma (irregular/shouldering/apple core) · ตรวจเพิ่ม 2 อย่าง: <b>high-resolution manometry</b> (gold standard, Chicago v4.0) + <b>EGD</b> ตัด pseudoachalasia — ถูกต้องตามแนวทาง · คงคำตอบเดิม · แหล่งตัดสิน: ACG Clinical Guideline: Achalasia 2020 + Chicago Classification v4.0 (2021) · ความมั่นใจ: สูง (เนื้อหา) / ต่ำ (โรคในภาพจริง)",
 parts:S(
  B("16.1 Describe the film.",3,{tags:["img"],
   ans:"Barium swallow ท่า erect AP/oblique: <b>หลอดอาหารโป่งขยาย (megaesophagus)</b> มี air-fluid level/อาหารค้าง ส่วนปลายที่ GE junction <b>เรียวแหลมเรียบสมมาตร (bird's beak)</b> barium ผ่านลงกระเพาะได้น้อย/ช้า ไม่เห็น gastric air bubble · (ถ้าเป็นมะเร็ง: irregular stricture, shouldering, apple-core, mucosal destruction, ส่วนต้นโป่งเล็กน้อย)",
   rubric:"ได้ = บรรยาย dilatation + ลักษณะ distal narrowing (เรียบ/ไม่เรียบ)",
   pts:[CR(P("Dilated esophagus","dilat","โป่ง","megaesophag")),CR(P("Distal tapering bird's beak (เรียบ) หรือ irregular stricture","bird","beak","taper","เรียว","stricture","shoulder","apple"))]}),
  B("16.2 Name of the investigation.",1,{tags:["img"],
   ans:"<b>Barium swallow (esophagogram)</b> — ถ้าสงสัย perforation ใช้ water-soluble contrast (Gastrografin) ก่อน",
   pts:[CR(P("Barium swallow / esophagogram","barium swallow","esophagogram","oesophagogram"))]}),
  B("16.3 Diagnosis.",2,{tags:["img"],
   ans:"<b>Achalasia</b> (ตามภาพ bird's beak) · DDx: pseudoachalasia จาก CA cardia (ผู้สูงอายุ น้ำหนักลดเร็ว อาการสั้น), Chagas disease, esophageal carcinoma (irregular stricture)",
   rubric:"ได้ = Dx ตรงกับภาพ",
   pts:[CR(P("Achalasia (หรือ Dx ตรงภาพ)","achalasia","carcinoma","cancer","มะเร็ง"))]}),
  B("16.4 Two further investigations.",2,{tags:["img"],
   ans:"1. <b>High-resolution esophageal manometry</b> (gold standard: incomplete LES relaxation — IRP สูง + aperistalsis; Chicago v4.0 แบ่ง type I–III) · 2. <b>Upper GI endoscopy (EGD)</b> ± biopsy เพื่อตัด pseudoachalasia/มะเร็ง · (อื่น ๆ: timed barium esophagram ประเมินผลรักษา, CT/EUS ถ้าสงสัยก้อน)",
   exp:"รักษา achalasia: pneumatic dilatation, laparoscopic Heller myotomy + partial fundoplication (Dor/Toupet), POEM · botulinum toxin ในผู้ป่วยเสี่ยงผ่าตัดสูง",
   rubric:"ได้ = manometry + EGD",
   pts:[CR(P("Esophageal manometry","manometr")),CR(P("EGD / endoscopy ± biopsy","egd","endoscop","esophagoscop","ส่องกล้อง","biopsy"))]})
 ),
 interp:"อ่าน barium swallow: dilated esophagus + bird's beak = achalasia → manometry + EGD",
 summary:["Achalasia: dysphagia ทั้งของแข็งและเหลว, regurgitation, น้ำหนักลด","Barium: dilated + bird's beak · Manometry: LES ไม่คลาย + aperistalsis (gold standard)","EGD ตัด pseudoachalasia (CA cardia)","รักษา: pneumatic dilatation, Heller myotomy + fundoplication, POEM","มะเร็ง: apple-core/shouldering irregular stricture"]}),

/* ===== OSCE 17 ===== */
Co({page:4,orig:"17",topic:"inst",sub:"Tube/Catheter",title:"Device — PICC line: name, tip position on the film and benefits",
 stem:`A photograph of a catheter is shown, together with a chest radiograph after its insertion.<br>1. What is this catheter called?<br>2. Where is the catheter tip on the film?<br>3. Give two benefits of this catheter.`,
 gray:"17 รูป picc line 1)ชื่อ 2)ให้รูป film ถามว่า ปลายสายอยู่ตำแหน่งอะไร 3)ประโยชน์ 2 ข้อ",
 flag:NOIMG,imgAlt:"สายสวนหลอดเลือดดำยาวเส้นเล็กสีม่วง และภาพเอกซเรย์ทรวงอกที่สายเข้าทางแขนปลายอยู่บริเวณรอยต่อ SVC กับ right atrium",
 notes:"ไฟล์ไม่มีรูปและเฉลย",
 opinion:"ไฟล์ไม่มีเฉลย — ตอบตามมาตรฐาน ความมั่นใจสูง (ตำแหน่งปลายที่ถูกต้อง = lower SVC/cavoatrial junction)",
 parts:S(
  B("17.1 Name.",1,{tags:["inst"],
   ans:"<b>Peripherally inserted central catheter (PICC)</b> — ใส่ทาง basilic (ดีที่สุด)/brachial/cephalic vein ที่แขนเหนือข้อศอก ภายใต้ ultrasound",
   pts:[CR(P("PICC","picc","peripherally inserted"))]}),
  B("17.2 Tip position.",2,{tags:["inst","img"],
   ans:"ปลายสายควรอยู่ที่ <b>lower third of SVC / cavoatrial junction</b> (บนฟิล์ม ≈ ระดับ carina ลงไป 1–2 vertebral bodies, ใกล้ขอบขวาของหัวใจส่วนบน) · ตื้นเกิน (subclavian/brachiocephalic) → thrombosis · ลึกเกินเข้า RA → arrhythmia/perforation",
   rubric:"ได้ = SVC/cavoatrial junction (หรือบอกตำแหน่งตามภาพถูก)",
   pts:[CR(P("Lower SVC / cavoatrial junction","svc","superior vena cava","cavoatrial","cavo-atrial","atrial junction"))]}),
  B("17.3 Two benefits.",2,{tags:["inst"],
   ans:"1. ให้ยา/สารที่ระคายหลอดเลือดส่วนปลายได้: <b>chemotherapy, TPN (parenteral nutrition), vasopressor, KCl เข้มข้น</b> · 2. <b>ใช้ระยะยาว</b> (สัปดาห์–หลายเดือน เช่น IV antibiotics ยาว) ผู้ป่วยกลับบ้านได้ · 3. ใส่ได้ที่แขน ไม่เสี่ยง pneumothorax/hemothorax แบบ subclavian/IJ · 4. เจาะเลือดได้ ลดการเจาะซ้ำ",
   exp:"ภาวะแทรกซ้อน: thrombosis (upper extremity DVT), CLABSI, occlusion, malposition, phlebitis",
   rubric:"ได้ = 2 ข้อที่ถูก",
   pts:[G("Benefits (2)",2,P("ให้ chemo/TPN/vasopressor/ยาระคาย","chemo","tpn","parenteral","vasopressor","ระคาย","irritant"),P("ใช้ระยะยาว / home IV","long","ระยะยาว","สัปดาห์","home"),P("ไม่เสี่ยง pneumothorax","pneumothorax","ปลอดภัย","safe"),P("เจาะเลือดได้ ลดการเจาะซ้ำ","เจาะเลือด","blood sampl","venipuncture"))]})
 ),
 interp:"PICC: ชื่อ ตำแหน่งปลาย (lower SVC/CAJ) และประโยชน์",
 summary:["PICC ใส่ทาง basilic vein ใต้ US","ปลาย = lower SVC/cavoatrial junction","ใช้: chemo, TPN, IV antibiotic ระยะยาว, vasopressor","ภาวะแทรกซ้อน: DVT, CLABSI, occlusion"]}),

/* ===== OSCE 18 ===== */
Co({page:5,orig:"18",topic:"img",sub:"CT brain",title:"Head injury — calculate the GCS in two scenarios and read the CT",
 img:["os79c_18"],imgNote:"CT สมองไม่ฉีดสี ภาพ axial",
 stem:`1. Calculate the GCS: the patient opens his eyes when his name is called, speaks in sentences but is confused, and obeys commands.<br>2. Calculate the GCS: the patient keeps his eyes closed, makes moaning sounds, extends the left arm (decerebrate) to pain, and withdraws the right arm from pain.<br>3. A non-contrast CT of the brain is shown. What is the diagnosis?`,
 gray:"18 1)คำนวน gcs ลืมตาเรียกชื่อ / พูดได้เป็นประโยคแต่มีสับสน / ทำตามคำสั่งได้ 2)คำนวน gcs หลับตา / ร้องเสียงอืออา / ซ้ายเหยียดแขน decerebrate แต่ แขนขวาดึงแขนหนี pain (นมจว่าซ้ายขวาจำสลับมั้ย) 3)dx",
 notes:"ผู้จดไม่แน่ใจว่าจำแขนซ้าย/ขวาสลับหรือไม่ (\"นมจว่าซ้ายขวาจำสลับมั้ย\") — ไม่เปลี่ยน GCS (ใช้ best motor) · ไม่มีเฉลย · ตรวจคีย์ 21 พ.ย. 2026: ไฟล์ไม่มีเฉลย · เฉลยเดิมตอบ CT = acute SDH → แก้เป็น acute epidural hematoma (biconvex, swirl sign) ตามรูปในไฟล์ + ATLS 10th/BTF",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไฟล์ไม่มีเฉลย · GCS ตามเกณฑ์มาตรฐาน: 1) <b>E3V4M6 = 13</b> 2) <b>E1V2M4 = 7</b> (ใช้ best motor = withdrawal) · <b>แก้การอ่าน CT</b>: เฉลยเดิมตอบ acute SDH แต่เมื่อดูรูปในไฟล์ hematoma ข้างขวาเป็นรูป <b>biconvex/lentiform</b> ขอบด้านในนูน สิ้นสุดชัด ความทึบไม่สม่ำเสมอ (swirl) + midline shift ไปซ้าย = <b>acute epidural hematoma</b> (เข้ากับ GCS ที่ลดจาก 13 เป็น 7 แบบ lucid interval) · แหล่งตัดสิน: ATLS 10th + Brain Trauma Foundation Surgical Management of TBI + Radiopaedia (EDH vs SDH) · ความมั่นใจ: สูง (GCS) / ปานกลาง-สูง (CT)",
 parts:S(
  B("18.1 GCS of scenario 1.",2,{tags:["pe"],
   ans:"<b>E3 V4 M6 = 13</b> (ลืมตาเมื่อเรียก = E3 · พูดเป็นประโยคแต่สับสน = V4 confused · ทำตามสั่ง = M6) → mild TBI (13–15)",
   pts:[CR(P("E3V4M6 = 13","13","e3v4m6","e3 v4 m6"))]}),
  B("18.2 GCS of scenario 2.",2,{tags:["pe"],
   ans:"<b>E1 V2 M4 = 7</b> (หลับตาไม่ลืม = E1 · ครางอืออา = V2 incomprehensible sounds · motor ใช้ <b>best response</b>: แขนขวา withdrawal = M4 แม้ซ้ายเป็น extension M2) → severe TBI (≤8) → intubate · การตอบสนองต่างกันสองข้างบ่งชี้ lateralizing sign (รอยโรคตรงข้ามกับด้านที่แย่กว่า)",
   exp:"ใช้ best motor response เสมอ · บันทึก lateralizing signs แยก (pupil, motor)",
   rubric:"ได้ = 7 (ใช้ best motor) · ผิดถ้าใช้ M2 (= 5)",
   pts:[CR(P("E1V2M4 = 7 (best motor)","\\b7\\b","e1v2m4","e1 v2 m4","best motor"))]}),
  B("18.3 CT diagnosis.",3,{tags:["img"],
   ans:"<b>Acute epidural (extradural) hematoma (right)</b> — extra-axial collection hyperdense รูป <b>biconvex/lentiform</b> ขอบด้านในนูนเข้าหาสมอง ขอบหน้า-หลังสิ้นสุดชัด (ไม่ลามข้าม suture) ความทึบไม่สม่ำเสมอ (swirl sign = เลือดกำลังออก) + scalp swelling ด้านเดียวกัน + <b>right lateral ventricle ถูกกด</b> + <b>midline shift ไปทางซ้าย</b> (mass effect) · เข้ากับ GCS 13 → 7 (lucid interval) และ motor แย่ด้านซ้าย (ตรงข้ามรอยโรค) · การรักษา: EDH &gt;30 mL (ไม่ว่า GCS เท่าใด) หรือ GCS &lt;9 + anisocoria → <b>emergency craniotomy and evacuation</b> (BTF Surgical Management of TBI)",
   exp:"EDH = biconvex/lentiform ไม่ข้าม suture (มักจาก middle meningeal artery + กะโหลกแตก) · SDH = crescent ขอบด้านในเว้า ข้าม suture ได้ลามตามผิวสมองทั้งซีก (bridging veins) — ภาพนี้ขอบด้านในนูนและสิ้นสุดชัดจึงเป็น EDH",
   rubric:"ได้ = acute EDH + บอกข้าง/mass effect · ตอบ acute SDH = ได้บางส่วน (เห็น extra-axial hematoma แต่แยกชนิดผิด)",
   pts:[CR(P("Acute epidural (extradural) hematoma","epidural","extradural","\\bedh\\b")),P("ข้างขวา + midline shift","right","ขวา","midline","shift","mass effect")]})
 ),
 interp:"คำนวณ GCS (best motor) + อ่าน CT acute EDH (biconvex) ที่มี midline shift",
 summary:["GCS: E4 V5 M6 — ใช้ best motor","Confused = V4 · sounds = V2 · withdrawal = M4 · decerebrate = M2","GCS ≤8 → intubate","Acute EDH: biconvex hyperdense ไม่ข้าม suture, lucid interval; &gt;30 mL → craniotomy (SDH = crescent ข้าม suture)"]}),

/* ===== OSCE 19 ===== */
Co({page:5,orig:"19",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a swollen red leg after a long flight",
 img:["os79c_19"],imgNote:"ภาพถ่ายขาทั้งสองข้างจากด้านหน้า มีลูกศรชี้ที่ขาข้างหนึ่ง",
 stem:`An athlete has right leg pain, swelling and redness after a long flight home. Arterial pulses are 2+ in all positions. The photograph is shown.<br>1. Describe the leg.<br>2. What is the diagnosis?<br>3. Which investigation confirms the diagnosis?<br>4. Give three common causes (risk factors).`,
 gray:"19 นักกีฬานั่งเครื่องบินกลับ ขาขวาปวดบวมแดง arterial pulse 2+ หมด ถ้าจำไม่ผิดรูปนี้เลย 1)บรรยายขา 2)dx 3)ตรวจอะไรยืนยัน 4)common cause 3 อย่าง",
 notes:"ผู้จดเขียน \"ถ้าจำไม่ผิดรูปนี้เลย\" · ไม่มีเฉลย",
 opinion:"ไฟล์ไม่มีเฉลย — DVT ตามประวัติเดินทางนาน ความมั่นใจสูง; ข้อ 4 \"common cause 3 อย่าง\" ตอบเป็น Virchow's triad",
 parts:S(
  B("19.1 Describe the leg.",2,{tags:["img"],
   ans:"ขาข้างที่ลูกศรชี้ (ขวา) <b>บวมโตกว่าอีกข้าง</b> (เทียบเส้นรอบวงน่อง &gt;3 cm = Wells), ผิว<b>แดงคล้ำ/ม่วง</b> ตึงมัน, อาจมี pitting edema, เส้นเลือดดำผิวหนังโป่งชัด (collateral) · ไม่มีแผล ไม่มีเนื้อตาย",
   rubric:"ได้ = บวม + แดง/คล้ำ เทียบอีกข้าง",
   pts:[CR(P("ขาบวม (asymmetric)","บวม","swell","edema","โต")),P("แดง/คล้ำ/ตึง","แดง","red","erythema","คล้ำ","purpl","ตึง"),P("เส้นเลือดดำผิวโป่ง","superficial vein","เส้นเลือด","collateral")]}),
  B("19.2 Diagnosis.",2,{tags:["img"],
   ans:"<b>Deep vein thrombosis (DVT) of the right leg</b> (travel-related) · DDx: cellulitis (ไข้ แดงร้อนขอบชัด), ruptured Baker cyst, muscle injury (นักกีฬา), superficial thrombophlebitis",
   pts:[CR(P("Deep vein thrombosis","\\bdvt\\b","deep vein","deep venous","thrombosis"))]}),
  B("19.3 Confirmatory investigation.",2,{tags:["img"],
   ans:"<b>Compression (duplex) ultrasound</b> ของ proximal/whole-leg veins — vein กดไม่แฟบ = DVT · ใช้ Wells score: low probability → D-dimer ก่อน (ลบ = ตัดได้), likely → US ทันที",
   pts:[CR(P("Compression / duplex ultrasound","ultrasound","duplex","doppler","compression","usg"))]}),
  B("19.4 Three common causes (risk factors).",3,{tags:["img"],
   ans:"<b>Virchow's triad</b>: (1) <b>venous stasis</b> — เดินทางนาน (economy class syndrome) นั่งนาน, immobilization, ผ่าตัด, อัมพาต (2) <b>hypercoagulability</b> — มะเร็ง, ยาคุม/estrogen, ตั้งครรภ์, thrombophilia, dehydration (3) <b>endothelial injury</b> — trauma, ผ่าตัด, central line · อื่น: อายุ, อ้วน, ประวัติ VTE",
   exp:"รักษา: anticoagulation (DOAC เช่น rivaroxaban/apixaban) อย่างน้อย 3 เดือน (provoked) · ป้องกันในการบิน: ลุกเดิน ดื่มน้ำ บริหารน่อง compression stockings ในกลุ่มเสี่ยง",
   rubric:"ได้ = 3 ข้อ (ตาม Virchow's triad หรือ risk factor ที่ถูก)",
   pts:[G("Causes (3)",3,P("Venous stasis / immobilization / long flight","stasis","นั่งนาน","immobil","flight","เดินทาง","เครื่องบิน"),P("Hypercoagulability (CA, OCP, pregnancy, thrombophilia)","hypercoag","มะเร็ง","cancer","ยาคุม","pill","pregnan","thrombophilia","dehydrat"),P("Endothelial injury (trauma, surgery)","endotheli","injury","trauma","ผ่าตัด","surgery","บาดเจ็บ"),P("Obesity / age / previous VTE","obes","อ้วน","อายุ","previous","ประวัติ"))]})
 ),
 interp:"ขาบวมแดงข้างเดียวหลังบินนาน ชีพจรปกติ = DVT → compression US → Virchow's triad",
 summary:["Wells score → D-dimer (low) หรือ US (likely)","Compression US = confirm","Virchow's triad: stasis, hypercoagulability, endothelial injury","รักษา DOAC ≥3 เดือน · massive iliofemoral/phlegmasia → พิจารณา thrombolysis/thrombectomy"]}),

/* ===== OSCE 20 ===== */
Co({page:6,orig:"20",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — an anterior abdominal wall defect at the umbilicus in a newborn",
 stem:`A photograph of a newborn is shown: abdominal contents protrude through the umbilical ring and are covered by a translucent membranous sac with the umbilical cord inserting into it.<br>1. What is the diagnosis?<br>2. Which associated abnormalities must be looked for?<br>3. What is the initial management?`,
 gray:"20 ให้รูป omphalocele มา 1)dx 2)ความผิดปกติที่ต้องหาเพิ่ม 3)initial management",
 flag:NOIMG,imgAlt:"ทารกแรกเกิดมีถุงเยื่อบางใสยื่นออกจากสะดือ ภายในมีลำไส้และตับ สายสะดือติดที่ยอดถุง",
 notes:"ไฟล์ไม่มีรูปและเฉลย · MCQ Subspe 79D มีโจทย์ omphalocele (associated anomaly) เรื่องเดียวกัน",
 opinion:"ไฟล์ไม่มีเฉลย — ตอบตามมาตรฐาน ความมั่นใจสูง",
 parts:S(
  B("20.1 Diagnosis.",1,{tags:["img"],
   ans:"<b>Omphalocele (exomphalos)</b> — defect ที่สะดือ มีถุง (amnion + peritoneum) สายสะดือเกาะที่ถุง อาจมีตับอยู่ในถุง (giant &gt;5 cm) · ต่างจาก gastroschisis (ด้านขวาของสะดือ ไม่มีถุง ลำไส้บวมแข็ง)",
   pts:[CR(P("Omphalocele / exomphalos","omphalocele","exomphalos"))]}),
  B("20.2 Associated abnormalities to look for.",3,{tags:["img"],
   ans:"พบ 50–70%: <b>chromosomal</b> — trisomy 18, 13, 21 (karyotype) · <b>cardiac anomalies</b> (~30–50%; echocardiogram) · <b>Beckwith-Wiedemann syndrome</b> — macroglossia, gigantism, <b>hypoglycemia</b> (เจาะน้ำตาล), hemihypertrophy, เสี่ยง Wilms/hepatoblastoma · <b>pentalogy of Cantrell</b> (sternal cleft, ectopia cordis, diaphragmatic & pericardial defect) · OEIS/cloacal exstrophy · GU, neural tube, limb anomalies",
   rubric:"ได้ = ≥2 กลุ่ม (chromosome, cardiac, BWS/hypoglycemia, Cantrell)",
   pts:[G("Associated (≥2)",2,P("Chromosomal: trisomy 13/18/21 — karyotype","trisomy","chromosom","karyotype","down","edward","patau"),P("Cardiac — echo","cardiac","heart","echo","หัวใจ"),P("Beckwith-Wiedemann / hypoglycemia","beckwith","bws","hypoglyc","macroglossia","น้ำตาล"),P("Pentalogy of Cantrell","cantrell","ectopia"))]}),
  B("20.3 Initial management.",4,{tags:["img"],
   ans:"ABC/neonatal resuscitation (ถ้าต้อง intubate ไม่ใช้ bag-mask นาน) · <b>คลุมถุงด้วย sterile non-adherent dressing/ถุงพลาสติก (bowel bag)</b> ป้องกันการเสียความร้อน/น้ำและการแตก ห้ามพยายามดันกลับ · จัดท่า<b>ตะแคงขวา</b>ป้องกันการบิดของ mesentery · <b>OG/NG decompression</b> · NPO + <b>IV fluid</b> (ระวัง hypothermia, hypoglycemia) · ป้องกันติดเชื้อ (antibiotics ถ้าถุงแตก) · เจาะ glucose · ตรวจหา anomaly (echo, karyotype) · ส่งต่อ pediatric surgeon → primary closure (เล็ก) หรือ staged (silo) / paint and wait (giant — ทา silver sulfadiazine ให้ epithelialize แล้วซ่อม ventral hernia ภายหลัง)",
   rubric:"ได้ = คลุมถุง + ตะแคงขวา + NG + IV fluid/temperature/glucose + ส่งต่อ",
   pts:[CR(P("คลุมถุง sterile/พลาสติก ป้องกันเสียน้ำความร้อน","คลุม","cover","plastic","พลาสติก","dressing","wrap","bowel bag")),P("ตะแคงขวา","ตะแคงขวา","right lateral","right side"),CR(P("NG/OG decompression","\\bng\\b","\\bog\\b","decompress","gastric tube")),P("IV fluid + temperature + glucose","iv fluid","fluid","น้ำเกลือ","temperature","อุณหภูมิ","glucose","น้ำตาล"),P("ส่งต่อ ped surgeon / primary vs staged closure","refer","ส่งต่อ","closure","silo","paint")]})
 ),
 interp:"Omphalocele: Dx, หา anomaly (chromosome, cardiac, BWS), initial: คลุม ตะแคงขวา NG IV",
 summary:["Omphalocele: สะดือ มีถุง anomaly เยอะ · Gastroschisis: ขวา ไม่มีถุง anomaly น้อย","หา: karyotype, echo, glucose (BWS), Cantrell","Initial: คลุมถุง, ตะแคงขวา, NG, IV fluid, ควบคุมอุณหภูมิ/น้ำตาล","Closure: primary / staged / paint and wait (giant)"]}),

/* ===== OSCE 21 ===== */
Co({page:7,orig:"21",topic:"img",sub:"IVP/KUB",title:"IVP — ureteric stone: diagnosis and management",
 stem:`An intravenous pyelogram (IVP) film shows a ureteric stone with dilatation of the collecting system above it.<br>1. What is the diagnosis?<br>2. How would you manage it?`,
 gray:"21 film ivp มี ureteric stone 1)dx 2)management",
 flag:NOIMG+" · ไฟล์ไม่ได้บอกขนาด/ตำแหน่งนิ่วหรืออาการติดเชื้อ — เฉลยแบ่งตามขนาด/ตำแหน่งและข้อบ่งชี้ decompression",imgAlt:"ภาพ IVP เห็นเงาทึบรังสีในแนวท่อไต มีการโป่งขยายของ calyces และท่อไตเหนือเงานั้น ไตข้างเดียวกันขับสารทึบรังสีช้า",
 notes:"ไฟล์ไม่มีรูปและเฉลย",
 opinion:"ไฟล์ไม่มีเฉลย — management เขียนตาม EAU 2024 แบ่งตามขนาด/ตำแหน่งและภาวะแทรกซ้อน ความมั่นใจสูง",
 parts:S(
  B("21.1 Diagnosis.",2,{tags:["img"],
   ans:"<b>Ureteric calculus with hydronephrosis/hydroureter</b> (obstructive uropathy) — IVP: filling defect/radiopaque stone ในท่อไต, contrast ค้างเหนือนิ่ว (standing column), delayed nephrogram/excretion ข้างเดียวกัน · บอกข้างและระดับ (upper/mid/lower)",
   pts:[CR(P("Ureteric stone","ureter","stone","calcul","นิ่ว")),P("Hydronephrosis / obstruction","hydroneph","hydroureter","obstruct","delayed")]}),
  B("21.2 Management.",4,{tags:["img"],
   ans:"<b>ทันที</b>: analgesia (NSAID first-line, เช่น diclofenac/ketorolac; opioid ถ้าไม่พอ) · ตรวจ UA, culture, creatinine, CBC · <b>Urgent decompression (DJ stent หรือ PCN) + IV antibiotics</b> ถ้ามี infected obstruction/ไข้, AKI, ไตข้างเดียว, ปวดดื้อยา · <b>Conservative/MET</b>: นิ่ว ≤5 mm หลุดเองได้มาก; distal 5–10 mm → <b>tamsulosin</b> (alpha-blocker) + analgesic นัด 2–4 สัปดาห์ (ไม่เกิน 4–6 สัปดาห์) · <b>Active removal</b>: นิ่ว &gt;10 mm, ไม่หลุด, ปวดซ้ำ, obstruction ต่อเนื่อง → <b>URS (ureteroscopic lithotripsy)</b> หรือ <b>ESWL</b> (proximal &lt;10 mm ทั้งสองดี; &gt;10 mm URS ดีกว่า) · ป้องกันการเกิดซ้ำ: ดื่มน้ำ ≥2.5 L/วัน + stone analysis",
   rubric:"ได้ = analgesic + ข้อบ่งชี้ decompression + MET ตามขนาด + URS/ESWL",
   pts:[P("Analgesia (NSAID)","nsaid","diclofenac","ketorolac","analges","ยาแก้ปวด"),CR(P("Infected/obstruction → DJ stent / PCN + antibiotics","stent","\\bdj\\b","double.?j","nephrostomy","\\bpcn\\b")),CR(P("MET (tamsulosin) สำหรับนิ่วเล็ก","tamsulosin","alpha","\\bmet\\b","medical expulsive","หลุดเอง")),P("URS / ESWL เมื่อใหญ่หรือไม่หลุด","\\burs\\b","ureteroscop","eswl","shock wave","lithotripsy")]})
 ),
 interp:"IVP ureteric stone + hydronephrosis → management ตามขนาด ตำแหน่ง และ complication",
 summary:["IVP: filling defect + hydronephrosis + delayed excretion","NCCT KUB เป็นมาตรฐานปัจจุบัน","ไข้/AKI/ไตเดียว → decompress (DJ/PCN) + antibiotic","≤10 mm distal → MET; &gt;10 mm/ไม่หลุด → URS/ESWL"]}),

/* ===== OSCE 22 ===== */
Co({page:7,orig:"22",topic:"pe",sub:"Neuro motor/reflex",ex:1,title:"Physical examination — scratching the sole of the foot",
 kimg:["os79c_k22"],
 stem:`The examiner asks you to stroke the sole of the patient's foot.<br>1. What is the name of this test?<br>2. Perform it, then state the result and interpret it.`,
 gray:"22 ตรวจขูดใต้เท้า 1)ชื่อการตรวจ 2)ผลการตรวจ และ ตีความ · ช่องเฉลย: \"2. Babinski\"",
 notes:"ช่องเฉลย (หน้า 18) เขียน \"2. Babinski\" (ตรงแถวข้อย่อย 2 แต่เป็นคำตอบของข้อ 1 ชื่อการตรวจ) · ผลการตรวจไม่ได้บอก — Claude เขียนทั้งสองแบบ",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ (Babinski / plantar reflex) ความมั่นใจสูง; ผลและการแปลผลเขียนเพิ่มเองตามมาตรฐาน",
 parts:S(
  B("22.1 Name of the test.",2,{tags:["pe"],key:"Babinski (ช่องเฉลยในไฟล์)",
   ans:"<b>Plantar reflex — Babinski sign</b>",
   pts:[CR(P("Babinski / plantar reflex","babinski","plantar"))]}),
  B("22.2 Perform, state the result and interpret.",4,{tags:["pe"],
   ans:"วิธี: อธิบายผู้ป่วย นอนหงาย ขาเหยียด ใช้ของปลายทู่ (ไม้กดลิ้น/ด้ามค้อน) <b>ลากจาก heel ไปตามขอบนอก (lateral) ของฝ่าเท้า แล้วโค้งไปทาง base ของนิ้วเท้าใหญ่ (ball of foot)</b> ช้า ๆ สังเกตนิ้วเท้าใหญ่ · <b>ปกติ (flexor plantar response, Babinski negative)</b>: นิ้วเท้างอลง · <b>ผิดปกติ (Babinski positive, extensor plantar response)</b>: นิ้วเท้าใหญ่<b>กระดกขึ้น</b> ± นิ้วอื่นกางออก (fanning) = <b>upper motor neuron (corticospinal tract) lesion</b> เช่น stroke, spinal cord compression · ทารก &lt;1–2 ปี Babinski บวกได้ปกติ (pyramidal tract ยังไม่ myelinate) · ทดสอบทั้งสองข้างเทียบกัน",
   exp:"Equivalent signs: Chaddock (ลากขอบนอกหลังเท้า), Oppenheim (ลากหน้าแข้ง), Gordon (บีบน่อง) · Hoffmann sign = UMN ของแขน",
   rubric:"ได้ = เทคนิคถูก (lateral sole → ball) + แยกปกติ/ผิดปกติ + UMN + ทารกปกติ",
   pts:[CR(P("ลากขอบนอกฝ่าเท้า heel → base นิ้วโป้ง","lateral","ขอบนอก","heel","ส้นเท้า","sole")),CR(P("ปกติงอลง (flexor) · ผิดปกติกระดกขึ้น (extensor)","flex","งอลง","extens","กระดก","upgoing","downgoing")),CR(P("Babinski + = UMN lesion","\\bumn\\b","upper motor","corticospinal","pyramidal")),P("ทารกบวกได้ปกติ","ทารก","infant","เด็ก","myelin")]})
 ),
 interp:"Babinski sign — เทคนิค การแปลผล UMN และข้อยกเว้นในทารก",
 summary:["ลากขอบนอกฝ่าเท้าจากส้นเท้าโค้งไปฐานนิ้วโป้ง","งอลง = ปกติ · กระดกขึ้น + fanning = UMN lesion","ทารก &lt;1–2 ปี บวกได้ปกติ","อื่น: Chaddock, Oppenheim, Gordon · แขน: Hoffmann"]}),

/* ===== OSCE 23 ===== */
Co({page:7,orig:"23",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a pigmented lesion on the foot",
 stem:`A photograph shows an irregular, variegated black-brown pigmented lesion on the sole of the foot, and a biopsy confirms malignant melanoma.<br>1. What is the diagnosis?<br>2. How would you manage it?`,
 gray:"23 malignant melanoma เท้า 1)dx 2)management",
 flag:NOIMG,imgAlt:"รอยโรคสีดำน้ำตาลไม่สม่ำเสมอ ขอบขรุขระ ที่ฝ่าเท้า",
 notes:"ไฟล์ไม่มีรูปและเฉลย · stem บอกผล biopsy เพื่อให้คำถาม management ตอบได้ (ในสอบจริงอาจให้แค่รูปแล้วถาม Dx — ต้องบอกว่าทำ excisional biopsy ก่อน) · MCQ Subspe 79D มีเรื่อง margin ของ melanoma เช่นกัน",
 opinion:"ไฟล์ไม่มีเฉลย — ตอบตามมาตรฐาน (NCCN) ความมั่นใจสูง; ประเด็นที่ต้องบอกในห้องสอบคือ excisional biopsy ก่อน (ไม่ใช่ wide excision ทันที) แล้ว wide excision ตาม Breslow + SLNB",
 parts:S(
  B("23.1 Diagnosis.",2,{tags:["img"],
   ans:"<b>Malignant melanoma — acral lentiginous type</b> (ชนิดที่พบบ่อยที่สุดในคนเอเชีย ที่ฝ่ามือฝ่าเท้าและใต้เล็บ ไม่สัมพันธ์แสงแดด) · ABCDE: Asymmetry, Border irregular, Color variegated, Diameter &gt;6 mm, Evolving",
   pts:[CR(P("Malignant melanoma","melanoma")),P("Acral lentiginous","acral","lentiginous")]}),
  B("23.2 Management.",4,{tags:["img"],
   ans:"1. <b>Excisional biopsy</b> (margin 1–3 mm, full thickness) เพื่อวัด <b>Breslow thickness</b>, ulceration, mitosis · 2. <b>Wide local excision</b> ตาม Breslow: in situ 0.5–1 cm, ≤1 mm 1 cm, 1–2 mm 1–2 cm, &gt;2 mm 2 cm (ลึกถึง fascia) · ปิดแผลฝ่าเท้าด้วย graft/flap · 3. <b>Sentinel lymph node biopsy</b> เมื่อ ≥T1b (≥0.8 mm หรือมี ulceration) — ฝ่าเท้าระบายไป popliteal/inguinal · ต่อมน้ำเหลืองคลำได้ → FNA → therapeutic lymph node dissection · 4. Staging (CT/PET) ใน stage III–IV · 5. Adjuvant: anti-PD-1 ± BRAF/MEK (stage IIB–IV) · 6. ติดตามผิวหนังทั้งตัว",
   rubric:"ได้ = biopsy → WLE ตาม Breslow + SLNB + staging/adjuvant",
   pts:[CR(P("Excisional biopsy → Breslow","excisional","breslow","biopsy")),CR(P("Wide local excision ตาม margin","wide","margin","\\bwle\\b")),P("SLNB","sentinel","slnb"),P("Staging / adjuvant immunotherapy","stag","adjuvant","pd-1","immuno","pembrolizumab","nivolumab")]})
 ),
 interp:"Acral melanoma: biopsy → WLE ตาม Breslow → SLNB → adjuvant",
 summary:["Acral lentiginous melanoma = บ่อยสุดในคนเอเชีย","Excisional biopsy ก่อน (1–3 mm margin)","Margin: in situ 0.5–1, ≤1 mm 1, 1–2 mm 1–2, &gt;2 mm 2 cm","SLNB ≥T1b · adjuvant anti-PD-1 ใน IIB–IV"]}),

/* ===== OSCE 24 ===== */
Co({page:7,orig:"24",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — an infant with pale stools and raised bilirubin",
 kimg:["os79c_k24"],
 stem:`A photograph shows the pale (acholic) stool of a jaundiced infant. Liver function tests show a high, mainly direct, bilirubin.<br>1. Give the differential diagnoses.<br>2. You are working at a community hospital. How would you manage this infant?`,
 gray:"24 รูปเด็กขี้เทา ๆ LFT bilirubin สูง ๆ 1)ddx 2)ทำงานอยู่รพช จะดูแลยังไง · ช่องเฉลย: \"2. BA , allagile, choledochal cyst 3. USG then refer for DISIDA < 60 d vs IOC if > 60 day\"",
 flag:NOIMG,imgAlt:"ผ้าอ้อมทารกมีอุจจาระสีซีดขาวเทาเหมือนดินเหนียว",
 notes:"เฉลยในไฟล์ (หน้า 18): DDx = BA, Alagille, choledochal cyst · การดูแล = USG then refer for DISIDA (&lt;60 วัน) vs IOC (&gt;60 วัน) · ไม่มีรูปในไฟล์",
 opinion:"เห็นด้วยกับเฉลยในไฟล์โดยรวม ความมั่นใจปานกลาง-สูง — DDx ครบตามหลัก; ส่วนการจัดการที่ รพช. ต้องเน้นว่า<b>ส่งต่อเร็ว</b>ไปโรงพยาบาลที่มี pediatric surgeon โดยไม่รอ เพราะ Kasai ก่อน 60 วันได้ผลดีที่สุด (เฉลยไฟล์ที่ใช้ DISIDA เมื่อ &lt;60 วันและ IOC ทันทีเมื่อ &gt;60 วันเป็นแนวปฏิบัติที่สมเหตุสมผล)",
 parts:S(
  B("24.1 Differential diagnoses.",3,{tags:["img"],key:"ไฟล์: BA, Alagille, choledochal cyst",
   ans:"Neonatal cholestasis (direct hyperbilirubinemia + acholic stool): <b>1. Biliary atresia</b> (สำคัญที่สุด ต้องแยกเร่งด่วน) <b>2. Choledochal cyst</b> <b>3. Alagille syndrome</b> (paucity of interlobular bile ducts, butterfly vertebrae, posterior embryotoxon, peripheral PS, broad forehead) · อื่น ๆ: idiopathic neonatal hepatitis, infection (TORCH, sepsis, UTI), metabolic (galactosemia, tyrosinemia, α1-antitrypsin deficiency), PFIC, TPN-associated cholestasis, hypothyroidism",
   rubric:"ได้ = BA + ≥2 อื่น",
   pts:[CR(P("Biliary atresia","biliary atresia","\\bba\\b")),G("DDx อื่น (≥2)",2,P("Choledochal cyst","choledochal"),P("Alagille syndrome","alagille","allagile"),P("Neonatal hepatitis / infection (TORCH)","hepatitis","torch","infection","sepsis"),P("Metabolic (galactosemia, α1-AT)","galactos","antitrypsin","metabolic","tyrosin"))]}),
  B("24.2 Management at a community hospital.",4,{tags:["img"],key:"ไฟล์: USG then refer for DISIDA &lt; 60 d vs IOC if &gt; 60 day",
   ans:"ที่ รพช.: ยืนยัน <b>direct bilirubin</b> สูง (&gt;1 mg/dL) · ดูสีอุจจาระ (stool color card) · <b>Ultrasound</b> ตับและทางเดินน้ำดี (fasting): gallbladder เล็ก/ไม่มี, triangular cord sign (BA) หรือ cyst ของท่อน้ำดี (choledochal) · ให้ <b>vitamin K</b> (เสี่ยงเลือดออกจากขาด vit K) และวิตามินที่ละลายในไขมัน · ตรวจ TSH, infection screen · <b>ส่งต่อด่วน</b>ไปโรงพยาบาลที่มีกุมารศัลยแพทย์ — อย่ารอ เพราะ <b>Kasai ก่อนอายุ 60 วัน</b>ได้ผลดีที่สุด · ที่โรงพยาบาลปลายทาง: อายุ &lt;60 วัน → <b>hepatobiliary scintigraphy (DISIDA/HIDA)</b> (ขับเข้าลำไส้ = ตัด BA) ส่วนถ้าอายุ &gt;60 วัน หรือ HIDA ไม่ขับ → <b>intraoperative cholangiogram (IOC)</b> ± liver biopsy → Kasai portoenterostomy",
   exp:"BA ที่ไม่ได้รักษา → biliary cirrhosis ภายใน 1–2 ปี · Kasai ล้มเหลว → liver transplant",
   rubric:"ได้ = direct bilirubin + US + vitamin K + ส่งต่อด่วน + บอกเวลาเป้าหมาย 60 วัน (+ DISIDA/IOC)",
   pts:[P("ยืนยัน direct bilirubin","direct","conjugat"),CR(P("Ultrasound","ultrasound","usg","\\bus\\b")),P("Vitamin K","vitamin k","vit k"),CR(P("ส่งต่อด่วน (ก่อน 60 วัน)","refer","ส่งต่อ","60")),P("DISIDA/HIDA หรือ IOC → Kasai","disida","hida","scintigraph","\\bioc\\b","cholangiogram","kasai")]})
 ),
 interp:"ทารกอุจจาระซีด + direct hyperbilirubinemia = biliary atresia จนกว่าพิสูจน์ได้ว่าไม่ใช่ → US + vit K + ส่งต่อด่วน",
 summary:["DDx: biliary atresia, choledochal cyst, Alagille, neonatal hepatitis, metabolic","Stool color card · direct bilirubin &gt;1 mg/dL","US: GB เล็ก/ไม่มี, triangular cord · HIDA ไม่ขับ","Kasai ก่อน 60 วัน · ส่งต่อด่วน + vitamin K"]}),

/* ===== OSCE 25 ===== */
Co({page:7,orig:"25",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a burn wound: depth and wound care",
 kimg:["os79c_k25"],
 stem:`A photograph of a burn wound is shown.<br>1. What degree and depth of burn is this, and what features tell you?<br>2. How would you care for the wound?`,
 gray:"25 แผล burn 1) ไฟไหม้ระดับอะไรความลึกอะไร ดูจากอะไร 2) ทำแผลยังไง · ช่องเฉลย: \"2. Primary = เหมือนอาบแดด 3. Secondary = a. Superficial : Pink, blister b. Deep: Pale, not pain 4. Third: Superficial vein thrombosis · 1 2 sup : wound dressing with ATB ointment · 2 deep 3: Skin debridement and Skin graft\"",
 flag:NOIMG+" · ไฟล์ไม่มีรูป จึงไม่รู้ว่าแผลระดับใด — เฉลยแยกทุกระดับตามที่ไฟล์เขียน · ⚠ เฉลยไฟล์เขียน third degree = \"Superficial vein thrombosis\" (น่าจะหมายถึง thrombosed superficial veins ที่เห็นใต้ eschar) — เขียนลักษณะ full thickness ให้ครบ",imgAlt:"ภาพแผลไฟไหม้ที่ผิวหนัง",
 notes:"เฉลยในไฟล์ (หน้า 18) เขียนเป็นรายการระดับ burn: Primary (first degree) = เหมือนอาบแดด · Secondary superficial = pink, blister · Secondary deep = pale, not pain · Third = superficial vein thrombosis · การรักษา: 1st–2nd superficial → wound dressing with ATB ointment · 2nd deep–3rd → skin debridement and skin graft",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ในหลักใหญ่ ความมั่นใจสูง — เพิ่มรายละเอียด: first degree ไม่ต้องใช้ antibiotic ointment (แค่ moisturizer); deep partial thickness ยังมีความรู้สึกแบบ pressure ได้แต่ไม่เจ็บมาก และ capillary refill ช้า; full thickness = ขาวซีด/น้ำตาล/ดำ แข็งเหมือนหนัง (leathery) ไม่เจ็บ เห็นเส้นเลือดอุดตันใต้ผิว (thrombosed vessels)",
 parts:S(
  B("25.1 Degree and depth, and the features.",4,{tags:["img"],key:"ไฟล์: 1st = เหมือนอาบแดด · 2nd superficial = pink, blister · 2nd deep = pale, not pain · 3rd = superficial vein thrombosis",
   ans:"แยกระดับ (ตอบตามรูปที่เห็น): <b>First degree (superficial/epidermal)</b>: แดง ไม่มีพอง เจ็บ แห้ง (เหมือนผิวไหม้แดด) หายใน 3–7 วันไม่มีแผลเป็น · <b>Superficial partial thickness (2nd)</b>: แดงชมพู <b>มีตุ่มพอง (blister)</b> ชุ่มชื้น blanch ดี <b>เจ็บมาก</b> หายใน 10–21 วัน · <b>Deep partial thickness (2nd)</b>: ชมพูซีด/ขาวเป็นปื้น แห้งกว่า capillary refill ช้า/ไม่ blanch <b>เจ็บน้อย</b> (รู้สึกแค่แรงกด) หายช้า &gt;3 สัปดาห์ แผลเป็นนูน · <b>Full thickness (3rd)</b>: ขาวซีด น้ำตาล ดำ <b>แข็งเหมือนหนัง (leathery eschar)</b> ไม่ blanch <b>ไม่เจ็บ</b> เห็น<b>เส้นเลือดใต้ผิวอุดตัน (thrombosed superficial veins)</b> · (4th: ถึงกล้ามเนื้อ/กระดูก)",
   rubric:"ได้ = บอกระดับ + ลักษณะที่ใช้แยก (สี, พอง, ความเจ็บ, capillary refill, texture)",
   pts:[CR(P("ระดับ/ความลึกที่ถูกต้อง","degree","partial","full","superficial","deep","thickness","ระดับ")),G("ลักษณะที่ใช้แยก (≥3)",3,P("สี (แดง ชมพู ซีด ขาว ดำ)","สี","color","pink","ชมพู","pale","ซีด","ขาว","แดง"),P("ตุ่มพอง","blister","พอง"),P("ความเจ็บ/sensation","เจ็บ","pain","sensation","ความรู้สึก"),P("Capillary refill / blanching","capillary","blanch","กดแล้วซีด"),P("Leathery / thrombosed vessels","leather","หนัง","thrombos","eschar"))]}),
  B("25.2 Wound care.",4,{tags:["img"],key:"ไฟล์: 1st–2nd superficial → dressing with ATB ointment · 2nd deep–3rd → debridement and skin graft",
   ans:"ทั่วไป: หยุดการไหม้ ล้างน้ำเย็น (ไม่ใช่น้ำแข็ง) 20 นาทีภายใน 3 ชม., ยาแก้ปวด, tetanus prophylaxis, ประเมิน %TBSA (fluid ถ้า ≥20% ผู้ใหญ่) · <b>First degree</b>: moisturizer/aloe, ยาแก้ปวด ไม่ต้องปิด · <b>Superficial partial</b>: ทำความสะอาดด้วย NSS, <b>debride ตุ่มพองที่แตก/ใหญ่</b>, ปิดด้วย <b>topical antimicrobial</b> (silver sulfadiazine — เลี่ยงที่หน้า/เด็กเล็ก/ตั้งครรภ์ใกล้คลอด, หรือ silver dressing, biosynthetic dressing) เปลี่ยนตามชนิด · <b>Deep partial และ full thickness</b>: <b>early tangential excision (debridement) + split-thickness skin graft</b> ภายใน 3–7 วัน (deep partial ที่ไม่หายใน 3 สัปดาห์ → graft) · circumferential full thickness → escharotomy · ไม่ให้ systemic antibiotic ป้องกัน",
   rubric:"ได้ = แยกการรักษาตามความลึก (dressing + topical antimicrobial สำหรับตื้น / excision + STSG สำหรับลึก)",
   pts:[P("Cool water 20 นาที + analgesia + tetanus","น้ำเย็น","cool","tetanus","analges"),CR(P("ตื้น: clean + topical antimicrobial dressing","silver","sulfadiazine","ointment","dressing","ทำแผล","topical")),CR(P("ลึก: debridement/excision + skin graft","debride","excision","graft","stsg"))]})
 ),
 interp:"ประเมินความลึกแผลไหม้จากสี พอง ความเจ็บ capillary refill และเลือกการทำแผล vs excision + graft",
 summary:["1st: แดง เจ็บ ไม่พอง · 2nd superficial: พอง ชมพู เจ็บมาก · 2nd deep: ซีด เจ็บน้อย refill ช้า · 3rd: leathery ไม่เจ็บ thrombosed veins","Parkland คิดเฉพาะ 2nd + 3rd","ตื้น → dressing + topical antimicrobial · ลึก → early excision + STSG","ไม่ให้ systemic antibiotic ป้องกัน"]}),

/* ===== OSCE 26 ===== */
Co({page:8,orig:"26",topic:"img",sub:"Clinical photograph",title:"Jaundice with a palpable organ — organ A, the sign, differential diagnoses and investigation",
 img:["os79c_26a","os79c_26b"],kimg:["os79c_k26"],imgNote:"ภาพที่ 1: ผิวหน้าท้องสีเหลือง มือผู้ตรวจคลำก้อนใต้ชายโครงขวาที่มีตัวอักษร A กำกับ · ภาพที่ 2: ตาขาวสีเหลืองทั้งสองข้าง",
 stem:`A jaundiced patient is shown in the photographs. Liver function tests, CBC and electrolytes are given (direct hyperbilirubinemia with a cholestatic pattern). The palpable structure is labelled A.<br>1. What is organ A?<br>2. What is this sign called?<br>3. Give four differential diagnoses.<br>4. What is the next investigation?`,
 gray:"26 ให้ LFT CBC electrolyte มา 5. What is organ A 6. What is this sign 7. 4 diff diag 8. What investigation ต่อไป · ช่องเฉลย: Gallbladder · Courvoisier's sign · CA ampulla of Vater · CA HOP · 2 part duodenum CA · Distal CCA · USG &gt; CT (gold standard, planning operation)",
 notes:"เฉลยในไฟล์ (หน้า 19) ครบทุกข้อย่อย · ผลแลปจริงไม่ได้จดมา — ใส่ใน stem เป็นลักษณะ cholestatic ทั่วไป · เลขข้อย่อยในไฟล์ 5–8 (ต่อจากข้ออื่น)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — periampullary tumors 4 อย่าง และลำดับ US → CT (pancreas protocol) ถูกต้อง",
 parts:S(
  B("26.1 Organ A.",1,{tags:["img"],key:"ไฟล์: Gallbladder",
   ans:"<b>Gallbladder</b> (ถุงน้ำดีโต คลำได้ใต้ชายโครงขวา ที่ tip of 9th costal cartilage ตัดกับขอบ rectus)",
   pts:[CR(P("Gallbladder","gallbladder","gall bladder","ถุงน้ำดี"))]}),
  B("26.2 Name of the sign.",1,{tags:["img"],key:"ไฟล์: Courvoisier's sign",
   ans:"<b>Courvoisier's sign (law)</b> — palpable, non-tender gallbladder ในผู้ป่วยเหลือง → สาเหตุ<b>ไม่น่าใช่นิ่ว</b> (ถุงน้ำดีที่มีนิ่วเรื้อรังจะ fibrotic หดเล็ก) แต่น่าจะเป็น<b>มะเร็งที่อุดท่อน้ำดีส่วนปลาย</b>",
   pts:[CR(P("Courvoisier sign","courvoisier"))]}),
  B("26.3 Four differential diagnoses.",4,{tags:["img"],key:"ไฟล์: CA ampulla of Vater · CA HOP · 2nd part duodenum CA · Distal CCA",
   ans:"<b>Periampullary tumors</b>: 1. <b>Carcinoma of the head of pancreas</b> (บ่อยสุด) 2. <b>Ampulla of Vater carcinoma</b> (เหลืองขึ้นลง + melena/silver stool ได้) 3. <b>Distal cholangiocarcinoma</b> (distal CBD) 4. <b>Duodenal (2nd part) carcinoma</b>",
   rubric:"ได้ 1 คะแนนต่อโรค",
   pts:[P("CA head of pancreas","pancrea","\\bhop\\b"),P("Ampulla of Vater CA","ampull","vater"),P("Distal cholangiocarcinoma","cholangio","\\bcca\\b","bile duct"),P("Duodenal CA","duoden")]}),
  B("26.4 Next investigation.",2,{tags:["img"],key:"ไฟล์: USG &gt; CT (gold standard, planning operation)",
   ans:"<b>Ultrasound</b> ก่อน (dilated CBD + intrahepatic ducts, ก้อน) → <b>CT abdomen triple-phase pancreas protocol</b> (staging, resectability — หลอดเลือด SMA/SMV/celiac, metastasis) ใช้วางแผนผ่าตัด · เพิ่มเติม: <b>CA 19-9</b>, MRCP, <b>EUS-FNA</b> (tissue/ก้อนเล็ก), ERCP + brushing/stent (ถ้า cholangitis หรือรอ neoadjuvant) · Resectable → <b>Whipple (pancreaticoduodenectomy)</b>",
   rubric:"ได้ = US → CT pancreas protocol",
   pts:[CR(P("Ultrasound","ultrasound","usg","\\bus\\b")),CR(P("CT (triple-phase pancreas protocol)","\\bct\\b","computed","triple")),P("CA 19-9 / EUS / MRCP / ERCP","19-9","eus","mrcp","ercp")]})
 ),
 interp:"เหลือง + ถุงน้ำดีโตไม่เจ็บ = Courvoisier → periampullary malignancy → US → CT pancreas protocol",
 summary:["Courvoisier: เหลือง + GB โตไม่เจ็บ → ไม่ใช่นิ่ว น่าจะมะเร็ง","Periampullary: HOP, ampulla, distal CCA, duodenum","US → CT pancreas protocol (staging/resectability) ± EUS, CA 19-9","Resectable → Whipple"]}),

/* ===== OSCE 27 ===== */
Co({page:9,orig:"27",topic:"img",sub:"Diagram",title:"Abdominal wall hernias — name each one and give risk factors",
 img:["os79c_27"],kimg:["os79c_k27"],imgNote:"แผนภาพผนังหน้าท้องชายมีก้อนไส้เลื่อน 6 ตำแหน่ง กำกับเลข 1–6 (ป้ายชื่อในรูปต้นฉบับถูกปิดเป็นตัวเลข — รูปต้นฉบับอยู่ในเฉลย)",
 stem:`A diagram of the anterior abdominal wall shows six hernias numbered 1 to 6.<br>1. Name each hernia.<br>2. Give two risk factors for hernia.`,
 gray:"27 1. ชื่อไรบ้างแต่ละอัน 2. ปัจจัยเสี่ยง 2 อัน (รูปแผนภาพไส้เลื่อนมีป้ายชื่อ Epigastric, Umbilical, Incisional, Spigelian, Inguinal, Femoral)",
 notes:"รูปในไฟล์มีป้ายชื่อไส้เลื่อนครบ (= คำตอบข้อ 1) → ปิดป้ายเป็นเลข 1–6 ในรูปโจทย์ · ช่องเฉลยไม่มีคำตอบ",
 opinion:"ชื่อไส้เลื่อนตรงตามป้ายในรูปของไฟล์ ความมั่นใจสูง; ปัจจัยเสี่ยงเขียนตามมาตรฐาน · รูปในข้อสอบจริงอาจไม่มีป้าย ต้องจำตำแหน่ง",
 parts:S(
  B("27.1 Name each hernia (1–6).",6,{tags:["img"],key:"รูปต้นฉบับ: 1 Epigastric · 2 Umbilical · 3 Incisional · 4 Spigelian · 5 Inguinal · 6 Femoral",
   ans:"1. <b>Epigastric hernia</b> — linea alba เหนือสะดือ · 2. <b>Umbilical (paraumbilical) hernia</b> — ที่สะดือ · 3. <b>Incisional hernia</b> — ที่แผลผ่าตัดเดิม · 4. <b>Spigelian hernia</b> — ตามขอบนอกของ rectus (semilunar line) ใต้สะดือ ระดับ arcuate line · 5. <b>Inguinal hernia</b> — เหนือ inguinal ligament ลงถุงอัณฑะได้ · 6. <b>Femoral hernia</b> — ใต้ inguinal ligament lateral ต่อ pubic tubercle (เสี่ยง strangulation สูงสุด)",
   rubric:"1 คะแนนต่อชื่อที่ถูก",
   pts:[P("1 Epigastric","epigastric"),P("2 Umbilical","umbilical"),P("3 Incisional","incisional"),P("4 Spigelian","spigelian"),P("5 Inguinal","inguinal"),P("6 Femoral","femoral")]}),
  B("27.2 Two risk factors.",2,{tags:["img"],
   ans:"<b>เพิ่ม intra-abdominal pressure</b>: ไอเรื้อรัง (COPD, สูบบุหรี่), ท้องผูกเบ่ง, BOO/BPH เบ่งปัสสาวะ, ยกของหนัก, ascites, ตั้งครรภ์, อ้วน · <b>ผนังหน้าท้องอ่อนแอ</b>: อายุมาก, collagen disorder, สูบบุหรี่, เคยผ่าตัด (incisional: wound infection, อ้วน, เบาหวาน, steroid), patent processus vaginalis (เด็ก — indirect inguinal), ทารกคลอดก่อนกำหนด (umbilical/inguinal)",
   rubric:"ได้ = 2 ข้อที่ถูก",
   pts:[G("Risk factors (2)",2,P("ไอเรื้อรัง/สูบบุหรี่","ไอ","cough","copd","บุหรี่","smok"),P("ท้องผูก/เบ่ง","ท้องผูก","constipat","เบ่ง","strain"),P("BPH/เบ่งปัสสาวะ","bph","prostat","ปัสสาวะ"),P("ยกของหนัก","ยกของ","lift"),P("อ้วน/ascites/ตั้งครรภ์","อ้วน","obes","ascites","ท้องมาน","pregnan","ตั้งครรภ์"),P("อายุมาก/collagen/เคยผ่าตัด/wound infection","อายุ","age","collagen","ผ่าตัด","infection","diabet","steroid"))]})
 ),
 interp:"จำตำแหน่งไส้เลื่อนผนังหน้าท้อง 6 ชนิด และปัจจัยเสี่ยง (ความดันในช่องท้องสูง + ผนังอ่อนแอ)",
 summary:["Epigastric (linea alba เหนือสะดือ), umbilical, incisional, Spigelian (semilunar line), inguinal (เหนือ ligament), femoral (ใต้ ligament)","Femoral: หญิงสูงอายุ เสี่ยง strangulation สูงสุด","Risk: ไอเรื้อรัง ท้องผูก BPH ยกของ อ้วน ascites + ผนังอ่อนแอ/ผ่าตัดเดิม"]}),

/* ===== OSCE 28 ===== */
Co({page:9,orig:"28",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a lesion in front of the ear",
 img:["os79c_28"],kimg:["os79c_k28"],imgNote:"ภาพถ่ายหูและบริเวณหน้าหูของผู้หญิง",
 stem:`A photograph of the area in front of the ear is shown.<br>1. What is the diagnosis?<br>2. What is the curative treatment?`,
 gray:"28 1. Diag 2. Tx ให้หายขาด · ช่องเฉลย: \"Preauricular pit · Sinus tract excision?\"",
 notes:"เฉลยในไฟล์ (หน้า 20): Preauricular pit · Sinus tract excision? (ผู้เฉลยใส่เครื่องหมาย ? ไม่แน่ใจ)",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): เห็นด้วยกับคีย์ (Preauricular pit · Sinus tract excision) — ไม่ต้องใส่ ? · รูปในไฟล์: บวมแดงหน้า crus ของ helix = <b>infected preauricular sinus</b> · ระยะติดเชื้อ: ATB ± I&amp;D → เมื่อการอักเสบสงบ <b>complete excision of the sinus tract</b> (supra-auricular/extended approach เอา cartilage ที่ติดออกด้วย ลด recurrence) · คงคำตอบเดิม · แหล่งตัดสิน: Cummings Otolaryngology 7e (congenital ear anomalies) + systematic review supra-auricular vs simple sinectomy · ความมั่นใจ: สูง",
 parts:S(
  B("28.1 Diagnosis.",2,{tags:["img"],key:"ไฟล์: Preauricular pit",
   ans:"<b>Preauricular sinus (pit)</b> — ในรูปมีการ<b>อักเสบ/บวม (infected preauricular sinus/abscess)</b> หน้า crus ของ helix · เป็นความผิดปกติแต่กำเนิดจากการเชื่อมกันไม่สมบูรณ์ของ 6 hillocks of His (1st/2nd branchial arch) · มักไม่มีอาการ อาจมีหนอง/กลิ่น · แยกจาก first branchial cleft anomaly (ใกล้ parotid, ทางเปิดใต้ติ่งหู/ในช่องหู)",
   pts:[CR(P("Preauricular sinus / pit","preauricular","pre-auricular"))]}),
  B("28.2 Curative treatment.",3,{tags:["img"],key:"ไฟล์: Sinus tract excision?",
   ans:"ระยะติดเชื้อ: antibiotics (ครอบคลุม S. aureus) ± incision and drainage ของ abscess → เมื่อการอักเสบสงบ (~6 สัปดาห์) → <b>complete surgical excision of the sinus tract</b> (ทั้ง tract และกิ่งก้าน รวมถึง cartilage ของ helix ที่ติด — supra-auricular approach ลด recurrence) · ไม่มีอาการ → ไม่ต้องผ่าตัด สังเกต",
   rubric:"ได้ = complete excision ของ sinus tract (ทำเมื่อไม่อักเสบ)",
   pts:[CR(P("Complete excision of sinus tract","excision","excise","ตัด")),P("รักษาการติดเชื้อก่อน (antibiotic ± I&D)","antibiotic","ยาปฏิชีวนะ","drain","i&d","incision","อักเสบสงบ")]})
 ),
 interp:"Infected preauricular sinus → antibiotic/drain → complete excision เมื่ออักเสบสงบ",
 summary:["Preauricular sinus: หน้า helix crus จาก hillocks of His","มีอาการซ้ำ/ติดเชื้อ → excision ทั้ง tract (supra-auricular approach)","ระยะติดเชื้อ: antibiotic ± I&D ก่อน","แยก first branchial cleft anomaly"]}),

/* ===== OSCE 29 ===== */
Co({page:10,orig:"29",topic:"img",sub:"Acute abdomen series",title:"Abdominal radiographs — two views: description, diagnosis and treatment",
 img:["os79c_29a","os79c_29b"],kimg:["os79c_k29"],imgNote:"ภาพที่ 1: ภาพรังสีช่องท้องท่านอนหงาย · ภาพที่ 2: ภาพรังสีช่องท้องท่ายืน (มีป้าย Patient standing)",
 stem:`Two abdominal radiographs are shown.<br>1. Which view is film 1 and which is film 2? Describe what you see in films 1 and 2.<br>2. Give one diagnosis.<br>3. How would you treat this patient?`,
 gray:"29 1. รูป แรกคือแนวไหน รูปสอง คือแนวไหน + เห็นอะไรบ้างในรูป 1,2 2. Dx 1 โรค 3. Tx อะไร · ช่องเฉลย: Supine: multiple small bowel loop dilatation, Large bowel dilatation, absent of air in distal colon descending sigmoid and rectum · Upright: multiple air fluid level in the same loop small intestine, air fluid level in colon · Colonic obstruction · NG, NPO, correct e'lyte · Fluid resuscitation with LR",
 notes:"เฉลยในไฟล์ (หน้า 21) ครบทุกข้อย่อย",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง — ฟิล์มเข้ากับ large bowel obstruction (colon โป่ง ไม่มีลมใน distal colon/rectum) ที่ ileocecal valve ไม่ competent จึงมี small bowel โป่งด้วย; การรักษาในไฟล์เป็น initial resuscitation ควรเพิ่ม: หาสาเหตุ (CT — มะเร็ง colon/volvulus) และ definitive treatment",
 parts:S(
  B("29.1 Views and description.",4,{tags:["img"],key:"ไฟล์: Supine — SB loops dilated, large bowel dilated, no air in distal colon/sigmoid/rectum · Upright — multiple air-fluid levels in SB, air-fluid level in colon",
   ans:"<b>Film 1 = supine (AP) abdomen</b>: small bowel loops โป่งหลายห่วง (valvulae conniventes ตลอดความกว้าง, อยู่กลางท้อง) + <b>large bowel โป่ง</b> (haustra ไม่ตลอดความกว้าง อยู่รอบนอก) และ<b>ไม่มีลมใน descending colon, sigmoid และ rectum</b> · <b>Film 2 = upright (erect) abdomen</b>: <b>multiple air-fluid levels</b> ใน small bowel (ระดับต่างกันในห่วงเดียวกัน = step-ladder) และ air-fluid level ใน colon · ไม่มี free air ใต้กระบังลม",
   rubric:"ได้ = ระบุ supine/upright ถูก + SB และ LB dilatation + ไม่มีลมส่วนปลาย + air-fluid levels",
   pts:[CR(P("Film 1 supine · film 2 upright/erect","supine","นอนหงาย","upright","erect","ยืน")),P("Small bowel dilatation","small bowel","valvulae","ลำไส้เล็ก"),CR(P("Large bowel dilatation + no distal colon/rectal gas","large bowel","colon","haustra","rectum","no gas","absent","ไม่มีลม")),P("Multiple air-fluid levels","air.?fluid","fluid level","step")]}),
  B("29.2 One diagnosis.",2,{tags:["img"],key:"ไฟล์: Colonic obstruction",
   ans:"<b>Large bowel (colonic) obstruction</b> (ระดับ distal transverse/descending colon) — ileocecal valve incompetent จึงมีลมย้อนเข้า small bowel · สาเหตุที่พบบ่อย: <b>colorectal carcinoma</b> (บ่อยสุดในผู้ใหญ่), volvulus, diverticular stricture · DDx: pseudo-obstruction (Ogilvie) — ต้อง contrast enema/CT แยก",
   pts:[CR(P("Large bowel / colonic obstruction","large bowel","colonic","colon obstruction","\\blbo\\b"))]}),
  B("29.3 Treatment.",4,{tags:["img"],key:"ไฟล์: NG, NPO, correct e'lyte · Fluid resuscitation with LR",
   ans:"<b>Resuscitation</b>: NPO, <b>NG decompression</b>, IV fluid (LR/NSS) แก้ dehydration และ electrolyte (K), Foley catheter + I/O · ตรวจ CBC, BUN/Cr, electrolytes, lactate · <b>CT abdomen with contrast</b> หาสาเหตุ/ระดับ/ภาวะแทรกซ้อน (ischemia, perforation — cecum &gt;10–12 cm เสี่ยงแตก) · <b>Definitive</b>: obstructing left colon cancer → resection (Hartmann หรือ resection + primary anastomosis ± diverting stoma) หรือ <b>colonic stent as bridge to surgery</b>, หรือ diverting colostomy · sigmoid volvulus → endoscopic detorsion · peritonitis/perforation/closed loop → emergency laparotomy",
   rubric:"ได้ = NPO + NG + IV fluid/electrolyte + หาสาเหตุ/definitive",
   pts:[CR(P("NPO + NG decompression","npo","\\bng\\b","nasogastric","งดน้ำงดอาหาร","decompress")),CR(P("IV fluid (LR) + correct electrolyte","fluid","\\blr\\b","ringer","electrolyte","e'lyte","น้ำเกลือ")),P("CT หาสาเหตุ","\\bct\\b","computed"),P("Definitive: resection / stent / colostomy / detorsion","resect","stent","colostomy","hartmann","detorsion","laparotomy","ผ่าตัด")]})
 ),
 interp:"Acute abdomen series: supine + upright → large bowel obstruction → resuscitate + CT + definitive",
 summary:["Supine: บอก dilatation และการกระจายลม · Upright: air-fluid levels, free air","SB: กลางท้อง valvulae เต็มความกว้าง · LB: รอบนอก haustra","LBO สาเหตุ: CRC &gt; volvulus &gt; diverticular","NPO, NG, IV fluid, electrolyte → CT → stent/resection/stoma"]}),

/* ===== OSCE 30 ===== */
Co({page:11,orig:"30",topic:"img",sub:"Chest X-ray",title:"Neonatal chest radiograph — diagnosis and treatment",
 img:["os79c_30"],kimg:["os79c_k30"],imgNote:"ภาพเอกซเรย์ทรวงอกและช่องท้องทารกแรกเกิด มีป้าย R",
 stem:`A newborn has respiratory distress. The chest radiograph is shown.<br>1. What is the diagnosis?<br>2. How would you treat this infant?`,
 gray:"30 1. Diagnosis 2. Tx · ช่องเฉลย: Left side diaphragmatic hernia · Supportive treatment: ETT (don't use bag mask ventilation) + OG decompression + IV fluid with crystalloid and correct e'lyte · Definitive: diaphragmatic repair once stable",
 notes:"เฉลยในไฟล์ (หน้า 22) ครบ · stem เติม \"newborn has respiratory distress\" (ไฟล์ให้แค่ภาพ)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("30.1 Diagnosis.",2,{tags:["img"],key:"ไฟล์: Left side diaphragmatic hernia",
   ans:"<b>Left congenital diaphragmatic hernia (Bochdalek)</b> — ห่วงลำไส้ที่มีลม (bubbly lucencies) อยู่ใน hemithorax ซ้าย, ไม่เห็นเงากระบังลมซ้าย, <b>mediastinum/หัวใจถูกดันไปขวา</b>, ปอดซ้ายเล็ก (pulmonary hypoplasia), ช่องท้องมีลมน้อย (scaphoid abdomen) · ยืนยันตำแหน่ง NG/OG ปลายขดอยู่ในอกได้",
   pts:[CR(P("Congenital diaphragmatic hernia (left)","diaphragmatic hernia","\\bcdh\\b","bochdalek","ไส้เลื่อนกระบังลม"))]}),
  B("30.2 Treatment.",4,{tags:["img"],key:"ไฟล์: Supportive — ETT (don't use bag-mask) + OG decompression + IV crystalloid + correct e'lyte · Definitive — diaphragmatic repair once stable",
   ans:"<b>Resuscitation/supportive</b>: <b>immediate endotracheal intubation — ห้าม bag-mask ventilation</b> (ลมเข้ากระเพาะ/ลำไส้ในอก กดปอดมากขึ้น) · gentle ventilation (permissive hypercapnia, PIP &lt;25 cmH2O, preductal SpO2 ≥85%) · <b>OG/NG decompression</b> (continuous suction) · IV access (umbilical lines), crystalloid + แก้ electrolyte/glucose, ยาระงับประสาท · รักษา pulmonary hypertension (iNO, ± ECMO) · <b>Definitive</b>: <b>surgical repair of the diaphragm</b> (primary หรือ patch) เมื่อผู้ป่วย<b>คงที่ทาง physiology</b> (ไม่ใช่ผ่าตัดฉุกเฉินทันที — delayed repair หลัง stabilize 24–72 ชม.)",
   exp:"Prenatal: lung-to-head ratio (LHR), liver up ทำนายพยากรณ์ · FETO ในรายรุนแรง · Bochdalek (posterolateral, ซ้าย 85%) · Morgagni (anteromedial, retrosternal)",
   rubric:"ได้ = intubate ห้าม bag-mask + OG + IV fluid + delayed repair เมื่อ stable",
   pts:[CR(P("Intubation — ห้าม bag-mask","intubat","\\bett\\b","endotracheal","bag.?mask","ห้าม")),CR(P("OG/NG decompression","\\bog\\b","\\bng\\b","orogastric","nasogastric","decompress")),P("IV fluid / electrolyte / PPHN management","fluid","crystalloid","electrolyte","e'lyte","nitric","\\bino\\b","ecmo","pulmonary hypertension"),CR(P("Delayed surgical repair เมื่อ stable","repair","ซ่อม","stable","delay"))]})
 ),
 interp:"Left CDH: intubate (ห้าม bag-mask) + OG + supportive → delayed repair เมื่อ stable",
 summary:["CDH ซ้าย (Bochdalek) พบบ่อยสุด · ลำไส้ในอก mediastinal shift ไปขวา scaphoid abdomen","ห้าม bag-mask · intubate ทันที + OG decompression","Gentle ventilation, รักษา PPHN (iNO, ECMO)","Repair เมื่อ stable (ไม่ใช่ทันที)"]}),

);
})();

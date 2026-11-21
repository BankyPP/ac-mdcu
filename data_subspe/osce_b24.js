(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "AC OSCE+MEQ Sx MDCU75 Rotate D" → MDCU75 RoD (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO75DQ = AC_75D_OSCEMEQ_Sx_MDCU75_Rotate_D.pdf (5 หน้า) · OSCE 4 นาที × 12 สถานี (จดได้ 11) · MEQ/SEQ 3 นาที × 13 ข้อ (จดได้ 6) → sec "Short Answers"
   ไฟล์เฉลย SO75DK = Key_75D_OSCE_Solution…by_PAOPAO_MDCU76.pdf (2 หน้า ลายมือเฉพาะพาร์ท MEQ) — ครอป os75d_km<n> · พาร์ท OSCE ไม่มีเฉลย */
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
const KF="ไฟล์ Key 75D (PAOPAO): ";
const Co=o=>Object.assign({set:"MDCU75",ro:"RoD",file:"SO75DQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:1,orig:"1",topic:"inst",sub:"Surgical instrument",title:"Instruments — name and use",
 stem:`Five items are on the table: a Deaver retractor, an Allis clamp, a Kocher clamp, curved Mayo scissors and a Penrose drain.<br>1. Name each item and state what it is used for.`,
 gray:"OSCE อุปกรณ์ผ่าตัด ชื่อ + เอาไว้ทำอะไร — Deaver retractor · Allis clamp · Kocher clamp · Curved Mayo scissors · Penrose drain",
 imgAlt:"เครื่องมือ 5 ชิ้นวางบนโต๊ะ",flag:NOIMG,
 notes:"ไม่มีเฉลยพาร์ท OSCE ในไฟล์ Key 75D",
 opinion:"ไฟล์ไม่มีเฉลย — Claude เฉลย ความมั่นใจสูง",
 parts:S(
  B("1.1 Name and use.",10,{tags:["inst"],ans:"<b>Deaver retractor</b>: hand-held retractor ปากโค้งกว้าง รั้งผนังหน้าท้อง/อวัยวะลึก · <b>Allis clamp</b>: ปากมีฟันเล็กหลายซี่ จับขอบเนื้อเยื่อ/fascia/bowel wall ที่จะตัดทิ้ง (traumatic เล็กน้อย) · <b>Kocher clamp</b>: มีฟันใหญ่ที่ปลาย จับเนื้อเยื่อเหนียว (fascia) · <b>Curved Mayo scissors</b>: ตัดเนื้อเยื่อหนา (fascia, muscle) · <b>Penrose drain</b>: soft latex passive drain ระบายของเหลวจากแผล/ใช้คล้อง (sling) โครงสร้าง เช่น spermatic cord",exp:"Penrose = passive open drain",rubric:"2 คะแนน/ชิ้น",
   pts:[P("Deaver: retract","deaver","retract"),P("Allis: grasp tissue edges","allis","grasp","จับ"),P("Kocher: toothed, tough tissue","kocher","tooth","fascia"),P("Curved Mayo: cut heavy tissue","mayo","cut","ตัด"),CR(P("Penrose: passive drain / sling","penrose","drain","sling"))]})
 ),
 interp:"Surgical instruments",
 summary:["Allis vs Babcock: Allis มีฟันเล็ก, Babcock ไม่มีฟัน","Kocher: toothed tip","Penrose: passive drain"]}),

/* ===== OSCE 2 ===== */
Co({page:1,orig:"2",topic:"suture",sub:"Suture material",title:"Suture materials in hernioplasty",
 stem:`Read the operative note of an open inguinal hernioplasty and choose the material for each blank from: silk (a loose strand), Vicryl, catgut, Prolene and nylon packets. For each answer give the packet, brand name, generic name, mono- or multifilament, and absorbable or non-absorbable.<br>1. The mesh is made of ____.<br>2. The external oblique aponeurosis is closed with ____.<br>3. A bleeding vessel during closure is ligated with ____.<br>4. The skin is closed with this technique (name it) using ____.`,
 gray:"OSCE ไหม ใน Hernioplasty (กระดาษโจทย์เป็น paragraph ยาว) - mesh ทำมาจาก ___ - เย็บ aponeurosis(?) ด้วย ___ - ตอนเย็บปิดมี bleed จึง ligate with ___ - เย็บปิด skin แบบนี้ (ตอบด้วยว่า simple interrupt) ด้วย ___ · Choice ไหมมีแต่ซองกับยี่ห้อ ยกเว้นเส้น silk โง่ๆ 1 เส้น (ตอบซองหมายเลขอะไร ชื่อ brand, generic name, mono/multifilament, absorbable/nonabsorbable): Silk Vicryl Catgut Prolene Nylon",
 imgAlt:"ซองไหม Vicryl, catgut, Prolene, nylon และไหม silk 1 เส้น",flag:NOIMG,
 notes:"ไม่มีเฉลยพาร์ท OSCE ในไฟล์ Key 75D · ข้อคล้ายกับ 74A OSCE 7",
 opinion:"ไฟล์ไม่มีเฉลย — Claude เฉลย ความมั่นใจปานกลาง (การเลือกไหมขึ้นกับศัลยแพทย์)",
 parts:S(
  B("2.1 Mesh.",2,{tags:["suture"],ans:"<b>Polypropylene (Prolene mesh)</b> — monofilament, non-absorbable (ยึด mesh ด้วย Prolene 2-0)",rubric:"ได้",pts:[CR(P("Polypropylene / Prolene","polypropylene","prolene"))]}),
  B("2.2 Aponeurosis.",2,{tags:["suture"],ans:"<b>Vicryl (polyglactin 910)</b> 2-0 — braided multifilament, absorbable",rubric:"ได้",pts:[CR(P("Vicryl / polyglactin","vicryl","polyglactin")),P("Braided absorbable","braid","absorb")]}),
  B("2.3 Ligating a bleeding vessel.",2,{tags:["suture"],ans:"<b>Silk</b> free tie (เส้นเดียวที่ให้มา) — natural, braided, non-absorbable (หรือ catgut/Vicryl ก็ใช้ได้)",rubric:"ได้",pts:[CR(P("Silk tie","silk")),P("Non-absorbable braided","non-?absorb","braid")]}),
  B("2.4 Skin closure.",2,{tags:["suture"],ans:"<b>Simple interrupted</b> ด้วย <b>nylon (Ethilon)</b> — monofilament, non-absorbable",rubric:"ได้",pts:[CR(P("Simple interrupted with nylon","simple","interrupt","nylon","ethilon"))]})
 ),
 interp:"Hernioplasty sutures",
 summary:["Lichtenstein: polypropylene mesh fixed with Prolene","Aponeurosis: absorbable (Vicryl)","Skin: nylon or subcuticular absorbable"]}),

/* ===== OSCE 3 ===== */
Co({page:2,orig:"3",topic:"inst",sub:"Tube/Catheter",title:"Foley catheter — identify and insert",
 stem:`A two-way size 16 Foley catheter is on the table.<br>1. What is this and what size is it?<br>2. Describe the steps for using it.`,
 gray:"OSCE URO มี Foley 2 way เบอร์ 16 วางไว้ - สิ่งนี้คืออะไร ขนาดเท่าไหร่ - ขั้นตอนวิธีการใช้สิ่งนี้",
 imgAlt:"สาย Foley 2 ทาง 16 Fr",flag:NOIMG,
 notes:"ไม่มีเฉลยพาร์ท OSCE ในไฟล์ Key 75D · ข้อคล้ายกับ 75C OSCE 8",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Name and size.",2,{tags:["inst"],ans:"<b>2-way Foley catheter 16 Fr</b> (French = เส้นรอบวง mm)",rubric:"ได้",pts:[CR(P("Foley 16 Fr","foley","16"))]}),
  B("3.2 Steps.",6,{tags:["inst","proc"],ans:"อธิบาย/ขอ consent · เตรียมชุด sterile, test balloon · ล้างมือ ใส่ sterile glove · ทำความสะอาด (ชาย: retract foreskin, จับองคชาตตั้ง) · ใส่ <b>lidocaine gel</b> · สอดสายจนสุด · <b>รอ urine ไหล</b> แล้วเป่า balloon ด้วย <b>sterile water 10 mL</b> · ดึงกลับ · ต่อถุงปิด · <b>ดึง foreskin กลับ</b> · ติดเทป · บันทึก",rubric:"ได้ตามข้อ",pts:[CR(P("Sterile technique","steril","aseptic")),P("Lubricant / lidocaine gel","lidocaine","gel","lubric"),CR(P("Inflate after urine flow","urine","ไหล")),P("Sterile water balloon, reposition foreskin, secure","water","foreskin","tape","secure")]})
 ),
 interp:"Urethral catheterization",
 summary:["Inflate after urine","Contraindication: blood at meatus","Reposition foreskin"]}),

/* ===== OSCE 4 ===== */
Co({page:2,orig:"4",topic:"inst",sub:"Ostomy appliance",title:"Ostomy appliance — identify and indications",
 stem:`A picture of an ostomy baseplate and pouch is shown.<br>1. What is this?<br>2. Name two diseases/conditions with the operation that would require this device (four answers in total).`,
 gray:"OSCE COLO ให้รูป ostomy baseplate + pouch - ถามว่าคืออะไร - บอกชื่อภาวะ/โรค + ชื่อ operation ที่ทำให้ต้องใช้สิ่งนี้ 2 อย่าง (ตอบ 4 อย่าง)",
 imgAlt:"แป้น (baseplate/flange) และถุงเก็บอุจจาระ (pouch) แบบ two-piece",flag:NOIMG,
 notes:"ไม่มีเฉลยพาร์ท OSCE ในไฟล์ Key 75D",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Name.",2,{tags:["inst"],ans:"<b>Two-piece ostomy appliance</b> (baseplate/flange + colostomy/ileostomy pouch)",rubric:"ได้",pts:[CR(P("Ostomy bag / appliance","ostomy","stoma","colostomy","pouch"))]}),
  B("4.2 Two conditions with operations.",4,{tags:["inst"],ans:"เช่น <b>Low rectal cancer → abdominoperineal resection</b> (end colostomy) · <b>Perforated sigmoid diverticulitis/sigmoid volvulus → Hartmann procedure</b> (end colostomy) · <b>Low anterior resection → diverting loop ileostomy</b> · <b>FAP/ulcerative colitis → total proctocolectomy with end ileostomy</b> · <b>Anorectal malformation → diverting colostomy</b>",rubric:"1/คำตอบ (โรค + ผ่าตัด)",pts:[P("Rectal cancer — APR","rectal","apr","abdominoperineal"),P("Diverticulitis/volvulus — Hartmann","hartmann","diverticul","volvulus"),P("LAR — diverting ileostomy","lar","diverting","loop"),P("UC/FAP — proctocolectomy","proctocolectomy","ulcerative","fap"),P("Anorectal malformation — colostomy","anorectal malform","imperforate")]})
 ),
 interp:"Stoma appliances",
 summary:["End colostomy: APR, Hartmann","Loop ileostomy: protect low anastomosis","Ileostomy output liquid → skin protection"]}),

/* ===== OSCE 5 ===== */
Co({page:2,orig:"5",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Hand hygiene and dry dressing",
 stem:`The examiner is observing.<br>1. Perform hand hygiene with alcohol gel according to WHO and put on disposable gloves.<br>2. Perform a dry dressing on a sutured wound of a patient 1 day after lipoma excision. Cotton balls, gauze, normal saline and chlorhexidine are provided.`,
 gray:"OSCE ทำแผล 1. ให้แสดงวิธีการล้างมือโดยใช้เจลแอลกอฮอล์ตามแบบ WHO และใส่ถุงมือ disposable 2. แสดง dry dressing จากแผลที่เย็บมาแล้ว มีหุ่นให้ทำแผลคนไข้หลังผ่า lipoma 1 วัน แบบ dry dressing · อาจารย์เตรียม สำลี ก๊อซ น้ำเกลือ chlorhexidine ให้แล้ว",
 notes:"ไม่มีเฉลยพาร์ท OSCE ในไฟล์ Key 75D",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Hand rub and gloves.",3,{tags:["proc"],ans:"WHO 6 steps 20–30 วินาที ปล่อยแห้ง · ใส่ disposable glove",rubric:"ได้",pts:[CR(P("WHO 6 steps","6","six","ฝ่ามือ","thumb","fingertip")),P("Disposable gloves","glove","ถุงมือ")]}),
  B("5.2 Dry dressing.",7,{tags:["proc"],ans:"แนะนำตัว อธิบาย · ถอดแผ่นปิดแผลเก่า (ทิ้ง) ประเมินแผล (แดง บวม ซึม หนอง) · เปลี่ยนถุงมือ/ใช้ forceps แบบ no-touch · เช็ดแผลด้วย NSS/antiseptic <b>จากแผลออกด้านนอก</b> (inside → out) ครั้งเดียวต่อสำลี 1 ก้อน · เช็ดแผลที่เย็บแล้วจาก<b>สะอาดไปสกปรก</b> · ซับแห้ง · ปิด gauze แห้ง ติดเทป · ทิ้งขยะติดเชื้อ ล้างมือ · แนะนำผู้ป่วย",exp:"Dry dressing = แผลเย็บปิด ไม่มี discharge",rubric:"ได้ตามขั้น",pts:[P("Remove old dressing and inspect wound","inspect","ประเมิน","remove"),CR(P("Clean from wound outward, one swab per stroke","outward","inside","ด้านนอก","one stroke","ครั้งเดียว")),P("No-touch with forceps","forcep","no-?touch"),P("Dry gauze cover, dispose, advise","gauze","cover","dispose","advice","แนะนำ")]})
 ),
 interp:"Wound dressing",
 summary:["Clean to dirty, inside to outside","One swab one stroke","Assess wound at each change"]}),

/* ===== OSCE 6 ===== */
Co({page:2,orig:"6",topic:"pe",sub:"Anorectal",ex:1,title:"Per rectal examination and proctoscopy — painless rectal bleeding",
 stem:`A foreign patient who speaks Thai presents with painless bleeding per rectum. The examiner is observing.<br>1. Show how you would prepare and position the patient at the OPD, then perform a digital rectal examination on the model, reporting your findings.<br>2. A proctoscopic picture is shown. What is the diagnosis?`,
 gray:"OSCE COLO จัดท่า PR (อาจารย์จี้แรงมาก) สถานการณ์คนไข้ฝรั่งพูดไทยได้ painless bleeding per rectum ให้แสดงการตรวจร่างกายแบบที่ OPD (ขึ้นเตียงจัดผ้า เรียกคนที่ 3 จำลองส่องไฟ) แต่ให้มา PR หุ่น (ใส่ถุงมือ KY แค่ไหน แง้มตูด ดูตูด ให้เบ่ง สอดนิ้ว คลำดูอะไรบ้าง ขมิบก่อนออก ดูอึ อึเป็นเลือดปนขี้ แล้วจะ procto อยู่มั้ย) · Procto ไปเห็นตามรูปในกระดาษนี้ -> dx อะไร (thrombosed internal hemorrhoid แทบทุกหัว)",
 imgAlt:"ภาพจาก proctoscope เห็น internal hemorrhoid หลายหัวสีม่วงคล้ำบวม",flag:NOIMG,
 notes:"ไม่มีเฉลยพาร์ท OSCE ในไฟล์ Key 75D · ผู้จดบอกว่าอาจารย์ดูละเอียดมาก",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 Preparation, position and DRE.",8,{tags:["pe"],ans:"แนะนำตัว อธิบาย ขอ consent · <b>มี chaperone</b> (คนที่ 3) · จัดท่า <b>left lateral (Sims)</b> เข่างอชิดอก ห่มผ้าเปิดเฉพาะก้น · ส่องไฟ ใส่ถุงมือ หล่อลื่นนิ้ว · <b>inspection</b>: แหวกก้นดู perianal (skin tag, fissure, external hemorrhoid, fistula, prolapse) ให้เบ่ง · สอดนิ้วช้า ๆ ประเมิน <b>sphincter tone</b> (ให้ขมิบ) · คลำรอบ 360° (mass, tenderness), prostate/cervix · ถอนนิ้วดู <b>อุจจาระ/เลือด/มูก</b> ที่ถุงมือ · เช็ดทำความสะอาด แจ้งผล · พิจารณา proctoscopy",rubric:"สัดส่วนตามขั้น",pts:[P("Consent and chaperone","consent","chaperone","คนที่ 3"),CR(P("Left lateral position","left lateral","sims","ตะแคงซ้าย")),P("Inspection ± strain","inspect","strain","เบ่ง"),P("Sphincter tone and 360° palpation","tone","sphincter","360","ขมิบ"),P("Examine glove for stool/blood","glove","stool","อุจจาระ","blood")]}),
  B("6.2 Proctoscopic diagnosis.",2,{tags:["pe"],ans:"<b>Thrombosed (prolapsed) internal hemorrhoids</b>",rubric:"ได้",pts:[CR(P("Internal hemorrhoids","hemorrhoid","ริดสีดวง"))]})
 ),
 interp:"Hemorrhoids on proctoscopy",
 summary:["Left lateral, chaperone","Inspect → DRE → glove","Internal hemorrhoid: above dentate, painless bleeding"]}),

/* ===== OSCE 7 ===== */
Co({page:3,orig:"7",topic:"proc",sub:"Local anesthesia",ex:1,proc:1,title:"Local anesthesia and simple interrupted suture",
 stem:`A wound model, one syringe, 24G and 18G needles and vials of lidocaine with and without adrenaline are provided. The examiner is observing.<br>1. Demonstrate local anesthetic infiltration.<br>2. Close the wound with two simple interrupted stitches tied by instrument tie.`,
 gray:"OSCE เย็บแผล - จงแสดงการฉีดยาชา (มี syringe เดียว เข็ม 24 18 ขวด lidocaine with/without มีหมด ให้ดูดลมแทนแทงขวดจริง ไปฉีดลมใส่แผล) - จงแสดงการเย็บ simple 2 เข็ม ผูกปมแบบ surgical technique with instrument (แนวแผลวางจากใกล้ไปไกลตัว เข็มใหญ่ 3/8 ไหม 3-0 ลื่น holder ไม่ดี ส่วนใหญ่เย็บไม่ทัน)",
 notes:"ไม่มีเฉลยพาร์ท OSCE ในไฟล์ Key 75D",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("7.1 Local anesthesia.",4,{tags:["proc"],ans:"เลือก <b>1% lidocaine</b> (with adrenaline ถ้าไม่ใช่บริเวณปลายอวัยวะที่ห้าม) · ตรวจชื่อยา/ความเข้มข้น/วันหมดอายุ · ดูดยาด้วยเข็ม <b>18G</b> เปลี่ยนเป็น <b>24–25G</b> ฉีด · ไล่อากาศ · ทำความสะอาดผิว · แทงผ่านขอบแผล (ไม่แทงผิวที่สะอาด) · <b>aspirate ก่อนฉีด</b> · ฉีดช้า ๆ ตลอดแนวแผล · รอ 2–5 นาที ทดสอบความชา · max dose 4.5 mg/kg (7 mg/kg with adrenaline)",rubric:"ได้",pts:[P("Check drug, draw with 18G, inject with 24G","18","24","check"),CR(P("Aspirate before injecting","aspirat","ดูดกลับ")),P("Inject through wound edges slowly","edge","ขอบแผล","slow"),P("Maximum dose","4.5","7 mg","max")]}),
  B("7.2 Two simple interrupted stitches.",6,{tags:["proc"],ans:"จับ needle holder ที่ ⅓ ท้ายเข็ม · แทงตั้งฉาก ระยะเท่ากันสองข้าง ลึกเท่ากัน · instrument tie: ปมแรก 2 รอบ แล้วกลับทิศ ≥2 ปม · ปมอยู่ข้างแผล · ขอบแผลชนพอดี ไม่รัดแน่น · ตัดไหมเหลือ ~5 mm",rubric:"ได้",pts:[CR(P("Perpendicular entry, equal bites","perpendic","90","equal")),CR(P("Secure instrument-tied square knots","knot","square","ปม")),P("Edges apposed, not strangulated","appos","evert","ไม่แน่น")]})
 ),
 interp:"LA + suturing",
 summary:["Lidocaine max 4.5 mg/kg, 7 mg/kg with adrenaline","Aspirate before injection","Inject through wound edges"]}),

/* ===== OSCE 8 ===== */
Co({page:3,orig:"8",topic:"pe",sub:"DRE/Prostate",title:"DRE on a prostate model",
 stem:`A prostate examination model with a lax anal sphincter, gloves and lubricant is on the table. No examiner is present.<br>1. Describe your findings (8 marks).<br>2. What is the most likely diagnosis (2 marks)?`,
 gray:"OSCE DRE ดู prostate หุ่นฝึกคลำ prostate ที่เสีย sphincter tone ไปนานแล้ว ตั้งอยู่บนโต๊ะ มีถุงมือ KY ให้ตรวจเองหมด ให้บรรยายสิ่งที่เจอ 8 คะแนน คิดว่า dx อะไร 2 คะแนน (เจอเป็นแข็งๆ ขรุขระนิดนึง โตเยอะที่ apex ล่างสุด ห่างจาก sphincter ซักเซนกว่า ขนาดซัก 3 × ยาว 4 cm)",
 notes:"ไม่มีเฉลยพาร์ท OSCE ในไฟล์ Key 75D · ลักษณะที่ผู้จดคลำได้: แข็ง ขรุขระ โตที่ apex ขนาด ~3 × 4 cm",
 opinion:"ความมั่นใจปานกลาง (ขึ้นกับหุ่น)",
 parts:S(
  B("8.1 Describe findings.",8,{tags:["pe"],ans:"Anal sphincter tone (หุ่น: หลวม) · prostate ขนาด ~3 × 4 cm (โตเล็กน้อย) · <b>consistency แข็ง (hard)</b> · <b>surface ขรุขระ (nodular/irregular)</b> โดยเฉพาะที่ <b>apex</b> · median sulcus (ชัด/หายไป) · mobility ของ rectal mucosa เหนือ prostate · tenderness ไม่มี · ถุงมือ (เลือด/อุจจาระ)",rubric:"1–2/ประเด็น",pts:[P("Sphincter tone","tone","sphincter"),P("Size","size","ขนาด","cm"),CR(P("Hard consistency","hard","แข็ง")),CR(P("Irregular/nodular surface","irregular","nodul","ขรุขระ")),P("Median sulcus","sulcus"),P("Mucosal mobility / tenderness","mobil","tender")]}),
  B("8.2 Diagnosis.",2,{tags:["pe"],ans:"<b>Carcinoma of the prostate</b> (hard irregular nodular gland)",rubric:"ได้",pts:[CR(P("Prostate cancer","cancer","carcinoma","ca"))]})
 ),
 interp:"Hard nodular prostate",
 summary:["BPH: smooth, rubbery, median sulcus present","CA: hard, nodular, obliterated sulcus","Prostatitis: tender, boggy"]}),

/* ===== OSCE 9 ===== */
Co({page:3,orig:"9",topic:"hx",sub:"Hematemesis/UGIB",ex:1,title:"History taking — hematemesis with syncope",
 stem:`A 55-year-old woman vomited blood and fainted 1 hour before arrival. Take a history from her relative (simulated), then tell the examiner which investigations you would send.`,
 gray:"OSCE ซักประวัติ GenSx ป้า 55 y อ้วกเลือด จนสลบ 1 h PTA ให้ซักญาติ (แสดงโดยพี่เลขา) แล้วให้หันมาบอกอาจารย์ว่าจะส่ง investigate อะไรบ้าง · ป้าอ้วก 1 กระโถนแดงล้วนไม่มี coffee ground ไม่มีมูก ไม่เคยอ้วกแบบนี้มาก่อน อ้วกครั้งนั้นสลบดมยาดมแปปๆ ก็กลับมาโอเค ไม่มีอ้วกอีกระหว่างทาง ไม่ได้ใช้ยา ไม่มีโรคประจำตัวอะไร ไม่ใช้ยาลูกกลอน ไม่กินเหล้าสูบบุหรี่",
 sp:"ญาติ: อาเจียนเลือดแดงสด 1 กระโถน ไม่มี coffee ground ไม่เคยเป็น เป็นลมแล้วฟื้น ไม่มีอาเจียนซ้ำ ไม่มีโรคประจำตัว ไม่ใช้ยา/NSAID/ยาลูกกลอน ไม่ดื่มสุรา ไม่สูบบุหรี่",
 notes:"ไม่มีเฉลยพาร์ท OSCE ในไฟล์ Key 75D",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("9.1 History.",6,{tags:["hx"],ans:"ลักษณะเลือด (สด/coffee ground) ปริมาณ จำนวนครั้ง · <b>อาเจียนรุนแรงก่อนมีเลือด</b> (Mallory-Weiss) · melena/hematochezia · อาการ shock (หน้ามืด เป็นลม ใจสั่น) · ปวดท้อง/dyspepsia · <b>ยา: NSAID/aspirin, anticoagulant, ยาลูกกลอน/steroid</b> · <b>alcohol, liver disease</b> (varices) · ประวัติ PU, H. pylori, เลือดออกง่าย · น้ำหนักลด กลืนลำบาก (มะเร็ง) · โรคประจำตัว",rubric:"สัดส่วนตามหมวด",pts:[P("Character and amount of blood","amount","ปริมาณ","fresh","coffee"),P("Preceding retching","retch","อาเจียนก่อน","mallory"),CR(P("Drugs: NSAID, anticoagulant, herbal","nsaid","aspirin","anticoag","ลูกกลอน","steroid")),CR(P("Alcohol / liver disease","alcohol","liver","เหล้า","cirrho")),P("Melena, syncope, pain, weight loss","melena","syncope","เป็นลม","pain","weight")]}),
  B("9.2 Investigations.",4,{tags:["hx"],ans:"<b>CBC</b>, <b>blood group + cross-match</b>, <b>coagulation (PT/INR)</b>, BUN/Cr, LFT, electrolytes · Glasgow-Blatchford score · <b>Upper GI endoscopy ภายใน 24 ชม.</b> (diagnostic + therapeutic) หลัง resuscitation",rubric:"ได้",pts:[CR(P("CBC, group and cross-match","cbc","cross","group")),P("Coagulation, BUN/Cr, LFT","pt","inr","bun","lft","coag"),CR(P("Upper GI endoscopy","endoscop","egd","scope"))]})
 ),
 interp:"Upper GI bleeding",
 summary:["Glasgow-Blatchford score","Resuscitate → PPI → EGD within 24 h","Varices suspected: terlipressin + antibiotics"]}),

/* ===== OSCE 10 ===== */
Co({page:3,orig:"10",topic:"inst",sub:"Tube/Catheter",title:"Tubes — chest tube, NG tube and proctoscope",
 stem:`Three devices are provided: A. chest tube, B. nasogastric tube, C. proctoscope.<br>1. Name each device.<br>2. Give two indications for each.`,
 gray:"OSCE สายๆ มีอุปกรณ์ A. Chest tube, B. NG tube, C. proctoscope 7.1 บอกชื่อ 7.2 บอก indication ของแต่ละอันมา 2 ข้อ",
 imgAlt:"สาย chest tube, สาย NG และ proctoscope",flag:NOIMG,
 notes:"ไม่มีเฉลยพาร์ท OSCE ในไฟล์ Key 75D · ข้อเดียวกับ 75C OSCE 7 (คนละ rotation)",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("10.1 Names.",3,{tags:["inst"],ans:"Chest tube (intercostal drain) · Nasogastric tube · Proctoscope",rubric:"1/ชิ้น",pts:[P("Chest tube","chest","icd"),P("NG tube","ng","nasogastric"),P("Proctoscope","procto")]}),
  B("10.2 Two indications each.",6,{tags:["inst"],ans:"<b>Chest tube</b>: pneumothorax, hemothorax, empyema, effusion · <b>NG</b>: decompression (obstruction/ileus), feeding, lavage/UGIB · <b>Proctoscope</b>: ตรวจ hemorrhoid/fissure, biopsy, rubber band ligation",rubric:"1/ข้อ",pts:[CR(P("Chest tube indications","pneumothorax","hemothorax","empyema","effusion")),P("NG indications","decompress","feed","lavage","bleed"),P("Proctoscope indications","hemorrhoid","fissure","biopsy","band")]})
 ),
 interp:"Tubes",
 summary:["Chest tube: 5th ICS anterior to mid-axillary line","NG contraindicated in basilar skull fracture","Proctoscope for anal canal"]}),

/* ===== OSCE 11 ===== */
Co({page:3,orig:"11",topic:"hx",sub:"Other history",ex:1,title:"Corrosive ingestion — ER orders",
 stem:`A patient drank a toilet-cleaning liquid 30 minutes before arrival. Vital signs are nearly normal (heart rate not elevated, RR 12/min, BP not high). As the ER doctor, what would you order?`,
 gray:"OSCE CVT คนไข้กินน้ำยาล้างห้องน้ำมา 30 min PTA vital sign ค่อนข้างปกติ HR ไม่ขึ้น RR 12 BP ไม่สูง เป็นแพทย์ที่ ER จะสั่งอะไรบ้าง",
 notes:"ไม่มีเฉลยพาร์ท OSCE ในไฟล์ Key 75D · น้ำยาล้างห้องน้ำในไทยส่วนใหญ่เป็นกรด (HCl)",
 opinion:"ไฟล์ไม่มีเฉลย — Claude เฉลย ความมั่นใจปานกลาง",
 parts:S(
  B("11.1 ER orders.",8,{tags:["hx"],ans:"ABC — ระวัง airway edema (เสียงแหบ stridor → intubate) · <b>NPO</b> · <b>ห้ามกระตุ้นอาเจียน ห้ามใส่ NG blindly ห้ามให้สารกลาง (neutralize) หรือ activated charcoal</b> · IV fluid · <b>PPI IV</b>, analgesic · ซักชนิดสาร/ปริมาณ/เจตนา (ส่งปรึกษาจิตเวชถ้าตั้งใจ) · Lab: CBC, electrolyte, <b>ABG (acidosis)</b>, BUN/Cr, coagulation, LFT · <b>Upright CXR</b> (pneumomediastinum, free air) · ± CT chest/abdomen ถ้าสงสัย perforation · <b>Early EGD ภายใน 12–24 ชม.</b> (Zargar grading) · โทรปรึกษาศูนย์พิษวิทยา (1367)",exp:"กรด → gastric injury เด่น · ด่าง → esophageal liquefactive necrosis",rubric:"สัดส่วนตามหมวด",
   pts:[H("Initial",40),CR(P("Airway assessment","airway","intubat","stridor")),CR(P("No emesis, no neutralization, no charcoal","no emesis","ห้ามกระตุ้น","neutraliz","charcoal")),P("NPO, IV fluid, PPI","npo","fluid","ppi"),H("Investigations",60),P("CBC, electrolytes, ABG, coagulation","abg","cbc","electrolyte","coag"),P("Upright CXR / CT for perforation","cxr","x-?ray","ct","perfor"),CR(P("Early endoscopy within 12–24 h","endoscop","egd","zargar","24")),P("Poison center / psychiatric consult","poison","1367","psych","จิตเวช")]})
 ),
 interp:"Caustic ingestion",
 summary:["No emesis, no neutralization, no charcoal","Airway first","EGD 12–24 h — Zargar grading","Perforation → surgery","Late: stricture, cancer"]}),

SA({page:4,orig:"MEQ 1",num:"SA 1",sub:"Neuro motor/reflex",title:"Short answer — head injury with deteriorating GCS",kimg:["os75d_km1"],
 stem:`A motorcycle-accident patient has a horizontal laceration over the right temporal area. On arrival he opens his eyes to voice, talks but is occasionally confused, and obeys commands.<br>1. Assess the GCS.<br>Later he becomes drowsy, makes only incomprehensible sounds, has decerebrate posturing on the left and flexion to pain on the right, in both arms and legs.<br>2. Assess the GCS.<br>3. What other neurological signs may be found?<br>4. What would the CT brain show?`,
 gray:"MEQ Glasgow coma scale ผู้ป่วย motorcycle accident มี horizontal laceration wound ที่ขมับขวา แรกรับลืมตาเมื่อเรียกชื่อ พูดคุยได้ มีสับสนในบางคำถาม (ส่วนน้อย) ทำตามคำสั่งได้ 1. ประเมิน GCS ต่อมาซึมลง drowsiness ส่งเสียงได้ไม่มีความหมาย ข้างซ้าย decerebrate ข้างขวา flexion to pain ทั้งแขนและขา 2. จงประเมิน GCS 3. Other neuro sign ที่จะตรวจเจอได้ 4. CT brain จะเจออะไร",
 notes:"ไฟล์ Key 75D (PAOPAO): 1. E3V5M6 (lucid interval) · 2. E_V2M4 (M ใช้ข้างที่ดีกว่า) · 3. left hemiparesis, seizure, vomiting, papilledema · 4. epidural hematoma, biconvex/lentiform hyperdensity · ลายมือ: ถ้า 2 ข้างไม่เท่ากันให้เอาอันที่ดีที่สุด / วัด consciousness ไม่เอา localizing signs",
 opinion:"เห็นด้วยกับเฉลยส่วนใหญ่ · ข้อ 1 \"สับสนบางคำถาม\" ควรเป็น V4 (confused) → E3V4M6 = 13 ความมั่นใจปานกลาง",
 parts:S(
  B("1.1 Initial GCS.",2,{tags:["spot"],key:KF+"E3V5M6",ans:"E3 (ลืมตาเมื่อเรียก) · V: พูดได้แต่ <b>สับสนบางคำถาม = V4</b> (ไฟล์เฉลยให้ V5) · M6 → <b>E3V4M6 = 13</b> (หรือ E3V5M6 = 14 ตามไฟล์)",exp:"V5 = oriented ทั้งหมด · V4 = confused",rubric:"ได้ = E3 M6 + V4/V5",pts:[CR(P("E3 M6","e3","m6")),P("V4 confused (key V5)","v4","v5")]}),
  B("1.2 GCS after deterioration.",2,{tags:["spot"],key:KF+"E_V2M4",ans:"E2 (ลืมตาเมื่อเจ็บ — drowsy มากขึ้น) · <b>V2</b> (incomprehensible sounds) · <b>M4</b> (ใช้ข้างที่ดีกว่า: flexion withdrawal ขวา) → <b>E2V2M4 = 8</b>",exp:"Motor ใช้ best response",rubric:"ได้ = V2 M4",pts:[CR(P("V2 M4","v2","m4")),P("Use best motor side","best","ดีที่สุด")]}),
  B("1.3 Other neurological signs.",2,{tags:["spot"],key:KF+"left hemiparesis, seizure, vomiting, papilledema",ans:"<b>Ipsilateral (right) dilated pupil</b> (CN III — uncal herniation) · <b>contralateral (left) hemiparesis</b> · Cushing response (bradycardia, hypertension, irregular breathing) · vomiting, seizure",rubric:"ได้",pts:[CR(P("Right dilated pupil","pupil","anisocoria","cn ?iii","ม่านตา")),P("Left hemiparesis","hemiparesis","weakness"),P("Cushing reflex","cushing","bradycard")]}),
  B("1.4 CT brain.",2,{tags:["spot"],key:KF+"epidural hematoma, biconvex/lentiform hyperdensity",ans:"<b>Right epidural hematoma</b> — biconvex (lentiform) hyperdense ไม่ข้าม suture ± skull fracture (temporal, middle meningeal artery) ± midline shift",rubric:"ได้",pts:[CR(P("Epidural hematoma, biconvex","epidural","biconvex","lentiform"))]})
 ),
 interp:"EDH with lucid interval",
 summary:["EDH: middle meningeal artery, lucid interval, biconvex","Surgery: >30 mL, GCS ≤8 with anisocoria, shift >5 mm","GCS motor = best side"]}),

SA({page:4,orig:"MEQ 2",num:"SA 2",sub:"Uro/Genital",title:"Short answer — hematuria in a postmenopausal woman",kimg:["os75d_km2"],
 stem:`A 70-year-old woman, postmenopausal for 20 years, has had hematuria for about 4 weeks.<br>1. What history would you take?<br>2. What would you examine?`,
 gray:"ผู้ป่วยหญิงอายุประมาณ 70 หมดประจำเดือนมาแล้ว 20 ปี มี hematuria มาประมาณ 4 สัปดาห์ 1. จะซักประวัติอะไร 2. จะตรวจร่างกายอะไร",
 notes:"ไฟล์ Key 75D (PAOPAO): Hx — มีลิ่มเลือดมั้ย, เลือดออกตอนไหนของการปัสสาวะ, มีปวดมั้ย, กินยา/ปัสสาวะเหนื่อย(?), เคยผ่าตัดมั้ย, มีคนในครอบครัวเป็น CA bladder มั้ย, เคยมีปัสสาวะเป็นเลือดมาก่อนมั้ย · PE: ดู genitalia ว่ามีแผล/เลือด/แผลเปื่อย, คลำท้องดู bladder distend",
 opinion:"เห็นด้วยกับเฉลย + เพิ่ม risk factor สูบบุหรี่ ความมั่นใจสูง",
 parts:S(
  B("2.1 History.",4,{tags:["spot"],key:KF+"ลิ่มเลือด, timing, ปวด, ยา, ผ่าตัด, family hx CA bladder, เคยเป็นมาก่อน",ans:"ยืนยันว่าเลือดมาจากทางเดินปัสสาวะ (ไม่ใช่ช่องคลอด/ทวาร) · gross/microscopic, <b>timing</b> (initial/terminal/total), <b>clots</b>, painless vs painful · LUTS, flank pain, ไข้ · <b>Risk ของ urothelial cancer: smoking</b>, สารเคมี/สีย้อม, cyclophosphamide, pelvic radiation · ยา anticoagulant · นิ่ว, UTI · น้ำหนักลด · family history",rubric:"ได้ตามหมวด",pts:[P("Timing, clots, pain","timing","clot","initial","terminal","ลิ่ม","pain"),CR(P("Smoking / occupational exposure","smok","บุหรี่","dye","chemical")),P("Anticoagulant, stone, UTI history","anticoag","stone","uti","นิ่ว"),P("Weight loss, family history","weight","family")]}),
  B("2.2 Examination.",3,{tags:["spot"],key:KF+"genitalia, bladder distension",ans:"Vital signs, pallor · <b>abdomen</b>: ballotable kidney, suprapubic mass/distended bladder, flank tenderness · <b>pelvic examination (PV)</b> แยกเลือดจากช่องคลอด/urethral caruncle, คลำ bladder mass (bimanual) · edema, lymph nodes",rubric:"ได้",pts:[P("Abdomen: kidney, bladder","kidney","bladder","abdom","ท้อง"),CR(P("Pelvic/genital examination","pelvic","pv","genital","vagin","bimanual")),P("Pallor, nodes","pallor","node","ซีด")]})
 ),
 interp:"Painless hematuria in elderly = bladder cancer until proven otherwise",
 summary:["Workup: UA, urine cytology, CT urography, cystoscopy","Smoking = biggest risk for urothelial cancer","Exclude vaginal bleeding in women"]}),

SA({page:4,orig:"MEQ 3",num:"SA 3",sub:"Pediatric surgery",title:"Short answer — pediatric scrotal swelling",kimg:["os75d_km3"],
 stem:`A photograph of an infant with a unilateral scrotal swelling is shown.<br>1. What are the important physical examination findings and the diagnosis?<br>2. What operation is done, and at what age?`,
 gray:"MEQ hydrocele (มั้ง) 1. การตรวจร่างกายที่สำคัญและวินิจฉัย 2. ผ่าตัดอะไรที่อายุเท่าไหร่",
 flag:NOIMG,imgAlt:"รูปทารกถุงอัณฑะบวมข้างเดียว",
 notes:"ไฟล์ Key 75D (PAOPAO): get above mass, คลำหา testis แล้วคลำไล่ขึ้นด้านบน (communicating hydrocele ลองกดดูว่ายุบมั้ย) · transillumination เอาไฟส่องจากด้านหลัง, fluctuation ดูการกระเพื่อมของน้ำ · เด็ก: ปิด processus vaginalis และทำ hydrocelectomy ตอนอายุ 1–2 ปี"+" · ตรวจคีย์ 21 พ.ย. 2026: คีย์เดิมเขียน hydrocelectomy อายุ 1–2 ปี → เน้นปิด processus vaginalis ทาง inguinal + สังเกต ≥12 เดือน ตาม EAU/ESPU 2025",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): เห็นด้วยกับคีย์ 75D ส่วนการตรวจ (get above the mass, คลำ testis, transillumination, fluctuation) และการวินิจฉัย hydrocele · ส่วนการผ่าตัด: ในเด็กปิด patent processus vaginalis ที่ internal inguinal ring ผ่านแผลขาหนีบ (ไม่ใช่ scrotal hydrocelectomy แบบผู้ใหญ่) และสังเกตอย่างน้อย 12 เดือนก่อนผ่า (EAU/ESPU Paediatric Urology Guidelines 2025) — ตรงกับอายุ 1–2 ปีในคีย์ · ความมั่นใจปานกลาง (ผู้จดไม่แน่ใจว่าเป็น hydrocele)",
 parts:S(
  B("3.1 Examination and diagnosis.",4,{tags:["spot"],key:KF+"get above the mass, คลำ testis, transillumination, fluctuation",ans:"<b>Get above the mass</b> ได้ (แยกจาก inguinal hernia) · คลำ testis แยกได้/อยู่ในก้อน · <b>transillumination บวก</b> · fluctuation · ลองกด/ดูว่ายุบหรือเปลี่ยนขนาดในวัน (communicating) · Dx: <b>hydrocele</b> (communicating หรือ non-communicating)",rubric:"ได้",pts:[CR(P("Get above the mass","get above","above")),CR(P("Transillumination","transillumin","ส่องไฟ")),P("Hydrocele","hydrocele")]}),
  B("3.2 Operation and age.",2,{tags:["spot"],key:KF+"ปิด processus vaginalis + hydrocelectomy อายุ 1–2 ปี",ans:"เด็ก: <b>inguinal herniotomy (high ligation of patent processus vaginalis)</b> ± drain sac · ไม่ทำ hydrocelectomy/scrotal approach แบบผู้ใหญ่ · <b>สังเกตอย่างน้อย 12 เดือน</b> (ส่วนใหญ่หายเอง) → ผ่าถ้ายังไม่หายราว 1–2 ปี, โตขึ้นเรื่อย ๆ หรือสงสัย inguinal hernia ร่วม (ผ่าเร็วกว่านั้น)",rubric:"ได้",pts:[CR(P("Ligation of processus vaginalis via inguinal approach","processus","inguinal","ligation","herniotomy")),P("Age 1–2 years","1","2","year","ปี")]})
 ),
 interp:"Pediatric hydrocele",
 summary:["Get above mass: hydrocele yes, hernia no","Pediatric: inguinal approach","Observe until 1–2 years if non-communicating"]}),

SA({page:4,orig:"MEQ 4",num:"SA 4",sub:"Pediatric surgery",title:"Short answer — omphalocele",kimg:["os75d_km4"],
 stem:`A photograph of a newborn with an omphalocele is shown.<br>1. What is the diagnosis?<br>2. Which associated anomalies must be looked for?<br>3. What is the initial management?`,
 gray:"MEQ omphalocele รูป omphalocele 1. Dx 2. Associated anomaly ที่ต้องหา 3. Initial management",
 flag:NOIMG,imgAlt:"รูปทารกมีถุงเยื่อหุ้มอวัยวะในช่องท้องยื่นออกที่สะดือ",
 notes:"ไฟล์ Key 75D (PAOPAO): แยกจาก gastroschisis โดยที่ omphalocele มีถุงหุ้ม · chromosome test, midgut malrotation, volvulus, congenital heart disease, lung hypoplasia · ต้องดูขนาด ถ้าเล็กทำ primary fascial closure ถ้าใหญ่ทำ scarification",
 opinion:"เห็นด้วยกับเฉลย ความมั่นใจสูง",
 parts:S(
  B("4.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Omphalocele</b> (มีถุงหุ้ม, สายสะดือเกาะที่ถุง)",rubric:"ได้",pts:[CR(P("Omphalocele","omphalocele","exomphalos"))]}),
  B("4.2 Associated anomalies.",2,{tags:["spot"],key:KF+"chromosome, malrotation, CHD, lung hypoplasia",ans:"<b>Chromosomal</b> (trisomy 13, 18, 21) → karyotype · <b>cardiac</b> (echo) · <b>Beckwith-Wiedemann</b> (macroglossia, hypoglycemia — เจาะน้ำตาล) · pentalogy of Cantrell · malrotation · pulmonary hypoplasia",rubric:"ได้",pts:[CR(P("Chromosomal / karyotype","chromosom","trisomy","karyotype")),P("Cardiac anomaly / echo","cardiac","heart","echo"),P("Beckwith-Wiedemann / hypoglycemia","beckwith","hypoglyc","glucose")]}),
  B("4.3 Initial management.",3,{tags:["spot"],key:KF+"เล็ก: primary fascial closure · ใหญ่: scarification",ans:"ABC · รักษาถุงไม่ให้แตก คลุมด้วย sterile moist/plastic wrap · ให้ความอบอุ่น · OG decompression · IV fluid · ตรวจ glucose · หา associated anomalies · เล็ก → <b>primary closure</b> · giant → <b>\"paint and wait\" (escharotization ด้วย silver sulfadiazine)</b> แล้ว delayed closure",rubric:"ได้",pts:[CR(P("Protect sac, cover, warmth","cover","sac","warm","ถุง")),P("OG tube, IV fluid, glucose","og","fluid","glucose"),P("Primary closure if small, paint and wait if giant","primary","paint","scarif","escharot")]})
 ),
 interp:"Omphalocele",
 summary:["Sac, midline, liver","Anomalies 50–70%","Giant: paint and wait"]}),

SA({page:4,orig:"MEQ 5",num:"SA 5",sub:"Hernia/Abdominal wall",title:"Short answer — red groin mass with bowel obstruction",kimg:["os75d_km5"],
 stem:`A photograph shows a red, tender right groin mass, and an abdominal radiograph shows dilated small bowel with air-fluid levels at different heights in the same loop.<br>1. What is the diagnosis?<br>2. How would you treat it?`,
 gray:"MEQ hernia รูป groin mass ขวา แดง มี film ท้อง เป็น different height in the same loop bowel dilate 1. ให้ dx 2. Tx ยังไง",
 flag:NOIMG,imgAlt:"ก้อนที่ขาหนีบขวาแดง และ AXR ลำไส้เล็กโป่ง air-fluid level ต่างระดับ",
 notes:"ไฟล์ Key 75D (PAOPAO): obstructed inguinal hernia (bowel obstruction with incarcerated hernia) · open hernia repair เพราะมี complication ทำ TAPP/TEP ไม่ได้",
 opinion:"เห็นด้วยกับเฉลย ความมั่นใจสูง",
 parts:S(
  B("5.1 Diagnosis.",2,{tags:["spot"],key:KF+"obstructed inguinal hernia",ans:"<b>Incarcerated/strangulated right inguinal hernia with small bowel obstruction</b> (ผิวแดง = สงสัย strangulation)",rubric:"ได้",pts:[CR(P("Incarcerated/strangulated inguinal hernia","incarcerat","strangulat","obstructed","hernia")),P("Small bowel obstruction","obstruct","sbo")]}),
  B("5.2 Treatment.",3,{tags:["spot"],key:KF+"open hernia repair (complicated → ไม่ทำ TAPP/TEP)",ans:"Resuscitation: NPO, NG decompression, IV fluid, ATB · <b>ห้าม reduce</b> เมื่อสงสัย strangulation · <b>emergency open repair</b> ประเมินลำไส้ (resect ถ้าตาย) · tissue repair (ไม่ใช้ mesh ถ้าปนเปื้อน) · ไม่ทำ TEP",rubric:"ได้",pts:[P("NPO, NG, IV fluid","npo","ng","fluid"),CR(P("Emergency open repair, assess bowel viability","emergency","open","surgery","viab","resect")),P("Avoid mesh/reduction if strangulated","mesh","reduc")]})
 ),
 interp:"Strangulated inguinal hernia",
 summary:["Red, tender, irreducible = strangulation","Emergency surgery","Mesh avoided if contaminated"]}),

SA({page:5,orig:"MEQ 6",num:"SA 6",sub:"Plastic/Skin/Burn",title:"Short answer — complete cleft lip and palate",kimg:["os75d_km6"],
 stem:`A newborn has a complete left cleft lip extending from the nostril through the palate.<br>1. Describe the lesion.<br>2. What treatments are needed and when?<br>3. What would you tell the mother?`,
 gray:"MEQ Plastic CF เด็กเกิดมาเป็นแบบนี้ (รูป complete cleft lip + palate ตั้งแต่ตรงรูจมูกซ้ายไปถึงในคอ) 1. จงอธิบาย lesion 2. ต้องรักษาอะไรตอนไหน 3. ต้องพูดอะไรกับแม่บ้าง (มั้ง)",
 flag:NOIMG,imgAlt:"รูปทารก complete cleft lip ด้านซ้ายต่อเนื่องถึงเพดานปาก",
 notes:"ไฟล์ Key 75D (PAOPAO): complete cleft of primary and secondary palate, complete left cleft lip · cheiloplasty rule of 10 (10 lbs, 10 weeks, Hb >10 g/dL, WBC <10,000) · palatoplasty ก่อนเด็กพูด (6 เดือน–1 ปี) · ระวังตอนกินนมสำลักออกทางจมูก, ให้คำแนะนำครอบครัว, reassure ว่าสติปัญญาปกติ, แนะนำให้มาผ่าเพดานตอนเด็กเริ่มพูด, เน้นเรื่องการได้ยิน, reassure ว่ารักษาได้ · ลายมือท้ายไฟล์: \"ระวังยาพิษ! อย่าเชื่อทุกอย่างในนี้ ไปหาอ่านเพิ่มด้วย\"",
 opinion:"เห็นด้วยกับเฉลย ความมั่นใจสูง",
 parts:S(
  B("6.1 Describe.",2,{tags:["spot"],key:KF+"complete cleft of primary and secondary palate, complete left cleft lip",ans:"<b>Complete unilateral (left) cleft lip and palate</b> — cleft ผ่าน lip, alveolus (primary palate) และ hard/soft palate (secondary palate) ถึงรูจมูก",rubric:"ได้",pts:[CR(P("Complete left cleft lip and palate","cleft lip","palate","complete")),P("Primary and secondary palate","primary","secondary","alveol")]}),
  B("6.2 Treatment and timing.",3,{tags:["spot"],key:KF+"cheiloplasty rule of 10 · palatoplasty ก่อนพูด 6 เดือน–1 ปี",ans:"Multidisciplinary team · feeding (special bottle) · ± NAM · <b>Lip repair (cheiloplasty) ~3 เดือน (rule of 10s)</b> · <b>Palatoplasty 9–18 เดือน ก่อนพูด</b> · alveolar bone graft 7–11 ปี · speech therapy, ENT (tube), orthodontic · rhinoplasty/orthognathic ตอนโต",rubric:"ได้",pts:[CR(P("Lip repair ~3 months, rule of 10","rule of 10","10","3 month","cheilo")),CR(P("Palate repair before speech, 9–18 months","palato","palate","speech","1 ปี","12")),P("Alveolar bone graft / team","bone graft","alveol","team")]}),
  B("6.3 Counsel the mother.",2,{tags:["spot"],ans:"อธิบายโรคและแผนการรักษาเป็นขั้น · วิธีให้นม (ท่าตั้ง, ขวดพิเศษ, ระวังสำลักออกจมูก) · ติดตามน้ำหนัก · <b>ตรวจการได้ยิน</b> (OME) · สติปัญญาปกติ ผลการรักษาดี · ความเสี่ยงในบุตรคนถัดไป (genetic counseling)",rubric:"ได้",pts:[P("Feeding advice","feed","นม","bottle"),P("Hearing and speech follow-up","hearing","speech","ได้ยิน","พูด"),P("Reassure, staged treatment","reassur","treatable","รักษาได้")]})
 ),
 interp:"Cleft lip and palate",
 summary:["Rule of 10s for lip","Palate before speech","Team care; hearing follow-up"]})
);
})();

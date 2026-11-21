(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "Osce Sub specialty SURGERY MDCU76 rotate C" (16 Aug 2023) → MDCU76 RoC (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO76CQ = 76C_OSCE_MEQ_SUBSPE_SURGERY_rotate_C_MDCU76.pdf (6 หน้า) · หน้า 1–3 OSCE ข้อ 1–12 · หน้า 4–6 MEQ ข้อ 1–14 → sec "Short Answers" (orig "MEQ n", num "SA n", topic spot)
   ไฟล์เฉลย SO76CK = Key_76C_OSCE_MEQ_76_rotate_C_By_MDCU76_rotate_D.pdf (23 หน้า by KP, Tae, Tan, Gift, Lilly + academic team MDCU76)
     = ไฟล์ Key_76C_OSCE_solution_…by_rotate_D.pdf (เนื้อหาเดียวกันทุกหน้า) — ครอปเป็น os76c_ko<n> / os76c_km<n>
   รูปโจทย์ os76c_o<n> (OSCE) / os76c_m<n> (MEQ) ครอปจากไฟล์โจทย์ · MEQ 13 ตัดคำบรรยายใต้รูปที่บอกคำตอบออก
   OSCE 7 (prostate) และ MEQ 8 (คลิป neuro) ไม่มีรูป */
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
const KF="ไฟล์ Key 76C: ";
const Co=o=>Object.assign({set:"MDCU76",ro:"RoC",file:"SO76CQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:1,orig:"1",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Procedure — alcohol hand rub and dry dressing",kimg:["os76c_ko1"],
 stem:`The examiner is observing.<br>1. Demonstrate hand hygiene with an alcohol-based hand rub.<br>2. Perform a dry dressing of a sutured wound on the model.`,
 gray:"OSCE 1. ให้แสดงการล้างมือด้วยเจลแอลกอฮอล์ และทำแผล Dry dressing",
 sp:"หุ่นแขน/ขามีแผลเย็บ · เจลแอลกอฮอล์ · ชุดทำแผล (ห่อผ้า, forceps 2 อัน, ถ้วย, สำลี/gauze), NSS, antiseptic, พลาสเตอร์ · ผู้คุมดู: ล้างมือ WHO ครบ 8 ขั้น 20–30 วินาที, แกะห่อชุดทำแผลจากด้านไกลตัวก่อนโดยไม่แตะด้านใน, ใช้ forceps หยิบสำลีจากถ้วยแล้วส่งให้อีกอันโดยปลายไม่แตะกัน, เทน้ำยาไม่ให้ปากขวดแตะของ sterile, เช็ดแผลตามแนวจากบนลงล่าง/ในออกนอก สำลีก้อนละครั้ง, ปิด gauze, ติดพลาสเตอร์ขวางแนวแผลไม่พาดข้อพับ",
 notes:"ไฟล์ Key 76C หน้า 14 แปะ WHO How to handrub/handwash (8 ขั้น) · หน้า 15–17 ภาพประกอบขั้นตอนทำแผล (แกะ set, ใช้ forceps คีบไปวางในถาด ไม่ให้แตะกัน, เทน้ำยา betadine/chlorhexidine, normal saline, เช็ดรอบแรกจากในออกนอก #1 แล้วเปลี่ยนสำลีเช็ดรอบนอก #2, ปิดแผล, ติดพลาสเตอร์ไม่ทับข้อพับ (skin crease))",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Alcohol hand rub.",4,{tags:["proc"],key:KF+"WHO how to handrub",ans:"เจลเต็มอุ้งมือ → <b>palm to palm</b> → <b>ฝ่ามือถูหลังมือสลับ</b> → <b>palm to palm นิ้วสอดประสาน</b> → <b>หลังนิ้วล็อกกัน</b> → <b>หมุนหัวแม่มือ</b> → <b>ปลายนิ้วหมุนกลางฝ่ามือ</b> → รอให้แห้ง (รวม 20–30 วินาที)",exp:"ล้างน้ำ+สบู่เมื่อมือเปื้อนชัด/สัมผัส C. difficile",rubric:"ได้ = ครบทุกขั้น",pts:[CR(P("All steps of WHO hand rub","palm","ฝ่ามือ","interlac","thumb","หัวแม่มือ","fingertip","ปลายนิ้ว")),P("20–30 seconds until dry","20","30","วินาที","dry","แห้ง")]}),
  B("1.2 Dry dressing.",6,{tags:["proc"],key:KF+"แกะ set · forceps คีบไปวางไม่ให้แตะกัน · เทน้ำยา · เช็ด #1 ในออกนอก แล้ว #2 · ปิดแผล · ติดพลาสเตอร์ไม่ทับ skin crease",ans:"อธิบายผู้ป่วย · เปิดชุดทำแผลด้วย <b>aseptic technique</b> (แกะมุมไกลตัวก่อน) · แยก <b>forceps หยิบของ (ไม่แตะแผล)</b> กับ <b>forceps เช็ดแผล</b> · ดูแผล · NSS เช็ด<b>แนวแผลก่อน แล้ววนจากในออกนอก</b> สำลีก้อนละครั้ง · antiseptic รอบแผล · ปิด <b>dry sterile gauze</b> · ติดพลาสเตอร์ (ไม่พาดข้อพับ) · ทิ้งขยะติดเชื้อ ล้างมือ",exp:"ผ่าเปิดซองไม่ปนเปื้อนเป็นจุดที่ถูกหักคะแนนบ่อย",rubric:"ปนเปื้อน = หักมาก",
   pts:[H("Asepsis",40),CR(P("Open set aseptically","aseptic","sterile","ไม่ปนเปื้อน","far side","ไกลตัว")),P("Two forceps, tips not touching","forceps","ปากคีบ"),H("Cleaning",40),CR(P("Clean wound inside-out, one swab per stroke","inside","ในออกนอก","one swab","ก้อนละครั้ง")),H("Finish",20),P("Dry gauze and tape","gauze","ผ้าก๊อซ","tape","พลาสเตอร์"),P("Dispose, hand hygiene","dispose","ทิ้ง","hand","ล้างมือ")]})
 ),
 interp:"Hand hygiene + dry dressing",
 summary:["WHO hand rub 8 ขั้น 20–30 วินาที","Forceps สองอันแยกหน้าที่","เช็ดแผลในออกนอก สำลีก้อนละครั้ง"]}),

/* ===== OSCE 2 ===== */
Co({page:1,orig:"2",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — anoscopic view of an anal lesion",img:["os76c_o2"],kimg:["os76c_ko2a","os76c_ko2b"],
 stem:`An anoscopic photograph is shown.<br>1. Describe the lesion.<br>2. What is the diagnosis?`,
 gray:"OSCE 2. [รูป anoscope] Please describe the lesion, and diagnosis.",
 notes:"ไฟล์ Key 76C หน้า 2 แปะรูปอีกรูปเขียน Chronic anal fissure · บรรยาย hypertrophic anal papilla, fibrotic edge, sentinel pile · ข้อ 4.1–4.3 บรรยาย hypertrophied anal papilla + sentinel pile, Dx chronic anal fissure, Treatment → LIS + advice lifestyle modification (dietary change: more fiber, bulk-forming agent, exercise; อย่าเพิ่งใช้ใน acute anal fissure) · หน้า 14 ชี้ในรูปโจทย์: hypertrophic anal papilla, fibrotic edge, internal sphincter, sentinel pile → Chronic anal fissure",
 opinion:"ตามเฉลยในไฟล์ (chronic anal fissure) ความมั่นใจปานกลาง — รูปเห็นติ่งเนื้อยื่นในกล้องชัด แต่แผลไม่ชัดในภาพขนาดเล็ก",
 parts:S(
  B("2.1 Describe the lesion.",3,{tags:["img"],key:KF+"hypertrophic anal papilla, fibrotic edge, internal sphincter, sentinel pile",ans:"ใน anoscope เห็น <b>hypertrophied anal papilla</b> (ติ่งเนื้อที่ dentate line) · แผลตามแนวยาวของ anoderm ขอบ <b>fibrotic</b> เห็น<b>ใยกล้าม internal sphincter</b> ที่พื้นแผล · ด้านนอกมี <b>sentinel pile (skin tag)</b>",exp:"ลักษณะครบสามอย่าง (papilla, ulcer เห็น sphincter, sentinel tag) = chronic fissure",rubric:"ได้ ≥2 ลักษณะ",pts:[G("Features ≥2",2,P("Hypertrophied anal papilla","papill","ติ่ง"),P("Fibrotic edge / exposed internal sphincter","fibrot","sphincter","edge"),P("Sentinel pile / skin tag","sentinel","skin tag","pile"),P("Longitudinal ulcer of anoderm","ulcer","แผล","fissure"))]}),
  B("2.2 Diagnosis.",2,{tags:["img"],key:KF+"Chronic anal fissure",ans:"<b>Chronic anal fissure</b> · การรักษา: fiber/sitz bath + topical nitrate/CCB → Botox → <b>lateral internal sphincterotomy</b>",exp:"Fissure ด้านข้าง/หลายแผล → คิด Crohn, TB, HIV, cancer",rubric:"ได้",pts:[CR(P("Chronic anal fissure","fissure","ปริ"))]})
 ),
 interp:"Chronic anal fissure",
 summary:["Triad: sentinel pile, hypertrophied papilla, exposed IAS","Posterior midline 90%","LIS = surgical treatment of choice"]}),

/* ===== OSCE 3 ===== */
Co({page:1,orig:"3",topic:"inst",sub:"Ostomy appliance",title:"Devices — two-piece colostomy appliance",img:["os76c_o3"],kimg:["os76c_ko3"],
 stem:`Two medical devices are shown.<br>1. What are they?<br>2. Name 2 diseases and the surgical procedures that require these devices.`,
 gray:"OSCE 3. [รูป] What are these 2 medical devices? Please name 2 diseases and its surgical procedure which require the given instrument.",
 notes:"ไฟล์ Key 76C: colostomy base plate, colostomy pouch · โรค CA rectum → APR (abdominoperineal resection) + CA anal canal · แปะ indication of APR: carcinoma rectum with involvement of external sphincter or levators, carcinoma rectum with poor sphincter function, carcinoma anal canal (failed neo-adjuvant CTRT)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("3.1 Name the devices.",2,{tags:["inst"],key:KF+"colostomy base plate, colostomy pouch",ans:"<b>Two-piece ostomy appliance</b>: (1) <b>base plate (skin barrier/flange)</b> ติดผิวรอบ stoma (2) <b>drainable/closed ostomy pouch</b> ประกบกับแป้น",exp:"ตัดรูแป้นให้ใหญ่กว่า stoma 2–3 mm",rubric:"1 คะแนนต่อชิ้น",pts:[CR(P("Base plate / skin barrier","base ?plate","flange","barrier","แป้น")),CR(P("Ostomy pouch / bag","pouch","bag","ถุง"))]}),
  B("3.2 Two diseases and procedures.",4,{tags:["inst"],key:KF+"CA rectum → APR, CA anal canal (failed CRT)",ans:"<b>Low rectal cancer</b> (ลุก sphincter/levator) → <b>abdominoperineal resection</b> (end colostomy ถาวร) · <b>Anal canal SCC</b> ที่เหลือ/เป็นซ้ำหลัง chemoradiation → APR · <b>Perforated diverticulitis</b>/obstructing left colon cancer → <b>Hartmann procedure</b> · <b>High ARM/Hirschsprung</b> → colostomy ชั่วคราว · rectal injury → diverting colostomy",exp:"Ileostomy ใช้แป้น/ถุงแบบเทได้ (drainable) เพราะอุจจาระเหลว · colostomy ซ้าย อุจจาระเป็นก้อนใช้ถุงปิดได้",rubric:"2 คะแนนต่อคู่โรค–หัตถการ",pts:[G("2 disease–procedure pairs",2,P("Rectal cancer – APR","rectal","rectum","apr","abdominoperineal"),P("Anal canal cancer – APR","anal canal","anal cancer"),P("Diverticulitis/obstruction – Hartmann","hartmann","diverticul"),P("ARM/Hirschsprung – colostomy","anorectal malform","hirschsprung","arm"),P("Rectal trauma – diversion","trauma","injury","บาดเจ็บ"))]})
 ),
 interp:"Colostomy appliance",
 summary:["Two-piece: base plate + pouch","End colostomy ถาวร: APR","ชั่วคราว: Hartmann, ARM, Hirschsprung, trauma"]}),

/* ===== OSCE 4 ===== */
Co({page:1,orig:"4",topic:"pe",sub:"Breast",ex:1,title:"Physical examination — breast and lymph nodes with screening advice",kimg:["os76c_ko4"],
 stem:`A 44-year-old woman comes for a breast check-up.<br>1. Examine the breasts and regional lymph nodes on the model.<br>2. The examination is normal. Give her appropriate advice.`,
 gray:"OSCE 4. ผู้ป่วยอายุ 44 ปี แสดงการตรวจเต้านมและต่อมน้ำเหลือง + กรณีไม่พบความผิดปกติ ให้การแนะนำแก่ผู้ป่วย",
 sp:"หุ่นเต้านม (ปกติ) · ผู้คุมดู: แนะนำตัว ขออนุญาต chaperone, ล้างมือ, เปิดเสื้อถึงเอว · Inspection ท่านั่ง: มือข้างลำตัว → มือเท้าเอวเกร็ง → ยกแขนเหนือศีรษะ → โน้มตัวไปหน้า (ดูขนาด สมมาตร ผิว dimpling, peau d'orange, nipple retraction/discharge) · Palpation ท่านอนแขนข้างที่ตรวจไว้ใต้ศีรษะ ใช้ฝ่านิ้ว 3 นิ้วคลำครบทุก quadrant + axillary tail + nipple-areola (บีบหา discharge) · คลำ LN axillary (central, anterior, posterior, lateral, apical), supraclavicular, infraclavicular · สรุปผล",
 notes:"ไฟล์ Key 76C หน้า 14 แปะสรุป breast exam (inspection, palpation ทุก quadrant, LN) + Screening: >40 ปี MMG q 1 y ∴ ปีหน้าทำ (นัดตรวจ), self breast exam q 1 mo",
 opinion:"ความมั่นใจสูง (ระยะห่าง mammogram ตามแนวทางต่างกันได้ ปีละครั้ง–ทุก 2 ปี)",
 parts:S(
  B("4.1 Breast and lymph node examination.",7,{tags:["pe"],ans:"<b>Inspection</b> 4 ท่า (แขนข้างลำตัว, เท้าเอวเกร็ง pectoralis, ยกแขน, โน้มตัว) · <b>Palpation</b> นอนหงายแขนเหนือศีรษะ ใช้ pads ของ 3 นิ้ว วงกลม/แนวตั้ง ครบ 4 quadrants + <b>axillary tail</b> + <b>nipple-areola</b> (discharge) ทั้งสองข้าง (เริ่มข้างปกติ) · <b>Lymph nodes</b>: axillary (central, pectoral, subscapular, lateral, apical) + supraclavicular + infraclavicular · สรุป",exp:"Peau d'orange = lymphatic obstruction · dimpling = Cooper ligament ถูกดึง",rubric:"แบ่งตามขั้น",
   pts:[H("Prep",10),P("Consent/chaperone/expose","consent","ขออนุญาต","chaperone","expos"),H("Inspection",30),CR(P("Inspect in several positions","inspect","ดู","arm","position","ท่า")),P("Look for skin/nipple changes","dimpl","peau","retract","nipple","ผิว"),H("Palpation",40),CR(P("Systematic palpation of all quadrants + axillary tail","quadrant","axillary tail","ครบ","systematic")),P("Nipple–areolar complex","nipple","areola","หัวนม"),H("Lymph nodes",20),CR(P("Axillary and supraclavicular nodes","axill","supraclav","รักแร้","ต่อมน้ำเหลือง"))]}),
  B("4.2 Advice when normal.",3,{tags:["pe"],key:KF+"Screening: >40 ปี MMG q 1 y (นัดปีหน้า) · self breast exam q 1 mo",ans:"ตรวจปกติ · แนะนำ <b>screening mammogram</b> (อายุ ≥40 ปี ทุก 1–2 ปี — USPSTF 2024 ให้ทุก 2 ปีตั้งแต่ 40) · <b>breast self-awareness/self-examination</b> เดือนละครั้งหลังหมดประจำเดือน 7–10 วัน · มาพบแพทย์ทันทีถ้าคลำได้ก้อน มีน้ำ/เลือดจากหัวนม ผิวเปลี่ยน · คุมน้ำหนัก ออกกำลังกาย ลดสุรา",exp:"ญาติสายตรงเป็นมะเร็ง/BRCA → เริ่ม screening เร็วขึ้น + MRI",rubric:"ได้ = mammogram + self exam + red flags",pts:[CR(P("Screening mammogram","mammo","mmg")),P("Monthly self-examination","self","ตรวจเอง","bse"),P("Return if symptoms","lump","ก้อน","discharge","return","มาพบ")]})
 ),
 interp:"Breast examination",
 summary:["Inspection 4 ท่า + palpation ครบ + LN","Screening mammogram ≥40 ปี","Self-exam หลังประจำเดือนหมด 7–10 วัน"]}),

/* ===== OSCE 5 ===== */
Co({page:1,orig:"5",topic:"hx",sub:"Claudication/limb ischemia",ex:1,title:"History taking — leg pain on walking",kimg:["os76c_ko5"],
 stem:`A 60-year-old patient has had leg pain on walking for the past 3 days. Take a focused history, then state what further examination and investigations you would do.`,
 gray:"OSCE 5. ผู้ป่วยอายุ 60 ปี เดินแล้วปวดขามา 3 วัน แสดงการซักประวัติผู้ป่วย และการตรวจเพิ่มเติม",
 sp:"ผู้ป่วยชาย 60 ปี สูบบุหรี่ 30 pack-year, เบาหวาน ความดันสูง ไขมันสูง · ปวดน่องขวาเหมือนตะคริวเมื่อเดินประมาณ 200 เมตร หยุดพัก 2–3 นาทีหาย เป็นแบบเดิมทุกครั้ง (reproducible) · ไม่ปวดตอนพัก ไม่มีแผล ไม่ปวดหลังร้าวลงขา ไม่บวม ไม่มีเส้นเลือดขอด · (ถ้าถามประวัติเดิม: ผู้จด recall บอก 3 วัน — ผู้คุมปรับได้)",
 notes:"ไฟล์ Key 76C หน้า 14: DDx chronic venous insufficiency → ปวดหลังยืนนาน ดีขึ้นเมื่อยกขา · peripheral arterial disease → ปวดเมื่อเดิน พักแล้วดีขึ้น · PE: CVI varicose vein? บวม?, duplex u/s · PAD คลำชีพจร, Brodie-Trendelenburg test, วัด ABI, pulse 4 ext, duplex u/s · หน้า 18–21 สรุปละเอียด CVI (CEAP, Brodie-Trendelenburg, MPFF) และ Bedside PAD (Hx: location, onset, character, aggravating/relieving, intermittent claudication reproducible, risk factors · DDx sciatica, CVI, spinal stenosis · PE pulse 4 extremities, carotid bruit, Buerger test · Ix ABI, duplex, CT)",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 History.",7,{tags:["hx"],key:KF+"Hx PAD: location, onset, character, aggravating/relieving, intermittent claudication (reproducible), risk factors · DDx CVI, sciatica/spinal stenosis",
   ans:"<b>ลักษณะปวด</b>: ตำแหน่ง (น่อง/ต้นขา/สะโพก — บอกระดับรอยโรค), ปวดแบบตะคริว, <b>claudication distance</b>, <b>หยุดพักหายใน &lt;10 นาที</b>, เป็นซ้ำแบบเดิม (reproducible) · <b>rest pain</b> (ปวดกลางคืนต้องห้อยขา), แผล/นิ้วดำ (CLTI) · Leriche: ปวดก้น + ED · <b>Risk factors</b>: <b>สูบบุหรี่</b>, DM, HT, dyslipidemia, CAD/stroke, อายุ · <b>DDx</b>: <b>neurogenic claudication (spinal stenosis)</b> — ดีขึ้นเมื่อนั่ง/ก้ม ไม่ดีขึ้นเมื่อยืนพัก · <b>CVI</b> — ปวดหน่วงตอนยืนนาน บวม ดีขึ้นเมื่อยกขา · sciatica · acute limb ischemia (6P เฉียบพลัน — ประวัติ 3 วันต้องถาม)",
   exp:"เพราะอาการ 3 วันต้องแยก acute limb ischemia (embolism จาก AF) ออกก่อน",rubric:"แบ่งตามหัวข้อ",
   pts:[H("Pain characteristics",40),CR(P("Claudication distance and relief with rest","distance","ระยะ","rest","พัก","หาย")),P("Site of pain","calf","น่อง","thigh","buttock","ตำแหน่ง"),P("Rest pain / ulcer / gangrene","rest pain","night","กลางคืน","ulcer","แผล","gangren"),H("Risk factors",30),CR(P("Smoking and DM/HT/lipid","smok","บุหรี่","dm","เบาหวาน","ht","lipid")),P("Cardio/cerebrovascular disease / AF","cad","stroke","af","heart","หัวใจ"),H("Differentials",30),P("Neurogenic claudication / sciatica","spinal","neurogenic","sciatica","หลัง"),P("Venous: swelling, varicose","venous","varicose","บวม","ขอด"),P("Acute limb ischemia (6P)","acute","6p","pallor","paresthes","เฉียบพลัน")]}),
  B("5.2 Further examination and investigation.",3,{tags:["hx"],key:KF+"PAD: pulse 4 ext, Brodie-Trendelenburg (CVI), ABI, duplex u/s, CT",ans:"<b>คลำชีพจร</b> femoral, popliteal, posterior tibial, dorsalis pedis ทั้งสองข้าง + ฟัง bruit · ผิวหนัง/ขน/เล็บ อุณหภูมิ capillary refill · <b>Buerger test</b> · <b>ABI</b> (≤0.9 = PAD) · <b>Duplex ultrasound</b> · CTA/DSA ถ้าจะ revascularize · ถ้าสงสัย CVI: ตรวจ varicose vein, <b>Brodie-Trendelenburg test</b>, venous duplex · ตรวจ neuro/SLR ถ้าสงสัยกระดูกสันหลัง",exp:"ABI >1.40 (หลอดเลือดแข็ง) → toe-brachial index",rubric:"ได้",pts:[CR(P("Peripheral pulses","pulse","ชีพจร")),CR(P("ABI","abi","ankle")),P("Duplex / CTA","duplex","ultrasound","cta","angiog")]})
 ),
 interp:"Intermittent claudication",
 summary:["Claudication: ปวดเมื่อเดิน พักหาย reproducible","ABI ≤0.9 = PAD","DDx: spinal stenosis, CVI, acute limb ischemia","Tx: หยุดบุหรี่, exercise, antiplatelet+statin, cilostazol"]}),

/* ===== OSCE 6 ===== */
Co({page:1,orig:"6",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — gloving and two vertical mattress sutures",
 stem:`A skin model, gloves, needle holder, forceps, scissors and a nylon suture are provided. The examiner is observing.<br>1. Put on the gloves.<br>2. Close the wound with two vertical mattress stitches.`,
 gray:"OSCE 6. แสดงการใส่ถุงมือ disposable glove และเย็บแผล Vertical mattress 2 คำ",
 sp:"หุ่นแผล · ถุงมือ (ผู้จดเขียน disposable glove — ถ้าเป็นถุงมือ sterile ให้ใส่แบบ closed/open technique ไม่ปนเปื้อน) · ผู้คุมดู: ล้างมือ, ใส่ถุงมือถูกต้อง, ไม่ปนเปื้อน, จับเครื่องมือถูก, vertical mattress far-far near-near ระยะเท่ากัน, ขอบแผล evert, ปม square ≥3, ตัดไหมเหลือพอดี",
 notes:"ไฟล์ Key 76C หน้า 22 แปะภาพขั้นตอนการใส่ถุงมือ (หยิบที่ขอบพับ, สอดมือ, ใช้มือที่ใส่แล้วสอดใต้ขอบพับ, กลับขอบ) และลิงก์วิดีโอ vertical mattress",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 Gloving.",3,{tags:["proc"],key:KF+"(ภาพขั้นตอนใส่ถุงมือ)",ans:"ล้างมือ · หยิบถุงมือข้างแรกที่<b>ด้านในของขอบพับ (cuff)</b> ใส่ · มือที่ใส่ถุงมือแล้ว<b>สอดใต้ขอบพับด้านนอก</b>ของอีกข้าง ใส่ · พลิกขอบพับขึ้น · ไม่แตะผิวด้านนอกของถุงมือด้วยมือเปล่า · มืออยู่เหนือเอว",exp:"ปนเปื้อน = เปลี่ยนใหม่",rubric:"ได้",pts:[CR(P("No-touch technique","cuff","ขอบพับ","inside","ด้านใน","under","ใต้")),P("Hands above waist","waist","เอว")]}),
  B("6.2 Two vertical mattress stitches.",7,{tags:["proc"],ans:"<b>Far–far</b> (ห่างขอบ 5–8 mm ลึก) → <b>near–near</b> (1–2 mm ตื้น) ด้านเดียวกัน · ระยะห่างระหว่างเข็ม ~1 cm · ผูก instrument tie square knot ≥3 ปม · ขอบแผล <b>evert</b> · ไม่รัดแน่นเกิน · ตัดไหมเหลือ ~5 mm",exp:"Vertical mattress ช่วยให้ขอบแผล evert ดี ลดรอยแผลยุบ เหมาะกับผิวหนังหนาหรือขอบที่ม้วนเข้า",rubric:"เทคนิค + ปม + eversion",pts:[CR(P("Far-far near-near sequence","far","near","ไกล","ใกล้")),P("Equal bites both sides","equal","เท่ากัน"),CR(P("Secure square knots","knot","ปม","square")),P("Edge eversion","evert","ขอบยก")]})
 ),
 interp:"Gloving + vertical mattress",
 summary:["Open-glove technique ไม่แตะผิวนอก","Vertical mattress: far-far, near-near → eversion"]}),

/* ===== OSCE 7 ===== */
Co({page:1,orig:"7",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — DRE on a prostate model",
 stem:`A prostate examination model is provided.<br>1. Perform a digital rectal examination.<br>2. Describe the lesion and give the diagnosis.`,
 gray:"OSCE 7. ให้หุ่น prostate exam มา ให้ล้วงตรวจเอง ให้บรรยาย lesion และแสดงการวินิจฉัย",
 sp:"หุ่น DRE ที่มีรอยโรค (ผู้จดไม่ได้จดว่าเป็นแบบไหน — ผู้คุมเลือก เช่น ต่อมโตเรียบ rubbery ไม่มี nodule = BPH หรือ แข็งขรุขระ ลบ median sulcus = CA) · ผู้คุมดู: consent, chaperone, ท่า left lateral, ถุงมือ+เจล, ดู perianal, ประเมิน anal tone, คลำครบ (size, surface, consistency, sulcus, nodule, tenderness), ดูถุงมือ, ทำความสะอาด",
 flag:"ผู้จดไม่ได้จดลักษณะรอยโรคในหุ่น — เฉลยเขียนการบรรยายทั้งแบบ BPH และ CA",
 notes:"ไฟล์ Key 76C ไม่มีเฉลยข้อนี้",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจปานกลาง (ไม่รู้ว่าหุ่นจริงเป็นรอยโรคแบบไหน)",
 parts:S(
  B("7.1 DRE technique.",6,{tags:["pe"],ans:"Consent + chaperone · <b>left lateral</b> งอสะโพกเข่า · ถุงมือ + เจล · <b>inspect perianal</b> · สอดนิ้วช้า ๆ · <b>anal tone</b> · คลำ prostate ครบ · คลำผนัง rectum รอบ · <b>ดูถุงมือ</b> (เลือด มูก) · เช็ดทำความสะอาด",exp:"ตรวจทุกครั้งต้องมี chaperone และขออนุญาต · ดูถุงมือหลังตรวจหาเลือด/มูก",rubric:"แบ่งตามขั้น",pts:[P("Consent/chaperone","consent","ขออนุญาต","chaperone"),P("Left lateral position","left lateral","ตะแคงซ้าย"),P("Inspect perianal","inspect","ดู"),P("Anal tone","tone","sphincter"),CR(P("Systematic prostate palpation","size","ขนาด","consisten","sulcus","surface")),P("Check glove / clean","glove","ถุงมือ","clean","เช็ด")]}),
  B("7.2 Describe and diagnose.",4,{tags:["pe"],ans:"BPH: <b>ต่อมโตเรียบ rubbery</b> สมมาตร median sulcus ชัดหรือตื้น ไม่เจ็บ → <b>BPH</b> · CA: <b>แข็งเป็นหิน ขรุขระ/nodule</b> ลบ median sulcus ไม่สมมาตร ± ติดแน่น → <b>prostate cancer</b> → PSA + MRI + biopsy · นุ่ม boggy กดเจ็บ → prostatitis",exp:"ต้องบรรยายเป็นระบบก่อนสรุป",rubric:"ได้ = บรรยายครบ + dx สอดคล้อง",pts:[CR(P("Systematic description","size","ขนาด","consisten","sulcus","nodule")),CR(P("Diagnosis consistent with findings","bph","hyperplasia","cancer","ca","มะเร็ง","ต่อมโต"))]})
 ),
 interp:"DRE",
 summary:["BPH: rubbery smooth enlarged","CA: hard irregular, obliterated sulcus","Prostatitis: boggy tender"]}),

/* ===== OSCE 8 ===== */
Co({page:2,orig:"8",topic:"inst",sub:"Surgical instrument",title:"Instruments — retractor, scissors, trocar, Babcock clamp and chest tube",img:["os76c_o8"],kimg:["os76c_ko8"],
 stem:`Five items are shown.<br>Name each item and state its use.`,
 gray:"OSCE 8. มีอุปกรณ์มาให้ ถามว่าคืออะไรและใช้ทำอะไร [รูป 5 ชิ้น]",
 notes:"ไฟล์ Key 76C: Army Navy retractor — tissue retraction in minor surgical site · Curved Mayo scissors — cut large or thick tissue, cut deeper tissue from the surface · Trocar — working port, inserted instruments for laparoscopic surgery · Babcock clamp — hold tubular structure of viscera atraumatically e.g. appendix · chest tube — drainage from pleural space",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("8.1 Names and uses.",10,{tags:["inst"],key:KF+"Army Navy retractor (retraction minor site) · curved Mayo scissors (cut thick tissue) · trocar (laparoscopic port) · Babcock clamp (hold tubular viscera atraumatically e.g. appendix) · chest tube (pleural drainage)",
   ans:"1. <b>Army-Navy retractor</b> — แหวกผิวหนัง/ชั้นตื้นในแผลขนาดเล็ก-กลาง · 2. <b>Curved Mayo scissors</b> — ตัดเนื้อเยื่อหนา fascia (straight Mayo ตัดไหม) · 3. <b>Laparoscopic trocar (port)</b> — ช่องให้ใส่กล้องและเครื่องมือผ่าตัดส่องกล้อง · 4. <b>Babcock clamp</b> — จับอวัยวะท่อ/ลำไส้ appendix แบบไม่บาดเจ็บ (atraumatic) · 5. <b>Intercostal chest drain (chest tube)</b> — ระบายลม/เลือด/น้ำ/หนองจาก pleural space",
   exp:"Babcock (ปลายกลม ไม่มีเขี้ยว) vs Allis (มีเขี้ยวเล็ก)",rubric:"2 คะแนนต่อชิ้น",
   pts:[H("Retractor",20),CR(P("Army-Navy retractor","army","navy")),H("Scissors",20),CR(P("Mayo scissors","mayo")),H("Trocar",20),CR(P("Trocar / laparoscopic port","trocar","port","laparoscop")),H("Babcock",20),CR(P("Babcock clamp","babcock")),H("Chest tube",20),CR(P("Chest drain","chest","icd","intercostal"))]})
 ),
 interp:"Surgical instruments",
 summary:["Army-Navy/Senn: แหวกแผลตื้น","Mayo: ตัดเนื้อหนา · Metzenbaum: เนื้ออ่อน","Babcock: atraumatic จับลำไส้/appendix","Trocar: laparoscopic port"]}),

/* ===== OSCE 9 ===== */
Co({page:2,orig:"9",topic:"suture",sub:"Suture material",title:"Suture materials — inguinal hernia repair",img:["os76c_o9"],kimg:["os76c_ko9"],
 stem:`During an inguinal herniorrhaphy, the hernia is repaired with ___, the external oblique aponeurosis is closed with ___, a bleeding artery in the fat layer is ligated with ___, the skin is closed with ___, using the ___ technique. Five suture packets (A–E) are shown.<br>1. Fill in the blanks.<br>2. Name all 5 sutures.<br>3. Give the material of each.<br>4. Give the properties of each.`,
 gray:"OSCE 9. คนไข้ผ่าตัดไส้เลื่อน ทำ herniorrhaphy เย็บซ่อม hernia ด้วย___ เย็บปิด external oblique aponeurosis ด้วย___ ระหว่างเย็บชั้นไขมันเลือดออก ต้องผูก artery ด้วย___ จากนั้นจึงปิด skin ด้วย___, และใช้เทคนิคเย็บคือ_____ 1.เติมอักษรในช่องว่าง 2.บอกชื่อไหมทั้ง 5 3.บอกชื่อวัสดุของไหมทั้ง 5 4.บอกคุณสมบัติของไหมทั้ง 5 [รูปซองไหม A–E]",
 flag:"ไฟล์เฉลยบอกชื่อ/วัสดุ/คุณสมบัติ แต่ไม่ได้เติมช่องว่าง — Claude เติมเอง",
 notes:"ไฟล์ Key 76C: A Vicryl — polyglactin, absorbable synthetic multifilament · B Catgut — cattle gut, absorbable natural monofilament · C Nylon — polyamide, non-absorbable synthetic monofilament · D Prolene — polypropylene, non-absorbable synthetic monofilament · E Silk — product from silk worm, non-absorbable natural multifilament (ขีดที่ A, C, D)",
 opinion:"ชื่อ/คุณสมบัติตามเฉลยในไฟล์ ความมั่นใจสูง · การเติมช่องว่าง Claude เติมเอง ความมั่นใจปานกลาง",
 parts:S(
  B("9.1 Fill in the blanks.",5,{tags:["suture"],ans:"ซ่อม hernia (Lichtenstein mesh/Bassini) = <b>D Prolene</b> · ปิด external oblique aponeurosis = <b>A Vicryl</b> · ผูก artery ในชั้นไขมัน = <b>E Silk</b> (หรือ <b>B catgut</b>/Vicryl เส้นเล็ก) · ปิด skin = <b>C Nylon</b> · เทคนิค = <b>simple interrupted</b> (หรือ subcuticular ถ้าใช้ absorbable)",exp:"Repair hernia ต้องใช้ non-absorbable (แรงดึงคงที่)",rubric:"1 คะแนนต่อช่อง",
   pts:[CR(P("Hernia repair – Prolene (D)","prolene","polypropyl","\\bd\\b")),P("External oblique – Vicryl (A)","vicryl","polyglactin"),P("Artery ligation – silk or catgut","silk","catgut"),P("Skin – nylon (C)","nylon","ethilon"),P("Simple interrupted","simple","interrupt")]}),
  B("9.2 Names, materials and properties of A–E.",5,{tags:["suture"],key:KF+"A Vicryl (polyglactin, absorbable synthetic multifilament) · B Catgut (cattle gut, absorbable natural monofilament) · C Nylon (polyamide, non-absorbable synthetic monofilament) · D Prolene (polypropylene, non-absorbable synthetic monofilament) · E Silk (silk worm, non-absorbable natural multifilament)",
   ans:"A <b>Vicryl</b> = polyglactin 910 · absorbable · synthetic · braided multifilament<br>B <b>Catgut</b> (plain/chromic) = ลำไส้แกะ/วัว (collagen) · absorbable · natural · monofilament (twisted) · สลายด้วย proteolysis (inflammatory reaction มาก)<br>C <b>Ethilon (nylon)</b> = polyamide · non-absorbable · synthetic · monofilament<br>D <b>Prolene</b> = polypropylene · non-absorbable · synthetic · monofilament<br>E <b>Silk</b> = รังไหม (fibroin) · non-absorbable · natural · braided multifilament",exp:"Synthetic absorbable สลายด้วย hydrolysis (reaction น้อยกว่า natural)",rubric:"1 คะแนนต่อชนิด",
   pts:[P("Vicryl – polyglactin absorbable multifilament","vicryl","polyglactin"),P("Catgut – natural absorbable","catgut","gut"),P("Nylon – polyamide non-absorbable monofilament","nylon","polyamide"),P("Prolene – polypropylene non-absorbable monofilament","prolene","polypropyl"),P("Silk – natural non-absorbable multifilament","silk")]})
 ),
 interp:"Suture materials",
 summary:["Absorbable: catgut (natural), Vicryl, PDS, Monocryl","Non-absorbable: silk, nylon, prolene","Hernia repair/vascular = prolene · skin = nylon"]}),

/* ===== OSCE 10 ===== */
Co({page:3,orig:"10",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — painful swollen big toe nail fold",img:["os76c_o10"],kimg:["os76c_ko10"],
 stem:`A 20-year-old man has a painful, swollen big toe beside the nail, as shown.<br>1. What is the diagnosis?<br>2. Give 2 important causes.<br>3. How would you treat it?`,
 gray:"OSCE 10. ผู้ป่วยชาย 20 ปี มาด้วยเจ็บนิ้วโป้งเท้าและเล็บบวม ถามว่าคืออะไร สาเหตุสำคัญ 2 ข้อ และวิธีการรักษา [รูป]",
 notes:"ไฟล์ Key 76C: Paronychia · สาเหตุ ตัดเล็บผิด, ใส่รองเท้าผิด · รักษา warm soak 3–4 times/day, oral ATB, I&D, remove nail",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง (ลักษณะในรูปเข้ากับ ingrown toenail ที่มี paronychia)",
 parts:S(
  B("10.1 Diagnosis.",2,{tags:["img"],key:KF+"Paronychia",ans:"<b>Ingrown toenail (onychocryptosis) with acute paronychia</b> — ขอบเล็บกดเข้า lateral nail fold บวมแดงอักเสบ",exp:"Wedge resection + phenol matricectomy ลด recurrence เหลือ <10%",rubric:"ได้",pts:[CR(P("Paronychia / ingrown toenail","paronych","ingrown","onychocrypt","เล็บขบ"))]}),
  B("10.2 Two important causes.",2,{tags:["img"],key:KF+"ตัดเล็บผิด, ใส่รองเท้าผิด",ans:"<b>ตัดเล็บผิดวิธี</b> (ตัดโค้ง/สั้นเกินที่มุม) · <b>รองเท้าคับ/หัวแคบ</b> · (อื่น: เหงื่อมาก, บาดเจ็บ, เล็บผิดรูป)",exp:"ตัดเล็บตรงขวาง ไม่ตัดมุมลึก",rubric:"1 คะแนน/ข้อ",pts:[P("Improper nail trimming","cut","ตัดเล็บ","trim"),P("Tight footwear","shoe","รองเท้า","footwear")]}),
  B("10.3 Treatment.",4,{tags:["img"],key:KF+"warm soak 3–4 times/day, oral ATB, I&D, remove nail",ans:"อาการน้อย: <b>warm soak</b> วันละ 3–4 ครั้ง, ยกขอบเล็บด้วยสำลี, รองเท้าหลวม · ติดเชื้อ: <b>oral antibiotic</b> (cloxacillin/cephalexin) · มีหนอง: <b>I&amp;D</b> · เป็นซ้ำ/รุนแรง: <b>partial (wedge) nail avulsion + matricectomy</b> (phenol) ใต้ digital block",exp:"Total nail avulsion อย่างเดียวเป็นซ้ำสูง",rubric:"ได้ = conservative + surgical",pts:[P("Warm soak / footwear","soak","แช่","น้ำอุ่น"),P("Oral antibiotics","antibiot","atb","ยา"),CR(P("Drainage / partial nail avulsion","i ?& ?d","drain","avulsion","remove nail","ถอดเล็บ","wedge","matricectomy"))]})
 ),
 interp:"Ingrown toenail / paronychia",
 summary:["สาเหตุ: ตัดเล็บผิด รองเท้าคับ","Warm soak + ATB → partial avulsion + matricectomy"]}),

/* ===== OSCE 11 ===== */
Co({page:3,orig:"11",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — fever with a black scrotal wound",img:["os76c_o11"],kimg:["os76c_ko11"],
 stem:`A man in his 30s has fever and a wound on the scrotum, as shown.<br>1. What is the diagnosis?<br>2. How would you treat him?`,
 gray:"OSCE 11. ผู้ป่วยชาย 30 กว่าปี มีไข้ขึ้นและมีแผลที่ถุงอัณฑะ ถามว่าเป็นโรคอะไร รักษายังไง [รูป]",
 notes:"ไฟล์ Key 76C: Fournier gangrene = necrotizing fasciitis of external genitalia that can spread rapidly to the anterior abdominal wall and gluteal muscles · Medical treatment: restoration of normal organ perfusion, reduction of systemic toxicity, broad spectrum antibiotics to cover anaerobes (cipro+clinda+metro), vancomycin for MRSA, tetanus prophylaxis, irrigation, hyperbaric oxygen, IVIG, antifungal if required · Surgical: repeated aggressive debridement, preservation of testes (subcutaneous pocket) · หน้า 23: emergency radical debridement + ATB",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("11.1 Diagnosis.",2,{tags:["img"],key:KF+"Fournier gangrene",ans:"<b>Fournier gangrene</b> — necrotizing fasciitis ของ perineum/scrotum (polymicrobial) · ผิวดำ necrotic, crepitus, ปวดมากเกินลักษณะผิว, sepsis · risk: DM, alcohol, ภูมิต่ำ, perianal abscess/urethral stricture",exp:"อัณฑะมักไม่ตายเพราะเลือดมาจาก testicular artery",rubric:"ได้",pts:[CR(P("Fournier gangrene / necrotizing fasciitis","fournier","necrotizing","เนื้อเน่า"))]}),
  B("11.2 Treatment.",5,{tags:["img"],key:KF+"emergency radical debridement + ATB (broad spectrum + anaerobe ± MRSA) · resuscitation · tetanus · repeated debridement · preserve testes",ans:"<b>Resuscitation</b> (IV fluid, sepsis bundle) · <b>broad-spectrum IV antibiotics</b> ครอบคลุม gram-positive, gram-negative, anaerobe (เช่น piperacillin-tazobactam/carbapenem + clindamycin ± vancomycin) · <b>emergency radical surgical debridement</b> จนถึงเนื้อดี และ <b>second look ซ้ำทุก 24–48 ชม.</b> · หาต้นเหตุ (anorectal, urologic) — อาจต้อง diverting colostomy/suprapubic cystostomy · tetanus prophylaxis · คุมน้ำตาล · หลังหาย: skin graft/flap, อัณฑะไว้ใน thigh pocket",exp:"ความล่าช้าในการผ่าตัดเพิ่ม mortality มาก",rubric:"ได้ = debridement ด่วน + ATB",pts:[CR(P("Emergency radical debridement","debride","ตัดเนื้อตาย","ผ่าตัด")),CR(P("Broad-spectrum IV antibiotics","antibiot","atb","clinda","carbapenem","meropenem")),P("Resuscitation","resusc","fluid","สารน้ำ"),P("Repeat debridement / diversion","repeat","second look","ซ้ำ","colostomy","cystostomy")]})
 ),
 interp:"Fournier gangrene",
 summary:["Necrotizing fasciitis ของ perineum","Resuscitate + broad ATB + emergency debridement","Second look ซ้ำ"]}),

/* ===== OSCE 12 ===== */
Co({page:3,orig:"12",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — lesion of the glans penis",img:["os76c_o12"],kimg:["os76c_ko12"],
 stem:`A photograph of the penis is shown.<br>1. What is the diagnosis?<br>2. What is the surgical management?`,
 gray:"OSCE 12. วินิจฉัยและ surgical management [รูป]",
 notes:"ไฟล์ Key 76C: Dx Penile tumor · Tx Incisional Bx",
 opinion:"เห็นด้วยกับเฉลยในไฟล์บางส่วน ความมั่นใจปานกลาง — biopsy เป็นขั้นแรก แต่การผ่าตัดรักษาคือ glansectomy/partial penectomy ตามขนาดและระยะ",
 parts:S(
  B("12.1 Diagnosis.",2,{tags:["img"],key:KF+"Penile tumor",ans:"<b>Penile carcinoma (squamous cell carcinoma) ของ glans</b> — ก้อน/แผลขอบนูนผิวขรุขระที่ glans ในชายที่ไม่ได้ขลิบ",exp:"DDx: condyloma, erythroplasia of Queyrat (CIS), balanitis",rubric:"ได้",pts:[CR(P("Penile carcinoma / SCC","penile","scc","squamous","carcinoma","cancer","tumor","มะเร็ง"))]}),
  B("12.2 Surgical management.",4,{tags:["img"],key:KF+"Incisional Bx",ans:"<b>Biopsy</b> ยืนยัน (incisional/excisional) · รักษาหลักตามขนาด/ระยะ: ก้อนเล็กที่ glans → <b>glansectomy/wide local excision</b> หรือ <b>partial penectomy</b> (margin ปลอดเนื้องอก, เหลือตอให้ยืนปัสสาวะได้) · ก้อนใหญ่ลามถึงโคน → total penectomy + perineal urethrostomy · ประเมิน <b>inguinal LN</b> (DSNB/inguinal lymphadenectomy ตาม risk)",exp:"Tis/T1 เล็กอาจรักษาแบบอนุรักษ์ (laser, topical)",rubric:"ได้ = biopsy + partial penectomy + LN",pts:[CR(P("Biopsy","biopsy","bx","ชิ้นเนื้อ")),CR(P("Partial penectomy / glansectomy","partial","glansectomy","penectomy","excision")),P("Inguinal node assessment","inguinal","lymph","node","ต่อมน้ำเหลือง")]})
 ),
 interp:"Penile cancer",
 summary:["Penile SCC: phimosis, HPV, smoking","Biopsy → glansectomy/partial penectomy","Inguinal LN staging"]}),

/* ===== MEQ 1 ===== */
SA({page:4,orig:"MEQ 1",num:"SA 1",sub:"Imaging film",title:"Short answer — gallbladder ultrasound after a fatty meal",img:["os76c_m1"],kimg:["os76c_km1"],
 stem:`A patient has had abdominal pain for 1 week after eating a grilled-pork buffet; a similar episode occurred 1 month ago. A gallbladder ultrasound is shown.<br>1. Describe the findings.<br>2. What is the diagnosis?<br>3. How would you treat this patient?`,
 gray:"MEQ 1. กินหมูกระทะแล้วปวดท้องมา 1 สัปดาห์ ก่อนหน้านี้ 1 เดือนก็เป็น ให้รูป Ultrasound ถุงน้ำดีมา ให้บรรยายผล วินิจฉัย และรักษา",
 notes:"ไฟล์ Key 76C ชี้ในรูป: (1) pericholecystic fluid (2) thickened wall (>3 mm) (3) bile sludge (4) gallbladder stone (ตัวนี้ stone ป่าว?) · Dx Acute cholecystitis · Mx Laparoscopic cholecystectomy (LC) · ตรวจคีย์ 22 พ.ย. 2026: เดิมคำตอบ ‘wall thickening (>3 mm)’ ตามคีย์ไฟล์ → แก้เป็น ‘≥4 mm’ (ข้อ 1.1) ตาม Tokyo Guidelines 2018 (TG18, Yokoe et al. JHBPS 2018 CQ5: GB wall thickening ≥4 mm; TG13 ใช้ ≥5 mm)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): เกณฑ์ผนังถุงน้ำดีหนาใน US ใช้ ≥4 mm ตาม TG18 (TG13 ใช้ ≥5 mm) — ถ้าเขียนตัวเลขให้ระบุชื่อแนวทาง · ความมั่นใจสูง",
 parts:S(
  B("1.1 Findings.",3,{tags:["spot"],key:KF+"pericholecystic fluid, thickened wall >3 mm, bile sludge, gallbladder stone",ans:"<b>Gallbladder wall thickening (≥4 mm</b> ตาม TG18; คีย์ไฟล์เขียน &gt;3 mm<b>)</b> · <b>pericholecystic fluid</b> · <b>gallstone ± sludge</b> (echogenic + posterior acoustic shadow) · distended GB · (sonographic Murphy sign ถ้าตรวจ)",exp:"Sonographic Murphy sign (กดหัว probe แล้วเจ็บที่ GB) เพิ่มความจำเพาะ",rubric:"ได้ ≥2",pts:[G("Findings ≥2",2,P("Wall thickening","thick","หนา"),P("Pericholecystic fluid","pericholecystic","fluid","น้ำรอบ"),P("Gallstone / sludge","stone","นิ่ว","sludge","shadow"),P("Distended GB / Murphy","distend","murphy"))]}),
  B("1.2 Diagnosis.",2,{tags:["spot"],key:KF+"Acute cholecystitis",ans:"<b>Acute calculous cholecystitis</b> (Tokyo Guidelines 2018: local signs + systemic inflammation + imaging)",exp:"ประเมิน severity grade I–III",rubric:"ได้",pts:[CR(P("Acute cholecystitis","cholecystitis"))]}),
  B("1.3 Treatment.",3,{tags:["spot"],key:KF+"Laparoscopic cholecystectomy (LC)",ans:"NPO, IV fluid, analgesia, <b>IV antibiotics</b> · <b>early laparoscopic cholecystectomy</b> (ภายใน 72 ชม.–7 วันของอาการ) ในผู้ที่ทนผ่าตัดได้ · เสี่ยงสูง/grade III → percutaneous cholecystostomy แล้ว interval LC",exp:"อาการมา 1 สัปดาห์ — TG18 ยังทำ early LC ได้ในศูนย์ที่ชำนาญ",rubric:"ได้",pts:[P("Antibiotics + supportive","antibiot","npo","fluid"),CR(P("Laparoscopic cholecystectomy","cholecystectomy","lc","ตัดถุงน้ำดี"))]})
 ),
 interp:"Acute cholecystitis",
 summary:["US: wall ≥4 mm (TG18), pericholecystic fluid, stone, sonographic Murphy","TG18 grading","Early LC"]}),

/* ===== MEQ 2 ===== */
SA({page:4,orig:"MEQ 2",num:"SA 2",sub:"Imaging film",title:"Short answer — upright chest radiograph in abdominal pain",img:["os76c_m2"],kimg:["os76c_km2"],
 stem:`A patient has acute abdominal pain. An upright PA chest radiograph is shown.<br>1. What physical findings would you expect?<br>2. Describe the film.<br>3. What is the cause?<br>4. How would you treat this patient?`,
 gray:"MEQ 2. คนไข้ปวดท้อง มี upright PA CXR ตรวจร่างกายเจออะไร บรรยายฟิล์ม เกิดจากอะไร รักษายังไง",
 notes:"ไฟล์ Key 76C: PE distended abdomen, loss of hepatic dullness, ถ้าทะลุ 4–6 hr + มี guarding, board-like rigidity · film: CXR PA upright, adequate inspiratory effort, no rotation, cardiomegaly, multiple air-fluid level, continuous diaphragm sign, double bowel wall sign · cause: pneumoperitoneum from ruptured bowel (gut obstruction, bowel ischemia) · Tx: NPO, exploratory laparotomy (confirm by PE) · CT, left lat decubitus film · แปะสไลด์ Leaping dolphin sign, Rigler's sign (double bowel wall), continuous diaphragm sign",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("2.1 Physical findings.",2,{tags:["spot"],key:KF+"distended abdomen, loss of liver dullness, guarding, board-like rigidity",ans:"<b>Generalized peritonitis</b>: guarding, <b>board-like rigidity</b>, rebound tenderness, bowel sounds ลด · <b>loss of liver dullness</b> · tachycardia, ไข้",exp:"ผู้ป่วยสูงอายุ/ใช้ steroid อาจไม่มี peritonism ชัด",rubric:"ได้",pts:[CR(P("Peritonitis / rigidity / guarding","rigid","guard","peritonit","rebound")),P("Loss of liver dullness","liver dull","hepatic dull")]}),
  B("2.2 Describe the film.",3,{tags:["spot"],key:KF+"adequate film, free air, continuous diaphragm sign, double bowel wall (Rigler) sign",ans:"Upright PA CXR film คุณภาพดี · <b>free air ใต้ diaphragm</b> (pneumoperitoneum) · อาจเห็น <b>continuous diaphragm sign</b>, <b>Rigler (double-wall) sign</b>",exp:"ถ้ายืนไม่ได้ ใช้ left lateral decubitus film หรือ CT (ไวที่สุด)",rubric:"ได้",pts:[CR(P("Free air under diaphragm","free air","pneumoperitoneum","ลมใต้","subdiaphragm")),P("Continuous diaphragm / Rigler sign","continuous","rigler","double")]}),
  B("2.3 Cause.",1,{tags:["spot"],key:KF+"pneumoperitoneum from ruptured bowel",ans:"<b>Perforated hollow viscus</b> — ที่พบบ่อยคือ <b>perforated peptic ulcer</b>, อื่น ๆ: perforated diverticulitis, appendicitis, ลำไส้ทะลุจาก obstruction/ischemia/trauma",exp:"Perforated PU พบ free air ~75%; CT ไวกว่า CXR",rubric:"ได้",pts:[CR(P("Hollow viscus perforation","perforat","ทะลุ","rupture"))]}),
  B("2.4 Treatment.",2,{tags:["spot"],key:KF+"NPO, exploratory laparotomy",ans:"NPO, NG, IV fluid resuscitation, broad-spectrum IV antibiotic, PPI (ถ้าสงสัย PU) · <b>emergency exploratory laparotomy</b> (หรือ laparoscopy) ซ่อมรูทะลุ (Graham patch) + peritoneal lavage",exp:"ปิดรูทะลุ duodenal ulcer ด้วย omental (Graham) patch + ตรวจ H. pylori หลังผ่าตัด",rubric:"ได้",pts:[P("Resuscitation + antibiotics","fluid","antibiot","npo","ng"),CR(P("Emergency laparotomy","laparotomy","explor","ผ่าตัด","graham"))]})
 ),
 interp:"Pneumoperitoneum",
 summary:["Free air ใต้ diaphragm = perforated viscus","Rigler, continuous diaphragm sign","Resuscitate → emergency laparotomy"]}),

/* ===== MEQ 3 ===== */
SA({page:4,orig:"MEQ 3",num:"SA 3",sub:"Imaging film",title:"Short answer — sudden chest pain in a long-term smoker",img:["os76c_m3"],kimg:["os76c_km3"],
 stem:`A patient who has smoked for 20 years has sudden chest pain. A chest radiograph is shown.<br>1. Describe the film.<br>2. What is the diagnosis?<br>3. How would you treat this patient?`,
 gray:"MEQ 3. คนไข้สูบบุหรี่มา 20 ปี เจ็บหน้าอกกะทันหัน ให้บรรยายฟิล์ม วินิจฉัย รักษา",
 notes:"ไฟล์ Key 76C (คนแรก): hyperinflated lung (ant. rib >6, post. rib >10), tracheal shift to the left, flatten hemidiaphragm · Dx pneumothorax · Tx right side ICD at anterior to midaxillary line, 5th intercostal space · (คนที่สอง) Primary spontaneous pneumothorax: visible Rt visceral pleural line with peripheral no lung marking, air density, collapsed Rt lung, no subcutaneous emphysema/pneumomediastinum, no tracheal deviation · size >3 cm at apex, >2 cm at lateral → large pneumothorax ใน PSP เลือก aspirate (ใส่ cannula) · แปะ flowchart management of spontaneous pneumothorax",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง — คนเฉลยสองคนบรรยาย tracheal shift ต่างกัน · ผู้ป่วยสูบบุหรี่ 20 ปีอาจมี COPD (secondary spontaneous pneumothorax) ซึ่งควรใส่ chest drain มากกว่า aspiration",
 parts:S(
  B("3.1 Describe the film.",3,{tags:["spot"],key:KF+"visible right visceral pleural line, no lung marking peripherally, collapsed right lung, ± hyperinflation, tracheal position",ans:"CXR PA · <b>visible right visceral pleural line</b> · <b>ไม่มี lung markings</b> นอกเส้น (hyperlucent) · ปอดขวายุบ · ประเมินขนาด (BTS: rim ≥2 cm ที่ระดับ hilum = large) · ดู <b>trachea/mediastinum shift</b> (tension) · ปอดอีกข้าง hyperinflated ได้ถ้ามี COPD",exp:"Pleural line + ไม่มีลายปอดด้านนอก แยกจาก skin fold ที่ลายปอดยังต่อเนื่องเลยขอบ",rubric:"ได้",pts:[CR(P("Visceral pleural line","pleural line","visceral")),CR(P("No lung markings / collapsed lung","no lung mark","absent","collapse","ยุบ")),P("Size / mediastinal shift","size","ขนาด","shift","trachea")]}),
  B("3.2 Diagnosis.",1,{tags:["spot"],key:KF+"(right) pneumothorax — primary spontaneous",ans:"<b>Right spontaneous pneumothorax</b> (smoker อายุมาก/สูบนาน → นึกถึง <b>secondary</b> จาก COPD/emphysema ด้วย)",exp:"สูบบุหรี่นานทำให้เกิด emphysema/bullae → secondary spontaneous pneumothorax ซึ่งรุนแรงกว่า",rubric:"ได้",pts:[CR(P("Pneumothorax","pneumothorax"))]}),
  B("3.3 Treatment.",3,{tags:["spot"],key:KF+"right ICD at anterior to mid-axillary line, 5th ICS · (PSP large → aspiration)",ans:"O₂ · ถ้า tension → needle decompression · PSP ใหญ่/มีอาการ → <b>needle aspiration</b> หรือ small-bore drain · SSP (COPD) → <b>intercostal chest drain</b> ที่ <b>5th ICS anterior–mid axillary line</b> ฝั่งขวา · admit · เลิกบุหรี่ · พิจารณา VATS เมื่อ air leak นาน/เป็นซ้ำ/SSP",exp:"SSP ใส่ chest drain และ admit เสมอ · PSP อาจ aspiration หรือ conservative",rubric:"ได้",pts:[CR(P("Chest drain / aspiration","icd","drain","chest tube","aspirat")),P("Safe triangle 5th ICS","5th","safe","mid.?axillary"),P("Stop smoking / VATS if recurrent","smok","บุหรี่","vats","recur")]})
 ),
 interp:"Spontaneous pneumothorax",
 summary:["Visceral pleural line + no markings","PSP vs SSP (COPD)","ICD 5th ICS safe triangle"]}),

/* ===== MEQ 4 ===== */
SA({page:5,orig:"MEQ 4",num:"SA 4",sub:"Breast",title:"Short answer — red swollen breast with fixed axillary node, then bone scan",img:["os76c_m4a","os76c_m4b"],kimg:["os76c_km4"],
 stem:`A woman has a red, enlarged left breast with mild tenderness and a fixed left axillary lymph node (first photograph).<br>1. Describe the lesion.<br>2. What diagnoses do you suspect?<br>3. What further investigations would you request?<br>A second image is then shown (second picture).<br>4. What is this investigation, and what else would you do to complete staging?`,
 gray:"MEQ 4. ให้รูปเต้านมมา mild tenderness และมี fixed left axillary LN ให้บรรยาย lesion โรคที่สงสัย การตรวจเพิ่มเติม · ต่อมามีรูป [bone scan] ถามว่าคืออะไร และจะตรวจอะไรอีกเพื่อประเมิน staging",
 notes:"ไฟล์ Key 76C: ill-define erythematous of left breast, skin retraction at right inner upper and lower quadrant · well-define erythematous lesion at right inner lower quadrant adjacent to areola · DDx inflamed breast cancer, mastitis, breast abscess · Inves: U/S, MMG, bone scan · รูปที่สอง: bone scan/bone scintigraphy · LN core needle biopsy · U/S, MMG → BI-RADS · T4b N2 M1 → stage 4 (skin, fixed, bone metas)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("4.1 Describe the lesion.",2,{tags:["spot"],key:KF+"ill-defined erythema of left breast, skin retraction, well-defined erythematous lesion near areola",ans:"เต้านมซ้ายโตกว่าขวา <b>ผิวแดงกว้างขอบไม่ชัด</b> ± <b>peau d'orange</b> ± skin/nipple retraction · คลำ <b>fixed axillary node</b>",exp:"Peau d'orange = dermal lymphatic obstruction จาก tumor emboli · erythema กว้าง ≥⅓ ของเต้านม = inflammatory breast cancer (T4d)",rubric:"ได้",pts:[CR(P("Erythema / enlarged breast","erythem","แดง","enlarg","โต")),P("Peau d'orange / retraction","peau","retract","ดึงรั้ง","orange")]}),
  B("4.2 Suspected diagnoses.",2,{tags:["spot"],key:KF+"inflamed breast cancer, mastitis, breast abscess",ans:"<b>Inflammatory breast cancer / locally advanced breast cancer (T4)</b> · DDx: <b>mastitis</b>, <b>breast abscess</b> (ไม่ดีขึ้นด้วย ATB 1–2 สัปดาห์ → biopsy)",exp:"Fixed axillary LN = N2",rubric:"ได้ = IBC + mastitis/abscess",pts:[CR(P("Inflammatory / advanced breast cancer","inflammatory","cancer","carcinoma","มะเร็ง")),P("Mastitis / abscess","mastitis","abscess","ฝี")]}),
  B("4.3 Further investigations.",2,{tags:["spot"],key:KF+"U/S, MMG (BI-RADS), core needle biopsy (breast + LN)",ans:"<b>Mammogram + ultrasound</b> (BI-RADS) · <b>core needle biopsy</b> ของเต้านม (± punch biopsy ผิวหนัง) และ<b>ต่อมน้ำเหลือง</b> · ER/PR/HER2, Ki-67",exp:"Biopsy ทั้งเต้านม (core) และผิวหนัง (punch) ช่วยยืนยัน dermal lymphatic invasion",rubric:"ได้",pts:[CR(P("Mammogram/ultrasound","mammo","mmg","u/?s","ultrasound")),CR(P("Core needle biopsy","core","biopsy","ชิ้นเนื้อ"))]}),
  B("4.4 Second image and staging.",3,{tags:["spot"],key:KF+"Bone scan (bone scintigraphy) · T4b N2 M1 → stage 4",ans:"รูปที่สอง = <b>whole-body bone scan (bone scintigraphy)</b> เห็นจุด uptake หลายตำแหน่ง → <b>bone metastases</b> · staging เพิ่ม: <b>CT chest/abdomen</b> (หรือ PET-CT), LFT, ALP, calcium · = T4 N2 M1 → <b>stage IV</b>",exp:"Stage IV → systemic therapy เป็นหลัก ตามชนิด receptor",rubric:"ได้",pts:[CR(P("Bone scan","bone scan","scintig")),P("CT chest/abdomen / PET","ct","pet"),P("Stage IV / metastasis","stage ?(iv|4)","metast","แพร่กระจาย")]})
 ),
 interp:"Inflammatory/locally advanced breast cancer",
 summary:["IBC = T4d: erythema ≥⅓ breast, peau d'orange, rapid onset","Biopsy + receptors","Bone scan + CT/PET staging"]}),

/* ===== MEQ 5 ===== */
SA({page:5,orig:"MEQ 5",num:"SA 5",sub:"Other spot",title:"Short answer — jaundice with a palpable mass (A)",img:["os76c_m5"],kimg:["os76c_km5"],
 stem:`A patient has jaundice and pale stools. The photograph shows a palpable mass labelled A.<br>1. What is A, and what is this sign?<br>2. What is the likely disease?<br>3. How would you treat it?`,
 gray:"MEQ 5. Pale stool, Jaundice, Courvoisier's law จุด A คืออะไร และมี sign อะไร, คิดว่าเป็นโรคอะไร รักษายังไง [รูป]",
 notes:"ไฟล์ Key 76C: Gall bladder · Courvoisier's sign · periampullary cancer · Whipple operation · แปะสรุป Courvoisier's law (painless GB, periampullary CA: ampulla of Vater, distal bile duct, head of pancreas, 2nd part duodenum)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("5.1 Structure and sign.",2,{tags:["spot"],key:KF+"Gall bladder · Courvoisier's sign",ans:"A = <b>palpable (non-tender) gallbladder</b> · <b>Courvoisier sign</b>",exp:"ถุงน้ำดีโตจาก back pressure อย่างช้า ๆ ในการอุดตันจากมะเร็ง",rubric:"ได้",pts:[CR(P("Gallbladder","gall ?bladder","ถุงน้ำดี")),CR(P("Courvoisier","courvoisier"))]}),
  B("5.2 Disease.",2,{tags:["spot"],key:KF+"periampullary cancer",ans:"<b>Periampullary cancer</b> — CA head of pancreas (มากสุด), ampulla of Vater, distal cholangiocarcinoma, duodenum",exp:"CA head of pancreas มีพยากรณ์แย่ที่สุด · ampullary CA มาเร็วและพยากรณ์ดีที่สุดในกลุ่ม",rubric:"ได้",pts:[CR(P("Periampullary / pancreatic head cancer","periampull","pancrea","ampull","cholangio"))]}),
  B("5.3 Treatment.",3,{tags:["spot"],key:KF+"Whipple operation",ans:"Workup: CT pancreatic protocol, CA 19-9 · resectable → <b>pancreaticoduodenectomy (Whipple)</b> ± adjuvant chemo (mFOLFIRINOX) · ตัดไม่ได้ → biliary drainage (ERCP stent) + chemo · cholangitis/bilirubin สูงมาก → preop drainage ในบางราย",exp:"Whipple: ตัด head of pancreas, duodenum, distal CBD, gallbladder ± distal stomach แล้วต่อ pancreaticojejunostomy, hepaticojejunostomy, gastro/duodenojejunostomy",rubric:"ได้",pts:[CR(P("Whipple / pancreaticoduodenectomy","whipple","pancreaticoduoden")),P("Biliary stent / palliation if unresectable","stent","ercp","palliat","bypass"),P("Adjuvant chemotherapy","chemo","folfirinox")]})
 ),
 interp:"Courvoisier sign",
 summary:["Painless jaundice + palpable GB = Courvoisier","Periampullary cancer","Whipple ถ้าตัดได้"]}),

/* ===== MEQ 6 ===== */
SA({page:5,orig:"MEQ 6",num:"SA 6",sub:"Imaging film",title:"Short answer — fluoroscopic study in dysphagia",img:["os76c_m6"],kimg:["os76c_km6"],
 stem:`A patient has progressive dysphagia. A fluoroscopic image is shown.<br>1. What is this investigation?<br>2. Describe the film.<br>3. What is the diagnosis?<br>4. Give 2 management steps.`,
 gray:"MEQ 6. คนไข้กลืนติดมา มีรูป fluoroscope ถามว่าตรวจอะไร ให้บรรยายฟิล์ม ให้คำวินิจฉัย และบอก management 2 ข้อ",
 notes:"ไฟล์ Key 76C: Barium swallowing · apple core appearance of esophagus, proximal esophageal dilatation, irregular mucosa · esophageal cancer · Mx: esophagogastroduodenoscopy (EGD) + biopsy, CT scan",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("6.1 Investigation.",1,{tags:["spot"],key:KF+"Barium swallowing",ans:"<b>Barium swallow (esophagogram)</b>",exp:"ไม่ใช้ barium ถ้าสงสัยทะลุ/มี aspiration risk สูง",rubric:"ได้",pts:[CR(P("Barium swallow","barium","esophagogram"))]}),
  B("6.2 Describe.",2,{tags:["spot"],key:KF+"apple core appearance, proximal dilatation, irregular mucosa",ans:"<b>Irregular narrowing</b> ยาวช่วงหนึ่งของหลอดอาหาร ขอบ <b>shouldering</b> = <b>apple-core lesion</b> · mucosa ขรุขระ · <b>proximal dilatation</b>",exp:"Benign stricture จะเรียบเรียวยาว ไม่มี shouldering",rubric:"ได้",pts:[CR(P("Apple-core / irregular stricture","apple","irregular","shoulder","ขรุขระ")),P("Proximal dilatation","proximal","dilat","ขยาย")]}),
  B("6.3 Diagnosis.",1,{tags:["spot"],key:KF+"esophageal cancer",ans:"<b>Carcinoma of the esophagus</b> (SCC พบมากในไทย กลาง/บน; adenocarcinoma ส่วนล่าง)",exp:"ไทยพบ SCC มากกว่า · risk: บุหรี่ สุรา อาหารร้อน/ดอง achalasia caustic injury",rubric:"ได้",pts:[CR(P("Esophageal cancer","cancer","carcinoma","มะเร็ง","ca"))]}),
  B("6.4 Two management steps.",2,{tags:["spot"],key:KF+"EGD + biopsy, CT scan",ans:"<b>EGD + biopsy</b> · <b>staging</b>: CT chest/abdomen (± PET-CT, EUS สำหรับ T/N, bronchoscopy ถ้าก้อนกลาง/บน) · ประเมินภาวะโภชนาการ (feeding tube/stent) · รักษาตาม stage: neoadjuvant CRT + esophagectomy หรือ definitive CRT",exp:"CT ดูการลุกลาม airway/aorta และ metastasis · EUS แม่นสำหรับ T และ N",rubric:"1 คะแนน/ข้อ",pts:[G("2 steps",2,P("EGD and biopsy","egd","endoscop","biopsy","ส่องกล้อง"),P("CT/PET staging","ct","pet","eus","staging"),P("Nutrition support","nutrition","feeding","stent","อาหาร"),P("Neoadjuvant CRT + esophagectomy","esophagectomy","crt","chemoradi"))]})
 ),
 interp:"Esophageal cancer",
 summary:["Apple-core lesion","EGD + biopsy → CT/PET/EUS","nCRT + esophagectomy"]}),

/* ===== MEQ 7 ===== */
SA({page:5,orig:"MEQ 7",num:"SA 7",sub:"Imaging film",title:"Short answer — KUB film in loin-to-groin pain",img:["os76c_m7"],kimg:["os76c_km7"],
 stem:`A patient has back pain radiating to the scrotum with nausea and vomiting. A KUB plain film is shown (arrow).<br>1. Describe the film.<br>2. What is the diagnosis?`,
 gray:"MEQ 7. คนไข้ปวดหลัง ร้าวลงถุงอัณฑะ มีคลื่นไส้อาเจียน ทำ KUB Plain film ให้บรรยายฟิล์ม และแสดงการวินิจฉัย",
 notes:"ไฟล์ Key 76C (หน้า 8): \"ปีนี้ไม่เคยเรียน Uro pls help\" · adequate KUB film · oval stone with bone density at left ureter, normal kidney, psoas shadow, normal bony structure · left ureter calculi · แปะตัวอย่าง renal calculus + Tx <2 cm ESWL, >2 cm PCNL · (หน้า 9) ปวดร้าวลงถุงอัณฑะ สงสัย distal ureteral stone · abnormal calcification (size … cm) at tip of left transverse process at L4 level spine",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("7.1 Describe the film.",3,{tags:["spot"],key:KF+"adequate KUB film · abnormal calcification at tip of left transverse process at L4 level · normal kidney/psoas/bony structure",ans:"KUB film คุณภาพพอ · <b>radio-opaque oval calcification</b> (ลูกศร) ขนาดประมาณ … mm ที่ <b>ระดับ L3–L4 บริเวณปลาย transverse process ซ้าย</b> ตามแนว ureter · renal outline/psoas shadow ปกติ · กระดูกปกติ",exp:"แนว ureter บน KUB: ปลาย transverse process → ผ่าน sacroiliac joint → ischial spine",rubric:"ได้",pts:[CR(P("Opaque calcification along left ureter","calcif","opaque","stone","นิ่ว")),P("Level near L4 transverse process","l3","l4","transverse")]}),
  B("7.2 Diagnosis.",2,{tags:["spot"],key:KF+"left ureter calculi",ans:"<b>Left ureteric calculus (proximal ureter)</b> with <b>renal colic</b> · ยืนยัน <b>non-contrast CT KUB</b> · รักษา: analgesia (NSAID), MET (tamsulosin) ถ้า ≤10 mm; ใหญ่/ไม่ผ่าน → URS หรือ SWL; มีไข้/ติดเชื้อร่วมอุดตัน → decompress (DJ stent/PCN) ด่วน",exp:"Phlebolith กลมขอบเรียบ มี lucent center อยู่ต่ำกว่าแนว ischial spine",rubric:"ได้",pts:[CR(P("Left ureteric stone","ureter","calcul","นิ่วในท่อไต"))]})
 ),
 interp:"Ureteric calculus",
 summary:["Loin-to-groin pain = renal colic","NCCT KUB = gold standard","≤10 mm → MET; obstruction + infection → urgent decompression"]}),

/* ===== MEQ 8 ===== */
SA({page:6,orig:"MEQ 8",num:"SA 8",sub:"Other spot",title:"Short answer — neurological examination clips",kimg:["os76c_km8"],
 stem:`Video clips of a neurological examination are shown.<br>1. When the plantar response shows dorsiflexion of the big toe, what does it indicate?<br>2. Which nerve root level is tested by elbow flexion?<br>3. Which nerve root level is tested by wrist extension?`,
 gray:"MEQ 8. Neuro exam มีวิดีโอมาให้ Babinski's reflex ถ้า dorsiflex แล้วหมายความว่ายังไง, Elbow flexor, Wrist extensor ระดับอะไร",
 flag:NOIMG+" (คลิปวิดีโอ)",imgAlt:"คลิป: ผู้ตรวจขีดฝ่าเท้าด้านข้าง · ผู้ตรวจต้านขณะผู้ป่วยงอศอก · ต้านขณะผู้ป่วยกระดกข้อมือ",
 notes:"ไฟล์ Key 76C: UMN lesion · C5 · C6 · (หน้า 11) upper motor tract dmg, biceps = C6?, C6 · แปะตาราง myotome (ข้างสไลด์เขียน C6)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("8.1 Babinski sign.",2,{tags:["spot"],key:KF+"UMN lesion",ans:"<b>Positive Babinski (extensor plantar response)</b> = <b>upper motor neuron lesion</b> (corticospinal tract) · ปกติในทารก &lt;1–2 ปี",exp:"Babinski เป็นบวกปกติในทารก เพราะ corticospinal tract ยังไม่สมบูรณ์",rubric:"ได้",pts:[CR(P("UMN lesion","umn","upper motor","corticospinal"))]}),
  B("8.2 Elbow flexion.",1,{tags:["spot"],key:KF+"C5",ans:"<b>C5</b> (biceps/brachialis — C5, C6; biceps reflex C5–6)",exp:"Biceps reflex C5–6 · brachioradialis C6 · triceps C7",rubric:"ได้ C5",pts:[CR(P("C5","c5"))]}),
  B("8.3 Wrist extension.",1,{tags:["spot"],key:KF+"C6",ans:"<b>C6</b> (extensor carpi radialis — radial nerve)",exp:"ASIA key muscles: C5 elbow flexors, C6 wrist extensors, C7 elbow extensors, C8 finger flexors, T1 little finger abductors",rubric:"ได้",pts:[CR(P("C6","c6"))]})
 ),
 interp:"Myotomes / UMN",
 summary:["ASIA key muscles C5–T1, L2–S1","Babinski = UMN","C5 elbow flexion, C6 wrist extension"]}),

/* ===== MEQ 9 ===== */
SA({page:6,orig:"MEQ 9",num:"SA 9",sub:"Plastic/Skin/Burn",title:"Short answer — red painful burn of the chest and arm",img:["os76c_m9"],kimg:["os76c_km9"],
 stem:`A patient has a burn of the chest and right arm that is red and very painful, as shown.<br>1. Assess the depth of the burn.<br>2. Describe the wound management.`,
 gray:"MEQ 9. คนไข้มีแผลไฟไหม้ที่หน้าอกและแขนขวา มีอาการแดง และเจ็บมาก ให้ประเมินความลึกของแผล และ wound management",
 notes:"ไฟล์ Key 76C: 2° degree burn · prevent infection → 1% silver sulfadiazine · conservative treatment → exposure treatment (dryness, coolness, expose to light) · (อีกหน้า) superficial second degree burn, conservative treatment",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("9.1 Depth.",2,{tags:["spot"],key:KF+"superficial second degree burn",ans:"<b>Superficial partial-thickness (superficial 2nd-degree) burn</b> — แดง ชื้น blister blanch ได้ เจ็บมาก",exp:"Deep partial thickness: blister แตก ซีด/ด่าง ไม่ blanch เจ็บน้อยกว่า",rubric:"ได้",pts:[CR(P("Superficial partial thickness","superficial","partial","2nd","second"))]}),
  B("9.2 Wound management.",4,{tags:["spot"],key:KF+"prevent infection with 1% SSD · conservative (exposure treatment: dryness, coolness, light)",ans:"ประเมิน ABC + TBSA (Rule of 9) · ถ้าเข้าเกณฑ์ resuscitate ด้วย Parkland · ล้าง NSS, debride bulla ที่แตก · <b>topical antimicrobial: 1% silver sulfadiazine</b> หรือ silver/moist dressing · หรือ <b>exposure method</b> (ปล่อยแผลแห้ง ห้องเย็นสะอาด) · <b>analgesia</b> · tetanus · ยกแขนสูง · คาดว่าหายใน 2–3 สัปดาห์",exp:"SSD ทาทุกวัน ล้างของเก่าก่อนทาใหม่ · หลีกเลี่ยงที่หน้าและคนแพ้ sulfa",rubric:"ได้",pts:[CR(P("Topical antimicrobial / dressing","silver","ssd","sulfadiazine","dressing","exposure")),P("Analgesia","pain","analges","morphine","ปวด"),P("TBSA / resuscitation / tetanus","tbsa","rule of 9","parkland","tetanus")]})
 ),
 interp:"Superficial partial-thickness burn",
 summary:["Red, painful, blanching = superficial partial","SSD/moist dressing + analgesia","หายใน 2–3 สัปดาห์"]}),

/* ===== MEQ 10 ===== */
SA({page:6,orig:"MEQ 10",num:"SA 10",sub:"Vascular/Ulcer",title:"Short answer — painless enlarging foot ulcer",kimg:["os76c_km10"],
 stem:`A patient has a painless ulcer on the left foot that has gradually enlarged over 3 months. He has diabetes.<br>1. What is the diagnosis?<br>2. How would you treat it?`,
 gray:"MEQ 10. มีแผลอะไรสักอย่างที่เท้าซ้าย ขยายขนาดขึ้นเรื่อยๆ 3 เดือน ไม่เจ็บ ให้วินิจฉัยและรักษา",
 flag:NOIMG+" · ผู้จดไม่ได้จดว่ามีเบาหวาน — เติมตามที่คีย์ตอบว่า DM foot",imgAlt:"รูปเท้า: แผลที่ฝ่าเท้าใต้หัวกระดูกฝ่าเท้า ขอบหนามีหนังหนา (callus) รอบ พื้นแผลซีด",
 notes:"ไฟล์ Key 76C: DM foot · debride necrotic tissue · ATB · wet dressing",
 opinion:"ตามเฉลยในไฟล์ ความมั่นใจปานกลาง — ไม่เห็นรูปจริง ถ้าแผลเรื้อรังไม่หาย/ขอบนูนต้อง biopsy ตัดมะเร็ง (Marjolin/melanoma)",
 parts:S(
  B("10.1 Diagnosis.",2,{tags:["spot"],key:KF+"DM foot",ans:"<b>Diabetic neuropathic foot ulcer</b> (แผลไม่เจ็บที่จุดลงน้ำหนัก + callus) · ประเมิน ischemia (pulse, ABI) และ infection/osteomyelitis (probe-to-bone, x-ray)",exp:"DDx แผลไม่เจ็บที่โตขึ้น: neuropathic ulcer, Marjolin ulcer, acral melanoma (amelanotic)",rubric:"ได้",pts:[CR(P("Diabetic / neuropathic foot ulcer","diabet","dm","neuropath","เบาหวาน"))]}),
  B("10.2 Treatment.",4,{tags:["spot"],key:KF+"debride necrotic tissue, ATB, wet dressing",ans:"<b>Off-loading</b> (total contact cast/รองเท้าพิเศษ) · <b>sharp debridement</b> เนื้อตาย/callus · <b>moist wound dressing</b> · <b>ATB</b> เฉพาะเมื่อมีการติดเชื้อ (ตาม IWGDF) · คุมน้ำตาล · ประเมิน/แก้ <b>ischemia</b> (revascularization) · ตรวจ osteomyelitis · ให้ความรู้ดูแลเท้า",exp:"Probe-to-bone บวก → สงสัย osteomyelitis สูง",rubric:"ได้",pts:[CR(P("Off-loading","off.?load","ลดน้ำหนัก","total contact","cast")),CR(P("Debridement","debride","ตัดเนื้อตาย")),P("Dressing / antibiotics if infected","dressing","antibiot","atb"),P("Glucose control / vascular assessment","glucose","น้ำตาล","abi","revascular")]})
 ),
 interp:"Diabetic foot ulcer",
 summary:["Neuropathic: ไม่เจ็บ จุดลงน้ำหนัก callus","Off-loading + debridement + infection/ischemia control","แผลไม่หายนาน → biopsy"]}),

/* ===== MEQ 11 ===== */
SA({page:6,orig:"MEQ 11",num:"SA 11",sub:"Pediatric surgery",title:"Short answer — newborn with an umbilical sac",img:["os76c_m11"],kimg:["os76c_km11"],
 stem:`A photograph of a newborn's abdomen is shown.<br>1. What is the diagnosis?<br>2. What other abnormalities should you look for?<br>3. What is the initial management?`,
 gray:"MEQ 11. ให้วินิจฉัย หาความผิดปกติอื่นๆ และ initial management [รูป]",
 notes:"ไฟล์ Key 76C: omphalocele · associated: pentalogy of Cantrell, Beckwith-Wiedemann, trisomy 13, 18, 21, cardiac anomalies, … · Tx initial: fluid resuscitation, NG decompression, wrapped bowel in warm saline gauze, covered by plastic wrap · แปะตาราง omphalocele vs gastroschisis",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("11.1 Diagnosis.",2,{tags:["spot"],key:KF+"Omphalocele",ans:"<b>Omphalocele</b> — ไส้/ตับออกทางสะดือ มี<b>ถุงคลุม</b> (amnion + peritoneum) สายสะดือติดที่ถุง",exp:"Gastroschisis: ไม่มีถุง ขวาของสะดือ associated anomaly น้อย",rubric:"ได้",pts:[CR(P("Omphalocele","omphalocele","exomphalos"))]}),
  B("11.2 Associated anomalies.",3,{tags:["spot"],key:KF+"pentalogy of Cantrell, Beckwith-Wiedemann, trisomy 13/18/21, cardiac",ans:"<b>Cardiac anomalies</b> (echo) · <b>chromosomal</b>: trisomy 13, 18, 21 (karyotype) · <b>Beckwith-Wiedemann</b> (macroglossia, <b>hypoglycemia</b>, organomegaly) · <b>pentalogy of Cantrell</b> · cloacal exstrophy · GI/GU/neural tube defects",exp:"ทารก BWS ต้องเฝ้าระวัง hypoglycemia และ Wilms tumor/hepatoblastoma screening",rubric:"ได้ ≥3",pts:[G("≥3 associations",3,P("Cardiac","cardiac","heart","หัวใจ","echo"),P("Trisomy 13/18/21","trisomy","chromosom","13","18","21"),P("Beckwith-Wiedemann","beckwith","bws","hypoglyc"),P("Pentalogy of Cantrell","cantrell"),P("Cloacal exstrophy","cloaca","exstrophy"))]}),
  B("11.3 Initial management.",3,{tags:["spot"],key:KF+"fluid resuscitation, NG decompression, wrap in warm saline gauze, cover with plastic wrap",ans:"รักษาอุณหภูมิ · <b>คลุมถุงด้วย sterile moist dressing + plastic wrap</b> ไม่ให้ถุงแตก/บิด · <b>IV fluid</b>, <b>OG/NG decompression</b> · ตรวจ <b>glucose</b> · echo, karyotype · ซ่อม: primary closure (เล็ก) หรือ staged/<b>paint-and-wait</b> (giant)",exp:"Giant omphalocele ใช้ paint-and-wait (silver sulfadiazine ทาถุงให้ epithelialize) แล้วซ่อม ventral hernia ภายหลัง",rubric:"ได้",pts:[CR(P("Protect sac with moist dressing / wrap","cover","wrap","คลุม","moist","dressing")),P("IV fluid","fluid","สารน้ำ"),P("NG/OG decompression","ng","og","decompress"),P("Check glucose / echo","glucose","น้ำตาล","echo")]})
 ),
 interp:"Omphalocele",
 summary:["Sac + cord on sac","Cardiac, trisomy, BWS, Cantrell","Cover sac, fluids, OG, glucose → primary/staged closure"]}),

/* ===== MEQ 12 ===== */
SA({page:6,orig:"MEQ 12",num:"SA 12",sub:"Pediatric surgery",title:"Short answer — infant palate",img:["os76c_m12"],kimg:["os76c_km12"],
 stem:`A photograph of an infant's open mouth is shown.<br>1. What is the diagnosis?<br>2. When should it be treated?<br>3. Why at that time?`,
 gray:"MEQ 12. ให้วินิจฉัย รักษาตอนไหน และทำไม [รูป]",
 notes:"ไฟล์ Key 76C: cleft palate · tx 9–12 mo เพราะก่อนพัฒนาการพูด, แต่ถ้าทำเร็วเกินไป maxillary hypoplasia · แปะตาราง timeline (lip adhesion 1–2 mo, lip/primary nose repair 3–6 mo, palate repair 10–12 mo, …)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("12.1 Diagnosis.",1,{tags:["spot"],key:KF+"cleft palate",ans:"<b>Cleft palate</b> (เพดานโหว่)",exp:"Isolated cleft palate สัมพันธ์ syndrome (Pierre Robin, 22q11) มากกว่า cleft lip",rubric:"ได้",pts:[CR(P("Cleft palate","cleft palate","เพดานโหว่"))]}),
  B("12.2 Timing.",1,{tags:["spot"],key:KF+"9–12 months",ans:"<b>อายุ 9–12 เดือน</b> (ช่วง 6–18 เดือน)",exp:"ทีม craniofacial ประเมิน feeding, hearing (OME) และ speech ต่อเนื่อง",rubric:"ได้",pts:[CR(P("9-12 months","9.?-.?12","12 ?(m|เดือน)","month","เดือน"))]}),
  B("12.3 Why.",2,{tags:["spot"],key:KF+"ก่อนพัฒนาการพูด แต่ถ้าทำเร็วเกิน maxillary hypoplasia",ans:"ต้องซ่อม<b>ก่อนเริ่มพูด</b>เพื่อ speech ปกติ · ทำเร็วเกินไปกระทบการเจริญของ <b>maxilla (midface hypoplasia)</b>",exp:"Velopharyngeal insufficiency หลังซ่อมอาจต้อง pharyngoplasty",rubric:"ได้",pts:[CR(P("Before speech development","speech","พูด")),P("Avoid maxillary growth disturbance","maxill","growth","hypoplas")]})
 ),
 interp:"Cleft palate timing",
 summary:["Lip ~3 เดือน · palate 9–12 เดือน","Speech vs maxillary growth"]}),

/* ===== MEQ 13 ===== */
SA({page:6,orig:"MEQ 13",num:"SA 13",sub:"Pediatric surgery",title:"Short answer — infant with pale stools at a community hospital",img:["os76c_m13"],kimg:["os76c_km13"],
 stem:`An infant has the stool shown in the photograph.<br>1. Give the differential diagnoses.<br>2. If you work at a community hospital, what would you do?`,
 gray:"MEQ 13. เด็กน้อย pale stool ให้ DDx โรค, อยู่ รพช ทำยังไง [รูป — คำบรรยายใต้รูปตัดออก]",
 notes:"ไฟล์ Key 76C: DDx biliary atresia, Alagille syndrome, choledochal cyst · รพช: ultrasound then refer for intraoperative cholangiography or DISIDA or surgery · (อีกคน) ส่ง liver function test, coagulogram, ultrasound, refer ไปโรงพยาบาลที่มี ped sx · can't IOC → U/S triangular cord sign, blood chem conjugated bilirubin · รูปในไฟล์โจทย์มีคำบรรยายว่า pale coloured stool should raise suspicion of biliary atresia — ตัดออก",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("13.1 Differential diagnoses.",3,{tags:["spot"],key:KF+"biliary atresia, Alagille syndrome, choledochal cyst",ans:"<b>Biliary atresia</b> · <b>choledochal cyst</b> · <b>Alagille syndrome</b> · neonatal hepatitis · (PFIC, metabolic)",exp:"Stool color card ใช้คัดกรอง BA ในหลายประเทศ",rubric:"1 คะแนน/โรค",pts:[CR(P("Biliary atresia","biliary atresia","ba")),P("Choledochal cyst","choledochal"),P("Alagille / neonatal hepatitis","alagille","hepatitis")]}),
  B("13.2 Community hospital.",3,{tags:["spot"],key:KF+"LFT, coagulogram, ultrasound, refer (IOC/DISIDA/surgery)",ans:"ส่ง <b>total/direct bilirubin, LFT, coagulogram</b> · <b>ultrasound</b> (gallbladder, triangular cord, choledochal cyst) · <b>vitamin K</b> · <b>refer ด่วน</b>ไปศัลยแพทย์เด็ก (IOC/HIDA → Kasai ก่อน 60 วัน)",exp:"Kasai ก่อน 60 วันมีโอกาส bile flow ดีกว่าชัดเจน",rubric:"ได้",pts:[P("Bilirubin/LFT/coagulogram","bilirubin","lft","coag"),P("Ultrasound","u/?s","ultrasound"),CR(P("Urgent referral","refer","ส่งต่อ"))]})
 ),
 interp:"Acholic stool",
 summary:["BA, choledochal cyst, Alagille","รพช: bilirubin, coag, USG, vit K, refer"]}),

/* ===== MEQ 14 ===== */
SA({page:6,orig:"MEQ 14",num:"SA 14",sub:"Pediatric surgery",title:"Short answer — newborn not passing meconium",img:["os76c_m14"],kimg:["os76c_km14"],
 stem:`A newborn has not passed meconium. A radiograph is shown (arrow = gas in the distal rectal pouch; dot = marker on the anal dimple).<br>1. What view is this?<br>2. What is the diagnosis?<br>3. How would you treat it?`,
 gray:"MEQ 14. เด็กน้อยไม่ถ่ายขี้เทา ให้ฟิล์มมา ท่าอะไร โรคอะไร รักษายังไง [รูป]",
 notes:"ไฟล์ Key 76C: cross-table lateral view · anorectal malformation · ระยะ distal rectal pouch ถึง anal dimple ≤1 cm → PSARP (posterior sagittal anorectoplasty) · >1 cm → 3 step surgery: colostomy, PSARP, closure colostomy · ← air-filled distal rectal pouch · o = anal dimple marker · (อีกคน) prone cross-table lateral view, ARM, PSARP",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("14.1 View.",1,{tags:["spot"],key:KF+"prone cross-table lateral view",ans:"<b>Prone cross-table lateral radiograph</b> (ทำหลังคลอด ≥24 ชม.)",exp:"Invertogram (ห้อยหัว) เป็นวิธีเก่า",rubric:"ได้",pts:[CR(P("Prone cross-table lateral","cross.?table","prone","lateral"))]}),
  B("14.2 Diagnosis.",1,{tags:["spot"],key:KF+"anorectal malformation",ans:"<b>Anorectal malformation (imperforate anus)</b>",exp:"Low lesion (perineal fistula ในชาย) ทำ anoplasty ได้เลยโดยไม่ต้อง colostomy",rubric:"ได้",pts:[CR(P("Anorectal malformation","anorectal","imperforate","arm"))]}),
  B("14.3 Treatment.",3,{tags:["spot"],key:KF+"≤1 cm → PSARP · >1 cm → colostomy → PSARP → closure colostomy",ans:"ตรวจ VACTERL · ระยะ rectal pouch–ผิวหนัง <b>&lt;1 cm</b> (low) → <b>primary PSARP/anoplasty</b> · <b>&gt;1 cm</b> (high) → <b>3 stages</b>: <b>diverting colostomy</b> → <b>PSARP</b> (1–3 เดือน) → <b>colostomy closure</b>",exp:"Colostomy แบบ divided (แยก proximal และ distal stoma) ป้องกันอุจจาระไหลเข้า distal pouch/ทางเดินปัสสาวะ",rubric:"ได้",pts:[P("Distance <1 cm → primary PSARP","1 ?cm","psarp","primary"),CR(P(">1 cm → colostomy then PSARP then closure","colostomy","3 stage","staged","ปิด colostomy"))]})
 ),
 interp:"ARM — cross-table lateral",
 summary:["Prone cross-table lateral ที่ 24 ชม.","<1 cm → primary PSARP","≥1 cm → colostomy → PSARP → closure"]})
);
})();

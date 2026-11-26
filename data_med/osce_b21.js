(function(){
/* Internal Medicine OSCE ข้อสอบเก่า AC — MDCU66 RoB (IMO66BQ = สมุด GoodNotes "MCQ Med For All" ของรุ่นพี่ MDCU75, Part 2 หน้า PDF 80 หัวข้อ "OSCE")
   หน้าคั่น 79 'MDCU66 R2' · หัวไฟล์หน้า 80 'ROTATE 2/56 AC MEDICINE' (2556 − 2490 = 66)
   ⚠ ส่วน OSCE (11 สถานี) + MEQ (4 ข้อ → meq_b14.js) ของหน้า 80 ถูกเจ้าของสมุดปิดทับด้วยกล่องสีขาวทั้งหมด (หน้าสมุดเห็นแค่หัวกระดาษกับ MCQ ข้อ 71) — อ่านจาก text layer และ render ใหม่แบบเอากล่องขาวออก → รูปเฉลย ok66b_1–11 (บรรทัด recall ของแต่ละสถานี) · ไม่มีลายมือเจ้าของสมุด
   recall มีแค่หัวข้อสถานี 1 บรรทัด (orig = เลขสถานี 1–11) → Claude แต่งโจทย์/เคส/ผลตรวจ/บทผู้ป่วยจำลองทั้งหมด (บอกใน flag) · สถานีที่มีรูป (CT brain, blood smear, slide crystal + tophi, CXR, EKG) ไม่มีรูปในสมุด → imgNote NOIMG ฝึกบรรยายสิ่งที่คาดว่าจะเห็น
     สถานี 2 recall 'จำไม่ได้แล้วอะว่ารูปเป็นไง' → Claude เลือก thalassemia PBS (พบบ่อยในไทย) · สถานี 1 recall ไม่บอกโรค → Claude เลือก hypertensive putaminal ICH · สถานี 5 recall 'MI?' → anterior STEMI
   เฉลย: Claude ตามตำรา/guideline + เทียบ R01 = OSCE Med for All (Round I/O: H8 ขาบวม, A5 HT counselling, PR2 Foley, P4 RS checklist, P6 abdomen, L10 synovial fluid/gout, I1 CXR ABCDEFGHI, I5 lung cancer, I11–I12 CT brain, E5 STEMI, M5–M6 PBS)
   สถานี CXR: checklist อ่านฟิล์มตาม ABCDEFGHI (Med Y4 MDCU) · คะแนนข้อย่อย Claude ตั้งให้เหมาะกับปี 4 · checklist: H = หัวข้อใหญ่ (น้ำหนัก %), CR = must not miss · ไม่มีสถานี skin */
const NK="ไม่มีเฉลยในสมุด (ข้อความถูกกล่องขาวปิด) — เฉลยโดย Claude";
const NOIMG="ไม่มีรูปในสมุด — ข้อนี้ฝึกบรรยายสิ่งที่คาดว่าจะเห็น";
const P=(t,...re)=>({t,re});
const G=(label,need,...opts)=>({label,need,opts});
const H=(label,w)=>({h:label,w});
const CR=x=>Object.assign(x,{crit:1});
function B(q,marks,o){const pts=[],kw=[],crit=[],secs=[];(o.pts||[]).forEach(p=>{if(p.h){secs.push([p.h,pts.length,p.w||0]);return;}
  if(p.crit)crit.push(pts.length);
  if(p.opts){pts.push({label:p.label,any:p.opts.map(x=>x.t),need:p.need});kw.push(p.opts.map(x=>x.re));}else{pts.push(p.t);kw.push(p.re);}});
  const s=Object.assign({q,marks,key:NK},o);delete s.pts;s.points=pts;s.kw=kw;if(crit.length)s.crit=crit;if(secs.length)s.secs=secs;return s;}
const S=(...subs)=>[{subs}];
const HID="ข้อความ OSCE ในหน้า 80 ถูกกล่องขาวปิด (อ่านจาก text layer) — ไม่มีลายมือเจ้าของสมุด";
const Co=o=>Object.assign({set:"MDCU66",ro:"RoB",file:"IMO66BQ",kfile:"IMO66BQ",page:80,page2:80,opinion:""},o,{notes:(o.notes?o.notes+" · ":"")+HID});
QB.push(

/* ===== 1 CT brain ===== */
Co({orig:"1",topic:"img",kimg:["ok66b_1"],imgNote:NOIMG+" · non-contrast CT brain: hyperdense lesion ที่ left basal ganglia (putamen) + perilesional edema + mass effect",imgAlt:"CT สมองไม่ฉีดสี: ก้อนเงาขาวสว่างเนื้อเดียวขนาด ~3×2 cm ที่ basal ganglia ซีกซ้ายบริเวณ putamen ขอบชัด มีขอบดำบางรอบก้อน · ventricle ข้างซ้ายถูกเบียดเล็กน้อย เส้นกลางเลื่อนไปขวา ~3 mm",
 title:"CT brain — describe and diagnose (hyperdense lesion in the left putamen)",
 seen:"คล้ายสถานี CT brain ปีอื่น (MDCU75 RoA ข้อ 13, MDCU78 RoD ข้อ 6) · R01 I12 recall ICH",
 opinion:"เฉลยโดย Claude ตามวิธีบรรยาย CT ของ R01 (I11: density → homogeneity → intra/extra-axial → ตำแหน่ง → mass effect) และ 2022 AHA/ASA Guideline for spontaneous ICH",
 flag:"⚠ recall มีแค่ 'CT brain: บรรยาย+dx' → Claude เลือกภาพ hypertensive ICH ที่ putamen (สอดคล้องกับ MEQ ข้อ 1 ของ 66 R1)",
 stem:`A 60-year-old man with long-standing poorly controlled hypertension developed sudden right hemiparesis and headache 2 hours ago. A non-contrast CT brain is shown.<br>1. Describe the CT findings.<br>2. What is the diagnosis?`,
 gray:"1.CT brain: บรรยาย+dx",
 parts:S(
  B("1. Describe the CT findings.",6,{tags:["img"],
   ans:"Non-contrast CT brain, axial view · <b>single, well-defined, homogeneous hyperdense intra-axial lesion</b> at the <b>left basal ganglia (putamen)</b> ขนาดประมาณ 3 × 2 cm (≈ 20–30 mL — ABC/2) · <b>hypodense rim รอบก้อน (perihematomal edema)</b> · <b>mass effect</b>: กด left lateral ventricle, <b>midline shift ไปทางขวา</b> ~3–5 mm · ± <b>intraventricular extension</b> (เลือดใน lateral ventricle) · ไม่มี hydrocephalus · ไม่มี extra-axial collection · sulci ฝั่งซ้ายแคบลง · ข้างซ้ายของภาพ = ข้างขวาของผู้ป่วย",
   rubric:"ได้ = บอก hyperdense + homogeneous + intra-axial + ตำแหน่ง (left putamen/basal ganglia) + edema + mass effect/midline shift ± IVH",
   pts:[H("ลักษณะรอยโรค",50),CR(P("Hyperdense lesion","hyperdens","สีขาว","high density")),P("Homogeneous, well-defined","homogen","well.?defined"),P("Intra-axial","intra.?axial","parenchym","ในเนื้อสมอง"),
    H("ตำแหน่ง",25),CR(P("Left basal ganglia / putamen","putamen","basal ganglia","lentiform","left")),
    H("ผลต่อสมองรอบข้าง",25),P("Perihematomal edema (hypodense rim)","edema","hypodense rim","บวม"),P("Mass effect / midline shift / compressed ventricle","mass effect","midline shift","shift","compress","effac"),P("Intraventricular extension / hydrocephalus","intraventricular","ivh","hydroceph")]}),
  B("2. What is the diagnosis?",4,{tags:["img"],
   ans:"<b>Acute intracerebral hemorrhage at the left putamen (hypertensive ICH)</b> with perihematomal edema and mass effect · สาเหตุ: chronic hypertension → lipohyalinosis/Charcot–Bouchard microaneurysm ของ lenticulostriate arteries · ตำแหน่ง hypertensive ICH ที่พบบ่อย: putamen &gt; thalamus &gt; pons &gt; cerebellum · lobar ICH ในผู้สูงอายุ → cerebral amyloid angiopathy",
   exp:"การรักษา: คุม SBP เป้า ~140 mmHg (ไม่ต่ำกว่า 130) ภายใน 2 ชม., reverse anticoagulant, ยกหัวเตียง 30°, คุม glucose/ไข้, ป้องกันชัก ไม่ให้ steroid · ผ่าตัดเมื่อ cerebellar ICH กด brainstem/hydrocephalus หรือ lobar ICH ที่แย่ลง · EVD ถ้า hydrocephalus · ICH score ประเมินพยากรณ์",
   pts:[CR(P("Intracerebral hemorrhage (acute)","hemorrhag","\\bich\\b","bleed","เลือดออก")),P("Hypertensive, left putamen","hypertens","putamen","basal ganglia")]})),
 interp:"Hyperdense intra-axial lesion ที่ left putamen + edema + mass effect ในคนความดันสูง → hypertensive ICH",
 summary:["บรรยาย CT: density → homogeneity → intra/extra-axial → ตำแหน่ง/ข้าง → edema, mass effect, midline shift, IVH, hydrocephalus","Hypertensive ICH: putamen > thalamus > pons > cerebellum","Lobar ICH ผู้สูงอายุ → amyloid angiopathy","ICH: SBP เป้า ~140, reverse anticoagulant, ไม่ให้ steroid"]}),

/* ===== 2 Blood smear ===== */
Co({orig:"2",topic:"micro",kimg:["ok66b_2"],imgNote:NOIMG+" · PBS: hypochromic microcytic RBC, target cells, anisopoikilocytosis, nucleated RBC, basophilic stippling",imgAlt:"Peripheral blood smear: เม็ดเลือดแดงขนาดเล็ก ซีดตรงกลางกว้าง ขนาดและรูปร่างต่างกันมาก · มีเซลล์รูปเป้ายิงธนูจำนวนมาก เซลล์รูปหยดน้ำ เศษเซลล์แตก และเซลล์มีจุดน้ำเงินละเอียด · มีเม็ดเลือดแดงที่ยังมีนิวเคลียสหลายเซลล์",
 title:"Peripheral blood smear — describe and diagnose (thalassemia)",
 seen:"คล้ายสถานี PBS ปีอื่น (XX RoX ข้อ XX-IDA, MDCU78 RoD ข้อ 8) · R01 M5–M6, M8",
 opinion:"เฉลยโดย Claude ตามวิธีเขียนตอบ PBS 3 series ของ R01 (M5: RBC → WBC → platelet) และแนวทางการวินิจฉัยธาลัสซีเมีย (TIF Guidelines for the Management of Transfusion Dependent Thalassaemia)",
 flag:"⚠ recall 'Blood smear บรรยาย+dx จำไม่ได้แล้วอะว่ารูปเป็นไง' → Claude เลือก thalassemia (β-thalassemia/HbE ที่พบบ่อยในไทย)",
 stem:`A 20-year-old woman has had chronic anemia since childhood. She has jaundice and hepatosplenomegaly. Her peripheral blood smear is shown.<br>1. Describe the findings.<br>2. What is the most likely diagnosis, and what test would you send to confirm it?`,
 gray:"2. Blood smear บรรยาย+dx จำไม่ได้แล้วอะว่ารูปเป็นไง",
 parts:S(
  B("1. Describe the findings.",6,{tags:["micro"],
   ans:"<b>RBC series</b>: marked <b>anisopoikilocytosis</b>, <b>hypochromic microcytic RBCs</b>, many <b>target cells</b>, teardrop cells, fragmented RBCs, <b>basophilic stippling</b>, <b>nucleated RBCs</b> · ไม่มี parasite · <b>WBC series</b>: จำนวนและรูปร่างปกติ (ไม่นับ NRBC เป็น WBC — ต้อง correct WBC count) · <b>Platelet series</b>: adequate",
   rubric:"ได้ = เขียนครบ 3 series + RBC: hypochromic microcytic, target cells, anisopoikilocytosis, NRBC",
   pts:[H("RBC",70),CR(P("Hypochromic microcytic RBC","hypochrom","microcyt")),CR(P("Target cells","target")),P("Anisopoikilocytosis / teardrop / fragmented","aniso","poikilo","teardrop","fragment","schistocyte"),P("Nucleated RBC / basophilic stippling","nucleated","nrbc","basophilic stippl","polychrom"),
    H("WBC + platelet",30),P("WBC ปกติ","wbc","white","leukocyte"),P("Platelet adequate","platelet","plt")]}),
  B("2. What is the most likely diagnosis, and what test would you send to confirm it?",4,{tags:["micro"],
   ans:"<b>Thalassemia</b> (เช่น β-thalassemia/HbE disease หรือ β-thalassemia intermedia/major; HbH disease ก็ให้ภาพคล้ายกัน) — chronic hemolytic anemia + hepatosplenomegaly + target cells/NRBC · <b>ยืนยัน</b>: <b>hemoglobin typing (Hb analysis: HPLC/capillary electrophoresis)</b> + DNA analysis (α-thalassemia) · ร่วมกับ CBC indices (MCV/MCH ต่ำ, RDW), reticulocyte, serum ferritin (iron overload), family study",
   exp:"แยก IDA: pencil cells, ไม่มี NRBC/target มาก, ferritin ต่ำ, Mentzer index (MCV/RBC) &gt;13 · thalassemia trait: Mentzer &lt;13 · HbH: inclusion bodies (golf ball) ใน supravital stain · รักษา: transfusion ตามความรุนแรง, iron chelation, folic acid, ห้ามให้ธาตุเหล็กถ้าไม่ขาด, genetic counseling",
   pts:[CR(P("Thalassemia","thalass","hbe","hbh","ธาลัส")),CR(P("Hb typing / Hb analysis","hb typing","hemoglobin typing","hb analysis","electrophor","hplc","capillary"))]})),
 interp:"Hypochromic microcytic + target cells + NRBC + hemolysis/HSM → thalassemia → Hb typing",
 summary:["PBS เขียน 3 series: RBC (size, color, shape, inclusion, NRBC, parasite) → WBC → platelet","Thalassemia: target cells, NRBC, basophilic stippling, microcytic hypochromic","IDA: pencil cells, ferritin ต่ำ","ยืนยัน thalassemia: Hb typing ± DNA analysis"]}),

/* ===== 3 Gout ===== */
Co({orig:"3",topic:"micro",kimg:["ok66b_3"],imgNote:NOIMG+" · ① synovial fluid ใต้ compensated polarized light: needle-shaped crystals สีเหลืองเมื่อขนานแกน (strongly negative birefringent) บางอันอยู่ใน neutrophil ② ภาพมือ/หู/ข้อศอก มีก้อนสีขาวเหลืองใต้ผิวหนัง (tophi)",imgAlt:"รูปที่ 1: ภาพน้ำไขข้อใต้กล้อง polarized light เห็นผลึกรูปเข็มยาวเรียว เป็นสีเหลืองเมื่อวางขนานกับแกน และเป็นสีฟ้าเมื่อวางตั้งฉาก บางผลึกอยู่ในเม็ดเลือดขาว · รูปที่ 2: ข้อนิ้วเท้าและข้อนิ้วมือหลายข้อมีก้อนนูนแข็งสีขาวครีมใต้ผิวหนัง บางก้อนผิวบางจนเห็นเนื้อขาวข้างใน",
 title:"Gout — describe the synovial fluid crystals, identify the lesion (gouty tophi) and give the diagnosis",
 seen:"สถานีเดียวกับ R01 (OSCE Med for All) L10 recall 7 — joint aspiration needle-shaped crystal + tophi → chronic gouty arthritis",
 opinion:"เฉลยตาม R01 L10 (needle-shaped crystal, strongly negative birefringence, gouty tophi, chronic gouty arthritis) และ 2020 ACR Guideline for the Management of Gout",
 flag:"⚠ recall '3. Gout: 1) slide crystal บรรยาย 2) รูป gouty tophi ถามว่าคืออะไร 3) dx' → ใช้โครงคำถามตาม recall · เคสผู้ป่วย Claude แต่ง",
 stem:`A 55-year-old man has had recurrent episodes of painful swelling of the big toes and ankles for 10 years. He now has chronic pain and swelling of several joints.<br>1. Describe the crystals in the synovial fluid under compensated polarized light microscopy (slide).<br>2. What is the lesion shown in the picture of his hand/ear?<br>3. What is the diagnosis?`,
 gray:"3. Gout: 1)slide crystal บรรยาย 2)รูป gouty tophi ถามว่าคืออะไร 3) dx",
 parts:S(
  B("1. Describe the crystals.",4,{tags:["micro"],key:"R01 L10: needle shape crystal (strong negative)",
   ans:"Synovial fluid, compensated polarized light microscopy: <b>needle-shaped crystals</b> ที่เป็น<b>สีเหลืองเมื่อวางขนานกับแกนของ compensator (slow ray) และสีน้ำเงินเมื่อตั้งฉาก</b> = <b>strongly negative birefringence</b> · พบทั้ง extracellular และ <b>intracellular (ใน neutrophil)</b> → <b>monosodium urate (MSU) crystals</b> · (เทียบ CPP/pseudogout: rhomboid/rod-shaped, weakly positive — สีน้ำเงินเมื่อขนาน)",
   rubric:"ได้ = needle-shaped + strongly negative birefringent (เหลืองเมื่อขนาน) + intracellular + MSU",
   pts:[CR(P("Needle-shaped","needle","เข็ม")),CR(P("Strongly negative birefringence (yellow parallel)","negative","birefring","yellow","เหลือง")),P("Intracellular (ใน neutrophil)","intracellular","neutrophil","pmn","phagocyt"),P("Monosodium urate crystal","urate","msu","uric")]}),
  B("2. What is this lesion?",3,{tags:["micro"],key:"R01 L10: gouty tophi",
   ans:"<b>Gouty tophi</b> — ก้อนผลึก MSU สะสมใต้ผิวหนัง/รอบข้อ (สีขาวเหลือง แข็ง อาจแตกมีสารคล้ายชอล์ก) ที่ <b>ใบหู (helix), olecranon bursa, ข้อนิ้วมือ, Achilles tendon, นิ้วเท้า</b> · ทำให้ข้อผิดรูป/ข้อเสีย (punched-out erosion with overhanging edge บน X-ray)",
   pts:[CR(P("Gouty tophi / tophus","toph")),P("ตำแหน่ง/ลักษณะ: ผลึก urate ใต้ผิวหนัง ใบหู olecranon นิ้ว","ear","helix","olecranon","finger","ใบหู","ข้อศอก","urate")]}),
  B("3. What is the diagnosis?",3,{tags:["micro"],key:"R01 L10: chronic gouty arthritis",
   ans:"<b>Chronic tophaceous gouty arthritis</b> (chronic gout)",
   exp:"ACR 2020: มี tophi ≥1, flare ≥2 ครั้ง/ปี หรือ radiographic damage → เริ่ม <b>urate-lowering therapy</b>: allopurinol (ตรวจ <b>HLA-B*5801</b> ก่อนในคนไทย) start low go slow, treat-to-target serum urate &lt;6 mg/dL (&lt;5 ถ้ามี tophi) + prophylaxis colchicine/NSAID/steroid 3–6 เดือน · acute flare: colchicine, NSAID หรือ steroid · lifestyle: งดเบียร์/สุรา ลดเนื้อแดง เครื่องใน อาหารทะเล น้ำหวาน fructose ลดน้ำหนัก (R01 A8)",
   pts:[CR(P("Chronic (tophaceous) gouty arthritis","gout","เกาต์")),P("Chronic/tophaceous","chronic","tophaceous","เรื้อรัง")]})),
 interp:"Needle-shaped strongly negative birefringent crystals + tophi → chronic tophaceous gout",
 summary:["MSU: needle, strongly negative (เหลืองเมื่อขนาน), intracellular","CPP: rhomboid, weakly positive (น้ำเงินเมื่อขนาน)","Tophi: หู olecranon นิ้ว Achilles → chronic tophaceous gout","ULT: allopurinol (HLA-B*5801), target urate <6 (<5 ถ้ามี tophi) + prophylaxis"]}),

/* ===== 4 CXR AP + lateral: mass ===== */
Co({orig:"4",topic:"img",kimg:["ok66b_4"],imgNote:NOIMG+" · CXR PA/AP upright + lateral: round mass ~5 cm, spiculated margin ที่ right upper lobe (lateral view อยู่ด้านหน้าของ major fissure เหนือ minor fissure) ± right hilar enlargement",imgAlt:"CXR ด้านหน้าและด้านข้าง: ก้อนเงาขาวขนาด ~4 cm ที่ปอดขวาส่วนบน ขอบไม่เรียบมีเส้นแหลมแผ่ออก ภาพด้านข้างก้อนอยู่ส่วนหลังบน · ขั้วปอดขวาโตเป็นก้อน · ปอดซ้ายปกติ ไม่มีน้ำในเยื่อหุ้มปอด",
 title:"CXR (frontal and lateral views) — describe a lung mass and localize it",
 seen:"คล้าย XX RoX ข้อ 5 (CXR left upper lung mass: read systematically), MDCU77 RoA ข้อ 7 · R01 I1, I5",
 opinion:"เฉลยโดย Claude: checklist อ่านฟิล์มตาม ABCDEFGHI (Med Y4 MDCU; R01 I1) + ลักษณะ lung cancer บน CXR (R01 I5) และ NCCN Guidelines NSCLC (ฉบับล่าสุด)",
 flag:"⚠ recall '4. CXR: AP, lateral ให้บรรยาย (ภาพเหมือนมีก้อน)' → Claude กำหนด RUL spiculated mass ในชายสูบบุหรี่ และเพิ่มข้อ 2 (DDx + ตรวจต่อ)",
 stem:`A 62-year-old man who has smoked 40 pack-years presents with chronic cough and weight loss of 6 kg in 3 months. His chest radiographs (frontal and lateral views) are shown.<br>1. Describe the chest radiographs.<br>2. What is the most likely diagnosis, and what investigation would you do next?`,
 gray:"4. CXR: AP, lateral ให้บรรยาย (ภาพเหมือนมีก้อน)",
 parts:S(
  B("1. Describe the chest radiographs.",7,{tags:["img"],
   rubric:"เกณฑ์ ABCDEFGHI (Med Y4 MDCU) — ตรวจตามเนื้อหา ไม่ต้องเรียงหัวข้อ: A ครบ 4 (position, exposure, rotation, lung volume) + trachea · C อย่างน้อย heart size หรือ CTR · D ต้องมี diaphragm + CP angles · F finding ผิดปกติ (mass + ตำแหน่งจาก lateral view) ห้ามขาด · B/E/G/H ควรพูด (น้ำหนักน้อย) · I ถ้ามีสาย/อุปกรณ์ต้องบอก",
   ans:"<b>A</b> — Chest radiograph PA (หรือ AP ตามป้าย) upright + lateral view, adequate exposure (เห็น vertebral body หลังเงาหัวใจ), no rotation (spinous process อยู่กึ่งกลาง medial end ของ clavicle), adequate inspiration (posterior rib 10 / anterior rib 6 ตัดกระบังลม), trachea midline · <b>B</b> — กระดูก/soft tissue ปกติ ไม่มี rib destruction · <b>C</b> — heart size ปกติ (CTR &lt;0.5) · <b>D</b> — right hemidiaphragm สูงกว่าซ้ายเล็กน้อย ขอบเรียบ · CP angles sharp ทั้งสองข้าง · <b>E</b> — ไม่มี pleural effusion/pneumothorax · <b>F</b> — <b>a solitary, round, ~5-cm soft-tissue density mass with spiculated (irregular) margin at the right upper lung zone</b>; บน <b>lateral view</b> ก้อนอยู่ <b>ด้านหน้าของ major fissure และเหนือ minor fissure → right upper lobe</b> (anterior segment) · ไม่มี cavitation/calcification · ปอดส่วนอื่นปกติ · <b>G</b> — gastric bubble ปกติ, aortic knob ปกติ · <b>H</b> — <b>right hilum โตเล็กน้อย</b> (สงสัย hilar lymphadenopathy) · <b>I</b> — ไม่มีสาย/อุปกรณ์",
   pts:[H("A — Assessment & Airway",25),P("A · Position: PA/AP, upright + lateral view",...["\\bpa\\b","\\bap\\b","upright","erect","lateral","ท่า"]),P("A · Exposure: adequate",...["exposure","penetrat"]),P("A · Rotation: none",...["rotat"]),P("A · Lung volume / inspiration adequate",...["inspirat","lung volume","\\bribs?\\b","ซี่"]),P("A · Trachea midline",...["trachea","midline"]),
    H("B — Bones & soft tissue",3),P("B · Bones & soft tissue ปกติ (ไม่มี rib destruction)",...["bone","rib destr","soft tissue","กระดูก"]),
    H("C — Cardiac",12),P("C · Heart size / CTR ปกติ",...["\\bctr\\b","heart size","cardiothoracic","cardiac","หัวใจ"]),
    H("D — Diaphragm",20),P("D · Diaphragm: Rt สูงกว่า Lt ขอบเรียบ",...["diaphragm","กระบังลม","กะบังลม"]),P("D · Costophrenic angles sharp",...["costophrenic","\\bcp ?a","cp angle"]),
    H("E — Effusions",3),P("E · ไม่มี effusion / pneumothorax",...["effusion","pneumothorax","pleura"]),
    H("F — Fields of lungs / ความผิดปกติของข้อนี้",33),CR(P("Solitary round mass ~5 cm, spiculated margin",...["mass","ก้อน","nodule","spicul","irregular","round"])),CR(P("ตำแหน่ง: right upper lung zone → lateral view: anterior to major fissure, above minor fissure = RUL",...["right upper","rul","upper lobe","lateral view","major fissure","minor fissure","ขวาบน"])),
    H("G — Gastric bubble & great vessels",2),P("G · Gastric bubble / aortic knob",...["gastric","stomach","aort","great vessel"]),
    H("H — Hila",2),P("H · Right hilar enlargement",...["hil"])]}),
  B("2. What is the most likely diagnosis, and what investigation would you do next?",3,{tags:["img"],flag:"Claude เพิ่ม",
   ans:"<b>Bronchogenic carcinoma (primary lung cancer) of the right upper lobe</b> — ชายสูงอายุ สูบบุหรี่ น้ำหนักลด + spiculated mass &gt;3 cm ± hilar node · DDx: tuberculoma/TB, lung abscess (มี air-fluid level), metastasis, round pneumonia · <b>ตรวจต่อ</b>: <b>CT chest + upper abdomen with contrast</b> (staging, adrenal/liver) → <b>tissue diagnosis</b>: bronchoscopy with biopsy/EBUS-TBNA (central/node) หรือ CT-guided transthoracic needle biopsy (peripheral) · PET/CT, brain MRI ตาม stage · sputum AFB/GeneXpert ในไทย · molecular testing (EGFR, ALK, ROS1, PD-L1) ใน nonsquamous",
   pts:[CR(P("Lung cancer / bronchogenic carcinoma","cancer","carcinoma","malignan","มะเร็ง","neoplasm","tumor")),P("CT chest + tissue biopsy (bronchoscopy/CT-guided)","ct","biopsy","bronchoscop","ebus","tissue"),P("DDx: TB, abscess, metastasis","tb","tubercul","abscess","metasta")]})),
 interp:"Spiculated RUL mass + hilar enlargement ในผู้สูบบุหรี่น้ำหนักลด → lung cancer → CT + biopsy",
 summary:["อ่าน CXR ตาม ABCDEFGHI","Lateral view: major fissure แบ่ง upper/lower, minor fissure แบ่ง RUL/RML","Spiculated mass >3 cm ในผู้สูบบุหรี่ = lung cancer จนกว่าจะพิสูจน์ได้ว่าไม่ใช่","SCC: central ± cavitation · Adeno: peripheral","ตรวจต่อ: CT chest/upper abdomen + tissue biopsy"]}),

/* ===== 5 EKG — MI ===== */
Co({orig:"5",topic:"ekg",kimg:["ok66b_5"],imgNote:NOIMG+" · 12-lead EKG: sinus tachycardia ~100/min, ST elevation 3–4 mm ที่ V1–V4 (± I, aVL) + reciprocal ST depression ใน II, III, aVF, Q wave V1–V3",imgAlt:"EKG 12 lead: sinus rhythm ~100/min สม่ำเสมอ · axis ปกติ · PR, QRS ปกติ · ST ยกขึ้นโค้งนูน 3–4 mm ที่ V1–V4 และ ST กดต่ำใน II, III, aVF",
 title:"EKG — acute anterior STEMI: describe, diagnose and manage",
 seen:"คล้ายสถานี EKG STEMI ปีอื่น (MDCU79 RoA ข้อ 1 — anterior STEMI) · R01 E5",
 opinion:"เฉลยโดย Claude ตาม 2023 ESC Guidelines for the management of acute coronary syndromes และ 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes · วิธีอ่าน EKG ตาม R01 E1–E2",
 flag:"⚠ recall '5. EKG บรรยาย+dx+Mx >>MI?' → Claude เลือก acute anterior STEMI",
 stem:`A 58-year-old man with diabetes presents with crushing chest pain for 1 hour. BP 130/80 mmHg. His 12-lead EKG is shown.<br>1. Describe the EKG.<br>2. What is the diagnosis?<br>3. Outline the immediate management.`,
 gray:"5. EKG บรรยาย+dx+Mx >>MI?",
 parts:S(
  B("1. Describe the EKG.",4,{tags:["ekg"],
   ans:"Standard calibration (10 mm/mV, 25 mm/s) · <b>rate ~100/min</b>, <b>regular sinus rhythm</b> · normal axis · PR, QRS, QT ปกติ · <b>ST-segment elevation 3–4 mm (convex/tombstone) in V1–V4</b> (± I, aVL) · <b>reciprocal ST depression in II, III, aVF</b> · pathologic Q waves/loss of R wave in V1–V3 · hyperacute T waves",
   rubric:"ได้ = rate, rhythm, axis + ST elevation ระบุ lead V1–V4 + reciprocal change ± Q wave",
   pts:[H("Rate/rhythm/axis",30),P("Rate ~100, sinus rhythm","rate","sinus","rhythm","100"),P("Axis ปกติ","axis"),
    H("ST-T change",70),CR(P("ST elevation V1–V4","st elevation","st.?elev","v1","v2","v3","v4")),P("Reciprocal ST depression II, III, aVF","reciprocal","st depression","inferior"),P("Q wave / loss of R wave","q wave","\\bq\\b","poor r","loss of r")]}),
  B("2. What is the diagnosis?",2,{tags:["ekg"],
   ans:"<b>Acute anterior (anteroseptal) ST-elevation myocardial infarction</b> — culprit: <b>proximal LAD</b>",
   pts:[CR(P("Acute anterior STEMI","stemi","st.?elevation myocardial","anterior","myocardial infarction","\\bmi\\b")),P("LAD occlusion","lad","left anterior descending")]}),
  B("3. Outline the immediate management.",4,{tags:["ekg"],
   ans:"<b>Activate cath lab/STEMI fast track</b> · <b>MONA ตามข้อบ่งชี้</b>: O₂ เมื่อ SpO₂ &lt;90%, <b>aspirin 162–325 mg เคี้ยว</b>, nitroglycerin SL (ถ้าไม่ hypotension/RV infarct/ใช้ PDE5i), morphine เมื่อปวดมาก · <b>P2Y12 inhibitor</b> (ticagrelor/prasugrel หรือ clopidogrel) · <b>anticoagulant</b> (UFH ระหว่าง PCI) · <b>Reperfusion</b>: <b>primary PCI ภายใน 90 นาที (≤120 นาทีถ้าต้องส่งต่อ)</b>; ถ้าทำไม่ได้ทันเวลา → <b>fibrinolysis ภายใน 30 นาที</b> (streptokinase/tenecteplase) หากไม่มีข้อห้าม แล้วส่ง PCI ภายใน 2–24 ชม. · monitor arrhythmia · ต่อมา: high-intensity statin, β-blocker, ACEI, DAPT 12 เดือน",
   rubric:"ได้ = aspirin + P2Y12 + anticoagulant + reperfusion (primary PCI ≤90 นาที หรือ fibrinolysis ≤30 นาที) + statin",
   pts:[CR(P("Aspirin + P2Y12 inhibitor (DAPT)","aspirin","asa","clopidogrel","ticagrelor","prasugrel","dapt")),CR(P("Reperfusion: primary PCI ≤90 นาที หรือ fibrinolysis ≤30 นาที","pci","reperfus","fibrinoly","thromboly","streptokinase","tenecteplase","cath")),P("Anticoagulant (heparin)","heparin","enoxaparin","anticoag","ufh"),P("Nitrate/O₂/morphine ตามข้อบ่งชี้ + statin, β-blocker, ACEI","nitro","oxygen","morphine","statin","beta","acei")]})),
 interp:"ST elevation V1–V4 + reciprocal inferior ST depression → acute anterior STEMI (LAD) → reperfusion ด่วน",
 summary:["V1–V4 = anterior (LAD) · II, III, aVF = inferior (RCA) · I, aVL, V5–V6 = lateral (LCx)","Primary PCI door-to-balloon ≤90 นาที; fibrinolysis door-to-needle ≤30 นาที","DAPT + anticoagulant + statin","Nitrate ห้ามใน RV infarct/hypotension/PDE5i"]}),

/* ===== 6 History — headache ===== */
Co({orig:"6",topic:"hx",ex:1,kimg:["ok66b_6"],
 title:"History taking — headache: red flags and diagnosis (migraine without aura)",
 seen:"",
 opinion:"เฉลยโดย Claude ตาม International Classification of Headache Disorders, 3rd edition (ICHD-3) และ SNNOOP10 red flags · R01 ไม่มีหน้าซักประวัติปวดศีรษะ",
 flag:"⚠ recall '6. ซักประวัติปวดหัว+dx' → Claude แต่งบทผู้ป่วยจำลอง (migraine without aura) ให้ฝึกทั้งการแยก red flag และการวินิจฉัย",
 stem:`A 28-year-old woman presents with recurrent headache. Take a history from the simulated patient and give the most likely diagnosis.`,
 gray:"6. ชักประวัติปวดหัว+dx",
 sp:"Claude แต่ง: หญิง 28 ปี ปวดศีรษะเป็น ๆ หาย ๆ 2 ปี เดือนละ 2–3 ครั้ง ครั้งละ 6–24 ชม. ปวดตุบ ๆ ข้างขวา (บางครั้งซ้าย) ปวดปานกลาง–มาก ทำงานไม่ได้ ขึ้นบันไดแล้วปวดมากขึ้น คลื่นไส้ อาเจียน กลัวแสงกลัวเสียง อยากนอนในห้องมืด · ไม่มีอาการเห็นแสงวาบนำมาก่อน · กระตุ้น: ช่วงมีประจำเดือน อดนอน · แม่ปวดหัวแบบเดียวกัน · กิน paracetamol บ้างช่วยเล็กน้อย 4–5 วัน/เดือน · ไม่มีไข้ คอไม่แข็ง ไม่อ่อนแรง ไม่ชา ตาไม่มัว ไม่ปวดแรงทันทีทันใด ไม่ตื่นกลางดึกเพราะปวด ไม่มีน้ำหนักลด ไม่ได้กินยาคุมกำเนิด ไม่ได้ตั้งครรภ์ · ตรวจร่างกาย/fundus ปกติ (ผู้คุมสอบบอก)",
 parts:S(
  B("1. Take a history.",7,{tags:["hx"],
   ans:"<b>ลักษณะปวด (SOCRATES)</b>: เริ่มเมื่อไร เป็นมานาน (acute vs chronic recurrent), <b>onset ทันทีทันใดหรือค่อยเป็น</b> (thunderclap), ตำแหน่ง (ข้างเดียว/ทั้งศีรษะ/รอบตา), ลักษณะ (ตุบ ๆ/บีบรัด/แทง), ความรุนแรง ผลต่อกิจวัตร, ระยะเวลาต่อครั้ง ความถี่, เวลาที่เป็น (เช้า/กลางคืน ตื่นเพราะปวด), ปัจจัยกระตุ้น (ประจำเดือน อดนอน ความเครียด อาหาร แสง) ปัจจัยที่ทำให้ดีขึ้น/แย่ลง (กิจกรรม ไอ จาม ก้ม เปลี่ยนท่า) · <b>อาการร่วม</b>: คลื่นไส้อาเจียน, กลัวแสง กลัวเสียง, aura (เห็นแสงวาบ ชา พูดไม่ชัด), น้ำตาไหล คัดจมูก ตาแดงข้างเดียว (cluster), autonomic · <b>Red flags (SNNOOP10)</b>: ไข้ คอแข็ง ผื่น (meningitis), น้ำหนักลด มะเร็ง HIV/ภูมิต่ำ, neurological deficit/ชัก/สับสน, <b>onset ทันทีทันใด</b> (SAH), อายุ &gt;50 ปีเริ่มใหม่ (giant cell arteritis — ปวดขมับ เคี้ยวแล้วปวดกราม ตามัว), ปวดเปลี่ยนแบบเดิม/เป็นมากขึ้นเรื่อย ๆ, ปวดตามท่า/ไอจามเบ่ง, papilledema, ตั้งครรภ์/หลังคลอด, ตามัว ปวดตา (glaucoma), หลังบาดเจ็บศีรษะ, ยาต้านการแข็งตัว · <b>ประวัติยา</b>: ยาแก้ปวดที่ใช้และ<b>จำนวนวันต่อเดือน</b> (medication overuse headache ≥10–15 วัน/เดือน), ยาคุมกำเนิด (migraine with aura ห้าม estrogen) · <b>อื่น ๆ</b>: ประวัติครอบครัว migraine, ความเครียด การนอน, ความดันโลหิต, กาแฟ",
   rubric:"ได้ = ลักษณะปวดครบ + อาการร่วม (คลื่นไส้, photo/phonophobia, aura) + red flags ≥5 + ยาแก้ปวด/จำนวนวัน + ปัจจัยกระตุ้น/ครอบครัว",
   pts:[H("ลักษณะปวด",35),P("ระยะเวลา ความถี่ ระยะต่อครั้ง","นาน","duration","ความถี่","frequen","กี่ครั้ง","กี่ชั่วโมง"),P("ตำแหน่ง ลักษณะ (ตุบ ๆ) ความรุนแรง ผลต่อกิจวัตร","ตำแหน่ง","ข้างเดียว","ตุบ","pulsat","throb","รุนแรง","sever","กิจวัตร"),P("ปัจจัยกระตุ้น/บรรเทา (ประจำเดือน อดนอน กิจกรรม)","กระตุ้น","trigger","ประจำเดือน","menstru","นอน","sleep","กิจกรรม","activity"),
    H("อาการร่วม",20),CR(P("คลื่นไส้อาเจียน กลัวแสง กลัวเสียง","คลื่นไส้","nausea","อาเจียน","กลัวแสง","photophob","กลัวเสียง","phonophob")),P("Aura (เห็นแสงวาบ ชา)","aura","แสงวาบ","visual","zigzag"),
    H("Red flags",35),CR(P("Onset ทันทีทันใด (thunderclap)","ทันที","sudden","thunderclap","worst")),CR(P("ไข้ คอแข็ง","ไข้","fever","คอแข็ง","stiff neck","neck stiff")),P("Neurological deficit / ชัก / สับสน / ตามัว","อ่อนแรง","weak","ชา","numb","ชัก","seiz","สับสน","ตามัว","vision","deficit"),P("น้ำหนักลด มะเร็ง ภูมิต่ำ อายุ >50 ปวดเปลี่ยนแบบ ตื่นกลางดึก ไอจามแล้วปวด","น้ำหนักลด","weight loss","มะเร็ง","cancer","hiv","50","ตื่น","ไอ","จาม","เปลี่ยน"),
    H("ยา/ครอบครัว",10),P("ยาแก้ปวดกี่วันต่อเดือน (MOH) ยาคุม + ประวัติครอบครัว","ยาแก้ปวด","analges","paracetamol","กี่วัน","overuse","ยาคุม","contracept","ครอบครัว","family")]}),
  B("2. What is the most likely diagnosis?",3,{tags:["hx"],
   ans:"<b>Migraine without aura</b> (ICHD-3: ≥5 attacks, นาน 4–72 ชม., ≥2 ใน 4: ข้างเดียว, ตุบ ๆ, ปวดปานกลาง–มาก, แย่ลงเมื่อทำกิจกรรม + ≥1: คลื่นไส้/อาเจียน หรือ photophobia + phonophobia; ไม่มีสาเหตุอื่น) · menstrual-related · DDx: tension-type headache (บีบรัดทั้งสองข้าง ไม่มีคลื่นไส้), cluster (รอบตาข้างเดียว 15–180 นาที + autonomic), medication overuse headache, secondary headache (ไม่มี red flag)",
   exp:"รักษา: acute — NSAIDs/paracetamol เร็วตั้งแต่เริ่มปวด, triptan (ห้ามใน CAD/stroke), antiemetic; จำกัดยาแก้ปวด &lt;10 วัน/เดือน · preventive (≥4 วัน/เดือน หรือกระทบชีวิต): propranolol, amitriptyline, flunarizine, topiramate, valproate (ห้ามในหญิงวัยเจริญพันธุ์), CGRP mAb · หลีกเลี่ยงตัวกระตุ้น บันทึก headache diary",
   pts:[CR(P("Migraine (without aura)","migraine","ไมเกรน")),P("เหตุผลตามเกณฑ์ ICHD-3 / แยก TTH, cluster","ichd","tension","cluster","criteria","4.?72")]})),
 interp:"ปวดตุบ ๆ ข้างเดียว 6–24 ชม. + คลื่นไส้ + photo/phonophobia + สัมพันธ์ประจำเดือน + ครอบครัว ไม่มี red flag → migraine without aura",
 summary:["Red flags SNNOOP10: systemic sx, neoplasm, neuro deficit, onset sudden, older >50, pattern change, positional, precipitated by Valsalva, papilledema, pregnancy, painful eye, post-trauma, pathology of immune, painkiller overuse","Migraine: 4–72 ชม., ข้างเดียว, ตุบ, ปานกลาง–มาก, แย่ลงเมื่อเคลื่อนไหว + คลื่นไส้/photophobia","TTH: บีบรัดสองข้าง ไม่คลื่นไส้","Cluster: รอบตา 15–180 นาที + autonomic, ชาย","MOH: ยาแก้ปวด ≥10–15 วัน/เดือน"]}),

/* ===== 7 History — edema ===== */
Co({orig:"7",topic:"hx",ex:1,kimg:["ok66b_7"],
 title:"History taking — swelling (edema): identify the organ system and diagnose (alcoholic cirrhosis)",
 seen:"สถานีแบบเดียวกับ R01 (OSCE Med for All) H8 recall 12 (ขาบวม — ท้องโตด้วย → ตับ) และ XX RoX ข้อ XX-Edema · คล้าย MDCU74 RoX ข้อ 6 (ขาบวมในคนดื่มสุรา)",
 opinion:"เฉลยตามแนวซักประวัติบวมของ R01 H8 (บวมที่ไหนก่อน → หา organ: ตับ ไต หัวใจ hypoalbuminemia) + ตำรา (AASLD/EASL cirrhosis guidance)",
 flag:"⚠ recall '7. ซักประวัติบวม+dx' → Claude แต่งบทผู้ป่วยจำลอง (alcoholic cirrhosis — ท้องบวมก่อนขา) ให้ตรงกับ recall สถานีขาบวมใน R01",
 stem:`A 50-year-old man presents with swelling. Take a history from the simulated patient, state which organ system is most likely involved and give the most likely diagnosis.`,
 gray:"7. ชักประวัติบวม+dx",
 sp:"Claude แต่ง: ชาย 50 ปี ท้องโตขึ้นเรื่อย ๆ 2 เดือน แล้วขาบวมสองข้างตามมา 1 เดือน (ท้องบวมก่อน) กดบุ๋ม ไม่ปวด ไม่แดง · ตาเหลืองเล็กน้อย ปัสสาวะสีเข้ม เบื่ออาหาร น้ำหนักลดแต่ท้องโต จ้ำเลือดง่าย · ไม่เคยอาเจียนเป็นเลือด ไม่มีถ่ายดำ ไม่สับสน · ดื่มเหล้าขาววันละครึ่งขวด 20 ปี · ไม่เคยตรวจไวรัสตับ · นอนราบได้ ไม่ตื่นมาหอบ ไม่เหนื่อยเวลาออกแรง · ตื่นเช้าหน้าไม่บวม ปัสสาวะไม่เป็นฟอง ไม่เป็นเลือด · ไม่มีไข้ ไม่ปวดท้อง · ไม่มีโรคประจำตัว ไม่ได้กินยา NSAIDs/สมุนไพร",
 parts:S(
  B("1. Take a history.",7,{tags:["hx"],key:"R01 H8: บวมกี่วัน ข้างเดียว/สองข้าง กดบุ๋ม บวมที่ไหนก่อน (ท้อง/ขา/หนังตา) → หา organ: ตับ ไต หัวใจ malnutrition · ซัก PH โรคประจำตัว ยา",
   ans:"<b>ลักษณะบวม</b>: เป็นมานานเท่าไร, <b>ข้างเดียวหรือสองข้าง</b> (ข้างเดียว = DVT, cellulitis, lymphedema), กดบุ๋มไหม, ปวด แดง ร้อนไหม, <b>บวมที่ไหนก่อน — ท้องก่อน (ตับ), ขาก่อน/dependent (หัวใจ), หนังตาตอนตื่นนอน/scrotum (ไต)</b> · <b>ตับ</b>: ท้องโต ตัวตาเหลือง ปัสสาวะเข้ม จ้ำเลือดง่าย อาเจียนเป็นเลือด/ถ่ายดำ (varices) สับสน นอนกลับวัน (HE) — <b>ดื่มสุรา (ชนิด ปริมาณ ระยะเวลา)</b>, ปัจจัยเสี่ยง <b>HBV/HCV</b> (ครอบครัว เลือด สัก ฉีดยา เพศสัมพันธ์), ยา/สมุนไพร · <b>หัวใจ</b>: เหนื่อยเวลาออกแรง <b>นอนราบไม่ได้ ตื่นมาหอบ</b> เจ็บหน้าอก ใจสั่น · <b>ไต</b>: <b>ปัสสาวะเป็นฟอง</b> ปัสสาวะเป็นเลือด ปัสสาวะน้อย หน้าบวมตอนเช้า · <b>Malnutrition/GI loss</b>: กินน้อย ท้องเสียเรื้อรัง · <b>อื่น ๆ</b>: ไข้ (SBP), น้ำหนักลด (มะเร็ง/HCC), hypothyroid · <b>PMH/ยา</b>: โรคประจำตัว (HT, DM, โรคหัวใจ ไต ตับ), ยา (CCB, NSAIDs, steroid, pioglitazone) · ประวัติครอบครัวมะเร็งตับ",
   rubric:"ได้ = ลักษณะบวม (ข้าง/บุ๋ม/ที่ไหนก่อน) + ถามอาการทั้ง 4 ระบบ (ตับ หัวใจ ไต nutrition) + สุรา + HBV/HCV + ยา",
   pts:[H("ลักษณะบวม",25),CR(P("บวมที่ไหนก่อน (ท้อง/ขา/หนังตา)","ที่ไหนก่อน","ก่อน","ท้องก่อน","ขาก่อน","หนังตา","eyelid","periorbital")),P("ข้างเดียว/สองข้าง กดบุ๋ม ปวดแดง ระยะเวลา","ข้างเดียว","สองข้าง","bilateral","unilateral","บุ๋ม","pitting","นาน","ปวด","แดง"),
    H("แยกระบบ",45),CR(P("ตับ: ตัวเหลือง ท้องโต อาเจียนเป็นเลือด/ถ่ายดำ สับสน","เหลือง","jaundice","ท้องโต","ท้องบวม","ascites","ถ่ายดำ","อาเจียนเป็นเลือด","สับสน","จ้ำเลือด")),P("หัวใจ: เหนื่อย นอนราบไม่ได้ PND","เหนื่อย","dyspn","นอนราบ","orthopn","pnd","หอบ"),P("ไต: ปัสสาวะเป็นฟอง/เลือด/น้อย","ฟอง","froth","foam","ปัสสาวะเป็นเลือด","hematuria","ปัสสาวะน้อย"),P("Malnutrition/GI loss","อาหาร","กินน้อย","malnutri","ท้องเสีย"),
    H("สาเหตุ/ปัจจัยเสี่ยง",30),CR(P("ดื่มสุรา (ชนิด ปริมาณ ระยะเวลา)","สุรา","เหล้า","alcohol","ดื่ม")),P("HBV/HCV risk","hbv","hcv","ไวรัสตับ","hepatitis","สัก","ฉีดยา","เลือด"),P("ยา (CCB, NSAIDs, steroid, สมุนไพร) + โรคประจำตัว","ยา","drug","nsaid","amlodipine","สมุนไพร","โรคประจำตัว")]}),
  B("2. Which organ system is most likely involved, and what is the most likely diagnosis?",3,{tags:["hx"],key:"R01 H8: มีท้องโตด้วย → อวัยวะที่เกี่ยวข้องคือตับ",
   ans:"<b>ตับ (hepatic)</b> — <b>alcoholic liver cirrhosis with ascites (decompensated cirrhosis)</b> · เหตุผล: ท้องบวมก่อนขา, jaundice, จ้ำเลือดง่าย, ดื่มสุราหนัก 20 ปี, ไม่มีอาการหัวใจ (orthopnea/PND) และไต (ปัสสาวะฟอง/หน้าบวม) · ต้องตรวจ HBsAg/anti-HCV ร่วม",
   exp:"ตรวจต่อ: LFT, albumin, PT/INR, CBC (plt ต่ำ — hypersplenism), HBsAg, anti-HCV, US abdomen + AFP (HCC), diagnostic paracentesis (SAAG ≥1.1 = portal HT, ascitic PMN ≥250 = SBP), EGD screening varices · รักษา: หยุดสุรา, จำกัดเกลือ, spironolactone ± furosemide, Child-Pugh/MELD",
   pts:[CR(P("ตับ — cirrhosis with ascites","ตับ","liver","hepat","cirrho","ascites")),P("Alcoholic","alcohol","สุรา","เหล้า")]})),
 interp:"ท้องบวมก่อนขา + jaundice + จ้ำเลือด + ดื่มสุราหนัก ไม่มีอาการหัวใจ/ไต → decompensated alcoholic cirrhosis",
 summary:["บวมสองข้าง: ตับ (ท้องก่อน), หัวใจ (ขาก่อน + orthopnea/PND), ไต (หนังตาตอนเช้า + ปัสสาวะฟอง), malnutrition, ยา","บวมข้างเดียว: DVT, cellulitis, lymphedema","Cirrhosis: ถามสุรา HBV/HCV ยา + complication (varices, HE, SBP, HCC)","Paracentesis: SAAG ≥1.1 = portal hypertension"]}),

/* ===== 8 PE — lung (pneumonia) ===== */
Co({orig:"8",topic:"pe",ex:1,kimg:["ok66b_8"],
 title:"Physical examination — respiratory system in a patient with pneumonia (right lower lobe consolidation)",
 seen:"คล้าย MDCU76 RoC ข้อ 7 (history + lung auscultation), MDCU75 RoA ข้อ 8 · R01 P4 (RS checklist)",
 opinion:"เฉลยตาม checklist การตรวจระบบหายใจของ R01 P4 (inspection, palpation, percussion, auscultation, vocal resonance) และการรายงานผล consolidation",
 flag:"⚠ recall '8. ตรวจร่างกาย ปอด โจทย์ให้เป็น pneumonia?' → Claude กำหนดผู้ป่วยจำลอง RLL pneumonia (ผู้คุมสอบบอกผลเมื่อตรวจถูกวิธี)",
 stem:`A 45-year-old man has had fever, cough with purulent sputum and right pleuritic chest pain for 3 days. Examine his respiratory system and report the findings. What is your diagnosis?`,
 gray:"8. ตรวจร่างกาย ปอด โจทย์ให้เป็นpneumonia?",
 sp:"ผู้ป่วยจำลอง/หุ่น · ผลตรวจ (ผู้คุมสอบบอกเมื่อตรวจถูกวิธี): RR 26/min, SpO₂ 93%, ไม่มี cyanosis/clubbing, trachea midline · chest expansion ด้านขวาล่างลดลง · vocal/tactile fremitus เพิ่มขึ้นด้านขวาล่าง · percussion dull ที่ right lower lung (หลัง) · bronchial breath sound + fine crackles ที่ right lower lung · vocal resonance เพิ่ม, whispering pectoriloquy, egophony บวก ที่บริเวณเดียวกัน",
 parts:S(
  B("1. Examine the respiratory system and report the findings.",7,{tags:["pe"],key:"R01 P4: แบบรายงาน consolidation — ↓ expansion ข้างนั้น · ↑ vocal fremitus · dull · bronchial breath sound + crackles · ↑ vocal resonance, whispering pectoriloquy, egophony",
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต ล้างมือ จัดท่านั่ง เปิดหน้าอก/หลังเหมาะสม ความเป็นส่วนตัว · <b>General</b>: ดูการหายใจ RR, ใช้กล้ามเนื้อช่วยหายใจ, cyanosis, <b>clubbing</b>, vital signs/SpO₂ · <b>Inspection</b>: รูปทรงหน้าอก แผลเป็น การเคลื่อนไหวสมมาตร · <b>Palpation</b>: <b>trachea position</b>, <b>chest expansion</b> (หน้า/หลัง บนล่าง), <b>tactile/vocal fremitus</b> (ให้นับ 'หนึ่ง-สอง-สาม') เทียบซ้ายขวา · <b>Percussion</b>: เคาะเทียบซ้ายขวาเป็นขั้นบันได ทั้งหน้า ข้าง หลัง (supraclavicular → base) · <b>Auscultation</b>: diaphragm ฟังเทียบซ้ายขวา ให้หายใจทางปากลึก ๆ — breath sound, added sound (crackles, wheeze, pleural rub) · <b>vocal resonance</b>, whispering pectoriloquy, egophony ('อี' เป็น 'เอ') · <b>รายงาน</b>: 'RR 26, SpO₂ 93%, trachea midline, <b>decreased chest expansion, increased tactile fremitus, dullness on percussion, bronchial breath sounds with fine crackles, increased vocal resonance, whispering pectoriloquy and egophony at the right lower lung zone</b> → consolidation of the right lower lobe'",
   rubric:"ได้เต็มเมื่อทำครบ 4 ขั้น เทียบซ้ายขวา ทั้งหน้าและหลัง + รายงาน consolidation ครบ · ไม่ล้างมือ/ไม่เทียบซ้ายขวา หักคะแนน",
   pts:[H("เตรียม + general",15),P("แนะนำตัว ขออนุญาต ล้างมือ ท่า เปิดหน้าอก","แนะนำ","อนุญาต","consent","ล้างมือ","hand","privacy"),P("RR, SpO₂, cyanosis, clubbing","rr","respiratory rate","spo2","cyanos","clubbing"),
    H("Inspection + palpation",25),P("Trachea position","trachea","หลอดลม"),CR(P("Chest expansion เทียบซ้ายขวา","expansion","ขยาย")),P("Tactile/vocal fremitus","fremitus"),
    H("Percussion",15),CR(P("เคาะเทียบซ้ายขวา หน้า ข้าง หลัง","percuss","เคาะ","dull","ทึบ")),
    H("Auscultation",25),CR(P("ฟัง breath sound + added sound เทียบซ้ายขวา","ausculta","ฟัง","breath sound","bronchial","crackle")),P("Vocal resonance / whispering pectoriloquy / egophony","vocal resonance","whisper","egophony","pectoril"),
    H("รายงาน",20),CR(P("รายงาน consolidation ที่ right lower lung","consolidat","right lower","rll","ขวาล่าง"))]}),
  B("2. What is your diagnosis?",3,{tags:["pe"],
   ans:"<b>Community-acquired pneumonia — right lower lobe (lobar) consolidation</b> (น่าจะ S. pneumoniae) · ตรวจต่อ: CXR, CBC, sputum Gram stain/culture, hemoculture, CURB-65 · รักษา: admit (RR ≥30?/CURB-65) ceftriaxone + azithromycin; OPD amoxicillin",
   exp:"แยก effusion: ↓ fremitus, stony dull, ↓ breath sound, trachea เบี้ยวออก (ถ้ามาก) · pneumothorax: ↓ fremitus, hyperresonance, ↓ BS · collapse: trachea ดึงเข้าหา",
   pts:[CR(P("Pneumonia / consolidation RLL","pneumonia","ปอดอักเสบ","consolidat")),P("Community-acquired / lobar","community","cap","lobar")]})),
 interp:"↓ expansion + ↑ fremitus + dull + bronchial breath sound + crackles + ↑ vocal resonance ที่ขวาล่าง → RLL consolidation (CAP)",
 summary:["RS exam: inspection → palpation (trachea, expansion, fremitus) → percussion → auscultation (+ vocal resonance) เทียบซ้ายขวา หน้าหลัง","Consolidation: ↑ fremitus, dull, bronchial BS, crackles, egophony","Effusion: ↓ fremitus, stony dull, ↓ BS","Pneumothorax: ↓ fremitus, hyperresonance, ↓ BS"]}),

/* ===== 9 Foley ===== */
Co({orig:"9",topic:"proc",ex:1,proc:1,kimg:["ok66b_9"],
 title:"Procedure — Foley catheter insertion (male manikin)",
 seen:"คล้าย MDCU79 RoA ข้อ 7, MDCU75 RoD ข้อ 19, MDCU74 RoX ข้อ 11 (Foley) · R01 PR2",
 opinion:"เฉลยตามขั้นตอน R01 PR2 (Foley — ลายมือ + handout) และ CDC/HICPAC Guideline for Prevention of Catheter-Associated Urinary Tract Infections (2009, updated 2019)",
 flag:"⚠ recall '9. ใส่ Foley' → Claude เติมสถานการณ์ชาย acute urinary retention บนหุ่น",
 stem:`A 70-year-old man cannot pass urine for 12 hours and has a distended, tender suprapubic area. Explain the procedure to the patient and insert a Foley catheter on the male manikin.`,
 gray:"9. ใส่ Foley",
 sp:"หุ่นอวัยวะเพศชาย · ชุดสวนปัสสาวะปลอดเชื้อ: Foley 14–16 Fr (รหัสสี 14 เขียว, 16 ส้ม, 18 แดง), xylocaine jelly 2%, syringe + sterile water 10 mL, antiseptic/NSS, สำลี/gauze, ผ้าเจาะกลาง, ถุงมือ sterile, urine bag, plaster",
 parts:S(
  B("1. Explain and insert a Foley catheter.",10,{tags:["proc"],key:"R01 PR2: แนะนำตัว ตรวจสอบชื่อ อธิบาย จัดท่า ปิดม่าน · ใส่ถุงมือ คลี่ผ้า หล่อลื่น · ♂ จับตั้ง 90° รูดลง หารู เช็ดปลาย→ฐาน 3–4 ครั้ง สวน หายใจยาว ๆ · ฉี่ไหลใส่เข้าอีก 1 นิ้ว ต่อถุง ฉีด 10 mL เข้า balloon ติดสายที่หน้าขา ถุงอยู่ต่ำ",
   ans:"<b>สื่อสาร</b>: แนะนำตัว <b>ยืนยันตัวผู้ป่วย</b> อธิบายเหตุผล ('ปัสสาวะค้างจำเป็นต้องสวนระบาย') ขั้นตอน ความรู้สึก ความเสี่ยง (ติดเชื้อ เลือดออก บาดเจ็บท่อ) <b>ขอความยินยอม</b> ถามแพ้ยาชา/latex · <b>เตรียม</b>: ล้างมือ จัดท่านอนหงาย ปิดม่าน ปิดส่วนอื่นมิดชิด วางชุดระหว่างขา เปิดชุดปลอดเชื้อ เทน้ำยา เตรียม sterile water ใน syringe และ jelly · <b>Aseptic</b>: ใส่<b>ถุงมือ sterile</b> คลี่ผ้าเจาะกลาง · <b>ใส่</b>: มือข้างไม่ถนัดจับองคชาต<b>ตั้งฉาก 90°</b> รูดหนังหุ้มปลายลง ทำความสะอาด glans จากรูท่อปัสสาวะออกด้านนอก (ปลาย→ฐาน) 3–4 ครั้ง · ใส่ <b>xylocaine jelly</b> เข้าท่อปัสสาวะ (หรือหล่อลื่นสาย 6–7 นิ้ว) · สอดสายช้า ๆ ให้ผู้ป่วยหายใจยาว ๆ ไม่ฝืน · <b>เห็นปัสสาวะไหล</b> แล้วดันเข้าอีกจนถึง Y-junction (bifurcation) · <b>ฉีด sterile water 10 mL เข้า balloon</b> แล้วดึงกลับเบา ๆ จนติด · ต่อ urine bag ระบบปิด · <b>รูดหนังหุ้มปลายกลับ</b> (กัน paraphimosis) · <b>ยึดสายที่หน้าขา/หน้าท้อง</b> ไม่ตึง · <b>ถุงต่ำกว่ากระเพาะปัสสาวะ</b> ไม่วางพื้น · ทิ้งขยะ ถอดถุงมือ ล้างมือ บันทึก (ขนาดสาย ปริมาณ ลักษณะปัสสาวะ) · ส่ง UA/culture ถ้ามีข้อบ่งชี้",
   exp:"ข้อบ่งชี้คาสาย (R01 PR2 handout): อุดตันท่อปัสสาวะส่วนล่าง, ปัสสาวะเองไม่ได้ต้องสวนบ่อย, neurogenic bladder, ผู้ป่วยหมดสติ, หลังผ่าตัด · CAUTI: ใส่เฉพาะมีข้อบ่งชี้ ถอดเร็วที่สุด ระบบปิด ไม่เปลี่ยนสายตามกำหนดเวลา ไม่ให้ antibiotic ป้องกัน · ห้ามเป่า balloon ก่อนเห็นปัสสาวะ · ใส่ไม่ผ่าน (BPH) → Coudé catheter/ปรึกษา urology/suprapubic",
   rubric:"ได้เต็มเมื่อทำครบข้อ must-not-miss + ≥80% ของ checklist · ปนเปื้อน sterile field, เป่า balloon ก่อนเห็นปัสสาวะ หรือไม่รูดหนังหุ้มปลายกลับ = 0 ในข้อย่อยนั้น",
   pts:[H("สื่อสาร + เตรียม",25),CR(P("แนะนำตัว ยืนยันตัวผู้ป่วย อธิบาย ขอความยินยอม","แนะนำ","ยืนยัน","identif","อธิบาย","explain","consent","ยินยอม")),P("ล้างมือ ท่า ความเป็นส่วนตัว เตรียมชุด","ล้างมือ","hand","ท่า","ม่าน","privacy","เตรียม"),
    H("ใส่สาย (aseptic)",55),CR(P("ถุงมือ sterile / aseptic technique","sterile","ถุงมือ","glove","aseptic","ปลอดเชื้อ")),P("องคชาต 90° รูดหนังหุ้มปลาย ทำความสะอาดจากรูออกด้านนอก","90","ตั้งฉาก","foreskin","หนังหุ้ม","clean","ทำความสะอาด"),P("Xylocaine jelly / หล่อลื่น","xylocaine","lidocaine","jelly","หล่อลื่น","lubric"),CR(P("เห็นปัสสาวะก่อน แล้วดันถึง Y-junction จึงเป่า balloon 10 mL sterile water","ปัสสาวะไหล","urine flow","y-?junction","bifurcat","balloon","sterile water")),
    H("หลังทำ",20),CR(P("รูดหนังหุ้มปลายกลับ","paraphimosis","รูดกลับ","reposition","foreskin back")),P("ยึดสาย ถุงต่ำกว่ากระเพาะ ระบบปิด บันทึก","ยึด","fix","tape","ถุง","bag","ต่ำกว่า","บันทึก","record")]})),
 interp:"Foley ชาย: aseptic, 90°, เห็นปัสสาวะก่อนเป่า balloon, รูดหนังหุ้มปลายกลับ, ถุงต่ำ ระบบปิด",
 summary:["ชาย: 90° → สอดถึง Y-junction → เห็นปัสสาวะ → balloon 10 mL sterile water","รูดหนังหุ้มปลายกลับทุกครั้ง","ขนาดสาย: 14 เขียว, 16 ส้ม, 18 แดง","CAUTI: ข้อบ่งชี้ชัด, ระบบปิด, ถุงต่ำกว่ากระเพาะ, ถอดเร็ว"]}),

/* ===== 10 Abdominal examination ===== */
Co({orig:"10",topic:"pe",ex:1,kimg:["ok66b_10"],
 title:"Physical examination — abdomen (liver, spleen and ascites) in a patient with chronic liver disease",
 seen:"คล้าย MDCU78 RoD ข้อ 1 (abdomen ใน chronic hepatitis B), MDCU75 RoA ข้อ 10 · R01 P6 (abdomen — liver span, spleen)",
 opinion:"เฉลยตาม R01 P6 (handout + checklist ตรวจระบบทางเดินอาหาร: liver span, คลำม้ามท่านอนหงาย/ตะแคงขวา, Castell's/Traube's, ascites) และ Bates' Guide to Physical Examination",
 flag:"⚠ recall '10. ตรวจ abdomen' ไม่บอกเคส → Claude กำหนดผู้ป่วยโรคตับเรื้อรังท้องโต (ผลตรวจผู้คุมสอบบอก)",
 stem:`A 52-year-old man with chronic hepatitis B has abdominal distension. Examine his abdomen and report the findings.`,
 gray:"10. ตรวจ abdomen",
 sp:"ผลตรวจ (ผู้คุมสอบบอกเมื่อตรวจถูกวิธี): mild jaundice, spider nevi ที่หน้าอก, palmar erythema, ไม่มี flapping tremor · ท้องโตป่องด้านข้าง (bulging flanks), umbilicus everted, dilated superficial veins ไหลออกจากสะดือ · bowel sound ปกติ · liver คลำไม่ได้ (shrunken) liver span 7 cm, left lobe คลำได้ใต้ xiphoid 3 cm แข็ง · spleen คลำได้ 3 cm below left costal margin (ท่าตะแคงขวา) · shifting dullness บวก",
 parts:S(
  B("1. Examine the abdomen and report the findings.",10,{tags:["pe"],key:"R01 P6: ดู (general, ตา, oral, stigmata CLD, HE, contour + dilated veins) → ฟัง (bowel sound, bruit, venous hum) → คลำ–เคาะ (light/deep 4 quadrant, liver span, spleen supine + right lateral decubitus, kidney, hernia) → ascites (fluid thrill, shifting dullness)",
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต ล้างมือ ให้นอนหงายราบ หมอนใบเดียว แขนข้างลำตัว งอเข่าเล็กน้อย เปิดหน้าท้อง (xiphoid–symphysis) ยืนข้างขวา ถามจุดเจ็บก่อน · <b>General/ดู</b>: jaundice, pallor, <b>stigmata of chronic liver disease</b> (spider nevi, palmar erythema, gynecomastia, testicular atrophy, Dupuytren), <b>flapping tremor</b>, fetor hepaticus, leg edema · contour (distended, bulging flanks), umbilicus, scar, <b>dilated superficial veins (ทิศทางการไหล — caput medusae)</b> · <b>ฟัง</b>: bowel sound, bruit (hepatic/renal), venous hum · <b>คลำ</b>: light → deep ทั้ง 4 quadrant ดูหน้าผู้ป่วย · <b>Liver</b>: เริ่มจาก RLQ (~10 cm ใต้ costal margin) มือขนาน costal margin หายใจเข้าแล้วดันขึ้น เลื่อนขึ้นจนถึง costal margin; คลำ left lobe แนว midline · <b>Liver span</b>: เคาะแนว MCL หาขอบบน (จากทรวงอกลง) ขอบล่าง (จากท้องขึ้น) ปกติ 8–12 cm (+ เคาะ midline) · <b>Spleen</b>: เริ่มจากใต้สะดือ/RLQ มือตั้งฉาก left costal margin ดันไปทาง left axilla ขณะหายใจเข้า, ท่านอนหงายแล้ว<b>ตะแคงขวา</b>; ไม่ได้ → เคาะ <b>Castell's</b> (ICS ล่างสุด anterior axillary line ซ้าย ทึบเมื่อหายใจเข้า) / Traube's space · ไต bimanual (ballotable) · hernia · <b>Ascites</b>: <b>shifting dullness</b> (เคาะจาก umbilicus ไปด้านข้างจนทึบ ตะแคง รอ 30 วินาที เคาะซ้ำ), fluid thrill (ascites มาก) · <b>รายงาน</b>: 'jaundice, spider nevi, palmar erythema, no asterixis; distended abdomen with bulging flanks and dilated veins flowing away from the umbilicus; liver not palpable, span 7 cm, firm left lobe 3 cm below xiphoid; <b>splenomegaly 3 cm below LCM</b>; <b>shifting dullness positive</b> → chronic liver disease (cirrhosis) with portal hypertension and ascites'",
   rubric:"ได้เต็มเมื่อ: เตรียมท่าถูก + stigmata CLD + คลำครบ 4 quadrant ดูหน้าผู้ป่วย + liver (คลำ + span) + spleen (หงาย + ตะแคงขวา/Castell) + shifting dullness + รายงานครบ",
   pts:[H("เตรียม + ดู",25),P("แนะนำตัว ล้างมือ ท่านอนหงายราบ เปิดท้อง ถามจุดเจ็บ","แนะนำ","ล้างมือ","hand","นอนหงาย","supine","เปิด","expose","เจ็บ"),CR(P("Stigmata of chronic liver disease + flapping tremor","spider","palmar","gynecomast","flapping","asterixis","stigmata","jaundice","เหลือง")),P("Contour, dilated veins (ทิศทาง)","contour","distend","bulging","dilated vein","caput","vein"),
    H("คลำ + เคาะ",55),P("Light → deep palpation 4 quadrant ดูหน้าผู้ป่วย","light","deep","quadrant","palpat","คลำ"),CR(P("Liver: คลำจาก RLQ ขึ้น + liver span (MCL)","liver","ตับ","span")),CR(P("Spleen: หงาย + ตะแคงขวา / Castell / Traube","spleen","ม้าม","right lateral","ตะแคง","castell","traube")),P("ไต bimanual / hernia / bruit","kidney","ไต","bimanual","ballot","hernia","bruit"),
    H("Ascites + รายงาน",20),CR(P("Shifting dullness / fluid thrill","shifting","fluid thrill","ascites","น้ำในท้อง")),P("รายงาน: CLD + portal HT (splenomegaly, ascites)","cirrho","portal","splenomegaly","chronic liver")]})),
 interp:"Stigmata CLD + shrunken liver + splenomegaly + ascites + dilated veins → cirrhosis with portal hypertension",
 summary:["ลำดับ: ดู → ฟัง → คลำ → เคาะ (ท้องฟังก่อนคลำ)","Liver: คลำจาก RLQ ขึ้น + span 8–12 cm แนว MCL","Spleen: หงาย + ตะแคงขวา, ไม่ได้ → Castell's/Traube's","Ascites: shifting dullness (≥1,500 mL), fluid thrill (มาก)","ม้าม vs ไต: notch, คลำขอบบนไม่ได้, เคาะทึบ vs ballotable"]}),

/* ===== 11 Advice — hypertension ===== */
Co({orig:"11",topic:"advice",ex:1,kimg:["ok66b_11"],
 title:"Advice — a patient with newly diagnosed essential hypertension",
 seen:"คล้าย MDCU79 RoB ข้อ 14 (home BP measurement advice) · R01 A5 (Hypertension counselling + treatment counselling)",
 opinion:"เฉลยตาม R01 A5 (HT counselling) + แนวทางการรักษาโรคความดันโลหิตสูงในเวชปฏิบัติทั่วไป สมาคมความดันโลหิตสูงแห่งประเทศไทย (ฉบับปรับปรุงล่าสุด) และ 2025 AHA/ACC Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults",
 flag:"⚠ recall '11. ให้คำแนะนำคนไข้HT' → Claude เติมเคสผู้ป่วยวินิจฉัยใหม่เริ่มยา",
 stem:`A 48-year-old man is newly diagnosed with essential hypertension (average home BP 152/96 mmHg). He is overweight, smokes, and likes salty food. The doctor will start amlodipine. Give him advice about his condition and treatment.`,
 gray:"11. ให้คำแนะนำคนไข้HT",
 sp:"Claude แต่ง: ชาย 48 ปี พนักงานบริษัท BMI 27 สูบบุหรี่ 10 มวน/วัน ดื่มเบียร์สุดสัปดาห์ ชอบอาหารรสเค็ม ไม่ออกกำลังกาย · กังวล 'ไม่มีอาการ ต้องกินยาตลอดชีวิตไหม' 'ยาจะทำให้ไตพังไหม' · ไม่มีโรคประจำตัวอื่น",
 parts:S(
  B("1. Advise the patient.",10,{tags:["advice"],key:"R01 A5: อธิบายความดัน (≥140/90 จากการวัดซ้ำ), ส่วนใหญ่ไม่ทราบสาเหตุ ไม่มีอาการ, ไม่คุม → หลอดเลือดแข็ง หัวใจ สมอง ไต · ปรับพฤติกรรม: ลดน้ำหนัก ลดเค็ม (เกลือ <1 ช้อนชา) DASH จำกัดแอลกอฮอล์ ออกกำลังกาย 30 นาที ≥5 วัน/สัปดาห์ เลิกบุหรี่ · ยา: ผลข้างเคียง (DHP CCB บวม) ลืมกินยา วางแผนตั้งครรภ์ · วัดความดันที่บ้าน บันทึกผล",
   ans:"<b>เริ่มต้น</b>: แนะนำตัว สร้างสัมพันธภาพ ถามความเข้าใจและความกังวล (ICE) · <b>อธิบายโรค</b>: ความดันปกติไม่เกิน 120/80; วินิจฉัยเมื่อ ≥140/90 จากการวัดซ้ำด้วยวิธีที่ถูกต้อง (home BP ≥135/85) · ส่วนใหญ่ไม่ทราบสาเหตุ (essential) · <b>มักไม่มีอาการ</b> — วิธีเดียวที่รู้คือวัดความดัน · ไม่ควบคุม → หลอดเลือดแดงแข็ง → <b>หัวใจขาดเลือด/หัวใจล้มเหลว, อัมพาต, ไตวาย, ตามัว</b> · เป็นโรคเรื้อรังต้องดูแลต่อเนื่อง · <b>เป้าหมาย</b>: &lt;130/80 (Thai: 120–130/70–79 ในอายุ 18–65) · <b>ปรับพฤติกรรม</b>: ① <b>ลดเค็ม</b> โซเดียม &lt;2,000–2,300 mg/วัน (เกลือ &lt;1 ช้อนชา, น้ำปลา/ซีอิ๊วจำกัด, เลี่ยงอาหารแปรรูป บะหมี่ซอง ของดอง) ② <b>DASH diet</b> ผักผลไม้ ธัญพืช นมไขมันต่ำ ③ <b>ลดน้ำหนัก</b> (BMI &lt;23, รอบเอว &lt;90 cm) ④ <b>ออกกำลังกายแอโรบิก 30 นาที ≥5 วัน/สัปดาห์</b> (150 นาที/สัปดาห์) ⑤ <b>เลิกบุหรี่</b> (เสนอช่วยเลิก/คลินิก 1600) ⑥ <b>จำกัดแอลกอฮอล์</b> ⑦ นอนพอ จัดการความเครียด · <b>ยา</b>: ต้องใช้ร่วมกับปรับพฤติกรรม อาจต้อง &gt;1 ชนิด กินทุกวันเวลาเดิมแม้ไม่มีอาการ ห้ามหยุดเอง · amlodipine: <b>ผลข้างเคียงขาบวม</b> หน้าแดง ปวดหัว · ลืมกินยา → กินทันทีที่นึกได้ ถ้าใกล้มื้อถัดไปให้ข้าม ไม่เพิ่มขนาด · ไม่ซื้อยาแก้ปวด NSAIDs/ยาชุดเอง · ยาไม่ทำให้ไตพัง — ความดันสูงที่ไม่คุมต่างหากที่ทำลายไต · <b>วัดความดันที่บ้าน</b>: นั่งพัก 5 นาที หลังพิงเท้าวางราบ แขนวางระดับหัวใจ cuff พอดี ไม่ดื่มกาแฟ/สูบบุหรี่ 30 นาทีก่อน วัด 2 ครั้งห่าง 1 นาที เช้า (ก่อนยา) และก่อนนอน 7 วันก่อนนัด บันทึกนำมาด้วย · <b>อาการต้องรีบมา</b>: ปวดศีรษะรุนแรง เจ็บหน้าอก เหนื่อย แขนขาอ่อนแรง พูดไม่ชัด ตามัว · <b>นัดติดตาม</b> 2–4 สัปดาห์ ตรวจคัดกรอง: FBS, lipid, Cr/eGFR, K, UA/urine albumin, EKG · ถามว่ามีคำถามไหม สรุป ให้ผู้ป่วยทวนกลับ (teach-back)",
   rubric:"ได้ = อธิบายโรค/ภาวะแทรกซ้อน + ลดเค็ม + ลดน้ำหนัก + ออกกำลังกาย + เลิกบุหรี่/จำกัดสุรา + ยา (adherence, ผลข้างเคียงบวม, ห้ามหยุดเอง) + วัดความดันที่บ้าน + นัดติดตาม + สื่อสารดี (ICE, teach-back)",
   pts:[H("อธิบายโรค",20),P("ความดันสูง ≥140/90, ส่วนใหญ่ไม่มีอาการ, เป้าหมาย","140","ไม่มีอาการ","asymptom","เป้าหมาย","target","130"),CR(P("ภาวะแทรกซ้อน: หัวใจ สมอง ไต ตา","หัวใจ","heart","stroke","อัมพาต","สมอง","ไต","kidney","ตา")),
    H("ปรับพฤติกรรม",40),CR(P("ลดเค็ม (Na <2 g, เกลือ <1 ช้อนชา)","เค็ม","เกลือ","salt","sodium","โซเดียม")),P("ลดน้ำหนัก + DASH diet","น้ำหนัก","weight","dash","ผัก"),P("ออกกำลังกาย 30 นาที ≥5 วัน/สัปดาห์","ออกกำลัง","exercise","150"),CR(P("เลิกบุหรี่ + จำกัดแอลกอฮอล์","บุหรี่","smok","สุรา","เบียร์","alcohol")),
    H("ยา",25),CR(P("กินยาทุกวัน ห้ามหยุดเอง แม้ไม่มีอาการ","ทุกวัน","สม่ำเสมอ","adher","ห้ามหยุด","ต่อเนื่อง")),P("ผลข้างเคียง amlodipine (บวม) + ลืมกินยา + เลี่ยง NSAIDs","บวม","edema","ผลข้างเคียง","side effect","ลืม","nsaid"),
    H("ติดตาม + สื่อสาร",15),P("วัดความดันที่บ้าน + บันทึก","ที่บ้าน","home","hbpm","บันทึก"),P("นัดติดตาม/อาการต้องรีบมา/teach-back","นัด","follow","อาการ","teach","ทวน","คำถาม")]})),
 interp:"HT ใหม่ + อ้วน สูบบุหรี่ กินเค็ม → education: โรค + ภาวะแทรกซ้อน, lifestyle (เค็ม น้ำหนัก ออกกำลัง บุหรี่ สุรา), ยา (adherence, SE), HBPM, follow-up",
 summary:["HT: ≥140/90 office (home ≥135/85) · มักไม่มีอาการ","Lifestyle: ลดเค็ม, DASH, ลดน้ำหนัก, ออกกำลังกาย 150 นาที/สัปดาห์, เลิกบุหรี่, จำกัดสุรา","ยา: ทุกวัน ห้ามหยุดเอง · CCB บวม · ACEI ไอ · ห้าม ACEI/ARB ในตั้งครรภ์","HBPM: นั่งพัก 5 นาที แขนระดับหัวใจ วัด 2 ครั้ง เช้า-เย็น 7 วัน"]})
);})();

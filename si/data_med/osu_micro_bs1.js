/* Unit round OSCE — SI Med · หัวข้อใหญ่ Microscope (micro) · หัวข้อเล็ก Blood smear (sub "PBS") · ชุดที่ 1/4 (bs001–bs025: RBC — microcytic, thalassemia, macrocytic, marrow failure, membrane)
   ผู้ใช้สั่ง 21–22 พ.ย. 2026: 100 สถานี ทุกข้อมีรูป + มีเคสคลินิก · ถามเซลล์หรือโรคก็ได้ · บางข้อบรรยายทั้งสามเซลล์ บางข้อบอกแค่สิ่งผิดปกติ · มี diagnosis และ treatment บ้าง · ห้ามตรงกับข้อสอบเก่า (เอาแค่รูปแบบ)
   แหล่ง: R03 = Chaicharoen's Atlas of Blood Smears in Common Hematologic Diseases (v.01.2025 — ผู้แต่งระบุว่ารูปสร้างด้วย AI ตามการตีความของผู้แต่ง; แจกฟรีเพื่อการศึกษา)
           R04 = Blood Cell Atlas (Mindray MC-80 — รูปเซลล์จริง) · รูปครอปจากไฟล์ → si/img/ubs_*.jpg (ตัวอักษร A–F บนรูป Claude ใส่เอง)
   รูปแบบเฉลยตาม Key PBS ของศิริราช (osce_ref.js "pbs"): RBC · WBC · Platelet · ลำดับอ้างอิง guideline/ตำรา (T) > lecture (L) > resource (R) > note (N) */
(function(){
const R3="R03 Atlas of Blood Smears in Common Hematologic Diseases (Chaicharoen)",R4="R04 Blood Cell Atlas (Mindray MC-80)";
const U=o=>{const r=o.r===4;const x=Object.assign({topic:"micro",sub:"PBS",opinion:"",file:r?"R04":"R03",page:String(o.pg)},o);x.notes=`📄 ที่มาของรูปและเนื้อหา: ${r?R4:R3} · หน้า PDF ${o.pg}`;delete x.r;delete x.pg;return x;};
const P=(t,...re)=>({t,re});
const G=(label,need,...opts)=>({label,need,opts});
function B(q,marks,o){const pts=[],kw=[];(o.pts||[]).forEach(p=>{if(p.opts){pts.push({label:p.label,any:p.opts.map(x=>x.t),need:p.need});kw.push(p.opts.map(x=>x.re));}else{pts.push(p.t);kw.push(p.re);}});
  const s=Object.assign({q,marks,tags:["micro"]},o);delete s.pts;s.points=pts;s.kw=kw;return s;}
const S=(...subs)=>[{subs}];
QB.push(

U({id:"bs001",num:"1",pg:17,title:"Heavy menstrual bleeding and fatigue — blood smear",img:"ubs_ida",
  stem:`A 38-year-old woman has had heavy menstrual bleeding for 1 year because of uterine fibroids. She feels tired and craves ice. CBC: Hb 8.4 g/dL, MCV 64 fL, MCH 19 pg, RDW 21%, WBC 6,800/µL, platelets 455,000/µL. Her peripheral blood smear is shown.`,
  interp:"บรรยาย PBS ครบสามเซลล์ของ iron deficiency anemia แล้วส่งตรวจยืนยันภาวะขาดเหล็ก",
  summary:["IDA: hypochromic microcytic + anisopoikilocytosis + pencil cell (elongated elliptocyte) · ไม่มี basophilic stippling/polychromasia","RDW สูงช่วยแยกจาก thalassemia trait (RDW ปกติ)","Ferritin < 30 ng/mL ยืนยัน (CDC/BSG) — ระวัง ferritin สูงเท็จเมื่อมีการอักเสบ"],
  parts:S(
   B("1.1 Describe the blood smear (RBC, WBC, platelets).",4,{
     ans:"<b>RBC:</b> hypochromic microcytic RBCs (central pallor &gt; 1/3), anisocytosis 2+, poikilocytosis 2+ with <b>pencil cells (elongated elliptocytes)</b>, few target cells; no polychromasia, no basophilic stippling, no NRBC<br><b>WBC:</b> normal in number and morphology<br><b>Platelet:</b> adequate to increased (reactive thrombocytosis)",
     exp:"ขนาดเม็ดเลือดแดงเทียบกับ nucleus ของ small lymphocyte (≈ 7 µm) ในภาพ RBC ส่วนใหญ่เล็กกว่า → microcytic · pencil cell เกิดจาก membrane cytoskeleton ที่อ่อนแอเมื่อขาดเหล็ก (R03 p.18)",
     rubric:"ได้ = hypochromic microcytic + aniso/poik + pencil cell และบอก WBC/plt · บางส่วน = บอกแค่ hypochromic microcytic",
     pts:[P("Hypochromic microcytic RBC","hypochrom","microcyt"),P("Anisocytosis / poikilocytosis","aniso","poik"),P("Pencil cells (elongated elliptocytes)","pencil","elliptocyt","cigar"),P("WBC normal","wbc.{0,30}normal","normal.{0,20}wbc"),P("Platelets normal or increased (reactive)","plt.{0,30}(normal|increas|adequate)","thrombocytos")]}),
   B("1.2 What is the most likely diagnosis?",2,{
     ans:"<b>Iron deficiency anemia</b> from chronic menstrual blood loss (uterine fibroids)",
     exp:"pica (pagophagia — อยากกินน้ำแข็ง) + RDW สูง + plt สูงแบบ reactive เข้ากับ IDA",
     rubric:"ได้ = iron deficiency anemia",
     pts:[P("Iron deficiency anemia","iron def","\\bida\\b","ขาดเหล็ก")]}),
   B("1.3 What investigations would you send to confirm it?",3,{
     ans:"<b>Serum ferritin</b> (low; &lt; 30 ng/mL) · serum iron ↓, <b>TIBC ↑, transferrin saturation ↓</b> (&lt; 16–20%) · reticulocyte count (low) · (soluble transferrin receptor ↑ if inflammation makes ferritin unreliable)",
     exp:"ferritin เป็น acute phase reactant: ถ้ามีการอักเสบร่วม ferritin อาจปกติเท็จ → ดู TSAT / sTfR (R03 p.19)",
     rubric:"ได้ = ferritin + iron study (iron/TIBC/TSAT)",
     pts:[P("Serum ferritin","ferritin"),P("Iron study: serum iron, TIBC, transferrin saturation","tibc","transferrin sat","tsat","serum iron","iron stud")]})
  )}),

U({id:"bs002",num:"2",pg:17,title:"Elderly man with anemia and positive stool occult blood — blood smear",img:"ubs_ida",
  stem:`A 71-year-old man has had exertional dyspnea for 3 months. He has lost 4 kg. The fecal immunochemical test is positive. Hb 7.9 g/dL, MCV 66 fL, ferritin 6 ng/mL. His peripheral blood smear is shown.`,
  interp:"ให้บอกเฉพาะความผิดปกติใน PBS แล้วต่อด้วยการหาสาเหตุ IDA ในผู้สูงอายุและการให้เหล็ก",
  summary:["IDA ในชายหรือหญิงวัยหมดประจำเดือน = เลือดออกทางเดินอาหารจนกว่าจะพิสูจน์ได้ว่าไม่ใช่ → bidirectional endoscopy","Oral iron วันละครั้งหรือวันเว้นวัน (ดูดซึมดีกว่าวันละหลายครั้งเพราะ hepcidin)","Reticulocyte เพิ่มใน 7–10 วัน, Hb เพิ่ม ~ 1–2 g/dL ใน 2–4 สัปดาห์"],
  parts:S(
   B("2.1 List the abnormal findings in the smear.",3,{
     ans:"<b>Hypochromic microcytic RBCs</b> with anisocytosis and poikilocytosis — <b>pencil cells</b> and a few target cells",
     rubric:"ได้ = hypochromic microcytic + pencil cell",
     pts:[P("Hypochromic microcytic RBC","hypochrom","microcyt"),P("Pencil cells / elliptocytes","pencil","elliptocyt","cigar"),P("Anisopoikilocytosis","aniso","poik")]}),
   B("2.2 What is the most important next investigation?",2,{
     ans:"<b>Bidirectional GI endoscopy: colonoscopy + upper GI endoscopy (EGD)</b> to find the bleeding lesion — colorectal cancer must be excluded",
     exp:"BSG 2021: IDA ในชายทุกอายุ/หญิงหมดประจำเดือน → ส่องทั้งบนและล่าง (± small bowel ถ้ายังไม่พบ), ตรวจ celiac serology",
     rubric:"ได้ = colonoscopy และ EGD · บางส่วน = บอกแค่อย่างเดียว",
     pts:[P("Colonoscopy","colonoscop"),P("Upper GI endoscopy (EGD)","egd","gastroscop","upper (gi )?endoscop","esophagogastroduodenoscop")]}),
   B("2.3 How would you give iron, and how do you know it is working?",3,{
     ans:"<b>Oral ferrous sulfate</b> 200 mg tablet (≈ 65 mg elemental iron) <b>once daily or on alternate days</b>, on an empty stomach ± vitamin C, continue <b>~3 months after Hb normalizes</b> to refill stores · IV iron if intolerant, malabsorption or ongoing loss · Response: <b>reticulocytes rise in 7–10 days</b>, Hb rises ≥ 1–2 g/dL in 2–4 weeks",
     rubric:"ได้ = oral iron + duration/response (reticulocyte/Hb)",
     pts:[P("Oral iron (ferrous sulfate) daily or alternate days","ferrous","oral iron","fes?o4","ธาตุเหล็ก"),P("Reticulocyte rise in ~1 week / Hb rise","reticulocyt","retic"),P("Continue ~3 months after Hb normal to replete stores","3 month","replete","store","3 เดือน")]})
  )}),

U({id:"bs003",num:"3",pg:18,title:"Three red cells from an anemic patient — identify A, B and C",img:"ubs_idacu",
  stem:`A 26-year-old woman with Hb 9.1 g/dL and MCV 68 fL. Three fields from her blood smear are shown; the arrow in each picture points to one red cell (A, B, C).`,
  interp:"ระบุ RBC morphology ทีละตัวและกลไกที่ทำให้เกิดใน IDA",
  summary:["A hypochromic microcyte · B pencil cell · C target cell (codocyte)","Target cell = surface area มากเกินต่อปริมาตร (Hb ↓ หรือ membrane lipid ↑ ในโรคตับ)","Pencil cell เด่นใน IDA, พบน้อยใน thalassemia trait"],
  parts:S(
   B("3.1 Name the red cell marked in A, B and C.",3,{
     ans:"<b>A</b> = hypochromic (microcytic) RBC — central pallor much wider than 1/3 · <b>B</b> = <b>pencil cell</b> (elongated elliptocyte) · <b>C</b> = <b>target cell</b> (codocyte)",
     rubric:"ได้ = ครบ 3 ตัว",
     pts:[P("A hypochromic RBC","hypochrom"),P("B pencil cell","pencil","elliptocyt","cigar"),P("C target cell","target","codocyt")]}),
   B("3.2 Explain how cell B and cell C are formed.",2,{
     ans:"<b>Pencil cell</b>: iron deficiency weakens the membrane cytoskeleton → the cell stays elongated after passing through microvessels · <b>Target cell</b>: Hb content falls relative to membrane → excess membrane surface for the cell volume bulges centrally",
     rubric:"ได้ = อธิบายทั้งสองกลไก",
     pts:[P("Pencil: weak membrane cytoskeleton, mechanical stress","cytoskelet","membrane","mechanic"),P("Target: excess membrane relative to volume / low Hb","excess membrane","surface","volume")]}),
   B("3.3 Give two other conditions in which cell C is common.",2,{
     ans:"Thalassemia / <b>Hb E</b> (homozygous HbE, HbE/β-thal) · <b>Liver disease</b> (obstructive jaundice) · <b>post-splenectomy</b> · Hb C",
     pts:[G("Other causes of target cells (any 2)",2,P("Thalassemia / HbE","thalass","hb ?e"),P("Liver disease","liver","hepat","cholest","jaundice","ตับ"),P("Post-splenectomy / hyposplenism","splen"),P("Hb C","hb ?c\\b"))]})
  )}),

U({id:"bs004",num:"4",pg:20,title:"Premarital screening — small red cells with a normal Hb",img:"ubs_thtrait",
  stem:`A 24-year-old woman comes for premarital screening. She is well. CBC: Hb 11.8 g/dL, MCV 66 fL, MCH 21 pg, RBC 5.9 ×10⁶/µL, RDW 13.5%. Her peripheral blood smear is shown.`,
  interp:"PBS ของ thalassemia trait + คิด Mentzer index + ตรวจคัดกรองคู่สมรส",
  summary:["Thal trait: microcytosis ชัดแต่ Hb ปกติ/ต่ำเล็กน้อย, RBC สูง, RDW ปกติ, smear ผิดปกติน้อย","Mentzer = MCV/RBC < 13 ชวน thalassemia","คัดกรองคู่: OF + DCIP → Hb typing + PCR α-thal 1 (SEA deletion)"],
  parts:S(
   B("4.1 Describe the blood smear (RBC, WBC, platelets).",3,{
     ans:"<b>RBC:</b> hypochromic microcytic, mild anisocytosis/poikilocytosis (1+), a few target cells; no spherocytes, no polychromasia, no NRBC<br><b>WBC:</b> normal<br><b>Platelet:</b> normal",
     pts:[P("Hypochromic microcytic RBC, mild aniso/poik","hypochrom","microcyt"),P("Few target cells","target"),P("WBC and platelets normal","normal")]}),
   B("4.2 Calculate the Mentzer index and interpret it.",2,{
     ans:"Mentzer = MCV ÷ RBC = 66 ÷ 5.9 = <b>11.2 (&lt; 13)</b> → suggests <b>thalassemia trait</b> rather than iron deficiency",
     rubric:"ได้ = คำนวณถูก (~11) + แปลผล thalassemia",
     pts:[P("Mentzer ≈ 11 (< 13)","11\\.?\\d?","< ?13","น้อยกว่า 13"),P("Suggests thalassemia trait","thalass")]}),
   B("4.3 Name the tests you would send to identify her genotype, and why you would also screen her partner.",3,{
     ans:"<b>Hb typing</b> (HPLC / capillary electrophoresis: Hb A2 ↑ ≥ 3.5% in β-thal trait; normal A2 in α-thal trait) + <b>PCR for α-thalassemia 1 (SEA deletion)</b> · (screening: OF test + DCIP) · Partner screening: if both carry α-thal 1 → 25% risk of <b>Hb Bart's hydrops fetalis</b>; if both carry β-thal (or β + HbE) → risk of β-thal major / β-thal/HbE disease",
     exp:"แนวทางกรมอนามัย: คู่เสี่ยง 3 โรครุนแรง — Hb Bart's hydrops, homozygous β-thal, β-thal/HbE",
     pts:[P("Hb typing / Hb A2","hb typing","hplc","electrophores","a2"),P("PCR for α-thal 1 (SEA deletion)","pcr","sea","alpha.?thal.?1","α-thal ?1","dna"),P("Partner screening for severe offspring (Hb Bart's / β-thal major / β/E)","bart","hydrop","major","β ?/ ?e","beta.?thal.{0,10}e")]})
  )}),

U({id:"bs005",num:"5",pg:20,title:"Pregnant woman with microcytosis despite normal iron stores",img:"ubs_thtrait",
  stem:`A 30-year-old woman at 10 weeks of her first pregnancy has Hb 11.2 g/dL, MCV 68 fL, serum ferritin 85 ng/mL. OF test positive, DCIP negative. Her peripheral blood smear is shown.`,
  interp:"แยก thal trait จาก IDA ในหญิงตั้งครรภ์ และวางแผนต่อ (ไม่ต้องให้เหล็กเกิน, ตรวจสามี)",
  summary:["OF+ / DCIP− = α-thal 1 trait หรือ β-thal trait (DCIP+ = HbE)","ferritin ปกติ → ไม่ใช่ IDA ไม่ต้องให้เหล็กขนาดรักษา","ตรวจสามีทันที เพราะต้องรู้ก่อนอายุครรภ์ ~ 18–20 สัปดาห์เพื่อเสนอ prenatal diagnosis"],
  parts:S(
   B("5.1 List the abnormal findings.",2,{
     ans:"Hypochromic microcytic RBCs with mild anisopoikilocytosis and occasional target cells — otherwise a fairly uniform picture (no pencil-cell predominance, no polychromasia)",
     pts:[P("Hypochromic microcytic","hypochrom","microcyt"),P("Mild changes / target cells","target","mild","1\\+")]}),
   B("5.2 What is your diagnosis, and should she receive therapeutic iron?",2,{
     ans:"<b>Thalassemia trait</b> (α-thal 1 trait or β-thal trait — OF+, DCIP−, normal ferritin) · <b>No therapeutic iron</b> — iron stores are normal; give only routine prenatal iron/folic acid supplementation",
     pts:[P("Thalassemia trait","thalass.{0,10}trait","carrier","trait"),P("No therapeutic iron (stores normal)","no.{0,15}iron","not.{0,15}iron","ไม่.{0,10}เหล็ก")]}),
   B("5.3 What is the next step?",3,{
     ans:"Confirm her genotype (<b>Hb typing ± α-thal 1 PCR</b>) and <b>screen her husband now</b> · if the couple is at risk (e.g. both α-thal 1, or β-thal + β/HbE) → genetic counselling and <b>prenatal diagnosis</b> (CVS 10–13 wk, amniocentesis 16–18 wk, cordocentesis, or fetal ultrasound for hydrops)",
     pts:[P("Hb typing / PCR of the woman","hb typing","pcr","hplc"),P("Screen the husband/partner","husband","partner","สามี"),P("Counselling / prenatal diagnosis if at-risk couple","prenatal","counsel","cvs","amnio","cordocent")]})
  )}),

U({id:"bs006",num:"6",pg:21,title:"Mild microcytosis with a striking red cell inclusion",img:"ubs_hbcs",
  stem:`A 28-year-old woman has a routine checkup. Hb 12.0 g/dL, MCV 79 fL, MCH 25 pg. Her blood smear is shown; look at the red cell in the upper-right part of the field.`,
  interp:"เห็น basophilic stippling ใน RBC → คิด Hb Constant Spring และ ddx ของ stippling",
  summary:["Basophilic stippling = RNA/ribosome ตกตะกอน","สาเหตุ: thalassemia (โดยเฉพาะ Hb CS), lead poisoning, P5'N deficiency, MDS, hemolysis","Hb CS: Hb typing พบ CS band เล็ก ~1–2%"],
  parts:S(
   B("6.1 What is the inclusion in that red cell?",2,{
     ans:"<b>Basophilic stippling</b> — fine-to-coarse blue dots throughout the RBC (precipitated ribosomal RNA)",
     pts:[P("Basophilic stippling","basophilic stippl","stippl")]}),
   B("6.2 Give three causes of this finding.",3,{
     ans:"<b>Thalassemia</b> — especially <b>Hb Constant Spring</b> · <b>Lead poisoning</b> · <b>Pyrimidine 5'-nucleotidase deficiency</b> · MDS / sideroblastic anemia · hemolytic anemias · megaloblastic anemia",
     pts:[G("Causes (any 3)",3,P("Thalassemia / Hb CS","thalass","constant spring","hb ?cs"),P("Lead poisoning","lead","ตะกั่ว"),P("P5'N deficiency","5.?nucleotid","p5"),P("MDS / sideroblastic","mds","myelodysplas","sideroblast"),P("Hemolysis","hemoly","haemoly"),P("Megaloblastic","megaloblast"))]}),
   B("6.3 What is the most likely diagnosis in this woman, and which test confirms it?",2,{
     ans:"<b>Hb Constant Spring trait</b> (or α-thal 2/Hb CS) — normal Hb, mild microcytosis, basophilic stippling · confirm by <b>Hb typing</b> (small Hb CS band ~1–2%) ± DNA analysis",
     pts:[P("Hb Constant Spring trait","constant spring","hb ?cs"),P("Hb typing / DNA","hb typing","hplc","electrophores","dna","pcr")]})
  )}),

U({id:"bs007",num:"7",pg:22,title:"Farmer from the northeast with microcytosis — blood smear",img:"ubs_hbe",
  stem:`A 35-year-old man from Ubon Ratchathani is found to have Hb 12.3 g/dL, MCV 64 fL, RBC 6.2 ×10⁶/µL. DCIP test positive. He has no splenomegaly. His blood smear is shown.`,
  interp:"PBS ที่มี target cell เด่นมาก + DCIP+ → homozygous HbE",
  summary:["Homozygous HbE: Hb ปกติ/ต่ำนิดเดียว, MCV ต่ำ, target cells จำนวนมาก, ไม่มีม้ามโต","Hb typing: Hb E (+A2) ~ 85–95%, ไม่มี Hb A","ไม่ต้องรักษา แต่ต้องตรวจคู่ (เสี่ยงลูกเป็น β-thal/HbE)"],
  parts:S(
   B("7.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> hypochromic microcytic, anisocytosis/poikilocytosis 1+, <b>numerous target cells</b>; no polychromasia, no NRBC · <b>WBC:</b> normal · <b>Platelet:</b> normal",
     pts:[P("Hypochromic microcytic","hypochrom","microcyt"),P("Many target cells","target"),P("WBC/platelet normal","normal")]}),
   B("7.2 What is the most likely diagnosis? What would the Hb typing show?",3,{
     ans:"<b>Homozygous Hb E</b> (EE) · Hb typing: <b>Hb E (+A2) ≈ 85–95%</b>, small Hb F, <b>no Hb A</b> (HbE trait would show A with E ~ 25–30%)",
     pts:[P("Homozygous HbE","homozyg.{0,10}e","\\bee\\b","hb ?e{1,2}\\b"),P("Hb typing: HbE ~85–95%, no HbA","8\\d ?%","9\\d ?%","no hb ?a","ไม่มี hb ?a")]}),
   B("7.3 Does he need treatment? What advice would you give?",2,{
     ans:"<b>No specific treatment</b> (asymptomatic, mild) — avoid unnecessary iron · <b>Genetic counselling</b>: screen his partner; if she carries β-thal → risk of <b>β-thal/HbE disease</b> in children",
     pts:[P("No treatment needed","no.{0,10}treat","ไม่ต้อง","none"),P("Partner screening / counselling (β-thal/HbE risk)","partner","counsel","β ?/ ?e","beta","คู่")]})
  )}),

U({id:"bs008",num:"8",pg:23,title:"Fever then sudden pallor and dark urine in a young woman with lifelong mild anemia",img:"ubs_hbh",
  stem:`A 19-year-old woman has had mild anemia since childhood and a palpable spleen 2 cm. After 3 days of fever she becomes very pale with dark urine. Hb 6.4 g/dL (baseline 9), MCV 58 fL, reticulocytes 8%. Her blood smear is shown.`,
  interp:"PBS ของ HbH disease ที่มี hemolytic crisis จากไข้ + ให้การดูแล",
  summary:["HbH (--/-α): microcytic รุนแรง, aniso/poik 3–4+, target, teardrop, schistocyte, polychromasia, NRBC","Hemolytic crisis จากการติดเชื้อ/ยา oxidant: ให้ PRC, ไม่ให้ยาเหล็ก","ยืนยัน: HbH inclusion (BCB) + Hb typing (H และ Bart's band)"],
  parts:S(
   B("8.1 Describe the blood smear.",4,{
     ans:"<b>RBC:</b> hypochromic microcytic, <b>anisocytosis 3+ / poikilocytosis 3+</b>: target cells, <b>teardrop cells</b>, schistocytes, spherocytes; <b>polychromasia</b>; NRBC may be seen · <b>WBC:</b> normal number/morphology · <b>Platelet:</b> normal",
     pts:[P("Hypochromic microcytic, marked aniso/poik","hypochrom","microcyt"),P("Target cells","target"),P("Teardrop / schistocytes / spherocytes","teardrop","dacrocyt","schistocyt","spherocyt"),P("Polychromasia ± NRBC","polychrom","nrbc","nucleated")]}),
   B("8.2 What is the diagnosis?",2,{
     ans:"<b>Hb H disease</b> (α-thalassemia intermedia, --/-α or --/α<sup>CS</sup>α) with <b>acute hemolytic crisis</b> triggered by fever/infection",
     pts:[P("Hb H disease","hb ?h\\b","hbh"),P("Hemolytic crisis triggered by infection","crisis","hemoly","infect","fever")]}),
   B("8.3 How would you confirm it and manage this episode?",3,{
     ans:"Confirm: <b>Hb H inclusion test</b> (brilliant cresyl blue — 'golf ball' cells) + <b>Hb typing</b> (Hb H ± Bart's) · Manage: treat the infection, <b>packed red cell transfusion</b> for symptomatic anemia, folic acid, avoid oxidant drugs, <b>no iron supplement</b>",
     pts:[P("HbH inclusion test / Hb typing","inclusion","golf","cresyl","hb typing","hplc"),P("Transfusion (PRC)","transfus","prc","ให้เลือด"),P("Treat infection / folic acid / avoid oxidant / no iron","folic","oxidant","infect","no iron","ไม่ให้.{0,6}เหล็ก")]})
  )}),

U({id:"bs009",num:"9",pg:26,title:"Supravital stain of red cells — what is shown?",img:"ubs_hbhinc",
  stem:`A blood sample from a 22-year-old man with Hb 9.5 g/dL and MCV 62 fL was incubated with brilliant cresyl blue for 1 hour before the smear was made. The result is shown.`,
  interp:"รู้จัก HbH inclusion (golf ball) และความหมาย/ข้อจำกัดของการตรวจ",
  summary:["Brilliant cresyl blue/new methylene blue ทำให้ HbH (β4) ตกตะกอนเป็นจุดทั่วเซลล์ = golf ball","ไวมากสำหรับ HbH disease, ต่ำสำหรับ α-thal trait","คนละอย่างกับ reticulocyte (reticulum เป็นเส้นร่างแห)"],
  parts:S(
   B("9.1 Describe what is seen in the red cells.",2,{
     ans:"Many evenly distributed small blue-green dots throughout the RBC — <b>'golf ball' appearance</b> = precipitated <b>Hb H (β4) inclusions</b>",
     pts:[P("Golf-ball inclusions / Hb H inclusions","golf","inclusion","hb ?h")]}),
   B("9.2 What is the diagnosis, and how is this test interpreted?",3,{
     ans:"<b>α-thalassemia — Hb H disease</b> (excess β chains form β4 tetramers) · test is <b>highly sensitive for Hb H disease but insensitive for α-thal trait</b> (rare inclusions) · confirm with Hb typing ± α-globin DNA analysis",
     pts:[P("Hb H disease / α-thalassemia","hb ?h","alpha","α"),P("Sensitive for HbH disease, poor for trait","trait","sensitiv"),P("Confirm with Hb typing / DNA","hb typing","hplc","dna","pcr")]}),
   B("9.3 How do these inclusions differ from a reticulocyte stain?",2,{
     ans:"Reticulocytes show a <b>blue reticular (net-like) network</b> of RNA in fewer cells after brief staining; Hb H inclusions are <b>multiple round dots evenly spread</b> after longer incubation (1–2 h)",
     pts:[P("Reticulocyte = reticular/net RNA network","reticul","network","net"),P("HbH = evenly spread dots, longer incubation","dot","even","incubat")]})
  )}),

U({id:"bs010",num:"10",pg:24,title:"Young man with transfusion-dependent anemia since childhood — blood smear",img:"ubs_bthe",
  stem:`An 18-year-old man has needed blood transfusions every 1–2 months since age 3. He has frontal bossing, a flat nasal bridge, and the spleen is 8 cm below the costal margin. Pre-transfusion Hb 6.8 g/dL. His blood smear is shown.`,
  interp:"PBS ของ β-thalassemia/HbE disease + Hb typing + ภาวะแทรกซ้อนหลัก",
  summary:["β-thal/HbE: hypochromic microcytic รุนแรง, poik หลายแบบ, NRBC, target, polychromasia","Hb typing: E + F, Hb A ต่ำ/ไม่มี (β0/βE)","ภาวะแทรกซ้อนหลัก = iron overload (หัวใจ ตับ ต่อมไร้ท่อ) → chelation"],
  parts:S(
   B("10.1 Describe the blood smear.",4,{
     ans:"<b>RBC:</b> markedly hypochromic microcytic, <b>anisocytosis 3–4+, poikilocytosis 3–4+</b> — target cells, teardrop cells, schistocytes, fragmented/bizarre cells; polychromasia; <b>NRBC</b> · <b>WBC:</b> normal (a neutrophil and lymphocyte seen) · <b>Platelet:</b> normal",
     pts:[P("Markedly hypochromic microcytic","hypochrom","microcyt"),P("Marked aniso/poik (target, teardrop, schistocyte)","target","teardrop","schistocyt","poik"),P("NRBC","nrbc","nucleated"),P("Polychromasia","polychrom")]}),
   B("10.2 What is the most likely diagnosis, and what would Hb typing show?",3,{
     ans:"<b>β-thalassemia/Hb E disease</b> (or homozygous β-thal) · Hb typing: <b>Hb E + Hb F</b>, Hb A absent (β⁰/βᴱ) or low (β⁺/βᴱ)",
     pts:[P("β-thal/HbE disease (or β-thal major)","β.{0,6}e","beta.{0,15}e","major"),P("HbE + HbF, no/low HbA","hb ?f","\\bf\\b","no hb ?a","ef")]}),
   B("10.3 Name the most important long-term complication and how it is prevented.",2,{
     ans:"<b>Transfusional iron overload</b> (cardiomyopathy, liver fibrosis, endocrinopathies) → monitor ferritin (± T2* MRI) and start <b>iron chelation</b> (deferasirox / deferiprone / deferoxamine) when ferritin &gt; 1,000 ng/mL or after ~10–20 transfusions",
     pts:[P("Iron overload","iron overload","hemosiderosis","ferritin","เหล็กเกิน"),P("Iron chelation","chelat","deferasirox","deferiprone","deferoxamine","desferal")]})
  )}),

U({id:"bs011",num:"11",pg:24,title:"Thalassemia patient with very high ferritin — treatment questions",img:"ubs_bthe",
  stem:`A 25-year-old woman with β-thalassemia/Hb E disease receives 2 units of packed red cells every 4 weeks. Serum ferritin is 3,400 ng/mL. Cardiac T2* is 15 ms. Her pre-transfusion smear is shown.`,
  interp:"เน้นการรักษา thalassemia ที่ต้องรับเลือดประจำ (TDT) ตามแนวทาง TIF",
  summary:["Pre-transfusion Hb target 9.5–10.5 g/dL ใน TDT (TIF 2021), ใช้ leukoreduced PRC","Chelators: DFO SC/IV, DFP (เฝ้าระวัง agranulocytosis), DFX (ไต/ตับ)","T2* < 20 ms = cardiac iron → ต้อง chelate เข้มข้น/ combination"],
  parts:S(
   B("11.1 List two abnormal RBC findings that tell you this is a thalassemia disease rather than a trait.",2,{
     ans:"<b>Marked</b> anisopoikilocytosis (3–4+) with many target cells, schistocytes and teardrop cells · <b>NRBC</b> and polychromasia (ineffective erythropoiesis/hemolysis) — a trait shows only mild changes",
     pts:[P("Marked aniso/poik","marked","3\\+","4\\+","severe"),P("NRBC / polychromasia","nrbc","nucleated","polychrom")]}),
   B("11.2 What pre-transfusion Hb should you aim for, and what blood product?",2,{
     ans:"Pre-transfusion Hb <b>9.5–10.5 g/dL</b> (higher, 11–12, if heart disease) · <b>leukoreduced packed red cells</b> (ABO/Rh ± extended-phenotype matched)",
     pts:[P("Pre-transfusion Hb 9.5–10.5 g/dL","9\\.5","10\\.5","9-10","10 g"),P("Leukoreduced PRC","leuko","leuco","filter","lprc")]}),
   B("11.3 Name the three iron chelators and one key adverse effect of each.",3,{
     ans:"<b>Deferoxamine</b> (SC/IV infusion) — ototoxicity/retinopathy, local reaction · <b>Deferiprone</b> (oral) — <b>agranulocytosis</b> (weekly CBC), arthralgia · <b>Deferasirox</b> (oral) — <b>renal</b> (creatinine ↑) and hepatic toxicity, GI upset · cardiac T2* 15 ms = moderate cardiac iron → intensify (e.g. DFO + DFP)",
     pts:[P("Deferoxamine","deferoxamine","desferri","desferal","dfo"),P("Deferiprone — agranulocytosis","deferiprone","agranulocyt","neutropen"),P("Deferasirox — renal/hepatic toxicity","deferasirox","renal","kidney","creatinine")]})
  )}),

U({id:"bs012",num:"12",pg:25,title:"Thalassemia after splenectomy — blood smear",img:"ubs_splen",
  stem:`A 30-year-old man with β-thalassemia/Hb E disease had a splenectomy 5 years ago. WBC 18,600/µL (after correction for NRBC), platelets 780,000/µL. His blood smear is shown.`,
  interp:"PBS หลังตัดม้าม + การป้องกัน OPSI",
  summary:["Post-splenectomy: NRBC จำนวนมาก, Howell–Jolly bodies, target cells, thrombocytosis","Vaccines: pneumococcal, Hib, meningococcal (ACWY + B), influenza ทุกปี","ไข้หลังตัดม้าม = emergency → ceftriaxone ทันที"],
  parts:S(
   B("12.1 List the findings that are due to splenectomy.",3,{
     ans:"<b>Many nucleated RBCs</b> · <b>Howell–Jolly bodies</b> (small round dark nuclear remnant in RBCs) · <b>thrombocytosis</b> · plus target cells, Pappenheimer bodies / acanthocytes on a background of marked thalassemic poikilocytosis",
     pts:[P("Many NRBC","nrbc","nucleated"),P("Howell–Jolly bodies","howell","jolly"),P("Thrombocytosis","thrombocytos","platelet.{0,15}(increas|high)")]}),
   B("12.2 Which vaccines must he have received?",2,{
     ans:"<b>Pneumococcal</b> (PCV20, or PCV15/13 followed by PPSV23) · <b>Haemophilus influenzae type b</b> · <b>Meningococcal</b> (MenACWY + MenB) · annual <b>influenza</b>",
     pts:[P("Pneumococcal","pneumococ","pcv","ppsv"),P("Hib","hib","haemophil","hemophil"),P("Meningococcal","meningococ","menacwy","menb")]}),
   B("12.3 He presents with fever 39.5 °C and rigors. What do you do?",2,{
     ans:"Treat as <b>overwhelming post-splenectomy infection</b>: blood cultures then <b>immediate IV ceftriaxone</b> (± vancomycin), urgent resuscitation — do not wait for results",
     pts:[P("OPSI emergency","opsi","overwhelm","sepsis"),P("Immediate IV ceftriaxone (± vancomycin)","ceftriaxone","cefotaxime","vancomycin","antibiotic")]})
  )}),

U({id:"bs013",num:"13",pg:27,title:"Numb feet and a sore tongue after gastric surgery — blood smear",img:"ubs_mega",
  stem:`A 62-year-old woman had a total gastrectomy for gastric cancer 6 years ago. She now has fatigue, a smooth red tongue and numbness of both feet with loss of vibration sense. Hb 7.8 g/dL, MCV 118 fL, WBC 3,600/µL, platelets 112,000/µL, LDH 1,850 U/L. Her blood smear is shown.`,
  interp:"PBS ของ megaloblastic anemia + สาเหตุ B12 deficiency หลังตัดกระเพาะ + การรักษา",
  summary:["Megaloblastic: macro-ovalocytes + hypersegmented neutrophils (≥1 ตัว 6 lobes หรือ >5% มี 5 lobes)","Total gastrectomy → ขาด intrinsic factor → B12 deficiency","รักษา IM cyanocobalamin/hydroxocobalamin ตลอดชีวิต; ให้ B12 ก่อน folate"],
  parts:S(
   B("13.1 Describe the blood smear.",4,{
     ans:"<b>RBC:</b> normochromic <b>macrocytic, macro-ovalocytes</b>, anisocytosis/poikilocytosis 2+ with teardrop cells; no polychromasia · <b>WBC:</b> <b>hypersegmented neutrophil</b> (≥ 6 lobes) · <b>Platelet:</b> adequate to decreased",
     pts:[P("Macrocytic / macro-ovalocytes","macro","oval"),P("Hypersegmented neutrophil","hypersegment","6 lobe","six lobe","right shift"),P("Aniso/poik (teardrop)","aniso","poik","teardrop"),P("Platelet normal/decreased","plt","platelet")]}),
   B("13.2 What is the diagnosis and its cause?",2,{
     ans:"<b>Megaloblastic anemia due to vitamin B12 deficiency</b> — loss of intrinsic factor after <b>total gastrectomy</b> (with subacute combined degeneration of the cord)",
     pts:[P("Megaloblastic anemia","megaloblast"),P("Vitamin B12 deficiency from gastrectomy (no intrinsic factor)","b12","cobalamin","intrinsic","gastrectom")]}),
   B("13.3 How would you treat her?",3,{
     ans:"<b>IM vitamin B12</b> (cyanocobalamin or hydroxocobalamin 1,000 µg) daily/alternate days for 1–2 weeks, then weekly, then <b>every 1–3 months for life</b> · check/replace folate but <b>never give folate alone</b> (may worsen neurological damage) · watch potassium in the first days · expect reticulocytosis in ~ 5–7 days",
     pts:[P("IM B12 replacement","b12","cobalamin","im"),P("Lifelong","lifelong","for life","ตลอดชีวิต"),P("Do not give folate alone / potassium monitoring","folate","folic","potassium","hypokal")]})
  )}),

U({id:"bs014",num:"14",pg:28,title:"Two cells from a patient with MCV 121 fL — identify A and B",img:"ubs_megacu",
  stem:`A 54-year-old man with chronic alcohol use has pancytopenia and MCV 121 fL. Two fields of his smear are shown (A and B).`,
  interp:"ระบุ macro-ovalocyte และ hypersegmented neutrophil + เกณฑ์และกลไก",
  summary:["Hypersegmentation: ≥1 neutrophil 6 lobes หรือ >5% neutrophils 5 lobes","กลไก: DNA synthesis บกพร่อง → nuclear–cytoplasmic asynchrony","Round macrocytes (alcohol, liver, reticulocytosis, hypothyroid) ≠ oval macrocytes"],
  parts:S(
   B("14.1 Identify the main abnormal cell in A and in B.",2,{
     ans:"<b>A</b> = <b>macro-ovalocyte</b> (large, oval, fully hemoglobinized RBC) · <b>B</b> = <b>hypersegmented neutrophil</b>",
     pts:[P("A macro-ovalocyte","macro.?oval","oval macro"),P("B hypersegmented neutrophil","hypersegment")]}),
   B("14.2 Give the criteria for hypersegmentation.",2,{
     ans:"<b>Any neutrophil with ≥ 6 lobes</b>, or <b>&gt; 5% of neutrophils with 5 lobes</b>",
     pts:[P("≥6 lobes in one neutrophil","6","six"),P(">5% with 5 lobes","5 ?%","5 lobe","five")]}),
   B("14.3 Explain the mechanism and name two causes besides B12/folate deficiency.",3,{
     ans:"Impaired <b>DNA synthesis</b> → nuclear maturation lags behind cytoplasm (<b>nuclear–cytoplasmic asynchrony</b>), extra divisions skipped → large cells and over-lobulated nuclei · other causes: drugs — <b>methotrexate, hydroxyurea</b>, azathioprine, zidovudine, trimethoprim; <b>MDS</b>; inherited (orotic aciduria)",
     pts:[P("Impaired DNA synthesis / N:C asynchrony","dna","asynchron"),G("Other causes (any 2)",2,P("Methotrexate","methotrexate","mtx"),P("Hydroxyurea","hydroxyurea"),P("Azathioprine / zidovudine / other antimetabolite","azathioprine","zidovudine","azt","antimetabol","trimethoprim"),P("MDS","mds","myelodysplas"))]})
  )}),

U({id:"bs015",num:"15",pg:27,title:"Pancytopenia in a heavy drinker — blood smear",img:"ubs_mega",
  stem:`A 47-year-old man drinks 1 bottle of rice whisky daily and eats poorly. He has no neurological signs. Hb 8.2 g/dL, MCV 112 fL, WBC 3,200/µL, platelets 95,000/µL. Serum B12 410 pg/mL, serum folate 1.4 ng/mL. His blood smear is shown.`,
  interp:"บอกเฉพาะความผิดปกติ + วินิจฉัย folate deficiency + หลักการให้ folic acid",
  summary:["Folate stores ~ 3–4 เดือน → ขาดเร็วในคนดื่มสุราที่ขาดอาหาร","แยก B12 vs folate ด้วยระดับในเลือด ± MMA/homocysteine","Folic acid 5 mg/d 4 เดือน — ต้องตัด B12 deficiency ก่อน"],
  parts:S(
   B("15.1 List the abnormal findings.",3,{
     ans:"<b>Oval macrocytes (macro-ovalocytes)</b> with anisopoikilocytosis and teardrop cells · <b>hypersegmented neutrophil</b> · platelets reduced",
     pts:[P("Macro-ovalocytes","macro","oval"),P("Hypersegmented neutrophil","hypersegment"),P("Thrombocytopenia","thrombocytopen","platelet.{0,15}(low|decreas)","plt.{0,10}(low|decreas)")]}),
   B("15.2 What is the diagnosis?",2,{
     ans:"<b>Megaloblastic anemia due to folate deficiency</b> (poor intake + alcohol)",
     pts:[P("Megaloblastic anemia","megaloblast"),P("Folate deficiency","folate","folic")]}),
   B("15.3 How do you treat, and what must you check first?",3,{
     ans:"<b>Folic acid 5 mg orally daily for ~4 months</b> (longer if cause persists) + stop alcohol, nutrition, thiamine · first <b>exclude/treat B12 deficiency</b> — folate alone can correct the anemia but let neurological damage progress",
     pts:[P("Folic acid 5 mg/day","folic","folate"),P("Exclude B12 deficiency first","b12","cobalamin"),P("Alcohol cessation / thiamine / nutrition","alcohol","thiamine","nutrition","สุรา")]})
  )}),

U({id:"bs016",num:"16",pg:29,title:"Bruising and fatigue in a university student — blood smear",img:"ubs_aa",
  stem:`A 22-year-old man has easy bruising and fatigue for 1 month. No fever, no lymphadenopathy, no hepatosplenomegaly. Hb 6.1 g/dL, MCV 98 fL, WBC 1,500/µL (neutrophils 400/µL), platelets 8,000/µL, reticulocytes 0.2%. His blood smear is shown.`,
  interp:"PBS ของ aplastic anemia + ส่งตรวจ + severity และแนวทางรักษา",
  summary:["AA: NCNC/round macrocyte, ไม่มี polychromasia/NRBC/blast/dysplasia, pancytopenia, relative lymphocytosis","Severe AA (Camitta): BM cellularity < 25% + 2 ใน 3: ANC < 500, plt < 20k, retic < 60k/µL · very severe ANC < 200","อายุน้อย + มี HLA-matched sibling → HSCT; ไม่งั้น hATG + cyclosporine + eltrombopag"],
  parts:S(
   B("16.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> normochromic normocytic (may be mildly macrocytic, round not oval), no polychromasia, no NRBC, no abnormal forms · <b>WBC:</b> decreased; few neutrophils, <b>relative lymphocytosis</b>; no blasts, no dysplasia · <b>Platelet:</b> markedly decreased",
     pts:[P("RBC NCNC, no polychromasia/NRBC","normochrom","ncnc","no polychrom"),P("WBC decreased, relative lymphocytosis, no blasts","leukopen","lymphocyt","no blast","decreas"),P("Platelets markedly decreased","thrombocytopen","platelet.{0,20}(decreas|low|absent)","plt.{0,10}(decreas|low)")]}),
   B("16.2 What is the most likely diagnosis and how severe is it?",2,{
     ans:"<b>Aplastic anemia</b> — <b>severe</b> (ANC &lt; 500, plt &lt; 20,000, absolute retic ≈ 4,000/µL &lt; 60,000), pending marrow cellularity &lt; 25%",
     pts:[P("Aplastic anemia","aplastic"),P("Severe (Camitta criteria)","severe","saa","camitta")]}),
   B("16.3 Name the key investigations and the definitive treatment for him.",4,{
     ans:"<b>Bone marrow aspiration + trephine biopsy</b> (hypocellular, no infiltration/fibrosis) · <b>PNH flow cytometry</b> (FLAER) · B12/folate, viral studies (HBV, HCV, HIV, EBV, parvovirus), LFT · chromosomal breakage test / telomere length if inherited marrow failure suspected · <b>HLA typing</b> of patient and siblings → age &lt; 40 with matched sibling: <b>allogeneic HSCT</b>; otherwise <b>horse ATG + cyclosporine (+ eltrombopag)</b> · supportive: irradiated leukoreduced products",
     pts:[P("Bone marrow biopsy","bone marrow","biops","trephine"),P("PNH flow cytometry","pnh","flaer","cd55","cd59"),P("HLA typing / HSCT","hla","hsct","transplant","stem cell"),P("ATG + cyclosporine (± eltrombopag)","atg","antithymocyte","cyclosporin","eltrombopag")]})
  )}),

U({id:"bs017",num:"17",pg:31,title:"Lifelong jaundice, splenomegaly and a family history — blood smear",img:"ubs_hs",
  stem:`An 18-year-old woman has had intermittent jaundice since childhood. Her mother had a splenectomy. The spleen is 3 cm below the costal margin. Hb 9.4 g/dL, MCV 84 fL, MCHC 37.8 g/dL, reticulocytes 9%, indirect bilirubin 3.2 mg/dL, DAT negative. Her blood smear is shown.`,
  interp:"PBS ของ hereditary spherocytosis + ตรวจยืนยัน + การรักษา",
  summary:["HS: spherocyte จำนวนมาก ขนาดค่อนข้างเท่ากัน, MCHC > 36, DAT ลบ","ยืนยัน: EMA binding test (flow) ± incubated osmotic fragility","รักษา: folic acid; splenectomy ใน moderate–severe (อายุ ≥ 6 ปี), cholecystectomy ถ้ามีนิ่ว"],
  parts:S(
   B("17.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> many <b>spherocytes</b> (small, dense, round, no central pallor) of fairly <b>uniform size</b>, polychromasia (large bluish cells) · <b>WBC:</b> normal · <b>Platelet:</b> normal",
     pts:[P("Many spherocytes","spherocyt"),P("Polychromasia","polychrom"),P("WBC/platelets normal","normal")]}),
   B("17.2 What is the diagnosis? Give two clues besides the smear.",2,{
     ans:"<b>Hereditary spherocytosis</b> — <b>MCHC &gt; 36 g/dL</b>, <b>negative DAT</b>, positive family history (autosomal dominant), lifelong hemolysis with splenomegaly",
     pts:[P("Hereditary spherocytosis","hereditary sph","\\bhs\\b"),P("MCHC >36 / DAT negative / family history","mchc","dat","coomb","family")]}),
   B("17.3 Which test confirms it, and how is she managed?",3,{
     ans:"Confirm: <b>EMA (eosin-5'-maleimide) binding test</b> by flow cytometry (or incubated osmotic fragility) · Manage: <b>folic acid</b>, monitor for gallstones and aplastic crisis; <b>splenectomy</b> for moderate–severe disease (after age 6, with vaccinations) ± cholecystectomy if gallstones",
     pts:[P("EMA binding test / osmotic fragility","ema","eosin","osmotic"),P("Folic acid","folic","folate"),P("Splenectomy (with vaccination) for moderate-severe","splenectom")]})
  )}),

U({id:"bs018",num:"18",pg:31,title:"Known hereditary spherocytosis — sudden severe anemia after a viral illness",img:"ubs_hs",
  stem:`A 20-year-old woman with known hereditary spherocytosis (usual Hb 10 g/dL) had fever and a 'slapped cheek' rash in her younger brother last week. She now has severe fatigue. Hb 4.9 g/dL, reticulocytes 0.1%. Her smear is shown.`,
  interp:"ภาวะแทรกซ้อน aplastic crisis ใน HS จาก parvovirus B19",
  summary:["Parvovirus B19 ติด erythroid progenitor (P antigen) → หยุดสร้าง RBC 1–2 สัปดาห์","ในโรค hemolysis เรื้อรัง → Hb ตกเร็วมาก, retic ≈ 0","รักษา: transfusion; ตรวจ B19 IgM/PCR; ส่วนใหญ่หายเอง"],
  parts:S(
   B("18.1 What is the main RBC abnormality?",1,{
     ans:"<b>Spherocytes</b> (many, uniform, without central pallor)",
     pts:[P("Spherocytes","spherocyt")]}),
   B("18.2 What complication has occurred, and what is the cause?",3,{
     ans:"<b>Aplastic (erythroid) crisis</b> — reticulocytopenia with an acute Hb fall, caused by <b>parvovirus B19</b> infecting erythroid precursors",
     pts:[P("Aplastic crisis","aplastic","red cell aplasia","pure red"),P("Parvovirus B19","parvo","b19")]}),
   B("18.3 How would you confirm and treat it? Name one other complication of HS.",3,{
     ans:"Confirm: <b>parvovirus B19 IgM / PCR</b> · Treat: <b>red cell transfusion</b> (self-limited in 1–2 weeks; IVIG if immunocompromised) · other complications: <b>pigment gallstones</b>, hemolytic crisis, megaloblastic crisis (folate), splenic sequestration",
     pts:[P("B19 IgM / PCR","igm","pcr"),P("Transfusion","transfus","prc"),P("Other complication: gallstones / hemolytic / megaloblastic crisis","gallstone","cholelith","นิ่ว","hemolytic crisis","megaloblastic")]})
  )}),

U({id:"bs019",num:"19",pg:32,title:"Abnormal red cell shape found incidentally — blood smear",img:"ubs_he",
  stem:`A 30-year-old man has a health check before a new job. He is well with no splenomegaly. Hb 13.6 g/dL, MCV 88 fL, reticulocytes 2.5%. The laboratory reports 'abnormal RBC morphology'. His blood smear is shown.`,
  interp:"ระบุ elliptocyte เด่น → hereditary elliptocytosis และแยกจาก pencil cell/artifact",
  summary:["HE: elliptocyte > 25% ของ RBC, normochromic, กระจายทิศทางสุ่ม","Artifact: elliptocyte เรียงขนานไปทางเดียวกันในบริเวณบางของสเมียร์","ส่วนใหญ่ไม่มีอาการ ไม่ต้องรักษา"],
  parts:S(
   B("19.1 Describe the red cells.",2,{
     ans:"Normochromic RBCs, most of them (&gt; 25%) are <b>elliptocytes/ovalocytes</b> (elongated cigar- or egg-shaped), orientated randomly; occasional polychromatic cell · WBC and platelets normal",
     pts:[P("Elliptocytes / ovalocytes predominate","elliptocyt","ovalocyt","oval","ellip"),P("Normochromic","normochrom")]}),
   B("19.2 What is the diagnosis, and what is the molecular defect?",2,{
     ans:"<b>Hereditary elliptocytosis</b> — defect in <b>horizontal</b> membrane-skeleton interactions: <b>α/β-spectrin</b> (self-association), protein 4.1, glycophorin C",
     pts:[P("Hereditary elliptocytosis","hereditary ellip","\\bhe\\b"),P("Spectrin / protein 4.1 (horizontal defect)","spectrin","4\\.1","horizontal","glycophorin")]}),
   B("19.3 How do you tell these cells from (a) pencil cells of iron deficiency and (b) a smear artifact?",3,{
     ans:"(a) <b>Pencil cells</b> are <b>hypochromic microcytic</b> with other IDA features; HE cells are normochromic normocytic · (b) <b>Artifactual elliptocytes are aligned parallel</b> in one direction (thin/poorly dried area); true HE cells are <b>randomly orientated</b> throughout the smear",
     pts:[P("Pencil cells are hypochromic microcytic","hypochrom","microcyt"),P("Artifact elliptocytes align parallel; true HE random","parallel","same direction","random","orient")]})
  )}),

U({id:"bs020",num:"20",pg:33,title:"Southern Thai man with oval red cells — blood smear",img:"ubs_sao",
  stem:`A 26-year-old man from Narathiwat has a normal Hb of 14.1 g/dL. He has never had hemolysis. His blood smear is shown.`,
  interp:"รู้จัก stomatocytic ovalocyte/theta cell ของ Southeast Asian ovalocytosis",
  summary:["SAO: SLC4A1 (band 3) 27-bp deletion, heterozygous เท่านั้น (homozygous lethal)","Stomatocytic macro-ovalocytes บางตัวมีสันกั้น 1–2 สัน (theta / knizocyte)","ป้องกัน cerebral malaria; มักไม่มี hemolysis ในผู้ใหญ่"],
  parts:S(
   B("20.1 Describe the abnormal red cells.",2,{
     ans:"Broad oval/egg-shaped (macro-)<b>ovalocytes</b> with a <b>slit-like (stomatocytic) central pallor</b>, some with a transverse bar dividing the pallor into two slits ('<b>theta cells</b>', knizocytes)",
     pts:[P("Stomatocytic ovalocytes","stomatocyt","ovalocyt","oval"),P("Theta cells / transverse bar / double slit","theta","knizocyt","bar","slit")]}),
   B("20.2 What is the diagnosis and its genetic basis?",2,{
     ans:"<b>Southeast Asian ovalocytosis</b> — heterozygous <b>27-bp deletion in SLC4A1 (band 3)</b> → rigid membrane; homozygosity is lethal",
     pts:[P("Southeast Asian ovalocytosis","southeast asian","\\bsao\\b","ovalocytosis"),P("Band 3 / SLC4A1 27-bp deletion","band ?3","slc4a1","27")]}),
   B("20.3 Name one clinical advantage associated with this condition.",1,{
     ans:"Protection against <b>severe (cerebral) malaria</b> — rigid membrane resists invasion by <i>P. falciparum</i> / <i>P. vivax</i>",
     pts:[P("Malaria protection","malaria")]})
  )}),

U({id:"bs021",num:"21",pg:30,title:"Three red cell membrane disorders — identify A, B and C",img:"ubs_memb",
  stem:`Three blood smears from three different patients with a red cell membrane disorder are shown (A, B, C).`,
  interp:"แยก spherocyte / elliptocyte / stomatocytic ovalocyte และ vertical vs horizontal defect",
  summary:["Vertical defect (ankyrin, band 3, β-spectrin, 4.2) → membrane หลุด → spherocyte (HS)","Horizontal defect (spectrin self-association, 4.1) → elliptocyte (HE)","Band 3 27-bp deletion → stomatocytic ovalocyte (SAO)"],
  parts:S(
   B("21.1 Name the main abnormal red cell in A, B and C.",3,{
     ans:"<b>A</b> = <b>spherocytes</b> · <b>B</b> = <b>elliptocytes</b> · <b>C</b> = <b>stomatocytic ovalocytes</b> (theta cells)",
     pts:[P("A spherocytes","spherocyt"),P("B elliptocytes","elliptocyt","ellip"),P("C stomatocytic ovalocytes","stomatocyt","ovalocyt","theta")]}),
   B("21.2 Give the diagnosis for each.",3,{
     ans:"<b>A</b> = hereditary spherocytosis · <b>B</b> = hereditary elliptocytosis · <b>C</b> = Southeast Asian ovalocytosis",
     pts:[P("A HS","spherocytosis","\\bhs\\b"),P("B HE","elliptocytosis","\\bhe\\b"),P("C SAO","ovalocytosis","\\bsao\\b","southeast")]}),
   B("21.3 Explain the difference between a 'vertical' and a 'horizontal' membrane defect.",2,{
     ans:"<b>Vertical</b> = defective links between the lipid bilayer and the skeleton (<b>ankyrin, band 3, β-spectrin, protein 4.2</b>) → membrane vesiculates, surface area lost → spherocyte · <b>Horizontal</b> = defective links within the skeleton (<b>spectrin dimer–dimer, protein 4.1</b>) → mechanically unstable, permanently deformed → elliptocyte",
     pts:[P("Vertical: bilayer–skeleton (ankyrin/band 3) → spherocyte","ankyrin","band ?3","bilayer","vesicul"),P("Horizontal: within skeleton (spectrin/4.1) → elliptocyte","spectrin","4\\.1","within")]})
  )}),

U({id:"bs022",num:"22",pg:34,title:"Woman with lupus and rapidly worsening pallor — blood smear",img:"ubs_waiha",
  stem:`A 35-year-old woman with systemic lupus erythematosus has had progressive fatigue and yellow eyes for 1 week. Hb 6.6 g/dL, MCV 102 fL, reticulocytes 14%, LDH 980 U/L, indirect bilirubin 3.8 mg/dL, haptoglobin undetectable. Her blood smear is shown.`,
  interp:"PBS ของ warm AIHA + ยืนยันด้วย DAT + การรักษา",
  summary:["WAIHA: microspherocytes (ขนาดหลากหลาย), polychromasia, NRBC","DAT IgG (± C3) บวก — secondary ได้จาก SLE, CLL, lymphoma, ยา","Prednisolone 1 mg/kg/d + folic acid ± rituximab; ให้ thromboprophylaxis"],
  parts:S(
   B("22.1 Describe the blood smear.",4,{
     ans:"<b>RBC:</b> normochromic, <b>microspherocytes</b> (small dense RBCs without central pallor, variable size), <b>polychromasia</b> (large blue-gray cells — explains the high MCV), <b>NRBC</b>; no agglutination · <b>WBC:</b> normal · <b>Platelet:</b> normal",
     pts:[P("Microspherocytes / spherocytes","spherocyt"),P("Polychromasia","polychrom"),P("NRBC","nrbc","nucleated"),P("WBC/platelets normal","normal")]}),
   B("22.2 What is the diagnosis and which test confirms it?",3,{
     ans:"<b>Warm autoimmune hemolytic anemia secondary to SLE</b> · confirm with <b>direct antiglobulin test (DAT)</b> — positive for <b>IgG</b> (± C3d)",
     pts:[P("Warm AIHA","warm","aiha","autoimmune hem"),P("Secondary to SLE","sle","lupus"),P("DAT / direct Coombs (IgG)","dat","coomb","antiglobulin")]}),
   B("22.3 Outline the initial treatment.",3,{
     ans:"<b>Prednisolone 1 mg/kg/day</b> (taper over months after response) · <b>folic acid</b> · <b>transfuse</b> if life-threatening anemia (least-incompatible units, do not withhold) · thromboprophylaxis · second line: <b>rituximab</b>; treat SLE",
     pts:[P("Corticosteroid (prednisolone 1 mg/kg)","prednis","steroid","methylpred"),P("Folic acid","folic","folate"),P("Rituximab second line / transfusion if needed","rituximab","transfus")]})
  )}),

U({id:"bs023",num:"23",pg:34,title:"Anemia, jaundice and petechiae together — blood smear",img:"ubs_waiha",
  stem:`A 45-year-old woman has 2 weeks of fatigue, mild jaundice and petechiae on both legs. Hb 7.1 g/dL, reticulocytes 11%, WBC 6,200/µL, platelets 14,000/µL. PT and aPTT are normal. Her blood smear is shown.`,
  interp:"spherocytic hemolysis + thrombocytopenia ที่ PT/aPTT ปกติ → Evans syndrome",
  summary:["Evans = AIHA + ITP (± AIN)","ต้องแยก MAHA (TTP/DIC) — ดู schistocyte และ coagulation","หาสาเหตุ secondary: SLE, CLL/lymphoma, CVID, ALPS"],
  parts:S(
   B("23.1 List the abnormal findings in the smear.",3,{
     ans:"<b>Microspherocytes</b> · <b>polychromasia</b> · <b>NRBC</b> · no schistocytes · platelets <b>decreased</b> (few seen)",
     pts:[P("Microspherocytes","spherocyt"),P("Polychromasia / NRBC","polychrom","nrbc","nucleated"),P("No schistocytes","no schisto","ไม่มี schisto","without schisto")]}),
   B("23.2 What is the most likely diagnosis?",2,{
     ans:"<b>Evans syndrome</b> — warm AIHA + immune thrombocytopenia",
     pts:[P("Evans syndrome","evans"),P("AIHA + ITP","aiha","itp","autoimmune")]}),
   B("23.3 Which tests would you send to confirm it and to look for an underlying cause?",3,{
     ans:"<b>DAT</b> (IgG ± C3) · hemolysis tests (LDH, haptoglobin, bilirubin) · look for secondary causes: <b>ANA/anti-dsDNA (SLE)</b>, <b>flow cytometry / CT for CLL–lymphoma</b>, immunoglobulin levels (CVID), HIV/HBV/HCV",
     pts:[P("DAT","dat","coomb","antiglobulin"),P("ANA / SLE work-up","ana","dsdna","sle","lupus"),P("Lymphoproliferative work-up (flow / CT) or viral serology","flow","lymphoma","cll","hiv","hcv","immunoglobulin")]})
  )}),

U({id:"bs024",num:"24",pg:35,title:"Blue fingertips in the cold and a strange CBC — blood smear",img:"ubs_cad",
  stem:`A 64-year-old man has painful bluish fingers and ears in the air-conditioned office and dark urine in the morning. CBC from the analyzer: Hb 8.9 g/dL, RBC 1.6 ×10⁶/µL, MCV 128 fL, MCHC 43 g/dL. His blood smear (made at room temperature) is shown.`,
  interp:"RBC agglutination + CBC ผิดเพี้ยน → cold agglutinin disease",
  summary:["Agglutination = กลุ่มก้อน 3 มิติไม่เป็นระเบียบ (ต่างจาก rouleaux ที่เรียงเป็นตั้ง)","CAD: IgM จับที่อุณหภูมิต่ำ → DAT C3d+, MCV/MCHC สูงเท็จ, RBC ต่ำเท็จ → อุ่นตัวอย่าง 37 °C","รักษา: หลีกเลี่ยงความเย็น, ให้เลือดผ่าน warmer, rituximab ± bendamustine, sutimlimab; steroid ไม่ได้ผล"],
  parts:S(
   B("24.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> <b>RBC agglutination</b> — irregular 3-dimensional clumps (not linear stacks), few spherocytes, polychromasia · <b>WBC:</b> normal · <b>Platelet:</b> normal",
     pts:[P("RBC agglutination (irregular clumps)","agglutin","clump"),P("Not rouleaux","not rouleaux","ไม่ใช่ rouleaux","irregular","3"),P("WBC/platelets normal","normal")]}),
   B("24.2 What is the diagnosis? Explain the abnormal MCV and MCHC.",3,{
     ans:"<b>Cold agglutinin disease</b> (cold-type AIHA, IgM) · clumps of RBCs are counted as single large cells → <b>falsely high MCV and MCHC, falsely low RBC count</b>; warm the sample to 37 °C and rerun",
     pts:[P("Cold agglutinin disease","cold agglutin","cold","\\bcad\\b"),P("Clumps counted as one cell → false MCV/MCHC; warm to 37 °C","clump","37","warm","false","spurious")]}),
   B("24.3 Give the confirmatory tests and the treatment.",3,{
     ans:"Tests: <b>DAT positive for C3d</b> (IgG negative), <b>cold agglutinin titre</b> (≥ 64 at 4 °C); look for B-cell lymphoproliferative disorder (flow cytometry, SPEP/IFE) · Treatment: <b>avoid cold</b>, warm the patient and use a <b>blood warmer</b> for transfusion; <b>rituximab</b> (± bendamustine) for symptomatic disease, sutimlimab (anti-C1s); <b>steroids and splenectomy do not work</b>",
     pts:[P("DAT C3d / cold agglutinin titre","c3","titre","titer","dat"),P("Avoid cold / blood warmer","avoid cold","warm","หลีกเลี่ยงความเย็น"),P("Rituximab (steroids ineffective)","rituximab","sutimlimab","bendamustine")]})
  )}),

U({id:"bs025",num:"25",pg:37,title:"Dark urine after a new medicine — blood smear",img:"ubs_g6pd",
  stem:`A 20-year-old Thai conscript was treated for <i>P. vivax</i> malaria with chloroquine and primaquine 15 mg/day. On day 3 he has dark-brown urine, jaundice and back pain. Hb 7.4 g/dL (day 0: 13.5), reticulocytes 6%. His blood smear is shown.`,
  interp:"PBS ของ G6PD deficiency กับ oxidative hemolysis จาก primaquine + การตรวจ G6PD ที่ถูกเวลา",
  summary:["Oxidative hemolysis: Hb leakage, blister, bite (keratocyte), ghost cells, Heinz bodies (supravital)","G6PD assay ช่วง hemolysis อาจปกติเท็จ (retic มี G6PD สูง) → ตรวจซ้ำ 2–3 เดือน หรือใช้ quantitative","Vivax + G6PD deficient: primaquine 0.75 mg/kg สัปดาห์ละครั้ง × 8 สัปดาห์ ภายใต้การดูแล (WHO)"],
  parts:S(
   B("25.1 Describe the blood smear.",4,{
     ans:"<b>RBC:</b> normochromic, aniso/poikilocytosis, <b>bite cells</b> (keratocytes), <b>blister cells</b>, <b>Hb leakage/contracted cells</b>, <b>ghost cells</b>, spherocytes, polychromasia · <b>WBC:</b> normal · <b>Platelet:</b> normal",
     pts:[P("Bite cells","bite","keratocyt","degmacyt"),P("Blister cells","blister"),P("Ghost cells / Hb leakage / contracted cells","ghost","leakage","contracted","eccentrocyt"),P("Polychromasia","polychrom")]}),
   B("25.2 What is the diagnosis?",2,{
     ans:"<b>Acute intravascular hemolysis from G6PD deficiency</b> triggered by <b>primaquine</b> (oxidant drug)",
     pts:[P("G6PD deficiency","g6pd"),P("Primaquine (oxidant drug) trigger","primaquine","oxidant","drug")]}),
   B("25.3 When and how should G6PD activity be tested, and how should primaquine have been given?",3,{
     ans:"During acute hemolysis the assay may be <b>falsely normal</b> (old deficient cells destroyed, young cells/reticulocytes have more enzyme) → repeat <b>2–3 months later</b> or use a quantitative test · primaquine should be given only after a G6PD test; if deficient: <b>0.75 mg/kg once weekly for 8 weeks</b> under supervision · now: stop primaquine, hydrate, transfuse if needed, watch renal function",
     pts:[P("False-normal during hemolysis → retest 2–3 months / quantitative","false","2.?3 month","retest","quantitat","repeat"),P("Test G6PD before primaquine","before","screen"),P("Weekly 0.75 mg/kg × 8 weeks if deficient","0\\.75","weekly","8 week"),P("Stop drug / hydration / transfusion","stop","hydrat","transfus")]})
  )})
);
})();

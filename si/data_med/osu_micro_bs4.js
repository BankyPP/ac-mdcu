/* Unit round OSCE — SI Med · Microscope · Blood smear (sub "PBS") · ชุดที่ 4/4 (bs076–bs100: platelets/megakaryocytes, NRBC, smudge & artefacts, clinical variations and side-by-side comparisons)
   แหล่ง R03 Chaicharoen / R04 Mindray (ดูหัวไฟล์ osu_micro_bs1.js) · สถานีที่มี img เป็น array = รูปที่ 1, รูปที่ 2 ตามลำดับ */
(function(){
const R3="R03 Atlas of Blood Smears in Common Hematologic Diseases (Chaicharoen)",R4="R04 Blood Cell Atlas (Mindray MC-80)";
const U=o=>{const r=o.r===4;const x=Object.assign({topic:"micro",sub:"PBS",opinion:"",file:r?"R04":"R03",page:String(o.pg)},o);x.notes=`📄 ที่มาของรูปและเนื้อหา: ${r?R4:R3} · หน้า PDF ${o.pg}`;delete x.r;delete x.pg;return x;};
const P=(t,...re)=>({t,re});
const G=(label,need,...opts)=>({label,need,opts});
function B(q,marks,o){const pts=[],kw=[];(o.pts||[]).forEach(p=>{if(p.opts){pts.push({label:p.label,any:p.opts.map(x=>x.t),need:p.need});kw.push(p.opts.map(x=>x.re));}else{pts.push(p.t);kw.push(p.re);}});
  const s=Object.assign({q,marks,tags:["micro"]},o);delete s.pts;s.points=pts;s.kw=kw;return s;}
const S=(...subs)=>[{subs}];
QB.push(

U({r:4,id:"bs076",num:"76",pg:41,title:"Lifelong bleeding with a moderately low platelet count — what are these cells?",img:"ubs_c_giant",
  stem:`A 20-year-old man has had nosebleeds and prolonged bleeding after tooth extraction since childhood. His parents are first cousins. Platelets 58,000/µL; ITP treatment with prednisolone did not help. Two fields of his smear are shown.`,
  interp:"giant platelets + ประวัติเลือดออกตั้งแต่เด็ก + พ่อแม่เป็นญาติ → Bernard–Soulier syndrome",
  summary:["Large platelet 4–7 µm, giant > 7 µm (≥ RBC) — analyzer อาจนับต่ำเท็จ","BSS: ขาด GPIb-IX-V (AR) → macrothrombocytopenia, ristocetin agglutination ไม่ขึ้น และไม่แก้ด้วย normal plasma (vWD แก้ได้)","ddx giant platelets: ITP, MYH9-RD, gray platelet syndrome, MDS/MPN, post-splenectomy"],
  parts:S(
   B("76.1 Describe the cells shown.",2,{
     ans:"<b>Large and giant platelets</b> — some as large as or larger than red cells, with azurophilic granules",
     pts:[P("Giant / large platelets","giant","large plat","macrothrombocyt")]}),
   B("76.2 Give three causes of this finding.",3,{
     ans:"<b>Immune thrombocytopenia</b> · <b>Bernard–Soulier syndrome</b> · <b>MYH9-related disease</b> (May–Hegglin) · gray platelet syndrome · MDS/MPN · post-splenectomy",
     pts:[G("Causes (any 3)",3,P("ITP","itp","immune thrombocytopen"),P("Bernard–Soulier","bernard","soulier","\\bbss\\b"),P("MYH9 / May–Hegglin","myh9","may.?hegglin"),P("Gray platelet syndrome","gray platelet","grey platelet"),P("MDS / MPN","mds","mpn","myelodysplas","myeloprolif"),P("Post-splenectomy","splenectom"))]}),
   B("76.3 What is the most likely diagnosis here, and which platelet function test confirms it?",3,{
     ans:"<b>Bernard–Soulier syndrome</b> (autosomal recessive GPIb-IX-V deficiency) · <b>absent ristocetin-induced platelet agglutination not corrected by normal plasma</b> (corrected in von Willebrand disease) · flow cytometry: reduced <b>CD42b (GPIbα)</b>",
     pts:[P("Bernard–Soulier syndrome","bernard","soulier","\\bbss\\b"),P("Absent ristocetin agglutination, not corrected by normal plasma","ristocetin"),P("GPIb / CD42 deficiency","gpib","cd42","glycoprotein ib")]})
  )}),

U({r:4,id:"bs077",num:"77",pg:42,title:"Thrombocytosis, splenomegaly and strange large cells in the blood (A–C)",img:"ubs_c_mk3",
  stem:`A 63-year-old man with known JAK2-positive primary myelofibrosis has platelets 950,000/µL. Three unusual cells found during the smear review are shown (A–C).`,
  interp:"ระบุ megakaryocyte/micromegakaryocyte ใน PB และความหมาย",
  summary:["ปกติไม่พบ megakaryocyte ใน PB","พบได้ใน MPN (PMF, CML), MDS, AMKL (M7), marrow infiltration","Micromegakaryocyte อาจคล้าย lymphocyte — ดู platelet ที่แตกออกจากขอบ"],
  parts:S(
   B("77.1 What are these cells?",2,{
     ans:"<b>Megakaryocytes / micromegakaryocytes</b> (bare or small megakaryocyte nuclei) — dense lobulated or round nuclei with <b>platelets budding from the cytoplasm edge</b>",
     pts:[P("Megakaryocytes / micromegakaryocytes","megakaryocyt"),P("Platelet budding / dense nucleus","bud","platelet","dense")]}),
   B("77.2 Give two conditions in which they appear in blood.",2,{
     ans:"<b>Myeloproliferative neoplasms</b> (primary myelofibrosis, CML, ET) · <b>MDS</b> / MDS-MPN · <b>acute megakaryoblastic leukemia (M7)</b> · marrow infiltration by tumour",
     pts:[G("Conditions (any 2)",2,P("MPN / myelofibrosis / CML","mpn","myelofibros","cml","myeloprolif"),P("MDS","mds","myelodysplas"),P("Acute megakaryoblastic leukemia","megakaryoblast","m7","amkl"),P("Marrow infiltration","infiltrat","metasta"))]}),
   B("77.3 Which small cell can a micromegakaryocyte be confused with, and how do you tell them apart?",2,{
     ans:"A <b>small lymphocyte</b> (or NRBC) — a micromegakaryocyte has <b>platelet-like cytoplasmic blebs/budding</b> and granular pale cytoplasm; immunostain CD61/CD41 confirms",
     pts:[P("Small lymphocyte / NRBC","lymphocyt","nrbc"),P("Budding platelets / CD41 / CD61","bud","bleb","cd41","cd61","platelet")]})
  )}),

U({r:4,id:"bs078",num:"78",pg:44,title:"Severe hypoxia and shock — what is this cell?",img:"ubs_c_nrbc",
  stem:`A 68-year-old man with septic shock and severe hypoxemia (PaO₂ 48 mmHg) has a blood smear review. The cell shown is found 12 times per 100 white cells.`,
  interp:"ระบุ NRBC และสาเหตุของ NRBC ใน PB ผู้ใหญ่",
  summary:["NRBC: nucleus กลมเข้ม chromatin หยาบ cytoplasm สีเทา-ชมพู/ฟ้า (ไม่มี granule)","สาเหตุในผู้ใหญ่: hemolysis/thalassemia, marrow infiltration/myelofibrosis, hypoxia/shock/sepsis (prognosis แย่), หลังตัดม้าม","รายงาน NRBC/100 WBC และแก้ค่า WBC"],
  parts:S(
   B("78.1 Identify the cell.",2,{
     ans:"<b>Nucleated red blood cell (normoblast)</b> — round, centrally placed dense nucleus with coarse chromatin and agranular blue-gray to pink cytoplasm (basophilic → polychromatic normoblast)",
     pts:[P("NRBC / normoblast","nrbc","nucleated r","normoblast","erythroblast")]}),
   B("78.2 Give three causes of this cell in an adult's blood.",3,{
     ans:"<b>Severe hypoxia / shock / sepsis</b> (stress erythropoiesis — poor prognostic sign) · <b>hemolytic anemia, thalassemia</b> · <b>marrow infiltration / myelofibrosis</b> (leukoerythroblastic) · <b>post-splenectomy</b> · acute hemorrhage · megaloblastic anemia",
     pts:[G("Causes (any 3)",3,P("Hypoxia / shock / sepsis","hypox","shock","sepsis","stress"),P("Hemolysis / thalassemia","hemoly","thalass"),P("Marrow infiltration / myelofibrosis","infiltrat","myelofibros","myelophth","leukoerythro"),P("Post-splenectomy","splenectom"),P("Hemorrhage","hemorrh","bleed"),P("Megaloblastic","megaloblast"))]}),
   B("78.3 How should it be reported, and why does it matter?",2,{
     ans:"Report as <b>number of NRBC per 100 WBC</b> · analyzers may count NRBCs as WBCs → <b>correct the WBC</b> = WBC × 100 ÷ (100 + NRBC)",
     pts:[P("NRBC per 100 WBC","100 wbc","per 100"),P("Correct WBC","correct")]})
  )}),

U({r:4,id:"bs079",num:"79",pg:46,title:"Elderly man with lymphocytosis — what are these structures?",img:"ubs_c_smudge",
  stem:`A 75-year-old man has lymphocytes 45,000/µL. The laboratory reports 'many smudge cells' and shows the three fields above.`,
  interp:"ระบุ smudge cell และวิธีลดเพื่อให้นับ differential ได้ถูก",
  summary:["Smudge/basket cell (Gumprecht shadow) = WBC ที่เปราะแตกตอนทำสเมียร์","เพิ่มมากใน CLL","เติม 22% albumin 1 หยดต่อเลือด 4–5 หยดก่อนทำสเมียร์ช่วยลด smudge → นับ differential ได้ถูก"],
  parts:S(
   B("79.1 Identify these structures.",2,{
     ans:"<b>Smudge (basket) cells</b> — Gumprecht shadows: ruptured, fragile leukocyte nuclei spread out as smudged chromatin without cytoplasm",
     pts:[P("Smudge / basket cells","smudge","basket","gumprecht")]}),
   B("79.2 With which disease are they associated, and why do they form?",2,{
     ans:"<b>Chronic lymphocytic leukemia</b> — CLL lymphocytes are <b>fragile</b> (low vimentin) and rupture when the smear is spread",
     pts:[P("CLL","cll","chronic lymphocytic"),P("Fragile cells crushed during smear preparation","fragil","crush","rupture","spread")]}),
   B("79.3 How can the laboratory reduce them to get an accurate differential count?",1,{
     ans:"Add <b>one drop of 22% bovine albumin to 4–5 drops of blood</b> before making the smear (or make smears promptly/gently) — smudge cells should otherwise be counted as lymphocytes",
     pts:[P("Add albumin before spreading","albumin")]})
  )}),

U({r:4,id:"bs080",num:"80",pg:47,title:"Dark clumps on a smear reported as 'parasites?' — what are they?",img:"ubs_c_artef",
  stem:`A smear from a well 30-year-old man was flagged by a trainee as 'possible parasites'. The slide had been left to dry overnight before staining. Three fields are shown.`,
  interp:"ระบุ stain/dye deposit artefact และวิธีแก้",
  summary:["Dye sediment จาก over-drying, สัดส่วนสี/บัฟเฟอร์ไม่ถูก, ล้างไม่พอ","ลักษณะไม่สม่ำเสมอ อยู่ทั้งบนเซลล์และพื้นหลัง คนละระนาบโฟกัส","ล้างออกได้โดยละลายด้วย methanol แล้วล้างน้ำ แล้วย้อมใหม่"],
  parts:S(
   B("80.1 What are these structures?",2,{
     ans:"<b>Stain (dye) precipitate artefacts</b> — irregular dark purple granular clumps lying on and between cells, not true organisms",
     pts:[P("Stain / dye precipitate artefact","precipitat","deposit","sediment","artef","artifact")]}),
   B("80.2 Give two causes and how to remove them.",3,{
     ans:"Causes: <b>over-drying</b> of the smear/stain, <b>wrong stain-to-buffer ratio</b>, <b>insufficient washing</b>, unfiltered old stain · Remove: <b>dissolve with methanol, rinse with water</b> and restain (filter the stain)",
     pts:[G("Causes (any 2)",2,P("Over-drying","dry"),P("Stain/buffer ratio","ratio","buffer"),P("Insufficient washing","wash","rinse"),P("Old / unfiltered stain","filter","old stain")),P("Methanol then rinse and restain","methanol")]})
  )}),

U({r:4,id:"bs081",num:"81",pg:5,title:"Fever and abdominal pain — identify the cell",img:"ubs_c_band",
  stem:`A 35-year-old man with acute appendicitis has WBC 15,800/µL with 18% of white cells like the one shown.`,
  interp:"ระบุ band neutrophil และนัยของ bandemia",
  summary:["Band: nucleus โค้งรูปเกือกม้า/ไส้กรอก ความกว้างเท่ากันตลอด ไม่มีเส้นใยคอด","ปกติ band < 5% (≤ 0.7×10⁹/L)","Bandemia (> 10%) = left shift → ติดเชื้อแบคทีเรีย/ภาวะอักเสบเฉียบพลัน (เป็นเกณฑ์หนึ่งของ SIRS)"],
  parts:S(
   B("81.1 Identify the cell and describe its nucleus.",2,{
     ans:"<b>Band (stab) neutrophil</b> — curved, <b>horseshoe/sausage-shaped nucleus of uniform width</b> without thin filaments separating lobes; pink cytoplasm with fine granules",
     pts:[P("Band neutrophil","band","stab"),P("Horseshoe / sausage nucleus without filament","horseshoe","sausage","curv","u-shape","no filament")]}),
   B("81.2 Is 18% normal? What does it suggest?",2,{
     ans:"<b>No</b> — bands are normally &lt; 5% · <b>bandemia/left shift</b> indicating acute bacterial infection/inflammation (here appendicitis; &gt; 10% bands is a SIRS criterion)",
     pts:[P("Abnormal (normal <5%)","5 ?%","abnormal","increas","not normal"),P("Left shift / bacterial infection","left shift","bacteri","infect","sepsis","sirs")]})
  )}),

U({id:"bs082",num:"82",pg:17,title:"Rice farmer with anemia and itchy feet — blood smear",img:"ubs_ida",
  stem:`A 49-year-old rice farmer from Sakon Nakhon walks barefoot in the paddies. He has fatigue, epigastric discomfort and a past itchy rash on his feet. Hb 7.2 g/dL, MCV 62 fL, WBC 9,100/µL (eosinophils 14%), ferritin 4 ng/mL. Upper GI endoscopy is normal. His smear is shown.`,
  interp:"IDA + eosinophilia ในเกษตรกรไทย → hookworm",
  summary:["Hookworm (Necator americanus เด่นในไทย) ดูดเลือดในลำไส้เล็ก → IDA + eosinophilia","Stool exam (Kato / formalin-ether concentration) พบไข่","Albendazole 400 mg ครั้งเดียว (หรือ 3 วัน) + oral iron + ใส่รองเท้า"],
  parts:S(
   B("82.1 List the RBC abnormalities.",2,{
     ans:"<b>Hypochromic microcytic</b> RBCs with anisopoikilocytosis and <b>pencil cells</b> (iron deficiency picture)",
     pts:[P("Hypochromic microcytic","hypochrom","microcyt"),P("Pencil cells / aniso-poik","pencil","elliptocyt","aniso","poik")]}),
   B("82.2 What is the most likely cause of his iron deficiency, and how do you confirm it?",3,{
     ans:"<b>Hookworm infection</b> (<i>Necator americanus</i> / <i>Ancylostoma</i>) — chronic intestinal blood loss + eosinophilia + ground itch · confirm by <b>stool examination for hookworm eggs</b> (concentration technique, Kato–Katz)",
     pts:[P("Hookworm","hookworm","necator","ancylostom","พยาธิปากขอ"),P("Stool exam for eggs","stool","ova","egg","kato","อุจจาระ")]}),
   B("82.3 How would you treat him?",2,{
     ans:"<b>Albendazole 400 mg</b> single dose (or daily for 3 days; mebendazole alternative) + <b>oral iron</b> for ~3 months after Hb normalizes · advise <b>wearing shoes</b>/boots, sanitation; repeat stool exam",
     pts:[P("Albendazole / mebendazole","albendazole","mebendazole"),P("Oral iron","iron","ferrous"),P("Prevention: footwear","shoe","boot","รองเท้า","footwear")]})
  )}),

U({id:"bs083",num:"83",pg:23,title:"Woman with Hb H disease planning a family — blood smear",img:"ubs_hbh",
  stem:`A 26-year-old woman with Hb H disease (genotype --SEA/-α3.7) plans to have a child. Her husband is an α-thalassemia 1 carrier (--SEA/αα). Her smear is shown.`,
  interp:"ใช้ความรู้ PBS ของ HbH + พันธุศาสตร์ α-thal ในการให้คำปรึกษาคู่",
  summary:["Hb Bart's hydrops = --/-- (ไม่มี α gene) เสียชีวิตในครรภ์ + เสี่ยงต่อมารดา (preeclampsia, PPH)","แม่ --/-α × พ่อ --/αα → ลูก 25% Bart's hydrops, 25% HbH, 25% α-thal 1 trait, 25% α-thal 2 trait","Prenatal diagnosis: CVS/amniocentesis (DNA) หรือ ultrasound fetal anemia/hydrops"],
  parts:S(
   B("83.1 List the RBC abnormalities in her smear.",2,{
     ans:"Hypochromic microcytic RBCs with marked anisopoikilocytosis — <b>target cells, teardrop cells, schistocytes, spherocytes</b>, polychromasia",
     pts:[P("Hypochromic microcytic","hypochrom","microcyt"),P("Target / teardrop / schistocyte / polychromasia","target","teardrop","schistocyt","polychrom")]}),
   B("83.2 What are the possible genotypes of their children and the probability of each?",4,{
     ans:"Mother (--/-α) × father (--/αα): <b>--/-- Hb Bart's hydrops fetalis 25%</b> · <b>--/-α Hb H disease 25%</b> · <b>--/αα α-thal 1 trait 25%</b> · <b>-α/αα α-thal 2 trait 25%</b>",
     pts:[P("Hb Bart's hydrops 25%","bart"),P("Hb H disease 25%","hb ?h"),P("α-thal 1 trait 25%","thal.{0,4}1","α.?thal.?1","--/αα"),P("α-thal 2 trait 25%","thal.{0,4}2","-α/αα")]}),
   B("83.3 What should be offered during pregnancy?",2,{
     ans:"<b>Genetic counselling</b> and <b>prenatal diagnosis</b> — CVS (10–13 wk) or amniocentesis (≥ 15–16 wk) for DNA, or serial <b>ultrasound</b> (cardiothoracic ratio, placental thickness, MCA-PSV) for fetal anemia/hydrops; termination offered if affected (also protects the mother from 'mirror syndrome'/pre-eclampsia)",
     pts:[P("Prenatal diagnosis (CVS / amniocentesis / cordocentesis)","prenatal","cvs","amnio","cordocent"),P("Ultrasound for hydrops / counselling","ultrasound","hydrop","counsel")]})
  )}),

U({id:"bs084",num:"84",pg:27,title:"Mouth ulcers and pancytopenia on a weekly arthritis drug — blood smear",img:"ubs_mega",
  stem:`A 58-year-old woman with rheumatoid arthritis takes methotrexate 15 mg weekly. She recently started trimethoprim–sulfamethoxazole for a UTI and stopped taking her folic acid. She now has painful mouth ulcers. Hb 8.0 g/dL, MCV 110 fL, WBC 1,900/µL, platelets 42,000/µL, creatinine 1.8 mg/dL. Her smear is shown.`,
  interp:"megaloblastic change จาก methotrexate toxicity + การรักษา",
  summary:["MTX ยับยั้ง dihydrofolate reductase → megaloblastic change, mucositis, pancytopenia","ปัจจัยเสี่ยง: ไตเสื่อม, TMP-SMX (ยับยั้ง DHFR + ลดการขับ), ขาด folic acid","รักษา: หยุด MTX, leucovorin (folinic acid), G-CSF ถ้า neutropenia รุนแรง, ดูแลไต"],
  parts:S(
   B("84.1 List the abnormal findings in the smear.",2,{
     ans:"<b>Macro-ovalocytes</b> with anisopoikilocytosis and <b>hypersegmented neutrophils</b> (megaloblastic picture); platelets reduced",
     pts:[P("Macro-ovalocytes","macro","oval"),P("Hypersegmented neutrophils","hypersegment")]}),
   B("84.2 What is the cause of her pancytopenia?",2,{
     ans:"<b>Methotrexate toxicity</b> (antifolate — DHFR inhibition) precipitated by <b>trimethoprim–sulfamethoxazole</b>, <b>renal impairment</b> and stopping folic acid",
     pts:[P("Methotrexate toxicity","methotrexate","mtx"),P("Precipitated by TMP-SMX / renal impairment / no folic acid","trimethoprim","cotrimoxazole","bactrim","renal","kidney","folic")]}),
   B("84.3 How would you treat her?",3,{
     ans:"<b>Stop methotrexate</b> and TMP-SMX · give <b>leucovorin (folinic acid)</b> IV/PO promptly (bypasses DHFR; folic acid is not enough) · <b>G-CSF</b> for severe neutropenia, broad-spectrum antibiotics if febrile, mouth care, IV hydration ± urinary alkalinization; transfuse as needed",
     pts:[P("Stop methotrexate / TMP-SMX","stop","discontinu","hold"),P("Leucovorin (folinic acid)","leucovorin","folinic"),P("G-CSF / supportive","g-?csf","filgrastim","antibiot","support")]})
  )}),

U({id:"bs085",num:"85",pg:29,title:"Pancytopenia two months after jaundice — blood smear",img:"ubs_aa",
  stem:`An 18-year-old man recovered from an episode of acute non-A, non-B, non-C hepatitis 2 months ago. He now has petechiae and fatigue. Hb 7.0 g/dL, WBC 1,200/µL (neutrophils 150/µL), platelets 6,000/µL, reticulocytes 0.1%. His blood smear is shown.`,
  interp:"aplastic anemia ชนิด hepatitis-associated + very severe + หลักการให้เลือด",
  summary:["Hepatitis-associated AA: ชายอายุน้อย 1–3 เดือนหลังตับอักเสบที่ไม่ใช่ไวรัส A–E ที่รู้จัก","Very severe AA: ANC < 200","ให้เลือด: leukoreduced (± irradiated) PRC/plt, เลี่ยงเลือดจากญาติก่อน HSCT; plt prophylaxis < 10,000"],
  parts:S(
   B("85.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> normochromic normocytic, no polychromasia, no NRBC · <b>WBC:</b> markedly decreased, mainly lymphocytes, <b>no blasts or dysplasia</b> · <b>Platelet:</b> markedly decreased",
     pts:[P("RBC NCNC without polychromasia","normochrom","ncnc","no polychrom"),P("Leukopenia, lymphocytes, no blasts","leukopen","lymphocyt","no blast"),P("Thrombocytopenia","thrombocytopen","platelet.{0,20}(decreas|low)")]}),
   B("85.2 What is the diagnosis and its severity?",2,{
     ans:"<b>Hepatitis-associated aplastic anemia</b> — <b>very severe</b> (ANC &lt; 200/µL)",
     pts:[P("Aplastic anemia (hepatitis-associated)","aplastic"),P("Very severe (ANC <200)","very severe","vsaa","200")]}),
   B("85.3 What blood products and supportive care would you give while awaiting definitive therapy?",3,{
     ans:"<b>Leukoreduced (± irradiated) red cells and platelets</b>; prophylactic platelets if &lt; 10,000/µL or bleeding; <b>avoid transfusions from family members</b> (potential stem-cell donors) to reduce alloimmunization · neutropenic precautions, prompt broad-spectrum antibiotics for fever, antifungal prophylaxis · HLA typing for HSCT",
     pts:[P("Leukoreduced / irradiated products","leuko","leuco","irradiat"),P("Avoid family donors before HSCT","family","relative","ญาติ"),P("Infection prevention / prompt antibiotics","antibiot","neutropenic","infect","antifung")]})
  )}),

U({id:"bs086",num:"86",pg:34,title:"Severe autoimmune hemolysis and 'no compatible blood' — blood smear",img:"ubs_waiha",
  stem:`A 42-year-old woman with newly diagnosed warm autoimmune hemolytic anemia has Hb 4.6 g/dL, tachycardia and chest pain. The blood bank reports that all units are incompatible on crossmatch. Her smear is shown.`,
  interp:"PBS ของ WAIHA + การให้เลือดเมื่อ crossmatch ไม่เข้า",
  summary:["Warm autoantibody (pan-reactive) ทำให้ทุกถุงไม่เข้ากัน — ต้องตัด alloantibody ด้วย autoadsorption/extended phenotyping","อาการคุกคามชีวิต → อย่าเลื่อนการให้เลือด: ให้ 'least incompatible' ช้า ๆ ทีละน้อย","ร่วมกับ methylprednisolone/IVIG และ folic acid"],
  parts:S(
   B("86.1 List the abnormal findings.",2,{
     ans:"<b>Microspherocytes</b> of variable size, <b>polychromasia</b> and <b>NRBC</b>",
     pts:[P("Microspherocytes","spherocyt"),P("Polychromasia / NRBC","polychrom","nrbc","nucleated")]}),
   B("86.2 Why are all units incompatible?",2,{
     ans:"The <b>warm IgG autoantibody is pan-reactive</b> — it reacts with almost all donor red cells (and coats her own cells — DAT positive); an underlying <b>alloantibody</b> may be hidden",
     pts:[P("Pan-reactive autoantibody","autoantibod","pan.?react","all"),P("Possible masked alloantibody","alloantibod")]}),
   B("86.3 Should she be transfused? How?",3,{
     ans:"<b>Yes — do not withhold</b> transfusion in life-threatening anemia · give <b>'least incompatible', ABO/Rh (± extended phenotype)–matched</b> red cells after the lab excludes alloantibodies (autoadsorption), <b>transfuse slowly in small volumes</b> with close monitoring · plus high-dose <b>corticosteroids</b> (± IVIG) and folic acid",
     pts:[P("Do not withhold transfusion","yes","do not withhold","should be transfused","ให้เลือด"),P("Least incompatible / phenotype-matched units","least incompatible","phenotyp","adsorption"),P("Slow, small volume + steroids","slow","small","steroid","methylpred")]})
  )}),

U({id:"bs087",num:"87",pg:35,title:"Pneumonia followed by anemia in a young man — blood smear",img:"ubs_cad",
  stem:`A 22-year-old university student has had dry cough and fever for 2 weeks; CXR shows patchy bilateral infiltrates. He is now pale with dark urine. Hb 8.1 g/dL, reticulocytes 7%, LDH 720 U/L. His blood smear (made at room temperature) is shown.`,
  interp:"RBC agglutination หลัง atypical pneumonia → secondary cold agglutinin จาก Mycoplasma",
  summary:["Mycoplasma pneumoniae → anti-I IgM cold agglutinin (polyclonal, ชั่วคราว 2–3 สัปดาห์)","DAT C3d+, ตัวอย่างต้องเก็บ/ตรวจที่ 37 °C","รักษา: macrolide/doxycycline + ให้ความอบอุ่น; มักหายเอง"],
  parts:S(
   B("87.1 What is the main finding?",2,{
     ans:"<b>RBC agglutination</b> — irregular clumps of red cells",
     pts:[P("RBC agglutination","agglutin","clump")]}),
   B("87.2 What is the diagnosis and the most likely organism?",3,{
     ans:"<b>Secondary cold agglutinin syndrome</b> (cold-type AIHA, anti-I IgM) following <b><i>Mycoplasma pneumoniae</i></b> pneumonia (also EBV)",
     pts:[P("Cold agglutinin / cold AIHA","cold"),P("Mycoplasma pneumoniae","mycoplasma"),P("Anti-I IgM","anti-?i","igm")]}),
   B("87.3 How do you handle the blood sample and treat him?",3,{
     ans:"Sample: keep at <b>37 °C</b> (warm before analysis) to avoid spurious results; DAT shows <b>C3d</b> · Treatment: <b>macrolide (azithromycin) or doxycycline</b>, <b>keep warm</b>, warmed fluids/blood if transfusion needed; usually <b>self-limiting in 2–3 weeks</b>",
     pts:[P("Keep sample at 37 °C","37","warm"),P("Macrolide / doxycycline","azithromycin","clarithromycin","macrolide","doxycycline"),P("Keep warm / self-limiting","warm","self.?limit","หายเอง")]})
  )}),

U({id:"bs088",num:"88",pg:37,title:"After the hemolytic episode — counselling a G6PD-deficient patient",img:"ubs_g6pd",
  stem:`A 24-year-old Thai man recovered from the hemolytic episode shown in his smear (taken at admission). Three months later the quantitative G6PD activity is 6% of normal (G6PD Viangchan). He asks what this means for him and his family.`,
  interp:"ใช้ PBS ระบุ oxidative hemolysis แล้วให้คำแนะนำผู้ป่วย G6PD deficiency",
  summary:["X-linked: ชายมีอาการ, หญิง heterozygous เป็น mosaic (lyonization) อาจมีอาการได้","Variant ที่พบบ่อยในไทย: Viangchan (871G>A), Mahidol, Canton, Kaiping","หลีกเลี่ยง: primaquine (ขนาดปกติ), dapsone, nitrofurantoin, rasburicase, methylene blue, sulfonamide บางตัว, ลูกเหม็น (naphthalene), ถั่วปากอ้า"],
  parts:S(
   B("88.1 Name three cell types in this smear that indicate oxidative hemolysis.",3,{
     ans:"<b>Bite cells</b> (keratocytes) · <b>blister cells</b> · <b>Hb leakage/contracted cells</b> · <b>ghost cells</b> (any three)",
     pts:[G("Cells (any 3)",3,P("Bite cell","bite","keratocyt"),P("Blister cell","blister"),P("Hb leakage / contracted cell","leakage","contracted","eccentrocyt"),P("Ghost cell","ghost"),P("Spherocyte","spherocyt"))]}),
   B("88.2 How is this condition inherited, and what does it mean for his children?",2,{
     ans:"<b>X-linked</b> · all his <b>daughters will be carriers</b> (heterozygous; may be affected through X-inactivation mosaicism); his <b>sons will be unaffected</b> (they get his Y)",
     pts:[P("X-linked","x-?linked"),P("Daughters carriers, sons unaffected","daughter","son","carrier","ลูกสาว")]}),
   B("88.3 List four drugs or substances he should avoid.",3,{
     ans:"<b>Primaquine</b> (standard daily dose), <b>dapsone</b>, <b>nitrofurantoin</b>, <b>rasburicase</b>, <b>methylene blue</b>, some <b>sulfonamides</b> · <b>naphthalene mothballs</b>, <b>fava beans</b> · seek care early for infections (trigger) · carry a G6PD card",
     pts:[G("Avoid (any 4)",4,P("Primaquine","primaquine"),P("Dapsone","dapsone"),P("Nitrofurantoin","nitrofurantoin"),P("Rasburicase","rasburicase"),P("Methylene blue","methylene"),P("Sulfonamides","sulfa","cotrimox"),P("Naphthalene / mothballs","naphthalene","mothball","ลูกเหม็น"),P("Fava beans","fava","ถั่วปากอ้า"))]})
  )}),

U({id:"bs089",num:"89",pg:22,title:"Both partners have target cells — are they an at-risk couple?",img:"ubs_hbe",
  stem:`A couple from Surin attend antenatal screening at 9 weeks. The woman's smear is shown; both she and her husband are DCIP-positive. Hb typing: woman A2A + E 28% (A2 + E), husband A2A + E 27%. OF tests negative in both; α-thal 1 PCR negative in both.`,
  interp:"แปลผล Hb typing ของ HbE trait และประเมินคู่เสี่ยง",
  summary:["HbE trait: Hb A + E ~ 25–30% (A2 รวมกับ E บน HPLC), CBC ปกติหรือ MCV ต่ำเล็กน้อย","HbE trait × HbE trait → ลูก 25% homozygous EE (อาการน้อย) — ไม่ใช่คู่เสี่ยงโรครุนแรง","คู่เสี่ยงคือ HbE + β-thal trait (ลูกเป็น β-thal/HbE ได้ 25%)"],
  parts:S(
   B("89.1 What is the most prominent RBC abnormality in her smear?",1,{
     ans:"<b>Target cells</b> on a background of mildly hypochromic microcytic RBCs",
     pts:[P("Target cells","target","codocyt")]}),
   B("89.2 Interpret their Hb typing.",2,{
     ans:"Both are <b>Hb E trait</b> (heterozygous AE: Hb A with Hb E ≈ 25–30%); no α-thal 1 and no β-thal trait",
     pts:[P("Hb E trait (AE) in both","e trait","\\bae\\b","heterozyg","hb ?e")]}),
   B("89.3 Are they an at-risk couple for severe thalassemia? Explain the risk to their baby.",3,{
     ans:"<b>No</b> — not at risk for the three severe diseases (Hb Bart's hydrops, β-thal major, β-thal/HbE) · each pregnancy: 25% <b>homozygous Hb E</b> (mild microcytosis, no treatment needed), 50% HbE trait, 25% normal · no prenatal diagnosis required",
     pts:[P("Not an at-risk couple","not.{0,15}risk","no\\b","ไม่ใช่คู่เสี่ยง","ไม่เสี่ยง"),P("25% homozygous HbE (mild)","25","homozyg","\\bee\\b"),P("No prenatal diagnosis needed","no prenatal","not.{0,10}prenatal","ไม่ต้อง")]})
  )}),

U({id:"bs090",num:"90",pg:52,title:"Known CLL with a sudden drop in hemoglobin — blood smear",img:"ubs_cll",
  stem:`A 74-year-old man with CLL under observation (usual Hb 12.5 g/dL) now has fatigue and jaundice. Hb 7.9 g/dL, reticulocytes 9%, LDH 640 U/L, indirect bilirubin 2.9 mg/dL, platelets 150,000/µL. His smear is shown.`,
  interp:"CLL ที่มี AIHA แทรก — สิ่งที่ต้องตรวจและรักษา",
  summary:["AIHA พบ 10–25% ของ CLL (มักเป็น warm, IgG)","DAT ยืนยัน; ต้องแยก Hb ตกจาก marrow infiltration (retic ต่ำ) หรือ PRCA","รักษา AIHA ด้วย prednisolone; ถ้าดื้อ/กลับเป็นซ้ำ = ข้อบ่งชี้รักษา CLL (เช่น BTK inhibitor ± rituximab)"],
  parts:S(
   B("90.1 List the findings in the smear and what else you would expect to see now.",3,{
     ans:"<b>Small mature lymphocytes</b> with clumped chromatin and <b>smudge cells</b> (CLL) · with new hemolysis expect <b>spherocytes and polychromasia</b> (± NRBC)",
     pts:[P("Small mature lymphocytes / smudge cells","smudge","lymphocyt","basket"),P("Expect spherocytes / polychromasia","spherocyt","polychrom")]}),
   B("90.2 What complication has occurred and how do you confirm it?",2,{
     ans:"<b>Autoimmune hemolytic anemia</b> (warm, secondary to CLL) · confirm with <b>DAT</b> (IgG ± C3) and hemolysis markers (haptoglobin ↓)",
     pts:[P("Autoimmune hemolytic anemia","aiha","autoimmune hemol","hemolytic"),P("DAT","dat","coomb","antiglobulin")]}),
   B("90.3 How would you treat it?",2,{
     ans:"<b>Prednisolone 1 mg/kg/day</b> + folic acid (± IVIG / transfusion if severe) · steroid-refractory or recurrent AIHA is an <b>indication to treat the CLL</b> (e.g. BTK inhibitor or rituximab-based therapy)",
     pts:[P("Corticosteroids","prednis","steroid"),P("Treat CLL if refractory (BTK inhibitor / rituximab)","rituximab","btk","ibrutinib","acalabrutinib","treat.{0,10}cll")]})
  )}),

U({id:"bs091",num:"91",pg:53,title:"Advanced HIV with fever, weight loss and pancytopenia — blood smear",img:"ubs_myelo",
  stem:`A 36-year-old man with HIV (CD4 42 cells/µL) has had fever, night sweats and weight loss for 6 weeks with hepatosplenomegaly. Hb 7.8 g/dL, WBC 2,900/µL, platelets 76,000/µL, ALP 520 U/L. His smear is shown. Sputum AFB is negative.`,
  interp:"leukoerythroblastic picture จากโรคติดเชื้อแทรกไขกระดูกในผู้ป่วย HIV",
  summary:["Marrow infiltration ใน HIV: disseminated TB, MAC, talaromycosis, histoplasmosis, lymphoma","BM aspiration + biopsy ส่งย้อมพิเศษ (AFB, fungal) และเพาะเชื้อ (mycobacteria/fungus) + hemoculture สำหรับ mycobacteria/fungi","Leukoerythroblastic: teardrop, NRBC, immature granulocytes"],
  parts:S(
   B("91.1 List the abnormal findings.",3,{
     ans:"<b>Teardrop cells</b>, polychromasia, <b>NRBC</b>, <b>immature granulocytes</b> (myelocytes/metamyelocytes) and large platelets — a <b>leukoerythroblastic</b> picture",
     pts:[P("Teardrop cells","teardrop","dacrocyt"),P("NRBC","nrbc","nucleated"),P("Immature granulocytes / leukoerythroblastic","myelocyt","immature","leukoerythroblast")]}),
   B("91.2 Name three likely causes in this patient.",3,{
     ans:"<b>Disseminated tuberculosis</b> · <b>disseminated MAC</b> · <b>disseminated fungal infection</b> (talaromycosis, histoplasmosis) · <b>lymphoma</b> (HIV-associated)",
     pts:[G("Causes (any 3)",3,P("TB","\\btb\\b","tubercul"),P("MAC","\\bmac\\b","avium","ntm"),P("Fungal (talaromyces / histoplasma)","talaromyc","marneffei","histoplasm","fung"),P("Lymphoma","lymphoma"))]}),
   B("91.3 Which investigations would you do on the bone marrow?",2,{
     ans:"<b>Bone marrow aspiration and trephine biopsy</b> with <b>AFB and fungal stains (GMS/PAS)</b>, histology for granulomas/lymphoma, and <b>marrow culture for mycobacteria and fungi</b> (± PCR); plus mycobacterial/fungal blood cultures",
     pts:[P("BM biopsy with AFB / fungal stains","biops","afb","fungal stain","gms","pas","stain"),P("Marrow culture for mycobacteria/fungi","culture")]})
  )}),

U({id:"bs092",num:"92",pg:54,title:"Blurred vision, headache and nosebleeds with a high globulin — blood smear",img:"ubs_mm",
  stem:`A 70-year-old man has headache, blurred vision and recurrent epistaxis. Fundoscopy shows dilated tortuous retinal veins with hemorrhages. Total protein 11.5 g/dL, IgM 5,200 mg/dL; calcium and creatinine normal; no bone lesions. His smear is shown.`,
  interp:"rouleaux + hyperviscosity + IgM สูง → Waldenström macroglobulinemia และ plasmapheresis",
  summary:["Waldenström = lymphoplasmacytic lymphoma + IgM paraprotein (MYD88 L265P > 90%)","Hyperviscosity: เลือดออกเยื่อบุ, ตามัว (sausage veins), อาการทางสมอง → emergency plasmapheresis","ระวังให้เลือด PRC ก่อนลด viscosity"],
  parts:S(
   B("92.1 What is the main RBC abnormality?",1,{
     ans:"Marked <b>rouleaux formation</b> (± bluish background from paraprotein)",
     pts:[P("Rouleaux","rouleaux","stack","coin")]}),
   B("92.2 What is the diagnosis and its acute complication?",3,{
     ans:"<b>Waldenström macroglobulinemia</b> (lymphoplasmacytic lymphoma with IgM paraprotein) complicated by <b>hyperviscosity syndrome</b>",
     pts:[P("Waldenström macroglobulinemia","waldenstr","macroglobulin","lymphoplasmacytic"),P("Hyperviscosity syndrome","hyperviscos","viscosity")]}),
   B("92.3 What is the urgent treatment, and which mutation supports the diagnosis?",3,{
     ans:"<b>Emergency plasmapheresis</b> (IgM is mostly intravascular, so it is very effective) → then systemic therapy (e.g. bendamustine–rituximab or a BTK inhibitor) · avoid red-cell transfusion before viscosity falls · <b>MYD88 L265P</b> mutation (&gt; 90%) ± CXCR4",
     pts:[P("Plasmapheresis / plasma exchange","plasmapher","plasma exchange"),P("Systemic therapy (rituximab / BTK inhibitor)","rituximab","bendamustine","ibrutinib","zanubrutinib","btk"),P("MYD88 L265P","myd88")]})
  )}),

U({id:"bs093",num:"93",pg:56,title:"Heavy periods and petechiae in a young woman — blood smear",img:"ubs_itp",
  stem:`A 26-year-old woman has heavy menstrual bleeding and petechiae for 1 week. No other illness, no drugs. Hb 10.8 g/dL, WBC 7,200/µL, platelets 9,000/µL. PT, aPTT normal. HIV, HBV, HCV negative. Her smear is shown.`,
  interp:"ITP ผู้ใหญ่ (ไม่ตั้งครรภ์) — การรักษา first line และ second line",
  summary:["First line (ASH 2019/ICR 2019): prednisolone 1 mg/kg (≤ 6 สัปดาห์) หรือ dexamethasone 40 mg/d × 4 วัน ± IVIG ถ้าเลือดออกมาก/ต้องการให้ขึ้นเร็ว","Second line: TPO-RA (eltrombopag, romiplostim), rituximab, fostamatinib, splenectomy (หลัง ≥ 12 เดือน)","Tranexamic acid / hormonal control สำหรับประจำเดือนมาก"],
  parts:S(
   B("93.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> normochromic normocytic, no schistocytes · <b>WBC:</b> normal · <b>Platelet:</b> markedly decreased with occasional giant platelets; no clumps",
     pts:[P("RBC normal, no schistocytes","normochrom","ncnc","no schisto"),P("WBC normal","wbc.{0,20}normal","normal"),P("Severe thrombocytopenia with giant platelets","thrombocytopen","giant","large plat")]}),
   B("93.2 What is the diagnosis?",1,{
     ans:"<b>Primary immune thrombocytopenia (ITP)</b> — newly diagnosed, with mucosal bleeding",
     pts:[P("ITP","\\bitp\\b","immune thrombocytopen")]}),
   B("93.3 Outline first-line and second-line treatment.",4,{
     ans:"First line: <b>dexamethasone 40 mg/day × 4 days</b> or <b>prednisolone 1 mg/kg/day</b> (taper, ≤ 6 weeks) ± <b>IVIG 1 g/kg</b> (×1–2 days) for significant bleeding · <b>tranexamic acid</b>/hormonal therapy for menorrhagia; platelet transfusion only for life-threatening bleeding · Second line: <b>TPO-receptor agonists</b> (eltrombopag, romiplostim), <b>rituximab</b>, fostamatinib, <b>splenectomy</b> (usually after 12 months)",
     pts:[P("Steroid (dexamethasone or prednisolone)","dexamethasone","prednis","steroid"),P("IVIG for bleeding","ivig","immunoglobulin"),P("TPO-RA / rituximab second line","eltrombopag","romiplostim","tpo","rituximab"),P("Splenectomy","splenectom")]})
  )}),

U({r:4,id:"bs094",num:"94",pg:7,title:"Neutrophilia in a patient on steroids — identify the cell",img:"ubs_c_seg",
  stem:`A 60-year-old man has been taking prednisolone 40 mg/day for 1 week for an asthma exacerbation. He is afebrile and well. WBC 16,200/µL with 85% of the cell shown; no toxic changes.`,
  interp:"ระบุ segmented neutrophil และสาเหตุ neutrophilia ที่ไม่ใช่การติดเชื้อ",
  summary:["Segmented neutrophil: 10–15 µm nucleus 2–5 lobe เชื่อมด้วยเส้นใยบาง cytoplasm ชมพูมี granule ละเอียด","Steroid ทำให้ neutrophil ออกจาก marginated pool + ลดการออกจากหลอดเลือด → neutrophilia โดยไม่มี left shift/toxic change","สาเหตุอื่น: ติดเชื้อแบคทีเรีย, อักเสบ, บุหรี่, ออกกำลัง/stress, ตั้งครรภ์, หลังตัดม้าม, MPN"],
  parts:S(
   B("94.1 Identify the cell.",2,{
     ans:"<b>Segmented (mature) neutrophil</b> — 10–15 µm, nucleus with <b>2–5 lobes joined by thin chromatin filaments</b>, pale pink cytoplasm with fine neutral granules",
     pts:[P("Segmented neutrophil","segment","neutrophil","pmn"),P("2–5 lobes joined by filaments","lobe","filament")]}),
   B("94.2 Explain his neutrophilia and give three other non-infectious causes.",3,{
     ans:"<b>Corticosteroids</b> demarginate neutrophils, release them from the marrow and reduce egress into tissues — mature cells without left shift or toxic change · others: <b>smoking</b>, <b>physical/emotional stress, exercise</b>, <b>pregnancy</b>, inflammation/tissue necrosis, <b>post-splenectomy</b>, malignancy, MPN (CML), drugs (lithium, epinephrine, G-CSF)",
     pts:[P("Steroid-induced demargination","steroid","demargin","marginat"),G("Other causes (any 3)",3,P("Smoking","smok"),P("Stress / exercise","stress","exercise"),P("Pregnancy","pregnan"),P("Inflammation / necrosis","inflamm","necros","infarct","burn"),P("Post-splenectomy","splenectom"),P("Malignancy / MPN","malignan","cancer","mpn","cml"),P("Drugs (lithium, epinephrine, G-CSF)","lithium","epinephrine","adrenaline","g-?csf"))]})
  )}),

U({r:4,id:"bs095",num:"95",pg:9,title:"Lymphocytosis — normal cell, abnormal count?",img:"ubs_c_lymph",
  stem:`A 42-year-old woman has a persistent cough for 3 weeks with paroxysms and post-tussive vomiting. WBC 19,500/µL with 70% of cells like the one shown (small, uniform, mature).`,
  interp:"ระบุ small lymphocyte และสาเหตุของ lymphocytosis (รวม pertussis)",
  summary:["Small lymphocyte: 6–10 µm, nucleus กลมเข้ม chromatin เป็นก้อน cytoplasm น้อยสีฟ้า","Absolute lymphocytosis > 4,000/µL ในผู้ใหญ่","Pertussis: lymphocytosis ของ small mature lymphocytes (บางตัวมี cleft) — ยืนยัน PCR nasopharyngeal swab, รักษา azithromycin"],
  parts:S(
   B("95.1 Identify the cell.",1,{
     ans:"<b>Small (mature) lymphocyte</b> — round dense nucleus with clumped chromatin, thin rim of pale-blue cytoplasm, ~ size of an RBC",
     pts:[P("Small mature lymphocyte","lymphocyt")]}),
   B("95.2 Calculate the absolute lymphocyte count and give three causes of lymphocytosis.",3,{
     ans:"19,500 × 0.70 = <b>13,650/µL</b> (lymphocytosis &gt; 4,000/µL) · causes: <b>pertussis</b>, <b>viral infections</b> (EBV, CMV, hepatitis), <b>TB</b>, toxoplasmosis, <b>CLL/lymphoma</b>, post-splenectomy, thyrotoxicosis, stress (transient)",
     pts:[P("ALC ≈ 13,650/µL","13,?6\\d\\d","13,?650"),G("Causes (any 3)",3,P("Pertussis","pertussis","bordetella","ไอกรน"),P("Viral infection (EBV/CMV)","viral","ebv","cmv","hepatit"),P("TB","\\btb\\b","tubercul"),P("CLL / lymphoma","cll","lymphoma"),P("Post-splenectomy / thyrotoxicosis","splenectom","thyro"))]}),
   B("95.3 What is the most likely diagnosis here and how is it confirmed?",2,{
     ans:"<b>Pertussis (whooping cough)</b> — <i>Bordetella pertussis</i> toxin causes marked lymphocytosis of small mature lymphocytes · confirm by <b>nasopharyngeal PCR</b> (culture early; serology later) · treat with <b>azithromycin</b>",
     pts:[P("Pertussis","pertussis","bordetella","ไอกรน"),P("Nasopharyngeal PCR / azithromycin","pcr","nasopharyn","azithromycin","macrolide")]})
  )}),

U({r:4,id:"bs096",num:"96",pg:30,title:"Immature granulocyte flagged by the analyzer — identify the cell",img:"ubs_c_meta",
  stem:`The hematology analyzer reports 'IG 4%' (immature granulocytes) for a 55-year-old woman with cellulitis and WBC 17,000/µL. The cell shown is one of them.`,
  interp:"ระบุ metamyelocyte และความหมายของ IG",
  summary:["Metamyelocyte: 10–16 µm nucleus รูปไต เว้า < 1/2 ไม่มี nucleolus cytoplasm ชมพูอ่อนมี secondary granule","IG = metamyelocyte + myelocyte + promyelocyte (ไม่รวม band)","IG สูงใน sepsis, เคมี/G-CSF recovery, ตั้งครรภ์, marrow infiltration, MPN"],
  parts:S(
   B("96.1 Identify the cell and give two features.",2,{
     ans:"<b>Neutrophilic metamyelocyte</b> — <b>kidney/bean-shaped nucleus</b> (indentation &lt; half the width), clumped chromatin, <b>no nucleolus</b>, pale pink cytoplasm with secondary granules",
     pts:[P("Metamyelocyte","metamyelocyt"),P("Kidney-shaped nucleus / no nucleolus","kidney","bean","indent","no nucleol")]}),
   B("96.2 Which cells are counted as 'immature granulocytes', and give two causes of a raised IG count.",3,{
     ans:"<b>Promyelocytes + myelocytes + metamyelocytes</b> (bands are not included) · causes: <b>severe bacterial infection/sepsis</b>, recovery after chemotherapy or <b>G-CSF</b>, <b>pregnancy</b>, steroids, <b>marrow infiltration</b>, <b>MPN (CML)</b>",
     pts:[P("Promyelocytes, myelocytes, metamyelocytes (not bands)","promyelocyt","myelocyt","metamyelocyt"),G("Causes (any 2)",2,P("Sepsis / infection","sepsis","infect"),P("G-CSF / chemo recovery","g-?csf","recover","chemo"),P("Pregnancy","pregnan"),P("Marrow infiltration","infiltrat","leukoerythro"),P("MPN / CML","cml","mpn"))]})
  )}),

U({id:"bs097",num:"97",pg:19,title:"Two microcytic smears side by side — iron deficiency or thalassemia trait?",img:["ubs_ida","ubs_thtrait"],
  stem:`Two women each have MCV 66 fL. Patient 1 (first picture): Hb 8.6 g/dL, RBC 3.9 ×10⁶/µL, RDW 22%. Patient 2 (second picture): Hb 11.9 g/dL, RBC 6.1 ×10⁶/µL, RDW 13.8%.`,
  interp:"เทียบ smear และ CBC แยก IDA กับ thalassemia trait (ตารางใน R03 หน้า 19)",
  summary:["IDA: RBC ต่ำ, RDW สูง, pencil cell มาก, basophilic stippling น้อย","Thal trait: RBC ปกติ/สูง, RDW ปกติ (เซลล์เล็กสม่ำเสมอ), target cell เด่นกว่า, stippling พบได้","Mentzer: 1 = 16.9 (> 13 → IDA), 2 = 10.8 (< 13 → thal)"],
  parts:S(
   B("97.1 Which patient most likely has iron deficiency and which has thalassemia trait? Give the smear features.",4,{
     ans:"<b>Patient 1 = iron deficiency anemia</b>: marked anisocytosis, <b>pencil cells</b>, few target cells · <b>Patient 2 = thalassemia trait</b>: <b>uniformly small</b> hypochromic cells, mild changes, a few target cells, no pencil-cell predominance",
     pts:[P("Patient 1 IDA","1.{0,25}(iron|ida)","first.{0,25}(iron|ida)"),P("Patient 2 thalassemia trait","2.{0,25}thalass","second.{0,25}thalass"),P("IDA: pencil cells / anisocytosis","pencil","aniso"),P("Trait: uniform small cells","uniform","similar","same size")]}),
   B("97.2 Calculate the Mentzer index for each and give two other distinguishing laboratory features.",3,{
     ans:"Mentzer = MCV/RBC: patient 1 = 66/3.9 = <b>16.9 (&gt; 13 → IDA)</b>; patient 2 = 66/6.1 = <b>10.8 (&lt; 13 → thalassemia)</b> · IDA: <b>low RBC count, high RDW, low ferritin</b>; trait: <b>normal/high RBC count, normal RDW, normal ferritin, abnormal Hb typing</b> (↑A2 in β-trait)",
     pts:[P("Mentzer 1 ≈ 17 (>13)","16\\.9","17","> ?13"),P("Mentzer 2 ≈ 11 (<13)","10\\.8","11","< ?13"),P("RDW / RBC count / ferritin / Hb typing","rdw","ferritin","hb typing","a2")]})
  )}),

U({id:"bs098",num:"98",pg:36,title:"Two spherocytic smears side by side — hereditary or autoimmune?",img:["ubs_hs","ubs_waiha"],
  stem:`Patient 1 (first picture) is a 17-year-old with lifelong jaundice and a father who had a splenectomy. Patient 2 (second picture) is a 33-year-old woman with 2 weeks of new jaundice and fatigue. Both have reticulocytes &gt; 8%.`,
  interp:"เทียบ HS กับ AIHA ทั้งสเมียร์และแลป (ตารางเปรียบเทียบ R03 หน้า 36)",
  summary:["HS: spherocyte ขนาดค่อนข้างเท่ากัน, DAT ลบ, MCHC > 36, EMA binding ↓/OFT ↑","WAIHA: microspherocyte ขนาดหลากหลาย + polychromasia/NRBC, DAT IgG+","Cold AIHA: agglutination เด่น, DAT C3d+"],
  parts:S(
   B("98.1 Give the most likely diagnosis for each patient and the smear clue.",3,{
     ans:"<b>Patient 1 = hereditary spherocytosis</b> — many <b>uniform</b> spherocytes · <b>Patient 2 = (warm) autoimmune hemolytic anemia</b> — <b>microspherocytes of variable size</b> with marked polychromasia and NRBCs",
     pts:[P("Patient 1 HS","1.{0,25}(hereditary|\\bhs\\b)","first.{0,25}(hereditary|\\bhs\\b)"),P("Patient 2 AIHA","2.{0,25}(aiha|autoimmune)","second.{0,25}(aiha|autoimmune)"),P("Uniform spherocytes vs variable microspherocytes","uniform","variab","micro")]}),
   B("98.2 Which tests separate them, and what results do you expect?",4,{
     ans:"<b>DAT</b>: negative in HS, <b>positive (IgG ± C3)</b> in AIHA · <b>MCHC</b> &gt; 36 g/dL in HS (normal–high in AIHA) · <b>EMA binding test</b> reduced (or osmotic fragility increased) in HS · family study supports HS",
     pts:[P("DAT negative in HS, positive in AIHA","dat","coomb","antiglobulin"),P("MCHC >36 in HS","mchc"),P("EMA binding / osmotic fragility in HS","ema","eosin","osmotic")]})
  )}),

U({id:"bs099",num:"99",pg:39,title:"Two small dense-looking abnormal red cells — which is which?",img:["ubs_waiha","ubs_mahacu"],
  stem:`Two patients have hemolysis with thrombocytopenia. Patient 1 (first picture): DAT positive, platelets 85,000/µL. Patient 2 (second picture): DAT negative, platelets 24,000/µL, creatinine 3.4 mg/dL after bloody diarrhea for 5 days.`,
  interp:"แยก spherocyte (immune) กับ schistocyte (mechanical/microangiopathic) และตั้งชื่อโรค",
  summary:["Spherocyte: กลม ทึบ ไม่มี central pallor (membrane หายจาก macrophage) → AIHA/HS","Schistocyte: เศษ RBC รูปหมวก สามเหลี่ยม (ถูก fibrin ตัดในหลอดเลือดเล็ก) → TMA/DIC","Bloody diarrhea + AKI + MAHA = STEC-HUS: supportive/dialysis, ไม่ให้ antibiotic/antimotility"],
  parts:S(
   B("99.1 Name the predominant abnormal red cell in each picture and the mechanism.",4,{
     ans:"<b>Picture 1: microspherocytes</b> — antibody-coated RBCs lose membrane to splenic macrophages (extravascular immune hemolysis) · <b>Picture 2: schistocytes</b> (helmet/triangular fragments) — RBCs sliced by fibrin strands/microthrombi in small vessels (microangiopathic, intravascular)",
     pts:[P("Picture 1 spherocytes","1.{0,20}spherocyt","first.{0,20}spherocyt","spherocyt"),P("Picture 2 schistocytes","2.{0,20}schistocyt","second.{0,20}schistocyt","schistocyt"),P("Spherocyte: membrane loss to macrophages","macrophage","membrane","spleen"),P("Schistocyte: fibrin / microthrombi shearing","fibrin","microthromb","shear","microangiopath")]}),
   B("99.2 What is the most likely diagnosis in patient 2 and one key point in management?",3,{
     ans:"<b>Shiga toxin–producing <i>E. coli</i> hemolytic uremic syndrome (STEC-HUS)</b> — MAHA + thrombocytopenia + AKI after bloody diarrhea · <b>supportive care with dialysis as needed</b>; <b>avoid antibiotics and antimotility drugs</b> (may increase toxin release); plasma exchange/eculizumab only for severe neurologic or atypical cases",
     pts:[P("HUS (STEC)","\\bhus\\b","hemolytic uremic","haemolytic uraemic","stec","shiga"),P("Supportive / dialysis; avoid antibiotics & antimotility","dialys","support","avoid.{0,20}antibiot","antimotil","loperamide")]})
  )}),

U({id:"bs100",num:"100",pg:15,title:"Reporting red cell morphology on a thalassemia smear",img:"ubs_hbh",
  stem:`You are reviewing the smear of a 19-year-old with Hb H disease (Hb 8.8 g/dL). About 40% of the RBCs are target cells and about 8% are teardrop cells. You need to write the RBC morphology report.`,
  interp:"การให้เกรด RBC morphology ตาม ICSH 2015 และสภาเทคนิคการแพทย์ไทย",
  summary:["ICSH 2015 กลุ่ม target/teardrop/spherocyte/elliptocyte ฯลฯ: 2+ = 5–20%, 3+ = > 20%","สภาเทคนิคการแพทย์: few 5–10%, 1+ 11–25%, 2+ 26–50%, 3+ 51–75%, 4+ 76–100% (aniso/poik/hypochromia)","NRBC รายงานต่อ 100 WBC; rouleaux/agglutination/parasite รายงานพบ/ไม่พบ"],
  parts:S(
   B("100.1 List the RBC abnormalities you would report.",3,{
     ans:"Hypochromia, microcytosis, marked anisocytosis and poikilocytosis with <b>target cells</b>, <b>teardrop cells</b>, schistocytes, spherocytes and <b>polychromasia</b>",
     pts:[P("Hypochromic microcytic / aniso-poik","hypochrom","microcyt","aniso","poik"),P("Target and teardrop cells","target","teardrop"),P("Polychromasia / schistocytes / spherocytes","polychrom","schistocyt","spherocyt")]}),
   B("100.2 Grade the target cells and teardrop cells using the ICSH 2015 scheme.",2,{
     ans:"ICSH (target, teardrop and similar cells): <b>2+ (moderate) = 5–20%</b>, <b>3+ (many) = &gt; 20%</b> → <b>target cells 3+</b> (40%), <b>teardrop cells 2+</b> (8%)",
     pts:[P("Target cells 3+ (>20%)","target.{0,20}3\\+","3\\+.{0,20}target","many"),P("Teardrop 2+ (5–20%)","teardrop.{0,20}2\\+","2\\+.{0,20}teardrop","moderate")]}),
   B("100.3 How are nucleated RBCs and rouleaux reported?",2,{
     ans:"<b>NRBC: number per 100 WBC</b> (and correct the WBC) · <b>rouleaux, agglutination and parasites: reported as 'present/seen'</b> (not graded)",
     pts:[P("NRBC per 100 WBC","100 wbc","per 100"),P("Rouleaux reported as present/seen","present","seen","found","พบ")]})
  )})
);
})();

/* Unit round OSCE — SI Med · Microscope · Blood smear (sub "PBS") · ชุดที่ 2/4 (bs026–bs050: oxidative/MAHA, reactive lymphocytes, acute & chronic leukemia, myelophthisis, plasma cell, ITP)
   แหล่ง R03 Chaicharoen / R04 Mindray (ดูหัวไฟล์ osu_micro_bs1.js) */
(function(){
const R3="R03 Atlas of Blood Smears in Common Hematologic Diseases (Chaicharoen)",R4="R04 Blood Cell Atlas (Mindray MC-80)";
const U=o=>{const r=o.r===4;const x=Object.assign({topic:"micro",sub:"PBS",opinion:"",file:r?"R04":"R03",page:String(o.pg)},o);x.notes=`📄 ที่มาของรูปและเนื้อหา: ${r?R4:R3} · หน้า PDF ${o.pg}`;delete x.r;delete x.pg;return x;};
const P=(t,...re)=>({t,re});
const G=(label,need,...opts)=>({label,need,opts});
function B(q,marks,o){const pts=[],kw=[];(o.pts||[]).forEach(p=>{if(p.opts){pts.push({label:p.label,any:p.opts.map(x=>x.t),need:p.need});kw.push(p.opts.map(x=>x.re));}else{pts.push(p.t);kw.push(p.re);}});
  const s=Object.assign({q,marks,tags:["micro"]},o);delete s.pts;s.points=pts;s.kw=kw;return s;}
const S=(...subs)=>[{subs}];
QB.push(

U({id:"bs026",num:"26",pg:38,title:"Three red cells after naphthalene exposure — identify A, B and C",img:"ubs_g6cu",
  stem:`A 6-year-old boy with known G6PD deficiency became jaundiced after playing with mothballs. Three red cells from his smear are shown (A, B, C).`,
  interp:"ระบุเซลล์จาก oxidative hemolysis และอธิบายกลไก",
  summary:["Ghost cell = intravascular hemolysis รุนแรง Hb รั่วหมด","Bite cell = macrophage ในม้ามตัด Heinz body ออก","Blister cell = Hb ถอยไปข้างหนึ่ง เหลือถุง membrane ว่าง"],
  parts:S(
   B("26.1 Identify cells A, B and C.",3,{
     ans:"<b>A</b> = <b>ghost cell</b> (pale empty membrane shell with a wisp of residual Hb) · <b>B</b> = <b>bite cell</b> (keratocyte/degmacyte — semicircular defect) · <b>C</b> = <b>blister cell</b> (hemi-ghost — Hb retracted to one side leaving a clear membrane pouch)",
     pts:[P("A ghost cell","ghost"),P("B bite cell","bite","keratocyt","degmacyt"),P("C blister cell","blister","hemi.?ghost")]}),
   B("26.2 Explain how cell B is formed.",2,{
     ans:"Oxidant stress denatures Hb into <b>Heinz bodies</b> attached to the membrane → <b>splenic macrophages pit (remove) the Heinz body</b> with a bit of membrane → semicircular 'bite'",
     pts:[P("Heinz bodies (denatured Hb)","heinz","denatur"),P("Removed by splenic macrophages","spleen","splenic","macrophage","pitting")]}),
   B("26.3 Which supravital stain shows the precipitated hemoglobin, and name two other oxidant triggers.",2,{
     ans:"<b>Heinz body stain</b> (crystal violet / methyl violet / new methylene blue) · triggers: <b>primaquine, dapsone, nitrofurantoin, rasburicase, methylene blue, sulfonamides</b>, fava beans, infection",
     pts:[P("Heinz body stain (crystal/methyl violet)","heinz","crystal violet","methyl violet","supravital"),G("Other triggers (any 2)",2,P("Primaquine","primaquine"),P("Dapsone","dapsone"),P("Nitrofurantoin","nitrofurantoin"),P("Rasburicase","rasburicase"),P("Methylene blue","methylene blue"),P("Sulfonamide","sulfa","cotrimox"),P("Fava beans","fava","ถั่วปากอ้า"),P("Infection","infect"))]})
  )}),

U({id:"bs027",num:"27",pg:39,title:"Fever, confusion and bruising in a young woman — blood smear",img:"ubs_maha",
  stem:`A 32-year-old woman has fever, intermittent confusion and bruises for 4 days. Hb 7.9 g/dL, reticulocytes 9%, WBC 9,400/µL, platelets 16,000/µL, LDH 1,350 U/L, creatinine 1.6 mg/dL. PT and aPTT normal. Her blood smear is shown.`,
  interp:"PBS ของ MAHA + clinical ของ TTP + การรักษาเร่งด่วน",
  summary:["MAHA + thrombocytopenia, PT/aPTT ปกติ → TMA (TTP/HUS)","PLASMIC score ≥ 6 = high risk; ADAMTS13 < 10% ยืนยัน","รักษา: plasma exchange ทุกวัน + corticosteroid + rituximab ± caplacizumab (ISTH 2020); ไม่ให้เกล็ดเลือดถ้าไม่มีเลือดออกรุนแรง"],
  parts:S(
   B("27.1 Describe the blood smear.",4,{
     ans:"<b>RBC:</b> normochromic, aniso/poik 2+, <b>schistocytes (fragmented RBCs: helmet cells, triangles)</b> &gt; 2 per oil-immersion field, microspherocytes, <b>polychromasia</b> · <b>WBC:</b> normal · <b>Platelet:</b> markedly <b>decreased</b> (occasional large platelet)",
     pts:[P("Schistocytes","schistocyt","fragment","helmet"),P("Polychromasia / microspherocytes","polychrom","spherocyt"),P("Thrombocytopenia","thrombocytopen","platelet.{0,20}(decreas|low)","plt.{0,10}(decreas|low)"),P("WBC normal","wbc.{0,20}normal","normal")]}),
   B("27.2 What is the most likely diagnosis? Which test confirms it?",3,{
     ans:"<b>Thrombotic thrombocytopenic purpura (TTP)</b> — microangiopathic hemolytic anemia + thrombocytopenia + neurological signs, normal coagulation · confirm with <b>ADAMTS13 activity &lt; 10%</b> (± anti-ADAMTS13 antibody); PLASMIC score helps while waiting",
     pts:[P("TTP","\\bttp\\b","thrombotic thrombocytopenic"),P("ADAMTS13 < 10%","adamts"),P("MAHA","maha","microangiopath")]}),
   B("27.3 What is the urgent treatment? What should you avoid?",3,{
     ans:"<b>Therapeutic plasma exchange</b> daily (start immediately; give FFP if PEX is delayed) + <b>corticosteroids</b> + <b>rituximab</b> ± <b>caplacizumab</b> · <b>avoid platelet transfusion</b> unless life-threatening bleeding (may worsen thrombosis)",
     pts:[P("Plasma exchange","plasma exchange","plasmapheres","\\bpex\\b","\\btpe\\b"),P("Steroid / rituximab / caplacizumab","steroid","prednis","methylpred","rituximab","caplacizumab"),P("Avoid platelet transfusion","avoid.{0,20}platelet","no platelet","ไม่ให้.{0,15}เกล็ด","ไม่ให้.{0,6}plt")]})
  )}),

U({id:"bs028",num:"28",pg:39,title:"Septic shock with oozing from line sites — blood smear",img:"ubs_maha",
  stem:`A 58-year-old man with biliary sepsis is in septic shock. Blood is oozing from IV sites. Platelets 38,000/µL, PT 24 s (control 12), aPTT 58 s, fibrinogen 90 mg/dL, D-dimer 18 µg/mL. His blood smear is shown.`,
  interp:"บอกความผิดปกติ + แยก DIC กับ TTP + การรักษา DIC",
  summary:["DIC: MAHA + thrombocytopenia + PT/aPTT ยาว + fibrinogen ต่ำ + D-dimer สูง (ISTH score ≥ 5 = overt)","TTP: coagulation ปกติ","รักษาสาเหตุ; ให้ plt ถ้า < 50k และเลือดออก, FFP ถ้า PT/aPTT ยาว, cryo ถ้า fibrinogen < 150 mg/dL"],
  parts:S(
   B("28.1 List the abnormal findings in the smear.",2,{
     ans:"<b>Schistocytes</b> (fragmented RBCs) with microspherocytes and polychromasia · <b>thrombocytopenia</b>",
     pts:[P("Schistocytes","schistocyt","fragment"),P("Thrombocytopenia","thrombocytopen","platelet.{0,20}(decreas|low)","plt.{0,10}(decreas|low)")]}),
   B("28.2 What is the diagnosis, and how do you tell it from TTP?",3,{
     ans:"<b>Disseminated intravascular coagulation (DIC)</b> due to sepsis (ISTH overt DIC score ≥ 5) · DIC activates coagulation + fibrinolysis → <b>prolonged PT/aPTT, low fibrinogen, high D-dimer</b>; TTP activates mainly platelets → <b>normal PT/aPTT and fibrinogen</b>, ADAMTS13 &lt; 10%",
     pts:[P("DIC","\\bdic\\b","disseminated"),P("Coagulation abnormal in DIC, normal in TTP","pt","aptt","fibrinogen","coagul")]}),
   B("28.3 How do you manage the bleeding?",3,{
     ans:"<b>Treat the cause</b> (antibiotics, biliary drainage, resuscitation) · <b>platelets</b> if &lt; 50,000/µL with bleeding · <b>FFP</b> 15 mL/kg for prolonged PT/aPTT with bleeding · <b>cryoprecipitate</b> (or fibrinogen concentrate) if fibrinogen &lt; 150 mg/dL",
     pts:[P("Treat the underlying sepsis","cause","underlying","antibiotic","drain","source"),P("Platelet transfusion if <50k + bleeding","platelet","plt"),P("FFP / cryoprecipitate","ffp","plasma","cryo","fibrinogen concentrate")]})
  )}),

U({id:"bs029",num:"29",pg:39,title:"Third-trimester pregnancy with headache and right upper quadrant pain — blood smear",img:"ubs_maha",
  stem:`A 29-year-old woman at 35 weeks of gestation has headache and epigastric/right upper quadrant pain. BP 168/112 mmHg, urine protein 3+. Hb 9.8 g/dL, platelets 62,000/µL, AST 310 U/L, ALT 260 U/L, LDH 980 U/L. Her blood smear is shown.`,
  interp:"MAHA ในหญิงตั้งครรภ์ไตรมาสสาม → HELLP syndrome และการจัดการ",
  summary:["HELLP = Hemolysis (schistocyte, LDH ↑) + Elevated Liver enzymes + Low Platelets","รักษา: MgSO4 ป้องกันชัก, ลด BP, คลอดเมื่อ ≥ 34 สัปดาห์ (stabilize ก่อน)","ddx: TTP, AFLP, HUS"],
  parts:S(
   B("29.1 What abnormal red cells are seen?",2,{
     ans:"<b>Schistocytes</b> (helmet/triangular fragments) with polychromasia — a microangiopathic picture; platelets reduced",
     pts:[P("Schistocytes","schistocyt","fragment","helmet"),P("Thrombocytopenia / MAHA picture","thrombocytopen","maha","microangiopath","platelet")]}),
   B("29.2 What is the diagnosis?",2,{
     ans:"<b>HELLP syndrome</b> (Hemolysis, Elevated Liver enzymes, Low Platelets) complicating <b>severe pre-eclampsia</b>",
     pts:[P("HELLP syndrome","hellp"),P("Severe pre-eclampsia","pre.?eclamp","preeclamp")]}),
   B("29.3 Outline the management.",3,{
     ans:"<b>Magnesium sulfate</b> for seizure prophylaxis · <b>antihypertensives</b> (IV labetalol / hydralazine, oral nifedipine) to BP &lt; 160/110 · stabilize then <b>deliver</b> (≥ 34 weeks) · platelet transfusion before cesarean if &lt; 50,000/µL · monitor for DIC, liver hematoma, renal failure",
     pts:[P("Magnesium sulfate","magnes","mgso4"),P("Antihypertensive","labetalol","hydralazine","nifedipine","antihypertens"),P("Delivery","deliver","คลอด","termination")]})
  )}),

U({id:"bs030",num:"30",pg:40,title:"How many fragmented cells are significant? — enlarged field",img:"ubs_mahacu",
  stem:`A 41-year-old woman with sudden thrombocytopenia (platelets 22,000/µL) has the oil-immersion field shown (enlarged). You must report the red cell morphology to the clinician.`,
  interp:"รู้เกณฑ์รายงาน schistocyte (ICSH 2015) และความสำคัญเชิงวินิจฉัย",
  summary:["ICSH 2015: schistocyte < 1% = few, 1–2% = moderate, > 2% = many","Diagnostic threshold ของ MAHA: ≥ 1% ของ RBC (> 2 ตัว/oil field)","นับเฉพาะ helmet, triangle, keratocyte, microspherocyte ที่มี fragment ร่วม"],
  parts:S(
   B("30.1 Name the abnormal red cells and the abnormal platelet finding.",2,{
     ans:"<b>Schistocytes</b> — helmet cells, triangular fragments, keratocytes (± microspherocytes) · platelets <b>decreased</b>",
     pts:[P("Schistocytes (helmet / triangle)","schistocyt","helmet","triang","fragment"),P("Thrombocytopenia","thrombocytopen","platelet.{0,20}(decreas|low|few)")]}),
   B("30.2 How are schistocytes graded (ICSH 2015) and what count supports MAHA?",3,{
     ans:"ICSH: <b>&lt; 1% few (1+), 1–2% moderate (2+), &gt; 2% many (3+)</b> · a count <b>≥ 1% of RBCs</b> (≈ &gt; 2 schistocytes per oil-immersion field) supports thrombotic microangiopathy in the right clinical setting",
     pts:[P("<1% / 1–2% / >2% grading","1 ?%","2 ?%","1-2"),P("≥1% (>2 per OIF) supports MAHA","1 ?%","2 per","per oil","oif")]}),
   B("30.3 Give three causes of this picture.",3,{
     ans:"<b>TTP</b> · <b>HUS</b> (STEC or complement-mediated) · <b>DIC</b> · HELLP / pre-eclampsia · malignant hypertension · disseminated cancer · mechanical heart valve / scleroderma renal crisis",
     pts:[G("Causes (any 3)",3,P("TTP","ttp"),P("HUS","hus"),P("DIC","dic"),P("HELLP / pre-eclampsia","hellp","eclamp"),P("Malignant hypertension","malignant hyper"),P("Cancer","cancer","malignan"),P("Mechanical valve","valve","prosthe"))]})
  )}),

U({id:"bs031",num:"31",pg:41,title:"High fever settling on day 5 with abdominal pain — blood smear",img:"ubs_reactl",
  stem:`A 21-year-old woman from Bangkok had high fever, headache and myalgia. On day 5 her fever has subsided but she has abdominal pain, vomiting and cold hands. Hct 49% (day 2: 40%), WBC 2,600/µL, platelets 38,000/µL. Her blood smear is shown.`,
  interp:"PBS ของ dengue (atypical lymph) + ระยะวิกฤต + การให้สารน้ำ (ไม่ซ้ำแนวข้อสอบเก่าที่ถามแค่ dx)",
  summary:["Dengue: leukopenia + atypical lymphocyte ≥ 15–20% + thrombocytopenia","Critical phase 24–48 ชม. รอบ defervescence: plasma leakage (Hct ↑ ≥ 20%)","Warning signs → isotonic crystalloid ตาม Hct/vital signs; หลีกเลี่ยง NSAID/IM injection"],
  parts:S(
   B("31.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> normochromic normocytic, no anisopoikilocytosis · <b>WBC:</b> decreased in number with <b>atypical (reactive) lymphocytes</b> — large cells with abundant deep-blue cytoplasm, some plasmacytoid · <b>Platelet:</b> <b>decreased</b>",
     pts:[P("RBC normochromic normocytic","normochrom","ncnc"),P("Atypical/reactive lymphocytes","atypical","reactive","variant lymph"),P("Leukopenia","leukopen","wbc.{0,20}(decreas|low)"),P("Thrombocytopenia","thrombocytopen","platelet.{0,20}(decreas|low)","plt.{0,10}(decreas|low)")]}),
   B("31.2 What is the diagnosis and phase of illness?",2,{
     ans:"<b>Dengue infection — critical (leakage) phase</b> with <b>warning signs</b> (abdominal pain, persistent vomiting, rising Hct with falling platelets, cool extremities) — impending dengue shock",
     pts:[P("Dengue","dengue","dhf","เดงกี"),P("Critical / leakage phase with warning signs","critical","leak","warning","shock")]}),
   B("31.3 Outline the immediate management.",3,{
     ans:"Admit · <b>isotonic crystalloid</b> (0.9% NaCl / Ringer) 5–7 mL/kg/h then titrate by <b>Hct, pulse, BP, urine output</b> · monitor Hct every 4–6 h · colloid if shock not improving · blood only if bleeding with falling Hct · <b>avoid NSAIDs/aspirin and IM injections</b>",
     pts:[P("Isotonic crystalloid IV fluid","crystalloid","nss","0\\.9","ringer","saline","iv fluid"),P("Monitor Hct / vital signs / urine output","hct","hematocrit","urine","vital"),P("Avoid NSAIDs / aspirin / IM","nsaid","aspirin","ibuprofen","im inj")]})
  )}),

U({id:"bs032",num:"32",pg:41,title:"University student with sore throat and swollen neck glands — blood smear",img:"ubs_reactl",
  stem:`A 19-year-old man has had fever and sore throat for 1 week with tender posterior cervical lymph nodes and a palpable spleen. Exudative tonsils. WBC 13,800/µL (lymphocytes 62%), ALT 140 U/L. His blood smear is shown.`,
  interp:"reactive lymphocytosis จาก infectious mononucleosis + ตรวจ + คำแนะนำ",
  summary:["IM: lymphocytosis + atypical lymph > 10%, LN posterior cervical, ม้ามโต, transaminase ↑","ตรวจ heterophile (Monospot; ลบเท็จช่วงแรก) หรือ EBV VCA IgM","ห้ามใช้ amoxicillin (ผื่น), งดกีฬาปะทะ ≥ 3–4 สัปดาห์ (ม้ามแตก)"],
  parts:S(
   B("32.1 List the abnormal findings.",2,{
     ans:"<b>Lymphocytosis with many reactive (variant/atypical) lymphocytes</b> — large, pleomorphic, abundant blue cytoplasm 'skirting' around adjacent RBCs",
     pts:[P("Reactive/atypical lymphocytes","reactive","atypical","variant"),P("Lymphocytosis / pleomorphic","lymphocytos","pleomorph","skirt")]}),
   B("32.2 What is the diagnosis and how would you confirm it?",3,{
     ans:"<b>Infectious mononucleosis (EBV)</b> · confirm with <b>heterophile antibody (Monospot)</b> — may be negative in the first week — or <b>EBV VCA-IgM</b> (± EBV PCR)",
     pts:[P("Infectious mononucleosis / EBV","mononucleos","ebv","epstein"),P("Monospot / heterophile / EBV VCA IgM","monospot","heterophil","vca","igm")]}),
   B("32.3 Give two pieces of advice for this patient.",2,{
     ans:"<b>Avoid amoxicillin/ampicillin</b> (widespread rash) · <b>avoid contact sports / heavy lifting for ≥ 3–4 weeks</b> (splenic rupture) · supportive care (antipyretics, fluids); steroids only for airway obstruction",
     pts:[P("Avoid amoxicillin/ampicillin","amoxicillin","ampicillin","penicillin"),P("Avoid contact sports (splenic rupture)","sport","spleen","splenic","rupture","กีฬา")]})
  )}),

U({id:"bs033",num:"33",pg:43,title:"Four mononuclear cells — identify A to D",img:"ubs_4cells",
  stem:`A 40-year-old man with fever and lymphadenopathy has a smear review. Four cells are shown (A–D).`,
  interp:"แยก normal lymphocyte / reactive lymphocyte / monocyte / blast",
  summary:["Reactive: ใหญ่ หลากหลาย cytoplasm น้ำเงินโอบ RBC","Monocyte: nucleus พับ lacy chromatin cytoplasm ฟ้าเทา มี vacuole","Blast: N:C สูง chromatin ละเอียด nucleoli เด่น เหมือนกันทั้งกลุ่ม (monomorphic)"],
  parts:S(
   B("33.1 Identify cells A, B, C and D.",4,{
     ans:"<b>A</b> = small (normal) lymphocyte · <b>B</b> = reactive (variant) lymphocyte · <b>C</b> = <b>monocyte</b> · <b>D</b> = <b>blast</b>",
     pts:[P("A normal lymphocyte","small lymph","normal lymph","mature lymph"),P("B reactive lymphocyte","reactive","atypical","variant"),P("C monocyte","monocyt"),P("D blast","blast")]}),
   B("33.2 Give three features that make D a blast rather than a reactive lymphocyte.",3,{
     ans:"<b>High N:C ratio with scant deep-blue cytoplasm</b> · <b>fine, open (dispersed) chromatin</b> · <b>prominent nucleoli</b> · cells look alike (monomorphic) in a clonal population, whereas reactive cells are pleomorphic",
     pts:[P("High N:C ratio / scant cytoplasm","n:c","n/c","nc ratio","scant"),P("Fine open chromatin","fine","open","dispers"),P("Prominent nucleoli","nucleol"),P("Monomorphic population","monomorph","uniform","same")]})
  )}),

U({id:"bs034",num:"34",pg:45,title:"Fever, gum bleeding and a very high white count — blood smear",img:"ubs_aml",
  stem:`A 55-year-old man has had fever, fatigue and gum bleeding for 3 weeks. Hb 7.0 g/dL, WBC 82,000/µL, platelets 24,000/µL. His blood smear is shown.`,
  interp:"PBS ของ AML (มี Auer rod) + ส่งตรวจครบชุด",
  summary:["AML: myeloblast เด่น ± Auer rod (pathognomonic ของ myeloid)","WHO 2022/ICC: blast ≥ 20% (ยกเว้นบาง defining genetic abnormalities)","Work-up: BM + flow + cytogenetics + molecular (FLT3, NPM1, CEBPA, IDH1/2, TP53), DIC & TLS labs"],
  parts:S(
   B("34.1 Describe the blood smear.",4,{
     ans:"<b>RBC:</b> normochromic normocytic · <b>WBC:</b> markedly increased, predominantly <b>blasts</b> (large cells, high N:C ratio, fine chromatin, prominent nucleoli, moderate basophilic cytoplasm, some with an <b>Auer rod</b>) · <b>Platelet:</b> decreased",
     pts:[P("RBC normochromic normocytic","normochrom","ncnc"),P("Leukocytosis with blasts predominant","blast"),P("Auer rod","auer"),P("Thrombocytopenia","thrombocytopen","platelet.{0,20}(decreas|low)","plt.{0,10}(decreas|low)")]}),
   B("34.2 What is the diagnosis?",2,{
     ans:"<b>Acute myeloid leukemia</b> — the Auer rod identifies the blasts as myeloid",
     pts:[P("AML","\\baml\\b","acute myeloid","acute myelogenous","acute myelocytic")]}),
   B("34.3 Which investigations are needed before treatment?",4,{
     ans:"<b>Bone marrow aspiration/biopsy</b> (blasts ≥ 20%) · <b>flow cytometry immunophenotyping</b> (CD13, CD33, CD117, MPO, CD34) · <b>cytogenetics/FISH</b> and <b>molecular tests</b> (FLT3, NPM1, CEBPA, IDH1/2, TP53) for risk group · <b>coagulation/DIC screen</b> · <b>tumour lysis labs</b> (uric acid, K, PO₄, Ca, creatinine) · HLA typing, echo, infection screen",
     pts:[P("Bone marrow aspiration/biopsy","bone marrow","\\bbm\\b","aspirat"),P("Flow cytometry immunophenotyping","flow","immunophenotyp"),P("Cytogenetics / molecular","cytogenetic","karyotyp","fish","flt3","npm1","molecular"),P("DIC / TLS labs","dic","coag","uric","lysis","tls")]})
  )}),

U({id:"bs035",num:"35",pg:45,title:"New leukemia with breathlessness and confusion — blood smear",img:"ubs_aml",
  stem:`A 60-year-old woman with newly diagnosed acute myeloid leukemia has WBC 168,000/µL. She becomes breathless (SpO₂ 88%) and confused. CXR shows bilateral interstitial infiltrates. Her blood smear is shown.`,
  interp:"บอกความผิดปกติสั้น ๆ + leukostasis + การรักษาฉุกเฉิน",
  summary:["Hyperleukocytosis (> 100k) + อาการปอด/สมอง = leukostasis = emergency","ลด blast ทันที: induction/hydroxyurea ± leukapheresis; ป้องกัน TLS","หลีกเลี่ยง PRC transfusion ที่ไม่จำเป็น (เพิ่ม viscosity); เกล็ดเลือดให้ได้"],
  parts:S(
   B("35.1 What are the abnormal cells?",2,{
     ans:"Numerous <b>myeloblasts</b> (with an Auer rod) — hyperleukocytosis",
     pts:[P("Blasts / myeloblasts","blast"),P("Auer rod / hyperleukocytosis","auer","hyperleuko","increas")]}),
   B("35.2 What complication has occurred?",2,{
     ans:"<b>Leukostasis</b> (symptomatic hyperleukocytosis) — blast plugging of pulmonary and cerebral microvessels",
     pts:[P("Leukostasis","leukostasis","leucostasis","hyperviscos","hyperleuk")]}),
   B("35.3 How would you manage it urgently?",4,{
     ans:"<b>Rapid cytoreduction</b>: start induction chemotherapy or <b>hydroxyurea</b> (± leukapheresis) · <b>prevent tumour lysis</b>: IV hydration, allopurinol or <b>rasburicase</b>, monitor electrolytes · <b>avoid unnecessary red-cell transfusion</b> (raises viscosity) · correct coagulopathy, keep platelets &gt; 30–50k · oxygen/ICU",
     pts:[P("Cytoreduction (chemo / hydroxyurea / leukapheresis)","hydroxyurea","cytoreduc","leukapher","induction","chemo"),P("TLS prevention (hydration, allopurinol/rasburicase)","hydrat","allopurinol","rasburicase","lysis"),P("Avoid red-cell transfusion","avoid.{0,20}(transfus|prc|red)","no prc","ไม่ให้เลือด")]})
  )}),

U({id:"bs036",num:"36",pg:46,title:"Bleeding gums, bruises and very low fibrinogen — blood smear",img:"ubs_apl",
  stem:`A 34-year-old woman has gum bleeding and large bruises for 5 days. Hb 8.1 g/dL, WBC 3,800/µL, platelets 21,000/µL, PT 19 s, aPTT 41 s, fibrinogen 85 mg/dL, D-dimer &gt; 20 µg/mL. Her blood smear is shown.`,
  interp:"PBS ของ APL (faggot cell) + medical emergency → ATRA ทันที",
  summary:["APL: abnormal promyelocyte granule หยาบแน่น, nucleus bilobed/reniform, faggot cell (Auer rod เป็นมัด)","t(15;17) PML::RARA; CD34−, HLA-DR−","ให้ ATRA ทันทีที่สงสัย + cryo/FFP/plt (fibrinogen > 150 mg/dL, plt > 30–50k) — ATRA + ATO ใน low/intermediate risk"],
  parts:S(
   B("36.1 Describe the abnormal cells.",3,{
     ans:"Many <b>abnormal promyelocytes</b>: abundant cytoplasm packed with <b>coarse azurophilic granules</b>, irregular <b>kidney-shaped/bilobed</b> nuclei; a <b>'faggot cell'</b> with bundles of <b>Auer rods</b> · thrombocytopenia",
     pts:[P("Abnormal promyelocytes with coarse granules","promyelocyt","granul"),P("Bilobed / reniform nuclei","bilob","kidney","renifor"),P("Faggot cell / multiple Auer rods","faggot","auer")]}),
   B("36.2 What is the diagnosis and the genetic lesion?",2,{
     ans:"<b>Acute promyelocytic leukemia (APL)</b> with DIC · <b>t(15;17)(q24;q21) — PML::RARA</b>",
     pts:[P("APL","\\bapl\\b","promyelocytic","m3"),P("t(15;17) PML::RARA","15;17","pml","rara")]}),
   B("36.3 What must be done immediately?",3,{
     ans:"Start <b>all-trans retinoic acid (ATRA) as soon as APL is suspected</b> — before genetic confirmation · aggressive support: <b>cryoprecipitate/fibrinogen</b> to keep fibrinogen &gt; 150 mg/dL, <b>platelets</b> &gt; 30–50k, FFP · avoid invasive procedures (LP, central line if possible) · definitive: ATRA + <b>arsenic trioxide</b> (low/intermediate risk) ± chemotherapy (high risk)",
     pts:[P("ATRA immediately on suspicion","atra","retinoic","tretinoin"),P("Cryo / platelets / FFP support","cryo","fibrinogen","platelet","ffp"),P("Arsenic trioxide","arsenic","ato")]})
  )}),

U({id:"bs037",num:"37",pg:47,title:"Breathless and gaining weight on day 6 of leukemia treatment — blood smear at diagnosis",img:"ubs_apl",
  stem:`A 28-year-old man is on day 6 of ATRA plus arsenic trioxide. He develops fever, dyspnea, a 4-kg weight gain, pleural effusions and rising creatinine. The smear at diagnosis is shown.`,
  interp:"รู้จักเซลล์ใน APL และภาวะแทรกซ้อน differentiation syndrome",
  summary:["Differentiation syndrome: ไข้, หอบ, น้ำหนักขึ้น, effusion, hypotension, AKI ช่วง 1–3 สัปดาห์แรก","รักษา: dexamethasone 10 mg IV q12h; หยุด ATRA/ATO ชั่วคราวถ้ารุนแรง","อาจให้ prednisolone ป้องกันใน WBC สูง"],
  parts:S(
   B("37.1 Name the characteristic cell in the smear.",2,{
     ans:"<b>Faggot cell</b> — abnormal promyelocyte containing <b>bundles of Auer rods</b> (+ hypergranular abnormal promyelocytes)",
     pts:[P("Faggot cell / Auer rods","faggot","auer"),P("Abnormal promyelocytes","promyelocyt")]}),
   B("37.2 What complication is he having?",2,{
     ans:"<b>Differentiation syndrome</b> (retinoic acid / APL differentiation syndrome)",
     pts:[P("Differentiation syndrome","differentiation","retinoic acid syndrome")]}),
   B("37.3 How is it treated?",3,{
     ans:"<b>Dexamethasone 10 mg IV every 12 h</b> until resolution · supportive care (oxygen, diuretics) · <b>temporarily hold ATRA/ATO</b> if severe · hydroxyurea if leukocytosis",
     pts:[P("Dexamethasone 10 mg IV q12h","dexamethasone","steroid"),P("Hold ATRA/ATO if severe","hold","stop","withhold","interrupt"),P("Supportive (O2 / diuretic)","diuret","furosemide","oxygen","support")]})
  )}),

U({id:"bs038",num:"38",pg:48,title:"Teenager with bone pain, fever and a mediastinal shadow — blood smear",img:"ubs_all",
  stem:`An 18-year-old man has bone pain, fever and fatigue for 2 weeks. Hb 7.6 g/dL, WBC 46,000/µL, platelets 30,000/µL, LDH 1,100 U/L. Chest X-ray shows a widened mediastinum. His blood smear is shown.`,
  interp:"PBS ของ ALL + immunophenotype + หลักการรักษาที่ต้องรู้",
  summary:["ALL: lymphoblast ขนาดเล็ก-กลาง N:C สูงมาก cytoplasm น้อยไม่มี granule ไม่มี Auer rod","Mediastinal mass ชวน T-ALL (cCD3, CD7) · B-ALL: CD19, CD10, CD22, CD79a, TdT","ต้องมี CNS prophylaxis (intrathecal) และป้องกัน TLS"],
  parts:S(
   B("38.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> normochromic normocytic · <b>WBC:</b> increased; predominantly <b>lymphoblasts</b> — small-to-medium, very high N:C ratio, scant agranular blue cytoplasm, condensed-to-fine chromatin, indistinct nucleoli, <b>no Auer rods</b> · <b>Platelet:</b> decreased",
     pts:[P("Lymphoblasts predominant","lymphoblast","blast"),P("Scant agranular cytoplasm, no Auer rods","no auer","agranular","scant"),P("Thrombocytopenia / RBC NCNC","thrombocytopen","normochrom","platelet")]}),
   B("38.2 What is the likely diagnosis, and which markers would you expect on flow cytometry?",3,{
     ans:"<b>Acute lymphoblastic leukemia</b> — mediastinal mass suggests <b>T-ALL</b>: <b>cytoplasmic CD3, CD7</b>, CD2, CD5, CD1a, <b>TdT</b>, CD34 (B-ALL would be CD19, CD10, CD22, CD79a, TdT)",
     pts:[P("ALL (T-ALL)","\\ball\\b","lymphoblastic","t-all"),P("T markers (cCD3, CD7, TdT)","cd3","cd7","tdt","cd5","cd1a"),P("B markers mentioned for comparison","cd19","cd10","cd22","cd79")]}),
   B("38.3 Name two essential components of treatment besides systemic chemotherapy.",2,{
     ans:"<b>CNS-directed therapy</b> (intrathecal methotrexate ± cytarabine/hydrocortisone) · <b>tumour lysis prophylaxis</b> (hydration, allopurinol/rasburicase) · (Ph+ ALL → add a TKI)",
     pts:[P("CNS prophylaxis / intrathecal","intrathecal","cns","\\bit\\b"),P("TLS prophylaxis","lysis","tls","allopurinol","rasburicase","hydrat")]})
  )}),

U({id:"bs039",num:"39",pg:49,title:"Three types of lymphoblasts — identify A, B and C",img:"ubs_allfab",
  stem:`Smears from three patients with acute lymphoblastic leukemia are shown (A, B, C).`,
  interp:"แยก FAB L1/L2/L3 และรู้ว่า L3 = Burkitt",
  summary:["L1: เล็ก เหมือนกัน N:C สูงมาก nucleoli ไม่ชัด · L2: ใหญ่ หลากหลาย nucleus มีรอยแยก nucleoli เด่น","L3 (Burkitt): cytoplasm น้ำเงินเข้ม มี vacuole ชัด → MYC t(8;14)","Burkitt โตเร็วมาก → TLS สูงที่สุด"],
  parts:S(
   B("39.1 Classify A, B and C by the FAB scheme.",3,{
     ans:"<b>A</b> = ALL-<b>L1</b> (small, uniform blasts, scant cytoplasm) · <b>B</b> = ALL-<b>L2</b> (large, heterogeneous, irregular/clefted nuclei, prominent nucleoli) · <b>C</b> = ALL-<b>L3</b> (large uniform blasts, intensely blue cytoplasm with prominent vacuoles)",
     pts:[P("A L1","a.{0,10}l1","l1"),P("B L2","b.{0,10}l2","l2"),P("C L3","c.{0,10}l3","l3")]}),
   B("39.2 Which disease does C represent, and what is its characteristic genetic change?",2,{
     ans:"<b>Burkitt leukemia/lymphoma</b> (mature B-cell) · <b>MYC rearrangement — t(8;14)</b> (or t(2;8), t(8;22))",
     pts:[P("Burkitt","burkitt"),P("MYC / t(8;14)","myc","8;14")]}),
   B("39.3 Which metabolic emergency is most likely when treatment of C starts, and how is it prevented?",2,{
     ans:"<b>Tumour lysis syndrome</b> (hyperuricemia, hyperkalemia, hyperphosphatemia, hypocalcemia, AKI) → aggressive <b>IV hydration + rasburicase</b> (or allopurinol), close electrolyte monitoring",
     pts:[P("Tumour lysis syndrome","lysis","tls"),P("Hydration + rasburicase/allopurinol","rasburicase","allopurinol","hydrat")]})
  )}),

U({id:"bs040",num:"40",pg:48,title:"Adult leukemia with a fusion gene found on PCR — blood smear",img:"ubs_all",
  stem:`A 46-year-old man has the blood smear shown. Flow cytometry: CD19+, CD10+, CD22+, TdT+, CD34+. RT-PCR detects the BCR::ABL1 (p190) transcript.`,
  interp:"รู้จัก Ph-positive B-ALL ในผู้ใหญ่และหลักการรักษา",
  summary:["Ph+ ALL พบ ~25–30% ของ ALL ผู้ใหญ่ (p190 เด่น)","รักษา: TKI (imatinib/dasatinib/ponatinib) + steroid/chemo ± blinatumomab → allo-HSCT ใน CR1 ตามความเสี่ยง","ติดตาม BCR::ABL1 MRD"],
  parts:S(
   B("40.1 What cells predominate?",2,{
     ans:"<b>Lymphoblasts</b> — uniform, high N:C ratio, scant agranular cytoplasm, no Auer rods",
     pts:[P("Lymphoblasts","lymphoblast","blast")]}),
   B("40.2 What is the full diagnosis?",2,{
     ans:"<b>Philadelphia chromosome–positive B-lymphoblastic leukemia</b> (B-ALL with t(9;22) BCR::ABL1)",
     pts:[P("B-ALL","b.?all","b.?lymphoblastic","\\ball\\b"),P("Philadelphia positive / BCR::ABL1","philadelphia","ph\\+","ph-pos","bcr","9;22")]}),
   B("40.3 What drug class changes the treatment, and what is the consolidation option for fit patients?",3,{
     ans:"<b>Tyrosine kinase inhibitor</b> — imatinib, <b>dasatinib</b> or <b>ponatinib</b> — combined with steroids/chemotherapy (or blinatumomab) · fit patients: <b>allogeneic stem cell transplantation in first remission</b> (guided by MRD) · plus CNS prophylaxis",
     pts:[P("TKI (imatinib/dasatinib/ponatinib)","tki","tyrosine","imatinib","dasatinib","ponatinib","nilotinib"),P("Allogeneic HSCT in CR1","hsct","transplant","stem cell","allogeneic")]})
  )}),

U({id:"bs041",num:"41",pg:50,title:"Left upper quadrant fullness and a white count of 180,000 — blood smear",img:"ubs_cml",
  stem:`A 45-year-old man has early satiety and left upper quadrant fullness for 2 months. The spleen is 12 cm below the costal margin. Hb 10.5 g/dL, WBC 180,000/µL, platelets 620,000/µL. His blood smear is shown.`,
  interp:"PBS ของ CML chronic phase + ยืนยัน + การรักษา",
  summary:["CML: granulocyte ทุกระยะ (myelocyte bulge), basophilia, eosinophilia, blast < 10%, thrombocytosis","ยืนยัน BCR::ABL1 (FISH/RT-PCR) / Ph chromosome","Imatinib (หรือ 2nd-gen TKI); ติดตาม BCR::ABL1 IS ทุก 3 เดือน (MMR ≤ 0.1% ใน 12 เดือน)"],
  parts:S(
   B("41.1 Describe the blood smear.",4,{
     ans:"<b>RBC:</b> normochromic normocytic · <b>WBC:</b> markedly increased with the <b>whole spectrum of granulocytes</b> — myelocytes, metamyelocytes, bands, segmented neutrophils, few promyelocytes, blasts &lt; 5% · <b>basophilia and eosinophilia</b> · <b>Platelet:</b> increased (thrombocytosis)",
     pts:[P("Leukocytosis with all stages of granulocytes (myelocyte, metamyelocyte)","myelocyt","all stage","every stage","spectrum"),P("Basophilia","basophil"),P("Eosinophilia","eosinophil"),P("Thrombocytosis","thrombocytos","platelet.{0,15}increas")]}),
   B("41.2 What is the diagnosis and how is it confirmed?",3,{
     ans:"<b>Chronic myeloid leukemia, chronic phase</b> · confirm <b>BCR::ABL1</b> by <b>FISH or RT-PCR</b> (Philadelphia chromosome t(9;22) on bone-marrow cytogenetics)",
     pts:[P("CML chronic phase","\\bcml\\b","chronic myeloid","chronic myelogenous"),P("BCR::ABL1 / Philadelphia / t(9;22)","bcr","philadelphia","9;22")]}),
   B("41.3 What is the first-line treatment and how is response monitored?",3,{
     ans:"<b>Tyrosine kinase inhibitor</b> — imatinib 400 mg/day (or dasatinib/nilotinib) · monitor <b>quantitative BCR::ABL1 (IS) RT-PCR every 3 months</b>: aim ≤ 10% at 3 mo, ≤ 1% at 6 mo, <b>≤ 0.1% (major molecular response) at 12 mo</b>",
     pts:[P("TKI / imatinib","imatinib","tki","dasatinib","nilotinib"),P("BCR::ABL1 qPCR monitoring / MMR","pcr","mmr","molecular","0\\.1")]})
  )}),

U({id:"bs042",num:"42",pg:50,title:"Very high white count — leukemia or infection? — blood smear",img:"ubs_cml",
  stem:`A 52-year-old woman's WBC is 95,000/µL on a routine check. She has no fever. Her blood smear is shown. The intern says it could be a 'leukemoid reaction'.`,
  interp:"แยก CML จาก leukemoid reaction",
  summary:["CML: basophilia, eosinophilia, myelocyte > metamyelocyte (bulge), LAP score ต่ำ, ม้ามโต, BCR::ABL1+","Leukemoid: มีการติดเชื้อ/อักเสบ, toxic granulation/Döhle, ไม่มี basophilia, LAP สูง","WBC > 50,000 ที่ไม่มีสาเหตุ → ตรวจ BCR::ABL1"],
  parts:S(
   B("42.1 Name two features in this smear that favour CML.",2,{
     ans:"<b>Basophilia</b> (and eosinophilia) · <b>myelocyte 'bulge'</b> — many myelocytes (more than metamyelocytes) with the full spectrum of maturation · thrombocytosis · no toxic granulation",
     pts:[G("CML features (any 2)",2,P("Basophilia","basophil"),P("Eosinophilia","eosinophil"),P("Myelocyte bulge / all stages","myelocyt","bulge","spectrum"),P("Thrombocytosis","thrombocytos"),P("No toxic changes","no toxic"))]}),
   B("42.2 What would point instead to a leukemoid reaction?",3,{
     ans:"An obvious cause (severe infection, <i>C. difficile</i>, malignancy, hemorrhage) · <b>toxic granulation, Döhle bodies, vacuolation</b> · mainly bands/metamyelocytes, few myelocytes, <b>no basophilia</b> · <b>high leukocyte alkaline phosphatase (LAP) score</b> (low in CML) · no splenomegaly · <b>BCR::ABL1 negative</b>",
     pts:[P("Toxic granulation / Döhle / vacuoles","toxic","dohle","döhle","vacuol"),P("High LAP score (low in CML)","lap","alkaline phosphatase"),P("Identifiable cause (infection) / no basophilia / BCR::ABL1 negative","infect","cause","no basophil","bcr")]}),
   B("42.3 Which single test settles the question?",1,{
     ans:"<b>BCR::ABL1</b> — peripheral blood FISH or quantitative RT-PCR",
     pts:[P("BCR::ABL1 FISH/PCR","bcr","philadelphia")]})
  )}),

U({id:"bs043",num:"43",pg:52,title:"Elderly man with painless neck lumps and lymphocytosis — blood smear",img:"ubs_cll",
  stem:`A 68-year-old man has painless cervical and axillary lymphadenopathy for 6 months. Hb 12.6 g/dL, WBC 58,000/µL (lymphocytes 88%), platelets 168,000/µL. His blood smear is shown.`,
  interp:"PBS ของ CLL + immunophenotype + ภาวะแทรกซ้อน",
  summary:["CLL: small mature lymphocytes chromatin เป็นก้อน (soccer ball), smudge cells","iwCLL: clonal B lymphocytes ≥ 5,000/µL ≥ 3 เดือน; flow CD5+ CD19+ CD23+ CD200+ CD20/sIg dim (Matutes score ≥ 4)","ภาวะแทรกซ้อน: AIHA, ITP, hypogammaglobulinemia/ติดเชื้อ, Richter transformation"],
  parts:S(
   B("43.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> normochromic normocytic · <b>WBC:</b> markedly increased — <b>small mature lymphocytes</b> with scant cytoplasm and coarsely clumped ('soccer-ball') chromatin; many <b>smudge (basket) cells</b> · <b>Platelet:</b> adequate",
     pts:[P("Lymphocytosis of small mature lymphocytes","small.{0,15}lymph","mature lymph","lymphocytos"),P("Clumped (soccer-ball) chromatin","clump","soccer","cracked"),P("Smudge cells","smudge","basket","gumprecht")]}),
   B("43.2 What is the diagnosis, and what immunophenotype confirms it?",3,{
     ans:"<b>Chronic lymphocytic leukemia</b> · flow cytometry: <b>CD19+, CD5+, CD23+, CD200+</b>, CD20 dim, <b>dim surface Ig with κ or λ restriction</b>, FMC7−, CD79b weak (Matutes score ≥ 4)",
     pts:[P("CLL","\\bcll\\b","chronic lymphocytic"),P("CD5 + CD19 + CD23","cd5","cd23","cd19","cd200"),P("Light chain restriction / dim sIg","kappa","lambda","κ","λ","light chain","restrict")]}),
   B("43.3 Give three complications of this disease.",3,{
     ans:"<b>Autoimmune hemolytic anemia</b> (10–25%) · <b>immune thrombocytopenia</b> · <b>hypogammaglobulinemia → recurrent infections</b> · pure red cell aplasia · <b>Richter transformation</b> (DLBCL) · second cancers",
     pts:[G("Complications (any 3)",3,P("AIHA","aiha","autoimmune hemoly","hemolys"),P("ITP","itp","thrombocytopen"),P("Infections / hypogammaglobulinemia","infect","hypogamma"),P("Richter transformation","richter","transform"),P("Pure red cell aplasia","pure red","prca"),P("Second cancers","second","malignan"))]})
  )}),

U({id:"bs044",num:"44",pg:52,title:"Lymphocytosis found at a health check — when to treat? — blood smear",img:"ubs_cll",
  stem:`A 72-year-old woman has lymphocytes 32,000/µL at a health check. Flow cytometry confirms CLL. She has 2 small cervical nodes, no splenomegaly, Hb 13.1 g/dL, platelets 190,000/µL and no symptoms. Her smear is shown.`,
  interp:"รู้ staging (Rai/Binet) และข้อบ่งชี้การรักษาตาม iwCLL",
  summary:["Rai 0–IV / Binet A–C · ระยะต้นไม่มีอาการ → watch & wait","ข้อบ่งชี้รักษา (iwCLL 2018): marrow failure (Hb < 10, plt < 100k), ม้ามโต ≥ 6 ซม./ก้อนน้ำเหลือง ≥ 10 ซม. หรือโตเร็ว, LDT < 6 เดือน, autoimmune cytopenia ดื้อ steroid, B symptoms","MBL = clonal B < 5,000/µL ไม่มี LAD/cytopenia"],
  parts:S(
   B("44.1 Name the characteristic artefactual cell seen in this smear.",1,{
     ans:"<b>Smudge (basket) cells</b> — fragile CLL lymphocytes crushed during smear preparation",
     pts:[P("Smudge / basket cells","smudge","basket","gumprecht")]}),
   B("44.2 What is her Rai and Binet stage?",2,{
     ans:"<b>Rai stage I</b> (lymphocytosis + lymphadenopathy) · <b>Binet stage A</b> (&lt; 3 lymphoid areas, Hb ≥ 10, plt ≥ 100k)",
     pts:[P("Rai I","rai.{0,6}(i\\b|1)","stage i\\b"),P("Binet A","binet.{0,6}a")]}),
   B("44.3 Does she need treatment now? List three indications for starting treatment.",4,{
     ans:"<b>No — watch and wait</b> (early, asymptomatic) · iwCLL indications: <b>progressive marrow failure</b> (Hb &lt; 10 g/dL or platelets &lt; 100,000) · <b>massive/progressive splenomegaly (≥ 6 cm) or lymphadenopathy (≥ 10 cm)</b> · <b>lymphocyte doubling time &lt; 6 months</b> · autoimmune cytopenia not responding to steroids · <b>constitutional (B) symptoms</b>",
     pts:[P("Watch and wait","watch","observ","wait","ไม่ต้องรักษา"),G("Indications (any 3)",3,P("Marrow failure: Hb <10 / plt <100k","marrow failure","hb ?< ?10","100"),P("Massive / progressive spleen or nodes","spleen","splenomeg","lymph.{0,10}node","bulky","massive"),P("Lymphocyte doubling time <6 months","doubling"),P("Refractory autoimmune cytopenia","autoimmune"),P("B symptoms","b symptom","fever","sweat","weight"))]})
  )}),

U({id:"bs045",num:"45",pg:53,title:"Back pain, weight loss and immature blood cells — blood smear",img:"ubs_myelo",
  stem:`A 54-year-old woman treated for breast cancer 4 years ago now has back pain and weight loss. Hb 8.6 g/dL, WBC 11,200/µL, platelets 88,000/µL, ALP 640 U/L. Her blood smear is shown.`,
  interp:"PBS แบบ leukoerythroblastic → myelophthisis จากมะเร็งแพร่กระจายสู่ไขกระดูก",
  summary:["Leukoerythroblastic = NRBC + immature granulocyte + teardrop cells","สาเหตุ: มะเร็งแพร่ (เต้านม ต่อมลูกหมาก ปอด), myelofibrosis, TB/เชื้อรา, lymphoma","BM aspiration มัก dry tap → ต้องทำ trephine biopsy"],
  parts:S(
   B("45.1 Describe the blood smear.",4,{
     ans:"<b>RBC:</b> normochromic, anisopoikilocytosis with many <b>teardrop cells (dacrocytes)</b>, ovalocytes, polychromasia, <b>NRBC</b> · <b>WBC:</b> <b>immature granulocytes</b> — myelocytes, metamyelocytes (left shift) · <b>Platelet:</b> decreased with large/giant platelets",
     pts:[P("Teardrop cells","teardrop","dacrocyt","tear drop"),P("NRBC","nrbc","nucleated"),P("Immature granulocytes (myelocytes)","myelocyt","immature","left shift"),P("Thrombocytopenia / giant platelets","thrombocytopen","giant","large plat")]}),
   B("45.2 What is this blood picture called, and what is the most likely cause here?",2,{
     ans:"<b>Leukoerythroblastic picture</b> — <b>myelophthisis</b> due to <b>bone marrow infiltration by metastatic breast cancer</b>",
     pts:[P("Leukoerythroblastic","leukoerythroblast","leucoerythroblast"),P("Marrow infiltration by metastatic cancer (myelophthisis)","myelophth","metasta","infiltrat")]}),
   B("45.3 How would you confirm it? Give two other causes of this picture.",3,{
     ans:"<b>Bone marrow trephine biopsy</b> (aspirate is often a dry tap) with immunohistochemistry · other causes: <b>primary myelofibrosis</b>, granulomatous infection (TB, disseminated fungal), lymphoma/myeloma, Gaucher disease, severe hemolysis or hypoxia",
     pts:[P("Bone marrow (trephine) biopsy","biops","trephine","bone marrow"),G("Other causes (any 2)",2,P("Myelofibrosis","myelofibros"),P("TB / fungal","\\btb\\b","tubercul","fung"),P("Lymphoma / myeloma","lymphoma","myeloma"),P("Gaucher","gaucher"),P("Hemolysis / hypoxia / sepsis","hemoly","hypox","sepsis"))]})
  )}),

U({id:"bs046",num:"46",pg:53,title:"Massive spleen and a dry tap — blood smear",img:"ubs_myelo",
  stem:`A 66-year-old man has fatigue, night sweats and a spleen 18 cm below the costal margin. Hb 8.9 g/dL, WBC 14,500/µL, platelets 140,000/µL. Bone marrow aspiration was a 'dry tap'. His blood smear is shown.`,
  interp:"leukoerythroblastic + ม้ามโตมาก + dry tap → primary myelofibrosis",
  summary:["Teardrop cell เกิดจาก RBC บีบผ่าน fibrotic marrow และ extramedullary hematopoiesis","PMF driver: JAK2 V617F (~55%), CALR (~25%), MPL (~5%)","รักษาตาม DIPSS-plus: ruxolitinib ลดม้าม/อาการ, allo-HSCT ในความเสี่ยงสูง"],
  parts:S(
   B("46.1 List the abnormal findings.",3,{
     ans:"<b>Teardrop cells</b>, ovalocytes, polychromasia, <b>NRBC</b> · <b>immature myeloid cells</b> (myelocytes) · large platelets — a leukoerythroblastic picture",
     pts:[P("Teardrop cells","teardrop","dacrocyt"),P("NRBC","nrbc","nucleated"),P("Immature granulocytes","myelocyt","immature")]}),
   B("46.2 What is the most likely diagnosis? Which mutations would you test?",3,{
     ans:"<b>Primary myelofibrosis</b> · driver mutations: <b>JAK2 V617F</b>, <b>CALR</b>, <b>MPL</b> (triple-negative in ~10%)",
     pts:[P("Primary myelofibrosis","myelofibros","\\bpmf\\b"),P("JAK2 / CALR / MPL","jak2","calr","mpl")]}),
   B("46.3 Why does the aspirate fail, and how is the diagnosis made?",2,{
     ans:"Marrow <b>reticulin/collagen fibrosis</b> prevents aspiration → diagnose with <b>bone marrow trephine biopsy</b> (fibrosis grade, atypical megakaryocytes)",
     pts:[P("Fibrosis","fibros","reticulin","collagen"),P("Trephine biopsy","biops","trephine")]})
  )}),

U({id:"bs047",num:"47",pg:54,title:"Back pain, constipation and renal impairment in an older man — blood smear",img:"ubs_mm",
  stem:`A 66-year-old man has back pain for 3 months, constipation and thirst. Hb 8.8 g/dL, creatinine 2.4 mg/dL, calcium 12.1 mg/dL, total protein 10.2 g/dL, albumin 3.0 g/dL. His blood smear is shown.`,
  interp:"PBS: rouleaux + circulating plasma cell → multiple myeloma + work-up ตาม IMWG",
  summary:["Rouleaux = RBC เรียงเป็นตั้งเหรียญ จาก paraprotein ลด zeta potential (พื้นหลังอาจออกฟ้า)","IMWG: BM clonal PC ≥ 10% + CRAB หรือ SLiM","Work-up: SPEP + IFE, serum FLC, UPEP/IFE, BM, low-dose whole-body CT, β2M/LDH (R-ISS)"],
  parts:S(
   B("47.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> normochromic normocytic with marked <b>rouleaux formation</b> (stacks of coins) · <b>WBC:</b> normal number; a <b>plasma cell</b> is seen (eccentric nucleus, deep-blue cytoplasm, perinuclear hof) · <b>Platelet:</b> adequate",
     pts:[P("Rouleaux formation","rouleaux","stack","coin"),P("Plasma cell","plasma cell","plasmacyt"),P("RBC NCNC / WBC & platelets otherwise normal","normochrom","ncnc","normal")]}),
   B("47.2 What is the diagnosis? Name the features of end-organ damage present.",3,{
     ans:"<b>Multiple myeloma</b> with <b>CRAB</b>: hyper<b>C</b>alcemia (12.1), <b>R</b>enal impairment (Cr 2.4), <b>A</b>nemia (Hb 8.8), <b>B</b>one disease (back pain — lytic lesions likely)",
     pts:[P("Multiple myeloma","myeloma","\\bmm\\b"),P("CRAB features","crab","hypercal","renal","anemia","bone")]}),
   B("47.3 List four investigations to confirm and stage the disease.",4,{
     ans:"<b>SPEP + serum immunofixation</b> (M-protein) · <b>serum free light chains</b> (κ/λ ratio) · 24-h UPEP/IFE · <b>bone marrow aspiration/biopsy</b> (clonal plasma cells ≥ 10%, FISH for high-risk lesions) · <b>low-dose whole-body CT</b> (or PET-CT/MRI) for lytic lesions · β2-microglobulin, albumin, LDH (R-ISS)",
     pts:[P("SPEP / immunofixation","spep","electrophores","immunofix","\\bife\\b"),P("Serum free light chains","free light","flc"),P("Bone marrow","bone marrow","\\bbm\\b"),P("Skeletal imaging (WB-CT / skeletal survey / MRI / PET)","ct","skeletal","mri","pet","survey","x-?ray")]})
  )}),

U({id:"bs048",num:"48",pg:54,title:"Very high ESR in a woman with chronic liver disease — blood smear",img:"ubs_mm",
  stem:`A 50-year-old woman with chronic hepatitis B and cirrhosis has ESR 118 mm/h and globulin 6.0 g/dL. Calcium and creatinine are normal. Her blood smear is shown.`,
  interp:"แยก rouleaux จาก agglutination และ ddx ของ rouleaux (ไม่จำเพาะต่อ myeloma)",
  summary:["Rouleaux = เรียงเป็นแถวเส้นตรง (linear) · agglutination = กองก้อนไม่เป็นระเบียบ","Rouleaux เกิดจาก fibrinogen/globulin สูง — polyclonal (cirrhosis, infection, autoimmune) หรือ monoclonal (MM, Waldenström)","SPEP แยก polyclonal (broad-based) จาก M-spike"],
  parts:S(
   B("48.1 What is the RBC abnormality, and how does it differ from agglutination?",3,{
     ans:"<b>Rouleaux formation</b> — RBCs stacked in <b>linear chains like coins</b> · <b>agglutination</b> = <b>irregular 3-dimensional clumps</b> (antibody-mediated, e.g. cold agglutinins) and disperses differently with saline/warming",
     pts:[P("Rouleaux","rouleaux","stack","coin"),P("Linear stacks vs irregular clumps (agglutination)","linear","irregular","clump","agglutin")]}),
   B("48.2 Give three causes of this finding.",3,{
     ans:"Monoclonal: <b>multiple myeloma</b>, <b>Waldenström macroglobulinemia</b> · polyclonal hypergammaglobulinemia: <b>chronic liver disease</b>, chronic infection (TB, HIV), <b>autoimmune disease</b> (SLE, RA) · high fibrinogen (pregnancy, inflammation)",
     pts:[G("Causes (any 3)",3,P("Myeloma","myeloma"),P("Waldenström","waldenstr","macroglobulin"),P("Liver disease / cirrhosis","liver","cirrho"),P("Chronic infection","infect","\\btb\\b","hiv"),P("Autoimmune","autoimmune","sle","rheumat"),P("Pregnancy / fibrinogen","pregnan","fibrinogen"))]}),
   B("48.3 Which test distinguishes a polyclonal from a monoclonal cause?",2,{
     ans:"<b>Serum protein electrophoresis</b> (broad-based polyclonal γ increase vs a narrow <b>M-spike</b>) with <b>immunofixation</b> ± serum free light chain ratio",
     pts:[P("SPEP","spep","electrophores"),P("Immunofixation / M-spike / FLC","immunofix","m.?spike","monoclonal","flc","free light")]})
  )}),

U({id:"bs049",num:"49",pg:55,title:"Myeloma-like illness with plasma cells in the blood — blood smear",img:"ubs_pcl",
  stem:`A 58-year-old man has bone pain, hypercalcemia and renal impairment. WBC 16,800/µL; the automated differential flags 'atypical lymphocytes'. His blood smear is shown.`,
  interp:"จำ plasma cell ใน PB และเกณฑ์ plasma cell leukemia (IMWG 2021)",
  summary:["Plasma cell: nucleus เยื้องศูนย์ chromatin หยาบแบบหน้าปัดนาฬิกา cytoplasm น้ำเงินเข้มมี perinuclear hof","Primary PCL (IMWG 2021): circulating plasma cells ≥ 5% ใน PB smear (เดิม ≥ 20% หรือ > 2,000/µL)","พยากรณ์โรคแย่ → induction เข้มข้น (เช่น VRd) + ASCT"],
  parts:S(
   B("49.1 Identify the large cells and list the other abnormality.",3,{
     ans:"<b>Plasma cells</b> — eccentric round nucleus with clumped ('clock-face') chromatin, abundant <b>deep-blue cytoplasm</b> and a <b>perinuclear hof</b> · <b>rouleaux formation</b> of RBCs",
     pts:[P("Plasma cells","plasma"),P("Eccentric nucleus / blue cytoplasm / perinuclear hof","eccentric","hof","halo","perinuclear","clock"),P("Rouleaux","rouleaux")]}),
   B("49.2 What is the diagnosis and the current diagnostic threshold?",3,{
     ans:"<b>Plasma cell leukemia</b> (primary) — IMWG 2021: <b>≥ 5% circulating plasma cells</b> on the peripheral blood smear (older definition ≥ 20% or &gt; 2,000/µL)",
     pts:[P("Plasma cell leukemia","plasma cell leuk","\\bpcl\\b"),P("≥5% circulating plasma cells (IMWG 2021)","5 ?%","20 ?%","2,?000")]}),
   B("49.3 How does the prognosis compare with myeloma, and what is the treatment approach?",2,{
     ans:"<b>Much worse</b> (aggressive, high-risk cytogenetics, early relapse) → intensive <b>proteasome-inhibitor/IMiD–based induction</b> (e.g. VRd ± anti-CD38) followed by <b>autologous stem cell transplant</b> and maintenance",
     pts:[P("Worse prognosis","worse","poor","aggressive"),P("Intensive induction + ASCT","bortezomib","vrd","transplant","asct","stem cell","daratumumab")]})
  )}),

U({id:"bs050",num:"50",pg:56,title:"Pregnant woman with a low platelet count — blood smear",img:"ubs_itp",
  stem:`A 30-year-old woman at 28 weeks of gestation has gum bleeding and petechiae. BP 118/72 mmHg, no proteinuria. Hb 11.4 g/dL, WBC 8,900/µL, platelets 18,000/µL. LFT and coagulation are normal. Her blood smear is shown.`,
  interp:"PBS ของ isolated thrombocytopenia ในหญิงตั้งครรภ์ → ITP และการดูแลก่อนคลอด",
  summary:["Gestational thrombocytopenia: plt มัก > 70,000, ไตรมาสสาม, ไม่มีเลือดออก","ITP ในครรภ์: รักษาเมื่อมีเลือดออก/plt < 20–30k หรือใกล้คลอด → prednisolone ขนาดต่ำ หรือ IVIG","เป้าหมาย plt ≥ 50k คลอดทางช่องคลอด/ผ่าตัด, ≥ 70–80k สำหรับ neuraxial anesthesia"],
  parts:S(
   B("50.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> normochromic normocytic, no schistocytes · <b>WBC:</b> normal number and morphology · <b>Platelet:</b> markedly <b>decreased</b>, occasional <b>large/giant platelet</b> (no clumps)",
     pts:[P("RBC normal, no schistocytes","no schisto","normochrom","ncnc"),P("WBC normal","wbc.{0,20}normal","normal"),P("Thrombocytopenia with giant platelets","thrombocytopen","giant","large plat")]}),
   B("50.2 What is the most likely diagnosis? Give two differential diagnoses in pregnancy.",3,{
     ans:"<b>Immune thrombocytopenia (ITP)</b> — platelets &lt; 50,000 with bleeding in the 2nd trimester · ddx: <b>gestational thrombocytopenia</b> (usually &gt; 70k, late, asymptomatic), <b>pre-eclampsia/HELLP</b>, TTP, DIC, SLE/APS, HIV/HCV",
     pts:[P("ITP","\\bitp\\b","immune thrombocytopen"),G("Differentials (any 2)",2,P("Gestational thrombocytopenia","gestational"),P("Pre-eclampsia / HELLP","eclamp","hellp"),P("TTP / HUS","ttp","hus"),P("DIC","dic"),P("SLE / APS","sle","lupus","antiphospholipid"))]}),
   B("50.3 How would you treat her?",3,{
     ans:"Treat because of bleeding and platelets &lt; 20–30k: <b>prednisolone 0.25–0.5 mg/kg/day</b> (titrate) or <b>IVIG 1 g/kg</b> (rapid; also before delivery) · aim <b>≥ 50,000/µL for delivery</b>, <b>≥ 70–80,000/µL for neuraxial anesthesia</b> · avoid NSAIDs; mode of delivery by obstetric indication",
     pts:[P("Prednisolone / corticosteroid","prednis","steroid"),P("IVIG","ivig","immunoglobulin"),P("Platelet targets for delivery (≥50k) / anesthesia (≥70–80k)","50","70","80")]})
  )})
);
})();

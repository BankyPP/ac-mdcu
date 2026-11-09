(function(){
/* SI Med OSCE — SI127 Rotate 401–404 — ไฟล์ OSCE_MED_401-404.pdf (โค้ด SIOS127A) 9 หน้า · หัวไฟล์ "รวมข้อสอบ OSCE medicine rotate 401-404 SI127 (25 ข้อ 30 คะแนน)"
   ทั้งไฟล์เป็น OSCE (พิมพ์ ไม่มีลายมือ/ไฮไลต์) · 25 สถานี หน้า 1–9 · รูปในไฟล์ 15 รูป ครอปครบ (os127a_1–6, 18, 18b, 19, 20, 21, 22–25)
   ผู้ใช้บอก: OSCE ไม่มีเฉลย → key:NK ทุกข้อย่อย เฉลยโดย Claude · คำตอบที่ผู้จดพิมพ์ไว้หลังโจทย์ (เช่น "ให้การวินิจฉัยเบื้องต้น: AML") = แนวทาง ถอดลง notes (ไม่ใช่คีย์)
   เลข 20 ซ้ำในไฟล์ (หน้า 7): สถานีแรก = UA → orig "20" · สถานีที่สอง = film เข่า (ข้อย่อยในไฟล์เขียน 21.1/21.2 — ไม่มีเลข 21 อื่นในไฟล์) → orig "20 (ชุดที่ 2)" ข้อย่อยคงเลข 21.x ตามไฟล์
   ข้อ 25 ผู้จดเขียน "(รูปไม่ตรงกับโจทย์)": รูปในไฟล์ = SDH ข้างขวาข้างเดียว ส่วนคำบรรยายผู้จด (ข้อสอบจริง) = bilateral SDH → เก็บรูปไว้ เฉลยบรรยายตามรูปที่เห็น + ถอดคำบรรยายผู้จดลง notes · flag
   ข้อ 4 รูป CXR มีวงกลมดำที่ผู้จดวาดล้อมรอยโรคติดมาในรูป (หลบไม่ได้) → flag · ข้อ 18 ตัดข้อความลิขสิทธิ์มุมขวาล่างของรูปผิวหนังออก (มีคำว่า fungus ใบ้คำตอบ)
   ท้ายไฟล์มี "แนะนำ" 3 ข้อของผู้จด (ถอดลง notes ของสถานีที่เกี่ยวข้อง) · ไม่คัดชื่อผู้รวบรวมท้ายไฟล์
   ข้อ 7–17 ไม่มีรูป (สถานีปฏิบัติ/ซักประวัติ/แลปเป็นตัวเลข) · สถานีมีอาจารย์ (ex:1): 7–13, 15–17 (7, 9 = หัตถการ proc:1) · บทผู้ป่วย (sp) Claude แต่งจากที่ผู้จดเล่า
   sub ใหม่: "DM screening" (hx ข้อ 17) */
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
const ADD="ข้อย่อยนี้ Claude เติม (ไฟล์ไม่ได้ถาม)";
const TIP3="คำแนะนำผู้จดท้ายไฟล์: ข้อบรรยาย film, ECG, blood smear เขียนให้ครบที่สุด อย่าลืมบรรยาย modality (เช่น CXR PA upright, CT brain without contrast) มีคะแนน";
const TIP2="คำแนะนำผู้จดท้ายไฟล์: ซักประวัติตอนสอบต่างจาก OPD — ถ้าคนไข้ตอบ \"เยอะขึ้น\" ก็คือเยอะขึ้น ไม่ต้อง clarify มาก เน้นซักให้ครบทุกประเด็น · ถ้าถามแล้วผู้ป่วยอ้ำอึ้ง แปลว่าอาจารย์ไม่ได้ brief มา";
const Co=o=>Object.assign({set:"SI127",ro:"Ro401–404",file:"SIOS127A",opinion:""},o);
QB.push(

/* ===== สถานี 1 ===== */
Co({page:1,orig:"1",topic:"micro",sub:"PBS",title:"Fever and fatigue for 2 weeks — peripheral blood smear",img:["os127a_1"],imgNote:"Peripheral blood smear (Wright stain, oil immersion)",
 seen:"คล้าย SI131 Ro417–420 ข้อ 2 · SI133 Ro405–406 ข้อ 14 · SI131 Ro409–412 ข้อ 2 (smear blast)",
 stem:`A 40-year-old man presents with fever and fatigue for 2 weeks. His peripheral blood smear is shown.`,
 gray:"1. ผู้ป่วยชายอายุ 40 ปี มาด้วย ไข้ อ่อนเพลีย 2 weeks PTA จงดู blood smear แล้วตอบคำถาม · 1.1 บรรยาย blood smear - RBC: normochromic normocytic, anisocytosis 1+, poikilocytosis 1+, … - WBC: leukocytosis, myeloblast predominate - platelet: x-y/OF, decreased · 1.2 ให้การวินิจฉัยเบื้องต้น: Acute myeloid leukemia · 1.3 ส่งตรวจเพิ่มเติมเพื่อยืนยันการวินิจฉัย (20 คะแนน) **ต้องตอบ immunophenotype ถึงจะได้เต็ม",
 notes:"ผู้จดตอบ: 1.1 RBC normochromic normocytic, anisocytosis 1+, poikilocytosis 1+ · WBC leukocytosis, myeloblast predominate · platelet x-y/OF decreased · 1.2 Acute myeloid leukemia · 1.3 (20 คะแนน) ต้องตอบ immunophenotype ถึงจะได้เต็ม · "+TIP3,
 parts:S(
  B("1.1 Describe the blood smear.",4,{tags:["micro"],
   ans:"<b>RBC:</b> normochromic normocytic RBC, mild anisocytosis/poikilocytosis (1+)<br><b>WBC:</b> increased in number, <b>predominantly blast cells (myeloblasts)</b> — ขนาดใหญ่ 15–20 µm, high N:C ratio, fine (open) chromatin, prominent nucleoli, basophilic cytoplasm ± few granules/Auer rod<br><b>Platelet:</b> decreased (&lt;5/OF)",
   exp:"Key PBS (OSCE_REF) ของ AML: NCNC RBC, WBC increase in number myeloblast predominate, platelet decrease (&lt;5/OF) · ลักษณะแยก myeloblast จาก lymphoblast: myeloblast ใหญ่กว่า, cytoplasm มากกว่า, nucleoli ชัดหลายอัน, อาจมี granules/<b>Auer rods</b> (ถ้าเห็น Auer rod = myeloid แน่นอน)",
   rubric:"ได้เต็ม = บรรยายครบ 3 series + เรียกเซลล์ว่า blast/myeloblast พร้อมลักษณะ · ตอบแค่ \"atypical lymphocyte\" หรือ \"leukocytosis\" ไม่บอก blast = ได้น้อย",
   pts:[H("RBC",20),P("Normochromic normocytic RBC","normochrom","normocyt","ncnc"),
    H("WBC",60),P("Increased WBC (leukocytosis)","leukocytosis","increase","เพิ่มขึ้น"),CR(P("Blast cells / myeloblasts predominate","blast")),P("Blast features: large, high N:C, fine chromatin, prominent nucleoli","n:?c","nucleol","chromatin","large","ใหญ่","auer"),
    H("Platelet",20),P("Thrombocytopenia (decreased platelets)","thrombocytopen","platelet.{0,25}(decrease|ลดลง|ต่ำ|low)","(เกล็ดเลือด|plt).{0,10}(ลดลง|ต่ำ)","<5")]}),
  B("1.2 What is your provisional diagnosis?",2,{tags:["micro"],
   ans:"<b>Acute myeloid leukemia (AML)</b>",
   exp:"ไข้ + อ่อนเพลีย 2 สัปดาห์ + blast เด่นในเลือด + platelet ต่ำ = acute leukemia · blast มี cytoplasm มาก nucleoli ชัด → myeloid · Ddx: ALL (lymphoblast เล็กกว่า cytoplasm น้อย), APL (promyelocyte มี granule มาก, Auer rod เป็นมัด faggot cell, มักมี DIC — ต้องรีบให้ ATRA)",
   rubric:"ได้เต็ม = AML · acute leukemia (ไม่ระบุชนิด) ได้บางส่วน",
   pts:[CR(P("Acute myeloid leukemia (AML)","\\baml\\b","acute myeloid","myeloblastic","myelogenous"))]}),
  B("1.3 What investigations would you send to confirm the diagnosis?",4,{tags:["micro"],
   ans:"<b>Bone marrow aspiration and biopsy</b> (blast ≥20% ของ nucleated cells; มี recurrent genetic abnormality บางชนิดวินิจฉัยได้แม้ blast &lt;20% ตาม WHO 2022/ICC) + <b>immunophenotyping (flow cytometry)</b> ของเลือด/ไขกระดูก (CD13, CD33, CD117, MPO, CD34) ← ต้องตอบจึงได้เต็ม + <b>cytogenetics / molecular</b> (karyotype, FISH/PCR: PML::RARA, RUNX1::RUNX1T1, CBFB::MYH11, FLT3, NPM1, CEBPA) ± cytochemistry (MPO / Sudan black)",
   exp:"ส่งร่วม: CBC + differential, coagulation (PT, aPTT, fibrinogen, D-dimer — ดู DIC โดยเฉพาะ APL), tumor lysis labs (uric acid, K, PO4, Ca, Cr, LDH), hemoculture ถ้ามีไข้, HLA typing ถ้าคิดทำ transplant · การจำแนกปัจจุบันใช้ immunophenotype + genetics เป็นหลัก",
   rubric:"ไฟล์บอกว่าต้องตอบ immunophenotype ถึงจะได้เต็ม · ได้เต็ม = BM study + immunophenotyping (± cytogenetics) · ตอบ BM อย่างเดียว = ได้บางส่วน",
   pts:[P("Bone marrow aspiration / biopsy","bone marrow","\\bbm\\b","ไขกระดูก","marrow"),CR(P("Immunophenotyping (flow cytometry)","immunophenotyp","flow cytometr","\\bcd ?(13|33|34|117)")),P("Cytogenetics / molecular studies","cytogenet","karyotyp","fish","molecular","pcr","flt3","npm1"),P("Cytochemistry (MPO / Sudan black)","cytochem","\\bmpo\\b","myeloperoxidase","sudan")]})
 ),
 interp:"PBS station: รู้จัก blast → acute leukemia → แยก myeloid → ส่งตรวจยืนยันด้วย BM + immunophenotype",
 summary:["AML smear: NCNC RBC, WBC สูง myeloblast เด่น, platelet ต่ำ","Myeloblast: ใหญ่ N:C สูง chromatin ละเอียด nucleoli ชัด ± Auer rod","ยืนยัน: bone marrow + immunophenotyping (flow cytometry) + cytogenetics/molecular","APL: faggot cell + DIC → ให้ ATRA ทันทีที่สงสัย"]}),

/* ===== สถานี 2 ===== */
Co({page:1,orig:"2",topic:"micro",sub:"PBS",title:"Pallor for 2 weeks in a young woman — peripheral blood smear",img:["os127a_2"],imgNote:"Peripheral blood smear (Wright stain)",
 seen:"คล้าย SI133 Ro405–406 ข้อ 7 (smear มี agglutination)",
 stem:`A 25-year-old woman presents with pallor for 2 weeks. Her peripheral blood smear is shown.`,
 gray:"2. ผู้ป่วยหญิงอายุ 25 ปี มาด้วยซีดมา 2 สัปดาห์ มีผล blood smear ดังนี้ · 2.1 บรรยาย blood smear - RBC: Hypochromic microcytic (ตอนสอบ RBC มันเล็ก), Autoagglutination - WBC: normal WBC - platelet: x-y/OF, adequate · 2.2 ให้การวินิจฉัยเบื้องต้น: AIHA · 2.3 ส่งตรวจอะไรเพิ่มเติมเพื่อยืนยันการวินิจฉัย 3 อย่าง: Coomb's test, ANA, anti-HIV, …",
 notes:"ผู้จดตอบ: 2.1 RBC hypochromic microcytic (ผู้จดหมายเหตุว่า \"ตอนสอบ RBC มันเล็ก\"), autoagglutination · WBC normal · platelet x-y/OF adequate · 2.2 AIHA · 2.3 Coombs' test, ANA, anti-HIV, … · "+TIP3,
 parts:S(
  B("2.1 Describe the blood smear.",4,{tags:["micro"],
   ans:"<b>RBC:</b> <b>autoagglutination</b> (RBC เกาะกันเป็นกลุ่มก้อนไม่เป็นระเบียบ — ต่างจาก rouleaux ที่เรียงเป็นตั้งเหรียญ), anisocytosis, มี spherocytes/microspherocytes (เซลล์เล็กกลมติดสีเข้ม ไม่มี central pallor) ± polychromasia<br><b>WBC:</b> normal in number, neutrophil predominate<br><b>Platelet:</b> adequate",
   exp:"Key PBS (OSCE_REF) ของ AIHA: NCNC RBC, <b>autoagglutination (โดยเฉพาะ cold type)</b>, anisocytosis 3–4+, poikilocytosis 1–2+, polychromasia, <b>spherocytes</b> · เซลล์ที่ \"เล็ก\" ในภาพน่าจะเป็น spherocyte (เล็ก ติดสีเข้ม) ไม่ใช่ hypochromic microcytic · agglutination ทำให้เครื่องนับ RBC ต่ำเท็จ และ MCV/MCHC สูงเท็จ (cold agglutinin)",
   rubric:"ได้เต็ม = autoagglutination + spherocyte/polychromasia + WBC/platelet ปกติ · บอก autoagglutination = ข้อสำคัญ · ตอบ hypochromic microcytic (ตามที่ผู้จดตอบ) ไม่ตรงกับ key PBS — ไม่ได้คะแนนส่วน RBC morphology",
   pts:[H("RBC",70),CR(P("RBC autoagglutination","agglutinat","เกาะกลุ่ม","clump")),P("Spherocytes / microspherocytes","spherocyt"),P("Anisocytosis / polychromasia","anisocyt","polychrom"),
    H("WBC + platelet",30),P("WBC normal, neutrophil predominate","wbc.{0,25}normal","normal.{0,15}wbc","neutrophil"),P("Platelet adequate","adequate","platelet.{0,20}normal","normal.{0,15}platelet")]}),
  B("2.2 What is your provisional diagnosis?",2,{tags:["micro"],
   ans:"<b>Autoimmune hemolytic anemia (AIHA)</b> — autoagglutination เด่นทำให้นึกถึง <b>cold agglutinin type</b> (IgM)",
   exp:"Warm AIHA (IgG): spherocyte เด่น · Cold agglutinin disease / syndrome (IgM, complement): agglutination เด่น, อาการแย่ลงเมื่อเย็น, acrocyanosis · สาเหตุ cold ใน หญิงอายุน้อย: Mycoplasma pneumoniae, EBV · สาเหตุ warm: SLE, lymphoproliferative disease, HIV, ยา",
   rubric:"ได้เต็ม = AIHA (บอก cold type ได้ = ดีมาก) · ตอบ hemolytic anemia ไม่บอก autoimmune = บางส่วน",
   pts:[CR(P("Autoimmune hemolytic anemia (AIHA)","\\baiha\\b","autoimmune hemoly","immune hemoly","cold agglutinin")),P("Cold type (IgM)","cold","igm")]}),
  B("2.3 Name three investigations to confirm the diagnosis.",3,{tags:["micro"],
   ans:"<b>ยืนยัน AIHA:</b> <b>Direct antiglobulin test (DAT / direct Coombs' test)</b> — แยก IgG (warm) vs C3d (cold) + <b>hemolysis workup</b>: reticulocyte count, LDH, indirect bilirubin, haptoglobin · cold type: <b>cold agglutinin titer</b><br><b>หาสาเหตุ:</b> ANA (SLE), anti-HIV, Mycoplasma/EBV serology (cold), HBV/HCV",
   exp:"DAT positive + hemolysis = AIHA · ในเครื่องนับ cold agglutinin ทำให้ MCHC สูง ควรอุ่นตัวอย่าง 37°C · ANA/anti-HIV ในคำตอบผู้จด = หาสาเหตุ secondary AIHA ไม่ใช่การยืนยันว่าเป็น AIHA",
   rubric:"ข้อสำคัญ = DAT (Coombs' test) · ครบ 3 อย่างจาก: DAT, reticulocyte, LDH, indirect bilirubin, haptoglobin, cold agglutinin titer, ANA, anti-HIV",
   pts:[CR(P("Direct antiglobulin test (direct Coombs)","coomb","\\bdat\\b","antiglobulin")),G("Others (≥2)",2,P("Reticulocyte count","reticulocyt","retic"),P("LDH","\\bldh\\b","lactate dehydrogenase"),P("Indirect bilirubin","bilirubin"),P("Haptoglobin","haptoglobin"),P("Cold agglutinin titer","cold agglutinin","titer"),P("ANA","\\bana\\b","antinuclear"),P("Anti-HIV","\\bhiv\\b"),P("Mycoplasma / EBV serology","mycoplasma","\\bebv\\b"))]})
 ),
 interp:"PBS station: เห็น RBC จับกลุ่ม (autoagglutination) → AIHA (cold type) → ยืนยันด้วย DAT + hemolysis labs + หาสาเหตุ",
 summary:["Autoagglutination = RBC เกาะเป็นกลุ่มไม่เป็นระเบียบ (ต่างจาก rouleaux)","AIHA: spherocyte + polychromasia ± agglutination (cold)","ยืนยัน: DAT (IgG = warm, C3d = cold) + retic, LDH, indirect bilirubin, haptoglobin","หาสาเหตุ: ANA (SLE), HIV, Mycoplasma/EBV, lymphoproliferative"],
 flag:"⚠ คำบรรยาย RBC ของผู้จด (hypochromic microcytic) ต่างจากเฉลย — ดู opinion",
 opinion:"ผู้จดบรรยาย RBC ว่า hypochromic microcytic (เหตุผล \"ตอนสอบ RBC มันเล็ก\") — ไม่เห็นด้วย: key PBS ของ AIHA เป็น normochromic normocytic + spherocytes + polychromasia และในภาพเซลล์ที่เล็กติดสีเข้มคือ spherocyte · ส่วน ANA, anti-HIV ที่ผู้จดตอบใน 2.3 เป็นการหาสาเหตุ ส่วนการยืนยันหลักคือ DAT + hemolysis labs"}),

/* ===== สถานี 3 ===== */
Co({page:2,orig:"3",topic:"micro",sub:"PBS",title:"Gum bleeding and bruises — peripheral blood smear",img:["os127a_3"],imgNote:"Peripheral blood smear (Wright stain)",
 seen:"คล้าย SI131 Ro409–412 ข้อ 19 (แปรงฟันแล้วเลือดออก → ITP)",
 stem:`A 40-year-old man presents with gum bleeding when brushing his teeth and bruises on his arms and legs. His peripheral blood smear is shown.`,
 gray:"3. ผู้ป่วยชายอายุ 40 ปี มาด้วยเลือดออกตอนแปรงฟัน, bruises ขึ้นตามแขน ขา มีผล blood smear ดังนี้ · 3.1 บรรยาย blood smear - RBC: Normochromic normocytic, anisocytosis 1+, poikilocytosis 1+, acanthocyte 1+, Howell-Jolly body is found, … - WBC: Normal - platelet: x-y/OF, decreased · 3.2 ให้การวินิจฉัยเบื้องต้น: ITP · 3.3 ส่งตรวจอะไรเพิ่มเพื่อยืนยันการวินิจฉัย 3 อย่าง: anti-HIV, ANA, anti-HBc, …",
 notes:"ผู้จดตอบ: 3.1 RBC NCNC, anisocytosis 1+, poikilocytosis 1+, acanthocyte 1+, Howell-Jolly body is found · WBC normal · platelet x-y/OF decreased · 3.2 ITP · 3.3 anti-HIV, ANA, anti-HBc, … · "+TIP3,
 parts:S(
  B("3.1 Describe the blood smear.",4,{tags:["micro"],
   ans:"<b>RBC:</b> normochromic normocytic RBC, no significant anisocytosis/poikilocytosis (มี crenated cell/echinocyte ประปราย — มักเป็น artifact)<br><b>WBC:</b> normal in number (lymphocyte 1 ตัวในภาพ), normal morphology<br><b>Platelet:</b> <b>markedly decreased</b> (&lt;5/OF — แทบไม่เห็นในภาพ) ± giant platelet",
   exp:"Key PBS (OSCE_REF) ของ ITP: NCNC RBC, no anisocytosis, no poikilocytosis · WBC normal, neutrophil predominate · platelet decrease in number (&lt;5/OF) · ลักษณะสำคัญคือ <b>isolated thrombocytopenia</b> (RBC/WBC ปกติ) · ปกติ platelet 8–20/OF (×20,000 ≈ จำนวนต่อ µL) · ITP อาจเห็น giant platelet จาก platelet turnover สูง · ถ้ามี schistocyte → นึกถึง TTP/DIC แทน",
   rubric:"ได้เต็ม = RBC, WBC ปกติ + platelet ลดลง (isolated thrombocytopenia) · ไม่บอก platelet ลดลง = ขาดข้อสำคัญ",
   pts:[H("RBC",30),P("Normochromic normocytic RBC","normochrom","normocyt","ncnc"),H("WBC",20),P("WBC normal in number and morphology","wbc.{0,25}normal","normal.{0,15}wbc","neutrophil predom"),
    H("Platelet",50),CR(P("Platelets markedly decreased (&lt;5/OF)","thrombocytopen","platelet.{0,30}(decrease|ลด|ต่ำ|low)","(decrease|ลด|ต่ำ|low).{0,15}platelet","<5","isolated"))]}),
  B("3.2 What is your provisional diagnosis?",2,{tags:["micro"],
   ans:"<b>Immune thrombocytopenia (ITP)</b>",
   exp:"Mucocutaneous bleeding (gum bleeding, bruise/petechiae) + isolated thrombocytopenia ใน smear = ITP (diagnosis of exclusion) · Ddx: secondary ITP (HIV, HCV, SLE, H. pylori, lymphoproliferative), drug-induced, pseudothrombocytopenia (EDTA clumping — ต้องดู smear), TTP (schistocyte), aplastic anemia/leukemia (series อื่นผิดปกติ)",
   pts:[CR(P("Immune thrombocytopenia (ITP)","\\bitp\\b","immune thrombocytopen","idiopathic thrombocytopen"))]}),
  B("3.3 Name three investigations to confirm the diagnosis.",3,{tags:["micro"],
   ans:"ITP วินิจฉัยโดยแยกสาเหตุอื่นออก: <b>anti-HIV</b>, <b>anti-HCV</b>, <b>HBV (HBsAg, anti-HBc)</b>, <b>H. pylori</b> (urea breath test / stool antigen), <b>ANA</b> (SLE) ± DAT (Evans syndrome), TSH, quantitative immunoglobulin · bone marrow ไม่จำเป็นในรายทั่วไป (ทำเมื่ออาการไม่เข้ากัน อายุมาก ไม่ตอบสนองต่อการรักษา หรือ series อื่นผิดปกติ)",
   exp:"ASH 2019 / International consensus: ผู้ใหญ่ที่สงสัย ITP ควรตรวจ HIV, HCV (± HBV) เสมอ, H. pylori ในพื้นที่ชุกสูง · key PBS (ลายมือ) เขียนว่า ITP → HIV, HCV, anti H. pylori · การรักษา: platelet &lt;30,000 หรือมีเลือดออก → corticosteroid (prednisolone / dexamethasone) ± IVIG ถ้าเลือดออกรุนแรง",
   rubric:"ได้เต็ม = 3 อย่างที่ตรงกับการหาสาเหตุ secondary ITP (HIV, HCV, HBV, H. pylori, ANA ฯลฯ)",
   pts:[G("Investigations (≥3)",3,P("Anti-HIV","\\bhiv\\b"),P("Anti-HCV","\\bhcv\\b","hepatitis c"),P("HBV serology (HBsAg / anti-HBc)","hbsag","anti-?hbc","\\bhbv\\b","hepatitis b"),P("H. pylori testing","pylori","urea breath"),P("ANA","\\bana\\b","antinuclear"),P("DAT (Coombs)","coomb","\\bdat\\b"),P("Bone marrow (selected cases)","bone marrow","ไขกระดูก"))]})
 ),
 interp:"PBS station: เห็น platelet แทบไม่มีโดย RBC/WBC ปกติ → ITP → ส่งตรวจหาสาเหตุ secondary",
 summary:["ITP = isolated thrombocytopenia, RBC/WBC ปกติ ± giant platelet","Diagnosis of exclusion: ตรวจ HIV, HCV, HBV, H. pylori ± ANA, DAT","Bone marrow ไม่จำเป็นในรายทั่วไป","Schistocyte → คิด TTP/DIC ไม่ใช่ ITP"],
 flag:"⚠ คำบรรยาย RBC ของผู้จด (acanthocyte, Howell-Jolly body) ไม่ตรงกับ key PBS ของ ITP — ดู opinion",
 opinion:"ผู้จดบรรยาย RBC ว่ามี anisocytosis/poikilocytosis 1+, acanthocyte 1+ และ Howell-Jolly body — key PBS ของ ITP คือ RBC ปกติ (no aniso/poikilocytosis) · ในภาพเห็นเพียง crenated cell ประปราย (มักเป็น artifact จากการเตรียมสไลด์) และไม่เห็น Howell-Jolly body ชัด (ซึ่งพบหลังตัดม้าม ไม่ใช่ลักษณะของ ITP) · เฉลยจึงเน้น isolated thrombocytopenia"}),

/* ===== สถานี 4 ===== */
Co({page:2,orig:"4",topic:"img",sub:"CXR",title:"Progressive dyspnea in a young man — chest radiograph",img:["os127a_4"],imgNote:"Chest radiograph (มีวงกลมสีดำที่ผู้จดวาดไว้บนภาพ)",
 seen:"คล้าย SI131 Ro409–412 ข้อ 16 · SI131 Ro417–420 ข้อ 16 (pleural effusion)",
 stem:`A 25-year-old man presents with progressively worsening dyspnea on exertion. His chest radiograph is shown.`,
 gray:"4. ผู้ป่วยชายอายุ 25 ปี มาด้วยเหนื่อยง่ายมากขึ้น ส่งทำ CXR ได้ผลดังนี้ · 4.1 บรรยาย CXR: CXR PA upright, trachea shift to the right, mediastinal shift to the right, meniscus sign, pleural effusion left lower lung, blunt left costophrenic angle, …. · 4.2 ให้ ddx 3 โรค - TB - CA lung - CA pleura - chylothorax",
 flag:"⚠ รูปในไฟล์มีวงกลมดำล้อมรอยโรค (ผู้จดวาด) ครอปหลบไม่ได้ — ใบ้ตำแหน่งรอยโรค",
 notes:"ผู้จดตอบ: 4.1 CXR PA upright, trachea shift to the right, mediastinal shift to the right, meniscus sign, pleural effusion left lower lung, blunt left costophrenic angle · 4.2 ddx: TB, CA lung, CA pleura, chylothorax · "+TIP3,
 parts:S(
  B("4.1 Describe the chest radiograph.",4,{tags:["img"],
   ans:"<b>CXR PA upright</b>, adequate inspiration · <b>Homogeneous opacity at the left mid-to-lower hemithorax</b> with <b>meniscus sign</b> (ขอบบนโค้งขึ้นด้านข้าง), <b>obliterated left costophrenic angle</b> and loss of left hemidiaphragm/left heart border · <b>Trachea and mediastinum shifted to the right</b> (ข้างตรงข้าม) · Right lung clear → <b>large left pleural effusion</b>",
   exp:"Effusion ปริมาณมาก ดัน mediastinum ไปด้านตรงข้าม · ถ้า opacity ทั้งซีกแต่ mediastinum ไม่ shift หรือ shift เข้าหา → นึกถึง collapse ร่วม (เช่น central obstructing tumor) · ถ้าขอบบนเป็นเส้นตรงแนวนอน = air-fluid level → hydropneumothorax (มองหา visceral pleural line) · ขั้นต่อไป: thoracentesis (Light's criteria, ADA, cytology, cell count, TG ถ้าน้ำขุ่นขาว)",
   rubric:"ได้เต็ม = modality + left pleural effusion (meniscus / blunt CPA) + contralateral shift · บอกแค่ \"opacity\" ไม่บอก effusion = บางส่วน",
   pts:[P("Modality: CXR PA upright","\\bpa\\b","upright","posteroanterior"),CR(P("Left pleural effusion (homogeneous opacity, meniscus sign)","effusion","meniscus","น้ำในช่องเยื่อหุ้มปอด")),P("Blunted left costophrenic angle","costophrenic","\\bcpa\\b","blunt"),CR(P("Trachea / mediastinum shifted to the right","shift","deviat","เบี้ยว","ผลัก"))]}),
  B("4.2 Give three differential diagnoses.",3,{tags:["img"],
   ans:"ชายอายุน้อย effusion ข้างเดียวปริมาณมาก: <b>1. Tuberculous pleuritis</b> (พบบ่อยสุดในไทย) <b>2. Malignant pleural effusion</b> — lymphoma, lung cancer, pleural tumor (mesothelioma พบน้อยในคนอายุน้อย), germ cell tumor <b>3. Parapneumonic effusion / empyema</b> · อื่น ๆ: chylothorax (lymphoma, trauma), SLE/autoimmune",
   exp:"Exudate ที่ lymphocyte เด่น + ADA &gt;40 U/L → TB pleuritis (ยืนยันด้วย pleural biopsy) · cytology ซ้ำ ≥2 ครั้งเพิ่ม yield ของ malignancy · chylothorax: น้ำขาวขุ่น TG &gt;110 mg/dL",
   rubric:"ได้เต็ม = 3 โรคที่เป็นสาเหตุ exudative effusion สมเหตุสมผล โดยต้องมี TB",
   pts:[CR(P("Tuberculous pleuritis","\\btb\\b","tubercul","วัณโรค")),G("Others (≥2)",2,P("Malignancy: lung cancer / lymphoma / metastasis","\\bca\\b","cancer","malignan","lymphoma","carcinoma","มะเร็ง"),P("Pleural tumor / mesothelioma","mesothelioma","pleura"),P("Parapneumonic effusion / empyema","parapneumonic","empyema","pneumonia"),P("Chylothorax","chylo"),P("SLE / autoimmune","\\bsle\\b","lupus","autoimmune"))]})
 ),
 interp:"CXR station: แยก effusion ปริมาณมาก (meniscus + contralateral shift) แล้วให้ ddx exudative effusion ในคนอายุน้อย",
 summary:["Large effusion: homogeneous opacity, meniscus sign, blunt CPA, mediastinum shift ไปข้างตรงข้าม","Opacity ทั้งซีกแต่ไม่ shift → effusion + collapse ร่วม","Ddx ชายอายุน้อยในไทย: TB, malignancy (lymphoma, CA lung), parapneumonic/empyema","TB pleuritis: lymphocytic exudate + ADA >40"]}),

/* ===== สถานี 5 ===== */
Co({page:3,orig:"5",topic:"img",sub:"CXR",title:"Fever, cough and dyspnea for 3 days in a 19-year-old — chest radiograph",img:["os127a_5"],imgNote:"Chest radiograph",
 seen:"คล้าย SI133 Ro405–406 ข้อ 21 (ไข้ ไอ หอบ CXR)",
 stem:`A 19-year-old man presents with fever, cough and dyspnea for 3 days. Physical examination reveals crepitations at the right lower lung. His chest radiograph is shown.`,
 gray:"5. ผู้ป่วยชายอายุ 19 ปี มาด้วย ไข้ ไอ หอบเหนื่อย 3 วัน ตรวจร่างกาย crepitation at right lower lung ส่งทำ CXR ได้ผลดังนี้ · 5.1 บรรยาย CXR · 5.2 ให้การวินิจฉัยเบื้องต้น: Community-acquired pneumonia ถึงจะได้คะแนนเต็ม",
 notes:"ผู้จดไม่ได้จดคำบรรยาย 5.1 (Claude บรรยายจากภาพ) · 5.2 ผู้จด: ต้องตอบ community-acquired pneumonia ถึงจะได้คะแนนเต็ม · "+TIP3,
 parts:S(
  B("5.1 Describe the chest radiograph.",3,{tags:["img"],
   ans:"<b>CXR PA upright</b>, adequate inspiration, trachea midline · <b>Patchy ill-defined alveolar opacity (airspace infiltration) at the right lower lung zone</b>, right heart border ยังเห็น (→ right lower lobe) · ไม่มี pleural effusion, CPA ทั้งสองข้าง sharp · heart size normal · left lung clear",
   exp:"Right heart border เลือนหาย = right middle lobe · hemidiaphragm เลือน = lower lobe (silhouette sign) · lateral film ช่วยระบุ lobe · รอยโรคในภาพค่อนข้างจาง ต้องเทียบความทึบสองข้าง",
   rubric:"ได้เต็ม = modality + patchy alveolar infiltration right lower zone · ไม่บอก modality หักคะแนนตามคำแนะนำผู้จด",
   pts:[P("Modality: CXR PA upright","\\bpa\\b","upright","posteroanterior"),CR(P("Patchy alveolar opacity / infiltration","infiltrat","alveolar","airspace","air-space","consolidat","opacity","patchy")),CR(P("Location: right lower lung zone / RLL","right lower","\\brll\\b","rt\\.? ?lower","ปอดขวาล่าง")),P("No pleural effusion; heart size normal","no (pleural )?effusion","sharp","heart size","normal heart")]}),
  B("5.2 What is your provisional diagnosis?",2,{tags:["img"],
   ans:"<b>Community-acquired pneumonia (CAP)</b>, right lower lobe",
   exp:"ไข้ ไอ หอบ 3 วัน + crepitation ตำแหน่งเดียวกับ infiltrate นอกโรงพยาบาล = CAP · เชื้อพบบ่อย: S. pneumoniae, atypical (Mycoplasma — พบบ่อยในวัยรุ่น), H. influenzae, viral · ประเมินความรุนแรง CURB-65 / PSI · OPD ผู้ป่วยแข็งแรง: amoxicillin หรือ doxycycline หรือ macrolide (ถ้าเชื้อดื้อในพื้นที่ต่ำ) · IPD: beta-lactam + macrolide",
   rubric:"ผู้จดบอกว่าต้องตอบ community-acquired pneumonia จึงได้เต็ม · ตอบ pneumonia เฉย ๆ = บางส่วน",
   pts:[CR(P("Community-acquired pneumonia","community","\\bcap\\b"))]})
 ),
 interp:"CXR station: บรรยาย infiltrate ให้ตรงตำแหน่งกับ PE แล้วระบุชนิด pneumonia ตามสถานที่ติดเชื้อ (CAP)",
 summary:["บรรยาย: modality → infiltrate ชนิด/ตำแหน่ง → silhouette sign → effusion","Silhouette: RHB หาย = RML, diaphragm หาย = lower lobe","CAP: ต้องระบุ community-acquired · ประเมิน CURB-65"]}),

/* ===== สถานี 6 ===== */
Co({page:3,orig:"6",topic:"ekg",sub:"STEMI/ischemia",title:"Chest tightness in a 55-year-old man — 12-lead EKG",img:["os127a_6"],imgNote:"12-lead EKG with lead II rhythm strip",
 seen:"คล้าย SI131 Ro417–420 ข้อ 14 · SI130 Ro409–412 ข้อ 14 (inferior STEMI)",
 stem:`A 55-year-old man presents with chest tightness. His 12-lead EKG is shown.`,
 gray:"6. ผู้ป่วยชายอายุ 55 ปี มาด้วยแน่นหน้าอก ตรวจ ECG ได้ผลดังนี้ · 6.1 เขียนสิ่งที่เห็นใน ECG · 6.2 ให้การวินิจฉัย: Acute inferior wall STEMI",
 notes:"ผู้จดไม่ได้จดคำบรรยาย 6.1 (Claude อ่านจากภาพ) · 6.2 ผู้จด: Acute inferior wall STEMI · "+TIP3,
 parts:S(
  B("6.1 Describe the EKG.",4,{tags:["ekg"],
   ans:"<b>Sinus rhythm</b>, rate ~90–100/min, normal axis · <b>ST elevation in II, III, aVF</b> (STE ใน III &gt; II) with hyperacute T · <b>Reciprocal ST depression in aVL (and I)</b> · ST elevation ใน V1 (± V2–V4) — นึกถึง <b>right ventricular involvement</b> → ควรทำ right-sided leads (V4R) · ไม่มี pathologic Q ชัด (acute)",
   exp:"Inferior STEMI ส่วนใหญ่จาก RCA (80%) · STE III &gt; II + STE V1 + ST depression aVL → proximal RCA/RV infarct · ST elevation ≥1 mm ใน V4R ยืนยัน RV infarct · RV infarct: hypotension ไวต่อ preload → <b>หลีกเลี่ยง nitrate/morphine/diuretic</b>, ให้ IV fluid · ติดตาม AV block (inferior MI)",
   rubric:"ได้เต็ม = rhythm/rate + STE II, III, aVF + reciprocal change · บอก RV involvement = ดีมาก",
   pts:[P("Sinus rhythm, rate ~90–100/min","sinus","rate","\\b(9\\d|100)\\b"),CR(P("ST elevation in II, III, aVF","st.{0,15}elevat","\\bste\\b","ii,? ?iii,? ?(and )?avf","inferior lead")),P("Reciprocal ST depression in aVL / I","reciprocal","st.{0,15}depress","avl"),P("STE in V1 / III > II → RV involvement (check V4R)","\\brv\\b","right ventric","v4r","iii ?> ?ii","v1")]}),
  B("6.2 What is your diagnosis?",2,{tags:["ekg"],
   ans:"<b>Acute inferior wall ST-elevation myocardial infarction (STEMI)</b> ± right ventricular infarction",
   exp:"รักษา: aspirin 300 mg เคี้ยว + P2Y12 inhibitor + anticoagulant · reperfusion: primary PCI ภายใน 90–120 นาที หรือ fibrinolysis (streptokinase/tenecteplase) ภายใน 30 นาทีถ้า PCI ไม่ทันและ onset &lt;12 ชม. · ระวัง nitrate ถ้า RV infarct หรือ SBP &lt;90",
   rubric:"ได้เต็ม = acute inferior wall STEMI",
   pts:[CR(P("Acute inferior wall STEMI","inferior")),P("STEMI / acute MI","stemi","myocardial infarct","\\bmi\\b"),P("± RV infarction","\\brv\\b","right ventric")]})
 ),
 interp:"EKG station: หา lead ที่ ST ยก → ระบุผนัง (II, III, aVF = inferior) + reciprocal + คิดถึง RV infarct",
 summary:["Inferior STEMI: STE II, III, aVF + reciprocal ST depression aVL","STE III > II + STE V1 → RV infarct → ทำ V4R, เลี่ยง nitrate, ให้ fluid","Inferior MI ระวัง bradycardia / AV block","Reperfusion: primary PCI (FMC-to-device ≤90–120 นาที) หรือ fibrinolysis ≤30 นาที"],
 opinion:"เห็นด้วยกับผู้จด (acute inferior wall STEMI) · เพิ่มเติม: ในภาพมี STE III > II และ STE ใน V1 ซึ่งชี้ว่าอาจมี RV involvement — ตอบเพิ่มได้คะแนนเสริม"}),

/* ===== สถานี 7 ===== */
Co({page:3,orig:"7",topic:"proc",sub:"BLS/CPR",ex:1,proc:1,title:"Procedure — a ward patient suddenly collapses",
 seen:"คล้าย SI130 Ro409–412 ข้อ 5 (BLS)",
 stem:`You are a medical student on a medical ward. A patient on your ward suddenly collapses and becomes unresponsive. You are the only medical student present and no nurse is around at this moment. Provide initial resuscitation on the manikin and say aloud what you are doing.`,
 gray:"7. ท่านเป็นนศพ. อยู่บนวอร์ดอัษฎางค์ 14 เหนือ มีผู้ป่วยในวอร์ดของท่านเป็นลม หมดสติกะทันหัน จงให้การช่วยเหลือเบื้องต้น (ขณะนั้นท่านเป็น นศพ. เพียงคนเดียวที่อยู่ในวอร์ด ไม่มีพยาบาลอยู่) - ทำตามขั้นตอน CPR เริ่มจากปลุก, ตะโกนขอความช่วยเหลือ, คลำ pulse, …. - โทรขอ 1. Board 2. รถฉุกเฉิน 3. ทีมช่วยเหลือ - pump, เป่า 5 cycle (30 ครั้ง: บีบ bag 2 ครั้ง) *ขึ้นสุดลงสุด ทำเสร็จแล้วมีผลให้ดูด้วยว่าปั๊มได้กี่ percent - ผู้ป่วยฟื้น",
 flag:"บทผู้คุม (sp) Claude แต่งตามที่ผู้จดเล่า",
 notes:"ผู้จดเล่า: ทำตามขั้นตอน CPR เริ่มจากปลุก ตะโกนขอความช่วยเหลือ คลำ pulse · โทรขอ 1. board 2. รถฉุกเฉิน 3. ทีมช่วยเหลือ · pump + เป่า 5 cycle (กด 30 ครั้ง : บีบ bag 2 ครั้ง) · *กดขึ้นสุดลงสุด — ทำเสร็จหุ่นมีผลให้ดูว่าปั๊มได้กี่ percent · จบด้วยผู้ป่วยฟื้น",
 sp:"หุ่น CPR นอนบนเตียงผู้ป่วย ไม่ตอบสนอง ไม่หายใจ/หายใจเฮือก · เมื่อผู้สอบคลำ carotid ครั้งแรก → \"คลำไม่ได้\" · เมื่อผู้สอบโทรขอความช่วยเหลือ → ผู้คุมบอกว่าทีม/รถฉุกเฉิน/cardiac board กำลังมา (ส่ง board ให้) · ผู้สอบกด 30 : บีบ bag 2 ครบ 5 cycle → คลำ pulse ซ้ำ → \"คลำได้ ผู้ป่วยเริ่มหายใจเอง\" · หุ่นแสดงผล % การกดที่ได้คุณภาพ (ความลึก/recoil)",
 parts:S(
  B("7.1 Perform basic life support (say what you do, in order).",10,{tags:["proc"],
   ans:"<b>ตรวจความปลอดภัย</b> → <b>ปลุก/ตบไหล่เรียก</b> → <b>ตะโกนขอความช่วยเหลือ</b> + โทรแจ้ง (ขอทีม CPR/code, <b>รถฉุกเฉิน (emergency cart + defibrillator)</b>, <b>cardiac board</b>) → <b>คลำ carotid pulse พร้อมดูการหายใจ ไม่เกิน 10 วินาที</b> → คลำไม่ได้ → วาง board → <b>chest compression</b> กึ่งกลางหน้าอก (ครึ่งล่าง sternum) สันมือ แขนตรง <b>ลึก 5–6 ซม. อัตรา 100–120/นาที full recoil</b> (ขึ้นสุดลงสุด) → <b>30 : 2</b> เปิด airway (head tilt–chin lift) บีบ bag-valve-mask 2 ครั้ง ให้อกยก → ครบ <b>5 cycle (~2 นาที)</b> ประเมิน pulse ซ้ำ → เมื่อ defibrillator มาถึง ติด pads วิเคราะห์ rhythm ทันที (shockable → shock) → pulse กลับ: ประเมินการหายใจ, vital signs, จัดท่า, แจ้งแพทย์/ทีม",
   exp:"AHA BLS: ลด interruption &lt;10 วินาที · อยู่คนเดียวในโรงพยาบาลให้เรียกคน/ทีมและขอ defibrillator ก่อนเริ่มกด · อย่ากดเร็วเกิน 120/นาที หรือพิงหน้าอก (recoil ไม่สุด) · หุ่นในห้องสอบวัด % การกดที่ถูกต้อง (ลึก/recoil/rate)",
   rubric:"ได้เต็ม = ครบลำดับ + คุณภาพการกด · ไม่ประเมินการตอบสนอง/ไม่คลำ pulse ก่อนกด/ไม่ขอความช่วยเหลือ = ขาดข้อสำคัญ · กดตื้น/recoil ไม่สุด = หักคะแนน",
   pts:[H("ประเมินและขอความช่วยเหลือ",35),CR(P("Check responsiveness (tap shoulders and shout)","ตบไหล่","ปลุก","เรียก","responsive","consciousness")),CR(P("Shout/call for help: team, emergency cart/defibrillator, cardiac board","ขอความช่วยเหลือ","call for help","ตะโกน","รถฉุกเฉิน","emergency cart","defibrillat","\\baed\\b","code","ทีม")),CR(P("Check carotid pulse and breathing ≤10 s","carotid","pulse","คลำ","ชีพจร")),P("Place cardiac board","board","แผ่นรอง"),
    H("CPR",50),P("Hand position: lower half of sternum, heel of hand, arms straight","sternum","กึ่งกลาง","internipple","สันมือ","heel","straight","แขนตรง"),CR(P("Depth 5–6 cm, rate 100–120/min, full recoil","5[–-]?6 ?(cm|ซม)","100[–-]?120","recoil","คืนตัว","ขึ้นสุด")),CR(P("Ratio 30:2 with bag-valve-mask after opening airway","30 ?[:/] ?2","bag","\\bbvm\\b","ambu","head tilt","chin lift")),
    H("ประเมินซ้ำ",15),P("Re-assess pulse every 5 cycles (~2 min); attach defibrillator when available","5 cycle","2 (min|นาที)","re-?assess","ประเมินซ้ำ","pad","shock"),P("ROSC: check breathing, vital signs, call team","rosc","vital","หายใจเอง","ฟื้น","bp","ความดัน")]})
 ),
 interp:"Procedure station: in-hospital cardiac arrest ที่อยู่คนเดียว — ต้องเรียกความช่วยเหลือ + ขอ defibrillator/board แล้วทำ CPR คุณภาพสูง (หุ่นวัด %)",
 summary:["ลำดับ: ปลุก → ตะโกนขอความช่วยเหลือ (ทีม, รถฉุกเฉิน, board) → คลำ carotid ≤10 วินาที → กด","กด: ครึ่งล่าง sternum, 5–6 ซม., 100–120/นาที, recoil เต็ม, 30:2","ครบ 5 cycle (~2 นาที) ประเมินซ้ำ · defibrillator มา → วิเคราะห์ rhythm ทันที"]}),

/* ===== สถานี 8 ===== */
Co({page:4,orig:"8",topic:"pe",sub:"Pulse/BP",ex:1,title:"Physical examination — suspected hypertension",
 seen:"คล้าย SI133 Ro405–406 ข้อ 3 · SI132 Ro403–404 ข้อ 22 (ตรวจผู้ป่วย HT)",
 stem:`A 50-year-old woman comes for a check-up because she suspects she may have hypertension. Perform the relevant cardiovascular examination and report your findings.`,
 gray:"8. ผู้ป่วยหญิงอายุ 50 ปี มาตรวจร่างกายเพราะสงสัยว่าจะเป็นโรคความดันโลหิตสูง จงตรวจร่างกาย CVS ที่เกี่ยวข้อง - วัดความดัน (อาจารย์บางห้องอาจไม่ได้ให้วัดจริง แค่บอกว่าจะวัดพอ) - full CVS exam: Normal",
 flag:"บทผู้ป่วย (sp) และค่า BP ที่ผู้คุมบอก Claude แต่ง (ไฟล์บอกแค่ผลตรวจ normal)",
 notes:"ผู้จดเล่า: วัดความดัน (อาจารย์บางห้องไม่ได้ให้วัดจริง แค่บอกว่าจะวัดพอ) · full CVS exam: ผลตรวจ normal",
 sp:"หญิง 50 ปี นั่งพักแล้ว · ถ้าผู้สอบบอกขั้นตอนวัดความดันครบ ผู้คุมอาจบอกค่า: แขนขวา 148/94, แขนซ้าย 146/92 mmHg (Claude แต่ง) · pulse 76/min regular, ชีพจรส่วนปลายครบเท่ากัน ไม่มี radio-femoral delay · ไม่มี bruit · JVP ปกติ · precordium: apex beat 5th ICS MCL ไม่มี heave/thrill, S1 S2 ปกติ ไม่มี murmur · ไม่มีบวม · ไม่มีลักษณะ Cushing/thyroid",
 parts:S(
  B("8.1 Examine the cardiovascular system relevant to hypertension and report your findings.",10,{tags:["pe"],
   ans:"<b>เตรียม:</b> แนะนำตัว ขออนุญาต ล้างมือ<br><b>วัด BP ถูกวิธี:</b> นั่งพัก ≥5 นาที หลังพิง เท้าวางพื้น แขนวางระดับหัวใจ cuff ขนาดเหมาะ (bladder คลุม ≥80% รอบแขน) · palpatory method ก่อน แล้ว auscultate (Korotkoff I/V) · วัด<b>ทั้ง 2 แขน</b> ใช้ข้างที่สูงกว่า · วัดซ้ำ ≥2 ครั้งห่าง 1–2 นาทีแล้วเฉลี่ย<br><b>Pulse:</b> rate/rhythm, ชีพจรส่วนปลายทุกจุด, <b>radio-femoral delay</b> (coarctation)<br><b>หา target organ damage / secondary cause:</b> fundoscopy (hypertensive retinopathy), JVP, <b>carotid & renal/abdominal bruit</b>, thyroid, Cushingoid features, BMI/waist<br><b>Precordium:</b> apex beat (displaced = LVH), heave, loud A2, S4, murmur<br><b>อื่น ๆ:</b> lung crepitation, pedal edema<br><b>รายงาน:</b> ผลตรวจหัวใจและหลอดเลือดปกติ ไม่พบ target organ damage/ลักษณะของ secondary HT",
   exp:"วินิจฉัย HT (Thai HT guideline / ESC 2024): office BP ≥140/90 ซ้ำหลายครั้งในหลาย visit หรือยืนยันด้วย home BP ≥135/85 / ABPM · แขนสองข้างต่าง &gt;10–15 mmHg → นึกถึง subclavian stenosis/coarctation",
   rubric:"ได้เต็ม = วัด BP ถูกเทคนิค (หรือบอกขั้นตอนครบ) + pulse/radio-femoral + หา TOD/secondary cause + precordium + รายงาน · ข้อสำคัญ = เทคนิควัด BP",
   pts:[H("เตรียม",5),P("Introduce, consent, hand hygiene","แนะนำตัว","ขออนุญาต","introduce","consent","ล้างมือ","hand"),
    H("BP measurement",35),CR(P("Proper technique: rest ≥5 min, arm at heart level, correct cuff size","พัก","5 (min|นาที)","heart level","ระดับหัวใจ","cuff")),P("Palpatory method first, then auscultation","palpat","คลำ.{0,10}(ชีพจร|radial)","korotkoff"),P("Both arms, repeat ≥2 readings","both arm","แขน(ทั้ง)?(สอง|2)","ทั้ง 2 แขน","repeat","ซ้ำ","2 ครั้ง"),
    H("Pulse",15),P("Pulse rate and rhythm, peripheral pulses","pulse","ชีพจร","rate","rhythm"),P("Radio-femoral delay","radio-?femoral","femoral","coarctation"),
    H("Target organ damage / secondary cause",25),P("Fundoscopy","fundus","fundoscop","ophthalmoscop","retinopathy"),P("Carotid / renal (abdominal) bruit","bruit","renal artery"),P("Thyroid / Cushingoid features / BMI","thyroid","cushing","bmi","waist"),
    H("Precordium + report",20),P("Apex beat, heave, heart sounds (S4, loud A2), murmur","apex","heave","s4","a2","murmur","precordium"),P("Report: normal findings, no target organ damage","normal","ปกติ","report","รายงาน")]})
 ),
 interp:"PE station: ผู้ป่วยสงสัย HT — เน้นเทคนิควัด BP ที่ถูกต้อง + ตรวจหา target organ damage และ secondary causes",
 summary:["BP: นั่งพัก 5 นาที แขนระดับหัวใจ cuff เหมาะ วัด 2 แขน ซ้ำ ≥2 ครั้ง","Secondary HT: radio-femoral delay, renal bruit, Cushing, thyroid","TOD: fundus, LVH (apex เลื่อน, heave, S4), edema"]}),

/* ===== สถานี 9 ===== */
Co({page:4,orig:"9",topic:"proc",sub:"Blood transfusion",ex:1,proc:1,title:"Procedure — blood transfusion",
 seen:"คล้าย SI130 Ro409–412 ข้อ 17 · SI131 Ro409–412 ข้อ 13 (แสดงการให้เลือด)",
 stem:`Demonstrate the steps of giving a blood transfusion (packed red cells) to a patient, saying aloud what you check and do at each step.`,
 gray:"9. แสดงขั้นตอนการให้เลือด",
 flag:"ไฟล์มีแค่หัวข้อ — บทผู้คุม (sp) และ checklist Claude แต่งตาม Key Blood transfusion (OSCE_REF) · ข้อย่อย 9.2 Claude เติม",
 notes:"ไฟล์จดแค่หัวข้อ \"แสดงขั้นตอนการให้เลือด\" ไม่มีรายละเอียด/คำตอบ · checklist อิงแบบประเมินการให้เลือด (Key Blood transfusion)",
 sp:"มีหุ่น/ผู้ป่วยจำลองที่มี heparin lock · ถุง PRC 1 unit พร้อมใบคล้องเลือด, ใบ order, ใบ consent ที่ลงชื่อแล้ว · ข้อมูลทุกอย่าง (ชื่อ-นามสกุล, HN, unit no., หมู่เลือด, วันหมดอายุ) ตรงกัน เลือดสีปกติ ไม่มีก้อน ถุงไม่รั่ว · ถ้าผู้สอบเรียกพยาบาลมาตรวจซ้ำ ผู้คุมรับบทพยาบาลยืนยัน · หลังผู้สอบเริ่มให้เลือดและบอกว่าจะวัด vital signs → ผู้คุมถามข้อ 9.2",
 parts:S(
  B("9.1 Demonstrate the steps of blood transfusion.",10,{tags:["proc"],
   ans:"<b>ก่อนให้:</b> ตรวจ <b>informed consent</b> · ตรวจ <b>order/ข้อบ่งชี้/rate</b> และ premedication · สวมถุงมือ<br><b>ตรวจถุงเลือด:</b> สี, clot, hemolysis, ถุงรั่ว/ฉีก · <b>ใบคล้องต้องติดกับถุงเสมอ</b> · ตรวจร่วมกับแพทย์/พยาบาลอีกคน (double check): <b>ชื่อ-นามสกุล, HN</b> ถุง vs order vs ผู้ป่วย, <b>unit no.</b> ใบคล้อง vs ถุง, <b>หมู่เลือด ABO/Rh</b>, <b>วันหมดอายุ</b> · ไม่ตรง → ห้ามให้ คืนธนาคารเลือด/ขอถุงใหม่<br><b>เตรียม set:</b> ปิด roller clamp → ต่อ set (มี filter 170–260 µm) กับถุงแบบ aseptic → แขวน → ไล่เลือดให้เต็ม set ไม่มีฟองอากาศ<br><b>ที่ผู้ป่วย:</b> แนะนำตัว ยืนยันตัวผู้ป่วย (ถามชื่อ-นามสกุล ± หมู่เลือด เทียบป้ายข้อมือ) อธิบายข้อบ่งชี้และผลข้างเคียง · วัด <b>baseline vital signs</b> · ต่อเข้า heparin lock/IV (ห้ามให้ยา/สารน้ำอื่นนอกจาก NSS ทางเดียวกัน) · ปรับ rate ช้า ๆ ช่วง 15 นาทีแรก แล้วตาม order (1 unit เสร็จภายใน 4 ชม.)<br><b>เฝ้าระวัง:</b> อยู่สังเกตอาการ วัด <b>VS ซ้ำหลังเริ่ม ~15 นาที</b> (แบบประเมิน: 5–10 นาที) และเมื่อให้เสร็จ · บันทึก",
   exp:"แบบประเมินการให้เลือด (OSCE_REF) เน้น: consent, order, premed, ถุงมือ, คุณภาพเลือด, ใบคล้องติดถุง ★★, ชื่อ/HN, unit no., หมู่เลือด, วันหมดอายุ, ปิด clamp-ต่อ set-แขวน-ไล่ลม, แนะนำตัว/แจ้งข้อบ่งชี้และ ADR, ต่อ heparin lock, ปรับ rate, สังเกตอาการ, VS หลังให้ 5–10 นาที ★★ · ความผิดพลาดที่อันตรายที่สุด = ABO-incompatible transfusion จาก clerical error",
   rubric:"ได้เต็ม = ครบตามลำดับ · ข้อสำคัญ (ขาด = ได้ 0 ในข้อย่อยนี้): ตรวจตัวตนผู้ป่วยกับถุงเลือด และใบคล้องติดถุง/หมู่เลือด/unit no. · ลืม consent หรือ VS = หักคะแนน",
   pts:[H("ก่อนให้เลือด",15),P("Check informed consent","consent","ยินยอม"),P("Check order, indication, rate, premedication","order","indication","ข้อบ่งชี้","premed","rate"),P("Wear gloves","ถุงมือ","glove"),
    H("ตรวจถุงเลือด",35),P("Inspect blood quality: color, clot, leak, expiry date","สีเลือด","สีปกติ","clot","ก้อน","รั่ว","leak","หมดอายุ","expir"),CR(P("Double check with another staff: name, HN, unit no., ABO/Rh — tag attached to bag","double check","พยาบาล","\\bhn\\b","unit no","หมู่เลือด","blood group","abo","ใบคล้อง","tag")),
    H("เตรียม set",15),P("Close roller clamp, spike bag aseptically, hang, prime set without air","clamp","prime","ไล่(ลม|อากาศ)","ฟองอากาศ","air","แขวน","spike","aseptic"),
    H("ที่ผู้ป่วย",20),CR(P("Identify patient at bedside (ask name, check wristband)","ถามชื่อ","ป้ายข้อมือ","wristband","identify","ยืนยันตัว")),P("Explain indication and side effects","อธิบาย","แจ้งผู้ป่วย","side effect","ผลข้างเคียง","adr"),P("Baseline vital signs","baseline","vital","v/?s","สัญญาณชีพ"),P("Connect to IV/heparin lock; slow rate first 15 min, finish within 4 h","heparin lock","iv line","ต่อเข้า","15 (min|นาที)","4 (hr|hour|ชม|ชั่วโมง)","ช้า ?ๆ"),
    H("เฝ้าระวัง",15),P("Observe patient; repeat VS ~15 min after start and at end","สังเกต","observe","monitor","vital","5[–-]?10","15 (min|นาที)")]}),
  B("9.2 Fifteen minutes after starting, the patient develops fever 38.8 °C with chills. What do you do?",3,{tags:["proc"],flag:ADD,
   ans:"<b>หยุดให้เลือดทันที</b> · คง IV line ด้วย <b>NSS</b> (เปลี่ยน set) · ประเมิน ABC/vital signs อย่างรวดเร็ว · <b>ตรวจ clerical error ข้างเตียง</b> (ชื่อ/HN/หมู่เลือด/unit no.) · แจ้งแพทย์และธนาคารเลือด ส่งถุงเลือดพร้อม set คืน · ส่งตรวจ: <b>DAT</b>, repeat crossmatch/ABO, CBC, hemolysis labs (LDH, bilirubin, haptoglobin), UA (hemoglobinuria), <b>hemoculture ผู้ป่วยและ culture ถุงเลือด</b>, BUN/Cr, coagulation · Ddx: <b>acute hemolytic transfusion reaction</b>, <b>bacterial contamination (sepsis)</b>, <b>febrile non-hemolytic transfusion reaction</b> (diagnosis of exclusion → antipyretic)",
   exp:"OSCE_REF (Fever: &gt;1 °C rise และ &gt;38 °C ระหว่างหรือภายใน 4 ชม.) → stop transfusion, keep vein open with NSS, rapid assessment, bedside clerical check · มีอาการรุนแรง (T ≥39, hypotension, rigors, dyspnea, back pain, hemoglobinuria) → คิด AHTR / sepsis → ห้ามให้ถุงนั้นต่อ · sepsis: ส่ง C/S + broad-spectrum ATB",
   rubric:"ข้อสำคัญ = หยุดให้เลือดทันที + คงเส้นด้วย NSS · ได้เต็มเมื่อบอก clerical check + ส่งตรวจ + ddx ≥2",
   pts:[CR(P("Stop transfusion immediately","stop","หยุด")),P("Keep IV open with NSS","nss","normal saline","0\\.9"),P("Check vital signs/ABC and bedside clerical error","clerical","vital","abc","ตรวจสอบ(ชื่อ|ถุง)"),P("Return bag; send DAT, hemolysis labs, cultures","\\bdat\\b","coomb","culture","ldh","haptoglobin","ธนาคารเลือด","blood bank"),G("Ddx (≥2)",2,P("Acute hemolytic transfusion reaction","hemolytic","ahtr"),P("Bacterial contamination / sepsis","sepsis","bacteri","contamina"),P("Febrile non-hemolytic reaction","febrile non","fnhtr","non-?hemolytic"))]})
 ),
 interp:"Procedure station: ให้เลือดอย่างปลอดภัย — หัวใจคือการตรวจสอบตัวตนผู้ป่วย/ถุงเลือดซ้ำสองคน และการจัดการ transfusion reaction",
 summary:["ก่อนให้: consent, order, premed · ถุง: สี/clot/รั่ว/หมดอายุ · ใบคล้องติดถุง","Double check: ชื่อ-นามสกุล, HN, unit no., หมู่เลือด (ข้างเตียง ถามชื่อผู้ป่วย)","ให้ช้าใน 15 นาทีแรก, VS ก่อน-ระหว่าง (~15 นาที)-หลัง, เสร็จใน 4 ชม.","Reaction: หยุดเลือด → NSS → ตรวจ clerical → แจ้งธนาคารเลือด + DAT, culture"],
 opinion:"แบบประเมิน (Key Blood transfusion) กำหนด VS หลังเริ่มให้ 5–10 นาที และไม่มีขั้น baseline VS — เฉลยใส่ baseline VS และ VS ~15 นาทีหลังเริ่ม + เมื่อให้เสร็จตาม BSH/AABB (ตอบ 5–10 นาทีตามแบบประเมินก็ได้คะแนน)"}),

/* ===== สถานี 10 ===== */
Co({page:4,orig:"10",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — abdomen",
 seen:"คล้าย SI131 Ro417–420 ข้อ 25 (ตรวจ abdomen)",
 stem:`Perform a complete examination of the abdomen on this patient and report your findings.`,
 gray:"10. จงแสดงการตรวจร่างกาย abdomen และรายงานผลตรวจ: Normal",
 flag:"บทผู้ป่วย (sp) Claude แต่ง (ไฟล์บอกแค่ผลตรวจ normal)",
 notes:"ผู้จด: ผลตรวจ normal",
 sp:"ผู้ป่วยจำลองสุขภาพดี ไม่มีอาการ · ผลตรวจปกติทั้งหมด: ท้องแบนสมมาตร ไม่มีแผลผ่าตัด/เส้นเลือดโป่ง · bowel sound ปกติ ไม่มี bruit · เคาะโปร่ง liver span ~10 ซม. Traube's space โปร่ง · คลำนุ่ม ไม่กดเจ็บ ตับม้ามไตคลำไม่ได้ · ไม่มี shifting dullness",
 parts:S(
  B("10.1 Examine the abdomen and report your findings.",10,{tags:["pe"],
   ans:"<b>เตรียม:</b> แนะนำตัว ขออนุญาต ล้างมือ มือ/stethoscope อุ่น · ท่า<b>นอนหงายราบ หมอนใบเดียว แขนข้างลำตัว</b> · เปิดเผยตั้งแต่ xiphoid ถึง symphysis pubis (ใช้ผ้าคลุม) · ยืนด้านขวา · ถามว่าเจ็บตรงไหน (ตรวจจุดเจ็บทีหลัง)<br><b>General:</b> pallor, jaundice, signs of chronic liver disease<br><b>Inspection:</b> contour, symmetry, scars, dilated veins, visible peristalsis/pulsation, umbilicus, hernia (ให้ไอ)<br><b>Auscultation (ก่อนเคาะ/คลำ):</b> bowel sound ≥1 นาที, bruit (aorta, renal)<br><b>Percussion:</b> ทั้ง 4 quadrants, <b>liver span</b> (MCL), Traube's space, (shifting dullness ถ้าสงสัย ascites)<br><b>Palpation:</b> light → deep ทั้ง 9 regions ดูสีหน้าผู้ป่วย · <b>liver</b> (เริ่มจาก RLQ ไล่ขึ้นตามการหายใจ) · <b>spleen</b> (จาก RLQ ไป LUQ, ± ท่าตะแคงขวา) · <b>kidney</b> bimanual/ballottement · aorta<br><b>รายงาน:</b> normal abdominal examination (ระบุผลแต่ละขั้น) · บอกว่าจะตรวจ PR/hernial orifices/external genitalia เพื่อให้ครบ",
   exp:"ลำดับ abdomen: inspection → <b>auscultation</b> → percussion → palpation (ฟังก่อนเพื่อไม่ให้การคลำกระตุ้น bowel sound) · liver span ปกติ 6–12 ซม. ที่ MCL · ม้ามต้องโต ~1.5–2 เท่าจึงคลำได้",
   rubric:"ได้เต็ม = เตรียม/ท่า/เปิดเผยถูก + ครบ 4 ขั้นตามลำดับ + คลำตับ ม้าม ไต + รายงาน · ข้ามการคลำตับ/ม้าม หรือเปิดเผยไม่พอ = หักคะแนน",
   pts:[H("เตรียม",15),P("Introduce, consent, hand hygiene","แนะนำตัว","ขออนุญาต","introduce","consent","ล้างมือ"),P("Supine flat, arms by sides; expose xiphoid to pubis","นอนหงาย","supine","flat","แขน","expose","เปิดเผย"),
    H("Inspection",15),P("Contour, scars, veins, peristalsis, pulsation, hernia","contour","scar","แผล","vein","peristal","pulsat","hernia","inspect"),
    H("Auscultation",15),P("Bowel sounds and bruits (before palpation)","bowel sound","bruit","ฟัง","auscult"),
    H("Percussion",15),P("Four quadrants, liver span, Traube's space","percuss","เคาะ","liver span","traube"),
    H("Palpation",30),P("Light then deep palpation, watching the face","light","deep","superficial","ตื้น","ลึก"),CR(P("Liver and spleen palpation from RLQ","liver","spleen","ตับ","ม้าม")),P("Kidney (bimanual / ballottement)","kidney","ไต","ballot","bimanual"),
    H("รายงาน",10),P("Report normal findings (± offer PR, hernial orifices, genitalia)","normal","ปกติ","report","รายงาน","\\bpr\\b","rectal")]})
 ),
 interp:"PE station: ตรวจท้องครบลำดับ (ดู-ฟัง-เคาะ-คลำ) และรายงานผลปกติอย่างเป็นระบบ",
 summary:["ท่านอนราบ แขนข้างลำตัว เปิดเผย xiphoid–pubis ยืนด้านขวา","ลำดับ: inspection → auscultation → percussion → palpation","คลำตับ/ม้ามเริ่มจาก RLQ ตามจังหวะหายใจ · liver span 6–12 ซม."]}),

/* ===== สถานี 11 ===== */
Co({page:4,orig:"11",topic:"pe",sub:"Chest",ex:1,title:"Physical examination — respiratory system in a patient with left chest pain",
 seen:"คล้าย SI131 Ro417–420 ข้อ 5 (ตรวจ RS ผู้ป่วย chest pain)",
 stem:`A patient presents with left-sided chest pain. Perform a respiratory system examination and report your findings.`,
 gray:"11. ผู้ป่วยมาด้วยอาการเจ็บหน้าอกซ้าย จงแสดงการตรวจร่างกาย RS: Normal (อย่าลืม palpation ด้วยว่ามี tenderness ไหม)",
 flag:"บทผู้ป่วย (sp) Claude แต่ง (ไฟล์บอกแค่ผลตรวจ normal)",
 notes:"ผู้จด: ผลตรวจ normal · อย่าลืม palpation ด้วยว่ามี tenderness ไหม",
 sp:"ผู้ป่วยจำลอง นั่งบนเตียง เจ็บหน้าอกซ้ายเล็กน้อย · ผลตรวจปกติทั้งหมด: RR 16/min ไม่ใช้กล้ามเนื้อช่วยหายใจ · trachea อยู่กลาง · chest expansion เท่ากันสองข้าง · ไม่มี chest wall tenderness · tactile fremitus เท่ากัน · เคาะ resonance · breath sound vesicular เท่ากัน ไม่มี adventitious sound/pleural friction rub · vocal resonance ปกติ",
 parts:S(
  B("11.1 Examine the respiratory system and report your findings.",10,{tags:["pe"],
   ans:"<b>เตรียม:</b> แนะนำตัว ขออนุญาต ล้างมือ ท่านั่ง/นอนศีรษะสูง 45° เปิดเผยหน้าอก (ผู้หญิงคลุมผ้า)<br><b>General/Inspection:</b> RR, dyspnea, accessory muscles, cyanosis, clubbing · chest shape/deformity, scars, <b>chest movement</b> สองข้างเท่ากันไหม, lesion บนผนังอก (เช่น herpes zoster)<br><b>Palpation:</b> <b>trachea position</b>, <b>chest wall tenderness</b> (ข้อสำคัญในผู้ป่วยเจ็บหน้าอก — costochondritis, rib fracture), <b>chest expansion</b> (ด้านหน้าและหลัง), <b>tactile fremitus</b><br><b>Percussion:</b> เทียบซ้าย-ขวาเป็นคู่ ด้านหน้า ข้าง หลัง รวม supraclavicular/axilla<br><b>Auscultation:</b> breath sound, adventitious sounds (crepitation, wheeze), <b>pleural friction rub</b>, vocal resonance<br><b>รายงาน:</b> normal respiratory examination ไม่มี chest wall tenderness → ต้องหาสาเหตุอื่นของ chest pain (หัวใจ, GI)",
   exp:"Chest pain + RS exam: มองหา pneumothorax (hyperresonance, breath sound ลดลง, trachea shift), pleural effusion, pneumonia/pleuritis (friction rub), musculoskeletal (tenderness reproducible) · ควรบอกว่าจะตรวจ precordium ต่อด้วย",
   rubric:"ได้เต็ม = ครบ inspection–palpation–percussion–auscultation หน้า+หลัง + palpate tenderness + รายงาน · ลืมคลำ tenderness (ผู้จดย้ำ) = หักคะแนน",
   pts:[H("เตรียม + inspection",20),P("Introduce, consent, position, exposure","แนะนำตัว","ขออนุญาต","introduce","consent","45","expose","เปิดเผย"),P("RR, accessory muscles, chest shape, movement, lesions","\\brr\\b","respiratory rate","accessory","shape","movement","inspect"),
    H("Palpation",35),P("Trachea position","trachea","หลอดลม"),CR(P("Chest wall tenderness","tender","กดเจ็บ")),P("Chest expansion","expansion","ขยาย"),P("Tactile fremitus","fremitus"),
    H("Percussion",15),P("Percussion comparing both sides (front, side, back)","percuss","เคาะ","resonan"),
    H("Auscultation",20),P("Breath sounds, added sounds, pleural friction rub, vocal resonance","breath sound","vesicular","crepitation","wheez","friction","vocal","ฟัง","auscult"),
    H("รายงาน",10),P("Report normal findings","normal","ปกติ","report","รายงาน")]})
 ),
 interp:"PE station: ตรวจ RS ครบ 4 ขั้น โดยไม่ลืมคลำหา chest wall tenderness ในผู้ป่วยเจ็บหน้าอก",
 summary:["Palpation: trachea, tenderness, expansion, tactile fremitus","เคาะ/ฟังเทียบซ้าย-ขวาเป็นคู่ ทั้งหน้าและหลัง","Chest pain: มองหา pneumothorax, effusion, friction rub, MSK tenderness"]}),

/* ===== สถานี 12 ===== */
Co({page:4,orig:"12",topic:"pe",sub:"Neuro",ex:1,title:"Physical examination — deep tendon reflexes and ankle clonus",
 stem:`Examine the deep tendon reflexes and test for ankle clonus with the patient lying supine. Report your findings.`,
 gray:"12. จงแสดงการตรวจร่างกาย DTRs, ankle clonus ในท่านอน",
 flag:"บทผู้ป่วย (sp) และผลตรวจ Claude แต่ง (ไฟล์มีแค่โจทย์)",
 notes:"ไฟล์จดแค่โจทย์ ไม่มีผลตรวจ/คำตอบ",
 sp:"ผู้ป่วยจำลองนอนหงาย ผ่อนคลาย · ผลตรวจ: reflex ทุกตำแหน่ง 2+ เท่ากันสองข้าง · ankle clonus negative ทั้งสองข้าง · (ถ้าผู้สอบตรวจ plantar response: flexor ทั้งสองข้าง)",
 parts:S(
  B("12.1 Examine the deep tendon reflexes and ankle clonus, and report.",10,{tags:["pe"],
   ans:"<b>เตรียม:</b> แนะนำตัว ขออนุญาต ล้างมือ ผู้ป่วยนอนหงายผ่อนคลาย เปิดเผยแขนขา · ถือ reflex hammer ที่ปลายด้าม ปล่อยให้แกว่งตามน้ำหนัก · <b>เทียบซ้าย-ขวาทีละตำแหน่ง</b><br><b>Biceps (C5–6):</b> ข้อศอกงอ ~90° วางแขนบนท้อง นิ้วโป้งผู้ตรวจกดบน biceps tendon แล้วเคาะบนนิ้ว<br><b>Brachioradialis (C5–6):</b> เคาะเหนือ radial styloid ~3–5 ซม.<br><b>Triceps (C7–8):</b> พาดแขนผ่านหน้าอก ข้อศอกงอ 90° เคาะ triceps tendon เหนือ olecranon<br><b>Knee (L3–4):</b> ยกเข่าทั้งสองข้างโดยแขนรองใต้เข่า งอ ~60–90° เคาะ patellar tendon<br><b>Ankle (S1):</b> งอสะโพก-เข่า หมุนขาออก (frog position) dorsiflex เท้าเล็กน้อย เคาะ Achilles tendon<br>ถ้า reflex ไม่ออก → <b>reinforcement</b> (Jendrassik maneuver: เกี่ยวนิ้วดึง / กัดฟัน)<br><b>Ankle clonus:</b> งอเข่า-สะโพกเล็กน้อย ประคองใต้เข่า <b>dorsiflex เท้าอย่างรวดเร็วแล้วค้างไว้</b> นับจังหวะ — sustained clonus (&gt;3–5 beats) = UMN lesion<br><b>รายงาน:</b> DTR 2+ ทุกตำแหน่ง เท่ากันสองข้าง, ankle clonus negative (± plantar flexor)",
   exp:"Grading: 0 absent, 1+ hypoactive, 2+ normal, 3+ brisk/spread, 4+ with clonus · hyperreflexia + clonus + Babinski = UMN · areflexia = LMN/peripheral neuropathy · ข้อสำคัญคือเทียบสองข้าง",
   rubric:"ได้เต็ม = ครบ 5 reflex (biceps, brachioradialis, triceps, knee, ankle) เทคนิคถูก + reinforcement + ankle clonus ถูกวิธี + grading/รายงาน · ขาด reflex ใด หรือไม่เทียบสองข้าง = หักคะแนน",
   pts:[H("เตรียม",10),P("Introduce, consent, relaxed supine, compare both sides","แนะนำตัว","ขออนุญาต","introduce","consent","relax","compare","เทียบ","สองข้าง"),
    H("Upper limb",30),P("Biceps reflex (C5–6)","biceps"),P("Brachioradialis reflex (C5–6)","brachioradial","supinator"),P("Triceps reflex (C7–8)","triceps"),
    H("Lower limb",25),P("Knee (patellar) reflex (L3–4)","knee","patella","quadriceps"),P("Ankle (Achilles) reflex (S1)","ankle reflex","achilles","ankle jerk"),P("Reinforcement (Jendrassik maneuver)","reinforc","jendrassik"),
    H("Ankle clonus",25),CR(P("Ankle clonus: brisk sustained dorsiflexion, count beats","clonus","dorsiflex")),
    H("รายงาน",10),P("Grade (0–4+) and report: 2+ symmetrical, no clonus","2\\+","grade","normal","ปกติ","symmetr","negative")]})
 ),
 interp:"PE station: ทำ DTR ทั้ง 5 ตำแหน่งในท่านอนพร้อม root level + ankle clonus และรายงานเป็น grade",
 summary:["Biceps/brachioradialis C5–6 · triceps C7–8 · knee L3–4 · ankle S1","Grade 0–4+ (2+ ปกติ, 4+ = มี clonus) เทียบซ้าย-ขวาเสมอ","ไม่ออก → Jendrassik reinforcement","Ankle clonus: dorsiflex เร็วแล้วค้าง · sustained = UMN"]}),

/* ===== สถานี 13 ===== */
Co({page:4,orig:"13",topic:"hx",sub:"Hematuria",ex:1,title:"History taking — gross hematuria in a young woman",
 seen:"คล้าย SI130 Ro409–412 ข้อ 23 (ญ 29 ปัสสาวะเป็นเลือด) · SI131 Ro413–416 ข้อ 19 (hematuria → IgA nephropathy)",
 stem:`A 29-year-old woman presents with gross hematuria. Take a relevant history (80%) and then tell the examiner your most likely diagnosis (20%).`,
 gray:"13. (ซักประวัติ) ผู้ป่วยหญิงอายุ 29 ปี มาด้วย gross hematuria จงซักประวัติ (80 คะแนน) และ แจ้งการวินิจฉัย (20 คะแนน) **ddx: menstrual contamination, KUB stone, KUB malignancy, nephritic syndrome (post-strep Glomerulonephritis, IgA nephropathy) - แยก initial, persistent, terminal, ลิ่มเลือดปน? - เคยเป็นมาก่อน?, onset - อาการร่วม เช่น dysuria, นิ่วหลุดออกมา - บวม? (glomerular) - ปริมาณปัสสาวะ, ไข้ - **ก่อนหน้านี้มีไข้ เจ็บคอ? - ยา, ประวัติประจำเดือน - malignancy เบื่ออาหาร น้ำหนักลด? · Diagnosis: IgA nephropathy (คนไข้คนนี้มี hematuria หลังไข้ เจ็บคอ 1 wk และเคยเป็นมาก่อน อาจารย์รัตนาบอกว่าถ้า post-strep จะไม่ recurrent)",
 flag:"บทผู้ป่วย (sp) รายละเอียด Claude แต่งจากที่ผู้จดเล่า (hematuria หลังไข้เจ็บคอ + เคยเป็นมาก่อน)",
 notes:"ผู้จดเล่า: ddx menstrual contamination, KUB stone, KUB malignancy, nephritic syndrome (PSGN, IgA nephropathy) · ประเด็นที่ซัก: initial/persistent(total)/terminal, ลิ่มเลือดปน · เคยเป็นมาก่อน, onset · dysuria, นิ่วหลุด · บวม (glomerular) · ปริมาณปัสสาวะ, ไข้ · **ก่อนหน้านี้มีไข้ เจ็บคอ · ยา, ประวัติประจำเดือน · เบื่ออาหาร น้ำหนักลด · Dx IgA nephropathy: ผู้ป่วยมี hematuria หลังไข้ เจ็บคอ 1 wk และเคยเป็นมาก่อน — อาจารย์บอกว่าถ้า post-strep จะไม่ recurrent · "+TIP2,
 sp:"หญิง 29 ปี พนักงานบริษัท · CC: ปัสสาวะเป็นสีแดงเหมือนน้ำล้างเนื้อ 1 วัน · เป็นตลอดสาย (ตั้งแต่ต้นจนจบ) ไม่มีลิ่มเลือด ไม่ปวด · ~1 สัปดาห์ก่อนมีไข้ เจ็บคอ (ยังเจ็บคอเล็กน้อยอยู่ตอนปัสสาวะเริ่มแดง) · <b>เคยเป็นแบบนี้ 1 ครั้งเมื่อ ~1 ปีก่อนตอนเป็นหวัด หายเองใน 2–3 วัน</b> · ไม่มีแสบขัด ปัสสาวะไม่บ่อย ไม่ปวดเอว/ปวดบั้นเอวร้าวลงขาหนีบ ไม่มีก้อนนิ่วหลุด · ไม่บวม ปัสสาวะปริมาณปกติ ไม่เป็นฟอง ไม่เคยวัดความดัน · ประจำเดือนปกติ ครั้งล่าสุด 2 สัปดาห์ก่อน (ตอนนี้ไม่มีประจำเดือน) · ไม่มีผื่น ปวดข้อ ผมร่วง แผลในปาก · ไม่มีเบื่ออาหาร น้ำหนักไม่ลด · ไม่สูบบุหรี่ · ยา: paracetamol ตอนไข้ ไม่กินยาละลายลิ่มเลือด/NSAID/สมุนไพร · ไม่มีโรคประจำตัว · ครอบครัวไม่มีโรคไต/หูหนวก/เลือดออกง่าย · ไม่มีเลือดออกง่ายที่อื่น",
 parts:S(
  B("13.1 Take a relevant history from the patient.",8,{tags:["hx"],
   ans:"<b>เปิด:</b> แนะนำตัว ยืนยันชื่อ-อายุ ถาม CC/onset<br><b>ลักษณะ hematuria:</b> สี (แดงสด vs น้ำล้างเนื้อ/โคล่า), <b>ช่วงที่เป็น (initial / total / terminal)</b>, <b>ลิ่มเลือด</b> (มี clot = non-glomerular), ปวดหรือไม่, ระยะเวลา, <b>เคยเป็นมาก่อน</b><br><b>แยก pseudohematuria:</b> <b>ประจำเดือน</b> (menstrual contamination), อาหาร/ยาที่ทำให้ปัสสาวะแดง (rifampicin), ออกกำลังหนัก (myoglobin)<br><b>Lower UT / stone:</b> dysuria, frequency, urgency, <b>colicky flank pain ร้าวลงขาหนีบ, นิ่วหลุด</b>, ไข้ (pyelonephritis)<br><b>Glomerular:</b> <b>บวม</b>, ปัสสาวะเป็นฟอง, ปริมาณปัสสาวะลดลง, ความดันสูง<br><b>Antecedent infection:</b> <b>ไข้/เจ็บคอ/ผิวหนังติดเชื้อ ก่อนหน้านี้ — ห่างกี่วัน</b><br><b>Systemic:</b> ผื่น ปวดข้อ แผลในปาก (SLE), ไอเป็นเลือด (vasculitis/anti-GBM), เลือดออกง่ายที่อื่น<br><b>Malignancy:</b> เบื่ออาหาร น้ำหนักลด, สูบบุหรี่, สารเคมี<br><b>อื่น ๆ:</b> ยา (anticoagulant, NSAID, cyclophosphamide, สมุนไพร), โรคประจำตัว, trauma, <b>family history</b> (โรคไต, หูหนวก — Alport, PKD)",
   exp:"Glomerular hematuria: สีน้ำล้างเนื้อ/โคล่า ตลอดสาย ไม่มี clot ไม่ปวด ± บวม/ความดันสูง/proteinuria · non-glomerular: แดงสด มี clot ± ปวด · Initial = urethra, terminal = bladder neck/prostate, total = bladder ขึ้นไป/ไต",
   rubric:"ได้เต็ม = ครอบคลุม ลักษณะ hematuria + pseudohematuria/ประจำเดือน + stone/UTI + glomerular + infection ก่อนหน้า (ระยะห่าง) + recurrence + ยา/FH/malignancy · ข้อสำคัญ = ถามไข้เจ็บคอก่อนหน้า และเคยเป็นมาก่อน",
   pts:[H("เปิดการซักประวัติ",5),P("Introduce, confirm identity","แนะนำตัว","introduce","ยืนยันชื่อ","ชื่ออะไร"),
    H("ลักษณะ hematuria",25),P("Color (bright red vs cola/meat-wash)","สีอะไร","สีแดง","สีปัสสาวะ","color","น้ำล้างเนื้อ","โคล่า","cola"),P("Timing: initial / total / terminal","initial","terminal","total","ตลอดสาย","ช่วงไหน"),P("Clots","clot","ลิ่ม"),CR(P("Previous episodes (recurrence) and onset","เคยเป็น","previous","recur","ครั้งก่อน","onset","เริ่ม")),
    H("Pseudohematuria / non-glomerular",20),P("Menstruation (contamination)","ประจำเดือน","menstru","\\blmp\\b"),P("Dysuria, frequency, fever (UTI)","dysuria","แสบ","ขัด","frequency","บ่อย","ไข้"),P("Colicky flank pain, passed stone","flank","ปวดเอว","ปวดหลัง","colic","นิ่ว","stone"),
    H("Glomerular + preceding infection",30),P("Edema, foamy urine, oliguria, hypertension","บวม","edema","ฟอง","foam","ปริมาณ","oligur","ความดัน"),CR(P("Preceding fever / sore throat / skin infection — interval","เจ็บคอ","sore throat","pharyng","ไข้.{0,10}ก่อน","skin infect","impetigo")),P("Systemic: rash, arthralgia, hemoptysis, bleeding elsewhere","ผื่น","rash","ปวดข้อ","joint","ไอเป็นเลือด","hemoptysis","เลือดออก"),
    H("Others",20),P("Weight loss, anorexia, smoking (malignancy)","น้ำหนัก","weight","เบื่ออาหาร","anorexia","สูบบุหรี่","smok"),P("Drugs (anticoagulant, NSAID, herbal)","ประวัติยา","กินยา","ยาที่","drug","warfarin","anticoag","nsaid","สมุนไพร"),P("Family history (renal disease, deafness)","family","ครอบครัว","กรรมพันธุ์","หูหนวก","deaf")]}),
  B("13.2 Tell the examiner your most likely diagnosis.",2,{tags:["hx"],
   ans:"<b>IgA nephropathy</b> — gross hematuria ร่วมกับ (synpharyngitic) URI และ<b>เป็นซ้ำ</b>",
   exp:"แยกจาก <b>post-streptococcal GN</b>: PSGN มี latent period <b>1–3 สัปดาห์</b>หลัง pharyngitis (3–6 สัปดาห์หลัง impetigo) มักมีบวม ความดันสูง C3 ต่ำ และ<b>ไม่เป็นซ้ำ</b> · IgA nephropathy: hematuria เกิด<b>พร้อม/ภายใน 1–3 วัน</b>หลัง URI, เป็นซ้ำได้, C3 ปกติ · ยืนยันด้วย UA (dysmorphic RBC, RBC cast), UPCR, Cr, C3, renal biopsy (IgA deposit ใน mesangium) ถ้ามี proteinuria/eGFR ลด",
   rubric:"ได้เต็ม = IgA nephropathy พร้อมเหตุผล (เป็นซ้ำ + สัมพันธ์กับ URI) · ตอบ PSGN = ไม่ได้ (อาจารย์ให้เหตุผลว่า post-strep ไม่ recurrent) · ตอบ glomerulonephritis เฉย ๆ = บางส่วน",
   pts:[CR(P("IgA nephropathy","iga")),P("Reason: recurrent, synpharyngitic with URI (vs PSGN latent 1–3 wk, not recurrent)","recur","เป็นซ้ำ","เคยเป็น","synpharyng","พร้อม","post-?strep","psgn")]})
 ),
 interp:"Hx station: แยก glomerular vs non-glomerular hematuria และแยก IgA nephropathy จาก PSGN ด้วยระยะห่างจาก URI + การเป็นซ้ำ",
 summary:["Clot / แดงสด / ปวด → non-glomerular (stone, UTI, tumor)","น้ำล้างเนื้อ ตลอดสาย + บวม/HT → glomerular","IgA nephropathy: hematuria พร้อม URI (1–3 วัน), เป็นซ้ำ, C3 ปกติ","PSGN: หลัง pharyngitis 1–3 สัปดาห์, C3 ต่ำ, ไม่เป็นซ้ำ"],
 opinion:"เห็นด้วยกับผู้จด (IgA nephropathy) · หมายเหตุ: ผู้จดเล่าว่า hematuria \"หลังไข้ เจ็บคอ 1 wk\" — ระยะห่างจริงที่แยกโรคคือ IgA เกิดภายใน 1–3 วันของ URI ส่วน PSGN 1–3 สัปดาห์ บทผู้ป่วยในเฉลยจึงให้ hematuria เกิดขณะยังเจ็บคอ และเพิ่มเหตุผลเรื่องการเป็นซ้ำตามที่อาจารย์ให้"}),

/* ===== สถานี 14 ===== */
Co({page:5,orig:"14",topic:"lab",sub:"LFT",title:"Low-grade fever followed by jaundice — liver function tests",
 seen:"คล้าย SI131 Ro413–416 ข้อ 10 · SI131 Ro417–420 ข้อ 13 (LFT acute hepatocellular injury)",
 stem:`A 45-year-old woman presents with low-grade fever for 1 week, followed by yellowish discoloration of the skin and eyes.<br>Liver function tests: AST 600 U/L, ALT 600 U/L, ALP 100 U/L, albumin 4.0 g/dL, globulin 2.5 g/dL.`,
 gray:"14. ผู้ป่วยหญิงอายุ 45 ปี มาด้วยไข้ต่ำๆ 1 สัปดาห์ หลังจากนั้นมีตัวเหลือง ตาเหลือง - LFT: AST 600, ALT 600, ALP 100, albumin 4.0, globulin 2.5 · 14.1 ให้การวินิจฉัยเบื้องต้น: Acute hepatitis · 14.2 บอกสาเหตุที่เป็นไปได้มา 3 สาเหตุ: HAV, HBV, HEV, Autoimmune, … · 14.3 ส่งตรวจเพิ่มเติมเพื่อยืนยันการวินิจฉัย: anti-HAV IgM, HBsAg, anti-HBc IgM, ANA, anti-HEV IgM, anti-HIV, …",
 flag:"ไฟล์ไม่มีค่า bilirubin (ไม่ได้แต่งเพิ่ม)",
 notes:"ผู้จดตอบ: 14.1 Acute hepatitis · 14.2 HAV, HBV, HEV, autoimmune, … · 14.3 anti-HAV IgM, HBsAg, anti-HBc IgM, ANA, anti-HEV IgM, anti-HIV, …",
 parts:S(
  B("14.1 What is your provisional diagnosis?",2,{tags:["lab"],
   ans:"<b>Acute hepatitis</b> (acute hepatocellular injury pattern)",
   exp:"AST/ALT สูง ~15 เท่าของค่าปกติ ขณะที่ ALP ปกติ → hepatocellular pattern (R ratio = (ALT/ULN)/(ALP/ULN) ≈ (600/40)/(100/120) ≈ 18 &gt;5) · albumin ปกติ globulin ไม่สูง → ไม่มีลักษณะ chronic liver disease · อาการ prodrome ไข้ต่ำ ๆ ก่อนเหลือง = เข้ากับ acute viral hepatitis · ต้องดู INR และระดับความรู้สึกตัว (acute liver failure)",
   rubric:"ได้เต็ม = acute hepatitis / acute hepatocellular injury",
   pts:[CR(P("Acute hepatitis (hepatocellular pattern)","acute hepatitis","hepatocellular","ตับอักเสบเฉียบพลัน"))]}),
  B("14.2 Give three possible causes.",3,{tags:["lab"],
   ans:"<b>Acute viral hepatitis</b>: <b>HAV</b>, <b>HBV</b> (acute หรือ flare), <b>HEV</b> (± HCV, EBV/CMV) · <b>Drug-induced liver injury</b> (paracetamol, anti-TB, herbal) · <b>Autoimmune hepatitis</b> (หญิงวัยกลางคน) · อื่น ๆ: ischemic hepatitis (AST/ALT มักสูง &gt;1,000), Wilson disease (อายุน้อย)",
   exp:"ไข้นำก่อนเหลืองเข้ากับ viral hepatitis มากที่สุด · ในไทย HAV/HEV ติดทางอาหาร-น้ำ, HBV ทางเลือด/เพศสัมพันธ์",
   rubric:"ได้เต็ม = 3 สาเหตุที่เหมาะสม",
   pts:[G("Causes (≥3)",3,P("Hepatitis A","\\bhav\\b","hepatitis a"),P("Hepatitis B","\\bhbv\\b","hepatitis b"),P("Hepatitis E","\\bhev\\b","hepatitis e"),P("Hepatitis C","\\bhcv\\b","hepatitis c"),P("Drug-induced / herbal / paracetamol","drug","dili","จากยา","herbal","สมุนไพร","paracetamol"),P("Autoimmune hepatitis","autoimmune","\\baih\\b"),P("EBV / CMV","\\bebv\\b","\\bcmv\\b"),P("Ischemic hepatitis","ischemi"),P("Wilson disease","wilson"))]}),
  B("14.3 What investigations would you send to confirm the diagnosis?",3,{tags:["lab"],
   ans:"<b>Viral serology:</b> <b>anti-HAV IgM</b>, <b>HBsAg + anti-HBc IgM</b>, <b>anti-HEV IgM</b>, anti-HCV (± HCV RNA), anti-HIV · <b>Autoimmune:</b> ANA, anti-smooth muscle Ab, serum IgG · ประเมินความรุนแรง: <b>total/direct bilirubin, PT/INR</b> · ประวัติยา/สมุนไพร (± paracetamol level) · <b>Ultrasound upper abdomen</b> (ตัด biliary obstruction)",
   exp:"Anti-HBc IgM แยก acute HBV จาก chronic flare · INR &gt;1.5 + encephalopathy = acute liver failure → ส่งต่อศูนย์ปลูกถ่ายตับ",
   rubric:"ได้เต็ม = viral serology ครบ (HAV IgM, HBsAg/anti-HBc IgM, HEV IgM) + อย่างน้อย 1 อย่างของ autoimmune/severity",
   pts:[CR(P("Anti-HAV IgM","\\bhav\\b","hepatitis a")),CR(P("HBsAg and anti-HBc IgM","hbsag","anti-?hbc","\\bhbv\\b")),P("Anti-HEV IgM","\\bhev\\b","hepatitis e"),P("Anti-HCV / anti-HIV","\\bhcv\\b","\\bhiv\\b"),P("ANA / ASMA / IgG (autoimmune)","\\bana\\b","smooth muscle","asma","igg"),P("Bilirubin, PT/INR","bilirubin","\\binr\\b","\\bpt\\b","prothrombin"),P("Ultrasound abdomen","ultrasound","\\bus\\b","อัลตรา","sono")]})
 ),
 interp:"Lab station: แยก pattern ของ LFT (hepatocellular vs cholestatic) → acute vs chronic → หาสาเหตุด้วย serology",
 summary:["ALT/AST สูงเด่น + ALP ปกติ = hepatocellular (R >5)","Albumin ปกติ = acute · ดู INR/encephalopathy เสมอ","สาเหตุ: HAV, HBV, HEV, HCV, DILI, autoimmune, ischemic","ส่ง: anti-HAV IgM, HBsAg + anti-HBc IgM, anti-HEV IgM, anti-HCV, ANA/ASMA/IgG"]}),

/* ===== สถานี 15 ===== */
Co({page:5,orig:"15",topic:"hx",sub:"Edema",ex:1,title:"History taking — swelling after taking a painkiller",
 stem:`Five days ago, this patient had leg pain and bought a painkiller from a clinic. After taking it, the patient developed swelling.<br>1. Take a relevant history.<br>2. Give the patient appropriate advice.<br>3. Recommend two alternative analgesics.`,
 gray:"15. (ซักประวัติ) 5 วันก่อนผู้ป่วยปวดขา เลยไปซื้อยาแก้ปวดที่คลินิกแห่งหนึ่งทาน แล้วมีอาการบวม · 15.1 ซักประวัติที่เกี่ยวข้อง - บวมตรงไหน, ผื่น?, แน่นหน้าอก?, หายใจลำบาก?, ปวดท้อง คลื่นไส้ อาเจียน? - ถามถึงยา ขอดูยา … ผู้ป่วยกิน ibuprofen - เคยแพ้ยาอะไรมาก่อน? ประวัติเป็นยังไง … ผู้ป่วยเคยแพ้ naproxen - ประวัติโรคประจำตัว · 15.2 จงให้คำแนะนำผู้ป่วย: หลีกเลี่ยง, เวลาพบแพทย์ให้แจ้งว่าแพ้ยากลุ่ม NSAIDS, ออกบัตรแพ้ยาให้ · 15.3 แนะนำยาแก้ปวด 2 ตัวที่ใช้แทนได้: Paracetamol, COX-2 inhibitors",
 flag:"อายุ/เพศ และรายละเอียดบทผู้ป่วย (sp) Claude แต่ง (ไฟล์บอก: กิน ibuprofen, เคยแพ้ naproxen)",
 notes:"ผู้จดเล่า: 15.1 บวมตรงไหน ผื่น แน่นหน้าอก หายใจลำบาก ปวดท้อง คลื่นไส้ อาเจียน · ถามยา ขอดูยา → ผู้ป่วยกิน ibuprofen · เคยแพ้ยาอะไรมาก่อน อาการเป็นยังไง → เคยแพ้ naproxen · โรคประจำตัว · 15.2 หลีกเลี่ยง, เวลาพบแพทย์ให้แจ้งว่าแพ้ยากลุ่ม NSAIDs, ออกบัตรแพ้ยาให้ · 15.3 paracetamol, COX-2 inhibitors · "+TIP2,
 sp:"ชาย 40 ปี ทำงานก่อสร้าง · 5 วันก่อนปวดน่องหลังยกของ ไปซื้อยาที่คลินิก กินไป 1 เม็ด ~1 ชม. ต่อมา<b>ตาบวม ปากบวม</b> มี<b>ผื่นนูนแดงคันกระจายตามตัว</b> (ลมพิษ) · ไม่แน่นหน้าอก ไม่หายใจลำบาก ไม่มีเสียงแหบ ไม่หน้ามืด ไม่ปวดท้อง ไม่อาเจียน · หยุดยาเอง อาการค่อย ๆ ยุบใน 2 วัน ตอนนี้ยังบวมรอบตาเล็กน้อย · นำแผงยามาด้วย: <b>ibuprofen 400 mg</b> · เคยแพ้ยา: 2 ปีก่อนกิน <b>naproxen</b> แล้วตาบวมคล้ายกัน แต่ไม่รู้ชื่อกลุ่มยา ไม่มีบัตรแพ้ยา · เคยกิน paracetamol ไม่มีปัญหา · ไม่มีโรคประจำตัว ไม่มีหอบหืด/จมูกอักเสบเรื้อรัง/ริดสีดวงจมูก · ไม่มีลมพิษเรื้อรัง · ไม่ได้กินยาอื่น/อาหารแปลกในวันนั้น",
 parts:S(
  B("15.1 Take a relevant history.",6,{tags:["hx"],
   ans:"<b>ลักษณะอาการ:</b> บวมตรงไหน (ตา ปาก ลิ้น คอ = angioedema), <b>ผื่น/ลมพิษ</b>, คัน · <b>อาการ anaphylaxis</b>: แน่นหน้าอก หายใจลำบาก เสียงแหบ/กลืนลำบาก หน้ามืด ปวดท้อง คลื่นไส้ อาเจียน · เวลาเริ่มหลังกินยา, ระยะเวลา, ตอนนี้เป็นอย่างไร<br><b>ยา:</b> ชื่อยา <b>ขอดูแผง/ซองยา</b> (ibuprofen), ขนาด, ยาอื่น/อาหารที่กินพร้อมกัน<br><b>ประวัติแพ้ยา:</b> เคยแพ้ยาอะไร อาการอย่างไร (naproxen → อาการคล้ายกัน = cross-reactive NSAID hypersensitivity) · ยาแก้ปวดที่เคยกินแล้วไม่แพ้ (paracetamol)<br><b>โรคประจำตัว:</b> asthma, chronic rhinosinusitis/nasal polyp (NSAID-exacerbated respiratory disease), chronic urticaria, โรคไต/ตับ/แผลในกระเพาะ (เลือกยาแทน)",
   exp:"การวินิจฉัย: <b>NSAID hypersensitivity — cross-reactive NSAID-induced urticaria/angioedema</b> (แพ้ทั้ง ibuprofen และ naproxen ซึ่งต่างโครงสร้าง → กลไก COX-1 inhibition ไม่ใช่ IgE ต่อยาตัวเดียว) · การบวมหลังยา NSAID อีกแบบคือ fluid retention/AKI (บวมเท้า ไม่คัน เกิดช้ากว่า) — ซักแยก",
   rubric:"ได้เต็ม = ลักษณะบวม/ผื่น + อาการรุนแรง (anaphylaxis) + ชื่อยา (ขอดูยา) + ประวัติแพ้ยาเดิม + โรคประจำตัว · ข้อสำคัญ = ถามชื่อยาที่กินและประวัติแพ้ยาเดิม",
   pts:[H("อาการ",40),P("Site of swelling (eyes, lips, tongue)","บวมตรงไหน","ตาบวม","ปากบวม","ลิ้นบวม","lip","eye","angioedema"),P("Rash / urticaria / itch","ผื่น","rash","ลมพิษ","urticaria","คัน"),CR(P("Anaphylaxis features: dyspnea, chest tightness, hoarseness, dizziness, GI symptoms","หายใจ","dyspnea","แน่นหน้าอก","เสียงแหบ","หน้ามืด","ปวดท้อง","อาเจียน","anaphyla")),P("Timing after drug, duration, current status","กี่ (ชั่วโมง|นาที)","หลังกิน","เมื่อไหร่","onset","timing","นานเท่าไหร่"),
    H("ยา + แพ้ยา",45),CR(P("Name of drug taken — ask to see the drug (ibuprofen)","ขอดูยา","ชื่อยา","ibuprofen","แผงยา","ซองยา","ยาอะไร")),CR(P("Previous drug allergy and its reaction (naproxen)","เคยแพ้","แพ้ยา","allerg","naproxen")),P("Analgesics previously tolerated","paracetamol","เคยกิน","tolerat"),
    H("โรคประจำตัว",15),P("Underlying disease: asthma, nasal polyp, urticaria, renal/liver/GI disease","โรคประจำตัว","underlying","หอบหืด","asthma","polyp","ไต","ตับ","กระเพาะ")]}),
  B("15.2 Give the patient appropriate advice.",3,{tags:["hx"],
   ans:"อธิบายว่าเป็น<b>การแพ้ยากลุ่ม NSAIDs</b> (ibuprofen, naproxen) ซึ่ง<b>แพ้ข้ามกันได้ทั้งกลุ่ม</b> · <b>หลีกเลี่ยงยา NSAIDs ทุกชนิด</b> (diclofenac, mefenamic acid, aspirin ฯลฯ รวมถึงยาชุด/ยาสมุนไพรผสม) · <b>ออกบัตรแพ้ยา</b>และบันทึกในเวชระเบียน · <b>แจ้งแพทย์/เภสัชกรทุกครั้ง</b>ก่อนรับยา อ่านฉลากก่อนซื้อยา · อาการกลับเป็นซ้ำหรือมีหายใจลำบาก/หน้ามืด → รีบมาโรงพยาบาล · ตอนนี้: antihistamine บรรเทาอาการบวม/ลมพิษที่เหลือ",
   exp:"Cross-reactive NSAID hypersensitivity: ให้หลีกเลี่ยง non-selective COX inhibitors ทั้งหมด · ถ้าจำเป็นต้องใช้ aspirin (เช่น โรคหัวใจ) ส่ง allergist พิจารณา desensitization",
   rubric:"ได้เต็ม = หลีกเลี่ยงทั้งกลุ่ม NSAIDs + บัตรแพ้ยา + แจ้งบุคลากรทุกครั้ง",
   pts:[CR(P("Avoid all NSAIDs (class cross-reactivity)","หลีกเลี่ยง","avoid","ทั้งกลุ่ม","nsaid")),P("Issue a drug allergy card","บัตรแพ้ยา","allergy card","บัตร"),P("Inform doctors/pharmacists every time","แจ้งแพทย์","แจ้งทุก","inform","บอกแพทย์","เภสัช")]}),
  B("15.3 Recommend two alternative analgesics.",2,{tags:["hx"],
   ans:"<b>Paracetamol</b> (เริ่มขนาดปกติ — ผู้ป่วยเคยกินได้) · <b>Selective COX-2 inhibitor</b> (etoricoxib, celecoxib) — ส่วนใหญ่ทนได้ แต่ควรให้ครั้งแรกภายใต้การสังเกตอาการ (drug challenge) · อื่น ๆ: tramadol / weak opioid, topical analgesic ที่ไม่ใช่ NSAID",
   exp:"Paracetamol ขนาดสูง (≥1,000 mg) อาจกระตุ้นอาการได้ในผู้ป่วย cross-reactive ส่วนน้อย · COX-2 selective inhibitors ทนได้ใน &gt;90% ของ cross-reactive NSAID hypersensitivity",
   rubric:"ได้เต็ม = paracetamol + COX-2 inhibitor (หรือ tramadol) · ตอบ NSAID ตัวอื่น = ผิด",
   pts:[CR(P("Paracetamol","paracetamol","acetaminophen")),G("Second option",1,P("Selective COX-2 inhibitor (etoricoxib/celecoxib)","cox-?2","coxib","etoricoxib","celecoxib"),P("Tramadol / weak opioid","tramadol","opioid","codeine"))]})
 ),
 interp:"Hx station: ซักประวัติแพ้ยา (อาการ, ความรุนแรง, ชื่อยา, ประวัติแพ้เดิม) → ให้คำแนะนำและเลือกยาแก้ปวดที่ปลอดภัย",
 summary:["แพ้ ibuprofen + naproxen (ต่างโครงสร้าง) = cross-reactive NSAID hypersensitivity → เลี่ยงทั้งกลุ่ม","ซักเสมอ: anaphylaxis signs, ชื่อยา (ขอดูยา), ประวัติแพ้เดิม, asthma/nasal polyp","คำแนะนำ: บัตรแพ้ยา + แจ้งแพทย์/เภสัชทุกครั้ง","ยาแทน: paracetamol, COX-2 inhibitor (ครั้งแรกสังเกตอาการ), tramadol"]}),

/* ===== สถานี 16 ===== */
Co({page:5,orig:"16",topic:"hx",sub:"Dyspnea",ex:1,title:"History taking — easy fatigability for 4 months",
 stem:`A 35-year-old woman presents with easy fatigability (\"tiring easily\") for 4 months. Take a history and tell the examiner your diagnosis.`,
 gray:"16. (ซักประวัติ) ผู้ป่วยหญิงอายุ 35 ปี เหนื่อยง่ายมา 4 เดือน จงซักประวัติและแจ้งการวินิจฉัย - fatigue or dyspnea - นอนราบได้? อาการทาง RS?, ใจสั่น ถ่ายเหลว เหงื่อออกเยอะ?, ซีด? - ถามประวัติประจำเดือน (ประจำเดือนมามากขึ้น), ประวัติเพศสัมพันธ์ - ถามประวัติยา โรคประจำตัว - ประวัติเลือดออกง่ายอื่นๆ · Diagnosis: IDA from hypermenorrhea",
 flag:"รายละเอียดบทผู้ป่วย (sp) Claude แต่งจากที่ผู้จดเล่า (ประจำเดือนมามากขึ้น)",
 notes:"ผู้จดเล่า: แยก fatigue หรือ dyspnea · นอนราบได้ไหม อาการทาง RS · ใจสั่น ถ่ายเหลว เหงื่อออกเยอะ (thyroid) · ซีด · ประวัติประจำเดือน (ประจำเดือนมามากขึ้น), ประวัติเพศสัมพันธ์ · ยา โรคประจำตัว · เลือดออกง่ายที่อื่น · Dx: IDA from hypermenorrhea · "+TIP2,
 sp:"หญิง 35 ปี พนักงานบัญชี · เหนื่อยง่าย 4 เดือน: <b>ออกแรงแล้วเหนื่อย</b> (ขึ้นบันได 2 ชั้นต้องพัก) อ่อนเพลีย เวียนศีรษะเวลาลุกเร็ว ใจสั่นเวลาออกแรง · นอนราบได้ ไม่ตื่นมาหอบกลางคืน ไม่บวม ไม่ไอ ไม่มีไข้ ไม่เจ็บหน้าอก · ไม่มีเหงื่อออกมาก ไม่ขี้ร้อน ถ่ายปกติ น้ำหนักไม่ลด · คนรอบข้างบอกว่าหน้าซีด · ช่วงนี้อยากเคี้ยวน้ำแข็ง · <b>ประจำเดือนมามากขึ้น ~6 เดือน</b>: มาทุก 28 วัน นาน 7–8 วัน (เดิม 4–5 วัน) วันมามากต้องเปลี่ยนผ้าอนามัยแบบหนา 6–7 แผ่น/วัน มีลิ่มเลือด ปวดประจำเดือนมากขึ้น · ไม่มีเลือดออกระหว่างรอบ · แต่งงาน มีบุตร 1 คน ไม่ได้คุมกำเนิดด้วยยา ไม่มีเลือดออกหลังมีเพศสัมพันธ์ · ไม่มีอุจจาระดำ/ถ่ายเป็นเลือด ไม่ปวดท้อง · ไม่มีเลือดออกตามไรฟัน จ้ำเลือด เลือดกำเดา · กินอาหารปกติ กินเนื้อสัตว์ · ไม่มีโรคประจำตัว ไม่กินยา/สมุนไพร/NSAID · ครอบครัวไม่มีโรคเลือด/ธาลัสซีเมียที่ทราบ",
 parts:S(
  B("16.1 Take a relevant history.",8,{tags:["hx"],
   ans:"<b>แยกความหมาย \"เหนื่อยง่าย\":</b> fatigue (อ่อนเพลีย) vs <b>dyspnea on exertion</b> · ระดับการออกแรง ความรุนแรง<br><b>Cardiopulmonary:</b> orthopnea, PND, edema (heart failure), ไอ เสมหะ wheeze (RS), chest pain, palpitation<br><b>Anemia:</b> ซีด เวียนศีรษะ ใจสั่น pica<br><b>หาสาเหตุ blood loss:</b> <b>ประวัติประจำเดือน</b> (รอบ ระยะ ปริมาณ — จำนวนผ้าอนามัย ลิ่มเลือด), GI bleeding (melena, hematochezia, NSAID), <b>เลือดออกง่ายที่อื่น</b> (bleeding disorder เช่น von Willebrand)<br><b>Metabolic/อื่น:</b> thyrotoxicosis (ใจสั่น เหงื่อออก ถ่ายบ่อย น้ำหนักลด), hypothyroid, DM, depression · อาหาร (มังสวิรัติ) · ประวัติเพศสัมพันธ์/ตั้งครรภ์ · ยา โรคประจำตัว ครอบครัว (thalassemia)",
   exp:"Heavy menstrual bleeding: &gt;7 วัน, ผ้าอนามัยชุ่มทุก 1–2 ชม., ลิ่มเลือด &gt;2.5 ซม. หรือรบกวนชีวิต · สาเหตุ (PALM-COEIN): polyp, adenomyosis, leiomyoma, malignancy, coagulopathy, ovulatory dysfunction, endometrial ฯลฯ",
   rubric:"ได้เต็ม = แยก fatigue/dyspnea + cardiopulmonary + anemia symptoms + ประวัติประจำเดือนละเอียด + GI blood loss + bleeding tendency + thyroid + ยา/โรคประจำตัว · ข้อสำคัญ = ประวัติประจำเดือน",
   pts:[H("แยกอาการ",15),P("Clarify fatigue vs dyspnea on exertion","fatigue","dyspnea","อ่อนเพลีย","หอบ","ออกแรง","exertion"),
    H("Cardiopulmonary",20),P("Orthopnea / PND / edema","นอนราบ","orthopnea","\\bpnd\\b","บวม","edema"),P("Respiratory symptoms (cough, wheeze), chest pain, palpitation","อาการไอ","ไอไหม","cough","wheez","ใจสั่น","palpitat","เจ็บหน้าอก"),
    H("Anemia + blood loss",45),P("Pallor, dizziness, pica","ซีด","pale","pallor","เวียนศีรษะ","pica","น้ำแข็ง"),CR(P("Menstrual history: duration, amount (pads/day), clots","ประจำเดือน","menstru","ผ้าอนามัย","\\bpad","ลิ่ม")),P("GI bleeding: melena, hematochezia","ถ่ายดำ","อุจจาระดำ","melena","ถ่ายเป็นเลือด","hematochezia","gi bleed"),P("Bleeding elsewhere (bleeding tendency)","เลือดออกง่าย","จ้ำ","ไรฟัน","bleeding tendency","bruis","เลือดกำเดา"),
    H("อื่น ๆ",20),P("Thyrotoxic symptoms: palpitation, sweating, diarrhea, weight loss","เหงื่อ","ขี้ร้อน","ถ่ายเหลว","ถ่ายบ่อย","thyro","น้ำหนัก"),P("Sexual/obstetric history, diet","เพศสัมพันธ์","sexual","ตั้งครรภ์","pregnan","คุมกำเนิด","อาหาร","diet"),P("Drugs, underlying disease, family history","ประวัติยา","กินยา","ยาที่","drug","โรคประจำตัว","underlying","ครอบครัว","family")]}),
  B("16.2 Tell the examiner your diagnosis.",2,{tags:["hx"],
   ans:"<b>Iron deficiency anemia (IDA) secondary to heavy menstrual bleeding (hypermenorrhea/menorrhagia)</b>",
   exp:"ยืนยัน: CBC (Hb ต่ำ, MCV ต่ำ, RDW สูง), PBS (hypochromic microcytic, pencil cell), <b>serum ferritin ต่ำ</b> (&lt;30 ng/mL) · หาสาเหตุของประจำเดือนมาก: ส่งพบสูติ-นรีแพทย์, pelvic US (myoma, adenomyosis) · รักษา: ferrous sulfate (ทุกวันหรือวันเว้นวัน) ต่ออีก ~3 เดือนหลัง Hb ปกติเพื่อเติม iron store + รักษาสาเหตุ",
   rubric:"ได้เต็ม = IDA + สาเหตุจากประจำเดือนมาก · ตอบ anemia ไม่ระบุชนิด/สาเหตุ = บางส่วน",
   pts:[CR(P("Iron deficiency anemia","\\bida\\b","iron def","ขาดธาตุเหล็ก","ขาดเหล็ก")),P("From heavy menstrual bleeding (hypermenorrhea)","menorrh","hypermenorrh","heavy menstrual","\\bhmb\\b","ประจำเดือน")]})
 ),
 interp:"Hx station: แยก fatigue/dyspnea → หาเหตุ anemia → ซักประวัติประจำเดือนเชิงปริมาณ → IDA จากประจำเดือนมาก",
 summary:["\"เหนื่อยง่าย\" แยก fatigue vs DOE ก่อน แล้วไล่ cardio–pulmonary–anemia–metabolic","หญิงวัยเจริญพันธุ์ + anemia → ซักประจำเดือน (วัน, ผ้าอนามัย/วัน, ลิ่มเลือด) เสมอ","IDA: ferritin ต่ำ, hypochromic microcytic · รักษาเหล็ก + สาเหตุ"]}),

/* ===== สถานี 17 ===== */
Co({page:5,orig:"17",topic:"hx",sub:"DM screening",ex:1,title:"History taking — a woman worried that she has diabetes",
 stem:`A 59-year-old woman is worried that she may have diabetes mellitus.<br>1. Take a relevant history.<br>2. Order ONE test to confirm the diagnosis.`,
 gray:"17. (ซักประวัติ) ผู้ป่วยหญิงอายุ 59 ปี กังวลว่าจะเป็นเบาหวาน · 17.1 จงซักประวัติ - family history - ประวัติการตั้งครรภ์ - อาหารการกิน, lifestyle - classic symptoms - complications (ไต เท้า ตา) - ยาที่กิน · 17.2 จงส่งตรวจ 1 อย่างเพื่อยืนยันการวินิจฉัย: Random plasma glucose",
 flag:"⚠ บทผู้ป่วย (sp) Claude แต่ง — ให้ผู้ป่วยมี classic symptoms เพื่อให้สอดคล้องกับคำตอบผู้จด (random plasma glucose) · ดู opinion",
 notes:"ผู้จดเล่า: 17.1 family history · ประวัติการตั้งครรภ์ · อาหารการกิน, lifestyle · classic symptoms · complications (ไต เท้า ตา) · ยาที่กิน · 17.2 random plasma glucose · "+TIP2,
 sp:"หญิง 59 ปี แม่ค้า · กังวลเพราะ<b>แม่และพี่สาวเป็นเบาหวาน</b> · 2 เดือนนี้<b>ปัสสาวะบ่อย ตื่นกลางคืน 2–3 ครั้ง กระหายน้ำ ดื่มน้ำมากขึ้น น้ำหนักลด 3 กก.</b>ทั้งที่กินเท่าเดิม · ไม่มีตามัว ไม่ชาปลายมือปลายเท้า ไม่มีแผลที่เท้า ไม่บวม ไม่มีปัสสาวะเป็นฟอง · ไม่เจ็บหน้าอก ไม่มีอ่อนแรงครึ่งซีก · ตั้งครรภ์ 2 ครั้ง ลูกคนที่ 2 หนัก 4.2 กก. ตอนท้องเคยถูกบอกว่าน้ำตาลสูงเล็กน้อย ไม่ได้ติดตาม · ชอบดื่มน้ำหวาน ชาเย็นวันละ 2 แก้ว ไม่ค่อยออกกำลังกาย · BMI ~28 (ถ้าถาม: สูง 155 ซม. หนัก 67 กก.) · โรคประจำตัว: ความดันโลหิตสูง 5 ปี กิน amlodipine, ไขมันสูง กิน simvastatin · ไม่กิน steroid · ไม่สูบบุหรี่ ไม่ดื่มเหล้า · ไม่เคยตรวจน้ำตาลมา 3 ปี",
 parts:S(
  B("17.1 Take a relevant history.",7,{tags:["hx"],
   ans:"<b>Classic symptoms:</b> polyuria, nocturia, polydipsia, polyphagia, <b>น้ำหนักลด</b>, อ่อนเพลีย, ติดเชื้อบ่อย/แผลหายช้า, คันช่องคลอด<br><b>Risk factors:</b> <b>family history</b> (first-degree relative), <b>ประวัติการตั้งครรภ์</b> (GDM, ลูกน้ำหนัก &gt;4 กก.), อายุ, น้ำหนัก/BMI/รอบเอว, <b>อาหาร</b> (น้ำหวาน แป้ง) และ <b>lifestyle</b> (ออกกำลังกาย), HT, dyslipidemia, CVD, PCOS, เคยตรวจพบ prediabetes<br><b>Complications:</b> <b>ตา</b> (ตามัว), <b>ไต</b> (บวม ปัสสาวะเป็นฟอง), <b>เท้า/เส้นประสาท</b> (ชา แผล), macrovascular (เจ็บหน้าอก stroke, claudication)<br><b>ยา:</b> ยาที่ทำให้น้ำตาลสูง (corticosteroid, thiazide, antipsychotic), ยาปัจจุบัน · บุหรี่ สุรา",
   exp:"คัดกรองเบาหวาน (สมาคมโรคเบาหวานแห่งประเทศไทย / ADA): อายุ ≥35 ปี หรือมีปัจจัยเสี่ยง (BMI ≥25 + ปัจจัยอื่น, ญาติสายตรงเป็นเบาหวาน, HT, dyslipidemia, เคยเป็น GDM หรือคลอดบุตร &gt;4 กก.)",
   rubric:"ได้เต็ม = classic symptoms + family hx + obstetric hx + diet/lifestyle + complications (ตา ไต เท้า) + ยา",
   pts:[H("Classic symptoms",25),CR(P("Polyuria, nocturia, polydipsia, polyphagia, weight loss","ปัสสาวะบ่อย","polyuria","nocturia","กลางคืน","กระหาย","polydipsia","น้ำหนักลด","weight loss","classic")),
    H("Risk factors",40),P("Family history of diabetes","family","ครอบครัว","พ่อ","แม่","พี่น้อง"),P("Obstetric history: GDM, baby >4 kg","ตั้งครรภ์","pregnan","gdm","4 (kg|กก)","ลูก"),P("Diet, exercise, weight/BMI","อาหาร","diet","น้ำหวาน","ออกกำลัง","exercise","lifestyle","bmi","น้ำหนัก"),P("HT, dyslipidemia, CVD","ความดัน","hypertension","\\bht\\b","ไขมัน","lipid"),
    H("Complications",25),P("Eye: blurred vision","ตามัว","ตาพร่า","จอตา","vision","retinopathy"),P("Kidney: edema, foamy urine","ไต","บวม","ฟอง","kidney","nephropathy"),P("Feet/nerves: numbness, ulcers","ชาปลาย","อาการชา","มือเท้าชา","เท้า","แผล","numb","neuropathy","foot"),
    H("ยา",10),P("Medications (steroid, thiazide, antipsychotic)","ประวัติยา","กินยา","ยาที่","drug","steroid","thiazide","medication")]}),
  B("17.2 Order ONE test to confirm the diagnosis.",3,{tags:["hx"],
   ans:"ผู้ป่วยรายนี้มี <b>classic symptoms</b> → <b>random plasma glucose (venous)</b> ≥200 mg/dL ร่วมกับอาการ = วินิจฉัยเบาหวานได้เลย (ไม่ต้องตรวจซ้ำ)<br>ถ้าไม่มีอาการ: <b>fasting plasma glucose (FPG)</b> ≥126 mg/dL (ตรวจซ้ำอีกครั้งต่างวัน) หรือ <b>HbA1c</b> ≥6.5% (วิธีมาตรฐาน NGSP) หรือ 75-g OGTT 2-h ≥200 mg/dL",
   exp:"ใช้ plasma glucose จากหลอดเลือดดำ ไม่ใช้ capillary (DTX) ในการวินิจฉัย · แนวทางเวชปฏิบัติโรคเบาหวานของไทยใช้ FPG เป็นหลักในการคัดกรอง · HbA1c ไม่น่าเชื่อถือในภาวะ hemoglobinopathy/thalassemia, anemia, CKD (พบบ่อยในไทย)",
   rubric:"ได้เต็ม = random plasma glucose (เพราะมี classic symptoms ตามคำตอบผู้จด) หรือ FPG / HbA1c พร้อมเกณฑ์ · ตอบ DTX / capillary glucose = ไม่ได้",
   pts:[CR(G("Diagnostic test",1,P("Random plasma glucose ≥200 + symptoms","random","\\brpg\\b"),P("Fasting plasma glucose ≥126","fasting","\\bfpg\\b","\\bfbs\\b"),P("HbA1c ≥6.5%","hba1c","a1c"),P("75-g OGTT","ogtt","glucose tolerance"))),P("Diagnostic cut-off stated","200","126","6\\.5")]})
 ),
 interp:"Hx station: ซักอาการ ปัจจัยเสี่ยง และภาวะแทรกซ้อนของเบาหวาน แล้วเลือกตรวจยืนยันให้ตรงกับว่ามีอาการหรือไม่",
 summary:["Classic: polyuria, polydipsia, weight loss → RPG ≥200 วินิจฉัยได้ทันที","ไม่มีอาการ: FPG ≥126 / HbA1c ≥6.5% / OGTT 2-h ≥200 (ซ้ำเพื่อยืนยัน)","ปัจจัยเสี่ยง: FH, GDM/ลูก >4 กก., BMI ≥25, HT, dyslipidemia","Complications: ตา ไต เท้า + macrovascular"],
 opinion:"ผู้จดตอบ random plasma glucose — ถูกเฉพาะเมื่อผู้ป่วยมี classic symptoms (บทผู้ป่วยในเฉลยจึงให้มีอาการ) · ถ้าผู้ป่วยไม่มีอาการ การยืนยันที่ถูกต้องคือ FPG (แนวทางไทยใช้เป็นหลัก) หรือ HbA1c / OGTT และต้องตรวจซ้ำ — RPG ที่สูงโดยไม่มีอาการยังวินิจฉัยไม่ได้"}),

/* ===== สถานี 18 ===== */
Co({page:6,orig:"18",topic:"skin",sub:"Fungal skin",title:"Chronic hyperkeratotic plaque on the leg — lesion and skin scraping",img:["os127a_18","os127a_18b"],imgNote:"ภาพที่ 1: skin lesion on the left leg · ภาพที่ 2: skin scraping under the microscope",
 stem:`A 90-year-old man has had a solitary hyperkeratotic plaque on his left leg for 5 months. The lesion (image 1) and a skin scraping examined under the microscope (image 2) are shown.`,
 gray:"18. ผู้ป่วยชาย อายุ 90 ปี มี solitary hyperkeratotic plaque at left leg 5 เดือน · 18.1 บรรยายสิ่งที่พบจาก skin scrape: Medlar body · 18.2 ให้การวินิจฉัย: Chromoblastomycosis",
 flag:"รูปผิวหนังตัดข้อความลิขสิทธิ์มุมขวาล่างออก (ชื่อเว็บไซต์ใบ้ว่าเป็นเชื้อรา)",
 notes:"ผู้จดตอบ: 18.1 Medlar body · 18.2 Chromoblastomycosis",
 parts:S(
  B("18.1 Describe what is seen in the skin scraping.",3,{tags:["skin"],
   ans:"<b>Medlar bodies</b> (sclerotic bodies / muriform cells / \"copper pennies\"): เซลล์รากลม <b>สีน้ำตาลทอง (pigmented, dematiaceous)</b> ขนาด ~5–12 µm <b>ผนังหนา</b> มี<b>ผนังกั้น (septa) ทั้งแนวตั้งและแนวนอน</b> อยู่เดี่ยวหรือเป็นกลุ่ม",
   exp:"เห็นได้จาก KOH preparation ของสะเก็ด/จุดดำ (black dots) บนผิวรอยโรค หรือ biopsy (H&E) · เพาะเชื้อ: Fonsecaea pedrosoi (พบบ่อยสุด), Phialophora, Cladophialophora",
   rubric:"ได้เต็ม = Medlar/sclerotic bodies + ลักษณะ (สีน้ำตาล ผนังหนา มี septa) · บอกแค่ \"fungal spores\" = บางส่วน",
   pts:[CR(P("Medlar bodies / sclerotic bodies / muriform cells","medlar","sclerotic","muriform","copper penn")),P("Brown pigmented, thick-walled, round cells with septa","brown","น้ำตาล","pigment","thick","ผนังหนา","septa","septat","ผนังกั้น")]}),
  B("18.2 What is your diagnosis?",2,{tags:["skin"],
   ans:"<b>Chromoblastomycosis</b> (chromomycosis) — chronic subcutaneous fungal infection",
   exp:"ติดเชื้อจากการโดนหนาม/เศษไม้ในเกษตรกร ขา/เท้าพบบ่อย · รอยโรค: papule → verrucous/hyperkeratotic plaque โตช้า มีจุดดำ (black dots) · Ddx: SCC (ผู้สูงอายุ — ควร biopsy), tuberculosis verrucosa cutis, sporotrichosis, mycetoma, leishmaniasis · รักษา: <b>itraconazole</b> นานหลายเดือน ± terbinafine + การทำลายรอยโรค (cryotherapy, surgical excision ถ้ารอยโรคเล็ก)",
   pts:[CR(P("Chromoblastomycosis","chromoblasto","chromomycosis"))]})
 ),
 interp:"Skin + micro station: verrucous/hyperkeratotic plaque เรื้อรังที่ขา + Medlar body = chromoblastomycosis",
 summary:["Medlar body = เซลล์กลมสีน้ำตาลทอง ผนังหนา มี septa สองแนว (copper pennies)","Chromoblastomycosis: plaque หนาขรุขระที่ขา/เท้า โตช้า มีจุดดำ","รักษา: itraconazole ± terbinafine + cryotherapy/excision · ผู้สูงอายุ ddx SCC → biopsy"]}),

/* ===== สถานี 19 ===== */
Co({page:6,orig:"19",topic:"pefind",sub:"Leg/Foot",title:"Leg swelling in a patient with hypertension",img:["os127a_19"],imgNote:"Leg/foot examination — before (A) and after (B) pressing with the thumb",
 stem:`A patient with underlying hypertension presents with leg swelling (pitting edema) as shown. The patient is currently taking amlodipine.`,
 gray:"19. ผู้ป่วย underlying HT มาด้วยอาการขาบวมดังภาพ (pitting edema) กินยา amlodipine อยู่ · 19.1 ให้การวินิจฉัย: Amlodipine-induced edema · 19.2 management: เปลี่ยนยา",
 flag:"รูปในไฟล์เป็นภาพเท้าเด็กเล็กสาธิตการกดบุ๋ม ไม่ใช่ผู้ป่วยในโจทย์ (ใช้แสดงลักษณะ pitting edema เท่านั้น)",
 notes:"ผู้จดตอบ: 19.1 Amlodipine-induced edema · 19.2 เปลี่ยนยา",
 parts:S(
  B("19.1 What is your diagnosis?",2,{tags:["pefind"],
   ans:"<b>Amlodipine (dihydropyridine CCB)-induced peripheral edema</b>",
   exp:"กลไก: DHP-CCB ขยาย arteriole (precapillary) มากกว่า venule → capillary hydrostatic pressure สูง → น้ำรั่วออกนอกหลอดเลือด (ไม่ใช่ fluid overload) · ขึ้นกับขนาดยา พบบ่อยในผู้หญิง ผู้สูงอายุ ยืนนาน · มักบวมข้อเท้าสองข้าง · ต้องแยกสาเหตุอื่นของบวมกดบุ๋ม: heart failure, nephrotic syndrome/CKD, cirrhosis, hypothyroidism, venous insufficiency",
   rubric:"ได้เต็ม = amlodipine/CCB-induced edema · ตอบ pitting edema อย่างเดียว = บางส่วน",
   pts:[CR(P("Amlodipine / CCB-induced edema","amlodipine","\\bccb\\b","calcium channel","drug.?induced","จากยา"))]}),
  B("19.2 How would you manage this patient?",3,{tags:["pefind"],
   ans:"<b>ลดขนาด</b> amlodipine หรือ<b>เปลี่ยนเป็นยาลดความดันกลุ่มอื่น</b> (ACEI/ARB, thiazide-like diuretic) · หรือ<b>เพิ่ม ACEI/ARB</b> ร่วม (ขยาย venule ลดบวมจาก CCB) · ยกขาสูง · <b>diuretic ได้ผลน้อย</b> (ไม่ใช่ volume overload) · ตรวจแยกสาเหตุอื่น: UA (proteinuria), Cr, albumin, LFT, TSH, ฟังปอด/JVP",
   exp:"ACEI/ARB ลดอุบัติการณ์บวมจาก DHP-CCB ได้ประมาณครึ่งหนึ่ง · non-DHP (diltiazem, verapamil) บวมน้อยกว่า",
   rubric:"ได้เต็ม = ลดขนาด/เปลี่ยนยา หรือเพิ่ม ACEI/ARB + บอกว่า diuretic ไม่ค่อยได้ผล",
   pts:[CR(P("Reduce dose or switch to another antihypertensive","เปลี่ยนยา","ลดขนาด","switch","change","reduce","หยุด")),P("Add/switch to ACEI/ARB","acei","\\barb\\b","enalapril","losartan","ace inhibitor"),P("Diuretics are of little benefit; leg elevation","diuretic","ยกขา","elevat")]})
 ),
 interp:"PE finding station: pitting edema ในผู้ป่วยกิน amlodipine → edema จากยา → ปรับยา (ไม่ใช่ diuretic)",
 summary:["DHP-CCB edema: arteriolar dilatation → capillary pressure สูง (ไม่ใช่ fluid overload)","Mx: ลดขนาด/เปลี่ยนยา หรือเพิ่ม ACEI/ARB · diuretic ได้ผลน้อย","แยกสาเหตุอื่นของ pitting edema: HF, nephrotic, cirrhosis, hypothyroid"]}),

/* ===== สถานี 20 ===== */
Co({page:7,orig:"20",topic:"micro",sub:"UA",title:"Generalized pitting edema — urine sediment",img:["os127a_20"],imgNote:"Urine sediment, unstained, high-power field",
 seen:"คล้าย SI131 Ro417–420 ข้อ 6 · SI131 Ro409–412 ข้อ 8 (oval fat body, nephrotic syndrome)",
 stem:`A 40-year-old woman presents with pitting edema 3+. Her urine sediment is shown.`,
 gray:"20. ผู้ป่วยหญิงอายุ 40 ปี มาด้วย pitting edema 3+ ตรวจ UA ได้ผลดังภาพ · ให้ ddx มา 3 โรค: FSGS, minimal change disease, membranous nephropathy, …",
 flag:"ข้อย่อย 20.1 (บรรยาย) Claude เติม — ไฟล์ถามแค่ ddx 3 โรค · เลข 20 ซ้ำในไฟล์ สถานีนี้คือ 20 ตัวแรก",
 notes:"ผู้จดตอบ: ddx FSGS, minimal change disease, membranous nephropathy, …",
 parts:S(
  B("20.1 Describe the urine sediment findings.",2,{tags:["micro"],flag:ADD,
   ans:"<b>Oval fat bodies</b> — renal tubular epithelial cells (หรือ macrophage) ที่มี<b>หยดไขมัน (lipid droplets)</b> หักเหแสงอยู่เต็มเซลล์ · ภายใต้ polarized light เห็น <b>Maltese cross</b> (cholesterol ester) · เส้นใยที่เห็นเป็น artifact",
   exp:"Oval fat body / fatty cast = lipiduria → พบใน <b>nephrotic syndrome</b> (proteinuria &gt;3.5 g/วัน, hypoalbuminemia, edema, hyperlipidemia) · ถ้าเห็น dysmorphic RBC / RBC cast → nephritic",
   rubric:"ได้เต็ม = oval fat body (± lipiduria/Maltese cross)",
   pts:[CR(P("Oval fat bodies (lipid-laden tubular cells)","oval fat","fat bod","lipid","fat droplet","ไขมัน")),P("Maltese cross under polarized light / lipiduria","maltese","polariz","lipiduria")]}),
  B("20.2 Give three differential diagnoses.",3,{tags:["micro"],
   ans:"Nephrotic syndrome ในผู้ใหญ่: <b>1. Membranous nephropathy</b> (primary — anti-PLA2R) <b>2. Focal segmental glomerulosclerosis (FSGS)</b> <b>3. Minimal change disease</b> · secondary: <b>lupus nephritis (class V)</b> — หญิงอายุ 40, diabetic nephropathy, amyloidosis, HBV/HCV-associated GN",
   exp:"ส่งตรวจ: UPCR/24-h urine protein, serum albumin, lipid, Cr · หาสาเหตุ secondary: ANA, C3/C4, FBS/HbA1c, HBsAg, anti-HCV, anti-HIV, anti-PLA2R · renal biopsy ในผู้ใหญ่ส่วนใหญ่ · ภาวะแทรกซ้อน: thrombosis (renal vein — MN), infection, AKI",
   rubric:"ได้เต็ม = 3 สาเหตุของ nephrotic syndrome ที่เหมาะสม",
   pts:[G("Ddx (≥3)",3,P("Membranous nephropathy","membranous","\\bmn\\b"),P("FSGS","fsgs","focal segmental"),P("Minimal change disease","minimal change","\\bmcd\\b"),P("Lupus nephritis","lupus","\\bsle\\b"),P("Diabetic nephropathy","diabet","\\bdkd\\b"),P("Amyloidosis","amyloid"),P("HBV/HCV-associated GN / MPGN","\\bhbv\\b","\\bhcv\\b","mpgn","membranoproliferative"))]})
 ),
 interp:"Micro station: oval fat body ใน urine = lipiduria → nephrotic syndrome → ddx primary/secondary GN",
 summary:["Oval fat body / fatty cast + Maltese cross = lipiduria → nephrotic","ผู้ใหญ่: membranous, FSGS, MCD · หญิง: คิด lupus nephritis เสมอ","ส่ง: UPCR, albumin, lipid, ANA/C3/C4, HBV/HCV, glucose, anti-PLA2R ± biopsy"]}),

/* ===== สถานี 20 (ชุดที่ 2) ===== */
Co({page:7,orig:"20 (ชุดที่ 2)",topic:"img",sub:"Bone/joint film",title:"Knee pain worse on walking — knee radiographs",img:["os127a_21"],imgNote:"Plain radiographs of both knees",
 seen:"คล้าย SI131 Ro417–420 ข้อ 23 (film OA both knees)",
 stem:`A 50-year-old woman presents with left knee pain for 3 months, which is worse when walking. A plain radiograph is shown.`,
 gray:"20. ผู้ป่วยหญิงอายุ 50 ปี มาด้วยปวดเข่าซ้าย 3 เดือน เป็นมากขึ้นตอนเดิน ทำ plain film ได้ผลดังนี้ · 21.1 บรรยาย: plain film bone knee, anterior view, …, Genu varum, joint space narrowing, osteophyte, … · 21.2 วินิจฉัย: OA both knees",
 flag:"เลข 20 ซ้ำในไฟล์ (สถานีที่ 2 ของเลข 20) — ข้อย่อยในไฟล์เขียน 21.1/21.2 จึงคงเลขข้อย่อยตามไฟล์",
 notes:"ผู้จดตอบ: 21.1 plain film bone knee, anterior view, …, genu varum, joint space narrowing, osteophyte, … · 21.2 OA both knees · ในไฟล์สถานีนี้ขึ้นต้นด้วยเลข 20 ซ้ำกับสถานีก่อนหน้า แต่ข้อย่อยเป็น 21.x (น่าจะเป็นสถานีที่ 21) · "+TIP3,
 parts:S(
  B("21.1 Describe the radiograph.",3,{tags:["img"],
   ans:"<b>Plain radiograph of both knees, AP view</b> (ควรเป็น standing/weight-bearing) · <b>Asymmetric joint space narrowing</b> เด่นที่ <b>medial compartment</b> ทั้งสองข้าง · <b>Marginal osteophytes</b> · <b>Subchondral sclerosis</b> · <b>Genu varum</b> alignment · ไม่เห็น erosion, periarticular osteopenia หรือ fracture",
   exp:"ลักษณะ OA บน film (จำ \"LOSS\"): <b>L</b>oss of joint space (asymmetric), <b>O</b>steophytes, <b>S</b>ubchondral sclerosis, <b>S</b>ubchondral cysts · ต่างจาก RA: joint space แคบสม่ำเสมอ (symmetric), periarticular osteopenia, erosion, ไม่มี osteophyte · CPPD: chondrocalcinosis",
   rubric:"ได้เต็ม = modality/view + joint space narrowing (medial) + osteophyte + sclerosis (± genu varum)",
   pts:[P("Plain film both knees, AP (standing) view","\\bap\\b","anteroposterior","both knee","plain film","standing","weight.?bearing"),CR(P("Joint space narrowing (asymmetric, medial)","joint space","narrow","ช่องข้อแคบ")),CR(P("Osteophytes","osteophyte")),P("Subchondral sclerosis / cyst","sclerosis","subchondral","cyst"),P("Genu varum","varum","varus","ขาโก่ง")]}),
  B("21.2 What is your diagnosis?",2,{tags:["img"],
   ans:"<b>Osteoarthritis (OA) of both knees</b> (primary, medial compartment predominant)",
   exp:"Clinical: อายุ &gt;50, ปวดเวลาลงน้ำหนัก/เดิน ดีขึ้นเมื่อพัก, morning stiffness &lt;30 นาที, crepitus · รักษา: ลดน้ำหนัก, ออกกำลังกล้ามเนื้อ quadriceps, topical NSAID, paracetamol/oral NSAID ช่วงสั้น, intra-articular steroid, TKA ในรายรุนแรง",
   pts:[CR(P("Osteoarthritis of both knees","\\boa\\b","osteoarthritis","ข้อเข่าเสื่อม"))]})
 ),
 interp:"Film station: บรรยาย film ข้อเข่าให้ครบ (view + LOSS) แล้ววินิจฉัย OA",
 summary:["OA: asymmetric (medial) JSN, osteophyte, subchondral sclerosis/cyst (LOSS)","RA: symmetric JSN, periarticular osteopenia, erosion","View ที่ใช้: AP standing (weight-bearing) — ไม่ใช่ \"anterior view\""],
 opinion:"เห็นด้วยกับผู้จด (OA both knees) · ผู้จดเขียน \"anterior view\" — ชื่อที่ถูกคือ AP (anteroposterior) view ควรเป็นท่ายืนลงน้ำหนัก"}),

/* ===== สถานี 22 ===== */
Co({page:8,orig:"22",topic:"micro",sub:"Malaria",title:"High fever for 3 days — blood smear",img:["os127a_22"],imgNote:"Thin blood film (Giemsa/Wright stain), oil immersion — arrows mark the findings",
 seen:"คล้าย SI133 Ro403–404 LAB 1 · SI133 Ro407–408 LAB 1 (malaria smear)",
 stem:`A 25-year-old man presents with high fever for 3 days. His blood smear is shown.`,
 gray:"22. ผู้ป่วยชายอายุ 25 ปี มาด้วยไข้สูง 3 วัน ตรวจ blood smear ได้ผลดังนี้ · 22.1 บรรยาย blood smear: small infected RBC, double chromatin, multiple infection, …. · 22.2 ให้การวินิจฉัย: Malaria from Plasmodium falciparum",
 notes:"ผู้จดตอบ: 22.1 small infected RBC, double chromatin, multiple infection, … · 22.2 Malaria from Plasmodium falciparum · "+TIP3,
 parts:S(
  B("22.1 Describe the blood smear.",3,{tags:["micro"],
   ans:"<b>Thin blood film</b>: <b>infected RBC ขนาดปกติ (ไม่โต)</b> · <b>Small delicate ring forms</b> (early trophozoite) · <b>Double chromatin dots</b> (headphone ring) · <b>Multiple infection</b> (มากกว่า 1 parasite ใน RBC เดียว) · ไม่เห็น Schüffner's dots, ไม่เห็น trophozoite ระยะโต/schizont ในเลือด",
   exp:"P. falciparum: ring เล็ก บาง, double chromatin, multiple infection, appliqué (accolé) form, RBC ไม่โต, gametocyte รูปกล้วย (banana) · P. vivax: RBC โต ซีด มี Schüffner's dots, amoeboid trophozoite, schizont 12–24 merozoites · การเห็นแค่ ring + gametocyte ในเลือด = falciparum (ระยะอื่น sequester ในหลอดเลือดเล็ก)",
   rubric:"ได้เต็ม = ring form + double chromatin + multiple infection + RBC ไม่โต · ผู้จดเขียน \"small infected RBC\" — ที่ถูกคือ RBC ขนาดปกติ (ไม่โตแบบ vivax)",
   pts:[CR(P("Small delicate ring forms","ring")),P("Double chromatin dots","double chromatin","headphone","2 chromatin"),P("Multiple infection of a single RBC","multiple","หลายตัว"),P("Infected RBCs not enlarged, no Schüffner's dots","not enlarge","normal.?size","ไม่โต","ขนาดปกติ","schuffner","schüffner","small infected")]}),
  B("22.2 What is your diagnosis?",2,{tags:["micro"],
   ans:"<b>Falciparum malaria</b> (<i>Plasmodium falciparum</i>)",
   exp:"ต้องประเมิน severe malaria (WHO): impaired consciousness, convulsion, shock, hypoglycemia, acidosis, AKI, jaundice, pulmonary edema, Hb &lt;7, parasitemia &gt;10% (หรือ &gt;2% ตามเกณฑ์บางแนวทาง) · Uncomplicated (แนวทางไทย): artemisinin-based combination (เช่น DHA-piperaquine) + single low-dose primaquine (gametocytocidal) · Severe: IV artesunate",
   rubric:"ได้เต็ม = Plasmodium falciparum malaria · ตอบ malaria ไม่ระบุ species = บางส่วน",
   pts:[CR(P("Plasmodium falciparum malaria","falciparum"))]})
 ),
 interp:"Micro station: แยก species ของ malaria จาก thin film — ring เล็ก double chromatin multiple infection RBC ไม่โต = falciparum",
 summary:["P. falciparum: ring เล็ก, double chromatin, multiple infection, appliqué, RBC ไม่โต, banana gametocyte","P. vivax: RBC โต + Schüffner's dots + amoeboid trophozoite","Severe → IV artesunate · uncomplicated → ACT + primaquine single low dose"]}),

/* ===== สถานี 23 ===== */
Co({page:8,orig:"23",topic:"micro",sub:"Gram stain",title:"Intubated stroke patient in the ICU with purulent secretions — Gram stain",img:["os127a_23"],imgNote:"Gram stain of endotracheal aspirate, oil immersion",
 seen:"คล้าย SI131 Ro413–416 ข้อ 1 · SI131 Ro401–404 ข้อ 1 · SI130 Ro409–412 ข้อ 22 (sputum Gram stain ผู้ป่วยใส่ท่อ/ICU)",
 stem:`A stroke patient has been admitted to the ICU for 5 days and is intubated. He now has increasing dyspnea and green sputum. A Gram stain of the endotracheal aspirate is shown.`,
 gray:"23. คนไข้ stroke ที่ ICU นอนโรงพยาบาลมา 5 วัน ใส่ ETT ตอนนี้เหนื่อยมากขึ้น เสมหะสีเขียว ตรวจ Gram stain จาก endotracheal aspirate ได้ผลดังนี้ · 23.1 บรรยาย Gram stain - few PMN, numerous Gram negative rods · 23.2 เขียนชื่อเต็มเชื้อก่อโรคให้ถูกต้อง: Klebsiella pneumoniae **ข้อนี้จะแยกจาก A.baum ยากหน่อย เพราะมันเป็นเชื้อที่เลี้ยงเอง อาจารย์บอกว่าตอบ A.baum อาจได้คะแนนบางส่วน",
 notes:"ผู้จดตอบ: 23.1 few PMN, numerous Gram negative rods · 23.2 Klebsiella pneumoniae · ผู้จด: ข้อนี้แยกจาก A. baumannii ยากหน่อย เพราะเป็นเชื้อที่เลี้ยงเอง (ไม่ใช่สไลด์จากผู้ป่วย) อาจารย์บอกว่าตอบ A. baumannii อาจได้คะแนนบางส่วน · คำแนะนำผู้จดท้ายไฟล์: เจอข้อที่คุ้นอย่าคิดว่าจะเหมือนข้อสอบเก่า — ข้อ Klebsiella นี้ปีก่อน ๆ เป็น A. baumannii มาตลอด",
 parts:S(
  B("23.1 Describe the Gram stain.",3,{tags:["micro"],
   ans:"<b>Numerous Gram-negative rods (bacilli)</b> — แท่งอ้วนสั้น (plump, short) ติดสีชมพูแดง อยู่เดี่ยว/เป็นคู่/กลุ่ม · <b>few PMN</b> · ไม่เห็น Gram-positive organism",
   exp:"Gram-negative = ติดสีชมพู (safranin) · Klebsiella: แท่งอ้วนสั้น อาจเห็น capsule เป็น halo ใส · Pseudomonas: แท่งบางยาวกว่า · Acinetobacter: coccobacilli เป็นคู่ (อาจติดสีไม่แน่นอน) · สไลด์ในภาพเป็นเชื้อจาก culture จึงแทบไม่มีเซลล์",
   rubric:"ได้เต็ม = numerous Gram-negative rods (± PMN) · บอก Gram-negative cocci = ผิด",
   pts:[CR(P("Numerous Gram-negative rods/bacilli","gram.?neg","\\bgnb\\b","gram-?negative (rod|bacill)","แกรมลบ")),P("Plump short rods","plump","อ้วน","short","สั้น","rod","bacill"),P("Few PMN","pmn","neutrophil","polymorph")]}),
  B("23.2 Write the full name of the most likely causative organism.",2,{tags:["micro"],
   ans:"<b><i>Klebsiella pneumoniae</i></b> (ventilator-associated pneumonia)",
   exp:"VAP = pneumonia ที่เกิด &gt;48 ชม. หลังใส่ ETT · เชื้อก่อโรคในโรงพยาบาลไทย: <i>Acinetobacter baumannii</i>, <i>Pseudomonas aeruginosa</i>, <i>Klebsiella pneumoniae</i> (มักเป็น ESBL/carbapenem-resistant), MRSA · เลือก empirical ATB ตาม local antibiogram (เช่น carbapenem/piperacillin-tazobactam ± colistin) แล้วปรับตาม culture · ต้องเขียนชื่อเต็มตัวเอียงหรือขีดเส้นใต้",
   rubric:"ได้เต็ม = Klebsiella pneumoniae (ชื่อเต็ม) · ตามที่ผู้จดเล่า: ตอบ Acinetobacter baumannii ได้คะแนนบางส่วน · เขียนย่อ (K. pneumoniae) อาจถูกหัก",
   pts:[CR(P("Klebsiella pneumoniae","klebsiella"))]})
 ),
 interp:"Micro station: Gram stain ใน VAP — GNB อ้วนสั้น → Klebsiella pneumoniae (ต้องเขียนชื่อเต็ม)",
 summary:["VAP: >48 ชม. หลังใส่ ETT + ไข้/เสมหะเขียว/ออกซิเจนแย่ลง/infiltrate ใหม่","GNB อ้วนสั้น ± capsule = Klebsiella · บาง = Pseudomonas · coccobacilli คู่ = Acinetobacter","เขียนชื่อเต็ม: Klebsiella pneumoniae"]}),

/* ===== สถานี 24 ===== */
Co({page:9,orig:"24",topic:"micro",sub:"Gram stain",title:"Cough and dyspnea for 5 days in an elderly man — sputum Gram stain",img:["os127a_24"],imgNote:"Sputum Gram stain, oil immersion",
 seen:"คล้าย SIXX RoX ข้อ 1 · SI131 Ro409–412 ข้อ 1 (sputum Gram stain CAP)",
 stem:`A 70-year-old man presents with cough and dyspnea for 5 days. Physical examination reveals fine crepitations at the right lower lung. His sputum Gram stain is shown.`,
 gray:"24. ชาย 70 ปี ไอ เหนื่อย 5 วัน ตรวจร่างกาย fine crepitation at right lower lung ย้อม sputum Gram stain ได้ผลดังนี้ · 24.1 บรรยาย - Adequate sputum (SEC &lt; 10/OF, PMN > 25/OF) - numerous PMN, numerous Gram Positive diplococci lancet shape · 24.2 เขียนชื่อเต็มเชื้อก่อโรค: Streptococcus pneumoniae",
 notes:"ผู้จดตอบ: 24.1 adequate sputum (SEC &lt;10/OF, PMN &gt;25/OF) · numerous PMN, numerous Gram-positive diplococci lancet shape · 24.2 Streptococcus pneumoniae · "+TIP3,
 parts:S(
  B("24.1 Describe the Gram stain.",3,{tags:["micro"],
   ans:"<b>Adequate sputum specimen</b> (squamous epithelial cells &lt;10/LPF, PMN &gt;25/LPF) · <b>Numerous PMN</b> · <b>Numerous Gram-positive diplococci, lancet-shaped</b> (ปลายแหลมคู่กัน) ± capsule halo",
   exp:"เกณฑ์ adequate sputum (Bartlett/Murray–Washington) ประเมินที่ <b>low-power field (×100)</b>: SEC &lt;10 และ PMN &gt;25 ต่อ LPF · Gram-positive = ติดสีม่วง · lancet-shaped diplococci = S. pneumoniae · GPC clusters = S. aureus · GNB อ้วน = Klebsiella · GN coccobacilli เล็ก = H. influenzae",
   rubric:"ได้เต็ม = adequate specimen (เกณฑ์) + numerous PMN + GP lancet-shaped diplococci · ผู้จดเขียนเกณฑ์เป็น /OF — ที่ถูกคือ /LPF",
   pts:[P("Adequate specimen: SEC &lt;10, PMN >25 per LPF","adequate","sec","squamous","epithelial","<10",">25"),P("Numerous PMN","pmn","neutrophil","polymorph"),CR(P("Gram-positive lancet-shaped diplococci","gram.?pos","\\bgpc\\b","diplococc","lancet","แกรมบวก"))]}),
  B("24.2 Write the full name of the causative organism.",2,{tags:["micro"],
   ans:"<b><i>Streptococcus pneumoniae</i></b> (pneumococcal community-acquired pneumonia)",
   exp:"ยืนยัน: sputum/blood culture, urine pneumococcal antigen · รักษา: CAP ตามความรุนแรง (CURB-65) — penicillin G / ceftriaxone ± macrolide · ป้องกัน: pneumococcal vaccine ในผู้สูงอายุ ≥65 ปี",
   rubric:"ได้เต็ม = Streptococcus pneumoniae (ชื่อเต็ม) · เขียน pneumococcus เฉย ๆ อาจถูกหัก",
   pts:[CR(P("Streptococcus pneumoniae","streptococcus pneumoniae","s\\.? ?pneumoniae","pneumococc"))]})
 ),
 interp:"Micro station: ประเมินคุณภาพเสมหะก่อน แล้วอ่าน GP lancet-shaped diplococci = S. pneumoniae",
 summary:["Adequate sputum: SEC &lt;10 + PMN >25 ต่อ LPF (×100)","GP lancet-shaped diplococci = Streptococcus pneumoniae","ยืนยัน: culture + urine pneumococcal antigen"],
 opinion:"เห็นด้วยกับผู้จด · แก้หน่วยเกณฑ์ adequate sputum จาก /OF (oil field) เป็น /LPF (low-power field ×100) ตามเกณฑ์มาตรฐาน"}),

/* ===== สถานี 25 ===== */
Co({page:9,orig:"25",topic:"img",sub:"CT brain",title:"Left-sided weakness for 5 days in an elderly man — CT brain",img:["os127a_25"],imgNote:"CT brain, axial (ผู้จดระบุว่ารูปไม่ตรงกับโจทย์ในห้องสอบ)",
 seen:"คล้าย SI131 Ro413–416 ข้อ 20 (อ่าน CT brain)",
 stem:`A 79-year-old man presents with left-sided weakness for 5 days. His CT brain is shown.`,
 gray:"25. ผู้ป่วยชายอายุ 79 ปี มาด้วยอ่อนแรงซีกซ้าย 5 วัน มีผล CT ดังนี้ (รูปไม่ตรงกับโจทย์) · 25.1 บรรยาย CT - CT brain non-contrast - acute-to-subacute bilateral subdural hemorrhage at fronto-parieto-occipital region with brain herniation and brain edema · 25.2 วินิจฉัย: Subdural hemorrhage",
 flag:"⚠ ผู้จดเขียน \"(รูปไม่ตรงกับโจทย์)\" — รูปในไฟล์เป็น SDH ข้างขวาข้างเดียว ส่วนคำบรรยายผู้จด (จากรูปในห้องสอบ) เป็น bilateral SDH · เฉลยบรรยายตามรูปที่ให้ · คำบรรยายผู้จดอยู่ใน notes",
 notes:"ผู้จดระบุว่ารูปในไฟล์ไม่ตรงกับรูปในห้องสอบ · คำบรรยายผู้จด (รูปจริงในห้องสอบ): CT brain non-contrast · acute-to-subacute bilateral subdural hemorrhage at fronto-parieto-occipital region with brain herniation and brain edema · 25.2 subdural hemorrhage · "+TIP3,
 parts:S(
  B("25.1 Describe the CT findings.",4,{tags:["img"],
   ans:"<b>Non-contrast CT brain, axial view</b> · <b>Crescent-shaped extra-axial collection along the right fronto-parietal convexity</b> ข้ามรอยต่อ suture ได้ ไม่ข้าม midline — density สูงปนกัน (hyperdense ส่วนนอก ปน isodense) = acute ถึง subacute blood ± extension ไปตาม falx (interhemispheric) · <b>Mass effect</b>: sulcal effacement ด้านขวา, right lateral ventricle ถูกกด, <b>midline shift ไปทางซ้าย (subfalcine herniation)</b>",
   exp:"SDH (bridging vein) = รูป<b>จันทร์เสี้ยว (crescent)</b> ข้าม suture ได้ ไม่ข้าม falx/tentorium · EDH (middle meningeal artery) = <b>biconvex/lentiform</b> ไม่ข้าม suture · ความทึบตามเวลา: acute hyperdense (&lt;3 วัน), subacute isodense (~3 วัน–3 สัปดาห์ — อาจมองพลาด), chronic hypodense · รอยโรคข้างขวา → อ่อนแรงซีกซ้าย (ตรงกับโจทย์) · ผู้สูงอายุ: สมองฝ่อ bridging vein ตึง ล้มเล็กน้อยก็เกิดได้ + ยา antiplatelet/anticoagulant",
   rubric:"ได้เต็ม = modality (non-contrast CT) + crescentic collection ตำแหน่ง/ข้าง + density/ระยะ + mass effect/midline shift · ผู้จดแนะนำว่าบอก modality มีคะแนน",
   pts:[P("Modality: non-contrast CT brain, axial","non-?contrast","without contrast","plain ct","axial"),CR(P("Crescent-shaped extra-axial collection (subdural) at right fronto-parietal convexity","crescent","จันทร์เสี้ยว","extra-?axial","subdural","\\bsdh\\b")),P("Mixed hyper/isodense → acute-to-subacute","hyperdens","isodens","mixed","acute","subacute"),CR(P("Mass effect: midline shift to the left, ventricular compression, subfalcine herniation","midline shift","shift","mass effect","herniat","efface","compress"))]}),
  B("25.2 What is your diagnosis?",2,{tags:["img"],
   ans:"<b>Right acute-to-subacute subdural hematoma (SDH)</b> with mass effect and midline shift (subfalcine herniation)",
   exp:"Mx: ปรึกษาประสาทศัลยแพทย์ด่วน — SDH หนา &gt;10 มม. หรือ midline shift &gt;5 มม. → surgical evacuation (craniotomy / burr hole สำหรับ chronic) · หยุด/reverse antithrombotic, คุม BP, ประเมิน GCS และ pupil",
   rubric:"ได้เต็ม = subdural hematoma/hemorrhage (± ข้าง, mass effect) · ตอบ EDH หรือ ICH = ผิด",
   pts:[CR(P("Subdural hematoma / hemorrhage","subdural","\\bsdh\\b")),P("With mass effect / midline shift / herniation","mass effect","midline","shift","herniat")]})
 ),
 interp:"CT station: แยก SDH (crescent) จาก EDH (biconvex) + บอกระยะจาก density + mass effect และเชื่อมกับอาการซีกตรงข้าม",
 summary:["บรรยาย: non-contrast CT brain → รูปร่าง/ตำแหน่ง → density (ระยะ) → mass effect","SDH = crescent ข้าม suture · EDH = biconvex ไม่ข้าม suture","Acute hyperdense → subacute isodense → chronic hypodense","หนา >10 มม. หรือ shift >5 มม. → ผ่าตัด"],
 opinion:"ผู้จดบรรยาย bilateral SDH with herniation (ตามรูปในห้องสอบ) แต่ระบุเองว่ารูปในไฟล์ไม่ตรง — รูปที่ให้เห็น SDH ข้างขวาเป็นหลัก เฉลยจึงบรรยายตามรูปที่เห็น · การวินิจฉัย subdural hemorrhage ตรงกับผู้จด"}),

/*END*/
);
})();

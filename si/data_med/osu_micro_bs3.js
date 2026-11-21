/* Unit round OSCE — SI Med · Microscope · Blood smear (sub "PBS") · ชุดที่ 3/4 (bs051–bs075: platelet disorders, technique & artifacts, leukocyte identification — R04 real cell photos)
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

U({id:"bs051",num:"51",pg:56,title:"Petechiae in a man with chronic hepatitis C — blood smear",img:"ubs_itp",
  stem:`A 45-year-old man with untreated chronic hepatitis C (no cirrhosis, spleen not palpable) has petechiae for 2 weeks. Hb 14.2 g/dL, WBC 6,800/µL, platelets 21,000/µL. His blood smear is shown.`,
  interp:"isolated thrombocytopenia + ประมาณเกล็ดเลือดจากสเมียร์ + secondary ITP จาก HCV",
  summary:["ประมาณ plt: นับเฉลี่ยต่อ oil field × 15,000–20,000 (SI key: < 5/OF = ต่ำ, > 25/OF = สูง)","ต้องดูหา platelet clump ก่อนสรุปว่าต่ำจริง","Secondary ITP จาก HCV: รักษา HCV ด้วย DAA; ถ้าเลือดออก/plt ต่ำมาก ให้ IVIG ก่อน (steroid ระวัง viral load)"],
  parts:S(
   B("51.1 Describe the blood smear.",3,{
     ans:"<b>RBC:</b> normochromic normocytic, no schistocytes · <b>WBC:</b> normal · <b>Platelet:</b> <b>markedly decreased</b> (&lt; 5 per oil-immersion field) with a <b>giant platelet</b>; no platelet clumps",
     pts:[P("RBC normal / no schistocytes","normochrom","ncnc","no schisto"),P("WBC normal","wbc.{0,20}normal","normal"),P("Thrombocytopenia with giant platelets, no clumps","thrombocytopen","giant","large plat","no clump")]}),
   B("51.2 How do you estimate the platelet count from a smear?",2,{
     ans:"In the monolayer under oil immersion, count platelets in ~10 fields → <b>average per field × 15,000–20,000/µL</b> (≈ 8–20 per field is normal; <b>&lt; 5/field low, &gt; 25/field high</b>) · check the feathered edge for <b>clumps</b> first",
     pts:[P("Average per oil field × 15,000–20,000","15,?000","20,?000","per field","oil"),P("Check for clumps at feathered edge","clump","feather","edge")]}),
   B("51.3 What is the diagnosis and the treatment approach?",3,{
     ans:"<b>Secondary immune thrombocytopenia associated with HCV</b> · treat <b>HCV with direct-acting antivirals</b> (platelets often recover) · for bleeding or very low counts: <b>IVIG</b> first (steroids may raise viral load), TPO-receptor agonists (eltrombopag) as second line",
     pts:[P("Secondary ITP from HCV","itp","immune thrombocytopen"),P("Treat HCV with DAA","daa","direct.?acting","sofosbuvir","antiviral"),P("IVIG / TPO-RA for bleeding","ivig","immunoglobulin","eltrombopag","romiplostim","tpo")]})
  )}),

U({id:"bs052",num:"52",pg:57,title:"Toddler with easy bruising and a normal platelet count — blood smear",img:"ubs_apde",
  stem:`A 2-year-old boy from Khon Kaen has bruises on the shins and trunk for 2 weeks. He is otherwise well. Hb 11.0 g/dL, WBC 14,500/µL (eosinophils 32%), platelets 285,000/µL. PT and aPTT are normal. His blood smear is shown.`,
  interp:"ลักษณะของ APDE ในเด็กไทย: eosinophilia + pale platelets + plt count ปกติ",
  summary:["APDE: เด็กเล็ก (มัก < 2–3 ปี) ในไทย, จ้ำเลือด, eosinophilia มาก, plt count ปกติ แต่เกล็ดซีดเทา (ขาด α/dense granule) → platelet aggregation บกพร่อง","มักหายเอง; ตรวจอุจจาระหาพยาธิ (พบร่วมบ่อย)","แยก ITP (plt ต่ำ), hemophilia (aPTT ยาว), child abuse"],
  parts:S(
   B("52.1 List the abnormal findings.",3,{
     ans:"<b>Marked eosinophilia</b> (eosinophils with orange granules) · <b>pale-staining 'gray' platelets</b> (hypogranular) with a <b>normal platelet number</b> · RBC normochromic normocytic",
     pts:[P("Eosinophilia","eosinophil"),P("Pale / gray / hypogranular platelets","pale","gray","grey","hypogranular"),P("Normal platelet count","normal.{0,15}(count|number|platelet)","platelet.{0,15}normal")]}),
   B("52.2 What is the most likely diagnosis?",2,{
     ans:"<b>Acquired platelet dysfunction with eosinophilia (APDE)</b>",
     pts:[P("APDE","apde","acquired platelet dysfunction")]}),
   B("52.3 What further test and treatment would you advise?",3,{
     ans:"<b>Stool examination for parasites</b> (concomitant helminth infection is common) → <b>anthelmintic</b> (e.g. albendazole) if found · reassure — <b>self-limiting</b> over weeks to months; avoid antiplatelet drugs/IM injections · (platelet aggregation studies show impaired response if done)",
     pts:[P("Stool exam for parasites","stool","parasite","อุจจาระ"),P("Anthelmintic (albendazole)","albendazole","anthelmint","mebendazole"),P("Self-limiting / reassure","self.?limit","resolv","reassur","หายเอง")]})
  )}),

U({id:"bs053",num:"53",pg:13,title:"Three smears with abnormal-looking cells — artifact or disease?",img:"ubs_artif",
  stem:`A junior lab assistant made three blood smears (A, B, C) from healthy volunteers; each was reported as 'abnormal'. Look at the pictures.`,
  interp:"รู้จัก artifact ที่พบบ่อยในสเมียร์และวิธีแก้",
  summary:["Crenated cell (echinocyte artifact): แห้งช้า, EDTA เก่า > 2–3 ชม. — ถ้าทุก field เหมือนกันมักเป็น artifact","Water artifact: refractile moth-eaten จากความชื้น/น้ำใน methanol","Stain precipitate: เม็ดดำ-น้ำเงินอยู่คนละระนาบโฟกัสกับเซลล์ เงาวาว — อย่าสับสนกับเชื้อ/parasite"],
  parts:S(
   B("53.1 Name the artifact in A, B and C.",3,{
     ans:"<b>A</b> = <b>crenated RBCs</b> (artifactual echinocytes/'burr' cells) · <b>B</b> = <b>water (drying) artifact</b> — moth-eaten refractile areas in RBCs · <b>C</b> = <b>stain precipitate</b> — dark blue-black granules on and between cells",
     pts:[P("A crenated / echinocyte","crenat","echinocyt","burr"),P("B water artifact","water","refractil","moth"),P("C stain precipitate","precipitat","stain deposit","stain")]}),
   B("53.2 How can you avoid each of them?",3,{
     ans:"<b>A</b>: make smears within 2–3 h of collection (fresh EDTA blood) and dry quickly · <b>B</b>: dry smears quickly, use <b>fresh water-free methanol</b>, avoid humid conditions · <b>C</b>: <b>filter the stain</b>, use clean slides, rinse adequately with buffer",
     pts:[P("Fresh sample within 2–3 h / dry fast","2.?3","fresh","dry"),P("Water-free methanol / low humidity","methanol","humid"),P("Filter stain / adequate washing","filter","wash","rinse")]}),
   B("53.3 How do you tell C from bacteria or parasites under the microscope?",2,{
     ans:"Focus up and down — precipitate lies <b>in a different plane</b> and <b>glows/refracts</b>, is irregular in size and lies over cells and background alike; organisms have regular morphology and sit in the same plane as the cells",
     pts:[P("Different focal plane / refractile","plane","focus","refract","glow"),P("Irregular, over cells and background","irregular","background")]})
  )}),

U({id:"bs054",num:"54",pg:24,title:"Correcting the white count for nucleated red cells",img:"ubs_bthe",
  stem:`A 16-year-old with β-thalassemia/Hb E disease has an analyzer WBC of 24,000/µL. On the smear shown, you count 60 nucleated RBCs per 100 white cells.`,
  interp:"เทคนิคการรายงาน NRBC และแก้ค่า WBC",
  summary:["รายงาน NRBC เป็นจำนวนต่อ 100 WBC","Corrected WBC = WBC × 100 / (100 + NRBC)","ดูสเมียร์ที่ monolayer: 10× scan → 40× เลือกบริเวณ → 100× oil ประเมิน RBC/WBC/plt"],
  parts:S(
   B("54.1 Name the cells that make the analyzer WBC falsely high.",1,{
     ans:"<b>Nucleated red blood cells (NRBC, normoblasts)</b> — counted as white cells by many analyzers",
     pts:[P("NRBC","nrbc","nucleated","normoblast")]}),
   B("54.2 Calculate the corrected WBC.",3,{
     ans:"Corrected WBC = WBC × 100 ÷ (100 + NRBC) = 24,000 × 100 ÷ 160 = <b>15,000/µL</b>",
     pts:[P("Formula WBC × 100/(100 + NRBC)","100 ?\\+","100/","\\(100"),P("Answer 15,000/µL","15,?000","15000")]}),
   B("54.3 Where on the slide and with which objectives should a smear be examined?",3,{
     ans:"<b>10×</b>: scan stain quality, distribution, <b>feathered edge for platelet clumps/fibrin</b> · <b>40×</b>: find the <b>monolayer ('zone of morphology')</b> between the thick body and the feathered edge — RBCs barely touch, central pallor visible · <b>100× oil</b>: RBC size/colour/shape/inclusions, 100-cell WBC differential, platelet estimate",
     pts:[P("10× scan + feathered edge for clumps","10 ?x","10×","feather","clump"),P("Monolayer / zone of morphology","monolayer","zone"),P("100× oil for morphology / differential / platelets","100 ?x","100×","oil")]})
  )}),

U({id:"bs055",num:"55",pg:51,title:"Granulocyte maturation — put the cells in order",img:"ubs_gran",
  stem:`Six cells of the neutrophil lineage from a bone marrow aspirate are shown (A–F) in random order.`,
  interp:"เรียงลำดับการเจริญของ neutrophil และบอกจุดเปลี่ยนสำคัญ",
  summary:["Myeloblast → promyelocyte (primary/azurophilic granule) → myelocyte (secondary granule เริ่ม, nucleus กลม) → metamyelocyte (เว้ารูปไต) → band → segmented","Nucleoli หายตั้งแต่ระยะ myelocyte","PB ปกติพบแค่ band และ segmented"],
  parts:S(
   B("55.1 Arrange A–F from the most immature to the most mature, naming each cell.",4,{
     ans:"<b>B</b> myeloblast → <b>D</b> promyelocyte → <b>A</b> myelocyte → <b>E</b> metamyelocyte → <b>C</b> band form → <b>F</b> segmented neutrophil",
     pts:[P("B myeloblast first","b.{0,6}myeloblast","myeloblast.{0,6}b\\b","^\\s*b"),P("D promyelocyte","d.{0,6}promyelocyt","promyelocyt.{0,6}d\\b"),P("A myelocyte then E metamyelocyte","a.{0,8}e","myelocyt"),P("C band then F segmented","c.{0,8}f","band","segment")]}),
   B("55.2 At which stage do (a) specific (secondary) granules appear and (b) nucleoli disappear?",2,{
     ans:"(a) <b>Myelocyte</b> — first stage with specific granules (promyelocytes have primary azurophilic granules) · (b) nucleoli are no longer seen from the <b>myelocyte</b> stage onward",
     pts:[P("Secondary granules at myelocyte","myelocyt"),P("Nucleoli lost from myelocyte","myelocyt","nucleol")]}),
   B("55.3 Which of these cells are normally found in peripheral blood?",1,{
     ans:"Only <b>band forms and segmented neutrophils</b> — earlier stages in blood = left shift / leukoerythroblastic picture",
     pts:[P("Band and segmented only","band","segment")]})
  )}),

U({r:4,id:"bs056",num:"56",pg:5,title:"Pneumonia with a high white count — identify four cells",img:"ubs_c_leftshift",
  stem:`A 70-year-old man with severe pneumonia has WBC 26,000/µL. Four cells from his smear are shown (A–D).`,
  interp:"ระบุ band, myelocyte, segmented, metamyelocyte และนิยาม left shift",
  summary:["Band: nucleus รูปเกือกม้า/ไส้กรอก ไม่มีรอยคอดเป็นเส้น · Metamyelocyte: รูปไต เว้า < 1/2","Myelocyte: nucleus กลม/รี cytoplasm มี granule ละเอียด","Left shift = band เพิ่ม ± metamyelocyte/myelocyte/promyelocyte ใน PB: ติดเชื้อรุนแรง, พิษ, เสียเลือดเฉียบพลัน"],
  parts:S(
   B("56.1 Identify cells A, B, C and D.",4,{
     ans:"<b>A</b> = <b>band neutrophil</b> · <b>B</b> = <b>myelocyte</b> · <b>C</b> = <b>segmented neutrophil</b> · <b>D</b> = <b>metamyelocyte</b>",
     pts:[P("A band","band"),P("B myelocyte","myelocyt"),P("C segmented neutrophil","segment","pmn","polymorph"),P("D metamyelocyte","metamyelocyt")]}),
   B("56.2 What is meant by a 'left shift' and what does it suggest here?",2,{
     ans:"An <b>increase in band forms and/or the appearance of metamyelocytes, myelocytes (± promyelocytes)</b> in peripheral blood — here a reactive response to <b>severe bacterial infection/sepsis</b> (also acute poisoning, acute blood loss)",
     pts:[P("Increased bands / immature granulocytes in blood","band","immature","myelocyt"),P("Severe infection / sepsis","infect","sepsis","pneumonia")]}),
   B("56.3 How do you distinguish a band from a metamyelocyte?",2,{
     ans:"<b>Metamyelocyte</b>: kidney-shaped nucleus, indentation <b>less than half</b> of the (hypothetical round) nucleus width · <b>band</b>: indentation <b>more than half</b> — curved, sausage/horseshoe nucleus of uniform width without a thin filament between lobes",
     pts:[P("Metamyelocyte indentation < half","less than half","< ?1/2","kidney","ไต"),P("Band: horseshoe / > half, no filament","horseshoe","sausage","more than half","filament")]})
  )}),

U({r:4,id:"bs057",num:"57",pg:20,title:"Septic shock — three neutrophils with changes (A–C)",img:"ubs_c_toxic3",
  stem:`A 63-year-old woman with septic shock from pyelonephritis has WBC 21,500/µL. Three neutrophils from her smear are shown (A, B, C).`,
  interp:"ระบุ toxic changes ของ neutrophil และความหมาย",
  summary:["Toxic granulation = primary granule ย้อมเข้ม · Vacuolation = phagocytosis/autodigestion (ชวนแบคทีรีเมีย) · Döhle body = rough ER สีฟ้าเทาที่ขอบ cytoplasm","พบใน sepsis, burns, G-CSF, การอักเสบรุนแรง, ตั้งครรภ์ (Döhle)","Döhle-like inclusion + macrothrombocytopenia → MYH9 disorder (May–Hegglin)"],
  parts:S(
   B("57.1 Name the main change in A, B and C.",3,{
     ans:"<b>A</b> = <b>toxic granulation</b> (coarse dark purple granules) · <b>B</b> = <b>cytoplasmic vacuolation</b> · <b>C</b> = <b>Döhle body</b> (pale blue-gray patch at the cytoplasmic edge) with toxic granulation",
     pts:[P("A toxic granulation","toxic granul"),P("B vacuolation","vacuol"),P("C Döhle body","dohle","döhle","dohle body")]}),
   B("57.2 What do these changes indicate, and what is a Döhle body made of?",2,{
     ans:"<b>Toxic changes</b> of neutrophils — severe infection/sepsis, burns, G-CSF therapy, severe inflammation; vacuolation especially suggests <b>bacteremia</b> · Döhle body = <b>aggregates of rough endoplasmic reticulum (ribosomal RNA)</b>",
     pts:[P("Severe infection / sepsis (toxic changes)","sepsis","infect","toxic"),P("Döhle = rough ER / RNA","endoplasmic","\\ber\\b","rna","ribosom")]}),
   B("57.3 Name an inherited condition with Döhle-like inclusions and give its other blood finding.",2,{
     ans:"<b>MYH9-related disorder (May–Hegglin anomaly)</b> — <b>macrothrombocytopenia</b> (giant platelets)",
     pts:[P("May–Hegglin / MYH9","may.?hegglin","myh9"),P("Giant platelets / macrothrombocytopenia","giant","macrothrombocytopen","large plat")]})
  )}),

U({r:4,id:"bs058",num:"58",pg:19,title:"Advanced HIV with fever and skin papules — what is inside the phagocytes?",img:"ubs_c_phago2",
  stem:`A 32-year-old man with untreated HIV (CD4 18 cells/µL) has fever, weight loss and umbilicated papules on the face for 3 weeks. Hb 8.1 g/dL, platelets 62,000/µL. Two fields of his buffy-coat smear are shown.`,
  interp:"เห็น yeast ใน phagocyte ใน PB ของผู้ป่วย HIV ไทย → disseminated talaromycosis",
  summary:["Talaromyces marneffei: yeast รูปรี 2–6 µm มี transverse septum (แบ่งตัวแบบ fission) อยู่ใน macrophage/neutrophil","ddx: Histoplasma (budding ไม่มี septum), Cryptococcus (capsule)","รักษา: liposomal/conventional amphotericin B 2 สัปดาห์ → itraconazole 400 mg/d 10 สัปดาห์ → 200 mg/d จน CD4 > 100 ≥ 6 เดือน + เริ่ม ART"],
  parts:S(
   B("58.1 Describe what you see.",3,{
     ans:"<b>Neutrophils (and a monocyte/macrophage) containing phagocytosed oval yeast-like organisms</b> — small (2–6 µm) intracellular forms with a clear halo, some appearing <b>septate</b>",
     pts:[P("Phagocytes (neutrophils/monocytes)","neutrophil","monocyt","macrophage","phagocyt"),P("Intracellular yeast-like organisms","yeast","fung","organism","intracellular")]}),
   B("58.2 What is the most likely diagnosis? Give one differential.",2,{
     ans:"<b>Disseminated talaromycosis</b> (<i>Talaromyces marneffei</i>; penicilliosis) · ddx: <b>disseminated histoplasmosis</b> (budding, no septum), cryptococcosis, leishmaniasis",
     pts:[P("Talaromyces / penicillium marneffei","talaromyc","marneffei","penicill"),P("Differential (histoplasmosis / cryptococcosis)","histoplasm","cryptococ","leishman")]}),
   B("58.3 Outline the treatment.",3,{
     ans:"Induction: <b>amphotericin B</b> (liposomal 3–5 mg/kg/d or deoxycholate 0.7–1 mg/kg/d) for 2 weeks → consolidation <b>itraconazole 200 mg twice daily for 10 weeks</b> → secondary prophylaxis itraconazole 200 mg/d until CD4 &gt; 100 for ≥ 6 months · start <b>ART</b> within 1–2 weeks",
     pts:[P("Amphotericin B induction","amphotericin"),P("Itraconazole consolidation/prophylaxis","itraconazole"),P("Start ART","\\bart\\b","antiretrovir","haart")]})
  )}),

U({r:4,id:"bs059",num:"59",pg:13,title:"Severe headache after a raw snail dish — which cell is increased?",img:"ubs_c_eos",
  stem:`A 28-year-old man from Nakhon Phanom has severe headache and neck stiffness for 4 days. Two weeks ago he ate raw golden apple snails (koi hoi). WBC 13,600/µL with 24% of the cell shown. CSF: WBC 620/µL, 40% of the same cell.`,
  interp:"ระบุ eosinophil + eosinophilic meningitis จาก Angiostrongylus",
  summary:["Eosinophil: nucleus 2 lobe (แว่นตา) granule ส้มหยาบเรียงแน่น","Eosinophilic meningitis (CSF eos ≥ 10%) ในไทย: Angiostrongylus cantonensis (หอยดิบ) > Gnathostoma spinigerum (ปลา/กบดิบ, มักมี radiculomyelitis/เลือดออกในสมอง)","Angiostrongylus: ยาแก้ปวด + เจาะหลังระบาย + prednisolone 60 mg/d 2 สัปดาห์"],
  parts:S(
   B("59.1 Identify the cell and describe its features.",2,{
     ans:"<b>Eosinophil</b> — 12–17 µm, <b>bilobed ('spectacle') nucleus</b>, cytoplasm packed with <b>coarse orange-red granules</b>",
     pts:[P("Eosinophil","eosinophil"),P("Bilobed nucleus / orange granules","bilob","2.?lobe","orange","red granul")]}),
   B("59.2 What is the diagnosis and the most likely parasite?",3,{
     ans:"<b>Eosinophilic meningitis</b> (CSF eosinophils ≥ 10%) caused by <b><i>Angiostrongylus cantonensis</i></b> (rat lungworm) from raw snails · ddx <i>Gnathostoma spinigerum</i> (raw fish/frog/eel; radiculomyelitis, hemorrhage)",
     pts:[P("Eosinophilic meningitis","eosinophilic mening"),P("Angiostrongylus cantonensis","angiostrongyl"),P("Gnathostoma as differential","gnathostom")]}),
   B("59.3 How is it treated?",2,{
     ans:"<b>Analgesics</b> + <b>repeated lumbar puncture</b> to relieve raised pressure + <b>prednisolone 60 mg/day for 2 weeks</b> (shortens headache) · (albendazole may be added; Gnathostoma → albendazole 400 mg bid 21 days or ivermectin)",
     pts:[P("Corticosteroid (prednisolone 60 mg/d × 2 wk)","prednis","steroid"),P("Analgesics / therapeutic LP","analges","lumbar","\\blp\\b","tap")]})
  )}),

U({r:4,id:"bs060",num:"60",pg:9,title:"Normal white cells — identify A to D",img:"ubs_c_wbc4",
  stem:`Four white cells from the smear of a healthy 25-year-old blood donor are shown (A–D).`,
  interp:"ระบุ WBC ปกติ และค่าปกติของ differential count",
  summary:["Eosinophil: granule ส้ม 2 lobe · Basophil: granule ม่วงดำทับ nucleus · Monocyte: ใหญ่สุด nucleus พับ cytoplasm ฟ้าเทามี vacuole · Lymphocyte: เล็ก nucleus กลมเข้ม","Differential ผู้ใหญ่: neutrophil 40–75%, lymph 20–45%, mono 2–10%, eos 1–6%, baso 0–1%","ควรใช้ absolute count (WBC × %) ตัดสินว่าสูง/ต่ำ"],
  parts:S(
   B("60.1 Identify cells A, B, C and D.",4,{
     ans:"<b>A</b> = <b>eosinophil</b> · <b>B</b> = <b>basophil</b> · <b>C</b> = <b>monocyte</b> · <b>D</b> = <b>lymphocyte</b>",
     pts:[P("A eosinophil","eosinophil"),P("B basophil","basophil"),P("C monocyte","monocyt"),P("D lymphocyte","lymphocyt")]}),
   B("60.2 Give the normal adult percentage of each of these cells.",2,{
     ans:"Eosinophils <b>1–6%</b> · basophils <b>0–1%</b> · monocytes <b>2–10%</b> · lymphocytes <b>20–45%</b> (neutrophils 40–75%) — interpret using absolute counts",
     pts:[P("Eos 1–6% / baso 0–1%","1.?6","0.?1","0.?2"),P("Mono 2–10% / lymph 20–45%","2.?10","20.?4\\d")]})
  )}),

U({r:4,id:"bs061",num:"61",pg:15,title:"Itching after hot showers and a large spleen — identify the cell",img:"ubs_c_baso",
  stem:`A 52-year-old man has itching after hot showers and the spleen is 6 cm below the costal margin. WBC 32,000/µL with 7% of the cell shown; platelets 710,000/µL.`,
  interp:"ระบุ basophil และความหมายของ basophilia",
  summary:["Basophil: granule ม่วงดำใหญ่ขนาดต่าง ๆ บดบัง nucleus","Basophilia ต่อเนื่อง ≈ myeloproliferative neoplasm (CML, PV, PMF) จนกว่าจะพิสูจน์","CML: basophil ≥ 20% = accelerated/blast phase feature (ELN/WHO เก่า)"],
  parts:S(
   B("61.1 Identify the cell.",2,{
     ans:"<b>Basophil</b> — round cell 10–12 µm whose nucleus is <b>obscured by large, coarse, purple-black granules</b> of varying size",
     pts:[P("Basophil","basophil"),P("Coarse purple-black granules obscuring nucleus","purple","black","obscur","granul")]}),
   B("61.2 What does persistent basophilia suggest, and which test would you send first?",3,{
     ans:"A <b>myeloproliferative neoplasm</b> — especially <b>CML</b> (also PV, PMF); less often allergy, hypothyroidism, ulcerative colitis · first test: <b>BCR::ABL1</b> (FISH/RT-PCR); if negative → <b>JAK2 V617F</b> (± CALR, MPL)",
     pts:[P("Myeloproliferative neoplasm (CML/PV/PMF)","myeloprolif","\\bmpn\\b","cml","polycythemia"),P("BCR::ABL1","bcr"),P("JAK2","jak2")]})
  )}),

U({r:4,id:"bs062",num:"62",pg:11,title:"Persistent high monocyte count in an older man — identify the cell",img:"ubs_c_mono",
  stem:`A 72-year-old man has had fatigue for 6 months. Hb 9.6 g/dL, platelets 88,000/µL, WBC 9,800/µL with 22% of the cell shown; the count has been similar for 4 months. No infection was found.`,
  interp:"ระบุ monocyte + ddx monocytosis + CMML",
  summary:["Monocyte: ใหญ่ 12–20 µm nucleus พับ/รูปไต chromatin โปร่ง cytoplasm ฟ้าเทา มี vacuole","Reactive monocytosis: TB, SBE, recovery phase, autoimmune, splenectomy","CMML (WHO 2022): monocyte ≥ 0.5×10⁹/L และ ≥ 10% ต่อเนื่อง ≥ 3 เดือน + cytopenia/dysplasia, blast < 20%"],
  parts:S(
   B("62.1 Identify the cell and give two features.",2,{
     ans:"<b>Monocyte</b> — large (12–20 µm), <b>folded/kidney-shaped nucleus with lacy chromatin</b>, abundant <b>blue-gray 'ground-glass' cytoplasm with vacuoles</b>",
     pts:[P("Monocyte","monocyt"),P("Folded nucleus / blue-gray vacuolated cytoplasm","fold","kidney","lacy","gray","grey","vacuol")]}),
   B("62.2 Give three reactive causes of monocytosis.",3,{
     ans:"<b>Tuberculosis</b> · <b>subacute infective endocarditis</b> · recovery from acute infection or neutropenia · malaria, kala-azar · autoimmune disease (SLE, RA, IBD) · post-splenectomy",
     pts:[G("Reactive causes (any 3)",3,P("TB","\\btb\\b","tubercul"),P("Infective endocarditis","endocardit","sbe"),P("Recovery phase","recover"),P("Malaria / kala-azar","malaria","kala","leishman"),P("Autoimmune / IBD","autoimmune","sle","rheumat","ibd","crohn","colitis"),P("Post-splenectomy","splenectom"))]}),
   B("62.3 What diagnosis do you suspect here, and how is it confirmed?",2,{
     ans:"<b>Chronic myelomonocytic leukemia (CMML)</b> — persistent monocytes ≥ 0.5 ×10⁹/L and ≥ 10% for ≥ 3 months with cytopenias · confirm with <b>bone marrow</b> (dysplasia, blasts &lt; 20%), cytogenetics, NGS (TET2, SRSF2, ASXL1); exclude BCR::ABL1",
     pts:[P("CMML","cmml","myelomonocytic"),P("Bone marrow / cytogenetics / NGS","bone marrow","\\bbm\\b","cytogenet","ngs","molecular")]})
  )}),

U({r:4,id:"bs063",num:"63",pg:22,title:"Fatigue and infections in a young adult — identify the cell",img:"ubs_c_blast",
  stem:`A 24-year-old woman has recurrent fever and mouth ulcers for 3 weeks. Hb 7.4 g/dL, WBC 3,100/µL, platelets 19,000/µL. Many cells like the one shown are present (34% of white cells).`,
  interp:"ระบุ blast จาก PB ของ pancytopenia และขั้นตอนต่อไป",
  summary:["Blast: N:C สูง chromatin ละเอียด nucleoli เด่น cytoplasm น้อยสีน้ำเงิน","WBC อาจต่ำได้ใน acute leukemia (aleukemic)","ต้องทำ BM + flow แยก AML/ALL ก่อนรักษา"],
  parts:S(
   B("63.1 Identify the cell and describe its features.",3,{
     ans:"<b>Blast</b> — medium-to-large cell, <b>very high N:C ratio</b>, round nucleus with <b>fine (dispersed) chromatin</b> and <b>visible nucleoli</b>, <b>scant basophilic (blue) cytoplasm</b>",
     pts:[P("Blast","blast"),P("High N:C ratio / scant blue cytoplasm","n:c","n/c","scant","blue"),P("Fine chromatin / nucleoli","fine","nucleol")]}),
   B("63.2 What is the most likely diagnosis despite the low WBC?",1,{
     ans:"<b>Acute leukemia</b> (AML or ALL) — the WBC can be low ('aleukemic') with pancytopenia",
     pts:[P("Acute leukemia","acute leuk","\\baml\\b","\\ball\\b")]}),
   B("63.3 Which two tests are needed to classify it?",2,{
     ans:"<b>Bone marrow aspiration/biopsy</b> (± cytochemistry: MPO) and <b>flow cytometry immunophenotyping</b> (myeloid vs B/T lymphoid), then cytogenetics/molecular studies",
     pts:[P("Bone marrow","bone marrow","\\bbm\\b"),P("Flow cytometry / MPO","flow","immunophenotyp","mpo","cytochem")]})
  )}),

U({r:4,id:"bs064",num:"64",pg:24,title:"Recovering from chemotherapy-induced neutropenia — identify the cell",img:"ubs_c_promy",
  stem:`A 48-year-old woman on day 14 after chemotherapy (with G-CSF) has a rising neutrophil count. The cell shown appears in her blood smear.`,
  interp:"ระบุ promyelocyte ปกติ แยกจาก blast/APL cell",
  summary:["Promyelocyte: ใหญ่กว่า myeloblast cytoplasm มากสีน้ำเงิน มี primary (azurophilic) granule แดง-ม่วง, nucleus เยื้อง มี hof, อาจเห็น nucleolus","ใน PB: recovery หลังยาเคมี/G-CSF, leukemoid, CML, leukoerythroblastic","APL: abnormal promyelocyte granule หนาแน่น nucleus bilobed + Auer rods/faggot"],
  parts:S(
   B("64.1 Identify the cell and give its key features.",3,{
     ans:"<b>Promyelocyte</b> — large (12–25 µm, bigger than a myeloblast), slightly eccentric nucleus with a <b>visible nucleolus</b>, abundant <b>basophilic cytoplasm with coarse azurophilic (primary) granules</b>, perinuclear hof",
     pts:[P("Promyelocyte","promyelocyt"),P("Azurophilic (primary) granules","azurophil","primary granul","granul"),P("Nucleolus / eccentric nucleus / hof","nucleol","eccentric","hof")]}),
   B("64.2 Why is it in the blood here, and how would an APL cell differ?",3,{
     ans:"<b>Bone marrow recovery / G-CSF stimulation</b> (left shift) · APL cells: <b>abnormal promyelocytes</b> with irregular <b>bilobed/kidney-shaped nuclei</b>, <b>very dense granules</b> obscuring the nucleus (or hypogranular in M3v), and <b>Auer rods/faggot cells</b>; they dominate the smear with DIC",
     pts:[P("Marrow recovery / G-CSF / left shift","recover","g-?csf","left shift","stimulat"),P("APL: bilobed nucleus, dense granules, Auer rods / faggot","bilob","auer","faggot","dense")]})
  )}),

U({r:4,id:"bs065",num:"65",pg:26,title:"High white count, bleeding and odd bilobed cells — blood smear",img:"ubs_c_apl3",
  stem:`A 37-year-old man has epistaxis and bruises. WBC 64,000/µL, platelets 15,000/µL, fibrinogen 70 mg/dL, D-dimer markedly raised. Three fields of the predominant cell are shown.`,
  interp:"APL variant แบบ hypogranular (M3v) ที่ WBC สูง — อย่าพลาดเพราะ granule ไม่เด่น",
  summary:["M3v: nucleus bilobed/folded แบบ butterfly, granule ละเอียดจนมองไม่เห็น, WBC มักสูง → high-risk APL","ยังคง t(15;17) PML::RARA, CD34−/HLA-DR−","ATRA ทันที + support DIC; high risk (WBC > 10k) → ATRA + ATO + chemotherapy (idarubicin)"],
  parts:S(
   B("65.1 Describe the predominant cell.",3,{
     ans:"Large cells with <b>bilobed / folded ('butterfly') nuclei</b>, fine chromatin, moderate–abundant pale blue cytoplasm with <b>few or very fine granules</b> (hypogranular), occasional vacuole — <b>abnormal (hypogranular) promyelocytes</b>",
     pts:[P("Bilobed / folded nucleus","bilob","fold","butterfly","kidney"),P("Hypogranular / fine granules","hypogranular","fine granul","few granul","microgranul"),P("Abnormal promyelocytes","promyelocyt")]}),
   B("65.2 What is the diagnosis?",2,{
     ans:"<b>Acute promyelocytic leukemia, microgranular/hypogranular variant (M3v)</b> — high-risk (WBC &gt; 10,000/µL) with DIC",
     pts:[P("APL","\\bapl\\b","promyelocytic"),P("Microgranular / hypogranular variant (M3v), high risk","m3v","microgranular","hypogranular","variant","high.?risk")]}),
   B("65.3 What is your immediate management?",3,{
     ans:"<b>Start ATRA immediately</b> · correct DIC: <b>cryoprecipitate</b> (fibrinogen &gt; 150 mg/dL), <b>platelets</b> &gt; 30–50k, FFP · high-risk induction: <b>ATRA + arsenic trioxide + chemotherapy</b> (e.g. idarubicin) ± steroid prophylaxis for differentiation syndrome · send PML::RARA (PCR/FISH)",
     pts:[P("ATRA immediately","atra","retinoic"),P("DIC support (cryo / platelets / FFP)","cryo","fibrinogen","platelet","ffp"),P("Chemo / ATO for high risk","arsenic","ato","idarubicin","chemo")]})
  )}),

U({r:4,id:"bs066",num:"66",pg:28,title:"Myeloid cell in a leukoerythroblastic smear — identify the cell",img:"ubs_c_myelocyte",
  stem:`A 60-year-old woman with metastatic lung cancer has the cell shown in her peripheral blood smear (together with NRBCs).`,
  interp:"ระบุ myelocyte และแยกจาก promyelocyte/metamyelocyte",
  summary:["Myelocyte: nucleus กลม/รี เว้าน้อย ไม่มี nucleolus, cytoplasm มี secondary granule ละเอียดสีชมพู-ม่วง","Promyelocyte: ใหญ่กว่า มี nucleolus + primary granule หยาบ","Metamyelocyte: nucleus รูปไต"],
  parts:S(
   B("66.1 Identify the cell.",2,{
     ans:"<b>Neutrophilic myelocyte</b> — round cell 10–20 µm, round/oval nucleus with slight flattening, <b>no nucleolus</b>, abundant cytoplasm full of <b>fine pink-violet specific (secondary) granules</b>",
     pts:[P("Myelocyte","myelocyt"),P("No nucleolus / fine secondary granules","no nucleol","secondary","specific","fine")]}),
   B("66.2 How does it differ from a promyelocyte and from a metamyelocyte?",2,{
     ans:"<b>Promyelocyte</b>: larger, <b>nucleolus visible</b>, coarse <b>primary azurophilic</b> granules, bluer cytoplasm · <b>Metamyelocyte</b>: <b>kidney-shaped (indented) nucleus</b>",
     pts:[P("Promyelocyte has nucleolus / primary granules","nucleol","primary","azurophil"),P("Metamyelocyte kidney-shaped nucleus","kidney","indent","ไต")]}),
   B("66.3 What does this cell together with NRBCs indicate?",1,{
     ans:"A <b>leukoerythroblastic picture</b> — marrow infiltration (myelophthisis) by metastatic cancer",
     pts:[P("Leukoerythroblastic / marrow infiltration","leukoerythroblast","leucoerythroblast","myelophth","infiltrat")]})
  )}),

U({r:4,id:"bs067",num:"67",pg:32,title:"Prolonged fever after a kidney transplant — identify the cell",img:"ubs_c_reactl4",
  stem:`A 40-year-old kidney transplant recipient (on tacrolimus and mycophenolate) has had fever for 10 days, ALT 180 U/L and WBC 7,800/µL with 18% of cells like the one shown.`,
  interp:"ระบุ reactive (variant) lymphocyte และสาเหตุในผู้ป่วยกดภูมิ",
  summary:["Reactive lymphocyte: ใหญ่ cytoplasm มากสีน้ำเงินเข้มขึ้นที่ขอบ โอบ RBC (Downey type II)","สาเหตุ: EBV, CMV, dengue, HIV ระยะแรก, hepatitis, toxoplasma, ยา (DRESS)","หลังปลูกถ่ายไต: CMV → CMV PCR (viral load) → ganciclovir/valganciclovir"],
  parts:S(
   B("67.1 Identify the cell.",2,{
     ans:"<b>Reactive (variant/atypical) lymphocyte</b> — large cell with abundant cytoplasm, <b>deep blue at the edge</b>, indented by neighbouring RBCs ('skirting'), nucleus with less condensed chromatin (Downey type II)",
     pts:[P("Reactive / atypical / variant lymphocyte","reactive","atypical","variant","downey"),P("Abundant blue cytoplasm hugging RBCs","blue","skirt","abundant","indent")]}),
   B("67.2 What is the most likely cause in this patient, and how do you confirm it?",3,{
     ans:"<b>Cytomegalovirus (CMV) infection/disease</b> in a transplant recipient (mononucleosis-like syndrome, hepatitis) · confirm with <b>quantitative CMV PCR (viral load)</b> in blood ± tissue biopsy · treat with <b>IV ganciclovir or oral valganciclovir</b> and reduce immunosuppression",
     pts:[P("CMV","cmv","cytomegalo"),P("CMV PCR / viral load","pcr","viral load","antigenemia"),P("Ganciclovir / valganciclovir","ganciclovir")]}),
   B("67.3 Give two other infections that produce this cell.",2,{
     ans:"<b>EBV</b> (infectious mononucleosis) · <b>dengue</b> · acute HIV · viral hepatitis · toxoplasmosis · drug reaction (DRESS)",
     pts:[G("Other causes (any 2)",2,P("EBV","ebv","mononucleo"),P("Dengue","dengue"),P("HIV","hiv"),P("Hepatitis","hepatit"),P("Toxoplasma","toxoplasm"),P("Drug / DRESS","dress","drug"))]})
  )}),

U({r:4,id:"bs068",num:"68",pg:34,title:"Red itchy skin all over and enlarged nodes — identify the cells",img:"ubs_c_sezary",
  stem:`A 64-year-old man has had generalized red, scaly, itchy skin for 8 months and axillary lymphadenopathy. WBC 14,000/µL with many cells like those shown (A–C).`,
  interp:"ระบุ Sézary cell (cerebriform nucleus) → Sézary syndrome และ flow ที่ช่วย",
  summary:["Sézary cell: nucleus พับเป็นร่องแบบรอยหยักสมอง (cerebriform) cytoplasm น้อย","Sézary syndrome: erythroderma + lymphadenopathy + clonal T cells ใน PB (Sézary ≥ 1,000/µL)","Flow: CD4+ ที่สูญเสีย CD7 และ/หรือ CD26, CD4:CD8 ≥ 10"],
  parts:S(
   B("68.1 Describe the abnormal cells.",2,{
     ans:"Lymphoid cells with <b>convoluted, grooved 'cerebriform' (brain-like) nuclei</b>, dense chromatin and scant pale blue cytoplasm — <b>Sézary cells</b>",
     pts:[P("Cerebriform / convoluted nucleus","cerebriform","convolut","brain","groov","fold"),P("Sézary cells","sezary","sézary")]}),
   B("68.2 What is the diagnosis?",2,{
     ans:"<b>Sézary syndrome</b> — leukemic cutaneous T-cell lymphoma (erythroderma + lymphadenopathy + circulating clonal Sézary cells)",
     pts:[P("Sézary syndrome / CTCL","sezary","sézary","ctcl","cutaneous t")]}),
   B("68.3 Which flow cytometry findings support it?",2,{
     ans:"Expanded <b>CD4+ T cells</b> with <b>loss of CD7 and/or CD26</b> (CD4+CD7− ≥ 30% or CD4+CD26− ≥ 40%), <b>CD4:CD8 ratio ≥ 10</b>, Sézary cells ≥ 1,000/µL; clonal TCR gene rearrangement",
     pts:[P("CD4+ with loss of CD7/CD26","cd4","cd7","cd26"),P("CD4:CD8 ≥ 10 / clonal TCR","cd4.?:.?cd8","10","tcr","clonal")]})
  )}),

U({r:4,id:"bs069",num:"69",pg:35,title:"Generalized painless lymphadenopathy with circulating lymphoid cells",img:"ubs_c_lymphoma",
  stem:`A 57-year-old woman has painless cervical, axillary and inguinal lymphadenopathy for a year. WBC 12,400/µL with many small lymphoid cells like those shown.`,
  interp:"เห็น lymphoid cell ที่ nucleus มีรอยแยก (cleaved) → lymphoma ระยะ leukemic (เช่น follicular)",
  summary:["Cleaved/notched nucleus (buttock cells) ชวน follicular lymphoma ระยะ leukemic","ต้องยืนยันด้วย excisional LN biopsy + flow (CD10+, CD19, CD20, BCL2 / t(14;18))","แยกจาก CLL (chromatin เป็นก้อน, nucleus กลม, CD5+ CD23+)"],
  parts:S(
   B("69.1 Describe the abnormal cells.",2,{
     ans:"Small-to-medium lymphoid cells with scant cytoplasm and <b>deeply notched/cleaved ('buttock') nuclei</b> — <b>abnormal lymphocytes (lymphoma cells)</b>",
     pts:[P("Cleaved / notched nuclei","cleav","notch","buttock","cleft"),P("Abnormal lymphocytes / lymphoma cells","lymphoma","abnormal lymph")]}),
   B("69.2 What is the most likely diagnosis?",2,{
     ans:"<b>Non-Hodgkin lymphoma in leukemic phase</b> — most likely <b>follicular lymphoma</b> (ddx mantle cell lymphoma)",
     pts:[P("Lymphoma in leukemic phase","lymphoma","leukemic"),P("Follicular lymphoma (ddx mantle cell)","follicular","mantle")]}),
   B("69.3 Which investigations confirm and stage it?",3,{
     ans:"<b>Excisional lymph node biopsy</b> with immunohistochemistry · <b>peripheral blood flow cytometry</b> (CD19, CD20, <b>CD10+</b>, CD5−, light-chain restriction; mantle: CD5+, cyclin D1/t(11;14)) · <b>t(14;18) BCL2</b> by FISH · <b>PET-CT</b> and bone marrow biopsy for staging",
     pts:[P("Excisional LN biopsy","biops","excision"),P("Flow cytometry (CD10 / light chain)","flow","cd10","cd20","light chain"),P("t(14;18)/BCL2 or cyclin D1; PET-CT / BM staging","14;18","bcl2","cyclin","pet","bone marrow")]})
  )}),

U({r:4,id:"bs070",num:"70",pg:36,title:"Massive spleen and a very high lymphocyte count — identify the cells",img:"ubs_c_prolymph",
  stem:`A 74-year-old man has a spleen palpable to the umbilicus and B symptoms, with little lymphadenopathy. WBC 186,000/µL; most cells look like those shown.`,
  interp:"ระบุ prolymphocyte (nucleolus เดี่ยวเด่น) และความหมาย",
  summary:["Prolymphocyte: ใหญ่กว่า lymphocyte (12–14 µm) chromatin ค่อนข้างหยาบ มี nucleolus ใหญ่เดี่ยวกลางเซลล์","WHO 2022 ยกเลิก B-PLL เป็นโรคแยก → CLL ที่มี prolymphocyte > 15% (prolymphocytic progression), mantle cell lymphoma, splenic B-cell lymphoma with prominent nucleoli","T-PLL: aggressive, TCL1"],
  parts:S(
   B("70.1 Describe the cells.",2,{
     ans:"Medium–large lymphoid cells (~2× a small lymphocyte) with moderately condensed chromatin and <b>a single large, prominent central nucleolus</b>, moderate pale-blue cytoplasm — <b>prolymphocytes</b>",
     pts:[P("Prolymphocytes","prolymphocyt"),P("Single prominent nucleolus","nucleol")]}),
   B("70.2 What is your differential diagnosis?",3,{
     ans:"<b>Prolymphocytic leukemia</b> (B or T) — under WHO 2022, B-cell cases are reclassified as <b>CLL with prolymphocytic progression</b>, <b>mantle cell lymphoma</b> (leukemic, cyclin D1+) or <b>splenic B-cell lymphoma/leukemia with prominent nucleoli</b> · <b>T-PLL</b> (TCL1 rearrangement)",
     pts:[G("Differential (any 2)",2,P("Prolymphocytic leukemia","prolymphocytic","\\bpll\\b"),P("CLL with prolymphocytic progression","cll"),P("Mantle cell lymphoma","mantle"),P("Splenic B-cell lymphoma with prominent nucleoli","splenic"),P("T-PLL","t-?pll"))]}),
   B("70.3 Which test is essential next?",1,{
     ans:"<b>Flow cytometry immunophenotyping</b> of blood (± cyclin D1/t(11;14), TCL1 by FISH/IHC)",
     pts:[P("Flow cytometry","flow","immunophenotyp")]})
  )}),

U({r:4,id:"bs071",num:"71",pg:37,title:"Pancytopenia, massive spleen and a 'dry tap' — identify the cells",img:"ubs_c_hairy",
  stem:`A 52-year-old man has fatigue and left upper quadrant discomfort. Spleen 14 cm below the costal margin. Hb 9.0 g/dL, WBC 2,100/µL (monocytes 0%), platelets 72,000/µL. Bone marrow aspiration was a dry tap. Cells like those shown are seen in the blood.`,
  interp:"ระบุ hairy cell + markers + การรักษา",
  summary:["Hairy cell: ใหญ่ ~2× lymphocyte nucleus กลาง/รี cytoplasm ฟ้าเทามีขนยื่นรอบตัว","Pancytopenia + monocytopenia + ม้ามโตมาก + dry tap (reticulin)","Markers: CD11c, CD25, CD103, CD123, annexin A1, TRAP+, BRAF V600E · รักษา cladribine (± rituximab)"],
  parts:S(
   B("71.1 Describe the cells.",2,{
     ans:"Medium–large lymphoid cells with round/oval central nucleus and abundant pale gray-blue cytoplasm with <b>irregular, fine 'hair-like' cytoplasmic projections</b> — <b>hairy cells</b>",
     pts:[P("Hair-like cytoplasmic projections","hair","projection","villous","ขน"),P("Hairy cells","hairy")]}),
   B("71.2 What is the diagnosis? Name three supporting markers.",3,{
     ans:"<b>Hairy cell leukemia</b> · flow: <b>CD11c, CD25, CD103, CD123</b> (+ CD19/CD20) · <b>annexin A1</b> (IHC), TRAP positive, <b>BRAF V600E</b> mutation",
     pts:[P("Hairy cell leukemia","hairy cell","\\bhcl\\b"),G("Markers (any 3)",3,P("CD11c","cd11c"),P("CD25","cd25"),P("CD103","cd103"),P("CD123","cd123"),P("Annexin A1","annexin"),P("TRAP","trap"),P("BRAF V600E","braf"))]}),
   B("71.3 What is the first-line treatment?",2,{
     ans:"Purine analogue — <b>cladribine</b> (or pentostatin) ± <b>rituximab</b> · (BRAF inhibitor vemurafenib for relapsed/refractory)",
     pts:[P("Cladribine / pentostatin","cladribine","pentostatin","2-?cda"),P("± rituximab / BRAF inhibitor","rituximab","vemurafenib","braf")]})
  )}),

U({r:4,id:"bs072",num:"72",pg:38,title:"An unusual cell in a febrile patient's smear — identify it",img:"ubs_c_plasma",
  stem:`A 35-year-old woman with severe dengue (day 6) has a few cells like the large one on the left in her blood smear.`,
  interp:"ระบุ plasma cell และความหมายเมื่อพบใน PB (reactive vs neoplastic)",
  summary:["Plasma cell: nucleus กลมเยื้องศูนย์ < 1/3 เซลล์ chromatin เป็นก้อน (clock-face) cytoplasm น้ำเงินเข้มทึบ perinuclear hof","Reactive plasmacytosis ชั่วคราว: dengue, viral infection, sepsis, serum sickness — จำนวนน้อย polyclonal","จำนวนมาก/ผิดรูป + paraprotein → plasma cell neoplasm (PCL)"],
  parts:S(
   B("72.1 Identify the cell and give three morphological features.",3,{
     ans:"<b>Plasma cell</b> — <b>eccentric round nucleus</b> (&lt; 1/3 of cell) with coarse '<b>clock-face</b>' chromatin, abundant <b>deep-blue opaque cytoplasm</b>, a pale <b>perinuclear hof</b> (Golgi), ± vacuoles",
     pts:[P("Plasma cell","plasma"),G("Features (any 2)",2,P("Eccentric nucleus","eccentric"),P("Clock-face chromatin","clock","cartwheel","clump"),P("Deep blue cytoplasm","blue","basophil"),P("Perinuclear hof","hof","halo","perinuclear","golgi"))]}),
   B("72.2 Is this finding worrying in this patient? Explain.",2,{
     ans:"Usually <b>not</b> — a few circulating plasma cells/plasmacytoid lymphocytes are a <b>reactive</b> (polyclonal) response in <b>dengue</b> and other viral infections, sepsis, serum sickness · worry if numerous, atypical, persistent, or with paraprotein/CRAB → myeloma/plasma cell leukemia",
     pts:[P("Reactive plasmacytosis in dengue/viral infection","reactive","dengue","viral","polyclonal"),P("Concerning if many/atypical/persistent with paraprotein","myeloma","paraprotein","persist","\\bpcl\\b")]})
  )}),

U({r:4,id:"bs073",num:"73",pg:39,title:"Kidney failure and immature-looking plasma cells — identify the cells",img:"ubs_c_myeloma",
  stem:`A 61-year-old man has acute kidney injury (creatinine 5.8 mg/dL) and serum free κ light chain 4,800 mg/L (κ/λ ratio 320). Cells like those shown are found in his blood.`,
  interp:"ระบุ myeloma cell ที่ผิดปกติ + cast nephropathy + การรักษาไต",
  summary:["Myeloma cell: ใหญ่กว่า plasma cell ปกติ, รูปร่างไม่สม่ำเสมอ, chromatin ละเอียดกว่า, อาจมี nucleolus, cytoplasm มาก มีติ่ง","FLC ratio ≥ 100 = myeloma-defining (SLiM)","Cast nephropathy: ให้ bortezomib-based regimen เร็ว + น้ำ + หลีกเลี่ยง nephrotoxin (contrast, NSAID)"],
  parts:S(
   B("73.1 Identify the cells and how they differ from mature plasma cells.",3,{
     ans:"<b>Myeloma (neoplastic plasma) cells</b> — larger, irregular shape with cytoplasmic tails/pseudopods, abundant blue cytoplasm, eccentric nucleus with <b>finer chromatin and visible nucleoli</b> (plasmablastic features), occasional binucleation",
     pts:[P("Myeloma / abnormal plasma cells","myeloma","plasma"),P("Larger, irregular, fine chromatin, nucleoli","nucleol","irregular","larger","fine")]}),
   B("73.2 What is the likely cause of his kidney injury?",2,{
     ans:"<b>Light-chain cast nephropathy (myeloma kidney)</b> — free light chains precipitate with Tamm–Horsfall protein in distal tubules (also consider hypercalcemia, dehydration, NSAIDs, amyloid)",
     pts:[P("Cast nephropathy / myeloma kidney","cast","myeloma kidney","light chain")]}),
   B("73.3 Outline urgent management of the kidney problem.",3,{
     ans:"Start <b>bortezomib-based chemotherapy with high-dose dexamethasone</b> promptly to cut light-chain production · <b>IV hydration</b> (urine &gt; 3 L/day if possible), treat hypercalcemia · <b>avoid nephrotoxins</b> (NSAIDs, IV contrast, aminoglycosides) · dialysis if needed",
     pts:[P("Bortezomib + dexamethasone promptly","bortezomib","dexamethasone","chemo"),P("Hydration","hydrat","fluid","น้ำ"),P("Avoid nephrotoxins (NSAID / contrast)","nsaid","contrast","nephrotox")]})
  )}),

U({r:4,id:"bs074",num:"74",pg:40,title:"Mild lifelong bleeding with large pale platelets — identify the platelets",img:"ubs_c_gray",
  stem:`A 25-year-old woman has lifelong easy bruising and heavy periods. Platelets 72,000/µL; the spleen is palpable. Platelets like those shown dominate her smear.`,
  interp:"ระบุ gray (agranular) platelets → gray platelet syndrome",
  summary:["Gray platelet: ใหญ่ ซีดเทา ขาด α-granule","Gray platelet syndrome: NBEAL2 (AR), macrothrombocytopenia, เลือดออกเล็กน้อย-ปานกลาง, myelofibrosis/ม้ามโต","แยก APDE (เด็ก, eosinophilia, plt count ปกติ) และ MDS/MPN"],
  parts:S(
   B("74.1 Describe the platelets.",2,{
     ans:"<b>Large, pale gray-blue platelets lacking granules</b> (agranular 'gray platelets') with reduced number",
     pts:[P("Large platelets","large","giant","enlarg"),P("Pale gray / agranular","gray","grey","pale","agranular","hypogranular")]}),
   B("74.2 What is the most likely diagnosis and what is missing in these platelets?",3,{
     ans:"<b>Gray platelet syndrome</b> (NBEAL2 mutation) — <b>absent α-granules</b> and their proteins (fibrinogen, vWF, PF4, growth factors) → macrothrombocytopenia, bleeding, marrow fibrosis/splenomegaly",
     pts:[P("Gray platelet syndrome","gray platelet","grey platelet","gps"),P("Absent α-granules","alpha","α","granul"),P("NBEAL2 / myelofibrosis","nbeal2","fibros")]})
  )}),

U({r:4,id:"bs075",num:"75",pg:41,title:"Very low platelet count in a healthy man — what is the smear showing?",img:"ubs_c_pltagg",
  stem:`A 40-year-old man has a pre-employment CBC from an EDTA tube: platelets 32,000/µL. He has no bleeding, no petechiae and takes no drugs. Two fields of the same smear are shown.`,
  interp:"platelet clumping ใน EDTA → pseudothrombocytopenia",
  summary:["EDTA-dependent antibody (anti-GPIIb/IIIa) ทำให้เกล็ดจับกลุ่ม → analyzer นับต่ำเท็จ","ตรวจซ้ำด้วย citrate tube (คูณ 1.1) หรือ heparin/fingerprick smear","ไม่ต้องรักษา — สำคัญคือไม่ให้เกล็ดเลือด/steroid โดยไม่จำเป็น"],
  parts:S(
   B("75.1 Describe the finding.",2,{
     ans:"Large <b>platelet clumps (aggregates)</b>, typically at the feathered edge — platelets are actually plentiful",
     pts:[P("Platelet clumps / aggregates","clump","aggregat")]}),
   B("75.2 What is the diagnosis and its mechanism?",2,{
     ans:"<b>EDTA-dependent pseudothrombocytopenia</b> — naturally occurring antibodies react with platelet GPIIb/IIIa exposed by EDTA → in vitro clumping → falsely low automated count",
     pts:[P("Pseudothrombocytopenia","pseudothrombocytopen","spurious","false"),P("EDTA-dependent antibody (GPIIb/IIIa)","edta","iib","antibod")]}),
   B("75.3 How do you confirm it and what treatment is needed?",3,{
     ans:"Repeat the count in a <b>sodium citrate tube</b> (correct ×1.1 for dilution) or heparin tube / fingerprick smear — the count is normal · <b>no treatment</b>; note it in the record to avoid unnecessary platelet transfusion, steroids or marrow tests",
     pts:[P("Citrate (or heparin) tube recount / fingerprick","citrate","heparin","finger"),P("No treatment needed","no treat","ไม่ต้องรักษา","none","reassur")]})
  )})
);
})();

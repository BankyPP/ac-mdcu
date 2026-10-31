SUMM.push({tag:"Hematology", title:"Hematology",
  intro:"<ul><li>Hematology ใน Med Y4 MCQ (MDCU78 RoB / RoD) เน้น <b>anemia แบบแยกชนิด</b> (macrocytic: B12 vs folate; hemolytic: hereditary spherocytosis vs AIHA; hemoglobinopathy ของไทย: HbE / β-thalassemia) และ <b>ผลข้างเคียงทางเลือดจากยา</b> (antithyroid → agranulocytosis)</li><li>บริบทไทย: thalassemia / HbE เป็นโจทย์คลาสสิก — คำนวณ risk ของลูกจาก genotype พ่อแม่, คู่เสี่ยงในไทย</li><li>กับดัก: ใช้สูตร carrier × carrier = 25% โดยไม่ดู homozygous, เห็น spherocyte แล้วตอบ HS ทันทีโดยไม่ดู DAT, ตอบ B12 ทั้งที่ไม่มี neuro</li></ul>",
  groups:[
    {title:"Hemoglobinopathy และ hemolytic anemia", sections:[
      {id:"hbe-beta-thal-risk", title:"HbE / β-thalassemia — คำนวณความเสี่ยงของลูก",
       trend:"ถามคำนวณ risk จาก genotype ของพ่อแม่ที่คนหนึ่งเป็น HbE homozygous",
       asked:["มารดาเป็น β-thalassemia trait สามีเป็น HbE homozygous (HbE / E) → ถามความเสี่ยงที่ลูกเป็น HbE / β-thalassemia disease"],
       pattern:["พ่อ HbE / E ส่ง βE ทุกครั้ง; แม่ β-thal trait ส่ง β-thal ครึ่งหนึ่ง ปกติครึ่งหนึ่ง → ลูก <b>βE / β-thal 50%</b> (HbE / β-thalassemia disease) + βE / β ปกติ 50% (HbE trait)","HbE / β⁰-thal เป็นโรค thalassemia รุนแรงที่พบบ่อยที่สุดในไทย (ความรุนแรงกว้าง mild-severe; transfusion-dependent ได้)","คู่เสี่ยงในไทย: α⁰ × α⁰ (Hb Bart's hydrops), β-thal × β-thal (β-thal major), βE × β-thal (HbE / β-thal)","HbE homozygous ไม่ใช่โรครุนแรง ซีดเล็กน้อย MCV เล็ก; Screening: MCV / MCH + DCIP → Hb typing → DNA analysis"],
       pearls:["ใช้สูตร carrier × carrier = 25% — เมื่อพ่อเป็น homozygous ต้องเขียน genotype แล้วไล่ Punnett","HbE trait × β-thal trait ถึงจะได้ 25%"],
       members:["MDCU78|RoB|18"]},
      {id:"hs-vs-aiha", title:"Hereditary spherocytosis vs autoimmune hemolytic anemia (DAT)",
       trend:"ถามแยก spherocytic hemolysis ด้วย Coombs test + family history",
       asked:["ชาย 20 ปี ซีดเล็กน้อย + ดีซ่านซ้ำ ๆ ตั้งแต่เด็ก, พ่อตัดม้าม, ม้ามโต, Hb 10 MCHC 37 retic 8%, smear spherocytes, DAT ลบ → ถาม diagnosis"],
       pattern:["<b>Spherocyte</b> พบทั้ง HS และ warm AIHA → แยกด้วย <b>DAT (Coombs)</b>: AIHA บวก, HS ลบ","HS: ความผิดปกติของ membrane (ankyrin, spectrin, band 3) ส่วนใหญ่ autosomal dominant; MCHC สูง (>36), ม้ามโต, นิ่วถุงน้ำดี (pigment stone), aplastic crisis จาก parvovirus B19","ยืนยัน: EMA binding test (flow cytometry), osmotic fragility","รักษา: folic acid; splenectomy ในรายรุนแรง (หลังอายุ 6 ปี + วัคซีนก่อนตัดม้าม)","Spherocyte อื่น: ABO incompatibility ในทารก, burn, clostridial sepsis; AIHA warm: steroid → rituximab / splenectomy; cold (IgM): หลีกเลี่ยงความเย็น, rituximab"],
       pearls:["เห็น spherocyte แล้วตอบ HS ทันทีโดยไม่ดู DAT","G6PD = episodic hemolysis หลัง oxidant + bite cell / Heinz body; PNH = hemoglobinuria, DAT ลบ ต้องใช้ flow cytometry"],
       members:["MDCU78|RoD|3"]}
    ]},
    {title:"Macrocytic anemia (megaloblastic)", sections:[
      {id:"folate-vs-b12", title:"Macrocytic anemia — folate deficiency vs vitamin B12 deficiency",
       trend:"ถามแยก folate จาก B12 ด้วยอาการทางประสาท",
       asked:["หญิง 45 ปี อ่อนเพลีย 2 เดือน ไม่ดื่มสุรา ซีด + glossitis ไม่มี neuro deficit MCV 120 fL → ถาม diagnosis"],
       pattern:["MCV >115 แทบทั้งหมดเป็น <b>megaloblastic</b> (B12 หรือ folate); ทั้งคู่มี glossitis","<b>Folate ไม่ทำให้มี neuro deficit</b> ส่วน B12 มี neuropathy / SCD → โจทย์ที่ไม่มี neuro = folate","สาเหตุ folate: กินน้อย (ผักใบเขียว), ตั้งครรภ์, hemolysis, ยา (methotrexate, phenytoin, trimethoprim), malabsorption","Methylmalonic acid ↑ เฉพาะ B12; homocysteine ↑ ทั้งคู่; hypersegmented neutrophil ≥5 lobes","Non-megaloblastic macrocytosis: alcohol, liver disease, hypothyroidism, reticulocytosis, MDS"],
       pearls:["ตรวจ B12 + folate ก่อนให้ยา — ให้ folate ในคนขาด B12 ทำให้ neuro แย่ลง","ตอบ B12 เพราะพบบ่อยในผู้ใหญ่ — โจทย์ใบ้ด้วยการไม่มีอาการทางประสาท"],
       members:["MDCU78|RoB|21"]},
      {id:"b12-neuro-heme", title:"Vitamin B12 deficiency — subacute combined degeneration",
       trend:"ถามวินิจฉัยจาก dorsal column sign + areflexia ที่ motor ปกติ",
       asked:["ชาและเดินเซในที่มืดหลายเดือน proprioception + vibration หาย DTR หาย Romberg + motor ปกติ → ถาม diagnosis"],
       pattern:["<b>B12 deficiency</b>: subacute combined degeneration (dorsal column + lateral corticospinal) + peripheral neuropathy","สาเหตุ: pernicious anemia, metformin, PPI, vegan, gastrectomy, nitrous oxide; ตรวจ B12, MMA, homocysteine","รักษา B12 IM ตามตาราง (ให้ก่อน folate เสมอ); anemia อาจหรือไม่มีก็ได้"],
       pearls:["Neuro เกิดโดยไม่มี anemia ได้ — อย่าตัดทิ้งเพราะ CBC ปกติ"],
       members:["MDCU78|RoB|13"]}
    ]},
    {title:"ผลข้างเคียงทางเลือดจากยา", sections:[
      {id:"antithyroid-agranulocytosis", title:"Antithyroid drug-induced agranulocytosis",
       trend:"ถามสาเหตุ neutropenia + ไข้เจ็บคอในผู้ป่วยที่เพิ่งเริ่มยา Graves",
       asked:["หญิง 35 ปี Graves กินยาต้านไทรอยด์ 3 สัปดาห์ ไข้สูงเจ็บคอ WBC 900 neutropenia → ถามสาเหตุ"],
       pattern:["<b>Thionamide (methimazole / PTU)-induced agranulocytosis</b> ~0.2-0.5% ส่วนใหญ่ใน 3 เดือนแรก (methimazole dose-related)","จัดการ: <b>หยุดยาทันที</b>, CBC, เพาะเชื้อ, broad-spectrum antibiotic (febrile neutropenia) ± G-CSF","ห้ามเปลี่ยนไปใช้อีกตัว (cross-reactivity) → รักษา Graves ด้วย RAI หรือผ่าตัด (เตรียมด้วย β-blocker ± iodine)","สอนผู้ป่วยทุกคน: ไข้ เจ็บคอ แผลในปาก ให้หยุดยาและมาตรวจ CBC","ผลข้างเคียงอื่น: PTU = hepatotoxicity รุนแรง, ANCA vasculitis; MMI = cholestasis, teratogen (aplasia cutis, choanal atresia); PTU เลือกใน 1st trimester และ thyroid storm"],
       pearls:["มองข้ามความเชื่อมโยงระหว่างยาที่เพิ่งเริ่มกับ neutropenia","Thyrotoxic crisis ให้ไข้สูง + tachycardia + สับสน แต่ WBC ไม่ต่ำ"],
       members:["MDCU78|RoB|25"]}
    ]}
  ]});

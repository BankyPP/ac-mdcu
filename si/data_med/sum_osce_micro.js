SUMM.push({tag:"micro", title:"Microscope",
  intro:"<ul><li>สถานี Microscope มากที่สุดของ rotation นี้ (หลายสถานี) — เป็นภาพ <b>Gram stain, blood smear, urine sediment, KOH</b> แล้วถามเรียง <b>บรรยาย → วินิจฉัย → investigation หรือ treatment</b></li><li>หลักการบรรยาย: <b>Gram stain</b> ต้องบอกทั้ง <i>เซลล์</i> (PMN, epithelial) และ <i>เชื้อ</i> (Gram +/-, รูปร่าง, การเรียงตัว) · <b>blood smear</b> ต้องไล่ครบ RBC / WBC / platelet · <b>urine sediment</b> บอก cast และ RBC morphology</li><li>Stem บอกบริบททางคลินิกเสมอ (ยาชุด, ผ่าตัดข้อ, ไข้, ซีด + ท้องผูก, เจ็บคอนำมาก่อน) — ใช้ stem ผูกกับ dx</li></ul>",
  groups:[
    {title:"Gram stain", sections:[
      {id:"gs-nocardia", title:"Gram stain: branching beaded GPB = Nocardia (pulmonary nocardiosis)",
       trend:"ผู้ป่วยกิน ยาชุด (steroid) มี cushingoid + Gram stain เสมหะ",
       asked:["Cushingoid จากยาชุด + Gram stain เสมหะ → ให้บรรยาย Gram stain","ถาม diagnosis","ถาม further investigation (ย้อมพิเศษ, เพาะเชื้อ, หา dissemination)"],
       pattern:["<b>บรรยาย:</b> <b>Gram-positive, beaded, branching filamentous rods</b>","<b>Dx:</b> pulmonary <b>nocardiosis</b> ในผู้ป่วย immunocompromised จาก steroid (cell-mediated immunity บกพร่อง: steroid, HIV, transplant, malignancy)","<b>Investigation:</b> <b>modified acid-fast (Kinyoun / modified AFB) stain</b> → Nocardia เป็น <b>weakly acid-fast</b> · culture (แจ้ง lab ให้เก็บนาน 2–3 สัปดาห์) · CXR / CT chest · <b>CT / MRI brain</b> หา brain abscess (dissemination) · 8 AM cortisol (adrenal suppression จากยาชุด)","<b>Treatment:</b> <b>TMP-SMX</b> (ขนาดสูง TMP 5–15 mg/kg/day) ± imipenem / amikacin ในรายรุนแรงหรือมี CNS involvement · นาน 6–12 เดือน (CNS นานกว่า) · ระวัง adrenal crisis ถ้าหยุดยาชุดทันที","<b>Ddx branching GPB:</b> Actinomyces (anaerobe, ไม่ acid-fast, sulfur granule, มักที่หน้า / คอ / pelvic), Mycobacterium และ Streptomyces"],
       pearls:["Nocardia = weakly acid-fast; Actinomyces = ไม่ acid-fast — จุดที่ใช้แยก","ยาชุดหรือยาลูกกลอน มักมี steroid ผสม — เห็นคำนี้ให้คิด Cushing + ภูมิคุ้มกันต่ำ"],
       members:["SI132|Ro403–404|4#1","SI132|Ro403–404|4#2","SI132|Ro403–404|4#3"]},
      {id:"gs-pji", title:"Gram stain ของ synovial fluid หลังผ่าตัดข้อ: GPC in clusters (S. aureus, CoNS)",
       trend:"ไข้ + ข้อบวมเจ็บหลังผ่าตัดข้อ → บรรยาย, เชื้อ, ยา",
       asked:["ไข้ ข้อบวมเจ็บหลัง joint surgery + Gram stain ของ synovial fluid → ให้บรรยาย","ถาม likely organisms","ถาม treatment"],
       pattern:["<b>บรรยาย (ต้องเขียน PMN ด้วย):</b> <b>numerous PMNs with Gram-positive cocci in clusters</b>","<b>เชื้อ:</b> <i>Staphylococcus aureus</i> (รวม MRSA) และ coagulase-negative staphylococci (<i>S. epidermidis</i>) — เชื้อจากผิวหนังที่เข้าระหว่างผ่าตัด","<b>Treatment:</b> empirical <b>vancomycin</b> (cover MRSA / CoNS ที่มัก methicillin-resistant) ± cefazolin → ปรับตามผลเพาะเชื้อ + <b>surgical debridement / washout</b> (prosthetic joint infection)","<b>ข้อเทียม:</b> biofilm → มักต้องผ่าตัดร่วม — DAIR (debridement, antibiotics, implant retention) เมื่อระยะสั้นและ implant ยังแน่น; revision / two-stage exchange เมื่อเรื้อรังหรือ implant หลวม","<b>ส่งตรวจ:</b> synovial fluid cell count + differential (เกณฑ์ ICM 2018: acute > 10,000 cells / µL และ PMN > 90%; chronic > 3,000 และ PMN > 80%), culture (ก่อนให้ยา), hemoculture; ข้อธรรมชาติ septic arthritis มัก WBC > 50,000 PMN เด่น"],
       pearls:["ถ้าเขียนบรรยาย Gram stain แล้วไม่พูดถึง PMN จะเสียคะแนน","อย่าเลือก cefazolin อย่างเดียวถ้าโจทย์เป็นหลังผ่าตัด — ต้องคลุม MRSA"],
       members:["SI132|Ro403–404|8#1","SI132|Ro403–404|8#2","SI132|Ro403–404|8#3"]}
    ]},
    {title:"Peripheral blood smear", sections:[
      {id:"pbs-dengue", title:"Blood smear: atypical lymphocyte + leukopenia + thrombocytopenia = dengue",
       trend:"หญิงไข้ → blood smear แล้วถาม dx",
       asked:["หญิง 29 ปี ไข้ → ให้บรรยาย blood smear (atypical lymphocyte, WBC ต่ำ, platelet ต่ำ)","ถาม diagnosis (dengue / DHF)"],
       pattern:["<b>บรรยายให้ครบ 3 series:</b> RBC (normochromic normocytic) · WBC (<b>leukopenia</b> + <b>atypical / reactive lymphocyte</b> — เซลล์ใหญ่ cytoplasm มาก สีฟ้า ขอบเว้าตาม RBC รอบ ๆ) · <b>platelet ต่ำ</b> (ข้อสอบเน้นให้พูดถึง)","<b>Dx:</b> dengue infection — ถ้า stem/ผลบอกว่ามี plasma leakage จึงตอบเป็น <b>dengue hemorrhagic fever (DHF)</b>; ข้อสอบเก็บคำตอบ DHF","<b>DHF (WHO 1997, ใช้ในแนวทางกรมควบคุมโรคไทย):</b> ไข้สูงเฉียบพลัน 2–7 วัน + เลือดออกง่าย (tourniquet test บวก) + platelet ≤ 100,000 + <b>plasma leakage</b> (Hct เพิ่ม ≥ 20%, pleural effusion, ascites, albumin ต่ำ) · critical phase ช่วงไข้ลง (วันที่ 3–7)","<b>ยืนยัน:</b> NS1 Ag (ไข้วันที่ 1–5), dengue IgM / IgG, tourniquet test, ติดตาม Hct + platelet","<b>Ddx atypical lymphocyte:</b> EBV, CMV, HIV seroconversion, scrub typhus, leptospirosis; ในไทยยังต้องนึก malaria"],
       pearls:["DHF ต้องมีหลักฐาน plasma leakage — smear อย่างเดียวบอกได้แค่ dengue infection","ผู้ป่วยไข้ + platelet ต่ำ + leukopenia ในไทย: dengue มาก่อน"],
       members:["SI132|Ro403–404|11#1","SI132|Ro403–404|11#2"]},
      {id:"pbs-rouleaux-mm", title:"Blood smear: rouleaux formation = multiple myeloma",
       trend:"ซีด + ท้องผูกอายุ 40 → rouleaux → myeloma → ส่งตรวจอะไร",
       asked:["หญิง 40 ปี ซีด ท้องผูก → ให้บรรยาย blood smear (rouleaux)","ถาม diagnosis","ถาม investigation เพื่อยืนยัน"],
       pattern:["<b>บรรยาย:</b> <b>rouleaux formation</b> (RBC เรียงซ้อนเหมือนตั้งเหรียญ) จาก paraproteinemia → ESR สูง","<b>Dx:</b> <b>multiple myeloma</b> — ซีด = anemia (marrow infiltration), ท้องผูก = <b>hypercalcemia</b>","<b>Investigation:</b> <b>bone marrow aspiration / biopsy</b> (clonal plasma cells ≥ 10%) · serum protein electrophoresis + immunofixation, UPEP, <b>serum free light chains</b> · CBC, Ca, Cr · skeletal survey หรือ low-dose whole-body CT","<b>เกณฑ์ IMWG:</b> clonal BM plasma cells ≥ 10% (หรือ plasmacytoma จากชิ้นเนื้อ) + ≥ 1 myeloma-defining event: <b>CRAB</b> (hyperCalcemia, Renal insufficiency, Anemia, Bone lesions) หรือ SLiM (plasma cell ≥ 60%, FLC ratio ≥ 100, MRI focal lesion > 1)","ที่ต้องพูดต่อ: ตรวจ β2-microglobulin / albumin (ISS staging), FISH cytogenetics"],
       pearls:["Rouleaux ไม่จำเพาะ myeloma (พบได้ในภาวะอักเสบ / fibrinogen สูง) — จึงต้องผูกกับ stem (ซีด + hypercalcemia)","ตอบ investigation ให้มีทั้ง 'พิสูจน์ clonal plasma cell' และ 'หา end-organ damage'"],
       members:["SI132|Ro403–404|12#1","SI132|Ro403–404|12#2","SI132|Ro403–404|12#3"]}
    ]},
    {title:"Urine sediment", sections:[
      {id:"urine-psgn", title:"Urine sediment: RBC casts + dysmorphic RBC = post-streptococcal GN",
       trend:"เจ็บคอ 2 สัปดาห์ก่อน ตอนนี้หน้าบวม ปัสสาวะสีเข้ม",
       asked:["ชายอายุ 19 ปี ไข้เจ็บคอ 2 สัปดาห์ก่อน หน้าบวม ปัสสาวะสีเข้ม → ให้บรรยาย urine sediment","ถาม diagnosis","ถาม investigation (C3, ASO) และ treatment"],
       pattern:["<b>บรรยาย:</b> <b>RBC casts</b> และ <b>dysmorphic RBCs</b> (glomerular hematuria) — ตอบเป็น nephritic sediment","<b>Dx:</b> <b>post-streptococcal glomerulonephritis (PSGN)</b> — latent period หลัง pharyngitis 1–3 สัปดาห์ (หลัง skin infection 3–6 สัปดาห์)","<b>Investigation:</b> <b>low C3</b> (กลับปกติใน 6–8 สัปดาห์; ถ้าต่ำนานกว่านี้ คิด MPGN / lupus) · ASO titer และ anti-DNase B · BUN / Cr, UA protein","<b>Treatment:</b> supportive — จำกัดเกลือ / น้ำ, loop diuretic, ยาลดความดัน; ให้ penicillin ถ้ายังมีการติดเชื้อ; การพยากรณ์โรคดีในเด็ก","<b>Ddx ที่แยกด้วย timing:</b> IgA nephropathy — hematuria เกิดพร้อมหรือ 1–3 วันหลัง URI (synpharyngitic) และ C3 ปกติ"],
       pearls:["Latent period 1–3 สัปดาห์ คือจุดแยก PSGN จาก IgA nephropathy","C3 ต่ำ + nephritic syndrome หลังติดเชื้อ strep = PSGN"],
       members:["SI132|Ro403–404|20#1","SI132|Ro403–404|20#2","SI132|Ro403–404|20#3"]}
    ]},
    {title:"KOH preparation", sections:[
      {id:"koh-dermatophyte", title:"KOH: branching septate hyphae with arthroconidia = dermatophyte",
       trend:"ผื่น annular ขอบ scale ถูก scraping ขอบ → ย้อม KOH",
       asked:["ผื่นถูกขูดที่ขอบรอยโรคทำ KOH → ให้บรรยาย KOH"],
       pattern:["<b>บรรยาย:</b> <b>branching septate hyphae</b> (มี <b>arthroconidia</b>) → <b>dermatophyte</b> ตามด้วยวินิจฉัย tinea corporis (ดูรายละเอียดที่หน้า Skin lesion)","<b>เทคนิค:</b> ขูดที่ขอบ active (scale) ลงสไลด์ หยด KOH 10–20% แล้วอุ่น เห็นเส้นใยใส ๆ ตัดกับเซลล์ผิวหนัง","<b>แยกจากเชื้ออื่น:</b> Candida = pseudohyphae + budding yeast · Tinea versicolor (Malassezia) = short hyphae + round spores ('spaghetti and meatballs')"],
       members:["SI132|Ro403–404|6#2"]}
    ]}
  ]});

SUMM.push({tag:"Surgical infection", title:"Surgical infection",
  intro:"<ul><li>MDCU79 RoC 9 ข้อย่อย ทั้งหมดเป็นแท็กร่วมกับวอร์ดอื่น: <b>Uro</b> (obstructed infected kidney 2 เคส, UTI ในครรภ์ 2 เคส, gonorrhea), <b>Neuro</b> (brain abscess, meningococcal meningitis), <b>Colorectal</b> (diverticular abscess) และ <b>CVT</b> (cavitary TB)</li><li>ธีมที่ร้อยทุกเคส: <b>source control</b> — หนองหรือปัสสาวะติดเชื้อที่ถูกกักไว้ต้องระบาย (DJ stent / PCN, stereotactic aspiration, percutaneous drainage) ATB อย่างเดียวไม่พอ</li><li>อีกกลุ่มคือ regimen / การวินิจฉัยเชื้อจาก gram stain (GN diplococci = gonococcus / meningococcus) และการติดตามหลังรักษา (test of cure ในครรภ์)</li></ul>",
  groups:[
    {title:"Source control: ระบายก่อน", sections:[
      {id:"obstructed-infected-kidney", title:"Obstructed infected kidney → urgent DJ stent / PCN",
       trend:"ออก 2 เคสในชุดเดียว",
       asked:["ไข้ + CVA tenderness + pyuria + นิ่ว proximal ureter 7 mm + hydronephrosis → นอกจาก IV ATB ทำอะไร","ไข้ + nitrite + Cr 2.1 + นิ่ว 8 mm → urgent decompression"],
       pattern:["<b>อุดตัน + ติดเชื้อ = urologic emergency</b> → urgent decompression (retrograde DJ stent = PCN, EAU) + IV ATB + urine / blood culture","Definitive stone treatment หลังติดเชื้อหาย","ข้อบ่งชี้ด่วนอื่น: AKI, solitary kidney, bilateral obstruction, ปวดคุมไม่ได้"],
       pearls:["อย่าเลือก ESWL / URS ทันที หรือ ATB อย่างเดียว","URO 5 stem แต่งเติมไข้ให้ — ถ้าไม่มีติดเชื้อ คำตอบจะเป็น MET / ESWL"],
       members:["MDCU79|RoC|URO 5","MDCU79|RoC|URO 8"]},
      {id:"brain-abscess", title:"Brain abscess 4 cm → stereotactic aspiration + IV ATB",
       asked:["ไข้ ปวดหัว อ่อนแรงครึ่งซีก CT ring-enhancing ผนังบาง 4 cm → management"],
       pattern:["<b>ขนาด >2.5 cm</b> / mass effect / เข้าถึงได้ → aspiration หรือ excision + IV ATB (ESCMID 2024)","Empirical ceftriaxone / cefotaxime + metronidazole (+ vancomycin หลังผ่าตัด / trauma) 6–8 สัปดาห์","ก้อนเล็ก <2.5 cm, cerebritis, หลายก้อน, ลึก → ยาอย่างเดียว + imaging ติดตาม"],
       pearls:["ตัวลวง IV ATB alone — ขนาดและ mass effect คือข้อบ่งชี้ระบาย"],
       members:["MDCU79|RoC|neuro 1"]},
      {id:"diverticular-abscess", title:"Diverticulitis + pelvic abscess 7 cm (Hinchey II) → percutaneous drainage + IV ATB",
       asked:["ผู้ป่วยสถานพยาบาลระยะยาว sigmoid diverticulitis + pelvic abscess 7 cm stable ไม่มี generalized peritonitis → management (ตัวลวง emergency sigmoidectomy, laparotomy lavage, IV ATB อย่างเดียว)"],
       pattern:["Abscess <3 cm → IV ATB; <b>≥3 cm (ASCRS 2020) และเข้าถึงได้ → CT-guided percutaneous drainage + IV ATB</b>","Generalized peritonitis (Hinchey III–IV) / septic shock / non-op ล้มเหลว → emergency sigmoidectomy (Hartmann หรือ primary anastomosis ± ileostomy)","หลังหาย: colonoscopy ~6–8 สัปดาห์ + พิจารณา elective sigmoidectomy"],
       pearls:["ขนาด abscess ไม่ใช่ข้อบ่งชี้ผ่าตัดฉุกเฉิน — peritonitis คือตัวตัดสิน","stem เติม stable และไม่มี peritonitis ให้"],
       members:["MDCU79|RoC|Colo 4"]}
    ]},
    {title:"UTI และ STI", sections:[
      {id:"uti-pregnancy", title:"UTI ในหญิงตั้งครรภ์หลังรักษาครบ → repeat urine culture",
       trend:"ออกซ้ำ 2 เคสเนื้อหาเดียวกัน",
       asked:["ครรภ์ 18–20 สัปดาห์ cystitis E. coli รักษา nitrofurantoin ครบ อาการหาย → next step"],
       pattern:["<b>Test of cure</b>: urine culture ซ้ำ ~1–2 สัปดาห์หลังจบยา แล้ว screen เป็นระยะจนคลอด","ASB ในครรภ์ screen และรักษาทุกราย (IDSA 2019)","ยาปลอดภัย: nitrofurantoin, cephalexin, amoxicillin-clavulanate, fosfomycin; เลี่ยง TMP-SMX ไตรมาสแรก / ใกล้คลอด, fluoroquinolone, tetracycline","เป็นซ้ำ ≥2 ครั้ง / หลัง pyelonephritis → suppressive therapy ก่อนนอนจนคลอด"],
       pearls:["observe and reassure คือตัวลวงจากหลักของหญิงไม่ตั้งครรภ์"],
       members:["MDCU79|RoC|URO 2","MDCU79|RoC|URO 12"]},
      {id:"gonorrhea", title:"Gonococcal urethritis → ceftriaxone 500 mg IM + doxycycline",
       asked:["หนองท่อปัสสาวะ GN intracellular diplococci ตรวจ chlamydia ไม่ได้ → treatment"],
       pattern:["CDC 2021: <b>ceftriaxone 500 mg IM</b> ครั้งเดียว + <b>doxycycline 100 mg bid 7 วัน</b> ถ้ายังไม่ exclude chlamydia","รักษาคู่นอน, ตรวจ HIV / syphilis, retest 3 เดือน"],
       pearls:["azithromycin ไม่ใช่ routine แล้ว"],
       members:["MDCU79|RoC|URO 11"]}
    ]},
    {title:"CNS และปอด", sections:[
      {id:"meningococcal", title:"Meningococcal meningitis (GN diplococci + purpura)",
       asked:["วัยรุ่นหอพัก ไข้ คอแข็ง purpuric rash CSF bacterial GN diplococci → Dx"],
       pattern:["GN diplococci = <b>N. meningitidis</b>; purpura จาก endotoxin / DIC → Waterhouse-Friderichsen","Empirical: ceftriaxone + vancomycin (+ ampicillin ถ้า >50 ปี) + dexamethasone","Contact prophylaxis: ciprofloxacin 500 mg ครั้งเดียว / rifampicin / ceftriaxone IM","กลุ่มเสี่ยง: หอพัก ค่ายทหาร, terminal complement deficiency, asplenia (OPSI)"],
       pearls:["pneumococcus = gram-positive diplococci; Hib = coccobacilli"],
       members:["MDCU79|RoC|neuro 4"]},
      {id:"cavitary-tb", title:"Upper lobe cavity + อาการเรื้อรัง → pulmonary TB",
       asked:["ชาย 35 ปี ไอ ไข้ เหงื่อออกกลางคืน น้ำหนักลด 2 เดือน thick-walled cavity RUL → Dx (ตัวลวง lung abscess, SCC, aspergilloma, GPA)"],
       pattern:["Reactivation TB: apical / posterior segment upper lobe, cavity, tree-in-bud","Dx: sputum AFB + Xpert MTB/RIF + culture / DST; ตรวจ HIV; airborne precaution","รักษา <b>2HRZE / 4HR</b> ภายใต้ DOT","DDx: abscess (เฉียบพลัน, dependent segment, air-fluid level), SCC (ผู้สูงอายุสูบบุหรี่), aspergilloma (fungus ball, Monod sign)","บทบาทศัลยกรรม: MDR TB localized, destroyed lung, massive hemoptysis หลัง BAE ล้มเหลว, aspergilloma มีอาการ, BPF / empyema"],
       pearls:["recall มีแค่หัวข้อ + ช้อยเดียว — ระยะเวลาและตำแหน่ง upper lobe เติมให้"],
       members:["MDCU79|RoC|CVT 6"]}
    ]}
  ]});

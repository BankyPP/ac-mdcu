SUMM.push({tag:"Tropical medicine", title:"Tropical medicine",
  intro:"<ul><li>Tropical medicine ออกครบทั้ง 4 rotation ของชุด MDCU78 (RoA / RoB / RoC / RoD) — เป็นหมวดที่ <b>ออกสม่ำเสมอ</b> และเน้นบริบทไทย (ชาวนา ไร่มันสำปะหลัง ชายแดนไทย-เมียนมา อีสาน)</li><li>ธีมหลัก: <b>acute febrile illness ในไทย</b> — leptospirosis, scrub typhus, malaria (severe), และ DDx อย่าง melioidosis / dengue; ถามเชื้อก่อโรคหรือยาที่ถูกต้อง รวมกรณีพิเศษ (ตั้งครรภ์, severe)</li><li>กลุ่มที่สอง: <b>โรคผิวหนัง / ปรสิตเรื้อรัง</b> (mycetoma, Strongyloides larva currens)</li><li>ตัวชี้ขาดคือ clue เฉพาะ: conjunctival suffusion + ปวดน่อง (lepto), eschar (scrub typhus), impaired consciousness / parasitemia สูง (severe malaria → IV artesunate), grains (mycetoma), perianal serpiginous rash เร็ว (Strongyloides)</li></ul>",
  groups:[
    {title:"Acute febrile illness ในไทย", sections:[
      {id:"leptospirosis", title:"Leptospirosis (Weil disease)",
       trend:"ถามเชื้อก่อโรคเมื่อชาวนามีไข้ ดีซ่าน ไตวาย โดยไม่มียุงกัด",
       asked:["ชาวนาอุบลราชธานี ไข้ ปวดกล้ามเนื้อ ตาเหลือง photophobia conjunctival erythema petechiae ขา, liver enzyme และ Cr สูง ไม่มียุงกัด (มี DM + HT) → ถามเชื้อก่อโรค"],
       pattern:["<b>Leptospira interrogans</b> (pathogenic) — ติดจากน้ำ / ดินปนปัสสาวะหนูผ่านแผลหรือเยื่อบุ (ชาวนา ลุยน้ำท่วม); L. biflexa = saprophytic","อาการ: ไข้สูงเฉียบพลัน, ปวดน่อง, <b>conjunctival suffusion</b>; severe (Weil): jaundice (direct bilirubin สูง transaminase สูงเล็กน้อย), AKI แบบ non-oliguric + hypokalemia, เลือดออก, pulmonary hemorrhage","รักษา: mild = doxycycline; severe = IV penicillin G หรือ ceftriaxone; ป้องกันหลังสัมผัส doxycycline 200 mg สัปดาห์ละครั้ง","คนท้อง: เลี่ยง doxycycline → penicillin / ampicillin / ceftriaxone","Acute fever ในไทย DDx: dengue, scrub typhus, murine typhus, malaria, melioidosis"],
       pearls:["เลือก Burkholderia pseudomallei เพราะเห็น อีสาน + เบาหวาน — melioidosis ภาพเป็น pneumonia / abscess / sepsis ไม่ใช่ jaundice + AKI + conjunctival suffusion (รักษา ceftazidime / meropenem ตามด้วย cotrimoxazole)","Orientia = eschar; Borrelia recurrentis = relapsing fever จากเหา"],
       members:["MDCU78|RoA|3"]},
      {id:"scrub-typhus", title:"Scrub typhus (Orientia tsutsugamushi) — eschar + regional LN",
       trend:"ถามเชื้อและยาที่เลือกใช้ในหญิงตั้งครรภ์",
       asked:["หญิงตั้งครรภ์ 20 สัปดาห์ ทำงานไร่มันสำปะหลัง ไข้ ปวดหัว 6 วัน มี eschar สีดำไม่เจ็บที่ขาหนีบ + inguinal LN เจ็บ + ผื่นจาง ๆ → ถามเชื้อก่อโรค (โจทย์ใส่ตั้งครรภ์ไว้ ต่อยอดเป็นคำถามเลือกยาได้)"],
       pattern:["<b>Orientia tsutsugamushi</b> ติดจากตัวอ่อนไร chigger; eschar (แผลไหม้บุหรี่สีดำไม่เจ็บ ตามข้อพับ ขาหนีบ รักแร้) + regional LN + maculopapular rash","ภาวะแทรกซ้อน: pneumonitis / ARDS, meningoencephalitis, AKI, myocarditis; ในคนท้องเพิ่มความเสี่ยงแท้ง คลอดก่อนกำหนด ทารกตาย","รักษา: <b>doxycycline 100 mg bid × 7 วัน</b>; ตั้งครรภ์ / เด็กเล็ก / แพ้ → <b>azithromycin</b> (500 mg วันแรก แล้ว 250 mg อีก 4 วัน หรือ 500 mg / วัน 3 วัน); ทางเลือก chloramphenicol, rifampicin","ยืนยัน: IFA, PCR, rapid IgM; Weil–Felix OX-K บวก"],
       pearls:["ตอบ Leptospira เพราะ 'ไข้ในชาวไร่' — ตัวชี้ขาดคือ eschar","ถ้าถามยาในคนท้อง ห้าม doxycycline; Leptospirosis ในคนท้องก็ใช้ penicillin / ceftriaxone","โจทย์นี้ recall ไม่ครบ ผู้แต่งเติม eschar / LN; ถ้าโจทย์จริงให้ conjunctival suffusion + ปวดน่อง + AKI จะเป็น leptospirosis"],
       members:["MDCU78|RoC|1"]},
      {id:"severe-malaria", title:"Severe falciparum malaria — IV artesunate",
       trend:"ถามยาที่เลือกเมื่อ P. falciparum มี impaired consciousness / jaundice",
       asked:["กลับจากชายแดนไทย-เมียนมา ไข้ สับสน ดีซ่าน smear P. falciparum 6% → ถามยาที่ควรให้"],
       pattern:["<b>Severe malaria (WHO)</b>: impaired consciousness, ชัก, prostration, acidosis, hypoglycemia, Hb <7, AKI, jaundice, pulmonary edema, shock, bleeding, hyperparasitemia (>10%; ไทยใช้ cutoff ต่ำกว่านี้ได้)","<b>IV artesunate 2.4 mg/kg ที่ 0, 12, 24 ชม. แล้ววันละครั้ง</b> (อย่างน้อย 24 ชม.) ดีกว่า quinine (SEAQUAMAT / AQUAMAT); เมื่อกินได้ต่อด้วย ACT ครบ 3 วัน","Uncomplicated P. falciparum ในไทย: ACT 3 วัน (DHA-PPQ หรือ artesunate-mefloquine ตามพื้นที่/แนวทางกรมควบคุมโรคล่าสุด) + primaquine 0.25 mg/kg ครั้งเดียว (ตัด gametocyte)","P. vivax: chloroquine 3 วัน + primaquine 14 วัน (ตรวจ G6PD ก่อน)","Post-artesunate delayed hemolysis ใน 1-3 สัปดาห์ — ตามดู Hb"],
       pearls:["เลือกยากิน (mefloquine / chloroquine) เพราะคุ้นกับ ACT — severe ต้องให้ทางหลอดเลือด","Primaquine ไม่ใช่ยารักษา acute severe ใช้ตัด gametocyte / hypnozoite","โจทย์นี้ recall ไม่ระบุ severe / uncomplicated ผู้แต่งเติมอาการ severe"],
       members:["MDCU78|RoD|14"]}
    ]},
    {title:"โรคผิวหนัง / ปรสิตเรื้อรัง", sections:[
      {id:"mycetoma-tropical", title:"Mycetoma (Madura foot)",
       trend:"ถาม triad ของ mycetoma",
       asked:["ก้อนใต้ผิวหนังที่เท้าไม่เจ็บ หลาย sinus ระบายหนอง มี grains → ถาม diagnosis"],
       pattern:["<b>Triad</b>: painless swelling + draining sinuses + grains; ติดจากหนาม / ดิน ที่เท้าบ่อย ลุกลามถึงกระดูก","Actinomycetoma (Nocardia, Actinomadura): cotrimoxazole + amikacin; Eumycetoma (Madurella — grain ดำ): itraconazole + ผ่าตัด","Actinomycosis = anaerobic, sulfur granule, cervicofacial → penicillin; Sporotrichosis → lymphocutaneous, itraconazole"],
       pearls:["เลือก actinomycosis เพราะ sulfur granule — ดูตำแหน่ง (เท้า) และบริบท"],
       members:["MDCU78|RoB|24"]},
      {id:"strongyloides", title:"Strongyloides stercoralis — larva currens และ hyperinfection",
       trend:"ถามพยาธิจากผื่น serpiginous เคลื่อนเร็วรอบทวาร",
       asked:["ผื่น serpiginous urticarial คันมากเคลื่อนเร็ว เริ่มรอบทวารหนัก → ถามพยาธิ (ตัวเลือก hookworm, A. braziliense, Toxocara, Gnathostoma, Strongyloides)"],
       pattern:["<b>Larva currens</b> = Strongyloides: filariform larva เจาะผิวรอบทวาร (autoinfection) ผื่นเคลื่อน 5-10 cm / ชม. หายใน 1-2 วัน","Immunosuppressed / steroid / HTLV-1 → hyperinfection, disseminated + gram-negative sepsis หรือ meningitis","รักษา ivermectin; ในคนจากพื้นที่ระบาดตรวจ / รักษาก่อนเริ่ม steroid","Cutaneous larva migrans (A. braziliense) ที่เท้า เคลื่อนช้า; Gnathostoma = migratory swelling + eosinophilic meningitis; Angiostrongylus = eosinophilic meningitis (หอย)"],
       pearls:["เลือก A. braziliense เพราะคุ้นกับ creeping eruption — ดูตำแหน่ง perianal และความเร็ว"],
       members:["MDCU78|RoD|13"]}
    ]}
  ]});

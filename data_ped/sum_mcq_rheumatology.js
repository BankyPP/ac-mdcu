const k=s=>s.trim().split(/\s+/).map(x=>x.replace(/^(\d\d)([A-D])(.+)$/,"MDCU$1|Ro$2|$3"));
SUMM.push({tag:"Rheumatology", title:"Rheumatology",
  intro:"<ul><li>หัวข้อหลัก 3 เรื่อง: <b>Kawasaki disease</b> (dx, IVIG + aspirin, coronary aneurysm, GB hydrops — 74A, 76B, 77A, 77D, 78B), <b>IgA vasculitis/ HSP</b> (IgA deposition, supportive + ติดตาม UA/BP — 74A, 76B, 77A, 77B, 78B, 78D), <b>acute rheumatic fever</b> (molecular mimicry, ASO)</li><li>อื่นๆ: arbovirus arthritis (chikungunya — คนในบ้านเป็นพร้อมกัน), growing pains, SLE tamponade, การสื่อสารข่าวร้ายในโรคเรื้อรัง</li></ul>",
  groups:[
    {title:"Vasculitis", sections:[
      {id:"rh-kd", title:"Kawasaki disease",
       trend:"ออกทุกรุ่น — dx จาก principal features, ถาม Tx, complication, GI involvement",
       asked:["ไข้ 7 วัน strawberry tongue ผื่น ตาแดง BCG scar แดง → IVIG","ไข้ ≥ 5 วัน + conjunctival injection + ปากแตก + ผื่น + LN → complication ที่สำคัญ = coronary artery aneurysm","KD + ปวดท้อง RUQ ก้อนกดเจ็บ → gallbladder hydrops"],
       pattern:["Dx: ไข้ ≥ 5 วัน + ≥ 4/5: <b>bilateral nonexudative conjunctivitis, oral changes, polymorphous rash, extremity changes (บวม แดง ลอกปลายนิ้ว), cervical LN ≥ 1.5 cm</b>","<b>BCG scar reactivation</b> = clue จำเพาะในเด็กเล็กเอเชีย","Tx: <b>IVIG 2 g/kg + aspirin</b> ภายใน 10 วัน → aneurysm 25% → &lt; 5%","Other findings: sterile pyuria, aseptic meningitis, hepatitis, <b>GB hydrops</b>, arthritis"],
       pearls:["Incomplete KD: ไข้ ≥ 5 วัน + 2–3 criteria → CRP/ESR + echo","Echo ที่ dx, 2 สัปดาห์, 6 สัปดาห์"],
       members:k("78B66 77A1 77D1.1 76B52 74A40")},
      {id:"rh-hsp", title:"IgA vasculitis (HSP)",
       trend:"ออกทุกรุ่น — ถาม pathogenesis และการดูแลรายไม่รุนแรง",
       asked:["Palpable purpura plt ปกติ + ปวดท้อง + ข้อ → pathogenesis = IgA immune complex deposition ใน small vessel","HSP อาการเบา → supportive + ติดตาม UA และ BP"],
       pattern:["Galactose-deficient IgA1 → <b>IgA immune complex ในผนังหลอดเลือดเล็ก</b> → leukocytoclastic vasculitis (small-vessel)","Tetrad: <b>palpable purpura (plt ปกติ)</b>, arthritis/ arthralgia, abdominal pain (ileo-ileal intussusception), nephritis","Tx: supportive; steroid เมื่อปวดท้องรุนแรง; <b>ติดตาม UA + BP 6–12 เดือน</b> (nephritis เกิดภายหลังได้)"],
       pearls:["ช้อยลวง: IgG cytotoxic = ITP (plt ต่ำ, non-palpable)"],
       members:k("78B45 78D1 77A18 77B19 77B65 76B70 74A35")}]},
    {title:"Arthritis และอื่นๆ", sections:[
      {id:"rh-arf", title:"Acute rheumatic fever",
       trend:"ออก 77A ×2, 78D",
       asked:["กลไก ARF → molecular mimicry (type II hypersensitivity) antibody cross-react กับหัวใจ","สงสัย ARF ต้องส่ง → ASO titer (หลักฐาน GAS)"],
       pattern:["Jones criteria 2015: major — carditis, polyarthritis (low-risk)/ monoarthritis–polyarthralgia (high-risk), chorea, erythema marginatum, subcutaneous nodules + <b>หลักฐาน GAS (ASO/ anti-DNase B/ culture)</b>","Secondary prophylaxis: benzathine penicillin ทุก 3–4 สัปดาห์"],
       members:k("77A41 77A69 78D46")},
      {id:"rh-arbo", title:"Arbovirus arthritis (chikungunya/ Zika)",
       trend:"ออก 77A, 78D",
       asked:["ไข้ + ปวดข้อมือ มือรุนแรง + ผื่น + คนในบ้านเป็นพร้อมกัน → chikungunya → ป้องกันด้วยยากันยุง/ ควบคุมยุง"],
       pattern:["Chikungunya: ปวดข้อเล็กรุนแรงหลายข้อ อาจเรื้อรัง; Tx symptomatic (หลีกเลี่ยง NSAID จนตัด dengue)"],
       members:k("77A11 78D36")},
      {id:"rh-misc", title:"Growing pains, SLE, การสื่อสารโรคเรื้อรัง",
       trend:"ออกครั้งเดียวต่อเรื่อง",
       asked:["ปวดขาสองข้างกลางคืน ตื่นมาปกติ ตรวจปกติ → growing pains → reassure","SLE + hypotension + JVD + electrical alternans → cardiac tamponade","วัยรุ่นโรคเรื้อรัง → คุย prognosis และทางเลือกกับวัยรุ่นโดยตรง"],
       pattern:["Growing pains: 3–12 ปี, สองข้าง, กล้ามเนื้อไม่ใช่ข้อ, กลางคืน, ไม่มี red flags (ปวดข้างเดียว เดินกะเผลก ไข้ ข้อบวม)","SLE serositis → tamponade (Beck triad)"],
       members:k("77B51 77A7 78A44 77B53")}]}
  ]});

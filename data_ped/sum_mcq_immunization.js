const k=s=>s.trim().split(/\s+/).map(x=>x.replace(/^(\d\d)([A-D])(.+)$/,"MDCU$1|Ro$2|$3"));
SUMM.push({tag:"Immunization", title:"Immunization",
  intro:"<ul><li>ซ้ำแทบทุกรุ่น: <b>แพ้ไข่ฉีด influenza/ MMR ได้</b> + ครั้งแรก &lt; 9 ปี ให้ 2 เข็มห่าง 1 เดือน (74A, 76B, 77A, 77B, 78A), <b>MMR ช่วงระบาดที่ 6–11 เดือน ไม่นับ</b> (74A, 77A, 78D), <b>HBV ในทารก &lt; 2,000 g</b> แยกตามแม่ HBsAg บวก/ลบ (74A, 76A, 77B, 78B, 78D)</li><li>อื่นๆ: BCG reaction ปกติ, rabies booster, live vaccine 2 ชนิดให้วันเดียวกัน, rotavirus → intussusception</li></ul>",
  groups:[
    {title:"วัคซีนกับภาวะแพ้", sections:[
      {id:"imm-egg", title:"แพ้ไข่กับ influenza / MMR",
       trend:"ออกเกือบทุกปี — ถามว่าฉีดได้ไหม และกี่เข็ม",
       asked:["เด็ก 3 ปีแพ้ไข่รุนแรง มาฉีด influenza ครั้งแรก → 2 เข็มห่าง 1 เดือน","10 เดือนแพ้ไข่ มาฉีด MMR + influenza → ฉีดได้เลยตามปกติ"],
       pattern:["<b>Egg allergy ไม่ใช่ข้อห้าม</b> ทั้ง influenza (ทุกระดับ แม้ anaphylaxis — ACIP 2023+) และ MMR (chick fibroblast)","ไม่ต้อง skin test, ไม่ต้องแบ่ง dose, ไม่ต้อง refer allergist","Influenza 6 เดือน–8 ปีที่ไม่เคยได้ ≥ 2 dose → <b>2 เข็มห่าง ≥ 4 สัปดาห์</b>"],
       pearls:["ข้อห้ามจริงของ influenza = เคย severe allergy ต่อ influenza vaccine; MMR = neomycin/ gelatin anaphylaxis, immunodeficiency รุนแรง, ตั้งครรภ์"],
       members:k("78A9 77A94 77B39 76B34 74A22")}]},
    {title:"ตารางวัคซีนในสถานการณ์พิเศษ", sections:[
      {id:"imm-mmr-outbreak", title:"MMR ช่วงระบาด",
       trend:"ออก 74A, 77A, 78D — ข้อเดิมเกือบตรงตัว (ทารก 7 เดือนในพื้นที่ระบาด)",
       asked:["7 เดือน พื้นที่ระบาดหัด → MMR 7, 12, 18 เดือน"],
       pattern:["Outbreak/ เดินทาง: ให้ MMR ได้ตั้งแต่ <b>6–11 เดือน</b> แต่<b>เข็มนี้ไม่นับ</b> → ต้องได้อีก 2 เข็มตามตาราง (≥ 12 เดือน และเข็ม 2)","Thai EPI: MMR 9 เดือน + 1½ ปี","Post-exposure: MMR ภายใน 72 ชม. หรือ IG ภายใน 6 วัน"],
       members:k("77A4 74A7 78D22")},
      {id:"imm-hbv", title:"Hepatitis B ในทารก",
       trend:"ออกทุกปี — แยกแม่ HBsAg บวก/ ลบ และน้ำหนัก &lt; 2,000 g",
       asked:["แม่ HBsAg+ ทารก 1,700 g → HBIG + vaccine ภายใน 12 ชม.","แม่ HBsAg ลบ ทารก 1,000 g → vaccine ที่อายุ 1 เดือน หรือตอน discharge","แม่ HBsAg+ ทารก 2,800 g ได้ HBV + HBIG แล้ว → ตารางต่อ (0, 1, 4, 6 เดือน — ไทยให้เข็ม 1 เดือน + DTP-HB-Hib 2, 4, 6)"],
       pattern:["<b>แม่ HBsAg+</b>: ทุกน้ำหนัก HBIG + vaccine &lt; 12 ชม.; &lt; 2,000 g เข็มแรกไม่นับ → ให้อีก 3 เข็ม; ตรวจ HBsAg + anti-HBs ที่ 9–12 เดือน","<b>แม่ HBsAg ลบ + &lt; 2,000 g</b>: เลื่อนเข็มแรกไป 1 เดือน หรือก่อนกลับบ้าน (ตอบสนองดีกว่า)","แม่ไม่ทราบผล + &lt; 2,000 g → ให้ทั้ง vaccine + HBIG &lt; 12 ชม."],
       members:k("76A8 74A9 78B30 78D20 77B16")}]},
    {title:"เรื่องอื่นของวัคซีน", sections:[
      {id:"imm-bcg", title:"BCG reaction ปกติ",
       trend:"ออก 77A, 78D",
       asked:["ตุ่ม/ หนองเล็กตรงที่ฉีด BCG อายุ 2–6 สัปดาห์ → reassure"],
       pattern:["BCG: papule → pustule/ ulcer เล็ก 2–6 สัปดาห์ → scar 2–3 เดือน = ปกติ ไม่ต้องรักษา","ผิดปกติ: abscess ใหญ่, LN โต &gt; 1.5 cm/ หนอง (BCG lymphadenitis), disseminated BCG ใน immunodeficiency","BCG scar reactivation = clue ของ Kawasaki"],
       members:k("77A10 78D33")},
      {id:"imm-other", title:"Rabies booster, live vaccines, rotavirus",
       trend:"ออกครั้งเดียวต่อเรื่อง (74B, 78B)",
       asked:["เคยได้ rabies vaccine ครบ สัมผัสซ้ำ → booster day 0, 3 (ไม่ต้อง RIG)","MMR กับ live JE → ให้วันเดียวกัน (หรือห่าง ≥ 4 สัปดาห์)","Rotavirus vaccine → ระวัง intussusception"],
       pattern:["Live vaccine ฉีด 2 ชนิด: <b>วันเดียวกัน หรือห่าง ≥ 28 วัน</b>","Rotavirus: เริ่มก่อน 15 สัปดาห์ ครบก่อน 8 เดือน; ข้อห้าม: เคย intussusception, SCID","Mumps เกิดได้แม้ได้ MMR ครบ (waning)"],
       members:k("78B9 78B39 74B114 76B73")},
      {id:"imm-pcp", title:"Prophylaxis ใน HIV",
       trend:"ออก 77D",
       asked:["HIV CD4 ต่ำ → TMP-SMX ป้องกัน PCP"],
       pattern:["PCP prophylaxis: &lt; 1 ปีทุกราย, 1–5 ปี CD4 &lt; 500 (&lt; 15%), ≥ 6 ปี CD4 &lt; 200"],
       members:k("77D21.7")}]}
  ]});

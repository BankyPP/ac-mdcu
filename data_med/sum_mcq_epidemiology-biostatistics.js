SUMM.push({tag:"Epidemiology & Biostatistics", title:"Epidemiology & Biostatistics",
  intro:"<ul><li>Biostat ใน Med Y4 MCQ เป็น <b>โจทย์คำนวณตรง ๆ ที่ออกทุกปี</b> — MDCU77 (RoA / RoB / RoC) 5 ข้อ และ MDCU78 (RoA / RoB) 3 ข้อ: PPV / NPV, LR+, ARR และ NNT — ผู้จดข้อสอบระบุว่า 'Biostat มีให้คำนวณ ออกตามที่สอน'</li><li>2 กลุ่มสูตร: <b>diagnostic test</b> (sens, spec, PPV, NPV, LR — ให้เป็นตาราง 2×2 หรือให้ sens / spec / prevalence มาแล้วต้องสร้างตารางเอง) และ <b>treatment effect</b> (CER, EER, ARR, RRR, RR, NNT)</li><li>วิธีที่เร็วที่สุด: สมมติประชากร 100 คนแล้วเติมตาราง — ใช้ได้ทั้ง PPV, NPV และ ARR</li><li>กับดัก: อ่านตารางผิดแนว (PPV แนวนอน, sens แนวตั้ง), ลืม 1 − specificity, ใช้ RRR แทน ARR, ปัด NNT ลง, ลืมว่า PPV / NPV ขึ้นกับ prevalence</li></ul>",
  groups:[
    {title:"Diagnostic test: sensitivity, PPV, NPV, likelihood ratio", sections:[
      {id:"ppv-2x2", title:"PPV และค่าอื่นจากตาราง 2×2",
       trend:"ออกใน MDCU78 — ให้จำนวนผลบวก / ลบในกลุ่มเป็นโรคและไม่เป็นโรคมาเป็นตัวเลขดิบ",
       asked:["ทดสอบ rapid test ใน 200 คน: โรค 100 คน บวก 90 / ไม่เป็นโรค 100 คน บวก 20 → ถามค่า PPV"],
       pattern:["สร้างตาราง: TP 90, FN 10, FP 20, TN 80","<b>PPV = TP / (TP + FP) = 90 / 110 = 0.82</b> (แถวของผลบวก); NPV = TN / (TN + FN) = 80 / 90 = 0.89","Sensitivity = TP / (TP + FN) = 0.90; Specificity = TN / (TN + FP) = 0.80; Accuracy = 170 / 200 = 0.85","LR+ = 0.9 / 0.2 = 4.5; LR− = 0.1 / 0.8 = 0.125","Prevalence สูงขึ้น → PPV สูงขึ้น NPV ต่ำลง; sens / spec / LR ไม่ขึ้นกับ prevalence"],
       pearls:["สลับ PPV กับ sensitivity — PPV อ่านแนวนอน (ในกลุ่มผลบวก) sensitivity อ่านแนวตั้ง (ในกลุ่มที่เป็นโรค)","ตัวเลือกใกล้กัน (0.80, 0.82, 0.88, 0.89, 0.90) ตั้งใจให้ค่าต่าง ๆ ของตารางเดียวกัน — ต้องคำนวณให้ตรงค่าที่ถาม"],
       members:["MDCU78|RoA|6"]},
      {id:"ppv-npv-prevalence", title:"PPV / NPV จาก sensitivity, specificity และ prevalence (pretest probability)",
       trend:"ออกใน MDCU77 สองข้อ (RoA ถาม NPV ของ D-dimer, RoB ถาม PPV เมื่อ pretest สูง) — ไม่ให้ตารางมา ต้องสร้างเอง",
       asked:["D-dimer sens 90% spec 50% ในประชากรที่ VTE prevalence 20% → ถาม NPV (ตอบ 95%)","Test sens 30% spec 90% pretest probability 80% ผลบวก → ถาม PPV (ตอบ 92.3%)"],
       pattern:["สมมติ 100 คน: มีโรค = prevalence → <b>TP = sens × มีโรค</b>, FN = ที่เหลือ; <b>TN = spec × ไม่มีโรค</b>, FP = ที่เหลือ","D-dimer: TP 18, FN 2, TN 40, FP 40 → <b>NPV = 40 / 42 = 95%</b> (PPV เพียง 18 / 58 = 31%)","Pretest 80%: TP 24, FP 2 → <b>PPV = 24 / 26 = 92.3%</b> (NPV = 18 / 74 = 24%)","<b>PPV แปรตาม prevalence โดยตรง, NPV แปรผกผัน</b> — test sensitivity ต่ำก็ให้ PPV สูงได้ถ้า specificity ดีและ pretest สูง","D-dimer = test สำหรับ rule out (sens สูง spec ต่ำ) ใช้ใน pretest ต่ำ / ปานกลาง (Wells); pretest สูงไป imaging เลย; age-adjusted cutoff (อายุ × 10 µg / L เมื่อ >50 ปี)"],
       pearls:["สับสน specificity (TN / คนไม่มีโรคทั้งหมด) กับ NPV (TN / คนผลลบทั้งหมด) — ตัวเลือก 50 ของข้อ D-dimer คือ specificity","คิดว่า sensitivity ต่ำ → PPV ต่ำเสมอ — ลืมใส่ pretest probability; ตัวเลือก 24% คือ NPV / TP ของตารางเดียวกัน","SpPIn / SnNOut: spec สูง ผลบวก rule in; sens สูง ผลลบ rule out"],
       members:["MDCU77|RoA|25","MDCU77|RoB|20"]},
      {id:"lr-positive", title:"Positive likelihood ratio จาก sensitivity และ specificity",
       trend:"ออกทั้ง 77 และ 78 — ให้ sens / spec เป็นร้อยละแล้วถาม LR+ ตรง ๆ",
       asked:["MDCU78: sensitivity 80% specificity 90% → ถาม LR+ (ตอบ 8)","MDCU77: rapid test dengue sens 75% spec 85% → ถาม LR+ (ตอบ 5.0)"],
       pattern:["<b>LR+ = sensitivity / (1 − specificity)</b> = TPR / FPR: 0.80 / 0.10 = 8; 0.75 / 0.15 = 5","LR− = (1 − sensitivity) / specificity: 0.2 / 0.9 = 0.22; 0.25 / 0.85 = 0.29","LR+ >10 หรือ LR− <0.1 = เปลี่ยน post-test probability มาก; 5-10 / 0.1-0.2 ปานกลาง; 2-5 / 0.2-0.5 น้อย","Pre-test odds × LR = post-test odds; odds = p / (1 − p); LR ไม่ขึ้นกับ prevalence"],
       pearls:["ใช้ specificity เป็นตัวหารตรง ๆ แทน (1 − specificity) จะได้ 0.8 / 0.9 = 0.89 หรือ 0.75 / 0.85 = 0.88; ตัวเลือก 0.29 ของปี 77 คือ LR−","ตัวเลือกอื่นมาจากการสลับ sensitivity กับ specificity (เช่น 0.9 / 0.1 = 9)"],
       members:["MDCU78|RoB|1","MDCU77|RoC|25"]}
    ]},
    {title:"Treatment effect: ARR, RRR, NNT", sections:[
      {id:"nnt", title:"ARR และ NNT จาก event rate หรือ incidence + RRR",
       trend:"ออกทั้ง 77 และ 78 — 78 ให้ incidence + RRR หา NNT; 77 ออกซ้ำแบบเดียวกัน (RoA) และถาม ARR จาก event rate สองกลุ่ม (RoB)",
       asked:["MDCU78: incidence ของโรค A 6% ยาใหม่ RRR 66.67% → ถาม NNT (ตอบ 25)","MDCU77: incidence ของโรค A 2% ยา RRR 0.33 → ถาม NNT (ตอบ 152)","MDCU77: RCT stroke ใน 5 ปี placebo 4% ยาใหม่ 2% → ถาม ARR (ตอบ 2%)"],
       pattern:["<b>ARR = CER − EER = CER × RRR</b>: 0.06 × 0.6667 = 0.04; 0.02 × 0.33 = 0.0066; 4% − 2% = 2%","<b>NNT = 1 / ARR ปัดขึ้นเสมอ</b>: 1 / 0.04 = 25; 1 / 0.0066 = 151.5 → 152; 1 / 0.02 = 50","RR = EER / CER (ข้อ stroke = 0.5); RRR = 1 − RR = ARR / CER (= 50%); NNH = 1 / ARI","RRR คงที่ แต่ NNT ขึ้นกับ baseline risk — baseline ต่ำ → ARR เล็ก → NNT สูงมาก","RR ใช้ใน cohort / RCT, odds ratio ใช้ใน case-control; โรคพบน้อย OR ≈ RR"],
       pearls:["เอา 1 / (risk ในกลุ่มได้ยา) = 1 / 0.02 = 50 แทน 1 / ARR","ใช้ RRR แทน ARR (1 / 0.33 ≈ 3) หรือปัด NNT ลง","ตัวเลือก ARR ปี 77 วาง 50% / 0.5 / 50 ไว้ล่อ — คือ RRR, RR และ NNT ของข้อมูลชุดเดียวกัน; ยาที่ 'ลด risk 50%' อาจลด risk จริงแค่ 2%","ข้อ NNT ปี 77 ตัวเลือกในไฟล์จดเป็น 149 (ไม่ตรงผลคำนวณ) — ยึดหลักคำนวณ 152"],
       members:["MDCU78|RoB|4","MDCU77|RoA|20","MDCU77|RoB|2"]}
    ]}
  ]});

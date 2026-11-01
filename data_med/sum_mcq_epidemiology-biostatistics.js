SUMM.push({tag:"Epidemiology & Biostatistics", title:"Epidemiology & Biostatistics",
  intro:"<ul><li>Biostat ใน Med Y4 MCQ เป็น <b>โจทย์คำนวณตรง ๆ ที่ออกทุกปี</b> — MDCU77 (RoA / RoB / RoC) 5 ข้อ, MDCU78 (RoA / RoB) 3 ข้อ และ MDCU79 (RoA / RoB หมวด Others) 3 ข้อ: PPV / NPV, LR+, RR, ARR และ NNT — ผู้จดข้อสอบระบุว่า 'Biostat มีให้คำนวณ ออกตามที่สอน'</li><li>79 <b>ซ้ำ 78 ตัวเลขเดิมเป๊ะ 2 ข้อ</b> (LR+ จาก sens 80% spec 90% = 8; NNT จาก risk 0.06 + RRR 67% = 25) และเพิ่ม <b>relative risk จาก cohort</b> — ข้อคำนวณกลุ่มนี้คือคะแนนฟรีถ้าจำสูตรได้</li><li>2 กลุ่มสูตร: <b>diagnostic test</b> (sens, spec, PPV, NPV, LR — ให้เป็นตาราง 2×2 หรือให้ sens / spec / prevalence มาแล้วต้องสร้างตารางเอง) และ <b>treatment effect</b> (CER, EER, ARR, RRR, RR, NNT)</li><li>วิธีที่เร็วที่สุด: สมมติประชากร 100 คนแล้วเติมตาราง — ใช้ได้ทั้ง PPV, NPV และ ARR</li><li>กับดัก: อ่านตารางผิดแนว (PPV แนวนอน, sens แนวตั้ง), ลืม 1 − specificity, ใช้ RRR แทน ARR, ปัด NNT ลง, ลืมว่า PPV / NPV ขึ้นกับ prevalence</li></ul>",
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
       trend:"ออก 3 ปีติด 77 / 78 / 79 — ให้ sens / spec เป็นร้อยละแล้วถาม LR+ ตรง ๆ; 79B ซ้ำ 78 ตัวเลขเดิมและช้อยเดิม (8, 9, 12, 0.89, 1.125)",
       asked:["MDCU78 และ MDCU79: sensitivity 80% specificity 90% → ถาม LR+ (ตอบ 8)","MDCU77: rapid test dengue sens 75% spec 85% → ถาม LR+ (ตอบ 5.0)"],
       pattern:["<b>LR+ = sensitivity / (1 − specificity)</b> = TPR / FPR: 0.80 / 0.10 = 8; 0.75 / 0.15 = 5","LR− = (1 − sensitivity) / specificity: 0.2 / 0.9 = 0.22; 0.25 / 0.85 = 0.29","LR+ >10 หรือ LR− <0.1 = เปลี่ยน post-test probability มาก; 5-10 / 0.1-0.2 ปานกลาง; 2-5 / 0.2-0.5 น้อย","Pre-test odds × LR = post-test odds; odds = p / (1 − p); LR ไม่ขึ้นกับ prevalence"],
       pearls:["ใช้ specificity เป็นตัวหารตรง ๆ แทน (1 − specificity) จะได้ 0.8 / 0.9 = 0.89 หรือ 0.75 / 0.85 = 0.88; ตัวเลือก 0.29 ของปี 77 คือ LR−","ตัวเลือกอื่นมาจากการสลับ sensitivity กับ specificity (เช่น 0.9 / 0.1 = 9)","ช้อย 1.125 ของปี 79 = 0.9 / 0.8 (spec / sens กลับหัว); 12 ไม่มีที่มาทางสูตร"],
       members:["MDCU78|RoB|1","MDCU77|RoC|25","MDCU79|RoB|52"]}
    ]},
    {title:"Treatment effect และ measure of association: RR, ARR, RRR, NNT", sections:[
      {id:"nnt", title:"ARR และ NNT จาก event rate หรือ incidence + RRR",
       trend:"ออก 3 ปีติด 77 / 78 / 79 — 78 ให้ incidence + RRR หา NNT; 79B ซ้ำ 78 ตัวเลขเดิม (DVT risk 0.06 + RRR 67% → 25); 77 ออกแบบเดียวกัน (RoA) และถาม ARR จาก event rate สองกลุ่ม (RoB)",
       asked:["MDCU78: incidence ของโรค A 6% ยาใหม่ RRR 66.67% → ถาม NNT (ตอบ 25)","MDCU79: risk ของ DVT ในผู้ป่วยใน 0.06 ยา A ลด risk ได้ 67% (RRR) → ถาม NNT (ผู้จดจำช้อย 4 กับ 25 — ตอบ 25)","MDCU77: incidence ของโรค A 2% ยา RRR 0.33 → ถาม NNT (ตอบ 152)","MDCU77: RCT stroke ใน 5 ปี placebo 4% ยาใหม่ 2% → ถาม ARR (ตอบ 2%)"],
       pattern:["<b>ARR = CER − EER = CER × RRR</b>: 0.06 × 0.6667 = 0.04; 0.02 × 0.33 = 0.0066; 4% − 2% = 2%","<b>NNT = 1 / ARR ปัดขึ้นเสมอ</b>: 1 / 0.04 = 25; 1 / 0.0066 = 151.5 → 152; 1 / 0.02 = 50","RR = EER / CER (ข้อ stroke = 0.5); RRR = 1 − RR = ARR / CER (= 50%); NNH = 1 / ARI","RRR คงที่ แต่ NNT ขึ้นกับ baseline risk — baseline ต่ำ → ARR เล็ก → NNT สูงมาก","RR ใช้ใน cohort / RCT, odds ratio ใช้ใน case-control; โรคพบน้อย OR ≈ RR"],
       pearls:["เอา 1 / (risk ในกลุ่มได้ยา) = 1 / 0.02 = 50 แทน 1 / ARR","ใช้ RRR แทน ARR (1 / 0.33 ≈ 3) หรือปัด NNT ลง","ตัวเลือก ARR ปี 77 วาง 50% / 0.5 / 50 ไว้ล่อ — คือ RRR, RR และ NNT ของข้อมูลชุดเดียวกัน; ยาที่ 'ลด risk 50%' อาจลด risk จริงแค่ 2%","ข้อ NNT ปี 77 ตัวเลือกในไฟล์จดเป็น 149 (ไม่ตรงผลคำนวณ) — ยึดหลักคำนวณ 152","ช้อย 4 ของปี 79 ไม่ได้มาจากสูตรที่ถูก (ใช้ RRR แทน ARR จะได้ 1 / 0.67 ≈ 1.5 ปัดขึ้นเป็น 2 — ยังไม่ใช่ NNT); ช้อย 50 = 1 / EER (1 / 0.02); ช้อย 17 = 1 / CER (1 / 0.06)"],
       members:["MDCU78|RoB|4","MDCU77|RoA|20","MDCU77|RoB|2","MDCU79|RoB|53"]},
      {id:"relative-risk", title:"Relative risk จาก cohort study (และ OR / AR จากตารางเดียวกัน)",
       trend:"MDCU79 (RoA หมวด Others): ผู้จดจำแค่ 'คิด relative risk' — ผู้แต่งสร้างโจทย์ cohort สูบบุหรี่กับ COPD ให้คำนวณจากตาราง 2×2",
       asked:["Prospective cohort 2,000 คน 10 ปี: สูบบุหรี่ 1,000 คนเป็น COPD 30, ไม่สูบ 1,000 คนเป็น 10 → ถาม RR (ช้อย 0.33, 2.0, 3.0, 3.06, 20 — ตอบ 3.0)"],
       pattern:["ตาราง 2×2: a = 30 (exposed + โรค), b = 970, c = 10 (unexposed + โรค), d = 990","<b>RR = [a / (a + b)] ÷ [c / (c + d)]</b> = 0.03 / 0.01 = <b>3.0</b> — ใช้ใน cohort / RCT (มี incidence)","<b>Odds ratio = ad / bc</b> = (30 × 990) / (970 × 10) = 3.06 — ใช้ใน case-control; โรคพบน้อย OR ≈ RR","Attributable risk (risk difference) = 0.03 − 0.01 = 0.02 (20 ต่อ 1,000); AR% = (RR − 1) / RR = 67%","RR = 1 ไม่สัมพันธ์, >1 เพิ่มความเสี่ยง, <1 ป้องกัน (RRR = 1 − RR); NNT / NNH = 1 / risk difference"],
       pearls:["ตอบ 3.06 เพราะคำนวณ OR — cohort ถาม RR ใช้ incidence ไม่ใช่ odds","0.33 = กลับหัว (unexposed / exposed); 2.0 = 3 − 1 (excess risk เป็นเท่า); 20 = risk difference ต่อ 1,000 คน"],
       members:["MDCU79|RoA|48"]}
    ]}
  ]});

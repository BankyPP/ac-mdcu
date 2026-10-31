SUMM.push({tag:"Epidemiology & Biostatistics", title:"Epidemiology & Biostatistics",
  intro:"<ul><li>Biostat ใน Med Y4 MCQ (MDCU78 RoA / RoB) เป็น <b>โจทย์คำนวณตรง ๆ</b> ที่ออกทุกชุด: PPV จากตาราง 2×2, LR+ จาก sensitivity / specificity, NNT จาก RRR และ baseline risk — ผู้จดข้อสอบระบุว่า 'Biostat มีให้คำนวณ ออกตามที่สอน'</li><li>2 กลุ่มสูตร: <b>diagnostic test</b> (sens, spec, PPV, NPV, LR) และ <b>treatment effect</b> (CER, EER, ARR, RRR, RR, NNT)</li><li>กับดัก: อ่านตารางผิดแนว (PPV แนวนอน, sens แนวตั้ง), ลืม 1 − specificity, ใช้ 1 / risk ในกลุ่มได้ยาแทน 1 / ARR</li></ul>",
  groups:[
    {title:"Diagnostic test: sensitivity, PPV, likelihood ratio", sections:[
      {id:"ppv-2x2", title:"PPV และค่าอื่นจากตาราง 2×2",
       trend:"ถามคำนวณค่าทำนายจากจำนวนผลบวก / ลบในกลุ่มเป็นโรคและไม่เป็นโรค",
       asked:["ทดสอบ rapid test ใน 200 คน: โรค 100 คน บวก 90 / ไม่เป็นโรค 100 คน บวก 20 → ถามค่า PPV"],
       pattern:["สร้างตาราง: TP 90, FN 10, FP 20, TN 80","<b>PPV = TP / (TP + FP) = 90 / 110 = 0.82</b> (แถวของผลบวก); NPV = TN / (TN + FN) = 80 / 90 = 0.89","Sensitivity = TP / (TP + FN) = 0.90; Specificity = TN / (TN + FP) = 0.80; Accuracy = 170 / 200 = 0.85","LR+ = 0.9 / 0.2 = 4.5; LR− = 0.1 / 0.8 = 0.125","Prevalence สูงขึ้น → PPV สูงขึ้น NPV ต่ำลง; sens / spec / LR ไม่ขึ้นกับ prevalence"],
       pearls:["สลับ PPV กับ sensitivity — PPV อ่านแนวนอน (ในกลุ่มผลบวก) sensitivity อ่านแนวตั้ง (ในกลุ่มที่เป็นโรค)","ตัวเลือกใกล้กัน (0.80, 0.82, 0.88, 0.89, 0.90) ตั้งใจให้ค่าต่าง ๆ ของตารางเดียวกัน — ต้องคำนวณให้ตรงค่าที่ถาม"],
       members:["MDCU78|RoA|6"]},
      {id:"lr-positive", title:"Positive likelihood ratio จาก sensitivity และ specificity",
       trend:"ถามสูตร LR+ โดยให้ sens / spec เป็นร้อยละ",
       asked:["sensitivity 80% specificity 90% → ถาม LR+"],
       pattern:["<b>LR+ = sensitivity / (1 − specificity) = 0.80 / 0.10 = 8</b>","LR− = (1 − sensitivity) / specificity = 0.2 / 0.9 = 0.22","LR+ >10 หรือ LR− <0.1 = เปลี่ยน post-test probability มาก","Pre-test odds × LR = post-test odds; LR ไม่ขึ้นกับ prevalence"],
       pearls:["ใช้ specificity เป็นตัวหารตรง ๆ แทน (1 − specificity) จะได้ 0.8 / 0.9 = 0.89; ตัวเลือกอื่นมาจากการสลับ sensitivity กับ specificity (เช่น 0.9 / 0.1 = 9)"],
       members:["MDCU78|RoB|1"]}
    ]},
    {title:"Treatment effect: ARR, RRR, NNT", sections:[
      {id:"nnt", title:"NNT จาก incidence และ RRR",
       trend:"ถามแปลง RRR เป็น ARR แล้วหา NNT",
       asked:["incidence ของโรค A 6% ยาใหม่ลด risk ด้วย RRR 66.67% → ถาม NNT"],
       pattern:["<b>ARR = CER × RRR = 0.06 × 0.6667 = 0.04</b> (risk ในกลุ่มได้ยา = 2%)","<b>NNT = 1 / ARR = 1 / 0.04 = 25</b>","สูตร: ARR = CER − EER; RRR = ARR / CER; RR = EER / CER; NNH = 1 / ARI; ปัด NNT ขึ้นเป็นจำนวนเต็ม","RRR คงที่ แต่ NNT ขึ้นกับ baseline risk (risk สูง → NNT ต่ำ)"],
       pearls:["เอา 1 / (risk ในกลุ่มได้ยา) = 1 / 0.02 = 50 แทน 1 / ARR"],
       members:["MDCU78|RoB|4"]}
    ]}
  ]});

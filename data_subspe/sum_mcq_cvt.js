SUMM.push({tag:"CVT", title:"Cardiothoracic surgery",
  intro:"<ul><li>MDCU79 RoC 7 ข้อย่อย: <b>adult cardiac</b> (CABG conduit LIMA → LAD, aortic stenosis, left atrial myxoma), <b>congenital</b> (TOF ที่ PGE1 ล้มเหลว → BT shunt), <b>thoracic</b> (thymoma + MG, cavitary TB) และ <b>critical care</b> (VV vs VA ECMO)</li><li>ส่วนใหญ่ถาม <b>Dx จากอาการและการตรวจร่างกาย</b> (murmur, ptosis ตอนเย็น, murmur เปลี่ยนตามท่า) และ <b>เลือก procedure / support ให้ตรงพยาธิสรีรวิทยา</b></li><li>หลายเคสเป็น recall สั้นช้อยเดียว Claude แต่ง stem (⚠) — ตัวลวงเป็นโรคข้างเคียงที่ต้องแยกด้วยคำสำคัญคำเดียว</li></ul>",
  groups:[
    {title:"Adult cardiac surgery", sections:[
      {id:"aortic-stenosis", title:"Aortic stenosis: angina + syncope + dyspnea + ejection murmur ร้าว carotid",
       asked:["ชาย 72 ปี เจ็บอก เหนื่อย syncope ขณะขึ้นบันได harsh crescendo-decrescendo murmur RUSB ร้าว carotid, S2 เบา → Dx (ตัวลวง HOCM, MR, VSD, AR)"],
       pattern:["Triad: angina, exertional syncope, dyspnea / HF — มีอาการแล้วพยากรณ์แย่ลงชัด","PE: ejection murmur RUSB → carotid, peak ยิ่งช้ายิ่งรุนแรง, S2 เบา / paradoxical split, pulsus parvus et tardus, S4","Severe AS: <b>Vmax ≥4 m/s, mean gradient ≥40 mmHg, AVA ≤1.0 cm²</b>","Symptomatic severe AS → AVR (2020 ACC/AHA); <65 ปี → SAVR, 65–80 shared decision, >80 / high risk → TAVI","ผู้สูงอายุ = calcific; อายุน้อยกว่า = bicuspid"],
       pearls:["HOCM: LLSB ดังขึ้นตอน Valsalva ไม่ร้าว carotid; AS เบาลงตอน Valsalva","severe AS ที่ LV ล้มเหลว murmur อาจเบาลง","stem แต่งจาก recall สั้น (ผู้จดบอกโจทย์ยาวมาก)"],
       members:["MDCU79|RoC|CVT 3"]},
      {id:"cabg-lima", title:"CABG: conduit ที่ดีที่สุดสำหรับ LAD = LIMA",
       asked:["Triple-vessel disease จะทำ CABG → conduit ที่ดีที่สุดสำหรับ LAD (ตัวลวง radial, RIMA, saphenous vein, gastroepiploic)"],
       pattern:["<b>LIMA → LAD</b> = มาตรฐาน: in-situ, NO สูง, patency 10 ปี >90% เพิ่ม survival (2021 ACC/AHA/SCAI Class 1)","Radial artery → non-LAD ที่ตีบรุนแรง ดีกว่า SVG (ตรวจ ulnar collateral ก่อน)","SVG ใช้บ่อยที่สุด แต่ patency 10 ปี ~50–60%","ข้อบ่งชี้ CABG: left main, multivessel + เบาหวาน (FREEDOM), EF ≤35% + multivessel, SYNTAX สูง","หลังผ่า: aspirin ตลอดชีวิต + high-intensity statin"],
       pearls:["ใช้บ่อยที่สุด (SVG) ≠ ดีที่สุด (LIMA)","ต้นฉบับถามกว้าง ๆ ว่า artery ไหนดีที่สุด — bank ระบุเป้าหมาย LAD"],
       members:["MDCU79|RoC|CVT 2"]},
      {id:"la-myxoma", title:"Left atrial myxoma: murmur เปลี่ยนตามท่า + tumor plop + constitutional",
       asked:["หญิง 45 ปี เหนื่อย syncope ตอนเปลี่ยนท่า ไข้ต่ำ น้ำหนักลด ปวดข้อ ESR สูง diastolic murmur ที่ apex เปลี่ยนตามท่า + early diastolic sound → Dx (ตัวลวง IE, rheumatic MS, LA thrombus)"],
       pattern:["Primary cardiac tumor ที่พบบ่อยสุดในผู้ใหญ่; ~75% LA ติด interatrial septum (fossa ovalis) ด้วย stalk","Triad: <b>obstruction</b> (dyspnea, syncope ตามท่า, MS-like murmur เปลี่ยนตามท่า, <b>tumor plop</b>) + <b>embolism</b> + <b>constitutional</b> (IL-6: ไข้ น้ำหนักลด ESR สูง)","Dx: TTE → TEE / cardiac MRI","<b>Urgent surgical excision</b> รวม stalk และ septum ที่เกาะ + patch","Carney complex: myxoma หลายตำแหน่ง / ซ้ำ + lentigines + endocrine → ตรวจญาติ; เด็ก = rhabdomyoma (TSC)"],
       pearls:["opening snap ของ MS ไม่เปลี่ยนตามท่าและไม่มีอาการ systemic","IE มีไข้ ESR สูงแต่ murmur ไม่เปลี่ยนตามท่า"],
       members:["MDCU79|RoC|CVT 7"]}
    ]},
    {title:"Congenital heart", sections:[
      {id:"tof-bt-shunt", title:"TOF ductal-dependent ที่ PGE1 ล้มเหลว → modified BT shunt",
       asked:["ทารก 3 วัน TOF SpO2 60% แม้ O2 100% duct ปิดแม้ PGE1 → next management"],
       pattern:["ต้องเพิ่ม pulmonary blood flow โดยไม่พึ่ง duct → <b>modified Blalock-Thomas-Taussig shunt</b> (subclavian / innominate → PA ด้วย PTFE graft) หรือ ductal / RVOT stent","Complete repair (ปิด VSD + resect infundibulum ± transannular patch) 3–6 เดือน; ระยะยาว pulmonary regurgitation → PVR","TOF: VSD, RVOT obstruction, overriding aorta, RVH; CXR boot-shaped","Tet spell: knee-chest, O2, morphine, fluid, phenylephrine, beta-blocker"],
       pearls:["PA banding ลดเลือดไปปอด (VSD ใหญ่); balloon septostomy ใช้ d-TGA; indomethacin ปิด duct","ช้อย B–E แต่งจาก recall ช้อยเดียว"],
       members:["MDCU79|RoC|CVT 1"]}
    ]},
    {title:"Thoracic: mediastinum และปอด", sections:[
      {id:"thymoma-mg", title:"Thymoma + myasthenia gravis",
       asked:["หญิง 45 ปี ptosis + diplopia แย่ลงตอนเย็น + anterior mediastinal mass → tumor"],
       pattern:["MG + anterior mediastinal mass = <b>thymoma</b> จนกว่าจะพิสูจน์ว่าไม่ใช่","Anterior 4T (thymoma, teratoma, lymphoma, thyroid); posterior = neurogenic","Resectable → <b>total thymectomy en bloc</b> ไม่ต้อง biopsy; optimize MG ก่อนผ่าตัดลด myasthenic crisis","Non-thymomatous AChR+ generalized MG 18–65 ปี → thymectomy ช่วย (MGTX, NEJM 2016)"],
       pearls:["ห้าม percutaneous biopsy ถ้า CT เข้ากับ thymoma ที่ผ่าออกได้"],
       members:["MDCU79|RoC|CVT 4"]},
      {id:"cavitary-tb", title:"Cavity upper lobe + อาการเรื้อรัง → pulmonary TB",
       asked:["ไอ ไข้ เหงื่อออกกลางคืน น้ำหนักลด 2 เดือน thick-walled cavity RUL → Dx"],
       pattern:["Reactivation TB: apical / posterior upper lobe; Xpert MTB/RIF + AFB + culture; 2HRZE / 4HR","DDx: lung abscess (เฉียบพลัน, dependent, air-fluid level), SCC, aspergilloma (Monod sign), GPA","ข้อบ่งชี้ผ่าตัดใน TB: MDR localized, destroyed lung, massive hemoptysis หลัง BAE ล้มเหลว, aspergilloma มีอาการ, BPF / empyema"],
       pearls:["stem เติมระยะเวลาและตำแหน่งจาก recall หัวข้อ + ช้อยเดียว"],
       members:["MDCU79|RoC|CVT 6"]}
    ]},
    {title:"Mechanical circulatory / respiratory support", sections:[
      {id:"vv-ecmo", title:"Severe ARDS refractory หัวใจดี → VV ECMO",
       asked:["ARDS P/F 60 แม้ lung-protective ventilation + high PEEP + NMB + prone, echo ปกติ ไม่มี shock → support เพิ่ม (ตัวลวง VA ECMO, IABP)"],
       pattern:["<b>VV ECMO</b> = แทนปอดอย่างเดียว ต้องหัวใจดี; <b>VA ECMO</b> = หัวใจ ± ปอด (cardiogenic shock, ECPR)","เกณฑ์ EOLIA: P/F <50 นาน >3 ชม., <80 นาน >6 ชม., หรือ pH <7.25 + PaCO2 ≥60 นาน >6 ชม.","ก่อน ECMO ต้องทำ conventional ครบ: VT 4–8 mL/kg PBW, plateau ≤30, PEEP, prone ≥12–16 ชม./วัน (PROSEVA), NMB","Berlin: mild 200–300, moderate 100–200, severe ≤100","ภาวะแทรกซ้อน: เลือดออก, thrombosis, hemolysis, limb ischemia (VA), differential hypoxemia (VA femoral)"],
       pearls:["เลือกชนิด ECMO ผิด — หัวใจดีใช้ VV"],
       members:["MDCU79|RoC|CVT 5"]}
    ]}
  ]});

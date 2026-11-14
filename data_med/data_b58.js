(function(){
/* Internal Medicine MDCU66 RoB (R2) MCQ — IM66BQ (สมุด GoodNotes "MCQ Med For All" ของรุ่นพี่ MDCU75, Part 2 = MCQ_Med_For_All_4.pdf)
   หน้า 79 = หน้าคั่น "MDCU66 R2" · หน้า 80 หัว "ROTATE 2/56 AC MEDICINE" (2556 − 2490 = 66 ตรงกับหน้าคั่น)
   ⚠ หน้า 80 ส่วน OSCE (11 สถานี) และ MEQ (4 ข้อ) ถูกกล่องขาวปิดไว้ทั้งหมด (มองไม่เห็นในหน้าสมุด) — อ่านจาก text layer และ render ใหม่แบบเอากล่องขาวออก → ลงใน osce_b21.js (IMO66BQ) และ meq_b14.js (IME66BQ)
   ส่วน MCQ มองเห็นได้ มี recall ข้อเดียว (ข้อ 71) · orig = เลขข้อในสมุด · ไม่ข้ามข้อใด (1/1) · ตามเฉลยสมุด · ไม่มีรูปโจทย์ */
const A_=o=>Object.assign({set:"MDCU66",ro:"RoB",file:"IM66BQ",kfile:"IM66BQ",mnemonic:"",guide:"",notes:""},o);
QB.push(
A_({page:80,page2:80,orig:"71",kimg:["mk66b_71","mk66b_71_2"],
 key:"C d4T — วงชมพูที่ C + ส้ม '= stavudine' · ช้อย A AZT มีลายมือแดง 'lamivudine' ขีดฆ่าทิ้ง (เขียนผิด) · ไฮไลต์เขียว lipodystrophy · แปะสไลด์ NRTI major side effects (+ ลายมือ) และ Protease inhibitors (PIs)",
 stem:"Which antiretroviral drug most commonly causes lipodystrophy?",
 gray:"71.ยาต้านไวรัสใดทำให้เกิด lipodystrophy A.AZT B.ddI C.d4T D.3TC E.Abacavir · สไลด์: All NRTIs: lactic acidosis, hepatic steatosis & lipodystrophy (higher in d4T) — ลายมือ 'กลไก: ยา ⊖ mt DNA'",
 opts:["AZT","ddI","d4T","3TC","Abacavir"],
 ans:2,opinion:"ตามเฉลยสมุด: <b>stavudine (d4T)</b> ทำให้ lipoatrophy/lipodystrophy มากที่สุดในกลุ่ม NRTI (mitochondrial toxicity) — WHO เลิกแนะนำ d4T แล้ว (Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring)",
 notes:"stem แปลจากต้นฉบับ · ช้อยใช้ตัวย่อตามต้นฉบับ (คำอธิบายบอกชื่อเต็ม)",
 seen:"",
 interp:"Lipodystrophy (lipoatrophy ใบหน้า แขนขา ก้น) จาก NRTI → d4T สูงสุด (รองลงมา AZT, ddI)",
 why:"<b>NRTI major side effects (สไลด์)</b>: <b>ทุกตัว</b>: lactic acidosis, hepatic steatosis และ <b>lipodystrophy (higher in d4T)</b> — กลไก (ลายมือ): ยายับยั้ง mitochondrial DNA polymerase γ → mitochondrial toxicity · พบมากใน thymidine analogues/'d-drugs' รุ่นเก่า: <b>d4T (stavudine)</b> &gt; AZT (zidovudine) &gt; ddI (didanosine) · d4T ยังทำให้ peripheral neuropathy, pancreatitis (โดยเฉพาะร่วมกับ ddI) · AZT: bone marrow suppression (macrocytic anemia, neutropenia), myopathy · <b>Lamivudine (3TC) และ emtricitabine (FTC)</b>: well tolerated (SE ต่ำมาก), เป็นส่วนหนึ่งของทุก recommended regimen, active ต่อ HBV (ใช้ในคน co-infection HBV) · <b>Tenofovir (TDF)</b>: kidney toxicity (proximal tubulopathy, Fanconi) และ bone toxicity (ลด bone mineral density); TDF &gt; TAF (TAF มี SE ต่ำกว่า); active ต่อ HBV (tenofovir เป็น first-line anti-HBV ด้วย) · <b>Abacavir (ABC)</b>: ต้องตรวจ <b>HLA-B*5701</b> ก่อนให้ เพื่อป้องกัน hypersensitivity reaction; อาจเพิ่มความเสี่ยง MI<br><b>Protease inhibitors (สไลด์)</b> = substrate analogs ของ HIV protease · boosting drugs: ritonavir (RTV), cobicistat (PI enhancer) · แนะนำ: darunavir (DRV), atazanavir (ATV) · อื่น ๆ: fosamprenavir, indinavir, nelfinavir, saquinavir, tipranavir · กลไก: จับและยับยั้ง HIV protease ทำให้ตัด polyprotein เป็นโปรตีนทำงานไม่ได้ → ไวรัส immature ไม่ติดเชื้อ · ปัญหา: อาหารรบกวนการดูดซึม, drug interaction สูง (CYP450 inducer/inhibitor) · SE: <b>abnormal body fat distribution</b> (central fat accumulation, buffalo hump), insulin resistance, dyslipidemia (metabolic SE) · ปัจจุบัน first-line WHO: TDF + 3TC (หรือ FTC) + dolutegravir (TLD) — INSTI สัมพันธ์น้ำหนักเพิ่ม",
 wrong:{"A":"AZT (zidovudine) ทำให้ lipoatrophy ได้แต่น้อยกว่า d4T; เด่นเรื่อง bone marrow suppression (macrocytic anemia)","B":"ddI (didanosine) — pancreatitis, peripheral neuropathy; lipoatrophy น้อยกว่า d4T","D":"3TC (lamivudine) well tolerated ผลข้างเคียงต่ำมาก","E":"Abacavir — hypersensitivity (HLA-B*5701), อาจเพิ่ม MI"},
 trap:"Lipodystrophy จาก NRTI = lipoatrophy (d4T); จาก PI = fat accumulation + metabolic syndrome",
 summary:["d4T: lipoatrophy, peripheral neuropathy, lactic acidosis, pancreatitis — เลิกใช้แล้ว","AZT: anemia/neutropenia, myopathy","TDF: Fanconi/proximal tubulopathy, ลด BMD (TAF น้อยกว่า)","ABC: HLA-B*5701 hypersensitivity, ↑MI","PIs: dyslipidemia, insulin resistance, fat redistribution, CYP interaction"],
 variants:["ผู้ป่วย HIV ได้ AZT มีซีด MCV สูง → AZT-induced bone marrow suppression","ผู้ป่วยได้ TDF มี glycosuria + hypophosphatemia + proteinuria → proximal tubulopathy → เปลี่ยนเป็น TAF/ABC"]})
);
})();

# R00.A ส่วน 2 (หน้า 3–6) — exec จาก parts/r00a_qa.py
REFS.update({
 'EASLHCC': ('European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of hepatocellular carcinoma. J Hepatol 2025;82:315–374 (แทนฉบับ 2018)', 'https://doi.org/10.1016/j.jhep.2024.08.028'),
 'BCLC': ('Reig M, et al. BCLC strategy for prognosis prediction and treatment recommendation: The 2025 update. J Hepatol 2025;83(5):1234–1248 (เพิ่ม ALBI/AFP, แบ่ง B1–B3, กรอบ CUSE)', 'https://doi.org/10.1016/j.jhep.2025.10.020'),
 'AASLD': ('Singal AG, et al. AASLD Practice Guidance on prevention, diagnosis, and treatment of hepatocellular carcinoma. Hepatology 2023;78:1922–1965', 'https://doi.org/10.1097/HEP.0000000000000466'),
 'EASLCCA': ('European Association for the Study of the Liver; ILCA. EASL-ILCA Clinical Practice Guidelines on the management of intrahepatic cholangiocarcinoma. J Hepatol 2023;79:181–208 · Vogel A, et al. Biliary tract cancer: ESMO Clinical Practice Guideline. Ann Oncol 2023;34:127–140', 'https://doi.org/10.1016/j.jhep.2023.03.010'),
})

# =====================================================================================  3 Acute pancreatitis
def b3(p):
    h = f'<div class="iointro"><b>Pancreatitis</b> — "เป็นโรคเมด แต่ต้องรู้พอสมควร" · ต้องแยก acute vs chronic ก่อน · ข้อสอบชอบถาม <b>acute</b> · approach 4 ขั้น: {imp("Dx → Severity → Cause → Principle of Mx")} · อาจารย์: <b>"เรื่อง LC ใน gallstone pancreatitis พี่เพิ่งออกข้อสอบปี 5 ไป"</b></div>\n'
    h += box('① Diagnosis (2 ใน 3) + ② Severity', '', ol(
        '<b>Clinical typical</b>: ปวดท้องรุนแรงร้าวทะลุหลัง นั่งงอตัวดีขึ้น (retroperitoneal organ)',
        '<b>Amylase / lipase &gt; 3 เท่า</b> upper normal limit',
        '<b>Imaging</b> เข้าได้ (U/S, CT, MRI)')
        + '<p><b>Severity</b> — มีหลาย score แต่ <b>ไม่มี standard</b> แล้วแต่จะใช้ · อาจารย์ใช้ <b>BISAP</b> (ข้อสอบไม่ถามตัวเลข แต่ถ้า organ failure เยอะ = severe) · Ranson แยก alcohol กับ biliary</p>'
        + tb(['BISAP (≥3 = severe/เสี่ยงตาย)', ''], ['<b>B</b>UN', '&gt;25 mg/dL'], ['<b>I</b>mpaired mental status', 'GCS &lt;15'], ['<b>S</b>IRS', '≥2 ข้อ'], ['<b>A</b>ge', '&gt;60'], ['<b>P</b>leural effusion', 'บน imaging'])
        + tb([E + ' Revised Atlanta 2012', 'นิยาม'],
             ['Mild', 'ไม่มี organ failure · ไม่มี local/systemic complication'],
             ['Moderately severe', 'organ failure <b>ชั่วคราว (&lt;48 ชม.)</b> และ/หรือ local/systemic complication'],
             ['Severe', f'{imp("persistent organ failure &gt;48 ชม.")} (modified Marshall ≥2: resp/CVS/renal)'])
        + f'<p class="mut">{E} BISAP/Ranson เป็นตัว<b>ทำนาย</b> ส่วน severity "จริง" ตามนิยาม Atlanta ดูจาก organ failure ที่คงอยู่ &gt;48 ชม. {p.R("ATL")} · CT ไม่จำเป็นวันแรกถ้า dx ชัด — ทำเมื่อ dx ไม่ชัด หรือไม่ดีขึ้นใน 48–72 ชม. {p.R("ACGAP")}</p>')
    h += box('③ Cause', '', ul(
        f'Most common = {imp("Gallstone (biliary) pancreatitis")} — <b>passing stone</b> เล็ก ๆ ผ่าน CBD → sphincter of Oddi บวม → back pressure เข้า pancreatic duct → inflammation · <b>ส่วนใหญ่ไม่มี retained CBD stone</b>',
        'Alcohol: ส่วนใหญ่มี <b>chronic มาก่อน แล้ว acute on top</b>')
        + f'<p class="mut">{E} alcohol ทำให้เกิด AP ครั้งแรกได้จริง (มักหลังดื่มหนักหลายปี) จึงยังนับเป็นสาเหตุ acute อันดับ 2 · สาเหตุอื่น: <b>hypertriglyceridemia (TG &gt;1,000 mg/dL)</b> — อันดับ 2 ในเอเชียบางประเทศ, hypercalcemia, post-ERCP, ยา (azathioprine, valproate), trauma, tumor/IPMN {p.R("ACGAP")}</p>')
    h += box('④ Principle of management (3 ข้อ — เห็นใน choice ให้ตอบ) ' + MK, '', ol(
        f'{imp("Aggressive volume resuscitation")} — กลัว pancreas perfusion ไม่ดี → <b>necrosis</b> → local complications',
        '<b>Adequate pain control</b>',
        f'{imp("Early enteral nutrition")} — protect gut mucosa · ลด bacterial translocation · ลด infectious complication')
        + ul('<b>Mild</b>: principle 3 ข้อ + observe', '<b>Severe</b>: <b>ICU close monitoring</b> (organ failure: heart, lung, kidney) · support organ, intubate · รักษาตาม cause')
        + f'<p>{UPD_} "aggressive" → ปัจจุบัน <b>moderate, goal-directed</b>: WATERFALL 2022 aggressive (LR bolus 20 mL/kg + 3 mL/kg/h) → <b>fluid overload 20.5% vs 6.3%</b> (moderate) โดย outcome ไม่ดีขึ้น — trial หยุดก่อนกำหนด {p.R("WATER")} · ACG 2024: LR ~1.5 mL/kg/h + bolus 10 mL/kg ถ้า hypovolemic, ประเมินซ้ำบ่อย {p.R("ACGAP")}</p>'
        + gl('ACG 2024 · IAP 2025',
             f'<b>Lactated Ringer</b> ดีกว่า NSS · ไม่ให้ <b>prophylactic antibiotics</b> แม้ severe/sterile necrosis · mild: ให้กินทางปากเร็ว (ภายใน 24–48 ชม.) ไม่ต้องรอ lipase ลง · severe: enteral (NG ได้เท่า NJ) ดีกว่า TPN {p.R("ACGAP")} {p.R("IAP25")}'))
    h += box('Gallstone pancreatitis — เมื่อไหร่ทำ LC / ERCP ' + MK, '', tb(['', 'Mild', 'Severe'],
        ['LC', f'{imp("same admission")} เมื่อ subside: หายปวด, hemodynamic ดี, urine ออก, กินได้', f'supportive จนดีขึ้น → D/C → นัด <b>elective LC ~8 wk (2 เดือน)</b>'],
        ['เหตุผล', 'ถ้า wait and see → recurrent biliary event (pancreatitis ซ้ำ, cholecystitis, cholangitis) <b>~30% ใน 3 เดือน</b>', '—'])
        + f'<p>{FIX("⚠ ตัวเลข")} "~30% ใน 3 เดือน" ที่อาจารย์พูด ไม่ใช่ตัวเลขจาก RCT — <b>PONCHO</b> (interval LC 25–30 วัน): readmission/ตายจาก gallstone complication <b>16.9% vs 4.7%</b> (same-admission) · pancreatitis ซ้ำ 9% vs 2% {p.R("PONCHO")} → หลักการเหมือนเดิม: mild = LC ใน admission เดียวกัน</p>'
        + f'<p class="mut">{E} PONCHO {p.R("PONCHO")} · severe/necrotizing: ACG/IAP ให้รอจน collection ยุบหรือ <b>≥6 สัปดาห์</b> (อาจารย์ 8 สัปดาห์ = อยู่ในช่วงนี้) {p.R("ACGAP")}</p>'
        + f'<h4>{imp("ERCP")} — ส่วนใหญ่ passing stone จึง <b>ไม่ต้อง</b> ERCP · มี indication เมื่อ</h4>' + ol(
        '<b>Cholangitis</b> ร่วมด้วย (fever, chills, jaundice)',
        '<b>Retained CBD stone</b> เห็นใน CT/MRCP (stone ไม่หลุด)')
        + tb(['Timing (อาจารย์)', ''], ['<b>Emergency ≤24 ชม.</b>', 'toxic cholangitis, hemodynamic unstable'], ['<b>Early ≤72 ชม.</b>', 'retained stone / cholangitis ที่ไม่แย่มาก'])
        + ul('ชั่ง risk–benefit เพราะ ERCP ทำให้เกิด <b>post-ERCP pancreatitis</b> ได้ (ถ้า cannulate เข้า pancreatic duct)',
             f'{hw("✎ โน้ต: “เหลือง &gt; 4” = ระวัง retained CBD stone + cholangitis")} {E} ASGE 2019: TB &gt;4 mg/dL <b>ร่วมกับ</b> CBD dilated = high likelihood CBD stone → ERCP {p.R("ASGECBD")}')
        + gl('ACG 2024 · TG18',
             f'AP + <b>cholangitis → urgent ERCP ภายใน 24 ชม.</b> · ไม่ทำ early ERCP routine ใน biliary pancreatitis ที่ไม่มี cholangitis/obstruction ต่อเนื่อง {p.R("ACGAP")}',
             f'TG18 cholangitis: grade I ATB (drain ถ้าไม่ตอบใน 24 ชม.) · grade II <b>early drainage</b> · grade III <b>urgent drainage</b> หลัง stabilize {p.R("TGAC")}'))
    h += box('Local complications (Revised Atlanta) — แบ่งที่ 4 สัปดาห์', '', tb(['ชนิด pancreatitis', '&lt; 4 สัปดาห์', '&gt; 4 สัปดาห์ (มี wall ห่อ)'],
        ['Interstitial edematous (น้ำใส)', 'APFC — acute peripancreatic fluid collection', f'<b>Pancreatic pseudocyst</b> {hw("(มักรอด)")}'],
        ['Necrotizing (เนื้อตาย)', 'ANC — acute necrotic collection', f'{imp("WON — walled-off necrosis")}'])
        + f'<p>{FIX()} อาจารย์เรียก "APC: acute peripancreatic necrosis" และ "wall of necrosis" → ชื่อตาม Atlanta คือ <b>ANC (acute necrotic collection)</b> และ <b>walled-off necrosis</b> {p.R("ATL")}</p>'
        + ul('<b>4 wk แล้วแยก pseudocyst vs WON ยังไง?</b> → ต้องรู้ตั้งแต่ <b>CT แรก</b> ว่าเป็น fluid collection (→ pseudocyst) หรือ necrosis (→ WON) · มี follow-up CT เป็นระยะ · amylase สูงค้าง ชวน pseudocyst',
             'Fluid collection: ไม่ค่อยมีอะไร · Necrosis: ระวัง <b>infected pancreatic necrosis</b> → organ failure → close monitoring',
             f'Infected necrosis + ongoing SIRS → {imp("step-up approach")}: drain (PCD) → laparoscopic/endoscopic necrosectomy → open surgery สุดท้าย')
        + gl('PANTER 2010 · AGA 2020 · IAP 2025',
             f'Step-up (percutaneous/endoscopic drainage → minimally invasive necrosectomy) ลด major complication/death เทียบ open necrosectomy · <b>เลื่อนการ intervene จนเป็น walled-off (~4 สัปดาห์)</b> ถ้าทำได้ · สงสัย infected: gas ใน collection / แย่ลงสัปดาห์ 2 → ATB ที่เข้า necrosis ได้ (carbapenem, quinolone + metronidazole) {p.R("PANTER")} {p.R("IAP25")}',
             'Pseudocyst ไม่มีอาการ → ไม่ต้องทำอะไร (เลิกใช้กฎ "&gt;6 cm &gt;6 wk") · มีอาการ/ติดเชื้อ → endoscopic (EUS-guided) cystgastrostomy'))
    return h
add('R00.A-3', 'Acute pancreatitis — Dx 2/3, BISAP vs Revised Atlanta, cause, 3 principles (moderate LR ตาม WATERFALL), gallstone pancreatitis: LC timing & ERCP, local complications & step-up', ['Pancreas & Spleen', 'Gallbladder & Biliary'],
    ['ATL', 'ACGAP', 'IAP25', 'WATER', 'PONCHO', 'PANTER', 'ASGECBD', 'TGAC'], b3)

# =====================================================================================  4 Bowel: SBS, LBO, Ogilvie, SBO, volvulus
def b4(p):
    h = f'<div class="iointro"><b>Bowel</b> — Short bowel syndrome · colonic obstruction (CA, closed loop) · megacolon/Ogilvie · small bowel obstruction · sigmoid/cecal volvulus · อาจารย์: {imp("large bowel กับ small bowel obstruction คิดคนละแบบ — ต้องแยกให้ได้ก่อน")}</div>\n'
    h += box('Short bowel syndrome (SBS)', '', ul(
        'นิยามปัจจุบัน: หลัง bowel resection แล้ว <b>main function ของ small bowel</b> (absorb fluid, electrolyte, nutrition) เสียไป maintain ไม่ได้',
        f'ตัวเลข: เหลือ small bowel {imp("&lt;200 cm")} (ไม่มี IC valve) · ถ้า preserve <b>IC valve</b> ได้ accept ถึง ~120–150 cm',
        '<b>IC valve</b>: ชะลอ transit ไม่ให้ content ไหลเข้า colon เร็ว → อยู่ใน small bowel นาน ดูดซึมได้มากขึ้น',
        'สาเหตุ: <b>vascular (SMA embolism/occlusion)</b> · adhesive SBO ที่มาช้า/ผ่าช้า ต้องตัดซ้ำ ๆ (recurrent)',
        'Subtype: <b>jejunoileal</b> (ตัดแล้วต่อกันได้) = ดีสุด · <b>end jejunostomy</b> (เหลือ jejunum สั้น ๆ) = แย่สุด โอกาสตายสูง',
        '<b>Acute phase</b>: เสีย fluid/electrolyte มาก → correct ให้ทัน ไม่งั้น <b>AKI</b> → PN → home TPN',
        f'{imp("Adaptation phase")} 6 เดือน – 2 ปี: bowel เพิ่ม villi เพิ่ม surface area → function กลับมา',
        'สรุป: โรคนี้ <b>เสีย nutrition + electrolyte</b> ("resident ยังไม่รู้เลย")')
        + tb([E + ' Anatomical type (ESPEN)', 'ลักษณะ', 'ความยาวที่ทำนายว่าต้องพึ่ง PN'],
             ['Type 1: end-jejunostomy', 'ไม่มี colon ต่อ — เสียน้ำ/Na มากสุด', '&lt; ~115 cm'],
             ['Type 2: jejunocolic', 'jejunum ต่อ colon บางส่วน (ไม่มี ICV)', '&lt; ~60–65 cm'],
             ['Type 3: jejunoileocolic', 'มี terminal ileum + <b>ICV</b> + colon ครบ — ดีสุด', '&lt; ~30–35 cm'])
        + f'<p>{FIX("⚠ ปรับตัวเลข")} "มี IC valve accept ถึง 120–150 cm" ไม่ตรงกับเกณฑ์มาตรฐาน — นิยาม SBS ใช้ <b>&lt;200 cm</b> ทุกแบบ ส่วนความยาวที่ทำนาย PN dependence ขึ้นกับว่ามี colon/ICV ต่อหรือไม่ (ตารางบน) {p.R("ESPENCIF")} {p.R("MESSING")}</p>'
        + f'<p class="mut">{E} Mx เพิ่ม: PPI (gastric hypersecretion ช่วงแรก), loperamide/codeine, จำกัดน้ำ hypotonic + ดื่ม <b>ORS Na ≥90 mmol/L</b> ใน jejunostomy, <b>teduglutide (GLP-2 analog)</b> ช่วย adaptation · ผ่าตัด lengthening (STEP, Bianchi), intestinal transplant · ภาวะแทรกซ้อน: catheter sepsis, IFALD, <b>oxalate stone</b> (มี colon), gallstone, B12 deficiency (ตัด ileum), D-lactic acidosis {p.R("ESPENCIF")}</p>')
    h += box('Colonic (large bowel) obstruction', '', ul(
        f'ส่วนใหญ่ lesion อยู่ <b>left side</b> · most common = {imp("cancer (CA sigmoid)")} · อื่น ๆ (เช่น diverticular stricture) เจอน้อยมาก',
        f'{imp("Mechanical ไว้ก่อน until proven otherwise")} → <b>CT with IV contrast เสมอ</b> (miss cancer = delay diagnosis)',
        f'สำคัญ: ดูว่า <b>small bowel dilate ไหม</b> → <b>IC valve competent</b> (small bowel ไม่ dilate) = {imp("closed loop")} (ตันทั้งที่ sigmoid และ ICV) → <b>cecum บาง ขยายมาก → ischemia → perforate</b> = severity มากกว่า',
        'ICV incompetent: ลมไหลย้อนเข้า small bowel ได้ → ยังมีเวลาจัดการ')
        + f'<p class="mut">{E} กฎ Laplace: cecum มีเส้นผ่านศูนย์กลางใหญ่สุด → แรงตึงผนังมากสุด · <b>cecum &gt;12 cm</b> (โดยเฉพาะนาน &gt;6 วัน) เสี่ยงทะลุ {p.R("ASCRSV")}</p>'
        + gl('WSES 2017 colorectal cancer emergencies',
             f'Obstructive <b>left</b> colon cancer: emergency resection with primary anastomosis (± diverting stoma) ดีกว่า Hartmann ถ้าคนไข้/ศัลยแพทย์พร้อม · Hartmann สำหรับ high-risk · <b>SEMS เป็น bridge to surgery</b> ได้ (ระวังผลระยะยาว) · obstructive <b>right</b> colon cancer → right colectomy {p.R("WSESCRC")}'))
    h += box('Megacolon / Ogilvie syndrome (ACPO)', '', ul(
        '"megacolon เป็นโรคเมด" — colon ไม่ทำงาน (ileus) ในคนแก่ · ต้องแยกจาก mechanical ด้วย <b>CT with IV contrast</b>',
        '<b>Ogilvie (pseudo-colonic obstruction)</b>: bedridden, Parkinson/neuro disease, ยา (morphine ขนาดมาก เช่น post-op ortho), electrolyte imbalance → colon dilate ถึง ~splenic flexure, bowel sound เงียบ',
        '<b>Tx</b>: รักษา cause — hold morphine, ambulate, correct electrolyte, ให้ยา Parkinson',
        'ไม่หาย → <b>neostigmine</b> (anticholinesterase) — ใช้น้อยเพราะ side effect เยอะ: ห้ามใน heart disease, ไตวาย, (COPD/asthma)',
        'ให้ยาไม่ได้/ไม่ได้ผล → <b>colonoscopic decompression</b> (ดูดลม ดูดอุจจาระ)',
        f'<b>Toxic megacolon</b> = megacolon ที่ bowel ตาย/toxic')
        + f'<p>{FIX()} {hw("✎ โน้ต: “ให้ยา anticholinergic neostigmine”")} → neostigmine เป็น <b>anticholinesterase (acetylcholinesterase inhibitor)</b> = เพิ่ม acetylcholine กระตุ้นการบีบตัวของ colon — <b>ตรงข้าม</b>กับ anticholinergic (อาจารย์พูด "anticholinesterase" ถูกแล้ว) {p.R("PONEC")}</p>'
        + f'<p class="mut">{E} neostigmine <b>2 mg IV ช้า ๆ 3–5 นาที</b> + cardiac monitor, เตรียม atropine · RCT (Ponec 1999): <b>10/11</b> decompress ทันที (มัธยฐาน 4 นาที) vs placebo 0/10 · bradycardia ต้องใช้ atropine 2/11 {p.R("PONEC")} · CI: mechanical obstruction, perforation/ischemia, bradycardia, recent MI, active bronchospasm, renal failure (relative) · ผ่าตัดเมื่อ ischemia/perforation หรือดื้อทุกวิธี {p.R("ASCRSV")} · Toxic megacolon มักจาก <b>UC / <i>C. difficile</i></b>: transverse colon &gt;6 cm + systemic toxicity → medical 24–72 ชม. ไม่ดีขึ้น/ทะลุ → <b>subtotal colectomy + end ileostomy</b></p>')
    h += box('Small bowel obstruction (SBO)', '', ul(
        '<b>4 cardinal signs</b>: colicky pain (บิดเป็นลูก ๆ), nausea/vomiting เด่น, distension, obstipation (ไม่ถ่ายไม่ผายลม)',
        'Film: <b>small bowel &gt;3 cm</b> · <b>different height in same loop</b> / air-fluid level (step-ladder) · <b>disproportion</b> = air ใน small bowel เยอะแต่ไม่เห็น air ใน colon/rectum',
        f'Most common = {imp("adhesion")} · เคยผ่าตัด + clinical/film เข้าได้ → คิด adhesive ได้เลย · <b>virgin abdomen</b> → ต้อง <b>CT abdomen</b> หา cause อื่น (แต่ adhesive ก็ยังเป็นได้)')
        + '<h4>Adhesive SBO — ผ่าตัดเมื่อไหร่</h4>' + tb(['', 'อาจารย์'],
        ['Obvious', 'มาช้า delay, <b>bowel ischemia</b>, perforation → <b>generalized peritonitis</b>, HR เร็ว, ไข้ → ผ่าตัด'],
        ['Prone จะ bowel ตาย', '<b>complete SBO</b>: ไม่ผายลม + severe colicky pain · NG ออก <b>feculent</b> (small bowel content ค้างนาน fermentation — ไม่ใช่อุจจาระจริง แต่บอก complete + distal) · <b>visible peristalsis</b> (คนผอม) → ผ่าก่อน bowel ตาย (lysis adhesion)'],
        ['ไม่มี indication', '<b>Conservative</b>: NPO, NG + suction, IV fluid, close observe abdominal sign'])
        + f'<p>{FIX("⚠ เทียบ guideline")} Bologna 2017: ข้อบ่งชี้ผ่าตัดทันที = <b>peritonitis, strangulation/ischemia</b> (CT: wall enhancement ลดลง, mesenteric edema/fluid, closed loop, whirl, pneumatosis/portal venous gas) — complete obstruction, feculent NG และ visible peristalsis เป็น <b>ตัวบอกโอกาส NOM ล้มเหลว</b> มากกว่าข้อบ่งชี้เด็ดขาด {p.R("BOLOGNA")}</p>'
        + gl('Bologna guidelines (WSES ASBO) 2017',
             f'ไม่มี strangulation/peritonitis → <b>NOM</b> (NG decompression) · ให้ <b>water-soluble contrast (Gastrografin)</b>: ถ้าไม่ถึง colon ภายใน 24 ชม. ทำนาย NOM ล้มเหลว → ผ่าตัด · NOM ได้ถึง <b>72 ชม.</b> ไม่ดีขึ้น → surgery {p.R("BOLOGNA")}'))
    h += box('Sigmoid vs Cecal volvulus ' + MK, '', tb(['', 'Sigmoid (most common)', 'Cecal (น้อยกว่า)'],
        ['ใคร', 'คนแก่ <b>bedridden</b>, redundant sigmoid · chronic constipation', f'{E} หญิงอายุน้อยกว่า'],
        ['อาการ', 'left-sided colonic obstruction: ท้องอืด แน่น ท้องโตมาก ลมเต็ม · <b>ไม่ค่อย pain</b>', 'คล้ายกัน'],
        ['Film', f'{imp("coffee bean sign")}: จุดหมุนล่างซ้าย (pelvis) → โค้งโป่งไป <b>RUQ</b>', 'จุดหมุนล่างขวา → โป่งไป <b>LUQ</b> ("embryo/kidney sign") = ตรงข้ามกัน'],
        ['Tx', 'peritonitis/sepsis → <b>ผ่าตัด</b> · ไม่มี → <b>colonoscopic detorsion</b> (เป่าลมคลาย + ดู mucosa viable) → admit observe → <b>elective sigmoidectomy same admission (~7 วัน)</b> ไม่งั้น recurrent', f'{E} <b>segmental resection (right hemicolectomy)</b> — ไม่แนะนำ endoscopic reduction'])
        + ul('<b>Haustration</b> = ลักษณะทั่วไปของ colon (ใช้แยก large vs small bowel dilatation: small bowel เห็น <b>valvulae conniventes</b> ครบวง) — ไม่ได้ specific ต่อ volvulus · dilate มาก ๆ haustra อาจหายไป')
        + gl('ASCRS 2021 colonic volvulus & ACPO',
             f'Sigmoid volvulus ไม่มี ischemia/peritonitis → <b>endoscopic detorsion</b> แล้ว <b>sigmoid colectomy ใน admission เดียวกัน</b> (recurrence สูงถ้าไม่ผ่า) · endoscopic fixation เฉพาะคนที่ผ่าไม่ได้ · cecal → segmental resection {p.R("ASCRSV")}',
             f'Contrast enema (water-soluble) เห็น "<b>bird\'s beak</b>" ที่จุดบิด · CT ยืนยัน (whirl sign) {p.R("ASCRSV")}'))
    return h
add('R00.A-4', 'Bowel — short bowel syndrome (types, adaptation), colonic obstruction & closed loop, Ogilvie/megacolon & neostigmine, adhesive SBO (Bologna), sigmoid vs cecal volvulus', ['Small bowel & Obstruction', 'Colorectal & Anorectal', 'Fluid, Electrolyte & Nutrition'],
    ['ESPENCIF', 'MESSING', 'ASCRSV', 'PONEC', 'BOLOGNA', 'WSESCRC'], b4)

# =====================================================================================  5 Peri-op: antiplatelet, ERAS, nutrition, drains, sutures
def b5(p):
    h = f'<div class="iointro"><b>Perioperative & general surgery basics</b> — aspirin/clopidogrel ก่อนผ่าตัด · <b>ERAS</b> (อาจารย์: "ชอบออกว่า <b>ข้อใดไม่ใช่ ERAS</b> — ต้องไปเปิดอ่านเอง") · nutrition ก่อน/หลังผ่าตัด · surgical drains · suture materials</div>\n'
    h += box('Aspirin / antiplatelet ก่อนผ่าตัด', '', tb(['Setting', 'อาจารย์'],
        ['Elective — aspirin <b>primary prophylaxis</b> (กัน stroke ฯลฯ ไม่ใช่ treatment)', f'{imp("หยุด 7 วัน")} ก่อนผ่าตัด'],
        ['Elective — เคย ischemic heart / <b>ใส่ stent</b>', 'ถาม cardio — ถ้ากลัว <b>stent thrombosis</b> → <b>ไม่หยุด</b> (aspirin bleed ไม่มาก)'],
        ['Emergency + on aspirin', '<b>ผ่าได้เลย</b>'],
        ['Emergency + on <b>clopidogrel</b>', f'{imp("bleed มาก — เตรียม platelet")} · elective ต้องหยุด'])
        + f'<p>{UPD_} CHEST 2022: elective noncardiac surgery <b>แนะนำให้ aspirin ต่อ</b> (conditional) โดยเฉพาะ secondary prevention/stent · ถ้าจะหยุด (ผ่าตัด bleeding risk สูง เช่น intracranial, spine, TURP, posterior eye) ให้หยุด <b>≤7 วัน</b> · P2Y12: <b>clopidogrel 5 วัน, ticagrelor 3–5 วัน, prasugrel 7 วัน</b> {p.R("CHEST")}</p>'
        + gl('2024 AHA/ACC perioperative guideline',
             f'หลัง PCI ด้วย <b>DES</b>: เลื่อน elective surgery <b>≥6 เดือน</b> (ถ้า PCI จาก ACS/complex → ~12 เดือน) · time-sensitive ทำได้หลัง <b>3 เดือน</b> · <b>ห้ามผ่า elective ใน 30 วันแรก</b> · BMS ≥30 วัน, balloon angioplasty ≥14 วัน · <b>aspirin ต่อ</b>ใน stent/MI/stroke {p.R("ACCAHA")}'))
    h += box('ERAS — "ข้อใดไม่ใช่ ERAS" ' + MK, '', '<p>อาจารย์ยกตัวอย่างที่ <b>เป็น</b> ERAS: <b>เคี้ยว gum</b> · pain control ด้วย <b>NSAIDs</b> / หลีกเลี่ยง opioid (epidural ฯลฯ) · <b>ไม่ใส่ NG</b>, <b>ไม่ใส่ Foley</b> (หรือถอดเร็ว) · <b>early ambulation</b> · <b>NPO 2 ชม.</b> (clear fluid) · <b>carbohydrate loading</b></p>'
        + tb([E + ' ช่วง', 'ERAS (✓ = เป็น ERAS)', '✗ ไม่ใช่ ERAS (ตัวลวงข้อสอบ)'],
             ['Pre-admission', '✓ ให้ข้อมูล/counselling · หยุดบุหรี่-เหล้า ~4 wk · คัดกรอง/แก้ anemia + nutrition', '✗ ไม่ประเมินอะไรก่อน'],
             ['Pre-op', '✓ งดอาหารแข็ง 6 ชม. <b>clear fluid ถึง 2 ชม.</b> · <b>carbohydrate drink</b> · VTE + ATB prophylaxis · PONV prophylaxis', '✗ <b>NPO after midnight</b> · ✗ long-acting sedative premed · ✗ mechanical bowel prep อย่างเดียว routine'],
             ['Intra-op', '✓ <b>MIS (laparoscopy)</b> · short-acting anesthesia · <b>normothermia</b> · goal-directed fluid (balance ใกล้ศูนย์/บวกเล็กน้อย)', '✗ liberal IV fluid · ✗ <b>routine NG tube</b> · ✗ <b>routine drain</b>'],
             ['Post-op', '✓ multimodal <b>opioid-sparing</b> (paracetamol + NSAID, TAP/epidural ใน open) · <b>early oral feeding</b> ภายใน 24 ชม. · <b>chewing gum</b> · <b>early mobilization</b> · ถอด <b>Foley ≤24 ชม.</b> · glucose control · audit', '✗ morphine PCA เป็นหลัก · ✗ bed rest · ✗ รอ flatus ค่อยเริ่มกิน · ✗ ใส่ Foley หลายวัน'])
        + f'<p class="mut">{E} ERAS Society colorectal <b>2025</b> (แทน 2018): <b>prehabilitation ไม่ได้แนะนำเฉพาะเจาะจงแล้ว</b>, immunonutrition พิจารณาในคน malnourished, ชอบ fluid balance <b>บวกเล็กน้อย</b> มากกว่า restrictive {p.R("ERAS25")}</p>')
    h += box('Nutrition ก่อน/หลังผ่าตัด', '', ul(
        f'GI tract cancer + <b>severe malnutrition</b> → {imp("improve nutrition 1–2 สัปดาห์ก่อนผ่าตัดเสมอ")} ห้ามผ่าเลย — ลด infectious complication ชัดเจน โดยเฉพาะ <b>lung complication</b> (ไม่งั้นตายจาก MOF)',
        'Post-op กลุ่ม severe: <b>early</b> — เริ่มเมื่อ hemodynamic stable, off inotrope (~วันที่ 3–4)',
        'คนปกติไม่ malnourished: <b>NPO &gt;7 วัน</b> → เริ่ม nutrition support (PN)',
        f'{hw("ERAS ไม่ต้องพูดถึงในเรื่อง nutrition — คนละประเด็น")}')
        + gl('ESPEN clinical nutrition in surgery — Update 2025',
             f'<b>High metabolic risk</b> (มีข้อใดข้อหนึ่ง): น้ำหนักลด &gt;10–15% ใน 6 เดือน · BMI &lt;18.5 · NRS ≥5 หรือ SGA C · albumin &lt;30 g/L (ไม่มีโรคตับ/ไต) → ให้ nutrition therapy <b>10–14 วัน</b> แม้ต้องเลื่อนผ่าตัด (ทาง oral/enteral ก่อน; PN เฉพาะ EN ไม่ได้) {p.R("ESPENS")}',
             f'Immunonutrition 5–7 วันก่อนผ่าตัดใน GI cancer · หลังผ่าตัด: เริ่ม <b>EN ภายใน 24 ชม.</b> ถ้าคาดว่ากินได้ &lt;50% นาน &gt;7 วัน · EN ไม่ถึงเป้า → เสริม PN {p.R("ESPENS")}'))
    h += box('Surgical drains', '', tb(['ชนิด', 'ตัวอย่าง', 'ใช้เมื่อ (อาจารย์)'],
        ['<b>Closed suction</b>', 'Jackson-Pratt (JP), "Fortune" drain', 'ผ่าตัด<b>ในท้อง</b>ทุกชนิด'],
        ['<b>Closed (high vacuum ขวดแข็ง)</b>', 'Redivac', '<b>breast, thyroid</b>, wide excision soft tissue ที่ raw surface เยอะ'],
        ['<b>Open (passive/capillary, gravity)</b>', 'Penrose (คล้ายหลอดกาแฟ)', '<b>abscess ในท้อง</b> เช่น ruptured appendix · ไม่ต่อขวด ต้องครอบถุง (colostomy bag) record ยาก — "drain โบราณ" ค่อย ๆ short ออก'])
        + ul('<b>Therapeutic drain</b>: มีหนองเอาออกไม่หมด — ใช้ Penrose หรือ JP ก็ได้ (lap ใส่ Penrose ยาก → JP/Fortune) · ไม่มี standard = surgeon preference',
             '<b>Prophylactic drain</b>: ใส่ไว้ <b>detect</b> leak/bleeding เช่น หลัง anastomosis (right hemicolectomy), LC ที่ไม่มั่นใจ cystic duct stump',
             'Penrose ไม่เกี่ยวกับระยะห่างจาก skin · closed drain ใช้แทนได้แทบทั้งหมด')
        + f'<p class="mut">{E} หลักฐานปัจจุบัน: <b>ไม่ใส่ drain routine</b> หลัง colorectal anastomosis (ERAS) {p.R("ERAS25")} · complicated appendicitis: drain <b>ไม่ลด</b> intra-abdominal abscess แต่เพิ่มวันนอน (Cochrane 2021) {p.R("DRAINAPP")} · "Fortune" น่าจะเป็นชื่อเรียก/ยี่ห้อ closed-suction drain ที่ใช้ในรพ.</p>')
    h += box('Suture materials', '', '<p>แบ่งได้ 3 แบบ: <b>absorbable vs non-absorbable</b> (ใช้บ่อยสุด) · <b>monofilament vs multifilament (braided)</b> · <b>natural vs synthetic</b> (natural มีแค่ <b>catgut, silk</b>)</p>'
        + tb(['ไหม (ชนิด)', 'ใช้ (อาจารย์ + ' + E + ')', E + ' ระยะ (Ethicon)'],
             'Absorbable',
             ['<b>Catgut</b> (plain/chromic)<br><span class="mut">natural</span>', 'ส่วนใหญ่ใช้ทาง <b>สูติฯ</b> · ศัลย์แทบไม่ใช้แล้ว', 'แรงดึงหมด ~7–10 วัน (plain) · ดูดซึม ~70 วัน (plain) / ~90 วัน (chromic)'],
             ['<b>Vicryl</b> (polyglactin 910)<br><span class="mut">synthetic, <b>braided</b></span>', 'bowel anastomosis/repair, subcut, ปิด sheath, เย็บซ่อมทั่วไป, ผูก', 'แรงดึง 75% ที่ 2 wk · 50% ที่ 3 wk · 25% ที่ 4 wk · ดูดซึม 56–70 วัน'],
             ['<b>PDS II</b> (polydioxanone)<br><span class="mut">synthetic, <b>monofilament</b></span>', 'เหมือน Vicryl แต่<b>ลื่นกว่า</b> — bowel, <b>sheath/fascia closure</b> · อาจารย์ใช้ PDS มากกว่า', 'แรงดึง ~60% ที่ 6 wk (ขนาด ≥3-0) · ดูดซึม 182–238 วัน (~6 เดือน)'],
             ['<b>Monocryl</b> (poliglecaprone 25)<br><span class="mut">synthetic, monofilament</span>', '<b>subcuticular</b> skin', 'แรงดึง 50–60% ที่ 1 wk (undyed) · ดูดซึม 91–119 วัน'],
             'Non-absorbable',
             ['<b>Silk</b><br><span class="mut">natural, braided</span>', 'skin, <b>ผูก/เย็บ drain</b>, ligature', 'สลายช้ามาก (ปี)'],
             ['<b>Nylon</b> (Ethilon)<br><span class="mut">synthetic, mono</span>', '<b>skin</b> (เย็บแผล), drain', '—'],
             ['<b>Prolene</b> (polypropylene)<br><span class="mut">synthetic, mono</span>', f'{imp("vascular anastomosis")}, stop bleeding (venous/arterial), fascia, mesh fixation', 'ถาวร · reactivity ต่ำสุด'],
             ['<b>Polyester</b> (Ethibond/Mersilene)<br><span class="mut">synthetic, braided</span>', f'{E} tendon, cardiac valve', 'ถาวร'],
             ['<b>Stainless steel wire</b><br><span class="mut">mono/braided</span>', f'{E} sternum', 'ถาวร'], wrap=True)
        + f'<p>{FIX()} ในเทปพูด "polyester" อยู่กลุ่ม absorbable และ "PDS เป็น multifilament" → ที่ถูก: <b>polyester = non-absorbable braided</b> · <b>PDS = absorbable monofilament</b> (braided absorbable = Vicryl) · catgut "7–10 วัน" คือระยะคงแรงดึง ไม่ใช่ระยะละลายหมด {p.R("ETHICON")}</p>'
        + gl('EHS/AHS 2022 abdominal wall closure',
             f'ปิด midline laparotomy: <b>small-bite technique</b> (เย็บห่างขอบ ~5 mm ระยะห่าง ~5 mm) ด้วย <b>slowly absorbable monofilament</b> (เช่น PDS) continuous, suture length : wound length <b>≥4:1</b> → ลด incisional hernia {p.R("EHSAHS")}'))
    return h
add('R00.A-5', 'Perioperative — aspirin/clopidogrel & stents, ERAS (ข้อใดไม่ใช่), nutrition (ESPEN 2025), surgical drains, suture materials', ['Perioperative care & Surgical infection', 'Fluid, Electrolyte & Nutrition', 'Wound & Plastic'],
    ['CHEST', 'ACCAHA', 'ERAS25', 'ESPENS', 'DRAINAPP', 'ETHICON', 'EHSAHS'], b5)

# =====================================================================================  6 Liver: HCC, bridging, CCA
def b6(p):
    h = f'<div class="iointro"><b>มะเร็งตับ</b> — HCC: แยก <b>curative vs palliative</b> ก่อน · ถามตัวเองตามลำดับ {imp("ผ่าตัดได้ไหม → transplant ได้ไหม → ablation")} · TACE = palliative / bridging · Cholangiocarcinoma "คิดไม่เหมือน HCC"</div>\n'
    h += box('HCC — curative 3 วิธี ' + MK, '', tb(['', 'อาจารย์', E + ' guideline'],
        ['<b>Resection</b> (ดีสุดในทางปฏิบัติ)', 'ต้องเป็น <b>anatomical resection</b> · ดู liver factor: Child B/C, เหลือง &gt;2–3, <b>platelet &lt;100,000</b>, ascites, <b>significant portal HT</b> (เคย EV/GV bleed) → ตัดไม่ได้ (liver failure)', 'single tumor ไม่มี macrovascular invasion · <b>Child-Pugh A</b> (ALBI 1) · bilirubin ปกติ · <b>ไม่มี CSPH</b> (HVPG ≥10 mmHg / platelet &lt;100k + splenomegaly/varices) · FLR พอ (≥20–25% ตับปกติ, ≥30% chemo-injured, <b>≥40% cirrhosis</b>)'],
        ['<b>Liver transplant</b>', '"the best" แต่ organ จำกัด → พิจารณาเมื่อตัดไม่ได้เพราะ liver factor', '<b>Milan criteria</b>: 1 ก้อน ≤5 cm หรือ ≤3 ก้อนแต่ละก้อน ≤3 cm, ไม่มี vascular invasion/extrahepatic · AFP ช่วยคัดเลือก'],
        ['<b>Ablation</b> (RFA / MWA)', 'ก้อนเล็ก <b>≤2–3 cm</b>, อยู่ตื้น, ไม่ติด major vessel/bile duct (ความร้อน burn → complication) · คนไข้ไม่ fit ผ่าใหญ่', '≤3 cm = curative เทียบ resection ได้ · ก้อนติด vessel ใหญ่ → <b>heat-sink effect</b> ทำให้ ablate ไม่หมด'])
        + f'<p class="mut">{E} ศัลยแพทย์พิจารณา 3 factor: <b>disease</b> (ขนาด/จำนวนก้อน, vascular invasion) · <b>liver</b> (Child, portal HT) · <b>patient</b> (ECOG/fitness) {p.R("EASLHCC")}</p>')
    h += box('BCLC (อ้างอิง) — palliative options', '', tb(['BCLC', 'นิยาม', 'Tx หลัก'],
        ['0 very early', 'ก้อนเดียว ≤2 cm, Child A, ECOG 0', 'resection / ablation'],
        ['A early', 'ก้อนเดียว หรือ ≤3 ก้อน ≤3 cm, ECOG 0', 'resection · transplant · ablation'],
        ['B intermediate', 'multinodular, ECOG 0 (แบ่ง B1–B3)', f'{imp("TACE")} (บางรายเกณฑ์ transplant ขยาย / systemic)'],
        ['C advanced', 'portal invasion / extrahepatic / ECOG 1–2', 'systemic: <b>atezolizumab + bevacizumab</b>, <b>durvalumab + tremelimumab</b> ฯลฯ'],
        ['D terminal', 'Child C ที่ transplant ไม่ได้ / ECOG 3–4', 'BSC'])
        + f'<p class="mut">{E} อาจารย์: "ศัลย์ไม่ได้ approach ตาม Barcelona" แต่ข้อสอบ/guideline ใช้ BCLC 2025 (เพิ่ม ALBI, AFP, sub-stage B1–B3, ตัดสินใจร่วม MDT) {p.R("BCLC")} · TACE = palliative option</p>')
    h += box('TACE: bridging + ก่อน major hepatectomy', '', ul(
        f'<b>TACE</b> (transarterial chemoembolization): guidewire เข้า <b>hepatic artery</b> → selective branch ที่เลี้ยงก้อน → ยิง chemo + อุด (ค่อย ๆ ปล่อยยา)',
        f'{imp("Bridging therapy")}: ระหว่าง <b>รอ transplant</b> → กันก้อนโต (progression) จนได้ organ',
        f'ก่อน <b>right hepatectomy</b> (ก้อน 10 cm, Child A ไม่มี portal HT) แต่ <b>future liver remnant (FLR) ไม่พอ</b> → <b>TACE ก่อน</b> (คุมก้อน) → ตามด้วย <b>right PVE</b> (portal vein embolization) → รอ <b>~4 wk</b> ให้ตับซ้ายโต → ผ่าตัด')
        + f'<p class="mut">{E} bridging อื่น: ablation, TARE (Y-90), SBRT — แนะนำเมื่อคาดว่ารอ transplant &gt;~6 เดือน · ก้อนเกิน Milan อาจ <b>downstage</b> ด้วย locoregional therapy แล้วค่อยเข้าเกณฑ์ {p.R("EASLHCC")}</p>'
        + gl('EASL HCC 2025 · AASLD 2023',
             f'Surveillance: <b>U/S ± AFP ทุก 6 เดือน</b> ใน cirrhosis และ chronic HBV กลุ่มเสี่ยง · ก้อน ≥1 cm → multiphasic CT/MRI: <b>APHE + washout</b> (LI-RADS 5) = dx ได้โดยไม่ต้อง biopsy {p.R("AASLD")}',
             f'Resection ใน cirrhosis: Child A, ไม่มี CSPH, FLR พอ — minimally invasive resection แนะนำในศูนย์ที่ชำนาญ · ablation ≤3 cm เป็นทางเลือก curative {p.R("EASLHCC")}'))
    h += box('Cholangiocarcinoma — "ไม่เหมือน HCC"', '', ul(
        'มีหลาย type · <b>mass-forming</b> (iCCA) มาคล้าย HCC = ก้อนในตับ แต่ภาพต่างกัน: enhancing mass, <b>focal bile duct dilatation</b>, <b>peripheral retraction</b> (capsular retraction — ตับหุบ/โดนดึงเข้า)',
        'ส่วนใหญ่เจอแบบ <b>periductal / intraductal</b> ที่ <b>hilar</b> = tumor ของ bile duct ไม่ใช่ของเนื้อตับ · ไม่ใช่ hypervascular mass',
        'mass-forming ก้อนเดียว node-less → <b>anatomical resection</b> — ส่วนใหญ่เป็น <b>major hepatectomy</b> ต้อง include bile duct (HCC ไม่ถึง bile duct = ก้อนกลม ๆ)',
        'Liver transplant <b>ยังไม่ standard</b> (โดยเฉพาะประเทศ organ จำกัด) เพราะ <b>prognosis แย่กว่า HCC</b>')
        + tb([E + ' แบ่งตามตำแหน่ง', 'ผ่าตัด'],
             ['Intrahepatic (iCCA)', 'hepatectomy (R0) + regional lymphadenectomy'],
             ['Perihilar (Klatskin) — Bismuth–Corlette', 'hepatectomy + caudate + bile duct resection (+ biliary reconstruction)'],
             ['Distal', '<b>Whipple</b> (เป็น periampullary)'])
        + f'<p class="mut">{E} บริบทไทย: <b>liver fluke (<i>Opisthorchis viverrini</i>)</b> + ปลาดิบ/ปลาร้า (nitrosamine) → อุบัติการณ์สูงสุดในอีสาน · imaging iCCA: rim APHE + <b>progressive/delayed central enhancement</b> (fibrous stroma) ต่างจาก HCC ที่ washout · adjuvant <b>capecitabine</b> (BILCAP) · advanced: gemcitabine-cisplatin + <b>durvalumab</b> (TOPAZ-1) หรือ pembrolizumab · transplant ทำได้ในบางศูนย์สำหรับ <b>unresectable perihilar ≤3 cm</b> (Mayo protocol, neoadjuvant CRT) {p.R("EASLCCA")}</p>')
    return h
add('R00.A-6', 'Liver — HCC curative (resection criteria, Milan, ablation ≤3 cm), BCLC 2025, TACE bridging & TACE + PVE, cholangiocarcinoma vs HCC', ['Liver', 'Jaundice', 'Oncology principles'],
    ['EASLHCC', 'BCLC', 'AASLD', 'EASLCCA'], b6)

exec(open('parts/r00a_qa_c.py', encoding='utf8').read())

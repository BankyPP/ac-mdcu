# ส่วนที่ 2 ของ parts/r00_mossy.py (exec ต่อจากส่วนแรก — ใช้ตัวแปร/ฟังก์ชันร่วมกัน)

# ---------------------------------------------------------------- R00-5 Chronic pancreatitis + Pancreatic CA
def b5(p):
    h = f'<div class="iointro"><b>Pancreas</b> (p10) — <b>Chronic pancreatitis</b>: สาเหตุ อาการ film การผ่าตัด (drainage vs resection) และ <b>Ix for Sx</b> · <b>Pancreatic CA (PDAC)</b>: head vs body/tail, double duct sign, Whipple, biliary drainage ก่อนผ่า</div>\n'
    h += box('Chronic pancreatitis', 'p10', ul(
        f'M/C <b>Alcohol</b>: {imp("Pain** แบบ typical")}',
        f'└ {imp("exocrine / endocrine Insuff.")} → <b>steatorrhea</b> / <b>DM</b>',
        f'Film: {imp("Calcified pancreas*")} · duct dilated แบบ stricture {hw("(chain of lakes)")}',
        'Tx: <b>Symptomatic</b> อาการ: pain &amp; (enzyme, insulin)')
        + f'<p class="mut">{E} Classic triad = calcification + steatorrhea + DM (พบครบน้อย) · DM ชนิดนี้ = <b>type 3c</b> (pancreatogenic) · pancreatic enzyme replacement (PERT) กับ steatorrhea · หยุดเหล้า/บุหรี่ {p.R("HAPAN")}</p>')
    h += box('Chronic pancreatitis — Sx ' + MK, 'p10', '<table class="dz"><tr><th>สถานการณ์</th><th>การผ่าตัด</th></tr>'
        + f'<tr><td>{imp("Drainage for pancreatic duct > 7–8 mm**")}</td><td>OPx of choice: <b>Lateral (longitudinal) pancreaticojejunostomy</b> = Puestow / <b>Partington(-Rochelle)</b></td></tr>'
        + '<tr><td>Lesion @ <b>Head</b></td><td>Resection → <b>Whipple</b></td></tr>'
        + '<tr><td>Lesion @ <b>Body / Tail</b></td><td>Resection → distal pancreatectomy ± <b>splenectomy</b></td></tr></table>'
        + f'<p>{FIX("⚠ แยกชื่อ")} โน้ตเขียนทั้งสองบรรทัดเป็น "lateral pancreaticojejunostomy" · ที่ถูก: <b>Puestow (ดั้งเดิม)</b> = longitudinal PJ + distal pancreatectomy + splenectomy · <b>Partington–Rochelle</b> = modified Puestow ไม่ตัดหาง (lateral side-to-side PJ อย่างเดียว) ← เป็นแบบที่ใช้จริงปัจจุบัน · ถ้า head โตร่วม → <b>Frey</b> (core head + LPJ) / Beger</p>'
        + '<h4>Ix for Sx (ในโน้ต)</h4>' + ul(f'Pain* ที่ <b>control ด้วย modalities อื่นไม่ได้</b>', 'Lesion pancreas ที่ ____ (สงสัย CA — แยกจากมะเร็งไม่ได้)', '<b>DUO / bile duct obstruction</b>')
        + f'<p class="mut">{E} ข้อบ่งชี้อื่น: pseudocyst มีอาการ, splenic vein thrombosis/sinistral portal HTN, pancreatic fistula/ascites</p>'
        + gl('ESCAPE trial (JAMA 2020) · HaPanEU 2017', f'Painful obstructive chronic pancreatitis (duct dilated): <b>early surgery</b> (ภายใน 6 สัปดาห์) ได้ pain score ดีกว่าและหัตถการรวมน้อยกว่า endoscopy-first {p.R("ESCAPE")}', f'Endoscopy (ERCP + stent ± ESWL สำหรับนิ่วในท่อ) ยังเป็นทางเลือกแรกได้ในบางราย แต่ถ้าไม่ดีขึ้นควรส่งผ่าตัดเร็ว {p.R("HAPAN")}'))
    h += box('Pancreatic CA — PDAC ' + MK, 'p10', ul(
        f'<b>Body &amp; Tail</b>: <b>Asymptomatic</b> → มาช้า (ผ่าไม่ได้บ่อย)',
        f'<b>Head &amp; Uncinate</b>: {imp("Painless Progressive Jaundice")} └ น้ำหนักลด 20–30 กิโล / เบื่ออาหาร / คันตามตัว',
        f'<b>CT</b>: {imp("double duct sign*")} (CBD + pancreatic duct ขยายทั้งคู่)',
        f'ผ่าได้ → <b>Whipple</b> ("Pancreaticoduodenostomy" ในโน้ต)')
        + f'<p>{FIX()} Whipple = <b>pancreaticoduodenectomy</b> (-ectomy = ตัดออก) ไม่ใช่ "-ostomy"</p>'
        + f'<p class="mut">{E} Courvoisier sign (palpable non-tender GB + jaundice) · CA 19-9 ใช้ติดตาม ไม่ใช่ screening · resectability ดู SMA/celiac/CHA (artery) และ SMV/PV (vein) — borderline → neoadjuvant (FOLFIRINOX) {p.R("NCCNPA")}</p>')
    h += box('Biliary drainage ก่อนผ่า (pre-op)', 'p10', ul(
        f'ทำ ↔ <b>Fever w/ chills</b> (cholangitis) / ต้องรอนานก่อนผ่า {hw("(ลายมืออ่านได้ไม่ชัด)")} / <b>Severe malnutrition</b>',
        f'{imp("ไม่จำเป็นต้องทำ biliary drain ก่อนผ่าในทุก case")}',
        '<b>External drain</b> (PTBD: percutaneous transhepatic biliary drainage) — QOL: แย่ เพราะสาย',
        '<b>Internal</b> (ERCP w/ stent): ทำ ERCP ใส่ stent — แพง + invasive กว่า')
        + f'<p>{FIX("⚠ เพิ่มเงื่อนไข")} ในโน้ตเขียน "PTPD" → <b>PTBD</b> · ปัจจุบันเลือก <b>ERCP + stent (ใส่ SEMS)</b> เป็นวิธีแรกเมื่อจำเป็นต้อง drain ส่วน PTBD เป็นทางเลือกเมื่อ ERCP ไม่สำเร็จ</p>'
        + gl('van der Gaag NEJM 2010 · NCCN Pancreatic Adenocarcinoma', f'Routine preoperative biliary drainage <b>เพิ่มภาวะแทรกซ้อน</b> (74% vs 39%) เมื่อเทียบกับผ่าตัดเร็วภายใน ~1 สัปดาห์ {p.R("PBD")}', f'ข้อบ่งชี้ drain: <b>cholangitis</b>, ต้องรอผ่า/ได้ <b>neoadjuvant</b> ก่อน, คันรุนแรง, bilirubin สูงมาก/ไตวาย — ใช้ endoscopic short metal stent {p.R("NCCNPA")}'))
    h += src(10)
    return h
add('R00-5', 'Chronic pancreatitis (Puestow vs Partington, Ix for Sx, ESCAPE) · Pancreatic CA — PDAC head vs body/tail, double duct sign, Whipple, pre-op biliary drainage (ERCP vs PTBD)', ['Pancreas & Spleen', 'Jaundice'],
    ['HAPAN', 'ESCAPE', 'PBD', 'NCCNPA'], b5)

# ---------------------------------------------------------------- R00-6 Cystic neoplasm
def b6(p):
    h = f'<div class="iointro"><b>Cystic Neoplasm of Pancreas</b> (p10–11): แยก <b>pseudocyst</b> ออกก่อน → 4 ชนิด: SCN · MCN · IPMN · SPN — ข้อไหนต้องผ่า {p.R("EUPCN")}</div>\n'
    h += box('Benign vs N/O pseudocyst', 'p10–11', ul(
        '<b>Benign</b> (cystic neoplasm)',
        f'<b>N/O* Pancreatic Pseudocyst</b> ← {imp("ต้อง Rule out")} {hw("ปกติต้องมีประวัติ acute pancreatitis เช่น มี blunt trauma มาก่อน")}')
        + f'<p class="mut">{E} Pseudocyst ไม่มี epithelial lining · fluid amylase สูงมาก · CEA ต่ำ · เกิด &gt;4 สัปดาห์หลัง pancreatitis</p>')
    h += box('Types of cystic neoplasm ' + MK, 'p11', '<table class="dz"><tr><th>ชนิด</th><th>ในโน้ต</th><th>' + E + ' แนวทางปัจจุบัน</th></tr>'
        + f'<tr><td><b>Serous cystic neoplasm (SCN)</b></td><td>Benign (<b>Microcyst</b>): <b>Honeycomb</b> app. · Tx ไม่ Sx ยกเว้นก้อนใหญ่กว่า <b>4 cm</b> ต้อง Sx.: ก้อนโตเร็ว</td><td>central scar / <b>sunburst calcification</b> · แทบไม่เป็นมะเร็ง → ผ่าเฉพาะ<b>มีอาการ</b> (ขนาดอย่างเดียวไม่ใช่ข้อบ่งชี้ตาม European 2018) {p.R("EUPCN")}</td></tr>'
        + f'<tr><td><b>Mucinous cyst (MCN)</b></td><td>@ <b>Body @ Tail</b> เยอะ · <b>Macrocyst</b> · <b>Calcification ของ wall</b> → {imp("Sx! ∵ Malignant pote.")}</td><td>หญิงวัยกลางคน · ovarian-type stroma · <b>peripheral (eggshell) calcification</b> · ไม่ต่อกับ pancreatic duct · ผ่าเมื่อ ≥4 cm / มี mural nodule / มีอาการ (&lt;4 cm ไม่มี risk feature เฝ้าติดตามได้) {p.R("EUPCN")}</td></tr>'
        + f'<tr><td><b>IPMN</b> — Sx?</td><td><b>Main duct type</b>: pancreatic duct โต ๆ → {imp("CA ~50–60%")}<br><b>Branch duct type</b>: <b>grape-like</b> → จะดู case by case {hw("(หมึกแดง: อจ. Sx ทุก case)")}<br><b>Mixed</b> → (main + mixed) {imp("Sx! ∵ Malig. potent")}</td><td>ต่อกับ pancreatic duct · "fish-mouth" papilla มี mucin · MD-/mixed-IPMN → resection (ถ้า fit) · BD-IPMN → ตาม <b>high-risk stigmata / worrisome features</b> (ด้านล่าง) {p.R("KYOTO")}</td></tr>'
        + f'<tr><td><b>Solid (SPEN / SPN)</b></td><td><b>Solid-cystic</b> → {imp("Sx!")} (malig. potent)</td><td>หญิงสาว (20–30 ปี) · low-grade malignant → ผ่าตัดทุกราย, พยากรณ์ดีมาก</td></tr></table>'
        + f'<p>{FIX("⚠ ขัดกับ guideline")} หมึกแดง "<b>อจ. Sx ทุก case</b>" สำหรับ branch-duct IPMN — ตาม Kyoto 2024 / European 2018 BD-IPMN ที่ไม่มี worrisome feature <b>เฝ้าติดตามด้วย MRI/MRCP หรือ EUS</b> ได้ (malignancy ต่ำ ~0.4–1%/ปี) · ผ่าตัดเมื่อมี high-risk stigmata หรือ worrisome features หลายข้อ — ถ้าข้อสอบถามแนวทางมาตรฐานให้ตอบตาม guideline {p.R("KYOTO")}</p>'
        + gl('Kyoto 2024 IPMN · European 2018 PCN', f'<b>High-risk stigmata</b> (→ ผ่า): obstructive jaundice · enhancing mural nodule ≥5 mm / solid component · MPD ≥10 mm · cytology suspicious/positive {p.R("KYOTO")}', f'<b>Worrisome features</b> (→ EUS, พิจารณาผ่า): cyst ≥3 cm · enhancing mural nodule &lt;5 mm · thickened/enhancing wall · MPD 5–9 mm · abrupt MPD change + distal atrophy · LN · CA 19-9 สูง · cyst โต ≥2.5 mm/ปี · acute pancreatitis จาก cyst · new-onset DM {p.R("KYOTO")}', f'European 2018: relative indication = MPD 5–9.9 mm หรือ cyst ≥40 mm · absolute = jaundice, enhancing nodule &gt;5 mm, MPD ≥10 mm, cytology บวก {p.R("EUPCN")}'))
    h += src(11)
    return h
add('R00-6', 'Cystic neoplasm of pancreas — rule out pseudocyst, SCN (honeycomb) vs MCN (body/tail, eggshell calcification) vs IPMN (main/branch/mixed; Kyoto 2024 HRS/WF) vs SPN', ['Pancreas & Spleen'],
    ['EUPCN', 'KYOTO'], b6)

# ---------------------------------------------------------------- R00-7 Groin hernia
def b7(p):
    h = f'<div class="iointro"><b>Groin hernia</b> (p12): elective tension-free repair + แก้สาเหตุ · ภาวะแทรกซ้อน <b>incarcerated → obstructed → strangulated</b> และการจัดการแต่ละขั้น {p.R("HSURGE")}</div>\n'
    h += box('Groin hernia — elective', 'p12', ul(
        f'Once Dx. → จะ <b>elective Sx.</b> {imp("Tension-free repair (MESH)")}',
        f'{hw("(หมึกแดง)")} + แก้ <b>causes</b> ด้วย เช่น <b>Constipation &amp; BPH</b> (เบ่งเพิ่ม intra-abdominal pressure)')
        + f'<p>{FIX("⚠ เพิ่มเงื่อนไข")} ไม่ต้องผ่าทุกรายทันที: <b>ผู้ชาย asymptomatic/minimally symptomatic</b> → <b>watchful waiting</b> ได้ (เสี่ยง emergency ต่ำ แต่ส่วนใหญ่จะได้ผ่าในที่สุด) · ส่วน <b>หญิง/femoral hernia</b> แนะนำผ่าเร็วเพราะเสี่ยง strangulation สูง {p.R("HSURGE")}</p>'
        + gl('HerniaSurge 2018 + update 2023', f'Mesh repair เป็นทางเลือกแรก (open <b>Lichtenstein</b> หรือ laparo-endoscopic <b>TEP/TAPP</b>) · หญิงแนะนำ laparoscopic เพื่อไม่พลาด femoral hernia {p.R("HSURGE")}', f'ปัจจัยเสี่ยง incarceration/strangulation: <b>female, femoral hernia</b>, เคย admit เรื่อง hernia {p.R("HSURGE")}'))
    h += box('Complicated groin hernia ' + MK, 'p12', '<table class="dz"><tr><th>ภาวะ</th><th>ในโน้ต</th></tr>'
        + f'<tr><td><b>Incarcerated</b> (M/C <b>indirect</b>)</td><td>{hw("(ฟ้า)")} ที่ให้ obst M/C: <b>omentum</b> · อาการ <b>&lt;6 hrs → Reduce ได้</b> · <b>≥6 hrs → Sx @ groin</b></td></tr>'
        + f'<tr><td><b>Obstructed</b> {hw("(incarcerated ที่ bowel ติดอยู่ข้างใน)")}</td><td>อาเจียน ฯลฯ · diff. in the same loop · ... · {imp("*ห้าม Reduce*")} Tx: <b>ต้อง Sx.</b> {hw("เพราะต้องดูว่าตายมั้ย")} · {hw("(แดง) ∵ บางคนเป็น adhesion ทำให้ดันกลับเข้าไปได้ทั้งก้อน ไม่แยกส่วน")}</td></tr>'
        + f'<tr><td><b>Strangulated**</b> {hw("(delayed obstructed)")}</td><td>→ <b>gangrene → perforate</b> · {hw("(เขียว)")} เช่น ปวด/บวม/แดง/ร้อน, <b>sepsis / WBC↑</b> · Tx: <b>เปิด @ groin ± EL</b> {hw("ทำเพื่อตัด bowel ที่ตาย")}</td></tr></table>'
        + '<h4>Repair (หมึกฟ้า)</h4>' + ul('<b>bowel ตาย</b>: Tiss. repair + ...?', '<b>ไม่ตาย</b>: เย็บกลับ + ใส่ <b>MESH</b>')
        + f'<p class="mut">{E} ที่ adhesion ทำให้ดันกลับได้ "ทั้งก้อน" = <b>reduction en masse</b> (ดันทั้ง sac กลับเข้าไป แต่ลำไส้ยังโดนรัดที่คอ sac) · การ reduce (taxis) ทำเฉพาะไม่มี sign of strangulation · หลัง reduce ต้องสังเกตอาการ peritonitis</p>'
        + f'<p class="mut">{E} การ repair ในแผลปนเปื้อน: เดิมใช้ <b>tissue repair</b> (Bassini/Shouldice/McVay) · ปัจจุบัน WSES/HerniaSurge ให้ใช้ <b>synthetic mesh ได้</b>ใน clean-contaminated (เช่น ตัดต่อลำไส้โดยไม่มีหนองชัด) · ถ้าปนเปื้อนมาก/หนอง → tissue repair หรือ biologic mesh {p.R("WSESH")}</p>'
        + gl('WSES 2017 complicated hernia · HerniaSurge 2018', f'Strangulated hernia → ผ่าตัดฉุกเฉิน; ถ้าสงสัยลำไส้ตายหลัง reduce เอง → diagnostic laparoscopy/laparotomy ตรวจลำไส้ {p.R("WSESH")}', f'Prosthetic mesh repair แนะนำได้ใน clean/clean-contaminated field (low-weight large-pore polypropylene) {p.R("HSURGE")}'))
    h += src(12)
    return h
add('R00-7', 'Groin hernia — elective mesh repair + แก้สาเหตุ (watchful waiting ในชายไม่มีอาการ), incarcerated (<6 hr reduce), obstructed (ห้าม reduce, reduction en masse), strangulated, mesh vs tissue repair', ['Hernia & Abdominal wall'],
    ['HSURGE', 'WSESH'], b7)

# ---------------------------------------------------------------- R00-8 Thyroid
def b8(p):
    h = f'<div class="iointro"><b>Thyroid / Parathyroid</b> (p13): approach to thyroid mass — 1st แยกด้วย TFT → hyper (scan) vs euthyroid/hypo (US → FNA → Bethesda) · ชนิด CA {p.R("ATA15")}</div>\n'
    h += box('Thyroid mass — algorithm ' + MK, 'p13', '<div class="flow"><span class="n">Thyroid mass</span><span class="ar">→</span><span class="n">1st แยก fx (TSH/TFT)</span></div>'
        + '<table class="dz"><tr><th>Hyper</th><th>Euthyroid / Hypo <span class="imp">*บ่อย</span></th></tr>'
        + '<tr><td>→ <b>Scan</b> (RAI uptake) → <b>Cold</b> / <b>Hot</b>: Graves · MNG · TNG</td>'
        + f'<td>→ <b>U/S</b> ดู risk of CA → <b>Hypoechoic solid nod.</b> = {imp("Very high risk*")} → ทำ <b>FNA</b>: <b>Nod. &gt;1 cm → FNA</b><br>Cf. <b>Mod / Mild</b>: 1.5–5 cm ค่อยทำ FNA</td></tr></table>'
        + '<table class="dz"><tr><th>Bethesda (กรอบในโน้ต)</th><th>Mx ในโน้ต</th></tr><tr><td>Bet 1–3</td><td>repeat</td></tr><tr><td>Bet 4 — follicular neo</td><td><b>Lobect</b>(omy)</td></tr><tr><td>Bet 5 — susp CA</td><td><b>Total thyroidect</b>(omy)</td></tr></table>'
        + f'<p>{FIX()} "Bet 1–3 repeat" — ใช้ได้กับ I (nondiagnostic) และ III (AUS) เท่านั้น · <b>Bethesda II (benign)</b> → <b>ไม่ต้องเจาะซ้ำ</b> ติดตาม clinical + US · และขาด <b>Bethesda VI (malignant)</b> → ผ่าตัด {p.R("BETH")}</p>'
        + f'<p>{FIX("⚠ ชื่อ/เกณฑ์")} US pattern ตาม ATA 2015: <b>high suspicion</b> (solid hypoechoic + irregular margin / microcalcification / taller-than-wide / ECE) → FNA <b>≥1 cm</b> · intermediate (solid hypoechoic ขอบเรียบ) → ≥1 cm · low → <b>≥1.5 cm</b> · very low (spongiform) → ≥2 cm หรือติดตาม · ถ้าใช้ <b>ACR TI-RADS</b>: TR5 ≥1 cm, TR4 ≥1.5 cm, TR3 ≥2.5 cm {p.R("ATA15")} {p.R("TIRADS")} — ตัวเลข "1.5–5 cm" ในโน้ตไม่ตรงระบบใด</p>'
        + f'<p>{FIX("⚠ อัปเดต")} Bethesda V: ไม่จำเป็นต้อง total ทุกราย — <b>lobectomy หรือ total</b> ตามขนาด/ลักษณะ (ATA 2025: PTC ≤2 cm จำกัดในกลีบเดียว → lobectomy preferred; 2–4 cm เลือกได้) {p.R("ATA25")}</p>'
        + f'<p class="mut">{E} Hyperthyroid + <b>cold nodule</b> → ต้องทำ US ± FNA ต่อ (อาจเป็นมะเร็ง) · <b>hot nodule</b> แทบไม่เป็นมะเร็ง → ไม่ต้อง FNA · Graves = diffuse uptake · toxic adenoma = hot nodule เดียว + กลีบที่เหลือ suppressed · TMNG = หลายจุด</p>'
        + gl('Bethesda 2023 (3rd ed.) · ATA 2025 DTC', '<table class="dz"><tr><th>Category</th><th>ROM เฉลี่ย</th><th>Usual management</th></tr><tr><td>I Nondiagnostic</td><td>~13%</td><td>Repeat US-guided FNA</td></tr><tr><td>II Benign</td><td>~4%</td><td>Clinical + US follow-up</td></tr><tr><td>III AUS</td><td>~22%</td><td>Repeat FNA / molecular test / diagnostic lobectomy / surveillance</td></tr><tr><td>IV Follicular neoplasm</td><td>~30%</td><td>Molecular test / diagnostic lobectomy</td></tr><tr><td>V Suspicious for malignancy</td><td>~74%</td><td>Molecular test / lobectomy หรือ thyroidectomy</td></tr><tr><td>VI Malignant</td><td>~97%</td><td>Lobectomy หรือ thyroidectomy</td></tr></table>' + f'<p class="mut">{p.R("BETH")}</p>'))
    h += box('Thyroid CA — ชนิด', 'p13', ul(
        f'<b>Pap. / Follic.</b> }} <b>Well diff.?</b>',
        f'<b>Anaplastic / Medullary</b> }} <b>dedifferentiated?</b> {hw("(หมึกฟ้า: ...ผมจดไม่ทัน — ผู้จดใส่ ? ไว้)")}')
        + f'<p>{FIX()} <b>Medullary</b> ไม่ใช่ "dedifferentiated" — มาจาก <b>parafollicular C cell</b> (neuroendocrine, หลั่ง <b>calcitonin</b>, CEA) ไม่ได้มาจาก follicular cell จึงไม่จับ RAI · <b>Anaplastic</b> = undifferentiated (follicular-derived ที่ dedifferentiate) พยากรณ์แย่สุด · Pap + Follic (+ oncocytic) = <b>differentiated thyroid cancer (DTC)</b> {p.R("ATA25")}</p>'
        + '<table class="dz"><tr><th>' + E + ' ชนิด</th><th>จุดสำคัญ</th></tr>'
        + '<tr><td>Papillary (~80–85%)</td><td>Orphan Annie nuclei, psammoma bodies · กระจายทาง <b>lymphatic</b> · radiation exposure · พยากรณ์ดีสุด</td></tr>'
        + '<tr><td>Follicular</td><td>วินิจฉัยด้วย <b>capsular/vascular invasion</b> (FNA บอกไม่ได้ → Bethesda IV ต้อง lobectomy) · กระจายทาง <b>blood</b> (ปอด, กระดูก) · iodine deficiency</td></tr>'
        + '<tr><td>Medullary</td><td>C cell · calcitonin · <b>RET</b> mutation (MEN2A/2B) → ตรวจ pheochromocytoma ก่อนผ่า · total thyroidectomy + central neck dissection</td></tr>'
        + '<tr><td>Anaplastic</td><td>ผู้สูงอายุ ก้อนโตเร็ว กด airway · ตรวจ BRAF V600E (dabrafenib + trametinib)</td></tr></table>')
    h += src(13)
    return h
add('R00-8', 'Thyroid mass — TFT → hyper (scan hot/cold) vs euthyroid (US risk → FNA cut-off) → Bethesda 2023 management (แก้ Bet II, เพิ่ม VI) · thyroid CA types (medullary = C cell)', ['Thyroid & Endocrine'],
    ['ATA15', 'BETH', 'ATA25', 'TIRADS'], b8)

# ---------------------------------------------------------------- R00-9 Antithrombotic
def b9(p):
    h = f'<div class="iointro"><b>หยุดยาต้านเกล็ดเลือด/ยาต้านการแข็งตัวของเลือดก่อนผ่าตัด</b> (มุมล่างขวา p13) — เทียบกับ CHEST 2022 {p.R("CHEST")}</div>\n'
    h += box('Peri-op antithrombotics', 'p13', '<table class="dz"><tr><th>ยา</th><th>ในโน้ต</th><th>' + E + ' CHEST 2022</th></tr>'
        + f'<tr><td><b>ASA</b> – <b>Plavix</b></td><td>หยุด <b>5–7 วัน</b></td><td><b>Aspirin: ส่วนใหญ่ให้ต่อ (continue)</b> ใน elective non-cardiac surgery · ถ้าจำเป็นต้องหยุด → 7 วัน · <b>clopidogrel 5 วัน</b> · ticagrelor 3–5 วัน · prasugrel 7 วัน</td></tr>'
        + f'<tr><td><b>NOACs</b></td><td><b>48 hrs</b></td><td>หยุด <b>1 วัน</b> (low–moderate bleed risk) / <b>2 วัน</b> (high bleed risk) · <b>dabigatran + CrCl &lt;50</b> หยุดนานขึ้น (2–4 วัน) · <b>ไม่ต้อง bridging</b></td></tr>'
        + f'<tr><td><b>Warfarin</b></td><td>ต้อง <b>bridging</b> ด้วย <b>Enoxa</b>(parin) · หยุดจน <b>INR normal</b></td><td>หยุด <b>5 วัน</b> ก่อนผ่า (เช็ค INR วันก่อนผ่า) · <b>bridging เฉพาะ thrombotic risk สูงมาก</b> เช่น VTE/stroke ภายใน 3 เดือน, mechanical <b>mitral</b> valve หรือ mechanical valve ที่มี risk factor (ตาม ACC/AHA valve guideline) · <b>AF → ไม่ bridging</b> (strong recommendation) · mechanical valve ทั่วไป CHEST 2022 ก็ suggest ไม่ bridging</td></tr>'
        + f'<tr><td><b>Heparin</b></td><td>หยุด <b>6 ชม.</b>ก่อนผ่า</td><td>UFH IV หยุด <b>4–6 ชม.</b> · LMWH therapeutic dose: dose สุดท้าย <b>~24 ชม.</b>ก่อนผ่า (ให้ครึ่ง dose ของวัน)</td></tr></table>'
        + f'<p>{FIX()} "Warfarin <b>ต้อง</b> bridging" — ไม่ใช่ทุกราย · BRIDGE trial: bridging ใน AF ไม่ลด thromboembolism แต่เพิ่ม major bleeding {p.R("CHEST")}</p>'
        + f'<p>{FIX("⚠ อัปเดต")} "ASA หยุด 5–7 วัน" — CHEST 2022 แนะนำ <b>ให้ aspirin ต่อ</b>ในผู้ป่วยส่วนใหญ่ (โดยเฉพาะมี coronary stent/secondary prevention) ยกเว้นผ่าตัดเสี่ยงเลือดออกสูงมาก (intracranial, spinal, TURP บางกรณี) {p.R("CHEST")}</p>'
        + gl('CHEST 2022 Perioperative antithrombotic', f'Resume DOAC ~24 ชม. หลัง low/moderate-bleed-risk surgery และ 48–72 ชม. หลัง high-bleed-risk · ไม่ใช้ coagulation test นำการหยุด DOAC {p.R("CHEST")}', f'หัตถการ bleeding risk ต่ำมาก (ถอนฟัน, ผิวหนังเล็ก ๆ, cataract) → ให้ warfarin/DOAC/antiplatelet ต่อได้ {p.R("CHEST")}'))
    return h
add('R00-9', 'หยุดยาก่อนผ่าตัด — aspirin/clopidogrel, DOAC (1–2 วัน), warfarin (5 วัน, bridging เฉพาะ high risk), heparin/LMWH — เทียบ CHEST 2022', ['Perioperative care & Surgical infection'],
    ['CHEST'], b9)

# ---------------------------------------------------------------- R00-10 Cholecystitis
def b10(p):
    h = f'<div class="iointro"><b>Acute cholecystitis</b> (p14): clinical → US (img of choice) → lab → simple vs complicated → <b>Tx ตาม severity (TG18)</b> + Abx · โน้ตแยก organ failure เป็น 2 กลุ่ม (แดง vs ฟ้า) ตรงกับแนวคิด <b>FOSF / negative predictive factors</b> ของ TG18 {p.R("TGCC")}</div>\n'
    h += box('Acute cholecystitis — Dx', 'p14', ul(
        f'ปวดท้อง <b>RUQ</b> ± biliary colic ที่นานกว่า (&gt;6 hr) + ไข้ต่ำ ๆ + {imp("Murphy’s sign positive")}',
        f'<b>U/S = Img. of choice</b>: distend / <b>thickening</b> / <b>pericholecystic</b> fluid / <b>posterior acoustic shadow</b> (gallstone) /',
        'ดู Lab: <b>CBC</b> · <b>LFT</b>',
        f'{hw("(แดง)")} Acute chole ปกติจะ<b>ไม่ค่อยมี AST/ALT</b> ขึ้น · อาจขึ้นได้ใน severe case')
        + f'<p class="mut">{E} LFT ขึ้นชัด/ jaundice → นึกถึง <b>CBD stone, cholangitis, Mirizzi</b> ร่วม · TG18 Dx: A local (Murphy, RUQ mass/pain/tenderness) + B systemic (fever, CRP/WBC↑) + C imaging → A+B = suspected, A+B+C = definite {p.R("TGCC")}</p>'
        + '<h4>Simple vs Complicated (แดง)</h4>' + ul(
        '<b>Gangrenous</b> — เช่น distend จนไปกด cystic art.',
        '<b>Perforation</b>: bile peritonitis',
        '<b>Complete cystic duct obs.</b>: กลายเป็นหนองในถุงน้ำดี (<b>empyema gall bladder</b>)',
        '<b>Gas-forming</b>: <b>emphysematous cholecystitis</b>')
        + f'<p class="mut">{E} Emphysematous cholecystitis: <b>DM</b>, ชายสูงอายุ, Clostridium · เสี่ยง gangrene/perforation สูง → urgent surgery/drainage</p>')
    h += box('Acute cholecystitis — Tx ตาม severity ' + MK, 'p14', '<table class="dz"><tr><th>Grade</th><th>ในโน้ต</th></tr>'
        + f'<tr><td><b>Mild</b> (no complic.)</td><td>ถ้าคนไข้ fit: {imp("early LC")} (ไม่เกิน 7 วัน)</td></tr>'
        + f'<tr><td><b>Mod</b> (มี complic. เช่น gangrene)</td><td><b>WBC↑ &gt;18,000</b> / tenderness mass · if คนไข้ fit → <b>early LC</b> · {hw("(ฟ้า) if คนไข้ไม่ fit?")} → {imp("ทำ early drainage (Abx + cholecystostomy)")}</td></tr>'
        + '<tr><td><b>Severe</b> (end organ fail)</td><td>Neuro fail (ซึม/confusion) · Resp. fail (ARDS/ต้องใส่ tube) · Cardio fail (BP drop/ต้องใช้ inotrope) · Hemato fail (เช่น D-dimer) · Liver fail เหลือง Bili &gt;2 · Renal fail</td></tr></table>'
        + f'<div class="mn"><div><b class="k">แดง</b> (เส้นจาก neuro · resp · liver/jaundice) — "3 อันนี้มีอันใดอันหนึ่งแล้ว <b>death rate สูง</b>" → {imp("ทำ early drainage (Abx + cholecystostomy)")}</div><div><b class="k">ฟ้า</b> (เส้นจาก cardio · renal) — ดูว่า <b>reversible มั้ย</b>: ได้ → <b>early LC</b> คิดคล้าย mild/mod · ไม่ได้ → <b>early drainage</b> (cholecystostomy + Abx) {hw("เพื่อยืดเวลารอทำ LC ทีหลัง")}</div></div>'
        + f'<p>{E} ตรงกับ TG18 grade III: <b>FOSF</b> (favorable organ system failure = <b>cardiovascular หรือ renal</b> ที่แก้กลับได้เร็ว) + <b>ไม่มี negative predictive factors</b> (<b>jaundice TB ≥2, neurological, respiratory dysfunction</b>) + CCI ≤3 + ASA-PS ≤2 → early LC ใน advanced center · ไม่เข้าเกณฑ์ → urgent/early <b>GB drainage (PTGBD)</b> {p.R("TGCC")}</p>'
        + f'<p>{FIX()} เกณฑ์ organ dysfunction ของ TG18: <b>hepatic = PT-INR &gt;1.5</b> (ไม่ใช่ bilirubin — TB ≥2 คือ "negative predictive factor") · <b>hematologic = platelet &lt;100,000</b> (ไม่ใช่ D-dimer) · cardiovascular = ต้องใช้ dopamine ≥5 µg/kg/min หรือ norepinephrine · neuro = ซึม · resp = PaO₂/FiO₂ &lt;300 · renal = oliguria, Cr &gt;2.0 {p.R("TGCC")}</p>'
        + f'<p>{FIX("⚠ เพิ่มเงื่อนไข")} Grade II (moderate) ตาม TG18 = มีข้อใดข้อหนึ่ง: WBC &gt;18,000 · palpable tender RUQ mass · <b>อาการ &gt;72 ชม.</b> · marked local inflammation (gangrenous, emphysematous, pericholecystic/hepatic abscess, biliary peritonitis) · early LC เมื่อ CCI ≤5 และ ASA-PS ≤2 {p.R("TGCC")}</p>')
    h += box('Abx in cholecystitis', 'p14', ul('<b>Community</b>: Ceftri(axone)?', '<b>Hosp</b>(ital-acquired): <b>Tazocin / Carbapenem</b>')
        + gl('TG18 antimicrobial therapy', f'Community-acquired grade I–II: เช่น ceftriaxone/cefotaxime ± metronidazole (ถ้ามี biliary-enteric anastomosis ต้องคลุม anaerobe) · grade III และ healthcare-associated: <b>piperacillin-tazobactam</b>, cefepime ± metronidazole, <b>carbapenem</b> ± vancomycin {p.R("TGAB")}', f'Cholecystitis หลังเอา source ออก (cholecystectomy): grade I–II ให้ ATB ไม่เกิน 24 ชม. · ถ้ามี perforation/ gangrene/ emphysematous ให้ 4–7 วัน {p.R("TGAB")}'))
    h += src(14)
    return h
add('R00-10', 'Acute cholecystitis — US findings, complicated forms, TG18 grade I–III → early LC vs drainage (FOSF vs negative predictive factors), organ-failure criteria แก้, Abx', ['Gallbladder & Biliary'],
    ['TGCC', 'TGAB'], b10)

# ---------------------------------------------------------------- R00-11 Cholangitis
def b11(p):
    h = f'<div class="iointro"><b>Acute cholangitis</b> (p15): มักเกิดจาก obstruction ใน CBD แล้วเชื้อตามเข้าไป · M/C = CBD stone · severe → biliary drainage (ERCP + stent) {p.R("TGAC")}</div>\n'
    h += box('Acute cholangitis ' + MK, 'p15', ul(
        f'{imp("Fever w/ Chills*")}',
        '± เหลือง / ปวดท้อง',
        f'M/C = <b>CBD stone</b> · Cf. <b>CA จะไม่ค่อย cholangitis</b> {hw("(malignant obstruction ติดเชื้อน้อย ยกเว้นเคยทำ ERCP/ใส่ stent)")}',
        f'{hw("(แดง)")} M/C เชื้อ = <b>Gram⊖</b> → <b>Ceftri</b> · if ใน รพ.-บ่อย → <b>Tazocin / Meropenem</b>')
        + '<table class="dz"><tr><th>Severity</th><th>ในโน้ต</th></tr>'
        + f'<tr><td><b>Severe</b></td><td>→ ทำ {imp("Biliary Drainage")} — <b>Internal (ERCP + stent)* = 1st choice</b> | 2nd choice: <b>PTBD</b> ("PTPD" ในโน้ต) | 3rd choice: <b>CBD exploration</b> {hw("(ขอบขวา p14)")}</td></tr>'
        + f'<tr><td><b>Mod. / Mild</b></td><td>Abx. ก่อน → {imp("early LC*")}</td></tr></table>'
        + f'<p>{FIX()} ตาม TG18 {p.R("TGAC")}: <b>Grade II (moderate) ต้องทำ early biliary drainage</b> (ERCP) ร่วมกับ ATB — ไม่ใช่ ATB อย่างเดียว · Grade I (mild) ให้ ATB ถ้าไม่ตอบสนองใน 24 ชม. → drainage · <b>Grade III</b> → organ support + <b>urgent drainage</b> · และ "early LC" ใน cholangitis คือ<b>ต้องเคลียร์ CBD stone ก่อน</b> (ERCP sphincterotomy + stone extraction) แล้วจึง cholecystectomy เมื่อ cholangitis หาย (ควรใน admission เดียวกัน)</p>'
        + f'<p class="mut">{E} Charcot triad = fever + jaundice + RUQ pain (Sn ต่ำ ~25%) · Reynolds pentad = + shock + altered mental status · TG18 Dx: A systemic inflammation + B cholestasis (TB ≥2, LFT &gt;1.5×ULN) + C imaging (dilatation/etiology) {p.R("TGAC")}</p>'
        + gl('TG18 acute cholangitis', f'<b>Grade II</b> = ≥2 ใน 5: WBC &gt;12,000 หรือ &lt;4,000 · fever ≥39 °C · age ≥75 · TB ≥5 mg/dL · albumin &lt;0.7×LLN → <b>early drainage</b> · <b>Grade III</b> = organ dysfunction → <b>urgent drainage</b> {p.R("TGAC")}', f'วิธี drainage: <b>endoscopic (ERCP: EBS/ENBD) เป็นอันดับแรก</b> → EUS-guided/PTBD เมื่อทำ ERCP ไม่ได้ → open drainage (CBD exploration + T-tube) เป็นทางสุดท้าย {p.R("TGAC")}', f'ATB: community grade I–II เช่น ceftriaxone ± metronidazole · grade III/healthcare-associated → piperacillin-tazobactam/carbapenem · หลังเคลียร์ source ให้ 4–7 วัน {p.R("TGAB")}'))
    h += src(15)
    return h
add('R00-11', 'Acute cholangitis — fever with chills, CBD stone, Gram-negative ATB, biliary drainage ladder (ERCP → PTBD → CBD exploration), TG18 grade II ต้อง drain (แก้จากโน้ต)', ['Gallbladder & Biliary', 'Jaundice'],
    ['TGAC', 'TGAB'], b11)

# ---------------------------------------------------------------- R00-12 LGIB + Dysphagia
def b12(p):
    h = f'<div class="iointro"><b>Lower GI bleed</b> (p16 กรอบ): M/C ตามอายุ → 1st rule out upper → 2nd perianal → 3rd colonoscopy → CTA · และ <b>Dysphagia</b>: EGD ก่อน {p.R("LGIB")}</div>\n'
    h += box('Lower GI bleed ' + MK, 'p16', f'<p>{hw("(แดง)")} M/C ตาม <b>Aging</b> (&gt;60): {imp("Divert(iculosis) · Angiodysplasia · Cancer")}</p><ol>'
        + f'<li><b>1st Rule out Upper</b> ก่อน by ใส่ <b>NG lavage</b> → <b>มี bile</b>: rule out upper ได้ · <b>ไม่มี bile</b>: R/O upper ไม่ได้ → ต้องทำ <b>EGD ด้วย</b> {hw("∵ ระวัง massive (upper) GI bleed")}</li>'
        + '<li><b>2nd Perianal bleeding area</b>: Hemorrhoid · Acute anal fissure · CA @ rectum · Rectal ulcer</li>'
        + f'<li><b>3rd</b>: <b>Colonoscope</b> → if ไม่เจอ → ส่ง {imp("CTA*")} · {hw("(ฟ้า) ถ้าไม่เจอเพราะ 1) หยุด bleed แล้ว 2) divert. ที่หยุด 3) angio bleed ที่หยุด } → ส่ง CT WA w/ A phase")}</li></ol>'
        + f'<p>{hw("(ม่วง)")} ถ้า <b>IC valve มีเลือด</b> → สงสัย <b>bleeding of small bowel</b></p>'
        + f'<p>{UPD_} ลำดับการตรวจตาม ACG 2023 {p.R("LGIB")}: <b>hemodynamically unstable / ยังเลือดออกมาก → CTA เป็นการตรวจแรก</b> (ก่อน colonoscopy) → CTA บวก → embolization (IR) หรือ colonoscopy · <b>stable → colonoscopy</b> (ทำแบบ non-urgent ได้ ไม่จำเป็นภายใน 24 ชม.) · CTA จะ<b>ไม่ได้ประโยชน์</b>ถ้าเลือดหยุดแล้ว (ตรวจได้เฉพาะ active bleeding ≥0.3–0.5 mL/min) — การ "ส่ง CTA หลัง colonoscopy ไม่เจอเพราะเลือดหยุดแล้ว" ตามโน้ตจึง yield ต่ำ</p>'
        + f'<p class="mut">{E} Hematochezia + shock → ต้องคิด <b>UGIB</b> (~10–15%) · BUN/Cr &gt;30 สนับสนุน upper · NG lavage ไม่แนะนำทำ routine แล้ว ถ้าสงสัย upper ให้ทำ EGD เลย · สงสัย small bowel (colonoscopy + EGD ปกติ, IC valve มีเลือด) → <b>capsule endoscopy</b> / CT enterography / device-assisted enteroscopy</p>'
        + gl('ACG 2023 Lower GI bleeding', f'แนะนำ <b>CTA เป็น initial test</b> ในผู้ป่วย hematochezia ที่ hemodynamically significant · CTA yield ต่ำใน minor bleeding หรือเลือดหยุดแล้ว {p.R("LGIB")}', f'Stable patients: colonoscopy หลัง bowel prep — ทำภายใน 24 ชม. ไม่ได้ลด rebleeding/mortality เทียบกับทำ non-urgent · ไม่แนะนำ tranexamic acid {p.R("LGIB")}'))
    h += box('Dysphagia', 'p16', ul(f'ส่ง <b>EGD*</b> ก่อน {hw("(ลายมืออ่านได้ประมาณว่า ตรวจได้ครอบคลุมกว่า/ก่อนค่อยส่งกลืน)")} <b>Barium</b>')
        + f'<p class="mut">{E} ASGE 2014: esophageal dysphagia → <b>EGD เป็นการตรวจแรก</b> (ดู mucosa + biopsy + dilate ได้) · <b>barium swallow</b> มีประโยชน์ก่อน EGD ถ้าสงสัย proximal lesion (<b>Zenker diverticulum</b>), stricture ซับซ้อน หรือ achalasia (bird-beak) · oropharyngeal dysphagia → videofluoroscopic swallow study {p.R("ASGED")}</p>')
    h += src(16)
    return h
add('R00-12', 'Lower GI bleed — common causes by age, rule out upper (NG lavage/EGD), perianal, colonoscopy vs CTA (ACG 2023), small-bowel source · Dysphagia → EGD first', ['Colorectal & Anorectal', 'Esophagus'],
    ['LGIB', 'ASGED'], b12)

# ================================================================ assemble
DOC = {
 'code': 'R00', 'kind': 'R',
 'title': 'Mossy Notes — สรุปลายมือ Gen Sx (breast, stomach, liver, pancreas, hernia, thyroid, biliary, LGIB)',
 'src': 'R00 Mossy — ไฟล์ PDF 16 หน้า (ภาพหน้าจอโน้ตลายมือจาก iPad, 15 พ.ย. 2026) · p1–3 Breast (p2–3 = p1 ซ้ำบนพื้นดำ) · p4–5 Stomach/GOO · p6 Local complication of pancreatitis · p7–8 Liver mass · p9 Acute pancreatitis · p10–11 Chronic pancreatitis, PDAC, cystic neoplasm · p12 Groin hernia · p13 Thyroid + หยุดยาก่อนผ่า · p14 Acute cholecystitis · p15 Cholangitis · p16 LGIB, Dysphagia · ถอดลายมือครบทุกบรรทัด + ตรวจกับ guideline ล่าสุด',
 'upd': UPD,
 'legend': '<span><span class="imp">ตัวแดง</span> = ผู้จดเน้น (ดาว */**, หมึกแดง, วงกลม, ไฮไลต์)</span><span><span class="hw">ตัวม่วงเอียง</span> = คำอธิบาย/โน้ตภาษาไทยของผู้จด หรือสีหมึกที่ระบุ</span><span><span class="chip e">เสริม</span> = Claude เพิ่มจากนอกโน้ต</span><span><span class="warn">⚠ แก้</span> = โน้ตเขียนผิด (มีทั้งของเดิมและที่ถูก)</span><span><span class="warn">⚠ อัปเดต</span> = โน้ตใช้แนวทางเก่า</span><span><span class="chip gl">📘 Guideline</span> = guideline ล่าสุด (ท้ายกล่อง)</span><span>pN = หน้าในไฟล์ PDF · ภาพต้นฉบับอยู่ท้ายแต่ละหน้า</span>',
 'pages': PAGES,
}
head, d = load('data/io.js')
d['docs'] = [x for x in d['docs'] if x['code'] != 'R00']
i = next((k for k, x in enumerate(d['docs']) if x['code'] == 'R22'), len(d['docs']))
d['docs'].insert(i, DOC)
save('data/io.js', head, d)

# ---------------------------------------------------------------- resources.js entries (code R, per topic)
RES = [
 ('Breast', ['Breast', 'Onco'], 'breast|mastectom|lumpectom|\\bBCT\\b|\\bBCS\\b|sentinel|axillary|\\bALND\\b|\\bSLNB\\b|Ki-?67|luminal|triple.negative|HER2', 'R00-1', [
  'Early (T1–2 N0) → surgery first; LABC = stage III (T3N1+, T4, N2–3) → neoadjuvant ตาม subtype · T3N0 = IIB ยังไม่ใช่ LABC',
  'Mastectomy เมื่อห้าม BCT: เคยฉาย RT, diffuse malignant calcification, margin บวกซ้ำ, inflammatory BC · pregnancy: ไตรมาส 2–3 ทำ BCS แล้ว RT หลังคลอด · BRCA ไม่ใช่ข้อห้าม · multicentric 2–3 ก้อน BCT ได้ (Z11102)',
  'cN0 → SLNB · cN+ → FNA/core LN: ลบ → SLNB, บวก → ALND (หรือ neoadjuvant แล้ว SLNB/TAD ถ้า ycN0) · Z0011: BCS + RT + SLN บวก 1–2 → ไม่ต้อง ALND',
  'ALND → lymphedema → cellulitis · inflammatory BC → MRM + ALND เสมอ',
  'Luminal B = ER+ HER2− Ki-67 ≥20% · TNBC prognosis แย่สุด · endocrine 5–10 ปี · BCT + RT (ละ RT ได้ในสูงอายุ ER+ T1N0 ที่กิน endocrine)']),
 ('Stomach & Duodenum', ['Stomach & duodenum', 'Onco'], 'peptic|perforat|\\bPUP\\b|omental|graham|gastric (ca|cancer|adeno)|stomach|krukenberg|virchow|sister mary|blumer|linitis|outlet obstruction|\\bGOO\\b|paradoxical aciduria', 'R00-2', [
  'PUP: NSAIDs + sudden pain + free air → simple closure + omental patch + PPI ~8 wk + ตรวจ/กำจัด H. pylori (ไม่ใช่ PPI ตลอดชีวิต)',
  'Gastric CA early (T1N0) → ESD/EMR ถ้าเข้าเกณฑ์ ไม่งั้น gastrectomy · ≥cT2/N+ → periop FLOT + durvalumab (MATTERHORN, FDA 2025) หรือ upfront D2 + adjuvant (เอเชีย)',
  'Distant node (para-aortic, Virchow) / hematogenous / peritoneal → palliative · signs: malignant ascites, Sister Mary Joseph, Krukenberg, Blumer\'s shelf',
  'อาเจียนทันทีหลังกิน = linitis plastica (non-distensible) · อาเจียนหลังกินหลายชม. + succussion splash = GOO',
  'GOO: hypochloremic hypokalemic metabolic alkalosis + paradoxical aciduria (severe) → NSS ก่อน แล้ว KCl เมื่อมี urine']),
 ('Liver', ['Liver'], 'liver mass|hepatic mass|hemangioma|\\bFNH\\b|focal nodular|hepatic adenoma|hepatocellular|\\bHCC\\b|cholangiocarcinoma|liver metast|washout|centripetal|primovist|eovist|gadoxet', 'R00-3', [
  'Triple-phase CT/MRI แยก liver mass · hemangioma = peripheral nodular → centripetal fill-in',
  'FNH vs adenoma: hepatobiliary-phase MRI (gadoxetate ~20 นาที) FNH จับ / adenoma ไม่จับ · FNH ไม่ผ่า',
  'Adenoma (OCP): หยุด OCP → ผ่าเมื่อ ≥5 cm, ผู้ชาย, β-catenin, เลือดออก',
  'HCC: APHE + washout ในกลุ่มเสี่ยง (cirrhosis/HBV) = Dx ไม่ต้อง biopsy · iCCA: delayed enhancement + capsular retraction + focal duct dilatation',
  'Liver mets: M/C colorectal (hypovascular, portal phase) · hypervascular: NET, RCC, melanoma, thyroid, GIST · work-up colonoscopy + EGD ± biopsy']),
 ('Pancreas & Spleen', ['Pancreas', 'Gallstone', 'Jaundice'], 'pancreatit|BISAP|ranson|atlanta|pseudocyst|walled.off|necros|\\bWON\\b|\\bAPFC\\b|puestow|partington|frey|pancreatic (ca|cancer|duct|cyst)|\\bPDAC\\b|whipple|double duct|\\bIPMN\\b|mucinous cystic|serous cyst|\\bSPN\\b|pseudopapillary', 'R00-4', [
  'Acute pancreatitis Dx 2/3: typical pain, lipase/amylase ≥3×ULN, imaging · BISAP ≥3 (BUN >25, impaired mental, SIRS, age >60, pleural effusion) · severity ตาม Revised Atlanta (persistent OF >48 h = severe)',
  '<4 wk: APFC / ANC · >4 wk: pseudocyst / WON · infected necrosis (gas) → carbapenem + step-up delayed',
  'Fluid: moderately aggressive goal-directed LR (WATERFALL, ACG 2024) · early oral/enteral feeding · gallstone mild → same-admission LC; severe → รอ ≥6 wk',
  'Chronic pancreatitis: alcohol, calcification, steatorrhea, DM 3c · duct >7 mm → lateral PJ (Partington–Rochelle/Puestow) · head mass → Whipple/Frey · early surgery ดีกว่า endoscopy-first (ESCAPE)',
  'PDAC head: painless progressive jaundice + double duct sign → Whipple (pancreaticoduodenectomy) · pre-op biliary drainage ไม่ routine (cholangitis/รอ neoadjuvant/คันมาก) → ERCP + metal stent ก่อน PTBD',
  'Cystic: rule out pseudocyst · SCN honeycomb ผ่าเมื่อมีอาการ · MCN body/tail eggshell calcification ผ่าเมื่อ ≥4 cm/risk · MD/mixed IPMN ผ่า · BD-IPMN ตาม HRS/WF (Kyoto 2024) · SPN ผ่า']),
 ('Hernia & Abdominal wall', ['Hernia'], 'hernia|incarcerat|strangulat|reduction en masse|lichtenstein|\\bTEP\\b|\\bTAPP\\b|mesh', 'R00-7', [
  'Elective tension-free mesh repair + แก้ constipation/BPH · ชายไม่มีอาการ watchful waiting ได้ · หญิง/femoral ผ่าเร็ว',
  'Incarcerated (M/C indirect, omentum) <6 hr ไม่มี sign → reduce · ≥6 hr/สงสัย → Sx',
  'Obstructed → ห้าม reduce, ต้องผ่าดู viability (ระวัง reduction en masse) · Strangulated → emergency ± laparotomy ตัดลำไส้',
  'Mesh ใช้ได้ใน clean-contaminated · contaminated มาก → tissue repair/biologic']),
 ('Thyroid & Endocrine', ['Thyroid & parathyroid'], 'thyroid nodule|thyroid mass|bethesda|\\bFNA\\b|TI-?RADS|cold nodule|hot nodule|toxic adenoma|papillary thyroid|follicular (neoplasm|carcinoma)|medullary|anaplastic', 'R00-8', [
  'Thyroid mass: TSH ก่อน → ต่ำ = scan (hot ไม่ต้อง FNA, cold → US/FNA) · ปกติ/สูง → US pattern → FNA (high/intermediate ≥1 cm, low ≥1.5 cm, very low ≥2 cm)',
  'Bethesda 2023: I repeat FNA · II follow-up (ไม่ต้องเจาะซ้ำ) · III repeat/molecular/lobectomy · IV molecular/lobectomy · V–VI lobectomy หรือ total',
  'ATA 2025: PTC ≤2 cm intrathyroidal → lobectomy preferred, 2–4 cm เลือกได้',
  'DTC = papillary + follicular (+oncocytic) · medullary = C cell (calcitonin, RET/MEN2) · anaplastic = undifferentiated']),
 ('Perioperative care & Surgical infection', ['Pre-op & post-op'], 'warfarin|bridging|\\bDOAC|\\bNOAC|apixaban|rivaroxaban|dabigatran|clopidogrel|aspirin|antiplatelet|anticoagul|enoxaparin|heparin', 'R00-9', [
  'CHEST 2022: aspirin ส่วนใหญ่ให้ต่อ · clopidogrel หยุด 5 วัน · DOAC หยุด 1–2 วัน (dabigatran + CrCl <50 นานขึ้น) ไม่ bridging',
  'Warfarin หยุด 5 วัน · bridging LMWH เฉพาะ thrombotic risk สูงมาก (VTE/stroke <3 เดือน, mechanical mitral valve) · AF ไม่ bridging (strong) · mechanical valve ทั่วไป CHEST 2022 suggest ไม่ bridging',
  'UFH IV หยุด 4–6 ชม. · LMWH therapeutic dose สุดท้าย ~24 ชม. ก่อนผ่า']),
 ('Gallbladder & Biliary', ['Gallstone', 'Jaundice'], 'cholecystitis|cholangitis|murphy|cholecystostomy|PTGBD|\\bFOSF\\b|tokyo|\\bTG18\\b|charcot|reynolds|\\bPTBD\\b|\\bERCP\\b|emphysematous|empyema', 'R00-10', [
  'Acute cholecystitis: US = imaging of choice · grade II = WBC >18,000, tender mass, >72 hr, marked local inflammation · grade III = organ dysfunction',
  'TG18 grade III: FOSF (cardiovascular/renal) + ไม่มี negative predictors (jaundice TB ≥2, neuro, resp) + fit → early LC; ไม่งั้น GB drainage แล้ว delayed LC',
  'Organ dysfunction: hepatic = PT-INR >1.5 · hematologic = platelet <100,000',
  'Cholangitis: M/C CBD stone, Gram-negative · grade I ATB · grade II early drainage · grade III urgent drainage · ERCP > PTBD > CBD exploration · เคลียร์ CBD แล้ว LC',
  'ATB: community ceftriaxone ± metronidazole · healthcare/grade III pip-tazo/carbapenem']),
 ('Colorectal & Anorectal', ['Colorectal'], 'lower GI bleed|hematochezia|\\bLGIB\\b|diverticul.*bleed|angiodysplasia|\\bCTA\\b|NG lavage', 'R00-12', [
  'LGIB ผู้สูงอายุ: diverticulosis, angiodysplasia, cancer · rule out upper (EGD ถ้าสงสัย, NG lavage มี bile ช่วย R/O)',
  'ACG 2023: unstable/active → CTA ก่อน → embolization/colonoscopy · stable → colonoscopy non-urgent · CTA ไม่ช่วยถ้าเลือดหยุดแล้ว',
  'IC valve มีเลือด → small bowel source → capsule endoscopy/CT enterography']),
 ('Esophagus', ['Esophagus'], 'dysphagia|barium swallow|esophagram', 'R00-12', [
  'Esophageal dysphagia → EGD first (biopsy/dilate ได้) · barium ก่อนถ้าสงสัย Zenker/stricture ซับซ้อน/achalasia']),
]
rs = open('data/resources.js', encoding='utf8').read()
i0 = rs.index('\nW.RES=') + 7
lst = json.loads(rs[i0:].rstrip().rstrip(';'))
lst = [r for r in lst if r.get('code') != 'R00']
new = []
for topic, tags, kw, pid, pts in RES:
    new.append({'code': 'R00', 'title': 'Mossy Notes — ' + topic, 'kw': kw, 'topic': topic, 'tags': tags,
                'type': 'Handout (สรุปลายมือ)', 'url': '',
                'note': f'สรุปลายมือ Mossy (16 หน้า) · {topic} · Round I/O {pid}', 'points': pts})
lst = new + lst
open('data/resources.js', 'w', encoding='utf8').write(rs[:i0] + json.dumps(lst, ensure_ascii=False, indent=0) + ';\n')
print('ok R00', len(PAGES), 'pages', sum(len(x['html']) for x in PAGES), 'chars; resources', len(new))

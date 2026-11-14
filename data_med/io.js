/* Round I/O (อ่านสรุปเนื้อหา) — Internal Medicine Y4 MDCU · รูปแบบเดียวกับ data/io.js (Gen Sx) · W.IO.docs = [{code, kind, title, src, upd, legend?, types?, pages:[{id,title,topics,rev,upd,html,refs}]}]
   types (14 พ.ย. 2026): ["OSCE"] = เห็นเฉพาะแท็บนั้น · ไม่ใส่ = ใช้ร่วมทุกแท็บ (L01 CXR = ใช้ร่วม ตามผู้ใช้สั่ง) · รูปหน้าเต็มของ L01 = img/medl01_p1..48 (เก็บไว้ใช้แต่งโจทย์ภายหลัง) */
W.IO={
"docs": [
{
"code": "L01",
"kind": "L",
"title": "Basic concepts and common abnormal CXR",
"src": "CXR_4thY_med_2026.pdf — สไลด์ \"Basic Concepts and Common Abnormal CXR\" 17 June 2026 · Amornpun Wongkarnjana, MD, MSc (Division of Pulmonology and Critical Care Medicine, Dept. of Internal Medicine, KCMH) · 48 หน้า สไลด์ + ลายมือ (p = หน้า PDF)",
"upd": "2026-11-14",
"legend": "<span><span class=\"imp\">ตัวแดง</span> = สำคัญ/เน้นมาก</span><span><span class=\"hw\">ตัวเอียง</span> = ลายมือในไฟล์</span><span>pN = หน้า PDF</span><span><span class=\"chip g\">📖 อธิบาย</span> = Claude อธิบายเพิ่ม (มีแค่รูป/หัวข้อในสไลด์) อ้างตำรา</span><span><span class=\"chip gl\">📘 Guideline</span> = เนื้อหาจาก guideline ล่าสุด</span><span><span class=\"warn\">! ต่าง</span> = ไม่ตรงกับสไลด์/ระหว่างแหล่ง</span>",
"pages": [
{
"id": "L01-1",
"title": "ท่าถ่าย (projection) ของ CXR: PA, AP, lateral, decubitus, lordotic, oblique",
"topics": [
"Pulmonology"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"iointro\">บทนี้สอนอ่าน CXR ตั้งแต่ <b>ท่าถ่าย → อ่านเป็นระบบ → แยกชนิด opacity (linear/reticular · nodular · airspace) → เคสฉุกเฉิน 2 เคส (effusion/pneumothorax/atelectasis และ PE)</b> แล้วจบด้วย <b>How to beat the OSCE</b> (p47) ซึ่งเป็นแนวตอบสถานี CXR — หน้านี้ = ท่าถ่ายแต่ละแบบใช้ทำอะไร {{R:1}}</div>\n<div class=\"box\"><h3>ท่าถ่ายมาตรฐาน <span class=\"ref\">p3–4</span></h3>\n<p><b>PA upright</b> = ท่ามาตรฐาน (รังสีเข้าหลัง ออกหน้า หน้าอกชิดแผ่นฟิล์ม) → หัวใจขยายน้อย ประเมินขนาดหัวใจ (CTR) ได้</p>\n<p><b>AP upright / supine</b> = ผู้ป่วยหนัก ลุกไม่ไหว · ข้อจำกัดในสไลด์: <span class=\"imp\">AP: ?heart size, ?fluid</span> → หัวใจดูโตเกินจริง (ไกลฟิล์ม magnify) และ supine ทำให้ effusion กระจายไปด้านหลัง ไม่เห็นระดับน้ำ</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> AP จึง <b>ห้ามสรุป cardiomegaly จาก CTR</b> · supine film: effusion = ปอดขาวจาง ๆ ทั้งซีก (veil-like), pneumothorax ไปอยู่ด้านหน้า-ล่าง เห็นเป็น <b>deep sulcus sign</b> {{R:2}}</p>\n<div class=\"fig\">{{IMG:medl01_p3}}</div></div>\n<div class=\"box\"><h3>Lateral film <span class=\"ref\">p6–9</span></h3>\n<p>ถ่าย <span class=\"imp\">ซ้ายชิดฟิล์มเสมอ (Always LEFT!!!)</span> <span class=\"hw\">\"Lt. ชิด film ONLY\" → หัวใจขนาดใกล้จริง</span> · ใช้ <b>บอกตำแหน่ง lobe / segment / mediastinal zone</b></p>\n<p>จุดสังเกตในสไลด์: <b>A</b>orta · retro<b>C</b>ardiac space · <b>E</b>sophagus, <b>T</b>rachea · retro<b>S</b>ternal space · <b>H</b> = minor fissure · <b>O</b> = major fissure · ▶ LUL bronchus · ▶ bronchus intermedius</p>\n<p class=\"hw\">ลายมือ: retrosternal space ≈ 2/3 ปอด (ส่วนบน) · 1/3 ล่าง = RV (anterior) · ถ้าไม่เห็นช่องหลังหัวใจ (O) = consolidation / LAE</p>\n<p><span class=\"imp\">Spine sign</span>: ปกติกระดูกสันหลังใน lateral จะ <b>ดำลงเรื่อย ๆ จากบนลงล่าง</b> (More black) <span class=\"hw\">— ถ้า \"ขาว → ดำ → ขาว\" (ล่างกลับขาวขึ้น) = มี opacity ที่ lower lobe ทับอยู่ (p7: consolidation/patchy RLL zone; p9: ก้อนตรง retrocardiac)</span></p>\n<div class=\"fig\">{{IMG:medl01_p6}}{{IMG:medl01_p7}}</div></div>\n<div class=\"box\"><h3>Lateral decubitus <span class=\"ref\">p10</span></h3>\n<p>Rt หรือ Lt lateral decubitus (นอนตะแคงข้างที่สงสัยลง) → <b>ตรวจ effusion</b> <span class=\"hw\">(&gt; 100 cc)</span> · <b>ไวน้อยกว่า ultrasound</b> <span class=\"hw\">(US เห็นได้ &gt; 40–50 cc)</span> · ใช้ยืนยัน subpulmonic effusion (สงสัยเมื่อ hemidiaphragm ดูสูงผิดปกติ) และกะปริมาณ / ดูว่าน้ำไหลอิสระ (free-flowing) ไหม</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <span class=\"warn\">! ต่าง</span> ตัวเลขปริมาณน้ำต่างกันตามตำรา — ตำราภาพรังสีทรวงอก: PA upright เริ่มเห็น CP angle ทู่เมื่อ ~200 mL, lateral ~50 mL (posterior CP angle), decubitus เห็นได้ตั้งแต่ ~5–10 mL, ultrasound ไวที่สุด {{R:2}} · <b>สอบวอร์ดยึดตัวเลขในสไลด์/ลายมือ</b> และรู้ลำดับความไว: US &gt; decubitus &gt; lateral &gt; PA</p>\n<div class=\"fig\">{{IMG:medl01_p10}}</div></div>\n<div class=\"box\"><h3>Lordotic / apicogram และ oblique <span class=\"ref\">p11–14</span></h3>\n<p><b>Lordotic (apicogram)</b> <span class=\"hw\">= ท่าแอ่นหลัง</span> → ยก clavicle พ้น apex ดู <b>apical lesion</b> <span class=\"hw\">(lung apex)</span> · ข้อเสีย: <b>incorrect measurement</b> <span class=\"hw\">(magnification)</span></p>\n<p><b>Oblique view (RAO, LAO)</b> <span class=\"hw\">เอียง 45°</span> = <b>old fashion</b> แล้ว · เคยใช้แยกว่าเงาเป็น <span class=\"hw\">\"rib or lung?\"</span> (ตามดูว่าเงาขยับตาม rib ตอนเอียงไหม) — ปัจจุบันใช้ CT แทน</p>\n<div class=\"fig\">{{IMG:medl01_p11}}{{IMG:medl01_p13}}</div></div>",
"refs": [
{
"t": "L01 — CXR_4thY_med_2026.pdf — สไลด์ \"Basic Concepts and Common Abnormal CXR\" 17 June 2026 · Amornpun Wongkarnjana, MD, MSc (Division of Pulmonology and Critical Care Medicine, Dept. of Internal Medicine, KCMH) · 48 หน้า สไลด์ + ลายมือ (p = หน้า PDF)"
},
{
"t": "Goodman LR. Felson's Principles of Chest Roentgenology: A Programmed Text, 5th ed. Elsevier; 2020"
}
]
},
{
"id": "L01-2",
"title": "อ่าน CXR อย่างเป็นระบบ (ABCDEFGHI) + hidden areas + แบบตอบ OSCE",
"topics": [
"Pulmonology"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"iointro\">สไลด์ใช้ลำดับ <b>A–I</b> (ลายมือเขียนตัวย่อข้าง ๆ: <span class=\"hw\">Airway · Bone · Cardiac · Diaphragm · Effusion · Field of lung · Gastric bubble</span>) และหน้า How to beat the OSCE (p47) สรุปว่าต้องพูด <b>general description ก่อน</b> แล้วไล่ทีละส่วน {{R:1}}</div>\n<div class=\"box\"><h3>ลำดับการอ่าน (สไลด์ p4) <span class=\"ref\">p4</span></h3>\n<p><b>A</b> Assessment of quality / Airway · <b>B</b> Bones and soft tissues · <b>C</b> Cardiac · <b>D</b> Diaphragm · <b>E</b> Effusions / extrathoracic soft tissue · <b>F</b> Fields, fissures and foreign bodies · <b>G</b> Great vessels / gastric bubble · <b>H</b> Hila and mediastinum · <b>I</b> Impression</p>\n<p><span class=\"imp\">Lung volume: anterior 6 ribs; posterior 9–11 ribs</span> <span class=\"hw\">— นับ rib ถึงกลาง hemidiaphragm (mid diaphragm)</span> · น้อยกว่า = low lung volume (หายใจไม่เต็มที่ / restrictive), มากกว่า = hyperinflation</p>\n<div class=\"fig\">{{IMG:medl01_p4}}</div></div>\n<div class=\"box\"><h3>Quality: position · exposure · rotation · inspiration <span class=\"ref\">p4, p45, p47</span></h3>\n<p>General description ใน p47: <b>Position</b> PA/AP, upright/supine · <b>Exposure</b> good/under/over · <b>Rotation</b> no/left/right <span class=\"hw\">(ดู spinous process)</span> · <b>Lung volume</b> normal/low/high</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <b>Exposure</b>: ดีเมื่อเห็น vertebral body จาง ๆ หลังเงาหัวใจ และเห็น vessels ถึงขอบปอด — <span class=\"hw\">\"ขาวเกิน = under exposure\"</span> (p45) · ดำเกินจนไม่เห็นลายปอด = over exposure · <b>Rotation</b>: spinous process ต้องอยู่กึ่งกลางระหว่างปลาย medial ของ clavicle สองข้าง {{R:2}}</p></div>\n<div class=\"box\"><h3>Hidden areas — จุดที่ต้องตั้งใจดูเสมอ <span class=\"ref\">p4–5, p9</span></h3>\n<p>Trachea · paratracheal · hila · <span class=\"imp\">retrocardiac</span> · bone / soft tissue <span class=\"hw\">(เน้นรอยโรคหลังหัวใจ = retrocardiac opacity)</span></p>\n<p><span class=\"chip g\">📖 อธิบาย</span> ใน PA ปกติต้องเห็นขอบ descending aorta และขอบ medial ของ left hemidiaphragm ผ่านเงาหัวใจ — ถ้าหายไปหรือหลังหัวใจขาวกว่าอีกข้าง = retrocardiac opacity (LLL consolidation/collapse, hiatal hernia, mass) {{R:2}}</p>\n<div class=\"fig\">{{IMG:medl01_p5}}{{IMG:medl01_p9}}</div></div>\n<div class=\"box imp\"><h3>แบบตอบสถานี CXR — OSCE Med Y4 MDCU (แบบที่ผู้ใช้กำหนด 14 พ.ย. 2026)</h3>\n<p>เฉลยเรียง A→I แต่ <b>ตรวจตามเนื้อหา ไม่สนลำดับ</b> · \"must\" = น้ำหนักมาก</p>\n<p><b>A — Assessment (ต้องครบ 4) &amp; Airway</b>: PA/AP upright/supine · good/under/over exposure · no/right/left rotation · normal/low/high lung volume [A6, P9–11] · trachea is midline (must) · carina visible, main bronchi patent, no tracheal narrowing (can)</p>\n<p><b>B — Bones &amp; soft tissue</b>: no acute fracture (ควรพูด), no lytic/sclerotic lesion, normal soft tissue, no subcutaneous emphysema (เขียนรวมว่า normal bones and soft tissue ได้)</p>\n<p><b>C — Cardiac</b> (อย่างน้อย heart size หรือ CTR): normal heart size / CTR &lt; 0.5 · cardiomediastinal silhouette WNL · mediastinum not widened (ดีถ้าพูด) — <span class=\"warn\">! ฟิล์ม AP/supine ประเมินขนาดหัวใจไม่ได้</span></p>\n<p><b>D — Diaphragm</b> (ต้องมี): right hemidiaphragm higher than left (must) · sharp costophrenic angles (must) · no subdiaphragmatic free air (can)</p>\n<p><b>E — Effusions</b>: no pleural thickening / effusion / pneumothorax</p>\n<p><b>F — Fields of lungs</b> (ผิดปกติ = ห้ามขาด): clear lungs bilaterally · no consolidation · no nodule/mass · normal pulmonary vascularity</p>\n<p><b>G — Gastric bubble &amp; Great vessels</b>: gastric bubble under left hemidiaphragm (ถ้าเห็นควรเขียน) · normal aorta / PA</p>\n<p><b>H — Hila</b>: left hilum slightly higher than right · no hilar enlargement/mass</p>\n<p><b>I — Instruments</b>: มีสายหรืออุปกรณ์ต้องเขียน (ไม่มีไม่ต้องเขียน)</p>\n<p>ตามด้วย <b>Specific points &amp; Dx</b> (p47): ชนิด opacity, ขอบชัด/ไม่ชัด, ขนาด/contour ของก้อน, ตำแหน่ง · <span class=\"imp\">Dx/DDx ตอบเฉพาะที่โจทย์ถาม!</span></p></div>",
"refs": [
{
"t": "L01 — CXR_4thY_med_2026.pdf — สไลด์ \"Basic Concepts and Common Abnormal CXR\" 17 June 2026 · Amornpun Wongkarnjana, MD, MSc (Division of Pulmonology and Critical Care Medicine, Dept. of Internal Medicine, KCMH) · 48 หน้า สไลด์ + ลายมือ (p = หน้า PDF)"
},
{
"t": "Goodman LR. Felson's Principles of Chest Roentgenology: A Programmed Text, 5th ed. Elsevier; 2020"
}
]
},
{
"id": "L01-3",
"title": "Linear & reticular opacities (LIFE / BELL)",
"topics": [
"Pulmonology"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"iointro\">opacity แบ่งเป็น 3 กลุ่ม: <b>linear/reticular · nodular · airspace</b> (p15) — เริ่มจาก linear/reticular ซึ่งเกิดจากโครงสร้างใน secondary pulmonary lobule หนาตัว <span class=\"hw\">(airway, vessels, interstitium, septum)</span> {{R:1}}</div>\n<div class=\"box\"><h3>Secondary pulmonary lobule <span class=\"ref\">p16, p20</span></h3>\n<p>หน่วยเล็กสุดที่มีผนังกั้น (interlobular septa 0.1 mm) · กลาง lobule มี bronchiole + pulmonary artery · ขอบ lobule (ใน septa) มี pulmonary veins + lymphatics · visceral pleura 0.1 mm</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> ตำแหน่งในโครงสร้างนี้บอกกลไก: septa/lymphatic หนา = เส้นตรงสั้นถึงขอบปอด (Kerley B lines ใน pulmonary edema, lymphangitic carcinomatosis) · รอบ bronchiole = centrilobular {{R:3}}</p>\n<div class=\"fig\">{{IMG:medl01_p16}}</div></div>\n<div class=\"box\"><h3>Reticular opacity — แยกตาม lung volume <span class=\"ref\">p17–19</span></h3>\n<p><b>Low lung volume — \"LIFE\"</b>: <b>L</b>ymphatic (lymphangitic spread) · <b>I</b>nfection <span class=\"hw\">(viral, PCP)</span> · <b>F</b>ibrosis · <b>E</b>dema</p>\n<p><b>Normal-to-large lung volume — \"BEL(L)\"</b>: <b>B</b>ronchiectasis · <b>E</b>mphysema <span class=\"hw\">(smoking)</span> · <b>L</b>ymphangioleiomyomatosis (LAM), Langerhans' cell histiocytosis (PLCH) <span class=\"hw\">(cystic lung dis.)</span></p>\n<p class=\"hw\">p17: pulmonary edema — เส้น ๆ เล็ก ๆ (reticulation) ที่ peripheral 1/3 ซึ่งปกติไม่ควรเห็นเส้น</p>\n<p class=\"hw\">p18: cystic lung disease (CT เห็น cyst ผนังบางกระจายทั้งปอด)</p>\n<div class=\"fig\">{{IMG:medl01_p17}}{{IMG:medl01_p18}}{{IMG:medl01_p19}}</div></div>",
"refs": [
{
"t": "L01 — CXR_4thY_med_2026.pdf — สไลด์ \"Basic Concepts and Common Abnormal CXR\" 17 June 2026 · Amornpun Wongkarnjana, MD, MSc (Division of Pulmonology and Critical Care Medicine, Dept. of Internal Medicine, KCMH) · 48 หน้า สไลด์ + ลายมือ (p = หน้า PDF)"
},
{
"t": "Goodman LR. Felson's Principles of Chest Roentgenology: A Programmed Text, 5th ed. Elsevier; 2020"
},
{
"t": "Hansell DM, et al. Fleischner Society: Glossary of terms for thoracic imaging. Radiology 2008;246:697–722 (ยังเป็นฉบับปัจจุบันของ glossary)"
}
]
},
{
"id": "L01-4",
"title": "Nodular opacities: interstitial vs alveolar, SHEM, centrilobular, tree-in-bud",
"topics": [
"Pulmonology"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>ชนิดของ nodule <span class=\"ref\">p20–21</span></h3>\n<p><b>Interstitial nodules</b> <span class=\"hw\">(~ linear)</span>: small, <b>well-defined border</b></p>\n<p><b>Alveolar (acinar) nodules</b>: bigger, <b>fluffy border</b> <span class=\"hw\">(ขอบไม่ชัด)</span></p>\n<p><b>DDx nodular opacity — \"SHEM\"</b>: <b>S</b>ilicosis, sarcoidosis · <b>H</b> (LCH), hypersensitivity pneumonitis (HP) · <b>E</b>ndobronchial spread (infection) · <b>M</b>iliary (infection, mass)</p>\n<div class=\"fig\">{{IMG:medl01_p21}}</div></div>\n<div class=\"box\"><h3>Miliary — ตัวอย่าง thyroid CA metastasis <span class=\"ref\">p22</span></h3>\n<p class=\"hw\">normal lung volume · thyroid CA met. to lung · \"เยอะไป + peripheral ดูไม่ควรเห็น\" (จุดเล็ก ๆ จำนวนมากถึงขอบปอด)</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> Miliary = จุด 1–3 mm กระจายสม่ำเสมอทั้งสองปอด · DDx สำคัญในไทย: <span class=\"imp\">miliary TB</span>, fungal (histoplasmosis, talaromycosis ใน HIV), hematogenous metastasis (thyroid CA, RCC, melanoma), silicosis {{R:2}}</p>\n<div class=\"fig\">{{IMG:medl01_p22}}</div></div>\n<div class=\"box\"><h3>Centrilobular nodule &amp; tree-in-bud (CT) <span class=\"ref\">p23</span></h3>\n<p><b>Centrilobular nodule</b> — endobronchial spreading</p>\n<p><b>Tree-in-bud pattern</b> — <i>infection (common)</i> · small airway diseases · inhalation injury · tumor emboli (rare)</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> Tree-in-bud = bronchiole ปลายถูกอุดด้วยหนอง/มูก เห็นเป็นกิ่งมีตุ่ม — นึกถึง endobronchial spread ของ TB, bacterial bronchiolitis, NTM {{R:3}}</p>\n<div class=\"fig\">{{IMG:medl01_p23}}</div></div>",
"refs": [
{
"t": "L01 — CXR_4thY_med_2026.pdf — สไลด์ \"Basic Concepts and Common Abnormal CXR\" 17 June 2026 · Amornpun Wongkarnjana, MD, MSc (Division of Pulmonology and Critical Care Medicine, Dept. of Internal Medicine, KCMH) · 48 หน้า สไลด์ + ลายมือ (p = หน้า PDF)"
},
{
"t": "Goodman LR. Felson's Principles of Chest Roentgenology: A Programmed Text, 5th ed. Elsevier; 2020"
},
{
"t": "Hansell DM, et al. Fleischner Society: Glossary of terms for thoracic imaging. Radiology 2008;246:697–722 (ยังเป็นฉบับปัจจุบันของ glossary)"
}
]
},
{
"id": "L01-5",
"title": "Airspace opacities: consolidation, GGO, focal vs multifocal",
"topics": [
"Pulmonology"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>นิยาม <span class=\"ref\">p24</span></h3>\n<p><b>Airspace opacities</b>: heterogeneous · อาจบัง broncho-vascular bundle หรือไม่ก็ได้</p>\n<p><b>Consolidation</b> <span class=\"hw\">(~ solid หนาทึบ)</span>: homogeneous · <span class=\"imp\">บัง vascular structure + air bronchogram</span></p>\n<p><b>GGO (ground-glass opacity)</b> <span class=\"hw\">(บาง ๆ)</span>: เพิ่มความขุ่นของปอด แต่ยังเห็นเส้นเลือดจาง ๆ (ill-defined vascular structure)</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <b>Silhouette sign</b> = opacity ที่อยู่ติดกับขอบหัวใจ/กะบังลมจะทำให้ขอบนั้นหายไป → ใช้บอกตำแหน่ง: ขอบหัวใจขวาหาย = RML, ขอบหัวใจซ้ายหาย = lingula, ขอบกะบังลมหาย = lower lobe {{R:2}}</p>\n<div class=\"fig\">{{IMG:medl01_p24}}</div></div>\n<div class=\"box\"><h3>ตัวอย่างภาพ <span class=\"ref\">p25–26</span></h3>\n<p class=\"hw\">p25: diffuse bilateral GGO — CT แบบ crazy paving · \"alveoli เก็บโปรตีน\" = pulmonary alveolar proteinosis (PAP)</p>\n<p class=\"hw\">p26: consolidation ที่ RLL (กรอบแดงซ้าย) และ retrocardiac / LLL (กรอบแดงขวา)</p>\n<div class=\"fig\">{{IMG:medl01_p25}}{{IMG:medl01_p26}}</div></div>\n<div class=\"box\"><h3>DDx ของ airspace opacity <span class=\"ref\">p27</span></h3>\n<p><span class=\"imp\">Alveoli are filled with: water, blood, pus, cells, substance (protein/lipid)</span></p>\n<table><tr><th></th><th>Focal opacity</th><th>Multifocal opacity</th></tr>\n<tr><td>Acute</td><td>pneumonia · pulmonary hemorrhage · pulmonary infarction · radiation pneumonitis</td><td>pneumonia · pulmonary hemorrhage · pulmonary edema · aspiration</td></tr>\n<tr><td>Chronic</td><td>neoplasm (lymphoma, CA lung) · tuberculosis · lipoid pneumonia · COP · eosinophilic pneumonia</td><td>neoplasm · alveolar proteinosis · lipoid pneumonia · sarcoidosis · COP · eosinophilic pneumonia</td></tr></table>\n<div class=\"fig\">{{IMG:medl01_p27}}</div></div>",
"refs": [
{
"t": "L01 — CXR_4thY_med_2026.pdf — สไลด์ \"Basic Concepts and Common Abnormal CXR\" 17 June 2026 · Amornpun Wongkarnjana, MD, MSc (Division of Pulmonology and Critical Care Medicine, Dept. of Internal Medicine, KCMH) · 48 หน้า สไลด์ + ลายมือ (p = หน้า PDF)"
},
{
"t": "Goodman LR. Felson's Principles of Chest Roentgenology: A Programmed Text, 5th ed. Elsevier; 2020"
}
]
},
{
"id": "L01-6",
"title": "เคสฉุกเฉิน 1: pleural effusion, pneumothorax, hydropneumothorax",
"topics": [
"Pulmonology"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"iointro\"><b>Scenario 1</b> (p28): ผู้ใหญ่หอบเหนื่อยเฉียบพลัน 1 วัน RR 28, PR 120, SpO₂ 92% · <span class=\"imp\">breath sound ลดลงข้างขวา</span> → CXR 1.1 (ปอดขวาขาวมีระดับน้ำ) และ 1.2 (ขวาขาวทั้งซีก) — โจทย์คือแยก effusion / hydropneumothorax / atelectasis {{R:1}}</div>\n<div class=\"box\"><h3>1.1 Hydropneumothorax <span class=\"ref\">p29–31</span></h3>\n<p>Nodular and patchy opacity ที่ปอดซ้ายบน <span class=\"hw\">(infection? TB? complicate?)</span> · ข้างขวา: <span class=\"imp\">visible pleural line · no lung marking beyond pleural line · air-fluid level</span> = <b>hydropneumothorax</b> <span class=\"hw\">(อาจเป็น hemothorax)</span></p>\n<p class=\"hw\">p31: TB cavity → หนองแตกเข้า pleura → pneumothorax + hydro (ตามเวลาก่อน → ER)</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> ระดับน้ำใน hydropneumothorax เป็น <b>เส้นตรงแนวนอน</b> (มีอากาศเหนือน้ำ) ต่างจาก effusion ธรรมดาที่เป็น meniscus · สาเหตุ: TB/empyema แตก (bronchopleural fistula), trauma, หลังเจาะปอด {{R:2}}</p>\n<div class=\"fig\">{{IMG:medl01_p29}}{{IMG:medl01_p30}}{{IMG:medl01_p31}}</div></div>\n<div class=\"box\"><h3>Pleural effusion — meniscus sign <span class=\"ref\">p32</span></h3>\n<p><span class=\"imp\">Meniscus sign: a curved, upwardly concave line</span> — visible on an upright chest x-ray <span class=\"hw\">(p. effusion, no air in pleura)</span></p>\n<p><span class=\"chip g\">📖 อธิบาย</span> effusion ปริมาณมาก → mediastinum ถูกดันไป <b>ฝั่งตรงข้าม</b> · ถ้าปอดขาวทั้งซีกแต่ mediastinum ไม่ขยับ/ดึงเข้าหา = มี collapse ร่วม (เช่น central tumor) {{R:2}}</p>\n<div class=\"fig\">{{IMG:medl01_p32}}</div>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">BTS Guideline for pleural disease 2023 {{R:3}}</span></div><p><span class=\"chip gl\">📘 Guideline</span> <b>BTS 2023</b> · ใช้ <b>thoracic ultrasound</b> ประเมินและนำทางการเจาะ effusion ทุกครั้ง (BTS Clinical Statement on Pleural Procedures 2023) · unilateral effusion ที่ยังไม่ทราบสาเหตุ: CXR → US → เจาะส่ง pleural fluid (Light's criteria, cytology, culture; ADA สำหรับ TB ในพื้นที่ชุก) → CT with contrast ถ้ายังไม่ได้คำตอบ · pleural infection: pH ≤ 7.2 = ใส่สายระบาย</p><p><span class=\"chip gl\">📘 Guideline</span> <b>Pneumothorax (BTS 2023)</b>: ตัดสินการรักษาจาก <b>อาการ + ความเสี่ยง</b> มากกว่าขนาดบนฟิล์มอย่างเดียว · PSP อาการน้อยพิจารณา conservative ได้ · ตรวจ CXR ยืนยัน · <span class=\"warn\">! ต่าง</span> สไลด์ไม่ได้พูดเรื่องการรักษา — ใช้สำหรับข้อย่อย management</p></div></div>",
"refs": [
{
"t": "L01 — CXR_4thY_med_2026.pdf — สไลด์ \"Basic Concepts and Common Abnormal CXR\" 17 June 2026 · Amornpun Wongkarnjana, MD, MSc (Division of Pulmonology and Critical Care Medicine, Dept. of Internal Medicine, KCMH) · 48 หน้า สไลด์ + ลายมือ (p = หน้า PDF)"
},
{
"t": "Goodman LR. Felson's Principles of Chest Roentgenology: A Programmed Text, 5th ed. Elsevier; 2020"
},
{
"t": "Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society Guideline for pleural disease. Thorax 2023;78(Suppl 3):s1–s42",
"u": "https://brit-thoracic.org.uk/quality-improvement/guidelines/pleural-disease"
}
]
},
{
"id": "L01-7",
"title": "Atelectasis: ชนิด, signs, รูปแบบ lobar collapse",
"topics": [
"Pulmonology"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>1.2 Total right lung atelectasis <span class=\"ref\">p33–35</span></h3>\n<p>Total opacity of right hemithorax + loss of right diaphragm · <span class=\"imp\">trachea and mediastinal shift to RIGHT</span> (เข้าหาข้างที่ขาว = volume loss) · ↓ breath sound · <b>approximation of rib space</b></p>\n<p class=\"hw\">2 wk ก่อน: upward displacement of minor fissure — tumor อุด Rt main bronchus → ที่ ER collapse ทั้งปอด (obstructive atelectasis จากการอุดตันหลอดลม) · bronchoscopy: endobronchial tumor → Nd:YAG laser + forceps removal, หลัง radiation</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> ขาวทั้งซีก: ดูทิศ trachea/mediastinum — <b>ดึงเข้าหา</b> = collapse/pneumonectomy · <b>ดันออก</b> = effusion มาก/ก้อนใหญ่ · <b>อยู่กลาง</b> = consolidation ทั้งปอด หรือ effusion + collapse ร่วมกัน {{R:2}}</p>\n<div class=\"fig\">{{IMG:medl01_p33}}{{IMG:medl01_p34}}{{IMG:medl01_p35}}</div></div>\n<div class=\"box\"><h3>ชนิดของ atelectasis <span class=\"ref\">p36</span></h3>\n<p>① <b>Obstructive</b> <span class=\"hw\">(ลมไม่เข้า)</span> · ② <b>Compressive/Passive</b> <span class=\"hw\">(ขยายไม่ได้ — p. effusion)</span> · ③ <b>Cicatrization</b> <span class=\"hw\">(เนื้อปอดพัง)</span>: lung destruction and compliance ↓ · ④ <b>Adhesive</b>: volume loss from surfactant deficiency (<span class=\"imp\">ARDS</span>, radiation pneumonitis, pneumonia)</p></div>\n<div class=\"box\"><h3>Signs of atelectasis <span class=\"ref\">p37</span></h3>\n<p><b>Direct signs</b> <span class=\"hw\">(strong signs)</span>: crowding of vessels/bronchi · displacement of fissure</p>\n<p><b>Indirect signs</b>: abnormal opacification · silhouette sign · hilar/mediastinal displacement · compensatory hyperinflation · approximation of ribs · diaphragmatic elevation</p></div>\n<div class=\"box\"><h3>Lobar collapse แต่ละ lobe <span class=\"ref\">p38–42</span></h3>\n<p><b>RUL</b>: volume loss บนขวา <span class=\"hw\">ดึง minor fissure ขึ้น · trachea shift Rt</span> · <span class=\"chip g\">📖 อธิบาย</span> ถ้ามีก้อนที่ hilum ร่วมจะเห็นขอบโค้ง = <b>Golden S sign</b> (นึกถึง CA lung)</p>\n<p><b>RLL</b>: <span class=\"hw\">major fissure shift ลง · crowding of vessels · shift</span> → สามเหลี่ยมขาว paracardiac ขวา บังกะบังลมขวาส่วน medial แต่ยังเห็นขอบหัวใจขวา</p>\n<p><b>RML</b>: <span class=\"hw\">middle lobe ติดหัวใจ</span> → ขอบหัวใจขวาหาย (silhouette) · lateral เห็นแถบขาวบางระหว่าง minor/major fissure</p>\n<p><b>LUL</b>: <span class=\"hw\">Lt. volume loss · ไม่เห็นขอบหัวใจ (คล้าย RUL)</span> · <span class=\"imp\">Luftsichel sign</span>: compensatory hyperinflation of superior segment of LLL (เห็นเป็นแถบดำรูปเคียวรอบ aortic arch) · ในสไลด์มี mass ร่วม</p>\n<p><b>LLL</b>: <span class=\"hw\">ขาว ๆ retrocardiac opacity</span> → สามเหลี่ยมหลังหัวใจ (sail sign) ขอบ descending aorta / กะบังลมซ้ายด้าน medial หาย · trachea shift Lt</p>\n<div class=\"fig\">{{IMG:medl01_p38}}{{IMG:medl01_p39}}{{IMG:medl01_p40}}{{IMG:medl01_p41}}{{IMG:medl01_p42}}</div></div>",
"refs": [
{
"t": "L01 — CXR_4thY_med_2026.pdf — สไลด์ \"Basic Concepts and Common Abnormal CXR\" 17 June 2026 · Amornpun Wongkarnjana, MD, MSc (Division of Pulmonology and Critical Care Medicine, Dept. of Internal Medicine, KCMH) · 48 หน้า สไลด์ + ลายมือ (p = หน้า PDF)"
},
{
"t": "Goodman LR. Felson's Principles of Chest Roentgenology: A Programmed Text, 5th ed. Elsevier; 2020"
}
]
},
{
"id": "L01-8",
"title": "เคสฉุกเฉิน 2: pulmonary embolism บน CXR",
"topics": [
"Pulmonology"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"iointro\"><b>Scenario 2</b> (p43): หญิงวัยกลางคน DOE ค่อย ๆ มากขึ้น 10 วัน ไม่มีไข้/ไอ/pleurisy ไม่มีโรคประจำตัว · V/S stable SpO₂ 95% ขณะพัก <span class=\"imp\">เดินแล้วลดเหลือ 88% HR 90→120</span> · fine crackles RLL zone {{R:1}}</div>\n<div class=\"box\"><h3>CXR 2 <span class=\"ref\">p44–46</span></h3>\n<p class=\"hw\">normal lung volume (# rib) · ขาวเกิน = under exposure · \"PE\"</p>\n<p><span class=\"imp\">Decreased vasculature, oligemia — \"Westermark sign\"</span> <span class=\"hw\">(Rt &lt; Lt)</span> · <span class=\"imp\">Enlarged pulmonary artery with rapid tapering</span> <span class=\"hw\">(ไม่เห็นแขนง vessels ต่อ)</span></p>\n<p>CTPA: filling defect — <b>concentric thrombus</b> (ล้อมด้วย contrast) และ <b>eccentric thrombus</b> (ชิดผนัง)</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> CXR ใน PE ส่วนใหญ่ <b>ปกติหรือไม่จำเพาะ</b> — ใช้ตัดโรคอื่น (pneumothorax, pneumonia, effusion) · signs ที่ควรรู้: <b>Westermark</b> (oligemia distal ต่อลิ่มเลือด) · <b>Fleischner sign</b> (PA กลางโต) · <b>knuckle sign</b> (PA ตัดหาย/เรียวเร็ว) · <b>Hampton hump</b> (wedge-shaped opacity ชิด pleura = infarction) {{R:2}}</p>\n<div class=\"fig\">{{IMG:medl01_p44}}{{IMG:medl01_p45}}{{IMG:medl01_p46}}</div>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">2019 ESC acute PE {{R:3}} · 2026 AHA/ACC acute PE {{R:4}}</span></div><p><span class=\"chip gl\">📘 Guideline</span> <b>ESC 2019</b>: ประเมิน clinical probability (Wells / revised Geneva) → probability ต่ำ-ปานกลาง ตรวจ D-dimer (age-adjusted) ก่อน · probability สูงหรือ D-dimer บวก → <b>CTPA</b> · shock/hypotension → bedside echo หา RV dysfunction แล้วรักษาได้เลยถ้าทำ CTPA ไม่ได้ · risk stratify ด้วย PESI/sPESI + RV + troponin</p><p><span class=\"chip gl\">📘 Guideline</span> <b>AHA/ACC 2026</b> (guideline PE ฉบับแรกของ AHA/ACC): จัดกลุ่มใหม่ <b>Clinical Categories A–E</b> แทน massive/submassive · DOAC ก่อน warfarin, LMWH ก่อน UFH · PERT team · ติดตามอาการ ≥ 1 ปีเพื่อหา CTEPD · <span class=\"warn\">! ต่าง</span> ESC ยังใช้ low / intermediate-low / intermediate-high / high risk — ถ้าโจทย์ถาม risk ให้บอกว่าใช้ระบบไหน</p></div></div>",
"refs": [
{
"t": "L01 — CXR_4thY_med_2026.pdf — สไลด์ \"Basic Concepts and Common Abnormal CXR\" 17 June 2026 · Amornpun Wongkarnjana, MD, MSc (Division of Pulmonology and Critical Care Medicine, Dept. of Internal Medicine, KCMH) · 48 หน้า สไลด์ + ลายมือ (p = หน้า PDF)"
},
{
"t": "Goodman LR. Felson's Principles of Chest Roentgenology: A Programmed Text, 5th ed. Elsevier; 2020"
},
{
"t": "Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism (with ERS). Eur Heart J 2020;41:543–603",
"u": "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/"
},
{
"t": "Creager MA, Barnes GD, et al. 2026 AHA/ACC/ACCP/ACEP/CHEST/SCAI/SHM/SIR/SVM/SVN Guideline for the evaluation and management of acute pulmonary embolism in adults. Circulation 2026;153(12):e977–e1051",
"u": "https://www.emdocs.net/?p=25422"
}
]
},
{
"id": "L01-9",
"title": "สรุปรวมบท + How to beat the OSCE",
"topics": [
"Pulmonology"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>How to beat the OSCE (สไลด์สุดท้ายที่ผู้สอนเน้น) <span class=\"ref\">p47</span></h3>\n<p><b>Systematic readings</b> — General description: position (PA, AP, upright, supine) · exposure (good, under/over) · rotation (no, left, right <span class=\"hw\">— ดู spinous process</span>) · lung volume (normal, low, high) · Each part: trachea · heart · lung · pleura/diaphragm · bone and soft tissue</p>\n<p><b>Specific points &amp; Dx</b> — Abnormal findings: opacity (reticular, nodular, patchy <span class=\"hw\">— border ชัด/ไม่ชัด!</span>) · mass: size, contour · location: Rt/Lt, upper/lower · <span class=\"imp\">Diagnosis or DDx: only what question asks!</span></p>\n<div class=\"fig\">{{IMG:medl01_p47}}</div></div>\n<div class=\"box\"><h3>จุดออกสอบของบท</h3>\n<p>• ท่าถ่าย: lateral ซ้ายชิดฟิล์ม · AP ห้ามแปลขนาดหัวใจ · decubitus ดู effusion (สไลด์ &gt; 100 cc, US &gt; 40–50 cc)</p>\n<p>• Lung volume: A 6 / P 9–11 ribs · hidden areas โดยเฉพาะ retrocardiac</p>\n<p>• Reticular: LIFE (low volume) vs BELL (normal-large) · Nodular: SHEM · Airspace: alveoli เต็มด้วย water/blood/pus/cells/protein</p>\n<p>• Hydropneumothorax: pleural line + no lung marking + air-fluid level · Effusion: meniscus sign</p>\n<p>• Atelectasis: trachea/mediastinum ถูกดึงเข้าหา + rib แคบ + fissure เลื่อน · Luftsichel (LUL), retrocardiac sail (LLL), RML ลบขอบหัวใจขวา</p>\n<p>• PE: CXR มักปกติ — Westermark, enlarged PA with rapid tapering · ยืนยันด้วย CTPA</p>\n<p class=\"hw\">ลายมือทั้งบท = สิ่งที่ผู้สอนพูดในห้อง ถือเป็นเนื้อหาที่ต้องรู้</p></div>",
"refs": [
{
"t": "L01 — CXR_4thY_med_2026.pdf — สไลด์ \"Basic Concepts and Common Abnormal CXR\" 17 June 2026 · Amornpun Wongkarnjana, MD, MSc (Division of Pulmonology and Critical Care Medicine, Dept. of Internal Medicine, KCMH) · 48 หน้า สไลด์ + ลายมือ (p = หน้า PDF)"
}
]
}
]
}
]
};

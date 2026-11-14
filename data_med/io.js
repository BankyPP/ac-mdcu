/* Round I/O (อ่านสรุปเนื้อหา) — Internal Medicine Y4 MDCU · รูปแบบเดียวกับ data/io.js (Gen Sx) · W.IO.docs = [{code, kind, title, src, upd, legend?, types?, pages:[{id,title,topics,rev,upd,html,refs}]}]
   types (14 พ.ย. 2026): ["OSCE"] = เห็นเฉพาะแท็บนั้น · ไม่ใส่ = ใช้ร่วมทุกแท็บ (L01 CXR = ใช้ร่วม ตามผู้ใช้สั่ง) · รูปหน้าเต็มของ L01 = img/medl01_p1..48 (เก็บไว้ใช้แต่งโจทย์ภายหลัง)
   R01 OSCE Med for All (types:["OSCE"]) — ทำทีละช่วงหน้า (ชุด 1 = p1–27: ภาพรวม R01-0, History taking R01-H1…H12, PE R01-P1…P2, Advice R01-A1…A9) · ชุดถัดไปเพิ่มหน้าต่อใน doc เดิม · รูป img/medr01_pN */
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
},
{
"code": "R01",
"kind": "R",
"title": "OSCE Med for All",
"types": [
"OSCE"
],
"src": "OSCE_Med_For_All — สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout · รูปทุกหน้าอยู่ src_pages/med_r01 · ทำทีละช่วง: ชุด 1 = p1–27 (14 พ.ย. 2026)",
"upd": "2026-11-14",
"legend": "<span><span class=\"imp\">ตัวแดง</span> = ไฮไลต์/เน้นในสมุด</span><span><span class=\"hw\">ตัวเอียง</span> = ลายมือในสมุด</span><span>pN = หน้า PDF</span><span><span class=\"chip x\">เฉลยในสมุด</span> = คำตอบที่สมุดเขียนว่าเป็นเฉลย</span><span><span class=\"chip o\">📝 recall</span> = ข้อสอบจริงที่จดไว้ (ที่ติด XX ลง Service round ปี XX RoX)</span><span><span class=\"chip g\">📖 อธิบาย</span> = Claude อธิบายเพิ่ม (สมุดมีแค่หัวข้อ/รูป) อ้างตำรา/guideline</span><span><span class=\"chip gl\">📘 Guideline</span> = เนื้อหาจาก guideline ฉบับล่าสุด</span><span><span class=\"warn\">! ต่าง</span> = สมุดขัดกับ guideline/ตำรา (แหล่งที่น่าเชื่อถือกว่าขึ้นก่อน)</span><span><span class=\"chip s\">ซ้ำ</span> = guideline ตรงกับสมุด</span><span><span class=\"warn\">⚠ อ่านไม่ออก</span> = ลายมืออ่านไม่ชัด (ใส่ ? ไว้)</span>",
"pages": [
{
"id": "R01-0",
"title": "ภาพรวม R01 · สารบัญหัวข้อที่เคยออก + recall ข้อสอบจริง (p1–5)",
"topics": [
"Lab interpretation",
"Imaging",
"Microscope",
"EKG",
"Skin lesion",
"History taking",
"Physical examination",
"Procedure",
"Advice"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"iointro\"><b>R01 = OSCE Med for All</b> — สมุด GoodNotes <b>\"Last MED OSCE\"</b> ของรุ่น MDCU'71 (Cr. Future, EARK) 195 หน้า เกือบทั้งหมดเป็นลายมือ + handout/สไลด์ที่แปะไว้ · ใช้เป็น<b>แหล่งอ่านสำหรับแท็บ OSCE เท่านั้น</b> · Round I/O แยกหน้าตามหัวข้อใหญ่ OSCE ของ Med MDCU (Lab, Imaging, Microscope, EKG, Skin, History taking, PE, Procedure, Advice) และหัวข้อย่อย · ชุดนี้ = p1–27 (สารบัญ, recall, History taking, Advice) · ส่วน \"ถามตอบ DDx\" (p28–46) กระจายเข้าหัวข้อตามเรื่องในชุดถัดไป {{R:1}}</div>\n<div class=\"box\"><h3>สารบัญ: หัวข้อที่เคยออก + จำนวนข้อต่อการสอบ <span class=\"ref\">p2–3</span></h3>\n<p>ลายมือในสารบัญเขียน<b>จำนวนข้อ</b>ของแต่ละหมวด (เลขสีแดง) และติ๊กหัวข้อที่ทำในสมุดแล้ว</p>\n<table class=\"fx\"><tr><th>หมวด (จำนวนข้อ)</th><th>หัวข้อที่เคยออก (ตามลายมือ)</th></tr>\n<tr><td><b>Advice</b> (1) <span class=\"hw\">ไม่เน้นยา</span></td><td>TB ✓ · HIV ✓ · Gout: อาหาร, behaviour ✓ · ลดน้ำหนัก ✓ · 1st Dx: Adeno CA lung with pleural metas × effusion ? · ไข้ + ไอ + น้ำมูกใส คิดว่าเป็น virus → reassure ✓ · Asthma ✓</td></tr>\n<tr><td><b>Skin lesion</b> (1): บรรยาย + Dx ± technique ตรวจ</td><td>Herpes zoster ✓ · Psoriasis ✓ · Purplish striae ✓ · Pityriasis versicolor ✓ · wart? bowenoid papulosis? ✓</td></tr>\n<tr><td><b>Hx taking</b> (2)</td><td>fever 5 days: scrub typhus, dengue · abdominal pain: acute pancreatitis · diplopia ปิดตาแล้วดีขึ้น เอียงซ้ายดีขึ้น · <b>ชามือ 3 นิ้วครึ่ง radial side</b> · อาเจียนเป็นเลือด (DDx 3 โรค) · เลือดออกง่าย (เลือดออกทางไรฟัน, ผื่นเท่าฝ่ามือ) + มีไข้ · หมดสติชั่วคราว · ขาบวม · หา cause cirrhosis × complication · ปัสสาวะสีน้ำล้างเนื้อ 2 d · ไอเป็นเลือด 2 mo. · เหนื่อย: pneumonia · GI bleed w/ mild anemia · ถ่ายเป็นเลือด ดำสลับแดง</td></tr>\n<tr><td><b>หัตถการ</b> (1)</td><td>Foley's (retain's ✓, intermittent ✓) · ABG ✓ · Hemoculture ✓ · NG intubation ✓</td></tr>\n<tr><td><b>ตรวจร่างกาย + อธิบายผล</b> (2)</td><td><b>Trousseau's sign</b> · CVS · RS · abdominal exam: ท้องบวม + heavy alc. · motor exam of lower ext. · visual field · <b>Blood pressure</b> · ตรวจม้าม</td></tr>\n<tr><td><b>Imaging</b> (2–3)</td><td>CXR: sudden chest pain, aspiration pneumonia, pleural effusion, progressive dyspnea ✓ · CT brain: cerebellar infarction, Rt PCA infarction, Rt MCA infarct <span class=\"hw\">(LVF เป็นด้วย?)</span>, intracerebral hemorrhage ✓ · CT abdomen: ADPKD ± hepatic inv. · Thyroid scan, Parathyroid scan ✓ · USG gallbladder · hypercalcemia: บรรยาย, ตรวจอะไรต่อ</td></tr>\n<tr><td><b>Investigation: Lab</b> (1–2) <span class=\"hw\">เน้นแปลผล + cause + dx/ddx</span></td><td>Hb typing ✓ · TFT · LFT · gram stain + บอกเชื้อ: sputum, malaria, caseous granuloma จาก liver abscess(?) ✓ · joint aspiration ✓ · ECG: atrial flutter, MI c RBBB, inf. wall infarction, AF c STEMI, Mobitz I c LAE ✓ · prolonged APTT · parathyroid · UA: calcium oxalate, fatty cast ✓ · electrolyte imbalance: ↓HCO₃⁻ · CBC ของไข้…(?) + รูป urine · blood smear: AIHA, HS, IDA, thalassemia, G6PD def ✓ · TTKG</td></tr></table>\n<p class=\"mut\">ตัดหมายเลข HN ที่เขียนอยู่ในสารบัญออก (ข้อมูลผู้ป่วย)</p>\n<div class=\"fig\">{{IMG:medr01_p2}}{{IMG:medr01_p3}}</div></div>\n<div class=\"box\"><h3><span class=\"chip g\">📖 อธิบาย</span> หัวข้อที่เคยออกแต่สมุดไม่มีหน้าเนื้อหา — \"ชามือ 3 นิ้วครึ่ง radial side\"</h3>\n<p>= การกระจายของ <b>median nerve</b> (นิ้วโป้ง ชี้ กลาง และครึ่งนิ้วนางด้าน radial) → <b>carpal tunnel syndrome</b> · ซัก: ชา/ปวดมากตอน<b>กลางคืน</b> สะบัดมือแล้วดีขึ้น (flick sign) · ใช้ข้อมือซ้ำ ๆ · อ่อนแรงหยิบจับ ของหล่น · สาเหตุร่วม: <b>ตั้งครรภ์, hypothyroidism, DM, RA, acromegaly, amyloidosis, CKD/dialysis, obesity</b> · แยก: C6–C7 radiculopathy (ปวดคอร้าว), proximal median neuropathy · ตรวจ: <b>Tinel's sign</b>, <b>Phalen's test</b>, thenar atrophy, APB อ่อนแรง → ยืนยันด้วย nerve conduction study · รักษา: wrist splint ท่า neutral ตอนกลางคืน, ฉีด steroid, ผ่าตัด carpal tunnel release</p></div>\n<div class=\"box\"><h3><span class=\"chip o\">📝 recall</span> Recall ข้อสอบจริง (p4–5) → Service round ปี XX RoX</h3>\n<p>หน้า 4 เป็นข้อความพิมพ์ ไม่มีเฉลย (มีแค่ \"น่าจะ…\" ที่ผู้จดเดา) · หน้า 5 ต่ออีก 2 สถานีติดป้าย \"XX.\" · ลงไว้ใน <b>Service round → ปี XX · RoX</b> (ปีเก่าสุด เรียงท้ายสุด) รวมกล่อง \"XX.\" ที่แปะในหน้าซักประวัติอีก 4 สถานี = <b>18 สถานี</b></p>\n<table class=\"fx\"><tr><th>ข้อ</th><th>สถานี</th><th>หัวข้อ</th></tr>\n<tr><td>ASCE</td><td>influenza: ซักประวัติ · เลือกสิ่งส่งตรวจ 1 อย่าง · advice</td><td>History taking (+ Advice)</td></tr>\n<tr><td>1</td><td>ซักประวัติปวดท้อง (acute pancreatitis) + DDx 3</td><td>History taking</td></tr>\n<tr><td>2</td><td>ฟังเสียงหุ่น (น่าจะ asthma) · อธิบายเสียง · DDx 3 · most likely</td><td>Physical examination</td></tr>\n<tr><td>3</td><td>อ่าน EKG (น่าจะ atrial flutter)</td><td>EKG</td></tr>\n<tr><td>4</td><td>APTT prolong, PT ปกติ · DDx · ส่งตรวจ 3 อย่าง</td><td>Lab (coagulation)</td></tr>\n<tr><td>5</td><td>อ่าน CXR (ก้อนปอดซ้ายบน)</td><td>Imaging (CXR)</td></tr>\n<tr><td>6</td><td>หนองในท้อง → Gram stain (น่าจะ S. aureus) · เชื้อ · ATB</td><td>Microscope</td></tr>\n<tr><td>7</td><td>Advice ลดน้ำหนัก</td><td>Advice</td></tr>\n<tr><td>8</td><td>ผื่นแห้ง ๆ ที่ขา แสบร้อน (HZV) · bedside test · Dx · complication 3 · ยา</td><td>Skin lesion</td></tr>\n<tr><td>9</td><td>บวม + ฉี่น้อย + ผื่นที่ขา + รูป urine (RBC cast) · DDx 2</td><td>Microscope (UA)</td></tr>\n<tr><td>10</td><td>Hb typing พ่อ A 96/A2 4 · แม่ A 75/E 25 · แปลผล · โอกาสลูก</td><td>Lab (Hb typing)</td></tr>\n<tr><td>11</td><td>Parathyroid subtraction scan (uptake ซ้ายล่าง) Ca สูง PO₄ ต่ำ · บรรยาย · Dx · รักษา</td><td>Imaging</td></tr>\n<tr><td>XX</td><td>บรรยาย CT brain + etiology (รูปใน p5)</td><td>Imaging (CT)</td></tr>\n<tr><td>XX</td><td>เตรียมตัว + วัดความดัน (คนไข้นั่งไขว่ห้าง บนโต๊ะมี cuff ใหญ่/เล็ก)</td><td>Procedure / PE</td></tr>\n<tr><td>XX</td><td>Hx: หญิงไข้ 3 วัน · Hx: ถ่ายเป็นเลือดดำสลับแดง · Hx: หญิงขาบวม · Hx: ไอเป็นเลือด 55 ปี</td><td>History taking</td></tr></table>\n<div class=\"fig\">{{IMG:medr01_p5}}</div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
}
]
},
{
"id": "R01-H1",
"title": "History taking 1 · Syncope (หมดสติชั่วคราว) — เฉลย syncope จาก AF",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"iointro\">ส่วน <b>Hx taking</b> ของสมุด (p6–18) จดเป็นรายอาการ: บอก <b>\"เฉลย\"</b> ของสถานี → ลำดับการซัก (1st, 2nd …) → ตาราง/แผนภูมิแยกโรค · ทุกหัวข้อใช้หลัก <b>ถามปลายเปิดก่อน</b> แล้วซักให้ครบ เพราะ <b>คะแนนส่วนซักประวัติให้ละเอียดมาก แม้ได้ Dx แล้วก็ต้องซักต่อ</b> (ประวัติสำหรับ DDx + risk factor) — สมุด p15 {{R:1}}</div>\n<div class=\"box\"><h3>สถานี: หมดสติชั่วคราว <span class=\"ref\">p7</span></h3>\n<p><span class=\"chip x\">เฉลยในสมุด</span> <b>Syncope จาก AF</b> (cardiac syncope) · ผู้ป่วยจำลอง (กล่องที่แปะ): <i>หญิงไทย CC หมดสติชั่วคราว — หมดสติขณะยืนคุยกับเพื่อน ~5 นาที ปากซีด เหงื่อออก มือเท้าเย็น ไม่มีชักเกร็งกระตุก ไม่มี aura เคยเป็น 3–4 ครั้ง <b>มีอาการใจเต้นแรง</b> ไม่เคยตรวจโรคหัวใจ</i> · ลายมือข้างหน้า: <span class=\"hw\">\"Ans: AF ประวัติหมดสติ ใจสั่น → Cardiac syncope\"</span></p>\n<p><b>เปิดด้วยคำถามปลายเปิด</b>: \"ตอนที่เป็นลมทำอะไรอยู่ เป็นลมไปนานเท่าไร ช่วยเล่าเหตุการณ์ตอนนั้นให้ฟังหน่อย\"</p>\n<div class=\"fig\">{{IMG:medr01_p7}}</div></div>\n<div class=\"box\"><h3>1st — ยืนยันว่าเป็น syncope จริง (R/O ภาวะคล้าย) <span class=\"ref\">p7</span></h3>\n<p><b>① Concussion</b> = ศีรษะกระแทกก่อนหมดสติ → ถามว่ามีไหม</p>\n<p><b>② Epilepsy</b> = เกร็งกระตุกนานเป็นนาที → ถามผู้เห็นเหตุการณ์ · <span class=\"imp\">กัดฟัน เคี้ยว กัดลิ้น</span> · หลังรู้สึกตัว <span class=\"imp\">ปวดเมื่อยกล้ามเนื้อและศีรษะ</span> · แต่ <b>urinary incontinence พบได้ทั้ง 2 กรณี</b></p>\n<p class=\"hw\">ลายมือ: หลังจากหมดสติไป สับสนไหม หรือรู้สึกตัวดีทันที · เห็นแสงวาบก่อนหมดสติ (aura สั้น — ictus) · มี motor activity (tonic–clonic) → seizure → specify ว่าเป็น epilepsy</p>\n<p>ถามอาการนำ: <b>หน้าซีด เหงื่อแตก ใจสั่น</b> (ลายมือในตาราง: = <span class=\"hw\">parasym</span> ของ syncope)</p>\n<p><b>③ Vestibulobasilar TIA</b> = มีอาการทาง neuro ร่วม: เดินเซ ภาพซ้อน เวียนหัวบ้านหมุน กลืนลำบาก สูญเสียการได้ยิน เสียงแหบ</p>\n<table class=\"fx\"><tr><th>อาการ</th><th>Syncope</th><th>Epilepsy <span class=\"hw\">(aura สั้น — ictus)</span></th></tr>\n<tr><td>ปัจจัยกระตุ้น</td><td>พบบ่อย</td><td>พบน้อยมาก</td></tr>\n<tr><td>อาการนำ <span class=\"hw\">parasym</span></td><td>หน้าซีด เหงื่อแตก คลื่นไส้ อาเจียน ปวดมวนท้อง ใจสั่น มึนศีรษะ ตาพร่า</td><td>sensorial หรือ somatosensorial aura</td></tr>\n<tr><td>ขณะเกิดอาการ</td><td>ลำตัวอ่อน</td><td>ลำตัวแข็งเกร็ง</td></tr>\n<tr><td>สีผิว</td><td>ซีด</td><td>เขียว</td></tr>\n<tr><td>การเคลื่อนไหว</td><td>myoclonus เป็นสั้น ≤ 15 วินาที เริ่มช่วงท้ายของการหมดสติ</td><td>เกร็งกระตุกนานเป็นนาที เริ่มพร้อมกับการหมดสติ</td></tr>\n<tr><td>Automatism</td><td>พบน้อยมาก</td><td>พบบ่อย</td></tr>\n<tr><td>กัดลิ้น/บริเวณ</td><td>พบน้อย ถ้ามีจะที่ปลายลิ้น</td><td>พบบ่อย</td></tr>\n<tr><td>การกลอกตา</td><td>มองขึ้นบน</td><td>มองด้านข้าง</td></tr>\n<tr><td>แขนขาเกร็งกระตุก</td><td>non-rhythmic, pleomorphic</td><td>rhythmic, generalized</td></tr>\n<tr><td>หลังรู้สึกตัว</td><td>รู้สึกตัวดี หรือสับสนสั้น ๆ (≤ 5 นาที) คลื่นไส้ อาเจียน อ่อนเพลีย เหงื่อแตก</td><td><span class=\"imp\">สับสนนาน ปวดเมื่อยกล้ามเนื้อ ปวดศีรษะ</span> ★ <span class=\"hw\">(วงแดง: ปวดเมื่อย)</span></td></tr></table>\n</div>\n<div class=\"box\"><h3>2nd — หาสาเหตุ แบ่ง 3 กลุ่ม <span class=\"ref\">p7</span></h3>\n<p><b>(1) Reflex syncope</b></p>\n<p>• <b>Vasovagal</b> — emotional stress (ความกลัว ความเจ็บปวด) · orthostatic stress (ยืนนาน โดยเฉพาะอากาศร้อน) <span class=\"hw\">hot, humid, crowded place</span> · sympathetic activation ก่อนหมดสติ (prodrome) → หน้าซีด เหงื่อแตก</p>\n<p>• <b>Situational</b> — เป็นลมหลังเหตุการณ์เฉพาะ: เบ่งถ่าย ปัสสาวะ <span class=\"hw\">ไอ จาม</span></p>\n<p>• <b>Carotid sinus</b> — ผูกเน็คไทแน่น ไปนวดคอ เสื้อรัดคอ</p>\n<p><b>(2) Orthostatic hypotension</b> — เป็นลมหลังยืนทันที · เสียเลือด ขาดน้ำ · ยาลดความดัน</p>\n<p><b>(3) Cardiac syncope</b> — ใจสั่น <span class=\"hw\">เจ็บหน้าอกก่อนหมดสติ</span> · ลายมือที่แผนภูมิ: <span class=\"hw\">chest pain, ใจสั่น, หอบ ๆ</span> → arrhythmia (brady: SSS, AV block · tachy: SVT, VT) · structural (VHD, atrial myxoma, HOCM, MI, tamponade) · non-cardiac (massive PE, aortic dissection, PHT)</p>\n<p><b>ประวัติอื่น</b>: เคยเป็นแบบนี้ไหม · โรคประจำตัว · ยาที่ใช้ประจำ · <b>ประวัติครอบครัว</b> เช่น <span class=\"imp\">โรคไหลตาย</span> (Brugada), โรคหลอดเลือดหัวใจตีบ</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ESC Syncope 2018</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>ESC 2018</b>: ประเมินแรกทุกราย = ประวัติ + ตรวจร่างกาย <b>รวมวัด BP ท่านอนและยืน (active standing)</b> + <b>EKG 12 leads</b> {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> ลักษณะ <b>เสี่ยงต่ำ (reflex)</b>: มี prodrome (หน้ามืด ร้อนวูบ เหงื่อ คลื่นไส้), หลังเห็นภาพ/เสียง/กลิ่นไม่พึงประสงค์หรือเจ็บ, ยืนนาน ที่แออัดร้อน, ระหว่าง/หลังอาหาร, หลังไอ เบ่งถ่าย ปัสสาวะ, หันศีรษะ/กด carotid sinus <span class=\"chip s\">ซ้ำ</span></li>\n<li><span class=\"chip gl\">📘 Guideline</span> ลักษณะ <b>เสี่ยงสูง (คิด cardiac)</b>: เป็นขณะออกแรงหรือ<b>ท่านอน</b>, <b>ใจสั่นนำก่อนหมดสติ</b>, เจ็บอกใหม่ หายใจลำบาก ปวดท้อง/ศีรษะ, ประวัติครอบครัว sudden death อายุน้อย, มีโรคหัวใจโครงสร้าง/EKG ผิดปกติ — เข้ากับเฉลย <b>AF (ใจสั่นก่อนหมดสติ)</b> <span class=\"chip s\">ซ้ำ</span></li>\n<li><span class=\"chip gl\">📘 Guideline</span> Orthostatic hypotension: SBP ลด ≥ 20 หรือ DBP ลด ≥ 10 mmHg หรือ SBP &lt; 90 ภายใน 3 นาทีหลังยืน</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Brignole M, et al. 2018 ESC Guidelines for the diagnosis and management of syncope. Eur Heart J 2018;39:1883–1948 — ยังเป็นฉบับล่าสุดของ ESC (ตรวจ พ.ย. 2026)",
"u": "https://doi.org/10.1093/eurheartj/ehy037"
}
]
},
{
"id": "R01-H2",
"title": "History taking 2 · Seizure — เฉลย febrile convulsion ในเด็ก 5–6 ปี",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>สถานี: ชัก <span class=\"ref\">p8</span></h3>\n<p><span class=\"chip x\">เฉลยในสมุด</span> <b>Febrile convulsion ในเด็ก 5–6 ปีที่เป็นไข้แล้วชัก</b></p>\n<p>**คล้ายข้อ syncope แต่ต้อง <b>R/O syncope กับ TIA ออกไปก่อน</b> (ตาราง: syncope = หมดสติเฉียบพลันฟื้นเร็ว · TIA = focal neurological deficit ชั่วคราว ไม่ค่อยหมดสติ)</p>\n<p>• ถาม <b>onset เฉียบพลันไหม</b> และระยะเวลาชักมัก <b>&lt; 2–3 นาที</b> · เคยเป็นแบบนี้มาก่อนไหม · ถ้าเคย ถามว่าตอนชักมีคนอยู่ด้วยไหม → ถามผู้เห็นเหตุการณ์ว่า<b>เหมือนครั้งที่แล้วไหม</b> (stereotype)</p>\n<p>• ถาม <b>aura</b>: <span class=\"imp\">visual</span> (เห็นแสง จุดสี) · <span class=\"imp\">auditory</span> (ได้ยินเสียงหึ่ง ๆ) · <span class=\"imp\">sensory</span> (ชา/เจ็บแขนครึ่งซีก) · <span class=\"imp\">psychic</span> (déjà vu)</p>\n<p class=\"hw\">ลายมือใต้ handout: เฉียบพลัน, 1–2 min, stereotype, aura → ictal → postictal</p></div>\n<div class=\"box\"><h3>Unprovoked vs provoked seizure <span class=\"ref\">p8</span></h3>\n<table class=\"hw\"><tr><th>Unprovoked</th><th>Provoked seizure (SE)</th></tr>\n<tr><td>ไม่มี factor <br>หรือมี factor ที่นาน <b>&gt; 1 wk</b> = <b>remote symptomatic</b> เช่น เป็น stroke มา 2 wk แล้วค่อยชัก</td><td>มี factor กระตุ้น <b>≤ 1 wk</b>: หยุดเหล้า/หยุดยา (BZD) · glucose ↑↓ · Na ↑↓ · Ca ↓ · eclampsia · <b>febrile seizure</b> (ไข้สูงในเด็ก) · stroke, head trauma, meningitis, encephalitis</td></tr></table>\n<p class=\"hw\">Condition: อดนอน ไข้ แสงจ้า mens → <b>ไม่ใช่</b> provoking factor</p>\n<p>ลายมือชี้กรอบนิยาม epilepsy (ILAE 2014) ในหนังสือ → <span class=\"hw\">stroke, trauma, CNS infection</span></p>\n<p>Handout \"แนวทางการวินิจฉัยเมื่อผู้ป่วยมีอาการชักครั้งแรก\": provoked = แก้ปัจจัยกระตุ้น ไม่ต้องให้ยากันชักระยะยาว · unprovoked ครั้งแรก ชักซ้ำ ~50% · หลังครั้งที่ 2 โอกาสซ้ำ 70–80% → มักเริ่มยากันชักหลังครั้งที่ 2</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> SE ในตารางสมุด = <i>symptomatic</i> (acute symptomatic seizure) ไม่ใช่ status epilepticus</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ILAE 2014 · ILAE 2025 · AAP 2011</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>ILAE 2014 (practical definition of epilepsy)</b>: (1) unprovoked (หรือ reflex) seizure ≥ 2 ครั้ง ห่างกัน &gt; 24 ชม. (2) unprovoked 1 ครั้ง + โอกาสชักซ้ำ ≥ 60% ใน 10 ปี (เช่น stroke เก่า, EEG epileptiform, รอยโรคใน MRI) (3) epilepsy syndrome {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> Acute symptomatic (provoked) seizure ตาม ILAE = เกิด<b>ภายใน 7 วัน</b>หลัง stroke/TBI/CNS infection หรือขณะมี metabolic/toxic insult — ตรงกับสมุด \"≤ 1 wk\" <span class=\"chip s\">ซ้ำ</span></li>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>ILAE 2025 seizure classification</b>: 4 กลุ่ม focal / generalized / unknown / unclassified · ใช้คำว่า <b>consciousness (impaired/preserved)</b> แทน awareness · ตัดคำว่า \"onset\" ออกจากชื่อกลุ่ม · บรรยาย semiology ตามลำดับเวลา {{R:3}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> <span class=\"warn\">! ต่าง</span> <b>Febrile seizure (AAP 2011)</b> = ชักร่วมไข้ ≥ 38 °C ในเด็ก <b>6–60 เดือน</b> ไม่มี CNS infection · simple = generalized &lt; 15 นาที ไม่ซ้ำใน 24 ชม. {{R:4}} → เด็ก <b>5–6 ปี</b> ตามเฉลยในสมุด อยู่ขอบบน/เกินช่วงอายุ (handout เขียน 6 เดือน–6 ปี) — ถ้าอายุ &gt; 5 ปี ต้องระวัง CNS infection/epilepsy มากขึ้น</li></ul></div>\n<div class=\"fig\">{{IMG:medr01_p8}}</div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Fisher RS, et al. ILAE official report: a practical clinical definition of epilepsy. Epilepsia 2014;55:475–482",
"u": "https://doi.org/10.1111/epi.12550"
},
{
"t": "Beniczky S, et al. Updated classification of epileptic seizures: Position paper of the ILAE. Epilepsia 2025;66:1804–1823 (แทน 2017)",
"u": "https://doi.org/10.1111/epi.18338"
},
{
"t": "AAP Subcommittee on Febrile Seizures. Febrile seizures: guideline for the neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics 2011;127:389–394"
}
]
},
{
"id": "R01-H3",
"title": "History taking 3 · Dyspnea — เฉลย pneumonia",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>สถานี: เหนื่อย <span class=\"ref\">p9</span></h3>\n<p><span class=\"chip x\">เฉลยในสมุด</span> <b>Pneumonia</b></p>\n<p>**<b>1st — R/O fatigue ก่อน</b>: ถามว่าอาการเหนื่อยเป็นยังไง <b>หอบ</b>ไหม หรือแค่<b>เมื่อย</b>เฉย ๆ</p>\n<p>**ซักตาม <b>Heart · Lung · Metabolic · Psychogenic</b> · ประวัติอื่น เช่น เบื่ออาหาร น้ำหนักลด</p>\n<div class=\"fig\">{{IMG:medr01_p9}}</div></div>\n<div class=\"box\"><h3>ซักตามระบบ <span class=\"ref\">p9</span></h3>\n<p><b>(1) Heart</b>: เหนื่อยขณะออกแรง พักแล้วดีขึ้น <span class=\"hw\">(angina pectoris)</span> · นอนราบแล้วเหนื่อย ต้องนอนหนุนหมอน <span class=\"hw\">(orthopnea)</span> · กลางคืนตื่นมาหอบ <span class=\"hw\">(PND)</span></p>\n<p><b>(2) Lung</b></p>\n<p>• <b>Airway</b>: หายใจเสียงวี้ด · สูบบุหรี่ · เสมหะเรื้อรัง · เหนื่อยเมื่อสัมผัสสิ่งกระตุ้น เช่น เกสรดอกไม้</p>\n<p>• <b>Parenchyma</b>: ไข้ ไอมีเสมหะ เสมหะสีอะไร · เจ็บหน้าอก <span class=\"hw\">→ pleuritic chest pain ได้</span></p>\n<p>• <b>Pleural</b>: pneumothorax — เหนื่อยเกิดแบบฉับพลันทันที</p>\n<p>• <b>Neuromuscular</b>: อ่อนแรงที่ EOM (MG)</p>\n<p>• <b>Chest wall deformity</b>: ทรวงอกผิดรูป</p>\n<p>• <b>Vascular</b>: เป็นมะเร็ง ขาบวม ไม่ได้เคลื่อนไหวขานาน ๆ (PE)</p>\n<p><b>(3) Metabolic</b>: <b>Anemia</b> — ซีด หน้ามืด เป็นลม เสียเลือด ประจำเดือนมากกว่าปกติ โรคเลือด · <b>Thyrotoxicosis</b> — หงุดหงิดง่าย ขี้ร้อน กินจุ มือสั่น</p>\n<p><b>(4) Psychogenic</b>: เครียด วิตกกังวลรุนแรง</p>\n<p class=\"hw\">ลายมือบนแผนภูมิ: Airway — เสียงวี้ด, smoke? · Parenchyma — ไอ เสมหะสี? นาน?, ILD — อาชีพ?, หอบ · Pleura — sudden chest pain, trepopnea · PE — tachycardia · Cardio — exertion related?, orthopnea PND · DKA — หายใจหอบลึก · เพิ่มกิ่ง <b>ไต (volume overload)</b> และ <b>drug</b> · บางคำตัวเล็กมาก <span class=\"warn\">⚠ อ่านไม่ออก</span></p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <b>Trepopnea</b> = เหนื่อยเมื่อนอนตะแคงข้างใดข้างหนึ่ง พบในโรคปอด/เยื่อหุ้มปอดข้างเดียว (เช่น effusion มาก) และ HF จากหัวใจโต · <b>Platypnea</b> = เหนื่อยเมื่อลุกนั่ง (hepatopulmonary syndrome, intracardiac shunt)</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ATS CAP 2025 (+ ATS/IDSA 2019)</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>ATS 2025</b>: ใช้ <b>lung ultrasound แทน CXR</b> ได้ในการวินิจฉัย CAP (conditional) {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> ผู้ป่วยนอกไม่มีโรคร่วมที่ตรวจพบไวรัส อาจ<b>ไม่ให้ยาปฏิชีวนะ</b>ได้ (conditional — จุดที่ IDSA ไม่เห็นด้วย) · มีโรคร่วม/นอนรพ. ให้ empiric antibiotic</li>\n<li><span class=\"chip gl\">📘 Guideline</span> ระยะเวลา: ผู้ป่วยนอกที่ stable ให้ <b>&lt; 5 วัน (อย่างน้อย 3 วัน)</b> · ผู้ป่วยใน ≥ 5 วัน · steroid: <b>ไม่ให้</b>ใน non-severe inpatient, <b>แนะนำ</b>ใน severe CAP</li>\n<li><span class=\"chip gl\">📘 Guideline</span> Empiric (ATS/IDSA 2019): OPD ไม่มีโรคร่วม — amoxicillin 1 g tid หรือ doxycycline (macrolide ถ้าดื้อ &lt; 25%) · มีโรคร่วม — amoxicillin/clavulanate หรือ cephalosporin + macrolide/doxycycline หรือ respiratory fluoroquinolone</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Jones BE, et al. Diagnosis and Management of Community-acquired Pneumonia. An Official ATS Clinical Practice Guideline. Am J Respir Crit Care Med 2025 (doi 10.1164/rccm.202507-1692ST) — IDSA ไม่ endorse · ยาปฏิชีวนะ empiric ยังอ้าง ATS/IDSA 2019 (Metlay JP, AJRCCM 2019;200:e45–e67)",
"u": "https://doi.org/10.1164/rccm.202507-1692ST"
}
]
},
{
"id": "R01-H4",
"title": "History taking 4 · Fever 5 วัน (acute febrile illness) — เฉลย scrub typhus · dengue",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>สถานี: ไข้ 5 วัน <span class=\"ref\">p10</span></h3>\n<p><span class=\"chip x\">เฉลยในสมุด</span> <b>Fever 5 วัน = Acute febrile illness → Scrub typhus</b> · สารบัญ p2 เขียน <span class=\"hw\">fever 5 days: Scrub typhus, Dengue</span></p>\n<p><b>(1) แยก localized vs systemic infection</b>: อาการปอด (ไอ เสมหะ หอบ) · ทางเดินปัสสาวะ (แสบขัด) · คลื่นไส้อาเจียน <b>ปวดท้องใต้ชายโครงขวา ตับโต กดเจ็บ</b> → ฝีในตับ/ถุงน้ำดีอักเสบ</p>\n<p><b>(2) ไม่มีอาการเฉพาะที่ → systemic infection</b> แยกแต่ละโรค:</p>\n<p>• <b>รูปแบบไข้</b>: สูงลอย → dengue · ไข้วันเว้น 1–3 วัน → malaria · ซักระบบอื่น ปวดหัว ตาแดง เจ็บคอ</p>\n<p>• <span class=\"imp\">*สถานที่ที่ได้ไปมาใน 1 เดือน</span></p>\n<table class=\"fx\"><tr><th>โรค</th><th>สมุด</th><th>ลายมือ</th></tr>\n<tr><td><b>Dengue</b></td><td>ไข้สูงลอย ผื่น maculopapular ตอนแรก + convalescent rash ตอนไข้ลง จุดเลือดออก leakage เช่น ถ่ายเป็นเลือด</td><td class=\"hw\">stage: febrile → shock (plasma leakage, PLT↓) → convalescent (appetite, bradycardia, convalescent rash, diuresis)</td></tr>\n<tr><td><b>Scrub typhus</b></td><td>ไข้สูง ตาแดง <span class=\"imp\">eschar</span></td><td class=\"hw\">Rickettsial: murine typhus (ไม่มี eschar) · PLT ↓ ได้ · nonspecific flu-like for 1 wk</td></tr>\n<tr><td><b>Leptospirosis</b></td><td>ไข้สูงทันที + <span class=\"imp\">หนาวสั่น</span> + ปวดกล้ามเนื้อโดยเฉพาะน่อง</td><td class=\"hw\">calf pain, N/V, ตาแดง</td></tr>\n<tr><td><b>Enteric fever</b></td><td>ผื่นหน้าท้อง rose spot ไข้สูง อาการ GI ตับม้ามโต</td><td class=\"hw\">Salmonella</td></tr>\n<tr><td><b>Malaria</b></td><td>ไข้สูงวันเว้น 1–3 วัน</td><td></td></tr></table>\n<p class=\"hw\">เพิ่ม: influenza, EBV, JEV</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <span class=\"warn\">! ต่าง</span> รูปแบบไข้ malaria: <i>P. vivax/ovale</i> ทุก 48 ชม. (tertian), <i>P. malariae</i> ทุก 72 ชม. (quartan), <i>P. falciparum</i> มักไม่เป็นรอบชัด — ในไทยอย่ารอรูปแบบไข้ ถามประวัติเข้าป่า/ชายแดนแล้วตรวจ blood film เสมอ</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> Scrub typhus (<i>Orientia tsutsugamushi</i>) จากตัวอ่อนไรอ่อน (chigger) ในพุ่มไม้/ไร่ · eschar ไม่เจ็บ มักซ่อนที่ขาหนีบ รักแร้ ใต้ราวนม · รักษา <b>doxycycline 100 mg bid × 7 วัน</b> (ตั้งครรภ์/เด็กเล็ก: azithromycin)</p></div>\n<div class=\"box\"><h3><span class=\"chip o\">📝 recall</span> XX — ซักประวัติหญิงไข้ 3 วัน + DDx 3 โรค <span class=\"ref\">p10</span></h3>\n<p>ซักได้: ไข้ คลื่นไส้ ปวดเมื่อยตามตัว <b>มีคนในบ้านเป็นไข้เลือดออกเมื่ออาทิตย์ก่อน</b> · ลายมือ: <span class=\"hw\">\"มีคนในครอบครัวเป็นไหม?\" → Dengue, Chikungunya, Scrub typhus</span></p>\n<p class=\"mut\">ลงใน Service round ปี XX RoX แล้ว</p></div>\n<div class=\"box\"><h3>Dengue classification (WHO 1997) <span class=\"ref\">p11</span></h3>\n<p>Dengue fever = <b>ไข้ + ≥ 2 S&amp;S</b>: retro-orbital pain, headache, rash, myalgia/arthralgia, leukopenia, bleeding · <span class=\"hw\">จำ \"3 ปวด (ตา หัว muscle) · 2 lab (WBC, PLT) · 1 ผื่น\"</span> · <span class=\"hw\">คนส่วนน้อยเท่านั้นที่มีอาการ</span> · DF <span class=\"hw\">ไม่มี plasma leakage</span></p>\n<p><b>DHF ต้องครบ 4</b>: ไข้ 2–7 วัน · bleeding tendency <span class=\"hw\">(ถ้าไม่ spontaneous ต้องทำ tourniquet test)</span> · thrombocytopenia · <span class=\"imp\">★ plasma leakage</span> (Hct เพิ่ม ≥ 20%, pleural effusion, ascites, albumin ≤ 3.5 g%)</p>\n<p>DHF grade I: tourniquet positive · II: spontaneous bleeding · <b>III: impending shock · IV: profound shock</b> (III–IV = DSS) · <span class=\"hw\">ไข้: สูงลอย กินยาไม่ลง ไม่แตะ baseline</span></p>\n<div class=\"fig\">{{IMG:medr01_p11}}</div>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">WHO arboviral diseases 2025</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <span class=\"warn\">! ต่าง</span> <b>WHO 2025</b> (ฉบับแรกที่รวม dengue, chikungunya, Zika, yellow fever) แบ่งผู้ป่วยเป็น <b>non-severe vs severe</b> ตามอาการเตือนและอวัยวะล้มเหลว — สไลด์ในสมุดใช้ระบบ <b>WHO 1997 (DF/DHF/DSS)</b> ซึ่งยังใช้ในเวชปฏิบัติไทยและข้อสอบ {{R:2}} {{R:3}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> Warning signs (ใช้ตั้งแต่ WHO 2009): ปวด/กดเจ็บท้อง อาเจียนต่อเนื่อง มีน้ำในช่องร่างกาย เลือดออกเยื่อบุ ซึม/กระสับกระส่าย ตับโต &gt; 2 cm Hct สูงขึ้นร่วมกับเกล็ดเลือดลดเร็ว</li>\n<li><span class=\"chip gl\">📘 Guideline</span> WHO 2025: ติดตาม capillary refill, lactate, การตอบสนองต่อสารน้ำ · ให้ crystalloid · <b>ไม่ใช้</b> corticosteroid, immunoglobulin, หรือ<b>ให้เกล็ดเลือดป้องกัน</b> · ลดไข้ด้วย paracetamol เลี่ยง NSAID/aspirin</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "WHO guidelines for clinical management of arboviral diseases: dengue, chikungunya, Zika and yellow fever. Geneva: WHO; 2025 (เผยแพร่ ก.ค. 2025)",
"u": "https://www.who.int/publications/i/item/9789240111110"
},
{
"t": "World Health Organization. Dengue haemorrhagic fever: diagnosis, treatment, prevention and control, 2nd ed. Geneva: WHO; 1997 (แหล่งของสไลด์ในสมุด)"
}
]
},
{
"id": "R01-H5",
"title": "History taking 5 · Abdominal pain — เฉลย acute cholecystitis · acute pancreatitis",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>สถานี: ปวดท้อง <span class=\"ref\">p10, p13</span></h3>\n<p><span class=\"chip x\">เฉลยในสมุด</span> <b>Abdominal pain = Acute cholecystitis + Diff dx 3 อย่าง</b></p>\n<p><b>Biliary colic</b> มีลักษณะ: (1) ปวด<span class=\"imp\">ตื้อรุนแรงต่อเนื่องที่ RUQ/epigastrium</span> (2) นาน <b>1–5 ชม.</b> (3) ร้าวไป <b>Rt scapula</b> (4) หลัง<b>มื้อไขมันมาก</b>/ปวดกลางคืน (5) ± คลื่นไส้อาเจียน · ปวดค่อย ๆ ขึ้น ค้างไว้ แล้วค่อย ๆ ทุเลา (รูปสี่เหลี่ยมคางหมู)</p>\n<p>* <b>มีไข้ไหม ไข้มาก่อนปวด หรือปวดมาก่อนไข้</b> · ปวดตรงกลางไหม ร้าวไปหลังไหม · <span class=\"imp\">drug-induced hepatitis ปวดไหม</span></p>\n<p>**ซักตาม <b>LODCRAFT</b> · *DDx = <b>acute cholangitis</b> (แต่มี jaundice) · <b>liver abscess</b> (± jaundice) · <b>acute pancreatitis</b></p>\n<p class=\"hw\">ลายมือ DDx เพิ่ม: ① MI ② peptic perforation ③ abdominal aortic aneurysm ④ pneumothorax</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <b>LODCRAFT</b> = Location · Onset · Duration · Character · Radiation · Associated symptoms · Factors (aggravating/relieving) · Timing</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">Tokyo Guidelines 2018</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>TG18 acute cholecystitis</b>: A = local (Murphy's sign, RUQ mass/pain/tenderness) · B = systemic (ไข้, CRP/WBC สูง) · C = imaging · <b>suspected = A + B · definite = A + B + C</b> {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> Severity: grade III = มี organ dysfunction · grade II = WBC &gt; 18,000, คลำได้ก้อน RUQ, ปวด &gt; 72 ชม., local inflammation รุนแรง · grade I = ไม่เข้า II/III</li></ul></div></div>\n<div class=\"box\"><h3>Acute pancreatitis — ฐานซักประวัติ [อ.สมบัติ] <span class=\"ref\">p10, p13</span></h3>\n<p><span class=\"chip o\">📝 recall</span> <b>ฐานซักประวัติผู้ป่วยจำลองชาย ปวดท้อง</b> (ปวดร้าวทะลุไปหลัง <span class=\"hw\">← retroperitoneal organ</span> โน้มตัวไปข้างหน้าแล้วดีขึ้น ดื่มสุรา) → สรุปเป็น acute pancreatitis · a. ซักประวัติ b. DDx 3 อย่าง — <b>ตรงกับ recall หน้า 4 ข้อ 1</b> (ลง Service round XX RoX)</p>\n<p><span class=\"chip x\">เฉลยในสมุด</span> <span class=\"hw\">a. LODCRAFT, risk factor: สุรา, นิ่ว, complication · b. acute pancreatitis — aortic dissection — AAA — PU</span></p>\n<p><b>Dx AP เมื่อมี 2/3</b>: (1) ปวดท้องเข้าได้ (2) amylase หรือ lipase &gt; 3× UNL (3) CT/MRI เข้าได้ <span class=\"hw\">pancreas = retroperitoneal → ปวดร้าวหลัง พอโน้มตัวไปข้างหน้าดีขึ้น</span></p>\n<p><b>สาเหตุ</b> (หลัก ๆ 2 อย่างแรก): alcohol 40% (ชาย) · gallstone 40% (หญิง) · <b>TG &gt; 1,000</b> · post-ERCP ใน 30 วัน · hypercalcemia · ยา — จำ <span class=\"imp\">\"อาสุรสีห์เตะอีเพ็ญวดี 6 ที\"</span>: <b>A</b>zathioprine, <b>S</b>ulfonamide, <b>L</b>asix, <b>T</b>etracycline, Metronidazole, <b>E</b>strogen, <b>P</b>entamidine, Valproate, Nitrofurantoin, <b>D</b>idanosine, <b>6-MP</b>, <b>T</b>hiazide</p>\n<p>AP ทุก case ส่ง <b>ALT</b> + <b>US upper abdomen</b> · บอกว่าเป็น gallstone AP เมื่อ ALT &gt; 3× UNL หรือ US เห็นนิ่ว</p>\n<p class=\"hw\">ลายมือ p10: SIRS — BT &lt; 36, &gt; 38 · WBC &lt; 4,500, &gt; 11,000 · RR &gt; 20 · PR &gt; 90 · BISAP (BUN &gt; 25, Impaired consciousness, ≥ 2 SIRS, Age &gt; 60, Pleural effusion) ≥ 3 = severe! · สาเหตุ: alcohol, นิ่วใน bile duct, TG สูง (&gt; 1,000 mg/dL), trauma, ส่องกล้อง hepatobiliary, ยา 6-MP, azathioprine · lipase, amylase ≥ 3 เท่าของปกติ</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <span class=\"warn\">! ต่าง</span> SIRS ตามนิยามมาตรฐาน (ACCP/SCCM 1992) ใช้ <b>WBC &lt; 4,000 หรือ &gt; 12,000/mm³ (หรือ band &gt; 10%)</b> และ temp &lt; 36 หรือ &gt; 38 °C · ลายมือเขียน 4,500/11,000 (ค่าช่วงปกติของแลป ไม่ใช่เกณฑ์ SIRS)</p>\n<div class=\"fig\">{{IMG:medr01_p13}}</div>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ACG Acute Pancreatitis 2024 · Revised Atlanta 2012</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> วินิจฉัย 2 ใน 3 (Revised Atlanta) <span class=\"chip s\">ซ้ำ</span> · ความรุนแรง: mild (ไม่มี organ failure) · moderately severe (organ failure ชั่วคราว &lt; 48 ชม. หรือ local complication) · severe (organ failure &gt; 48 ชม.) {{R:3}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>ACG 2024</b>: สารน้ำ <b>moderately aggressive</b> (เลือก <b>Lactated Ringer's</b>) ติดตาม vital signs, urine output, BUN/Hct · mild AP เริ่ม<b>อาหารแข็งไขมันต่ำภายใน 24–48 ชม.</b> · <b>ไม่ให้ antibiotic ป้องกัน</b> (ให้เฉพาะ infected necrosis) · biliary AP <b>ไม่มี cholangitis → รักษาทางยาดีกว่า early ERCP</b> · ผ่าตัดถุงน้ำดีก่อนกลับบ้าน (mild) เพื่อกันเป็นซ้ำ {{R:4}}</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Yokoe M, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci 2018;25:41–54",
"u": "https://doi.org/10.1002/jhbp.515"
},
{
"t": "Banks PA, et al. Classification of acute pancreatitis—2012: revision of the Atlanta classification and definitions by international consensus. Gut 2013;62:102–111",
"u": "https://doi.org/10.1136/gutjnl-2012-302779"
},
{
"t": "Tenner S, et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol 2024;119:419–437",
"u": "https://doi.org/10.14309/ajg.0000000000002645"
}
]
},
{
"id": "R01-H6",
"title": "History taking 6 · Diplopia (เห็นภาพซ้อน)",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>สถานี: ภาพซ้อน <span class=\"ref\">p14</span></h3>\n<p>สารบัญ p2: <span class=\"hw\">Diplopia, ปิดตาแล้วดีขึ้น, เอียงซ้ายดีขึ้น</span></p>\n<p>**<b>1st = confirm ก่อนว่าเป็นตามัว — R/O abnormal VA ก่อน</b> <span class=\"hw\">(visual acuity)</span>: ถามว่ามองไม่ชัดแล้วทำยังไง · <b>หรี่ตาแล้วชัดขึ้นไหม</b> ถ้าชัดขึ้นแสดงว่าเป็นสายตาสั้น/สายตายาว</p>\n<p>**<b>2nd</b> = ถามว่าตามัวเป็นนานแค่ไหน เป็น ๆ หาย ๆ หรือเป็นตลอด · <b>เอียงหัวแล้วดีขึ้นไหม</b> · มองใกล้/มองไกลต่างกันไหม · <b>ซ้อนแนวตั้งหรือแนวนอน</b> (ทำมือด้วย) · <b>ปิดตาข้างหนึ่งแล้วดีขึ้นไหม</b> · มองซ้ายหรือขวาแล้วชัดกว่ากัน · เดินชนของไหม ชนด้านไหนเป็นพิเศษ</p>\n<p>**ประวัติอื่น: ใช้ยา · trauma</p>\n<div class=\"fig\">{{IMG:medr01_p14}}</div></div>\n<div class=\"box\"><h3>แผนภูมิ diplopia + ลายมือ <span class=\"ref\">p14</span></h3>\n<p><b>Hx ที่สำคัญ</b>: monocular vs binocular · vertical vs horizontal · directionality (มองทางไหนแล้วซ้อนมากขึ้น) · <b>PE</b>: eye misalignment/ptosis/pupils · EOM (full, vergence) · saccade/pursuit · face/ocular abnormality · oculocephalic maneuver</p>\n<p><b>Monocular</b> (ปิดตาข้างที่ปกติแล้วยังซ้อน) = ophthalmic (macula), neurologic (occipital lobe, drug), functional · <b>Binocular</b> (ปิดข้างใดข้างหนึ่งแล้วหาย) = disconjugated eye</p>\n<p>Binocular แบ่ง: <b>neurologic</b> — supranuclear (INO <span class=\"hw\">ต้องกลอกตาถึงจะเห็นภาพซ้อน</span>) · cranial nerve <span class=\"hw\">(persistent)</span> isolated <b>CN III (MR, IR, SR, IO), IV (SO), VI (LR)</b> หรือ multiple (brainstem <span class=\"hw\">มี infarct, ชา, อ่อนแรง</span> · base of skull · cavernous sinus/SOF) · NMJ — myasthenia gravis <span class=\"hw\">(fluctuation, fatigue)</span> · ocular myopathy (CPEO, Kearns–Sayre, oculopharyngeal dystrophy) · <b>orbital</b> (orbital floor fracture, muscle infiltration, orbital myositis/pseudotumor, thyroid eye disease) · <b>congenital strabismus</b> (esotropia, exotropia)</p>\n<p>รูปเด็ก: <b>Right face turn</b> <span class=\"hw\">→ turn ขวา: มองซ้ายไม่ได้? → LR ขวาเสีย (CN6)</span> · <b>Left head tilt</b> <span class=\"hw\">→ chin depress, head (เอียง) ตรงข้าม</span></p>\n<p class=\"hw\">ลายมือ (ตาราง): เด็ก head tilt — vertical diplopia → มักเสียที่ CN4 → sup. oblique m. (ถ้า horizontal = CN 3, 6) · แต่ถ้าตามัวเฉย ๆ จะ correct ได้ด้วย pinhole (เจาะในกระดาษ; refraction error) · ถ้า VA (ผิดปกติ) จะไม่ head tilt · ตามัว → ภาพซ้อน / มัว / ภาพไม่คมชัด (1st!) · ซ้อนแนวนอน → CN 3, 6 · ไกลซ้อน → CN6? · ใกล้ซ้อน → CN3? · ซ้อนทั้งคู่ → CN4, 6? · \"อย่า! ถามแนวตั้ง/นอน …\" — ตัวเล็กหลายจุด <span class=\"warn\">⚠ อ่านไม่ออก</span></p>\n<p><span class=\"chip g\">📖 อธิบาย</span> หลักที่ใช้ตอบ: <b>horizontal diplopia แย่ลงเมื่อมองไกล → CN VI (LR)</b> · แย่ลงเมื่อมองใกล้ → MR/CN III หรือ convergence insufficiency · <b>vertical diplopia → CN IV (SO)</b> หรือ CN III · CN IV palsy: ซ้อนแนวตั้งมากขึ้นเมื่อมองลง (อ่านหนังสือ/ลงบันได) และ<b>เอียงศีรษะไปด้านตรงข้าม</b>เพื่อชดเชย (Rt CN IV palsy → left head tilt + ก้มคาง) · CN VI palsy: หันหน้าไปด้านที่เป็นเพื่อหลบการมองไปทางนั้น (Rt CN VI → right face turn) · ptosis + ม่านตาขยาย + ตาเหล่ลงออกนอก = CN III (pupil-involving → นึกถึง aneurysm PCom)</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> สารบัญ \"ปิดตาแล้วดีขึ้น เอียงซ้ายดีขึ้น\" = binocular diplopia ที่ชดเชยด้วยการเอียงศีรษะ → นึกถึง <b>right CN IV palsy</b> (Bielschowsky head-tilt test: เอียงไปข้างที่เป็นแล้วตาข้างนั้นลอยขึ้น/ซ้อนมากขึ้น)</p></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
}
]
},
{
"id": "R01-H7",
"title": "History taking 7 · GI bleeding — ถ่ายเป็นเลือด / อาเจียนเป็นเลือด",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>สถานี: ถ่ายเป็นเลือด (UGIB) <span class=\"ref\">p14</span></h3>\n<p>สารบัญ p2: <span class=\"hw\">อาเจียนเป็นเลือด (DDx 3 โรค) · GI bleed w/ mild anemia · ถ่ายเป็นเลือด ดำสลับแดง</span></p>\n<p><span class=\"chip o\">📝 recall</span> <b>XX.</b> ซักประวัติคนถ่ายเป็นเลือด ได้ว่า <b>สีดำสลับแดง</b> ไม่ท้องเสีย ไม่ท้องผูก ไม่เจ็บ ไม่ปวดท้อง ไม่อ้วก(?)เป็นเลือด <b>มีประวัติพี่ชายเป็นมะเร็ง</b> ให้ DDx 3 โรค (ลง Service round XX RoX)</p>\n<p>**ถามด้วยว่า<b>มีอาเจียนเป็นเลือดร่วมไหม</b> · R/O ยาที่ทำให้<span class=\"imp\">ปัสสาวะ</span>มีสีดำ ๆ แดง ๆ</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <span class=\"warn\">! ต่าง</span> สมุดเขียน \"ปัสสาวะ\" — บริบทของถ่ายดำต้องเป็น <b>อุจจาระ</b>: ยาที่ทำให้อุจจาระดำ = <b>ธาตุเหล็ก (ยาบำรุงเลือด), bismuth</b>, ถ่านกัมมันต์ (และอาหาร เช่น เลือดหมู) — ลายมือข้างเดียวกันเขียน \"ทานยาบำรุงเลือด, bismuth\" ถูกแล้ว</p>\n<p class=\"hw\">ลายมือ (ซ้าย): มาด้วยถ่ายเป็นเลือด — 1. แยกว่าไม่ใช่ anorectal disease &amp; ทานยาบำรุงเลือด, bismuth · 2. detail เลือด: onset, ปริมาณ, ความถี่, duration, เคยเป็นมาก่อนมั้ย · 3. anemic symptom: เวียนศีรษะ หน้ามืด ใจสั่น · 4. DDx — <b>PU, gastritis</b>: ประวัติใช้ NSAIDs, ASA, ปวดท้องบ่อย ๆ · <b>esophagitis</b>: กลืนเจ็บ กลืนลำบาก · <b>Mallory–Weiss tear</b>: ประวัติอาเจียนรุนแรง · PH: โรคตับ · SH: ดื่มสุรา</p>\n<p class=\"hw\">ลายมือ (ขวา): R/O hemoptysis ★ · กินยาบำรุงเลือดไหม!, อุจจาระที่ดำสนิทเหนียว (เหมือนยางมะตอย)? ★ · ตามหา cause · มาด้วยอาเจียนเป็นเลือด ต้องแยกกับ hemoptysis</p>\n<p>หนังสือ (Pocket Med SWU — UGIB): นิยาม = เลือดออกเหนือ <b>ligament of Treitz</b> · clue: hematemesis, coffee-ground, melena, hematochezia (ถ้าออกมาก) · NG lavage ได้เลือด (ลบลวง 15%) · BUN/Cr สูง · bowel sound มาก · ประวัติหาโรคตับ → <span class=\"hw\">stigmata of chronic liver disease: 1. gynecomastia 2. palmar erythema 3. spider nevi 4. testicular atrophy 5. parotid gland enlargement</span></p>\n<table class=\"fx\"><tr><th>ไอเป็นเลือด (hemoptysis)</th><th>อาเจียนเป็นเลือด (hematemesis)</th></tr>\n<tr><td>มีประวัติโรคปอด · <b>ไอนำ</b>มาก่อน · เลือด<b>เป็นฟอง สีแดงสด เป็นด่าง</b></td><td>โรคทางเดินอาหาร ตับแข็ง ดื่มสุรา · <b>คลื่นไส้อาเจียน</b>นำ · <b>ไม่เป็นฟอง</b> สีแดงคล้ำ/น้ำตาลดำ (กาแฟ) เป็นกรด <span class=\"hw\">(ถ้าออกเยอะ + เร็ว ก็แดงได้)</span></td></tr></table>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ACG UGIB 2021 · Baveno VII</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>ACG 2021</b>: ผู้ป่วย <b>Glasgow-Blatchford score 0–1</b> ดูแลแบบผู้ป่วยนอกได้ · ให้เลือดเมื่อ <b>Hb &lt; 7 g/dL</b> (โรคหัวใจใช้เกณฑ์สูงกว่า ~8) · ส่องกล้องภายใน <b>24 ชม.</b> · erythromycin IV ก่อนส่องกล้อง · หลังห้ามเลือดทางกล้องใน ulcer high-risk ให้ <b>PPI ขนาดสูง 3 วัน</b> แล้วกินวันละ 2 ครั้งถึง 2 สัปดาห์ {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> สงสัย <b>variceal bleeding</b> (โรคตับ/สุรา): vasoactive drug (terlipressin/octreotide) + <b>ceftriaxone</b> + ส่องกล้อง EVL ภายใน 12 ชม. (Baveno VII) {{R:3}}</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Laine L, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol 2021;116:899–917",
"u": "https://doi.org/10.14309/ajg.0000000000001245"
},
{
"t": "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol 2022;76:959–974",
"u": "https://doi.org/10.1016/j.jhep.2021.12.022"
}
]
},
{
"id": "R01-H8",
"title": "History taking 8 · Leg edema (ขาบวม)",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>สถานี: ขาบวม <span class=\"ref\">p15</span></h3>\n<p><span class=\"chip o\">📝 recall</span> <b>12. History taking ผู้ป่วยจำลองมาด้วยขาบวม</b> ให้บอกระบบหรืออวัยวะที่เกี่ยวข้อง — <span class=\"chip x\">เฉลยในสมุด</span> <b>มีท้องโตด้วย → อวัยวะที่เกี่ยวข้องคือตับ</b> · *คะแนนส่วนซักประวัติรายละเอียดเยอะมาก ซักเยอะ ๆ ได้ diag แล้วก็ต้องซัก ประวัติสำหรับ DDx, risk factor ต่าง ๆ</p>\n<p><span class=\"chip o\">📝 recall</span> <b>XX.</b> จงซักประวัติผู้ป่วยหญิงมาด้วยขาบวม + บอกระบบที่นึกถึงมากที่สุด → บวมขา 2 ข้าง กดบุ๋มไม่ได้สังเกต <b>ตอนเช้ามีหน้าบวมตาบวม</b> ปัสสาวะน้อยลง <b>ปัสสาวะมีฟอง</b> ไม่เคยปัสสาวะเป็นเลือด ไม่มีไอเจ็บคอมาก่อน <b>มีประวัติใช้ยา NSAIDs</b> (ลง Service round XX RoX — เฉลยโดย Claude: ไต/nephrotic)</p>\n<p>- ซักประวัติบวม: บวมมากี่วัน เจ็บไหม มีปวด บวม แดง ร้อนไหม · <b>ข้างเดียวหรือสองข้าง</b> · ถ้า 2 ข้าง ถามต่อว่า<b>บวมที่ไหนก่อน</b> — ท้องก่อน ขาก่อน หรือหนังตาตอนตื่นนอนก่อน → หา organ · 4 สาเหตุหลัก: <b>ตับ ไต หัวใจ hypoalbuminemia (malnutrition)</b></p>\n<p><b>ตับ</b> — บวมท้องก่อน · ติด hepatitis · ดื่มสุราเยอะ · <b>หัวใจ</b> — อาการ HF: นอนราบไม่ได้ ตื่นมาหอบกลางคืน ขาบวมก่อน <span class=\"hw\">(dependent ก่อน)</span> เหนื่อยเมื่อออกแรง · <b>Nephrotic</b> — หนังตาบวม หน้าบวมตอนเช้า ปัสสาวะมีฟอง · <b>Nephritic</b> — ปัสสาวะเป็นเลือด · **<span class=\"hw\">ซัก PH: โรคประจำตัว, ยาที่ใช้ประจำ</span></p>\n<p class=\"hw\">ลายมือบนหัวกระดาษ: เป็นมานานเท่าไร · กี่ข้าง · กดแล้วบุ๋มไหม · trauma · fam Hx CA · orthopnea, PND, dyspnea · U/D — heart, โรคไต, DM, HT, cirrhosis · <s>ไข้ไหม</s> · ท้องโต? · <b>หัวใจ</b> — orthopnea, PND, บวมขาก่อน · <b>ตับ</b> — ท้องบวมก่อน, hepatitis B, C, alcohol, bleed ง่าย · <b>ไต</b> — ปัสสาวะเลือด, ฟอง, ปัสสาวะน้อย(?), บวมหนังตา scrotum ก่อน ตอนตื่นนอนเช้า · malnutrition</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> บวม<b>ข้างเดียว</b> = สาเหตุเฉพาะที่: <b>DVT</b> (ปวด บวม กดเจ็บน่อง ไม่ได้เคลื่อนไหว มะเร็ง ยาคุม — Wells score) · cellulitis (แดง ร้อน ไข้) · lymphedema · ruptured Baker's cyst · บวมสองข้าง = systemic (หัวใจ ตับ ไต ขาดอาหาร ยา — CCB เช่น amlodipine, NSAIDs, steroid, pioglitazone) · <b>NSAIDs</b> ทำให้บวมได้ทั้งจากเก็บเกลือและจากไต (AKI, minimal change disease/membranous)</p></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
}
]
},
{
"id": "R01-H9",
"title": "History taking 9 · Bleeding disorder (เลือดออกง่าย)",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>สถานี: เลือดออกง่าย <span class=\"ref\">p15</span></h3>\n<p><span class=\"chip o\">📝 recall</span> <b>3. ซักประวัติผู้ป่วยชายอายุ 22 ปี มาด้วยเลือดออกง่าย</b> (เลือดออกจากไรฟัน 3 วันก่อนมา รพ. <span class=\"hw\">← mucosal</span> · มีผื่นม่วงที่ขาขนาดเท่าฝ่ามือวันที่มา <span class=\"hw\">← purpura</span> · มีไข้ ปวดเมื่อยร่างกาย 2 สัปดาห์ก่อน <span class=\"hw\">← infect</span> · รับประทานยาแก้ปวด · ไม่อ่อนเพลียเหนื่อยง่าย <span class=\"hw\">← no anemia</span>) · สารบัญ p2: <span class=\"hw\">เลือดออกง่าย (เลือดออกตามไรฟัน, ผื่นเท่าฝ่ามือ) + มีไข้</span> · <span class=\"mut\">ในคลังมีสถานีคล้ายกันแล้ว (MDCU75 RoD ข้อ 14)</span></p>\n<p>ดู <b>3 อย่าง</b>: <b>1. Bleeding tendency</b> = spontaneous bleeding · multiple site · inappropriate to injury · delayed bleeding · <b>2. Congenital vs acquired</b> = เพิ่งเป็นครั้งแรก หรือเป็นมาหลายครั้ง · ดู age of onset · <b>3. Primary vs secondary</b> hemostasis</p>\n<p class=\"hw\">ลายมือ: ① 1. multiple site 2. inappropriate กับ trauma 3. spon bleed 4. delayed bleed · ② ony(?) cong. acq. · ③ p, s</p>\n<p>NOTE (หนังสือ): 1. past history — เคยเลือดออกผิดปกติจากการถอนฟัน/ผ่าตัด/ประจำเดือน · 2. onset — หลังคลอด ตั้งแต่เด็ก ประวัติครอบครัว · 3. ความรุนแรงสัมพันธ์กับอุบัติเหตุไหม · 4. ประวัติการใช้ยา · 5. โรคประจำตัวที่เป็นสาเหตุ เช่น <span class=\"hw\">SLE, ตับ, ไต</span></p>\n<p>*เคยไป<b>ถอนฟัน</b>ไหม · เคยมีเลือดออกผิดปกติมาก่อนไหม · เคย<b>ซีด</b>ไหม · ผู้หญิงถาม<b>ประจำเดือน</b>มากกว่าปกติไหม</p>\n<table class=\"fx\"><tr><th></th><th>Primary hemostasis (เกล็ดเลือด/vWF)</th><th>Secondary (coagulation factor)</th></tr>\n<tr><td>Onset หลังบาดเจ็บ</td><td>ทันที</td><td>ช้า (ชั่วโมง–วัน) <span class=\"hw\">อยู่ดี ๆ ก็เลือดออกใหม่</span></td></tr>\n<tr><td>ตำแหน่ง</td><td>ตื้น: ผิวหนัง เยื่อบุ จมูก เหงือก GI GU</td><td>ลึก: กล้ามเนื้อ ข้อ retroperitoneum</td></tr>\n<tr><td>ตรวจร่างกาย</td><td>petechiae, purpura, small ecchymoses</td><td>large ecchymosis, hematoma, <b>hemarthrosis</b></td></tr>\n<tr><td>กดห้ามเลือด</td><td>ได้ผลดี</td><td>ได้ผลน้อย</td></tr></table>\n<p>- ซักพวก <b>non-immune mediated</b>: <b>DIC</b> <span class=\"hw\">(acute: sepsis, …, งูกัด · chronic: malig — APL, solid tumor/vascular)</span>, hematoma ก้อนใหญ่ (consumption)</p>\n<p>- ซักพวก <b>immune = MAID</b>: <b>M</b>alignancy (lymphoma <span class=\"hw\">— fever, night sweat, wt loss</span>) · <b>A</b>utoimmune (SLE <span class=\"hw\">— ถามหา malar rash</span>) · <b>I</b>nfection (dengue, HIV, HCV <span class=\"hw\">— ไข้, ถามหา risk factors</span>) · <b>D</b>rugs (sulfonamide) · <b>#R/O ทั้งหมดค่อย Dx ITP</b> <span class=\"hw\">(immune thrombocytopenic purpura: Ab ต่อ PLT → PLT ถูกทำลาย)</span></p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ASH ITP 2019</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> ITP = <b>diagnosis of exclusion</b> (platelet &lt; 100,000 แยกสาเหตุอื่น) — ตรงกับสมุด \"R/O ทั้งหมดค่อย dx ITP\" <span class=\"chip s\">ซ้ำ</span> · การประเมินขั้นต่ำ: CBC + <b>blood smear</b> (ตัด pseudothrombocytopenia), ตรวจ <b>HIV, HCV</b> (± HBV, H. pylori) {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> ผู้ใหญ่ ITP ใหม่ <b>platelet ≥ 30,000 ไม่มีเลือดออก → เฝ้าดู</b> · platelet &lt; 30,000 → <b>corticosteroid</b> (prednisone ≤ 6 สัปดาห์ หรือ dexamethasone 40 mg × 4 วัน) · ต้องการเพิ่มเร็ว/เลือดออกมาก → IVIG</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Neunert C, et al. American Society of Hematology 2019 guidelines for immune thrombocytopenia. Blood Adv 2019;3:3829–3866",
"u": "https://doi.org/10.1182/bloodadvances.2019000966"
}
]
},
{
"id": "R01-H10",
"title": "History taking 10 · Hemoptysis (ไอเป็นเลือด)",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>สถานี: ไอเป็นเลือด <span class=\"ref\">p16</span></h3>\n<p><span class=\"chip o\">📝 recall</span> <b>XX.</b> ซักประวัติผู้ป่วยอายุ 55 ปี ไอเป็นเลือด — ไอเป็นเลือดเป็น ๆ หาย ๆ มาหลายเดือน แต่ละครั้งประมาณเหรียญสลึง ไม่มีไข้ ไม่มีเหงื่อออกกลางคืน ไม่มีโรคประจำตัว/ผ่าตัด พ่อเป็นถุงลมโป่งพอง <b>สูบบุหรี่ 30 ปี วันละซอง</b> ไม่มีแอลกอฮอล์ ยาเสพติด unsafe sex ยาสมุนไพรลูกกลอน ให้ DDx 2 โรค · <span class=\"chip x\">เฉลยในสมุด</span> <span class=\"hw\">Lung cancer ✓ (PE) · Bronchiectasis ✓ (TB) — chronic productive cough with purulent sputum</span> · สารบัญ p2: <span class=\"hw\">ไอเป็นเลือด 2 mo.</span> (ลง Service round XX RoX)</p>\n<p>**<b>1st — R/O GI bleeding</b> ที่ทำให้กระตุ้น gag reflex แล้วไอออกมา (ตารางแยก hemoptysis/hematemesis — ดูหน้า GI bleeding)</p>\n<p>- <b>ประเมินความรุนแรง</b>: หน้ามืด ใจสั่น จะเป็นลมไหม</p>\n<p class=\"hw\">ลายมือ: infection, trauma, tumor · DDx — Pulmonary embolism, Bronchiectasis, TB, Lung CA · CA lung, TB, Bronchiectasis · หา DAH (diffuse alveolar hem.) → ถ้าล้าง(BAL)แล้วเลือดยังแดง … (sequential lavage …) <span class=\"warn\">⚠ อ่านไม่ออก</span></p>\n<p>ตารางการซักประวัติ (หนังสือ): ระยะเวลา · ลักษณะเสมหะ (ไอเรื้อรัง เสมหะมาก = bronchiectasis; เสมหะเป็นหนอง ฝีในปอด) · อาการร่วม (<span class=\"hw\">TB</span>: ไข้เรื้อรัง น้ำหนักลด · <span class=\"hw\">PE</span>: เหนื่อย เจ็บหน้าอกเวลาหายใจ) · <span class=\"hw\">PH</span> โรคปอดเดิม/วัณโรค (Rasmussen aneurysm), โรคเลือด, ยาต้านการแข็งตัว · <span class=\"hw\">SH</span> สูบบุหรี่ (มะเร็ง) · <span class=\"hw\">FH</span> สัมผัสผู้ป่วยวัณโรค</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <b>DAH (diffuse alveolar hemorrhage)</b>: ไอเลือด + ซีดลง + ฝ้าขาวทั่วปอด · ยืนยันด้วย <b>BAL ที่เก็บต่อเนื่องหลายครั้งแล้วเลือดแดงขึ้นเรื่อย ๆ (progressively hemorrhagic)</b> + hemosiderin-laden macrophages · สาเหตุ: ANCA vasculitis, anti-GBM (Goodpasture), SLE</p></div>\n<div class=\"box\"><h3>Algorithm hemoptysis (handout) <span class=\"ref\">p17</span></h3>\n<p>Hemoptysis → <b>local vs systemic bleeding</b> (thrombocytopenia, coagulopathy <span class=\"hw\">— liver disease, ยา; หาดู sign ก่อนหลัง ex. skin bruise</span>) → <b>true vs pseudohemoptysis</b> (epistaxis, hematemesis) → <b>true hemoptysis: มี massive hemoptysis หรือไม่</b> — <span class=\"imp\">ไอเป็นเลือดสด &gt; 200 mL/ครั้ง หรือ &gt; 600 mL/24 ชม.</span> → resuscitation + close observe การหายใจ</p>\n<p>สาเหตุ <span class=\"hw\">infection, trauma, tumor, vascular</span>: <b>Airway</b> — infection (bronchitis, bronchiectasis <span class=\"hw\">chronic; จาก TB → upper, aspiration → lower</span>), tumor (bronchogenic CA <span class=\"hw\">sq. cell → endobronchial mass</span>), <span class=\"hw\">FB, trauma</span> · <b>Parenchyma</b> — infection (lung abscess, pneumonia <span class=\"hw\">parasite, fungus; fungal ball? invade (aspergilloma/mycetoma)</span>), tumor (primary vs metas), trauma (lung contusion), small vascular (Goodpasture, Wegener) · <b>Vascular</b> — PE <span class=\"hw\">(fr. lung infarction)</span>, AVM, <span class=\"hw\">vasculitis มัก symmetrical, rupture aneurysm (massive)</span> · <b>Misc</b> — pulmonary endometriosis, idiopathic pulmonary hemosiderosis, <span class=\"hw\">HF: pink frothy sputum</span></p>\n<p class=\"hw\">TB: primary TB · reactivated TB → @ upper lobe · relapse → มี risk MDR esp. เพิ่ง tx แล้ว relapse</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <span class=\"warn\">! ต่าง</span> นิยาม massive hemoptysis แตกต่างกันมาก (100–1,000 mL/24 ชม.) ปัจจุบันเน้นคำว่า <b>life-threatening hemoptysis</b> = เลือดออกที่ทำให้ทางเดินหายใจอุดตัน/ขาดออกซิเจน หรือ hemodynamic ไม่คงที่ ไม่ว่าปริมาณเท่าใด · การดูแล: นอนตะแคง<b>เอาข้างที่เลือดออกลง</b> ใส่ท่อช่วยหายใจ (single-lumen ขนาดใหญ่) แก้ coagulopathy CT angiography → <b>bronchial artery embolization</b> หรือส่องกล้องห้ามเลือด {{R:2}}</p>\n<div class=\"fig\">{{IMG:medr01_p17}}</div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "handout ในสมุด: Differential diagnostic algorithm in internal medicine — 2.3 Hemoptysis (อ้าง กมล แก้วกิติณรงค์ 2552; ครรชิต ปิยะเวชวิรัตน์ 2554; วัชรา บุญสวัสดิ์ 2542)"
}
]
},
{
"id": "R01-H11",
"title": "History taking 11 · Hematuria (ปัสสาวะเป็นเลือด) — PSGN",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>สถานี: ปัสสาวะสีน้ำล้างเนื้อ [อ.ขจร] <span class=\"ref\">p16</span></h3>\n<p><span class=\"chip o\">📝 recall</span> <b>2. ฐานซักประวัติผู้ป่วยจำลองหญิง มาด้วยปัสสาวะสีน้ำล้างเนื้อ 2 วันก่อน</b> (มีประวัติเป็นหวัด 2 สัปดาห์ก่อนหน้า — สรุปสงสัย <b>Post-streptococcal glomerulonephritis</b>) a. จงซักประวัติ <span class=\"hw\">ปัสสาวะน้อยลง? แสบขัด? มีฟอง? ไข้, เจ็บคอนำมาก่อน?, ผื่น?, ยาที่กิน</span> b. Diagnosis ที่เป็นไปได้มากที่สุด · สารบัญ p2: <span class=\"hw\">ปัสสาวะสีน้ำล้างเนื้อ 2 d</span></p>\n<p class=\"hw\">ลายมือซ้าย (อาการ nephritic): RBC · WBC · HT · oliguria · edema</p>\n<p>** <b>R/O</b> ว่าผู้ป่วยไม่ได้เป็นโรคเลือด และไม่ได้ปนประจำเดือนมาก่อน <span class=\"hw\">① เคยเป็นมาก่อนไหม?</span> / ② ③ พวกยาหรืออาหารที่ทำให้ปัสสาวะเปลี่ยนสี</p>\n<p>** พอแน่ใจว่าเป็น hematuria ซักว่าเป็นเลือด<b>ต้นสาย (= urethra)</b> หรือ<b>ปลายสาย</b> (bladder/posterior urethra) · ** <b>เท่ากันตลอดสาย</b> แปลว่าน่าจะมาจาก ureter/ไต <span class=\"hw\">(ต้น/ปลาย/ตลอดสาย, ปวดหลัง)</span></p>\n<p>- มีลิ่มเลือดปนไหม? ถ้าไม่มีแปลว่ามาจาก <b>glomerular</b> · ถ้ามี = <b>post-glomerular</b> (ureter/bladder)</p>\n<p>- มีอาการระบบปัสสาวะไหม? ปัสสาวะปวด ปัสสาวะลำบาก = <b>lower UTI</b> <span class=\"hw\">ปวดหลัง</span></p>\n<p>- มีอาการปวดไหม? ถ้ามีน่าจะเป็น infection · ถ้าปวดร้าวลงขาหนีบ = <b>stone</b></p>\n<p>- การติดเชื้อพวก<b>เจ็บคอ ท้องเสีย = PIGN/IgA</b> · - <b>SLE</b></p>\n<p>** ประวัติอื่น: ใช้ยา <b>warfarin</b> · น้ำหนักลด เบื่ออาหาร · <b>สูบบุหรี่</b> <span class=\"hw\">(urothelial CA)</span> · ครอบครัว<b>ถุงน้ำในไต</b> · ฉายแสงอุ้งเชิงกราน · ออกกำลังกายหนัก ๆ เล่นกีฬาก็ทำให้ปัสสาวะเป็นเลือดได้</p>\n<p class=\"hw\">ลายมือขวา: ① R/O เลือด, ประวัติเลือดออกง่าย, ยาที่ทำให้ปัสสาวะเปลี่ยนสี ② สีแดงเท่ากันทั้งสาย = glom, ureter / ปลาย = bladder, urethra, prostatic ③ ปวดหลังรุนแรง pyelonephritis / ฉี่แสบขัด ปวดบ่อย UTI ④ ไข้ เจ็บคอ</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <span class=\"warn\">! ต่าง</span> หลักมาตรฐาน: <b>initial hematuria = urethra</b> · <b>terminal = bladder neck/prostate/posterior urethra</b> · <b>total (ตลอดสาย) = bladder ขึ้นไป</b> (bladder, ureter, ไต) — สมุดเขียน \"ตลอดสาย = ureter/ไต\" ไม่ครบ (bladder ก็เป็น total hematuria ได้ เช่น มะเร็งกระเพาะปัสสาวะ)</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <b>PSGN vs IgA nephropathy</b> แยกด้วย<b>ระยะห่างจากการติดเชื้อ</b>: PSGN เกิด <b>1–3 สัปดาห์หลังคออักเสบ</b> (3–6 สัปดาห์หลังผิวหนังติดเชื้อ) C3 ต่ำ · IgA nephropathy เกิด<b>พร้อมกัน/ภายใน 1–3 วัน</b> (synpharyngitic) C3 ปกติ · โจทย์ \"หวัด 2 สัปดาห์ก่อน\" จึงเป็น PSGN</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">AUA/SUFU Microhematuria 2025</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> Microhematuria = <b>RBC ≥ 3/HPF</b> ในปัสสาวะ 1 ตัวอย่างที่เก็บถูกต้อง (dipstick บวกอย่างเดียวไม่พอ) {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> ประเมินสาเหตุไต (dysmorphic RBC, <b>RBC cast</b>, proteinuria, Cr สูง, HT) → ส่ง nephrology · gross hematuria ไม่มีสาเหตุชัด → urologic evaluation (cystoscopy + imaging) · 2025 ปรับ risk stratification (เพิ่มกลุ่มเสี่ยงต่ำ/negligible ลดการตรวจเกินจำเป็น) และแนะนำตรวจปัสสาวะซ้ำหลังรักษาสาเหตุชั่วคราว (UTI, gynecologic)</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Barocas DA, et al. Updates to Microhematuria: AUA/SUFU Guideline (2025). J Urol 2025;213:547–557",
"u": "https://doi.org/10.1097/JU.0000000000004490"
}
]
},
{
"id": "R01-H12",
"title": "History taking 12 · Cirrhosis — หาสาเหตุ + complication",
"topics": [
"History taking"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>สถานี: หาสาเหตุตับแข็ง <span class=\"ref\">p18</span></h3>\n<p><span class=\"chip o\">📝 recall</span> <b>8. ผู้ป่วยชายไทยอายุ 30 ปี จงซักประวัติเพื่อหาสาเหตุของ cirrhosis และหา complication</b> ที่เกิดจาก cirrhosis และจงบอกสาเหตุที่เป็นไปได้ 2 ข้อ · สารบัญ p2: <span class=\"hw\">หา cause cirrhosis × complication</span></p>\n<p><b>Etiologies</b> (หนังสือ): ① <b>chronic viral hepatitis</b> — HBV, HCV (HDV + HBV) ไม่ใช่ HAV/HEV · ② <b>autoimmune hepatitis</b> — หญิง ANA/anti-smooth muscle <span class=\"hw\">(อาการ SLE)</span> · ③ <b>drug/toxin</b> — alcohol, methotrexate, amiodarone <span class=\"hw\">(ประวัติยา)</span> · ④ <b>venous outflow obstruction</b> — Budd–Chiari, heart failure · ⑤ <b>biliary</b> — PBC, PSC · ⑥ <b>metabolic</b> — α1-antitrypsin deficiency, NASH, Wilson's, hemochromatosis, NAFLD <span class=\"hw\">(ประวัติครอบครัว)</span></p>\n<p>Hx: IVDU, tattoo, blood transfusion, ยา, alcohol, underlying disease, FHx · clinical = <b>hepatocellular failure + portal hypertension</b></p>\n<p>① Signs of portal HT: ascites, splenomegaly, caput medusa, venous hum · ② signs of liver failure: spider nevi, palmar erythema, hair loss, gynecomastia, Dupuytren's contracture, white nail, clubbing, testicular atrophy, asterixis, encephalopathy, fetor hepaticus · ตับ: ช่วงแรกโต ระยะท้ายเล็กแข็ง ขอบขรุขระ · clinical 3 ระยะ: latent (asymptomatic) · compensated (nonspecific: อ่อนเพลีย แน่นท้องขวาบน นอนไม่หลับ libido ลด) · <b>decompensated</b> (liver failure, portal HT, coagulopathy, jaundice, encephalopathy)</p>\n<div class=\"fig\">{{IMG:medr01_p18}}</div></div>\n<div class=\"box\"><h3>ลายมือ — โครงซัก <span class=\"ref\">p18</span></h3>\n<p class=\"hw\">จำสาเหตุ: <b>A, B, C, D, M, V</b> (Alcohol, HBV, HCV, Drug, Metabolic, Vascular)</p>\n<p class=\"hw\">① PH — ประวัติติดเชื้อ HBV, HCV, การดื่ม alcohol (SH), SLE · โรคหัวใจ (cardiac cirrhosis?) heart failure · biliary: PBC, PSC · metabolic: α1 antitrypsin def, Wilson, hemochromatosis, NAFLD</p>\n<p class=\"hw\">② SH — alcohol! · IVDU, sex, alcohol, blood transfuse, U/D, partner, พ่อแม่ · ④ ยาที่ใช้ประจำ</p>\n<p class=\"hw\">อาการ — chronic liver stigmata (spider nevi, palmar erythema, parotid gland enlargement, white nail, asterixis) · portal HT (ascites, splenomegaly, caput medusa)</p>\n<p class=\"hw\">HepB, HepC — IVDU, partner, แม่, tattoo, blood transfusion · Alco, drug/toxin, infection, autoimmune, Wilson — genetic, NASH, NAFLD</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> ชาย 30 ปีตามโจทย์ สาเหตุที่น่าตอบ 2 ข้อ = <b>chronic hepatitis B</b> (ติดจากแม่ตั้งแต่เกิดพบมากในไทย) และ <b>alcoholic liver disease</b> · ถ้าอายุน้อย + อาการทางระบบประสาท/จิตเวช → <b>Wilson's disease</b> (Kayser–Fleischer ring, ceruloplasmin ต่ำ) · complication ที่ต้องซัก: ท้องโต (ascites/SBP — ไข้ ปวดท้อง), อาเจียน/ถ่ายดำ (varices), ซึม สับสน กลางวันนอนกลางคืนตื่น (hepatic encephalopathy), ตัวเหลือง, ปัสสาวะน้อย (HRS), ก้อน/น้ำหนักลด (HCC)</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">MASLD nomenclature 2023 · Baveno VII 2022</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <span class=\"warn\">! ต่าง</span> ชื่อใหม่: <b>NAFLD → MASLD</b> (metabolic dysfunction-associated steatotic liver disease) · <b>NASH → MASH</b> · ดื่มร่วม = <b>MetALD</b> · สมุดใช้ชื่อเดิม NAFLD/NASH {{R:2}} · PBC ปัจจุบันเรียก <b>primary biliary cholangitis</b> (เดิม cirrhosis)</li>\n<li><span class=\"chip gl\">📘 Guideline</span> Baveno VII: <b>compensated advanced chronic liver disease</b> (cACLD) เมื่อ liver stiffness ≥ 15 kPa · clinically significant portal HT → <b>NSBB (carvedilol)</b> เพื่อป้องกัน decompensation {{R:3}}</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Rinella ME, et al. A multisociety Delphi consensus statement on new fatty liver disease nomenclature. Hepatology 2023;78:1966–1986",
"u": "https://doi.org/10.1097/HEP.0000000000000520"
},
{
"t": "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol 2022;76:959–974",
"u": "https://doi.org/10.1016/j.jhep.2021.12.022"
}
]
},
{
"id": "R01-P1",
"title": "Physical examination · Tourniquet test (dengue)",
"topics": [
"Physical examination"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>Tourniquet test <span class=\"ref\">p12</span></h3>\n<p>สไลด์: พัน cuff วัดความดัน แล้ว<b>บีบลมค้างไว้ที่ระดับกึ่งกลางระหว่าง systolic และ diastolic</b> (= (SBP + DBP)/2) นาน <b>5 นาที</b> (วงไว้) · <b>Positive</b>: จุดเลือดออก (petechiae) <b>≥ 20 จุด → ลายมือแก้เป็น 10 จุด</b> ต่อ 1 ตารางนิ้ว (6.25 cm²)</p>\n<p>ใช้ใน DHF: เป็นหลักฐาน bleeding tendency เมื่อ<b>ไม่มีเลือดออกเอง</b> (สมุด p11 ลายมือ \"ถ้าไม่ spontaneous ต้องทำ tourniquet test\") · DHF grade I = tourniquet positive อย่างเดียว</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> ขั้นตอนสาธิตในสถานี: อธิบายและขออนุญาต → วัด BP จริงก่อน → คำนวณค่ากึ่งกลาง → บีบลมค้าง 5 นาที → ปล่อยลมหมด <b>รอ 1–2 นาทีให้เลือดไหลกลับ</b> → นับจุดในกรอบ 1 ตร.นิ้ว ที่บริเวณที่จุดหนาแน่นที่สุด (มักใต้ข้อพับแขน) → รายงานผล · ข้อจำกัด: ความไวต่ำในวันแรก ๆ ของไข้และในภาวะช็อก (อาจลบลวง) — ผลลบไม่ตัด dengue</p>\n<div class=\"fig\">{{IMG:medr01_p12}}</div>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">กรมวิทยาศาสตร์การแพทย์ 2566 · WHO 1997</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <span class=\"warn\">! ต่าง</span> <b>WHO 1997</b> (ที่มาของสไลด์) ใช้เกณฑ์ <b>≥ 20 จุด/ตร.นิ้ว</b> {{R:2}} · แนวทางไทย (กรมวิทยาศาสตร์การแพทย์ 2566) ใช้ <b>&gt; 10 จุด/ตร.นิ้ว</b> — ตรงกับที่ลายมือแก้ <span class=\"chip s\">ซ้ำ</span> {{R:3}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> WHO 2025 (arboviral) ไม่ได้ใช้ tourniquet test เป็นเกณฑ์จัดความรุนแรง — เน้น warning signs และอาการทางคลินิก {{R:4}}</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "World Health Organization. Dengue haemorrhagic fever: diagnosis, treatment, prevention and control, 2nd ed. Geneva: WHO; 1997 (แหล่งของสไลด์ในสมุด)"
},
{
"t": "กรมวิทยาศาสตร์การแพทย์. คำแนะนำการตรวจทางห้องปฏิบัติการสำหรับโรคไข้เลือดออก (6 มิ.ย. 2566) — tourniquet test บวกเมื่อจุดเลือดออก > 10 จุด/ตารางนิ้ว",
"u": "https://www.dmsc.moph.go.th/th/download/2486/nw/1464"
},
{
"t": "WHO guidelines for clinical management of arboviral diseases: dengue, chikungunya, Zika and yellow fever. Geneva: WHO; 2025 (เผยแพร่ ก.ค. 2025)",
"u": "https://www.who.int/publications/i/item/9789240111110"
}
]
},
{
"id": "R01-P2",
"title": "Physical examination / Procedure · การวัดความดันโลหิต (recall XX)",
"topics": [
"Physical examination",
"Procedure"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3><span class=\"chip o\">📝 recall</span> XX — เตรียมตัวก่อนวัดความดัน + วัดและอธิบายแต่ละขั้นตอน <span class=\"ref\">p5</span></h3>\n<p>โจทย์: คนไข้<b>นั่งยกขา (ไขว่ห้าง)</b>อยู่ตอนเริ่ม · บนโต๊ะมี <b>cuff ใหญ่และเล็ก</b> · สารบัญ p3 จัด \"Blood Pressure\" ไว้ในหมวด<b>ตรวจร่างกาย</b> (ในคลังข้อสอบเก่าสถานีนี้อยู่หมวด Procedure: MDCU75 RoA ข้อ 7, MDCU76 RoC ข้อ 1) · ลายมือหน้า HT advice (p23): <span class=\"hw\">BP↑ = นั่งพัก วัดซ้ำ ★★★</span></p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <b>เตรียมผู้ป่วย</b>: งดบุหรี่ กาแฟ ออกกำลังกาย ≥ 30 นาที · ปัสสาวะก่อน · <b>เอาขาลง ไม่ไขว่ห้าง เท้าวางราบ</b> · <b>หลังพิงพนัก</b> · แขนเปลือย วางบนโต๊ะ<b>ระดับหัวใจ</b> · <b>นั่งพัก 5 นาที</b> ไม่คุยทั้งผู้ป่วยและผู้วัด</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <b>เลือก cuff</b>: วัดรอบต้นแขน — bladder <b>ยาว 75–100%</b> และ<b>กว้าง ~40%</b> ของรอบแขน · cuff เล็กไป → ค่าสูงเกินจริง · ใหญ่ไป → ต่ำกว่าจริง</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <b>วัด</b>: พัน cuff ขอบล่างเหนือข้อพับ 2–3 cm → <b>palpatory method</b> (คลำ radial บีบจนชีพจรหาย = SBP คร่าว ๆ; ป้องกันพลาด auscultatory gap) → วาง stethoscope ที่ brachial → บีบเกิน 20–30 mmHg → <b>ปล่อย 2–3 mmHg/วินาที</b> → <b>SBP = Korotkoff I, DBP = Korotkoff V</b> → วัด <b>≥ 2 ครั้ง ห่าง 1–2 นาที</b> เฉลี่ย · ครั้งแรกวัดทั้ง 2 แขน · บอกค่าและอธิบายให้ผู้ป่วยฟังทุกขั้น</p>\n<table class=\"fx\"><tr><th>ความผิดพลาด</th><th>ผลต่อ SBP (โดยประมาณ, AHA 2019)</th></tr>\n<tr><td>นั่งไขว่ห้าง</td><td>+2 ถึง +8 mmHg</td></tr><tr><td>หลังไม่พิง</td><td>+5 ถึง +15</td></tr><tr><td>พูดคุยระหว่างวัด</td><td>+10 ถึง +15</td></tr>\n<tr><td>กลั้นปัสสาวะ</td><td>+10 ถึง +15</td></tr><tr><td>cuff เล็กเกิน</td><td>+2 ถึง +10</td></tr><tr><td>พันทับเสื้อ</td><td>+5 ถึง +50</td></tr><tr><td>แขนไม่มีที่วาง/ต่ำกว่าระดับหัวใจ</td><td>สูงเกินจริง</td></tr></table>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">AHA BP measurement 2019 · Thai HT 2024 · AHA/ACC 2025</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> ขั้นตอนเตรียม/วัดตาม <b>AHA scientific statement 2019</b> {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>Thai HT guideline 2024</b>: วินิจฉัย HT ที่ office BP ≥ 140/90 จากการวัดซ้ำ · ใหม่: กลุ่ม <b>\"BP at risk\" 130–139/80–89</b> · ยืนยันด้วย <b>HBPM/ABPM</b> {{R:3}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>AHA/ACC 2025</b>: หมวด BP เหมือน 2017 (stage 1 = 130–139/80–89, stage 2 ≥ 140/90) · เน้นวัดนอกคลินิกเพื่อยืนยัน {{R:4}}</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Muntner P, et al. Measurement of Blood Pressure in Humans: A Scientific Statement From the AHA. Hypertension 2019;73:e35–e66",
"u": "https://doi.org/10.1161/HYP.0000000000000087"
},
{
"t": "Kunanon S, et al. 2024 Thai guidelines on the treatment of hypertension (สมาคมความดันโลหิตสูงแห่งประเทศไทย). Asian Biomed 2025;19(6):316–357",
"u": "https://doi.org/10.2478/abm-2025-0034"
},
{
"t": "Jones DW, et al. 2025 AHA/ACC/multisociety Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. Hypertension 2025;82:e212",
"u": "https://doi.org/10.1161/HYP.0000000000000249"
}
]
},
{
"id": "R01-A1",
"title": "Advice 1 · หลัก advice (GETPAQ) + Common cold",
"topics": [
"Advice"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"iointro\">Part 2 ของสมุด = <b>Advice</b> (สารบัญ: <span class=\"hw\">Advice 1 ข้อ ไม่เน้นยา</span>; หน้าแบ่ง p19 เขียน \"Part 2: Advice 2 ข้อ\") · แต่ละหัวข้อแปะ <b>handout การให้คำแนะนำผู้ป่วย</b> แล้วไฮไลต์/เขียนลายมือ — ใน Round I/O สรุปประเด็นจาก handout เป็นภาษาของเรา + ถอดลายมือครบ {{R:2}}</div>\n<div class=\"box\"><h3>ลายมือจางที่หน้าแบ่ง Part 2 <span class=\"ref\">p19</span></h3>\n<p class=\"hw\">(สีชมพูจาง ตัวเล็ก) หัตถการ(?) · น้ำยา: chlorhex, alc, betadine · เจาะเลือด → HIV, HCV, HBV ระวัง…(?) · เกณฑ์…(?) · ยาต้าน…(?) + / / ? … · → agar(?)</p>\n<p><span class=\"warn\">⚠ อ่านไม่ออก</span> ส่วนใหญ่ — น่าจะเป็นโน้ตหัตถการ (น้ำยาฆ่าเชื้อผิวหนัง, การสัมผัสเลือด/เข็ม HIV-HBV-HCV, เพาะเชื้อ) จะเทียบกับหน้า Procedure ในชุดถัดไป</p></div>\n<div class=\"box\"><h3>โครง advice ทุกเรื่อง — GETPAQ <span class=\"ref\">p21</span></h3>\n<p class=\"hw\"><b>G</b>reeting = แนะนำตัว · <b>E</b>xplain · <b>T</b>reatment — symptomatic &amp; supportive · <b>P</b>revent spreading · <b>A</b>nother complication — sinusitis, otitis media, asthma, pneumo (ในคนภูมิต่ำ) · <b>?</b> Question = มีอะไรสงสัยไหม?</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> ใช้ได้กับทุกสถานี advice: เริ่มด้วยแนะนำตัว ถามชื่อ-นามสกุลอย่างสุภาพ → ถามความรู้เดิม/ความกังวลของผู้ป่วย → อธิบายโรคด้วยภาษาง่าย → การรักษา/การปฏิบัติตัว → ภาวะแทรกซ้อนและอาการที่ต้องกลับมา → นัดติดตาม → เปิดให้ถาม · <b>ห้ามใช้ศัพท์แพทย์โดยไม่อธิบาย</b> · ตรวจสอบความเข้าใจ (teach-back)</p></div>\n<div class=\"box\"><h3>Common cold counselling <span class=\"ref\">p21</span></h3>\n<p>สารบัญ p2: <span class=\"hw\">ไข้ + ไอ + น้ำมูกใส คิดว่าเป็น virus → reassure ✓</span></p>\n<p><b>Explain</b>: หวัดส่วนใหญ่เกิดจาก<b>ไวรัส</b>ที่ทางเดินหายใจส่วนบน <span class=\"hw\">(ก็คือบริเวณจมูกและคอ)</span> ติดต่อทางไอ จาม สัมผัสสารคัดหลั่ง · <span class=\"imp\">★ อาการเกิดหลังสัมผัสโรค ~3 วัน</span> · น้ำมูกไหล คัดจมูก เจ็บคอ คันคอ ปวดศีรษะ ไข้ต่ำ ๆ ไอ อ่อนเพลีย</p>\n<p><b>Treatment</b>: เป็นไวรัส <b>ยาปฏิชีวนะไม่จำเป็น</b> · ยาบรรเทาอาการ (ลดไข้ ลดน้ำมูก แก้คัดจมูก แก้ไอ) · พักผ่อน ดื่มน้ำอุ่นมาก ๆ อยู่ในที่อากาศถ่ายเท</p>\n<p><span class=\"imp\">★ กลับมาพบแพทย์</span>ถ้าไข้สูง เสมหะเปลี่ยนสี ปวดบริเวณไซนัส หูอื้อ น้ำเหลืองไหล ต่อมน้ำเหลืองโตกดเจ็บ <span class=\"hw\">* กลับมาพบแพทย์เมื่อ BT &gt; 39, เสมหะเขียว/เหลือง, LN โต, ปวดแก้ม/หน้าผาก</span></p>\n<p><b>Prevent spreading</b> <span class=\"imp\">★</span>: ปิดปากและจมูกเวลาไอจาม (ทิชชู่แล้วทิ้ง/ข้อพับแขน) ล้างมือ แยกของใช้ ไม่ใช้ภาชนะร่วม</p>\n<p><b>Complications</b>: หูชั้นกลางอักเสบ (ปวดหู มีหนอง) · ไซนัสอักเสบ (หวัดนาน น้ำมูกเขียวเหลือง ปวดใบหน้า) · กระตุ้น<b>หอบหืด/COPD</b> กำเริบ · ปอดอักเสบในคนภูมิต่ำ <span class=\"hw\">→ immunocompro.</span></p>\n<p class=\"hw\">ลายมือสีน้ำเงินใต้กรอบ: \"ต่อยา TB\"(?) <span class=\"warn\">⚠ อ่านไม่ออก</span></p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ACP/CDC 2016 (acute respiratory tract infection)</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> ACP/CDC: common cold <b>ไม่ให้ยาปฏิชีวนะ</b> · acute rhinosinusitis ให้เฉพาะเมื่ออาการ &gt; 10 วัน, ไข้สูง ≥ 39 °C + หนอง/ปวดหน้า ≥ 3–4 วัน, หรือ double sickening · pharyngitis ให้เมื่อยืนยัน GAS {{R:3}} — ตรงกับสถานี \"reassure\" <span class=\"chip s\">ซ้ำ</span></li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "handout ในสมุด: ชุดการให้คำแนะนำผู้ป่วย (counselling) — นพ.โอภาส พุทธเจริญ (common cold, HIV), พญ.พัชญา บุญชยอนันต์/นพ.ปฏิญญ์ บูรณะทรัพย์ขจร (DM diet, DM foot, obesity), HT counselling, พญ.นฤชา จิรกาลวสาน (asthma), TB counselling, พญ.นฤชา จิรกาลวสาน/พญ.มนาธิป โอศิริ (gout, OA)"
},
{
"t": "Harris AM, et al. Appropriate Antibiotic Use for Acute Respiratory Tract Infection in Adults: Advice for High-Value Care From the ACP and CDC. Ann Intern Med 2016;164:425–434",
"u": "https://doi.org/10.7326/M15-1840"
}
]
},
{
"id": "R01-A2",
"title": "Advice 2 · HIV counselling",
"topics": [
"Advice"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>HIV counselling <span class=\"ref\">p21</span></h3>\n<p class=\"hw\">ลายมือหัวข้อพูด: HIV → STD → ยา → ความสำคัญของการกินยา → F/U → ดูแลตัวเอง → แพร่เชื้อ → พา partner มาตรวจ</p>\n<p><span class=\"chip x\">เฉลยในสมุด</span> <span class=\"hw\">key: ใช้ชีวิตได้เหมือนคนปกติ แต่ต้องกินยาสม่ำเสมอและตรงเวลา · ระหว่างนี้ดู CD4 ถ้าต่ำทำให้ติดเชื้อแทรกซ้อนได้</span></p>\n<p><b>Notepad ที่ถ่ายแปะไว้ (โครงพูด)</b>: intro · ตรวจ HIV = ตรวจเลือดหาภูมิ <span class=\"imp\">ถ้าเพิ่งได้รับเชื้อ ผล neg → ตรวจ again</span> · ระหว่างรอผล ใช้ condom · if pos or clinical of STD → partner · other STD: gonorrhea, syphilis — หนองไหล ตกขาว แสบขัด ผื่น แผลที่ genitalia, hx of STD — ถาม partner too · risk: IVDU, substance, blood, secretion · underlying, แพ้ยา? · <b>Tx</b>: ไม่หายขาด ใช้ชีวิตได้ปกติ อายุยืน แต่<b>ต้องกินยาตลอดชีวิต สม่ำเสมอ ตรงเวลา ห้ามขาดยา</b> · can start now if ready · CD4 — if low ระวังโรคติดเชื้อฉวยโอกาส · viral load · BUN, Cr, LFT, lipid profile, glu, UA, <span class=\"imp\">hep, sy</span> ก่อนเริ่มยา · ดูแลสุขภาพ ออกกำลังกาย กินอาหารดี · prevention: condom, IVDU</p>\n<p>Handout (สรุป): อธิบายการตรวจเลือด (window period → ตรวจซ้ำ) · ระหว่างรอผลมีเพศสัมพันธ์ใช้ถุงยางทุกครั้ง · ผลบวก/อาการ STD → ตรวจคู่ · <span class=\"hw\">STD อื่น ๆ</span> ถามประวัติโรคติดต่อทางเพศสัมพันธ์ <span class=\"hw\">STD</span> · ประเมินความเสี่ยง (ใช้เข็มร่วม สารเสพติด) · โรคประจำตัว/แพ้ยา · <b>ไม่หายขาดแต่ควบคุมได้</b> ต้อง<span class=\"hw\">กินยาสม่ำเสมอ</span> · CD4 <span class=\"hw\">CD4</span> และ viral load · ตรวจก่อนเริ่มยา <span class=\"hw\">CBC, LFT ดูไขมัน?, Cr ดูไต, Glc, lipid, UA ก่อนเริ่ม Tx</span> · 3.1 <b>เริ่มยาต้านได้เลยถ้าผู้ป่วยเข้าใจและพร้อม</b> · 3.2 CD4 ต่ำ → กินยาป้องกันโรคฉวยโอกาส · 3.3 กินยาตรงเวลา ไม่ขาดยา ✓ · 3.4 ดูแลสุขภาพ อาหาร ออกกำลังกาย ✓ · 3.5 ลดการแพร่เชื้อ ใช้ถุงยาง ไม่ใช้เข็มร่วม ✓</p>\n<p>ลายมือ: <span class=\"hw\">มีโรคประจำตัวไรบ้างไหม?</span></p>\n<p><span class=\"chip g\">📖 อธิบาย</span> คำที่ควรพูด: <b>U = U (Undetectable = Untransmittable)</b> — กินยาจน viral load ตรวจไม่พบต่อเนื่อง ไม่แพร่เชื้อทางเพศสัมพันธ์ · คู่ที่ผลลบแนะนำ <b>PrEP</b> · สัมผัสเสี่ยงใน 72 ชม. → <b>PEP</b> 28 วัน · แจ้งว่าความลับผู้ป่วยได้รับการปกป้อง</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">Thailand National HIV Guidelines 2021/2022</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>Treat all</b>: เริ่ม ART ทุกรายไม่ขึ้นกับ CD4 · <b>rapid ART</b> ภายใน 7 วัน (เริ่มวันเดียวได้ถ้าพร้อม) — ตรงกับ handout \"เริ่มได้เลยถ้าพร้อม\" <span class=\"chip s\">ซ้ำ</span> {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> สูตรแรก: <b>TDF + 3TC (หรือ FTC) + DTG</b> (TLD) · ตรวจก่อนเริ่ม: CD4, Cr/eGFR, ALT, CBC, UA, glucose, lipid, <b>HBsAg, anti-HCV, syphilis</b>, คัดกรองวัณโรค/CXR · CD4 &lt; 200 → co-trimoxazole ป้องกัน PCP</li>\n<li><span class=\"chip gl\">📘 Guideline</span> ผู้ติดเชื้อ HIV ทุกราย<b>คัดกรองวัณโรคทุกครั้งที่มาตรวจ</b> และพิจารณา TB preventive treatment (แนวทาง TPT in PLHIV 2568)</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Thailand National Guidelines on HIV/AIDS Treatment and Prevention 2021/2022 (กรมควบคุมโรค) + แนวทางการคัดกรองและรักษาวัณโรคระยะแฝงในผู้ใหญ่ที่ติดเชื้อเอชไอวี พ.ศ. 2568",
"u": "https://tpthiv.ddc.moph.go.th/"
}
]
},
{
"id": "R01-A3",
"title": "Advice 3 · DM — diet counselling + foot care",
"topics": [
"Advice"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>Diabetic diet counselling <span class=\"ref\">p22</span></h3>\n<p class=\"hw\">ลำดับพูด: หวาน + ไม่หวาน → มัน → เค็ม → ผัก · เปิดด้วย \"ปกติชอบทานอะไรครับ?\"</p>\n<p><b>1. แนะนำตัว</b> · <b>2. กินพลังงานพอเหมาะ</b>ให้น้ำหนักอยู่ในเกณฑ์ · <b>3. จำกัดหวาน</b>: ขนมหวาน (ทองหยิบ ทองหยอด เค้ก คุกกี้ ไอศกรีม) เครื่องดื่มใส่น้ำตาล (น้ำผลไม้ น้ำอัดลม กาแฟเย็น ชาเขียวพร้อมดื่ม เครื่องดื่มชูกำลัง นมเปรี้ยว) · ผลไม้หวานน้อย เช่น แก้วมังกร ชมพู่ ฝรั่ง มะละกอ แอปเปิล · จำกัดผลไม้หวานจัด (ลำไย ทุเรียน ขนุน มะม่วงสุก ละมุด กล้วย) <span class=\"hw\">ไม่กินเลยจะดีกว่า</span></p>\n<p class=\"hw\">ผลไม้ GI ต่ำ จำ: ชมพู่ · เอา · แก้ว(มังกร) · แอ๊ป(เปิล) · ฝรั่ง · มะละกอ ★</p>\n<p class=\"hw\">*แต่ก็ไม่ใช่ว่าของที่ไม่หวานจะกินได้ ถ้ามันมีแป้งก็กินในปริมาณน้อย ๆ</p>\n<p><b>4. จำกัดแป้งไม่หวาน</b>: เผือก มัน ถั่ว ฟักทอง ข้าวเหนียว ข้าวโพด ขนมปัง มะม่วงดิบ <span class=\"hw\">(แป้ง: เผือก มัน ถั่ว)</span> · <b>5. ใยอาหารสูง</b>: ผักสด ธัญพืช</p>\n<p><b>6. จำกัดไขมันอิ่มตัว</b> ★ ใช้น้ำมันพืชที่ไม่อิ่มตัว · เลี่ยงของทอดน้ำมันมาก · ★ ปรุงด้วยการต้ม นึ่ง ย่าง อบ</p>\n<p class=\"hw\">อิ่มตัว ✗ ปาล์ม มะพร้าว · ไม่อิ่มตัว ✓ ถั่วเหลือง ทานตะวัน เมล็ดฝ้าย(?) รำข้าว (จำ) · ทรานส์ ✗ มาการีน เนยขาว</p>\n<p><b>7. ไขมันดี</b>: ถั่ว งา ปลาอย่างน้อย 2 ครั้ง/สัปดาห์ (โอเมก้า 3) (จำ) · <b>8. จำกัดไขมันทรานส์</b> (มาการีน เนยขาว อาหารอบกรอบ)</p>\n<p><b>9. ลดเกลือโซเดียม ≤ 2,300 mg/วัน</b>: น้ำปลา 1 ช้อนโต๊ะ ~1,160–1,420 mg · ซีอิ๊ว 1 ช้อนโต๊ะ ~960–1,420 mg · ผงชูรส 1 ช้อนชา ~492 mg · เกลือ 1 ช้อนชา ~2,000 mg</p>\n<p class=\"hw\">แหนม แฮม เค็ม(?) · ผักดอง หมูยอ(?) … | ยา · ตรวจตา(?)/ไต(?) · vaccine — บางคำอ่านไม่ชัด <span class=\"warn\">⚠ อ่านไม่ออก</span></p>\n<p class=\"hw\">*ควรทำอาหารกินเอง จะได้กะปริมาณเครื่องปรุงถูก</p>\n<p><b>10. จำกัดแอลกอฮอล์</b> (ให้พลังงานสูง ร่างกายเปลี่ยนเป็นไขมันได้)</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ADA Standards of Care 2026 (Sec 5)</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> ไม่มีสัดส่วนคาร์โบไฮเดรต-โปรตีน-ไขมันที่ดีที่สุดสำหรับทุกคน → วางแผนรายบุคคล · เน้นผักใบที่ไม่ใช่แป้ง ธัญพืชไม่ขัดสี ลดน้ำตาลเติมและแป้งขัดขาว · <b>แทนเครื่องดื่มหวานด้วยน้ำเปล่า</b> {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> โซเดียม <b>&lt; 2,300 mg/วัน</b> <span class=\"chip s\">ซ้ำ</span> · แอลกอฮอล์ถ้าดื่ม: หญิง ≤ 1, ชาย ≤ 2 ดื่มมาตรฐาน/วัน · ไขมันเน้น monounsaturated/polyunsaturated (Mediterranean pattern)</li></ul></div></div>\n<div class=\"box\"><h3>Diabetic foot care counselling <span class=\"ref\">p22</span></h3>\n<p><b>2. พื้นฐาน</b>: แผลที่เท้าเกิดจากเส้นประสาทเสื่อม (ไม่รู้สึกเจ็บ แผลติดเชื้อ) + หลอดเลือดส่วนปลายตีบ (แผลหายยาก) → อาจถูกตัดเท้า</p>\n<p><b>3. ดูแลทั่วไป</b> <span class=\"hw\">✗ บุหรี่, คุม BP, Glc, lipid</span> · ยกเท้าสูงขณะนั่ง เลี่ยงนั่งไขว่ห้างนาน</p>\n<p><b>4. ดูแลเท้า</b>: a. <span class=\"imp\">ตรวจเท้าทุกวัน (1–2 ครั้ง/วัน)</span> มองไม่ชัดใช้กระจกหรือให้ญาติดู · <span class=\"imp\">ถ้าพบแผล ตุ่มน้ำ หูด ตาปลา เล็บขบ ควรปรึกษาแพทย์ ไม่ควรรักษาเอง</span> <span class=\"hw\">← เพราะอาจรักษาผิดวิธี ทำให้แผลไม่หาย/แย่กว่าเดิมได้</span> · b. เช็ดเท้าให้แห้งโดยเฉพาะซอกนิ้ว · c. ทาครีมถ้าแห้ง แต่ไม่ทาซอกนิ้ว · d. <b>ไม่วางกระเป๋าน้ำร้อน/แช่น้ำอุ่น</b> (ไม่รู้สึกร้อน → แผลลวก) · e. ตัดเล็บตรง ไม่ตัดเนื้อ ไม่แคะซอกเล็บ · f. ถุงเท้านุ่มระบายอากาศ · g. <b>ตรวจเท้ากับผู้เชี่ยวชาญอย่างน้อยปีละครั้ง</b> <span class=\"hw\">ตรวจเท้า annually</span></p>\n<p><b>5. รองเท้า</b>: ใส่รองเท้าตลอดแม้ในบ้าน · พื้นนุ่ม หัวกว้าง ส้นไม่สูง ไม่ใส่รองเท้าคีบ · เท้าผิดรูป/แผลเรื้อรังตัดรองเท้าพิเศษ · ตรวจในรองเท้าก่อนสวม · ซื้อรองเท้าตอนบ่าย (เท้าบวมสุด) · เท้าบวม เลือกแบบปรับขนาดได้</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ADA Standards of Care 2026 (Sec 12 foot care)</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>ตรวจเท้าแบบครบ (comprehensive foot evaluation) อย่างน้อยปีละครั้ง</b> <span class=\"chip s\">ซ้ำ</span> · กลุ่มเสี่ยงสูง (neuropathy, PAD, แผลเก่า/ตัดเท้า, เท้าผิดรูป) ตรวจเท้า<b>ทุกครั้งที่มาพบแพทย์</b> · สอนผู้ป่วยตรวจเท้าทุกวัน {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> ADA 2026 เพิ่มเนื้อหาเทคโนโลยีตรวจจับแผลเท้าแต่เนิ่น ๆ (แผ่นวัด/พื้นรองเท้าอัจฉริยะ) และ adjunctive therapy ของแผลเบาหวาน</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "American Diabetes Association Professional Practice Committee. Standards of Care in Diabetes—2026. Diabetes Care 2026;49(Suppl 1) — Sec 5 (nutrition/lifestyle), Sec 8 (obesity), Sec 12 (foot care, doi 10.2337/dc26-S012)",
"u": "https://diabetesjournals.org/care/issue/49/Supplement_1"
}
]
},
{
"id": "R01-A4",
"title": "Advice 4 · Weight reduction (ภาวะน้ำหนักตัวเกิน)",
"topics": [
"Advice"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>Obesity and overweight counselling <span class=\"ref\">p22</span></h3>\n<p><span class=\"chip o\">📝 recall</span> recall p4 ข้อ 7: Advice ผู้ป่วยมาปรึกษาเรื่องลดน้ำหนัก (ลง Service round XX RoX — ใช้หน้านี้เป็นเฉลย)</p>\n<p>**<span class=\"imp\">ไม่พูดว่าอ้วน ให้พูดว่าภาวะน้ำหนักตัวเกิน</span></p>\n<p><b>1. เคยลดน้ำหนักมาก่อนไหม?</b> · ถ้าไม่เคย ถามว่า<b>ทราบถึงปัญหาของภาวะน้ำหนักตัวเกินหรือไม่</b> · ถ้าเคย ถามว่า<b>ประสบปัญหาใด ให้เล่าให้หมอฟังหน่อย</b> เพื่อที่จะได้เอาข้อมูลทั้งหมดมาตั้งเป้าและวางแผนลดน้ำหนักไปด้วยกัน</p>\n<p>Handout (สรุป): แนะนำตัว · เลี่ยงคำ \"อ้วน/โรคอ้วน\" · ถามปลายเปิดว่าผู้ป่วยคิดอย่างไรกับน้ำหนักของตนเอง · <b>ประเมินความพร้อม</b> — ไม่ทราบปัญหา → ให้ข้อมูลโรคที่เกี่ยวข้อง (เบาหวาน ความดัน ไขมัน ข้อเสื่อม นอนกรน หัวใจ) · เคยลดแต่ไม่สำเร็จ → ทบทวนอุปสรรค · <b>คุมอาหารร่วมกับออกกำลังกาย</b>: ลดพลังงานจากอาหาร <b>500–1,000 kcal/วัน</b> (≈ <b>1,200 kcal หญิง / 1,500 kcal ชาย</b>) · <b>portion control</b> · ทดแทนอาหารพลังงานสูง (dietary substitution) · ผักผลไม้หลากหลาย · <b>ออกกำลังกายแบบแอโรบิกระดับปานกลาง ≥ 30 นาที/วัน ≥ 5 วัน/สัปดาห์</b> เลือกกิจกรรมที่ทำได้จริงและชอบ (เดินเร็ว จักรยาน ว่ายน้ำ) · เทคนิคช่วย: กินช้า ๆ ไม่ดูจอขณะกิน ใช้จานเล็ก · ตั้งเป้าระยะยาว/ระยะสั้น · <b>ลด 5–10%</b> ก็มีประโยชน์ต่อสุขภาพ · ประเมินตนเองต่อเนื่อง (ชั่งน้ำหนักทุกสัปดาห์ จดบันทึก) · ให้กำลังใจเมื่อสำเร็จ · weight regain/yo-yo พบบ่อย — หัวใจคือออกกำลังกายสม่ำเสมอและคุมอาหารต่อเนื่อง</p>\n<p class=\"hw\">ลายมือ: *ทำอาหารเอง — แนะนำให้ทำอาหารเอง จะได้คำนวณ cal ถูก · ลดขนม ก็อย่าลืมกินให้ครบ 5 หมู่ด้วย · *ถ้าเกิดหิวมาก กิน(ผัก/ผลไม้?) …(?) · *ส่วนเรื่องกิจกรรม/ออกกำลังกาย ให้ผู้ป่วยเลือกเอง เอากิจกรรมที่ทำได้จริงและสม่ำเสมอ (อ่านไม่ชัดบางคำ) · แอโรบิกปานกลาง 30 min/d · <b>\"หมอว่าเป้าหมายแรก ลด 5% ดีไหมครับ\"</b> · *ตัวช่วย การจดบันทึก(?) · *ทำให้สม่ำเสมอ ไม่ต้อง…ไปเริ่มต้นใหม่(?)</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> เกณฑ์คนเอเชีย (WHO WPRO/ไทย): BMI <b>23–24.9 = น้ำหนักเกิน · ≥ 25 = อ้วน</b> · รอบเอวเกิน: ชาย ≥ 90 cm หญิง ≥ 80 cm (หรือ &gt; ส่วนสูง/2) · ลดน้ำหนักที่เหมาะสม 0.5–1 กก./สัปดาห์</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ADA Standards of Care 2026 (Sec 8 obesity)</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> ลดน้ำหนัก<b>≥ 5%</b> ได้ประโยชน์ทาง metabolic (ยิ่งมากยิ่งดี 10–15%) <span class=\"chip s\">ซ้ำ</span> · อาหารขาดพลังงาน 500–750 kcal/วัน · กิจกรรมทางกาย ≥ 150 นาที/สัปดาห์ ร่วม behavioral program {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> ยาลดน้ำหนัก (เช่น GLP-1 RA, tirzepatide) พิจารณาร่วมกับ lifestyle เมื่อมีข้อบ่งชี้ · ADA 2026 เพิ่มแนวทางปรับขนาดยาลดน้ำหนักรายบุคคล</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "American Diabetes Association Professional Practice Committee. Standards of Care in Diabetes—2026. Diabetes Care 2026;49(Suppl 1) — Sec 5 (nutrition/lifestyle), Sec 8 (obesity), Sec 12 (foot care, doi 10.2337/dc26-S012)",
"u": "https://diabetesjournals.org/care/issue/49/Supplement_1"
}
]
},
{
"id": "R01-A5",
"title": "Advice 5 · Hypertension counselling + treatment counselling",
"topics": [
"Advice"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>Hypertension counselling <span class=\"ref\">p23</span></h3>\n<p>อธิบายความดันโลหิต · ความดันเปลี่ยนแปลงตามเวลาและปัจจัยหลายอย่าง <span class=\"imp\">ถ้าวัดแล้วพบว่าสูง ควรนั่งพักสักครู่แล้ววัดซ้ำ</span> <span class=\"hw\">BP↑ = นั่งพัก วัดซ้ำ ★★★</span> · ★ ปกติไม่เกิน 120/80 แต่จะวินิจฉัย HT เมื่อ <span class=\"imp\">≥ 140/90 mmHg จากการวัดซ้ำด้วยวิธีที่เหมาะสม</span></p>\n<p>★ สาเหตุ: <b>ส่วนใหญ่ไม่ทราบสาเหตุ</b> บางรายมีสาเหตุ เช่น ไตเรื้อรัง ต่อมไร้ท่อ หลอดเลือด หยุดหายใจขณะหลับ ยาบางชนิด</p>\n<p>อาการ: <b>ส่วนใหญ่ไม่มีอาการ</b> <span class=\"hw\">อาการ = ปวดศีรษะ</span> วิธีเดียวที่รู้คือวัดความดัน</p>\n<p>★ การดำเนินโรค: ไม่ควบคุม → <span class=\"imp\">หลอดเลือดแดงแข็งทั่วร่างกายเร็วกว่าปกติ</span> → หลอดเลือดหัวใจตีบ หลอดเลือดสมองตีบ/แตก ไตวาย <span class=\"hw\">จำ: HT → หลอดเลือดแดงแข็ง ← DM, dyslipid, smoking</span></p>\n<p>การรักษา: ป้องกันภาวะแทรกซ้อน (1) ความดันขึ้นเฉียบพลัน (2) ความดันสูงเรื้อรัง — ปรับพฤติกรรมร่วมกับยา · <span class=\"imp\">2.6 แนะนำวัดความดันที่บ้าน บันทึกผล นำมาด้วยเมื่อพบแพทย์</span> (วงไว้)</p></div>\n<div class=\"box\"><h3>Hypertension treatment counselling <span class=\"ref\">p23</span></h3>\n<p><b>ปรับพฤติกรรม</b>: ลดน้ำหนัก · <b>ลดเค็ม</b> <span class=\"hw\">(เกลือ &lt; 1 ช้อนชา / น้ำปลา(?) &lt; 1 ช้อนชา)</span> · DASH diet <span class=\"hw\">ผัก</span> · จำกัดแอลกอฮอล์ · ออกกำลังกาย 30 นาที ≥ 5 วัน/สัปดาห์ · เลิกบุหรี่</p>\n<p><b>ยา</b>: ต้องร่วมกับปรับพฤติกรรม · อาจต้องใช้ &gt; 1 ชนิด · ผลข้างเคียงที่พบบ่อย: <b>ACEI — ไอ</b> · <b>DHP CCB — บวม</b> · <b>diuretic — ปัสสาวะบ่อย</b> · <b>beta blocker — เหนื่อย</b> ไม่กระฉับกระเฉง</p>\n<p>★ เวลากินยา: ส่วนใหญ่กินได้ทั้งก่อน/หลังอาหาร · ก่อนอาหาร ≥ 15 นาที: lercanidipine, perindopril, quinapril · พร้อมอาหาร: carvedilol · หลังอาหาร: manidipine · <b>ยาออกฤทธิ์นาน ห้ามเคี้ยว/บด</b> (Adalat CR, Cardil CR, Natrilix SR, Concor <span class=\"hw\">(?)</span>)</p>\n<p><span class=\"imp\">6. ลืมกินยา → กินทันทีที่นึกได้ ถ้าใกล้มื้อถัดไปให้ข้ามไป ไม่ต้องเพิ่มขนาดยา</span> · 7. ท้องเสีย/อาเจียนมาก อาจต้องหยุดยาบางชนิด ปรึกษาแพทย์ · 8. จดชื่อ ขนาด วิธีกินยา · <span class=\"imp\">9. ★ วางแผนตั้งครรภ์ แจ้งแพทย์ก่อน (ยาบางชนิดอันตรายต่อทารก)</span> ★ · 2.3 วัดความดันที่บ้าน บันทึกผล</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> ยาลดความดันที่<b>ห้ามในการตั้งครรภ์</b> = <b>ACEI/ARB</b> (และ direct renin inhibitor) — ทำให้ไตทารกผิดปกติ น้ำคร่ำน้อย · ใช้ methyldopa, labetalol, nifedipine แทน</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">Thai HT 2024 · AHA/ACC 2025</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>Thai HT 2024</b>: Dx office BP ≥ 140/90 <span class=\"chip s\">ซ้ำ</span> · \"BP at risk\" 130–139/80–89 · ยืนยันด้วย HBPM/ABPM · <b>เป้าหมาย 120–130/70–79 (อายุ 18–65)</b> · 130–139/70–79 (อายุ &gt; 65) · เริ่ม<b>ยา 2 ชนิดร่วมกัน (ควรเป็นเม็ดรวม)</b>จาก 5 กลุ่มหลัก {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>AHA/ACC 2025</b>: เป้า <b>&lt; 130/80</b> ส่วนใหญ่ · โซเดียม &lt; 2,300 mg/วัน (อุดมคติ 1,500) · แนะนำ<b>เกลือทดแทนชนิดโพแทสเซียม</b> · ใช้ PREVENT ประเมินความเสี่ยง · stage 2 เริ่มยา 2 ชนิดในเม็ดเดียว · ตรวจ urine albumin ทุกคน {{R:3}}</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Kunanon S, et al. 2024 Thai guidelines on the treatment of hypertension (สมาคมความดันโลหิตสูงแห่งประเทศไทย). Asian Biomed 2025;19(6):316–357",
"u": "https://doi.org/10.2478/abm-2025-0034"
},
{
"t": "Jones DW, et al. 2025 AHA/ACC/multisociety Guideline for the Prevention, Detection, Evaluation and Management of High Blood Pressure in Adults. Hypertension 2025;82:e212",
"u": "https://doi.org/10.1161/HYP.0000000000000249"
}
]
},
{
"id": "R01-A6",
"title": "Advice 6 · Asthma counselling",
"topics": [
"Advice"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>Asthma counselling <span class=\"ref\">p23</span></h3>\n<p>สารบัญ p2: <span class=\"hw\">Asthma ✓</span></p>\n<p class=\"hw\">① Non-pharmacological: หลีกเลี่ยง allergen, งดสูบบุหรี่, ออกกำลังกายสม่ำเสมอ, influenza vac ทุกปี · ② Pharmacological: ใช้ยาพ่น — ควบคุมอาการ (controller) ใช้สม่ำเสมอ / รักษาอาการกำเริบ (reliever)</p>\n<p>**<span class=\"imp\">บ้านอยู่ที่ไหน แถวนั้นฝุ่นเยอะไหม ทำสวนดอกไม้รึเปล่า เลี้ยงสัตว์อะไรไหม</span> <span class=\"hw\">(บ้านแถวไหน, ฝุ่น, เกสร, pet)</span></p>\n<p>Handout (สรุป): หอบหืด = หลอดลม<b>อักเสบเรื้อรัง</b> ตีบแคบ — หายใจมีเสียงวี้ด เหนื่อย แน่นหน้าอก ไอ เป็น ๆ หาย ๆ มีสิ่งกระตุ้น (อากาศเปลี่ยน ฝุ่น ละอองเกสร ขนสัตว์) · รักษาโดยหลีกเลี่ยงสิ่งกระตุ้น + ยา 2 กลุ่ม: <b>ยาควบคุมอาการ (maintenance)</b> และ<b>ยาบรรเทาอาการ (rescuer)</b> · ขั้นตอน: 2. อธิบายโรค (อักเสบเรื้อรัง หลอดลมไวต่อสิ่งกระตุ้น ภูมิแพ้ร่วม รักษาได้) · 3. ยา 2 กลุ่มและวิธีใช้ <span class=\"hw\">ยาควบคุมอาการ → ใช้ทุกวัน · ยาใช้กรณีฉุกเฉิน/ใช้เมื่อมีอาการ</span> · 4. สอนพ่นยาให้ถูก · 5. หลีกเลี่ยงสิ่งกระตุ้น (ไรฝุ่น สัตว์เลี้ยง เกสร) · 6. งดบุหรี่ · 7. <span class=\"imp\">ฉีดวัคซีนไข้หวัดใหญ่ทุกปี</span> <span class=\"hw\">influ vaccine ★★</span> · 8. ออกกำลังกายสม่ำเสมอ · 9. อาการกำเริบ: พ่น salbutamol 2–4 puffs ทุก 20 นาทีได้ 3 ครั้งใน 1 ชม. ไม่ดีขึ้นมา รพ. · 10. <span class=\"hw\">★ ต้องควบคุมดี ๆ ไม่งั้นจะยิ่งแย่ลง</span> (ไม่รักษา/รักษาไม่สม่ำเสมอ → หลอดลมเสียถาวร คล้ายถุงลมโป่งพอง)</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">GINA 2026</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <span class=\"warn\">! ต่าง</span> <b>GINA 2026</b>: <b>ไม่แนะนำ SABA อย่างเดียว</b> (ทั้งผู้ใหญ่และ — ใหม่ปี 2026 — เด็ก) · Track 1 (preferred): <b>ICS-formoterol</b> ใช้เป็นยาบรรเทาอาการ (anti-inflammatory reliever, AIR) หรือ <b>MART</b> (ใช้ตัวเดียวทั้งควบคุมและบรรเทา) — handout ในสมุดสอนแบบเดิม (controller + salbutamol เป็น rescuer) {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> ยืนยัน<b>การวินิจฉัย</b>ด้วยหลักฐาน variable airflow limitation (spirometry/PEF) ก่อนเริ่มยาควบคุมถ้าทำได้ · ทบทวน<b>เทคนิคพ่นยา</b>และ adherence ทุกครั้ง · ให้ <b>written asthma action plan</b> · วัคซีนไข้หวัดใหญ่ งดบุหรี่ เลี่ยงสิ่งกระตุ้น <span class=\"chip s\">ซ้ำ</span></li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention, 2026 update (5 May 2026)",
"u": "https://ginasthma.org/2026-gina-strategy-report/"
}
]
},
{
"id": "R01-A7",
"title": "Advice 7 · Tuberculosis counselling",
"topics": [
"Advice"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>TB counselling <span class=\"ref\">p24</span></h3>\n<p>สารบัญ p2: <span class=\"hw\">TB ✓</span> · ลายมือซ้าย: <span class=\"hw\">\"คนไข้มีอาการเหล่านี้ไหมครับ\"</span> (ไอเรื้อรัง ไข้ต่ำ ๆ เหงื่อออกกลางคืน น้ำหนักลด)</p>\n<p>Handout (สรุป): วัณโรคเกิดจาก <i>Mycobacterium tuberculosis</i> · ติดต่อทาง<b>ไอ จาม พูด ลมหายใจ</b> · อาการ ไอเรื้อรัง ไข้ เหงื่อออกกลางคืน น้ำหนักลด · การตรวจเสมหะ/ภาพรังสี · <b>รักษาหายได้ถ้ากินยาครบ</b></p>\n<p><b>3.1</b> สูตรยา 6 เดือน: <span class=\"imp\">2 เดือนแรก 4 ชนิด (H, R, Z, E) แล้ว 4 เดือน 2 ชนิด (H, R)</span> <span class=\"hw\">2HRZE + 4HR ★★★</span> · <b>3.2</b> ★ <span class=\"imp\">กินยาประมาณ 2 สัปดาห์อาการจะดีขึ้น แต่ห้ามหยุดยาเอง</span> (ดื้อยา) · <b>3.3</b> กินวันละครั้งพร้อมกันทุกวัน (ก่อนนอน/ท้องว่าง) · <b>DOT</b> (มีผู้ดูแลการกินยา) · <b>3.4</b> <span class=\"imp\">ไม่ควรแบ่งกินหลายมื้อ</span> <span class=\"hw\">(ลายมือสีเขียวใต้ข้อนี้ <span class=\"warn\">⚠ อ่านไม่ออก</span>)</span> · <b>3.5</b> ลืมกินยา → กินทันทีที่นึกได้ ถ้าใกล้มื้อถัดไปไม่ต้องเพิ่ม</p>\n<p class=\"hw\">##พูด SE ของยาทุกตัว · SE รุนแรง: หยุดยา + มาพบแพทย์! · ไม่รุนแรง: ติดตามอาการ</p>\n<table class=\"fx\"><tr><th>ยา</th><th>ลายมือ (ตาราง first-line)</th><th><span class=\"chip g\">📖 อธิบาย</span> ที่ต้องพูด</th></tr>\n<tr><td><b>H</b> isoniazid</td><td class=\"hw\">ตับ, neuro, rash (B6)</td><td>ตับอักเสบ · ชาปลายมือปลายเท้า (peripheral neuropathy) → ให้ <b>vitamin B6</b> ป้องกัน</td></tr>\n<tr><td><b>R</b> rifampicin</td><td class=\"hw\">ผื่น, ไข้, สีส้ม, …</td><td><b>ปัสสาวะ น้ำตา เหงื่อ สีส้มแดง ไม่อันตราย</b> (คอนแทคเลนส์เปื้อน) · ตับอักเสบ · ผื่น ไข้คล้ายไข้หวัด · <b>ยาตีกันมาก</b> (ยาคุม warfarin ยาต้านไวรัส)</td></tr>\n<tr><td><b>Z</b> pyrazinamide</td><td class=\"hw\">ตับ, uric ↑</td><td>ตับอักเสบ (มากสุด) · กรดยูริกสูง ปวดข้อ</td></tr>\n<tr><td><b>E</b> ethambutol</td><td class=\"hw\">eye: ↓VA, red-green color blindness</td><td>optic neuritis — ตามัว ตาบอดสีแดง-เขียว → หยุดยา มาพบแพทย์</td></tr></table>\n<p><b>4.2</b> <span class=\"imp\">ผลข้างเคียงรุนแรง</span> (วง R) — ผื่นทั้งตัว คลื่นไส้อาเจียนมาก <b>ตัวเหลืองตาเหลือง</b> ปวดท้อง ตามัว → <b>หยุดยาและมาพบแพทย์ทันที</b> · <b>4.3</b> ไม่รุนแรง (วง E) เช่น <span class=\"hw\">ชาปลายมือเท้า(?)</span> ปวดข้อ คลื่นไส้เล็กน้อย → กินยาต่อและติดตาม · <b>4.4</b> ★ <span class=\"imp\">ระหว่างกินยางดแอลกอฮอล์</span> <span class=\"hw\">(ห้าม alcohol นะ! · Alcohol → งด)</span> · <b>4.5</b> <span class=\"hw\">DI ⚠ กินยาตัวอื่นอยู่หรือไม่ · ยาคุม!</span> · <b>4.6</b> ★ ผู้หญิงใช้<b>วิธีคุมกำเนิดที่ไม่ใช่ฮอร์โมน</b> (ถุงยาง) เพราะ rifampicin ทำให้ยาคุมไม่ได้ผล <span class=\"hw\">คุมกำเนิด</span> · <b>4.7</b> ★ ปัสสาวะ น้ำลาย น้ำตาสีส้ม จาก rifampicin ไม่อันตราย (วง R)</p>\n<p><b>5.1</b> ★ ช่วงที่ยังไอ <span class=\"imp\">ใส่หน้ากากอนามัย ปิดปากจมูก</span> · <b>5.2</b> บ้วนเสมหะในภาชนะมีฝาปิด เททิ้งในส้วมหรือเผา · <b>5.3</b> ★ <span class=\"imp\">ผู้สัมผัสใกล้ชิดในบ้าน/ที่ทำงาน มาตรวจคัดกรอง</span> <span class=\"hw\">**ไม่ทราบว่าอยู่บ้านกับใคร</span> · <b>5.4</b> <span class=\"imp\">แนะนำตรวจเลือดหาเชื้อ HIV</span> (วงไว้) · <b>5.5</b> ออกกำลังกาย อาหาร พักผ่อน <span class=\"hw\">(วง: ออกกำลัง)</span> · <b>5.6</b> ★ บ้านสะอาด เปิดหน้าต่างให้อากาศถ่ายเท <span class=\"imp\">แสงแดดส่องถึง</span> <span class=\"hw\">✓✓</span> · <b>5.7</b> มาตามนัดทุกครั้ง</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">แนวทางควบคุมวัณโรคประเทศไทย 2564 · WHO 2025</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> ผู้ป่วยใหม่ drug-susceptible pulmonary TB: <b>2HRZE/4HR</b> <span class=\"chip s\">ซ้ำ</span> · DOT · ผู้ป่วยวัณโรคทุกรายต้อง<b>ตรวจ HIV</b> <span class=\"chip s\">ซ้ำ</span> · ตรวจผู้สัมผัสร่วมบ้าน และให้รักษาวัณโรคระยะแฝงในกลุ่มเสี่ยง {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> WHO (consolidated guidelines Module 4, 2025) มีสูตร <b>4 เดือน</b> เป็นทางเลือก: <b>2HPZM/2HPM</b> (rifapentine + moxifloxacin) ในผู้ป่วยอายุ ≥ 12 ปี และสูตร 4 เดือนในเด็กโรคไม่รุนแรง — ข้อสอบ/advice ในไทยยังพูด 6 เดือน {{R:3}}</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "กองวัณโรค กรมควบคุมโรค. แนวทางการควบคุมวัณโรคประเทศไทย พ.ศ. 2564 (NTP 2021)",
"u": "https://ddc.moph.go.th/uploads/publish/1253220220330064337.pdf"
},
{
"t": "WHO consolidated guidelines on tuberculosis: Module 4: treatment and care. Geneva: WHO; 2025"
}
]
},
{
"id": "R01-A8",
"title": "Advice 8 · Gouty arthritis counselling",
"topics": [
"Advice"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>Gouty arthritis counselling <span class=\"ref\">p24–26</span></h3>\n<p>สารบัญ p2: <span class=\"hw\">Gout: อาหาร, behaviour ✓</span></p>\n<p>Handout (พญ.นฤชา จิรกาลวสาน / พญ.มนาธิป โอศิริ, สรุป): เกาต์ = ข้ออักเสบจาก<b>ผลึกยูเรต</b>สะสมในข้อ/รอบข้อ จากกรดยูริกในเลือดสูงเกินที่ละลายได้ (<b>&gt; 6.8 mg/dL</b>) · <b>ชาย &gt; หญิง</b> ชายมักอายุ ≥ 35 ปี หญิงมักหลังหมดประจำเดือน <span class=\"hw\">(Estrogen ↓)</span> · ข้ออักเสบ 1–3 ข้อ ที่พบบ่อยคือ<b>โคนนิ้วหัวแม่เท้า</b> · พบร่วม เบาหวาน ความดัน ไขมัน อ้วน · ไม่รักษาถูกต้องจะเป็นเรื้อรัง · การรักษา 3 ส่วน: (1) รักษาข้ออักเสบ (2) ป้องกันการกำเริบ (3) ลดกรดยูริกให้ถึงเป้า</p>\n<p><b>คุมกรดยูริกโดยไม่ใช้ยา</b> (ผู้ป่วยที่ไม่มีข้ออักเสบ): 1. แนะนำตัว · 2. <span class=\"imp\">งดแอลกอฮอล์ โดยเฉพาะ<b>เบียร์</b></span> (วง) · 3. ลดอาหาร<b>พิวรีนสูง</b> — เนื้อวัว เนื้อหมู เนื้อแกะ <b>เครื่องในสัตว์</b> อาหารทะเล (ปลาทูน่า ปลาทะเล กุ้ง หอย) ในปริมาณมาก <span class=\"hw\">(ปลาตัวเล็ก?)</span> · 4. ลดความเสี่ยง metabolic syndrome · 5. ลดน้ำตาล โดยเฉพาะ<b>ฟรุกโตส</b> (น้ำผลไม้ น้ำอัดลม) <span class=\"hw\">→ ลด fructose ★ ในผลไม้ กับ น้ำอัดลม · ↓ fructose (น้ำผลไม้ …)</span> · 6. ลดน้ำหนักถ้าอ้วน · 7. ออกกำลังกายสม่ำเสมอ ★ · 8. เลือก<b>นมไขมันต่ำ</b>/ผลิตภัณฑ์นมไขมันต่ำ <span class=\"hw\">low fat milk</span> · 9. วิตามินซีขนาดสูง กรดโฟลิก ใยอาหาร <span class=\"hw\">vit C, Folic, Fiber ✓✓</span> · 10. ตรวจคุมโรคร่วม (เบาหวาน ความดัน ไขมัน)</p>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ACR Gout 2020</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> Lifestyle (conditional): <b>จำกัดแอลกอฮอล์ พิวรีน และ high-fructose corn syrup</b> + ลดน้ำหนัก <span class=\"chip s\">ซ้ำ</span> · <span class=\"warn\">! ต่าง</span> <b>ไม่แนะนำให้กินวิตามินซีเสริม</b> (conditionally against) — ต่างจาก handout ข้อ 9 · นมไขมันต่ำ: EULAR 2016 สนับสนุน (ACR 2020 ไม่ได้เป็นคำแนะนำหลัก) {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> ยาลดยูริก (ULT) เมื่อ: tophi, เห็นข้อเสียหายจากเกาต์ใน x-ray, กำเริบ ≥ 2 ครั้ง/ปี · <b>allopurinol เป็นยาแรก</b> เริ่ม ≤ 100 mg/วัน (CKD ต่ำกว่า) ปรับขึ้นจนยูริก <b>&lt; 6 mg/dL</b> (treat-to-target) · ให้ colchicine/NSAID/steroid ป้องกันกำเริบ 3–6 เดือน · <b>ตรวจ HLA-B*5801 ก่อนเริ่ม allopurinol ในคนเชื้อสายเอเชียตะวันออกเฉียงใต้</b> (คนไทย) — ป้องกัน SJS/TEN/DRESS</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "FitzGerald JD, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res 2020;72:744–760 — ยังเป็นฉบับล่าสุด (ตรวจ พ.ย. 2026)",
"u": "https://doi.org/10.1002/acr.24180"
}
]
},
{
"id": "R01-A9",
"title": "Advice 9 · Osteoarthritis (ข้อเข่าเสื่อม) counselling",
"topics": [
"Advice"
],
"rev": 1,
"upd": "2026-11-14",
"html": "<div class=\"box\"><h3>Osteoarthritis counselling <span class=\"ref\">p27</span></h3>\n<p class=\"hw\">9. OA = 8 ข้อ (ขั้นตอนใน handout)</p>\n<p>Handout (สรุป): ข้อเสื่อมพบบ่อยที่ข้อเข่า ข้อปลายนิ้ว ข้อกลางนิ้ว ข้อสะโพก <span class=\"hw\">spare MTP</span> · <b>มักเป็นทั้ง 2 ข้าง แต่รุนแรงไม่เท่ากัน</b> มักรุนแรงข้างที่ถนัด · เจ็บซ้ำ ๆ อาจมีน้ำในข้อ อักเสบเล็กน้อย · ภาพรังสี <span class=\"hw\">osteophyte</span> (กระดูกงอก) <span class=\"hw\">ช่องข้อแคบ</span> · เพิ่มตามอายุ เป็นเรื้อรัง · รักษาโดยไม่ใช้ยาและใช้ยา</p>\n<p><span class=\"chip g\">📖 อธิบาย</span> <span class=\"warn\">! ต่าง</span> <b>\"spare MTP\"</b> ไม่ตรงตำรา: primary OA มัก<b>ไม่เป็นที่ MCP และข้อมือ</b> (ยกเว้น 1st CMC) แต่<b>ข้อ 1st MTP เป็นได้บ่อย</b> (hallux rigidus) — น่าจะหมายถึง <b>spare MCP</b> (ถ้า MCP เป็นต้องคิด RA, hemochromatosis, CPPD)</p>\n<p><b>ขั้นตอนแนะนำโดยไม่ใช้ยา</b>: 1. แนะนำตัว · 2. <span class=\"imp\">ลดน้ำหนักอย่างน้อยร้อยละ 5–10 ถ้าอ้วน</span> <span class=\"hw\">ควบคุมเรื่องน้ำหนัก</span> · 3. ออกกำลังเพิ่มความแข็งแรงของ<b>กล้ามเนื้อต้นขา (quadriceps isometric exercise)</b> พร้อมสาธิต — รูป: นอนเหยียดขา วางม้วนผ้า/โฟมใต้เข่า กดเข่าลงเกร็งค้าง · 4. ออกกำลังแบบแอโรบิกที่ไม่ลงน้ำหนักที่ข้อเข่ามาก เช่น <b>ว่ายน้ำ ปั่นจักรยาน</b> <span class=\"hw\">ปกติชอบออกกำลังกายอะไร · (สีส้ม) \"9 min\"(?)</span> · 5. ★ ใช้อุปกรณ์ช่วยเดิน — <b>ไม้เท้า ถือข้างตรงข้ามกับเข่าที่ปวด</b> หรือ walker · 6. ★ อุปกรณ์เสริมความมั่นคงของข้อเข่า เช่น knee brace + รองเท้าที่เหมาะสม · 7. หลีกเลี่ยงการใช้ข้อเข่าที่ไม่เหมาะสม: <b>ลดการขึ้นลงบันได</b> (ย้ายห้องนอนชั้นล่าง) นั่งคุกเข่า พับเพียบ นั่งยอง (ส้วมซึม → ชักโครก) ขัดสมาธิ นั่งเก้าอี้เตี้ย การเดินระยะไกล · 8. อาจใช้ยาแก้ปวดถ้าจำเป็น</p>\n<p>**<span class=\"imp\">แต่แพทย์อยากให้พยายามปรับการใช้ชีวิตก่อน</span> · ถามบริบท: <b>บ้านผู้ป่วยมีกี่ชั้น? ขึ้นลงบันไดวันหนึ่งบ่อยไหม? ห้องน้ำที่บ้านเป็นแบบไหน? นั่งเก้าอี้เตี้ย ๆ บ่อยไหม? วันหนึ่งเดินบ่อย/ไกลไหม?</b></p>\n<div class=\"fig\">{{IMG:medr01_p27}}</div>\n<div class=\"glsec\"><div class=\"glh\">📘 Guideline <span class=\"glsrc\">ACR OA 2026 update (+ ACR/AF 2019)</span></div><ul>\n<li><span class=\"chip gl\">📘 Guideline</span> <b>ACR 2026</b>: <b>ออกกำลังกาย</b> (knee/hip) และ<b>ลดน้ำหนัก</b>ในผู้ที่น้ำหนักเกิน/อ้วน = strong recommendation <span class=\"chip s\">ซ้ำ</span> · ใหม่: <b>GLP-1 RA</b> ช่วยลดน้ำหนักใน knee OA + obesity (conditional) · <b>topical NSAID ก่อน oral</b> สำหรับเข่าและมือ · tai chi, yoga, CBT, knee bracing (conditional) {{R:2}}</li>\n<li><span class=\"chip gl\">📘 Guideline</span> ไม่แนะนำ: stem cell, PRP, glucosamine/chondroitin, hydroxychloroquine, bisphosphonate ใน knee/hip OA · methotrexate ใช้ได้เฉพาะ erosive hand OA · ไม้เท้า (cane) ใน knee/hip OA = strong (ACR/AF 2019) {{R:3}}</li></ul></div></div>",
"refs": [
{
"t": "R01 — OSCE Med for All: สมุด GoodNotes \"Last MED OSCE\" (Cr. Future MDCU'71, EARK MDCU'71) 195 หน้า ลายมือ + handout/สไลด์ที่แปะไว้ · ชุดนี้ = p1–27 (สารบัญ, recall ข้อสอบ, History taking, Advice) · pN = หน้า PDF"
},
{
"t": "Kolasinski SL, et al. 2026 Update of the ACR Recommendations for the Management of Osteoarthritis of the Knee, Hip, and Hand. Arthritis Rheumatol 2026 (14 ก.ย. 2026; แทน ACR/AF 2019)"
},
{
"t": "Kolasinski SL, et al. 2019 ACR/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee. Arthritis Rheumatol 2020;72:220–233",
"u": "https://doi.org/10.1002/art.41142"
}
]
}
]
}
]
};

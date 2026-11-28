import sys; sys.path.insert(0,'/home/claude/ac-mdcu/parts')
from l22_common import mk, save
Q={}

# ---------- 21 ----------
mk(Q, 21, [19, 's15'],
 stem="A 55-year-old woman has a small, soft, blue-purple nodule on her lower lip that has been present since childhood. It empties with compression, refills on release, and has never shrunk. What is the most likely diagnosis?",
 opts=["Venous malformation","Squamous cell carcinoma","Pyogenic granuloma","Infantile hemangioma","Nodular melanoma"],
 interp="ผู้ใหญ่มีก้อนสีม่วงน้ำเงิน นุ่ม กดยุบแล้วเติมกลับ มีมาตั้งแต่เด็กและไม่เคยยุบ → รอยโรคหลอดเลือดชนิด low-flow ที่ไม่ involute → ถามการวินิจฉัย ต้องใช้หลักแยก hemangioma (เนื้องอก โตเร็วแล้วยุบ) ออกจาก vascular malformation (ความผิดปกติโครงสร้าง โตตามตัว ไม่ยุบ) แล้วใช้สีบอกชนิดของ malformation",
 why="ตามการจัดกลุ่ม <b>ISSVA</b> รอยโรคหลอดเลือดแบ่งเป็น <b>vascular tumor</b> (เช่น infantile hemangioma ที่ endothelial cell ยังแบ่งตัว) กับ <b>vascular malformation</b> (หลอดเลือดสร้างผิดรูปตั้งแต่ตัวอ่อน endothelium ไม่แบ่งตัว) · malformation <b>มีมาตั้งแต่เกิด โตตามสัดส่วนตัว ไม่มีช่วงโตเร็ว และไม่ยุบเอง (never involute)</b> อาจโตขึ้นเมื่อบาดเจ็บ ติดเชื้อ หรือฮอร์โมนเปลี่ยนช่วงวัยรุ่นและตั้งครรภ์ · แยกต่อเป็น <b>high flow</b> (AVM: อุ่น คลำได้ thrill ฟังได้ bruit) กับ <b>low flow</b> ซึ่งแยกตามสี: <b>venous = ม่วงน้ำเงินเข้ม</b>, capillary = แดงเข้ม, lymphatic = สีผิวปกติ · VM มีลักษณะเด่นคือ<b>นุ่ม กดยุบ (compressible) และโป่งขึ้นเมื่ออยู่ต่ำหรือเบ่ง</b> อาจคลำได้ phlebolith และเจ็บเป็นพัก ๆ จากลิ่มเลือดในก้อน ยืนยันด้วย Doppler ultrasound (ไหลช้า) ± MRI ดูขอบเขต · ในผู้ใหญ่อายุ 55 ปี infantile hemangioma ควรยุบไปนานแล้ว (ส่วนใหญ่หายก่อนอายุ 10 ปีตามชีทหน้า 15) จึงเหลือคำตอบเดียวคือ venous malformation · การรักษาปัจจุบันใช้ <b>sclerotherapy</b> (ethanol, sodium tetradecyl sulfate, bleomycin) เป็นหลัก ± ผ่าตัด และเป็นโรค benign จึงไม่ต้องตัดหมดถ้าติดอวัยวะสำคัญ · สไลด์หน้า 19 ลายมือ <b>“ปากเหี่ยวแล้ว = adult → hemang ควรฝ่อแล้ว ∴ น่าจะเป็น malform”</b> และ <b>“สีม่วงน้ำเงิน = venous malformation”</b>",
 wrong={
  "B":"SCC ของริมฝีปากพบที่ริมฝีปากล่างจริง แต่เป็นก้อนหรือแผลแข็ง ผิวขรุขระมีสะเก็ด ที่เกิดใหม่ในผู้สูงอายุซึ่งตากแดดหรือสูบบุหรี่ ไม่ใช่ก้อนนุ่มสีม่วงที่กดยุบและอยู่มาตั้งแต่เด็ก · จะถูกถ้าชายชาวประมงอายุ 70 ปีมีแผลแข็งขอบนูนที่ริมฝีปากล่างซึ่งเกิดขึ้นในไม่กี่เดือน เลือดออกง่ายและไม่หาย",
  "C":"Pyogenic granuloma (lobular capillary hemangioma) เป็นก้อนแดงสด เปราะ เลือดออกง่าย โตเร็วในไม่กี่สัปดาห์ มักตามหลังบาดเจ็บเล็กน้อยหรือช่วงตั้งครรภ์ ไม่ใช่ก้อนที่คงที่มาหลายสิบปี · จะถูกถ้าหญิงตั้งครรภ์ 6 เดือนมีก้อนแดงสดขนาด 8 mm ที่ริมฝีปาก โผล่และโตขึ้นภายใน 3 สัปดาห์ แตะแล้วเลือดออก",
  "D":"Infantile hemangioma เป็นรอยโรคหลอดเลือดที่กดยุบได้จริง แต่มักไม่เห็นตอนเกิด โผล่ในสัปดาห์แรก ๆ โตเร็วช่วงขวบปีแรกแล้วค่อยยุบ ไม่คงอยู่ถึงอายุ 55 ปีโดยไม่เปลี่ยนแปลง · จะถูกถ้าทารกอายุ 2 เดือนมีก้อนนูนแดงสดที่ริมฝีปากล่าง ซึ่งไม่มีตอนคลอดแต่โผล่เมื่ออายุ 2 สัปดาห์และโตเร็วกว่าตัวเด็ก",
  "E":"Nodular melanoma เป็นก้อนสีดำอมน้ำเงินที่โตเร็วในเวลาเป็นเดือน แข็ง กดไม่ยุบ อาจเป็นแผลเลือดออก ไม่ใช่ก้อนนุ่มที่บีบแล้วเลือดไหลออกและเติมกลับ · จะถูกถ้าชายอายุ 60 ปีมีก้อนแข็งสีดำอมน้ำเงินที่ริมฝีปากโตขึ้นเร็วใน 4 เดือน กดไม่ยุบ สีไม่สม่ำเสมอ และเลือดออกเมื่อถูกเสียดสี"},
 trap="เห็นก้อนสีม่วงกดยุบได้แล้วตอบ hemangioma เพราะคุ้นคำว่า compressible จากชีท — ตัวแยกคืออายุและประวัติการโต: hemangioma โตเร็วแล้วยุบในวัยเด็ก ส่วนก้อนที่คงอยู่ตั้งแต่เด็กจนเป็นผู้ใหญ่โดยไม่ยุบ = malformation แล้วใช้สีม่วงน้ำเงินบอกว่าเป็นชนิด venous",
 summary=[
  "รอยโรคหลอดเลือดในผู้ใหญ่ที่มีมาตั้งแต่เด็กและไม่เคยยุบ = <b>vascular malformation</b> ไม่ใช่ hemangioma · สีม่วงน้ำเงิน นุ่ม กดยุบ = <b>venous malformation</b>",
  "Malformation (สไลด์หน้า 19): formed during fetal development · grow in proportion to the body · never involute · แบ่ง high flow กับ low flow",
  "High flow (AVM): อุ่น คลำได้ pulse thrill ฟังได้ bruit · low flow แยกสี: venous ม่วงน้ำเงิน · capillary แดงเข้ม · lymphatic สีผิวปกติ",
  "Hemangioma (ชีทหน้า 15): โผล่หลังคลอด 2–4 สัปดาห์ โตเร็วปีแรก แล้วยุบ — 5 ปีลด 50% · 7 ปีลด 70% · ส่วนใหญ่หายก่อน 10 ปี",
  "VM: โป่งเมื่ออยู่ต่ำหรือเบ่ง · อาจมี phlebolith · ยืนยันด้วย Doppler ultrasound ± MRI",
  "รักษา VM ปัจจุบัน: sclerotherapy (ethanol, STS, bleomycin) ± ผ่าตัด · capillary malformation ใช้ pulsed dye laser · เป็น benign จึงไม่ต้องตัดหมดถ้าติดอวัยวะสำคัญ"],
 opinion="เห็นด้วยกับคำตอบ A ความมั่นใจสูง — ลายมือสไลด์หน้า 19 ใช้ภาพริมฝีปากผู้ใหญ่สอนเหตุผลครบทั้งสองขั้น (ผู้ใหญ่ → ไม่ใช่ hemangioma, สีม่วงน้ำเงิน → venous) และชีทหน้า 15 สนับสนุนว่า malformation ไม่หายเอง · จุดที่ต่างจากปัจจุบันคือการรักษา: ตัวพิมพ์สไลด์หน้า 19 เขียน surgery, angiography and embolization และลายมือให้ชนิด venous ตัดทิ้งหรือใช้ laser fiber optic แล้วตัด แต่แนวทางปัจจุบันตาม ISSVA 2018 และตำรา vascular anomalies ใช้ <b>sclerotherapy เป็นการรักษาหลักของ VM</b> ส่วนผ่าตัดใช้กับรอยโรคเล็กขอบชัดหรือหลัง sclerotherapy และ embolization เป็นหลักของ AVM มากกว่า VM",
 mnemonic="<b>'ผู้ใหญ่ยังอยู่ = Malformation · ม่วงน้ำเงิน = Venous · แดงเข้ม = Capillary · สีผิว = Lymphatic'</b>",
 guide="ISSVA Classification of Vascular Anomalies (2018); Mulliken and Young's Vascular Anomalies: Hemangiomas and Malformations 2nd ed. (2013); Grabb and Smith's Plastic Surgery 8th ed. (2020)",
 variants=[
  "หญิงมี venous malformation ที่ริมฝีปากมานาน จู่ ๆ ก้อนแข็งและเจ็บขึ้นโดยไม่มีแผล คลำได้เม็ดแข็งเล็ก ๆ → ลิ่มเลือดอุดในก้อนร่วมกับ phlebolith ให้ยาแก้ปวดหรือแอสไพรินขนาดต่ำ แล้วประเมินทำ sclerotherapy",
  "ชายมี venous malformation กว้างทั้งแขน ก่อนผ่าตัดพบ D-dimer สูงและ fibrinogen ต่ำ → localized intravascular coagulopathy ให้ low-molecular-weight heparin ก่อนทำหัตถการ",
  "เด็กชายอายุ 5 ปีมีปื้นแดงเข้มแบนที่แก้มตั้งแต่เกิด โตตามตัว ไม่เคยยุบ → capillary malformation รักษาด้วย pulsed dye laser",
  "ชายมีก้อนนุ่มสีผิวปกติที่คอตั้งแต่เด็ก ส่องไฟทะลุได้ ไม่มีสีม่วง → lymphatic malformation รักษาด้วย sclerotherapy เช่น doxycycline หรือ bleomycin"])

# ---------- 22 ----------
mk(Q, 22, [20, 23, 's12'],
 stem="A 60-year-old man has a 1-cm actinic keratosis on the scalp confirmed by biopsy. He prefers surgical removal to topical or freezing treatment. Which surgical approach is appropriate?",
 opts=["Excision of the lesion with a narrow margin","Observation alone, since the lesion is benign","Wide excision with 2-cm margins and nodal dissection","Mohs surgery as the standard for every lesion","Wide excision with a 1-cm margin of normal skin"],
 interp="Actinic keratosis ที่พิสูจน์ด้วยชิ้นเนื้อแล้ว และผู้ป่วยเลือกผ่าตัด → ถามว่าตัดกว้างแค่ไหน ต้องใช้หลักว่ารอยโรค premalignant ยังไม่ใช่มะเร็ง จึงตัดเฉพาะตัวรอยโรคด้วยขอบแคบ ไม่ต้องตัดเนื้อดีกว้างหรือเลาะต่อมน้ำเหลืองแบบมะเร็ง",
 why="<b>Actinic keratosis (AK)</b> คือ keratinocyte ผิดปกติ (atypia) ที่จำกัดอยู่ใน<b>ชั้นล่างของ epidermis</b> จากแสงแดดสะสม เป็น <b>premalignant lesion ที่พบบ่อยที่สุด</b> และอาจกลายเป็น invasive SCC ได้ (ชีทหน้า 12 ให้ 5–20% แม้ความเสี่ยงต่อรอยโรคต่อปีจะต่ำกว่า 1%) · เมื่อยังไม่มีการลุกลามผ่าน basement membrane จึง<b>ไม่มีเซลล์มะเร็งแทรกไปในเนื้อดีรอบ ๆ</b> และไม่กระจายไปต่อมน้ำเหลือง เป้าหมายของการผ่าตัดคือเอารอยโรคออกให้หมดพร้อมได้ชิ้นเนื้อยืนยันว่าไม่มี invasion — <b>excision ขอบแคบ (narrow margin) แล้วเย็บปิด</b> ก็พอ ไม่ต้อง wide excision ซึ่งเป็นหลักของมะเร็ง (BCC low-risk 4 mm, cSCC low-risk 4–6 mm, melanoma 0.5–2 cm ตามความหนา) · ในทางปฏิบัติ AK ส่วนใหญ่รักษาด้วย <b>cryotherapy</b>, ยาทา <b>5-FU หรือ imiquimod</b> หรือ <b>photodynamic therapy</b> โดยเฉพาะเมื่อมีหลายรอยในบริเวณที่ถูกแดดเผา (field therapy) และเลือกผ่าตัดเมื่อรอยโรคหนา แข็ง โตเร็ว เจ็บ ไม่ตอบยา หรือสงสัย SCC · สไลด์หน้า 20 ลายมือ <b>“Tx = excision (not wide excision)”</b> และ <b>“ไม่ต้องเอาเนื้อดี”</b>",
 wrong={
  "B":"AK ไม่ใช่ benign แต่เป็น premalignant ต่อ SCC — ลายมือสไลด์หน้า 23 เทียบไว้ว่า seborrheic keratosis เท่านั้นที่ benign และผู้ป่วยต้องการเอาออกอยู่แล้ว · จะถูกถ้าหญิงอายุ 70 ปีมี seborrheic keratosis ลักษณะ stuck-on สีน้ำตาลขอบชัดที่หลังหลายก้อน ไม่มีอาการ และไม่ได้ต้องการเอาออก ซึ่งเฝ้าดูได้โดยไม่ต้องผ่าตัด",
  "C":"Wide excision ขอบ 2 cm ร่วมกับเลาะต่อมน้ำเหลืองเป็นการรักษามะเร็งที่ลุกลามและกระจายแล้ว เกินจำเป็นมากสำหรับรอยโรคที่ยังไม่ทะลุ basement membrane · จะถูกถ้าชายอายุ 55 ปีมี melanoma ที่หลังหนา 3 mm ร่วมกับต่อมน้ำเหลืองรักแร้ที่ biopsy ยืนยันว่ามีมะเร็ง ซึ่งต้องตัดขอบ 2 cm และทำ therapeutic lymph node dissection (ปัจจุบันมักให้ immunotherapy ก่อนผ่าตัด)",
  "D":"Mohs surgery คือการตัดทีละชั้นและตรวจขอบทันทีจนหมด เหมาะกับมะเร็งที่ขอบไม่ชัด อยู่ในตำแหน่งที่ต้องรักษาเนื้อเยื่อ หรือเป็นซ้ำ ไม่ใช่มาตรฐานของรอยโรค premalignant · ไม่มีสถานการณ์ใดที่ Mohs เป็นมาตรฐานสำหรับ “ทุก” รอยโรค เพราะใช้เวลานาน ค่าใช้จ่ายสูง ต้องมีทีมเฉพาะ และรอยโรคทั่วไปตัดแบบมาตรฐานได้ผลดีพอ",
  "E":"ขอบ 1 cm ของเนื้อดีเป็นการตัดแบบมะเร็ง (wide excision) ซึ่งเอาผิวดีออกเกินจำเป็นและทำให้ปิดแผลบนหนังศีรษะยากขึ้นโดยไม่ได้ประโยชน์ เพราะ AK ยังไม่ลุกลาม · จะถูกถ้าชายอายุ 65 ปีมีก้อนแข็งขนาด 2.5 cm ที่ขมับ ผลชิ้นเนื้อเป็น cutaneous SCC กลุ่ม high risk ซึ่งต้องตัดด้วยขอบเนื้อดีกว้างขึ้นราว 1 cm หรือทำ Mohs"},
 trap="คำว่า biopsy-proven และ surgical removal ชวนให้คิดว่าเป็นมะเร็งแล้วต้องตัดกว้าง — แต่ AK เป็น premalignant ไม่มีการลุกลาม จึงไม่มีเหตุให้เอาเนื้อดีออก ตัวแยกคือดูผลชิ้นเนื้อว่าเป็นเพียง atypia ใน epidermis หรือ invasive แล้ว",
 summary=[
  "รอยโรค premalignant เมื่อเลือกผ่าตัด: <b>excision ขอบแคบ ไม่ต้อง wide excision</b> (ลายมือสไลด์หน้า 20)",
  "AK: atypia ใน basal layer ของ epidermis · ปื้นแดง สาก มีขุย บนผิวที่ถูกแดด ใบหน้า แขน หลังมือ ในผู้สูงอายุ · m/c premalignant lesion → SCC",
  "ชีทหน้า 12: กลายเป็น SCC 5–20% · รักษาด้วย cryotherapy, electrodesiccation, 5-FU, laser หรือ excision",
  "แนวปัจจุบัน: รอยเดี่ยวบาง → cryotherapy · หลายรอยทั้งบริเวณ → field therapy ด้วย 5-FU, imiquimod หรือ PDT",
  "ผ่าตัดหรือ biopsy เมื่อรอยโรคหนา แข็ง เจ็บ โตเร็ว เป็นแผล หรือไม่ตอบยา → สงสัย invasive SCC",
  "ขอบมะเร็งเทียบ: BCC low-risk 4 mm · cSCC low-risk 4–6 mm · melanoma 0.5–2 cm ตามความหนา"],
 opinion="เห็นด้วยกับคำตอบ A ความมั่นใจสูง — ลายมือสไลด์หน้า 20 เขียนตรงตัวว่า excision ไม่ใช่ wide excision และไม่ต้องเอาเนื้อดี · จุดที่ควรรู้คือในแนวทางปัจจุบัน (AAD 2021, BAD 2017) การผ่าตัด<b>ไม่ใช่การรักษาหลัก</b>ของ AK ทั่วไป แต่เป็น cryotherapy, 5-FU, imiquimod และ PDT การผ่าตัดสงวนไว้สำหรับรอยโรคหนาหรือสงสัย SCC ซึ่งการได้ชิ้นเนื้อทั้งก้อนช่วยบอกว่ามี invasion หรือไม่ · ตัวเลข 5–20% ในชีทหน้า 12 เป็นตัวเลขเก่าที่ติดตามระยะยาวหลายปี ส่วนการศึกษาติดตามรายรอยโรคพบความเสี่ยงต่อปีต่ำกว่า 1% จึงไม่ใช่เหตุให้ตัดกว้าง",
 mnemonic="<b>'Pre-malignant = Pre-cise cut: ตัดแค่รอย ไม่ต้องกว้าง'</b>",
 guide="Eisen DB et al. Guidelines of care for the management of actinic keratosis, J Am Acad Dermatol 2021; de Berker D et al. British Association of Dermatologists' guidelines for the care of patients with actinic keratosis 2017, Br J Dermatol 2017",
 variants=[
  "ชายมี AK ที่หลังมือรอยหนึ่งกลายเป็นก้อนแข็ง หนาขึ้นและเจ็บภายใน 2 เดือน → สงสัย invasive SCC ต้องตัดหรือ biopsy ให้ได้ความลึก ไม่ใช่จี้เย็นซ้ำ",
  "ชายรับไตปลูกถ่ายมี AK นับสิบรอยบนหนังศีรษะล้าน → เสี่ยง SCC สูง ใช้ field therapy เช่น 5-FU หรือ PDT ร่วมกับนัดตรวจผิวสม่ำเสมอ",
  "ผลตัด AK ออกพบ keratinocyte ผิดปกติเต็มความหนา epidermis แต่ยังไม่ทะลุ basement membrane และขอบตัดสะอาด → SCC in situ ที่ตัดหมดแล้ว ติดตามต่อโดยไม่ต้องตัดซ้ำ"])

# ---------- 23 ----------
mk(Q, 23, [20, 22, 's14'],
 stem="Parents of a 15-year-old girl with a scalp nevus sebaceous ask how wide its excision should be. What is correct?",
 opts=["Mohs surgery with frozen-section margin control","Removal of the lesion alone, without a wide margin","A 1-cm margin of normal skin around the plaque","No excision, since malignant change never occurs in it","A 2-cm margin, as for a thick melanoma"],
 interp="Nevus sebaceous ที่หนังศีรษะของวัยรุ่น ผู้ปกครองต้องการตัดออก → ถามความกว้างของขอบตัด ต้องใช้หลักว่ารอยโรคนี้ยังไม่ใช่มะเร็ง เป็นเพียงพื้นที่เสี่ยงเกิดเนื้องอก จึงตัดเอาตัวรอยโรคออกให้หมดก็พอ ไม่ต้องเผื่อขอบเนื้อดีแบบมะเร็ง",
 why="<b>Nevus sebaceous of Jadassohn</b> เป็น <b>hamartoma</b> ของ epidermis ต่อมไขมันและ adnexa มีตั้งแต่เกิดที่ศีรษะและลำคอ เป็นปื้นสีเหลืองส้ม ไม่มีผม แล้วจะ<b>หนาตัวเป็นตุ่มช่วงวัยรุ่น</b>จากฮอร์โมนแอนโดรเจน · ความสำคัญคือ<b>อาจเกิดเนื้องอกขึ้นภายในรอยโรค</b> ชีทเดิมเน้น BCC แต่ข้อมูลปัจจุบันพบว่าส่วนใหญ่เป็น benign (trichoblastoma, syringocystadenoma papilliferum) · เนื่องจากตัวรอยโรค<b>ยังไม่ใช่มะเร็ง</b> เป้าหมายของการตัดคือเอา hamartoma ออกให้หมดทั้งผิวและความลึก ไม่ใช่เอาเนื้อดีรอบ ๆ — <b>excision ตัวรอยโรคแบบ full-thickness ถึงชั้นไขมัน (เพราะต่อมอยู่ลึก) แล้วปิดแผล ไม่ต้อง wide excision</b> · ถ้ารอยโรคใหญ่บนหนังศีรษะอาจทำ serial excision หรือใช้ tissue expander เพื่อปิดด้วยหนังศีรษะที่มีผม · จังหวะการตัดยังไม่มีข้อสรุป หลายที่ตัดก่อนหรือช่วงวัยรุ่นเพื่อความสวยงามและเลี่ยงการเฝ้าระวังตลอดชีวิต บางที่เลือกเฝ้าดูแล้วตัดเมื่อมีตุ่มใหม่ · ถ้าตุ่มที่เกิดใหม่ผลเป็น BCC จริงจึงค่อยใช้ขอบแบบ BCC · สไลด์หน้า 22 ลายมือ <b>“เสี่ยง basal cell carcinoma → ตัด lesion พอ (ไม่ต้อง wide excision)”</b>",
 wrong={
  "A":"Mohs surgery ใช้กับมะเร็งผิวหนังที่ขอบไม่ชัด อยู่ตำแหน่งที่ต้องประหยัดเนื้อเยื่อ หรือเป็นซ้ำ — nevus sebaceous ไม่ใช่มะเร็งและเห็นขอบชัด การตัดธรรมดาให้หมดก็พอ · จะถูกถ้าชายอายุ 72 ปีมี morpheaform BCC ขอบไม่ชัดที่ปีกจมูก ซึ่งต้องตัดทีละชั้นและตรวจขอบทันทีเพื่อเก็บเนื้อเยื่อปกติไว้มากที่สุด",
  "C":"ขอบ 1 cm เป็นการเผื่อเนื้อดีแบบมะเร็งที่ลุกลาม ทำให้เสียหนังศีรษะที่มีผมเพิ่มโดยไม่ได้ประโยชน์ เพราะ hamartoma ไม่มีเซลล์ที่แทรกออกนอกขอบที่มองเห็น · จะถูกถ้าชายอายุ 68 ปีมี melanoma ที่แขนหนา 0.6 mm ซึ่งแนวทางให้ตัดขอบเนื้อดีรอบรอยโรค 1 cm",
  "D":"ข้อความนี้ผิดเพราะแม้เนื้องอกที่เกิดส่วนใหญ่จะ benign แต่มะเร็ง (รวม BCC ที่พบได้น้อย) ก็เกิดภายในรอยโรคได้ และหลายครอบครัวต้องการตัดเพื่อความสวยงาม · ไม่มีสถานการณ์ใดที่สรุปได้ว่า nevus sebaceous ไม่มีวันกลายเป็นเนื้อร้าย เพราะมีรายงานมะเร็งเกิดในรอยโรคนี้จริง แม้การเฝ้าดูโดยไม่ตัดเป็นทางเลือกที่ยอมรับได้",
  "E":"ขอบ 2 cm เป็นขอบสูงสุดของ melanoma ที่หนา ซึ่งเกินจำเป็นมากสำหรับรอยโรคที่ยังไม่เป็นมะเร็ง และจะทิ้งแผลกว้างบนหนังศีรษะที่ปิดยาก · จะถูกถ้าหญิงอายุ 50 ปีมี melanoma ที่หลังหนา 3 mm ซึ่ง NCCN ให้ตัดขอบเนื้อดีรอบรอยโรค 2 cm"},
 trap="คำว่า เสี่ยง BCC ทำให้คิดว่าต้องตัดด้วยขอบแบบมะเร็ง — แต่ขอบกว้างใช้กับมะเร็งที่พิสูจน์แล้วเพื่อเก็บเซลล์ที่แทรกออกนอกรอยโรค ส่วนรอยโรคเสี่ยงที่ยังไม่เป็นมะเร็งแค่ตัดออกให้หมดทั้งความลึก",
 summary=[
  "Nevus sebaceous = รอยโรคเสี่ยง ไม่ใช่มะเร็ง → <b>ตัด lesion ให้หมด ไม่ต้อง wide excision</b> (ลายมือสไลด์หน้า 22 และหลัก premalignant หน้า 20)",
  "ต้องตัดลึกถึงชั้นไขมันเพราะต่อมไขมันและ adnexa อยู่ลึก ตัดตื้นจะเหลือรอยโรคและกลับเป็นซ้ำ",
  "ชีทหน้า 14: มีตั้งแต่เกิด ศีรษะและใบหน้า · plaque สีเหลือง ผิวมัน ขอบชัด ไม่มีผม · เปลี่ยนแปลงช่วงวัยรุ่น · ตัดเพื่อป้องกันเนื้อร้าย",
  "ปื้นใหญ่บนหนังศีรษะ: serial excision หรือ tissue expansion เพื่อปิดด้วยผิวที่มีผม",
  "จังหวะตัดยังถกเถียง: ตัดก่อนหรือช่วงวัยรุ่น หรือเฝ้าดูแล้วตัดเมื่อมีตุ่มใหม่",
  "ถ้าตุ่มในรอยโรคผลเป็น BCC จริง → ใช้ขอบแบบ BCC ตามความเสี่ยง (low-risk 4 mm)"],
 opinion="เห็นด้วยกับคำตอบ B ความมั่นใจสูง — ลายมือสไลด์หน้า 22 เขียนตรงตัวว่าตัด lesion พอไม่ต้อง wide excision สอดคล้องกับหลัก premalignant ในสไลด์หน้า 20 · จุดที่ชีทหน้า 14 ต่างจากข้อมูลปัจจุบัน: ชีทเขียนว่ากลายเป็นเนื้อร้ายประมาณ 10–15% ส่วนใหญ่เป็น BCC แต่การทบทวนชิ้นเนื้อจำนวนมากภายหลัง (ตำรา Bolognia 4th ed. 2018) พบว่า BCC จริงเกิดราว 1% หรือน้อยกว่า เนื้องอกที่พบบ่อยที่สุดคือ trichoblastoma ซึ่งเป็น benign และเดิมถูกอ่านเป็น BCC · ผลคือข้อบ่งชี้ของการตัดเชิงป้องกันอ่อนลงและหลายแห่งยอมให้เฝ้าดู แต่เมื่อตัด หลักขอบแคบยังเหมือนเดิม",
 mnemonic="<b>'Hamartoma ไม่ใช่ Malignancy: ตัดหมด ไม่ต้องกว้าง'</b>",
 guide="Bolognia Dermatology 4th ed. (2018) — Adnexal neoplasms: nevus sebaceus; Grabb and Smith's Plastic Surgery 8th ed. (2020) — Benign and premalignant skin lesions",
 variants=[
  "ทารกแรกเกิดมีปื้นสีเหลืองส้มไม่มีผมขนาด 2 cm ที่หนังศีรษะ ผู้ปกครองยังไม่อยากให้ผ่าตัด → เฝ้าดูได้ อธิบายว่าจะหนาตัวช่วงวัยรุ่นและให้กลับมาเมื่อมีตุ่มใหม่",
  "เด็กอายุ 10 ปีมี nevus sebaceous กว้าง 8 cm บนหนังศีรษะ ตัดครั้งเดียวปิดไม่ได้ → ฝัง tissue expander ขยายหนังศีรษะที่มีผมแล้วตัดพร้อมปิดด้วย flap",
  "หลังตัด nevus sebaceous แบบตื้นเพียงชั้น dermis ไม่กี่เดือนต่อมามีตุ่มสีเหลืองขึ้นใหม่ในแผลเป็น → รอยโรคเหลือในชั้นลึก ต้องตัดซ้ำให้ถึงชั้นไขมัน"])

# ---------- 24 ----------
mk(Q, 24, [21, 's17'],
 stem="A 70-year-old woman has a well-demarcated, scaly red patch on her shin that has slowly enlarged over several years despite steroid creams. Biopsy shows full-thickness epidermal atypia without dermal invasion. Which cancer may this lesion progress to?",
 opts=["Squamous cell carcinoma","Merkel cell carcinoma","Basal cell carcinoma","Dermatofibrosarcoma protuberans","Malignant melanoma"],
 interp="ปื้นแดงขอบชัดมีขุยที่หน้าแข้ง โตช้าหลายปี ไม่ตอบ steroid ชิ้นเนื้อมี atypia เต็มความหนา epidermis แต่ไม่ลุกลาม → Bowen's disease (SCC in situ) → ถามว่าจะกลายเป็นมะเร็งอะไร ต้องใช้หลักว่ารอยโรคนำของ keratinocyte จะพัฒนาเป็นมะเร็งของ keratinocyte ชนิด squamous",
 why="<b>Bowen's disease</b> คือ <b>squamous cell carcinoma in situ</b>: keratinocyte ผิดปกติ<b>เต็มความหนาของ epidermis</b> (full-thickness atypia) แต่ยังไม่ทะลุ basement membrane ต่างจาก AK ที่ atypia จำกัดอยู่ชั้นล่าง · ลักษณะทางคลินิก: <b>ปื้นแดงขอบชัด มีขุย สะเก็ด หรือแผลตื้น โตช้า</b> พบบ่อยในผู้สูงอายุ โดยเฉพาะหน้าแข้งของผู้หญิงและผิวที่ถูกแดด มักถูกรักษาเป็น eczema หรือ psoriasis แล้วไม่หาย · ปัจจัยร่วม: แสงแดด สารหนู (arsenic ทำให้เกิดหลายรอยในที่ไม่ถูกแดด) HPV (อวัยวะเพศและรอบเล็บ) และภาวะกดภูมิ · เมื่อเซลล์ทะลุ basement membrane จะกลายเป็น <b>invasive SCC</b> ราว 3–5% ของรอยโรค (BAD 2014) — สัญญาณคือมี<b>ก้อนนูนแข็ง แผลลึก หรือเลือดออก</b>ภายในปื้น ต้อง biopsy ตรงตำแหน่งนั้น · การรักษาเลือกตามขนาดและตำแหน่ง: excision, curettage, cryotherapy, 5-FU, imiquimod หรือ PDT (ที่หน้าแข้งแผลหายยาก PDT หรือยาทามักดีกว่าการตัดหรือจี้เย็นกว้าง) · สไลด์หน้า 21 ลายมือ <b>“└ เสี่ยง squamous cell carcinoma”</b> และ <b>“สะเก็ด / ปื้นแดง ๆ / แผลตื้น ๆ”</b>",
 wrong={
  "B":"Merkel cell carcinoma เป็นมะเร็ง neuroendocrine ที่พบน้อย เกิดเป็นก้อนแดงม่วงโตเร็วบนผิวที่ถูกแดดของผู้สูงอายุหรือผู้กดภูมิ สัมพันธ์กับ Merkel cell polyomavirus และไม่มีปื้น in situ ของ epidermis เป็นรอยโรคนำ · ไม่มีสถานการณ์ใดที่ SCC in situ พัฒนาต่อเป็น Merkel cell carcinoma เพราะเป็นมะเร็งคนละสายเซลล์ แม้บางครั้งพบสองชนิดอยู่ติดกันได้",
  "C":"BCC มาจากเซลล์ basaloid ที่สัมพันธ์กับรูขุมขน ไม่มีระยะ in situ ทางคลินิกที่พัฒนาเป็นขั้น แม้ superficial BCC จะเป็นปื้นแดงคล้ายกันได้และแยกด้วยชิ้นเนื้อ · จะถูกถ้าเด็กหญิงอายุ 14 ปีมีปื้นสีเหลืองส้มไม่มีผมที่หนังศีรษะมาตั้งแต่เกิด ซึ่งตำราคลาสสิกสอนว่ารอยโรคนี้อาจเกิด BCC ภายหลัง",
  "D":"DFSP เป็น sarcoma ของชั้น dermis (fibroblast) ที่มี translocation COL1A1-PDGFB เกิดเป็นปื้นแข็งหรือก้อนโตช้าที่ลำตัว ไม่ได้เกิดจาก atypia ของ keratinocyte ใน epidermis · ไม่มีสถานการณ์ใดที่ SCC in situ กลายเป็น DFSP เพราะต้นกำเนิดเป็นคนละเนื้อเยื่อ (epidermis กับ dermis) และ DFSP ไม่มีรอยโรคนำแบบ in situ ในผิวชั้นบน",
  "E":"Melanoma เกิดจาก melanocyte ไม่ใช่ keratinocyte รอยโรคนำที่ใกล้เคียงคือ lentigo maligna (melanoma in situ) ซึ่งเป็นปื้นสีน้ำตาลดำแบน ขอบไม่เรียบ ไม่ใช่ปื้นแดงมีขุย · จะถูกถ้าหญิงอายุ 75 ปีมีปื้นสีน้ำตาลดำแบน ขอบไม่สม่ำเสมอ ขยายช้าที่แก้มหลายปี ผลชิ้นเนื้อเป็น melanocyte ผิดปกติเรียงตาม basal layer"},
 trap="ปื้นแดงมีขุยที่ไม่ตอบ steroid อาจทำให้นึกถึง superficial BCC ซึ่งก็เป็นปื้นแดงที่ลำตัวและขาได้ — ตัวแยกคือชิ้นเนื้อ: atypia ของ keratinocyte เต็มความหนา epidermis = SCC in situ ซึ่งลุกลามต่อเป็น invasive SCC ไม่ใช่ BCC",
 summary=[
  "<b>Bowen's disease = SCC in situ</b> → ลุกลามเป็น invasive SCC ราว 3–5% (ลายมือสไลด์หน้า 21: เสี่ยง SCC)",
  "ลักษณะ: ปื้นแดงขอบชัด มีขุย สะเก็ด แผลตื้น โตช้า · มักถูกวินิจฉัยผิดเป็น eczema หรือ psoriasis ที่ไม่ตอบ steroid",
  "พยาธิ: full-thickness atypia ของ epidermis ไม่ทะลุ basement membrane · AK = atypia เฉพาะชั้นล่าง",
  "ปัจจัย: แสงแดด · arsenic (หลายรอยในที่ไม่ถูกแดด) · HPV · ภาวะกดภูมิ",
  "สัญญาณลุกลาม: ก้อนแข็ง แผลลึก เลือดออกในปื้น → biopsy ตรงจุดนั้น",
  "รักษา: excision, curettage, cryotherapy, 5-FU, imiquimod หรือ PDT · หน้าแข้งแผลหายยาก เลือก PDT หรือยาทา",
  "ชีทหน้า 17: SCC ราว 20% ของมะเร็งผิวหนัง ปัจจัยเสี่ยง UVB รังสี actinic keratoses บุหรี่ chronic irritation ภูมิบกพร่อง papillomavirus"],
 opinion="เห็นด้วยกับคำตอบ A ความมั่นใจสูง — ลายมือสไลด์หน้า 21 เขียนว่าเสี่ยง SCC พร้อมลักษณะสะเก็ด ปื้นแดง แผลตื้น และชีทหน้า 17 ระบุปัจจัยเสี่ยงของ SCC ที่ตรงกับ Bowen · สไลด์ไม่ได้ให้นิยาม SCC in situ หรืออัตราการลุกลาม ซึ่งตาม BAD guideline 2014 อยู่ราว 3–5% และสูงกว่าในผู้กดภูมิหรือรอยโรคที่อวัยวะเพศ · ชีทไม่ได้พูดถึงการรักษา Bowen โดยตรง แนวทางปัจจุบัน (BAD 2014, NCCN Squamous Cell Skin Cancer 2025) ยอมรับทั้งการผ่าตัดและการรักษาเฉพาะที่โดยไม่ผ่าตัด เลือกตามขนาด ตำแหน่ง และความสามารถในการหายของแผล",
 mnemonic="<b>'Bowen = in situ ของ Squamous: แดง ขุย ขอบชัด ไม่หายด้วย steroid'</b>",
 guide="Morton CA et al. British Association of Dermatologists guidelines for the management of squamous cell carcinoma in situ (Bowen's disease) 2014, Br J Dermatol 2014; NCCN Guidelines Squamous Cell Skin Cancer 2025",
 variants=[
  "ชายอายุ 75 ปีมีปื้นแดงกำมะหยี่ขอบชัดที่หัวองคชาต ไม่หายด้วยยาทาเชื้อรา → erythroplasia of Queyrat คือ SCC in situ ที่หัวองคชาต ต้อง biopsy",
  "ชายที่ดื่มน้ำบาดาลปนสารหนูมาหลายสิบปี มีปื้นแดงมีขุยหลายรอยบนลำตัวที่ไม่ถูกแดด → Bowen's disease หลายตำแหน่งจาก arsenic ต้องตรวจหามะเร็งอวัยวะภายในร่วมด้วย",
  "หญิงอายุ 80 ปีมี Bowen's disease 3 cm ที่หน้าแข้งซึ่งบวมจากหลอดเลือดดำ → เลือก PDT หรือ 5-FU แทนการตัดกว้าง เพราะแผลที่หน้าแข้งผู้สูงอายุหายยาก"])

# ---------- 25 ----------
mk(Q, 25, [22, 70, 's14'],
 stem="A 12-year-old girl has a hairless, yellow-orange, cobblestone-surfaced plaque on her scalp present since birth. Which malignancy is classically associated?",
 opts=["Malignant melanoma","Squamous cell carcinoma","Dermatofibrosarcoma protuberans","Basal cell carcinoma","Merkel cell carcinoma"],
 interp="เด็กมีปื้นสีเหลืองส้ม ผิวเป็นเม็ดแบบ cobblestone ไม่มีผม ที่หนังศีรษะตั้งแต่เกิด → nevus sebaceous of Jadassohn → ถามมะเร็งที่ตำราคลาสสิกสอนว่าสัมพันธ์กัน ต้องจำคู่ nevus sebaceous กับ BCC และรู้ว่าข้อมูลใหม่พบน้อยกว่าที่เคยเชื่อ",
 why="<b>Nevus sebaceous of Jadassohn</b> เป็น hamartoma ของผิวหนังที่มีต่อมไขมัน ต่อม apocrine และรูขุมขนผิดรูป วินิจฉัยได้จากลักษณะทางคลินิก: <b>มีตั้งแต่เกิด ที่ศีรษะและลำคอ (หนังศีรษะบ่อยสุด) ปื้นสีเหลืองส้ม ผิวมัน ขอบชัด ไม่มีผมขึ้น</b> · ดำเนินโรค 3 ระยะ: วัยเด็กแบนเรียบ → <b>วัยรุ่นหนาตัวเป็นตุ่มเล็ก ๆ ติดกันแบบ cobblestone หรือ verrucous</b> จากฮอร์โมน → วัยผู้ใหญ่อาจเกิดเนื้องอกภายใน · ตำราคลาสสิกและชีทสอนว่ารอยโรคนี้<b>เสี่ยงต่อ basal cell carcinoma</b> เป็นคู่ที่ออกข้อสอบบ่อย แต่การทบทวนชิ้นเนื้อจำนวนมากภายหลังพบว่าเนื้องอกที่เกิดส่วนใหญ่เป็น <b>benign</b> โดยเฉพาะ <b>trichoblastoma</b> และ <b>syringocystadenoma papilliferum</b> ส่วน BCC จริงพบราว 1% หรือน้อยกว่า (เดิม trichoblastoma ถูกอ่านเป็น BCC) · การหนาตัวช่วงวัยรุ่นเป็นธรรมชาติของโรค ไม่ใช่สัญญาณมะเร็ง ต่างจากการมีก้อนใหม่โตเร็วในปื้น · การรักษา: excision ตัวรอยโรคให้หมดถึงชั้นไขมัน ไม่ต้อง wide excision · สไลด์หน้า 22 ลายมือ <b>“เสี่ยง basal cell carcinoma”</b> และ <b>“มักเกิด at head &amp; neck area”</b>",
 wrong={
  "A":"Melanoma สัมพันธ์กับรอยโรคของ melanocyte โดยเฉพาะ congenital melanocytic nevus ชนิดใหญ่ ซึ่งเป็นปื้นสีน้ำตาลดำมีขน ไม่ใช่ปื้นสีเหลืองส้มไม่มีผม · จะถูกถ้าทารกแรกเกิดมีปานดำมีขนที่คาดว่าจะใหญ่เกิน 40 cm เมื่อเป็นผู้ใหญ่ คลุมกลางหลังและก้น ร่วมกับ satellite nevi หลายจุด",
  "B":"SCC สัมพันธ์กับรอยโรคนำของ keratinocyte ที่เกิดจากแสงแดดหรือการระคายเรื้อรัง เช่น actinic keratosis, Bowen's disease และแผลเป็นเรื้อรัง ไม่ใช่ hamartoma แต่กำเนิด · จะถูกถ้าชายอายุ 60 ปีมีแผลเรื้อรังในแผลเป็นไฟไหม้ที่ขาตั้งแต่ 30 ปีก่อน ขอบเริ่มนูนแข็งและเลือดออกง่าย (Marjolin ulcer)",
  "C":"DFSP เป็น sarcoma ระดับต่ำของ dermis เกิดเป็นปื้นแข็งหรือก้อนโตช้าที่ลำตัวและต้นแขนต้นขาในผู้ใหญ่อายุน้อยถึงกลางคน ไม่มีรอยโรคนำที่มีมาแต่กำเนิดแบบนี้ · ไม่มีสถานการณ์ใดที่ nevus sebaceous เป็นรอยโรคที่สัมพันธ์กับ DFSP แบบคลาสสิก เพราะ DFSP เกิดจาก translocation COL1A1-PDGFB ในเซลล์ของ dermis ไม่ได้เกิดจากรอยโรคของ adnexa",
  "E":"Merkel cell carcinoma เป็นมะเร็ง neuroendocrine ที่พบน้อย เกิดเป็นก้อนแดงม่วงโตเร็วบนผิวที่ถูกแดดของผู้สูงอายุหรือผู้กดภูมิ สัมพันธ์กับ polyomavirus และ UV · ไม่มีสถานการณ์ใดที่ Merkel cell carcinoma เป็นมะเร็งคู่คลาสสิกของ nevus sebaceous เพราะไม่มีรอยโรคนำที่มีมาแต่กำเนิด และคู่ที่ตำราใช้สำหรับรอยโรคนี้คือ BCC"},
 trap="ผิวแบบ cobblestone และการหนาตัวช่วงวัยรุ่นอาจทำให้คิดว่ารอยโรคกำลังเปลี่ยนเป็นมะเร็งชนิด squamous หรือ melanoma — การหนาตัวเป็นธรรมชาติของ nevus sebaceous จากฮอร์โมน ส่วนคู่จำคลาสสิกคือ BCC แม้ข้อมูลใหม่จะพบน้อย",
 summary=[
  "Nevus sebaceous of Jadassohn ↔ <b>BCC</b> คู่คลาสสิก (ลายมือสไลด์หน้า 22) · ลายมือหน้า 70: เป็น premalignant → excision",
  "ลักษณะ: มีตั้งแต่เกิด · ศีรษะและลำคอ · ปื้นสีเหลืองส้ม ผิวมัน ขอบชัด ไม่มีผม · วัยรุ่นหนาเป็นตุ่มติดกัน (cobblestone)",
  "ชีทหน้า 14: กลายเป็นเนื้อร้ายประมาณ 10–15% ส่วนใหญ่เป็น BCC ซึ่งเปลี่ยนแปลงช่วงวัยรุ่น",
  "ข้อมูลปัจจุบัน: เนื้องอกที่เกิดส่วนใหญ่ benign — trichoblastoma, syringocystadenoma papilliferum · BCC จริงราว 1% หรือน้อยกว่า",
  "ภาพหน้า 70 B (ปื้นส้มน้ำตาลผิวเป็นตุ่มบนหนังศีรษะ) ต้องแยกจาก seborrheic keratosis ภาพ A ที่เป็นก้อนแปะผิวในผู้สูงอายุ",
  "รอยโรคนำกับมะเร็งคู่อื่น: AK และ Bowen → SCC · CMN ใหญ่ → melanoma · แผลเป็นเรื้อรัง → SCC (Marjolin)"],
 opinion="เห็นด้วยกับคำตอบ D ความมั่นใจสูงสำหรับคำถามที่ใช้คำว่า classically associated — ลายมือสไลด์หน้า 22 และชีทหน้า 14 ระบุ BCC ตรงตัว และลายมือสไลด์หน้า 70 จัดเป็น premalignant · จุดที่ต่างจากปัจจุบันคือขนาดความเสี่ยง: ชีทให้ 10–15% ส่วนใหญ่ BCC แต่ตำรา Bolognia 4th ed. (2018) และการทบทวนชิ้นเนื้อจำนวนมากพบว่า BCC จริงพบราว 1% หรือน้อยกว่า เนื้องอกส่วนใหญ่คือ trichoblastoma ซึ่งเป็น benign · หากถามว่าเนื้องอกที่พบบ่อยที่สุดในรอยโรคคืออะไร คำตอบตามข้อมูลปัจจุบันจะเป็น trichoblastoma ไม่ใช่ BCC",
 mnemonic="<b>'Sebaceous ส้ม ๆ → Basal (คลาสสิก) แต่ตัวจริงคือ Trichoblastoma'</b>",
 guide="Bolognia Dermatology 4th ed. (2018) — Adnexal neoplasms: nevus sebaceus; Sabiston Textbook of Surgery 21st ed. (2022) — Skin and subcutaneous tissue",
 variants=[
  "ทารกมี nevus sebaceous แผ่นใหญ่ตามแนวกลางใบหน้า ร่วมกับชักและพัฒนาการช้า → Schimmelpenning syndrome ตรวจสมอง ตา และกระดูกเพิ่ม",
  "ชายอายุ 65 ปีมีก้อนแปะผิวสีน้ำตาลเทา ผิวขรุขระ ดูเหมือนติดอยู่บนผิวที่ขมับ เพิ่งเกิดในวัยกลางคน → seborrheic keratosis ซึ่งเป็น benign ไม่ใช่ nevus sebaceous",
  "วัยรุ่นหญิงที่เดิมมีปื้นเรียบสีเหลืองบนหนังศีรษะ ช่วงอายุ 14 ปีปื้นหนาและขรุขระสม่ำเสมอทั้งแผ่นโดยไม่มีก้อนเด่น → การหนาตัวตามฮอร์โมนวัยรุ่นของ nevus sebaceous ไม่ใช่สัญญาณมะเร็ง"])

# ---------- 26 ----------
mk(Q, 26, [23, 's12'],
 stem="A 68-year-old farmer has multiple rough, red, scaly patches on his sun-exposed forehead and the backs of his hands. What is the most likely lesion, and to which cancer may it progress?",
 opts=["Seborrheic keratosis, which may progress to melanoma","Nevus sebaceous of Jadassohn, which may progress to basal cell carcinoma","Skin tag, which may progress to squamous cell carcinoma","Actinic keratosis, which may progress to squamous cell carcinoma","Lipoma, which may progress to liposarcoma"],
 interp="เกษตรกรสูงอายุมีปื้นแดงสาก มีขุยหลายรอยบนหน้าผากและหลังมือที่ถูกแดด → actinic keratosis → ถามชื่อรอยโรคพร้อมมะเร็งที่อาจตามมา ต้องรู้ว่า AK เป็น premalignant ที่พบบ่อยที่สุดและพัฒนาเป็น SCC จากการทำลายของ UVB",
 why="<b>Actinic (solar) keratosis</b> เกิดจาก <b>UVB สะสม</b>ทำลาย DNA ของ keratinocyte (กลายพันธุ์ของ p53) ทำให้เกิด atypia ใน<b>ชั้น basal ของ epidermis</b> · ลักษณะ: <b>ปื้นหรือตุ่มแดง ผิวสากเหมือนกระดาษทราย มีขุย</b> มักคลำได้ชัดกว่ามองเห็น หลายรอยบน<b>ผิวที่ถูกแดดเรื้อรัง</b> คือใบหน้า หนังศีรษะล้าน ใบหู แขนและหลังมือ ในผู้สูงอายุผิวขาวหรือคนทำงานกลางแจ้ง · เป็น <b>premalignant lesion ที่พบบ่อยที่สุด</b> และลุกลามต่อเป็น <b>squamous cell carcinoma</b> (ชีทหน้า 12: 5–20%) ตามเส้นทาง AK → SCC in situ → invasive SCC · ผิวบริเวณที่มี AK หลายรอยถือเป็น field cancerization จึงนิยมรักษาทั้งบริเวณ (field therapy) ด้วย 5-FU, imiquimod หรือ PDT ส่วนรอยเดี่ยวใช้ cryotherapy · ต้องแยกจาก <b>seborrheic keratosis</b> ที่เป็นก้อนแปะผิวสีน้ำตาล ผิวมันเหมือนเทียน ซึ่ง benign · การป้องกันคือเลี่ยงแดด ใช้ครีมกันแดด broad-spectrum และตรวจผิวสม่ำเสมอ · สไลด์หน้า 23 ลายมือ <b>“= m/c premalignant lesion”</b> และ <b>“↳ เสี่ยง squamous cell CA”</b>",
 wrong={
  "A":"Seborrheic keratosis เป็นเนื้องอกผิวที่พบบ่อยที่สุดในผู้สูงอายุ เป็นก้อนแปะผิวสีน้ำตาล ผิวขรุขระมันเหมือนติดอยู่บนผิว แต่เป็น benign ไม่กลายเป็น melanoma — ลายมือสไลด์หน้า 23 เขียน cf. seborrheic keratosis → benign · ไม่มีสถานการณ์ใดที่ seborrheic keratosis เป็นรอยโรค premalignant ต่อ melanoma เพราะเป็นเนื้องอก benign ของ keratinocyte ไม่ใช่ melanocyte แม้บางก้อนสีดำจนต้อง biopsy แยก",
  "B":"Nevus sebaceous สัมพันธ์กับ BCC แบบคลาสสิกจริง แต่มีตั้งแต่เกิด เป็นปื้นเดียวสีเหลืองส้มไม่มีผมบนหนังศีรษะ ไม่ใช่หลายรอยที่เกิดจากแดดในวัยสูงอายุ และไม่ใช่ premalignant ที่พบบ่อยที่สุด · จะถูกถ้าเด็กชายอายุ 13 ปีมีปื้นเดียวสีเหลืองส้ม ผิวเป็นตุ่มติดกัน ไม่มีผม บนหนังศีรษะมาตั้งแต่เกิด",
  "C":"Skin tag (acrochordon) เป็นติ่งเนื้อนุ่มมีก้านที่คอ รักแร้ และขาหนีบ พบในคนอ้วนหรือเบาหวาน เป็น benign ไม่กลายเป็นมะเร็ง · ไม่มีสถานการณ์ใดที่ skin tag เป็นรอยโรคนำของ SCC เพราะเป็น fibroepithelial polyp ที่ไม่มี atypia ของ keratinocyte และไม่ได้เกิดจากแสงแดด",
  "E":"Lipoma เป็นก้อนไขมันนุ่มใต้ผิวหนัง เคลื่อนได้ ไม่ใช่ปื้นสากบนผิว และไม่ใช่รอยโรคนำของ liposarcoma ซึ่งเกิดเป็นมะเร็งตั้งแต่แรก · ไม่มีสถานการณ์ใดที่ lipoma ธรรมดาเป็น premalignant ต่อ liposarcoma เพราะเป็นเนื้องอก benign ที่ไม่กลายเป็นมะเร็ง ก้อนไขมันที่โตเร็วหรือใหญ่เกิน 5 cm ต้องสงสัย liposarcoma ตั้งแต่ต้น"},
 trap="คำว่า keratosis มีทั้ง seborrheic และ actinic ชื่อคล้ายกันจึงสลับกันง่าย — actinic = แสงแดด = ปื้นแดงสากหลายรอยบนผิวที่ถูกแดด → SCC ส่วน seborrheic = ก้อนแปะผิวสีน้ำตาลมันเหมือนเทียน → benign",
 summary=[
  "<b>Actinic keratosis = m/c premalignant lesion → SCC</b> (ลายมือสไลด์หน้า 23)",
  "ลักษณะ: ปื้นแดง ผิวสากเหมือนกระดาษทราย มีขุย หลายรอย บนใบหน้า หนังศีรษะล้าน หลังมือ ในผู้สูงอายุที่ทำงานกลางแจ้ง",
  "กลไก: UVB สะสม → p53 กลายพันธุ์ → ชีทหน้า 12: dyskeratosis และ atypia ของ basal layer",
  "ชีทหน้า 12: เปลี่ยนเป็น SCC 5–20% · รักษา cryotherapy, electrodesiccation, 5-FU, laser, excision",
  "Field cancerization: หลายรอยบนผิวที่แดดเผา → field therapy ด้วย 5-FU, imiquimod หรือ PDT",
  "เทียบ seborrheic keratosis: เนื้องอกผิวที่พบบ่อยที่สุด อายุมากกว่า 40–50 ปี ก้อนแปะผิว benign (cf. ในลายมือหน้า 23)"],
 opinion="เห็นด้วยกับคำตอบ D ความมั่นใจสูง — ลายมือสไลด์หน้า 23 ระบุทั้ง m/c premalignant lesion และเสี่ยง SCC ส่วนชีทหน้า 12 บรรยายลักษณะและพยาธิตรงกับโจทย์ · จุดต่างจากปัจจุบัน: ตัวเลข 5–20% ในชีทเป็นความเสี่ยงระยะยาวที่อ้างกันมานาน แต่การติดตามรายรอยโรคพบความเสี่ยงต่ำกว่า 1% ต่อปี และรอยโรคบางส่วนยุบเองได้ · แนวทาง AAD 2021 ยังแนะนำให้รักษา AK เพราะมักมีหลายรอยและแยกจาก SCC ระยะแรกด้วยตาเปล่าไม่ได้แน่นอน โดยเน้น field therapy มากกว่าการตัดทีละรอย",
 mnemonic="<b>'ACTinic = ACTive sun → SCC · SEBorrheic = Stuck-on, Benign'</b>",
 guide="Eisen DB et al. Guidelines of care for the management of actinic keratosis, J Am Acad Dermatol 2021; Bolognia Dermatology 4th ed. (2018) — Actinic keratosis and SCC in situ",
 variants=[
  "ชาวประมงอายุ 65 ปีมีริมฝีปากล่างแห้ง ลอกเป็นขุยตลอด ขอบปากกับผิวหน้าเลือนไม่ชัด → actinic cheilitis ซึ่งเป็น AK ที่ริมฝีปาก เสี่ยง SCC",
  "หญิงอายุ 70 ปีมี AK บนหน้าผากรอยหนึ่งที่มีเขาแข็งสีเหลืองยื่นออกมาสูง 1 cm → cutaneous horn ซึ่งฐานอาจเป็น SCC ต้องตัดรวมฐานส่งตรวจ",
  "ชายมี AK หลายสิบรอยทั่วหนังศีรษะล้าน ทายา 5-FU ไป 2 สัปดาห์แล้วแดง แสบ ตกสะเก็ดทั่ว → ปฏิกิริยาที่คาดไว้ของ field therapy ไม่ใช่แพ้ยา ทาต่อจนครบ"])

# ---------- 27 ----------
mk(Q, 27, [24, 's16', 's17'],
 stem="A 66-year-old man is diagnosed with a primary skin cancer. Without other information, which type is statistically most likely?",
 opts=["Merkel cell carcinoma","Squamous cell carcinoma","Primary cutaneous lymphoma","Basal cell carcinoma","Malignant melanoma"],
 interp="ชายสูงอายุเป็นมะเร็งผิวหนังปฐมภูมิโดยไม่มีข้อมูลลักษณะรอยโรค → ถามชนิดที่น่าจะเป็นที่สุดทางสถิติ ต้องใช้ความชุกพื้นฐาน (base rate) ของมะเร็งผิวหนัง 3 ชนิดหลักมาตอบ ไม่ใช่ความรุนแรงหรือภาพจำ",
 why="เมื่อไม่มีข้อมูลทางคลินิกช่วยแยก คำตอบที่น่าจะเป็นที่สุดคือชนิดที่มี<b>ความชุกพื้นฐานสูงสุด</b> · มะเร็งผิวหนังเป็นมะเร็งที่พบมากที่สุดในร่างกายแต่ทำให้ตายน้อย แบ่งเป็น 3 ชนิดหลัก: <b>BCC ราว 77%</b>, <b>SCC ราว 20%</b> และ <b>melanoma รวมเนื้องอกหายาก ราว 3%</b> (Merkel cell carcinoma, DFSP, cutaneous lymphoma, sebaceous carcinoma) · BCC สัมพันธ์กับ UVB สะสม พบในเพศชายมากกว่า ส่วนใหญ่ที่ศีรษะและคอ โดยเฉพาะจมูก โตช้าและแทบไม่กระจาย (0.0028–0.1%) · ความชุกกลับด้านในบางกลุ่ม: <b>ผู้รับอวัยวะปลูกถ่ายที่ใช้ยากดภูมิมี SCC มากกว่า BCC</b> หลายเท่า และในคนผิวเข้มสัดส่วน SCC สูงขึ้นและ melanoma มักเป็นชนิด acral · ความรุนแรงเรียงกลับกับความชุก: <b>melanoma พบน้อยสุดแต่ทำให้ตายมากที่สุด</b> ส่วน BCC พบบ่อยสุดแต่ aggressive น้อยสุด · สไลด์หน้า 24 ตัวพิมพ์ <b>“77% are BCC · 20% are SCC · 3% are MM and rare tumor”</b> และลายมือลูกศรจาก BCC ไป MM <b>“aggressive”</b> · จาก MM ไป BCC <b>“common”</b>",
 wrong={
  "A":"Merkel cell carcinoma เป็นมะเร็ง neuroendocrine ที่ดุมาก แต่พบน้อยมาก อยู่ในกลุ่ม rare tumor ที่รวมกับ melanoma เพียงราว 3% · ไม่มีสถานการณ์ใดที่ Merkel cell carcinoma เป็นชนิดที่น่าจะเป็นที่สุดเมื่อไม่มีข้อมูลอื่น เพราะความชุกพื้นฐานต่ำกว่า BCC และ SCC มากในทุกกลุ่มประชากร รวมถึงผู้กดภูมิ",
  "B":"SCC เป็นมะเร็งผิวหนังที่พบบ่อยอันดับสองราว 20% สัมพันธ์กับ UVB และพบมากในผู้สูงอายุที่ทำงานกลางแจ้ง แต่ในประชากรทั่วไปยังน้อยกว่า BCC ราว 4 เท่า · จะถูกถ้าชายอายุ 60 ปีที่ได้รับไตปลูกถ่ายและกินยากดภูมิมา 15 ปีเป็นมะเร็งผิวหนังปฐมภูมิ ซึ่งในกลุ่มนี้ SCC พบบ่อยกว่า BCC",
  "C":"Primary cutaneous lymphoma เช่น mycosis fungoides เป็นมะเร็งของเม็ดเลือดขาวที่อยู่ในผิว พบน้อยมากเมื่อเทียบกับมะเร็งของ keratinocyte และมักเป็นปื้นแดงเรื้อรังคล้าย eczema · ไม่มีสถานการณ์ใดที่ cutaneous lymphoma เป็นชนิดที่น่าจะเป็นที่สุดเมื่อไม่มีข้อมูลอื่น เพราะความชุกต่ำกว่า BCC และ SCC มากในทุกกลุ่มอายุ",
  "E":"Melanoma เป็นมะเร็งผิวหนังที่ทำให้ตายมากที่สุด แต่พบเพียงราว 3% รวมกับเนื้องอกหายาก ความรุนแรงจึงไม่ได้แปลว่าพบบ่อย · ไม่มีสถานการณ์ใดที่ melanoma เป็นชนิดที่พบมากที่สุดเมื่อไม่มีข้อมูลอื่นในประชากรผู้ใหญ่ เพราะมะเร็งของ keratinocyte (BCC และ SCC) พบมากกว่าในแทบทุกกลุ่ม แม้ในคนผิวเข้มที่สัดส่วน melanoma ชนิด acral สูงขึ้น"},
 trap="ภาพของมะเร็งผิวหนังในใจมักเป็น melanoma เพราะดุและเป็นข่าว หรือคิดถึง SCC เพราะผู้สูงอายุตากแดด — โจทย์ไม่ให้ข้อมูลรอยโรค จึงต้องตอบตามความชุก: common = BCC, aggressive = MM",
 summary=[
  "ไม่มีข้อมูลอื่น → ตอบตามความชุก: <b>BCC ~77% · SCC ~20% · MM และ rare tumor ~3%</b> (สไลด์หน้า 24)",
  "ลายมือหน้า 24: เรียงจาก BCC → SCC → MM = <b>aggressive</b> มากขึ้น · ย้อนจาก MM → BCC = <b>common</b> มากขึ้น",
  "ชีทหน้า 16: มะเร็งผิวหนังพบมากที่สุดในร่างกาย (&gt; 50% ของมะเร็งทั้งหมด) แต่อัตราตายน้อย · BCC พบมากสุด ศีรษะและคอ 85% จมูกมากสุด",
  "BCC แทบไม่กระจาย 0.0028–0.1% · ต้องหา metachronous lesion ซึ่งพบถึง 40% ใน 10 ปี",
  "ชีทหน้า 17: SCC ราว 20% ปัจจัยเสี่ยงเหมือน BCC ร่วมกับ AK บุหรี่ chronic irritation ภูมิบกพร่อง HPV",
  "ข้อยกเว้นของสัดส่วน: ผู้รับอวัยวะปลูกถ่าย SCC &gt; BCC · การตายจากมะเร็งผิวหนังส่วนใหญ่มาจาก melanoma"],
 opinion="เห็นด้วยกับคำตอบ D ความมั่นใจสูง — ตัวเลขในสไลด์หน้า 24 และชีทหน้า 16–17 ตรงกับข้อมูลระบาดวิทยาที่ใช้ในตำราปัจจุบัน (BCC ราว 75–80%, SCC ราว 20%) · ข้อควรระวังคือสัดส่วนนี้มาจากประชากรผิวขาวเป็นหลัก ในคนเอเชียและผิวเข้มสัดส่วน SCC ต่อ BCC สูงขึ้นและ melanoma ชนิด acral lentiginous พบสัดส่วนมากขึ้น แต่ BCC ยังอยู่อันดับต้นในรายงานส่วนใหญ่ · อีกจุดคือชีทหน้า 16 เขียนว่ามะเร็งผิวหนังพบมากกว่า 50% ของมะเร็งทั้งหมด ตัวเลขนี้นับรวม keratinocyte carcinoma ซึ่งทะเบียนมะเร็งหลายแห่งไม่นับรวม",
 mnemonic="<b>'77-20-3: Basal บ่อย · Squamous รอง · Melanoma น้อยแต่ร้าย'</b>",
 guide="NCCN Guidelines Basal Cell Skin Cancer 2025; Sabiston Textbook of Surgery 21st ed. (2022) — Skin and subcutaneous tissue",
 variants=[
  "ในบรรดามะเร็งผิวหนัง ชนิดใดเป็นสาเหตุการตายมากที่สุด → melanoma แม้พบเพียงส่วนน้อย",
  "เด็กอายุ 8 ปีที่ผิวไหม้แดดง่ายตั้งแต่ทารก มีกระเต็มหน้าและเป็นมะเร็งผิวหนังหลายก้อนแล้ว → xeroderma pigmentosum จาก nucleotide excision repair บกพร่อง ต้องป้องกัน UV เคร่งครัดตลอดชีวิต",
  "ชายอายุ 70 ปีมีก้อนแดงม่วงไม่เจ็บที่แก้มโตเร็วใน 2 เดือน ชิ้นเนื้อเป็น small round blue cell ย้อม CK20 แบบ perinuclear dot → Merkel cell carcinoma มะเร็งหายากที่ดุ ต้องประเมิน sentinel lymph node"])

# ---------- 28 ----------
mk(Q, 28, [25, 's17'],
 stem="A 60-year-old Thai woman has chewed betel quid with slaked lime for 40 years and also dabs the lime paste onto minor skin wounds. Which mechanism links this habit to skin and lip cancer?",
 opts=["An inherited DNA repair defect","Ultraviolet A exposure","Oncogenic viral infection","Systemic immunosuppression","Chronic chemical irritation"],
 interp="หญิงเคี้ยวหมากกับปูนมา 40 ปีและเอาปูนทาแผล → เนื้อเยื่อสัมผัสสารเคมีด่างซ้ำ ๆ นานหลายสิบปี → ถามกลไกที่เชื่อมพฤติกรรมนี้กับมะเร็ง ต้องจัดเข้ากลุ่ม risk factor ที่ถูกต้องในรายการ คือ chemical exposure ที่ก่อ chronic irritation",
 why="Risk factors ของมะเร็งผิวหนังแบ่งเป็นกลุ่มที่ต้องจับคู่กับกลไกให้ถูก: <b>แสงแดด (UVB ทำลาย DNA โดยตรง)</b>, <b>รังสี</b>, <b>สารเคมี</b>, <b>การอักเสบเรื้อรัง</b>, <b>พันธุกรรม</b> (เช่น xeroderma pigmentosum ซ่อม DNA ไม่ได้) และ<b>ภาวะกดภูมิ</b> · หมากพลูประกอบด้วยหมาก (areca nut ซึ่งมี arecoline และ nitrosamine เฉพาะของหมาก) กับ<b>ปูน (calcium hydroxide)</b> ที่เป็นด่างแรง ปูนทำให้เยื่อบุและผิว<b>ระคายและบาดเจ็บซ้ำ ๆ</b> เพิ่มการสร้าง reactive oxygen species และช่วยให้สารก่อมะเร็งซึมผ่านได้ดี เมื่อเกิดซ้ำนานหลายสิบปี เซลล์ต้องแบ่งตัวซ่อมแซมตลอดจนสะสมการกลายพันธุ์และเกิด <b>SCC</b> — IARC จัดหมากพลูทั้งที่มีและไม่มียาสูบเป็น<b>สารก่อมะเร็งกลุ่ม 1</b> โดยเฉพาะมะเร็งช่องปาก · สารเคมีอีกตัวในกลุ่มเดียวกันคือ <b>arsenic</b> ที่ทำให้เกิด arsenical keratosis, Bowen's disease และ BCC หลายก้อนในที่ไม่ถูกแดด · ชีทหน้า 17 ก็ระบุ chronic irritation และการสูบบุหรี่เป็นปัจจัยเสี่ยงของ SCC · สไลด์หน้า 25 ลายมือ <b>“e.g. เอาปูนที่ใช้เคี้ยวหมากมากัดแผล → chronic irritation”</b> และ <b>“arsenic”</b>",
 wrong={
  "A":"DNA repair defect เป็นกลไกทางพันธุกรรมแต่กำเนิด เช่น xeroderma pigmentosum ที่ซ่อม DNA หลังถูก UV ไม่ได้ (nucleotide excision repair) จึงเกิดมะเร็งผิวหนังหลายชนิดตั้งแต่เด็ก ไม่ได้เกิดจากพฤติกรรมเคี้ยวหมาก · จะถูกถ้าเด็กชายอายุ 9 ปีที่ผิวไหม้แดดรุนแรงตั้งแต่ทารก มีกระเต็มหน้า และเป็น BCC กับ SCC หลายก้อนบนใบหน้าแล้ว",
  "B":"UVA ทำให้ผิวเหี่ยวแก่และมีส่วนในการก่อมะเร็งบ้าง แต่เป็นกลไกของแสง ไม่ใช่สารเคมีที่สัมผัสเนื้อเยื่อ ปูนกินหมากไม่ได้ปล่อยรังสีใด ๆ · จะถูกถ้าหญิงอายุ 45 ปีใช้เตียงอาบแดด (tanning bed) ซึ่งเป็นแหล่ง UVA เป็นหลัก สัปดาห์ละหลายครั้งมา 15 ปี แล้วเป็น melanoma",
  "C":"การติดเชื้อไวรัสก่อมะเร็งผิวหนังได้จริง เช่น HPV กับ SCC ที่อวัยวะเพศและรอบเล็บ, Merkel cell polyomavirus และ HHV-8 กับ Kaposi sarcoma แต่ปูนและหมากไม่ได้นำเชื้อ · จะถูกถ้าชายที่มีคู่นอนหลายคนโดยไม่ป้องกัน ติด HPV ชนิดเสี่ยงสูง แล้วเกิด SCC in situ ที่องคชาตและรอบทวารหนัก",
  "D":"ภาวะกดภูมิเพิ่มมะเร็งผิวหนังโดยเฉพาะ SCC เพราะร่างกายกำจัดเซลล์ผิดปกติและไวรัสได้น้อยลง แต่เป็นภาวะทั้งร่างกายจากยาหรือโรค ไม่ใช่ผลเฉพาะที่ของสารที่ป้ายบนแผล · จะถูกถ้าหญิงที่ได้รับไตปลูกถ่ายและกิน tacrolimus กับ mycophenolate มา 12 ปี เกิด SCC หลายก้อนบนหลังมือและใบหน้า"},
 trap="รู้ว่าหมากพลูก่อมะเร็งแต่ไม่แน่ใจกลไก แล้วเลือก viral infection หรือ immunosuppression เพราะคิดว่าเป็นปัจจัยเรื้อรัง — ต้องจับคู่ตาม risk factor ในรายการ: ปูนเป็นสารเคมีที่ระคายเนื้อเยื่อซ้ำ ๆ จึงเป็น chemical exposure ที่ก่อ chronic irritation",
 summary=[
  "ปูนเคี้ยวหมากทาแผล = <b>chemical exposure → chronic irritation</b> (ลายมือสไลด์หน้า 25)",
  "Risk factors หน้า 25: sun exposure (UV) · radiation · chemical · chronic inflammation (wear &amp; tear) · genetic · xeroderma pigmentosum · immunosuppression",
  "กลไก chronic irritation: บาดเจ็บซ้ำ → เซลล์แบ่งตัวซ่อมแซมต่อเนื่อง → สะสมการกลายพันธุ์ → SCC",
  "หมากพลู: areca nut + ปูนด่าง (calcium hydroxide) · IARC กลุ่ม 1 · มะเร็งช่องปากชนิด SCC โดยเฉพาะกระพุ้งแก้มและริมฝีปาก",
  "สารเคมีอีกตัวในลายมือ: arsenic → keratosis ที่ฝ่ามือฝ่าเท้า · Bowen หลายรอย · BCC ในที่ไม่ถูกแดด",
  "ชีทหน้า 17: SCC ปัจจัยเสี่ยง UVB · รังสี · AK · บุหรี่ · chronic irritation · ภูมิบกพร่อง · papillomavirus"],
 opinion="เห็นด้วยกับคำตอบ E ความมั่นใจสูง — ลายมือสไลด์หน้า 25 ใช้ปูนเคี้ยวหมากเป็นตัวอย่างของ chemical exposure ที่ทำให้เกิด chronic irritation ตรงตัว (ลายมือเขียนว่า มากัดแผล ซึ่งน่าจะหมายถึงเอามาทาแผล) · เสริมจากหลักฐานปัจจุบัน: IARC Monograph เล่ม 85 (2004) และเล่ม 100E (2012) จัดหมากพลูเป็นสารก่อมะเร็งกลุ่ม 1 ซึ่งกลไกไม่ได้มีแค่การระคายจากปูน แต่รวมสารก่อมะเร็งในหมากเองด้วย (arecoline และ nitrosamine เฉพาะของหมาก) และมะเร็งที่หลักฐานชัดที่สุดคือมะเร็งช่องปากมากกว่ามะเร็งผิวหนัง · ในบริบทผิวหนัง คำตอบ chronic irritation จึงถูกแต่เป็นภาพที่แคบกว่าความจริง",
 mnemonic="<b>'ปูน-หมาก-สารหนู = Chemical · แผลเรื้อรัง = Chronic inflammation · ยากดภูมิ = Immuno'</b>",
 guide="IARC Monographs Vol. 85 (2004) Betel-quid and areca-nut chewing and some areca-nut-derived nitrosamines; IARC Monographs Vol. 100E (2012) Personal habits and indoor combustions; Sabiston Textbook of Surgery 21st ed. (2022)",
 variants=[
  "ชายอายุ 60 ปีเคยฉายรังสีที่หนังศีรษะเพื่อรักษากลากตอนเด็ก ตอนนี้มี BCC หลายก้อนเฉพาะในบริเวณที่ฉาย → risk factor กลุ่ม radiation",
  "คนงานที่สัมผัส coal tar และน้ำมันแร่ตลอดหลายสิบปี เกิด SCC ที่ผิวถุงอัณฑะ → chemical carcinogen แบบเดียวกับมะเร็งของคนกวาดปล่องไฟในอดีต",
  "หญิงมีแผลกดทับเรื้อรังที่ก้นกบไม่หายมา 15 ปี ขอบแผลเริ่มนูนแข็ง → Marjolin ulcer จาก chronic inflammation (wear &amp; tear) ต้อง biopsy"])

# ---------- 29 ----------
mk(Q, 29, [25, 's17'],
 stem="A 50-year-old kidney transplant recipient taking tacrolimus and mycophenolate has a small, painless leg ulcer that has not healed after 4 weeks of proper dressings. What is the most appropriate next step?",
 opts=["Apply a potent topical steroid","Below-knee amputation","Continue dressings for another 6 months","Biopsy to exclude skin cancer","Stop all immunosuppressive drugs"],
 interp="ผู้รับไตที่กินยากดภูมิมีแผลเล็กที่ขาไม่หายหลังทำแผลถูกวิธี 4 สัปดาห์ → แผลไม่หายตามคาดในผู้ที่เสี่ยงมะเร็งผิวหนังสูง → ถามขั้นต่อไป ต้องใช้หลักว่าแผลเรื้อรังที่ไม่หายต้องพิสูจน์ว่าไม่ใช่มะเร็งก่อนรักษาต่อ",
 why="ผู้รับอวัยวะปลูกถ่ายที่ใช้ยากดภูมิระยะยาวเสี่ยง<b>มะเร็งผิวหนังสูงกว่าคนทั่วไปมาก โดยเฉพาะ SCC ที่เพิ่มขึ้นหลายสิบเท่า</b> เพราะ immune surveillance ลดลง ร่วมกับผลของยาบางตัว (azathioprine เพิ่มความไวต่อ UVA) และไวรัส HPV · มะเร็งในกลุ่มนี้<b>โตเร็ว ดุกว่า และกระจายบ่อยกว่า</b> และอาจแสดงเป็นแผลเล็ก ๆ ที่ดูเหมือนแผลธรรมดา · หลักคือ<b>แผลที่ไม่หายตามเวลาที่ควรหาย ทั้งที่ดูแลแผลถูกต้องแล้ว ต้อง biopsy</b> (ลายมือให้ 3–4 สัปดาห์ในผู้กดภูมิ) โดยตัดชิ้นเนื้อจากขอบแผลรวมผิวปกติและฐานแผล หลายตำแหน่งถ้าแผลใหญ่ เพื่อแยก SCC, BCC และ Marjolin ulcer รวมทั้งการติดเชื้อลึกหรือ vasculitis · ถ้าผลเป็นมะเร็งจึงวางแผนตัดด้วยขอบตามชนิด ปรึกษาทีมปลูกถ่ายเพื่อลดยากดภูมิหรือเปลี่ยน calcineurin inhibitor เป็น <b>mTOR inhibitor (sirolimus)</b> ซึ่งลดการเกิด SCC ใหม่ และตรวจผิวหนังทั้งตัวเป็นระยะ · สไลด์หน้า 25 ลายมือ <b>“→ ต้องระวังถ้าคนไข้เป็นแผล 3-4 wk แล้วไม่หาย → ลอง bx ดู skin cancer”</b>",
 wrong={
  "A":"Steroid ทาแรงเป็นการรักษาแผลจากการอักเสบของภูมิคุ้มกัน เช่น pyoderma gangrenosum แต่ถ้าแผลเป็นมะเร็งหรือติดเชื้อจะทำให้วินิจฉัยช้าและแย่ลง จึงไม่ใช่ขั้นแรกในแผลที่ยังไม่รู้สาเหตุ · จะถูกถ้าหญิงอายุ 40 ปีเป็น ulcerative colitis มีแผลที่หน้าแข้งขยายเร็ว เจ็บมาก ขอบม่วงเซาะใต้ผิว ผลชิ้นเนื้อเข้าได้กับ pyoderma gangrenosum และตรวจไม่พบเชื้อหรือมะเร็ง",
  "B":"การตัดขาเป็นการรักษาสุดท้ายของโรคที่ลุกลามจนเก็บขาไม่ได้ ไม่ใช่ขั้นแรกของแผลเล็กที่ยังไม่มีการวินิจฉัย · จะถูกถ้าชายอายุ 65 ปีมีแผลเรื้อรังที่หน้าแข้งซึ่งผลชิ้นเนื้อเป็น SCC ลุกลามเข้ากระดูก tibia และรอบมัดเส้นเลือดใหญ่ จนการตัดเฉพาะที่จะเหลือขาที่ใช้งานไม่ได้",
  "C":"การทำแผลต่อเหมาะกับแผลที่รู้สาเหตุและกำลังดีขึ้นตามคาด การรออีก 6 เดือนในผู้กดภูมิทำให้มะเร็งที่ซ่อนอยู่โตและกระจายได้ · จะถูกถ้าหญิงอายุ 55 ปีภูมิคุ้มกันปกติมี venous ulcer ที่ขาซึ่ง ABI ปกติ ได้ compression แล้วแผลเล็กลงต่อเนื่องทุกสัปดาห์ตามคาด",
  "E":"การหยุดยากดภูมิทั้งหมดเสี่ยงไตที่ปลูกถ่ายถูกปฏิเสธ และยังไม่มีการวินิจฉัยว่าเป็นมะเร็ง การลดหรือเปลี่ยนยาจะพิจารณาหลังได้ผลชิ้นเนื้อร่วมกับทีมปลูกถ่าย · จะถูกถ้าผู้รับไตมี Merkel cell carcinoma หรือ SCC ที่แพร่กระจายคุกคามชีวิต ซึ่งยอมหยุดยากดภูมิแล้วกลับไปฟอกไตเพื่อให้ภูมิคุ้มกันช่วยคุมมะเร็ง"},
 trap="แผลเล็ก ไม่เจ็บ และผู้ป่วยมีเหตุให้แผลหายช้าอยู่แล้วจากยากดภูมิ ทำให้คิดว่าแค่ต้องรอนานขึ้น — แต่ยากดภูมิเป็นเหตุให้ต้องสงสัยมะเร็งเร็วขึ้น ไม่ใช่เหตุให้รอ ตัวแยกคือแผลไม่หายตามเวลาทั้งที่ดูแลถูก → biopsy",
 summary=[
  "ผู้กดภูมิมีแผลไม่หาย <b>3–4 สัปดาห์ → biopsy หามะเร็งผิวหนัง</b> (ลายมือสไลด์หน้า 25)",
  "ผู้รับอวัยวะปลูกถ่าย: SCC เพิ่มหลายสิบเท่า สัดส่วนกลับเป็น SCC มากกว่า BCC · มะเร็งโตเร็วและกระจายบ่อยกว่า",
  "Biopsy แผลเรื้อรัง: ตัดจากขอบแผลรวมผิวปกติและฐานแผล · แผลใหญ่ตัดหลายจุด",
  "แผลเรื้อรังที่ต้องคิดถึงมะเร็ง: ขอบนูนแข็ง ม้วนออก เลือดออกง่าย ฐานมีเนื้องอกงอก หรือแผลเป็นเก่ากลายเป็นแผล (Marjolin)",
  "หลังยืนยันมะเร็ง: ตัดตามขอบของชนิดนั้น · ทีมปลูกถ่ายพิจารณาปรับยากดภูมิ",
  "ป้องกัน: กันแดดเคร่งครัด ตรวจผิวหนังทั้งตัวเป็นระยะ รักษา AK เชิงรุก · ชีทหน้า 17: ภูมิบกพร่องเป็นปัจจัยเสี่ยง SCC"],
 opinion="เห็นด้วยกับคำตอบ D ความมั่นใจสูง — ลายมือสไลด์หน้า 25 เขียนตรงตัวว่าแผล 3–4 สัปดาห์ไม่หายในผู้กดภูมิให้ biopsy และชีทหน้า 17 ระบุภูมิคุ้มกันบกพร่องเป็นปัจจัยเสี่ยงของ SCC · ตัวเลข 3–4 สัปดาห์เป็นเกณฑ์ที่เข้มกว่าแผลเรื้อรังทั่วไป ซึ่งตำรามักใช้แผลไม่ดีขึ้นใน 4–6 สัปดาห์หรือไม่หายใน 3 เดือน เกณฑ์ที่เข้มกว่านี้เหมาะกับผู้กดภูมิที่มะเร็งโตเร็ว · แนวทาง KDIGO 2009 สำหรับผู้รับไตแนะนำให้ตรวจผิวหนังทั้งตัวเป็นประจำ และการศึกษาแบบสุ่มใน NEJM 2012 สนับสนุนการเปลี่ยนเป็น sirolimus หลังเกิด SCC ครั้งแรก",
 mnemonic="<b>'ภูมิต่ำ + แผลไม่หาย 3–4 สัปดาห์ = Biopsy ก่อนทำแผลต่อ'</b>",
 guide="KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients (2009); NCCN Guidelines Squamous Cell Skin Cancer 2025; Euvrard S et al. Sirolimus and secondary skin-cancer prevention in kidney transplantation, N Engl J Med 2012",
 variants=[
  "หญิงกิน prednisolone ขนาดสูงจาก SLE มีแผลถลอกที่แขนหายสนิทใน 10 วัน → ไม่ต้อง biopsy เพราะแผลหายตามเวลา",
  "ผู้รับไตกิน azathioprine มา 20 ปี เกิด SCC ครั้งแรกที่หลังมือ ตัดออกขอบสะอาดแล้ว → ปรึกษาทีมปลูกถ่ายเปลี่ยนเป็น sirolimus เพื่อลด SCC ก้อนใหม่ และนัดตรวจผิวทุก 3–6 เดือน",
  "ชายติดเชื้อ HIV ที่ CD4 ต่ำ มีก้อนเนื้อเลือดออกง่ายรอบทวารหนักโตขึ้นใน 2 เดือน → biopsy แยก SCC จาก HPV ไม่รักษาเป็นหูดหรือริดสีดวงไปเรื่อย ๆ"])

# ---------- 30 ----------
mk(Q, 30, [25, 's2', 's16'],
 stem="A lifeguard asks which part of sunlight mainly causes skin cancer and which mainly causes wrinkling. What is correct?",
 opts=["Infrared radiation mainly causes skin cancer","UVB mainly causes cancer, whereas UVA mainly causes wrinkling","Neither UVA nor UVB contributes to skin cancer","UVA mainly causes cancer, whereas UVB mainly causes photoaging","Visible light mainly causes skin cancer"],
 interp="ไลฟ์การ์ดที่ตากแดดมาก ถามว่าแสงส่วนใดก่อมะเร็งและส่วนใดทำให้ผิวเหี่ยว → ถามการจับคู่ช่วงคลื่น UV กับผลต่อผิว ต้องรู้ว่า UVB พลังงานสูงทำลาย DNA ใน epidermis โดยตรง ส่วน UVA ทะลุลึกถึง dermis ทำลายคอลลาเจน",
 why="แสง UV ที่ถึงพื้นโลกมี 2 ช่วงหลัก: <b>UVB (280–315 nm)</b> พลังงานสูง ดูดกลืนในชั้น <b>epidermis</b> ทำลาย DNA โดยตรงเกิด <b>cyclobutane pyrimidine dimer</b> และการกลายพันธุ์แบบ C→T ที่เป็น UV signature ใน <b>p53</b> → เป็นตัวหลักของ <b>sunburn, AK, BCC และ SCC</b> · <b>UVA (315–400 nm)</b> มีปริมาณมากกว่าและ<b>ทะลุลึกถึง dermis</b> ผ่านกระจกได้ ก่อ reactive oxygen species กระตุ้น matrix metalloproteinase ย่อยคอลลาเจนและ elastin → <b>photoaging</b>: ริ้วรอย ผิวหยาบ หย่อน กระแดด (ปัจจุบันรู้ว่า UVA ก็มีส่วนก่อมะเร็งทางอ้อมด้วย) · ครีมกันแดดจึงต้องเป็น <b>broad-spectrum</b>: <b>SPF วัดการกัน UVB</b> ส่วนการกัน UVA ดูจาก PA หรือฉลาก broad-spectrum · Infrared ให้ความร้อน และแสงที่ตามองเห็นทำให้ผิวคล้ำขึ้นในคนผิวเข้ม แต่ไม่ใช่ตัวก่อมะเร็งหลัก · ชีทหน้า 2 สรุปว่า UVB ทำลายผิวมากกว่าโดยกด tumor suppressor gene และชีทหน้า 16 ระบุว่า BCC เกิดจากแสงแดดโดยเฉพาะ UVB เป็นเวลานาน · สไลด์หน้า 25 ลายมือ <b>“UV A = เหี่ยว”</b> และ <b>“UV B = skin cancer”</b>",
 wrong={
  "A":"Infrared คือคลื่นความร้อน พลังงานต่ำเกินกว่าจะทำลาย DNA โดยตรง ผลหลักคือความร้อนและอาจมีส่วนในการแก่ของผิว ไม่ใช่ตัวก่อมะเร็งหลัก · ไม่มีสถานการณ์ใดที่ infrared เป็นตัวก่อมะเร็งผิวหนังหลักของแสงแดด เพราะมะเร็งจากแสงแดดเกิดจากพลังงานของ UV ที่ทำลาย DNA แม้ความร้อนเรื้อรังจากเตาจะทำให้เกิด erythema ab igne ที่เสี่ยง SCC ได้น้อยมาก ก็ไม่ใช่กลไกของแสงแดด",
  "C":"ข้อความนี้ขัดกับข้อมูลที่ชัดที่สุดเรื่องสาเหตุมะเร็งผิวหนัง — sun exposure เป็น risk factor แรกในรายการ และรังสี UV ถูก IARC จัดเป็นสารก่อมะเร็งกลุ่ม 1 · ไม่มีสถานการณ์ใดที่สรุปได้ว่าทั้ง UVA และ UVB ไม่ก่อมะเร็งผิวหนัง เพราะ UVB ทำลาย DNA โดยตรงและ UVA ก่อความเสียหายผ่าน reactive oxygen species",
  "D":"ช้อยนี้สลับบทบาทกัน: UVA ทะลุลึกถึง dermis จึงเป็นตัวหลักของริ้วรอยและผิวแก่ ส่วน UVB พลังงานสูงทำลาย DNA ใน epidermis จึงเป็นตัวหลักของมะเร็ง · ไม่มีสถานการณ์ใดที่ UVA เป็นตัวหลักของมะเร็งผิวหนังโดยรวมและ UVB เป็นตัวหลักของ photoaging เพราะเป็นคุณสมบัติทางฟิสิกส์ของช่วงคลื่น แม้ในผู้ใช้เตียงอาบแดดที่ UVA มีบทบาทต่อ melanoma มากขึ้น UVB ก็ไม่กลายเป็นตัวหลักของผิวเหี่ยว",
  "E":"แสงที่ตามองเห็น (400–700 nm) มีพลังงานต่ำกว่า UV ไม่ทำลาย DNA โดยตรง ผลที่พบคือกระตุ้นการสร้างเม็ดสีและทำให้ฝ้าแย่ลงในคนผิวเข้ม · ไม่มีสถานการณ์ใดที่แสงที่ตามองเห็นเป็นตัวหลักของมะเร็งผิวหนัง เพราะพลังงานไม่พอทำให้เกิด pyrimidine dimer ซึ่งเป็นกลไกหลักของมะเร็งจากแสงแดด"},
 trap="ตัวอักษร A กับ B สลับกันง่าย และ UVA มีปริมาณมากกว่าจึงคิดว่าน่าจะอันตรายกว่า — จำว่า A = Aging (ทะลุลึกถึง dermis) · B = Burning (ทำลาย DNA ใน epidermis ทำให้ไหม้และเป็นมะเร็ง)",
 summary=[
  "<b>UVB = skin cancer · UVA = เหี่ยว</b> (ลายมือสไลด์หน้า 25)",
  "UVB 280–315 nm: ดูดกลืนใน epidermis · ทำลาย DNA โดยตรง (pyrimidine dimer, p53) · sunburn, AK, BCC, SCC",
  "UVA 315–400 nm: ทะลุถึง dermis และผ่านกระจก · ROS + MMP ย่อยคอลลาเจน → ริ้วรอย ผิวหย่อน · มีส่วนก่อมะเร็งทางอ้อม",
  "ชีทหน้า 2: UVB ทำลายผิวมากกว่า โดยกด tumor suppressor genes · melanocyte สร้าง melanin ป้องกัน UV",
  "ชีทหน้า 16: BCC เกิดจากแสงแดดโดยเฉพาะ UVB เป็นเวลานาน",
  "ป้องกัน: เลี่ยงแดดช่วง 10.00–16.00 น. ใช้เสื้อผ้าและหมวก ครีมกันแดด broad-spectrum ทาซ้ำทุก 2 ชั่วโมงและหลังลงน้ำ"],
 opinion="เห็นด้วยกับคำตอบ B ความมั่นใจสูงในฐานะการแบ่งบทบาทหลัก — ลายมือสไลด์หน้า 25 และชีทหน้า 2, 16 ตรงกัน · จุดที่สไลด์ทำให้ง่ายเกินจริง: การแบ่ง UVA = เหี่ยว อาจทำให้เข้าใจว่า UVA ไม่ก่อมะเร็ง แต่ IARC Monograph เล่ม 100D (2012) จัดรังสี UV ทุกช่วง รวมถึงเตียงอาบแดดที่ปล่อย UVA เป็นหลัก เป็นสารก่อมะเร็งกลุ่ม 1 และ UVA มีส่วนต่อ melanoma และการกดภูมิในผิว · ในทางปฏิบัติจึงต้องแนะนำครีมกันแดด broad-spectrum ไม่ใช่กันแค่ UVB",
 mnemonic="<b>'UVA = Aging · UVB = Burning (และ Bad cancer)'</b>",
 guide="IARC Monographs Vol. 100D (2012) Radiation — solar and ultraviolet radiation; Fitzpatrick's Dermatology 9th ed. (2019) — Photobiology and photocarcinogenesis",
 variants=[
  "หญิงขับรถทุกวันมีริ้วรอยและกระแดดหนาเฉพาะใบหน้าซีกที่ติดหน้าต่างรถ → UVA ทะลุกระจกรถได้ ส่วน UVB ถูกกระจกกั้นเกือบหมด",
  "ผู้ปกครองถามว่าค่า SPF บนครีมกันแดดบอกอะไร → บอกการป้องกัน UVB ที่ทำให้ผิวไหม้ ส่วนการกัน UVA ต้องดูคำว่า broad-spectrum หรือค่า PA",
  "ชายผิวขาวถูกแดดเผาจนพองหลายครั้งในวัยเด็กจากการเที่ยวทะเลเป็นครั้งคราว → เสี่ยง melanoma และ BCC มากกว่า ส่วนการตากแดดสะสมสม่ำเสมอตลอดชีวิตสัมพันธ์กับ SCC มากกว่า"])

save(Q, 'parts/fill/l22_r03.json')

import sys; sys.path.insert(0,'/home/claude/ac-mdcu/parts')
from l22_common import mk, save
Q={}

mk(Q, 71, [17, 19, 's15'],
 stem="A 35-year-old woman has a warm, pulsatile swelling of the hand that has been present since childhood and enlarged during puberty and again in pregnancy. A thrill is palpable. Which statement about this lesion is correct?",
 opts=["It is a lymphatic malformation of the subcutaneous tissue","It is an infantile hemangioma that will involute after pregnancy","It is a pyogenic granuloma that will regress after delivery","It is a high-flow malformation that will not involute","It is a low-flow capillary malformation of the dermis"],
 interp="หญิงอายุ 35 ปี ก้อนหลอดเลือดที่มือ<b>มีมาตั้งแต่เด็ก</b> โตขึ้นช่วงวัยรุ่นและตั้งครรภ์ อุ่น เต้นได้ และ<b>คลำได้ thrill</b> → เป็น high-flow vascular malformation (AVM) · ถามข้อความที่ถูก ต้องใช้หลักแยก tumor กับ malformation จากประวัติการโตและการยุบ และแยก high-flow กับ low-flow จากการคลำ",
 why="Vascular anomaly แบ่งตาม ISSVA เป็น <b>vascular tumor</b> เช่น infantile hemangioma ซึ่งเซลล์แบ่งตัว โตเร็วในขวบปีแรกแล้วยุบ กับ <b>vascular malformation</b> ซึ่งเป็นความผิดปกติเชิงโครงสร้างที่เกิดตั้งแต่ตัวอ่อน เซลล์ไม่แบ่งตัว <b>โตตามสัดส่วนร่างกายและไม่ยุบเอง</b> · malformation แยกต่อด้วยการไหล: <b>low-flow</b> (capillary, venous, lymphatic) คลำไม่ได้ชีพจร กับ <b>high-flow</b> คือ <b>arteriovenous malformation</b> ที่มี nidus เชื่อมแดงกับดำโดยไม่ผ่าน capillary จึง<b>อุ่น เต้น คลำได้ thrill ฟังได้ bruit</b> · AVM มักเงียบในวัยเด็กแล้วโตขึ้นเมื่อมีตัวกระตุ้น ได้แก่ <b>วัยรุ่น ตั้งครรภ์ การบาดเจ็บ หรือการผ่าตัดและผูกหลอดเลือดไม่ครบ</b> และดำเนินโรคตาม <b>Schobinger</b>: I เงียบ (อุ่น แดง) → II ขยาย (thrill, bruit) → III ทำลาย (ปวด แผล เลือดออก) → IV หัวใจล้มเหลวจาก high output · ยืนยันด้วย Doppler ultrasound แล้ว MRI/MRA หรือ angiography วางแผน รักษาด้วย embolization ตามด้วยตัดออก ไม่ผูกหลอดเลือดต้นทางเพราะกระตุ้นให้โตเร็วขึ้น · สไลด์หน้า 19 ลายมือ <b>“คลำได้ pulse / thrills / bruit → arterial malformation”</b> และตัวพิมพ์ <b>“Never involute”</b>",
 wrong={
  "A":"Lymphatic malformation เป็น malformation ชนิด <b>low-flow</b> ก้อนนุ่ม สีผิวปกติ ส่องไฟทะลุได้ในชนิด macrocystic คลำไม่ได้ thrill และมักโตขึ้นชั่วคราวเมื่อมีการติดเชื้อหรือเลือดออกในถุง ไม่ใช่ก้อนที่อุ่นและเต้น · จะถูกถ้าเด็กอายุ 2 ปีมีก้อนนุ่มสีผิวปกติที่คอด้านข้าง ส่องไฟทะลุ ไม่มี thrill และบวมขึ้นทุกครั้งที่เป็นหวัด",
  "B":"Infantile hemangioma เป็นเนื้องอกที่ปรากฏหลังคลอดไม่กี่สัปดาห์ โตเร็วในขวบปีแรก แล้วยุบช้า ๆ จนส่วนใหญ่เสร็จในวัยเด็ก ไม่เหลือเป็นก้อนที่ยังโตในวัยผู้ใหญ่ · ไม่มีสถานการณ์ใดที่ infantile hemangioma ในผู้ใหญ่จะยุบหลังการตั้งครรภ์ เพราะการยุบของ hemangioma เป็นไปตามอายุเด็กในระยะ involution หลังขวบปีแรก ไม่ขึ้นกับฮอร์โมนการตั้งครรภ์",
  "C":"Pyogenic granuloma (lobular capillary hemangioma) เป็นก้อนแดงเปราะ เลือดออกง่าย <b>เกิดขึ้นใหม่</b>ในไม่กี่สัปดาห์ ชนิดที่เกิดระหว่างตั้งครรภ์ (granuloma gravidarum) มักยุบหลังคลอด แต่ไม่ได้มีมาตั้งแต่เด็กและไม่มี thrill · จะถูกถ้าหญิงตั้งครรภ์ 28 สัปดาห์มีก้อนแดงสดเลือดออกง่ายที่เหงือกซึ่งเพิ่งขึ้นเมื่อเดือนก่อน",
  "E":"Capillary malformation (port-wine stain) เป็น low-flow ในชั้น dermis ลักษณะ<b>ปื้นแดงแบน</b>มีตั้งแต่เกิด โตตามตัว เข้มและหนาขึ้นตามอายุ ไม่อุ่น ไม่เต้น ไม่มี thrill รักษาด้วย pulsed dye laser · จะถูกถ้าชายอายุ 30 ปีมีปื้นแดงเข้มแบนที่แก้มมาตั้งแต่เกิด ค่อย ๆ หนาเป็นตุ่มนูนตามอายุ และคลำไม่พบ thrill"},
 trap="ประวัติ<b>โตขึ้นช่วงตั้งครรภ์</b>ชวนให้คิดถึงรอยโรคที่จะยุบหลังคลอด และคำว่าหลอดเลือดชวนให้ตอบ hemangioma — ตัวแยกคือ มีตั้งแต่เด็ก + ไม่เคยยุบ = malformation และ <b>thrill</b> = high-flow · hemangioma ไม่เหลือโตในผู้ใหญ่ ส่วน pyogenic granuloma ต้องเป็นก้อนที่เพิ่งเกิด",
 summary=[
  "Thrill, bruit หรือชีพจร + มีตั้งแต่เด็ก = <b>high-flow AVM</b> · malformation ทุกชนิด <b>never involute</b>",
  "Tumor vs malformation: hemangioma โตเร็วขวบปีแรกแล้วยุบ · malformation โตตามตัว ไม่มีช่วงโตเร็ว ไม่หายเอง (ลายมือหน้า 17)",
  "Low-flow แยกจากสี (ลายมือหน้า 19): venous ม่วงน้ำเงิน · capillary แดงเข้ม · lymphatic สีผิวปกติ",
  "ตัวกระตุ้น AVM ให้โต: วัยรุ่น ตั้งครรภ์ บาดเจ็บ ผ่าตัดไม่ครบ หรือผูกหลอดเลือดต้นทาง",
  "Schobinger: I เงียบ → II ขยาย (thrill, bruit) → III ทำลาย (ปวด แผล เลือดออก) → IV หัวใจล้มเหลวแบบ high output",
  "สืบค้น: Doppler ultrasound แยก high กับ low flow → MRI/MRA หรือ angiography วางแผน · รักษา: embolization แล้วตัดออกภายในไม่กี่วัน"],
 opinion="เห็นด้วยกับคำตอบ D ความมั่นใจสูง — มีตั้งแต่เด็ก โตตามตัวและตามฮอร์โมน ร่วมกับ thrill ตรงกับ AVM ที่สไลด์หน้า 19 ระบุว่า never involute · ลายมือหน้า 19 ใช้คำว่า “arterial malformation” ซึ่ง ISSVA 2018 เรียกให้ถูกว่า arteriovenous malformation (high-flow) · ชีทหน้า 15 เขียนว่าการรักษาที่ดีที่สุดคือตัดออกให้หมดและใช้ embolization ลดเลือดก่อน ซึ่งสอดคล้องแนวปัจจุบัน แต่ควรเสริมว่าห้ามผูกหลอดเลือดต้นทางหรือ embolize เฉพาะ feeder ไกลจาก nidus เพราะ collateral จะทำให้ก้อนโตเร็วขึ้นและปิดทางเข้าสำหรับ embolization ครั้งต่อไป",
 mnemonic="<b>“เต้นได้ ไม่เคยยุบ = AVM” · Thrill = High flow</b>",
 guide="ISSVA Classification for Vascular Anomalies (2018); Mulliken and Young's Vascular Anomalies: Hemangiomas and Malformations 2nd ed. (2013); Sabiston Textbook of Surgery 21st ed. (2022) — Skin and subcutaneous tissue",
 variants=[
  "AVM ที่ใบหูเคยถูกผูก external carotid artery แล้วก้อนกลับโตเร็วกว่าเดิม → collateral จากการผูกต้นทาง ต้อง embolize ตรง nidus ผ่านทางอื่นแล้วตัดออก",
  "ชายมี AVM ขนาดใหญ่ที่ต้นขา เหนื่อยง่าย ชีพจรเร็ว ขาบวม → high-output cardiac failure (Schobinger IV) ต้องลดการไหลผ่าน nidus",
  "ทารกมีปื้นแดงแบนบนหน้าผากและเปลือกตาบนตามแนว V1 ร่วมกับชัก → Sturge-Weber syndrome ตรวจ MRI สมองและวัดความดันตาหา glaucoma",
  "AVM ที่นิ้วมือมีปลายนิ้วซีดเย็นและแผลไม่หาย → steal phenomenon จากเลือดลัดผ่าน nidus (Schobinger III) ต้องรักษาเชิงรุก"])

mk(Q, 72, [20, 21, 23, 's12'],
 stem="A 65-year-old man has a rough, scaly patch on his sun-damaged forehead and a slowly enlarging, well-demarcated red scaly plaque on the shin. Biopsy of the shin plaque shows full-thickness keratinocyte atypia. Which statement is correct?",
 opts=["Both progress to basal cell carcinoma","Both arise from melanocytes and may become melanoma","Only the forehead patch is premalignant","Both may progress to squamous cell carcinoma","Both are benign keratoses requiring no treatment"],
 interp="ปื้นสากมีขุยบนหน้าผากที่ถูกแดดนาน = <b>actinic keratosis</b> · ปื้นแดงขอบชัดมีขุยที่หน้าแข้ง biopsy พบ atypia เต็มความหนา epidermis = <b>Bowen's disease (SCC in situ)</b> → ถามว่าสองรอยโรคเสี่ยงกลายเป็นอะไร ต้องรู้ว่าทั้งคู่เป็น dysplasia ของ keratinocyte",
 why="ทั้งสองรอยโรคเป็นความผิดปกติของ <b>keratinocyte</b> ในแนวเดียวกันที่นำไปสู่ <b>squamous cell carcinoma</b>: <b>actinic keratosis</b> มี atypia เฉพาะชั้นล่างของ epidermis เกิดจาก UVB สะสมบนผิวที่ถูกแดด เป็น premalignant lesion ที่พบบ่อยที่สุด ความเสี่ยงต่อรอยโรคต่อปีต่ำ แต่ SCC ส่วนใหญ่เกิดในหรือติดกับ AK และผู้ที่มี AK หลายจุดมีความเสี่ยงสะสมสูง · <b>Bowen's disease</b> มี atypia <b>เต็มความหนา</b> epidermis แต่ยังไม่ทะลุ basement membrane จึงเป็น SCC in situ ราว 3–5% ลุกลามเป็น invasive SCC เกิดได้ทั้งผิวถูกแดดและไม่ถูกแดด เช่น ขาของผู้สูงอายุ สารหนู HPV · รักษา AK ด้วย cryotherapy, 5-FU, imiquimod หรือ PDT ส่วน Bowen ใช้ 5-FU, imiquimod, PDT, curettage หรือ excision ไม่ต้องขอบกว้าง และ biopsy เมื่อรอยโรคหนา เจ็บ หรือโตเร็วเพื่อหา invasion · สไลด์หน้า 21 ลายมือ <b>“เสี่ยง squamous cell carcinoma”</b> และหน้า 23 ลายมือ <b>“= m/c premalignant lesion”</b> · <b>“เสี่ยง squamous cell CA”</b>",
 wrong={
  "A":"BCC เกิดจากเซลล์ที่ hair follicle และ basal layer มักเกิดขึ้นเองโดยไม่ผ่านรอยโรคนำแบบเป็นขั้นตอน ส่วน AK และ Bowen เป็น dysplasia ของ keratinocyte ที่ดำเนินไปเป็น SCC · ไม่มีสถานการณ์ใดที่ AK และ Bowen's disease เป็นรอยโรคนำของ BCC ร่วมกัน เพราะเส้นทางไปสู่มะเร็งของทั้งคู่คือ squamous ไม่ใช่ basaloid",
  "B":"Melanoma มาจาก melanocyte รอยโรคนำคือ dysplastic nevus, congenital melanocytic nevus และ lentigo maligna ไม่ใช่รอยโรคของ keratinocyte อย่าง AK หรือ Bowen · จะถูกถ้าชายอายุ 70 ปีมีปื้นน้ำตาลขอบไม่ชัดค่อย ๆ ขยายบนแก้ม (lentigo maligna) ร่วมกับไฝรูปร่างไม่สมมาตรขนาด 9 mm ที่หลัง (dysplastic nevus)",
  "C":"ปื้นที่หน้าแข้งมี atypia เต็มความหนาคือ SCC in situ ซึ่งเป็นมะเร็งระยะเริ่มต้นและลุกลามได้ จึงไม่ใช่รอยโรคธรรมดา ทั้งสองจุดต้องรักษาและติดตาม · จะถูกถ้าชายอายุ 65 ปีมี AK บนหน้าผาก ร่วมกับตุ่มน้ำตาลผิวขรุขระเหมือนแปะติดบนหน้าแข้งที่เป็น seborrheic keratosis ซึ่งเป็น benign",
  "E":"การเรียกทั้งสองว่า benign เป็นการสับสนกับ seborrheic keratosis ซึ่งเป็นเนื้องอกผิวที่พบบ่อยที่สุดและไม่กลายเป็นมะเร็ง ลายมือหน้า 23 จึงเขียน cf. ไว้เทียบกับ AK · จะถูกถ้าหญิงอายุ 60 ปีมีตุ่มสีน้ำตาลถึงดำผิวขรุขระขอบชัดหลายตุ่มบนหลัง เหมือนแปะติดผิว และไม่เปลี่ยนแปลงมาหลายปี"},
 trap="ปื้นที่ขาไม่ได้อยู่ในบริเวณถูกแดดชัดเจน จึงชวนให้คิดว่าไม่ใช่รอยโรคนำของมะเร็ง หรือเห็นคำว่า keratosis แล้วนึกถึง seborrheic keratosis ที่ benign — หลักแยก: actinic keratosis และ Bowen ล้วนเป็น <b>dysplasia ของ keratinocyte → SCC</b> ส่วน seborrheic keratosis เป็น benign",
 summary=[
  "AK + Bowen's disease = รอยโรคนำของ <b>SCC</b> ทั้งคู่ (ลายมือหน้า 21, 23)",
  "AK: atypia ชั้นล่างของ epidermis บนผิวถูกแดด · premalignant lesion ที่พบบ่อยที่สุด · ปื้นสากเหมือนกระดาษทราย",
  "Bowen's disease: atypia เต็มความหนา epidermis = SCC in situ · ปื้นแดงขอบชัดมีขุย มักถูกเข้าใจผิดว่า eczema หรือ psoriasis",
  "ความเสี่ยง: ชีทหน้า 12 เขียน AK → SCC 5–20% (ข้อมูลใหม่ต่อรอยโรคต่ำกว่านั้นมาก) · Bowen → invasive SCC ราว 3–5%",
  "รักษา AK: cryotherapy, 5-FU, imiquimod, PDT · Bowen: 5-FU, imiquimod, PDT, curettage หรือ excision — ไม่ต้อง wide excision (ลายมือหน้า 20)",
  "เทียบ: seborrheic keratosis = benign · nevus sebaceous → BCC (พบน้อยกว่าที่เคยเชื่อ) · dysplastic nevus, CMN → melanoma"],
 opinion="เห็นด้วยกับคำตอบ D ความมั่นใจสูง — ลายมือหน้า 21 และ 23 เขียนว่าทั้งสองเสี่ยง SCC ตรงกับพยาธิกำเนิด · ชีทหน้า 12 ให้ตัวเลข AK กลายเป็น SCC 5–20% ซึ่งเป็นข้อมูลเก่าระดับผู้ป่วยที่มี AK หลายจุด แนวทาง AAD 2021 ระบุความเสี่ยงต่อรอยโรคต่อปีต่ำกว่ามาก แต่ยังแนะนำให้รักษาทั้งบริเวณ (field therapy) · ลายมือสไลด์หน้า 20 ให้ Tx = excision ไม่ต้องขอบกว้าง ส่วนแนวปัจจุบันใช้ cryotherapy หรือยาทาเป็นหลัก และสงวนการผ่าตัดไว้สำหรับรอยโรคหนาหรือสงสัย invasive SCC",
 mnemonic="<b>“AK กับ Bowen ไปทาง Squamous” — AK = Atypia ชั้นล่าง · Bowen = เต็มความหนา</b>",
 guide="AAD Guidelines of care for the management of actinic keratosis (J Am Acad Dermatol 2021); British Association of Dermatologists guidelines for the management of squamous cell carcinoma in situ (Bowen's disease) (Br J Dermatol 2014)",
 variants=[
  "ชายสูงอายุมีปื้นแดงขอบชัดผิวมันเป็นกำมะหยี่ที่หัวองคชาต biopsy เป็น SCC in situ → erythroplasia of Queyrat (Bowen's disease บน mucosa) ซึ่งลุกลามบ่อยกว่าบนผิวหนัง",
  "ชาวประมงมีริมฝีปากล่างแห้งเป็นขุยขาวตลอดแนว ขอบริมฝีปากไม่ชัด → actinic cheilitis (AK ของริมฝีปาก) รักษาด้วยยาทาหรือ vermilionectomy เมื่อรุนแรง",
  "AK บนหลังมือที่เดิมแบน กลายเป็นตุ่มหนาแข็ง เจ็บ และโตเร็ว → biopsy ให้ลึกถึง dermis หา invasive SCC ไม่จี้เย็นทันที",
  "ผู้ที่ดื่มน้ำบาดาลปนสารหนูมานาน มี Bowen's หลายปื้นบนลำตัวและตุ่มแข็งที่ฝ่ามือฝ่าเท้า → arsenical keratosis ร่วม Bowen ต้องหาแหล่งสารหนูและตรวจหามะเร็งอวัยวะภายใน"])

mk(Q, 73, [24, 26, 's16'],
 stem="A 68-year-old man has a slowly growing skin cancer at the frontal hairline. Which type is most likely?",
 opts=["Merkel cell carcinoma","Basal cell carcinoma","Malignant melanoma","Dermatofibrosarcoma protuberans","Squamous cell carcinoma"],
 interp="ชายสูงอายุ มะเร็งผิวหนังที่<b>แนวตีนผมหน้าผาก</b> โตช้า → ถามชนิดที่น่าจะเป็นที่สุด ต้องใช้สองหลักพร้อมกัน: ความชุก (BCC พบมากที่สุด) และตำแหน่ง (ใบหน้าส่วนบนเหนือแนวมุมปากถึงติ่งหูเป็นพื้นที่ของ BCC)",
 why="<b>BCC เป็นมะเร็งผิวหนังที่พบบ่อยที่สุด</b> ราว 3 ใน 4 ของมะเร็งผิวหนังทั้งหมด ตามด้วย SCC ราว 1 ใน 5 และ melanoma ส่วนน้อย · BCC สัมพันธ์กับ <b>UVB สะสมเป็นสิบปี</b> พบในผู้ชายสูงอายุ ราว 85% อยู่ที่ศีรษะและคอ โดย<b>จมูกพบมากที่สุด</b> และมักอยู่ที่<b>ใบหน้าส่วนบน</b>เหนือเส้นที่ลากจากมุมปากถึงติ่งหู ตั้งแต่ตีนผมถึงริมฝีปากบน · ตรงข้ามกับ SCC ที่พบมากที่<b>ริมฝีปากล่าง</b> หลังมือ และผิวที่ระคายเคืองเรื้อรังจากบุหรี่ หมาก หรือแผลเป็น · BCC โตช้าทีละเดือนถึงปี ขอบมันวาวม้วน มี telangiectasia และในคนเอเชียมักเป็นชนิด pigmented · หลังพบ BCC ต้องตรวจผิวทั้งตัวต่อเนื่องเพราะเกิดก้อนใหม่ได้บ่อย · สไลด์หน้า 24 <b>“77% are BCC”</b> และหน้า 26 ลายมือ <b>“= ตรงที่โดนแดด : ตีนผม - ริมฝีปากบน”</b>",
 wrong={
  "A":"Merkel cell carcinoma เป็นมะเร็ง neuroendocrine ของผิวที่ดุและพบน้อย เกิดในผู้สูงอายุหรือภูมิคุ้มกันต่ำ สัมพันธ์กับ polyomavirus เป็นก้อนแดงม่วงไม่เจ็บที่<b>โตเร็วในไม่กี่สัปดาห์</b> ไม่ใช่มะเร็งที่โตช้า · จะถูกถ้าชายอายุ 75 ปีหลังปลูกถ่ายไตมีก้อนแข็งสีแดงม่วง ผิวเรียบ ไม่เจ็บ ที่หน้าผาก โตเป็นสองเท่าใน 1 เดือน",
  "C":"Melanoma เกิดได้ที่ใบหน้าผู้สูงอายุในรูป lentigo maligna melanoma แต่พบน้อยกว่า BCC มาก และต้องมีเม็ดสีผิดปกติแบบ ABCD จึงไม่ใช่มะเร็งที่น่าจะเป็นที่สุดเมื่อไม่มีข้อมูลเรื่องสี · จะถูกถ้าชายอายุ 70 ปีมีปื้นดำน้ำตาลหลายเฉด ขอบหยักไม่สมมาตร ที่หน้าผากใกล้แนวผม ซึ่งเริ่มนูนเป็นก้อนดำในปีนี้",
  "D":"DFSP เป็น sarcoma ของ dermis ที่โตช้ามาก มักเกิดที่<b>ลำตัวและต้นแขนขา</b>ของผู้ใหญ่วัยกลางคน ลักษณะปื้นแข็งนูนเป็นปุ่ม ย้อม CD34 บวก และพบน้อยมากเมื่อเทียบกับ BCC · จะถูกถ้าหญิงอายุ 40 ปีมีปื้นแข็งสีชมพูอมม่วงที่หน้าอก โตช้ามาหลายปีจนมีปุ่มนูนหลายปุ่ม",
  "E":"SCC เป็นมะเร็งผิวที่พบบ่อยอันดับสอง พบที่ผิวถูกแดดได้เช่นกัน แต่ตำแหน่งเด่นคือ<b>ริมฝีปากล่าง</b> หลังมือ และแผลเรื้อรัง ส่วนตีนผมถึงริมฝีปากบนเป็นพื้นที่ของ BCC · จะถูกถ้าชายอายุ 65 ปีที่สูบบุหรี่และเคี้ยวหมากมีก้อนแข็งเป็นแผลขอบนูนที่ริมฝีปากล่าง โตขึ้นในไม่กี่เดือน"},
 trap="เห็นมะเร็งที่ผิวถูกแดดแล้วนึกถึง melanoma หรือ SCC ที่อันตรายกว่า — คำถามถามว่า<b>น่าจะเป็นที่สุด</b> จึงต้องคิดตามความชุกและตำแหน่ง ซึ่งชี้ BCC ทั้งสองทาง · จำคู่ ริมฝีปากบน = BCC · ริมฝีปากล่าง = SCC",
 summary=[
  "มะเร็งที่ตีนผมถึงริมฝีปากบนในผู้สูงอายุ = <b>BCC</b> ทั้งจากความชุกและตำแหน่ง",
  "สัดส่วนมะเร็งผิว (สไลด์หน้า 24): BCC 77% · SCC 20% · melanoma และอื่น ๆ 3% — ลายมือ common กับ aggressive สวนทางกัน",
  "Shade area ของ BCC (สไลด์หน้า 26): เหนือเส้นจากมุมปากถึงติ่งหู · ริมฝีปากล่างเป็นของ SCC",
  "ชีทหน้า 16: BCC 85% อยู่ศีรษะและคอ จมูกพบมากที่สุด · ตำแหน่งที่เป็นซ้ำบ่อยคือหูและรอบตา",
  "ชีทหน้า 16: หลังพบ BCC ต้องหา metachronous lesion ซึ่งพบได้ถึง 40% ใน 10 ปี",
  "ปัจจัยเสี่ยงหลัก: UVB สะสม ผิวขาว อายุมาก ภูมิคุ้มกันต่ำ — ในผู้ปลูกถ่ายอวัยวะ SCC พบมากกว่า BCC"],
 opinion="เห็นด้วยกับคำตอบ B ความมั่นใจสูง — สไลด์หน้า 24 ให้ BCC 77% และลายมือหน้า 26 ระบุตีนผมถึงริมฝีปากบนเป็นตำแหน่งของ BCC ซึ่งตรงกับข้อมูลระบาดวิทยาปัจจุบันที่ BCC พบมากกว่า SCC ราว 3–4 เท่าในประชากรทั่วไป · ข้อควรรู้เพิ่มจาก NCCN 2025 คือข้อยกเว้นในผู้ปลูกถ่ายอวัยวะที่ได้ยากดภูมิ ซึ่ง SCC กลับพบมากกว่า BCC หลายเท่า และในคนไทยมักเป็น pigmented BCC ที่ต้องแยกจาก melanoma · ชีทหน้า 16 ที่ให้ BCC 85% อยู่ศีรษะและคอ สอดคล้องกับตำราปัจจุบัน",
 mnemonic="<b>“บน = Basal · ล่าง = Squamous” — ริมฝีปากบน BCC · ริมฝีปากล่าง SCC</b>",
 guide="NCCN Clinical Practice Guidelines in Oncology: Basal Cell Skin Cancer (2025); Sabiston Textbook of Surgery 21st ed. (2022) — Skin and subcutaneous tissue",
 variants=[
  "ชายอายุ 25 ปีมี BCC หลายก้อนบนใบหน้าและหลัง ร่วมกับรอยบุ๋มที่ฝ่ามือและถุงน้ำที่ขากรรไกร → basal cell nevus (Gorlin) syndrome จาก PTCH1 หลีกเลี่ยงรังสีรักษา",
  "หญิงอายุ 70 ปีมีปื้นแดงแบนขอบชัดมีขุยบาง ๆ ที่หลัง ทายา steroid ไม่หาย ขอบมีมุกมันวาว → superficial BCC ซึ่งพบมากที่ลำตัว",
  "หญิงอายุ 60 ปีมีแผ่นสีขาวเหลืองแข็งขอบไม่ชัดคล้ายแผลเป็นที่แก้มโดยไม่เคยบาดเจ็บ → morpheaform BCC ขอบจริงกว้างกว่าที่เห็น ควรใช้ Mohs"])

mk(Q, 74, [31, 33, 's16', 's17'],
 stem="An 80-year-old man has a slowly enlarging ulcer on the nose with a clean base and a raised, pearly, rolled edge with telangiectasia. Which statement about its behavior is correct?",
 opts=["It usually regresses spontaneously within months","It metastasizes to regional lymph nodes in most cases","It is a premalignant lesion that is not yet invasive","It invades locally but rarely metastasizes","It is a benign lesion that needs no treatment"],
 interp="แผลโตช้าที่จมูก พื้นแผลสะอาด ขอบนูนมุกม้วนมี telangiectasia = <b>nodular BCC ที่แตกเป็น rodent ulcer</b> → ถามพฤติกรรมของโรค ต้องรู้ว่า BCC ลุกลามเฉพาะที่ได้ลึกแต่แพร่กระจายน้อยมาก",
 why="BCC โตที่<b>ขอบ</b>ขณะที่ตรงกลางขาดเลือดตายเป็นแผล ได้แผลขอบม้วนมันวาวเหมือนถูกหนูแทะ (<b>rodent ulcer</b>) · เซลล์ BCC <b>ต้องอาศัย stroma รอบตัว</b> (stroma-dependent) จึงอยู่รอดไกลจากที่เดิมได้ยาก อัตราแพร่กระจายราว <b>0.0028–0.55%</b> แต่ลุกลามเฉพาะที่ไปตาม<b>ระนาบเนื้อเยื่อ เยื่อหุ้มกระดูกอ่อน และเส้นประสาท</b> จึงกัดกินจมูก เปลือกตา หู และกระดูกได้ถ้าปล่อยไว้ · ปัจจัยเสี่ยงสูงตาม NCCN: ตำแหน่งกลางใบหน้า (H-zone) ขอบไม่ชัด ชนิด morpheaform หรือ infiltrative เป็นซ้ำ perineural invasion และภูมิคุ้มกันต่ำ · เป้าหมายคือ<b>ตัดให้ขอบปลอดมะเร็ง</b>: low-risk ตัดขอบ 4 mm ส่วนบนจมูกซึ่งเป็น high-risk ใช้ Mohs · ก้อนลุกลามมากหรือกระจายใช้ Hedgehog inhibitor (vismodegib, sonidegib) · สไลด์หน้า 31 ลายมือ <b>“roll edge”</b> และชีทหน้า 16 <b>“การเกิด metastasis พบได้น้อยมาก ประมาณ 0.0028-0.1% เท่านั้น”</b>",
 wrong={
  "A":"การยุบเองในไม่กี่เดือนเป็นพฤติกรรมของ <b>keratoacanthoma</b> ซึ่งโตเร็วเป็นโดมมี keratin plug ตรงกลางแล้วยุบได้ ส่วน BCC โตช้าต่อเนื่องเป็นปีและไม่ยุบ · จะถูกถ้าหญิงอายุ 65 ปีมีก้อนรูปโดมมีแกน keratin ตรงกลางที่แขน โตเร็วใน 6 สัปดาห์ ซึ่งอาจยุบเองได้ แต่ยังต้องตัดส่งตรวจเพราะแยกจาก SCC ไม่ได้",
  "B":"BCC แพร่กระจายน้อยมากเพราะเซลล์ต้องพึ่ง stroma ของตัวเอง แม้ก้อนใหญ่หรือเป็นซ้ำก็ยังกระจายน้อยกว่า 1% และเมื่อกระจายมักเกิดหลังเป็นมานานหลายปี · ไม่มีสถานการณ์ใดที่ BCC กระจายไปต่อมน้ำเหลืองในผู้ป่วยส่วนใหญ่ เพราะการแพร่กระจายเป็นเหตุการณ์ที่พบน้อยมากของโรคนี้ทุกชนิดย่อย",
  "C":"Premalignant ที่ยังไม่ลุกลามคือ actinic keratosis หรือ Bowen's disease ซึ่ง atypia ยังอยู่ใน epidermis ส่วน BCC ที่แตกเป็นแผลได้ลุกลามเข้า dermis แล้ว เป็นมะเร็งจริง · จะถูกถ้าชายอายุ 70 ปีมีปื้นสากแดงมีขุยเหมือนกระดาษทรายหลายจุดบนหนังศีรษะล้านที่ถูกแดด ไม่มีก้อนหรือแผล",
  "E":"ปล่อย BCC ไว้จะกัดกินเนื้อเยื่อลึกขึ้นเรื่อย ๆ จนผ่าตัดยากและเสียอวัยวะ จึงต้องรักษาทุกราย ไม่ใช่ benign · จะถูกถ้าหญิงอายุ 55 ปีมีติ่งเนื้อนุ่มสีผิวมีก้านเล็กหลายติ่งที่คอและรักแร้ (skin tag) ซึ่งเอาออกเฉพาะเมื่อระคายเคืองหรือเพื่อความสวยงาม"},
 trap="คำว่า<b>แพร่กระจายน้อย</b>ทำให้บางคนเหมาว่า benign หรือไม่ต้องรักษา และคำว่า<b>มะเร็ง</b>ทำให้บางคนคิดว่าต้องกระจายไปต่อมน้ำเหลือง — BCC อยู่ตรงกลาง: เป็นมะเร็งที่ทำลายเฉพาะที่รุนแรงแต่แทบไม่กระจาย",
 summary=[
  "BCC = <b>locally invasive, rarely metastasizes</b> → เป้าหมายคือตัดให้ขอบปลอด",
  "Rodent ulcer: แผลตรงกลาง ขอบม้วนมุกมันวาว telangiectasia · ชีทหน้า 17 nodular BCC พบบ่อยที่สุด",
  "แพร่กระจาย 0.0028–0.1% ตามชีทหน้า 16 (ตำราใหม่ถึงราว 0.5%) ส่วนใหญ่หลังเป็นนานกว่า 10 ปี",
  "ชนิดตามชีทหน้า 17: nodular · superficial 10% ที่ลำตัว คล้าย eczema · pigmented 5% แยกยากจาก melanoma · morpheaform 2% คล้ายแผลเป็น ขอบไม่ชัด",
  "High-risk: H-zone ของใบหน้า · ขอบไม่ชัด · morpheaform · เป็นซ้ำ · perineural · ภูมิคุ้มกันต่ำ → Mohs",
  "ลุกลามมากจนผ่าตัดไม่ได้หรือกระจาย → Hedgehog inhibitor (vismodegib, sonidegib) · ถัดไป cemiplimab"],
 opinion="เห็นด้วยกับคำตอบ D ความมั่นใจสูง — ชีทหน้า 16 และ 17 ระบุว่า BCC แพร่กระจายน้อยมาก และการกำจัดก้อนให้หมดเป็นการรักษาที่ดีที่สุด · ชีทหน้า 16 เขียนว่า BCC ที่กระจายมักไปทางหลอดเลือดมากกว่าทางน้ำเหลือง ซึ่งต่างจากรายงานปัจจุบันที่ตำแหน่งแพร่กระจายพบบ่อยที่สุดคือ<b>ต่อมน้ำเหลืองบริเวณใกล้</b> ตามด้วยปอดและกระดูก · ชีทหน้า 17 ให้ขอบตัด 5 มม. ขณะที่ NCCN Basal Cell Skin Cancer 2025 ใช้ 4 mm สำหรับ low-risk และให้ Mohs สำหรับตำแหน่ง high-risk อย่างจมูก",
 mnemonic="<b>“หนูแทะลึก แต่ไม่วิ่งไกล” — Rodent ulcer: local ++ · metastasis ±</b>",
 guide="NCCN Clinical Practice Guidelines in Oncology: Basal Cell Skin Cancer (2025); Fitzpatrick's Dermatology 9th ed. (2019) — Basal cell carcinoma",
 variants=[
  "ชายมี BCC ที่แก้มร่วมกับชาและปวดแปลบตามแนวเส้นประสาท infraorbital → perineural invasion จัดเป็น high-risk ต้อง Mohs หรือตัดกว้างพร้อมพิจารณารังสีเสริม",
  "หญิงอายุ 85 ปีมี nodular BCC ขนาด 6 mm ขอบชัดที่ลำตัว ไม่ต้องการแผลเย็บ → curettage and electrodesiccation ใช้ได้กับ low-risk ในบริเวณไม่มีขน",
  "BCC ที่หัวตาด้านในโตลึกจนตาขยับไม่สุดและเห็นภาพซ้อน → CT หรือ MRI ประเมินการลุกลามเข้าเบ้าตาก่อนวางแผนผ่าตัด"])

mk(Q, 75, [35, 44, 's18'],
 stem="A 62-year-old woman has a fungating ulcer with raised, everted edges arising in a burn scar on her leg from an injury 40 years ago. Which histology is most likely?",
 opts=["Malignant melanoma","Dermatofibrosarcoma protuberans","Basal cell carcinoma","Squamous cell carcinoma","Pseudoepitheliomatous hyperplasia"],
 interp="แผลงอกนูน ขอบยกพลิกออก เกิดใน<b>แผลเป็นไฟไหม้อายุ 40 ปี</b> = <b>Marjolin's ulcer</b> → ถามชนิดทางพยาธิที่พบมากที่สุด ต้องรู้ว่ามะเร็งในแผลเรื้อรังและแผลเป็นส่วนใหญ่เป็น SCC แม้ BCC จะพบบ่อยที่สุดในมะเร็งผิวทั่วไป",
 why="<b>Marjolin's ulcer</b> คือมะเร็งที่เกิดใน<b>แผลเรื้อรังหรือแผลเป็น</b> เช่น แผลเป็นไฟไหม้ venous ulcer แผลกดทับ หรือโพรงหนองของ osteomyelitis โดยมี latency เฉลี่ยราว <b>30 ปี</b> · กลไกคือการอักเสบและแผลแตกซ้ำ ๆ ทำให้เซลล์แบ่งตัวต่อเนื่อง ร่วมกับแผลเป็นที่เลือดและน้ำเหลืองน้อยทำให้การเฝ้าระวังของภูมิคุ้มกันลดลง · ชนิดที่พบมากที่สุดคือ <b>SCC ราว 70–90%</b> รองลงมาคือ BCC ส่วน melanoma และ sarcoma พบน้อย · ลักษณะชี้นำ: แผลเก่าที่เปลี่ยนไป ขอบนูนแข็ง<b>พลิกออก (everted)</b> พื้นมีเนื้อตาย เลือดออกง่าย มีกลิ่น · ต้อง <b>biopsy หลายตำแหน่งให้ลึก</b>ทั้งขอบและพื้นแผล เพราะ biopsy ตื้นอาจได้แค่ hyperplasia · Marjolin's ulcer เป็น SCC ความเสี่ยงสูงที่กระจายต่อมน้ำเหลืองบ่อยกว่า SCC ทั่วไป จึงต้อง wide excision ขอบกว้าง ประเมินต่อมน้ำเหลือง และพิจารณา amputation เมื่อลุกลามกระดูกหรือข้อ · สไลด์หน้า 44 ลายมือ <b>“= skin cancer on chronic ulcer”</b> · <b>“ส่วนใหญ่เป็น squamous CA”</b>",
 wrong={
  "A":"Melanoma เกิดในแผลเป็นได้แต่พบน้อยมาก และมักมีเม็ดสีดำน้ำตาลไม่สม่ำเสมอ ไม่ใช่แผลงอกขอบพลิกออกที่ไม่มีสี · จะถูกถ้าหญิงอายุ 50 ปีมีปื้นดำหลายเฉดขอบหยักที่น่อง ขยายใหญ่ในหนึ่งปี แล้วเริ่มนูนเป็นก้อนดำและมีเลือดออก",
  "B":"DFSP เป็น sarcoma ระดับต่ำของ dermis ที่โตช้า ลักษณะปื้นแข็งเป็นปุ่มนูนใต้ผิวหนังที่ไม่ได้เริ่มจากแผลเรื้อรัง และย้อม CD34 บวก · จะถูกถ้าชายอายุ 38 ปีมีปื้นแข็งสีชมพูอมม่วงที่ไหล่ โตช้ามา 5 ปีจนมีปุ่มนูนหลายปุ่ม และ biopsy พบเซลล์รูปกระสวยเรียงแบบ storiform",
  "C":"BCC พบได้ใน Marjolin's ulcer แต่เป็นส่วนน้อย และลักษณะเด่นคือขอบม้วนมันวาวมี telangiectasia ไม่ใช่ขอบพลิกออกกับเนื้อตาย · จะถูกถ้าชายอายุ 60 ปีที่เคยฉายรังสีหนังศีรษะตอนเด็ก มีก้อนมุกมันวาวขอบม้วนเกิดในผิวบริเวณที่เคยฉายรังสี",
  "E":"Pseudoepitheliomatous hyperplasia คือการหนาตัวของ epidermis ลงลึกแบบ benign ที่ขอบแผลเรื้อรังหรือการติดเชื้อลึก ไม่มี atypia และเป็นเหตุที่ biopsy ตื้นอาจหลอกการวินิจฉัย SCC · จะถูกถ้าชาวนามีแผลตะปุ่มตะป่ำที่เท้าจาก chromoblastomycosis ซึ่ง biopsy ลึกพบ sclerotic body ของเชื้อราและ epidermis หนาตัวโดยไม่มี atypia"},
 trap="จำว่า <b>BCC พบบ่อยที่สุด</b>ในมะเร็งผิวหนังทั่วไป แล้วเลือก BCC — แต่ในแผลเรื้อรังและแผลเป็น บริบทเปลี่ยน ชนิดหลักคือ <b>SCC</b> · ตัวช่วยแยกคือขอบ: SCC ขอบยก<b>พลิกออก</b> พื้นมีเนื้อตาย ส่วน BCC ขอบ<b>ม้วน</b>มันวาว",
 summary=[
  "มะเร็งบนแผลเรื้อรังหรือแผลเป็น (Marjolin's ulcer) = ส่วนใหญ่ <b>SCC</b> (ลายมือหน้า 44)",
  "แผลต้นเหตุ: แผลเป็นไฟไหม้ · venous ulcer (สไลด์หน้า 44) · แผลกดทับ · sinus ของ osteomyelitis — latency เฉลี่ยราว 30 ปี",
  "ลักษณะ SCC (สไลด์หน้า 35): everted and rise edge with necrotic tissue at base",
  "แผลเก่าที่เปลี่ยน (ขอบนูนแข็ง โตเร็ว เลือดออกง่าย ไม่หาย) → biopsy หลายจุดให้ลึก ทั้งขอบและพื้นแผล",
  "ดุกว่า SCC ทั่วไป: ชีทหน้า 18 ให้ metastasis 20–50% เทียบกับ SCC ทั่วไป 2–5%",
  "รักษา: wide excision ขอบกว้าง ไม่ใช้ขอบแคบ · ประเมินต่อมน้ำเหลือง · ลามกระดูกหรือข้อ → amputation"],
 opinion="เห็นด้วยกับคำตอบ D ความมั่นใจสูง — ลายมือหน้า 44 และชีทหน้า 18 ตรงกับตำราปัจจุบันว่า Marjolin's ulcer ส่วนใหญ่เป็น SCC · สไลด์หน้า 44 เขียนว่า longstanding venous hypertension เป็นสาเหตุ ซึ่งควรอ่านว่าเป็นหนึ่งในแผลเรื้อรังที่เกิด Marjolin ได้ ส่วนแผลเป็นไฟไหม้เป็นต้นเหตุที่พบบ่อยที่สุด · NCCN Squamous Cell Skin Cancer 2025 จัด SCC ที่เกิดในบริเวณอักเสบเรื้อรังเป็นกลุ่มความเสี่ยงสูง จึงไม่ควรใช้ขอบมาตรฐานแบบ SCC ทั่วไป · ตัวเลข 20–50% ในชีทเป็นค่าที่รายงานกว้าง แต่สอดคล้องว่ากระจายบ่อยกว่า SCC ทั่วไปมาก",
 mnemonic="<b>“แผลเก่าเปลี่ยนนิสัย = Marjolin = Squamous”</b>",
 guide="NCCN Clinical Practice Guidelines in Oncology: Squamous Cell Skin Cancer (2025); Sabiston Textbook of Surgery 21st ed. (2022) — Skin and subcutaneous tissue",
 variants=[
  "ชายมีโพรงหนองไหลจาก osteomyelitis ที่หน้าแข้งมา 25 ปี ช่วงหลังหนองมีเลือดปนและปากโพรงนูนแข็ง → Marjolin ใน sinus tract ต้อง biopsy ปากและผนังโพรง",
  "แผลเป็นไฟไหม้ที่หลังหายแล้วแตกซ้ำทุกไม่กี่เดือนมาหลายปี ยังไม่มีมะเร็ง → ตัดแผลเป็นที่ไม่เสถียรออกแล้วปิดด้วย graft หรือ flap เพื่อตัดวงจรแผลแตก",
  "Marjolin's ulcer ที่ขา คลำต่อมน้ำเหลืองขาหนีบโตแข็ง → FNA หรือ biopsy ต่อม ถ้าพบมะเร็งทำ inguinal lymph node dissection ร่วมกับตัดก้อน",
  "Marjolin's ulcer ที่ส้นเท้าลุกลามกัดกระดูก calcaneus กว้าง → below-knee amputation"])

mk(Q, 76, [45, 47, 56, 57],
 stem="A 58-year-old man has a 9-mm nodular basal cell carcinoma on the nasal tip. Which principle should guide the choice of surgical technique?",
 opts=["Radiotherapy should replace surgery for every skin cancer on the face","Clear margins matter less on the face because recurrence there is rare","Margin control with tissue sparing favors Mohs surgery","A 2-cm margin is required because the nose is a high-risk site","Visual margins suffice, so intraoperative margin checks add nothing"],
 interp="BCC ขนาด 9 mm ที่<b>ปลายจมูก</b> ซึ่งเป็น H-zone ของใบหน้า → ถามหลักการเลือกวิธีผ่าตัด ต้องใช้หลักว่าใบหน้าตัดกว้างไม่ได้เพราะเสียหน้าที่และความสวยงาม แต่ต้องได้ขอบปลอดจริง จึงต้องใช้วิธีที่ตรวจขอบได้ครบ",
 why="หลักการผ่าตัดมะเร็งผิวคือ<b>ขอบต้องปลอดมะเร็ง</b> แต่ที่<b>ใบหน้า โดยเฉพาะจมูก เปลือกตา ริมฝีปาก และหู</b> การเผื่อขอบกว้างแบบลำตัวจะเสียทั้งรูปทรงและหน้าที่ · ปลายจมูกเป็น <b>H-zone</b> ซึ่ง NCCN จัด BCC ทุกขนาดในบริเวณนี้เป็น <b>high-risk</b> เพราะเป็นซ้ำบ่อยและลามตามระนาบเนื้อเยื่อลึกกว่าที่เห็น · ทางออกคือ <b>Mohs micrographic surgery</b> ตัดทีละชั้นบาง ๆ ทำ frozen section แนวนอนตรวจ<b>ขอบรอบและขอบลึกครบ 100%</b> แล้วตัดเพิ่มเฉพาะจุดที่ยังพบมะเร็ง ได้อัตราหายของ primary BCC ราว 99% โดยเสียเนื้อดีน้อยที่สุด ต่างจากการตัดทั่วไปที่ตรวจขอบแบบ bread-loaf ซึ่งดูขอบได้เพียงส่วนน้อย · ถ้าไม่มี Mohs ให้ตัดพร้อมตรวจขอบให้ครบก่อนปิดแผล (PDEMA) แล้วจึงซ่อมด้วย local flap หรือ graft · สไลด์หน้า 47 <b>“Wide resection is not always possible, esp. Head and neck or facial area due to functional and aesthetic results”</b> · <b>“To control excised margin &gt;&gt;&gt; Mohs micrographic microsurgery was developed”</b>",
 wrong={
  "A":"รังสีรักษาเป็นทางเลือกที่ได้ผลดีสำหรับ BCC บางราย เช่น ผู้สูงอายุที่ผ่าตัดไม่ได้หรือไม่ต้องการผ่าตัด แต่การผ่าตัดยังเป็นการรักษามาตรฐานที่หายสูงสุดและได้ผลพยาธิยืนยันขอบ · ไม่มีสถานการณ์ใดที่หลักการใช้รังสีแทนผ่าตัดกับมะเร็งผิวที่ใบหน้าทุกรายจะถูก เพราะรังสีห้ามใช้ในโรคทางพันธุกรรมอย่าง Gorlin syndrome และในก้อนที่เป็นซ้ำในบริเวณที่เคยฉายแล้ว",
  "B":"ใบหน้าเป็นบริเวณที่ BCC <b>เป็นซ้ำบ่อยที่สุด</b> โดยเฉพาะ H-zone ที่มะเร็งลามลึกตามระนาบเนื้อเยื่อ ขอบปลอดจึงสำคัญยิ่งกว่าที่ลำตัว · ไม่มีสถานการณ์ใดที่ขอบปลอดมะเร็งสำคัญน้อยลงที่ใบหน้า เพราะขอบติดมะเร็งเพิ่มโอกาสเป็นซ้ำหลายเท่า และ BCC ที่เป็นซ้ำรักษายากกว่าก้อนแรก",
  "D":"ขอบ 2 cm เป็นขอบของ melanoma ที่หนาเกิน 2 mm ไม่ใช่ BCC · BCC low-risk ใช้ 4 mm และ high-risk ใช้ Mohs หรือตรวจขอบครบ ไม่ได้เพิ่มขอบเป็นเซนติเมตร · ไม่มีสถานการณ์ใดที่ BCC ที่จมูกต้องใช้ขอบ 2 cm เพราะขอบขนาดนี้ที่ปลายจมูกเท่ากับตัดจมูกออกเกือบทั้งส่วน ขณะที่ Mohs ให้อัตราหายสูงกว่าโดยเสียเนื้อน้อยกว่ามาก",
  "E":"การกำหนดขอบด้วยตาแล้วส่งพยาธิหลังผ่าตัดเป็นวิธีมาตรฐานของ BCC low-risk ที่ลำตัวหรือแขนขา แต่ที่จมูกขอบทางคลินิกมักประเมินต่ำกว่าจริงและพลาดไม่ได้ · จะถูกถ้าชายอายุ 60 ปีมี nodular BCC ขนาด 8 mm ขอบชัดที่หลัง ซึ่งตัดขอบทางคลินิก 4 mm แล้วส่งตรวจขอบหลังผ่าตัดตามปกติโดยไม่ต้องตรวจระหว่างผ่าตัด"},
 trap="ใบหน้าเสี่ยงเป็นซ้ำมากกว่า จึงชวนให้คิดว่าต้อง<b>ตัดกว้างขึ้น</b> — แต่ที่จมูกตัดกว้างไม่ได้ คำตอบคือ<b>ตรวจขอบให้แม่น</b>ด้วย Mohs ไม่ใช่เผื่อขอบให้มาก · จำ: ลำตัว = เผื่อขอบ · ใบหน้า = คุมขอบ",
 summary=[
  "BCC ที่ใบหน้า: ตัดกว้างไม่ได้เพราะหน้าที่และความสวยงาม → <b>คุมขอบด้วย Mohs</b> (สไลด์หน้า 47)",
  "Optimal surgical margin is not known — ลายมือหน้า 47: ยิ่งลึกยิ่งต้องตัดกว้าง และลงล่างมากกว่าออกข้าง",
  "ขอบมาตรฐาน (ลายมือหน้า 45): BCC 0.5 cm · SCC 1 cm — NCCN ปัจจุบัน BCC low-risk 4 mm",
  "H-zone (จมูก เปลือกตา ริมฝีปาก หู ขมับ) = high-risk ทุกขนาด → Mohs หรือตรวจขอบครบก่อนปิด",
  "Mohs (ลายมือหน้า 57): ตัดทีละ mm → frozen → ตัดเพิ่มเฉพาะฝั่งที่ positive → free แล้วจึง reconstruct",
  "การตัดทั่วไปตรวจขอบแบบ bread-loaf เห็นขอบเพียงส่วนน้อย · Mohs เห็นขอบรอบและขอบลึกครบ"],
 opinion="เห็นด้วยกับคำตอบ C ความมั่นใจสูง — สไลด์หน้า 47 และลายมือหน้า 56–57 อธิบายตรงกันว่าใช้ Mohs เมื่ออยู่ใกล้อวัยวะสำคัญบนใบหน้า · ลายมือสไลด์หน้า 45 ให้ขอบ BCC 0.5 cm ขณะที่ NCCN Basal Cell Skin Cancer 2025 ใช้ 4 mm สำหรับ low-risk และสำหรับ high-risk ไม่ได้ให้ขอบตายตัว แต่แนะนำ Mohs หรือการตัดที่ตรวจขอบรอบและขอบลึกครบ (PDEMA) · Appropriate Use Criteria ปี 2012 ให้ BCC ทุกชนิดในบริเวณ H ของใบหน้าเหมาะกับ Mohs",
 mnemonic="<b>“ลำตัวเผื่อขอบ · ใบหน้าคุมขอบ” — H-zone = Mohs</b>",
 guide="NCCN Clinical Practice Guidelines in Oncology: Basal Cell Skin Cancer (2025); AAD/ACMS/ASDSA/ASMS Appropriate Use Criteria for Mohs Micrographic Surgery (2012)",
 variants=[
  "หลัง Mohs ที่ปลายจมูกเหลือแผล 1.2 cm ลึกถึงกระดูกอ่อน → ปิดด้วย local flap เช่น bilobed flap หรือ forehead flap ตามขนาด ไม่ปล่อยหายเองเพราะจะดึงรั้งปีกจมูก",
  "BCC ที่ปีกจมูกตัดแบบธรรมดาแล้วผลพยาธิพบมะเร็งที่ขอบ → re-excision ด้วย Mohs ทันที ไม่รอดูจนเป็นซ้ำ",
  "BCC บนเปลือกตาล่างใกล้ท่อน้ำตาในโรงพยาบาลที่ไม่มี Mohs → ตัดพร้อมส่ง frozen section ตรวจขอบให้ครบก่อน แล้วจึงซ่อมเปลือกตาในขั้นถัดไป"])

mk(Q, 77, [46, 49, 73, 's11'],
 stem="A 46-year-old woman has a 9-mm pigmented lesion on the calf that has become asymmetric with irregular borders and several colors, and it recently bled. What is the next step?",
 opts=["Topical corticosteroid and review in a month","Laser ablation without tissue diagnosis","Excisional biopsy with narrow margins","Reassurance and photographic follow-up","Wide excision with a 2-cm margin"],
 interp="ไฝ 9 mm ที่น่อง <b>ไม่สมมาตร ขอบไม่เรียบ หลายสี ใหญ่กว่า 6 mm และมีเลือดออก</b> → เข้า ABCD ครบ สงสัย melanoma · ถามขั้นตอนถัดไป ต้องใช้หลักว่าต้องได้ชิ้นเนื้อทั้งก้อนเพื่อวินิจฉัยและวัดความหนา Breslow ก่อนกำหนดขอบตัดจริง",
 why="ไฝที่เข้าเกณฑ์ <b>ABCD</b> (Asymmetry, Border irregularity, Color variegation, Diameter &gt; 6 mm) และมี <b>E = evolving</b> หรือเลือดออก ต้องสงสัย melanoma · ขั้นถัดไปคือ <b>excisional biopsy</b> ตัดทั้งก้อนขอบแคบ <b>1–3 mm</b> ลึกถึงไขมันใต้ผิว เพื่อให้พยาธิแพทย์รายงาน <b>Breslow thickness</b>, ulceration และ mitotic rate ครบ ซึ่งใช้กำหนด T stage ขอบ wide excision และข้อบ่งชี้ sentinel lymph node biopsy · ที่แขนขาให้วางแนวแผล<b>ตามแกนยาวของแขนขา</b> และไม่ตัดขอบกว้างตั้งแต่แรก เพราะจะรบกวนทางเดินน้ำเหลืองที่ใช้หา sentinel node · incisional หรือ punch biopsy ใช้เมื่อก้อนใหญ่หรืออยู่ที่ใบหน้า ฝ่ามือฝ่าเท้า โดยเจาะส่วนที่นูนหรือเข้มที่สุด · ห้ามใช้วิธีทำลายก้อนที่ไม่ได้ชิ้นเนื้อ · สไลด์หน้า 49 <b>“ABCD criteria … Diameter greater than 6 mm”</b> และหน้า 46 ลายมือ <b>“แตกเป็นแฉก, สีไม่สม่ำเสมอ”</b>",
 wrong={
  "A":"Topical steroid ใช้กับผื่น eczema ที่อาจเกิดรอบไฝ แต่ไม่ได้รักษาตัวไฝที่เปลี่ยนแปลง การรอหนึ่งเดือนทำให้วินิจฉัย melanoma ช้า · จะถูกถ้าหญิงอายุ 30 ปีมีวงผื่นแดงคันมีขุยรอบไฝเดิมที่หลัง (Meyerson phenomenon) โดยตัวไฝยังสมมาตร สีเดียว และขนาดคงที่",
  "B":"Laser หรือการทำลายก้อนโดยไม่ได้ชิ้นเนื้อทำให้ไม่มีหลักฐานวินิจฉัยและวัดความหนาไม่ได้ ถ้าเป็น melanoma จะไม่รู้ระยะและอาจเหลือมะเร็งค้าง · จะถูกถ้าหญิงอายุ 50 ปีมีกระแดดสีน้ำตาลแบนขอบเรียบหลายจุดบนแก้ม ซึ่งแพทย์ผิวหนังยืนยันด้วย dermoscopy ว่าเป็น solar lentigo และต้องการเอาออกเพื่อความสวยงาม",
  "D":"การติดตามด้วยภาพถ่ายเหมาะกับไฝผิดปกติจำนวนมากที่ยังไม่เปลี่ยนแปลง ไม่ใช่ไฝที่เข้า ABCD ครบและมีเลือดออก ซึ่งต้องได้ชิ้นเนื้อทันที · จะถูกถ้าชายอายุ 35 ปีมีไฝ dysplastic หลายสิบเม็ดทั่วหลังที่คงที่ ไม่มีเม็ดใดเปลี่ยนแปลง จึงใช้ total-body photography ติดตาม",
  "E":"Wide excision ขอบ 2 cm เป็นการรักษาขั้นสุดท้ายเมื่อรู้แล้วว่าเป็น melanoma หนาเกิน 2 mm การตัดกว้างก่อนรู้ความหนาอาจตัดเกินจำเป็นและรบกวนการหา sentinel node · จะถูกถ้าหญิงอายุ 50 ปีที่ผลชิ้นเนื้อจาก excisional biopsy เป็น melanoma หนา 2.5 mm ที่น่อง และกำลังวางแผนผ่าตัดขั้นสุดท้าย"},
 trap="อยากรีบตัดกว้างเพราะสงสัยมะเร็ง หรือเลือกวิธีที่แผลเล็กอย่าง laser — แต่ขอบตัดของ melanoma กำหนดจาก <b>Breslow</b> ซึ่งต้องได้จากชิ้นเนื้อทั้งก้อนก่อน · ลำดับคือ <b>ตัดวินิจฉัยขอบแคบ → อ่านความหนา → ตัดกว้างตามตาราง</b>",
 summary=[
  "ไฝเข้า ABCD + เปลี่ยนแปลงหรือเลือดออก → <b>excisional biopsy ขอบ 1–3 mm</b> ก่อนเสมอ",
  "ABCD (สไลด์หน้า 49): Asymmetry · Border irregularities · Color heterogeneity · Diameter &gt; 6 mm · ชีทหน้า 11 ใช้ &gt; 8 mm · เพิ่ม E = Evolving",
  "ลายมือหน้า 46: melanoma ขอบแตกเป็นแฉก สีไม่สม่ำเสมอ",
  "ชิ้นเนื้อต้องให้ Breslow, ulceration, mitosis → T stage → ขอบ wide excision และ SLNB (พิจารณาตั้งแต่ T1b)",
  "แนวแผลที่แขนขาตามแกนยาว · ไม่ตัดกว้างก่อน เพื่อไม่รบกวน lymphatic mapping",
  "ก้อนใหญ่หรือที่ใบหน้า ฝ่ามือฝ่าเท้า → incisional หรือ punch ตรงส่วนที่นูนหรือเข้มที่สุด · ห้าม laser หรือ cryotherapy"],
 opinion="เห็นด้วยกับคำตอบ C ความมั่นใจสูง — NCCN Melanoma: Cutaneous 2025 แนะนำ excisional biopsy ขอบ 1–3 mm เป็นวิธีแรกสำหรับรอยโรคสงสัย melanoma · ลายมือสไลด์หน้า 73 เขียนว่าถ้าสงสัย skin CA ให้ทำ incisional biopsy ก่อน โดยขีดฆ่าคำว่า excisional ซึ่งเหมาะกับก้อนใหญ่ของ BCC หรือ SCC หรือ melanoma ที่ตัดทั้งก้อนไม่ได้ แต่สำหรับไฝขนาด 9 mm ที่ขา แนวปัจจุบันให้ excisional · สไลด์หน้า 49 ใช้ diameter &gt; 6 mm ขณะที่ชีทหน้า 11 ใช้ &gt; 8 mm ควรจำ 6 mm ตาม ACS และเพิ่ม E (evolving) ซึ่งมีน้ำหนักมากที่สุด",
 mnemonic="<b>“ABCDE → Excise ทั้งเม็ด → Breslow → แล้วค่อย Wide”</b>",
 guide="NCCN Clinical Practice Guidelines in Oncology: Melanoma: Cutaneous (2025); AJCC Cancer Staging Manual 8th ed. (2017) — Melanoma of the skin",
 variants=[
  "ชายมีแถบดำกว้างที่เล็บหัวแม่เท้า สีลามถึงผิวรอบโคนเล็บ (Hutchinson sign) → biopsy nail matrix สงสัย subungual melanoma",
  "ผลจาก excisional biopsy เป็น melanoma หนา 1.2 mm ไม่มีแผล ที่ต้นขา → wide excision ขอบ 1–2 cm ร่วมกับ sentinel lymph node biopsy",
  "หญิงตั้งครรภ์ 20 สัปดาห์มีไฝที่หลังเปลี่ยนสีและขอบหยักชัด → excisional biopsy ใต้ยาชาเฉพาะที่ได้เลย ไม่ต้องรอคลอด"])

mk(Q, 78, [56, 57, 58, 's17'],
 stem="A 73-year-old woman with basal cell carcinoma of the lower eyelid chooses Mohs surgery. What is its main advantage?",
 opts=["Shorter operating time and lower cost than excision","No reconstruction is needed after tumor removal","Margins are judged clinically, avoiding histology","Highest cure rate with maximal tissue sparing","Better cosmesis at the cost of a lower cure rate"],
 interp="BCC ที่<b>เปลือกตาล่าง</b>ซึ่งเป็นตำแหน่งที่ต้องเก็บเนื้อเยื่อให้มากที่สุด เลือกทำ Mohs → ถามข้อดีหลักของ Mohs ต้องรู้ว่า Mohs ตรวจขอบทั้งหมดด้วย frozen section จึงได้ทั้งอัตราหายสูงสุดและเสียเนื้อน้อยที่สุดในคราวเดียว",
 why="<b>Mohs micrographic surgery</b> ตัดก้อนเป็นชั้นบางรูปจาน ทำเครื่องหมายสีและแผนที่ แล้วตัด frozen section <b>แนวนอน</b> ทำให้เห็น<b>ขอบรอบและขอบลึกครบ 100%</b> ในแผ่นเดียว ถ้าพบมะเร็งตรงไหนก็ตัดเพิ่มเฉพาะตำแหน่งนั้นจนขอบปลอด แล้วจึงซ่อมแผล · ผลคือ<b>อัตราหายสูงสุด</b>ในบรรดาวิธีรักษา BCC: primary ราว <b>99%</b> และ recurrent ราว <b>94%</b> เทียบกับการตัดขอบมาตรฐานราว 95% และต่ำลงมากในก้อนที่เป็นซ้ำ พร้อม<b>เก็บเนื้อดีได้มากที่สุด</b> แผลเล็ก ซ่อมง่าย และลด morbidity · จึงเหมาะกับเปลือกตา จมูก ริมฝีปาก หู ก้อนขอบไม่ชัด morpheaform ก้อนที่เป็นซ้ำ และ perineural invasion · ข้อเสียคือใช้เวลานาน ค่าใช้จ่ายสูง ต้องมีผู้เชี่ยวชาญและห้องปฏิบัติการพร้อม · สไลด์หน้า 58 <b>“Advantage — High cure rates · Decrease morbidity · Significant tissue conservation”</b> ลายมือ <b>“∵ สูญเสีย tissue น้อย”</b>",
 wrong={
  "A":"เวลาและค่าใช้จ่ายอยู่ฝั่ง<b>ข้อเสีย</b>ของ Mohs เพราะต้องรอ frozen ทีละรอบ ใช้เวลาหลายชั่วโมง และต้องมีทีมเฉพาะ แม้บางการศึกษาพบต้นทุนรวมใกล้เคียงการตัดที่ต้องตัดซ้ำ · ไม่มีสถานการณ์ใดที่ความเร็วและราคาถูกเป็นข้อดีหลักของ Mohs เพราะสไลด์หน้า 58 จัด Time, Cost ไว้เป็น Disadvantage โดยตรง",
  "B":"หลัง Mohs ยังมีแผลที่ต้องดูแล ส่วนใหญ่ต้องเย็บปิด ใช้ flap หรือ graft เพียงแต่แผลเล็กกว่าการตัดกว้าง แผลเล็กบางแผลในส่วนเว้าอาจปล่อยหายเอง แต่เป็นผลของขนาดและตำแหน่ง · ไม่มีสถานการณ์ใดที่การไม่ต้องซ่อมแผลเป็นข้อดีหลักของ Mohs เพราะลายมือหน้า 57 ระบุขั้นสุดท้ายว่า reconstruct แล้วปิดแผลเมื่อขอบ free",
  "C":"หัวใจของ Mohs คือการตรวจ<b>ทางพยาธิ</b>ทุกชั้นด้วย frozen section ไม่ใช่การกะขอบด้วยตา ซึ่งเป็นจุดอ่อนของการตัดทั่วไปที่ Mohs ถูกพัฒนามาแก้ · ไม่มีสถานการณ์ใดที่ Mohs ข้ามการตรวจชิ้นเนื้อ เพราะถ้าไม่ตรวจ histology ทุกชั้นก็ไม่ใช่ Mohs ตามนิยาม",
  "E":"ความสวยดีขึ้นแต่หายน้อยลงเป็นลักษณะของการรักษาแบบไม่ผ่าตัดอย่าง imiquimod หรือ PDT ใน superficial BCC ส่วน Mohs ได้ทั้งสองอย่างโดยไม่ต้องแลก · ไม่มีสถานการณ์ใดที่ Mohs มีอัตราหายต่ำกว่าการตัดมาตรฐาน เพราะการตรวจขอบครบทำให้อัตราหายสูงที่สุดในทุกวิธีรักษา BCC"},
 trap="คนมักคิดว่าวิธีที่<b>ประหยัดเนื้อ</b>ต้องแลกด้วยอัตราหายที่ต่ำลง จึงเลือกข้อที่ว่าสวยกว่าแต่หายน้อยกว่า — Mohs ได้ทั้งสองอย่างเพราะดูขอบครบ · แยกให้ออกว่าเวลาและค่าใช้จ่ายอยู่ฝั่งข้อเสีย",
 summary=[
  "ข้อดี Mohs (สไลด์หน้า 58): <b>High cure rates · Decrease morbidity · Tissue conservation</b>",
  "ข้อเสีย: Time, Cost · Inconvenience to patient · Require specialist",
  "หลักการ: ตัดทีละชั้น → frozen แนวนอน ดูขอบรอบและลึกครบ → ตัดเพิ่มเฉพาะจุด positive → free → reconstruct",
  "อัตราหาย BCC: Mohs primary ~99% · recurrent ~94% · ชีทหน้า 17 ให้การตัดขอบ 5 มม. หาย 98% ใน primary และ 80% ใน recurrent",
  "ข้อบ่งชี้: เปลือกตา จมูก ริมฝีปาก หู · ขอบไม่ชัด morpheaform · เป็นซ้ำ · perineural · ก้อนใหญ่",
  "BCC low-risk ที่ลำตัว: standard excision ก็เพียงพอ ไม่จำเป็นต้อง Mohs"],
 opinion="เห็นด้วยกับคำตอบ D ความมั่นใจสูง — ตรงกับสไลด์หน้า 58 และ Appropriate Use Criteria ปี 2012 ที่ให้ Mohs เหมาะกับ BCC บริเวณเปลือกตา · ชีทหน้า 17 ให้การตัดขอบ 5 มม. หาย 98% ใน primary lesion ซึ่งสูงกว่าที่รายงานในการศึกษาระยะยาว (ราว 90–95% ที่ 5 ปี) และ NCCN Basal Cell Skin Cancer 2025 ลดขอบ low-risk เป็น 4 mm · ข้อควรรู้คือ Mohs ไม่ได้เหมาะกับทุกก้อน BCC low-risk ที่ลำตัวใช้การตัดมาตรฐานก็พอ",
 mnemonic="<b>“Mohs = Most cure + Most tissue saved” แลกด้วย Time, Cost, Specialist</b>",
 guide="AAD/ACMS/ASDSA/ASMS Appropriate Use Criteria for Mohs Micrographic Surgery (2012); NCCN Clinical Practice Guidelines in Oncology: Basal Cell Skin Cancer (2025)",
 variants=[
  "หญิงอายุ 92 ปีมี BCC 8 mm ที่เปลือกตาล่าง นอนนานไม่ได้และปฏิเสธการผ่าตัด → รังสีรักษา อัตราหายดีในก้อนเล็ก แม้ต่ำกว่า Mohs",
  "หลัง Mohs ที่เปลือกตาล่างเหลือแผลเต็มความหนาราว 1 ใน 4 ของความยาวเปลือกตา → เย็บปิดตรงเป็นชั้นได้ ± lateral canthotomy",
  "BCC ที่แก้มเป็นซ้ำหลังเคยฉายรังสีเมื่อ 5 ปีก่อน → Mohs เพราะ recurrent BCC ในเนื้อเยื่อที่ถูกฉายแล้วขอบไม่ชัด"])

mk(Q, 79, [59, 's6', 's7'],
 stem="A 78-year-old woman with a hip fracture cannot move in bed. Which measure best prevents a sacral pressure injury?",
 opts=["Daily topical antibiotic cream on the sacrum","A ring-shaped donut cushion under the sacrum","Massaging the reddened skin over bony points","Keeping her supine to minimize fracture pain","Repositioning at least every 2 hours"],
 interp="หญิงสูงอายุสะโพกหัก<b>ขยับตัวเองไม่ได้</b> นอนหงายเป็นหลัก → เสี่ยงแผลกดทับที่ sacrum · ถามวิธีป้องกันที่ดีที่สุด ต้องใช้หลักว่าเนื้อเยื่อตายเมื่อแรงกดเกินความดันในหลอดเลือดฝอยนานราว 2 ชั่วโมง จึงต้องลดเวลาที่ถูกกด",
 why="Pressure injury เกิดเมื่อแรงกดเหนือปุ่มกระดูก<b>สูงกว่าความดันในหลอดเลือดฝอย</b> (arteriole 32, capillary 20, venule 12 mmHg) นานพอจนเนื้อเยื่อขาดเลือด · ท่านอนหงายทำให้แรงกดที่ <b>sacrum สูงถึงราว 150 mmHg</b> และท่านั่งที่ ischial tuberosity ถึง 300 mmHg · แรงกดราว 2 เท่าของ capillary pressure ต่อเนื่องราว <b>2 ชั่วโมง</b> ทำให้เกิดความเสียหายถาวร · <b>กล้ามเนื้อทนขาดเลือดได้น้อยกว่าผิวหนัง</b> แผลจึงตายจากชั้นลึกก่อนที่ผิวจะเห็น · มาตรการหลักจึงเป็น<b>การเปลี่ยนท่าเป็นระยะ</b> โดยทั่วไปทุก 2 ชั่วโมง ปรับตามความเสี่ยงและชนิดที่นอน ตะแคง 30° ยกหัวเตียงไม่เกิน 30° ร่วมกับประเมินความเสี่ยงด้วย <b>Braden scale</b> ที่นอนลดแรงกด ยกส้นเท้าลอย ดูแลความชื้น โภชนาการ และคุมปวดให้พลิกตัวได้ · ในสะโพกหัก การผ่าตัดเร็วเพื่อให้ลุกได้ก็ลดแผลกดทับ · สไลด์หน้า 59 ลายมือ <b>“ถ้า P เกิน 2 เท่า ของ capillary arterial end 2 ชม. → irreversible tissue damage ∴ พลิกตัวทุก 2 ชม.”</b> และ <b>“best = prevent”</b>",
 wrong={
  "A":"ยาปฏิชีวนะทาไม่ได้ลดแรงกดหรือเพิ่มเลือดเลี้ยง ทาบนผิวปกติทุกวันยังเสี่ยงแพ้ยาและเชื้อดื้อยา ใช้เฉพาะเมื่อแผลมีการติดเชื้อเฉพาะที่ · ไม่มีสถานการณ์ใดที่การทายาปฏิชีวนะบนผิวที่ยังดีเป็นวิธีป้องกันแผลกดทับที่ดีที่สุด เพราะต้นเหตุคือการขาดเลือดจากแรงกด ไม่ใช่เชื้อโรค",
  "B":"ห่วงยางหรือเบาะรูปโดนัททำให้แรงกดไปรวมที่ขอบห่วง และเลือดดำคั่งตรงกลาง กลับเพิ่มการขาดเลือดรอบจุดที่ต้องการปกป้อง แนวทาง EPUAP/NPIAP 2019 จึงไม่แนะนำ · ไม่มีสถานการณ์ใดที่เบาะรูปห่วงเป็นวิธีป้องกันแผลกดทับที่ดีที่สุด เพราะอุปกรณ์ที่เหมาะคือที่นอนหรือเบาะที่กระจายแรงกดทั้งพื้นผิว",
  "C":"การนวดแรง ๆ บนผิวที่แดงเหนือปุ่มกระดูกทำให้เนื้อเยื่อที่ขาดเลือดอยู่แล้วบาดเจ็บเพิ่มจากแรงเสียดทานและแรงเฉือน แนวทางปัจจุบันให้หลีกเลี่ยง · ไม่มีสถานการณ์ใดที่การนวดผิวแดงเหนือปุ่มกระดูกเป็นวิธีป้องกันที่ดีที่สุด เพราะผิวแดงที่กดไม่จางคือ stage 1 ซึ่งต้องลดแรงกด ไม่ใช่เพิ่มแรงกดลงไปอีก",
  "D":"การนอนหงายท่าเดิมตลอดคือกลไกที่ทำให้ sacrum ถูกกดต่อเนื่องจนเกิดแผล ความปวดจากกระดูกหักต้องแก้ด้วยยาแก้ปวดและการพลิกตัวแบบประคอง (log roll) ไม่ใช่งดพลิก · ไม่มีสถานการณ์ใดที่การคงท่าเดิมช่วยป้องกันแผลกดทับ เพราะเวลาที่ถูกกดต่อเนื่องคือปัจจัยหลักของการเกิดแผล"},
 trap="การพลิกตัวทำให้ผู้ป่วยกระดูกหักปวด จึงชวนให้เลือกคงท่าเดิม ส่วนห่วงโดนัทและการนวดดูเหมือนดูแลดีแต่เพิ่มแรงกดหรือแรงเฉือน — หลักคือ <b>ลดเวลาและขนาดของแรงกด</b>: คุมปวดแล้วพลิกตัวตามเวลา ร่วมกับที่นอนลดแรงกด",
 summary=[
  "ป้องกันแผลกดทับ = <b>ลดแรงกดด้วยการเปลี่ยนท่าเป็นระยะ</b> ทุก 2 ชม. · best = prevent (ลายมือหน้า 59)",
  "ความดันในหลอดเลือด: arteriole 32 · capillary 20 · venule 12 mmHg (ชีทหน้า 6)",
  "แรงกด: นั่ง → ischial tuberosity ~300 mmHg · นอนหงาย → sacrum ~150 mmHg · ตะแคง → greater trochanter, lateral malleolus, ใบหู",
  "กล้ามเนื้อทนขาดเลือดน้อยกว่าผิวหนัง → ตายจากข้างใน ผิวที่เห็นจึงเล็กกว่าความเสียหายจริง (ชีทหน้า 7)",
  "ชุดป้องกัน: Braden scale · ที่นอนกระจายแรงกด · ตะแคง 30° · หัวเตียง ≤ 30° · ยกส้นลอย · คุมความชื้น · โภชนาการ",
  "ไม่ควรทำ: ห่วงโดนัท · นวดผิวแดงเหนือปุ่มกระดูก · ปล่อยท่าเดิมเพราะกลัวปวด"],
 opinion="เห็นด้วยกับคำตอบ E ความมั่นใจสูง — ลายมือหน้า 59 และชีทหน้า 7 เน้นการป้องกันด้วยการพลิกตัว · แนวทาง EPUAP/NPIAP/PPPIA 2019 ไม่ได้กำหนดตายตัวว่า 2 ชั่วโมง แต่ให้กำหนดความถี่ตามความเสี่ยง สภาพผิว และชนิดที่นอน ซึ่งบางการศึกษาพบว่าบนที่นอนโฟมคุณภาพสูง การพลิกทุก 3–4 ชั่วโมงในผู้ป่วยความเสี่ยงปานกลางให้ผลไม่ต่างกัน · ทุก 2 ชั่วโมงยังเป็นมาตรฐานปฏิบัติที่ปลอดภัยสำหรับผู้ป่วยขยับตัวไม่ได้บนที่นอนธรรมดา · ลายมือเขียนชื่อเก่า bedsore ปัจจุบัน NPIAP ใช้ pressure injury ตั้งแต่ปี 2016",
 mnemonic="<b>“2 เท่า 2 ชั่วโมง → พลิกทุก 2 ชั่วโมง”</b>",
 guide="EPUAP/NPIAP/PPPIA Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline 3rd ed. (2019); NICE Guideline CG179 Pressure ulcers: prevention and management (2014)",
 variants=[
  "ผู้ป่วยติดเตียงที่ให้อาหารทางสายและถูกยกหัวเตียง 60° ตลอดวัน เกิดแผลที่ก้นกบ → แรงเฉือนจากการไถลลง ยกหัวเตียงไม่เกิน 30° ยกเว้นช่วงให้อาหาร",
  "หลังผ่าตัดสะโพก ส้นเท้าวางบนเตียงตลอดจนเป็นปื้นม่วงคล้ำมีตุ่มน้ำเลือด → deep tissue pressure injury ยกส้นเท้าให้ลอยจากที่นอน",
  "ผู้ป่วยกลั้นอุจจาระปัสสาวะไม่ได้ ผิวก้นเปื่อยแดงกระจายไม่ตรงปุ่มกระดูก → incontinence-associated dermatitis ไม่ใช่แผลกดทับ ดูแลความชื้นด้วย barrier cream"])

mk(Q, 80, [59, 60, 's6', 's7'],
 stem="A 33-year-old man with paraplegia uses a wheelchair all day. He has a deep ulcer over the ischial tuberosity with exposed bone at its base. Which statement is correct?",
 opts=["A stage 4 pressure injury from prolonged sitting","A stage 3 pressure injury from prolonged sitting","A stage 4 pressure injury from lying supine for long periods","A Marjolin's ulcer arising in a chronic wound","An unstageable injury that needs debridement before staging"],
 interp="ผู้ป่วยอัมพาตครึ่งล่างนั่งวีลแชร์ทั้งวัน แผลที่ <b>ischial tuberosity</b> ลึกจน<b>เห็นกระดูก</b> → ถามข้อความที่ถูก ต้องจับคู่สองเรื่อง: ตำแหน่งบอกท่าที่ทำให้เกิด (ischium = นั่ง) และความลึกบอกระยะ (เห็นกระดูก = stage 4)",
 why="ตำแหน่งแผลกดทับสะท้อนท่าที่ถูกกด: <b>นั่ง → ischial tuberosity</b> (แรงกดได้ถึงราว 300 mmHg) · <b>นอนหงาย → sacrum</b> · ตะแคง → greater trochanter · ผู้ป่วยไขสันหลังบาดเจ็บเสี่ยงสูงเพราะ<b>ไม่มีความรู้สึก</b>และขยับลดแรงกดเองไม่ได้ · ระยะตาม NPIAP 2016: <b>1</b> ผิวไม่แตก แดงกดไม่จาง · <b>2</b> สูญเสียผิวบางส่วน เห็น dermis หรือตุ่มน้ำใส · <b>3</b> สูญเสียผิวเต็มความหนา เห็นไขมัน · <b>4</b> สูญเสียเต็มความหนา<b>เห็นหรือคลำได้ fascia กล้ามเนื้อ เอ็น กระดูกอ่อน หรือกระดูก</b> · unstageable เมื่อพื้นแผลถูก slough หรือ eschar บัง · DTPI เป็นปื้นม่วงคล้ำหรือตุ่มน้ำเลือด · แผลเห็นกระดูกต้องประเมิน <b>osteomyelitis</b> ด้วย bone biopsy หรือ MRI รักษาด้วยงดนั่งทับ debride โภชนาการ แล้วผ่าตัดตัดปุ่มกระดูกบางส่วนและปิดด้วย <b>flap</b> เช่น posterior thigh flap · สไลด์หน้า 59 <b>“Sitting position: ischial tuberosities”</b> และหน้า 60 <b>“StageIV: Involvement of bone or joint”</b>",
 wrong={
  "B":"Stage 3 คือแผลเต็มความหนาของผิวหนังที่เห็นชั้นไขมัน แต่ยังไม่เห็น fascia กล้ามเนื้อหรือกระดูก ตำแหน่งและท่าถูกแต่ระยะต่ำกว่าความจริง เพราะเห็นกระดูกแล้ว · จะถูกถ้าผู้ใช้วีลแชร์อีกรายมีแผลที่ ischium ลึกถึงชั้นไขมันสีเหลือง มองไม่เห็นและคลำไม่ได้ทั้งกล้ามเนื้อและกระดูกที่พื้นแผล",
  "C":"Stage 4 ถูกตามความลึก แต่ท่านอนหงายกดที่ sacrum ไม่ใช่ ischial tuberosity ซึ่งรับน้ำหนักเมื่อนั่ง แผลที่ ischium ในคนนั่งวีลแชร์จึงมาจากการนั่ง · จะถูกถ้าผู้ป่วยติดเตียงที่นอนหงายตลอดหลังโรคหลอดเลือดสมอง มีแผลลึกที่ก้นกบจนเห็นกระดูก sacrum ที่พื้นแผล",
  "D":"Marjolin's ulcer เป็นมะเร็ง ส่วนใหญ่ SCC ที่เกิดในแผลเรื้อรังหลายปี รวมถึงแผลกดทับเก่า แต่ต้องมีลักษณะเปลี่ยน เช่น ขอบนูนแข็งพลิกออก โตเร็ว เลือดออกง่าย และยืนยันด้วย biopsy · จะถูกถ้าชายอัมพาตครึ่งล่างที่มีแผลกดทับที่ ischium มา 20 ปี เริ่มมีขอบแผลนูนแข็งพลิกออก มีกลิ่น และ biopsy พบ SCC",
  "E":"Unstageable ใช้เมื่อมองไม่เห็นพื้นแผลเพราะ slough หรือ eschar ปกคลุม จึงต้อง debride ก่อนจึงจัดระยะได้ แต่แผลที่เห็นกระดูกที่พื้นชัดแล้วจัดระยะได้ทันที · จะถูกถ้าผู้ป่วยติดเตียงมีแผลที่ sacrum ปกคลุมด้วย eschar สีดำแข็งทั้งแผล มองไม่เห็นความลึกของพื้นแผลเลย"},
 trap="ข้อนี้รวมสองเรื่อง: <b>ตำแหน่ง ↔ ท่า</b> และ <b>ความลึก ↔ ระยะ</b> ช้อยหลอกถูกครึ่งเดียว คือ stage 4 แต่ท่านอนหงาย หรือท่านั่งแต่ stage 3 · อีกจุดคือสไลด์หน้า 60 จัด stage III ถึงกล้ามเนื้อ แต่เห็นกระดูกเป็น stage 4 ตรงกันทุกระบบ",
 summary=[
  "แผลที่ ischium + เห็นกระดูก = <b>stage 4 จากการนั่งนาน</b>",
  "ตำแหน่ง ↔ ท่า (สไลด์หน้า 59): นั่ง = ischial tuberosities · นอนหงาย = sacral area",
  "สไลด์หน้า 60: I แดงเกิน 1 ชม. ผิวไม่แตก · II ตุ่มน้ำหรือ dermis แตก · III ถึงกล้ามเนื้อ · IV ถึงกระดูกหรือข้อ",
  "NPIAP 2016: stage 3 เห็นไขมัน · stage 4 เห็น fascia กล้ามเนื้อ เอ็น หรือกระดูก · unstageable · DTPI",
  "SCI: ไม่มีความรู้สึก ขยับเองไม่ได้ → ยกตัวลดแรงกดขณะนั่งทุก 15–30 นาที + เบาะกระจายแรงกด",
  "Stage 4 ถึงกระดูก: debride + ตัดปุ่มกระดูก + flap ปิด เช่น posterior thigh flap · เป็นซ้ำสูงถ้ายังนั่งแบบเดิม"],
 opinion="เห็นด้วยกับคำตอบ A ความมั่นใจสูง — ischium คู่กับท่านั่งตามสไลด์หน้า 59 และเห็นกระดูกเป็น stage IV ตามสไลด์หน้า 60 ซึ่งตรงกับ NPIAP 2016 · จุดที่สไลด์ต่างจาก NPIAP 2016: stage III ในสไลด์คือถึงกล้ามเนื้อ แต่ NPIAP ถือว่าเห็นกล้ามเนื้อเป็น stage 4 และ stage 1 ในสไลด์ใช้เกณฑ์แดงนานเกิน 1 ชั่วโมง ขณะที่ NPIAP ใช้ผิวแดงที่กดไม่จาง · NPIAP ยังเพิ่ม unstageable และ deep tissue pressure injury ที่สไลด์ไม่ได้กล่าวถึง และเปลี่ยนชื่อเป็น pressure injury ใช้เลขอารบิก",
 mnemonic="<b>“นั่งกด Ischium · นอนกด Sacrum · เห็นกระดูก = 4”</b>",
 guide="NPIAP Pressure Injury Stages (2016); EPUAP/NPIAP/PPPIA Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline 3rd ed. (2019); Consortium for Spinal Cord Medicine — Pressure Ulcer Prevention and Treatment Following Spinal Cord Injury 2nd ed. (2014)",
 variants=[
  "ผู้ป่วยอัมพาตจากไขสันหลังระดับ T4 ขณะทำแผลกดทับเกิดปวดศีรษะรุนแรง ความดันพุ่ง ชีพจรช้า หน้าแดง → autonomic dysreflexia หยุดสิ่งกระตุ้น จัดนั่งยกศีรษะ ตรวจกระเพาะปัสสาวะ",
  "แผล stage 4 ที่ ischium พื้นกระดูกนุ่มขรุขระ ESR สูง → bone biopsy ส่งเพาะเชื้อและพยาธิเพื่อยืนยัน osteomyelitis ก่อนให้ยาตามเชื้อและวางแผน flap",
  "หลังผ่าตัดปิดแผลที่ ischium ด้วย flap → งดนั่งทับหลายสัปดาห์ แล้วเพิ่มเวลานั่งทีละน้อยพร้อมตรวจผิวหลังนั่งทุกครั้ง"])

save(Q, 'parts/fill/l22_r08.json')

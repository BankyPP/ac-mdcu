import sys; sys.path.insert(0,'/home/claude/ac-mdcu/parts')
from l22_common import mk, save
Q={}

mk(Q, 131, ['s10','s11'],
 stem="Histology of a mole shows nevus cells located entirely within the dermis. How is this nevus classified?",
 opts=["Intradermal nevus","Dysplastic nevus","Junctional nevus","Congenital melanocytic nevus","Compound nevus"],
 interp="พยาธิของไฝพบ nevus cell อยู่ใน dermis ทั้งหมด ไม่มีรังเซลล์ที่รอยต่อ epidermis–dermis → เป็นไฝธรรมดา (acquired melanocytic nevus) ที่ถามชนิดตาม<b>ตำแหน่งความลึกของ nevus cell</b> ต้องใช้หลักการแบ่ง junctional → compound → dermal ไม่ใช่การแบ่งตามเวลาที่เกิดหรือความผิดปกติของเซลล์",
 why="ไฝธรรมดา (acquired melanocytic nevus) ประกอบด้วย <b>nevus cell</b> ที่เปลี่ยนมาจาก melanocyte — ตัวใหญ่กว่า ไม่มี dendrite มี cytoplasm มาก และอยู่รวมกันเป็นรัง (nest) · การแบ่งชนิดใช้<b>ตำแหน่งของรัง nevus cell</b> ซึ่งสะท้อนวงจรชีวิตของไฝ: เริ่มเป็น <b>junctional</b> (รังอยู่ที่รอยต่อ epidermis–dermis → ไฝแบน สีน้ำตาลเข้มสม่ำเสมอ พบมากในเด็ก ฝ่ามือ ฝ่าเท้า อวัยวะเพศ) → <b>compound</b> (มีทั้งที่รอยต่อและลงไปใน dermis บางส่วน → นูนเล็กน้อย ตรงกลางสีเข้ม) → <b>intradermal</b> (อยู่ใน dermis ทั้งหมด → ตุ่มโดมนุ่ม สีจางถึงสีเนื้อ อาจมีขนงอก พบมากในผู้ใหญ่ที่ใบหน้า) · เซลล์ที่ลงลึกจะเล็กลงและสร้างเม็ดสีน้อยลง (<b>maturation</b>) ไฝ intradermal จึงสีจาง และ maturation เป็นเกณฑ์สำคัญที่พยาธิแพทย์ใช้แยกไฝธรรมดาจาก melanoma · ไฝเพิ่มขนาด สี และจำนวนในช่วงวัยรุ่น การตั้งครรภ์ และจากการตากแดดบ่อย · ชีทหน้า 11 <b>“ชนิดของไฝสามารถแบ่งตามความลึกของ nevus cells อยู่ที่รอยต่อระหว่าง epidermis และ dermis (junctional) เคลื่อนลงไปใน dermis บางส่วน (compound) และเคลื่อนลงไปอยู่ใน dermis ทั้งหมด (dermal)”</b>",
 wrong={
  "B":"Dysplastic (atypical) nevus แบ่งจาก<b>ความผิดปกติ</b>ทั้งโครงสร้าง (architectural disorder) และตัวเซลล์ (cytologic atypia) ไม่ใช่จากความลึก ทางคลินิกมีลักษณะ ABCD และใหญ่กว่า 8 mm ตามชีท ส่วนไฝที่เซลล์อยู่ใน dermis ทั้งหมดและเรียงตัวปกติคือ intradermal · จะถูกถ้าหญิงอายุ 28 ปีมีไฝหลายเม็ดที่หลัง เม็ดหนึ่ง 9 mm ขอบไม่ชัด สีไม่สม่ำเสมอ และชิ้นเนื้อพบรังเซลล์เชื่อมกันเป็นสะพานร่วมกับเซลล์ผิดรูป",
  "C":"Junctional nevus คือระยะแรกที่รัง nevus cell ยังอยู่ที่รอยต่อ epidermis–dermis ทั้งหมด ไม่มีเซลล์ลงไปใน dermis จึงแบนและสีเข้ม — ตรงข้ามกับชิ้นเนื้อที่ให้มาซึ่งเซลล์อยู่ใน dermis ทั้งหมดและไม่เหลือที่รอยต่อ · จะถูกถ้าเด็กหญิงอายุ 8 ปีมีไฝแบนสีน้ำตาลเข้มสม่ำเสมอ 3 mm ที่ฝ่ามือ และชิ้นเนื้อพบรังเซลล์อยู่เฉพาะที่รอยต่อ epidermis กับ dermis",
  "D":"Congenital melanocytic nevus จัดกลุ่มจาก<b>เวลาที่เกิด</b> (มีตั้งแต่แรกเกิดหรือขวบปีแรก) และขนาดที่คาดในวัยผู้ใหญ่ ไม่ใช่จากความลึกอย่างเดียว แม้ CMN มักมีเซลล์ลงลึกถึง dermis ชั้นล่างและเรียงรอบรูขุมขน · ไม่มีสถานการณ์ใดที่ตำแหน่งของ nevus cell บนชิ้นเนื้ออย่างเดียวจัดไฝเป็น congenital ได้ เพราะการจัดกลุ่มนี้ต้องอาศัยประวัติว่ามีมาตั้งแต่เกิด",
  "E":"Compound nevus มีรังเซลล์ทั้งที่รอยต่อ epidermis–dermis และลงไปใน dermis บางส่วน เป็นระยะกลางระหว่าง junctional กับ intradermal ซึ่งยังมีส่วนที่รอยต่อเหลืออยู่ ต่างจากชิ้นเนื้อที่ให้มาซึ่งไม่มีเซลล์ที่รอยต่อแล้ว · จะถูกถ้าชายอายุ 22 ปีมีไฝนูนเล็กน้อยสีน้ำตาลที่แขน และชิ้นเนื้อพบรังเซลล์ที่รอยต่อร่วมกับรังเซลล์ใน papillary dermis"},
 trap="ตัวเลือก dysplastic และ congenital เป็นชื่อไฝที่คุ้นและฟังดูสำคัญกว่า แต่ใช้คนละเกณฑ์ (ความผิดปกติของเซลล์ และเวลาที่เกิด) — คำถามให้ข้อมูลตำแหน่งความลึกอย่างเดียว จึงต้องตอบในแกนเดียวกัน: รอยต่อ = junctional · รอยต่อ + dermis = compound · dermis ล้วน = intradermal",
 summary=[
  "แบ่งไฝตามความลึกของ nevus cell (ชีทหน้า 11): <b>junctional</b> (รอยต่อ) → <b>compound</b> (รอยต่อ + dermis บางส่วน) → <b>dermal</b> (dermis ทั้งหมด)",
  "Nevus cell มาจาก melanocyte: ตัวใหญ่กว่า ไม่มี dendrite cytoplasm มากกว่า (ชีทหน้า 10)",
  "ลักษณะทางคลินิก: junctional แบนสีเข้ม · compound นูนเล็กน้อย · intradermal โดมนุ่มสีจางถึงสีเนื้อ อาจมีขน",
  "Maturation: เซลล์ยิ่งลึกยิ่งเล็กและเม็ดสีน้อยลง — ไม่มี maturation ชวนสงสัย melanoma",
  "ไฝเพิ่มขนาด สี และจำนวนในวัยรุ่น การตั้งครรภ์ และการตากแดดบ่อย (ชีทหน้า 10)",
  "Dysplastic nevus แบ่งจาก atypia · ชีทใช้ ABCD โดย D &gt; 8 mm · เสี่ยง melanoma 6% และ 15% ถ้าครอบครัวมีประวัติ (ชีทหน้า 11)"],
 opinion="เห็นด้วยกับคำตอบ A ความมั่นใจสูง — ชีทหน้า 11 แบ่งไฝตามความลึกไว้ตรงตัว และตรงกับตำราพยาธิผิวหนังปัจจุบัน (WHO Classification of Skin Tumours 4th ed. 2018) · จุดที่ควรรู้: ชีทหน้า 10 เขียนว่าไฝ acquired พบราว 1% ในทารกแรกเกิด ซึ่งตัวเลขนี้คือความชุกของ congenital nevus ส่วนไฝ acquired มักเริ่มขึ้นหลังอายุราว 6 เดือน · และแนวคิดว่าเซลล์ ‘เคลื่อนลง’ จากรอยต่อสู่ dermis เป็นแบบจำลองดั้งเดิมที่ยังใช้สอน แม้งานวิจัยใหม่เสนอว่าเซลล์บางส่วนอาจมีที่มาต่างกัน",
 mnemonic="<b>'J → C → D: Junction ลง Compound ลง Dermis — ยิ่งลึกยิ่งนูน ยิ่งจาง'</b>",
 guide="WHO Classification of Skin Tumours 4th ed. (IARC 2018) — Melanocytic tumours; Bolognia Dermatology 4th ed. (2018) — Benign melanocytic neoplasms",
 variants=[
  "ชายอายุ 45 ปีมีตุ่มโดมนุ่มสีเนื้อที่ข้างจมูกมีขนงอก เป็นมาหลายปีไม่เปลี่ยนแปลง → intradermal nevus ตัดแบบ shave ได้ถ้าต้องการเพื่อความสวยงาม",
  "ชิ้นเนื้อไฝพบรังเซลล์ลงลึก แต่เซลล์ส่วนล่างไม่เล็กลงและยังพบ mitosis → ขาด maturation ต้องคิดถึง melanoma และส่งพยาธิแพทย์ผิวหนังทบทวน",
  "หญิงตั้งครรภ์ไตรมาสสองเห็นไฝทั้งตัวสีเข้มขึ้นพร้อมกัน แต่มีเม็ดเดียวที่เปลี่ยนรูปร่างต่างจากเม็ดอื่น → เม็ดที่ต่างจากพวก (ugly duckling) ต้องตัดตรวจ ส่วนที่เหลือเป็นผลของฮอร์โมน",
  "เด็กอายุ 10 ปีมีไฝแบนสีเข้มที่ฝ่าเท้า สมมาตร ขอบเรียบ → acral junctional nevus ที่พบบ่อย ติดตามด้วย dermoscopy ไม่ต้องตัดทุกราย"])

mk(Q, 132, ['s11','s12'],
 stem="A 4-year-old boy has a giant congenital hairy nevus covering the scalp, posterior neck and upper back, with dozens of smaller satellite nevi. He recently had his first seizure. Which associated condition should be suspected?",
 opts=["Tuberous sclerosis complex with cortical tubers","Neurofibromatosis type 2","Xeroderma pigmentosum with neurodegeneration","Leptomeningeal melanocytosis","Sturge–Weber syndrome with pial angiomatosis"],
 interp="เด็ก 4 ขวบมีปานดำมีขนขนาดยักษ์ (giant CMN) คลุมหนังศีรษะ คอ และหลังส่วนบน มี satellite nevi จำนวนมาก แล้วเริ่มชัก → ถามภาวะร่วมทางระบบประสาทที่ต้องสงสัย ต้องรู้ว่า CMN ใหญ่ที่ศีรษะหรือแนวกลางหลังและมี satellite มาก สัมพันธ์กับ melanocyte ในเยื่อหุ้มสมอง ไม่ใช่ neurocutaneous syndrome ชนิดอื่น",
 why="Congenital melanocytic nevus (CMN) เกิดจาก <b>somatic mutation ของ NRAS</b> (ส่วนน้อย BRAF) ในเซลล์ต้นกำเนิด melanocyte ช่วงตัวอ่อน — เซลล์ที่กลายพันธุ์อพยพไปทั้งผิวหนังและ<b>เยื่อหุ้มสมองชั้น leptomeninges</b> จึงเกิด <b>leptomeningeal melanocytosis</b> (neurocutaneous melanosis) · ปัจจัยเสี่ยงสำคัญ: ขนาดคาดในวัยผู้ใหญ่ <b>&gt; 40 cm (giant)</b> ตำแหน่ง<b>ศีรษะ คอ และแนวกลางลำตัวด้านหลัง</b> และ<b>satellite nevi จำนวนมาก</b> (ราวเกิน 20 เม็ด) · melanocyte ในเยื่อหุ้มสมองขัดขวางการดูดซึมน้ำไขสันหลัง → <b>communicating hydrocephalus</b> และระคายเปลือกสมอง → <b>ชัก</b> focal deficit พัฒนาการช้า หรือกลายเป็น primary CNS melanoma · รายที่มีอาการพยากรณ์โรคไม่ดี · ตรวจด้วย <b>MRI สมองและไขสันหลังพร้อม gadolinium</b> ในเด็กกลุ่มเสี่ยงควรทำช่วง 6 เดือนแรก ก่อน myelin บดบังสัญญาณของเม็ดสี และต้องทำทันทีเมื่อมีอาการทางระบบประสาท · ชีทหน้า 11 <b>“ถ้าพบขนาดใหญ่บริเวณศีรษะอาจมี leptomeningeal melanocytosis ของสมองหรือไขสันหลังร่วมได้ ซึ่งอาจจะไม่มีอาการ หรือมี communicating hydrocephalus, seizures”</b>",
 wrong={
  "A":"Tuberous sclerosis complex เป็น neurocutaneous syndrome ที่ชักบ่อยมากจาก cortical tuber แต่รอยโรคผิวคือ hypomelanotic macule (ปื้นขาวรูปใบไม้) facial angiofibroma และ shagreen patch ไม่ใช่ปานดำมีขน · จะถูกถ้าทารกอายุ 8 เดือนมี infantile spasm ร่วมกับปื้นขาวรูปใบไม้หลายปื้นที่ลำตัว และ echocardiogram พบ cardiac rhabdomyoma",
  "B":"Neurofibromatosis type 2 เกิดจากยีน NF2 ทำให้เกิด schwannoma ของเส้นประสาทหูทั้งสองข้าง meningioma และต้อกระจกวัยเยาว์ รอยโรคผิวมีน้อยและไม่มีปานดำขนาดใหญ่ · จะถูกถ้าชายอายุ 18 ปีมีก้อน schwannoma ชนิดปื้นนูนใต้ผิวหลายก้อน ร่วมกับการได้ยินลดลงทั้งสองหูและเสียงในหู",
  "C":"Xeroderma pigmentosum เป็นโรคพันธุกรรม autosomal recessive ที่ซ่อม DNA ที่ถูก UV ทำลายไม่ได้ ผิวไหม้แดดง่าย มีกระและมะเร็งผิวตั้งแต่เด็ก บางชนิดมีระบบประสาทเสื่อม แต่ไม่มีปานดำมีขนแต่กำเนิด · จะถูกถ้าเด็กอายุ 6 ปีมีกระหนาแน่นเฉพาะที่โดนแดด ไหม้แดดรุนแรงตั้งแต่ทารก มี BCC ที่จมูก และการได้ยินกับพัฒนาการถดถอย",
  "E":"Sturge–Weber syndrome ทำให้ชักจาก leptomeningeal angiomatosis เช่นกัน แต่รอยโรคผิวคือ capillary malformation (port-wine stain) สีแดงม่วงแบนที่หน้าผากและเปลือกตาบน ไม่ใช่ปานดำมีขน · จะถูกถ้าเด็กอายุ 2 ปีมีปื้นแดงม่วงแบนที่หน้าผากทั้งสองข้างตั้งแต่เกิด แล้วชักและแขนขาอ่อนแรงครึ่งซีกหลังชัก"},
 trap="ชักในเด็กที่มีรอยโรคผิวทำให้นึกถึง neurocutaneous syndrome ที่คุ้นกว่า เช่น tuberous sclerosis หรือ Sturge–Weber ซึ่งก็ชักและมีความผิดปกติที่สมอง — ตัวแยกคือ<b>ชนิดของรอยโรคผิว</b>: ปานดำมีขนขนาดยักษ์ + satellite มาก = melanocyte ในเยื่อหุ้มสมอง · ปื้นแดงม่วงแบน = angiomatosis · ปื้นขาว = tuber",
 summary=[
  "CMN ใหญ่ที่ศีรษะหรือแนวกลางหลัง + ชักหรือ hydrocephalus → สงสัย <b>leptomeningeal melanocytosis</b> (ชีทหน้า 11)",
  "ปัจจัยเสี่ยง: ขนาดคาดในผู้ใหญ่ &gt; 40 cm (giant) · แนวกลางลำตัวด้านหลัง · satellite nevi จำนวนมาก",
  "อาการ: อาจไม่มีอาการ · communicating hydrocephalus · ชัก · focal deficit · พัฒนาการช้า · CNS melanoma — รายที่มีอาการพยากรณ์โรคไม่ดี",
  "ตรวจ: MRI สมองและไขสันหลังพร้อม contrast ในทารกกลุ่มเสี่ยงช่วง 6 เดือนแรก และทันทีเมื่อมีอาการ",
  "CMN พบราว 1% ของทารก (ทุกขนาด) ชนิด giant พบน้อยมาก · ขนาดผู้ใหญ่: large 20–40 cm, giant &gt; 40 cm",
  "ความเสี่ยง melanoma ของ CMN ตามชีทเฉลี่ย 1–5% ยิ่งใหญ่ยิ่งเสี่ยง (ชีทหน้า 12)"],
 opinion="เห็นด้วยกับคำตอบ D ความมั่นใจสูง — ชีทหน้า 11 ระบุว่า CMN ขนาดใหญ่ที่ศีรษะอาจมี leptomeningeal melanocytosis และชักเป็นอาการหนึ่ง · จุดที่ต่างจากแนวปัจจุบัน: ชีทเน้นตำแหน่งศีรษะ แต่ข้อมูลปัจจุบัน (Krengel et al. JAAD 2013; Kinsler et al. BJD 2017) ชี้ว่าความเสี่ยงสัมพันธ์กับขนาดผู้ใหญ่ที่คาดเกิน 40 cm ตำแหน่งแนวกลางหลัง และจำนวน satellite มากกว่า และแนะนำ MRI คัดกรองตั้งแต่ทารก · คำว่า mental retardation ในชีทปัจจุบันใช้ intellectual disability และนิยมเรียกกลุ่มนี้ว่า congenital melanocytic naevus syndrome",
 mnemonic="<b>'ปานดำยักษ์กลางหลัง + ชัก = ดำลามถึงเยื่อหุ้มสมอง'</b>",
 guide="Krengel S et al. New recommendations for the categorization of cutaneous features of congenital melanocytic nevi. J Am Acad Dermatol 2013;68:441–451; Kinsler VA et al. Melanoma in congenital melanocytic naevi. Br J Dermatol 2017;176:1131–1143; Bolognia Dermatology 4th ed. (2018)",
 variants=[
  "ทารกแรกเกิดมี CMN ที่หลังซึ่งคาดว่าจะโตถึง 50 cm และมี satellite กว่า 30 เม็ด ยังไม่มีอาการ → ส่ง MRI สมองและไขสันหลังพร้อม contrast ภายในหกเดือนแรก",
  "เด็กที่มี CMN ยักษ์อาเจียน ปวดศีรษะ และรอบศีรษะโตเร็วผิดปกติ → communicating hydrocephalus จาก melanocyte อุดการดูดซึมน้ำไขสันหลัง ต้องใส่ shunt",
  "เด็กมี CMN ขนาด 3 cm เพียงเม็ดเดียวที่แขน พัฒนาการปกติ → ความเสี่ยงต่อระบบประสาทต่ำมาก ไม่ต้อง MRI คัดกรอง ติดตามผิวหนังตามปกติ",
  "MRI ของเด็กที่มี CMN ยักษ์พบสัญญาณ T1 สว่างที่ amygdala โดยไม่มีอาการ → CNS melanosis แบบไม่มีอาการ ติดตามพัฒนาการและอาการทางระบบประสาทเป็นระยะ"])

mk(Q, 133, ['s11','s12'],
 stem="Parents of a 2-year-old with a congenital melanocytic nevus covering most of the back, projected to exceed 40 cm in adulthood, ask about surgery. Which surgical plan is most appropriate?",
 opts=["Laser ablation of the pigment alone","Observation alone, since malignant change never occurs in congenital nevi","Single-stage excision with primary closure in one operation","Staged serial excision, completed before about age 12","Deferral of excision until adulthood after growth ends"],
 interp="เด็ก 2 ขวบมี CMN ขนาดยักษ์คลุมหลังเกือบทั้งหมด (ขนาดคาดในผู้ใหญ่ &gt; 40 cm) พ่อแม่ถามแผนผ่าตัด → ต้องใช้หลักว่ารอยโรคใหญ่เกินกว่าจะตัดแล้วเย็บปิดได้ในครั้งเดียว และมีกรอบเวลาที่เหมาะสม คำถามจึงวัดทั้ง ‘วิธี’ (staged) และ ‘จังหวะ’ (ก่อนอายุราว 12 ปี)",
 why="การรักษา CMN ขนาดใหญ่ต้องชั่งน้ำหนัก 3 ด้าน: <b>ความเสี่ยง melanoma</b> (ชีทเฉลี่ย 1–5% ยิ่งใหญ่ยิ่งเสี่ยง และ melanoma ในปานยักษ์มักวินิจฉัยช้าเพราะเกิดเป็นก้อนลึกใต้ผิวหนา) <b>ความสวยงาม</b> และ<b>การทำหน้าที่</b>ของบริเวณนั้น · หลักคือตัดให้หมด แต่ผิวรอบข้างไม่พอปิดแผลในครั้งเดียว จึงใช้ <b>staged (serial) excision</b> ตัดทีละส่วนห่างกันหลายเดือนให้ผิวยืดคลายก่อนตัดรอบถัดไป ร่วมกับ <b>tissue expander</b> ขยายผิวปกติข้างเคียงแล้วเลื่อนมาปิดเป็น expanded flap และใช้ skin graft หรือ dermal substitute ในส่วนที่เหลือ · เริ่มผ่าตัดในวัยเด็กเล็กเพราะผิวเด็กยืดหยุ่นและขยายได้ดี ทนการผ่าตัดซ้ำได้ และช่วยด้านจิตสังคมก่อนวัยเรียน · melanoma ใน CMN ยักษ์ส่วนหนึ่งเกิดตั้งแต่วัยเด็ก การรอเกินกรอบเวลาจึงไม่ใช่แผนผ่าตัดที่ดี · การตัดออกลดภาระเซลล์แต่<b>ไม่ลบความเสี่ยงทั้งหมด</b> เพราะ nevus cell ลงลึกถึงกล้ามเนื้อและอาจอยู่ในระบบประสาท ต้องตรวจคลำแผลเป็นและผิวที่เหลือตลอดชีวิต · ชีทหน้า 12 <b>“ส่วนใหญ่จึงใช้ เป็น staged excision จนกว่ารอยโรคจะหมด ช่วงเวลาที่เหมาะสมของการผ่าตัดคือผ่าตัดให้หมดก่อนอายุ 12 ปี”</b>",
 wrong={
  "A":"Laser (Q-switched หรือ ablative CO₂) ลดสีได้ชั่วคราวแต่ทำลายได้เฉพาะเซลล์ชั้นตื้น nevus cell ชั้นลึกยังอยู่ สีกลับมาได้ ไม่ได้ชิ้นเนื้อตรวจ และแผลเป็นบดบังการคลำหาก้อนใหม่ · จะถูกถ้าทารกอายุ 3 เดือนมี CMN ขนาดกลางที่เปลือกตาและแก้มซึ่งตัดแล้วจะทำให้เปลือกตาเสียรูปมาก และครอบครัวยอมรับว่าเป็นการลดสีเพื่อความสวยงามร่วมกับนัดติดตามสม่ำเสมอ",
  "B":"การเฝ้าติดตามโดยไม่ผ่าตัดเป็นทางเลือกที่ยอมรับได้ในปัจจุบันสำหรับ CMN บางราย แต่เหตุผลในช้อยผิด: CMN มีความเสี่ยงกลายเป็น melanoma จริง (ชีทเฉลี่ย 1–5% และสูงสุดในชนิด giant) · ไม่มีสถานการณ์ใดที่ใช้เหตุผลว่า congenital nevus ไม่กลายเป็นมะเร็งเลยมาวางแผนได้ เพราะความเสี่ยงนี้มีอยู่ในทุกขนาด แม้ชนิดเล็กจะต่ำมาก",
  "C":"การตัดครั้งเดียวแล้วเย็บปิดตรงทำได้เมื่อรอยโรคเล็กพอให้ผิวรอบข้างดึงมาปิดได้โดยไม่ตึง ปานที่คลุมหลังเกือบทั้งหมดตัดครั้งเดียวจะเหลือแผลกว้างที่ปิดไม่ได้ · จะถูกถ้าเด็กอายุ 6 ปีมี CMN ขนาดเล็ก 1.5 cm ที่ต้นแขน ซึ่งตัดเป็นรูปวงรีแล้วเย็บปิดได้ในการผ่าตัดเดียวโดยไม่ตึง",
  "E":"การรอจนโตเต็มที่ทำให้ผิวยืดหยุ่นน้อยลง การผ่าซ้ำหลายครั้งในวัยรุ่นและผู้ใหญ่ยากขึ้น และชีทชี้ว่าหลังอายุราว 12 ปีความเสี่ยง melanoma เพิ่มชัดเจน · จะถูกถ้าชายอายุ 16 ปีมี CMN ขนาดเล็กที่หลังซึ่งคงที่ตลอด ไม่มีอาการ และต้องการตัดเพื่อความสวยงามเมื่อพร้อม การนัดผ่าตัดเมื่อโตเต็มที่จึงสมเหตุสมผล"},
 trap="‘ตัดครั้งเดียวให้จบ’ ฟังสะอาดและปลอดภัยที่สุด และ laser ฟังว่าไม่มีแผล — แต่ปานยักษ์ปิดแผลครั้งเดียวไม่ได้ และ laser ไม่ถึงเซลล์ชั้นลึก · ตัวแยกคือขนาด: ใหญ่จนผิวรอบข้างไม่พอ = staged excision ± tissue expander และต้องมีกรอบเวลา (ก่อนราว 12 ปี)",
 summary=[
  "CMN ใหญ่ (ชีทหน้า 12): หลักคือตัดให้หมด · ครั้งเดียวปิดแผลไม่ได้ → <b>staged excision</b> จนหมด <b>ก่อนอายุ 12 ปี</b>",
  "ชั่งน้ำหนัก 3 ด้าน: ความเสี่ยง melanoma · ความสวยงาม · การทำหน้าที่ของบริเวณนั้น (ชีทหน้า 12)",
  "เครื่องมือ: serial excision · tissue expander + expanded flap · skin graft หรือ dermal substitute",
  "Melanoma ใน CMN ใหญ่วินิจฉัยช้า มักพบเมื่อเป็นก้อนหรือกระจายแล้ว → พยากรณ์ไม่ดี",
  "ตัดออกไม่ลบความเสี่ยงทั้งหมด เพราะเซลล์ลึกถึงกล้ามเนื้อและอาจอยู่ในระบบประสาท → ตรวจผิวและคลำแผลเป็นตลอดชีวิต",
  "Laser ไม่ถึงเซลล์ชั้นลึก สีกลับมา และไม่ได้ชิ้นเนื้อ"],
 opinion="เห็นด้วยกับคำตอบ D ความมั่นใจปานกลางถึงสูง — ชีทหน้า 12 ระบุ staged excision และกรอบเวลาก่อน 12 ปีตรงตัว · แต่แนวปัจจุบัน (Arad & Zuker, Plast Reconstr Surg 2014; Kinsler et al., BJD 2017) เปลี่ยนเป็นการตัดสินใจรายบุคคล: การตัดออกยังไม่ได้พิสูจน์ว่าลดอัตรา melanoma ได้ชัด เพราะ melanoma ส่วนหนึ่งเกิดในชั้นลึกหรือในระบบประสาท หลายศูนย์จึงยอมรับการเฝ้าติดตามด้วยการตรวจคลำและ MRI เมื่อมีข้อบ่งชี้ และผ่าตัดโดยเน้นความสวยงามและหน้าที่ · เหตุผลในชีทที่ว่าความเสี่ยงเพิ่มชัดหลังอายุ 12 ปีไม่ตรงกับข้อมูลใหม่ที่พบ melanoma ใน CMN ยักษ์ส่วนสำคัญตั้งแต่วัยเด็กเล็ก",
 mnemonic="<b>'ปานยักษ์: ตัดทีละท่อน ให้จบก่อน 12'</b>",
 guide="Arad E, Zuker RM. The shifting paradigm in the management of giant congenital melanocytic nevi: review and clinical applications. Plast Reconstr Surg 2014;133:367–376; Grabb and Smith's Plastic Surgery 8th ed. (2020) — Congenital melanocytic nevi",
 variants=[
  "เด็ก 3 ขวบที่มี CMN ยักษ์ที่หลัง ระหว่างรอผ่าตัดรอบถัดไปคลำได้ก้อนแข็งโตเร็วใต้ปาน → ตัดชิ้นเนื้อทันทีเพื่อแยก melanoma ไม่รอตามแผนเดิม",
  "เด็กมี CMN ยักษ์คลุมหนังศีรษะครึ่งหนึ่ง → ใส่ tissue expander ใต้หนังศีรษะส่วนที่มีผมแล้วเลื่อนมาปิด เพื่อได้ผิวที่มีผมทดแทน",
  "ครอบครัวเด็กที่ตัด CMN ยักษ์ออกหมดแล้วถามว่าหายขาดหรือยัง → ความเสี่ยงลดลงแต่ไม่หมด ต้องตรวจคลำแผลเป็นและผิวที่เหลือเป็นประจำตลอดชีวิต",
  "CMN ยักษ์คลุมเกือบทั้งลำตัวจนผิวปกติเหลือน้อยมาก → เฝ้าติดตามเป็นหลัก ตัดเฉพาะส่วนที่มีก้อนผิดปกติหรือก่อปัญหาการทำหน้าที่"])

mk(Q, 134, ['s13'],
 stem="A 3-year-old girl has had a firm, non-tender 1-cm subcutaneous mass at the lateral end of the eyebrow since birth. The overlying skin moves freely, but the mass is fixed to the underlying bone. What is the most likely diagnosis?",
 opts=["Infantile hemangioma","Dermoid cyst","Lipoma","Epidermal inclusion cyst","Trichilemmal cyst"],
 interp="เด็กหญิง 3 ขวบมีก้อนแข็งใต้ผิว 1 cm ที่หางคิ้วตั้งแต่เกิด ไม่เจ็บ ผิวด้านบนเลื่อนได้แต่ก้อนยึดกับกระดูก → ถามการวินิจฉัย ต้องใช้หลักเรื่อง<b>ก้อนแต่กำเนิดตามแนวรอยเชื่อมของตัวอ่อน</b> คือหางคิ้ว (frontozygomatic suture) และแนวกลางใบหน้า แยกจากถุงน้ำที่เกิดภายหลัง",
 why="<b>Dermoid cyst</b> เกิดจาก <b>ectoderm ถูกฝังค้าง</b>ตามแนวที่เนื้อเยื่อของตัวอ่อนเชื่อมปิดกัน จึง<b>มีมาแต่กำเนิด</b>และพบที่ตำแหน่งเฉพาะ: ที่พบบ่อยที่สุดคือ<b>หางคิ้ว (lateral brow ตรง frontozygomatic suture)</b> รองลงมาคือแนวกลาง ได้แก่ สันจมูก หน้าผาก และใต้คาง · ผนังเป็น squamous epithelium ที่มี<b>ส่วนประกอบของผิวครบ</b>: pilosebaceous unit (จึงเห็นเส้นขนในถุง) eccrine gland และอาจมีกระดูก ฟัน เนื้อเยื่อประสาท ต่างจาก epidermal cyst ที่ผนังเป็น epidermis อย่างเดียว · ทางคลินิก: ก้อนแข็งยืดหยุ่น ไม่เจ็บ โตช้า <b>ผิวด้านบนเลื่อนได้แต่ก้อนยึดกับ periosteum</b> บางรายกดกระดูกเป็นแอ่ง · ก้อนที่หางคิ้วแทบไม่ลอดเข้ากะโหลก จึงผ่าตัดเลาะออกทั้งถุงได้เลย ส่วน dermoid แนวกลางจมูกที่มีรูเปิดหรือมีขนโผล่ต้องทำ CT หรือ MRI ก่อนเพราะอาจมี tract เข้ากะโหลก · ถุงแตกระหว่างผ่าทำให้อักเสบและเป็นซ้ำ · ชีทหน้า 13 <b>“Dermoid cysts เป็นถุงน้ำที่พบแต่แรกเกิด เกิดจากมีส่วนของ epithelium ถูกฝังระหว่างการปิดของเนื้อเยื่อ จึงพบที่ส่วนกลางของใบหน้าโดยเฉพาะที่จมูก หน้าผาก และคิ้ว”</b>",
 wrong={
  "A":"Infantile hemangioma มักไม่เห็นตอนเกิด โผล่ในช่วง 2–4 สัปดาห์หลังคลอด โตเร็วในขวบปีแรกแล้วค่อยยุบ ชนิดลึกเป็นก้อนนุ่มสีฟ้าอมม่วง กดยุบได้ ไม่ยึดกระดูก — ก้อนแข็งขนาดคงที่ตั้งแต่เกิดถึง 3 ขวบไม่ใช่ลักษณะนี้ · จะถูกถ้าทารกอายุ 2 เดือนมีก้อนนุ่มสีฟ้าอมม่วงที่หางคิ้ว ไม่เห็นตอนเกิด แต่โตเร็วชัดในหนึ่งเดือนที่ผ่านมา",
  "C":"Lipoma เป็นก้อนไขมันนุ่ม เป็นพู โยกได้ ไม่ยึดกระดูก พบบ่อยที่ลำตัวในผู้ใหญ่ และพบน้อยมากในเด็กเล็กตั้งแต่เกิด · จะถูกถ้าชายอายุ 45 ปีมีก้อนนุ่มเป็นพูขนาด 3 cm ที่หน้าผาก โตช้ามาหลายปี โยกได้ และ ultrasound พบเนื้อไขมันไม่มีถุงน้ำ",
  "D":"Epidermal inclusion cyst เกิด<b>ภายหลัง</b>จาก epidermis ถูกดันฝังลงใต้ผิวหลังแผลหรือของมีคมทิ่ม หรือจากรูขุมขนอุดตัน มักติดกับผิวด้านบนและมี punctum ผนังเป็น epidermis ไม่มีส่วนประกอบของผิวอื่น · จะถูกถ้าชายอายุ 35 ปีมีก้อนกลมใต้ผิวที่นิ้วมือตรงจุดที่เคยถูกเสี้ยนไม้ตำเมื่อปีก่อน ก้อนค่อย ๆ โตและติดกับผิว",
  "E":"Trichilemmal cyst มาจากรากผม พบเกือบทั้งหมดที่<b>หนังศีรษะ</b>ของผู้หญิงวัยกลางคน มักหลายก้อน และไม่ได้เป็นมาแต่กำเนิด ตำแหน่งหางคิ้วในเด็กเล็กจึงไม่เข้า · จะถูกถ้าหญิงอายุ 60 ปีมีก้อนแข็งเรียบหลายก้อนที่หนังศีรษะส่วนท้ายทอย ไม่มี punctum ผมเหนือก้อนบางลง และเป็นมาไม่กี่ปี"},
 trap="ถุงน้ำใต้ผิวหลายชนิดหน้าตาคล้ายกันและข้างในเป็น keratin เหมือนกัน — ตัวแยกคือ<b>อายุที่เริ่มและตำแหน่ง</b>: มีตั้งแต่เกิด + หางคิ้วหรือแนวกลางใบหน้า + ยึดกระดูก = dermoid · เกิดภายหลัง ติดผิว มี punctum = epidermal · หนังศีรษะผู้ใหญ่ = trichilemmal",
 summary=[
  "Dermoid cyst = ถุงน้ำ<b>แต่กำเนิด</b>จาก epithelium ฝังค้างตามแนวปิดของเนื้อเยื่อ → หางคิ้ว แนวกลางจมูก หน้าผาก (ชีทหน้า 13)",
  "ผนัง squamous epithelium + pilosebaceous unit + eccrine gland ± กระดูก ฟัน เนื้อเยื่อประสาท (ชีทหน้า 13)",
  "คลินิก: แข็งยืดหยุ่น ไม่เจ็บ โตช้า ผิวด้านบนเลื่อนได้ ก้อนยึด periosteum",
  "Dermoid แนวกลางจมูกที่มีรูหรือขนโผล่ → CT หรือ MRI หา tract เข้ากะโหลกก่อนผ่า · ที่หางคิ้วผ่าได้เลย",
  "รักษาแบบ epidermal cyst: เลาะออกทั้งถุงโดยไม่ให้แตก",
  "แยกจาก hemangioma (โผล่หลังเกิด โตเร็ว นุ่ม) และ epidermal cyst (เกิดภายหลัง ติดผิว มี punctum)"],
 opinion="เห็นด้วยกับคำตอบ B ความมั่นใจสูง — ชีทหน้า 13 ระบุว่า dermoid มีแต่กำเนิดและพบที่คิ้ว โดยรูปที่ 9 แสดงก้อนที่หางคิ้วตรงกับโจทย์ · ข้อสังเกต: ชีทเขียนว่าพบที่<b>ส่วนกลาง</b>ของใบหน้า แต่ตำแหน่งที่พบบ่อยที่สุดจริงคือหางคิ้ว (lateral brow) ซึ่งไม่ใช่แนวกลาง ส่วนกลุ่มแนวกลางจมูกสำคัญเพราะส่วนหนึ่งลอดเข้ากะโหลก จึงต้อง imaging ก่อนผ่า (Grabb and Smith 2020) · การรักษาที่ชีทว่าเหมือน epidermal cyst ถูกในหลักการ คือเลาะออกทั้งถุงไม่ให้แตก",
 mnemonic="<b>'เกิดมามีก้อนที่หางคิ้ว = Dermoid · กลางจมูกมีรู = สแกนก่อนผ่า'</b>",
 guide="Grabb and Smith's Plastic Surgery 8th ed. (2020) — Pediatric head and neck masses; Bolognia Dermatology 4th ed. (2018) — Cysts",
 variants=[
  "เด็ก 4 ขวบมีรูเล็กที่สันจมูกแนวกลาง มีขนโผล่และมีน้ำขุ่นซึมเป็นระยะ → nasal dermoid sinus ต้องทำ MRI หา tract เข้ากะโหลกก่อนผ่าตัด",
  "ระหว่างเลาะ dermoid ที่หางคิ้วพบก้อนยึด periosteum และกระดูกเป็นแอ่งตื้น → เลาะออกทั้งถุงพร้อม periosteum ส่วนที่ยึด ระวังไม่ให้ถุงแตก",
  "ทารกมีก้อนนุ่มใต้คางแนวกลาง ไม่ขยับเมื่อกลืนหรือแลบลิ้น → dermoid cyst ใต้คาง แยกจาก thyroglossal duct cyst ที่ขยับตามการกลืนและแลบลิ้น",
  "ก้อนนุ่มแนวกลางหน้าผากของทารกโตขึ้นเวลาร้อง → คิดถึง encephalocele ห้ามเจาะหรือตัดชิ้นเนื้อ ต้อง imaging ก่อน"])

mk(Q, 135, ['s13'],
 stem="A 50-year-old woman has three smooth, firm scalp cysts without a central punctum; her mother had similar lesions. The excised contents are dry, compact keratin. What is the diagnosis?",
 opts=["Subcutaneous lipoma","Congenital dermoid cyst","Trichilemmal cyst","Plexiform neurofibroma","Epidermal inclusion cyst"],
 interp="หญิง 50 ปีมีถุงน้ำเรียบแข็งสามก้อนที่หนังศีรษะ ไม่มี punctum แม่มีก้อนแบบเดียวกัน ข้างในเป็น keratin แห้งอัดแน่น → ถามชนิดของถุงน้ำ ต้องแยกถุงน้ำที่มี keratin ด้วย<b>ตำแหน่ง ลักษณะ keratin ผนังถุง และเพศ</b> ไม่ใช่แค่ว่าข้างในเป็น keratin",
 why="<b>Trichilemmal (pilar) cyst</b> มาจาก<b>รากผมส่วน isthmus</b> ผนังเป็น <b>outer root sheath</b> ซึ่งสร้าง keratin แบบ <b>trichilemmal keratinization</b> — เซลล์เปลี่ยนเป็น keratin ทันทีโดย<b>ไม่มี granular layer</b> keratin จึง<b>แห้ง อัดแน่น เป็นเนื้อเดียว</b> ไม่เละและไม่ค่อยมีกลิ่น ต่างจาก epidermal cyst ที่ผนังเหมือน epidermis มี granular layer และ keratin เป็นแผ่นซ้อนเละสีขาวกลิ่นเหม็น · ลักษณะทางคลินิก: <b>ราว 90% อยู่ที่หนังศีรษะ</b> ก้อนเรียบแข็ง<b>ไม่มี punctum</b> มักหลายก้อน พบใน<b>ผู้หญิงวัยกลางคน</b>มากกว่า และมักถ่ายทอดในครอบครัวแบบ <b>autosomal dominant</b> · ผนังหนาแยกจากเนื้อรอบง่าย มักเลาะออกได้ทั้งถุงผ่านแผลเล็ก การรักษาเหมือน epidermal cyst · ก้อนเดิมที่โตเร็วผิดปกติหรือเป็นแผลอาจเป็น proliferating trichilemmal tumor ต้องตัดตรวจ · ชีทหน้า 13 <b>“Trichilemmal cysts (Pilar cysts) เป็นถุงน้ำเหมือน epidermal cyst แต่เกิดจากบริเวณรากผม ผนังถุงน้ำจึงเป็น outer root sheath ของ hair มีการสร้างเคอราตินเช่นกันแต่จะแห้งกว่า พบในผู้หญิงมากกว่าผู้ชาย”</b>",
 wrong={
  "A":"Lipoma เป็นเนื้องอกไขมันใต้ผิวที่พบบ่อยที่สุด ก้อนนุ่มเป็นพู โยกได้ ข้างในเป็นไขมันสีเหลือง ไม่ใช่ keratin และไม่ใช่ถุงน้ำ · จะถูกถ้าชายอายุ 50 ปีมีก้อนนุ่มเป็นพูขนาด 5 cm ที่หลัง โตช้า โยกได้ ไม่ติดผิว และเมื่อตัดออกได้เนื้อไขมันสีเหลืองมีปลอกบาง",
  "B":"Dermoid cyst มีมาแต่กำเนิด พบในเด็กที่หางคิ้วหรือแนวกลางใบหน้า ผนังมีส่วนประกอบของผิวครบรวมทั้งเส้นขนในถุง ไม่ได้เกิดหลายก้อนบนหนังศีรษะในวัยกลางคน · จะถูกถ้าเด็กชายอายุ 2 ขวบมีก้อนแข็งไม่เจ็บที่หางคิ้วตั้งแต่เกิด ยึดกระดูก และเมื่อตัดออกพบเส้นขนอยู่ในถุง",
  "D":"Plexiform neurofibroma เป็นเนื้องอกของปลอกประสาทที่ลามตามเส้นประสาทหลายเส้น คลำเหมือนถุงเส้นเชือก (bag of worms) เกือบทั้งหมดพบใน NF1 ไม่ใช่ถุงน้ำที่มี keratin · จะถูกถ้าเด็กอายุ 6 ปีที่มี café-au-lait หลายจุดมีก้อนนุ่มหย่อนกว้างที่ขมับและเปลือกตา คลำได้เส้นขดคล้ายเชือกอยู่ข้างใน",
  "E":"Epidermal inclusion cyst เป็นถุงน้ำผิวที่พบบ่อยที่สุด ผนังเหมือน epidermis มี granular layer จึงมี<b>รูเปิด (punctum)</b> และ keratin เละสีขาวกลิ่นเหม็น พบบ่อยที่ใบหน้า หลัง หู หน้าอก · จะถูกถ้าชายอายุ 30 ปีมีก้อนกลมใต้ผิวที่หลัง มีจุดดำตรงกลาง และเมื่อบีบมีเนื้อขาวเละกลิ่นเหม็นออกมา"},
 trap="ข้างในเป็น keratin ทำให้ตอบ epidermal cyst ซึ่งพบบ่อยที่สุด — ตัวแยก trichilemmal คือ<b>หนังศีรษะ + ไม่มี punctum + keratin แห้งอัดแน่น + หลายก้อนในหญิงวัยกลางคนและมีในครอบครัว</b> · ผนังมาจากรากผม (outer root sheath) ไม่ใช่ epidermis",
 summary=[
  "Trichilemmal (pilar) cyst: ถุงน้ำจาก<b>รากผม</b> ผนัง = outer root sheath · keratin <b>แห้งกว่า</b> · หญิง &gt; ชาย (ชีทหน้า 13)",
  "ราว 90% ที่หนังศีรษะ · เรียบแข็ง ไม่มี punctum · มักหลายก้อน · ถ่ายทอดแบบ autosomal dominant ได้",
  "พยาธิ: trichilemmal keratinization ไม่มี granular layer · epidermal cyst มี granular layer และ keratin เป็นแผ่นเละ",
  "Epidermal cyst: ถุงน้ำผิวที่พบบ่อยที่สุด ใบหน้า หลัง หู หน้าอก มี punctum · ชื่อ sebaceous cyst เป็น misnomer (ชีทหน้า 13)",
  "รักษาเหมือน epidermal cyst: เลาะออกทั้งถุง · pilar cyst ผนังหนา เลาะง่าย",
  "ก้อนเดิมโตเร็วหรือเป็นแผล → proliferating trichilemmal tumor ตัดตรวจ"],
 opinion="เห็นด้วยกับคำตอบ C ความมั่นใจสูง — ชีทหน้า 13 ระบุว่ามาจากรากผม ผนังเป็น outer root sheath keratin แห้งกว่า และพบในหญิงมากกว่า ซึ่งตรงกับตำราปัจจุบัน (Bolognia 2018) · สิ่งที่ชีทไม่ได้บอกแต่ใช้แยกโรคบ่อยในทางคลินิกคือ ตำแหน่งหนังศีรษะเกือบทั้งหมด การไม่มี punctum และการถ่ายทอดในครอบครัว · และควรรู้ว่าก้อนที่โตเร็วอาจเป็น proliferating trichilemmal tumor ซึ่งส่วนน้อยกลายเป็นมะเร็ง จึงไม่ควรเฝ้ารอ",
 mnemonic="<b>'Pilar = ก้อนบนหัว: แข็ง แห้ง ไม่มีรู หลายลูก แม่ก็มี'</b>",
 guide="Bolognia Dermatology 4th ed. (2018) — Cysts; Weedon's Skin Pathology 5th ed. (2020) — Cysts, sinuses and pits",
 variants=[
  "หญิงอายุ 65 ปีมีก้อนเดิมที่หนังศีรษะซึ่งเพิ่งโตเร็วเป็น 6 cm และเป็นแผล → สงสัย proliferating trichilemmal tumor ตัดออกทั้งก้อนส่งพยาธิ",
  "ชิ้นเนื้อถุงน้ำใต้ผิวที่หลังพบผนังมี granular layer และ keratin เป็นแผ่นบางซ้อนกัน → epidermal cyst",
  "Pilar cyst ที่หนังศีรษะแตกเองแล้วบวมแดงเจ็บ → ระบายหนองก่อน รอการอักเสบยุบแล้วจึงเลาะถุงออกภายหลัง",
  "ชายที่มีถุงน้ำใต้ผิวหลายสิบก้อนตั้งแต่วัยรุ่นร่วมกับ osteoma ที่ขากรรไกร → นึกถึง Gardner syndrome ส่องกล้องลำไส้ใหญ่หา polyp"])

mk(Q, 136, ['s14'],
 stem="A 32-year-old woman has a firm, 1-cm, reddish-brown nodule on the leg that appeared after an insect bite. Lateral pinching makes it dimple inward. What is the most likely diagnosis?",
 opts=["Lipoma","Neurofibroma","Dermatofibroma","Keratoacanthoma","Dermatofibrosarcoma protuberans"],
 interp="หญิง 32 ปีมีตุ่มแข็ง 1 cm สีแดงน้ำตาลที่ขา เกิดหลังแมลงกัด บีบด้านข้างแล้วบุ๋มลง → ถามการวินิจฉัย ต้องรู้ลักษณะเฉพาะของ dermatofibroma: ตุ่มแข็งในชั้น dermis ที่ขาของผู้หญิง ตามหลังการบาดเจ็บเล็กน้อย และ <b>dimple (Fitzpatrick) sign</b>",
 why="<b>Dermatofibroma</b> (benign fibrous histiocytoma) เป็นการเพิ่มจำนวนของ fibroblast และ histiocyte ใน<b>ชั้น dermis</b> เชื่อว่าเป็นปฏิกิริยาต่อการบาดเจ็บเล็กน้อย เช่น <b>แมลงกัด</b> หนามตำ หรือรูขุมขนอักเสบ · ลักษณะ: papule หรือ nodule <b>แข็ง ฐานกว้าง ขนาด 1–2 cm</b> สีผิวถึงแดงน้ำตาล พบใน<b>หญิงมากกว่าชาย</b> มักอยู่ที่<b>ขา</b> แขน ลำตัว ไม่มีอาการ อาจมี 1–10 ก้อน · เพราะก้อนยึดอยู่ใน dermis และดึงผิวด้านบนไว้ เมื่อบีบด้านข้างผิวจะ<b>บุ๋มลงตรงกลาง (dimple หรือ Fitzpatrick sign)</b> ต่างจากก้อนใต้ผิวที่ดันนูนขึ้น · dermoscopy เห็น<b>วงขาวตรงกลางล้อมด้วยร่างแหเม็ดสีจาง ๆ</b> · ไม่กลายเป็นมะเร็ง จึง<b>ไม่ต้องตัดทุกราย</b> ตัดเมื่อรำคาญ ไม่แน่ใจการวินิจฉัย หรือก้อนโตต่อเนื่อง (ต้องแยก DFSP) · การตัดมักเหลือแผลเป็นที่ใหญ่กว่าก้อนเดิม · ชีทหน้า 14 <b>“Dermatofibromas มีลักษณะเป็น papule หรือ nodule สีเหมือนผิวหนังหรือสีแดงๆ ขนาด 1-2 เซนติเมตร ค่อนข้างแข็ง ฐานกว้าง (sessile) อาจเกิดขึ้นเองหรือเกิดขึ้นหลังแมลงกัดต่อย พบในผู้หญิงมากกว่าผู้ชาย”</b>",
 wrong={
  "A":"Lipoma เป็นก้อนไขมันอยู่<b>ใต้</b>ชั้นผิวหนัง นุ่ม เป็นพู โยกได้ ผิวด้านบนปกติไม่เปลี่ยนสี ไม่บุ๋มเมื่อบีบ และไม่สัมพันธ์กับแมลงกัด · จะถูกถ้าชายอายุ 40 ปีมีก้อนนุ่มเป็นพูขนาด 4 cm ที่ไหล่ ผิวด้านบนปกติ โยกได้อิสระ และโตช้ามาหลายปี",
  "B":"Neurofibroma เป็นตุ่มนุ่มสีผิว เมื่อกดนิ้วจะจมลงไปในก้อนเหมือนกดกริ่ง (buttonhole sign) ตรงข้ามกับ dermatofibroma ที่แข็งและบุ๋มเมื่อบีบด้านข้าง · จะถูกถ้าหญิงอายุ 35 ปีมีตุ่มนุ่มสีผิวหลายตุ่มที่ลำตัว กดแล้วนิ้วจมลงไปในก้อน และมี café-au-lait มากกว่า 6 จุด",
  "D":"Keratoacanthoma เป็นก้อนรูปโดมโตเร็วมากในไม่กี่สัปดาห์ ตรงกลางเป็นหลุม keratin พบในผู้สูงอายุบริเวณถูกแดด อาจยุบเองแต่แยกจาก SCC ไม่ได้จึงต้องตัดหรือตัดชิ้นเนื้อ · จะถูกถ้าชายอายุ 70 ปีมีก้อนโดม 1.5 cm ที่หลังมือซึ่งโตขึ้นใน 4 สัปดาห์ ตรงกลางเป็นจุก keratin",
  "E":"DFSP เป็น sarcoma ระดับต่ำของ dermis เริ่มเป็นปื้นแข็งคล้าย dermatofibroma แต่โตต่อเนื่องเป็นปีและมีก้อนนูนหลายก้อนบนปื้น ลามเป็นรากลึก ต้องตัดกว้างหรือ Mohs · จะถูกถ้าชายอายุ 38 ปีมีปื้นแข็งสีม่วงแดงขนาด 6 cm ที่ลำตัว โตช้า ๆ มาหลายปี และมีก้อนนูนหลายก้อนขึ้นบนปื้น"},
 trap="ตุ่มแข็งสีน้ำตาลแดงชวนให้กังวลเรื่องเนื้อร้าย และ DFSP มีชื่อคล้ายกัน — ตัวแยกคือ<b>ขนาดเล็กคงที่ 1–2 cm หลังแมลงกัด + dimple sign</b> = dermatofibroma · ส่วน DFSP เป็นปื้นใหญ่ที่โตต่อเนื่องและมีหลายก้อนบนปื้น",
 summary=[
  "Dermatofibroma: ตุ่มแข็ง 1–2 cm ฐานกว้าง สีผิวถึงแดง · เกิดเองหรือหลังแมลงกัด · หญิง &gt; ชาย (ชีทหน้า 14)",
  "พบ 1–10 ก้อน ที่แขน ขา ลำตัว · ไม่มีอาการ (ชีทหน้า 14)",
  "Dimple (Fitzpatrick) sign: บีบด้านข้างแล้วบุ๋มลง เพราะก้อนยึดอยู่ใน dermis",
  "Dermoscopy: วงขาวตรงกลาง + ร่างแหเม็ดสีจางรอบนอก",
  "รักษา: ไม่จำเป็นทุกราย · ชีทให้ excision เพื่อความสวยงาม · แผลเป็นมักใหญ่กว่าก้อน",
  "โตต่อเนื่อง ใหญ่ หลายก้อนบนปื้น → แยก DFSP ด้วยชิ้นเนื้อ (CD34 บวก)"],
 opinion="เห็นด้วยกับคำตอบ C ความมั่นใจสูง — ชีทหน้า 14 ให้ลักษณะครบ: แข็ง 1–2 cm สีผิวถึงแดง เกิดหลังแมลงกัด และพบในหญิงมากกว่า · ชีทไม่ได้กล่าวถึง dimple sign ซึ่งเป็นตัวช่วยตรวจที่ใช้มากที่สุดในทางคลินิก · ชีทให้รักษาด้วย excision เพื่อความสวยงาม ซึ่งปัจจุบัน (Bolognia 2018) มักแนะนำให้อธิบายและสังเกตอาการก่อน เพราะแผลผ่าตัดมักดูแย่กว่าก้อนเดิม และก้อนกลับเป็นซ้ำได้ถ้าตัดไม่หมด",
 mnemonic="<b>'Dermatofibroma: บีบแล้วบุ๋ม (Dimple) — แมลงกัดที่ขา ผู้หญิง'</b>",
 guide="Bolognia Dermatology 4th ed. (2018) — Fibrous and fibrohistiocytic proliferations; NCCN Guidelines: Dermatofibrosarcoma Protuberans (2025)",
 variants=[
  "หญิงอายุ 40 ปีมีตุ่มแข็งที่ขาขนาดคงที่มา 5 ปี ถามว่าต้องตัดไหม → ไม่จำเป็น อธิบายว่าเป็นก้อนไม่ร้าย ตัดเมื่อรำคาญเพราะแผลเป็นมักใหญ่กว่าก้อน",
  "ก้อนที่เคยวินิจฉัยว่า dermatofibroma โตจาก 1 เป็น 4 cm ในสองปีและมีก้อนย่อยบนผิว → ตัดชิ้นเนื้อย้อม CD34 แยก DFSP",
  "ตุ่มแข็งเล็กที่ขาซึ่ง dermoscopy เห็นวงขาวตรงกลางล้อมด้วยร่างแหเม็ดสีจาง → ลักษณะของ dermatofibroma ไม่ต้องตัดตรวจ",
  "ผู้ป่วย SLE หรือ HIV มี dermatofibroma นับสิบก้อนขึ้นพร้อมกัน → multiple eruptive dermatofibromas ประเมินภาวะภูมิคุ้มกันผิดปกติร่วม"])

mk(Q, 137, ['s14'],
 stem="A solitary forearm nodule causes radiating nerve pain when pressed. Histology shows an encapsulated Schwann cell tumor. What is it?",
 opts=["Glomus tumor","Schwannoma","Ganglion cyst","Dermatofibroma","Neurofibroma"],
 interp="ก้อนเดี่ยวที่แขน กดแล้วปวดร้าวไปตามเส้นประสาท พยาธิเป็นเนื้องอกของ Schwann cell ที่มีปลอกหุ้ม → ถามชื่อโรค ต้องแยก schwannoma (neurilemmoma) จาก neurofibroma ซึ่งก็มาจากปลอกประสาท โดยใช้<b>ชนิดเซลล์ การมีปลอก และความสัมพันธ์กับเส้นประสาท</b>",
 why="<b>Schwannoma (neurilemmoma)</b> เป็นเนื้องอกไม่ร้ายที่ประกอบด้วย <b>Schwann cell ล้วน</b> โตออกด้าน<b>ข้างของเส้นประสาท</b>และมี<b>ปลอกหุ้ม (encapsulated)</b> · มักเป็นก้อนเดี่ยวที่เส้นประสาทส่วนปลายของ<b>ศีรษะ คอ และด้าน flexor ของแขนขา</b> · เพราะก้อนเบียดเส้นประสาท จึง<b>ปวดที่ก้อนหรือปวดร้าวตามแนวเส้นประสาท</b> เคาะแล้วชาซ่า (Tinel sign) และ<b>โยกได้ด้านข้างแต่ไม่โยกตามแนวยาวของเส้นประสาท</b> · พยาธิเห็นสองบริเวณ: <b>Antoni A</b> (เซลล์แน่นเรียงเป็นแถว มี Verocay bodies) และ <b>Antoni B</b> (หลวม) ย้อม <b>S100</b> บวกสม่ำเสมอ · MRI พบก้อนรีต่อกับเส้นประสาท อาจเห็น target sign และ split-fat sign · ผ่าตัดโดย<b>เลาะก้อนออกจากเส้นประสาท (enucleation)</b> ใต้กล้องขยาย กรีดตามแนว fascicle แล้วดันก้อนออก จึงเก็บการทำงานของเส้นประสาทไว้ได้ ส่วน neurofibroma มีเส้นใยประสาทวิ่งผ่านกลางก้อนจึงเลาะแยกยากกว่า · หลายก้อนให้คิดถึง NF2 หรือ schwannomatosis · ชีทหน้า 14 <b>“Neurilemmomas เป็นเนื้องอกที่เกิดจาก Schwann cells มีลักษณะเป็น nodule ที่มีอาการปวดบริเวณก้อนหรือปวดร้าวไปตามเส้นประสาท”</b>",
 wrong={
  "A":"Glomus tumor เป็นเนื้องอกของ glomus body ที่ควบคุมอุณหภูมิ ปวดมากจุดเดียว ไวต่อความเย็น พบบ่อยใต้เล็บ สีม่วงแดง แต่ไม่ปวดร้าวตามแนวเส้นประสาท และพยาธิเป็น glomus cell ไม่ใช่ Schwann cell · จะถูกถ้าหญิงอายุ 40 ปีปวดแปลบที่ปลายนิ้วโป้งเวลาจุ่มน้ำเย็น กดจุดเดียวด้วยหัวเข็มหมุดแล้วปวดมาก และใต้เล็บเห็นจุดสีม่วงแดง",
  "C":"Ganglion cyst เป็นถุงน้ำเหนียวใสที่ต่อจากปลอกเอ็นหรือแคปซูลข้อ พบบ่อยที่หลังข้อมือ ส่องไฟทะลุ ขนาดเปลี่ยนตามการใช้งาน และไม่ใช่เนื้องอก · จะถูกถ้าหญิงอายุ 25 ปีมีก้อนนุ่มกลม 2 cm ที่หลังข้อมือ ขนาดเปลี่ยนได้ ส่องไฟทะลุ และเจาะได้น้ำเหนียวใสคล้ายเจล",
  "D":"Dermatofibroma เป็นตุ่มแข็งใน dermis ที่มักไม่มีอาการ ไม่สัมพันธ์กับเส้นประสาท บีบด้านข้างแล้วบุ๋ม และพยาธิเป็น fibroblast กับ histiocyte · จะถูกถ้าหญิงอายุ 30 ปีมีตุ่มแข็งสีน้ำตาลแดง 8 mm ที่หน้าแข้งหลังแมลงกัด บีบด้านข้างแล้วบุ๋มลง และไม่ปวด",
  "E":"Neurofibroma ก็มาจากปลอกประสาท แต่ประกอบด้วย<b>เซลล์หลายชนิดปนกัน</b> (Schwann cell, fibroblast, perineurial cell, mast cell) <b>ไม่มีปลอกหุ้ม</b> และเส้นใยประสาทวิ่งผ่านกลางก้อน มักไม่ปวด · จะถูกถ้าชายอายุ 28 ปีมีตุ่มนุ่มสีผิวหลายสิบตุ่มที่หลัง กดแล้วนิ้วจมลง ร่วมกับ café-au-lait และ Lisch nodule"},
 trap="Neurofibroma ก็มี Schwann cell และเป็นเนื้องอกของปลอกประสาทเหมือนกัน — ตัวแยกคือ schwannoma เป็น<b>ก้อนเดี่ยว มีปลอก Schwann cell ล้วน อยู่ข้างเส้นประสาท และปวดร้าว</b> ส่วน neurofibroma มักหลายก้อน ไม่มีปลอก เซลล์ปน และเส้นประสาทผ่านกลางก้อน",
 summary=[
  "Neurilemmoma (schwannoma): เนื้องอกของ <b>Schwann cell</b> · ปวดที่ก้อนหรือ<b>ปวดร้าวตามเส้นประสาท</b> · ศีรษะและแขนขา · รักษา excision (ชีทหน้า 14)",
  "มีปลอก โตด้านข้างของเส้นประสาท → โยกได้ด้านข้าง ไม่โยกตามแนวยาว · Tinel sign บวก",
  "พยาธิ: Antoni A (Verocay bodies) + Antoni B · S100 บวก",
  "ผ่าตัด enucleation ใต้กล้องขยาย เก็บ fascicle ไว้ได้",
  "Neurofibroma: เซลล์ปน ไม่มีปลอก เส้นประสาทผ่านกลางก้อน · สัมพันธ์ NF1 · ชีทให้กลายเป็นมะเร็ง 8–16%",
  "Schwannoma หลายก้อน → NF2 หรือ schwannomatosis"],
 opinion="เห็นด้วยกับคำตอบ B ความมั่นใจสูง — ชีทหน้า 14 ระบุว่า neurilemmoma เกิดจาก Schwann cell และปวดร้าวตามเส้นประสาทตรงตัว · ชีทเขียนการรักษาว่า excision ซึ่งในทางปฏิบัติปัจจุบัน (WHO Classification of Soft Tissue and Bone Tumours 5th ed. 2020; Sabiston 2022) หมายถึง<b>การเลาะก้อนออกจากเส้นประสาท</b>โดยเก็บ fascicle ไว้ ไม่ใช่ตัดเส้นประสาทพร้อมก้อน · และตัวเลขกลายเป็นมะเร็ง 8–16% ในชีทหน้า 14 เป็นของ neurofibroma ส่วน schwannoma กลายเป็นมะเร็งน้อยมาก",
 mnemonic="<b>'Schwannoma = Single, Side, Shell (มีปลอก), Shooting pain'</b>",
 guide="WHO Classification of Tumours: Soft Tissue and Bone Tumours 5th ed. (IARC 2020) — Peripheral nerve sheath tumours; Sabiston Textbook of Surgery 21st ed. (2022)",
 variants=[
  "ระหว่างผ่าตัดก้อนที่ต้นแขนพบก้อนรีมีปลอกเบียดอยู่ข้างเส้นประสาท median → กรีดปลอกตามแนว fascicle แล้วเลาะก้อนออก ไม่ตัดเส้นประสาท",
  "MRI ก้อนที่ข้อพับเข่าพบก้อนรีต่อเนื่องกับเส้นประสาท มีไขมันล้อมขอบ และ T2 ขอบสว่างกลางมืด → ลักษณะของ schwannoma",
  "ชายอายุ 35 ปีมี schwannoma ที่แขนขาหลายก้อนปวดเรื้อรัง แต่การได้ยินปกติและ MRI ไม่มี vestibular schwannoma → schwannomatosis",
  "ก้อนเส้นประสาทในผู้ป่วย NF1 ที่เดิมไม่ปวด เริ่มปวดตลอดเวลาและโตเร็ว → สงสัย MPNST ทำ MRI และ PET แล้วตัดชิ้นเนื้อ"])

mk(Q, 138, ['s15'],
 stem="A 19-year-old man has a large, warm vascular mass of the thigh with a thrill and bruit, overgrowth of that leg, and new exertional dyspnea with cardiomegaly. What best explains his cardiac findings?",
 opts=["Consumptive coagulopathy within a kaposiform vascular tumor","Capillary malformation with leptomeningeal angiomatosis","High-output failure from arteriovenous shunting","Lymphatic malformation compressing the mediastinum","Venous malformation shedding emboli to the lungs"],
 interp="ชาย 19 ปีมีก้อนหลอดเลือดอุ่นใหญ่ที่ต้นขา คลำได้ thrill ฟังได้ bruit ขาข้างนั้นโตกว่า และเริ่มเหนื่อยเวลาออกแรงพร้อมหัวใจโต → ก้อนนี้คือ high-flow AVM ถามกลไกของอาการทางหัวใจ ต้องผูก thrill และ bruit เข้ากับเลือดที่ลัดจากแดงไปดำโดยไม่ผ่าน capillary",
 why="<b>Arteriovenous malformation</b> เป็น vascular malformation ชนิด <b>high-flow</b> ที่หลอดเลือดแดงต่อตรงเข้าหลอดเลือดดำผ่านกลุ่มเส้นเลือดผิดรูป (nidus) โดยไม่ผ่าน capillary → <b>ความต้านทานส่วนปลายลดลง</b> เลือดไหลกลับหัวใจเร็วและมาก หัวใจต้องเพิ่ม stroke volume และอัตราเต้นเพื่อรักษาความดัน → <b>cardiac output สูงต่อเนื่อง</b> ห้องหัวใจขยายและโต จนเกิด <b>high-output heart failure</b> (Schobinger stage IV: decompensation) · ก้อนจึงอุ่น แดง คลำได้ thrill ฟังได้ bruit · เลือดเลี้ยงมากทำให้<b>แขนขาข้างนั้นโตเกิน (hypertrophy)</b> ถ้าร่วมกับปื้นแดงชมพูและ AV fistula กระจายทั้งขาให้คิดถึง Parkes Weber syndrome · ส่วนปลายอาจขาดเลือดจากเลือดถูกขโมย (steal) เกิดแผล เลือดออก และกระดูกถูกกร่อน · รักษา: <b>embolization ที่ nidus แล้วตัดออกภายใน 24–72 ชั่วโมง</b> และ<b>ห้ามผูกหลอดเลือดแดงต้นทาง</b>เพราะจะกระตุ้น collateral จนก้อนลามและปิดทางสำหรับ embolize ครั้งต่อไป · ชีทหน้า 15 <b>“ถ้าก้อนมีขนาดใหญ่มากอาจเป็นที่สะสมของเลือดมาก ทำให้หัวใจต้องสูบฉีดเลือดมากขึ้น จึงเกิด หัวใจโต (cardiac enlargement) และเกิดหัวใจวายตามมาได้ (congestive heart failure)”</b>",
 wrong={
  "A":"Kasabach–Merritt phenomenon คือเกล็ดเลือดถูกจับและบริโภคใน kaposiform hemangioendothelioma หรือ tufted angioma ในทารก ทำให้เกล็ดเลือดและ fibrinogen ต่ำมาก เลือดออกง่าย ไม่ได้ทำให้หัวใจทำงานเกินจนโต · ไม่มีสถานการณ์ใดที่ consumptive coagulopathy ในก้อนอธิบายหัวใจโตจาก cardiac output สูงได้ เพราะปัญหาหลักคือการแข็งตัวของเลือด ไม่ใช่การลัดของเลือดผ่านก้อน",
  "B":"Capillary malformation (port-wine stain) เป็น slow-flow ในผิวชั้นตื้น ไม่มี thrill หรือ bruit ไม่มีการลัดของเลือดแดงไปดำ เมื่ออยู่ที่หน้าผากร่วมกับ leptomeningeal angiomatosis คือ Sturge–Weber ซึ่งก่ออาการทางสมองและตา · ไม่มีสถานการณ์ใดที่ leptomeningeal angiomatosis อธิบายหัวใจโตจาก high output ได้ เพราะเลือดไหลช้าในหลอดเลือดฝอยและไม่เพิ่มภาระหัวใจ",
  "D":"Lymphatic malformation เป็น slow-flow ก้อนนุ่ม ส่องไฟทะลุ ไม่มี thrill · เมื่ออยู่ในทรวงอกอาจกดหลอดลม ทำ chylothorax หรือ pericardial effusion จนเหนื่อยได้ แต่ไม่ใช่จากการลัดของเลือด · จะถูกถ้าเด็กอายุ 3 ปีมีก้อนน้ำนุ่มที่คอลามลงช่องอก เหนื่อย ภาพรังสีเงาหัวใจกว้าง และ echocardiogram พบน้ำในเยื่อหุ้มหัวใจจาก lymphatic malformation ใน mediastinum",
  "E":"Venous malformation เป็น slow-flow ก้อนสีฟ้านุ่ม กดยุบ โตเมื่อห้อยแขนขา ไม่มี thrill หรือ bruit · ก้อนใหญ่มีลิ่มเลือดและ phlebolith และอาจหลุดไปปอดได้ · จะถูกถ้าหญิงอายุ 30 ปีที่มี venous malformation ขนาดใหญ่ทั้งขาจาก Klippel–Trenaunay มีลิ่มเลือดหลุดไปปอดซ้ำ ๆ จนเหนื่อย และ echocardiogram พบหัวใจห้องขวาโต"},
 trap="ก้อนหลอดเลือดทุกชนิดมีภาวะแทรกซ้อนต่อระบบอื่นได้ ทำให้เลือกกลไกที่คุ้น เช่นเกล็ดเลือดต่ำหรือลิ่มเลือดหลุด — ตัวแยกคือ<b>thrill + bruit + ก้อนอุ่น</b> = high-flow ซึ่งชนิดเดียวที่เพิ่ม cardiac output คือ AVM · malformation ชนิด slow-flow (capillary, venous, lymphatic) ไม่มี thrill",
 summary=[
  "AVM ใหญ่: เลือดลัดแดงไปดำผ่าน nidus → ความต้านทานลด cardiac output สูง → หัวใจโต → CHF (ชีทหน้า 15)",
  "AVM = high flow: ก้อนแดง อุ่น thrill bruit · แผลเหนือก้อน · กระดูกถูกกร่อน · ส่วนปลายโต (ชีทหน้า 15)",
  "Schobinger: I quiescence · II expansion · III destruction · IV decompensation (หัวใจวาย)",
  "Malformation โตตามตัว ไม่ยุบเอง endothelium ไม่แบ่งตัว — ต่างจาก hemangioma (ชีทหน้า 15)",
  "รักษา: excision ดีที่สุดแต่มักไม่หมด → debulking ร่วมกับ embolization หรือ Nd:YAG laser ลดเลือดก่อนผ่าตัด",
  "ห้ามผูกหลอดเลือดแดงต้นทาง — collateral เพิ่ม ก้อนลาม และ embolize ไม่ได้อีก"],
 opinion="เห็นด้วยกับคำตอบ C ความมั่นใจสูง — ชีทหน้า 15 อธิบายว่า AVM ใหญ่ทำให้หัวใจต้องสูบฉีดมากขึ้นจนโตและวาย และบรรยาย thrill bruit กับ hypertrophy ของส่วนปลายตรงกับโจทย์ · จุดที่ต่างจากแนวปัจจุบัน: ชีทหน้า 15 ยกเกล็ดเลือดต่ำและ high-output failure เป็นภาวะแทรกซ้อนของ hemangioma ทั่วไป แต่ตาม ISSVA 2018 เกล็ดเลือดต่ำรุนแรง (Kasabach–Merritt) เกิดกับ kaposiform hemangioendothelioma ไม่ใช่ infantile hemangioma และ high-output failure ใน hemangioma พบเฉพาะชนิดก้อนใหญ่ในตับ · การรักษา embolize แล้วผ่าตัดในชีทยังเป็นหลัก ส่วนยามุ่งเป้า เช่น MEK inhibitor ยังอยู่ในการศึกษา",
 mnemonic="<b>'Thrill + Bruit = ท่อลัด → หัวใจทำงานล้น (High-output)'</b>",
 guide="ISSVA Classification of Vascular Anomalies (2018); Mulliken and Young's Vascular Anomalies: Hemangiomas and Malformations 2nd ed. (2013) — Arteriovenous malformation",
 variants=[
  "ชายวัยรุ่นมี AVM ที่ใบหูซึ่งเป็นแผลแล้วเลือดพุ่งออกมาก → Schobinger stage III กดห้ามเลือด แล้ว embolize ฉุกเฉินก่อนผ่าตัด",
  "ชายมี AVM ที่นิ้วซึ่งปลายนิ้วเย็นซีดและเป็นแผลไม่หาย → เลือดถูกขโมยผ่าน shunt (steal) ต้อง embolize และผ่าตัดเพื่อรักษานิ้ว",
  "ศัลยแพทย์ผูกหลอดเลือดแดงที่เลี้ยง AVM ต้นขาแล้วก้อนกลับโตขึ้นใน 6 เดือน → collateral ถูกกระตุ้น และปิดทางเข้าของ catheter สำหรับ embolize",
  "เด็กชายมีปื้นแดงชมพูทั้งขาร่วมกับขาโตยาวกว่า และ Doppler พบ AV fistula เล็ก ๆ กระจายทั้งขา → Parkes Weber syndrome (RASA1)"])

mk(Q, 139, ['s15','s16'],
 stem="A 6-month-old infant has a flat red-purple port-wine stain over the forehead and upper eyelid on one side and has begun having seizures. Which syndrome is most likely, and which eye problem should be screened for?",
 opts=["PHACE syndrome; cataract","Tuberous sclerosis; retinal hamartoma","Kasabach–Merritt phenomenon; thrombocytopenia","Neurofibromatosis type 1; Lisch nodules","Sturge–Weber syndrome; glaucoma"],
 interp="ทารก 6 เดือนมี port-wine stain แบนสีแดงม่วงที่หน้าผากและเปลือกตาบนข้างเดียว แล้วเริ่มชัก → capillary malformation ในบริเวณ V1 ร่วมกับอาการทางสมอง ถามทั้งชื่อกลุ่มอาการและโรคตาที่ต้องคัดกรอง จึงต้องตอบให้ถูกทั้งสองส่วนพร้อมกัน",
 why="<b>Sturge–Weber syndrome</b> เกิดจาก <b>somatic mutation ของ GNAQ</b> (R183Q) ในเซลล์ต้นกำเนิดช่วงตัวอ่อน ทำให้เกิด capillary malformation สามที่: <b>ผิวหน้า (port-wine stain)</b> · <b>เยื่อหุ้มสมอง (leptomeningeal angiomatosis)</b> และ<b>ตา</b> · ความเสี่ยงสูงเมื่อ port-wine stain คลุม<b>หน้าผากและเปลือกตาบน</b> โดยเฉพาะปื้นกว้างหรือสองข้าง · leptomeningeal angiomatosis ทำให้เลือดดำคั่ง เนื้อสมองขาดเลือดเรื้อรัง → <b>ชัก</b> (มักเริ่มในขวบปีแรก) อ่อนแรงครึ่งซีก พัฒนาการช้า และหินปูนรูปรางรถไฟ (tram-track) · ตาเกิด <b>glaucoma</b> ราว 30–70% จากความดันหลอดเลือดดำ episcleral สูงและมุมตาผิดรูป เกิดได้ตั้งแต่แรกเกิดถึงวัยผู้ใหญ่ ร่วมกับ choroidal hemangioma · จึงต้อง<b>วัดความดันลูกตาเป็นระยะตลอดชีวิต</b> และทำ <b>MRI สมองพร้อม contrast</b> · port-wine stain รักษาด้วย <b>pulsed dye laser</b> ซึ่งเริ่มเร็วได้ผลดีกว่า · ชีทหน้า 15 <b>“ถ้ารอยโรคนี้พบกระจายตาม V1 กรือ V2 อาจมีกลุ่มอาการอื่นร่วมด้วย เช่น Sturge-Weber syndrome (leptomeningeal angiomatosis, epilepsy, and glaucoma)”</b>",
 wrong={
  "A":"PHACE syndrome เกิดกับ <b>infantile hemangioma</b> แบบแผ่นกว้าง (segmental) ที่ใบหน้า ซึ่งไม่เห็นตอนเกิดแล้วนูนโตเร็ว ไม่ใช่ port-wine stain แบนที่มีตั้งแต่เกิด ความผิดปกติร่วมคือสมองส่วนหลัง หลอดเลือดสมอง หัวใจ และตา · จะถูกถ้าทารกอายุ 2 เดือนมี hemangioma แผ่นกว้างนูนแดงสดที่หน้าผากและแก้มข้างเดียว ร่วมกับ coarctation of aorta และตาข้างนั้นมีต้อกระจก",
  "B":"Tuberous sclerosis ชักได้ตั้งแต่ทารกและตามี retinal hamartoma จริง แต่รอยโรคผิวคือปื้นขาวรูปใบไม้ (hypomelanotic macule) facial angiofibroma และ shagreen patch ไม่ใช่ port-wine stain · จะถูกถ้าเด็กอายุ 3 ปีชัก มี shagreen patch ที่หลังส่วนล่าง ปื้นขาวรูปใบไม้หลายปื้น และตุ่มแดงเล็กกระจายที่แก้มสองข้าง",
  "C":"Kasabach–Merritt phenomenon คือเกล็ดเลือดถูกจับในก้อน kaposiform hemangioendothelioma หรือ tufted angioma ซึ่งเป็นก้อนแข็งบวมสีม่วงโตเร็ว ไม่ใช่ปื้นแบน และไม่ใช่กลุ่มอาการ · ไม่มีสถานการณ์ใดที่ช้อยนี้ตอบคำถามนี้ได้ เพราะส่วนหลังของช้อยต้องเป็นปัญหาทางตาที่ต้องคัดกรอง แต่ thrombocytopenia เป็นความผิดปกติของเลือด",
  "D":"NF1 ตรวจตาหา Lisch nodule (iris hamartoma) และ optic pathway glioma จริง แต่รอยโรคผิวคือ café-au-lait หลายจุด กระที่รักแร้หรือขาหนีบ และ neurofibroma ไม่ใช่ port-wine stain และชักไม่ใช่อาการเด่น · จะถูกถ้าเด็กอายุ 6 ปีมี café-au-lait หลายจุด กระที่ขาหนีบสองข้าง และสายตาข้างหนึ่งมัวลงจาก optic pathway glioma"},
 trap="ทุกช้อยเป็นคู่ ‘กลุ่มอาการ + สิ่งที่ต้องตรวจ’ ที่จับคู่ถูกในตัวเอง (PHACE กับตา, TS กับ retinal hamartoma, NF1 กับ Lisch) จึงหลอกให้เลือกจากส่วนหลัง — ต้องเริ่มจาก<b>รอยโรคผิว</b>: port-wine stain แบนตั้งแต่เกิดที่หน้าผากและเปลือกตาบน + ชัก = Sturge–Weber แล้วจึงตอบ glaucoma",
 summary=[
  "Port-wine stain ที่หน้าผากและเปลือกตาบน + ชัก → <b>Sturge–Weber</b> → คัดกรอง <b>glaucoma</b> (ชีทหน้า 15)",
  "สามระบบ: capillary malformation ที่หน้า · leptomeningeal angiomatosis · ตา (glaucoma, choroidal hemangioma)",
  "สาเหตุ: somatic GNAQ mutation · ไม่ถ่ายทอดทางพันธุกรรม",
  "สมอง: ชักมักเริ่มขวบปีแรก · อ่อนแรงครึ่งซีก · tram-track calcification · ตรวจ MRI พร้อม contrast",
  "Glaucoma เกิดได้ทุกช่วงวัย → วัดความดันลูกตาเป็นระยะตลอดชีวิต",
  "Capillary malformation: capillary ขยายล้อมด้วย mature endothelium · รักษา pulsed dye laser หรือผ่าตัด (ชีทหน้า 15) · รูปที่ 14 port-wine stain (ชีทหน้า 16)"],
 opinion="เห็นด้วยกับคำตอบ E ความมั่นใจสูง — ชีทหน้า 15 เชื่อม port-wine stain ตาม V1 หรือ V2 กับ Sturge–Weber และระบุ leptomeningeal angiomatosis, epilepsy, glaucoma ครบ · จุดที่ต่างจากข้อมูลปัจจุบัน: ชีทใช้แนวเส้นประสาท V1 หรือ V2 แต่ Waelchli et al. (Br J Dermatol 2014) และ consensus ของ Sabeti et al. (Pediatr Neurol 2021) ชี้ว่าตัวทำนายที่ดีกว่าคือ<b>ผื่นที่หน้าผาก</b> ซึ่งเดินตามแนวหลอดเลือดของตัวอ่อน ไม่ใช่แนวเส้นประสาท ส่วนผื่นเฉพาะแก้ม (V2) เสี่ยงต่อสมองต่ำ · ชีทจึงเขียนว่า port-wine stain กระจายตามเส้นประสาทสมองคู่ที่ 5 ซึ่งปัจจุบันไม่ถือว่าผื่นเดินตามเส้นประสาทจริง",
 mnemonic="<b>'Sturge–Weber: Stain หน้าผาก + Seizure + Sight (glaucoma)'</b>",
 guide="Sabeti S et al. Consensus statement for the management and treatment of Sturge-Weber syndrome: neurology, neuroimaging, and ophthalmology recommendations. Pediatr Neurol 2021;121:59–66; Waelchli R et al. New vascular classification of port-wine stains: improving prediction of Sturge-Weber risk. Br J Dermatol 2014;171:861–867; ISSVA Classification (2018)",
 variants=[
  "เด็กที่เป็น Sturge–Weber ชักบ่อยขึ้นแม้ใช้ยากันชักหลายตัว และ MRI พบ angiomatosis ทั้งสมองซีกเดียว → พิจารณาผ่าตัด hemispherectomy",
  "ทารกมี port-wine stain เฉพาะแก้มและริมฝีปากบน ไม่ลามถึงหน้าผาก พัฒนาการปกติ → ความเสี่ยงต่อสมองต่ำ เริ่ม pulsed dye laser เร็วเพื่อผลดีที่สุด",
  "ผู้ใหญ่ที่มี port-wine stain ที่แก้มมาตั้งแต่เกิด ผื่นหนาขึ้นเป็นตุ่มนูนสีม่วงคล้ำ → การหนาตัวตามวัย (hypertrophy และ nodularity) รักษาด้วย laser หรือผ่าตัดตัดส่วนนูน",
  "เด็ก Sturge–Weber อ่อนแรงครึ่งซีกชั่วคราวคล้าย stroke หลังชัก → สัมพันธ์กับเลือดดำคั่งในสมอง พิจารณา aspirin ขนาดต่ำตาม consensus"])

mk(Q, 140, ['s16'],
 stem="After clear-margin excision of a nodular basal cell carcinoma of the nose, which follow-up advice matters most?",
 opts=["Serial chest CT to detect lung metastases","Adjuvant systemic chemotherapy to prevent recurrence","Sentinel lymph node biopsy of the cervical basin","Discharge without follow-up, since BCC cannot recur","Periodic full-skin examinations"],
 interp="ตัด nodular BCC ที่จมูกออกได้ขอบปลอดแล้ว → ถามสิ่งที่สำคัญที่สุดในการติดตาม ต้องรู้ธรรมชาติของ BCC: <b>แทบไม่กระจาย</b> แต่<b>เป็นซ้ำเฉพาะที่และเกิดก้อนใหม่ (metachronous) บ่อย</b> การติดตามจึงเน้นตรวจผิวหนัง ไม่ใช่การตรวจหาการกระจาย",
 why="BCC เป็นมะเร็งผิวที่พบบ่อยที่สุด สัมพันธ์กับ <b>UVB สะสม</b> ราว 85% อยู่ที่ศีรษะและคอ ตำแหน่งที่พบมากที่สุดคือจมูก · ก้อนโตช้าที่ขอบ ตรงกลางตายเป็นแผล และ<b>กระจายน้อยมาก (0.0028–0.1%)</b> ส่วนใหญ่หลัง 10 ปีขึ้นไปและไปทางกระแสเลือดมากกว่าน้ำเหลือง · ปัญหาจริงหลังรักษาจึงมีสองอย่าง: <b>(1) เป็นซ้ำที่เดิม</b> มักพบที่หูและรอบตา และเสี่ยงสูงในบริเวณ H-zone ของใบหน้ารวมทั้งจมูก · <b>(2) ก้อนใหม่ (metachronous)</b> เพราะผิวทั้งหน้าถูกแดดทำลายเท่ากัน พบได้<b>ถึง 40% ใน 10 ปี</b> โดยความเสี่ยงสูงสุดในช่วงปีแรก ๆ และยังเพิ่มโอกาสเป็น SCC และ melanoma · NCCN จึงแนะนำ<b>ซักประวัติ ตรวจร่างกาย และตรวจผิวหนังทั้งตัวทุก 6–12 เดือนใน 5 ปีแรก แล้วอย่างน้อยปีละครั้งตลอดชีวิต</b> ร่วมกับสอนผู้ป่วยตรวจผิวตนเอง ทาครีมกันแดด หลบแดดเที่ยง และสวมหมวก · ไม่ต้องทำ imaging ไม่ต้องให้ยาเสริม และไม่ต้องทำ sentinel node · ชีทหน้า 16 <b>“เมื่อตรวจพบ BCC แล้วจะต้องหา metachronous lesion ด้วย ซึ่งพบได้ถึง 40% ใน 10 ปี”</b>",
 wrong={
  "A":"CT ทรวงอกเป็นการติดตามมะเร็งที่มีโอกาสกระจายไปปอด แต่ BCC กระจายเพียง 0.0028–0.1% ตามชีท การทำ CT ซ้ำในผู้ที่ตัดหมดแล้วไม่ช่วยและได้รังสีโดยไม่จำเป็น · จะถูกถ้าชายอายุ 70 ปีที่มี metastatic BCC ไปปอดและกำลังได้ hedgehog pathway inhibitor อย่าง vismodegib ซึ่งต้องประเมินการตอบสนองด้วย CT เป็นระยะ",
  "B":"BCC ที่ตัดได้ขอบปลอดไม่มีเนื้อมะเร็งเหลือ และ cytotoxic chemotherapy ไม่มีบทบาทเป็นยาเสริม ยาระบบที่ใช้กับ BCC คือ hedgehog inhibitor (vismodegib, sonidegib) และ cemiplimab สำหรับก้อนลุกลามเฉพาะที่หรือกระจายที่ผ่าตัดหรือฉายแสงไม่ได้ · ไม่มีสถานการณ์ใดที่แนวทางปัจจุบันให้เคมีบำบัดเสริมหลังตัด BCC ขอบปลอด เพราะความเสี่ยงที่เหลือคือก้อนใหม่ ไม่ใช่การกระจาย",
  "C":"Sentinel lymph node biopsy ใช้กับ melanoma ตั้งแต่ T1b ขึ้นไปและ Merkel cell carcinoma ซึ่งกระจายทางน้ำเหลืองบ่อย ส่วน BCC กระจายน้อยมากและถ้ากระจายมักไปทางกระแสเลือด · ไม่มีสถานการณ์ใดที่ SLNB เป็นการติดตามมาตรฐานหลังตัด BCC เพราะโอกาสพบต่อมน้ำเหลืองบวกต่ำจนไม่คุ้มกับการผ่าตัด",
  "D":"ข้อความนี้ผิดสองชั้น: BCC เป็นซ้ำที่เดิมได้ (โดยเฉพาะที่หู รอบตา และจมูก) และก้อนใหม่เกิดได้ถึง 40% ใน 10 ปี การปล่อยโดยไม่นัดจะพลาดก้อนใหม่ที่ยังเล็กและรักษาง่าย · ไม่มีสถานการณ์ใดที่ปล่อยกลับโดยไม่ติดตามเลยได้ เพราะผู้ที่เคยเป็น BCC ทุกรายมีความเสี่ยงเป็นซ้ำและเกิดก้อนใหม่ตลอดชีวิต"},
 trap="ตัวเลือกที่ดูเข้มข้น (CT, เคมีบำบัด, SLNB) คือการติดตามมะเร็งที่กระจายได้ จึงดูรอบคอบกว่า — แต่ BCC แทบไม่กระจาย ความเสี่ยงจริงคือ<b>ก้อนใหม่บนผิวที่ถูกแดดเหมือนกัน</b> สิ่งที่สำคัญที่สุดจึงเป็นการตรวจผิวหนังทั้งตัวเป็นระยะร่วมกับป้องกันแดด",
 summary=[
  "หลังรักษา BCC: หา <b>metachronous lesion</b> พบได้ถึง <b>40% ใน 10 ปี</b> → ตรวจผิวทั้งตัวสม่ำเสมอ (ชีทหน้า 16)",
  "BCC พบบ่อยที่สุด · UVB · ชาย &gt; หญิง · 85% ศีรษะและคอ · จมูกมากที่สุด (ชีทหน้า 16)",
  "เป็นซ้ำหลังรักษามักที่หูและรอบตา (ชีทหน้า 16)",
  "Metastasis 0.0028–0.1% · มักหลัง 10 ปี · ทางเลือดมากกว่าน้ำเหลือง",
  "NCCN: ตรวจผิวทั้งตัวทุก 6–12 เดือนใน 5 ปีแรก แล้วปีละครั้งตลอดชีวิต · ป้องกันแดด · สอนตรวจผิวตนเอง",
  "จมูกเป็นตำแหน่งความเสี่ยงสูง (H-zone) — Mohs เป็นทางเลือกหลักเมื่อเป็นซ้ำหรือก้อนเสี่ยงสูง"],
 opinion="เห็นด้วยกับคำตอบ E ความมั่นใจสูง — ชีทหน้า 16 ระบุให้หา metachronous lesion ซึ่งพบถึง 40% ใน 10 ปี และ metastasis น้อยมาก ตรงกับ NCCN Basal Cell Skin Cancer 2025 ที่เน้นตรวจผิวทั้งตัวตลอดชีวิต · ข้อสังเกต: meta-analysis ของ Marcil & Stern (2000) พบความเสี่ยงเกิด BCC ก้อนใหม่ราว 40% ภายในเพียง 3 ปี ตัวเลขในชีทจึงอาจต่ำกว่าจริงในช่วงแรก และควรนัดถี่ในปีแรก ๆ · และ NCCN จัดจมูกเป็นตำแหน่งความเสี่ยงสูงไม่ว่าขนาดเท่าใด ซึ่งชีทไม่ได้กล่าวถึง",
 mnemonic="<b>'BCC: ไม่ไปไกล แต่ขึ้นใหม่ — 40 ใน 10 ตรวจผิวทั้งตัวตลอดชีวิต'</b>",
 guide="NCCN Clinical Practice Guidelines in Oncology: Basal Cell Skin Cancer (2025); Marcil I, Stern RS. Risk of developing a subsequent nonmelanoma skin cancer in patients with a history of nonmelanoma skin cancer. Arch Dermatol 2000;136:1524–1530",
 variants=[
  "หญิงอายุ 60 ปีเพิ่งตัด BCC ที่แก้มและถามวิธีลดก้อนใหม่ → ครีมกันแดดทุกวัน หมวกปีกกว้าง หลบแดดเที่ยง และพิจารณา nicotinamide 500 mg วันละสองครั้งในกลุ่มเสี่ยงสูง",
  "BCC ที่ตัดจากหัวตาได้ผลขอบบวก → ตัดซ้ำด้วย Mohs surgery เพราะเป็นตำแหน่งเสี่ยงเป็นซ้ำและต้องเก็บเนื้อเยื่อปกติไว้",
  "ชายอายุ 25 ปีมี BCC หลายก้อน ร่วมกับ odontogenic keratocyst ที่ขากรรไกรและหลุมเล็กที่ฝ่ามือ → Gorlin syndrome (PTCH1) เลี่ยงการฉายแสงและติดตามผิวถี่",
  "ผู้รับการปลูกถ่ายไตที่ได้ยากดภูมิมีมะเร็งผิวเกิดใหม่บ่อย → ส่วนใหญ่เป็น SCC มากกว่า BCC ติดตามผิวทุก 3–6 เดือนร่วมกับทีมปลูกถ่าย"])

save(Q, 'parts/fill/l22_r14.json')

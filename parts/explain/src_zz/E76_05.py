import json
A=json.load(open('/home/claude/h/all.json'))
OUT='/home/claude/ac-mdcu/parts/explain/data_subspe/zz76_05.json'
P='MDCU76|RoD|'
def S(k,first,rest=()):
    return [first]+list(A[k].get('summary') or [])+list(rest)
def V(k,*new):
    return list(A[k].get('variants') or [])+list(new)
D={}

k=P+'4'
D[k]={
'why':'''หน้าท้องส่วนล่างมีผิวหนังและไขมันปริมาณมากที่สุดในร่างกาย เนื้อนุ่ม รูปทรงและการหย่อนตัวใกล้เต้านมธรรมชาติ จึงสร้าง breast mound ได้ทั้งเต้าโดย<b>ไม่ต้องใช้ implant</b> · flap จากบริเวณ <b>rectus abdominis</b> มีหลายแบบ: <b>pedicled TRAM</b> อาศัย <b>superior epigastric vessels</b> (ต่อจาก internal mammary) หมุนขึ้นมาทางอุโมงค์ใต้ผิวหนัง · <b>free TRAM / DIEP</b> อาศัย <b>deep inferior epigastric vessels</b> ต่อเข้ากับ internal mammary vessels ด้วย microsurgery · DIEP เก็บกล้ามเนื้อ rectus ไว้ จึงลด hernia/bulge ของผนังหน้าท้อง และเป็นมาตรฐานของ autologous reconstruction ในปัจจุบัน · <b>Latissimus dorsi</b> (thoracodorsal) เชื่อถือได้แต่ปริมาณไม่พอในคนส่วนใหญ่ ต้องเสริม implant จึงเป็นอันดับสอง · ตรงคีย์ Key 76D ติ๊ก C พร้อมลายมือ <b>"TRAM = Transverse Rectus Abdominis Myocutaneous flap — pedicle: superior epigastric · free: deep inferior epigastric"</b> และเขียน 1st ที่ C, 2nd ที่ B''',
'trap':'''เลือก latissimus dorsi เพราะอยู่ใกล้เต้านม คุ้นชื่อ และไม่ต้องทำ microsurgery — LD ปลอดภัยแต่ปริมาณเนื้อเยื่อน้อย มักต้องใส่ implant ร่วม จึงไม่ตอบคำว่า "enough tissue volume" ของคำถาม · คำสำคัญเรื่องปริมาณเนื้อเยื่อของตัวเองชี้ไปที่หน้าท้องส่วนล่าง (TRAM/DIEP) ซึ่งคีย์จัดเป็นอันดับ 1''',
'summary':S(k,'''แกนของข้อ: ต้องการ autologous ปริมาณมากพอสร้างเต้าทั้งเต้า → flap หน้าท้องส่วนล่าง (TRAM/DIEP) อันดับ 1 · latissimus dorsi อันดับ 2 (มักต้อง + implant) · เมื่อหน้าท้องใช้ไม่ได้ → flap ต้นขา (TUG/PAP) หรือก้น (SGAP/IGAP)''',
 ['''หลอดเลือด: pedicled TRAM = superior epigastric (ต่อจาก internal mammary) · free TRAM/DIEP = deep inferior epigastric ต่อกับ internal mammary vessels · ติดตาม flap (สี capillary refill อุณหภูมิ Doppler) ถี่ใน 24–72 ชม.แรก เพราะหลอดเลือดที่ต่ออุดตันส่วนใหญ่เกิดช่วงนี้''']),
'opinion':'''เห็นด้วยกับคีย์ C ความมั่นใจสูง — คีย์ Key 76D ติ๊ก C และลายมือจัด rectus 1st, latissimus 2nd ตรงกับหลักว่าหน้าท้องส่วนล่างให้ปริมาณเนื้อเยื่อมากที่สุด · ปัจจุบัน (Neligan's Plastic Surgery 5th ed. 2023) นิยม DIEP ซึ่งเก็บกล้ามเนื้อไว้มากกว่า TRAM แต่ยังเป็น flap จากบริเวณ rectus abdominis ช้อย C จึงยังถูก''',
'variants':V(k,'''หลัง pedicled TRAM 1 สัปดาห์ ส่วนของ flap ที่ไกลจาก pedicle ที่สุด (zone IV) ดำแข็ง → partial flap necrosis/fat necrosis จากเลือดเลี้ยงไม่พอ → ตัดเนื้อตายออก · ป้องกันโดยตัด zone IV ทิ้งตั้งแต่ผ่าตัด'''),
}

k=P+'5'
D[k]={
'summary':S(k,'''แกนของข้อ: syndromic craniosynostosis กลุ่ม FGFR — ข้อความที่ "ไม่ถูก" คือสติปัญญามักปกติ (Apert มี intellectual disability ได้บ่อย) · ข้ออื่นถูก: เห็นได้ตั้งแต่แรกเกิด ยืนยันด้วยยีน ใช้ลักษณะคลินิกและภาพกะโหลกช่วยวินิจฉัย''',
 ['''กลุ่มอาการอื่นที่ควรรู้: Saethre-Chotzen (TWIST1) หนังตาตก หูเล็ก นิ้วติดเล็กน้อย สติปัญญามักปกติ · Muenke (FGFR3 P250R) coronal synostosis ข้างเดียวหรือสองข้าง ร่วมหูเสื่อมแบบ sensorineural · ทุกกลุ่มถ่ายทอดแบบ autosomal dominant''']),
'variants':V(k,'''ทารก 4 เดือนหน้าผากข้างขวาแบน เบ้าตาขวายกสูง (harlequin sign บนภาพ) โคนจมูกเบี้ยวไปทางขวา → unicoronal synostosis ขวา → CT 3 มิติ แล้ววางแผน fronto-orbital advancement'''),
}

k=P+'6'
D[k]={
'trap':'''ตอบ meninges เพราะคิดถึงสิ่งที่ยื่นออกมาในถุง หรือตอบ cribriform plate/skull base เพราะจำว่า encephalocele ด้านหน้าเกี่ยวกับฐานกะโหลก — ข้อนี้ถามตำแหน่ง "กระดูก" ที่โหว่ และก้อนโผล่ให้เห็นที่หน้า = frontoethmoidal (sincipital) ส่วน basal (cribriform/sphenoid) ซ่อนอยู่ในโพรงจมูก มองไม่เห็นจากภายนอก''',
'summary':S(k,'''แกนของข้อ: ก้อนยื่นที่หน้าผาก–โคนจมูกในทารกไทย = frontoethmoidal encephalomeningocele (FEEM, "งวงช้าง") · รูโหว่อยู่รอบ foramen cecum ระหว่างกระดูก frontal กับ ethmoid → ช้อยที่เป็นกระดูกและตรงตำแหน่งคือ nasoethmoidal''',
 ['''ระบาดวิทยาตามสไลด์ในคีย์: ไทยพบราว 1 ใน 5,000 การเกิด มากในภาคเหนือและภาคตะวันออก · ต้องแยกจาก nasal dermoid และ nasal glioma ที่เป็นก้อนแนวกลางเช่นกัน — glioma ไม่ต่อกับช่อง subarachnoid จึงไม่โตเมื่อร้องและ Furstenberg test ลบ''']),
'variants':V(k,'''ทารก FEEM ที่ MRI พบ hydrocephalus ร่วม → วางแผนแก้ hydrocephalus (เช่น shunt) ร่วมกับการซ่อมรูโหว่ เพื่อลดการรั่วของ CSF จากแผลหลังผ่าตัด'''),
}

k=P+'7'
D[k]={
'summary':S(k,'''แกนของข้อ: ก้อน enhance ที่ CP angle ลามเข้า internal auditory canal = vestibular schwannoma → อาการที่พบบ่อยที่สุดคือหูข้างเดียวกันเสื่อมแบบ sensorineural ค่อยเป็นค่อยไป (ราว 90%) ± tinnitus · อาการทรงตัวมักไม่เด่นเพราะสมองปรับชดเชย''',
 ['''แยกก้อน CP angle: vestibular schwannoma (ราว 80%) ลามเข้า IAC รูป ice-cream cone · meningioma (ราว 10%) ฐานกว้างติด dura มี dural tail อาจมีหินปูน ไม่ค่อยเข้า IAC · epidermoid ไม่ enhance แต่ DWI restriction''']),
'variants':V(k,'''ผู้ใหญ่หูดับข้างเดียวเฉียบพลันภายใน 3 วัน ไม่มีสาเหตุชัด → sudden SNHL → ให้ corticosteroid เร็ว และส่ง MRI หา retrocochlear lesion (vestibular schwannoma พบได้ในส่วนน้อย)'''),
}

k=P+'8'
D[k]={
'interp':'''ข้อนี้ไม่มีผู้ป่วยเฉพาะ ถามตรงว่า hydrocephalus ชนิดใดที่ห้ามเจาะหลัง · ช้อยมีทั้งชนิด communicating (NPH, หลัง meningitis, หลัง SAH) และ aqueductal stenosis แต่กำเนิด · ต้องแยก obstructive (non-communicating) ที่ CSF เหนือจุดอุดไม่ต่อกับช่องไขสันหลัง ออกจาก communicating''',
'trap':'''คิดว่า hydrocephalus ทุกชนิดคือความดันในกะโหลกสูงจึงห้ามเจาะหลังทั้งหมด หรือเลือก NPH เพราะชื่อมีคำว่า pressure — ห้ามเฉพาะชนิดที่มีจุดอุดหรือ mass effect (เจาะแล้วความดันบน–ล่างต่างกัน → herniation) ส่วน communicating เจาะได้ และ NPH ยังใช้ tap test ช่วยวินิจฉัย''',
'summary':S(k,'''แกนของข้อ: obstructive (non-communicating) hydrocephalus เช่น aqueductal stenosis = ห้ามเจาะหลัง เพราะความดันด้านล่างลดฉับพลันขณะช่องเหนือจุดอุดยังสูง เกิด pressure gradient → tonsillar/transtentorial herniation''',
 ['''อาการ hydrocephalus: ทารก → หัวโตเร็ว กระหม่อมโป่งตึง เส้นเลือดหนังศีรษะโป่ง sunset eyes · เด็กโต/ผู้ใหญ่ → ปวดศีรษะตอนเช้า อาเจียน papilledema CN VI palsy ซึม · NPH → เดินลำบาก (magnetic gait) หลงลืม ปัสสาวะราด''',
  '''Aqueductal stenosis: สาเหตุแต่กำเนิดที่พบบ่อยของ hydrocephalus ในทารก (X-linked L1CAM ร่วมนิ้วโป้งงอเข้าฝ่ามือ) หรือเกิดภายหลังจาก tectal glioma เลือดออก ติดเชื้อ · ETV ได้ผลดีในชนิด obstructive โดยเฉพาะเด็กอายุมากกว่า 6 เดือน''']),
'opinion':'''เห็นด้วยกับคีย์ C ความมั่นใจสูง — คีย์ Key 76D เขียน "obs" และแปะตารางข้อห้ามเจาะหลัง (CNS lesion causing increased ICP) ตรงกับหลักว่า obstructive hydrocephalus ห้าม LP · ช้อยอื่นเป็น communicating ทั้งหมด · แนวปฏิบัติปัจจุบัน (Greenberg's Handbook of Neurosurgery 10th ed. 2023) ให้ทำ CT ก่อนเจาะเมื่อสงสัยความดันในกะโหลกสูง''',
'variants':V(k,'''ทารกคลอดก่อนกำหนดมี IVH รุนแรง ต่อมา ventricle โตทุกช่อง หัวโตเร็ว (post-hemorrhagic communicating hydrocephalus) → ระบาย CSF ชั่วคราว (serial LP หรือ ventricular reservoir) แล้วใส่ VP shunt เมื่อน้ำหนักและโปรตีนใน CSF เหมาะสม'''),
}

k=P+'9'
D[k]={
'interp':'''ข้อ NOT ไม่มีผู้ป่วยเฉพาะ: ถามว่าภาวะใด "ไม่ใช่" ข้อบ่งชี้ผ่าตัด lung abscess · ช้อยมีทั้งภาวะแทรกซ้อน (แตกเข้าช่องเยื่อหุ้มปอด, bronchopleural fistula, massive hemoptysis) และการไม่ตอบสนองต่อยา · ต้องเทียบกับรายการ Indication for Surgery ในสไลด์ที่แปะในคีย์ ซึ่งไม่มี BPF''',
'summary':S(k,'''แกนของข้อ: ช้อยที่ไม่อยู่ในสไลด์ Indication for Surgery คือ bronchopleural fistula → ตอบ B · แต่ตำราบางเล่มนับ empyema ร่วม BPF เป็นข้อบ่งชี้ (คีย์จึงใส่ ? และเขียน need ICD?) — ข้อนี้อิงสไลด์''',
 ['''การรักษาหลักคือยาปฏิชีวนะครอบคลุม anaerobe (ampicillin-sulbactam หรือ clindamycin) นานหลายสัปดาห์จนภาพรังสีดีขึ้น + กายภาพระบายเสมหะ · ได้ผลราว 80–90% · ต้องผ่าตัดราว 10% · ผู้ป่วยเสี่ยงผ่าตัดสูง → percutaneous drainage''']),
'variants':V(k,'''ชายติดสุรา ฟันผุ ไอเสมหะเหม็นมาก CXR มีโพรงและ air-fluid level ที่ posterior segment ของ RUL → aspiration lung abscess → ยาครอบคลุม anaerobe หลายสัปดาห์ ไม่ต้องผ่าตัดในระยะแรก'''),
}

k=P+'10'
D[k]={
'summary':S(k,'''แกนของข้อ: น้ำจากสายระบายทรวงอกขาวขุ่นเหมือนนม triglyceride สูง หลังบาดเจ็บทรวงอก = chylothorax จาก thoracic duct injury · มักขุ่นชัดเมื่อผู้ป่วยเริ่มกินอาหารที่มีไขมัน''',
 ['''กายวิภาค thoracic duct: เริ่มจาก cisterna chyli (ราว L1–L2) ผ่าน aortic hiatus ขึ้นทางขวาของ aorta ระหว่าง aorta กับ azygos ข้ามไปซ้ายราว T4–T6 แล้วเทเข้า left venous angle (subclavian–internal jugular) · ขน chyle ราว 1.5–2.5 L/วัน''']),
'opinion':'''เห็นด้วยกับคีย์ A ความมั่นใจสูง — คีย์ Key 76D ติ๊ก A และเขียน chylothorax ตรงกับน้ำขาวขุ่น triglyceride สูงที่ช้อยอื่นไม่มี · การรักษาปัจจุบันเริ่มแบบ conservative (อาหาร MCT หรือ TPN ± octreotide) แล้วทำ thoracic duct embolization หรือ ligation เมื่อออกมากหรือไม่หยุด''',
'variants':V(k,'''ทารกแรกเกิดหายใจเร็ว CXR มีน้ำในช่องเยื่อหุ้มปอดขวา เจาะได้น้ำใสเหลืองก่อนกินนม หลังเริ่มนมกลายเป็นขาวขุ่น lymphocyte เด่น → congenital chylothorax → ระบาย + นมสูตร MCT'''),
}

k=P+'11'
D[k]={
'why':'''เมื่อภาพสงสัย<b>เนื้องอกร้ายในสมอง</b> (high-grade glioma หรือ metastasis) แนวทางคือ: ลดสมองบวมด้วย <b>dexamethasone</b> และคุมชักด้วยยากันชัก → ได้<b>ชิ้นเนื้อ</b>ด้วย <b>maximal safe resection</b> (ก้อนตัดได้) หรือ <b>stereotactic biopsy</b> (ก้อนลึก/หลายตำแหน่ง/ตัดไม่ได้) → รักษาต่อตามชนิด: glioblastoma = resection + <b>RT 60 Gy ร่วม temozolomide</b> แล้ว temozolomide ต่อ (Stupp) · metastasis ไม่กี่ก้อน = resection และ/หรือ <b>stereotactic radiosurgery</b> ร่วม systemic therapy ของมะเร็งต้นทาง · ส่วน <b>angiography + embolization</b> เป็นหัตถการของรอยโรคหลอดเลือด (AVM, dural AV fistula) หรือใช้ลดเลือดก่อนผ่าตัดเนื้องอกที่เลือดมาก (meningioma, hemangioblastoma) ไม่ใช่ส่วนของการดูแลเนื้องอกร้ายในเนื้อสมองทั่วไป จึงมีประโยชน์น้อยที่สุด · ตรงคีย์ Key 76D ติ๊ก A พร้อมลายมือ <b>"น่าจะ CA"</b>, <b>"A for AVM"</b> และวงเล็บ B–E <b>"= tm"</b>''',
'summary':S(k,'''แกนของข้อ: รอยโรคสงสัยเนื้องอกร้ายในสมอง → biopsy/resection รังสี (รวม SRS) และยาเคมีล้วนเป็นส่วนของการรักษา · angiography + embolization เป็นของ AVM หรือ preop เนื้องอกเลือดมาก → มีประโยชน์น้อยที่สุด''',
 ['''Glioblastoma, IDH-wildtype (WHO CNS5 2021): maximal safe resection → RT 60 Gy/30 fx + temozolomide → temozolomide เสริม 6 รอบ (Stupp) · MGMT promoter methylation ตอบสนองยาดีกว่า · มัธยฐานการรอดชีวิตราว 15 เดือน''']),
'variants':V(k,'''วัยรุ่นชักครั้งแรก MRI พบกลุ่มหลอดเลือดขด (nidus) มี flow void และหลอดเลือดดำขยาย ไม่มี mass effect → AVM → cerebral angiography แล้ววางแผน embolization ผ่าตัด หรือ radiosurgery'''),
}

k=P+'12'
D[k]={
'trap':'''เลือก direct contamination ตามสามัญสำนึกเพราะลำไส้อยู่ติดไต หรือ hematogenous เพราะเป็นทางที่ทำให้ฝีในไตบ่อย — ข้อนี้ถามตามการแบ่ง 3 route ในตำรา (ascending/hematogenous/lymphatic) ซึ่งจัด direct extension จากอวัยวะข้างเคียงและลำไส้ติดเชื้อรุนแรงไว้ใน lymphatic · vascular กับ hematogenous ความหมายซ้อนกันจึงไม่ใช่คำตอบเดี่ยว''',
'summary':S(k,'''แกนของข้อ: ฝีที่ไตจากอวัยวะข้างเคียงที่ติดเชื้อรุนแรง (ลำไส้ใหญ่, ฝีหลังเยื่อบุช่องท้อง) จัดเป็น lymphatic route ตามตำรา — พบน้อยมาก (rare) เทียบกับ ascending (พบบ่อยที่สุด) และ hematogenous (พบน้อย)''',
 ['''Intrarenal abscess vs perinephric abscess: perinephric อยู่ระหว่าง renal capsule กับ Gerota fascia มักเกิดจากฝีในไตแตกหรือ pyonephrosis จากนิ่วอุด · ไข้ ปวดเอว ไม่ดีขึ้นหลังยาเกิน 4–5 วันชวนสงสัย · วินิจฉัยด้วย CT ฉีดสี (ดีกว่า ultrasound)''',
  '''เชื้อตาม route: ascending → gram-negative ลำไส้ (E. coli, Klebsiella, Proteus) · hematogenous → S. aureus (ฝีผิวหนัง, ผู้ใช้ยาเสพติดชนิดฉีด), Candida · เบาหวานเป็นปัจจัยเสี่ยงสำคัญของฝีในไตและ emphysematous pyelonephritis''']),
'variants':V(k,'''หญิงเบาหวานไข้สูง ปวดเอว ซึม CT พบลมในเนื้อไต → emphysematous pyelonephritis → ยาปฏิชีวนะ + ระบาย (PCN) ถ้าไม่ดีขึ้นหรือลมกระจายมาก → nephrectomy'''),
}

k=P+'13'
D[k]={
'why':'''ทารก ARM ในช่วง<b>ชั่วโมงแรก ๆ</b> ยังตัดสินชนิดไม่ได้ เพราะ meconium ต้องอาศัยความดันในลำไส้ที่สูงขึ้นจากการกลืนลมและการบีบตัว จึงจะดันผ่าน fistula เล็ก ๆ ออกมาที่ perineum หรือลงปัสสาวะให้เห็น ซึ่งมักใช้เวลา <b>16–24 ชม.</b> และลมก็ยังลงไม่ถึงปลายถุง rectum ทำให้ภาพ cross-table ที่ทำเร็วเกินไปเห็นถุงสูงกว่าความจริง → อาจผ่าตัดผิดชนิด · ระหว่างรอ: <b>งดนม ให้ IV fluid ใส่ OG/NG</b> ระบายกระเพาะ และค้นหา <b>VACTERL</b> (echo, ultrasound ไต/ไขสันหลัง, ภาพ sacrum, ใส่สายลงกระเพาะดู esophageal atresia) · ครบ 24 ชม. ตรวจ <b>perineum และปัสสาวะซ้ำ</b> แล้วตัดสิน anoplasty / colostomy / cross-table film · ตรงคีย์ Key 76D วง 2 ไฮไลต์ พร้อมลายมือ <b>"รอดูว่า meconium จะออกมาทางไหน"</b> และที่ช้อย 1 เขียน <b>"ทำตอน 24 hrs แล้วไม่มี meconium"</b>''',
'wrong':{'C':'''Diverting colostomy เป็นขั้นตอนของ ARM ชนิดสูงหรือ rectourinary fistula แต่ตัดสินได้หลังรู้ชนิดเท่านั้น ตอน 3 ชม. ยังเร็วไปและอาจทำเกินจำเป็นในทารกที่ต่อมาพบ perineal fistula ซึ่งทำ anoplasty ได้เลย; จะถูกถ้าทารกชายอายุ 24 ชม. มี meconium ปนในปัสสาวะ (rectourinary fistula)'''},
'trap':'''รีบสั่ง prone cross-table lateral หรือ invertogram ทันทีหลังคลอดเพราะคิดว่าต้องรู้ระดับเร็ว หรือรีบทำ colostomy กันลำไส้อุดตัน — ก่อน 16–24 ชม. ลมยังไม่ถึงปลาย rectum และ meconium ยังไม่ผ่าน fistula ภาพจะหลอกว่าเป็นชนิดสูง · คำว่า "3 hours old" และ "no visible fistula yet" คือสัญญาณให้รอแล้วตรวจซ้ำ''',
'summary':S(k,'''แกนของข้อ: ทารก ARM อายุไม่กี่ชั่วโมงที่ยังไม่เห็น fistula หรือ meconium → ยังไม่ถ่ายภาพหรือผ่าตัด → ประคับประคองและตรวจ perineum + ปัสสาวะซ้ำที่ 16–24 ชม.''',
 ['''ทารกชายตาม Krickenbeck: perineal (cutaneous) fistula = ชนิดต่ำ · rectourethral (bulbar/prostatic) พบบ่อยที่สุดในชาย · rectobladder neck สูงสุด พยากรณ์การกลั้นแย่สุด · imperforate anus without fistula พบบ่อยใน Down syndrome''',
  '''ARM พบราว 1 ใน 4,000–5,000 การเกิด · มากกว่าครึ่งมีความผิดปกติร่วมอย่างน้อย 1 ระบบ · sacral ratio และ tethered cord ใช้พยากรณ์การกลั้นอุจจาระหลังผ่าตัด''']),
'opinion':'''เห็นด้วยกับคีย์ B ความมั่นใจสูง — คีย์ Key 76D วง 2 พร้อมลายมือ "รอดูว่า meconium จะออกมาทางไหน" ตรงกับ algorithm ของ Levitt & Peña (Orphanet J Rare Dis 2007 และตำรา pediatric colorectal ปัจจุบัน) ที่ให้รอ 16–24 ชม. ก่อนตัดสินใจ · ช้อย A ถูกเฉพาะเมื่อครบ 24 ชม. แล้วยังไม่เห็น meconium ตามที่คีย์เขียนกำกับไว้''',
'variants':V(k,'''ทารกชายอายุ 24 ชม. เห็น meconium เป็นเส้นใต้ผิวหนังตามแนว median raphe ไปทางถุงอัณฑะ (perineal fistula) → anoplasty ในช่วงแรกเกิดโดยไม่ต้อง colostomy''',
 '''ทารก ARM ใส่สาย OG แล้วสายขดกลับในหลอดอาหารส่วนบน → esophageal atresia ร่วม (VACTERL) → แก้ EA/TEF ก่อน แล้วจึงจัดการ ARM ตามชนิด'''),
}

k=P+'14'
D[k]={
'interp':'''ข้อนี้ไม่มีผู้ป่วยเฉพาะ: ทารก ARM ถ่ายภาพ prone cross-table lateral (ท่าคว่ำก้นโด่ง ให้ลมลอยขึ้นไปที่ปลายถุง rectum) · ถามเส้นอ้างอิงบนภาพรังสีที่ใช้แบ่ง ARM เป็น high หรือ low ซึ่งใช้แทนระดับกล้ามเนื้อ levator ani ที่มองไม่เห็นบนภาพ''',
'trap':'''เลือก levator ani เพราะเป็นโครงสร้างจริงที่ใช้แบ่ง high/low ทางกายวิภาค หรือ I line เพราะเป็นเส้นบนภาพเหมือนกัน — คำถามระบุภาพรังสี จึงตอบเส้นที่วาดบนภาพแทนระดับ levator คือ PC line · I line ใช้แยก intermediate กับ low ไม่ใช่เส้นแบ่ง high/low หลัก''',
'summary':S(k,'''แกนของข้อ: บน prone cross-table lateral ใช้ pubococcygeal (PC) line แทนระดับ levator ani · ปลายถุง rectum เหนือ PC line = high · ใต้ PC line (และห่างผิวหนัง &lt; 1 cm) = low''',
 ['''เทคนิค: ทำเมื่ออายุ ≥ 16–24 ชม. ให้ลมลงถึงปลาย rectum · นอนคว่ำยกก้นสูงหลายนาที วาง marker ที่ตำแหน่งทวาร · ทำเร็วเกินหรือ meconium อุดปลายถุงจะเห็นถุงสูงกว่าจริง · invertogram (ห้อยหัวแบบ Wangensteen–Rice) เลิกใช้แล้ว''',
  '''นัยต่อการรักษา: low (rectum ห่างผิวหนัง &lt; 1 cm ไม่มีความผิดปกติร่วมรุนแรง) → PSARP/anoplasty ได้ในช่วงแรกเกิด · high หรือห่างเกิน 1 cm → colostomy ก่อน แล้วทำ distal colostogram หา fistula ก่อน PSARP ตอนอายุ 1–3 เดือน''']),
'variants':V(k,'''ภาพ prone cross-table lateral ถุงลมของ rectum อยู่ใต้ PC line แต่ยังเหนือ I line → intermediate ตาม Wingspread → ส่วนใหญ่ทำ colostomy ก่อน แล้ว PSARP ภายหลัง'''),
}

k=P+'15@p4#2'
D[k]={
'why':'''<b>Sigmoid volvulus</b> เกิดเมื่อ sigmoid colon ที่<b>ยาวและ mesentery ฐานแคบ</b> (จากท้องผูกเรื้อรัง ติดเตียง โรค Parkinson/จิตเวช) บิดรอบแกน mesentery เกิด <b>closed-loop obstruction</b> → ห่วงที่บิดโป่งลมมากเป็นรูปตัว U กลับหัว ผนังสองข้างชนกันตรงกลางเป็นเส้น = <b>coffee bean sign</b> (bent inner tube) ชี้จาก pelvis ซ้ายขึ้นไปใต้กะบังลม บางครั้งยอดห่วงสูงกว่า transverse colon (northern exposure sign) และไม่มี haustra · colon ส่วนต้นโป่งตาม ส่วนลมใน rectum น้อย · อาการเด่น: ผู้สูงอายุ<b>ท้องอืดมาก</b>ไม่สมกับความปวด ร่วม <b>obstipation</b> · AXR มักให้การวินิจฉัยได้ ยืนยันด้วย <b>CT</b> (whirl sign, bird-beak) · ไม่มี peritonitis → คลายบิดด้วยกล้อง · ตรงคีย์ Key 76D ติ๊ก 1 พร้อมลายมือ <b>"coffee bean sign"</b> และแปะรูป sigmoid volvulus''',
'trap':'''สับสน sigmoid กับ cecal volvulus เพราะเป็นห่วงลำไส้โป่งรูปเมล็ดกาแฟเหมือนกัน หรือเลือก toxic megacolon เพราะ colon โป่งมาก — ดูจุดเริ่มของห่วง (pelvis ซ้าย vs RLQ), haustra (sigmoid ไม่มี, cecum มี), ลำไส้เล็กโป่งร่วม (พบใน cecal) และบริบท (toxic megacolon ต้องมี colitis + อาการพิษทั่วตัว)''',
'summary':S(k,'''แกนของข้อ: ผู้สูงอายุท้องอืดมาก obstipation + AXR ห่วงลำไส้รูปตัว U กลับหัวจาก pelvis ซ้าย (coffee bean sign) = sigmoid volvulus · ปัจจัยเสี่ยง: ท้องผูกเรื้อรัง ติดเตียง โรคทางระบบประสาท/จิตเวช''',
 ['''Colonic volvulus: sigmoid พบบ่อยที่สุด > cecum > transverse/splenic flexure (น้อยมาก) · ASCRS Colonic Volvulus Guideline 2021: รายไม่มี peritonitis → endoscopic detorsion เป็นขั้นแรก แล้ว sigmoidectomy ในการนอนโรงพยาบาลครั้งเดียวกัน เพราะเป็นซ้ำบ่อย''']),
'opinion':'''เห็นด้วยกับคีย์ A ความมั่นใจสูง — คีย์ Key 76D ติ๊ก 1 พร้อมลายมือ coffee bean sign และรูป sigmoid volvulus ตรงกับภาพและบริบทผู้สูงอายุ obstipation · ตาม ASCRS Colonic Volvulus Guideline 2021 รายไม่มี peritonitis ให้ endoscopic detorsion แล้ว sigmoidectomy ใน admission เดียวกัน · ภาพในข้อเป็นรูปที่ย้ายมาตามลูกศรของคีย์''',
'variants':V(k,'''หญิงตั้งครรภ์ไตรมาสสามท้องอืดมาก ไม่ถ่ายไม่ผายลม AXR เห็นห่วงลำไส้รูปตัว U จาก pelvis ไม่มี peritonitis → sigmoid volvulus ในครรภ์ → ลองคลายบิดด้วยกล้อง แล้ววางแผนผ่าตัดร่วมกับสูติแพทย์'''),
}

k=P+'16'
D[k]={
'trap':'''ใช้ขนาดฝีเกิน 4 cm ตัดสินเป็น Hinchey II ตามตารางขนาดที่แปะในคีย์ (คีย์เองวง II ทับไว้) — Hinchey แบ่งตาม<b>ตำแหน่ง</b>: ฝีติดลำไส้ (pericolic/mesocolic) = I ไม่ว่าขนาดเท่าไร · ฝีห่างออกไป (pelvic/retroperitoneal/distant) = II · ขนาด ≥ 3–4 cm ใช้ตัดสินว่าจะทำ percutaneous drainage''',
'wrong':{
 'D':'''Hinchey IV = fecal peritonitis จากรูทะลุเปิด (free perforation) อุจจาระกระจายในช่องท้อง ผู้ป่วยมักช็อกและ sepsis รุนแรง ต่างจากในข้อที่กดเจ็บเฉพาะที่ไม่มี rebound; จะถูกถ้าผู้ป่วย diverticulitis ช็อก ท้องแข็งทั่ว ผ่าตัดพบอุจจาระในช่องท้องจาก sigmoid ที่ทะลุเปิด''',
 'E':'''Hinchey ทั้ง original (1978) และ modified มีแค่ stage 0, I (Ia/Ib), II, III และ IV ไม่มี stage V; ไม่มีสถานการณ์ใดที่ตอบ Hinchey V เพราะการแบ่งนี้จบที่ fecal peritonitis (IV) ซึ่งรุนแรงที่สุดแล้ว'''},
'summary':S(k,'''แกนของข้อ: Hinchey แบ่งตามตำแหน่งของหนอง ไม่ใช่ขนาด → pericolic abscess 5 cm = Hinchey I (modified Ib) · ขนาดใช้ตัดสินเรื่องการระบาย ไม่ได้เปลี่ยน stage''',
 ['''การระบาย: ฝี ≥ 3 cm (ASCRS 2020; บางแหล่งใช้ 4 cm) → percutaneous drainage ภายใต้ CT + ยาปฏิชีวนะ · ฝีเล็กกว่า → ยาปฏิชีวนะอย่างเดียว · ระบายไม่ได้หรือไม่ดีขึ้น → ผ่าตัด''',
  '''หลังหาย complicated diverticulitis (มีฝี) โดยไม่ผ่าตัด → colonoscopy 6–8 สัปดาห์เพื่อตัดมะเร็ง และพิจารณา elective sigmoidectomy เพราะเสี่ยงกลับเป็นซ้ำและภาวะแทรกซ้อนสูงกว่าชนิด uncomplicated''',
  '''CT ฉีดสีเป็นการตรวจมาตรฐาน: เห็นผนังหนา fat stranding ฝี ลมอิสระ · WSES 2020 ใช้การแบ่งตาม CT แยก uncomplicated กับ complicated (ฝี ลมอิสระใกล้/ไกล น้ำในช่องท้อง) เพื่อเลือกการรักษา''']),
'variants':V(k,'''Diverticulitis CT พบ pericolic phlegmon ไม่มีฝี ไม่มีลมอิสระ ผู้ป่วยคงที่ → modified Hinchey Ia → ยาปฏิชีวนะหรือรักษาตามอาการ (ในผู้ภูมิคุ้มกันปกติ) ไม่ต้องระบาย'''),
}

k=P+'17'
D[k]={
'interp':'''ชายสูงอายุปวดท้องซ้ายล่าง (LLQ) ไข้ 38°C สัญญาณชีพคงที่ กดเจ็บเฉพาะที่ ไม่มีก้อน ไม่มีประวัติขับถ่ายเปลี่ยนหรือเลือดออก · ภาพรวมเข้ากับการอักเสบเฉียบพลันของ sigmoid ชนิดไม่มีภาวะแทรกซ้อน · ถามการวินิจฉัยที่น่าจะเป็นที่สุด''',
'why':'''<b>Diverticulosis</b> ในผู้สูงอายุ (โดยเฉพาะชาวตะวันตก) มักอยู่ที่ <b>sigmoid</b> ซึ่งเป็นส่วนที่ความดันในลำไส้สูงและเส้นผ่านศูนย์กลางเล็ก เมื่อ diverticulum อุดตันและเกิด microperforation → <b>diverticulitis</b>: ปวด<b>ท้องซ้ายล่าง</b>ต่อเนื่อง ไข้ กดเจ็บเฉพาะที่ ± เม็ดเลือดขาว/CRP สูง จึงถูกเรียกว่า "left-sided appendicitis" · ในข้อนี้สัญญาณชีพคงที่ ไม่มีก้อน ไม่มี peritonitis → น่าจะเป็น <b>uncomplicated</b> · ยืนยันด้วย <b>CT ฉีดสี</b> (ความไวและจำเพาะสูงกว่า 90%) ซึ่งแยกภาวะแทรกซ้อน (ฝี ทะลุ fistula อุดตัน) และโรคอื่นได้ · มะเร็ง ischemic colitis นิ่วท่อไต หรือไส้ติ่ง ไม่เข้ากับกลุ่มอาการปวด LLQ + ไข้ + กดเจ็บเฉพาะที่แบบนี้ · ตรงคีย์ Key 76D ติ๊ก A พร้อมลายมือ <b>"diverticulitis?"</b>''',
'trap':'''ตอบ sigmoid cancer เพราะผู้ป่วยสูงอายุและตำแหน่งตรงกัน หรือ ureteric colic เพราะปวดท้องข้างเดียว — มะเร็งมักมาด้วยการขับถ่ายเปลี่ยน เลือดออก น้ำหนักลด ไม่ใช่ไข้เฉียบพลัน ส่วนนิ่วปวดบิดร้าวลงขาหนีบ ไม่มีกดเจ็บเฉพาะที่ · แต่ต้องส่องกล้องตัดมะเร็งหลังหายอักเสบ เพราะมะเร็งที่ทะลุเลียนแบบ diverticulitis ได้''',
'summary':S(k,'''แกนของข้อ: ผู้สูงอายุปวด LLQ + ไข้ + กดเจ็บเฉพาะที่ ไม่มีก้อนหรือ peritonitis = sigmoid diverticulitis (น่าจะ uncomplicated) → ยืนยันด้วย CT ฉีดสี''',
 ['''ปัจจัยเสี่ยง: อายุมาก อาหารกากใยต่ำ อ้วน ไม่ออกกำลังกาย สูบบุหรี่ NSAIDs/steroid/opioid · ถั่ว ข้าวโพด เมล็ดพืช ไม่เพิ่มความเสี่ยงจึงไม่ต้องห้าม · กินกากใยสูงหลังหายช่วยลดการกลับเป็นซ้ำ''']),
'opinion':'''เห็นด้วยกับคีย์ A ความมั่นใจสูง — คีย์ Key 76D ติ๊ก A และเขียน "diverticulitis?" ตรงกับกลุ่มอาการปวด LLQ + ไข้ในผู้สูงอายุ · ตาม ASCRS Left-Sided Colonic Diverticulitis Guideline 2020 และ AGA Clinical Practice Update 2021 ควรยืนยันด้วย CT และผู้ป่วย uncomplicated ภูมิคุ้มกันปกติอาจไม่ต้องให้ยาปฏิชีวนะทุกราย''',
'variants':V(k,'''ผู้สูงอายุเคยเป็น diverticulitis หลายครั้ง มีลมออกทางปัสสาวะ (pneumaturia) และเศษอุจจาระในปัสสาวะ → colovesical fistula → CT ยืนยัน แล้ว sigmoidectomy ร่วมซ่อมกระเพาะปัสสาวะ'''),
}

k=P+'18'
D[k]={
'trap':'''ช้อยเกือบทุกตัวเป็นขั้นตอนใน algorithm ของ anal fissure จึงชวนเลือกขั้นแรก (ยาทา/ยาระบาย) ตามความเคยชิน — ต้องอ่านตัวชี้ chronic: เป็นมา 3 เดือน (เกิน 8 สัปดาห์) + sentinel skin tag + แผลลึก ร่วมกับคำถาม "most appropriate" → การรักษาที่หายสูงสุดและเป็นซ้ำน้อยสุดคือ LIS ตามที่คีย์เลือก''',
'summary':S(k,'''แกนของข้อ: chronic anal fissure (เกิน 8 สัปดาห์ + sentinel skin tag + แผลลึก) เกิดจากหูรูดชั้นในเกร็งและก้นแผลขาดเลือด → การรักษาที่ได้ผลที่สุดคือ lateral internal sphincterotomy''',
 ['''ตำแหน่ง: ส่วนใหญ่ posterior midline (ราว 90%) รองลงมา anterior midline (พบมากขึ้นในหญิงหลังคลอด) · fissure นอกแนวกลาง หลายแผล หรือไม่เจ็บ → นึกถึง Crohn, TB, HIV, syphilis, มะเร็ง → ส่องตรวจและ biopsy''',
  '''Algorithm: ทุกราย fiber + น้ำ + sitz bath → topical CCB (diltiazem 2%, nifedipine) หรือ nitrate (GTN 0.2–0.4%) 6–8 สัปดาห์ · CCB ปวดศีรษะน้อยกว่า nitrate → Botox เมื่อยาไม่ได้ผลหรือเสี่ยงกลั้นไม่อยู่ → LIS (ตัดหูรูดชั้นในด้านข้างยาวเท่าแผล)''']),
'variants':V(k,'''ผู้ป่วย chronic fissure ทา GTN แล้วปวดศีรษะมากจนต้องหยุดยา แผลยังไม่หาย ไม่เคยลองยาอื่น → เปลี่ยนเป็น topical diltiazem ก่อน แล้วจึงพิจารณา Botox หรือ LIS ถ้าไม่ได้ผล'''),
}

k=P+'19'
D[k]={
'interp':'''ชาย 50 ปี ไม่มีอาการ ตรวจสุขภาพประจำปีพบ fecal occult blood test (FOBT) บวก · เป็นผลคัดกรองมะเร็งลำไส้ใหญ่ที่ผิดปกติในผู้ความเสี่ยงเฉลี่ย · ถามการจัดการขั้นต่อไป — ต้องเลือกการตรวจที่ดูลำไส้ใหญ่ได้โดยตรงและตัดชิ้นเนื้อได้''',
'trap':'''คิดว่า FOBT บวกเป็นผลบวกลวงจากอาหารหรือริดสีดวง จึงเลือกตรวจซ้ำหรือนัดติดตาม หรือเลือก CEA เพราะเป็น tumor marker — ผลคัดกรองที่ไม่ใช่ colonoscopy เมื่อบวกต้องตามด้วย colonoscopy เสมอ ผลซ้ำที่ลบไม่ลบล้างผลบวก · CEA ไม่ใช้คัดกรองหรือวินิจฉัย''',
'summary':S(k,'''แกนของข้อ: FOBT/FIT บวกในผู้ไม่มีอาการ → colonoscopy (ไม่ใช่ตรวจซ้ำหรือรอ) · ช้อยเดียวที่มี colonoscopy คือ EGD + colonoscopy จึงเป็นคำตอบ''',
 ['''gFOBT vs FIT: gFOBT ตรวจ peroxidase ของ heme ผลบวกลวงจากเนื้อแดง ผักบางชนิด NSAIDs ส่วนวิตามินซีทำผลลบลวง ต้องเก็บ 3 ครั้ง · FIT ใช้แอนติบอดีต่อ human globin จำเพาะเลือดจากลำไส้ใหญ่ ไม่ต้องคุมอาหาร เก็บครั้งเดียว ปัจจุบันจึงนิยม FIT''',
  '''หลัง FIT บวกควรส่องกล้องให้เร็ว — การรอเกิน 9–10 เดือนสัมพันธ์กับมะเร็งระยะลุกลามมากขึ้น (Corley, JAMA 2017)''']),
'opinion':'''เห็นด้วยกับคีย์ A ความมั่นใจปานกลาง–สูง — คีย์ Key 76D ติ๊กและตีกรอบ "EGD + colonoscope" โดยแกนคือ colonoscopy ซึ่งเป็นการตามผลบวกตาม USMSTF 2017 และ USPSTF 2021 · EGD ไม่จำเป็นในผู้ไม่มีอาการและไม่ซีด แต่ไม่มีช้อย colonoscopy อย่างเดียวให้เลือก''',
'variants':V(k,'''ชาย 52 ปี FIT บวก colonoscopy พบ tubular adenoma ขนาด 15 mm ตัดออกหมด → advanced adenoma → colonoscopy ซ้ำใน 3 ปี (USMSTF 2020)'''),
}

k=P+'20'
D[k]={
'interp':'''ทารกอาเจียนพุ่ง ไม่มีน้ำดี เป็นนมที่ยังไม่ย่อย ราว 30 นาทีหลังกิน และคลำได้ก้อนรูปไข่ที่ท้องขวาบน · เป็นกลุ่มอาการ gastric outlet obstruction ที่จุดอุดอยู่เหนือ ampulla of Vater ร่วมก้อนที่ pylorus · ถามการวินิจฉัยที่น่าจะเป็นที่สุด''',
'why':'''<b>Hypertrophic pyloric stenosis</b>: กล้ามเนื้อวงของ pylorus หนาตัวขึ้นหลังคลอด (มักเริ่มอายุ <b>2–8 สัปดาห์</b>) จนอุดทางออกกระเพาะ → <b>อาเจียนพุ่งแรง (projectile)</b> หลังกินไม่นาน เป็นนมหรือนมเปรี้ยว <b>ไม่มีน้ำดี</b> เพราะจุดอุดอยู่เหนือ ampulla of Vater · ทารก<b>ยังหิว</b>อยากกินต่อ (hungry vomiter) · คลำได้ <b>olive</b> (pylorus ที่หนา) ที่ epigastrium/RUQ ขณะท้องว่าง และอาจเห็น gastric peristaltic wave จากซ้ายไปขวา · ยืนยันด้วย <b>ultrasound</b> (ผนัง ≥ 3–4 mm ยาว ≥ 15–17 mm) · อาเจียนกรดต่อเนื่องทำให้ <b>hypochloremic hypokalemic metabolic alkalosis</b> ต้องแก้ก่อนผ่าตัด · ตรงคีย์ Key 76D ติ๊ก 1 พร้อมลายมือ <b>"HPS"</b>''',
'trap':'''เลือก duodenal atresia หรือ malrotation เพราะเป็นโรคอาเจียนในทารกที่จำได้ หรือ overfeeding เพราะเป็นนมไม่ย่อย — ดูสามจุด: (1) สีอาเจียน ไม่มีน้ำดี = อุดเหนือ ampulla (2) เวลาเริ่ม HPS เริ่มหลังอายุ 2–3 สัปดาห์ ไม่ใช่วันแรก (3) ก้อน olive ที่ RUQ — ครบสามจุดจึงเป็น HPS''',
'summary':S(k,'''แกนของข้อ: ทารกอาเจียนพุ่งไม่มีน้ำดีหลังกิน + คลำได้ก้อน olive ที่ RUQ/epigastrium = hypertrophic pyloric stenosis → ยืนยันด้วย ultrasound''',
 ['''การตรวจร่างกาย: hungry vomiter น้ำหนักลด ขาดน้ำ เห็น gastric peristaltic wave วิ่งซ้ายไปขวา · คลำ olive ได้ดีเมื่อท้องว่าง (หลังอาเจียนหรือดูดทาง NG) · UGI study ใช้เมื่อ ultrasound ไม่ชัด: string sign, shoulder sign''']),
'opinion':'''เห็นด้วยกับคีย์ A ความมั่นใจสูง — คีย์ Key 76D ติ๊ก 1 พร้อมลายมือ HPS ตรงกับกลุ่มอาการครบ (projectile non-bilious + olive) · ตามตำรา Holcomb & Ashcraft's Pediatric Surgery 7th ed. (2020) ยืนยันด้วย ultrasound และแก้ alkalosis ก่อน pyloromyotomy ซึ่งแบบ laparoscopic กับ open ได้ผลใกล้เคียงกัน''',
'variants':V(k,'''ทารก 5 สัปดาห์อาเจียนพุ่ง ultrasound ผนัง pylorus หนา 2 mm ยาว 10 mm → ไม่เข้าเกณฑ์ HPS → หาสาเหตุอื่น (GERD, pylorospasm) และตรวจซ้ำถ้าอาการยังเป็น'''),
}

k=P+'21'
D[k]={
'why':'''ลักษณะที่ชี้ขาดคือก้อนแดงรูปทรงกระบอกที่มี<b>รอยพับเป็นวงซ้อนกัน (concentric/circular folds)</b> รอบเส้นรอบวง เพราะ<b>ผนัง rectum ทั้งชั้น</b> (full-thickness) พับยื่นออกทางทวาร = <b>rectal prolapse (procidentia)</b> · ประวัติที่เข้ากัน: ยื่นขณะเบ่ง แรก ๆ กลับเอง ต่อมาต้องดัน มักร่วม<b>กลั้นอุจจาระไม่อยู่</b> (หูรูดถูกยืด, pudendal neuropathy) มีมูกหรือเลือดเล็กน้อย · พบมากใน<b>หญิงสูงอายุ</b> ท้องผูกเบ่งเรื้อรัง อุ้งเชิงกรานหย่อน · คลำได้ผนังลำไส้หนาสองชั้น ต่างจาก mucosal prolapse ที่บาง · ตรงข้ามกับ <b>prolapsed hemorrhoids</b>/mucosal prolapse ที่เห็น<b>ร่องตามแนวรัศมี (radial folds)</b> แยกเป็นกลีบและยื่นสั้นกว่า · ตรงคีย์ Key 76D ติ๊ก 1 พร้อมลายมือ <b>"ดูภาพให้ออก"</b> และแปะรูปเปรียบเทียบ <b>rectal prolapse (circular folds) vs prolapsed hemorrhoids (radial folds)</b>''',
'trap':'''ตอบ internal hemorrhoid เพราะประวัติ "ยื่นตอนถ่าย แรก ๆ กลับเอง ต่อมาต้องใช้มือดัน" ตรงนิยาม grade 2 → 3 พอดี — ประวัติแยกสองโรคนี้ไม่ได้ ต้องดูภาพ: รอยพับเป็นวงซ้อนรอบเส้นรอบวง = rectal prolapse · ร่องตามแนวรัศมีแยกเป็นกลีบ = hemorrhoid (คีย์จึงเขียนว่า "ดูภาพให้ออก")''',
'summary':S(k,'''แกนของข้อ: ก้อนยื่นจากทวารที่มีรอยพับเป็นวงซ้อนกัน (concentric) = full-thickness rectal prolapse · ร่องตามแนวรัศมี (radial) = prolapsed hemorrhoids/mucosal prolapse · ประวัติการยื่นเหมือนกัน ต้องแยกจากลักษณะที่เห็น''',
 ['''Hemorrhoid grading (Goligher): I เลือดออกไม่ยื่น · II ยื่นแล้วกลับเอง · III ต้องดันกลับ · IV ดันไม่กลับ · I–III ส่วนใหญ่ → fiber + rubber band ligation · III–IV ที่อาการมากหรือไม่ตอบสนอง → hemorrhoidectomy''']),
'opinion':'''เห็นด้วยกับคีย์ A ความมั่นใจสูง — คีย์ Key 76D ติ๊ก 1 พร้อมลายมือ "ดูภาพให้ออก" และรูปเปรียบเทียบ circular vs radial folds ตรงกับภาพที่มีรอยพับเป็นวง · ตาม ASCRS Rectal Prolapse Guideline 2017 ผู้ป่วยแข็งแรงเลือก abdominal rectopexy ส่วนผู้เสี่ยงผ่าตัดสูงเลือก perineal approach''',
'variants':V(k,'''Rectal prolapse ยื่นค้าง ดันไม่กลับ บวมแดงคล้ำ → โรยน้ำตาลทรายลดบวมแล้วดันกลับ ถ้าเนื้อตายหรือยังดันไม่กลับ → perineal rectosigmoidectomy (Altemeier) แบบฉุกเฉิน'''),
}

k=P+'22'
D[k]={
'interp':'''ทารก 2 เดือนตัวเหลือง อุจจาระซีด ปัสสาวะสีเข้ม ตับโต ตรวจร่างกายอื่นปกติ · ภาพรวมเป็น cholestasis ที่ต้องรีบหา biliary atresia · ถามการตรวจ "แรก" ที่ต้องทำก่อนการตรวจภาพหรือหัตถการ คือยืนยัน direct (conjugated) hyperbilirubinemia''',
'summary':S(k,'''แกนของข้อ: ทารกตัวเหลือง + อุจจาระซีด + ปัสสาวะเข้ม → ขั้นแรกคือ LFT/fractionated bilirubin ยืนยัน cholestasis แล้วจึง ultrasound และตรวจต่อตาม algorithm''',
 ['''Biliary atresia: ท่อน้ำดีนอกตับอักเสบตีบตันแบบลุกลาม · ultrasound: gallbladder เล็ก/ไม่มี/รูปร่างผิด, triangular cord sign · HIDA: สารเข้าตับแต่ไม่ลงลำไส้ใน 24 ชม. · ยืนยันด้วย intraoperative cholangiogram''',
  '''Kasai portoenterostomy ได้ผลดีที่สุดเมื่อทำก่อนอายุ 45–60 วัน · ทำช้าหรือไม่ได้ผล → ตับแข็ง → ปลูกถ่ายตับ (BA เป็นข้อบ่งชี้ปลูกถ่ายตับที่พบบ่อยที่สุดในเด็ก) · บัตรเทียบสีอุจจาระช่วยให้พบเร็ว''']),
'opinion':'''เห็นด้วยกับคำตอบสุดท้ายของคีย์ A ความมั่นใจปานกลาง — คีย์ Key 76D วงและไฮไลต์ A พร้อมแผนภาพ S&S → LFT → US ตรงกับ NASPGHAN/ESPGHAN Cholestatic Jaundice Guideline 2017 ที่ให้ตรวจ total/direct bilirubin ก่อน · ในทางปฏิบัติ LFT และ ultrasound มักส่งวันเดียวกัน ส่วนช้อย B มีติ๊กจากผู้เฉลยคนแรก''',
'variants':V(k,'''หลังผ่าตัด Kasai 1 เดือน ทารกไข้สูง ตัวเหลืองเพิ่ม อุจจาระกลับซีด → ascending cholangitis (ภาวะแทรกซ้อนที่พบบ่อยที่สุด) → IV antibiotics ครอบคลุม gram-negative'''),
}

for k,v in D.items():
    if 'wrong' in v:
        w=dict(A[k].get('wrong') or {}); w.update(v['wrong']); v['wrong']=w
json.dump(D,open(OUT,'w'),ensure_ascii=False,indent=1)
print(len(D))

import json
A=json.load(open('/home/claude/h/all.json'))
P={}
def V(k,new):
  return list(A[k]['variants'])+[new]
P['MDCU77|RoC|Colo 2']=dict(
interp="ข้อ <b>NOT</b> — โจทย์ไม่ให้ประวัติผู้ป่วย ให้เพียงชนิดของ fistula in ano 5 แบบ (ตาม Parks classification และตำแหน่ง) → ถามชนิดที่<b>ไม่</b>จัดเป็น complex คือ simple fistula ที่ทางเดินผ่านหูรูดภายนอกน้อยหรือไม่ผ่านเลย จึงทำ fistulotomy ได้ปลอดภัยโดยไม่เสี่ยงกลั้นไม่อยู่ · ต้องรู้เกณฑ์ complex: ผ่าน external sphincter > 30% อยู่สูง ด้านหน้าในหญิง หรือมีโรคร่วม",
variants=V('MDCU77|RoC|Colo 2',"ผู้ป่วย Crohn's disease มี perianal fistula หลายทางและมีหนองที่ยังไม่ได้ระบาย → ระบายหนองและใส่ loose seton ร่วมกับยา anti-TNF (เช่น infliximab) ไม่ทำ fistulotomy เพราะแผลหายยากและเสี่ยงกลั้นไม่อยู่"))
P['MDCU77|RoC|Colo 3']=dict(
interp="โจทย์ให้ adenocarcinoma ของ sigmoid colon ขนาด 4 cm มีต่อมน้ำเหลืองรอบลำไส้ (pericolic) บวก ไม่มี distant metastasis → colon cancer <b>stage III</b> (T ใดก็ได้ N+ M0) ที่ผ่าตัดเอาออกได้ · ถามการรักษาที่เหมาะสม — ประเด็นจริงคือแยก sigmoid ซึ่งเป็น colon (ผ่าตัดแบบ oncologic ก่อนแล้วให้ adjuvant chemotherapy) ออกจาก rectal cancer ที่อาจต้องให้ neoadjuvant therapy",
variants=V('MDCU77|RoC|Colo 3',"ผู้ป่วยอายุ 82 ปี ร่างกายเปราะบาง หลัง sigmoidectomy พยาธิเป็น T3N1 → ยังพิจารณาเคมีบำบัดเสริมได้ แต่มักเลือก capecitabine หรือ 5-FU เดี่ยว เพราะประโยชน์ที่เพิ่มจาก oxaliplatin ในผู้ป่วยอายุ > 70 ปีไม่ชัด"))
P['MDCU77|RoC|Colo 4']=dict(
variants=V('MDCU77|RoC|Colo 4',"ทารกครบกำหนดมารดาเป็นเบาหวาน ไม่ถ่ายขี้เทา contrast enema เห็น descending colon เล็กแคบไปถึง splenic flexure แล้วลำไส้ส่วนต้นโป่ง → neonatal small left colon syndrome: มักถ่ายได้เองหลังสวน contrast ยังควรพิจารณา rectal biopsy ถ้าไม่ดีขึ้น"))
P['MDCU77|RoC|Colo 5']=dict(
interp="ข้อ <b>NOT</b> — ผู้ป่วยได้รับการวินิจฉัยมะเร็ง rectum ชนิดลุกลามเฉพาะที่และยังไม่ได้เริ่มรักษา → ถามการตรวจที่<b>ไม่</b>อยู่ในชุด staging เบื้องต้นตามปกติ · ต้องรู้ชุดมาตรฐานตาม NCCN: colonoscopy ทั้งเส้น + biopsy, MRI pelvis (local staging), CT chest/abdomen/pelvis (distant) และ CEA แล้วแยกการตรวจที่ใช้เฉพาะกรณีผลก้ำกึ่ง",
variants=V('MDCU77|RoC|Colo 5',"ผู้ป่วยมะเร็ง rectum ก้อนตีบจนกล้องผ่านไปลำไส้ส่วนต้นไม่ได้ → ตรวจ colon ส่วนที่เหลือด้วย CT colonography ก่อนผ่าตัด หรือทำ colonoscopy ภายใน 3–6 เดือนหลังผ่าตัด เพื่อหา synchronous cancer หรือ polyp"))
P['MDCU77|RoC|Colo 6']=dict(
interp="ผู้สูงอายุติดเตียงท้องอืดมาก ภาพรังสีช่องท้อง (ตามที่บันทึกไว้) เห็นลำไส้ใหญ่ห่วงเดียวโป่งมาก รูปโค้งคล้าย bent inner tube/coffee bean ไม่มี haustra ยอดชี้ขึ้นไปทางขวาบนจากอุ้งเชิงกรานซ้าย = <b>sigmoid volvulus</b> → ถามการวินิจฉัย ต้องแยกจาก SBO, cecal volvulus, Ogilvie และ toxic megacolon จากรูปแบบและตำแหน่งของห่วงลำไส้ที่โป่ง",
variants=V('MDCU77|RoC|Colo 6',"หญิงอายุ 35 ปีปวดท้องบิดเฉียบพลัน ภาพรังสีเห็นห่วงลำไส้ใหญ่โป่งรูปไตอยู่กลางถึงซ้ายบน ร่วมกับลำไส้เล็กโป่ง → cecal volvulus: ผ่าตัด right hemicolectomy (การส่องกล้องคลายเกลียวมักไม่สำเร็จ)"))
P['MDCU77|RoC|Colo 7']=dict(
interp="ข้อ <b>NOT</b> — โจทย์ให้ชื่อ sign ทางรังสี 5 ตัว ถามตัวที่<b>ไม่ใช่</b> sign ของลมอิสระในช่องท้อง (pneumoperitoneum) · ต้องรู้ว่า Rigler/double bowel wall, football และ falciform ligament sign คือลมนอกลำไส้ที่เห็นในท่านอนหงาย ส่วน pneumatosis intestinalis คือลมในผนังลำไส้ ซึ่งบอกพยาธิคนละอย่าง (ผนังลำไส้เสียหาย ไม่ใช่ทะลุ)",
variants=V('MDCU77|RoC|Colo 7',"ผู้ป่วยหลัง colonoscopy ตัด polyp 6 ชม. ปวดท้องมาก CXR ท่ายืนเห็นลมใต้กะบังลมทั้งสองข้าง → colonic perforation: NPO ยาปฏิชีวนะ ปรึกษาศัลยแพทย์ (รูเล็ก ท้องไม่แข็ง อาจปิดด้วย clip ทางกล้อง)"))
P['MDCU77|RoC|Colo 8']=dict(
variants=V('MDCU77|RoC|Colo 8',"มะเร็ง upper rectum อุดตันร่วมกับ metastasis ตับ แต่มีไข้ ท้องแข็งทั่วท้อง ภาพรังสีเห็นลมอิสระใต้กะบังลม → ลำไส้ทะลุแล้ว: ห้ามใส่ stent ผ่าตัดฉุกเฉิน (เช่น Hartmann's procedure)"))
P['MDCU77|RoC|Colo 9']=dict(
opinion="ไม่มีคีย์ (ไฟล์ Key 77C ไม่มีส่วน Colorectal และต้นฉบับจดแค่คำถาม ไม่มีช้อย เราแต่งช้อยทั้งหมด) — ตอบ A ความมั่นใจสูง: root of the mesentery ยาวราว 15 cm วิ่งเฉียงจาก duodenojejunal flexure ทางซ้ายของ L2 ลงไปทางขวาถึง right sacroiliac joint ตาม Gray's Anatomy 42nd ed. (2020) · ตำราปัจจุบันเขียนตรงกัน ไม่มีประเด็นถกเถียง",
variants=V('MDCU77|RoC|Colo 9',"ผู้ป่วยถูกกระแทกท้องจากเข็มขัดนิรภัย มีรอยช้ำเป็นแถบที่หน้าท้อง CT เห็นเลือดคั่งใน mesentery และ contrast รั่วจากหลอดเลือด mesenteric → mesenteric injury: ผ่าตัดสำรวจด่วน"))
P['MDCU77|RoC|Colo 10']=dict(
interp="ชายอายุ 22 ปีมาด้วย anal fissure (อาการที่ไม่เกี่ยวกับมะเร็ง) แต่ประวัติครอบครัวมีมะเร็งลำไส้ใหญ่ 3 คน (พี่ชาย 40 ปี ลุง 50 ปี หลาน 27 ปี) กระจาย ≥ 2 รุ่น และมีคนเป็นก่อนอายุ 50 = เข้าเกณฑ์ <b>Amsterdam II → สงสัย Lynch syndrome</b> · ถามคำแนะนำที่เหมาะสม — ประเด็นคือต้องเริ่ม colonoscopy ตอนนี้และตรวจซ้ำถี่ ไม่ใช่รอถึงอายุคัดกรองทั่วไป",
variants=V('MDCU77|RoC|Colo 10',"ชายอายุ 25 ปี พี่สาวเป็นมะเร็งเยื่อบุโพรงมดลูกตอนอายุ 42 ปี ก้อนของพี่สาวตรวจ IHC พบ MSH2/MSH6 หาย → สงสัย Lynch: ส่ง genetic counseling ตรวจ germline ในพี่สาวก่อน แล้วตรวจเฉพาะ variant นั้นในน้อง"))
P['MDCU77|RoC|Colo 11']=dict(
wrong=dict(E="Incision and drainage คือการกรีดระบายหนอง เป็นการรักษาหลักของ perianal abscess ไม่มีที่ใช้ใน chronic anal fissure เพราะไม่มีหนองให้ระบาย และการกรีดยิ่งทำให้แผลใหญ่ขึ้นโดยไม่แก้หูรูดที่หดเกร็ง · จะถูกถ้าเป็นชายอายุ 40 ปีปวดตุบ ๆ ข้างทวารตลอดเวลา 3 วัน มีไข้ คลำได้ก้อนบวมแดงร้อนกดเจ็บ fluctuant ข้างรูทวาร = perianal abscess"),
variants=V('MDCU77|RoC|Colo 11',"หญิงหลังคลอด 6 สัปดาห์ ปวดแสบเวลาถ่าย เลือดสดติดกระดาษ ตรวจพบแผลตื้นขอบเรียบที่แนวกลางด้านหน้า เป็นมา 2 สัปดาห์ → acute anal fissure: ใยอาหาร ยาระบาย แช่น้ำอุ่น ± ยาทา · เลี่ยง LIS เพราะหูรูดอาจบาดเจ็บแฝงจากการคลอด"))
P['MDCU77|RoC|Neuro 1']=dict(
variants=V('MDCU77|RoC|Neuro 1',"ผู้ป่วยมะเร็งเต้านมมี metastasis ใน cerebellum ขนาด 3.5 cm กด fourth ventricle เริ่มซึมลง → ผ่าตัดเอาก้อนออกด่วน เพราะก้อนใหญ่ใน posterior fossa กดก้านสมองและทำให้ทรุดได้เร็ว"))
P['MDCU77|RoC|Neuro 2']=dict(
variants=V('MDCU77|RoC|Neuro 2',"ผู้ป่วยก้อนเลือดใหญ่ใน frontal lobe ทั้งสองข้าง ซึมลงช้า ๆ pupil เล็กทั้งสองข้างแต่ยังตอบสนองแสง หายใจแบบ Cheyne–Stokes → central transtentorial herniation ระยะ diencephalic: ลด ICP และผ่าตัดด่วน"))
P['MDCU77|RoC|Neuro 3']=dict(
interp="ผู้ป่วยอ่อนแรงค่อยเป็นค่อยไปหลายเดือน ไล่ลำดับแขนขวา → ขาขวา → ขาซ้าย → แขนซ้าย เป็นรูปแบบ<b>วนรอบ (around-the-clock)</b> ซึ่งเกิดจากก้อนนอกเนื้อไขสันหลังที่ค่อย ๆ กด corticospinal tract บริเวณรอยต่อ medulla กับไขสันหลัง → ถามตำแหน่งรอยโรค = ก้อนที่ <b>foramen magnum</b> (มักเป็น meningioma) ต้องแยกจาก cervical tumor, ALS, MS และ GBS",
opinion="เห็นด้วยกับคีย์ B ความมั่นใจสูง (ไฟล์ Key 77C ตอบ B) — อ่อนแรงไล่วนรอบแขนขาทั้ง 4 ข้างอย่างช้า ๆ ร่วมกับปวดท้ายทอยเป็นลักษณะคลาสสิกของก้อนที่ foramen magnum ตาม Greenberg's Handbook of Neurosurgery 10th ed. (2023) · ก้อนที่ cervical ส่วนบนให้ภาพคล้ายได้จึงเป็นตัวลวงที่ใกล้ที่สุด · ต้นฉบับมีช้อย 2 ตัว เราเติม C–E",
variants=V('MDCU77|RoC|Neuro 3',"ผู้ป่วยอ่อนแรงและมือลีบสองข้าง ชาแสบร้อนแบบสวมเสื้อคลุมไหล่ (cape) เสียความรู้สึกเจ็บและร้อนเย็นแต่สัมผัสเบาปกติ → syringomyelia (มักร่วมกับ Chiari I): MRI สมองและไขสันหลังทั้งเส้น"))
P['MDCU77|RoC|Neuro 4']=dict(
trap="เห็นว่าเพิ่งได้ osmotherapy จึงโทษ hypernatremia หรือคิดว่าซึมจากยาลดความดันแล้วรอดูอาการ — ความจริง contusion และ lobar hemorrhage หลังบาดเจ็บขยายตัวและบวมมากขึ้นได้ใน 24–72 ชม. แรก (blossoming) ทำให้ ICP สูงซ้ำ · วิธีแยก: เป้า Na ของ hypertonic saline (ราว 145–155) ไม่ทำให้ซึม และตรวจเลือดรู้ได้ทันที ส่วนผู้ป่วยที่ GCS ลดลง ≥ 2 แต้มต้อง CT สมองซ้ำทันที",
opinion="เห็นด้วยกับคีย์ A ความมั่นใจสูง (ไฟล์ Key 77C ตอบ A) — ผู้ป่วย TBI ที่ดีขึ้นแล้วกลับซึมลงในวันรุ่งขึ้น สาเหตุที่พบบ่อยและอันตรายที่สุดคือก้อนเลือด/contusion ขยายและสมองบวมจน ICP สูงซ้ำ · Brain Trauma Foundation Guidelines 4th ed. (2016) แนะนำติดตาม ICP ใน TBI รุนแรง และ CT ซ้ำเมื่ออาการแย่ลง · ช้อยอื่นเกิดได้แต่ไม่ใช่ the most likely · ต้นฉบับจดช้อยเดียว เราแต่ง B–E",
variants=V('MDCU77|RoC|Neuro 4',"ผู้ป่วยหลังบาดเจ็บศีรษะ 10 วัน ซึมลง Na 124 ปัสสาวะเข้มข้น ปริมาตรน้ำในร่างกายปกติ CT ไม่เปลี่ยน → SIADH: จำกัดน้ำ (ถ้าปริมาตรพร่องและปัสสาวะมากคิด cerebral salt wasting ให้น้ำเกลือแทน)"))
P['MDCU77|RoC|Neuro 5']=dict(
variants=V('MDCU77|RoC|Neuro 5',"ผู้ป่วยมะเร็งไตปวดศีรษะ อ่อนแรงซีกหนึ่ง MRI เห็นก้อนหลายก้อนที่รอยต่อ grey–white matter มีเลือดออกในก้อนและสมองบวมรอบก้อนมาก → hemorrhagic metastasis (RCC, melanoma, choriocarcinoma, thyroid) ไม่ใช่ cavernoma ซึ่งแทบไม่มี edema"))
P['MDCU77|RoC|Neuro 6']=dict(
variants=V('MDCU77|RoC|Neuro 6',"ผู้ป่วยปวดศีรษะทันทีรุนแรงที่สุดในชีวิตเมื่อ 3 วันก่อน มาวันนี้ CT ไม่เห็นเลือด → ความไวของ CT ลดลงตามเวลา: lumbar puncture ดู xanthochromia ถ้าบวกจึงทำ CTA หา aneurysm"))
P['MDCU77|RoC|Neuro 7']=dict(
variants=V('MDCU77|RoC|Neuro 7',"ผู้ป่วยฝีในสมองก้อนเดียวขนาด 4 cm ใน frontal lobe มี mass effect และ midline shift ซึมลง → stereotactic หรือ burr-hole aspiration ด่วน ส่งหนองย้อมและเพาะเชื้อ แล้วให้ยาฉีดต่อตามผลเพาะเชื้อ"))
P['MDCU77|RoC|Neuro 8']=dict(
variants=V('MDCU77|RoC|Neuro 8',"หญิงหลังคลอด 1 สัปดาห์ ปวดศีรษะมากขึ้นหลายวัน แล้วชัก CT เห็นเลือดใน lobe ใกล้ผิวสมองทั้งสองข้างและ superior sagittal sinus สว่างผิดปกติ → cerebral venous thrombosis: CT/MR venography แล้วให้ heparin แม้มีเลือดออก"))
P['MDCU77|RoC|Neuro 9']=dict(
variants=V('MDCU77|RoC|Neuro 9',"ผู้ป่วย ICH กิน apixaban มื้อล่าสุด 6 ชม.ก่อนมา → reverse ทันทีด้วย andexanet alfa หรือ 4-factor PCC ถ้าไม่มี (dabigatran ใช้ idarucizumab แทน)"))
P['MDCU77|RoC|Neuro 10']=dict(
variants=V('MDCU77|RoC|Neuro 10',"ผู้ป่วยอายุ 82 ปี ICH ใน thalamus ปริมาตร 35 mL GCS 10 เลือดแตกเข้า ventricle → ICH score = 1 (GCS 5–12) + 1 (≥ 30 mL) + 1 (IVH) + 0 (supratentorial) + 1 (อายุ ≥ 80) = 4 คะแนน"))
P['MDCU77|RoC|Plastic 1']=dict(
variants=V('MDCU77|RoC|Plastic 1',"ผู้ป่วยเคี้ยวหมากมีแผ่นขาวขูดไม่ออกที่ขอบลิ้น biopsy เป็น leukoplakia ที่มี moderate dysplasia → ตัดรอยโรคออกทั้งหมด (excision หรือ laser) เลิกบุหรี่ สุรา และหมาก แล้วติดตามระยะยาว"))
P['MDCU77|RoC|Plastic 2']=dict(
interp="แผลถลอก (abrasion) ที่เข่าจากรถจักรยานยนต์ล้ม มีฝุ่น ทราย และกรวดจากถนนฝังอยู่ในผิว (road rash) — ถามการดูแลแผลที่เหมาะสมที่สุด · ประเด็นคือสิ่งสกปรกที่ฝังในชั้น dermis ล้างด้วยน้ำอย่างเดียวไม่ออก ต้องขัด (scrub) ออกให้หมดตั้งแต่ครั้งแรกเพื่อกันติดเชื้อและ traumatic tattoo แล้วเลี้ยงแผลให้ชุ่มชื้นด้วย antibacterial ointment",
variants=V('MDCU77|RoC|Plastic 2',"แผลถลอกจากรถล้มที่ข้อศอก 4 วัน บวมแดงร้อนลามรอบแผลเกิน 2 cm มีไข้ต่ำ ๆ → wound cellulitis: ยาปฏิชีวนะชนิดกินที่คลุม Staphylococcus และ Streptococcus (เช่น dicloxacillin หรือ cephalexin)"))
P['MDCU77|RoC|Plastic 3']=dict(
variants=V('MDCU77|RoC|Plastic 3',"ผู้ใช้แรงงานอายุ 50 ปี นิ้วนางขาดถึงระดับโคน nail bed เห็นกระดูกโผล่ ต้องการกลับไปทำงานเร็วที่สุด → revision amputation: ตัดแต่งกระดูกให้สั้นลงแล้วเย็บปิดปลายนิ้ว"))
for k,v in P.items():
  if 'wrong' in v:
    w=dict(A[k]['wrong']);w.update(v['wrong']);v['wrong']=w
out='/home/claude/ac-mdcu/parts/explain/data_subspe/zz77_06.json'
json.dump(P,open(out,'w'),ensure_ascii=False,indent=1)
print('wrote',len(P))

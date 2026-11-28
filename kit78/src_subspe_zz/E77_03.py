import json
A=json.load(open('/home/claude/h/all.json'))
V=lambda k,s:(A[k].get('variants') or [])[:3]+[s]
P={}
k='MDCU77|RoA|CVT 6'
P[k]=dict(variants=V(k,"หญิงตั้งครรภ์ 34 สัปดาห์ที่เป็น Marfan syndrome เจ็บอกร้าวทะลุหลังทันที CTA พบ type A dissection → ผ่าตัด aorta ฉุกเฉิน โดยผ่าคลอดก่อนในห้องผ่าตัดเดียวกันเมื่อทารกอยู่รอดได้ ไม่รอให้คลอดเองแล้วค่อยผ่า"))
k='MDCU77|RoA|CVT 7'
P[k]=dict(variants=V(k,"ผู้ป่วยมะเร็งปอดชนิด squamous ก้อนใหญ่ลุกเข้า mediastinum ผ่าตัดไม่ได้ ไอเป็นเลือดมาก → ห้ามเลือดแบบประคับประคอง: BAE หรือ bronchoscopic therapy (argon plasma coagulation, stent) ร่วมกับฉายรังสีห้ามเลือด ไม่ใช่ lobectomy"))
k='MDCU77|RoA|CVT 8'
P[k]=dict(variants=V(k,"หญิง 30 ปีเคยเป็นไข้รูมาติก ฟังได้ opening snap ตามด้วย diastolic rumble ที่ apex ร่วมกับ AF → rheumatic mitral stenosis: ถ้าลิ้นเหมาะสม (ไม่มี MR มาก ไม่มีลิ่มเลือดใน LA) ทำ percutaneous mitral balloon commissurotomy"))
k='MDCU77|RoA|CVT 9'
P[k]=dict(variants=V(k,"ผู้ป่วยไตวายเรื้อรังที่ยังไม่ได้ฟอกเลือด BUN สูงมาก ฟังได้ friction rub ต่อมาความดันตก JVP สูง pulsus paradoxus → uremic pericarditis ร่วม tamponade: เจาะระบายน้ำรอบหัวใจ แล้วเริ่มฟอกเลือดอย่างเข้มข้น"))
k='MDCU77|RoA|CVT 10'
P[k]=dict(variants=V(k,"รถชน ซี่โครงหักหลายซี่ติดกัน ผนังอกข้างหนึ่งยุบเข้าขณะหายใจเข้า (paradoxical movement) SpO<sub>2</sub> ต่ำ → flail chest + pulmonary contusion: ออกซิเจน ระงับปวดเต็มที่ (epidural/nerve block) ไม่ให้สารน้ำเกิน ใส่ท่อช่วยหายใจเมื่อหายใจล้มเหลว"))
k='MDCU77|RoA|Ped 1'
P[k]=dict(variants=V(k,"เด็ก 10 ขวบมีรูเล็กที่ขอบหน้ากล้ามเนื้อ SCM ส่วนล่าง มีน้ำใสซึมเป็นระยะ → 2nd branchial cleft sinus: ผ่าตัดตัด tract ทั้งเส้น (step-ladder incision) ซึ่งวิ่งระหว่าง internal กับ external carotid ไปเปิดที่ tonsillar fossa"))
k='MDCU77|RoA|Ped 2'
P[k]=dict(
interp="ภาพใบหน้าเด็ก (ไฟล์คีย์อ่านว่า <b>Treacher Collins syndrome</b>) — ผิดรูปสองข้างสมมาตร ตาเฉียงลง หนังตาล่างแหว่ง โหนกแก้มแบน คางเล็ก ใบหูผิดรูป = ความผิดปกติของ pharyngeal arch ที่ 1–2 → ถามว่าปัญหาร่วมใดที่ต้อง<b>คัดกรองตั้งแต่วัยทารก</b> ซึ่งคือการได้ยิน (conductive hearing loss) เพราะถ้าไม่แก้จะทำให้พัฒนาการพูดและภาษาช้า ทั้งที่สติปัญญาปกติ",
variants=V(k,"พ่อมีหน้าตาแบบ Treacher Collins เล็กน้อย ลูกคนแรกเป็นชัดเจน ถามโอกาสที่ลูกคนถัดไปจะเป็น → TCOF1 ถ่ายทอดแบบ autosomal dominant: โอกาส 50% ทุกครรภ์ และความรุนแรงต่างกันมากแม้ในครอบครัวเดียวกัน"))
k='MDCU77|RoA|Ped 3'
P[k]=dict(
interp="ทารกอายุ 3 วัน ภาพเป็นปากแหว่งที่ต่อเนื่องเข้าไปถึงเพดาน (<b>cleft lip and palate</b>) → ถามว่า<b>การผ่าตัดครั้งแรก</b>คืออะไรและทำเมื่ออายุเท่าไร · ต้องรู้ลำดับเวลาการรักษาแบบทีม: เย็บริมฝีปาก (cheiloplasty) ราว 3 เดือน → เย็บเพดาน 9–18 เดือน → alveolar bone graft 7–11 ปี",
variants=V(k,"หลังเย็บเพดาน 3 สัปดาห์ มีน้ำและอาหารไหลออกจมูก ตรวจพบรูที่รอยต่อเพดานแข็งกับเพดานอ่อน → oronasal (palatal) fistula: ถ้ามีอาการผ่าตัดปิดซ้ำเมื่อเนื้อเยื่อหายอักเสบ ระหว่างรอใช้ obturator ปิดชั่วคราว"))
k='MDCU77|RoA|Ped 4'
P[k]=dict(variants=V(k,"ทารกใส่สาย NG ไม่ลง (ภาพเห็นสายขดอยู่ในคอ) ร่วมกับ double bubble ที่โป่งตึงมาก → esophageal atresia + distal TEF ร่วมกับ duodenal atresia: เป็น closed loop เสี่ยงกระเพาะแตก ต้องผ่าตัดด่วน (gastrostomy ระบาย/ผูก fistula) และตรวจหา VACTERL"))
k='MDCU77|RoA|Ped 5'
P[k]=dict(variants=V(k,"เด็กหลัง pull-through 6 เดือนยังท้องผูกและท้องอืดเป็นพัก ๆ biopsy ลำไส้ส่วนที่ดึงลงมาพบ ganglion cell ปกติ ไม่มีการตีบที่รอยต่อ → obstructive symptoms จาก internal anal sphincter achalasia: ฉีด botulinum toxin ที่ internal sphincter"))
k='MDCU77|RoA|Ped 6'
P[k]=dict(variants=V(k,"ผ่าตัดทารก ileal atresia พบลำไส้ส่วนต้นโป่งมากเทียบกับส่วนปลายที่เล็ก → ตัดส่วนต้นที่โป่งมากหรือทำ tapering แล้วต่อแบบ end-to-oblique และฉีดน้ำเกลือเข้าลำไส้ส่วนปลายหา atresia ตำแหน่งอื่นก่อนต่อ"))
k='MDCU77|RoA|Ped 7'
P[k]=dict(
trap="เห็นทารกขาดน้ำแล้วตอบ metabolic acidosis หรือคิดว่าอาเจียนทำให้ K สูง — HPS อาเจียนแต่น้ำย่อยกระเพาะ (HCl) จึงเป็น alkalosis ที่ Cl ต่ำ ส่วน K ต่ำเพราะไตขับทิ้งภายใต้ aldosterone · acidosis เกิดเฉพาะระยะท้ายที่ช็อกแล้ว · ทารกอาเจียนที่ Na ต่ำ K สูง ให้คิดถึง salt-wasting CAH แทน",
variants=V(k,"ทารก 3 สัปดาห์อาเจียนพุ่ง US กล้ามเนื้อ pylorus หนา 2 mm ยาว 12 mm → ยังไม่เข้าเกณฑ์ HPS: ติดตามอาการและทำ US ซ้ำใน 2–3 วัน ยังไม่ผ่าตัด (อาจเป็น pylorospasm หรือ reflux)"))
k='MDCU77|RoA|Ped 8'
P[k]=dict(variants=V(k,"เด็ก 12 ปีอาเจียนน้ำดี น้ำหนักลดเร็วหลังป่วยหนัก CT เห็น duodenum ส่วนที่สามถูก SMA กดทับ มุม aortomesenteric แคบ (&lt; 25°) → SMA syndrome: ให้อาหารทางสายผ่านจุดกดหรือ TPN เพิ่มน้ำหนัก ถ้าไม่ดีขึ้นทำ duodenojejunostomy"))
k='MDCU77|RoA|Ped 9'
P[k]=dict(
trap="ข้อ NOT ทำให้สับสน: คิดว่าเลือดออกเรื้อรังจาก Meckel ทำให้ซีดแล้วเด็กต้องโตช้า — เลือดออกเป็นครั้ง ๆ ทำให้ขาดธาตุเหล็กได้ แต่ลำไส้ส่วนใหญ่ยังดูดซึมปกติ น้ำหนักจึงขึ้นได้ · วิธีแยกคือไล่ 4 กลุ่มอาการของ remnant: เลือดออก · ลำไส้อุดตัน · ปวด/อักเสบ · สิ่งไหลออกสะดือ — failure to thrive ไม่อยู่ในกลุ่มใดเลย",
opinion="เห็นด้วยกับคีย์ C ความมั่นใจสูง — ไฟล์ Key 77A เขียนสั้น ๆ ว่า \"อันอื่นได้หมด\" ตรงกับตำรา (Holcomb and Ashcraft's Pediatric Surgery 7th ed. 2020) ที่จัดอาการของ vitelline duct remnant เป็นเลือดออก ลำไส้อุดตัน การอักเสบ และอาการที่สะดือ โดยไม่มี failure to thrive · ช้อยครบ 5 ตัวตามต้นฉบับ ไม่มีการเติม",
variants=V(k,"ทารกมีน้ำใสไหลจากสะดือ ออกมากขึ้นเวลาร้องหรือเบ่ง ตรวจน้ำพบ creatinine สูงแบบปัสสาวะ → patent urachus (ไม่ใช่ vitelline duct): US/VCUG หา bladder outlet obstruction ร่วม แล้วผ่าตัดตัด urachus ออก"))
k='MDCU77|RoA|Ped 10'
P[k]=dict(variants=V(k,"ทารก gastroschisis ที่ลำไส้บางส่วนตายดำและทะลุตั้งแต่แรกคลอด (complex gastroschisis) → ตัดลำไส้ที่ตาย ระวัง short bowel syndrome ต้อง TPN นาน และอัตราตาย/ภาวะแทรกซ้อนสูงกว่า simple gastroschisis ชัดเจน"))
k='MDCU77|RoA|Ped 11'
P[k]=dict(variants=V(k,"ทารก cholestasis หน้าผากกว้าง คางแหลม ฟังได้ murmur จาก peripheral pulmonary stenosis ภาพรังสีมี butterfly vertebra → Alagille syndrome (JAG1) ท่อน้ำดีในตับน้อย: ไม่ใช่ biliary atresia และไม่ทำ Kasai"))
k='MDCU77|RoA|Ped 12'
P[k]=dict(variants=V(k,"หลังตัดถุง choledochal cyst + hepaticojejunostomy 5 ปี เด็กมีไข้ ตัวเหลืองเป็นพัก ๆ MRCP เห็นรอยต่อตีบและนิ่วในท่อน้ำดีในตับ → anastomotic stricture: ขยายด้วยบอลลูนผ่านผิวหนัง (PTBD) หรือผ่าตัดต่อใหม่ และติดตามระยะยาว"))
k='MDCU77|RoA|Ped 13'
P[k]=dict(variants=V(k,"ทารก 6 เดือนหลังได้วัคซีนโรต้าเข็มแรก 5 วัน ร้องเป็นพัก ๆ ซึมลง ถ่ายมูกปนเลือด → intussusception (ความเสี่ยงเพิ่มเล็กน้อยในสัปดาห์แรกหลังวัคซีนโรต้าเข็มแรก): US ยืนยันแล้วทำ enema reduction"))
k='MDCU77|RoB|Uro 1'
P[k]=dict(
trap="ตอบ calcium oxalate monohydrate เพราะเป็นนิ่วที่พบบ่อยที่สุดโดยรวม (ราว 70–80% ของนิ่วทั้งหมด) — แต่คำถามถามเฉพาะ staghorn ซึ่งโตเร็วจนเต็ม pelvicalyceal system ได้ต้องอาศัยปัสสาวะด่างจากเชื้อสร้าง urease = struvite · cystine และ uric acid เป็น staghorn ได้แต่พบน้อยกว่า · คำใบ้: หญิง ติดเชื้อซ้ำ สายสวนค้าง ปัสสาวะ pH > 7",
variants=V(k,"หญิง 45 ปีเป็นนิ่วซ้ำ ผลวิเคราะห์นิ่วเป็น calcium oxalate ปัสสาวะ 24 ชม. พบ citrate ต่ำ → potassium citrate + ดื่มน้ำให้ปัสสาวะ ≥ 2.5 L/วัน ลดเกลือและโปรตีนจากสัตว์ (ไม่ต้องงดแคลเซียมในอาหาร)"))
k='MDCU77|RoB|Uro 2'
P[k]=dict(
opinion="เห็นด้วยกับคีย์ D ความมั่นใจสูง — ไฟล์ Key 77B เขียนว่า \"RCC ไม่ไปในท่อไต แต่ชอบไป venous มากสุด\" ตรงกับธรรมชาติของ RCC ที่แพร่ทางเลือดและเกิด tumor thrombus ใน renal vein/IVC ส่วนการลามตามเยื่อบุท่อไตลงกระเพาะปัสสาวะเป็นของ urothelial carcinoma · การกินเข้า pelvicalyceal system เฉพาะที่เกิดได้ (T3a ตาม AJCC 8) แต่ไม่ใช่ทางแพร่กระจาย · ช้อยครบ 5 ตัวตามต้นฉบับ",
variants=V(k,"หญิงที่เป็น tuberous sclerosis CT พบก้อนที่ไต 5 cm มีไขมัน (ค่า HU ติดลบ) → angiomyolipoma ไม่ใช่ RCC: ก้อน ≥ 4 cm เสี่ยงเลือดออก ใช้ selective embolization หรือ mTOR inhibitor (everolimus)"))
k='MDCU77|RoB|Uro 3'
P[k]=dict(variants=V(k,"ชายรักษาหนองในด้วย ceftriaxone แล้ว 2 สัปดาห์ยังมีหนองใสเล็กน้อย NAAT gonorrhea ลบ → persistent urethritis: นึกถึง Mycoplasma genitalium หรือ Trichomonas — ตรวจ NAAT เฉพาะ แล้วให้ doxycycline 7 วันตามด้วย moxifloxacin 7 วัน (CDC 2021)"))
k='MDCU77|RoB|Uro 4'
P[k]=dict(variants=V(k,"ทำไมนิ่วในกระเพาะปัสสาวะของชายสูงอายุที่มี BPH จึงเป็นนิ่วที่เกิดในกระเพาะเอง (มักเป็น uric acid) ไม่ใช่นิ่วจากไตตกลงมา → ปัสสาวะค้างจาก bladder outlet obstruction ทำให้ผลึกตกตะกอนและโต จึงต้องแก้การอุดกั้นพร้อมกัน"))
k='MDCU77|RoB|Uro 5'
P[k]=dict(variants=V(k,"ระหว่างตัดมดลูกผ่านกล้องใช้เครื่องจี้ไฟฟ้าใกล้ท่อไต สงสัย thermal injury แต่ท่อไตยังต่อเนื่อง ไม่ขาด → ใส่ ureteral stent (JJ) ค้างราว 6 สัปดาห์ แล้วติดตามภาพหา ureteral stricture ที่เกิดตามมาได้"))
out='/home/claude/ac-mdcu/parts/explain/data_subspe/zz77_03.json'
json.dump(P,open(out,'w'),ensure_ascii=False,indent=1)
print(len(P))

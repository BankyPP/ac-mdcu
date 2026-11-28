import json
A=json.load(open('/home/claude/h/all.json'))
V=lambda k,s:(A[k].get('variants') or [])[:3]+[s]
P={}
k='MDCU76|RoA|41'
P[k]=dict(summary=A[k]['summary']+[
"ตำแหน่งฝีตามช่องรอบทวาร: perianal พบบ่อยสุด (ราว 60%) รองลงมา ischiorectal (ราว 20%) แล้ว intersphincteric และ supralevator · ฝีลึกอาจไม่เห็นก้อนภายนอก ต้อง DRE/EUA หรือ CT/MRI ช่วย",
"ไม่จำเป็นต้องเพาะเชื้อหนองในฝีทั่วไปเพราะไม่เปลี่ยนการรักษา · ถ้าเพาะได้<b>เชื้อลำไส้</b> (E. coli, Bacteroides) ชี้ว่ามาจาก anal gland และสัมพันธ์กับการเกิด fistula มากกว่า ส่วนเชื้อผิวหนัง (S. aureus) มักเป็นฝีผิวหนังธรรมดา",
"ภาวะคุกคามชีวิตที่ต้องไม่พลาด: <b>Fournier gangrene</b> (necrotizing infection แบบ polymicrobial เช่นกัน) — ปวดเกินสัดส่วน ผิวคล้ำดำ crepitus ไข้สูง โดยเฉพาะในเบาหวาน → radical debridement ด่วน + broad-spectrum antibiotics"],
variants=V(k,"หญิง 25 ปี ฝีรอบทวารร่วมรูหนองหลายรู ท้องเสียเรื้อรังและน้ำหนักลด → perianal Crohn disease → ระบายฝี + ใส่ loose seton, MRI pelvis และ colonoscopy แล้วให้ biologic (anti-TNF)"))
k='MDCU76|RoA|47'
P[k]=dict(variants=V(k,"ชาย 30 ปี colonoscopy พบ adenoma ราว 40 ก้อน พ่อแม่ไม่มีโรค แต่พี่ชายเป็นแบบเดียวกัน ตรวจ APC ไม่พบ mutation → นึกถึง MUTYH-associated polyposis (autosomal recessive — พี่น้องเสี่ยง พ่อแม่มักเป็นพาหะไม่มีอาการ) → ตรวจ biallelic MUTYH และส่องกล้องพี่น้อง"))
k='MDCU76|RoA|71'
P[k]=dict(variants=V(k,"ชาย 50 ปีแข็งแรง CT เป็น uncomplicated diverticulitis (ผนังหนา fat stranding ไม่มีฝีหรือลมนอกลำไส้) กินได้ ไข้ไม่สูง → รักษาแบบผู้ป่วยนอก ยาปฏิชีวนะใช้แบบเลือกราย (ASCRS 2020 อิงการศึกษา AVOD/DIABOLO) + ยาแก้ปวด อาหารอ่อน นัดติดตาม"))
k='MDCU76|RoD|15@p4#1'
P[k]=dict(variants=V(k,"ชาย 60 ปี rectal cancer ระหว่างผ่าตัด TME พบก้อนยึดติดท่อไตซ้ายที่ไม่เห็นใน MRI → ตัดท่อไตส่วนนั้นออกพร้อมก้อนแบบ en bloc แล้วต่อท่อไตเข้ากระเพาะปัสสาวะใหม่ (ureteroneocystostomy) ไม่เลาะก้อนออกจากท่อไต"))
k='MDCU76|RoD|45@p10'
P[k]=dict(interp="หญิงสูงอายุ ปวด <b>left iliac fossa (LLQ)</b> ร่วมไข้ต่ำและกดเจ็บเฉพาะที่ ไม่มีอาการทางปัสสาวะหรือนรีเวชเด่น → ภาพคลาสสิกของ <b>sigmoid diverticulitis</b> ที่ได้ฉายาว่า \"left-sided appendicitis\" ของผู้สูงอายุ · คำถามจริงคือเลือกการวินิจฉัยที่เป็นไปได้มากที่สุดจากอายุ + ตำแหน่งปวด + ลักษณะการอักเสบเฉพาะที่ แล้วตัดโรคที่ตำแหน่ง วัย หรือลักษณะอาการไม่เข้า",
variants=V(k,"ชายเอเชียอายุ 45 ปี ปวด RLQ ไข้ต่ำ กดเจ็บเฉพาะที่ CT พบ appendix ปกติ แต่ผนัง cecum/ascending colon หนาร่วม diverticulum อักเสบ → right-sided diverticulitis (พบบ่อยในชาวเอเชีย มักเป็น true diverticulum) → ยาปฏิชีวนะแบบเดียวกับด้านซ้าย ไม่ต้องผ่าตัด"))
k='MDCU76|RoD|54@p11#1'
P[k]=dict(variants=V(k,"หลัง I&D ฝีรอบทวาร 2 เดือน ยังมีหนองซึมจากรูผิวหนังด้านหลังห่างขอบทวาร 2 cm → fistula-in-ano · ตาม Goodsall rule รูด้านหลังมักโค้งไปเปิดที่ posterior midline crypt → EUA หา internal opening แล้ว fistulotomy ถ้าเป็น low fistula หรือ seton ถ้ากินหูรูดมาก"))
k='MDCU76|RoA|1'
P[k]=dict(variants=V(k,"ชาย 65 ปีสูบบุหรี่ ปัสสาวะเป็นเลือดไม่ปวด cystoscopy ไม่เห็นก้อน แต่ urine cytology บวก high grade → หา CIS ในกระเพาะปัสสาวะ (random biopsy/blue-light cystoscopy) ร่วมตรวจ upper tract (CT urogram ± ureteroscopy) และ prostatic urethra"))
k='MDCU76|RoA|2'
P[k]=dict(variants=V(k,"ชายสูงอายุมีแผ่นแดงกำมะหยี่ขอบชัดที่ glans นานหลายเดือน ทายาเชื้อราไม่หาย → erythroplasia of Queyrat (PeIN/carcinoma in situ) → biopsy ยืนยัน แล้วรักษาแบบเก็บอวัยวะ เช่น ทา 5-FU/imiquimod, laser หรือ glans resurfacing"))
k='MDCU76|RoA|3'
P[k]=dict(variants=V(k,"เด็ก 8 ขวบหกล้มถลอกที่ศอก 2 วันต่อมาแผลแดงร้อนลาม มีหนองและสะเก็ดสีเหลืองน้ำผึ้ง ไข้ต่ำ → แผลติดเชื้อ (S. aureus, Streptococcus pyogenes) → ล้างแผล + ยาปฏิชีวนะชนิดกินคลุม staph/strep เช่น dicloxacillin หรือ cephalexin"))
k='MDCU76|RoA|4'
P[k]=dict(wrong=dict(A[k]['wrong'],D="CT abdomen with contrast เห็น malrotation/volvulus ได้ (whirlpool sign, SMV อยู่ซ้ายของ SMA) แต่ในทารกที่ Doppler ยืนยัน SMA–SMV กลับข้างแล้ว CT ไม่เพิ่มข้อมูล ทำให้ล่าช้าและได้รังสี · จะถูกถ้าเป็นเด็กโตหรือผู้ใหญ่ที่ปวดท้องเรื้อรังเป็นพัก ๆ สงสัย malrotation และ UGI/US ยังไม่ชัด"),
variants=V(k,"ทารก 5 วัน อาเจียนน้ำดีร่วมช็อก ท้องตึงผนังท้องแดงช้ำ ถ่ายเป็นเลือดคล้ำ → สงสัย midgut volvulus ที่ลำไส้เริ่มตาย → resuscitate พร้อมนำเข้าห้องผ่าตัดทันที (Ladd procedure) โดยไม่รอ imaging เพิ่ม"))
k='MDCU76|RoA|5'
P[k]=dict(variants=V(k,"ชาย 50 ปีติดสุรา ฟันผุมาก สำลักขณะเมา เกิด pneumonia ที่ปอดขวากลีบล่างส่วนหลังแล้วเป็น empyema หนองกลิ่นเหม็น → เชื้อ anaerobe (Bacteroides, Peptostreptococcus, Fusobacterium) ร่วม Streptococcus anginosus group → ระบาย + ยาคลุม anaerobe"))
k='MDCU76|RoA|6'
P[k]=dict(variants=V(k,"ผู้ป่วย MG เพิ่ม pyridostigmine เองหลายเท่า มีน้ำลายมาก ปวดท้องบิด ท้องเสีย fasciculation และอ่อนแรงมากขึ้น → cholinergic crisis → หยุดยา anticholinesterase ดูแลทางเดินหายใจ ให้ atropine คุมอาการ muscarinic"))
k='MDCU76|RoA|7'
P[k]=dict(variants=V(k,"เด็ก 4 ขวบคอเอียงเฉียบพลันหลังเจ็บคอติดเชื้อ ไม่มีก้อนใน SCM หมุนคอแล้วปวด → Grisel syndrome (atlantoaxial rotatory subluxation จากการอักเสบรอบคอ) → CT C-spine + รักษาการติดเชื้อ ใส่ collar หรือ traction"))
k='MDCU76|RoA|8'
P[k]=dict(interp="ชายมี LUTS รุนแรง (IPSS 22 = severe ช่วง 20–35) และ <b>PSA 8 ng/mL</b> (เกิน 4) → ต้องประเมินว่ามี<b>มะเร็งต่อมลูกหมาก</b>หรือไม่ก่อนรักษาแบบ BPH · คำถามจริงคือ investigation ถัดไปเมื่อ PSA สูง — แนวทางปัจจุบัน (EAU/AUA) ทำ <b>pre-biopsy mpMRI</b> เพื่อตัดสินใจว่าควร biopsy หรือไม่และเล็งตำแหน่ง ขณะที่คีย์ในไฟล์ตอบ TRUS biopsy ตามแนวทางเดิม",
variants=V(k,"ชาย 75 ปี PSA 60 ng/mL ปวดหลังและขาอ่อนแรงสองข้างที่เพิ่งเกิด → สงสัย metastatic prostate cancer กดไขสันหลัง → dexamethasone + MRI whole spine ด่วน เริ่ม ADT ทันที แล้วพิจารณา RT/ผ่าตัด decompression"))
k='MDCU76|RoA|9'
P[k]=dict(variants=V(k,"หลังตัดมะเร็งลำไส้ใหญ่ 2 ปี CEA สูงขึ้นต่อเนื่องแต่ CT chest/abdomen ไม่พบรอยโรค → PET-CT หาตำแหน่งกลับเป็นซ้ำ (± colonoscopy ดูรอยต่อ) ก่อนตัดสินใจรักษา"))
k='MDCU76|RoA|10'
P[k]=dict(variants=V(k,"หญิงคลอดทางช่องคลอดหลายครั้ง มีกลั้นลมไม่ค่อยอยู่เดิม เป็น chronic fissure ทายาไม่หาย → เลี่ยง LIS เพราะเสี่ยง incontinence เพิ่ม เลือก botulinum toxin หรือ fissurectomy ± anal advancement flap เพื่อเก็บหูรูด"))
k='MDCU76|RoA|11'
P[k]=dict(variants=V(k,"หญิงหลัง TAH วันที่ 2 ปวดสีข้างซ้าย ไข้ ปัสสาวะน้อยลง creatinine สูงขึ้น US พบ hydronephrosis → สงสัยผูกหรือบาดเจ็บ ureter → CT urogram/retrograde pyelogram แล้วใส่ ureteral stent หรือ percutaneous nephrostomy"))
k='MDCU76|RoA|12'
P[k]=dict(opinion="เห็นด้วยกับคีย์ A ความมั่นใจสูง — telangiectasia ที่ rectal mucosa ร่วมเลือดออกในชายสูงอายุคือภาพของ <b>chronic radiation proctitis</b> และรังสีรักษามะเร็งต่อมลูกหมาก (brachytherapy/EBRT) เป็นสาเหตุพบบ่อยสุดในผู้ชาย ลายมือในคีย์เขียน keyword radiation proctitis และ fellow colorectal ยืนยัน · HHT มี telangiectasia เช่นกันแต่กระจายหลายอวัยวะ มี epistaxis ซ้ำและประวัติครอบครัว · แนวทางปัจจุบัน (ASCRS Clinical Practice Guideline for chronic radiation proctitis, 2018) ยังใช้ endoscopic therapy เช่น APC และ topical formalin เป็นหลักสำหรับเลือดออก",
variants=V(k,"ชายหลังฉายรังสีต่อมลูกหมาก 18 เดือน ปัสสาวะมีลมและเศษอุจจาระปน → rectourethral/rectovesical fistula จากรังสี → diverting colostomy ก่อน แล้วผ่าตัดซ่อมโดยใช้ flap เนื้อดีที่ไม่โดนรังสี เช่น gracilis interposition"))
k='MDCU76|RoA|13'
P[k]=dict(trap="ช้อย B (lobectomy ฉุกเฉิน) และ C (เจาะระบาย abscess) ดึงคนที่คิดว่าต้องกำจัดต้นเหตุทันที แต่ผ่าตัดขณะเลือดท่วมปอดมีอัตราตายสูง และการเจาะระบายไม่หยุดเลือดจาก bronchial artery · อีกกับดักคือจัดท่าผิด — เอาข้างดีลงหรือนอนหงาย ทำให้เลือดไหลท่วมปอดข้างดี · หลักแยก: massive hemoptysis ตายจาก <b>asphyxia</b> มากกว่าเสียเลือด → airway และท่าข้างที่ออกลงก่อนเสมอ แล้วค่อยหาแหล่งและหยุดเลือดด้วย embolization",
variants=V(k,"ผู้ป่วย ICU ไอเป็นเลือดสดปริมาณมากทันทีหลังใส่ Swan-Ganz catheter → pulmonary artery rupture → ดูแล airway ใส่ endobronchial blocker แล้ว pulmonary angiography + embolization ของ pulmonary artery (ไม่ใช่ bronchial artery)"))
json.dump(P,open('/home/claude/ac-mdcu/parts/explain/data_subspe/zz76_01.json','w'),ensure_ascii=False,indent=1)
print(len(P))

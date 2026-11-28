import json
A=json.load(open('/home/claude/h/all.json'))
def V(k,*new): return list(A[k]['variants'])+list(new)
def S(k): return list(A[k]['summary'])
P={}
k='MDCU76|RoC|Neuro 3'
P[k]=dict(
interp="โจทย์บรรยายการตอบสนอง 3 ด้าน: ลืมตาเมื่อถูกกระตุ้นด้วยความเจ็บ, พูดเป็นคำแต่ไม่เข้ากับบริบท (inappropriate words), ชักแขนหนีเมื่อถูกกด (withdrawal) → ต้องแปลงแต่ละด้านเป็นคะแนน E-V-M ตาม Glasgow Coma Scale แล้วรวม เพื่อบอกระดับความรุนแรงของสมองบาดเจ็บ",
why="GCS ให้คะแนนการตอบสนองที่ดีที่สุดของแต่ละด้านแยกกันแล้วรวม (3–15): <b>Eye</b> 4 ลืมเอง · 3 ลืมเมื่อเรียก · 2 ลืมเมื่อถูกกด · 1 ไม่ลืม · <b>Verbal</b> 5 oriented · 4 confused · 3 words (เป็นคำแต่ไม่เข้าเรื่อง) · 2 sounds (เสียงไม่เป็นคำ) · 1 ไม่มีเสียง · <b>Motor</b> 6 obeys · 5 localizes · 4 normal flexion/withdrawal · 3 abnormal flexion (decorticate) · 2 extension (decerebrate) · 1 ไม่ขยับ · ลืมตาเมื่อเจ็บ = <b>E2</b> · inappropriate words = <b>V3</b> · withdraws from pain = <b>M4</b> → <b>E2V3M4 = 9</b> = moderate TBI (9–12) · การแยก withdrawal กับ abnormal flexion ใช้แรงกดที่ปลายเล็บ ส่วน localization ดูจากการกด trapezius/supraorbital · ถ้าส่งเพียงเสียงอืออา (incomprehensible sounds) จะเป็น V2 → รวม 8 = severe ที่ต้องพิจารณาใส่ท่อช่วยหายใจ · ตรงคีย์ Key 76C กากบาท d พร้อมลายมือแดง <b>\"E2 V3 M4\"</b>",
wrong=dict(
A="GCS 3 = คะแนนต่ำสุดที่เป็นไปได้ (E1 V1 M1) ไม่ลืมตา ไม่ออกเสียง ไม่ขยับต่อแรงกดใด ๆ ไม่มีคะแนนศูนย์ — แต่ในโจทย์ยังลืมตา พูด และหนีเจ็บได้ · จะถูกถ้าเป็นชายหลังรถชนที่ไม่ลืมตา ไม่มีเสียง แขนขาอ่อนปวกเมื่อกด supraorbital (ต้องแยกจากผลยาระงับประสาท/ยาหย่อนกล้ามเนื้อก่อนแปลผล)",
E="GCS 12 (เช่น E3 V4 M5) สูงกว่าความจริง 3 แต้ม — ต้องลืมตาเมื่อเรียก พูดเป็นประโยคแต่สับสน และยกมือมาที่จุดถูกกด ซึ่งดีกว่าที่บรรยายไว้ทุกด้าน · จะถูกถ้าเป็นผู้ป่วยตกบันไดที่ลืมตาเมื่อเรียกชื่อ ตอบผิดวันเวลาสถานที่ และยกมือมาปัดมือผู้ตรวจที่กด trapezius"),
summary=[
"แกน: GCS รวมคะแนนการตอบสนองที่ดีที่สุดของ Eye (1–4), Verbal (1–5), Motor (1–6) = 3–15 · รายงานแยกส่วนเสมอ เช่น E2V3M4 เพราะบอกข้อมูลมากกว่าผลรวม",
"Eye: 4 spontaneous · 3 to sound (เรียก) · 2 to pressure (กดเจ็บ) · 1 none · ตาบวมปิดจนลืมไม่ได้ให้บันทึก NT (not testable) ไม่ใช่ E1",
"Verbal: 5 oriented · 4 confused (เป็นประโยคแต่สับสน) · 3 words (เป็นคำแต่ไม่เข้าเรื่อง) · 2 sounds (อืออา ไม่เป็นคำ) · 1 none · ใส่ท่อช่วยหายใจบันทึก VT",
"Motor: 6 obeys · 5 localizes (ยกมือข้ามแนวกลางหรือเหนือไหปลาร้ามาที่จุดกด) · 4 normal flexion/withdrawal · 3 abnormal flexion (decorticate) · 2 extension (decerebrate) · 1 none — motor ทำนายผลได้ดีที่สุด",
"ความรุนแรงของ TBI: mild 13–15 · moderate 9–12 · severe 3–8 · GCS ≤ 8 → ใส่ท่อช่วยหายใจปกป้องทางเดินหายใจ และพิจารณาวัด ICP (Brain Trauma Foundation)",
"วิธีกระตุ้น: peripheral (กดเล็บ) ใช้ดูการงอแขน · central (trapezius pinch, supraorbital notch) ใช้ดู localization · ซ้ายขวาไม่เท่ากันใช้ข้างที่ดีกว่า · คะแนนลดลง ≥ 2 แต้มเป็นสัญญาณแย่ลงที่ต้องทำ CT ซ้ำ"],
variants=V(k,"ผู้ป่วยหลังอุบัติเหตุ GCS ลดจาก 13 เป็น 9 ภายใน 1 ชม. รูม่านตาขวาโตไม่ตอบสนองต่อแสง → สงสัย uncal herniation จาก hematoma ที่ขยาย → ใส่ท่อ ให้ hyperosmolar therapy และ CT ด่วนเพื่อผ่าตัด"))

k='MDCU76|RoC|Neuro 4'
P[k]=dict(
trap="สับสนช่วงเวลาที่ต่างกันใน SAH: xanthochromia เริ่มตรวจพบได้แน่นอนเมื่อ ≥ 12 ชม. หลังเริ่มปวด (จึงห้าม LP เร็วเกินไป), คงอยู่ครบทุกรายราว 2 สัปดาห์ (คำตอบ), ส่วน 72 ชม.แรกเป็นช่วง rebleeding และวันที่ 4–14 เป็นช่วง vasospasm — ตัวเลขเหล่านี้มักจำปนกัน · จำว่า \"เริ่ม 12 ชั่วโมง อยู่ 2 สัปดาห์\"",
wrong=dict(
B="7 วัน xanthochromia ยังพบได้ทุกรายและยังเข้มอยู่ จึงไม่ใช่ระยะที่คงอยู่ทั้งหมด (อยู่ต่อถึงราว 2 สัปดาห์) · จะถูกถ้าเป็นผู้ป่วย aneurysmal SAH วันที่ 7 ที่ซึมลงและแขนอ่อนแรงใหม่ — ตรงช่วง peak ของ cerebral vasospasm/delayed cerebral ischemia (วันที่ 7–10)",
E="60 วันเป็นช่วงที่ bilirubin ใน CSF ถูกกำจัดหมดไปนานแล้ว (ส่วนใหญ่หายภายใน 4–6 สัปดาห์) · ไม่มีสถานการณ์ใดที่ SAH ครั้งเดียวยังให้ xanthochromia ได้ถึง 2 เดือน — ถ้าพบ CSF สีเหลืองช่วงนั้นต้องนึกถึงสาเหตุอื่น เช่น CSF protein สูงมาก (&gt; 150 mg/dL) หรือ jaundice รุนแรง"),
summary=[
"แกน: xanthochromia = CSF สีเหลืองจาก oxyhemoglobin และ bilirubin ที่ได้จาก RBC แตกใน subarachnoid space · พบแน่นอนตั้งแต่ ≥ 12 ชม. ถึงราว 2 สัปดาห์ แล้วลดลง (ราว 70% ที่ 3 สัปดาห์ ราว 40% ที่ 4 สัปดาห์)",
"Bilirubin ต้องอาศัยเอนไซม์ heme oxygenase ในเซลล์เยื่อหุ้มสมองจึงใช้เวลาหลายชั่วโมง — bilirubin บ่ง SAH จริง ส่วน oxyhemoglobin อาจเกิดในหลอดทดลองจาก traumatic tap ที่ตั้งทิ้งไว้นาน",
"Traumatic tap vs SAH: traumatic tap RBC ลดลงจาก tube 1 → 4 และน้ำใสหลังปั่น · SAH RBC สูงคงที่ทุกหลอด น้ำส่วนบนหลังปั่นเหลือง · ต้องปั่นแยกทันทีและส่ง spectrophotometry ซึ่งไวกว่าดูด้วยตา",
"CT non-contrast ภายใน 6 ชม. หลังเริ่มปวดด้วยเครื่องรุ่นใหม่ อ่านโดยรังสีแพทย์ sensitivity เกือบ 100% · หลังจากนั้น sensitivity ลดลงเรื่อย ๆ ตามวันที่ผ่านไป จึงต้องอาศัย LP หรือ CTA",
"หลังยืนยัน SAH: CTA (หรือ DSA) หา aneurysm → secure ด้วย coil/clip โดยเร็ว (ภายใน 24 ชม. ถ้าทำได้) + nimodipine 60 mg ทุก 4 ชม. 21 วัน · คุมความดันก่อนรักษา aneurysm เพื่อลด rebleeding",
"ภาวะแทรกซ้อน: rebleeding (สูงสุดใน 24–72 ชม.แรก), vasospasm/DCI (วันที่ 4–14 peak 7–10), hydrocephalus, hyponatremia (SIADH/cerebral salt wasting), seizure, neurogenic stress cardiomyopathy"],
opinion="เห็นด้วยกับคีย์ C (ไฟล์ Key 76C กากบาท c) ความมั่นใจสูง — ข้อมูลคลาสสิก (Vermeulen 1989) พบ xanthochromia ทุกรายจนถึง 2 สัปดาห์ จึงเป็นระยะคงอยู่ที่ตำราใช้ · AHA/ASA 2023 ยังใช้ LP หา xanthochromia เมื่อ CT ไม่ชัดและเลยช่วง 6 ชม. ไปแล้ว ไม่ต่างจากคีย์",
variants=V(k,"ผู้ป่วยปวดศีรษะทันทีรุนแรงเมื่อ 3 ชม.ก่อน CT ปกติ แพทย์อยากเจาะ LP ทันที → ควรรอให้ครบ ≥ 12 ชม.หลังเริ่มปวด (หรือทำ CTA แทน) เพราะเจาะเร็วอาจยังไม่เกิด bilirubin และแยกจาก traumatic tap ไม่ได้"))

k='MDCU76|RoC|Neuro 5'
P[k]=dict(
summary=[
"แกน: ค่า CSF ที่จำเพาะต่อ bacterial meningitis ที่สุดคือ glucose ต่ำมาก (&lt; 40 mg/dL หรือ CSF/serum ratio ≤ 0.4) ร่วม WBC สูงหลักพัน neutrophil เด่น และ protein สูงหลายร้อย",
"ค่าปกติ: opening pressure 10–20 cmH₂O (ท่านอนตะแคง) · WBC 0–5 cells/mm³ ไม่มี neutrophil · protein 15–45 mg/dL · glucose 50–80 mg/dL หรือราว 60% ของ serum (ต้องเจาะ serum glucose พร้อมกัน)",
"Bacterial: OP สูง · WBC 1,000–5,000 (&gt; 80% PMN) · protein 100–500 · glucose &lt; 40 · Gram stain พบเชื้อราว 60–90% · culture ลดลงมากถ้าได้ยาก่อนเจาะ",
"Viral: OP ปกติ/สูงเล็กน้อย · WBC 10–500 lymphocyte (ระยะแรกอาจ PMN เด่น) · protein ปกติ/สูงเล็กน้อย · glucose ปกติ · ยืนยันด้วย PCR (enterovirus, HSV)",
"TB/fungal: lymphocyte เด่น · protein สูงมาก · glucose ต่ำ · Cryptococcus ในผู้ป่วย HIV: OP สูงมาก ทำ CrAg/India ink · TB: basal meningeal enhancement และ hydrocephalus",
"สงสัย bacterial meningitis → hemoculture → dexamethasone + empirical antibiotics (ceftriaxone ± vancomycin, + ampicillin ถ้าอายุ &gt; 50 หรือภูมิต่ำ) ทันที · CT ก่อน LP เมื่อ focal deficit, papilledema, seizure ใหม่, ภูมิต่ำ หรือซึมมาก — ห้ามรอ CT จนเลื่อนยา"],
opinion="เห็นด้วยกับคีย์ A (ไฟล์ Key 76C ติ๊ก a เขียน &lt;40 ที่ glucose, &gt;200 ที่ protein, &gt;1000–2000 ที่ WBC) ความมั่นใจสูง — เป็นช้อยเดียวที่ผิดปกติไปในทิศของแบคทีเรีย ช้อยอื่นปกติหรือต่ำกว่าปกติ · ESCMID 2016 และ IDSA ยังใช้เกณฑ์ CSF ชุดเดียวกัน ไม่ต่างจากคีย์",
variants=V(k,"CSF หลังได้ ceftriaxone มาแล้ว 2 วันจากคลินิก: WBC 800 neutrophil 60% glucose 45 Gram stain ลบ → partially treated bacterial meningitis → ให้ยาต่อครบคอร์สและส่ง PCR/antigen ของเชื้อ"))

k='MDCU76|RoC|Neuro 6'
P[k]=dict(
why="Light–near dissociation คือรูม่านตาไม่หดต่อแสงแต่หดเมื่อมองใกล้ เพราะเส้นทาง pupillary light reflex ผ่าน <b>pretectal nucleus</b> ที่ <b>dorsal midbrain</b> ซึ่งถูกกดได้ง่าย ส่วนเส้นทาง near response มาจาก cortex ลงทางด้านล่างกว่าจึงรอด · ก้อนที่กด dorsal midbrain บ่อยที่สุดคือ <b>pineal region tumor</b> → <b>Parinaud syndrome</b> (upgaze palsy, light–near dissociation, convergence-retraction nystagmus, eyelid retraction) · ก้อนเดียวกันอุด <b>cerebral aqueduct</b> → obstructive hydrocephalus → <b>ปวดศีรษะตอนเช้า</b> อาเจียน papilledema เพราะ ICP สูงขึ้นขณะนอน (CO₂ คั่ง หลอดเลือดสมองขยาย) · กด <b>superior cerebellar peduncle</b>/cerebellum ส่วนบน → ataxia · อาการทั้งสามจึงชี้ตำแหน่งเดียวคือ pineal region · ตรงคีย์ Key 76C กากบาท a ลายมือ <b>\"ICP↑ · ทำให้เกิด Parinaud syndrome และกด Sup. cerebellar peduncle ได้\"</b>",
summary=[
"แกน: light–near dissociation + upgaze palsy = dorsal midbrain (Parinaud) syndrome → นึกถึงก้อนบริเวณ pineal ก่อน โดยเฉพาะเด็กโตถึงผู้ใหญ่ตอนต้นเพศชาย ร่วม hydrocephalus จาก aqueduct ถูกกด",
"Parinaud: upgaze palsy, light–near dissociation, convergence-retraction nystagmus เมื่อพยายามมองขึ้น, eyelid retraction (Collier sign) · ในเด็กที่ hydrocephalus เห็นเป็น setting-sun sign",
"สาเหตุอื่นของ dorsal midbrain syndrome: hydrocephalus/shunt ทำงานผิดปกติ, stroke ของ midbrain, MS · light–near dissociation อื่น: Argyll Robertson pupil (neurosyphilis), Adie tonic pupil, diabetic autonomic neuropathy",
"Pineal region tumor: germ cell tumor (germinoma พบมากสุด, nongerminomatous GCT), pineal parenchymal tumor (pineocytoma, pineoblastoma), glioma, meningioma · germinoma ไวต่อรังสีมาก",
"ตรวจ: MRI brain + whole spine (ดู CSF seeding) · tumor marker AFP และ β-hCG ใน serum และ CSF · CSF cytology — marker สูงชัดวินิจฉัย NGGCT ได้โดยไม่ต้อง biopsy",
"Hydrocephalus จากก้อน → endoscopic third ventriculostomy (ETV) พร้อมเก็บ CSF และ biopsy ในครั้งเดียว · germinoma → radiotherapy ± chemotherapy · NGGCT → chemotherapy + radiotherapy ± ผ่าตัดส่วนที่เหลือ · pineocytoma → ผ่าตัด"],
opinion="เห็นด้วยกับคีย์ A (ไฟล์ Key 76C ลายมือ ICP↑, Parinaud syndrome และกด superior cerebellar peduncle) ความมั่นใจสูง — light–near dissociation เป็นตัวชี้ตำแหน่ง dorsal midbrain ซึ่งช้อยอื่นไม่ทำ · คำว่า \"pinealoma\" เป็นชื่อเดิม WHO CNS5 (2021) แยกเป็น germ cell tumor และ pineal parenchymal tumor แต่ไม่เปลี่ยนคำตอบ",
variants=V(k,"เด็กที่ใส่ VP shunt มาด้วยปวดศีรษะ อาเจียน ตามองลงต่ำแบบ setting-sun มองขึ้นไม่ได้ → shunt malfunction ทำ dorsal midbrain syndrome → CT/shunt series และแก้ shunt ด่วน"))

k='MDCU76|RoC|Neuro 7'
P[k]=dict(
trap="ตอบ CT with contrast เพราะคิดว่าฉีดสีแล้วจะเห็นหลอดเลือดพอ หรือตอบ biopsy เพราะเห็นก้อนมีหินปูน — รอยโรคที่สงสัยหลอดเลือดผิดปกติ การเจาะชิ้นเนื้อเสี่ยงเลือดออกรุนแรง ต้องดูทั้งเนื้อสมองและหลอดเลือดด้วย MRI + MRA ก่อน แล้วยืนยันด้วย DSA · EEG ช่วยเรื่องชนิดชักแต่ไม่บอกว่ารอยโรคคืออะไร",
summary=[
"แกน: ชักครั้งใหม่ในผู้ใหญ่ที่ CT พบรอยโรคมีหินปูนและสงสัยหลอดเลือดผิดปกติ → ต้องการภาพที่แยกชนิดรอยโรคได้ = MRI (+ SWI/GRE) ร่วม MRA ในครั้งเดียว ไม่มีรังสี ไม่ต้องใช้ iodine",
"DDx หินปูนในเนื้อสมองของผู้ใหญ่ที่ชัก: AVM, cavernous malformation, oligodendroglioma (frontal lobe, หินปูนหยาบ), meningioma, ganglioglioma, การติดเชื้อเก่า (neurocysticercosis, TB granuloma, toxoplasma)",
"AVM บน MRI: flow void คดเคี้ยวเป็นกลุ่ม (nidus) มี feeding artery และ draining vein โต ไม่มีเนื้อสมองปกติในก้อน · อาการนำ: เลือดออก (มากสุด) &gt; ชัก &gt; ปวดศีรษะ &gt; focal deficit",
"Cavernous malformation: angiographically occult (DSA ปกติ) · MRI popcorn ไส้หลายสี วงดำ hemosiderin ชัดใน SWI/GRE · อาจมีหลายก้อน (familial CCM)",
"DSA ยังเป็น gold standard ของ AVM: เห็นการไหลแบบ dynamic, aneurysm ที่ feeder/intranidal, venous drainage — ใช้วางแผนรักษาและทำ embolization ในครั้งเดียวได้",
"Spetzler–Martin: ขนาด (&lt; 3 cm = 1, 3–6 = 2, &gt; 6 = 3) + eloquent cortex (1) + deep venous drainage (1) · เกรด I–II มักผ่าตัด · III พิจารณารายบุคคล · IV–V ที่ยังไม่แตกมักไม่ผ่าตัด (หลัง ARUBA)"],
variants=V(k,"ผู้ใหญ่ชักครั้งแรก CT พบหินปูนเป็นจุดเล็กหลายจุดกระจายทั้งสองซีก MRI บางจุดเป็น cyst มี scolex → neurocysticercosis → ยากันชัก ± albendazole ร่วม steroid ตามระยะของ cyst"))

k='MDCU76|RoC|Neuro 8'
P[k]=dict(
summary=[
"แกน: ภาพหลังทำ clip/coil ที่ circle of Willis = ผู้ป่วยมี saccular (berry) aneurysm ซึ่งอาการนำที่พบบ่อยที่สุดคือแตกเป็น aneurysmal SAH (non-traumatic SAH ราว 85% มาจาก aneurysm)",
"ตำแหน่ง: anterior circulation ราว 85–90% — AComm (บ่อยสุด), PComm, MCA bifurcation · posterior circulation (basilar tip) ราว 10% · มีหลายก้อนพบราว 15–20%",
"ปัจจัยเสี่ยง: สูบบุหรี่ ความดันสูง ดื่มสุราหนัก เพศหญิง ประวัติครอบครัว (ญาติสายตรง ≥ 2 คน), ADPKD, Ehlers–Danlos type IV, coarctation of aorta",
"อาการ: thunderclap headache (worst headache of life) คอแข็ง อาเจียน หมดสติชั่วขณะ ± sentinel headache ก่อนหน้า · PComm aneurysm กด CN III → ptosis รูม่านตาโต · ประเมินด้วย Hunt–Hess/WFNS และ modified Fisher",
"รักษา: secure aneurysm เร็ว (ภายใน 24–72 ชม.) ด้วย endovascular coiling หรือ microsurgical clipping (ISAT: coil ผลดีกว่าในรายที่ทำได้ทั้งสองวิธี) · ก่อนรักษาคุมความดันเพื่อลด rebleeding",
"หลัง SAH: nimodipine 21 วัน · รักษา euvolemia · เฝ้าระวัง DCI วันที่ 4–14 ด้วย neuro exam/TCD · hydrocephalus → EVD · hyponatremia ห้าม fluid restriction เพราะเพิ่ม DCI"],
variants=V(k,"ผู้ป่วยปวดศีรษะทันทีแล้วหนังตาซ้ายตก รูม่านตาซ้ายโต ตาซ้ายมองออกด้านนอกล่าง → CN III palsy จาก PComm aneurysm ที่ขยายหรือแตก → CTA ด่วนและรักษา aneurysm"))

k='MDCU76|RoC|Uro 1'
P[k]=dict(
trap="เห็น IPSS 22 (อาการรุนแรง) แล้วคิดว่าต้อง TURP ทันที หรือให้ 5-ARI เพราะเป็นยา BPH เหมือนกัน — คะแนนอาการบอกความรำคาญ ไม่ใช่ข้อบ่งชี้ผ่าตัด ผ่าตัดเมื่อยาไม่ได้ผลหรือมีภาวะแทรกซ้อน · 5-ARI ได้ผลเฉพาะต่อม &gt; 30–40 mL และใช้เวลา 3–6 เดือน ต่อมโตเล็กน้อย PSA 1 จึงควรเริ่ม alpha-blocker",
opinion="เห็นด้วยกับคีย์ A (ไฟล์ Key 76C กากบาท a) ความมั่นใจสูง — AUA BPH Guideline 2021 (แก้ไข 2023) และ EAU Non-neurogenic Male LUTS 2024 ให้ alpha-blocker เป็นยาแรกในชายที่ LUTS ปานกลาง–รุนแรงและรำคาญ · 5-ARI สงวนไว้สำหรับต่อม &gt; 30–40 mL หรือ PSA &gt; 1.5 ไม่ต่างจากคีย์",
variants=V(k,"ชาย 65 ปี กินยา BPH ครบแต่ปัสสาวะไม่ออกซ้ำ 2 ครั้ง ถอดสายสวนไม่สำเร็จ ต่อม 50 mL → refractory retention = ข้อบ่งชี้ผ่าตัด → TURP หรือ HoLEP"))

k='MDCU76|RoC|Uro 2'
P[k]=dict(
interp="ชายมี LUTS (IPSS 22) และ PSA 8 ng/mL ซึ่งสูงกว่าเกณฑ์ (ราว 4 ng/mL) → ต้องประเมินมะเร็งต่อมลูกหมากเพิ่ม ไม่ใช่แค่รักษา BPH · คำถามระบุ \"ตามแนวทางปัจจุบัน\" จึงถามขั้นตอนก่อนตัดสินใจเจาะชิ้นเนื้อ ซึ่งเปลี่ยนจาก TRUS biopsy ทันทีมาเป็น MRI ก่อน",
trap="ตอบ biopsy ทันทีเพราะตำราเก่าและคีย์ชุด 76A ใช้ TRUS biopsy เป็นขั้นต่อไป หรือตอบ alpha-blocker แล้วตรวจ PSA ปีหน้าเพราะเห็น IPSS สูงจนคิดว่า PSA สูงจาก BPH — PSA 8 ต้องประเมินมะเร็งเสมอ และแนวทางปัจจุบันให้ mpMRI ก่อน biopsy เพื่อทำ targeted biopsy และเลี่ยง biopsy ที่ไม่จำเป็น",
variants=V(k,"MRI ได้ PI-RADS 5 รอยโรค 1.5 cm ที่ peripheral zone ซ้าย → MRI-targeted biopsy (นิยมทาง transperineal เพราะลดการติดเชื้อหลังเจาะ) ร่วม systematic biopsy เพื่อไม่พลาดมะเร็งนอกรอยโรค"))

k='MDCU76|RoC|Uro 3'
P[k]=dict(
why="<b>Emphysematous cystitis</b> คือการติดเชื้อของผนังกระเพาะปัสสาวะที่เชื้อ facultative anaerobe (<i>E. coli</i> มากสุด, <i>Klebsiella pneumoniae</i>, Enterobacter) หมัก glucose ในเนื้อเยื่อได้ CO₂ และ hydrogen สะสมเป็นฟองในผนัง · ปัจจัยหลักคือ <b>เบาหวาน</b> (ราว 2/3 ของผู้ป่วย) ร่วม glucose ในเนื้อเยื่อสูง เลือดเลี้ยงไม่ดี และภูมิคุ้มกันบกพร่อง พบบ่อยในหญิงสูงอายุ ผู้ใส่สายสวน หรือมี bladder outlet obstruction · อาการไม่จำเพาะ ตั้งแต่ไม่มีอาการถึงปวดท้องน้อย ปัสสาวะแสบ และ pneumaturia · <b>CT</b> ไวที่สุด เห็นลมเป็นวงหรือลูกปัดในผนัง (beaded/cobblestone) และบอกว่าลามถึงไตหรือไม่ · รักษาส่วนใหญ่ด้วยยาปฏิชีวนะ + ระบายกระเพาะปัสสาวะด้วย Foley + คุมน้ำตาล ผ่าตัดน้อยมาก · ตรงคีย์ Key 76C กากบาท a ลายมือ <b>\"air around bladder\"</b>",
summary=[
"แกน: ลมในผนังกระเพาะปัสสาวะ (ไม่ใช่แค่ในโพรง) ในผู้ป่วยเบาหวาน = emphysematous cystitis — เชื้อหมัก glucose สร้างก๊าซในเนื้อเยื่อ เห็นเป็นลูกปัดโค้งตามผนังบน CT",
"เชื้อ: E. coli (มากสุด) &gt; Klebsiella &gt; Enterobacter, Proteus · ปัจจัยเสี่ยง: เบาหวานคุมไม่ดี (ราว 2/3), หญิงสูงอายุ, bladder outlet obstruction, neurogenic bladder, สายสวนค้าง, ภูมิต่ำ",
"ภาพ: KUB อาจเห็นวงลมรอบกระเพาะปัสสาวะ · CT ไวและจำเพาะที่สุด แยกลมในผนังกับในโพรง และดูการลามขึ้นไป emphysematous pyelonephritis",
"รักษา emphysematous cystitis: ยาปฏิชีวนะตามผลเพาะเชื้อ + Foley ระบาย + คุมน้ำตาล · ผ่าตัด (debridement, cystectomy) เฉพาะผนังเนื้อตายหรือไม่ตอบสนอง · อัตราตายรวมราว 7%",
"Emphysematous pyelonephritis (Huang–Tseng class 1–4): ลมใน collecting system/parenchyma/perirenal · class 1–2 → ยา + PCD/stent · class 3–4 ที่มีปัจจัยเสี่ยงหลายข้อ (ช็อก ไตวาย เกล็ดเลือดต่ำ ซึม) หรือไม่ดีขึ้น → nephrectomy",
"ลมในโพรงกระเพาะปัสสาวะอย่างเดียว ผนังปกติ: หลังใส่สายสวน/cystoscopy (พบบ่อย ไม่ต้องรักษา) หรือ colovesical fistula จาก diverticulitis/มะเร็ง/Crohn (pneumaturia, fecaluria, UTI ซ้ำหลายเชื้อ)"],
opinion="เห็นด้วยกับคีย์ A (ไฟล์ Key 76C ลายมือ air around bladder) ความมั่นใจสูง — ลมเป็นลูกปัดตามผนังในหญิงเบาหวานเป็นภาพเฉพาะ ช้อยอื่นไม่ทำให้เกิดลมในผนัง · Campbell-Walsh-Wein 12th ed. (2020) ยังใช้ยาปฏิชีวนะร่วมระบายเป็นหลัก ไม่ต่างจากคีย์",
variants=V(k,"ชายมีประวัติ diverticulitis ปัสสาวะมีลมและเศษอุจจาระปน UTI ซ้ำหลายเชื้อ CT พบลมในโพรงกระเพาะปัสสาวะ ผนัง sigmoid หนาติดกระเพาะปัสสาวะ → colovesical fistula → ผ่าตัด sigmoid ร่วมซ่อมกระเพาะปัสสาวะ"))

k='MDCU76|RoC|Uro 4'
P[k]=dict(
opinion="เห็นด้วยกับคีย์ C (ไฟล์ Key 76C ลายมือ \"LUTS ใน young men อาจนึกถึง urethral stricture\") ความมั่นใจสูง — ชายอายุ 35 ปีที่ลำปัสสาวะเล็กลงเรื่อย ๆ BPH ยังไม่น่าเป็น · AUA Urethral Stricture Disease Guideline 2023 ให้ยืนยันด้วย uroflow/RUG/cystoscopy ก่อนรักษา ไม่ต่างจากคีย์",
variants=V(k,"ชาย 28 ปี ตกคร่อมราวเหล็กเมื่อ 1 ปีก่อนมีเลือดออกปลายท่อปัสสาวะ ตอนนี้ลำปัสสาวะเล็ก RUG พบตีบสั้น 1 cm ที่ bulbar urethra → stricture จากอุบัติเหตุ → excision and primary anastomosis urethroplasty (โอกาสหายสูงกว่า DVIU)"))

k='MDCU76|RoC|Uro 5'
s=S(k)
P[k]=dict(
summary=[
"แกน: ข้อห้าม SWL มาจากเหตุผล 4 กลุ่ม — อันตรายต่อทารก (pregnancy), เลือดออก (bleeding diathesis ที่ยังไม่แก้, aneurysm ใกล้นิ่ว), ติดเชื้อกระจาย (UTI ที่ยังไม่รักษา), เศษนิ่วออกไม่ได้ (obstruction ปลายต่อนิ่ว) · gross hematuria เป็นอาการ ไม่ใช่ข้อห้าม",
s[0],
"ภาวะเลือดออก: หยุด aspirin/clopidogrel/anticoagulant ตามระยะก่อนทำ และตรวจ coagulation · ผู้ที่ต้องกินยาต้านลิ่มเลือดต่อ → ureteroscopy ปลอดภัยกว่า SWL และ PCNL",
s[2],s[3],
"UTI ก่อน SWL: ตรวจ urine culture ทุกราย ให้ยาตามเชื้อก่อนทำ · นิ่วอุดกั้นร่วมไข้ (obstructed infected kidney) → ระบายด้วย PCN/stent ก่อน ไม่ทำ SWL หรือ URS ในตอนนั้น"],
opinion="เห็นด้วยกับคีย์ D (ไฟล์ Key 76C กากบาท d ติ๊ก a, b, c ลายมือ \"ต้องเป็น bleeding tendency\" และเติมช้อย e Near arterial aneurysm) ความมั่นใจสูง — ตรงกับข้อห้าม SWL ใน EAU Urolithiasis Guidelines 2024 ที่ระบุ bleeding diathesis ไม่ใช่ hematuria",
variants=V(k,"หญิงตั้งครรภ์ 20 สัปดาห์ นิ่วท่อไตส่วนบน 8 mm ปวดไม่หายด้วยยา ไม่มีไข้ → ห้าม SWL → ใส่ ureteral stent หรือ PCN ชั่วคราว หรือทำ ureteroscopy โดยผู้ชำนาญ"))

k='MDCU76|RoC|Colo 1'
P[k]=dict(
summary=["แกน: ผ่าตัดหวังหายขาดใน colon cancer = ตัด R0 ทุกจุดที่มีโรค (ลำไส้พร้อม mesentery, เนื้อเยื่อที่ลุกติดแบบ en bloc, liver metastasis ที่ตัดได้) · HIPEC ใช้เฉพาะ peritoneal metastasis ร่วม cytoreductive surgery จึงไม่ใช่ส่วนของแผนนี้"]+S(k)+[
"CRLM ตัดได้เมื่อได้ขอบ R0 และเนื้อตับที่เหลือ (FLR) พอ — ราว ≥ 20% ในตับปกติ ≥ 30% หลังเคมีบำบัดมาก · parenchymal-sparing/wedge ได้ผลทางมะเร็งเท่า anatomical resection และเก็บตับไว้ผ่าซ้ำได้",
"PRODIGE 7 (2021): CRS + HIPEC oxaliplatin ไม่เพิ่ม overall survival เทียบกับ CRS อย่างเดียว และเพิ่มภาวะแทรกซ้อนระยะหลัง · ประโยชน์หลักมาจากการตัดก้อนในช่องท้องให้หมด (CC-0)"],
variants=V(k,"มะเร็ง sigmoid มี liver metastasis 6 ก้อนกระจายทั้งสองกลีบ เนื้อตับที่จะเหลือไม่พอ → systemic chemotherapy (± biologic) ก่อน แล้วประเมินซ้ำว่าเปลี่ยนเป็นตัดได้หรือไม่ (conversion therapy)"))

k='MDCU76|RoC|Colo 2'
P[k]=dict(
summary=["แกน: gastroschisis ในห้องคลอดเน้นปกป้องลำไส้ — คลุม ตะแคง ระบายลม ให้สารน้ำ ให้ยาปฏิชีวนะ รักษาความอบอุ่น · การดันลำไส้กลับเป็นงานของศัลยแพทย์เด็กหลังทารกคงที่ ไม่ใช่การดูแลแรกคลอด"]+S(k)+[
"สารน้ำ: ทารกเสียน้ำและความร้อนทางลำไส้ที่เปิดมาก ต้องการสารน้ำมากกว่า maintenance ปกติชัดเจนในวันแรก ติดตาม urine output และ perfusion · ยาปฏิชีวนะ broad-spectrum (เช่น ampicillin + gentamicin)",
"เทียบ omphalocele: มีถุงคลุม (amnion + peritoneum) สายสะดือออกจากถุง · ความผิดปกติร่วมสูง (หัวใจ, trisomy 13/18/21, Beckwith–Wiedemann) · ถุงไม่แตกไม่ต้องรีบผ่าตัด"],
variants=V(k,"ทารก omphalocele ยักษ์ ถุงไม่แตก ลิ้นโต น้ำตาลในเลือดต่ำ → Beckwith–Wiedemann syndrome → ทา antiseptic ให้ถุงตกสะเก็ด (paint and wait) ปิดผนังหน้าท้องภายหลัง และคุมน้ำตาลใกล้ชิด"))

k='MDCU76|RoC|Colo 3'
s=S(k)
P[k]=dict(
interp="มะเร็งที่ cecum ขนาด 2 cm ยังไม่มีการกระจายไกล (ผ่าตัดหวังหายขาดได้) · ถามขอบเขตการตัดลำไส้มาตรฐาน — คำตอบขึ้นกับตำแหน่งก้อนและหลอดเลือด/ต่อมน้ำเหลืองที่ระบายบริเวณนั้น ไม่ใช่ขนาดก้อน",
trap="เห็นก้อนเล็ก 2 cm แล้วตอบ cecectomy (ตัดเฉพาะส่วน) หรือตอบ extended right/subtotal เพราะคิดว่าตัดมากปลอดภัยกว่า — ขอบเขตกำหนดตามหลอดเลือดเลี้ยงและแนวต่อมน้ำเหลือง cecum ใช้ ileocolic → right hemicolectomy พอ · ตัดมากกว่านั้นไม่เพิ่มอัตรารอดแต่เพิ่มถ่ายบ่อยและภาวะแทรกซ้อน ยกเว้นมีเหตุอื่น (Lynch, synchronous tumor)",
summary=["แกน: ขอบเขตผ่าตัดมะเร็งลำไส้ใหญ่กำหนดด้วยหลอดเลือดเลี้ยงและต่อมน้ำเหลืองตามแนวหลอดเลือด ไม่ใช่ขนาดก้อน · cecum/ascending → right hemicolectomy ผูก ileocolic ที่ต้นกำเนิดจาก SMA"]+s+[
"หลังผ่าตัด: stage III (ต่อมบวก) → adjuvant FOLFOX/CAPOX 3–6 เดือนตามความเสี่ยง (IDEA) · stage II ที่มีลักษณะเสี่ยงสูง (T4, ต่อม &lt; 12, LVI, obstruction/perforation) → พิจารณา · ตรวจ MMR/MSI ทุกราย"],
opinion="เห็นด้วยกับคีย์ A (ไฟล์ Key 76C แปะตาราง right hemicolectomy: distal ileum ถึง proximal third of transverse colon) ความมั่นใจสูง — NCCN Colon Cancer 2024 ยังกำหนดขอบเขตผ่าตัดตามหลอดเลือดและต่อมน้ำเหลือง ≥ 12 ต่อม ไม่ต่างจากคีย์",
variants=V(k,"มะเร็งที่ hepatic flexure ไม่มีการกระจาย → extended right hemicolectomy ผูก middle colic artery ทั้งเส้นร่วม ileocolic/right colic",
"ชาย 35 ปี มะเร็ง cecum ตรวจพบ germline MLH1 mutation (Lynch syndrome) → พิจารณา subtotal/total colectomy + ileorectal anastomosis เพื่อลดมะเร็งใหม่ในลำไส้ส่วนที่เหลือ"))

k='MDCU76|RoC|Colo 4'
P[k]=dict(
why="MRI pelvis เป็นตัวกำหนดแผนรักษามะเร็ง rectum: ก้อนที่ลุกทะลุ mesorectal fascia เข้า prostate และ seminal vesicle = <b>cT4b</b> ซึ่งถ้าผ่าตัดทันที circumferential resection margin (CRM) มักชิดหรือผ่านมะเร็ง (R1) → local recurrence สูงและพยากรณ์แย่ · มาตรฐานจึงให้ <b>neoadjuvant therapy</b> ก่อน: long-course <b>chemoradiotherapy</b> (ราว 50 Gy ร่วม capecitabine/5-FU) หรือ <b>total neoadjuvant therapy (TNT)</b> ที่เพิ่มเคมีบำบัดครบก่อนผ่าตัด → ก้อนยุบ (downstaging) เพิ่มโอกาส R0 และลด local recurrence · จากนั้น restage ด้วย MRI ราว 8–12 สัปดาห์หลังรังสี แล้วผ่าตัด TME ร่วม en bloc multivisceral resection (เช่น ร่วมตัด prostate/seminal vesicle หรือ pelvic exenteration) ตามขอบเขตที่เหลือ · ตรงคีย์ Key 76C กากบาท b ลายมือ <b>\"CCR ก่อนค่อยผ่าเพราะเป็น T4\"</b>",
summary=["แกน: มะเร็ง rectum cT4b (ลุกอวัยวะข้างเคียง) ที่ไม่มี metastasis → neoadjuvant CRT/TNT ก่อน แล้วผ่าตัด en bloc เพื่อ R0 — ไม่ผ่าตัดทันทีและไม่ถือว่าเป็นระยะ palliative"]+S(k)+[
"Watch-and-wait: หลัง neoadjuvant ถ้า clinical complete response (ส่องกล้อง + MRI ไม่เหลือก้อน) เฝ้าติดตามใกล้ชิดแทนผ่าตัดได้ในศูนย์ที่พร้อม (OPRA) · ก้อนโตกลับราว 1/4–1/3 ส่วนใหญ่กู้ด้วยผ่าตัดได้"],
opinion="เห็นด้วยกับคีย์ B (ไฟล์ Key 76C ลายมือ \"CCR ก่อนค่อยผ่าเพราะเป็น T4\") ความมั่นใจสูง — NCCN Rectal Cancer 2024 ให้ neoadjuvant ก่อนใน cT4b · ปัจจุบันนิยม TNT (RAPIDO 2021, PRODIGE 23 2021) มากกว่า CRT อย่างเดียว ซึ่งต่อยอดจากคีย์โดยไม่ขัดกัน",
variants=V(k,"มะเร็ง rectum cT2N0 อยู่สูง 8 cm จาก anal verge CRM ปลอดภัย → low anterior resection ร่วม TME ได้เลยโดยไม่ต้อง neoadjuvant",
"มะเร็ง rectum cT3 ที่ 3 cm จาก anal verge ลุกหูรูดชั้นใน ผู้ป่วยอยากเก็บหูรูด → neoadjuvant ก่อนเพื่อหวังก้อนยุบพอทำ intersphincteric resection ร่วม coloanal anastomosis"))

k='MDCU76|RoC|Colo 5'
P[k]=dict(
summary=["แกน: ผู้สูงอายุถ่ายเลือดแดงสดปริมาณมากทันทีโดยไม่ปวดท้อง = diverticular bleeding จนกว่าจะพิสูจน์ได้อื่น — เกิดใน diverticulosis (ไม่มีการอักเสบ) จาก vasa recta แตกที่คอ diverticulum"]+S(k)+[
"แยกจากลักษณะ: ischemic colitis ปวดท้องเฉียบพลันแล้วถ่ายเลือดปนปริมาณน้อย · มะเร็ง เลือดออกน้อยเรื้อรัง ซีด เปลี่ยนนิสัยการขับถ่าย · angiodysplasia เลือดออกน้อยเป็นพัก ๆ ซีดจากขาดเหล็ก · ริดสีดวงเลือดหยดหลังถ่ายไม่มาก"],
opinion="เห็นด้วยกับคีย์ A (ไฟล์ Key 76C กากบาท a Diverticulosis) ความมั่นใจสูง — diverticular bleeding เป็นสาเหตุอันดับหนึ่งของ acute LGIB ในผู้ใหญ่ตาม ACG Guideline 2023 · ช้อยเขียน diverticulosis ถูกต้องกว่า diverticulitis เพราะเลือดออกเกิดโดยไม่มีการอักเสบ",
variants=V(k,"หญิง 75 ปี ซีดจากขาดเหล็ก ถ่ายดำหรือมีเลือดปนเล็กน้อยเป็นพัก ๆ ส่องกล้องบนปกติ ส่องกล้องล่างพบรอยแดงแผ่เป็นแฉกที่ cecum → angiodysplasia → argon plasma coagulation"))

k='MDCU76|RoC|Colo 6'
P[k]=dict(
interp="ถามว่า polyp ของลำไส้ใหญ่ชนิดใดมีโอกาสกลายเป็นมะเร็งสูงที่สุดเมื่อเทียบตามชนิดเนื้อเยื่อ (histology) — ต้องแยก neoplastic (adenoma 3 ชนิด) ออกจาก non-neoplastic (hyperplastic, inflammatory) แล้วเรียงความเสี่ยงตามสัดส่วน villous",
summary=["แกน: ความเสี่ยงมะเร็งของ adenoma ตามชนิดเนื้อเยื่อ villous &gt; tubulovillous &gt; tubular · ยิ่งสัดส่วน villous มากยิ่งเสี่ยง · hyperplastic และ inflammatory polyp ไม่ใช่ neoplasm"]+S(k)+[
"Adenoma–carcinoma sequence: APC (gatekeeper) → KRAS → TP53/SMAD4 ใช้เวลาราว 10 ปี — เหตุผลที่การส่องกล้องตัด polyp ป้องกันมะเร็งได้ · ขนาดยิ่งใหญ่ยิ่งเสี่ยง (&lt; 1 cm เสี่ยงต่ำมาก ≥ 2 cm เสี่ยงสูงชัดเจน)"],
opinion="เห็นด้วยกับคีย์ A (ไฟล์ Key 76C แปะตาราง colonic polyps และ \"Villous adenomas are villains\") ความมั่นใจสูง — WHO Classification of Digestive System Tumours 2019 ยังใช้หลักเดียวกัน · การติดตามหลังตัดตาม USMSTF 2020 ใช้ขนาด จำนวน villous และ HGD ร่วมกัน ไม่ต่างจากคีย์",
variants=V(k,"ผู้ป่วยอายุ 45 ปี ส่องกล้องคัดกรองครั้งแรกพบ hyperplastic polyp 3 mm ที่ rectum 2 ก้อน ตัดออกแล้ว → ไม่ใช่ neoplasm ติดตามเหมือนส่องกล้องปกติ คือ 10 ปี"))

k='MDCU76|RoC|Ped 1'
s=S(k)
P[k]=dict(
why="Neural tube ปิดภายใน <b>วันที่ 28 หลังปฏิสนธิ</b> (ราว 6 สัปดาห์หลัง LMP) — anterior neuropore ปิดราววันที่ 25 และ posterior neuropore ราววันที่ 27–28 · ช่วงนี้ผู้หญิงจำนวนมากยังไม่รู้ว่าตั้งครรภ์ และราวครึ่งหนึ่งของการตั้งครรภ์ไม่ได้วางแผน · folate จำเป็นต่อการสร้าง DNA และ methylation ของเซลล์ที่แบ่งตัวเร็ว และระดับ folate ในเนื้อเยื่อต้องใช้เวลาหลายสัปดาห์จึงขึ้นถึงระดับป้องกัน จึงต้องเริ่ม <b>folic acid 400 µg (0.4 mg)/วัน อย่างน้อย 1 เดือนก่อนตั้งครรภ์</b> และกินต่อถึง <b>12 สัปดาห์</b> ของครรภ์ · ลดความเสี่ยง NTD ได้ราว 50–70% (MRC Vitamin Study 1991 ลดการเกิดซ้ำราว 72%) · กลุ่มเสี่ยงสูงใช้ 4 mg/วัน · ตรงคีย์ Key 76C กากบาท b พร้อมแปะ <b>\"Start taking 400 mcg of folic acid each day at least 1 month before pregnancy through the first 12 weeks of pregnancy\"</b>",
wrong=dict(D="เริ่ม 2 เดือนหลัง LMP (ราว 6 สัปดาห์หลังปฏิสนธิ) ท่อประสาทปิดไปแล้วตั้งแต่วันที่ 28 หลังปฏิสนธิ การกินช่วงนี้จึงไม่ป้องกัน NTD · ไม่มีสถานการณ์ใดที่การเริ่มช่วงนี้ป้องกัน NTD ได้ ประโยชน์ที่เหลือคือป้องกันโลหิตจางจากขาด folate ของแม่เท่านั้น"),
trap="เลือก A เพราะฟังดูสมเหตุสมผลว่ารู้ว่าท้องแล้วค่อยกินและกินยาว 6 เดือน — แต่กว่าจะตรวจพบการตั้งครรภ์ (ประจำเดือนขาด ราว 2 สัปดาห์หลังปฏิสนธิ) ท่อประสาทเหลือเวลาปิดไม่ถึง 2 สัปดาห์ และระดับ folate ยังขึ้นไม่ทัน · จำว่านับเวลาจาก \"ก่อนปฏิสนธิ\" ไม่ใช่จาก LMP หรือวันที่รู้ว่าท้อง",
summary=[
"แกน: neural tube ปิดภายในวันที่ 28 หลังปฏิสนธิ ก่อนที่ผู้หญิงส่วนใหญ่จะรู้ว่าตั้งครรภ์ → folic acid ต้องเริ่มก่อนตั้งครรภ์ ≥ 1 เดือน และให้ต่อถึง 12 สัปดาห์",
"ขนาด: ความเสี่ยงทั่วไป 0.4 mg (400 µg)/วัน (USPSTF 2023: 0.4–0.8 mg สำหรับผู้หญิงที่วางแผนหรืออาจตั้งครรภ์) · ความเสี่ยงสูง (เคยมีลูก NTD, ตนเองหรือคู่เป็น NTD) 4 mg/วัน ช่วงเวลาเดียวกัน",
s[2],
"NTD: anencephaly (ไม่รอด), spina bifida (myelomeningocele, meningocele, spina bifida occulta), encephalocele · ปัจจัยเสี่ยง: ขาด folate, valproate/carbamazepine, เบาหวานก่อนตั้งครรภ์, อ้วน, ไข้สูงช่วงต้นครรภ์",
"คัดกรองก่อนคลอด: maternal serum AFP ไตรมาส 2 (15–20 สัปดาห์) สูงใน open NTD · ultrasound เห็น lemon sign และ banana sign (Chiari II) · amniotic AFP + acetylcholinesterase ช่วยยืนยัน",
s[4]],
opinion="เห็นด้วยกับคีย์ B (ไฟล์ Key 76C แปะคำแนะนำ 400 mcg อย่างน้อย 1 เดือนก่อนตั้งครรภ์ถึง 12 สัปดาห์) ความมั่นใจสูง — ตรงกับ CDC และ USPSTF 2023 (0.4–0.8 mg/วัน เริ่มอย่างน้อย 1 เดือนก่อนตั้งครรภ์ ต่อถึง 2–3 เดือนแรก) · ACOG ใช้ขนาดเดียวกัน คีย์จึงยังทันสมัย",
variants=V(k,"หญิงกิน methotrexate รักษา rheumatoid arthritis อยากตั้งครรภ์ → หยุด methotrexate 1–3 เดือนก่อนตั้งครรภ์ (ยาต้าน folate ทำให้ทารกพิการ) และเริ่ม folic acid ก่อนปฏิสนธิ"))

k='MDCU76|RoC|Ped 2'
P[k]=dict(
why="<b>Pneumatosis intestinalis</b> = ก๊าซในผนังลำไส้ เกิดเมื่อเยื่อบุลำไส้ของทารกก่อนกำหนดที่ยังไม่สมบูรณ์ (กำแพงเยื่อบุอ่อนแอ ภูมิคุ้มกันเฉพาะที่และการไหลเวียนยังไม่ดี TLR4 ตอบสนองมากเกิน) ถูกกระตุ้นด้วยนม (โดยเฉพาะนมผสม) และแบคทีเรียผิดปกติ → แบคทีเรียบุกผนังลำไส้ หมักสารอาหารสร้างไฮโดรเจนในผนัง เห็นเป็นฟองจุด (bubbly) หรือแนวเส้นโค้งตามผนัง (linear) — เป็น <b>hallmark ของ NEC</b> และจัดเป็นอย่างน้อย <b>modified Bell stage IIA</b> · ภาพเข้ากับคลินิกครบ: <b>คลอดก่อนกำหนด</b> (ปัจจัยเสี่ยงสำคัญที่สุด มักเกิดสัปดาห์ที่ 2–3 หลังคลอด) + เริ่มให้นม + นมค้าง ท้องอืด ถ่ายเป็นเลือด · ตำแหน่งที่พบบ่อยคือ terminal ileum และ ascending colon · ก๊าซลามไปตาม portal vein เป็น portal venous gas (IIB) และถ้าทะลุเป็น pneumoperitoneum (IIIB) · ตรงคีย์ Key 76C กากบาท A แปะรูปเดียวกันพร้อมคำว่า <b>\"Pneumatosis intestinalis (necrotizing enterocolitis)\"</b>",
opinion="เห็นด้วยกับคีย์ A (ไฟล์ Key 76C แปะรูปเดียวกันพร้อมคำว่า Pneumatosis intestinalis) ความมั่นใจสูง — ทารกก่อนกำหนดที่กินนมแล้วท้องอืด ถ่ายเป็นเลือด ร่วม pneumatosis เป็นภาพ NEC แบบฉบับ · AAP Clinical Report 2021 (นมแม่ในทารก VLBW) เน้นป้องกันด้วยนมแม่/นมบริจาค ไม่ต่างจากคีย์",
variants=V(k,"ทารกครบกำหนดอายุ 5 วัน มี hypoplastic left heart syndrome ท้องอืด ถ่ายเป็นเลือด AXR พบ pneumatosis → NEC ในทารกครบกำหนดที่มีเลือดไปลำไส้ลดจากโรคหัวใจ → งดนม ยาปฏิชีวนะ และดูแลภาวะหัวใจร่วม"))

for k,v in P.items():
  if 'wrong' in v:
    w=dict(A[k]['wrong']);w.update(v['wrong']);v['wrong']=w
out='/home/claude/ac-mdcu/parts/explain/data_subspe/zz76_03.json'
json.dump(P,open(out,'w'),ensure_ascii=False,indent=1)
print(len(P))

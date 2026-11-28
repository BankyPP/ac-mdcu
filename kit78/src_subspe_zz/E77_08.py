import json
A=json.load(open('/home/claude/h/all.json'))
P={}
def addv(k,v):
    P.setdefault(k,{})['variants']=list(A[k]['variants'])+[v]
def wr(k,l,t):
    w=dict(A[k]['wrong']);w[l]=t
    P.setdefault(k,{})['wrong']=w

addv('MDCU77|RoC|CVT 5',"ผู้ป่วย type A dissection ความดันตก หลอดเลือดคอโป่ง เสียงหัวใจเบา echo เห็นน้ำในเยื่อหุ้มหัวใจ → tamponade จาก dissection แตกเข้า pericardium: ส่งผ่าตัดซ่อม aorta ด่วน ไม่เจาะระบายจนหมด (ถ้าจำเป็นเจาะระบายทีละน้อยแค่พอให้ความดันขึ้นระหว่างรอผ่าตัด)")
addv('MDCU77|RoC|CVT 6',"ผู้ป่วย Eisenmenger ต้องผ่าตัดไส้ติ่งอักเสบ → SVR ที่ลดลงจากยาสลบหรือ spinal block ทำให้ R→L shunt เพิ่มและ SpO<sub>2</sub> ตก: ให้ทีมวิสัญญีที่ชำนาญ ACHD ดูแล รักษา SVR ด้วย vasopressor (phenylephrine/norepinephrine) และเลี่ยงการขาดน้ำ")
addv('MDCU77|RoC|CVT 7',"TOF ที่ LAD แตกจาก RCA แล้ววิ่งข้ามหน้า RVOT → ห้ามกรีดผ่าน infundibulum ตามขวางเพราะตัด coronary: แก้ RVOT ทาง transatrial/transpulmonary หรือใช้ RV–PA conduit แทน transannular patch")
addv('MDCU77|RoC|CVT 8',"ผู้บาดเจ็บทรวงอกมี pneumothorax เล็กที่เห็นเฉพาะใน CT (occult) กำลังจะดมยาใช้เครื่องช่วยหายใจแรงดันบวก → ส่วนใหญ่เฝ้าดูได้โดยไม่ใส่สายก่อน แต่ต้องพร้อมใส่ ICD ทันทีถ้าความดันตกหรือ SpO<sub>2</sub> ลด")
addv('MDCU77|RoC|CVT 9',"ผู้ป่วยปอดอักเสบมีน้ำในช่องเยื่อหุ้มปอด เจาะได้น้ำขุ่นเล็กน้อยไม่เป็นหนอง pH 7.0 glucose 30 mg/dL → complicated parapneumonic effusion (pH &lt; 7.2 เป็นเกณฑ์ระบาย): ใส่ chest drain ร่วมกับยาปฏิชีวนะ")
addv('MDCU77|RoC|CVT 10',"ผู้ป่วย MR จาก LV ขยายหลัง MI (secondary MR) EF 30% ยังมีอาการแม้ได้ GDMT เต็มที่ กายวิภาคเหมาะ → transcatheter edge-to-edge repair ตามเกณฑ์ COAPT (โรคอยู่ที่กล้ามเนื้อหัวใจ ไม่ใช่ตัวลิ้นแบบ flail leaflet)")

k='MDCU77|RoC|Uro 1'
addv(k,"ผู้ป่วยอายุ 35 ปี ไตโตคลำได้สองข้าง มีถุงน้ำหลายสิบถุงทั้งสองไตและในตับ พ่อล้างไต ความดันสูง → ADPKD: คุมความดันด้วย ACEi/ARB ประเมิน tolvaptan ในรายที่ไตเสื่อมเร็ว และคัดกรอง intracranial aneurysm เมื่อครอบครัวมีประวัติ")
wr(k,'D',"Hypertension จากถุงน้ำกดเนื้อไตจนขาดเลือดเฉพาะที่และหลั่ง renin (กลไกคล้าย Page kidney) พบน้อยมากใน simple cyst · ความดันสูงในผู้สูงอายุที่มีถุงน้ำมักเป็นโรคร่วมโดยบังเอิญ ไม่ใช่อาการนำ · จะถูกถ้าเป็นผู้ป่วยอายุ 30 ปีที่มี ADPKD ไตโตสองข้าง ซึ่งความดันสูงพบได้ตั้งแต่ก่อนไตเสื่อม")
addv('MDCU77|RoC|Uro 2',"ชายอายุ 60 ปีแข็งแรง ก้อนไต enhance 9 cm ลามเข้า renal vein ไม่มีการกระจาย → radical nephrectomy ร่วมกับเอาลิ่มเนื้องอกใน renal vein ออก (ตัดบางส่วนไม่ได้)")
addv('MDCU77|RoC|Uro 3',"ชายอายุ 68 ปี DRE คลำได้ก้อนแข็งขรุขระที่กลีบซ้าย PSA 12 ng/mL → สงสัยมะเร็งต่อมลูกหมาก: MRI ต่อมลูกหมาก (PI-RADS) แล้ว biopsy ก่อนวางแผนรักษา ไม่ใช่รักษาแบบ BPH")
k='MDCU77|RoC|Uro 4'
addv(k,"หญิงตั้งครรภ์ 24 สัปดาห์ปวดสีข้างขวามาก US เห็นไตบวมและนิ่วท่อไตส่วนล่าง ไม่มีไข้ ปวดไม่หายด้วยยา → ใส่ DJ stent หรือทำ ureteroscopy (เลี่ยง CT และห้าม SWL ในครรภ์)")
wr(k,'C',"น้ำ + ยาแก้ปวด (NSAID เป็นยาแรก) เป็นการดูแลอาการระหว่างรอนิ่วหลุดเอง แต่นิ่ว 1.5 cm โอกาสหลุดเองต่ำมาก และปวดมากจนคุมไม่ได้ที่ OPD จึงต้องระบายหรือเอานิ่วออก · จะถูกถ้าเป็นนิ่วท่อไตส่วนล่างขนาด 3–4 mm ปวดคุมได้ด้วย NSAID ไม่มีไข้ ไตทำงานปกติ")
k='MDCU77|RoC|Uro 5'
addv(k,"ผู้ป่วยใส่สายสวนปัสสาวะค้าง มีไข้ 38.8 °C ความดันตก หาแหล่งติดเชื้ออื่นไม่พบ → catheter-associated UTI (มีอาการ ไม่ใช่ asymptomatic bacteriuria): เปลี่ยนสายสวน เพาะเชื้อจากสายใหม่ แล้วให้ยาปฏิชีวนะ")
P[k]['trap']="เห็นเชื้อ 10⁵ CFU/mL ร่วม WBC 10–20/HPF แล้วตอบ UTI — UTI ต้องมีอาการ (ปัสสาวะแสบ ถี่ ปวดท้องน้อย ไข้ ปวดสีข้าง) · ไม่มีอาการ + เชื้อถึงเกณฑ์ = asymptomatic bacteriuria แม้มี pyuria ร่วม (pyuria ไม่ใช่ข้อบ่งชี้ให้ยา) · contaminated specimen มักได้เชื้อหลายชนิดและเห็น squamous epithelial cell มาก · mild/severe pyuria เป็นแค่คำบรรยายผลตรวจ ไม่ใช่การวินิจฉัย"
k='MDCU77|RoC|Uro 6'
addv(k,"เด็กชาย 2 ขวบหนังหุ้มตีบไม่มีแผลเป็น ปัสสาวะดี ไม่เคย UTI แต่หนังหุ้มโป่งขณะปัสสาวะ → physiologic phimosis: ไม่ต้องขลิบ ห้ามรูดดึงแรง ทายา steroid ได้ถ้าผู้ปกครองกังวล")
P[k]['opinion']="เห็นด้วยกับคีย์ B ความมั่นใจสูง — ไฟล์ Key 77C ตอบ B ตรงกับเว็บ · แผลเป็นวงขาวที่ปลายหนังหุ้มคือ pathologic phimosis ที่ steroid ทาได้ผลน้อย EAU Paediatric Urology 2024 แนะนำขลิบเมื่อมีแผลเป็นหรือ BXO และ UTI ซ้ำ ส่วน ballooning อย่างเดียวไม่ใช่ข้อบ่งชี้ผ่าตัด · ต้นฉบับมีช้อย 2 ตัว (A, B) เราเติม C–E"
k='MDCU77|RoC|Uro 7'
addv(k,"ทารกแรกเกิด proximal hypospadias ร่วมคลำอัณฑะไม่ได้ทั้งสองข้าง → สงสัย DSD (เช่น CAH ในเพศพันธุกรรมหญิง): ตรวจ karyotype, 17-OHP, electrolyte ก่อนตั้งเพศและห้ามขลิบ")
P[k]['opinion']="เห็นด้วยกับคีย์ A ความมั่นใจสูง — ไฟล์ Key 77C ตอบ A ตรงกับเว็บ · อัณฑะไม่ลงถุงเป็นความผิดปกติร่วมที่พบบ่อยที่สุดและตรวจได้ด้วยการคลำ · EAU Paediatric Urology 2024 และ AUA Cryptorchidism (2014) ระบุว่า hypospadias ร่วมอัณฑะคลำไม่ได้ต้องสืบค้น DSD ก่อนผ่าตัด · ต้นฉบับจดแค่คำตอบ เราแต่งช้อย B–E"
k='MDCU77|RoC|Uro 8'
addv(k,"ทารกอายุ 3 วัน ตาบวมแดงมีหนองมาก แม่ไม่ได้ฝากครรภ์ → gonococcal ophthalmia neonatorum: ceftriaxone 25–50 mg/kg IV/IM ครั้งเดียว (ไม่เกิน 250 mg) และตรวจรักษาแม่กับคู่")
P[k]['opinion']="เห็นด้วยกับคีย์ A ความมั่นใจสูง — ไฟล์ Key 77C ตอบ A ตรงกับเว็บ · Gram-negative intracellular diplococci ในหนองท่อปัสสาวะของชายที่มีอาการวินิจฉัย gonorrhea ได้เลย · CDC 2021 เปลี่ยนการรักษาจาก ceftriaxone 250 mg + azithromycin เป็น ceftriaxone 500 mg IM เดี่ยว (เพิ่ม doxycycline เมื่อยังไม่ตัด chlamydia) · ต้นฉบับจดแค่คำตอบ เราแต่งช้อย B–E"
k='MDCU77|RoC|Uro 9'
addv(k,"ชายอายุ 24 ปีรักษาหูดรอบทวารหายแล้ว ถามเรื่องวัคซีน HPV → วัคซีนไม่ได้รักษาหูดที่เป็นอยู่ แต่ให้ได้เพื่อป้องกันสายพันธุ์อื่น (ACIP แนะนำให้ทุกคนถึงอายุ 26 ปี และพิจารณารายบุคคลอายุ 27–45 ปี)")
P[k]['interp']="ชายที่มีเพศสัมพันธ์กับชาย (MSM) มีก้อนผิวขรุขระรูปดอกกะหล่ำ ไม่เจ็บ รอบทวาร = condyloma acuminata (หูดหงอนไก่) ซึ่งไม่ใช่แผล ไม่ใช่ตุ่มน้ำ และไม่ใช่แผ่นนูนเรียบแบบ condyloma lata — ถามเชื้อก่อโรค ต้องแยกจาก STI อื่นที่ทำให้รอยโรคบริเวณอวัยวะเพศและทวาร"
P[k]['opinion']="เห็นด้วยกับคีย์ A ความมั่นใจสูง — ไฟล์ Key 77C ตอบ A ตรงกับเว็บ · ก้อนดอกกะหล่ำไม่เจ็บเป็นลักษณะของหูดจาก HPV (ส่วนใหญ่ชนิด 6/11) · CDC 2021 ยังไม่แนะนำ anal cytology คัดกรองเป็นประจำ แต่ International Anal Neoplasia Society (2024) หลังผล ANCHOR แนะนำคัดกรองมะเร็งทวารหนักใน MSM ที่ติดเชื้อ HIV ตั้งแต่อายุ 35 ปี · ต้นฉบับจดแค่คำตอบ เราแต่งช้อย B–E"

k='MDCU78|RoB|13'
P[k]=dict(
why="Aspirin <b>acetylate serine (Ser529) ใน COX-1 แบบ irreversible</b> ทำให้เอนไซม์เปลี่ยน arachidonic acid เป็น PGH2 ไม่ได้ เกล็ดเลือดจึงสร้าง <b>thromboxane A2</b> (ตัวกระตุ้นการหดหลอดเลือดและการเกาะกลุ่ม) ไม่ได้ · เกล็ดเลือดไม่มี nucleus สร้าง COX ใหม่ไม่ได้ ฤทธิ์จึงอยู่ตลอดอายุเกล็ดเลือด 7–10 วัน ขณะที่<b>เซลล์ endothelium มี nucleus สร้าง COX ใหม่ได้</b> จึงยังสร้าง prostacyclin (PGI2 ต้านการเกาะกลุ่ม) ต่อ — น่าจะเป็นความหมายของ \"non-endothelial pathway\" · ขนาดต่ำ 75–100 mg/วันพอยับยั้ง COX-1 ของเกล็ดเลือดเกือบหมด เพราะเกล็ดเลือดถูก acetylate ในเลือดพอร์ทัลก่อนยาผ่านตับ · ก่อน CABG แนวปัจจุบันให้ aspirin ต่อได้ถึงวันผ่าตัดและเริ่มใหม่ภายใน 6 ชม. หลังผ่าตัด (2021 ACC/AHA/SCAI) · ช้อย A (ยับยั้งการสร้าง TXA2) ถูกในแง่ผลลัพธ์แต่เป็นผลปลายทาง กลไกตรงคือ B · ตรงคีย์ในไฟล์ Key 78B ที่เขียน <b>\"B&gt;A\"</b> (ให้ B มากกว่า A)",
trap="เลือก A เพราะจำได้ว่า aspirin \"ลด TXA2\" — ถูกแต่เป็นผลปลายทาง สิ่งที่ถามคือกลไกตรง (mechanism of action) ซึ่งคือ acetylate COX-1 แบบ irreversible · อีกกับดักคือเลือก E เพราะคิดว่าก่อน CABG ใช้ clopidogrel — P2Y12 inhibitor ต้องหยุดก่อนผ่าตัดตามเวลา ยาที่ให้ต่อได้ถึงวันผ่าตัดคือ aspirin · วิธีแยก: \"ยับยั้งเอนไซม์\" = กลไก ส่วน \"ลดสาร\" = ผลลัพธ์",
opinion="เห็นด้วยกับคีย์ B ความมั่นใจปานกลาง-สูง — ไฟล์ Key 78B เขียน \"B&gt;A\" คือยอมรับว่า A ก็สื่อถึง aspirin แต่ B เป็นกลไกตรง · ถ้อยคำ \"non-endothelial pathway\" กำกวม (ต้นฉบับตามที่ผู้จดจำ) น่าจะหมายถึงทาง TXA2 ในเกล็ดเลือดเทียบกับ PGI2 ของ endothelium · 2021 ACC/AHA/SCAI Revascularization ยังให้ aspirin ต่อก่อน CABG และหยุด P2Y12 inhibitor ตามเวลา จึงสนับสนุนว่ายาคือ aspirin · ต้นฉบับมีช้อย 4 ตัว เราเติม E",
summary=[
"แกนข้อ: aspirin = <b>irreversible acetylation ของ COX-1</b> (Ser529) → เกล็ดเลือดสร้าง TXA2 ไม่ได้ · การยับยั้ง COX คือกลไก ส่วนการลด TXA2 คือผลลัพธ์ · ฤทธิ์อยู่ 7–10 วันเพราะเกล็ดเลือดไม่มี nucleus (ร่างกายสร้างเกล็ดเลือดใหม่ราว 10% ต่อวัน)",
"เกล็ดเลือดต่างจาก endothelium: endothelium สร้าง COX ใหม่ได้จึงคง prostacyclin (PGI2 ขยายหลอดเลือด ต้านการเกาะกลุ่ม) · aspirin ขนาดต่ำ 75–100 mg/วันพอยับยั้ง TXA2 ของเกล็ดเลือดเกือบหมด ขนาดสูงไม่เพิ่มประสิทธิภาพแต่เพิ่มเลือดออกในทางเดินอาหาร",
"P2Y12 (ADP receptor) blockers: clopidogrel (prodrug ผ่าน CYP2C19, irreversible) · prasugrel (prodrug, irreversible, ฤทธิ์แรงกว่า) · ticagrelor (ไม่ใช่ prodrug, reversible) · cangrelor IV ออกฤทธิ์และหมดฤทธิ์ในไม่กี่นาที ใช้เป็น bridge ก่อนผ่าตัดในรายเสี่ยง stent thrombosis",
"GP IIb/IIIa inhibitors (abciximab, eptifibatide, tirofiban) ยับยั้ง final common pathway ที่ fibrinogen เชื่อมเกล็ดเลือดเข้าด้วยกัน · PAR-1 antagonist (vorapaxar) ยับยั้งการกระตุ้นจาก thrombin · dipyridamole และ cilostazol เพิ่ม cAMP ในเกล็ดเลือด",
"ยาต้านการแข็งตัวที่ไม่ใช่ antiplatelet: warfarin ลด factor II, VII, IX, X (vitamin K-dependent) และ protein C/S · heparin/LMWH เร่ง antithrombin ยับยั้ง thrombin และ factor Xa · fondaparinux ผ่าน antithrombin ยับยั้ง Xa อย่างเดียว",
"ก่อน elective CABG (2021 ACC/AHA/SCAI): ให้ aspirin ต่อ · หยุด clopidogrel 5 วัน ticagrelor 3–5 วัน prasugrel 7 วัน · หลังผ่าตัดเริ่ม aspirin ภายใน 6 ชม. เพื่อลด graft occlusion · ผู้ป่วยที่ต้อง CABG ด่วน (shock, กายวิภาคเสี่ยง) ผ่าตัดได้โดยไม่ต้องรอหยุด P2Y12 ครบ"],
variants=list(A[k]['variants'])+[
"ผู้ป่วยกิน ibuprofen ทุกเช้าก่อนกิน aspirin ขนาดต่ำ → ibuprofen แย่งจับ COX-1 จน aspirin acetylate ไม่ได้ ฤทธิ์ต้านเกล็ดเลือดลด: ให้กิน aspirin ก่อน ibuprofen อย่างน้อย 30 นาที หรือเลี่ยง NSAID",
"ผู้ป่วยกิน aspirin ถึงวันผ่าตัด CABG แล้วเลือดออกทางสายระบายไม่หยุด ค่า coagulation ปกติ → เกล็ดเลือดเดิมถูกยับยั้งถาวร: ให้ platelet transfusion (vitamin K และ protamine ไม่แก้ฤทธิ์ aspirin)"]
)
json.dump(P,open('/home/claude/ac-mdcu/parts/explain/data_subspe/zz77_08.json','w'),ensure_ascii=False,indent=1)
print(len(P))

// Update Subspe High-yield summaries with MDCU79 RoD MCQ (data_b3) + MDCU79 RoC OSCE (osce_b12) — 20 Nov 2026
// Run from repo root: node parts/sumupd_s79.js  (idempotent: skips members already present / sections already existing)
const fs=require("fs");const DIR="data_subspe/";
const D=x=>"MDCU79|RoD|"+x, O=x=>"MDCU79|RoC|"+x;
const files={};
function load(f){if(files[f])return files[f];global.SUMM=[];require("../"+DIR+f);files[f]=SUMM[0];return files[f];}
function sec(f,id){const s=load(f);for(const g of s.groups)for(const x of g.sections)if(x.id===id)return x;throw Error("no section "+f+" "+id);}
function add(f,id,mem,extra){const x=sec(f,id);mem.forEach(m=>{if(!x.members.includes(m))x.members.push(m)});
  if(extra)for(const k of ["asked","pattern","pearls"])if(extra[k]){x[k]=x[k]||[];extra[k].forEach(l=>{if(!x[k].includes(l))x[k].push(l)})}}
function ns(f,g,o){const s=load(f);let grp=typeof g==="number"?s.groups[g]:s.groups.find(x=>x.title===g);
  if(!grp){grp={title:g,sections:[]};s.groups.push(grp);}
  for(const G of s.groups)if(G.sections.some(x=>x.id===o.id))return;grp.sections.push(o);}
function intro(f,li){const s=load(f);if(s.intro.includes(li))return;s.intro=s.intro.replace(/<\/ul>\s*$/,"<li>"+li+"</li></ul>");}
const I79="MDCU79 RoD (ไฟล์ AC 79D ส่วน Subspe) เพิ่มเข้ามา: ";

/* ================= MCQ: Uro ================= */
let F="sum_mcq_uro.js";
intro(F,I79+"ครอบคลุมเกือบทุกเรื่องของ uro — PSA สูง, testicular tumor (inguinal orchiectomy + lymphatic drainage), NMIBC/UTUC, RCC, นิ่ว + ไข้ (อุด vs ไม่อุด), emphysematous pyelonephritis, AUR, UDT ในเด็ก");
add(F,"testis-gct",[D("Uro 2"),D("Uro 3")],{asked:["ก้อนแข็งในอัณฑะ + US hypoechoic → next step (79D)","ต่อมน้ำเหลืองที่ <b>ไม่ใช่</b> ทางแพร่ของ non-seminoma (79D)"],
 pattern:["ก้อน intratesticular = มะเร็งจนกว่าพิสูจน์ได้ → tumor markers (AFP, β-hCG, LDH) → <b>radical inguinal orchiectomy</b> · ห้าม transscrotal biopsy/orchiectomy","Lymphatic drainage: right testis → <b>interaortocaval</b> · left testis → <b>para-aortic</b> · distant: retrocrural, mediastinum, left supraclavicular · <b>inguinal LN ไม่ใช่ทางปกติ</b> (เกิดเฉพาะ scrotal violation)"],
 pearls:["79D Uro 3 คีย์ไฟล์ตอบ para-aortic (ผิด) — para-aortic คือ landing zone หลักของ left testis; ตอบ inguinal"]});
add(F,"bladder-cis",[D("Uro 7")],{asked:["High-grade NMIBC หลัง TURBT → manage ต่อ (79D)"],
 pattern:["High-risk NMIBC (high grade, T1, CIS): re-TURBT 2–6 สัปดาห์ (T1/ไม่มี muscle ในชิ้นเนื้อ) → <b>BCG induction 6 สัปดาห์ + maintenance 1–3 ปี</b> (EAU 2024) · BCG เริ่ม 2–4 สัปดาห์หลัง TURBT ไม่ให้ทันที","Single immediate instillation = chemotherapy (MMC/gemcitabine) ใน low/intermediate risk · radical cystectomy = very high risk/BCG-unresponsive"],
 pearls:["79D Uro 7 คีย์ไฟล์ตอบ partial cystectomy (ผิด) — partial cystectomy ใช้น้อยมากใน MIBC ก้อนเดี่ยวที่ dome"]});
add(F,"utuc",[D("Uro 13")],{asked:["Upper ureter tumor 3 cm สูบบุหรี่ ไตอีกข้างปกติ → การรักษา (79D)"],pattern:["UTUC ≥2 cm = high risk → <b>RNU + bladder cuff excision</b> + single postoperative intravesical chemo"]});
ns(F,0,{id:"prostate-psa",title:"PSA สูงโดยไม่มี UTI → MRI prostate + biopsy",trend:"ถามขั้นต่อไปเมื่อ PSA สูง แยกจากการรักษา BPH",
 asked:["ชาย 65 LUTS ต่อมโตเล็กน้อย PSA 12 ไม่มี UTI → management"],
 pattern:["PSA สูง (&gt;4 หรือ age-specific) ไม่มีสาเหตุอื่น → <b>pre-biopsy mpMRI → targeted ± systematic biopsy</b> (EAU 2024)","ห้ามให้ 5-ARI ก่อนสืบค้น (ลด PSA ~50%) · antibiotic แล้ววัดซ้ำเฉพาะเมื่อมี prostatitis/UTI"],
 pearls:["ตัวลวง: alpha-blocker/5-ARI แล้วติดตาม (รักษา BPH ก่อนแยกมะเร็ง)"],members:[D("Uro 1")]});
ns(F,0,{id:"rcc",title:"Solid renal mass + hematuria → renal cell carcinoma",trend:"ให้ CT ก้อนไตแล้วถาม Dx เทียบกับ AML / TCC / XGP",
 asked:["Intermittent gross hematuria + น้ำหนักลด + CT solid enhancing renal mass → Dx"],
 pattern:["Solid enhancing mass ในเนื้อไต ไม่มีไขมัน = <b>RCC</b> · มี macroscopic fat (HU ติดลบ) = AML · filling defect ใน collecting system = urothelial carcinoma","T1a ≤4 cm → partial nephrectomy · ใหญ่/ลุกลาม → radical nephrectomy · paraneoplastic: polycythemia, hypercalcemia, HT, Stauffer"],
 members:[D("Uro 8")]});
ns(F,0,{id:"wilms",title:"Wilms tumor ในเด็ก (ก้อนจากไต ไม่ข้าม midline)",asked:["แม่คลำก้อนท้องลูกตอนอาบน้ำ US ก้อนในไต HT ไม่ข้าม midline ไม่มีท้องเสีย → Dx"],
 pattern:["Wilms: เด็กดูดี ก้อนเรียบจากไต ไม่ข้าม midline HT ~25% · Neuroblastoma: adrenal ข้าม midline เด็กป่วย calcification VMA/HVA สูง (VIP → watery diarrhea)","Mesoblastic nephroma = ทารก &lt;3 เดือน"],members:[D("Ped 12")]});
add(F,"obstructed-infected-kidney",[D("Uro 5"),D("Uro 14")],{asked:["ไข้ 39 + CVA tenderness + นิ่วท่อไต 5 mm + hydronephrosis → DJ stent (79D)","ไข้ + นิ่ว renal pelvis 5 mm <b>ไม่มี hydronephrosis</b> → antibiotics + hydration (79D)"],
 pattern:["ตัดสินด้วย <b>การอุดกั้น</b>: อุด + ติดเชื้อ → decompress (DJ/PCN) + IV ATB · ไม่อุด → ATB ตาม culture · ห้าม ESWL/URS/PCNL ขณะติดเชื้อ"]});
ns(F,1,{id:"ureteric-stone-kub",title:"Renal colic + KUB เงาทึบแนวท่อไต → ureteric stone",asked:["ปวดเอวซ้ายร้าวขาหนีบ CVA tenderness ให้ KUB → Dx (mid ureteric stone vs UPJO)"],
 pattern:["แนวท่อไตบน KUB: ปลาย transverse process → SI joint → ischial spine · upper (ถึงขอบบน sacrum) / mid (ทับ SI joint) / distal","NCCT KUB = มาตรฐานยืนยัน · phlebolith กลมมีจุดใสอยู่ต่ำใน pelvis"],pearls:["79D: รูปในไฟล์เป็นรูปใกล้เคียง เงาอยู่ระดับ L3 (upper ureter) แต่ช้อยมีแค่ mid ureteric stone กับ UPJO"],members:[D("Uro 6")]});
ns(F,1,{id:"citrate",title:"Citrate ป้องกันนิ่ว: จับ calcium เป็น soluble complex",asked:["ทำไม citrate ลดการเกิดนิ่ว"],
 pattern:["Citrate จับ Ca → ลด supersaturation ของ CaOx/CaP + ยับยั้ง crystal growth · K citrate → urine alkaline (ละลาย uric acid/cystine)","Hypocitraturia: distal RTA, chronic diarrhea, hypokalemia, thiazide"],members:[D("Uro 11")]});
add(F,"bladder-stone-bph",[D("Uro 12")],{asked:["ปัสสาวะสะดุดหยุดกลางสาย ดีขึ้นเมื่อเปลี่ยนท่า → bladder calculus (79D)"],pattern:["Interrupted stream ที่ดีขึ้นเมื่อเปลี่ยนท่า + terminal hematuria/ปวดปลายองคชาต = bladder stone (ball-valve ที่ bladder neck)"]});
add(F,"aur-bph",[D("Uro 15")],{asked:["AUR จาก BPH หลังสวนระบายแล้ว → manage ต่อ (79D)"],pattern:["คาสาย + <b>alpha-blocker</b> แล้ว <b>trial without catheter</b> · TWOC ล้มเหลว/retention ซ้ำ → TURP · ระวัง post-obstructive diuresis"]});
add(F,"uti-pregnancy",[D("Uro 4")],{asked:["ASB ในครรภ์ รักษาแล้ว culture ซ้ำยังเจอเชื้อเดิม → investigate (79D)"],pattern:["Persistent bacteriuria ในครรภ์ → รักษาซ้ำตาม sensitivity ± suppressive + <b>US KUB</b> (ไม่มีรังสี) หาความผิดปกติ"],pearls:["79C (หลังรักษาครั้งแรก) ตอบ repeat culture · 79D (culture ซ้ำแล้วยังเจอเชื้อเดิม) ตอบ US KUB"]});
add(F,"gonococcal-urethritis",[D("Uro 9")],{asked:["Urethral discharge + GN diplococci → Dx (79D)"]});
ns(F,2,{id:"emphysematous-pyelo",title:"Emphysematous pyelonephritis (เบาหวาน + gas ในเนื้อไต)",asked:["หญิงเบาหวาน ไข้สูง ปวดสีข้าง CT gas ใน renal parenchyma → Dx"],
 pattern:["แก๊สในเนื้อไต = EPN · ใน collecting system = emphysematous pyelitis · ใน bladder = emphysematous cystitis","รักษา: IV ATB + คุมน้ำตาล + percutaneous drainage; ไม่ตอบ/รุนแรง → nephrectomy (Huang–Tseng)"],members:[D("Uro 10")]});
add(F,"paraphimosis",[D("Ped 4")],{asked:["Physiologic phimosis เด็ก 3 ปี ไม่มี scar → topical steroid + คำแนะนำ (79D)"],pattern:["Physiologic phimosis: ไม่ดึงรั้ง · มีปัญหา → 0.05% betamethasone 4–8 สัปดาห์ · circumcision เมื่อ pathologic (scar/BXO), balanoposthitis ซ้ำ"]});
add(F,"epispadias",[D("Ped 16")],{asked:["Hypospadias (ventral meatus, chordee, dorsal hood) → ต้องหาอะไรร่วม = UDT (79D)"],pattern:["Hypospadias ร่วม UDT/inguinal hernia · hypospadias + คลำอัณฑะไม่ได้ = นึกถึง DSD (CAH) · ห้าม circumcision"]});
ns(F,3,{id:"udt",title:"Undescended testis: palpable → orchidopexy · non-palpable → laparoscopy",trend:"ถามทั้งเวลาผ่าตัดและการตรวจเมื่อคลำไม่ได้",
 asked:["เด็ก 4 ปี UDT คลำได้ใน inguinal canal → orchidopexy ทันที","เด็ก 18 เดือน non-palpable + US ไม่พบ → diagnostic laparoscopy"],
 pattern:["ส่งต่อถ้าไม่ลงภายใน 6 เดือน · orchidopexy ภายใน 18 เดือน (AUA/EAU) · hormone ไม่แนะนำ","Non-palpable: EUA → <b>diagnostic laparoscopy</b> (US/MRI ไม่แนะนำ) · bilateral non-palpable → แยก DSD/anorchia (karyotype, 17-OHP, hCG test)"],members:[D("Uro 16"),D("Uro 17"),D("Ped 16")]});
ns(F,3,{id:"hydrocele",title:"Non-communicating hydrocele (ส่องไฟผ่าน บีบไม่ยุบ)",asked:["ก้อนถุงอัณฑะขวาส่องไฟผ่าน นอน/บีบไม่ยุบ → Dx"],
 pattern:["Communicating: ขนาดเปลี่ยน บีบยุบ → herniotomy · non-communicating ทารก → observe 1–2 ปี · varicocele = bag of worms ซ้าย ยุบเมื่อนอน"],members:[D("Ped 7")]});
ns(F,3,{id:"cah-dsd",title:"DSD (คลำ gonad ไม่ได้ + hypospadias) → CAH salt-wasting: Na ต่ำ",asked:["DSD + UDT + hypospadias → electrolyte ที่ผิดปกติ"],
 pattern:["21-OH deficiency: <b>hyponatremia + hyperkalemia</b>, acidosis, hypoglycemia ช่วง 1–3 สัปดาห์ · 17-OHP สูง · hydrocortisone + fludrocortisone + NaCl","11β-OH: HT + hypokalemia"],members:[D("Ped 17")]});

/* ================= MCQ: Pediatric surgery ================= */
F="sum_mcq_pediatric-surgery.js";
intro(F,I79+"neonatal surgery เต็มรูปแบบ — Hirschsprung, NEC, double bubble, omphalocele, biliary atresia, HPS, intussusception, Meckel, Wilms, cystic hygroma, UDT/hydrocele/hypospadias/CAH, torticollis");
add(F,"ihps",[D("Ped 9")],{asked:["Non-bilious vomiting ยังหิว + olive RUQ → Dx (79D)"]});
add(F,"cleft-palate-timing",[D("Ped 8")],{asked:["Cleft palate ซ่อมตอนไหน → 1 ปี (79D)"]});
add(F,"cystic-hygroma",[D("Ped 13")],{asked:["ก้อน cystic ด้านข้างคอทารก ส่องไฟผ่าน → Dx (79D)"]});
add(F,"hydrocephalus",[D("Neuro 12")],{asked:["หัวโต + sunset eyes → congenital hydrocephalus (79D)"]});
add(F,"tof-bt-shunt",[D("CVT 6")],{asked:["Pulmonary atresia ductal-dependent → palliative BT shunt (79D)"],pattern:["เลือดไปปอดน้อย → shunt (BT/ductal stent) · มากเกิน → PA banding · TGA → arterial switch (Senning/Mustard = atrial switch)"]});
ns(F,1,{id:"vsd",title:"VSD: holosystolic murmur ที่ LLSB + เหนื่อย ไม่เขียว",asked:["Holosystolic murmur LLSB ไม่เขียวแต่เหนื่อย → Dx"],pattern:["ASD: ejection murmur LUSB + fixed split S2 · PDA: continuous machinery · TOF: เขียว"],members:[D("CVT 5")]});
add(F,"epispadias-ped",[D("Ped 16")],{asked:["Hypospadias → หา UDT ร่วม (79D)"]});
add(F,"paraphimosis-ped",[D("Ped 4")],{asked:["Physiologic phimosis → topical steroid + แนะนำ ห้ามดึง (79D)"]});
ns(F,"ทารกแรกเกิด: ลำไส้อุดตันและผนังหน้าท้อง",{id:"hirschsprung",title:"Hirschsprung disease (BE: transition zone)",asked:["ทารกขี้เทาออกช้า ท้องอืด + barium enema → Dx"],
 pattern:["BE: rectum แคบ + transition zone + colon ต้นโป่ง (rectosigmoid index &lt;1) · ยืนยัน <b>rectal suction biopsy</b> · เสี่ยง enterocolitis","Microcolon = meconium ileus / ileal atresia · small left colon = แม่เบาหวาน"],members:[D("Ped 1")]});
ns(F,"ทารกแรกเกิด: ลำไส้อุดตันและผนังหน้าท้อง",{id:"nec",title:"NEC: pneumatosis intestinalis",asked:["Preterm ท้องอืด ผนังท้องแดง → imaging ที่จำเพาะที่สุด"],
 pattern:["Pneumatosis = Bell IIA · portal venous gas · free air = perforation → ผ่าตัด/peritoneal drain","NPO, NG, IV fluid, broad-spectrum ATB; นมแม่/probiotics ลดความเสี่ยง"],members:[D("Ped 3")]});
ns(F,"ทารกแรกเกิด: ลำไส้อุดตันและผนังหน้าท้อง",{id:"duodenal-atresia",title:"Double bubble + bilious vomiting วันแรก → NG + IV fluid ก่อน duodenoduodenostomy",asked:["ทารก 1 วัน bilious vomiting + double bubble → manage ต่อ"],
 pattern:["Duodenal atresia (Down ~30%): NPO, NG decompression, IV fluid/electrolyte → echo → <b>duodenoduodenostomy</b>","มีแก๊สส่วนปลาย/อาเจียนเขียวเฉียบพลัน → upper GI study หา malrotation/volvulus ด่วน"],members:[D("Ped 15")]});
ns(F,"ทารกแรกเกิด: ลำไส้อุดตันและผนังหน้าท้อง",{id:"omphalocele",title:"Omphalocele: associated anomalies",asked:["Omphalocele → associated syndrome (ช้อยมี Down)"],
 pattern:["Omphalocele (กลางสะดือ มีถุง) anomaly 50–70%: trisomy 18/13/21, Beckwith-Wiedemann, cardiac, Cantrell · gastroschisis (ขวา ไม่มีถุง) anomaly น้อย"],pearls:["ช้อยในข้อสอบมีแค่ Down เป็นตัวที่สัมพันธ์ (trisomy 13/18, BWS ไม่มีในช้อย)"],members:[D("Ped 6")]});
ns(F,"Hepatobiliary และ GI ในเด็ก",{id:"biliary-atresia",title:"Biliary atresia → Kasai ก่อน 60 วัน",asked:["ทารก 6 สัปดาห์ เหลือง อุจจาระซีด US ไม่มี GB HIDA ไม่ขับ → next"],
 pattern:["Direct hyperbilirubinemia + acholic stool → US (triangular cord, GB เล็ก) → HIDA (ไม่ขับ) → intraoperative cholangiogram → <b>Kasai portoenterostomy</b> ก่อน 60 วัน","ล้มเหลว → liver transplant"],members:[D("Ped 5")]});
ns(F,"Hepatobiliary และ GI ในเด็ก",{id:"intussusception",title:"Intussusception stable → air enema reduction",asked:["Currant jelly stool + sausage mass + target sign, stable → next"],
 pattern:["Stable ไม่มี peritonitis → image-guided air/hydrostatic enema (สำเร็จ 80–90%) · peritonitis/free air/shock → laparotomy","เด็กโต/ซ้ำ → หา lead point (Meckel, polyp, lymphoma)"],members:[D("Ped 10")]});
ns(F,"Hepatobiliary และ GI ในเด็ก",{id:"meckel",title:"Meckel diverticulum: Tc-99m pertechnetate focal uptake RLQ",asked:["Painless rectal bleeding → Meckel scan finding ที่ support"],
 pattern:["Tc-99m pertechnetate จับ ectopic gastric mucosa → focal uptake RLQ พร้อมกระเพาะ · Rule of 2s"],members:[D("Ped 11")]});
ns(F,"Uro / onco / อื่น ๆ ในเด็ก",{id:"udt-ped",title:"Undescended testis",asked:["เด็ก 4 ปี UDT palpable → orchidopexy","18 เดือน non-palpable → diagnostic laparoscopy","Hypospadias → หา UDT"],
 pattern:["Orchidopexy ภายใน 18 เดือน · non-palpable → EUA + laparoscopy (ไม่ส่ง US/MRI)"],members:[D("Uro 16"),D("Uro 17"),D("Ped 16")]});
ns(F,"Uro / onco / อื่น ๆ ในเด็ก",{id:"hydrocele-ped",title:"Non-communicating hydrocele",asked:["ส่องไฟผ่าน บีบไม่ยุบ → Dx"],pattern:["Non-communicating ทารก → observe 1–2 ปี · communicating → herniotomy"],members:[D("Ped 7")]});
ns(F,"Uro / onco / อื่น ๆ ในเด็ก",{id:"cah",title:"CAH salt-wasting: hyponatremia",asked:["DSD + UDT + hypospadias → electrolyte"],pattern:["21-OH: Na ↓ K ↑ acidosis hypoglycemia · 17-OHP · hydrocortisone + fludrocortisone"],members:[D("Ped 17")]});
ns(F,"Uro / onco / อื่น ๆ ในเด็ก",{id:"wilms-ped",title:"Wilms tumor vs neuroblastoma",asked:["ก้อนจากไต ไม่ข้าม midline HT ไม่มีท้องเสีย → Dx"],pattern:["Wilms: ไต เรียบ ไม่ข้าม midline เด็กดูดี · Neuroblastoma: adrenal ข้าม midline ป่วย VMA สูง"],members:[D("Ped 12")]});
ns(F,"Uro / onco / อื่น ๆ ในเด็ก",{id:"medulloblastoma",title:"Posterior fossa tumor ในเด็ก: medulloblastoma",asked:["เด็ก 7 ปี ก้อน fourth ventricle truncal ataxia hydrocephalus → Dx"],pattern:["Vermis/4th ventricle + truncal ataxia = medulloblastoma · hemisphere cyst + nodule = pilocytic · pineal = Parinaud"],members:[D("Neuro 2")]});
ns(F,"Uro / onco / อื่น ๆ ในเด็ก",{id:"torticollis",title:"Congenital muscular torticollis → physiotherapy (stretching)",asked:["ทารก &lt;1 ปี torticollis จาก SCM → manage"],pattern:["PT stretching + จัดท่า สำเร็จ &gt;90% ก่อน 1 ปี · ล้มเหลว → SCM release · ตรวจ hip dysplasia ร่วม"],pearls:["ช้อยต้นฉบับเขียน muscle strengthening exercise — ความหมายคือ physiotherapy"],members:[D("Ped 14")]});
ns(F,"Uro / onco / อื่น ๆ ในเด็ก",{id:"craniosynostosis-eye",title:"Syndromic craniosynostosis ตาโปน → tarsorrhaphy",asked:["Craniosynostosis ตาโปน → most urgent and effective"],pattern:["Exorbitism → exposure keratopathy → tarsorrhaphy (ชั่วคราว) → definitive fronto-orbital/monobloc advancement"],members:[D("Plastic 1")]});

/* ================= MCQ: Colorectal ================= */
F="sum_mcq_colorectal.js";
intro(F,I79+"FAP (CHRPE), Peutz-Jeghers, UC, radiation proctitis, stoma necrosis, right colon cancer, stage III sigmoid cancer, Hirschsprung และ sigmoid volvulus");
add(F,"sigmoid-volvulus",[D("Ped 2")],{asked:["AXR coffee bean (อยู่ในหมวด Ped ของไฟล์ 79D) → Dx"],pattern:["Sigmoid: coffee bean ชี้ RUQ → endoscopic detorsion → elective sigmoidectomy · Cecal: ชี้ LUQ → right hemicolectomy"]});
ns(F,0,{id:"hirschsprung-colo",title:"Hirschsprung disease (barium enema transition zone)",asked:["ทารกขี้เทาออกช้า + BE → Dx"],pattern:["Transition zone + rectosigmoid index &lt;1 → rectal suction biopsy"],members:[D("Ped 1")]});
ns(F,1,{id:"right-colon-ca",title:"Right colon cancer: iron deficiency anemia",asked:["เหนื่อย ซีด IDA + ก้อน ascending colon → Dx"],pattern:["Right = ซีด IDA ก้อน · left = obstruction/change in bowel habit · IDA ในชาย/หญิงหมดประจำเดือน → colonoscopy + EGD"],members:[D("Colo 9")]});
ns(F,1,{id:"colon-ca-stage3",title:"Sigmoid cancer T4aN1 → resection with adequate mesocolon + adjuvant",asked:["CA sigmoid invade serosa N1 → treatment"],
 pattern:["Oncologic resection: CME/high ligation, LN ≥12, margin ≥5 cm → stage III adjuvant FOLFOX/CAPOX","Neoadjuvant ใน colon เฉพาะ T4b/bulky — ต่างจาก rectal"],members:[D("Colo 10")]});
ns(F,"Polyposis และ IBD (79D)",{id:"fap-chrpe",title:"FAP: polyp จำนวนมาก + CHRPE",asked:["Colonoscopy polyp เยอะ + ophthalmoscopy CHRPE → Dx"],pattern:["FAP (APC, AD) &gt;100 adenomas → prophylactic proctocolectomy · Gardner (osteoma, desmoid) · Turcot (brain tumor)"],members:[D("Colo 5")]});
ns(F,"Polyposis และ IBD (79D)",{id:"pjs",title:"Peutz-Jeghers: pigmentation ริมฝีปาก → hamartomatous polyp",asked:["รูปจุดดำริมฝีปาก/buccal → polyp ชนิด"],pattern:["PJS (STK11): hamartoma (small bowel) → intussusception, มะเร็งหลายอวัยวะ"],members:[D("Colo 12")]});
ns(F,"Polyposis และ IBD (79D)",{id:"uc",title:"Ulcerative colitis: inflammation ต่อเนื่องไม่มี skip lesion",asked:["Colonoscopy continuous sigmoid → descending → Dx"],pattern:["UC: mucosa ต่อเนื่องจาก rectum · Crohn: skip, transmural, fistula · ตรวจ stool แยก infectious/TB/amebic ก่อน"],members:[D("Colo 4")]});
ns(F,"Polyposis และ IBD (79D)",{id:"radiation-proctitis",title:"Chronic radiation proctitis: telangiectasia rectum หลังฉายรังสี",asked:["เคยฉายรังสี prostate + LGIB + telangiectasia ที่ rectum → Dx"],pattern:["รักษา: argon plasma coagulation (first-line), formalin, sucralfate enema, HBO · angiodysplasia อยู่ cecum"],members:[D("Colo 6")]});
ns(F,"Polyposis และ IBD (79D)",{id:"stoma-necrosis",title:"Stoma necrosis วันที่ 3 หลังผ่าตัดฉุกเฉิน",asked:["Stoma คล้ำ ไม่มี output (รูป) → Dx"],pattern:["ตรวจความลึกด้วย test tube + ไฟฉาย · เหนือ fascia → observe · ใต้ fascia → re-operation · late: parastomal hernia (บ่อยสุด), prolapse, stenosis"],members:[D("Colo 8")]});

/* ================= MCQ: Anorectal ================= */
F="sum_mcq_anorectal.js";
intro(F,I79+"chronic anal fissure (ยาทาก่อน LIS), high fistula (seton), hemorrhoid grade I, rectal prolapse ในหญิงสูงอายุ และ perianal abscess (I&D)");
add(F,"fistula-in-ano",[D("Colo 2")],{asked:["High transsphincteric fistula ไม่มี abscess → seton (79D)"],pattern:["Complex/high fistula → draining seton แล้ว sphincter-sparing definitive: LIFT, advancement flap (ASCRS 2022) · MRI pelvis ก่อนผ่าตัด complex"],pearls:["LIFT ก็ถูกได้ใน tract ที่ mature แล้ว — คีย์ตอบ seton"]});
ns(F,0,{id:"anal-fissure-79",title:"Chronic anal fissure ดีขึ้นน้อยจาก conservative → topical NTG/diltiazem",asked:["Chronic fissure + lifestyle + sitz bath ดีขึ้นน้อย → next"],pattern:["Ladder: fiber/sitz → topical NTG/CCB 6–8 สัปดาห์ → botox → LIS (ASCRS 2023)","Fissure ด้านข้าง/หลายแผล → Crohn, TB, HIV, CA"],members:[D("Colo 1")]});
ns(F,0,{id:"hemorrhoid-79",title:"Internal hemorrhoid grade I → lifestyle modification",asked:["Internal hemorrhoid grade I → management"],pattern:["I: fiber/น้ำ · I–II ล้มเหลว → RBL · III → RBL/surgery · IV → hemorrhoidectomy (Goligher)"],members:[D("Colo 3")]});
ns(F,0,{id:"rectal-prolapse",title:"Rectal prolapse ในหญิงสูงอายุ",asked:["หญิง 79 ปี ถ่ายไม่สุด ก้อนยื่นเวลาเบ่ง → Dx"],pattern:["Concentric folds = full-thickness prolapse · radial = hemorrhoid · ผ่าตัด abdominal rectopexy (แข็งแรง) หรือ perineal Altemeier/Delorme (เสี่ยงสูง)"],members:[D("Colo 7")]});
ns(F,0,{id:"perianal-abscess-79",title:"Perianal abscess + cellulitis → I&D + antibiotics",asked:["ปวดก้น fluctuant + erythema เป็น ๆ หาย ๆ → treatment"],pattern:["Prompt I&D (แผลใกล้ anal verge) · ATB เมื่อ cellulitis, sepsis, immunocompromised, DM · ห้ามทำ fistulotomy ทันทีถ้าไม่ชัด"],members:[D("Colo 11")]});

/* ================= MCQ: Burn / Trauma / Head & neck ================= */
add("sum_mcq_burn.js","parkland",[D("Plastic 4")],{asked:["Burn 30% TBSA ไม่โดนหน้า → first management = IV resuscitation ตาม Parkland (79D)"],pattern:["ผู้ใหญ่ ≥20% TBSA → IV LR (Parkland 4 mL/kg/% ครึ่งแรก 8 ชม.) · UO 0.5 mL/kg/hr · intubate เฉพาะ inhalation injury · escharotomy เฉพาะ circumferential full thickness · ไม่ให้ prophylactic systemic ATB"]});
intro("sum_mcq_burn.js",I79+"burn 30% TBSA ถาม first management (fluid ไม่ใช่ intubation)");
F="sum_mcq_trauma.js";
intro(F,I79+"Le Fort + shock (airway ก่อน), tension pneumothorax, chronic SDH, GCS, fingertip/facial laceration/mandible fracture");
ns(F,0,{id:"lefort-airway",title:"Mobile maxilla + เลือดออกปากจมูก + shock → orotracheal intubation",asked:["BP 80/40 mobile maxilla เลือดออก → next"],pattern:["A ก่อน C · orotracheal (ห้าม nasotracheal/NG ใน midface fracture) · ล้มเหลว → cricothyroidotomy"],members:[D("Plastic 3")]});
ns(F,"Breathing",{id:"tension-ptx",title:"Tension pneumothorax → needle decompression",asked:["Hypotension hypoxia trachea shift hyperresonance → next"],pattern:["Clinical Dx ไม่รอ CXR · ATLS 11: needle 4–5th ICS anterior to MAL (ผู้ใหญ่) → ICD · ห้าม PPV ก่อน decompress"],members:[D("CVT 8")]});
ns(F,"Head injury",{id:"csdh",title:"Chronic subdural hematoma (ล้ม 3 สัปดาห์ก่อน)",asked:["ล้มในห้องน้ำ 3 สัปดาห์ GCS drop + CT → Dx"],pattern:["Crescent hypodense ข้าม suture = chronic SDH · burr-hole drainage · acute hyperdense / subacute isodense"],members:[D("Neuro 5")]});
ns(F,"Head injury",{id:"gcs",title:"GCS calculation",asked:["Eye to pain, พูดเป็นคำไม่เข้าเรื่อง, withdraw → GCS"],pattern:["V3 = inappropriate words · V2 = incomprehensible sounds · M4 withdrawal · M3 decorticate · ใช้ best motor","GCS ≤8 → intubate"],pearls:["79D คีย์ไฟล์ตอบ E2V2M4 = 8 — คำว่า \"พูดเป็นคำ ๆ\" = V3 → 9"],members:[D("Neuro 13")]});
ns(F,"Maxillofacial และ soft tissue",{id:"mandible-fx",title:"Panoramic film: mandibular body fracture",asked:["OPG หลังโดนต่อย → Dx (ดู marker L/R)"],pattern:["ส่วน: symphysis, body (canine–ฟันกรามซี่ 3), angle, ramus, condyle · หา 2nd fracture เสมอ"],members:[D("Plastic 8")]});
ns(F,"Maxillofacial และ soft tissue",{id:"facial-laceration",title:"แผลฟันแก้มยาว: facial nerve + parotid duct",asked:["แผลขมับถึงคาง → อาการที่ไม่น่าพบ (upper eyelid ptosis)"],pattern:["CN VII: brow ptosis, lagophthalmos, drooling · duct/ต่อม → sialocele · eyelid ptosis = CN III/Horner"],members:[D("Plastic 7")]});
ns(F,"Maxillofacial และ soft tissue",{id:"fingertip",title:"Fingertip amputation ต้องการความยาว + sensation → V-Y advancement",asked:["Graphic designer ปลายนิ้วชี้ขาด → treatment"],pattern:["Homodigital V-Y (Atasoy) · volar oblique → cross-finger · thumb → Moberg · revision amputation เสียความยาว"],members:[D("Plastic 6")]});
F="sum_mcq_head-neck.js";
intro(F,I79+"pleomorphic adenoma ซ้ำ, cystic hygroma ซ้ำ และแผลแก้มกับ facial nerve");
add(F,"pleomorphic-adenoma",[D("Plastic 11")],{asked:["หญิงก้อนหน้าหู firm mobile ไม่มีอาการ → Dx (79D)"],pattern:["Pleomorphic adenoma = บ่อยสุด → superficial parotidectomy · Warthin = ชายสูงอายุสูบบุหรี่ bilateral · facial palsy/ปวด = มะเร็ง"]});
add(F,"cystic-hygroma",[D("Ped 13")],{asked:["ก้อนคอด้านข้างทารก cystic → Dx (79D)"]});
ns(F,"Facial soft tissue injury",{id:"facial-nerve-cheek",title:"แผลแก้มยาว: facial nerve branches vs eyelid ptosis",asked:["แผลฟันจากขมับถึงคาง → อาการที่ไม่น่าพบ"],pattern:["Temporal → brow ptosis · zygomatic → lagophthalmos · buccal/marginal → drooling · parotid → sialocele · upper eyelid ptosis = CN III/sympathetic"],members:[D("Plastic 7")]});

/* ================= MCQ: CVT ================= */
F="sum_mcq_cvt.js";
intro(F,I79+"AR signs (ถามแบบ NOT), TAVR อายุ 95, CABG conduit, CHD (VSD, BT shunt), IE prophylaxis, esophageal perforation, lung nodule, empyema, tension pneumothorax");
add(F,"aortic-stenosis",[D("CVT 1"),D("CVT 9")],{asked:["Sign ที่ไม่ใช่ของ AR → pulsus parvus et tardus (= AS) (79D)","อายุ 95 symptomatic severe AS → TAVR (79D)"],
 pattern:["AR: Corrigan, de Musset, Quincke, Traube, Duroziez (to-and-fro), wide pulse pressure · AS: pulsus parvus et tardus","Symptomatic severe AS → AVR · &gt;80 ปี/high risk → TAVR · &lt;65 → SAVR"]});
add(F,"cabg-lima",[D("CVT 2")],{asked:["Conduit ที่ไม่ใช้ใน CABG → PTFE (79D)"],pattern:["Conduit: LIMA, RIMA, radial, right gastroepiploic, saphenous vein · synthetic (PTFE) ใช้ไม่ได้ (ใช้ใน BT shunt/peripheral)"]});
add(F,"tof-bt-shunt",[D("CVT 6")],{asked:["Pulmonary atresia ductal-dependent → BT shunt (79D)"]});
ns(F,1,{id:"vsd-cvt",title:"VSD: holosystolic murmur LLSB",asked:["ไม่เขียวแต่เหนื่อย holosystolic LLSB → Dx"],pattern:["VSD LLSB pansystolic · ASD fixed split S2 · PDA machinery · Eisenmenger ห้ามปิด"],members:[D("CVT 5")]});
ns(F,1,{id:"ie-prophylaxis",title:"IE prophylaxis ก่อนทำฟัน: ใครไม่ต้องให้",asked:["ASD repaired ไม่มี residual vs TAVR, BT shunt, annuloplasty ring, AVR → ใครไม่ต้องให้"],
 pattern:["ให้เฉพาะ highest risk: prosthetic valve/material (รวม TAVR, ring), เคย IE, unrepaired/palliated cyanotic CHD (shunt), repaired CHD &lt;6 เดือนหรือมี residual (AHA 2021/ESC 2023) · amoxicillin 2 g ก่อน 30–60 นาที"],pearls:["ไฟล์ 79D มีโจทย์นี้ 2 แถว (CVT 7 และ CVT 12) รวมเป็นข้อเดียว"],members:[D("CVT 7")]});
ns(F,2,{id:"esophageal-perforation",title:"Iatrogenic esophageal perforation หลังใส่เครื่องมือ",asked:["หลังส่องกล้อง + subcutaneous emphysema + air ใน mediastinum → Dx"],pattern:["Water-soluble contrast/CT oral contrast · NPO ATB + repair/drain · Boerhaave = หลังอาเจียน · Mallory-Weiss = mucosal tear"],members:[D("CVT 3")]});
ns(F,2,{id:"lung-nodule",title:"Lung nodule: CT ก่อน · ก้อนไม่ตอบยา TB ขอบแย่ลง → ผ่าตัด",asked:["CXR เจอ nodule → investigation ต่อ (CT chest + upper abdomen)","ก้อน 2–3 cm IGRA บวก ให้ยา TB 3 เดือน ขอบ irregular ขึ้น → surgical removal"],
 pattern:["Nodule บน CXR → CT · high-risk (ใหญ่, spiculated, upper lobe) → tissue/resection · IGRA บวก = เคยติดเชื้อ ไม่ยืนยันว่าก้อนเป็น TB"],members:[D("CVT 4"),D("CVT 11")]});
ns(F,2,{id:"empyema",title:"Empyema pH 6.9 → ICD + IV antibiotics",asked:["Fluid empyema pH 6.9 → definitive management"],pattern:["หนอง/pH &lt;7.2/glucose &lt;60 → chest tube + ATB · loculated → tPA + DNase/VATS · organized peel → decortication"],members:[D("CVT 10")]});
ns(F,"Chest trauma",{id:"tension-ptx-cvt",title:"Tension pneumothorax → needle decompression",asked:["Trauma BP 80/70 trachea shift hyperresonance → next"],pattern:["ไม่รอ CXR · needle/finger decompression → ICD · PPV ก่อน decompress ทำให้แย่ลง"],members:[D("CVT 8")]});

/* ================= MCQ: Neuro ================= */
F="sum_mcq_neuro.js";
intro(F,I79+"ภาพ CT/MRI เกือบทุกข้อ — toxoplasmosis, medulloblastoma, acromegaly, brain mets, chronic SDH, CVT, SAH → CTA, brain abscess imaging/เชื้อ, ICH ใหญ่, pineal, GCS");
add(F,"lobar-ich-avm",[D("Neuro 6")],{asked:["หญิง 22 กินยาคุม + ICH BP ไม่สูง → cerebral venous thrombosis (79D)"],pattern:["ICH ในคนอายุน้อย: AVM vs <b>CVT</b> (ยาคุม/ตั้งครรภ์ — CTV/MRV, ให้ heparin แม้มี ICH)"]});
ns(F,0,{id:"sah-cta",title:"SAH บน CT → CT angiography",asked:["Thunderclap headache + CT เลือดใน basal cistern → next investigation"],pattern:["CT เห็น SAH → CTA (ลบ → DSA) · CT ปกติแต่สงสัย → LP · nimodipine, BP &lt;160, coil/clip เร็ว"],members:[D("Neuro 7")]});
ns(F,0,{id:"ich-surgery",title:"ICH ใหญ่ + midline shift + ซึมลง → clot evacuation",asked:["CT ICH ใหญ่มาก → management"],pattern:["Supratentorial deterioration → evacuation (ENRICH: lobar 30–80 mL MIS) · cerebellar &gt;15 mL + deterioration/hydrocephalus → ผ่าตัด · SBP 130–150 ทุกราย · ห้าม thrombolysis"],pearls:["ไฟล์ไม่ได้บอกขนาด/อาการ — ถ้าไม่มี mass effect คำตอบที่ปลอดภัยคือคุม BP"],members:[D("Neuro 9")]});
ns(F,0,{id:"stroke-risk",title:"Modifiable stroke risk ที่สำคัญที่สุด = hypertension",asked:["ชายสูงอายุ HT ดื่มเหล้า → major preventable risk"],pattern:["HT (PAR ~48%) · อายุ/เพศชาย แก้ไม่ได้"],members:[D("Neuro 11")]});
ns(F,1,{id:"brain-mets-79",title:"Brain metastases จาก breast cancer (MRI หลายก้อน)",asked:["Breast CA on chemo + neuro deficit + ICP สูง + imaging → finding"],pattern:["Mets: lung &gt; breast &gt; melanoma · gray-white junction · dexamethasone + SRS/WBRT · paraneoplastic cerebellar degeneration MRI ปกติ"],members:[D("Neuro 4")]});
ns(F,1,{id:"peds-posterior-fossa",title:"Medulloblastoma (fourth ventricle) และ pineal tumor (Parinaud)",asked:["เด็ก 7 ปี ก้อน fourth ventricle truncal ataxia → medulloblastoma","Upward gaze palsy + light-near dissociation → pineal gland tumor"],
 pattern:["Medulloblastoma: vermis, drop mets → MRI spine · pilocytic: hemisphere cyst + nodule · ependymoma: 4th ventricle floor","Pineal (germinoma): Parinaud + hydrocephalus, β-hCG/AFP"],members:[D("Neuro 2"),D("Neuro 10")]});
ns(F,1,{id:"acromegaly",title:"Acromegaly → somatotroph pituitary adenoma",asked:["นิ้ว คาง หน้าผากโต (รูป) → สาเหตุ"],pattern:["IGF-1 → OGTT GH ไม่ถูกกด → MRI → transsphenoidal surgery · prolactinoma → cabergoline ก่อน"],members:[D("Neuro 3")]});
ns(F,1,{id:"gbm-immunotherapy",title:"Promising immunotherapy ของ brain tumor (ทุกข้อ)",asked:["dendritic vaccine / CAR T / checkpoint inhibitor → ถูกทุกข้อ"],pattern:["GBM มาตรฐาน: resection + RT + temozolomide (Stupp) · MGMT methylation · immunotherapy อยู่ใน trials · IDH-mutant LGG: vorasidenib"],members:[D("Neuro ไม่มีเลข 1")]});
add(F,"brain-abscess",[D("Neuro 8"),D("Neuro 14")],{asked:["หลังผ่าตัด skull fracture ไข้ ปวดหัว สงสัย abscess → CT with contrast (79D)","เชื้อที่พบบ่อยใน brain abscess → S. aureus + Streptococcus (79D)"],
 pattern:["Imaging: MRI + Gd + DWI ดีสุด; ในช้อยไม่มี → CT with contrast · ห้าม LP","เชื้อ: Streptococcus (milleri/viridans) + S. aureus (post-op/trauma) + anaerobes → ceftriaxone + metronidazole ± vancomycin"]});
ns(F,2,{id:"toxo-hiv",title:"HIV CD4 &lt;100 + multiple ring-enhancing → toxoplasmosis",asked:["HIV CD4 40 ซึม อ่อนแรงซีกซ้าย aphasia + MRI → Dx"],pattern:["Toxo: หลายก้อน basal ganglia → pyrimethamine + sulfadiazine → ไม่ยุบ 2 สัปดาห์ → biopsy (PCNSL) · PML ไม่ enhance"],members:[D("Neuro 1")]});
add(F,"hydrocephalus-neuro",[D("Neuro 12")],{asked:["ทารกหัวโต + sunset eyes (รูป) → congenital hydrocephalus (79D)"]});
ns(F,"Head injury (79D)",{id:"csdh-neuro",title:"Chronic SDH",asked:["ล้ม 3 สัปดาห์ GCS drop + CT bilateral hypodense crescent → Dx"],pattern:["Chronic hypodense · burr hole + drain · MMA embolization ลด recurrence"],members:[D("Neuro 5")]});
ns(F,"Head injury (79D)",{id:"gcs-neuro",title:"GCS: V3 inappropriate words vs V2 sounds",asked:["Eye to pain, พูดเป็นคำไม่เข้าเรื่อง, withdraw → GCS"],pattern:["E2V3M4 = 9 (ถ้าเป็นเสียงอืออา = V2 → 8)"],pearls:["คีย์ไฟล์ 79D ตอบ 8"],members:[D("Neuro 13")]});

/* ================= MCQ: Onco ================= */
F="sum_mcq_onco.js";
intro(F,I79+"prostate (PSA → MRI biopsy), testis (inguinal orchiectomy, LN drainage), NMIBC/UTUC/RCC, Wilms, melanoma margin, lung nodule, FAP, colon cancer stage III, brain tumors");
add(F,"seminoma",[D("Uro 2"),D("Uro 3")],{asked:["ก้อนอัณฑะ → radical inguinal orchiectomy (79D)","LN ที่ไม่ใช่ทางแพร่ = inguinal (79D)"]});
add(F,"bladder-cis",[D("Uro 7")],{asked:["High-grade NMIBC → BCG (79D, คีย์ไฟล์ผิด)"]});
add(F,"utuc",[D("Uro 13")],{asked:["Upper ureter tumor 3 cm → RNU + cuff (79D)"]});
ns(F,0,{id:"prostate-psa-onco",title:"PSA 12 → MRI + biopsy",asked:["LUTS + PSA 12 ไม่มี UTI → management"],pattern:["mpMRI → targeted ± systematic biopsy"],members:[D("Uro 1")]});
ns(F,0,{id:"rcc-onco",title:"Renal cell carcinoma",asked:["Hematuria + น้ำหนักลด + solid renal mass → Dx"],pattern:["Solid enhancing ไม่มีไขมัน = RCC → partial/radical nephrectomy"],members:[D("Uro 8")]});
ns(F,0,{id:"wilms-onco",title:"Wilms tumor",asked:["ก้อนไตในเด็กไม่ข้าม midline → Dx"],pattern:["Wilms vs neuroblastoma (adrenal, ข้าม midline, VMA)"],members:[D("Ped 12")]});
ns(F,1,{id:"colon-ca-onco",title:"Colon cancer: right-sided IDA และ stage III resection + adjuvant",asked:["IDA + ก้อน ascending → Dx","T4aN1 sigmoid → CME + adjuvant"],pattern:["LN ≥12 + adjuvant FOLFOX/CAPOX ใน stage III"],members:[D("Colo 9"),D("Colo 10")]});
ns(F,1,{id:"fap-onco",title:"FAP + CHRPE",asked:["Polyp เยอะ + CHRPE → FAP"],pattern:["APC · prophylactic proctocolectomy"],members:[D("Colo 5")]});
ns(F,2,{id:"neuro-onco-79",title:"Brain tumors: mets, medulloblastoma, pineal, immunotherapy",asked:["Breast CA → brain mets","Fourth ventricle → medulloblastoma","Parinaud → pineal","Promising immunotherapy → ทุกข้อ"],pattern:["Mets หลายก้อน gray-white junction · medullo vermis · pineal Parinaud · GBM Stupp"],members:[D("Neuro 4"),D("Neuro 2"),D("Neuro 10"),D("Neuro ไม่มีเลข 1")]});
ns(F,3,{id:"lung-nodule-onco",title:"Lung nodule: CT ก่อน, ก้อนน่าสงสัย → resection",asked:["CXR nodule → CT chest","ก้อนไม่ตอบยา TB ขอบ irregular ขึ้น → ผ่าตัด"],pattern:["Fleischner/ACCP · IGRA บวกไม่ได้ยืนยันว่าก้อนเป็น TB"],members:[D("CVT 4"),D("CVT 11")]});
ns(F,"Skin cancer",{id:"melanoma-margin",title:"Melanoma Breslow 3.2 mm → wide excision 2 cm (+ SLNB)",asked:["Melanoma เท้าลึก 3.2 mm → margin"],pattern:["in situ 0.5–1 · ≤1 mm 1 cm · 1–2 mm 1–2 cm · &gt;2 mm 2 cm · SLNB ≥T1b · acral lentiginous พบบ่อยในเอเชีย"],members:[D("Plastic 9")]});

/* ================= MCQ: Plastic ================= */
F="sum_mcq_plastic.js";
intro(F,I79+"keloid prevention, melanoma margin, genital warts, craniosynostosis ตาโปน, Le Fort airway, skin graft, fingertip, facial nerve, mandible fracture, parotid tumor ซ้ำ");
add(F,"cleft-palate",[D("Ped 8")],{asked:["ซ่อม cleft palate ตอนไหน → 1 ปี (79D)"]});
add(F,"pleomorphic-adenoma",[D("Plastic 11")],{asked:["หญิงก้อนหน้าหู firm mobile → Dx (79D)"]});
ns(F,1,{id:"keloid-prevention",title:"ป้องกัน keloid ในคน keloid-prone (เจาะหู) → silicone gel",asked:["มี keloid ที่แขน มาเจาะหู → prevent"],pattern:["Prevention first-line = silicone gel/sheet (± pressure earring) · treatment keloid = intralesional triamcinolone · หลังตัด keloid → steroid/RT/pressure"],members:[D("Plastic 2")]});
ns(F,1,{id:"melanoma-plastic",title:"Melanoma 3.2 mm → wide excision margin 2 cm",asked:["Melanoma เท้าลึก 3.2 mm → treatment"],pattern:["Margin ตาม Breslow + SLNB ≥T1b"],members:[D("Plastic 9")]});
ns(F,1,{id:"genital-warts",title:"Anogenital warts ใน MSM → imiquimod",asked:["ชาย MSM รูป wart → treat"],pattern:["Patient-applied: imiquimod, podofilox, sinecatechins · provider: cryo, excision, TCA · ไม่มี systemic anti-HPV · condyloma lata = syphilis"],members:[D("Plastic 10")]});
ns(F,2,{id:"craniosynostosis",title:"Craniosynostosis ตาโปน → tarsorrhaphy",asked:["Most urgent and effective treatment ของตาโปน"],pattern:["Lubricant → lid taping → tarsorrhaphy · definitive fronto-orbital advancement"],members:[D("Plastic 1")]});
ns(F,"Trauma และ reconstruction",{id:"lefort-plastic",title:"Le Fort + shock → orotracheal intubation",asked:["Mobile maxilla เลือดออก BP 80/40 → next"],pattern:["A ก่อน C · ห้าม nasotracheal"],members:[D("Plastic 3")]});
ns(F,"Trauma และ reconstruction",{id:"skin-graft",title:"แผล granulation ดี 8×6 cm → split-thickness skin graft",asked:["หลัง debride NF ที่ anterior tibia granulation ขึ้น → wound management"],pattern:["Reconstructive ladder · granulation ดี → STSG · bone/tendon โผล่ → flap"],members:[D("Plastic 5")]});
ns(F,"Trauma และ reconstruction",{id:"fingertip-plastic",title:"Fingertip amputation → V-Y advancement",asked:["ต้องการความยาว + sensation → treatment"],pattern:["V-Y (transverse/dorsal oblique) · cross-finger (volar oblique) · Moberg (thumb)"],members:[D("Plastic 6")]});
ns(F,"Trauma และ reconstruction",{id:"facial-nerve-plastic",title:"แผลแก้มยาว: อาการที่ไม่น่าพบ = upper eyelid ptosis",asked:["แผลขมับถึงคาง → not likely finding"],pattern:["CN VII: brow ptosis, lagophthalmos, drooling · sialocele จาก parotid"],members:[D("Plastic 7")]});
ns(F,"Trauma และ reconstruction",{id:"mandible-plastic",title:"OPG: left mandibular body fracture",asked:["Panoramic film → Dx"],pattern:["ดู marker L/R · body = canine ถึงฟันกรามซี่ 3"],pearls:["ไฟล์ไม่มีคีย์ (\"ขึ้นกับรูป\") — ตอบจากรูปในไฟล์"],members:[D("Plastic 8")]});

/* ================= MCQ: Surgical infection ================= */
F="sum_mcq_surgical-infection.js";
intro(F,I79+"source control (stent, I&D, chest drain), EPN, toxoplasmosis, brain abscess, IE prophylaxis, ASB ในครรภ์, gonorrhea, warts");
add(F,"obstructed-infected-kidney",[D("Uro 5"),D("Uro 14")],{asked:["นิ่ว + ไข้ + hydronephrosis → DJ stent · ไม่มี hydronephrosis → ATB (79D)"]});
add(F,"brain-abscess",[D("Neuro 8"),D("Neuro 14")],{asked:["Post-op skull fracture สงสัย abscess → CT with contrast · เชื้อ = S. aureus + Strep (79D)"]});
add(F,"uti-pregnancy",[D("Uro 4")],{asked:["Persistent ASB ในครรภ์ → US KUB (79D)"]});
add(F,"gonorrhea",[D("Uro 9")],{asked:["GN diplococci urethral discharge → gonococcal urethritis (79D)"]});
ns(F,0,{id:"perianal-abscess-si",title:"Perianal abscess + cellulitis → I&D + antibiotics",asked:["Fluctuant perianal mass + erythema → treatment"],pattern:["I&D เสมอ · ATB เมื่อ cellulitis/sepsis/DM/immunocompromised"],members:[D("Colo 11")]});
ns(F,0,{id:"empyema-si",title:"Empyema → ICD + IV antibiotics",asked:["Empyema pH 6.9 → management"],pattern:["Drain + ATB ครอบคลุม anaerobe · loculated → tPA/DNase/VATS · peel → decortication"],members:[D("CVT 10")]});
ns(F,0,{id:"nf-graft",title:"Necrotizing fasciitis หลัง debride → STSG",asked:["NF ที่ anterior tibia granulation ดี → wound coverage"],pattern:["Debridement ซ้ำ + ATB → NPWT → STSG/flap"],members:[D("Plastic 5")]});
ns(F,1,{id:"epn",title:"Emphysematous pyelonephritis",asked:["เบาหวาน + gas ใน renal parenchyma → Dx"],pattern:["IV ATB + percutaneous drainage ± nephrectomy"],members:[D("Uro 10")]});
ns(F,1,{id:"warts-si",title:"Anogenital warts → imiquimod",asked:["MSM + wart → treat"],pattern:["Imiquimod/cryo/excision · ตรวจ HIV/syphilis"],members:[D("Plastic 10")]});
ns(F,2,{id:"toxo-si",title:"Cerebral toxoplasmosis ใน AIDS",asked:["HIV CD4 40 ring-enhancing หลายก้อน → Dx"],pattern:["Pyrimethamine + sulfadiazine + leucovorin · TMP-SMX prophylaxis CD4 &lt;100"],members:[D("Neuro 1")]});
ns(F,2,{id:"ie-prophylaxis-si",title:"IE prophylaxis ก่อนทำฟัน",asked:["ใครไม่ต้องให้ → ASD repaired ไม่มี residual"],pattern:["Highest-risk เท่านั้น · amoxicillin 2 g"],members:[D("CVT 7")]});

/* ================= OSCE ================= */
F="sum_osce_hx.js";
intro(F,"MDCU79 RoC (OSCE 7): ซักประวัติก้อนเต้านมหญิง 20 ปี + แนะนำการตรวจต่อ");
ns(F,4,{id:"hx-breast-mass-young",title:"Breast mass หญิงอายุ 20 ปี — ซักประวัติ + แนะนำ (US ไม่ใช่ mammogram)",trend:"ถามทั้งการซักประวัติและคำแนะนำ next step",
 asked:["ซักประวัติ breast mass 20 ปี + แนะนำว่าต้องทำอะไรต่อ"],
 pattern:["ก้อน: onset ขนาด โตเร็ว เจ็บ สัมพันธ์รอบเดือน · nipple discharge/retraction · ผิวหนัง · รักแร้ · risk: menarche, ฮอร์โมน, ครอบครัว breast/ovary (BRCA), รังสีหน้าอก · ถามความกังวล","Advice: ส่วนใหญ่ fibroadenoma · <b>triple assessment</b>: PE + <b>breast US</b> (อายุ &lt;30) + CNB ถ้าน่าสงสัย · fibroadenoma ยืนยัน → ติดตาม/ผ่าตัดถ้าโต &gt;3 cm"],
 kw:["breast ultrasound","triple assessment","core needle biopsy","family history","fibroadenoma"],members:[O("7#1"),O("7#2")]});

F="sum_osce_img.js";
intro(F,"MDCU79 RoC เพิ่มสถานีภาพหลากหลาย: CXR (pneumothorax, CDH), CT (acute SDH), AXR (LBO), barium swallow, รูปคลินิก (DVT, omphalocele, melanoma, burn, biliary atresia, Courvoisier, preauricular sinus, thrombosed hemorrhoid) และแผนภาพไส้เลื่อน");
add(F,"gallstone-us",[O("3#2")],{asked:["ตรวจท้องคนปวด RUQ แล้วให้ US → Dx symptomatic gallstone (79C)"]});
add(F,"diverticulosis",[O("5#1"),O("5#2"),O("5#3")],{asked:["Colonoscopy: indication · รูป diverticulosis · complication 2 อย่าง (79C)"],pattern:["Complication: diverticulitis (abscess, perforation, fistula, stricture) และ diverticular bleeding · colonoscopy indication: diagnostic, screening, therapeutic"]});
add(F,"achalasia",[O("16#1"),O("16#2"),O("16#3"),O("16#4")],{asked:["Barium swallow: บรรยาย · ชื่อ investigation · Dx · ตรวจเพิ่ม 2 อย่าง (79C)"],pattern:["ตรวจเพิ่ม: high-resolution manometry + EGD ± biopsy (ตัด pseudoachalasia)"],pearls:["79C ไฟล์ไม่บอกว่าฟิล์มเป็นโรคอะไร — เฉลยเขียนแบบ achalasia; ถ้าเป็น irregular stricture ให้ตอบ CA esophagus"]});
add(F,"ureteric-stone",[O("21#1"),O("21#2")],{asked:["IVP ureteric stone → Dx + management (79C)"]});
ns(F,0,{id:"lbo",title:"Large bowel obstruction (supine + upright) → NG NPO IV fluid",asked:["รูปแรก/รูปสองท่าอะไร + บรรยาย · Dx 1 โรค · Tx"],
 pattern:["Supine: SB + LB dilated ไม่มีลมใน distal colon/rectum · upright: multiple air-fluid levels","Tx: NPO, NG, IV LR + แก้ electrolyte → CT หาสาเหตุ (CRC บ่อยสุด) → stent/resection/stoma"],kw:["supine","upright","large bowel obstruction","NG decompression"],members:[O("29#1"),O("29#2"),O("29#3")]});
ns(F,"Chest film และตำแหน่งสาย",{id:"pneumothorax-icd",title:"Primary spontaneous pneumothorax → ICD (tube thoracostomy)",asked:["ชายผอมสูง 27 ปี film → Dx · อุปกรณ์ (ตัวอักษร + ชื่อ) · ชื่อหัตถการ"],
 pattern:["Visceral pleural line + ไม่มี lung marking · ICD + underwater seal · tube thoracostomy 4–5th ICS triangle of safety","BTS 2023: อาการน้อย → conservative/aspiration/ambulatory"],members:[O("6#1"),O("6#2"),O("6#3")]});
ns(F,"Chest film และตำแหน่งสาย",{id:"cdh",title:"Left congenital diaphragmatic hernia → intubate (ห้าม bag-mask) + OG",asked:["CXR ทารก → Dx + Tx"],pattern:["Bowel loops ในอกซ้าย mediastinum shift ขวา · ETT ห้าม BMV + OG + IV · repair เมื่อ stable"],kw:["no bag-mask","orogastric decompression","delayed repair"],members:[O("30#1"),O("30#2")]});
ns(F,"Chest film และตำแหน่งสาย",{id:"tube-position",title:"ตำแหน่งสายบนฟิล์ม: NG tube และ PICC",asked:["Film มี NG → ชื่อสาย","PICC → ปลายสายอยู่ที่ใด"],pattern:["NG: ปลายใต้กระบังลมซ้าย · PICC: lower SVC/cavoatrial junction"],members:[O("11#1"),O("17#2")]});
ns(F,"CT brain",{id:"acute-sdh",title:"Acute SDH ข้างขวา + midline shift",asked:["CT brain → Dx (ร่วมกับคำนวณ GCS)"],pattern:["Crescent hyperdense ข้าม suture · &gt;10 mm หรือ shift &gt;5 mm → craniotomy"],members:[O("18#3")]});
ns(F,5,{id:"thrombosed-hemorrhoid",title:"Thrombosed external hemorrhoid → excision ≤72 ชม.",asked:["รูปก้อนม่วงที่ 6 นาฬิกา → Dx + management"],pattern:["≤72 ชม. excision · &gt;72 ชม. conservative (sitz, fiber, analgesic)"],members:[O("9#1"),O("9#2")]});
ns(F,5,{id:"dvt-leg",title:"DVT หลังบินนาน (ขาบวมแดง ชีพจรปกติ)",asked:["บรรยายขา · Dx · ตรวจยืนยัน · common cause 3 อย่าง"],pattern:["Compression/duplex US · Virchow's triad · DOAC ≥3 เดือน"],kw:["unilateral leg swelling","compression ultrasound","Virchow's triad"],members:[O("19#1"),O("19#2"),O("19#3"),O("19#4")]});
ns(F,5,{id:"omphalocele-img",title:"Omphalocele: anomaly + initial management",asked:["รูป omphalocele → Dx · ความผิดปกติที่ต้องหา · initial management"],pattern:["หา trisomy 13/18/21 (karyotype), cardiac (echo), BWS (glucose), Cantrell","คลุมถุง ตะแคงขวา NG IV fluid อุณหภูมิ → primary/staged closure"],members:[O("20#1"),O("20#2"),O("20#3")]});
ns(F,5,{id:"acral-melanoma",title:"Acral lentiginous melanoma ที่เท้า",asked:["Melanoma เท้า → Dx + management"],pattern:["Excisional biopsy → WLE ตาม Breslow + SLNB ≥T1b → adjuvant anti-PD-1 (IIB–IV)"],members:[O("23#1"),O("23#2")]});
ns(F,5,{id:"biliary-atresia-img",title:"ทารกอุจจาระซีด: DDx + ดูแลที่ รพช.",asked:["DDx · ทำงาน รพช. ดูแลอย่างไร"],pattern:["DDx: biliary atresia, choledochal cyst, Alagille, neonatal hepatitis, metabolic","Direct bilirubin + US + vitamin K + ส่งต่อด่วน · &lt;60 วัน DISIDA · &gt;60 วัน IOC → Kasai (เฉลยไฟล์)"],members:[O("24#1"),O("24#2")]});
ns(F,5,{id:"burn-depth",title:"Burn depth + wound care",asked:["ระดับและความลึก ดูจากอะไร · ทำแผลอย่างไร"],pattern:["1st แดงเจ็บ · 2nd superficial พองชมพูเจ็บมาก · 2nd deep ซีดเจ็บน้อย refill ช้า · 3rd leathery ไม่เจ็บ thrombosed veins","ตื้น → dressing + topical antimicrobial · ลึก → excision + STSG"],members:[O("25#1"),O("25#2")]});
ns(F,5,{id:"courvoisier",title:"Courvoisier sign → periampullary tumor",asked:["Organ A · sign · DDx 4 · investigation"],pattern:["Gallbladder · Courvoisier · CA HOP, ampulla, distal CCA, duodenum · US → CT pancreas protocol"],kw:["Courvoisier's sign","periampullary","CT pancreas protocol"],members:[O("26#1"),O("26#2"),O("26#3"),O("26#4")]});
ns(F,5,{id:"preauricular-sinus",title:"Infected preauricular sinus → complete excision",asked:["Dx · Tx ให้หายขาด"],pattern:["ATB ± drain ตอนอักเสบ → complete excision ของ tract"],members:[O("28#1"),O("28#2")]});
ns(F,"Diagram",{id:"hernia-diagram",title:"แผนภาพไส้เลื่อนผนังหน้าท้อง 6 ชนิด + risk factors",asked:["ชื่อไส้เลื่อนแต่ละอัน · risk factor 2 อย่าง"],pattern:["Epigastric, umbilical, incisional, Spigelian, inguinal, femoral · risk: ไอเรื้อรัง ท้องผูก BPH ยกของ อ้วน + ผนังอ่อนแอ"],members:[O("27#1"),O("27#2")]});

F="sum_osce_inst.js";
intro(F,"MDCU79 RoC: three-way Foley (คะแนน 20/40/40), ชุดเครื่องมือ cholecystectomy + ไหม, NG + ถุงรองรับ, Hartmann (NG + ostomy bag), PICC, chest tube");
add(F,"chest-tube",[O("6#2")],{asked:["Pneumothorax → เลือกอุปกรณ์ (ตัวอักษร) = chest tube (79C)"]});
add(F,"three-way-foley",[O("8#1"),O("8#2"),O("8#3")],{asked:["Name (20) · วิธีใช้ (40) · indication (40) (79C)"]});
add(F,"retractors",[O("10#1")],{asked:["บรรยายผ่าถุงน้ำดี: retractor ผนังท้อง = Richardson · ดึงตับ = Deaver (79C)"]});
add(F,"metzenbaum",[O("10#1")],{asked:["Curved Metzenbaum scissors (79C)"]});
add(F,"closed-suction-drain",[O("10#1")],{asked:["Drain ท้ายผ่าตัด = JP drain (79C)"]});
add(F,"hemostat-kocher",[O("10#1")],{asked:["Clamp โค้งหนีบ cystic duct (right-angle/curved) (79C)"]});
add(F,"ng-tube",[O("11#1"),O("11#2"),O("11#3"),O("11#4")],{asked:["Film NG → ชื่อสาย · อุปกรณ์รับของเสีย · ชื่อหัตถการ · วัดปริมาณด้วยอะไร (79C)"]});
add(F,"ostomy",[O("12#1")],{asked:["Hartmann: laparotomy · NG decompress · ostomy bag เก็บอุจจาระ (ICD เป็นตัวลวง) (79C)"]});
ns(F,3,{id:"picc",title:"PICC line: ชื่อ ตำแหน่งปลาย ประโยชน์",asked:["รูป PICC → ชื่อ · ปลายสายบน film · ประโยชน์ 2 ข้อ"],pattern:["Basilic vein · ปลาย lower SVC/CAJ · chemo/TPN/vasopressor, ใช้ระยะยาว, ไม่เสี่ยง pneumothorax"],members:[O("17#1"),O("17#2"),O("17#3")]});

F="sum_osce_pe.js";
intro(F,"MDCU79 RoC: ตรวจท้องคนปวด RUQ + US gallstone, DRE ไม่มีอาจารย์ (บรรยายต่อม + Dx), คำนวณ GCS 2 แบบ, Babinski");
add(F,"abd-cholecystitis",[O("3#1"),O("3#2")],{asked:["ตรวจท้องคนปวดท้อง แล้วให้ US → symptomatic gallstone (79C)"],pattern:["Murphy ลบ ไม่มีไข้ = biliary colic → elective LC · Murphy บวก + ไข้ = acute cholecystitis"]});
add(F,"dre-bph",[O("4#1"),O("4#2")],{asked:["DRE บนหุ่นไม่มีอาจารย์ → บรรยาย prostate + Dx (79C)"],pattern:["บรรยาย: size, surface, consistency, median sulcus, nodule, mobility, tenderness"]});
ns(F,2,{id:"gcs-calc",title:"คำนวณ GCS (best motor)",asked:["ลืมตาเมื่อเรียก สับสน ทำตามสั่ง → 13","หลับตา ครางอืออา ซ้าย decerebrate ขวา withdraw → 7"],pattern:["Confused = V4 · sounds = V2 · withdrawal = M4 · ใช้ best motor"],members:[O("18#1"),O("18#2")]});
ns(F,2,{id:"babinski",title:"Babinski sign (ขูดใต้เท้า)",asked:["ชื่อการตรวจ · ผลและการแปลผล"],pattern:["ลากขอบนอกฝ่าเท้าจากส้นเท้าไปฐานนิ้วโป้ง · กระดกขึ้น = UMN lesion · ทารกบวกได้ปกติ"],members:[O("22#1"),O("22#2")]});

F="sum_osce_proc.js";
intro(F,"MDCU79 RoC: simple stitch 2 อัน + ปิดแผล, ใส่ถุงมือ + ฉีดยาชา (เลือกเข็มชมพู/ม่วง), หัตถการ ICD, NG intubation");
add(F,"simple-interrupted-cut",[O("1#1")],{asked:["เย็บ simple stitch 2 อัน (79C)"]});
add(F,"wound-dressing",[O("1#2")],{asked:["ปิดแผลที่เย็บ (79C)"]});
add(F,"open-gloving",[O("2#1")],{asked:["ใส่ถุงมือก่อนฉีดยาชา (79C)"]});
add(F,"la-infiltration",[O("2#2")],{asked:["ฉีดยาชา: เข็มชมพู (18G) ดูดยา เข็มม่วง (เล็ก) ฉีด (79C)"],pattern:["Lidocaine max 4.5 mg/kg (7 กับ adrenaline) · aspirate ก่อนฉีด · ฉีดผ่านขอบแผล"]});
add(F,"ng-tube",[O("11#3")],{asked:["ชื่อหัตถการ = NG intubation/gastric decompression (79C)"]});
ns(F,3,{id:"icd-insertion",title:"Tube thoracostomy (ICD) สำหรับ pneumothorax",asked:["หัตถการชื่อว่าอะไร"],pattern:["Intercostal chest drainage 4–5th ICS anterior–mid axillary line (triangle of safety) เหนือขอบบนซี่โครง"],members:[O("6#3")]});

F="sum_osce_suture.js";
intro(F,"MDCU79 RoC: ไหมผูกท่อน้ำดีและไหมปิดแผล — ซองปิดชื่อด้วยเทปดำ ถามชื่อการค้า generic multi/mono absorb");
add(F,"polyglactin",[O("10#2")],{asked:["ไหมผูกท่อน้ำดี: ชื่อการค้า generic filament absorbability (79C)"]});
add(F,"silk",[O("10#2")]);
add(F,"pds",[O("10#3")],{asked:["ไหมปิดแผล (fascia): PDS (79C)"]});
add(F,"nylon",[O("10#3")]);
add(F,"use-by-tissue",[O("10#2"),O("10#3")],{asked:["เลือกไหมผูก bile duct (absorbable) และปิดแผล (79C)"],pattern:["ท่อน้ำดี/ทางเดินปัสสาวะใช้ absorbable (non-absorbable เป็น nidus นิ่ว)"]});


/* flow + kw for new OSCE sections */
function fk(f,id,flow,kw){const x=sec(f,id);if(!x.flow)x.flow=flow;if(!x.kw)x.kw=kw;}
fk("sum_osce_hx.js","hx-breast-mass-young",["ผู้ป่วยจำลองหญิง 20 ปีคลำพบก้อนเต้านม → ซักประวัติ (มีอาจารย์ดู)","จบด้วยให้แนะนำว่าต้องทำอะไรต่อ"],null);
fk("sum_osce_img.js","lbo",["ให้ AXR 2 ภาพ → บอกท่าและบรรยาย","→ Dx 1 โรค → การรักษา"],null);
fk("sum_osce_img.js","cdh",["ให้ CXR ทารก → Dx","→ การรักษา (supportive + definitive)"],null);
fk("sum_osce_img.js","dvt-leg",["นักกีฬาบินกลับ ขาขวาปวดบวมแดง pulse ปกติ + รูปขา → บรรยาย","→ Dx → ตรวจยืนยัน → สาเหตุ 3 อย่าง"],null);
fk("sum_osce_img.js","courvoisier",["ให้ LFT CBC electrolyte + รูปผิวเหลืองและตาเหลือง มีอวัยวะ A → ถาม organ A","→ ชื่อ sign → DDx 4 → investigation"],null);
fk("sum_osce_img.js","pneumothorax-icd",["ชายผอมสูง 27 ปี + film → Dx","→ เลือกอุปกรณ์บนโต๊ะ (ตัวอักษร + ชื่อ) → ชื่อหัตถการ"],["primary spontaneous pneumothorax","chest tube + underwater seal","tube thoracostomy","triangle of safety"]);
fk("sum_osce_img.js","tube-position",["ให้ film ที่มีสาย → ชื่อสาย / ตำแหน่งปลายสาย"],["NG tube","lower SVC / cavoatrial junction"]);
fk("sum_osce_img.js","acute-sdh",["คำนวณ GCS 2 แบบ → ให้ CT brain → Dx"],["acute subdural hematoma","crescent hyperdense","midline shift"]);
fk("sum_osce_img.js","thrombosed-hemorrhoid",["รูปก้อนรอบทวารที่ 6 นาฬิกา → Dx → management"],["thrombosed external hemorrhoid","excision within 72 h","conservative after 72 h"]);
fk("sum_osce_img.js","omphalocele-img",["รูปทารก omphalocele → Dx","→ ความผิดปกติที่ต้องหา → initial management"],["omphalocele","karyotype","echocardiogram","Beckwith-Wiedemann","cover the sac","NG decompression"]);
fk("sum_osce_img.js","acral-melanoma",["รูป/คำบอก melanoma ที่เท้า → Dx → management"],["acral lentiginous melanoma","excisional biopsy","Breslow thickness","wide local excision","sentinel lymph node biopsy"]);
fk("sum_osce_img.js","biliary-atresia-img",["รูปเด็กอุจจาระซีด + LFT bilirubin สูง → DDx","→ ถ้าทำงาน รพช. จะดูแลอย่างไร"],["biliary atresia","choledochal cyst","Alagille","ultrasound","refer","DISIDA","intraoperative cholangiogram","Kasai before 60 days"]);
fk("sum_osce_img.js","burn-depth",["รูปแผลไฟไหม้ → ระดับ/ความลึก + ดูจากอะไร → ทำแผลอย่างไร"],["superficial partial thickness","deep partial thickness","full thickness","blister","capillary refill","STSG"]);
fk("sum_osce_img.js","preauricular-sinus",["รูปหน้าหู → Dx → Tx ให้หายขาด"],["preauricular sinus","complete excision of sinus tract"]);
fk("sum_osce_img.js","hernia-diagram",["แผนภาพผนังหน้าท้องมีไส้เลื่อนหลายตำแหน่ง → บอกชื่อแต่ละอัน → risk factor 2 อย่าง"],["epigastric","umbilical","incisional","Spigelian","inguinal","femoral","increased intra-abdominal pressure"]);
fk("sum_osce_inst.js","picc",["รูป PICC → ชื่อ → ให้ film ถามตำแหน่งปลาย → ประโยชน์ 2 ข้อ"],["PICC","lower SVC","cavoatrial junction","TPN / chemotherapy","long-term access"]);
fk("sum_osce_pe.js","gcs-calc",["บรรยายการตอบสนอง 2 สถานการณ์ → คำนวณ GCS แต่ละแบบ"],["E3V4M6 = 13","E1V2M4 = 7","best motor response"]);
fk("sum_osce_pe.js","babinski",["อาจารย์ให้ขูดใต้เท้า → ชื่อการตรวจ → ผลและการแปลผล"],["Babinski sign","plantar reflex","extensor plantar response","upper motor neuron lesion"]);
fk("sum_osce_proc.js","icd-insertion",["ต่อจาก film pneumothorax และเลือกอุปกรณ์ → ถามชื่อหัตถการ"],["tube thoracostomy","intercostal chest drainage","4th–5th ICS","triangle of safety"]);

/* write back */
for(const [f,o] of Object.entries(files)){fs.writeFileSync(DIR+f,"SUMM.push("+JSON.stringify(o,null,1)+");\n");}
console.log("updated",Object.keys(files).length,"files");

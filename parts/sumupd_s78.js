// Update Subspe High-yield summaries with MDCU78 RoA–RoD MCQ (data_b4–b7) + MDCU78 RoA–RoC OSCE (osce_b13–b15) — 20 Nov 2026
// Run from repo root: node parts/sumupd_s78.js  (idempotent: skips members already present / sections already existing)
const fs=require("fs");const DIR="data_subspe/";
const K=(ro,o)=>"MDCU78|Ro"+ro+"|"+o;
const A=o=>K("A",o),B=o=>K("B",o),C=o=>K("C",o),D=o=>K("D",o);
/* OSCE sub-question keys: all subs of a station */
const OS={};for(const n of [13,14,15]){const Q=[];new Function("QB",fs.readFileSync(DIR+"osce_b"+n+".js","utf8"))(Q);Q.forEach(q=>{const c=(q.parts||[]).reduce((a,p)=>a+(p.subs||[]).length,0);OS[q.ro+"|"+q.orig]=c;});}
const S=(ro,o)=>{const n=OS["Ro"+ro+"|"+o];if(!n)throw Error("no OSCE "+ro+" "+o);return Array.from({length:n},(_,i)=>K(ro,o+"#"+(i+1)));};
const files={};
function load(f){if(files[f])return files[f];global.SUMM=[];require("../"+DIR+f);files[f]=SUMM[0];return files[f];}
function sec(f,id){const s=load(f);for(const g of s.groups)for(const x of g.sections)if(x.id===id)return x;throw Error("no section "+f+" "+id);}
function add(f,id,mem,extra){const x=sec(f,id);mem.forEach(m=>{if(!x.members.includes(m))x.members.push(m)});
  if(extra)for(const k of ["asked","pattern","pearls","flow","kw"])if(extra[k]){x[k]=x[k]||[];extra[k].forEach(l=>{if(!x[k].includes(l))x[k].push(l)})}}
function ns(f,g,o){const s=load(f);let grp=typeof g==="number"?s.groups[g]:s.groups.find(x=>x.title===g);
  if(!grp){grp={title:g,sections:[]};s.groups.push(grp);}
  for(const G of s.groups)if(G.sections.some(x=>x.id===o.id))return;grp.sections.push(o);}
function intro(f,li){const s=load(f);if(s.intro.includes(li))return;s.intro=s.intro.replace(/<\/ul>\s*$/,"<li>"+li+"</li></ul>");}
const I="AC Subspe MDCU78 (RoA–RoD) เพิ่มเข้ามา: ";
let F;

/* ================= MCQ: Burn ================= */
F="sum_mcq_burn.js";
intro(F,I+"Parkland ครึ่งแรก 8 ชม. (หักน้ำที่ได้แล้ว/เวลาที่ผ่าน), แผลตื้นรักษาด้วย dressing, เด็ก burn ที่หน้า");
add(F,"parkland",[A("2"),B("6")],{asked:["Parkland: TBSA 45% ได้น้ำมาแล้ว 500 mL ใน 3 ชม. → rate ที่เหลือใน 5 ชม. (78A)","Parkland 70 kg 20% → ปริมาณใน 8 ชม.แรก (78B)"],pattern:["8 ชม.แรก<b>นับจากเวลาไหม้</b> → หักทั้งเวลาเดินทางและน้ำที่ได้ไปแล้ว แล้วหารด้วยเวลาที่เหลือ"]});
ns(F,"Wound care และ disposition (78)",{id:"superficial-burn-tx",title:"Superficial partial-thickness burn → dressing (ไม่ต้อง graft)",trend:"78B, 78D ถามแผลชมพู ชื้น เจ็บมาก",
 asked:["น้ำร้อนลวก แผลแดงชื้น blister เจ็บมาก cap refill ดี → รักษา (78B)","น้ำร้อนลวกรักแร้ สีชมพู เจ็บ → sulfadiazine vs STSG vs FTSG (78D)"],
 pattern:["Superficial partial-thickness หายเอง 2–3 สัปดาห์ → ทำความสะอาด + topical antimicrobial/silver dressing · STSG สำหรับ deep partial/full thickness"],members:[B("7"),D("62")]});
ns(F,"Wound care และ disposition (78)",{id:"peds-burn-face",title:"เด็ก burn 8% ที่หน้าและคอ → admit (special area) ไม่ต้อง IV ตามสูตร",
 asked:["เด็ก burn 8% head and neck → management (78B จดสั้น)"],pattern:["เด็ก IV resuscitation เมื่อ ≥10% · burn ที่หน้า มือ เท้า perineum ข้อพับ = เกณฑ์ admit/ส่งต่อ burn center · ประเมิน inhalation injury"],members:[B("60")]});

/* ================= MCQ: Colorectal ================= */
F="sum_mcq_colorectal.js";
add(F,"hirschsprung-colo",[B("31")],{asked:["ทารกไม่ถ่ายขี้เทา 24 ชม. + blast sign → investigation ยืนยัน (78B คีย์ manometry; gold standard จริง = rectal suction biopsy)"]});
ns(F,"Anorectal malformation (78)",{id:"arm-colo",title:"Anorectal malformation ในทารกชาย: perineal fistula → primary repair · meconium ในปัสสาวะ → cross-table/colostomy",
 asked:["ไม่มีรูทวาร + meconium ออกท่อปัสสาวะ → initial investigation (78B)","ไม่ถ่ายขี้เทา 2 วัน ปัสสาวะใส + ภาพ perineal fistula → ทำอะไรต่อ (78D)"],
 pattern:["รอ 16–24 ชม. ดู perineum + ปัสสาวะ · perineal fistula → anoplasty/minimal PSARP ได้เลย · meconium ในปัสสาวะ (rectourethral fistula) → colostomy · ไม่ชัด → prone cross-table lateral (&lt;1 cm primary, &gt;1 cm colostomy) · VACTERL work-up"],members:[B("32"),D("2")]});

/* ================= MCQ: CVT ================= */
F="sum_mcq_cvt.js";
intro(F,I+"massive hemoptysis, coronary territory/branches, TGA, valve choice (PVE, ผู้หญิงอยากมีลูก, INR mechanical MVR), dissection type B, mediastinal mass, cardioplegia");
add(F,"vv-ecmo",[A("12")],{asked:["Severe ARDS จาก influenza refractory → VV-ECMO (78A คีย์: VA support ทั้งปอดและหัวใจ vs VV แค่ปอด)"]});
add(F,"empyema",[B("10")],{asked:["Pleural fluid glucose 30, LDH 1200, pH ต่ำ → chest tube (78B)"]});
add(F,"thymoma-mg",[B("12")],{asked:["Ptosis + diplopia ดีขึ้นเมื่อพัก + CXR anterior mass → thymoma (78B)"]});
add(F,"vsd-cvt",[B("45")],{asked:["ทารก 2 เดือน heart failure + holosystolic LLSB (78B แต่งจากช้อย VSD/ASD)"]});
add(F,"lung-nodule",[B("53"),D("42")],{asked:["CXR เจอก้อนที่ apex → CT chest with contrast (78B)","สูบบุหรี่ spiculated 3.5 cm staging ปกติ → lobectomy (78D)"]});
add(F,"aortic-stenosis",[B("56")],{asked:["Chest pain + dyspnea + syncope → aortic stenosis (78B)"]});
add(F,"tension-ptx-cvt",[B("51")],{asked:["อุบัติเหตุรถยนต์ + CXR + tachycardia → thoracostomy (78B)"]});
ns(F,2,{id:"massive-hemoptysis",title:"Massive hemoptysis หลัง TB → protect airway + O2 ก่อน",asked:["ไอเป็นเลือดมากหลังรักษา TB, V/S stable → appropriate management (78A)"],
 pattern:["ผู้ป่วยตายจาก asphyxia → airway (bleeding side down, large ET tube) → localize (CTA, bronchoscopy) → bronchial artery embolization → surgery ถ้าล้มเหลว"],members:[A("4")]});
ns(F,0,{id:"coronary-territory",title:"Coronary territory และแขนง: LAD → anterior septum + apex · LAD–diagonal, LCx–OM, RCA–PDA/PL",
 asked:["Angiogram LAD ตีบ → echo hypokinesia ตรงไหน (78A คีย์ C anterior septum + apex)","จับคู่ coronary artery กับ branch (78D)"],pattern:["LAD: anterior wall, anterior 2/3 septum, apex · LCx: lateral · RCA: inferior, posterior septum, RV","Acute marginal = RCA · obtuse marginal = LCx · diagonal = LAD"],members:[A("5"),D("41")]});
ns(F,1,{id:"tga",title:"TGA: เขียวมากแรกเกิด ไม่หอบ, single loud S2, egg on a string",asked:["ทารก 2 ชม. เขียวไม่หอบ + CXR → Dx (78A คีย์: egg on string)","กินแล้วเขียว + single S2 + CXR (78B)"],
 pattern:["PGE1 → balloon atrial septostomy → arterial switch ภายใน 2–3 สัปดาห์","ร้องไห้แล้วหายเขียว = choanal atresia (ไม่ใช่ TGA)"],members:[A("10"),B("44")]});
ns(F,0,{id:"valve-choice",title:"เลือกลิ้นหัวใจ: PVE ต้อง redo replacement · หญิงอยากตั้งครรภ์ → bioprosthesis · mechanical MVR INR 2.5–3.5",
 asked:["Mechanical MVR 30 ปี เกิด prosthetic valve endocarditis → ลิ้นชนิดใด (78A คีย์ bileaflet)","หญิง 38 severe MS อยากมีลูก → bioprosthetic เพราะเลี่ยง anticoagulant (78D)","Warfarin + MVR INR 2.3 → เพิ่ม warfarin ให้ถึงเป้า (78B)"],
 pattern:["Mechanical: ทนนาน ต้อง warfarin ตลอด (MVR INR 3.0, AVR 2.5) · Bioprosthetic: &gt;65 ปี หรือหญิงที่จะตั้งครรภ์ · DOAC ห้ามใน mechanical valve","Caged-ball valve เลิกใช้แล้ว"],members:[A("11"),D("44"),B("57")]});
ns(F,2,{id:"mediastinal-mass",title:"Mediastinal mass ตามตำแหน่ง: posterior = neurogenic tumor",asked:["Lateral CXR ก้อนติดกระดูกสันหลัง → neurogenic tumor (78B)"],
 pattern:["Anterior: thymoma, teratoma, thyroid, lymphoma · Middle: bronchogenic/pericardial cyst, nodes · Posterior: neurogenic (MRI ดู dumbbell)"],members:[B("11")]});
ns(F,0,{id:"antiplatelet-cabg",title:"Aspirin ก่อน CABG: irreversible COX inhibition (→ ลด TXA2)",asked:["ยา antiplatelet ก่อน CABG กลไก (78B คีย์ B&gt;A: COX &gt; TXA2)"],
 pattern:["Aspirin คงไว้ก่อน CABG · หยุด clopidogrel/ticagrelor 5 วัน, prasugrel 7 วัน"],members:[B("13")]});
ns(F,0,{id:"aortic-dissection",title:"Aortic dissection: uncomplicated type B → IV beta-blocker · type A → ผ่าตัด · PE ไม่ใช่สาเหตุตาย",
 asked:["Tearing chest pain ร้าวหลัง stable ไม่มี malperfusion → initial management (78B คีย์ B beta-blocker; รูปในไฟล์เป็น type A)","สาเหตุตายที่ไม่ใช่ของ dissection (78B: PE)"],
 pattern:["Anti-impulse: HR &lt;60, SBP 100–120 (beta-blocker ก่อน vasodilator) · complicated B → TEVAR · type A → emergency surgery","Complication: rupture/tamponade, AR, MI (RCA), stroke, mesenteric/renal/limb ischemia"],members:[B("14"),B("15")]});
ns(F,0,{id:"cardioplegia",title:"Cardioplegia: high K⁺ → depolarized diastolic arrest + hypothermia",asked:["cardioplegia action (78B จดสั้น)"],
 pattern:["K⁺ สูงทำให้ membrane depolarized → Na channel inactivated → หยุดใน diastole · ให้ antegrade/retrograde"],members:[B("61")]});
ns(F,1,{id:"asd-murmur",title:"ASD: ejection murmur upper sternal border + fixed split S2",asked:["เด็ก 2 เดือน crescendo–decrescendo murmur เบา ๆ upper sternal border → ASD (78D)"],
 pattern:["Murmur ของ ASD = pulmonary flow murmur ไม่ใช่เลือดผ่านรู · VSD = holosystolic LLSB · PDA = continuous"],members:[D("43")]});

/* ================= MCQ: Head & neck ================= */
F="sum_mcq_head-neck.js";
intro(F,I+"Stensen duct injury, thyroglossal duct cyst (Sistrunk, US ก่อนผ่าตัด), branchial cleft cyst, torticollis, preauricular sinus");
add(F,"facial-nerve-cheek",[B("4"),D("61")],{asked:["แผลแก้มแนว tragus → mid upper lip → Stensen duct (78B คีย์ E; 78D ตรง AC)"],pattern:["Stensen duct + buccal branch อยู่แนวเดียวกัน (กึ่งกลางของ tragus → mid upper lip)"]});
ns(F,"ก้อนที่คอในเด็ก (78)",{id:"tgdc",title:"Thyroglossal duct cyst: ขยับตามแลบลิ้น → US คอก่อน → Sistrunk",asked:["ก้อนกลางคอขยับตามแลบลิ้น → management (78B: Sistrunk)","Central neck mass moving with deglutition → next (78D: neck US)"],
 pattern:["US ยืนยันต่อมไทรอยด์ปกติก่อนผ่าตัด · Sistrunk = cyst + mid hyoid + tract ถึง foramen cecum"],members:[B("35"),D("5")]});
ns(F,"ก้อนที่คอในเด็ก (78)",{id:"branchial-cleft",title:"Second branchial cleft cyst: ขอบหน้า SCM",asked:["รูปก้อนข้างคอ 1A/1B → 1st vs 2nd branchial cleft vs TGDC (78D)"],
 pattern:["2nd (บ่อยสุด): ขอบหน้า SCM, tract ระหว่าง ICA–ECA → tonsillar fossa · 1st: ใกล้หู/parotid"],members:[D("6")]});
ns(F,"ก้อนที่คอในเด็ก (78)",{id:"torticollis-hn",title:"Congenital muscular torticollis",asked:["ทารก 3 เดือนเอียงคอ (รูปนี้เป๊ะ ๆ) (78B)"],pattern:["SCM fibrosis → เอียงไปข้างเดียวกัน คางหันฝั่งตรงข้าม · physiotherapy first-line · ตรวจ DDH"],members:[B("36")]});
ns(F,"ก้อนที่คอในเด็ก (78)",{id:"preauricular",title:"Preauricular sinus ติดเชื้อซ้ำ → excision ตอนหายอักเสบ",asked:["รูหน้าหู บวมเจ็บ 2 ครั้ง → management (78B)"],pattern:["Complete excision ของ tract (supra-auricular approach) ตอน quiescent · BOR syndrome → hearing + renal US"],members:[B("50")]});

/* ================= MCQ: Neuro ================= */
F="sum_mcq_neuro.js";
intro(F,I+"NPH, prolactinoma, low-grade glioma, ICH (BP vs ICP), CPA tumor, EDH, Kernohan, SDH, meningioma, cryptococcal meningitis, SAH (LP/xanthochromia), neurocysticercosis");
add(F,"neuro-hemostasis",[A("7")],{asked:["Neurosurgery OR ห้ามเลือดด้วยอะไร → bipolar cautery (78A)"]});
add(F,"frontoethmoidal-encephalocele",[B("9")],{asked:["ทารกก้อนใหญ่สันจมูก (รูปนี้เป๊ะ ๆ) → defect ที่ nasoethmoid (78B)"]});
add(F,"gcs-neuro",[B("41"),D("25")],{asked:["GCS 9 = moderate (78D)","คำนวณ GCS (78B จดแค่ \"GCS\")"]});
add(F,"peds-posterior-fossa",[B("46")],{asked:["Pineal germ cell tumor (78B มีแค่ช้อย)"]});
add(F,"brain-abscess",[B("48")],{asked:["Brain abscess investigation → MRI + DWI; ห้าม LP (78B)"]});
add(F,"brain-mets-79",[D("21")],{asked:["Multiple ring-enhancing → primary ที่ least likely = HCC/liver (78D)"]});
add(F,"csdh-neuro",[D("22")],{asked:["CT crescent ซ้าย + shift → left SDH (78D: ระวังอ่านข้างผิด)"]});
ns(F,1,{id:"nph",title:"Normal pressure hydrocephalus: gait + incontinence + dementia",asked:["ผู้สูงอายุเดินผิดปกติ ปัสสาวะราด หลงลืม + MRI → NPH (78A)"],pattern:["CSF tap test ทำนายผล · VP shunt"],members:[A("3")]});
ns(F,1,{id:"prolactinoma",title:"Prolactinoma: amenorrhea–galactorrhea → dopamine agonist",asked:["Amenorrhea + galactorrhea → pituitary tumor (78A)","Galactorrhea amenorrhea treatment → dopamine agonist (78B)"],pattern:["Cabergoline first-line แม้ macroadenoma · ตัด pregnancy, ยา, hypothyroid ก่อน"],members:[A("8"),B("55")]});
ns(F,1,{id:"lgg",title:"Low-grade (grade 2) glioma → maximal safe resection",asked:["Grade II glioma treatment (78A คีย์: maximal safe resection)"],pattern:["High-risk หลังผ่าตัด → RT + PCV/TMZ"],members:[A("9")]});
ns(F,1,{id:"cpa-meningioma",title:"CPA tumor (vestibular schwannoma) และ convexity meningioma",asked:["Facial numbness V2 + hearing loss + tinnitus ข้างเดียว → vestibular schwannoma (78B)","อ่อนแรงซีกซ้ายค่อยเป็น 15 เดือน + papilledema → convexity meningioma (78B)"],
 pattern:["Vestibular schwannoma โต → กด CN V ก่อน CN VII · meningioma: dural tail, slow-growing"],members:[B("38"),B("54")]});
ns(F,0,{id:"ich-bp-icp",title:"Hypertensive ICH: เล็กไม่มี shift → ลด BP (SBP ~140) · ใหญ่ + shift → ลด ICP (mannitol) + consult",asked:["BP 220/150 basal ganglia ICH ไม่มี shift → BP reduction (78C)","BP 220/150 ICH ใหญ่ + midline shift → IV mannitol (78C คีย์ B)"],
 pattern:["AHA 2022: SBP เป้า 140 (หลีกเลี่ยง &lt;130) · herniation signs → mannitol/hypertonic saline + neurosurgery"],members:[C("2"),C("3")]});
ns(F,0,{id:"sah-lp",title:"Thunderclap headache CT ปกติ → LP (xanthochromia คงอยู่ ~2 สัปดาห์)",asked:["ชาย 80 ปวดหัวมาก CT ปกติ → LP (78D)","Xanthochromia persist กี่วัน (78B)"],
 pattern:["CT ≤6 ชม. ไวเกือบ 100% · หลังจากนั้น LP ≥12 ชม. หา xanthochromia (อยู่ได้ ~2 สัปดาห์)"],members:[D("24"),B("62")]});
ns(F,"Localization และ herniation (78)",{id:"localization",title:"Hemiparesis + aphasia = cortical/subcortical frontal (ไม่ใช่ internal capsule)",asked:["อ่อนแรงแขนขา + aphasia → localize (78B คีย์ frontal subcortical)"],
 pattern:["Aphasia = cortical sign → ตัด lacunar/internal capsule"],members:[B("37")]});
ns(F,"Localization และ herniation (78)",{id:"kernohan",title:"Kernohan's notch: ipsilateral hemiparesis จากกด cerebral peduncle ฝั่งตรงข้าม",asked:["Kernohan, explain? (78B)"],pattern:["Pupil บอกข้างก้อนแม่นกว่า hemiparesis"],members:[B("40")]});
ns(F,4,{id:"edh",title:"Epidural hematoma: lucid interval + biconvex hyperdense",asked:["รถล้ม หมดสติสั้น ๆ แล้วตื่น แล้วซึมลง → CT biconvex (78B)"],pattern:["MMA · ไม่ข้าม suture · ผ่าตัดเมื่อ &gt;30 mL"],members:[B("39")]});
ns(F,2,{id:"crypto-meningitis",title:"HIV CD4 ต่ำ + ไข้ปวดหัว ไม่มี focal deficit → cryptococcal meningitis",asked:["ชายวัยรุ่น CD4 &lt;200 ไข้ ปวดหัว → เชื้ออะไร (78D)"],pattern:["CrAg, opening pressure สูง → amphotericin + flucytosine, therapeutic LP · toxo = focal + ring lesions"],members:[D("23")]});
ns(F,2,{id:"ncc",title:"Neurocysticercosis: multiple cyst with scolex ในวัยรุ่นชัก",asked:["CT brain multiple lesion อายุ 14 → cysticercosis (78C)"],pattern:["Cyst with dot · albendazole + steroid + AED"],members:[C("5")]});
ns(F,3,{id:"sws",title:"Port-wine stain + seizure → Sturge–Weber",asked:["รูปปานแดงที่หน้า → Sturge–Weber (78B)"],pattern:["GNAQ, V1 port-wine stain + leptomeningeal angioma + glaucoma"],members:[B("42")]});
ns(F,3,{id:"crouzon-icp",title:"Crouzon: ICP สูงต้องแก้เร่งด่วน",asked:["รูป Crouzon อะไรเร่งด่วนสุด: keratitis vs increased ICP (78D)"],pattern:["Priority: airway → ICP → eye protection · Crouzon มือปกติ (Apert = syndactyly)"],members:[D("65")]});

/* ================= MCQ: Onco ================= */
F="sum_mcq_onco.js";
intro(F,I+"melanoma margin, prolactinoma, mediastinal tumors, bladder (BCG, SCC), Bosniak, testis DDx, lung nodule, PSA screening, TCC site, SCT");
add(F,"melanoma-margin",[A("1"),B("49")],{asked:["Melanoma 2.5 mm → WLE 2 cm (78A)","Melanoma management (78B จดสั้น — แต่ง 1.5 mm: margin 1–2 cm + SLNB)"]});
add(F,"neuro-onco-79",[A("8"),A("9"),B("38"),B("46"),B("54"),B("55"),D("21")],{asked:["Prolactinoma, low-grade glioma, vestibular schwannoma, pineal GCT, meningioma, brain mets (78)"]});
add(F,"thymoma-mg",[B("12")],{asked:["MG + anterior mediastinal mass → thymoma (78B)"]});
add(F,"bladder-cis",[B("19")],{asked:["High-grade NMIBC หลัง TURBT → BCG (78B)"]});
add(F,"rcc-onco",[B("20")],{asked:["Renal cystic lesion enhance → surgical excision (78B: complicated cyst)"]});
add(F,"seminoma",[B("28")],{asked:["ก้อนอัณฑะแข็งไม่เจ็บ: DDx ที่ไม่น่าใช่ = epididymo-orchitis (78B)"]});
add(F,"lung-nodule-onco",[B("53"),D("42")],{asked:["CXR ก้อน apex → CT (78B) · spiculated 3.5 cm staging ปกติ → lobectomy (78D)"]});
add(F,"prostate-psa-onco",[D("81")],{asked:["ชาย 52 อยากตรวจคัดกรองมะเร็งต่อมลูกหมาก → shared decision (78D)"]});
ns(F,3,{id:"mediastinal-onco",title:"Posterior mediastinal mass → neurogenic tumor",asked:["Lateral CXR ก้อนหลัง (78B)"],pattern:["Posterior = neurogenic; anterior = thymoma/teratoma/lymphoma/thyroid"],members:[B("11")]});
ns(F,0,{id:"bladder-scc",title:"Bladder SCC สัมพันธ์ chronic infection/irritation",asked:["มะเร็งกระเพาะปัสสาวะที่สัมพันธ์กับการติดเชื้อเรื้อรัง (78B)"],pattern:["Schistosomiasis, indwelling catheter, stone → SCC · urachal → adenocarcinoma"],members:[B("22")]});
ns(F,0,{id:"tcc-site",title:"Urothelial carcinoma: bladder บ่อยสุด · urethra น้อยสุด",asked:["TCC least likely occurs in (78D)"],pattern:["Distal urethra = squamous epithelium → SCC มากกว่า"],members:[D("85")]});
ns(F,"Pediatric tumor (78)",{id:"sct-onco",title:"Sacrococcygeal teratoma → early excision + coccygectomy",asked:["Prenatal SCT คลอดแล้ว (รูป) → management (78D)"],pattern:["ต้องตัด coccyx · ติดตาม AFP"],members:[D("4")]});

/* ================= MCQ: Pediatric surgery ================= */
F="sum_mcq_pediatric-surgery.js";
intro(F,I+"ARM, Hirschsprung, NEC, malrotation (Ladd), jejunal atresia, choledochal cyst, biliary atresia, omphalocele, pyloric stenosis, Meckel, UDT, VUR, TGDC/branchial, torticollis, cleft palate, foreign body");
add(F,"biliary-atresia",[A("6")],{asked:["ทารก 1 เดือน เหลือง direct hyperbili → Kasai (78A)"]});
add(F,"vsd",[B("45")],{asked:["(78B) VSD heart failure 1–2 เดือน"]});
add(F,"cleft-palate-timing",[B("8"),D("63")],{asked:["ภาวะแทรกซ้อนที่ severe สุดของ cleft palate (78B คีย์ speech delay)","Cleft palate ผ่าตอนกี่ขวบ → 1 ปี (78D)"]});
add(F,"udt-ped",[B("23")],{asked:["15 เดือน bilateral palpable UDT → bilateral orchiopexy (78B)"]});
add(F,"omphalocele",[B("26"),B("58")],{asked:["Omphalocele สัมพันธ์ syndrome ใด (78B คีย์ Down)","Initial management omphalocele (78B)"]});
add(F,"ihps",[B("29")],{asked:["Pyloric stenosis → hypochloremic hypokalemic metabolic alkalosis (78B)"]});
add(F,"hirschsprung",[B("31")],{asked:["ทารกไม่ถ่ายขี้เทา + blast sign → investigation (78B)"]});
add(F,"arm",[B("32"),D("2")],{asked:["Meconium ทางท่อปัสสาวะ → cross-table (78B) · perineal fistula → PSARP (78D)"]});
add(F,"nec",[B("33"),C("7"),D("1")],{asked:["Preterm bloody stool + AXR → NEC (78B, 78D)","Acute abdomen อายุ 6 เดือน ที่ least likely = NEC (78C)"]});
add(F,"meckel",[B("34")],{asked:["เด็ก 6 ขวบ BRBPR มาก tachycardia → IV fluid ก่อน (78B)"]});
add(F,"torticollis",[B("36")],{asked:["ทารก 3 เดือนเอียงคอ (78B)"]});
add(F,"medulloblastoma",[B("46")],{asked:["Pineal germ cell tumor (78B)"]});
add(F,"sct",[D("4")],{asked:["SCT หลังคลอด (รูป) → excision + coccygectomy (78D)"]});
add(F,"craniosynostosis-eye",[D("65")],{asked:["Crouzon เร่งด่วนสุด → ICP (78D)"]});
ns(F,1,{id:"tga-ped",title:"TGA: cyanosis แรกเกิด + egg on string",asked:["ทารก 2 ชม. เขียว + CXR (78A)","กินแล้วเขียว + single S2 (78B)"],pattern:["PGE1 → septostomy → arterial switch"],members:[A("10"),B("44")]});
ns(F,1,{id:"asd-ped",title:"ASD: ejection murmur upper sternal border + fixed split S2",asked:["ทารก 2 เดือน murmur เบา ๆ upper sternal border (78D)"],pattern:["ไม่มีอาการในวัยทารก ปิดเองได้ถ้าเล็ก"],members:[D("43")]});
ns(F,1,{id:"encephalocele-ped",title:"Frontoethmoidal encephalocele: defect ที่ nasoethmoid",asked:["ทารกก้อนใหญ่สันจมูก → defect location (78B)"],pattern:["ก้อนกลางจมูกในเด็ก → MRI/CT ก่อน ห้าม biopsy"],members:[B("9")]});
ns(F,3,{id:"malrotation",title:"Malrotation with midgut volvulus: Ladd's bands · peritonitis → explore lap",asked:["Ladd band คืออะไร (78C)","ทารก 6 สัปดาห์ bloody stool + tender + tachycardia → explore lap (78D)"],
 pattern:["Ladd's bands: cecum → right lateral wall ข้าม duodenum · stable → UGI · unstable → ผ่าตัดเลย"],members:[C("1"),D("3")]});
ns(F,3,{id:"jejunal-atresia",title:"Jejunal atresia: few dilated loops/triple bubble",asked:["Bilious vomiting แรกเกิด + AXR (รูปนี้เป๊ะ ๆ) → jejunal atresia (78B)"],pattern:["Vascular accident in utero · double bubble = duodenal"],members:[B("30")]});
ns(F,3,{id:"peds-hernia",title:"Inguinal hernia ในเด็ก = patent processus vaginalis",asked:["Etiology ของ inguinal hernia ในเด็ก (78B)"],pattern:["Herniotomy (high ligation) · incarceration สูงในขวบปีแรก"],members:[B("27")]});
ns(F,4,{id:"choledochal",title:"Choledochal cyst: pain + jaundice + RUQ mass",asked:["เด็ก 4 ขวบ ปวดท้องซ้ำ เหลือง ก้อน RUQ (78B)"],pattern:["Excision + Roux-en-Y hepaticojejunostomy (เสี่ยง cholangiocarcinoma)"],members:[B("25")]});
ns(F,4,{id:"foreign-body",title:"เหรียญในกระเพาะ ไม่มีอาการ → observe · button battery ต้องแยก",asked:["X-ray เด็กเห็นวัตถุกลมในท้อง → management (78B)"],pattern:["Esophageal coin → remove · gastric → observe · button battery esophagus = emergency"],members:[B("59")]});
ns(F,5,{id:"vur",title:"VUR grade IV: CAP ก่อน, ผ่าตัดเมื่อ breakthrough · VCUG ปกติ → หยุดยา",asked:["VUR grade IV + recurrent UTI → CAP (78B คีย์: reimplant ถ้า breakthrough)","VUR grade 4 กินยา 3 ปี VCUG ปกติ → stop ATB (78D)"],pattern:["Surgery: breakthrough febrile UTI, new scar · RIVUR"],members:[B("24"),D("84")]});
ns(F,5,{id:"neck-ped",title:"ก้อนที่คอเด็ก: TGDC (US → Sistrunk) และ 2nd branchial cleft cyst",asked:["TGDC → Sistrunk (78B) · central mass ขยับตามกลืน → neck US (78D)","รูปก้อนข้างคอ → 2nd branchial cleft (78D)"],
 pattern:["TGDC ขยับตามแลบลิ้น · branchial cleft 2 อยู่ขอบหน้า SCM"],members:[B("35"),D("5"),D("6")]});
ns(F,5,{id:"preauricular-ped",title:"Preauricular sinus ติดเชื้อซ้ำ → excision",asked:["รูหน้าหูอักเสบ 2 ครั้ง → management (78B)"],pattern:["ผ่าตัดตอนหายอักเสบ"],members:[B("50")]});
ns(F,5,{id:"peds-burn",title:"เด็ก burn 8% ที่หน้า/คอ → admit",asked:["เด็ก burn 8% head and neck (78B)"],pattern:["IV fluid เมื่อ ≥10% · special area → admit"],members:[B("60")]});

/* ================= MCQ: Plastic ================= */
F="sum_mcq_plastic.js";
intro(F,I+"suture technique (half-buried), free flap, Stensen duct, Waters view, Parkland, cleft palate, encephalocele, Sturge–Weber, laceration closure, pressure injury, preauricular sinus, Crouzon");
add(F,"parkland",[A("2"),B("6")],{asked:["Parkland 78A/78B"]});
add(F,"melanoma-plastic",[A("1"),B("49")],{asked:["Melanoma 2.5 mm → 2 cm (78A) · 1.5 mm → 1–2 cm + SLNB (78B)"]});
add(F,"cleft-palate",[B("8"),D("63")],{asked:["Cleft palate complication (78B) · อายุผ่าตัด (78D)"]});
add(F,"encephalocele",[B("9")],{asked:["Frontoethmoidal encephalocele (78B)"]});
add(F,"subcut-cyst-excision",[B("47")],{asked:["Lipoma หลังคอ cosmetic concern → excision (78B)"]});
add(F,"facial-nerve-plastic",[B("4"),D("61")],{asked:["แผลแก้ม → Stensen duct (78B, 78D)"]});
add(F,"craniosynostosis",[D("65")],{asked:["Crouzon → ICP สูงเร่งด่วน (78D)"]});
ns(F,4,{id:"suture-technique",title:"V-shaped flap tip → half-buried (corner) mattress",asked:["แผลรูป V ต้องการรักษาเลือดเลี้ยงปลาย flap (78B)"],pattern:["Corner stitch ผ่าน dermis ของปลาย flap ไม่ทะลุผิว"],members:[B("2")]});
ns(F,4,{id:"free-flap",title:"กระดูกหน้าแข้งโผล่ ฐานแผลเลือดไม่ดี → free flap",asked:["แผลหน้าแข้งกระดูกโผล่ (78B คีย์: อยากได้ free flap)"],pattern:["Graft ไม่ติดบน bare bone/tendon · distal 1/3 tibia → free flap"],members:[B("3")]});
ns(F,4,{id:"waters-view",title:"สงสัย maxillary fracture → Waters view",asked:["ถูกต่อยหน้า สงสัย maxilla หัก → view (78B)"],pattern:["Waters: maxilla/orbit floor · SMV: zygomatic arch · Towne: condyle · CT = standard"],members:[B("5")]});
ns(F,0,{id:"superficial-burn-plastic",title:"Superficial partial-thickness → dressing",asked:["แผลชมพูชื้นเจ็บ (78B, 78D)"],pattern:["ไม่ต้อง graft"],members:[B("7"),D("62")]});
ns(F,2,{id:"sws-plastic",title:"Port-wine stain (capillary malformation) + seizure → Sturge–Weber",asked:["ปานแดงที่หน้า (78B)"],pattern:["Pulsed dye laser · ตรวจ IOP + MRI เมื่อปานกิน V1"],members:[B("42")]});
ns(F,4,{id:"laceration-closure",title:"แผลสะอาด → irrigation + primary closure · แผลคิ้ว: simple suture ห้ามโกนคิ้ว",asked:["แผล 4 cm แขน well vascularized → primary closure (78B)","แผลคิ้ว 2.5 cm cosmetic concern → simple interrupted (78C)"],pattern:["ส่ง plastic เฉพาะแผลซับซ้อน (eyelid margin, lacrimal, facial nerve, parotid duct, tissue loss)"],members:[B("43"),C("4")]});
ns(F,1,{id:"pressure-injury",title:"Pressure injury: เห็นไขมัน = stage 3 · เห็นกระดูก = stage 4",asked:["Pressure ulcer เห็น adipose ไม่เห็นกระดูก (78C)"],pattern:["NPIAP staging"],members:[C("6")]});
ns(F,1,{id:"preauricular-plastic",title:"Preauricular sinus → excision",asked:["(78B)"],pattern:["Excision ตอน quiescent"],members:[B("50")]});

/* ================= MCQ: Surgical infection ================= */
F="sum_mcq_surgical-infection.js";
add(F,"empyema-si",[B("10")],{asked:["pH ต่ำ glucose ต่ำ LDH สูง → chest tube (78B)"]});
add(F,"brain-abscess",[B("48")],{asked:["Brain abscess investigation → MRI DWI (78B)"]});
add(F,"uti-pregnancy",[B("52")],{asked:["ASB ในคนท้องหลังรักษายังบวก → ให้ยาอีกคอร์ส (78B)"]});
add(F,"epn",[D("83")],{asked:["CT แก๊สใน collecting system → emphysematous pyelitis (78D)"]});
ns(F,0,{id:"renal-abscess",title:"Renal abscess: &lt;3 cm ATB · 3–5 cm ATB ± drain · &gt;5 cm percutaneous drainage",asked:["Renal abscess 3.5 cm stable → IV ATB (78B)","Renal abscess &gt;5 cm ไม่ตอบ ATB → percutaneous drainage (78D)"],pattern:["Open drainage/nephrectomy เมื่อ percutaneous ล้มเหลว"],members:[B("21"),D("82")]});
ns(F,2,{id:"pve",title:"Prosthetic valve endocarditis → redo valve replacement",asked:["Mechanical MVR ติดเชื้อ (78A)"],pattern:["Explant + debridement + replacement"],members:[A("11")]});
ns(F,2,{id:"crypto-ncc",title:"CNS infection: cryptococcal meningitis (HIV) และ neurocysticercosis",asked:["HIV CD4 ต่ำ ไข้ ปวดหัว (78D)","CT brain multiple lesion อายุ 14 (78C)"],pattern:["Crypto: CrAg, ampho + flucytosine · NCC: cyst with scolex"],members:[D("23"),C("5")]});

/* ================= MCQ: Trauma ================= */
F="sum_mcq_trauma.js";
add(F,"gcs",[B("41"),D("25")],{asked:["GCS 9 = moderate (78D) · คำนวณ GCS (78B)"]});
add(F,"facial-laceration",[B("4")],{asked:["แผลแก้ม → Stensen duct (78B)"]});
add(F,"csdh",[D("22")],{asked:["CT crescent ซ้าย → left SDH (78D)"]});
add(F,"tension-ptx",[B("51")],{asked:["อุบัติเหตุรถ CXR + tachycardia → thoracostomy (78B)"]});
ns(F,2,{id:"edh-trauma",title:"EDH: lucid interval + biconvex",asked:["รถล้มหมดสติสั้น ๆ แล้วซึมลง (78B)"],pattern:["Biconvex hyperdense ระหว่างกะโหลกกับ dura"],members:[B("39")]});
ns(F,3,{id:"open-tibia-flap",title:"Open tibia กระดูกโผล่ → free flap",asked:["(78B)"],pattern:["Soft tissue coverage ภายใน 72 ชม.–7 วัน"],members:[B("3")]});
ns(F,3,{id:"maxillary-waters",title:"Maxillary fracture → Waters view",asked:["(78B)"],pattern:["CT maxillofacial = standard"],members:[B("5")]});
ns(F,3,{id:"simple-laceration",title:"แผลสะอาดแขน → primary closure",asked:["(78B)"],pattern:["Irrigation + debridement + primary closure + tetanus"],members:[B("43")]});

/* ================= MCQ: Uro ================= */
F="sum_mcq_uro.js";
intro(F,I+"renal colic analgesia (แพ้ NSAID), cystine, BPH medical, NMIBC BCG, Bosniak, renal abscess, bladder SCC, UDT, VUR, testicular mass DDx, ASB ในคนท้อง, PSA screening, emphysematous pyelitis, TCC site");
add(F,"bladder-cis",[B("19")],{asked:["High-grade NMIBC → BCG (78B)"]});
add(F,"udt",[B("23")],{asked:["Bilateral palpable UDT 15 เดือน → orchiopexy (78B)"]});
add(F,"testis-gct",[B("28")],{asked:["ก้อนอัณฑะแข็งไม่เจ็บ: NOT DDx = epididymo-orchitis (78B)"]});
add(F,"uti-pregnancy",[B("52")],{asked:["ASB คนท้องหลังรักษายังบวก → ให้ยาอีกคอร์ส (78B)"]});
add(F,"prostate-psa",[D("81")],{asked:["ชาย 52 ขอคัดกรอง → shared decision-making (78D)"]});
add(F,"emphysematous-pyelo",[D("83")],{asked:["CT แก๊สใน collecting system: pyelitis vs pyelonephritis (78D)"]});
ns(F,1,{id:"renal-colic-analgesia",title:"Renal colic: NSAIDs first-line · แพ้ NSAID → opioid",asked:["Renal colic แพ้ NSAIDs → morphine (78B)"],pattern:["NSAID &gt; opioid ใน renal colic; MET tamsulosin สำหรับ distal 5–10 mm"],members:[B("16")]});
ns(F,1,{id:"cystine",title:"Hexagonal crystals = cystine",asked:["UA hexagonal crystals (78B)"],pattern:["Coffin lid = struvite · envelope = Ca oxalate · rhomboid = uric acid"],members:[B("17")]});
ns(F,1,{id:"bph-medical",title:"BPH IPSS 22 ต่อมเล็ก PSA 1 → alpha-blocker",asked:["(78B)"],pattern:["5-ARI ต่อม &gt;30–40 mL · surgery เมื่อมี indication"],members:[B("18")]});
ns(F,0,{id:"bosniak",title:"Renal cyst ที่ enhance (Bosniak III–IV) → surgical excision",asked:["(78B คีย์: complicated renal cyst)"],pattern:["Bosniak I–II benign · IIF follow · III–IV ผ่าตัด"],members:[B("20")]});
ns(F,2,{id:"renal-abscess-uro",title:"Renal abscess ตามขนาด (3 / 5 cm)",asked:["3.5 cm → IV ATB (78B)","&gt;5 cm ไม่ตอบยา → percutaneous drainage (78D)"],pattern:["&lt;3 ATB · 3–5 ATB ± drain · &gt;5 drain"],members:[B("21"),D("82")]});
ns(F,0,{id:"bladder-scc-uro",title:"Bladder SCC ↔ chronic infection/irritation",asked:["(78B)"],pattern:["Schistosoma, catheter, stone"],members:[B("22")]});
ns(F,0,{id:"tcc-site-uro",title:"TCC least likely ที่ urethra",asked:["(78D)"],pattern:["Bladder 90–95% · upper tract 5–10%"],members:[D("85")]});
ns(F,3,{id:"vur-uro",title:"VUR: CAP ก่อน, reimplant เมื่อ breakthrough · VCUG ปกติ → หยุดยา",asked:["VUR IV + recurrent UTI (78B)","VCUG ปกติหลังกินยา 3 ปี (78D)"],pattern:["RIVUR: CAP ลด febrile UTI"],members:[B("24"),D("84")]});

/* ================= OSCE ================= */
const IO="AC Subspe MDCU78 OSCE (78A, 78B, 78C) เพิ่มเข้ามา";
F="sum_osce_hx.js";intro(F,IO+": ซักประวัติก้อนเต้านม (78B, 78C)");
ns(F,4,{id:"hx-breast-mass-older",title:"Breast mass หญิงวัยกลางคน — ซักประวัติ focused + DDx มะเร็ง",trend:"ออกทั้ง 78B และ 78C",
 asked:["ซักประวัติหญิงคลำได้ก้อนเต้านม (78B)","ซักประวัติก้อนเต้านม 3 เดือน (78C)"],
 pattern:["ก้อน (ระยะเวลา ขนาด เจ็บ รอบเดือน) · nipple/skin/axilla · metastasis symptoms · risk factors (ครอบครัว/BRCA, menarche, parity, ฮอร์โมน, alcohol, radiation) · สรุป + triple assessment"],
 flow:["แนะนำตัว → CC/ลักษณะก้อน → อาการเฉพาะที่ → อาการแพร่กระจาย → risk factors → PMH/ยา → สรุป + DDx"],kw:["duration","nipple discharge","axillary lump","family history","BRCA","weight loss","bone pain","triple assessment"],
 members:[...S("B","18"),...S("C","5")]});

F="sum_osce_img.js";intro(F,IO+": paraphimosis, pneumoperitoneum, Fournier, lipoma, penile SCC, traumatic pneumothorax, necrotizing fasciitis");
add(F,"free-air",S("A","27"),{asked:["Upright CXR (ผู้จดคิดว่า pneumoperitoneum): abnormal findings + DDx 2 + สาเหตุ (78A)"]});
ns(F,5,{id:"paraphimosis-img",title:"Paraphimosis → manual reduction (dorsal slit ถ้าล้มเหลว)",asked:["รูป paraphimosis: Dx + management (78A)"],pattern:["Emergency · ลดบวม + manual reduction → dorsal slit → circumcision ภายหลัง"],
 flow:["Dx → analgesia → ลดบวม → manual reduction → dorsal slit ถ้าไม่สำเร็จ → elective circumcision"],kw:["paraphimosis","manual reduction","dorsal slit","circumcision"],members:S("A","25")});
ns(F,5,{id:"fournier-img",title:"Fournier gangrene: investigate 3 + treat 3",asked:["รูป Fournier: Dx, investigation 3, treatment 3 (78B)"],pattern:["Resuscitation + broad-spectrum ATB + emergency debridement (second look) · LRINEC, culture, CT"],
 flow:["Dx → labs/culture/CT (ห้ามรอ) → resuscitate → ATB → radical debridement ± diversion"],kw:["Fournier gangrene","necrotizing fasciitis","debridement","LRINEC","broad-spectrum antibiotics"],members:S("B","16")});
ns(F,5,{id:"lipoma-img",title:"Lipoma ที่แขน: indication + วิธีตัด",asked:["รูป lipoma: Dx + indication และแนวการตัด (78B)"],pattern:["Indication: อาการ, cosmetic, &gt;5 cm, deep, โตเร็ว · enucleate พร้อม capsule ส่งพยาธิ"],
 flow:["Dx → indications → LA → incision ตามแนวผิว → enucleation → hemostasis → ปิด → พยาธิ"],kw:["lipoma","enucleation","capsule","liposarcoma red flags"],members:S("B","17")});
ns(F,5,{id:"penile-ca-img",title:"Penile SCC: biopsy → penectomy margin + inguinal LND",trend:"ออก 78B และ 78C (78C มีเฉลยในไฟล์)",asked:["Penile cancer diag + management (78B)","รูปองคชาต: Dx + Mx (78C เฉลย: incisional biopsy, penectomy 2 cm, inguinal LND)"],
 pattern:["Biopsy · partial/total penectomy (หรือ organ-sparing) · inguinal node staging/dissection"],flow:["Dx → biopsy → stage nodes → primary surgery → inguinal LND/DSNB"],kw:["squamous cell carcinoma","incisional biopsy","penectomy","2-cm margin","inguinal lymph node dissection"],members:[...S("B","24"),...S("C","2")]});
ns(F,6,{id:"trauma-ptx",title:"Trauma + distress + hypotension + pneumothorax → decompress/ICD + fluid",asked:["CXR pneumothorax หลังรถชน BP 80/50 → Dx + Mx (78C เฉลย: RL 2 L + ICD)"],
 pattern:["Tension PTX → needle/finger decompression → ICD · fluid 1 L แล้ว blood (ATLS 10th) · หา bleeding (FAST)"],flow:["ABC → decompress → ICD → IV fluid/blood → FAST"],kw:["tension pneumothorax","needle decompression","ICD","Ringer lactate","FAST"],members:S("C","8")});
ns(F,5,{id:"nf-img",title:"Necrotizing fasciitis: serial aggressive debridement",asked:["รูป NF: Dx + Mx (78C เฉลย: serial and aggressive debridement)"],pattern:["Resuscitate + ATB (+ clindamycin) + debridement ซ้ำทุก 24–48 ชม."],
 flow:["Dx (clinical) → resuscitate → ATB → emergency debridement → second look"],kw:["necrotizing fasciitis","serial debridement","clindamycin","LRINEC"],members:S("C","9")});

F="sum_osce_inst.js";intro(F,IO+": ชุดเครื่องมือรวม, Foley 2-way, DJ stent, ostomy, laparoscopic cholecystectomy, เลือกอุปกรณ์ตามวัตถุประสงค์");
add(F,"ostomy",S("A","26"),{asked:["Hartmann's procedure: ชื่อผ่าตัด, stoma (colostomy), pouch (78A)"]});
ns(F,1,{id:"inst-set-78",title:"ชุดเครื่องมือ 4–5 ชิ้น: ชื่อ + ใช้ทำอะไร (chest tube, Babcock, Allis, Army–Navy, Richardson, Mayo/Metzenbaum, towel clip, mesh)",trend:"ออกทุก rotation ของปี 78",
 asked:["5 อย่าง: chest tube, Babcock, Army–Navy, Mayo, Prolene mesh (78A)","4 อย่าง: curved Mayo, colostomy bag, Richardson, Prolene mesh (78B)","Towel clip, curved Metzenbaum, Army–Navy, Allis, hernia mesh (78C — มีเฉลยในไฟล์)"],
 pattern:["Allis = จับ fascia (มีฟัน) · Babcock = จับลำไส้ (atraumatic) · Metzenbaum = เนื้อบาง · Mayo = เนื้อหนา · Army–Navy = แผลตื้น · Richardson = laparotomy · towel clip = ยึดผ้า · mesh = hernioplasty"],
 flow:["ดูของ → ชื่อ → หน้าที่ (1 บรรทัด)"],kw:["Allis","Babcock","Metzenbaum","Mayo","Army-Navy","Richardson","towel clip","mesh"],members:[...S("A","17"),...S("B","27"),...S("C","7")]});
ns(F,3,{id:"foley-dj",title:"Two-way Foley (วิธีใส่ + indication) และ DJ stent",asked:["2-way Foley 16 Fr: วิธีใช้ + 1 indication (78A)","DJ stent + 2-way Foley: ชื่อ + indication (78B)"],
 pattern:["Foley: sterile, เติม sterile water 10 mL หลังปัสสาวะไหล, ดึง prepuce กลับ · indication retention/UO · DJ: ระบาย obstructed kidney, หลัง URS"],flow:["ชื่อ → ส่วนประกอบ → วิธีใช้ → indication/contraindication"],kw:["two-way Foley","balloon","sterile water","double-J stent","obstructed infected kidney"],members:[...S("A","18"),...S("B","23")]});
ns(F,1,{id:"lap-chole-inst",title:"Acute cholecystitis + เครื่องมือ laparoscopic cholecystectomy",asked:["เจ็บชายโครงขวา: Dx + เลือกตัวอักษร/ชื่ออุปกรณ์/ชื่อหัตถการ (78B)"],pattern:["Trocar, laparoscope, grasper, clip applier, hook · critical view of safety"],
 flow:["Dx → ชื่อผ่าตัด → ชื่อ+หน้าที่เครื่องมือ"],kw:["laparoscopic cholecystectomy","trocar","clip applier","grasper","critical view of safety"],members:S("B","21")});
ns(F,3,{id:"device-purpose",title:"เลือกอุปกรณ์ตามวัตถุประสงค์: NG / Foley 2-way / ostomy bag",asked:["อุปกรณ์ A–G เลือกสำหรับระบาย GI, ดู urine output, เก็บอุจจาระหลังผ่าตัด (78C เฉลยในไฟล์)"],pattern:["NG = GI decompression · 2-way Foley = urine output · ostomy bag = stool · JP/Redivac = closed suction drains"],
 flow:["อ่านวัตถุประสงค์ → เลือกตัวอักษร → ชื่ออุปกรณ์"],kw:["nasogastric tube","two-way Foley","ostomy bag","Jackson-Pratt","Redivac"],members:S("C","12")});

F="sum_osce_path.js";intro(F,IO+": order ผู้ป่วยกินกรด (78A, 78C)");
ns(F,1,{id:"order-corrosive",title:"Order: กินน้ำยาล้างห้องน้ำ (HCl) — NPO, IV, monitor, AAS, EGD 12–24 ชม.",trend:"ออก 78A และ 78C (78C มีเฉลยในไฟล์)",
 asked:["กินเป็ดโปร 2 ชม. → order (78A)","กิน Vixol 30 นาที + รูปปาก → ER order (78C)"],
 pattern:["NPO · ห้าม induce vomiting/neutralize/blind NG · IV RL · continuous V/S · Foley · acute abdomen series · EGD 12–24 ชม. · stridor → notify/intubate"],
 flow:["Airway → NPO/ข้อห้าม → IV fluid → monitor → AAS + lab → EGD 12–24 ชม. → surgery ถ้า perforation"],kw:["NPO","no induced vomiting","Ringer lactate","acute abdomen series","EGD 12-24 hr","stridor"],members:[...S("A","16"),...S("C","4")]});

F="sum_osce_pe.js";intro(F,IO+": ตรวจท้อง (ureteric colic, appendicitis), ตรวจเต้านม + advice, DRE บนหุ่น (ต่อมแข็ง)");
add(F,"breast-exam",S("A","20"),{asked:["ตรวจเต้านม + advice หญิง 45 ปี (78A)"]});
add(F,"dre-ca-prostate",[...S("A","23"),...S("C","1")],{asked:["DRE หุ่น (ไม่มีอาจารย์) 70 ปีตรวจสุขภาพ: finding, Dx, Mx (78A)","หุ่น PR ต่อมแข็งทั่วและโต: describe + Dx (78C)"]});
add(F,"abd-appendicitis",[...S("B","20"),...S("C","3")],{asked:["ตรวจร่างกาย acute appendicitis (78B)","ตรวจท้องชายปวดท้องมีไข้ 6 ชม. พร้อมอธิบายเหตุผล (78C)"]});
ns(F,3,{id:"abd-ureteric-colic",title:"ตรวจท้องผู้ป่วย distal ureteric colic",asked:["(มีอาจารย์) distal ureteric colic ตรวจท้อง (78A)"],pattern:["ดูท่าทาง (colic บิดตัว) · CVA tenderness · ตรวจขาหนีบ/อัณฑะ · แยก appendicitis/AAA"],
 flow:["เตรียม → ดู ฟัง เคาะ คลำ → CVA → ขาหนีบ/อัณฑะ → สรุป + UA/NCCT"],kw:["CVA tenderness","restless","groin and testes","AAA","NCCT KUB"],members:S("A","19")});

F="sum_osce_proc.js";intro(F,IO+": sterile gloving + suture, WHO handwash + dressing, simple + vertical mattress, ตัดไหม, LA infiltration");
add(F,"open-gloving",[S("A","21")[0],S("C","10")[0]],{asked:["ใส่ถุงมือ sterile + เย็บ 2 simple (78A)","ใส่ถุงมือ + ทายา ปูผ้า + ฉีดยาชา (78C)"]});
add(F,"simple-interrupted-cut",[S("A","21")[1],S("B","26")[1]],{asked:["เย็บ simple 2 อัน (78A)","ตัดไหม simple + vertical (78B)"]});
add(F,"vertical-mattress",[...S("B","25"),...S("C","11")],{asked:["เย็บ simple + vertical (78B, 78C)"]});
add(F,"wound-dressing",[S("A","22")[1]],{asked:["ทำแผล dry dressing ด้วยถุงมือ non-sterile (78A)"]});
add(F,"la-infiltration",[S("C","10")[1],S("C","10")[2]],{asked:["ทาน้ำยา ปูผ้า ดูดยาไล่อากาศ ฉีดแขนปลอม (78C)"]});
ns(F,1,{id:"who-handwash",title:"ล้างมือ WHO 7 ขั้นตอน",asked:["ล้างมือตาม WHO + ทำแผล (78A)","ล้างมือ + ตัดไหม (78B)"],pattern:["7 ขั้นตอน 40–60 วินาที · ปิดก๊อกด้วยกระดาษ · 5 moments"],
 flow:["ถอดเครื่องประดับ → เปียก ลงสบู่ → 7 ขั้นตอน → ล้าง → เช็ด → ปิดก๊อกด้วยกระดาษ"],kw:["WHO 7 steps","40-60 seconds","5 moments"],members:[S("A","22")[0],S("B","26")[0]]});

F="sum_osce_suture.js";intro(F,IO+": เลือกไหม 4 งานจาก 5 ชนิด (78A), ไหมใน laparotomy + bowel anastomosis (78B, 78C)");
add(F,"use-by-tissue",S("A","24"),{asked:["ไหม 5 อัน → เย็บเชื่อมหลอดเลือดแดง / ผูกหลอดเลือดดำ / ซ่อมกล้ามเนื้อ / skin (78A)"]});
add(F,"bowel-muscle",[...S("B","22"),...S("C","6")],{asked:["รูปตัดต่อลำไส้: operation + ไหมต่อลำไส้, ผูก vessel, sheath, skin (78B)","ลำไส้ทะลุจากวัตถุแหลม: operation + เลือกไหมต่อลำไส้ (78C เฉลย: exploratory laparotomy with bowel anastomosis, PDS)"]});

F="sum_osce_spot.js";intro(F,IO+" (พาร์ท meq/MEQ = Short Answers): hernia sites, pancreatitis, submental mass, neonatal distal obstruction, Babinski, Parinaud, acholic stool, preauricular sinus, EGD + CLO, malrotation, constipation, diverticulosis, CLTI, mammogram, anal fissure, SBO, melanoma, motor/reflex, mandible fx, pressure ulcer, gastroschisis/omphalocele, KUB stone, cleft palate, condyloma, cholecystitis, DVT, burn, BCC, perianal abscess, CDH");
add(F,"abdominal-wall-defect",[...S("B","MEQ 14"),...S("C","MEQ 1")],{asked:["รูป gastroschisis: Dx + initial management (78B)","Omphalocele เหมือน AC (78C)"]});
add(F,"malrotation-volvulus",S("B","MEQ 2"),{asked:["3 wk abrupt bilious vomiting + AXR → Dx, Tx (78B)"]});
add(F,"hirschsprung",S("A","MEQ 4"),{asked:["3 วัน อาเจียน ไม่ถ่ายขี้เทา AXR lower gut obstruction → DDx 3, investigation, management (78A)"]});
add(F,"biliary-atresia",[...S("A","MEQ 7"),...S("C","MEQ 2")],{asked:["เด็ก 2 เดือนอึซีด: 3 โรค + ที่ รพช. (78A)","Acholic stool เหมือน AC (78C)"]});
add(F,"cleft-lip",S("C","MEQ 3"),{asked:["Cleft palate เหมือน AC (78C)"]});
add(F,"burn-depth",S("C","MEQ 11"),{asked:["Burn เหมือน AC: depth, %TBSA, Parkland (78C)"]});
add(F,"ureteric-stone",[...S("B","MEQ 15"),...S("C","MEQ 10")],{asked:["Film KUB left ureter stone (78B)","Ureteric stone เหมือน AC (78C)"]});
add(F,"paraphimosis",[],{});
add(F,"gallstone-cholecystitis",S("C","MEQ 6"),{asked:["Acute cholecystitis เหมือน AC (78C)"]});
add(F,"endoscopy",S("B","MEQ 1"),{asked:["รูป upper endoscopy + Pronto Dry: หัตถการ, indication 2, ตรวจหาสารใด, แปลผล, Tx (78B)"]});
add(F,"bowel-obstruction",[...S("B","MEQ 8"),...S("C","MEQ 4")],{asked:["Film abdomen upright bowel obstruction (78B)","SBO เหมือน AC (78C)"]});
add(F,"pancreatitis",S("A","MEQ 2"),{asked:["ปวดร้าวไปหลัง + US GB: Dx, lab 2 + severity 4, imaging 1 (78A)"]});
add(F,"toe-gangrene",S("B","MEQ 5"),{asked:["รูป CLTI นิ้วโป้ง + นิ้วก้อย popliteal pulse ปกติ distal 0: describe, location, PE (78B)"]});
add(F,"anal-fissure",S("B","MEQ 7"),{asked:["รูป anal fissure 2 วัน (78B)"]});
add(F,"condyloma",S("C","MEQ 5"),{asked:["Condyloma acuminata เหมือน AC (78C)"]});
add(F,"perianal-abscess",S("C","MEQ 14"),{asked:["Perianal abscess เหมือน AC: Dx, Tx (78C)"]});
add(F,"melanoma",S("B","MEQ 9"),{asked:["รูป melanoma ที่จมูก: Dx, Tx (78B)"]});
add(F,"bcc",S("C","MEQ 12"),{asked:["BCC เหมือน AC (78C)"]});
add(F,"pressure-injury",S("B","MEQ 13"),{asked:["รูปแผลกดทับสะโพก: กดกระดูกอะไร ท่าไหน (78B)"]});
add(F,"parinaud",[...S("A","MEQ 6"),...S("C","MEQ 9")],{asked:["คลิป upward gaze + light-near dissociation (78A)","คลิปมองขึ้นไม่ได้ ม่านตาไม่หด (78C: dx parinaud)"]});
add(F,"cdh",S("C","MEQ 15"),{asked:["CDH หรือ eventration (78C): Dx, Tx"]});
ns(F,12,{id:"hernia-sites",title:"แผนภาพไส้เลื่อนผนังหน้าท้อง A–F + precipitating factors",asked:["รูป hernia ตำแหน่งต่าง ๆ: ชื่อ A–F + 2 precipitating factors (78A)"],pattern:["Epigastric, umbilical, incisional, Spigelian, inguinal, femoral · ปัจจัยเพิ่ม IAP"],
 flow:["ชี้ตำแหน่ง → ชื่อ → ปัจจัยเสี่ยง"],kw:["epigastric","umbilical","incisional","Spigelian","inguinal","femoral","raised intra-abdominal pressure"],members:S("A","MEQ 1")});
ns(F,11,{id:"submental-mass",title:"ก้อนใต้คางกลาง: dermoid vs TGDC vs lymph node",asked:["ก้อนที่คาง (78A จดสั้น)"],pattern:["Dermoid ไม่ขยับตามแลบลิ้น → excision"],flow:["DDx → ลักษณะแยก → Dx → excision"],kw:["dermoid cyst","thyroglossal duct cyst","submental node"],members:S("A","MEQ 3")});
ns(F,11,{id:"neuro-exam-spot",title:"Neuro spot: Babinski, motor power (hip flexion L2–3), brachioradialis reflex (C5–6)",trend:"78A, 78B, 78C",
 asked:["รูปเท้า dorsiflexion: ชื่อการตรวจ + lesion (78A)","VDO hip flexion Rt 4 Lt 5 (78B)","VDO brachioradialis reflex: ตรวจอะไร + root (78B)","Muscle reflex เหมือน AC (78C)"],
 pattern:["Babinski = UMN · iliopsoas L2–3 · MRC 0–5 · brachioradialis C5–6"],flow:["ชื่อการตรวจ → ผล → แปลผล (root/lesion)"],kw:["Babinski","UMN","iliopsoas","L2-L3","MRC grade","brachioradialis","C5-C6"],members:[...S("A","MEQ 5"),...S("B","MEQ 10"),...S("B","MEQ 11"),...S("C","MEQ 8")]});
ns(F,11,{id:"preauricular-spot",title:"Preauricular sinus ติดเชื้อซ้ำ",asked:["periauricular sinus (78A)"],pattern:["ATB ขณะอักเสบ → excision ตอนหาย"],flow:["Dx → ATB/drain ถ้าอักเสบ → excision"],kw:["preauricular sinus","excision","BOR syndrome"],members:S("A","MEQ 8")});
ns(F,1,{id:"constipation-child",title:"AXR เด็กอุจจาระเต็มลำไส้: fecal impaction (แยก Hirschsprung)",asked:["AXR เด็ก: Dx, initial management ละเอียด, definite treatment (78B)"],pattern:["Disimpaction (PEG 1–1.5 g/kg/วัน) → maintenance + toilet training · ท้องผูกตั้งแต่แรกเกิด → Hirschsprung → pull-through"],
 flow:["Dx → disimpaction → maintenance → behavioral"],kw:["fecal impaction","PEG","disimpaction","toilet training","Hirschsprung"],members:S("B","MEQ 3")});
ns(F,4,{id:"diverticulosis-spot",title:"Diverticulosis และภาวะแทรกซ้อน",asked:["ให้ประวัติ diverticulosis: Dx + complication 2 (78B)"],pattern:["Bleeding, diverticulitis (abscess, perforation, fistula, stricture)"],flow:["Dx → complications"],kw:["diverticulosis","diverticulitis","bleeding","fistula","stricture"],members:S("B","MEQ 4")});
ns(F,7,{id:"mammogram-spot",title:"Mammogram 2 views (MLO/CC) → BI-RADS 5 → core biopsy",trend:"78B และ 78C",asked:["Mammogram 2 views: ชื่อ, view A/B, describe, Dx, next (78B)","MMG ไม่มี LN: film, Dx + เหตุผล 2, ส่งอะไรต่อ (78C)"],
 pattern:["MLO เห็น pectoralis · spiculated mass + pleomorphic calcification → core needle biopsy"],flow:["ชื่อ/ท่า → describe → BI-RADS/Dx → core biopsy"],kw:["MLO","CC","spiculated","microcalcification","BI-RADS 5","core needle biopsy"],members:[...S("B","MEQ 6"),...S("C","MEQ 13")]});
ns(F,2,{id:"mandible-fx",title:"Mandible angle fracture: panoramic + Towne view",asked:["Left angle mandible fracture: view อะไร อะไรหัก (78B)"],pattern:["OPG + Towne · ORIF/MMF"],flow:["ชื่อ view → ตำแหน่งหัก → ตรวจตำแหน่งที่ 2"],kw:["OPG","Towne view","mandibular angle fracture"],members:S("B","MEQ 12")});
ns(F,5,{id:"dvt-spot",title:"DVT หลังผ่าตัด: duplex US → anticoagulation 3 เดือน",asked:["DVT เหมือน AC (78C)"],pattern:["Compression US · LMWH/DOAC · provoked 3 เดือน"],flow:["Dx → duplex US → anticoagulation"],kw:["DVT","compression ultrasound","LMWH","DOAC","3 months"],members:S("C","MEQ 7")});

/* write back */
for(const [f,o] of Object.entries(files)){fs.writeFileSync(DIR+f,"SUMM.push("+JSON.stringify(o,null,1)+");\n");}
console.log("updated",Object.keys(files).length,"files");

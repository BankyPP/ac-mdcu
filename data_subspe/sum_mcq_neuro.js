SUMM.push({
 "tag": "Neuro",
 "title": "Neurosurgery",
 "intro": "<ul><li>MDCU79 RoC 10 ข้อย่อย: <b>ICH</b> (lobar ICH ในคนหนุ่ม = AVM, คำนวณ ABC/2), <b>brain tumor</b> (vasogenic edema → steroid, เทคนิครังสีที่แม่นที่สุด, hemostasis ระหว่างผ่าตัด), <b>CNS infection</b> (brain abscess, meningococcal meningitis, neurosyphilis) และ <b>congenital</b> (frontoethmoidal encephalocele, hydrocephalus)</li><li>รูปแบบ: ภาพ CT / รูปถ่าย → Dx หรือ management, คำนวณตัวเลข, จับคู่ยา + เหตุผล</li><li>หลายเคสเป็น recall ที่ไม่ครบ (⚠) โดยเฉพาะ ABC/2 ที่ตัวเลขในช้อยไม่ตรงต้นฉบับ — จำสูตรและหลักการไว้</li><li>MDCU79 RoD (ไฟล์ AC 79D ส่วน Subspe) เพิ่มเข้ามา: ภาพ CT/MRI เกือบทุกข้อ — toxoplasmosis, medulloblastoma, acromegaly, brain mets, chronic SDH, CVT, SAH → CTA, brain abscess imaging/เชื้อ, ICH ใหญ่, pineal, GCS</li></ul>",
 "groups": [
  {
   "title": "Intracerebral hemorrhage",
   "sections": [
    {
     "id": "lobar-ich-avm",
     "title": "Lobar ICH ในคนหนุ่มความดันปกติ → AVM",
     "asked": [
      "ชาย 25 ปีล้มขณะเล่นกีฬา BP ปกติ ไม่กินยา CT lobar ICH → most likely cause (ตัวลวง hypertension, CAA, anticoagulant, metastasis)",
      "หญิง 22 กินยาคุม + ICH BP ไม่สูง → cerebral venous thrombosis (79D)"
     ],
     "pattern": [
      "Deep ICH (putamen, thalamus, pons, cerebellum) = hypertensive; <b>lobar</b> = CAA ในผู้สูงอายุ / <b>AVM</b> และ vascular malformation ในคนหนุ่ม",
      "ICH คนอายุน้อยหรือไม่มีความดันสูง → CTA / MRA ± DSA ทุกราย (AHA/ASA 2022)",
      "Spetzler-Martin: ขนาด (<3, 3–6, >6 cm = 1–3) + eloquent (0–1) + deep venous drainage (0–1); I–II → microsurgery; ทางเลือก SRS, embolization",
      "ICH ระยะแรก: SBP เป้า ~140 (เลี่ยง <130), reverse anticoagulant",
      "ICH ในคนอายุน้อย: AVM vs <b>CVT</b> (ยาคุม/ตั้งครรภ์ — CTV/MRV, ให้ heparin แม้มี ICH)"
     ],
     "pearls": [
      "อย่าตอบ hypertension ตามความถี่ — ดูอายุ ความดัน ตำแหน่ง"
     ],
     "members": [
      "MDCU79|RoC|neuro 3",
      "MDCU79|RoD|Neuro 6"
     ]
    },
    {
     "id": "abc2",
     "title": "การคำนวณปริมาตรด้วย ABC/2",
     "asked": [
      "ก้อน 5 × 3 cm บน axial slice ใหญ่สุด สูง 4 cm → ปริมาตรด้วย ABC/2 = 30 mL"
     ],
     "pattern": [
      "A = ยาวสุดบน slice ใหญ่สุด, B = ตั้งฉากกับ A บน slice เดียวกัน, C = จำนวน slice × slice thickness (cm) → <b>A × B × C ÷ 2 = mL</b>",
      "นับ C: slice ≥75% ของ slice ใหญ่สุดนับ 1, 25–75% นับ 0.5, <25% ไม่นับ",
      "ICH score: GCS 3–4 = 2, 5–12 = 1; volume ≥30 mL = 1; IVH = 1; infratentorial = 1; อายุ ≥80 = 1",
      "Cerebellar ICH >3 cm หรือ ≥15 mL / brainstem compression / hydrocephalus → suboccipital evacuation; EDH >30 mL ผ่าตัดไม่ว่า GCS"
     ],
     "pearls": [
      "ลืมหาร 2 หรือใช้จำนวน slice โดยไม่คูณ thickness",
      "recall ไม่ครบ (จำได้แค่ 5 × 3) Claude เติมความสูง 4 cm → 30 mL ซึ่งไม่ตรงช้อยต้นฉบับ (20, 40) — ข้อนี้ความมั่นใจต่ำ ให้จำวิธีคิดมากกว่าตัวเลข"
     ],
     "members": [
      "MDCU79|RoC|neuro 5"
     ]
    },
    {
     "id": "sah-cta",
     "title": "SAH บน CT → CT angiography",
     "asked": [
      "Thunderclap headache + CT เลือดใน basal cistern → next investigation"
     ],
     "pattern": [
      "CT เห็น SAH → CTA (ลบ → DSA) · CT ปกติแต่สงสัย → LP · nimodipine, BP &lt;160, coil/clip เร็ว"
     ],
     "members": [
      "MDCU79|RoD|Neuro 7"
     ]
    },
    {
     "id": "ich-surgery",
     "title": "ICH ใหญ่ + midline shift + ซึมลง → clot evacuation",
     "asked": [
      "CT ICH ใหญ่มาก → management"
     ],
     "pattern": [
      "Supratentorial deterioration → evacuation (ENRICH: lobar 30–80 mL MIS) · cerebellar &gt;15 mL + deterioration/hydrocephalus → ผ่าตัด · SBP 130–150 ทุกราย · ห้าม thrombolysis"
     ],
     "pearls": [
      "ไฟล์ไม่ได้บอกขนาด/อาการ — ถ้าไม่มี mass effect คำตอบที่ปลอดภัยคือคุม BP"
     ],
     "members": [
      "MDCU79|RoD|Neuro 9"
     ]
    },
    {
     "id": "stroke-risk",
     "title": "Modifiable stroke risk ที่สำคัญที่สุด = hypertension",
     "asked": [
      "ชายสูงอายุ HT ดื่มเหล้า → major preventable risk"
     ],
     "pattern": [
      "HT (PAR ~48%) · อายุ/เพศชาย แก้ไม่ได้"
     ],
     "members": [
      "MDCU79|RoD|Neuro 11"
     ]
    }
   ]
  },
  {
   "title": "Brain tumor",
   "sections": [
    {
     "id": "vasogenic-edema",
     "title": "Edema รอบ brain metastasis = vasogenic → corticosteroid",
     "asked": [
      "มะเร็งเต้านม ปวดหัวอาเจียน MRI ก้อนเดี่ยว 2 cm + edema กว้าง → การรักษา edema พร้อมเหตุผล (จับคู่ยา + ชนิด edema)"
     ],
     "pattern": [
      "Tumor / abscess = <b>vasogenic</b> (BBB รั่ว, white matter, finger-like) → <b>dexamethasone</b> 4–8 mg/วัน (16 mg ถ้ารุนแรง) เฉพาะผู้มีอาการ แล้ว taper (ASCO-SNO-ASTRO 2022)",
      "Cytotoxic (stroke, hypoxia, trauma ระยะแรก) → steroid ไม่ช่วย; interstitial = transependymal จาก hydrocephalus",
      "Mannitol / hypertonic saline = bridge ลด ICP เฉียบพลัน ไม่ใช่ long-term",
      "Brain metastasis: SRS สำหรับก้อนจำนวนจำกัด; resection + SRS cavity สำหรับก้อนเดี่ยวใหญ่ / mass effect / ไม่ทราบ pathology; WBRT + hippocampal avoidance + memantine ถ้าก้อนมาก",
      "ยากันชักเฉพาะผู้ที่ชักแล้ว (levetiracetam)"
     ],
     "pearls": [
      "จับคู่ steroid กับ cytotoxic เป็นตัวลวงหลัก",
      "recall มีหัวข้อ + ช้อยเดียว — ช้อยอื่นแต่งในรูปยา + เหตุผล"
     ],
     "members": [
      "MDCU79|RoC|neuro 6"
     ]
    },
    {
     "id": "rt-precision",
     "title": "เทคนิครังสีที่แม่นที่สุด: gamma knife + proton",
     "asked": [
      "เทคนิคฉายรังสี 2 ชนิดที่แม่นที่สุดสำหรับ brain tumor (เลือกคู่จาก conventional, IMRT, gamma knife, proton)"
     ],
     "pattern": [
      "ความแม่นโดยทั่วไป: conventional < 3D-CRT < IMRT / VMAT < <b>proton และ SRS (gamma knife)</b>",
      "Gamma knife: cobalt-60 ~192–201 แหล่ง เล็งจุดเดียว แม่น sub-millimeter, dose ตกชัน; ใช้ metastasis เล็ก, AVM, vestibular schwannoma, meningioma, trigeminal neuralgia",
      "Proton: <b>Bragg peak</b> ไม่มี exit dose → เด็ก (medulloblastoma, ependymoma) และ skull base (chordoma)",
      "IMRT ใช้ glioma / ก้อนใหญ่หลาย fraction (GBM 60 Gy / 30 fx + temozolomide)"
     ],
     "pearls": [
      "IMRT ใหม่และใช้แพร่หลายแต่ไม่ใช่แม่นที่สุด",
      "recall พิมพ์ติดกับข้ออื่นและช้อยเป็นตัวเลข — Claude แปลงเป็นชื่อเทคนิค"
     ],
     "members": [
      "MDCU79|RoC|neuro 3b"
     ]
    },
    {
     "id": "neuro-hemostasis",
     "title": "ห้ามเลือดผิวสมองใกล้ eloquent cortex โดยไม่ใช้ความร้อน",
     "asked": [
      "Oozing จากผิวสมองข้าง eloquent cortex ระหว่างผ่าตัด tumor → วิธีห้ามเลือดที่ไม่มี thermal injury (ตัวลวง bipolar, monopolar, argon, bone wax)"
     ],
     "pattern": [
      "<b>Topical hemostatic agent</b> (gelatin sponge / Gelfoam, Surgicel, Floseal) + cottonoid + กดเบา ๆ + irrigation",
      "Bipolar ใช้กับหลอดเลือดที่เห็นชัด (setting ต่ำ); ห้าม monopolar ใกล้สมอง / เส้นประสาท",
      "กระดูก → bone wax; dural sinus → gelatin sponge + cottonoid + ยกศีรษะ; scalp → Raney clip; epidural ooze → dural tack-up",
      "Gelfoam บวมได้ — ระวังใช้ใน foramen หรือใกล้ spinal cord"
     ],
     "pearls": [
      "bipolar ยังเป็นการจี้ด้วยความร้อน",
      "ถ้าข้อสอบจริงถามวิธีจี้ที่ thermal spread น้อยที่สุด คำตอบจะเป็น bipolar — คำตอบ bank อิงคำว่า without thermal injury"
     ],
     "members": [
      "MDCU79|RoC|neuro 2"
     ]
    },
    {
     "id": "brain-mets-79",
     "title": "Brain metastases จาก breast cancer (MRI หลายก้อน)",
     "asked": [
      "Breast CA on chemo + neuro deficit + ICP สูง + imaging → finding"
     ],
     "pattern": [
      "Mets: lung &gt; breast &gt; melanoma · gray-white junction · dexamethasone + SRS/WBRT · paraneoplastic cerebellar degeneration MRI ปกติ"
     ],
     "members": [
      "MDCU79|RoD|Neuro 4"
     ]
    },
    {
     "id": "peds-posterior-fossa",
     "title": "Medulloblastoma (fourth ventricle) และ pineal tumor (Parinaud)",
     "asked": [
      "เด็ก 7 ปี ก้อน fourth ventricle truncal ataxia → medulloblastoma",
      "Upward gaze palsy + light-near dissociation → pineal gland tumor"
     ],
     "pattern": [
      "Medulloblastoma: vermis, drop mets → MRI spine · pilocytic: hemisphere cyst + nodule · ependymoma: 4th ventricle floor",
      "Pineal (germinoma): Parinaud + hydrocephalus, β-hCG/AFP"
     ],
     "members": [
      "MDCU79|RoD|Neuro 2",
      "MDCU79|RoD|Neuro 10"
     ]
    },
    {
     "id": "acromegaly",
     "title": "Acromegaly → somatotroph pituitary adenoma",
     "asked": [
      "นิ้ว คาง หน้าผากโต (รูป) → สาเหตุ"
     ],
     "pattern": [
      "IGF-1 → OGTT GH ไม่ถูกกด → MRI → transsphenoidal surgery · prolactinoma → cabergoline ก่อน"
     ],
     "members": [
      "MDCU79|RoD|Neuro 3"
     ]
    },
    {
     "id": "gbm-immunotherapy",
     "title": "Promising immunotherapy ของ brain tumor (ทุกข้อ)",
     "asked": [
      "dendritic vaccine / CAR T / checkpoint inhibitor → ถูกทุกข้อ"
     ],
     "pattern": [
      "GBM มาตรฐาน: resection + RT + temozolomide (Stupp) · MGMT methylation · immunotherapy อยู่ใน trials · IDH-mutant LGG: vorasidenib"
     ],
     "members": [
      "MDCU79|RoD|Neuro ไม่มีเลข 1"
     ]
    }
   ]
  },
  {
   "title": "CNS infection",
   "sections": [
    {
     "id": "brain-abscess",
     "title": "Brain abscess >2.5 cm → stereotactic aspiration + IV ATB",
     "asked": [
      "ไข้ ปวดหัว อ่อนแรงซีกขวา 2 สัปดาห์ CT ring-enhancing ผนังบาง 4 cm → management (ตัวลวง IV ATB อย่างเดียว, observe, WBRT)",
      "หลังผ่าตัด skull fracture ไข้ ปวดหัว สงสัย abscess → CT with contrast (79D)",
      "เชื้อที่พบบ่อยใน brain abscess → S. aureus + Streptococcus (79D)"
     ],
     "pattern": [
      "Ring-enhancing ผนังบางเรียบ + edema + ไข้; MRI DWI restricted ตรงกลาง แยกจาก necrotic tumor",
      "<b>ขนาด >2.5 cm / mass effect / เข้าถึงได้ → aspiration (stereotactic / burr hole) หรือ excision + IV ATB</b> (ESCMID 2024)",
      "Empirical: ceftriaxone / cefotaxime + metronidazole (+ vancomycin ถ้าหลังผ่าตัด / trauma) รวม 6–8 สัปดาห์",
      "Medical อย่างเดียว: <2.5 cm, cerebritis, หลายก้อน, ลึก",
      "แหล่ง: sinusitis → frontal; otitis / mastoiditis → temporal / cerebellum; hematogenous (endocarditis, cyanotic CHD) → หลายก้อน",
      "Imaging: MRI + Gd + DWI ดีสุด; ในช้อยไม่มี → CT with contrast · ห้าม LP",
      "เชื้อ: Streptococcus (milleri/viridans) + S. aureus (post-op/trauma) + anaerobes → ceftriaxone + metronidazole ± vancomycin"
     ],
     "pearls": [
      "ช้อยต้นฉบับเขียน PCD + IV ATB — bank แปลเป็น stereotactic aspiration"
     ],
     "members": [
      "MDCU79|RoC|neuro 1",
      "MDCU79|RoD|Neuro 8",
      "MDCU79|RoD|Neuro 14"
     ]
    },
    {
     "id": "meningococcal",
     "title": "Bacterial meningitis: gram-negative diplococci = meningococcus",
     "asked": [
      "นักศึกษา 19 ปี ไข้ คอแข็ง purpuric rash CSF bacterial, gram-negative diplococci → Dx (ตัวลวง pneumococcus, Hib, Listeria, cryptococcus)"
     ],
     "pattern": [
      "GN diplococci = <b>N. meningitidis</b>; GP diplococci = pneumococcus; GN coccobacilli = H. influenzae; GP rods = Listeria",
      "CSF bacterial: OP สูง, neutrophil, glucose ต่ำ (CSF/serum <0.4), protein สูง",
      "Empirical ผู้ใหญ่: ceftriaxone 2 g q12h + vancomycin (+ ampicillin ถ้า >50 ปี / ภูมิต่ำ) + dexamethasone 10 mg q6h 4 วัน ก่อนหรือพร้อมยาแรก",
      "CT ก่อน LP เฉพาะ focal deficit, papilledema, ชักใหม่, GCS ลด, ภูมิต่ำ",
      "Contact prophylaxis: ciprofloxacin 500 mg ครั้งเดียว / rifampicin 2 วัน / ceftriaxone IM; droplet precaution 24 ชม."
     ],
     "pearls": [
      "สลับ gram-positive / negative ของ diplococci"
     ],
     "members": [
      "MDCU79|RoC|neuro 4"
     ]
    },
    {
     "id": "neurosyphilis",
     "title": "Tertiary neurosyphilis: tabes dorsalis + Argyll Robertson pupil",
     "asked": [
      "ชาย 52 ปี เดินเซ Romberg +, vibration / proprioception ลด, areflexia, lightning pains, ความจำแย่, รูม่านตาไม่หดต่อแสงแต่หดเมื่อมองใกล้ → Dx (ตัวลวง NPH, MS, primary / secondary syphilis)"
     ],
     "pattern": [
      "<b>Tabes dorsalis</b> (dorsal column + root: sensory ataxia, Romberg +, areflexia, lightning pains, Charcot joint) + <b>Argyll Robertson pupil</b> (light-near dissociation) + general paresis",
      "Dx: serum RPR / VDRL + treponemal; CSF VDRL (specific), CSF FTA-ABS (sensitive); ตรวจ HIV",
      "รักษา (CDC 2021): aqueous crystalline penicillin G 18–24 MU / วัน IV 10–14 วัน",
      "DDx dorsal column: B12 deficiency (มี UMN signs), diabetic pseudotabes"
     ],
     "pearls": [
      "Romberg + = sensory ataxia ไม่ใช่ gait apraxia ของ NPH"
     ],
     "members": [
      "MDCU79|RoC|neuro 7"
     ]
    },
    {
     "id": "toxo-hiv",
     "title": "HIV CD4 &lt;100 + multiple ring-enhancing → toxoplasmosis",
     "asked": [
      "HIV CD4 40 ซึม อ่อนแรงซีกซ้าย aphasia + MRI → Dx"
     ],
     "pattern": [
      "Toxo: หลายก้อน basal ganglia → pyrimethamine + sulfadiazine → ไม่ยุบ 2 สัปดาห์ → biopsy (PCNSL) · PML ไม่ enhance"
     ],
     "members": [
      "MDCU79|RoD|Neuro 1"
     ]
    }
   ]
  },
  {
   "title": "Congenital craniofacial / CSF",
   "sections": [
    {
     "id": "frontoethmoidal-encephalocele",
     "title": "Frontoethmoidal encephalocele: failure of closure ที่ nasoethmoidal",
     "asked": [
      "ทารก 6 เดือนก้อนที่ nasal root ตั้งแต่เกิด โตเวลาร้อง (ภาพ) → กลไกความผิดปกติ (ตัวลวง neural tube migration, vascular proliferation, nasal–maxillary fusion, craniosynostosis)"
     ],
     "pattern": [
      "ก้อน nasal root + hypertelorism + <b>Furstenberg sign +</b> (โตเวลาร้อง) = frontoethmoidal (sincipital) encephalocele — พบบ่อยในไทย / เอเชียตะวันออกเฉียงใต้",
      "กลไก: anterior neuropore ปิดไม่สมบูรณ์ที่รอยต่อ frontal–ethmoid (foramen cecum / fonticulus frontalis) → bony defect",
      "Midline nasal mass DDx: encephalocele (Furstenberg +), nasal glioma (แข็ง Furstenberg −), nasal dermoid (pit มีขน)",
      "<b>ห้าม biopsy / aspirate ก่อน imaging</b> → MRI + CT; ผ่าตัด craniofacial ร่วม neurosurgery + plastic"
     ],
     "pearls": [
      "รูปในต้นฉบับไม่ใช่รูปจริงและ stem แต่งเพิ่ม — คำตอบตรงกับช่องเฉลยของผู้จด"
     ],
     "members": [
      "MDCU79|RoC|Plastic 1"
     ]
    },
    {
     "id": "hydrocephalus-neuro",
     "title": "Hydrocephalus ในทารก",
     "asked": [
      "ทารก 4 เดือน ภาพศีรษะโต sunset sign HC >P97 fontanelle ตึง → Dx",
      "ทารกหัวโต + sunset eyes (รูป) → congenital hydrocephalus (79D)"
     ],
     "pattern": [
      "ศีรษะโต, fontanelle ตึง, sutures แยก, scalp vein, <b>sunset sign</b> (กด dorsal midbrain)",
      "เด็กโต: ปวดหัวตอนเช้า, papilledema, CN VI palsy",
      "ทารก cranial US; MRI หาสาเหตุ",
      "VP shunt หรือ ETV ± choroid plexus cauterization (obstructive / aqueductal stenosis)"
     ],
     "pearls": [
      "myelomeningocele สัมพันธ์แต่ไม่ใช่ Dx ของภาพนี้"
     ],
     "members": [
      "MDCU79|RoC|Ped 5",
      "MDCU79|RoD|Neuro 12"
     ]
    }
   ]
  },
  {
   "title": "Head injury (79D)",
   "sections": [
    {
     "id": "csdh-neuro",
     "title": "Chronic SDH",
     "asked": [
      "ล้ม 3 สัปดาห์ GCS drop + CT bilateral hypodense crescent → Dx"
     ],
     "pattern": [
      "Chronic hypodense · burr hole + drain · MMA embolization ลด recurrence"
     ],
     "members": [
      "MDCU79|RoD|Neuro 5"
     ]
    },
    {
     "id": "gcs-neuro",
     "title": "GCS: V3 inappropriate words vs V2 sounds",
     "asked": [
      "Eye to pain, พูดเป็นคำไม่เข้าเรื่อง, withdraw → GCS"
     ],
     "pattern": [
      "E2V3M4 = 9 (ถ้าเป็นเสียงอืออา = V2 → 8)"
     ],
     "pearls": [
      "คีย์ไฟล์ 79D ตอบ 8"
     ],
     "members": [
      "MDCU79|RoD|Neuro 13"
     ]
    }
   ]
  }
 ]
});

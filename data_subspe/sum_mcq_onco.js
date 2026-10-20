SUMM.push({tag:"Onco", title:"Oncology (ทุกวอร์ดย่อย)",
  intro:"<ul><li>MDCU79 RoC 9 ข้อย่อย กระจาย 4 วอร์ดย่อย: <b>Uro</b> (testicular seminoma ออกซ้ำ 2 เคส, bladder CIS, UTUC), <b>Colorectal</b> (rectal cancer stage III, colorectal liver metastasis), <b>Neuro</b> (vasogenic edema, เทคนิครังสี) และ <b>CVT</b> (thymoma + myasthenia gravis)</li><li>แนวถาม: Dx จาก marker / อาการ paraneoplastic และ <b>next management ตาม risk / stage</b> — CIS → BCG, high-risk UTUC → nephroureterectomy + bladder cuff, N+ rectal → neoadjuvant ก่อน TME, resectable CRLM → hepatectomy</li><li>กับดักร่วม: คำว่า in situ / T2 / metastasis ทำให้เลือกการรักษาเบาหรือ palliative เกินไป</li></ul>",
  groups:[
    {title:"Uro-oncology", sections:[
      {id:"seminoma", title:"Seminoma: β-hCG สูง + AFP ปกติ",
       trend:"ออกซ้ำ 2 เคสในชุดเดียว",
       asked:["ก้อนอัณฑะแข็งไม่เจ็บ hCG สูง AFP ปกติ → Dx (ตัวลวง Leydig, Sertoli, yolk sac, epididymitis)"],
       pattern:["Pure seminoma <b>ไม่หลั่ง AFP</b>; hCG สูงได้ ~15–20%","Marker ก่อนผ่า → <b>radical inguinal orchiectomy</b> → CT staging + marker ซ้ำ","Stage I seminoma: surveillance หรือ carboplatin 1 cycle; สูงกว่า → BEP / EP"],
       pearls:["ห้าม scrotal approach / biopsy","URO 1 echo pattern ใน recall เข้ากับ nonseminoma — มั่นใจปานกลาง"],
       members:["MDCU79|RoC|URO 1","MDCU79|RoC|URO 9"]},
      {id:"bladder-cis", title:"Bladder CIS → intravesical BCG",
       asked:["CIS หลัง TURBT เอาที่เห็นออกหมด → next management"],
       pattern:["CIS = <b>high-risk NMIBC</b> → BCG induction 6 สัปดาห์ + maintenance 1–3 ปี","BCG-unresponsive → radical cystectomy"],
       pearls:["intravesical chemo single dose ใช้กับ low-risk papillary"],
       members:["MDCU79|RoC|URO 3"]},
      {id:"utuc", title:"High-risk UTUC → nephroureterectomy + bladder cuff",
       asked:["High-grade UC proximal ureter 3 cm + hydronephrosis → management"],
       pattern:["High-risk (high-grade, ≥2 cm, hydronephrosis, multifocal) → <b>radical nephroureterectomy + bladder cuff excision</b> + single post-op intravesical chemo","Adjuvant platinum ใน pT2–4 / N+ (POUT)"],
       pearls:["radical nephrectomy = RCC ไม่ใช่ urothelial","stem แต่งให้เป็น high-risk จาก recall หัวข้อ + ช้อยเดียว"],
       members:["MDCU79|RoC|URO 4"]}
    ]},
    {title:"Colorectal oncology", sections:[
      {id:"rectal-ca-stage3", title:"Rectal cancer T2N1 mid rectum → neoadjuvant แล้ว LAR + TME",
       asked:["Adenocarcinoma mid rectum 8 cm จาก anal verge MRI T2N1 MRF clear ไม่มี M → management (ตัวลวง upfront APR, local excision)"],
       pattern:["<b>cT3–4 หรือ N+ → neoadjuvant</b> (long-course CRT 50–50.4 Gy + capecitabine / 5-FU, short-course 25 Gy / 5 fx; NCCN นิยม TNT)","Upper / mid rectum → <b>LAR + TME</b> ± diverting ileostomy; low rectum ลุกลาม sphincter → APR","Margin: distal ≥1–2 cm, CRM >1 mm; cCR หลัง TNT → watch-and-wait ในศูนย์เชี่ยวชาญ","Staging: MRI pelvis (T, N, MRF, EMVI), CT chest-abdomen, CEA, colonoscopy ทั้งลำไส้"],
       pearls:["T2N0 ผ่าได้เลย แต่ T2N1 ต้องให้ neoadjuvant","stem เติมตำแหน่ง mid rectum — ถ้า low rectum ติด sphincter จะเป็น APR"],
       members:["MDCU79|RoC|Colo 5"]},
      {id:"crlm", title:"Colorectal liver metastasis resectable → liver resection",
       asked:["หลังรักษา colon cancer stage III พบ liver met 2 ก้อน 2–3 cm segment VI, VII, FLR พอ → management (ตัวลวง RFA, chemo อย่างเดียว, transplant)"],
       pattern:["CRLM resectable → <b>hepatectomy</b> ± perioperative FOLFOX (EORTC 40983); 5-year survival ~40–50%","Resectability: R0, เหลือ ≥2 contiguous segments ที่มี inflow / outflow / biliary drainage, FLR ≥20% (ปกติ) / ≥30% (หลัง chemo มาก) / ≥40% (cirrhosis), ควบคุมโรคนอกตับได้","FLR ไม่พอ → portal vein embolization, two-stage hepatectomy, ALPPS","Unresectable → systemic chemo ± biologic → ประเมิน conversion"],
       pearls:["metastasis ไม่ได้แปลว่า palliative ใน CRLM","RFA เป็นทางเลือกเมื่อผ่าไม่ได้ — ผ่าได้ต้องผ่า"],
       members:["MDCU79|RoC|Colo 6"]}
    ]},
    {title:"Neuro-oncology", sections:[
      {id:"vasogenic-edema", title:"Brain metastasis edema = vasogenic → dexamethasone",
       asked:["มะเร็งเต้านม ก้อนสมอง 2 cm + edema → ยา + เหตุผล"],
       pattern:["Tumor edema = <b>vasogenic</b> → <b>corticosteroid</b> (dexamethasone 4–8 mg/วัน, 16 mg ถ้ารุนแรง) เฉพาะผู้มีอาการ (ASCO-SNO-ASTRO 2022)","Mannitol = bridge ชั่วคราว","Definitive: SRS / resection + SRS / WBRT ตามจำนวนและขนาด"],
       pearls:["steroid + cytotoxic เป็นคู่ผิด","choices แต่งจาก recall ช้อยเดียว"],
       members:["MDCU79|RoC|neuro 6"]},
      {id:"rt-technique", title:"เทคนิครังสีที่แม่นที่สุด: gamma knife + proton",
       asked:["เลือก 2 เทคนิคที่แม่นที่สุดสำหรับ brain tumor"],
       pattern:["<b>Gamma knife (SRS)</b>: แม่น sub-millimeter","<b>Proton</b>: Bragg peak ไม่มี exit dose — เด็ก, skull base","IMRT แม่นน้อยกว่าสองตัวนี้ แต่ใช้กับ glioma ก้อนใหญ่"],
       pearls:["ช้อยในต้นฉบับเป็นตัวเลข Claude แปลงเป็นชื่อเทคนิค"],
       members:["MDCU79|RoC|neuro 3b"]}
    ]},
    {title:"Thoracic oncology", sections:[
      {id:"thymoma-mg", title:"Myasthenia gravis + anterior mediastinal mass → thymoma",
       asked:["หญิง 45 ปี หนังตาตก ภาพซ้อนแย่ลงตอนเย็น CT anterior mediastinal mass → most likely tumor (ตัวลวง teratoma, lymphoma, goiter, neurogenic)"],
       pattern:["Fatigable ptosis / diplopia = <b>MG</b>; MG + anterior mediastinal mass = <b>thymoma</b> (MG พบ 30–50% ของ thymoma)","Anterior = 4T; middle = cyst / LN; posterior = neurogenic","Resectable → <b>total thymectomy en bloc</b> ไม่ต้อง biopsy ก่อน; optimize MG ก่อนผ่า (pyridostigmine, steroid, IVIG / plasmapheresis)","Paraneoplastic อื่น: pure red cell aplasia, hypogammaglobulinemia (Good)"],
       pearls:["ไม่ตีความ ตาตกตอนเย็น เป็น MG → เลือก T อื่น","stem แต่งจาก recall ช้อยเดียว"],
       members:["MDCU79|RoC|CVT 4"]}
    ]}
  ]});

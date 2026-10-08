(function(){
/* ตัวอย่างรูปแบบไฟล์ข้อมูล 1 ไฟล์ = 1 ชุด (ปี + rotation) — คัดลอกไปไว้ที่ data/data_bN.js แล้วแก้
   ชุด: MDCU80 RoA — ไฟล์โจทย์ "AC80A_MCQ.pdf" (โค้ด 80AQ) + ไฟล์เฉลย "Key_AC80A.pdf" (โค้ด 80AK) ; rid เริ่ม 1
   (เพิ่มโค้ดไฟล์ทั้งสองลงใน config.json → "files") */
const LT="ABCDE";
const KS="(คีย์ในไฟล์ Key_AC80A)";                       // ข้อความต่อท้ายคีย์
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)";             // ใช้เมื่อไฟล์ไม่มีคีย์
const RC=(x)=>NK+" — ผู้จดใส่คำตอบไว้: "+x;              // ไม่มีคีย์ แต่ผู้จดเขียนคำตอบไว้
const A=(o)=>{const q=Object.assign({set:"MDCU80",ro:"RoA",file:"80AQ",kfile:"80AK",opinion:""},o);
  if(Array.isArray(q.wrong)){const w={};let j=0;for(let i=0;i<5;i++){if(i!==q.ans)w[LT[i]]=q.wrong[j++];}q.wrong=w;}
  if(!q.notes)q.notes="ไฟล์ recall: (คำโปรยหัวไฟล์ เช่น จำนวนข้อ เวลา สถานที่สอบ)";
  return q;};
const KI=(...n)=>n.map(i=>"k80a_"+i);   // รูปเฉลย/สไลด์ → img/k80a_<n>.jpg
const QI=(n)=>"q80a_"+n;                // รูปโจทย์   → img/q80a_<n>.jpg
QB.push(
A({page:1, page2:2, orig:"1", rep:3,
  stem:"Which of the following laboratory findings is consistent with iron deficiency anemia?",
  gray:"1. IDA ผลแลปเป็นไง — A. serum iron ↑ B. ferritin ↑ C. transferrin receptor ↓ D. transferrin saturation ↓ E. TIBC ↓",
  opts:["Increased serum iron","Increased serum ferritin","Decreased transferrin receptor","Decreased transferrin saturation","Decreased TIBC"],
  ans:3, key:"D "+KS,
  interp:"ถามทิศทาง iron study ใน IDA และแยกจาก ACD / thalassemia trait",
  why:"IDA → serum iron ↓, ตับสร้าง transferrin เพิ่ม → TIBC ↑ → <b>transferrin saturation ↓</b> (เด็กมักใช้ &lt; 16%)",
  wrong:["Serum iron ลดใน IDA","Ferritin (storage) ลดเป็นตัวแรก","sTfR เพิ่มใน IDA","TIBC เพิ่มใน IDA (ลดใน ACD)"],
  trap:"\"IDA ทุกอย่างลด\" ผิด — ตัวที่<b>ขึ้น</b>: TIBC, sTfR, FEP/ZPP, RDW, platelet",
  summary:["ดูข้อ 12, 45 (ตัวอย่างการอ้างอิงข้ามข้อ: ใช้ rid ของข้อในคลัง — แอปแปลงเป็นเลขข้อที่แสดงเอง)","IDA: iron ↓ TIBC ↑ %TS ↓ ferritin ↓","ACD: iron ↓ TIBC ↓/N ferritin ↑/N"],
  notes:"ลายมือในไฟล์: ลูกศรกำกับทุกช้อย A↓ B↓ C↑ D↓ E↑ {{IMG:k80a_1}}",
  mnemonic:"<b>\"TIBC = Thirsty Iron Binding\"</b>",
  guide:"AAP Clinical Report: Iron deficiency (2010) / WHO 2020 ferritin thresholds",
  opinion:"",
  kimg:KI(1),
  variants:["ถาม lab ตัวแรกที่ผิดปกติ → ferritin","ให้ Mentzer &lt; 13 → thalassemia trait"]}),
A({page:3, orig:"2", img:QI(2), imgNote:"รูปในข้อสอบ: ผื่น …",
  stem:"(โจทย์ภาษาอังกฤษ)…",
  gray:"(ข้อความต้นฉบับ)",
  opts:["…","…","…","…","…"],
  ans:1, key:NK, flag:"⚠ ผู้จดตอบ A — ตอบ B ตาม <guideline>",
  interp:"…", why:"…", wrong:["…","…","…","…"], trap:"", summary:["…"],
  mnemonic:"", guide:"…", opinion:"⚠ ผู้จดตอบ A แต่ … จึงตอบ B", variants:["…"]})
);
})();

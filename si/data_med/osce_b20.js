(function(){
/* SI Med OSCE — SI128 รอบที่ 2 Rotate 413–416 — ไฟล์ "128_Medicine_OSCE 2" (s128o2.pdf, โค้ด SIOS128D) 5 หน้า
   หัวไฟล์: "ข้อสอบลงกอง รายวิชา SIMD415 อายุรศาสตร์ รอบที่ 2 (413-416) OSCE" · ตารางพิมพ์ 3 คอลัมน์ ข้อที่ | โจทย์ | เฉลย · สถานี 1–30 ครบ ไม่มีฐานพัก ไม่มีส่วน LAB แยก ไม่บอกเวลาต่อสถานี
   หน้า 1 = ข้อ 1–3 · หน้า 2 = ข้อ 4–10 (ข้อ 10 ต่อหน้า 3) · หน้า 3 = ข้อ 11–19 (ข้อ 19 ต่อหน้า 4) · หน้า 4 = ข้อ 20–26 · หน้า 5 = ข้อ 27–30
   คอลัมน์ "เฉลย" = คำตอบของผู้จด (ไม่ใช่คีย์ทางการ คีย์ไม่ 100%) → ใส่ตามตัวใน key ของข้อย่อยที่ตรงกัน · ข้อย่อยที่ Claude เติมใช้ key = NK
   คอลัมน์ "โจทย์" หลายข้อมีผลที่เห็นในรูป (เช่น คำบรรยายสเมียร์/ฟิล์ม) → ไม่ใส่ใน stem (จะเป็นการใบ้) เก็บใน gray แทน
   ไม่มีรูปประกอบเลยทั้งไฟล์ (ไม่มี EKG/CXR/สเมียร์/film) → สถานีที่ต้องดูรูปใช้ NOIMG: 12–18, 20–23, 25–28
   ไม่มีลายมือ/ไฮไลต์/กรอบปิดทับ · สถานีที่มีอาจารย์ (ex:1): 2–11, 29 (proc), 30 (proc) — บทผู้ป่วย (sp) Claude แต่งให้ตรงกับเฉลยผู้จด */
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)";
const P=(t,...re)=>({t,re});
const G=(label,need,...opts)=>({label,need,opts});
const H=(label,w)=>({h:label,w});
const CR=x=>Object.assign(x,{crit:1});
function B(q,marks,o){const pts=[],kw=[],crit=[],secs=[];(o.pts||[]).forEach(p=>{if(p.h){secs.push([p.h,pts.length,p.w||0]);return;}
  if(p.crit)crit.push(pts.length);
  if(p.opts){pts.push({label:p.label,any:p.opts.map(x=>x.t),need:p.need});kw.push(p.opts.map(x=>x.re));}else{pts.push(p.t);kw.push(p.re);}});
  const s=Object.assign({q,marks,key:NK},o);delete s.pts;s.points=pts;s.kw=kw;if(crit.length)s.crit=crit;if(secs.length)s.secs=secs;return s;}
const S=(...subs)=>[{subs}];
const NOIMG="ไม่มีรูปในไฟล์ — ข้อนี้ฝึกบรรยายสิ่งที่คาดว่าจะเห็น";
const ADD="ข้อย่อยนี้ Claude เติม";
const Co=o=>Object.assign({set:"SI128",ro:"Ro413–416",file:"SIOS128D",opinion:""},o);
QB.push(

/* ===== สถานี 1 ===== */
Co({page:1,orig:"1",topic:"lab",sub:"Hb typing",title:"Hb typing of a couple — genotypes and risk for their children",seen:"SI131 Ro413–416 ข้อ 2 (โจทย์เดียวกัน: สามี A70 E30, ภรรยา A2 4%) และคล้าย SI127 Ro405–408 CRQ 5",
 stem:`A couple attends premarital/prenatal counselling.<br>Husband: Hb 13 g/dL, MCV within the normal range. Hb typing: Hb A 70%, Hb E 30%.<br>Wife: Hb 12 g/dL, MCV low. Hb typing: Hb A 96%, Hb A<sub>2</sub> 4%.<br>1. State the genotype (carrier status) of the husband and the wife.<br>2. What are the chances that their child will be a carrier or have each type of thalassemia?`,
 gray:"1. Hb typing · สามี Hb 13 MCV ปกติ A70 E30 · ภรรยา Hb 12 MCV ต่ำ A97 A2 4 · 1. บอก genotype สามี&ภรรยา 2. โอกาสลูกเป็นพาหะหรือโรคธาลัสซีเมียแต่ละชนิด · เฉลย: สามี beta E trait · ภรรยา beta trait · ลูก beta thal/E 25%, beta thal trait 25%, beta E trait 25%",
 flag:"ไฟล์จดภรรยา \"A97 A2 4\" (รวม 101% จากการจำ) — Claude ปรับ Hb A เป็น 96% ให้รวมได้ 100% · ไฟล์ไม่บอกค่า MCV เป็นตัวเลข (บอกแค่ ปกติ/ต่ำ)",
 notes:"เฉลยผู้จด: สามี beta E trait, ภรรยา beta trait · ลูก beta thal/E 25%, beta thal trait 25%, beta E trait 25% (ผู้จดไม่ได้เขียนลูกปกติอีก 25% — Claude เติม)",
 opinion:"เฉลยผู้จดถูก แต่ไม่ครบ: อีก 25% คือลูกปกติ (β/β) · ภรรยา MCV ต่ำอธิบายได้ด้วย β-thal trait แต่ Hb typing แยก α-thal 1 ที่ซ่อนอยู่ไม่ได้ — สามี MCV ปกติจึงเสี่ยง Hb Bart's hydrops ต่ำ",
 parts:S(
  B("1.1 State the genotype (carrier status) of the husband and the wife.",4,{tags:["lab"],key:"สามี beta E trait · ภรรยา beta trait",
   ans:"<b>สามี: Hb E trait</b> (heterozygous Hb E, β<sup>A</sup>/β<sup>E</sup>) — Hb E 25–30% กับ Hb A, Hb และ MCV ปกติ/ต่ำเล็กน้อย · <b>ภรรยา: β-thalassemia trait</b> (β<sup>A</sup>/β<sup>thal</sup>) — <b>Hb A<sub>2</sub> ≥ 3.5%</b> (4%) + microcytosis, Hb ปกติ/ซีดเล็กน้อย",
   exp:"Hb A<sub>2</sub> > 3.5% + MCV ต่ำ = β-thal trait · Hb E 25–30% = Hb E trait (ถ้า Hb E > 80–90% = homozygous Hb E) · Hb typing ไม่บอก α-thal 1 → ถ้า MCV/MCH ต่ำ ส่ง PCR α-thal 1 (SEA deletion) ตามแนวคัดกรองของไทย",
   rubric:"ต้องตอบถูกทั้งสองคนจึงได้เต็ม",
   pts:[CR(P("Husband: Hb E trait","hb ?e trait","beta ?e trait","β ?e trait","heterozygous (hb )?e","พาหะ ?(hb ?)?e","\\bea\\b")),CR(P("Wife: β-thalassemia trait","(beta|β)[- ]?thal\\w* trait","beta trait","β trait","พาหะเบต้า","พาหะ ?β")),P("Wife: Hb A2 ≥ 3.5% with microcytosis","a2","3\\.5","microcyt","mcv")]}),
  B("1.2 What are the chances that their child will be a carrier or have each type of thalassemia?",4,{tags:["lab"],key:"ลูก beta thal/E 25% · beta thal trait 25% · beta E trait 25%",
   ans:"ทุกการตั้งครรภ์: <b>β-thalassemia/Hb E disease 25%</b> · <b>β-thal trait 25%</b> · <b>Hb E trait 25%</b> · <b>ปกติ 25%</b> → เป็น<b>คู่เสี่ยง</b>ต่อโรคธาลัสซีเมียชนิดรุนแรง (β<sup>0</sup>-thal/Hb E) → genetic counselling และเสนอ <b>prenatal diagnosis</b> (CVS 10–12 wk, amniocentesis 16–18 wk, cordocentesis) เมื่อตั้งครรภ์",
   exp:"β-thal/Hb E อาการตั้งแต่ปานกลางจนรุนแรง (thalassemia intermedia–major) ขึ้นกับว่าเป็น β<sup>0</sup> หรือ β<sup>+</sup> · โรครุนแรงที่ป้องกันตามโครงการไทย 3 โรค: Hb Bart's hydrops fetalis, homozygous β-thal, β-thal/Hb E",
   rubric:"ได้เต็ม = ครบ 4 กลุ่ม 25% และบอกว่าเป็นคู่เสี่ยง · ขาดกลุ่มปกติ 25% หักเล็กน้อย",
   pts:[CR(P("β-thal/Hb E disease 25%","thal\\w* ?/ ?(hb ?)?e","(beta|β)[- ]?thal\\w* ?/ ?e","β ?/ ?e","e ?/ ?(beta|β)")),P("β-thal trait 25%","(beta|β)[- ]?thal\\w* trait","beta trait","β trait"),P("Hb E trait 25%","e trait"),P("Normal 25%","normal","ปกติ"),P("At-risk couple: counselling / prenatal diagnosis","คู่เสี่ยง","at.?risk","prenatal","cvs","amnio","cordocent","counsel")]})
 ),
 interp:"Lab: แปล Hb typing (Hb E trait + β-thal trait) และคำนวณโอกาสลูก → คู่เสี่ยง β-thal/Hb E",
 summary:["Hb E 25–30% = Hb E trait · Hb A2 ≥ 3.5% + MCV ต่ำ = β-thal trait","Hb E trait × β-thal trait → ลูก β-thal/Hb E 25%, β-trait 25%, E-trait 25%, ปกติ 25%","คู่เสี่ยง → genetic counselling + prenatal diagnosis"]}),

/* ===== สถานี 2 ===== */
Co({page:1,orig:"2",topic:"hx",sub:"Counseling",ex:1,title:"Counselling — newly diagnosed enzyme deficiency before discharge",seen:"SI131 Ro413–416 ข้อ 4 (counseling G6PD def: ตัวกระตุ้น dapsone ถั่วปากอ้า การติดเชื้อ ถ่ายทอดทางพันธุกรรม)",
 stem:`A 29-year-old man developed pallor and black urine after taking an antimalarial drug. Investigation showed an enzyme deficiency that had never been diagnosed before (G6PD deficiency). He is married but has no children yet. He has recovered and is about to be discharged.<br>Counsel the patient.`,
 gray:"2. ชายอายุ 29 ปี เป็น G6PD deficiency ครั้งแรก มีอาการหลังกินยาป้องกันมาลาเรียคือ ซีด ปัสสาวะเป็นสีดำ · -ไม่เคยได้รับการวินิจฉัยมาก่อน -แต่งงานแล้ว แต่ยังไม่มีบุตร -รักษาหายแล้ว กำลังจะออกจากรพ -จงให้คำแนะนำ · เฉลย: แจ้งวินิจฉัย · แจ้งสาเหตุว่าเป็นโรคทางพันธุกรรม · ผู้ชายจะรุนแรงแต่ไม่ถ่ายทอดไปยังบุตรชาย อาการของโรคคือ… · กระตุ้นด้วยการกินถั่วปากอ้า ยาเช่น dapsone (ต้องบอกชื่อยา) · โดยการปฏิบัติตัวคือให้หลีกเลี่ยงสิ่งกระตุ้นเหล่านั้น · หากมีอาการอีกให้รีบมาพบแพทย์ · และวางแผนเรื่องบุตรโดยแนะนำให้มาตรวจก่อน · โดยผู้ป่วยสามารถใช้ชีวิตได้แข็งแรงปกติเหมือนคนทั่วไป",
 flag:"โจทย์ในไฟล์บอกชื่อโรค (G6PD deficiency) อยู่แล้ว จึงคงไว้ใน stem · บทผู้ป่วย (sp) Claude แต่ง · ไฟล์ไม่บอกชื่อยาป้องกันมาลาเรีย (sp ใส่ primaquine)",
 notes:"เฉลยผู้จด (ถอดครบใน gray) — ย้ำว่าต้องบอกชื่อยาที่ห้ามใช้ เช่น dapsone · \"อาการของโรคคือ…\" ผู้จดเขียนค้างไว้",
 sp:"ชาย 29 ปี พนักงานบริษัท ไปทำงานชายแดนได้ยาป้องกัน/รักษามาลาเรีย (primaquine) กินแล้ว 2 วันมีอาการซีด เหนื่อย ปัสสาวะสีดำเหมือนโค้ก นอนโรงพยาบาลได้รับเลือด ตอนนี้หายดีแล้ว พรุ่งนี้กลับบ้าน · ไม่เคยรู้ว่าเป็นโรคนี้ · แต่งงานแล้ว 1 ปี ยังไม่มีลูก วางแผนจะมีลูกปีหน้า · คำถามที่ผู้ป่วยถาม (ถ้าผู้สอบเปิดโอกาส): \"โรคนี้หายไหม\" \"ลูกจะเป็นด้วยไหม\" \"กินอะไรไม่ได้บ้าง\" \"ทำงาน/ออกกำลังกายได้ไหม\" · ผู้คุมดูว่าผู้สอบบอกชื่อยา/อาหารที่ต้องหลีกเลี่ยงเป็นรูปธรรม",
 parts:S(
  B("2.1 Counsel the patient (type what you would tell him, in order).",8,{tags:["hx"],key:"แจ้งวินิจฉัย · แจ้งสาเหตุว่าเป็นโรคทางพันธุกรรม · ผู้ชายจะรุนแรงแต่ไม่ถ่ายทอดไปยังบุตรชาย · กระตุ้นด้วยการกินถั่วปากอ้า ยาเช่น dapsone (ต้องบอกชื่อยา) · หลีกเลี่ยงสิ่งกระตุ้น · หากมีอาการอีกให้รีบมาพบแพทย์ · วางแผนเรื่องบุตรโดยแนะนำให้มาตรวจก่อน · ใช้ชีวิตได้แข็งแรงปกติเหมือนคนทั่วไป",
   ans:"<b>เปิด:</b> แนะนำตัว ยืนยันตัวผู้ป่วย ถามว่ารู้อะไรมาแล้วบ้าง · <b>แจ้งวินิจฉัย:</b> ภาวะพร่องเอนไซม์ G6PD ในเม็ดเลือดแดง — อาการซีดและปัสสาวะดำครั้งนี้เกิดจาก<b>เม็ดเลือดแดงแตกเฉียบพลันจากยา</b> · <b>สาเหตุ:</b> <b>โรคทางพันธุกรรม</b> (X-linked) เป็นมาแต่กำเนิด ไม่ใช่โรคติดต่อ ไม่หายขาด แต่ไม่ต้องกินยาประจำ · <b>ถ่ายทอด:</b> ผู้ชายมีอาการได้ชัดกว่า · ผู้ป่วยชาย<b>ไม่ถ่ายทอดให้ลูกชาย</b> แต่<b>ลูกสาวทุกคนเป็นพาหะ</b> · <b>สิ่งกระตุ้น (บอกชื่อจริง):</b> ยา <b>dapsone, primaquine</b>/tafenoquine, sulfonamide (co-trimoxazole), nitrofurantoin, rasburicase, methylene blue · <b>ถั่วปากอ้า</b> · ลูกเหม็น (naphthalene) · <b>การติดเชื้อ</b> · <b>ปฏิบัติตัว:</b> หลีกเลี่ยงสิ่งกระตุ้น ไม่ซื้อยากินเอง <b>แจ้งแพทย์/เภสัชกรทุกครั้ง</b>ว่าเป็น G6PD พกบัตร · <b>อาการเตือน:</b> ซีด เหลือง ปัสสาวะสีเข้ม/ดำ เหนื่อย → <b>รีบมาพบแพทย์</b> · <b>วางแผนมีบุตร:</b> แนะนำให้ภรรยามาตรวจ G6PD ก่อน และตรวจลูกแรกเกิด (newborn screening/เฝ้าระวังตัวเหลือง) · <b>ให้กำลังใจ:</b> ใช้ชีวิต ทำงาน ออกกำลังกายได้ปกติ · ปิด: ถามความเข้าใจ เปิดโอกาสให้ถาม",
   exp:"G6PD gene อยู่บน X chromosome: ชายที่มี allele ผิดปกติ (hemizygous) = deficient · หญิง heterozygous มีระดับเอนไซม์แปรผัน (lyonization) อาจมีอาการได้ · ลูกชายของผู้ป่วยได้ Y จากพ่อจึงไม่เป็น เว้นแต่แม่เป็นพาหะ · การตรวจ G6PD ระหว่างเม็ดเลือดแดงแตกเฉียบพลันอาจได้ผลปกติเท็จ (reticulocyte มีเอนไซม์สูง) → ตรวจซ้ำหลัง 2–3 เดือน",
   rubric:"ผู้จดย้ำ \"ต้องบอกชื่อยา\" — บอกแค่ \"หลีกเลี่ยงยาบางชนิด\" ได้คะแนนน้อยกว่า · บอกเรื่องถ่ายทอดผิด (เช่น ลูกชายเป็นด้วย) หักคะแนน",
   pts:[H("แจ้งวินิจฉัย/สาเหตุ",25),P("Introduce and explore what the patient knows","แนะนำตัว","introduc","ทราบ","รู้อะไร"),CR(P("Explain the diagnosis: G6PD deficiency with drug-induced hemolysis","g6pd","พร่องเอนไซม์","เม็ดเลือดแดงแตก","hemoly")),P("Inherited (X-linked), not curable but no regular medication","พันธุกรรม","genetic","inherit","x.?link","แต่กำเนิด"),
    H("การถ่ายทอด",15),P("Does not pass to sons; all daughters are carriers","ลูกชาย","บุตรชาย","son","ลูกสาว","daughter","พาหะ","carrier"),
    H("สิ่งกระตุ้น/ปฏิบัติตัว",40),CR(P("Name trigger drugs (dapsone, primaquine, sulfonamides)","dapsone","primaquine","sulfa","co.?trimox","nitrofurant","rasburicase","methylene")),P("Fava beans, naphthalene, infection","ถั่วปากอ้า","fava","ลูกเหม็น","naphthalene","ติดเชื้อ","infection"),P("Avoid triggers, no self-medication, tell every doctor/pharmacist","หลีกเลี่ยง","avoid","ซื้อยา","แจ้งแพทย์","เภสัช","บัตร"),
    H("อาการเตือน/อนาคต",20),CR(P("Return if pallor, jaundice, dark urine","ซีด","เหลือง","ปัสสาวะ(สี)?(ดำ|เข้ม)","dark urine","รีบมา","มาพบแพทย์")),P("Family planning: test wife / newborn screening","ภรรยา","wife","ตรวจก่อน","วางแผน","newborn","ทารก","บุตร"),P("Normal healthy life","ปกติ","normal life","แข็งแรง")]})
 ),
 interp:"Counselling: G6PD deficiency — วินิจฉัย สาเหตุทางพันธุกรรม การถ่ายทอด X-linked สิ่งกระตุ้น (บอกชื่อยา) อาการเตือน วางแผนมีบุตร",
 summary:["G6PD deficiency: X-linked — พ่อไม่ถ่ายทอดให้ลูกชาย แต่ลูกสาวทุกคนเป็นพาหะ","ต้องบอกชื่อยา: dapsone, primaquine, sulfonamide, nitrofurantoin, rasburicase, methylene blue + ถั่วปากอ้า ลูกเหม็น การติดเชื้อ","ซีด เหลือง ปัสสาวะดำ → รีบมาพบแพทย์ · ใช้ชีวิตได้ปกติ"]}),

/* ===== สถานี 3 ===== */
Co({page:1,orig:"3",topic:"pe",sub:"Neuro",ex:1,title:"Physical examination — motor examination of the lower extremities",seen:"SI127 Ro409–412 ข้อ 9 (motor lower extremities → proximal muscle weakness) และคล้าย SI131 Ro413–416 ข้อ 14",
 stem:`A patient has difficulty getting up from a chair and climbing stairs. Perform the motor examination of the lower extremities and report your findings.`,
 gray:"3. ตรวจ motor lower extremities : Proximal muscle weakness · เฉลย: ถลกขากางเกงดู atrophy, fasciculation · ตรวจ tone, power",
 flag:"อาการนำใน stem และบทผู้ป่วย/เกรดกำลังกล้ามเนื้อ (sp) Claude แต่งให้ตรงกับผล Proximal muscle weakness ที่ไฟล์บอก · 3.2 ส่วน ddx Claude เติม",
 notes:"ไฟล์บอกผลตรวจ \"Proximal muscle weakness\" ในช่องโจทย์ · เฉลยผู้จด: ถลกขากางเกงดู atrophy, fasciculation · ตรวจ tone, power · ไม่ได้เขียน reflex/plantar (Claude เติมใน checklist)",
 sp:"ผู้ป่วยจำลอง หญิง 45 ปี ลุกจากเก้าอี้และขึ้นบันไดลำบาก 6 สัปดาห์ · ผลเมื่อผู้สอบตรวจ (ผู้คุมบอก): ไม่มีกล้ามเนื้อลีบ ไม่มี fasciculation · tone ปกติ · power: hip flexion/extension/abduction/adduction 3/5 ทั้งสองข้าง, knee flexion/extension 4/5, ankle dorsiflexion/plantarflexion 5/5, toe 5/5 · DTR 2+ เท่ากัน · plantar response flexor · sensation ปกติ",
 parts:S(
  B("3.1 Perform the motor examination of the lower extremities (type what you do, in order).",7,{tags:["pe"],key:"ถลกขากางเกงดู atrophy, fasciculation · ตรวจ tone, power",
   ans:"แนะนำตัว ขออนุญาต ล้างมือ · <b>ถลกขากางเกงขึ้น</b>ให้เห็นกล้ามเนื้อต้นขา · <b>Inspection</b>: muscle bulk/<b>atrophy</b>, <b>fasciculation</b>, deformity เทียบสองข้าง · <b>Tone</b>: roll ขา, lift ใต้เข่า, ankle clonus · <b>Power</b> ทีละข้อ เทียบซ้าย-ขวาและ proximal vs distal: <b>hip</b> (flexion, extension, abduction, adduction) → <b>knee</b> (flexion, extension) → <b>ankle</b> (dorsiflexion, plantarflexion) → <b>toe</b> ให้เกรด MRC 0–5 · <b>Reflexes</b>: knee, ankle jerk · <b>Plantar response</b> · ± functional test (ลุกจากเก้าอี้โดยไม่ใช้มือ)",
   exp:"แยก UMN (spasticity, hyperreflexia, Babinski) · LMN (atrophy, fasciculation, hyporeflexia) · myopathy (proximal weakness, reflex ปกติ, ไม่มี fasciculation) · NMJ (fatigability)",
   rubric:"ได้เต็ม = ถลกขาดู atrophy/fasciculation + tone + power ทุกข้อ (hip→toe) เทียบสองข้าง + reflex + plantar · ไม่เปิดขาดู หรือ power ไม่ครบ proximal–distal = ขาดข้อสำคัญ",
   pts:[H("เตรียม/ดู",25),P("Introduce, consent, expose the legs (roll up trousers)","แนะนำ","ขออนุญาต","expos","ถลก","เปิดขา"),CR(P("Inspect for atrophy and fasciculation","atroph","ลีบ","fascicul")),
    H("Tone",15),P("Muscle tone (roll, lift, clonus)","tone","clonus"),
    H("Power",40),CR(P("Power at hip (proximal)","hip","สะโพก")),P("Power at knee","knee","เข่า"),P("Power at ankle and toe (distal)","ankle","ข้อเท้า","toe","นิ้วเท้า"),P("Grade MRC 0–5 and compare both sides","grade","เกรด","mrc","[0-5]/5","เทียบ","both side"),
    H("Reflex",20),P("Deep tendon reflexes (knee, ankle)","reflex","jerk","\\bdtr\\b"),P("Plantar response","plantar","babinski")]}),
  B("3.2 Report your findings and give your differential diagnosis.",3,{tags:["pe"],key:"Proximal muscle weakness (ช่องโจทย์)",flag:ADD+" (ddx)",
   ans:"<b>Bilateral proximal muscle weakness</b> of the lower limbs (hip 3/5, knee 4/5, ankle/toe 5/5), no atrophy/fasciculation, normal tone, reflexes and sensation → <b>myopathy</b> · Ddx: <b>inflammatory myopathy</b> (polymyositis/dermatomyositis), <b>endocrine</b> (hypo/hyperthyroidism, Cushing/steroid), <b>hypokalemia</b>, drug (statin), myasthenia gravis",
   exp:"Ix: CK, electrolytes (K⁺, Ca²⁺, Mg²⁺, PO₄), TSH, myositis antibodies, EMG, MRI/muscle biopsy",
   pts:[CR(P("Proximal muscle weakness","proximal")),P("Bilateral, no atrophy/fasciculation, normal reflexes","bilateral","both","สองข้าง","reflex ?(ปกติ|normal)","normal reflex","no fascicul","no atroph"),G("Differential diagnosis (≥ 2)",2,P("Inflammatory myopathy","myositis","inflammatory myopath"),P("Thyroid disease","thyro"),P("Cushing / steroid myopathy","cushing","steroid"),P("Hypokalemia","hypokal","potassium","โพแทสเซียม"),P("Myasthenia gravis","myasthen"))]})
 ),
 interp:"PE station: motor exam ขา — ถลกขาดู atrophy/fasciculation, tone, power hip→toe, reflex → proximal muscle weakness",
 summary:["ถลกขากางเกง → ดู atrophy/fasciculation → tone → power hip/knee/ankle/toe → reflex → plantar","Proximal > distal, reflex ปกติ, ไม่มี fasciculation = myopathy","Ddx: inflammatory myopathy, thyroid, Cushing/steroid, hypokalemia, MG"]}),

/* ===== สถานี 4 ===== */
Co({page:2,orig:"4",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — abdomen",seen:"คล้าย SI131 Ro413–416 ข้อ 3 (PE abdomen — ท้องโต 3 เดือน)",
 stem:`A patient presents with abdominal distension. Perform a complete abdominal examination and report your findings.`,
 gray:"4. ตรวจร่างกาย abdomen · เฉลย: ดู bulging abdomen · ฟัง bowel sound · คลำ no mass · เคาะ ascites · sign chronic liver disease",
 flag:"อาการนำ (ท้องโต) และบทผู้ป่วย/ผลตรวจ (sp: cirrhosis with ascites) Claude แต่งจากเฉลยผู้จด (bulging abdomen, เคาะ ascites, sign chronic liver disease) · 4.2 "+ADD,
 notes:"เฉลยผู้จด: ดู bulging abdomen → ฟัง bowel sound → คลำ no mass → เคาะ ascites → sign chronic liver disease (ลำดับ ดู-ฟัง-คลำ-เคาะ)",
 sp:"ชาย 55 ปี ดื่มเหล้าทุกวัน 20 ปี ท้องโตขึ้น 2 เดือน · ผลเมื่อผู้สอบตรวจ (ผู้คุมบอก): ท้องโป่งตึง (bulging flank) สะดือแบน ไม่มี dilated vein ชัด · bowel sound ปกติ 6/min · คลำไม่เจ็บ ไม่พบก้อน ตับคลำไม่ได้ ม้ามคลำได้ปลาย (ถ้าตรวจ) · shifting dullness positive · fluid thrill negative · signs of CLD: palmar erythema, spider nevi ที่หน้าอก, gynecomastia, ไม่มี asterixis, ตาเหลืองเล็กน้อย",
 parts:S(
  B("4.1 Perform the abdominal examination (type what you do, in order).",7,{tags:["pe"],key:"ดู bulging abdomen · ฟัง bowel sound · คลำ no mass · เคาะ ascites · sign chronic liver disease",
   ans:"แนะนำตัว ขออนุญาต ล้างมือ จัดท่านอนหงายราบ เปิดหน้าท้องตั้งแต่ใต้ราวนมถึงขาหนีบ ถามจุดเจ็บ · <b>ดู:</b> รูปร่างท้อง (<b>bulging flank</b>/distension), สะดือ, dilated veins (caput medusae), แผลเป็น, การเคลื่อนไหวตามการหายใจ · <b>ฟัง:</b> <b>bowel sound</b> (≥ 1 นาที), bruit · <b>คลำ:</b> light แล้ว deep palpation ทั้ง 9 regions เริ่มจากจุดไม่เจ็บ หา tenderness/<b>mass</b> · <b>ตับ</b> (คลำจาก RLQ ขึ้น + liver span) · <b>ม้าม</b> (จาก RLQ เข้าหา LUQ + ตะแคงขวา/Traube space) · ไต (ballottement) · <b>เคาะ:</b> หา <b>ascites</b>: flank dullness → <b>shifting dullness</b>, fluid thrill (ascites มาก) · <b>Signs of chronic liver disease:</b> jaundice, palmar erythema, spider nevi, gynecomastia, testicular atrophy, parotid enlargement, Dupuytren, leukonychia, asterixis, fetor hepaticus",
   exp:"ตรวจท้องนิยม ดู → ฟัง → คลำ → เคาะ (ฟังก่อนคลำเพื่อไม่กระตุ้นลำไส้) · shifting dullness ต้องมีน้ำ ≳ 1,500 mL จึงตรวจพบ · ascites + signs of CLD → cirrhosis with portal hypertension",
   rubric:"ได้เต็ม = ครบ ดู-ฟัง-คลำ (รวมตับ ม้าม)-เคาะ ascites + signs of CLD · ไม่ตรวจ ascites = ขาดข้อสำคัญ",
   pts:[H("เตรียม/ดู",20),P("Introduce, consent, position supine and expose","แนะนำ","ขออนุญาต","supine","นอนหงาย","expos","เปิด"),P("Inspect: distension/bulging flank, umbilicus, veins, scars","bulging","distend","distension","ท้องโต","สะดือ","umbilic","vein","caput","scar","แผล"),
    H("ฟัง",10),P("Bowel sounds","bowel sound","ฟัง"),
    H("คลำ",30),P("Light and deep palpation for tenderness/mass","palpat","คลำ","mass","ก้อน","tender"),CR(P("Liver and spleen","liver","ตับ","spleen","ม้าม","span")),
    H("เคาะ",20),CR(P("Percussion for ascites: shifting dullness / fluid thrill","shifting","fluid thrill","ascites","flank dull"))
    ,H("Signs of CLD",20),P("Signs of chronic liver disease","palmar","spider","gynecomast","asterixis","jaundice","chronic liver","\\bcld\\b","testicular")]}),
  B("4.2 Report your findings and give the most likely diagnosis.",3,{tags:["pe"],flag:ADD,
   ans:"Bulging flank, bowel sound ปกติ, ไม่พบก้อน, ม้ามโต, <b>shifting dullness positive</b> = <b>ascites</b> (ปานกลาง) + <b>signs of chronic liver disease</b> (palmar erythema, spider nevi, gynecomastia, jaundice) → <b>cirrhosis with portal hypertension</b> (น่าจะ alcoholic)",
   exp:"ต่อ: diagnostic paracentesis (SAAG, total protein, cell count, culture), LFT, PT/INR, U/S abdomen (liver, spleen, HCC) · ascites ใหม่ทุกรายต้องเจาะตรวจ",
   pts:[CR(P("Ascites (shifting dullness positive)","ascites","shifting")),P("Signs of chronic liver disease","chronic liver","\\bcld\\b","palmar","spider","gynecomast"),CR(P("Cirrhosis with portal hypertension","cirrho","portal hyper","ตับแข็ง"))]})
 ),
 interp:"PE station: ตรวจท้อง ดู-ฟัง-คลำ-เคาะ + หา ascites และ signs of CLD",
 summary:["ลำดับ: ดู (bulging flank) → ฟัง bowel sound → คลำ (mass, ตับ, ม้าม) → เคาะ (shifting dullness)","ต้องมองหา signs of CLD: palmar erythema, spider nevi, gynecomastia, jaundice, asterixis","Ascites ใหม่ → diagnostic paracentesis (SAAG)"]}),

/* ===== สถานี 5 ===== */
Co({page:2,orig:"5",topic:"pe",sub:"Chest",ex:1,title:"Physical examination — respiratory system",seen:"SI127 Ro409–412 ข้อ 5 (PE RS ดู-คลำ-เคาะ-ฟัง)",
 stem:`Perform a complete examination of the respiratory system on this patient and report your findings.`,
 gray:"5. ตรวจร่างกาย RS · เฉลย: ดู คลำ เคาะ ฟัง ท่านั่ง",
 flag:"บทผู้ป่วย (sp) Claude แต่ง — ไฟล์ไม่บอกอาการนำหรือผลตรวจ (Claude ให้เป็นอาสาสมัครปกติ)",
 notes:"เฉลยผู้จด: ดู คลำ เคาะ ฟัง ในท่านั่ง",
 sp:"อาสาสมัครสุขภาพดี นั่งบนเตียง ตรวจทุกอย่างปกติ: RR 16/min ไม่ใช้ accessory muscle, chest shape ปกติ ไม่มีแผลเป็น · trachea อยู่กลาง · chest expansion เท่ากันสองข้าง · vocal fremitus เท่ากัน · เคาะ resonance ทุกตำแหน่ง · vesicular breath sound เท่ากัน ไม่มี adventitious sound · ผู้คุมดูว่าผู้สอบให้นั่งตรวจ ตรวจทั้งด้านหน้าและด้านหลัง เทียบซ้าย-ขวา",
 parts:S(
  B("5.1 Perform the respiratory examination (type what you do, in order).",7,{tags:["pe"],key:"ดู คลำ เคาะ ฟัง ท่านั่ง",
   ans:"<b>เตรียม:</b> แนะนำตัว ขออนุญาต ล้างมือ <b>จัดท่านั่ง</b> เปิดเผยหน้าอก · <b>ดู:</b> RR/pattern, accessory muscle, รูปทรวงอก, แผลเป็น, chest movement, clubbing/cyanosis · <b>คลำ:</b> <b>trachea</b>, <b>chest expansion</b> (หน้า-หลัง), <b>vocal/tactile fremitus</b> · <b>เคาะ:</b> เทียบซ้าย-ขวาทุกระดับ หน้า ข้าง หลัง รวม apex · <b>ฟัง:</b> breath sound, adventitious sounds (crepitation, wheeze, rhonchi, pleural rub), vocal resonance · ตรวจทั้งหน้าและหลัง เทียบซ้าย-ขวาเสมอ",
   exp:"Consolidation = fremitus ↑ dull bronchial BS · effusion = fremitus ↓ stony dull BS ↓ · pneumothorax = fremitus ↓ hyperresonance BS ↓",
   rubric:"ข้ามขั้นใดใน ดู-คลำ-เคาะ-ฟัง หรือไม่เทียบซ้าย-ขวา หักคะแนน · ตรวจด้านหลังในท่านอนแทนท่านั่ง หักเล็กน้อย",
   pts:[H("เตรียม",10),P("Introduce, consent, sitting position, exposure","แนะนำ","introduc","ขออนุญาต","ท่านั่ง","นั่ง","sit","expos"),
    H("ดู",25),P("Respiratory rate and pattern","rr\\b","respiratory rate","อัตราการหายใจ","การหายใจ","pattern"),P("Accessory muscles, chest shape, scars","accessory","chest","ทรวงอก","deformit","scar","แผล"),
    H("คลำ",25),CR(P("Trachea position","trachea","หลอดลม")),P("Chest expansion","expansion","การขยาย"),P("Vocal/tactile fremitus","fremitus"),
    H("เคาะ",15),CR(P("Percussion comparing both sides","percuss","เคาะ")),
    H("ฟัง",25),CR(P("Breath sounds and adventitious sounds","breath sound","auscult","ฟัง","crepitat","wheez","rhonchi","adventitious")),P("Vocal resonance","vocal resonance","resonance")]}),
  B("5.2 Report your findings.",2,{tags:["pe"],
   ans:"<b>Normal respiratory examination</b>: RR ปกติ ไม่ใช้ accessory muscle, trachea อยู่กลาง, chest expansion และ vocal fremitus เท่ากันสองข้าง, เคาะ resonance, vesicular breath sound เท่ากัน ไม่มี adventitious sound",
   exp:"รายงานตามลำดับที่ตรวจ แม้ผลปกติ",
   pts:[CR(P("Normal respiratory examination","normal","ปกติ")),P("Report findings in order","trachea","resonan","vesicular","expansion")]})
 ),
 interp:"PE station: ตรวจระบบหายใจในท่านั่ง ครบ ดู-คลำ-เคาะ-ฟัง",
 summary:["จัดท่านั่ง ตรวจหน้า-หลัง เทียบซ้าย-ขวา","ดู: RR, accessory muscle · คลำ: trachea, expansion, fremitus · เคาะ · ฟัง: breath sound, added sound, vocal resonance","รายงานตามลำดับ แม้ผลปกติ"]}),

/* ===== สถานี 6 ===== */
Co({page:2,orig:"6",topic:"pe",sub:"Pulse/BP",ex:1,title:"Physical examination — hypertension in a 20-year-old",seen:"SI132 Ro403–404 ข้อ 22 (HT in the young) · SI127 Ro409–412 ข้อ 6 · SI133 Ro405–406 ข้อ 3",
 stem:`A 20-year-old woman was found to have high blood pressure. Perform the relevant cardiovascular examination and report your findings.`,
 gray:"6. HT in the young (อายุ 20 ปี) ตรวจร่างกายระบบ CVS · เฉลย: Vital sign · วัด BP 4ext · ฟัง bruit carotid&renal* · คลำ pulse ทุกที่ 2 ข้าง · Precordium อื่นๆ · ใช้คำว่า apical impulse อย่าใช้คำว่า PMI · ฟังด้วย steth 2 ด้าน",
 flag:"⚠ ไฟล์ไม่บอกเพศและผลตรวจ — เพศหญิงและบทผู้ป่วย/ผลตรวจ (sp: renal bruit → renovascular HT) Claude แต่ง · 6.2 "+ADD,
 notes:"เฉลยผู้จด: vital sign, วัด BP 4 extremities, ฟัง bruit carotid & renal (มีดอกจัน = สำคัญ), คลำ pulse ทุกที่ 2 ข้าง, precordium · ใช้คำว่า \"apical impulse\" อย่าใช้คำว่า \"PMI\" · ฟังด้วย stethoscope ทั้ง 2 ด้าน (bell และ diaphragm)",
 sp:"หญิง 20 ปี พบความดันสูงตอนตรวจสุขภาพเข้าทำงาน ไม่มีอาการ · ผลเมื่อผู้สอบตรวจ (ผู้คุมบอก): PR 80 สม่ำเสมอ RR 16 · BP แขนขวา 168/104, แขนซ้าย 166/102, ขาขวา 182/108, ขาซ้าย 180/106 mmHg · pulses ทุกตำแหน่งปกติเท่ากันสองข้าง ไม่มี radio-femoral delay · ไม่มี carotid bruit · <b>มี systolic-diastolic bruit ที่ epigastrium เยื้องซ้าย</b> · precordium: apical impulse ที่ 5th ICS MCL ไม่ heave, S1 S2 ปกติ ไม่มี murmur · ไม่มีลักษณะ Cushingoid ไม่มีคอพอก",
 parts:S(
  B("6.1 Perform the relevant cardiovascular examination (type what you do).",6,{tags:["pe"],key:"Vital sign · วัด BP 4ext · ฟัง bruit carotid&renal* · คลำ pulse ทุกที่ 2 ข้าง · Precordium อื่นๆ · ใช้คำว่า apical impulse อย่าใช้คำว่า PMI · ฟังด้วย steth 2 ด้าน",
   ans:"แนะนำตัว ขออนุญาต · <b>Vital signs</b> · <b>วัด BP ทั้ง 4 extremities</b> · <b>คลำ pulse ทุกตำแหน่งทั้ง 2 ข้าง</b> (carotid, brachial, radial, femoral, popliteal, dorsalis pedis, posterior tibial) + <b>radio-femoral delay</b> · <b>ฟัง bruit</b>: <b>carotid</b> และ <b>renal</b> (เหนือสะดือ 2–3 cm และด้านข้างทั้งสองข้าง/หลังที่ costovertebral angle) ± femoral · <b>Precordium</b>: ดู-คลำ <b>apical impulse</b> (ใช้คำนี้ ไม่ใช้ \"PMI\"), heave, thrill · ฟังเสียงหัวใจ<b>ด้วย stethoscope ทั้ง 2 ด้าน</b> (diaphragm และ bell) ทุก valve area + ฟังที่หลัง · เสริม: fundoscopy, Cushingoid/thyroid signs, คลำไต",
   exp:"HT in the young (&lt; 30–40 ปี) ต้องหา secondary HT · ขาสูงกว่าแขน 10–20 mmHg = ปกติ · ขาต่ำกว่าแขน + radio-femoral delay = coarctation · systolic-diastolic abdominal bruit = renovascular HT",
   rubric:"ผู้จดเน้น: ฟัง bruit carotid & renal (*) และใช้คำ \"apical impulse\" ไม่ใช่ \"PMI\" · ไม่วัด BP ขา/ไม่ฟัง renal bruit = ขาดข้อสำคัญ",
   pts:[H("Vital signs/BP",30),P("Vital signs","vital","สัญญาณชีพ","\\bv/?s\\b"),CR(P("BP in all 4 extremities","4 ?ext","4 extrem","four (limbs|extrem)","แขนขา","ขา","\\bleg","4 ข้าง","ทั้งสี่")),
    H("Pulse/bruit",40),P("All peripheral pulses bilaterally, radio-femoral delay","pulse","ชีพจร","radio.?femoral","femoral","ทุกที่","2 ข้าง","สองข้าง"),CR(P("Bruits: carotid and renal","renal bruit","bruit"))
    ,H("Precordium",30),P("Apical impulse (not \"PMI\")","apical impulse","apex"),P("Auscultate with both diaphragm and bell","bell","diaphragm","2 ด้าน","สองด้าน","murmur","heart sound","ฟังหัวใจ")]}),
  B("6.2 Report your findings and give the most likely cause and differential diagnosis.",4,{tags:["pe"],flag:ADD,
   ans:"BP สูงทั้งแขนและขา (ขาสูงกว่าแขนตามปกติ) · pulses ปกติ ไม่มี radio-femoral delay · <b>systolic-diastolic bruit ที่ epigastrium/flank</b> → <b>renovascular hypertension</b> — หญิงอายุน้อย = <b>fibromuscular dysplasia</b> (ในไทยนึกถึง Takayasu arteritis ด้วย) · Ddx secondary HT: renal parenchymal disease, primary aldosteronism, pheochromocytoma, Cushing syndrome, hyperthyroidism, coarctation of aorta",
   exp:"Ix: Cr, UA, K⁺, renal artery Doppler U/S หรือ CTA/MRA · FMD รักษาด้วย percutaneous transluminal renal angioplasty (ไม่ต้องใส่ stent) · ACEI/ARB ระวังใน bilateral RAS",
   pts:[P("Abdominal/renal bruit present","bruit"),CR(P("Renovascular hypertension","renovasc","renal artery","\\bras\\b")),P("Fibromuscular dysplasia / Takayasu","fibromuscular","\\bfmd\\b","takayasu"),G("Other secondary causes (≥ 2)",2,P("Renal parenchymal disease","parenchym","glomerul","\\bckd\\b"),P("Primary aldosteronism","aldosteron","conn"),P("Pheochromocytoma","pheochromo"),P("Cushing syndrome","cushing"),P("Hyperthyroidism","thyro"),P("Coarctation of the aorta","coarct"))]})
 ),
 interp:"PE station: HT in the young — vital signs, BP 4 extremities, pulses ทุกตำแหน่ง 2 ข้าง, carotid/renal bruit, precordium (apical impulse) ฟัง bell + diaphragm",
 summary:["HT ในคนอายุน้อย = หา secondary HT","ตรวจ: BP 4 extremities, pulses 2 ข้าง + radio-femoral delay, bruit carotid & renal, precordium","ใช้คำ apical impulse (ไม่ใช่ PMI) · ฟังทั้ง bell และ diaphragm · renal bruit ในหญิงอายุน้อย → FMD"]}),

/* ===== สถานี 7 ===== */
Co({page:2,orig:"7",topic:"hx",sub:"Joint pain",ex:1,title:"History taking — knee pain for 2 days",
 stem:`A patient presents with knee pain for 2 days. Take a focused history, then give your most likely diagnosis.`,
 gray:"7. ซักประวัติปวดข้อเข่า 2 วัน -> ปวดข้อ มีไข้ หนาวสั่น ไม่เคยเป็นมาก่อน บวมแดงร้อน ไม่ morning stiffness โรคประจำตัว? รักษาด้วยอะไรมา? บุหรี่ สุรา? · เฉลย: ตอบ Septic arthritis ได้เต็ม · Gouty arthritis ได้ครึ่งเดียว",
 flag:"อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับข้อมูลในไฟล์ (ไข้ หนาวสั่น บวมแดงร้อน ไม่เคยเป็นมาก่อน ไม่มี morning stiffness)",
 notes:"ช่องโจทย์ผู้จดเขียนสิ่งที่ซักได้: ปวดข้อ มีไข้ หนาวสั่น ไม่เคยเป็นมาก่อน บวมแดงร้อน ไม่มี morning stiffness + คำถามที่ควรซัก (โรคประจำตัว? รักษาด้วยอะไรมา? บุหรี่ สุรา?) · เกณฑ์คะแนน: Septic arthritis = เต็ม · Gouty arthritis = ครึ่งเดียว",
 sp:"ชาย 58 ปี ปวดเข่าขวา 2 วัน ปวดมากขึ้นเรื่อย ๆ เดินลงน้ำหนักไม่ได้ · เข่าบวม แดง ร้อน · ไข้สูง หนาวสั่น · ไม่เคยปวดข้อแบบนี้มาก่อน ไม่ปวดข้ออื่น · ไม่มีข้อฝืดตอนเช้า · ไม่มีอุบัติเหตุ · 1 สัปดาห์ก่อนปวดเข่าเรื้อรัง ไปคลินิกได้ฉีดยาเข้าเข่าขวา (ถ้าถามเรื่องหัตถการ/ฉีดยา) · มีแผลถลอกที่หน้าแข้งขวา · โรคประจำตัว: เบาหวาน คุมไม่ดี · รักษาเอง: กินยาแก้ปวดพาราเซตามอล ไม่ดีขึ้น · สูบบุหรี่ 1 ซอง/วัน ดื่มเหล้าเป็นครั้งคราว · ไม่มีเพศสัมพันธ์เสี่ยง ไม่มีปัสสาวะแสบขัด/ท้องเสีย/ตาแดง · ไม่ได้กินยาขับปัสสาวะ",
 parts:S(
  B("7.1 Take a focused history.",7,{tags:["hx"],key:"(ช่องโจทย์) ปวดข้อ มีไข้ หนาวสั่น ไม่เคยเป็นมาก่อน บวมแดงร้อน ไม่ morning stiffness โรคประจำตัว? รักษาด้วยอะไรมา? บุหรี่ สุรา?",
   ans:"<b>ลักษณะข้ออักเสบ:</b> onset (เฉียบพลัน), ตำแหน่ง/จำนวนข้อ (mono vs poly), <b>บวมแดงร้อน</b>, ลงน้ำหนักได้ไหม, <b>morning stiffness</b> (inflammatory vs mechanical) · <b>ไข้ หนาวสั่น</b> · <b>เคยเป็นมาก่อน</b>ไหม (gout/CPPD เป็นซ้ำ) · <b>หาแหล่ง/ปัจจัยเสี่ยงติดเชื้อ:</b> ฉีดยาเข้าข้อ/หัตถการ, แผลที่ผิวหนัง, อุบัติเหตุ, ข้อเทียม, IVDU, <b>เพศสัมพันธ์เสี่ยง/ตกขาว/ปัสสาวะแสบขัด</b> (gonococcal) · <b>โรคประจำตัว:</b> เบาหวาน, CKD, ตับแข็ง, RA, HIV, ภูมิคุ้มกันต่ำ/steroid · <b>รักษาด้วยอะไรมา</b> (ยาแก้ปวด, ยาชุด/steroid, antibiotic) · <b>บุหรี่ สุรา</b> · ปัจจัย gout: เครื่องในสัตว์, diuretic, family history",
   exp:"Acute monoarthritis + ไข้ = septic arthritis จนกว่าจะพิสูจน์ได้ว่าไม่ใช่ (ข้อถูกทำลายภายในวัน) → <b>arthrocentesis ก่อนให้ antibiotic</b>: synovial WBC มัก > 50,000/µL, PMN > 90%, Gram stain, culture, crystal · gout ก็ไข้ได้และอาจเป็นร่วมกับ septic arthritis",
   rubric:"ไม่ถามไข้/หนาวสั่น หรือไม่หาแหล่งติดเชื้อ (แผล ฉีดยาเข้าข้อ เพศสัมพันธ์) = ขาดข้อสำคัญ",
   pts:[H("ลักษณะข้ออักเสบ",30),P("Onset, number of joints, swelling/redness/warmth","onset","ทันที","ข้ออื่น","กี่ข้อ","บวม","แดง","ร้อน","swell","warm"),P("Morning stiffness","morning stiff","ข้อฝืด","ฝืดตอนเช้า"),P("Previous episodes","เคยเป็น","previous","ครั้งแรก"),
    H("ไข้/แหล่งติดเชื้อ",40),CR(P("Fever and chills","ไข้","fever","หนาวสั่น","chill","rigor")),CR(P("Source of infection: joint injection/procedure, skin wound, trauma, prosthesis","ฉีดยา(เข้า)?(ข้อ|เข่า)","inject","หัตถการ","แผล","wound","อุบัติเหตุ","trauma","ข้อเทียม","prosthe")),P("Sexual history / urethritis (gonococcal)","เพศสัมพันธ์","sexual","\\bstd\\b","\\bsti\\b","ปัสสาวะแสบ","หนองใน","ตกขาว"),
    H("ภูมิหลัง",30),P("Underlying disease (DM, CKD, immunosuppression)","โรคประจำตัว","underlying","u/d","เบาหวาน","\\bdm\\b","immun","steroid"),P("Previous treatment","รักษา","ยาแก้ปวด","antibiotic","ยาชุด","ซื้อยา","กินยา"),P("Smoking and alcohol","บุหรี่","smok","สุรา","เหล้า","alcohol")]}),
  B("7.2 What is your most likely diagnosis?",3,{tags:["hx"],key:"ตอบ Septic arthritis ได้เต็ม · Gouty arthritis ได้ครึ่งเดียว",
   ans:"<b>Acute septic arthritis of the right knee</b> (น่าจะ <i>S. aureus</i>: DM + ฉีดยาเข้าข้อ/แผลที่ขา) → ต้อง <b>arthrocentesis ก่อนให้ antibiotic</b> · Ddx: acute gouty arthritis, CPPD (pseudogout), gonococcal arthritis, reactive arthritis",
   exp:"Ix: <b>arthrocentesis</b> (cell count, Gram stain, culture, crystal), hemoculture 2 ขวด, CBC, ESR/CRP, film knee · Rx: ข้อเจาะดูดหนอง/ล้างข้อ (needle aspiration ซ้ำ หรือ arthroscopic/open drainage) + empirical IV antibiotic ตาม Gram stain (Gram-positive cocci: cloxacillin/cefazolin หรือ vancomycin ถ้าเสี่ยง MRSA)",
   rubric:"Septic arthritis = เต็ม · Gouty arthritis = ครึ่งเดียว (ตามผู้จด)",
   pts:[CR(P("Septic arthritis","septic","infectious arthritis","ข้ออักเสบติดเชื้อ","bacterial arthritis")),P("Next step: arthrocentesis before antibiotics","arthrocent","เจาะ(ข้อ|น้ำ)","synovial","aspirat"),P("Differential: gout / CPPD","gout","เกาต์","cppd","pseudogout")]})
 ),
 interp:"History taking: acute monoarthritis + ไข้หนาวสั่น → septic arthritis (หาแหล่งติดเชื้อ, โรคประจำตัว, การรักษาที่ผ่านมา)",
 summary:["Acute monoarthritis + ไข้ = septic arthritis ก่อนเสมอ","ซัก: บวมแดงร้อน, morning stiffness, เคยเป็นไหม, แผล/ฉีดยาเข้าข้อ, เพศสัมพันธ์, DM/ภูมิคุ้มกันต่ำ, ยาที่ใช้, บุหรี่ สุรา","Arthrocentesis ก่อนให้ antibiotic · Septic = เต็ม, gout = ครึ่งเดียว"]}),

/* ===== สถานี 8 ===== */
Co({page:2,orig:"8",topic:"hx",sub:"Abdominal pain",ex:1,title:"History taking — abdominal pain for 3 months",seen:"คล้าย SI132 Ro403–404 ข้อ 13 (chronic epigastric pain) และ SI132 Ro405–406 A5",
 stem:`A patient presents with abdominal pain for 3 months. Take a focused history, then give your most likely diagnosis.`,
 gray:"8. ซักประวัติปวดท้อง 3 เดือน · เฉลย: ลักษณะการปวด, alarming feature, ยา เหล้า อาหาร · ซักจนได้ Dyspepsia",
 flag:"อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับเฉลยผู้จด (dyspepsia ไม่มี alarm feature)",
 notes:"เฉลยผู้จด: ซักลักษณะการปวด, alarming feature, ยา เหล้า อาหาร — ซักจนได้ Dyspepsia",
 sp:"หญิง 35 ปี พนักงานออฟฟิศ ปวดจุกแน่นลิ้นปี่เป็น ๆ หาย ๆ 3 เดือน ปวดตื้อ ๆ ไม่ร้าว เป็นมากหลังกินอาหาร อิ่มเร็ว ท้องอืด เรอบ่อย · ไม่มีแสบร้อนกลางอก · กินข้าวไม่ตรงเวลา ดื่มกาแฟวันละ 3 แก้ว · ไม่ดื่มเหล้า ไม่สูบบุหรี่ · ไม่ได้กินยาแก้ปวด/NSAIDs/ยาชุด/สมุนไพร · alarm features ทั้งหมดไม่มี: น้ำหนักไม่ลด กลืนได้ปกติ ไม่อาเจียน ไม่ถ่ายดำ ไม่ซีด ไม่มีก้อนในท้อง ไม่มีประวัติมะเร็งกระเพาะในครอบครัว · ไม่มีไข้ ไม่เหลือง · ขับถ่ายปกติ ไม่สัมพันธ์กับการขับถ่าย · ประจำเดือนปกติ",
 parts:S(
  B("8.1 Take a focused history.",7,{tags:["hx"],key:"ลักษณะการปวด, alarming feature, ยา เหล้า อาหาร",
   ans:"<b>ลักษณะการปวด:</b> ตำแหน่ง (ลิ้นปี่), ลักษณะ (แสบ จุก แน่น บิด), ร้าว, ความรุนแรง, ระยะเวลา/ความถี่, สัมพันธ์กับอาหาร (ปวดหลังกิน/หิว), อิ่มเร็ว ท้องอืด เรอ, สัมพันธ์กับการขับถ่าย (แยก IBS), แสบร้อนกลางอก/เรอเปรี้ยว (GERD), ปวดตามมื้ออาหารมันร้าวไปหลัง (biliary/pancreas) · <b>Alarm features:</b> อายุมาก/เพิ่งเริ่มเป็น, <b>น้ำหนักลด</b>, <b>กลืนลำบาก/กลืนเจ็บ</b>, <b>อาเจียนต่อเนื่อง</b>, <b>ถ่ายดำ/อาเจียนเป็นเลือด</b>, <b>ซีด</b>, คลำก้อนได้, ดีซ่าน, <b>ประวัติมะเร็งทางเดินอาหารในครอบครัว</b> · <b>ยา:</b> NSAIDs, aspirin, ยาชุด, steroid, สมุนไพร, bisphosphonate · <b>เหล้า</b> บุหรี่ · <b>อาหาร</b>: กินไม่ตรงเวลา อาหารเผ็ด/มัน กาแฟ · ความเครียด · ประวัติ H. pylori",
   exp:"Dyspepsia = epigastric pain/burning, postprandial fullness, early satiety ≥ 1 เดือน · ไม่มี alarm feature → test-and-treat <i>H. pylori</i> หรือ PPI trial 4–8 สัปดาห์ · มี alarm feature หรืออายุมาก (เกณฑ์อายุต่างกันตาม guideline: ACG/CAG 2017 ใช้ ≥ 60 ปี; แนวทางในเอเชียมักใช้อายุน้อยกว่านี้) → <b>EGD</b>",
   rubric:"ได้เต็ม = ลักษณะการปวด + alarm features ครบหลายข้อ + ยา/เหล้า/อาหาร (ตามผู้จด) · ไม่ถาม alarm features = ขาดข้อสำคัญ",
   pts:[H("ลักษณะการปวด",35),P("Site, character, radiation, severity","ตำแหน่ง","ลิ้นปี่","epigastr","ลักษณะ","ร้าว","radiat","character","severity","รุนแรง"),P("Relation to meals, fullness, early satiety, bloating","อาหาร","มื้อ","meal","หลังกิน","หิว","อิ่มเร็ว","early satiety","ท้องอืด","bloat"),P("Heartburn / bowel habit (GERD, IBS)","แสบร้อน","heartburn","เรอเปรี้ยว","ขับถ่าย","bowel","ท้องเสีย","ท้องผูก"),
    H("Alarm features",40),CR(P("Weight loss","น้ำหนัก(ลด)?","weight","นน\\.? ?ลด")),P("Dysphagia / persistent vomiting","กลืน","dysphag","อาเจียน","vomit"),CR(P("GI bleeding / anemia (melena, hematemesis, pallor)","ถ่ายดำ","melena","อาเจียนเป็นเลือด","hematemesis","ซีด","anemia","bleed")),P("Family history of GI cancer / palpable mass / age","ครอบครัว","family","มะเร็ง","cancer","ก้อน","mass","alarm"),
    H("ยา เหล้า อาหาร",25),CR(P("Drugs: NSAIDs, aspirin, ยาชุด, steroid","nsaid","ยาแก้ปวด","aspirin","ยาชุด","steroid","สมุนไพร","(กิน|ใช้|ประวัติ)ยา")),P("Alcohol and smoking","เหล้า","สุรา","alcohol","บุหรี่","smok"),P("Diet, coffee, irregular meals, stress","กาแฟ","coffee","เผ็ด","ไม่ตรงเวลา","เครียด","stress")]}),
  B("8.2 What is your most likely diagnosis and initial management?",3,{tags:["hx"],key:"ซักจนได้ Dyspepsia",
   ans:"<b>Dyspepsia without alarm features</b> (uninvestigated dyspepsia; น่าจะ <b>functional dyspepsia</b> ชนิด postprandial distress) · Management: ปรับพฤติกรรม (กินตรงเวลา ลดกาแฟ/อาหารมัน) · <b>test-and-treat <i>H. pylori</i></b> (UBT หรือ stool antigen) และ/หรือ <b>PPI 4–8 สัปดาห์</b> · ไม่ดีขึ้นหรือมี alarm feature → EGD",
   exp:"Ddx: peptic ulcer disease, GERD, biliary colic, chronic pancreatitis, gastric cancer (ถ้ามี alarm feature) · Functional dyspepsia (Rome IV): postprandial distress syndrome / epigastric pain syndrome",
   pts:[CR(P("Dyspepsia","dyspeps","อาหารไม่ย่อย")),P("No alarm features","no alarm","ไม่มี alarm","without alarm"),P("H. pylori test-and-treat / PPI trial","pylori","\\bubt\\b","urea breath","\\bppi\\b","omeprazole","proton pump")]})
 ),
 interp:"History taking: chronic epigastric pain — ลักษณะการปวด, alarm features, ยา/เหล้า/อาหาร → dyspepsia",
 summary:["ซัก: ลักษณะปวด (ตำแหน่ง สัมพันธ์อาหาร อิ่มเร็ว) → alarm features → ยา (NSAIDs/ยาชุด) เหล้า อาหาร","Alarm: น้ำหนักลด กลืนลำบาก อาเจียนต่อเนื่อง GI bleeding ซีด ก้อน ประวัติมะเร็งในครอบครัว อายุมาก","ไม่มี alarm → test-and-treat H. pylori / PPI · มี → EGD"]}),

/* ===== สถานี 9 ===== */
Co({page:2,orig:"9",topic:"hx",sub:"Anemia",ex:1,title:"History taking — fatigue with macrocytic anemia",
 stem:`A woman presents with fatigue. Her CBC shows Hb 7 g/dL and MCV 112 fL. Take a history focusing on the anemia, then give your most likely diagnosis.`,
 gray:"9. ผู้หญิง อ่อนเพลีย ให้ผล CBC มา Hb 7 MCV 112 ซักประวัติเรื่องซีด · เฉลย: สร้างน้อย ถามอาหาร ผัก เนื้อ · ทำลายมาก เหลือง ปัสสาวะดำ · โรคประจำตัว · เลือดออกทาง GI GU mens · เฉลย ไม่ทานเนื้อเลย เป็น megaloblastic anemia from B12 deficiency",
 flag:"อายุ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับเฉลยผู้จด (ไม่ทานเนื้อเลย → B12 deficiency)",
 notes:"เฉลยผู้จด: แบ่งซักตามกลไก — สร้างน้อย (ถามอาหาร ผัก เนื้อ) · ทำลายมาก (เหลือง ปัสสาวะดำ) · โรคประจำตัว · เสียเลือด (GI, GU, ประจำเดือน) · คำตอบ: ไม่ทานเนื้อเลย → megaloblastic anemia from B12 deficiency",
 sp:"หญิง 42 ปี อ่อนเพลีย เหนื่อยง่าย 4 เดือน · <b>กินมังสวิรัติเคร่งครัด (vegan) มา 8 ปี ไม่กินเนื้อสัตว์ ไข่ นม เลย</b> กินผักผลไม้มาก · ชาปลายเท้าสองข้าง 2 เดือน เดินในที่มืดเซ (ถ้าถาม) · ลิ้นเจ็บแดง (ถ้าถาม) · ไม่เหลือง ปัสสาวะสีปกติ · ไม่ถ่ายดำ ไม่มีเลือดออกทางปัสสาวะ ประจำเดือนปกติไม่มาก · ไม่ดื่มเหล้า · ไม่มีโรคประจำตัว ไม่เคยผ่าตัดกระเพาะ/ลำไส้ · ไม่ได้กินยาประจำ (ไม่มี metformin, methotrexate, PPI) · ไม่มีท้องเสียเรื้อรัง · ไม่มีอาการคอพอก/ขี้หนาว · ครอบครัวไม่มีโรคเลือด/ไทรอยด์",
 parts:S(
  B("9.1 Take a history focusing on the anemia.",7,{tags:["hx"],key:"สร้างน้อย ถามอาหาร ผัก เนื้อ · ทำลายมาก เหลือง ปัสสาวะดำ · โรคประจำตัว · เลือดออกทาง GI GU mens",
   ans:"<b>อาการซีด:</b> ระยะเวลา เหนื่อยง่าย ใจสั่น · <b>สร้างน้อย:</b> <b>อาหาร — ผัก (folate), เนื้อสัตว์/ไข่/นม (B12)</b>, มังสวิรัติ, alcohol, ผ่าตัดกระเพาะ/ลำไส้, ท้องเสียเรื้อรัง (malabsorption), ยา (metformin, PPI, methotrexate, hydroxyurea, zidovudine, anticonvulsant), อาการไทรอยด์ต่ำ, โรคตับ · <b>อาการของ B12 deficiency:</b> <b>ชาปลายมือปลายเท้า</b> เดินเซ ความจำ/อารมณ์เปลี่ยน, ลิ้นเจ็บ (glossitis) · <b>ทำลายมาก:</b> <b>ตัวเหลือง ตาเหลือง ปัสสาวะสีดำ/เข้ม</b>, โรคเลือดในครอบครัว · <b>เสียเลือด:</b> <b>GI</b> (ถ่ายดำ อาเจียนเป็นเลือด), <b>GU</b> (ปัสสาวะเป็นเลือด), <b>ประจำเดือน</b>มาก · <b>โรคประจำตัว</b> (autoimmune thyroid, vitiligo = pernicious anemia) · ไข้ เลือดออกง่าย ต่อมน้ำเหลือง (bone marrow disease/MDS)",
   exp:"MCV > 100: megaloblastic (B12, folate, ยา) vs non-megaloblastic (alcohol, liver disease, hypothyroidism, reticulocytosis จาก hemolysis/bleeding, MDS) · MCV > 110–115 มักเป็น megaloblastic",
   rubric:"ได้เต็ม = ครบ 3 กลไก (สร้างน้อย-ทำลายมาก-เสียเลือด) + ถามอาหารจนรู้ว่าไม่กินเนื้อ + อาการทางระบบประสาท · ไม่ถามอาหาร = ขาดข้อสำคัญ",
   pts:[H("สร้างน้อย",45),CR(P("Diet: meat, eggs, milk, vegetables (vegetarian/vegan)","อาหาร","เนื้อ","meat","ผัก","vegan","vegetar","มังสวิรัติ","เจ","diet")),P("Alcohol, GI surgery, malabsorption, drugs","เหล้า","alcohol","ผ่าตัด","gastrect","ท้องเสีย","malabsor","metformin","\\bppi\\b","methotrex","(กิน|ใช้|ประวัติ)ยา"),P("Neurological symptoms (numbness, gait), glossitis","อาการชา","ชาปลาย","ชามือ","ชาเท้า","numb","paresth","เดินเซ","gait","ลิ้น","gloss","ความจำ"),
    H("ทำลายมาก",20),CR(P("Jaundice and dark urine","เหลือง","jaundice","ปัสสาวะ(สี)?(ดำ|เข้ม)","dark urine","cola")),
    H("เสียเลือด",20),P("Blood loss: GI, GU, menstruation","ถ่ายดำ","melena","\\bgi\\b","ปัสสาวะเป็นเลือด","hematuria","\\bgu\\b","ประจำเดือน","mens"),
    H("อื่น ๆ",15),P("Underlying disease (thyroid, autoimmune, liver)","โรคประจำตัว","underlying","u/d","thyro","ไทรอยด์","autoimmune","ตับ")]}),
  B("9.2 What is your most likely diagnosis?",3,{tags:["hx"],key:"ไม่ทานเนื้อเลย เป็น megaloblastic anemia from B12 deficiency",
   ans:"<b>Megaloblastic anemia from vitamin B12 deficiency</b> (nutritional — strict vegan) ± subacute combined degeneration (ชาปลายเท้า เดินเซ) · Ddx: folate deficiency, pernicious anemia, hypothyroidism, alcohol/liver disease, MDS",
   exp:"Ix: CBC + reticulocyte count, PBS (macro-ovalocyte, hypersegmented neutrophil), serum B12 ± methylmalonic acid/homocysteine, folate, LDH/indirect bilirubin สูง (ineffective erythropoiesis), TSH · Rx: vitamin B12 (cyanocobalamin 1,000 µg IM ทุกวัน/สัปดาห์แล้วเดือนละครั้ง หรือรับประทานขนาดสูง 1,000–2,000 µg/วัน) · <b>อย่าให้ folate อย่างเดียว</b>ในผู้ป่วย B12 deficiency (อาการทางประสาทแย่ลง)",
   rubric:"ตอบ megaloblastic anemia โดยไม่บอกสาเหตุ B12 = บางส่วน · ตอบ folate deficiency = บางส่วน",
   pts:[CR(P("Megaloblastic anemia","megaloblast","macrocytic")),CR(P("Vitamin B12 deficiency (no meat intake)","b12","b ?12","cobalamin","ไม่กินเนื้อ","ไม่ทานเนื้อ","vegan")),P("Differential: folate deficiency / pernicious anemia / hypothyroid","folate","folic","pernicious","thyro")]})
 ),
 interp:"History taking: macrocytic anemia — ซักตามกลไกสร้างน้อย/ทำลายมาก/เสียเลือด + อาหาร → B12 deficiency จากไม่กินเนื้อสัตว์",
 summary:["ซีด: ซักสร้างน้อย (อาหาร ยา เหล้า malabsorption) / ทำลายมาก (เหลือง ปัสสาวะดำ) / เสียเลือด (GI GU ประจำเดือน)","MCV 112 + ไม่กินเนื้อ/ไข่/นม = B12 deficiency — ถามอาการชา เดินเซ ลิ้นอักเสบ","Rx B12 · ห้ามให้ folate อย่างเดียว"]}),

/* ===== สถานี 10 ===== */
Co({page:2,orig:"10",topic:"hx",sub:"GI bleeding",ex:1,title:"History taking — vomiting blood in an 80-year-old woman (history from her daughter)",seen:"SI133 Ro403–404 ข้อ 5 (ผู้หญิง 80 ปี อาเจียนเป็นเลือด ซักจากญาติ — warfarin + NSAIDs) และคล้าย SI132 Ro403–404 ข้อ 21",
 stem:`An 80-year-old woman is brought to the emergency department with vomiting of blood. She is being resuscitated. Take a history from her daughter, then give your most likely diagnosis.`,
 gray:"10. ซักประวัติผู้หญิงอายุ 80 ปี อาเจียนเป็นเลือด ให้ซักลูกสาวแทน · เฉลย: ปริมาณ, อาการ, alarming feature, ยา ต้องซักจนเห็นซองยา จะมี 2 ชุด ชุดแรกยาประจำตัว ชุดสองคือ NSAIDs ถามว่าใครจัดยาให้",
 flag:"บทผู้ป่วย (sp) และรายการยาประจำตัว Claude แต่งให้ตรงกับเฉลยผู้จด (ซองยา 2 ชุด: ยาประจำตัว + NSAIDs)",
 notes:"เฉลยผู้จด: ซักปริมาณ อาการ alarming feature · ยา — ต้องซักจนได้เห็นซองยา จะมี 2 ชุด: ชุดแรกยาประจำตัว ชุดสองคือ NSAIDs · ถามว่าใครจัดยาให้ (เฉลยต่อจากหน้า 2 ไปหน้า 3)",
 sp:"ลูกสาวอายุ 50 ปี (ผู้ให้ประวัติ): แม่อาเจียนเป็นเลือดสีแดงคล้ำปนลิ่ม 2 ครั้งเมื่อเช้า ครั้งละประมาณ 1 ถ้วย · ถ่ายดำเหนียว 1 ครั้งเมื่อคืน · หน้ามืดเกือบเป็นลมตอนลุกเข้าห้องน้ำ · ไม่ปวดท้องชัด (แน่นลิ้นปี่เล็กน้อย 1 สัปดาห์) · ไม่เคยเป็นแบบนี้มาก่อน · ไม่มีน้ำหนักลด กลืนได้ปกติ · ไม่ดื่มเหล้า ไม่มีโรคตับ ตัวไม่เหลือง · โรคประจำตัว: ความดันสูง ไขมันสูง เคยเป็นสโตรกเล็กน้อย 3 ปีก่อน, ข้อเข่าเสื่อม · <b>ถ้าผู้สอบขอดูยา ลูกสาวหยิบซองยาให้ 2 ชุด</b>: ชุดที่ 1 ยาประจำตัวจากโรงพยาบาล (amlodipine, atorvastatin, aspirin 81 mg) · ชุดที่ 2 ยาแก้ปวดเข่าจากคลินิกใกล้บ้านเมื่อ 2 สัปดาห์ก่อน (ibuprofen 400 mg วันละ 3 ครั้ง) · ใครจัดยา: แม่จัดยาเอง ลูกทำงานต่างจังหวัด บางวันแม่กินยาแก้ปวดเพิ่มเองเมื่อปวดมาก · ไม่มีภาวะสับสนก่อนหน้า",
 parts:S(
  B("10.1 Take a history from the daughter.",7,{tags:["hx"],key:"ปริมาณ, อาการ, alarming feature, ยา ต้องซักจนเห็นซองยา จะมี 2 ชุด ชุดแรกยาประจำตัว ชุดสองคือ NSAIDs ถามว่าใครจัดยาให้",
   ans:"แนะนำตัว ยืนยันความสัมพันธ์ของผู้ให้ประวัติ · <b>ปริมาณ</b> จำนวนครั้ง สี (แดงสด/คล้ำ/coffee-ground) ลิ่มเลือด · ถ่ายดำ/ถ่ายเป็นเลือด · <b>อาการ</b>: หน้ามืด เป็นลม ใจสั่น เหนื่อย สับสน ปวดท้อง · อาเจียนรุนแรงก่อนมีเลือด (Mallory-Weiss) · <b>Alarm features</b>: น้ำหนักลด กลืนลำบาก เบื่ออาหาร ก้อนในท้อง (malignancy) · หาสาเหตุ: โรคตับ/เหล้า (varices), แผลในกระเพาะ, เคยเลือดออกมาก่อน · <b>ยา (หัวใจของสถานี): ขอให้ญาตินำซองยามาดูทุกชุด</b> — ยาประจำตัว (antiplatelet/aspirin, anticoagulant) และ<b>ยาแก้ปวด NSAIDs</b>/ยาชุด/สมุนไพร/steroid ที่ซื้อหรือได้จากที่อื่น · <b>ใครจัดยาให้</b> กินอย่างไร กินเกินไหม · โรคประจำตัว · baseline function/cognition",
   exp:"ผู้สูงอายุ: polypharmacy และยาจากหลายแหล่งเป็นสาเหตุสำคัญ — ต้องดูยาจริง (brown bag review) · aspirin + NSAID เพิ่มความเสี่ยงแผลเลือดออกหลายเท่า และ ibuprofen รบกวนฤทธิ์ antiplatelet ของ aspirin",
   rubric:"ผู้จด: ต้องซักจนได้เห็นซองยา (2 ชุด) และถามว่าใครจัดยา — ไม่ขอดูยา = ขาดข้อสำคัญ",
   pts:[H("ลักษณะเลือด/อาการ",30),P("Amount, frequency and colour","ปริมาณ","กี่ครั้ง","จำนวนครั้ง","สี(แดง|ดำ|คล้ำ|น้ำตาล)","coffee","amount","ลิ่ม"),P("Melena / hematochezia","ถ่ายดำ","melena","อุจจาระ","stool"),P("Symptoms of hypovolemia: dizziness, syncope, palpitation","หน้ามืด","เป็นลม","ใจสั่น","syncope","dizz","palpitat"),
    H("Alarm/สาเหตุ",20),P("Alarm features: weight loss, dysphagia, anorexia","น้ำหนัก","weight","กลืน","dysphag","เบื่ออาหาร","alarm","ก้อน"),P("Liver disease / alcohol / previous bleeding","ตับ","liver","เหล้า","alcohol","เคยเป็น","previous"),
    H("ยา",50),CR(P("Ask to see all medication packets","ขอดู(ซอง)?ยา","ดูยา","ซองยา","ถุงยา","see (the )?(drug|medic)","brown bag")),P("Regular medications (antiplatelet/anticoagulant)","ยาประจำ","aspirin","antiplatelet","anticoag","warfarin","ต้านเกล็ด"),CR(P("NSAIDs / analgesics from other sources","nsaid","ยาแก้ปวด","ibuprofen","diclofenac","ยาชุด","คลินิก","ซื้อยา")),P("Who prepares/manages the medications","ใครจัดยา","จัดยา","ผู้ดูแล","caregiver","กินเอง")]}),
  B("10.2 What is your most likely diagnosis?",3,{tags:["hx"],
   ans:"<b>Upper GI bleeding</b> from <b>NSAID-induced peptic ulcer</b> (ibuprofen ร่วมกับ aspirin) ในผู้สูงอายุที่<b>จัดยาเอง</b> (polypharmacy, ยาจากหลายแหล่ง) · ประเมินภาวะ hypovolemia",
   exp:"Management: resuscitation, CBC, BUN/Cr, PT/INR, G/M · หยุด NSAID (และพิจารณาหยุด aspirin ชั่วคราวตามความเสี่ยงหัวใจ/สมอง — secondary prevention ควรเริ่มกลับเร็วเมื่อห้ามเลือดได้) · IV PPI · EGD ภายใน 24 ชม. · Glasgow-Blatchford score · หลังจำหน่าย: ทบทวนยา ให้ญาติ/ผู้ดูแลช่วยจัดยา เลี่ยง NSAID (ใช้ paracetamol/topical NSAID)",
   rubric:"ตอบ UGIB อย่างเดียวโดยไม่บอกสาเหตุจากยา = บางส่วน",
   pts:[CR(P("Upper GI bleeding / peptic ulcer","ugib","upper gi","gi bleed","ทางเดินอาหารส่วนบน","peptic","ulcer","แผล")),CR(P("Caused by NSAIDs (± aspirin)","nsaid","ibuprofen","ยาแก้ปวด")),P("Polypharmacy / self-managed medications","polypharm","จัดยาเอง","หลายแหล่ง","aspirin")]})
 ),
 interp:"History taking จากญาติ: UGIB ในผู้สูงอายุ — ต้องขอดูซองยาทุกชุด (ยาประจำตัว + NSAIDs จากคลินิก) และถามว่าใครจัดยา",
 summary:["ซัก: ปริมาณ สี ถ่ายดำ อาการ hypovolemia + alarm features","ยาคือหัวใจ: ขอดูซองยาทุกชุด — ยาประจำตัว (aspirin) + NSAIDs จากที่อื่น · ใครจัดยาให้","Dx: NSAID-induced peptic ulcer bleeding → หยุด NSAID, IV PPI, EGD"]}),

/* ===== สถานี 11 ===== */
Co({page:3,orig:"11",topic:"hx",sub:"Fever",ex:1,title:"History taking — high fever for 3 days",seen:"คล้าย SI133 Ro407–408 OSCE 2 (ไข้สูงหนาวสั่น 4–5 วัน)",
 stem:`A patient presents with high fever for 3 days. Take a focused history, then give 3 differential diagnoses.`,
 gray:"11. ซักประวัติมีไข้สูง 3 วัน และวินิจฉัยมา 3 โรค · เฉลย: ลักษณะของไข้ สูงตลอดหรือมีช่วงที่ลง · ประวัติตามระบบอื่นๆ ประวัติเดินทาง · ปวดเมื่อย จุดเลือดออก",
 flag:"อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่ง — ไฟล์ไม่บอก 3 โรคที่ต้องตอบ (Claude ให้ dengue เด่น + exposure ที่ทำให้ต้องนึกถึง leptospirosis/scrub typhus)",
 notes:"เฉลยผู้จด: ลักษณะของไข้ (สูงตลอดหรือมีช่วงที่ลง), ประวัติตามระบบอื่น ๆ, ประวัติเดินทาง, ปวดเมื่อย, จุดเลือดออก · ไม่ได้เขียน 3 โรคที่ตอบ",
 sp:"ชาย 30 ปี ไข้สูงลอย 3 วัน (วัดได้ 39–40 °C) ไม่ลดลงเลยแม้กินยาลดไข้ · ปวดศีรษะ ปวดกระบอกตา ปวดเมื่อยกล้ามเนื้อทั้งตัวมาก (ไม่เจาะจงที่น่อง) · เบื่ออาหาร คลื่นไส้ · เมื่อเช้าเห็นจุดแดงเล็ก ๆ ที่แขน · ไม่ไอ ไม่เจ็บคอ ไม่มีน้ำมูก · ไม่มีปัสสาวะแสบขัด ไม่ท้องเสีย · ไม่เหลือง · ไม่มีแผล/สะเก็ดตามตัว (ถ้าถาม) · บ้านอยู่ชานเมืองกรุงเทพ เพื่อนบ้านเป็นไข้เลือดออก 2 คน · <b>1 สัปดาห์ก่อนเดินลุยน้ำท่วมหน้าบ้าน</b> · ไม่ได้เข้าป่า ไม่ได้เดินทางไปชายแดน · ไม่มีโรคประจำตัว ไม่ได้กินยาอื่นนอกจาก paracetamol · ไม่มีเพศสัมพันธ์เสี่ยง",
 parts:S(
  B("11.1 Take a focused history.",7,{tags:["hx"],key:"ลักษณะของไข้ สูงตลอดหรือมีช่วงที่ลง · ประวัติตามระบบอื่นๆ ประวัติเดินทาง · ปวดเมื่อย จุดเลือดออก",
   ans:"<b>ลักษณะไข้:</b> onset, วัดได้เท่าไร, <b>สูงตลอด (continuous) หรือมีช่วงลง</b> (intermittent/remittent), หนาวสั่น (rigor), ตอบสนองต่อยาลดไข้ · <b>อาการตามระบบ (หาตำแหน่งติดเชื้อ):</b> ปวดศีรษะ/คอแข็ง/ซึม, ไอ เจ็บคอ หอบ, ปวดท้อง ท้องเสีย ตัวเหลือง, ปัสสาวะแสบขัด/ปวดหลัง, ผื่น แผล ข้ออักเสบ · <b>ปวดเมื่อยกล้ามเนื้อ</b> (ปวดน่อง = leptospirosis), ปวดกระบอกตา · <b>จุดเลือดออก</b>/เลือดกำเดา/เลือดออกตามไรฟัน · <b>ประวัติเดินทาง/สิ่งแวดล้อม:</b> เข้าป่า/ชายแดน (malaria, scrub typhus), ลุยน้ำ/ย่ำโคลน (leptospirosis), ยุง/เพื่อนบ้านเป็นไข้เลือดออก (dengue), สัตว์ · คนรอบตัวป่วย · โรคประจำตัว ภูมิคุ้มกัน ยาที่ใช้ เพศสัมพันธ์เสี่ยง",
   exp:"Acute undifferentiated fever ในไทย: dengue, leptospirosis, scrub typhus, murine typhus, malaria, influenza/COVID-19 · Scrub typhus มี eschar ตรงที่ตัวไรกัด (รักแร้ ขาหนีบ ขอบกางเกง) ต้องตรวจหา",
   rubric:"ได้เต็ม = ลักษณะไข้ + review of systems + ประวัติเดินทาง/สัมผัส + ปวดเมื่อย/จุดเลือดออก (ตามผู้จด)",
   pts:[H("ลักษณะไข้",25),CR(P("Fever pattern: continuous vs. remitting, chills","สูงตลอด","ไข้ลอย","ช่วงที่ลง","continuous","intermittent","remit","pattern","หนาวสั่น","chill","rigor")),P("Onset and response to antipyretics","onset","กี่วัน","ยาลดไข้","paracetamol","วัดได้"),
    H("อาการตามระบบ",30),CR(P("Review of systems to localize infection","ไอ","cough","เจ็บคอ","ปัสสาวะ","urine","ท้องเสีย","diarr","ปวดท้อง","ปวดศีรษะ","headache","คอแข็ง","ผื่น","rash","review of system","\\bros\\b")),P("Myalgia / calf pain / retro-orbital pain","ปวดเมื่อย","myalg","น่อง","calf","กระบอกตา","retro.?orbit"),P("Bleeding: petechiae, epistaxis, gum bleeding","จุดเลือดออก","petechia","เลือดกำเดา","เลือดออก","bleed"),
    H("สิ่งแวดล้อม",45),CR(P("Travel history (forest, border areas)","เดินทาง","travel","เข้าป่า","ป่า","ชายแดน","ต่างจังหวัด")),P("Flood/mud exposure, animals (leptospirosis)","น้ำท่วม","ลุยน้ำ","flood","โคลน","หนู","สัตว์","animal"),P("Contacts / neighbours with dengue, mosquitoes","เพื่อนบ้าน","คนรอบ","contact","ไข้เลือดออก","ยุง","mosquito"),P("Underlying disease, drugs, sexual history","โรคประจำตัว","underlying","u/d","(กิน|ใช้)ยา","เพศสัมพันธ์","sexual")]}),
  B("11.2 Give 3 differential diagnoses.",3,{tags:["hx"],flag:"ไฟล์ไม่ได้เขียน 3 โรค — เฉลยโดย Claude ตามบทผู้ป่วย",
   ans:"1. <b>Dengue infection</b> (ไข้สูงลอย ปวดกระบอกตา ปวดเมื่อย จุดเลือดออก เพื่อนบ้านเป็น) — most likely · 2. <b>Leptospirosis</b> (ลุยน้ำท่วม) · 3. <b>Scrub typhus</b>/rickettsial infection (หรือ <b>influenza</b>/COVID-19; <b>malaria</b> ถ้ามีประวัติเข้าป่า/ชายแดน)",
   exp:"Ix: CBC (WBC/platelet ต่ำ, Hct), tourniquet test, dengue NS1 Ag (วัน 1–5)/IgM, LFT, UA · leptospirosis: serology (MAT), PCR · scrub typhus: หา eschar, serology/PCR · ระวังให้ NSAID/aspirin ในผู้สงสัย dengue · ถ้าแยก leptospirosis/scrub typhus ไม่ได้และอาการหนัก ให้ doxycycline empirical",
   rubric:"ต้องมี dengue + อีก 2 โรคที่เข้ากับประวัติ (acute febrile illness ในไทย)",
   pts:[CR(P("Dengue infection","dengue","ไข้เลือดออก","\\bdhf\\b","\\bdf\\b")),G("Two other tropical febrile illnesses",2,P("Leptospirosis","lepto","ฉี่หนู"),P("Scrub typhus / rickettsia","scrub","typhus","rickett","tsutsugamushi"),P("Malaria","malaria","มาลาเรีย"),P("Influenza / COVID-19","influenza","flu","ไข้หวัดใหญ่","covid"))]})
 ),
 interp:"History taking: acute fever 3 วัน — ลักษณะไข้, ROS, เดินทาง/สัมผัส, ปวดเมื่อย, จุดเลือดออก → ddx dengue, leptospirosis, scrub typhus",
 summary:["ไข้: สูงตลอดหรือมีช่วงลง หนาวสั่น · ROS หาตำแหน่งติดเชื้อ","ประวัติเดินทาง/ป่า/ชายแดน/ลุยน้ำ/เพื่อนบ้านเป็นไข้เลือดออก · ปวดเมื่อย ปวดน่อง จุดเลือดออก","Ddx ในไทย: dengue, leptospirosis, scrub typhus, malaria, influenza"]}),

/* ===== สถานี 12 ===== */
Co({page:3,orig:"12",topic:"ekg",sub:"STEMI/ischemia",title:"Chest pain — 12-lead EKG",
 stem:`A patient presents with acute chest pain. A 12-lead EKG is shown.<br>1. Interpret the EKG.<br>2. What is your diagnosis and immediate management?`,
 gray:"12. EKG : STEMI · เฉลย: ST elevation",
 flag:NOIMG+" · ไฟล์จดแค่หัวข้อ \"EKG : STEMI\" ไม่บอกประวัติ/ตำแหน่ง lead — อาการนำ chest pain และตัวอย่างตำแหน่ง (inferior) Claude ใส่ · 12.2 ส่วน management "+ADD,
 notes:"เฉลยผู้จด: ST elevation · ไฟล์ไม่บอกว่า ST elevation ที่ lead ใด",
 parts:S(
  B("12.1 Interpret the EKG.",4,{tags:["ekg"],key:"ST elevation",
   ans:"อ่านเป็นระบบ: rhythm, rate, axis, intervals → <b>ST-segment elevation</b> ≥ 1 mm ใน <b>≥ 2 contiguous leads</b> (V2–V3: ≥ 2 mm ในชาย ≥ 40 ปี, ≥ 2.5 mm ในชาย &lt; 40 ปี, ≥ 1.5 mm ในหญิง) + <b>reciprocal ST depression</b> ใน lead ตรงข้าม ± hyperacute T, pathologic Q · ระบุตำแหน่ง: <b>inferior</b> (II, III, aVF; reciprocal I, aVL), anterior/anteroseptal (V1–V4), lateral (I, aVL, V5–V6) · inferior STEMI → ทำ right-sided leads (V4R) หา RV infarction",
   exp:"Culprit artery: inferior = RCA (ส่วนใหญ่)/LCx · anterior = LAD · lateral = LCx/diagonal · STEMI equivalents: new LBBB ร่วมกับอาการ (Sgarbossa), posterior MI (ST depression V1–V3 + tall R), de Winter T wave",
   rubric:"ตอบตามรูปจริง · ต้องบอก ST elevation + ตำแหน่ง lead/territory จึงได้เต็ม",
   pts:[CR(P("ST-segment elevation in ≥ 2 contiguous leads","st.?(segment )?elevat","\\bste\\b","st ยก","st.?elev")),P("Reciprocal ST depression","reciprocal","st ?(segment )?depress"),P("Localize the territory (inferior/anterior/lateral)","inferior","anterior","lateral","septal","ii, ?iii","v[1-6]")]}),
  B("12.2 What is your diagnosis and immediate management?",4,{tags:["ekg"],key:"EKG : STEMI (ช่องโจทย์)",flag:ADD+" (management)",
   ans:"<b>Acute ST-elevation myocardial infarction (STEMI)</b> (ระบุตำแหน่งตาม lead) · Management: monitor, O₂ เมื่อ SpO₂ &lt; 90%, IV access · <b>Aspirin 162–325 mg เคี้ยว</b> + <b>P2Y12 inhibitor</b> (clopidogrel 300–600 mg หรือ ticagrelor 180 mg) · anticoagulant (heparin/enoxaparin) · nitroglycerin SL ถ้า BP ปกติและไม่ใช่ RV infarction · <b>Reperfusion ทันที</b>: <b>primary PCI</b> (FMC-to-device ≤ 90 นาที / ≤ 120 นาทีถ้าต้องส่งต่อ) หรือ <b>fibrinolysis</b> (streptokinase/tenecteplase) ภายใน 30 นาทีถ้า PCI ไม่ทันและอาการ &lt; 12 ชม.",
   exp:"ข้อห้ามให้ fibrinolytic: เคย ICH, ischemic stroke &lt; 3 เดือน, active bleeding, aortic dissection, intracranial neoplasm, head trauma &lt; 3 เดือน · ใน RV infarction หลีกเลี่ยง nitrate/morphine ให้ IV fluid",
   pts:[CR(P("STEMI","stemi","st.?elevation myocardial","acute mi","myocardial infarct")),P("Aspirin + P2Y12 inhibitor + anticoagulant","aspirin","\\basa\\b","clopidogrel","ticagrelor","p2y12","heparin","enoxaparin"),CR(P("Immediate reperfusion: primary PCI or fibrinolysis","\\bpci\\b","reperfus","fibrinoly","thromboly","streptokinase","tenecteplase","\\bsk\\b"))]})
 ),
 interp:"EKG: ST elevation ใน contiguous leads + reciprocal change → STEMI → reperfusion",
 summary:["STEMI: ST elevation ≥ 1 mm ใน ≥ 2 contiguous leads (V2–V3 เกณฑ์สูงกว่า) + reciprocal depression","ระบุ territory: inferior II III aVF · anterior V1–V4 · lateral I aVL V5–V6","Aspirin + P2Y12 + anticoagulant → primary PCI ≤ 90–120 นาที หรือ fibrinolysis ≤ 30 นาที"]}),

/* ===== สถานี 13 ===== */
Co({page:3,orig:"13",topic:"ekg",sub:"Tachyarrhythmia",title:"Palpitation — 12-lead EKG",
 stem:`A patient presents with palpitation. A 12-lead EKG is shown.<br>1. Interpret the EKG.<br>2. What is your diagnosis and initial management?`,
 gray:"13. EKG : Atrial fibrillation · เฉลย: Irregular, no p wave",
 flag:NOIMG+" · ไฟล์จดแค่หัวข้อ — อาการนำ palpitation Claude ใส่ · 13.2 ส่วน management "+ADD,
 notes:"เฉลยผู้จด: Irregular, no p wave",
 parts:S(
  B("13.1 Interpret the EKG.",4,{tags:["ekg"],key:"Irregular, no p wave",
   ans:"<b>Irregularly irregular rhythm</b> (R-R ไม่สม่ำเสมอและไม่มีรูปแบบ) · <b>ไม่มี P wave</b> — เห็น <b>fibrillatory (f) waves</b> เป็นคลื่นเล็กไม่สม่ำเสมอ (ชัดใน V1, II) · <b>narrow QRS</b> · บอก ventricular rate (เช่น rapid ventricular response > 100/min หรือ controlled) → <b>Atrial fibrillation</b>",
   exp:"Ddx irregular narrow-complex: multifocal atrial tachycardia (มี P ≥ 3 รูปแบบ), atrial flutter with variable block (flutter wave รูปฟันเลื่อย), sinus arrhythmia/frequent PACs (มี P นำ)",
   pts:[CR(P("Irregularly irregular rhythm","irregular","ไม่สม่ำเสมอ")),CR(P("Absent P waves / fibrillatory waves","no p","absent p","ไม่มี p","f ?wave","fibrillatory")),P("Narrow QRS and ventricular rate","narrow","rate","rvr","rapid ventricular"),P("Atrial fibrillation","atrial fib","\\baf\\b","a\\.? ?fib")]}),
  B("13.2 What is your diagnosis and initial management?",4,{tags:["ekg"],key:"EKG : Atrial fibrillation (ช่องโจทย์)",flag:ADD+" (management)",
   ans:"<b>Atrial fibrillation</b> · ประเมินความเสถียร: <b>unstable</b> (hypotension, shock, chest pain, AHF, AMS) → <b>synchronized cardioversion</b> · stable → <b>rate control</b> (beta-blocker เช่น metoprolol, หรือ non-DHP CCB diltiazem/verapamil ถ้า EF ปกติ; digoxin/amiodarone ถ้า HFrEF/hypotension) · หาสาเหตุ: thyrotoxicosis, valvular heart disease, ischemia, sepsis, electrolyte, alcohol · <b>ประเมิน stroke risk ด้วย CHA₂DS₂-VASc</b> → anticoagulation (DOAC หรือ warfarin; <b>warfarin</b> ถ้า moderate–severe mitral stenosis หรือ mechanical valve) · ประเมิน bleeding risk (HAS-BLED)",
   exp:"Anticoagulation: CHA₂DS₂-VASc ≥ 2 ในชาย / ≥ 3 ในหญิง แนะนำ · ชาย 1 / หญิง 2 พิจารณา · AF > 48 ชม. หรือไม่ทราบระยะเวลา ก่อน elective cardioversion ต้อง anticoagulate ≥ 3 สัปดาห์ หรือทำ TEE",
   pts:[CR(P("Atrial fibrillation","atrial fib","\\baf\\b","a\\.? ?fib")),P("Unstable → synchronized cardioversion","cardiover","synchron","unstable"),CR(P("Rate control (beta-blocker / diltiazem / digoxin)","rate control","beta.?block","metoprolol","propranolol","diltiazem","verapamil","digoxin","amiodarone")),P("CHA₂DS₂-VASc and anticoagulation","cha2ds2","chads","vasc","anticoag","warfarin","doac","apixaban","rivaroxaban","dabigatran")]})
 ),
 interp:"EKG: irregularly irregular + no P wave → AF → rate control + CHA₂DS₂-VASc anticoagulation",
 summary:["AF: irregularly irregular, ไม่มี P wave (มี f wave), QRS แคบ","Unstable → synchronized cardioversion · stable → rate control (BB/non-DHP CCB/digoxin)","CHA₂DS₂-VASc → anticoagulation · หาสาเหตุ (thyroid, valve, ischemia)"]}),

/* ===== สถานี 14 ===== */
Co({page:3,orig:"14",topic:"micro",sub:"PBS",title:"Fatigue and bleeding for 3 months without fever — blood smear",seen:"คล้าย SI127 Ro409–412 ข้อ 3 และ SI133 Ro403–404 ข้อ 1 (pancytopenia → aplastic anemia)",
 stem:`A patient presents with fatigue and bleeding for 3 months. There is no fever. A peripheral blood smear is shown.<br>1. Describe the blood smear.<br>2. Give 3 differential diagnoses.<br>3. What investigations would you send?`,
 gray:"14. Blood smear -> คนไข้อ่อนเพลีย เลือดออก ไม่มีไข้ มา 3 เดือน · Relative lymphocytosis, NCNC RBC, plt decrease · วินิจฉัยแยกโรค 3 โรค · ส่งตรวจ? · เฉลย: 1. Aplastic anemia 2. Acute leukemia 3. MDS 4. Myelopthisis อื่นๆ · ส่งตรวจ Bone marrow aspiration, cytochemistry",
 flag:NOIMG+" · คำบรรยายสเมียร์ (relative lymphocytosis, NCNC RBC, plt decrease) อยู่ในช่องโจทย์ของไฟล์ → ย้ายไป gray ไม่ใส่ใน stem · ไฟล์ไม่บอกอายุ/เพศ",
 notes:"ช่องโจทย์บรรยายสเมียร์: relative lymphocytosis, NCNC RBC, plt decrease · เฉลยผู้จด: ddx 1. Aplastic anemia 2. Acute leukemia 3. MDS 4. Myelophthisis อื่น ๆ · ส่งตรวจ bone marrow aspiration, cytochemistry · เทียบ OSCE_REF (Key PBS: Aplastic anemia) ตรงกัน",
 opinion:"เฉลยผู้จดส่ง bone marrow aspiration + cytochemistry — ใน aplastic anemia ต้องทำ <b>bone marrow biopsy</b> ด้วยเพื่อประเมิน cellularity (aspiration อย่างเดียวมัก dry tap/hypocellular แยกจาก sampling error ไม่ได้) · cytochemistry ใช้แยกชนิด acute leukemia จึงใช้ได้เมื่อพบ blast · Myelophthisis มักให้ leukoerythroblastic picture (NRC, teardrop, left shift) ซึ่งไม่เข้ากับสเมียร์นี้ จึงเป็น ddx ลำดับรอง",
 parts:S(
  B("14.1 Describe the blood smear.",4,{tags:["micro"],key:"Relative lymphocytosis, NCNC RBC, plt decrease (ช่องโจทย์)",
   ans:"<b>RBC:</b> <b>normochromic normocytic</b>, ไม่มี anisocytosis/poikilocytosis, <b>ไม่มี polychromasia</b> · <b>WBC:</b> จำนวน<b>ลดลง</b>, <b>lymphocyte predominate (relative lymphocytosis)</b>, ไม่พบ blast/dysplastic cell · <b>Platelet:</b> <b>ลดลง</b> (&lt; 5/OF)",
   exp:"Key PBS (OSCE_REF): lymphocyte เด่นกว่า neutrophil แต่จำนวน lymphocyte รวมไม่เพิ่ม · ต้องมองหาเซลล์ผิดปกติเพื่อแยกโรค: blast, dysplastic myeloid cells, hairy lymphocytes",
   rubric:"ได้เต็ม = บรรยายครบ 3 lineage",
   pts:[H("RBC",30),CR(P("Normochromic normocytic RBC","ncnc","normochrom","normocyt")),P("No polychromasia","no polychrom","ไม่มี polychrom"),
    H("WBC",40),P("Decreased WBC","decreas\\w* (wbc|white|in number)","leukopenia","wbc.{0,25}(ลด|ต่ำ|decreas)"),CR(P("Relative lymphocytosis","relative lymph","lymphocyte predom","l predom","lymphocyte เด่น")),P("No blasts","no blast","ไม่พบ blast","ไม่มี blast"),
    H("Platelet",30),CR(P("Decreased platelets","decreas\\w* (plt|platelet)","plt ?(decreas|ลด|ต่ำ)","thrombocytopenia","เกล็ดเลือด(ลด|ต่ำ)","platelet.{0,25}(ลด|ต่ำ|decreas)"))]}),
  B("14.2 Give 3 differential diagnoses.",3,{tags:["micro"],key:"1. Aplastic anemia 2. Acute leukemia 3. MDS 4. Myelopthisis อื่นๆ",
   ans:"1. <b>Aplastic anemia</b> (most likely) · 2. <b>Acute leukemia</b> (aleukemic) · 3. <b>Myelodysplastic syndrome</b> (hypoplastic MDS) · อื่น ๆ: myelophthisis, PNH, megaloblastic anemia, hypersplenism, hairy cell leukemia",
   exp:"สาเหตุ aplastic anemia: idiopathic (immune), ยา (chloramphenicol, carbamazepine), benzene, seronegative hepatitis, PNH, pregnancy",
   pts:[CR(P("Aplastic anemia","aplastic")),G("Two other marrow failure differentials",2,P("Acute leukemia","leukemia","leukaemia","\\baml\\b","\\ball\\b"),P("Myelodysplastic syndrome","\\bmds\\b","myelodysplas"),P("Myelophthisis","myelopht","myelopth","infiltrat"),P("PNH","\\bpnh\\b","paroxysmal"))]}),
  B("14.3 What investigations would you send?",3,{tags:["micro"],key:"ส่งตรวจ Bone marrow aspiration, cytochemistry",
   ans:"<b>Bone marrow aspiration + biopsy</b> (cellularity &lt; 25% ใน aplastic anemia, หา blast/dysplasia/infiltration) · <b>cytochemistry</b>/flow cytometry ถ้าพบ blast · reticulocyte count · flow cytometry หา PNH clone (CD55/CD59, FLAER) · LFT + viral hepatitis serology, B12/folate, anti-HIV · cytogenetics (แยก MDS)",
   exp:"Camitta criteria severe AA: marrow cellularity &lt; 25% + ≥ 2 ใน 3: ANC &lt; 0.5 × 10⁹/L, platelet &lt; 20 × 10⁹/L, reticulocyte ต่ำ",
   rubric:"ไม่ส่ง bone marrow = ขาดข้อสำคัญ · บอก aspiration อย่างเดียวไม่มี biopsy หักเล็กน้อย",
   pts:[CR(P("Bone marrow aspiration and biopsy","bone marrow","\\bbm\\b","ไขกระดูก","marrow")),P("Cytochemistry / flow cytometry","cytochem","flow"),P("Reticulocyte count","retic"),P("PNH screen / viral hepatitis / B12-folate","pnh","cd55","cd59","hepatitis","b12","folate")]})
 ),
 interp:"PBS: pancytopenia + relative lymphocytosis ไม่มี polychromasia → aplastic anemia vs acute leukemia vs MDS → BM aspiration + biopsy",
 summary:["Aplastic anemia: NCNC RBC ไม่มี polychromasia + WBC ต่ำ lymphocyte เด่น + platelet ต่ำ","Ddx: aplastic anemia, acute leukemia, MDS, myelophthisis","Ix: BM aspiration + biopsy, retic, flow (PNH), cytochemistry ถ้ามี blast"]}),

/* ===== สถานี 15 ===== */
Co({page:3,orig:"15",topic:"micro",sub:"PBS",title:"Young man from a border district with fever and pallor — blood smear",seen:"คล้าย SI131 Ro413–416 ข้อ 12 และ SI127 Ro409–412 ข้อ 11 (สเมียร์ G6PD deficiency)",
 stem:`A 22-year-old man who lives in Mae Sot District, Tak Province, presents with fever and pallor. A peripheral blood smear is shown.<br>1. Describe the blood smear.<br>2. What is the most likely diagnosis?<br>3. What investigations would you send?`,
 gray:"15. Blood smear -> ชายอายุ 22 อยู่แม่สอด มีไข้ ซีด · Eccentrocyte, Hb leakage cell, ghost cell · เฉลย: G6PD deficiency",
 flag:NOIMG+" · คำบรรยายสเมียร์ในช่องโจทย์ย้ายไป gray · 15.3 "+ADD,
 notes:"ช่องโจทย์บรรยายสเมียร์: eccentrocyte, Hb leakage cell, ghost cell · เฉลยผู้จด: G6PD deficiency · เทียบ OSCE_REF (Key PBS: G6PD deficiency anemia) ตรงกัน",
 opinion:"เฉลยผู้จดตรงกับ OSCE_REF · โจทย์ให้ภูมิลำเนาแม่สอด (พื้นที่มาลาเรียชุกชุม) — ไข้ + ซีดต้องตรวจหามาลาเรียเสมอ และ G6PD hemolysis อาจถูกกระตุ้นจากการติดเชื้อหรือยา primaquine",
 parts:S(
  B("15.1 Describe the blood smear.",4,{tags:["micro"],key:"Eccentrocyte, Hb leakage cell, ghost cell (ช่องโจทย์)",
   ans:"<b>RBC:</b> normochromic normocytic, anisocytosis/poikilocytosis 1–2+, <b>polychromasia</b>, NRC · หลักฐานเม็ดเลือดแดงแตกในหลอดเลือดจาก oxidative stress: <b>Hb contracted cell (eccentrocyte)</b> — Hb รวมไปอยู่ขอบด้านหนึ่ง, <b>Hb leakage cell</b> — คล้าย spherocyte มี Hb รั่วออกนอกเซลล์, <b>ghost cell</b> — เห็นแต่ขอบเซลล์, ± bite cell, spherocyte, Howell-Jolly body · <b>WBC:</b> ปกติหรือเพิ่ม neutrophil predominate (± left shift จากการติดเชื้อ) · <b>Platelet:</b> ปกติ",
   exp:"Key PBS (OSCE_REF) · Heinz body ต้องย้อม supravital (methyl violet/brilliant cresyl blue) ไม่เห็นใน Wright stain · bite cell กับ eccentrocyte เป็นคนละเซลล์แต่พบร่วมกันใน oxidative hemolysis",
   rubric:"ได้เต็ม = eccentrocyte + Hb leakage cell + ghost cell + polychromasia",
   pts:[H("RBC",80),CR(P("Hb contracted cells (eccentrocytes) / bite cells","eccentrocyt","contract","bite")),CR(P("Hb leakage cells","leak")),P("Ghost cells","ghost"),P("Polychromasia / NRC","polychrom","\\bnrc\\b","nucleated"),
    H("WBC/Plt",20),P("WBC normal or increased, normal platelets","neutrophil","wbc","platelet","plt")]}),
  B("15.2 What is the most likely diagnosis?",2,{tags:["micro"],key:"G6PD deficiency",
   ans:"<b>Acute intravascular hemolysis in G6PD deficiency</b> — กระตุ้นโดยการติดเชื้อ (ไข้) หรือยา (เช่น primaquine/dapsone) · ในพื้นที่แม่สอดต้องแยก/หา <b>malaria</b> ร่วมด้วย",
   exp:"Oxidative hemolysis: G6PD deficiency (ยา ถั่วปากอ้า การติดเชื้อ), unstable Hb, ยา dapsone ขนาดสูง · ไข้ + ซีด + ชายแดน: malaria (P. falciparum/vivax), ถ้ารักษา vivax ด้วย primaquine ต้องตรวจ G6PD ก่อน",
   pts:[CR(P("G6PD deficiency (acute hemolysis)","g6pd")),P("Triggered by infection or drugs (malaria/primaquine)","infection","ติดเชื้อ","malaria","มาลาเรีย","primaquine","dapsone","drug")]}),
  B("15.3 What investigations would you send?",2,{tags:["micro"],flag:ADD,
   ans:"<b>G6PD screening</b> (fluorescent spot/quantitative) — ระหว่าง hemolysis เฉียบพลันอาจได้ผลปกติเท็จ (reticulocyte มีเอนไซม์สูง) → ตรวจซ้ำหลัง 2–3 เดือน · <b>thick and thin blood film for malaria</b> ± malaria rapid test · reticulocyte count, LDH, indirect bilirubin, haptoglobin, UA (hemoglobinuria), BUN/Cr (AKI จาก hemoglobinuria)",
   exp:"การรักษา: หยุดยาที่กระตุ้น รักษาการติดเชื้อ ให้สารน้ำรักษา urine output ให้ PRC เมื่อซีดมาก/มีอาการ · ถ้าเป็น P. vivax/ovale ต้องรู้ผล G6PD ก่อนให้ primaquine (G6PD deficient: ใช้ primaquine 0.75 mg/kg สัปดาห์ละครั้ง × 8 สัปดาห์ ภายใต้การติดตามตามแนวทาง)",
   pts:[CR(P("G6PD enzyme assay","g6pd")),CR(P("Thick/thin blood film for malaria","malaria","มาลาเรีย","thick","thin film")),P("Hemolysis work-up: reticulocyte, LDH, bilirubin, haptoglobin, UA, Cr","retic","ldh","bilirubin","haptoglobin","\\bua\\b","urinalysis","creatinine","\\bcr\\b")]})
 ),
 interp:"PBS: eccentrocyte + Hb leakage cell + ghost cell → oxidative hemolysis จาก G6PD deficiency (ชายแดน → หามาลาเรียร่วม)",
 summary:["G6PD hemolysis: Hb contracted cell (eccentrocyte), Hb leakage cell, ghost cell, polychromasia","Trigger: การติดเชื้อ, ยา (primaquine, dapsone), ถั่วปากอ้า","Ix: G6PD (ซ้ำหลัง 2–3 เดือนถ้าปกติระหว่าง hemolysis), malaria film, hemolysis work-up"]}),

/* ===== สถานี 16 ===== */
Co({page:3,orig:"16",topic:"micro",sub:"PBS",title:"Young man with fever — blood smear",seen:"คล้าย SI133 Ro405–406 ข้อ 15 และ SI131 Ro417–420 ข้อ 9 (ไข้ — สเมียร์ atypical lymphocyte)",
 stem:`A 25-year-old man presents with fever. A peripheral blood smear is shown.<br>1. Describe the blood smear.<br>2. What is the most likely diagnosis?`,
 gray:"16. Blood smear -> ชายอายุ 25 มีไข้ · Atypical lymphocyte · เฉลย: Dengue fever",
 flag:NOIMG+" · คำบรรยายสเมียร์ในช่องโจทย์ย้ายไป gray · ไฟล์ไม่บอกจำนวนวันที่มีไข้",
 notes:"ช่องโจทย์บรรยายสเมียร์: atypical lymphocyte · เฉลยผู้จด: Dengue fever · เทียบ OSCE_REF (Key PBS: Acute hemorrhagic fever) ตรงกัน",
 parts:S(
  B("16.1 Describe the blood smear.",4,{tags:["micro"],key:"Atypical lymphocyte (ช่องโจทย์)",
   ans:"<b>RBC:</b> normochromic normocytic, ไม่มี anisocytosis/poikilocytosis · <b>WBC:</b> จำนวน<b>ลดลง</b>, พบ <b>atypical lymphocytes</b> — lymphocyte ขนาดใหญ่ cytoplasm มากสีน้ำเงินเข้ม (ขอบเข้มกว่า) คล้าย plasma cell, nucleus อาจมี nucleoli · <b>Platelet:</b> <b>ลดลง</b> (&lt; 5/OF)",
   exp:"Key PBS (OSCE_REF: acute hemorrhagic fever): atypical lymphocyte + thrombocytopenia สนับสนุนไข้เลือดออก · atypical lymphocyte > 15% ของ WBC ร่วมกับ platelet ≤ 100,000 เป็นสัญญาณเข้าระยะวิกฤต (leakage) ใกล้เข้ามา",
   pts:[H("RBC",15),P("Normochromic normocytic RBC","ncnc","normochrom","normocyt"),
    H("WBC",55),P("Leukopenia","leukopenia","decreas\\w* (wbc|white|in number)","wbc.{0,25}(ลด|ต่ำ|decreas)"),CR(P("Atypical lymphocytes","atypical lymph","reactive lymph","atypical")),P("Large cells with abundant blue cytoplasm (plasmacytoid)","basophilic","blue","น้ำเงิน","plasma","abundant"),
    H("Platelet",30),CR(P("Thrombocytopenia","thrombocytopenia","decreas\\w* (plt|platelet)","เกล็ดเลือด(ลด|ต่ำ)","plt ?(ลด|ต่ำ)","platelet.{0,25}(ลด|ต่ำ|decreas)"))]}),
  B("16.2 What is the most likely diagnosis?",3,{tags:["micro"],key:"Dengue fever",
   ans:"<b>Dengue infection</b> (dengue fever/dengue hemorrhagic fever) · Ddx atypical lymphocytosis: infectious mononucleosis (EBV), CMV, acute HIV, viral hepatitis, scrub typhus",
   exp:"Ix: dengue NS1 Ag (วัน 1–5), IgM/IgG, tourniquet test, Hct serial · Rx: supportive, paracetamol (ห้าม NSAID/aspirin), เฝ้าระวังช่วงไข้ลง (critical phase) — Hct เพิ่ม ≥ 20%, BP แคบ, ปวดท้อง, เลือดออก → IV fluid ตามแนวทาง",
   pts:[CR(P("Dengue infection","dengue","ไข้เลือดออก","\\bdhf\\b","\\bdf\\b")),P("Differential: EBV / CMV / acute HIV","ebv","mononucleosis","\\bcmv\\b","\\bhiv\\b")]})
 ),
 interp:"PBS: atypical lymphocyte + leukopenia + thrombocytopenia ในผู้ป่วยไข้ → dengue infection",
 summary:["Dengue: WBC ต่ำ + atypical lymphocyte (cytoplasm มากสีน้ำเงินคล้าย plasma cell) + platelet ต่ำ","Ddx atypical lymphocyte: EBV, CMV, acute HIV","Ix NS1 Ag/IgM · ห้าม NSAID/aspirin · เฝ้าระวัง critical phase"]}),

/* ===== สถานี 17 ===== */
Co({page:3,orig:"17",topic:"micro",sub:"PBS",title:"Abdominal fullness and early satiety for 2 months — blood smear",seen:"คล้าย SI132 Ro405–406 A9 (สเมียร์ platelet สูง) — คนละโจทย์",
 stem:`A patient presents with abdominal fullness and early satiety for 2 months. A peripheral blood smear is shown.<br>1. Describe the blood smear.<br>2. What is the most likely diagnosis?<br>3. What investigation would you send to confirm the diagnosis?`,
 gray:"17. Blood smear -> แน่นท้อง อิ่มง่ายมา 2 เดือน · multiple stage of myeloid series, basophilia, eosinophilia, plt increase · เฉลย: CML",
 flag:NOIMG+" · คำบรรยายสเมียร์ในช่องโจทย์ย้ายไป gray · 17.3 "+ADD,
 notes:"ช่องโจทย์บรรยายสเมียร์: multiple stages of myeloid series, basophilia, eosinophilia, platelet increase · เฉลยผู้จด: CML · เทียบ OSCE_REF (Key PBS: CML) ตรงกัน",
 parts:S(
  B("17.1 Describe the blood smear.",4,{tags:["micro"],key:"multiple stage of myeloid series, basophilia, eosinophilia, plt increase (ช่องโจทย์)",
   ans:"<b>RBC:</b> normochromic normocytic, aniso/poikilocytosis 0–1+, ± NRC, teardrop cell · <b>WBC:</b> <b>จำนวนเพิ่มมาก</b> พบ<b>ทุกระยะของ granulocytic series</b> (myeloblast, promyelocyte, <b>myelocyte</b>, metamyelocyte, band, neutrophil) โดย myelocyte และ segmented neutrophil เด่น (bimodal) · <b>basophilia</b>, <b>eosinophilia</b> · blast น้อย (&lt; 10% ใน chronic phase) · <b>Platelet:</b> ปกติหรือ<b>เพิ่ม</b>",
   exp:"Key PBS (OSCE_REF): CML chronic phase = WBC สูงมีทุกระยะ + basophilia + eosinophilia + thrombocytosis · blast phase: blast ≥ 20% (WHO) และมักเกล็ดเลือดต่ำ · แยกจาก leukemoid reaction: ไม่มี basophilia, LAP score สูง, มี toxic granulation",
   pts:[H("WBC",70),P("Marked leukocytosis","leukocytos","increas\\w* (wbc|in number)","wbc.{0,25}(เพิ่ม|สูง|increas)"),CR(P("All stages of the myeloid (granulocytic) series","all stage","multiple stage","myelocyte","metamyelocyte","promyelocyte","granulocytic series","myeloid series","left shift")),CR(P("Basophilia","basophil")),P("Eosinophilia","eosinophil"),
    H("RBC/Platelet",30),P("Thrombocytosis (platelets normal or increased)","thrombocytos","plt ?(increas|เพิ่ม|สูง)","platelet ?(increas|เพิ่ม|สูง)","increas\\w* (plt|platelet)","platelet.{0,30}(เพิ่ม|สูง|increas)")]}),
  B("17.2 What is the most likely diagnosis?",2,{tags:["micro"],key:"CML",
   ans:"<b>Chronic myeloid leukemia (CML), chronic phase</b> — แน่นท้อง อิ่มง่าย จาก<b>ม้ามโตมาก (massive splenomegaly)</b>",
   exp:"Ddx: leukemoid reaction, other MPN (primary myelofibrosis มี teardrop + leukoerythroblastic picture, ET)",
   pts:[CR(P("Chronic myeloid leukemia","\\bcml\\b","chronic myel")),P("Splenomegaly causes early satiety","spleno","ม้ามโต")]}),
  B("17.3 What investigation would you send to confirm the diagnosis?",2,{tags:["micro"],flag:ADD,
   ans:"<b>BCR::ABL1</b> — <b>RT-PCR</b> (qualitative/quantitative) ใน peripheral blood และ/หรือ <b>cytogenetics หา Philadelphia chromosome t(9;22)(q34;q11)</b> (bone marrow karyotype — ประเมิน phase และ additional chromosomal abnormalities) ± FISH · BM aspiration ประเมิน % blast · Rx: <b>tyrosine kinase inhibitor</b> (imatinib)",
   exp:"Monitoring: BCR::ABL1 qPCR (IS) ทุก 3 เดือน — เป้าหมาย ≤ 10% ที่ 3 เดือน, ≤ 1% ที่ 6 เดือน, ≤ 0.1% (MMR) ที่ 12 เดือน (ELN)",
   pts:[CR(P("BCR-ABL1 (RT-PCR) / Philadelphia chromosome t(9;22)","bcr","abl","philadelphia","t\\(9;22\\)","9;22","\\bph\\b")),P("Bone marrow cytogenetics/karyotype","karyotyp","cytogenet","bone marrow","fish"),P("TKI (imatinib)","imatinib","tki","tyrosine kinase")]})
 ),
 interp:"PBS: leukocytosis ทุกระยะของ myeloid series + basophilia + eosinophilia + thrombocytosis → CML → BCR::ABL1",
 summary:["CML: WBC สูงมีทุกระยะ (myelocyte เด่น) + basophilia + eosinophilia + platelet สูง","อิ่มเร็ว แน่นท้อง = massive splenomegaly","ยืนยัน BCR::ABL1 (RT-PCR)/Ph chromosome → imatinib"]}),

/* ===== สถานี 18 ===== */
Co({page:3,orig:"18",topic:"micro",sub:"Gram stain",title:"Fever and joint pain — synovial fluid Gram stain",seen:"คล้าย SI131 Ro409–412 ข้อ 21 และ SI132 Ro405–406 B9 (synovial fluid Gram stain)",
 stem:`A patient presents with fever and joint pain. A Gram stain of the synovial fluid is shown.<br>1. Describe what you see.<br>2. What is the most likely organism?<br>3. How would you treat this patient?`,
 gray:"18. มีไข้ ปวดข้อ · Synovial fluid เจอ gram pos cocci in cluster, numerous PMN · เฉลย: Staphylococcus aureus",
 flag:NOIMG+" · คำบรรยาย Gram stain ในช่องโจทย์ย้ายไป gray · 18.3 "+ADD,
 notes:"ช่องโจทย์บรรยาย: gram positive cocci in cluster, numerous PMN · เฉลยผู้จด: Staphylococcus aureus",
 parts:S(
  B("18.1 Describe what you see.",3,{tags:["micro"],key:"gram pos cocci in cluster, numerous PMN (ช่องโจทย์)",
   ans:"<b>Numerous PMN</b> · <b>Gram-positive cocci in clusters</b> (กลมสีม่วงเกาะเป็นกลุ่มคล้ายพวงองุ่น) ทั้งนอกและในเซลล์",
   exp:"Gram-positive cocci in chains = Streptococcus · Gram-negative diplococci = N. gonorrhoeae (หนุ่มสาว, migratory polyarthralgia, tenosynovitis, pustule)",
   pts:[P("Numerous PMN","pmn","neutrophil","polymorph"),CR(P("Gram-positive cocci in clusters","gram.?(positive|pos|\\+|⊕).{0,15}cocci","cluster","พวงองุ่น"))]}),
  B("18.2 What is the most likely organism?",2,{tags:["micro"],key:"Staphylococcus aureus",
   ans:"<b><i>Staphylococcus aureus</i></b> → <b>septic arthritis</b>",
   exp:"S. aureus = สาเหตุที่พบบ่อยที่สุดของ nongonococcal septic arthritis ในผู้ใหญ่",
   pts:[CR(P("Staphylococcus aureus","aureus","s\\.? ?aureus","staph")),P("Septic arthritis","septic","ข้ออักเสบติดเชื้อ")]}),
  B("18.3 How would you treat this patient?",3,{tags:["micro"],flag:ADD,
   ans:"<b>Drainage ข้อ</b>: needle aspiration ซ้ำทุกวัน หรือ arthroscopic/open drainage (consult ortho) · <b>IV antibiotic</b> ตาม Gram stain: anti-staphylococcal — <b>cloxacillin</b> หรือ <b>cefazolin</b> (MSSA) · <b>vancomycin</b> ถ้าเสี่ยง MRSA (ติดเชื้อในโรงพยาบาล, เคยมี MRSA) · ปรับตามผล culture · รวม 3–4 สัปดาห์ (IV อย่างน้อย 1–2 สัปดาห์) · ส่ง hemoculture",
   exp:"Septic arthritis ต้อง drain ข้อร่วมกับ antibiotic เสมอ · ข้อเทียม/ข้อสะโพกมักต้องผ่าตัด",
   pts:[CR(P("Joint drainage (aspiration / arthroscopy / arthrotomy)","drain","aspirat","arthroscop","arthrotom","ล้างข้อ","เจาะ")),CR(P("IV anti-staphylococcal antibiotic (cloxacillin/cefazolin; vancomycin if MRSA)","cloxacillin","cefazolin","oxacillin","nafcillin","vancomycin","antibiotic"))]})
 ),
 interp:"Microscope: synovial fluid — numerous PMN + Gram-positive cocci in clusters → S. aureus septic arthritis → drainage + IV antibiotic",
 summary:["GPC in clusters = Staphylococcus · GPC in chains = Streptococcus · GN diplococci = gonococcus","S. aureus = สาเหตุพบบ่อยที่สุดของ septic arthritis","Rx: drain ข้อ + IV cloxacillin/cefazolin (vancomycin ถ้า MRSA)"]}),

/* ===== สถานี 19 ===== */
Co({page:3,orig:"19",topic:"lab",sub:"Ascites",title:"Ascitic fluid analysis — interpret and find the cause",seen:"คล้าย SI133 Ro405–406 ข้อ 17 และ SI132 Ro405–406 B8 (ascitic fluid analysis) — คนละผล",
 stem:`A patient with acute abdominal pain and ascites undergoes diagnostic paracentesis.<br>Serum albumin 3.2 g/dL<br>Ascitic fluid: appearance turbid · albumin 2.5 g/dL · total protein 3.8 g/dL · glucose 18 mg/dL (serum glucose 110 mg/dL) · LDH 650 U/L (upper limit of normal for serum 250 U/L) · WBC 5,600 cells/µL, PMN 90% · Gram stain: multiple organisms (Gram-negative rods and Gram-positive cocci)<br>1. Interpret the ascitic fluid profile.<br>2. What is the most likely cause?`,
 gray:"19. Ascitic profile · Narrow SAAG high protein low sugar high ldh multiple organism · 1. แปลผล 2. สาเหตุ · เฉลย: >secondary bacterial peritonitis >hollow viscus organ perforation",
 flag:"⚠ ค่าแลปทั้งหมด (albumin, protein, glucose, LDH, cell count) Claude แต่งให้ตรงกับที่ไฟล์บอกเชิงคุณภาพ (narrow SAAG, high protein, low sugar, high LDH, multiple organisms) · อาการนำใน stem Claude ใส่",
 notes:"ช่องโจทย์: narrow SAAG, high protein, low sugar, high LDH, multiple organism · ถาม 1. แปลผล 2. สาเหตุ (สถานีนี้ต่อจากหน้า 3 ไปหน้า 4) · เฉลยผู้จด: secondary bacterial peritonitis → hollow viscus organ perforation",
 parts:S(
  B("19.1 Interpret the ascitic fluid profile.",5,{tags:["lab"],key:">secondary bacterial peritonitis",
   ans:"<b>SAAG</b> = 3.2 − 2.5 = <b>0.7 g/dL (&lt; 1.1, low/narrow SAAG)</b> → ไม่ใช่ portal hypertension (peritoneal cause) · <b>Total protein สูง</b> (3.8 g/dL) · PMN 5,040/µL (≥ 250) = <b>infected ascites (peritonitis)</b> · เข้าเกณฑ์ <b>Runyon criteria</b> ครบ 3 ข้อ (ต้องการ ≥ 2): total protein &gt; 1 g/dL, glucose &lt; 50 mg/dL, LDH &gt; ULN ของ serum · Gram stain <b>polymicrobial</b> → <b>secondary bacterial peritonitis</b> (ไม่ใช่ SBP ซึ่งมักเป็นเชื้อเดียว)",
   exp:"SBP: PMN ≥ 250, เชื้อเดียว (E. coli, Klebsiella, Streptococcus), protein ต่ำ (&lt; 1 g/dL ในตับแข็ง), glucose/LDH ปกติ · ascitic CEA &gt; 5 ng/mL หรือ ALP &gt; 240 U/L ชวนคิด hollow viscus perforation",
   rubric:"ต้องคำนวณ SAAG และแปลผล PMN + ชี้ว่าเป็น secondary (Runyon criteria/polymicrobial) จึงได้เต็ม · ตอบ SBP = ผิดจุดสำคัญ",
   pts:[P("SAAG < 1.1 (low/narrow)","saag","0\\.7","< ?1\\.1","narrow","low saag"),P("PMN ≥ 250/µL = infected ascites / peritonitis","pmn","250","peritonitis","infect"),P("Runyon criteria: protein > 1, glucose < 50, LDH > ULN","runyon","protein","glucose","ldh","น้ำตาลต่ำ"),P("Polymicrobial Gram stain","multiple organism","polymicrob","หลายเชื้อ","mixed"),CR(P("Secondary bacterial peritonitis","secondary"))]}),
  B("19.2 What is the most likely cause, and what would you do next?",3,{tags:["lab"],key:">hollow viscus organ perforation",
   ans:"<b>Hollow viscus perforation</b> (เช่น perforated peptic ulcer, perforated appendix/diverticulum) หรือ intra-abdominal abscess · ต่อ: <b>upright CXR/acute abdomen series หา free air</b> และ <b>CT abdomen</b> · <b>consult surgery</b> ด่วน · NPO, IV fluid · <b>broad-spectrum IV antibiotic ครอบคลุม anaerobe</b> (เช่น ceftriaxone + metronidazole หรือ piperacillin-tazobactam)",
   exp:"Secondary peritonitis รักษาด้วย source control (ผ่าตัด) เป็นหลัก antibiotic อย่างเดียวไม่พอ ต่างจาก SBP ที่รักษาด้วย cefotaxime/ceftriaxone + albumin",
   pts:[CR(P("Hollow viscus perforation","perforat","hollow viscus","ทะลุ")),P("Imaging: upright CXR / CT abdomen","\\bct\\b","x.?ray","\\bcxr\\b","free air","film"),P("Surgical consultation and broad-spectrum antibiotics with anaerobic cover","consult","surg","ศัลย","ผ่าตัด","metronidazole","anaerob","piperacillin","antibiotic")]})
 ),
 interp:"Lab ascites: low SAAG + Runyon criteria (protein สูง, glucose ต่ำ, LDH สูง) + polymicrobial → secondary bacterial peritonitis → hollow viscus perforation",
 summary:["SAAG ≥ 1.1 = portal HT · < 1.1 = peritoneal cause","Runyon ≥ 2/3 (protein > 1, glucose < 50, LDH > ULN) หรือ polymicrobial = secondary peritonitis ไม่ใช่ SBP","หา perforation: upright CXR/CT → ผ่าตัด + ATB ครอบคลุม anaerobe"]}),

/* ===== สถานี 20 ===== */
Co({page:4,orig:"20",topic:"micro",sub:"UA",title:"Urine sediment — describe and give the differential diagnosis",seen:"คล้าย SI127 Ro409–412 ข้อ 8 และ SI133 Ro403–404 ข้อ 8 (urine sediment — glomerular hematuria)",
 stem:`A urine sediment is examined under the microscope.<br>1. Describe the findings.<br>2. Give 3 differential diagnoses.`,
 gray:"20. UA -> dysmorphic RBC, broad cast · ให้วินิจฉัยแยกโรค 3 โรค · เฉลย: 1. Post infectious glomerulonephritis 2. IgA nephropathy 3. Nephritis อะไรก็ได้",
 flag:NOIMG+" · คำบรรยาย UA ในช่องโจทย์ย้ายไป gray · ไฟล์ไม่บอกประวัติผู้ป่วย · ⚠ broad cast บ่งชี้โรคไตเรื้อรัง — Claude จัดลำดับ ddx ต่างจากผู้จดเล็กน้อย (ดู opinion)",
 notes:"ช่องโจทย์: dysmorphic RBC, broad cast · ให้ ddx 3 โรค · เฉลยผู้จด: 1. Post-infectious glomerulonephritis 2. IgA nephropathy 3. Nephritis อะไรก็ได้",
 opinion:"ไฟล์ตอบ post-infectious GN เป็นอันดับแรก · Dysmorphic RBC = glomerular hematuria จริง แต่ <b>broad cast</b> เกิดใน tubule ที่ขยายและฝ่อ = <b>advanced CKD</b> ซึ่งไม่เข้ากับ PSGN (โรคเฉียบพลัน หายเองส่วนใหญ่) — Claude จึงให้ chronic glomerulonephritis (IgA nephropathy, lupus nephritis, MPGN/chronic GN) มาก่อน และรับ post-infectious GN ได้เมื่อบริบทเป็นเฉียบพลัน",
 parts:S(
  B("20.1 Describe the findings.",3,{tags:["micro"],key:"dysmorphic RBC, broad cast (ช่องโจทย์)",
   ans:"<b>Dysmorphic RBC</b> (รูปร่างผิดปกติหลากหลาย มี blebs/ขอบขรุขระ, acanthocyte/G1 cell) = <b>glomerular hematuria</b> · <b>Broad cast</b> (cast กว้าง &gt; 2–3 เท่าของ WBC มักเป็น waxy) = เกิดใน tubule ที่ขยาย/ฝ่อ บ่งชี้ <b>advanced chronic kidney disease</b> (\"renal failure cast\") · ± RBC cast, granular cast",
   exp:"Dysmorphic RBC &gt; 40% หรือ acanthocyte ≥ 5% = glomerular origin · Isomorphic RBC = non-glomerular (นิ่ว เนื้องอก ติดเชื้อ)",
   pts:[CR(P("Dysmorphic RBC = glomerular hematuria","dysmorph","acanthocyt","glomerular")),CR(P("Broad cast = advanced CKD","broad","waxy","renal failure cast","\\bckd\\b","chronic kidney"))]}),
  B("20.2 Give 3 differential diagnoses.",3,{tags:["micro"],key:"1. Post infectious glomerulonephritis 2. IgA nephropathy 3. Nephritis อะไรก็ได้",
   ans:"Glomerulonephritis ที่ดำเนินเป็นโรคไตเรื้อรัง: 1. <b>IgA nephropathy</b> · 2. <b>Lupus nephritis</b> · 3. <b>Chronic GN อื่น</b> (MPGN, FSGS, ANCA vasculitis) · <b>Post-infectious GN</b> รับได้ถ้าเป็นเฉียบพลัน (ตามเฉลยผู้จด)",
   exp:"Ix: Cr/eGFR, UPCR, C3/C4, ANA/anti-dsDNA, ASO/anti-DNase B, ANCA, anti-GBM, HBV/HCV/HIV, U/S ไต (ขนาดไตเล็ก = เรื้อรัง) ± renal biopsy",
   rubric:"ตอบ glomerulonephritis 3 ชนิดใดก็ได้ = เต็ม (ผู้จด: \"Nephritis อะไรก็ได้\")",
   pts:[G("Three glomerulonephritides",3,P("IgA nephropathy","iga"),P("Post-infectious GN","post.?infect","post.?strep","psgn","apsgn"),P("Lupus nephritis","lupus","\\bsle\\b"),P("MPGN / FSGS / ANCA / anti-GBM / other GN","mpgn","membranoprolif","fsgs","anca","anti.?gbm","rpgn","chronic gn","chronic glomerul","nephritis"))]})
 ),
 interp:"Microscope UA: dysmorphic RBC (glomerular) + broad cast (advanced CKD) → chronic glomerulonephritis",
 summary:["Dysmorphic RBC/acanthocyte = glomerular hematuria · RBC cast = GN","Broad (waxy) cast = tubule ขยาย/ฝ่อ = advanced CKD","Ddx: IgA nephropathy, lupus nephritis, post-infectious GN, MPGN/ANCA"]}),

/* ===== สถานี 21 ===== */
Co({page:4,orig:"21",topic:"micro",sub:"Gram stain",title:"Genital discharge — Gram stain",
 stem:`A patient presents with purulent genital discharge. A Gram stain of the discharge is shown.<br>1. Describe what you see.<br>2. What is the organism?<br>3. How would you treat this patient?`,
 gray:"21. หนองจากอวัยวะเพศ ส่องกล้อง · numerous PMN, numerous gram-negative diplococci, kidney shaped · ตัวอะไร, รักษายังไง · เฉลย: Neisseria gonorrhoeae · รักษา ceftriaxone + azithromycin",
 flag:NOIMG+" · คำบรรยาย Gram stain ในช่องโจทย์ย้ายไป gray · ไฟล์ไม่บอกเพศ/อายุ",
 notes:"ช่องโจทย์: numerous PMN, numerous gram-negative diplococci, kidney shaped · ถาม ตัวอะไร รักษายังไง · เฉลยผู้จด: Neisseria gonorrhoeae · ceftriaxone + azithromycin",
 opinion:"เฉลยผู้จด (ceftriaxone + azithromycin) ตรงกับแนวทางเดิมและแนวทางหลายประเทศ · CDC 2021 เปลี่ยนเป็น <b>ceftriaxone 500 mg IM ครั้งเดียว</b> (1 g ถ้าน้ำหนัก ≥ 150 kg) และให้ <b>doxycycline 100 mg วันละ 2 ครั้ง 7 วัน</b> ถ้ายังไม่ได้ตัด chlamydia ออก (ไม่ใช้ azithromycin เป็น dual therapy ตามปกติเพื่อลดเชื้อดื้อยา) · ทั้งสองแบบรับได้ ระบุไว้ใน rubric",
 parts:S(
  B("21.1 Describe what you see.",3,{tags:["micro"],key:"numerous PMN, numerous gram-negative diplococci, kidney shaped (ช่องโจทย์)",
   ans:"<b>Numerous PMN</b> · <b>numerous Gram-negative diplococci</b> (สีชมพูแดง เป็นคู่) <b>รูปเมล็ดถั่ว (kidney-shaped)</b> ด้านแบนหันเข้าหากัน · พบ<b>ภายใน PMN (intracellular)</b> และนอกเซลล์",
   exp:"Gram stain urethral discharge ในผู้ชายที่มีอาการ: sensitivity/specificity สูง (&gt; 95%) สำหรับ gonococcal urethritis · ในผู้หญิง (cervix) sensitivity ต่ำ ใช้ NAAT",
   pts:[P("Numerous PMN","pmn","neutrophil","polymorph"),CR(P("Gram-negative diplococci","gram.?(negative|neg|-|⊖).{0,15}diplococ","diplococ")),P("Kidney (bean)-shaped","kidney","bean","เมล็ดถั่ว"),P("Intracellular (within PMN)","intracellular","ภายในเซลล์","ใน ?pmn","within")]}),
  B("21.2 What is the organism?",2,{tags:["micro"],key:"Neisseria gonorrhoeae",
   ans:"<b><i>Neisseria gonorrhoeae</i></b> → gonococcal urethritis/cervicitis (หนองใน)",
   exp:"Non-gonococcal urethritis: Chlamydia trachomatis, Mycoplasma genitalium, Ureaplasma — Gram stain พบ PMN แต่ไม่พบ diplococci",
   pts:[CR(P("Neisseria gonorrhoeae","gonorrh","gonococ","หนองใน"))]}),
  B("21.3 How would you treat this patient?",3,{tags:["micro"],key:"รักษา ceftriaxone + azithromycin",
   ans:"<b>Ceftriaxone IM ครั้งเดียว</b> (CDC 2021: 500 mg) <b>ร่วมกับยาครอบคลุม Chlamydia</b>: <b>azithromycin 1 g PO ครั้งเดียว</b> (ตามเฉลย/แนวทางเดิม) หรือ <b>doxycycline 100 mg PO bid × 7 วัน</b> (CDC 2021 ถ้ายังไม่ได้ตัด chlamydia) · <b>รักษาคู่นอน</b> (expedited partner therapy) · งดเพศสัมพันธ์ 7 วันหลังรักษาทั้งคู่ · ตรวจ <b>HIV, syphilis (VDRL/RPR)</b>, HBV · ให้คำปรึกษาใช้ถุงยาง",
   exp:"Test of cure ใน pharyngeal gonorrhea 7–14 วันหลังรักษา · ตรวจซ้ำหา reinfection ที่ 3 เดือน",
   rubric:"ceftriaxone + azithromycin (ผู้จด) หรือ ceftriaxone ± doxycycline (CDC 2021) = เต็ม · ไม่พูดถึงคู่นอน หักเล็กน้อย",
   pts:[CR(P("Ceftriaxone IM single dose","ceftriaxone")),P("Cover chlamydia: azithromycin or doxycycline","azithromycin","doxycycline","chlamydia"),P("Treat sexual partners and screen for HIV/syphilis","partner","คู่นอน","\\bhiv\\b","syphilis","vdrl","rpr")]})
 ),
 interp:"Microscope: urethral pus — numerous PMN + intracellular Gram-negative kidney-shaped diplococci → N. gonorrhoeae → ceftriaxone + cover chlamydia",
 summary:["GN intracellular kidney-shaped diplococci + PMN = N. gonorrhoeae","Rx: ceftriaxone IM + azithromycin (เดิม) / doxycycline (CDC 2021 ถ้ายังไม่ตัด chlamydia)","รักษาคู่นอน + ตรวจ HIV, syphilis"]}),

/* ===== สถานี 22 ===== */
Co({page:4,orig:"22",topic:"micro",sub:"CSF",title:"Headache and stiff neck — CSF microscopy",seen:"คล้าย SI132 Ro403–404 ข้อ 25 (CSF profile) — คนละรูปแบบ",
 stem:`A patient presents with headache and neck stiffness. A stained smear of the cerebrospinal fluid is shown.<br>1. Describe what you see.<br>2. What is the diagnosis?<br>3. Name the organisms that cause this condition.`,
 gray:"22. คนไข้ปวดหัว stiff neck ให้ดูกล้อง CSF fluid -> Eosinophilic meningitis · ดูรูปไปให้ดีอย่าสับสนว่า granule คือ intracellular organism · ถามว่า organisms ที่ทำให้เกิดโรคนี้คือ · เฉลย: 1. Angiostrongylus cantonensis 2. Gnathostoma spinigerum",
 flag:NOIMG+" · \"Eosinophilic meningitis\" ในช่องโจทย์ไม่ใส่ใน stem (ไม่แน่ชัดว่าข้อสอบบอกหรือเป็นคำตอบ) · ข้อย่อย 22.1–22.2 แยกจากคำถามเดิม (ไฟล์ถามเฉพาะ organisms) · sub \"CSF\" ใช้ใหม่ใน topic micro",
 notes:"ผู้จดเตือน: ดูรูปให้ดี อย่าสับสนว่า granule (ของ eosinophil) คือ intracellular organism · เฉลยผู้จด: 1. Angiostrongylus cantonensis 2. Gnathostoma spinigerum",
 parts:S(
  B("22.1 Describe what you see.",3,{tags:["micro"],key:"(ช่องโจทย์) -> Eosinophilic meningitis · อย่าสับสนว่า granule คือ intracellular organism",
   ans:"เซลล์ส่วนใหญ่เป็น <b>eosinophils</b> — nucleus 2 lobes (bilobed) และ cytoplasm เต็มไปด้วย<b>เม็ด granule สีส้มแดง (eosinophilic granules)</b> · <b>ไม่พบเชื้อ</b> (granules ไม่ใช่ intracellular organism/bacteria) · ± lymphocytes, RBC",
   exp:"Eosinophilic meningitis: CSF eosinophil ≥ 10/µL หรือ ≥ 10% ของ WBC · ระวังแปลเม็ด granule เป็น intracellular cocci (ผู้จดเตือน)",
   rubric:"บรรยาย granule ว่าเป็นเชื้อแบคทีเรียในเซลล์ = ผิดจุดสำคัญ",
   pts:[CR(P("Predominantly eosinophils (bilobed nucleus, orange-red granules)","eosinophil","bilob")),P("Granules are not organisms; no bacteria seen","granule","no organism","no bacteria","ไม่พบเชื้อ","ไม่ใช่เชื้อ")]}),
  B("22.2 What is the diagnosis?",2,{tags:["micro"],key:"Eosinophilic meningitis (ช่องโจทย์)",
   ans:"<b>Eosinophilic meningitis</b> (parasitic)",
   exp:"สาเหตุอื่นของ CSF eosinophilia: cysticercosis, toxocariasis, schistosomiasis, coccidioidomycosis, lymphoma, VP shunt, ยา",
   pts:[CR(P("Eosinophilic meningitis","eosinophilic mening","eosinophilic"))]}),
  B("22.3 Name the organisms that cause this condition.",3,{tags:["micro"],key:"1. Angiostrongylus cantonensis 2. Gnathostoma spinigerum",
   ans:"1. <b><i>Angiostrongylus cantonensis</i></b> (rat lungworm) — จากกินหอยโข่ง/หอยทากดิบ (ก้อยหอย) · ปวดศีรษะมาก CSF ใส · รักษา: supportive, analgesics, เจาะ CSF ระบายความดัน, <b>prednisolone 60 mg/day × 2 สัปดาห์</b> · 2. <b><i>Gnathostoma spinigerum</i></b> — จากกินปลาน้ำจืด/กบ/ไก่ดิบหรือสุก ๆ ดิบ ๆ · <b>radiculomyelitis</b> (ปวดร้าวตามเส้นประสาทแล้วอ่อนแรง), CSF xanthochromic/มีเลือด, ICH/SAH, migratory swelling ผิวหนัง · รักษา: <b>albendazole</b> (± ivermectin) + steroid",
   exp:"Angiostrongylus พบบ่อยที่สุดในไทย พยากรณ์โรคดี · Gnathostoma รุนแรงกว่า อาจเสียชีวิต/พิการ · CT/MRI ใน Gnathostoma: hemorrhagic tracts",
   pts:[CR(P("Angiostrongylus cantonensis","angiostrong","cantonensis")),CR(P("Gnathostoma spinigerum","gnathostom","spinigerum")),P("Source: raw snails / raw freshwater fish, frogs","หอย","snail","ปลา","fish","กบ","frog","ดิบ","raw")]})
 ),
 interp:"Microscope CSF: eosinophils (อย่าสับสน granule กับเชื้อ) → eosinophilic meningitis → Angiostrongylus cantonensis, Gnathostoma spinigerum",
 summary:["Eosinophil: nucleus 2 lobes + granule สีส้มแดง — granule ไม่ใช่ intracellular organism","Eosinophilic meningitis = CSF eosinophil ≥ 10/µL หรือ ≥ 10%","Angiostrongylus (หอยดิบ, CSF ใส, prednisolone) vs Gnathostoma (ปลา/กบดิบ, radiculomyelitis, เลือดออกในสมอง, albendazole)"]}),

/* ===== สถานี 23 ===== */
Co({page:4,orig:"23",topic:"micro",sub:"Gram stain",title:"Intubated stroke patient — sputum Gram stain",seen:"SI127 Ro401–404 ข้อ 23 (stroke ICU ใส่ ETT → Klebsiella pneumoniae แยกจาก A. baum)",
 stem:`A patient with stroke is intubated in the ward and develops fever with purulent tracheal secretions. A Gram stain of the endotracheal aspirate is shown.<br>1. Describe the Gram stain.<br>2. What is the most likely organism?`,
 gray:"23. คนไข้ stroke ใส่ tube ให้ดู sputum · PMN > 25, SEC < 10, numerous gram-negative rod · เฉลย: Klebsiella pneumoniae · ดูแยกให้ออกกับ A. baum",
 flag:NOIMG+" · คำบรรยาย Gram stain ในช่องโจทย์ย้ายไป gray · อาการไข้/เสมหะเป็นหนองใน stem Claude ใส่",
 notes:"ช่องโจทย์: PMN > 25, SEC < 10, numerous gram-negative rod · เฉลยผู้จด: Klebsiella pneumoniae — ดูแยกให้ออกกับ A. baum (Acinetobacter baumannii)",
 parts:S(
  B("23.1 Describe the Gram stain.",4,{tags:["micro"],key:"PMN > 25, SEC < 10, numerous gram-negative rod (ช่องโจทย์)",
   ans:"<b>PMN &gt; 25/LPF</b> และ <b>squamous epithelial cells &lt; 10/LPF</b> = <b>เสมหะคุณภาพดี</b> (มาจากทางเดินหายใจส่วนล่าง ไม่ใช่น้ำลาย) · <b>Numerous Gram-negative rods</b> — แท่ง<b>อ้วนสั้น (plump)</b> ติดสีชมพูแดง อาจเห็น capsule ใส (halo) รอบตัว",
   exp:"เกณฑ์ Bartlett/Murray-Washington: SEC &lt; 10 และ PMN &gt; 25 ต่อ low-power field = specimen เหมาะส่ง culture · <i>Acinetobacter baumannii</i> = Gram-negative <b>coccobacilli</b> มักเป็นคู่ (diplococcobacilli) และอาจติดสีม่วงบางส่วน (Gram-variable) — ผู้จดเตือนให้แยกให้ออก",
   rubric:"ต้องประเมินคุณภาพเสมหะ (PMN > 25, SEC < 10) + บรรยายเชื้อ",
   pts:[P("PMN > 25 and SEC < 10 per LPF (good-quality specimen)","pmn","neutrophil","\\bsec\\b","squamous","epithelial","คุณภาพ","good quality","adequate"),CR(P("Numerous Gram-negative rods","gram.?(negative|neg|-|⊖).{0,15}(rod|bacill)","\\bgnr\\b","gram.?negative")),P("Plump rods with capsule","plump","capsul","อ้วน","halo")]}),
  B("23.2 What is the most likely organism?",3,{tags:["micro"],key:"Klebsiella pneumoniae · ดูแยกให้ออกกับ A. baum",
   ans:"<b><i>Klebsiella pneumoniae</i></b> → hospital-acquired/ventilator-associated pneumonia · ต้องแยกจาก <i>Acinetobacter baumannii</i> (coccobacilli) และ <i>Pseudomonas aeruginosa</i> (แท่งเรียวบาง)",
   exp:"HAP/VAP ในไทยพบ A. baumannii, P. aeruginosa, K. pneumoniae (ESBL/CRE) บ่อย · empirical antibiotic ตาม local antibiogram เช่น carbapenem/antipseudomonal β-lactam · ปรับตาม culture",
   rubric:"ตอบ A. baumannii ได้คะแนนบางส่วน (ตามที่ปรากฏในชุดอื่น)",
   pts:[CR(P("Klebsiella pneumoniae","klebsiella","k\\.? ?pneumoniae")),P("Differentiate from Acinetobacter baumannii (coccobacilli)","acinetobacter","baumannii","a\\.? ?baum","coccobacill")]})
 ),
 interp:"Microscope: endotracheal aspirate — PMN > 25, SEC < 10 + numerous plump Gram-negative rods → Klebsiella pneumoniae (แยกจาก A. baumannii)",
 summary:["PMN > 25 + SEC < 10 /LPF = เสมหะคุณภาพดี","Klebsiella: GN rod อ้วนสั้น มี capsule · Acinetobacter: GN coccobacilli เป็นคู่ · Pseudomonas: GN rod เรียวบาง","VAP: เชื้อดื้อยา — ให้ตาม antibiogram"]}),

/* ===== สถานี 24 ===== */
Co({page:4,orig:"24",topic:"lab",sub:"Glucose/HbA1c",title:"Health check results — list the diagnoses and prescribe",seen:"คล้าย SI131 Ro409–412 ข้อ 3 (health check results — interpret and counsel)",
 stem:`A 45-year-old woman attends a health check. Body weight 80 kg, height 170 cm. Blood pressure 145/90 mmHg (confirmed on repeated measurement). Fasting blood sugar 110 mg/dL. Urine microalbumin-to-creatinine ratio 60 mg/g.<br>1. Give all the diagnoses.<br>2. Prescribe a drug: name, dose and how the patient should take it.`,
 gray:"24. ผู้หญิงอายุ 45 ปี BW 80 Height 170 BP 145/90, FBS 110, Urine microalbumin creatinine ratio 60 · ให้การวินิจฉัยทั้งหมดและสั่งยา ขนาดยา วิธีการรับบริหารยา · เฉลย: Obesity class I, Hypertension grade I, impaired fasting glucose, microalbuminuria · ยา ACEI, ARB ได้เต็ม · ตอบ CCB จะน้อยลง · beta block, thiazide ยิ่งน้อย",
 flag:"หน่วย (mg/dL, mg/g) และ \"confirmed on repeated measurement\" Claude ใส่ (ไฟล์ให้แค่ตัวเลข)",
 notes:"เฉลยผู้จด: Obesity class I, Hypertension grade I, impaired fasting glucose, microalbuminuria · ยา ACEI, ARB ได้เต็ม · CCB ได้น้อยลง · beta-blocker, thiazide ได้น้อยยิ่งกว่า",
 opinion:"เห็นด้วยกับเฉลยผู้จด · หมายเหตุ: albuminuria และ IFG ควรยืนยันซ้ำ (UACR 2 ใน 3 ครั้งใน 3–6 เดือน, FBS/HbA1c ซ้ำ) · ESH 2023/แนวทาง HT ไทยแนะนำยา 2 ชนิดในเม็ดเดียวเป็นเริ่มต้นในผู้ป่วยส่วนใหญ่ — ผู้ป่วยรายนี้มี HMOD (albuminuria) การเริ่ม ACEI/ARB เดี่ยวยังรับได้ในการสอบ และควรเพิ่ม CCB/thiazide ถ้าไม่ถึงเป้า",
 parts:S(
  B("24.1 Give all the diagnoses.",4,{tags:["lab"],key:"Obesity class I, Hypertension grade I, impaired fasting glucose, microalbuminuria",
   ans:"1. <b>Obesity class I</b> — BMI = 80 / 1.7² = <b>27.7 kg/m²</b> (เกณฑ์เอเชีย/ไทย: 25–29.9 = obesity class I) · 2. <b>Hypertension grade 1</b> (140–159/90–99 mmHg) · 3. <b>Impaired fasting glucose</b> (prediabetes; FBS 100–125 mg/dL) · 4. <b>Moderately increased albuminuria (microalbuminuria)</b> (UACR 30–300 mg/g; ถ้าคงอยู่ &gt; 3 เดือน = CKD stage A2) · รวมเข้าเกณฑ์ <b>metabolic syndrome</b> ได้ถ้ามีรอบเอวเกิน",
   exp:"เกณฑ์ BMI เอเชีย-แปซิฟิก: &lt; 18.5 underweight · 18.5–22.9 ปกติ · 23–24.9 overweight · 25–29.9 obese I · ≥ 30 obese II · ยืนยัน IFG ด้วย FBS/HbA1c ซ้ำ (HbA1c 5.7–6.4%) · UACR ยืนยันซ้ำ + eGFR",
   rubric:"ต้องครบ 4 diagnoses (ตามผู้จด) · คำนวณ BMI ถูก",
   pts:[CR(P("Obesity class I (BMI 27.7)","obes","อ้วน","27\\.7","bmi")),CR(P("Hypertension grade 1","hypertension","\\bht\\b","ความดัน")),CR(P("Impaired fasting glucose (prediabetes)","impaired fasting","\\bifg\\b","prediabet","ก่อนเบาหวาน")),CR(P("Microalbuminuria (moderately increased albuminuria)","microalbumin","albuminuria","\\ba2\\b"))]}),
  B("24.2 Prescribe a drug: name, dose and how the patient should take it.",4,{tags:["lab"],key:"ยา ACEI, ARB ได้เต็ม · ตอบ CCB จะน้อยลง · beta block, thiazide ยิ่งน้อย",
   ans:"<b>ACE inhibitor หรือ ARB</b> (ลด albuminuria + ปกป้องไต): <b>Enalapril 5 mg รับประทานวันละ 1 ครั้ง</b> (ปรับเพิ่มถึง 20–40 mg/วัน แบ่ง 1–2 ครั้ง) หรือ <b>Losartan 50 mg วันละ 1 ครั้ง</b> (สูงสุด 100 mg/วัน) · <b>วิธีรับประทาน:</b> กินเวลาเดียวกันทุกวัน ก่อนหรือหลังอาหารก็ได้ ไม่หยุดยาเอง · <b>ติดตาม Cr และ K⁺ ใน 1–2 สัปดาห์</b>หลังเริ่ม/ปรับยา · แจ้งผลข้างเคียง: ไอแห้ง (ACEI → เปลี่ยนเป็น ARB), angioedema, เวียนศีรษะ · <b>ห้ามใช้ขณะตั้งครรภ์</b> — หญิงวัยเจริญพันธุ์ต้องคุมกำเนิด · ร่วมกับปรับพฤติกรรม: ลดน้ำหนัก 5–10%, จำกัดเกลือ (Na &lt; 2 g/วัน), DASH diet, ออกกำลังกาย ≥ 150 นาที/สัปดาห์ · เป้าหมาย BP &lt; 130/80 mmHg",
   exp:"ACEI/ARB เป็นยาแรกเมื่อมี albuminuria (KDIGO) · ห้ามใช้ ACEI ร่วมกับ ARB · CCB ลด BP ได้ดีแต่ไม่ลด albuminuria (ได้คะแนนน้อยลงตามผู้จด) · beta-blocker/thiazide ไม่เหมาะเป็นตัวแรกในรายที่มี IFG + obesity (เพิ่มความเสี่ยงเบาหวาน)",
   rubric:"ACEI/ARB = เต็ม · CCB = น้อยลง · beta-blocker หรือ thiazide = ยิ่งน้อย (ตามผู้จด) · ต้องบอกขนาดและวิธีรับประทาน",
   pts:[CR(P("ACE inhibitor or ARB","acei","ace inhibitor","\\barb\\b","enalapril","lisinopril","ramipril","perindopril","losartan","valsartan","irbesartan","telmisartan","candesartan")),P("Dose (e.g. enalapril 5 mg or losartan 50 mg once daily)","5 ?mg","10 ?mg","50 ?mg","\\bod\\b","once daily","วันละ ?1 ?ครั้ง","วันละครั้ง"),P("How to take: same time daily, monitor Cr/K⁺, side effects, avoid pregnancy","เวลาเดียวกัน","ทุกวัน","creatinine","\\bcr\\b","potassium","โพแทสเซียม","ไอ","cough","ตั้งครรภ์","pregnan"),P("Lifestyle modification","lifestyle","ลดน้ำหนัก","weight","เกลือ","salt","dash","ออกกำลังกาย","exercise")]})
 ),
 interp:"Lab/health check: BMI 27.7 + BP 145/90 + FBS 110 + UACR 60 → obesity I, HT grade 1, IFG, microalbuminuria → ACEI/ARB",
 summary:["BMI เอเชีย 25–29.9 = obesity I · BP 140–159/90–99 = HT grade 1 · FBS 100–125 = IFG · UACR 30–300 = microalbuminuria","มี albuminuria → ACEI/ARB เป็นยาแรก (enalapril 5 mg OD หรือ losartan 50 mg OD)","ติดตาม Cr/K⁺ 1–2 สัปดาห์ · ห้ามใช้ขณะตั้งครรภ์ · CCB รอง, BB/thiazide ด้อยสุด"]}),

/* ===== สถานี 25 ===== */
Co({page:4,orig:"25",topic:"img",sub:"CXR",title:"Young man with dyspnea — chest radiograph",seen:"คล้าย SI127 Ro401–404 ข้อ 4 (progressive dyspnea in a young man — CXR) และ SI131 Ro413–416 ข้อ 11",
 stem:`A 20-year-old man with no underlying disease presents with dyspnea. A chest radiograph is shown.<br>1. Describe the abnormal findings.<br>2. What is the diagnosis and how would you manage it?`,
 gray:"25. Film ชาย20 no u/d มีอาการเหนื่อย · CXR absent bronchovascular marking, visceral pleural line, no mediastinum shift · เฉลย: spontaneous pneumothorax",
 flag:NOIMG+" · คำบรรยายฟิล์มในช่องโจทย์ย้ายไป gray · ไฟล์ไม่บอกข้างที่เป็น · 25.2 ส่วน management "+ADD,
 notes:"ช่องโจทย์บรรยายฟิล์ม: absent bronchovascular marking, visceral pleural line, no mediastinal shift · เฉลยผู้จด: spontaneous pneumothorax",
 parts:S(
  B("25.1 Describe the abnormal findings.",4,{tags:["img"],key:"absent bronchovascular marking, visceral pleural line, no mediastinum shift (ช่องโจทย์)",
   ans:"<b>Visible visceral pleural line</b> (เส้นขาวบางขนานผนังทรวงอก) · <b>absent bronchovascular markings</b> ด้านนอกต่อ pleural line (hyperlucent) · ปอดแฟบเข้าหา hilum · <b>no mediastinal (tracheal) shift</b> · ไม่มี air-fluid level · ระบุข้างและขนาด (วัดระยะ interpleural ที่ระดับ hilum)",
   exp:"ขนาด: BTS — rim ≥ 2 cm ที่ระดับ hilum = large · ACCP — apex-to-cupola ≥ 3 cm = large · ไม่มี mediastinal shift = ไม่มีลักษณะ tension บนฟิล์ม (tension เป็น clinical diagnosis) · ระวัง skin fold (เส้นต่อเนื่องออกนอกทรวงอก, ยังเห็น lung marking ต่อ)",
   rubric:"ได้เต็ม = pleural line + absent lung marking + บอกว่าไม่มี mediastinal shift",
   pts:[CR(P("Visible visceral pleural line","pleural line","visceral")),CR(P("Absent bronchovascular/lung markings peripherally","absent","lung marking","bronchovascular","no (lung |vascular )?marking","hyperlucen")),P("No mediastinal shift","no (mediastin|tracheal)","ไม่มี ?(mediastin|shift)","no shift","midline")]}),
  B("25.2 What is the diagnosis and how would you manage it?",4,{tags:["img"],key:"spontaneous pneumothorax",flag:ADD+" (management)",
   ans:"<b>Primary spontaneous pneumothorax</b> (ชายหนุ่ม รูปร่างผอมสูง ไม่มีโรคปอด ± สูบบุหรี่ — จาก apical blebs) · Management (BTS 2023): ไม่มีอาการมาก/ไม่มี high-risk → <b>conservative</b> (สังเกตอาการ ± O₂) · <b>มีอาการ (เหนื่อย)</b> → <b>needle aspiration</b> หรือ ambulatory device หรือ <b>intercostal chest drain</b> (small-bore) · tension (hypotension, hypoxemia) → needle decompression ทันทีแล้วใส่ ICD · แนะนำหยุดบุหรี่ ห้ามดำน้ำลึก · เป็นซ้ำ/persistent air leak → VATS (bullectomy + pleurodesis)",
   exp:"Secondary spontaneous pneumothorax (มีโรคปอดเดิม เช่น COPD, TB) มักต้องใส่ chest drain และนอนโรงพยาบาล",
   pts:[CR(P("Spontaneous pneumothorax (primary)","pneumothorax","ลมรั่วในเยื่อหุ้มปอด")),P("Primary (no underlying lung disease)","primary","\\bpsp\\b","spontaneous"),P("Management: observe / needle aspiration / chest drain","aspirat","\\bicd\\b","chest drain","intercostal","tube thoracostomy","observ","conservative","oxygen","\\bo2\\b")]})
 ),
 interp:"CXR: visceral pleural line + absent lung marking, ไม่มี mediastinal shift ในชายหนุ่ม → primary spontaneous pneumothorax",
 summary:["Pneumothorax: visceral pleural line + ไม่มี lung marking ด้านนอก","ชายหนุ่มผอมสูง ไม่มีโรคปอด = primary spontaneous (apical bleb)","BTS 2023: อาการน้อย → conservative · มีอาการ → aspiration/chest drain · tension → decompression"]}),

/* ===== สถานี 26 ===== */
Co({page:4,orig:"26",topic:"img",sub:"Acute abdomen film",title:"Acute abdomen series — describe, cause and treatment",seen:"SI127 Ro409–412 ข้อ 15 และ SI131 Ro417–420 ข้อ 20 (free air → perforation → consult surgery)",
 stem:`A patient presents with acute abdominal pain. An acute abdomen series is shown.<br>1. Describe the abnormal findings.<br>2. What is the most likely cause?<br>3. How would you treat this patient?`,
 gray:"26. Film acute abdomen series -> pneumoperitoneum · ถามcause · ถามtreatment · เฉลย: Double wall sign, อื่นๆ · จาก Organ perforation · รักษา Consult sugery",
 flag:NOIMG+" · \"pneumoperitoneum\" ในช่องโจทย์ย้ายไป gray · อาการนำใน stem Claude ใส่",
 notes:"ช่องโจทย์: acute abdomen series → pneumoperitoneum · ถาม cause และ treatment · เฉลยผู้จด: Double wall sign, อื่น ๆ · จาก organ perforation · รักษา consult surgery (ไฟล์สะกด \"sugery\")",
 parts:S(
  B("26.1 Describe the abnormal findings.",3,{tags:["img"],key:"Double wall sign, อื่นๆ",
   ans:"<b>Pneumoperitoneum</b>: <b>free air under the dome of the diaphragm</b> (upright CXR — ชัดใต้ right hemidiaphragm) · <b>Double wall (Rigler) sign</b> — เห็นทั้งผนังด้านในและนอกของลำไส้ (supine film) · อื่น ๆ: <b>football sign</b> (ลมก้อนใหญ่กลางท้อง), <b>falciform ligament sign</b>, triangle sign, ลมใต้ตับ (Morison pouch)",
   exp:"Upright CXR ไวที่สุดในการเห็นลมใต้กะบังลม (เห็นได้แม้ลม 1–2 mL) · ถ้ายืนไม่ได้ใช้ left lateral decubitus · ลมใต้กะบังลมซ้ายต้องแยกจาก gastric bubble · Chilaiditi sign = ลำไส้แทรกระหว่างตับกับกะบังลม (ไม่ใช่ free air)",
   pts:[CR(P("Free air under the diaphragm / pneumoperitoneum","free air","under (the )?(dome|diaphragm)","pneumoperitone","ลมใต้กะบังลม")),CR(P("Double wall (Rigler) sign","double wall","rigler")),P("Other signs: football, falciform ligament, triangle","football","falciform","triangle")]}),
  B("26.2 What is the most likely cause?",2,{tags:["img"],key:"จาก Organ perforation",
   ans:"<b>Hollow viscus (organ) perforation</b> — ที่พบบ่อยที่สุดคือ <b>perforated peptic ulcer</b> (NSAIDs/ยาชุด, H. pylori, บุหรี่) · อื่น ๆ: perforated appendix/diverticulum, colonic perforation จาก obstruction/cancer, trauma",
   exp:"Pneumoperitoneum ที่ไม่ต้องผ่าตัด: หลังผ่าตัดช่องท้อง/laparoscopy (ลมค้างได้ 1–2 สัปดาห์), peritoneal dialysis, หลัง endoscopy",
   pts:[CR(P("Hollow viscus perforation","perforat","ทะลุ","hollow viscus")),P("Perforated peptic ulcer most common","peptic","ulcer","\\bpup\\b","\\bpu\\b")]}),
  B("26.3 How would you treat this patient?",3,{tags:["img"],key:"รักษา Consult sugery",
   ans:"<b>Consult surgery</b> ด่วน → emergency laparotomy/laparoscopy (เช่น omental/Graham patch) · ระหว่างรอ: <b>NPO</b>, <b>NG tube</b> decompression, <b>IV fluid resuscitation</b>, <b>broad-spectrum IV antibiotics</b>, <b>IV PPI</b>, analgesics, ส่งเลือด CBC/BUN/Cr/electrolyte/G/M",
   exp:"หลังผ่าตัด PU perforation: ตรวจและกำจัด H. pylori, หยุด NSAID",
   rubric:"ผู้จด: consult surgery = คะแนนหลัก",
   pts:[CR(P("Consult surgery / emergency operation","consult","surg","ศัลย","ผ่าตัด","laparotom","laparoscop","patch")),P("NPO, NG tube, IV fluid, IV antibiotics, IV PPI","npo","\\bng\\b","nasogastric","fluid","antibiotic","ppi","งดน้ำงดอาหาร")]})
 ),
 interp:"Acute abdomen series: free air + double wall sign → pneumoperitoneum → hollow viscus perforation → consult surgery",
 summary:["Pneumoperitoneum: free air ใต้กะบังลม (upright), Rigler/double wall, football, falciform ligament sign","สาเหตุ: hollow viscus perforation (PU perforation บ่อยสุด)","NPO, NG, IV fluid, IV ATB, IV PPI + consult surgery"]}),

/* ===== สถานี 27 ===== */
Co({page:5,orig:"27",topic:"img",sub:"CXR",title:"Fever, cough and dyspnea — chest radiograph",seen:"คล้าย SI127 Ro401–404 ข้อ 5 และ SI133 Ro405–406 ข้อ 21 (ไข้ ไอ หอบ — CXR)",
 stem:`A patient presents with fever, cough and dyspnea. A chest radiograph is shown.<br>1. Describe the abnormal findings.<br>2. What is the diagnosis?`,
 gray:"27. Film ไข้ ไอ หอบ · CXR alveolar infiltration at RLL, air bronchogram +- pleural effusion · เฉลย: Pneumonia",
 flag:NOIMG+" · คำบรรยายฟิล์มในช่องโจทย์ย้ายไป gray · ไฟล์ไม่บอกอายุ/เพศ",
 notes:"ช่องโจทย์บรรยายฟิล์ม: alveolar infiltration at RLL, air bronchogram ± pleural effusion · เฉลยผู้จด: Pneumonia",
 parts:S(
  B("27.1 Describe the abnormal findings.",4,{tags:["img"],key:"alveolar infiltration at RLL, air bronchogram +- pleural effusion (ช่องโจทย์)",
   ans:"<b>Alveolar (airspace) infiltration/consolidation</b> ที่ <b>right lower lobe</b> · <b>air bronchogram</b> · <b>right hemidiaphragm ถูกบดบัง</b> (silhouette sign) แต่ right heart border ยังเห็นชัด (แยกจาก RML) · ± <b>blunted right costophrenic angle</b> (pleural effusion)",
   exp:"Silhouette sign: RML → right heart border หาย · RLL → right hemidiaphragm หาย · lingula → left heart border หาย · LLL → left hemidiaphragm หาย/เห็นผ่านเงาหัวใจ",
   rubric:"ต้องบอก alveolar infiltration + ตำแหน่ง RLL + air bronchogram",
   pts:[CR(P("Alveolar infiltration / consolidation","alveolar","consolidat","airspace","infiltrat")),CR(P("Right lower lobe","\\brll\\b","right lower","ขวาล่าง")),P("Air bronchogram","air bronchogram","bronchogram"),P("± Pleural effusion (blunted costophrenic angle)","effusion","costophrenic","blunt")]}),
  B("27.2 What is the diagnosis?",3,{tags:["img"],key:"Pneumonia",
   ans:"<b>Right lower lobe pneumonia</b> (lobar pneumonia; community-acquired — <i>S. pneumoniae</i> พบบ่อยสุด) ± <b>parapneumonic effusion</b>",
   exp:"ประเมินความรุนแรง CURB-65 · ถ้ามี effusion → thoracentesis (pH &lt; 7.2, glucose &lt; 60, pus/Gram stain บวก = complicated/empyema → ใส่ ICD) · ผู้ป่วยใน: ceftriaxone + azithromycin (หรือ respiratory fluoroquinolone)",
   pts:[CR(P("Pneumonia","pneumonia","ปอดอักเสบ","ปอดบวม")),P("Right lower lobe / lobar","\\brll\\b","right lower","lobar"),P("Parapneumonic effusion","parapneumonic","effusion","empyema")]})
 ),
 interp:"CXR: RLL alveolar infiltration + air bronchogram ± effusion → RLL pneumonia",
 summary:["Consolidation + air bronchogram = airspace disease (pneumonia)","RLL บดบัง right hemidiaphragm · RML บดบัง right heart border","มี effusion → thoracentesis แยก complicated parapneumonic/empyema"]}),

/* ===== สถานี 28 ===== */
Co({page:5,orig:"28",topic:"img",sub:"Bone/joint film",title:"Ankle pain and swelling in a 62-year-old man — foot radiographs",seen:"คล้าย SI127 Ro413–416 ข้อ 20 (radiographs of both feet)",
 stem:`A 62-year-old man presents with ankle pain and swelling. Radiographs of both feet are shown.<br>1. Describe the abnormal findings.<br>2. What is the diagnosis?`,
 gray:"28. Film ชาย 62 ปี ปวดข้อเท้าบวม · Punch out lesion at right 5th MTP, left 1st and 5th MTP, overhanging edge, no periarticular osteopenia, soft tissue swelling · เฉลย: chronic tophaceous gout",
 flag:NOIMG+" · คำบรรยายฟิล์มในช่องโจทย์ย้ายไป gray · ไฟล์บอกอาการ \"ปวดข้อเท้าบวม\" แต่รอยโรคอยู่ที่ MTP — Claude ระบุใน stem ว่าเป็นฟิล์มเท้าทั้งสองข้าง",
 notes:"ช่องโจทย์บรรยายฟิล์ม: punched-out lesion ที่ right 5th MTP, left 1st and 5th MTP, overhanging edge, no periarticular osteopenia, soft tissue swelling · เฉลยผู้จด: chronic tophaceous gout",
 parts:S(
  B("28.1 Describe the abnormal findings.",4,{tags:["img"],key:"Punch out lesion at right 5th MTP, left 1st and 5th MTP, overhanging edge, no periarticular osteopenia, soft tissue swelling (ช่องโจทย์)",
   ans:"<b>Punched-out erosions</b> ขอบคม sclerotic ที่ <b>right 5th MTP</b> และ <b>left 1st and 5th MTP</b> joints · <b>overhanging edge</b> (Martel sign/\"rat bite\") · <b>no periarticular osteopenia</b> · <b>soft tissue swelling</b> (tophi — อาจมี calcification) · joint space คงอยู่ค่อนข้างดีจนระยะท้าย · asymmetric",
   exp:"แยกจาก RA: RA มี periarticular osteopenia, marginal erosion ไม่มี overhanging edge, joint space แคบสม่ำเสมอ, symmetric · psoriatic arthritis: pencil-in-cup, periostitis, DIP",
   rubric:"ต้องมี punched-out erosion + overhanging edge + no periarticular osteopenia จึงได้เต็ม",
   pts:[CR(P("Punched-out erosions at MTP joints","punch","erosion","mtp","metatarsophalang")),CR(P("Overhanging edge (Martel sign)","overhang","martel","rat bite")),P("No periarticular osteopenia","no periarticular","periarticular osteopenia","no osteopenia","ไม่มี osteopenia"),P("Soft tissue swelling (tophi)","soft tissue","tophi","tophus","swelling")]}),
  B("28.2 What is the diagnosis?",3,{tags:["img"],key:"chronic tophaceous gout",
   ans:"<b>Chronic tophaceous gout</b> (gouty arthritis หลายข้อ) · Ddx: rheumatoid arthritis, psoriatic arthritis, erosive OA",
   exp:"Rx: urate-lowering therapy (allopurinol เริ่มขนาดต่ำ ตรวจ HLA-B*58:01 ก่อนในคนไทย/เอเชีย) treat-to-target serum urate &lt; 6 mg/dL (&lt; 5 ถ้ามี tophi) + prophylaxis colchicine 3–6 เดือน",
   pts:[CR(P("Chronic tophaceous gout","tophaceous","gout","เกาต์")),P("Chronic / tophi","chronic","tophi","tophus")]})
 ),
 interp:"Bone film: punched-out erosions + overhanging edge + ไม่มี periarticular osteopenia + soft tissue swelling ที่ MTP → chronic tophaceous gout",
 summary:["Gout: punched-out erosion ขอบ sclerotic + overhanging edge (Martel) + ไม่มี periarticular osteopenia + tophi","RA: periarticular osteopenia, marginal erosion, symmetric","Rx: allopurinol (HLA-B*58:01) เป้า urate < 6 (< 5 ถ้ามี tophi)"]}),

/* ===== สถานี 29 ===== */
Co({page:5,orig:"29",topic:"proc",sub:"NG tube",ex:1,proc:1,title:"Procedure — nasogastric tube insertion",seen:"SI127 Ro413–416 ข้อ 18 (procedure — NG tube insertion)",
 stem:`A patient has difficulty swallowing and needs a nasogastric tube. Demonstrate nasogastric tube insertion on the model. Say aloud each step you perform.`,
 gray:"29. หัตถการ ใส่ NG tube เนื่องจากมีปัญหาด้านการกลืน · เฉลย: เตรียมอุปกรณ์ · บอก indication · วัดความลึก ช่วยกลืน · ฟัง stomach และ lung",
 flag:"⚠ เฉลยผู้จดยืนยันตำแหน่งด้วยการฟัง (stomach และ lung) — guideline ปัจจุบันไม่ให้ใช้การฟังเป็นวิธียืนยัน (ดู opinion) · บทผู้คุม (sp) Claude แต่ง",
 notes:"เฉลยผู้จด: เตรียมอุปกรณ์ · บอก indication · วัดความลึก · ช่วยกลืน · ฟัง stomach และ lung",
 opinion:"ไฟล์ให้ยืนยันตำแหน่งโดยฟังที่ stomach และ lung (air insufflation/whoosh test) — แนวทางปัจจุบัน (เช่น NHS Improvement/NPSA, ASPEN) <b>ไม่ให้ใช้การฟังเสียงลม</b>เป็นวิธียืนยันเพราะเชื่อถือไม่ได้ (ได้ยินเสียงคล้ายกันแม้สายอยู่ในหลอดลม/หลอดอาหาร) → ยืนยันด้วย <b>aspirate pH ≤ 5.5</b> และ/หรือ <b>CXR</b> (gold standard) ก่อนให้อาหาร/ยาทางสาย · ในการสอบยังควรพูดตามที่ผู้จดบอก แต่ต้องบอกการยืนยันด้วย pH/CXR ด้วย",
 sp:"หุ่นใส่ NG tube + อุปกรณ์: NG tube เบอร์ 14–16 Fr, K-Y jelly/xylocaine jelly, syringe 50 mL (catheter tip), แก้วน้ำ + หลอด, พลาสเตอร์, stethoscope, กระดาษ pH, ถุงมือ, ผ้ากันเปื้อน · ผู้คุมรับบทผู้ป่วยหลังสโตรกกลืนลำบาก รู้สึกตัวดีทำตามสั่งได้ · ถ้าผู้สอบให้กลืน: ผู้ป่วยกลืนได้ · ถ้าผู้สอบถามผลการยืนยันตำแหน่ง: ดูดได้น้ำย่อย pH 4 · ผู้ป่วยถามว่า \"ใส่ไปทำไม เจ็บไหม\"",
 parts:S(
  B("29.1 Perform the nasogastric tube insertion (say each step in order).",8,{tags:["proc"],key:"เตรียมอุปกรณ์ · บอก indication · วัดความลึก ช่วยกลืน · ฟัง stomach และ lung",
   ans:"<b>เตรียม:</b> แนะนำตัว ยืนยันตัวผู้ป่วย <b>บอก indication</b> (กลืนลำบาก → ให้อาหาร/ยา) อธิบายขั้นตอนและขออนุญาต · ตรวจข้อห้าม (basal skull fracture, facial fracture, nasal obstruction; ระวัง esophageal varices/stricture, coagulopathy) · <b>เตรียมอุปกรณ์</b> (NG tube 14–16 Fr, lubricant, syringe 50 mL, น้ำ, พลาสเตอร์, กระดาษ pH, stethoscope) ล้างมือ ใส่ถุงมือ · จัด<b>ท่านั่ง Fowler</b> ก้มคอเล็กน้อย เลือกรูจมูกที่โล่ง · <b>วัดความยาว</b>: ปลายจมูก → ติ่งหู → xiphoid (NEX) ทำเครื่องหมาย · หล่อลื่นปลายสาย · สอดเข้ารูจมูกขนานพื้นจมูก (ตั้งฉากกับใบหน้า) ไปทางด้านหลัง · ถึง nasopharynx ให้ผู้ป่วยก้มคอ <b>ช่วยกลืน</b> (จิบน้ำ/กลืนน้ำลาย) แล้วดันตามจังหวะกลืน จนถึงเครื่องหมาย · <b>ถ้าไอ สำลัก เสียงเปลี่ยน เขียว → ถอยสายออก</b> · <b>ยืนยันตำแหน่ง</b>: ดูดได้น้ำย่อย ตรวจ <b>pH ≤ 5.5</b> · ไม่แน่ใจ → <b>CXR</b> · (ตามผู้จด: ฟังที่ stomach ขณะดันลม และฟังที่ปอด — ใช้เสริมเท่านั้น) · <b>ยึดสาย</b>ที่จมูก บันทึกความยาวที่รูจมูก · ถอดถุงมือ ล้างมือ บันทึก",
   exp:"NEX ประเมินความยาวได้คร่าว ๆ (ประมาณ 50–60 cm ในผู้ใหญ่) · ห้ามให้อาหาร/ยาทางสายจนกว่าจะยืนยันตำแหน่งด้วย pH หรือ CXR · ผู้ป่วยหมดสติ/ใส่ท่อช่วยหายใจ: ใส่ยากกว่าและไม่มี cough reflex เตือน — ต้อง CXR",
   rubric:"ผู้จดให้คะแนน: เตรียมอุปกรณ์, บอก indication, วัดความลึก, ช่วยกลืน, ฟัง stomach และ lung · ไม่ยืนยันตำแหน่งก่อนใช้งาน หรือไม่ถอยสายเมื่อสำลัก = ขาดข้อสำคัญ (ความปลอดภัย)",
   pts:[H("เตรียม",25),P("Introduce, identify patient, explain the indication and consent","แนะนำ","identif","indication","ข้อบ่งชี้","กลืนลำบาก","อธิบาย","ขออนุญาต","consent"),P("Prepare equipment, hand hygiene, gloves","อุปกรณ์","equipment","ถุงมือ","glove","ล้างมือ"),P("Sitting (Fowler) position, choose patent nostril","ท่านั่ง","fowler","นั่ง","รูจมูก","nostril"),
    H("ใส่สาย",40),CR(P("Measure length nose–ear–xiphoid","วัด","measure","ความลึก","ความยาว","\\bnex\\b","ติ่งหู","xiphoid","earlobe")),P("Lubricate and insert along the nasal floor","lubric","หล่อลื่น","jelly","สอด","insert"),CR(P("Ask the patient to swallow; flex neck","กลืน","swallow","ก้มคอ","จิบน้ำ")),P("Withdraw if coughing/choking/cyanosis","ไอ","cough","สำลัก","chok","ถอย","withdraw","cyanos"),
    H("ยืนยัน/ยึด",35),CR(P("Confirm position: aspirate pH ≤ 5.5 / CXR (± auscultation)","\\bph\\b","x.?ray","\\bcxr\\b","aspirat","ดูด","ฟัง","auscult","stomach","lung")),P("Secure the tube and document the length","ยึด","พลาสเตอร์","tape","secure","fix","บันทึก","document")]})
 ),
 interp:"Procedure: NG tube — indication, เตรียมอุปกรณ์, วัด NEX, ช่วยกลืน, ยืนยันตำแหน่ง (pH/CXR; ผู้จด: ฟัง stomach และ lung), ยึดสาย",
 summary:["บอก indication + ข้อห้าม (basal skull/facial fracture)","วัด nose–ear–xiphoid → หล่อลื่น → สอดขนานพื้นจมูก → ก้มคอ ให้กลืน → ไอ/สำลักให้ถอย","ยืนยันด้วย aspirate pH ≤ 5.5 หรือ CXR — การฟังลมเชื่อถือไม่ได้ (ใช้เสริม)"]}),

/* ===== สถานี 30 ===== */
Co({page:5,orig:"30",topic:"proc",sub:"Blood transfusion",ex:1,proc:1,title:"Procedure — administering a blood transfusion",seen:"SI127 Ro409–412 ข้อ 18 · SI130 Ro409–412 ข้อ 17 · SI131 Ro409–412 ข้อ 13 (ให้เลือด)",
 stem:`A patient has an order for a packed red cell transfusion. Demonstrate how you would check the blood and give it to the patient. Say aloud every step you check, and tell the nurse what to monitor.`,
 gray:"30. หัตถการ ให้เลือด · เฉลย: เช็ค HN, AN, order, unit number, group, สภาพเลือดว่า clot มั้ย, วันหมดอายุ, ไปให้พยาบาลเช็ค, premed, แนะนำตัว, เช็คชื่อนามสกุล, ให้เพราะอะไร, สังเกตอาการอะไร, บอกพยาบาลให้ monitor อะไร",
 flag:"บทผู้คุม (sp) Claude แต่ง · ขั้นตอนที่ไฟล์ไม่ได้จด (consent, ถุงมือ, ชุดให้เลือด, vital sign) Claude เติมตาม OSCE_REF (แบบประเมินการให้เลือดศิริราช)",
 notes:"เฉลยผู้จด: เช็ค HN, AN, order, unit number, group, สภาพเลือดว่า clot ไหม, วันหมดอายุ, ให้พยาบาลเช็ค, premed · ข้างเตียง: แนะนำตัว, เช็คชื่อ-นามสกุล, ให้เพราะอะไร, สังเกตอาการอะไร, บอกพยาบาลให้ monitor อะไร",
 opinion:"ไฟล์ไม่ขัดกับ OSCE_REF · OSCE_REF ให้วัด vital sign หลังเริ่มให้ 5–10 นาที แต่ไม่มีขั้น baseline ก่อนเริ่ม — guideline (BSH/AABB) วัด baseline + วัดซ้ำประมาณ 15 นาทีหลังเริ่ม และเมื่อให้เสร็จ จึงใส่ทั้งสองอย่าง",
 sp:"ผู้คุมรับบทพยาบาล/อาจารย์: มี order PRC 1 unit (ผู้ป่วยซีด Hb 6.5 g/dL), ถุงเลือดพร้อมใบคล้อง, ชุดให้เลือด, ผู้ป่วยจำลองมีป้ายข้อมือ · ข้อมูลทุกอย่างตรงกัน (ชื่อ HN AN unit no. หมู่เลือด) เลือดไม่มี clot ไม่หมดอายุ · ถ้าผู้สอบเรียกพยาบาลมาเช็ค: ผู้คุมมาช่วยดู · ผู้ป่วยถามว่า \"ทำไมต้องให้เลือด ต้องระวังอะไรบ้าง\" · ถ้าผู้สอบถามเรื่อง premedication: ไม่มี order premed (ผู้ป่วยไม่เคยแพ้เลือด)",
 parts:S(
  B("30.1 Check the order and the blood bag.",6,{tags:["proc"],key:"เช็ค HN, AN, order, unit number, group, สภาพเลือดว่า clot มั้ย, วันหมดอายุ, ไปให้พยาบาลเช็ค, premed",
   ans:"ตรวจ <b>informed consent</b> และ <b>order</b> (ข้อบ่งชี้ ชนิด จำนวน rate) และ <b>premedication</b> (ถ้ามี order ให้ได้รับก่อน) · <b>สวมถุงมือ</b>ก่อนจับถุงเลือด · ตรวจ<b>สภาพเลือด</b>: สี, <b>clot</b>, รั่ว/ฉีก · <b>วันหมดอายุ</b> · <b>เรียกพยาบาลช่วย double check</b>: ใบคล้องต้องติดกับถุงเสมอ · <b>ชื่อ-นามสกุล, HN, AN</b> ตรงกันระหว่างถุง ใบคล้อง และ order · <b>unit number</b> ใบคล้อง = ถุง · <b>หมู่เลือด (group)</b> ถุง = ใบคล้อง = ผู้ป่วย · ไม่ตรงข้อใด → ห้ามให้ แจ้งธนาคารเลือด · เปิดชุดให้เลือด ปิด roller clamp ต่อถุงแบบ aseptic แขวน ไล่อากาศ",
   exp:"Clerical error เป็นสาเหตุหลักของ ABO-incompatible transfusion → acute hemolytic transfusion reaction · ใบคล้องหลุดจากถุง = ห้ามให้ถุงนั้น · เริ่มให้ภายใน 30 นาทีหลังนำออกจากตู้เย็น และให้หมดภายใน 4 ชม.",
   rubric:"ไม่ double check กับพยาบาล หรือไม่ตรวจ unit no./หมู่เลือด = ขาดข้อสำคัญ",
   pts:[H("Order",20),P("Informed consent and order","consent","ยินยอม","order","คำสั่ง"),P("Premedication","premed"),
    H("ถุงเลือด",30),P("Blood appearance: clots, colour, leaks","clot","ก้อน","สภาพ","ลักษณะ","รั่ว","leak"),P("Expiry date","expir","หมดอายุ"),
    H("Double check",50),CR(P("Nurse double-check","พยาบาล","nurse","double ?check")),P("Name, HN, AN — bag, tag and order","ชื่อ","name","\\bhn\\b","\\ban\\b"),CR(P("Unit number","unit")),CR(P("Blood group","หมู่เลือด","blood group","group","\\babo\\b"))]}),
  B("30.2 At the bedside — identification, counselling and monitoring.",5,{tags:["proc"],key:"แนะนำตัว, เช็คชื่อนามสกุล, ให้เพราะอะไร, สังเกตอาการอะไร, บอกพยาบาลให้ monitor อะไร",
   ans:"<b>แนะนำตัว</b> · <b>identify ผู้ป่วย</b>: ให้ผู้ป่วยบอก<b>ชื่อ-นามสกุล</b>เอง + ตรวจป้ายข้อมือ ตรงกับถุง · บอก<b>ให้เพราะอะไร</b> (indication) และขออนุญาต · อธิบาย<b>อาการที่ต้องสังเกต</b>: ไข้ หนาวสั่น ผื่นคัน/ลมพิษ เหนื่อย แน่นหน้าอก ปวดหลัง ปัสสาวะสีเข้ม → แจ้งทันที · วัด <b>vital sign ก่อนเริ่ม</b> → ต่อกับ IV แบบ aseptic ปรับ rate ช้าใน 15 นาทีแรก · <b>บอกพยาบาลให้ monitor</b>: <b>vital signs</b> (T, BP, PR, RR, SpO₂) ที่ 15 นาทีแรก (OSCE_REF: 5–10 นาที) แล้วเป็นระยะจนเสร็จ, อาการ transfusion reaction, rate, urine output/สีปัสสาวะ, อาการ volume overload · ถ้ามี reaction → หยุดให้เลือดทันที keep vein ด้วย NSS แล้วแจ้งแพทย์",
   exp:"Reaction: ไข้ > 38 °C และเพิ่ม > 1 °C → หยุดให้ คิด AHTR/sepsis/FNHTR · urticaria อย่างเดียว = mild allergic → antihistamine · anaphylaxis → epinephrine IM · เหนื่อย + pulmonary edema: TACO (volume overload, BP สูง → diuretic) vs TRALI (ไม่มี volume overload, BP ต่ำได้)",
   rubric:"ไม่ identify ผู้ป่วยข้างเตียง หรือไม่บอกพยาบาลให้ monitor vital signs = ขาดข้อสำคัญ",
   pts:[P("Introduce self","แนะนำตัว","introduc"),CR(P("Identify the patient: full name, wristband","identif","ชื่อ","ป้ายข้อมือ","wristband","นามสกุล")),P("Explain why the blood is given","indication","ข้อบ่งชี้","เพราะ","ทำไม","ซีด"),P("Explain symptoms of transfusion reaction to watch for","ไข้","หนาวสั่น","ผื่น","ลมพิษ","เหนื่อย","แน่นหน้าอก","reaction","complication","ผลข้างเคียง"),CR(P("Instruct nurse to monitor vital signs and reactions","monitor","vital","\\bv/?s\\b","สัญญาณชีพ","สังเกต"))]})
 ),
 interp:"Procedure: ให้เลือด — consent/order/premed, สภาพถุง/clot/หมดอายุ, double check ชื่อ HN AN unit no. หมู่เลือดกับพยาบาล, identify ผู้ป่วย, indication, อาการที่ต้องสังเกต, สั่งพยาบาล monitor",
 summary:["ก่อนให้: consent, order, premed, สภาพเลือด (clot), วันหมดอายุ","Double check กับพยาบาล: ชื่อ HN AN, unit number, หมู่เลือด — ไม่ตรง = ห้ามให้","ข้างเตียง: แนะนำตัว, ให้ผู้ป่วยบอกชื่อเอง, indication, อาการ reaction, สั่งพยาบาล monitor VS (15 นาทีแรก) และอาการ"]}),

);
})();

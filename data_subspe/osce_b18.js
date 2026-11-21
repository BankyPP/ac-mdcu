(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "77 Sx MEQ and OSCE" (จด AC By Academic 77) → MDCU77 RoC (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO77CQ = AC_77C_Sx_OSCE__MEQ.pdf (24 หน้า) · หน้า 3–12 พาร์ท MEQ ข้อ 1–15 → sec "Short Answers" (orig "MEQ n", num "SA n", topic spot)
   หน้า 14–21 พาร์ท OSCE ข้อ 1–11 + สถานีไหมที่ไม่มีเลข (orig "ไหม") · หน้า 22–24 ว่าง
   ไฟล์เฉลย SO77CK = Key_OSCE_77_RoC_Sx.pdf (by MDCU78) — MEQ 1–15 (บางข้อย่อยว่าง) · OSCE 3, 4, 5, 6, 8, 9, 10, 11 (ครอป os77c_km และ os77c_ko)
   ผู้จดเขียนหลายข้อว่ารูปไม่เป๊ะ — ใส่ไว้ใน notes · MEQ 1, 14, OSCE 1, 2 และสถานีไหมไม่มีรูปในไฟล์ */
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
const KF="ไฟล์ Key 77C: ";
const Co=o=>Object.assign({set:"MDCU77",ro:"RoC",file:"SO77CQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== MEQ 1 ===== */
SA({page:4,orig:"MEQ 1",num:"SA 1",sub:"Anorectal",title:"Short answer — bloody mucoid stool with a normal anal canal",kimg:["os77c_km1"],
 stem:`A 50-year-old man has passed blood and mucus in the stool for 1 month. Proctoscopy shows a normal anal canal with no fissure.<br>1. What additional history is important for the differential diagnosis?<br>2. What investigation would you request?<br>3. What is the diagnosis?`,
 gray:"MEQ 1) ผู้ป่วยชายอายุ 50 ปี ถ่ายมีมูกเลือดมา 1 เดือน แพทย์ proctoscope เห็น normal anal canal, no fissure seen 1) จงซักประวัติสำคัญเพิ่มเติมเพื่อประโยชน์ในการวินิจฉัยแยกโรค 2) ท่านจะส่ง investigation ใดเพิ่ม 3) จงให้การวินิจฉัย",
 flag:"ไม่มีรูปในไฟล์ · ข้อย่อยแรกไฟล์ Key ว่าง — Claude เฉลย",
 notes:"เฉลยในไฟล์ Key 77C: 1. (ว่าง) 2. Colonoscope, double contrast barium enema 3. Colorectal cancer",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — colonoscopy เป็นการตรวจหลัก (ตัดชิ้นเนื้อได้)",
 parts:S(
  B("1.1 Additional history.",4,{tags:["spot"],ans:"<b>Change in bowel habit</b> (ท้องผูกสลับท้องเสีย, ลำอุจจาระเล็กลง), <b>tenesmus</b>, ถ่ายไม่สุด · <b>weight loss</b>, เบื่ออาหาร, อ่อนเพลีย/ซีด · ปวดท้อง ท้องอืด (obstruction) · ไข้ ถ่ายบ่อย ปวดข้อ ผื่น (IBD), เดินทาง/อาหาร (infectious colitis) · <b>ประวัติครอบครัวมะเร็งลำไส้ใหญ่</b>/polyp · เคย colonoscopy · ฉายแสงเชิงกราน",exp:"มูกเลือด + ไม่มีรอยโรคที่ anal canal → คิดถึงรอยโรคในลำไส้ใหญ่ (มะเร็ง, colitis)",rubric:"≥4",pts:[G("≥4 items",4,P("Change in bowel habit","bowel habit","ลำอุจจาระ","ท้องผูก","ท้องเสีย"),P("Tenesmus / incomplete evacuation","tenesmus","ไม่สุด"),P("Weight loss / anorexia","weight","น้ำหนัก","เบื่ออาหาร"),P("Family history of CRC","family","ครอบครัว"),P("IBD/infectious features","fever","ไข้","ibd","ข้อ","travel"),P("Obstructive symptoms","distension","ท้องอืด","obstruct","ปวดท้อง"))]}),
  B("1.2 Investigation.",2,{tags:["spot"],key:KF+"Colonoscope, double contrast barium enema",ans:"<b>Colonoscopy with biopsy</b> (ดูทั้งลำไส้ใหญ่) · ถ้าทำไม่ได้: CT colonography/double-contrast barium enema · CBC, CEA (ใช้ติดตาม)",exp:"ยืนยันมะเร็งแล้ว staging: CT chest/abdomen/pelvis ± MRI pelvis (rectal cancer)",rubric:"ได้ = colonoscopy + biopsy",pts:[CR(P("Colonoscopy","colonoscop")),P("Biopsy","biopsy","ชิ้นเนื้อ"),P("Barium enema / CT colonography","barium","colonography")]}),
  B("1.3 Diagnosis.",2,{tags:["spot"],key:KF+"Colorectal cancer",ans:"<b>Colorectal (rectosigmoid) carcinoma</b> จนกว่าจะพิสูจน์ได้ว่าไม่ใช่ · DDx: IBD (ulcerative colitis), infectious colitis, polyp",exp:"อายุ 50 + มูกเลือด = red flag ของมะเร็งลำไส้ใหญ่",rubric:"ได้ = CRC",pts:[CR(P("Colorectal cancer","colorectal","rectal cancer","carcinoma","มะเร็ง")),P("DDx IBD/colitis","ibd","colitis","ulcerative")]})
 ),
 interp:"Bloody mucoid stool",
 summary:["อายุ ≥45–50 + rectal bleeding → colonoscopy","Proctoscopy ปกติไม่ตัดรอยโรคเหนือขึ้นไป","Staging CT ± MRI pelvis"]}),

/* ===== MEQ 2 ===== */
SA({page:4,orig:"MEQ 2",num:"SA 2",sub:"Imaging film",title:"Spot — routine chest radiograph of a healthy 65-year-old woman",img:["os77c_m2"],kimg:["os77c_km2"],
 stem:`A healthy 65-year-old woman with no underlying disease has a routine annual check-up. The chest radiograph is shown.<br>1. Report the chest radiograph and the abnormality.<br>2. What history would help the differential diagnosis?<br>3. What further investigation would you request?`,
 gray:"MEQ 2) หญิงวัย 65 ปี สุขภาพแข็งแรง ไม่มีโรคประจำตัว เข้ารับการตรวจสุขภาพประจำปี ได้ผล chest x ray ดังภาพ 1) จงรายงานผล chest x ray และความผิดปกติที่พบ 2) จงซักประวัติเพื่อวินิจฉัยแยกโรค 3) ท่านจะส่ง investigation ใดเพิ่มเติม",
 notes:"รูปในไฟล์: CXR PA เห็นก้อนกลมขอบชัดในปอดขวา · เฉลยในไฟล์ Key 77C: 1. Round, well circumscribed lesion at right middle lung zone 2. ไอเรื้อรัง ไอเป็นเลือด เบื่ออาหาร น้ำหนักลด เหงื่อออกกลางคืน ประวัติสัมผัสวัณโรค 3. CT chest",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("2.1 Report.",3,{tags:["spot"],key:KF+"Round, well circumscribed lesion at right middle lung zone",ans:"CXR PA upright, adequate · <b>solitary round well-circumscribed opacity (nodule/mass) in the right middle lung zone</b> · ไม่เห็น calcification ชัด ไม่มี effusion, hilar adenopathy · กระดูก/หัวใจปกติ",exp:"Nodule ≤3 cm · mass &gt;3 cm (มะเร็งสูงขึ้นตามขนาด)",rubric:"ได้ = round lesion + ตำแหน่ง",pts:[P("Technique/adequacy","pa","adequa","upright"),CR(P("Round well-circumscribed nodule/mass","round","nodule","mass","circumscrib","ก้อน")),CR(P("Right middle zone","right","middle"))]}),
  B("2.2 History.",3,{tags:["spot"],key:KF+"ไอเรื้อรัง ไอเป็นเลือด เบื่ออาหาร น้ำหนักลด เหงื่อออกกลางคืน ประวัติสัมผัสวัณโรค",ans:"ไอเรื้อรัง <b>ไอเป็นเลือด</b> เหนื่อย เจ็บหน้าอก · <b>น้ำหนักลด</b> เบื่ออาหาร <b>ไข้/เหงื่อออกกลางคืน</b> · <b>สูบบุหรี่</b> (pack-year), สัมผัสฝุ่น/แร่ใยหิน · <b>สัมผัสวัณโรค</b> · ประวัติมะเร็งเดิม (metastasis) · CXR เก่าเพื่อเทียบ",exp:"Lesion ในผู้สูงอายุไม่มีอาการ: คิดมะเร็งปอดก่อน แล้วจึง granuloma จาก TB (พบบ่อยในไทย)",rubric:"≥4",pts:[G("≥4",4,P("Hemoptysis/cough","hemoptysis","ไอ","cough"),P("Weight loss","weight","น้ำหนัก"),P("Fever/night sweats","fever","ไข้","night sweat","เหงื่อ"),P("Smoking","smok","บุหรี่"),P("TB contact","tb","วัณโรค","tuberc"),P("Previous cancer / old CXR","cancer","มะเร็ง","old","เดิม"))]}),
  B("2.3 Investigation.",2,{tags:["spot"],key:KF+"CT chest",ans:"<b>CT chest with contrast</b> (ขนาด ขอบ calcification ต่อมน้ำเหลือง) → tissue diagnosis (CT-guided biopsy/bronchoscopy) ± PET-CT · sputum AFB/GeneXpert ถ้าสงสัย TB",exp:"ลักษณะร้าย: ขอบ spiculated, ขนาดใหญ่, โตขึ้น · benign: calcification แบบ popcorn/central/laminated",rubric:"ได้ = CT chest",pts:[CR(P("CT chest","ct")),P("Biopsy / sputum AFB","biopsy","bronchoscop","sputum","afb")]})
 ),
 interp:"Solitary pulmonary nodule",
 summary:["DDx: lung cancer, granuloma (TB), hamartoma, metastasis","CT chest","ผู้สูงอายุ/สูบบุหรี่ → คิดมะเร็งก่อน"]}),

/* ===== MEQ 3 ===== */
SA({page:4,orig:"MEQ 3",num:"SA 3",sub:"Imaging film",title:"Spot — colicky abdominal pain, distension and obstipation",img:["os77c_m3a","os77c_m3b"],kimg:["os77c_km3"],
 stem:`A 35-year-old man has had colicky abdominal pain, distension and no bowel movement for 3 days. He has no previous surgery. In the emergency room an NG tube was inserted and its drainage is shown. Further radiographs are shown.<br>1. Name the left and right radiographs.<br>2. What is the diagnosis?<br>3. Give the 2 most likely causes of this condition.`,
 gray:"MEQ 3) ชายวัย 35 ปี มีอาการปวดท้องบีบ ๆ เป็นพัก ๆ ท้องอืด ไม่ถ่าย 3 วันก่อนมาโรงพยาบาล ไม่เคยมีประวัติผ่าตัดมาก่อน ที่ห้องฉุกเฉินได้รับการใส่ NG tube ได้ของเหลวใน bag ดังภาพ แพทย์ส่งตรวจเพิ่มเติม ได้ผลดังแสดง (รูปไม่เป๊ะ ของจริงไม่แน่ใจว่ามี colonic dilatation ด้วยไหม) 1) การส่งตรวจในรูปซ้ายชื่อว่าอะไร ส่งตรวจรูปขวาชื่อว่าอะไร 2) จงให้การวินิจฉัย 3) จงบอกสาเหตุที่ทำให้เกิดโรคนี้ 2 ข้อ ตามหลักความน่าจะเป็น",
 flag:"⚠ รูปไม่เป๊ะ (ผู้จดไม่แน่ใจว่ามี colonic dilatation) — รูปในไฟล์ดูเป็นลำไส้เล็กโป่ง ขณะที่คีย์ตอบ large bowel obstruction; เรายึดคีย์และระบุว่าต้องดูลักษณะลำไส้ในรูปจริง",
 notes:"รูปในไฟล์: (1) ถุง NG มีของเหลวสีน้ำตาลเข้ม (2) plain abdomen upright และ supine (มีลูกศร) · เฉลยในไฟล์ Key 77C: 1. Plain film abdomen upright, plain film abdomen supine 2. Large bowel obstruction 3. Colorectal cancer, diverticulitis",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): เห็นด้วยกับคีย์ 77C (upright + supine plain abdomen · large bowel obstruction · colorectal cancer, diverticulitis) — ไม่เคยผ่าตัด + ไม่ถ่าย 3 วัน + NG สีน้ำตาลเขียวคล้ำ เข้ากับ obstruction ส่วนปลาย; สาเหตุ LBO ผู้ใหญ่ที่พบบ่อย: colorectal cancer > volvulus > diverticular disease (Sabiston 21e) จึงรับ sigmoid volvulus เพิ่ม · รูปในไฟล์ไม่ใช่รูปจริง (ผู้จดไม่แน่ใจว่ามี colonic dilatation) · ความมั่นใจปานกลาง",
 parts:S(
  B("3.1 Name the radiographs.",2,{tags:["spot"],key:KF+"Plain film abdomen upright, plain film abdomen supine",ans:"ซ้าย: <b>plain abdomen upright (erect)</b> — air-fluid levels · ขวา: <b>plain abdomen supine</b> — ดูการกระจายของลมและขนาดลำไส้",exp:"Acute abdomen series = upright CXR + upright + supine abdomen",rubric:"ได้ = upright + supine",pts:[CR(P("Upright/erect abdomen","upright","erect")),CR(P("Supine abdomen","supine"))]}),
  B("3.2 Diagnosis.",2,{tags:["spot"],key:KF+"Large bowel obstruction",ans:"<b>Mechanical bowel obstruction — large bowel obstruction</b> (ตามคีย์; ต้องดูลักษณะลำไส้ในรูปจริง: colon มี haustra อยู่รอบนอก, small bowel มี valvulae conniventes อยู่ตรงกลาง)",exp:"Cut-off: small bowel &gt;3 cm, colon &gt;6 cm, cecum &gt;9 cm (3-6-9)",rubric:"ได้ = bowel obstruction (LBO ตามคีย์)",pts:[CR(P("Bowel obstruction","obstruct","อุดตัน")),P("Large bowel","large bowel","lbo","colon")]}),
  B("3.3 Two most likely causes.",2,{tags:["spot"],key:KF+"Colorectal cancer, diverticulitis",ans:"LBO ผู้ใหญ่: <b>colorectal cancer</b> (บ่อยที่สุด) · <b>sigmoid volvulus</b> · <b>diverticular stricture</b> · (ถ้าเป็นลำไส้เล็กโดยไม่เคยผ่าตัด: hernia, มะเร็ง)",exp:"Sigmoid volvulus พบในผู้สูงอายุ/ผู้ป่วยติดเตียง ท้องอืดมาก รูป coffee bean",rubric:"≥2",pts:[G("≥2",2,P("Colorectal cancer","colorectal","cancer","carcinoma","มะเร็ง"),P("Volvulus","volvulus"),P("Diverticular disease","diverticul"),P("Hernia","hernia","ไส้เลื่อน"))]})
 ),
 interp:"Bowel obstruction",
 summary:["SBO: adhesion &gt; hernia &gt; tumor","LBO: cancer &gt; volvulus &gt; diverticular","Closed loop (competent ileocecal valve) เสี่ยง cecal perforation"]}),

/* ===== MEQ 4 ===== */
SA({page:6,orig:"MEQ 4",num:"SA 4",sub:"Plastic/Skin/Burn",title:"Spot — burn wound on day 7",img:["os77c_m4"],kimg:["os77c_km4"],
 stem:`A 30-year-old man with burns was admitted to the burn unit 7 days ago. Today you help the resident dress the wound shown.<br>1. What does the black arrow point to?<br>2. List the steps of the reconstructive ladder.<br>3. Which method would you choose for this patient?`,
 gray:"MEQ 4) ชายวัย 30 ปี มีแผลไฟไหม้ ได้รับการ admit เข้า burn unit ที่โรงพยาบาลจุฬาลงกรณ์เมื่อ 7 วันก่อน วันนี้นิสิตเข้าไปช่วยแพทย์ประจำบ้านทำแผล เห็นแผลดังภาพ 1) ลูกศรสีดำกำลังชี้อะไร 2) Stepladder of reconstruction มีอะไรบ้าง 3) ในคนไข้คนนี้จะเลือกวิธีไหน",
 notes:"รูปในไฟล์: แผลกว้างทั่วหน้าอก-ท้องฐานแดงสด มีลูกศรดำและขาว · เฉลยในไฟล์ Key 77C: 1. Granulation tissue 2. Healing by secondary intention, primary closure, skin graft, local flap, regional flap, free flap 3. Split thickness skin graft · AC 77B MEQ 5 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("4.1 Black arrow.",1,{tags:["spot"],key:KF+"Granulation tissue",ans:"<b>Healthy granulation tissue</b> (แดงสด เป็นเม็ด เลือดออกง่าย)",exp:"Granulation = capillary ใหม่ + fibroblast เป็นฐานรับ skin graft ได้ดี",rubric:"ได้",pts:[CR(P("Granulation tissue","granulation"))]}),
  B("4.2 Reconstructive ladder.",3,{tags:["spot"],key:KF+"Healing by secondary intention, primary closure, skin graft, local flap, regional flap, free flap",ans:"Secondary intention → primary closure → <b>skin graft</b> → tissue expansion → <b>local flap</b> → <b>regional flap</b> → <b>free flap</b>",exp:"ไล่จากวิธีง่ายไปซับซ้อน แต่เลือกขั้นที่ให้ผลดีที่สุดได้เลย (reconstructive elevator)",rubric:"ครบลำดับหลัก",pts:[P("Secondary intention","secondary"),P("Primary closure","primary"),CR(P("Skin graft","graft")),P("Local flap","local"),P("Regional flap","regional","distant"),P("Free flap","free")]}),
  B("4.3 Choice.",2,{tags:["spot"],key:KF+"Split thickness skin graft",ans:"แผลกว้างมาก ฐาน granulation ดี → <b>split-thickness skin graft</b> (meshed เพื่อคลุมพื้นที่กว้าง)",exp:"แผลไหม้กว้าง: early excision and grafting; donor ไม่พอ → meshed graft/skin substitute",rubric:"ได้ = STSG",pts:[CR(P("Split-thickness skin graft","split","stsg")),P("Meshed","mesh")]})
 ),
 interp:"Burn wound coverage",
 summary:["Granulation tissue รับ graft ได้","STSG ติดดีบนฐานที่มีเลือดมาเลี้ยง","Mesh 1.5:1–3:1"]}),

/* ===== MEQ 5 ===== */
SA({page:6,orig:"MEQ 5",num:"SA 5",sub:"Breast",title:"Spot — screening mammogram in a 30-year-old woman",img:["os77c_m5"],kimg:["os77c_km5"],
 stem:`A healthy 30-year-old woman has an annual check-up. The finding is shown.<br>1. Name the mammographic views in images A and B.<br>2. Read the mammogram.<br>3. What is the diagnosis?<br>4. What further investigation would you request?`,
 gray:"MEQ 5) หญิง 30 ปี สุขภาพแข็งแรง เข้ารับการตรวจสุขภาพประจำปี พบความผิดปกติดังภาพ (ไม่แน่ใจใช่รูปนี้มั้ย แต่ใกล้เคียงมาก ๆ แบบเดียวกับ AC 74 Rotate A) 1) View ของ mammogram ในรูปชื่อว่าอะไร ให้ตอบทั้งภาพ A และ B 2) จงอ่านผล mammogram 3) จงให้การวินิจฉัย 4) ท่านจะส่ง investigation ใดเพิ่มเติม",
 flag:"⚠ ไฟล์ Key 77C ข้อย่อย 3 เขียน \"???\" — Claude ตอบ fibroadenoma (ก้อนกลมขอบเรียบในหญิงอายุน้อย) ความมั่นใจปานกลาง",
 notes:"รูปในไฟล์: mammogram A และ B มีลูกศรชี้ก้อนกลมขอบชัดที่เต้านมขวา · เฉลยในไฟล์ Key 77C: a. Mammogram, mediolateral oblique view, craniocaudal view b. Well circumscribed round mass at upper outer quadrant of right breast c. ??? d. Breast ultrasound, core needle biopsy",
 opinion:"เห็นด้วยกับข้อย่อย 1, 2, 4 ในไฟล์ · ข้อย่อย 3 Claude ตอบ — ความมั่นใจปานกลาง",
 parts:S(
  B("5.1 Views.",2,{tags:["spot"],key:KF+"Mammogram, mediolateral oblique view, craniocaudal view",ans:"A: <b>mediolateral oblique (MLO)</b> · B: <b>craniocaudal (CC)</b>",exp:"MLO เห็น pectoralis major และหางเต้านม (axillary tail)",rubric:"ได้ = MLO + CC",pts:[CR(P("MLO","mlo","mediolateral")),CR(P("CC","cc","craniocaudal"))]}),
  B("5.2 Read.",2,{tags:["spot"],key:KF+"Well circumscribed round mass at upper outer quadrant of right breast",ans:"<b>Round, well-circumscribed, oval/round mass</b> at the <b>upper outer quadrant of the right breast</b> · ไม่มี spiculation, microcalcification, skin thickening",exp:"BI-RADS: ก้อนขอบเรียบ circumscribed มักเป็น benign; spiculated/microcalcification สงสัยมะเร็ง",rubric:"ได้ = round circumscribed mass + UOQ right",pts:[CR(P("Well-circumscribed round mass","circumscrib","round","mass")),P("Right UOQ","upper outer","uoq","right")]}),
  B("5.3 Diagnosis.",2,{tags:["spot"],key:KF+"???",ans:"<b>Probably benign breast mass — fibroadenoma</b> (DDx cyst, phyllodes tumor)",exp:"Fibroadenoma พบบ่อยที่สุดในหญิง &lt;30–35 ปี",rubric:"ได้ = fibroadenoma/benign mass",pts:[CR(P("Fibroadenoma / benign","fibroadenoma","benign","cyst"))]}),
  B("5.4 Further investigation.",2,{tags:["spot"],key:KF+"Breast ultrasound, core needle biopsy",ans:"<b>Breast ultrasound</b> (solid vs cystic, BI-RADS) → <b>core needle biopsy</b> (triple assessment)",exp:"หญิงอายุน้อย: US เป็นตัวแรก mammogram ไวน้อยเพราะเนื้อเต้านมแน่น",rubric:"ได้ = US + CNB",pts:[CR(P("Breast ultrasound","ultrasound","us")),CR(P("Core needle biopsy","core","biopsy"))]})
 ),
 interp:"Breast mass in a young woman",
 summary:["Triple assessment","อายุ &lt;30–35 → US ก่อน","Fibroadenoma: oval, circumscribed, wider than tall"]}),

/* ===== MEQ 6 ===== */
SA({page:7,orig:"MEQ 6",num:"SA 6",sub:"Vascular/Ulcer",title:"Spot — blackened toe with weak pulses",img:["os77c_m6a","os77c_m6b"],kimg:["os77c_km6"],
 stem:`The photographs show the left foot (the toenail is visible in the exam image) and the skin of the leg. Pulse examination:<br>Femoral 1+/1+, popliteal 1+/1+, posterior tibial 0/0, dorsalis pedis 0/0 (left/right).<br>1. Describe all the findings.<br>2. Which structure causes this condition?<br>3. Give a complete diagnosis.<br>4. What investigation would you request?`,
 gray:"MEQ 6) รูปซ้ายตามข้อสอบเป๊ะ ๆ มีแผลแบบเดียวกันที่นิ้วเท้าเท้าซ้าย ให้รูปฝ่าเท้ามาอีกรูป skin แบบรูปขวา (รูปขวาไม่ได้ออกสอบ) ในข้อสอบเห็นเล็บด้วย ตรวจ pulse ได้ผลดังนี้ Left / Right: Femoral 1+/1+, Popliteal 1+/1+, Posterior tibial 0/0, Dorsalis pedis 0/0 1) บรรยายสิ่งที่เห็นให้ครบ 2) โครงสร้างใดที่ทำให้เกิดโรคนี้ (น่าจะถามว่าเส้นเลือดไหน) 3) จงให้การวินิจฉัยให้ครบถ้วน 4) ท่านจะส่ง Investigation อะไรเพิ่ม",
 flag:"⚠ คีย์ตอบ bilateral popliteal artery occlusion แต่ popliteal ยังคลำได้ 1+ ทั้งสองข้าง ระดับรอยโรคน่าจะอยู่ใต้ popliteal (infrapopliteal/tibial) ร่วมกับ inflow ไม่ดี (femoral 1+) — ใส่ทั้งสองแบบใน rubric",
 notes:"รูปในไฟล์: (1) นิ้วเท้ามีเนื้อตายสีดำแห้ง (2) ขาผิวแห้งเป็นขุย ขนร่วง มีแผล (ผู้จดบอกว่ารูปขวาไม่ได้ออกสอบ แต่ข้อสอบมีรูปฝ่าเท้าผิวลักษณะคล้ายกัน) · เฉลยในไฟล์ Key 77C: 1. Gangrene at left 1st tarsometatarsal joint, with trophic skin change 2. Bilateral popliteal artery occlusion from thrombosis 3. Chronic limb threatening ischemia from bilateral popliteal artery occlusion 4. CT angiogram"+" · ตรวจคีย์ 21 พ.ย. 2026: คีย์เดิมตอบ bilateral popliteal artery occlusion → เฉลยใช้ infrapopliteal (popliteal ยังคลำได้) แต่ rubric รับทั้งสอง ตาม Sabiston 21e",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): เห็นด้วยกับคีย์ 77C เรื่อง dry gangrene + trophic skin change, CLTI และ CT angiogram · ไม่เห็นด้วยกับระดับ bilateral popliteal artery occlusion เพราะ popliteal ยังคลำได้ 1+ ทั้งสองข้างแต่ PT/DP 0 → รอยโรคอยู่ใต้ popliteal pulse (trifurcation/tibial = infrapopliteal) ± inflow disease (femoral 1+) ตามหลักระดับรอยโรค = ใต้ชีพจรสุดท้ายที่คลำได้ (Sabiston 21e; Rutherford Vascular Surgery 10e) · นิยาม CLTI ตาม Global Vascular Guidelines 2019 · toe gangrene = Rutherford 5 · rubric รับทั้ง popliteal และ tibial · ความมั่นใจปานกลาง",
 parts:S(
  B("6.1 Describe.",3,{tags:["spot"],key:KF+"Gangrene at left 1st tarsometatarsal joint, with trophic skin change",ans:"<b>Dry gangrene</b> (เนื้อตายสีดำแห้ง ขอบเขตชัด) ที่นิ้วเท้า/หัวแม่เท้าซ้าย · <b>trophic skin changes</b>: ผิวแห้งมันวาว ขนร่วง เล็บหนา · ± ischemic ulcer",exp:"Dry gangrene = ขาดเลือดไม่มีติดเชื้อ; wet = ติดเชื้อ บวมแดง หนอง → ต้องผ่าด่วน",rubric:"ได้ = dry gangrene + trophic change",pts:[CR(P("Dry gangrene","gangrene","necros","เนื้อตาย")),P("Location toe/left","toe","นิ้ว","left","ซ้าย"),P("Trophic skin changes","trophic","hair","shiny","ขน","เล็บ")]}),
  B("6.2 Responsible structure.",2,{tags:["spot"],key:KF+"Bilateral popliteal artery occlusion from thrombosis",ans:"<b>Atherosclerotic occlusive disease ของหลอดเลือดแดงขา</b> — popliteal ยังคลำได้ ระดับรอยโรคจึงอยู่ที่ <b>infrapopliteal (tibial) arteries</b> ทั้งสองข้าง (คีย์ตอบ popliteal artery) ± inflow disease (femoral 1+)",exp:"ระดับรอยโรค = ต่ำกว่าชีพจรสุดท้ายที่คลำได้",rubric:"ได้ = arterial occlusion + level (tibial หรือ popliteal)",pts:[CR(P("Arterial (atherosclerotic) occlusion","arter","athero","occlu","thromb")),P("Popliteal/tibial level","popliteal","tibial","infrapopliteal","crural")]}),
  B("6.3 Complete diagnosis.",3,{tags:["spot"],key:KF+"Chronic limb threatening ischemia from bilateral popliteal artery occlusion",ans:"<b>Chronic limb-threatening ischemia of the left leg with dry gangrene of the toe</b> (Rutherford 5 — minor tissue loss) จาก <b>bilateral infrapopliteal atherosclerotic peripheral arterial disease</b>",exp:"CLTI = rest pain, ulcer หรือ gangrene &gt;2 สัปดาห์ จาก PAD",rubric:"ได้ = CLTI + gangrene + PAD",pts:[CR(P("Chronic limb-threatening ischemia / critical limb ischemia","chronic limb","clti","critical","cli")),P("Gangrene","gangrene"),P("PAD/atherosclerosis","pad","peripheral arter","athero")]}),
  B("6.4 Investigation.",2,{tags:["spot"],key:KF+"CT angiogram",ans:"<b>ABI</b>/toe pressure (ABI อาจสูงเท็จใน DM) · arterial duplex · <b>CT angiography</b> (หรือ DSA) วางแผน revascularization · FBS/HbA1c, lipid, creatinine",exp:"ABI &lt;0.4 หรือ toe pressure &lt;30 mmHg = CLTI; DM อาจมี ABI &gt;1.3 (หลอดเลือดแข็ง)",rubric:"ได้ = CTA (+ABI)",pts:[P("ABI/toe pressure","abi","toe pressure","ankle"),CR(P("CT angiography / angiogram","cta","angiogra")),P("Duplex","duplex","doppler")]})
 ),
 interp:"Chronic limb-threatening ischemia",
 summary:["Level = ต่ำกว่าชีพจรสุดท้ายที่คลำได้","DM → infrapopliteal disease","Revascularize (endovascular/bypass) แล้วจึง amputation นิ้ว"]}),

/* ===== MEQ 7 ===== */
SA({page:8,orig:"MEQ 7",num:"SA 7",sub:"CT",title:"Spot — dizziness in an elderly woman",img:["os77c_m7a","os77c_m7b"],kimg:["os77c_km7"],
 stem:`A 70-year-old woman has had dizziness for 3 hours. GCS E4V5M6, no neurological deficit. She was previously healthy with no underlying disease. CT images are shown; the hematoma measures 40 × 30 mm on the axial image and spans 30 mm craniocaudally.<br>1. What is the diagnosis?<br>2. Estimate the volume of the hematoma.<br>3. Give the 2 most likely causes.`,
 gray:"MEQ 7) ยาย 70 ปี มึนหัวมา 3 ชั่วโมงก่อนมาโรงพยาบาล แพทย์ห้องฉุกเฉินตรวจร่างกายได้ GCS: E4M6V5, no neurological deficit ก่อนหน้านี้แข็งแรงดี ไม่มีโรคประจำตัว 1) จงให้การวินิจฉัย 2) ปริมาตรของ (ข้อสอบวัดมาให้หน่วย mm) 3) สาเหตุที่เป็นไปได้มากที่สุด 2 สาเหตุ ให้ตอบตามสถิติ",
 flag:"ข้อสอบวัดขนาดมาให้แต่ผู้จดไม่ได้จดตัวเลข — Claude เติม 40 × 30 × 30 mm เพื่อฝึกคำนวณ ABC/2 · ไฟล์ Key ข้อย่อย 2 ว่าง",
 notes:"รูปในไฟล์: CT brain ไม่ฉีดสี เห็นก้อนเลือด hyperdense บริเวณ occipital (รูปขวามี 3 ระนาบพร้อมลูกศร) · เฉลยในไฟล์ Key 77C: 1. Intraparenchymal hemorrhage at left occipital lobe (รูปซ้าย parieto-temporal รูปขวา occipital ดูในห้องสอบอีกที) 2. (ว่าง) 3. Hypertension, amyloid angiopathy?",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง — lobar hemorrhage ในผู้สูงอายุที่ไม่มีความดันสูง สาเหตุอันดับแรกคือ cerebral amyloid angiopathy",
 parts:S(
  B("7.1 Diagnosis.",2,{tags:["spot"],key:KF+"Intraparenchymal hemorrhage at left occipital lobe",ans:"<b>Acute intracerebral (intraparenchymal) hemorrhage, left occipital lobe</b> (lobar ICH)",exp:"ด้านขวาของภาพ = ซีกซ้ายของผู้ป่วย",rubric:"ได้ = ICH + ตำแหน่ง",pts:[CR(P("Intracerebral/intraparenchymal hemorrhage","intracerebral","intraparenchymal","ich")),P("Left occipital","occipital","left","lobar")]}),
  B("7.2 Volume.",2,{tags:["spot"],key:"(ไฟล์ Key 77C ช่องนี้ว่าง)",ans:"<b>ABC/2</b> = (4 × 3 × 3)/2 = <b>18 mL</b> (A, B = เส้นผ่านศูนย์กลางตั้งฉากบน axial ที่ใหญ่สุด, C = ความสูง เป็น cm)",exp:"ICH score: volume ≥30 mL ได้ 1 คะแนน",rubric:"ได้ = ABC/2 + คำนวณถูก",pts:[CR(P("ABC/2 formula","abc","/2","÷ ?2")),P("18 mL","18")]}),
  B("7.3 Two most likely causes.",2,{tags:["spot"],key:KF+"Hypertension, amyloid angiopathy?",ans:"<b>Cerebral amyloid angiopathy</b> (lobar ICH ในผู้สูงอายุ) · <b>hypertensive hemorrhage</b> · อื่น ๆ: AVM, tumor, anticoagulant",exp:"Hypertensive ICH ชอบ deep: putamen, thalamus, pons, cerebellum",rubric:"ได้ = CAA + HT",pts:[CR(P("Cerebral amyloid angiopathy","amyloid","caa")),CR(P("Hypertension","hypertens","ht","ความดัน"))]})
 ),
 interp:"Lobar ICH",
 summary:["ABC/2","CAA: lobar, ผู้สูงอายุ","HT: basal ganglia, thalamus, pons, cerebellum"]}),

/* ===== MEQ 8 ===== */
SA({page:8,orig:"MEQ 8",num:"SA 8",sub:"Pediatric surgery",title:"Spot — a growing forehead mass in an infant",img:["os77c_m8"],kimg:["os77c_km8"],
 stem:`A 6-month-old infant is brought for a forehead mass. It is soft and compressible, not pulsatile and without bruit. At birth it was as small as a mung bean and it has grown steadily with age, never getting smaller.<br>1. What is the diagnosis?<br>2. Outline the management.`,
 gray:"MEQ 8) เด็กวัย 6 เดือน มารดาพามาโรงพยาบาลเนื่องจากมีก้อนที่หน้าผาก แพทย์ตรวจร่างกายได้ก้อนนุ่มหยุ่น no pulsatile, no bruit มารดาให้ประวัติว่าแรกเกิดก้อนขนาดเล็กเท่าเม็ดถั่วเขียว ค่อย ๆ ใหญ่ขึ้นตามอายุ ไม่เคยเล็กลง 1) จงให้การวินิจฉัย 2) จงบอก management",
 notes:"รูปในไฟล์: ก้อนแดงสดนูนที่หน้าผากระหว่างตา · เฉลยในไฟล์ Key 77C: 1. Hemangioma 2. Advice, propranolol PO",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("8.1 Diagnosis.",2,{tags:["spot"],key:KF+"Hemangioma",ans:"<b>Infantile hemangioma</b> (superficial, proliferative phase) ที่หน้าผาก/glabella",exp:"Infantile hemangioma: เล็ก/ไม่เห็นตอนเกิด → โตเร็วถึง 5–6 เดือน → ยุบช้า ๆ (involution) หลายปี",rubric:"ได้",pts:[CR(P("Infantile hemangioma","hemangioma"))]}),
  B("8.2 Management.",3,{tags:["spot"],key:KF+"Advice, propranolol PO",ans:"อธิบายธรรมชาติโรค (ยุบเองได้) · ตำแหน่งใกล้ตา/ใบหน้า เสี่ยง amblyopia และความสวยงาม → <b>oral propranolol</b> 1–3 mg/kg/day (ตรวจหัวใจ ระวัง hypoglycemia, bradycardia) · ติดตามขนาด · lesion เล็ก: topical timolol · หลัง involution อาจผ่าตัดแก้ไข",exp:"ข้อบ่งชี้รักษา: บดบังการมองเห็น/ทางเดินหายใจ, แผล, เลือดออก, ใบหน้าที่กระทบความงาม",rubric:"ได้ = advice + propranolol",pts:[P("Reassure/explain natural history","advice","reassur","อธิบาย","involut"),CR(P("Oral propranolol","propranolol","beta")),P("Monitor side effects / follow-up","hypoglyc","bradycard","follow","ติดตาม")]})
 ),
 interp:"Infantile hemangioma",
 summary:["Propranolol first line","Periocular → amblyopia","PHACE ใน segmental facial hemangioma"]}),

/* ===== MEQ 9 ===== */
SA({page:9,orig:"MEQ 9",num:"SA 9",sub:"Plastic/Skin/Burn",title:"Spot — a wound in an elderly woman unable to walk",img:["os77c_m9"],kimg:["os77c_km9"],
 stem:`An 80-year-old woman could no longer walk after an accident. The wound shown later developed.<br>1. What is this abnormality called?<br>2. In what position does it develop?<br>3. Which underlying structure causes it?`,
 gray:"MEQ 9) หญิงวัย 80 ปี ประสบอุบัติเหตุ ต่อมาไม่สามารถลุกเดินได้ 1) ความผิดปกติในภาพเรียกว่าอะไร 2) เกิดจากการที่ผู้ป่วยอยู่ในท่าใด 3) โครงสร้างใดที่อยู่ใต้ความผิดปกติในภาพ และเป็นสาเหตุของความผิดปกตินี้",
 notes:"รูปในไฟล์: แผลตื้นฐานแดงบริเวณก้นกบใกล้ร่องก้น · เฉลยในไฟล์ Key 77C: 1. Grade 2 bed sore 2. ท่านอน 3. sacrum · AC 77A MEQ 10 ถามเรื่องคล้ายกัน (trochanter)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง (stage ขึ้นกับความลึกในรูปจริง)",
 parts:S(
  B("9.1 Name.",2,{tags:["spot"],key:KF+"Grade 2 bed sore",ans:"<b>Pressure injury (pressure ulcer/bed sore), stage 2</b> — partial-thickness skin loss เห็น dermis",exp:"NPIAP: stage 1 non-blanchable erythema · 2 partial thickness · 3 full thickness (เห็นไขมัน) · 4 เห็นกระดูก/เอ็น",rubric:"ได้ = pressure injury + stage",pts:[CR(P("Pressure injury/ulcer","pressure","bed ?sore","decubitus","แผลกดทับ")),P("Stage 2","stage 2","grade 2","stage ii","ii")]}),
  B("9.2 Position.",1,{tags:["spot"],key:KF+"ท่านอน",ans:"<b>Supine (นอนหงาย)</b> นาน ๆ โดยไม่พลิกตัว",exp:"Pressure injury เกิดเมื่อแรงกดเกิน capillary pressure (~32 mmHg) นาน ๆ ร่วมกับ shear/ความชื้น",rubric:"ได้ = supine",pts:[CR(P("Supine","supine","นอนหงาย","ท่านอน"))]}),
  B("9.3 Underlying structure.",2,{tags:["spot"],key:KF+"sacrum",ans:"<b>Sacrum/coccyx</b> — กระดูกยื่นใต้ผิวหนังที่รับแรงกดในท่านอนหงาย",exp:"Lateral decubitus → greater trochanter · นั่ง → ischial tuberosity",rubric:"ได้",pts:[CR(P("Sacrum/coccyx","sacr","coccyx","กระดูกก้นกบ"))]})
 ),
 interp:"Pressure injury",
 summary:["พลิกตัวทุก 2 ชม.","Offload, โภชนาการ, ดูแลความชื้น","Stage 3–4 → debridement ± flap"]}),

/* ===== MEQ 10 ===== */
SA({page:9,orig:"MEQ 10",num:"SA 10",sub:"Pediatric surgery",title:"Spot — newborn with an abdominal wall defect at a community hospital",img:["os77c_m10"],kimg:["os77c_km10"],
 stem:`You are a newly graduated doctor at a small community hospital. During your shift a baby is born with the abnormality shown.<br>1. What is the diagnosis?<br>2. Explain the pathophysiology.<br>3. What other anomalies are associated?<br>4. Describe the initial management in detail.`,
 gray:"MEQ 10) ท่านเป็นแพทย์จบใหม่ ประจำอยู่ที่โรงพยาบาลชุมชนเล็ก ๆ แห่งหนึ่ง ในเวรของท่าน มีเด็กที่คลอดออกมา พบความผิดปกติดังภาพ 1) จงให้การวินิจฉัย 2) จงบอก pathophysiology ของความผิดปกตินี้ 3) ความผิดปกตินี้สัมพันธ์กับ anomalies ใดอีก 4) จงบอก initial management อย่างละเอียด",
 notes:"รูปในไฟล์: ถุงใหญ่คลุมอวัยวะช่องท้องที่สะดือ มีสายสะดือติดที่ถุง · เฉลยในไฟล์ Key 77C: 1. Omphalocele 2. Failure to return of visceral organ into abdomen, failure of lateral fold fusion 3. Trisomy, Beckwith-Wiedemann syndrome 4. พันแผลด้วย gauze ชุบ warm NSS แล้วพัน gauze แห้งและ conform, NPO, IV fluid (MT + 5%), OG decompression, ampicillin + gentamicin, incubator, refer for surgery · AC 77A MEQ 5 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("10.1 Diagnosis.",1,{tags:["spot"],key:KF+"Omphalocele",ans:"<b>Omphalocele</b> (giant, sac intact)",exp:"Gastroschisis: ข้างขวาของสะดือ ไม่มีถุง",rubric:"ได้",pts:[CR(P("Omphalocele","omphalocele","exomphalos"))]}),
  B("10.2 Pathophysiology.",2,{tags:["spot"],key:KF+"Failure to return of visceral organ into abdomen, failure of lateral fold fusion",ans:"<b>Failure of the lateral body folds to fuse</b> + <b>failure of the midgut to return to the abdomen</b> after physiological umbilical herniation (สัปดาห์ 10–12) → อวัยวะอยู่ในถุง amnion–Wharton jelly–peritoneum",exp:"Gastroschisis เกิดจาก defect ของผนังหน้าท้องด้านขวาสะดือ (อาจจาก vascular accident ของ right umbilical vein)",rubric:"ได้",pts:[CR(P("Failure of midgut return / lateral fold fusion","return","lateral fold","fold","herniation"))]}),
  B("10.3 Associated anomalies.",2,{tags:["spot"],key:KF+"Trisomy, Beckwith-Wiedemann syndrome",ans:"<b>Chromosomal</b> (trisomy 13, 18, 21) · <b>Beckwith–Wiedemann</b> (macroglossia, gigantism, hypoglycemia) · <b>cardiac anomalies</b> · pentalogy of Cantrell · OEIS",exp:"Omphalocele มี associated anomaly ~50–70% (gastroschisis ส่วนใหญ่ไม่มี ยกเว้น intestinal atresia)",rubric:"≥2",pts:[G("≥2",2,P("Trisomy","trisomy","chromosom"),P("Beckwith–Wiedemann","beckwith"),P("Cardiac","cardiac","หัวใจ"),P("Cantrell","cantrell"))]}),
  B("10.4 Initial management.",4,{tags:["spot"],key:KF+"gauze ชุบ warm NSS + gauze แห้ง + conform, NPO, IV fluid, OG decompression, ampicillin + gentamicin, incubator, refer",ans:"<b>Thermoregulation</b> (incubator/radiant warmer) · คลุมถุงด้วย <b>gauze ชุบ warm NSS</b> + พลาสติก/ผ้าแห้ง ไม่ให้ถุงแตก วางตะแคงขวาไม่ให้หลอดเลือดพับ · <b>NPO</b>, <b>OG/NG decompression</b> · <b>IV fluid</b> (maintenance + dextrose; ตรวจ glucose — BWS) · <b>ampicillin + gentamicin</b> · ตรวจหา anomaly อื่น (echo) · <b>refer</b> ไป pediatric surgery",exp:"Giant omphalocele: paint and wait (silver sulfadiazine/povidone ให้ epithelialize) แล้วซ่อมภายหลัง",rubric:"≥5",pts:[CR(P("Warmth/incubator","incubator","warm","อุ่น","thermo")),CR(P("Cover sac with warm saline gauze","saline","nss","gauze","cover","คลุม")),P("NPO + OG decompression","npo","og","ng","decompress"),P("IV fluid with dextrose / glucose monitoring","iv","fluid","dextrose","glucose"),P("Antibiotics","ampicillin","gentamicin","antibiotic"),P("Refer","refer","ส่งต่อ")]})
 ),
 interp:"Omphalocele",
 summary:["มีถุง + มี anomaly อื่นบ่อย","Check glucose (BWS) + echo","Primary closure vs staged/paint and wait"]}),

/* ===== MEQ 11 ===== */
SA({page:10,orig:"MEQ 11",num:"SA 11",sub:"Pediatric surgery",title:"Spot — intermittent crying in a 6-month-old boy",img:["os77c_m11"],kimg:["os77c_km11"],
 stem:`A 6-month-old boy has intermittent crying. On opening his diaper you see the finding shown.<br>1. What is the diagnosis?<br>2. Give the initial management.<br>3. What is the definitive management?`,
 gray:"MEQ 11) เด็กชายวัย 6 เดือน ผู้ปกครองพามาพบท่านเนื่องจากเด็กมี intermittent crying เมื่อเปิดแพมเพิร์สดูเห็นดังภาพ 1) จงให้การวินิจฉัย 2) จงให้ initial management 3) จงบอก definitive management",
 notes:"รูปในไฟล์มีป้ายข้อความชื่ออาการกำกับไว้ — ครอปออก · ภาพ: ทารกมีมูกเลือดสีแดงคล้ำที่ก้น · เฉลยในไฟล์ Key 77C: 1. Intussusception 2. Ultrasound for definitive diagnosis, IV fluid 3. Pneumatic reduction under fluoroscopy, if fail change to exploration laparotomy for manual reduction",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("11.1 Diagnosis.",1,{tags:["spot"],key:KF+"Intussusception",ans:"<b>Intussusception</b> (ileocolic) — red currant jelly stool",exp:"Lead point (Meckel, polyp, lymphoma) ต้องคิดในเด็ก &gt;2–3 ปีหรือเป็นซ้ำ",rubric:"ได้",pts:[CR(P("Intussusception","intussuscep","ลำไส้กลืนกัน"))]}),
  B("11.2 Initial management.",3,{tags:["spot"],key:KF+"Ultrasound for definitive diagnosis, IV fluid",ans:"<b>NPO</b>, <b>IV fluid resuscitation</b>, NG decompression ถ้าอาเจียน/ท้องอืด · ตรวจหา peritonitis/shock · <b>ultrasound</b> ยืนยัน (target/donut sign) · CBC, electrolyte · ± antibiotics",exp:"US: target sign (transverse), pseudokidney sign (longitudinal)",rubric:"ได้ = resuscitation + US",pts:[CR(P("IV fluid / NPO","iv","fluid","npo","สารน้ำ")),CR(P("Ultrasound","ultrasound","us","target","donut")),P("NG decompression","ng","decompress")]}),
  B("11.3 Definitive management.",3,{tags:["spot"],key:KF+"Pneumatic reduction under fluoroscopy, if fail change to exploration laparotomy for manual reduction",ans:"<b>Non-operative reduction</b>: pneumatic (fluoroscopy) หรือ hydrostatic (US/fluoroscopy) · ข้อห้าม: peritonitis, perforation, shock → <b>laparotomy/laparoscopy</b> manual reduction (squeeze ไม่ดึง) ± resection",exp:"สำเร็จ ~80–90% · recurrence ~10%",rubric:"ได้ = pneumatic/hydrostatic + surgery ถ้าล้มเหลว",pts:[CR(P("Pneumatic/hydrostatic reduction","pneumatic","hydrostatic","air","enema")),CR(P("Surgery if failed/contraindicated","laparotomy","surgery","operat","ผ่าตัด"))]})
 ),
 interp:"Intussusception",
 summary:["อายุ 6 เดือน–2 ปี","Triad: colicky pain, vomiting, currant jelly stool","Air enema → surgery ถ้าล้มเหลว"]}),

/* ===== MEQ 12 ===== */
SA({page:10,orig:"MEQ 12",num:"SA 12",sub:"Abdominal pain",title:"Short answer — right subcostal colicky pain after big meals",img:["os77c_m12a","os77c_m12b"],kimg:["os77c_km12"],
 stem:`A 30-year-old Thai man has colicky right subcostal pain related to large meals. You examine him as shown (red dot).<br>1. What is the surface anatomy of the point being pressed?<br>2. He catches his breath when you press there. What is this sign called?<br>3. Read the investigation shown.<br>4. Outline the management.`,
 gray:"MEQ 12) ผู้ป่วยชายไทยอายุ 30 ปี มาหาท่านด้วยอาการปวดบีบ ๆ ใต้ชายโครงขวา อาการปวดสัมพันธ์กับการรับประทานอาหารมื้อใหญ่ ๆ ท่านตรวจร่างกายดังภาพ 1) Surface anatomy ของตำแหน่งที่มือกดคืออะไร (จุดสีแดง) 2) ผู้ป่วยหายใจสะดุดเมื่อกดหน้าท้องในตำแหน่งดังกล่าว การหยุดหายใจของผู้ป่วยมีชื่อเรียกว่าอะไร 3) ท่านส่งตรวจเพิ่มเติม ได้ผลดังภาพ (รูปนี้เป๊ะ) จงอ่านผลการตรวจ 4) จงให้ management ในผู้ป่วยรายนี้",
 notes:"รูปในไฟล์: (1) แผนภาพมือกดใต้ชายโครงขวามีจุดแดง (ภาพเดิมมีชื่อ sign กำกับ — ครอปออก) (2) ultrasound ถุงน้ำดี (ผู้จดบอกว่ารูปนี้เป๊ะ) · เฉลยในไฟล์ Key 77C: 1. Right costal margin ตัดกับ midclavicular line (murphy point) 2. Murphy sign positive 3. Upper abdomen ultrasound: gallbladder dilatation, gallbladder wall thickening, pericholecystic fluid, 2 hyperechoic foci with posterior acoustic shadow in gallbladder lumen 4. NPO, IV fluid, ceftriaxone 2 g IV, plan laparoscopic cholecystectomy",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("12.1 Surface anatomy.",1,{tags:["spot"],key:KF+"Right costal margin ตัดกับ midclavicular line (murphy point)",ans:"<b>Intersection of the right costal margin and the midclavicular line</b> (tip of the 9th costal cartilage) — gallbladder fundus",exp:"Fundus ของถุงน้ำดีอยู่ใต้ปลายกระดูกอ่อนซี่โครงที่ 9",rubric:"ได้",pts:[CR(P("Right costal margin × midclavicular line","costal margin","midclavicular","9th","ชายโครง"))]}),
  B("12.2 Sign.",1,{tags:["spot"],key:KF+"Murphy sign positive",ans:"<b>Murphy's sign</b> positive (inspiratory arrest)",exp:"Sonographic Murphy sign = กดด้วย probe ตรงถุงน้ำดีแล้วเจ็บมากที่สุด",rubric:"ได้",pts:[CR(P("Murphy's sign","murphy"))]}),
  B("12.3 Read the investigation.",3,{tags:["spot"],key:KF+"Upper abdomen ultrasound: gallbladder dilatation, wall thickening, pericholecystic fluid, 2 hyperechoic foci with posterior acoustic shadow",ans:"<b>Upper abdominal ultrasound</b>: <b>distended gallbladder</b>, <b>wall thickening</b> (&gt;3–4 mm), <b>pericholecystic fluid</b>, <b>hyperechoic stones with posterior acoustic shadow</b> → acute calculous cholecystitis",exp:"Tokyo Guidelines 2018: local signs + systemic inflammation + imaging",rubric:"≥3 findings",pts:[P("Ultrasound","ultrasound","us"),G("≥3 findings",3,P("Distended GB","distend","dilat"),P("Wall thickening","wall","thicken"),P("Pericholecystic fluid","pericholecystic","fluid"),P("Stones with shadow","stone","shadow","hyperecho"))]}),
  B("12.4 Management.",3,{tags:["spot"],key:KF+"NPO, IV fluid, ceftriaxone 2 g IV, plan laparoscopic cholecystectomy",ans:"Admit · <b>NPO</b>, <b>IV fluid</b>, analgesia · <b>IV antibiotics</b> (ceftriaxone ± metronidazole) · <b>early laparoscopic cholecystectomy</b> (ภายใน 72 ชม.–7 วัน)",exp:"ผู้ป่วยเสี่ยงผ่าตัดสูง/grade III → percutaneous cholecystostomy",rubric:"ได้ = supportive + antibiotics + early LC",pts:[P("NPO/IV fluid/analgesia","npo","iv","fluid","analges"),CR(P("IV antibiotics","antibiotic","ceftriaxone")),CR(P("Laparoscopic cholecystectomy","cholecystectomy","lc"))]})
 ),
 interp:"Acute calculous cholecystitis",
 summary:["Murphy sign","US: wall thick, pericholecystic fluid, stone","Early LC"]}),

/* ===== MEQ 13 ===== */
SA({page:11,orig:"MEQ 13",num:"SA 13",sub:"Pediatric surgery",title:"Spot — a lethargic 1-month-old with abnormal stool",img:["os77c_m13"],kimg:["os77c_km13"],
 stem:`A 1-month-old girl has become lethargic, cries less and feeds poorly. You open her diaper and see the finding shown. Further tests show raised direct bilirubin.<br>1. Give the differential diagnosis.<br>2. By what age should the surgical procedure be performed?`,
 gray:"MEQ 13) เด็กหญิงวัย 1 เดือน ผู้ปกครองพามาพบแพทย์เนื่องจากเด็กซึมลง ไม่ค่อยร้อง ไม่ค่อยยอมกินนมแม่ ท่านเปิดแพมเพิร์สดูเห็นดังภาพ ต่อมาท่านส่งตรวจเพิ่มเติม พบ direct bilirubin ↑ 1) จง differential diagnosis (ไม่ได้บอกว่าจะเอากี่ข้อ) 2) Surgical procedure ควรทำภายในอายุเท่าไร",
 notes:"รูปในไฟล์: อุจจาระสีซีดเหลืองอ่อนในผ้าอ้อม · เฉลยในไฟล์ Key 77C: 1. Biliary atresia, choledochal cyst 2. 60 days · AC 77A MEQ 7 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("13.1 Differential diagnosis.",3,{tags:["spot"],key:KF+"Biliary atresia, choledochal cyst",ans:"Obstructive: <b>biliary atresia</b>, <b>choledochal cyst</b>, inspissated bile · Hepatocellular: <b>neonatal hepatitis</b> (infection: CMV, TORCH, UTI/sepsis), metabolic (galactosemia, hypothyroidism, α1-antitrypsin), Alagille syndrome, PFIC",exp:"อุจจาระสีซีด + direct hyperbilirubinemia = cholestasis → ต้องแยก biliary atresia ด่วน",rubric:"≥3 รวม BA",pts:[CR(P("Biliary atresia","biliary atresia")),P("Choledochal cyst","choledochal"),G("≥1 hepatocellular cause",1,P("Neonatal hepatitis/infection","hepatitis","cmv","torch","sepsis","uti"),P("Metabolic","galactos","hypothyroid","metabolic","antitrypsin"),P("Alagille","alagille"))]}),
  B("13.2 Age for surgery.",2,{tags:["spot"],key:KF+"60 days",ans:"<b>Kasai portoenterostomy</b> ภายใน <b>60 วัน (8 สัปดาห์)</b> ผลดีที่สุด",exp:"ผ่าตัดยิ่งช้าผลการระบายน้ำดียิ่งแย่ → liver transplantation",rubric:"ได้ = Kasai ≤60 วัน",pts:[P("Kasai","kasai","portoenterostomy"),CR(P("Within 60 days / 8 weeks","60","8 week","8 สัปดาห์","2 เดือน"))]})
 ),
 interp:"Neonatal cholestasis",
 summary:["Pale stool + direct bilirubin ↑","US (triangular cord), HIDA, intraop cholangiogram","Kasai ≤60 วัน"]}),

/* ===== MEQ 14 ===== */
SA({page:11,orig:"MEQ 14",num:"SA 14",sub:"Other spot",title:"Short answer — fever, headache and drowsiness 2 weeks after a scalp laceration",kimg:["os77c_km14"],
 stem:`A 30-year-old man is brought in drowsy. He woke this morning with headache, fever (since yesterday) and photophobia, and became drowsy soon after. Two weeks ago he fell off a motorcycle; the record shows a 5-cm laceration on the right side of the head with a bony step-off on palpation, which was managed conservatively with wound dressing only.<br>1. Give the differential diagnosis.<br>2. What is the most common pathogen?<br>3. What investigation would you request?`,
 gray:"MEQ 14) ชายวัย 30 ปี มาโรงพยาบาลด้วยซึม แรกเริ่มผู้ป่วยมีอาการปวดหัวเมื่อตอนเช้าหลังตื่นนอน ร่วมกับมีไข้และตาไม่สู้แสง อาการไข้เริ่มเป็นมาตั้งแต่เมื่อวาน ไม่ได้กินยาลดไข้ หลังตื่นได้สักพักผู้ป่วยเริ่มซึมลง ญาติจึงนำส่งโรงพยาบาล ญาติให้ประวัติว่าผู้ป่วยประสบอุบัติเหตุรถจักรยานยนต์ล้มเมื่อ 2 สัปดาห์ก่อน เวชระเบียนระบุว่าผู้ป่วยมีแผล 5 cm ที่ศีรษะข้างขวา แพทย์ตรวจร่างกายพบ bone stepping และตัดสินใจรักษาแบบ conservative treatment โดยการทำแผล 1) จงให้ differential diagnosis 2) จงบอก most common pathogen 3) ท่านจะส่ง investigation อะไรเพิ่มเติม",
 notes:"ไม่มีรูปในไฟล์ · เฉลยในไฟล์ Key 77C: 1. Epidural abscess, subdural empyema, brain abscess 2. Staphylococcus aureus 3. MRI brain",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — บทเรียน: compound depressed skull fracture ต้องผ่าตัด debride + elevate ไม่ใช่ทำแผลอย่างเดียว",
 parts:S(
  B("14.1 Differential diagnosis.",3,{tags:["spot"],key:KF+"Epidural abscess, subdural empyema, brain abscess",ans:"Post-traumatic intracranial infection จาก <b>compound depressed skull fracture</b>: <b>subdural empyema</b>, <b>epidural abscess</b>, <b>brain abscess</b>, <b>bacterial meningitis</b>, osteomyelitis of skull",exp:"Compound depressed skull fracture ต้อง debride และ elevate fragment เพื่อลดการติดเชื้อ",rubric:"≥3",pts:[G("≥3",3,P("Subdural empyema","subdural"),P("Epidural abscess","epidural"),P("Brain abscess","brain abscess","cerebral abscess"),P("Meningitis","mening"),P("Osteomyelitis","osteomyel"))]}),
  B("14.2 Most common pathogen.",1,{tags:["spot"],key:KF+"Staphylococcus aureus",ans:"<b>Staphylococcus aureus</b> (post-traumatic/post-operative)",exp:"Sinogenic/otogenic: Streptococcus (milleri group), anaerobes",rubric:"ได้",pts:[CR(P("Staphylococcus aureus","staph","aureus"))]}),
  B("14.3 Investigation.",2,{tags:["spot"],key:KF+"MRI brain",ans:"<b>Contrast-enhanced MRI brain</b> (ดีที่สุดสำหรับ empyema/abscess; หรือ CT with contrast ถ้าด่วน) · CBC, hemoculture · <b>ไม่ทำ LP</b> ก่อน imaging (mass effect)",exp:"MRI DWI ช่วยแยก empyema/abscess (restricted diffusion) จาก effusion",rubric:"ได้ = MRI/CT with contrast",pts:[CR(P("MRI/CT brain with contrast","mri","ct")),P("Blood culture","culture","hemoculture"),P("Avoid LP before imaging","lp","lumbar")]})
 ),
 interp:"Post-traumatic intracranial infection",
 summary:["Compound depressed skull fracture → debridement + elevation","S. aureus","MRI with contrast"]}),

/* ===== MEQ 15 ===== */
SA({page:12,orig:"MEQ 15",num:"SA 15",sub:"Imaging film",title:"Spot — a series of urographic radiographs",img:["os77c_m15"],kimg:["os77c_km15"],
 stem:`A series of radiographs is shown (in the exam there were 7 images photographed from a computer screen).<br>1. Name the investigation (abbreviation and full name).<br>2. Report the findings.<br>3. What is the diagnosis?`,
 gray:"MEQ 15) ของจริงให้มา 7 รูป ถ่ายมาจากคอม 1) จงบอกชื่อการตรวจ ทั้งชื่อย่อและชื่อเต็ม 2) จงรายงานผลการตรวจ 3) จงให้การวินิจฉัย",
 notes:"รูปในไฟล์: ภาพรังสีชุด 4 ภาพ (KUB และภาพหลังฉีดสีที่เห็นกรวยไตและกระเพาะปัสสาวะ) · เฉลยในไฟล์ Key 77C: 1. IVP (intravenous pyelography) 2. Blunt right renal calyx, filling defect at right renal calyx 3. Urolithiasis at right renal calyx with right kidney hydronephrosis · AC 77B MEQ 15 เป็น IVP เช่นกัน",
 opinion:"ยึดแนวคีย์ ความมั่นใจปานกลาง — รูปในไฟล์ไม่ชัดและผู้จดบอกว่าของจริงมี 7 รูป",
 parts:S(
  B("15.1 Name.",1,{tags:["spot"],key:KF+"IVP (intravenous pyelography)",ans:"<b>IVP — intravenous pyelography (urography)</b>: KUB ก่อนฉีด แล้วถ่ายเป็นระยะหลังฉีดสี",exp:"Contraindication ของ IVP: แพ้สารทึบรังสี, ไตวาย, ตั้งครรภ์",rubric:"ได้",pts:[CR(P("IVP / intravenous pyelography","ivp","intravenous pyelo","intravenous urog","ivu"))]}),
  B("15.2 Findings.",2,{tags:["spot"],key:KF+"Blunt right renal calyx, filling defect at right renal calyx",ans:"<b>Blunted calyces of the right kidney</b> (hydronephrosis) · <b>filling defect in the right collecting system</b> ± radiopaque density บน KUB · delayed excretion ข้างขวา · ไตซ้ายปกติ",exp:"Hydronephrosis เริ่มจาก calyx ทื่อ (blunted) → clubbing → ballooning",rubric:"ได้ = blunted calyx + filling defect",pts:[CR(P("Blunted calyces / hydronephrosis","blunt","hydroneph","calyx","calyc")),P("Filling defect","filling defect"),P("Right side","right","ขวา")]}),
  B("15.3 Diagnosis.",2,{tags:["spot"],key:KF+"Urolithiasis at right renal calyx with right kidney hydronephrosis",ans:"<b>Right renal (calyceal/pelvic) stone with right hydronephrosis</b> · DDx filling defect: urothelial tumor, blood clot",exp:"Stone &lt;5 mm ส่วนใหญ่หลุดเอง; stone ใน calyx ใหญ่ → ESWL/PCNL",rubric:"ได้ = right urolithiasis + hydronephrosis",pts:[CR(P("Urolithiasis","stone","lith","นิ่ว")),P("Hydronephrosis","hydroneph")]})
 ),
 interp:"IVP",
 summary:["Filling defect: stone, tumor, clot, sloughed papilla","CT KUB แทน IVP ในปัจจุบัน","Hydronephrosis + infection → decompress (PCN/DJ)"]}),

/* ===== OSCE 1 ===== */
Co({page:15,orig:"1",topic:"hx",sub:"Abdominal pain",ex:1,title:"History taking — a young woman with abdominal pain for 6 hours",
 stem:`A 25-year-old Thai woman has had abdominal pain for 6 hours.<br>1. Take a history from the simulated patient.<br>2. Give the single most likely diagnosis.`,
 gray:"OSCE 1) ผู้ป่วยหญิงไทย อายุ 25 ปีมาด้วยอาการปวดท้อง 6 ชั่วโมงก่อนมาโรงพยาบาล - จงซักประวัติ (ผู้ป่วยจำลอง) - จงให้การวินิจฉัยที่เป็นไปได้มากที่สุด 1 อย่าง",
 sp:"(Claude แต่ง) ปวดรอบสะดือตั้งแต่เช้า ต่อมาย้ายมาท้องน้อยขวา ปวดตลอดเวลา ขยับ/ไอแล้วปวดมาก · คลื่นไส้ อาเจียน 1 ครั้ง เบื่ออาหาร · ไข้ต่ำ ๆ · ถ่ายปกติ ปัสสาวะปกติ ไม่แสบขัด · ประจำเดือนมาปกติ ครั้งสุดท้าย 2 สัปดาห์ก่อน ไม่มีเลือดออกทางช่องคลอด ไม่มีตกขาวผิดปกติ มีแฟน ใช้ถุงยาง · ไม่มีโรคประจำตัว ไม่เคยผ่าตัด",
 flag:"บทผู้ป่วยจำลองและคำตอบการวินิจฉัย Claude แต่ง (ไฟล์ไม่ได้บอกรายละเอียด และ Key ว่าง)",
 notes:"ไฟล์ Key 77C ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — คำตอบขึ้นกับบทผู้ป่วยจำลอง; หญิงวัยเจริญพันธุ์ปวดท้องต้องถาม LMP และแยก ectopic pregnancy เสมอ",
 parts:S(
  B("1.1 History.",8,{tags:["hx"],ans:"แนะนำตัว · <b>Pain (SOCRATES)</b>: ตำแหน่งเริ่ม/ย้าย, ลักษณะ, ความรุนแรง, ร้าวไปไหน, สัมพันธ์การขยับ · คลื่นไส้อาเจียน เบื่ออาหาร ไข้ · ระบบทางเดินอาหาร (ถ่ายเหลว ท้องผูก ถ่ายเป็นเลือด) · ระบบปัสสาวะ (แสบขัด เลือดปน ปวดเอว) · <b>นรีเวช</b>: <b>LMP</b>, ประจำเดือนสม่ำเสมอ, เลือดออกผิดปกติ, ตกขาว, เพศสัมพันธ์/คุมกำเนิด, โอกาสตั้งครรภ์, เคยมีถุงน้ำรังไข่ · โรคประจำตัว ยา ผ่าตัด แพ้ยา",exp:"หญิงวัยเจริญพันธุ์ปวดท้องน้อย: DDx appendicitis, ectopic pregnancy, ovarian torsion/ruptured cyst, PID, UTI/stone",rubric:"แบ่งหมวด",
   pts:[H("Pain",40),CR(P("Onset/site/migration","onset","site","migrat","ย้าย","ตำแหน่ง")),P("Character/severity/radiation","character","severity","radiat","ร้าว","ลักษณะ"),P("Aggravating (movement/cough)","movement","cough","ขยับ","ไอ"),H("Associated",25),P("Nausea/vomiting/anorexia","nausea","vomit","anorexia","อาเจียน","เบื่ออาหาร"),P("Fever","fever","ไข้"),P("Bowel/urinary symptoms","bowel","urin","ปัสสาวะ","ถ่าย"),H("Gynecologic",25),CR(P("LMP / pregnancy possibility","lmp","ประจำเดือน","pregnan","ตั้งครรภ์")),P("Vaginal bleeding/discharge/sexual history","vaginal","discharge","ตกขาว","sexual","เพศสัมพันธ์","คุมกำเนิด"),H("Background",10),P("PMH/drugs/surgery/allergy","underlying","drug","surgery","allergy","โรคประจำตัว","แพ้")]}),
  B("1.2 Most likely diagnosis.",2,{tags:["hx"],ans:"(ตามบทข้างบน) <b>Acute appendicitis</b> — DDx ectopic pregnancy (ส่ง urine pregnancy test ทุกราย), ovarian torsion, PID",exp:"Ectopic pregnancy ต้องตัดออกก่อนเสมอในหญิงวัยเจริญพันธุ์ (UPT)",rubric:"ได้ = สอดคล้องกับประวัติ",pts:[CR(P("Acute appendicitis","appendicitis","ไส้ติ่ง"))]})
 ),
 interp:"Acute abdominal pain in a young woman",
 summary:["ถาม LMP ทุกราย","Urine pregnancy test","Appendicitis vs gynecologic causes"]}),

/* ===== OSCE 2 ===== */
Co({page:15,orig:"2",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — one simple interrupted and one vertical mattress suture",
 stem:`Assume draping and local anesthesia have been done. The examiner is observing.<br>1. Close the wound with 1 simple interrupted suture and 1 vertical mattress suture.`,
 gray:"OSCE 2) จงเย็บแผลโดย simple interrupted suture 1 stitch และ vertical mattress 1 stitch (ถือว่าได้เตรียมการปูผ้าและฉีดยาชามาแล้ว)",
 sp:"แผ่นซิลิโคน/หุ่นมีแผล · needle holder, toothed forceps, กรรไกร, ไหม nylon · ผู้คุมดู: จับเครื่องมือถูก, แทงเข็มตั้งฉาก, ระยะเท่ากัน, eversion, instrument tie square knot, ตัดไหม, ทิ้งเข็ม",
 notes:"ไฟล์ Key 77C ช่องนี้ว่าง · AC 77A, 77B มีสถานีเย็บคล้ายกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("2.1 Simple interrupted + vertical mattress.",10,{tags:["proc"],ans:"จับ needle holder (thenar grip/ring) และ forceps ถูกวิธี · <b>Simple interrupted</b>: แทงเข็มตั้งฉาก 90° ห่างขอบ ~3–5 mm ลึกถึง dermis ตามแนวโค้งเข็ม ออกอีกฝั่งระยะ/ความลึกเท่ากัน · <b>Vertical mattress</b>: far–far (~5–8 mm) แล้ว near–near (~1–2 mm) · <b>instrument tie</b> square knot (สองรอบแรก + ทับ 2–3 ปม) วางปมด้านข้าง · ขอบแผล <b>evert</b> ไม่รัดแน่นจนซีด · ตัดไหมเหลือ ~5 mm · เข็มลง sharps",exp:"Simple interrupted ใช้ทั่วไป; vertical mattress เพิ่ม eversion",rubric:"แบ่งตามขั้นตอน",
   pts:[H("Simple interrupted",40),P("Correct grip and needle loading","grip","load","จับ"),CR(P("Needle perpendicular, equal bites","perpendicular","90","equal","เท่ากัน","ตั้งฉาก")),H("Vertical mattress",35),CR(P("Far–far then near–near","far","near")),P("Eversion","evert"),H("Knot and finish",25),P("Square instrument tie, knot to the side","square","instrument tie","knot","ปม"),P("Cut length and sharps disposal","cut","sharps","ตัด")]})
 ),
 interp:"Basic suturing",
 summary:["90° entry, follow needle curve","Bite = depth","Approximate ไม่ strangulate"]}),

/* ===== OSCE 3 ===== */
Co({page:15,orig:"3",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a painless genital lesion in a 60-year-old man",img:["os77c_o3"],kimg:["os77c_ko3"],
 stem:`A 60-year-old Thai man has the painless genital lesion shown.<br>1. What is the diagnosis?<br>2. Outline the management plan.`,
 gray:"OSCE 3) ผู้ป่วยชายไทยอายุ 60 ปีมาด้วย lesion ดังภาพที่บริเวณอวัยวะเพศ ไม่มีอาการเจ็บ - Diagnosis - Management plan",
 notes:"รูปในไฟล์: ก้อนเนื้อขรุขระคล้ายดอกกะหล่ำที่องคชาตมีเนื้อตายสีเหลือง · เฉลยในไฟล์ Key 77C: 1. Squamous cell carcinoma of penis 2. Incisional biopsy for definitive diagnosis, total penectomy with margin 2 cm · AC 77A MEQ 3 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับการวินิจฉัยในไฟล์ ความมั่นใจสูง · การผ่าตัด: partial หรือ total penectomy ขึ้นกับขนาด/ตำแหน่ง (margin ปัจจุบันยอมรับ ~5–10 mm) และต้องประเมินต่อมน้ำเหลืองขาหนีบ",
 parts:S(
  B("3.1 Diagnosis.",2,{tags:["img"],key:KF+"Squamous cell carcinoma of penis",ans:"<b>Squamous cell carcinoma of the penis</b> (fungating, ulcerated)",exp:"ปัจจัยเสี่ยง: ไม่ขลิบ, phimosis, HPV 16/18, สูบบุหรี่, สุขอนามัยไม่ดี",rubric:"ได้",pts:[CR(P("Penile SCC","squamous","scc","penile cancer","carcinoma","มะเร็ง"))]}),
  B("3.2 Management plan.",4,{tags:["img"],key:KF+"Incisional biopsy for definitive diagnosis, total penectomy with margin 2 cm",ans:"<b>Biopsy</b> (incisional) ยืนยัน · ตรวจ<b>ต่อมน้ำเหลืองขาหนีบ</b> + staging (MRI penis, CT) · <b>Penectomy</b>: partial (เหลือความยาวพอยืนปัสสาวะ) หรือ <b>total penectomy + perineal urethrostomy</b> สำหรับก้อนใหญ่/proximal · <b>inguinal lymph node dissection</b> หรือ dynamic sentinel node biopsy ตามความเสี่ยง · chemo/RT ในโรคระยะลุกลาม",exp:"ต่อมน้ำเหลืองโตตอนแรก ~50% เป็นจากการอักเสบ",rubric:"ได้ = biopsy + penectomy + nodal management",pts:[CR(P("Biopsy","biopsy")),CR(P("Partial/total penectomy","penectomy")),P("Inguinal node assessment/dissection","inguinal","lymph","node")]})
 ),
 interp:"Penile cancer",
 summary:["SCC &gt;95%","Biopsy → penectomy","Inguinal LN = prognosis สำคัญที่สุด"]}),

/* ===== OSCE 4 ===== */
Co({page:15,orig:"4",topic:"inst",sub:"Tube/Catheter",title:"Device — a urinary catheter placed at the station",img:["os77c_o4"],kimg:["os77c_ko4"],
 stem:`The device shown (a real one is placed at the station).<br>1. What is it and what is its size?<br>2. Explain how it is used.<br>3. Give an example of a patient with an indication for it.`,
 gray:"OSCE 4) (มีของจริงวางไว้) 1. อุปกรณ์ในภาพคืออะไร มีขนาดเท่าไหร่ 2. จงบอกแนวทางวิธีการใช้อุปกรณ์นี้ 3. จงยกตัวอย่างผู้ป่วยที่มี indication ในการใช้อุปกรณ์นี้",
 notes:"รูปในไฟล์: สายสวนปัสสาวะ 2 ทางสีเหลือง · เฉลยในไฟล์ Key 77C: 1. Foley catheter, 16 French 2. (ว่าง) 3. Acute urinary retention",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง (ขนาดยึดตามคีย์ — ดูตัวเลขบนข้อต่อของจริง)",
 parts:S(
  B("4.1 Name and size.",2,{tags:["inst"],key:KF+"Foley catheter, 16 French",ans:"<b>Two-way Foley (indwelling urethral) catheter, 16 Fr</b>",exp:"ผู้ใหญ่ทั่วไปใช้ 14–16 Fr",rubric:"ได้",pts:[CR(P("Foley catheter","foley")),P("16 Fr","16")]}),
  B("4.2 How to use.",4,{tags:["inst"],key:"(ไฟล์ Key 77C ช่องนี้ว่าง)",ans:"อธิบาย/ขออนุญาต · ทดสอบ balloon · ทำความสะอาด meatus แบบ aseptic · หล่อลื่น (lidocaine gel) · ผู้ชาย: จับองคชาตตั้งฉากกับลำตัว ใส่จนสุดถึงข้อต่อ (Y) และเห็นปัสสาวะไหล · <b>ใส่น้ำกลั่น 10 mL ใน balloon</b> (ห้ามใช้ NSS/ลม) · ดึงกลับเล็กน้อย · ต่อถุงระบบปิด ตรึงสายที่ต้นขา/หน้าท้อง · ดึง foreskin กลับ (กัน paraphimosis) · บันทึกปริมาณปัสสาวะ",exp:"Inflate balloon ก่อนเห็นปัสสาวะ → เสี่ยง urethral injury",rubric:"ได้ = aseptic + insert to hilt + balloon water + closed drainage",pts:[CR(P("Aseptic technique and lubricant","aseptic","sterile","lubric","gel")),CR(P("Insert to the hilt until urine flows before inflating","urine","hilt","ไหล","สุด")),P("Inflate balloon with sterile water 10 mL","water","10","balloon","inflate"),P("Closed drainage + secure + reduce foreskin","closed","drainage","secure","foreskin","ตรึง")]}),
  B("4.3 Example indication.",2,{tags:["inst"],key:KF+"Acute urinary retention",ans:"<b>Acute urinary retention</b> (เช่น BPH) · วัด urine output ใน critically ill/shock · perioperative (ผ่าตัดนาน) · immobilized/neurogenic bladder",exp:"ข้อห้าม: สงสัย urethral injury (blood at meatus, high-riding prostate)",rubric:"ได้",pts:[CR(P("Acute urinary retention / urine output monitoring","retention","output","bph","monitor"))]})
 ),
 interp:"Urethral catheterization",
 summary:["Inflate หลังเห็นปัสสาวะ","Sterile water ใน balloon","Contraindication: urethral injury"]}),

/* ===== OSCE 5 ===== */
Co({page:16,orig:"5",topic:"inst",sub:"Tube/Catheter",title:"Device — a catheter inserted in the arm",img:["os77c_o5"],kimg:["os77c_ko5"],
 stem:`The device shown is inserted in the arm.<br>1. What is it called?<br>2. Give 3 indications.<br>3. Give 2 important complications.`,
 gray:"OSCE 5) 1. อุปกรณ์ในภาพนี้ชื่ออะไร 2. จงบอก indication ในการใช้อุปกรณ์นี้มา 3 ข้อ 3. จงบอก complication ที่สำคัญ 2 อย่างของการใช้อุปกรณ์นี้",
 notes:"รูปในไฟล์: สายสวนหลอดเลือดที่ต้นแขน มีหลาย lumen · เฉลยในไฟล์ Key 77C: 1. PICC line (peripheral inserted central catheter) 2. Parenteral nutrition, chemotherapy, multiple blood sampling 3. Catheter related bloodstream infection, thrombosis",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("5.1 Name.",2,{tags:["inst"],key:KF+"PICC line (peripheral inserted central catheter)",ans:"<b>PICC — peripherally inserted central catheter</b> (ใส่ทาง basilic/brachial vein ปลายอยู่ cavoatrial junction)",exp:"ตรวจตำแหน่งปลายสายด้วย CXR ก่อนใช้งาน",rubric:"ได้",pts:[CR(P("PICC","picc","peripherally inserted"))]}),
  B("5.2 Three indications.",3,{tags:["inst"],key:KF+"Parenteral nutrition, chemotherapy, multiple blood sampling",ans:"<b>Total parenteral nutrition</b> · <b>chemotherapy</b>/vesicant drugs · <b>long-term IV antibiotics</b> (สัปดาห์–เดือน) · frequent blood sampling · ผู้ป่วยหาเส้นยาก",exp:"PICC เหมาะการใช้ระยะกลาง (สัปดาห์–หลายเดือน)",rubric:"≥3",pts:[G("≥3",3,P("Parenteral nutrition","parenteral","tpn","pn"),P("Chemotherapy","chemo"),P("Long-term antibiotics","antibiotic"),P("Blood sampling","blood sampl","เจาะเลือด"),P("Difficult access / vesicant","difficult","vesicant","inotrope"))]}),
  B("5.3 Two complications.",2,{tags:["inst"],key:KF+"Catheter related bloodstream infection, thrombosis",ans:"<b>Catheter-related bloodstream infection</b> · <b>upper-extremity DVT/catheter thrombosis</b> · occlusion, malposition, phlebitis",exp:"ป้องกัน CRBSI: maximal sterile barrier, chlorhexidine, ถอดเมื่อไม่จำเป็น",rubric:"≥2",pts:[G("≥2",2,P("CRBSI","infection","crbsi","clabsi","ติดเชื้อ"),P("Thrombosis","thromb","dvt"),P("Occlusion/malposition/phlebitis","occlu","malposit","phlebitis"))]})
 ),
 interp:"PICC",
 summary:["PICC = central line ทางแขน","ใช้ได้สัปดาห์–เดือน","CRBSI, DVT"]}),

/* ===== OSCE 6 ===== */
Co({page:16,orig:"6",topic:"img",sub:"CXR",title:"Radiograph — sudden epigastric pain with a rigid abdomen",img:["os77c_o6"],kimg:["os77c_ko6"],
 stem:`A previously healthy 50-year-old Thai man has had sudden epigastric pain for 6 hours. The radiograph is shown. Examination: involuntary guarding, board-like rigidity, generalized tenderness and tachycardia.<br>1. Ask 2 history questions that help the diagnosis (no simulated patient).<br>2. What is the single most likely diagnosis?`,
 gray:"OSCE 6) ผู้ป่วยชายไทยอายุ 50 ปี ก่อนหน้านี้แข็งแรงดี ปวดลิ้นปี่ฉับพลันมา 6 ชั่วโมงก่อนมาโรงพยาบาล ส่ง plain film เห็นดังภาพ ตรวจร่างกายพบ involuntary guarding, board-like rigidity of abdomen, generalized tenderness, tachycardic 1. จงซักประวัติ 2 คำถามที่ช่วยในการวินิจฉัย (ไม่มีผู้ป่วยจำลอง) 2. ให้วินิจฉัยโรคที่เป็นไปได้มากที่สุด 1 โรค",
 notes:"รูปในไฟล์: CXR เห็นลมใต้กะบังลม · เฉลยในไฟล์ Key 77C: 1. กินยาแก้ปวด ยาหม้อ ยาต้มอยู่ไหม, เคยปวดแสบกลางท้องเป็น ๆ หาย ๆ ตอนหลังอาหารไหม 2. Peptic ulcer perforation · AC 77B OSCE 12 ถามคล้ายกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("6.1 Two history questions.",2,{tags:["img"],key:KF+"กินยาแก้ปวด ยาหม้อ ยาต้มอยู่ไหม, เคยปวดแสบกลางท้องเป็น ๆ หาย ๆ ตอนหลังอาหารไหม",ans:"(1) <b>กินยาแก้ปวด NSAID/สเตียรอยด์/ยาหม้อ ยาลูกกลอน</b>หรือไม่ (2) <b>เคยปวดแสบลิ้นปี่เป็น ๆ หาย ๆ สัมพันธ์มื้ออาหาร</b> (dyspepsia/PU เดิม) · อื่น: สุรา บุหรี่, ถ่ายดำ",exp:"NSAID + H. pylori เป็นปัจจัยเสี่ยงหลักของ peptic ulcer",rubric:"ได้ = 2 คำถามตรงประเด็น",pts:[CR(P("NSAID/steroid/herbal","nsaid","ยาแก้ปวด","ยาหม้อ","steroid","ลูกกลอน","ยาต้ม")),CR(P("Previous dyspepsia","dyspeps","แสบ","ลิ้นปี่","ulcer"))]}),
  B("6.2 Most likely diagnosis.",2,{tags:["img"],key:KF+"Peptic ulcer perforation",ans:"<b>Perforated peptic ulcer</b> with generalized peritonitis (pneumoperitoneum)",exp:"รักษา: resuscitation, NG, IV PPI, antibiotics → <b>Graham omental patch</b> (เปิด/ส่องกล้อง) + H. pylori eradication",rubric:"ได้",pts:[CR(P("Perforated peptic ulcer","perforat","ulcer","pu"))]})
 ),
 interp:"Perforated peptic ulcer",
 summary:["Free air ~75%","Board-like rigidity","Graham patch + eradicate H. pylori"]}),

/* ===== OSCE 7 ===== */
Co({page:17,orig:"7",topic:"proc",sub:"Sterile gloving/scrub",ex:1,proc:1,title:"Procedure — hand rub, open gloving and incision planning for a lipoma",img:["os77c_o7"],
 stem:`This station has 3 tasks; the examiner is observing.<br>1. Demonstrate alcohol hand rub according to the WHO standard.<br>2. Put on sterile gloves by the open technique.<br>3. A patient has a lipoma of the forearm (the outline is drawn on the draped model arm). Draw your incision plan with a marker.`,
 gray:"OSCE 7) ข้อนี้มี 3 ข้อย่อย 1. จงแสดงการ alcohol rub ตาม Standard WHO 2. จงแสดงการใส่ sterile glove by open technique 3. ผู้ป่วยมาด้วย lipoma ที่แขน (น่าจะ forearm?) จงขีด incision plan เพื่อจะนำ lipoma ออก (ปูผ้ากว้าง ๆ + วาดเส้นประขอบก้อน lipoma ไว้ให้) *เอา marker เขียนตรงแขนหุ่นเลยว่าจะทำไง",
 sp:"Alcohol gel · ถุงมือ sterile เบอร์ต่าง ๆ · แขนหุ่นปูผ้า มีเส้นประวาดขอบก้อน lipoma · marker · ผู้คุมดู: 6 ขั้นตอน WHO, ไม่แตะด้านนอกถุงมือด้วยมือเปล่า, แนวแผลเหมาะสม",
 notes:"รูปในไฟล์: ก้อนนูนที่แขน · ไฟล์ Key 77C ช่องนี้ว่าง · AC 77A OSCE 5 มีการใส่ถุงมือเช่นกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูงสำหรับข้อย่อย 1–2; ข้อย่อย 3 แนวแผลยอมรับได้หลายแบบถ้าให้เหตุผลถูก",
 parts:S(
  B("7.1 WHO alcohol hand rub.",3,{tags:["proc"],ans:"เจลเต็มอุ้งมือ · ฝ่ามือถูฝ่ามือ · ฝ่ามือถูหลังมือนิ้วสอดสลับ · ฝ่ามือถูฝ่ามือนิ้วสอด · หลังนิ้วถูฝ่ามือ (นิ้วล็อก) · ถูรอบนิ้วโป้ง · ปลายนิ้วหมุนในฝ่ามือ · <b>20–30 วินาที</b> จนแห้ง",exp:"Alcohol rub ใช้เมื่อมือไม่เปื้อนชัด; surgical hand rub ใช้นานกว่าและถึงข้อศอก",rubric:"ครบ 6 ขั้น",pts:[CR(P("All 6 steps","six","6 ขั้น","ขั้นตอน","step")),P("20–30 s until dry","20.?30","second","วินาที","dry","แห้ง")]}),
  B("7.2 Open-technique gloving.",3,{tags:["proc"],ans:"เปิดซองถุงมือโดยไม่ปนเปื้อน · มือที่ไม่ถนัดจับ<b>ด้านในของ cuff ที่พับไว้</b> ใส่มือถนัด · มือที่ใส่ถุงมือแล้ว<b>สอดนิ้วใต้ cuff (ผิวด้านนอก)</b> ของถุงมืออีกข้างแล้วใส่ · คลี่ cuff โดยแตะเฉพาะด้านนอก · มืออยู่เหนือเอว อยู่ในแนวสายตา",exp:"หลัก: sterile แตะ sterile, ผิวหนังแตะได้แค่ด้านในถุงมือ",rubric:"ได้ = หลัก skin-to-inside, glove-to-outside",pts:[CR(P("Bare hand touches only inside of cuff","inside","ด้านใน","cuff")),CR(P("Gloved hand touches only outside (under cuff)","outside","ด้านนอก","under the cuff","ใต้")),P("Hands above waist, no contamination","waist","เอว","contamin")]}),
  B("7.3 Incision plan for the lipoma.",4,{tags:["proc"],ans:"<b>Linear incision ผ่านกึ่งกลางก้อน</b> ยาวประมาณเส้นผ่านศูนย์กลางก้อน (หรือสั้นกว่าเล็กน้อยแล้วบีบออก) · แนวตาม <b>relaxed skin tension lines</b> หรือ<b>แนวยาวของแขน</b> (ขนานกับ neurovascular structure และขยายแผลได้) — ระบุเหตุผล · ถ้าผิวหนังยืดมาก/ก้อนใหญ่ → elliptical excision (ยาว:กว้าง 3:1, มุม 30°) · ระบุ margin รอบก้อน (เลาะตาม capsule)",exp:"ทุกแผลบนแขนขาให้คิดถึงทางขยายแผลและโครงสร้างใต้ผิวหนัง",rubric:"ได้ = linear incision over mass + เหตุผลของแนว",pts:[CR(P("Linear incision over the mass","linear","เส้นตรง","over","กึ่งกลาง")),P("Length about the size of the mass","length","ยาว","diameter"),CR(P("Orientation along RSTL or long axis with reason","rstl","langer","tension","long axis","แนวยาว")),P("Ellipse if redundant skin","ellip")]})
 ),
 interp:"Asepsis and incision planning",
 summary:["Open gloving: skin→inside, glove→outside","Lipoma: enucleate ทั้ง capsule","แนวแผล: RSTL / แนวยาวของแขนขา"]}),

/* ===== OSCE 8 ===== */
Co({page:17,orig:"8",topic:"img",sub:"Endoscopy",title:"Upper endoscopy and a rapid test",img:["os77c_o8a","os77c_o8b"],kimg:["os77c_ko8"],
 stem:`A procedure is illustrated, followed by a test performed on a tissue sample taken during it.<br>1. What is the procedure and which organs does it examine?<br>2. Give 2 indications.<br>3. What does this test detect?<br>4. Interpret the result and give the next treatment.`,
 gray:"OSCE 8) 1. Procedure ในรูปนี้คืออะไร และดูอวัยวะใดบ้าง 2. จงบอก Indication ในการทำ procedure นี้ 2 ข้อ 3. Test นี้ทำเพื่อตรวจหาสารใด 4. แปลผลว่าอย่างไร และแนวทางการรักษาต่อ",
 notes:"รูปในไฟล์: (1) ภาพการส่องกล้องทางเดินอาหารส่วนบน (2) ชุดทดสอบเปลี่ยนเป็นสีชมพูแดง (มีแถบสีบอกผลบวก/ลบ) · เฉลยในไฟล์ Key 77C: 1. Esophagogastroduodenoscopy 2. Upper GI bleeding, dysphagia 3. Urease 4. แปลว่ามี H. pylori infection, รักษาด้วย triple therapy (amoxicillin, clarithromycin, PPI)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("8.1 Procedure and organs.",2,{tags:["img"],key:KF+"Esophagogastroduodenoscopy",ans:"<b>Esophagogastroduodenoscopy (EGD)</b> — <b>esophagus, stomach, duodenum</b> (ถึง D2)",exp:"EGD ส่งกล้องผ่านปากถึง duodenum ส่วนที่ 2",rubric:"ได้",pts:[CR(P("EGD","egd","esophagogastroduodenoscop","upper endoscop","gastroscop")),P("Esophagus, stomach, duodenum","esophag","stomach","duoden")]}),
  B("8.2 Two indications.",2,{tags:["img"],key:KF+"Upper GI bleeding, dysphagia",ans:"<b>Upper GI bleeding</b> · <b>dysphagia</b> · dyspepsia with alarm features (อายุ &gt;50–60, น้ำหนักลด, ซีด, อาเจียน) · surveillance (Barrett, varices) · ตัดชิ้นเนื้อ",exp:"Alarm features: อายุมาก, น้ำหนักลด, ซีด, กลืนลำบาก, อาเจียนต่อเนื่อง, GI bleeding",rubric:"≥2",pts:[G("≥2",2,P("UGIB","bleed","hematemesis","melena","เลือด"),P("Dysphagia","dysphagia","กลืน"),P("Dyspepsia with alarm features","dyspeps","alarm"),P("Surveillance/varices","surveil","varice","barrett"))]}),
  B("8.3 Substance detected.",2,{tags:["img"],key:KF+"Urease",ans:"<b>Urease</b> (rapid urease test/CLO test) — ยูเรียถูกย่อยเป็นแอมโมเนีย pH สูงขึ้น ตัวบ่งชี้เปลี่ยนเหลือง → ชมพูแดง",exp:"H. pylori สร้าง urease ย่อย urea → ammonia เพื่อทนกรด",rubric:"ได้",pts:[CR(P("Urease","urease"))]}),
  B("8.4 Interpretation and treatment.",3,{tags:["img"],key:KF+"แปลว่ามี H. pylori infection, รักษาด้วย triple therapy (amoxicillin, clarithromycin, PPI)",ans:"<b>Positive — Helicobacter pylori infection</b> · eradication: <b>PPI + amoxicillin + clarithromycin</b> (หรือ metronidazole) 14 วัน, หรือ bismuth quadruple therapy · ยืนยันการกำจัดด้วย urea breath test ≥4 สัปดาห์หลังยา (หยุด PPI 2 สัปดาห์)",exp:"PPI/antibiotics ล่าสุดทำให้ผลลบลวง",rubric:"ได้ = H. pylori + eradication",pts:[CR(P("H. pylori positive","pylori","positive","บวก")),CR(P("Eradication regimen","ppi","amoxicillin","clarithromycin","triple","quadruple","bismuth")),P("Test of cure","urea breath","test of cure","ยืนยัน")]})
 ),
 interp:"EGD and rapid urease test",
 summary:["CLO: urease → NH₃ → pink","Eradicate H. pylori","Test of cure"]}),

/* ===== OSCE 9 ===== */
Co({page:18,orig:"9",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — rectal bleeding with a lump that reduces spontaneously",img:["os77c_o9"],kimg:["os77c_ko9"],
 stem:`A 70-year-old Thai man has passed blood with his stool for 1 month. He feels a lump coming out on defecation that goes back by itself. A rectal examination model and an assistant who positions it are provided.<br>1. Perform a digital rectal examination (you may ask for further equipment).<br>2. What is the diagnosis?`,
 gray:"OSCE 9) ผู้ป่วยชายไทยอายุ 70 ปีมาด้วยอาการถ่ายเป็นเลือดมา 1 เดือน รู้สึกว่าเมื่อถ่ายอุจจาระมีก้อนออกมา แต่กลับไปเองได้ 1. จงแสดงการตรวจ Digital rectal examination (ตรวจกับหุ่นแต่มีผู้ช่วยคอยจัดท่าหุ่นให้) 2. จงให้การวินิจฉัย *แสดง DRE แล้วขอ Proctoscope ได้ อ.จะโชว์ประมาณนี้ให้ แต่ต้องขอ procto เองก่อน ถึงจะโชว์รูป",
 sp:"หุ่น PR + ผู้ช่วยจัดท่า · DRE: ไม่มีก้อนแข็ง ต่อมลูกหมากปกติ มีเลือดสดติดถุงมือ · เมื่อ<b>ขอ proctoscope</b> อาจารย์จึงให้ดูรูป: ริดสีดวงภายในสีแดงเหนือ dentate line",
 notes:"รูปในไฟล์: ภาพผ่าน proctoscope เห็นริดสีดวงภายในสีแดงมีเส้นชี้ · เฉลยในไฟล์ Key 77C: 1. (ว่าง) 2. Internal hemorrhoid grade II · AC 77B OSCE 3 และ AC 77D OSCE 4 คล้ายกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — อายุ 70 + ถ่ายเป็นเลือดต้อง colonoscopy เพิ่ม",
 parts:S(
  B("9.1 DRE and further examination.",6,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต chaperone · ท่า <b>left lateral (Sims)</b> เข่าชิดอก · ใส่ถุงมือ หล่อลื่น · <b>inspection</b> perianal + ให้เบ่ง · กดนิ้วชี้ที่ขอบทวารให้คลายแล้วสอด · ประเมิน <b>sphincter tone</b> · กวาดนิ้วรอบ 360° หาก้อน · ต่อมลูกหมาก (ขนาด ผิว ร่องกลาง) · ให้เบ่ง/ขมิบ · ดึงนิ้วออกดู<b>เลือด/มูก/อุจจาระบนถุงมือ</b> · เช็ดทำความสะอาด · <b>ขอ proctoscope</b>",exp:"ริดสีดวงภายในคลำด้วย DRE ไม่ได้ (นุ่ม ยุบ) ต้องใช้ proctoscope",rubric:"แบ่งตามขั้นตอน",pts:[P("Consent/chaperone","consent","chaperone","ขออนุญาต"),P("Left lateral position","left lateral","sims","ตะแคง"),CR(P("Inspection incl. straining","inspect","ดู","strain","เบ่ง")),P("Sphincter tone","tone","sphincter"),CR(P("360° sweep and prostate","360","sweep","prostate","รอบ")),P("Inspect glove","glove","ถุงมือ"),CR(P("Request proctoscope","proctoscop","anoscop"))]}),
  B("9.2 Diagnosis.",2,{tags:["pe"],key:KF+"Internal hemorrhoid grade II",ans:"<b>Internal hemorrhoids grade II</b> (prolapse on straining, reduces spontaneously)",exp:"Grade I ไม่ยื่น · II ยื่นกลับเอง · III ต้องดันกลับ · IV ดันไม่กลับ · รักษา grade II: fiber + rubber band ligation",rubric:"ได้ = internal hemorrhoid grade II",pts:[CR(P("Internal hemorrhoid","hemorrhoid","ริดสีดวง")),CR(P("Grade II","grade ii","grade 2","ii"))]})
 ),
 interp:"Hemorrhoid grading",
 summary:["Goligher I–IV","Grade II: RBL","อายุมาก + bleeding → colonoscopy"]}),

/* ===== OSCE 10 ===== */
Co({page:19,orig:"10",topic:"inst",sub:"Surgical instrument",title:"Devices — name and two uses (a–c)",img:["os77c_o10"],kimg:["os77c_ko10"],
 stem:`Three devices (a–c) are shown.<br>1. Name each and give 2 uses.`,
 gray:"OSCE 10) จงบอกว่าอุปกรณ์ดังกล่าวคืออะไร และบอกประโยชน์การใช้งาน 2 ข้อ (เป็นรูป)",
 notes:"รูปในไฟล์: a ขวดสุญญากาศพร้อมสาย b แผ่นตาข่ายสังเคราะห์ c แท่งโลหะปลายแหลมมีวาล์ว · เฉลยในไฟล์ Key 77C: 1. Redivac drain, drainage in mastectomy and thyroidectomy 2. Prolene mesh, hernioplasty and fascial defect repair 3. Trocar, port for instrument in laparoscopic surgery and sealing effect to allow pneumoperitoneum",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("10.1 Name and 2 uses (a–c).",9,{tags:["inst"],key:KF+"a Redivac drain — drainage in mastectomy and thyroidectomy · b Prolene mesh — hernioplasty and fascial defect repair · c Trocar — port for laparoscopic instruments, sealing to maintain pneumoperitoneum",
   ans:"a <b>Redivac (closed suction) drain</b> — ระบายเลือด/seroma หลัง <b>mastectomy/axillary dissection</b>, <b>thyroidectomy</b>, flap · b <b>Polypropylene (Prolene) mesh</b> — <b>inguinal hernioplasty (Lichtenstein)</b>, <b>incisional/ventral hernia repair</b> · c <b>Laparoscopic trocar (port)</b> — เป็นทางใส่กล้อง/เครื่องมือ, มีวาล์วกันลมรั่ว คง <b>pneumoperitoneum</b>",exp:"Redivac = high-vacuum ขวดแก้ว/พลาสติก ดูสุญญากาศจาก indicator",rubric:"ชื่อ 1 + การใช้ 2 ต่อชิ้น",
   pts:[CR(P("a Redivac / closed suction drain","redivac","redon","closed suction","vacuum")),P("a uses: mastectomy/thyroidectomy","mastectomy","thyroid","axill","flap"),CR(P("b Prolene mesh","mesh","polypropylene","prolene")),P("b uses: hernia repair","hernia","hernioplasty","lichtenstein","fascia"),CR(P("c Trocar/port","trocar","port")),P("c uses: laparoscopy, maintain pneumoperitoneum","laparoscop","pneumoperitoneum","seal","กล้อง")]})
 ),
 interp:"Surgical devices",
 summary:["Drain: passive vs active","Mesh: tension-free repair","Trocar: Hasson (open) vs Veress"]}),

/* ===== OSCE 11 ===== */
Co({page:20,orig:"11",topic:"inst",sub:"Surgical instrument",title:"Instruments — name and one use (a–e)",img:["os77c_o11"],kimg:["os77c_ko11"],
 stem:`Five instruments (a–e) are placed at the station.<br>1. Name each and give one use.`,
 gray:"OSCE 11) จงบอกชื่อของอุปกรณ์ดังกล่าว พร้อมประโยชน์การใช้งาน 1 อย่าง (มีของจริงตั้งไว้ให้)",
 notes:"รูปในไฟล์: a ท่อยางแบนสีขาว b รีแทรกเตอร์โค้งรูปตัว S ใบกว้าง c ท่อพลาสติกมีขีดบอกระยะ d คีมจับปลายมีฟันเล็ก e กรรไกรปลายโค้ง · เฉลยในไฟล์ Key 77C: 1. Penrose drain, drain abscess 2. Deaver retractor, retract deep visceral organ 3. Chest tube, release pneumothorax 4. Allis tissue forceps, hold thick fascia/breast 5. Curved Mayo scissors, cut dense tissue",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("11.1 Name and one use (a–e).",10,{tags:["inst"],key:KF+"a Penrose drain, drain abscess · b Deaver retractor, retract deep visceral organ · c Chest tube, release pneumothorax · d Allis tissue forceps, hold thick fascia/breast · e Curved Mayo scissors, cut dense tissue",
   ans:"a <b>Penrose drain</b> — passive drain (abscess cavity) · b <b>Deaver retractor</b> — retract deep abdominal organs (liver, bowel) · c <b>Chest tube (ICD)</b> — drain pneumothorax/hemothorax · d <b>Allis tissue forceps</b> — grasp tough tissue/fascia, breast tissue, bowel edge for anastomosis · e <b>Curved Mayo scissors</b> — cut thick/dense tissue and fascia",exp:"Metzenbaum = ตัด/เลาะเนื้อเยื่อบอบบาง; Mayo = เนื้อเยื่อหนา; straight Mayo = ตัดไหม",rubric:"ชื่อ 1 + การใช้ 1 ต่อชิ้น",
   pts:[P("a Penrose","penrose"),P("b Deaver","deaver"),P("c Chest tube","chest tube","icd","intercostal"),P("d Allis","allis"),P("e Curved Mayo scissors","mayo"),G("Uses (≥4)",4,P("drain abscess","abscess","drain"),P("retract deep organs","retract","deep"),P("pneumothorax","pneumothorax","hemothorax"),P("grasp tough tissue/fascia","fascia","grasp","hold","breast"),P("cut dense tissue","cut","dense","thick"))]})
 ),
 interp:"Instruments",
 summary:["Deaver vs Richardson vs Balfour","Allis มีฟัน; Babcock ไม่มีฟัน","Mayo vs Metzenbaum"]}),

/* ===== OSCE (ไหม) ===== */
Co({page:21,orig:"ไหม",topic:"suture",sub:"Suture material",title:"Suture station — choosing sutures for each step of an operation",
 stem:`Pictures show the steps of suturing tissues during an operation (e.g. a blood vessel and the rectus sheath). Real sutures are placed at the station.<br>1. For a vascular anastomosis: choose the suture, give its properties and the technique.<br>2. For closure of the rectus sheath (fascia): choose the suture, give its properties and the technique.<br>3. For skin closure: choose the suture, give its properties and the technique.`,
 gray:"ข้อไหมตรงแอค มีรูป step เย็บ tissue มาให้ ex. Vessel, sheath ถามว่าเย็บใช้ไหมอะไร คุณสมบัติไหม แล้วจับคู่กับไหมจริงที่วางอยู่ด้วย แล้วก็ถามเทคนิคการเย็บว่าใช้วิธีอะไร",
 flag:NOIMG+" · ไฟล์บอกแค่ตัวอย่าง vessel และ sheath — Claude แต่งข้อย่อยให้ครบ (เพิ่ม skin) และไม่มีเลขข้อในไฟล์",
 imgAlt:"รูปขั้นตอนการผ่าตัด: (1) การต่อหลอดเลือดแดงปลายชนปลาย (2) การเย็บปิด rectus sheath แนวกลางท้อง (3) การเย็บปิดผิวหนัง · มีไหมของจริงวางให้จับคู่",
 notes:"สถานีนี้ไม่มีเลขข้อในไฟล์ และไม่มีเฉลยในไฟล์ Key 77C · ผู้จดบอกว่าตรงกับ AC เก่า",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("1 Vascular anastomosis.",3,{tags:["suture"],ans:"<b>Prolene (polypropylene) 5-0 to 7-0</b> — synthetic, <b>monofilament, non-absorbable</b>, ลื่นผ่านผนังหลอดเลือดดี ไม่ก่อ thrombus · double-armed · เทคนิค <b>continuous (running) over-and-over, everting</b> (intima ชนกัน)",exp:"Monofilament ลด bacterial harbor และไม่ทำลาย intima",rubric:"ได้ = Prolene monofilament non-absorbable + continuous",pts:[CR(P("Prolene / polypropylene","prolene","polypropylene")),P("Monofilament non-absorbable","monofilament","non.?absorb"),P("Continuous everting","continuous","running","evert")]}),
  B("2 Rectus sheath (fascia) closure.",3,{tags:["suture"],ans:"<b>Looped PDS (polydioxanone) 1</b> — synthetic, monofilament, <b>slowly absorbable</b> (หรือ looped nylon/Prolene — non-absorbable) · เทคนิค <b>continuous mass closure, small bites</b> (5 mm × 5 mm) suture length : wound length ≥4:1",exp:"Small-bite technique ลด incisional hernia (STITCH trial)",rubric:"ได้ = looped PDS/nylon + continuous small bites",pts:[CR(P("Looped PDS or nylon/Prolene","pds","polydioxanone","loop","nylon","prolene")),P("Slowly absorbable/non-absorbable monofilament","slow","absorb","monofilament"),CR(P("Continuous mass closure small bites 4:1","continuous","mass","small bite","4:1"))]}),
  B("3 Skin.",2,{tags:["suture"],ans:"<b>Nylon (polyamide) 3-0/4-0</b> — monofilament non-absorbable · <b>simple interrupted</b> (หรือ subcuticular ด้วย Monocryl absorbable)",exp:"ใบหน้าตัดไหม 5 วัน, หนังศีรษะ/ลำตัว 7–10 วัน, ขาและบริเวณข้อพับ 10–14 วัน",rubric:"ได้",pts:[CR(P("Nylon / Monocryl","nylon","polyamide","monocryl","poliglecaprone")),P("Simple interrupted / subcuticular","interrupted","subcuticular"),]})
 ),
 interp:"Suture selection by tissue",
 summary:["Vessel: Prolene continuous","Fascia: looped PDS small bites","Skin: nylon interrupted / subcuticular Monocryl"]})
);
})();

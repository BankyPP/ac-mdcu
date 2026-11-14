(function(){
/* Internal Medicine OSCE ข้อสอบเก่า AC — สถานี Skin lesion ปี 71–74 จากไฟล์ "Skin_OSCE_71-77" (ผู้ใช้ส่ง 14 พ.ย. 2026; ตาราง Dx / CC / Description / Treatment / Investigation 2 หน้า + รูป)
   ใส่เฉพาะแถวที่ยังไม่มีในคลัง: 71 (2 แถว ไม่ระบุ Ro → RoX), 72A–D, 73A, 73B, 73D, 74A, 74C · ข้าม "ไม่มีคนจดออกมา" (73C, 74D, 75A, 75C, 76B, 76D) และ 77D (ไม่ออก Skin)
   แถวที่ปีนั้นมีสถานี skin อยู่แล้ว (74B = 74X ข้อ 2 measles, 75B, 75D, 76A, 76C, 77A, 77B, 77C) ไม่ใส่ซ้ำ → เติมเฉลยใน osce_b998_skin.js
   เฉลย: คำบรรยายที่ผู้ใช้พิมพ์ให้ = เวอร์ชันหลัก (key) · ข้อความในไฟล์/ที่ Claude เขียน = เวอร์ชันรอง (ans/exp) · โรคที่ผู้ใช้ไม่ได้ให้ (Condyloma, Cushing, Scabies) = ไฟล์เป็นหลัก + Claude ร่างแบบท่องจำง่ายเป็นรอง
   ให้คะแนนตาม keyword · ไม่ถามการรักษาก็ไม่ต้องตอบ · รูป: ดึงจากไฟล์ (mo72*_s*, mo73b_s*) · แถวที่ไม่มีรูปในไฟล์ = NOIMG ฝึกบรรยายสิ่งที่คาดว่าจะเห็น */
const KF="เฉลยจากไฟล์ Skin_OSCE_71-77";
const KU="เวอร์ชันหลัก (ผู้ใช้กำหนด 14 พ.ย. 2026)";
const P=(t,...re)=>({t,re});
const G=(label,need,...opts)=>({label,need,opts});
const CR=x=>Object.assign(x,{crit:1});
function B(q,marks,o){const pts=[],kw=[],crit=[];(o.pts||[]).forEach(p=>{if(p.crit)crit.push(pts.length);
  if(p.opts){pts.push({label:p.label,any:p.opts.map(x=>x.t),need:p.need});kw.push(p.opts.map(x=>x.re));}else{pts.push(p.t);kw.push(p.re);}});
  const s=Object.assign({q,marks,key:KF,tags:["skin"]},o);delete s.pts;s.points=pts;s.kw=kw;if(crit.length)s.crit=crit;return s;}
const S=(...subs)=>[{subs}];
const NOIMG="ไม่มีรูปในไฟล์ — ข้อนี้ฝึกบรรยายสิ่งที่คาดว่าจะเห็น";
const St=(set,ro,page,o)=>Object.assign({set,ro,file:"SKIN71-77",kfile:"SKIN71-77",page,orig:"Skin",topic:"skin",opinion:""},o);
/* คำบรรยายเวอร์ชันหลักของผู้ใช้ + keyword */
const D={
 pv:P("Multiple discrete hypopigmented macules and patches","hypopigment","macule","patch","ด่างขาว"),
 derm:[P("Sharply demarcated erythematous annular patch/plaque","annular","sharply demarcated","well.?demarcated","erythematous","วงแหวน"),P("Active border with central clearing","active border","central clear","raised border","ขอบ"),P("Covered with scale","scale","ขุย")],
 pso:[P("Multiple well-demarcated erythematous plaques","well.?demarcated","sharply demarcated","plaque","erythematous"),P("Silvery scales","silver","scale","ขุยสีเงิน")],
 nail:[P("Pitting nail","pit"),P("Oil drop sign","oil.?drop","oil spot","salmon"),P("Onycholysis","onycholy")],
 mc:[P("Multiple discrete dome-shaped pearly papules","dome","pearly","papule"),P("Central umbilication","umbilicat","บุ๋ม")],
 ad:[P("Ill-defined erythematous scaly papules and plaques","ill.?defined","scaly","papule","plaque","erythematous"),P("Excoriation marks","excoria","รอยเกา"),P("Flexural distribution","flexur","ข้อพับ","antecubital","popliteal")],
 pr:[P("Multiple discrete erythematous annular or oval plaques","oval","annular","plaque","erythematous"),P("Trailing scale","trailing","collarette","scale"),P("Along the skin folds over the back (Christmas tree)","skin fold","langer","christmas","back","หลัง","cleavage")],
 hz:[P("Groups of multistage vesicular lesions on erythematous base","vesic","grouped","group","multistage","erythematous","ตุ่มน้ำ"),P("Unilateral dermatome","dermatom","unilateral","ข้างเดียว")]};
QB.push(

/* ============================ 71 (ไม่ระบุ rotation → RoX) ============================ */
St("MDCU71","RoX",1,{orig:"Skin1",title:"Skin lesion — painless growths on the penis",imgNote:NOIMG+" · skin-colored cauliflower-like (verrucous) papules/mass ที่ penis",
 stem:`(Written answer) A 28-year-old man presents with painless growths on the penis for 2 months. He has had several sexual partners.<br>a. Describe the lesion.<br>b. Diagnosis.<br>c. Name the causative agent and the risk factors for malignant transformation.`,
 gray:"71 · Condyloma accuminata at penile · Skin colored- cauliflower like mass at penis · Malignancy risk factor: HPV 16, 18; smoking",
 parts:S(
  B("a. Describe the lesion.",3,{key:KF+" — Skin colored, cauliflower-like mass at penis",
   ans:"<b>หลัก (ไฟล์)</b>: Skin-colored, <b>cauliflower-like</b> mass at the penis<br><b>รอง (Claude ร่าง ท่องง่าย)</b>: Multiple skin-colored <b>verrucous (cauliflower-like) papules and plaques</b> on the penile shaft",
   pts:[P("Skin-colored","skin.?colou?red","สีเนื้อ"),CR(P("Cauliflower-like / verrucous","cauliflower","verruc","warty","กะหล่ำ"))]}),
  B("b. Diagnosis.",2,{key:KF+" — Condyloma acuminata",ans:"<b>Condyloma acuminata</b> (anogenital warts)",pts:[CR(P("Condyloma acuminata / genital wart","condyloma","genital wart","anogenital wart","หูดหงอนไก่"))]}),
  B("c. Name the causative agent and the risk factors for malignant transformation.",3,{key:KF+" — Malignancy risk factor: HPV 16, 18; smoking",
   ans:"สาเหตุ: <b>HPV type 6, 11</b> (low-risk — ทำให้เกิดหูด ~90%) · ความเสี่ยงมะเร็ง (ไฟล์): <b>HPV 16, 18</b> (high-risk), <b>smoking</b> · Claude เติม: immunosuppression (HIV)",
   exp:"<span class=\"warn\">! ต่าง</span> ไฟล์เขียนแค่ HPV 16, 18 ซึ่งเป็นตัวเสี่ยงมะเร็ง — ตัวก่อหูดหงอนไก่จริงคือ HPV 6, 11 · รักษา: podophyllotoxin, imiquimod, cryotherapy, TCA, excision · วัคซีน HPV 9-valent ป้องกันทั้ง 6/11 และ 16/18",
   pts:[P("HPV (6, 11 = cause)","hpv","papilloma"),P("HPV 16, 18 = malignancy risk","16","18","high.?risk"),P("Smoking","smok","บุหรี่")]})),
 interp:"ก้อนสีเนื้อรูปดอกกะหล่ำที่อวัยวะเพศ → condyloma acuminata (HPV 6/11) · ความเสี่ยงมะเร็ง = HPV 16/18 + smoking",
 summary:["Condyloma = HPV 6, 11 · มะเร็ง = HPV 16, 18","Skin-colored cauliflower-like papules","ตรวจคัด STI อื่น (HIV, syphilis) ด้วย"]}),

St("MDCU71","RoX",1,{orig:"Skin2",title:"Skin lesion — abdominal striae in a patient with weight gain",imgNote:NOIMG+" · wide purplish (violaceous) striae ที่หน้าท้อง",
 stem:`(Written answer) A 35-year-old woman has gained weight and noticed easy bruising over the past year. The abdominal skin is shown.<br>a. Describe the lesion.<br>b. Diagnosis.<br>c. Name 4 other physical findings you would look for.`,
 gray:"71 · Cushing's syndrome · Purplish striae · Moon face, buffalo hump, facial plethora, proximal muscle weakness, hypertension",
 parts:S(
  B("a. Describe the lesion.",2,{key:KF+" — Purplish striae",
   ans:"<b>หลัก (ไฟล์)</b>: <b>Purplish striae</b><br><b>รอง (Claude ร่าง ท่องง่าย)</b>: <b>Wide (&gt; 1 cm) purplish (violaceous) striae</b> over the abdomen",
   exp:"แยกจาก striae ทั่วไป (ตั้งครรภ์/อ้วน) ซึ่งแคบ สีชมพู-ขาวซีด · striae ของ Cushing กว้าง สีม่วงเข้ม เพราะผิวบางจาก cortisol",
   pts:[CR(P("Purplish / violaceous striae","purpl","violac","ม่วง","striae","stretch mark")),P("Wide (> 1 cm)","wide","1 ?cm","กว้าง")]}),
  B("b. Diagnosis.",2,{key:KF+" — Cushing's syndrome",ans:"<b>Cushing's syndrome</b> (hypercortisolism)",pts:[CR(P("Cushing's syndrome","cushing","hypercortisol"))]}),
  B("c. Name 4 other physical findings you would look for.",4,{key:KF+" — Moon face, buffalo hump, facial plethora, proximal muscle weakness, hypertension",
   ans:"<b>Moon face</b> · <b>buffalo hump</b> (dorsocervical fat pad) · <b>facial plethora</b> · <b>proximal muscle weakness</b> · <b>hypertension</b> · (เติม: supraclavicular fat pad, easy bruising, thin skin, central obesity)",
   exp:"อาการที่จำเพาะต่อ Cushing มากที่สุด = easy bruising, facial plethora, proximal myopathy, wide purple striae · ตรวจคัดกรอง: 1-mg overnight dexamethasone suppression test, late-night salivary cortisol, 24-h urine free cortisol",
   pts:[G("Physical findings",4,P("Moon face","moon"),P("Buffalo hump","buffalo","dorsocervical"),P("Facial plethora","plethora"),P("Proximal muscle weakness","proximal","myopath","weakness"),P("Hypertension","hypertens","\\bht\\b","ความดัน"),P("Central obesity / supraclavicular fat","central obes","supraclavicular","truncal"),P("Easy bruising / thin skin","bruis","thin skin","จ้ำ"))]})),
 interp:"Wide purple striae + weight gain → Cushing's syndrome",
 summary:["Striae ของ Cushing: กว้าง > 1 cm สีม่วง","Moon face, buffalo hump, plethora, proximal weakness, HT","คัดกรอง: 1-mg DST / late-night salivary cortisol / 24-h UFC"]}),

/* ============================ 72 ============================ */
St("MDCU72","RoA",1,{title:"Skin lesion — rash on the arm",img:"mo72a_s",
 stem:`(Written answer) A patient presents with a rash on the arm, as shown.<br>a. Describe the lesion.<br>b. Diagnosis.<br>c. Investigation and expected result.<br>d. Treatment.`,
 gray:"72A · ผื่นที่แขน · Pityriasis versicolor (Tinea versicolor) · Multiple discrete hypopigmented macules and patches at arm · Topical ketoconazole · 10% KOH: Budding yeasts and short hyphae",
 parts:S(
  B("a. Describe the lesion.",3,{key:KU+": Multiple discrete hypopigmented macules and patches over the arm",ans:"<b>Multiple discrete hypopigmented macules and patches</b> over the arm",exp:"รอง: ไฟล์ = เดียวกัน (at arm) · Claude เติม: มักมี fine (branny) scale ขูดแล้วเป็นขุย (evoked scale sign)",pts:[CR(D.pv),P("Over the arm (location)","arm","แขน")]}),
  B("b. Diagnosis.",2,{ans:"<b>Pityriasis versicolor</b> (tinea versicolor) — <i>Malassezia</i>",key:KF+" — Pityriasis versicolor (Tinea versicolor)",pts:[CR(P("Pityriasis / tinea versicolor","versicolor","malassezia","เกลื้อน"))]}),
  B("c. Investigation and expected result.",2,{key:KF+" — 10% KOH: Budding yeasts and short hyphae",ans:"<b>10% KOH</b>: <b>budding yeasts and short hyphae</b> ('spaghetti and meatballs')",pts:[P("KOH preparation","koh"),CR(P("Budding yeasts + short hyphae (spaghetti & meatballs)","yeast","hyphae","spaghetti","meatball"))]}),
  B("d. Treatment.",2,{key:KU+": topical ketoconazole / selenium sulfide",ans:"<b>Topical ketoconazole</b> or <b>selenium sulfide</b>",exp:"ไฟล์: topical ketoconazole · ผื่นกว้าง/เป็นซ้ำ: oral itraconazole/fluconazole · สีผิวกลับปกติช้าหลายเดือน",pts:[P("Topical ketoconazole / selenium sulfide","ketoconazole","selenium","azole","antifungal")]})),
 interp:"Hypopigmented macules + KOH spaghetti & meatballs → pityriasis versicolor",summary:["PV: hypopigmented macules/patches ± fine scale","KOH: budding yeasts + short hyphae","Topical ketoconazole / selenium sulfide"]}),

St("MDCU72","RoB",1,{title:"Skin lesion — annular scaly plaque",img:"mo72b_s",
 stem:`(Written answer) A patient presents with an itchy rash, as shown.<br>a. Describe the lesion.<br>b. Diagnosis.<br>c. Investigation and expected result.<br>d. Treatment.`,
 gray:"72B · Dermatophytosis (Tinea เฉยๆ) · Sharply demarcated, erythematous annular patch with active border covered with scale · Topical terbinafine · 10% KOH: Septate branching hyphae with arthroconidia",
 parts:S(
  B("a. Describe the lesion.",3,{key:KU+": Sharply demarcated, erythematous annular patch/plaque with active border and central clearing, covered with scale",ans:"<b>Sharply demarcated, erythematous annular patch/plaque with active border and central clearing, covered with scale</b>",exp:"รอง (ไฟล์): sharply demarcated, erythematous annular patch with active border covered with scale",pts:D.derm.map((p,i)=>i===0?CR(p):p)}),
  B("b. Diagnosis.",2,{key:KF+" — Dermatophytosis (tinea)",ans:"<b>Dermatophytosis</b> (tinea corporis)",pts:[CR(P("Dermatophytosis / tinea","dermatophyt","tinea","กลาก","ringworm"))]}),
  B("c. Investigation and expected result.",2,{key:KF+" — 10% KOH: Septate branching hyphae with arthroconidia",ans:"<b>10% KOH</b>: <b>septate branching hyphae with arthroconidia</b>",pts:[P("KOH preparation","koh"),CR(P("Septate branching hyphae (± arthroconidia)","septate","branching","hyphae","arthroconid"))]}),
  B("d. Treatment.",2,{key:KU+": topical terbinafine OR oral terbinafine for capitis & nails",ans:"<b>Topical terbinafine</b> (หรือ azole) · <b>oral terbinafine</b> สำหรับ tinea capitis และเล็บ",exp:"ไฟล์: topical terbinafine · ผื่นกว้างมาก/ไม่ตอบ topical ใช้ยากินได้",pts:[P("Topical terbinafine / antifungal","terbinafine","antifungal","azole","clotrimazole"),P("Oral for capitis & nails","oral","capitis","nail")]})),
 interp:"Annular plaque ขอบแดงมีขุย ตรงกลางจาง → tinea · KOH septate hyphae",summary:["Tinea: annular, active scaly border, central clearing","KOH: septate branching hyphae + arthroconidia","Topical terbinafine · capitis/nail → oral"]}),

St("MDCU72","RoC",1,{title:"Skin and nail lesions — plaques on the legs and nail changes",img:["mo72c_sa","mo72c_sb"],
 stem:`(Written answer) A patient presents with skin and nail lesions, as shown (picture 1: skin, picture 2: nails).<br>a. Describe the skin lesions.<br>b. Describe the nail lesions.<br>c. Diagnosis.<br>d. Name 1 associated disease.<br>e. Name 2 topical treatments.`,
 gray:"72C · Psoriasis vulgaris · Sharply demarcated, erythematous plaques covered with silvery scale · Topical corticosteroids, Topical vitamin D analogue (Calcipotriene) · Associated disease: Psoriatic arthritis · Psoriatic nail: Pitting nail with oil drop sign and onycholysis",
 parts:S(
  B("a. Describe the skin lesions.",3,{key:KU+": Multiple well-demarcated erythematous plaques covered with silvery scales",ans:"<b>Multiple well-demarcated erythematous plaques covered with silvery scales</b>",exp:"รอง (ไฟล์): sharply demarcated, erythematous plaques covered with silvery scale · Claude เติม: Auspitz sign, Koebner phenomenon, extensor surface",pts:D.pso.map(CR)}),
  B("b. Describe the nail lesions.",2,{key:KU+": Pitting nail with oil drop sign and onycholysis",ans:"<b>Pitting nail with oil drop sign and onycholysis</b>",pts:D.nail}),
  B("c. Diagnosis.",2,{key:KF+" — Psoriasis vulgaris + psoriatic nail",ans:"<b>Psoriasis vulgaris</b> (chronic plaque psoriasis) with <b>psoriatic nail</b>",pts:[CR(P("Psoriasis vulgaris","psoria","สะเก็ดเงิน"))]}),
  B("d. Name 1 associated disease.",1,{key:KF+" — Psoriatic arthritis",ans:"<b>Psoriatic arthritis</b> (ความเสี่ยงสูงขึ้นเมื่อมี nail disease)",exp:"อื่น ๆ: metabolic syndrome, cardiovascular disease, IBD, depression",pts:[P("Psoriatic arthritis","arthrit","ข้ออักเสบ")]}),
  B("e. Name 2 topical treatments.",2,{key:KU+": topical corticosteroid AND topical vitamin D analogue (calcipotriene)",ans:"<b>Topical corticosteroid</b> + <b>topical vitamin D analogue (calcipotriene)</b>",pts:[P("Topical corticosteroid","steroid","corticoster","clobetasol","betamethasone"),P("Vitamin D analogue (calcipotriene/calcipotriol)","calcipot","vitamin d")]})),
 interp:"Well-demarcated plaques + silvery scale + nail pitting/oil drop → psoriasis",summary:["Psoriasis: well-demarcated erythematous plaques + silvery scales","Nail: pitting, oil drop, onycholysis","Topical steroid + calcipotriene · ระวัง psoriatic arthritis"]}),

St("MDCU72","RoD",1,{title:"Skin lesion — small pearly papules",img:"mo72d_s",
 stem:`(Written answer) A patient presents with multiple small skin lesions, as shown.<br>a. Describe the lesion.<br>b. Diagnosis.<br>c. What would histology/smear show?<br>d. Treatment.`,
 gray:"72D · Molluscum contangiosum · Domed shaped, umbilicated, pearly papules with nodular lesions · No specific treatment · Inclusion body",
 parts:S(
  B("a. Describe the lesion.",3,{key:KU+": Multiple discrete dome-shaped pearly papules with central umbilication",ans:"<b>Multiple discrete dome-shaped pearly papules with central umbilication</b>",exp:"รอง (ไฟล์): domed shaped, umbilicated, pearly papules with nodular lesions",pts:D.mc.map(CR)}),
  B("b. Diagnosis.",2,{key:KF+" — Molluscum contagiosum",ans:"<b>Molluscum contagiosum</b> (poxvirus)",exp:"ผู้ใหญ่ที่เป็นมาก/รอยโรคใหญ่ที่หน้า → คัดกรอง HIV",pts:[CR(P("Molluscum contagiosum","mollusc","หูดข้าวสุก"))]}),
  B("c. What would histology/smear show?",1,{key:KF+" — Inclusion body",ans:"<b>Intracytoplasmic inclusion bodies</b> (molluscum / Henderson–Patterson bodies)",pts:[P("Inclusion bodies (Henderson–Patterson)","inclusion","henderson","molluscum bod")]}),
  B("d. Treatment.",1,{key:KU+": no specific treatment",ans:"<b>No specific treatment</b> (หายเองใน 6–12 เดือน)",exp:"รอง: ถ้าต้องการรักษา — curettage, cryotherapy, cantharidin, ขูด/บีบเอาแกนออก",pts:[P("No specific treatment / self-limited","no specific","self.?limit","หายเอง","curettage","cryo")]})),
 interp:"Dome-shaped pearly papules มีรอยบุ๋มกลาง → molluscum contagiosum",summary:["Molluscum: dome-shaped pearly papules + central umbilication","Henderson–Patterson inclusion bodies","No specific treatment (curettage/cryo ถ้าต้องการ) · ผู้ใหญ่เป็นมาก → HIV"]}),

/* ============================ 73 ============================ */
St("MDCU73","RoA",1,{title:"Skin lesion — itchy ring-shaped rash",imgNote:NOIMG+" · annular erythematous scaly plaque with active border and central clearing",
 stem:`(Written answer) A patient presents with an itchy ring-shaped rash on the trunk.<br>a. Describe the expected lesion.<br>b. Diagnosis.<br>c. Investigation and expected result.`,
 gray:"73A · Dermatphyte infection (ไฟล์มีแค่ชื่อโรค)",
 parts:S(
  B("a. Describe the expected lesion.",3,{key:KU+": Sharply demarcated, erythematous annular patch/plaque with active border and central clearing, covered with scale",ans:"<b>Sharply demarcated, erythematous annular patch/plaque with active border and central clearing, covered with scale</b>",pts:D.derm.map((p,i)=>i===0?CR(p):p)}),
  B("b. Diagnosis.",2,{key:KF+" — Dermatophyte infection",ans:"<b>Dermatophyte infection</b> (tinea corporis)",pts:[CR(P("Dermatophytosis / tinea","dermatophyt","tinea","กลาก"))]}),
  B("c. Investigation and expected result.",2,{key:"ไฟล์ไม่มี — Claude เฉลยตามแถว 72B",ans:"<b>10% KOH</b>: <b>septate branching hyphae</b> (± arthroconidia)",pts:[P("KOH","koh"),CR(P("Septate branching hyphae","septate","branching","hyphae"))]})),
 interp:"ไฟล์มีแค่ชื่อโรค — Claude แต่งโจทย์ให้ครบตามกติกา",summary:["Tinea: annular + active scaly border + central clearing","KOH: septate branching hyphae"]}),

St("MDCU73","RoB",1,{title:"Skin lesion — itchy rash in the elbow folds of a teenager",img:["mo73b_sa","mo73b_sb"],
 stem:`(Written answer) A 15-year-old girl has an itchy rash in both elbow folds. Her younger brother has a similar rash. The rash is shown.<br>a. Describe the lesion.<br>b. Diagnosis and the diagnostic criteria used.<br>c. Give 1 differential diagnosis and how you would tell it apart.<br>d. Treatment.`,
 gray:"73B · Female 15 yo มีผื่นที่ข้อพับแขนทั้งสองข้าง น้องชายก็เป็น · Atopic dermatitis · Erythematous scaly papules and plaques with excoriation marks, Distribution: Flexors · 1. Eliminating trigger 2. Topical steroids 3. Moisturizer · Criteria: Hanifin and Rajka · DDx. Scabies: small erythematous papules with excoriation, vesicles, eczematous lesions · 5% Permethrin cream",
 parts:S(
  B("a. Describe the lesion.",3,{key:KU+": Multiple ill-defined erythematous scaly papules and plaques with excoriation marks along the flexural surface",ans:"<b>Multiple ill-defined erythematous scaly papules and plaques with excoriation marks along the flexural surface</b>",exp:"รอง (ไฟล์): erythematous scaly papules and plaques with excoriation marks · distribution: flexors",pts:D.ad.map((p,i)=>i<2?CR(p):p)}),
  B("b. Diagnosis and the diagnostic criteria used.",2,{key:KF+" — Atopic dermatitis · Criteria for diagnosis: Hanifin and Rajka",ans:"<b>Atopic dermatitis</b> · เกณฑ์ <b>Hanifin and Rajka</b>",exp:"Hanifin & Rajka: major ≥ 3 (pruritus, typical morphology/distribution — flexural ในวัยรุ่น/ผู้ใหญ่, chronic relapsing, personal/family history of atopy) + minor ≥ 3 · UK Working Party criteria ใช้ได้เช่นกัน",pts:[CR(P("Atopic dermatitis","atopic","eczema")),P("Hanifin and Rajka","hanifin","rajka","uk working")]}),
  B("c. Give 1 differential diagnosis and how you would tell it apart.",2,{key:KF+" — DDx. Scabies: small erythematous papules with excoriation, vesicles, eczematous lesions · 5% Permethrin cream",
   ans:"<b>Scabies</b> — small erythematous papules with excoriation, vesicles, eczematous lesions · แยก: <b>burrows</b> ที่ง่ามนิ้ว/ข้อมือ, คันมากกลางคืน, คนในบ้านเป็นพร้อมกัน, ขูดดูตัว/ไข่ · รักษา <b>5% permethrin cream</b>",
   exp:"รอง (Claude ร่าง ท่องง่าย): Scabies = <b>small erythematous papules + burrows at web spaces/wrists</b>, nocturnal itch · 5% permethrin ทาทั้งตัวคอลงไป ทิ้ง 8–14 ชม. ซ้ำใน 7 วัน รักษาคนในบ้านพร้อมกัน · อื่น ๆ: contact dermatitis, seborrheic dermatitis",
   pts:[P("Scabies (or other valid DDx)","scabie","หิด","contact derm","seborrh"),P("Distinguishing feature (burrows, web spaces, nocturnal itch / permethrin)","burrow","web","night","nocturnal","permethrin")]}),
  B("d. Treatment.",2,{key:KU+": avoid triggers, topical corticosteroids, moisturizer",ans:"<b>Avoid triggers</b> · <b>topical corticosteroids</b> · <b>moisturizer</b>",pts:[P("Avoid triggers","trigger","avoid","หลีกเลี่ยง"),P("Topical corticosteroid","steroid","corticoster"),P("Moisturizer / emollient","moistur","emollient","ทาครีม")]})),
 interp:"วัยรุ่น ผื่นคันที่ข้อพับ + ครอบครัวเป็น → atopic dermatitis · DDx scabies",summary:["AD: ill-defined scaly papules/plaques + excoriation, flexural","Hanifin & Rajka","Avoid triggers + topical steroid + moisturizer","Scabies: burrows, web spaces · 5% permethrin"]}),

St("MDCU73","RoD",1,{title:"Skin lesion — painful vesicular rash on the leg",imgNote:NOIMG+" · grouped vesicles on erythematous base ตาม dermatome ข้างเดียวที่ขา",
 stem:`(Written answer) A patient has burning pain followed by a vesicular rash on one leg.<br>a. Describe the expected lesion.<br>b. Diagnosis.<br>c. Write the prescription.`,
 gray:"73D · Herpes zoster at leg · Acyclovir tab (800 mg) Sig. 1 tab po 5 times for 7 days (4 g/day)",
 parts:S(
  B("a. Describe the expected lesion.",3,{key:KU+": Groups of multistage vesicular lesions on erythematous base appearing at (right) unilateral dermatome",ans:"<b>Groups of multistage vesicular lesions on erythematous base</b> appearing at a <b>unilateral dermatome</b> (leg)",pts:D.hz.map(CR)}),
  B("b. Diagnosis.",2,{key:KF+" — Herpes zoster at leg",ans:"<b>Herpes zoster</b> (lumbar/sacral dermatome)",pts:[CR(P("Herpes zoster","zoster","shingles","งูสวัด"))]}),
  B("c. Write the prescription.",2,{key:KU+": acyclovir 800 mg 1 tab po 5 times daily for 7 days",ans:"<b>Acyclovir (800 mg) 1 tab po 5 times daily × 7 days</b> (4 g/day) — เริ่มภายใน 72 ชม.",exp:"ทางเลือก: valacyclovir 1 g tid × 7 วัน · ปวด: paracetamol/NSAID, neuropathic → gabapentin",pts:[CR(P("Acyclovir 800 mg 5 times/day × 7 days","acyclovir","800","5 times","valacyclovir"))]})),
 interp:"Grouped vesicles ตาม dermatome ที่ขา → herpes zoster → acyclovir 800 × 5 × 7 วัน",summary:["HZ: grouped multistage vesicles on erythematous base, unilateral dermatome","Acyclovir 800 mg 5 ครั้ง/วัน 7 วัน (4 g/day)"]}),

/* ============================ 74 ============================ */
St("MDCU74","RoA",1,{title:"Skin and nail lesions — plaques and nail changes",img:["mo72c_sa","mo72c_sb"],
 stem:`(Written answer) A patient presents with skin and nail lesions, as shown (picture 1: skin, picture 2: nails).<br>a. Describe the skin and nail lesions.<br>b. Diagnosis.<br>c. What associated symptoms may be found?<br>d. Name 2 topical treatments.`,
 gray:"74A · Psoriasis vulgaris · Sharply demarcated, erythematous plaques covered with silvery scale · Topical corticosteroids, Topical vitamin D analogue (Calcipotriene) · Associated symptoms: Psoriatic arthritis · Psoriatic nail: Pitting nail with oil drop sign and onycholysis (รูปในไฟล์ชุดเดียวกับ 72C)",
 parts:S(
  B("a. Describe the skin and nail lesions.",4,{key:KU+": Multiple well-demarcated erythematous plaques covered with silvery scales · Pitting nail with oil drop sign and onycholysis",ans:"Skin: <b>multiple well-demarcated erythematous plaques covered with silvery scales</b> · Nail: <b>pitting nail with oil drop sign and onycholysis</b>",pts:D.pso.map(CR).concat(D.nail)}),
  B("b. Diagnosis.",2,{key:KF+" — Psoriasis vulgaris + psoriatic nail",ans:"<b>Psoriasis vulgaris</b> with <b>psoriatic nail</b>",pts:[CR(P("Psoriasis vulgaris","psoria","สะเก็ดเงิน"))]}),
  B("c. What associated symptoms may be found?",1,{key:KF+" — Associated symptoms: Psoriatic arthritis",ans:"<b>Psoriatic arthritis</b> — ปวด/บวมข้อ DIP, dactylitis, enthesitis, inflammatory back pain",pts:[P("Psoriatic arthritis","arthrit","ข้อ","dactylitis","enthes")]}),
  B("d. Name 2 topical treatments.",2,{key:KU+": topical corticosteroid AND topical vitamin D analogue (calcipotriene)",ans:"<b>Topical corticosteroid</b> + <b>calcipotriene</b>",pts:[P("Topical corticosteroid","steroid","corticoster"),P("Calcipotriene / vitamin D analogue","calcipot","vitamin d")]})),
 interp:"ข้อเดียวกับ 72C (รูปเดียวกัน) — psoriasis + nail",summary:["Psoriasis + nail pitting/oil drop/onycholysis","Psoriatic arthritis","Topical steroid + calcipotriene"]}),

St("MDCU74","RoC",1,{title:"Skin lesion — oval scaly rash on the back",imgNote:NOIMG+" · herald patch + oval plaques with trailing scale ตามแนวผิวหนังที่หลัง (Christmas tree)",
 stem:`(Written answer) A young adult develops an itchy rash on the back, preceded by a single larger patch 1 week earlier.<br>a. Describe the expected lesion.<br>b. Diagnosis.<br>c. Treatment.`,
 gray:"74C · Pityriasis rosea (ไฟล์มีแค่ชื่อโรค)",
 parts:S(
  B("a. Describe the expected lesion.",3,{key:KU+": Multiple discrete erythematous annular or oval plaques with trailing scale distributed along the skin fold over the back",ans:"<b>Multiple discrete erythematous annular or oval plaques with trailing scale distributed along the skin fold over the back</b>",pts:D.pr.map((p,i)=>i===0?CR(p):p)}),
  B("b. Diagnosis.",2,{key:KF+" — Pityriasis rosea",ans:"<b>Pityriasis rosea</b> (herald patch → secondary eruption)",exp:"DDx ที่ห้ามพลาด: secondary syphilis (ผื่นฝ่ามือฝ่าเท้า → VDRL)",pts:[CR(P("Pityriasis rosea","rosea","ผื่นกุหลาบ"))]}),
  B("c. Treatment.",1,{key:KU+": oral antihistamine",ans:"<b>Oral antihistamine</b> (หายเองใน 6–8 สัปดาห์)",pts:[P("Oral antihistamine / self-limited","antihistamine","cetirizine","chlorphen","self.?limit","หายเอง")]})),
 interp:"ไฟล์มีแค่ชื่อโรค — Claude แต่งโจทย์ให้ครบ",summary:["PR: herald patch → oval plaques with trailing scale, Christmas tree on the back","Oral antihistamine · หายเอง","DDx secondary syphilis"]})

);
})();

# ตัวพิมพ์ครบทั้งหน้า + รูปในสไลด์ + ลายมือ/ไฮไลต์ ของ L22 Skin and Subcutaneous Tissue
# สไลด์ __L22_Skin_and_Subcutaneous_Tissue__jodx78_.pdf (73 หน้า · ลายมือน้ำเงินเข้ม + ชมพู · ไฮไลต์เหลือง + ม่วง) → PG[N] · รูป img/l22_p<N>.jpg
# ชีท เอกสารคำสอน อ.พรเทพ พึ่งรัศมี (20 หน้า ตัวพิมพ์ ไม่มีลายมือ) → PG['sN'] (N = เลขหน้าที่พิมพ์ในชีท) · รูป img/l22s_p<N>.jpg
# PG[p] = (ตัวพิมพ์, รูปในสไลด์/ชีท หรือ None, ลายมือ + ไฮไลต์ ตามตำแหน่งจริง)
# หน้า 51–53 (staging melanoma) มีสัญลักษณ์ ❌ คณะ (ไม่ออก) — ห้ามใช้ · หน้า 1 = ปก
NOHW_S="ไม่มีลายมือ · ไม่มีไฮไลต์ (ชีทเป็นตัวพิมพ์สแกน)"
PG={
2:("<b>Structure of normal skin</b> · ป้ายในรูป: <b>Epidermis · Papillary dermis · Sebaceous gland · Reticular dermis · Hair follicle · Subcutaneous fat · Sweat gland and duct · Cutaneous nerve</b>",
   "ภาพวาดตัดขวางผิวหนัง: ชั้น epidermis สีม่วงด้านบน · dermis สีชมพูมีเส้นเลือดแดง/น้ำเงินวิ่งแนวนอนเป็นร่างแหสองระดับ (ใต้ papillary dermis และที่รอยต่อกับไขมัน) เชื่อมกันด้วยเส้นเลือดแนวตั้ง · ต่อมเหงื่อขดเป็นก้อนสีฟ้า · ต่อมไขมันติดรูขุมขน · เส้นประสาทสีเขียว · ชั้นไขมันสีเหลืองด้านล่าง",
   "ไฮไลต์เหลือง \"Epidermis\", \"dermis\" (ใน Papillary dermis) และ \"Subcu\" (ใน Subcutaneous fat) · ลายมือลูกศรชี้ร่างแหเส้นเลือดใต้ papillary dermis: <b>\"form plexus at dermo-epidermo j<sup>n</sup>\"</b> · ลายมือที่ร่างแหเส้นเลือดล่างสุดใต้ชั้นไขมัน: <b>\"วิ่งเหนือ fascia แทงขึ้น (perforator)\"</b>"),
4:("<b>Benign papilloma</b> · <b>An overgrowth of all layers of the skin with a central vascular core</b>",
   "ภาพวาดติ่งเนื้อยื่นจากผิวหนังบนก้านแคบ ปลายเป็นก้อนหยัก มีเส้นเลือดแดงและน้ำเงินวิ่งขึ้นกลางก้านไปแตกแขนงในก้อน",
   "ไฮไลต์เหลือง หัว \"Benign papilloma\" และคำ \"overgrowth\", \"all layers of the skin\", \"central vascular core\" · ไฮไลต์ม่วงทั้งบรรทัด · ลายมือท้ายหัวเรื่อง: <b>\"= ติ่งเนื้อ (skin tag) → <u>not</u> required tx\"</b>"),
5:("<b>A papilloma</b> · <b>Narrow pedicle, almost a fibrolipomatous polyp</b> · <b>occur anywhere on the skin</b> · <b>shape and size: variable</b>",
   "ภาพถ่ายติ่งเนื้อสีชมพูก้อนเล็กยื่นจากผิวหนังบริเวณรอยพับ",
   "ไฮไลต์เหลือง \"Narrow pedicle\" และ \"fibrolipomatous polyp\" · ไฮไลต์ม่วงทั้งบรรทัดแรก · ลายมือสีขาวบนภาพ: <b>\"ตัวใหญ่ → excision\"</b> · <b>\"· ถ้าตัวเล็ก = จี้ออก / กรรไกรเล็ม\"</b>"),
6:("<b>Seborrhoeic keratosis</b> · <b>The plaque consists of an excess number of basal cell and will peel off</b>",
   "ซ้าย: ภาพวาดตัดขวาง ก้อนแบนสีน้ำตาลนูนบนผิว อยู่เฉพาะชั้นบนสุด ไม่ลงลึก · ขวา: ภาพถ่ายก้อนสีน้ำตาลเข้มขอบหยัก ผิวขรุขระเหมือนแปะบนผิว",
   "ไฮไลต์เหลือง หัว \"Seborrhoeic keratosis\" และคำ \"plaque\", \"excess number of basal cell\", \"will peel off\" · ไฮไลต์ม่วงทั้งประโยค · ลายมือท้ายหัวเรื่อง: <b>\"= พบคนแก่ → เยอะขึ้นตามวัย / family history\"</b> · <b>\"· Tx = จี้ออก (cosmetic)\"</b> · เหนือคำ plaque: <b>\"~สะเก็ด\"</b> · ท้าย peel off: <b>\"→ เอานิ้วแกะก็หลุด → ขึ้นใหม่\"</b> · ใต้ภาพถ่าย: <b>\"คล้ายสะเก็ดแผล\"</b>"),
7:("<b>Keratoacanthoma</b>",
   "ภาพถ่ายใบหน้าข้างจมูก (เบลอบริเวณตา) ก้อนกลมนูนสีผิว ขอบเรียบ ตรงกลางบุ๋มมีสะเก็ด keratin สีน้ำตาลอุด",
   "ไฮไลต์เหลือง หัว \"Keratoacanthoma\" · ลายมือลูกศรชี้กลางก้อน: <b>\"มี keratin อุดอยู่\"</b> · <b>\"ปล่องภูเขาไฟ = ก้อนที่ตรงกลางบุ๋ม\"</b> · <b>\"· ถ้าก้อนใหญ่ : อาจสับสนกับ squamous cell carcinoma (ลอง bx ไปตรวจ)\"</b>"),
8:("<b>Mole</b>",
   "ภาพถ่ายใบหน้าส่วนล่างของหญิง มีไฝสีดำเม็ดเล็กนูนที่แก้มใกล้มุมปากซ้าย",
   "ไฮไลต์เหลือง หัว \"Mole\" · ลายมือชมพูเหนือบรรทัด: <b>\"m/c acquired\"</b> · ลายมือน้ำเงิน (ไฮไลต์ม่วง): <b>\"= Nevus (ไฝ) → มักเป็นภายหลังเกิด (ไม่เสี่ยง malignant)\"</b> · <b>\"· congenital จะเสี่ยง melanoma → Congenital melanocytic nevus (CMN)\"</b> · <b>\"· สงสัย CA ถ้ามี cardinal symptoms\"</b>"),
9:("<b>Cardinal signs and symptoms of malignant change in a mole</b> · <b>Loss of normal surface markings[ Skin creases] · Change in size , shape , or thickness · Change in color · Itching · Bleeding / ulceration · Halo pink[ inflammatory reaction]: early · brown[ pigment]: late · Evidence of local or distant spread</b>",
   None,
   "ไฮไลต์เหลือง \"Cardinal signs\", \"Loss\", \"normal surface markings\", \"Skin creases\", \"Change\", \"size\", \"shape\", \"thickness\", \"Change in color\", \"Itching\", \"Bleeding\", \"ulceration\", \"Halo\", \"pink\", \"brown\", \"spread\" · ไฮไลต์ม่วงบรรทัด Loss of normal surface markings, Change in size/shape/thickness, Change in color, Itching, Bleeding/ulceration, Halo · ลายมือเหนือหัวเรื่อง: <b>\"= ควร bx ส่งตรวจ\"</b> · เหนือคำ size: <b>\"โตเร็ว\"</b>"),
10:("<b>Lipoma</b>",
   "ซ้าย: ภาพถ่ายต้นขาด้านข้าง มีก้อนนูนใหญ่ใต้ผิวหลายลอน ผิวด้านบนปกติ · ขวา: ภาพถ่ายหลังส่วนบนของชาย มีก้อนนูนกว้างใต้ผิวที่ไหล่ขวา",
   "ไฮไลต์เหลือง หัว \"Lipoma\" · ลายมือเหนือหัวเรื่อง: <b>\"ที่ชั้น subcu\"</b> · ลายมือท้ายหัวเรื่อง: <b>\"= ก้อน fat → ก้อนโยกไปมาได้ (ไม่ติดกับ skin / subcu ข้างล่าง)\"</b> (ไฮไลต์ม่วง) · <b>\"· Tx = กรีด (ไม่ต้องทำ skin excision) → เอา lipoma ออก = หายขาด\"</b> · <b>\"└ in case ก้อนน่ารำคาญ / กดทับ (ไม่เอาออกก็ได้)\"</b> · <b>\"*ถ้าก้อนใหญ่/โตเร็ว → liposarcoma\"</b>"),
11:("<b>Lipoma Excision</b>",
   "ภาพถ่ายจอฉายสไลด์ 3 รูปเรียงเฉียง: กรีดผิวเป็นแนวสั้นแล้วใช้กรรไกรเลาะ · นิ้วกดข้างแผลให้ก้อนไขมันสีเหลืองปลิ้นออก · ก้อนไขมันเป็นพูถูกคีบดึงออกจากแผลเล็ก (มุมขวาบนมีแถบชื่อผู้พูดของโปรแกรมประชุม)",
   "ไม่มีลายมือ · ไม่มีไฮไลต์ (ภาพถ่ายจอ)"),
's2':("<b>Skin and subcutaneous tissue</b> · ผิวหนังจัดเป็นอวัยวะที่ใหญ่ที่สุดในร่างกาย มีหน้าที่ในการป้องกันอวัยวะภายในจากสิ่งแวดล้อม ควบคุมอุณหภูมิ ป้องกันเชื้อโรคและเป็นอวัยวะที่ใช้ในการรับความรู้สึก ผิวหนังเจริญมาจากเนื้อเยื่อ 2 ชั้น คือ ectoderm และ mesoderm โดย ectoderm เจริญเป็น epidermis และ skin appendages เช่น pilosebaceous and apocrine glands, eccrine sweat glands และ เล็บ นอกจากนี้ยังมี neuroectoderm ซึ่งจะเจริญเป็น melanocytes nerve และ sensory receptors ส่วน mesoderm เจริญเป็น langerhans cells, macrophages, mast cells, merkel cells, blood vessels, lymph vessels และ fat cells"
      "<br><b>กายวิภาคของผิวหนัง</b> · ผิวหนังประกอบด้วย 3 ชั้น คือ epidermis , basement membrane และ dermis คือ"
      "<br>1. ผิวหนังกำพร้า (Epidermis) ประกอบด้วยเซลล์ 4 ชนิดคือ keratinocytes, melanocytes, langerhans cells และ merkel cells แต่มีส่วนของ extracellular matrix น้อยมาก เซลล์แต่ละชนิดมีหน้าที่แตกต่างกัน ดังนี้"
      "<br>■ Keratinocytes มีหน้าที่เป็น mechanical barrier เรียงตัวเป็น 5 ชั้น จากล่างขึ้นบนคือ stratum basale เป็นชั้นที่มีการแบ่งตัวอย่างรวดเร็ว, stratum spinosum เป็นชั้นที่ไม่มีการแบ่งตัวและเริ่มมีการสร้าง keratin , stratum granulosum เป็นชั้นที่มีการสะสม keratohyaline granules, stratum lucidum และ stratum corneum เป็น kelatinocytes ตัวแก่ เมื่อintracellular connections สลายไปจะทำให้เซลล์หลุดลอกออกไป โดยระยะเวลาที่เซลล์มีการเจริญจากล่างขึ้นบนจนหลุดลอกออกไปใช้เวลาประมาณ 40-56 วัน"
      "<br>■ Melanocytes เป็นเซลล์ที่เจริญมาจาก neural crest มาอยู่ในชั้น basal cell โดยมีอัตราส่วน melanocyte 1 ตัวต่อ keratinocyte ทุก 35 เซลล์ melanocyte จะสร้าง melanin ส่งให้ kelatinocyte เพื่อป้องกันรังสีอัลตราไวโอเลต (แสงอาทิตย์มีทั้ง UVA และ UVB แต่ UVB จะทำลายผิวหนังมากกว่า โดยการกดการทำงานของ Tumor suppressor genes และเป็นปัจจัยเสี่ยงต่อการเกิดมะเร็งผิวหนัง"
      "<br>■ Langerhans cells เป็นเซลล์ที่เคลื่อนที่มาจากไขกระดูก มาทำงานเป็น macrophage ของผิวหนัง ซึ่งช่วยทำหน้าที่ในการจับ antigen ดังนั้นเซลล์นี้จึงมีหน้าที่ด้านภูมิคุ้มกัน"
      "<br>2. Basement membrane เป็นชั้นที่ช่วยให้ epidermis ยึดติดกับ dermis ได้"
      "<br>3. ผิวหนังแท้ (Dermis) หนากว่า epidermis แบ่งเป็น 2 ชั้นคือ papillary dermis และ reticular dermis ส่วนใหญ่เป็น extracellular matrix และ เส้นเลือด เส้นประสาทและต่อมต่างๆ โดยมีส่วนที่เป็นเซลค่อนข้างน้อย",
      None, NOHW_S),
's3':("■ คอลลาเจน (collagen) เป็นส่วนประกอบของโปรตีนที่มีมากที่สุดในชั้นนี้ โดยมีประมาณ 70%ของน้ำหนักแห้งของ dermis ส่วนใหญ่เป็นคอลลาเจน type I (ใน fetus ส่วนใหญ่เป็นคอลลาเจน type III ซึ่งหลังคลอดจะเหลืออยู่เฉพาะที่ basement membrane และรอบๆเส้นเลือดเท่านั้น) ในผู้ใหญ่มีสัดส่วนของ คอลลาเจน type I : type III = 4:1"
      "<br>■ Elastic fiber เป็นโปรตีนที่สำคัญในการทำหน้าที่ให้ความยืดหยุ่นของผิวหนังและเกิดการคืนตัวเมื่อผิวหนังถูกยืด"
      "<br>■ Ground substance สร้างจาก fibroblasts ประกอบด้วย glycosaminoglycans คือ hyaluronic acid, heparin sulfated, dermatan sulfate และ chondroitin-6- sulfate ซึ่งจะสามารถอุ้มน้ำไว้ได้ถึง 1000 เท่าของปริมาตรตัวเอง"
      "<br>■ Fibroblasts เป็นส่วนของเซลล์ที่กระจายอยู่ทั่วไปในชั้นผิวหนังแท้ มีหน้าที่ในการสร้าง protein matrix"
      "<br>รูปที่ 1 แสดงกายวิภาคของผิวหนัง (ป้ายในรูป: HAIR FOLICLE · SWEAT GLAND · SKIN LAYER · EPIDERMIS · DERMIS · SUBCUTANEOUS TISSUE (FAT) · MUSCLE)"
      "<br>เส้นเลือดที่มาเลี้ยงผิวหนังจะเป็น plexus ในแนวราบ 2 ระดับคือ dermal-subcutaneous plexus (subdermal plexus) และ ใน papillary dermis (dermo-epidermal plexus) ซึ่งทั้งสองระดับนี้เชื่อมต่อกันด้วยเส้นเลือดที่วิ่งในแนวตั้ง ทำให้การยก random flap ควรยกส่วนของ subcutaneous tissue ไปด้วย เพื่อให้มีเลือดเลี้ยง flap ได้ดี",
      "รูปที่ 1: ภาพวาดขาวดำก้อนผิวหนังตัดเป็นบล็อก เห็นเส้นขน ต่อมเหงื่อ เส้นเลือดในชั้น dermis และชั้นไขมัน แถบชั้นด้านขวา epidermis → dermis → subcutaneous tissue (fat) → muscle",
      NOHW_S),
's10':("จึงเรียกว่า“flat wart” (verruca plana) นอกจากนี้อาจพบบริเวณที่อับชื้น เช่น vulva anus และ scrotum เรียกว่า “venereal wart” (condyloma acuminata) การรักษาสามารถทำได้หลายวิธีคือ ทาด้วย salicylic acid, podophyllum, จี้ด้วยไนโตรเจนเหลว และการจี้ด้วยไฟฟ้า (Electrocautery) ส่วนการผ่าตัด excision จะใช้เมื่อการรักษาชนิดอื่นไม่ได้ผล เกิดกลับเป็นซ้ำได้บ่อย"
      "<br>Molluscum Contagiosum (หูดข้าวสุก) เกิดจากการติดเชื้อไวรัส HPV types 6 และ 11 มีลักษณะเป็น papules รูปโดมขนาด 2-5 มิลลิเมตร ตรงกลางบุ๋มลง (umbilicated) สีเหมือนผิวหนัง ติดต่อโดยการสัมผัส มักพบที่ใบหน้า ลำตัว แขนและขาในเด็ก ส่วนในผู้ใหญ่มักพบที่อวัยวะเพศ <b>แต่มักไม่พบที่ฝ่ามือและฝ่าเท้า</b> การรักษาสามารถทำได้หลายวิธีคือ curettage, จี้ด้วยไนโตรเจนเหลว และคาร์บอนไดออกไซด์เลเซอร์"
      "<br>รูปที่ 5 ซ้ายบน แสดง common wart ซ้ายล่างแสดง condyloma acuminata ขวาบนแสดง verrucus plantaris ขวาล่างแสดง Molluscum Contagiosum"
      "<br><b>เนื้องอกผิวหนัง (Benign Tumors)</b> · <i>- Nevi (acquired, congenital)</i>"
      "<br><b>Acquired melanocytic nevi (Moles)</b> ประกอบด้วย nevus cells ซึ่งเปลี่ยนแปลงมาจาก melanocytes ทำให้เป็นเซลล์ที่ตัวใหญ่กว่า ไม่มี dendrites และมี cytoplasm มากกว่า สามารถพบได้ทุกคน พบประมาณ 1% ในเด็กแรกเกิดและเพิ่มขึ้นเรื่อยๆ จนพบมากขึ้นในช่วงวัยรุ่น ขนาดและ pigmentation สามารถเพิ่มขึ้นในช่วงที่เป็นวัยรุ่นและตั้งครรภ์ นอกจากนี้การตากแดดบ่อยๆก็ทำให้ไฝมีจำนวนเพิ่มขึ้นได้",
      "รูปที่ 5 ภาพขาวดำ 4 ช่อง: นิ้วมือมีตุ่มหูดขรุขระ (common wart) · ฝ่าเท้ามีหูดแบน (plantar) · รอบทวารมีหูดหงอนไก่ (condyloma) · ตุ่มโดมกลางบุ๋มหลายเม็ด (molluscum)",
      NOHW_S),
's11':("เช่นกัน ชนิดของไฝสามารถแบ่งตามความลึกของ nevus cells อยู่ที่รอยต่อระหว่าง epidermis และ dermis (junctional) เคลื่อนลงไปใน dermis บางส่วน (compound) และเคลื่อนลงไปอยู่ใน dermis ทั้งหมด (dermal)"
      "<br>Dysplastic nevus (Atypical mole) เป็นไฝที่ไม่พบแรกเกิด แต่เริ่มพบในวัยเด็กเหมือนไฝปกติ แต่ไฝดังกล่าวจะมีลักษณะที่ต่างจากไฝปกติคือ ไฝมีรูปร่างไม่กลมหรือรี ขอบเขตไม่ชัดเจน สีไม่สม่ำเสมอ และขนาดมากกว่า 8 มิลลิเมตร <b>(ABCD : Asymmetry, Border irregularity, Color variability, Diameter &gt; 8 mm)</b> มีโอกาสเป็น melanoma 6% ในกลุ่มที่ไม่มีประวัติการเป็น melanoma ในครอบครัว แต่จะพบได้ถึง 15% ในกลุ่มที่มีประวัติการเป็น melanoma ในครอบครัว ดังนั้นไฝที่มีลักษณะดังกล่าวต้องการติดตามอย่างใกล้ชิดโดยเฉพาะผู้ป่วยที่มีไฝจำนวนมาก ไม่สามารถตัดได้หมด จะต้องถ่ายรูปในการติดตาม (total-body photography) ถ้าไฝเม็ดใดมีการเปลี่ยนแปลงจะต้องได้รับการตัดชิ้นเนื้อตรวจ (biopsy)"
      "<br>ตารางในรูป: <b>Normal Mole | Melanoma | Sign | Characteristic</b> — <b>Asymmetry</b>: when half of the mole does not match the other half · <b>Border</b>: when the border (edges) of the mole are ragged or irregular · <b>Color</b>: when the color of the mole varies throughout · <b>Diameter</b>: if the mole's diameter is larger than a pencil's eraser (Photographs Used By Permission: National Cancer Institute)"
      "<br>รูปที่ 6 แสดงลักษณะ <i>ABCD</i> ของ Dysplastic nevi"
      "<br><b>Congenital melanocytic nevus (giant hairy nevus)</b> พบได้ประมาณ 1 % ในทารกแรกเกิด มีขนาดตั้งแต่เล็กๆ ไปจนถึงขนาดใหญ่หลายเซนติเมตร มักพบที่บริเวณลำตัว แขน ขา หรือหน้า รอยโรคนี้มักจะมีรูปร่างกลมหรือรี ขอบเขตชัดเจน มีสีเข้มสม่ำเสมอ และมักจะมีขนขึ้น ถ้าพบขนาดใหญ่บริเวณศีรษะอาจมี leptomeningeal melanocytosis ของสมองหรือไขสันหลังร่วมได้ ซึ่งอาจจะไม่มีอาการ หรือมี communicating hydrocephalus, seizures, focal neurologic deficit, mental retardation หรือเป็น melanoma โดยกลุ่มที่มีอาการจาก leptomeningeal melanocytosis จะมีพยากรณ์โรคไม่ดี รอยโรคนี้จะกลายเป็น",
      "รูปที่ 6 ตารางภาพขาวดำ 4 แถว เทียบไฝปกติ (กลม ขอบเรียบ สีเดียว เล็ก) กับ melanoma (ไม่สมมาตร ขอบขรุขระ หลายสี ใหญ่)",
      NOHW_S),
's12':("melanoma ได้เฉลี่ย 1-5% โดยพบว่า ยิ่งรอยโรคมีขนาดใหญ่ก็จะยิ่งเพิ่มความเสี่ยงต่อการเป็น melanoma ซึ่งถ้าเกิดเป็น melanoma แล้ว การพยากรณ์โรคไม่ดี เนื่องจากจะวินิจฉัยได้ช้าจนผิวหนังบริเวณดังกล่าวเกิดเป็น nodules หรือ มี metastasis แล้ว การรักษาต้องพิจารณาถึงความเสี่ยงต่อการเกิด melanoma ความสวยงาม และการทำหน้าที่ของบริเวณดังกล่าว มีหลักการคือตัดออกให้หมด แต่รอยโรคมักมีขนาดใหญ่มาก ถ้าตัดออกครั้งเดียวมักไม่สามารถปิดแผลได้ ดังนั้นส่วนใหญ่จึงใช้ เป็น staged excision จนกว่ารอยโรคจะหมด ช่วงเวลาที่เหมาะสมของการผ่าตัดคือผ่าตัดให้หมดก่อนอายุ 12 ปี เนื่องจากหลังจากอายุดังกล่าว ความเสี่ยงต่อการเกิด melanoma จะเพิ่มขึ้นอย่างชัดเจน"
      "<br><i>- Keratoses (Seborrheic, Actinic)</i>"
      "<br><b>Seborrheic Keratosis</b> เป็นเนื้องอกของผิวหนังที่พบได้บ่อยที่สุด เกิดในชั้น stratum basale ของ keratinocytes มักเกิดในคนอายุ มากกว่า 40-50 ปี พบบ่อยที่ศีรษะ คอและลำตัว แต่ไม่พบที่ mucous membrane มีลักษณะเป็น papules หรือ plaque อาจมีสีเหลือง น้ำตาลไปจนถึงสีดำ อาจมีผิวเรียบ ขรุขระ มี follicular plugging ขอบเขตชัดเจน มีขนาดได้ตั้งแต่ 1 มิลลิเมตร ถึง 5 เซนติเมตร ส่วนใหญ่ไม่ต้องการการรักษา นอกจากต้องการเอาออกเพื่อความสวยงาม โดยการลอกผิวหนังชั้นตื้นออกโดย shave biopsy, dermabrasion, จี้ด้วยไอเย็น (cryotherapy) แต่ถ้ารอยโรคมีขนาดใหญ่และโตเร็วอาจแยกยากจาก basal cell carcinoma หรือ melanoma อาจจะต้อง biopsy เพื่อวินิจฉัยแยกโรค"
      "<br><b>Actinic Keratoses (solar Keratoses)</b> พบในผู้สูงอายุ เกิดบริเวณที่สัมผัสแสงแดด เช่น ใบหน้า แขน หลังมือ จัดเป็น premalignancy skin lesion ที่พบบ่อยที่สุด โดยเฉพาะในคนผิวขาว ลักษณะเป็น scaly patches อาจมีสีแดงขึ้นหรือยกนูนขึ้นเล็กน้อย ลักษณะทางพยาธิวิทยาจะเห็น dyskeratosis และ atypia ของชั้น basal layer ของ epidermis โรคนี้เปลี่ยนแปลงเป็น squamous cell carcinoma ได้ 5-20% จึงต้องให้การรักษาและกำจัดออก โดย จี้ด้วยไอเย็น (cryotherapy) จี้ด้วยไฟฟ้า (electrodescication) ทายา 5-FU ใช้เลเซอร์ หรือผ่าตัด excision"
      "<br>รูปที่ 7 แสดง Seborrheic Keratosis · รูปที่ 8 แสดง Actinic Keratoses",
      "รูปที่ 7 ภาพขาวดำก้อนสีเข้มผิวขรุขระขอบชัดบนผิวมีขน · รูปที่ 8 ภาพขาวดำผื่นแบนสีจางมีขุยขอบไม่ชัด",
      NOHW_S),
's13':("<i>- Cysts (Epidermal, Dermoid, Trichilemmal)</i>"
      "<br><b>Epidermal cysts (Sebaceous cysts)</b> เป็นถุงน้ำของผิวหนังที่พบบ่อยที่สุด เกิดจากการอุดตันของ pilosebaceous gland ทำให้เกิดการสะสมของเคอราตินอยู่ตรงกลาง (ดังนั้นการเรียกว่า sebaceous cysts จึงเป็น misnomer เนื่องจากถุงน้ำนี้ไม่ได้เป็นการสะสมของ sebum) ผนังถุงน้ำเป็น stratified squamous epithelium ถุงน้ำชนิดนี้พบในบริเวณที่มี sebaceous gland มาก เช่น ใบหน้า หลัง หูและหน้าอก มีลักษณะเป็นก้อนถุงน้ำกลม ผิวเรียบ มีรอยบุ๋มตรงกลางเป็นรูเปิดที่อุดตัน ถุงน้ำมักโตขึ้นอย่างช้าๆ การรักษาโดยการผ่าตัด excision โดยเอารูเปิดของผิวหนังที่อุดตันออกด้วย แต่ถ้าถุงน้ำมีการอักเสบเป็นหนอง จะให้การรักษาโดยผ่าตัดระบายหนอง (open and drainage) ร่วมกับการให้ยาปฏิชีวนะที่คลุมเชื้อ <i>Staphylococcus aureus</i> รอให้แผลหายดีแล้วจึงมาทำการผ่าตัด excision ภายหลัง"
      "<br><b>Dermoid cysts</b> เป็นถุงน้ำที่พบแต่แรกเกิด เกิดจากมีส่วนของ epithelium ถูกฝังระหว่างการปิดของเนื้อเยื่อ จึงพบที่ส่วนกลางของใบหน้าโดยเฉพาะที่จมูก หน้าผาก และคิ้ว ถุงน้ำนี้มีผนังเป็น squamous epithelium มี eccrine gland, pilosebaceous unit และ อาจมีกระดูก ฟันและเนื้อเยื่อประสาทอยู่ภายใน การดำเนินของโรคและการรักษาเช่นเดียวกับ epidermal cyst"
      "<br>รูปที่ 9 ซ้ายแสดง dermoid cyst ที่หางคิ้ว ขวาแสดงภาพตัดของ dermoid cyst"
      "<br><b>Trichilemmal cysts (Pilar cysts)</b> เป็นถุงน้ำเหมือน epidermal cyst แต่เกิดจากบริเวณรากผม ผนังถุงน้ำจึงเป็น outer root sheath ของ hair มีการสร้างเคอราตินเช่นกันแต่จะแห้งกว่า พบในผู้หญิงมากกว่าผู้ชาย การดำเนินของโรคและการรักษาเช่นเดียวกับ epidermal cyst"
      "<br><i>- Soft tissue tumors (Acrochordons, dermatofibromas, lipomas)</i>"
      "<br><b>Acrochordons (Skin Tags)</b> มีลักษณะเป็นติ่งเนื้อสีเหมือนผิวหนังหรือสีน้ำตาลขนาด 2-3 มิลลิเมตรมีขั้วเป็นติ่งเล็กๆ ส่วนใหญ่มักเกิดขึ้นที่คอและรักแร้พบได้ประมาณ 25% ทั้งในเพศหญิงและเพศชาย โดยเริ่มโตเมื่ออายุ 20-30 ปี และพบเพิ่มขึ้นเรื่อยๆ จนอายุ 50 ปี อาจมีอาการจากการระคายเคืองหรือจากการบิดของขั้วติ่งเนื้อ การรักษาทำเพื่อความสวยงามหรือรักษาอาการระคายเคือง โดยการจี้ด้วยไฟฟ้า (Electrocautery) หรือ ตัดออก",
      "รูปที่ 9 ภาพขาวดำ: ซ้าย ก้อนนูนกลมใต้ผิวที่หางคิ้ว · ขวา ถุงน้ำที่ตัดออกมีเส้นขนอยู่ภายใน",
      NOHW_S),
's14':("<b>Dermatofibromas</b> มีลักษณะเป็น papule หรือ nodule สีเหมือนผิวหนังหรือสีแดงๆ ขนาด 1-2 เซนติเมตร ค่อนข้างแข็ง ฐานกว้าง (sessile) อาจเกิดขึ้นเองหรือเกิดขึ้นหลังแมลงกัดต่อย พบในผู้หญิงมากกว่าผู้ชาย พบได้ 1-10 ก้อน มักพบที่แขน ขาหรือลำตัว ไม่มีอาการ การรักษามักทำเพื่อความสวยงามโดยการผ่าตัด excision"
      "<br><b>Lipomas</b> เป็นเนื้องอกของ fat cells โดยเป็น subcutaneous neoplasm ที่พบบ่อยที่สุด มักพบที่ลำตัว อาจโตขึ้นจนเป็นก้อนใหญ่ได้ การรักษาโดยการผ่าตัด excision เพื่อการวินิจฉัยและความสวยงาม ไม่มีความเสี่ยงต่อการเป็นมะเร็ง"
      "<br><b>Nevus Sebaceous of Jadassohn</b> · เป็นรอยโรคที่พบตั้งแต่แรกเกิด มักพบที่บริเวณศีรษะและใบหน้า โดยพบเป็น plaque มีสีเหลือง ผิวเป็นมันและมีขอบเขตชัดเจน ถ้าเป็นบริเวณหนังศีรษะจะไม่มีผมขึ้น รอยโรคนี้จะกลายเป็น เนื้อร้ายได้ประมาณ 10-15 % ส่วนใหญ่เป็น basal cell carcinoma ซึ่งจะเกิดการเปลี่ยนแปลงในช่วงวัยรุ่น การรักษาโดยการผ่าตัด excision เพื่อป้องกันการเกิดเป็นเนื้อร้าย"
      "<br>รูปที่ 10 แสดง Nevus Sebaceous of Jadassohn · รูปที่ 11 แสดง neurofibroma"
      "<br><i>- Neural tumors (Neurofibromas, Neurilemmmomas)</i>"
      "<br><b>Neurofibromas</b> เป็นเนื้องอกที่เกิดจาก neural sheath cells ลักษณะเป็นfirm nodule อยู่รอบเส้นประสาทต่างๆ มีทั้งที่เป็นก้อนเดี่ยวๆ เกิดเป็น sporadic และเป็นหลายก้อน เรียกว่า multiple neurofibromatosis โดยพบร่วมกับ abnormal skin pigmentation (café au lait spots) และ bone abnormality เป็นโรค von Recklinghausen disease ซึ่งเป็นโรคที่ถ่ายทอดทางพันธุกรรมแบบ autosomal dominant ก้อน neurofibroma มีโอกาสเป็นมะเร็ง 8-16%"
      "<br><b>Neurilemmomas</b> เป็นเนื้องอกที่เกิดจาก Schwann cells มีลักษณะเป็น nodule ที่มีอาการปวดบริเวณก้อนหรือปวดร้าวไปตามเส้นประสาท มักพบที่ peripheral nerve ของ ศีรษะและแขนขา การรักษาโดยการผ่าตัด excision",
      "รูปที่ 10 ภาพขาวดำหนังศีรษะมีปื้นนูนผิวขรุขระไม่มีผม · รูปที่ 11 ภาพขาวดำหลังที่มีตุ่มก้อนนิ่มจำนวนมาก",
      NOHW_S),
}

# หน้าที่ถอดเพิ่ม (28 พ.ย. 2026) — parts/notes_pg/L22/*.json · {"12": [ตัวพิมพ์, รูป|null, ลายมือ/ไฮไลต์], "s5": [...]}
import glob as _g, json as _j, os as _o
for _f in sorted(_g.glob(_o.path.join(_o.path.dirname(_o.path.abspath(__file__)), 'notes_pg', 'L22', '*.json'))):
    for _k, _v in _j.load(open(_f, encoding='utf-8')).items():
        _kk = _k if _k.startswith('s') else int(_k)
        if _kk not in PG: PG[_kk] = tuple(_v)

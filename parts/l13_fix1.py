# L13 แก้หลังตรวจซ้ำ 15 พ.ย. 2026 (AJCC 2026, Borrmann, ASGE 2021, ESGE, dumping, MATTERHORN)
import sys; sys.path.insert(0,'tools')
from io_gl import load, save, page
head,d=load('data/io.js'); U='2026-11-15'
def rep(pid,a,b):
    p=page(d,pid); assert a in p['html'],(pid,a[:40]); p['html']=p['html'].replace(a,b); p['rev']+=1 if not p.get('_t') else 0; p['_t']=1; p['upd']=U
def refset(pid,match,t,u=None):
    p=page(d,pid)
    for r in p['refs']:
        if match in r['t']:
            r['t']=t
            if u: r['u']=u
            return
    raise KeyError(match)
rep('L13-7','ข้อมูลญี่ปุ่นหลายชุดรายงาน <b>type 3</b> พบบ่อยที่สุดใน advanced cancer',
 'ข้อมูลแต่ละชุดต่างกัน: บางชุดพบ <b>type 2</b> มากสุด (จีน 2,092 ราย: type II 49.8%, type III 40.6%) แต่หลายชุดในเอเชียพบ <b>type 3</b> มากสุด (~60–70%) → ถ้าข้อสอบถาม ให้ดูบริบท')
rep('L13-7','ใช้ <b>AJCC 8</b> ตามตารางเทียบด้านบนของหน้านี้','ใช้ <b>AJCC 8</b> ตามตารางเทียบด้านบนของหน้านี้ (ตาราง AJCC ปี 2026 ยืนยัน: Stomach และ GIST ยังเป็น 8th Edition ยังไม่มี Version 9)')
rep('L13-7','NCCN เพิ่ม durvalumab + FLOT ตาม MATTERHORN)','NCCN เพิ่ม durvalumab + FLOT ตาม MATTERHORN — EFS และ OS ดีขึ้น, OS HR 0.78 · FDA อนุมัติ พ.ย. 2025)')
rep('L13-11','Benign (PUD) → ตรวจและกำจัด H. pylori + PPI · หยุด NSAIDs · <b>endoscopic balloon dilation</b> ก่อน · ไม่ได้ผล → ผ่าตัด',
 'Benign → <b>endoscopic balloon dilation เป็นการรักษาแรก</b> · เลือกระหว่างส่องกล้องกับผ่าตัดตามสาเหตุ ความยาวของตีบ และการตอบสนองต่อการขยายครั้งแรก (หลักฐานยังไม่พอจะเลือกทางใดทางหนึ่งในทุกกรณี) · ร่วมกับรักษาสาเหตุ PUD (PPI, กำจัด H. pylori, หยุด NSAIDs)')
rep('L13-11','Malignant → enteral stent (คาดว่ามีชีวิตสั้น) หรือ gastrojejunostomy ผ่าตัด/ผ่าน EUS (คาดว่ามีชีวิตนานกว่า)',
 'Malignant ที่รักษาให้หายไม่ได้ → <b>self-expandable metal stent (SEMS) หรือ surgical gastrojejunostomy</b> เลือกตามสภาพผู้ป่วย ความต้องการ ทีมสหสาขา และความชำนาญของสถานที่ · covered กับ uncovered SEMS ยังไม่มีหลักฐานว่าแบบใดดีกว่า')
refset('L13-11','gastroduodenal obstruction','Jue TL, et al.; ASGE Standards of Practice Committee. ASGE guideline on the role of endoscopy in the management of benign and malignant gastroduodenal obstruction. Gastrointest Endosc 2021;93(2):309–322.e4','https://doi.org/10.1016/j.gie.2020.07.063')
refset('L13-6','ESGE Guideline – Update 2021','Gralnek IM, et al. Diagnosis and management of nonvariceal upper gastrointestinal hemorrhage: ESGE Guideline. Endoscopy 2015;47:a1–46 (MR5 ไม่แนะนำ NG/OG aspiration/lavage เป็นประจำ · MR13 rebleed → ส่องซ้ำ → ล้มเหลว → TAE หรือผ่าตัด) + Update 2021 (Endoscopy 2021;53:300–332)','https://doi.org/10.1055/s-0034-1393172')
refset('L13-9','dumping','Scarpellini E, et al. International consensus on the diagnosis and management of dumping syndrome. Nat Rev Endocrinol 2020;16(8):448–466','https://doi.org/10.1038/s41574-020-0357-5')
for p in d['docs']:
    for x in p['pages']: x.pop('_t',None)
save('data/io.js',head,d); print('ok')

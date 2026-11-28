#!/usr/bin/env python3
"""ประกอบ data_subspe/unit_L23.js (Subspe)
ข้อที่เขียนใหม่ (แบบ 78/Gen Sx ตามต้นแบบ L28/L05) อยู่ใน parts/fill/l23_r*.json (dict "n" → ข้อเต็ม · สร้างด้วย parts/l23_common.py)
ข้อที่ยังไม่ทำใหม่ใช้ของเดิมจาก parts/L23_orig.json (สำเนาไฟล์เดิมก่อนทำใหม่ 26 พ.ย. 2026)
python3 parts/asm_L23.py   (รันจาก root ของ repo)"""
import glob,json,re
orig=json.load(open('parts/L23_orig.json',encoding='utf-8'))
O={q['n']:q for q in orig['QB']}
Q={}
for f in sorted(glob.glob('parts/fill/l23_r*.json')):
    for k,v in json.load(open(f,encoding='utf-8')).items():
        assert int(k) not in Q,(k,f); v['n']=int(k); Q[int(k)]=v
esc=lambda s: re.sub(r'<(?![a-zA-Z/])','&lt;',s)
def E(o):
    if isinstance(o,str): return esc(o)
    if isinstance(o,list): return [E(x) for x in o]
    if isinstance(o,dict): return {k:E(v) for k,v in o.items()}
    return o
BAD=('นอกสไลด์','ถ้าโจทย์','คนนี้','ผู้ป่วยรายนี้','รายเดียวกัน','จะถูกถ้าถาม','ในบทนี้','นักศึกษา')
order=['n','stem','img','opts','ans','notes','kimg','src','tags','interp','why','wrong','trap','summary','opinion','mnemonic','guide','variants']
QB=[]
for n in range(1,201):
    if n not in Q: QB.append(O[n]); continue
    q=E(Q[n])
    if 'img' in O[n] and 'img' not in q: q['img']=O[n]['img']
    assert q['ans']==O[n]['ans'],(n,'ans ต้องคงตำแหน่งเดิม',q['ans'],O[n]['ans'])
    assert len(q['opts'])==5 and set(q['wrong'])==set('ABCDE')-{'ABCDE'[q['ans']]},(n,'wrong keys')
    L=[len(x) for x in q['opts']]; a=q['ans']
    assert L[a]<max(L[i] for i in range(5) if i!=a),(n,'ช้อยถูกยาวสุด/เท่า',L)
    blob=json.dumps({k:v for k,v in q.items() if k!='notes'},ensure_ascii=False)  # notes = ถอดตัวพิมพ์ตรงตัว (ชีทมีคำว่า 'ในบทนี้')
    for b in BAD: assert b not in blob,(n,'BAD',b)
    assert not re.search(r'ดูข้อ \d|\(ข้อ \d',blob),(n,'ref')
    assert not re.search(r'\b(lectures?|slides?|class|students?)\b',q['stem']+' '.join(q['opts']),re.I),(n,'stem/opts พูดถึง lecture/slide/class/student')
    for k in ('mnemonic','guide','opinion','interp','why','trap'): assert q.get(k),(n,k)
    for c,w in q['wrong'].items(): assert ('จะถูกถ้า' in w) or ('ไม่มีสถานการณ์ใด' in w) or ('ข้อความถูก' in w),(n,'wrong',c)
    for im in q['kimg']:
        p=im.split('_p')[1]; lab='ชีทหน้า' if im.startswith('l23s_') else 'สไลด์หน้า'
        assert f'{lab} {p} ' in q['notes'],(n,'notes ต้องยกครบทุกหน้าใน kimg',im)
    assert 'ลายมือ' in q['notes'] and 'สัญลักษณ์คณะ' in q['notes'],(n,'notes ต้องบอกลายมือ + สัญลักษณ์คณะ')
    assert q['why'].rstrip().endswith('</b>'),(n,'why ต้องจบด้วยคำบนสไลด์ตัวหนา')
    for p in re.findall(r'สไลด์หน้า (\d+)',q['why']+q['opinion']): assert f'l23_p{p}' in q['kimg'],(n,'why/opinion อ้างสไลด์หน้าที่ไม่อยู่ใน kimg',p)
    for p in re.findall(r'ชีท(?: อ\.อภิชัย)?หน้า (\d+)',q['why']+q['opinion']): assert f'l23s_p{p}' in q['kimg'],(n,'why/opinion อ้างชีทหน้าที่ไม่อยู่ใน kimg',p)
    assert 5<=len(q['summary'])<=7 and 3<=len(q['variants'])<=4,(n,'S/V count')
    QB.append({k:q[k] for k in order if k in q}|{k:v for k,v in q.items() if k not in order})
done=sorted(Q)
dist={}
for q in QB: k='ABCDE'[q['ans']]; dist[k]=dist.get(k,0)+1
head=f'''/* Unit round — L23 Burns · term (ผู้ใช้สั่ง 23 พ.ย. 2026) · 200 ข้อ ตามแผนครอบคลุม parts/PLAN_L23.json (84 ประเด็น: สไลด์ 60 + ชีท 24)
   ทำใหม่ทั้งเฉลยแบบ 78/Gen Sx ตามต้นแบบ L28/L05 (ผู้ใช้สั่ง 26 พ.ย. 2026 · เริ่ม 27 พ.ย. 2026) · ทำใหม่แล้ว {len(done)}/200 · ประกอบด้วย parts/asm_L23.py จาก parts/fill/l23_r*.json + parts/L23_orig.json
   case-based ทุกข้อ · คำตอบ A–E ละ 40 · kimg = img/l23_p<N>.jpg (สไลด์) + img/l23s_p<N>.jpg (ชีท อ.อภิชัย · N = เลขหน้าที่พิมพ์) · notes = parts/notes_L23_pages.py */
'''
U={k:v for k,v in orig.items() if k!='QB'}|{"QB":QB}
open('data_subspe/unit_L23.js','w',encoding='utf-8').write(head+'W.UNIT.push('+json.dumps(U,ensure_ascii=False)+');\n')
print(json.dumps({"rewritten":len(done),"done":done[:3]+['…']+done[-3:] if len(done)>6 else done,"dist":dist},ensure_ascii=False))

#!/usr/bin/env python3
"""ประกอบ data_subspe/unit_L05.js (Subspe เท่านั้น — ห้ามแตะ data/unit_L05.js ของ Gen Sx)
ข้อที่เขียนใหม่ (แบบ 78/Gen Sx ตามต้นแบบ L28) อยู่ใน parts/fill/l05_r*.json (dict "n" → ข้อเต็ม)
ข้อที่ยังไม่ทำใหม่ใช้ของเดิมจาก parts/L05_orig.json (สำเนาไฟล์เดิมก่อนทำใหม่ 26 พ.ย. 2026)
python3 parts/asm_L05.py   (รันจาก root ของ repo)"""
import glob,json,re
orig=json.load(open('parts/L05_orig.json',encoding='utf-8'))
O={q['n']:q for q in orig['QB']}
Q={}
for f in sorted(glob.glob('parts/fill/l05_r*.json')):
    for k,v in json.load(open(f,encoding='utf-8')).items():
        assert int(k) not in Q,(k,f); v['n']=int(k); Q[int(k)]=v
esc=lambda s: re.sub(r'<(?![a-zA-Z/])','&lt;',s)
def E(o):
    if isinstance(o,str): return esc(o)
    if isinstance(o,list): return [E(x) for x in o]
    if isinstance(o,dict): return {k:E(v) for k,v in o.items()}
    return o
order=['n','stem','img','opts','ans','notes','kimg','src','tags','interp','why','wrong','trap','summary','opinion','mnemonic','guide','variants']
QB=[]
for n in range(1,151):
    if n not in Q: QB.append(O[n]); continue
    q=E(Q[n])
    if 'img' in O[n] and 'img' not in q: q['img']=O[n]['img']
    assert q['ans']==O[n]['ans'],(n,'ans ต้องคงตำแหน่งเดิม',q['ans'],O[n]['ans'])
    assert len(q['opts'])==5 and set(q['wrong'])==set('ABCDE')-{'ABCDE'[q['ans']]},(n,'wrong keys')
    blob=json.dumps(q,ensure_ascii=False)
    for b in ('นอกสไลด์','ถ้าโจทย์','คนนี้','ผู้ป่วยรายนี้','รายเดียวกัน','จะถูกถ้าถาม'):
        assert b not in blob,(n,'BAD',b)
    assert not re.search(r'ดูข้อ \d|\(ข้อ \d',blob),(n,'ref')
    for k in ('mnemonic','guide','opinion','interp','why','trap'): assert q.get(k),(n,k)
    for c,w in q['wrong'].items(): assert ('จะถูกถ้า' in w) or ('ไม่มีสถานการณ์ใด' in w),(n,'wrong',c)
    for im in q['kimg']:
        p=im.split('_p')[1]; assert f'สไลด์หน้า {p} ' in q['notes'],(n,'notes ต้องยกครบทุกหน้าใน kimg',p)
    assert 'ลายมือ' in q['notes'] and 'สัญลักษณ์คณะ' in q['notes'],(n,'notes ต้องบอกลายมือ + สัญลักษณ์คณะ')
    assert q['why'].rstrip().endswith('</b>'),(n,'why ต้องจบด้วยคำบนสไลด์ตัวหนา')
    m=re.findall(r'สไลด์หน้า (\d+)',q['why'])
    for p in m: assert f'l05_p{p}' in q['kimg'],(n,'why อ้างหน้าที่ไม่อยู่ใน kimg',p)
    assert 5<=len(q['summary'])<=7 and 3<=len(q['variants'])<=4,(n,'S/V count')
    assert not any(x in ('18','22') for x in [i.split('_p')[1] for i in q['kimg']]),(n,'หน้า 18/22 ❌ คณะ')
    QB.append({k:q[k] for k in order if k in q}|{k:v for k,v in q.items() if k not in order})
done=sorted(Q)
dist={}
for q in QB: k='ABCDE'[q['ans']]; dist[k]=dist.get(k,0)+1
head=f'''/* Unit round — L05 Basic plastic surgery · term (ผู้ใช้สั่ง 23 พ.ย. 2026) · 150 ข้อ ตามแผนครอบคลุม parts/PLAN_L05.json (65 ประเด็น · หน้า 18, 22 ❌ คณะ ไม่ออก)
   ทำใหม่ทั้งเฉลยแบบ 78/Gen Sx ตามต้นแบบ L28 (ผู้ใช้สั่ง 26 พ.ย. 2026 — Subspe เท่านั้น ไม่แตะ data/unit_L05.js ของ Gen Sx) · ทำใหม่แล้ว {len(done)}/150 · ประกอบด้วย parts/asm_L05.py จาก parts/fill/l05_r*.json + parts/L05_orig.json
   ไฟล์: __L05_Basic_plastic_surgery_jod.pdf (41 หน้า สไลด์ + ไฮไลต์ + ลายมือ, หน้า 39–41 ภาพถ่ายจอ) · case-based ทุกข้อ · คำตอบ A–E ละ 30 · kimg = img/l05_p<N>.jpg · notes = parts/notes_L05_pages.py · รูปโจทย์ img/l05_q<n>.jpg */
'''
U={k:v for k,v in orig.items() if k!='QB'}|{"QB":QB}
open('data_subspe/unit_L05.js','w',encoding='utf-8').write(head+'W.UNIT.push('+json.dumps(U,ensure_ascii=False)+');\n')
print(json.dumps({"rewritten":len(done),"done":done[:3]+['…']+done[-3:] if len(done)>6 else done,"dist":dist},ensure_ascii=False))

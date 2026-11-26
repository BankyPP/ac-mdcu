#!/usr/bin/env python3
"""ประกอบ data_subspe/unit_L28.js จาก parts/fill/l28_q*.json (dict "n" → ข้อเต็ม) + รายงานแผน parts/PLAN_L28.json
python3 parts/asm_L28.py   (รันจาก root ของ repo)"""
import glob,json,re,os
Q={}
for f in sorted(glob.glob('parts/fill/l28_q*.json')):
    for k,v in json.load(open(f,encoding='utf-8')).items():
        assert k not in Q,(k,f); v['n']=int(k); Q[int(k)]=v
plan=json.load(open('parts/PLAN_L28.json',encoding='utf-8'))
esc=lambda s: re.sub(r'<(?![a-zA-Z/])','&lt;',s)
def E(o):
    if isinstance(o,str): return esc(o)
    if isinstance(o,list): return [E(x) for x in o]
    if isinstance(o,dict): return {k:E(v) for k,v in o.items()}
    return o
QB=[]
for n in sorted(Q):
    q=E(Q[n]); want='ABCDE'.index(plan['ans'][str(n)])
    assert q['ans']==want,(n,'ans',q['ans'],want)
    assert len(q['opts'])==5 and set(q['wrong'])==set('ABCDE')-{'ABCDE'[q['ans']]},(n,'wrong keys')
    order=['n','stem','opts','ans','notes','kimg','src','tags','interp','why','wrong','trap','summary','opinion','mnemonic','guide','variants']
    blob=json.dumps(q,ensure_ascii=False)
    for b in ('นอกสไลด์','ถ้าโจทย์','คนนี้','ผู้ป่วยรายนี้','รายเดียวกัน'):
        assert b not in blob,(n,'BAD',b)
    assert not re.search(r'ดูข้อ \d|\(ข้อ \d',blob),(n,'ref')
    for k in ('mnemonic','guide','opinion'): assert q.get(k),(n,k)
    for im in q['kimg']:
        p=im.split('_p')[1]; assert f'สไลด์หน้า {p} ' in q['notes'],(n,'notes ต้องยกตัวพิมพ์ครบทุกหน้าใน kimg',p)
    assert 'ลายมือ' in q['notes'],(n,'notes ต้องบอกลายมือ')
    assert 5<=len(q['summary'])<=7 and 3<=len(q['variants'])<=4,(n,'S/V count')
    QB.append({k:q[k] for k in order if k in q}|{k:v for k,v in q.items() if k not in order})
done=set(Q)
rep={"written":len(done),"pages_without_question":[],"under":[],"dist":{}}
pages={}
for pid,p in plan['points'].items():
    got=[n for n in p['asked'] if n in done]
    for pg in p['pages']: pages.setdefault(pg,0); pages[pg]+=len(got)
    need=2 if p['level']=='M' else 1
    if len(got)<need: rep['under'].append(pid)
rep['pages_without_question']=[pg for pg,c in sorted(pages.items()) if c==0]
for q in QB: k='ABCDE'[q['ans']]; rep['dist'][k]=rep['dist'].get(k,0)+1
plan['report']=rep; json.dump(plan,open('parts/PLAN_L28.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
head=f'''/* Unit round — L28 Emergency in pediatric surgery · term (ผู้ใช้สั่ง 26 พ.ย. 2026) · 150 ข้อ ตามแผนครอบคลุม parts/PLAN_L28.json (63 ประเด็น: ต้องรู้ 53 × 2–3 รอบ · รอง 10 × 1 รอบ · ทุกหน้าที่มีเนื้อหา ≥ 1 ข้อ) · เขียนแล้ว {len(QB)}/150 · รูปแบบเฉลย = แบบ 78/Gen Sx (kit/มาตรฐานเฉลย-แบบ78-GenSx.md · 26 พ.ย. 2026)
   ไฟล์: __L28_Emergency_in_pediatric_surgery___main.pdf (33 หน้า สไลด์ ไม่มีลายมือ/ไฮไลต์ · ไม่มีสัญลักษณ์คณะ) · case-based ทุกข้อ · คำตอบ A–E ละ 30 · kimg = img/l28_p<N>.jpg · โจทย์หลอก ~21 ข้อ · ประกอบด้วย parts/asm_L28.py จาก parts/fill/l28_q*.json */
'''
U={"id":"L28","title":"L28 Emergency in pediatric surgery","short":"L28","src":"__L28_Emergency_in_pediatric_surgery___main.pdf (33 หน้า สไลด์ ไม่มีลายมือ · Chatdow Choungboonsri, MD)","topic":"Pediatric surgery","tags":["Pediatric surgery"],"QB":QB}
open('data_subspe/unit_L28.js','w',encoding='utf-8').write(head+'W.UNIT.push('+json.dumps(U,ensure_ascii=False)+');\n')
print(json.dumps(rep,ensure_ascii=False))

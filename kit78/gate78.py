# python3 kit78/gate78.py /tmp/all_<DIR>.json parts/explain/<DIR>/zqNN.json [...]   → ต้องได้ OK 0 ก่อน ship
# ตรวจแพตช์ใหม่ตามมาตรฐาน Subspe 78 (kit/มาตรฐานเฉลย-แบบ78-GenSx.md) — ด่านเดียวกับ tools/explain_quality.js DEPTH78 ที่ build บังคับ
import json,re,sys
A=json.load(open(sys.argv[1]))
T=lambda s:re.sub(r'\s+',' ',re.sub('<[^>]+>','',s if isinstance(s,str) else ' '.join(s or []))).replace('&lt;','<').replace('&gt;','>').replace('&amp;','&').strip()
BAN=re.compile(r'นอกสไลด์|ถ้าโจทย์|จะถูกถ้า\s*คำถาม|ผู้ป่วยรายนี้|คนไข้รายนี้|ดูข้อ\s*\d')
OKF={'interp','why','wrong','trap','summary','opinion','variants','mnemonic','guide','notes','kimg','src'}
L='ABCDEFGH';err=[]
for p in sys.argv[2:]:
  for k,v in json.load(open(p)).items():
    e=lambda m:err.append(f'{p.split("/")[-1]} {k}: {m}')
    if k not in A:e('ไม่มีข้อนี้ในวอร์ด (key ผิด)');continue
    if set(v)-OKF:e(f'ฟิลด์ไม่รู้จัก {set(v)-OKF}')
    q=dict(A[k]);w=dict(q.get('wrong') or {});w.update(v.get('wrong') or {});q.update(v);q['wrong']=w
    need={L[i] for i in range(len(q.get('opts') or []))}-{L[q['ans']]} if q.get('opts') else set()
    if need and set(w)!=need:e(f'wrong ต้องมีช้อย {sorted(need)} พอดี (มี {sorted(w)})')
    for f in ('interp','why','trap','opinion','mnemonic','guide'):
      if not T(q.get(f)):e('ขาด '+f)
    for f,m in (('interp',120),('why',350),('trap',130),('opinion',120)):
      if T(q.get(f)) and len(T(q.get(f)))<m:e(f'{f} สั้น {len(T(q.get(f)))}<{m}')
    for c,t in w.items():
      if len(T(t))<110:e(f'wrong {c} สั้น {len(T(t))}<110')
      if not re.search('จะถูก|ไม่มีสถานการณ์|ข้อความถูก',T(t)):e(f'wrong {c} ไม่มี "จะถูกถ้า…" / "ไม่มีสถานการณ์ใด…" / "ข้อความถูก:"')
    sm=q.get('summary') or [];vr=q.get('variants') or []
    if len(sm)<5 or sum(len(T(x)) for x in sm)<550:e(f'summary {len(sm)} bullet รวม {sum(len(T(x)) for x in sm)} (ต้อง ≥5 · ≥550)')
    if len(vr)<4 or sum(len(T(x)) for x in vr)<300:e(f'variants {len(vr)} ข้อ รวม {sum(len(T(x)) for x in vr)} (ต้อง ≥4 · ≥300)')
    if 'why' in v and not re.search('ไฟล์|คีย์|สไลด์|ชีท|ลายมือ',v['why']):e('why ต้องจบด้วยสิ่งที่ไฟล์/คีย์เขียน')
    if re.search('คีย์.*(ไม่ตรง|ต่าง)|Claude ตอบ',T(q.get('key'))+T(q.get('notes'))) and 'คีย์' not in T(q.get('opinion'))+T(q.get('trap')):e('คำตอบเว็บ ≠ คีย์ แต่ opinion/trap ไม่บอกคีย์')
    b=BAN.findall(json.dumps({f:v.get(f) for f in OKF-{'notes','kimg','src'}},ensure_ascii=False))
    if b:e(f'คำต้องห้าม {sorted(set(b))}')
print('\n'.join(err) if err else 'OK',len(err))

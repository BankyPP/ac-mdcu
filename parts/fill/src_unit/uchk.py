# python3 uchk.py L22 parts/fill/l22_r02.json   (รันจาก /home/claude/ac-mdcu) — ตรวจเฉพาะข้อในไฟล์นั้น · ต้องได้ OK
import json,re,sys
L=sys.argv[1];l=L.lower();R='/home/claude/ac-mdcu/'
O={q['n']:q for q in json.load(open(R+f'parts/{L}_orig.json'))['QB']}
T=lambda x:re.sub(r'<[^>]+>','',x if isinstance(x,str) else ' '.join(x))
BAD=('นอกสไลด์','ถ้าโจทย์','คนนี้','ผู้ป่วยรายนี้','คนไข้รายนี้','รายเดียวกัน','จะถูกถ้าถาม','จะถูกถ้าคำถาม','ในบทนี้','นักศึกษา')
G=dict(interp=100,why=500,wrong=110,trap=100,summary=350,opinion=150,variants=240)
err=[]
for f in sys.argv[2:]:
  for k,q in json.load(open(f)).items():
    n=int(k);o=O[n];e=lambda m:err.append(f'{n}: {m}')
    if q['ans']!=o['ans']:e('ans เปลี่ยน')
    a=q['ans'];Lx=[len(x) for x in q['opts']]
    if len(q['opts'])!=5:e('opts ต้อง 5')
    elif Lx[a]>=max(Lx[i] for i in range(5) if i!=a):e(f'ช้อยถูกยาวสุด/เท่า {Lx}')
    if any(re.search(r'[()/]|e\.g\.',x) for x in q['opts']):e('ช้อยมีวงเล็บ / หรือ e.g.')
    if re.search(r'\b(lectures?|slides?|class|students?|tutor\w*|handout)\b',q['stem']+' '.join(q['opts']),re.I):e('stem/opts พูดถึง lecture/slide/class/student')
    if set(q['wrong'])!=set('ABCDE')-{'ABCDE'[a]}:e('wrong keys')
    nb={x:v for x,v in q.items() if x!='notes'} if L=='L23' else q
    blob=json.dumps(nb,ensure_ascii=False)
    for b in BAD:
      if b in blob:e('คำต้องห้าม '+b)
    if re.search(r'ดูข้อ \d|\(ข้อ \d|ข้อ \d+ ',blob.replace(q['notes'],'')):e('อ้างเลขข้อ')
    for x in ('mnemonic','guide','opinion','interp','why','trap'):
      if not q.get(x):e('ขาด '+x)
    for c,w in q['wrong'].items():
      if 'จะถูกถ้า' not in w and 'ไม่มีสถานการณ์ใด' not in w and 'ข้อความถูก' not in w:e(f'wrong {c} ไม่มี จะถูกถ้า/ไม่มีสถานการณ์ใด/ข้อความถูก')
      if len(T(w))<G['wrong']:e(f'wrong {c} สั้น {len(T(w))}<{G["wrong"]}')
    for im in q['kimg']:
      p=im.split('_p')[1];lab='ชีทหน้า' if f'{l}s_' in im else 'สไลด์หน้า'
      if f'{lab} {p} ' not in q['notes']:e('notes ไม่มีหน้า '+im)
      if L=='L22' and im.startswith('l22_p') and p in('51','52','53'):e('หน้า 51–53 ❌ คณะ')
    if 'ลายมือ' not in q['notes'] or 'สัญลักษณ์คณะ' not in q['notes']:e('notes ไม่บอกลายมือ/สัญลักษณ์คณะ')
    if not q['why'].rstrip().endswith('</b>'):e('why ต้องจบด้วยคำบนสไลด์/ชีทตัวหนา')
    for p in re.findall(r'สไลด์หน้า (\d+)',q['why']+q['opinion']):
      if f'{l}_p{p}' not in q['kimg']:e('why/opinion อ้างสไลด์หน้า '+p+' ที่ไม่อยู่ใน kimg')
    for p in re.findall(r'ชีท(?: อ\.\S+)?หน้า (\d+)',q['why']+q['opinion']):
      if f'{l}s_p{p}' not in q['kimg']:e('why/opinion อ้างชีทหน้า '+p+' ที่ไม่อยู่ใน kimg')
    if not(5<=len(q['summary'])<=7):e('summary ต้อง 5–7 bullet')
    if not(3<=len(q['variants'])<=4):e('variants ต้อง 3–4')
    for fl in ('interp','why','trap','opinion'):
      if len(T(q[fl]))<G[fl]:e(f'{fl} สั้น {len(T(q[fl]))}<{G[fl]}')
    for fl in ('summary','variants'):
      s=sum(len(T(x)) for x in q[fl])
      if s<G[fl]:e(f'{fl} รวมสั้น {s}<{G[fl]}')
print('\n'.join(err) if err else 'OK',len(err))

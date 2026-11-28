# python3 echk.py zz76_01   (ตรวจไฟล์ /home/claude/ac-mdcu/parts/explain/data_subspe/zz76_01.json เทียบรายการ /home/claude/h/u/e/76_01.json)
import json,re,sys
n=sys.argv[1];y,b=n[2:4],n[5:]
A=json.load(open('/home/claude/h/all.json'))
P=json.load(open(f'/home/claude/ac-mdcu/parts/explain/data_subspe/{n}.json'))
want=json.load(open(f'/home/claude/h/u/e/{y}_{b}.json'))
T=lambda s:re.sub('<[^>]+>','',s if isinstance(s,str) else ' '.join(s or []))
BAD=re.compile(r'นอกสไลด์|ถ้าโจทย์|จะถูกถ้า\s*คำถาม|ผู้ป่วยรายนี้|คนไข้รายนี้|ดูข้อ\s*\d')
OKF={'interp','why','wrong','trap','summary','opinion','variants','mnemonic','guide'}
err=[]
miss=set(want)-set(P);extra=set(P)-set(want)
if miss:err.append(('ยังไม่ได้ทำ',sorted(miss)))
if extra:err.append(('key เกิน',sorted(extra)))
for k,v in P.items():
  if k not in A:continue
  if set(v)-OKF:err.append((k,'ฟิลด์ไม่รู้จัก',set(v)-OKF))
  q=dict(A[k]);q.update(v)
  if 'wrong' in v:
    if set(v['wrong'])!=set(A[k].get('wrong') or {}):err.append((k,'wrong keys ไม่ตรงของเดิม'))
    w=dict(A[k].get('wrong') or {});w.update(v['wrong']);q['wrong']=w
  if BAD.search(json.dumps(v,ensure_ascii=False)):err.append((k,'คำต้องห้ามในข้อความใหม่',BAD.findall(json.dumps(v,ensure_ascii=False))))
  if len(T(q.get('interp')))<120:err.append((k,'interp<120'))
  if len(T(q.get('why')))<350:err.append((k,'why<350'))
  if 'why' in v and 'ไฟล์' not in v['why'] and 'คีย์' not in v['why']:err.append((k,'why ต้องจบด้วยสิ่งที่ไฟล์/คีย์เขียน'))
  if len(T(q.get('trap')))<130:err.append((k,'trap<130'))
  sm=q.get('summary') or []
  if len(sm)<5 or sum(len(T(x)) for x in sm)<550:err.append((k,'summary<5/550'))
  if len(T(q.get('opinion')))<120:err.append((k,'opinion<120'))
  vr=q.get('variants') or []
  if len(vr)<4 or sum(len(T(x)) for x in vr)<300:err.append((k,'variants<4/300'))
  for l,t in (q.get('wrong') or {}).items():
    if len(T(t))<110:err.append((k,l,'wrong<110'))
print('\n'.join(map(str,err)) if err else 'OK',len(err))

# python3 kit78/pk.py /tmp/all_<DIR>.json <key> [<key> …]   หรือ   --patch parts/explain/<DIR>/zqNN.json
# พิมพ์โจทย์ ช้อย (* = คำตอบเว็บ) KEY (ที่ไฟล์เฉลยเขียน) GRAY (ตัวพิมพ์ในไฟล์) NOTES (ถอดจากไฟล์) แบบย่อ สำหรับเขียนเฉลย
import json,sys,re
A=json.load(open(sys.argv[1]));T=lambda x:re.sub(r'<[^>]+>','',x if isinstance(x,str) else json.dumps(x or '',ensure_ascii=False))
ks=list(json.load(open(sys.argv[3]))) if sys.argv[2]=='--patch' else sys.argv[2:]
for k in ks:
  q=A[k];print('\n###',k,'| file',q.get('file'),'p',q.get('page'),'| img',q.get('img'),'| kimg',q.get('kimg'))
  print('S:',T(q.get('stem')))
  for i,o in enumerate(q.get('opts') or []):print(' ','*' if i==q.get('ans') else ' ','ABCDEFGH'[i]+'.',T(o))
  for f in ('key','gray','notes'):print(f.upper()+':',T(q.get(f))[:1500])

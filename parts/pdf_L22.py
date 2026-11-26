# PDF ให้ผู้ใช้ตรวจ (ฟอนต์ Kanit/Sarabun): mkdir -p /tmp/fs && cd /tmp/fs && npm pack -s @fontsource/kanit @fontsource/sarabun && for t in *.tgz; do tar xzf $t && mv package ${t%%-[0-9]*}; done
# ใช้: python3 parts/pdf_L22.py 1,2 out.pdf   (รันจาก root repo)
import json,base64,sys
import os
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+'/'
F='/tmp/fs/'
nums=sys.argv[1].split(','); out=sys.argv[2]
Q={}
import glob
for f in glob.glob(R+'parts/fill/l22_r*.json'): Q.update(json.load(open(f,encoding='utf-8')))
def ff(fam,file,w,st='normal'):
    b=base64.b64encode(open(F+file,'rb').read()).decode()
    return f"@font-face{{font-family:{fam};src:url(data:font/woff2;base64,{b}) format('woff2');font-weight:{w};font-style:{st}}}"
css=''.join([ff('Kanit',f'fontsource-kanit/files/kanit-{s}-{w}-normal.woff2',w) for w in (400,500,600,700) for s in ('thai','latin')]
 +[ff('Sarabun',f'fontsource-sarabun/files/sarabun-{s}-{w}-{st}.woff2',w,st) for w in (400,700) for st in ('normal','italic') for s in ('thai','latin')])
css+="""
body{font-family:Sarabun;font-size:11.5pt;line-height:1.55;color:#222;margin:0}
h1,h2,h3,.lab,.num,.tag{font-family:Kanit}
h1{font-size:18pt;font-weight:600;margin:0 0 4px}
.sub{color:#666;font-size:10pt;margin-bottom:14px}
.q{page-break-before:always}
.q:first-of-type{page-break-before:auto}
.num{display:inline-block;background:#1f4e79;color:#fff;font-weight:600;padding:2px 10px;border-radius:6px;font-size:12pt}
.tag{display:inline-block;margin-left:6px;font-size:9.5pt;padding:1px 8px;border-radius:10px;background:#eee;color:#444;font-weight:500}
.stem{font-size:12.5pt;margin:10px 0 6px}
ol.op{list-style:upper-alpha;margin:4px 0 12px 22px;padding:0}
ol.op li{margin:2px 0}
ol.op li.ok{font-weight:700;color:#1b6e2e}
.box{border:1px solid #d9d9d9;border-radius:8px;padding:8px 12px;margin:8px 0;page-break-inside:auto}
.lab{font-weight:600;font-size:11pt;color:#1f4e79;margin-bottom:3px}
.yel{background:#fff8dc;border-color:#f0d878}
.wr p{margin:3px 0}
ul{margin:2px 0 2px 18px;padding:0}
.notes{font-size:10.5pt}
img.sl{width:48%;margin:4px 1% 4px 0;border:1px solid #ccc;border-radius:4px;vertical-align:top}
.src{color:#777;font-size:9.5pt}
"""
L='ABCDE'
def sec(lab,body,cls=''):return f'<div class="box {cls}"><div class="lab">{lab}</div>{body}</div>'
h=[f'<html><head><meta charset="utf-8"><style>{css}</style></head><body>']
for n in nums:
    q=Q[n]; a=q['ans']; words=len(q['stem'].split())
    imgs=''.join(f'<img class="sl" src="data:image/jpeg;base64,{base64.b64encode(open(R+"img/"+k+".jpg","rb").read()).decode()}">' for k in q['kimg'])
    h.append(f'<div class="q"><h1>L22 Skin and Subcutaneous Tissue</h1><div class="sub">Unit round · ตัวอย่างให้ตรวจ</div>')
    h.append(f'<span class="num">ข้อ {n}</span><span class="tag">โจทย์ {words} คำ</span><span class="tag">เฉลย {L[a]}</span>')
    if q.get('img'): h.append(f'<img class="sl" src="data:image/jpeg;base64,{base64.b64encode(open(R+"img/"+q["img"]+".jpg","rb").read()).decode()}">')
    h.append(f'<div class="stem">{q["stem"]}</div><ol class="op">'+''.join(f'<li class="{"ok" if i==a else ""}">{o}</li>' for i,o in enumerate(q['opts']))+'</ol>')
    h.append(sec('ตีความโจทย์',q['interp']))
    h.append(sec(f'ทำไมตอบ {L[a]}',q['why'],'yel'))
    h.append(sec('ช้อยอื่นผิดเพราะ','<div class="wr">'+''.join(f'<p><b>{k}.</b> {v}</p>' for k,v in sorted(q['wrong'].items()))+'</div>'))
    h.append(sec('จุดหลอก',q['trap']))
    h.append(sec('สรุป','<ul>'+''.join(f'<li>{s}</li>' for s in q['summary'])+'</ul>'))
    h.append(sec('ความเห็น',q['opinion']))
    h.append(sec('ทริคจำ',q['mnemonic']))
    h.append(sec('อ้างอิง',q['guide']))
    h.append(sec('โจทย์แบบอื่น','<ul>'+''.join(f'<li>{s}</li>' for s in q['variants'])+'</ul>'))
    h.append(sec('ข้อความในสไลด์ (notes)',f'<div class="notes">{q["notes"]}</div>'))
    h.append(sec('รูปสไลด์ที่อ้าง',imgs+f'<div class="src">{q["src"]}</div>'))
    h.append('</div>')
h.append('</body></html>')
open('/tmp/q.html','w',encoding='utf-8').write(''.join(h))
os.system(f'google-chrome --headless --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="{out}" /tmp/q.html')

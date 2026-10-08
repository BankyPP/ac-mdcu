#!/usr/bin/env python3
"""Build the MCQ platform: template.html + config.json + core.js + img/ + data/data_b*.js -> out/index.html (+ out/img/)."""
import glob, json, os, shutil, html, sys
ROOT=os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
OUT=sys.argv[1] if len(sys.argv)>1 else os.path.join(ROOT,'out')
tpl=open('template.html',encoding='utf-8').read()
cfg=json.load(open('config.json',encoding='utf-8'))
parts=[open('core.js',encoding='utf-8').read()]
imgs={os.path.splitext(os.path.basename(f))[0]:'img/'+os.path.basename(f) for f in sorted(glob.glob('img/*.jpg')+glob.glob('img/*.png'))}
if imgs: parts.append('Object.assign(IMGS,'+json.dumps(imgs)+');')
parts.append('const CONFIG='+json.dumps(cfg,ensure_ascii=False)+';')
def num(f):
    b=os.path.basename(f)[6:-3]
    return int(b) if b.isdigit() else 10**9
for f in sorted(glob.glob('data/data_b*.js'),key=num):
    parts.append(open(f,encoding='utf-8').read())
if os.path.exists('fixes.js'): parts.append(open('fixes.js',encoding='utf-8').read())
out=tpl.replace('/*DATA*/','\n'.join(parts),1)
out=out.replace('/*TITLE*/',html.escape(cfg.get('title','คลังข้อสอบเก่า MCQ')),1)
out=out.replace('/*BRAND*/',html.escape(cfg.get('brand','AC MCQ')),1).replace('/*SUB*/',html.escape(cfg.get('sub','คลังข้อสอบเก่า')),1)
os.makedirs(os.path.join(OUT,'img'),exist_ok=True)
open(os.path.join(OUT,'index.html'),'w',encoding='utf-8').write(out)
for f in imgs.values(): shutil.copy(f,os.path.join(OUT,f))
print('built',os.path.join(OUT,'index.html'),len(out),'bytes,',len(imgs),'images')

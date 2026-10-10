#!/usr/bin/env python3
"""Build the website: template.html (look) + site/ (app) + config.json + each ward's data → docs/index.html (+ docs/img/).
python3 build_site.py [outdir]   (default: docs)
Each ward in config.json "wards" has "dir": its data folder holding data_b*.js (one file per set) optional unit_*.js (Unit round banks) and optional highyield.js
(sets W.HY = {topics:[{title, points:[…], refs:[rid…], rep}], keywords:[{k, v, refs:[rid…]}]})."""
import glob, json, os, shutil, html, sys, re
ROOT=os.path.dirname(os.path.abspath(__file__)); os.chdir(ROOT)
ARGS=[a for a in sys.argv[1:] if not a.startswith('--')]
PACK='--pack' in sys.argv      # Claude artifact build: an artifact version holds at most ~510 files, so images are stacked into a few sprite sheets per prefix
OUT=ARGS[0] if ARGS else os.path.join(ROOT,'docs')
tpl=open('template.html',encoding='utf-8').read()
cfg=json.load(open('config.json',encoding='utf-8'))
head=tpl[:tpl.index('</style>')]                                   # doctype … platform CSS
body=open('site/body.html',encoding='utf-8').read()
title=cfg.get('siteName') or cfg.get('title','คลังข้อสอบเก่า')
imgs={os.path.splitext(os.path.basename(f))[0]:'img/'+os.path.basename(f) for f in sorted(glob.glob('img/*.jpg')+glob.glob('img/*.png'))}
def num(f):
    b=os.path.basename(f)[6:-3]
    return int(b) if b.isdigit() else 10**9
packs={}
if PACK:
    from PIL import Image
    groups={}
    for k in imgs: groups.setdefault(re.sub(r'_[^_]*$','',k),[]).append(k)
    os.makedirs(os.path.join(OUT,'img'),exist_ok=True)
    for g,ks in sorted(groups.items()):
        ims=[(k,Image.open(imgs[k]).convert('RGB')) for k in ks]
        sheets=[[]];h=0
        for k,im in ims:
            if h+im.height>30000 and sheets[-1]: sheets.append([]);h=0
            sheets[-1].append((k,im));h+=im.height
        for si,sh in enumerate(sheets):
            W=max(im.width for _,im in sh);H=sum(im.height for _,im in sh)
            c=Image.new('RGB',(W,H),'white');y=0;fn='img/pk_%s_%d.jpg'%(g,si)
            for k,im in sh:
                c.paste(im,(0,y));packs[k]={'p':fn,'w':im.width,'h':im.height,'W':W,'H':H,'y':y};y+=im.height
            c.save(os.path.join(OUT,fn),quality=82,optimize=True,progressive=True)
    imgs={k:packs[k] for k in imgs}
js=['const IMGS={};const WARDS={};']
if imgs: js.append('Object.assign(IMGS,'+json.dumps(imgs)+');')
js.append('const CONFIG='+json.dumps(cfg,ensure_ascii=False)+';')
import datetime
js.append('const BUILD='+json.dumps(datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=7))).strftime('%d/%m/%Y %H:%M'))+';')
total=0
for w in cfg.get('wards',[]):
    wid=json.dumps(w['id']); d=w.get('dir','data')
    js.append(f'WARDS[{wid}]={{QB:[],HY:null}};')
    for f in sorted(glob.glob(os.path.join(d,'data_b*.js')),key=num):
        js.append('(function(QB){\n'+open(f,encoding='utf-8').read()+'\n})(WARDS['+wid+'].QB);')
    fx=os.path.join(d,'fixes.js') if d!='data' else 'fixes.js'
    if os.path.exists(fx): js.append('(function(QB){\n'+open(fx,encoding='utf-8').read()+'\n})(WARDS['+wid+'].QB);')
    for f in sorted(glob.glob(os.path.join(d,'unit_*.js'))):     # Unit round banks: W.UNIT.push({id,title,short,src,QB:[…]})
        js.append('(function(W){W.UNIT=W.UNIT||[];\n'+open(f,encoding='utf-8').read()+'\n})(WARDS['+wid+']);')
    for extra in ('topics.js','resources.js','dups.js','tags.js'):     # W.TOPIC={"set|ro|orig":"topic"} · W.RES=[{topic,title,type,url,note}] (Advisor round)
        fp=os.path.join(d,extra)
        if os.path.exists(fp): js.append('(function(W){\n'+open(fp,encoding='utf-8').read()+'\n})(WARDS['+wid+']);')
    hy=os.path.join(d,'highyield.js')
    if os.path.exists(hy): js.append('(function(W){\n'+open(hy,encoding='utf-8').read()+'\n})(WARDS['+wid+']);')
out=(head+'</style>\n<style>\n'+open('site/extra.css',encoding='utf-8').read()+'</style>\n</head>\n<body>\n'
     +body.replace('/*TITLE*/',html.escape(title))
     +'\n<script>\n'+'\n'.join(js)+'\n</script>\n<script>\n'+open('site/app.js',encoding='utf-8').read()+'\n</script>\n</body>\n</html>\n')
out=re.sub(r'<title>.*?</title>','<title>'+html.escape(cfg.get('title',title))+'</title>',out,count=1,flags=re.S)
os.makedirs(os.path.join(OUT,'img'),exist_ok=True)
open(os.path.join(OUT,'index.html'),'w',encoding='utf-8').write(out)
open(os.path.join(OUT,'.nojekyll'),'w').close()
if not PACK:
    for f in imgs.values(): shutil.copy(f,os.path.join(OUT,f))
print('built',os.path.join(OUT,'index.html'),len(out.encode()),'bytes,',len(imgs),'images'+(' in %d sprite sheets'%len(set(v['p'] for v in packs.values())) if PACK else ''))

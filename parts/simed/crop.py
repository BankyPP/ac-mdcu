#!/usr/bin/env python3
"""ครอปหน้า PDF ลง si/img/<name>.jpg (เว็บ SI เท่านั้น ห้ามเขียนลง img/ ของ MDCU)
python3 parts/simed/crop.py <pdf> <page> <y0> <y1> <name> [x0 x1] [--dpi 200] [--w 760] [--q 64] [--force]
y/x = จุด PDF นับจากซ้ายบน · รูปโจทย์ q<code>_<n> ใช้ --w 700 --q 72 · รูปเฉลย k<code>_<n> ใช้ค่าเริ่มต้น 760/64
ต่อรูปแนวตั้งหลายช่วง: python3 parts/simed/crop.py --stack <name> <a.jpg> <b.jpg> ..."""
import sys,os,re,subprocess,tempfile
from PIL import Image
OUT=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..','si','img')
av=sys.argv[1:]
def opt(n,d):
    if n in av:
        i=av.index(n);v=av[i+1];del av[i:i+2];return type(d)(v)
    return d
force='--force' in av
if force: av.remove('--force')
W=opt('--w',760);Q=opt('--q',64);dpi=opt('--dpi',200)
def save(c,name):
    if not re.fullmatch(r'[a-z0-9_]+',name): sys.exit('bad name '+name)
    p=os.path.join(OUT,name+'.jpg')
    if os.path.exists(p) and not force: sys.exit('exists (ใช้ --force ได้เฉพาะรูปของตัวเอง): '+p)
    if c.width>W: c=c.resize((W,round(c.height*W/c.width)),Image.LANCZOS)
    c.save(p,quality=Q,optimize=True,progressive=True);print(name,c.size,os.path.getsize(p)//1024,'KB')
if av[0]=='--stack':
    name=av[1];ims=[Image.open(f).convert('RGB') for f in av[2:]];w=max(i.width for i in ims)
    c=Image.new('RGB',(w,sum(i.height for i in ims)),'white');y=0
    for i in ims:c.paste(i,(0,y));y+=i.height
    save(c,name);sys.exit()
pdf,page,y0,y1,name=av[0],int(av[1]),float(av[2]),float(av[3]),av[4]
x0,x1=(float(av[5]),float(av[6])) if len(av)>=7 else (None,None)
with tempfile.TemporaryDirectory() as d:
    subprocess.run(['pdftoppm','-r',str(dpi),'-f',str(page),'-l',str(page),'-jpeg','-jpegopt','quality=92',pdf,d+'/p'],check=True,stderr=subprocess.DEVNULL)
    im=Image.open(os.path.join(d,os.listdir(d)[0])).convert('RGB')
s=dpi/72;c=im.crop((int((x0 or 0)*s),int(max(0,y0)*s),int(x1*s) if x1 else im.width,int(min(im.height/s,y1)*s)))
save(c,name)

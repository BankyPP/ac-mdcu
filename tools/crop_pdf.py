#!/usr/bin/env python3
"""Crop a region of a PDF page into img/<name>.jpg (max width 1100 px, JPEG q82).
usage: python3 tools/crop_pdf.py <pdf> <page> <y0> <y1> <name> [x0 x1] [--dpi 200]
y/x are in PDF points from the top-left (page height ≈ 792–842). Refuses to overwrite an existing image unless --force.
Name must match [a-z0-9_]+ (MEQ rich text {{IMG:name}} only accepts \\w)."""
import sys, os, re, subprocess, tempfile
from PIL import Image
a=[x for x in sys.argv[1:] if not x.startswith('--')]; force='--force' in sys.argv
dpi=200
if '--dpi' in sys.argv: dpi=int(sys.argv[sys.argv.index('--dpi')+1]); a=[x for x in a if x!=str(dpi)]
pdf,page,y0,y1,name=a[0],int(a[1]),float(a[2]),float(a[3]),a[4]
x0,x1=(float(a[5]),float(a[6])) if len(a)>=7 else (None,None)
if not re.fullmatch(r'[a-z0-9_]+',name): sys.exit('bad name (use [a-z0-9_]+): '+name)
out=os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','img',name+'.jpg')
if os.path.exists(out) and not force: sys.exit('exists (use --force only for your own image): '+out)
with tempfile.TemporaryDirectory() as d:
    subprocess.run(['pdftoppm','-r',str(dpi),'-f',str(page),'-l',str(page),'-jpeg','-jpegopt','quality=92',pdf,d+'/p'],check=True,stderr=subprocess.DEVNULL)
    f=[x for x in os.listdir(d)][0]; im=Image.open(os.path.join(d,f)).convert('RGB')
s=dpi/72; box=(int((x0 or 0)*s),int(max(0,y0)*s),int(x1*s) if x1 else im.width,int(min(im.height/s,y1)*s))
c=im.crop(box)
if c.width>1100: c=c.resize((1100,round(c.height*1100/c.width)),Image.LANCZOS)
c.save(out,quality=82,optimize=True); print('saved',out,c.size)

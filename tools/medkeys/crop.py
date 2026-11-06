import os,re,subprocess,json,sys
from PIL import Image,ImageOps
from lines import lines
U='/mnt/user-data/uploads';IMG='/home/claude/ac-mdcu/img';DPI=150;S=DPI/72
def pdf(tag):return [os.path.join(U,f) for f in os.listdir(U) if f.startswith(tag)][0]
_pg={}
def page(p,n):
    k=(p,n)
    if k not in _pg:
        o=f'/tmp/pg_{os.path.basename(p)[:8]}_{n}'
        if not os.path.exists(o+'.jpg'):
            subprocess.run(['pdftoppm','-r',str(DPI),'-f',str(n),'-l',str(n),'-jpeg','-jpegopt','quality=92','-singlefile',p,o],check=True,stderr=subprocess.DEVNULL)
        _pg[k]=Image.open(o+'.jpg').convert('RGB')
    return _pg[k]
def crop(p,n,y0,y1,name,x0=None,x1=None,minh=14):
    im=page(p,n);W,H=im.size
    box=(int((x0 or 0)*S),max(0,int(y0*S)),int(x1*S) if x1 else W,min(H,int(y1*S)))
    if box[3]-box[1]<minh:return None
    c=im.crop(box);g=ImageOps.invert(c.convert('L')).point(lambda v:255 if v>14 else 0);bb=g.getbbox()
    if not bb or bb[3]-bb[1]<minh:return None
    pad=8;bb=(max(0,bb[0]-pad),max(0,bb[1]-pad),min(c.width,bb[2]+pad),min(c.height,bb[3]+pad));c=c.crop(bb)
    if c.width>760:c=c.resize((760,round(c.height*760/c.width)),Image.LANCZOS)
    c.save(os.path.join(IMG,name+'.jpg'),quality=70,optimize=True);return name
def anchors(p,pages,xlo,xhi,labels,start=None):
    L=[l for l in lines(p) if l['p'] in pages and xlo<=l['x0']<=xhi];L.sort(key=lambda l:(pages.index(l['p']),l['y0']))
    if start:L=[l for l in L if (pages.index(l['p']),l['y0'])>=(pages.index(start[0]),start[1]-1)]
    out={};i=0
    for lab in labels:
        num=re.match(r'\d+',lab).group(0)
        if lab in out:continue
        j=i
        while j<len(L):
            m=re.match(r'^\s*(\d{1,3})(?:\s*[\.\)]|\s|$)',L[j]['t'])
            if m and m.group(1)==num:break
            j+=1
        if j<len(L):out[lab]=(L[j]['p'],L[j]['y0']);i=j+1
    return out
def regions(pages,starts,end):
    """starts: ordered list of (key,(p,y)); end (p,y) → {key:[(p,y0,y1)…]}"""
    R={}
    for i,(k,(p,y)) in enumerate(starts):
        np_,ny=starts[i+1][1] if i+1<len(starts) else end
        seg=[];pi=pages.index(p);ni=pages.index(np_)
        if pi==ni:seg.append((p,y-6,ny-4))
        else:
            seg.append((p,y-6,2000))
            for q in pages[pi+1:ni]:seg.append((q,0,2000))
            seg.append((np_,0,ny-4))
        R[k]=seg
    return R

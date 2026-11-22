from PIL import Image, ImageDraw, ImageFont
import os
W=1100
def save(im,name,maxw=W):
    if im.width>maxw: im=im.resize((maxw,round(im.height*maxw/im.width)),Image.LANCZOS)
    im.convert('RGB').save(f'out/subr03_{name}.jpg',quality=82,optimize=True)
def crop(src,box,name,scale):
    im=Image.open(src); x0,y0,x1,y1=[round(v*scale) for v in box]
    save(im.crop((x0,y0,x1,y1)),name)
s1=1755/936
C1=[('hi/f1-1.jpg',(38,176,897,537),'f1sut1'),('hi/f1-1.jpg',(38,535,897,1003),'f1sut2'),('hi/f1-1.jpg',(180,1062,752,1212),'f1ret'),
    ('hi/f1-2.jpg',(38,136,896,382),'f1fc1'),('hi/f1-2.jpg',(38,382,896,672),'f1fc2'),('hi/f1-2.jpg',(38,672,896,895),'f1fc3'),('hi/f1-2.jpg',(38,955,896,1148),'f1sc'),
    ('hi/f1-3.jpg',(38,52,896,477),'f1rt'),('hi/f1-3.jpg',(55,518,880,718),'f1lap'),('hi/f1-3.jpg',(38,762,900,980),'f1oth'),
    ('hi/f1-4.jpg',(38,78,896,752),'f1tube'),('hi/f1-5.jpg',(38,132,896,442),'f1wound'),('hi/f1-5.jpg',(38,444,896,712),'f1ost')]
for s,b,n in C1: crop(s,b,n,s1)
s2=1391/696
C2=[('hi/f2-1.jpg',(0,78,696,660),'f2clamp'),('hi/f2-1.jpg',(0,668,696,845),'f2scis'),('hi/f2-2.jpg',(0,22,696,145),'f2blade'),
    ('hi/f2-2.jpg',(0,148,696,332),'f2forc'),('hi/f2-2.jpg',(0,333,696,645),'f2retr'),('hi/f2-2.jpg',(0,648,696,898),'f2needle'),
    ('hi/f2-3.jpg',(0,0,696,218),'f2stap'),('hi/f2-3.jpg',(0,218,696,388),'f2suct'),('hi/f2-3.jpg',(0,388,696,568),'f2energy'),('hi/f2-3.jpg',(0,568,696,898),'f2lap')]
for s,b,n in C2: crop(s,b,n,s2)
def mont(pre,nums,name,cols=3,cw=None):
    ims=[Image.open(f'hi/{pre}-{n:02d}.jpg') for n in nums]
    cw=cw or W//cols; ch=round(ims[0].height*cw/ims[0].width)
    rows=(len(ims)+cols-1)//cols
    c=Image.new('RGB',(cw*cols,ch*rows),'white'); d=ImageDraw.Draw(c)
    for i,im in enumerate(ims):
        x,y=(i%cols)*cw,(i//cols)*ch
        c.paste(im.resize((cw,ch),Image.LANCZOS),(x,y)); d.rectangle([x,y,x+cw-1,y+ch-1],outline=(180,180,180))
    save(c,name)
mont('f3',[4,5,6,7,8,9],'s3retr1'); mont('f3',[11,13,14],'s3retr2')
mont('f3',[16,17,18,19,21,23],'s3forc'); mont('f3',[25,26,27,28,29,30],'s3clamp1'); mont('f3',[31,32,33,35,36],'s3clamp2')
mont('f3',[38,39,40,42,43,44],'s3scis'); mont('f3',[46,47,48],'s3suct')
mont('f4',[3],'s4class',1); mont('f4',[16],'s4abs',1); mont('f4',[17],'s4usp',1)
mont('f4',[19,21,22],'s4needle'); mont('f4',[23,25],'s4label',2); mont('f4',[4,5,6,7,8,9],'s4pack1'); mont('f4',[10,11,12,13,14,15],'s4pack2')
mont('f5',[4,5],'s5class',2); mont('f5',[16],'s5abs',1)
mont('f5',[9,10,11,12,13,14,15,7],'s5absorb',2) if False else None
mont('f5',[9,10,11,12,13,14],'s5absorb'); mont('f5',[18,19,20,21,22,15],'s5nonabs')
mont('f5',[23,24,25,26,27,28,29],'s5misc',3)
mont('f5',[34,35,36],'s5size',3); mont('f5',[38,39,40,41,42,43],'s5needle'); mont('f5',[44,45,46,47],'s5tech',2)
print(len(os.listdir('out')))
mont('f4',[23],'s4pkt',1,cw=800); mont('f4',[25],'s4tech',1,cw=800)

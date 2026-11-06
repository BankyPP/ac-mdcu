import sys
from crop import *
def hl(tag,n,frac=0.5):
    p=pdf(tag);im=page(p,n).convert('L');W,H=im.size;px=im.load();ys=[]
    for y in range(H):
        c=sum(1 for x in range(0,W,3) if px[x,y]<120)
        if c*3>frac*W:ys.append(y)
    out=[];
    for y in ys:
        if not out or y-out[-1][-1]>3:out.append([y])
        else:out[-1].append(y)
    return [round(g[0]/S,1) for g in out]
if __name__=='__main__':
    for n in map(int,sys.argv[2].split(',')):print(n,hl(sys.argv[1],n))

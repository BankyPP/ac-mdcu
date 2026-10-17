import pdfplumber,sys,json
src,a,b,out=sys.argv[1],int(sys.argv[2]),int(sys.argv[3]),sys.argv[4]
res={}
with pdfplumber.open(src) as pdf:
  for i in range(a,b+1):
    pg=pdf.pages[i-1]
    res[i]={'chars':[[c['text'],c['fontname'],round(c['x0'],1),round(c['x1'],1),round(c['top'],1)] for c in pg.chars if 'THSarabun' in c['fontname']],
            'imgs':[[round(x['x0'],1),round(x['top'],1),round(x['x1'],1),round(x['bottom'],1),x.get('srcsize')] for x in pg.images]}
    pg.flush_cache();pg.close()
json.dump(res,open(out,'w'))

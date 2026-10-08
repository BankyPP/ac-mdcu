# python3 tools/smoke_site.py [outdir]  → opens the built site (default docs/index.html) in headless Chromium at phone size:
# ward list → each ward's home (rounds, MCQ/MEQ/OSCE tabs) → answers one question per ward that has questions; checks images + JS errors
import asyncio, os, sys, json
from playwright.async_api import async_playwright
OUT=sys.argv[1] if len(sys.argv)>1 else os.path.join(os.path.dirname(__file__),'..','docs')
P='file://'+os.path.abspath(os.path.join(OUT,'index.html'))
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(viewport={'width':390,'height':844}); errs=[]
        pg.on('pageerror',lambda e:errs.append(str(e))); pg.on('dialog',lambda d:asyncio.ensure_future(d.accept()))
        await pg.goto(P); await pg.wait_for_timeout(600)
        wards=await pg.evaluate("Object.keys(WARDS).map(k=>[k,WARDS[k].cfg?WARDS[k].cfg.name:k,WARDS[k].QB.length])")
        print('wards',wards)
        print('missing images',await pg.evaluate("Object.values(WARDS).flatMap(W=>W.QB.flatMap(q=>[].concat(q.img||[],q.kimg||[])).filter(k=>!IMGS[k]))"))
        for wid,name,n in wards:
            await pg.goto(P+'#/'+wid); await pg.wait_for_timeout(300)
            print(wid,'| title:',await pg.inner_text('#brand'),'| rounds',await pg.locator('.round').count())
            for t in ('MEQ','OSCE'):
                await pg.click(f'[data-type="{t}"]'); await pg.wait_for_timeout(100)
                e=pg.locator('.empty'); print('   ',t,'→',(await e.first.inner_text()).replace('\n',' ') if await e.count() else 'content')
            await pg.click('[data-type="MCQ"]')
            if n:
                await pg.goto(P+'#/'+wid+'/service'); await pg.wait_for_timeout(200); await pg.click('#spGo'); await pg.wait_for_timeout(300)
                print('    quiz title:',await pg.inner_text('#brand'))
                await pg.click('.opt >> nth=0'); await pg.click('#confirm'); await pg.wait_for_timeout(300)
                print('    ',(await pg.inner_text('.verdict')).replace('\n',' ')[:80])
        print('errors',errs); await b.close()
asyncio.run(main())

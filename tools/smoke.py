# python3 tools/smoke.py → opens out/index.html in headless Chromium (mobile size), answers a question, checks images + console errors
import asyncio, os, sys
from playwright.async_api import async_playwright
P='file://'+os.path.abspath(os.path.join(os.path.dirname(__file__),'..','out','index.html'))
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(); pg=await b.new_page(viewport={'width':390,'height':844}); errs=[]
        pg.on('pageerror',lambda e:errs.append(str(e)))
        await pg.goto(P); await pg.wait_for_timeout(800)
        n=await pg.evaluate("QB.length"); print('questions',n)
        if n:
            print('order',await pg.evaluate("(()=>{const o=[];let p='';QB.forEach(q=>{const k=q.set+' '+q.ro;if(k!==p){o.push(k+'@'+q.id);p=k;}});return o.join(' | ')})()"))
            print('missing images',await pg.evaluate("QB.flatMap(q=>[].concat(q.img||[],q.kimg||[])).filter(k=>!IMGS[k])"))
            await pg.click('.opt >> nth=0'); await pg.click('#confirm'); await pg.wait_for_timeout(300)
            print((await pg.inner_text('.exp'))[:200].replace('\n',' | '))
            await pg.click('#openSheet'); await pg.wait_for_timeout(200); print('sheet rows',len(await pg.query_selector_all('.srow')))
        print('errors',errs); await b.close()
asyncio.run(main())

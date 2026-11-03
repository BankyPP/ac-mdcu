# python3 parts/asm_u12.py → assemble data/unit_L12.js from parts/u12_part1–4.js + copy cited full pages from /home/claude/fp12
import re,os,shutil
s72=open('data/unit_L07.2.js',encoding='utf-8').read()
fn=s72[s72.index('(function(){'):s72.index('W.UNIT.push')]
head='''/* Unit round — L12 Preoperative & postoperative care · Punthita Aimsupanimitr, MD (Dept of General Surgery, KCMH)
   ต้นฉบับ: L12_Preop_-_Postop_care_78.pdf (48 หน้า, สไลด์ + ลายมือ 78) + L12_Pre_and_Post-Operative_Care_jod.pdf (44 หน้า, สไลด์เวอร์ชันเก่ากว่า + ลายมือ jod; p2 = โน้ต bedside)
   200 ข้อ case-based · รูปหน้าเต็ม img/l12_p<N> (78) / l12b_p<N> (jod) · รูปโจทย์ img/l12_q<n> · เฉลยบอกที่มาทุกข้อ · ข้อที่เกินไฟล์มี outside:"นอกสไลด์: …"
   สัญลักษณ์คณะ: มีแค่ 78 p39 (ฟอร์ม Caprini: ❌ + 🟢 = nice to know → ไม่ออก) · ไม่มี 🔴/🟡 */
'''
body=[]
for k in range(1,5):
    t=open(f'parts/u12_part{k}.js',encoding='utf-8').read()
    t=re.sub(r'^\s*/\*.*?\*/\s*','',t,flags=re.S).strip()
    body.append(t.rstrip().rstrip(','))
out=head+fn+'W.UNIT.push({id:"L12",title:"L12 Preoperative & postoperative care",short:"L12",src:"L12_Preop_-_Postop_care_78.pdf + L12_Pre_and_Post-Operative_Care_jod.pdf (Punthita Aimsupanimitr, MD)",topic:"Perioperative care & Surgical infection",tags:["Pre-op & post-op"],QB:[\n'+',\n'.join(body)+'\n]});\n})();\n'
open('data/unit_L12.js','w',encoding='utf-8').write(out)
keys=set(re.findall(r'"(l12b?_p\d+)"',out));c=0
for k in keys:
    t=f'img/{k}.jpg'
    if not os.path.exists(t): shutil.copy(f'/home/claude/fp12/{k}.jpg',t);c+=1
print('ok',len(out),'full pages cited',len(keys),'copied',c)

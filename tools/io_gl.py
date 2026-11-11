# Round I/O guideline helper (11 Nov 2026): load/save data*/io.js losslessly, add refs by match, append "📘 Guideline" boxes.
# usage: import sys; sys.path.insert(0,"tools"); from io_gl import *; head,d=load("data/io.js"); p=page(d,"L14-4"); append(p, f"<div class=\"box gl\">…{GL} … {R_(p,\"NCCN\")}</div>", "YYYY-MM-DD"); save("data/io.js",head,d)
# R = canonical guideline refs (add new keys per chapter); R_(p,key) returns {{R:n}} reusing an existing ref whose title contains the match string.
import json
def load(path):
    s=open(path,encoding='utf8').read(); i=s.index('W.IO=')+5
    return s[:i], json.loads(s[i:].rstrip().rstrip(';'))
def save(path,head,d):
    open(path,'w',encoding='utf8').write(head+json.dumps(d,ensure_ascii=False,indent=0)+';\n')
def page(d,pid):
    for doc in d['docs']:
        for p in doc['pages']:
            if p['id']==pid: return p
    raise KeyError(pid)
def doc(d,code):
    for x in d['docs']:
        if x['code']==code: return x
def addref(p,t,u=None):
    """return 1-based index of ref with same title prefix, adding it if missing"""
    refs=p.setdefault('refs',[])
    key=t[:60]
    for i,r in enumerate(refs):
        if r['t'][:60]==key: return i+1
    r={'t':t}
    if u: r['u']=u
    refs.append(r); return len(refs)
def append(p,html,upd):
    p['html']=p['html'].rstrip()+'\n'+html.strip()+'\n'
    p['rev']=p.get('rev',1)+1; p['upd']=upd
GL='<span class="chip gl">📘 Guideline</span>'
def ref(p,match,t,u=None):
    refs=p.setdefault('refs',[])
    for i,r in enumerate(refs):
        if match.lower() in r['t'].lower(): return i+1
    r={'t':t}
    if u: r['u']=u
    refs.append(r); return len(refs)
# canonical refs: key -> (match, title, url)
R={
'NCCN':('NCCN Clinical Practice Guidelines in Oncology: Esophageal','NCCN Clinical Practice Guidelines in Oncology: Esophageal and Esophagogastric Junction Cancers, Version 4.2026 (16 ก.ย. 2026) — ข้อความหลักตรวจจากฉบับเผยแพร่ Version 3.2025 (1 ส.ค. 2025) + การเปลี่ยนแปลง v1.2026 (FLOT category 1 preferred สำหรับ adenocarcinoma, เน้น MIE) และ v4.2026 (durvalumab + FLOT)','https://www.nccn.org/professionals/physician_gls/pdf/esophageal.pdf'),
'ESMO':('ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol 2026','Al-Batran S-E, et al.; ESMO Guidelines Committee. Gastric and oesophageal cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol 2026 (เผยแพร่ 15 ต.ค. 2026) — แทนฉบับ oesophageal cancer 2022 + interim update 2025',None),
'JES':('Japan Esophageal Society','Kitagawa Y, et al. Esophageal cancer practice guidelines 2022 edited by the Japan Esophageal Society: part 1 & 2. Esophagus 2023;20:343–372, 373–389','https://doi.org/10.1007/s10388-023-00993-2'),
'ESD':('Endoscopic submucosal dissection for superficial gastrointestinal lesions','Pimentel-Nunes P, et al. Endoscopic submucosal dissection for superficial gastrointestinal lesions: ESGE Guideline – Update 2022. Endoscopy 2022;54:591–622','https://doi.org/10.1055/a-1811-7025'),
'STENT':('Esophageal stenting for benign and malignant disease','Spaander MCW, et al. Esophageal stenting for benign and malignant disease: ESGE Guideline – Update 2021. Endoscopy 2021;53:751–762','https://doi.org/10.1055/a-1475-0063'),
'ERAS':('Perioperative Care in Esophagectomy','Low DE, et al. Guidelines for Perioperative Care in Esophagectomy: Enhanced Recovery After Surgery (ERAS®) Society Recommendations. World J Surg 2019;43:299–330','https://doi.org/10.1007/s00268-018-4786-4'),
'AJCC':('AJCC Cancer Staging Manual, 8th','AJCC Cancer Staging Manual, 8th ed. (2017) — Esophagus and esophagogastric junction · ตาราง AJCC Current Staging System 2026: บท Esophagus & EGJ ยังเป็น 8th (ยังไม่มี Version 9)','https://www.facs.org/media/c5ik5tkr/ajcc-current-staging-system-2026.pdf'),
'ACGACH':('ACG Clinical Guidelines: Diagnosis and Management of Achalasia','Vaezi MF, et al. ACG Clinical Guidelines: Diagnosis and Management of Achalasia. Am J Gastroenterol 2020;115:1393–1411','https://doi.org/10.14309/ajg.0000000000000731'),
'CHICAGO':('Chicago','Yadlapati R, et al. Esophageal motility disorders on high-resolution manometry: Chicago Classification version 4.0©. Neurogastroenterol Motil 2021;33:e14058','https://doi.org/10.1111/nmo.14058'),
'ESGEMOT':('Endoscopic management of gastrointestinal motility disorders','Weusten BLAM, et al. Endoscopic management of gastrointestinal motility disorders – part 1: ESGE Guideline. Endoscopy 2020;52:498–515','https://doi.org/10.1055/a-1160-5549'),
'ASGEACH':('ASGE guideline on the management of achalasia','Khashab MA, et al. ASGE guideline on the management of achalasia. Gastrointest Endosc 2020;91:213–227','https://doi.org/10.1016/j.gie.2019.04.231'),
'WSES':('WSES guidelines','Chirica M, et al. Esophageal emergencies: WSES guidelines. World J Emerg Surg 2019;14:26','https://doi.org/10.1186/s13017-019-0245-2'),
'ESGEUGIB':('nonvariceal upper gastrointestinal hemorrhage','Gralnek IM, et al. Diagnosis and management of nonvariceal upper gastrointestinal hemorrhage: ESGE Guideline 2015 (คำแนะนำ Mallory–Weiss ข้อ 27 — ฉบับ 2021 และ 2026 ปรับเฉพาะ peptic ulcer bleeding) · ESGE peptic ulcer bleeding Update 2026 (Endoscopy 2026, doi 10.1055/a-2863-8314)','https://doi.org/10.1055/s-0034-1393172'),
'ACGGERD':('ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal','Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol 2022;117:27–56','https://doi.org/10.14309/ajg.0000000000001538'),
'LYON':('Lyon consensus 2.0','Gyawali CP, et al. Updates to the modern diagnosis of GERD: Lyon consensus 2.0. Gut 2024;73:361–371','https://doi.org/10.1136/gutjnl-2023-330616'),
'ASGEGERD':('American Society for Gastrointestinal Endoscopy guideline on the diagnosis and management of GERD','Desai M, et al. American Society for Gastrointestinal Endoscopy guideline on the diagnosis and management of GERD: summary and recommendations. Gastrointest Endosc 2025;101:267–284','https://doi.org/10.1016/j.gie.2024.10.008'),
'SAGES':('Multi-society consensus conference and guideline on the treatment of gastroesophageal','Slater BJ, et al. Multi-society consensus conference and guideline on the treatment of gastroesophageal reflux disease (GERD). Surg Endosc 2023;37:781–806',None),
'AGABE':('AGA Clinical Practice Guideline on Endoscopic Surveillance','Wani S, et al. AGA Clinical Practice Guideline on Endoscopic Surveillance and Management of Barrett\'s Esophagus. Gastroenterology 2025',None),
'ACGBE':('Barrett','Shaheen NJ, et al. Diagnosis and Management of Barrett\'s Esophagus: An Updated ACG Guideline. Am J Gastroenterol 2022;117:559–587','https://doi.org/10.14309/ajg.0000000000001680'),
}
def R_(p,k):
    m,t,u=R[k]; return '{{R:%d}}'%ref(p,m,t,u)

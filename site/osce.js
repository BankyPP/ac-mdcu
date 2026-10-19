/* ================= OSCE Legendary round (จำลองสอบ OSCE จริง) =================
   ผู้ใช้สั่ง 19 ต.ค. 2026 — ใช้ทุกวอร์ดที่มี OSCE ของทั้ง MDCU และ SI · สิ่งที่ต่างกันต่อวอร์ดมีแค่ หัวข้อ (config wards[].osceTopics) และจำนวนข้อ/เวลาต่อข้อ (config wards[].exam.OSCE = {n, min} · แก้ในหน้าแก้วันสอบ → st.wcfg[ward].examOS)
   ก่อนเริ่ม: IRL (โชว์แค่โจทย์ ผู้คุมคนจริงใช้ checklist ใต้โจทย์) / SIM (พิมพ์ตอบทุกข้อย่อย ข้อที่ต้องพูดก็พิมพ์สิ่งที่จะพูด) · จำนวนข้อ · เวลาต่อข้อ · เวลาข้อพัก (ค่าเริ่ม 30 วิ) · หัวข้อ · วิธีเรียง
   วิธีเรียง: block = ข้อไม่มีอาจารย์ก่อน แล้วข้อมีอาจารย์อยู่ติดกันท้ายสุด · random = สุ่มปนกัน · custom = ผู้ใช้วางเองทีละข้อ (หัวข้อ / ข้อสอบเก่า / ให้ AI แต่งตามที่ต้องการ)
   ข้อพัก (block, random): หลังข้อมีอาจารย์ทุกข้อ ยกเว้นหัตถการ · และทุก 3–5 ข้อไม่มีอาจารย์ (สุ่ม) · ข้อพักใช้ 1 เลขข้อ · แก้ตำแหน่งข้อพักเองได้ในหน้าเตรียมสอบ
   สุ่มข้อเริ่ม (ห้ามเป็นข้อพัก) แล้วทำไล่ไปจนครบวงเหมือนวงสอบจริง · เปิดทีละข้อใหญ่ ข้อย่อยขึ้นพร้อมกัน · หมดเวลาเปลี่ยนข้อเอง
   ความคืบหน้า: P.osRun = ชุดที่กำลังเตรียม/สอบ · P.osHist = ผลสอบย้อนหลัง (โจทย์ AI เก็บใน gen ของชุดนั้น) */
var OST=null,OSAI={busy:0,err:"",msg:""};
const OS_REST=30;
const osRunCur=()=>{const P=W_()&&P_();return P&&P.osRun&&P.osRun.stage==="run"?P.osRun:null;};
const osPrep=()=>{const P=W_()&&P_();return P&&P.osRun&&P.osRun.stage==="prep"?P.osRun:null;};
function osLastRes(){const P=W_()&&P_();if(!P)return null;const H=P.osHist||[];return H.find(x=>x.id===P.osSel)||H[H.length-1]||null;}
function osExamCfg(){const w=W_().cfg,o=wOv(w.id),m=Object.assign({},(w.exam||{}).OSCE,o&&o.examOS);return m.n&&m.min?m:null;}
function osLegCnt(){const P=P_(),H=P.osHist||[];return H.length?`<span class="rcnt">สอบไปแล้ว <b>${H.length}</b> ครั้ง</span>`:"";}
/* topics of this ward: config osceTopics [{id,name,ex,proc}] + any topic used by stations not in the list */
function osTopics(){const w=W_().cfg,T=(w.osceTopics||[]).map(t=>Array.isArray(t)?{id:t[0],name:t[1]}:Object.assign({},t)),L=mqL(ward,"OSCE");
  L.forEach(q=>{if(q.topic&&!T.some(t=>t.id===q.topic))T.push({id:q.topic,name:q.topic,ex:q.ex?1:0,proc:q.proc?1:0});});return T;}
const osTN=k=>{const t=osTopics().find(x=>x.id===k);return t?t.name:(k||"ไม่ระบุหัวข้อ");};
const osTopicEx=k=>{const t=osTopics().find(x=>x.id===k);return t?{ex:!!t.ex,proc:!!t.proc}:{ex:false,proc:false};};
const osRand=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
/* sub-question text renumbered to the exam number (old exam "21.1 …" → "30.1 …"); IRL drops "(type …)" hints */
const osQ=(s,ix,irl)=>{let t=String(s.q||"").replace(/^\s*\d+(\.\d+)?\.?\s*/,"");if(irl)t=t.replace(/\s*\((type|พิมพ์)[^)]*\)/i,"");return `${ix+1}.${s._k+1} ${t}`;};
const osFmt=sec=>{sec=Math.max(0,Math.ceil(sec));return Math.floor(sec/60)+":"+String(sec%60).padStart(2,"0");};
/* station lookup: old-exam station (W.OS) or an AI station kept inside the run */
function osNorm(q){if(q._n)return q;q._n=1;if(!Array.isArray(q.parts)||!q.parts.length)q.parts=[{subs:q.subs||[]}];q.subs=[];
  q.parts.forEach((p,pi)=>{p.i=pi;p.subs=p.subs||[];p.subs.forEach((s,k)=>{s._p=pi;s._k=k;s._i=q.subs.length;if(!(s.tags||[]).length&&q.topic)s.tags=[q.topic];q.subs.push(s);});});return q;}
function osSt(run,u){if(!u)return null;if(run.gen&&run.gen[u])return osNorm(run.gen[u]);return mqL(ward,"OSCE").find(q=>q.uid===u)||null;}
const osSlotType=(run,sl)=>{if(sl.k==="rest")return "rest";const q=osSt(run,sl.u);const t=q?{ex:!!q.ex,proc:!!q.proc}:osTopicEx(sl.topic);return t.proc?"proc":t.ex?"ex":"noex";};
const OS_TI={noex:"📝",ex:"👨‍⚕️",proc:"🩺",rest:"☕"},OS_TT={noex:"ไม่มีอาจารย์",ex:"มีอาจารย์",proc:"หัตถการ (มีอาจารย์ ไม่มีข้อพักตามหลัง)",rest:"ข้อพัก"};
/* ---- building the paper ---- */
function osPick(topics,n,pref){const L=mqL(ward,"OSCE").filter(q=>!topics.length||topics.includes(q.topic)),A=mqS0();
  const done=q=>{const r=A[q.uid];return !!(r&&r.sub);};const by={};L.forEach(q=>{(by[q.topic||"_"]=by[q.topic||"_"]||[]).push(q);});
  Object.keys(by).forEach(k=>{by[k]=shuffle(by[k]);if(pref)by[k].sort((a,b)=>done(a)-done(b));});
  const keys=shuffle(topics.length?topics.filter(k=>by[k]&&by[k].length):Object.keys(by)),out=[];let guard=0;
  while(out.length<n&&keys.some(k=>by[k].length)&&guard++<999)for(const k of keys){if(out.length>=n)break;const q=by[k].shift();if(q)out.push({k:"st",u:q.uid,topic:q.topic||""});}
  return out;}
const mqS0=()=>mqInitP(P_(),"OSCE")["a"+ph()];
function osRests(sts){const out=[];let run=0,gap=osRand(3,5);
  sts.forEach(sl=>{out.push(sl);const t=sl.ty;if(t==="ex"){out.push({k:"rest"});run=0;gap=osRand(3,5);}else if(t==="noex"){run++;if(run>=gap){out.push({k:"rest"});run=0;gap=osRand(3,5);}}});
  return out;}
function osStartPick(seq){const ix=seq.map((s,i)=>s.k==="rest"?-1:i).filter(i=>i>=0);return ix.length?ix[Math.floor(Math.random()*ix.length)]:0;}
function osBuild(cfg){const P=P_();let sts=osPick(cfg.topics,cfg.n,true);const short=cfg.n-sts.length;
  if(short>0){const tp=cfg.topics.length?cfg.topics:osTopics().map(t=>t.id);for(let i=0;i<short;i++){const t=tp[i%Math.max(1,tp.length)]||"";sts.push({k:"st",src:"ai",topic:t,u:""});}}
  const run={id:now().toString(36),ts:now(),stage:"prep",mode:cfg.mode,per:cfg.per,rest:cfg.rest,order:cfg.order,topics:cfg.topics,n:cfg.n,seq:[],start:0,gen:{},ans:{},tick:{},ut:{},gm:{},ai:{},short:Math.max(0,short)};
  sts.forEach(sl=>{sl.ty=osSlotType(run,sl);});
  if(cfg.order==="custom"){run.seq=[];}
  else{if(cfg.order==="block"){const a=shuffle(sts.filter(s=>s.ty==="noex")),b=shuffle(sts.filter(s=>s.ty!=="noex"));sts=a.concat(b);}else sts=shuffle(sts);
    run.seq=osRests(sts);run.start=osStartPick(run.seq);}
  P.osRun=run;save();return run;}
/* ---- setup page (#/<ward>/osl) ---- */
function osSetup(){const P=P_(),w=W_().cfg,E=osExamCfg(),L=mqL(ward,"OSCE"),T=osTopics(),v=P.osSet=Object.assign({mode:"irl",n:E?E.n:Math.min(L.length||10,10),per:E?E.min:5,rest:OS_REST,order:"block",topics:[]},P.osSet||{});
  if(osPrep())return osPrepView();
  let h=`<div class="mqv osv"><div class="whead"><h1 class="h2">Legendary round · OSCE</h1><a href="#/${esc(ward)}">กลับหน้าวอร์ด</a></div>
    <p class="sub" style="margin:0 0 10px">จำลองสอบ OSCE จริง — เปิดทีละข้อ ข้อย่อยขึ้นพร้อมกัน หมดเวลาเปลี่ยนข้อเอง · ข้อสอบเก่าในคลัง <b>${L.length}</b> ข้อ</p>`;
  const cur=osRunCur();if(cur)h+=`<button class="resume" id="osResume"><span>กำลังสอบอยู่: <b>${cur.mode==="irl"?"IRL":"SIM"} · ${cur.seq.filter(s=>s.k!=="rest").length} ข้อ</b><span class="rd">ทำไปแล้ว ${cur.pos||0}/${cur.seq.length} ช่อง — กดเพื่อสอบต่อ</span></span><span class="go">→</span></button>`;
  h+=`<div class="card"><h3>1. แบบการสอบ</h3><div class="seg" role="group"><button data-osm="irl" aria-pressed="${v.mode==="irl"}"><b>IRL</b>มีผู้คุมคนจริง — จอโชว์แค่โจทย์ ผู้คุมดู checklist ใต้โจทย์</button><button data-osm="sim" aria-pressed="${v.mode==="sim"}"><b>SIM</b>จำลองเอง — พิมพ์ตอบทุกข้อย่อย ข้อที่ต้องพูดให้พิมพ์สิ่งที่จะพูด</button></div></div>`;
  h+=`<div class="card"><h3>2. จำนวนข้อและเวลา</h3><div class="dtrow"><label>จำนวนข้อ (ไม่นับข้อพัก)<input type="number" id="osN" min="1" max="80" value="${esc(v.n)}"></label><label>เวลาต่อข้อ (นาที)<input type="number" id="osPer" min="0.5" max="60" step="0.5" value="${esc(v.per)}"></label><label>ข้อพัก (วินาที)<input type="number" id="osRest" min="5" max="600" step="5" value="${esc(v.rest)}"></label></div>
    <span class="rd">${E?`สอบจริงของวอร์ดนี้: <b>${E.n} ข้อ ข้อละ ${E.min} นาที</b> <button class="linkbtn" type="button" id="osUseReal">ใช้ค่านี้</button>`:`ยังไม่ได้ตั้งจำนวนข้อ/เวลาของสอบจริง — <a href="#/${esc(ward)}/dates">ตั้งในหน้าแก้วันสอบ</a>`} · ข้อพักค่าเริ่มต้น ${OS_REST} วินาที</span></div>`;
  const cnt={};L.forEach(q=>{cnt[q.topic]=(cnt[q.topic]||0)+1;});
  h+=`<div class="card"><h3>3. หัวข้อที่อยากสอบ <span class="hint" style="font-weight:400">ไม่เลือก = ทุกหัวข้อ</span></h3>${T.length?`<div class="chips">${T.map(t=>`<button class="chip" type="button" data-ost="${esc(t.id)}" aria-pressed="${v.topics.includes(t.id)}">${OS_TI[t.proc?"proc":t.ex?"ex":"noex"]} ${esc(t.name)}<span class="cnt">${cnt[t.id]||0}</span></button>`).join("")}</div>`:`<span class="rd">วอร์ดนี้ยังไม่มีรายการหัวข้อ OSCE — สุ่มจากทุกข้อในคลัง</span>`}
    <span class="rd" style="margin-top:6px">📝 ไม่มีอาจารย์ · 👨‍⚕️ มีอาจารย์ · 🩺 หัตถการ · ตัวเลข = ข้อสอบเก่าในคลัง</span></div>`;
  h+=`<div class="card"><h3>4. วิธีเรียงข้อ</h3><div class="osord">${[["block","แยกกลุ่ม","ข้อไม่มีอาจารย์อยู่ก่อน (เรียงสุ่ม) แล้วข้อมีอาจารย์อยู่ติดกันท้ายสุด · สุ่มข้อเริ่ม แล้วทำไล่ไปจนครบวง"],["random","สุ่มปนกัน","สุ่มลำดับข้อมีและไม่มีอาจารย์ปนกัน · สุ่มข้อเริ่มเหมือนกัน"],["custom","ออกแบบเอง","วางเองทีละข้อ ว่าข้อไหนหัวข้ออะไร ใช้ข้อสอบเก่าหรือให้ AI แต่งตามที่ต้องการ และใส่ข้อพักตรงไหน"]].map(([k,n,d])=>`<button class="osopt" type="button" data-oso="${k}" aria-pressed="${v.order===k}"><b>${n}</b><span>${d}</span></button>`).join("")}</div>
    ${v.order!=="custom"?`<p class="rd" style="margin:8px 0 0">ข้อพัก: หลังข้อมีอาจารย์ทุกข้อ (ยกเว้นหัตถการ) และทุก 3–5 ข้อไม่มีอาจารย์ (สุ่ม) · นับเป็น 1 เลขข้อ · แก้ตำแหน่งได้ในหน้าถัดไป</p>`:""}</div>`;
  {const nAI=Math.max(0,(+v.n||0)-L.filter(q=>!v.topics.length||v.topics.includes(q.topic)).length);
    if(v.order!=="custom"&&nAI>0)h+=`<p class="hint">ข้อสอบเก่าในหัวข้อที่เลือกมีไม่พอ ${esc(v.n)} ข้อ — อีก ${nAI} ข้อจะให้ AI แต่งใหม่ (ต้องเปิดใน Claude หรือใส่ API key) หรือลดจำนวนข้อ</p>`;}
  h+=`<div class="stack"><button class="btn primary" id="osGo" type="button">${v.order==="custom"?"ไปหน้าออกแบบข้อสอบ →":"สร้างชุดข้อสอบ →"}</button></div>`;
  h+=`<p class="statline" style="margin-top:16px"><a href="#/${esc(ward)}/osh">📜 ประวัติ Legendary round OSCE</a> (${(P.osHist||[]).length} ครั้ง)</p>`;
  h+=`<details class="card osinfo"><summary><b>เกณฑ์คะแนนที่เว็บใช้</b></summary><div class="rd">เฉลยแต่ละข้อย่อยเป็น checklist แบบ OSCE จริง: "ต้องมีคำนี้" หรือ "ต้องได้ n จาก m อย่าง" · คะแนนข้อย่อย = สัดส่วน checklist ที่ได้ × คะแนนเต็มข้อย่อย (กดให้คะแนนเองทับได้) · คะแนนแต่ละข้อคิดเป็น % แล้วเฉลี่ยทุกข้อ (ข้อพักไม่นับ) · เกรดเหมือน Legendary MCQ (A ≥ 80 … F &lt; 50) · <b>ผ่านข้อ = ได้ ≥ 60%</b> (สมมติไว้ เกณฑ์จริงของคณะไม่เปิดเผย และมักคิดจากคะแนนทั้งรุ่น)</div></details>`;
  h+=`</div>`;$("main").innerHTML=h;
  const upd=o=>{Object.assign(v,o);P.osSet=v;save();osSetup();};
  {const b=$("osResume");if(b)b.onclick=()=>go(ward+"/osx");}
  document.querySelectorAll("[data-osm]").forEach(b=>b.onclick=()=>upd({mode:b.dataset.osm}));
  document.querySelectorAll("[data-oso]").forEach(b=>b.onclick=()=>upd({order:b.dataset.oso}));
  document.querySelectorAll("[data-ost]").forEach(b=>b.onclick=()=>{const k=b.dataset.ost,a=v.topics.slice(),i=a.indexOf(k);if(i>=0)a.splice(i,1);else a.push(k);upd({topics:a});});
  [["osN","n"],["osPer","per"],["osRest","rest"]].forEach(([id,k])=>{$(id).onchange=()=>{const x=+$(id).value;if(x>0){v[k]=k==="per"?Math.round(x*2)/2:Math.round(x);P.osSet=v;save();}};});
  {const b=$("osUseReal");if(b)b.onclick=()=>upd({n:E.n,per:E.min});}
  $("osGo").onclick=async()=>{const n=Math.round(+$("osN").value),per=+$("osPer").value,rest=Math.round(+$("osRest").value);
    if(!(n>0)||!(per>0)||!(rest>0)){toast("ใส่จำนวนข้อ เวลาต่อข้อ และเวลาข้อพักให้ครบ");return;}
    if(cur&&!await uiAsk("มีชุดที่สอบค้างอยู่ — สร้างชุดใหม่แทน? (ชุดเดิมจะถูกยกเลิก ไม่เก็บผล)"))return;
    Object.assign(v,{n,per:Math.round(per*2)/2,rest});P.osSet=v;
    osBuild({mode:v.mode,n,per:v.per*60,rest,order:v.order,topics:v.topics.slice()});osPrepView();};}
/* ---- prep page: see the paper, move / add / remove rest stations, re-roll; custom = design every slot ---- */
function osPrepView(){const run=osPrep();if(!run)return osSetup();const N=run.seq.length,cust=run.order==="custom",T=osTopics(),L=mqL(ward,"OSCE");
  let h=`<div class="mqv osv"><div class="whead"><h1 class="h2">เตรียมสอบ · OSCE</h1><a href="#/${esc(ward)}">กลับหน้าวอร์ด</a></div>
    <p class="sub" style="margin:0 0 10px"><b>${run.mode==="irl"?"IRL":"SIM"}</b> · ${run.seq.filter(s=>s.k!=="rest").length} ข้อ + ข้อพัก ${run.seq.filter(s=>s.k==="rest").length} = <b>${N}</b> เลขข้อ · ข้อละ ${osFmt(run.per)} นาที · พัก ${run.rest} วินาที · ${cust?"ออกแบบเอง":run.order==="block"?"แยกกลุ่ม":"สุ่มปนกัน"}</p>`;
  if(run.short)h+=`<p class="hint">ข้อสอบเก่าไม่พอ — ${run.short} ข้อที่ขึ้นว่า "AI แต่งใหม่" จะสร้างตอนกดเริ่มสอบ</p>`;
  if(N){h+=`<div class="ostart">เริ่มที่ <b>ข้อ ${run.start+1}</b> <select id="osStartSel" aria-label="เลือกข้อเริ่ม">${run.seq.map((s,i)=>s.k==="rest"?"":`<option value="${i}"${i===run.start?" selected":""}>ข้อ ${i+1}</option>`).join("")}</select> <button class="btn" type="button" id="osReStart">🎲 สุ่มข้อเริ่มใหม่</button></div>`;}
  h+=`<div class="osslots">${run.seq.map((sl,i)=>{const ty=osSlotType(run,sl),q=sl.k==="st"?osSt(run,sl.u):null,isS=i===run.start;
    if(sl.k==="rest")return `<div class="osslot rest"><span class="on">${i+1}</span><span class="oi">☕</span><span class="ot">ข้อพัก <span class="hint">${run.rest} วินาที</span></span><span class="oa"><button class="btn sm" type="button" data-osmv="${i}" data-d="-1" aria-label="เลื่อนขึ้น">↑</button><button class="btn sm" type="button" data-osmv="${i}" data-d="1" aria-label="เลื่อนลง">↓</button><button class="link" type="button" data-osdel="${i}">ลบ</button></span></div>`;
    const src=sl.src==="ai"?`<span class="tag">AI แต่งใหม่${sl.brief?" · "+esc(sl.brief.slice(0,40)):""}</span>`:q?`<span class="tag">ข้อสอบเก่า ${esc(q.set)}${q.ro?" "+esc(q.ro):""}</span>`:"";
    return `<div class="osslot${isS?" start":""}"><span class="on">${i+1}</span><span class="oi" title="${OS_TT[ty]}">${OS_TI[ty]}</span><span class="ot">${esc(osTN(sl.topic||(q&&q.topic)))} ${src}${isS?' <b class="sflag">◀ เริ่มที่นี่</b>':""}</span><span class="oa">${run.seq[i+1]&&run.seq[i+1].k==="rest"?"":`<button class="link" type="button" data-osaddr="${i}">+ พักหลังข้อนี้</button>`}${cust?`<button class="btn sm" type="button" data-osmv="${i}" data-d="-1" aria-label="เลื่อนขึ้น">↑</button><button class="btn sm" type="button" data-osmv="${i}" data-d="1" aria-label="เลื่อนลง">↓</button><button class="link" type="button" data-osdel="${i}">ลบ</button>`:""}</span></div>`;}).join("")||`<p class="hint">ยังไม่มีข้อ — เพิ่มข้อด้านล่าง</p>`}</div>`;
  if(cust){h+=`<div class="card"><h3>+ เพิ่มข้อ</h3><div class="dtrow"><label>หัวข้อ<select id="osCT">${T.map(t=>`<option value="${esc(t.id)}">${OS_TI[t.proc?"proc":t.ex?"ex":"noex"]} ${esc(t.name)}</option>`).join("")||`<option value="">ไม่ระบุ</option>`}</select></label>
      <label>โจทย์จาก<select id="osCS"><option value="ac">ข้อสอบเก่า (สุ่มในหัวข้อนี้)</option><option value="ai">ให้ AI แต่งใหม่</option>${L.length?`<optgroup label="เลือกข้อสอบเก่าเอง">${L.map(q=>`<option value="u:${esc(q.uid)}">${esc(q.set)} ข้อ ${esc(mqNum(q))} · ${esc(osTN(q.topic))}</option>`).join("")}</optgroup>`:""}</select></label></div>
      <label class="osbrief">อยากได้โจทย์แบบไหน (สำหรับ AI · ไม่บังคับ)<input type="text" id="osCB" placeholder="เช่น EKG AF with RVR ถาม dx + tx, ซักประวัติไข้ในผู้ป่วย HIV"></label>
      <div class="row2"><button class="btn" type="button" id="osCAdd">+ เพิ่มข้อนี้</button><button class="btn" type="button" id="osCRest">+ เพิ่มข้อพักท้ายสุด</button></div></div>`;}
  else h+=`<div class="row2" style="margin-top:10px"><button class="btn" type="button" id="osReRest">🎲 สุ่มตำแหน่งข้อพักใหม่</button><button class="btn" type="button" id="osReAll">🎲 สุ่มชุดใหม่ทั้งหมด</button></div>`;
  if(OSAI.busy)h+=`<p class="hint">⏳ ${esc(OSAI.msg||"AI กำลังแต่งโจทย์…")}</p>`;else if(OSAI.err)h+=`<p class="hint" style="color:var(--wrong)">${esc(OSAI.err)}</p>`;
  h+=`<div class="stack"><button class="btn primary" id="osBegin" type="button" ${N&&!OSAI.busy?"":"disabled"}>เริ่มสอบ ▶</button><button class="btn" id="osBack" type="button">← กลับไปตั้งค่า</button></div>`;
  h+=`<p class="hint">ข้อแรกที่เริ่มต้องไม่ใช่ข้อพัก · ระหว่างสอบหมดเวลาแล้วเปลี่ยนข้อเอง มีเสียงเตือนตอนเหลือ 1 นาที (ข้อสอบ) และตอนเปลี่ยนข้อ · ปิดหน้าไประหว่างสอบ เวลาจะหยุดไว้ แล้วเดินต่อเมื่อกลับมา</p></div>`;
  $("main").innerHTML=h;
  const fixStart=()=>{if(!run.seq.length){run.start=0;return;}if(run.start>=run.seq.length)run.start=0;let g=0;while(run.seq[run.start]&&run.seq[run.start].k==="rest"&&g++<run.seq.length)run.start=(run.start+1)%run.seq.length;};
  const re=()=>{fixStart();save();osPrepView();};
  {const s=$("osStartSel");if(s)s.onchange=()=>{run.start=+s.value;re();};}
  {const b=$("osReStart");if(b)b.onclick=()=>{run.start=osStartPick(run.seq);re();};}
  document.querySelectorAll("[data-osmv]").forEach(b=>b.onclick=()=>{const i=+b.dataset.osmv,d=+b.dataset.d,j=i+d;if(j<0||j>=run.seq.length)return;const a=run.seq,st0=a[run.start];[a[i],a[j]]=[a[j],a[i]];
    if(a.some((x,k)=>x.k==="rest"&&a[k+1]&&a[k+1].k==="rest")){[a[i],a[j]]=[a[j],a[i]];toast("ข้อพักติดกัน 2 ข้อไม่ได้");return;}run.start=Math.max(0,a.indexOf(st0));re();});
  document.querySelectorAll("[data-osdel]").forEach(b=>b.onclick=()=>{const i=+b.dataset.osdel,st0=run.seq[run.start];run.seq.splice(i,1);run.start=Math.max(0,run.seq.indexOf(st0));re();});
  document.querySelectorAll("[data-osaddr]").forEach(b=>b.onclick=()=>{const i=+b.dataset.osaddr,st0=run.seq[run.start];run.seq.splice(i+1,0,{k:"rest"});run.start=run.seq.indexOf(st0);re();});
  {const b=$("osReRest");if(b)b.onclick=()=>{const st0=run.seq[run.start];run.seq=osRests(run.seq.filter(s=>s.k!=="rest").map(s=>Object.assign(s,{ty:osSlotType(run,s)})));run.start=Math.max(0,run.seq.indexOf(st0));re();};}
  {const b=$("osReAll");if(b)b.onclick=()=>{osBuild({mode:run.mode,n:run.n,per:run.per,rest:run.rest,order:run.order,topics:run.topics});osPrepView();};}
  {const b=$("osCAdd");if(b)b.onclick=()=>{const t=$("osCT").value,s=$("osCS").value,brief=$("osCB").value.trim();let sl;
    if(s.startsWith("u:")){const q=L.find(x=>x.uid===s.slice(2));if(!q)return;sl={k:"st",u:q.uid,topic:q.topic||""};}
    else if(s==="ac"){const used=new Set(run.seq.map(x=>x.u).filter(Boolean)),pool=shuffle(L.filter(q=>(q.topic||"")===t&&!used.has(q.uid)));if(!pool.length){toast("หัวข้อนี้ไม่มีข้อสอบเก่าที่ยังไม่ได้ใช้ — เลือก \"ให้ AI แต่งใหม่\"");return;}sl={k:"st",u:pool[0].uid,topic:t};}
    else sl={k:"st",src:"ai",topic:t,u:"",brief};
    sl.ty=osSlotType(run,sl);run.seq.push(sl);if(run.seq.length===1)run.start=0;re();};}
  {const b=$("osCRest");if(b)b.onclick=()=>{if(!run.seq.length||run.seq[run.seq.length-1].k==="rest"){toast("ต้องมีข้อสอบก่อนข้อพัก");return;}run.seq.push({k:"rest"});re();};}
  $("osBack").onclick=async()=>{if(!await uiAsk("ยกเลิกชุดนี้แล้วกลับไปหน้าตั้งค่า?"))return;P_().osRun=null;save();osSetup();};
  $("osBegin").onclick=()=>osBegin(run);}
async function osBegin(run){if(OSAI.busy)return;OSAI.err="";const need=run.seq.filter(s=>s.k==="st"&&s.src==="ai"&&!s.u);
  if(need.length){let mode="";try{mode=await aiMode();}catch(e){}
    if(!mode){OSAI.err=`ต้องให้ AI แต่ง ${need.length} ข้อ แต่ยังใช้ AI ไม่ได้ — เปิดหน้านี้ใน Claude หรือใส่ API key (หน้า Admission round) หรือลบ/เปลี่ยนข้อที่ขึ้นว่า AI แต่งใหม่`;osPrepView();return;}
    OSAI.busy=1;let k=0;
    try{for(const sl of need){k++;OSAI.msg=`AI กำลังแต่งโจทย์ ${k}/${need.length} (${osTN(sl.topic)}) …`;osPrepView();const q=await osGen(run,sl);run.gen[q.uid]=q;sl.u=q.uid;sl.ty=osSlotType(run,sl);save();}}
    catch(e){OSAI.busy=0;OSAI.err=(typeof admMsg==="function"&&admMsg(e))||"AI แต่งโจทย์ไม่สำเร็จ — ลองกดเริ่มสอบใหม่";osPrepView();return;}
    OSAI.busy=0;OSAI.msg="";}
  if(!run.seq.some(s=>s.k==="st")){toast("ยังไม่มีข้อสอบ");return;}
  if(run.seq[run.start].k==="rest")run.start=run.seq.findIndex(s=>s.k!=="rest");
  run.stage="run";run.pos=0;run.left=run.per;run.paused=false;run.t0=now();run.at=now();save();go(ward+"/osx");}
/* ---- AI station (old exam of the same topic is the style example) ---- */
function osGenPrompt(run,sl){const w=W_().cfg,tn=osTN(sl.topic),te=osTopicEx(sl.topic),L=mqL(ward,"OSCE"),ex=shuffle(L.filter(q=>q.topic===sl.topic))[0]||shuffle(L)[0];
  const exJ=ex?JSON.stringify({title:ex.title,stem:plain(ex.stem),sp:ex.sp?plain(ex.sp):undefined,subs:ex.subs.map(s=>({q:s.q,marks:s.marks,ans:plain(s.ans),points:s.points,kw:s.kw}))}):"";
  const used=run.seq.map(s=>osSt(run,s.u)).filter(Boolean).map(q=>q.title).join("; ");
  return `Write ONE brand-new OSCE station for Thai ${INST.stu} (medical students) in Year 4 at ${INST.en}, ${w.name} rotation.
Station topic: ${tn}${te.proc?" (procedure station with an examiner)":te.ex?" (station with an examiner: the student talks to a standardized patient or examines one)":" (written station, no examiner: the student reads the material and writes answers)"}. Time: ${osFmt(run.per)} minutes.
${sl.brief?"The student asked for: "+sl.brief+"\n":""}Scope: ${w.scope||w.name}. Level: what a Year-4 student must know. Content from current standard textbooks and guidelines.
Avoid these topics already in this exam: ${used||"none"}.
The website cannot show pictures for AI stations. If this topic is normally a picture (EKG, film, smear, Gram stain, skin lesion, physical sign), give the material as a short neutral written description of what is seen (measurements, morphology, distribution) WITHOUT naming the diagnosis or the sign the student must identify.
Rules:
- Stem and questions in formal English like a real exam. 1–4 sub-questions (e.g. "1.1 Diagnosis"); stations with an examiner usually have one long task (take a history / examine / perform) plus a short question at the end.
- For an examiner station write "sp": the script for the standardized patient / examiner in Thai (patient details, answers to likely questions, examination findings to give when asked).
- Each sub-question has an OSCE checklist key: "points" = list of items; an item is either a string (must be said) or {"label": "...", "any": ["...", "..."], "need": n} (any n of these). "kw" = for each item, case-insensitive JavaScript regex strings (Thai or English keywords) that detect it in a typed answer: for a string item an array of strings; for an "any" item an array of arrays, one per option.
- "ans": model answer (English with Thai explanation allowed, <b> for emphasis). "exp": short Thai explanation with the key facts.
Reply with only a JSON object:
{"title": "short English title", "stem": "...", "sp": "Thai script or empty string", "subs": [{"q": "...", "marks": 2, "ans": "...", "exp": "...", "points": [...], "kw": [...]}], "interp": "Thai: what this station tests", "summary": ["3–5 Thai high-yield bullets"]}
${exJ?"Style example (an old exam station of this ward):\n"+exJ:""}`;}
async function osGen(run,sl){const o=await aiJSON(osGenPrompt(run,sl),4096);if(!o||!o.stem||!Array.isArray(o.subs)||!o.subs.length)throw {code:"invalid_json"};
  const te=osTopicEx(sl.topic),uid="OSAI|"+now().toString(36)+Math.random().toString(36).slice(2,6);
  const subs=o.subs.slice(0,6).map(s=>{const pts=Array.isArray(s.points)?s.points.filter(p=>typeof p==="string"||(p&&Array.isArray(p.any))):[];let kw=Array.isArray(s.kw)?s.kw:[];
    kw=pts.map((p,j)=>{const k=kw[j];if(typeof p==="string")return (Array.isArray(k)?k:[]).map(String).filter(x=>{try{new RegExp(x,"i");return true;}catch(e){return false;}});return p.any.map((a,m)=>(Array.isArray(k)&&Array.isArray(k[m])?k[m]:[]).map(String).filter(x=>{try{new RegExp(x,"i");return true;}catch(e){return false;}}));});
    return {q:san(s.q),marks:Math.max(1,Math.min(10,+s.marks||2)),ans:san(s.ans),exp:san(s.exp),points:pts.map(p=>typeof p==="string"?san(p):{label:san(p.label||""),any:p.any.map(san),need:Math.max(1,Math.min(p.any.length,+p.need||1))}),kw,tags:[sl.topic]};});
  return {uid,ai:1,set:"AI",ro:"",orig:"AI",file:"AI",page:"",topic:sl.topic,ex:te.ex?1:0,proc:te.proc?1:0,title:String(o.title||"").slice(0,90),stem:san(o.stem),sp:san(o.sp||""),parts:[{subs}],interp:san(o.interp||""),summary:(Array.isArray(o.summary)?o.summary:[]).map(san),brief:sl.brief||""};}
/* ---- exam run (#/<ward>/osx) ---- */
const osOrder=run=>run.seq.map((_,k)=>(run.start+k)%run.seq.length);
function osSlotNow(run){const O=osOrder(run);return run.pos<O.length?O[run.pos]:-1;}
function osRemain(run){return run.paused?run.left:run.left-(now()-run.at)/1000;}
let osBeepCtx=null;
function osBeep(n,hz){try{osBeepCtx=osBeepCtx||new (window.AudioContext||window.webkitAudioContext)();const c=osBeepCtx;for(let i=0;i<(n||1);i++){const o=c.createOscillator(),g=c.createGain();o.frequency.value=hz||880;o.connect(g);g.connect(c.destination);const t=c.currentTime+i*0.32;g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(0.3,t+0.02);g.gain.exponentialRampToValueAtTime(0.0001,t+0.25);o.start(t);o.stop(t+0.27);}}catch(e){}
  try{if(navigator.vibrate)navigator.vibrate(n>1?[180,90,180]:200);}catch(e){}}
function osAdvance(run,manual){const O=osOrder(run);run.pos++;if(run.pos>=O.length)return osFinish(run);const sl=run.seq[O[run.pos]];run.left=sl.k==="rest"?run.rest:run.per;run.at=now();run.warned=0;save();osBeep(2,sl.k==="rest"?660:880);osRunView();window.scrollTo(0,0);}
function osTick(){const run=osRunCur();if(!run||view!=="osx"){clearInterval(OST);OST=null;return;}const r=osRemain(run),el=$("osClock");
  if(el){el.textContent=osFmt(r);el.classList.toggle("low",r<=60&&run.seq[osSlotNow(run)].k!=="rest");}
  if(!run.paused){if(r<=60&&!run.warned&&run.per>90&&run.seq[osSlotNow(run)].k!=="rest"){run.warned=1;osBeep(1,740);}
    if(r<=0)return osAdvance(run);
    if(!osTick.n||now()-osTick.n>4000){osTick.n=now();run.left=r;run.at=now();persist();}}}
function osResume(run){if(!run.paused){const r=osRemain(run);if(now()-run.at>8000){run.at=now();}}}
document.addEventListener("visibilitychange",()=>{try{const run=osRunCur();if(!run||run.paused)return;if(document.visibilityState==="hidden"){run.left=osRemain(run);run.at=now();persist();}}catch(e){}});
function osRunView(){const run=osRunCur();if(!run)return go(ward+"/osl");osResume(run);const ix=osSlotNow(run);if(ix<0)return osFinish(run);const sl=run.seq[ix],O=osOrder(run),N=run.seq.length;
  const nx=run.pos+1<O.length?O[run.pos+1]:-1,nsl=nx>=0?run.seq[nx]:null,ty=osSlotType(run,sl),sim=run.mode==="sim";
  let h=`<div class="mqv osv osx"><div class="osbar"><div class="osnum"><small>ข้อ</small>${ix+1}<span class="osof">/${N}</span></div><div class="osmeta"><span class="tag">${OS_TI[ty]} ${OS_TT[ty]}</span><span class="hint">ช่องที่ ${run.pos+1}/${N} · เริ่มที่ข้อ ${run.start+1}${nsl?` · ถัดไป: ข้อ ${nx+1} ${nsl.k==="rest"?"☕ พัก":OS_TI[osSlotType(run,nsl)]}`:" · ข้อสุดท้าย"}</span></div><div class="osclock${run.paused?" paused":""}" id="osClock">${osFmt(osRemain(run))}</div></div>
    <div class="osctl"><button class="btn sm" type="button" id="osPause">${run.paused?"▶ เดินเวลาต่อ":"⏸ หยุดเวลา"}</button><button class="btn sm" type="button" id="osSkip">⏭ ไปข้อถัดไปเลย</button><button class="btn sm" type="button" id="osEnd">■ จบการสอบ</button></div>`;
  if(sl.k==="rest")h+=`<div class="osrest"><div class="big">☕</div><b>ข้อพัก</b><p>${nsl?`ข้อถัดไป: ข้อ ${nx+1} ${nsl.k==="rest"?"":OS_TT[osSlotType(run,nsl)]}`:"ข้อสุดท้ายแล้ว"}</p></div>`;
  else{const q=osSt(run,sl.u);if(!q)h+=`<div class="empty">ไม่พบโจทย์ข้อนี้</div>`;
    else{h+=`<section class="case"><div class="case-lab">ข้อ ${ix+1}</div><div class="stem">${q.stem}</div>${mqImgs(q.img,q.imgNote)}</section><section class="part">`;
      q.subs.forEach(s=>{const i=s._i,t=((run.ans[ix]||{})[i])||"";h+=`<div class="subq"><div class="sh"><div class="sq">${osQ(s,ix,!sim)}</div><span class="mk">${mqMk(s)} คะแนน</span></div>${mqImgs(s.img,s.imgNote)}${sim?`<textarea class="ans" data-osa="${i}" rows="3" placeholder="${q.ex?"พิมพ์สิ่งที่จะถาม / ทำ / พูด":"พิมพ์คำตอบ"}">${esc(t)}</textarea>`:""}</div>`;});
      h+=`</section>`;
      if(!sim)h+=`<details class="card osproc"><summary><b>สำหรับผู้คุม</b> — บทผู้ป่วย และ checklist ให้ติ๊กระหว่างสอบ (ผู้สอบอย่าเปิด)</summary>${q.sp?`<div class="box ossp">${q.sp}</div>`:""}${q.subs.map(s=>osChkHTML(run,ix,q,s,true)).join("")}</details>`;}}
  h+=`</div>`;$("main").innerHTML=h;
  document.querySelectorAll("[data-osa]").forEach(el=>{const fit=()=>{el.style.height="auto";el.style.height=Math.max(84,el.scrollHeight+4)+"px";};fit();el.addEventListener("input",()=>{(run.ans[ix]=run.ans[ix]||{})[el.dataset.osa]=el.value;fit();persist();clearTimeout(osRunView.t);osRunView.t=setTimeout(save,1500);});});
  osBindChk(run,ix,()=>{});
  $("osPause").onclick=()=>{if(run.paused){run.paused=false;run.at=now();}else{run.left=osRemain(run);run.paused=true;}save();osRunView();};
  $("osSkip").onclick=async()=>{if(!await uiAsk(sl.k==="rest"?"ข้ามข้อพักไปข้อถัดไปเลย?":"ไปข้อถัดไปเลย? (ข้อนี้กลับมาทำไม่ได้ เหมือนสอบจริง)"))return;osAdvance(run,1);};
  $("osEnd").onclick=async()=>{if(!await uiAsk("จบการสอบตอนนี้? ข้อที่ยังไม่ถึงจะนับเป็นไม่ได้ทำ"))return;osFinish(run);};
  clearInterval(OST);OST=setInterval(osTick,250);}
/* checklist block (IRL proctor during the exam, and the result page) */
function osChkHTML(rs,ix,q,s,live){const i=s._i,c=osTicks(rs,ix,s);if(!(s.points||[]).length)return `<div class="oschkq"><div class="oq">${osQ(s,ix)}</div><div class="hint">ข้อนี้ไม่มี checklist — ให้คะแนนเอง</div></div>`;
  return `<div class="oschkq"><div class="oq">${osQ(s,ix)} <span class="mk">${mqMk(s)} คะแนน</span></div>${s.key?`<div class="hint">เฉลยในไฟล์: ${s.key}</div>`:""}<ul class="pts">${s.points.map((p,j)=>{
    if(typeof p==="string")return `<li><label><input type="checkbox" data-osc="${ix}" data-ss="${i}" data-sp="${j}" ${c[j]===true?"checked":""}><span>${p}</span></label></li>`;
    const vv=Array.isArray(c[j])?c[j]:[],need=p.need||1;
    return `<li class="pgrp"><div class="pgl">${p.label?p.label+" ":""}<span class="alt">${need===1?"อย่างใดอย่างหนึ่ง":`ได้ ${need} อย่างจากนี้ = เต็ม`}</span></div><ul>${p.any.map((a,m)=>`<li><label><input type="checkbox" data-osc="${ix}" data-ss="${i}" data-sp="${j}" data-sk="${m}" ${vv[m]?"checked":""}><span>${a}</span></label></li>`).join("")}</ul></li>`;}).join("")}</ul>${live?"":""}</div>`;}
function osTicks(rs,ix,s){const T=(rs.tick||{})[ix]||{};return T[s._i]||[];}
function osBindChk(rs,ix,after){document.querySelectorAll("[data-osc]").forEach(el=>el.onchange=()=>{const x=+el.dataset.osc,i=+el.dataset.ss,j=+el.dataset.sp;rs.tick=rs.tick||{};rs.ut=rs.ut||{};
  const T=rs.tick[x]=rs.tick[x]||{},c=T[i]=T[i]||[];if(el.dataset.sk!==undefined){const m=+el.dataset.sk;if(!Array.isArray(c[j]))c[j]=[];c[j][m]=el.checked;}else c[j]=el.checked;(rs.ut[x]=rs.ut[x]||{})[i]=1;save();after();});}
/* ---- finish + scoring ---- */
function osFinish(run){clearInterval(OST);OST=null;const P=P_();
  const res=Object.assign({},run,{stage:"done",end:now()});delete res.left;delete res.at;delete res.paused;delete res.warned;
  /* SIM: tick the checklist from keywords in what was typed (no AI, unlimited) — editable on the result page */
  if(run.mode==="sim")res.seq.forEach((sl,ix)=>{if(sl.k!=="st")return;const q=osSt(res,sl.u),A=(res.ans||{})[ix]||{};if(!q)return;q.subs.forEach(s=>{const t=(A[s._i]||"").trim();if(!t||!s.kw||!(s.points||[]).length)return;((res.tick[ix]=res.tick[ix]||{}))[s._i]=mqKwTicks(s,t);});});
  res.reached=Math.min(run.pos+1,run.seq.length);
  P.osHist=(P.osHist||[]).concat(res).slice(-40);P.osSel=res.id;P.osRun=null;save();osBeep(3,990);go(ward+"/osr");}
function osSubFrac(rs,ix,s){const i=s._i,gm=((rs.gm||{})[ix]||{})[i];if(gm!==undefined&&gm!==null)return gm/2;
  const ut=((rs.ut||{})[ix]||{})[i],ai=((rs.ai||{})[ix]||{})[i];if(!ut&&ai&&ai.grade!=null)return ai.grade/2;
  const c=osTicks(rs,ix,s);if(!(s.points||[]).length)return null;const sc=mqPtsScore(s,c);return sc.tot?sc.got/sc.tot:0;}
function osStScore(rs,ix){const q=osSt(rs,rs.seq[ix].u);if(!q)return null;let tot=0,got=0;q.subs.forEach(s=>{const m=mqMk(s),f=osSubFrac(rs,ix,s);tot+=m;got+=m*(f||0);});return {tot,got,pct:tot?got/tot*100:0};}
function osTotal(rs){const S=rs.seq.map((sl,ix)=>sl.k==="st"?{ix,sc:osStScore(rs,ix),q:osSt(rs,sl.u)}:null).filter(x=>x&&x.sc);
  const pct=S.length?S.reduce((a,x)=>a+x.sc.pct,0)/S.length:0,pass=S.filter(x=>x.sc.pct>=60).length,byT={};
  S.forEach(x=>{const k=(x.q&&x.q.topic)||"";(byT[k]=byT[k]||[]).push(x.sc.pct);});return {S,pct,pass,byT};}
const osGrade=p=>(GRADES.find(([m])=>p>=m)||[0,"F"])[1];
/* ---- result page (#/<ward>/osr) ---- */
function osResView(){const P=P_(),rs=osLastRes();if(!rs)return go(ward+"/osl");const TT=osTotal(rs),g=osGrade(TT.pct),O=osOrder(rs);
  let h=`<div class="mqv osv"><div class="whead"><h1 class="h2">ผลสอบ Legendary · OSCE</h1><a href="#/${esc(ward)}">กลับหน้าวอร์ด</a></div>
    <p class="sub" style="margin:0 0 10px">${fmtDT(rs.ts)} · <b>${rs.mode==="irl"?"IRL":"SIM"}</b> · ${TT.S.length} ข้อ · ข้อละ ${osFmt(rs.per)} นาที · ${rs.order==="custom"?"ออกแบบเอง":rs.order==="block"?"แยกกลุ่ม":"สุ่มปนกัน"} · เริ่มที่ข้อ ${rs.start+1}</p>
    <div class="osgrade"><span class="g">${g}</span><span class="p">${TT.pct.toFixed(1)}%</span><span class="hint">ผ่าน (≥ 60%) <b>${TT.pass}/${TT.S.length}</b> ข้อ</span></div>`;
  if(rs.mode==="irl"){const un=TT.S.filter(x=>{const q=x.q;return q&&!q.subs.some(s=>((rs.ut||{})[x.ix]||{})[s._i]||((rs.gm||{})[x.ix]||{})[s._i]!=null);}).length;if(un)h+=`<p class="hint">IRL: ยังไม่ได้ติ๊ก checklist ${un} ข้อ — ข้อที่ไม่ติ๊กนับ 0 คะแนน ติ๊กย้อนหลังด้านล่างได้</p>`;}
  else h+=`<p class="hint">SIM: เว็บติ๊ก checklist ให้จากคำสำคัญในคำตอบ (คร่าว ๆ) — ตรวจและแก้ติ๊กเอง หรือกดให้คะแนนเองได้ทุกข้อย่อย${mqAiAvail()?" · ให้ AI ตรวจได้ทีละข้อ":""}</p>`;
  h+=`<div class="card"><h3>คะแนนตามหัวข้อ</h3><table class="ostab"><tbody>${Object.entries(TT.byT).map(([k,a])=>{const p=a.reduce((x,y)=>x+y,0)/a.length;return `<tr><td>${esc(osTN(k))}</td><td>${a.length} ข้อ</td><td style="color:${mqPct(Math.round(p))}"><b>${p.toFixed(0)}%</b></td></tr>`;}).join("")}</tbody></table></div>`;
  h+=`<div class="tl-h">ทุกข้อ (เรียงตามเลขข้อ)</div><div class="osres">`;
  rs.seq.forEach((sl,ix)=>{if(sl.k==="rest"){h+=`<div class="osslot rest"><span class="on">${ix+1}</span><span class="oi">☕</span><span class="ot">ข้อพัก</span></div>`;return;}
    const q=osSt(rs,sl.u),sc=osStScore(rs,ix),reached=O.indexOf(ix)<(rs.reached||O.length);if(!q)return;
    h+=`<details class="osr"${P.osOpen===ix?" open":""} data-osr="${ix}"><summary><span class="on">${ix+1}</span><span class="oi">${OS_TI[osSlotType(rs,sl)]}</span><span class="ot">${esc(osTN(q.topic))} · ${esc(q.title||"")}${q.ai?' <span class="tag">AI</span>':""}${reached?"":' <span class="tag warn">ไม่ได้ทำ</span>'}</span><b class="osp" style="color:${mqPct(Math.round(sc.pct))}">${sc.pct.toFixed(0)}%</b></summary><div class="osrb">`;
    h+=`<div class="stem">${q.stem}</div>${mqImgs(q.img,q.imgNote)}`;
    q.subs.forEach(s=>{const i=s._i,t=(((rs.ans||{})[ix]||{})[i]||"").trim(),f=osSubFrac(rs,ix,s),gm=((rs.gm||{})[ix]||{})[i],ai=((rs.ai||{})[ix]||{})[i];
      h+=`<div class="subq"><div class="sh"><div class="sq">${osQ(s,ix)}</div><span class="mk">${f===null?"–":+(mqMk(s)*f).toFixed(1)}/${mqMk(s)}</span></div>`;
      if(rs.mode==="sim")h+=`<div class="mmine-lab">คำตอบของฉัน</div><div class="osmine">${t?mqNl(t):'<span class="muted">— ไม่ได้พิมพ์ —</span>'}</div>`;
      if(ai)h+=`<div class="aibox sblk"><b>🤖 AI:</b> ${mqNl(ai.assess||"")}${ai.missing?`<div class="aimiss"><b>ขาด:</b> ${mqNl(ai.missing)}</div>`:""}</div>`;
      h+=`<div class="model"><span class="lab">เฉลย</span><div class="a">${s.ans||""}</div>${s.exp?`<div class="mexp">${mqRich(s.exp)}</div>`:""}</div>`;
      h+=osChkHTML(rs,ix,q,s,false);
      if(s.rubric)h+=`<div class="rubric"><b>เกณฑ์:</b> ${s.rubric}</div>`;if(s.flag)h+=`<div class="sub-meta"><span class="tag warn">${esc(s.flag)}</span></div>`;
      h+=`<div class="grade"><span class="gl">ให้คะแนนเอง (ทับ checklist):</span>${[[2,"✓ ได้"],[1,"◐ บางส่วน"],[0,"✗ ไม่ได้"]].map(([x,tx])=>`<button class="mgbtn g${x}" data-osg="${ix}" data-ss="${i}" data-g="${x}" aria-pressed="${gm===x}">${tx}</button>`).join("")}</div></div>`;});
    if(q.sp)h+=`<div class="sec notes"><h3>บทผู้ป่วยจำลอง / ผลตรวจ</h3><div class="box">${q.sp}</div></div>`;
    if(q.interp)h+=`<div class="sec"><h3>ประเด็นของข้อนี้</h3><p>${q.interp}</p></div>`;
    if((q.summary||[]).length)h+=`<div class="sec"><h3>สรุป</h3><ul>${q.summary.map(x=>`<li>${x}</li>`).join("")}</ul></div>`;
    if(q.opinion)h+=`<div class="sec opinion"><h3>ความเห็นของผม</h3><div class="box">${q.opinion}</div></div>`;
    if(q.flag)h+=`<div class="sub-meta"><span class="tag warn">${esc(q.flag)}</span></div>`;
    h+=`<div class="row2">${!q.ai?`<button class="link" type="button" data-osgo="${esc(q.uid)}">เปิดข้อนี้ใน Service round ↗</button>`:""}${rs.mode==="sim"&&mqAiAvail()&&q.subs.some(s=>(((rs.ans||{})[ix]||{})[s._i]||"").trim())?(OSAI.busy===ix+1?`<span class="hint">⏳ AI กำลังตรวจ…</span>`:`<button class="link ailink" type="button" data-osai="${ix}">🤖 ให้ AI ตรวจข้อนี้</button>`):""}</div></div></details>`;});
  h+=`</div><div class="stack"><a class="btn primary" href="#/${esc(ward)}/osl">สอบใหม่</a><a class="btn" href="#/${esc(ward)}/osh">ประวัติทั้งหมด</a></div></div>`;
  $("main").innerHTML=h;
  const re=()=>{const y=scrollY;osResView();scrollTo(0,y);};
  document.querySelectorAll("details.osr").forEach(d=>d.addEventListener("toggle",()=>{if(d.open)P.osOpen=+d.dataset.osr;}));
  osBindChk(rs,null,re);
  document.querySelectorAll("[data-osg]").forEach(b=>b.onclick=()=>{const ix=+b.dataset.osg,i=+b.dataset.ss,x=+b.dataset.g;rs.gm=rs.gm||{};const G=rs.gm[ix]=rs.gm[ix]||{};if(G[i]===x)delete G[i];else G[i]=x;P.osOpen=ix;save();re();});
  document.querySelectorAll("[data-osgo]").forEach(b=>b.onclick=()=>{P_().type="OSCE";mqVset({r:"service",set:"all",style:"all",status:"all"});save();mqOpen(b.dataset.osgo,undefined,"service");});
  document.querySelectorAll("[data-osai]").forEach(b=>b.onclick=()=>osAiGrade(rs,+b.dataset.osai));}
async function osAiGrade(rs,ix){const q=osSt(rs,rs.seq[ix].u);if(!q||OSAI.busy)return;const A=(rs.ans||{})[ix]||{},subs=q.subs.filter(s=>(A[s._i]||"").trim());if(!subs.length)return;
  OSAI.busy=ix+1;P_().osOpen=ix;osResView();
  try{const out=await aiJSON(mqAiPrompt(q,0,subs,{t:A}),3000),arr=Array.isArray(out)?out:(out&&Array.isArray(out.results)?out.results:[]);rs.ai=rs.ai||{};const X=rs.ai[ix]=rs.ai[ix]||{};
    arr.forEach((o,j)=>{const id=subs.some(s=>s._i===+o.id)?+o.id:(subs[j]||{})._i;if(id===undefined)return;const LV={"ได้":2,"บางส่วน":1,"ไม่ได้":0};let g=LV[String(o.level||"").trim()];if(g===undefined){g=Math.round(+o.grade);if(!(g===0||g===1||g===2))g=null;}
      X[id]={grade:g,assess:String(o.assess||"").slice(0,1500),missing:g===2?"":String(o.missing||"").slice(0,800)};if(rs.ut&&rs.ut[ix])delete rs.ut[ix][id];});save();}
  catch(e){toast((typeof admMsg==="function"&&admMsg(e))||"AI ตรวจไม่สำเร็จ");}
  finally{OSAI.busy=0;const y=scrollY;osResView();scrollTo(0,y);}}
/* ---- history (#/<ward>/osh) ---- */
function osHistView(){const P=P_(),H=(P.osHist||[]).slice().reverse();
  let h=`<div class="mqv osv"><div class="whead"><h1 class="h2">ประวัติ Legendary round · OSCE</h1><a href="#/${esc(ward)}/osl">กลับหน้าตั้งค่า</a></div>`;
  if(!H.length)h+=`<div class="empty">ยังไม่เคยสอบ Legendary round OSCE ในวอร์ดนี้</div>`;
  else{const ps=H.map(r=>osTotal(r).pct);h+=`<p class="statline">สอบ <b>${H.length}</b> ครั้ง · เฉลี่ย <b>${(ps.reduce((a,b)=>a+b,0)/ps.length).toFixed(1)}%</b> · ดีสุด <b>${Math.max(...ps).toFixed(1)}%</b> · ล่าสุด <b>${ps[0].toFixed(1)}%</b></p><div class="trows">`+
    H.map((r,k)=>{const T=osTotal(r);return `<div class="crow"><button class="cn" type="button" data-osh="${esc(r.id)}"><span class="cl">ครั้ง</span>${H.length-k}</button><div style="min-width:0"><div class="cq">${fmtDT(r.ts)} · ${r.mode==="irl"?"IRL":"SIM"} · ${T.S.length} ข้อ</div><div class="hint">เกรด <b>${osGrade(T.pct)}</b> · ${T.pct.toFixed(1)}% · ผ่าน ${T.pass}/${T.S.length} ข้อ</div></div><div class="cmeta"><button class="link" type="button" data-oshdel="${esc(r.id)}">ลบ</button></div></div>`;}).join("")+`</div>`;}
  h+=`</div>`;$("main").innerHTML=h;
  document.querySelectorAll("[data-osh]").forEach(b=>b.onclick=()=>{P.osSel=b.dataset.osh;save();go(ward+"/osr");});
  document.querySelectorAll("[data-oshdel]").forEach(b=>b.onclick=async()=>{if(!await uiAsk("ลบผลสอบครั้งนี้?"))return;P.osHist=P.osHist.filter(x=>x.id!==b.dataset.oshdel);P.osDel=Object.assign(P.osDel||{},{[b.dataset.oshdel]:now()});save();osHistView();});}
/* ---- sync between devices (called from mergeSt) ---- */
function osMerge(l,r){const del=Object.assign({},l.osDel||{},r.osDel||{});l.osDel=del;const m=new Map();(l.osHist||[]).concat(r.osHist||[]).forEach(x=>{if(!x||del[x.id])return;const a=m.get(x.id);if(!a||(x.end||0)>=(a.end||0))m.set(x.id,x);});
  l.osHist=[...m.values()].sort((a,b)=>a.ts-b.ts).slice(-40);
  if(r.osRun&&(!l.osRun||(r.osRun.ts||0)>(l.osRun.ts||0)))l.osRun=r.osRun;if(l.osRun&&l.osHist.some(x=>x.id===l.osRun.id))l.osRun=null;
  if(r.osSet&&!l.osSet)l.osSet=r.osSet;}
/* ward home top of the OSCE tab */
function osHomeTop(L){const E=osExamCfg(),T=osTopics(),cur=osRunCur();
  let h=`<p class="hint" style="margin:6px 0 10px">${E?`สอบจริง <b>${E.n} ข้อ ข้อละ ${E.min} นาที</b>`:`ยังไม่ได้ตั้งจำนวนข้อ/เวลาสอบจริง (<a href="#/${esc(ward)}/dates">ตั้งได้ที่หน้าแก้วันสอบ</a>)`}${T.length?` · หัวข้อ: ${T.map(t=>esc(t.name)).join(", ")}`:""}</p>`;
  if(cur)h+=`<button class="resume" id="osHomeRes"><span>กำลังสอบ <b>Legendary OSCE</b><span class="rd">ช่องที่ ${(cur.pos||0)+1}/${cur.seq.length} — กดเพื่อสอบต่อ</span></span><span class="go">→</span></button>`;
  return h;}
/* test hook for tools/smoke_site.py-style checks: read the running paper and fast-forward the clock */
window.__os={cur:()=>osRunCur(),ff:s=>{const r=osRunCur();if(r){r.left=s;r.at=now();r.paused=false;}},finish:()=>{const r=osRunCur();if(r)osFinish(r);}};

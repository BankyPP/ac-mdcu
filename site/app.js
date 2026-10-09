(function(){
"use strict";
/* ============================================================
   AC MCQ website — wards → home (MCQ/MEQ/OSCE · Phase 1/2 · rounds) → quiz
   Question view is the same as the platform (template.html).
   Progress: localStorage per browser; optional Firebase account sync.
   ============================================================ */
const L="ABCDE";
const CFG=(typeof CONFIG!=="undefined"&&CONFIG)||{};
const $=id=>document.getElementById(id);
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const plain=s=>{try{return (new DOMParser().parseFromString(String(s==null?"":s),"text/html").body.textContent||"").replace(/\s+/g," ").trim();}catch(e){return String(s||"");}};
const H7=s=>{let h=0x811c9dc5;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,0x01000193)>>>0;}return h.toString(36).padStart(7,"0");};
const now=()=>Date.now();
const IN_FRAME=(()=>{try{return window.top!==window;}catch(e){return true;}})();   /* true when shown inside claude.ai (artifact) */

/* ---------------- wards & question banks ---------------- */
const WL=(CFG.wards&&CFG.wards.length)?CFG.wards:[{id:"main",name:CFG.brand||"คลังข้อสอบ",brand:CFG.brand||"MCQ",short:"MCQ"}];
/* every ward gets the study year appended (config "year", e.g. Y4 → later Y5) */
if(CFG.year)WL.forEach(w=>{const y=" "+CFG.year;if(!String(w.name).endsWith(y))w.name+=y;w.short=(w.short||w.id)+(String(w.short||"").endsWith(y)?"":y);});
const YEAR=q=>parseInt(String(q.set).replace(/\D/g,""))||0;
const ROK=r=>{r=String(r||"");let m=/^Ro?([A-Z])(\d*)$/.exec(r);if(m)return [0,m[1].charCodeAt(0),+m[2]||0];m=/^Ro?(\d+)$/.exec(r);if(m)return [1,+m[1],0];return [2,0,0];};
const cmpRo=(a,b)=>{const x=ROK(a.ro),y=ROK(b.ro);return x[0]-y[0]||x[1]-y[1]||x[2]-y[2];};
const setKey=q=>q.set+" "+q.ro;
WL.forEach(w=>{
  const W=WARDS[w.id]||(WARDS[w.id]={QB:[]});W.cfg=w;const QB=W.QB;
  QB.forEach((q,i)=>{q.rid=i+1;});
  QB.sort((a,b)=>YEAR(b)-YEAR(a)||cmpRo(a,b)||a.rid-b.rid);
  QB.forEach((q,i)=>{q.id=i+1;});
  W.RID2ID={};W.byRid={};QB.forEach(q=>{W.RID2ID[q.rid]=q.id;W.byRid[q.rid]=q;});
  const seen={};QB.forEach(q=>{let u=[q.set,q.ro,q.file,q.page,q.orig,(q.stem||"").slice(0,48)].join("|");if(seen[u])u+="#"+(++seen[u]);else seen[u]=1;q.uid=u;});
  W.byU={};QB.forEach(q=>{W.byU[q.uid]=q;});
  W.sets=[...new Set(QB.map(setKey))];
  W.R=s=>String(s==null?"":s).replace(/(ข้อ(?:ถัดไป)?\s*)(\d[\d,\s]*(?:\([^()]*\)[\d,\s]*)*)/g,(m,p,nums)=>p+nums.replace(/\([^()]*\)|\d+/g,t=>t[0]==="("?W.R(t):((+t>=10&&W.RID2ID[+t])?W.RID2ID[+t]:t)));
  /* Unit round banks (<dir>/unit_*.js → W.UNIT.push({id,title,short,src,QB:[…]})): new case-based questions per lecture, shared by both phases */
  W.UNIT=(W.UNIT||[]).filter(x=>x&&x.id&&Array.isArray(x.QB));W.byLec={};
  W.UNIT.forEach(Lc=>{W.byLec[Lc.id]=Lc;Lc.QB.forEach((q,i)=>{q.unit=Lc.id;q.n=q.n||i+1;q.id="U"+q.n;q.set=Lc.short||Lc.title;q.ro="Unit";q.uid="U|"+Lc.id+"|"+q.n;W.byU[q.uid]=q;});});
});

/* ---------------- state ---------------- */
const KEY=(CFG.storageKey||"mcq-bank")+"-site-v3", IKEY=KEY+"-ink";
const ld=k=>{try{return JSON.parse(localStorage.getItem(k)||"null");}catch(e){return null;}};
let st=ld(KEY)||{};
if(!st.w)st.w={}; if(st.phase!==2)st.phase=1;
let ink=ld(IKEY)||{};
const blankSvc=()=>({set:"all",status:"all",cur:""});
function PWof(S,id){
  let P=S.w[id];if(!P)P=S.w[id]={};
  P.att=P.att||{};P.att[1]=P.att[1]||{};P.att[2]=P.att[2]||{};
  P.pre=P.pre||{};P.pre[1]=P.pre[1]||{};P.pre[2]=P.pre[2]||{};
  P.open=P.open||{};P.open[1]=P.open[1]||{};P.open[2]=P.open[2]||{};
  P.svc=P.svc||{};P.svc[1]=P.svc[1]||blankSvc();P.svc[2]=P.svc[2]||blankSvc();
  P.flag=P.flag||{};P.post=P.post||{};P.pick=P.pick||[];P.type=P.type||"MCQ";
  if(P.sess===undefined)P.sess=null;
  P.unit=P.unit||{};P.unit.att=P.unit.att||{};        /* Unit round answers (both phases share) */
  P.morn=P.morn||{};                                   /* Morning round: {1|2: {day, list, ans, ts}} */
  P.adm=P.adm||{cur:null,ans:null,next:null,n:0,right:0,recent:[],ts:0};   /* Admission round */
  return P;
}
/* migrate the earlier single-sheet site/artifact format {a:{uid:ans},t} → Phase 1 attempts */
(function(){if(st.migrated)return;const o=ld(CFG.storageKey||"");if(o&&o.a&&typeof o.a==="object"){const P=PWof(st,WL[0].id),t=o.t||now();Object.keys(o.a).forEach(u=>{if(typeof o.a[u]==="number"&&!P.att[1][u])P.att[1][u]=[[o.a[u],t]];});}st.migrated=1;})();
function persist(){try{localStorage.setItem(KEY,JSON.stringify(st));}catch(e){toast("พื้นที่เก็บข้อมูลในเบราว์เซอร์เต็ม");}}
function save(){st.t=now();persist();cloudPush();}
function saveInk(k){if(ink[k])ink[k].ts=now();try{localStorage.setItem(IKEY,JSON.stringify(ink));}catch(e){toast("พื้นที่เก็บข้อมูลในเบราว์เซอร์เต็ม — ลบรูปที่เขียนบางข้อออก");}cloudInk(k);}

let ward=null;               // current ward id
const W_=()=>WARDS[ward];
const P_=()=>PWof(st,ward);
const ph=()=>st.phase===2?2:1;
const atts=(P,p,u)=>P.att[p][u]||[];
const lastA=(P,p,u)=>{const a=atts(P,p,u);return a.length?a[a.length-1]:null;};
const lockedAns=(P,p,u)=>{const a=lastA(P,p,u);if(!a)return undefined;const o=P.open[p][u];if(o&&o>=a[1])return undefined;return a[0];};
const latestAny=(P,u)=>{const a=lastA(P,1,u),b=lastA(P,2,u);if(!a)return b;if(!b)return a;return a[1]>=b[1]?a:b;};
const streak=(P,p,q)=>{const a=atts(P,p,q.uid);let n=0;for(let i=a.length-1;i>=0&&a[i][0]===q.ans;i--)n++;return n;};
const uAtts=(P,u)=>P.unit.att[u]||[];
const flagged=(P,u)=>!!(P.flag[u]&&P.flag[u][0]);
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};

/* ---------------- toast ---------------- */
let toastT=null;
function toast(m){const t=$("toast");t.textContent=m;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>{t.hidden=true;},2600);}

/* ---------------- router ---------------- */
let view="wards", pick=null;
function parseHash(){const h=(location.hash||"").replace(/^#\/?/,"");if(/(^|&)(p|all)=/.test(h))return {w:"",v:""};const a=h.split("/");return {w:a[0]||"",v:a[1]||""};}
function go(path){const h="#/"+path;if(location.hash===h)route();else location.hash=h;}
window.addEventListener("hashchange",route);
function route(){
  const h=parseHash();closeS(true);pick=null;
  if(h.w==="signin"){ward=null;return show("signin");}
  if(!h.w||!WARDS[h.w]||!WL.some(x=>x.id===h.w)){if(QR)qStop();ward=null;return show("wards");}
  if(QR&&QR.ward!==h.w)qStop();
  ward=h.w;
  let v=h.v||"home";
  if(v==="sess"&&!validSess())v="home";
  if(v==="result"&&!P_().sess)v="home";
  if(!["home","service","svc","grand","sess","result","hy","kw","unit","quality","qedit","adm"].includes(v))v="home";
  show(v);
}
function validSess(){const P=P_(),s=P.sess;if(!s)return false;s.list=(s.list||[]).filter(u=>W_().byU[u]);if(!s.list.length){P.sess=null;return false;}if(s.cur>=s.list.length)s.cur=s.list.length-1;if(s.cur<0)s.cur=0;return true;}
function show(v){
  view=v;const quiz=v==="svc"||v==="sess"||v==="adm";
  clearInterval(show._t);
  $("nav").hidden=!quiz;$("openSheet").hidden=!quiz||v==="adm";$("homeBtn").hidden=v==="wards";paintQR();
  const w=ward&&W_();const fill=(t,ty)=>String(t).replace(/\{short\}/g,w.cfg.short||w.cfg.id).replace(/\{type\}/g,ty||"");
  $("brand").classList.toggle("long",!!w&&!quiz);
  $("brand").textContent=w?(quiz?fill(CFG.quizBrand||"AC {short} {type}","MCQ"):fill(CFG.homeBrand||w.cfg.brand||w.cfg.name)):(CFG.siteName||CFG.title||"คลังข้อสอบเก่า");
  document.title=CFG.title||"คลังข้อสอบเก่า";
  if(!quiz){$("prog").style.width="0";}
  paintAcct();
  ({wards:rWards,signin:rSignin,home:rHome,service:rService,grand:rGrand,svc:rQuiz,sess:rQuiz,result:rResult,hy:rHY,kw:rKW,unit:rUnit,quality:rQuality,qedit:rQEdit,adm:rAdm})[v]();
  if(!quiz)window.scrollTo(0,0);
}
$("homeBtn").onclick=()=>{if(view==="home"||!ward)go("");else go(ward);};

/* ---------------- wards ---------------- */
function rWards(){
  let h=`<h1 class="h1">${esc(CFG.siteName||"คลังข้อสอบเก่า")}</h1><p class="sub">เลือกวอร์ดที่กำลังวนอยู่</p>`;
  h+=WL.map(w=>{const n=(WARDS[w.id]||{QB:[]}).QB.length;return `<a class="wcard" href="#/${esc(w.id)}"><span class="wb" style="font-size:${(()=>{const n=Math.max(...String(w.short||w.id).split(" ").map(x=>x.length));return n>5?11:n>4?12.5:14;})()}px">${esc(w.short||w.id)}</span><span><b>${esc(w.name)}</b><span class="rd">${esc(w.sub||"")}${w.sub?" · ":""}${n?`${n} ข้อ`:"ยังไม่มีข้อสอบ"}</span></span></a>`;}).join("");
  h+=acctCard();
  $("main").innerHTML=h;bindAcctCard();
}
function acctCard(){
  if(cl)return `<div class="card"><h3>☁️ บันทึกในบัญชี Claude แล้ว</h3><span class="rd" style="margin:0">ความคืบหน้าบันทึกในบัญชี Claude ของคุณอัตโนมัติ เปิดจากเครื่องไหนก็ได้</span></div>`;
  if(HAS_CLAUDE()&&!fbOn())return "";
  if(fb&&fb.user)return `<div class="card"><h3>☁️ บันทึกในบัญชีแล้ว</h3><span class="rd">${esc(who(fb.user))} · เปิดจากเครื่องไหนก็ได้ความคืบหน้าเดิม</span><button class="linkbtn" data-act="acct">จัดการบัญชี</button></div>`;
  return `<div class="card"><h3>เข้าสู่ระบบ (ไม่บังคับ)</h3><span class="rd">ใช้งานได้เลยโดยไม่ต้องสมัคร ความคืบหน้าจะเก็บในเบราว์เซอร์นี้ ถ้าเข้าสู่ระบบ จะบันทึกในบัญชีและใช้ได้หลายเครื่อง</span><button class="btn primary" data-act="acct">เข้าสู่ระบบ / สมัคร</button></div>`;
}
function bindAcctCard(){document.querySelectorAll('[data-act="acct"]').forEach(b=>b.onclick=()=>go("signin"));}

/* ---------------- home ---------------- */
const ROUNDS=[
  {k:"grand",n:"Grand round",d:"สุ่มข้อจากทั้งคลัง ไม่สนว่าปีไหนหรือเรื่องอะไร"},
  {k:"service",n:"Service round",d:"เลือกปีและ rotation ที่อยากทำ ทำแบบกระดาษคำตอบ"},
  {k:"morning",n:"Morning round",d:"วันละ 10 ข้อ จากข้อที่เคยทำแล้ว และโจทย์ Unit round ที่ยังไม่เคยเจอ ชุดใหม่ทุกวัน 07:30"},
  {k:"legend",n:"Legendary round",d:"",soon:1},
  {k:"staff",n:"Ward staff round",d:"ทวนข้อที่เคยทำแล้ว แต่ยังทำถูกติดกันไม่ถึง 2 ครั้ง"},
  {k:"teach",n:"Teaching round",d:"",soon:1},
  {k:"advisor",n:"Advisor round",d:"",soon:1},
  {k:"unit",n:"Unit round",d:"โจทย์ใหม่แบบ case-based จาก lecture แต่ละบท สุ่มใหม่ทุกครั้งที่เข้า"},
  {k:"quality",n:"Quality round",d:"Speedrun ข้อที่ยังไม่เคยทำ จับเวลาเป็นเซต ตั้งค่าเองได้ทั้งหมด"},
  {k:"admission",n:"Admission round",d:"เคสใหม่ที่ AI สร้างให้ทีละข้อ เนื้อหาเหมาะกับชั้นปีในวอร์ดนี้"}
];
const yearTxt=()=>{const m=/(\d+)/.exec(CFG.year||"");return m?"ปี "+m[1]:"";};
/* ---------------- Morning round: 10 a day, new set at 07:30 (phone's clock) ---------------- */
const MORN_N=10;
const mDay=t=>{const d=new Date((t||now())-7.5*3600e3);return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");};
function mNext(){const d=new Date(),r=new Date(d);r.setHours(7,30,0,0);if(r<=d)r.setDate(r.getDate()+1);return r.getTime();}
const hms=ms=>{const x=Math.max(0,Math.floor(ms/1000));return String(Math.floor(x/3600)).padStart(2,"0")+":"+String(Math.floor(x/60)%60).padStart(2,"0")+":"+String(x%60).padStart(2,"0");};
function mPool(P,p){const W=W_();let pool=W.QB.filter(q=>atts(P,p,q.uid).length);W.UNIT.forEach(Lc=>{pool=pool.concat(Lc.QB.filter(q=>!uAtts(P,q.uid).length));});return pool;}
function morning(make){const P=P_(),p=ph(),d=mDay();let m=P.morn[p];
  if(m&&m.day===d){m.list=m.list.filter(u=>W_().byU[u]);return m;}
  if(!make)return null;
  const pool=mPool(P,p);if(!pool.length)return null;
  m=P.morn[p]={day:d,list:shuffle(pool).slice(0,MORN_N).map(q=>q.uid),ans:{},ts:now()};save();return m;}
function startMorning(){const m=morning(true);if(!m){toast("ยังไม่มีข้อให้ทำ — ต้องเคยทำข้อสอบเก่าใน Phase นี้ หรือมีโจทย์ Unit round");return;}
  qStop();const i=m.list.findIndex(u=>m.ans[u]===undefined);
  P_().sess={kind:"morning",title:"Morning round",ph:ph(),day:m.day,list:m.list.slice(),ans:Object.assign({},m.ans),cur:i<0?0:i,ts:now()};save();go(ward+"/sess");}
const staffList=()=>{const P=P_(),p=ph();return W_().QB.filter(q=>atts(P,p,q.uid).length&&streak(P,p,q)<2);};
const p2lists=()=>{const P=P_(),QB=W_().QB;return {
  wrong:QB.filter(q=>{const a=latestAny(P,q.uid);return a&&a[0]!==q.ans;}),
  right:QB.filter(q=>{const a=latestAny(P,q.uid);return a&&a[0]===q.ans;}),
  flag:QB.filter(q=>flagged(P,q.uid)),
  nop1:QB.filter(q=>!atts(P,1,q.uid).length)};};
function rHome(){
  const W=W_(),P=P_(),p=ph(),w=W.cfg,QB=W.QB;
  const type=P.type||"MCQ",hasQ=type==="MCQ"&&QB.length>0;
  let h=`<div class="whead"><h1 class="h2">${esc(w.name)}</h1><a href="#/">เปลี่ยนวอร์ด</a></div><p class="sub" style="margin:0">${esc(w.sub||"")}</p>`;
  h+=`<div class="tabs" role="tablist">${["MCQ","MEQ","OSCE"].map(t=>`<button class="tab" role="tab" aria-selected="${t===type}" data-type="${t}">${t}</button>`).join("")}</div>`;
  const noEx=(w.noExam||[]).includes(type);
  if(!noEx){h+=`<div class="seg" role="group" aria-label="Phase"><button data-ph="1" aria-pressed="${p===1}"><b>Phase 1</b>ช่วงเรียน</button><button data-ph="2" aria-pressed="${p===2}"><b>Phase 2</b>ช่วงใกล้สอบ</button></div>`;
  h+=`<p class="phase-hint">${p===1?"ทำเพื่อเก็บความรู้ไปใช้บนวอร์ด และดูว่าข้อสอบชอบออกแนวไหน เนื้อหาไหนมีหรือไม่มีในสไลด์":"ทวนข้อสอบเก่ารอบสองก่อนสอบ มีหน้าสรุป high-yield, keyword และทวนเฉพาะข้อที่ยังผิด/ไม่มั่นใจ — ความคืบหน้าแยกจาก Phase 1"}</p>`;}
  if(noEx){
    h+=`<div class="empty" style="padding:44px 10px"><b style="font-family:var(--num);font-size:18px;color:var(--ink)">${esc(w.name)} ไม่มีสอบ ${type}</b><br><span class="hint">วอร์ดนี้สอบเฉพาะ ${["MCQ","MEQ","OSCE"].filter(t=>!(w.noExam||[]).includes(t)).join(" / ")}</span></div>`;
  }else if(type!=="MCQ"){
    h+=`<div class="empty" style="padding:40px 10px">ยังไม่มีข้อสอบ ${type} ในวอร์ดนี้<br><span class="hint">ส่งไฟล์ ${type} ให้ Claude แล้วให้เพิ่มเข้าเว็บ</span></div>`;
  }else{
    if(!QB.length)h+=`<div class="card"><h3>ยังไม่มีข้อสอบในคลัง</h3><span class="rd" style="margin:0">ส่งไฟล์ข้อสอบเก่า (PDF/รูป/เอกสาร) ให้ Claude แล้วให้เพิ่มเข้าเว็บ ปุ่มด้านล่างจะใช้ได้เมื่อมีข้อสอบ</span></div>`;
    const done=QB.filter(q=>atts(P,p,q.uid).length),right=done.filter(q=>lastA(P,p,q.uid)[0]===q.ans);
    h+=`<p class="statline">คลังมี <b>${QB.length}</b> ข้อ · Phase ${p} ทำแล้ว <b>${done.length}</b> ข้อ · ล่าสุดถูก <b>${done.length?Math.round(right.length/done.length*100)+"%":"–"}</b> · <span style="white-space:nowrap">มี lecture <b>${(w.lectures||[]).length}</b> บท</span></p>`;
    const s=P.sess;
    if(s&&s.list&&s.list.length&&s.ph===p){const a=Object.keys(s.ans).length;if(a<s.list.length)h+=`<button class="resume" id="resume"><span>ทำต่อ: <b>${esc(s.title)}</b><span class="rd">ทำไป ${a}/${s.list.length} ข้อ</span></span><span class="go">→</span></button>`;}
    if(p===2){const l=p2lists();
      h+=`<div class="card"><h3>ทบทวนก่อนสอบ</h3><span class="rd">สรุปจากข้อสอบเก่าทุกปี และเลือกทวนเฉพาะกลุ่มข้อ</span><div class="tools">
      <button class="tool" data-go="hy">📘 สรุป High-yield</button><button class="tool" data-go="kw">🔑 Keyword ตอบข้อสอบ</button>
      <button class="tool" data-p2="wrong">✗ ข้อที่ยังผิดอยู่<span class="n">${l.wrong.length}</span></button>
      <button class="tool" data-p2="right">✓ ข้อที่ทำถูกแล้ว<span class="n">${l.right.length}</span></button>
      <button class="tool" data-p2="flag">⚑ ข้อที่ยังไม่มั่นใจ<span class="n">${l.flag.length}</span></button>
      <button class="tool" data-p2="nop1">○ ไม่เคยทำใน Phase 1<span class="n">${l.nop1.length}</span></button></div></div>`;}
    const sc=staffList().length;
    const mm=morning(false),ma=mm?mm.list.filter(u=>mm.ans[u]!==undefined).length:0;
    const badge=r=>r.soon?'<span class="soon">เร็ว ๆ นี้</span>':r.k==="staff"&&sc?`<span class="badge">${sc}</span>`:r.k==="morning"&&mm?`<span class="badge">${ma}/${mm.list.length}</span>`:"";
    h+=`<div class="rounds">${ROUNDS.map((r,i)=>`<button class="round" data-round="${r.k}" aria-disabled="${!!r.soon}">${badge(r)}<span class="rn">${String(i+1).padStart(2,"0")}</span><b>${r.n}</b><span class="rd">${r.soon?"รายละเอียดจะเพิ่มภายหลัง":r.d}</span>${r.k==="morning"?`<span class="mclock">ชุดใหม่ใน <b id="mClock">${hms(mNext()-now())}</b></span>`:""}</button>`).join("")}</div>`;
  }
  h+=`<div class="card"><h3>ย้ายความคืบหน้า</h3><span class="rd"><b>ลิงก์</b> พาไปได้ทุกวอร์ด ทุก Phase พร้อม ⚑ (ไม่รวมโน้ต) · <b>ไฟล์สำรอง</b> ครบทุกอย่างรวมโน้ตและที่เขียนด้วยมือ</span><div class="tools"><button class="tool" id="hExp">🔗 ส่งลิงก์ความคืบหน้า</button><button class="tool" id="hImp">⤵ นำเข้าลิงก์ / รหัส</button><button class="tool" id="hFile">💾 ดาวน์โหลดไฟล์สำรอง</button><button class="tool" id="hFileIn">📂 นำเข้าไฟล์สำรอง</button></div></div>`;
  h+=`<p class="hint" style="text-align:center;margin-top:18px">อัปเดตเว็บล่าสุด ${typeof BUILD!=="undefined"?BUILD:""}</p>`;
  $("main").innerHTML=h;
  $("hExp").onclick=exportLink;$("hImp").onclick=importPrompt;$("hFile").onclick=exportFile;$("hFileIn").onclick=importFile;
  document.querySelectorAll("[data-type]").forEach(b=>b.onclick=()=>{P.type=b.dataset.type;save();rHome();});
  document.querySelectorAll("[data-ph]").forEach(b=>b.onclick=()=>{st.phase=+b.dataset.ph;save();rHome();});
  document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(ward+"/"+b.dataset.go));
  document.querySelectorAll("[data-p2]").forEach(b=>b.onclick=()=>{const k=b.dataset.p2,l=p2lists()[k];const t={wrong:"ข้อที่ยังผิดอยู่",right:"ข้อที่ทำถูกแล้ว",flag:"ข้อที่ยังไม่มั่นใจ",nop1:"ข้อที่ไม่เคยทำใน Phase 1"}[k];startSess("p2"+k,t,l.map(q=>q.uid));});
  const rs=$("resume");if(rs)rs.onclick=()=>go(ward+"/sess");
  const mc=$("mClock");if(mc){let lastDay=mDay();show._t=setInterval(()=>{if(!document.body.contains(mc)){clearInterval(show._t);return;}mc.textContent=hms(mNext()-now());if(mDay()!==lastDay){lastDay=mDay();rHome();}},1000);}
  document.querySelectorAll("[data-round]").forEach(b=>b.onclick=()=>{const k=b.dataset.round;const R=ROUNDS.find(r=>r.k===k);if(R.soon){toast("โหมดนี้จะเพิ่มภายหลัง");return;}
    if(k==="unit")return go(ward+"/unit");if(k==="admission")return go(ward+"/adm");if(k==="morning")return startMorning();
    if(!QB.length){toast("ยังไม่มีข้อสอบในคลัง");return;}
    if(k==="quality")return go(ward+"/quality");
    if(k==="grand")go(ward+"/grand");else if(k==="service")go(ward+"/service");
    else if(k==="staff"){const l=staffList();if(!l.length){toast(Object.keys(P.att[p]).length?"ไม่มีข้อที่ต้องทวน — ทุกข้อที่ทำแล้วถูกติดกัน 2 ครั้งแล้ว":"ยังไม่มีข้อที่เคยทำใน Phase นี้");return;}startSess("staff","Ward staff round",l.map(q=>q.uid));}
    else toast("โหมดนี้จะเพิ่มภายหลัง");});
}
function startSess(kind,title,uids){
  if(!uids.length){toast("ไม่มีข้อที่เข้าเงื่อนไข");return;}
  if(kind!=="quality")qStop();
  P_().sess={kind,title,ph:ph(),list:uids,ans:{},cur:0,ts:now()};save();go(ward+"/sess");
}

/* ---------------- service round: choose sets ---------------- */
function rService(){
  const W=W_(),P=P_(),p=ph(),QB=W.QB;
  if(!QB.length){$("main").innerHTML=`<div class="empty">ยังไม่มีข้อสอบในคลัง</div>`;return;}
  const sel=new Set(P.pick.filter(k=>W.sets.includes(k)));
  const years=[...new Set(QB.map(q=>q.set))];
  let h=`<h1 class="h2">Service round</h1><p class="sub">เลือกปีและ rotation ที่อยากทำ เลือกได้หลายชุด ไม่เลือกเลย = ทุกชุด</p>`;
  h+=years.map(y=>{const ks=W.sets.filter(k=>k.split(" ")[0]===y);return `<div class="yr"><div class="yh">${esc(y)}</div><div class="chips">${ks.map(k=>{const qs=QB.filter(q=>setKey(q)===k),d=qs.filter(q=>lockedAns(P,p,q.uid)!==undefined).length;return `<button class="chip" data-k="${esc(k)}" aria-pressed="${sel.has(k)}">${esc(k.split(" ").slice(1).join(" "))}<span class="c">${d}/${qs.length}</span></button>`;}).join("")}</div></div>`;}).join("");
  h+=`<div class="row2"><button class="btn ghost" id="spClear">ล้างที่เลือก</button><span class="spacer"></span><button class="btn primary" id="spGo">เริ่มทำ</button></div>`;
  $("main").innerHTML=h;
  document.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>{const k=b.dataset.k;if(sel.has(k))sel.delete(k);else sel.add(k);b.setAttribute("aria-pressed",sel.has(k));});
  $("spClear").onclick=()=>{sel.clear();document.querySelectorAll("[data-k]").forEach(b=>b.setAttribute("aria-pressed","false"));};
  $("spGo").onclick=()=>{const order=W.sets;P.pick=[...sel].sort((a,b)=>order.indexOf(a)-order.indexOf(b));const s=P.svc[p];s.set=P.pick.length?P.pick.join("|"):"all";
    if(!svcList().some(q=>q.uid===s.cur)){const v=svcVisible();s.cur=(v[0]||svcList()[0]).uid;}save();go(ward+"/svc");};
}

/* ---------------- grand round setup ---------------- */
function rGrand(){
  const W=W_(),P=P_(),p=ph(),QB=W.QB;
  if(!QB.length){$("main").innerHTML=`<div class="empty">ยังไม่มีข้อสอบในคลัง</div>`;return;}
  let n=st.grandN||20,fresh=!!st.grandFresh;
  const opts=[10,20,40,60,0].filter(x=>!x||x<QB.length);
  const h=`<h1 class="h2">Grand round</h1><p class="sub">สุ่มข้อจากทั้งคลัง (${QB.length} ข้อ) ไม่สนว่าปีไหนหรือเรื่องอะไร</p>
  <div class="yh" style="font-family:var(--num);font-weight:700;margin-bottom:6px">จำนวนข้อ</div>
  <div class="chips" id="gN">${opts.map(x=>`<button class="chip" data-n="${x}" aria-pressed="${x===n||(!opts.includes(n)&&!x)}">${x?x+" ข้อ":"ทั้งหมด"}</button>`).join("")}</div>
  <label style="display:flex;gap:8px;align-items:center;margin-top:14px;font-size:15px"><input type="checkbox" id="gFresh" ${fresh?"checked":""} style="width:20px;height:20px"> เฉพาะข้อที่ยังไม่เคยทำใน Phase ${p}</label>
  <div class="row2"><span class="spacer"></span><button class="btn primary" id="gGo">เริ่มสุ่ม</button></div>`;
  $("main").innerHTML=h;
  document.querySelectorAll("[data-n]").forEach(b=>b.onclick=()=>{n=+b.dataset.n;document.querySelectorAll("[data-n]").forEach(x=>x.setAttribute("aria-pressed",x===b));});
  $("gGo").onclick=()=>{fresh=$("gFresh").checked;st.grandN=n;st.grandFresh=fresh;
    let pool=QB.filter(q=>!fresh||!atts(P,p,q.uid).length);
    if(!pool.length){toast("ทำครบทุกข้อใน Phase นี้แล้ว");return;}
    pool=shuffle(pool);if(n)pool=pool.slice(0,n);startSess("grand","Grand round",pool.map(q=>q.uid));};
}

/* ---------------- quiz (service = persistent sheet · session = a round) ---------------- */
const svcS=()=>P_().svc[ph()];
const selSets=()=>{const s=svcS().set;return s==="all"?[]:String(s).split("|").filter(Boolean);};
const inSet=q=>svcS().set==="all"||selSets().includes(setKey(q));
function svcPass(q){const P=P_(),p=ph(),f=svcS().status,a=lockedAns(P,p,q.uid);
  switch(f){case"todo":return a===undefined;case"wrong":return a!==undefined&&a!==q.ans;case"right":return a!==undefined&&a===q.ans;case"flag":return flagged(P,q.uid);case"nop1":return !atts(P,1,q.uid).length;default:return true;}}
const svcList=()=>W_().QB.filter(inSet);
const svcVisible=()=>svcList().filter(svcPass);
function svcQ(){const W=W_(),s=svcS();let q=W.byU[s.cur];if(!q||!inSet(q)){q=svcVisible()[0]||svcList()[0]||W.QB[0];if(q)s.cur=q.uid;}return q;}
const isSess=()=>view==="sess";
function curQ(){if(view==="adm")return P_().adm.cur;if(isSess()){const s=P_().sess;return W_().byU[s.list[s.cur]];}return svcQ();}
function doneAns(q){if(view==="adm"){const a=P_().adm.ans;return a==null?undefined:a;}return isSess()?P_().sess.ans[q.uid]:lockedAns(P_(),ph(),q.uid);}

function rQuiz(){
  const W=W_(),P=P_(),R=W.R,q=curQ();
  if(!q){$("main").innerHTML=`<div class="empty">ไม่มีข้อในชุดนี้</div>`;return;}
  const done=doneAns(q);if(done!==undefined)pick=done>=0?done:null;const locked=done!==undefined;
  let h="";
  if(view==="adm"){const A=P.adm;h+=`<div class="sessbar">Admission round · ข้อที่ ${A.n+(locked?0:1)} · ถูกแล้ว ${A.right}/${A.n} · ${esc(W.cfg.short||"")}</div>`;}
  else if(isSess()){const s=P.sess;h+=`<div class="sessbar">${esc(s.title)} · ข้อ ${s.cur+1}/${s.list.length} · Phase ${s.ph}</div>`;}
  const lab=q.adm?["เคส","Admission"]:q.unit?["Lecture","Unit"]:[CFG.setLabel||"ปี",CFG.roLabel||"Rotation"];
  h+=`<div class="qhead"><div class="qnum">${q.adm?"A":q.id}.</div><div class="fields"><span class="field"><b>${lab[0]}</b>${esc(q.set)}</span><span class="field"><b>${lab[1]}</b>${esc(q.ro)}</span></div>${q.adm?"":`<button class="flag" id="flagBtn" aria-pressed="${flagged(P,q.uid)}" title="ทำเครื่องหมายข้อที่ยังไม่มั่นใจ">⚑ ไม่มั่นใจ</button>`}</div>`;
  h+=`<p class="stem">${q.stem}</p>`;
  if(!q.img&&q.imgNote)h+=`<div class="img-missing">🖼 ${q.imgNote}</div>`;
  if(q.img){const IL=Array.isArray(q.img)?q.img:[q.img];h+=`<div class="stem-img">${IL.map(k=>`<img src="${IMGS[k]}" alt="ภาพประกอบโจทย์">`).join("")}${q.imgNote?`<div class="img-note">${q.imgNote}</div>`:""}</div>`;}
  const gi=(q.gray||"").indexOf(" — "),g1=gi>=0?q.gray.slice(0,gi):q.gray;if(g1)h+=`<p class="gray">${esc(g1)}</p>`;
  h+=`<ul class="opts" role="radiogroup" aria-label="ตัวเลือก">`;
  q.opts.forEach((o,i)=>{let c="opt";if(pick===i)c+=" sel";if(locked){if(i===q.ans)c+=" correct";else if(i===done)c+=" wrongpick";else c+=" dim";}
    h+=`<li class="${c}" role="radio" tabindex="0" aria-checked="${pick===i}" aria-disabled="${locked}" data-i="${i}"><span class="bub">${L[i]}</span><span class="txt">${esc(o)}</span></li>`;});
  h+=`</ul>`;
  const p=isSess()?P.sess.ph:ph();
  if(!locked){
    h+=`<div class="actions"><button class="btn primary" id="confirm" ${pick===null?"disabled":""}>ยืนยันคำตอบ</button><span class="hint">กด A–E แล้ว Enter ได้</span></div>`;
    const has=noteHas("pre",p,q.uid);
    h+=`<details class="pre" id="preBox" ${has?"open":""}><summary>✎ ทด / จดก่อนตอบ</summary>${noteHTML("pre",p,q)}</details>`;
  }else h+=explain(q,done,R,p);
  $("main").innerHTML=h;
  bindQuiz(q,locked);
  paintNav();
}
function paintNav(){
  const P=P_();let a=0,n=0;
  if(view==="adm"){const A=P.adm,ok=A.ans!=null;$("pos").textContent=`ข้อที่ ${A.n+(ok?0:1)}`;$("prev").disabled=true;$("next").disabled=!ok;$("next").textContent=ok?(A.next?"ข้อต่อไป":admBusy?"กำลังสร้าง…":"ข้อต่อไป"):"ข้อต่อไป";$("prog").style.width="0";return;}
  if(isSess()){const s=P.sess;$("pos").textContent=`${s.cur+1} / ${s.list.length}`;$("prev").disabled=s.cur===0||!qNavOK(s.cur-1);$("next").disabled=s.cur<s.list.length-1?!qNavOK(s.cur+1):qLock();$("next").textContent=s.cur===s.list.length-1?"ดูสรุปรอบนี้":"ข้อถัดไป";n=s.list.length;a=Object.keys(s.ans).filter(u=>s.list.includes(u)).length;}
  else{const v=svcVisible(),q=svcQ(),i=v.findIndex(x=>x.uid===(q&&q.uid));$("pos").textContent=`${i>=0?i+1:"–"} / ${v.length}`;$("prev").disabled=v.length<2&&i>=0;$("next").disabled=v.length<2&&i>=0;$("next").textContent="ข้อถัดไป";
    const l=svcList();n=l.length;a=l.filter(x=>lockedAns(P,ph(),x.uid)!==undefined).length;}
  $("count").textContent=`${a}/${n}`;$("prog").style.width=(n?a/n*100:0)+"%";
}
function bindQuiz(q,locked){
  const P=P_();
  document.querySelectorAll(".opt").forEach(el=>{const f=()=>{if(locked)return;pick=+el.dataset.i;rQuiz();};el.addEventListener("click",f);el.addEventListener("keydown",e=>{if(e.key===" "||e.key==="Enter"){e.preventDefault();f();}});});
  const c=$("confirm");if(c)c.onclick=confirmAns;
  if($("flagBtn"))$("flagBtn").onclick=()=>{const on=!flagged(P,q.uid);P.flag[q.uid]=[on?1:0,now()];save();$("flagBtn").setAttribute("aria-pressed",on);toast(on?"ทำเครื่องหมาย ไม่มั่นใจ แล้ว":"เอาเครื่องหมายออกแล้ว");};
  const rb=$("redo");if(rb)rb.onclick=()=>{if(isSess()){delete P.sess.ans[q.uid];if(P.sess.kind==="morning"&&P.morn[P.sess.ph])delete P.morn[P.sess.ph].ans[q.uid];}else P.open[ph()][q.uid]=now();if(P.sess)P.sess.ts=now();pick=null;save();rQuiz();window.scrollTo(0,0);};
  const pb=$("preBox");if(pb)pb.addEventListener("toggle",()=>{if(pb.open)mountNotes(pb);});
  mountNotes(document);
  bindAsk(q);
}
function confirmAns(){
  if(pick===null)return;const P=P_(),q=curQ(),p=isSess()?P.sess.ph:ph();
  if(view==="adm"){admAnswer(pick);return;}
  if(q.unit)(P.unit.att[q.uid]=P.unit.att[q.uid]||[]).push([pick,now()]);
  else (P.att[p][q.uid]=P.att[p][q.uid]||[]).push([pick,now()]);
  if(isSess()){const s=P.sess;s.ans[q.uid]=pick;s.ts=now();
    if(s.kind==="morning"){const m=P.morn[s.ph];if(m&&m.day===s.day){m.ans[q.uid]=pick;m.ts=now();}}}
  else svcS().cur=q.uid;
  save();rQuiz();
  const e=document.querySelector(".exp");if(e)setTimeout(()=>e.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}),60);
}
function step(d){
  if(view==="adm"){if(d>0)admNext();return;}
  if(isSess()){const s=P_().sess;const to=s.cur+d;if(to>=0&&to<s.list.length&&!qNavOK(to)){toast("ตอนนี้ยังเปลี่ยนข้อไม่ได้ (โหมด mandatory)");return;}if(d>0&&s.cur===s.list.length-1&&qLock()){toast("ตอนนี้ยังเปลี่ยนข้อไม่ได้ (โหมด mandatory)");return;}}
  pick=null;
  if(isSess()){const s=P_().sess;if(d>0&&s.cur===s.list.length-1){go(ward+"/result");return;}s.cur=Math.max(0,Math.min(s.list.length-1,s.cur+d));s.ts=now();save();rQuiz();window.scrollTo(0,0);return;}
  const v=svcVisible();if(!v.length)return;const q=svcQ();
  const nx=d>0?v.find(x=>x.id>q.id):[...v].reverse().find(x=>x.id<q.id);
  const t=nx||(d>0?v[0]:v[v.length-1]);if(t.uid!==q.uid){svcS().cur=t.uid;save();rQuiz();window.scrollTo(0,0);}
}
$("prev").onclick=()=>step(-1);$("next").onclick=()=>step(1);

function explain(q,done,R,p){
  const ok=done===q.ans,skip=done<0,P=P_(),W=W_(),s=isSess()?P.sess:null;
  let h=`<section class="exp" aria-live="polite"><div class="verdict"><span class="v ${ok?"ok":"no"}">${ok?"ถูก":skip?"หมดเวลา":"ผิด"}</span><span class="ans">${ok?"":skip?"ไม่ได้ตอบ · ":`คุณตอบ ${L[done]} · `}เฉลย <b>${L[q.ans]}. ${esc(q.opts[q.ans])}</b></span></div>`;
  h+=`<div class="tagline">`;
  if(q.rep)h+=`<span class="tag rep">repeated x${q.rep}</span>`;
  if(!q.adm)h+=`<button class="link redo" id="redo" type="button">ทำข้อนี้ใหม่</button>`;
  if(s&&s.kind==="morning")h+=`<span class="tag rep">ที่มา: ${q.unit?`Unit round — ${esc((W.byLec[q.unit]||{}).title||q.set)} (นับว่าเจอข้อนี้แล้ว)`:`ข้อสอบเก่า (AC) ${esc(q.set)} ${esc(q.ro)} · ข้อ ${q.id} ในคลัง`}</span>`;
  if(q.unit){const Lc=W.byLec[q.unit]||{},n=uAtts(P,q.uid).length;h+=`<span class="tag">Unit round · ${esc(Lc.title||q.set)}${Lc.src?` · จาก ${esc(Lc.src)}`:""}</span><span class="tag">เจอข้อนี้มาแล้ว ${n} ครั้ง (รวมครั้งนี้)</span>`;}
  else if(q.adm)h+=`<span class="tag">Admission round · เคสที่ AI สร้างใหม่${q.topic?` · ${esc(q.topic)}`:""}</span>`;
  else{const FN=CFG.files||{};const src=`${FN[q.file]||q.file} หน้า ${q.page}`+(q.kfile?` (โจทย์) + ${FN[q.kfile]||q.kfile}`+(q.page2?` หน้า ${q.page2}`:"")+" (เฉลย)":(q.page2?` + หน้า ${q.page2} (เฉลย)`:""));h+=`<span class="tag">ไฟล์ ${esc(src)} · ข้อ ${esc(q.orig)} ในต้นฉบับ</span>`;}
  if(q.guide)h+=`<div class="guide">📘 <b>อ้างอิง${q.adm||q.unit?"":" guideline"}:</b> ${q.adm?esc(q.guide):q.guide}</div>`;
  if(q.flag)h+=`<span class="tag warn">⚠ คีย์ไม่ชัวร์ / โจทย์ต้นฉบับไม่ครบ</span>`;
  h+=`</div>`;if(q.key)h+=`<div class="tagline"><span class="tag">คีย์ในไฟล์: ${q.key}</span></div>`;
  if(q.adm)h+=`<p class="hint" style="margin:4px 0 0">โจทย์และเฉลยข้อนี้ AI สร้างขึ้นใหม่ อาจผิดพลาดได้ ควรเทียบกับตำรา/guideline</p>`;
  {const gi=(q.gray||"").indexOf(" — ");if(gi>=0)h+=`<div class="tagline"><span class="tag">ส่วนที่เหลือของโจทย์ต้นฉบับ: ${esc(q.gray.slice(gi+3))}</span></div>`;}
  const sec=(t,b,cls="")=>b?`<div class="sec ${cls}"><h3>${t}</h3>${b}</div>`:"";
  const rich=s=>(s||"").replace(/\{\{IMG:(\w+)\}\}/g,(m,k)=>IMGS[k]?`<figure><img src="${IMGS[k]}" alt="ภาพจากไฟล์ต้นฉบับ"><figcaption>จากไฟล์ต้นฉบับ</figcaption></figure>`:"");
  h+=sec("ตีความโจทย์",`<p>${R(q.interp)}</p>`);
  h+=sec(`ทำไม ${L[q.ans]} ถูก`,`<p>${R(q.why)}</p>`);
  let w=`<ul class="wrong-list">`;Object.keys(q.wrong||{}).sort().forEach(k=>{w+=`<li><span class="l">${k}</span><span>${R(q.wrong[k])}</span></li>`;});w+=`</ul>`;
  h+=sec("ทำไมข้ออื่นผิด",w);
  h+=sec("ระวังกับดัก",q.trap?`<div class="box">${R(q.trap)}</div>`:"","trap");
  h+=sec("สรุปความรู้จากข้อนี้",`<ul>${(q.summary||[]).map(s=>`<li>${R(s)}</li>`).join("")}</ul>`);
  h+=sec("สิ่งที่เขียนไว้ในไฟล์",q.notes?`<div class="box">${rich(q.notes)}</div>`:"","notes");
  if(q.kimg){const KL=Array.isArray(q.kimg)?q.kimg:[q.kimg];h+=sec("สไลด์/รูปอ้างอิงจากไฟล์เฉลย",`<div class="kimg">${KL.map(k=>`<img loading="lazy" src="${IMGS[k]}" alt="สไลด์อ้างอิงจากไฟล์เฉลย">`).join("")}</div>`);}
  h+=sec("ช่วยจำ",q.mnemonic?`<p>${q.mnemonic}</p>`:"");
  h+=sec("ความเห็นของผม",q.opinion?`<div class="box">${R(q.opinion)}</div>`:"","opinion");
  h+=sec("โจทย์แบบใหม่ที่อาจออก",`<ul>${(q.variants||[]).map(s=>`<li>${R(s)}</li>`).join("")}</ul>`);
  if(!q.adm)h+=`<div class="sec mine"><h3>สรุปของฉันจากข้อนี้</h3><p class="hint" style="margin:0 0 6px">เขียนสรุปด้วยคำของตัวเองช่วยให้จำได้นานกว่าอ่านผ่าน ๆ (บันทึกอัตโนมัติ)</p>${noteHTML("post",0,q)}</div>`;
  h+=`<div class="sec ask"><h3>ถาม Claude เพิ่มเติม</h3>
    <div class="qchips">${ASKQ.map((t,i)=>`<button class="chip" type="button" data-aq="${i}">${t}</button>`).join("")}</div>
    <textarea class="ntext" id="askTxt" placeholder="พิมพ์สิ่งที่อยากถามเกี่ยวกับข้อนี้ เช่น ทำไม C ถึงไม่ใช่คำตอบ"></textarea>
    <div class="row"><button class="btn primary" id="askGo" type="button">เปิดใน Claude ↗</button><span class="hint">เปิดในบัญชี Claude ของคุณเอง พร้อมโจทย์ เฉลย และคำถามนี้</span></div>
    <p class="hint" style="margin-top:6px">AI อาจผิดพลาดได้ ควรเทียบกับ guideline · ถ้า Claude ไม่ขึ้นข้อความ ให้กดวาง (คัดลอกไว้ให้แล้ว)</p></div>`;
  if(noteHas("pre",p,q.uid))h+=`<details class="pre" id="preBox"><summary>✎ ที่ทดไว้ก่อนตอบ</summary>${noteHTML("pre",p,q)}</details>`;
  h+=`</section>`;
  return h;
}

/* ---------------- ask Claude ---------------- */
const ASKQ=["อธิบายแบบง่าย ๆ","ทำไมข้อที่ฉันตอบถึงผิด","สรุปเป็นตารางเปรียบเทียบ","ออกโจทย์แนวนี้ให้อีก 1 ข้อ"];
function askPrompt(q,done,ask,cut){
  const W=W_(),c=n=>s=>{s=plain(s);return s.length>n?s.slice(0,n)+"…":s;};
  const why=c(cut)(q.why),wr=Object.keys(q.wrong||{}).sort().map(k=>k+": "+c(Math.round(cut/4))(q.wrong[k])).join(" / ");
  return [
    `ช่วยอธิบายข้อสอบ MCQ ข้อนี้ให้ฉันหน่อย (ข้อสอบเก่า ${W.cfg.name}${W.cfg.sub?" "+W.cfg.sub:""} · ${q.set} ${q.ro})`,
    "",`โจทย์: ${plain(q.stem)}`,
    `ตัวเลือก: ${q.opts.map((o,i)=>L[i]+". "+plain(o)).join(" | ")}`,
    `เฉลยในคลัง: ${L[q.ans]}`+(done!==undefined?` · ฉันตอบ ${L[done]}${done===q.ans?" (ถูก)":" (ผิด)"}`:""),
    q.guide?`Guideline ที่คลังอ้าง: ${plain(q.guide)}`:"",
    `คำอธิบายในคลัง: ${why}`,
    wr?`ทำไมข้ออื่นผิด: ${wr}`:"",
    "",`คำถามของฉัน: ${ask||"ช่วยอธิบายเพิ่มให้เข้าใจลึกขึ้น"}`,
    "",`กติกา: ตอบภาษาไทยปนศัพท์แพทย์ภาษาอังกฤษ อธิบายให้เข้าใจง่าย อิงหลักฐานหรือ guideline ล่าสุดที่ระบุชื่อได้ (ถ้าค้นเว็บได้ให้ตรวจ guideline ล่าสุดก่อนตอบ) ถ้าไม่แน่ใจหรือหลักฐานยังไม่ชัดให้บอกตรง ๆ ห้ามแต่งตัวเลข แหล่งอ้างอิง หรือข้อมูลที่ไม่มีจริง ถ้าคิดว่าเฉลยในคลังอาจผิด ให้บอกพร้อมเหตุผล`
  ].filter(x=>x!=="").join("\n").replace(/\n\n+/g,"\n\n");
}
function bindAsk(q){
  const go_=$("askGo");if(!go_)return;const ta=$("askTxt");
  document.querySelectorAll("[data-aq]").forEach(b=>b.onclick=()=>{ta.value=ASKQ[+b.dataset.aq];ta.focus();});
  go_.onclick=()=>{
    const done=doneAns(q),ask=ta.value.trim();
    const full=askPrompt(q,done,ask,1200);
    let cut=700,pr=askPrompt(q,done,ask,cut),url="https://claude.ai/new?q="+encodeURIComponent(pr);
    while(url.length>7000&&cut>80){cut=Math.round(cut*0.7);pr=askPrompt(q,done,ask,cut);url="https://claude.ai/new?q="+encodeURIComponent(pr);}
    try{navigator.clipboard&&navigator.clipboard.writeText(full).catch(()=>{});}catch(e){}
    let w=null;try{w=window.open(url,"_blank","noopener");}catch(e){}if(!w&&!IN_FRAME)location.href=url;else if(!w)toast("คัดลอกคำถามไว้แล้ว — เปิด claude.ai แล้ววาง");
  };
}

/* ---------------- notes: typed + handwriting ---------------- */
const inkK=(kind,p,u)=>`${ward}|${kind==="pre"?"pre"+p:"post"}|${u}`;
const noteStore=(kind,p)=>kind==="pre"?P_().pre[p]:P_().post;
function noteHas(kind,p,u){const t=(noteStore(kind,p)[u]||{}).t,k=ink[inkK(kind,p,u)];return !!((t&&t.trim())||(k&&k.s&&k.s.length));}
function noteHTML(kind,p,q){
  const t=(noteStore(kind,p)[q.uid]||{}).t||"",ik=inkK(kind,p,q.uid),hasInk=!!(ink[ik]&&ink[ik].s&&ink[ik].s.length);
  const m=(hasInk&&!t)?"draw":(t?"type":(st.noteMode||"type"));
  return `<div class="note" data-kind="${kind}" data-ph="${p}" data-u="${esc(q.uid)}" data-m="${m}">
  <div class="ntabs"><button type="button" data-nm="type" aria-pressed="${m==="type"}" class="${t?"has":""}">⌨ พิมพ์</button><button type="button" data-nm="draw" aria-pressed="${m==="draw"}" class="${hasInk?"has":""}">✍ เขียน</button><span class="nsaved"></span></div>
  <textarea class="ntext" ${m==="draw"?"hidden":""} placeholder="${kind==="pre"?"ทดตรงนี้ เช่น ตัดช้อย คิด DDx คำนวณ":"ข้อนี้ได้เรียนรู้อะไร จะจำยังไง เชื่อมกับเคสบนวอร์ดยังไง"}">${esc(t)}</textarea>
  <div class="inkbox" ${m==="type"?"hidden":""}></div></div>`;
}
function mountNotes(root){
  root.querySelectorAll(".note").forEach(n=>{
    if(n.dataset.bound)return;
    if(n.closest("details")&&!n.closest("details").open)return;
    n.dataset.bound=1;
    const kind=n.dataset.kind,p=+n.dataset.ph,u=n.dataset.u,ta=n.querySelector(".ntext"),box=n.querySelector(".inkbox"),saved=n.querySelector(".nsaved");
    let t0=null;const fit=()=>{ta.style.height="auto";ta.style.height=Math.max(96,ta.scrollHeight+4)+"px";};
    ta.addEventListener("input",()=>{fit();saved.textContent="กำลังบันทึก…";clearTimeout(t0);t0=setTimeout(()=>{noteStore(kind,p)[u]={t:ta.value,ts:now()};save();saved.textContent="บันทึกแล้ว";n.querySelector('[data-nm="type"]').classList.toggle("has",!!ta.value.trim());},500);});
    if(!ta.hidden)fit();
    let pad=null;const ensure=()=>{if(!pad)pad=inkPad(box,inkK(kind,p,u),()=>{saved.textContent="บันทึกแล้ว";const k=ink[inkK(kind,p,u)];n.querySelector('[data-nm="draw"]').classList.toggle("has",!!(k&&k.s.length));});};
    if(!box.hidden)ensure();
    n.querySelectorAll("[data-nm]").forEach(b=>b.onclick=()=>{const m=b.dataset.nm;st.noteMode=m;persist();n.dataset.m=m;n.querySelectorAll("[data-nm]").forEach(x=>x.setAttribute("aria-pressed",x===b));ta.hidden=m!=="type";box.hidden=m!=="draw";if(m==="draw")ensure();else fit();});
  });
}
function cssVar(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()||"#222";}
function inkPad(box,key,onSave){
  const COLORS={ink:()=>cssVar("--ink"),red:()=>cssVar("--wrong"),blue:()=>"#2F6BD8"};
  box.innerHTML=`<div class="inkbar"><button type="button" data-t="pen" aria-pressed="true">✏️ ปากกา</button><button type="button" data-t="erase" aria-pressed="false">⌫ ยางลบ</button>
    <button type="button" data-c="ink" aria-pressed="true" aria-label="สีดำ"><span class="dot" style="background:var(--ink)"></span></button><button type="button" data-c="red" aria-pressed="false" aria-label="สีแดง"><span class="dot" style="background:var(--wrong)"></span></button><button type="button" data-c="blue" aria-pressed="false" aria-label="สีน้ำเงิน"><span class="dot" style="background:#2F6BD8"></span></button>
    <span class="sep"></span><button type="button" data-a="undo">↶ ย้อน</button><button type="button" data-a="more">＋ พื้นที่</button><button type="button" data-a="clear">ล้าง</button></div><canvas class="ink" aria-label="พื้นที่เขียนด้วยนิ้วหรือปากกา"></canvas>`;
  const cv=box.querySelector("canvas"),ctx=cv.getContext("2d");
  let d=ink[key]?JSON.parse(JSON.stringify(ink[key])):{s:[],h:330};if(!d.h)d.h=330;
  let tool="pen",color="ink",cur=null,hist=[],penSeen=false,Wd=0;
  const H=()=>Math.max(200,Math.round(d.h*Wd/1000));
  function size(){Wd=cv.clientWidth||600;const r=window.devicePixelRatio||1;cv.style.height=H()+"px";cv.width=Math.round(Wd*r);cv.height=Math.round(H()*r);ctx.setTransform(r,0,0,r,0,0);draw();}
  function line(s){const k=Wd/1000;ctx.strokeStyle=(COLORS[s.c]||COLORS.ink)();ctx.lineWidth=Math.max(1,s.w*k);ctx.lineCap="round";ctx.lineJoin="round";ctx.beginPath();const p=s.p;ctx.moveTo(p[0]*k,p[1]*k);if(p.length===2)ctx.lineTo(p[0]*k+0.1,p[1]*k);for(let i=2;i<p.length;i+=2)ctx.lineTo(p[i]*k,p[i+1]*k);ctx.stroke();}
  function draw(){ctx.clearRect(0,0,Wd,H());d.s.forEach(line);if(cur)line(cur);}
  const pt=e=>{const r=cv.getBoundingClientRect();return [Math.round((e.clientX-r.left)*1000/Wd),Math.round((e.clientY-r.top)*1000/Wd)];};
  const snap=()=>{hist.push(JSON.stringify(d.s));if(hist.length>40)hist.shift();};
  function commit(){ink[key]={s:d.s,h:d.h,ts:now()};saveInk(key);onSave&&onSave();}
  function eraseAt(x,y){const r=18;const n0=d.s.length;d.s=d.s.filter(s=>{for(let i=0;i<s.p.length;i+=2){if(Math.abs(s.p[i]-x)<r&&Math.abs(s.p[i+1]-y)<r)return false;}return true;});return n0!==d.s.length;}
  let erased=false;
  cv.addEventListener("pointerdown",e=>{if(e.pointerType==="pen")penSeen=true;if(e.pointerType==="touch"&&penSeen)return;if(e.button>0)return;e.preventDefault();cv.setPointerCapture(e.pointerId);const [x,y]=pt(e);
    if(tool==="erase"){snap();erased=eraseAt(x,y);if(erased)draw();cur={erase:1};return;}
    snap();cur={c:color,w:e.pointerType==="pen"?2.6:3.2,p:[x,y]};draw();});
  cv.addEventListener("pointermove",e=>{if(!cur)return;if(e.pointerType==="touch"&&penSeen)return;e.preventDefault();const evs=e.getCoalescedEvents?e.getCoalescedEvents():[e];
    if(cur.erase){evs.forEach(ev=>{const [x,y]=pt(ev);if(eraseAt(x,y))erased=true;});draw();return;}
    evs.forEach(ev=>{const [x,y]=pt(ev);const p=cur.p,lx=p[p.length-2],ly=p[p.length-1];if(Math.abs(x-lx)+Math.abs(y-ly)>=2)p.push(x,y);});draw();});
  const end=()=>{if(!cur)return;if(cur.erase){if(erased)commit();else hist.pop();}else{d.s.push(cur);commit();}cur=null;erased=false;draw();};
  cv.addEventListener("pointerup",end);cv.addEventListener("pointercancel",end);cv.addEventListener("lostpointercapture",end);
  box.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{tool=b.dataset.t;box.querySelectorAll("[data-t]").forEach(x=>x.setAttribute("aria-pressed",x===b));});
  box.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>{color=b.dataset.c;tool="pen";box.querySelectorAll("[data-c]").forEach(x=>x.setAttribute("aria-pressed",x===b));box.querySelectorAll("[data-t]").forEach(x=>x.setAttribute("aria-pressed",x.dataset.t==="pen"));});
  box.querySelector('[data-a="undo"]').onclick=()=>{if(!hist.length)return;d.s=JSON.parse(hist.pop());draw();commit();};
  box.querySelector('[data-a="more"]').onclick=()=>{d.h+=200;size();commit();};
  box.querySelector('[data-a="clear"]').onclick=()=>{if(!d.s.length||!confirm("ล้างที่เขียนไว้ทั้งหมดในช่องนี้?"))return;snap();d.s=[];d.h=330;size();commit();};
  if(window.ResizeObserver){let lw=0;new ResizeObserver(()=>{if(cv.clientWidth&&cv.clientWidth!==lw){lw=cv.clientWidth;size();}}).observe(cv);}
  size();
  return {size};
}

/* ---------------- Unit round ---------------- */
function rUnit(){
  const W=W_(),P=P_(),Ls=W.UNIT;
  let h=`<h1 class="h2">Unit round</h1><p class="sub">โจทย์ใหม่แบบ case-based ที่สร้างจาก lecture แต่ละบท ครอบคลุมทุกจุดในสไลด์ สุ่มใหม่ทุกครั้งที่กดเข้า (เจอข้อซ้ำได้) ใช้ร่วมกันทั้งสอง Phase</p>`;
  if(!Ls.length){h+=`<div class="card"><h3>ยังไม่มีโจทย์ Unit round ในวอร์ดนี้</h3><span class="rd" style="margin:0">ส่งไฟล์ lecture ให้ Claude แล้วจะสร้างโจทย์ case-based ภาษาอังกฤษให้บทละประมาณ 200 ข้อ ครอบคลุมทุกเรื่องในสไลด์</span></div>`;$("main").innerHTML=h;return;}
  const opts=[10,20,40];let n=opts.includes(st.unitN)?st.unitN:10;
  h+=`<div class="yh" style="font-family:var(--num);font-weight:700;margin-bottom:6px">สุ่มครั้งละ</div><div class="chips">${opts.map(x=>`<button class="chip" data-un="${x}" aria-pressed="${x===n}">${x} ข้อ</button>`).join("")}</div>`;
  const all=[].concat(...Ls.map(Lc=>Lc.QB)),seen=a=>a.filter(q=>uAtts(P,q.uid).length).length;
  h+=`<div class="stack">`+Ls.map(Lc=>`<button class="resume" data-lec="${esc(Lc.id)}"><span><b>${esc(Lc.title)}</b><span class="rd">เคยเจอแล้ว ${seen(Lc.QB)}/${Lc.QB.length} ข้อ</span></span><span class="go">→</span></button>`).join("")
    +(Ls.length>1?`<button class="resume" data-lec="*"><span><b>สุ่มจากทุกบท</b><span class="rd">เคยเจอแล้ว ${seen(all)}/${all.length} ข้อ</span></span><span class="go">→</span></button>`:"")+`</div>`;
  $("main").innerHTML=h;
  document.querySelectorAll("[data-un]").forEach(b=>b.onclick=()=>{n=+b.dataset.un;st.unitN=n;persist();document.querySelectorAll("[data-un]").forEach(x=>x.setAttribute("aria-pressed",x===b));});
  document.querySelectorAll("[data-lec]").forEach(b=>b.onclick=()=>{const id=b.dataset.lec,Lc=W.byLec[id],pool=id==="*"?all:Lc.QB;startSess("unit","Unit round · "+(id==="*"?"ทุกบท":Lc.title),shuffle(pool).slice(0,n).map(q=>q.uid));});
}

/* ---------------- sounds: synthesized with Web Audio (no files) ---------------- */
const SOUNDS=[["ding","ding"],["ding2","ding x2"],["ring","ring"],["triple","triple ring"],["alarm","alarm"],["bell","large bell"],["none","ไม่มีเสียง"]];
const SND={ctx:null,
  init(){try{if(!this.ctx){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;this.ctx=new C();}if(this.ctx.state==="suspended")this.ctx.resume();}catch(e){return null;}return this.ctx;},
  play(k,vol){if(!k||k==="none")return;const c=this.init();if(!c)return;const g=c.createGain();g.gain.value=vol==null?qpS().vol:vol;g.connect(c.destination);sndRender(k,c,g,c.currentTime+0.03);}};
function sndTone(c,d,f,t,dur,type,peak,atk){const o=c.createOscillator(),g=c.createGain();o.type=type||"sine";o.frequency.value=f;g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(peak,t+(atk||0.006));g.gain.exponentialRampToValueAtTime(0.0001,t+dur);o.connect(g);g.connect(d);o.start(t);o.stop(t+dur+0.05);}
function sndDing(c,d,t){[[1318.5,.42,1.4],[2637,.14,.7],[3955,.05,.35]].forEach(([f,a,u])=>sndTone(c,d,f,t,u,"sine",a));}
function sndRing(c,d,t,len){   /* electric bell: bright metal tone struck ~24 times a second */
  const m=c.createGain();m.gain.setValueAtTime(0,t);m.connect(d);
  [[910,.30],[1838,.13],[2731,.07],[3603,.04]].forEach(([f,a])=>{const o=c.createOscillator(),g=c.createGain();o.type="triangle";o.frequency.value=f;g.gain.value=a;o.connect(g);g.connect(m);o.start(t);o.stop(t+len+0.9);});
  for(let x=0;x<len;x+=1/24){m.gain.setValueAtTime(1,t+x);m.gain.setTargetAtTime(0.35,t+x+0.004,0.012);}
  m.gain.setValueAtTime(0.85,t+len);m.gain.setTargetAtTime(0.0001,t+len,0.16);}
function sndBell(c,d,t){       /* large temple bell: low strike, inharmonic partials, long ringing decay */
  const f=98;[[0.5,.24,13],[1,.27,11],[1.004,.18,11],[1.19,.15,7],[1.56,.12,5.5],[2,.10,4.5],[2.51,.07,3.4],[2.66,.05,2.8],[3.01,.04,2.3],[4.1,.03,1.5],[5.43,.016,1]].forEach(([k,a,u])=>sndTone(c,d,f*k,t,u,"sine",a,0.004));
  const n=Math.floor(c.sampleRate*0.06),b=c.createBuffer(1,n,c.sampleRate),x=b.getChannelData(0);for(let i=0;i<n;i++)x[i]=(Math.random()*2-1)*(1-i/n);
  const s=c.createBufferSource();s.buffer=b;const lp=c.createBiquadFilter();lp.type="lowpass";lp.frequency.value=700;const ng=c.createGain();ng.gain.value=.22;s.connect(lp);lp.connect(ng);ng.connect(d);s.start(t);}
function sndRender(k,c,d,t){switch(k){
  case"ding":sndDing(c,d,t);break;case"ding2":sndDing(c,d,t);sndDing(c,d,t+.3);break;
  case"ring":sndRing(c,d,t,1.6);break;case"triple":sndRing(c,d,t,.3);sndRing(c,d,t+.55,.3);sndRing(c,d,t+1.1,1.9);break;
  case"alarm":for(let i=0;i<12;i++)sndTone(c,d,i%2?740:988,t+i*.13,.11,"square",.3,.004);break;
  case"bell":sndBell(c,d,t);break;}}
window.__snd={render:sndRender};   /* used by tools/smoke_site.py to check loudness offline */

/* ---------------- Quality round: timed speedrun of never-done questions ---------------- */
const KINDS=[["q","ตอบคำถาม"],["rest","พัก / เปลี่ยนข้อ"],["sol","อ่านเฉลย"],["ready","เตรียมพร้อม"],["free","อื่น ๆ"]];
const QPRESET=[
  {id:"p1",name:"Speedrun AC",warm:{sec:5,sound:"bell"},loops:15,end:"triple",blocks:[
    {name:"Cycle A",rep:4,phases:[{name:"QT",sec:18,sound:"ding2",kind:"q"},{name:"Resting",sec:2,sound:"ding",kind:"rest"}]},
    {name:"Cycle B",rep:1,phases:[{name:"Solution",sec:35,sound:"ring",kind:"sol"},{name:"Ready",sec:5,sound:"ding",kind:"ready"}]}]},
  {id:"p2",name:"Supersonic run AC",warm:{sec:5,sound:"bell"},loops:80,end:"triple",blocks:[
    {name:"Cycle A",rep:1,phases:[{name:"Intense",sec:13,sound:"ding2",kind:"q"},{name:"Resting",sec:2,sound:"ding",kind:"rest"}]}]}];
const clone=o=>JSON.parse(JSON.stringify(o));
function qpS(){const q=st.qp||(st.qp={});q.custom=q.custom||[];q.over=q.over||{};if(!q.sel)q.sel="p1";if(q.vol==null)q.vol=0.8;q.mand=!!q.mand;return q;}
const qProgs=()=>{const q=qpS();return QPRESET.map(p=>Object.assign(clone(q.over[p.id]||p),{id:p.id,builtin:1})).concat(q.custom.map(clone));};
const qProg=id=>qProgs().find(p=>p.id===id)||qProgs()[0];
const mmss=s=>{s=Math.max(0,Math.ceil(s));return Math.floor(s/60)+":"+String(s%60).padStart(2,"0");};
const nz=(v,m)=>Math.max(m,parseInt(v,10)||m);
const qLen=pg=>{const c=pg.blocks.reduce((a,b)=>a+nz(b.rep,1)*b.phases.reduce((x,f)=>x+nz(f.sec,1),0),0);return {cycle:c,total:c*nz(pg.loops,1)};};
function qDesc(pg){const L=qLen(pg),w=pg.warm&&+pg.warm.sec>0?+pg.warm.sec:0;
  return esc(pg.blocks.map(b=>`${b.name}${nz(b.rep,1)>1?" ×"+nz(b.rep,1):""}: ${b.phases.map(f=>f.name+" "+nz(f.sec,1)+"s").join(" → ")}`).join(" · "))+` · วน ${nz(pg.loops,1)} รอบ = <b>${mmss(L.total)}</b>${w?` (+ warm up ${w} วิ)`:""}`;}
function qSegs(pg){const S=[];let t=0;const add=o=>{o.t0=t;t+=nz(o.sec,1);o.t1=t;S.push(o);};
  if(pg.warm&&+pg.warm.sec>0)add({name:"Warm up",sec:+pg.warm.sec,sound:pg.warm.sound,kind:"warm"});
  for(let l=1;l<=nz(pg.loops,1)&&S.length<20000;l++)pg.blocks.forEach((b,bi)=>{for(let r=1;r<=nz(b.rep,1);r++)b.phases.forEach(f=>add({name:f.name,sec:f.sec,sound:f.sound,kind:f.kind||"free",bi,bname:b.name,rep:r,reps:nz(b.rep,1),loop:l}));});
  return {S,total:t};}
let QR=null;   /* running timer: {pg,mand,S,total,el0,t0,paused,i,front,done,alarm,ward} */
const qOn=()=>!!(QR&&!QR.done&&QR.ward===ward&&P_().sess&&P_().sess.kind==="quality");
const qEl=()=>QR.paused?QR.el0:QR.el0+(performance.now()-QR.t0)/1000;
const qSeg=()=>QR&&QR.i>=0?QR.S[QR.i]:null;
/* mandatory mode: questions change by themselves; only while reading solutions can you page back through questions already done */
function qLock(){if(!qOn()||!QR.mand)return false;const g=qSeg();return !g||(g.kind!=="sol"&&g.kind!=="free");}
function qNavOK(i){if(!qOn()||!QR.mand)return true;const g=qSeg();if(!g)return false;if(g.kind==="sol"||g.kind==="free")return i<QR.front;return i===QR.front;}
function qStart(pg,mand){qStop();SND.init();const {S,total}=qSegs(pg);
  QR={pg,mand,S,total,el0:0,t0:performance.now(),paused:false,i:-1,front:0,done:false,alarm:false,ward};
  const s=P_().sess;if(s){const i=s.list.findIndex(u=>s.ans[u]===undefined);QR.front=i<0?s.list.length:i;}
  QR.iv=setInterval(qTick,200);qTick();}
function qStop(){if(QR){clearInterval(QR.iv);QR=null;}paintQR();}
function qTick(){if(!QR)return;if(QR.paused||QR.done){paintQR();return;}
  const el=qEl();
  if(el>=QR.total){if(QR.i>=0)qEnd(QR.S[QR.i]);qFinish("หมดเวลา "+QR.pg.name);return;}
  let i=QR.i;
  while(QR&&!QR.done&&i+1<QR.S.length&&QR.S[i+1].t0<=el){if(i>=0)qEnd(QR.S[i]);if(!QR||QR.done)break;i++;QR.i=i;qBegin(QR.S[i],!(i+1<QR.S.length&&QR.S[i+1].t0<=el));}
  paintQR();if(view==="sess")paintNav();}
function qBegin(g,audible){let snd=g.sound;if(QR.alarm){QR.alarm=false;if(g.kind!=="q")snd="alarm";}
  if(audible)SND.play(snd);
  if(QR.mand&&g.kind==="q")qGoFront();}
function qEnd(g){if(!QR.mand||QR.ward!==ward)return;const s=P_().sess;if(!s||s.kind!=="quality")return;
  if(g.kind==="q"){const u=s.list[QR.front];if(u&&s.ans[u]===undefined){
      if(view==="sess"&&s.cur===QR.front&&pick!==null)confirmAns();
      else{s.ans[u]=-1;s.ts=now();save();QR.alarm=true;if(view==="sess"&&s.cur===QR.front)rQuiz();}}}
  else if(g.kind==="rest"){QR.front++;if(QR.front>=s.list.length)qFinish("ทำครบทุกข้อที่ยังไม่เคยทำแล้ว");}}
function qGoFront(){const s=P_().sess;if(!s||QR.front>=s.list.length)return;if(s.cur!==QR.front){s.cur=QR.front;s.ts=now();save();if(view==="sess"){pick=null;rQuiz();window.scrollTo(0,0);}}}
function qFinish(msg){if(!QR||QR.done)return;QR.done=true;clearInterval(QR.iv);SND.play(QR.pg.end||"triple");toast(msg);paintQR();if(view==="sess")paintNav();}
function qPause(){if(!QR||QR.done)return;if(QR.paused){QR.t0=performance.now();QR.paused=false;SND.init();}else{QR.el0=qEl();QR.paused=true;}paintQR();if(view==="sess")paintNav();}
function qReset(){if(!QR)return;if(!confirm("เริ่มจับเวลาใหม่ตั้งแต่ต้น (รวม warm up)? ข้อที่ตอบไปแล้วยังเก็บไว้"))return;qStart(QR.pg,QR.mand);if(QR.front>=P_().sess.list.length)qFinish("ทำครบทุกข้อในรอบนี้แล้ว");}
function paintQR(){const b=$("qbar");if(!b)return;
  const on=!!(QR&&ward&&QR.ward===ward&&view==="sess"&&P_().sess&&P_().sess.kind==="quality");
  b.hidden=!on;document.body.classList.toggle("qon",on);if(!on)return;
  const g=qSeg(),el=qEl();let ph="",t="",meta="";
  if(QR.done){ph="จบแล้ว";t="0:00";meta=QR.pg.name;}
  else if(g){ph=g.name;t=mmss(g.t1-el);const w0=QR.S[0].kind==="warm"?QR.S[0].t1:0;
    meta=g.kind==="warm"?`${QR.pg.name} · warm up`:`${g.bname} ${g.rep}/${g.reps} · รอบ ${g.loop}/${nz(QR.pg.loops,1)} · เหลือ ${mmss(QR.total-Math.max(el,w0))}`;}
  $("qbPh").textContent=ph+(QR.paused?" · หยุดอยู่":"");$("qbT").textContent=t;$("qbMeta").textContent=meta+(QR.mand?" · mandatory":"");
  $("qbPause").textContent=QR.paused?"▶ ต่อ":"⏸ พัก";$("qbPause").disabled=QR.done;b.dataset.k=QR.done?"done":g?g.kind:"";
  const v=$("qbVol");if(document.activeElement!==v)v.value=qpS().vol;}
$("qbPause").onclick=qPause;$("qbReset").onclick=qReset;
$("qbStop").onclick=()=>{if(QR&&!QR.done&&!confirm("หยุดจับเวลาและจบรอบนี้?"))return;qStop();go(ward+"/result");};
$("qbVol").oninput=e=>{qpS().vol=+e.target.value;persist();};
$("qbVol").onchange=()=>{save();SND.play("ding");};

function rQuality(){
  const W=W_(),P=P_(),p=ph(),q=qpS(),pool=W.QB.filter(x=>!atts(P,p,x.uid).length),PG=qProgs();
  if(!PG.some(x=>x.id===q.sel))q.sel=PG[0].id;
  let h=`<h1 class="h2">Quality round</h1><p class="sub">Speedrun ข้อสอบเก่าที่ยังไม่เคยทำใน Phase ${p} (เหลือ <b>${pool.length}</b> ข้อ) สุ่มลำดับ จับเวลาเป็นเซตแบบ OSCE</p>`;
  if(QR&&!QR.done&&QR.ward===ward)h+=`<button class="resume" id="qBack"><span>กำลังจับเวลา: <b>${esc(QR.pg.name)}</b><span class="rd">กลับไปทำต่อ</span></span><span class="go">→</span></button>`;
  h+=`<div class="yh" style="font-family:var(--num);font-weight:700;margin:14px 0 6px">ชุดจับเวลา</div><div class="stack" style="margin-top:0">`+PG.map(pg=>`<button class="resume qprog" data-pg="${esc(pg.id)}" aria-pressed="${pg.id===q.sel}"><span><b>${esc(pg.name)}</b>${pg.builtin?' <span class="tag">preset</span>':''}<span class="rd">${qDesc(pg)}</span></span><span class="go">${pg.id===q.sel?"✓":""}</span></button>`).join("")+`</div>`;
  h+=`<label class="chk"><input type="checkbox" id="qMand" ${q.mand?"checked":""}><span><b>Mandatory</b> — หมดเวลาแล้วเปลี่ยนหน้าจอให้อัตโนมัติ: หมดเวลาตอบ = ส่งคำตอบที่เลือกไว้ (ไม่ได้เลือก = ข้าม + เสียง alarm) · จบช่วงพัก = ไปข้อต่อไป · ช่วงอ่านเฉลยเลื่อนดูข้อที่ทำไปแล้วได้</span></label>`;
  h+=`<div class="card"><h3>เสียง</h3><div class="qrow"><span>🔊</span><input type="range" id="qVol" min="0" max="1" step="0.05" value="${q.vol}" style="flex:1"></div><div class="chips" style="margin-top:8px">${SOUNDS.filter(x=>x[0]!=="none").map(([k,t])=>`<button class="chip" data-snd="${k}">▶ ${t}</button>`).join("")}</div></div>`;
  h+=`<div class="row2"><button class="btn" id="qEdit">แก้ไขชุดนี้</button><button class="btn" id="qNew">สร้างชุดใหม่</button><span class="spacer"></span><button class="btn primary" id="qGo">Start</button></div>`;
  $("main").innerHTML=h;
  const qb=$("qBack");if(qb)qb.onclick=()=>go(ward+"/sess");
  document.querySelectorAll("[data-pg]").forEach(b=>b.onclick=()=>{q.sel=b.dataset.pg;save();rQuality();});
  $("qMand").onchange=e=>{q.mand=e.target.checked;save();};
  $("qVol").oninput=e=>{q.vol=+e.target.value;persist();};$("qVol").onchange=()=>save();
  document.querySelectorAll("[data-snd]").forEach(b=>b.onclick=()=>SND.play(b.dataset.snd));
  $("qEdit").onclick=()=>{QED=clone(qProg(q.sel));go(ward+"/qedit");};
  $("qNew").onclick=()=>{QED={name:"ชุดใหม่",warm:{sec:5,sound:"bell"},loops:10,end:"triple",blocks:[{name:"เซต 1",rep:1,phases:[{name:"ตอบคำถาม",sec:30,sound:"ding2",kind:"q"},{name:"พัก",sec:5,sound:"ding",kind:"rest"}]}]};go(ward+"/qedit");};
  $("qGo").onclick=()=>{if(!pool.length){toast("ทำครบทุกข้อใน Phase นี้แล้ว");return;}const pg=qProg(q.sel);
    startSess("quality","Quality round · "+pg.name,shuffle(pool).map(x=>x.uid));qStart(pg,q.mand);if(view==="sess")rQuiz();};
}
let QED=null;   /* timer set being edited */
function rQEdit(){
  if(!QED)QED=clone(qProg(qpS().sel));const e=QED;if(!e.warm)e.warm={sec:0,sound:"bell"};
  const sel=(v,list,a)=>`<select class="field-in sel" ${a}>${list.map(([k,t])=>`<option value="${k}" ${k===v?"selected":""}>${t}</option>`).join("")}</select>`;
  const ix=(bi,pi)=>`data-b="${bi}"${pi==null?"":` data-p="${pi}"`}`;
  let h=`<h1 class="h2">${e.id?"แก้ไขชุดจับเวลา":"สร้างชุดจับเวลาใหม่"}</h1><p class="sub">ตั้งชื่อ ตั้งเวลา เรียงลำดับ เพิ่ม/ลบได้ทั้งหมด · กด ▶ เพื่อฟังเสียง</p>`;
  h+=`<label class="fl">ชื่อชุด<input class="field-in" data-f="name" value="${esc(e.name)}"></label>`;
  h+=`<div class="card qe"><h3>Warm up</h3><span class="rd">นับครั้งเดียวหลังกด Start ไม่นับรวมในเวลาทั้งหมด (0 = ไม่มี)</span><div class="qrow"><input class="field-in num" type="number" min="0" inputmode="numeric" data-f="warm.sec" value="${+e.warm.sec||0}"><span>วิ</span>${sel(e.warm.sound,SOUNDS,'data-f="warm.sound"')}<button class="chip" data-play="warm">▶</button></div></div>`;
  e.blocks.forEach((b,bi)=>{
    h+=`<div class="card qe"><div class="qrow"><input class="field-in" data-f="b.name" ${ix(bi)} value="${esc(b.name)}" aria-label="ชื่อเซต"><span>วน</span><input class="field-in num" type="number" min="1" inputmode="numeric" data-f="b.rep" ${ix(bi)} value="${nz(b.rep,1)}"><span>รอบ</span></div>
      <div class="qrow end"><button class="chip" data-a="bup" ${ix(bi)} ${bi?"":"disabled"}>↑</button><button class="chip" data-a="bdn" ${ix(bi)} ${bi<e.blocks.length-1?"":"disabled"}>↓</button><button class="chip" data-a="bdel" ${ix(bi)}>ลบเซตนี้</button></div>`;
    b.phases.forEach((f,pi)=>{h+=`<div class="qphase"><div class="qrow"><input class="field-in" data-f="p.name" ${ix(bi,pi)} value="${esc(f.name)}" aria-label="ชื่อ phase"><input class="field-in num" type="number" min="1" inputmode="numeric" data-f="p.sec" ${ix(bi,pi)} value="${nz(f.sec,1)}"><span>วิ</span></div>
      <div class="qrow">${sel(f.sound,SOUNDS,`data-f="p.sound" ${ix(bi,pi)}`)}<button class="chip" data-play="${bi}.${pi}">▶</button>${sel(f.kind||"free",KINDS,`data-f="p.kind" ${ix(bi,pi)}`)}</div>
      <div class="qrow end"><button class="chip" data-a="pup" ${ix(bi,pi)} ${pi?"":"disabled"}>↑</button><button class="chip" data-a="pdn" ${ix(bi,pi)} ${pi<b.phases.length-1?"":"disabled"}>↓</button><button class="chip" data-a="pdel" ${ix(bi,pi)}>ลบ</button></div></div>`;});
    h+=`<button class="linkbtn" data-a="padd" ${ix(bi)}>+ เพิ่ม phase</button></div>`;});
  h+=`<button class="btn" data-a="badd" style="margin-top:12px">+ เพิ่มเซต</button>`;
  h+=`<div class="card qe"><div class="qrow"><span>วนทุกเซตทั้งหมด</span><input class="field-in num" type="number" min="1" inputmode="numeric" data-f="loops" value="${nz(e.loops,1)}"><span>รอบ</span></div><div class="qrow"><span>เสียงตอนจบ</span>${sel(e.end||"triple",SOUNDS,'data-f="end"')}<button class="chip" data-play="end">▶</button></div><p class="rd" id="qeSum" style="margin:8px 0 0"></p></div>`;
  h+=`<p class="hint">ประเภทของ phase ใช้กับโหมด mandatory — <b>ตอบคำถาม</b>: หมดเวลาแล้วส่งคำตอบ/ข้ามให้ · <b>พัก / เปลี่ยนข้อ</b>: จบแล้วไปข้อต่อไป · <b>อ่านเฉลย</b>: เลื่อนดูข้อที่ทำไปแล้วได้ · <b>เตรียมพร้อม</b>: จบแล้วกลับไปข้อที่ยังไม่ได้ทำ</p>`;
  h+=`<div class="stack">${e.id?`<button class="btn primary" data-a="save">บันทึก</button>`:""}<button class="btn ${e.id?"":"primary"}" data-a="saveas">บันทึกเป็น preset ใหม่</button>${e.builtin&&qpS().over[e.id]?`<button class="btn ghost" data-a="restore">คืนค่าเดิมของ preset นี้</button>`:""}${e.id&&!e.builtin?`<button class="btn ghost" data-a="del">ลบชุดนี้</button>`:""}<button class="btn ghost" data-a="cancel">ยกเลิก</button></div>`;
  $("main").innerHTML=h;qeSum();
  const tgt=el=>{const bi=el.dataset.b==null?null:+el.dataset.b,pi=el.dataset.p==null?null:+el.dataset.p;return {b:bi==null?null:e.blocks[bi],f:pi==null?null:e.blocks[bi].phases[pi],bi,pi};};
  document.querySelectorAll("#main [data-f]").forEach(el=>{const h2=()=>{const k=el.dataset.f,v=el.value,{b,f}=tgt(el);
      if(k==="name")e.name=v;else if(k==="warm.sec")e.warm.sec=Math.max(0,parseInt(v,10)||0);else if(k==="warm.sound")e.warm.sound=v;else if(k==="loops")e.loops=nz(v,1);else if(k==="end")e.end=v;
      else if(k==="b.name")b.name=v;else if(k==="b.rep")b.rep=nz(v,1);else if(k==="p.name")f.name=v;else if(k==="p.sec")f.sec=nz(v,1);else if(k==="p.sound")f.sound=v;else if(k==="p.kind")f.kind=v;qeSum();};
    el.addEventListener("input",h2);el.addEventListener("change",h2);});
  document.querySelectorAll("#main [data-play]").forEach(el=>el.onclick=()=>{const k=el.dataset.play;SND.play(k==="warm"?e.warm.sound:k==="end"?e.end:(()=>{const [bi,pi]=k.split(".").map(Number);return e.blocks[bi].phases[pi].sound;})());});
  const sw=(a,i,j)=>{if(j<0||j>=a.length)return;[a[i],a[j]]=[a[j],a[i]];};
  document.querySelectorAll("#main [data-a]").forEach(el=>el.onclick=()=>{const a=el.dataset.a,{b,bi,pi}=tgt(el),q=qpS();
    if(a==="bup")sw(e.blocks,bi,bi-1);else if(a==="bdn")sw(e.blocks,bi,bi+1);else if(a==="bdel"){if(e.blocks.length<2){toast("ต้องมีอย่างน้อย 1 เซต");return;}e.blocks.splice(bi,1);}
    else if(a==="pup")sw(b.phases,pi,pi-1);else if(a==="pdn")sw(b.phases,pi,pi+1);else if(a==="pdel"){if(b.phases.length<2){toast("เซตต้องมีอย่างน้อย 1 phase");return;}b.phases.splice(pi,1);}
    else if(a==="padd")b.phases.push({name:"Phase "+(b.phases.length+1),sec:10,sound:"ding",kind:"free"});
    else if(a==="badd")e.blocks.push({name:"เซต "+(e.blocks.length+1),rep:1,phases:[{name:"ตอบคำถาม",sec:20,sound:"ding2",kind:"q"},{name:"พัก",sec:5,sound:"ding",kind:"rest"}]});
    else if(a==="cancel"){QED=null;go(ward+"/quality");return;}
    else if(a==="save"||a==="saveas"||a==="restore"||a==="del"){
      const out=clone(e);delete out.builtin;if(!out.name.trim())out.name="ไม่มีชื่อ";
      if(qSegs(out).S.length>=20000){toast("ชุดนี้ยาวเกินไป ลดจำนวนรอบลง");return;}
      if(a==="save"){if(e.builtin)q.over[e.id]=out;else q.custom=q.custom.map(x=>x.id===e.id?out:x);q.sel=e.id;}
      else if(a==="saveas"){const nm=prompt("ตั้งชื่อ preset ใหม่",e.id?e.name+" (ของฉัน)":e.name);if(!nm)return;out.name=nm.trim()||out.name;out.id="c"+now().toString(36);q.custom.push(out);q.sel=out.id;}
      else if(a==="restore"){if(!confirm("คืนค่า preset นี้เป็นแบบเดิม?"))return;delete q.over[e.id];q.sel=e.id;}
      else if(a==="del"){if(!confirm(`ลบชุด "${e.name}"?`))return;q.custom=q.custom.filter(x=>x.id!==e.id);q.sel="p1";}
      QED=null;save();toast("บันทึกแล้ว");go(ward+"/quality");return;}
    rQEdit();});
}
function qeSum(){const el=$("qeSum");if(!el||!QED)return;el.innerHTML=qDesc(QED);}

/* ---------------- Admission round: a new AI-written case each time ---------------- */
const AIKEY=KEY+"-ai";                 /* {key, model}: kept only in this browser, never synced */
const aiCfg=()=>ld(AIKEY)||{};
let admBusy=false,admErr="",admSetup=false;
async function aiMode(){if(HAS_CLAUDE()){try{return (await window.claude.use("sample"))?"claude":"";}catch(e){return "";}}return aiCfg().key?"key":"";}
const yrN=()=>{const m=/(\d+)/.exec(CFG.year||"");return m?+m[1]:0;};
const ord=n=>n+(n===1?"st":n===2?"nd":n===3?"rd":"th");
function admPrompt(W){const w=W.cfg,A=P_().adm,pos=Math.floor(Math.random()*5),y=yrN(),yr=y?ord(y)+"-year":"clinical-year";
  return `Write ONE brand-new multiple-choice question for a past-exam practice website used by ${yr} medical students at Chulalongkorn University (MDCU), Thailand, during their ${w.name.replace(/\s*Y\d+$/,"")} rotation.

Scope (stay inside it): ${w.scope||w.name}.
Level: what a ${yr} medical student is expected to know and use in real clinical practice. Content may come from any reliable source (standard textbooks, current international or Thai guidelines). The case may be invented or typical of real practice, common or uncommon.

Question rules:
- Case-based only: the stem MUST present a patient case (age, sex, presentation, relevant history, examination and test results as needed). Ask anything about the case: diagnosis, initial management, definitive treatment, most important or next investigation, pathophysiology, etiology, mechanism of disease or of a drug, pertinent findings, complications, prognosis, and so on.
- Stem and all options in formal English, like a real exam. No hints in the stem: no diagnosis or interpretation in parentheses after lab values, no naming the sign or disease the student must work out, no normal ranges unless essential.
- Exactly 5 options with one single best answer. Options are parallel in style and similar in length; the correct option must not be longer or more specific than the others. No parentheses, no " / ", no "e.g.", no "all of the above" or "none of the above".
- Put the correct answer at position ${"ABCDE"[pos]} (index ${pos}).
- It may be straightforward or contain a plausible trap.
- Use a different topic from these recent ones: ${(A.recent||[]).slice(-15).join("; ")||"none"}.

Explanation: write it for Thai medical students, in Thai mixed with English medical terms, concise but complete. You may use <b>…</b> for emphasis, no other HTML.

Reply with only a JSON object with exactly these keys:
{"topic": "short English topic label",
 "stem": "the case and question",
 "opts": ["A text","B text","C text","D text","E text"],
 "ans": ${pos},
 "interp": "what the case shows and what is being asked (Thai)",
 "why": "why the answer is correct, with the key facts, criteria or numbers (Thai)",
 "wrong": {"<letter>": "why this option is wrong here and when it would be right (Thai)"} for each of the 4 other letters,
 "trap": "the common trap (Thai), or empty string",
 "summary": ["4–7 Thai bullet points of high-yield knowledge on this topic, each complete on its own"],
 "guide": "guideline or textbook (with year) the answer is based on, or empty string if it is general knowledge",
 "mnemonic": "short memory aid, or empty string",
 "variants": ["2–3 Thai bullets: other ways this topic could be asked"]}`;}
const san=s=>esc(String(s==null?"":s)).replace(/&lt;(\/?)(b|i|br)\s*\/?&gt;/gi,"<$1$2>");
function admCheck(o){
  if(!o||typeof o!=="object")throw {code:"bad"};const opts=Array.isArray(o.opts)?o.opts.map(x=>String(x).trim()):[];const ans=+o.ans;
  if(opts.length!==5||opts.some(x=>!x)||!o.stem||!(ans>=0&&ans<5))throw {code:"bad"};
  const W0=o.wrong||{},wrong={};let j=0;for(let i=0;i<5;i++){if(i===ans)continue;const k=L[i];wrong[k]=san(Array.isArray(W0)?W0[j]:(W0[k]||W0[k.toLowerCase()]||""));j++;}
  const ts=now(),arr=x=>(Array.isArray(x)?x:[]).map(san).filter(Boolean);
  return {adm:1,uid:"ADM|"+ts.toString(36),set:"Case",ro:CFG.year||"",topic:String(o.topic||"").slice(0,80),stem:san(o.stem),opts,ans,interp:san(o.interp),why:san(o.why),wrong,trap:san(o.trap),summary:arr(o.summary),guide:String(o.guide||"").slice(0,300),mnemonic:san(o.mnemonic),variants:arr(o.variants),ts};}
async function admGen(W){
  const mode=await aiMode();if(!mode)throw {code:"no_ai"};const pr=admPrompt(W);let o;
  if(mode==="claude"){const smp=await window.claude.use("sample");o=await smp.json(pr,{modelTier:"default",cache:false});}
  else{const c=aiCfg();let r;
    try{r=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"content-type":"application/json","x-api-key":c.key,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:c.model||"claude-sonnet-5-5",max_tokens:4096,messages:[{role:"user",content:pr}]})});}
    catch(e){throw {code:"network"};}
    const j=await r.json().catch(()=>null);if(!r.ok)throw {code:"api",status:r.status,message:j&&j.error&&j.error.message||""};
    const t=((j&&j.content)||[]).filter(x=>x.type==="text").map(x=>x.text).join(""),a=t.indexOf("{"),b=t.lastIndexOf("}");
    if(a<0||b<a)throw {code:"invalid_json"};try{o=JSON.parse(t.slice(a,b+1));}catch(e){throw {code:"invalid_json"};}}
  return admCheck(o);}
function admMsg(e){const c=e&&e.code;
  if(c==="no_ai")return "";
  if(c==="api")return e.status===401?"API key ไม่ถูกต้อง — ตรวจ key แล้วบันทึกใหม่":e.status===404?"ไม่พบโมเดลนี้ — ตรวจชื่อโมเดลในการตั้งค่า":e.status===429?"เรียกใช้ถี่เกินไปหรือเครดิตหมด ลองใหม่ภายหลัง":e.status===529||e.status>=500?"เซิร์ฟเวอร์ AI ไม่ว่างชั่วคราว ลองใหม่อีกครั้ง":"สร้างโจทย์ไม่สำเร็จ ("+e.status+(e.message?": "+e.message:"")+")";
  return ({network:"เชื่อมต่อ AI ไม่ได้ ตรวจอินเทอร์เน็ตแล้วลองใหม่",not_granted:"ยังไม่ได้อนุญาตให้หน้านี้ใช้ Claude — เปิดหน้านี้ใหม่แล้วกดอนุญาต",sampling_disabled:"บัญชีนี้ใช้ Claude จากหน้านี้ไม่ได้",rate_limited:"ใช้ Claude ถี่เกินไปหรือครบโควตาแล้ว ลองใหม่ภายหลัง",session_expired:"ต้องเข้าสู่ระบบ Claude ใหม่",invalid_json:"AI ตอบกลับมาในรูปแบบที่อ่านไม่ได้ ลองใหม่อีกครั้ง",bad:"โจทย์ที่ได้ไม่ครบ ลองใหม่อีกครั้ง",refused:"AI ไม่ยอมสร้างโจทย์ข้อนี้ ลองใหม่อีกครั้ง",cancelled:"ยกเลิกแล้ว"})[c]||"สร้างโจทย์ไม่สำเร็จ ลองใหม่อีกครั้ง";}
async function admRun(target){
  if(admBusy)return;admBusy=true;admErr="";const wid=ward;if(view==="adm")(P_().adm.cur?paintNav():rAdm());
  try{const q=await admGen(WARDS[wid]);const A=PWof(st,wid).adm;if(target==="cur"||!A.cur){A.cur=q;A.ans=null;}else A.next=q;A.ts=now();save();}
  catch(e){console.warn("admission",e);admErr=admMsg(e);if(e&&e.code==="no_ai")admSetup=true;}
  admBusy=false;if(view==="adm"&&ward===wid){const A=P_().adm;if(A.cur&&A.ans!=null){paintNav();if(admErr)toast(admErr);}else rAdm();}}
function admAnswer(i){const A=P_().adm;if(!A.cur||A.ans!=null)return;A.ans=i;A.n=(A.n||0)+1;if(i===A.cur.ans)A.right=(A.right||0)+1;
  A.recent=(A.recent||[]).concat(A.cur.topic||[]).slice(-25);A.ts=now();save();rQuiz();
  const e=document.querySelector(".exp");if(e)setTimeout(()=>e.scrollIntoView({behavior:"smooth",block:"start"}),60);
  if(!A.next)admRun("next");}
function admNext(){const A=P_().adm;if(A.ans==null)return;
  if(A.next){A.cur=A.next;A.next=null;A.ans=null;A.ts=now();save();pick=null;rAdm();window.scrollTo(0,0);}
  else if(admBusy)toast("กำลังสร้างข้อต่อไป รอสักครู่…");
  else{A.cur=null;A.ans=null;admErr="";save();rAdm();}}
function rAdm(){
  const W=W_(),A=P_().adm;
  if(!admSetup&&A.cur&&A.ans!=null&&A.next){A.cur=A.next;A.next=null;A.ans=null;A.ts=now();save();}   /* came back after answering → the next case */
  if(!admSetup&&A.cur){$("nav").hidden=false;pick=null;rQuiz();if(!HAS_CLAUDE()){const sb=document.querySelector(".sessbar");if(sb)sb.insertAdjacentHTML("beforeend",` · <button class="linkbtn" id="admSet" style="font-size:13px;padding:0">ตั้งค่า AI</button>`);const b=$("admSet");if(b)b.onclick=()=>{admSetup=true;rAdm();};}return;}
  $("nav").hidden=true;
  let h=`<h1 class="h2">Admission round</h1><p class="sub">เคสใหม่ที่ AI สร้างขึ้นทีละข้อ เนื้อหา ${esc(W.cfg.name)} เหมาะกับนิสิตแพทย์${yearTxt()} — ข้อเดิมจะอยู่จนกว่าจะตอบ ตอบแล้วสร้างข้อใหม่ให้ทันที ไม่มีคลังข้อสอบ</p>`;
  if(admBusy){h+=`<div class="card"><h3>กำลังสร้างเคสใหม่…</h3><span class="rd" style="margin:0">ใช้เวลาประมาณ 10–60 วินาที</span><div class="spin" aria-hidden="true"></div></div>`;$("main").innerHTML=h;return;}
  h+=`<div id="admBox"><p class="hint">กำลังตรวจการเชื่อมต่อ AI…</p></div>`;$("main").innerHTML=h;
  aiMode().then(mode=>{const box=$("admBox");if(!box||view!=="adm")return;
    if(mode&&!admSetup&&!admErr){admRun("cur");return;}
    let x="";
    if(admErr)x+=`<div class="card"><h3>สร้างโจทย์ไม่สำเร็จ</h3><span class="rd">${esc(admErr)}</span>${mode?`<button class="btn primary" id="admRetry">ลองใหม่</button>`:""}</div>`;
    if(HAS_CLAUDE()){if(!mode)x+=`<div class="card"><h3>ใช้ Claude จากหน้านี้ไม่ได้</h3><span class="rd" style="margin:0">ล็อกอิน Claude แล้วเปิดหน้านี้ใหม่ แล้วกดอนุญาตเมื่อหน้านี้ขอใช้ Claude (ใช้โควตาบัญชีของคุณเอง)</span></div>`;}
    else{const c=aiCfg();
      x+=`<div class="card"><h3>เชื่อม AI สำหรับ Admission round</h3><span class="rd">เว็บนี้ไม่มี AI ในตัว เลือกได้ 2 ทาง</span>
        ${CFG.artifactUrl?`<a class="btn primary" style="display:block;text-align:center;text-decoration:none;margin-bottom:12px" href="${esc(CFG.artifactUrl)}#/${esc(ward)}/adm" target="_blank" rel="noopener">เปิด Admission round ใน Claude ↗ (ฟรี ใช้บัญชี Claude)</a><span class="rd">ความคืบหน้าในเว็บกับใน Claude แยกกัน ย้ายได้ด้วยปุ่ม "ส่งลิงก์ความคืบหน้า"</span>`:""}
        <div class="or">หรือใส่ Anthropic API key ของตัวเอง</div>
        <input class="field-in" id="aiKey" type="password" autocomplete="off" spellcheck="false" placeholder="sk-ant-…" value="${esc(c.key||"")}">
        <input class="field-in" id="aiModel" type="text" autocapitalize="none" spellcheck="false" placeholder="โมเดล (เว้นว่าง = claude-sonnet-5-5)" value="${esc(c.model||"")}" style="margin-top:8px">
        <span class="rd" style="margin-top:6px">key เก็บไว้ในเบราว์เซอร์นี้เท่านั้น (ไม่ซิงก์ ไม่ส่งไปที่อื่นนอกจาก api.anthropic.com) · คิดเงินตามการใช้งานจากบัญชี API ของคุณ ราว ๆ ไม่ถึง 1 บาทต่อข้อ</span>
        <div class="row2" style="margin-top:6px"><button class="btn primary" id="aiSave">บันทึกแล้วเริ่ม</button>${c.key?`<button class="btn ghost" id="aiDel">ลบ key</button>`:""}${A.cur?`<button class="btn ghost" id="aiBack">กลับไปข้อเดิม</button>`:""}</div></div>`;}
    box.innerHTML=x;
    const rt=$("admRetry");if(rt)rt.onclick=()=>{admErr="";admSetup=false;rAdm();};
    const sv=$("aiSave");if(sv)sv.onclick=()=>{const k=$("aiKey").value.trim(),m=$("aiModel").value.trim();if(!/^sk-/.test(k)){toast("key ควรขึ้นต้นด้วย sk-");return;}try{localStorage.setItem(AIKEY,JSON.stringify({key:k,model:m}));}catch(e){}admErr="";admSetup=false;rAdm();};
    const dl=$("aiDel");if(dl)dl.onclick=()=>{try{localStorage.removeItem(AIKEY);}catch(e){}admSetup=true;rAdm();};
    const bk=$("aiBack");if(bk)bk.onclick=()=>{admSetup=false;rAdm();};
  });
}

/* ---------------- session result ---------------- */
function rResult(){
  const W=W_(),P=P_(),s=P.sess;const qs=s.list.map(u=>W.byU[u]).filter(Boolean);
  const ans=qs.filter(q=>s.ans[q.uid]>=0),right=ans.filter(q=>s.ans[q.uid]===q.ans),wrong=ans.filter(q=>s.ans[q.uid]!==q.ans),tout=qs.filter(q=>s.ans[q.uid]<0).length,skip=qs.length-ans.length-tout;
  let h=`<h1 class="h2">สรุป ${esc(s.title)}</h1><p class="sub">Phase ${s.ph} · ${qs.length} ข้อ</p>
  <div class="score">${right.length}<span style="font-size:22px;color:var(--muted)"> / ${qs.length}</span></div>
  <p class="statline">ถูก <b>${right.length}</b> · ผิด <b>${wrong.length}</b>${tout?` · หมดเวลา <b>${tout}</b>`:""}${skip?` · ยังไม่ได้ตอบ <b>${skip}</b>`:""} · ความแม่น <b>${ans.length?Math.round(right.length/ans.length*100)+"%":"–"}</b></p>
  <div class="stack">${wrong.length?`<button class="btn primary" id="rWrong">ทำข้อที่ผิดในรอบนี้อีกครั้ง (${wrong.length})</button>`:""}${skip?`<button class="btn" id="rBack">กลับไปทำข้อที่ข้ามไว้</button>`:""}<button class="btn ghost" id="rHome">กลับหน้าหลัก</button></div>
  <div class="card" style="padding:6px"><div class="rows" style="padding:0">${qs.map((q,i)=>{const a=s.ans[q.uid];const bs=[0,1,2,3,4].map(j=>{let c="b";if(a===j)c+=" f "+(j===q.ans?"ok":"no");else if(a!==undefined&&j===q.ans)c+=" k";return `<span class="${c}">${L[j]}</span>`;}).join("");return `<button class="srow" data-i="${i}"><span class="n">${q.id}</span><span class="bs">${bs}</span><span class="meta">${esc(q.set)} ${esc(q.ro)}</span></button>`;}).join("")}</div></div>`;
  $("main").innerHTML=h;
  const rw=$("rWrong");if(rw)rw.onclick=()=>startSess(s.kind==="quality"||s.kind==="morning"?"redo":s.kind,s.title.replace(/ \(ข้อที่ผิด\)$/,"")+" (ข้อที่ผิด)",wrong.map(q=>q.uid));
  const rb=$("rBack");if(rb)rb.onclick=()=>{s.cur=Math.max(0,s.list.findIndex(u=>s.ans[u]===undefined));save();go(ward+"/sess");};
  $("rHome").onclick=()=>go(ward);
  document.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{s.cur=+b.dataset.i;save();go(ward+"/sess");});
}

/* ---------------- Phase 2: high-yield & keywords ---------------- */
function openQ(u){const s=P_().svc[ph()];s.set="all";s.status="all";s.cur=u;save();go(ward+"/svc");}
function refBtns(refs){const W=W_();return (refs||[]).map(r=>W.byRid[r]).filter(Boolean).map(q=>`<button class="qref" data-u="${esc(q.uid)}">ข้อ ${q.id}</button>`).join(" ");}
function bindRefs(){document.querySelectorAll("[data-u].qref").forEach(b=>b.onclick=()=>openQ(b.dataset.u));}
function rHY(){
  const W=W_(),HY=W.HY||{},R=W.R;
  let h=`<h1 class="h2">สรุป High-yield</h1><p class="sub">เนื้อหาที่เคยออกสอบ รวบรวมจากข้อสอบเก่าทุกปีในคลัง กดเลขข้อเพื่อเปิดข้อนั้น</p>`;
  if(HY.topics&&HY.topics.length){h+=`<div class="card">${HY.topics.map(t=>`<div class="hy-topic"><h3>${t.title}${t.rep?` <span class="tag rep">ออก ${t.rep} ครั้ง</span>`:""}</h3>${t.points?`<ul>${t.points.map(x=>`<li>${R(x)}</li>`).join("")}</ul>`:""}${t.body?`<p>${R(t.body)}</p>`:""}<div>${refBtns(t.refs)}</div></div>`).join("")}</div>`;}
  else h+=`<div class="card"><span class="rd">Claude จะเขียนหน้าสรุป high-yield ให้เมื่อมีข้อสอบในคลัง ระหว่างนี้ด้านล่างคือ “สรุปความรู้” ของทุกข้อ เรียงตามชุด</span></div>`;
  const byS={};W.QB.forEach(q=>{(byS[setKey(q)]=byS[setKey(q)]||[]).push(q);});
  const ks=Object.keys(byS);
  if(ks.length)h+=`<h2 class="h2" style="font-size:18px;margin-top:22px">สรุปความรู้รายข้อ</h2>`+ks.map((k,i)=>`<details class="grp" ${i===0&&!(HY.topics&&HY.topics.length)?"open":""}><summary>${esc(k)} · ${byS[k].length} ข้อ</summary><ul>${byS[k].map(q=>`<li><button class="qref" data-u="${esc(q.uid)}">ข้อ ${q.id}</button> ${(q.summary||[]).filter(s=>!/^ดูข้อ/.test(plain(s))).map(s=>R(s)).join(" · ")}</li>`).join("")}</ul></details>`).join("");
  $("main").innerHTML=h;bindRefs();
}
function rKW(){
  const W=W_(),HY=W.HY||{},R=W.R;
  let h=`<h1 class="h2">Keyword ตอบข้อสอบ</h1><p class="sub">คำสำคัญที่เจอแล้วใช้ตอบได้ รวบรวมจากข้อสอบเก่าทุกปี</p>`;
  if(HY.keywords&&HY.keywords.length){h+=`<div class="card" style="padding:6px 10px"><table class="kw"><thead><tr><th>เจอคำว่า</th><th>นึกถึง / ตอบ</th></tr></thead><tbody>${HY.keywords.map(k=>`<tr><td>${k.k}</td><td>${R(k.v)} ${refBtns(k.refs)}</td></tr>`).join("")}</tbody></table></div>`;}
  else h+=`<div class="card"><span class="rd">Claude จะสรุป keyword ให้เมื่อมีข้อสอบในคลัง ระหว่างนี้ด้านล่างคือ “ช่วยจำ” ของทุกข้อ</span></div>`;
  const ms=W.QB.filter(q=>q.mnemonic);
  if(ms.length)h+=`<h2 class="h2" style="font-size:18px;margin-top:22px">ช่วยจำรายข้อ</h2><div class="card"><ul style="margin:0;padding-left:18px">${ms.map(q=>`<li style="margin:6px 0"><button class="qref" data-u="${esc(q.uid)}">ข้อ ${q.id}</button> ${q.mnemonic}</li>`).join("")}</ul></div>`;
  $("main").innerHTML=h;bindRefs();
}

/* ---------------- answer sheet ---------------- */
function sheet(){
  const W=W_(),P=P_(),p=ph();
  if(isSess()){
    const s=P.sess,qs=s.list.map(u=>W.byU[u]).filter(Boolean);
    $("sheetTitle").textContent=s.title;$("setChips").innerHTML="";
    const f=st.sessF||"all";
    $("statusChips").innerHTML=[["all","ทั้งหมด"],["todo","ยังไม่ทำ"],["wrong","ตอบผิด"]].map(([v,t])=>`<button class="chip" aria-pressed="${f===v}" data-sf="${v}">${t}</button>`).join("");
    document.querySelectorAll("[data-sf]").forEach(b=>b.onclick=()=>{st.sessF=b.dataset.sf;persist();sheet();});
    const done=qs.filter(q=>s.ans[q.uid]!==undefined),right=done.filter(q=>s.ans[q.uid]===q.ans);
    stats(done.length,qs.length,right.length);
    const v=qs.map((q,i)=>[q,i]).filter(([q])=>{const a=s.ans[q.uid];return f==="todo"?a===undefined:f==="wrong"?a!==undefined&&a!==q.ans:true;});
    rows(v.map(([q,i])=>({q,a:s.ans[q.uid],cur:i===s.cur,go:()=>{if(!qNavOK(i)){toast("ตอนนี้ยังเปลี่ยนข้อไม่ได้ (โหมด mandatory)");return;}pick=null;s.cur=i;save();rQuiz();window.scrollTo(0,0);}})),f==="wrong"?"ยังไม่มีข้อที่ตอบผิดในรอบนี้":"ทำครบทุกข้อในรอบนี้แล้ว");
    $("sheetFoot").innerHTML=`<span class="hint">เส้นเขียวรอบวง = เฉลย</span><span class="spacer"></span><span class="hint" id="syncNote" style="flex-basis:100%"></span><button class="link" id="toResult">จบรอบ ดูสรุป</button>`;
    $("toResult").onclick=()=>{closeS(true);go(ward+"/result");};
    paintSync();return;
  }
  $("sheetTitle").textContent=`กระดาษคำตอบ · Phase ${p}`;
  const sets=W.sets,sv=svcS();
  $("setChips").innerHTML=[["all",sv.set==="all"?"ทุกชุด":`ทุกชุด (เลือก ${selSets().length})`],...sets.map(k=>[k,(CFG.chipStrip?k.replace(CFG.chipStrip,""):k)])].map(([v,t])=>`<button class="chip" aria-pressed="${v==="all"?sv.set==="all":selSets().includes(v)}" data-set="${esc(v)}">${esc(t)}</button>`).join("");
  {const sc=$("setChips"),on=sc.querySelector('[aria-pressed="true"]');if(sheet._ok)sc.scrollLeft=sheet._x||0;if(on){const l=on.offsetLeft-sc.offsetLeft,r=l+on.offsetWidth;if(!sheet._ok||l<sc.scrollLeft||r>sc.scrollLeft+sc.clientWidth)sc.scrollLeft=l-sc.clientWidth/2+on.offsetWidth/2;}sheet._ok=1;sheet._x=sc.scrollLeft;sc.onscroll=()=>{sheet._x=sc.scrollLeft;};sc.onwheel=e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){sc.scrollLeft+=e.deltaY;e.preventDefault();}};}
  document.querySelectorAll("[data-set]").forEach(b=>b.onclick=()=>{const v=b.dataset.set;if(v==="all")sv.set="all";else{const c=selSets(),i=c.indexOf(v);if(i<0)c.push(v);else c.splice(i,1);c.sort((x,y)=>sets.indexOf(x)-sets.indexOf(y));sv.set=c.length?c.join("|"):"all";}P.pick=selSets();save();sheet();});
  const FS=[["all","ทั้งหมด"],["todo","ยังไม่ทำ"],["wrong","ตอบผิด"]].concat(p===2?[["right","ตอบถูก"],["flag","ไม่มั่นใจ"],["nop1","ไม่เคยทำใน P1"]]:[["flag","ไม่มั่นใจ"]]);
  if(!FS.some(x=>x[0]===sv.status))sv.status="all";
  $("statusChips").innerHTML=FS.map(([v,t])=>`<button class="chip" aria-pressed="${sv.status===v}" data-st="${v}">${t}</button>`).join("");
  document.querySelectorAll("[data-st]").forEach(b=>b.onclick=()=>{sv.status=b.dataset.st;save();sheet();});
  const pool=svcList(),done=pool.filter(q=>lockedAns(P,p,q.uid)!==undefined),right=done.filter(q=>lockedAns(P,p,q.uid)===q.ans);
  stats(done.length,pool.length,right.length);
  const cq=svcQ();
  rows(svcVisible().map(q=>{const p1=p===2?lastA(P,1,q.uid):null;return {q,a:lockedAns(P,p,q.uid),cur:cq&&q.uid===cq.uid,meta:p1?`P1${p1[0]===q.ans?"✓":"✗"} `:"",go:()=>{closeS();sv.cur=q.uid;pick=null;save();rQuiz();window.scrollTo(0,0);}};}),
    sv.status==="wrong"?"ยังไม่มีข้อที่ตอบผิดในชุดนี้":sv.status==="flag"?"ยังไม่มีข้อที่ทำเครื่องหมายไม่มั่นใจ":"ไม่มีข้อที่ตรงกับตัวกรองนี้");
  $("sheetFoot").innerHTML=`<span class="hint">เส้นเขียวรอบวง = เฉลย · แตะเลือกได้หลายชุด</span><span class="spacer"></span><span class="hint" id="syncNote" style="flex-basis:100%"></span>
   <button class="link" id="redoWrong">ทำข้อที่ผิดใหม่</button><button class="link" id="backup">ส่งลิงก์ความคืบหน้า</button><button class="link" id="restore">นำเข้า</button><button class="link" id="reset">ล้างกระดาษคำตอบ</button>`;
  $("redoWrong").onclick=()=>{const w=pool.filter(q=>{const a=lockedAns(P,p,q.uid);return a!==undefined&&a!==q.ans;});if(!w.length){alert("ยังไม่มีข้อที่ตอบผิดในชุดนี้");return;}
    if(confirm(`เปิดข้อที่ตอบผิด ${w.length} ข้อให้ทำใหม่? (ข้อที่ถูกยังอยู่ ประวัติการตอบยังเก็บไว้)`)){const t=now();w.forEach(q=>{P.open[p][q.uid]=t;});sv.status="todo";save();sheet();rQuiz();}};
  $("backup").onclick=exportLink;$("restore").onclick=importPrompt;
  $("reset").onclick=()=>{if(confirm(`ล้างกระดาษคำตอบ Phase ${p} ของชุดที่เลือก แล้วเริ่มทำใหม่? (ประวัติการตอบยังเก็บไว้ใช้กับ Ward staff round)`)){const t=now();pool.forEach(q=>{P.open[p][q.uid]=t;});sv.status="all";pick=null;save();sheet();rQuiz();}};
  paintSync();
}
function stats(d,n,r){$("sDone").textContent=`${d}/${n}`;$("sRight").textContent=r;$("sPct").textContent=d?Math.round(r/d*100)+"%":"–";}
function rows(list,empty){
  if(!list.length){$("rows").innerHTML=`<div class="empty">${empty}</div>`;return;}
  $("rows").innerHTML=list.map((x,i)=>{const q=x.q,a=x.a;const bs=[0,1,2,3,4].map(j=>{let c="b";if(a===j)c+=" f "+(j===q.ans?"ok":"no");else if(a!==undefined&&j===q.ans)c+=" k";return `<span class="${c}">${L[j]}</span>`;}).join("");
    return `<button class="srow ${x.cur?"cur":""}" data-r="${i}"><span class="n">${q.id}</span><span class="bs">${bs}</span><span class="meta">${x.meta||""}${esc(q.set)} ${esc(q.ro)}${flagged(P_(),q.uid)?" ⚑":""}</span></button>`;}).join("");
  document.querySelectorAll("[data-r]").forEach(b=>b.onclick=()=>{closeS();list[+b.dataset.r].go();});
}
function openS(){sheet._ok=0;sheet();$("overlay").classList.add("open");const c=document.querySelector(".srow.cur");if(c)c.scrollIntoView({block:"center"});$("closeSheet").focus();}
function closeS(silent){$("overlay").classList.remove("open");if(!silent&&!$("openSheet").hidden)$("openSheet").focus();}
$("openSheet").onclick=openS;$("closeSheet").onclick=()=>closeS();
$("overlay").addEventListener("click",e=>{if(e.target.id==="overlay")closeS();});

/* ---------------- keyboard ---------------- */
document.addEventListener("keydown",e=>{
  if($("overlay").classList.contains("open")){if(e.key==="Escape")closeS();return;}
  if(view!=="svc"&&view!=="sess"&&view!=="adm")return;
  const tg=e.target;if(tg&&(tg.tagName==="INPUT"||tg.tagName==="TEXTAREA"||tg.isContentEditable))return;
  if(e.metaKey||e.ctrlKey||e.altKey)return;
  const q=curQ();if(!q)return;const locked=doneAns(q)!==undefined;
  const k=e.key.toUpperCase(),idx="ABCDE".indexOf(k),nidx="12345".indexOf(e.key);
  if(!locked&&(idx>=0||nidx>=0)){pick=idx>=0?idx:nidx;rQuiz();return;}
  if(e.key==="Enter"&&!locked&&pick!==null&&!(tg.classList&&tg.classList.contains("opt"))){confirmAns();return;}
  if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1);
});

/* ---------------- progress link export / import ---------------- */
const SITE=(()=>{try{if(!IN_FRAME&&/^https?:$/.test(location.protocol))return location.origin+location.pathname;}catch(e){}return CFG.siteUrl||"";})();
/* "all" link: every ward, both phases (answer sequences, last 20 each), ⚑ flags.
   format  #all=<ward>:<entry>,<entry>~<ward>:…   entry = <7-char hash of uid><P1 answers>[-<P2 answers>][!]  */
const SEQMAX=20;
function encodeAll(){const parts=[];
  WL.forEach(w=>{const W=WARDS[w.id];if(!W||!st.w[w.id])return;const P=PWof(st,w.id),es=[];
    W.QB.forEach(q=>{const u=q.uid,a1=atts(P,1,u).slice(-SEQMAX).map(x=>x[0]).join(""),a2=atts(P,2,u).slice(-SEQMAX).map(x=>x[0]).join(""),f=flagged(P,u);
      if(!a1&&!a2&&!f)return;es.push(H7(u)+a1+(a2||f?"-"+a2:"")+(f?"!":""));});
    if(es.length)parts.push(w.id+":"+es.join(","));});
  return parts.join("~");}
function decodeAll(str){const out={};let n=0;
  String(str||"").split("~").forEach(part=>{const k=part.indexOf(":");if(k<1)return;const w=part.slice(0,k),W=WARDS[w];if(!W)return;
    const m={};W.QB.forEach(q=>{m[H7(q.uid)]=q.uid;});const o={};
    part.slice(k+1).split(",").forEach(e=>{const r=/^([0-9a-z]{7})([0-4]*)(?:-([0-4]*))?(!)?$/.exec(e);if(!r||!m[r[1]])return;
      o[m[r[1]]]={1:r[2].split("").map(Number),2:(r[3]||"").split("").map(Number),f:!!r[4]};n++;});
    if(Object.keys(o).length)out[w]=o;});
  return {data:out,n};}
function applyAll(data,replace){let t=now();
  for(const w in data){const P=PWof(st,w),o=data[w];
    if(replace){P.att={1:{},2:{}};P.open={1:{},2:{}};P.flag={};}
    for(const u in o){[1,2].forEach(p=>{const seq=o[u][p];if(!seq.length)return;const cur=atts(P,p,u);
        if(replace||seq.length>cur.length)P.att[p][u]=seq.map(a=>[a,t++]);});
      if(o[u].f)P.flag[u]=[1,t++];}}
  save();}
function shareLink(link,title){(async()=>{if(navigator.share){try{await navigator.share({title,url:link});return;}catch(e){if(e&&e.name==="AbortError")return;}}
  try{await navigator.clipboard.writeText(link);alert("คัดลอกลิงก์ความคืบหน้าแล้ว — เปิดลิงก์นี้บนเครื่องใหม่เพื่อนำความคืบหน้าไปด้วย");}catch(e){prompt("คัดลอกลิงก์นี้ไปเปิดบนเครื่องใหม่:",link);}})();}
function exportLink(){const d=encodeAll();if(!d){alert("ยังไม่มีคำตอบให้ส่ง");return;}
  if(!SITE){const code="AC-PROGRESS:"+d;(async()=>{try{await navigator.clipboard.writeText(code);alert("คัดลอกรหัสความคืบหน้าแล้ว — บนเครื่องใหม่กด \"นำเข้าลิงก์ / รหัส\" แล้ววางรหัสนี้");}catch(e){prompt("คัดลอกรหัสนี้ไปวางบนเครื่องใหม่ (ปุ่มนำเข้าลิงก์ / รหัส):",code);}})();return;}
  shareLink(SITE+"#all="+d,"ความคืบหน้า "+(CFG.siteName||""));}
/* older single-phase links: #p=[ward.]<hash7+answer>… (also made by the artifact in Claude) */
function decodeP(w,p){const W=WARDS[w];if(!W)return {};const m={};W.QB.forEach(q=>{m[H7(q.uid)]=q.uid;});const o={};p=String(p).replace(/[^0-9a-z]/g,"");for(let i=0;i+8<=p.length;i+=8){const u=m[p.slice(i,i+7)],v=+p[i+7];if(u&&v>=0&&v<5)o[u]=v;}return o;}
function applyImport(w,o){const P=PWof(st,w),p=ph(),t=now();let n=0;Object.keys(o).forEach(u=>{const a=lastA(P,p,u);if(!a||a[0]!==o[u]){(P.att[p][u]=P.att[p][u]||[]).push([o[u],t]);n++;}});save();return n;}
const askMode=n=>confirm(`นำเข้าความคืบหน้า ${n} ข้อ (ทุกวอร์ด ทุก Phase)\n\nกด OK = รวมกับของเครื่องนี้ (ข้อไหนทำในเครื่องนี้มากกว่า จะเก็บของเครื่องนี้ไว้)\nกด Cancel = ไม่นำเข้า`);
function afterImport(){toast("นำเข้าเรียบร้อย");route();}
function importText(c){
  const a=/(?:[#&]all=|AC-PROGRESS:)([0-9a-z:,~!_-]*)/.exec(c);
  if(a){const r=decodeAll(a[1]);if(!r.n){alert("ลิงก์ไม่ถูกต้อง หรือไม่ตรงกับข้อในคลังนี้");return;}if(askMode(r.n)){applyAll(r.data,false);afterImport();}return;}
  const m=/[#&]p=(?:([a-z0-9_-]+)\.)?([0-9a-z]+)/.exec(c);let o={},w=ward||WL[0].id;
  if(m){w=m[1]&&WARDS[m[1]]?m[1]:w;o=decodeP(w,m[2]);}
  else{try{const x=JSON.parse(decodeURIComponent(escape(atob(String(c).trim()))));if(x&&x.a)o=x.a;}catch(e){}}
  const n=Object.keys(o).length;if(!n){alert("ลิงก์หรือรหัสไม่ถูกต้อง หรือไม่ตรงกับข้อในคลังนี้");return;}
  if(confirm(`ลิงก์/รหัสแบบเก่า มีความคืบหน้า ${n} ข้อของวอร์ด ${WARDS[w].cfg.name} — นำเข้าเข้า Phase ${ph()} ของเครื่องนี้?`)){applyImport(w,o);afterImport();}}
function importPrompt(){const c=prompt("วางลิงก์หรือรหัสความคืบหน้าที่สำรองไว้:");if(c)importText(c);}
function checkHashImport(){const h=location.hash||"";if(!/[#&](all|p)=/.test(h))return false;
  try{history.replaceState(null,"",location.pathname+location.search+"#/");}catch(e){location.hash="#/";}
  setTimeout(()=>importText(h),300);return true;}
/* full backup file: everything incl. typed notes and handwriting */
async function exportFile(){
  const blob=new Blob([JSON.stringify({kind:"ac-mcq-backup",v:3,site:CFG.siteName||"",t:now(),st,ink})],{type:"application/json"});
  const d=new Date(),fn=`ac-mcq-backup-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}.json`;
  if(HAS_CLAUDE()){try{const dl=await window.claude.use("downloads");if(dl){try{await dl.save({filename:fn,data:blob});return;}catch(e){const c=e&&e.code;if(c==="declined")return;if(!["unavailable","not_granted","capability_disabled","capability_removed"].includes(c)){toast("บันทึกไฟล์ไม่สำเร็จ"+(c?" ("+c+")":""));return;}}}}catch(e){}}
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=fn;
  document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1500);}
function importFile(){
  const i=document.createElement("input");i.type="file";i.accept=".json,application/json";
  i.onchange=async()=>{const f=i.files&&i.files[0];if(!f)return;let o;try{o=JSON.parse(await f.text());}catch(e){o=null;}
    if(!o||o.kind!=="ac-mcq-backup"||!o.st){alert("ไฟล์นี้ไม่ใช่ไฟล์สำรองของเว็บนี้");return;}
    if(!confirm("นำเข้าไฟล์สำรอง? จะรวมกับข้อมูลในเครื่องนี้ (คำตอบรวมกัน โน้ตใช้ฉบับที่แก้ล่าสุด)"))return;
    mergeSt(st,o.st);const ks=[];for(const k in o.ink||{}){if(!ink[k]||(o.ink[k].ts||0)>(ink[k].ts||0)){ink[k]=o.ink[k];ks.push(k);}}
    try{localStorage.setItem(IKEY,JSON.stringify(ink));}catch(e){toast("พื้นที่เก็บข้อมูลในเบราว์เซอร์เต็ม");}
    save();ks.forEach(k=>cloudInk(k));afterImport();};
  i.click();}

/* ---------------- accounts (Firebase, optional) ---------------- */
let fb=null,fbFail=false,pushT=null,inkT=null;const inkDirty=new Set();let sync="local";
/* When the page runs as an artifact inside claude.ai, progress syncs to the viewer's Claude account (db + user capabilities). */
let cl=null;
const HAS_CLAUDE=()=>!!(window.claude&&typeof window.claude.use==="function");
const fbOn=()=>!!(CFG.firebase&&CFG.firebase.apiKey);
function paintAcct(){const b=$("acctBtn");b.hidden=view==="signin";
  if(cl){b.classList.add("on");b.textContent="☁️";b.title=b.ariaLabel="บันทึกในบัญชี Claude";}
  else if(fb&&fb.user){b.classList.add("on");b.textContent="☁️";b.title=b.ariaLabel="บัญชี: "+who(fb.user);}else{b.classList.remove("on");b.textContent="👤";b.title=b.ariaLabel="เข้าสู่ระบบ";}
  paintSync();}
$("acctBtn").onclick=()=>go("signin");
function paintSync(){const el=$("syncNote");if(!el)return;
  if(cl)el.textContent=sync==="error"?"⚠️ ซิงก์กับบัญชี Claude ไม่สำเร็จ — ยังบันทึกในเครื่องนี้อยู่":sync==="saving"?"☁️ กำลังบันทึก…":"☁️ บันทึกในบัญชี Claude แล้ว · ใช้ได้ทุกเครื่อง";
  else if(fb&&fb.user)el.textContent=sync==="error"?"⚠️ ซิงก์กับบัญชีไม่สำเร็จ — ยังบันทึกในเครื่องนี้อยู่":sync==="saving"?"☁️ กำลังบันทึก…":"☁️ บันทึกในบัญชีแล้ว · ใช้ได้ทุกเครื่อง";
  else el.textContent=fbOn()?"💾 บันทึกในเบราว์เซอร์นี้ — เข้าสู่ระบบเพื่อใช้หลายเครื่อง":"💾 บันทึกในเบราว์เซอร์นี้ — ย้ายเครื่องได้ด้วยปุ่ม \"ส่งลิงก์ความคืบหน้า\"";}
async function initFB(){
  if(!fbOn())return;
  try{
    const b="https://www.gstatic.com/firebasejs/10.12.2/";
    const [ap,au,fs]=await Promise.all([import(b+"firebase-app.js"),import(b+"firebase-auth.js"),import(b+"firebase-firestore.js")]);
    const app=ap.initializeApp(CFG.firebase);
    fb={au,fs,auth:au.getAuth(app),db:fs.getFirestore(app),user:null};
    try{await au.setPersistence(fb.auth,au.browserLocalPersistence);}catch(e){}
    au.getRedirectResult(fb.auth).catch(e=>{authErr=errMsg(e);});
    au.onAuthStateChanged(fb.auth,async u=>{
      fb.user=u;
      if(u){sync="saving";paintAcct();try{await pull();sync="cloud";}catch(e){console.warn(e);sync="error";}}else sync="local";
      paintAcct();if(view==="signin"||view==="wards"||view==="home")route();else if(view==="svc"||view==="sess")rQuiz();
    });
  }catch(e){console.warn("firebase",e);fb=null;fbFail=true;if(view==="signin")rSignin();}
}
const uref=()=>fb.fs.doc(fb.db,"users",fb.user.uid);
const inkCol=()=>fb.fs.collection(fb.db,"users",fb.user.uid,"ink");
const inkId=k=>"i"+H7(k)+H7(k+"#");
function newer(dst,src){for(const k in src||{}){const s=src[k],d=dst[k];const ts=x=>x?((Array.isArray(x)?x[1]:x.ts)||0):-1;if(!d||ts(s)>ts(d))dst[k]=s;}}
function mergeSt(a,b){
  if(!b||!b.w)return;
  for(const id in b.w){const r=PWof(b,id),l=PWof(a,id);
    [1,2].forEach(p=>{
      for(const u in r.att[p]){const m=new Map();(l.att[p][u]||[]).concat(r.att[p][u]).forEach(x=>m.set(x[1]+":"+x[0],x));l.att[p][u]=[...m.values()].sort((x,y)=>x[1]-y[1]);}
      newer(l.pre[p],r.pre[p]);
      for(const u in r.open[p])l.open[p][u]=Math.max(l.open[p][u]||0,r.open[p][u]);
    });
    for(const u in r.unit.att){const m=new Map();(l.unit.att[u]||[]).concat(r.unit.att[u]).forEach(x=>m.set(x[1]+":"+x[0],x));l.unit.att[u]=[...m.values()].sort((x,y)=>x[1]-y[1]);}
    [1,2].forEach(p=>{const a=l.morn[p],c=r.morn[p];if(!c)return;
      if(a&&a.day===c.day&&(a.list||[]).join()===(c.list||[]).join())a.ans=Object.assign({},c.ans,a.ans);
      else if(!a||c.day>a.day||(c.day===a.day&&(c.ts||0)>(a.ts||0)))l.morn[p]=c;});
    if((r.adm.ts||0)>(l.adm.ts||0))l.adm=r.adm;
    newer(l.flag,r.flag);newer(l.post,r.post);
    if((b.t||0)>(a.t||0)){l.svc=r.svc;l.type=r.type;l.pick=r.pick;}
    if(r.sess&&(!l.sess||(r.sess.ts||0)>(l.sess.ts||0)))l.sess=r.sess;
  }
  if((b.t||0)>(a.t||0)){a.phase=b.phase===2?2:1;a.noteMode=b.noteMode||a.noteMode;if(b.qp)a.qp=b.qp;}
  if(!a.qp&&b.qp)a.qp=b.qp;
  a.t=Math.max(a.t||0,b.t||0);
}
async function pull(){
  const {fs}=fb;
  const snap=await fs.getDoc(uref());
  if(snap.exists()){const d=snap.data();try{const r=JSON.parse(d.d||"null");if(r)mergeSt(st,r);}catch(e){}}
  const remoteTs={};
  const is=await fs.getDocs(inkCol());
  is.forEach(x=>{const d=x.data();if(!d||!d.k)return;try{const v=JSON.parse(d.d);remoteTs[d.k]=v.ts||0;if(!ink[d.k]||(v.ts||0)>(ink[d.k].ts||0))ink[d.k]=v;}catch(e){}});
  try{localStorage.setItem(KEY,JSON.stringify(st));localStorage.setItem(IKEY,JSON.stringify(ink));}catch(e){}
  await pushNow();
  Object.keys(ink).forEach(k=>{if((ink[k].ts||0)>(remoteTs[k]||0))inkDirty.add(k);});
  await flushInk();
}
async function pushNow(){if(!fb||!fb.user)return;clearTimeout(pushT);sync="saving";paintSync();
  try{await fb.fs.setDoc(uref(),{d:JSON.stringify(st),t:st.t||now(),v:3});sync="cloud";}catch(e){console.warn(e);sync="error";}paintSync();}
function cloudPush(){if(cl){clearTimeout(pushT);pushT=setTimeout(clPush,1500);return;}if(!fb||!fb.user)return;clearTimeout(pushT);pushT=setTimeout(pushNow,1500);}
async function flushInk(){if(!fb||!fb.user)return;clearTimeout(inkT);const ks=[...inkDirty];inkDirty.clear();
  for(const k of ks){try{if(ink[k])await fb.fs.setDoc(fb.fs.doc(inkCol(),inkId(k)),{k,d:JSON.stringify(ink[k]),ts:ink[k].ts||now()});}catch(e){console.warn(e);inkDirty.add(k);sync="error";}}paintSync();}
function cloudInk(k){if(cl){inkDirty.add(k);clearTimeout(inkT);inkT=setTimeout(clInk,2000);return;}if(!fb||!fb.user)return;inkDirty.add(k);clearTimeout(inkT);inkT=setTimeout(flushInk,2000);}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState!=="hidden")return;if(cl){clPush();clInk();}else if(fb&&fb.user){pushNow();flushInk();}});

/* ---- Claude account backend: docs in data/users/<id>/ — "meta", "w_<ward>" (one per ward, < 256 KiB each), "ink_<hash>" ---- */
async function initClaude(){
  try{
    const [db,user]=await Promise.all([window.claude.use("db"),window.claude.use("user")]);
    if(!db||!user)return;const uid=await user.id();if(!uid)return;
    cl={db,col:"data/users/"+uid};sync="saving";paintAcct();
    await clPull();sync="cloud";
  }catch(e){console.warn("claude sync",e);if(cl)sync="error";}
  paintAcct();if(view==="svc"||view==="sess")rQuiz();else route();
}
async function clPull(){
  const snap=await cl.db.collection(cl.col).limit(1000).get();
  const r={w:{},t:0},rts={};let old=null;
  snap.docs.forEach(d=>{const id=d.id,x=d.data()||{};try{
    if(id==="meta"){const m=JSON.parse(x.d||"{}");r.phase=m.phase;r.noteMode=m.noteMode;if(m.qp)r.qp=m.qp;r.t=Math.max(r.t,x.t||0);}
    else if(id==="progress"&&Array.isArray(x.a))old=x;   /* progress saved by the earlier single-page artifact */
    else if(id.startsWith("w_")){r.w[id.slice(2)]=JSON.parse(x.d||"{}");r.t=Math.max(r.t,x.t||0);}
    else if(id.startsWith("ink_")&&x.k){const v=JSON.parse(x.d);rts[x.k]=v.ts||0;if(!ink[x.k]||(v.ts||0)>(ink[x.k].ts||0))ink[x.k]=v;}
  }catch(e){}});
  if(old){const R=PWof(r,WL[0].id),t=old.t||1;old.a.forEach(([u,a])=>{if(typeof a==="number"&&!(R.att[1][u]&&R.att[1][u].length))R.att[1][u]=[[a,t]];});}
  mergeSt(st,r);
  try{localStorage.setItem(KEY,JSON.stringify(st));localStorage.setItem(IKEY,JSON.stringify(ink));}catch(e){}
  await clPush();
  Object.keys(ink).forEach(k=>{if((ink[k].ts||0)>(rts[k]||0))inkDirty.add(k);});
  await clInk();
}
let clBusy=false,clAgain=false;
async function clPush(){if(!cl)return;clearTimeout(pushT);if(clBusy){clAgain=true;return;}clBusy=true;sync="saving";paintSync();
  try{const t=st.t||now();
    await cl.db.doc(cl.col+"/meta").set({d:JSON.stringify({phase:st.phase,noteMode:st.noteMode||"",lastWard:st.lastWard||"",qp:st.qp||null}),t});
    for(const id in st.w)await cl.db.doc(cl.col+"/w_"+id).set({d:JSON.stringify(st.w[id]),t});
    sync="cloud";}catch(e){console.warn(e);sync="error";}
  clBusy=false;paintSync();if(clAgain){clAgain=false;clPush();}}
async function clInk(){if(!cl)return;clearTimeout(inkT);const ks=[...inkDirty];inkDirty.clear();
  for(const k of ks){try{if(ink[k])await cl.db.doc(cl.col+"/ink_"+inkId(k)).set({k,d:JSON.stringify(ink[k]),ts:ink[k].ts||now()});}catch(e){console.warn(e);inkDirty.add(k);sync="error";}}paintSync();}

let authErr="";
const UDOM="@sxmcq.example.com";   /* usernames are stored as <name>@sxmcq.example.com (reserved domain — no mail is ever delivered) */
const who=u=>{const e=(u&&u.email)||"";return e.endsWith(UDOM)?e.slice(0,-UDOM.length):(e||(u&&u.displayName)||"");};
function toEmail(x){x=String(x||"").trim();if(x.includes("@"))return x;const n=x.toLowerCase();if(!/^[a-z0-9._-]{3,30}$/.test(n))throw {code:"bad-username"};return n+UDOM;}
function errMsg(e){const c=(e&&e.code)||"";return ({"bad-username":"ชื่อผู้ใช้ใช้ได้เฉพาะ a-z, 0-9, จุด, ขีด ยาว 3–30 ตัว","auth/invalid-email":"ชื่อผู้ใช้หรืออีเมลไม่ถูกต้อง","auth/missing-password":"กรุณาใส่รหัสผ่าน","auth/weak-password":"รหัสผ่านต้องยาวอย่างน้อย 6 ตัว","auth/email-already-in-use":"ชื่อผู้ใช้/อีเมลนี้มีคนใช้แล้ว ถ้าเป็นของคุณให้กดเข้าสู่ระบบ","auth/invalid-credential":"ชื่อผู้ใช้/อีเมล หรือรหัสผ่านไม่ถูกต้อง","auth/wrong-password":"ชื่อผู้ใช้/อีเมล หรือรหัสผ่านไม่ถูกต้อง","auth/user-not-found":"ยังไม่มีบัญชีนี้ ให้กดสมัครใหม่","auth/too-many-requests":"ลองหลายครั้งเกินไป รอสักครู่แล้วลองใหม่","auth/popup-closed-by-user":"ปิดหน้าต่างก่อนเข้าสู่ระบบเสร็จ","auth/unauthorized-domain":"โดเมนนี้ยังไม่ได้รับอนุญาตใน Firebase (Authorized domains)","auth/network-request-failed":"เชื่อมต่อไม่ได้ ตรวจอินเทอร์เน็ตแล้วลองใหม่"})[c]||("เข้าสู่ระบบไม่สำเร็จ"+(c?` (${c})`:""));}
function rSignin(){
  let h=`<h1 class="h2">บัญชีของฉัน</h1>`;
  const back=()=>{const b=$("back");if(b)b.onclick=()=>go(st.lastWard&&WARDS[st.lastWard]?st.lastWard:"");};
  if(cl){h+=`<div class="card"><h3>☁️ บันทึกในบัญชี Claude แล้ว</h3><span class="rd" style="margin:0">ความคืบหน้า โน้ต และที่เขียนไว้ บันทึกในบัญชี Claude ของคุณอัตโนมัติ ไม่ต้องสมัครเพิ่ม เปิดจากเครื่องไหนก็ได้ (ต้องล็อกอิน Claude บัญชีเดียวกัน)</span></div><div class="row2"><button class="btn primary" id="back">กลับไปทำข้อสอบ</button></div>`;$("main").innerHTML=h;back();return;}
  if(HAS_CLAUDE()&&!fbOn()){h+=`<div class="card"><h3>💾 บันทึกในเบราว์เซอร์นี้</h3><span class="rd" style="margin:0">ล็อกอิน Claude แล้วเปิดหน้านี้ใหม่ ความคืบหน้าจะบันทึกในบัญชี Claude อัตโนมัติ ระหว่างนี้ย้ายเครื่องได้ด้วยปุ่ม "ส่งลิงก์ความคืบหน้า" หรือไฟล์สำรองในหน้า home</span></div><div class="row2"><button class="btn" id="back">กลับ</button></div>`;$("main").innerHTML=h;back();return;}
  if(!fbOn()){h+=`<div class="card"><h3>ระบบบัญชีกำลังจะเปิดเร็ว ๆ นี้</h3><span class="rd" style="margin:0">ตอนนี้ความคืบหน้าบันทึกในเบราว์เซอร์นี้ ถ้าจะย้ายเครื่อง ให้กด "ส่งลิงก์ความคืบหน้า" ในกระดาษคำตอบ แล้วเปิดลิงก์นั้นบนเครื่องใหม่</span></div><div class="row2"><button class="btn" id="back">กลับ</button></div>`;$("main").innerHTML=h;$("back").onclick=()=>go(st.lastWard&&WARDS[st.lastWard]?st.lastWard:"");return;}
  if(!fb){h+=fbFail?`<p class="sub">เชื่อมต่อระบบบัญชีไม่ได้ ตรวจอินเทอร์เน็ตแล้วรีเฟรชหน้า ระหว่างนี้ใช้งานได้ตามปกติ (บันทึกในเครื่อง)</p><button class="btn" id="back">กลับ</button>`:`<p class="sub">กำลังเชื่อมต่อระบบบัญชี…</p>`;$("main").innerHTML=h;const bk=$("back");if(bk)bk.onclick=()=>go(st.lastWard&&WARDS[st.lastWard]?st.lastWard:"");return;}
  if(fb.user){
    h+=`<div class="card"><h3>☁️ เข้าสู่ระบบแล้ว</h3><span class="rd">${esc(who(fb.user))}</span><span class="rd">ความคืบหน้า โน้ต และที่เขียนไว้ บันทึกในบัญชีนี้อัตโนมัติ เปิดจากเครื่องไหนก็ได้</span></div>
    <div class="stack"><button class="btn primary" id="back">กลับไปทำข้อสอบ</button><button class="btn ghost" id="out">ออกจากระบบ</button></div>`;
    $("main").innerHTML=h;$("back").onclick=()=>go(st.lastWard&&WARDS[st.lastWard]?st.lastWard:"");
    $("out").onclick=async()=>{const wipe=confirm("ออกจากระบบ\n\nกด OK = ลบความคืบหน้าออกจากเครื่องนี้ด้วย (แนะนำถ้าเป็นเครื่องคนอื่น — ข้อมูลยังอยู่ในบัญชี)\nกด Cancel = เก็บไว้ในเครื่องนี้");await pushNow();await flushInk();await fb.au.signOut(fb.auth);if(wipe){st={w:{},phase:1,t:0,migrated:1};ink={};persist();try{localStorage.setItem(IKEY,"{}");}catch(e){}}go("");};
    return;}
  h+=`<p class="sub">ไม่บังคับ — เข้าสู่ระบบเพื่อบันทึกความคืบหน้าในบัญชี แล้วใช้ได้หลายเครื่อง ความคืบหน้าที่ทำไว้ในเครื่องนี้จะรวมเข้าบัญชีให้</p>
  <button class="btn primary gbtn" id="gIn">เข้าสู่ระบบด้วย Google</button>
  <p class="hint" style="margin-top:6px">ถ้าเปิดจากในแอป LINE/IG แล้วกด Google ไม่ได้ ให้เปิดลิงก์ใน Safari/Chrome หรือใช้ชื่อผู้ใช้ด้านล่าง</p>
  <div class="or">หรือใช้ชื่อผู้ใช้ / อีเมล</div>
  <input class="field-in" id="em" type="text" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="ชื่อผู้ใช้ (a-z, 0-9) หรืออีเมล">
  <input class="field-in" id="pw" type="password" autocomplete="current-password" placeholder="รหัสผ่าน (อย่างน้อย 6 ตัว ตัวเลขล้วนก็ได้)">
  <p class="err" id="err">${esc(authErr)}</p>
  <div class="row2" style="margin-top:4px"><button class="btn primary" id="eIn">เข้าสู่ระบบ</button><button class="btn" id="eUp">สมัครใหม่</button><span class="spacer"></span><button class="linkbtn" id="eReset">ลืมรหัสผ่าน</button></div>
  <div class="row2"><button class="btn ghost" id="skip">ใช้งานโดยไม่เข้าสู่ระบบ</button></div>`;
  $("main").innerHTML=h;
  const A=fb.au,err=m=>{authErr=m;$("err").textContent=m;};
  const em=()=>toEmail($("em").value),pw=()=>$("pw").value;
  $("gIn").onclick=async()=>{err("");const p=new A.GoogleAuthProvider();try{await A.signInWithPopup(fb.auth,p);}catch(e){if(["auth/popup-blocked","auth/operation-not-supported-in-this-environment","auth/cancelled-popup-request"].includes(e.code)){try{await A.signInWithRedirect(fb.auth,p);}catch(e2){err(errMsg(e2));}}else err(errMsg(e));}};
  $("eIn").onclick=async()=>{err("");try{await A.signInWithEmailAndPassword(fb.auth,em(),pw());}catch(e){err(errMsg(e));}};
  $("eUp").onclick=async()=>{err("");try{await A.createUserWithEmailAndPassword(fb.auth,em(),pw());}catch(e){err(errMsg(e));}};
  $("eReset").onclick=async()=>{const v=$("em").value.trim();if(!v.includes("@")){err("รีเซ็ตรหัสได้เฉพาะบัญชีที่สมัครด้วยอีเมล — ใส่อีเมลแล้วกดอีกครั้ง");return;}try{await A.sendPasswordResetEmail(fb.auth,em());err("ส่งลิงก์ตั้งรหัสผ่านใหม่ไปที่อีเมลแล้ว");}catch(e){err(errMsg(e));}};
  $("skip").onclick=()=>go(st.lastWard&&WARDS[st.lastWard]?st.lastWard:"");
}

/* ---------------- start ---------------- */
const remember=()=>{if(ward){st.lastWard=ward;persist();}};
window.addEventListener("hashchange",remember);
checkHashImport();
route();
if(HAS_CLAUDE())initClaude();else initFB();
})();

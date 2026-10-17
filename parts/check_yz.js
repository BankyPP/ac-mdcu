// node parts/check_yz.js parts/obyz_pN.js <ch,ch,...>  → checks a YUZU part (Y({...}) entries) against /tmp/claude-0/yuzu/qlist.json
const fs=require("fs");const f=process.argv[2],CHS=(process.argv[3]||"").split(",").filter(Boolean).map(Number);
const LT="ABCDE";const QL=JSON.parse(fs.readFileSync("/tmp/claude-0/yuzu/qlist.json","utf8"));
const TP=new Set(["Antenatal care & prenatal diagnosis","Normal & abnormal labor","Preterm labor & PROM","Postterm & induction of labor","Fetal surveillance & FGR","Anemia & thalassemia in pregnancy","Puerperium & postpartum hemorrhage","Antepartum hemorrhage","Hypertensive disorders in pregnancy","Medical diseases in pregnancy","Multifetal gestation & amniotic fluid","Infections in pregnancy","Early pregnancy loss & ectopic pregnancy","Gestational trophoblastic disease","Gynecologic anatomy","Puberty, amenorrhea & menopause","Dysmenorrhea, endometriosis & pelvic pain","Infertility","Contraception & abortion","Sexual assault & sexual health","Vaginitis, STI & PID","Pelvic organ prolapse & incontinence","Ovarian & adnexal mass","Cervical neoplasia & screening","Uterine & endometrial disease","Vulvar & vaginal disease","Neonate & lactation","Ethics, epidemiology & others"]);
const TG=new Set(["ANC","Prenatal genetics","Labor","Operative delivery","Preterm & PROM","Induction of labor","Fetal surveillance","Anemia & thalassemia","Puerperium","PPH","APH","Hypertension in pregnancy","Medical disease in pregnancy","Multifetal","Amniotic fluid","Infection in pregnancy","Early pregnancy","GTD","Anatomy","Reproductive endocrinology","Menopause","Pelvic pain & endometriosis","Infertility","Contraception","Abortion","Sexual assault","Sexual health","Vaginitis & STI","PID","Pelvic floor","Ovary","Cervix","Uterus & endometrium","Vulva & vagina","Neonate","Lactation","Ethics & epidemiology","Onco"]);
const Y=o=>o;let QB;try{QB=eval("["+fs.readFileSync(f,"utf8")+"]");}catch(e){console.log("SYNTAX ERROR:",e.message);process.exit(1);}
const strip=s=>String(s).replace(/<[^>]+>/g,"");let bad=0,warn=0;const seen={};const want=QL.filter(q=>CHS.includes(q.ch)&&!q.gen).map(q=>q.orig);const known=new Set(QL.map(q=>q.orig));
QB.forEach(q=>{const e=[],w=[];["orig","stem","opts","key","interp","why","wrong","trap","summary","guide","variants","notes","tp","tg"].forEach(k=>{if(q[k]===undefined||q[k]==="")e.push("missing "+k);});
 if(!known.has(q.orig))e.push("orig not in qlist");if(seen[q.orig])e.push("duplicate orig");seen[q.orig]=1;
 if(!Array.isArray(q.opts)||q.opts.length!==5)e.push("opts!=5");if(!(q.ans>=0&&q.ans<5))e.push("ans");
 if(!Array.isArray(q.wrong)||q.wrong.length!==4)e.push("wrong must be array of 4");
 if(q.tp&&!TP.has(q.tp))e.push("tp not in list: "+q.tp);(q.tg||[]).forEach(t=>{if(!TG.has(t))e.push("tg not in list: "+t);});if(q.tg&&(q.tg.length<1||q.tg.length>4))e.push("tg count");
 if(!/ver\.1/.test(q.key||"")||!/ver\.2/.test(q.key||""))e.push("key must state ver.1 and ver.2");
 if(!/ver\.1/.test(q.notes||"")||!/ver\.2/.test(q.notes||""))e.push("notes must cover ver.1 and ver.2");
 if(Array.isArray(q.summary)&&q.summary.length<4)e.push("summary < 4 bullets");
 if(Array.isArray(q.summary)&&/^\s*(ดู|ไปดู)ข้อ/.test(strip(q.summary[0])))e.push("summary starts with ดูข้อ");
 if(/[`]/.test(JSON.stringify(q)))e.push("backtick");
 if(q.kimg||q.img||q.set||q.ro||q.page)w.push("kimg/img/set/ro/page are added by the assembler — remove");
 const L=JSON.stringify([q.interp,q.why,q.wrong,q.trap,q.summary,q.notes]).length;if(L<2500)w.push("explanation looks short ("+L+" chars)");
 if(e.length){bad++;console.log("BAD",q.orig,"→",e.join("; "));}if(w.length){warn++;console.log("warn",q.orig,"→",w.join("; "));}});
const miss=want.filter(o=>!seen[o]);if(CHS.length&&miss.length){bad++;console.log("MISSING origs:",miss.join(", "));}
console.log("questions",QB.length,"bad",bad,"warn",warn);

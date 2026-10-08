// shared loader: evaluates core.js + data/data_b*.js (+fixes.js) in creation order → globalThis.QB (rid = index+1)
const fs=require("fs"),path=require("path");
module.exports=function(){
  const R=path.join(__dirname,"..");
  const files=fs.readdirSync(path.join(R,"data")).filter(f=>/^data_b\d+\.js$/.test(f)).sort((a,b)=>parseInt(a.slice(6))-parseInt(b.slice(6)));
  let src=fs.readFileSync(path.join(R,"core.js"),"utf8").replace("const IMGS","globalThis.IMGS").replace("const QB","globalThis.QB");
  for(const f of files) src+="\n"+fs.readFileSync(path.join(R,"data",f),"utf8");
  if(fs.existsSync(path.join(R,"fixes.js"))) src+="\n"+fs.readFileSync(path.join(R,"fixes.js"),"utf8");
  (0,eval)(src);
  const imgs=new Set(fs.existsSync(path.join(R,"img"))?fs.readdirSync(path.join(R,"img")).map(f=>f.replace(/\.(jpg|png)$/,"")):[]);
  return {QB:globalThis.QB,imgs,files};
};

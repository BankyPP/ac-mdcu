// shared loader: evaluates core.js + <DIR>/data_b*.js (+fixes.js) in creation order → globalThis.QB (rid = index+1)
// DIR = the ward's data folder (env DIR, default "data"), e.g.  DIR=data_w2 node tools/validate.js
const fs=require("fs"),path=require("path");
module.exports=function(){
  const R=path.join(__dirname,".."),D=process.env.DIR||"data";
  const files=fs.readdirSync(path.join(R,D)).filter(f=>/^data_b\d+\.js$/.test(f)).sort((a,b)=>parseInt(a.slice(6))-parseInt(b.slice(6)));
  let src=fs.readFileSync(path.join(R,"core.js"),"utf8").replace("const IMGS","globalThis.IMGS").replace("const QB","globalThis.QB");
  for(const f of files) src+="\n"+fs.readFileSync(path.join(R,D,f),"utf8");
  const FX=D==="data"?path.join(R,"fixes.js"):path.join(R,D,"fixes.js");
  if(fs.existsSync(FX)) src+="\n"+fs.readFileSync(FX,"utf8");
  (0,eval)(src);
  const imgs=new Set(fs.existsSync(path.join(R,"img"))?fs.readdirSync(path.join(R,"img")).map(f=>f.replace(/\.(jpg|png)$/,"")):[]);
  return {QB:globalThis.QB,imgs,files};
};

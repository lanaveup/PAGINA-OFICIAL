export default async function handler(req,res){
  if(req.method!=='POST')return res.status(405).json({error:'Método no permitido'});
  const {name,email,organization,role='',interest,message,consent}=req.body||{};
  if(!name||!email||!organization||!interest||!message||consent!=='on')return res.status(400).json({error:'Completa todos los campos obligatorios.'});
  if(!process.env.GOOGLE_APPS_SCRIPT_URL)return res.status(500).json({error:'Falta configurar Google Apps Script en Vercel.'});
  try{const response=await fetch(process.env.GOOGLE_APPS_SCRIPT_URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({name,email,organization,role,interest,message})});const result=await response.json();if(!result.ok)throw new Error(result.error||'Error en Google Sheets');return res.status(200).json({ok:true});}catch(error){return res.status(500).json({error:'No pudimos guardar tu respuesta.'});}
}

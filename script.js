window.addEventListener('load',()=>setTimeout(()=>document.getElementById('splash')?.classList.add('hide'),1300));
window.addEventListener('scroll',()=>document.getElementById('header')?.classList.toggle('scrolled',window.scrollY>28));
const toggle=document.getElementById('menuToggle'),menu=document.getElementById('menu');
toggle?.addEventListener('click',()=>menu.classList.toggle('open'));
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('ano').textContent=new Date().getFullYear();

const LEADS_KEY='3l_crm_leads_v1';
function getLeads(){try{return JSON.parse(localStorage.getItem(LEADS_KEY)||'[]')}catch{return []}}
function saveLead(lead){const leads=getLeads();leads.unshift(lead);localStorage.setItem(LEADS_KEY,JSON.stringify(leads));}
function cleanPhone(value){return value.replace(/\D/g,'')}

document.getElementById('formSimulacao')?.addEventListener('submit',e=>{
  e.preventDefault();
  const feedback=document.getElementById('formFeedback');
  const lead={
    id:crypto.randomUUID?.()||String(Date.now()),
    nome:document.getElementById('nome').value.trim(),
    telefone:document.getElementById('telefone').value.trim(),
    email:document.getElementById('email').value.trim(),
    cidade:document.getElementById('cidade').value.trim(),
    valor:document.getElementById('valor').value.trim(),
    parcela:document.getElementById('parcela').value.trim(),
    tipo:document.getElementById('tipo').value,
    observacoes:document.getElementById('observacoes').value.trim(),
    status:'Novo lead',
    origem:'Site',
    proximoContato:'',
    notas:[],
    criadoEm:new Date().toISOString(),
    atualizadoEm:new Date().toISOString()
  };
  saveLead(lead);
  feedback.textContent='Solicitação registrada. Abrindo o WhatsApp…';
  const msg=[
    'Olá! Quero receber uma simulação da 3L Investimentos.','',
    `Nome: ${lead.nome}`,`WhatsApp: ${lead.telefone}`,
    `E-mail: ${lead.email||'Não informado'}`,`Cidade: ${lead.cidade||'Não informada'}`,
    `Valor desejado: ${lead.valor}`,`Parcela ideal: ${lead.parcela||'Não informada'}`,
    `Tipo de consórcio: ${lead.tipo}`,`Objetivo: ${lead.observacoes||'Não informado'}`
  ].join('\n');
  setTimeout(()=>window.open(`https://wa.me/5547997058729?text=${encodeURIComponent(msg)}`,'_blank','noopener'),250);
});

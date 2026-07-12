const intro=document.getElementById('intro');
window.addEventListener('load',()=>setTimeout(()=>intro?.classList.add('hide'),1250));

const menuToggle=document.getElementById('menuToggle');
const menu=document.getElementById('menu');
menuToggle?.addEventListener('click',()=>{
  const aberto=menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(aberto));
});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

const tipo=document.getElementById('tipo');
document.querySelectorAll('.objetivo').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.objetivo').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
    btn.classList.add('active');btn.setAttribute('aria-pressed','true');
    tipo.value=btn.dataset.objetivo;
    document.getElementById('simulacao').scrollIntoView({behavior:'smooth'}); setTimeout(()=>document.getElementById('nome')?.focus(),650);
  });
});

document.getElementById('formSimulacao')?.addEventListener('submit',e=>{
  e.preventDefault();
  const nome=document.getElementById('nome').value.trim();
  const telefone=document.getElementById('telefone').value.trim();
  const objetivo=tipo.value;
  const valor=document.getElementById('valor').value.trim();
  const prazo=document.getElementById('prazo').value.trim()||'Não informado';
  const lance=document.getElementById('lance').value.trim()||'Não informado';
  const msg=`Olá Luiz! Acessei o site da 3L Investimentos e gostaria de uma consultoria.\n\nNome: ${nome}\nWhatsApp: ${telefone}\nObjetivo: ${objetivo}\nValor desejado: ${valor}\nPrazo: ${prazo}\nLance disponível: ${lance}`;
  window.open(`https://wa.me/5547997058729?text=${encodeURIComponent(msg)}`,'_blank','noopener');
});

document.getElementById('ano').textContent=new Date().getFullYear();

const topo=document.querySelector('.topo');
window.addEventListener('scroll',()=>{
  topo?.classList.toggle('scrolled',window.scrollY>24);
});

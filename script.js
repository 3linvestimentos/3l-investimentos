window.addEventListener('load',()=>setTimeout(()=>document.getElementById('splash')?.classList.add('hide'),1300));
window.addEventListener('scroll',()=>document.getElementById('header')?.classList.toggle('scrolled',window.scrollY>28));
const toggle=document.getElementById('menuToggle'),menu=document.getElementById('menu');
toggle?.addEventListener('click',()=>menu.classList.toggle('open'));
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('ano').textContent=new Date().getFullYear();
document.getElementById('formSimulacao')?.addEventListener('submit',e=>{
  e.preventDefault();
  const msg=[
    'Olá! Quero receber uma simulação da 3L Investimentos.',
    '',
    `Nome: ${document.getElementById('nome').value.trim()}`,
    `WhatsApp: ${document.getElementById('telefone').value.trim()}`,
    `E-mail: ${document.getElementById('email').value.trim()||'Não informado'}`,
    `Valor desejado: ${document.getElementById('valor').value.trim()}`,
    `Tipo de consórcio: ${document.getElementById('tipo').value}`
  ].join('\n');
  window.open(`https://wa.me/5547997058729?text=${encodeURIComponent(msg)}`,'_blank','noopener');
});

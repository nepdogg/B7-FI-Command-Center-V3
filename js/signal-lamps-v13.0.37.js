/* V13.0.37 — real DOM lamp layer + navigation-integrated control. */
(function(){
'use strict';
const key='b7.signalLampMode',allowed=['pulse','steady','off'];
let mode='pulse';try{let x=localStorage.getItem(key);if(allowed.includes(x))mode=x;}catch(e){}
document.documentElement.setAttribute('data-b7-lamps',mode);
let busy=false;
function sync(){document.documentElement.setAttribute('data-b7-lamps',mode);let b=document.getElementById('b7-lamp-control');if(b){b.textContent='LIGHTS: '+mode.toUpperCase()+' ▾';b.setAttribute('aria-expanded',String(document.getElementById('b7-lamp-menu')?.classList.contains('open')));}document.querySelectorAll('#b7-lamp-menu [data-mode]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.mode===mode)));}
function update(){
 if(busy)return;busy=true;
 try{
  document.querySelectorAll('.b1229-tower').forEach(t=>{
   if(!t.querySelector(':scope > .b7-lamp-beam')){let light=document.createElement('span');light.className='b7-lamp-beam';light.setAttribute('aria-hidden','true');t.appendChild(light);}
  });
  const nav=document.getElementById('pageActions')||document.getElementById('mainNav');
  if(nav){
   let b=document.getElementById('b7-lamp-control');
   if(!b){b=document.createElement('button');b.id='b7-lamp-control';b.type='button';b.setAttribute('aria-haspopup','true');b.addEventListener('click',e=>{e.stopPropagation();let menu=document.getElementById('b7-lamp-menu');if(menu){menu.classList.toggle('open');sync();}});}
   if(b.parentElement!==nav)nav.appendChild(b);
   let m=document.getElementById('b7-lamp-menu');
   if(!m){m=document.createElement('div');m.id='b7-lamp-menu';m.setAttribute('role','group');m.setAttribute('aria-label','Signal tower lighting settings');[['pulse','Pulsating'],['steady','Steady'],['off','Off']].forEach(([v,label])=>{let option=document.createElement('button');option.type='button';option.dataset.mode=v;option.textContent=label;option.addEventListener('click',e=>{e.stopPropagation();mode=v;try{localStorage.setItem(key,v);}catch(err){}m.classList.remove('open');sync();});m.appendChild(option);});document.body.appendChild(m);}
   sync();
  }
 }finally{busy=false;}
}
function start(){update();let pending=false;new MutationObserver(()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;update();});}).observe(document.body,{childList:true,subtree:true});document.addEventListener('click',e=>{if(!e.target.closest('#b7-lamp-menu,#b7-lamp-control')){document.getElementById('b7-lamp-menu')?.classList.remove('open');sync();}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.getElementById('b7-lamp-menu')?.classList.remove('open');sync();}});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
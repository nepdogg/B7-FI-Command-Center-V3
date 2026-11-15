/* V13.0.38 — Advanced signal lighting. Isolated from application data. */
(()=>{'use strict';
const KEY='b7.signalLighting.v1338', oldKey='b7.signalLampMode';
const defaults={mode:'pulse',brightness:90,duration:1.5,glow:80,pattern:'smooth'};
let cfg={...defaults};try{const x=JSON.parse(localStorage.getItem(KEY)||'null');if(x&&typeof x==='object')cfg={...cfg,...x};else{const old=localStorage.getItem(oldKey);if(['pulse','steady','off'].includes(old))cfg.mode=old;}}catch(e){}
const clamp=(n,min,max)=>Math.min(max,Math.max(min,Number(n)||min));
function apply(){
 cfg.brightness=clamp(cfg.brightness,10,100);cfg.glow=clamp(cfg.glow,0,100);cfg.duration=clamp(cfg.duration,.5,3);
 if(!['pulse','steady','off'].includes(cfg.mode))cfg.mode='pulse';if(!['smooth','double'].includes(cfg.pattern))cfg.pattern='smooth';
 const el=document.documentElement;el.dataset.b7Lamps=cfg.mode;el.dataset.b7Pattern=cfg.pattern;
 el.style.setProperty('--b7-light-brightness',String(cfg.brightness/100));el.style.setProperty('--b7-light-glow',String(cfg.glow/100));el.style.setProperty('--b7-light-duration',cfg.duration+'s');
 try{localStorage.setItem(KEY,JSON.stringify(cfg));}catch(e){}
 const b=document.getElementById('b7-lamp-control');if(b)b.textContent='LIGHTS: '+cfg.mode.toUpperCase()+' ▾';
 document.querySelectorAll('#b7-lamp-menu [data-light-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lightMode===cfg.mode)));
 document.querySelectorAll('#b7-lamp-menu [data-light-pattern]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lightPattern===cfg.pattern)));
 for(const name of ['brightness','duration','glow']){const el=document.querySelector('#b7-lamp-menu [data-light-range="'+name+'"]');if(el)el.value=cfg[name];const label=document.querySelector('#b7-lamp-menu [data-light-value="'+name+'"]');if(label)label.textContent=name==='duration'?cfg[name].toFixed(1)+'s':cfg[name]+'%';}
}
function addLights(){document.querySelectorAll('.b1229-tower').forEach(t=>{
 if(!t.querySelector(':scope > .b7-lamp-beam')){let l=document.createElement('span');l.className='b7-lamp-beam';l.setAttribute('aria-hidden','true');t.appendChild(l);}
 if(!t.querySelector(':scope > .b7-lamp-darkener')){let l=document.createElement('span');l.className='b7-lamp-darkener';l.setAttribute('aria-hidden','true');t.appendChild(l);}
});}
function position(){const b=document.getElementById('b7-lamp-control'),m=document.getElementById('b7-lamp-menu');if(!b||!m||!m.classList.contains('open'))return;const r=b.getBoundingClientRect();const w=m.offsetWidth; m.style.left=Math.max(8,Math.min(innerWidth-w-8,r.right-w))+'px';m.style.top=Math.min(innerHeight-m.offsetHeight-8,r.bottom+5)+'px';}
function build(){const nav=document.getElementById('pageActions')||document.getElementById('mainNav');if(!nav)return;
 let b=document.getElementById('b7-lamp-control');if(!b){b=document.createElement('button');b.id='b7-lamp-control';b.type='button';b.setAttribute('aria-haspopup','true');b.setAttribute('aria-controls','b7-lamp-menu');b.addEventListener('click',e=>{e.stopPropagation();const m=document.getElementById('b7-lamp-menu');m.classList.toggle('open');b.setAttribute('aria-expanded',String(m.classList.contains('open')));position();});}if(b.parentElement!==nav)nav.appendChild(b);
 if(!document.getElementById('b7-lamp-menu')){
 const m=document.createElement('section');m.id='b7-lamp-menu';m.setAttribute('aria-label','Signal tower lighting settings');
 m.innerHTML=`<div class="b7-lamp-title">SIGNAL TOWER LIGHTING</div><div class="b7-lamp-modes"><button type="button" data-light-mode="pulse">PULSE</button><button type="button" data-light-mode="steady">STEADY</button><button type="button" data-light-mode="off">OFF</button></div>
 <label class="b7-lamp-label">Brightness <output data-light-value="brightness"></output></label><input aria-label="Lamp brightness" type="range" min="10" max="100" step="5" data-light-range="brightness">
 <label class="b7-lamp-label">Pulse duration <output data-light-value="duration"></output></label><input aria-label="Pulse duration" type="range" min="0.5" max="3" step="0.1" data-light-range="duration">
 <label class="b7-lamp-label">Glow intensity <output data-light-value="glow"></output></label><input aria-label="Glow intensity" type="range" min="0" max="100" step="5" data-light-range="glow">
 <div class="b7-lamp-label">Pulse pattern</div><div class="b7-lamp-modes"><button type="button" data-light-pattern="smooth">SMOOTH</button><button type="button" data-light-pattern="double">DOUBLE FLASH</button></div>
 <div class="b7-lamp-hint">Applies to all colored towers. OFF darkens the active lamp, but preserves status labels.</div>`;
 m.addEventListener('click',e=>{e.stopPropagation();const t=e.target.closest('button');if(!t)return;if(t.dataset.lightMode)cfg.mode=t.dataset.lightMode;if(t.dataset.lightPattern)cfg.pattern=t.dataset.lightPattern;apply();});
 m.addEventListener('input',e=>{const name=e.target.dataset.lightRange;if(name){cfg[name]=Number(e.target.value);apply();}});
 document.body.appendChild(m);
 }
 apply();}
function start(){build();addLights();let pending=false;new MutationObserver(()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;build();addLights();});}).observe(document.body,{childList:true,subtree:true});document.addEventListener('click',e=>{if(!e.target.closest('#b7-lamp-menu,#b7-lamp-control')){document.getElementById('b7-lamp-menu')?.classList.remove('open');document.getElementById('b7-lamp-control')?.setAttribute('aria-expanded','false');}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.getElementById('b7-lamp-menu')?.classList.remove('open');document.getElementById('b7-lamp-control')?.focus();}});window.addEventListener('resize',position);window.addEventListener('scroll',position,true);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
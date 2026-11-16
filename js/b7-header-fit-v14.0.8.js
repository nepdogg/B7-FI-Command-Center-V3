/* V14.0.8: measure actual rendered text, not estimated CSS widths. */
(function(){
'use strict';
let queued=false;
function fit(el,cssVar,min,max,available){
 if(!el || available<=0)return;
 const ctx=document.createElement('canvas').getContext('2d');
 const st=getComputedStyle(el);const label=(el.textContent||'').trim();
 let low=min,high=max;
 for(let i=0;i<18;i++){
  const mid=(low+high)/2;
  ctx.font=(st.fontStyle||'normal')+' '+(st.fontWeight||'800')+' '+mid+'px '+(st.fontFamily||'Arial');
  const width=ctx.measureText(label).width;
  if(width<=available)low=mid;else high=mid;
 }
 el.style.setProperty(cssVar,Math.max(min,low-1.5).toFixed(2)+'px');
}
function run(){queued=false;
 const header=document.querySelector('#stickyShell header.prototype-header');if(!header)return;
 for(const sel of ['.prototype-header-left > span','.prototype-header-right > .b1241-quarter-title']){
  const el=header.querySelector(sel);if(!el)continue;
  const p=el.parentElement;const st=getComputedStyle(p);
  const pad=(parseFloat(st.paddingLeft)||0)+(parseFloat(st.paddingRight)||0);
  const gap=(parseFloat(st.gap)||0)*Math.max(0,p.children.length-1);
  const other=[...p.children].filter(x=>x!==el).reduce((sum,x)=>sum+x.getBoundingClientRect().width,0);
  fit(el,'--v1408-title-size',10,42,Math.max(10,p.clientWidth-pad-gap-other-18));
 }
 const copy=header.querySelector('#headerModeCenter .kla-connection-copy');
 const box=header.querySelector('#headerModeCenter .kla-presence-box');
 if(copy&&box){
  const txt=[...copy.children].map(x=>(x.textContent||'').trim()).join(' ');
  const ctx=document.createElement('canvas').getContext('2d');
  const st=getComputedStyle(copy);let lo=8,hi=15;
  for(let i=0;i<17;i++){
   const mid=(lo+hi)/2;ctx.font='900 '+mid+'px '+(st.fontFamily||'Arial');
   if(ctx.measureText(txt).width<=box.clientWidth-16)lo=mid;else hi=mid;
  }
  copy.style.setProperty('--v1408-status-size',Math.max(8,lo-.8).toFixed(2)+'px');
 }
}
function schedule(){if(queued)return;queued=true;requestAnimationFrame(run)}
function init(){schedule();window.addEventListener('resize',schedule,{passive:true});
 if(window.ResizeObserver){const r=new ResizeObserver(schedule);document.querySelectorAll('#stickyShell header.prototype-header > section').forEach(e=>r.observe(e));}
 if(window.MutationObserver){const m=new MutationObserver(schedule);document.querySelectorAll('#stickyShell .prototype-header-left > span,#stickyShell .prototype-header-right .b1241-quarter-title,#headerModeCenter .kla-connection-copy').forEach(e=>m.observe(e,{childList:true,subtree:true,characterData:true}));}
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(schedule);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

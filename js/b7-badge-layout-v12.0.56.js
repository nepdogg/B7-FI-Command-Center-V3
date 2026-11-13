/* V12.0.56 diagnostic only: CSS owns geometry; no mutation-based inline height overrides. */
(()=>{ 'use strict';
const badgeSel='#app .c11-badges > .c11-badge';
function mark(){document.querySelectorAll(badgeSel).forEach(b=>{if(/^(SYSTEM WAFERS|COMPUTER TRACKING|COMPONENT TRACKING)/i.test((b.textContent||'').trim()))b.classList.add('b756-fullwidth')})}
function report(){mark();return [...document.querySelectorAll(badgeSel)].map(b=>({label:(b.textContent||'').trim().replace(/\s+/g,' ').slice(0,65),height:+b.getBoundingClientRect().height.toFixed(2),width:+b.getBoundingClientRect().width.toFixed(2),lines:(b.innerText||'').split('\n').length}))}
window.b756BadgeDiagnostics=report;
const app=document.getElementById('app');if(app){let scheduled=false;new MutationObserver(()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;mark()})}).observe(app,{childList:true,subtree:true});mark()}
})();

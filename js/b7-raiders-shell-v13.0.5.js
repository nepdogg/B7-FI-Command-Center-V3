/* V13.0.5 — small, idempotent shell geometry enforcer for legacy runtime overrides. */
(()=>{'use strict';
const chrome='linear-gradient(180deg, rgb(82,82,82) 0%, rgb(24,24,24) 13%, rgb(3,3,3) 55%, rgb(39,39,39) 95%, rgb(107,107,107) 100%)';
const set=(el,key,val)=>{if(el && el.style.getPropertyValue(key)!==val)el.style.setProperty(key,val,'important');};
function apply(){
 const header=document.querySelector('#stickyShell > header.prototype-header');
 if(header){set(header,'height','156px');set(header,'min-height','156px');set(header,'max-height','none');}
 document.querySelectorAll('.app-frame > footer.app-footer, .app-frame > footer.app-footer .footer-system-row, .app-frame > footer.app-footer .footer-system-cell').forEach(el=>{
  set(el,'background',chrome);set(el,'background-color','#080808');set(el,'border-color','#bcbfc3');
 });
 // Tower dimensions are now controlled by the V13.0.16 photo-grid CSS.
 // Do not apply old inline height/object-fit overrides: they caused clipping.

}
let pending=false;
function schedule(){if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;apply();});}
function start(){apply();new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();

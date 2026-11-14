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
 const tower=document.querySelector('#app .c11-tool-card .c11-photo.b1226-photo .b1226-photo-top');
 if(tower){set(tower,'grid-template-columns','clamp(135px, 27%, 170px) minmax(0px, 1fr)');}
 document.querySelectorAll('#app .c11-tool-card .c11-photo.b1226-photo .b1226-photo-tower, #app .c11-tool-card .c11-photo.b1226-photo .b1224-tower.b1229-tower').forEach(el=>{
  set(el,'height','100%');set(el,'max-height','none');set(el,'padding','0px');
 });
 document.querySelectorAll('#app .c11-tool-card .c11-photo.b1226-photo img.b1229-tower-image').forEach(el=>{
  set(el,'width','100%');set(el,'height','100%');set(el,'max-height','none');set(el,'object-fit','fill');
 });
}
let pending=false;
function schedule(){if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;apply();});}
function start(){apply();new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();

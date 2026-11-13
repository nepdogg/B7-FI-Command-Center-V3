/* V12.0.70: measure remaining viewport height after actual header/status/footer.
   Do not transform/zoom the app; preserve badge pixel geometry. */
(()=>{'use strict';let queued=false;
function fit(){queued=false;const body=document.body;if(body.classList.contains('presentation-mode'))return;
const card=document.querySelector('#app .c11-tool-card');if(!card)return;
const grid=card.querySelector('.c11-card-grid.b1226-three-column');if(!grid)return;
const narrow=window.matchMedia('(max-width:1099px)').matches;
if(narrow){grid.style.removeProperty('--b770-card-min-height');return;}
const footer=document.querySelector('.app-footer');
const footerH=footer?footer.getBoundingClientRect().height:0;
const top=grid.getBoundingClientRect().top;
const available=Math.max(0,window.innerHeight-top-footerH-8);
const cssPx=Math.round(available);
grid.style.setProperty('--b770-card-min-height',cssPx+'px');
}
function schedule(){if(queued)return;queued=true;requestAnimationFrame(fit)}
window.addEventListener('resize',schedule,{passive:true});
window.addEventListener('orientationchange',schedule,{passive:true});
document.addEventListener('DOMContentLoaded',()=>{schedule();const app=document.getElementById('app');if(app){new MutationObserver(schedule).observe(app,{childList:true,subtree:false})}});
})();

/* V12.0.57 badge geometry: same size for every badge, no internal scrolling. */
(()=>{'use strict';
 const H='64px', G='7px';
 const set=(el,key,val)=>el.style.setProperty(key,val,'important');
 function repair(){
  document.querySelectorAll('#app .c11-tool-card .c11-badge-region').forEach(region=>{
   for(const [k,v] of Object.entries({height:'auto','max-height':'none','min-height':'0',overflow:'visible',flex:'none',transform:'none'}))set(region,k,v);
   const grid=region.querySelector('.c11-badges');if(!grid)return;
   for(const [k,v] of Object.entries({display:'grid','grid-template-columns':'repeat(3,minmax(0,1fr))','grid-template-rows':'none','grid-auto-rows':H,gap:G,height:'auto','max-height':'none',overflow:'visible','align-content':'start',transform:'none'}))set(grid,k,v);
   [...grid.children].forEach(el=>{
    for(const [k,v] of Object.entries({'box-sizing':'border-box',height:H,'min-height':H,'max-height':H,flex:'none','flex-shrink':'0','align-self':'stretch',margin:'0',padding:'6px',display:'flex','flex-direction':'column','align-items':'center','justify-content':'center',overflow:'hidden',background:'#000','background-image':'none',color:'#fff',border:'1px solid #aeb4bc','font-size':'11px','line-height':'1.2',transform:'none'}))set(el,k,v);
    const label=(el.textContent||'').trim();if(el.matches('.c11-wafer-badge,.v10-wafer-badge,.equipment-badge')||/^(SYSTEM WAFERS|COMPUTER TRACKING|COMPONENT TRACKING)/i.test(label))set(el,'grid-column','1/-1');
   });
  });
  document.querySelectorAll('#app .c11-tool-card .b783-date-badge').forEach(el=>{for(const k of ['height','min-height','max-height'])set(el,k,H)});
  document.querySelectorAll('#app .c11-tool-card .c11-card-grid, #app .c11-tool-card .c11-column, #app .c11-tool-card .c11-identity-column').forEach(el=>{set(el,'height','auto');set(el,'max-height','none');set(el,'overflow','visible');set(el,'transform','none')});
 }
 let queued=false;const queue=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;repair()})};
 function init(){const app=document.querySelector('#app');if(!app)return;new MutationObserver(queue).observe(app,{childList:true,subtree:true});repair();}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
 window.b757BadgeDiagnostics=()=>[...document.querySelectorAll('#app .c11-tool-card .c11-badge-region .c11-badges > *')].map(e=>({name:(e.textContent||'').trim().slice(0,35),height:Math.round(e.getBoundingClientRect().height),cssHeight:getComputedStyle(e).height}));
})();

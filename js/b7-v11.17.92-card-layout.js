(()=>{'use strict';
let queued=false, busy=false;
function align(){
 if(busy)return;busy=true;
 try{
  document.querySelectorAll('#app .c11-badges').forEach(grid=>{
   const items=Array.from(grid.children).filter(x=>x.matches('button.c11-badge'));
   items.forEach(x=>{x.style.removeProperty('height');x.style.removeProperty('min-height')});
   const rows=new Map();
   items.forEach(x=>{
    const top=Math.round(x.getBoundingClientRect().top);
    if(!rows.has(top))rows.set(top,[]);
    rows.get(top).push(x);
   });
   for(const row of rows.values()){
    const max=Math.max(62,...row.map(x=>Math.ceil(x.scrollHeight)));
    row.forEach(x=>x.style.setProperty('min-height',max+'px','important'));
   }
  });
 }finally{busy=false}
}
function schedule(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;align()})}
document.addEventListener('DOMContentLoaded',()=>{
 const app=document.querySelector('#app');if(app)new MutationObserver(schedule).observe(app,{childList:true,subtree:true});
 window.addEventListener('resize',schedule,{passive:true});schedule();
});
})();
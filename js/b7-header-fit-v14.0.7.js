/* V14.0.7: Fit titles by actual DOM width, and status text by measured width. */
(function(){
 let pending=false;
 function fitText(el,min,max){
   if(!el||!el.parentElement)return;
   const p=el.parentElement;
   const style=getComputedStyle(p);
   const pad=(parseFloat(style.paddingLeft)||0)+(parseFloat(style.paddingRight)||0);
   const gap=(parseFloat(style.columnGap)||parseFloat(style.gap)||0)*Math.max(0,p.children.length-1);
   const other=[...p.children].filter(x=>x!==el).reduce((v,x)=>v+x.getBoundingClientRect().width,0);
   const available=Math.max(20,p.clientWidth-pad-gap-other-12);
   const cs=getComputedStyle(el);
   const canvas=fitText.canvas||(fitText.canvas=document.createElement('canvas'));
   const ctx=canvas.getContext('2d');
   let lo=min,hi=max;
   for(let i=0;i<16;i++){const mid=(lo+hi)/2;ctx.font=cs.fontWeight+' '+mid+'px '+cs.fontFamily;
     if(ctx.measureText(el.textContent.trim()).width<=available)lo=mid;else hi=mid;}
   el.style.setProperty('--v1406-header-font',Math.max(min,lo-1.4).toFixed(2)+'px');
 }
 function fit(){pending=false;
   document.querySelectorAll('#stickyShell .prototype-header-left > span,#stickyShell .prototype-header-right .b1241-quarter-title').forEach(e=>fitText(e,10,44));
   const copy=document.querySelector('#headerModeCenter .kla-connection-copy');
   if(copy){const panel=document.querySelector('#headerModeCenter');const available=panel.clientWidth-35;
     let size=12;copy.style.fontSize=size+'px';
     while(size>8&&copy.scrollWidth>available){size-=.5;copy.style.fontSize=size+'px';}
   }
 }
 function schedule(){if(pending)return;pending=true;requestAnimationFrame(fit);}
 function init(){schedule();window.addEventListener('resize',schedule,{passive:true});
   if(window.ResizeObserver){const r=new ResizeObserver(schedule);document.querySelectorAll('#stickyShell .prototype-header > section').forEach(e=>r.observe(e));}
   if(window.MutationObserver){const m=new MutationObserver(schedule);document.querySelectorAll('#stickyShell .prototype-header-left > span,#stickyShell .prototype-header-right .b1241-quarter-title,#headerModeCenter .kla-connection-copy').forEach(e=>m.observe(e,{subtree:true,childList:true,characterData:true}));}
   if(document.fonts&&document.fonts.ready)document.fonts.ready.then(schedule);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

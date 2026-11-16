/* V14.0.6: measure real text widths; maximize within panel without clipping. */
(function(){
 let scheduled=false;
 function fit(){
  scheduled=false;
  document.querySelectorAll('#stickyShell .prototype-header-left>span,#stickyShell .prototype-header-right .b1241-quarter-title').forEach(el=>{
   const parent=el.parentElement;if(!parent)return;
   const ps=getComputedStyle(parent);
   const pad=(parseFloat(ps.paddingLeft)||0)+(parseFloat(ps.paddingRight)||0);
   const other=[...parent.children].filter(n=>n!==el);
   const gap=(parseFloat(ps.columnGap)||parseFloat(ps.gap)||0)*Math.max(0,parent.children.length-1);
   const available=Math.max(30,parent.clientWidth-pad-gap-other.reduce((n,x)=>n+x.getBoundingClientRect().width,0)-7);
   const canvas=fit.canvas||(fit.canvas=document.createElement('canvas'));
   const ctx=canvas.getContext('2d');const st=getComputedStyle(el);
   const family=st.fontFamily||'Arial',weight=st.fontWeight||'900';
   let lo=9,hi=44;const label=el.textContent.trim();
   for(let i=0;i<13;i++){let mid=(lo+hi)/2;ctx.font=weight+' '+mid+'px '+family;if(ctx.measureText(label).width<=available)lo=mid;else hi=mid;}
   el.style.setProperty('--v1406-header-font',Math.max(9,lo-.6).toFixed(2)+'px');
  });
 }
 function schedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(fit)}
 function init(){schedule();window.addEventListener('resize',schedule,{passive:true});
  if(window.ResizeObserver){const r=new ResizeObserver(schedule);document.querySelectorAll('#stickyShell .prototype-header-left,#stickyShell .prototype-header-right').forEach(e=>r.observe(e));}
  if(window.MutationObserver){const m=new MutationObserver(schedule);document.querySelectorAll('#stickyShell .prototype-header-left>span,#stickyShell .prototype-header-right .b1241-quarter-title').forEach(e=>m.observe(e,{childList:true,subtree:true,characterData:true}));}
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(schedule);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

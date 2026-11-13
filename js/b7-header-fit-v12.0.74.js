/* Fit both header titles to actual available width; recompute after zoom, resize and dynamic title changes. */
(function(){
 function fit(){
  document.querySelectorAll('#stickyShell .prototype-header-left>span,#stickyShell .prototype-header-right .b1241-quarter-title').forEach(function(el){
   var parent=el.parentElement;if(!parent)return;
   var siblings=Array.from(parent.children).filter(function(x){return x!==el;});
   var cs=getComputedStyle(parent),gap=parseFloat(cs.columnGap)||10;
   var available=parent.clientWidth-siblings.reduce(function(n,x){return n+x.getBoundingClientRect().width},0)-gap*Math.max(0,parent.children.length-1)-4;
   if(available<20)return;
   var canvas=fit.canvas||(fit.canvas=document.createElement('canvas'));
   var ctx=canvas.getContext('2d');var style=getComputedStyle(el);
   var weight=style.fontWeight||'900',family=style.fontFamily||'Arial';
   var size=Math.min(30,Math.max(9,Math.round(window.innerWidth*.017)));
   while(size>9){ctx.font=weight+' '+size+'px '+family;if(ctx.measureText(el.textContent.trim()).width<=available)break;size-=.5;}
   el.style.setProperty('font-size',size+'px','important');
  });
 }
 function init(){fit();window.addEventListener('resize',fit,{passive:true});
  var shell=document.getElementById('stickyShell');if(shell&&window.ResizeObserver)new ResizeObserver(fit).observe(shell);
  var title=document.getElementById('pageTitle');if(title&&window.MutationObserver)new MutationObserver(fit).observe(title,{childList:true,characterData:true,subtree:true});
  requestAnimationFrame(fit);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

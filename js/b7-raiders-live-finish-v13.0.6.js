(()=>{'use strict';
 const chrome='linear-gradient(180deg, rgb(77,77,77) 0%, rgb(21,21,21) 20%, rgb(2,2,2) 72%, rgb(54,54,54) 100%)';
 const set=(el,key,value)=>{if(el&&el.style.getPropertyValue(key)!==value)el.style.setProperty(key,value,'important');};
 function apply(){
  document.querySelectorAll('footer.app-footer #adminButton,footer.app-footer #footerPresentationButton').forEach(el=>{
   set(el,'background',chrome);set(el,'background-color','#080808');set(el,'background-image',chrome);
   set(el,'border','1px solid #c4c4c4');set(el,'outline','0');set(el,'color','#fff');
   set(el,'box-shadow','inset 0 1px 2px #ffffff77, 0 1px 3px #000');
  });
  document.querySelectorAll('#app .c11-tool-card .c11-identity-column > .c11-reduced,#app .c11-tool-card .c11-identity-column > .c11-carry').forEach(el=>{
   set(el,'background','#050505');set(el,'background-image','none');set(el,'background-color','#050505');
   set(el,'border','1px solid #9b9b9b');set(el,'color','#fff');
  });
  /* V13.0.7: tower geometry now owned by CSS; no forced image scaling. */
 }
 let pending=false;function schedule(){if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;apply();});}
 function start(){apply();new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();

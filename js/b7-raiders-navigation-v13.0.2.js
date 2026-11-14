/* V13.0.2: nav chrome applied to actual dynamically generated buttons.
   Inline important rules beat older stylesheet specificity and inline styling.
   Observe child changes only, avoiding style-attribute feedback loops. */
(function(){
  'use strict';
  function apply(){
    const nav=document.getElementById('mainNav');if(!nav)return;
    const dark='linear-gradient(180deg,#555 0%,#171717 28%,#030303 70%,#292929 100%)';
    const light='linear-gradient(180deg,#fff 0%,#e3e3e3 40%,#aaa 100%)';
    [nav,...nav.querySelectorAll('#subnav,#pageActions,#b797CenterSlot')].forEach(el=>{
      el.style.setProperty('background','#060606','important');
      el.style.setProperty('background-image','none','important');
    });
    nav.querySelectorAll('button,select').forEach(el=>{
      const active=el.matches('.active,[aria-selected="true"],[aria-current="page"]');
      el.style.setProperty('background',active?light:dark,'important');
      el.style.setProperty('color',active?'#050505':'#fff','important');
      el.style.setProperty('border-color',active?'#fff':'#aaa','important');
    });
  }
  function init(){
    const nav=document.getElementById('mainNav');if(!nav)return;
    let pending=false;
    new MutationObserver(()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;apply()})})
      .observe(nav,{childList:true,subtree:true,attributes:true,attributeFilter:['class','aria-selected','aria-current']});
    apply();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();

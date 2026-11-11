/* Responsive navigation: all page tabs available in a compact native selector. */
(function(){'use strict';
 function setup(){
  const nav=document.getElementById('mainNav'),tabs=document.getElementById('subnav');
  if(!nav||!tabs)return;
  let picker=nav.querySelector('.b71806-page-picker');
  if(!picker){picker=document.createElement('select');picker.className='b71806-page-picker';picker.setAttribute('aria-label','Select page');nav.insertBefore(picker,tabs);
   picker.addEventListener('change',function(){const target=[...tabs.querySelectorAll(':scope > button')][Number(this.value)];if(target)target.click();});}
  function refresh(){const buttons=[...tabs.querySelectorAll(':scope > button')];const selected=buttons.findIndex(b=>b.classList.contains('active'));picker.replaceChildren(...buttons.map((b,i)=>{let o=document.createElement('option');o.value=String(i);o.textContent=b.textContent.trim().replace(/\s+/g,' ');return o;}));picker.value=String(Math.max(0,selected));picker.disabled=!buttons.length;}
  new MutationObserver(refresh).observe(tabs,{childList:true});refresh();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
})();

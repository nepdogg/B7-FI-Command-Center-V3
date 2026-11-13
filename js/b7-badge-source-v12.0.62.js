/* V12.0.62. Apply geometry to the actual rendered elements, not just assumed classes. */
(()=>{'use strict';
 const H='64px',G='7px',APP=document.getElementById('app');if(!APP)return;
 const set=(el,k,v)=>{if(el.style.getPropertyValue(k)!==v||el.style.getPropertyPriority(k)!=='important')el.style.setProperty(k,v,'important')};
 const apply=(el,obj)=>{for(const [k,v] of Object.entries(obj))set(el,k,v)};
 const badge={height:H,'min-height':H,'max-height':H,'box-sizing':'border-box','flex-shrink':'0',margin:'0',padding:'6px 8px',display:'flex','flex-direction':'column','align-items':'center','justify-content':'center',gap:'2px','align-self':'stretch',overflow:'hidden','white-space':'normal','text-align':'center',background:'#000','background-image':'none',color:'#fff',border:'1px solid #aeb4bc','border-radius':'6px',transform:'none'};
 const grid={display:'grid','grid-auto-rows':H,'grid-template-rows':'none',gap:G,height:'auto','max-height':'none',overflow:'visible','align-content':'start'};
 function fix(){
  APP.querySelectorAll('.c11-tool-card').forEach(card=>{
   card.querySelectorAll('.c11-card-grid,.c11-column,.c11-identity-column,.c11-badge-region').forEach(el=>apply(el,{height:'auto','max-height':'none',overflow:'visible',transform:'none'}));
  });
  APP.querySelectorAll('.c11-identity-stack,.b783-date-row,.c11-badges,.fleet-badges,.b7-editor-badge-grid,.v1222-badge-grid').forEach(el=>{
   apply(el,{...grid,'grid-template-columns':el.matches('.c11-identity-stack,.b783-date-row')?'repeat(2,minmax(0,1fr))':'repeat(3,minmax(0,1fr))'});
   [...el.children].forEach(child=>{apply(child,badge);if(child.matches('.c11-wafer-badge,.v10-wafer-badge,.equipment-badge'))set(child,'grid-column','1/-1')});
  });
 }
 let queued=false;function schedule(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;fix()})}
 new MutationObserver(schedule).observe(APP,{childList:true,subtree:true});fix();
 window.b762BadgeDiagnostics=()=>[...APP.querySelectorAll('.c11-tool-card .c11-identity-stack>*,.c11-tool-card .b783-date-row>*,.c11-tool-card .c11-badges>*')].map(el=>({name:el.textContent.trim().replace(/\s+/g,' ').slice(0,40),height:+el.getBoundingClientRect().height.toFixed(2),cssHeight:getComputedStyle(el).height}));
})();

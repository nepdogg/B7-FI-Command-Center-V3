/* Explicit, opt-in diagnostics: ?b7diagnostics=1; does not access or modify tool data. */
(function(){
  const params=new URLSearchParams(location.search);
  if(params.get('b7diagnostics')!=='1')return;
  const panel=document.createElement('aside');panel.id='b7-layout-diagnostics';
  panel.style.cssText='position:fixed;right:12px;bottom:12px;z-index:2147483646;background:#081e2a;color:#fff;border:2px solid #20c4e9;border-radius:8px;padding:12px;font:12px/1.5 Consolas,monospace;max-width:420px;box-shadow:0 5px 20px #0009;';
  function refresh(){
    const sh=document.querySelector('#stickyShell');const card=document.querySelector('.c11-card-grid');const badge=document.querySelector('.c11-badge');
    const styles=[...document.styleSheets].filter(s=>s.href).map(s=>{try{return new URL(s.href).pathname.split('/').pop()}catch{return s.href}});
    const rect=el=>el?Math.round(el.getBoundingClientRect().top)+' / '+Math.round(el.getBoundingClientRect().height):'not visible';
    panel.innerHTML='<b>B7 LAYOUT DIAGNOSTICS · V11.17.51</b><hr style="border-color:#395566">'+
      'Viewport: '+innerWidth+' × '+innerHeight+'<br>Device pixel ratio: '+devicePixelRatio+'<br>'+ 
      'Header top / height: '+rect(sh)+'<br>Header position: '+(sh?getComputedStyle(sh).position:'none')+'<br>'+ 
      'Tool card top / height: '+rect(card)+'<br>Badge height: '+(badge?Math.round(badge.getBoundingClientRect().height)+'px':'not visible')+'<br>'+ 
      'Loaded styles: '+styles.length+'<br>Layout contract: '+(styles.includes('b7-v11.17.51-layout-contract.css')?'LOADED':'MISSING')+'<br>'+ 
      '<button type="button" id="b7-diag-copy" style="margin-top:7px;background:#12799d;color:white;border:1px solid #8bdbea;padding:5px">Copy diagnostics</button> <button type="button" id="b7-diag-close" style="background:#444;color:white;border:1px solid #aaa;padding:5px">Close</button>';
    panel.querySelector('#b7-diag-close').onclick=()=>panel.remove();
    panel.querySelector('#b7-diag-copy').onclick=()=>navigator.clipboard?.writeText(panel.innerText+'\nStyles:\n'+styles.join('\n'));
  }
  document.addEventListener('DOMContentLoaded',()=>{document.body.appendChild(panel);refresh();addEventListener('resize',refresh);});
})();

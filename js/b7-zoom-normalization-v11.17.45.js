/* A layout-only browser-zoom recovery. Does not read or modify tool data. */
(function(){
  var root=document.documentElement;
  function update(){
    // Chrome/Edge DPR follows page zoom. On a typical 100%-scale workstation,
    // DPR 0.5 means 50% browser zoom. Keep the normal browser behavior at >=100%.
    var dpr=Number(window.devicePixelRatio)||1;
    var factor=Math.min(4,Math.max(1,1/dpr));
    root.style.setProperty('--b7-zoom-recovery',String(Math.round(factor*1000)/1000));
    root.style.setProperty('--b7-zoom-inverse',String(Math.round(1000/factor)/1000));
    root.dataset.b7ZoomRecovery=String(Math.round(factor*100)/100);
  }
  update();
  window.addEventListener('resize',update,{passive:true});
  window.addEventListener('pageshow',update);
})();

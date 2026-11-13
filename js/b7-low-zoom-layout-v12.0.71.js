/* V12.0.71. Opt-in to automatic low-zoom compensation only when the
   viewport is larger than the physical screen's CSS reference width.
   Uses no transform, leaving sticky positioning and pointer coordinates intact.
   Original badge styles are not changed. */
(function(){
  'use strict';
  var frame=document.querySelector('.app-frame');
  if(!frame)return;
  var raf=0;
  function update(){
    raf=0;
    var body=document.body;
    if(body.classList.contains('presentation-mode')||
       body.classList.contains('screenshot-mode')){
      frame.style.removeProperty('zoom');
      frame.style.removeProperty('width');
      return;
    }
    var sw=window.screen && window.screen.availWidth;
    var vw=window.innerWidth;
    if(!sw||!vw)return;
    // Large viewport relative to display is the browser-zoom symptom.
    // Keep normal-size windows unmodified.
    var ratio=vw/sw;
    var compensation=ratio>1.35?Math.min(4,Math.round(ratio*100)/100):1;
    frame.style.zoom=String(compensation);
    frame.style.width=(100/compensation)+'%';
    frame.style.minHeight=(100/compensation)+'vh';
    document.documentElement.style.setProperty('--b7-zoom-compensation',String(compensation));
  }
  function schedule(){if(!raf)raf=requestAnimationFrame(update)}
  window.addEventListener('resize',schedule,{passive:true});
  window.addEventListener('orientationchange',schedule,{passive:true});
  window.addEventListener('load',schedule);
  schedule();
})();
/* V11.17.2: Keep body content clear of the single fixed global header.
   ResizeObserver responds to page changes, dynamic status messages and browser zoom. */
(function(){
  const shell=document.getElementById('stickyShell');
  if(!shell)return;
  function syncShellHeight(){
    const h=Math.ceil(shell.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--b7-fixed-shell-height',h+'px');
  }
  if(typeof ResizeObserver==='function')new ResizeObserver(syncShellHeight).observe(shell);
  window.addEventListener('resize',syncShellHeight,{passive:true});
  document.addEventListener('DOMContentLoaded',syncShellHeight);
  syncShellHeight();
})();

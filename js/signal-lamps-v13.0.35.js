/* V13.0.35: user-selectable persistent signal lamp mode. No Microsoft List writes. */
(function(){
  const key='b7.signalLampMode';
  const allowed=['pulse','steady','off'];
  let mode='pulse';
  try { const saved=localStorage.getItem(key); if(allowed.includes(saved))mode=saved; } catch(e){}
  document.documentElement.dataset.b7Lamps=mode;
  function setup(){
    if(document.getElementById('b7-lamp-control'))return;
    const button=document.createElement('button');button.id='b7-lamp-control';button.type='button';
    const menu=document.createElement('div');menu.id='b7-lamp-menu';menu.setAttribute('role','group');menu.setAttribute('aria-label','Signal tower lighting settings');
    const title=document.createElement('strong');title.textContent='SIGNAL TOWER LIGHTS';menu.append(title);
    function sync(){button.textContent='LIGHTS: '+mode.toUpperCase();button.setAttribute('aria-expanded',String(menu.classList.contains('open')));menu.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===mode)));}
    [['pulse','Pulsating lights'],['steady','Steady lights'],['off','No added light animation']].forEach(([value,label])=>{
      const b=document.createElement('button');b.type='button';b.dataset.mode=value;b.textContent=label;
      b.addEventListener('click',()=>{mode=value;document.documentElement.dataset.b7Lamps=mode;try{localStorage.setItem(key,mode)}catch(e){}menu.classList.remove('open');sync();});menu.append(b);
    });
    button.addEventListener('click',()=>{menu.classList.toggle('open');sync()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.classList.remove('open');sync()}});
    document.addEventListener('click',e=>{if(!button.contains(e.target)&&!menu.contains(e.target)){menu.classList.remove('open');sync()}});
    document.body.append(menu,button);sync();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();

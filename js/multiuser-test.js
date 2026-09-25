(()=>{'use strict';
const CFG={
  tenantId:'cf75356e-fe8e-498d-be4b-37ec8fbf04cf',
  clientId:'af82f005-0e21-4926-8d5d-8b6f872ab8f4',
  redirectUri:'http://localhost:5500/redirect.html',
  graph:'https://graph.microsoft.com/v1.0',
  siteHost:'kla-my.sharepoint.com',
  sitePath:'/personal/neptune_garcia_kla_com',
  listName:'B7 FI Command Center',
  scopes:['User.Read','Sites.ReadWrite.All']
};
let msalApp=null,account=null,site=null,list=null,columns=[],items=[],createdTestId=null;
const checks={signin:false,connect:false,read:false,write:false,readback:false,create:false,delete:false};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const status=(msg,kind='info')=>{let e=document.querySelector('#mu-status');if(e){e.className='mu-status '+kind;e.textContent=msg}};
function inject(){
 const style=document.createElement('style');style.textContent=`
 #mu-launch{position:static;z-index:auto;border:1px solid #54d8ff;background:#0b3150;color:#fff;font-weight:900;padding:6px 10px;border-radius:4px;cursor:pointer;box-shadow:none;white-space:nowrap;margin-right:12px}
 #mu-panel{position:fixed;inset:4vh 4vw;z-index:2147483641;background:#08131f;color:#fff;border:2px solid #176fa8;border-radius:10px;box-shadow:0 20px 80px #000b;display:none;overflow:auto;padding:22px;font-family:Arial,sans-serif}
 body.presentation-mode #mu-launch,body.presentation-mode #mu-panel,body.presentation-mode #mu-panel *{pointer-events:auto!important}\n#mu-panel.open{display:block}.mu-head{display:flex;align-items:center;justify-content:space-between;gap:15px;border-bottom:2px solid #176fa8;padding-bottom:12px}.mu-head h2{margin:0}.mu-close{font-size:28px;background:none;border:0;color:#fff;cursor:pointer}.mu-status{margin:14px 0;padding:12px;border-radius:6px;background:#16283a}.mu-status.ok{background:#123d2b}.mu-status.err{background:#511c25}.mu-actions{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}.mu-btn{background:#176fa8;color:#fff;border:1px solid #54d8ff;padding:9px 12px;border-radius:5px;font-weight:800;cursor:pointer}.mu-btn:disabled{opacity:.4;cursor:not-allowed}.mu-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px;margin:12px 0}.mu-meta div{background:#101f2e;padding:9px;border-radius:5px}.mu-table{width:100%;border-collapse:collapse;margin-top:12px;font-size:13px}.mu-table th,.mu-table td{border:1px solid #2d4961;padding:7px;vertical-align:top}.mu-table th{background:#12314b;position:sticky;top:0}.mu-table input{width:100%;box-sizing:border-box;background:#0d1c29;color:#fff;border:1px solid #45647c;padding:6px}.mu-pass{color:#29e58c}.mu-warn{color:#ffd84a}.mu-note{font-size:12px;color:#b9ccda;line-height:1.4}.mu-user{font-weight:800;color:#54d8ff}.mu-checks{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:7px;margin:12px 0}.mu-check{background:#101f2e;border:1px solid #2d4961;border-radius:5px;padding:8px;font-weight:800}.mu-check.pass{border-color:#29e58c;color:#29e58c}`;document.head.appendChild(style);
 const b=document.createElement('button');b.id='mu-launch';b.textContent='MULTI-USER DIAGNOSTICS';b.className='btn';b.hidden=true;document.body.appendChild(b);
 // V6.6.46: keep the internal diagnostics launcher hidden. The single visible Administration Center button opens it through data-shared-action=diagnostics.
 b.hidden=true;
 const p=document.createElement('section');p.id='mu-panel';p.innerHTML=`<div class="mu-head"><div><h2>B7 FI COMMAND CENTER — MULTI-USER CONNECTION TEST</h2><div class="mu-note">V7.6.8 · ONE TOOL = ONE ROW MULTI-USER TEST · Microsoft Entra delegated authentication · Microsoft Graph · Microsoft List</div></div><button class="mu-close" id="mu-close">×</button></div><div id="mu-status" class="mu-status">Ready. Start the Command Center at http://localhost:5500, then sign in.</div><div class="mu-meta"><div><b>USER</b><br><span id="mu-user">Not signed in</span></div><div><b>SITE</b><br>${esc(CFG.siteHost+CFG.sitePath)}</div><div><b>LIST</b><br>${esc(CFG.listName)}</div><div><b>MODE</b><br>Shared List Test</div></div><div class="mu-checks" id="mu-checks"></div><div class="mu-actions"><button class="mu-btn" id="mu-signin">1 · SIGN IN WITH KLA</button><button class="mu-btn" id="mu-connect" disabled>2 · CONNECT + READ</button><button class="mu-btn" id="mu-refresh" disabled>3 · REFRESH / FIND EXTERNAL ROW</button><button class="mu-btn" id="mu-create" disabled>4 · CREATE TEMP TEST ROW</button><button class="mu-btn" id="mu-delete" disabled>5 · DELETE TEMP TEST ROW</button><button class="mu-btn" id="mu-signout" disabled>SIGN OUT</button></div><p class="mu-note"><b>Purpose:</b> This build preserves the current Command Center production data model while the shared-list connection is being validated. The panel below tests real multi-user read/write against the shared Microsoft List. Edit a test-row value and save it, then refresh from a second computer/user to verify shared updates. Saves use a change check to avoid silently overwriting a row changed by another user.</p><div id="mu-grid"></div>`;document.body.appendChild(p);
 b.onclick=()=>p.classList.add('open');p.querySelector('#mu-close').onclick=()=>p.classList.remove('open');
 p.querySelector('#mu-signin').onclick=signIn;p.querySelector('#mu-connect').onclick=connect;p.querySelector('#mu-refresh').onclick=loadItems;p.querySelector('#mu-create').onclick=createTempRow;p.querySelector('#mu-delete').onclick=deleteTempRow;p.querySelector('#mu-signout').onclick=signOut;renderChecks();
}
async function initMsal(){if(msalApp)return msalApp;if(!window.msal)throw new Error('Microsoft authentication library did not load. Check network access to cdn.jsdelivr.net.');msalApp=new msal.PublicClientApplication({auth:{clientId:CFG.clientId,authority:`https://login.microsoftonline.com/${CFG.tenantId}`,redirectUri:CFG.redirectUri},cache:{cacheLocation:'localStorage',storeAuthStateInCookie:false}});await msalApp.initialize();account=msalApp.getActiveAccount?.()||msalApp.getAllAccounts()[0]||null;if(account){msalApp.setActiveAccount?.(account);setSignedIn();}return msalApp}
function setSignedIn(){document.querySelector('#mu-user').textContent=account?`${account.name||account.username} (${account.username})`:'Not signed in';document.querySelector('#mu-connect').disabled=!account;document.querySelector('#mu-refresh').disabled=!list;document.querySelector('#mu-create').disabled=!list;document.querySelector('#mu-delete').disabled=!createdTestId;document.querySelector('#mu-signout').disabled=!account}
function renderChecks(){let e=document.querySelector('#mu-checks');if(!e)return;let names={signin:'SIGN IN',connect:'LIST FOUND',read:'READ',write:'UPDATE',readback:'READ-BACK',create:'CREATE',delete:'CLEANUP'};e.innerHTML=Object.entries(names).map(([k,n])=>`<div class="mu-check ${checks[k]?'pass':''}">${checks[k]?'PASS':'WAIT'} · ${n}</div>`).join('')}
function pass(k){checks[k]=true;renderChecks()}
async function signIn(){try{await initMsal();let r=await msalApp.loginPopup({scopes:CFG.scopes,redirectUri:CFG.redirectUri});account=r.account;msalApp.setActiveAccount?.(account);setSignedIn();pass('signin');status('PASS — KLA Microsoft sign-in succeeded.','ok')}catch(e){status('SIGN-IN FAILED — '+friendly(e),'err')}}
async function signOut(){try{if(msalApp&&account)await msalApp.logoutPopup({account,postLogoutRedirectUri:'http://localhost:5500/'});account=null;site=list=null;items=[];setSignedIn();document.querySelector('#mu-grid').innerHTML='';status('Signed out.')}catch(e){status('SIGN-OUT FAILED — '+friendly(e),'err')}}
async function token(){await initMsal();if(!account)throw new Error('Sign in first.');try{return (await msalApp.acquireTokenSilent({account,scopes:CFG.scopes})).accessToken}catch(e){return (await msalApp.acquireTokenPopup({account,scopes:CFG.scopes})).accessToken}}
async function graph(path,opt={}){let t=await token();let r=await fetch(CFG.graph+path,{...opt,headers:{Authorization:'Bearer '+t,'Content-Type':'application/json',...(opt.headers||{})}});let txt=await r.text(),data=null;try{data=txt?JSON.parse(txt):null}catch{}if(!r.ok){let msg=data?.error?.message||txt||`${r.status} ${r.statusText}`;throw new Error(`${r.status} — ${msg}`)}return data}
async function connect(){try{status('Connecting to Microsoft Graph…');site=await graph(`/sites/${CFG.siteHost}:${CFG.sitePath}`);let ls=await graph(`/sites/${encodeURIComponent(site.id)}/lists?$select=id,name,displayName`);list=ls.value.find(x=>(x.displayName||x.name||'').toLowerCase()===CFG.listName.toLowerCase());if(!list)throw new Error(`List “${CFG.listName}” was not found on the configured site.`);let cs=await graph(`/sites/${encodeURIComponent(site.id)}/lists/${encodeURIComponent(list.id)}/columns?$select=id,name,displayName,readOnly,hidden`);columns=(cs.value||[]).filter(c=>!c.hidden);pass('connect');setSignedIn();status(`PASS — Connected to “${list.displayName||list.name}”. Reading shared test tools…`,'ok');document.querySelector('#mu-refresh').disabled=false;await loadItems()}catch(e){status('CONNECTION FAILED — '+friendly(e),'err')}}
async function loadItems(){try{if(!list)return connect();status('Refreshing shared Microsoft List data…');let d=await graph(`/sites/${encodeURIComponent(site.id)}/lists/${encodeURIComponent(list.id)}/items?$expand=fields&$top=200`);items=d.value||[];renderGrid();pass('read');status(`PASS — Read ${items.length} shared list item${items.length===1?'':'s'}. If you add a third row directly in Microsoft Lists, press 3 · REFRESH and confirm it appears here.`, 'ok')}catch(e){status('READ FAILED — '+friendly(e),'err')}}
function fieldMap(){let m={};columns.forEach(c=>m[(c.displayName||c.name).trim().toLowerCase()]=c);return m}
function val(it,label){let c=fieldMap()[label.toLowerCase()];return c?it.fields?.[c.name]??'':''}
function editableColumns(){let wanted=['Title','UTID','Code Name','FI Status','Model','Customer','Sales Order','MFG Ship Date','Quarter','Family'],m=fieldMap();return wanted.map(x=>m[x.toLowerCase()]).filter(c=>c&&!c.readOnly)}
function isShipDateCol(c){return String(c?.displayName||c?.name||'').trim().toLowerCase()==='mfg ship date'}
function cleanDate(v){let s=String(v??'').trim();if(!s)return '';let m=s.match(/^(\d{4}-\d{2}-\d{2})/);return m?m[1]:s}
function renderGrid(){let g=document.querySelector('#mu-grid'),cols=editableColumns();if(!items.length){g.innerHTML='<p class="mu-warn">The list connected successfully but contains no items.</p>';return}g.innerHTML=`<table class="mu-table"><thead><tr>${cols.map(c=>`<th>${esc(c.displayName)}</th>`).join('')}<th>LAST MODIFIED</th><th>ACTION</th></tr></thead><tbody>${items.map(it=>`<tr data-mu-row="${esc(it.id)}">${cols.map(c=>`<td><input data-field="${esc(c.name)}" value="${esc(isShipDateCol(c)?cleanDate(it.fields?.[c.name]):(it.fields?.[c.name]??''))}"></td>`).join('')}<td>${esc(it.lastModifiedDateTime||'')}</td><td><button class="mu-btn" data-mu-save="${esc(it.id)}">SAVE SHARED ROW</button></td></tr>`).join('')}</tbody></table><p class="mu-note">Tip: for the first multi-user test, change only a harmless test value such as Customer on one of the two test tools. Save, then refresh on the second user's computer.</p>`;g.querySelectorAll('[data-mu-save]').forEach(b=>b.onclick=()=>saveRow(b.dataset.muSave))}
async function saveRow(id){try{let original=items.find(x=>x.id===id),row=document.querySelector(`[data-mu-row="${CSS.escape(id)}"]`);if(!original||!row)return;status(`Checking item ${id} for another user's changes…`);let current=await graph(`/sites/${encodeURIComponent(site.id)}/lists/${encodeURIComponent(list.id)}/items/${encodeURIComponent(id)}?$expand=fields`);if(original.lastModifiedDateTime&&current.lastModifiedDateTime&&original.lastModifiedDateTime!==current.lastModifiedDateTime){status(`CONFLICT — Item ${id} changed after you loaded it. Your edit was NOT saved. Refresh shared data and review the other user's changes first.`,'err');return}let body={},byName=new Map(editableColumns().map(c=>[c.name,c]));row.querySelectorAll('[data-field]').forEach(i=>{let c=byName.get(i.dataset.field),v=i.value;if(isShipDateCol(c)){v=cleanDate(v);if(!v)return}body[i.dataset.field]=v});await graph(`/sites/${encodeURIComponent(site.id)}/lists/${encodeURIComponent(list.id)}/items/${encodeURIComponent(id)}/fields`,{method:'PATCH',body:JSON.stringify(body)});pass('write');status(`PASS — Shared item ${id} saved. Reading it back now…`,`ok`);await loadItems();let verify=items.find(x=>x.id===id);if(verify){pass('readback');status(`PASS — UPDATE + READ-BACK verified for shared item ${id}.`,`ok`)}}catch(e){status('WRITE FAILED — '+friendly(e),'err')}}

async function createTempRow(){try{if(!list)return;status('Creating a temporary Microsoft List test row…');let cols=editableColumns(),body={};let title=cols.find(c=>(c.displayName||'').toLowerCase()==='title');if(title)body[title.name]='MULTI-USER TEST '+new Date().toISOString();let utid=cols.find(c=>(c.displayName||'').toLowerCase()==='utid');if(utid)body[utid.name]='MU-'+Date.now().toString().slice(-6);let r=await graph(`/sites/${encodeURIComponent(site.id)}/lists/${encodeURIComponent(list.id)}/items`,{method:'POST',body:JSON.stringify({fields:body})});createdTestId=String(r.id);pass('create');setSignedIn();status(`PASS — Created temporary shared row ${createdTestId}. It should now be visible directly in Microsoft Lists. Refreshing…`,'ok');await loadItems()}catch(e){status('CREATE FAILED — '+friendly(e),'err')}}
async function deleteTempRow(){try{if(!createdTestId)return;let id=createdTestId;status(`Deleting temporary test row ${id}…`);await graph(`/sites/${encodeURIComponent(site.id)}/lists/${encodeURIComponent(list.id)}/items/${encodeURIComponent(id)}`,{method:'DELETE'});createdTestId=null;pass('delete');setSignedIn();await loadItems();status(`PASS — Temporary row ${id} deleted. End-to-end CREATE/READ/UPDATE/DELETE test is complete.`,'ok')}catch(e){status('DELETE FAILED — '+friendly(e),'err')}}

function friendly(e){let s=e?.message||String(e);if(/AADSTS50011/i.test(s))return s+' Redirect URI mismatch: confirm http://localhost:5500/redirect.html is registered as SPA.';if(/403|accessDenied|insufficient/i.test(s))return s+' The signed-in user or Entra app may not have the required Microsoft Graph/List permission.';return s}

// V6.6.45 — One Tool = One Microsoft List Row shared-data bridge.
// REQUIRED LIST SCHEMA: Title (default) + a Multiple lines of text column named "Tool Data".
// Optional friendly columns (UTID, Code Name, FI Status, Model, Customer, Sales Order, MFG Ship Date, Quarter, Family)
// are populated when present, but the complete UTC state lives in Tool Data so one physical tool stays one List item.
let sharedActive=false,presenceTimer=null,lastSharedState=null,sessionId=(crypto.randomUUID?crypto.randomUUID():('S-'+Date.now()+'-'+Math.random().toString(16).slice(2)));
const TOOL_PREFIX='B7TOOL:', TOOL_DATA_LABEL='Tool Data', SHARED_MODE_KEY='b7fi-shared-mode-active-v6643', SHARED_KIND_KEY='b7fi-shared-dataset-kind-v7625';
function col(label){return fieldMap()[label.toLowerCase()]}
function setField(body,label,value){let c=col(label);if(c&&!c.readOnly)body[c.name]=value}
function itemVal(it,label){let c=col(label);return c?it.fields?.[c.name]:undefined}
function titleOf(it){return String(itemVal(it,'Title')||'')}
function parseToolData(it){let raw=String(itemVal(it,TOOL_DATA_LABEL)||'').trim();if(!raw)return null;try{let t=JSON.parse(raw);return t&&typeof t==='object'&&t.id!==undefined&&String(t.id).trim()?t:null}catch(e){return null}}
// V7.6.8: Tool Data is the authoritative one-row marker. Older shared rows may have a blank Title,
// so do not hide a valid tool just because B7TOOL:<UTID> was not written to Title.
function isToolRow(it){return titleOf(it).startsWith(TOOL_PREFIX)||!!parseToolData(it)}
function toolIdFromRow(it){let t=titleOf(it);if(t.startsWith(TOOL_PREFIX))return t.slice(TOOL_PREFIX.length);let d=parseToolData(it);return d?String(d.id):''}
function requireToolDataColumn(){let c=col(TOOL_DATA_LABEL);if(!c||c.readOnly)throw new Error('ONE-ROW SCHEMA REQUIRED — Add a Microsoft List column named “Tool Data” with type Multiple lines of text, then reconnect. V7.6.8 will not create chunk rows.');return c}
async function refreshAllItems(){let all=[],path=`/sites/${encodeURIComponent(site.id)}/lists/${encodeURIComponent(list.id)}/items?$expand=fields&$top=200`;while(path){let d=await graph(path.replace(CFG.graph,''));all.push(...(d.value||[]));path=d['@odata.nextLink']||''}items=all;return items}
function toolRowFields(tool){requireToolDataColumn();let b={},cleanTool=JSON.parse(JSON.stringify(tool));delete cleanTool._sharedRowId;setField(b,'Title',TOOL_PREFIX+String(cleanTool.id));setField(b,TOOL_DATA_LABEL,JSON.stringify(cleanTool));setField(b,'UTID',cleanTool.id);setField(b,'Code Name',cleanTool.codename||'');setField(b,'FI Status',cleanTool.toolStatus||'');setField(b,'Model',cleanTool.model||'');setField(b,'Customer',cleanTool.customer||'');setField(b,'Sales Order',cleanTool.salesOrder||'');if(cleanTool.shipDate)setField(b,'MFG Ship Date',cleanDate(cleanTool.shipDate));setField(b,'Quarter',cleanTool.quarter||'');setField(b,'Family',cleanTool.family||'');setField(b,'Last Updated By',account?.username||account?.name||'');setField(b,'Revision',String((Number(tool._sharedRevision)||0)+1));return b}
async function createRow(fields){return graph(`/sites/${encodeURIComponent(site.id)}/lists/${encodeURIComponent(list.id)}/items`,{method:'POST',body:JSON.stringify({fields})})}
async function patchRow(id,fields){return graph(`/sites/${encodeURIComponent(site.id)}/lists/${encodeURIComponent(list.id)}/items/${encodeURIComponent(id)}/fields`,{method:'PATCH',body:JSON.stringify(fields)})}
async function deleteRow(id){try{return await graph(`/sites/${encodeURIComponent(site.id)}/lists/${encodeURIComponent(list.id)}/items/${encodeURIComponent(id)}`,{method:'DELETE'})}catch(e){if(String(e.message||'').startsWith('404'))return null;throw e}}
async function upsertTool(tool){requireToolDataColumn();await refreshAllItems();let id=String(tool.id),matches=items.filter(it=>isToolRow(it)&&toolIdFromRow(it)===id),row=matches[0],f=toolRowFields(tool);if(row)await patchRow(row.id,f);else await createRow(f);for(const extra of matches.slice(1))await deleteRow(extra.id)}
function decodeSharedTools(){requireToolDataColumn();let out=[],seen=new Set();for(const it of items){let t=parseToolData(it);if(!t)continue;let id=String(t.id);if(seen.has(id))continue;seen.add(id);t=JSON.parse(JSON.stringify(t));
  // Friendly List columns can be edited directly in Microsoft Lists. When present/nonblank they override
  // the matching Tool Data value on read, while Tool Data continues to hold the complete UTC state.
  let overlays=[['UTID','id'],['Code Name','codename'],['FI Status','toolStatus'],['Model','model'],['Customer','customer'],['Sales Order','salesOrder'],['MFG Ship Date','shipDate'],['Quarter','quarter'],['Family','family']];
  for(const [label,key] of overlays){let v=itemVal(it,label);if(v!==undefined&&v!==null&&String(v).trim()!=='')t[key]=label==='MFG Ship Date'?cleanDate(v):v}
  t._sharedRowId=String(it.id);out.push(t)}return out}
async function loadSharedScenario(localState){requireToolDataColumn();await refreshAllItems();let sharedTools=decodeSharedTools(),have=new Set(sharedTools.map(t=>String(t.id)));
  // Repair legacy one-row records whose Tool Data is valid but Title was left blank.
  for(const it of items){let t=parseToolData(it);if(t&&!titleOf(it).startsWith(TOOL_PREFIX)){let b={};setField(b,'Title',TOOL_PREFIX+String(t.id));if(Object.keys(b).length)await patchRow(it.id,b)}}
  for(const t of localState.tools||[])if(!have.has(String(t.id)))await upsertTool(t);await refreshAllItems();sharedTools=decodeSharedTools();let out=JSON.parse(JSON.stringify(localState));out.environment='SCENARIO TEST';out.tools=sharedTools;lastSharedState=JSON.parse(JSON.stringify(out));return out}
async function syncChangedTools(nextState){
  if(!sharedActive||!list)return;requireToolDataColumn();
  let previousTools=(lastSharedState?.tools||[]), nextTools=(nextState.tools||[]);
  let prev=new Map(previousTools.map(t=>[String(t.id),JSON.stringify(t)])), nextIds=new Set(nextTools.map(t=>String(t.id)));
  // V7.6.18: shared DELETE is authoritative. Delete missing tool rows from Microsoft List
  // before upserting changed/created tools, then verify by reading the List back.
  await refreshAllItems();
  for(const oldTool of previousTools){
    let id=String(oldTool.id); if(nextIds.has(id))continue;
    let matches=items.filter(it=>isToolRow(it)&&toolIdFromRow(it)===id);
    for(const row of matches)await deleteRow(row.id);
  }
  let changed=nextTools.filter(t=>prev.get(String(t.id))!==JSON.stringify(t));
  for(const t of changed)await upsertTool(t);
  await refreshAllItems();
  let verified=decodeSharedTools(), verifiedIds=new Set(verified.map(t=>String(t.id)));
  for(const oldTool of previousTools)if(!nextIds.has(String(oldTool.id))&&verifiedIds.has(String(oldTool.id)))throw new Error('DELETE VERIFY FAILED — tool '+oldTool.id+' still exists in Microsoft List.');
  let out=JSON.parse(JSON.stringify(nextState));out.tools=verified;lastSharedState=out;lastAutoSyncSignature=toolSignature(verified);updateFooter('SCENARIO TEST');
}
let syncChain=Promise.resolve();
function queueStateSync(st,msg){let snap=JSON.parse(JSON.stringify(st));syncChain=syncChain.then(()=>syncChangedTools(snap)).catch(e=>{console.error(e);setFooterStatus('SCENARIO TEST · SYNC ERROR');status('SHARED SAVE FAILED — '+friendly(e),'err')})}
function activeUserDetails(){return []}
function activeUsers(){return account?[String(account.name||account.username||'').trim()]:[]}
function setFooterStatus(txt){let e=document.querySelector('#sharedStatus');if(e)e.textContent=txt}
function sharedKind(){return localStorage.getItem(SHARED_KIND_KEY)==='PRODUCTION'?'PRODUCTION':'TEST'}
function setModeIdentity(mode,connection){let shared=mode==='shared',connected=connection==='connected',connecting=connection==='connecting';let h=document.getElementById('headerModeCenter');if(h){h.classList.toggle('shared-connected',shared&&connected);h.classList.toggle('shared-connecting',shared&&connecting);h.classList.toggle('shared-disconnected',shared&&!connected&&!connecting);h.classList.toggle('local-mode',!shared)}let fl=document.getElementById('headerModeLabel'),fc=document.getElementById('headerConnectionLabel');let kind=sharedKind();if(fl)fl.textContent=shared?(kind==='PRODUCTION'?'MULTI-USER PRODUCTION':'MULTI-USER MODE'):'LOCAL MODE';let txt=shared?(connected?'LIST CONNECTED':connecting?'CONNECTING TO LIST':'LIST DISCONNECTED'):'LOCAL DATA';if(fc)fc.textContent=txt;let core=document.getElementById('klaConnectionCore');if(core){core.classList.toggle('shared-connected',shared&&connected);core.classList.toggle('shared-connecting',shared&&connecting);core.classList.toggle('shared-disconnected',shared&&!connected&&!connecting);core.classList.toggle('local-mode',!shared)}}
function displayUserName(n){return String(n||'').trim().replace(/\s+/g,' ')}
function renderPresenceBadges(){
  let names=activeUsers().filter(Boolean).slice(0,4);while(names.length<4)names.push('');
  let badge=(n,i)=>{let full=displayUserName(n),label=full?full.toUpperCase():'—';return `<button type="button" class="kla-presence-badge ${full&&sharedActive?'active':''}" data-presence-slot="${i+1}" title="${full||'Available user slot'}">${label}</button>`};
  let l=document.querySelector('#klaUsersLeft'),r=document.querySelector('#klaUsersRight');if(l)l.innerHTML=badge(names[0],1)+badge(names[1],2);if(r)r.innerHTML=badge(names[2],3)+badge(names[3],4);
}
function activity(msg,type='ok'){
  let e=document.querySelector('#footerActivity');
  let who=account?displayUserName(account.name||account.username||'').toUpperCase():'';
  let tm=new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});
  let localMode=(window.state?.environment||'PRODUCTION')==='PRODUCTION';
  let actor=who||'LOCAL';
  let full=`${type==='err'?'✕':'✓'} ${msg} · ${actor} · ${tm}`;
  let syncText=`↻ LAST SYNC: ${localMode?'LOCAL · ':''}${tm}`;
  let toolMatch=String(msg||'').match(/\bTOOL\s+([A-Z0-9_-]+)/i);
  let toolId=toolMatch?toolMatch[1]:'';
  let syncCompact=`↻ SYNC: ${tm}`;
  window.B7ActivityState={state:type==='err'?'ACTIVITY · ERROR':'ACTIVITY · UPDATED',message:full,sync:syncText,syncCompact:syncCompact,toolId:toolId,type:type,at:Date.now()};
  if(e){e.textContent='LAST ACTIVITY: '+full;e.classList.toggle('activity-error',type==='err')}
  let fs=document.querySelector('#footerLastSync');if(fs)fs.textContent=`LAST SYNC: ${localMode?'LOCAL · ':''}${tm}`;
  let m=document.querySelector('#commandCenterActivityMessage'),st=document.querySelector('#commandCenterActivityState'),bar=document.querySelector('#commandCenterActivityBar'),time=document.querySelector('#commandCenterActivityTime');
  if(m){m.textContent=full;if(toolId){m.dataset.tool=toolId;m.setAttribute('role','button');m.tabIndex=0;m.title='Open last updated tool '+toolId}else{delete m.dataset.tool;m.removeAttribute('role');m.removeAttribute('tabindex');m.removeAttribute('title')}}if(st)st.textContent=window.B7ActivityState.state;if(time)time.textContent=syncCompact;
  if(bar){bar.classList.toggle('critical',type==='err');bar.classList.toggle('normal',type!=='err')}
}
function updateFooter(env){
  let au=document.querySelector('#activeUsers'),health=document.querySelector('#footerDataHealth'),sync=document.querySelector('#footerLastSync');
  renderPresenceBadges();
  if(env==='PRODUCTION'){
    setFooterStatus('LOCAL DATA');if(au)au.textContent='USERS: —/7';if(health)health.textContent=`DATA HEALTH: ${window.state?.tools?.length||0} LOCAL TOOLS`;if(sync&&!window.B7ActivityState)sync.textContent='LAST SYNC: LOCAL';let topSync=document.querySelector('#commandCenterActivityTime');if(topSync&&!window.B7ActivityState)topSync.textContent='↻ SYNC: LOCAL';setModeIdentity('local','offline');return;
  }
  setFooterStatus(sharedActive?'LIST CONNECTED · 1 ROW/TOOL':'LIST DISCONNECTED');
  if(au)au.textContent=sharedActive?'USERS: 1/7':'USERS: 0/7';
  if(health)health.textContent=`DATA HEALTH: ${sharedActive?'SHARED READY':'WAITING'}`;
  if(sync)sync.textContent=sharedActive?'LAST SYNC: '+new Date().toLocaleTimeString([], {hour:'numeric',minute:'2-digit'}):'LAST SYNC: —';let topSync=document.querySelector('#commandCenterActivityTime');if(topSync)topSync.textContent=sharedActive?'↻ SYNC: '+new Date().toLocaleTimeString([], {hour:'numeric',minute:'2-digit'}):'↻ SYNC: —';
  setModeIdentity('shared',sharedActive?'connected':'offline');renderPresenceBadges();
}
function showActiveUsers(){alert('ACTIVE USERS presence rows are temporarily disabled in V6.6.45 while the one-tool/one-row storage model is validated.')}
function downloadJson(obj,name){let blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
async function ensureConnected(){await initMsal();if(!account){let r=await msalApp.loginPopup({scopes:CFG.scopes,redirectUri:CFG.redirectUri});account=r.account;msalApp.setActiveAccount?.(account);setSignedIn();pass('signin')}if(!list)await connect();await refreshAllItems()}
function writableFieldSet(){let set=new Set();for(const c of columns||[]){if(c&&c.name&&!c.readOnly&&!c.hidden)set.add(c.name)}return set}
function backupPayload(){return {format:'B7-FI-SHARED-LIST-BACKUP',version:'6.6.43',storageModel:'ONE-TOOL-ONE-ROW',createdAt:new Date().toISOString(),siteHost:CFG.siteHost,sitePath:CFG.sitePath,listName:CFG.listName,rowCount:items.length,rows:items.map(it=>({fields:{...(it.fields||{})}}))}}
async function exportSharedBackup(prefix='B7-FI-SHARED-LIST-BACKUP'){await ensureConnected();let data=backupPayload(),stamp=new Date().toISOString().replace(/[:.]/g,'-');downloadJson(data,`${prefix}-${stamp}.json`);status(`PASS — Shared backup exported with ${data.rowCount} List row(s).`,'ok');return {count:data.rowCount,data}}
async function restoreSharedBackup(data){if(!data||data.format!=='B7-FI-SHARED-LIST-BACKUP'||!Array.isArray(data.rows))throw new Error('Selected file is not a valid B7 FI shared List backup.');await ensureConnected();requireToolDataColumn();await exportSharedBackup('B7-FI-PRE-RESTORE-SHARED-BACKUP');for(const it of [...items])await deleteRow(it.id);await refreshAllItems();if(items.length)throw new Error(`${items.length} row(s) remain after pre-restore clear.`);let writable=writableFieldSet(),restored=0;for(const row of data.rows){let f={};for(const [k,v] of Object.entries(row.fields||{})){if(writable.has(k))f[k]=v}if(!Object.keys(f).length)continue;await createRow(f);restored++}await refreshAllItems();if(items.length!==restored)throw new Error(`Restore verification mismatch: restored ${restored}, read back ${items.length}.`);let tools=decodeSharedTools(),out={environment:'SCENARIO TEST',tools};lastSharedState=JSON.parse(JSON.stringify(out));sharedActive=true;updateFooter('SCENARIO TEST');status(`PASS — Shared backup restored and verified: ${restored} row(s), ${tools.length} tool(s).`,'ok');return {count:restored,state:out}}
async function replaceSharedScenario(localState){await ensureConnected();requireToolDataColumn();localStorage.setItem(SHARED_KIND_KEY,'TEST');for(const it of [...items])await deleteRow(it.id);await refreshAllItems();if(items.length)throw new Error(`${items.length} row(s) remain; shared test dataset was not started.`);sharedActive=true;localStorage.setItem(SHARED_MODE_KEY,'1');lastSharedState=null;let out=JSON.parse(JSON.stringify(localState||{environment:'SCENARIO TEST',tools:[]}));out.environment='SCENARIO TEST';for(const t of out.tools||[])await upsertTool(t);await refreshAllItems();let decoded=decodeSharedTools();if(items.filter(isToolRow).length!==decoded.length)throw new Error('ONE-ROW VERIFICATION FAILED — List row/tool count mismatch.');out.tools=decoded;lastSharedState=JSON.parse(JSON.stringify(out));updateFooter('SCENARIO TEST');status(`PASS — ONE TOOL = ONE ROW verified: ${decoded.length} tool(s), ${items.filter(isToolRow).length} tool row(s).`,'ok');return out}
async function publishLocalProduction(localState){
  await ensureConnected();requireToolDataColumn();
  let source=JSON.parse(JSON.stringify(localState||{})),tools=Array.isArray(source.tools)?source.tools:[];
  if(!tools.length)throw new Error('No Local Production tools were supplied.');
  let ids=tools.map(t=>String(t.id||'').trim());if(ids.some(x=>!x))throw new Error('A Local Production tool is missing its UTID.');if(new Set(ids).size!==ids.length)throw new Error('Duplicate UTIDs exist in Local Production.');
  await refreshAllItems();let before=backupPayload(),stamp=new Date().toISOString().replace(/[:.]/g,'-');downloadJson({format:'B7-FI-PRE-MULTIUSER-PRODUCTION-MIGRATION',version:'7.6.25',createdAt:new Date().toISOString(),localProduction:source,sharedListBackup:before},`B7-FI-PRE-MULTIUSER-PRODUCTION-MIGRATION-${stamp}.json`);
  status(`PRODUCTION MIGRATION — safety backup downloaded. Replacing ${items.length} shared row(s) with ${tools.length} Local Production tool(s)…`,'ok');
  for(const it of [...items])await deleteRow(it.id);await refreshAllItems();if(items.length)throw new Error(`${items.length} Microsoft List row(s) remain after pre-migration clear.`);
  sharedActive=true;localStorage.setItem(SHARED_MODE_KEY,'1');localStorage.setItem(SHARED_KIND_KEY,'PRODUCTION');lastSharedState=null;
  for(const t of tools)await upsertTool(t);await refreshAllItems();let decoded=decodeSharedTools(),readIds=new Set(decoded.map(t=>String(t.id))),missing=ids.filter(id=>!readIds.has(id));
  if(decoded.length!==tools.length||missing.length)throw new Error(`MIGRATION VERIFY FAILED — expected ${tools.length} tools, read back ${decoded.length}${missing.length?'; missing '+missing.join(', '):''}.`);
  let out=JSON.parse(JSON.stringify(source));out.environment='SCENARIO TEST';out.tools=decoded;out.sharedDataset='PRODUCTION';lastSharedState=JSON.parse(JSON.stringify(out));lastAutoSyncSignature=toolSignature(decoded);updateFooter('SCENARIO TEST');activity(`MULTI-USER PRODUCTION IMPORTED · ${decoded.length} TOOLS`,'ok');status(`PASS — MULTI-USER PRODUCTION MIGRATION VERIFIED: ${decoded.length}/${tools.length} tools · ONE TOOL = ONE ROW.`,'ok');return out;
}
async function clearEntireList(){await ensureConnected();let doomed=[...items],deleted=0,failed=[];status(`SHARED MASTER RESET — deleting ${doomed.length} Microsoft List row(s)…`);for(const it of doomed){try{await deleteRow(it.id);deleted++}catch(e){failed.push({id:it.id,error:friendly(e)})}}await refreshAllItems();let remaining=items.length;if(remaining||failed.length){setFooterStatus(`LIST CLEAR INCOMPLETE · ${remaining} ROWS REMAIN`);throw new Error(`MASTER RESET INCOMPLETE — deleted ${deleted}; ${remaining} remain; ${failed.length} failed.`)}lastSharedState=null;sharedActive=false;localStorage.removeItem(SHARED_MODE_KEY);localStorage.removeItem(SHARED_KIND_KEY);let empty={environment:'SCENARIO TEST',tools:[]};if(window.B7ApplySharedScenario)window.B7ApplySharedScenario(empty);updateFooter('SCENARIO TEST');setFooterStatus('SHARED SCENARIO TEST · LIST EMPTY');status(`PASS — SHARED MASTER RESET VERIFIED: ${deleted} row(s) deleted, 0 remain.`,'ok');return deleted}
async function resetSharedScenario(){return clearEntireList()}
async function refreshScenario(){if(!sharedActive)throw new Error('Start Shared Scenario first.');requireToolDataColumn();let seed=lastSharedState||{environment:'SCENARIO TEST',tools:[]};await refreshAllItems();let tools=decodeSharedTools();if(!tools.length&&(seed.tools||[]).length){setFooterStatus(`SCENARIO TEST · SYNC WARNING · ${(seed.tools||[]).length} TOOLS RETAINED`);status('SYNC WARNING — List returned no valid tools. Last-known-good cards were retained.','err');return JSON.parse(JSON.stringify(seed))}let out=JSON.parse(JSON.stringify(seed));out.environment='SCENARIO TEST';out.tools=tools;lastSharedState=JSON.parse(JSON.stringify(out));updateFooter('SCENARIO TEST');status(`PASS — Refreshed ${tools.length} tool(s) from ${items.filter(isToolRow).length} Microsoft List tool row(s).`,'ok');return out}
async function enterScenario(localState){await ensureConnected();requireToolDataColumn();localStorage.setItem(SHARED_KIND_KEY,'TEST');sharedActive=true;localStorage.setItem(SHARED_MODE_KEY,'1');let out=await loadSharedScenario(localState);updateFooter('SCENARIO TEST');status(`PASS — SHARED SCENARIO ACTIVE · ONE TOOL = ONE ROW · ${out.tools.length} tool(s).`,'ok');return out}
function leaveScenario(){sharedActive=false;localStorage.removeItem(SHARED_MODE_KEY);localStorage.removeItem(SHARED_KIND_KEY);updateFooter('PRODUCTION')}
// V7.6.12 — production one-click connection + background synchronization.
let autoSyncBusy=false,lastAutoSyncSignature='';
function toolSignature(ts){return JSON.stringify((ts||[]).map(t=>{let x=JSON.parse(JSON.stringify(t));delete x._sharedRowId;return x}).sort((a,b)=>String(a.id).localeCompare(String(b.id))))}
function editingIsActive(){let m=document.querySelector('#modal');if(m&&!m.classList.contains('hidden'))return true;let a=document.activeElement;return !!(a&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))}
async function oneClickConnect(){
  try{
    setModeIdentity('shared','connecting');status('Signing in and connecting to the B7 FI Command Center List…');
    await ensureConnected();sharedActive=true;localStorage.setItem(SHARED_MODE_KEY,'1');
    await refreshAllItems();let tools=decodeSharedTools();
    let out={environment:'SCENARIO TEST',tools};lastSharedState=JSON.parse(JSON.stringify(out));lastAutoSyncSignature=toolSignature(tools);
    updateFooter('SCENARIO TEST');if(window.B7ApplySharedScenario)window.B7ApplySharedScenario(out);
    status(`PASS — MULTI-USER READY · ${tools.length} shared tool(s) loaded. Automatic sync is active.`,'ok');return out;
  }catch(e){setModeIdentity('shared','offline');status('ONE-CLICK CONNECTION FAILED — '+friendly(e),'err');throw e}
}
async function autoSync(){
  if(!sharedActive||!account||!list||autoSyncBusy||editingIsActive())return;
  autoSyncBusy=true;
  try{
    await refreshAllItems();let tools=decodeSharedTools(),sig=toolSignature(tools);
    if(sig!==lastAutoSyncSignature){let out={environment:'SCENARIO TEST',tools};lastSharedState=JSON.parse(JSON.stringify(out));lastAutoSyncSignature=sig;if(window.B7ApplySharedScenario)window.B7ApplySharedScenario(out);status(`AUTO SYNC — ${tools.length} shared tool(s) current.`,'ok')}
    updateFooter('SCENARIO TEST');
  }catch(e){setFooterStatus('LIST CONNECTED · SYNC RETRYING');console.warn('B7 auto sync',e)}finally{autoSyncBusy=false}
}
function showConnectionPanel(){let who=account?`${account.name||''}${account.username?' · '+account.username:''}`:'Not signed in';let listText=list?(CFG.listName+' · CONNECTED'):(CFG.listName+' · DISCONNECTED');alert(`KLA MULTI-USER CONNECTION\n\nUSER: ${who}\nLIST: ${listText}\nMODE: ${sharedActive?'MULTI-USER MODE':'LOCAL PRODUCTION'}\n\nAutomatic shared synchronization: ${sharedActive?'ACTIVE (3 second check)':'OFF'}`)}
function bindHeaderLogin(){let h=document.getElementById('headerModeCenter');if(!h)return;h.setAttribute('role','button');h.setAttribute('tabindex','0');h.title='KLA MULTI-USER SIGN IN / CONNECTION';let go=()=>{if(sharedActive){showConnectionPanel();return}oneClickConnect().catch(()=>{})};h.onclick=go;h.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}}}
window.B7Shared={enterScenario,leaveScenario,oneClickConnect,autoSync,queueStateSync,isActive:()=>sharedActive,updateFooter,activity,resetSharedScenario,clearEntireList,refreshScenario,showActiveUsers,activeUsers,exportSharedBackup,restoreSharedBackup,replaceSharedScenario,publishLocalProduction,datasetKind:sharedKind};
setInterval(autoSync,3000);

document.addEventListener('DOMContentLoaded',async()=>{inject();bindHeaderLogin();document.querySelector('#activeUsers')?.addEventListener('click',showActiveUsers);try{await initMsal();let resume=localStorage.getItem(SHARED_MODE_KEY)==='1';if(resume){setModeIdentity('shared','connecting');if(account){await connect();sharedActive=true;let seed={environment:'SCENARIO TEST',tools:[]};await refreshAllItems();let tools=decodeSharedTools();if(items.length&&tools.length===0)throw new Error(`SHARED LOAD BLOCKED — ${items.length} List row(s) were found but none contained valid Tool Data. Local cards were retained.`);seed.tools=tools;lastSharedState=JSON.parse(JSON.stringify(seed));updateFooter('SCENARIO TEST');if(window.B7ApplySharedScenario)window.B7ApplySharedScenario(seed);status(`PASS — Multi-User session restored after refresh · ${tools.length} tool(s) loaded from Microsoft List.`,'ok')}else{updateFooter('SCENARIO TEST');status('MULTI-USER SESSION PAUSED — Sign in to reload shared tools from Microsoft List.','err')}}else{updateFooter('PRODUCTION');if(account)status('Existing Microsoft sign-in detected. Local data remains active until Shared Multi-User is started.','ok')}}catch(e){setModeIdentity('shared','offline');status('Authentication / shared restore warning — '+friendly(e),'err')}});
})();

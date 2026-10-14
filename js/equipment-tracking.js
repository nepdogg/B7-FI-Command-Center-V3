/* V11.17: centralized computer/component tracking. Shared app state; no parallel localStorage key. */
const EQUIPMENT_COMPUTERS=[['SS','Subswath Server'],['GPU','GPU Servers'],['DBB','Global Storage Server'],['RTAT','RTAT Server'],['SCC','SCC Computer'],['DAS','DAS Server'],['Host','Host Server'],['Dart','Dart Server']];
const EQUIPMENT_COMPONENT_DEFAULT=[['FWA','Filter Wheel Assembly'],['LCA','Lamp Cooling Assembly']];
function equipmentTypes(kind){
  if(kind==='computers')return EQUIPMENT_COMPUTERS;
  const x=state?.config?.componentTypes;
  return [...EQUIPMENT_COMPONENT_DEFAULT,...(Array.isArray(x)?x:[]).filter(v=>Array.isArray(v)&&v.length===2&&!EQUIPMENT_COMPONENT_DEFAULT.some(d=>d[0]===v[0]))];
}
function equipmentRows(t,kind){return Array.isArray(t?.equipmentTracking?.[kind])?t.equipmentTracking[kind]:[]}
function equipmentStats(t,kind){
  const rows=equipmentRows(t,kind),seen=new Set(),totals={};
  rows.forEach(r=>{if(!r||!r.type)return;let id=String(r.serial||r.unitId||r.id||'').trim();let unique=kind+'|'+r.type+'|'+id;if(!id||seen.has(unique))return;seen.add(unique);totals[r.type]=(totals[r.type]||0)+1});
  return {rows:rows.length,unique:seen.size,totals,swaps:rows.filter(r=>r.action==='Swap' || r.action==='Replacement').length};
}
function equipmentBadges(t,mode){return ['computers','components'].map(kind=>{
  const st=equipmentStats(t,kind),types=equipmentTypes(kind),label=kind==='computers'?'COMPUTER TRACKING':'COMPONENT TRACKING';
  const tally=types.map(([code])=>`${code} ${st.totals[code]||0}`).join(' · ');
  return `<button type="button" class="equipment-badge ${mode==='c11'?'c11-badge':''} ${st.rows?'equipment-attention':''}" data-equipment-open="${esc(kind)}" data-equipment-tool="${esc(t.id)}" title="${esc(label)} — ${st.rows} recorded events. Click for swap history"><strong>${label}</strong><small>${esc(tally)}</small><em>${st.rows} events · ${st.unique} distinct units · ${st.swaps} swaps</em></button>`;
}).join('')}
function equipmentModal(id,kind){
 const t=state.tools.find(x=>String(x.id)===String(id));if(!t)return;
 const types=equipmentTypes(kind),rows=equipmentRows(t,kind);
 const opt=(v,label,sel)=>`<option value="${esc(v)}" ${v===sel?'selected':''}>${esc(label)}</option>`;
 const row=(r,i)=>`<div class="equipment-event" data-equipment-row="${i}"><div class="equipment-event-head"><b>ENTRY ${i+1}</b><button class="btn danger" type="button" data-equipment-remove="${i}">REMOVE</button></div><div class="equipment-fields"><label>Type<select data-eq="type">${types.map(([k,l])=>opt(k,k+' — '+l,r.type)).join('')}</select></label><label>Computer / Part ID or Serial<input data-eq="serial" value="${esc(r.serial||'')}" placeholder="Unit or serial number"></label><label>Action<select data-eq="action">${['Installed','Swap','Replacement','Borrowed','Removed','Returned','Failed','Other'].map(v=>opt(v,v,r.action)).join('')}</select></label><label>Date<input type="date" data-eq="date" value="${esc(r.date||'')}"></label><label>Source UTID<input data-eq="source" value="${esc(r.source||'')}" placeholder="From tool"></label><label>Destination UTID<input data-eq="destination" value="${esc(r.destination||id)}" placeholder="To tool"></label><label class="eq-wide">Reason / Notes<textarea data-eq="notes" rows="2">${esc(r.notes||'')}</textarea></label></div></div>`;
 modal(`<div class="modal-form equipment-modal"><h2>${kind==='computers'?'COMPUTER':'COMPONENT'} TRACKING — ${esc(id)}</h2><p class="helper">Track each installation, replacement, failure and transfer. Enter a serial or unit ID to count distinct units accurately. A record is an event, not necessarily an additional unit.</p><div class="equipment-summary">${rows.length} recorded events · ${equipmentStats(t,kind).unique} distinct units</div><div id="equipment-events">${rows.map(row).join('')}</div><div class="modal-actions"><button type="button" class="btn" data-equipment-add>+ ADD ENTRY</button><button type="button" class="btn" data-modal-cancel>CANCEL</button><button type="button" class="btn save" data-equipment-save="${esc(kind)}" data-equipment-tool="${esc(id)}">SAVE EQUIPMENT HISTORY</button></div></div>`);
 document.querySelector('#equipment-events')._rowTemplate=row;
}
function equipmentReadRows(){return [...document.querySelectorAll('[data-equipment-row]')].map(el=>{
 let val=k=>el.querySelector(`[data-eq="${k}"]`)?.value?.trim()||'';
 return {type:val('type'),serial:val('serial'),action:val('action'),date:val('date'),source:val('source'),destination:val('destination'),notes:val('notes')};
});}
function equipmentSave(id,kind){
 const t=state.tools.find(x=>String(x.id)===String(id));if(!t)return;
 const rows=equipmentReadRows();if(rows.some(r=>!r.type||!r.action)){alert('Every entry needs a type and action.');return;}
 const old=clone(t.equipmentTracking||{});t.equipmentTracking=t.equipmentTracking||{};t.equipmentTracking[kind]=rows;
 if(!saveState(`${kind.toUpperCase()} TRACKING SAVED — ${id}`)){t.equipmentTracking=old;alert('SAVE FAILED. Your changes were not confirmed. Check storage space and backup before proceeding.');return;}
 closeModal();render();toast('EQUIPMENT HISTORY SAVED');
}
function equipmentCatalogModal(){const types=equipmentTypes('components');modal(`<div class="modal-form equipment-modal"><h2>COMPONENT TYPE CATALOG</h2><p class="helper">FWA and LCA are built-in. Add more common FI components here. New types will be available for every tool.</p><div id="eq-catalog-list">${types.map(([code,name],i)=>`<div class="eq-catalog-row"><input data-eq-code value="${esc(code)}" ${i<2?'readonly':''} aria-label="Code"><input data-eq-name value="${esc(name)}" ${i<2?'readonly':''} aria-label="Name"></div>`).join('')}</div><div class="modal-actions"><button class="btn" type="button" data-equipment-catalog-add>+ ADD TYPE</button><button class="btn" type="button" data-modal-cancel>CANCEL</button><button class="btn save" type="button" data-equipment-catalog-save>SAVE COMPONENT TYPES</button></div></div>`)}
function equipmentCatalogSave(){let all=[...document.querySelectorAll('.eq-catalog-row')].map(el=>[el.querySelector('[data-eq-code]').value.trim(),el.querySelector('[data-eq-name]').value.trim()]);if(all.some(([a,b])=>!a||!b)||new Set(all.map(x=>x[0].toLowerCase())).size!==all.length){alert('Each component needs a unique abbreviation and a name.');return}let old=clone(state.config.componentTypes||[]);state.config.componentTypes=all.slice(2);if(!saveState('COMPONENT TYPE CATALOG SAVED')){state.config.componentTypes=old;alert('CATALOG SAVE FAILED');return}closeModal();render()}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-equipment-open],[data-equipment-add],[data-equipment-remove],[data-equipment-save],[data-equipment-catalog],[data-equipment-catalog-add],[data-equipment-catalog-save]');if(!b)return;
 e.preventDefault();e.stopImmediatePropagation();
 if(b.dataset.equipmentOpen)return equipmentModal(b.dataset.equipmentTool,b.dataset.equipmentOpen);
 if(b.hasAttribute('data-equipment-catalog'))return equipmentCatalogModal();
 if(b.hasAttribute('data-equipment-catalog-add')){let el=document.createElement('div');el.className='eq-catalog-row';el.innerHTML='<input data-eq-code placeholder="Abbreviation"><input data-eq-name placeholder="Component name">';document.querySelector('#eq-catalog-list').append(el);return}
 if(b.hasAttribute('data-equipment-catalog-save'))return equipmentCatalogSave();
 if(b.hasAttribute('data-equipment-add')){let holder=document.querySelector('#equipment-events');let idx=holder.querySelectorAll('[data-equipment-row]').length;let kind=document.querySelector('[data-equipment-save]').dataset.equipmentSave;let id=document.querySelector('[data-equipment-save]').dataset.equipmentTool;let types=equipmentTypes(kind);let r={type:types[0]?.[0]||'',serial:'',action:'Installed',date:today(),source:'',destination:id,notes:''};holder.insertAdjacentHTML('beforeend',holder._rowTemplate(r,idx));holder.lastElementChild.scrollIntoView({block:'nearest'});return}
 if(b.hasAttribute('data-equipment-remove')){b.closest('[data-equipment-row]')?.remove();return}
 if(b.hasAttribute('data-equipment-save'))return equipmentSave(b.dataset.equipmentTool,b.dataset.equipmentSave);
},true);

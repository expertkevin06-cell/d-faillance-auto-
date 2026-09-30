function $(s){return document.querySelector(s)}
function $$(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function uid(){try{return crypto.randomUUID()}catch(e){return Date.now()+'-'+Math.random().toString(36).slice(2)}}
function iso(){return new Date().toISOString()}
function v(id){var el=$('#'+id);return el?(el.value||'').trim():''}
function norm(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function toast(m,t){var d=document.createElement('div');d.className='toast '+(t||'info');d.textContent=m;$('#toasts').appendChild(d);setTimeout(function(){d.remove()},4200)}
function modal(h){$('#modalBack').innerHTML='<div class="modal">'+h+'</div>';$('#modalBack').style.display='flex'}
function closeModal(){$('#modalBack').style.display='none';$('#modalBack').innerHTML=''}
function dl(name,content,type){var b=(content instanceof Blob)?content:new Blob([content],{type:type||'text/plain'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href)},8000)}
function notify(t,b){try{if('Notification' in window&&Notification.permission==='granted'){new Notification(t,{body:b})}}catch(e){}}
var ADMIN_KEY=atob('S2V2aW44MzYwMA==');
var LOGO_SVG="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><rect width='512' height='512' rx='112' fill='#2563eb'/><path d='M96 300c0-10 6-18 16-20l40-8 34-62c8-14 22-22 38-22h84c16 0 30 8 38 22l34 62 40 8c10 2 16 10 16 20v52c0 8-6 14-14 14h-20c-8 0-14-6-14-14v-10H166v10c0 8-6 14-14 14h-20c-8 0-14-6-14-14z' fill='#fff'/><circle cx='196' cy='316' r='26' fill='#0b1220'/><circle cx='316' cy='316' r='26' fill='#0b1220'/></svg>";
var IC={bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M3 16v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"/><circle cx="7.5" cy="16.5" r="1.6"/><circle cx="16.5" cy="16.5" r="1.6"/></svg>',
book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
hist:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 3"/></svg>',
shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="7" x2="20" y2="7"/><circle cx="9" cy="7" r="2.4"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="15" cy="17" r="2.4"/></svg>',
info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="8.01"/><line x1="12" y1="12" x2="12" y2="16"/></svg>',
dtc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 9h4M7 13h7"/></svg>',
gavel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4l6 6M12 6l6 6M8 10l6-6M3 21h9M12 13l-8 8"/></svg>',
warn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg>',
recall:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-2.6-6.3"/><polyline points="21 3 21 9 15 9"/></svg>',
brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0-2 7 4 4 0 0 0 3 6h6a4 4 0 0 0 3-6 4 4 0 0 0-2-7 4 4 0 0 0-4-4z"/><path d="M12 2v20"/></svg>',
save:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>'};
var LS_KEY='autolitige_db_v2',SESS_KEY='autolitige_session';
function seed(){return{v:2,requests:[],codes:[],users:[],analyses:[],settings:{aiOnline:true,useGemini:false,geminiKey:''},savedAt:iso()}}
var DB;try{DB=JSON.parse(localStorage.getItem(LS_KEY))||seed()}catch(e){DB=seed()}
function save(){DB.savedAt=iso();try{localStorage.setItem(LS_KEY,JSON.stringify(DB))}catch(e){toast('Stockage saturé','warn')}}
function getSession(){try{return JSON.parse(localStorage.getItem(SESS_KEY))}catch(e){return null}}
function setSession(s){if(s){localStorage.setItem(SESS_KEY,JSON.stringify(s))}else{localStorage.removeItem(SESS_KEY)}}
function sessionValid(){var s=getSession();if(!s)return null;if(s.role==='admin')return s;if(s.role==='user'){var ok=false;var i;for(i=0;i<DB.codes.length;i++){if(DB.codes[i].code===s.code&&DB.codes[i].status==='active')ok=true}if(ok)return s;setSession(null)}return null}
function selfTest(){var problems=[];var engines=0;var brands=0;var b,m,i;
for(b in KB){brands++;var B=KB[b];var ek;
for(ek in B.e){engines++;var e=B.e[ek];var j;
for(j=0;j<e.i.length;j++){if(!ISS[e.i[j]])problems.push('ISS '+e.i[j])}
for(j=0;j<e.r.length;j++){if(!REC[e.r[j]])problems.push('REC '+e.r[j])}}
for(m in B.m){for(i=0;i<B.m[m].length;i++){if(!B.e[B.m[m][i]])problems.push(b+'/'+m+'/'+B.m[m][i])}}}
var nIss=0,x;for(x in ISS)nIss++;var nRec=0,y;for(y in REC)nRec++;
return{problems:problems,engines:engines,brands:brands,iss:nIss,rec:nRec}}
var NAV_ITEMS=[{id:'s-new',l:'Analyse',ic:'car',r:'all'},{id:'s-lib',l:'Cas connus',ic:'book',r:'all'},{id:'s-history',l:'Historique',ic:'hist',r:'all'},{id:'s-access',l:'Accès',ic:'shield',r:'admin'},{id:'s-settings',l:'Réglages',ic:'gear',r:'admin'},{id:'s-about',l:'Infos',ic:'info',r:'all'}];
function renderNav(){var s=sessionValid();var html='';var i;
for(i=0;i<NAV_ITEMS.length;i++){var n=NAV_ITEMS[i];if(n.r==='admin'&&!(s&&s.role==='admin'))continue;html+='<button data-goto="'+n.id+'">'+IC[n.ic]+'<span>'+n.l+'</span></button>'}
$('#nav').innerHTML=html;
$$('#nav button').forEach(function(b){b.onclick=function(){show(b.getAttribute('data-goto'))}})}
function show(id){var scr=document.querySelectorAll('.screen');var i;for(i=0;i<scr.length;i++){scr[i].classList.remove('on')}
var el=$('#'+id);if(el)el.classList.add('on');
$$('#nav button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-goto')===id)});
window.scrollTo(0,0);
if(id==='s-access')renderAccess();
if(id==='s-settings')renderSettings();
if(id==='s-history')renderHistory()}
function updateConn(){var c=navigator.connection;var chip=$('#connChip');
if(navigator.onLine){chip.className='ok';chip.textContent='En ligne'+((c&&c.effectiveType)?' · '+c.effectiveType.toUpperCase():'')}
else{chip.className='warn';chip.textContent='Hors ligne · base locale'}}
addEventListener('online',updateConn);addEventListener('offline',updateConn);
var _pendId=null;
function logout(){setSession(null);renderNav();show('s-login')}
function enterApp(){renderNav();show('s-new')}
function activateCode(code,name){var c=null;var i;
for(i=0;i<DB.codes.length;i++){if(DB.codes[i].code===code)c=DB.codes[i]}
if(!c){toast('Code inconnu','bad');return}
if(c.status==='revoked'){toast('Code révoqué','bad');return}
setSession({role:'user',code:code,name:name||c.name});
var u=null;for(i=0;i<DB.users.length;i++){if(DB.users[i].code===code)u=DB.users[i]}
if(!u)DB.users.push({id:uid(),code:code,name:name||c.name,date:iso(),status:'active'});
save();toast('Accès activé','ok');enterApp()}
window.activatePending=function(){var r=null;var i;
for(i=0;i<DB.requests.length;i++){if(DB.requests[i].id===_pendId)r=DB.requests[i]}
if(r&&r.code)activateCode(r.code,r.name)};
function showPending(id){show('s-pending');_pendId=id;
if(window._pendTimer)clearInterval(window._pendTimer);
var draw=function(){var r=null;var i;
for(i=0;i<DB.requests.length;i++){if(DB.requests[i].id===id)r=DB.requests[i]}
if(!r){show('s-login');return}
var h='';
if(r.status==='pending'){h='<div style="font-size:40px">⏳</div><h3>Demande en attente</h3><button class="btn sec" onclick="logout()">Retour</button>'}
else if(r.status==='denied'){h='<div style="font-size:40px">⛔</div><h3>Refusée</h3><button class="btn sec" onclick="logout()">Retour</button>'}
else{h='<div style="font-size:40px">✅</div><h3>Acceptée !</h3><div class="mono">'+r.code+'</div><button class="btn" onclick="activatePending()">Activer mon accès</button>'}
$('#pend-body').innerHTML=h};
draw();
window._pendTimer=setInterval(function(){var r=null;var i;
for(i=0;i<DB.requests.length;i++){if(DB.requests[i].id===id)r=DB.requests[i]}
if(r&&r.status!=='pending'){draw();clearInterval(window._pendTimer)}},1200)}
function rnd4(){return Math.random().toString(36).slice(2,6).toUpperCase()}
var _reqs=[],_codes=[],_users=[];
function renderAccess(){var pend=0;var i;
for(i=0;i<DB.requests.length;i++){if(DB.requests[i].status==='pending')pend++}
$('#pendCount').textContent=pend;
_reqs=DB.requests.slice().reverse();_codes=DB.codes.slice().reverse();_users=DB.users.slice().reverse();
var h='';
for(i=0;i<_reqs.length;i++){var r=_reqs[i];
var st=r.status==='pending'?'<span class="badge b-warn">Attente</span>':r.status==='approved'?'<span class="badge b-ok">Acceptée</span>':'<span class="badge b-bad">Refusée</span>';
var act='';
if(r.status==='pending'){act='<button class="btn sm ok" onclick="apReq('+i+')">✔</button> <button class="btn sm danger" onclick="dnReq('+i+')">✖</button>'}
else if(r.status==='approved'){act='<span class="mono">'+r.code+'</span> <button class="btn sm danger" onclick="rvReq('+i+')">Révoquer</button>'}
h+='<div class="hist-item" style="cursor:default"><div><b>'+esc(r.name)+'</b> '+st+'<br><span class="sub">'+esc(r.contact||'')+'</span></div><div style="text-align:right">'+act+'</div></div>'}
$('#reqList').innerHTML=h||'<p class="sub">Aucune demande.</p>';
h='';
for(i=0;i<_codes.length;i++){var c=_codes[i];
h+='<div class="hist-item" style="cursor:default"><div><span class="mono">'+c.code+'</span> — '+esc(c.name||'')+'<br><span class="sub">'+(c.status==='active'?'<span class="badge b-ok">Actif</span>':'<span class="badge b-bad">Révoqué</span>')+'</span></div><div>'+(c.status==='active'?'<button class="btn sm danger" onclick="rvCode('+i+')">Révoquer</button>':'<button class="btn sm sec" onclick="rsCode('+i+')">Réactiver</button>')+'</div></div>'}
$('#codeList').innerHTML=h||'<p class="sub">Aucun code.</p>';
h='';
for(i=0;i<_users.length;i++){var u=_users[i];
h+='<div class="hist-item" style="cursor:default"><div><b>'+esc(u.name)+'</b><br><span class="sub">'+u.code+'</span></div><div>'+(u.status==='active'?'<button class="btn sm danger" onclick="blUser('+i+')">Bloquer</button>':'<button class="btn sm sec" onclick="ubUser('+i+')">Débloquer</button>')+'</div></div>'}
$('#userList').innerHTML=h||'<p class="sub">Aucun utilisateur.</p>'}
window.apReq=function(i){var r=_reqs[i];if(!r)return;var code='AL-'+rnd4()+'-'+rnd4();r.status='approved';r.code=code;DB.codes.push({code:code,name:r.name,date:iso(),status:'active'});save();toast('Code : '+code,'ok');notify('Demande acceptée',r.name);renderAccess()};
window.dnReq=function(i){var r=_reqs[i];if(r)r.status='denied';save();renderAccess()};
window.rvReq=function(i){var r=_reqs[i];if(!r)return;r.status='denied';var j;
for(j=0;j<DB.codes.length;j++){if(DB.codes[j].code===r.code)DB.codes[j].status='revoked'}
for(j=0;j<DB.users.length;j++){if(DB.users[j].code===r.code)DB.users[j].status='blocked'}
save();toast('Révoqué','warn');renderAccess()};
window.rvCode=function(i){var c=_codes[i];if(c)c.status='revoked';var j;
for(j=0;j<DB.users.length;j++){if(DB.users[j].code===c.code)DB.users[j].status='blocked'}
save();renderAccess()};
window.rsCode=function(i){var c=_codes[i];if(c)c.status='active';var j;
for(j=0;j<DB.users.length;j++){if(DB.users[j].code===c.code)DB.users[j].status='active'}
save();renderAccess()};
window.blUser=function(i){var u=_users[i];if(u)u.status='blocked';var j;
for(j=0;j<DB.codes.length;j++){if(DB.codes[j].code===u.code)DB.codes[j].status='revoked'}
save();renderAccess()};
window.ubUser=function(i){var u=_users[i];if(u)u.status='active';var j;
for(j=0;j<DB.codes.length;j++){if(DB.codes[j].code===u.code)DB.codes[j].status='active'}
save();renderAccess()};
function fillBrands(sel,withFree){var h='<option value="">— Marque —</option>';var ks=Object.keys(KB).sort();var i;
for(i=0;i<ks.length;i++){h+='<option>'+ks[i]+'</option>'}
if(withFree)h+='<option value="__autre">Autre (libre)</option>';
sel.innerHTML=h}
function fillModels(b,sel,withFree){var B=KB[b];sel.disabled=!B;var h='<option value="">— Modèle —</option>';
if(B){var ks=Object.keys(B.m).sort();var i;for(i=0;i<ks.length;i++){h+='<option>'+ks[i]+'</option>'}}
if(withFree)h+='<option value="__autre">Autre (libre)</option>';
sel.innerHTML=h}
function fillEngines(b,m,sel,withFree){var list=(KB[b]&&KB[b].m[m])||[];sel.disabled=!list.length;var h='<option value="">— Motorisation —</option>';var i;
for(i=0;i<list.length;i++){var e=KB[b].e[list[i]];if(!e)continue;h+='<option value="'+list[i]+'">'+esc(e.n)+' — '+e.f+' · '+FIAB[e.b]+'</option>'}
if(withFree)h+='<option value="__autre">Autre (libre)</option>';
sel.innerHTML=h}
var _libRes=[];
window.libPick=function(i){var r=_libRes[i];if(!r)return;
$('#lib-b').value=r.b;fillModels(r.b,$('#lib-m'),false);$('#lib-m').value=r.m;fillEngines(r.b,r.m,$('#lib-e'),false);$('#lib-e').value=r.k;libShow(r.b,r.m,r.k);$('#lib-search-res').innerHTML='';$('#lib-q').value=''};
function takataBanner(b){var found=false;var i;
for(i=0;i<TAKATA.length;i++){if(norm(TAKATA[i])===norm(b))found=true}
if(!found)return '';
return '<div class="banner red">🚨 Marque concernée par les rappels airbags <b>Takata</b> — VIN prioritaire.</div>'}
function issueHtml(id){var i=ISS[id];if(!i)return '';
var cls=i.s===3?'':(i.s===2?' lv2':' lv1');
return '<div class="issue'+cls+'"><div class="head"><b>'+esc(i.t)+'</b><span class="badge '+(i.s===3?'b-bad':i.s===2?'b-warn':'b-info')+'">'+(i.s===3?'CRITIQUE':i.s===2?'IMPORTANT':'MINEUR')+'</span></div><div class="sub">'+esc(i.d)+'</div><ul><li><b style="color:var(--tx)">Signes :</b> '+i.sg.map(esc).join(' · ')+'</li><li><b style="color:var(--tx)">Conséquences :</b> '+i.cs.map(esc).join(' · ')+'</li><li><b style="color:var(--tx)">Préconisation :</b> '+esc(i.fx)+'</li></ul></div>'}
function recallHtml(id){var r=REC[id];if(!r)return '';
return '<div class="issue" style="border-left-color:'+(r.u?'#ef4444':'#3b82f6')+'"><div class="head"><b>📣 '+esc(r.n)+'</b><span class="badge '+(r.u?'b-bad':'b-info')+'">'+(r.u?'URGENT':'CAMPAGNE')+'</span></div><div class="sub">'+esc(r.t)+' · Période : '+esc(r.y)+'</div></div>'}
function libShow(b,m,k){var e=KB[b]&&KB[b].e[k];if(!e)return;
var q=encodeURIComponent(b+' '+m);
var h=takataBanner(b);
h+='<div class="card"><h3>'+esc(b)+' '+esc(m)+' — '+esc(e.n)+'</h3><div class="chips"><span class="chip">⛽ '+e.f+'</span><span class="chip">Fiabilité : '+FIAB[e.b]+'</span></div>'+(e.i.length?'':'<p class="sub" style="margin-top:8px">✅ Aucun défaut majeur documenté.</p>')+'</div>';
if(e.i.length){h+='<div class="card"><h3>⚠️ Défauts récurrents</h3>';var i;for(i=0;i<e.i.length;i++){h+=issueHtml(e.i[i])}h+='</div>'}
if(e.r.length){h+='<div class="card"><h3>📣 Rappels associés</h3>';var j;for(j=0;j<e.r.length;j++){h+=recallHtml(e.r[j])}h+='</div>'}
h+='<div class="card src"><h3>🔗 Vérifications</h3><div class="chips"><span class="chip"><a href="https://www.nhtsa.gov/recalls" target="_blank" rel="noopener">NHTSA</a></span><span class="chip"><a href="https://rappels-produits.gouv.fr/recherche?q='+q+'" target="_blank" rel="noopener">Rappel Conso</a></span><span class="chip"><a href="https://ec.europa.eu/safety-gate" target="_blank" rel="noopener">Safety Gate</a></span></div></div>';
$('#lib-out').innerHTML=h}
function kbHint(){var b=$('#f-b').value,m=$('#f-mo').value,k=$('#f-en').value;var h=$('#kb-hint');
if(b&&b!=='__autre'&&m&&m!=='__autre'&&k&&k!=='__autre'&&KB[b]&&KB[b].e[k]){var e=KB[b].e[k];
h.innerHTML='<div class="banner blue">✔ Base locale : '+e.i.length+' défaut(s) · '+e.r.length+' rappel(s) pour <b>'+esc(e.n)+'</b> — intégrés au rapport.</div>'}
else{h.innerHTML=''}}
window.__A1=true;

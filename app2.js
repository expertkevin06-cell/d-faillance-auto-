var FREE_MODELS=['openai','mistral','deepseek','llama','qwen-coder','gemini'];
function tSignal(ms){try{return AbortSignal.timeout?AbortSignal.timeout(ms):undefined}catch(e){return undefined}}
function buildPrompt(d,kbTxt){return 'Expert automobile + juriste français. Réponds en français, titres ##.\nVÉHICULE : '+d.marque+' '+d.modele+' '+d.annee+' — '+d.motor+' — '+d.km+' km. Achat : '+d.achat+'.\nSYMPTÔMES : '+(d.symptomes||'?')+'\nDTC : '+(d.dtc||'aucun')+'\nHISTORIQUE : '+(d.historique||'?')+'\nPARTIES : '+(d.parties.join(', ')||'aucune')+'\nFAITS : '+(d.faits.join(', ')||'aucun')+'\nCAS CONNUS BASE LOCALE :\n'+(kbTxt||'non renseignés')+'\n## 1 Origines probables\n## 2 Conséquences\n## 3 DTC\n## 4 Rappels/TSB\n## 5 Juridique (1641,1644,1645,1648,1604,1231-1,1240,1245 s. C.civ ; L217-3 s.,L217-7,L121-2 C.conso ; 313-1,223-1 C.pén ; 145,750-1 CPC) responsabilité par partie\n## 6 Stratégie'}
function pollinations(prompt,model){return fetch('https://text.pollinations.ai/',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'system',content:'Expert auto + juriste FR'},{role:'user',content:prompt}],model:model,seed:Math.floor(Math.random()*1e6)}),signal:tSignal(80000)}).then(function(r){if(!r.ok)throw new Error('http');return r.text()}).then(function(t){if(t.length<150)throw new Error('court');return t})}
function runAIChain(d,onp){var p=buildPrompt(d,d._kbTxt);var i=0;
function next(){if(i>=FREE_MODELS.length)return Promise.resolve(null);var m=FREE_MODELS[i];i++;if(onp)onp(i,m,FREE_MODELS.length);
return pollinations(p,m).then(function(t){return{model:m,text:t}}).catch(next)}
return next()}
function callGemini(prompt,key){var models=['gemini-2.5-flash','gemini-2.0-flash'];var i=0;
function next(){if(i>=models.length)return Promise.resolve(null);var m=models[i];i++;
return fetch('https://generativelanguage.googleapis.com/v1beta/models/'+m+':generateContent?key='+encodeURIComponent(key),{method:'POST',headers:{'Content-Type':'application/json'},signal:tSignal(60000),body:JSON.stringify({contents:[{parts:[{text:prompt}]}]})}).then(function(r){if(!r.ok)throw new Error('http');return r.json()}).then(function(j){var parts=(j.candidates&&j.candidates[0]&&j.candidates[0].content&&j.candidates[0].content.parts)||[];var t='';var k;for(k=0;k<parts.length;k++){t+=parts[k].text||''}if(t)return{model:'Gemini',text:t};return next()}).catch(next)}
return next()}
function nhtsaFetch(d){if(!d.marque||!d.modele||!d.annee||!navigator.onLine)return Promise.resolve(null);
return fetch('https://api.nhtsa.gov/recalls/recallsByVehicle?make='+encodeURIComponent(d.marque)+'&model='+encodeURIComponent(d.modele)+'&model_year='+encodeURIComponent(d.annee),{signal:tSignal(12000)}).then(function(r){if(!r.ok)return null;return r.json()}).then(function(j){var out=[];var res=(j&&j.results)||[];var i;for(i=0;i<Math.min(6,res.length);i++){out.push({comp:res[i].Component,summary:String(res[i].Summary||'').slice(0,260)})}return out}).catch(function(){return null})}
function analyzeDTC(input){var out=[];var codes=String(input||'').toUpperCase().match(/[PBCU][0-9]{4}/g)||[];var i,j;
for(i=0;i<codes.length;i++){var c=codes[i];var dup=false;
for(j=0;j<out.length;j++){if(out[j].code===c)dup=true}
if(dup)continue;var e=DTC_DB[c];var o;
if(e){o={code:c,d:e.d,c:e.c,k:e.k,s:e.s,known:true}}
else{var fam={P:'motopropulseur',B:'carrosserie',C:'châssis',U:'réseau'}[c.charAt(0)]||'?';o={code:c,d:'Code '+c+' — système '+fam,c:['Documentation constructeur'],k:['À confirmer'],s:1,known:false}}
out.push(o)}
return out}
function matchSymptoms(t){var n=norm(t);
return SYMPTOMS.filter(function(s){var i;for(i=0;i<s.m.length;i++){if(n.indexOf(norm(s.m[i]))>=0)return true}return false})}
function scanKB(txt){var t=norm(txt);var out=[];if(!t)return out;var b,m,i;
for(b in KB){if(t.indexOf(norm(b))<0)continue;var B=KB[b];
for(m in B.m){for(i=0;i<B.m[m].length;i++){var k=B.m[m][i];var e=B.e[k];if(!e)continue;
var words=norm(e.n).split(/[\s()\/,]+/);var w;
for(w=0;w<words.length;w++){if(words[w].length>2&&words[w]!=='ch'&&words[w]!=='essence'&&words[w]!=='diesel'&&t.indexOf(words[w])>=0){out.push({b:b,m:m,k:k});break}}}}}
return out.slice(0,6)}
function legalEngine(d){var p=d.parties,f=d.faits,arts=[],liab=[],notes=[];var i;
function has(x){return p.indexOf(x)>=0}
function fact(x){return f.indexOf(x)>=0}
var sale=false;for(i=0;i<p.length;i++){if(p[i].indexOf('Vendeur')>=0)sale=true}
if(sale){arts.push('1641','1644','1648')}
if(has('Vendeur professionnel')){arts.push('L217-3','L217-7','L217-8','1645');
liab.push({who:'Vendeur professionnel',lv:fact('Défaut non signalé à la vente')?'Élevée':'Modérée',b:['Vices cachés : vendeur professionnel présumé connaître les vices (1641, 1645 C. civ.)','Conformité : défauts présumés antérieurs 24/12 mois (L.217-7 C. conso)','Délivrance conforme (1604, 1104 C. civ.)']})}
if(has('Vendeur particulier')){liab.push({who:'Vendeur particulier',lv:fact('Défaut non signalé à la vente')?'Modérée':'Faible',b:['Vices cachés (1641) sans présomption : preuve à la charge de l\u2019acheteur']})}
if(has('Garage / réparateur')){liab.push({who:'Garage / réparateur',lv:(fact('Intervention garage récente inefficace')||fact('Panne récurrente déjà réparée'))?'Élevée':'À établir',b:['Obligation de résultat sur la réparation (1231-1 C. civ.)','Devoir de conseil/diagnostic']})}
if(has('Constructeur / importateur')){liab.push({who:'Constructeur / importateur',lv:fact('Rappel non réalisé')?'Élevée':'Modérée',b:['Produits défectueux (1245 s. C. civ.)','Rappels gratuits (Règl. UE 2023/988)']})}
if(has('Contrôleur technique')){liab.push({who:'Contrôle technique',lv:'À établir',b:['1240 C. civ. si défaut contrôlable non détecté']})}
if(fact('Kilométrage suspect')){arts.push('313-1','L121-2');notes.push('Faux km : tromperie L.121-2 + escroquerie 313-1.')}
if(fact('Rappel non réalisé'))notes.push('Rappel non exécuté : responsabilité constructeur renforcée ; 223-1 C. pén. si risque sécurité.');
if(fact('Défaut non signalé à la vente'))notes.push('Dissimulation : mauvaise foi 1645, voire escroquerie.');
if(fact('Entretien non à jour'))notes.push('Défaut d\u2019entretien opposable : partage de responsabilité possible.');
if(fact('Panne récurrente déjà réparée'))notes.push('Réparations infructueuses : inexécution 1231-1 ; résolution L.217-8 s.');
if(fact('Immobilisation prolongée'))notes.push('Immobilisation : préjudice de jouissance indemnisable.');
var uniq=[];for(i=0;i<arts.length;i++){if(uniq.indexOf(arts[i])<0)uniq.push(arts[i])}
var objs=[];for(i=0;i<uniq.length;i++){var j;for(j=0;j<LEGAL_DB.length;j++){if(LEGAL_DB[j].r.indexOf(uniq[i])>=0){objs.push(LEGAL_DB[j]);break}}}
return{arts:objs,liab:liab,notes:notes}}
function actionsBuilder(d){var a=['Constituer le dossier (factures, CT, DTC, photos, écrits).'];
var vend=false;var i;for(i=0;i<d.parties.length;i++){if(d.parties[i].indexOf('Vendeur')>=0)vend=true}
if(vend)a.push('Mise en demeure LRAR vendeur (1641 C. civ. / L.217-3 C. conso).');
if(d.parties.indexOf('Garage / réparateur')>=0)a.push('Mise en demeure LRAR garage (1231-1).');
if(d.parties.indexOf('Constructeur / importateur')>=0)a.push('Signalement constructeur + VIN rappels ; Rappel Conso si sécurité.');
a.push('Conciliateur / médiateur consommation (L.611-1).');
a.push('Expertise amiable ou référé-expertise (145 CPC).');
a.push('Tribunal ; ≤ 5000 € tentative amiable obligatoire (750-1 CPC).');
if(d.faits.indexOf('Kilométrage suspect')>=0)a.push('Plainte 313-1 + SignalConso.');
a.push('Protection juridique assurance.');
return a}
function mdLite(s){var h=esc(s);
h=h.replace(/^###?\s?(.*)$/gm,'<h4>$1</h4>').replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
var lines=h.split('\n');var i;
for(i=0;i<lines.length;i++){if(/^\s*[-•]\s+/.test(lines[i])){lines[i]='<li>'+lines[i].replace(/^\s*[-•]\s+/,'')+'</li>'}}
h=lines.join('\n');
h=h.replace(/((<li>[\s\S]*?<\/li>\n?)+)/g,'<ul>$1</ul>');
h=h.replace(/\n{2,}/g,'</p><p>').replace(/\n/g,'<br>');
return '<p>'+h+'</p>'}
function buildReport(d,kbE,ai,nhtsa){
var dtcs=analyzeDTC(d.dtc),symps=matchSymptoms(d.symptomes),legal=legalEngine(d),actions=actionsBuilder(d);
var html='';var txt='RAPPORT AUTOLITIGE v3 — '+new Date().toLocaleString('fr-FR')+'\n';
function sec(t,icon,bh,bt){html+='<div class="sec-title">'+(IC[icon]||'')+' '+t+'</div><div class="card">'+bh+'</div>';txt+='\n### '+t+'\n'+bt+'\n'}
sec('Contexte','car','<div class="kv"><span>Véhicule</span><b>'+esc(d.marque)+' '+esc(d.modele)+' '+esc(d.annee)+'</b></div><div class="kv"><span>Moteur</span><b>'+esc(d.motor||'—')+'</b></div><div class="kv"><span>Km</span><b>'+esc(d.km||'—')+'</b></div><div class="kv"><span>Achat</span><b>'+esc(d.achat)+'</b></div><div class="kv"><span>Symptômes</span><b style="text-align:left;font-weight:400">'+esc(d.symptomes)+'</b></div>','Véhicule : '+d.marque+' '+d.modele+' '+d.annee+' '+d.motor+'\nSymptômes : '+d.symptomes);
if(kbE.length){var kh='';var i,j;
for(i=0;i<kbE.length;i++){var k=kbE[i];
kh+='<p><b>'+esc(k.b)+' '+esc(k.m)+' — '+esc(k.e.n)+'</b> <span class="badge b-mut">'+FIAB[k.e.b]+'</span></p>';
for(j=0;j<k.e.i.length;j++){kh+=issueHtml(k.e.i[j])}}
var kr=[];
for(i=0;i<kbE.length;i++){for(j=0;j<kbE[i].e.r.length;j++){if(kr.indexOf(kbE[i].e.r[j])<0)kr.push(kbE[i].e.r[j])}}
var rh='';for(i=0;i<kr.length;i++){rh+=recallHtml(kr[i])}
sec('Cas connus de la motorisation','warn',kh+'<h4>📣 Rappels associés</h4>'+(rh||'<p class="sub">Aucun — vérifier VIN.</p>'),'Cas connus et rappels intégrés depuis la base locale.')}
if(dtcs.length){var dh='';var t2='';var i3;
for(i3=0;i3<dtcs.length;i3++){var c=dtcs[i3];
dh+='<div style="margin-bottom:10px"><b>'+c.code+'</b> <span class="badge '+(c.s===3?'b-bad':c.s===2?'b-warn':'b-info')+'">'+(c.s===3?'CRITIQUE':c.s===2?'IMPORTANT':'MINEUR')+'</span><div class="sub">'+esc(c.d)+' · Origines : '+c.c.map(esc).join(' · ')+'</div></div>';
t2+=c.code+' : '+c.d+'\n'}
sec('Codes DTC','dtc',dh,t2)}
var orig=[];
function push(o){var i;for(i=0;i<orig.length;i++){if(orig[i].t===o.t)return}orig.push(o)}
var a1,b1;
for(a1=0;a1<kbE.length;a1++){for(b1=0;b1<kbE[a1].e.i.length;b1++){var ii=ISS[kbE[a1].e.i[b1]];push({t:ii.t,d:ii.d,src:'Cas connu motorisation',s:ii.s})}}
for(a1=0;a1<symps.length;a1++){push({t:symps[a1].t,d:symps[a1].o.join(' ; '),src:'Symptômes',s:symps[a1].s})}
for(a1=0;a1<dtcs.length;a1++){var dd=dtcs[a1];for(b1=0;b1<dd.c.length;b1++){push({t:dd.c[b1],d:dd.d,src:'DTC '+dd.code,s:dd.s})}}
orig.sort(function(x,y){return y.s-x.s});
var oh='';var ot='';
for(a1=0;a1<orig.length;a1++){oh+='<p><b>▸ '+esc(orig[a1].t)+'</b> <span class="badge b-mut">'+orig[a1].src+'</span><br><span class="sub">'+esc(orig[a1].d)+'</span></p>';ot+='- '+orig[a1].t+' ('+orig[a1].src+')\n'}
sec('Origines probables','warn',oh||'<p class="sub">Aucune correspondance locale.</p>',ot);
var cons=[];
function pc(x){if(cons.indexOf(x)<0)cons.push(x)}
var q1;
for(a1=0;a1<kbE.length;a1++){for(b1=0;b1<kbE[a1].e.i.length;b1++){var ii2=ISS[kbE[a1].e.i[b1]];for(q1=0;q1<ii2.cs.length;q1++){pc(ii2.cs[q1])}}}
for(a1=0;a1<symps.length;a1++){for(q1=0;q1<symps[a1].k.length;q1++){pc(symps[a1].k[q1])}}
for(a1=0;a1<dtcs.length;a1++){for(q1=0;q1<dtcs[a1].k.length;q1++){pc(dtcs[a1].k[q1])}}
var ch='';var ct='';
for(q1=0;q1<cons.length;q1++){ch+='<li>'+esc(cons[q1])+'</li>';ct+='- '+cons[q1]+'\n'}
sec('Conséquences','car',ch?'<ul>'+ch+'</ul>':'<p class="sub">À préciser.</p>',ct);
var rh2='';var i4,j4;
for(i4=0;i4<kbE.length;i4++){for(j4=0;j4<kbE[i4].e.r.length;j4++){rh2+=recallHtml(kbE[i4].e.r[j4])}}
var tak=false;
for(i4=0;i4<TAKATA.length;i4++){if(norm(TAKATA[i4])===norm(d.marque))tak=true}
if(tak){rh2+='<div class="banner red">🚨 Rappels Takata possibles sur cette marque — VIN prioritaire.</div>'+recallHtml('r-takata')}
if(nhtsa&&nhtsa.length){rh2+='<h4>NHTSA (en ligne)</h4>';
for(i4=0;i4<nhtsa.length;i4++){rh2+='<p class="sub"><b>'+esc(nhtsa[i4].comp)+'</b> — '+esc(nhtsa[i4].summary)+'</p>'}}
var qq=encodeURIComponent(d.marque+' '+d.modele);
rh2+='<div class="chips src"><span class="chip"><a href="https://www.nhtsa.gov/recalls" target="_blank" rel="noopener">NHTSA</a></span><span class="chip"><a href="https://rappels-produits.gouv.fr/recherche?q='+qq+'" target="_blank" rel="noopener">Rappel Conso</a></span><span class="chip"><a href="https://ec.europa.eu/safety-gate" target="_blank" rel="noopener">Safety Gate</a></span></div>';
sec('Rappels applicables','recall',rh2||'<p class="sub">Vérifier par VIN.</p>','Voir liens officiels.');
var lh='';var i5;
for(i5=0;i5<legal.arts.length;i5++){lh+='<p><b>'+esc(legal.arts[i5].r)+'</b><br><span class="sub">'+esc(legal.arts[i5].t)+'</span></p>'}
sec('Fondements juridiques','gavel',lh,legal.arts.map(function(a){return '- '+a.r+' : '+a.t}).join('\n'));
var lh2='';
for(i5=0;i5<legal.liab.length;i5++){var L=legal.liab[i5];
lh2+='<p><b>'+esc(L.who)+'</b> — <span class="badge '+(L.lv==='Élevée'?'b-bad':L.lv==='Modérée'?'b-warn':L.lv==='Faible'?'b-ok':'b-mut')+'">'+L.lv+'</span></p><ul>';
var b2;for(b2=0;b2<L.b.length;b2++){lh2+='<li class="sub">'+esc(L.b[b2])+'</li>'}
lh2+='</ul>'}
if(legal.notes.length){lh2+='<div class="sub">⚠ '+legal.notes.map(esc).join('<br>⚠ ')+'</div>'}
sec('Responsabilités','gavel',lh2,legal.liab.map(function(l){return '- '+l.who+' ['+l.lv+']'}).join('\n'));
var ah='';var i6;
for(i6=0;i6<actions.length;i6++){ah+='<li class="sub">'+esc(actions[i6])+'</li>'}
sec('Stratégie','save','<ol style="padding-left:18px">'+ah+'</ol>',actions.map(function(a,i){return (i+1)+'. '+a}).join('\n'));
var kbTxt='';
for(i6=0;i6<kbE.length;i6++){kbTxt+=kbE[i6].b+' '+kbE[i6].m+' '+kbE[i6].e.n+' : '+(kbE[i6].e.i.length?kbE[i6].e.i.join(', '):'aucun défaut')+'\n'}
d._kbTxt=kbTxt;
if(ai){html+='<div class="sec-title">'+IC.brain+' IA <span class="badge b-info">'+esc(ai.model)+'</span></div><div class="card ai-box">'+mdLite(ai.text)+'</div>';txt+='\n### IA ('+ai.model+')\n'+ai.text}
else{html+='<div class="sec-title">'+IC.brain+' IA</div><div class="card"><p class="sub">IA indisponible — base locale seule.</p></div>';txt+='\n### IA\nIndisponible.'}
return{html:html,txt:txt,aiModel:ai?ai.model:'local'}}
var _hist=[];
function renderHistory(){_hist=DB.analyses;var h='';var i;
for(i=0;i<_hist.length;i++){var a=_hist[i];
h+='<div class="hist-item" onclick="openA('+i+')"><div><b>'+esc(a.data.marque)+' '+esc(a.data.modele)+'</b> <span class="badge b-info">'+esc(a.aiModel)+'</span><br><span class="sub">'+new Date(a.date).toLocaleString('fr-FR')+'</span></div><button class="btn sm danger" onclick="event.stopPropagation();delA('+i+')">✖</button></div>'}
$('#histList').innerHTML=h||'<p class="sub">Aucune analyse.</p>'}
window.openA=function(i){var a=_hist[i];if(!a)return;window._curRep=a;$('#reportBox').innerHTML=a.html;show('s-report')};
window.delA=function(i){var a=_hist[i];if(!a)return;DB.analyses=DB.analyses.filter(function(x){return x.id!==a.id});save();renderHistory();toast('Supprimée','warn')};
function renderSettings(){$('#st-online').checked=DB.settings.aiOnline;$('#st-gem').checked=DB.settings.useGemini;$('#st-key').value=DB.settings.geminiKey||'';
$('#bk-info').textContent='Sauvegarde : '+new Date(DB.savedAt).toLocaleString('fr-FR')+' · '+DB.analyses.length+' analyse(s)'}
var MANIFEST={name:'AutoLitige Expert v3',short_name:'AutoLitige',start_url:'./index.html',scope:'./',display:'standalone',orientation:'portrait',background_color:'#0b1220',theme_color:'#0b1220',lang:'fr',description:'Pannes connues, rappels, DTC, droit français. Hors ligne.',icons:[{src:'icon-192.png',sizes:'192x192',type:'image/png',purpose:'any'},{src:'icon-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'}]};
var SW_SRC="var CACHE='autolitige-v3';\nself.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'])}).catch(function(){}));self.skipWaiting()});\nself.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}));self.clients.claim()});\nvar NOCACHE=['api.nhtsa.gov','text.pollinations.ai','generativelanguage.googleapis.com','rappels-produits.gouv.fr'];\nself.addEventListener('fetch',function(e){var u=new URL(e.request.url);\nif(e.request.method!=='GET'||NOCACHE.some(function(h){return u.hostname.indexOf(h)>=0}))return;\ne.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(res){if(res.ok&&u.origin===location.origin){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(e.request,cp)})}return res}).catch(function(){return caches.match('./index.html')})}))});";
function init(){
$('#logoIco').innerHTML=LOGO_SVG;
$('#logoBig').innerHTML='<div class="logo-big">'+LOGO_SVG+'</div>';
$('#btnNotif').innerHTML=IC.bell;
$('#btnLock').innerHTML=IC.lock;
$('#modalBack').addEventListener('click',function(e){if(e.target.id==='modalBack')closeModal()});
$('#btnLock').onclick=function(){if(sessionValid()){logout()}else{show('s-login')}};
$('#btnNotif').onclick=function(){if(!('Notification' in window)){toast('Non supporté','warn');return}Notification.requestPermission().then(function(p){toast(p==='granted'?'Notifications OK':'Refusées',p==='granted'?'ok':'bad')})};
$('#btnAdmin').onclick=function(){modal('<h3>🔐 Administrateur</h3><label>Mot de passe</label><input type="password" id="adm-pass"><button class="btn" id="adm-go">Valider</button><button class="btn sec" onclick="closeModal()">Annuler</button>');
$('#adm-go').onclick=function(){if(v('adm-pass')===ADMIN_KEY){setSession({role:'admin'});closeModal();toast('Bienvenue','ok');enterApp()}else{toast('Mot de passe incorrect','bad')}}};
$('#btnReq').onclick=function(){show('s-request')};
$('#btnCode').onclick=function(){show('s-code')};
$('#rq-send').onclick=function(){var n=v('rq-name');if(!n){toast('Nom requis','warn');return}
DB.requests.push({id:uid(),name:n,contact:v('rq-contact'),motif:v('rq-motif'),date:iso(),status:'pending'});save();toast('Demande envoyée','ok');notify('Nouvelle demande d\u2019accès',n);showPending(DB.requests[DB.requests.length-1].id)};
$('#code-go').onclick=function(){activateCode(v('code-in').toUpperCase(),v('code-name'))};
$('#lib-q').addEventListener('input',function(){var q=norm(v('lib-q'));var out=$('#lib-search-res');
if(q.length<2){out.innerHTML='';return}
_libRes=[];var b,m,i;
for(b in KB){var B=KB[b];
for(m in B.m){for(i=0;i<B.m[m].length;i++){var k=B.m[m][i];var e=B.e[k];if(!e)continue;
if(norm(b+' '+m+' '+e.n).indexOf(q)>=0)_libRes.push({b:b,m:m,k:k})}}}
var h='';
if(_libRes.length){h='<div class="card"><h3>Résultats ('+_libRes.length+')</h3>';
var n=Math.min(30,_libRes.length);
for(i=0;i<n;i++){var r=_libRes[i];
h+='<div class="hist-item" onclick="libPick('+i+')"><div><b>'+esc(r.b)+' '+esc(r.m)+'</b><br><span class="sub">'+esc(KB[r.b].e[r.k].n)+'</span></div><span class="badge b-info">Voir</span></div>'}
h+='</div>'}
else{h='<div class="card"><p class="sub">Aucun résultat.</p></div>'}
out.innerHTML=h});
$('#lib-b').onchange=function(){var b=$('#lib-b').value;fillModels(b,$('#lib-m'),false);$('#lib-e').disabled=true;$('#lib-e').innerHTML='<option value="">— Motorisation —</option>';$('#lib-out').innerHTML=b?takataBanner(b):''};
$('#lib-m').onchange=function(){fillEngines($('#lib-b').value,$('#lib-m').value,$('#lib-e'),false);$('#lib-out').innerHTML=''};
$('#lib-e').onchange=function(){var k=$('#lib-e').value;if(k)libShow($('#lib-b').value,$('#lib-m').value,k)};
$('#f-b').onchange=function(){var b=$('#f-b').value;$('#fb-x').style.display=(b==='__autre')?'block':'none';
if(b&&b!=='__autre'){fillModels(b,$('#f-mo'),true)}else{$('#f-mo').disabled=true;$('#f-mo').innerHTML='<option value="">— Modèle —</option>'}
$('#f-en').disabled=true;$('#f-en').innerHTML='<option value="">— Motorisation —</option>';kbHint()};
$('#f-mo').onchange=function(){var b=$('#f-b').value;var m=$('#f-mo').value;$('#fm-x').style.display=(m==='__autre')?'block':'none';
if(b&&b!=='__autre'&&m&&m!=='__autre'){fillEngines(b,m,$('#f-en'),true)}else{$('#f-en').disabled=true;$('#f-en').innerHTML='<option value="">— Motorisation —</option>'}
kbHint()};
$('#f-en').onchange=function(){$('#fe-x').style.display=($('#f-en').value==='__autre')?'block':'none';kbHint()};
$('#btnAnalyze').onclick=function(){
var bSel=$('#f-b').value;var mSel=$('#f-mo').value;var eSel=$('#f-en').value;
var motor='';
if(eSel==='__autre'){motor=v('f-ex')}
else if(eSel&&bSel&&bSel!=='__autre'&&KB[bSel]&&KB[bSel].e[eSel]){motor=KB[bSel].e[eSel].n}
else{motor=eSel}
var d={marque:(bSel==='__autre')?v('f-bx'):bSel,modele:(mSel==='__autre')?v('f-mx'):mSel,motor:motor,annee:v('f-annee'),km:v('f-km'),achat:$('#f-achat').value,symptomes:v('f-symptomes'),dtc:v('f-dtc'),historique:v('f-historique'),parties:$$('input[name=parties]:checked').map(function(i){return i.value}),faits:$$('input[name=faits]:checked').map(function(i){return i.value})};
if(!d.marque&&!d.symptomes){toast('Marque ou symptômes requis','warn');return}
$('#btnAnalyze').disabled=true;$('#aiStatusCard').style.display='block';var stx=$('#aiStatus');
var kbE=[];
if(bSel&&bSel!=='__autre'&&mSel&&mSel!=='__autre'&&eSel&&eSel!=='__autre'&&KB[bSel]&&KB[bSel].e[eSel]){
kbE=[{b:bSel,m:mSel,k:eSel,e:KB[bSel].e[eSel]}];stx.textContent='Base locale chargée'}
else{stx.textContent='Recherche base locale…';
var found=scanKB(d.marque+' '+d.modele+' '+d.motor+' '+d.symptomes);var i;
for(i=0;i<found.length;i++){kbE.push({b:found[i].b,m:found[i].m,k:found[i].k,e:KB[found[i].b].e[found[i].k]})}}
var ai=null;
var finish=function(){stx.textContent='Rappels NHTSA…';
nhtsaFetch(d).then(function(nhtsa){
stx.textContent='Construction du rapport…';
var rep=buildReport(d,kbE,ai,nhtsa);
DB.analyses.unshift({id:uid(),date:iso(),data:d,aiModel:rep.aiModel,html:rep.html,txt:rep.txt});
save();
window._curRep=DB.analyses[0];
$('#reportBox').innerHTML=rep.html;
$('#aiStatusCard').style.display='none';
$('#btnAnalyze').disabled=false;
show('s-report');
toast('Analyse terminée','ok')})};
if(DB.settings.aiOnline&&navigator.onLine){
if(DB.settings.useGemini&&DB.settings.geminiKey){stx.textContent='Gemini…';
callGemini(buildPrompt(d,''),DB.settings.geminiKey).then(function(a){ai=a;finish()})}
else{runAIChain(d,function(i,m,n){stx.textContent='IA '+i+'/'+n+' : '+m}).then(function(a){ai=a;finish()})}}
else{stx.textContent='Hors ligne → base locale.';finish()}};
$('#rep-txt').onclick=function(){if(window._curRep)dl('rapport-autolitige.txt',window._curRep.txt,'text/plain;charset=utf-8')};
$('#rep-print').onclick=function(){window.print()};
$('#rep-share').onclick=function(){var r=window._curRep;if(!r)return;
var body='Rapport AutoLitige — '+r.data.marque+' '+r.data.modele+'\n'+r.txt.slice(0,1800);
if(navigator.share){navigator.share({title:'Rapport AutoLitige',text:body}).catch(function(){})}
else if(navigator.clipboard){navigator.clipboard.writeText(body).then(function(){toast('Copié','ok')})}};
$('#st-save').onclick=function(){DB.settings.aiOnline=$('#st-online').checked;DB.settings.useGemini=$('#st-gem').checked;DB.settings.geminiKey=v('st-key');save();toast('Enregistré','ok')};
$('#bk-exp').onclick=function(){dl('sauvegarde-autolitige.json',JSON.stringify(DB,null,1),'application/json')};
$('#bk-imp').onclick=function(){$('#fileImport').click()};
$('#fileImport').onchange=function(e){var f=e.target.files[0];if(!f)return;
var rd=new FileReader();
rd.onload=function(){try{var j=JSON.parse(rd.result);if(!j.requests||!j.codes)throw 0;DB=j;save();toast('Importé','ok');renderNav();enterApp()}catch(x){toast('Fichier invalide','bad')}};
rd.readAsText(f);e.target.value=''};
$('#bk-reset').onclick=function(){modal('<h3>🗑️ Reset ?</h3><button class="btn danger" id="rz-yes">Oui</button><button class="btn sec" onclick="closeModal()">Annuler</button>');
$('#rz-yes').onclick=function(){localStorage.removeItem(LS_KEY);localStorage.removeItem(SESS_KEY);location.reload()}};
$('#kit-btn').onclick=function(){dl('index.html','<!DOCTYPE html>\n'+document.documentElement.outerHTML,'text/html');dl('sw.js',SW_SRC,'text/javascript');dl('manifest.webmanifest',JSON.stringify(MANIFEST,null,1),'application/manifest+json');toast('Kit téléchargé','ok')};
fillBrands($('#f-b'),true);
fillBrands($('#lib-b'),false);
var st=selfTest();
if(st.problems.length){showErr('Autocontrôle : '+st.problems.length+' anomalie(s) : '+st.problems.slice(0,3).join(' | '))}
else{$('#selftest').textContent='v3 — Autocontrôle OK ✔ '+st.brands+' marques · '+st.engines+' motorisations · '+st.iss+' défauts · '+st.rec+' rappels'}
updateConn();setInterval(updateConn,5000);
if('serviceWorker' in navigator&&location.protocol.indexOf('http')===0){navigator.serviceWorker.register('./sw.js').catch(function(){})}
var s0=sessionValid();renderNav();
if(s0){enterApp()}else{show('s-login')}}
try{init();window.__AL_INIT=true}catch(e){showErr('ERREUR INIT : '+e.message)}

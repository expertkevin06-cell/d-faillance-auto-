var CACHE='autolitige-v4';
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'])}).catch(function(){}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}));self.clients.claim()});
var NOCACHE=['api.nhtsa.gov','text.pollinations.ai','generativelanguage.googleapis.com','rappels-produits.gouv.fr'];
self.addEventListener('fetch',function(e){var u=new URL(e.request.url);
if(e.request.method!=='GET'||NOCACHE.some(function(h){return u.hostname.indexOf(h)>=0}))return;
e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(res){if(res.ok&&u.origin===location.origin){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(e.request,cp)})}return res}).catch(function(){return caches.match('./index.html')})}))});

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./style-Cq4aE-am.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Af="modulepreload",Rf=function(s,e){return new URL(s,e).href},Oc={},Xu=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(t.map(h=>{if(h=Rf(h,n),h in Oc)return;Oc[h]=!0;const d=h.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(n)for(let g=a.length-1;g>=0;g--){const x=a[g];if(x.href===h&&(!d||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Af,d||(f.as="script"),f.crossOrigin="",f.href=h,l&&f.setAttribute("nonce",l),document.head.appendChild(f),d)return new Promise((g,x)=>{f.addEventListener("load",g),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},Wl={projection:"orthographic",fov:35,height:11.6,distance:18,centerX:.15,centerY:2.05,follow:"adaptive",offsetX:0,offsetY:1.3,smoothing:3,near:.1,far:100},Cf={height:[2,80],distance:[3,100],centerX:[-1e3,1e3],centerY:[-1e3,1e3],offsetX:[-100,100],offsetY:[-100,100],smoothing:[0,20],near:[.01,2],far:[20,2e3]},Aa=s=>({...Wl,...s}),Pf=["original","none","tile-0","tile-1","tile-2","tile-3","tile-4","tile-5"],St=s=>{throw new Error(s)},Qt=(s,e,t)=>typeof s=="number"&&Number.isFinite(s)&&s>=e&&s<=t,on=(s,e=100)=>typeof s=="string"&&s.length>0&&s.length<=e,kc=s=>typeof s=="string"&&/^#[0-9a-f]{6}$/i.test(s);function Lf(s){if(!s||typeof s!="object")return St("Файл не содержит сцену.");const e=s;if(e.format!=="shelter-scene"||![1,2].includes(e.version)||!on(e.template)||e.units!=="m")return St("Неподдерживаемый формат или версия сцены.");if(!on(e.name)||!Array.isArray(e.nodes)||e.nodes.length>2e3||!Array.isArray(e.textures)||e.textures.length>24)return St("Некорректное имя или слишком большая сцена.");const t=e.environment;if(!t||!Qt(t.time,0,1439)||!Qt(t.haze,0,.2)||!Qt(t.exposure,.2,3)||typeof t.flashlight!="boolean")return St("Некорректные настройки окружения.");if(e.camera!==void 0&&(!e.camera||!["orthographic","perspective"].includes(e.camera.projection)||!Qt(e.camera.fov,15,100)))return St("Некорректная камера. FOV должен быть от 15° до 100°.");if(e.camera){const o=Aa(e.camera);if(!["adaptive","fixed","horizontal","player"].includes(o.follow)||Object.entries(Cf).some(([l,[c,h]])=>!Qt(o[l],c,h))||o.near>=o.far||o.distance>=o.far)return St("Некорректные параметры камеры: проверьте размеры, слежение и дальность видимости.")}const n=new Set;let i=0;for(const o of e.textures){if(!o||!on(o.id)||!on(o.name)||n.has(o.id)||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(o.data)||o.data.length>4e6)return St("Некорректная текстура. Поддерживаются PNG, JPEG и WebP до 3 МБ.");n.add(o.id),i+=o.data.length}if(i>16e6)return St("Общий размер текстур превышает 12 МБ.");if(e.nodes.filter(o=>o?.light&&o.visible&&o.light.intensity>0&&o.light.shadows).length>6)return St("Одновременно поддерживается до 6 источников с тенями. Отключите тени у остальных.");const r=new Set,a=new Set;if(e.groups!==void 0){if(!Array.isArray(e.groups)||e.groups.length>500)return St("Некорректный список групп.");for(const o of e.groups){if(!o||!on(o.id)||!on(o.name)||a.has(o.id))return St("Некорректная или повторяющаяся группа.");a.add(o.id)}}for(const o of e.nodes){if(!o||!on(o.id)||r.has(o.id)||!on(o.name)||!["source","prefab","box","sphere","plane","point-light","spot-light","model","camera"].includes(o.kind)||!["architecture","props","lights","details"].includes(o.layer))return St("Некорректный или повторяющийся объект сцены.");if(r.add(o.id),a.has(o.id)||o.groupId!==void 0&&!a.has(o.groupId))return St("Объект ссылается на неизвестную группу или имеет конфликтующий ID.");if(typeof o.visible!="boolean"||typeof o.locked!="boolean")return St("Некорректное состояние объекта.");if(o.gameId!==void 0&&!on(o.gameId))return St("Некорректная игровая привязка.");for(const l of["position","rotation","scale"]){const c=o.transform?.[l];if(!Array.isArray(c)||c.length!==3||!c.every(h=>Qt(h,l==="scale"?.01:-1e3,l==="scale"?100:1e3)))return St("Координаты должны быть конечными числами; масштаб — от 0,01 до 100.")}if(["source","model","prefab"].includes(o.kind)&&!on(o.asset,200))return St("Не указан ресурс объекта.");if(o.folder!==void 0&&!on(o.folder))return St("Некорректная папка.");if(o.components!==void 0&&(!Array.isArray(o.components)||o.components.length>32||o.components.some(l=>!l||!on(l.type)||!l.values||typeof l.values!="object"||Object.values(l.values).some(c=>!["string","boolean","number"].includes(typeof c)||typeof c=="number"&&!Number.isFinite(c)))))return St("Некорректные компоненты.");if(o.surface){const l=o.surface;if(!l||!kc(l.color)||!Qt(l.roughness,0,1)||!Qt(l.metalness,0,1)||!Qt(l.repeat,.1,20)||!(Pf.includes(l.texture)||n.has(l.texture)||/^asset:[a-zA-Z0-9_-]+$/.test(l.texture)))return St("Некорректный материал объекта.")}if(o.kind.endsWith("-light")){const l=o.light;if(!l||!kc(l.color)||!Qt(l.intensity,0,150)||!Qt(l.range,.1,30)||!Qt(l.angle,5,85)||!Qt(l.penumbra,0,1)||typeof l.shadows!="boolean")return St("Некорректный источник света.")}}if(e.activeCamera&&!e.nodes.some(o=>o.id===e.activeCamera&&o.kind==="camera"))return St("Активная камера отсутствует в сцене.");if(e.moduleData&&JSON.stringify(e.moduleData).length>1e6)return St("Данные модулей превышают 1 МБ.");for(const o of a)if(!e.nodes.some(l=>l.groupId===o))return St("Группа не содержит объектов.");return structuredClone(e)}function Bc(s="Новая сцена",e="empty-3d"){return{format:"shelter-scene",version:2,id:crypto.randomUUID(),template:e,name:s,units:"m",nodes:[],textures:[],camera:{...Wl,follow:"fixed"},environment:{time:720,haze:0,exposure:1.3,flashlight:!1}}}function qu(s,e,t=""){return`shelter:${s}:${e}:${t}`}const ma=20,If=["mega","rocket","shotgun","auto","rifle","armor","health","shells","bullets","rounds","rockets"],Nf=["floor","wall","metal","stair","rail","crate","pillar"],Le=(s=0,e=0,t=0)=>({x:s,y:e,z:t});function Df(s){const[e,t,n]=s.transform.position,[i,r,a]=s.transform.scale;return{min:Le(e-i/2,t-r/2,n-a/2),max:Le(e+i/2,t+r/2,n+a/2)}}const zs=(s,e)=>s.components?.find(t=>t.type===e);function Uf(s,e,t=2.5){const n=e.y-s.y,i=Math.max(n,0)+t,r=Math.sqrt(2*ma*i),a=r/ma+Math.sqrt(2*(i-n)/ma),o=e.x-s.x,l=e.z-s.z;return Le(o/a,r,l/a)}function Yu(s){const e=s.moduleData?.spire;if(!e||!Number.isFinite(e.size)||!Number.isFinite(e.lavaY)||!Number.isFinite(e.killY))throw new Error("Шпиль: в сцене нет параметров арены.");const t=[],n=[],i=[],r=[];let a;for(const o of s.nodes){const l=zs(o,"spire.solid"),c=zs(o,"spire.jumppad"),h=zs(o,"spire.spawn"),d=zs(o,"spire.pickup"),u=Df(o),f=Le((u.min.x+u.max.x)/2,u.min.y,(u.min.z+u.max.z)/2);if(l&&t.push({...u,style:String(l.values.style)}),zs(o,"spire.lava")&&(a=u),c){const g=Le(Number(c.values.tx),Number(c.values.ty),Number(c.values.tz));n.push({box:{min:Le(u.min.x,u.min.y,u.min.z),max:Le(u.max.x,u.max.y+.4,u.max.z)},center:f,target:g,launch:Uf(f,g)})}h&&i.push({pos:f,yaw:Number(h.values.yaw)*Math.PI/180}),d&&r.push({kind:String(d.values.item),pos:f})}if(!a)throw new Error("Шпиль: на арене нет лавы.");if(i.length<8)throw new Error("Шпиль: нужно не меньше 8 точек появления.");if(!t.length)throw new Error("Шпиль: на арене нет блоков.");return{size:e.size,lavaY:e.lavaY,killY:e.killY,solids:t,lava:a,pads:n,spawns:i,items:r}}const ki=(s,e)=>s.min.x<e.max.x&&s.max.x>e.min.x&&s.min.y<e.max.y&&s.max.y>e.min.y&&s.min.z<e.max.z&&s.max.z>e.min.z;function Xl(s,e,t,n=1/0){let i=0,r=n;for(const a of["x","y","z"]){const o=s[a],l=e[a],c=t.min[a],h=t.max[a];if(Math.abs(l)<1e-9){if(o<c||o>h)return 1/0;continue}let d=(c-o)/l,u=(h-o)/l;if(d>u&&([d,u]=[u,d]),i=Math.max(i,d),r=Math.min(r,u),i>r)return 1/0}return i}function Ms(s,e,t,n=200){let i=n,r=Le();for(const a of s.solids){const o=Xl(e,t,a,i);o<i&&(i=o,r=Ff(a,e.x+t.x*o,e.y+t.y*o,e.z+t.z*o))}return{t:i,normal:r}}function Ff(s,e,t,n){return[[Math.abs(e-s.min.x),Le(-1,0,0)],[Math.abs(e-s.max.x),Le(1,0,0)],[Math.abs(t-s.min.y),Le(0,-1,0)],[Math.abs(t-s.max.y),Le(0,1,0)],[Math.abs(n-s.min.z),Le(0,0,-1)],[Math.abs(n-s.max.z),Le(0,0,1)]].reduce((r,a)=>a[0]<r[0]?a:r)[1]}function Ku(s,e){return Le(Math.max(s.min.x,Math.min(s.max.x,e.x)),Math.max(s.min.y,Math.min(s.max.y,e.y)),Math.max(s.min.z,Math.min(s.max.z,e.z)))}const Qa=8,Of=10,zc=1,kf=6,Bf=2.5,zf=7,ga=.55,On=.35,Rs=1.75,$u=1.15,ri=.3,Gc=Rs-ri/2-.05,Ur=Rs-$u,Gf=.5,Hf=6,Vf=2,Hc=10,Wf=.8,Xf=1,qf=3.75,Yf=4,Vc=.45,Kf=.15,$f=.06,Jf=.6,xa=1/120,Wc=s=>({pos:{...s},vel:Le(),onGround:!1,crouch:!1,slide:0,slideCooldown:0,slideArmed:!1,crouchHeld:!1,lean:0}),Rn=s=>s?$u:Rs,Zf=s=>s.slide>0?2:s.crouch?1:0,Ei=(s,e=0,t=Rs)=>({min:Le(s.x-On,s.y+e,s.z-On),max:Le(s.x+On,s.y+e+t,s.z+On)}),Qf=(s,e=0)=>Le(-Math.sin(s)*Math.cos(e),Math.sin(e),-Math.cos(s)*Math.cos(e)),Ju=s=>Le(Math.cos(s),0,-Math.sin(s)),jf=s=>Math.hypot(s.vel.x,s.vel.z);function qo(s,e){for(const t of s.solids)if(ki(e,t))return t}function ja(s,e,t,n,i,r){const a=s.x*e+s.z*t,o=n-a;if(o<=0)return;const l=Math.min(i*r*n,o);s.x+=l*e,s.z+=l*t}function ep(s,e){const t=Math.hypot(s.x,s.z);if(t<1e-4){s.x=s.z=0;return}const n=Math.max(t,Bf)*kf*e,i=Math.max(0,t-n)/t;s.x*=i,s.z*=i}function tp(s,e){const t=Math.hypot(s.x,s.z);if(t<1e-4)return 0;const n=Math.max(0,t-qf*e);return s.x*=n/t,s.z*=n/t,n}function ms(s,e,t,n){if(n===0)return!1;e.pos[t]+=n;const i=Rn(e.crouch);let r=!1;for(const a of s.solids){const o=Ei(e.pos,0,i);if(ki(o,a))if(r=!0,t==="y")e.pos.y=n>0?a.min.y-i-1e-4:a.max.y+1e-4;else{const l=On+1e-4;e.pos[t]=n>0?a.min[t]-l:a.max[t]+l}}return r}function np(s,e,t,n){const i={...e.pos},r=ms(s,e,"x",t),a=ms(s,e,"z",n);if(!(r||a)||!e.onGround)return{hitX:r,hitZ:a};const o={...e.pos};if(e.pos={...i},qo(s,Ei(e.pos,ga,Rn(e.crouch))))return e.pos=o,{hitX:r,hitZ:a};e.pos.y+=ga;const l=ms(s,e,"x",t),c=ms(s,e,"z",n);ms(s,e,"y",-ga);const h=(e.pos.x-i.x)**2+(e.pos.z-i.z)**2,d=(o.x-i.x)**2+(o.z-i.z)**2;return h<=d+1e-8?(e.pos=o,{hitX:r,hitZ:a}):{hitX:l,hitZ:c}}function Xc(s,e,t){const n={min:Le(e.x-On,e.y-t,e.z-On),max:Le(e.x+On,e.y,e.z+On)};let i=-1/0;for(const r of s.solids)ki(n,r)&&r.max.y<=e.y+.001&&(i=Math.max(i,r.max.y));return i}function ip(s,e,t,n){if(t&&!e.crouch){e.crouch=!0,e.onGround||(e.pos.y+=Ur,n.tuck=Ur);return}if(!(t||!e.crouch)){if(!e.onGround){const i=Le(e.pos.x,e.pos.y-Ur,e.pos.z);if(!qo(s,Ei(i,0,Rs))){e.pos=i,e.crouch=!1,n.tuck=-Ur,e.slide=0;return}}qo(s,Ei(e.pos,0,Rs))||(e.crouch=!1,e.slide=0)}}function sp(s,e,t,n=xa){const i={jumped:!1,landed:0,pad:-1,lava:!1,out:!1,slide:!1,tuck:0},r=Math.max(-1,Math.min(1,t.forward)),a=Math.max(-1,Math.min(1,t.strafe)),o=Math.sin(t.yaw),l=Math.cos(t.yaw);let c=-o*r+l*a,h=-l*r-o*a;const d=Math.hypot(c,h);d>1e-6&&(c/=d,h/=d);const u=!!t.crouch,f=u&&!e.crouchHeld;e.crouchHeld=u,(f||!e.onGround)&&(e.slideArmed=!0),e.slideCooldown=Math.max(0,e.slideCooldown-n),ip(s,e,u,i);const g=jf(e);if(e.onGround&&e.crouch&&e.slide<=0&&e.slideArmed&&e.slideCooldown<=0&&g>=Hf){const v=g>=Hc?g:Math.min(Hc,g+Vf);e.vel.x*=v/g,e.vel.z*=v/g,e.slide=Wf,e.slideCooldown=Xf,i.slide=!0}e.onGround&&(e.slideArmed=!1);const x=e.onGround&&e.slide<=0,m=x?Math.sign(t.lean??0):0,p=n/Kf;e.lean=e.lean<m?Math.min(m,e.lean+p):Math.max(m,e.lean-p);const M=d>1e-6?Qa*(e.crouch?Gf:1)*(m?Jf:1):0;if(e.onGround&&t.jump&&(e.vel.y=zf,e.onGround=!1,e.slide=0,i.jumped=!0),e.onGround&&e.slide>0){e.slide-=n;const v=tp(e.vel,n);ja(e.vel,c,h,d>1e-6?Qa:0,zc,n),(e.slide<=0||v<Yf)&&(e.slide=0)}else e.onGround?(ep(e.vel,n),ja(e.vel,c,h,M,Of,n)):ja(e.vel,c,h,d>1e-6?Qa:0,zc,n);const b=e.onGround;e.vel.y-=ma*n;const{hitX:_,hitZ:S}=np(s,e,e.vel.x*n,e.vel.z*n);_&&(e.vel.x=0),S&&(e.vel.z=0);const E=e.vel.y;if(ms(s,e,"y",e.vel.y*n))e.vel.y<0&&(b||(i.landed=-E),e.onGround=!0),e.vel.y=0;else if(b&&e.vel.y<=0&&!i.jumped){const v=Xc(s,e.pos,ga+.05);v>-1/0?(e.pos.y=v+1e-4,e.vel.y=0,e.onGround=!0):e.onGround=!1}else e.onGround=!1;e.onGround&&Xc(s,e.pos,.02)===-1/0&&(e.onGround=!1),e.onGround||(e.slide=0);const C=Ei(e.pos,0,Rn(e.crouch));return s.pads.forEach((v,T)=>{i.pad<0&&ki(C,v.box)&&(e.vel={...v.launch},e.onGround=!1,e.slide=0,i.pad=T)}),(ki(C,s.lava)||e.pos.y<s.lavaY&&ki({min:{...s.lava.min,y:-1/0},max:s.lava.max},C))&&(i.lava=!0),(e.pos.y<s.killY||Math.abs(e.pos.x)>s.size||Math.abs(e.pos.z)>s.size)&&(i.out=!0),i}function Zu(s,e){const t=Math.abs(e.lean);if(t<.001)return 0;const n=Math.sign(e.lean),i=Ju(e.yaw),r=Le(i.x*n,0,i.z*n),a=Le(e.pos.x,e.pos.y+Rn(e.crouch)-ri/2,e.pos.z),o=Ms(s,a,r,Vc+ri).t;return n*Math.max(0,Math.min(Vc*t,o-ri/2-.02))}function Qu(s,e){const t=Zu(s,e),n=Ju(e.yaw);return Le(e.pos.x+n.x*t,e.pos.y+Rn(e.crouch)-ri/2-$f*Math.abs(e.lean),e.pos.z+n.z*t)}function ju(s,e){const t=Qu(s,e);return Le(t.x,t.y-.05,t.z)}function Yo(s,e,t=0){const n=Rn(e.crouch),i=Qu(s,e),r=e.pos.y+n*.52,a=i.y-ri/2,o=Le((e.pos.x+i.x)/2,0,(e.pos.z+i.z)/2),l=On+t,c=ri/2+t*.5;return[{box:{min:Le(e.pos.x-l,e.pos.y,e.pos.z-l),max:Le(e.pos.x+l,r,e.pos.z+l)},head:!1},{box:{min:Le(o.x-l,r,o.z-l),max:Le(o.x+l,a,o.z+l)},head:!1},{box:{min:Le(i.x-c,a,i.z-c),max:Le(i.x+c,i.y+ri/2+t*.5,i.z+c)},head:!0}]}function _a(s,e,t,n=1/0){let i=n,r=!1;for(const a of s){const o=Xl(e,t,a.box,i);o<i&&(i=o,r=a.head)}return{t:i,head:r}}const Vt=0,zi=1,nn=2,_n=3,dn=4,ar=[Vt,zi,nn,_n,dn],bt=[{id:0,name:"Бластер",kind:"Стартовое",interval:.1,damage:8,pellets:1,spread:.012,ammoMax:1/0,mag:0,reload:0,pickup:0},{id:1,name:"Дробовик",kind:"Ближний бой",interval:1,damage:7,pellets:11,spread:.075,ammoMax:30,mag:0,reload:0,pickup:10},{id:2,name:"Автомат",kind:"Средняя дистанция",interval:.1,damage:12,pellets:1,spread:.006,ammoMax:90,mag:30,reload:2,pickup:60},{id:3,name:"Винтовка",kind:"Дальняя дистанция",interval:1.3,damage:75,pellets:1,spread:0,ammoMax:15,mag:5,reload:2.6,pickup:10},{id:4,name:"Ракетница",kind:"Урон по площади",interval:.8,damage:100,pellets:1,spread:0,ammoMax:25,mag:0,reload:0,pickup:8}],rp=2,ti=s=>bt[s].mag>0,qc={2:1.3,3:4},Yc=.2,ed=.09,td=.6;function ap(s,e){if(s===nn){const t=bt[nn].spread*(1-.5*e.aim)*(e.crouch?.8:1);return e.airborne?t+.05:t}return s===_n?(e.aim>.9?0:.08)+(e.airborne?.12:0):bt[s].spread}function op(s,e){if(s!==nn||e<=0)return[0,0];const t=Math.min(e,9)*.0068+Math.max(0,e-9)*.0012,n=e<9?Math.sin(e*.9)*.0012:e<18?(e-9)*.0026:9*.0026-(e-18)*.0034;return[t,n]}const lp=.35,nd=24,Dn=.15,Kc=3.2,cp=90,hp=.5,id=.12,mr=100,up=200,$c=100,dp=2/3,fp=2,Jc=10,Zc=600,pp=[10,20,30],mp=8,sd=.2,gp=1.1,rd={mega:{respawn:30,name:"Мега-бонус"},rocket:{respawn:20,name:"Ракетница"},shotgun:{respawn:20,name:"Дробовик"},auto:{respawn:20,name:"Автомат"},rifle:{respawn:30,name:"Винтовка"},armor:{respawn:25,name:"Броня"},health:{respawn:20,name:"Аптечка"},shells:{respawn:20,name:"Патроны дробовика"},bullets:{respawn:20,name:"Патроны автомата"},rounds:{respawn:25,name:"Патроны винтовки"},rockets:{respawn:20,name:"Ракеты"}},xs=()=>({health:mr,armor:0,owned:[!0,!1,!1,!1,!1],ammo:[1/0,0,0,0,0],mag:[0,0,0,0,0]}),Qc=(s,e)=>s.ammo[e]+s.mag[e];function ad(s,e){const t=bt[e].mag-s.mag[e],n=Math.min(t,s.ammo[e]);return!ti(e)||n<=0?!1:(s.mag[e]+=n,s.ammo[e]-=n,!0)}const od=(s,e)=>ti(e)&&s.mag[e]<bt[e].mag&&s.ammo[e]>0;function ld(s,e){const t=(i,r)=>{const a=s.ammo[i];return s.ammo[i]=Math.min(bt[i].ammoMax,s.ammo[i]+r),s.ammo[i]>a},n=i=>{const r=s.owned[i];return s.owned[i]=!0,!r&&ti(i)?(s.mag[i]=Math.min(bt[i].mag,bt[i].pickup),t(i,bt[i].pickup-s.mag[i])||!0):t(i,bt[i].pickup)||!r};switch(e){case"health":return s.health>=mr?!1:(s.health=Math.min(mr,s.health+25),!0);case"mega":return s.health=Math.min(up,s.health+100),!0;case"armor":return s.armor>=$c?!1:(s.armor=Math.min($c,s.armor+50),!0);case"shotgun":return n(zi);case"auto":return n(nn);case"rifle":return n(_n);case"rocket":return n(dn);case"shells":return t(zi,10);case"bullets":return t(nn,30);case"rounds":return t(_n,5);case"rockets":return t(dn,5)}}function xp(s,e){const t=Math.min(s.armor,Math.round(e*dp));return s.armor-=t,s.health-=e-t,e-t}const cd=s=>s>=Kc?0:Math.round(cp*(1-s/Kc));function hd(s,e,t){let n=s>>>0||1;const i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),r=[];for(let a=0;a<e;a++){const o=i()*Math.PI*2,l=(e>1&&a===0?0:Math.sqrt(i()))*t;r.push([Math.cos(o)*l,Math.sin(o)*l])}return r}function jc(s){if(!s.length)return;const e=[...s].sort((t,n)=>n.frags-t.frags);return e.length===1||e[0].frags>e[1].frags?e[0].id:void 0}function _p(s,e){const t=ud(s);if(!e.includes(t))return t;for(let n=2;;n++){const i=`${t} (${n})`;if(!e.includes(i))return i}}function ud(s){return s.replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,16)||"Боец"}const eo=["#ff6b3d","#3dc8ff","#9cff3d","#ff3df0","#ffd23d","#7a5cff","#3dffb0","#ff3d6e"],or=3,Pt=s=>Math.round(s*100)/100,Sn=s=>[Pt(s.x),Pt(s.y),Pt(s.z)],Zt=s=>({x:s[0],y:s[1],z:s[2]}),Fr=s=>Array.isArray(s)&&s.length===3&&s.every(e=>typeof e=="number"&&Number.isFinite(e)&&Math.abs(e)<1e4),vp=.1,yp=8,Mp=40,Ki=(s,e)=>Le(s.x-e.x,s.y-e.y,s.z-e.z),Di=s=>Math.hypot(s.x,s.y,s.z),Bi=s=>{const e=Di(s)||1;return Le(s.x/e,s.y/e,s.z/e)},eh=(s,e)=>Le(s.y*e.z-s.z*e.y,s.z*e.x-s.x*e.z,s.x*e.y-s.y*e.x),bi=(s,e,t=1)=>Le(s.x+e.x*t,s.y+e.y*t,s.z+e.z*t);function dd(s,e){const t=Bi(s),n=Math.abs(t.y)>.95?Le(1,0,0):Le(0,1,0),i=Bi(eh(t,n)),r=eh(i,t);return e.map(([a,o])=>Bi(bi(bi(t,i,a),r,o)))}function Ko(s,e,t){const n=bt[e];return n.pellets===1?[Bi(s)]:dd(s,hd(t,n.pellets,n.spread))}function bp(s,e,t,n){const[[i,r]]=hd(n,1,e);return dd(s,[[i+t[1],r+t[0]]])[0]}class Sp{time=0;phase="playing";matchStart=0;overAt=0;winner=null;players=new Map;items;rockets=[];events=[];arena;options;random;nextRocket=1;constructor(e,t,n=Math.random){this.arena=e,this.options=t,this.random=n,this.items=e.items.map(i=>({spot:i,availableAt:0}))}roster(){return[...this.players.values()].map(({id:e,name:t,color:n})=>({id:e,name:t,color:n}))}join(e,t){const n=this.players.get(e);if(n)return n;if(this.players.size>=this.options.maxPlayers)return"full";const i=[...this.players.values()].map(o=>o.color),r=eo.find(o=>!i.includes(o))||eo[this.players.size%eo.length],a={id:e,name:_p(t,[...this.players.values()].map(o=>o.name)),color:r,pos:Le(),vel:Le(),yaw:0,pitch:0,stance:0,lean:0,weapon:0,loadout:xs(),alive:!1,life:0,respawnAt:this.time,frags:0,deaths:0,lastFire:[-9,-9,-9,-9,-9],heat:0,overheated:!1,reloading:null,ack:0,history:[],joined:this.time,lastPose:this.time};return this.players.set(e,a),a}leave(e){this.players.delete(e),this.rockets=this.rockets.filter(t=>t.by!==e),this.checkSuddenDeath()}pose(e,t){const n=this.players.get(e);if(!n||!n.alive||t.life!==n.life||!Fr(t.p)||!Fr(t.v)||!Number.isFinite(t.yaw)||!Number.isFinite(t.pitch))return;const i=Zt(t.p);if(Di(Ki(i,n.pos))>yp+Mp*(this.time-n.lastPose))return;n.pos=i,n.lastPose=this.time,n.vel=Zt(t.v),n.yaw=t.yaw,n.pitch=Math.max(-1.55,Math.min(1.55,t.pitch)),n.stance=t.s===1||t.s===2?t.s:0,n.lean=Number.isFinite(t.l)?Math.max(-1,Math.min(1,t.l)):0,t.w in bt&&n.loadout.owned[t.w]&&(n.weapon=t.w),n.reloading&&n.reloading.w!==n.weapon&&(n.reloading=null);const r=Ei(n.pos,0,Rn(n.stance>0));ki(r,this.arena.lava)?this.kill(n,n,"lava"):(n.pos.y<this.arena.killY||Math.abs(n.pos.x)>this.arena.size||Math.abs(n.pos.z)>this.arena.size)&&this.kill(n,n,"fall")}fire(e,t){const n=this.players.get(e);if(!n||(Number.isFinite(t.seq)&&(n.ack=Math.max(n.ack,t.seq)),!n.alive||this.phase==="over"||!(t.w in bt)||!Fr(t.o)||!Fr(t.d)||Di(Zt(t.d))<.5))return;const i=bt[t.w],r=n.loadout,a=ti(t.w);if(!r.owned[t.w]||(a?r.mag[t.w]:r.ammo[t.w])<=0||this.time-n.lastFire[t.w]<i.interval*.75||a&&n.reloading?.w===t.w)return;if(t.w===Vt){if(n.overheated)return;n.heat+=ed,n.heat>=1.15&&(n.overheated=!0)}n.lastFire[t.w]=this.time,a?r.mag[t.w]--:t.w!==Vt&&r.ammo[t.w]--;const o=ju(this.arena,this.posture(n));let l=Zt(t.o);const c=Di(Ki(l,o));(c>2.5||c>.01&&Ms(this.arena,o,Bi(Ki(l,o)),c).t<c)&&(l=o);const h=Bi(Zt(t.d));if(t.w===dn){this.launchRocket(n,l,h);return}const d=Number.isFinite(t.seed)?t.seed>>>0:1,u=Math.max(0,Math.min(sd,Number(t.lag)||0));this.events.push({e:"shot",by:e,w:t.w,o:Sn(l),d:Sn(h),seed:d});const f=new Map,g=new Map;for(const x of this.players.values())x!==n&&x.alive&&g.set(x,this.hitboxes(this.rewind(x,this.time-u)));for(const x of Ko(h,t.w,d)){let p=Ms(this.arena,l,x,120).t,M,b=!1;for(const[_,S]of g){const E=_a(S,l,x,p);E.t<p&&(p=E.t,M=_,b=E.head)}if(M){const _=f.get(M)||{amount:0,dir:x,head:!1};_.amount+=i.damage*(b?rp:1),_.head||=b,f.set(M,_)}}for(const[x,m]of f)this.hurt(x,n,m.amount,m.dir,l,t.w,m.head)}reload(e,t){const n=this.players.get(e);!n||!n.alive||!(t.w in bt)||n.weapon!==t.w||n.reloading||!od(n.loadout,t.w)||(n.reloading={w:t.w,until:this.time+bt[t.w].reload},this.events.push({e:"reload",id:e,w:t.w}))}step(e){this.time+=e;for(const t of this.players.values())for(!t.alive&&this.time>=t.respawnAt&&this.phase!=="over"&&this.respawn(t),t.alive&&t.loadout.health>mr&&(t.loadout.health=Math.max(mr,t.loadout.health-e)),t.heat=Math.max(0,t.heat-td*e),t.overheated&&t.heat<=.1&&(t.overheated=!1),t.reloading&&this.time>=t.reloading.until&&(ad(t.loadout,t.reloading.w),t.reloading=null),t.history.push({t:this.time,x:t.pos.x,y:t.pos.y,z:t.pos.z,crouch:t.stance>0,lean:t.lean,yaw:t.yaw});t.history.length&&t.history[0].t<this.time-1;)t.history.shift();if(this.stepRockets(e),this.stepItems(),this.phase==="playing"&&this.time-this.matchStart>=this.options.timeLimit){const t=jc([...this.players.values()]);t?this.end(t):(this.phase="sudden",this.events.push({e:"match",phase:"sudden",winner:null}))}this.phase==="over"&&this.time-this.overAt>=Jc&&this.newMatch()}snapshot(){const e=this.phase==="playing"?Math.max(0,this.options.timeLimit-(this.time-this.matchStart)):0,t=[...this.players.values()].map(n=>{const i=n.loadout;return[n.id,Pt(n.pos.x),Pt(n.pos.y),Pt(n.pos.z),Pt(n.yaw),Pt(n.pitch),n.weapon,Math.ceil(i.health),Math.ceil(i.armor),n.alive?1:0,n.frags,n.deaths,[i.ammo[1],i.ammo[2],i.ammo[3],i.ammo[4]],[i.mag[2],i.mag[3]],i.owned.reduce((r,a,o)=>a?r|1<<o:r,0),n.ack,n.life,n.stance,Pt(n.lean)]});return{k:"snap",t:Pt(this.time),phase:this.phase,left:Pt(e),winner:this.winner,restart:this.phase==="over"?Pt(Math.max(0,Jc-(this.time-this.overAt))):0,items:this.items.map(n=>n.availableAt<=this.time?"1":"0").join(""),players:t}}drain(){const e=this.events;return this.events=[],e}posture(e){return{pos:e.pos,crouch:e.stance>0,lean:e.lean,yaw:e.yaw}}rewind(e,t){const n=e.history,i=c=>({pos:Le(c.x,c.y,c.z),crouch:c.crouch,lean:c.lean,yaw:c.yaw});if(!n.length||t>=n[n.length-1].t)return this.posture(e);if(t<=n[0].t)return i(n[0]);let r=n.length-1;for(;r>0&&n[r-1].t>t;)r--;const a=n[r-1],o=n[r],l=(t-a.t)/(o.t-a.t||1);return{pos:Le(a.x+(o.x-a.x)*l,a.y+(o.y-a.y)*l,a.z+(o.z-a.z)*l),crouch:l<.5?a.crouch:o.crouch,lean:a.lean+(o.lean-a.lean)*l,yaw:l<.5?a.yaw:o.yaw}}hitboxes(e){return Yo(this.arena,e,vp)}launchRocket(e,t,n){const i=this.nextRocket++;this.rockets.push({id:i,by:e.id,pos:{...t},dir:n,born:this.time}),this.events.push({e:"rocket",id:i,by:e.id,o:Sn(t),d:Sn(n)})}stepRockets(e){for(const t of[...this.rockets]){const n=nd*e,i=n+Dn;let r=Ms(this.arena,t.pos,t.dir,i).t,a;for(const o of this.players.values())if(!(!o.alive||o.id===t.by))for(const{box:l}of this.hitboxes(this.posture(o))){const c=Xl(t.pos,t.dir,{min:bi(l.min,Le(-Dn,-Dn,-Dn)),max:bi(l.max,Le(Dn,Dn,Dn))},r);c<r&&(r=c,a=o)}if(r<i){this.explode(t,bi(t.pos,t.dir,Math.max(0,r-Dn-.05)),a);continue}t.pos=bi(t.pos,t.dir,n),this.time-t.born>10&&(this.rockets=this.rockets.filter(o=>o!==t))}}explode(e,t,n){this.rockets=this.rockets.filter(r=>r!==e),this.events.push({e:"boom",id:e.id,p:Sn(t),by:e.by});const i=this.players.get(e.by);if(i){n&&this.hurt(n,i,bt[dn].damage,e.dir,t,dn);for(const r of[...this.players.values()]){if(!r.alive||r===n)continue;const a=Rn(r.stance>0),o=Ei(r.pos,0,a),l=Di(Ki(Ku(o,t),t)),c=cd(l);if(!c)continue;const h=Le(r.pos.x,r.pos.y+a/2,r.pos.z),d=Ki(h,t);this.hurt(r,i,c,Di(d)<.01?Le(0,1,0):Bi(d),t,dn)}}}hurt(e,t,n,i,r,a,o=!1){if(!e.alive||this.phase==="over")return;const l=bi(Le(),i,Math.min(n,200)*id),c=e===t?Math.round(n*hp):n;xp(e.loadout,c),e.vel=bi(e.vel,l),this.events.push({e:"hurt",to:e.id,by:t.id,amount:c,knock:Sn(l),from:Sn(r)}),e!==t&&this.events.push(o?{e:"hit",by:t.id,to:e.id,amount:c,head:1}:{e:"hit",by:t.id,to:e.id,amount:c}),e.loadout.health<=0&&this.kill(e,t,a,o)}kill(e,t,n,i=!1){!e.alive||this.phase==="over"||(e.alive=!1,e.deaths++,e.respawnAt=this.time+fp,e.loadout.health=Math.min(e.loadout.health,0),e===t?e.frags--:t.frags++,this.events.push(i?{e:"kill",killer:t.id,victim:e.id,w:n,head:1}:{e:"kill",killer:t.id,victim:e.id,w:n}),this.phase==="playing"&&e!==t&&t.frags>=this.options.fragLimit?this.end(t.id):this.checkSuddenDeath())}checkSuddenDeath(){if(this.phase!=="sudden")return;const e=jc([...this.players.values()]);e&&this.end(e)}end(e){this.phase="over",this.winner=e,this.overAt=this.time,this.rockets=[],this.events.push({e:"match",phase:"over",winner:e})}newMatch(){this.phase="playing",this.winner=null,this.matchStart=this.time,this.rockets=[];for(const e of this.items)e.availableAt=0;for(const e of this.players.values())e.frags=0,e.deaths=0,e.alive=!1,this.respawn(e);this.events.push({e:"match",phase:"playing",winner:null})}respawn(e){const t=[...this.players.values()].filter(r=>r!==e&&r.alive),n=this.arena.spawns.map(r=>({s:r,d:t.length?Math.min(...t.map(a=>Di(Ki(a.pos,r.pos)))):this.random()*100})).sort((r,a)=>a.d-r.d),i=n[Math.floor(this.random()*Math.min(3,n.length))].s;e.pos={...i.pos},e.lastPose=this.time,e.vel=Le(),e.yaw=i.yaw,e.pitch=0,e.stance=0,e.lean=0,e.weapon=0,e.loadout=xs(),e.alive=!0,e.life++,e.history=[],e.lastFire=[-9,-9,-9,-9,-9],e.heat=0,e.overheated=!1,e.reloading=null,this.events.push({e:"spawn",id:e.id,p:Sn(e.pos),yaw:Pt(i.yaw),life:e.life})}stepItems(){for(const e of this.items)if(!(e.availableAt>this.time))for(const t of this.players.values()){if(!t.alive)continue;const n=t.pos.x-e.spot.pos.x,i=t.pos.z-e.spot.pos.z,r=t.pos.y-e.spot.pos.y;if(!(Math.hypot(n,i)>gp||r<-1.2||r>1.5)&&ld(t.loadout,e.spot.kind)){e.availableAt=this.time+rd[e.spot.kind].respawn,this.events.push({e:"pick",id:t.id,item:this.items.indexOf(e)});break}}}}const th=.1,wp=1/30,Ep=2,Tp={mega:"+100 здоровья",rocket:"Ракетница",shotgun:"Дробовик",auto:"Автомат",rifle:"Винтовка",armor:"+50 брони",health:"+25 здоровья",shells:"+10 патронов",bullets:"+30 патронов",rounds:"+5 патронов",rockets:"+5 ракет"},nh=["blaster","shotgun","auto","rifle","rocket"],Ap={shotgun:zi,auto:nn,rifle:_n,rocket:dn},ih=[[.004,0],[.045,0],[0,0],[.03,0],[.035,0]],sh=(s,e)=>Le(s.x-e.x,s.y-e.y,s.z-e.z),mi=(s,e,t)=>Le(s.x+e.x*t,s.y+e.y*t,s.z+e.z*t),rh=s=>Math.hypot(s.x,s.y,s.z);class Rp{id="";name="";color="";options=null;roster=new Map;connected=!1;body=Wc(Le());yaw=0;pitch=0;life=0;alive=!1;weapon=0;health=100;armor=0;frags=0;deaths=0;ammo=xs().ammo;mag=xs().mag;owned=xs().owned;heat=0;overheated=!1;reloading=null;aim=0;punch=[0,0];headFlash=0;phase="playing";left=0;winner=null;restart=0;items="";rtt=0;time=0;tracers=[];blasts=[];sparks=[];rockets=[];feed=[];sounds=[];notes=[];hitFlash=0;damageFlash=0;eyeOffset=Gc;damageFrom=null;killedBy=null;deathTime=0;muzzle=0;fell=!1;others=new Map;rows=[];pending=[];seq=0;nextFire=0;burst=0;lastShot=-9;boltUntil=0;reloadGrace=0;acc=0;poseTimer=0;pingTimer=0;arena;link;random;constructor(e,t,n=Math.random){this.arena=e,this.link=t,this.random=n}get posture(){return{pos:this.body.pos,crouch:this.body.crouch,lean:this.body.lean,yaw:this.yaw}}get eye(){return ju(this.arena,this.posture)}get view(){const e=this.eye;return Le(e.x,this.body.pos.y+this.eyeOffset,e.z)}get stance(){return Zf(this.body)}nameOf(e){return this.roster.get(e)?.name??"Боец"}colorOf(e){return this.roster.get(e)?.color??"#cccccc"}receive(e){switch(e.k){case"welcome":this.id=e.id,this.name=e.name,this.color=e.color,this.options=e.options,this.connected=!0;break;case"roster":{const t=new Set(this.roster.keys());this.roster=new Map(e.players.map(n=>[n.id,n]));for(const n of this.others.keys())this.roster.has(n)||this.others.delete(n);t.size&&e.players.some(n=>!t.has(n.id)&&n.id!==this.id)&&this.sounds.push({name:"join"});break}case"snap":this.applySnapshot(e);break;case"ev":for(const t of e.list)this.applyEvent(t);break;case"pong":this.rtt=this.rtt?this.rtt*.7+(performance.now()-e.t)/1e3*.3:(performance.now()-e.t)/1e3;break}}applySnapshot(e){this.phase=e.phase,this.left=e.left,this.winner=e.winner,this.restart=e.restart,this.items=e.items,this.rows=e.players;for(const t of e.players){const[n,i,r,a,o,l,c,h,d,u,f,g,x,m,p,M,b,_,S]=t;if(n===this.id){this.health=h,this.armor=d,this.frags=f,this.deaths=g,this.owned=ar.map(T=>!!(p&1<<T)),this.pending=this.pending.filter(T=>T.seq>M);const C=T=>this.pending.filter(R=>R.w===T).length,v=[0,0,m[0],m[1],0];for(const T of ar)T===Vt||ti(T)&&(this.reloading||this.time<this.reloadGrace)||(this.ammo[T]=x[T-1]-(ti(T)?0:C(T)),ti(T)&&(this.mag[T]=v[T]-C(T)));u&&b>this.life&&this.spawn(Le(i,r,a),o,b);continue}const E=this.others.get(n)??{samples:[],weapon:0,alive:!1,frags:0,deaths:0,muzzle:0};for(E.weapon=c,E.alive=!!u,E.frags=f,E.deaths=g,E.samples.push({t:this.time,pos:Le(i,r,a),yaw:o,pitch:l,stance:_??0,lean:S??0});E.samples.length>2&&E.samples[0].t<this.time-1;)E.samples.shift();this.others.set(n,E)}}applyEvent(e){const t=this.id;switch(e.e){case"shot":{if(e.by===t)return;const n=this.others.get(e.by);n&&(n.muzzle=.07);const i=Zt(e.o);this.sounds.push({name:nh[e.w],pos:i});for(const r of Ko(Zt(e.d),e.w,e.seed))this.addTracer(i,r,e.by,!1,e.w);return}case"rocket":{if(e.by===t){const i=this.rockets.find(r=>r.own&&r.hostId===null);i&&(i.hostId=e.id);return}const n=this.others.get(e.by);n&&(n.muzzle=.07),this.rockets.push({hostId:e.id,by:e.by,pos:Zt(e.o),dir:Zt(e.d),own:!1,dead:!1,age:0}),this.sounds.push({name:"rocket",pos:Zt(e.o)});return}case"boom":{const n=this.rockets.find(i=>i.hostId===e.id&&i.by===e.by);if(n?.own&&n.dead)return;n&&(n.dead=!0),this.blast(Zt(e.p));return}case"hurt":if(e.to!==t)return;this.damageFlash=Math.min(1,.35+e.amount/80),this.damageFrom=Zt(e.from),this.sounds.push({name:"hurt"}),e.by!==t&&this.alive&&(this.body.vel.x+=e.knock[0],this.body.vel.y+=e.knock[1],this.body.vel.z+=e.knock[2],e.knock[1]>0&&(this.body.onGround=!1));return;case"hit":e.by===t&&(this.hitFlash=.18,e.head&&(this.headFlash=.3),this.sounds.push({name:e.head?"headshot":"hit"}));return;case"reload":{if(e.id===t)return;const n=this.views().find(i=>i.id===e.id);n&&this.sounds.push({name:"reload",pos:n.pos});return}case"kill":if(this.feed.unshift({killer:e.killer,victim:e.victim,w:e.w,head:!!e.head,age:0}),this.feed.length=Math.min(this.feed.length,5),e.victim===t)this.alive=!1,this.killedBy={killer:e.killer,w:e.w},this.deathTime=this.time,this.sounds.push({name:e.w==="lava"?"lava":"death"});else if(e.killer===t)this.sounds.push({name:"frag"}),this.note(`Фраг: ${this.nameOf(e.victim)}`);else{const n=this.others.get(e.victim);n&&(n.alive=!1)}return;case"spawn":if(e.id===t){this.spawn(Zt(e.p),e.yaw,e.life);return}{const n=this.others.get(e.id);n&&(n.samples=[{t:this.time,pos:Zt(e.p),yaw:e.yaw,pitch:0,stance:0,lean:0}],n.alive=!0)}return;case"pick":{const n=this.arena.items[e.item];if(!n)return;if(e.id!==t){this.sounds.push({name:"pickup",pos:n.pos});return}const i=Ap[n.kind];this.sounds.push({name:n.kind==="mega"?"mega":i!==void 0?"weapon":"pickup"}),this.note(Tp[n.kind]);const r=i!==void 0&&this.owned[i],a={health:this.health,armor:this.armor,owned:this.owned,ammo:this.ammo,mag:this.mag};ld(a,n.kind),this.health=a.health,this.armor=a.armor,i!==void 0&&!r&&this.selectWeapon(i);return}case"match":this.phase=e.phase,this.winner=e.winner,e.phase==="sudden"&&(this.sounds.push({name:"sudden"}),this.note("Внезапная смерть: решает следующий фраг лидера")),e.phase==="over"&&this.sounds.push({name:e.winner===t?"win":"lose"}),e.phase==="playing"&&(this.feed=[]);return}}spawn(e,t,n){this.body=Wc(e),this.body.onGround=!0,this.yaw=t,this.pitch=0,this.life=n,this.alive=!0,this.weapon=Vt,this.killedBy=null,this.fell=!1;const i=xs();this.ammo=i.ammo,this.mag=i.mag,this.owned=i.owned,this.heat=0,this.overheated=!1,this.reloading=null,this.aim=0,this.punch=[0,0],this.burst=0,this.boltUntil=0,this.pending=[],this.nextFire=this.time+.2,this.damageFlash=0,this.eyeOffset=Gc,this.sounds.push({name:"spawn"})}note(e){this.notes.unshift({text:e,age:0}),this.notes.length=Math.min(this.notes.length,3)}look(e,t){this.yaw-=e,this.pitch=Math.max(-1.5,Math.min(1.5,this.pitch-t))}selectWeapon(e){!this.owned[e]||this.weapon===e||e!==Vt&&Qc(this,e)<=0||(this.weapon=e,this.reloading=null,this.aim=0,this.burst=0,this.nextFire=Math.max(this.nextFire,this.time+.25),this.sounds.push({name:"weapon"}))}cycleWeapon(e){const t=ar.length;for(let n=1;n<t;n++){const i=((this.weapon+e*n)%t+t)%t;if(this.owned[i]&&(i===Vt||Qc(this,i)>0)){this.selectWeapon(i);return}}}reload(){const e=this.weapon;!this.alive||this.reloading||!od(this,e)||(this.reloading={w:e,until:this.time+bt[e].reload},this.aim=0,this.link.send({k:"reload",w:e}),this.sounds.push({name:"reload"}))}shotAge(){return this.time-this.lastShot}reloadLeft(){return this.reloading?Math.max(0,(this.reloading.until-this.time)/bt[this.reloading.w].reload):0}spread(){return ap(this.weapon,{airborne:!this.body.onGround,aim:this.aim,crouch:this.body.crouch})}zoom(){return 1+((qc[this.weapon]??1)-1)*this.aim}update(e,t){if(this.time+=e,this.decay(e),this.updateArms(e,t),this.connected&&this.alive&&!this.fell&&this.phase!=="over"){for(this.acc=Math.min(this.acc+e,.25);this.acc>=xa;){this.acc-=xa;const r=this.body.crouch,a=sp(this.arena,this.body,{...t,yaw:this.yaw},xa);if(this.eyeOffset-=a.tuck,a.slide?this.sounds.push({name:"slide"}):this.body.crouch!==r&&this.body.onGround&&this.sounds.push({name:"crouch"}),a.jumped&&this.sounds.push({name:"jump"}),a.landed>9&&this.sounds.push({name:"land"}),a.pad>=0&&this.sounds.push({name:"pad"}),a.lava||a.out){this.fell=!0;break}}t.fire&&this.fire()}const i=this.eye.y-this.body.pos.y;this.eyeOffset+=(i-this.eyeOffset)*Math.min(1,e*14),this.poseTimer+=e,this.connected&&this.alive&&this.poseTimer>=wp&&(this.poseTimer=0,this.link.send({k:"pose",life:this.life,p:Sn(this.body.pos),v:Sn(this.body.vel),yaw:Pt(this.yaw),pitch:Pt(this.pitch),w:this.weapon,s:this.stance,l:Pt(this.body.lean)})),this.pingTimer+=e,this.connected&&this.pingTimer>=Ep&&(this.pingTimer=0,this.link.send({k:"ping",t:performance.now()})),this.stepRockets(e)}updateArms(e,t){this.heat=Math.max(0,this.heat-td*e),this.overheated&&this.heat<=0&&(this.overheated=!1),this.reloading&&this.time>=this.reloading.until&&(ad(this,this.reloading.w),this.reloading=null,this.reloadGrace=this.time+this.rtt+.3);const n=this.alive&&!this.fell&&qc[this.weapon]!==void 0&&!this.reloading&&this.time>=this.boltUntil&&!!t.aim;this.aim=n?Math.min(1,this.aim+e/Yc):Math.max(0,this.aim-e/Yc*1.5),this.time-this.lastShot>lp&&(this.burst=0);const i=Math.exp(-e*9);this.punch=[this.punch[0]*i,this.punch[1]*i]}fire(){const e=this.weapon,t=bt[e],n=ti(e);if(this.time<this.nextFire||this.reloading||e===Vt&&this.overheated)return;if(e!==Vt&&(n?this.mag[e]:this.ammo[e])<=0){if(n&&this.ammo[e]>0){this.reload();return}this.nextFire=this.time+.4,this.sounds.push({name:"empty"}),this.cycleWeapon(-1);return}this.nextFire=this.time+t.interval,this.muzzle=.07,n?this.mag[e]--:e!==Vt&&this.ammo[e]--,e===Vt&&(this.heat+=ed,this.heat>=1&&(this.overheated=!0,this.sounds.push({name:"overheat"})));const i=++this.seq,r=Math.floor(this.random()*4294967296)>>>0,a=this.eye,o=Qf(this.yaw,this.pitch),l=op(e,this.burst),c=t.pellets===1&&e!==dn?bp(o,this.spread(),l,r):o;if(this.burst++,this.lastShot=this.time,this.punch=e===nn?[l[0]*.55+.003,l[1]*.55]:[this.punch[0]+ih[e][0],this.punch[1]+ih[e][1]],e===_n&&(this.boltUntil=this.time+t.interval*.85,this.sounds.push({name:"bolt"})),this.pending.push({seq:i,w:e}),this.link.send({k:"fire",w:e,o:Sn(a),d:[Pt(c.x*1e4)/1e4,Pt(c.y*1e4)/1e4,Pt(c.z*1e4)/1e4],seed:r,lag:Pt(Math.min(sd,this.rtt/2+th)),seq:i}),this.sounds.push({name:nh[e]}),e===dn){this.rockets.push({hostId:null,by:this.id,pos:{...a},dir:c,own:!0,dead:!1,age:0});return}for(const h of Ko(c,e,r))this.addTracer(a,h,this.id,!0,e)}addTracer(e,t,n,i,r){let a=Ms(this.arena,e,t,120).t,o=!1;for(const h of this.views()){if(h.id===n||!h.alive)continue;const d=_a(this.hitboxesOf(h),e,t,a);d.t<a&&(a=d.t,o=!0)}if(!i&&this.alive){const h=_a(Yo(this.arena,this.posture),e,t,a);h.t<a&&(a=h.t,o=!0)}const l=mi(e,t,a),c=i?mi(mi(mi(e,Le(Math.cos(this.yaw),0,-Math.sin(this.yaw)),.2),Le(0,1,0),-.17),t,.7):mi(e,t,.6);this.tracers.push({from:c,to:l,color:this.colorOf(n),age:0,life:r===_n?.45:.12,w:r}),a<120&&this.sparks.push({pos:l,age:0,color:o?"#ff4a3a":"#ffd38a"})}stepRockets(e){for(const t of this.rockets){if(t.dead){t.age+=e;continue}t.age+=e;const n=nd*e,i=n+Dn;let r=Ms(this.arena,t.pos,t.dir,i).t;if(t.own)for(const a of this.views()){if(!a.alive)continue;const o=_a(this.hitboxesOf(a),t.pos,t.dir,r);o.t<r&&(r=o.t)}if(r<i){const a=mi(t.pos,t.dir,Math.max(0,r-Dn-.05));t.pos=a,t.dead=!0,t.own&&(this.blast(a),this.selfKnock(a));continue}t.pos=mi(t.pos,t.dir,n),t.age>10&&(t.dead=!0)}this.rockets=this.rockets.filter(t=>!t.dead||t.age<3)}selfKnock(e){if(!this.alive)return;const t=Rn(this.body.crouch),n=Ei(this.body.pos,0,t),i=rh(sh(Ku(n,e),e)),r=cd(i);if(!r)return;const a=Le(this.body.pos.x,this.body.pos.y+t/2,this.body.pos.z),o=sh(a,e),l=rh(o),c=l<.01?Le(0,1,0):Le(o.x/l,o.y/l,o.z/l),h=Math.min(r,200)*id;this.body.vel=mi(this.body.vel,c,h),c.y>0&&(this.body.onGround=!1)}blast(e){this.blasts.push({pos:e,age:0}),this.sounds.push({name:"boom",pos:e})}decay(e){for(const t of[this.tracers,this.blasts,this.sparks,this.feed,this.notes])for(const n of t)n.age+=e;this.tracers=this.tracers.filter(t=>t.age<t.life),this.blasts=this.blasts.filter(t=>t.age<.7),this.sparks=this.sparks.filter(t=>t.age<.25),this.feed=this.feed.filter(t=>t.age<6),this.notes=this.notes.filter(t=>t.age<2.5),this.hitFlash=Math.max(0,this.hitFlash-e),this.headFlash=Math.max(0,this.headFlash-e),this.damageFlash=Math.max(0,this.damageFlash-e*1.6),this.muzzle=Math.max(0,this.muzzle-e);for(const t of this.others.values())t.muzzle=Math.max(0,t.muzzle-e)}views(){const e=this.time-th,t=[];for(const[n,i]of this.others){const r=i.samples;if(!r.length)continue;let a=r[0],o=r[r.length-1];for(let h=1;h<r.length;h++)if(r[h].t>=e){a=r[h-1],o=r[h];break}const l=o.t>a.t?Math.max(0,Math.min(1,(e-a.t)/(o.t-a.t))):1;let c=o.yaw-a.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;t.push({id:n,name:this.nameOf(n),color:this.colorOf(n),pos:Le(a.pos.x+(o.pos.x-a.pos.x)*l,a.pos.y+(o.pos.y-a.pos.y)*l,a.pos.z+(o.pos.z-a.pos.z)*l),yaw:a.yaw+c*l,pitch:a.pitch+(o.pitch-a.pitch)*l,stance:l<.5?a.stance:o.stance,lean:a.lean+(o.lean-a.lean)*l,weapon:i.weapon,alive:i.alive,muzzle:i.muzzle})}return t}hitboxesOf(e){return Yo(this.arena,{pos:e.pos,crouch:e.stance>0,lean:e.lean,yaw:e.yaw})}scores(){return this.rows.map(e=>({id:e[0],name:this.nameOf(e[0]),color:this.colorOf(e[0]),frags:e[10],deaths:e[11],self:e[0]===this.id})).sort((e,t)=>t.frags-e.frags||e.deaths-t.deaths)}standing(){const e=this.scores(),t=e.findIndex(r=>r.self)+1,n=e.find(r=>r.self)?.frags??0,i=e.filter(r=>!r.self)[0];return{place:t||1,total:e.length||1,gap:i?n-i.frags:0}}itemAvailable(e){return this.items[e]!=="0"}respawnIn(){return Math.max(0,2-(this.time-this.deathTime))}itemName(e){return rd[e].name}}const Cp="shelter-arcade-spire-v1",Pp="lobby",ah=s=>"s-"+s,Lp=["wss://nos.lol","wss://relay.primal.net","wss://nostr.mom","wss://relay.snort.social","wss://nostr.oxtr.dev","wss://relay.nostr.net"],bs=()=>{};function fd(s){return{selfId:s,onMessage:bs,onJoin:bs,onLeave:bs}}async function Ip(){const{joinRoom:s,selfId:e}=await Xu(async()=>{const{joinRoom:n,selfId:i}=await import("./index-DZotLEGE.js");return{joinRoom:n,selfId:i}},[],import.meta.url),t=new Map;return{selfId:e,kind:"public",join(n){let i=null,r=null,a=!1;const o={...fd(e),send(c,h){r&&r.send(c,h?{target:h}:void 0).catch(bs)},ping:c=>i?i.ping(c):Promise.reject(new Error("Комната ещё не открыта")),leave(){if(a)return;a=!0;const c=(async()=>{await l,i&&await i.leave().catch(bs)})();t.set(n,c),c.finally(()=>{t.get(n)===c&&t.delete(n)})}},l=(t.get(n)??Promise.resolve()).then(()=>{if(a)return;const c=s({appId:Cp,relayConfig:{urls:Lp}},n),h=c.makeAction("m");h.onMessage=(d,u)=>o.onMessage(d,u.peerId),c.onPeerJoin=d=>o.onJoin(d),c.onPeerLeave=d=>o.onLeave(d),i=c,r=h});return o}}}function Np(){const s=Math.random().toString(36).slice(2,10);return{selfId:s,kind:"local",join(e){const t=new BroadcastChannel("spire-local-"+e),n=new Map,i=new Map;let r=!1,a=0;const o=(u,f={})=>{r||t.postMessage({type:u,from:s,...f})},l={...fd(s),send(u,f){o("m",{to:f,data:u})},ping(u){const f=++a,g=performance.now();return new Promise(x=>{i.set(f,()=>x(performance.now()-g)),o("ping",{to:u,id:f})})},leave(){o("bye"),r=!0,clearInterval(h),t.close(),removeEventListener("pagehide",d)}},c=u=>{const f=n.has(u);n.set(u,performance.now()),f||l.onJoin(u)};t.onmessage=({data:u})=>{if(!(r||u.from===s||u.to&&u.to!==s)){if(u.type==="hi"){c(u.from),o("here",{to:u.from});return}if(u.type==="bye"){n.delete(u.from)&&l.onLeave(u.from);return}c(u.from),u.type==="m"&&l.onMessage(u.data,u.from),u.type==="ping"&&o("pong",{to:u.from,id:u.id}),u.type==="pong"&&i.get(u.id)?.(0)}};const h=setInterval(()=>{o("beat");const u=performance.now();for(const[f,g]of n)u-g>4e3&&(n.delete(f),l.onLeave(f))},1e3),d=()=>o("bye");return addEventListener("pagehide",d),queueMicrotask(()=>o("hi")),l}}}const Dp=s=>s&&typeof s.code=="string"&&/^[A-Z0-9]{6}$/.test(s.code)&&typeof s.name=="string"&&typeof s.host=="string"&&Number.isInteger(s.players)&&Number.isInteger(s.max)&&Number.isInteger(s.fragLimit)&&s.protocol===or;class Up{sessions=new Map;onChange=bs;channel;own=null;timer;constructor(e){this.channel=e.join(Pp),this.channel.onJoin=t=>{this.own&&this.channel.send({t:"ann",info:this.own},t)},this.channel.onLeave=t=>{let n=!1;for(const[i,r]of this.sessions)r.peer===t&&(this.sessions.delete(i),n=!0);n&&this.onChange()},this.channel.onMessage=(t,n)=>{const i=t;if(i?.t==="gone"){this.sessions.get(i.code)?.peer===n&&(this.sessions.delete(i.code),this.onChange());return}if(i?.t!=="ann"||!Dp(i.info))return;const r=this.sessions.get(i.info.code);this.sessions.set(i.info.code,{...i.info,name:i.info.name.slice(0,40),host:i.info.host.slice(0,24),peer:n,seen:performance.now(),ping:r?.ping??null}),r||this.measure(i.info.code,n),this.onChange()},this.timer=setInterval(()=>{this.own&&this.channel.send({t:"ann",info:this.own});const t=performance.now();let n=!1;for(const[i,r]of this.sessions)t-r.seen>9e3&&(this.sessions.delete(i),n=!0);n&&this.onChange()},2500)}announce(e){!e&&this.own&&this.channel.send({t:"gone",code:this.own.code});const t=e&&(!this.own||JSON.stringify(e)!==JSON.stringify(this.own));this.own=e,t&&this.channel.send({t:"ann",info:e})}async measure(e,t){try{const n=await Promise.race([this.channel.ping(t),new Promise((r,a)=>setTimeout(()=>a(new Error("timeout")),5e3))]),i=this.sessions.get(e);i&&(i.ping=Math.round(n),this.onChange())}catch{}}close(){this.announce(null),clearInterval(this.timer),this.channel.leave()}}const oh="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function Fp(s=Math.random){let e="";for(let t=0;t<6;t++)e+=oh[Math.floor(s()*oh.length)];return e}const to=s=>{const e=s.toUpperCase().replace(/[^A-Z0-9]/g,"").match(/[A-Z0-9]{6}$/);return e?e[0]:null};function Op(s,e){try{const t=URL.createObjectURL(new Blob([`setInterval(()=>postMessage(0),${Math.round(1e3/s)})`],{type:"text/javascript"})),n=new Worker(t);return n.onmessage=()=>e(),()=>{n.terminate(),URL.revokeObjectURL(t)}}catch{const t=setInterval(e,1e3/s);return()=>clearInterval(t)}}const lh=60,kp=3;class Bp{game;link;onRoster=()=>{};options;code;ticks=0;stopTicker=()=>{};channel;hostName;local;constructor(e,t,n,i,r,a){this.channel=e,this.options=n,this.code=i,this.hostName=r,this.local=a,this.game=new Sp(t,n),this.link={send:o=>this.handle(e.selfId,o)},e.onMessage=(o,l)=>this.handle(l,o),e.onLeave=o=>{this.game.players.has(o)&&(this.game.leave(o),this.roster())}}start(){this.handle(this.channel.selfId,{k:"hello",name:this.hostName,protocol:or}),this.stopTicker=Op(lh,()=>this.tick())}tick(){this.game.step(1/lh);const e=this.game.drain();e.length&&this.deliver({k:"ev",list:e}),++this.ticks%kp===0&&this.deliver(this.game.snapshot())}info(){return{code:this.code,name:this.options.name,host:this.hostName,players:this.game.players.size,max:this.options.maxPlayers,fragLimit:this.options.fragLimit,protocol:or}}close(){this.stopTicker(),this.channel.leave()}handle(e,t){if(!(!t||typeof t!="object"))switch(t.k){case"hello":{if(t.protocol!==or){this.deliver({k:"reject",reason:"protocol"},e);return}const n=this.game.join(e,String(t.name??""));if(n==="full"){this.deliver({k:"reject",reason:"full"},e);return}this.deliver({k:"welcome",id:e,name:n.name,color:n.color,options:this.options},e),this.roster(),this.deliver(this.game.snapshot(),e);return}case"pose":this.game.pose(e,t);return;case"fire":this.game.fire(e,t);return;case"reload":this.game.reload(e,t);return;case"ping":this.deliver({k:"pong",t:t.t},e);return}}roster(){this.deliver({k:"roster",players:this.game.roster()}),this.onRoster()}deliver(e,t){(!t||t===this.channel.selfId)&&this.local.receive(e),t!==this.channel.selfId&&this.channel.send(e,t)}}class zp{hostId=null;link;onFail=()=>{};onHostLeft=()=>{};timer;channel;name;constructor(e,t,n,i=25e3){this.channel=e,this.name=t,this.link={send:r=>{this.hostId&&e.send(r,this.hostId)}},e.onJoin=r=>{this.hostId||e.send({k:"hello",name:this.name,protocol:or},r)},e.onLeave=r=>{r===this.hostId&&this.onHostLeft()},e.onMessage=(r,a)=>{const o=r;if(!(!o||typeof o!="object")){if(!this.hostId){o.k==="welcome"?(this.hostId=a,clearTimeout(this.timer),n.receive(o)):o.k==="reject"&&(clearTimeout(this.timer),this.onFail(o.reason));return}a===this.hostId&&n.receive(o)}},this.timer=setTimeout(()=>{this.hostId||this.onFail("timeout")},i)}close(){clearTimeout(this.timer),this.channel.leave()}}const ql="186",Gp=0,ch=1,Hp=2,lr=1,Vp=2,nr=3,Ti=0,$t=1,En=2,ai=0,Ss=1,Ui=2,hh=3,uh=4,Wp=5,gs=100,Xp=101,qp=102,Yp=103,Kp=104,$p=200,Jp=201,Zp=202,Qp=203,pd=204,md=205,jp=206,em=207,tm=208,nm=209,im=210,sm=211,rm=212,am=213,om=214,$o=0,Jo=1,Zo=2,gr=3,Qo=4,jo=5,el=6,tl=7,Yl=0,lm=1,cm=2,zn=0,gd=1,xd=2,_d=3,Ha=4,vd=5,yd=6,Md=7,dh="attached",hm="detached",bd=300,Gi=301,Cs=302,no=303,io=304,Va=306,sn=1e3,kn=1001,Ra=1002,Nt=1003,Sd=1004,ir=1005,Dt=1006,va=1007,ni=1008,tn=1009,wd=1010,Ed=1011,xr=1012,Kl=1013,Gn=1014,fn=1015,Hn=1016,$l=1017,Jl=1018,_r=1020,Td=35902,Ad=35899,Rd=1021,Cd=1022,pn=1023,li=1026,Oi=1027,Zl=1028,Ql=1029,Hi=1030,jl=1031,ec=1033,ya=33776,Ma=33777,ba=33778,Sa=33779,nl=35840,il=35841,sl=35842,rl=35843,al=36196,ol=37492,ll=37496,cl=37488,hl=37489,Ca=37490,ul=37491,dl=37808,fl=37809,pl=37810,ml=37811,gl=37812,xl=37813,_l=37814,vl=37815,yl=37816,Ml=37817,bl=37818,Sl=37819,wl=37820,El=37821,Tl=36492,Al=36494,Rl=36495,Cl=36283,Pl=36284,Pa=36285,Ll=36286,vr=2300,yr=2301,so=2302,fh=2303,ph=2400,mh=2401,gh=2402,um=2500,dm=0,Pd=1,Il=2,fm=3200,La=0,pm=1,ei="",Mt="srgb",rn="srgb-linear",Ia="linear",ht="srgb",ro=7680,mm=519,gm=512,xm=513,_m=514,tc=515,vm=516,ym=517,nc=518,Mm=519,Ld=35044,bm=35048,xh="300 es",Bn=2e3,Mr=2001;function Sm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Em(){const s=br("canvas");return s.style.display="block",s}const _h={};function Na(...s){const e="THREE."+s.shift();console.log(e,...s)}function Id(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function De(...s){s=Id(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Xe(...s){s=Id(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ws(...s){const e=s.join(" ");e in _h||(_h[e]=!0,De(...s))}function Tm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Am={[$o]:Jo,[Zo]:el,[Qo]:tl,[gr]:jo,[Jo]:$o,[el]:Zo,[tl]:Qo,[jo]:gr};class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vh=1234567;const cr=Math.PI/180,Ps=180/Math.PI;function mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[s&255]+Gt[s>>8&255]+Gt[s>>16&255]+Gt[s>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function et(s,e,t){return Math.max(e,Math.min(t,s))}function ic(s,e){return(s%e+e)%e}function Rm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Cm(s,e,t){return s!==e?(t-s)/(e-s):0}function hr(s,e,t){return(1-t)*s+t*e}function Pm(s,e,t,n){return hr(s,e,1-Math.exp(-t*n))}function Lm(s,e=1){return e-Math.abs(ic(s,e*2)-e)}function Im(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Nm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Dm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Um(s,e){return s+Math.random()*(e-s)}function Fm(s){return s*(.5-Math.random())}function Om(s){s!==void 0&&(vh=s);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function km(s){return s*cr}function Bm(s){return s*Ps}function zm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Gm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Hm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vm(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Da={DEG2RAD:cr,RAD2DEG:Ps,generateUUID:mn,clamp:et,euclideanModulo:ic,mapLinear:Rm,inverseLerp:Cm,lerp:hr,damp:Pm,pingpong:Lm,smoothstep:Im,smootherstep:Nm,randInt:Dm,randFloat:Um,randFloatSpread:Fm,seededRandom:Om,degToRad:km,radToDeg:Bm,isPowerOfTwo:zm,ceilPowerOfTwo:Gm,floorPowerOfTwo:Hm,setQuaternionFromProperEuler:Vm,normalize:ut,denormalize:Tn},bc=class bc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bc.prototype.isVector2=!0;let ce=bc;class hi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),b=Math.sin(M);p=Math.sin(p*M)/b,o=Math.sin(o*M)/b,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+x*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+x*o;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sc=class Sc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sc.prototype.isVector3=!0;let L=Sc;const ao=new L,yh=new hi,wc=class wc{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],M=i[1],b=i[4],_=i[7],S=i[2],E=i[5],C=i[8];return r[0]=a*x+o*M+l*S,r[3]=a*m+o*b+l*E,r[6]=a*p+o*_+l*C,r[1]=c*x+h*M+d*S,r[4]=c*m+h*b+d*E,r[7]=c*p+h*_+d*C,r[2]=u*x+f*M+g*S,r[5]=u*m+f*b+g*E,r[8]=u*p+f*_+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oo.makeScale(e,t)),this}rotate(e){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wc.prototype.isMatrix3=!0;let Ye=wc;const oo=new Ye,Mh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){const s={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?Ia:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[rn]:{primaries:e,whitePoint:n,transfer:Ia,toXYZ:Mh,fromXYZ:bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Mh,fromXYZ:bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),s}const st=Wm();function oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $i;class Xm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$i===void 0&&($i=br("canvas")),$i.width=e.width,$i.height=e.height;const i=$i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qm=0;class sc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(lo(i[a].image)):r.push(lo(i[a]))}else r=lo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function lo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let Ym=0;const co=new L;class It extends Xi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=kn,i=kn,r=Dt,a=ni,o=pn,l=tn,c=It.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=mn(),this.name="",this.source=new sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sn:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sn:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=bd;It.DEFAULT_ANISOTROPY=1;const Ec=class Ec{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,_=(f+1)/2,S=(p+1)/2,E=(h+u)/4,C=(d+x)/4,v=(g+m)/4;return b>_&&b>S?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=C/n):_>S?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=v/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=C/r,i=v/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ec.prototype.isVector4=!0;let pt=Ec;class Km extends Xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new It(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new sc(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Km{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nd extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $m extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ga=class Ga{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,x,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ga().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jm,e,Zm)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),gi.crossVectors(n,jt),gi.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),gi.crossVectors(n,jt)),gi.normalize(),Or.crossVectors(jt,gi),i[0]=gi.x,i[4]=Or.x,i[8]=jt.x,i[1]=gi.y,i[5]=Or.y,i[9]=jt.y,i[2]=gi.z,i[6]=Or.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],b=n[7],_=n[11],S=n[15],E=i[0],C=i[4],v=i[8],T=i[12],R=i[1],I=i[5],F=i[9],H=i[13],D=i[2],z=i[6],G=i[10],V=i[14],ee=i[3],q=i[7],K=i[11],Z=i[15];return r[0]=a*E+o*R+l*D+c*ee,r[4]=a*C+o*I+l*z+c*q,r[8]=a*v+o*F+l*G+c*K,r[12]=a*T+o*H+l*V+c*Z,r[1]=h*E+d*R+u*D+f*ee,r[5]=h*C+d*I+u*z+f*q,r[9]=h*v+d*F+u*G+f*K,r[13]=h*T+d*H+u*V+f*Z,r[2]=g*E+x*R+m*D+p*ee,r[6]=g*C+x*I+m*z+p*q,r[10]=g*v+x*F+m*G+p*K,r[14]=g*T+x*H+m*V+p*Z,r[3]=M*E+b*R+_*D+S*ee,r[7]=M*C+b*I+_*z+S*q,r[11]=M*v+b*F+_*G+S*K,r[15]=M*T+b*H+_*V+S*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],M=l*f-c*u,b=o*f-c*d,_=o*u-l*d,S=a*f-c*h,E=a*u-l*h,C=a*d-o*h;return t*(x*M-m*b+p*_)-n*(g*M-m*S+p*E)+i*(g*b-x*S+p*C)-r*(g*_-x*E+m*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=t*o-n*a,b=t*l-i*a,_=t*c-r*a,S=n*l-i*o,E=n*c-r*o,C=i*c-r*l,v=h*x-d*g,T=h*m-u*g,R=h*p-f*g,I=d*m-u*x,F=d*p-f*x,H=u*p-f*m,D=M*H-b*F+_*I+S*R-E*T+C*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=(o*H-l*F+c*I)*z,e[1]=(i*F-n*H-r*I)*z,e[2]=(x*C-m*E+p*S)*z,e[3]=(u*E-d*C-f*S)*z,e[4]=(l*R-a*H-c*T)*z,e[5]=(t*H-i*R+r*T)*z,e[6]=(m*_-g*C-p*b)*z,e[7]=(h*C-u*_+f*b)*z,e[8]=(a*F-o*R+c*v)*z,e[9]=(n*R-t*F-r*v)*z,e[10]=(g*E-x*_+p*M)*z,e[11]=(d*_-h*E-f*M)*z,e[12]=(o*T-a*I-l*v)*z,e[13]=(t*I-n*T+i*v)*z,e[14]=(x*b-g*S-m*M)*z,e[15]=(h*S-d*b+u*M)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,m=a*d,p=o*d,M=l*c,b=l*h,_=l*d,S=n.x,E=n.y,C=n.z;return i[0]=(1-(x+p))*S,i[1]=(f+_)*S,i[2]=(g-b)*S,i[3]=0,i[4]=(f-_)*E,i[5]=(1-(u+p))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+b)*C,i[9]=(m-M)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),l=Ji.set(i[8],i[9],i[10]).length();r<0&&(a=-a),yn.copy(this);const c=1/a,h=1/o,d=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Bn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Bn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Mr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Bn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Bn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Mr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ga.prototype.isMatrix4=!0;let Je=Ga;const Ji=new L,yn=new Je,Jm=new L(0,0,0),Zm=new L(1,1,1),gi=new L,Or=new L,jt=new L,Sh=new Je,wh=new hi;class ci{constructor(e=0,t=0,n=0,i=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qm=0;const Eh=new L,Zi=new hi,Yn=new Je,kr=new L,Gs=new L,jm=new L,e0=new hi,Th=new L(1,0,0),Ah=new L(0,1,0),Rh=new L(0,0,1),Ch={type:"added"},t0={type:"removed"},Qi={type:"childadded",child:null},ho={type:"childremoved",child:null};class mt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new L,t=new ci,n=new hi,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ye}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Gs,kr,this.up):Yn.lookAt(kr,Gs,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(t0),ho.child=e,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,jm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}mt.DEFAULT_UP=new L(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n0={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function fo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=ic(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fo(a,r,e+1/3),this.g=fo(a,r,e),this.b=fo(a,r,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return st.workingToColorSpace(Ht.copy(this),e),Math.round(et(Ht.r*255,0,255))*65536+Math.round(et(Ht.g*255,0,255))*256+Math.round(et(Ht.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,r=Ht.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Mt){st.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Br);const n=hr(xi.h,Br.h,t),i=hr(xi.s,Br.s,t),r=hr(xi.l,Br.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new He;He.NAMES=Ud;class rc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new rc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ac{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sr extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mn=new L,Kn=new L,po=new L,$n=new L,ji=new L,es=new L,Ph=new L,mo=new L,go=new L,xo=new L,_o=new pt,vo=new pt,yo=new pt;class un{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Mn.subVectors(i,t),Kn.subVectors(n,t),po.subVectors(e,t);const a=Mn.dot(Mn),o=Mn.dot(Kn),l=Mn.dot(po),c=Kn.dot(Kn),h=Kn.dot(po),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return _o.setScalar(0),vo.setScalar(0),yo.setScalar(0),_o.fromBufferAttribute(e,t),vo.fromBufferAttribute(e,n),yo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(_o,r.x),a.addScaledVector(vo,r.y),a.addScaledVector(yo,r.z),a}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),Kn.subVectors(e,t),Mn.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Mn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ji.subVectors(i,n),es.subVectors(r,n),mo.subVectors(e,n);const l=ji.dot(mo),c=es.dot(mo);if(l<=0&&c<=0)return t.copy(n);go.subVectors(e,i);const h=ji.dot(go),d=es.dot(go);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ji,a);xo.subVectors(e,r);const f=ji.dot(xo),g=es.dot(xo);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(es,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ph.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Ph,o);const p=1/(m+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(ji,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ui{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Gr.subVectors(this.max,Hs),ts.subVectors(e.a,Hs),ns.subVectors(e.b,Hs),is.subVectors(e.c,Hs),_i.subVectors(ns,ts),vi.subVectors(is,ns),Ri.subVectors(ts,is);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Ri.z,Ri.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Ri.z,0,-Ri.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Ri.y,Ri.x,0];return!Mo(t,ts,ns,is,Gr)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,ts,ns,is,Gr))?!1:(Hr.crossVectors(_i,vi),t=[Hr.x,Hr.y,Hr.z],Mo(t,ts,ns,is,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new L,new L,new L,new L,new L,new L,new L,new L],bn=new L,zr=new ui,ts=new L,ns=new L,is=new L,_i=new L,vi=new L,Ri=new L,Hs=new L,Gr=new L,Hr=new L,Ci=new L;function Mo(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ci.fromArray(s,r);const o=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ct=new L,Vr=new ce;let i0=0;class Jt extends Xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ld,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Fd extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Od extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const s0=new ui,Vs=new L,bo=new L;class Wn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):s0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(bo)),this.expandByPoint(Vs.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let r0=0;const ln=new Je,So=new mt,ss=new L,en=new ui,Ws=new ui,Ot=new L;class Et extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sm(e)?Od:Fd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(en.min,Ws.min),en.expandByPoint(Ot),Ot.addVectors(en.max,Ws.max),en.expandByPoint(Ot)):(en.expandByPoint(Ws.min),en.expandByPoint(Ws.max))}en.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),Ot.add(ss)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new L,l[v]=new L;const c=new L,h=new L,d=new L,u=new ce,f=new ce,g=new ce,x=new L,m=new L;function p(v,T,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[v].add(x),o[T].add(x),o[R].add(x),l[v].add(m),l[T].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,T=M.length;v<T;++v){const R=M[v],I=R.start,F=R.count;for(let H=I,D=I+F;H<D;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new L,_=new L,S=new L,E=new L;function C(v){S.fromBufferAttribute(i,v),E.copy(S);const T=o[v];b.copy(T),b.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(E,T);const I=_.dot(l[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,I)}for(let v=0,T=M.length;v<T;++v){const R=M[v],I=R.start,F=R.count;for(let H=I,D=I+F;H<D;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Jt(u,h,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ld,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const qt=new L;class wr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wo=new L,a0=new L,o0=new Ye;class Si{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wo.subVectors(n,t).cross(a0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(wo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||o0.getNormalMatrix(e),i=this.coplanarPoint(wo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let l0=0;class gn extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Ss,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Si().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bd extends gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rs;const Xs=new L,as=new L,os=new L,ls=new ce,qs=new ce,zd=new Je,Wr=new L,Ys=new L,Xr=new L,Lh=new ce,Eo=new ce,Ih=new ce;class c0 extends mt{constructor(e=new Bd){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kd(t,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new wr(n,3,0,!1)),rs.setAttribute("uv",new wr(n,2,3,!1))}this.geometry=rs,this.material=e,this.center=new ce(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),zd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;qr(Wr.set(-.5,-.5,0),os,a,as,i,r),qr(Ys.set(.5,-.5,0),os,a,as,i,r),qr(Xr.set(.5,.5,0),os,a,as,i,r),Lh.set(0,0),Eo.set(1,0),Ih.set(1,1);let o=e.ray.intersectTriangle(Wr,Ys,Xr,!1,Xs);if(o===null&&(qr(Ys.set(-.5,.5,0),os,a,as,i,r),Eo.set(0,1),o=e.ray.intersectTriangle(Wr,Xr,Ys,!1,Xs),o===null))return;const l=e.ray.origin.distanceTo(Xs);l<e.near||l>e.far||t.push({distance:l,point:Xs.clone(),uv:un.getInterpolation(Xs,Wr,Ys,Xr,Lh,Eo,Ih,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qr(s,e,t,n,i,r){ls.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(qs.x=r*ls.x-i*ls.y,qs.y=i*ls.x+r*ls.y):qs.copy(ls),s.copy(e),s.x+=qs.x,s.y+=qs.y,s.applyMatrix4(zd)}const Zn=new L,To=new L,Yr=new L,Kr=new L;class Wa{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){To.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(To);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Kr.dot(this.direction),l=-Kr.dot(Yr),c=Kr.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(To).addScaledVector(Yr,u),f}intersectSphere(e,t){if(e.radius<0)return null;Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,b=n.z-a.z,_=Math.abs(l),S=Math.abs(c),E=Math.abs(h);let C,v,T,R,I,F,H,D,z,G,V,ee;if(_>=S&&_>=E?(T=l,F=d,z=g,ee=p,l>=0?(C=c,v=h,R=u,I=f,H=x,D=m,G=M,V=b):(C=h,v=c,R=f,I=u,H=m,D=x,G=b,V=M)):S>=E?(T=c,F=u,z=x,ee=M,c>=0?(C=h,v=l,R=f,I=d,H=m,D=g,G=b,V=p):(C=l,v=h,R=d,I=f,H=g,D=m,G=p,V=b)):(T=h,F=f,z=m,ee=b,h>=0?(C=l,v=c,R=d,I=u,H=g,D=x,G=p,V=M):(C=c,v=l,R=u,I=d,H=x,D=g,G=M,V=p)),T===0)return null;const q=C/T,K=v/T,Z=1/T,Ae=R-q*F,Me=I-K*F,qe=H-q*z,Ze=D-K*z,tt=G-q*ee,J=V-K*ee,ne=tt*Ze-J*qe,ue=Ae*J-Me*tt,Ue=qe*Me-Ze*Ae;if(i){if(ne<0||ue<0||Ue<0)return null}else if((ne<0||ue<0||Ue<0)&&(ne>0||ue>0||Ue>0))return null;const we=ne+ue+Ue;if(we===0)return null;const ze=Z*(ne*F+ue*z+Ue*ee);return(we>0?ze<0:ze>0)?null:this.at(ze/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nh=new Je,Pi=new Wa,$r=new Wn,Dh=new L,Jr=new L,Zr=new L,Qr=new L,Ao=new L,jr=new L,Uh=new L,ea=new L;class Ke extends mt{constructor(e=new Et,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ao.fromBufferAttribute(d,e),a?jr.addScaledVector(Ao,h):jr.addScaledVector(Ao.sub(t),h))}t.add(jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!($r.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere($r,Dh)===null||Pi.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Nh.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,S=b;_<S;_+=3){const E=o.getX(_),C=o.getX(_+1),v=o.getX(_+2);i=ta(this,p,e,n,c,h,d,E,C,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);i=ta(this,a,e,n,c,h,d,M,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,S=b;_<S;_+=3){const E=_,C=_+1,v=_+2;i=ta(this,p,e,n,c,h,d,E,C,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=m,b=m+1,_=m+2;i=ta(this,a,e,n,c,h,d,M,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function h0(s,e,t,n,i,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Ti,o),l===null)return null;ea.copy(o),ea.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ea);return c<t.near||c>t.far?null:{distance:c,point:ea.clone(),object:s}}function ta(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Jr),s.getVertexPosition(l,Zr),s.getVertexPosition(c,Qr);const h=h0(s,e,t,n,Jr,Zr,Qr,Uh);if(h){const d=new L;un.getBarycoord(Uh,Jr,Zr,Qr,d),i&&(h.uv=un.getInterpolatedAttribute(i,o,l,c,d,new ce)),r&&(h.uv1=un.getInterpolatedAttribute(r,o,l,c,d,new ce)),a&&(h.normal=un.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};un.getNormal(Jr,Zr,Qr,u.normal),h.face=u,h.barycoord=d}return h}const Ks=new pt,Fh=new pt,Oh=new pt,u0=new pt,kh=new Je,na=new L,Ro=new Wn,Bh=new Je,Co=new Wa;class d0 extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dh,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingBox.expandByPoint(na)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,na),this.boundingSphere.expandByPoint(na)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(i),e.ray.intersectsSphere(Ro)!==!1&&(Bh.copy(i).invert(),Co.copy(e.ray).applyMatrix4(Bh),!(this.boundingBox!==null&&Co.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Co)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Fh.fromBufferAttribute(i.attributes.skinIndex,e),Oh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ks.copy(t),t.set(0,0,0,0)):(Ks.set(...t,1),t.set(0,0,0)),Ks.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Oh.getComponent(r);if(a!==0){const o=Fh.getComponent(r);kh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(u0.copy(Ks).applyMatrix4(kh),a)}}return t.isVector4&&(t.w=Ks.w),t.applyMatrix4(this.bindMatrixInverse)}}class Gd extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class oc extends It{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Nt,h=Nt,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new Je,f0=new Je;class lc{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:f0;zh.multiplyMatrices(o,t[r]),zh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new lc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new oc(t,e,e,pn,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(De("Skeleton: No bone found with UUID:",r),a=new Gd),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ua extends Jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new Je,Gh=new Je,ia=[],Hh=new ui,p0=new Je,$s=new Ke,Js=new Wn;class cc extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ua(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,p0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Hh.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(Hh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cs),Js.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),e.ray.intersectsSphere(Js)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,cs),Gh.multiplyMatrices(n,cs),$s.matrixWorld=Gh,$s.raycast(e,ia);for(let a=0,o=ia.length;a<o;a++){const l=ia[a];l.instanceId=r,l.object=this,t.push(l)}ia.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ua(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new oc(new Float32Array(i*this.count),i,this.count,Zl,fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Li=new Wn,m0=new ce(.5,.5),sa=new L;class hc{constructor(e=new Si,t=new Si,n=new Si,i=new Si,r=new Si,a=new Si){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],b=r[13],_=r[14],S=r[15];if(i[0].setComponents(c-a,f-h,p-g,S-M).normalize(),i[1].setComponents(c+a,f+h,p+g,S+M).normalize(),i[2].setComponents(c+o,f+d,p+x,S+b).normalize(),i[3].setComponents(c-o,f-d,p-x,S-b).normalize(),n)i[4].setComponents(l,u,m,_).normalize(),i[5].setComponents(c-l,f-u,p-m,S-_).normalize();else if(i[4].setComponents(c-l,f-u,p-m,S-_).normalize(),t===Bn)i[5].setComponents(c+l,f+u,p+m,S+_).normalize();else if(t===Mr)i[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=m0.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(sa.x=i.normal.x>0?e.max.x:e.min.x,sa.y=i.normal.y>0?e.max.y:e.min.y,sa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hd extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fa=new L,Oa=new L,Vh=new Je,Zs=new Wa,ra=new Wn,Po=new L,Wh=new L;class uc extends mt{constructor(e=new Et,t=new Hd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Fa.fromBufferAttribute(t,i-1),Oa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fa.distanceTo(Oa);e.setAttribute("lineDistance",new ot(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(i),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;Vh.copy(i).invert(),Zs.copy(e.ray).applyMatrix4(Vh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),M=h.getX(x+1),b=aa(this,e,Zs,l,p,M,x);b&&t.push(b)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=aa(this,e,Zs,l,x,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=aa(this,e,Zs,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=aa(this,e,Zs,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function aa(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Fa.fromBufferAttribute(o,i),Oa.fromBufferAttribute(o,r),t.distanceSqToSegment(Fa,Oa,Po,Wh)>n)return;Po.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Po);if(!(c<e.near||c>e.far))return{distance:c,point:Wh.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Xh=new L,qh=new L;class g0 extends uc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Xh.fromBufferAttribute(t,i),qh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xh.distanceTo(qh);e.setAttribute("lineDistance",new ot(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class x0 extends uc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class dc extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yh=new Je,Nl=new Wa,oa=new Wn,la=new L;class fc extends mt{constructor(e=new Et,t=new dc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(i),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;Yh.copy(i).invert(),Nl.copy(e.ray).applyMatrix4(Yh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,x=f;g<x;g++){const m=c.getX(g);la.fromBufferAttribute(d,m),Kh(la,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,x=f;g<x;g++)la.fromBufferAttribute(d,g),Kh(la,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kh(s,e,t,n,i,r,a){const o=Nl.distanceSqToPoint(s);if(o<t){const l=new L;Nl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Vd extends It{constructor(e=[],t=Gi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wa extends It{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Er extends It{constructor(e,t,n=Gn,i,r,a,o=Nt,l=Nt,c,h=li,d=1){if(h!==li&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class _0 extends Er{constructor(e,t=Gn,n=Gi,i,r,a=Nt,o=Nt,l,c=li){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wd extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wt extends Et{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(d,2));function g(x,m,p,M,b,_,S,E,C,v,T){const R=_/C,I=S/v,F=_/2,H=S/2,D=E/2,z=C+1,G=v+1;let V=0,ee=0;const q=new L;for(let K=0;K<G;K++){const Z=K*I-H;for(let Ae=0;Ae<z;Ae++){const Me=Ae*R-F;q[x]=Me*M,q[m]=Z*b,q[p]=D,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),d.push(Ae/C),d.push(1-K/v),V+=1}}for(let K=0;K<v;K++)for(let Z=0;Z<C;Z++){const Ae=u+Z+z*K,Me=u+Z+z*(K+1),qe=u+(Z+1)+z*(K+1),Ze=u+(Z+1)+z*K;l.push(Ae,Me,Ze),l.push(Me,qe,Ze),ee+=6}o.addGroup(f,ee,T),f+=ee,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pc extends Et{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=n*2+r,x=i+1,m=new L,p=new L;for(let M=0;M<=g;M++){let b=0,_=0,S=0,E=0;if(M<=n){const T=M/n,R=T*Math.PI/2;_=-h-e*Math.cos(R),S=e*Math.sin(R),E=-e*Math.cos(R),b=T*d}else if(M<=n+r){const T=(M-n)/r;_=-h+T*t,S=e,E=0,b=d+T*u}else{const T=(M-n-r)/n,R=T*Math.PI/2;_=h+e*Math.sin(R),S=e*Math.cos(R),E=e*Math.sin(R),b=d+u+T*d}const C=Math.max(0,Math.min(1,b/f));let v=0;M===0?v=.5/i:M===g&&(v=-.5/i);for(let T=0;T<=i;T++){const R=T/i,I=R*Math.PI*2,F=Math.sin(I),H=Math.cos(I);p.x=-S*H,p.y=_,p.z=S*F,o.push(p.x,p.y,p.z),m.set(-S*H,E,S*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+v,C)}if(M>0){const T=(M-1)*x;for(let R=0;R<i;R++){const I=T+R,F=T+R+1,H=M*x+R,D=M*x+R+1;a.push(I,F,H),a.push(F,D,H)}}}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class kt extends Et{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const x=[],m=n/2;let p=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ot(d,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(f,2));function M(){const _=new L,S=new L;let E=0;const C=(t-e)/n;for(let v=0;v<=r;v++){const T=[],R=v/r,I=R*(t-e)+e;for(let F=0;F<=i;F++){const H=F/i,D=H*l+o,z=Math.sin(D),G=Math.cos(D);S.x=I*z,S.y=-R*n+m,S.z=I*G,d.push(S.x,S.y,S.z),_.set(z,C,G).normalize(),u.push(_.x,_.y,_.z),f.push(H,1-R),T.push(g++)}x.push(T)}for(let v=0;v<i;v++)for(let T=0;T<r;T++){const R=x[T][v],I=x[T+1][v],F=x[T+1][v+1],H=x[T][v+1];(e>0||T!==0)&&(h.push(R,I,H),E+=3),(t>0||T!==r-1)&&(h.push(I,F,H),E+=3)}c.addGroup(p,E,0),p+=E}function b(_){const S=g,E=new ce,C=new L;let v=0;const T=_===!0?e:t,R=_===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;const I=g;for(let F=0;F<=i;F++){const D=F/i*l+o,z=Math.cos(D),G=Math.sin(D);C.x=T*G,C.y=m*R,C.z=T*z,d.push(C.x,C.y,C.z),u.push(0,R,0),E.x=z*.5+.5,E.y=G*.5*R+.5,f.push(E.x,E.y),g++}for(let F=0;F<i;F++){const H=S+F,D=I+F;_===!0?h.push(D,D+1,H):h.push(D+1,D,H),v+=3}c.addGroup(p,v,_===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xa extends kt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Xa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qa extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const b=new L,_=new L,S=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],b),f(t[E+1],_),f(t[E+2],S),l(b,_,S,M)}function l(M,b,_,S){const E=S+1,C=[];for(let v=0;v<=E;v++){C[v]=[];const T=M.clone().lerp(_,v/E),R=b.clone().lerp(_,v/E),I=E-v;for(let F=0;F<=I;F++)F===0&&v===E?C[v][F]=T:C[v][F]=T.clone().lerp(R,F/I)}for(let v=0;v<E;v++)for(let T=0;T<2*(E-v)-1;T++){const R=Math.floor(T/2);T%2===0?(u(C[v][R+1]),u(C[v+1][R]),u(C[v][R])):(u(C[v][R+1]),u(C[v+1][R+1]),u(C[v+1][R]))}}function c(M){const b=new L;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(M),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){const M=new L;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];const _=m(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;a.push(_,1-S)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const b=a[M+0],_=a[M+2],S=a[M+4],E=Math.max(b,_,S),C=Math.min(b,_,S);E>.9&&C<.1&&(b<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,b){const _=M*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){const M=new L,b=new L,_=new L,S=new L,E=new ce,C=new ce,v=new ce;for(let T=0,R=0;T<r.length;T+=9,R+=6){M.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),E.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),S.copy(M).add(b).add(_).divideScalar(3);const I=m(S);x(E,R+0,M,I),x(C,R+2,b,I),x(v,R+4,_,I)}}function x(M,b,_,S){S<0&&M.x===1&&(a[b]=M.x-1),_.x===0&&_.z===0&&(a[b]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.vertices,e.indices,e.radius,e.detail)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ce:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,i=[],r=[],a=[],o=new L,l=new Je;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(et(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mc extends Xn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class v0 extends mc{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function gc(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const $h=new L,Jh=new L,Lo=new gc,Io=new gc,No=new gc;class y0 extends Xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Jh.subVectors(i[0],i[1]).add(i[0]),c=Jh);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:($h.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=$h),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Lo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),Io.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),No.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Io.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),No.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Lo.calc(l),Io.calc(l),No.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zh(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function M0(s,e){const t=1-s;return t*t*e}function b0(s,e){return 2*(1-s)*s*e}function S0(s,e){return s*s*e}function ur(s,e,t,n){return M0(s,e)+b0(s,t)+S0(s,n)}function w0(s,e){const t=1-s;return t*t*t*e}function E0(s,e){const t=1-s;return 3*t*t*s*e}function T0(s,e){return 3*(1-s)*s*s*e}function A0(s,e){return s*s*s*e}function dr(s,e,t,n,i){return w0(s,e)+E0(s,t)+T0(s,n)+A0(s,i)}class Xd extends Xn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(dr(e,i.x,r.x,a.x,o.x),dr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R0 extends Xn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(dr(e,i.x,r.x,a.x,o.x),dr(e,i.y,r.y,a.y,o.y),dr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qd extends Xn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C0 extends Xn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yd extends Xn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ur(e,i.x,r.x,a.x),ur(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P0 extends Xn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ur(e,i.x,r.x,a.x),ur(e,i.y,r.y,a.y),ur(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Zh(o,l.x,c.x,h.x,d.x),Zh(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ce().fromArray(i))}return this}}var Dl=Object.freeze({__proto__:null,ArcCurve:v0,CatmullRomCurve3:y0,CubicBezierCurve:Xd,CubicBezierCurve3:R0,EllipseCurve:mc,LineCurve:qd,LineCurve3:C0,QuadraticBezierCurve:Yd,QuadraticBezierCurve3:P0,SplineCurve:Kd});class L0 extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Dl[i.type]().fromJSON(i))}return this}}class Qh extends L0{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new qd(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Yd(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Xd(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Kd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new mc(e,t,n,i,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $d extends Qh{constructor(e){super(e),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Qh().fromJSON(i))}return this}}function I0(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Jd(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=O0(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,d=l;for(let u=t;u<i;u+=t){const f=s[u],g=s[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Tr(r,a,t,o,l,c,0),a}function Jd(s,e,t,n,i){let r;if(i===K0(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=jh(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=jh(a/n|0,s[a],s[a+1],r);return r&&Ls(r,r.next)&&(Rr(r),r=r.next),r}function Vi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ls(t,t.next)||wt(t.prev,t,t.next)===0)){if(Rr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Tr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&H0(s,n,i,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?D0(s,n,i,r):N0(s)){e.push(l.i,s.i,c.i),Rr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=U0(Vi(s),e),Tr(s,e,t,n,i,r,2)):a===2&&F0(s,e,t,n,i,r):Tr(Vi(s),e,t,n,i,r,1);break}}}function N0(s){const e=s.prev,t=s,n=s.next;if(wt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),d=Math.min(o,l,c),u=Math.max(i,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&sr(i,o,r,l,a,c,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function D0(s,e,t,n){const i=s.prev,r=s,a=s.next;if(wt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),x=Math.max(o,l,c),m=Math.max(h,d,u),p=Ul(f,g,e,t,n),M=Ul(x,m,e,t,n);let b=s.prevZ,_=s.nextZ;for(;b&&b.z>=p&&_&&_.z<=M;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&sr(o,h,l,d,c,u,b.x,b.y)&&wt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&sr(o,h,l,d,c,u,_.x,_.y)&&wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&sr(o,h,l,d,c,u,b.x,b.y)&&wt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&sr(o,h,l,d,c,u,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function U0(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Ls(n,i)&&Qd(n,t,t.next,i)&&Ar(n,i)&&Ar(i,n)&&(e.push(n.i,t.i,i.i),Rr(t),Rr(t.next),t=s=i),t=t.next}while(t!==s);return Vi(t)}function F0(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&X0(a,o)){let l=jd(a,o);a=Vi(a,a.next),l=Vi(l,l.next),Tr(a,e,t,n,i,r,0),Tr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function O0(s,e,t,n){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Jd(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(W0(c))}i.sort(k0);for(let r=0;r<i.length;r++)t=B0(i[r],t);return t}function k0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function B0(s,e){const t=z0(s,e);if(!t)return e;const n=jd(t,s);return Vi(n,n.next),Vi(t,t.next)}function z0(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,a;if(Ls(s,t))return t;do{if(Ls(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Zd(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Ar(t,s)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&G0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function G0(s,e){return wt(s.prev,s,e.prev)<0&&wt(e.next,s,s.next)<0}function H0(s,e,t,n){let i=s;do i.z===0&&(i.z=Ul(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,V0(i)}function V0(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Ul(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function W0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Zd(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function sr(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Zd(s,e,t,n,i,r,a,o)}function X0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!q0(s,e)&&(Ar(s,e)&&Ar(e,s)&&Y0(s,e)&&(wt(s.prev,s,e.prev)||wt(s,e.prev,e))||Ls(s,e)&&wt(s.prev,s,s.next)>0&&wt(e.prev,e,e.next)>0)}function wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ls(s,e){return s.x===e.x&&s.y===e.y}function Qd(s,e,t,n){const i=ha(wt(s,e,t)),r=ha(wt(s,e,n)),a=ha(wt(t,n,s)),o=ha(wt(t,n,e));return!!(i!==r&&a!==o||i===0&&ca(s,t,e)||r===0&&ca(s,n,e)||a===0&&ca(t,s,n)||o===0&&ca(t,e,n))}function ca(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ha(s){return s>0?1:s<0?-1:0}function q0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Qd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ar(s,e){return wt(s.prev,s,s.next)<0?wt(s,e,s.next)>=0&&wt(s,s.prev,e)>=0:wt(s,e,s.prev)<0||wt(s,s.next,e)<0}function Y0(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function jd(s,e){const t=Fl(s.i,s.x,s.y),n=Fl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jh(s,e,t,n){const i=Fl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Rr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function K0(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class $0{static triangulate(e,t,n=2){return I0(e,t,n)}}class _s{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return _s.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];eu(e),tu(n,e);let a=e.length;t.forEach(eu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,tu(n,t[l]);const o=$0.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function eu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function tu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class xc extends Et{constructor(e=new $d([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new ot(i,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:J0;let b,_=!1,S,E,C,v;if(p){b=p.getSpacedPoints(h),_=!0,u=!1;const j=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,j),E=new L,C=new L,v=new L}u||(m=0,f=0,g=0,x=0);const T=o.extractPoints(c);let R=T.shape;const I=T.holes;if(!_s.isClockWise(R)){R=R.reverse();for(let j=0,ae=I.length;j<ae;j++){const oe=I[j];_s.isClockWise(oe)&&(I[j]=oe.reverse())}}function H(j){const oe=10000000000000001e-36;let le=j[0];for(let de=1;de<=j.length;de++){const Ge=de%j.length,Fe=j[Ge],Ve=Fe.x-le.x,N=Fe.y-le.y,P=Ve*Ve+N*N,se=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(le.x),Math.abs(le.y)),fe=oe*se*se;if(P<=fe){j.splice(Ge,1),de--;continue}le=Fe}}H(R),I.forEach(H);const D=I.length,z=R;for(let j=0;j<D;j++){const ae=I[j];R=R.concat(ae)}function G(j,ae,oe){return ae||Xe("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ae,oe)}const V=R.length;function ee(j,ae,oe){let le,de,Ge;const Fe=j.x-ae.x,Ve=j.y-ae.y,N=oe.x-j.x,P=oe.y-j.y,se=Fe*Fe+Ve*Ve,fe=Fe*P-Ve*N;if(Math.abs(fe)>Number.EPSILON){const A=Math.sqrt(se),y=Math.sqrt(N*N+P*P),k=ae.x-Ve/A,B=ae.y+Fe/A,$=oe.x-P/y,he=oe.y+N/y,pe=(($-k)*P-(he-B)*N)/(Fe*P-Ve*N);le=k+Fe*pe-j.x,de=B+Ve*pe-j.y;const Q=le*le+de*de;if(Q<=2)return new ce(le,de);Ge=Math.sqrt(Q/2)}else{let A=!1;Fe>Number.EPSILON?N>Number.EPSILON&&(A=!0):Fe<-Number.EPSILON?N<-Number.EPSILON&&(A=!0):Math.sign(Ve)===Math.sign(P)&&(A=!0),A?(le=-Ve,de=Fe,Ge=Math.sqrt(se)):(le=Fe,de=Ve,Ge=Math.sqrt(se/2))}return new ce(le/Ge,de/Ge)}const q=[];for(let j=0,ae=z.length,oe=ae-1,le=j+1;j<ae;j++,oe++,le++)oe===ae&&(oe=0),le===ae&&(le=0),q[j]=ee(z[j],z[oe],z[le]);const K=[];let Z,Ae=q.concat();for(let j=0,ae=D;j<ae;j++){const oe=I[j];Z=[];for(let le=0,de=oe.length,Ge=de-1,Fe=le+1;le<de;le++,Ge++,Fe++)Ge===de&&(Ge=0),Fe===de&&(Fe=0),Z[le]=ee(oe[le],oe[Ge],oe[Fe]);K.push(Z),Ae=Ae.concat(Z)}let Me;if(m===0)Me=_s.triangulateShape(z,I);else{const j=[],ae=[];for(let oe=0;oe<m;oe++){const le=oe/m,de=f*Math.cos(le*Math.PI/2),Ge=g*Math.sin(le*Math.PI/2)+x;for(let Fe=0,Ve=z.length;Fe<Ve;Fe++){const N=G(z[Fe],q[Fe],Ge);ue(N.x,N.y,-de),le===0&&j.push(N)}for(let Fe=0,Ve=D;Fe<Ve;Fe++){const N=I[Fe];Z=K[Fe];const P=[];for(let se=0,fe=N.length;se<fe;se++){const A=G(N[se],Z[se],Ge);ue(A.x,A.y,-de),le===0&&P.push(A)}le===0&&ae.push(P)}}Me=_s.triangulateShape(j,ae)}const qe=Me.length,Ze=g+x;for(let j=0;j<V;j++){const ae=u?G(R[j],Ae[j],Ze):R[j];_?(C.copy(S.normals[0]).multiplyScalar(ae.x),E.copy(S.binormals[0]).multiplyScalar(ae.y),v.copy(b[0]).add(C).add(E),ue(v.x,v.y,v.z)):ue(ae.x,ae.y,0)}for(let j=1;j<=h;j++)for(let ae=0;ae<V;ae++){const oe=u?G(R[ae],Ae[ae],Ze):R[ae];_?(C.copy(S.normals[j]).multiplyScalar(oe.x),E.copy(S.binormals[j]).multiplyScalar(oe.y),v.copy(b[j]).add(C).add(E),ue(v.x,v.y,v.z)):ue(oe.x,oe.y,d/h*j)}for(let j=m-1;j>=0;j--){const ae=j/m,oe=f*Math.cos(ae*Math.PI/2),le=g*Math.sin(ae*Math.PI/2)+x;for(let de=0,Ge=z.length;de<Ge;de++){const Fe=G(z[de],q[de],le);ue(Fe.x,Fe.y,d+oe)}for(let de=0,Ge=I.length;de<Ge;de++){const Fe=I[de];Z=K[de];for(let Ve=0,N=Fe.length;Ve<N;Ve++){const P=G(Fe[Ve],Z[Ve],le);_?ue(P.x,P.y+b[h-1].y,b[h-1].x+oe):ue(P.x,P.y,d+oe)}}}tt(),J();function tt(){const j=i.length/3;if(u){let ae=0,oe=V*ae;for(let le=0;le<qe;le++){const de=Me[le];Ue(de[2]+oe,de[1]+oe,de[0]+oe)}ae=h+m*2,oe=V*ae;for(let le=0;le<qe;le++){const de=Me[le];Ue(de[0]+oe,de[1]+oe,de[2]+oe)}}else{for(let ae=0;ae<qe;ae++){const oe=Me[ae];Ue(oe[2],oe[1],oe[0])}for(let ae=0;ae<qe;ae++){const oe=Me[ae];Ue(oe[0]+V*h,oe[1]+V*h,oe[2]+V*h)}}n.addGroup(j,i.length/3-j,0)}function J(){const j=i.length/3;let ae=0;ne(z,ae),ae+=z.length;for(let oe=0,le=I.length;oe<le;oe++){const de=I[oe];ne(de,ae),ae+=de.length}n.addGroup(j,i.length/3-j,1)}function ne(j,ae){let oe=j.length;for(;--oe>=0;){const le=oe;let de=oe-1;de<0&&(de=j.length-1);for(let Ge=0,Fe=h+m*2;Ge<Fe;Ge++){const Ve=V*Ge,N=V*(Ge+1),P=ae+le+Ve,se=ae+de+Ve,fe=ae+de+N,A=ae+le+N;we(P,se,fe,A)}}}function ue(j,ae,oe){l.push(j),l.push(ae),l.push(oe)}function Ue(j,ae,oe){ze(j),ze(ae),ze(oe);const le=i.length/3,de=M.generateTopUV(n,i,le-3,le-2,le-1);rt(de[0]),rt(de[1]),rt(de[2])}function we(j,ae,oe,le){ze(j),ze(ae),ze(le),ze(ae),ze(oe),ze(le);const de=i.length/3,Ge=M.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);rt(Ge[0]),rt(Ge[1]),rt(Ge[3]),rt(Ge[1]),rt(Ge[2]),rt(Ge[3])}function ze(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function rt(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Z0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Dl[i.type]().fromJSON(i)),new xc(n,e.options)}}const J0={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ce(r,a),new ce(o,l),new ce(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],g=e[i*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-d),new ce(u,1-g),new ce(x,1-p)]:[new ce(o,1-l),new ce(h,1-d),new ce(f,1-g),new ce(m,1-p)]}};function Z0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fi extends qa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fi(e.radius,e.detail)}}class _c extends qa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _c(e.radius,e.detail)}}class Ds extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let b=0;b<c;b++){const _=b*d-r;g.push(_,-M,0),x.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const b=M+c*p,_=M+c*(p+1),S=M+1+c*(p+1),E=M+1+c*p;f.push(b,_,E),f.push(_,S,E)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class ii extends Et{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new L,u=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const M=[],b=p/n,_=a+b*o,S=e*Math.cos(_),E=Math.sqrt(e*e-S*S);let C=0;p===0&&a===0?C=.5/t:p===n&&l===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){const T=v/t,R=i+T*r;d.x=-E*Math.cos(R),d.y=S,d.z=E*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(T+C,1-b),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const b=h[p][M+1],_=h[p][M],S=h[p+1][M],E=h[p+1][M+1];(p!==0||a>0)&&f.push(b,_,E),(p!==n-1||l<Math.PI)&&f.push(_,S,E)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fr extends Et{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new L,f=new L,g=new L;for(let x=0;x<=n;x++){const m=a+x/n*o;for(let p=0;p<=i;p++){const M=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const p=(i+1)*x+m-1,M=(i+1)*(x-1)+m-1,b=(i+1)*(x-1)+m,_=(i+1)*x+m;l.push(p,M,_),l.push(M,b,_)}this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Is(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(nu(i))i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(nu(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Kt(s){const e={};for(let t=0;t<s.length;t++){const n=Is(s[t]);for(const i in n)e[i]=n[i]}return e}function nu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Q0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ef(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const j0={clone:Is,merge:Kt};var eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Q0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(i.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ng extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xn extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends xn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ig extends gn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Yl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sg extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rg extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function wi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ea(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function ag(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function iu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function og(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Us{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class lg extends Us{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case mh:r=e,o=2*t-n;break;case gh:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mh:a=e,l=2*n-t;break;case gh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+M*a[c+S]+b*a[l+S]+_*a[d+S];return r}}class cg extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class hg extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ug extends Us{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const g=(n-t)/(i-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*g;return r}const u=o*2,f=e-1;for(let g=0;g!==o;++g){const x=a[c+g],m=a[l+g],p=f*u+g*2,M=d[p],b=d[p+1],_=e*u+g*2,S=h[_],E=h[_+1],C=fg(n,t,M,S,i);r[g]=tf(C,x,b,E,m)}return r}}function tf(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function dg(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function fg(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){const o=tf(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;const l=dg(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wi(t,this.TimeBufferType),this.values=wi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wi(e.times,Array),values:wi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Ea(e.settings)&&(n.settings={inTangents:wi(e.settings.inTangents,Array),outTangents:wi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new ug(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case yr:t=this.InterpolantFactoryMethodLinear;break;case so:t=this.InterpolantFactoryMethodSmooth;break;case fh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return so;case this.InterpolantFactoryMethodBezier:return fh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Ea(this.settings)&&(su(this.settings.inTangents,e),su(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&wm(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===so,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ea(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function su(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=yr;class Fs extends Cn{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=vr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class nf extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}nf.prototype.ValueTypeName="color";class Cr extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}Cr.prototype.ValueTypeName="number";class pg extends Us{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)hi.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Pr extends Cn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new pg(this.times,this.values,this.getValueSize(),e)}}Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Cn{constructor(e,t,n){super(e,t,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=vr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class ka extends Cn{constructor(e,t,n,i){super(e,t,n,i)}}ka.prototype.ValueTypeName="vector";class mg{constructor(e="",t=-1,n=[],i=um){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(xg(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=ag(l);l=iu(l,1,h),c=iu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Cr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function gg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cr;case"vector":case"vector2":case"vector3":case"vector4":return ka;case"color":return nf;case"quaternion":return Pr;case"bool":case"boolean":return Fs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function xg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=gg(s.type);if(s.times===void 0){const n=[],i=[];og(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Ea(s.settings)&&(t.settings={inTangents:wi(s.settings.inTangents,Float32Array),outTangents:wi(s.settings.outTangents,Float32Array)}),t}const si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(ru(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!ru(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function ru(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class _g{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const vg=new _g;class ks{constructor(e){this.manager=e!==void 0?e:vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class yg extends Error{constructor(e,t){super(e),this.response=t}}class sf extends ks{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=si.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:i});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Qn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){M();function M(){d.read().then(({done:b,value:_})=>{if(b)p.close();else{x+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,C=h.length;E<C;E++){const v=h[E];v.onProgress&&v.onProgress(S)}p.enqueue(_),M()}},b=>{p.error(b)})}}});return new Response(m)}else throw new yg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{si.add(`file:${e}`,c);const h=Qn[e];delete Qn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Qn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Qn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const hs=new WeakMap;class Mg extends ks{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=si.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=hs.get(a);d===void 0&&(d=[],hs.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=br("img");function l(){h(),t&&t(this);const d=hs.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}hs.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),si.remove(`image:${e}`);const u=hs.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),si.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Ba extends ks{constructor(e){super(e)}load(e,t,n,i){const r=new It,a=new Mg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ir extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ol extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Do=new Je,au=new L,ou=new L;class vc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hc,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;au.setFromMatrixPosition(e.matrixWorld),t.position.copy(au),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Do.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Do,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Mr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Do)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ua=new L,da=new hi,In=new L;class rf extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ua,da,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,In.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ua,da,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yi=new L,lu=new ce,cu=new ce;class Lt extends rf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,lu,cu),t.subVectors(cu,lu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bg extends vc{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ps*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class vs extends Ir{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new bg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Sg extends vc{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}}class Wi extends Ir{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ns extends rf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wg extends vc{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ts extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new wg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class pr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Uo=new WeakMap;class Eg extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=si.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Uo.has(a)===!0?(i&&i(Uo.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return si.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Uo.set(l,c),si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});si.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const us=-90,ds=1;class Tg extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Lt(us,ds,e,t);i.layers=this.layers,this.add(i);const r=new Lt(us,ds,e,t);r.layers=this.layers,this.add(r);const a=new Lt(us,ds,e,t);a.layers=this.layers,this.add(a);const o=new Lt(us,ds,e,t);o.layers=this.layers,this.add(o);const l=new Lt(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new Lt(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ag extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yc="\\[\\]\\.:\\/",Rg=new RegExp("["+yc+"]","g"),Mc="[^"+yc+"]",Cg="[^"+yc.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",Mc),Lg=/(WCOD+)?/.source.replace("WCOD",Cg),Ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mc),Ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mc),Dg=new RegExp("^"+Pg+Lg+Ig+Ng+"$"),Ug=["material","materials","bones","map"];class Fg{constructor(e,t,n){const i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class dt{constructor(e,t,n){this.path=t,this.parsedPath=n||dt.parseTrackName(t),this.node=dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new dt.Composite(e,t,n):new dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rg,"")}static parseTrackName(e){const t=Dg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Ug.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}dt.Composite=Fg;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Tc=class Tc{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Tc.prototype.isMatrix2=!0;let hu=Tc;function uu(s,e,t,n){const i=Og(n);switch(t){case Rd:return s*e;case Zl:return s*e/i.components*i.byteLength;case Ql:return s*e/i.components*i.byteLength;case Hi:return s*e*2/i.components*i.byteLength;case jl:return s*e*2/i.components*i.byteLength;case Cd:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case ec:return s*e*4/i.components*i.byteLength;case ya:case Ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ba:case Sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case il:case rl:return Math.max(s,16)*Math.max(e,8)/4;case nl:case sl:return Math.max(s,8)*Math.max(e,8)/2;case al:case ol:case cl:case hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ll:case Ca:case ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case pl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ml:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Al:case Rl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Cl:case Pl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Pa:case Ll:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Og(s){switch(s){case tn:case wd:return{byteLength:1,components:1};case xr:case Ed:case Hn:return{byteLength:2,components:1};case $l:case Jl:return{byteLength:2,components:4};case Gn:case Kl:case fn:return{byteLength:4,components:1};case Td:case Ad:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ql}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ql);function af(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function kg(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Lx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ox=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$x=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,m_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,__=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ov=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Bg,alphahash_pars_fragment:zg,alphamap_fragment:Gg,alphamap_pars_fragment:Hg,alphatest_fragment:Vg,alphatest_pars_fragment:Wg,aomap_fragment:Xg,aomap_pars_fragment:qg,batching_pars_vertex:Yg,batching_vertex:Kg,begin_vertex:$g,beginnormal_vertex:Jg,bsdfs:Zg,iridescence_fragment:Qg,bumpmap_pars_fragment:jg,clipping_planes_fragment:ex,clipping_planes_pars_fragment:tx,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:sx,color_pars_fragment:rx,color_pars_vertex:ax,color_vertex:ox,common:lx,cube_uv_reflection_fragment:cx,defaultnormal_vertex:hx,displacementmap_pars_vertex:ux,displacementmap_vertex:dx,emissivemap_fragment:fx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:xx,envmap_common_pars_fragment:_x,envmap_pars_fragment:vx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Lx,envmap_vertex:Mx,fog_vertex:bx,fog_pars_vertex:Sx,fog_fragment:wx,fog_pars_fragment:Ex,gradientmap_pars_fragment:Tx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Cx,lights_pars_begin:Px,lights_toon_fragment:Ix,lights_toon_pars_fragment:Nx,lights_phong_fragment:Dx,lights_phong_pars_fragment:Ux,lights_physical_fragment:Fx,lights_physical_pars_fragment:Ox,lights_fragment_begin:kx,lights_fragment_maps:Bx,lights_fragment_end:zx,lightprobes_pars_fragment:Gx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:qx,map_pars_fragment:Yx,map_particle_fragment:Kx,map_particle_pars_fragment:$x,metalnessmap_fragment:Jx,metalnessmap_pars_fragment:Zx,morphinstance_vertex:Qx,morphcolor_vertex:jx,morphnormal_vertex:e_,morphtarget_pars_vertex:t_,morphtarget_vertex:n_,normal_fragment_begin:i_,normal_fragment_maps:s_,normal_pars_fragment:r_,normal_pars_vertex:a_,normal_vertex:o_,normalmap_pars_fragment:l_,clearcoat_normal_fragment_begin:c_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:u_,iridescence_pars_fragment:d_,opaque_fragment:f_,packing:p_,premultiplied_alpha_fragment:m_,project_vertex:g_,dithering_fragment:x_,dithering_pars_fragment:__,roughnessmap_fragment:v_,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:b_,shadowmap_vertex:S_,shadowmask_pars_fragment:w_,skinbase_vertex:E_,skinning_pars_vertex:T_,skinning_vertex:A_,skinnormal_vertex:R_,specularmap_fragment:C_,specularmap_pars_fragment:P_,tonemapping_fragment:L_,tonemapping_pars_fragment:I_,transmission_fragment:N_,transmission_pars_fragment:D_,uv_pars_fragment:U_,uv_pars_vertex:F_,uv_vertex:O_,worldpos_vertex:k_,background_vert:B_,background_frag:z_,backgroundCube_vert:G_,backgroundCube_frag:H_,cube_vert:V_,cube_frag:W_,depth_vert:X_,depth_frag:q_,distance_vert:Y_,distance_frag:K_,equirect_vert:$_,equirect_frag:J_,linedashed_vert:Z_,linedashed_frag:Q_,meshbasic_vert:j_,meshbasic_frag:ev,meshlambert_vert:tv,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:sv,meshnormal_vert:rv,meshnormal_frag:av,meshphong_vert:ov,meshphong_frag:lv,meshphysical_vert:cv,meshphysical_frag:hv,meshtoon_vert:uv,meshtoon_frag:dv,points_vert:fv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:xv,sprite_frag:_v},ye={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Fn={basic:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Kt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Kt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new He(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Kt([ye.points,ye.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Kt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Kt([ye.common,ye.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Kt([ye.sprite,ye.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Kt([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Kt([ye.lights,ye.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Fn.physical={uniforms:Kt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const fa={r:0,b:0,g:0},vv=new Je,of=new Ye;of.set(-1,0,0,0,1,0,0,0,1);function yv(s,e,t,n,i,r){const a=new He(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const _=M.backgroundBlurriness>0;b=e.get(b,_)}return b}function g(M){let b=!1;const _=f(M);_===null?m(a,o):_&&_.isColor&&(m(_,1),b=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,b){const _=f(b);_&&(_.isCubeTexture||_.mapping===Va)?(c===void 0&&(c=new Ke(new Wt(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Is(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vv.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(of),c.material.toneMapped=st.getTransfer(_.colorSpace)!==ht,(h!==_||d!==_.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ke(new Ds(2,2),new Vn({name:"BackgroundMaterial",uniforms:Is(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=st.getTransfer(_.colorSpace)!==ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,b){M.getRGB(fa,ef(s)),t.buffers.color.setClear(fa.r,fa.g,fa.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:x,dispose:p}}function Mv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(I,F,H,D,z){let G=!1;const V=d(I,D,H,F);r!==V&&(r=V,c(r.object)),G=f(I,D,H,z),G&&g(I,D,H,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(I,F,H,D),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,F,H,D){const z=D.wireframe===!0;let G=n[F.id];G===void 0&&(G={},n[F.id]=G);const V=I.isInstancedMesh===!0?I.id:0;let ee=G[V];ee===void 0&&(ee={},G[V]=ee);let q=ee[H.id];q===void 0&&(q={},ee[H.id]=q);let K=q[z];return K===void 0&&(K=u(l()),q[z]=K),K}function u(I){const F=[],H=[],D=[];for(let z=0;z<t;z++)F[z]=0,H[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,F,H,D){const z=r.attributes,G=F.attributes;let V=0;const ee=H.getAttributes();for(const q in ee)if(ee[q].location>=0){const Z=z[q];let Ae=G[q];if(Ae===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Ae=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Ae=I.instanceColor)),Z===void 0||Z.attribute!==Ae||Ae&&Z.data!==Ae.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function g(I,F,H,D){const z={},G=F.attributes;let V=0;const ee=H.getAttributes();for(const q in ee)if(ee[q].location>=0){let Z=G[q];Z===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const Ae={};Ae.attribute=Z,Z&&Z.data&&(Ae.data=Z.data),z[q]=Ae,V++}r.attributes=z,r.attributesNum=V,r.index=D}function x(){const I=r.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){const H=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;H[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),z[I]!==F&&(s.vertexAttribDivisor(I,F),z[I]=F)}function M(){const I=r.newAttributes,F=r.enabledAttributes;for(let H=0,D=F.length;H<D;H++)F[H]!==I[H]&&(s.disableVertexAttribArray(H),F[H]=0)}function b(I,F,H,D,z,G,V){V===!0?s.vertexAttribIPointer(I,F,H,z,G):s.vertexAttribPointer(I,F,H,D,z,G)}function _(I,F,H,D){x();const z=D.attributes,G=H.getAttributes(),V=F.defaultAttributeValues;for(const ee in G){const q=G[ee];if(q.location>=0){let K=z[ee];if(K===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){const Z=K.normalized,Ae=K.itemSize,Me=e.get(K);if(Me===void 0)continue;const qe=Me.buffer,Ze=Me.type,tt=Me.bytesPerElement,J=Ze===s.INT||Ze===s.UNSIGNED_INT||K.gpuType===Kl;if(K.isInterleavedBufferAttribute){const ne=K.data,ue=ne.stride,Ue=K.offset;if(ne.isInstancedInterleavedBuffer){for(let we=0;we<q.locationSize;we++)p(q.location+we,ne.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let we=0;we<q.locationSize;we++)m(q.location+we);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let we=0;we<q.locationSize;we++)b(q.location+we,Ae/q.locationSize,Ze,Z,ue*tt,(Ue+Ae/q.locationSize*we)*tt,J)}else{if(K.isInstancedBufferAttribute){for(let ne=0;ne<q.locationSize;ne++)p(q.location+ne,K.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ne=0;ne<q.locationSize;ne++)m(q.location+ne);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let ne=0;ne<q.locationSize;ne++)b(q.location+ne,Ae/q.locationSize,Ze,Z,Ae*tt,Ae/q.locationSize*ne*tt,J)}}else if(V!==void 0){const Z=V[ee];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(q.location,Z);break;case 3:s.vertexAttrib3fv(q.location,Z);break;case 4:s.vertexAttrib4fv(q.location,Z);break;default:s.vertexAttrib1fv(q.location,Z)}}}}M()}function S(){T();for(const I in n){const F=n[I];for(const H in F){const D=F[H];for(const z in D){const G=D[z];for(const V in G)h(G[V].object),delete G[V];delete D[z]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;const F=n[I.id];for(const H in F){const D=F[H];for(const z in D){const G=D[z];for(const V in G)h(G[V].object),delete G[V];delete D[z]}}delete n[I.id]}function C(I){for(const F in n){const H=n[F];for(const D in H){const z=H[D];if(z[I.id]===void 0)continue;const G=z[I.id];for(const V in G)h(G[V].object),delete G[V];delete z[I.id]}}}function v(I){for(const F in n){const H=n[F],D=I.isInstancedMesh===!0?I.id:0,z=H[D];if(z!==void 0){for(const G in z){const V=z[G];for(const ee in V)h(V[ee].object),delete V[ee];delete z[G]}delete H[D],Object.keys(H).length===0&&delete n[F]}}}function T(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function bv(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Sv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==pn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==tn&&C!==fn&&!v&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,maxSamples:S,samples:E}}function wv(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Si,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,b=M*4;let _=p.clippingState||null;l.value=_,_=h(g,u,b,f);for(let S=0;S!==b;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,_=f;b!==x;++b,_+=4)a.copy(d[b]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const ys=4,Ev=6,Tv=20,Av=256,Qs=new Ns,du=new He;let Fo=null,Oo=0,ko=0,Bo=!1;const Rv=new L,Ii=new L;class kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=Rv}=r;Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Oo,ko),this._renderer.xr.enabled=Bo,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Hn,format:pn,colorSpace:rn,depthBuffer:!1},i=fu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cv(r)),this._blurMaterial=Lv(r,e,t),this._ggxMaterial=Pv(r,e,t)}return i}_compileMaterial(e){const t=new Ke(new Et,e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,n,i,r){const l=new Lt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(du),d.toneMapping=zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new Wt,new Bt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(du),p=!0);for(let b=0;b<6;b++){const _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const S=this._cubeSize;fs(i,_*S,b>2?S:0,S,S),d.setRenderTarget(i),p&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Gi||e.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-ys?n-g+ys:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,fs(r,m,p,3*x,2*x),i.setRenderTarget(r),i.render(o,Qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,fs(e,m,p,3*x,2*x),i.setRenderTarget(e),i.render(o,Qs)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-ys?i-this._lodMax+ys:0),u=4*(this._cubeSize-h);fs(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Qs)}}function Cv(s){const e=[],t=[];let n=s;const i=s-ys+1+Ev;for(let r=0;r<i;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){const M=p%3*2/3-1,b=p>2?0:-1,_=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];g.set(_,f*u*p);for(let S=0;S<u;S++){const E=h[S*2]*2-1,C=h[S*2+1]*2-1;p===0?Ii.set(1,C,E):p===1?Ii.set(-E,1,-C):p===2?Ii.set(-E,C,1):p===3?Ii.set(-1,C,-E):p===4?Ii.set(-E,-1,C):Ii.set(E,C,-1),Ii.toArray(x,(p*u+S)*f)}}const m=new Et;m.setAttribute("position",new Jt(g,f)),m.setAttribute("outputDirection",new Jt(x,f)),t.push(new Ke(m,null)),n>ys&&n--}return{lodMeshes:t,sizeLods:e}}function fu(s,e,t){const n=new An(s,e,t);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Pv(s,e,t){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Av,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Lv(s,e,t){return new Vn({name:"SphericalGaussianBlur",defines:{SAMPLES:Tv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function pu(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function mu(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class lf extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Vd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wt(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:ai});r.uniforms.tEquirect.value=t;const a=new Ke(i,r),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=Dt),new Tg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function Iv(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===no||f===io)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new lf(g.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===no||f===io,x=f===Gi||f===Cs;if(g||x){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new kl(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new kl(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===no?u.mapping=Gi:f===io&&(u.mapping=Cs),u}function l(u){let f=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Nv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ws("WebGLRenderer: "+n+" extension not supported."),i}}}function Dv(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const M=f.array;x=f.version;for(let b=0,_=M.length;b<_;b+=3){const S=M[b+0],E=M[b+1],C=M[b+2];u.push(S,E,E,C,C,S)}}else{const M=g.array;x=g.version;for(let b=0,_=M.length/3-1;b<_;b+=3){const S=b+0,E=b+1,C=b+2;u.push(S,E,E,C,C,S)}}const m=new(g.count>=65535?Od:Fd)(u,1);m.version=x;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Uv(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Fv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ov(s,e,t){const n=new WeakMap,i=new pt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let _=o.attributes.position.count*b,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const E=new Float32Array(_*S*4*d),C=new Nd(E,_,S,d);C.type=fn,C.needsUpdate=!0;const v=b*4;for(let R=0;R<d;R++){const I=m[R],F=p[R],H=M[R],D=_*S*4*R;for(let z=0;z<I.count;z++){const G=z*v;f===!0&&(i.fromBufferAttribute(I,z),E[D+G+0]=i.x,E[D+G+1]=i.y,E[D+G+2]=i.z,E[D+G+3]=0),g===!0&&(i.fromBufferAttribute(F,z),E[D+G+4]=i.x,E[D+G+5]=i.y,E[D+G+6]=i.z,E[D+G+7]=0),x===!0&&(i.fromBufferAttribute(H,z),E[D+G+8]=i.x,E[D+G+9]=i.y,E[D+G+10]=i.z,E[D+G+11]=H.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new ce(_,S)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function kv(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Bv={[gd]:"LINEAR_TONE_MAPPING",[xd]:"REINHARD_TONE_MAPPING",[_d]:"CINEON_TONE_MAPPING",[Ha]:"ACES_FILMIC_TONE_MAPPING",[yd]:"AGX_TONE_MAPPING",[Md]:"NEUTRAL_TONE_MAPPING",[vd]:"CUSTOM_TONE_MAPPING"};function zv(s,e,t,n,i,r){const a=new An(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Et;c.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ot([0,2,0,0,2,0],2));const h=new ng({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ke(c,h),u=new Ns(-1,1,1,-1,0,1);let f=null,g=null,x=!1,m,p=null,M=[],b=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let E=0;E<M.length;E++){const C=M[E];C.setSize&&C.setSize(_,S)}},this.setEffects=function(_){M=_,b=M.length>0&&M[0].isRenderPass===!0;const S=a.width,E=a.height;M.length>0&&o===null&&(o=new An(S,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new An(S,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){const v=M[C];v.setSize&&v.setSize(S,E)}},this.begin=function(_,S){if(x||_.toneMapping===zn&&M.length===0)return!1;if(p=S,S!==null){const E=S.width,C=S.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return b===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=zn,!0},this.hasRenderPass=function(){return b},this.end=function(_,S){_.toneMapping=m,x=!0;let E=a,C=o;for(let v=0;v<M.length;v++){const T=M[v];T.enabled!==!1&&(T.render(_,C,E,S),T.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},st.getTransfer(f)===ht&&(h.defines.SRGB_TRANSFER="");const v=Bv[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const cf=new It,Bl=new Er(1,1),hf=new Nd,uf=new $m,df=new Vd,gu=[],xu=[],_u=new Float32Array(16),vu=new Float32Array(9),yu=new Float32Array(4);function Bs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=gu[i];if(r===void 0&&(r=new Float32Array(i),gu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ka(s,e){let t=xu[e];t===void 0&&(t=new Int32Array(e),xu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Gv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Ft(t,e)}}function Vv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Ft(t,e)}}function Wv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Ft(t,e)}}function Xv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;yu.set(n),s.uniformMatrix2fv(this.addr,!1,yu),Ft(t,n)}}function qv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;vu.set(n),s.uniformMatrix3fv(this.addr,!1,vu),Ft(t,n)}}function Yv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;_u.set(n),s.uniformMatrix4fv(this.addr,!1,_u),Ft(t,n)}}function Kv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $v(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Ft(t,e)}}function Jv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Ft(t,e)}}function Zv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Ft(t,e)}}function Qv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Ft(t,e)}}function ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Ft(t,e)}}function ty(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Ft(t,e)}}function ny(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Bl.compareFunction=t.isReversedDepthBuffer()?nc:tc,r=Bl):r=cf,t.setTexture2D(e||r,i)}function iy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||uf,i)}function sy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||df,i)}function ry(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hf,i)}function ay(s){switch(s){case 5126:return Gv;case 35664:return Hv;case 35665:return Vv;case 35666:return Wv;case 35674:return Xv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return Kv;case 35667:case 35671:return $v;case 35668:case 35672:return Jv;case 35669:case 35673:return Zv;case 5125:return Qv;case 36294:return jv;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}function oy(s,e){s.uniform1fv(this.addr,e)}function ly(s,e){const t=Bs(e,this.size,2);s.uniform2fv(this.addr,t)}function cy(s,e){const t=Bs(e,this.size,3);s.uniform3fv(this.addr,t)}function hy(s,e){const t=Bs(e,this.size,4);s.uniform4fv(this.addr,t)}function uy(s,e){const t=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dy(s,e){const t=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function fy(s,e){const t=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function py(s,e){s.uniform1iv(this.addr,e)}function my(s,e){s.uniform2iv(this.addr,e)}function gy(s,e){s.uniform3iv(this.addr,e)}function xy(s,e){s.uniform4iv(this.addr,e)}function _y(s,e){s.uniform1uiv(this.addr,e)}function vy(s,e){s.uniform2uiv(this.addr,e)}function yy(s,e){s.uniform3uiv(this.addr,e)}function My(s,e){s.uniform4uiv(this.addr,e)}function by(s,e,t){const n=this.cache,i=e.length,r=Ka(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Bl:a=cf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Sy(s,e,t){const n=this.cache,i=e.length,r=Ka(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||uf,r[a])}function wy(s,e,t){const n=this.cache,i=e.length,r=Ka(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||df,r[a])}function Ey(s,e,t){const n=this.cache,i=e.length,r=Ka(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||hf,r[a])}function Ty(s){switch(s){case 5126:return oy;case 35664:return ly;case 35665:return cy;case 35666:return hy;case 35674:return uy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return xy;case 5125:return _y;case 36294:return vy;case 36295:return yy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ey}}class Ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ay(t.type)}}class Ry{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ty(t.type)}}class Cy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function Mu(s,e){s.seq.push(e),s.map[e.id]=e}function Py(s,e,t){const n=s.name,i=n.length;for(zo.lastIndex=0;;){const r=zo.exec(n),a=zo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Mu(t,c===void 0?new Ay(o,s,e):new Ry(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Cy(o),Mu(t,d)),t=d}}}class Ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Py(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function bu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ly=37297;let Iy=0;function Ny(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Su=new Ye;function Dy(s){st._getMatrix(Su,st.workingColorSpace,s);const e=`mat3( ${Su.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(s)){case Ia:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ny(s.getShaderSource(e),o)}else return r}function Uy(s,e){const t=Dy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Fy={[gd]:"Linear",[xd]:"Reinhard",[_d]:"Cineon",[Ha]:"ACESFilmic",[yd]:"AgX",[Md]:"Neutral",[vd]:"Custom"};function Oy(s,e){const t=Fy[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pa=new L;function ky(){st.getLuminanceCoefficients(pa);const s=pa.x.toFixed(4),e=pa.y.toFixed(4),t=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function By(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function zy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gy(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function rr(s){return s!==""}function Eu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(s){return s.replace(Hy,Wy)}const Vy=new Map;function Wy(s,e){let t=je[e];if(t===void 0){const n=Vy.get(e);if(n!==void 0)t=je[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zl(t)}const Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(s){return s.replace(Xy,qy)}function qy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ru(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Yy={[lr]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function Ky(s){return Yy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $y={[Gi]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE_UV"};function Jy(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":$y[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Zy={[Cs]:"ENVMAP_MODE_REFRACTION"};function Qy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Zy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jy={[Yl]:"ENVMAP_BLENDING_MULTIPLY",[lm]:"ENVMAP_BLENDING_MIX",[cm]:"ENVMAP_BLENDING_ADD"};function eM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":jy[s.combine]||"ENVMAP_BLENDING_NONE"}function tM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nM(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ky(t),c=Jy(t),h=Qy(t),d=eM(t),u=tM(t),f=By(t),g=zy(r),x=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?je.tonemapping_pars_fragment:"",t.toneMapping!==zn?Oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Uy("linearToOutputTexel",t.outputColorSpace),ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=zl(a),a=Eu(a,t),a=Tu(a,t),o=zl(o),o=Eu(o,t),o=Tu(o,t),a=Au(a),o=Au(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+m+a,_=M+p+o,S=bu(i,i.VERTEX_SHADER,b),E=bu(i,i.FRAGMENT_SHADER,_);i.attachShader(x,S),i.attachShader(x,E),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(I){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(x)||"",H=i.getShaderInfoLog(S)||"",D=i.getShaderInfoLog(E)||"",z=F.trim(),G=H.trim(),V=D.trim();let ee=!0,q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,E);else{const K=wu(i,S,"vertex"),Z=wu(i,E,"fragment");Xe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+K+`
`+Z)}else z!==""?De("WebGLProgram: Program Info Log:",z):(G===""||V==="")&&(q=!1);q&&(I.diagnostics={runnable:ee,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(S),i.deleteShader(E),v=new Ta(i,x),T=Gy(i,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,Ly)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=E,this}let iM=0;class sM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rM(e),t.set(e,n)),n}}class rM{constructor(e){this.id=iM++,this.code=e,this.usedTimes=0}}function aM(s){return s===Hi||s===Ca||s===Pa}function oM(s,e,t,n,i,r){const a=new Dd,o=new sM,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,R,I,F,H){const D=I.fog,z=F.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||G,V),q=ee&&ee.mapping===Va?ee.image.height:null,K=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ae=Z!==void 0?Z.length:0;let Me=0;z.morphAttributes.position!==void 0&&(Me=1),z.morphAttributes.normal!==void 0&&(Me=2),z.morphAttributes.color!==void 0&&(Me=3);let qe,Ze,tt,J;if(K){const xt=Fn[K];qe=xt.vertexShader,Ze=xt.fragmentShader}else{qe=v.vertexShader,Ze=v.fragmentShader;const xt=o.getVertexShaderStage(v),lt=o.getFragmentShaderStage(v);o.update(v,xt,lt),tt=xt.id,J=lt.id}const ne=s.getRenderTarget(),ue=s.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,we=F.isBatchedMesh===!0,ze=!!v.map,rt=!!v.matcap,j=!!ee,ae=!!v.aoMap,oe=!!v.lightMap,le=!!v.bumpMap&&v.wireframe===!1,de=!!v.normalMap,Ge=!!v.displacementMap,Fe=!!v.emissiveMap,Ve=!!v.metalnessMap,N=!!v.roughnessMap,P=v.anisotropy>0,se=v.clearcoat>0,fe=v.dispersion>0,A=v.retroreflectivity>0,y=v.iridescence>0,k=v.sheen>0,B=v.transmission>0,$=P&&!!v.anisotropyMap,he=se&&!!v.clearcoatMap,pe=se&&!!v.clearcoatNormalMap,Q=se&&!!v.clearcoatRoughnessMap,ie=y&&!!v.iridescenceMap,me=y&&!!v.iridescenceThicknessMap,Oe=k&&!!v.sheenColorMap,ve=k&&!!v.sheenRoughnessMap,ge=!!v.specularMap,ke=!!v.specularColorMap,We=!!v.specularIntensityMap,$e=B&&!!v.transmissionMap,O=B&&!!v.thicknessMap,xe=!!v.gradientMap,te=!!v.alphaMap,_e=v.alphaTest>0,Ee=!!v.alphaHash,re=!!v.extensions;let Be=zn;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Be=s.toneMapping);const Ie={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:Ze,defines:v.defines,customVertexShaderID:tt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:we,batchingColor:we&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ze,matcap:rt,envMap:j,envMapMode:j&&ee.mapping,envMapCubeUVHeight:q,aoMap:ae,lightMap:oe,bumpMap:le,normalMap:de,displacementMap:Ge,emissiveMap:Fe,normalMapObjectSpace:de&&v.normalMapType===pm,normalMapTangentSpace:de&&v.normalMapType===La,packedNormalMap:de&&v.normalMapType===La&&aM(v.normalMap.format),metalnessMap:Ve,roughnessMap:N,anisotropy:P,anisotropyMap:$,clearcoat:se,clearcoatMap:he,clearcoatNormalMap:pe,clearcoatRoughnessMap:Q,dispersion:fe,retroreflection:A,iridescence:y,iridescenceMap:ie,iridescenceThicknessMap:me,sheen:k,sheenColorMap:Oe,sheenRoughnessMap:ve,specularMap:ge,specularColorMap:ke,specularIntensityMap:We,transmission:B,transmissionMap:$e,thicknessMap:O,gradientMap:xe,opaque:v.transparent===!1&&v.blending===Ss&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:_e,alphaHash:Ee,combine:v.combine,mapUv:ze&&g(v.map.channel),aoMapUv:ae&&g(v.aoMap.channel),lightMapUv:oe&&g(v.lightMap.channel),bumpMapUv:le&&g(v.bumpMap.channel),normalMapUv:de&&g(v.normalMap.channel),displacementMapUv:Ge&&g(v.displacementMap.channel),emissiveMapUv:Fe&&g(v.emissiveMap.channel),metalnessMapUv:Ve&&g(v.metalnessMap.channel),roughnessMapUv:N&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:he&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(v.sheenRoughnessMap.channel),specularMapUv:ge&&g(v.specularMap.channel),specularColorMapUv:ke&&g(v.specularColorMap.channel),specularIntensityMapUv:We&&g(v.specularIntensityMap.channel),transmissionMapUv:$e&&g(v.transmissionMap.channel),thicknessMapUv:O&&g(v.thicknessMap.channel),alphaMapUv:te&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(de||P),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(ze||te),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&de===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Be,decodeVideoTexture:ze&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===ht,decodeVideoTextureEmissive:Fe&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===En,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(T,v),M(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){const T=f[v.type];let R;if(T){const I=Fn[T];R=j0.clone(I.uniforms)}else R=v.uniforms;return R}function _(v,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new nM(s,T,v,i),c.push(R),h.set(T,R)),R}function S(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:C}}function lM(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function cM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Cu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,m,p){let M=s[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},s[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function l(u,f,g,x,m,p,M){M.reversedDepth===!0&&(m=-m);const b=o(u,f,g,x,m,p);g.transmission>0?n.push(b):g.transparent===!0?i.push(b):t.push(b)}function c(u,f,g,x,m,p){const M=o(u,f,g,x,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||cM),n.length>1&&n.sort(f||Cu),i.length>1&&i.sort(f||Cu)}function d(){for(let u=e,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function hM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Pu,s.set(n,[a])):i>=r.length?(a=new Pu,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function uM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new He};break;case"SpotLight":t={position:new L,direction:new L,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function dM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let fM=0;function pM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mM(s){const e=new uM,t=dM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Je,a=new Je;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,b=0,_=0,S=0,E=0,C=0,v=0,T=0,R=0;c.sort(pM);for(let F=0,H=c.length;F<H;F++){const D=c[F],z=D.color,G=D.intensity,V=D.distance;let ee=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Hi?ee=D.shadow.map.texture:ee=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*G,d+=z.g*G,u+=z.b*G;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],G);R++}else if(D.isSunLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,Z=t.get(D);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=ee;const Ae=K.getViewportCount();for(let Me=0;Me<Ae;Me++)n.sunShadowMatrix[x+Me]=K.getMatrix(Me),n.sunShadowCascade[x+Me]=K._cascadeData[Me];x+=Ae,g++}n.sun[f]=q,f++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,Z=t.get(D);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=q,m++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(z).multiplyScalar(G),q.distance=V,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[M]=q;const K=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,K.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[M]=K.matrix,D.castShadow){const Z=t.get(D);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,n.spotShadow[M]=Z,n.spotShadowMap[M]=ee,C++}M++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(z).multiplyScalar(G),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=q,b++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const K=D.shadow,Z=t.get(D);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,n.pointShadow[p]=Z,n.pointShadowMap[p]=ee,n.pointShadowMatrix[p]=D.shadow.matrix,E++}n.point[p]=q,p++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(G),q.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[_]=q,_++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==b||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==S||I.numPointShadows!==E||I.numSpotShadows!==C||I.numSpotMaps!==v||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=b,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=M,I.rectAreaLength=b,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=S,I.numPointShadows=E,I.numSpotShadows=C,I.numSpotMaps=v,I.numLightProbes=R,n.version=fM++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,m=0;const p=h.matrixWorldInverse;for(let M=0,b=c.length;M<b;M++){const _=c[M];if(_.isSunLight){const S=n.sun[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),d++}else if(_.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(_.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const S=n.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const S=n.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Lu(s){const e=new mM(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function gM(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Lu(s),e.set(i,[o])):r>=a.length?(o=new Lu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const xM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],yM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Iu=new Je,js=new L,Go=new L;function MM(s,e,t){let n=new hc;const i=new ce,r=new ce,a=new pt,o=new sg,l=new rg,c={},h=t.maxTextureSize,d={[Ti]:$t,[$t]:Ti,[En]:En},u=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:xM,fragmentShader:_M}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ke(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lr;let p=this.type;this.render=function(E,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Vp&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lr);const T=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==this.type;H&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=E.length;D<z;D++){const G=E[D],V=G.shadow;if(V===void 0){De("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ee=V.getFrameExtents();i.multiply(ee),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,V.mapSize.y=r.y));const q=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===nr){if(G.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new An(i.x,i.y,{format:Hi,type:Hn,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new Er(i.x,i.y,fn),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=li,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt}else G.isPointLight?(V.map=new lf(i.x),V.map.depthTexture=new _0(i.x,Gn)):(V.map=new An(i.x,i.y),V.map.depthTexture=new Er(i.x,i.y,Gn)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=li,this.type===lr?(V.map.depthTexture.compareFunction=q?nc:tc,V.map.depthTexture.minFilter=Dt,V.map.depthTexture.magFilter=Dt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);const K=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();G.isPointLight!==!0&&V.updateMatrices(G,v);for(let Z=0;Z<K;Z++){const Ae=V.getCamera(Z);if(G.isPointLight){const Me=V.camera,qe=V.matrix,Ze=G.distance||Me.far;Ze!==Me.far&&(Me.far=Ze,Me.updateProjectionMatrix()),js.setFromMatrixPosition(G.matrixWorld),Me.position.copy(js),Go.copy(Me.position),Go.add(vM[Z]),Me.up.copy(yM[Z]),Me.lookAt(Go),Me.updateMatrixWorld(),qe.makeTranslation(-js.x,-js.y,-js.z),Iu.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Iu,Me.coordinateSystem,Me.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,Z),s.clear();else{Z===0&&(s.setRenderTarget(V.map),s.clear());const Me=V.getViewport(Z);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),F.viewport(a)}n=V.getFrustum(Z),_(C,v,Ae,G,this.type)}V.isPointLightShadow!==!0&&this.type===nr&&M(V,v),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,R,I)};function M(E,C){const v=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new An(i.x,i.y,{format:Hi,type:Hn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,v,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,v,f,x,null)}function b(E,C,v,T){let R=null;const I=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=v.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=R.uuid,H=C.uuid;let D=c[F];D===void 0&&(D={},c[F]=D);let z=D[H];z===void 0&&(z=R.clone(),D[H]=z,C.addEventListener("dispose",S)),R=z}if(R.visible=C.visible,R.wireframe=C.wireframe,T===nr?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=s.properties.get(R);F.light=v}return R}function _(E,C,v,T,R){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===nr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const H=e.update(E),D=E.material;if(Array.isArray(D)){const z=H.groups;for(let G=0,V=z.length;G<V;G++){const ee=z[G],q=D[ee.materialIndex];if(q&&q.visible){const K=b(E,q,T,R);E.onBeforeShadow(s,E,C,v,H,K,ee),s.renderBufferDirect(v,null,H,K,E,ee),E.onAfterShadow(s,E,C,v,H,K,ee)}}}else if(D.visible){const z=b(E,D,T,R);E.onBeforeShadow(s,E,C,v,H,z,null),s.renderBufferDirect(v,null,H,z,E,null),E.onAfterShadow(s,E,C,v,H,z,null)}}const F=E.children;for(let H=0,D=F.length;H<D;H++)_(F[H],C,v,T,R)}function S(E){E.target.removeEventListener("dispose",S);for(const v in c){const T=c[v],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function bM(s,e){function t(){let O=!1;const xe=new pt;let te=null;const _e=new pt(0,0,0,0);return{setMask:function(Ee){te!==Ee&&!O&&(s.colorMask(Ee,Ee,Ee,Ee),te=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,re,Be,Ie,xt){xt===!0&&(Ee*=Ie,re*=Ie,Be*=Ie),xe.set(Ee,re,Be,Ie),_e.equals(xe)===!1&&(s.clearColor(Ee,re,Be,Ie),_e.copy(xe))},reset:function(){O=!1,te=null,_e.set(-1,0,0,0)}}}function n(){let O=!1,xe=!1,te=null,_e=null,Ee=null;return{setReversed:function(re){if(xe!==re){const Be=e.get("EXT_clip_control");re?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),xe=re;const Ie=Ee;Ee=null,this.setClear(Ie)}},getReversed:function(){return xe},setTest:function(re){re?ne(s.DEPTH_TEST):ue(s.DEPTH_TEST)},setMask:function(re){te!==re&&!O&&(s.depthMask(re),te=re)},setFunc:function(re){if(xe&&(re=Am[re]),_e!==re){switch(re){case $o:s.depthFunc(s.NEVER);break;case Jo:s.depthFunc(s.ALWAYS);break;case Zo:s.depthFunc(s.LESS);break;case gr:s.depthFunc(s.LEQUAL);break;case Qo:s.depthFunc(s.EQUAL);break;case jo:s.depthFunc(s.GEQUAL);break;case el:s.depthFunc(s.GREATER);break;case tl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=re}},setLocked:function(re){O=re},setClear:function(re){Ee!==re&&(Ee=re,xe&&(re=1-re),s.clearDepth(re))},reset:function(){O=!1,te=null,_e=null,Ee=null,xe=!1}}}function i(){let O=!1,xe=null,te=null,_e=null,Ee=null,re=null,Be=null,Ie=null,xt=null;return{setTest:function(lt){O||(lt?ne(s.STENCIL_TEST):ue(s.STENCIL_TEST))},setMask:function(lt){xe!==lt&&!O&&(s.stencilMask(lt),xe=lt)},setFunc:function(lt,vn,Pn){(te!==lt||_e!==vn||Ee!==Pn)&&(s.stencilFunc(lt,vn,Pn),te=lt,_e=vn,Ee=Pn)},setOp:function(lt,vn,Pn){(re!==lt||Be!==vn||Ie!==Pn)&&(s.stencilOp(lt,vn,Pn),re=lt,Be=vn,Ie=Pn)},setLocked:function(lt){O=lt},setClear:function(lt){xt!==lt&&(s.clearStencil(lt),xt=lt)},reset:function(){O=!1,xe=null,te=null,_e=null,Ee=null,re=null,Be=null,Ie=null,xt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,b=null,_=null,S=null,E=null,C=null,v=new He(0,0,0),T=0,R=!1,I=null,F=null,H=null,D=null,z=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ee=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=ee>=2);let K=null,Z={};const Ae=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),qe=new pt().fromArray(Ae),Ze=new pt().fromArray(Me);function tt(O,xe,te,_e){const Ee=new Uint8Array(4),re=s.createTexture();s.bindTexture(O,re),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<te;Be++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(xe+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return re}const J={};J[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(s.DEPTH_TEST),a.setFunc(gr),le(!1),de(ch),ne(s.CULL_FACE),ae(ai);function ne(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function ue(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Ue(O,xe){return u[O]!==xe?(s.bindFramebuffer(O,xe),u[O]=xe,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=xe),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function we(O,xe){let te=g,_e=!1;if(O){te=f.get(xe),te===void 0&&(te=[],f.set(xe,te));const Ee=O.textures;if(te.length!==Ee.length||te[0]!==s.COLOR_ATTACHMENT0){for(let re=0,Be=Ee.length;re<Be;re++)te[re]=s.COLOR_ATTACHMENT0+re;te.length=Ee.length,_e=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,_e=!0);_e&&s.drawBuffers(te)}function ze(O){return x!==O?(s.useProgram(O),x=O,!0):!1}const rt={[gs]:s.FUNC_ADD,[Xp]:s.FUNC_SUBTRACT,[qp]:s.FUNC_REVERSE_SUBTRACT};rt[Yp]=s.MIN,rt[Kp]=s.MAX;const j={[$p]:s.ZERO,[Jp]:s.ONE,[Zp]:s.SRC_COLOR,[pd]:s.SRC_ALPHA,[im]:s.SRC_ALPHA_SATURATE,[tm]:s.DST_COLOR,[jp]:s.DST_ALPHA,[Qp]:s.ONE_MINUS_SRC_COLOR,[md]:s.ONE_MINUS_SRC_ALPHA,[nm]:s.ONE_MINUS_DST_COLOR,[em]:s.ONE_MINUS_DST_ALPHA,[sm]:s.CONSTANT_COLOR,[rm]:s.ONE_MINUS_CONSTANT_COLOR,[am]:s.CONSTANT_ALPHA,[om]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(O,xe,te,_e,Ee,re,Be,Ie,xt,lt){if(O===ai){m===!0&&(ue(s.BLEND),m=!1);return}if(m===!1&&(ne(s.BLEND),m=!0),O!==Wp){if(O!==p||lt!==R){if((M!==gs||S!==gs)&&(s.blendEquation(s.FUNC_ADD),M=gs,S=gs),lt)switch(O){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ui:s.blendFunc(s.ONE,s.ONE);break;case hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xe("WebGLState: Invalid blending: ",O);break}else switch(O){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case hh:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",O);break}b=null,_=null,E=null,C=null,v.set(0,0,0),T=0,p=O,R=lt}return}Ee=Ee||xe,re=re||te,Be=Be||_e,(xe!==M||Ee!==S)&&(s.blendEquationSeparate(rt[xe],rt[Ee]),M=xe,S=Ee),(te!==b||_e!==_||re!==E||Be!==C)&&(s.blendFuncSeparate(j[te],j[_e],j[re],j[Be]),b=te,_=_e,E=re,C=Be),(Ie.equals(v)===!1||xt!==T)&&(s.blendColor(Ie.r,Ie.g,Ie.b,xt),v.copy(Ie),T=xt),p=O,R=!1}function oe(O,xe){O.side===En?ue(s.CULL_FACE):ne(s.CULL_FACE);let te=O.side===$t;xe&&(te=!te),le(te),O.blending===Ss&&O.transparent===!1?ae(ai):ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const _e=O.stencilWrite;o.setTest(_e),_e&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(O){I!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),I=O)}function de(O){O!==Gp?(ne(s.CULL_FACE),O!==F&&(O===ch?s.cullFace(s.BACK):O===Hp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ue(s.CULL_FACE),F=O}function Ge(O){O!==H&&(V&&s.lineWidth(O),H=O)}function Fe(O,xe,te){O?(ne(s.POLYGON_OFFSET_FILL),(D!==xe||z!==te)&&(D=xe,z=te,a.getReversed()&&(xe=-xe),s.polygonOffset(xe,te))):ue(s.POLYGON_OFFSET_FILL)}function Ve(O){O?ne(s.SCISSOR_TEST):ue(s.SCISSOR_TEST)}function N(O){O===void 0&&(O=s.TEXTURE0+G-1),K!==O&&(s.activeTexture(O),K=O)}function P(O,xe,te){te===void 0&&(K===null?te=s.TEXTURE0+G-1:te=K);let _e=Z[te];_e===void 0&&(_e={type:void 0,texture:void 0},Z[te]=_e),(_e.type!==O||_e.texture!==xe)&&(K!==te&&(s.activeTexture(te),K=te),s.bindTexture(O,xe||J[O]),_e.type=O,_e.texture=xe)}function se(){const O=Z[K];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function fe(){try{s.compressedTexImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function y(){try{s.texSubImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function k(){try{s.texSubImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function B(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function he(){try{s.texStorage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function pe(){try{s.texStorage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function Q(){try{s.texImage2D(...arguments)}catch(O){Xe("WebGLState:",O)}}function ie(){try{s.texImage3D(...arguments)}catch(O){Xe("WebGLState:",O)}}function me(O){return d[O]!==void 0?d[O]:s.getParameter(O)}function Oe(O,xe){d[O]!==xe&&(s.pixelStorei(O,xe),d[O]=xe)}function ve(O){qe.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),qe.copy(O))}function ge(O){Ze.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Ze.copy(O))}function ke(O,xe){let te=c.get(xe);te===void 0&&(te=new WeakMap,c.set(xe,te));let _e=te.get(O);_e===void 0&&(_e=s.getUniformBlockIndex(xe,O.name),te.set(O,_e))}function We(O,xe){const _e=c.get(xe).get(O);l.get(xe)!==_e&&(s.uniformBlockBinding(xe,_e,O.__bindingPointIndex),l.set(xe,_e))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,Z={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,b=null,_=null,S=null,E=null,C=null,v=new He(0,0,0),T=0,R=!1,I=null,F=null,H=null,D=null,z=null,qe.set(0,0,s.canvas.width,s.canvas.height),Ze.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ue,bindFramebuffer:Ue,drawBuffers:we,useProgram:ze,setBlending:ae,setMaterial:oe,setFlipSided:le,setCullFace:de,setLineWidth:Ge,setPolygonOffset:Fe,setScissorTest:Ve,activeTexture:N,bindTexture:P,unbindTexture:se,compressedTexImage2D:fe,compressedTexImage3D:A,texImage2D:Q,texImage3D:ie,pixelStorei:Oe,getParameter:me,updateUBOMapping:ke,uniformBlockBinding:We,texStorage2D:he,texStorage3D:pe,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:B,compressedTexSubImage3D:$,scissor:ve,viewport:ge,reset:$e}}function SM(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,y){return g?new OffscreenCanvas(A,y):br("canvas")}function m(A,y,k){let B=1;const $=fe(A);if(($.width>k||$.height>k)&&(B=k/Math.max($.width,$.height)),B<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const he=Math.floor(B*$.width),pe=Math.floor(B*$.height);u===void 0&&(u=x(he,pe));const Q=y?x(he,pe):u;return Q.width=he,Q.height=pe,Q.getContext("2d").drawImage(A,0,0,he,pe),De("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+he+"x"+pe+")."),Q}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){s.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(A,y,k,B,$,he=!1){if(A!==null){if(s[A]!==void 0)return s[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe;B&&(pe=e.get("EXT_texture_norm16"),pe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=y;if(y===s.RED&&(k===s.FLOAT&&(Q=s.R32F),k===s.HALF_FLOAT&&(Q=s.R16F),k===s.UNSIGNED_BYTE&&(Q=s.R8),k===s.UNSIGNED_SHORT&&pe&&(Q=pe.R16_EXT),k===s.SHORT&&pe&&(Q=pe.R16_SNORM_EXT)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.R8UI),k===s.UNSIGNED_SHORT&&(Q=s.R16UI),k===s.UNSIGNED_INT&&(Q=s.R32UI),k===s.BYTE&&(Q=s.R8I),k===s.SHORT&&(Q=s.R16I),k===s.INT&&(Q=s.R32I)),y===s.RG&&(k===s.FLOAT&&(Q=s.RG32F),k===s.HALF_FLOAT&&(Q=s.RG16F),k===s.UNSIGNED_BYTE&&(Q=s.RG8),k===s.UNSIGNED_SHORT&&pe&&(Q=pe.RG16_EXT),k===s.SHORT&&pe&&(Q=pe.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RG8UI),k===s.UNSIGNED_SHORT&&(Q=s.RG16UI),k===s.UNSIGNED_INT&&(Q=s.RG32UI),k===s.BYTE&&(Q=s.RG8I),k===s.SHORT&&(Q=s.RG16I),k===s.INT&&(Q=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),k===s.UNSIGNED_INT&&(Q=s.RGB32UI),k===s.BYTE&&(Q=s.RGB8I),k===s.SHORT&&(Q=s.RGB16I),k===s.INT&&(Q=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),k===s.UNSIGNED_INT&&(Q=s.RGBA32UI),k===s.BYTE&&(Q=s.RGBA8I),k===s.SHORT&&(Q=s.RGBA16I),k===s.INT&&(Q=s.RGBA32I)),y===s.RGB&&(k===s.UNSIGNED_SHORT&&pe&&(Q=pe.RGB16_EXT),k===s.SHORT&&pe&&(Q=pe.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),y===s.RGBA){const ie=he?Ia:st.getTransfer($);k===s.FLOAT&&(Q=s.RGBA32F),k===s.HALF_FLOAT&&(Q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Q=ie===ht?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&pe&&(Q=pe.RGBA16_EXT),k===s.SHORT&&pe&&(Q=pe.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(A,y){let k;return A?y===null||y===Gn||y===_r?k=s.DEPTH24_STENCIL8:y===fn?k=s.DEPTH32F_STENCIL8:y===xr&&(k=s.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gn||y===_r?k=s.DEPTH_COMPONENT24:y===fn?k=s.DEPTH_COMPONENT32F:y===xr&&(k=s.DEPTH_COMPONENT16),k}function E(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==Dt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){const y=A.target;y.removeEventListener("dispose",C),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function v(A){const y=A.target;y.removeEventListener("dispose",v),I(y)}function T(A){const y=n.get(A);if(y.__webglInit===void 0)return;const k=A.source,B=f.get(k);if(B){const $=B[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(A),Object.keys(B).length===0&&f.delete(k)}n.remove(A)}function R(A){const y=n.get(A);s.deleteTexture(y.__webglTexture);const k=A.source,B=f.get(k);delete B[y.__cacheKey],a.memory.textures--}function I(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(y.__webglFramebuffer[B]))for(let $=0;$<y.__webglFramebuffer[B].length;$++)s.deleteFramebuffer(y.__webglFramebuffer[B][$]);else s.deleteFramebuffer(y.__webglFramebuffer[B]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[B])}else{if(Array.isArray(y.__webglFramebuffer))for(let B=0;B<y.__webglFramebuffer.length;B++)s.deleteFramebuffer(y.__webglFramebuffer[B]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let B=0;B<y.__webglColorRenderbuffer.length;B++)y.__webglColorRenderbuffer[B]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[B]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=A.textures;for(let B=0,$=k.length;B<$;B++){const he=n.get(k[B]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(k[B])}n.remove(A)}let F=0;function H(){F=0}function D(){return F}function z(A){F=A}function G(){const A=F;return A>=i.maxTextures&&De("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),F+=1,A}function V(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function ee(A,y){const k=n.get(A);if(A.isVideoTexture&&P(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const B=A.image;if(B===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(k,A,y);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function q(A,y){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ue(k,A,y);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function K(A,y){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){ue(k,A,y);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function Z(A,y){const k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Ue(k,A,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const Ae={[sn]:s.REPEAT,[kn]:s.CLAMP_TO_EDGE,[Ra]:s.MIRRORED_REPEAT},Me={[Nt]:s.NEAREST,[Sd]:s.NEAREST_MIPMAP_NEAREST,[ir]:s.NEAREST_MIPMAP_LINEAR,[Dt]:s.LINEAR,[va]:s.LINEAR_MIPMAP_NEAREST,[ni]:s.LINEAR_MIPMAP_LINEAR},qe={[gm]:s.NEVER,[Mm]:s.ALWAYS,[xm]:s.LESS,[tc]:s.LEQUAL,[_m]:s.EQUAL,[nc]:s.GEQUAL,[vm]:s.GREATER,[ym]:s.NOTEQUAL};function Ze(A,y){if(y.type===fn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Dt||y.magFilter===va||y.magFilter===ir||y.magFilter===ni||y.minFilter===Dt||y.minFilter===va||y.minFilter===ir||y.minFilter===ni)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ae[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ae[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ae[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Me[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Me[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,qe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Nt||y.minFilter!==ir&&y.minFilter!==ni||y.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function tt(A,y){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));const B=y.source;let $=f.get(B);$===void 0&&($={},f.set(B,$));const he=V(y);if(he!==A.__cacheKey){$[he]===void 0&&($[he]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[he].usedTimes++;const pe=$[A.__cacheKey];pe!==void 0&&($[A.__cacheKey].usedTimes--,pe.usedTimes===0&&R(y)),A.__cacheKey=he,A.__webglTexture=$[he].texture}return k}function J(A,y,k){return Math.floor(Math.floor(A/k)/y)}function ne(A,y,k,B){const he=A.updateRanges;if(he.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,k,B,y.data);else{he.sort((Oe,ve)=>Oe.start-ve.start);let pe=0;for(let Oe=1;Oe<he.length;Oe++){const ve=he[pe],ge=he[Oe],ke=ve.start+ve.count,We=J(ge.start,y.width,4),$e=J(ve.start,y.width,4);ge.start<=ke+1&&We===$e&&J(ge.start+ge.count-1,y.width,4)===We?ve.count=Math.max(ve.count,ge.start+ge.count-ve.start):(++pe,he[pe]=ge)}he.length=pe+1;const Q=t.getParameter(s.UNPACK_ROW_LENGTH),ie=t.getParameter(s.UNPACK_SKIP_PIXELS),me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Oe=0,ve=he.length;Oe<ve;Oe++){const ge=he[Oe],ke=Math.floor(ge.start/4),We=Math.ceil(ge.count/4),$e=ke%y.width,O=Math.floor(ke/y.width),xe=We,te=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,$e,O,xe,te,k,B,y.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Q),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,me)}}function ue(A,y,k){let B=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(B=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(B=s.TEXTURE_3D);const $=tt(A,y),he=y.source;t.bindTexture(B,A.__webglTexture,s.TEXTURE0+k);const pe=n.get(he);if(he.version!==pe.__version||$===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const te=st.getPrimaries(st.workingColorSpace),_e=y.colorSpace===ei?null:st.getPrimaries(y.colorSpace),Ee=y.colorSpace===ei||te===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=m(y.image,!1,i.maxTextureSize);ie=se(y,ie);const me=r.convert(y.format,y.colorSpace),Oe=r.convert(y.type);let ve=_(y.internalFormat,me,Oe,y.normalized,y.colorSpace,y.isVideoTexture);Ze(B,y);let ge;const ke=y.mipmaps,We=y.isVideoTexture!==!0,$e=pe.__version===void 0||$===!0,O=he.dataReady,xe=E(y,ie);if(y.isDepthTexture)ve=S(y.format===Oi,y.type),$e&&(We?t.texStorage2D(s.TEXTURE_2D,1,ve,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,ve,ie.width,ie.height,0,me,Oe,null));else if(y.isDataTexture)if(ke.length>0){We&&$e&&t.texStorage2D(s.TEXTURE_2D,xe,ve,ke[0].width,ke[0].height);for(let te=0,_e=ke.length;te<_e;te++)ge=ke[te],We?O&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Oe,ge.data):t.texImage2D(s.TEXTURE_2D,te,ve,ge.width,ge.height,0,me,Oe,ge.data);y.generateMipmaps=!1}else We?($e&&t.texStorage2D(s.TEXTURE_2D,xe,ve,ie.width,ie.height),O&&ne(y,ie,me,Oe)):t.texImage2D(s.TEXTURE_2D,0,ve,ie.width,ie.height,0,me,Oe,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&$e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,ve,ke[0].width,ke[0].height,ie.depth);for(let te=0,_e=ke.length;te<_e;te++)if(ge=ke[te],y.format!==pn)if(me!==null)if(We){if(O)if(y.layerUpdates.size>0){const Ee=uu(ge.width,ge.height,y.format,y.type);for(const re of y.layerUpdates){const Be=ge.data.subarray(re*Ee/ge.data.BYTES_PER_ELEMENT,(re+1)*Ee/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,re,ge.width,ge.height,1,me,Be)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ie.depth,me,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,ve,ge.width,ge.height,ie.depth,0,ge.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ie.depth,me,Oe,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,ve,ge.width,ge.height,ie.depth,0,me,Oe,ge.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{We&&$e&&t.texStorage2D(s.TEXTURE_2D,xe,ve,ke[0].width,ke[0].height);for(let te=0,_e=ke.length;te<_e;te++)ge=ke[te],y.format!==pn?me!==null?We?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,te,ve,ge.width,ge.height,0,ge.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?O&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Oe,ge.data):t.texImage2D(s.TEXTURE_2D,te,ve,ge.width,ge.height,0,me,Oe,ge.data)}else if(y.isDataArrayTexture)if(We){if($e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,ve,ie.width,ie.height,ie.depth),O)if(y.layerUpdates.size>0){const te=uu(ie.width,ie.height,y.format,y.type);for(const _e of y.layerUpdates){const Ee=ie.data.subarray(_e*te/ie.data.BYTES_PER_ELEMENT,(_e+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,ie.width,ie.height,1,me,Oe,Ee)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,Oe,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,ie.width,ie.height,ie.depth,0,me,Oe,ie.data);else if(y.isData3DTexture)We?($e&&t.texStorage3D(s.TEXTURE_3D,xe,ve,ie.width,ie.height,ie.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,Oe,ie.data)):t.texImage3D(s.TEXTURE_3D,0,ve,ie.width,ie.height,ie.depth,0,me,Oe,ie.data);else if(y.isFramebufferTexture){if($e)if(We)t.texStorage2D(s.TEXTURE_2D,xe,ve,ie.width,ie.height);else{let te=ie.width,_e=ie.height;for(let Ee=0;Ee<xe;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,ve,te,_e,0,me,Oe,null),te>>=1,_e>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const te=s.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ie.parentNode!==te){te.appendChild(ie),d.add(y),te.onpaint=_e=>{const Ee=_e.changedElements;for(const re of d)Ee.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ie);else{const Ee=s.RGBA,re=s.RGBA,Be=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ee,re,Be,ie)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ke.length>0){if(We&&$e){const te=fe(ke[0]);t.texStorage2D(s.TEXTURE_2D,xe,ve,te.width,te.height)}for(let te=0,_e=ke.length;te<_e;te++)ge=ke[te],We?O&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,me,Oe,ge):t.texImage2D(s.TEXTURE_2D,te,ve,me,Oe,ge);y.generateMipmaps=!1}else if(We){if($e){const te=fe(ie);t.texStorage2D(s.TEXTURE_2D,xe,ve,te.width,te.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Oe,ie)}else t.texImage2D(s.TEXTURE_2D,0,ve,me,Oe,ie);p(y)&&M(B),pe.__version=he.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Ue(A,y,k){if(y.image.length!==6)return;const B=tt(A,y),$=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);const he=n.get($);if($.version!==he.__version||B===!0){t.activeTexture(s.TEXTURE0+k);const pe=st.getPrimaries(st.workingColorSpace),Q=y.colorSpace===ei?null:st.getPrimaries(y.colorSpace),ie=y.colorSpace===ei||pe===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const me=y.isCompressedTexture||y.image[0].isCompressedTexture,Oe=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!me&&!Oe?ve[re]=m(y.image[re],!0,i.maxCubemapSize):ve[re]=Oe?y.image[re].image:y.image[re],ve[re]=se(y,ve[re]);const ge=ve[0],ke=r.convert(y.format,y.colorSpace),We=r.convert(y.type),$e=_(y.internalFormat,ke,We,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,xe=he.__version===void 0||B===!0,te=$.dataReady;let _e=E(y,ge);Ze(s.TEXTURE_CUBE_MAP,y);let Ee;if(me){O&&xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,$e,ge.width,ge.height);for(let re=0;re<6;re++){Ee=ve[re].mipmaps;for(let Be=0;Be<Ee.length;Be++){const Ie=Ee[Be];y.format!==pn?ke!==null?O?te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,Ie.width,Ie.height,ke,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,$e,Ie.width,Ie.height,0,Ie.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,Ie.width,Ie.height,ke,We,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,$e,Ie.width,Ie.height,0,ke,We,Ie.data)}}}else{if(Ee=y.mipmaps,O&&xe){Ee.length>0&&_e++;const re=fe(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,$e,re.width,re.height)}for(let re=0;re<6;re++)if(Oe){O?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,ke,We,ve[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,ve[re].width,ve[re].height,0,ke,We,ve[re].data);for(let Be=0;Be<Ee.length;Be++){const xt=Ee[Be].image[re].image;O?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,xt.width,xt.height,ke,We,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,$e,xt.width,xt.height,0,ke,We,xt.data)}}else{O?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ke,We,ve[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,ke,We,ve[re]);for(let Be=0;Be<Ee.length;Be++){const Ie=Ee[Be];O?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,ke,We,Ie.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,$e,ke,We,Ie.image[re])}}}p(y)&&M(s.TEXTURE_CUBE_MAP),he.__version=$.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function we(A,y,k,B,$,he){const pe=r.convert(k.format,k.colorSpace),Q=r.convert(k.type),ie=_(k.internalFormat,pe,Q,k.normalized,k.colorSpace),me=n.get(y),Oe=n.get(k);if(Oe.__renderTarget=y,!me.__hasExternalTextures){const ve=Math.max(1,y.width>>he),ge=Math.max(1,y.height>>he);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,he,ie,ve,ge,y.depth,0,pe,Q,null):t.texImage2D($,he,ie,ve,ge,0,pe,Q,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),N(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,B,$,Oe.__webglTexture,0,Ve(y)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,B,$,Oe.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(A,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){const B=y.depthTexture,$=B&&B.isDepthTexture?B.type:null,he=S(y.stencilBuffer,$),pe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;N(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ve(y),he,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve(y),he,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,he,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,A)}else{const B=y.textures;for(let $=0;$<B.length;$++){const he=B[$],pe=r.convert(he.format,he.colorSpace),Q=r.convert(he.type),ie=_(he.internalFormat,pe,Q,he.normalized,he.colorSpace);N(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ve(y),ie,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve(y),ie,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ie,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function rt(A,y,k){const B=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ze(s.TEXTURE_CUBE_MAP,y.depthTexture);const me=r.convert(y.depthTexture.format),Oe=r.convert(y.depthTexture.type);let ve;y.depthTexture.format===li?ve=s.DEPTH_COMPONENT24:y.depthTexture.format===Oi&&(ve=s.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,y.width,y.height,0,me,Oe,null)}}else ee(y.depthTexture,0);const he=$.__webglTexture,pe=Ve(y),Q=B?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,ie=y.depthTexture.format===Oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===li)N(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,Q,he,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,ie,Q,he,0);else if(y.depthTexture.format===Oi)N(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,Q,he,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,ie,Q,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function j(A){const y=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const B=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),B){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,B.removeEventListener("dispose",$)};B.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=B}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let B=0;B<6;B++)rt(y.__webglFramebuffer[B],A,B);else{const B=A.texture.mipmaps;B&&B.length>0?rt(y.__webglFramebuffer[0],A,0):rt(y.__webglFramebuffer,A,0)}else if(k){y.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[B]),y.__webglDepthbuffer[B]===void 0)y.__webglDepthbuffer[B]=s.createRenderbuffer(),ze(y.__webglDepthbuffer[B],A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer[B];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,he)}}else{const B=A.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),ze(y.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,he)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(A,y,k){const B=n.get(A);y!==void 0&&we(B.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&j(A)}function oe(A){const y=A.texture,k=n.get(A),B=n.get(y);A.addEventListener("dispose",v);const $=A.textures,he=A.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(B.__webglTexture===void 0&&(B.__webglTexture=s.createTexture()),B.__version=y.version,a.memory.textures++),he){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let ie=0;ie<y.mipmaps.length;ie++)k.__webglFramebuffer[Q][ie]=s.createFramebuffer()}else k.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)k.__webglFramebuffer[Q]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(pe)for(let Q=0,ie=$.length;Q<ie;Q++){const me=n.get($[Q]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&N(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){const ie=$[Q];k.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);const me=r.convert(ie.format,ie.colorSpace),Oe=r.convert(ie.type),ve=_(ie.internalFormat,me,Oe,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),ge=Ve(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,ve,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture),Ze(s.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)we(k.__webglFramebuffer[Q][ie],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ie);else we(k.__webglFramebuffer[Q],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(y)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let Q=0,ie=$.length;Q<ie;Q++){const me=$[Q],Oe=n.get(me);let ve=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ve=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Oe.__webglTexture),Ze(ve,me),we(k.__webglFramebuffer,A,me,s.COLOR_ATTACHMENT0+Q,ve,0),p(me)&&M(ve)}t.unbindTexture()}else{let Q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Q,B.__webglTexture),Ze(Q,y),y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)we(k.__webglFramebuffer[ie],A,y,s.COLOR_ATTACHMENT0,Q,ie);else we(k.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,Q,0);p(y)&&M(Q),t.unbindTexture()}A.depthBuffer&&j(A)}function le(A){const y=A.textures;for(let k=0,B=y.length;k<B;k++){const $=y[k];if(p($)){const he=b(A),pe=n.get($).__webglTexture;t.bindTexture(he,pe),M(he),t.unbindTexture()}}}const de=[],Ge=[];function Fe(A){if(A.samples>0){if(N(A)===!1){const y=A.textures,k=A.width,B=A.height;let $=s.COLOR_BUFFER_BIT;const he=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=n.get(A),Q=y.length>1;if(Q)for(let me=0;me<y.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ie=A.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<y.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Oe=n.get(y[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Oe,0)}s.blitFramebuffer(0,0,k,B,0,0,k,B,$,s.NEAREST),l===!0&&(de.length=0,Ge.length=0,de.push(s.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(de.push(he),Ge.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let me=0;me<y.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Oe=n.get(y[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Oe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ve(A){return Math.min(i.maxSamples,A.samples)}function N(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function P(A){const y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function se(A,y){const k=A.colorSpace,B=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==rn&&k!==ei&&(st.getTransfer(k)===ht?(B!==pn||$!==tn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",k)),y}function fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=ee,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=ae,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=we,this.useMultisampledRTT=N,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wM(s,e){function t(n,i=ei){let r;const a=st.getTransfer(i);if(n===tn)return s.UNSIGNED_BYTE;if(n===$l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Td)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ad)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===wd)return s.BYTE;if(n===Ed)return s.SHORT;if(n===xr)return s.UNSIGNED_SHORT;if(n===Kl)return s.INT;if(n===Gn)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===Hn)return s.HALF_FLOAT;if(n===Rd)return s.ALPHA;if(n===Cd)return s.RGB;if(n===pn)return s.RGBA;if(n===li)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===Zl)return s.RED;if(n===Ql)return s.RED_INTEGER;if(n===Hi)return s.RG;if(n===jl)return s.RG_INTEGER;if(n===ec)return s.RGBA_INTEGER;if(n===ya||n===Ma||n===ba||n===Sa)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===ol||n===ll||n===cl||n===hl||n===Ca||n===ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===ol)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ll)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===cl)return r.COMPRESSED_R11_EAC;if(n===hl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ca)return r.COMPRESSED_RG11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===bl||n===Sl||n===wl||n===El)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===dl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===Al||n===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tl)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cl||n===Pl||n===Pa||n===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const EM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Wd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vn({vertexShader:EM,fragmentShader:TM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RM extends Xi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new AM,p={},M=t.getContextAttributes();let b=null,_=null;const S=[],E=[],C=new ce;let v=null,T=null;const R=new Lt;R.viewport=new pt;const I=new Lt;I.viewport=new pt;const F=[R,I],H=new Ag;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=S[J];return ne===void 0&&(ne=new uo,S[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=S[J];return ne===void 0&&(ne=new uo,S[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=S[J];return ne===void 0&&(ne=new uo,S[J]=ne),ne.getHandSpace()};function G(J){const ne=E.indexOf(J.inputSource);if(ne===-1)return;const ue=S[ne];ue!==void 0&&(ue.update(J.inputSource,J.frame,c||a),ue.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",ee);for(let J=0;J<S.length;J++){const ne=E[J];ne!==null&&(E[J]=null,S[J].disconnect(ne))}D=null,z=null,m.reset();for(const J in p)delete p[J];if(e.setRenderTarget(b),f=null,u=null,d=null,i=null,_=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),T!==null){const J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",V),i.addEventListener("inputsourceschange",ee),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ue=null,we=null;M.depth&&(we=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=M.stencil?Oi:li,Ue=M.stencil?_r:Gn);const ze={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ze),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new An(u.textureWidth,u.textureHeight,{format:pn,type:tn,depthTexture:new Er(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ue={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new An(f.framebufferWidth,f.framebufferHeight,{format:pn,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(J){for(let ne=0;ne<J.removed.length;ne++){const ue=J.removed[ne],Ue=E.indexOf(ue);Ue>=0&&(E[Ue]=null,S[Ue].disconnect(ue))}for(let ne=0;ne<J.added.length;ne++){const ue=J.added[ne];let Ue=E.indexOf(ue);if(Ue===-1){for(let ze=0;ze<S.length;ze++)if(ze>=E.length){E.push(ue),Ue=ze;break}else if(E[ze]===null){E[ze]=ue,Ue=ze;break}if(Ue===-1)break}const we=S[Ue];we&&we.connect(ue)}}const q=new L,K=new L;function Z(J,ne,ue){q.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(ue.matrixWorld);const Ue=q.distanceTo(K),we=ne.projectionMatrix.elements,ze=ue.projectionMatrix.elements,rt=we[14]/(we[10]-1),j=we[14]/(we[10]+1),ae=(we[9]+1)/we[5],oe=(we[9]-1)/we[5],le=(we[8]-1)/we[0],de=(ze[8]+1)/ze[0],Ge=rt*le,Fe=rt*de,Ve=Ue/(-le+de),N=Ve*-le;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(N),J.translateZ(Ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const P=rt+Ve,se=j+Ve,fe=Ge-N,A=Fe+(Ue-N),y=ae*j/se*P,k=oe*j/se*P;J.projectionMatrix.makePerspective(fe,A,y,k,P,se),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ae(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ne=J.near,ue=J.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),H.near=I.near=R.near=ne,H.far=I.far=R.far=ue,(D!==H.near||z!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,z=H.far),H.layers.mask=J.layers.mask|6,R.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;const Ue=J.parent,we=H.cameras;Ae(H,Ue);for(let ze=0;ze<we.length;ze++)Ae(we[ze],Ue);we.length===2?Z(H,R,I):H.projectionMatrix.copy(R.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Me(J,H,Ue)};function Me(J,ne,ue){ue===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(ue.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ps*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(J){return p[J]};let qe=null;function Ze(J,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ue=!1;ue.length!==H.cameras.length&&(H.cameras.length=0,Ue=!0);for(let j=0;j<ue.length;j++){const ae=ue[j];let oe=null;if(f!==null)oe=f.getViewport(ae);else{const de=d.getViewSubImage(u,ae);oe=de.viewport,j===0&&(e.setRenderTargetTextures(_,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(_))}let le=F[j];le===void 0&&(le=new Lt,le.layers.enable(j),le.viewport=new pt,F[j]=le),le.matrix.fromArray(ae.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ae.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(oe.x,oe.y,oe.width,oe.height),j===0&&(H.matrix.copy(le.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ue===!0&&H.cameras.push(le)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const j=d.getDepthInformation(ue[0]);j&&j.isValid&&j.texture&&m.init(j,i.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let j=0;j<ue.length;j++){const ae=ue[j].camera;if(ae){let oe=p[ae];oe||(oe=new Wd,p[ae]=oe);const le=d.getCameraImage(ae);oe.sourceTexture=le}}}}for(let ue=0;ue<S.length;ue++){const Ue=E[ue],we=S[ue];Ue!==null&&we!==void 0&&we.update(Ue,ne,c||a)}qe&&qe(J,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const tt=new af;tt.setAnimationLoop(Ze),this.setAnimationLoop=function(J){qe=J},this.dispose=function(){}}}const CM=new Je,ff=new Ye;ff.set(-1,0,0,0,1,0,0,0,1);function PM(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ef(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,b,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),b=M.envMap,_=M.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(CM.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ff),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function LM(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){const E=S.program;n.uniformBlockBinding(_,E)}function c(_,S){let E=i[_.id];E===void 0&&(m(_),E=h(_),i[_.id]=E,_.addEventListener("dispose",M));const C=S.program;n.updateUBOMapping(_,C);const v=e.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function h(_){const S=d();_.__bindingPointIndex=S;const E=s.createBuffer(),C=_.__size,v=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,E),E}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const S=i[_.id],E=_.uniforms,C=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let v=0,T=E.length;v<T;v++){const R=E[v];if(Array.isArray(R))for(let I=0,F=R.length;I<F;I++)f(R[I],v,I,C);else f(R,v,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,S,E,C){if(x(_,S,E,C)===!0){const v=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){const F=T[I],H=p(F);g(F,_.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,_.__data)}}function g(_,S,E){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,E)}function x(_,S,E,C){const v=_.value,T=S+"_"+E;if(C[T]===void 0)return typeof v=="number"||typeof v=="boolean"?C[T]=v:ArrayBuffer.isView(v)?C[T]=v.slice():C[T]=v.clone(),!0;{const R=C[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(_){const S=_.uniforms;let E=0;const C=16;for(let T=0,R=S.length;T<R;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let F=0,H=I.length;F<H;F++){const D=I[F],z=Array.isArray(D.value)?D.value:[D.value];for(let G=0,V=z.length;G<V;G++){const ee=z[G],q=p(ee),K=E%C,Z=K%q.boundary,Ae=K+Z;E+=Z,Ae!==0&&C-Ae<q.storage&&(E+=C-Ae),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=q.storage}}}const v=E%C;return v>0&&(E+=C-v),_.__size=E,_.__cache={},this}function p(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):De("WebGLRenderer: Unsupported uniform value type.",_),S}function M(_){const S=_.target;S.removeEventListener("dispose",M);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function b(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:l,update:c,dispose:b}}const IM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function NM(){return Nn===null&&(Nn=new oc(IM,16,16,Hi,Hn),Nn.name="DFG_LUT",Nn.minFilter=Dt,Nn.magFilter=Dt,Nn.wrapS=kn,Nn.wrapT=kn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class pf{constructor(e={}){const{canvas:t=Em(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=tn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=f,m=new Set([ec,jl,Ql]),p=new Set([tn,Gn,xr,_r,$l,Jl]),M=new Uint32Array(4),b=new Int32Array(4),_=new L;let S=null,E=null;const C=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,F=null,H=null,D=null,z=null;this._outputColorSpace=Mt;let G=0,V=0,ee=null,q=-1,K=null;const Z=new pt,Ae=new pt;let Me=null;const qe=new He(0);let Ze=0,tt=t.width,J=t.height,ne=1,ue=null,Ue=null;const we=new pt(0,0,tt,J),ze=new pt(0,0,tt,J);let rt=!1;const j=new hc;let ae=!1,oe=!1;const le=new Je,de=new L,Ge=new pt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function N(){return ee===null?ne:1}let P=n;function se(w,U){return t.getContext(w,U)}let fe,A,y,k,B,$,he,pe,Q,ie,me,Oe,ve,ge,ke,We,$e,O,xe,te,_e,Ee,re;try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ql}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",vn,!1),P===null){const U="webgl2";if(P=se(U,w),P===null)throw se(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(w){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),Xe("WebGLRenderer: "+w.message),w}function Be(){fe=new Nv(P),fe.init(),_e=new wM(P,fe),A=new Sv(P,fe,e,_e),y=new bM(P,fe),A.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),H=P.createFramebuffer(),D=P.createFramebuffer(),z=P.createFramebuffer(),k=new Fv(P),B=new lM,$=new SM(P,fe,y,B,A,_e,k),he=new Iv(R),pe=new kg(P),Ee=new Mv(P,pe),Q=new Dv(P,pe,k,Ee),ie=new kv(P,Q,pe,Ee,k),O=new Ov(P,A,$),ke=new wv(B),me=new oM(R,he,fe,A,Ee,ke),Oe=new PM(R,B),ve=new hM,ge=new gM(fe),$e=new yv(R,he,y,ie,g,l),We=new MM(R,ie,A),re=new LM(P,k,A,y),xe=new bv(P,fe,k),te=new Uv(P,fe,k),k.programs=me.programs,R.capabilities=A,R.extensions=fe,R.properties=B,R.renderLists=ve,R.shadowMap=We,R.state=y,R.info=k}x!==tn&&(T=new zv(x,t.width,t.height,o,i,r));const Ie=new RM(R,P);this.xr=Ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(tt,J,!1))},this.getSize=function(w){return w.set(tt,J)},this.setSize=function(w,U,Y=!0){if(Ie.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=w,J=U,t.width=Math.floor(w*ne),t.height=Math.floor(U*ne),Y===!0&&(t.style.width=w+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(tt*ne,J*ne).floor()},this.setDrawingBufferSize=function(w,U,Y){tt=w,J=U,ne=Y,t.width=Math.floor(w*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(x===tn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Z)},this.getViewport=function(w){return w.copy(we)},this.setViewport=function(w,U,Y,W){w.isVector4?we.set(w.x,w.y,w.z,w.w):we.set(w,U,Y,W),y.viewport(Z.copy(we).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(ze)},this.setScissor=function(w,U,Y,W){w.isVector4?ze.set(w.x,w.y,w.z,w.w):ze.set(w,U,Y,W),y.scissor(Ae.copy(ze).multiplyScalar(ne).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(w){y.setScissorTest(rt=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){Ue=w},this.getClearColor=function(w){return w.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,Y=!0){let W=0;if(w){let X=!1;if(ee!==null){const Se=ee.texture.format;X=m.has(Se)}if(X){const Se=ee.texture.type,Re=p.has(Se),be=$e.getClearColor(),Ce=$e.getClearAlpha(),Ne=be.r,Qe=be.g,it=be.b;Re?(M[0]=Ne,M[1]=Qe,M[2]=it,M[3]=Ce,P.clearBufferuiv(P.COLOR,0,M)):(b[0]=Ne,b[1]=Qe,b[2]=it,b[3]=Ce,P.clearBufferiv(P.COLOR,0,b))}else W|=P.COLOR_BUFFER_BIT}U&&(W|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),F=w},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),$e.dispose(),ve.dispose(),ge.dispose(),B.dispose(),he.dispose(),ie.dispose(),Ee.dispose(),re.dispose(),me.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Rc),Ie.removeEventListener("sessionend",Cc),Ai.stop()};function xt(w){w.preventDefault(),Na("WebGLRenderer: Context Lost."),I=!0}function lt(){Na("WebGLRenderer: Context Restored."),I=!1;const w=k.autoReset,U=We.enabled,Y=We.autoUpdate,W=We.needsUpdate,X=We.type;Be(),k.autoReset=w,We.enabled=U,We.autoUpdate=Y,We.needsUpdate=W,We.type=X}function vn(w){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pn(w){const U=w.target;U.removeEventListener("dispose",Pn),yf(U)}function yf(w){Mf(w),B.remove(w)}function Mf(w){const U=B.get(w).programs;U!==void 0&&(U.forEach(function(Y){me.releaseProgram(Y)}),w.isShaderMaterial&&me.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,Y,W,X,Se){U===null&&(U=Fe);const Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,be=wf(w,U,Y,W,X);y.setMaterial(W,Re);let Ce=Y.index,Ne=1;if(W.wireframe===!0){if(Ce=Q.getWireframeAttribute(Y),Ce===void 0)return;Ne=2}const Qe=Y.drawRange,it=Y.attributes.position;let Pe=Qe.start*Ne,ct=(Qe.start+Qe.count)*Ne;Se!==null&&(Pe=Math.max(Pe,Se.start*Ne),ct=Math.min(ct,(Se.start+Se.count)*Ne)),Ce!==null?(Pe=Math.max(Pe,0),ct=Math.min(ct,Ce.count)):it!=null&&(Pe=Math.max(Pe,0),ct=Math.min(ct,it.count));const Rt=ct-Pe;if(Rt<0||Rt===1/0)return;Ee.setup(X,W,be,Y,Ce);let vt,gt=xe;if(Ce!==null&&(vt=pe.get(Ce),gt=te,gt.setIndex(vt)),X.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*N()),gt.setMode(P.LINES)):gt.setMode(P.TRIANGLES);else if(X.isLine){let zt=W.linewidth;zt===void 0&&(zt=1),y.setLineWidth(zt*N()),X.isLineSegments?gt.setMode(P.LINES):X.isLineLoop?gt.setMode(P.LINE_LOOP):gt.setMode(P.LINE_STRIP)}else X.isPoints?gt.setMode(P.POINTS):X.isSprite&&gt.setMode(P.TRIANGLES);if(X.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))gt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const zt=X._multiDrawStarts,Te=X._multiDrawCounts,Xt=X._multiDrawCount,at=Ce?pe.get(Ce).bytesPerElement:1,an=B.get(W).currentProgram.getUniforms();for(let Ln=0;Ln<Xt;Ln++)an.setValue(P,"_gl_DrawID",Ln),gt.render(zt[Ln]/at,Te[Ln])}else if(X.isInstancedMesh)gt.renderInstances(Pe,Rt,X.count);else if(Y.isInstancedBufferGeometry){const zt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Te=Math.min(Y.instanceCount,zt);gt.renderInstances(Pe,Rt,Te)}else gt.render(Pe,Rt)};function Ac(w,U,Y,W){F!==null&&w.isNodeMaterial&&F.setObject(W,w),ae===!0&&ke.setState(w,Y,!1),w.transparent===!0&&w.side===En&&w.forceSinglePass===!1?(w.side=$t,w.needsUpdate=!0,Dr(w,U,W),w.side=Ti,w.needsUpdate=!0,Dr(w,U,W),w.side=En):Dr(w,U,W)}this.compile=function(w,U,Y=null){Y===null&&(Y=w),F!==null&&F.renderStart(w,U,Y),E=ge.get(Y),E.init(U),v.push(E),Y.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),w!==Y&&w.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),oe=this.localClippingEnabled,ae=ke.init(this.clippingPlanes,oe),ae===!0&&ke.setGlobalState(this.clippingPlanes,U),F!==null&&We.render(E.state.shadowsArray,Y,U);const W=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const be=Se[Re];Ac(be,Y,U,X),W.add(be)}else Ac(Se,Y,U,X),W.add(Se)}),E=v.pop(),F!==null&&F.renderEnd(),W},this.compileAsync=function(w,U,Y=null){const W=this.compile(w,U,Y);return new Promise(X=>{function Se(){if(W.forEach(function(Re){const Ce=B.get(Re).currentProgram;(Ce===void 0||Ce.isReady())&&W.delete(Re)}),W.size===0){X(w);return}setTimeout(Se,10)}fe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ja=null;function bf(w){Ja&&Ja(w)}function Rc(){Ai.stop()}function Cc(){Ai.start()}const Ai=new af;Ai.setAnimationLoop(bf),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(w){Ja=w,Ie.setAnimationLoop(w),w===null?Ai.stop():Ai.start()},Ie.addEventListener("sessionstart",Rc),Ie.addEventListener("sessionend",Cc),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(w,U);const Y=Ie.enabled===!0&&Ie.isPresenting===!0,W=T!==null&&(ee===null||Y)&&T.begin(R,ee);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(U),U=Ie.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,U,ee),E=ge.get(w,v.length),E.init(U),E.state.textureUnits=$.getTextureUnits(),v.push(E),le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(le,Bn,U.reversedDepth),oe=this.localClippingEnabled,ae=ke.init(this.clippingPlanes,oe),S=ve.get(w,C.length),S.init(),C.push(S),Ie.enabled===!0&&Ie.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&Za(Re,U,-1/0,R.sortObjects)}Za(w,U,0,R.sortObjects),S.finish(),F!==null&&F.updateLights(E.state.lightsArray),R.sortObjects===!0&&S.sort(ue,Ue),Ve=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Ve&&$e.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&ke.beginShadows();const X=E.state.shadowsArray;if(We.render(X,w,U),ae===!0&&ke.endShadows(),(W&&T.hasRenderPass())===!1){const Re=S.opaque,be=S.transmissive;if(E.setupLights(),U.isArrayCamera){const Ce=U.cameras;if(be.length>0)for(let Ne=0,Qe=Ce.length;Ne<Qe;Ne++){const it=Ce[Ne];Lc(Re,be,w,it)}Ve&&$e.render(w);for(let Ne=0,Qe=Ce.length;Ne<Qe;Ne++){const it=Ce[Ne];Pc(S,w,it,it.viewport)}}else be.length>0&&Lc(Re,be,w,U),Ve&&$e.render(w),Pc(S,w,U)}ee!==null&&V===0&&($.updateMultisampleRenderTarget(ee),$.updateRenderTargetMipmap(ee)),W&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,U),Ee.resetDefaultState(),q=-1,K=null,v.pop(),v.length>0?(E=v[v.length-1],$.setTextureUnits(E.state.textureUnits),ae===!0&&ke.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,F!==null&&F.renderEnd()};function Za(w,U,Y,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(j)){W&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(le);const Re=ie.update(w),be=w.material;be.visible&&S.push(w,Re,be,Y,Ge.z,null,U)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(j))){const Re=ie.update(w),be=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ge.copy(Re.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(le)),Array.isArray(be)){const Ce=Re.groups;for(let Ne=0,Qe=Ce.length;Ne<Qe;Ne++){const it=Ce[Ne],Pe=be[it.materialIndex];Pe&&Pe.visible&&S.push(w,Re,Pe,Y,Ge.z,it,U)}}else be.visible&&S.push(w,Re,be,Y,Ge.z,null,U)}}const Se=w.children;for(let Re=0,be=Se.length;Re<be;Re++)Za(Se[Re],U,Y,W)}function Pc(w,U,Y,W){const{opaque:X,transmissive:Se,transparent:Re}=w;E.setupLightsView(Y),ae===!0&&ke.setGlobalState(R.clippingPlanes,Y),W&&y.viewport(Z.copy(W)),X.length>0&&Nr(X,U,Y),Se.length>0&&Nr(Se,U,Y),Re.length>0&&Nr(Re,U,Y),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Lc(w,U,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const Pe=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new An(1,1,{generateMipmaps:!0,type:Pe?Hn:tn,minFilter:ni,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}const Se=E.state.transmissionRenderTarget[W.id],Re=W.viewport||Z;Se.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);const be=R.getRenderTarget(),Ce=R.getActiveCubeFace(),Ne=R.getActiveMipmapLevel();R.setRenderTarget(Se),R.getClearColor(qe),Ze=R.getClearAlpha(),Ze<1&&R.setClearColor(16777215,.5),R.clear(),Ve&&$e.render(Y);const Qe=R.toneMapping;R.toneMapping=zn;const it=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),ae===!0&&ke.setGlobalState(R.clippingPlanes,W),Nr(w,Y,W),$.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ct=0,Rt=U.length;ct<Rt;ct++){const vt=U[ct],{object:gt,geometry:zt,material:Te,group:Xt}=vt;if(Te.side===En&&gt.layers.test(W.layers)){const at=Te.side;Te.side=$t,Te.needsUpdate=!0,Ic(gt,Y,W,zt,Te,Xt),Te.side=at,Te.needsUpdate=!0,Pe=!0}}Pe===!0&&($.updateMultisampleRenderTarget(Se),$.updateRenderTargetMipmap(Se))}R.setRenderTarget(be,Ce,Ne),R.setClearColor(qe,Ze),it!==void 0&&(W.viewport=it),R.toneMapping=Qe}function Nr(w,U,Y){const W=U.isScene===!0?U.overrideMaterial:null;for(let X=0,Se=w.length;X<Se;X++){const Re=w[X],{object:be,geometry:Ce,group:Ne}=Re;let Qe=Re.material;Qe.allowOverride===!0&&W!==null&&(Qe=W),be.layers.test(Y.layers)&&Ic(be,U,Y,Ce,Qe,Ne)}}function Ic(w,U,Y,W,X,Se){F!==null&&X.isNodeMaterial&&F.setObject(w,X),w.onBeforeRender(R,U,Y,W,X,Se),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(R,U,Y,W,w,Se),X.transparent===!0&&X.side===En&&X.forceSinglePass===!1?(X.side=$t,X.needsUpdate=!0,R.renderBufferDirect(Y,U,W,X,w,Se),X.side=Ti,X.needsUpdate=!0,R.renderBufferDirect(Y,U,W,X,w,Se),X.side=En):R.renderBufferDirect(Y,U,W,X,w,Se),w.onAfterRender(R,U,Y,W,X,Se)}function Dr(w,U,Y){U.isScene!==!0&&(U=Fe);const W=B.get(w),X=E.state.lights,Se=E.state.shadowsArray,Re=X.state.version,be=me.getParameters(w,X.state,Se,U,Y,E.state.lightProbeGridArray),Ce=me.getProgramCacheKey(be);let Ne=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=he.get(w.envMap||W.environment,Qe),W.envMapRotation=W.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Pn),Ne=new Map,W.programs=Ne);let it=Ne.get(Ce);if(it!==void 0){if(W.currentProgram===it&&W.lightsStateVersion===Re)return Dc(w,be),it}else be.uniforms=me.getUniforms(w),F!==null&&w.isNodeMaterial&&F.build(w,Y,be),w.onBeforeCompile(be,R),it=me.acquireProgram(be,Ce),Ne.set(Ce,it),W.uniforms=be.uniforms;const Pe=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=ke.uniform),Dc(w,be),W.needsLights=Tf(w),W.lightsStateVersion=Re,W.needsLights&&(Pe.ambientLightColor.value=X.state.ambient,Pe.lightProbe.value=X.state.probe,Pe.sunLights.value=X.state.sun,Pe.sunLightShadows.value=X.state.sunShadow,Pe.directionalLights.value=X.state.directional,Pe.directionalLightShadows.value=X.state.directionalShadow,Pe.spotLights.value=X.state.spot,Pe.spotLightShadows.value=X.state.spotShadow,Pe.rectAreaLights.value=X.state.rectArea,Pe.ltc_1.value=X.state.rectAreaLTC1,Pe.ltc_2.value=X.state.rectAreaLTC2,Pe.pointLights.value=X.state.point,Pe.pointLightShadows.value=X.state.pointShadow,Pe.hemisphereLights.value=X.state.hemi,Pe.sunShadowMatrix.value=X.state.sunShadowMatrix,Pe.sunShadowCascade.value=X.state.sunShadowCascade,Pe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pe.spotLightMatrix.value=X.state.spotLightMatrix,Pe.spotLightMap.value=X.state.spotLightMap,Pe.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=it,W.uniformsList=null,it}function Nc(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Ta.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Dc(w,U){const Y=B.get(w);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Sf(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let Y=0,W=w.length;Y<W;Y++){const X=w[Y];if(X.texture!==null&&X.boundingBox.containsPoint(_))return X}return null}function wf(w,U,Y,W,X){U.isScene!==!0&&(U=Fe),$.resetTextureUnits();const Se=U.fog,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,be=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:st.workingColorSpace,Ce=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=he.get(W.envMap||Re,Ce),Qe=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,it=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,Rt=!!Y.morphAttributes.color;let vt=zn;W.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(vt=R.toneMapping);const gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,zt=gt!==void 0?gt.length:0,Te=B.get(W),Xt=E.state.lights;if(ae===!0&&(oe===!0||w!==K)){const _t=w===K&&W.id===q;ke.setState(W,w,_t)}let at=!1;W.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Xt.state.version||Te.outputColorSpace!==be||X.isBatchedMesh&&Te.batching===!1||!X.isBatchedMesh&&Te.batching===!0||X.isBatchedMesh&&Te.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Te.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Te.instancing===!1||!X.isInstancedMesh&&Te.instancing===!0||X.isSkinnedMesh&&Te.skinning===!1||!X.isSkinnedMesh&&Te.skinning===!0||X.isInstancedMesh&&Te.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Te.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Te.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Te.instancingMorph===!1&&X.morphTexture!==null||Te.envMap!==Ne||W.fog===!0&&Te.fog!==Se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ke.numPlanes||Te.numIntersection!==ke.numIntersection)||Te.vertexAlphas!==Qe||Te.vertexTangents!==it||Te.morphTargets!==Pe||Te.morphNormals!==ct||Te.morphColors!==Rt||Te.toneMapping!==vt||Te.morphTargetsCount!==zt||!!Te.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Te.__version=W.version);let an=Te.currentProgram;at===!0&&(an=Dr(W,U,X),F&&W.isNodeMaterial&&F.onUpdateProgram(W,an,Te));let Ln=!1,di=!1,qi=!1;const ft=an.getUniforms(),Tt=Te.uniforms;if(y.useProgram(an.program)&&(Ln=!0,di=!0,qi=!0),W.id!==q&&(q=W.id,di=!0),Te.needsLights){const _t=Sf(E.state.lightProbeGridArray,X);Te.lightProbeGrid!==_t&&(Te.lightProbeGrid=_t,di=!0)}if(Ln||K!==w){y.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ft.setValue(P,"projectionMatrix",w.projectionMatrix),ft.setValue(P,"viewMatrix",w.matrixWorldInverse);const pi=ft.map.cameraPosition;pi!==void 0&&pi.setValue(P,de.setFromMatrixPosition(w.matrixWorld)),A.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),K!==w&&(K=w,di=!0,qi=!0)}if(Te.needsLights&&(Xt.state.sunShadowMap.length>0&&ft.setValue(P,"sunShadowMap",Xt.state.sunShadowMap,$),Xt.state.directionalShadowMap.length>0&&ft.setValue(P,"directionalShadowMap",Xt.state.directionalShadowMap,$),Xt.state.spotShadowMap.length>0&&ft.setValue(P,"spotShadowMap",Xt.state.spotShadowMap,$),Xt.state.pointShadowMap.length>0&&ft.setValue(P,"pointShadowMap",Xt.state.pointShadowMap,$)),X.isSkinnedMesh){ft.setOptional(P,X,"bindMatrix"),ft.setOptional(P,X,"bindMatrixInverse");const _t=X.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),ft.setValue(P,"boneTexture",_t.boneTexture,$))}X.isBatchedMesh&&(ft.setOptional(P,X,"batchingTexture"),ft.setValue(P,"batchingTexture",X._matricesTexture,$),ft.setOptional(P,X,"batchingIdTexture"),ft.setValue(P,"batchingIdTexture",X._indirectTexture,$),ft.setOptional(P,X,"batchingColorTexture"),X._colorsTexture!==null&&ft.setValue(P,"batchingColorTexture",X._colorsTexture,$));const fi=Y.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&O.update(X,Y,an),(di||Te.receiveShadow!==X.receiveShadow)&&(Te.receiveShadow=X.receiveShadow,ft.setValue(P,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Tt.envMapIntensity.value=U.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=NM()),di){if(ft.setValue(P,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&Ef(Tt,qi),Se&&W.fog===!0&&Oe.refreshFogUniforms(Tt,Se),Oe.refreshMaterialUniforms(Tt,W,ne,J,E.state.transmissionRenderTarget[w.id]),Te.needsLights&&Te.lightProbeGrid){const _t=Te.lightProbeGrid;Tt.probesSH.value=_t.texture,Tt.probesMin.value.copy(_t.boundingBox.min),Tt.probesMax.value.copy(_t.boundingBox.max),Tt.probesResolution.value.copy(_t.resolution)}Ta.upload(P,Nc(Te),Tt,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ta.upload(P,Nc(Te),Tt,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(P,"center",X.center),ft.setValue(P,"modelViewMatrix",X.modelViewMatrix),ft.setValue(P,"normalMatrix",X.normalMatrix),ft.setValue(P,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const _t=W.uniformsGroups;for(let pi=0,Yi=_t.length;pi<Yi;pi++){const Fc=_t[pi];re.update(Fc,an),re.bind(Fc,an)}}return an}function Ef(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Tf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(w,U,Y){const W=B.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),B.get(w.texture).__webglTexture=U,B.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const Y=B.get(w);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,Y=0){ee=w,G=U,V=Y;let W=null,X=!1,Se=!1;if(w){const be=B.get(w);if(be.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(P.FRAMEBUFFER,be.__webglFramebuffer),Z.copy(w.viewport),Ae.copy(w.scissor),Me=w.scissorTest,y.viewport(Z),y.scissor(Ae),y.setScissorTest(Me),q=-1;return}else if(be.__webglFramebuffer===void 0)$.setupRenderTarget(w);else if(be.__hasExternalTextures)$.rebindTextures(w,B.get(w.texture).__webglTexture,B.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Qe=w.depthTexture;if(be.__boundDepthTexture!==Qe){if(Qe!==null&&B.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(w)}}const Ce=w.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Se=!0);const Ne=B.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?W=Ne[U][Y]:W=Ne[U],X=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?W=B.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[Y]:W=Ne,Z.copy(w.viewport),Ae.copy(w.scissor),Me=w.scissorTest}else Z.copy(we).multiplyScalar(ne).floor(),Ae.copy(ze).multiplyScalar(ne).floor(),Me=rt;if(Y!==0&&(W=H),y.bindFramebuffer(P.FRAMEBUFFER,W)&&y.drawBuffers(w,W),y.viewport(Z),y.scissor(Ae),y.setScissorTest(Me),X){const be=B.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,Y)}else if(Se){const be=U;for(let Ce=0;Ce<w.textures.length;Ce++){const Ne=B.get(w.textures[Ce]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ce,Ne.__webglTexture,Y,be)}}else if(w!==null&&Y!==0){const be=B.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,be.__webglTexture,Y)}q=-1};function Uc(w){const U=B.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=A.textureFormatReadable(w.format),U.__typeReadable=A.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,Y,W,X,Se,Re,be=0){if(!(w&&w.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=B.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce){y.bindFramebuffer(P.FRAMEBUFFER,Ce);try{const Ne=w.textures[be],Qe=Ne.format,it=Ne.type;w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be);const Pe=Uc(Ne);if(Pe.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&Y>=0&&Y<=w.height-X&&P.readPixels(U,Y,W,X,_e.convert(Qe),_e.convert(it),Se)}finally{const Ne=ee!==null?B.get(ee).__webglFramebuffer:null;y.bindFramebuffer(P.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,U,Y,W,X,Se,Re,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=B.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce)if(U>=0&&U<=w.width-W&&Y>=0&&Y<=w.height-X){y.bindFramebuffer(P.FRAMEBUFFER,Ce);const Ne=w.textures[be],Qe=Ne.format,it=Ne.type;w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be);const Pe=Uc(Ne);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ct),P.bufferData(P.PIXEL_PACK_BUFFER,Se.byteLength,P.STREAM_READ),P.readPixels(U,Y,W,X,_e.convert(Qe),_e.convert(it),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const Rt=ee!==null?B.get(ee).__webglFramebuffer:null;y.bindFramebuffer(P.FRAMEBUFFER,Rt);const vt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Tm(P,vt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Se),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ct),P.deleteSync(vt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,Y=0){const W=Math.pow(2,-Y),X=Math.floor(w.image.width*W),Se=Math.floor(w.image.height*W),Re=U!==null?U.x:0,be=U!==null?U.y:0;$.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,Re,be,X,Se),y.unbindTexture()},this.copyTextureToTexture=function(w,U,Y=null,W=null,X=0,Se=0){let Re,be,Ce,Ne,Qe,it,Pe,ct,Rt;const vt=w.isCompressedTexture?w.mipmaps[Se]:w.image;if(Y!==null)Re=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Qe=Y.min.y,it=Y.isBox3?Y.min.z:0;else{const Tt=Math.pow(2,-X);Re=Math.floor(vt.width*Tt),be=Math.floor(vt.height*Tt),w.isDataArrayTexture?Ce=vt.depth:w.isData3DTexture?Ce=Math.floor(vt.depth*Tt):Ce=1,Ne=0,Qe=0,it=0}W!==null?(Pe=W.x,ct=W.y,Rt=W.z):(Pe=0,ct=0,Rt=0);const gt=_e.convert(U.format),zt=_e.convert(U.type);let Te;U.isData3DTexture?($.setTexture3D(U,0),Te=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Te=P.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Te=P.TEXTURE_2D),y.activeTexture(P.TEXTURE0),y.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),y.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),y.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Xt=y.getParameter(P.UNPACK_ROW_LENGTH),at=y.getParameter(P.UNPACK_IMAGE_HEIGHT),an=y.getParameter(P.UNPACK_SKIP_PIXELS),Ln=y.getParameter(P.UNPACK_SKIP_ROWS),di=y.getParameter(P.UNPACK_SKIP_IMAGES);y.pixelStorei(P.UNPACK_ROW_LENGTH,vt.width),y.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt.height),y.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),y.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),y.pixelStorei(P.UNPACK_SKIP_IMAGES,it);const qi=w.isDataArrayTexture||w.isData3DTexture,ft=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const Tt=B.get(w),fi=B.get(U),_t=B.get(Tt.__renderTarget),pi=B.get(fi.__renderTarget);y.bindFramebuffer(P.READ_FRAMEBUFFER,_t.__webglFramebuffer),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Yi=0;Yi<Ce;Yi++)qi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,B.get(w).__webglTexture,X,it+Yi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,B.get(U).__webglTexture,Se,Rt+Yi)),P.blitFramebuffer(Ne,Qe,Re,be,Pe,ct,Re,be,P.DEPTH_BUFFER_BIT,P.NEAREST);y.bindFramebuffer(P.READ_FRAMEBUFFER,null),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||B.has(w)){const Tt=B.get(w),fi=B.get(U);y.bindFramebuffer(P.READ_FRAMEBUFFER,D),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,z);for(let _t=0;_t<Ce;_t++)qi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tt.__webglTexture,X,it+_t):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tt.__webglTexture,X),ft?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fi.__webglTexture,Se,Rt+_t):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fi.__webglTexture,Se),X!==0?P.blitFramebuffer(Ne,Qe,Re,be,Pe,ct,Re,be,P.COLOR_BUFFER_BIT,P.NEAREST):ft?P.copyTexSubImage3D(Te,Se,Pe,ct,Rt+_t,Ne,Qe,Re,be):P.copyTexSubImage2D(Te,Se,Pe,ct,Ne,Qe,Re,be);y.bindFramebuffer(P.READ_FRAMEBUFFER,null),y.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ft?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Te,Se,Pe,ct,Rt,Re,be,Ce,gt,zt,vt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Te,Se,Pe,ct,Rt,Re,be,Ce,gt,vt.data):P.texSubImage3D(Te,Se,Pe,ct,Rt,Re,be,Ce,gt,zt,vt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Se,Pe,ct,Re,be,gt,zt,vt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Se,Pe,ct,vt.width,vt.height,gt,vt.data):P.texSubImage2D(P.TEXTURE_2D,Se,Pe,ct,Re,be,gt,zt,vt);y.pixelStorei(P.UNPACK_ROW_LENGTH,Xt),y.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at),y.pixelStorei(P.UNPACK_SKIP_PIXELS,an),y.pixelStorei(P.UNPACK_SKIP_ROWS,Ln),y.pixelStorei(P.UNPACK_SKIP_IMAGES,di),Se===0&&U.generateMipmaps&&P.generateMipmap(Te),y.unbindTexture()},this.initRenderTarget=function(w){B.get(w).__webglFramebuffer===void 0&&$.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),y.unbindTexture()},this.resetState=function(){G=0,V=0,ee=null,y.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const er=new L;function cn(s,e,t,n,i,r){const a=2*Math.PI*i/4,o=Math.max(r-2*i,0),l=Math.PI/4;er.copy(e),er[n]=0,er.normalize();const c=.5*a/(a+o),h=1-er.angleTo(s)/l;return Math.sign(er[t])===1?h*c:o/(a+o)+c+c*(1-h)}class $a extends Wt{constructor(e=1,t=1,n=1,i=2,r=.1){const a=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new L,m=.5/a;for(let p=0,M=0;p<d.length;p+=3,M+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[M+0]=cn(x,c,"z","y",r,n),f[M+1]=1-cn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[M+0]=1-cn(x,c,"z","y",r,n),f[M+1]=1-cn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[M+0]=1-cn(x,c,"x","z",r,e),f[M+1]=cn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[M+0]=1-cn(x,c,"x","z",r,e),f[M+1]=1-cn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[M+0]=1-cn(x,c,"x","y",r,e),f[M+1]=1-cn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[M+0]=cn(x,c,"x","y",r,e),f[M+1]=1-cn(x,c,"y","x",r,t);break}}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.segments,e.radius)}}class DM extends Sr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Wt;e.deleteAttribute("uv");const t=new xn({side:$t}),n=new xn,i=new Wi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Ke(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new cc(e,n,6),o=new mt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Ke(e,ps(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Ke(e,ps(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Ke(e,ps(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const d=new Ke(e,ps(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const u=new Ke(e,ps(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const f=new Ke(e,ps(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ps(s){return new ig({color:0,emissive:16777215,emissiveIntensity:s})}function UM(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Et;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Nu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);const g=Nu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Nu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Jt(a,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<t;g++){const x=h.getComponent(u,g);o.setComponent(u+d,g,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Du(s,e){if(e===dm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Il||e===Pd){let t=s.getIndex();if(t===null){const r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Il)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class FM{templates=[];disposables=[];m;env;constructor(e){const t=new kl(e),n=new DM;this.env=t.fromScene(n,.04).texture,t.dispose(),n.dispose(),this.disposables.push(this.env);const i=(l,c,h,d={})=>this.track(new xn({color:l,metalness:c,roughness:h,envMap:this.env,envMapIntensity:.9,...d})),r=document.createElement("canvas");r.width=64,r.height=8;const a=r.getContext("2d");a.fillStyle="#f2c01e",a.fillRect(0,0,64,8),a.fillStyle="#14161a";for(let l=-8;l<72;l+=12)a.beginPath(),a.moveTo(l,8),a.lineTo(l+6,0),a.lineTo(l+12,0),a.lineTo(l+6,8),a.fill();const o=this.track(new wa(r));o.colorSpace=Mt,o.wrapS=sn,o.repeat.set(4,1),this.m={metal:i(2895928,.85,.36),steel:i(10199724,.95,.22),polymer:i(1974567,.05,.72),rubber:i(1184533,0,.95),tan:i(8022608,.05,.7),olive:i(4410680,.08,.68),ceramic:i(11449533,.15,.4),brass:i(13214282,1,.3),glass:i(862784,1,.05,{emissive:1723520,emissiveIntensity:.6}),red:i(12854300,.3,.45),dark:this.track(new Bt({color:328966})),cyan:i(667712,.2,.3,{emissive:4182271,emissiveIntensity:1.6}),orange:this.track(new Bt({color:16751165})),dot:this.track(new Bt({color:16722474})),hazard:i(16777215,.2,.6,{map:o}),shell:i(11740702,.1,.55),lens:i(7327999,1,.05,{transparent:!0,opacity:.18,depthWrite:!1,side:En})};for(const l of ar)this.templates[l]=this.build(l)}model(e){return this.templates[e].clone()}dispose(){for(const e of this.disposables)e.dispose()}track(e){return this.disposables.push(e),e}add(e,t,n,i=0,r=0,a=0){const o=new Ke(this.track(t),n);return o.position.set(i,r,a),e.add(o),o}box(e,t,n,i,r,a=0,o=0,l=0,c=.006){return this.add(e,new $a(t,n,i,2,Math.min(c,t/2-1e-4,n/2-1e-4,i/2-1e-4)),r,a,o,l)}tube(e,t,n,i,r,a=0,o=0,l=0,c=20){const h=this.add(e,new kt(t,n,i,c),r,a,o,l);return h.rotation.x=-Math.PI/2,h}profile(e,t,n,i,r=0,a=0,o=0,l=.004){const c=new $d(t.map(([d,u])=>new ce(d,u))),h=new xc(c,{depth:n-l*2,bevelEnabled:!0,bevelSize:l,bevelThickness:l,bevelSegments:2,curveSegments:8});return h.translate(0,0,-(n-l*2)/2),h.rotateY(Math.PI/2),this.add(e,h,i,r,a,o)}repeat(e,t,n,i){const r=Array.from({length:n},(o,l)=>t(l)),a=UM(r);for(const o of r)o.dispose();return this.add(e,a,i)}anchor(e,t,n,i,r){const a=new mt;return a.name=t,a.position.set(n,i,r),e.add(a),a}part(e,t,n=0,i=0,r=0){const a=new yt;return a.name=t,a.position.set(n,i,r),e.add(a),a}grip(e,t,n=0){this.profile(e,[[.018,0],[-.03,0],[-.062,-.115],[-.018,-.125],[.012,-.03]],.034,t,0,0,n),this.box(e,.012,.012,.065,this.m.metal,0,-.035,n-.035,.004),this.box(e,.006,.022,.008,this.m.steel,0,-.022,n-.022,.002)}build(e){const t=new yt,n=this.m;if(e===Vt){this.grip(t,n.polymer),this.profile(t,[[-.1,0],[-.1,.06],[-.075,.076],[.13,.076],[.205,.052],[.205,.014],[.15,0]],.056,n.ceramic,0,0,0,.008),this.profile(t,[[-.085,.074],[.14,.074],[.115,.096],[-.06,.096]],.04,n.metal,0,0,0,.005),this.repeat(t,r=>{const a=new Wt(.06,.006,.03);return a.translate(0,.024+r*.012,.02),a},3,n.dark),this.box(t,.03,.014,.12,n.metal,0,-.004,-.11,.004),this.box(t,.058,.05,.03,n.metal,0,.032,.09,.01),this.tube(t,.017,.017,.15,n.steel,0,.036,-.26);const i=this.part(t,"heat");for(const r of[-.21,-.25,-.29]){const a=this.add(i,new fr(.025,.006,8,20),n.cyan,0,.036,r);a.rotation.y=0}this.box(i,.006,.026,.11,n.cyan,.029,.04,-.05,.002),this.box(i,.006,.026,.11,n.cyan,-.029,.04,-.05,.002),this.tube(t,.024,.022,.03,n.metal,0,.036,-.335),this.tube(t,.012,.012,.004,n.dark,0,.036,-.351),this.box(t,.008,.014,.012,n.metal,0,.103,-.18,.002),this.box(t,.03,.012,.012,n.metal,0,.101,0,.002),this.anchor(t,"muzzle",0,.036,-.36),this.anchor(t,"sight",0,.106,.05),this.anchor(t,"fore",0,-.01,-.15)}if(e===zi){this.grip(t,n.polymer),this.profile(t,[[-.03,.07],[-.33,.045],[-.35,-.1],[-.3,-.112],[-.12,-.02],[-.05,-.03],[-.03,0]],.044,n.polymer),this.box(t,.05,.15,.022,n.rubber,0,-.03,.345,.006),this.box(t,.062,.088,.25,n.metal,0,.032,-.12,.01),this.box(t,.063,.007,.2,n.orange,0,.06,-.12,.002),this.box(t,.003,.03,.08,n.dark,.032,.045,-.13,.001),this.tube(t,.016,.016,.56,n.steel,0,.06,-.52),this.tube(t,.015,.015,.46,n.metal,0,.022,-.47),this.tube(t,.017,.017,.02,n.metal,0,.022,-.7);const i=this.part(t,"pump",0,.022,-.43);this.tube(i,.027,.027,.17,n.polymer),this.repeat(i,a=>{const o=new kt(.029,.029,.008,20);return o.rotateX(Math.PI/2),o.translate(0,0,-.065+a*.026),o},6,n.polymer),this.box(t,.004,.05,.1,n.polymer,-.033,.035,-.12,.002);for(let a=0;a<4;a++){const o=-.155+a*.022,l=this.add(t,new kt(.0085,.0085,.042,10),n.shell,-.041,.04,o);l.rotation.z=0,this.add(t,new kt(.009,.009,.009,10),n.brass,-.041,.012,o)}this.add(t,new ii(.004,8,6),n.orange,0,.081,-.79);const r=this.add(t,new fr(.009,.002,6,14),n.metal,0,.093,-.02);r.rotation.y=0,this.anchor(t,"muzzle",0,.06,-.8),this.anchor(t,"sight",0,.093,.08),this.anchor(t,"fore",0,0,-.43)}if(e===nn){this.grip(t,n.polymer),this.box(t,.056,.062,.31,n.metal,0,.05,-.1,.008),this.box(t,.05,.052,.19,n.tan,0,0,-.03,.008),this.box(t,.03,.012,.36,n.metal,0,.087,-.12,.002),this.repeat(t,a=>{const o=new Wt(.034,.006,.007);return o.translate(0,.096,.04-a*.028),o},13,n.metal);const i=this.add(t,new kt(.031,.031,.3,8),n.tan,0,.05,-.4);i.rotation.x=-Math.PI/2,i.rotation.y=Math.PI/8,this.repeat(t,a=>{const o=new Wt(.065,.008,.035);return o.translate(0,.05,-.3-a*.055),o},4,n.dark),this.tube(t,.011,.011,.16,n.steel,0,.05,-.62),this.box(t,.03,.032,.026,n.metal,0,.05,-.56,.004),this.profile(t,[[.008,0],[-.008,0],[-.004,.05],[.004,.05]],.012,n.metal,0,.06,-.56,.002),this.tube(t,.016,.016,.065,n.metal,0,.05,-.72),this.repeat(t,a=>{const o=new Wt(.034,.005,.012);return o.translate(0,.05,-.705-a*.018),o},3,n.dark);const r=this.part(t,"mag",0,-.005,-.1);this.profile(r,[[.03,0],[-.03,0],[-.012,-.09],[.03,-.17],[.085,-.158],[.068,-.075]],.028,n.polymer),this.box(r,.03,.01,.07,n.metal,0,-.005,0,.003),this.tube(t,.013,.013,.16,n.metal,0,.045,.14),this.profile(t,[[0,.035],[-.17,.035],[-.195,-.095],[-.16,-.105],[-.03,-.015],[0,-.015]],.04,n.tan,0,.03,.1),this.box(t,.042,.12,.018,n.rubber,0,-.005,.29,.005),this.box(t,.014,.012,.04,n.metal,.03,.07,-.02,.003),this.box(t,.04,.012,.05,n.metal,0,.099,-.06,.003);for(const a of[-.019,.019])this.box(t,.005,.036,.05,n.polymer,a,.122,-.06,.002);this.box(t,.043,.005,.05,n.polymer,0,.142,-.06,.002),this.add(t,new Ds(.034,.032),n.lens,0,.122,-.08),this.add(t,new ii(.0018,8,6),n.dot,0,.122,-.079),this.anchor(t,"muzzle",0,.05,-.76),this.anchor(t,"sight",0,.122,.17),this.anchor(t,"fore",0,.012,-.38)}if(e===_n){this.profile(t,[[.38,.035],[.38,-.005],[.07,-.03],[.035,-.02],[0,-.125],[-.05,-.128],[-.045,-.03],[-.12,-.045],[-.42,-.08],[-.435,.02],[-.38,.05],[-.12,.045],[-.04,.03],[.06,.035]],.05,n.olive),this.box(t,.04,.03,.16,n.olive,0,.06,.24,.01),this.box(t,.054,.15,.022,n.rubber,0,-.015,.44,.006),this.tube(t,.022,.022,.25,n.metal,0,.048,-.05);const i=this.add(t,new kt(.014,.016,.6,6),n.metal,0,.048,-.47);i.rotation.x=-Math.PI/2,this.tube(t,.019,.019,.075,n.metal,0,.048,-.8),this.repeat(t,h=>{const d=new Wt(.042,.006,.014);return d.translate(0,.048,-.78-h*.022),d},3,n.dark);const r=this.part(t,"bolt",0,.048,.05);this.tube(r,.012,.012,.07,n.steel);const a=this.add(r,new kt(.005,.005,.06,8),n.steel,.03,-.012,.02);a.rotation.z=Math.PI/2.6,this.add(r,new ii(.011,12,8),n.steel,.056,-.026,.02);const o=this.part(t,"mag",0,-.02,-.07);this.box(o,.032,.055,.075,n.metal,0,-.01,0,.004),this.box(t,.012,.012,.07,n.metal,0,-.04,0,.004),this.tube(t,.019,.019,.3,n.polymer,0,.118,-.07,24),this.tube(t,.033,.021,.07,n.polymer,0,.118,-.25,24),this.tube(t,.029,.029,.004,n.glass,0,.118,-.286,24),this.tube(t,.024,.028,.06,n.polymer,0,.118,.1,24),this.tube(t,.022,.022,.003,n.glass,0,.118,.131,24);const l=this.add(t,new kt(.012,.012,.03,16),n.metal,0,.148,-.07);l.rotation.x=0;const c=this.add(t,new kt(.012,.012,.03,16),n.metal,.033,.118,-.07);c.rotation.z=Math.PI/2;for(const h of[-.16,.02]){this.box(t,.03,.05,.02,n.metal,0,.085,h,.004);const d=this.add(t,new fr(.021,.005,6,18),n.metal,0,.118,h);d.rotation.y=0}for(const h of[-.012,.012])this.tube(t,.005,.005,.18,n.metal,h,0,-.3);this.box(t,.03,.02,.02,n.metal,0,.005,-.2,.004),this.anchor(t,"muzzle",0,.048,-.84),this.anchor(t,"sight",0,.118,.2),this.anchor(t,"fore",0,-.01,-.26)}if(e===dn){this.grip(t,n.polymer),this.tube(t,.065,.065,.92,n.olive,0,.075,-.25,28);for(const r of[-.55,-.25,.1])this.tube(t,.071,.071,.03,n.metal,0,.075,r,28);this.tube(t,.067,.067,.05,n.hazard,0,.075,-.63,28),this.tube(t,.086,.072,.09,n.metal,0,.075,-.75,28),this.tube(t,.062,.062,.012,n.dark,0,.075,-.79,28);const i=this.add(t,new Xa(.038,.09,18),n.red,0,.075,-.76);i.rotation.x=-Math.PI/2,this.tube(t,.072,.092,.09,n.metal,0,.075,.25,28),this.tube(t,.066,.066,.01,n.dark,0,.075,.29,28),this.box(t,.034,.11,.04,n.polymer,0,-.02,-.32,.008),this.box(t,.034,.055,.09,n.polymer,-.085,.11,-.12,.006),this.add(t,new ii(.007,8,6),n.dot,-.085,.12,-.166),this.box(t,.008,.006,.42,n.dot,0,.141,-.25,.002),this.box(t,.03,.05,.12,n.metal,0,.025,-.05,.006),this.anchor(t,"muzzle",0,.075,-.8),this.anchor(t,"sight",-.085,.14,.1),this.anchor(t,"fore",0,-.06,-.32)}for(const i of t.children)i instanceof Ke&&(i.castShadow=!0,i.receiveShadow=!0);return t}}const OM={mega:5223679,armor:16761402,health:6160266,shotgun:16751165,shells:16751165,auto:10288957,bullets:10288957,rifle:11111423,rounds:11111423,rocket:16731469,rockets:16731469},kM={shotgun:zi,auto:nn,rifle:_n,rocket:dn},BM={floor:{base:"#4a4e57",kind:"plate",scale:.25,metal:.25},wall:{base:"#2c3039",kind:"concrete",scale:.125,metal:.1},metal:{base:"#59606d",kind:"grate",scale:.5,metal:.55},stair:{base:"#5f6570",kind:"hazard",scale:.5,metal:.35},rail:{base:"#d08a32",kind:"rail",scale:1,metal:.5},crate:{base:"#6e5a40",kind:"crate",scale:.5,metal:.1},pillar:{base:"#59606e",kind:"pillar",scale:.25,metal:.4}};function Gl(s){return()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296)}function zM(s,e){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d"),i=Gl(s.length*977+11);n.fillStyle=e,n.fillRect(0,0,256,256);for(let r=0;r<9e3;r++){const a=i()>.5?255:0;n.fillStyle=`rgba(${a},${a},${a},${.02+i()*.04})`,n.fillRect(i()*256,i()*256,1+i()*2,1+i()*2)}if(n.lineWidth=2,s==="plate"){n.strokeStyle="rgba(0,0,0,.45)",n.strokeRect(1,1,254,254),n.strokeRect(128,1,0,254),n.strokeRect(1,128,254,0),n.fillStyle="rgba(255,255,255,.08)";for(const[r,a]of[[10,10],[118,10],[138,10],[246,10],[10,118],[246,118],[10,246],[246,246],[118,246],[138,246],[10,138],[246,138]])n.fillRect(r-3,a-3,6,6)}if(s==="concrete"){n.fillStyle="rgba(0,0,0,.25)",n.fillRect(0,120,256,6),n.fillStyle="rgba(255,140,40,.35)",n.fillRect(0,0,256,4);for(let r=0;r<6;r++)n.fillStyle="rgba(0,0,0,.12)",n.fillRect(i()*256,0,2+i()*3,256)}if(s==="grate"){n.strokeStyle="rgba(0,0,0,.55)";for(let r=0;r<=256;r+=32)n.beginPath(),n.moveTo(r,0),n.lineTo(r,256),n.stroke();n.strokeStyle="rgba(255,255,255,.1)";for(let r=2;r<=256;r+=32)n.beginPath(),n.moveTo(r,0),n.lineTo(r,256),n.stroke()}if(s==="hazard"){for(let r=-256;r<512;r+=48)n.fillStyle="rgba(240,170,40,.75)",n.beginPath(),n.moveTo(r,0),n.lineTo(r+24,0),n.lineTo(r+24-60,60),n.lineTo(r-60,60),n.fill();n.fillStyle="rgba(0,0,0,.4)",n.fillRect(0,60,256,4)}if(s==="rail"){n.fillStyle="rgba(0,0,0,.4)";for(let r=0;r<256;r+=64)n.fillRect(r,0,8,256)}if(s==="crate"&&(n.strokeStyle="rgba(30,20,10,.7)",n.lineWidth=10,n.strokeRect(6,6,244,244),n.beginPath(),n.moveTo(10,10),n.lineTo(246,246),n.stroke()),s==="pillar"){n.fillStyle="rgba(0,0,0,.35)";for(let r=0;r<256;r+=64)n.fillRect(0,r,256,6);n.fillStyle="rgba(120,220,255,.5)",n.fillRect(120,0,16,256)}return t}function GM(s,e){const t=[],n=[],i=[],r=(o,l,c)=>{for(const h of[0,1,2,0,2,3]){const d=l[h];t.push(...d),n.push(...o);const[u,f]=c(d);i.push(u*e,f*e)}};for(const o of s){const{min:l,max:c}=o;r([0,1,0],[[l.x,c.y,l.z],[l.x,c.y,c.z],[c.x,c.y,c.z],[c.x,c.y,l.z]],h=>[h[0],h[2]]),r([0,-1,0],[[l.x,l.y,l.z],[c.x,l.y,l.z],[c.x,l.y,c.z],[l.x,l.y,c.z]],h=>[h[0],h[2]]),r([1,0,0],[[c.x,l.y,l.z],[c.x,c.y,l.z],[c.x,c.y,c.z],[c.x,l.y,c.z]],h=>[h[2],h[1]]),r([-1,0,0],[[l.x,l.y,l.z],[l.x,l.y,c.z],[l.x,c.y,c.z],[l.x,c.y,l.z]],h=>[h[2],h[1]]),r([0,0,1],[[l.x,l.y,c.z],[c.x,l.y,c.z],[c.x,c.y,c.z],[l.x,c.y,c.z]],h=>[h[0],h[1]]),r([0,0,-1],[[l.x,l.y,l.z],[l.x,c.y,l.z],[c.x,c.y,l.z],[c.x,l.y,l.z]],h=>[h[0],h[1]])}const a=new Et;return a.setAttribute("position",new ot(t,3)),a.setAttribute("normal",new ot(n,3)),a.setAttribute("uv",new ot(i,2)),a}const HM=[[.2,-.2,-.5],[.19,-.21,-.42],[.19,-.21,-.44],[.2,-.22,-.42],[.27,-.29,-.62]],Uu=[[.02,.04],[.07,.16],[.025,.05],[.08,.14],[.09,.12]],VM=[.5,1.1,.8,1.4,1.8],WM=[1,.7,.8,2.4,1],XM=["","#ffe2a8","#ffe9b8","#ffffff",""],wn=.44,jn=.46,Ho=wn+jn;function Fu(s,e){const t=Math.min(wn+jn-.001,Math.max(.05,Math.hypot(e,s))),n=Math.atan2(e,s),i=Math.acos(Math.max(-1,Math.min(1,(wn*wn+t*t-jn*jn)/(2*wn*t)))),r=Math.acos(Math.max(-1,Math.min(1,(wn*wn+jn*jn-t*t)/(2*wn*jn))));return[n+i,-(Math.PI-r)]}class qM{renderer;scene=new Sr;camera=new Lt(80,1,.05,300);gunScene=new Sr;gunCamera=new Lt(60,1,.01,10);canvas;arena;disposables=[];avatars=new Map;items=[];pads=[];lava;lavaLight;rocketMeshes=[];tracerMeshes=[];blastMeshes=[];sparkMeshes=[];flashLight;smoke;puffs=[];dummy=new mt;kit;viewGuns=[];viewFlash;viewHeat;viewSleeve;viewCuff;bob=0;roll=0;fov=80;slideTilt=0;kick=0;time=0;shownWeapon=-1;switchAnim=0;width=0;height=0;constructor(e,t){this.canvas=e,this.arena=t,this.renderer=new pf({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=Mt,this.renderer.toneMapping=Ha,this.renderer.toneMappingExposure=1.25,this.renderer.autoClear=!1,this.scene.background=new He(724764),this.scene.fog=new ac(724764,35,110),this.scene.add(new Ol(9414360,3810328,2.1));const n=new Ts(12571391,1.3);n.position.set(-20,40,15),this.scene.add(n);const i=new Ts(16752736,.6);i.position.set(25,10,-30),this.scene.add(i),this.lavaLight=new Wi(16738848,60,40,1.6),this.lavaLight.position.set(0,1,0),this.scene.add(this.lavaLight),this.flashLight=new Wi(16756832,0,16,2),this.scene.add(this.flashLight),this.kit=new FM(this.renderer),this.disposables.push(this.kit),this.buildArena(),this.buildPads(),this.buildItems(),this.buildSky();const r=this.track(new Fi(.18,0));this.smoke=new cc(r,this.track(new Bt({color:10132134,transparent:!0,opacity:.35,depthWrite:!1})),160),this.smoke.instanceMatrix.setUsage(bm),this.smoke.frustumCulled=!1,this.smoke.count=0,this.scene.add(this.smoke),this.gunScene.add(new Ol(13161727,3154970,1.1));const a=new Ts(16769728,1.6);a.position.set(-1,2,1),this.gunScene.add(a),this.viewHeat=this.std(667712,{metalness:.2,roughness:.3,emissive:4182271,emissiveIntensity:1.6}),this.viewSleeve=this.std(3949133,{roughness:.85,metalness:.05}),this.viewCuff=this.std(16739133,{roughness:.5,metalness:.3,emissive:2230272});for(const o of ar)this.viewGuns.push(this.buildViewGun(o));this.viewFlash=new Ke(this.track(new _c(.05,0)),this.track(new Bt({color:16751168,transparent:!0,opacity:.85,blending:Ui,depthWrite:!1}))),this.gunScene.add(this.viewFlash),this.resize()}track(e){return this.disposables.push(e),e}std(e,t={}){return this.track(new xn({color:e,roughness:.75,metalness:.3,...t}))}glow(e,t=1){return this.track(new Bt({color:e,transparent:t<1,opacity:t,blending:t<1?Ui:Ss,depthWrite:t>=1}))}mesh(e,t,n,i=0,r=0,a=0){const o=new Ke(t,n);return o.position.set(i,r,a),e.add(o),o}boxGeo(e,t,n){return this.track(new Wt(e,t,n))}buildArena(){const e=new Map;for(const u of this.arena.solids){const f=e.get(u.style)||[];f.push(u),e.set(u.style,f)}for(const[u,f]of e){const g=BM[u],x=this.track(new wa(zM(g.kind,g.base)));x.wrapS=x.wrapT=sn,x.colorSpace=Mt,x.anisotropy=4;const m=new Ke(this.track(GM(f,g.scale)),this.std(16777215,{map:x,metalness:g.metal,roughness:u==="rail"?.4:.8,emissive:u==="rail"?2757632:0}));this.scene.add(m)}const t=this.glow(7329535),n=this.glow(16752704);for(const u of[-1,1])for(const f of[2.2,8.5,14])this.mesh(this.scene,this.boxGeo(64,.12,.05),f>8?t:n,0,f,u*31.97),this.mesh(this.scene,this.boxGeo(.05,.12,64),f>8?t:n,u*31.97,f,0);for(const[u,f,g,x]of[[-26,26,26,26],[-26,26,-26,-26],[-26,-26,-26,26],[26,26,-26,26]]){const m=Math.max(.06,f-u),p=Math.max(.06,x-g);this.mesh(this.scene,this.boxGeo(m,.06,p),t,(u+f)/2,4.47,(g+x)/2)}for(const u of[-1,1])this.mesh(this.scene,this.boxGeo(12.1,.1,.08),n,0,9.42,u*6.04),this.mesh(this.scene,this.boxGeo(.08,.1,12.1),n,u*6.04,9.42,0);const i=document.createElement("canvas");i.width=i.height=256;const r=i.getContext("2d"),a=Gl(42),o=r.createLinearGradient(0,0,256,256);o.addColorStop(0,"#ff3d0a"),o.addColorStop(.5,"#ff8a1f"),o.addColorStop(1,"#ff2a05"),r.fillStyle=o,r.fillRect(0,0,256,256);for(let u=0;u<70;u++)r.fillStyle=`rgba(${60+a()*40},${10+a()*20},0,${.4+a()*.4})`,r.beginPath(),r.ellipse(a()*256,a()*256,8+a()*30,5+a()*16,a()*3,0,Math.PI*2),r.fill();for(let u=0;u<40;u++)r.fillStyle=`rgba(255,${200+a()*55},120,${.3+a()*.5})`,r.beginPath(),r.arc(a()*256,a()*256,1+a()*4,0,Math.PI*2),r.fill();this.lava=this.track(new wa(i)),this.lava.wrapS=this.lava.wrapT=sn,this.lava.repeat.set(3,3),this.lava.colorSpace=Mt;const l=this.arena.lava,c=l.max.x-l.min.x,h=l.max.z-l.min.z,d=new Ke(this.track(new Ds(c,h)),this.track(new Bt({map:this.lava,color:16777215})));d.rotation.x=-Math.PI/2,d.position.set((l.min.x+l.max.x)/2,l.max.y,(l.min.z+l.max.z)/2),this.scene.add(d)}buildPads(){const e=this.glow(5828863),t=this.glow(5828863,.16),n=this.std(2831168,{metalness:.7});for(const i of this.arena.pads){const r=new yt;r.position.set(i.center.x,i.center.y,i.center.z),this.scene.add(r),this.mesh(r,this.track(new kt(1.15,1.25,.18,24)),n,0,.09,0);const a=this.mesh(r,this.track(new kt(.9,.9,.02,24)),e,0,.19,0);this.pads.push(a);const o=this.mesh(r,this.track(new kt(.85,1,4,24,1,!0)),t,0,2.2,0);o.renderOrder=2}}buildItems(){for(const e of this.arena.items){const t=new yt;t.position.set(e.pos.x,e.pos.y,e.pos.z),this.scene.add(t);const n=OM[e.kind];this.mesh(t,this.track(new kt(.55,.6,.06,20)),this.glow(n,.5),0,.03,0);const i=new yt;if(i.position.y=.75,t.add(i),e.kind==="mega")this.mesh(i,this.track(new Fi(.42,1)),this.std(n,{emissive:n,emissiveIntensity:.9,metalness:.1,roughness:.2}));else if(e.kind==="health"){const r=this.std(15921906);this.mesh(i,this.boxGeo(.5,.5,.5),r);const a=this.glow(n);this.mesh(i,this.boxGeo(.52,.14,.36),a),this.mesh(i,this.boxGeo(.52,.36,.14),a)}else if(e.kind==="armor"){const r=this.std(n,{metalness:.8,roughness:.3,emissive:3810560});this.mesh(i,this.boxGeo(.6,.55,.22),r),this.mesh(i,this.boxGeo(.3,.2,.24),r,0,.34,0)}else if(e.kind==="shells"||e.kind==="rockets"||e.kind==="bullets"||e.kind==="rounds"){const r=this.std(4212304);this.mesh(i,this.boxGeo(.55,.35,.4),r),this.mesh(i,this.boxGeo(.57,.08,.42),this.glow(n),0,.06,0)}else{const r=this.kit.model(kM[e.kind]);r.scale.setScalar(1.25),r.rotation.y=Math.PI/2,r.position.y=.1,i.add(r)}this.items.push({kind:e.kind,group:i,base:e.pos})}}buildSky(){const e=[],t=Gl(9);for(let r=0;r<600;r++){const a=t()*Math.PI*2,o=.15+t()*1.2,l=200;e.push(Math.cos(a)*Math.cos(o)*l,Math.sin(o)*l,Math.sin(a)*Math.cos(o)*l)}const n=this.track(new Et);n.setAttribute("position",new ot(e,3)),this.scene.add(new fc(n,this.track(new dc({color:13621503,size:1.2,sizeAttenuation:!1,fog:!1}))));const i=this.glow(16724016);for(const r of[-32.5,32.5])for(const a of[-32.5,32.5])this.mesh(this.scene,this.track(new ii(.3,8,6)),i,r,18.4,a)}avatar(e){const t=this.avatars.get(e.id);if(t)return t;const n=this.std(e.color,{emissive:e.color,emissiveIntensity:.3,metalness:.35,roughness:.45}),i=this.std(4870236,{metalness:.15,roughness:.8}),r=this.std(6975872,{metalness:.55,roughness:.4}),a=this.glow(15268863),o=this.glow(e.color),l=new yt,c=new yt;c.position.y=Ho,l.add(c),this.mesh(c,this.boxGeo(.34,.16,.22),i),this.mesh(c,this.boxGeo(.36,.06,.24),r,0,.07,0);const h=E=>{const C=new yt;C.position.set(E*.11,-.04,0),c.add(C),this.mesh(C,this.boxGeo(.15,wn,.17),i,0,-wn/2,0),this.mesh(C,this.boxGeo(.16,.2,.05),r,0,-.2,-.09);const v=new yt;return v.position.y=-wn,C.add(v),this.mesh(v,this.boxGeo(.14,.12,.06),n,0,0,-.09),this.mesh(v,this.boxGeo(.13,jn-.08,.15),i,0,-.38/2,0),this.mesh(v,this.boxGeo(.15,.1,.27),r,0,-jn+.05,-.05),{hip:C,knee:v}},d=[h(-1),h(1)],u=new yt;c.add(u),this.mesh(u,this.boxGeo(.3,.24,.2),i,0,.16,0),this.mesh(u,this.boxGeo(.44,.32,.28),n,0,.42,0),this.mesh(u,this.boxGeo(.2,.1,.04),r,0,.49,-.15),this.mesh(u,this.boxGeo(.22,.025,.01),o,0,.35,-.143),this.mesh(u,this.boxGeo(.32,.36,.14),r,0,.42,.2),this.mesh(u,this.boxGeo(.015,.3,.015),r,.12,.72,.24);for(const E of[-1,1])this.mesh(u,this.boxGeo(.15,.1,.22),n,E*.27,.56,0);this.mesh(u,this.boxGeo(.1,.08,.1),i,0,.6,0);const f=new yt;f.position.y=.64,u.add(f),this.mesh(f,this.track(new ii(.16,16,12)),r,0,.13,0).scale.set(1,1.05,1.08),this.mesh(f,this.boxGeo(.25,.08,.07),a,0,.13,-.13),this.mesh(f,this.boxGeo(.04,.04,.3),o,0,.29,0);const g=new yt;g.position.y=.5,u.add(g);const x=(E,C,v,T)=>{const R=new L(...E),I=new L(...C),F=new Ke(this.boxGeo(v,v,R.distanceTo(I)+v*.6),T);F.position.copy(R).add(I).multiplyScalar(.5),F.quaternion.setFromUnitVectors(new L(0,0,1),I.clone().sub(R).normalize()),g.add(F)};x([.25,0,0],[.24,-.22,-.1],.1,i),x([.24,-.22,-.1],[.12,-.1,-.3],.09,i),this.mesh(g,this.boxGeo(.08,.08,.08),r,.12,-.1,-.31),x([-.25,0,0],[-.2,-.2,-.24],.1,i),x([-.2,-.2,-.24],[.06,-.06,-.56],.09,i),this.mesh(g,this.boxGeo(.08,.08,.08),r,.06,-.06,-.57);const m=new yt;m.position.set(.12,-.1,-.3),g.add(m);const p=this.mesh(m,this.track(new Fi(.12,0)),this.glow(16765578,.9),0,0,-.55);p.visible=!1;const M=document.createElement("canvas");M.width=256,M.height=64;const b=M.getContext("2d");b.font="bold 30px system-ui,sans-serif",b.textAlign="center",b.textBaseline="middle",b.lineWidth=6,b.strokeStyle="rgba(0,0,0,.8)",b.strokeText(e.name,128,32),b.fillStyle=e.color,b.fillText(e.name,128,32);const _=new c0(this.track(new Bd({map:this.track(new wa(M)),depthTest:!0,transparent:!0})));_.scale.set(1.6,.4,1),_.position.y=2.15,l.add(_),this.scene.add(l);const S={group:l,pelvis:c,torso:u,head:f,arms:g,legs:d,label:_,gun:m,flash:p,last:{...e.pos},walk:0,pose:{hip:Ho,bend:0,roll:0,legs:[0,0,0,0]}};return this.avatars.set(e.id,S),S}poseAvatar(e,t,n,i,r){const a=Math.min(1,i/8),o=t.stance>0,l=Math.sin(e.walk),c=Math.cos(e.walk);let h=Ho,d=-.05-a*.15,u;if(t.stance===2)h=.36,d=.55,u=[1.35,-.15,.45,-2.1];else if(o&&r)h=.62,d=-.35,u=[1.3,-2.2,1.1,-2];else if(o){h=.55,d=-.6;const[M,b]=Fu(h,.2+l*.22*a),[_,S]=Fu(h,-.08-l*.22*a);u=[M,b,_,S]}else r?u=[.6,-1,.15,-.5]:u=[l*.65*a,-(.1+Math.max(0,-c)*1.2)*a,-l*.65*a,-(.1+Math.max(0,c)*1.2)*a];const f=Zu(this.arena,{pos:t.pos,crouch:o,lean:t.lean,yaw:t.yaw}),g=Rn(o)-ri/2-h,x=-Math.asin(Math.max(-1,Math.min(1,f/Math.max(.3,g)))),m=1-Math.exp(-n*14),p=e.pose;p.hip+=(h-p.hip)*m,p.bend+=(d-p.bend)*m,p.roll+=(x-p.roll)*m,p.legs=p.legs.map((M,b)=>M+(u[b]-M)*m),e.pelvis.position.y=p.hip,e.torso.rotation.set(p.bend,0,p.roll),e.head.rotation.set(-p.bend+t.pitch*.5,0,-p.roll*.4),e.arms.rotation.x=t.pitch-p.bend,e.legs[0].hip.rotation.x=p.legs[0],e.legs[0].knee.rotation.x=p.legs[1],e.legs[1].hip.rotation.x=p.legs[2],e.legs[1].knee.rotation.x=p.legs[3],e.label.position.y=Rn(o)+.4}gunFor(e,t){if(e.gun.userData.w===t)return;e.gun.userData.w=t;for(const i of[...e.gun.children])i!==e.flash&&e.gun.remove(i);const n=this.kit.model(t);e.gun.add(n),e.flash.position.copy(n.getObjectByName("muzzle").position)}resize(){const e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;e===this.width&&t===this.height||(this.width=e,this.height=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.gunCamera.aspect=e/t,this.gunCamera.updateProjectionMatrix())}draw(e,t){this.time+=t,this.resize(),this.lava.offset.set(Math.sin(this.time*.13)*.3,this.time*.02),this.lavaLight.intensity=55+Math.sin(this.time*2.1)*8;for(const[r,a]of this.pads.entries())a.material.color.setHSL(.52,1,.5+.15*Math.sin(this.time*4+r));this.items.forEach((r,a)=>{r.group.visible=e.itemAvailable(a),r.group.rotation.y=this.time*1.6,r.group.position.y=.75+Math.sin(this.time*2+a)*.1});const n=e.phase==="over";if(n){const r=this.time*.15;this.camera.position.set(Math.sin(r)*24,16,Math.cos(r)*24),this.camera.lookAt(0,6,0)}else{const r=e.view,a=!e.alive||e.fell,o=Math.hypot(e.body.vel.x,e.body.vel.z),l=e.stance===2;e.body.onGround&&!l&&!a&&(this.bob+=t*o*(e.body.crouch?1.1:1.4));const c=a?Math.min(1.2,(e.time-e.deathTime)*2):0,h=1-Math.exp(-t*12);this.slideTilt+=((l?1:0)-this.slideTilt)*h,this.roll+=(-e.body.lean*.21+this.slideTilt*.05-this.roll)*h;const d=2*Math.atan(Math.tan((80+this.slideTilt*7)*Math.PI/360)/e.zoom())*180/Math.PI;Math.abs(d-this.fov)>.01&&(this.fov=d,this.camera.fov=d,this.camera.updateProjectionMatrix()),this.camera.position.set(r.x,r.y-c+(l?0:Math.sin(this.bob*2)*.03*Math.min(1,o/8)),r.z),this.camera.rotation.set(e.pitch+e.punch[0],e.yaw-e.punch[1],a?Math.min(.5,c*.4):this.roll,"YXZ")}const i=new Set;for(const r of e.views()){const a=this.avatar(r);i.add(r.id),a.group.visible=r.alive&&!n||n,a.group.position.set(r.pos.x,r.pos.y,r.pos.z),a.group.rotation.y=r.yaw;const o=Math.hypot(r.pos.x-a.last.x,r.pos.z-a.last.z),l=Math.abs(r.pos.y-a.last.y)>t*4.5;a.walk+=o*(r.stance===1?4.5:3.2),a.last={...r.pos},this.poseAvatar(a,r,t,o/(t||1),l),this.gunFor(a,r.weapon),a.flash.visible=r.muzzle>0}for(const[r,a]of this.avatars)i.has(r)||(this.scene.remove(a.group),this.avatars.delete(r));this.drawEffects(e,t),this.renderer.clear(),this.renderer.render(this.scene,this.camera),!n&&e.alive&&!e.fell&&this.drawGun(e,t)}pool(e,t,n){for(;e.length<t;){const i=n();this.scene.add(i),e.push(i)}return e.forEach((i,r)=>i.visible=r<t),e}drawEffects(e,t){const n=this.pool(this.tracerMeshes,e.tracers.length,()=>new Ke(this.boxGeo(.014,.014,1),this.track(new Bt({color:16777215,transparent:!0,blending:Ui,depthWrite:!1}))));e.tracers.forEach((c,h)=>{const d=n[h],u=c.to.x-c.from.x,f=c.to.y-c.from.y,g=c.to.z-c.from.z,x=Math.hypot(u,f,g)||.01;d.position.set(c.from.x+u/2,c.from.y+f/2,c.from.z+g/2),d.scale.set(1,1,x),d.lookAt(c.to.x,c.to.y,c.to.z);const m=d.material;m.color.set(XM[c.w]||c.color),m.opacity=.8*Math.max(0,1-c.age/c.life),d.scale.x=d.scale.y=WM[c.w]});const i=e.rockets.filter(c=>!c.dead),r=this.pool(this.rocketMeshes,i.length,()=>new Ke(this.boxGeo(.14,.14,.5),this.glow(16764794)));i.forEach((c,h)=>{const d=r[h];d.position.set(c.pos.x,c.pos.y,c.pos.z),d.lookAt(c.pos.x+c.dir.x,c.pos.y+c.dir.y,c.pos.z+c.dir.z),Math.random()<.9&&this.puffs.push({p:{...c.pos},age:0})}),this.puffs=this.puffs.filter(c=>(c.age+=t)<.9).slice(-160),this.puffs.forEach((c,h)=>{this.dummy.position.set(c.p.x,c.p.y+c.age*.6,c.p.z),this.dummy.scale.setScalar(.6+c.age*2.2),this.dummy.updateMatrix(),this.smoke.setMatrixAt(h,this.dummy.matrix)}),this.smoke.count=this.puffs.length,this.smoke.instanceMatrix.needsUpdate=!0;const a=this.pool(this.blastMeshes,e.blasts.length,()=>new Ke(this.track(new Fi(1,2)),this.track(new Bt({color:16752704,transparent:!0,blending:Ui,depthWrite:!1}))));let o=0;e.blasts.forEach((c,h)=>{const d=a[h],u=c.age/.7;d.position.set(c.pos.x,c.pos.y,c.pos.z),d.scale.setScalar(.5+u*3.2);const f=d.material;f.opacity=Math.max(0,.95-u*1.2),f.color.setHSL(.08-u*.06,1,.6-u*.3),1-u>o&&(o=1-u,this.flashLight.position.set(c.pos.x,c.pos.y+.5,c.pos.z))}),this.flashLight.intensity=o*120;const l=this.pool(this.sparkMeshes,e.sparks.length,()=>new Ke(this.track(new Fi(.09,0)),this.track(new Bt({color:16777215,transparent:!0,blending:Ui,depthWrite:!1}))));e.sparks.forEach((c,h)=>{const d=l[h];d.position.set(c.pos.x,c.pos.y,c.pos.z),d.scale.setScalar(1+c.age*6);const u=d.material;u.color.set(c.color),u.opacity=1-c.age/.25})}buildViewGun(e){const t=this.kit.model(e);t.visible=!1,t.traverse(c=>{c.name&&(c.userData.base=c.position.clone())});const n=t.getObjectByName("heat");n&&n.traverse(c=>{c instanceof Ke&&(c.material=this.viewHeat)});const i=this.std(2369325,{roughness:.9,metalness:.05}),r=this.viewSleeve,a=this.viewCuff,o=(c,h,d,u)=>{const f=new Ke(this.track(new $a(...d,2,.012)),i);f.position.copy(u),t.add(f);const g=.55,x=new Ke(this.track(new kt(.036,.042,g,14)),r);x.quaternion.setFromUnitVectors(new L(0,1,0),h.clone().normalize()),x.position.copy(c).addScaledVector(h.clone().normalize(),g/2),t.add(x);const m=new Ke(this.track(new kt(.039,.039,.035,14)),a);m.quaternion.copy(x.quaternion),m.position.copy(c).addScaledVector(h.clone().normalize(),.03),t.add(m)};o(new L(.01,-.07,.035),new L(.12,-.55,1),[.05,.085,.1],new L(0,-.035,0));const l=t.getObjectByName("fore").position;return o(new L(l.x-.02,l.y-.04,l.z+.04),new L(-.5,-.55,1),[.06,.05,.1],new L(l.x,l.y-.012,l.z)),this.gunScene.add(t),t}drawGun(e,t){const n=e.weapon,i=this.viewGuns[n];this.shownWeapon!==n&&(this.shownWeapon=n,this.switchAnim=1),this.switchAnim=Math.max(0,this.switchAnim-t*5),this.kick=Math.max(0,this.kick-t*7),e.muzzle>.06&&(this.kick=n===Vt||n===nn?.35:1),this.viewCuff.color.set(e.color||"#ff6b3d");const r=Math.hypot(e.body.vel.x,e.body.vel.z),a=e.body.onGround?Math.min(1,r/8):.2,o=e.aim*e.aim*(3-2*e.aim);this.viewGuns.forEach((R,I)=>R.visible=I===n);const[l,c,h]=HM[n],d=i.getObjectByName("sight").position,u=e.reloading?1-e.reloadLeft():0,f=Math.sin(u*Math.PI),g=Math.cos(this.bob)*.01*a*(1-o),x=Math.abs(Math.sin(this.bob))*.01*a*(1-o);i.position.set(l+(-d.x-l)*o+g-this.slideTilt*.04,c+(-d.y-c)*o+x-this.switchAnim*.25-this.slideTilt*.05-f*.05,h+(-d.z-h)*o+this.kick*Uu[n][0]),i.rotation.set(this.kick*Uu[n][1]+f*.12,-.05*(1-o)+f*.18,this.slideTilt*.35-e.body.lean*.12*(1-o)+f*.35),i.visible=!(n===_n&&e.aim>.85);const m=R=>{const I=i.getObjectByName(R);return I&&I.position.copy(I.userData.base),I},p=m("mag");if(p){const R=u<.15?0:u<.45?(u-.15)/.3:u<.6?1:u<.85?1-(u-.6)/.25:0;p.position.y-=R*.25,p.visible=R<.97}const M=e.shotAge(),b=m("bolt");if(b){const R=M/(bt[_n].interval*.85),I=R<.1||R>1?0:R<.25?(R-.1)/.15:R<.8?1:(1-R)/.2,F=R<.25||R>.8?0:R<.5?(R-.25)/.25:1-(R-.5)/.3;b.rotation.z=I*1.1,b.position.z+=F*.075}const _=m("pump");if(_){const R=M/bt[zi].interval,I=R<.25||R>.65?0:R<.45?(R-.25)/.2:1-(R-.45)/.2;_.position.z+=I*.09}const S=Math.min(1,e.heat),E=e.overheated?.6+.4*Math.sin(this.time*25):1;this.viewHeat.emissive.setRGB(.25+S*.75,.82-S*.6,1-S*.95),this.viewHeat.emissiveIntensity=(1.4+S*2.2)*E,i.updateMatrixWorld(!0);const C=i.getObjectByName("muzzle").getWorldPosition(new L);this.viewFlash.visible=e.muzzle>0&&i.visible,this.viewFlash.position.copy(C),this.viewFlash.rotation.z=this.time*40;const v=VM[n];this.viewFlash.scale.set(v,v,v*1.8);const T=60-o*(n===nn?10:0);Math.abs(this.gunCamera.fov-T)>.01&&(this.gunCamera.fov=T,this.gunCamera.updateProjectionMatrix()),this.renderer.clearDepth(),this.renderer.render(this.gunScene,this.gunCamera)}project(e){const t=new L(e.x,e.y,e.z).project(this.camera);return{x:(t.x+1)/2*this.width,y:(1-t.y)/2*this.height,behind:t.z>1}}dispose(){for(const e of this.avatars.values())this.scene.remove(e.group);for(const e of this.disposables)e.dispose();this.renderer.dispose()}}const YM=new Set(["blaster","shotgun","auto","rifle","rocket","boom"]);class KM{ctx=null;master=null;noise=null;reverb=null;volume=.7;muted=!1;async unlock(){if(!this.ctx){try{this.ctx=new AudioContext}catch{return}this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.applyVolume();const e=this.ctx.createBuffer(1,this.ctx.sampleRate,this.ctx.sampleRate),t=e.getChannelData(0);for(let r=0;r<t.length;r++)t[r]=Math.random()*2-1;this.noise=e;const n=this.ctx.sampleRate,i=this.ctx.createBuffer(2,n*2.2,n);for(let r=0;r<2;r++){const a=i.getChannelData(r);for(let o=0;o<a.length;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/a.length,3.2)*(o<n*.012?o/(n*.012):1)}this.reverb=this.ctx.createConvolver(),this.reverb.buffer=i,this.reverb.connect(this.master)}this.ctx.state==="suspended"&&await this.ctx.resume().catch(()=>{})}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.applyVolume()}setMuted(e){this.muted=e,this.applyVolume()}applyVolume(){this.master&&(this.master.gain.value=this.muted?0:this.volume*.8)}play(e,t,n){const i=this.ctx,r=this.master;if(!i||!r||i.state!=="running")return;let a=1,o=0;if(t&&n){const f=t.x-n.pos.x,g=t.z-n.pos.z,x=t.y-n.pos.y,m=Math.hypot(f,x,g);if(a=1/(1+m*.09),a<.03)return;const p=f*Math.cos(n.yaw)-g*Math.sin(n.yaw);o=Math.max(-.85,Math.min(.85,p/(m||1)))}const l=i.createGain();l.gain.value=a;const c=i.createStereoPanner();if(c.pan.value=o,l.connect(c).connect(r),this.reverb){const f=n?.pos.y??0,g=f<3?.32:f<8?.2:.09,x=i.createGain();x.gain.value=g*(YM.has(e)?1:.35),l.connect(x).connect(this.reverb)}const h=i.currentTime,d=(f,g,x,m,p,M=0)=>{const b=i.createOscillator(),_=i.createGain();b.type=f,b.frequency.setValueAtTime(g,h+M),b.frequency.exponentialRampToValueAtTime(Math.max(20,x),h+M+m),_.gain.setValueAtTime(p,h+M),_.gain.exponentialRampToValueAtTime(.001,h+M+m),b.connect(_).connect(l),b.start(h+M),b.stop(h+M+m+.02)},u=(f,g,x,m=1,p="lowpass",M=0)=>{const b=i.createBufferSource(),_=i.createBiquadFilter(),S=i.createGain();b.buffer=this.noise,_.type=p,_.frequency.value=x,_.Q.value=m,S.gain.setValueAtTime(g,h+M),S.gain.exponentialRampToValueAtTime(.001,h+M+f),b.connect(_).connect(S).connect(l),b.start(h+M,Math.random()*.5),b.stop(h+M+f+.02)};switch(e){case"blaster":d("square",1300,380,.07,.12),u(.05,.12,4e3,1,"highpass"),d("sine",190,70,.06,.18);break;case"shotgun":u(.03,.9,6e3,1,"highpass"),u(.35,.9,1400),d("sine",110,40,.25,.8),u(.07,.3,2800,4,"bandpass",.45),d("square",420,300,.03,.07,.47),u(.06,.3,2400,4,"bandpass",.62),d("square",300,380,.03,.07,.64);break;case"auto":u(.025,.8,5e3,1,"highpass"),u(.12,.65,1800),d("sine",150,50,.1,.55),d("square",95,60,.04,.1);break;case"rifle":u(.03,1.1,7e3,1,"highpass"),u(.45,1,1100),d("sine",85,28,.45,1),u(.9,.22,600,1,"lowpass",.06);break;case"rocket":u(.03,.5,4e3,1,"highpass"),u(.5,.35,900,2,"bandpass"),d("sawtooth",220,90,.35,.12),d("sine",70,40,.2,.4);break;case"boom":u(.05,.8,3e3,1,"highpass"),u(.9,1,500),d("sine",90,28,.7,1),u(.3,.4,2500,1,"bandpass"),u(1.4,.25,250,1,"lowpass",.1);break;case"reload":d("square",900,700,.02,.1),u(.05,.25,2500,3,"bandpass",.3),d("square",500,420,.03,.12,.35),u(.05,.3,2200,3,"bandpass",1.2),d("square",650,520,.03,.14,1.25),d("square",1e3,820,.03,.16,1.7);break;case"bolt":u(.06,.25,3e3,3,"bandpass",.35),d("square",520,360,.04,.1,.36),u(.05,.22,2600,3,"bandpass",.62),d("square",700,900,.04,.1,.64);break;case"overheat":u(.9,.35,4200,2,"bandpass"),d("sawtooth",900,280,.45,.08);break;case"headshot":d("triangle",2400,2400,.09,.22),d("sine",1200,1150,.18,.2,.03);break;case"jump":d("sine",260,380,.12,.08);break;case"land":u(.12,.25,300);break;case"slide":u(.7,.32,1100,.8,"bandpass"),u(.5,.18,260),d("sine",90,55,.4,.08);break;case"crouch":u(.09,.1,1800,1.5,"bandpass");break;case"pad":d("sine",180,900,.45,.25),d("triangle",360,1500,.4,.12);break;case"pickup":d("triangle",660,990,.1,.2),d("triangle",990,1320,.12,.15,.08);break;case"mega":for(const[f,g]of[523,659,784,1046].entries())d("triangle",g,g,.18,.18,f*.07);break;case"weapon":u(.06,.3,2500,4,"bandpass"),d("square",300,200,.06,.08,.05);break;case"hit":d("square",1800,1700,.05,.14);break;case"hurt":d("sawtooth",160,70,.18,.25),u(.12,.2,800);break;case"death":d("sawtooth",300,40,.8,.3),u(.6,.3,600);break;case"lava":u(1,.6,700),d("sine",120,30,1,.4);break;case"frag":d("triangle",880,880,.08,.25),d("triangle",1320,1320,.16,.25,.08);break;case"spawn":d("sine",300,900,.35,.15),u(.3,.15,3e3,2,"bandpass");break;case"empty":d("square",220,200,.05,.1);break;case"join":d("triangle",520,780,.15,.12);break;case"sudden":for(let f=0;f<3;f++)d("square",440,440,.12,.18,f*.22);break;case"win":for(const[f,g]of[523,659,784,1046,1318].entries())d("triangle",g,g,.3,.22,f*.12);break;case"lose":for(const[f,g]of[392,349,311,262].entries())d("triangle",g,g*.98,.3,.2,f*.15);break}}dispose(){this.ctx?.close().catch(()=>{}),this.ctx=null}}const $M={mega:"Мега-бонус",rocket:"Ракетница",shotgun:"Дробовик",auto:"Автомат",rifle:"Винтовка",armor:"Броня",health:"Аптечка",shells:"Патроны дробовика",bullets:"Патроны автомата",rounds:"Патроны винтовки",rockets:"Ракеты"},JM={floor:"Настил",wall:"Стена",metal:"Мостки",stair:"Ступень",rail:"Перила",crate:"Ящик",pillar:"Опора"},ZM=[{id:"spire.solid",name:"Блок арены",fields:[{name:"style",label:"Вид",type:"select",default:"floor",options:Nf.map(s=>({value:s,label:JM[s]}))}]},{id:"spire.lava",name:"Лава",fields:[]},{id:"spire.jumppad",name:"Прыжковая площадка",fields:[{name:"tx",label:"Цель X",type:"number",default:0,min:-64,max:64,unit:"м"},{name:"ty",label:"Цель Y",type:"number",default:5,min:-5,max:30,unit:"м"},{name:"tz",label:"Цель Z",type:"number",default:0,min:-64,max:64,unit:"м"}]},{id:"spire.spawn",name:"Точка появления",fields:[{name:"yaw",label:"Направление взгляда",type:"number",default:0,min:-180,max:180,unit:"°"}]},{id:"spire.pickup",name:"Бонус",fields:[{name:"item",label:"Предмет",type:"select",default:"health",options:If.map(s=>({value:s,label:$M[s]}))}]}],Ou=["БЛАСТЕР","ДРОБОВИК","АВТОМАТ","ВИНТОВКА","РАКЕТНИЦА"],Yt=s=>s.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),QM=s=>`${Math.floor(s/60).toString().padStart(2,"0")}:${Math.floor(s%60).toString().padStart(2,"0")}`,jM=s=>`${s}-й`,eb={timeout:"Не удалось соединиться с хостом. Сессия могла закончиться, или сеть (мобильный интернет, корпоративный NAT) блокирует прямое соединение между браузерами. Попробуйте другую сеть или попросите друга создать сессию.",full:"В сессии уже 8 игроков — мест нет.",protocol:"У хоста другая версия игры. Обновите страницу (Ctrl+Shift+R) и попробуйте снова."};async function tb(s){await Xu(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);const e=s.snapshot.manifest,t=s.snapshot.scenes[s.sceneId]||s.snapshot.scenes[e.startScene];s.registry.validate(t,e);const n=Yu(t),i=s.container,r=document.title;document.title=e.name,i.classList.add("spire");const a=s.savePolicy==="persistent",o=N=>qu(e.projectId,N,"player"),l=N=>{if(!a)return null;try{return localStorage.getItem(o(N))}catch{return null}},c=(N,P)=>{if(a)try{localStorage.setItem(o(N),P)}catch{}};i.innerHTML=`<canvas class="s-canvas" tabindex="0" aria-label="Шпиль — арена"></canvas><div class="s-vignette"></div><div class="s-damage"></div>
 <section class="s-menu">
  <header><a class="s-brand" href="https://gadaev-sergey.github.io/shelter-arcade/" target="_blank" rel="noopener">SHELTER <i>/</i> ARCADE</a><span class="s-net" data-net><i></i> Подключение к сети…</span></header>
  <div class="s-hero"><div class="s-eyebrow">СЕТЕВОЙ ШУТЕР · DEATHMATCH · ДО 8 ИГРОКОВ</div><h1>ШПИЛЬ<span>АРЕНА НА ВЫСОТЕ</span></h1>
   <p>Четыре яруса над лавой, прыжковые площадки и один мега-бонус на самой вершине. Каждый сам за себя: побеждает тот, кто первым наберёт лимит фрагов.</p>
   <label class="s-field"><span>Твой ник</span><input data-nick maxlength="16" autocomplete="nickname" spellcheck="false" placeholder="Боец"></label>
   <div class="s-actions"><button class="s-primary" data-action="create">СОЗДАТЬ СЕССИЮ <span>↗</span></button><button class="s-text" data-action="help">Управление и правила</button></div>
  </div>
  <aside class="s-browser" aria-label="Открытые сессии"><div class="s-browser-head"><h2>Открытые сессии</h2><small data-count></small></div><ul class="s-list" data-list></ul>
   <form class="s-join" data-join><label><span>Код или ссылка-приглашение</span><input data-code placeholder="например, K7QX2M" autocomplete="off" spellcheck="false"></label><button class="s-secondary" type="submit">ВОЙТИ</button></form></aside>
  <footer><span><kbd>WASD</kbd> движение</span><span><kbd>ПРОБЕЛ</kbd> прыжок</span><span><kbd>МЫШЬ</kbd> прицел и огонь</span><span><kbd>1–5</kbd> оружие</span><span><kbd>R</kbd> перезарядка</span><span><kbd>ПКМ</kbd> прицеливание</span><span><kbd>TAB</kbd> счёт</span><em>Только компьютер · клавиатура и мышь</em></footer>
 </section>
 <div class="s-hud" hidden>
  <div class="s-top"><div class="s-session"><b data-session></b><small data-invite></small></div><div class="s-clock"><b data-clock>10:00</b><small data-limit></small></div><div class="s-feed" data-feed></div></div>
  <div class="s-scope" data-scope></div><div class="s-cross"><i></i><i></i><i></i><i></i></div><div class="s-hitmark"></div><div class="s-dir" data-dir><i></i></div>
  <div class="s-notes" data-notes aria-live="polite"></div>
  <div class="s-bottom"><div class="s-vitals"><div class="s-hp"><small>ЗДОРОВЬЕ</small><b data-hp>100</b></div><div class="s-ar"><small>БРОНЯ</small><b data-ar>0</b></div></div>
   <div class="s-standing"><b data-place>1-й</b><small data-gap></small><span data-frags></span></div>
   <div class="s-arms"><div class="s-ammo"><small data-wname>БЛАСТЕР</small><b data-ammo>∞</b><small data-reserve></small><div class="s-heat" data-heat><i></i></div></div><div class="s-slots">${Ou.map((N,P)=>`<span data-slot="${P}">${P+1}<em>${N}</em></span>`).join("")}</div></div></div>
  <div class="s-death" data-death hidden></div>
  <div class="s-board" data-board hidden></div>
  <button class="s-click" data-action="lock" hidden>Нажми, чтобы играть</button>
 </div>
 <section class="s-modal" hidden role="dialog" aria-modal="true" aria-labelledby="s-modal-title"><div class="s-panel"></div></section>`;const h=N=>i.querySelector(N),d=h(".s-canvas"),u=new KM;let f;try{f=new qM(d,n)}catch(N){throw i.innerHTML='<div style="padding:40px;color:white;background:#0b0f1c">Для «Шпиля» нужен браузер с WebGL. Включите аппаратное ускорение и перезагрузите страницу.</div>',N}const g=new AbortController,x=(N,P,se)=>N.addEventListener(P,se,{signal:g.signal});let m="menu",p=null,M=null,b=null,_="",S=!1,E=0,C=performance.now(),v=0,T=0,R=!1,I=!1,F=!1,H=new Set,D=Number(l("sensitivity"))||1;u.setVolume(l("volume")===null?.7:Number(l("volume")));const z=h("[data-nick]");z.value=l("nick")||"";const G=()=>ud(z.value);x(z,"change",()=>c("nick",G()));const V=!1;async function ee(){try{M=V?Np():await Ip()}catch(P){throw h("[data-net]").innerHTML='<i class="bad"></i> Сеть недоступна',P}if(S)return;h("[data-net]").innerHTML=`<i class="ok"></i> ${M.kind==="local"?"Локальная сеть (тест)":"В сети · поиск сессий"}`,q();const N=to(location.hash.slice(1));N&&m==="menu"&&ue("invite",N)}function q(){!M||b||(b=new Up(M),b.onChange=Z,Z())}function K(){b?.close(),b=null}function Z(){const N=[...b?.sessions.values()??[]].filter(P=>P.code!==p?.code).sort((P,se)=>se.players-P.players||P.name.localeCompare(se.name));h("[data-count]").textContent=b?N.length?`${N.length} в сети`:"пока пусто":"",h("[data-list]").innerHTML=N.length?N.map(P=>`<li><button data-session-code="${P.code}" ${P.players>=P.max?"disabled":""}><div><strong>${Yt(P.name)}</strong><small>Хост: ${Yt(P.host)} · до ${P.fragLimit} фрагов</small></div><span class="s-meta"><b>${P.players}/${P.max}</b><small>${P.ping===null?"…":P.ping+" мс"}</small></span></button></li>`).join(""):`<li class="s-empty">${b?"Открытых сессий пока нет. Создайте свою — она появится здесь у всех, кто откроет игру.":"Подключаемся к сети…"}</li>`}function Ae(N){return new Rp(n,{send:N})}function Me(N,P,se){if(!M)return;const fe=Fp(),A={name:N.slice(0,40)||`Арена ${G()}`,fragLimit:P,timeLimit:Zc,maxPlayers:mp,closed:se};let y;const k=Ae(B=>y.link.send(B));y=new Bp(M.join(ah(fe)),n,A,fe,G(),{receive:B=>k.receive(B)}),p={client:k,host:y,code:fe,closed:se},y.onRoster=()=>{se||b?.announce(y.info())},y.start(),se||b?.announce(y.info()),Ze()}function qe(N){if(!M)return;let P;const se=Ae(A=>P.link.send(A)),fe={receive:A=>{se.receive(A),A.k==="welcome"&&m==="connecting"&&Ze()}};P=new zp(M.join(ah(N)),G(),fe),p={client:se,guest:P,code:N,closed:!1},m="connecting",ue("connecting",N),P.onFail=A=>{p?.guest===P&&(tt(!1),ue("error",eb[A]))},P.onHostLeft=()=>{p?.guest===P&&(m="ended",rt(),ue("host-left"))}}function Ze(){p&&(m="game",Ue(),history.replaceState(null,"","#"+p.code),h(".s-menu").hidden=!0,h(".s-hud").hidden=!1,i.classList.add("s-playing"),u.unlock(),ze(),de())}function tt(N=!0){p&&(p.host?.close(),p.guest?.close(),p.host&&b?.announce(null)),p=null,m="menu",rt(),H.clear(),R=!1,I=!1,history.replaceState(null,"",location.pathname+location.search),h(".s-menu").hidden=!1,h(".s-hud").hidden=!0,i.classList.remove("s-playing"),Z(),N&&Ue()}const J=(N,P,se=!1,fe="")=>`<button class="${se?"s-primary":"s-secondary"}" data-action="${N}" ${fe}>${P}${se?" <span>↗</span>":""}</button>`;function ne(){return location.origin+location.pathname+location.search+"#"+(p?.code??"")}function ue(N,P=""){_=N,T=performance.now();const se=h(".s-panel");if(h(".s-modal").hidden=!1,se.className="s-panel s-"+N,N==="create"&&(se.innerHTML=`<div class="s-eyebrow">НОВАЯ СЕССИЯ</div><h2 id="s-modal-title">Создать арену</h2>
   <form data-create><label class="s-field"><span>Название</span><input name="name" maxlength="40" value="${Yt("Арена "+G())}"></label>
   <fieldset class="s-limit"><legend>Лимит фрагов</legend>${pp.map(fe=>`<label><input type="radio" name="limit" value="${fe}" ${fe===20?"checked":""}><span>${fe}</span></label>`).join("")}</fieldset>
   <label class="s-check"><input type="checkbox" name="closed"><span><b>Закрытая сессия</b><small>Не показывать в списке — вход только по ссылке-приглашению.</small></span></label>
   <p class="s-note">Матч длится ${Zc/60} минут. Ваш браузер станет хостом: если вы закроете вкладку, сессия закончится для всех.</p>
   <div class="s-row">${J("cancel","Отмена")}<button class="s-primary" type="submit">СОЗДАТЬ <span>↗</span></button></div></form>`),N==="invite"&&(se.innerHTML=`<div class="s-eyebrow">ПРИГЛАШЕНИЕ</div><h2 id="s-modal-title">Войти в сессию ${Yt(P)}?</h2><label class="s-field"><span>Твой ник</span><input data-invite-nick maxlength="16" value="${Yt(z.value)}" placeholder="Боец"></label><div class="s-row">${J("cancel","Не сейчас")}${J("join-invite","ВОЙТИ",!0,`data-code="${P}"`)}</div>`),N==="connecting"&&(se.innerHTML=`<div class="s-eyebrow">СЕССИЯ ${Yt(P)}</div><h2 id="s-modal-title">Соединяемся с хостом…</h2><div class="s-spinner"></div><p>Ищем хоста через сигнальные реле и открываем прямое соединение. Обычно это занимает несколько секунд.</p>${J("abort","Отмена")}`),N==="error"&&(se.innerHTML=`<div class="s-eyebrow">НЕ ПОЛУЧИЛОСЬ</div><h2 id="s-modal-title">Соединение не установлено</h2><p>${Yt(P)}</p>${J("cancel","ПОНЯТНО",!0)}`),N==="host-left"&&(se.innerHTML=`<div class="s-eyebrow">СЕССИЯ ЗАВЕРШЕНА</div><h2 id="s-modal-title">Хост покинул игру</h2><p>Итоговая таблица:</p>${we()}${J("to-menu","В МЕНЮ",!0)}`),N==="pause"){const fe=p;se.innerHTML=`<div class="s-eyebrow">${fe.host?"ВЫ ХОСТ":"ВЫ В СЕССИИ"} · ${Yt(fe.client.options?.name??"")}</div><h2 id="s-modal-title">Меню</h2><p class="s-note">Игра не останавливается — соперники продолжают бой.</p>
   <label class="s-field"><span>Приглашение (код ${fe.code})</span><div class="s-copy"><input readonly value="${Yt(ne())}" data-link><button class="s-secondary" data-action="copy">КОПИРОВАТЬ</button></div></label>
   <label class="s-range"><span>Чувствительность мыши <b data-sens-v>${D.toFixed(2)}</b></span><input type="range" min="0.3" max="3" step="0.05" value="${D}" data-sens></label>
   <label class="s-range"><span>Громкость <b data-vol-v>${Math.round(u.volume*100)}%</b></span><input type="range" min="0" max="1" step="0.05" value="${u.volume}" data-vol></label>
   ${J("resume","ПРОДОЛЖИТЬ",!0)}${J("help","Управление и правила")}${J("leave",fe.host?"Завершить сессию и выйти":"Покинуть сессию")}`}N==="help"&&(se.innerHTML=`<div class="s-eyebrow">ПРАВИЛА АРЕНЫ</div><h2 id="s-modal-title">Каждый сам за себя</h2>
   <div class="s-controls"><span><kbd>W A S D</kbd> Движение</span><span><kbd>ПРОБЕЛ</kbd> Прыжок (можно держать)</span><span><kbd>C</kbd> Присед, на бегу — подкат</span><span><kbd>Q E</kbd> Наклон влево / вправо</span><span><kbd>МЫШЬ</kbd> Прицел</span><span><kbd>ЛКМ</kbd> Огонь</span><span><kbd>1 2 3 / КОЛЕСО</kbd> Оружие</span><span><kbd>TAB</kbd> Таблица счёта</span><span><kbd>ESC</kbd> Меню</span></div>
   <p>За убийство соперника — фраг. Смерть от своей ракеты или в лаве — минус фраг. Первый, кто набрал лимит, побеждает. Через 10 минут побеждает лидер; при ничьей — внезапная смерть до единоличного лидера.</p>
   <p>Бластер бесконечный, но от долгой очереди перегревается. Дробовик, автомат, винтовка и ракетница лежат на арене. Автомат и винтовка перезаряжаются (R) и прицеливаются (ПКМ): у винтовки оптика ×4, без неё и в прыжке она мажет. Очередь автомата уводит вверх и в сторону всегда одинаково — отдачу можно выучить и гасить мышью. Попадание в голову — двойной урон.</p>
   <p> Выстрел ракетой себе под ноги в прыжке — рокет-джамп. Голубые площадки подбрасывают на ярус выше, на вершине ждёт мега-бонус +100 здоровья.</p>
   <p>Подкат даёт рывок и низкий силуэт; прыжок из подката сохраняет скорость, а приземление с зажатым C снова переходит в подкат (рывок — не чаще раза в секунду). Присед в прыжке поджимает ноги — так запрыгивают на высокие ящики. Наклон выглядывает из-за угла, открывая только голову.</p>
   <small>Стрейф-прыжки: держите прыжок, «вбок» и плавно ведите мышь в ту же сторону — скорость растёт.</small>${J("back","ПОНЯТНО",!0)}`),requestAnimationFrame(()=>{S||se.querySelector("input:not([readonly]),button")?.focus()})}function Ue(){_="",h(".s-modal").hidden=!0}function we(){const N=p?.client;return N?`<table class="s-table"><thead><tr><th>#</th><th>Игрок</th><th>Фраги</th><th>Смерти</th></tr></thead><tbody>${N.scores().map((se,fe)=>`<tr class="${se.self?"self":""}"><td>${fe+1}</td><td><i style="background:${se.color}"></i>${Yt(se.name)}${se.id===N.winner?" ★":""}</td><td>${se.frags}</td><td>${se.deaths}</td></tr>`).join("")}</tbody></table>`:""}function ze(){if(!(m!=="game"||_))try{const N=d.requestPointerLock?.();N&&N.catch(()=>{})}catch{}}function rt(){document.pointerLockElement===d&&document.exitPointerLock()}const j=()=>document.pointerLockElement===d;x(i,"click",(N=>{const P=N.target,se=P.closest("button");if(P===d&&m==="game"&&!j()&&!_){u.unlock(),ze();return}if(!se)return;const fe=se.dataset.action;if(se.dataset.sessionCode){c("nick",G()),qe(se.dataset.sessionCode);return}if(fe==="create"){if(c("nick",G()),!M){ue("error","Сеть ещё не готова. Подождите пару секунд.");return}ue("create")}if(fe==="help"&&ue("help"),fe==="back"&&(m==="game"?ue("pause"):Ue()),fe==="cancel"&&Ue(),fe==="abort"&&tt(),fe==="join-invite"){const A=i.querySelector("[data-invite-nick]");A&&(z.value=A.value),c("nick",G()),qe(se.dataset.code)}if(fe==="resume"&&(Ue(),ze()),(fe==="leave"||fe==="to-menu")&&tt(),fe==="lock"&&(u.unlock(),ze()),fe==="copy"){const A=i.querySelector("[data-link]");A.select(),navigator.clipboard?.writeText(A.value).then(()=>{se.textContent="СКОПИРОВАНО"},()=>{})}})),x(i,"submit",(N=>{N.preventDefault();const P=N.target;if(P.matches("[data-create]")){const se=new FormData(P);Me(String(se.get("name")||""),Number(se.get("limit"))||20,se.get("closed")==="on")}if(P.matches("[data-join]")){const se=to(h("[data-code]").value);if(!se){h("[data-code]").setCustomValidity("Нужен код из 6 символов или ссылка-приглашение"),P.reportValidity();return}c("nick",G()),qe(se)}})),x(i,"input",(N=>{const P=N.target;P.matches("[data-code]")&&P.setCustomValidity(""),P.matches("[data-sens]")&&(D=Number(P.value),c("sensitivity",String(D)),h("[data-sens-v]").textContent=D.toFixed(2)),P.matches("[data-vol]")&&(u.setVolume(Number(P.value)),c("volume",String(u.volume)),h("[data-vol-v]").textContent=Math.round(u.volume*100)+"%",u.unlock(),u.play("pickup"))})),x(document,"pointerlockchange",()=>{j()?_==="pause"&&Ue():(R=!1,I=!1,H.clear(),m==="game"&&!_&&ue("pause"))}),x(document,"mousemove",(N=>{if(j()&&p){const P=.0022*D/p.client.zoom();p.client.look(N.movementX*P,N.movementY*P)}})),x(d,"mousedown",(N=>{j()&&(N.button===0&&(R=!0),N.button===2&&(I=!0))})),x(window,"mouseup",(N=>{N.button===0&&(R=!1),N.button===2&&(I=!1)})),x(d,"wheel",(N=>{j()&&p&&(N.preventDefault(),p.client.cycleWeapon(N.deltaY>0?1:-1))})),x(d,"contextmenu",N=>N.preventDefault());const ae=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyC","KeyQ","KeyE","KeyR","Digit1","Digit2","Digit3","Digit4","Digit5","Tab"];x(window,"keydown",(N=>{if(!(m!=="game"||N.metaKey||N.ctrlKey||N.altKey)){if(N.code==="Tab"){N.preventDefault(),F=!0;return}if(N.code==="Escape"&&document.pointerLockElement!==d){_==="pause"&&performance.now()-T>300?(Ue(),ze()):_||ue("pause");return}!j()||!ae.includes(N.code)||(N.preventDefault(),H.add(N.code),N.code.startsWith("Digit")&&p&&p.client.selectWeapon(Number(N.code.slice(-1))-1),N.code==="KeyR"&&!N.repeat&&p?.client.reload())}})),x(window,"keyup",(N=>{H.delete(N.code),N.code==="Tab"&&(F=!1)})),x(window,"blur",()=>{H.clear(),R=!1,I=!1,F=!1}),x(window,"hashchange",()=>{const N=to(location.hash.slice(1));N&&M&&m==="menu"&&N!==p?.code&&ue("invite",N)});const oe=()=>{const N=(...P)=>P.some(se=>H.has(se));return{forward:Number(N("KeyW","ArrowUp"))-Number(N("KeyS","ArrowDown")),strafe:Number(N("KeyD","ArrowRight"))-Number(N("KeyA","ArrowLeft")),jump:N("Space"),fire:R,crouch:N("KeyC"),lean:Number(N("KeyE"))-Number(N("KeyQ")),aim:I}};function le(N,P){const se=fe=>`<b style="color:${P.colorOf(fe)}">${Yt(P.nameOf(fe))}</b>`;return N.killer===N.victim?`<div>${se(N.victim)} <i>${N.w==="lava"?"сгорел в лаве":N.w==="fall"?"разбился":"подорвал себя"}</i></div>`:`<div>${se(N.killer)} <i>[${typeof N.w=="number"?bt[N.w].name.toLowerCase():"?"}${N.head?" · в голову":""}]</i> ${se(N.victim)}</div>`}function de(){const N=p?.client;if(!N||m==="menu")return;h("[data-session]").textContent=N.options?.name??"",h("[data-invite]").textContent=`код ${p.code}${p.host?" · вы хост":N.rtt?` · пинг ${Math.round(N.rtt*1e3)} мс`:""} · ${N.roster.size}/${N.options?.maxPlayers??8}`,h("[data-clock]").textContent=N.phase==="sudden"?"ВНЕЗАПНАЯ СМЕРТЬ":N.phase==="over"?"МАТЧ ОКОНЧЕН":QM(N.left),h("[data-limit]").textContent=`до ${N.options?.fragLimit??20} фрагов`,h(".s-clock").classList.toggle("alert",N.phase==="sudden"||N.phase==="playing"&&N.left<60),h("[data-hp]").textContent=String(Math.max(0,N.health)),h("[data-ar]").textContent=String(N.armor),h(".s-hp").classList.toggle("low",N.health<=30),h(".s-hp").classList.toggle("mega",N.health>100);const P=N.standing();h("[data-place]").textContent=jM(P.place),h("[data-gap]").textContent=`из ${P.total}${P.total>1?` · ${P.gap>0?"+":""}${P.gap}`:""}`,h("[data-frags]").textContent=`${N.frags} фраг.`;const se=N.weapon,fe=ti(se);h("[data-wname]").textContent=N.reloading?"ПЕРЕЗАРЯДКА":N.overheated?"ПЕРЕГРЕВ":Ou[se],h("[data-ammo]").textContent=se===Vt?"∞":String(Math.max(0,fe?N.mag[se]:N.ammo[se])),h("[data-reserve]").textContent=fe?`/ ${Math.max(0,N.ammo[se])}`:"",h(".s-ammo").classList.toggle("low",fe&&N.mag[se]<=Math.ceil(bt[se].mag/5)||!fe&&se!==Vt&&N.ammo[se]<=2),i.querySelectorAll("[data-slot]").forEach(B=>{const $=Number(B.dataset.slot);B.classList.toggle("owned",N.owned[$]),B.classList.toggle("selected",N.weapon===$)}),h("[data-feed]").innerHTML=N.feed.map(B=>le(B,N)).join(""),h("[data-notes]").innerHTML=N.notes.map(B=>`<div style="opacity:${Math.min(1,(2.5-B.age)*2)}">${Yt(B.text)}</div>`).join("");const A=h("[data-death]");if(!N.alive&&N.connected&&N.phase!=="over"&&N.killedBy){const B=N.killedBy,$=B.killer===N.id;A.hidden=!1,A.innerHTML=`<small>${$?"САМОУБИЙСТВО · −1 ФРАГ":"ТЕБЯ УБИЛ"}</small><strong style="color:${$?"#ff8a5b":N.colorOf(B.killer)}">${$?B.w==="lava"?"Лава":B.w==="fall"?"Падение":"Своя ракета":Yt(N.nameOf(B.killer))}</strong>${!$&&typeof B.w=="number"?`<em>${bt[B.w].name}</em>`:""}<span>Возвращение через ${N.respawnIn().toFixed(1)}</span>`}else A.hidden=!0;const y=h("[data-board]"),k=N.phase==="over";y.hidden=!(F||k),y.hidden||(y.innerHTML=`${k?`<div class="s-eyebrow">${N.winner===N.id?"ТЫ ПОБЕДИЛ":"ПОБЕДИТЕЛЬ"}</div><h2>${Yt(N.nameOf(N.winner??""))}</h2><p>Новый матч через ${Math.ceil(N.restart)} с</p>`:`<div class="s-eyebrow">${Yt(N.options?.name??"")} · ДО ${N.options?.fragLimit} ФРАГОВ</div>`}${we()}`),h('[data-action="lock"]').hidden=j()||!!_||m!=="game"}function Ge(){const N=p?.client;if(!N)return;const P=h(".s-hitmark");P.classList.toggle("on",N.hitFlash>0),P.classList.toggle("head",N.headFlash>0);const se=N.weapon===_n?N.aim:0,fe=h(".s-cross"),A=3+Math.tan(N.spread())/Math.tan(f.camera.fov*Math.PI/360)*f.height/2;fe.style.setProperty("--gap",`${Math.min(60,A).toFixed(1)}px`),fe.style.opacity=String(N.weapon===nn?1-N.aim:1-se),h("[data-scope]").style.opacity=String(se>.85?1:0);const y=h("[data-heat]");y.hidden=N.weapon!==Vt,y.style.setProperty("--heat",String(Math.min(1,N.heat))),y.classList.toggle("hot",N.overheated),h(".s-damage").style.opacity=String(N.damageFlash);const k=h("[data-dir]");if(N.damageFlash>.05&&N.damageFrom){const B=N.damageFrom.x-N.body.pos.x,$=N.damageFrom.z-N.body.pos.z,he=Math.atan2(B,-$)+N.yaw;k.style.opacity=String(N.damageFlash),k.style.transform=`translate(-50%,-50%) rotate(${he}rad)`}else k.style.opacity="0"}function Fe(N){if(S)return;const P=Math.min(.05,(N-C)/1e3);C=N;const se=p?.client;if(se&&(m==="game"||m==="ended")){const fe=m==="game"&&j()&&!_;se.update(P,fe?oe():{forward:0,strafe:0,jump:!1,fire:!1});const A={pos:se.eye,yaw:se.yaw};for(const y of se.sounds)u.play(y.name,y.pos,A);se.sounds.length=0,f.draw(se,P),Ge(),v+=P,v>.08&&(v=0,de())}E=requestAnimationFrame(Fe)}const Ve=new ResizeObserver(()=>f.resize());return Ve.observe(d),Z(),ee().catch(()=>{}),E=requestAnimationFrame(Fe),{pause(){},dispose(){S=!0,cancelAnimationFrame(E),g.abort(),Ve.disconnect(),rt(),tt(!1),K(),u.dispose(),f.dispose(),i.replaceChildren(),i.classList.remove("spire","s-playing"),document.title=r},diagnostics:()=>({game:"spire",mode:m,code:p?.code??null,host:!!p?.host,players:p?.client.roster.size??0,phase:p?.client.phase??null})}}const nb={id:"spire",sdk:1,components:ZM,validateScene(s){Yu(s)},createSession:tb};class ib{components=new Map;modules=new Map;register(e){if(e.sdk!==1||this.modules.has(e.id))throw new Error("Несовместимый или повторяющийся модуль: "+e.id);this.modules.set(e.id,e);for(const t of e.components||[]){if(this.components.has(t.id))throw new Error("Повторяющийся компонент "+t.id);this.components.set(t.id,t)}}validate(e,t){for(const n of this.modules.values())n.validateScene?.(e,t);for(const n of e.nodes)for(const i of n.components||[]){const r=this.components.get(i.type);if(!r)throw new Error("Отсутствует компонент «"+i.type+"» у «"+n.name+"».");for(const a of r.fields){const o=i.values[a.name];if(a.type==="number"&&(typeof o!="number"||!Number.isFinite(o)||o<(a.min??-1/0)||o>(a.max??1/0)))throw new Error(n.name+": проверьте «"+a.label+"».");if(a.type==="boolean"&&typeof o!="boolean")throw new Error("Некорректный переключатель "+a.label);if(a.type==="object"&&o&&!e.nodes.some(l=>l.id===o)||a.type==="scene"&&!t.scenes.some(l=>l.id===o)||a.type==="asset"&&o&&!t.assets.some(l=>l.id===o)||a.type==="select"&&!a.options?.some(l=>l.value===o))throw new Error(n.name+": не найдена связь «"+a.label+"».")}}}}function sb(s){const e=new pf({canvas:s,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(devicePixelRatio||1,1.65)),e.outputColorSpace=Mt,e.toneMapping=Ha,e.toneMappingExposure=1.3,e.shadowMap.enabled=!0,e.shadowMap.type=lr,e}function Lr(s){const e=new Set,t=new Set,n=new Set;s.traverse(i=>{if(i instanceof Ke||i instanceof fc){e.add(i.geometry);for(const r of Array.isArray(i.material)?i.material:[i.material]){t.add(r);for(const a of Object.values(r))a instanceof It&&n.add(a)}}(i instanceof Wi||i instanceof vs||i instanceof Ts)&&i.shadow.dispose()});for(const i of e)i.dispose();for(const i of t)i.dispose();for(const i of n)i.dispose()}class rb{constructor(e){this.canvas=e,this.gl=sb(e)}canvas;gl;scene=new Sr;cutScene=new Sr;camera=new Ns(-8,8,5,-5,.1,100);width=1;height=1;angle=0;externalCamera=!1;editorMode=!1;beforeRender;afterRender;cameraSettings=Aa();center=new L;configureCamera(e=Wl){this.cameraSettings=Aa(e);const t=this.camera;e.projection==="perspective"!=t instanceof Lt&&(this.camera=e.projection==="perspective"?new Lt(e.fov,1,.1,100):new Ns(-8,8,5,-5,.1,100),this.camera.position.copy(t.position),this.camera.quaternion.copy(t.quaternion),this.camera.up.copy(t.up),this.camera.zoom=t.zoom),this.camera instanceof Lt&&(this.camera.fov=e.fov),this.camera.near=this.cameraSettings.near,this.camera.far=this.cameraSettings.far,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}resize(){const e=this.canvas.getBoundingClientRect();this.width=Math.max(1,e.width),this.height=Math.max(1,e.height),this.gl.setSize(this.width,this.height,!1)}updateCamera(e){const t=this.cameraSettings,n=this.width/this.height;this.center.lerp(new L(t.centerX,t.centerY,0),t.smoothing?1-Math.exp(-e*t.smoothing):1),this.camera instanceof Lt?this.camera.aspect=n:(this.camera.left=-t.height*n/2,this.camera.right=t.height*n/2,this.camera.top=t.height/2,this.camera.bottom=-t.height/2),this.camera.zoom=1,this.camera.position.set(this.center.x,this.center.y,t.distance),this.camera.up.set(0,1,0),this.camera.rotation.set(0,0,0),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}project(e){const t=e.clone().project(this.camera);return{x:(t.x+1)*this.width/2,y:(1-t.y)*this.height/2}}render(e){this.externalCamera||this.updateCamera(e),this.beforeRender?.(),this.gl.render(this.scene,this.camera),this.afterRender?.()}dispose(){Lr(this.scene),Lr(this.cutScene),this.gl.dispose(),this.gl.forceContextLoss()}}class ab{constructor(e){this.renderer=e,e.scene.add(this.root)}renderer;sources=new Map;instances=new Map;root=new yt;prototypes=new Map;textures=new Map;prefabs=new Map;validators=[];initial=Bc();document=Bc();revision=0;validate(e){const t=Lf(e);for(const n of this.validators)n(t);for(const n of t.nodes){if(n.kind==="source"&&!this.sources.has(n.asset))throw new Error("Исходный ресурс недоступен: "+n.name);if(n.kind==="model"&&!this.prototypes.has(n.asset))throw new Error("Модель не загружена: "+n.name)}return t}apply(e){const t=this.validate(e);this.document=t;const n=new Set(t.nodes.map(i=>i.id));for(const[i,r]of this.instances)n.has(i)||(this.disposeInstance(r),this.instances.delete(i));for(const i of this.sources.values())i.wrapper.visible=!1;for(const i of t.nodes){const r=i.kind+":"+(i.asset||"");let a=this.instances.get(i.id);a&&a.key!==r&&(this.disposeInstance(a),this.instances.delete(i.id),a=void 0),a||(a=this.instantiate(i),this.instances.set(i.id,a));const o=a.root;if(o.position.fromArray(i.transform.position),o.rotation.set(...i.transform.rotation.map(Da.degToRad)),o.scale.fromArray(i.transform.scale),o.visible=i.visible,o.name=i.name,o.userData.sceneNode=i.id,o.updateMatrixWorld(!0),this.applySurface(a,i.surface),i.light){const l=o.children.find(c=>c instanceof Ir);l.color.set(i.light.color),l.intensity=i.light.intensity,l.distance=i.light.range,l.castShadow=i.light.shadows&&i.light.intensity>0,l instanceof vs&&(l.angle=Da.degToRad(i.light.angle),l.penumbra=i.light.penumbra)}}this.renderer.gl.toneMappingExposure=t.environment.exposure,this.renderer.cameraSettings=Aa(t.camera),(!this.renderer.editorMode||!this.renderer.externalCamera)&&this.renderer.configureCamera(t.camera),this.revision++}instantiate(e){let t=new yt,n=!1;if(e.kind==="source"){const r=this.sources.get(e.asset);e.id===e.asset?t=r.wrapper:(t.add(r.prototype.clone(!0)),(r.cut?this.renderer.cutScene:this.root).add(t))}else if(this.root.add(t),e.kind==="model")t.add(this.prototypes.get(e.asset).clone(!0));else if(e.kind==="prefab"){n=!0;const r=this.prefabs.get(e.asset);if(!r)throw new Error("Шаблон не зарегистрирован: "+e.asset);t.add(r())}else if(e.kind.endsWith("-light")){const r=e.kind==="spot-light"?new vs:new Wi;r.decay=2,r.shadow.mapSize.set(512,512),r.shadow.camera.near=.05,r.shadow.normalBias=.012,t.add(r),r instanceof vs&&(r.target.position.set(0,0,-1),t.add(r.target))}else if(e.kind==="camera")t.userData.camera=!0;else{n=!0;const r=e.kind==="sphere"?new ii(.5,24,16):e.kind==="plane"?new Wt(1,1,.04):new Wt(1,1,1),a=new Ke(r,new xn({color:9212561,roughness:.9}));a.position.y=.5,a.castShadow=a.receiveShadow=!0,t.add(a)}const i=new Map;return t.traverse(r=>{r instanceof Ke&&i.set(r,r.material)}),{root:t,key:e.kind+":"+(e.asset||""),surfaceKey:"",ownedMaterials:new Set,ownedTextures:new Set,originals:i,ownsGeometry:n,ownsMaterials:e.kind!=="prefab"}}applySurface(e,t){const n=t&&this.document.textures.find(a=>a.id===t.texture),i=JSON.stringify(t||null)+(n?.data||"");if(i===e.surfaceKey)return;e.surfaceKey=i;for(const a of e.ownedMaterials)a.dispose();for(const a of e.ownedTextures)a.dispose();e.ownedMaterials.clear(),e.ownedTextures.clear();let r;n&&(r=new Ba().load(n.data),r.colorSpace=Mt,r.wrapS=r.wrapT=sn,r.repeat.setScalar(t.repeat),e.ownedTextures.add(r));for(const[a,o]of e.originals){if(!t){a.material=o;continue}const l=(Array.isArray(o)?o:[o]).map(c=>{const h=c instanceof xn?c.clone():new xn({side:c.side});h.color.set(t.color),h.roughness=t.roughness,h.metalness=t.metalness;const d=t.texture==="original"?c.map:this.textures.get(t.texture);if(h.map=null,r?h.map=r:d&&(h.map=d.clone(),h.map.wrapS=h.map.wrapT=sn,h.map.repeat.setScalar(t.repeat),h.map.needsUpdate=!0,e.ownedTextures.add(h.map)),t.texture!=="original")for(const[u,f]of[["normal","normalMap"],["roughness","roughnessMap"],["metalness","metalnessMap"],["ao","aoMap"]]){const g=this.textures.get(t.texture+":"+u);if(h[f]=null,g){const x=g.clone();x.repeat.setScalar(t.repeat),x.needsUpdate=!0,h[f]=x,e.ownedTextures.add(x)}}return e.ownedMaterials.add(h),h});a.material=Array.isArray(o)?l:l[0]}}beforeRender(e){const t=new Set(this.document.nodes.map(n=>n.id));for(const[n,i]of this.sources)t.has(n)||(i.wrapper.visible=!1);for(const n of this.document.nodes)this.instances.get(n.id).root.visible=n.visible}disposeInstance(e){for(const[t,n]of e.originals)t.material=n;for(const t of e.ownedMaterials)t.dispose();for(const t of e.ownedTextures)t.dispose();if([...this.sources.values()].some(t=>t.wrapper===e.root)){e.root.visible=!1;return}e.root.removeFromParent(),e.root.traverse(t=>{if(e.ownsGeometry&&t instanceof Ke&&(t.geometry.dispose(),e.ownsMaterials))for(const n of Array.isArray(t.material)?t.material:[t.material])n.dispose();(t instanceof Wi||t instanceof vs)&&t.shadow.dispose()})}dispose(){for(const e of this.instances.values())this.disposeInstance(e);this.instances.clear(),this.root.removeFromParent()}}function ob(s){const e=new Map,t=new Map,n=s.clone();return mf(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function mf(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)mf(s.children[n],e.children[n],t)}class lb extends ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new ku(t,nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ku(t,nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Tb(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=pr.extractUrlBase(e);a=pr.resolveURL(c,this.path)}else a=pr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new sf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===gf){try{a[nt.KHR_BINARY_GLTF]=new Ab(e)}catch(d){i&&i(d);return}r=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new zb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case nt.KHR_MATERIALS_UNLIT:a[d]=new ub;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Rb(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[d]=new Cb;break;case nt.KHR_MESH_QUANTIZATION:a[d]=new Pb;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function cb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function At(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hb{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new He(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],rn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ts(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Wi(h),c.distance=d;break;case"spot":c=new vs(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Un(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class ub{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){const i=[];e.color=new He(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(i)}}class db{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class fb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return At(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(r,r)}return Promise.all(i)}}class pb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class mb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return At(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class gb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return At(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],rn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class xb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return At(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class _b{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return At(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(r[0],r[1],r[2],rn),Promise.all(i)}}class vb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){return At(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class yb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return At(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(r[0],r[1],r[2],rn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mt)),Promise.all(i)}}class Mb{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){return At(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class bb{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return At(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){const n=At(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Sb{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class wb{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Eb{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class ku{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class Tb{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==hn.TRIANGLES&&c.mode!==hn.TRIANGLE_STRIP&&c.mode!==hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const g of d){const x=new Je,m=new L,p=new hi,M=new L(1,1,1),b=new cc(g.geometry,g.material,u);for(let S=0;S<u;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&M.fromBufferAttribute(l.SCALE,S),b.setMatrixAt(S,x.compose(m,p,M));let _=null;for(const S in l)if(S==="_COLOR_0"){const E=l[S];b.instanceColor=new Ua(E.array,E.itemSize,E.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(_===null){const C=b.geometry;_=new Et,_.name=C.name;for(const v in C.attributes)_.setAttribute(v,C.attributes[v]);for(const v in C.morphAttributes)_.morphAttributes[v]=C.morphAttributes[v];C.index!==null&&_.setIndex(C.index),_.morphTargetsRelative=C.morphTargetsRelative;for(const v of C.groups)_.addGroup(v.start,v.count,v.materialIndex);C.boundingBox!==null&&(_.boundingBox=C.boundingBox.clone()),C.boundingSphere!==null&&(_.boundingSphere=C.boundingSphere.clone()),_.drawRange.start=C.drawRange.start,_.drawRange.count=C.drawRange.count,_.userData=Object.assign({},C.userData),b.geometry=_}const E=l[S];_.setAttribute(S,new Ua(E.array,E.itemSize,E.normalized))}mt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const gf="glTF",tr=12,Bu={JSON:1313821514,BIN:5130562};class Ab{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,tr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-tr,r=new DataView(e,tr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Bu.JSON){const c=new Uint8Array(e,tr+a,o);this.content=n.decode(c)}else if(l===Bu.BIN){const c=tr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Rb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=Hl[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=Hl[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=As[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}d(f)},o,c,rn,u)})})}}class Cb{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Pb{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}}class xf extends Us{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*c,x=g-c,m=-2*f+3*u,p=f-u,M=1-m,b=p-u+d;for(let _=0;_!==o;_++){const S=a[x+_+o],E=a[x+_+l]*h,C=a[g+_+o],v=a[g+_]*h;r[_]=M*S+b*E+m*C+p*v}return r}}const Lb=new hi;class Ib extends xf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Lb.fromArray(r).normalize().toArray(r),r}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},As={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zu={9728:Nt,9729:Dt,9984:Sd,9985:va,9986:ir,9987:ni},Gu={33071:kn,33648:Ra,10497:sn},Vo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Nb={CUBICSPLINE:void 0,LINEAR:yr,STEP:vr},Wo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Db(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new xn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),s.DefaultMaterial}function Ni(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Un(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ub(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function Fb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ob(s){let e;const t=s.extensions&&s.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xo(t.attributes):e=s.indices+":"+Xo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Xo(s.targets[n]);return e}function Xo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Vl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Bb=new Je;class zb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Ba(this.options.manager):this.textureLoader=new Eg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ni(r,o,i),Un(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(pr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Vo[i.type],o=As[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Jt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Vo[i.type],c=As[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(f&&f!==d){const p=Math.floor(u/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(M);b||(x=new c(o,p*f,i.count*f/h),b=new kd(x,f/h),t.cache.add(M,b)),m=new wr(b,l,u%f/h,g)}else o===null?x=new c(i.count*l):x=new c(o,u,i.count*l),m=new Jt(x,l,g);if(i.sparse!==void 0){const p=Vo.SCALAR,M=As[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,S=new M(a[1],b,i.sparse.count*p),E=new c(a[2],_,i.sparse.count*l);o!==null&&(m=new Jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,v=S.length;C<v;C++){const T=S[C];if(m.setX(T,E[C*l]),l>=2&&m.setY(T,E[C*l+1]),l>=3&&m.setZ(T,E[C*l+2]),l>=4&&m.setW(T,E[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=zu[u.magFilter]||Dt,h.minFilter=zu[u.minFilter]||ni,h.wrapS=Gu[u.wrapS]||sn,h.wrapT=Gu[u.wrapT]||sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==Dt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(x){const m=new It(x);m.needsUpdate=!0,u(m)}),t.load(pr.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Un(d,a),d.userData.mimeType=a.mimeType||kb(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new dc,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Hd,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return xn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){const d=i[nt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],rn),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Mt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=En);const h=r.alphaMode||Wo.OPAQUE;if(h===Wo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Wo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Bt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Bt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Bt){const d=r.emissiveFactor;o.emissive=new He().setRGB(d[0],d[1],d[2],rn)}return r.emissiveTexture!==void 0&&a!==Bt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),Un(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ni(i,d,r),d})}createUniqueName(e){const t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Hu(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Ob(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Hu(new Et,c,t),c.mode===hn.TRIANGLE_STRIP?u=u.then(f=>Du(f,Pd)):c.mode===hn.TRIANGLE_FAN&&(u=u.then(f=>Du(f,Il))),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Db(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const x=h[f],m=a[f];let p;const M=c[f];if(m.mode===hn.TRIANGLES||m.mode===hn.TRIANGLE_STRIP||m.mode===hn.TRIANGLE_FAN||m.mode===void 0){const b=r.isSkinnedMesh===!0,_=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");b&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=b&&_?new d0(x,M):new Ke(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===hn.LINES)p=new g0(x,M);else if(m.mode===hn.LINE_STRIP)p=new uc(x,M);else if(m.mode===hn.LINE_LOOP)p=new x0(x,M);else if(m.mode===hn.POINTS)p=new fc(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Fb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Un(p,r),m.extensions&&Ni(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Ni(i,d[0],r),d[0];const u=new yt;r.extensions&&Ni(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Da.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ns(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Un(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Je;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lc(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],x=d[3],m=d[4],p=[];for(let b=0,_=u.length;b<_;b++){const S=u[b],E=f[b],C=g[b],v=x[b],T=m[b];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const R=n._createAnimationTracks(S,E,C,v,T);if(R)for(let I=0;I<R.length;I++)p.push(R[I])}const M=new mg(r,void 0,p);return Un(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Bb)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,g=d[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Gd:c.length>1?h=new yt:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),Un(h,r),r.extensions&&Ni(n,h,r),r.matrix!==void 0){const d=new Je;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new yt;n.name&&(r.name=i.createUniqueName(n.name)),Un(r,n),n.extensions&&Ni(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){const u=l[h];u.parent!==null?r.add(ob(u)):r.add(u)}const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof gn||u instanceof It)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Mi[r.path]===Mi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Mi[r.path]){case Mi.weights:h=Cr;break;case Mi.rotation:h=Pr;break;case Mi.translation:case Mi.scale:h=ka;break;default:n.itemSize===1?h=Cr:h=ka;break}const d=i.interpolation!==void 0?Nb[i.interpolation]:yr,u=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const x=new h(l[f]+"."+Mi[r.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Vl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Pr?Ib:xf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Gb(s,e,t){const n=e.attributes,i=new ui;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const h=Vl(As[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new L,l=new L;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const x=Vl(As[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Wn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Hu(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Hl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return st.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Un(s,e),Gb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ub(s,e.targets,t):s})}class Hb{models=new Map;textures=new Map;async load(e,t,n=i=>{}){let i=0;try{for(const r of e)if(!(this.models.has(r.id)||this.textures.has("asset:"+r.id))){if(r.type==="model"){const o=(await new lb().loadAsync(t(r.path))).scene;o.scale.multiplyScalar(r.unitScale||1),o.traverse(c=>{c instanceof Ke&&(c.castShadow=c.receiveShadow=!0)});const l=new yt;l.add(o),this.models.set(r.id,l)}if(r.type==="texture"){const a=await new Ba().loadAsync(t(r.path));if(a.image.width>4096||a.image.height>4096)throw a.dispose(),new Error("Текстура превышает 4096 × 4096.");a.colorSpace=Mt,a.wrapS=a.wrapT=sn,this.textures.set("asset:"+r.id,a)}if(r.type==="material")for(const[a,o]of Object.entries(r.maps||{})){const l=await new Ba().loadAsync(t(o));if(l.image.width>4096||l.image.height>4096)throw l.dispose(),new Error("Карта материала превышает 4096 × 4096.");l.colorSpace=a==="baseColor"?Mt:ei,l.wrapS=l.wrapT=sn,this.textures.set("asset:"+r.id+(a==="baseColor"?"":":"+a),l)}n(++i/e.length)}}catch(r){throw new Error("Не удалось загрузить ресурс: "+(r instanceof Error?r.message:String(r)))}}bind(e){e.prototypes=this.models;for(const[t,n]of this.textures)e.textures.set(t,n)}dispose(){for(const e of this.models.values())Lr(e);for(const e of this.textures.values())e.dispose();this.models.clear(),this.textures.clear()}}function za(s){const e=[],t=(o,l)=>e.push({id:o,message:l});if(!s||s.version!==1||!Number.isFinite(s.floorHeight)||s.floorHeight<2.3||s.floorHeight>8||![s.rooms,s.doors,s.stairs,s.openings].every(Array.isArray))return[{id:"layout",message:"Некорректная планировка или высота этажа (2,3–8 м)."}];if(!s.spawn||!Number.isFinite(s.spawn.x)||!Number.isInteger(s.spawn.floor)||[...s.rooms,...s.doors,...s.stairs,...s.openings].some(o=>!o||typeof o.id!="string"||typeof o.name!="string")||s.rooms.some(o=>![o.x,o.width,o.floor,o.depth].every(Number.isFinite))||s.doors.some(o=>![o.x,o.floor].every(Number.isFinite))||s.stairs.some(o=>![o.a,o.b,o.from,o.to].every(Number.isFinite))||s.openings.some(o=>![o.x,o.bottom,o.width,o.height].every(Number.isFinite)))return[{id:"layout",message:"Повреждены данные планировки: проверьте элементы, координаты и появление."}];const n=new Set;for(const o of[...s.rooms,...s.doors,...s.stairs,...s.openings])n.has(o.id)&&t(o.id,"Повторяющийся элемент планировки."),n.add(o.id);for(const o of s.rooms){(!Number.isFinite(o.x)||!Number.isFinite(o.width)||!Number.isInteger(o.floor)||o.width<1||o.width>100||o.depth<1||o.depth>30)&&t(o.id,o.name+": проверьте размеры комнаты.");for(const l of s.rooms)o.id<l.id&&o.floor===l.floor&&o.x<l.x+l.width-.01&&o.x+o.width>l.x+.01&&t(o.id,o.name+": пересечение с комнатой «"+l.name+"».")}const i=(o,l)=>s.rooms.find(c=>c.floor===l&&o>=c.x-.01&&o<=c.x+c.width+.01);for(const o of s.doors)s.rooms.some(l=>l.floor===o.floor&&(Math.abs(l.x-o.x)<.02||Math.abs(l.x+l.width-o.x)<.02))||t(o.id,o.name+": дверь должна находиться на границе комнаты.");for(const o of s.stairs)(!i(o.a,o.from)||!i(o.b,o.to)||o.to!==o.from+1||(o.kind==="ladder"?Math.abs(o.b-o.a)>.01:Math.abs(o.b-o.a)<1.5))&&t(o.id,o.name+": соедините комнаты соседних этажей; длина марша — от 1,5 м.");for(const o of s.openings){const l=s.rooms.find(c=>c.id===o.room);(!l||!["window","breach"].includes(o.kind)||o.plane&&!["back","divider"].includes(o.plane)||o.width<=0||o.height<=0||(o.plane==="divider"?Math.min(Math.abs(o.x-l.x),Math.abs(o.x-l.x-l.width))>.02||o.width>l.depth:o.x-o.width/2<l.x||o.x+o.width/2>l.x+l.width)||o.bottom<0||o.bottom+o.height>s.floorHeight-.15)&&t(o.id,o.name+": проём должен помещаться на выбранной стене комнаты.")}i(s.spawn?.x,s.spawn?.floor)||t("spawn","Точка появления должна быть внутри комнаты.");const r=new Set,a=i(s.spawn?.x,s.spawn?.floor);a&&r.add(a.id);for(let o=0;o<s.rooms.length;o++){for(const l of[...s.doors,...s.openings.filter(_f).map(c=>({x:c.x,floor:s.rooms.find(h=>h.id===c.room)?.floor??0}))]){const c=i(l.x-.05,l.floor),h=i(l.x+.05,l.floor);c&&h&&(r.has(c.id)||r.has(h.id))&&(r.add(c.id),r.add(h.id))}for(const l of s.stairs){const c=i(l.a,l.from),h=i(l.b,l.to);c&&h&&(r.has(c.id)||r.has(h.id))&&(r.add(c.id),r.add(h.id))}}for(const o of s.rooms)r.has(o.id)||t(o.id,o.name+": нет маршрута от точки появления. Добавьте дверь или лестницу.");return e}function Vb(s){const e=za(s);if(e.length)throw new Error(e.map(t=>t.message).join(`
`))}const _f=s=>s.plane==="divider"&&s.kind==="breach"&&s.bottom===0&&s.height>=1.8&&s.width>0;function Wb(s,e,t,n,i){for(const r of s.rooms.filter(a=>a.floor===n))for(const a of[r.x,r.x+r.width])if((e-a)*(t-a)<=0&&e!==t&&!s.doors.some(o=>o.floor===n&&Math.abs(o.x-a)<.02&&i.has(o.id))&&!s.openings.some(o=>_f(o)&&Math.abs(o.x-a)<.02&&s.rooms.find(l=>l.id===o.room)?.floor===n))return a;return null}function Vu(s,e,t,n){const i=(o,l)=>s.rooms.find(c=>c.floor===l&&o>=c.x&&o<=c.x+c.width),r=i(e,t),a=new Set(r?[r.id]:[]);for(let o=0;o<s.rooms.length;o++)for(const l of[...s.doors.filter(c=>n.has(c.id)),...s.openings.filter(c=>c.plane==="divider").map(c=>({x:c.x,floor:s.rooms.find(h=>h.id===c.room)?.floor??0}))]){const c=i(l.x-.05,l.floor),h=i(l.x+.05,l.floor);c&&h&&(a.has(c.id)||a.has(h.id))&&(a.add(c.id),a.add(h.id))}for(const o of s.stairs)if(Math.abs(e-(t===o.from?o.a:o.b))<.8&&(t===o.from||t===o.to)){const l=i(o.a,o.from),c=i(o.b,o.to);l&&c&&(a.has(l.id)||a.has(c.id))&&(a.add(l.id),a.add(c.id))}return a}class vf{constructor(e){this.scene=e,e.add(this.root)}scene;root=new yt;doors=new Map;key="";apply(e){const t=za(e).find(l=>l.id==="layout");if(t)throw new Error(t.message);const n=JSON.stringify(e);if(n===this.key)return;this.key=n,Lr(this.root),this.root.clear(),this.doors.clear();const i=new Set(za(e).map(l=>l.id)),r=(l,c,h,d,u,f,g,x,m)=>{const p=new Ke(new Wt(Math.max(.01,u),Math.max(.01,f),Math.max(.01,g)),new xn({color:i.has(m)?"#b54f52":x,roughness:.85}));return p.position.set(c,h,d),p.castShadow=p.receiveShadow=!0,p.userData.layoutId=m,l.add(p),p},a=new Set;for(const l of e.rooms){const c=l.floor*e.floorHeight,h=e.floorHeight,d=-l.depth/2,u=e.stairs.filter(m=>m.to===l.floor&&m.b>=l.x&&m.b<=l.x+l.width).map(m=>m.kind==="ladder"?[m.b-.45,m.b+.45]:[Math.min(m.a,m.b),Math.max(m.a,m.b)+.3]);let f=[[l.x,l.x+l.width]];for(const[m,p]of u)f=f.flatMap(([M,b])=>b<=m||M>=p?[[M,b]]:[[M,Math.max(M,m)],[Math.min(b,p),b]].filter(([_,S])=>S-_>.01));for(const[m,p]of f)r(this.root,(m+p)/2,c-.09,0,p-m,.18,l.depth,"#646761",l.id);r(this.root,l.x+l.width/2,c-.09,l.depth/2-.12,l.width,.18,.24,"#42453f",l.id);const g=e.openings.filter(m=>m.room===l.id&&m.plane!=="divider"),x=[l.x,l.x+l.width,...g.flatMap(m=>[m.x-m.width/2,m.x+m.width/2])].sort((m,p)=>m-p);for(let m=1;m<x.length;m++){const p=x[m-1],M=x[m],b=g.find(_=>(p+M)/2>_.x-_.width/2&&(p+M)/2<_.x+_.width/2);b?(b.bottom&&r(this.root,(p+M)/2,c+b.bottom/2,d,M-p,b.bottom,.14,l.color,l.id),r(this.root,(p+M)/2,c+(h+b.bottom+b.height)/2,d,M-p,h-b.bottom-b.height,.14,l.color,l.id)):r(this.root,(p+M)/2,c+h/2,d,M-p,h,.14,l.color,l.id)}for(const m of[l.x,l.x+l.width]){const p=m+":"+l.floor;if(a.has(p))continue;a.add(p);const M=e.doors.find(_=>_.floor===l.floor&&Math.abs(_.x-m)<.02),b=e.openings.find(_=>_.plane==="divider"&&Math.abs(_.x-m)<.02&&e.rooms.find(S=>S.id===_.room)?.floor===l.floor);if(!M&&b){const _=Math.min(b.width,l.depth),S=b.bottom,E=S+b.height;S>0&&r(this.root,m,c+S/2,0,.14,S,l.depth,l.color,b.id),E<h&&r(this.root,m,c+(E+h)/2,0,.14,h-E,l.depth,l.color,b.id);const C=(l.depth-_)/2;if(C>0)for(const v of[-1,1])r(this.root,m,c+(S+E)/2,v*(_+C)/2,.14,b.height,C,l.color,b.id)}else if(!M)r(this.root,m,c+h/2,0,.14,h,l.depth,l.color,l.id);else{r(this.root,m,c+(h+2.1)/2,0,.16,h-2.1,l.depth,l.color,M.id),r(this.root,m,c+1.05,-l.depth/4-.3,.16,2.1,l.depth/2-.6,l.color,M.id),r(this.root,m,c+1.05,l.depth/4+.3,.16,2.1,l.depth/2-.6,l.color,M.id);const _=new yt;_.position.set(m,c,-.6),r(_,0,1.03,.6,.08,2.06,1.16,"#6f513a",M.id),this.root.add(_),this.doors.set(M.id,_)}}}for(const l of e.stairs){if(l.kind==="ladder"){for(const h of[-.35,.35])r(this.root,l.a+h,(l.from+.5)*e.floorHeight,-.75,.06,e.floorHeight,.09,"#89877d",l.id);for(let h=.2;h<e.floorHeight;h+=.28)r(this.root,l.a,l.from*e.floorHeight+h,-.75,.7,.05,.08,"#89877d",l.id);continue}const c=16;for(let h=0;h<c;h++){const d=(h+.5)/c;r(this.root,l.a+(l.b-l.a)*d,l.from*e.floorHeight+(h+1)*e.floorHeight/c-.06,-.75,Math.abs(l.b-l.a)/c+.02,.12,1.1,"#89877d",l.id)}}const o=new Ke(new Xa(.16,.4,16),new Bt({color:i.has("spawn")?"#ff5555":"#8fd8bd"}));o.position.set(e.spawn.x,e.spawn.floor*e.floorHeight+.2,0),o.userData.layoutId="spawn",o.userData.editorOnly=!0,this.root.add(o),this.setDoors(new Set(e.doors.filter(l=>l.open).map(l=>l.id)))}setDoors(e){for(const[t,n]of this.doors)n.rotation.y=e.has(t)?Math.PI/2:0}dispose(){Lr(this.root),this.root.removeFromParent()}}function Xb(s,e=!0){const t=new rb(s),n=new ab(t);n.validators.push(a=>{const o=a.moduleData?.layout;if(o){const l=za(o).find(c=>c.id==="layout");if(l)throw new Error(l.message)}}),t.scene.background=new He("#29343c"),t.scene.add(new Ol(13295083,3420195,2));const i=new Ts(16772558,3);i.position.set(-4,10,6),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-20,right:20,top:20,bottom:-20}),t.scene.add(i);const r=new vf(t.scene);return{renderer:t,runtime:n,floorHeight:3,floorNames:[{value:-1,name:"Подвал"},{value:0,name:"1 этаж"},{value:1,name:"2 этаж"},{value:2,name:"3 этаж"}],prefabs:{},draw:a=>{const o=n.document.moduleData?.layout;o&&e?r.apply(o):r.key&&(r.dispose(),r.key=""),i.intensity=.15+3*Math.max(0,Math.sin((n.document.environment.time-360)/1440*Math.PI*2)),t.scene.fog=new rc("#29343c",n.document.environment.haze),t.render(a)},updateCamera:a=>t.updateCamera(a),dispose:()=>{r.dispose(),n.dispose(),t.dispose()}}}async function qb(s){const e=[...s.registry.modules.values()].find(G=>G.createSession);if(e)return e.createSession(s);const t=structuredClone(s.snapshot);let n=s.sceneId,i=!1,r=!1,a=0,o=performance.now(),l,c,h=[],d,u,f,g=new Set,x=0,m=0,p;const M=new Set,b=new AbortController,_=s.container;_.innerHTML='<canvas tabindex="0" aria-label="Игра" style="width:100%;height:100%;display:block"></canvas><div class="runtime-actions" style="position:absolute;bottom:14px;left:14px;display:flex;gap:8px;flex-wrap:wrap"></div>';let S=_.querySelector("canvas");const E=_.querySelector(".runtime-actions"),C=qu(t.manifest.projectId,"progress",t.manifest.build.appId);let v;try{s.savePolicy==="persistent"&&(v=JSON.parse(localStorage.getItem(C)||"null"))}catch{}async function T(G){const V=t.scenes[G];if(!V)throw new Error("Сцена перехода не включена: "+G);s.registry.validate(V,t.manifest),V.moduleData?.layout&&Vb(V.moduleData.layout);const ee=new Hb;if(await ee.load(t.manifest.assets,s.assetUrl),i){ee.dispose();return}for(const K of h)s.registry.components.get(K.component.type)?.dispose?.(K);d?.dispose(),l?.dispose(),c?.dispose();const q=S.cloneNode(!1);if(S.replaceWith(q),S=q,c=ee,l=Xb(S,!1),c.bind(l.runtime),l.runtime.apply(V),l.renderer.resize(),n=G,l.renderer.beforeRender=()=>{},f=V.moduleData?.layout,d=void 0,u=void 0,p=void 0,E.innerHTML="",f){d=new vf(l.renderer.scene),d.apply(f),d.root.traverse(Z=>{Z.userData.editorOnly&&(Z.visible=!1)}),g=new Set(f.doors.filter(Z=>Z.open).map(Z=>Z.id)),x=f.spawn.floor,m=f.spawn.x,u=new Ke(new pc(.18,1.15,6,12),new xn({color:15516541})),l.renderer.scene.add(u);const K=document.createElement("span");K.textContent="A/D — идти · W/S — лестница · E — дверь",K.style.cssText="color:white;background:#111c;padding:8px",E.append(K)}h=V.nodes.flatMap(K=>(K.components||[]).map(Z=>({node:K,component:Z,runtime:l.runtime,scene:V,transition:I,keys:M})));for(const K of h)if(s.registry.components.get(K.component.type)?.load?.(K),K.component.type==="basic.portal"){const Z=document.createElement("button");Z.textContent=String(K.component.values.label),Z.onclick=()=>I(String(K.component.values.scene)),E.append(Z)}l.renderer.updateCamera(100),S.focus()}let R=!1;function I(G){R||r||i||(R=!0,T(G).catch(F).finally(()=>R=!1))}function F(G){const V=document.createElement("p");V.style.cssText="position:absolute;top:10px;background:#511;color:white;padding:12px",V.textContent=String(G),_.append(V)}const H=G=>{if(!G.target.closest("input,textarea,select")&&(["KeyA","KeyD","KeyW","KeyS","KeyE","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(G.code)&&(G.preventDefault(),M.add(G.code)),G.code==="KeyE"&&!G.repeat&&!r&&f)){const V=f.doors.find(ee=>ee.floor===x&&Math.abs(ee.x-m)<1);V&&(g.has(V.id)?g.delete(V.id):g.add(V.id),d?.setDoors(g))}};window.addEventListener("keydown",H,{signal:b.signal}),window.addEventListener("keyup",G=>M.delete(G.code),{signal:b.signal}),window.addEventListener("blur",()=>M.clear(),{signal:b.signal}),await T(v?.sceneId&&t.scenes[v.sceneId]?v.sceneId:n);const D=new ResizeObserver(()=>{l?.renderer.resize(),l?.renderer.updateCamera(100)});D.observe(_);function z(G){if(i)return;const V=Math.min(.05,(G-o)/1e3);if(o=G,!r&&!R&&l){for(const ee of h)s.registry.components.get(ee.component.type)?.update?.(ee,V);if(f&&u){const ee=Number(M.has("KeyD")||M.has("ArrowRight"))-Number(M.has("KeyA")||M.has("ArrowLeft"));if(!p){let q=m+ee*2.5*V;const K=Wb(f,m,q,x,g);K!==null&&(q=K-Math.sign(ee)*.025),f.rooms.some(qe=>qe.floor===x&&q>=qe.x&&q<=qe.x+qe.width)&&(m=q);const Z=M.has("KeyW")||M.has("ArrowUp"),Ae=M.has("KeyS")||M.has("ArrowDown"),Me=f.stairs.find(qe=>Z&&qe.from===x&&Math.abs(qe.a-m)<.7||Ae&&qe.to===x&&Math.abs(qe.b-m)<.7);Me&&(p={...Me,t:Z?0:1,direction:Z?1:-1})}p?(p.t+=V*.6*p.direction,m=p.a+(p.b-p.a)*Math.max(0,Math.min(1,p.t)),u.position.set(m,(p.from+Math.max(0,Math.min(1,p.t)))*f.floorHeight+.75,-.75),(p.t>=1||p.t<=0)&&(x=p.direction>0?p.to:p.from,p=void 0)):u.position.set(m,x*f.floorHeight+.75,0)}}if(l){if(f){const q=Vu(f,m,x,g);for(const K of l.runtime.document.nodes){const Z=f.rooms.find(Me=>Me.floor===Math.floor((K.transform.position[1]+.05)/f.floorHeight)&&K.transform.position[0]>=Me.x&&K.transform.position[0]<=Me.x+Me.width),Ae=l.runtime.instances.get(K.id)?.root;Ae&&(Ae.visible=K.visible&&(!Z||!!K.light||q.has(Z.id)))}}const ee=l.runtime.document.nodes.find(q=>q.id===l.runtime.document.activeCamera);ee&&(l.renderer.externalCamera=!0,l.renderer.camera.position.fromArray(ee.transform.position),l.renderer.camera.rotation.set(...ee.transform.rotation.map(Da.degToRad)),l.renderer.camera.updateMatrixWorld()),l.draw(V)}a=requestAnimationFrame(z)}return a=requestAnimationFrame(z),{pause(G){if(r=G,M.clear(),G)for(const V of h)s.registry.components.get(V.component.type)?.pause?.(V)},dispose(){i=!0,cancelAnimationFrame(a),b.abort(),D.disconnect();for(const G of h)s.registry.components.get(G.component.type)?.dispose?.(G);if(s.savePolicy==="persistent")try{localStorage.setItem(C,JSON.stringify({sceneId:n}))}catch{}d?.dispose(),l?.dispose(),c?.dispose(),_.replaceChildren()},diagnostics:()=>({sceneId:n,paused:r,x:m,floor:x,visibleRooms:f?[...Vu(f,m,x,g)]:[],openDoors:[...g],frames:1,memory:l?.renderer.gl.info.memory})}}const Yb={id:"shelter.basic",sdk:1,components:[{id:"basic.rotate",name:"Вращение",fields:[{name:"speed",label:"Скорость",type:"number",default:30,min:-360,max:360,unit:"°/с"},{name:"axis",label:"Ось",type:"select",default:"y",options:[{value:"x",label:"X"},{value:"y",label:"Y"},{value:"z",label:"Z"}]}],update:({runtime:s,node:e,component:t},n)=>{const i=s.instances.get(e.id).root;i.rotation[t.values.axis]+=Number(t.values.speed)*Math.PI/180*n}},{id:"basic.portal",name:"Переход в сцену",fields:[{name:"scene",label:"Куда перейти",type:"scene",default:""},{name:"label",label:"Надпись кнопки",type:"string",default:"Следующая сцена"}]},{id:"basic.bob",name:"Плавное покачивание",fields:[{name:"height",label:"Высота",type:"number",default:.2,min:0,max:3,unit:"м"},{name:"speed",label:"Скорость",type:"number",default:1,min:0,max:5}],update:({runtime:s,node:e,component:t},n)=>{const i=s.instances.get(e.id).root;i.userData.time=(i.userData.time||0)+n,i.position.y=e.transform.position[1]+Math.sin(i.userData.time*Number(t.values.speed))*Number(t.values.height)}}]};async function Kb(s,e,t,n,i=!1){const r=new ib;r.register(Yb);for(const a of e)r.register(a.default||a);return qb({container:document.querySelector("#app"),snapshot:s,sceneId:t,assetUrl:n,registry:r,savePolicy:i?"isolated":"persistent"})}const $b={format:"shelter-project",version:1,sdk:1,projectId:"spire-arena-heights",name:"Шпиль · Арена на высоте",gameVersion:"0.3.0",startScene:"arena",scenes:[{id:"arena",name:"Шпиль",path:"scenes/arena.scene.json"}],assets:[],modules:[{id:"spire",version:1,runtime:"scripts/runtime.ts"}],build:{target:"web",mode:"release",base:"./",output:"/Users/gadaev/Documents/ChatGPT/2D GAME/artifacts/builds/spire",scenes:["arena"],dynamicAssets:[],appId:"game.spire-arena-heights"}},Jb=JSON.parse('{"arena":{"format":"shelter-scene","version":2,"id":"arena","template":"spire-arena-v1","name":"Шпиль","units":"m","nodes":[{"id":"floor-1","name":"Настил","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-1.5,20.5],"rotation":[0,0,0],"scale":[64,3,23]},"surface":{"texture":"none","color":"#4b4f58","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"floor"}}]},{"id":"floor-2","name":"Настил","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-1.5,-20.5],"rotation":[0,0,0],"scale":[64,3,23]},"surface":{"texture":"none","color":"#4b4f58","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"floor"}}]},{"id":"floor-3","name":"Настил","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20.5,-1.5,0],"rotation":[0,0,0],"scale":[23,3,18]},"surface":{"texture":"none","color":"#4b4f58","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"floor"}}]},{"id":"floor-4","name":"Настил","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20.5,-1.5,0],"rotation":[0,0,0],"scale":[23,3,18]},"surface":{"texture":"none","color":"#4b4f58","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"floor"}}]},{"id":"floor-5","name":"Настил","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-4,0],"rotation":[0,0,0],"scale":[18,2,18]},"surface":{"texture":"none","color":"#4b4f58","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"floor"}}]},{"id":"metal-6","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-0.25,0],"rotation":[0,0,0],"scale":[18,0.5,2]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"lava","name":"Лава","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-2.25,0],"rotation":[0,0,0],"scale":[18,0.5,18]},"surface":{"texture":"none","color":"#ff5a1f","roughness":1,"metalness":0,"repeat":1},"components":[{"type":"spire.lava","values":{}}]},{"id":"wall-7","name":"Стена","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-32.5,7.5,0],"rotation":[0,0,0],"scale":[1,21,66]},"surface":{"texture":"none","color":"#30343d","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"wall"}}]},{"id":"wall-8","name":"Стена","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,7.5,-32.5],"rotation":[0,0,0],"scale":[64,21,1]},"surface":{"texture":"none","color":"#30343d","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"wall"}}]},{"id":"wall-9","name":"Стена","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[32.5,7.5,0],"rotation":[0,0,0],"scale":[1,21,66]},"surface":{"texture":"none","color":"#30343d","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"wall"}}]},{"id":"wall-10","name":"Стена","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,7.5,32.5],"rotation":[0,0,0],"scale":[64,21,1]},"surface":{"texture":"none","color":"#30343d","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"wall"}}]},{"id":"metal-11","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,4.75,29],"rotation":[0,0,0],"scale":[64,0.5,6]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"metal-12","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,4.75,-29],"rotation":[0,0,0],"scale":[64,0.5,6]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"metal-13","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-29,4.75,0],"rotation":[0,0,0],"scale":[6,0.5,52]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"metal-14","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[29,4.75,0],"rotation":[0,0,0],"scale":[6,0.5,52]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"metal-15","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,4.75,22],"rotation":[0,0,0],"scale":[10,0.5,8]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"metal-16","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,4.75,-22],"rotation":[0,0,0],"scale":[10,0.5,8]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"rail-17","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-12,5.5,-26.15],"rotation":[0,0,0],"scale":[10,1,0.3000000000000007]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-18","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[12,5.5,-26.15],"rotation":[0,0,0],"scale":[10,1,0.3000000000000007]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-19","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-26.15,5.5,-12.5],"rotation":[0,0,0],"scale":[0.3000000000000007,1,15]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-20","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-26.15,5.5,12.5],"rotation":[0,0,0],"scale":[0.3000000000000007,1,15]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-21","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-4.85,5.5,-20],"rotation":[0,0,0],"scale":[0.2999999999999998,1,4]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-22","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4.85,5.5,-20],"rotation":[0,0,0],"scale":[0.2999999999999998,1,4]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-23","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-12,5.5,26.15],"rotation":[0,0,0],"scale":[10,1,0.3000000000000007]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-24","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[12,5.5,26.15],"rotation":[0,0,0],"scale":[10,1,0.3000000000000007]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-25","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[26.15,5.5,-12.5],"rotation":[0,0,0],"scale":[0.3000000000000007,1,15]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-26","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[26.15,5.5,12.5],"rotation":[0,0,0],"scale":[0.3000000000000007,1,15]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-27","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-4.85,5.5,20],"rotation":[0,0,0],"scale":[0.2999999999999998,1,4]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-28","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4.85,5.5,20],"rotation":[0,0,0],"scale":[0.2999999999999998,1,4]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"stair-29","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.25,-20],"rotation":[0,0,0],"scale":[4,0.5,12]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-30","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.5,-20.6],"rotation":[0,0,0],"scale":[4,1,10.8]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-31","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.75,-21.2],"rotation":[0,0,0],"scale":[4,1.5,9.600000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-32","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1,-21.8],"rotation":[0,0,0],"scale":[4,2,8.399999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-33","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.25,-22.4],"rotation":[0,0,0],"scale":[4,2.5,7.199999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-34","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.5,-23],"rotation":[0,0,0],"scale":[4,3,6]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-35","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.75,-23.6],"rotation":[0,0,0],"scale":[4,3.5,4.800000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-36","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2,-24.2],"rotation":[0,0,0],"scale":[4,4,3.6000000000000014]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-37","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2.25,-24.8],"rotation":[0,0,0],"scale":[4,4.5,2.3999999999999986]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-38","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2.5,-25.4],"rotation":[0,0,0],"scale":[4,5,1.2000000000000028]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-39","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.25,20],"rotation":[0,0,0],"scale":[4,0.5,12]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-40","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.5,20.6],"rotation":[0,0,0],"scale":[4,1,10.8]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-41","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.75,21.2],"rotation":[0,0,0],"scale":[4,1.5,9.600000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-42","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1,21.8],"rotation":[0,0,0],"scale":[4,2,8.399999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-43","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.25,22.4],"rotation":[0,0,0],"scale":[4,2.5,7.199999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-44","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.5,23],"rotation":[0,0,0],"scale":[4,3,6]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-45","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.75,23.6],"rotation":[0,0,0],"scale":[4,3.5,4.800000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-46","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2,24.2],"rotation":[0,0,0],"scale":[4,4,3.6000000000000014]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-47","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2.25,24.8],"rotation":[0,0,0],"scale":[4,4.5,2.3999999999999986]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-48","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2.5,25.4],"rotation":[0,0,0],"scale":[4,5,1.2000000000000028]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-49","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.25,-20],"rotation":[0,0,0],"scale":[4,0.5,12]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-50","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.5,-20.6],"rotation":[0,0,0],"scale":[4,1,10.8]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-51","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.75,-21.2],"rotation":[0,0,0],"scale":[4,1.5,9.600000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-52","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1,-21.8],"rotation":[0,0,0],"scale":[4,2,8.399999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-53","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.25,-22.4],"rotation":[0,0,0],"scale":[4,2.5,7.199999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-54","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.5,-23],"rotation":[0,0,0],"scale":[4,3,6]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-55","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.75,-23.6],"rotation":[0,0,0],"scale":[4,3.5,4.800000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-56","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2,-24.2],"rotation":[0,0,0],"scale":[4,4,3.6000000000000014]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-57","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2.25,-24.8],"rotation":[0,0,0],"scale":[4,4.5,2.3999999999999986]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-58","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2.5,-25.4],"rotation":[0,0,0],"scale":[4,5,1.2000000000000028]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-59","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.25,20],"rotation":[0,0,0],"scale":[4,0.5,12]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-60","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.5,20.6],"rotation":[0,0,0],"scale":[4,1,10.8]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-61","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.75,21.2],"rotation":[0,0,0],"scale":[4,1.5,9.600000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-62","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1,21.8],"rotation":[0,0,0],"scale":[4,2,8.399999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-63","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.25,22.4],"rotation":[0,0,0],"scale":[4,2.5,7.199999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-64","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.5,23],"rotation":[0,0,0],"scale":[4,3,6]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-65","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.75,23.6],"rotation":[0,0,0],"scale":[4,3.5,4.800000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-66","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2,24.2],"rotation":[0,0,0],"scale":[4,4,3.6000000000000014]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-67","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2.25,24.8],"rotation":[0,0,0],"scale":[4,4.5,2.3999999999999986]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-68","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2.5,25.4],"rotation":[0,0,0],"scale":[4,5,1.2000000000000028]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"metal-69","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,9.7,0],"rotation":[0,0,0],"scale":[12,0.5999999999999996,12]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"pillar-70","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-5,3.2,-5],"rotation":[0,0,0],"scale":[1,12.4,1]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pillar-71","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-5,3.2,5],"rotation":[0,0,0],"scale":[1,12.4,1]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pillar-72","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,3.2,-5],"rotation":[0,0,0],"scale":[1,12.4,1]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pillar-73","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,3.2,5],"rotation":[0,0,0],"scale":[1,12.4,1]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"crate-74","name":"Ящик","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0.6,-13.75],"rotation":[0,0,0],"scale":[3,1.2,1.5]},"surface":{"texture":"none","color":"#6b5a44","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"crate"}}]},{"id":"crate-75","name":"Ящик","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-26,0.7,-18],"rotation":[0,0,0],"scale":[2,1.4,2]},"surface":{"texture":"none","color":"#6b5a44","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"crate"}}]},{"id":"pillar-76","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-25.6,2.25,-13],"rotation":[0,0,0],"scale":[1.1999999999999993,4.5,1.1999999999999993]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pillar-77","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-25.6,2.25,13],"rotation":[0,0,0],"scale":[1.1999999999999993,4.5,1.1999999999999993]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"crate-78","name":"Ящик","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0.6,13.75],"rotation":[0,0,0],"scale":[3,1.2,1.5]},"surface":{"texture":"none","color":"#6b5a44","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"crate"}}]},{"id":"crate-79","name":"Ящик","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[26,0.7,18],"rotation":[0,0,0],"scale":[2,1.4,2]},"surface":{"texture":"none","color":"#6b5a44","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"crate"}}]},{"id":"pillar-80","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[25.6,2.25,-13],"rotation":[0,0,0],"scale":[1.1999999999999993,4.5,1.1999999999999993]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pillar-81","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[25.6,2.25,13],"rotation":[0,0,0],"scale":[1.1999999999999993,4.5,1.1999999999999993]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pad-82","name":"Прыжковая площадка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-18,0.1,0],"rotation":[0,0,0],"scale":[2,0.2,2]},"components":[{"type":"spire.jumppad","values":{"tx":-29,"ty":5,"tz":0}}]},{"id":"pad-83","name":"Прыжковая площадка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[18,0.1,0],"rotation":[0,0,0],"scale":[2,0.2,2]},"components":[{"type":"spire.jumppad","values":{"tx":29,"ty":5,"tz":0}}]},{"id":"pad-84","name":"Прыжковая площадка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,5.1,21],"rotation":[0,0,0],"scale":[2,0.2,2]},"components":[{"type":"spire.jumppad","values":{"tx":0,"ty":10,"tz":4.5}}]},{"id":"pad-85","name":"Прыжковая площадка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,5.1,-21],"rotation":[0,0,0],"scale":[2,0.2,2]},"components":[{"type":"spire.jumppad","values":{"tx":0,"ty":10,"tz":-4.5}}]},{"id":"spawn-86","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-24,0.05,-24],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":-135}}]},{"id":"spawn-87","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[24,0.05,24],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":45}}]},{"id":"spawn-88","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-26,0.05,22],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":-49.8}}]},{"id":"spawn-89","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[26,0.05,-22],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":130.2}}]},{"id":"spawn-90","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-14,0.05,-5],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":-109.7}}]},{"id":"spawn-91","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[14,0.05,5],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":70.3}}]},{"id":"spawn-92","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,0.05,20],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":0}}]},{"id":"spawn-93","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,0.05,-20],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":180}}]},{"id":"spawn-94","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-29,5.05,-22],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":-127.2}}]},{"id":"spawn-95","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[29,5.05,22],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":52.8}}]},{"id":"spawn-96","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-22,5.05,29],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":-37.2}}]},{"id":"spawn-97","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[22,5.05,-29],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":142.8}}]},{"id":"item-98","name":"Мега-бонус","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,10.4,0],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"mega"}}]},{"id":"item-99","name":"Ракетница","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,0.4,0],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"rocket"}}]},{"id":"item-100","name":"Дробовик","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-29,5.4,-10],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"shotgun"}}]},{"id":"item-101","name":"Дробовик","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[29,5.4,10],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"shotgun"}}]},{"id":"item-102","name":"Броня","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-29,5.4,29],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"armor"}}]},{"id":"item-103","name":"Броня","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[29,5.4,-29],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"armor"}}]},{"id":"item-104","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-14,0.4,20],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-105","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[14,0.4,-20],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-106","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-28,0.4,-6],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-107","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[28,0.4,6],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-108","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,5.4,29],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-109","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,5.4,-29],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-110","name":"Патроны дробовика","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-12,0.4,-14],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"shells"}}]},{"id":"item-111","name":"Патроны дробовика","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[12,0.4,14],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"shells"}}]},{"id":"item-112","name":"Ракеты","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-29,5.4,20],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"rockets"}}]},{"id":"item-113","name":"Ракеты","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[29,5.4,-20],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"rockets"}}]},{"id":"item-114","name":"Автомат","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-29,0.4,9],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"auto"}}]},{"id":"item-115","name":"Автомат","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[29,0.4,-9],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"auto"}}]},{"id":"item-116","name":"Винтовка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[29,5.4,29],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"rifle"}}]},{"id":"item-117","name":"Патроны автомата","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[12,0.4,-14],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"bullets"}}]},{"id":"item-118","name":"Патроны автомата","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-12,0.4,14],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"bullets"}}]},{"id":"item-119","name":"Патроны винтовки","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-29,5.4,-29],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"rounds"}}]}],"textures":[],"camera":{"projection":"perspective","fov":90,"height":2,"distance":3,"follow":"fixed"},"environment":{"time":0,"haze":0.02,"exposure":1,"flashlight":false},"moduleData":{"spire":{"size":64,"lavaY":-2,"killY":-12}}}}'),Wu={manifest:$b,scenes:Jb},Zb=s=>new URL("./"+s,location.href).href;Kb(Wu,[nb],Wu.manifest.startScene,Zb).catch(s=>{document.getElementById("app").textContent="Не удалось запустить игру: "+s.message});

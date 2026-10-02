const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./style-CJv95U9D.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const xd="modulepreload",vd=function(s,e){return new URL(s,e).href},ec={},Jh=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(t.map(h=>{if(h=vd(h,n),h in ec)return;ec[h]=!0;const d=h.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(n)for(let g=a.length-1;g>=0;g--){const y=a[g];if(y.href===h&&(!d||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":xd,d||(f.as="script"),f.crossOrigin="",f.href=h,l&&f.setAttribute("nonce",l),document.head.appendChild(f),d)return new Promise((g,y)=>{f.addEventListener("load",g),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},hl={projection:"orthographic",fov:35,height:11.6,distance:18,centerX:.15,centerY:2.05,follow:"adaptive",offsetX:0,offsetY:1.3,smoothing:3,near:.1,far:100},yd={height:[2,80],distance:[3,100],centerX:[-1e3,1e3],centerY:[-1e3,1e3],offsetX:[-100,100],offsetY:[-100,100],smoothing:[0,20],near:[.01,2],far:[20,2e3]},ea=s=>({...hl,...s}),Md=["original","none","tile-0","tile-1","tile-2","tile-3","tile-4","tile-5"],xt=s=>{throw new Error(s)},Yt=(s,e,t)=>typeof s=="number"&&Number.isFinite(s)&&s>=e&&s<=t,Qt=(s,e=100)=>typeof s=="string"&&s.length>0&&s.length<=e,tc=s=>typeof s=="string"&&/^#[0-9a-f]{6}$/i.test(s);function Sd(s){if(!s||typeof s!="object")return xt("Файл не содержит сцену.");const e=s;if(e.format!=="shelter-scene"||![1,2].includes(e.version)||!Qt(e.template)||e.units!=="m")return xt("Неподдерживаемый формат или версия сцены.");if(!Qt(e.name)||!Array.isArray(e.nodes)||e.nodes.length>2e3||!Array.isArray(e.textures)||e.textures.length>24)return xt("Некорректное имя или слишком большая сцена.");const t=e.environment;if(!t||!Yt(t.time,0,1439)||!Yt(t.haze,0,.2)||!Yt(t.exposure,.2,3)||typeof t.flashlight!="boolean")return xt("Некорректные настройки окружения.");if(e.camera!==void 0&&(!e.camera||!["orthographic","perspective"].includes(e.camera.projection)||!Yt(e.camera.fov,15,100)))return xt("Некорректная камера. FOV должен быть от 15° до 100°.");if(e.camera){const o=ea(e.camera);if(!["adaptive","fixed","horizontal","player"].includes(o.follow)||Object.entries(yd).some(([l,[c,h]])=>!Yt(o[l],c,h))||o.near>=o.far||o.distance>=o.far)return xt("Некорректные параметры камеры: проверьте размеры, слежение и дальность видимости.")}const n=new Set;let i=0;for(const o of e.textures){if(!o||!Qt(o.id)||!Qt(o.name)||n.has(o.id)||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(o.data)||o.data.length>4e6)return xt("Некорректная текстура. Поддерживаются PNG, JPEG и WebP до 3 МБ.");n.add(o.id),i+=o.data.length}if(i>16e6)return xt("Общий размер текстур превышает 12 МБ.");if(e.nodes.filter(o=>o?.light&&o.visible&&o.light.intensity>0&&o.light.shadows).length>6)return xt("Одновременно поддерживается до 6 источников с тенями. Отключите тени у остальных.");const r=new Set,a=new Set;if(e.groups!==void 0){if(!Array.isArray(e.groups)||e.groups.length>500)return xt("Некорректный список групп.");for(const o of e.groups){if(!o||!Qt(o.id)||!Qt(o.name)||a.has(o.id))return xt("Некорректная или повторяющаяся группа.");a.add(o.id)}}for(const o of e.nodes){if(!o||!Qt(o.id)||r.has(o.id)||!Qt(o.name)||!["source","prefab","box","sphere","plane","point-light","spot-light","model","camera"].includes(o.kind)||!["architecture","props","lights","details"].includes(o.layer))return xt("Некорректный или повторяющийся объект сцены.");if(r.add(o.id),a.has(o.id)||o.groupId!==void 0&&!a.has(o.groupId))return xt("Объект ссылается на неизвестную группу или имеет конфликтующий ID.");if(typeof o.visible!="boolean"||typeof o.locked!="boolean")return xt("Некорректное состояние объекта.");if(o.gameId!==void 0&&!Qt(o.gameId))return xt("Некорректная игровая привязка.");for(const l of["position","rotation","scale"]){const c=o.transform?.[l];if(!Array.isArray(c)||c.length!==3||!c.every(h=>Yt(h,l==="scale"?.01:-1e3,l==="scale"?100:1e3)))return xt("Координаты должны быть конечными числами; масштаб — от 0,01 до 100.")}if(["source","model","prefab"].includes(o.kind)&&!Qt(o.asset,200))return xt("Не указан ресурс объекта.");if(o.folder!==void 0&&!Qt(o.folder))return xt("Некорректная папка.");if(o.components!==void 0&&(!Array.isArray(o.components)||o.components.length>32||o.components.some(l=>!l||!Qt(l.type)||!l.values||typeof l.values!="object"||Object.values(l.values).some(c=>!["string","boolean","number"].includes(typeof c)||typeof c=="number"&&!Number.isFinite(c)))))return xt("Некорректные компоненты.");if(o.surface){const l=o.surface;if(!l||!tc(l.color)||!Yt(l.roughness,0,1)||!Yt(l.metalness,0,1)||!Yt(l.repeat,.1,20)||!(Md.includes(l.texture)||n.has(l.texture)||/^asset:[a-zA-Z0-9_-]+$/.test(l.texture)))return xt("Некорректный материал объекта.")}if(o.kind.endsWith("-light")){const l=o.light;if(!l||!tc(l.color)||!Yt(l.intensity,0,150)||!Yt(l.range,.1,30)||!Yt(l.angle,5,85)||!Yt(l.penumbra,0,1)||typeof l.shadows!="boolean")return xt("Некорректный источник света.")}}if(e.activeCamera&&!e.nodes.some(o=>o.id===e.activeCamera&&o.kind==="camera"))return xt("Активная камера отсутствует в сцене.");if(e.moduleData&&JSON.stringify(e.moduleData).length>1e6)return xt("Данные модулей превышают 1 МБ.");for(const o of a)if(!e.nodes.some(l=>l.groupId===o))return xt("Группа не содержит объектов.");return structuredClone(e)}function nc(s="Новая сцена",e="empty-3d"){return{format:"shelter-scene",version:2,id:crypto.randomUUID(),template:e,name:s,units:"m",nodes:[],textures:[],camera:{...hl,follow:"fixed"},environment:{time:720,haze:0,exposure:1.3,flashlight:!1}}}function jh(s,e,t=""){return`shelter:${s}:${e}:${t}`}const Vr=20,bd=["mega","rocket","shotgun","armor","health","shells","rockets"],Ed=["floor","wall","metal","stair","rail","crate","pillar"],be=(s=0,e=0,t=0)=>({x:s,y:e,z:t});function wd(s){const[e,t,n]=s.transform.position,[i,r,a]=s.transform.scale;return{min:be(e-i/2,t-r/2,n-a/2),max:be(e+i/2,t+r/2,n+a/2)}}const Es=(s,e)=>s.components?.find(t=>t.type===e);function Td(s,e,t=2.5){const n=e.y-s.y,i=Math.max(n,0)+t,r=Math.sqrt(2*Vr*i),a=r/Vr+Math.sqrt(2*(i-n)/Vr),o=e.x-s.x,l=e.z-s.z;return be(o/a,r,l/a)}function Qh(s){const e=s.moduleData?.spire;if(!e||!Number.isFinite(e.size)||!Number.isFinite(e.lavaY)||!Number.isFinite(e.killY))throw new Error("Шпиль: в сцене нет параметров арены.");const t=[],n=[],i=[],r=[];let a;for(const o of s.nodes){const l=Es(o,"spire.solid"),c=Es(o,"spire.jumppad"),h=Es(o,"spire.spawn"),d=Es(o,"spire.pickup"),u=wd(o),f=be((u.min.x+u.max.x)/2,u.min.y,(u.min.z+u.max.z)/2);if(l&&t.push({...u,style:String(l.values.style)}),Es(o,"spire.lava")&&(a=u),c){const g=be(Number(c.values.tx),Number(c.values.ty),Number(c.values.tz));n.push({box:{min:be(u.min.x,u.min.y,u.min.z),max:be(u.max.x,u.max.y+.4,u.max.z)},center:f,target:g,launch:Td(f,g)})}h&&i.push({pos:f,yaw:Number(h.values.yaw)*Math.PI/180}),d&&r.push({kind:String(d.values.item),pos:f})}if(!a)throw new Error("Шпиль: на арене нет лавы.");if(i.length<8)throw new Error("Шпиль: нужно не меньше 8 точек появления.");if(!t.length)throw new Error("Шпиль: на арене нет блоков.");return{size:e.size,lavaY:e.lavaY,killY:e.killY,solids:t,lava:a,pads:n,spawns:i,items:r}}const Ci=(s,e)=>s.min.x<e.max.x&&s.max.x>e.min.x&&s.min.y<e.max.y&&s.max.y>e.min.y&&s.min.z<e.max.z&&s.max.z>e.min.z;function ul(s,e,t,n=1/0){let i=0,r=n;for(const a of["x","y","z"]){const o=s[a],l=e[a],c=t.min[a],h=t.max[a];if(Math.abs(l)<1e-9){if(o<c||o>h)return 1/0;continue}let d=(c-o)/l,u=(h-o)/l;if(d>u&&([d,u]=[u,d]),i=Math.max(i,d),r=Math.min(r,u),i>r)return 1/0}return i}function rs(s,e,t,n=200){let i=n,r=be();for(const a of s.solids){const o=ul(e,t,a,i);o<i&&(i=o,r=Ad(a,e.x+t.x*o,e.y+t.y*o,e.z+t.z*o))}return{t:i,normal:r}}function Ad(s,e,t,n){return[[Math.abs(e-s.min.x),be(-1,0,0)],[Math.abs(e-s.max.x),be(1,0,0)],[Math.abs(t-s.min.y),be(0,-1,0)],[Math.abs(t-s.max.y),be(0,1,0)],[Math.abs(n-s.min.z),be(0,0,-1)],[Math.abs(n-s.max.z),be(0,0,1)]].reduce((r,a)=>a[0]<r[0]?a:r)[1]}function eu(s,e){return be(Math.max(s.min.x,Math.min(s.max.x,e.x)),Math.max(s.min.y,Math.min(s.max.y,e.y)),Math.max(s.min.z,Math.min(s.max.z,e.z)))}const ba=8,Rd=10,ic=1,Cd=6,Pd=2.5,Ld=7,Wr=.55,An=.35,fs=1.75,tu=1.15,Kn=.3,sc=fs-Kn/2-.05,ur=fs-tu,Id=.5,Nd=6,Dd=2,rc=10,Ud=.8,Fd=1,Od=3.75,kd=4,ac=.45,Bd=.15,zd=.06,Gd=.6,Xr=1/120,oc=s=>({pos:{...s},vel:be(),onGround:!1,crouch:!1,slide:0,slideCooldown:0,slideArmed:!1,crouchHeld:!1,lean:0}),_n=s=>s?tu:fs,Hd=s=>s.slide>0?2:s.crouch?1:0,mi=(s,e=0,t=fs)=>({min:be(s.x-An,s.y+e,s.z-An),max:be(s.x+An,s.y+e+t,s.z+An)}),Vd=(s,e=0)=>be(-Math.sin(s)*Math.cos(e),Math.sin(e),-Math.cos(s)*Math.cos(e)),nu=s=>be(Math.cos(s),0,-Math.sin(s)),Wd=s=>Math.hypot(s.vel.x,s.vel.z);function mo(s,e){for(const t of s.solids)if(Ci(e,t))return t}function Ea(s,e,t,n,i,r){const a=s.x*e+s.z*t,o=n-a;if(o<=0)return;const l=Math.min(i*r*n,o);s.x+=l*e,s.z+=l*t}function Xd(s,e){const t=Math.hypot(s.x,s.z);if(t<1e-4){s.x=s.z=0;return}const n=Math.max(t,Pd)*Cd*e,i=Math.max(0,t-n)/t;s.x*=i,s.z*=i}function qd(s,e){const t=Math.hypot(s.x,s.z);if(t<1e-4)return 0;const n=Math.max(0,t-Od*e);return s.x*=n/t,s.z*=n/t,n}function ts(s,e,t,n){if(n===0)return!1;e.pos[t]+=n;const i=_n(e.crouch);let r=!1;for(const a of s.solids){const o=mi(e.pos,0,i);if(Ci(o,a))if(r=!0,t==="y")e.pos.y=n>0?a.min.y-i-1e-4:a.max.y+1e-4;else{const l=An+1e-4;e.pos[t]=n>0?a.min[t]-l:a.max[t]+l}}return r}function Yd(s,e,t,n){const i={...e.pos},r=ts(s,e,"x",t),a=ts(s,e,"z",n);if(!(r||a)||!e.onGround)return{hitX:r,hitZ:a};const o={...e.pos};if(e.pos={...i},mo(s,mi(e.pos,Wr,_n(e.crouch))))return e.pos=o,{hitX:r,hitZ:a};e.pos.y+=Wr;const l=ts(s,e,"x",t),c=ts(s,e,"z",n);ts(s,e,"y",-Wr);const h=(e.pos.x-i.x)**2+(e.pos.z-i.z)**2,d=(o.x-i.x)**2+(o.z-i.z)**2;return h<=d+1e-8?(e.pos=o,{hitX:r,hitZ:a}):{hitX:l,hitZ:c}}function lc(s,e,t){const n={min:be(e.x-An,e.y-t,e.z-An),max:be(e.x+An,e.y,e.z+An)};let i=-1/0;for(const r of s.solids)Ci(n,r)&&r.max.y<=e.y+.001&&(i=Math.max(i,r.max.y));return i}function Kd(s,e,t,n){if(t&&!e.crouch){e.crouch=!0,e.onGround||(e.pos.y+=ur,n.tuck=ur);return}if(!(t||!e.crouch)){if(!e.onGround){const i=be(e.pos.x,e.pos.y-ur,e.pos.z);if(!mo(s,mi(i,0,fs))){e.pos=i,e.crouch=!1,n.tuck=-ur,e.slide=0;return}}mo(s,mi(e.pos,0,fs))||(e.crouch=!1,e.slide=0)}}function $d(s,e,t,n=Xr){const i={jumped:!1,landed:0,pad:-1,lava:!1,out:!1,slide:!1,tuck:0},r=Math.max(-1,Math.min(1,t.forward)),a=Math.max(-1,Math.min(1,t.strafe)),o=Math.sin(t.yaw),l=Math.cos(t.yaw);let c=-o*r+l*a,h=-l*r-o*a;const d=Math.hypot(c,h);d>1e-6&&(c/=d,h/=d);const u=!!t.crouch,f=u&&!e.crouchHeld;e.crouchHeld=u,(f||!e.onGround)&&(e.slideArmed=!0),e.slideCooldown=Math.max(0,e.slideCooldown-n),Kd(s,e,u,i);const g=Wd(e);if(e.onGround&&e.crouch&&e.slide<=0&&e.slideArmed&&e.slideCooldown<=0&&g>=Nd){const _=g>=rc?g:Math.min(rc,g+Dd);e.vel.x*=_/g,e.vel.z*=_/g,e.slide=Ud,e.slideCooldown=Fd,i.slide=!0}e.onGround&&(e.slideArmed=!1);const y=e.onGround&&e.slide<=0,m=y?Math.sign(t.lean??0):0,p=n/Bd;e.lean=e.lean<m?Math.min(m,e.lean+p):Math.max(m,e.lean-p);const M=d>1e-6?ba*(e.crouch?Id:1)*(m?Gd:1):0;if(e.onGround&&t.jump&&(e.vel.y=Ld,e.onGround=!1,e.slide=0,i.jumped=!0),e.onGround&&e.slide>0){e.slide-=n;const _=qd(e.vel,n);Ea(e.vel,c,h,d>1e-6?ba:0,ic,n),(e.slide<=0||_<kd)&&(e.slide=0)}else e.onGround?(Xd(e.vel,n),Ea(e.vel,c,h,M,Rd,n)):Ea(e.vel,c,h,d>1e-6?ba:0,ic,n);const w=e.onGround;e.vel.y-=Vr*n;const{hitX:v,hitZ:b}=Yd(s,e,e.vel.x*n,e.vel.z*n);v&&(e.vel.x=0),b&&(e.vel.z=0);const E=e.vel.y;if(ts(s,e,"y",e.vel.y*n))e.vel.y<0&&(w||(i.landed=-E),e.onGround=!0),e.vel.y=0;else if(w&&e.vel.y<=0&&!i.jumped){const _=lc(s,e.pos,Wr+.05);_>-1/0?(e.pos.y=_+1e-4,e.vel.y=0,e.onGround=!0):e.onGround=!1}else e.onGround=!1;e.onGround&&lc(s,e.pos,.02)===-1/0&&(e.onGround=!1),e.onGround||(e.slide=0);const R=mi(e.pos,0,_n(e.crouch));return s.pads.forEach((_,T)=>{i.pad<0&&Ci(R,_.box)&&(e.vel={..._.launch},e.onGround=!1,e.slide=0,i.pad=T)}),(Ci(R,s.lava)||e.pos.y<s.lavaY&&Ci({min:{...s.lava.min,y:-1/0},max:s.lava.max},R))&&(i.lava=!0),(e.pos.y<s.killY||Math.abs(e.pos.x)>s.size||Math.abs(e.pos.z)>s.size)&&(i.out=!0),i}function iu(s,e){const t=Math.abs(e.lean);if(t<.001)return 0;const n=Math.sign(e.lean),i=nu(e.yaw),r=be(i.x*n,0,i.z*n),a=be(e.pos.x,e.pos.y+_n(e.crouch)-Kn/2,e.pos.z),o=rs(s,a,r,ac+Kn).t;return n*Math.max(0,Math.min(ac*t,o-Kn/2-.02))}function su(s,e){const t=iu(s,e),n=nu(e.yaw);return be(e.pos.x+n.x*t,e.pos.y+_n(e.crouch)-Kn/2-zd*Math.abs(e.lean),e.pos.z+n.z*t)}function ru(s,e){const t=su(s,e);return be(t.x,t.y-.05,t.z)}function go(s,e,t=0){const n=_n(e.crouch),i=su(s,e),r=e.pos.y+n*.52,a=i.y-Kn/2,o=be((e.pos.x+i.x)/2,0,(e.pos.z+i.z)/2),l=An+t,c=Kn/2+t*.5;return[{box:{min:be(e.pos.x-l,e.pos.y,e.pos.z-l),max:be(e.pos.x+l,r,e.pos.z+l)},head:!1},{box:{min:be(o.x-l,r,o.z-l),max:be(o.x+l,a,o.z+l)},head:!1},{box:{min:be(i.x-c,a,i.z-c),max:be(i.x+c,i.y+Kn/2+t*.5,i.z+c)},head:!0}]}function qr(s,e,t,n=1/0){let i=n,r=!1;for(const a of s){const o=ul(e,t,a.box,i);o<i&&(i=o,r=a.head)}return{t:i,head:r}}const Rn=[{id:0,name:"Бластер",kind:"Стартовое",interval:.1,damage:8,pellets:1,spread:.012,ammoMax:1/0},{id:1,name:"Дробовик",kind:"Ближний бой",interval:1,damage:7,pellets:11,spread:.075,ammoMax:30},{id:2,name:"Ракетница",kind:"Урон по площади",interval:.8,damage:100,pellets:1,spread:0,ammoMax:25}],au=24,bn=.15,cc=3.2,Zd=90,Jd=.5,ou=.12,Ys=100,jd=200,hc=100,Qd=2/3,ef=2,uc=10,dc=600,tf=[10,20,30],nf=8,lu=.2,sf=1.1,cu={mega:{respawn:30,name:"Мега-бонус"},rocket:{respawn:20,name:"Ракетница"},shotgun:{respawn:20,name:"Дробовик"},armor:{respawn:25,name:"Броня"},health:{respawn:20,name:"Аптечка"},shells:{respawn:20,name:"Патроны дробовика"},rockets:{respawn:20,name:"Ракеты"}},fc=()=>({health:Ys,armor:0,owned:[!0,!1,!1],ammo:[1/0,0,0]});function rf(s,e){const t=(n,i)=>{const r=s.ammo[n];return s.ammo[n]=Math.min(Rn[n].ammoMax,s.ammo[n]+i),s.ammo[n]>r};switch(e){case"health":return s.health>=Ys?!1:(s.health=Math.min(Ys,s.health+25),!0);case"mega":return s.health=Math.min(jd,s.health+100),!0;case"armor":return s.armor>=hc?!1:(s.armor=Math.min(hc,s.armor+50),!0);case"shotgun":{const n=s.owned[1];return s.owned[1]=!0,t(1,10)||!n}case"rocket":{const n=s.owned[2];return s.owned[2]=!0,t(2,8)||!n}case"shells":return t(1,10);case"rockets":return t(2,5)}}function af(s,e){const t=Math.min(s.armor,Math.round(e*Qd));return s.armor-=t,s.health-=e-t,e-t}const hu=s=>s>=cc?0:Math.round(Zd*(1-s/cc));function of(s,e,t){let n=s>>>0||1;const i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),r=[];for(let a=0;a<e;a++){const o=i()*Math.PI*2,l=(e>1&&a===0?0:Math.sqrt(i()))*t;r.push([Math.cos(o)*l,Math.sin(o)*l])}return r}function pc(s){if(!s.length)return;const e=[...s].sort((t,n)=>n.frags-t.frags);return e.length===1||e[0].frags>e[1].frags?e[0].id:void 0}function lf(s,e){const t=uu(s);if(!e.includes(t))return t;for(let n=2;;n++){const i=`${t} (${n})`;if(!e.includes(i))return i}}function uu(s){return s.replace(/[\u0000-\u001f<>]/g,"").trim().slice(0,16)||"Боец"}const wa=["#ff6b3d","#3dc8ff","#9cff3d","#ff3df0","#ffd23d","#7a5cff","#3dffb0","#ff3d6e"],Hs=2,At=s=>Math.round(s*100)/100,un=s=>[At(s.x),At(s.y),At(s.z)],Wt=s=>({x:s[0],y:s[1],z:s[2]}),dr=s=>Array.isArray(s)&&s.length===3&&s.every(e=>typeof e=="number"&&Number.isFinite(e)&&Math.abs(e)<1e4),cf=.1,hf=8,uf=40,Ui=(s,e)=>be(s.x-e.x,s.y-e.y,s.z-e.z),wi=s=>Math.hypot(s.x,s.y,s.z),as=s=>{const e=wi(s)||1;return be(s.x/e,s.y/e,s.z/e)},mc=(s,e)=>be(s.y*e.z-s.z*e.y,s.z*e.x-s.x*e.z,s.x*e.y-s.y*e.x),di=(s,e,t=1)=>be(s.x+e.x*t,s.y+e.y*t,s.z+e.z*t);function _o(s,e,t){const n=Rn[e],i=as(s);if(n.pellets===1&&n.spread===0)return[i];const r=Math.abs(i.y)>.95?be(1,0,0):be(0,1,0),a=as(mc(i,r)),o=mc(a,i);return of(t,n.pellets,n.spread).map(([l,c])=>as(di(di(i,a,l),o,c)))}class df{time=0;phase="playing";matchStart=0;overAt=0;winner=null;players=new Map;items;rockets=[];events=[];arena;options;random;nextRocket=1;constructor(e,t,n=Math.random){this.arena=e,this.options=t,this.random=n,this.items=e.items.map(i=>({spot:i,availableAt:0}))}roster(){return[...this.players.values()].map(({id:e,name:t,color:n})=>({id:e,name:t,color:n}))}join(e,t){const n=this.players.get(e);if(n)return n;if(this.players.size>=this.options.maxPlayers)return"full";const i=[...this.players.values()].map(o=>o.color),r=wa.find(o=>!i.includes(o))||wa[this.players.size%wa.length],a={id:e,name:lf(t,[...this.players.values()].map(o=>o.name)),color:r,pos:be(),vel:be(),yaw:0,pitch:0,stance:0,lean:0,weapon:0,loadout:fc(),alive:!1,life:0,respawnAt:this.time,frags:0,deaths:0,lastFire:[-9,-9,-9],ack:0,history:[],joined:this.time,lastPose:this.time};return this.players.set(e,a),a}leave(e){this.players.delete(e),this.rockets=this.rockets.filter(t=>t.by!==e),this.checkSuddenDeath()}pose(e,t){const n=this.players.get(e);if(!n||!n.alive||t.life!==n.life||!dr(t.p)||!dr(t.v)||!Number.isFinite(t.yaw)||!Number.isFinite(t.pitch))return;const i=Wt(t.p);if(wi(Ui(i,n.pos))>hf+uf*(this.time-n.lastPose))return;n.pos=i,n.lastPose=this.time,n.vel=Wt(t.v),n.yaw=t.yaw,n.pitch=Math.max(-1.55,Math.min(1.55,t.pitch)),n.stance=t.s===1||t.s===2?t.s:0,n.lean=Number.isFinite(t.l)?Math.max(-1,Math.min(1,t.l)):0,t.w in Rn&&n.loadout.owned[t.w]&&(n.weapon=t.w);const r=mi(n.pos,0,_n(n.stance>0));Ci(r,this.arena.lava)?this.kill(n,n,"lava"):(n.pos.y<this.arena.killY||Math.abs(n.pos.x)>this.arena.size||Math.abs(n.pos.z)>this.arena.size)&&this.kill(n,n,"fall")}fire(e,t){const n=this.players.get(e);if(!n||(Number.isFinite(t.seq)&&(n.ack=Math.max(n.ack,t.seq)),!n.alive||this.phase==="over"||!(t.w in Rn)||!dr(t.o)||!dr(t.d)||wi(Wt(t.d))<.5))return;const i=Rn[t.w];if(!n.loadout.owned[t.w]||n.loadout.ammo[t.w]<=0||this.time-n.lastFire[t.w]<i.interval*.75)return;n.lastFire[t.w]=this.time,t.w!==0&&n.loadout.ammo[t.w]--;const r=ru(this.arena,this.posture(n));let a=Wt(t.o);const o=wi(Ui(a,r));(o>2.5||o>.01&&rs(this.arena,r,as(Ui(a,r)),o).t<o)&&(a=r);const l=as(Wt(t.d));if(t.w===2){this.launchRocket(n,a,l);return}const c=Number.isFinite(t.seed)?t.seed>>>0:1,h=Math.max(0,Math.min(lu,Number(t.lag)||0));this.events.push({e:"shot",by:e,w:t.w,o:un(a),d:un(l),seed:c});const d=new Map,u=new Map;for(const f of this.players.values())f!==n&&f.alive&&u.set(f,this.hitboxes(this.rewind(f,this.time-h)));for(const f of _o(l,t.w,c)){let y=rs(this.arena,a,f,120).t,m;for(const[p,M]of u){const w=qr(M,a,f,y);w.t<y&&(y=w.t,m=p)}if(m){const p=d.get(m)||{amount:0,dir:f};p.amount+=i.damage,d.set(m,p)}}for(const[f,g]of d)this.hurt(f,n,g.amount,g.dir,a,t.w)}step(e){this.time+=e;for(const t of this.players.values())for(!t.alive&&this.time>=t.respawnAt&&this.phase!=="over"&&this.respawn(t),t.alive&&t.loadout.health>Ys&&(t.loadout.health=Math.max(Ys,t.loadout.health-e)),t.history.push({t:this.time,x:t.pos.x,y:t.pos.y,z:t.pos.z,crouch:t.stance>0,lean:t.lean,yaw:t.yaw});t.history.length&&t.history[0].t<this.time-1;)t.history.shift();if(this.stepRockets(e),this.stepItems(),this.phase==="playing"&&this.time-this.matchStart>=this.options.timeLimit){const t=pc([...this.players.values()]);t?this.end(t):(this.phase="sudden",this.events.push({e:"match",phase:"sudden",winner:null}))}this.phase==="over"&&this.time-this.overAt>=uc&&this.newMatch()}snapshot(){const e=this.phase==="playing"?Math.max(0,this.options.timeLimit-(this.time-this.matchStart)):0,t=[...this.players.values()].map(n=>{const i=n.loadout;return[n.id,At(n.pos.x),At(n.pos.y),At(n.pos.z),At(n.yaw),At(n.pitch),n.weapon,Math.ceil(i.health),Math.ceil(i.armor),n.alive?1:0,n.frags,n.deaths,i.ammo[1],i.ammo[2],(i.owned[1]?2:0)|(i.owned[2]?4:0)|1,n.ack,n.life,n.stance,At(n.lean)]});return{k:"snap",t:At(this.time),phase:this.phase,left:At(e),winner:this.winner,restart:this.phase==="over"?At(Math.max(0,uc-(this.time-this.overAt))):0,items:this.items.map(n=>n.availableAt<=this.time?"1":"0").join(""),players:t}}drain(){const e=this.events;return this.events=[],e}posture(e){return{pos:e.pos,crouch:e.stance>0,lean:e.lean,yaw:e.yaw}}rewind(e,t){const n=e.history,i=c=>({pos:be(c.x,c.y,c.z),crouch:c.crouch,lean:c.lean,yaw:c.yaw});if(!n.length||t>=n[n.length-1].t)return this.posture(e);if(t<=n[0].t)return i(n[0]);let r=n.length-1;for(;r>0&&n[r-1].t>t;)r--;const a=n[r-1],o=n[r],l=(t-a.t)/(o.t-a.t||1);return{pos:be(a.x+(o.x-a.x)*l,a.y+(o.y-a.y)*l,a.z+(o.z-a.z)*l),crouch:l<.5?a.crouch:o.crouch,lean:a.lean+(o.lean-a.lean)*l,yaw:l<.5?a.yaw:o.yaw}}hitboxes(e){return go(this.arena,e,cf)}launchRocket(e,t,n){const i=this.nextRocket++;this.rockets.push({id:i,by:e.id,pos:{...t},dir:n,born:this.time}),this.events.push({e:"rocket",id:i,by:e.id,o:un(t),d:un(n)})}stepRockets(e){for(const t of[...this.rockets]){const n=au*e,i=n+bn;let r=rs(this.arena,t.pos,t.dir,i).t,a;for(const o of this.players.values())if(!(!o.alive||o.id===t.by))for(const{box:l}of this.hitboxes(this.posture(o))){const c=ul(t.pos,t.dir,{min:di(l.min,be(-bn,-bn,-bn)),max:di(l.max,be(bn,bn,bn))},r);c<r&&(r=c,a=o)}if(r<i){this.explode(t,di(t.pos,t.dir,Math.max(0,r-bn-.05)),a);continue}t.pos=di(t.pos,t.dir,n),this.time-t.born>10&&(this.rockets=this.rockets.filter(o=>o!==t))}}explode(e,t,n){this.rockets=this.rockets.filter(r=>r!==e),this.events.push({e:"boom",id:e.id,p:un(t),by:e.by});const i=this.players.get(e.by);if(i){n&&this.hurt(n,i,Rn[2].damage,e.dir,t,2);for(const r of[...this.players.values()]){if(!r.alive||r===n)continue;const a=_n(r.stance>0),o=mi(r.pos,0,a),l=wi(Ui(eu(o,t),t)),c=hu(l);if(!c)continue;const h=be(r.pos.x,r.pos.y+a/2,r.pos.z),d=Ui(h,t);this.hurt(r,i,c,wi(d)<.01?be(0,1,0):as(d),t,2)}}}hurt(e,t,n,i,r,a){if(!e.alive||this.phase==="over")return;const o=di(be(),i,Math.min(n,200)*ou),l=e===t?Math.round(n*Jd):n;af(e.loadout,l),e.vel=di(e.vel,o),this.events.push({e:"hurt",to:e.id,by:t.id,amount:l,knock:un(o),from:un(r)}),e!==t&&this.events.push({e:"hit",by:t.id,to:e.id,amount:l}),e.loadout.health<=0&&this.kill(e,t,a)}kill(e,t,n){!e.alive||this.phase==="over"||(e.alive=!1,e.deaths++,e.respawnAt=this.time+ef,e.loadout.health=Math.min(e.loadout.health,0),e===t?e.frags--:t.frags++,this.events.push({e:"kill",killer:t.id,victim:e.id,w:n}),this.phase==="playing"&&e!==t&&t.frags>=this.options.fragLimit?this.end(t.id):this.checkSuddenDeath())}checkSuddenDeath(){if(this.phase!=="sudden")return;const e=pc([...this.players.values()]);e&&this.end(e)}end(e){this.phase="over",this.winner=e,this.overAt=this.time,this.rockets=[],this.events.push({e:"match",phase:"over",winner:e})}newMatch(){this.phase="playing",this.winner=null,this.matchStart=this.time,this.rockets=[];for(const e of this.items)e.availableAt=0;for(const e of this.players.values())e.frags=0,e.deaths=0,e.alive=!1,this.respawn(e);this.events.push({e:"match",phase:"playing",winner:null})}respawn(e){const t=[...this.players.values()].filter(r=>r!==e&&r.alive),n=this.arena.spawns.map(r=>({s:r,d:t.length?Math.min(...t.map(a=>wi(Ui(a.pos,r.pos)))):this.random()*100})).sort((r,a)=>a.d-r.d),i=n[Math.floor(this.random()*Math.min(3,n.length))].s;e.pos={...i.pos},e.lastPose=this.time,e.vel=be(),e.yaw=i.yaw,e.pitch=0,e.stance=0,e.lean=0,e.weapon=0,e.loadout=fc(),e.alive=!0,e.life++,e.history=[],e.lastFire=[-9,-9,-9],this.events.push({e:"spawn",id:e.id,p:un(e.pos),yaw:At(i.yaw),life:e.life})}stepItems(){for(const e of this.items)if(!(e.availableAt>this.time))for(const t of this.players.values()){if(!t.alive)continue;const n=t.pos.x-e.spot.pos.x,i=t.pos.z-e.spot.pos.z,r=t.pos.y-e.spot.pos.y;if(!(Math.hypot(n,i)>sf||r<-1.2||r>1.5)&&rf(t.loadout,e.spot.kind)){e.availableAt=this.time+cu[e.spot.kind].respawn,this.events.push({e:"pick",id:t.id,item:this.items.indexOf(e)});break}}}}const gc=.1,ff=1/30,pf=2,mf={mega:"+100 здоровья",rocket:"Ракетница",shotgun:"Дробовик",armor:"+50 брони",health:"+25 здоровья",shells:"+10 патронов",rockets:"+5 ракет"},_c=["blaster","shotgun","rocket"],xc=(s,e)=>be(s.x-e.x,s.y-e.y,s.z-e.z),ri=(s,e,t)=>be(s.x+e.x*t,s.y+e.y*t,s.z+e.z*t),vc=s=>Math.hypot(s.x,s.y,s.z);class gf{id="";name="";color="";options=null;roster=new Map;connected=!1;body=oc(be());yaw=0;pitch=0;life=0;alive=!1;weapon=0;health=100;armor=0;ammo=[1/0,0,0];owned=[!0,!1,!1];frags=0;deaths=0;phase="playing";left=0;winner=null;restart=0;items="";rtt=0;time=0;tracers=[];blasts=[];sparks=[];rockets=[];feed=[];sounds=[];notes=[];hitFlash=0;damageFlash=0;eyeOffset=sc;damageFrom=null;killedBy=null;deathTime=0;muzzle=0;fell=!1;others=new Map;rows=[];pending=[];seq=0;nextFire=0;hostAmmo=[1/0,0,0];acc=0;poseTimer=0;pingTimer=0;arena;link;random;constructor(e,t,n=Math.random){this.arena=e,this.link=t,this.random=n}get posture(){return{pos:this.body.pos,crouch:this.body.crouch,lean:this.body.lean,yaw:this.yaw}}get eye(){return ru(this.arena,this.posture)}get view(){const e=this.eye;return be(e.x,this.body.pos.y+this.eyeOffset,e.z)}get stance(){return Hd(this.body)}nameOf(e){return this.roster.get(e)?.name??"Боец"}colorOf(e){return this.roster.get(e)?.color??"#cccccc"}receive(e){switch(e.k){case"welcome":this.id=e.id,this.name=e.name,this.color=e.color,this.options=e.options,this.connected=!0;break;case"roster":{const t=new Set(this.roster.keys());this.roster=new Map(e.players.map(n=>[n.id,n]));for(const n of this.others.keys())this.roster.has(n)||this.others.delete(n);t.size&&e.players.some(n=>!t.has(n.id)&&n.id!==this.id)&&this.sounds.push({name:"join"});break}case"snap":this.applySnapshot(e);break;case"ev":for(const t of e.list)this.applyEvent(t);break;case"pong":this.rtt=this.rtt?this.rtt*.7+(performance.now()-e.t)/1e3*.3:(performance.now()-e.t)/1e3;break}}applySnapshot(e){this.phase=e.phase,this.left=e.left,this.winner=e.winner,this.restart=e.restart,this.items=e.items,this.rows=e.players;for(const t of e.players){const[n,i,r,a,o,l,c,h,d,u,f,g,y,m,p,M,w,v,b]=t;if(n===this.id){this.health=h,this.armor=d,this.frags=f,this.deaths=g,this.owned=[!0,!!(p&2),!!(p&4)],this.hostAmmo=[1/0,y,m],this.pending=this.pending.filter(R=>R.seq>M),this.ammo=[1/0,y-this.pending.filter(R=>R.w===1).length,m-this.pending.filter(R=>R.w===2).length],u&&w>this.life&&this.spawn(be(i,r,a),o,w);continue}const E=this.others.get(n)??{samples:[],weapon:0,alive:!1,frags:0,deaths:0,muzzle:0};for(E.weapon=c,E.alive=!!u,E.frags=f,E.deaths=g,E.samples.push({t:this.time,pos:be(i,r,a),yaw:o,pitch:l,stance:v??0,lean:b??0});E.samples.length>2&&E.samples[0].t<this.time-1;)E.samples.shift();this.others.set(n,E)}}applyEvent(e){const t=this.id;switch(e.e){case"shot":{if(e.by===t)return;const n=this.others.get(e.by);n&&(n.muzzle=.07);const i=Wt(e.o);this.sounds.push({name:_c[e.w],pos:i});for(const r of _o(Wt(e.d),e.w,e.seed))this.addTracer(i,r,e.by,!1);return}case"rocket":{if(e.by===t){const i=this.rockets.find(r=>r.own&&r.hostId===null);i&&(i.hostId=e.id);return}const n=this.others.get(e.by);n&&(n.muzzle=.07),this.rockets.push({hostId:e.id,by:e.by,pos:Wt(e.o),dir:Wt(e.d),own:!1,dead:!1,age:0}),this.sounds.push({name:"rocket",pos:Wt(e.o)});return}case"boom":{const n=this.rockets.find(i=>i.hostId===e.id&&i.by===e.by);if(n?.own&&n.dead)return;n&&(n.dead=!0),this.blast(Wt(e.p));return}case"hurt":if(e.to!==t)return;this.damageFlash=Math.min(1,.35+e.amount/80),this.damageFrom=Wt(e.from),this.sounds.push({name:"hurt"}),e.by!==t&&this.alive&&(this.body.vel.x+=e.knock[0],this.body.vel.y+=e.knock[1],this.body.vel.z+=e.knock[2],e.knock[1]>0&&(this.body.onGround=!1));return;case"hit":e.by===t&&(this.hitFlash=.18,this.sounds.push({name:"hit"}));return;case"kill":if(this.feed.unshift({killer:e.killer,victim:e.victim,w:e.w,age:0}),this.feed.length=Math.min(this.feed.length,5),e.victim===t)this.alive=!1,this.killedBy={killer:e.killer,w:e.w},this.deathTime=this.time,this.sounds.push({name:e.w==="lava"?"lava":"death"});else if(e.killer===t)this.sounds.push({name:"frag"}),this.note(`Фраг: ${this.nameOf(e.victim)}`);else{const n=this.others.get(e.victim);n&&(n.alive=!1)}return;case"spawn":if(e.id===t){this.spawn(Wt(e.p),e.yaw,e.life);return}{const n=this.others.get(e.id);n&&(n.samples=[{t:this.time,pos:Wt(e.p),yaw:e.yaw,pitch:0,stance:0,lean:0}],n.alive=!0)}return;case"pick":{const n=this.arena.items[e.item];if(!n)return;if(e.id!==t){this.sounds.push({name:"pickup",pos:n.pos});return}this.sounds.push({name:n.kind==="mega"?"mega":n.kind==="shotgun"||n.kind==="rocket"?"weapon":"pickup"}),this.note(mf[n.kind]);const i=n.kind==="shotgun"?1:n.kind==="rocket"?2:0;i&&!this.owned[i]&&(this.owned[i]=!0,this.ammo[i]=Math.max(this.ammo[i],i===1?10:8),this.weapon=i);return}case"match":this.phase=e.phase,this.winner=e.winner,e.phase==="sudden"&&(this.sounds.push({name:"sudden"}),this.note("Внезапная смерть: решает следующий фраг лидера")),e.phase==="over"&&this.sounds.push({name:e.winner===t?"win":"lose"}),e.phase==="playing"&&(this.feed=[]);return}}spawn(e,t,n){this.body=oc(e),this.body.onGround=!0,this.yaw=t,this.pitch=0,this.life=n,this.alive=!0,this.weapon=0,this.killedBy=null,this.fell=!1,this.pending=[],this.nextFire=this.time+.2,this.damageFlash=0,this.eyeOffset=sc,this.sounds.push({name:"spawn"})}note(e){this.notes.unshift({text:e,age:0}),this.notes.length=Math.min(this.notes.length,3)}look(e,t){this.yaw-=e,this.pitch=Math.max(-1.5,Math.min(1.5,this.pitch-t))}selectWeapon(e){this.owned[e]&&this.weapon!==e&&(e===0||this.ammo[e]>0)&&(this.weapon=e,this.sounds.push({name:"weapon"}))}cycleWeapon(e){for(let t=1;t<=3;t++){const n=((this.weapon+e*t)%3+3)%3;if(this.owned[n]&&(n===0||this.ammo[n]>0)){this.selectWeapon(n);return}}}update(e,t){if(this.time+=e,this.decay(e),this.connected&&this.alive&&!this.fell&&this.phase!=="over"){for(this.acc=Math.min(this.acc+e,.25);this.acc>=Xr;){this.acc-=Xr;const r=this.body.crouch,a=$d(this.arena,this.body,{...t,yaw:this.yaw},Xr);if(this.eyeOffset-=a.tuck,a.slide?this.sounds.push({name:"slide"}):this.body.crouch!==r&&this.body.onGround&&this.sounds.push({name:"crouch"}),a.jumped&&this.sounds.push({name:"jump"}),a.landed>9&&this.sounds.push({name:"land"}),a.pad>=0&&this.sounds.push({name:"pad"}),a.lava||a.out){this.fell=!0;break}}t.fire&&this.fire()}const i=this.eye.y-this.body.pos.y;this.eyeOffset+=(i-this.eyeOffset)*Math.min(1,e*14),this.poseTimer+=e,this.connected&&this.alive&&this.poseTimer>=ff&&(this.poseTimer=0,this.link.send({k:"pose",life:this.life,p:un(this.body.pos),v:un(this.body.vel),yaw:At(this.yaw),pitch:At(this.pitch),w:this.weapon,s:this.stance,l:At(this.body.lean)})),this.pingTimer+=e,this.connected&&this.pingTimer>=pf&&(this.pingTimer=0,this.link.send({k:"ping",t:performance.now()})),this.stepRockets(e)}fire(){const e=Rn[this.weapon];if(this.time<this.nextFire)return;if(this.weapon!==0&&this.ammo[this.weapon]<=0){this.nextFire=this.time+.4,this.sounds.push({name:"empty"}),this.cycleWeapon(-1);return}this.nextFire=this.time+e.interval,this.muzzle=.07,this.weapon!==0&&this.ammo[this.weapon]--;const t=++this.seq,n=Math.floor(this.random()*4294967296)>>>0,i=this.eye,r=Vd(this.yaw,this.pitch);if(this.pending.push({seq:t,w:this.weapon}),this.link.send({k:"fire",w:this.weapon,o:un(i),d:[At(r.x*1e3)/1e3,At(r.y*1e3)/1e3,At(r.z*1e3)/1e3],seed:n,lag:At(Math.min(lu,this.rtt/2+gc)),seq:t}),this.sounds.push({name:_c[this.weapon]}),this.weapon===2){this.rockets.push({hostId:null,by:this.id,pos:{...i},dir:r,own:!0,dead:!1,age:0});return}for(const a of _o(r,this.weapon,n))this.addTracer(i,a,this.id,!0)}addTracer(e,t,n,i){let r=rs(this.arena,e,t,120).t,a=!1;for(const c of this.views()){if(c.id===n||!c.alive)continue;const h=qr(this.hitboxesOf(c),e,t,r);h.t<r&&(r=h.t,a=!0)}if(!i&&this.alive){const c=qr(go(this.arena,this.posture),e,t,r);c.t<r&&(r=c.t,a=!0)}const o=ri(e,t,r),l=i?ri(ri(ri(e,be(Math.cos(this.yaw),0,-Math.sin(this.yaw)),.2),be(0,1,0),-.17),t,.7):ri(e,t,.6);this.tracers.push({from:l,to:o,color:this.colorOf(n),age:0,life:Rn[0].interval*1.2}),r<120&&this.sparks.push({pos:o,age:0,color:a?"#ff4a3a":"#ffd38a"})}stepRockets(e){for(const t of this.rockets){if(t.dead){t.age+=e;continue}t.age+=e;const n=au*e,i=n+bn;let r=rs(this.arena,t.pos,t.dir,i).t;if(t.own)for(const a of this.views()){if(!a.alive)continue;const o=qr(this.hitboxesOf(a),t.pos,t.dir,r);o.t<r&&(r=o.t)}if(r<i){const a=ri(t.pos,t.dir,Math.max(0,r-bn-.05));t.pos=a,t.dead=!0,t.own&&(this.blast(a),this.selfKnock(a));continue}t.pos=ri(t.pos,t.dir,n),t.age>10&&(t.dead=!0)}this.rockets=this.rockets.filter(t=>!t.dead||t.age<3)}selfKnock(e){if(!this.alive)return;const t=_n(this.body.crouch),n=mi(this.body.pos,0,t),i=vc(xc(eu(n,e),e)),r=hu(i);if(!r)return;const a=be(this.body.pos.x,this.body.pos.y+t/2,this.body.pos.z),o=xc(a,e),l=vc(o),c=l<.01?be(0,1,0):be(o.x/l,o.y/l,o.z/l),h=Math.min(r,200)*ou;this.body.vel=ri(this.body.vel,c,h),c.y>0&&(this.body.onGround=!1)}blast(e){this.blasts.push({pos:e,age:0}),this.sounds.push({name:"boom",pos:e})}decay(e){for(const t of[this.tracers,this.blasts,this.sparks,this.feed,this.notes])for(const n of t)n.age+=e;this.tracers=this.tracers.filter(t=>t.age<t.life),this.blasts=this.blasts.filter(t=>t.age<.7),this.sparks=this.sparks.filter(t=>t.age<.25),this.feed=this.feed.filter(t=>t.age<6),this.notes=this.notes.filter(t=>t.age<2.5),this.hitFlash=Math.max(0,this.hitFlash-e),this.damageFlash=Math.max(0,this.damageFlash-e*1.6),this.muzzle=Math.max(0,this.muzzle-e);for(const t of this.others.values())t.muzzle=Math.max(0,t.muzzle-e)}views(){const e=this.time-gc,t=[];for(const[n,i]of this.others){const r=i.samples;if(!r.length)continue;let a=r[0],o=r[r.length-1];for(let h=1;h<r.length;h++)if(r[h].t>=e){a=r[h-1],o=r[h];break}const l=o.t>a.t?Math.max(0,Math.min(1,(e-a.t)/(o.t-a.t))):1;let c=o.yaw-a.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;t.push({id:n,name:this.nameOf(n),color:this.colorOf(n),pos:be(a.pos.x+(o.pos.x-a.pos.x)*l,a.pos.y+(o.pos.y-a.pos.y)*l,a.pos.z+(o.pos.z-a.pos.z)*l),yaw:a.yaw+c*l,pitch:a.pitch+(o.pitch-a.pitch)*l,stance:l<.5?a.stance:o.stance,lean:a.lean+(o.lean-a.lean)*l,weapon:i.weapon,alive:i.alive,muzzle:i.muzzle})}return t}hitboxesOf(e){return go(this.arena,{pos:e.pos,crouch:e.stance>0,lean:e.lean,yaw:e.yaw})}scores(){return this.rows.map(e=>({id:e[0],name:this.nameOf(e[0]),color:this.colorOf(e[0]),frags:e[10],deaths:e[11],self:e[0]===this.id})).sort((e,t)=>t.frags-e.frags||e.deaths-t.deaths)}standing(){const e=this.scores(),t=e.findIndex(r=>r.self)+1,n=e.find(r=>r.self)?.frags??0,i=e.filter(r=>!r.self)[0];return{place:t||1,total:e.length||1,gap:i?n-i.frags:0}}itemAvailable(e){return this.items[e]!=="0"}respawnIn(){return Math.max(0,2-(this.time-this.deathTime))}itemName(e){return cu[e].name}}const _f="shelter-arcade-spire-v1",xf="lobby",yc=s=>"s-"+s,vf=["wss://nos.lol","wss://relay.primal.net","wss://nostr.mom","wss://relay.snort.social","wss://nostr.oxtr.dev","wss://relay.nostr.net"],os=()=>{};function du(s){return{selfId:s,onMessage:os,onJoin:os,onLeave:os}}async function yf(){const{joinRoom:s,selfId:e}=await Jh(async()=>{const{joinRoom:n,selfId:i}=await import("./index-DZotLEGE.js");return{joinRoom:n,selfId:i}},[],import.meta.url),t=new Map;return{selfId:e,kind:"public",join(n){let i=null,r=null,a=!1;const o={...du(e),send(c,h){r&&r.send(c,h?{target:h}:void 0).catch(os)},ping:c=>i?i.ping(c):Promise.reject(new Error("Комната ещё не открыта")),leave(){if(a)return;a=!0;const c=(async()=>{await l,i&&await i.leave().catch(os)})();t.set(n,c),c.finally(()=>{t.get(n)===c&&t.delete(n)})}},l=(t.get(n)??Promise.resolve()).then(()=>{if(a)return;const c=s({appId:_f,relayConfig:{urls:vf}},n),h=c.makeAction("m");h.onMessage=(d,u)=>o.onMessage(d,u.peerId),c.onPeerJoin=d=>o.onJoin(d),c.onPeerLeave=d=>o.onLeave(d),i=c,r=h});return o}}}function Mf(){const s=Math.random().toString(36).slice(2,10);return{selfId:s,kind:"local",join(e){const t=new BroadcastChannel("spire-local-"+e),n=new Map,i=new Map;let r=!1,a=0;const o=(u,f={})=>{r||t.postMessage({type:u,from:s,...f})},l={...du(s),send(u,f){o("m",{to:f,data:u})},ping(u){const f=++a,g=performance.now();return new Promise(y=>{i.set(f,()=>y(performance.now()-g)),o("ping",{to:u,id:f})})},leave(){o("bye"),r=!0,clearInterval(h),t.close(),removeEventListener("pagehide",d)}},c=u=>{const f=n.has(u);n.set(u,performance.now()),f||l.onJoin(u)};t.onmessage=({data:u})=>{if(!(r||u.from===s||u.to&&u.to!==s)){if(u.type==="hi"){c(u.from),o("here",{to:u.from});return}if(u.type==="bye"){n.delete(u.from)&&l.onLeave(u.from);return}c(u.from),u.type==="m"&&l.onMessage(u.data,u.from),u.type==="ping"&&o("pong",{to:u.from,id:u.id}),u.type==="pong"&&i.get(u.id)?.(0)}};const h=setInterval(()=>{o("beat");const u=performance.now();for(const[f,g]of n)u-g>4e3&&(n.delete(f),l.onLeave(f))},1e3),d=()=>o("bye");return addEventListener("pagehide",d),queueMicrotask(()=>o("hi")),l}}}const Sf=s=>s&&typeof s.code=="string"&&/^[A-Z0-9]{6}$/.test(s.code)&&typeof s.name=="string"&&typeof s.host=="string"&&Number.isInteger(s.players)&&Number.isInteger(s.max)&&Number.isInteger(s.fragLimit)&&s.protocol===Hs;class bf{sessions=new Map;onChange=os;channel;own=null;timer;constructor(e){this.channel=e.join(xf),this.channel.onJoin=t=>{this.own&&this.channel.send({t:"ann",info:this.own},t)},this.channel.onLeave=t=>{let n=!1;for(const[i,r]of this.sessions)r.peer===t&&(this.sessions.delete(i),n=!0);n&&this.onChange()},this.channel.onMessage=(t,n)=>{const i=t;if(i?.t==="gone"){this.sessions.get(i.code)?.peer===n&&(this.sessions.delete(i.code),this.onChange());return}if(i?.t!=="ann"||!Sf(i.info))return;const r=this.sessions.get(i.info.code);this.sessions.set(i.info.code,{...i.info,name:i.info.name.slice(0,40),host:i.info.host.slice(0,24),peer:n,seen:performance.now(),ping:r?.ping??null}),r||this.measure(i.info.code,n),this.onChange()},this.timer=setInterval(()=>{this.own&&this.channel.send({t:"ann",info:this.own});const t=performance.now();let n=!1;for(const[i,r]of this.sessions)t-r.seen>9e3&&(this.sessions.delete(i),n=!0);n&&this.onChange()},2500)}announce(e){!e&&this.own&&this.channel.send({t:"gone",code:this.own.code});const t=e&&(!this.own||JSON.stringify(e)!==JSON.stringify(this.own));this.own=e,t&&this.channel.send({t:"ann",info:e})}async measure(e,t){try{const n=await Promise.race([this.channel.ping(t),new Promise((r,a)=>setTimeout(()=>a(new Error("timeout")),5e3))]),i=this.sessions.get(e);i&&(i.ping=Math.round(n),this.onChange())}catch{}}close(){this.announce(null),clearInterval(this.timer),this.channel.leave()}}const Mc="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function Ef(s=Math.random){let e="";for(let t=0;t<6;t++)e+=Mc[Math.floor(s()*Mc.length)];return e}const Ta=s=>{const e=s.toUpperCase().replace(/[^A-Z0-9]/g,"").match(/[A-Z0-9]{6}$/);return e?e[0]:null};function wf(s,e){try{const t=URL.createObjectURL(new Blob([`setInterval(()=>postMessage(0),${Math.round(1e3/s)})`],{type:"text/javascript"})),n=new Worker(t);return n.onmessage=()=>e(),()=>{n.terminate(),URL.revokeObjectURL(t)}}catch{const t=setInterval(e,1e3/s);return()=>clearInterval(t)}}const Sc=60,Tf=3;class Af{game;link;onRoster=()=>{};options;code;ticks=0;stopTicker=()=>{};channel;hostName;local;constructor(e,t,n,i,r,a){this.channel=e,this.options=n,this.code=i,this.hostName=r,this.local=a,this.game=new df(t,n),this.link={send:o=>this.handle(e.selfId,o)},e.onMessage=(o,l)=>this.handle(l,o),e.onLeave=o=>{this.game.players.has(o)&&(this.game.leave(o),this.roster())}}start(){this.handle(this.channel.selfId,{k:"hello",name:this.hostName,protocol:Hs}),this.stopTicker=wf(Sc,()=>this.tick())}tick(){this.game.step(1/Sc);const e=this.game.drain();e.length&&this.deliver({k:"ev",list:e}),++this.ticks%Tf===0&&this.deliver(this.game.snapshot())}info(){return{code:this.code,name:this.options.name,host:this.hostName,players:this.game.players.size,max:this.options.maxPlayers,fragLimit:this.options.fragLimit,protocol:Hs}}close(){this.stopTicker(),this.channel.leave()}handle(e,t){if(!(!t||typeof t!="object"))switch(t.k){case"hello":{if(t.protocol!==Hs){this.deliver({k:"reject",reason:"protocol"},e);return}const n=this.game.join(e,String(t.name??""));if(n==="full"){this.deliver({k:"reject",reason:"full"},e);return}this.deliver({k:"welcome",id:e,name:n.name,color:n.color,options:this.options},e),this.roster(),this.deliver(this.game.snapshot(),e);return}case"pose":this.game.pose(e,t);return;case"fire":this.game.fire(e,t);return;case"ping":this.deliver({k:"pong",t:t.t},e);return}}roster(){this.deliver({k:"roster",players:this.game.roster()}),this.onRoster()}deliver(e,t){(!t||t===this.channel.selfId)&&this.local.receive(e),t!==this.channel.selfId&&this.channel.send(e,t)}}class Rf{hostId=null;link;onFail=()=>{};onHostLeft=()=>{};timer;channel;name;constructor(e,t,n,i=25e3){this.channel=e,this.name=t,this.link={send:r=>{this.hostId&&e.send(r,this.hostId)}},e.onJoin=r=>{this.hostId||e.send({k:"hello",name:this.name,protocol:Hs},r)},e.onLeave=r=>{r===this.hostId&&this.onHostLeft()},e.onMessage=(r,a)=>{const o=r;if(!(!o||typeof o!="object")){if(!this.hostId){o.k==="welcome"?(this.hostId=a,clearTimeout(this.timer),n.receive(o)):o.k==="reject"&&(clearTimeout(this.timer),this.onFail(o.reason));return}a===this.hostId&&n.receive(o)}},this.timer=setTimeout(()=>{this.hostId||this.onFail("timeout")},i)}close(){clearTimeout(this.timer),this.channel.leave()}}const dl="186",Cf=0,bc=1,Pf=2,Vs=1,Lf=2,Bs=3,gi=0,Xt=1,Tn=2,$n=0,ls=1,Ti=2,Ec=3,wc=4,If=5,ns=100,Nf=101,Df=102,Uf=103,Ff=104,Of=200,kf=201,Bf=202,zf=203,fu=204,pu=205,Gf=206,Hf=207,Vf=208,Wf=209,Xf=210,qf=211,Yf=212,Kf=213,$f=214,xo=0,vo=1,yo=2,Ks=3,Mo=4,So=5,bo=6,Eo=7,mu=0,Zf=1,Jf=2,Ln=0,gu=1,_u=2,xu=3,ma=4,vu=5,yu=6,Mu=7,Tc="attached",jf="detached",Su=300,Pi=301,ps=302,Aa=303,Ra=304,ga=306,an=1e3,Cn=1001,ta=1002,Pt=1003,bu=1004,zs=1005,Lt=1006,Yr=1007,qn=1008,Zt=1009,Eu=1010,wu=1011,$s=1012,fl=1013,In=1014,sn=1015,Nn=1016,pl=1017,ml=1018,Zs=1020,Tu=35902,Au=35899,Ru=1021,Cu=1022,rn=1023,jn=1026,Ri=1027,gl=1028,_l=1029,Li=1030,xl=1031,vl=1033,Kr=33776,$r=33777,Zr=33778,Jr=33779,wo=35840,To=35841,Ao=35842,Ro=35843,Co=36196,Po=37492,Lo=37496,Io=37488,No=37489,na=37490,Do=37491,Uo=37808,Fo=37809,Oo=37810,ko=37811,Bo=37812,zo=37813,Go=37814,Ho=37815,Vo=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,Ko=37821,$o=36492,Zo=36494,Jo=36495,jo=36283,Qo=36284,ia=36285,el=36286,Js=2300,js=2301,Ca=2302,Ac=2303,Rc=2400,Cc=2401,Pc=2402,Qf=2500,ep=0,Pu=1,tl=2,tp=3200,nl=0,np=1,Xn="",yt="srgb",Jt="srgb-linear",sa="linear",rt="srgb",Pa=7680,ip=519,sp=512,rp=513,ap=514,yl=515,op=516,lp=517,Ml=518,cp=519,Lu=35044,hp=35048,Lc="300 es",Pn=2e3,Qs=2001;function up(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function dp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fp(){const s=er("canvas");return s.style.display="block",s}const Ic={};function ra(...s){const e="THREE."+s.shift();console.log(e,...s)}function Iu(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Pe(...s){s=Iu(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ue(...s){s=Iu(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function cs(...s){const e=s.join(" ");e in Ic||(Ic[e]=!0,Pe(...s))}function pp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const mp={[xo]:vo,[yo]:bo,[Mo]:Eo,[Ks]:So,[vo]:xo,[bo]:yo,[Eo]:Mo,[So]:Ks};class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nc=1234567;const Ws=Math.PI/180,ms=180/Math.PI;function pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function je(s,e,t){return Math.max(e,Math.min(t,s))}function Sl(s,e){return(s%e+e)%e}function gp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function _p(s,e,t){return s!==e?(t-s)/(e-s):0}function Xs(s,e,t){return(1-t)*s+t*e}function xp(s,e,t,n){return Xs(s,e,1-Math.exp(-t*n))}function vp(s,e=1){return e-Math.abs(Sl(s,e*2)-e)}function yp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Mp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Sp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function bp(s,e){return s+Math.random()*(e-s)}function Ep(s){return s*(.5-Math.random())}function wp(s){s!==void 0&&(Nc=s);let e=Nc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tp(s){return s*Ws}function Ap(s){return s*ms}function Rp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Cp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lp(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const aa={DEG2RAD:Ws,RAD2DEG:ms,generateUUID:pn,clamp:je,euclideanModulo:Sl,mapLinear:gp,inverseLerp:_p,lerp:Xs,damp:xp,pingpong:vp,smoothstep:yp,smootherstep:Mp,randInt:Sp,randFloat:bp,randFloatSpread:Ep,seededRandom:wp,degToRad:Tp,radToDeg:Ap,isPowerOfTwo:Rp,ceilPowerOfTwo:Cp,floorPowerOfTwo:Pp,setQuaternionFromProperEuler:Lp,normalize:at,denormalize:fn},Bl=class Bl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bl.prototype.isVector2=!0;let Fe=Bl;class ei{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zl=class zl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zl.prototype.isVector3=!0;let D=zl;const La=new D,Dc=new ei,Gl=class Gl{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=i[0],m=i[3],p=i[6],M=i[1],w=i[4],v=i[7],b=i[2],E=i[5],R=i[8];return r[0]=a*y+o*M+l*b,r[3]=a*m+o*w+l*E,r[6]=a*p+o*v+l*R,r[1]=c*y+h*M+d*b,r[4]=c*m+h*w+d*E,r[7]=c*p+h*v+d*R,r[2]=u*y+f*M+g*b,r[5]=u*m+f*w+g*E,r[8]=u*p+f*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(i*c-h*n)*y,e[2]=(o*n-i*a)*y,e[3]=u*y,e[4]=(h*t-i*l)*y,e[5]=(i*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gl.prototype.isMatrix3=!0;let ke=Gl;const Ia=new ke,Uc=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ip(){const s={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?sa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Jt]:{primaries:e,whitePoint:n,transfer:sa,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),s}const Je=Ip();function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fi;class Np{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fi===void 0&&(Fi=er("canvas")),Fi.width=e.width,Fi.height=e.height;const i=Fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dp=0;class bl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Na(i[a].image)):r.push(Na(i[a]))}else r=Na(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Na(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Np.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Up=0;const Da=new D;class Ct extends Ii{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Cn,i=Cn,r=Lt,a=qn,o=rn,l=Zt,c=Ct.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=pn(),this.name="",this.source=new bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Da).x}get height(){return this.source.getSize(Da).y}get depth(){return this.source.getSize(Da).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case an:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case an:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Su;Ct.DEFAULT_ANISOTROPY=1;const Hl=class Hl{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,v=(f+1)/2,b=(p+1)/2,E=(h+u)/4,R=(d+y)/4,_=(g+m)/4;return w>v&&w>b?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=R/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=_/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=R/r,i=_/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hl.prototype.isVector4=!0;let ut=Hl;class Fp extends Ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Ct(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new bl(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Fp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nu extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Op extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const pa=class pa{constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,y,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pa().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kp,e,Bp)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ai.crossVectors(n,Kt),ai.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ai.crossVectors(n,Kt)),ai.normalize(),fr.crossVectors(Kt,ai),i[0]=ai.x,i[4]=fr.x,i[8]=Kt.x,i[1]=ai.y,i[5]=fr.y,i[9]=Kt.y,i[2]=ai.z,i[6]=fr.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],M=n[3],w=n[7],v=n[11],b=n[15],E=i[0],R=i[4],_=i[8],T=i[12],P=i[1],L=i[5],U=i[9],B=i[13],I=i[2],z=i[6],V=i[10],W=i[14],te=i[3],Y=i[7],K=i[11],J=i[15];return r[0]=a*E+o*P+l*I+c*te,r[4]=a*R+o*L+l*z+c*Y,r[8]=a*_+o*U+l*V+c*K,r[12]=a*T+o*B+l*W+c*J,r[1]=h*E+d*P+u*I+f*te,r[5]=h*R+d*L+u*z+f*Y,r[9]=h*_+d*U+u*V+f*K,r[13]=h*T+d*B+u*W+f*J,r[2]=g*E+y*P+m*I+p*te,r[6]=g*R+y*L+m*z+p*Y,r[10]=g*_+y*U+m*V+p*K,r[14]=g*T+y*B+m*W+p*J,r[3]=M*E+w*P+v*I+b*te,r[7]=M*R+w*L+v*z+b*Y,r[11]=M*_+w*U+v*V+b*K,r[15]=M*T+w*B+v*W+b*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],M=l*f-c*u,w=o*f-c*d,v=o*u-l*d,b=a*f-c*h,E=a*u-l*h,R=a*d-o*h;return t*(y*M-m*w+p*v)-n*(g*M-m*b+p*E)+i*(g*w-y*b+p*R)-r*(g*v-y*E+m*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],M=t*o-n*a,w=t*l-i*a,v=t*c-r*a,b=n*l-i*o,E=n*c-r*o,R=i*c-r*l,_=h*y-d*g,T=h*m-u*g,P=h*p-f*g,L=d*m-u*y,U=d*p-f*y,B=u*p-f*m,I=M*B-w*U+v*L+b*P-E*T+R*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=(o*B-l*U+c*L)*z,e[1]=(i*U-n*B-r*L)*z,e[2]=(y*R-m*E+p*b)*z,e[3]=(u*E-d*R-f*b)*z,e[4]=(l*P-a*B-c*T)*z,e[5]=(t*B-i*P+r*T)*z,e[6]=(m*v-g*R-p*w)*z,e[7]=(h*R-u*v+f*w)*z,e[8]=(a*U-o*P+c*_)*z,e[9]=(n*P-t*U-r*_)*z,e[10]=(g*E-y*v+p*M)*z,e[11]=(d*v-h*E-f*M)*z,e[12]=(o*T-a*L-l*_)*z,e[13]=(t*L-n*T+i*_)*z,e[14]=(y*w-g*b-m*M)*z,e[15]=(h*b-d*w+u*M)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,M=l*c,w=l*h,v=l*d,b=n.x,E=n.y,R=n.z;return i[0]=(1-(y+p))*b,i[1]=(f+v)*b,i[2]=(g-w)*b,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(u+p))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+w)*R,i[9]=(m-M)*R,i[10]=(1-(u+y))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Oi.set(i[0],i[1],i[2]).length();const o=Oi.set(i[4],i[5],i[6]).length(),l=Oi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),ln.copy(this);const c=1/a,h=1/o,d=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Pn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Pn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Qs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Pn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Pn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Qs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};pa.prototype.isMatrix4=!0;let He=pa;const Oi=new D,ln=new He,kp=new D(0,0,0),Bp=new D(1,1,1),ai=new D,fr=new D,Kt=new D,Oc=new He,kc=new ei;class _i{constructor(e=0,t=0,n=0,i=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kc.setFromEuler(this),this.setFromQuaternion(kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zp=0;const Bc=new D,ki=new ei,On=new He,pr=new D,ws=new D,Gp=new D,Hp=new ei,zc=new D(1,0,0),Gc=new D(0,1,0),Hc=new D(0,0,1),Vc={type:"added"},Vp={type:"removed"},Bi={type:"childadded",child:null},Ua={type:"childremoved",child:null};class gt extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new D,t=new _i,n=new ei,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new ke}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(zc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Hc,e)}translateOnAxis(e,t){return Bc.copy(e).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pr.copy(e):pr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(ws,pr,this.up):On.lookAt(pr,ws,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),ki.setFromRotationMatrix(On),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vp),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}gt.DEFAULT_UP=new D(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Oa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Sl(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Oa(a,r,e+1/3),this.g=Oa(a,r,e),this.b=Oa(a,r,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=Uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Je.workingToColorSpace(kt.copy(this),e),Math.round(je(kt.r*255,0,255))*65536+Math.round(je(kt.g*255,0,255))*256+Math.round(je(kt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,r=kt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=yt){Je.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(mr);const n=Xs(oi.h,mr.h,t),i=Xs(oi.s,mr.s,t),r=Xs(oi.l,mr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new De;De.NAMES=Uu;class El{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new El(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new wl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class oa extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const cn=new D,kn=new D,ka=new D,Bn=new D,zi=new D,Gi=new D,Wc=new D,Ba=new D,za=new D,Ga=new D,Ha=new ut,Va=new ut,Wa=new ut;class nn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){cn.subVectors(i,t),kn.subVectors(n,t),ka.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(kn),l=cn.dot(ka),c=kn.dot(kn),h=kn.dot(ka),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ha.setScalar(0),Va.setScalar(0),Wa.setScalar(0),Ha.fromBufferAttribute(e,t),Va.fromBufferAttribute(e,n),Wa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ha,r.x),a.addScaledVector(Va,r.y),a.addScaledVector(Wa,r.z),a}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),kn.subVectors(e,t),cn.cross(kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),cn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;zi.subVectors(i,n),Gi.subVectors(r,n),Ba.subVectors(e,n);const l=zi.dot(Ba),c=Gi.dot(Ba);if(l<=0&&c<=0)return t.copy(n);za.subVectors(e,i);const h=zi.dot(za),d=Gi.dot(za);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(zi,a);Ga.subVectors(e,r);const f=zi.dot(Ga),g=Gi.dot(Ga);if(g>=0&&f<=g)return t.copy(r);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gi,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Wc.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Wc,o);const p=1/(m+y+u);return a=y*p,o=u*p,t.copy(n).addScaledVector(zi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ti{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),_r.subVectors(this.max,Ts),Hi.subVectors(e.a,Ts),Vi.subVectors(e.b,Ts),Wi.subVectors(e.c,Ts),li.subVectors(Vi,Hi),ci.subVectors(Wi,Vi),vi.subVectors(Hi,Wi);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-vi.z,vi.y,li.z,0,-li.x,ci.z,0,-ci.x,vi.z,0,-vi.x,-li.y,li.x,0,-ci.y,ci.x,0,-vi.y,vi.x,0];return!Xa(t,Hi,Vi,Wi,_r)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,Hi,Vi,Wi,_r))?!1:(xr.crossVectors(li,ci),t=[xr.x,xr.y,xr.z],Xa(t,Hi,Vi,Wi,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new D,new D,new D,new D,new D,new D,new D,new D],hn=new D,gr=new ti,Hi=new D,Vi=new D,Wi=new D,li=new D,ci=new D,vi=new D,Ts=new D,_r=new D,xr=new D,yi=new D;function Xa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){yi.fromArray(s,r);const o=i.x*Math.abs(yi.x)+i.y*Math.abs(yi.y)+i.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Tt=new D,vr=new Fe;let Xp=0;class qt extends Ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lu,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Fu extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ou extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const qp=new ti,As=new D,qa=new D;class Un{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(qa)),this.expandByPoint(As.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Yp=0;const en=new He,Ya=new gt,Xi=new D,$t=new ti,Rs=new ti,Dt=new D;class Et extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?Ou:Fu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors($t.min,Rs.min),$t.expandByPoint(Dt),Dt.addVectors($t.max,Rs.max),$t.expandByPoint(Dt)):($t.expandByPoint(Rs.min),$t.expandByPoint(Rs.max))}$t.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(e,c),Dt.add(Xi)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new D,l[_]=new D;const c=new D,h=new D,d=new D,u=new Fe,f=new Fe,g=new Fe,y=new D,m=new D;function p(_,T,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[_].add(y),o[T].add(y),o[P].add(y),l[_].add(m),l[T].add(m),l[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,T=M.length;_<T;++_){const P=M[_],L=P.start,U=P.count;for(let B=L,I=L+U;B<I;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new D,v=new D,b=new D,E=new D;function R(_){b.fromBufferAttribute(i,_),E.copy(b);const T=o[_];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(E,T);const L=v.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,L)}for(let _=0,T=M.length;_<T;++_){const P=M[_],L=P.start,U=P.count;for(let B=L,I=L+U;B<I;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new qt(u,h,d)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ku{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lu,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const zt=new D;class tr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ka=new D,Kp=new D,$p=new ke;class fi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ka.subVectors(n,t).cross(Kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Ka),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$p.getNormalMatrix(e),i=this.coplanarPoint(Ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Zp=0;class gn extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=ls,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=pu,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new fi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bu extends gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qi;const Cs=new D,Yi=new D,Ki=new D,$i=new Fe,Ps=new Fe,zu=new He,yr=new D,Ls=new D,Mr=new D,Xc=new Fe,$a=new Fe,qc=new Fe;class Jp extends gt{constructor(e=new Bu){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ku(t,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new tr(n,3,0,!1)),qi.setAttribute("uv",new tr(n,2,3,!1))}this.geometry=qi,this.material=e,this.center=new Fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),zu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-Ki.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Sr(yr.set(-.5,-.5,0),Ki,a,Yi,i,r),Sr(Ls.set(.5,-.5,0),Ki,a,Yi,i,r),Sr(Mr.set(.5,.5,0),Ki,a,Yi,i,r),Xc.set(0,0),$a.set(1,0),qc.set(1,1);let o=e.ray.intersectTriangle(yr,Ls,Mr,!1,Cs);if(o===null&&(Sr(Ls.set(-.5,.5,0),Ki,a,Yi,i,r),$a.set(0,1),o=e.ray.intersectTriangle(yr,Mr,Ls,!1,Cs),o===null))return;const l=e.ray.origin.distanceTo(Cs);l<e.near||l>e.far||t.push({distance:l,point:Cs.clone(),uv:nn.getInterpolation(Cs,yr,Ls,Mr,Xc,$a,qc,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sr(s,e,t,n,i,r){$i.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ps.x=r*$i.x-i*$i.y,Ps.y=i*$i.x+r*$i.y):Ps.copy($i),s.copy(e),s.x+=Ps.x,s.y+=Ps.y,s.applyMatrix4(zu)}const Gn=new D,Za=new D,br=new D,Er=new D;class _a{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Za.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(Za);const r=e.distanceTo(t)*.5,a=-this.direction.dot(br),o=Er.dot(this.direction),l=-Er.dot(br),c=Er.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Za).addScaledVector(br,u),f}intersectSphere(e,t){if(e.radius<0)return null;Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,w=n.z-a.z,v=Math.abs(l),b=Math.abs(c),E=Math.abs(h);let R,_,T,P,L,U,B,I,z,V,W,te;if(v>=b&&v>=E?(T=l,U=d,z=g,te=p,l>=0?(R=c,_=h,P=u,L=f,B=y,I=m,V=M,W=w):(R=h,_=c,P=f,L=u,B=m,I=y,V=w,W=M)):b>=E?(T=c,U=u,z=y,te=M,c>=0?(R=h,_=l,P=f,L=d,B=m,I=g,V=w,W=p):(R=l,_=h,P=d,L=f,B=g,I=m,V=p,W=w)):(T=h,U=f,z=m,te=w,h>=0?(R=l,_=c,P=d,L=u,B=g,I=y,V=p,W=M):(R=c,_=l,P=u,L=d,B=y,I=g,V=M,W=p)),T===0)return null;const Y=R/T,K=_/T,J=1/T,Ee=P-Y*U,xe=L-K*U,Xe=B-Y*z,qe=I-K*z,Be=V-Y*te,Z=W-K*te,Q=Be*qe-Z*Xe,me=Ee*Z-xe*Be,Oe=Xe*xe-qe*Ee;if(i){if(Q<0||me<0||Oe<0)return null}else if((Q<0||me<0||Oe<0)&&(Q>0||me>0||Oe>0))return null;const ge=Q+me+Oe;if(ge===0)return null;const ze=J*(Q*U+me*z+Oe*te);return(ge>0?ze<0:ze>0)?null:this.at(ze/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yc=new He,Mi=new _a,wr=new Un,Kc=new D,Tr=new D,Ar=new D,Rr=new D,Ja=new D,Cr=new D,$c=new D,Pr=new D;class it extends gt{constructor(e=new Et,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ja.fromBufferAttribute(d,e),a?Cr.addScaledVector(Ja,h):Cr.addScaledVector(Ja.sub(t),h))}t.add(Cr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(wr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(wr,Kc)===null||Mi.origin.distanceToSquared(Kc)>(e.far-e.near)**2))&&(Yc.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(Yc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=w;v<b;v+=3){const E=o.getX(v),R=o.getX(v+1),_=o.getX(v+2);i=Lr(this,p,e,n,c,h,d,E,R,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const M=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);i=Lr(this,a,e,n,c,h,d,M,w,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=w;v<b;v+=3){const E=v,R=v+1,_=v+2;i=Lr(this,p,e,n,c,h,d,E,R,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const M=m,w=m+1,v=m+2;i=Lr(this,a,e,n,c,h,d,M,w,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function jp(s,e,t,n,i,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===gi,o),l===null)return null;Pr.copy(o),Pr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Pr);return c<t.near||c>t.far?null:{distance:c,point:Pr.clone(),object:s}}function Lr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Tr),s.getVertexPosition(l,Ar),s.getVertexPosition(c,Rr);const h=jp(s,e,t,n,Tr,Ar,Rr,$c);if(h){const d=new D;nn.getBarycoord($c,Tr,Ar,Rr,d),i&&(h.uv=nn.getInterpolatedAttribute(i,o,l,c,d,new Fe)),r&&(h.uv1=nn.getInterpolatedAttribute(r,o,l,c,d,new Fe)),a&&(h.normal=nn.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};nn.getNormal(Tr,Ar,Rr,u.normal),h.face=u,h.barycoord=d}return h}const Is=new ut,Zc=new ut,Jc=new ut,Qp=new ut,jc=new He,Ir=new D,ja=new Un,Qc=new He,Qa=new _a;class em extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tc,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ir),this.boundingBox.expandByPoint(Ir)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ir),this.boundingSphere.expandByPoint(Ir)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ja.copy(this.boundingSphere),ja.applyMatrix4(i),e.ray.intersectsSphere(ja)!==!1&&(Qc.copy(i).invert(),Qa.copy(e.ray).applyMatrix4(Qc),!(this.boundingBox!==null&&Qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Zc.fromBufferAttribute(i.attributes.skinIndex,e),Jc.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Is.copy(t),t.set(0,0,0,0)):(Is.set(...t,1),t.set(0,0,0)),Is.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Jc.getComponent(r);if(a!==0){const o=Zc.getComponent(r);jc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qp.copy(Is).applyMatrix4(jc),a)}}return t.isVector4&&(t.w=Is.w),t.applyMatrix4(this.bindMatrixInverse)}}class Gu extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tl extends Ct{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Pt,h=Pt,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new He,tm=new He;class Al{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:tm;eh.multiplyMatrices(o,t[r]),eh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Al(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tl(t,e,e,rn,sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Pe("Skeleton: No bone found with UUID:",r),a=new Gu),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class la extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zi=new He,th=new He,Nr=[],nh=new ti,nm=new He,Ns=new it,Ds=new Un;class Hu extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new la(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,nm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),nh.copy(e.boundingBox).applyMatrix4(Zi),this.boundingBox.union(nh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),Ds.copy(e.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),e.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zi),th.multiplyMatrices(n,Zi),Ns.matrixWorld=th,Ns.raycast(e,Nr);for(let a=0,o=Nr.length;a<o;a++){const l=Nr[a];l.instanceId=r,l.object=this,t.push(l)}Nr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new la(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tl(new Float32Array(i*this.count),i,this.count,gl,sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Si=new Un,im=new Fe(.5,.5),Dr=new D;class Rl{constructor(e=new fi,t=new fi,n=new fi,i=new fi,r=new fi,a=new fi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],w=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-a,f-h,p-g,b-M).normalize(),i[1].setComponents(c+a,f+h,p+g,b+M).normalize(),i[2].setComponents(c+o,f+d,p+y,b+w).normalize(),i[3].setComponents(c-o,f-d,p-y,b-w).normalize(),n)i[4].setComponents(l,u,m,v).normalize(),i[5].setComponents(c-l,f-u,p-m,b-v).normalize();else if(i[4].setComponents(c-l,f-u,p-m,b-v).normalize(),t===Pn)i[5].setComponents(c+l,f+u,p+m,b+v).normalize();else if(t===Qs)i[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=im.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Dr.x=i.normal.x>0?e.max.x:e.min.x,Dr.y=i.normal.y>0?e.max.y:e.min.y,Dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vu extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ca=new D,ha=new D,ih=new He,Us=new _a,Ur=new Un,eo=new D,sh=new D;class Cl extends gt{constructor(e=new Et,t=new Vu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ca.fromBufferAttribute(t,i-1),ha.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ca.distanceTo(ha);e.setAttribute("lineDistance",new st(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=r,e.ray.intersectsSphere(Ur)===!1)return;ih.copy(i).invert(),Us.copy(e.ray).applyMatrix4(ih);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){const p=h.getX(y),M=h.getX(y+1),w=Fr(this,e,Us,l,p,M,y);w&&t.push(w)}if(this.isLineLoop){const y=h.getX(g-1),m=h.getX(f),p=Fr(this,e,Us,l,y,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){const p=Fr(this,e,Us,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=Fr(this,e,Us,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(ca.fromBufferAttribute(o,i),ha.fromBufferAttribute(o,r),t.distanceSqToSegment(ca,ha,eo,sh)>n)return;eo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(eo);if(!(c<e.near||c>e.far))return{distance:c,point:sh.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const rh=new D,ah=new D;class sm extends Cl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)rh.fromBufferAttribute(t,i),ah.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rh.distanceTo(ah);e.setAttribute("lineDistance",new st(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rm extends Cl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pl extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oh=new He,il=new _a,Or=new Un,kr=new D;class Ll extends gt{constructor(e=new Et,t=new Pl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;oh.copy(i).invert(),il.copy(e.ray).applyMatrix4(oh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,y=f;g<y;g++){const m=c.getX(g);kr.fromBufferAttribute(d,m),lh(kr,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,y=f;g<y;g++)kr.fromBufferAttribute(d,g),lh(kr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lh(s,e,t,n,i,r,a){const o=il.distanceSqToPoint(s);if(o<t){const l=new D;il.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wu extends Ct{constructor(e=[],t=Pi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class to extends Ct{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nr extends Ct{constructor(e,t,n=In,i,r,a,o=Pt,l=Pt,c,h=jn,d=1){if(h!==jn&&h!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class am extends nr{constructor(e,t=In,n=Pi,i,r,a=Pt,o=Pt,l,c=jn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xu extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qn extends Et{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function g(y,m,p,M,w,v,b,E,R,_,T){const P=v/R,L=b/_,U=v/2,B=b/2,I=E/2,z=R+1,V=_+1;let W=0,te=0;const Y=new D;for(let K=0;K<V;K++){const J=K*L-B;for(let Ee=0;Ee<z;Ee++){const xe=Ee*P-U;Y[y]=xe*M,Y[m]=J*w,Y[p]=I,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Ee/R),d.push(1-K/_),W+=1}}for(let K=0;K<_;K++)for(let J=0;J<R;J++){const Ee=u+J+z*K,xe=u+J+z*(K+1),Xe=u+(J+1)+z*(K+1),qe=u+(J+1)+z*K;l.push(Ee,xe,qe),l.push(xe,Xe,qe),te+=6}o.addGroup(f,te,T),f+=te,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Il extends Et{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=n*2+r,y=i+1,m=new D,p=new D;for(let M=0;M<=g;M++){let w=0,v=0,b=0,E=0;if(M<=n){const T=M/n,P=T*Math.PI/2;v=-h-e*Math.cos(P),b=e*Math.sin(P),E=-e*Math.cos(P),w=T*d}else if(M<=n+r){const T=(M-n)/r;v=-h+T*t,b=e,E=0,w=d+T*u}else{const T=(M-n-r)/n,P=T*Math.PI/2;v=h+e*Math.sin(P),b=e*Math.cos(P),E=e*Math.sin(P),w=d+u+T*d}const R=Math.max(0,Math.min(1,w/f));let _=0;M===0?_=.5/i:M===g&&(_=-.5/i);for(let T=0;T<=i;T++){const P=T/i,L=P*Math.PI*2,U=Math.sin(L),B=Math.cos(L);p.x=-b*B,p.y=v,p.z=b*U,o.push(p.x,p.y,p.z),m.set(-b*B,E,b*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+_,R)}if(M>0){const T=(M-1)*y;for(let P=0;P<i;P++){const L=T+P,U=T+P+1,B=M*y+P,I=M*y+P+1;a.push(L,U,B),a.push(U,I,B)}}}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Vn extends Et{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const y=[],m=n/2;let p=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(f,2));function M(){const v=new D,b=new D;let E=0;const R=(t-e)/n;for(let _=0;_<=r;_++){const T=[],P=_/r,L=P*(t-e)+e;for(let U=0;U<=i;U++){const B=U/i,I=B*l+o,z=Math.sin(I),V=Math.cos(I);b.x=L*z,b.y=-P*n+m,b.z=L*V,d.push(b.x,b.y,b.z),v.set(z,R,V).normalize(),u.push(v.x,v.y,v.z),f.push(B,1-P),T.push(g++)}y.push(T)}for(let _=0;_<i;_++)for(let T=0;T<r;T++){const P=y[T][_],L=y[T+1][_],U=y[T+1][_+1],B=y[T][_+1];(e>0||T!==0)&&(h.push(P,L,B),E+=3),(t>0||T!==r-1)&&(h.push(L,U,B),E+=3)}c.addGroup(p,E,0),p+=E}function w(v){const b=g,E=new Fe,R=new D;let _=0;const T=v===!0?e:t,P=v===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;const L=g;for(let U=0;U<=i;U++){const I=U/i*l+o,z=Math.cos(I),V=Math.sin(I);R.x=T*V,R.y=m*P,R.z=T*z,d.push(R.x,R.y,R.z),u.push(0,P,0),E.x=z*.5+.5,E.y=V*.5*P+.5,f.push(E.x,E.y),g++}for(let U=0;U<i;U++){const B=b+U,I=L+U;v===!0?h.push(I,I+1,B):h.push(I+1,I,B),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nl extends Vn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Nl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xa extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const w=new D,v=new D,b=new D;for(let E=0;E<t.length;E+=3)f(t[E+0],w),f(t[E+1],v),f(t[E+2],b),l(w,v,b,M)}function l(M,w,v,b){const E=b+1,R=[];for(let _=0;_<=E;_++){R[_]=[];const T=M.clone().lerp(v,_/E),P=w.clone().lerp(v,_/E),L=E-_;for(let U=0;U<=L;U++)U===0&&_===E?R[_][U]=T:R[_][U]=T.clone().lerp(P,U/L)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){const P=Math.floor(T/2);T%2===0?(u(R[_][P+1]),u(R[_+1][P]),u(R[_][P])):(u(R[_][P+1]),u(R[_+1][P+1]),u(R[_+1][P]))}}function c(M){const w=new D;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(M),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){const M=new D;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];const v=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(v,1-b)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const w=a[M+0],v=a[M+2],b=a[M+4],E=Math.max(w,v,b),R=Math.min(w,v,b);E>.9&&R<.1&&(w<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,w){const v=M*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function g(){const M=new D,w=new D,v=new D,b=new D,E=new Fe,R=new Fe,_=new Fe;for(let T=0,P=0;T<r.length;T+=9,P+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),E.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),b.copy(M).add(w).add(v).divideScalar(3);const L=m(b);y(E,P+0,M,L),y(R,P+2,w,L),y(_,P+4,v,L)}}function y(M,w,v,b){b<0&&M.x===1&&(a[w]=M.x-1),v.x===0&&v.z===0&&(a[w]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.vertices,e.indices,e.radius,e.detail)}}class Ai extends xa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ai(e.radius,e.detail)}}class Dl extends xa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dl(e.radius,e.detail)}}class or extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let w=0;w<c;w++){const v=w*d-r;g.push(v,-M,0),y.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const w=M+c*p,v=M+c*(p+1),b=M+1+c*(p+1),E=M+1+c*p;f.push(w,v,E),f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}class ir extends Et{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const M=[],w=p/n,v=a+w*o,b=e*Math.cos(v),E=Math.sqrt(e*e-b*b);let R=0;p===0&&a===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){const T=_/t,P=i+T*r;d.x=-E*Math.cos(P),d.y=b,d.z=E*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+R,1-w),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const w=h[p][M+1],v=h[p][M],b=h[p+1][M],E=h[p+1][M+1];(p!==0||a>0)&&f.push(w,v,E),(p!==n-1||l<Math.PI)&&f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ul extends Et{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new D,f=new D,g=new D;for(let y=0;y<=n;y++){const m=a+y/n*o;for(let p=0;p<=i;p++){const M=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/i),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=i;m++){const p=(i+1)*y+m-1,M=(i+1)*(y-1)+m-1,w=(i+1)*(y-1)+m,v=(i+1)*y+m;l.push(p,M,v),l.push(M,w,v)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function gs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(ch(i))i.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(ch(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Ht(s){const e={};for(let t=0;t<s.length;t++){const n=gs(s[t]);for(const i in n)e[i]=n[i]}return e}function ch(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function om(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function qu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const lm={clone:gs,merge:Ht};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(i.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(i.value);break;case"m4":this.uniforms[n].value=new He().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class um extends Dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jn extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fn extends Jn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dm extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fm extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function pi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function jr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function pm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function mm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class vs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class gm extends vs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cc:r=e,o=2*t-n;break;case Pc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:a=e,l=2*n-t;break;case Pc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,M=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+M*a[c+b]+w*a[l+b]+v*a[d+b];return r}}class _m extends vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class xm extends vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class vm extends vs{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const g=(n-t)/(i-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}const u=o*2,f=e-1;for(let g=0;g!==o;++g){const y=a[c+g],m=a[l+g],p=f*u+g*2,M=d[p],w=d[p+1],v=e*u+g*2,b=h[v],E=h[v+1],R=Mm(n,t,M,b,i);r[g]=Yu(R,y,w,E,m)}return r}}function Yu(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function ym(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Mm(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){const o=Yu(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;const l=ym(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pi(t,this.TimeBufferType),this.values=pi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pi(e.times,Array),values:pi(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),jr(e.settings)&&(n.settings={inTangents:pi(e.settings.inTangents,Array),outTangents:pi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _m(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new vm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth;break;case Ac:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return Ca;case this.InterpolantFactoryMethodBezier:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;jr(this.settings)&&(uh(this.settings.inTangents,e),uh(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&dp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ca,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,jr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function uh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=js;class ys extends xn{constructor(e,t,n){super(e,t,n)}}ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Js;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Ku extends xn{constructor(e,t,n,i){super(e,t,n,i)}}Ku.prototype.ValueTypeName="color";class sr extends xn{constructor(e,t,n,i){super(e,t,n,i)}}sr.prototype.ValueTypeName="number";class Sm extends vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)ei.slerpFlat(r,0,a,c-o,a,c,l);return r}}class rr extends xn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Sm(this.times,this.values,this.getValueSize(),e)}}rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends xn{constructor(e,t,n){super(e,t,n)}}Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Js;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class ua extends xn{constructor(e,t,n,i){super(e,t,n,i)}}ua.prototype.ValueTypeName="vector";class bm{constructor(e="",t=-1,n=[],i=Qf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(wm(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=pm(l);l=hh(l,1,h),c=hh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new sr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Em(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return sr;case"vector":case"vector2":case"vector3":case"vector4":return ua;case"color":return Ku;case"quaternion":return rr;case"bool":case"boolean":return ys;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function wm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Em(s.type);if(s.times===void 0){const n=[],i=[];mm(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),jr(s.settings)&&(t.settings={inTangents:pi(s.settings.inTangents,Float32Array),outTangents:pi(s.settings.outTangents,Float32Array)}),t}const Yn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(dh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!dh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function dh(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Tm{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Am=new Tm;class Ss{constructor(e){this.manager=e!==void 0?e:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ss.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class Rm extends Error{constructor(e,t){super(e),this.response=t}}class $u extends Ss{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Yn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:i});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Hn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let y=0;const m=new ReadableStream({start(p){M();function M(){d.read().then(({done:w,value:v})=>{if(w)p.close();else{y+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let E=0,R=h.length;E<R;E++){const _=h[E];_.onProgress&&_.onProgress(b)}p.enqueue(v),M()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Rm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Yn.add(`file:${e}`,c);const h=Hn[e];delete Hn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Hn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Hn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ji=new WeakMap;class Cm extends Ss{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Yn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Ji.get(a);d===void 0&&(d=[],Ji.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=er("img");function l(){h(),t&&t(this);const d=Ji.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Ji.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),Yn.remove(`image:${e}`);const u=Ji.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}Ji.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Yn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class da extends Ss{constructor(e){super(e)}load(e,t,n,i){const r=new Ct,a=new Cm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class lr extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class sl extends lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const no=new He,fh=new D,ph=new D;class Fl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(fh),ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ph),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){no.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(no,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Qs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(no)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Br=new D,zr=new ei,Mn=new D;class Zu extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Br,zr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,zr,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Br,zr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,zr,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hi=new D,mh=new Fe,gh=new Fe;class Rt extends Zu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,mh,gh),t.subVectors(gh,mh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Pm extends Fl{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class is extends lr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Lm extends Fl{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0}}class _s extends lr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class xs extends Zu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Im extends Fl{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class us extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Im}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class qs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const io=new WeakMap;class Nm extends Ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Yn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{io.has(a)===!0?(i&&i(io.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),io.set(l,c),Yn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Yn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ji=-90,Qi=1;class Dm extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rt(ji,Qi,e,t);i.layers=this.layers,this.add(i);const r=new Rt(ji,Qi,e,t);r.layers=this.layers,this.add(r);const a=new Rt(ji,Qi,e,t);a.layers=this.layers,this.add(a);const o=new Rt(ji,Qi,e,t);o.layers=this.layers,this.add(o);const l=new Rt(ji,Qi,e,t);l.layers=this.layers,this.add(l);const c=new Rt(ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Um extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ol="\\[\\]\\.:\\/",Fm=new RegExp("["+Ol+"]","g"),kl="[^"+Ol+"]",Om="[^"+Ol.replace("\\.","")+"]",km=/((?:WC+[\/:])*)/.source.replace("WC",kl),Bm=/(WCOD+)?/.source.replace("WCOD",Om),zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),Hm=new RegExp("^"+km+Bm+zm+Gm+"$"),Vm=["material","materials","bones","map"];class Wm{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fm,"")}static parseTrackName(e){const t=Hm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Vm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=Wm;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Vl=class Vl{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Vl.prototype.isMatrix2=!0;let _h=Vl;function xh(s,e,t,n){const i=Xm(n);switch(t){case Ru:return s*e;case gl:return s*e/i.components*i.byteLength;case _l:return s*e/i.components*i.byteLength;case Li:return s*e*2/i.components*i.byteLength;case xl:return s*e*2/i.components*i.byteLength;case Cu:return s*e*3/i.components*i.byteLength;case rn:return s*e*4/i.components*i.byteLength;case vl:return s*e*4/i.components*i.byteLength;case Kr:case $r:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case To:case Ro:return Math.max(s,16)*Math.max(e,8)/4;case wo:case Ao:return Math.max(s,8)*Math.max(e,8)/2;case Co:case Po:case Io:case No:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lo:case na:case Do:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ko:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Go:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $o:case Zo:case Jo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jo:case Qo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ia:case el:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xm(s){switch(s){case Zt:case Eu:return{byteLength:1,components:1};case $s:case wu:case Nn:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case In:case fl:case sn:return{byteLength:4,components:1};case Tu:case Au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);function Ju(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qm(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const y=d[f];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
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
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qm=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,o0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,x0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D0=`#ifdef USE_GRADIENTMAP
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
}`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
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
#endif`,X0=`uniform sampler2D dfgLUT;
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
}`,q0=`
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
}`,e_=`#if DEPTH_PACKING == 3200
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
}`,t_=`#define DISTANCE
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
}`,n_=`#define DISTANCE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`uniform float scale;
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
}`,a_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,l_=`uniform vec3 diffuse;
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
}`,c_=`#define LAMBERT
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
}`,h_=`#define LAMBERT
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
}`,u_=`#define MATCAP
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
}`,d_=`#define MATCAP
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
}`,f_=`#define NORMAL
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
}`,p_=`#define NORMAL
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
}`,m_=`#define PHONG
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
}`,g_=`#define PHONG
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
}`,__=`#define STANDARD
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
}`,x_=`#define STANDARD
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
}`,v_=`#define TOON
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
}`,y_=`#define TOON
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
}`,M_=`uniform float size;
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
}`,S_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,E_=`uniform vec3 color;
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
}`,w_=`uniform float rotation;
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
}`,T_=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Ym,alphahash_pars_fragment:Km,alphamap_fragment:$m,alphamap_pars_fragment:Zm,alphatest_fragment:Jm,alphatest_pars_fragment:jm,aomap_fragment:Qm,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:a0,bumpmap_pars_fragment:o0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:u0,color_fragment:d0,color_pars_fragment:f0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:x0,displacementmap_pars_vertex:v0,displacementmap_vertex:y0,emissivemap_fragment:M0,emissivemap_pars_fragment:S0,colorspace_fragment:b0,colorspace_pars_fragment:E0,envmap_fragment:w0,envmap_common_pars_fragment:T0,envmap_pars_fragment:A0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:B0,envmap_vertex:C0,fog_vertex:P0,fog_pars_vertex:L0,fog_fragment:I0,fog_pars_fragment:N0,gradientmap_pars_fragment:D0,lightmap_pars_fragment:U0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:O0,lights_pars_begin:k0,lights_toon_fragment:z0,lights_toon_pars_fragment:G0,lights_phong_fragment:H0,lights_phong_pars_fragment:V0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:K0,lightprobes_pars_fragment:$0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:Q0,map_fragment:eg,map_pars_fragment:tg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:ag,morphcolor_vertex:og,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:vg,iridescence_pars_fragment:yg,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:bg,project_vertex:Eg,dithering_fragment:wg,dithering_pars_fragment:Tg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Ig,skinbase_vertex:Ng,skinning_pars_vertex:Dg,skinning_vertex:Ug,skinnormal_vertex:Fg,specularmap_fragment:Og,specularmap_pars_fragment:kg,tonemapping_fragment:Bg,tonemapping_pars_fragment:zg,transmission_fragment:Gg,transmission_pars_fragment:Hg,uv_pars_fragment:Vg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:Kg,backgroundCube_vert:$g,backgroundCube_frag:Zg,cube_vert:Jg,cube_frag:jg,depth_vert:Qg,depth_frag:e_,distance_vert:t_,distance_frag:n_,equirect_vert:i_,equirect_frag:s_,linedashed_vert:r_,linedashed_frag:a_,meshbasic_vert:o_,meshbasic_frag:l_,meshlambert_vert:c_,meshlambert_frag:h_,meshmatcap_vert:u_,meshmatcap_frag:d_,meshnormal_vert:f_,meshnormal_frag:p_,meshphong_vert:m_,meshphong_frag:g_,meshphysical_vert:__,meshphysical_frag:x_,meshtoon_vert:v_,meshtoon_frag:y_,points_vert:M_,points_frag:S_,shadow_vert:b_,shadow_frag:E_,sprite_vert:w_,sprite_frag:T_},de={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},wn={basic:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ht([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ht([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ht([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new De(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ht([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ht([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ht([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ht([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ht([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:Ht([de.common,de.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:Ht([de.lights,de.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};wn.physical={uniforms:Ht([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Gr={r:0,b:0,g:0},A_=new He,ju=new ke;ju.set(-1,0,0,0,1,0,0,0,1);function R_(s,e,t,n,i,r){const a=new De(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const v=M.backgroundBlurriness>0;w=e.get(w,v)}return w}function g(M){let w=!1;const v=f(M);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(M,w){const v=f(w);v&&(v.isCubeTexture||v.mapping===ga)?(c===void 0&&(c=new it(new Qn(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:gs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(A_.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ju),c.material.toneMapped=Je.getTransfer(v.colorSpace)!==rt,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new it(new or(2,2),new Dn({name:"BackgroundMaterial",uniforms:gs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(Gr,qu(s)),t.buffers.color.setClear(Gr.r,Gr.g,Gr.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:y,dispose:p}}function C_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(L,U,B,I,z){let V=!1;const W=d(L,I,B,U);r!==W&&(r=W,c(r.object)),V=f(L,I,B,z),V&&g(L,I,B,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(L,U,B,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function d(L,U,B,I){const z=I.wireframe===!0;let V=n[U.id];V===void 0&&(V={},n[U.id]=V);const W=L.isInstancedMesh===!0?L.id:0;let te=V[W];te===void 0&&(te={},V[W]=te);let Y=te[B.id];Y===void 0&&(Y={},te[B.id]=Y);let K=Y[z];return K===void 0&&(K=u(l()),Y[z]=K),K}function u(L){const U=[],B=[],I=[];for(let z=0;z<t;z++)U[z]=0,B[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,U,B,I){const z=r.attributes,V=U.attributes;let W=0;const te=B.getAttributes();for(const Y in te)if(te[Y].location>=0){const J=z[Y];let Ee=V[Y];if(Ee===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Ee=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Ee=L.instanceColor)),J===void 0||J.attribute!==Ee||Ee&&J.data!==Ee.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function g(L,U,B,I){const z={},V=U.attributes;let W=0;const te=B.getAttributes();for(const Y in te)if(te[Y].location>=0){let J=V[Y];J===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));const Ee={};Ee.attribute=J,J&&J.data&&(Ee.data=J.data),z[Y]=Ee,W++}r.attributes=z,r.attributesNum=W,r.index=I}function y(){const L=r.newAttributes;for(let U=0,B=L.length;U<B;U++)L[U]=0}function m(L){p(L,0)}function p(L,U){const B=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;B[L]=1,I[L]===0&&(s.enableVertexAttribArray(L),I[L]=1),z[L]!==U&&(s.vertexAttribDivisor(L,U),z[L]=U)}function M(){const L=r.newAttributes,U=r.enabledAttributes;for(let B=0,I=U.length;B<I;B++)U[B]!==L[B]&&(s.disableVertexAttribArray(B),U[B]=0)}function w(L,U,B,I,z,V,W){W===!0?s.vertexAttribIPointer(L,U,B,z,V):s.vertexAttribPointer(L,U,B,I,z,V)}function v(L,U,B,I){y();const z=I.attributes,V=B.getAttributes(),W=U.defaultAttributeValues;for(const te in V){const Y=V[te];if(Y.location>=0){let K=z[te];if(K===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){const J=K.normalized,Ee=K.itemSize,xe=e.get(K);if(xe===void 0)continue;const Xe=xe.buffer,qe=xe.type,Be=xe.bytesPerElement,Z=qe===s.INT||qe===s.UNSIGNED_INT||K.gpuType===fl;if(K.isInterleavedBufferAttribute){const Q=K.data,me=Q.stride,Oe=K.offset;if(Q.isInstancedInterleavedBuffer){for(let ge=0;ge<Y.locationSize;ge++)p(Y.location+ge,Q.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ge=0;ge<Y.locationSize;ge++)m(Y.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let ge=0;ge<Y.locationSize;ge++)w(Y.location+ge,Ee/Y.locationSize,qe,J,me*Be,(Oe+Ee/Y.locationSize*ge)*Be,Z)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)p(Y.location+Q,K.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<Y.locationSize;Q++)m(Y.location+Q);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let Q=0;Q<Y.locationSize;Q++)w(Y.location+Q,Ee/Y.locationSize,qe,J,Ee*Be,Ee/Y.locationSize*Q*Be,Z)}}else if(W!==void 0){const J=W[te];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(Y.location,J);break;case 3:s.vertexAttrib3fv(Y.location,J);break;case 4:s.vertexAttrib4fv(Y.location,J);break;default:s.vertexAttrib1fv(Y.location,J)}}}}M()}function b(){T();for(const L in n){const U=n[L];for(const B in U){const I=U[B];for(const z in I){const V=I[z];for(const W in V)h(V[W].object),delete V[W];delete I[z]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const B in U){const I=U[B];for(const z in I){const V=I[z];for(const W in V)h(V[W].object),delete V[W];delete I[z]}}delete n[L.id]}function R(L){for(const U in n){const B=n[U];for(const I in B){const z=B[I];if(z[L.id]===void 0)continue;const V=z[L.id];for(const W in V)h(V[W].object),delete V[W];delete z[L.id]}}}function _(L){for(const U in n){const B=n[U],I=L.isInstancedMesh===!0?L.id:0,z=B[I];if(z!==void 0){for(const V in z){const W=z[V];for(const te in W)h(W[te].object),delete W[te];delete z[V]}delete B[I],Object.keys(B).length===0&&delete n[U]}}}function T(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function P_(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function L_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==rn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Zt&&R!==sn&&!_&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:b,samples:E}}function I_(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new fi,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,w=M*4;let v=p.clippingState||null;l.value=v,v=h(g,u,w,f);for(let b=0;b!==w;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=f+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==y;++w,v+=4)a.copy(d[w]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const ss=4,N_=6,D_=20,U_=256,Fs=new xs,vh=new De;let so=null,ro=0,ao=0,oo=!1;const F_=new D,bi=new D;class yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=F_}=r;so=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(so,ro,ao),this._renderer.xr.enabled=oo,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Nn,format:rn,colorSpace:Jt,depthBuffer:!1},i=Mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=O_(r)),this._blurMaterial=B_(r,e,t),this._ggxMaterial=k_(r,e,t)}return i}_compileMaterial(e){const t=new it(new Et,e);this._renderer.compile(t,Fs)}_sceneToCubeUV(e,t,n,i,r){const l=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(vh),d.toneMapping=Ln,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new Qn,new Vt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(vh),p=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const b=this._cubeSize;es(i,v*b,w>2?b:0,b,b),d.setRenderTarget(i),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Pi||e.mapping===ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-ss?n-g+ss:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,es(r,m,p,3*y,2*y),i.setRenderTarget(r),i.render(o,Fs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,es(e,m,p,3*y,2*y),i.setRenderTarget(e),i.render(o,Fs)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-ss?i-this._lodMax+ss:0),u=4*(this._cubeSize-h);es(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Fs)}}function O_(s){const e=[],t=[];let n=s;const i=s-ss+1+N_;for(let r=0;r<i;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){const M=p%3*2/3-1,w=p>2?0:-1,v=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(v,f*u*p);for(let b=0;b<u;b++){const E=h[b*2]*2-1,R=h[b*2+1]*2-1;p===0?bi.set(1,R,E):p===1?bi.set(-E,1,-R):p===2?bi.set(-E,R,1):p===3?bi.set(-1,R,-E):p===4?bi.set(-E,-1,R):bi.set(E,R,-1),bi.toArray(y,(p*u+b)*f)}}const m=new Et;m.setAttribute("position",new qt(g,f)),m.setAttribute("outputDirection",new qt(y,f)),t.push(new it(m,null)),n>ss&&n--}return{lodMeshes:t,sizeLods:e}}function Mh(s,e,t){const n=new mn(s,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function k_(s,e,t){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:U_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function B_(s,e,t){return new Dn({name:"SphericalGaussianBlur",defines:{SAMPLES:D_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Sh(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function bh(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qu extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Qn(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:$n});r.uniforms.tEquirect.value=t;const a=new it(i,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=Lt),new Dm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function z_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Aa||f===Ra)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new Qu(g.height);return y.fromEquirectangularTexture(s,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===Aa||f===Ra,y=f===Pi||f===ps;if(g||y){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new yh(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new yh(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Aa?u.mapping=Pi:f===Ra&&(u.mapping=ps),u}function l(u){let f=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function G_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&cs("WebGLRenderer: "+n+" extension not supported."),i}}}function H_(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let y=0;if(g===void 0)return;if(f!==null){const M=f.array;y=f.version;for(let w=0,v=M.length;w<v;w+=3){const b=M[w+0],E=M[w+1],R=M[w+2];u.push(b,E,E,R,R,b)}}else{const M=g.array;y=g.version;for(let w=0,v=M.length/3-1;w<v;w+=3){const b=w+0,E=w+1,R=w+2;u.push(b,E,E,R,R,b)}}const m=new(g.count>=65535?Ou:Fu)(u,1);m.version=y;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function V_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function W_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function X_(s,e,t){const n=new WeakMap,i=new ut;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*b*4*d),R=new Nu(E,v,b,d);R.type=sn,R.needsUpdate=!0;const _=w*4;for(let P=0;P<d;P++){const L=m[P],U=p[P],B=M[P],I=v*b*4*P;for(let z=0;z<L.count;z++){const V=z*_;f===!0&&(i.fromBufferAttribute(L,z),E[I+V+0]=i.x,E[I+V+1]=i.y,E[I+V+2]=i.z,E[I+V+3]=0),g===!0&&(i.fromBufferAttribute(U,z),E[I+V+4]=i.x,E[I+V+5]=i.y,E[I+V+6]=i.z,E[I+V+7]=0),y===!0&&(i.fromBufferAttribute(B,z),E[I+V+8]=i.x,E[I+V+9]=i.y,E[I+V+10]=i.z,E[I+V+11]=B.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new Fe(v,b)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function q_(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Y_={[gu]:"LINEAR_TONE_MAPPING",[_u]:"REINHARD_TONE_MAPPING",[xu]:"CINEON_TONE_MAPPING",[ma]:"ACES_FILMIC_TONE_MAPPING",[yu]:"AGX_TONE_MAPPING",[Mu]:"NEUTRAL_TONE_MAPPING",[vu]:"CUSTOM_TONE_MAPPING"};function K_(s,e,t,n,i,r){const a=new mn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Et;c.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new st([0,2,0,0,2,0],2));const h=new um({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new it(c,h),u=new xs(-1,1,1,-1,0,1);let f=null,g=null,y=!1,m,p=null,M=[],w=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let E=0;E<M.length;E++){const R=M[E];R.setSize&&R.setSize(v,b)}},this.setEffects=function(v){M=v,w=M.length>0&&M[0].isRenderPass===!0;const b=a.width,E=a.height;M.length>0&&o===null&&(o=new mn(b,E,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new mn(b,E,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const _=M[R];_.setSize&&_.setSize(b,E)}},this.begin=function(v,b){if(y||v.toneMapping===Ln&&M.length===0)return!1;if(p=b,b!==null){const E=b.width,R=b.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return w===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Ln,!0},this.hasRenderPass=function(){return w},this.end=function(v,b){v.toneMapping=m,y=!0;let E=a,R=o;for(let _=0;_<M.length;_++){const T=M[_];T.enabled!==!1&&(T.render(v,R,E,b),T.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},Je.getTransfer(f)===rt&&(h.defines.SRGB_TRANSFER="");const _=Y_[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const ed=new Ct,rl=new nr(1,1),td=new Nu,nd=new Op,id=new Wu,Eh=[],wh=[],Th=new Float32Array(16),Ah=new Float32Array(9),Rh=new Float32Array(4);function bs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Eh[i];if(r===void 0&&(r=new Float32Array(i),Eh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ya(s,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function $_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function J_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function j_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function Q_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Rh.set(n),s.uniformMatrix2fv(this.addr,!1,Rh),Nt(t,n)}}function ex(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Ah.set(n),s.uniformMatrix3fv(this.addr,!1,Ah),Nt(t,n)}}function tx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Th.set(n),s.uniformMatrix4fv(this.addr,!1,Th),Nt(t,n)}}function nx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function ax(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function lx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function hx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(rl.compareFunction=t.isReversedDepthBuffer()?Ml:yl,r=rl):r=ed,t.setTexture2D(e||r,i)}function ux(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nd,i)}function dx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||id,i)}function fx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||td,i)}function px(s){switch(s){case 5126:return $_;case 35664:return Z_;case 35665:return J_;case 35666:return j_;case 35674:return Q_;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ax;case 36294:return ox;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}function mx(s,e){s.uniform1fv(this.addr,e)}function gx(s,e){const t=bs(e,this.size,2);s.uniform2fv(this.addr,t)}function _x(s,e){const t=bs(e,this.size,3);s.uniform3fv(this.addr,t)}function xx(s,e){const t=bs(e,this.size,4);s.uniform4fv(this.addr,t)}function vx(s,e){const t=bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yx(s,e){const t=bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Mx(s,e){const t=bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Sx(s,e){s.uniform1iv(this.addr,e)}function bx(s,e){s.uniform2iv(this.addr,e)}function Ex(s,e){s.uniform3iv(this.addr,e)}function wx(s,e){s.uniform4iv(this.addr,e)}function Tx(s,e){s.uniform1uiv(this.addr,e)}function Ax(s,e){s.uniform2uiv(this.addr,e)}function Rx(s,e){s.uniform3uiv(this.addr,e)}function Cx(s,e){s.uniform4uiv(this.addr,e)}function Px(s,e,t){const n=this.cache,i=e.length,r=ya(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=rl:a=ed;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Lx(s,e,t){const n=this.cache,i=e.length,r=ya(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||nd,r[a])}function Ix(s,e,t){const n=this.cache,i=e.length,r=ya(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||id,r[a])}function Nx(s,e,t){const n=this.cache,i=e.length,r=ya(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||td,r[a])}function Dx(s){switch(s){case 5126:return mx;case 35664:return gx;case 35665:return _x;case 35666:return xx;case 35674:return vx;case 35675:return yx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return bx;case 35668:case 35672:return Ex;case 35669:case 35673:return wx;case 5125:return Tx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Nx}}class Ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=px(t.type)}}class Fx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dx(t.type)}}class Ox{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function Ch(s,e){s.seq.push(e),s.map[e.id]=e}function kx(s,e,t){const n=s.name,i=n.length;for(lo.lastIndex=0;;){const r=lo.exec(n),a=lo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ch(t,c===void 0?new Ux(o,s,e):new Fx(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Ox(o),Ch(t,d)),t=d}}}class Qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);kx(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ph(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Bx=37297;let zx=0;function Gx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Lh=new ke;function Hx(s){Je._getMatrix(Lh,Je.workingColorSpace,s);const e=`mat3( ${Lh.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case sa:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ih(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Gx(s.getShaderSource(e),o)}else return r}function Vx(s,e){const t=Hx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Wx={[gu]:"Linear",[_u]:"Reinhard",[xu]:"Cineon",[ma]:"ACESFilmic",[yu]:"AgX",[Mu]:"Neutral",[vu]:"Custom"};function Xx(s,e){const t=Wx[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new D;function qx(){Je.getLuminanceCoefficients(Hr);const s=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function Kx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $x(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Gs(s){return s!==""}function Nh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(s){return s.replace(Zx,jx)}const Jx=new Map;function jx(s,e){let t=We[e];if(t===void 0){const n=Jx.get(e);if(n!==void 0)t=We[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return al(t)}const Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(s){return s.replace(Qx,ev)}function ev(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fh(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const tv={[Vs]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function nv(s){return tv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iv={[Pi]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE_UV"};function sv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":iv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const rv={[ps]:"ENVMAP_MODE_REFRACTION"};function av(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":rv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ov={[mu]:"ENVMAP_BLENDING_MULTIPLY",[Zf]:"ENVMAP_BLENDING_MIX",[Jf]:"ENVMAP_BLENDING_ADD"};function lv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ov[s.combine]||"ENVMAP_BLENDING_NONE"}function cv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function hv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=nv(t),c=sv(t),h=av(t),d=lv(t),u=cv(t),f=Yx(t),g=Kx(r),y=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(m=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?We.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Xx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=al(a),a=Nh(a,t),a=Dh(a,t),o=al(o),o=Nh(o,t),o=Dh(o,t),a=Uh(a),o=Uh(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=M+m+a,v=M+p+o,b=Ph(i,i.VERTEX_SHADER,w),E=Ph(i,i.FRAGMENT_SHADER,v);i.attachShader(y,b),i.attachShader(y,E),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function R(L){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(y)||"",B=i.getShaderInfoLog(b)||"",I=i.getShaderInfoLog(E)||"",z=U.trim(),V=B.trim(),W=I.trim();let te=!0,Y=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,b,E);else{const K=Ih(i,b,"vertex"),J=Ih(i,E,"fragment");Ue("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+K+`
`+J)}else z!==""?Pe("WebGLProgram: Program Info Log:",z):(V===""||W==="")&&(Y=!1);Y&&(L.diagnostics={runnable:te,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(b),i.deleteShader(E),_=new Qr(i,y),T=$x(i,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(y,Bx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=E,this}let uv=0;class dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fv(e),t.set(e,n)),n}}class fv{constructor(e){this.id=uv++,this.code=e,this.usedTimes=0}}function pv(s){return s===Li||s===na||s===ia}function mv(s,e,t,n,i,r){const a=new Du,o=new dv,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,T,P,L,U,B){const I=L.fog,z=U.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,te=e.get(_.envMap||V,W),Y=te&&te.mapping===ga?te.image.height:null,K=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ee=J!==void 0?J.length:0;let xe=0;z.morphAttributes.position!==void 0&&(xe=1),z.morphAttributes.normal!==void 0&&(xe=2),z.morphAttributes.color!==void 0&&(xe=3);let Xe,qe,Be,Z;if(K){const pt=wn[K];Xe=pt.vertexShader,qe=pt.fragmentShader}else{Xe=_.vertexShader,qe=_.fragmentShader;const pt=o.getVertexShaderStage(_),tt=o.getFragmentShaderStage(_);o.update(_,pt,tt),Be=pt.id,Z=tt.id}const Q=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,ge=U.isBatchedMesh===!0,ze=!!_.map,lt=!!_.matcap,Ye=!!te,Qe=!!_.aoMap,ct=!!_.lightMap,Ke=!!_.bumpMap&&_.wireframe===!1,ft=!!_.normalMap,Mt=!!_.displacementMap,Ut=!!_.emissiveMap,O=!!_.metalnessMap,se=!!_.roughnessMap,C=_.anisotropy>0,Ae=_.clearcoat>0,Ie=_.dispersion>0,A=_.retroreflectivity>0,x=_.iridescence>0,k=_.sheen>0,X=_.transmission>0,$=C&&!!_.anisotropyMap,re=Ae&&!!_.clearcoatMap,ae=Ae&&!!_.clearcoatNormalMap,j=Ae&&!!_.clearcoatRoughnessMap,ne=x&&!!_.iridescenceMap,oe=x&&!!_.iridescenceThicknessMap,Re=k&&!!_.sheenColorMap,ue=k&&!!_.sheenRoughnessMap,le=!!_.specularMap,Ce=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Ge=X&&!!_.transmissionMap,F=X&&!!_.thicknessMap,ce=!!_.gradientMap,ee=!!_.alphaMap,he=_.alphaTest>0,_e=!!_.alphaHash,ie=!!_.extensions;let Le=Ln;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Le=s.toneMapping);const we={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:Xe,fragmentShader:qe,defines:_.defines,customVertexShaderID:Be,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ge,batchingColor:ge&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:lt,envMap:Ye,envMapMode:Ye&&te.mapping,envMapCubeUVHeight:Y,aoMap:Qe,lightMap:ct,bumpMap:Ke,normalMap:ft,displacementMap:Mt,emissiveMap:Ut,normalMapObjectSpace:ft&&_.normalMapType===np,normalMapTangentSpace:ft&&_.normalMapType===nl,packedNormalMap:ft&&_.normalMapType===nl&&pv(_.normalMap.format),metalnessMap:O,roughnessMap:se,anisotropy:C,anisotropyMap:$,clearcoat:Ae,clearcoatMap:re,clearcoatNormalMap:ae,clearcoatRoughnessMap:j,dispersion:Ie,retroreflection:A,iridescence:x,iridescenceMap:ne,iridescenceThicknessMap:oe,sheen:k,sheenColorMap:Re,sheenRoughnessMap:ue,specularMap:le,specularColorMap:Ce,specularIntensityMap:Ne,transmission:X,transmissionMap:Ge,thicknessMap:F,gradientMap:ce,opaque:_.transparent===!1&&_.blending===ls&&_.alphaToCoverage===!1,alphaMap:ee,alphaTest:he,alphaHash:_e,combine:_.combine,mapUv:ze&&g(_.map.channel),aoMapUv:Qe&&g(_.aoMap.channel),lightMapUv:ct&&g(_.lightMap.channel),bumpMapUv:Ke&&g(_.bumpMap.channel),normalMapUv:ft&&g(_.normalMap.channel),displacementMapUv:Mt&&g(_.displacementMap.channel),emissiveMapUv:Ut&&g(_.emissiveMap.channel),metalnessMapUv:O&&g(_.metalnessMap.channel),roughnessMapUv:se&&g(_.roughnessMap.channel),anisotropyMapUv:$&&g(_.anisotropyMap.channel),clearcoatMapUv:re&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(_.sheenRoughnessMap.channel),specularMapUv:le&&g(_.specularMap.channel),specularColorMapUv:Ce&&g(_.specularColorMap.channel),specularIntensityMapUv:Ne&&g(_.specularIntensityMap.channel),transmissionMapUv:Ge&&g(_.transmissionMap.channel),thicknessMapUv:F&&g(_.thicknessMap.channel),alphaMapUv:ee&&g(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ft||C),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(ze||ee),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:xe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:Ut&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tn,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(T,_),M(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const T=f[_.type];let P;if(T){const L=wn[T];P=lm.clone(L.uniforms)}else P=_.uniforms;return P}function v(_,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new hv(s,T,_,i),c.push(P),h.set(T,P)),P}function b(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:R}}function gv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function _v(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Oh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let M=s[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},s[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function l(u,f,g,y,m,p,M){M.reversedDepth===!0&&(m=-m);const w=o(u,f,g,y,m,p);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}function c(u,f,g,y,m,p){const M=o(u,f,g,y,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||_v),n.length>1&&n.sort(f||Oh),i.length>1&&i.sort(f||Oh)}function d(){for(let u=e,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function xv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new kh,s.set(n,[a])):i>=r.length?(a=new kh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function vv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new De};break;case"SpotLight":t={position:new D,direction:new D,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function yv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Mv=0;function Sv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bv(s){const e=new vv,t=yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new He,a=new He;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,w=0,v=0,b=0,E=0,R=0,_=0,T=0,P=0;c.sort(Sv);for(let U=0,B=c.length;U<B;U++){const I=c[U],z=I.color,V=I.intensity,W=I.distance;let te=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Li?te=I.shadow.map.texture:te=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*V,d+=z.g*V,u+=z.b*V;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],V);P++}else if(I.isSunLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const K=I.shadow,J=t.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=J,n.sunShadowMap[g]=te;const Ee=K.getViewportCount();for(let xe=0;xe<Ee;xe++)n.sunShadowMatrix[y+xe]=K.getMatrix(xe),n.sunShadowCascade[y+xe]=K._cascadeData[xe];y+=Ee,g++}n.sun[f]=Y,f++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const K=I.shadow,J=t.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=te,n.directionalShadowMatrix[m]=I.shadow.matrix,b++}n.directional[m]=Y,m++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(z).multiplyScalar(V),Y.distance=W,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[M]=Y;const K=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,K.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[M]=K.matrix,I.castShadow){const J=t.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=te,R++}M++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(z).multiplyScalar(V),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=Y,w++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const K=I.shadow,J=t.get(I);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=te,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=Y,p++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(V),Y.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[v]=Y,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==w||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==R||L.numSpotMaps!==_||L.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=M,L.rectAreaLength=w,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=R,L.numSpotMaps=_,L.numLightProbes=P,n.version=Mv++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=0;const p=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const v=c[M];if(v.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),d++}else if(v.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),u++}else if(v.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const b=n.rectArea[y];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Bh(s){const e=new bv(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ev(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Bh(s),e.set(i,[o])):r>=a.length?(o=new Bh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
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
}`,Av=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Rv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],zh=new He,Os=new D,co=new D;function Cv(s,e,t){let n=new Rl;const i=new Fe,r=new Fe,a=new ut,o=new dm,l=new fm,c={},h=t.maxTextureSize,d={[gi]:Xt,[Xt]:gi,[Tn]:Tn},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:wv,fragmentShader:Tv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new it(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let p=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Lf&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vs);const T=s.getRenderTarget(),P=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),U=s.state;U.setBlending($n),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=p!==this.type;B&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=E.length;I<z;I++){const V=E[I],W=V.shadow;if(W===void 0){Pe("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const te=W.getFrameExtents();i.multiply(te),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,W.mapSize.y=r.y));const Y=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Bs){if(V.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new mn(i.x,i.y,{format:Li,type:Nn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new nr(i.x,i.y,sn),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=jn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pt,W.map.depthTexture.magFilter=Pt}else V.isPointLight?(W.map=new Qu(i.x),W.map.depthTexture=new am(i.x,In)):(W.map=new mn(i.x,i.y),W.map.depthTexture=new nr(i.x,i.y,In)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=jn,this.type===Vs?(W.map.depthTexture.compareFunction=Y?Ml:yl,W.map.depthTexture.minFilter=Lt,W.map.depthTexture.magFilter=Lt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pt,W.map.depthTexture.magFilter=Pt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();V.isPointLight!==!0&&W.updateMatrices(V,_);for(let J=0;J<K;J++){const Ee=W.getCamera(J);if(V.isPointLight){const xe=W.camera,Xe=W.matrix,qe=V.distance||xe.far;qe!==xe.far&&(xe.far=qe,xe.updateProjectionMatrix()),Os.setFromMatrixPosition(V.matrixWorld),xe.position.copy(Os),co.copy(xe.position),co.add(Av[J]),xe.up.copy(Rv[J]),xe.lookAt(co),xe.updateMatrixWorld(),Xe.makeTranslation(-Os.x,-Os.y,-Os.z),zh.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(zh,xe.coordinateSystem,xe.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,J),s.clear();else{J===0&&(s.setRenderTarget(W.map),s.clear());const xe=W.getViewport(J);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),U.viewport(a)}n=W.getFrustum(J),v(R,_,Ee,V,this.type)}W.isPointLightShadow!==!0&&this.type===Bs&&M(W,_),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,P,L)};function M(E,R){const _=e.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new mn(i.x,i.y,{format:Li,type:Nn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,_,u,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,_,f,y,null)}function w(E,R,_,T){let P=null;const L=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)P=L;else if(P=_.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=P.uuid,B=R.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let z=I[B];z===void 0&&(z=P.clone(),I[B]=z,R.addEventListener("dispose",b)),P=z}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Bs?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const U=s.properties.get(P);U.light=_}return P}function v(E,R,_,T,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Bs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const B=e.update(E),I=E.material;if(Array.isArray(I)){const z=B.groups;for(let V=0,W=z.length;V<W;V++){const te=z[V],Y=I[te.materialIndex];if(Y&&Y.visible){const K=w(E,Y,T,P);E.onBeforeShadow(s,E,R,_,B,K,te),s.renderBufferDirect(_,null,B,K,E,te),E.onAfterShadow(s,E,R,_,B,K,te)}}}else if(I.visible){const z=w(E,I,T,P);E.onBeforeShadow(s,E,R,_,B,z,null),s.renderBufferDirect(_,null,B,z,E,null),E.onAfterShadow(s,E,R,_,B,z,null)}}const U=E.children;for(let B=0,I=U.length;B<I;B++)v(U[B],R,_,T,P)}function b(E){E.target.removeEventListener("dispose",b);for(const _ in c){const T=c[_],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Pv(s,e){function t(){let F=!1;const ce=new ut;let ee=null;const he=new ut(0,0,0,0);return{setMask:function(_e){ee!==_e&&!F&&(s.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){F=_e},setClear:function(_e,ie,Le,we,pt){pt===!0&&(_e*=we,ie*=we,Le*=we),ce.set(_e,ie,Le,we),he.equals(ce)===!1&&(s.clearColor(_e,ie,Le,we),he.copy(ce))},reset:function(){F=!1,ee=null,he.set(-1,0,0,0)}}}function n(){let F=!1,ce=!1,ee=null,he=null,_e=null;return{setReversed:function(ie){if(ce!==ie){const Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ce=ie;const we=_e;_e=null,this.setClear(we)}},getReversed:function(){return ce},setTest:function(ie){ie?Q(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!F&&(s.depthMask(ie),ee=ie)},setFunc:function(ie){if(ce&&(ie=mp[ie]),he!==ie){switch(ie){case xo:s.depthFunc(s.NEVER);break;case vo:s.depthFunc(s.ALWAYS);break;case yo:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case Mo:s.depthFunc(s.EQUAL);break;case So:s.depthFunc(s.GEQUAL);break;case bo:s.depthFunc(s.GREATER);break;case Eo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=ie}},setLocked:function(ie){F=ie},setClear:function(ie){_e!==ie&&(_e=ie,ce&&(ie=1-ie),s.clearDepth(ie))},reset:function(){F=!1,ee=null,he=null,_e=null,ce=!1}}}function i(){let F=!1,ce=null,ee=null,he=null,_e=null,ie=null,Le=null,we=null,pt=null;return{setTest:function(tt){F||(tt?Q(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(tt){ce!==tt&&!F&&(s.stencilMask(tt),ce=tt)},setFunc:function(tt,on,vn){(ee!==tt||he!==on||_e!==vn)&&(s.stencilFunc(tt,on,vn),ee=tt,he=on,_e=vn)},setOp:function(tt,on,vn){(ie!==tt||Le!==on||we!==vn)&&(s.stencilOp(tt,on,vn),ie=tt,Le=on,we=vn)},setLocked:function(tt){F=tt},setClear:function(tt){pt!==tt&&(s.clearStencil(tt),pt=tt)},reset:function(){F=!1,ce=null,ee=null,he=null,_e=null,ie=null,Le=null,we=null,pt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,v=null,b=null,E=null,R=null,_=new De(0,0,0),T=0,P=!1,L=null,U=null,B=null,I=null,z=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,te=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=te>=2);let K=null,J={};const Ee=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),Xe=new ut().fromArray(Ee),qe=new ut().fromArray(xe);function Be(F,ce,ee,he){const _e=new Uint8Array(4),ie=s.createTexture();s.bindTexture(F,ie),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<ee;Le++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(ce+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return ie}const Z={};Z[s.TEXTURE_2D]=Be(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(Ks),Ke(!1),ft(bc),Q(s.CULL_FACE),Qe($n);function Q(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function me(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Oe(F,ce){return u[F]!==ce?(s.bindFramebuffer(F,ce),u[F]=ce,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ce),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function ge(F,ce){let ee=g,he=!1;if(F){ee=f.get(ce),ee===void 0&&(ee=[],f.set(ce,ee));const _e=F.textures;if(ee.length!==_e.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,Le=_e.length;ie<Le;ie++)ee[ie]=s.COLOR_ATTACHMENT0+ie;ee.length=_e.length,he=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,he=!0);he&&s.drawBuffers(ee)}function ze(F){return y!==F?(s.useProgram(F),y=F,!0):!1}const lt={[ns]:s.FUNC_ADD,[Nf]:s.FUNC_SUBTRACT,[Df]:s.FUNC_REVERSE_SUBTRACT};lt[Uf]=s.MIN,lt[Ff]=s.MAX;const Ye={[Of]:s.ZERO,[kf]:s.ONE,[Bf]:s.SRC_COLOR,[fu]:s.SRC_ALPHA,[Xf]:s.SRC_ALPHA_SATURATE,[Vf]:s.DST_COLOR,[Gf]:s.DST_ALPHA,[zf]:s.ONE_MINUS_SRC_COLOR,[pu]:s.ONE_MINUS_SRC_ALPHA,[Wf]:s.ONE_MINUS_DST_COLOR,[Hf]:s.ONE_MINUS_DST_ALPHA,[qf]:s.CONSTANT_COLOR,[Yf]:s.ONE_MINUS_CONSTANT_COLOR,[Kf]:s.CONSTANT_ALPHA,[$f]:s.ONE_MINUS_CONSTANT_ALPHA};function Qe(F,ce,ee,he,_e,ie,Le,we,pt,tt){if(F===$n){m===!0&&(me(s.BLEND),m=!1);return}if(m===!1&&(Q(s.BLEND),m=!0),F!==If){if(F!==p||tt!==P){if((M!==ns||b!==ns)&&(s.blendEquation(s.FUNC_ADD),M=ns,b=ns),tt)switch(F){case ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ti:s.blendFunc(s.ONE,s.ONE);break;case Ec:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ue("WebGLState: Invalid blending: ",F);break}else switch(F){case ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ti:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ec:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wc:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",F);break}w=null,v=null,E=null,R=null,_.set(0,0,0),T=0,p=F,P=tt}return}_e=_e||ce,ie=ie||ee,Le=Le||he,(ce!==M||_e!==b)&&(s.blendEquationSeparate(lt[ce],lt[_e]),M=ce,b=_e),(ee!==w||he!==v||ie!==E||Le!==R)&&(s.blendFuncSeparate(Ye[ee],Ye[he],Ye[ie],Ye[Le]),w=ee,v=he,E=ie,R=Le),(we.equals(_)===!1||pt!==T)&&(s.blendColor(we.r,we.g,we.b,pt),_.copy(we),T=pt),p=F,P=!1}function ct(F,ce){F.side===Tn?me(s.CULL_FACE):Q(s.CULL_FACE);let ee=F.side===Xt;ce&&(ee=!ee),Ke(ee),F.blending===ls&&F.transparent===!1?Qe($n):Qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const he=F.stencilWrite;o.setTest(he),he&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ut(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(F){L!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),L=F)}function ft(F){F!==Cf?(Q(s.CULL_FACE),F!==U&&(F===bc?s.cullFace(s.BACK):F===Pf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),U=F}function Mt(F){F!==B&&(W&&s.lineWidth(F),B=F)}function Ut(F,ce,ee){F?(Q(s.POLYGON_OFFSET_FILL),(I!==ce||z!==ee)&&(I=ce,z=ee,a.getReversed()&&(ce=-ce),s.polygonOffset(ce,ee))):me(s.POLYGON_OFFSET_FILL)}function O(F){F?Q(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function se(F){F===void 0&&(F=s.TEXTURE0+V-1),K!==F&&(s.activeTexture(F),K=F)}function C(F,ce,ee){ee===void 0&&(K===null?ee=s.TEXTURE0+V-1:ee=K);let he=J[ee];he===void 0&&(he={type:void 0,texture:void 0},J[ee]=he),(he.type!==F||he.texture!==ce)&&(K!==ee&&(s.activeTexture(ee),K=ee),s.bindTexture(F,ce||Z[F]),he.type=F,he.texture=ce)}function Ae(){const F=J[K];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ie(){try{s.compressedTexImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function x(){try{s.texSubImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function k(){try{s.texSubImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function re(){try{s.texStorage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function ae(){try{s.texStorage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function j(){try{s.texImage2D(...arguments)}catch(F){Ue("WebGLState:",F)}}function ne(){try{s.texImage3D(...arguments)}catch(F){Ue("WebGLState:",F)}}function oe(F){return d[F]!==void 0?d[F]:s.getParameter(F)}function Re(F,ce){d[F]!==ce&&(s.pixelStorei(F,ce),d[F]=ce)}function ue(F){Xe.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Xe.copy(F))}function le(F){qe.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),qe.copy(F))}function Ce(F,ce){let ee=c.get(ce);ee===void 0&&(ee=new WeakMap,c.set(ce,ee));let he=ee.get(F);he===void 0&&(he=s.getUniformBlockIndex(ce,F.name),ee.set(F,he))}function Ne(F,ce){const he=c.get(ce).get(F);l.get(ce)!==he&&(s.uniformBlockBinding(ce,he,F.__bindingPointIndex),l.set(ce,he))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,J={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,v=null,b=null,E=null,R=null,_=new De(0,0,0),T=0,P=!1,L=null,U=null,B=null,I=null,z=null,Xe.set(0,0,s.canvas.width,s.canvas.height),qe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:me,bindFramebuffer:Oe,drawBuffers:ge,useProgram:ze,setBlending:Qe,setMaterial:ct,setFlipSided:Ke,setCullFace:ft,setLineWidth:Mt,setPolygonOffset:Ut,setScissorTest:O,activeTexture:se,bindTexture:C,unbindTexture:Ae,compressedTexImage2D:Ie,compressedTexImage3D:A,texImage2D:j,texImage3D:ne,pixelStorei:Re,getParameter:oe,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:re,texStorage3D:ae,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:ue,viewport:le,reset:Ge}}function Lv(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,x){return g?new OffscreenCanvas(A,x):er("canvas")}function m(A,x,k){let X=1;const $=Ie(A);if(($.width>k||$.height>k)&&(X=k/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const re=Math.floor(X*$.width),ae=Math.floor(X*$.height);u===void 0&&(u=y(re,ae));const j=x?y(re,ae):u;return j.width=re,j.height=ae,j.getContext("2d").drawImage(A,0,0,re,ae),Pe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+re+"x"+ae+")."),j}else return"data"in A&&Pe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,x,k,X,$,re=!1){if(A!==null){if(s[A]!==void 0)return s[A];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae;X&&(ae=e.get("EXT_texture_norm16"),ae||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8),k===s.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),k===s.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),x===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),x===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8),k===s.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),k===s.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),x===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),x===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),x===s.RGB&&(k===s.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),k===s.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),x===s.RGBA){const ne=re?sa:Je.getTransfer($);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=ne===rt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),k===s.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(A,x){let k;return A?x===null||x===In||x===Zs?k=s.DEPTH24_STENCIL8:x===sn?k=s.DEPTH32F_STENCIL8:x===$s&&(k=s.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===In||x===Zs?k=s.DEPTH_COMPONENT24:x===sn?k=s.DEPTH_COMPONENT32F:x===$s&&(k=s.DEPTH_COMPONENT16),k}function E(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pt&&A.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function _(A){const x=A.target;x.removeEventListener("dispose",_),L(x)}function T(A){const x=n.get(A);if(x.__webglInit===void 0)return;const k=A.source,X=f.get(k);if(X){const $=X[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(A),Object.keys(X).length===0&&f.delete(k)}n.remove(A)}function P(A){const x=n.get(A);s.deleteTexture(x.__webglTexture);const k=A.source,X=f.get(k);delete X[x.__cacheKey],a.memory.textures--}function L(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let $=0;$<x.__webglFramebuffer[X].length;$++)s.deleteFramebuffer(x.__webglFramebuffer[X][$]);else s.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)s.deleteFramebuffer(x.__webglFramebuffer[X]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=A.textures;for(let X=0,$=k.length;X<$;X++){const re=n.get(k[X]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(A)}let U=0;function B(){U=0}function I(){return U}function z(A){U=A}function V(){const A=U;return A>=i.maxTextures&&Pe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,A}function W(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function te(A,x){const k=n.get(A);if(A.isVideoTexture&&C(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const X=A.image;if(X===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{me(k,A,x);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+x)}function Y(A,x){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){me(k,A,x);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+x)}function K(A,x){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){me(k,A,x);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+x)}function J(A,x){const k=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Oe(k,A,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+x)}const Ee={[an]:s.REPEAT,[Cn]:s.CLAMP_TO_EDGE,[ta]:s.MIRRORED_REPEAT},xe={[Pt]:s.NEAREST,[bu]:s.NEAREST_MIPMAP_NEAREST,[zs]:s.NEAREST_MIPMAP_LINEAR,[Lt]:s.LINEAR,[Yr]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},Xe={[sp]:s.NEVER,[cp]:s.ALWAYS,[rp]:s.LESS,[yl]:s.LEQUAL,[ap]:s.EQUAL,[Ml]:s.GEQUAL,[op]:s.GREATER,[lp]:s.NOTEQUAL};function qe(A,x){if(x.type===sn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Lt||x.magFilter===Yr||x.magFilter===zs||x.magFilter===qn||x.minFilter===Lt||x.minFilter===Yr||x.minFilter===zs||x.minFilter===qn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ee[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ee[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ee[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,xe[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,xe[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Xe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Pt||x.minFilter!==zs&&x.minFilter!==qn||x.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Be(A,x){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const X=x.source;let $=f.get(X);$===void 0&&($={},f.set(X,$));const re=W(x);if(re!==A.__cacheKey){$[re]===void 0&&($[re]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[re].usedTimes++;const ae=$[A.__cacheKey];ae!==void 0&&($[A.__cacheKey].usedTimes--,ae.usedTimes===0&&P(x)),A.__cacheKey=re,A.__webglTexture=$[re].texture}return k}function Z(A,x,k){return Math.floor(Math.floor(A/k)/x)}function Q(A,x,k,X){const re=A.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,k,X,x.data);else{re.sort((Re,ue)=>Re.start-ue.start);let ae=0;for(let Re=1;Re<re.length;Re++){const ue=re[ae],le=re[Re],Ce=ue.start+ue.count,Ne=Z(le.start,x.width,4),Ge=Z(ue.start,x.width,4);le.start<=Ce+1&&Ne===Ge&&Z(le.start+le.count-1,x.width,4)===Ne?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++ae,re[ae]=le)}re.length=ae+1;const j=t.getParameter(s.UNPACK_ROW_LENGTH),ne=t.getParameter(s.UNPACK_SKIP_PIXELS),oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Re=0,ue=re.length;Re<ue;Re++){const le=re[Re],Ce=Math.floor(le.start/4),Ne=Math.ceil(le.count/4),Ge=Ce%x.width,F=Math.floor(Ce/x.width),ce=Ne,ee=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,Ge,F,ce,ee,k,X,x.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,j),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,oe)}}function me(A,x,k){let X=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=s.TEXTURE_3D);const $=Be(A,x),re=x.source;t.bindTexture(X,A.__webglTexture,s.TEXTURE0+k);const ae=n.get(re);if(re.version!==ae.__version||$===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ee=Je.getPrimaries(Je.workingColorSpace),he=x.colorSpace===Xn?null:Je.getPrimaries(x.colorSpace),_e=x.colorSpace===Xn||ee===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let ne=m(x.image,!1,i.maxTextureSize);ne=Ae(x,ne);const oe=r.convert(x.format,x.colorSpace),Re=r.convert(x.type);let ue=v(x.internalFormat,oe,Re,x.normalized,x.colorSpace,x.isVideoTexture);qe(X,x);let le;const Ce=x.mipmaps,Ne=x.isVideoTexture!==!0,Ge=ae.__version===void 0||$===!0,F=re.dataReady,ce=E(x,ne);if(x.isDepthTexture)ue=b(x.format===Ri,x.type),Ge&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,ue,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,ue,ne.width,ne.height,0,oe,Re,null));else if(x.isDataTexture)if(Ce.length>0){Ne&&Ge&&t.texStorage2D(s.TEXTURE_2D,ce,ue,Ce[0].width,Ce[0].height);for(let ee=0,he=Ce.length;ee<he;ee++)le=Ce[ee],Ne?F&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,le.width,le.height,oe,Re,le.data):t.texImage2D(s.TEXTURE_2D,ee,ue,le.width,le.height,0,oe,Re,le.data);x.generateMipmaps=!1}else Ne?(Ge&&t.texStorage2D(s.TEXTURE_2D,ce,ue,ne.width,ne.height),F&&Q(x,ne,oe,Re)):t.texImage2D(s.TEXTURE_2D,0,ue,ne.width,ne.height,0,oe,Re,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&Ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,ue,Ce[0].width,Ce[0].height,ne.depth);for(let ee=0,he=Ce.length;ee<he;ee++)if(le=Ce[ee],x.format!==rn)if(oe!==null)if(Ne){if(F)if(x.layerUpdates.size>0){const _e=xh(le.width,le.height,x.format,x.type);for(const ie of x.layerUpdates){const Le=le.data.subarray(ie*_e/le.data.BYTES_PER_ELEMENT,(ie+1)*_e/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,ie,le.width,le.height,1,oe,Le)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,ne.depth,oe,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,ue,le.width,le.height,ne.depth,0,le.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,le.width,le.height,ne.depth,oe,Re,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,ue,le.width,le.height,ne.depth,0,oe,Re,le.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ne&&Ge&&t.texStorage2D(s.TEXTURE_2D,ce,ue,Ce[0].width,Ce[0].height);for(let ee=0,he=Ce.length;ee<he;ee++)le=Ce[ee],x.format!==rn?oe!==null?Ne?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,ue,le.width,le.height,0,le.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?F&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,le.width,le.height,oe,Re,le.data):t.texImage2D(s.TEXTURE_2D,ee,ue,le.width,le.height,0,oe,Re,le.data)}else if(x.isDataArrayTexture)if(Ne){if(Ge&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,ue,ne.width,ne.height,ne.depth),F)if(x.layerUpdates.size>0){const ee=xh(ne.width,ne.height,x.format,x.type);for(const he of x.layerUpdates){const _e=ne.data.subarray(he*ee/ne.data.BYTES_PER_ELEMENT,(he+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ne.width,ne.height,1,oe,Re,_e)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,Re,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,ne.width,ne.height,ne.depth,0,oe,Re,ne.data);else if(x.isData3DTexture)Ne?(Ge&&t.texStorage3D(s.TEXTURE_3D,ce,ue,ne.width,ne.height,ne.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,Re,ne.data)):t.texImage3D(s.TEXTURE_3D,0,ue,ne.width,ne.height,ne.depth,0,oe,Re,ne.data);else if(x.isFramebufferTexture){if(Ge)if(Ne)t.texStorage2D(s.TEXTURE_2D,ce,ue,ne.width,ne.height);else{let ee=ne.width,he=ne.height;for(let _e=0;_e<ce;_e++)t.texImage2D(s.TEXTURE_2D,_e,ue,ee,he,0,oe,Re,null),ee>>=1,he>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const ee=s.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ne.parentNode!==ee){ee.appendChild(ne),d.add(x),ee.onpaint=he=>{const _e=he.changedElements;for(const ie of d)_e.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ne);else{const _e=s.RGBA,ie=s.RGBA,Le=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_e,ie,Le,ne)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ne&&Ge){const ee=Ie(Ce[0]);t.texStorage2D(s.TEXTURE_2D,ce,ue,ee.width,ee.height)}for(let ee=0,he=Ce.length;ee<he;ee++)le=Ce[ee],Ne?F&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,oe,Re,le):t.texImage2D(s.TEXTURE_2D,ee,ue,oe,Re,le);x.generateMipmaps=!1}else if(Ne){if(Ge){const ee=Ie(ne);t.texStorage2D(s.TEXTURE_2D,ce,ue,ee.width,ee.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,Re,ne)}else t.texImage2D(s.TEXTURE_2D,0,ue,oe,Re,ne);p(x)&&M(X),ae.__version=re.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Oe(A,x,k){if(x.image.length!==6)return;const X=Be(A,x),$=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);const re=n.get($);if($.version!==re.__version||X===!0){t.activeTexture(s.TEXTURE0+k);const ae=Je.getPrimaries(Je.workingColorSpace),j=x.colorSpace===Xn?null:Je.getPrimaries(x.colorSpace),ne=x.colorSpace===Xn||ae===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let ie=0;ie<6;ie++)!oe&&!Re?ue[ie]=m(x.image[ie],!0,i.maxCubemapSize):ue[ie]=Re?x.image[ie].image:x.image[ie],ue[ie]=Ae(x,ue[ie]);const le=ue[0],Ce=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type),Ge=v(x.internalFormat,Ce,Ne,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,ce=re.__version===void 0||X===!0,ee=$.dataReady;let he=E(x,le);qe(s.TEXTURE_CUBE_MAP,x);let _e;if(oe){F&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Ge,le.width,le.height);for(let ie=0;ie<6;ie++){_e=ue[ie].mipmaps;for(let Le=0;Le<_e.length;Le++){const we=_e[Le];x.format!==rn?Ce!==null?F?ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,we.width,we.height,Ce,we.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Ge,we.width,we.height,0,we.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,we.width,we.height,Ce,Ne,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,Ge,we.width,we.height,0,Ce,Ne,we.data)}}}else{if(_e=x.mipmaps,F&&ce){_e.length>0&&he++;const ie=Ie(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Ge,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ue[ie].width,ue[ie].height,Ce,Ne,ue[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,ue[ie].width,ue[ie].height,0,Ce,Ne,ue[ie].data);for(let Le=0;Le<_e.length;Le++){const pt=_e[Le].image[ie].image;F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,pt.width,pt.height,Ce,Ne,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Ge,pt.width,pt.height,0,Ce,Ne,pt.data)}}else{F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ce,Ne,ue[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ge,Ce,Ne,ue[ie]);for(let Le=0;Le<_e.length;Le++){const we=_e[Le];F?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Ce,Ne,we.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,Ge,Ce,Ne,we.image[ie])}}}p(x)&&M(s.TEXTURE_CUBE_MAP),re.__version=$.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ge(A,x,k,X,$,re){const ae=r.convert(k.format,k.colorSpace),j=r.convert(k.type),ne=v(k.internalFormat,ae,j,k.normalized,k.colorSpace),oe=n.get(x),Re=n.get(k);if(Re.__renderTarget=x,!oe.__hasExternalTextures){const ue=Math.max(1,x.width>>re),le=Math.max(1,x.height>>re);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,re,ne,ue,le,x.depth,0,ae,j,null):t.texImage2D($,re,ne,ue,le,0,ae,j,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),se(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,$,Re.__webglTexture,0,O(x)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,$,Re.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(A,x,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){const X=x.depthTexture,$=X&&X.isDepthTexture?X.type:null,re=b(x.stencilBuffer,$),ae=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;se(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,O(x),re,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,O(x),re,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,re,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,A)}else{const X=x.textures;for(let $=0;$<X.length;$++){const re=X[$],ae=r.convert(re.format,re.colorSpace),j=r.convert(re.type),ne=v(re.internalFormat,ae,j,re.normalized,re.colorSpace);se(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,O(x),ne,x.width,x.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,O(x),ne,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ne,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(A,x,k){const X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),qe(s.TEXTURE_CUBE_MAP,x.depthTexture);const oe=r.convert(x.depthTexture.format),Re=r.convert(x.depthTexture.type);let ue;x.depthTexture.format===jn?ue=s.DEPTH_COMPONENT24:x.depthTexture.format===Ri&&(ue=s.DEPTH24_STENCIL8);for(let le=0;le<6;le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,x.width,x.height,0,oe,Re,null)}}else te(x.depthTexture,0);const re=$.__webglTexture,ae=O(x),j=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,ne=x.depthTexture.format===Ri?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===jn)se(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,j,re,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,ne,j,re,0);else if(x.depthTexture.format===Ri)se(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,j,re,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,ne,j,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(A){const x=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)lt(x.__webglFramebuffer[X],A,X);else{const X=A.texture.mipmaps;X&&X.length>0?lt(x.__webglFramebuffer[0],A,0):lt(x.__webglFramebuffer,A,0)}else if(k){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=s.createRenderbuffer(),ze(x.__webglDepthbuffer[X],A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,re)}}else{const X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),ze(x.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(A,x,k){const X=n.get(A);x!==void 0&&ge(X.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ye(A)}function ct(A){const x=A.texture,k=n.get(A),X=n.get(x);A.addEventListener("dispose",_);const $=A.textures,re=A.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=x.version,a.memory.textures++),re){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let ne=0;ne<x.mipmaps.length;ne++)k.__webglFramebuffer[j][ne]=s.createFramebuffer()}else k.__webglFramebuffer[j]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)k.__webglFramebuffer[j]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ae)for(let j=0,ne=$.length;j<ne;j++){const oe=n.get($[j]);oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&se(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<$.length;j++){const ne=$[j];k.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[j]);const oe=r.convert(ne.format,ne.colorSpace),Re=r.convert(ne.type),ue=v(ne.internalFormat,oe,Re,ne.normalized,ne.colorSpace,A.isXRRenderTarget===!0),le=O(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,le,ue,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,k.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),qe(s.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)ge(k.__webglFramebuffer[j][ne],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne);else ge(k.__webglFramebuffer[j],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(x)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let j=0,ne=$.length;j<ne;j++){const oe=$[j],Re=n.get(oe);let ue=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Re.__webglTexture),qe(ue,oe),ge(k.__webglFramebuffer,A,oe,s.COLOR_ATTACHMENT0+j,ue,0),p(oe)&&M(ue)}t.unbindTexture()}else{let j=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,X.__webglTexture),qe(j,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)ge(k.__webglFramebuffer[ne],A,x,s.COLOR_ATTACHMENT0,j,ne);else ge(k.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,j,0);p(x)&&M(j),t.unbindTexture()}A.depthBuffer&&Ye(A)}function Ke(A){const x=A.textures;for(let k=0,X=x.length;k<X;k++){const $=x[k];if(p($)){const re=w(A),ae=n.get($).__webglTexture;t.bindTexture(re,ae),M(re),t.unbindTexture()}}}const ft=[],Mt=[];function Ut(A){if(A.samples>0){if(se(A)===!1){const x=A.textures,k=A.width,X=A.height;let $=s.COLOR_BUFFER_BIT;const re=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(A),j=x.length>1;if(j)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ne=A.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Re=n.get(x[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,k,X,0,0,k,X,$,s.NEAREST),l===!0&&(ft.length=0,Mt.length=0,ft.push(s.COLOR_ATTACHMENT0+oe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ft.push(re),Mt.push(re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Re=n.get(x[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,Re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function O(A){return Math.min(i.maxSamples,A.samples)}function se(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function C(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Ae(A,x){const k=A.colorSpace,X=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Jt&&k!==Xn&&(Je.getTransfer(k)===rt?(X!==rn||$!==Zt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",k)),x}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=te,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=Qe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Iv(s,e){function t(n,i=Xn){let r;const a=Je.getTransfer(i);if(n===Zt)return s.UNSIGNED_BYTE;if(n===pl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eu)return s.BYTE;if(n===wu)return s.SHORT;if(n===$s)return s.UNSIGNED_SHORT;if(n===fl)return s.INT;if(n===In)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===Nn)return s.HALF_FLOAT;if(n===Ru)return s.ALPHA;if(n===Cu)return s.RGB;if(n===rn)return s.RGBA;if(n===jn)return s.DEPTH_COMPONENT;if(n===Ri)return s.DEPTH_STENCIL;if(n===gl)return s.RED;if(n===_l)return s.RED_INTEGER;if(n===Li)return s.RG;if(n===xl)return s.RG_INTEGER;if(n===vl)return s.RGBA_INTEGER;if(n===Kr||n===$r||n===Zr||n===Jr)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===To||n===Ao||n===Ro)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Co||n===Po||n===Lo||n===Io||n===No||n===na||n===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Co||n===Po)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Io)return r.COMPRESSED_R11_EAC;if(n===No)return r.COMPRESSED_SIGNED_R11_EAC;if(n===na)return r.COMPRESSED_RG11_EAC;if(n===Do)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uo||n===Fo||n===Oo||n===ko||n===Bo||n===zo||n===Go||n===Ho||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===Ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$o||n===Zo||n===Jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$o)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jo||n===Qo||n===ia||n===el)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dv=`
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

}`;class Uv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dn({vertexShader:Nv,fragmentShader:Dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fv extends Ii{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",m=new Uv,p={},M=t.getContextAttributes();let w=null,v=null;const b=[],E=[],R=new Fe;let _=null,T=null;const P=new Rt;P.viewport=new ut;const L=new Rt;L.viewport=new ut;const U=[P,L],B=new Um;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=b[Z];return Q===void 0&&(Q=new Fa,b[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=b[Z];return Q===void 0&&(Q=new Fa,b[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=b[Z];return Q===void 0&&(Q=new Fa,b[Z]=Q),Q.getHandSpace()};function V(Z){const Q=E.indexOf(Z.inputSource);if(Q===-1)return;const me=b[Q];me!==void 0&&(me.update(Z.inputSource,Z.frame,c||a),me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",te);for(let Z=0;Z<b.length;Z++){const Q=E[Z];Q!==null&&(E[Z]=null,b[Z].disconnect(Q))}I=null,z=null,m.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(w),f=null,u=null,d=null,i=null,v=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",W),i.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Oe=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?Ri:jn,Oe=M.stencil?Zs:In);const ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ze),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new mn(u.textureWidth,u.textureHeight,{format:rn,type:Zt,depthTexture:new nr(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new mn(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Z){for(let Q=0;Q<Z.removed.length;Q++){const me=Z.removed[Q],Oe=E.indexOf(me);Oe>=0&&(E[Oe]=null,b[Oe].disconnect(me))}for(let Q=0;Q<Z.added.length;Q++){const me=Z.added[Q];let Oe=E.indexOf(me);if(Oe===-1){for(let ze=0;ze<b.length;ze++)if(ze>=E.length){E.push(me),Oe=ze;break}else if(E[ze]===null){E[ze]=me,Oe=ze;break}if(Oe===-1)break}const ge=b[Oe];ge&&ge.connect(me)}}const Y=new D,K=new D;function J(Z,Q,me){Y.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(me.matrixWorld);const Oe=Y.distanceTo(K),ge=Q.projectionMatrix.elements,ze=me.projectionMatrix.elements,lt=ge[14]/(ge[10]-1),Ye=ge[14]/(ge[10]+1),Qe=(ge[9]+1)/ge[5],ct=(ge[9]-1)/ge[5],Ke=(ge[8]-1)/ge[0],ft=(ze[8]+1)/ze[0],Mt=lt*Ke,Ut=lt*ft,O=Oe/(-Ke+ft),se=O*-Ke;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(se),Z.translateZ(O),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ge[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const C=lt+O,Ae=Ye+O,Ie=Mt-se,A=Ut+(Oe-se),x=Qe*Ye/Ae*C,k=ct*Ye/Ae*C;Z.projectionMatrix.makePerspective(Ie,A,x,k,C,Ae),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ee(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let Q=Z.near,me=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(me=m.depthFar)),B.near=L.near=P.near=Q,B.far=L.far=P.far=me,(I!==B.near||z!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,z=B.far),B.layers.mask=Z.layers.mask|6,P.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;const Oe=Z.parent,ge=B.cameras;Ee(B,Oe);for(let ze=0;ze<ge.length;ze++)Ee(ge[ze],Oe);ge.length===2?J(B,P,L):B.projectionMatrix.copy(P.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),xe(Z,B,Oe)};function xe(Z,Q,me){me===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ms*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return p[Z]};let Xe=null;function qe(Z,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Oe=!1;me.length!==B.cameras.length&&(B.cameras.length=0,Oe=!0);for(let Ye=0;Ye<me.length;Ye++){const Qe=me[Ye];let ct=null;if(f!==null)ct=f.getViewport(Qe);else{const ft=d.getViewSubImage(u,Qe);ct=ft.viewport,Ye===0&&(e.setRenderTargetTextures(v,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(v))}let Ke=U[Ye];Ke===void 0&&(Ke=new Rt,Ke.layers.enable(Ye),Ke.viewport=new ut,U[Ye]=Ke),Ke.matrix.fromArray(Qe.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Qe.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ct.x,ct.y,ct.width,ct.height),Ye===0&&(B.matrix.copy(Ke.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Oe===!0&&B.cameras.push(Ke)}const ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const Ye=d.getDepthInformation(me[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,i.renderState)}if(ge&&ge.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let Ye=0;Ye<me.length;Ye++){const Qe=me[Ye].camera;if(Qe){let ct=p[Qe];ct||(ct=new Xu,p[Qe]=ct);const Ke=d.getCameraImage(Qe);ct.sourceTexture=Ke}}}}for(let me=0;me<b.length;me++){const Oe=E[me],ge=b[me];Oe!==null&&ge!==void 0&&ge.update(Oe,Q,c||a)}Xe&&Xe(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Be=new Ju;Be.setAnimationLoop(qe),this.setAnimationLoop=function(Z){Xe=Z},this.dispose=function(){}}}const Ov=new He,sd=new ke;sd.set(-1,0,0,0,1,0,0,0,1);function kv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),w=M.envMap,v=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bv(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const E=b.program;n.uniformBlockBinding(v,E)}function c(v,b){let E=i[v.id];E===void 0&&(m(v),E=h(v),i[v.id]=E,v.addEventListener("dispose",M));const R=b.program;n.updateUBOMapping(v,R);const _=e.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){const b=d();v.__bindingPointIndex=b;const E=s.createBuffer(),R=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=i[v.id],E=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let _=0,T=E.length;_<T;_++){const P=E[_];if(Array.isArray(P))for(let L=0,U=P.length;L<U;L++)f(P[L],_,L,R);else f(P,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,b,E,R){if(y(v,b,E,R)===!0){const _=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let L=0;L<T.length;L++){const U=T[L],B=p(U);g(U,v.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function g(v,b,E){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,E)}function y(v,b,E,R){const _=v.value,T=b+"_"+E;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{const P=R[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(v){const b=v.uniforms;let E=0;const R=16;for(let T=0,P=b.length;T<P;T++){const L=Array.isArray(b[T])?b[T]:[b[T]];for(let U=0,B=L.length;U<B;U++){const I=L[U],z=Array.isArray(I.value)?I.value:[I.value];for(let V=0,W=z.length;V<W;V++){const te=z[V],Y=p(te),K=E%R,J=K%Y.boundary,Ee=K+J;E+=J,Ee!==0&&R-Ee<Y.storage&&(E+=R-Ee),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=Y.storage}}}const _=E%R;return _>0&&(E+=R-_),v.__size=E,v.__cache={},this}function p(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",v),b}function M(v){const b=v.target;b.removeEventListener("dispose",M);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function w(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}const zv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function Gv(){return Sn===null&&(Sn=new Tl(zv,16,16,Li,Nn),Sn.name="DFG_LUT",Sn.minFilter=Lt,Sn.magFilter=Lt,Sn.wrapS=Cn,Sn.wrapT=Cn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class rd{constructor(e={}){const{canvas:t=fp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Zt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const y=f,m=new Set([vl,xl,_l]),p=new Set([Zt,In,$s,Zs,pl,ml]),M=new Uint32Array(4),w=new Int32Array(4),v=new D;let b=null,E=null;const R=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,U=null,B=null,I=null,z=null;this._outputColorSpace=yt;let V=0,W=0,te=null,Y=-1,K=null;const J=new ut,Ee=new ut;let xe=null;const Xe=new De(0);let qe=0,Be=t.width,Z=t.height,Q=1,me=null,Oe=null;const ge=new ut(0,0,Be,Z),ze=new ut(0,0,Be,Z);let lt=!1;const Ye=new Rl;let Qe=!1,ct=!1;const Ke=new He,ft=new D,Mt=new ut,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let O=!1;function se(){return te===null?Q:1}let C=n;function Ae(S,N){return t.getContext(S,N)}let Ie,A,x,k,X,$,re,ae,j,ne,oe,Re,ue,le,Ce,Ne,Ge,F,ce,ee,he,_e,ie;try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dl}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",on,!1),C===null){const N="webgl2";if(C=Ae(N,S),C===null)throw Ae(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(S){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",on,!1),Ue("WebGLRenderer: "+S.message),S}function Le(){Ie=new G_(C),Ie.init(),he=new Iv(C,Ie),A=new L_(C,Ie,e,he),x=new Pv(C,Ie),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),B=C.createFramebuffer(),I=C.createFramebuffer(),z=C.createFramebuffer(),k=new W_(C),X=new gv,$=new Lv(C,Ie,x,X,A,he,k),re=new z_(P),ae=new qm(C),_e=new C_(C,ae),j=new H_(C,ae,k,_e),ne=new q_(C,j,ae,_e,k),F=new X_(C,A,$),Ce=new I_(X),oe=new mv(P,re,Ie,A,_e,Ce),Re=new kv(P,X),ue=new xv,le=new Ev(Ie),Ge=new R_(P,re,x,ne,g,l),Ne=new Cv(P,ne,A),ie=new Bv(C,k,A,x),ce=new P_(C,Ie,k),ee=new V_(C,Ie,k),k.programs=oe.programs,P.capabilities=A,P.extensions=Ie,P.properties=X,P.renderLists=ue,P.shadowMap=Ne,P.state=x,P.info=k}y!==Zt&&(T=new K_(y,t.width,t.height,o,i,r));const we=new Fv(P,C);this.xr=we,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=Ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(Be,Z,!1))},this.getSize=function(S){return S.set(Be,Z)},this.setSize=function(S,N,q=!0){if(we.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=S,Z=N,t.width=Math.floor(S*Q),t.height=Math.floor(N*Q),q===!0&&(t.style.width=S+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Be*Q,Z*Q).floor()},this.setDrawingBufferSize=function(S,N,q){Be=S,Z=N,Q=q,t.width=Math.floor(S*q),t.height=Math.floor(N*q),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(y===Zt){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(J)},this.getViewport=function(S){return S.copy(ge)},this.setViewport=function(S,N,q,G){S.isVector4?ge.set(S.x,S.y,S.z,S.w):ge.set(S,N,q,G),x.viewport(J.copy(ge).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(ze)},this.setScissor=function(S,N,q,G){S.isVector4?ze.set(S.x,S.y,S.z,S.w):ze.set(S,N,q,G),x.scissor(Ee.copy(ze).multiplyScalar(Q).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(S){x.setScissorTest(lt=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){Oe=S},this.getClearColor=function(S){return S.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,q=!0){let G=0;if(S){let H=!1;if(te!==null){const pe=te.texture.format;H=m.has(pe)}if(H){const pe=te.texture.type,ye=p.has(pe),fe=Ge.getClearColor(),Me=Ge.getClearAlpha(),Te=fe.r,Ve=fe.g,Ze=fe.b;ye?(M[0]=Te,M[1]=Ve,M[2]=Ze,M[3]=Me,C.clearBufferuiv(C.COLOR,0,M)):(w[0]=Te,w[1]=Ve,w[2]=Ze,w[3]=Me,C.clearBufferiv(C.COLOR,0,w))}else G|=C.COLOR_BUFFER_BIT}N&&(G|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",on,!1),Ge.dispose(),ue.dispose(),le.dispose(),X.dispose(),re.dispose(),ne.dispose(),_e.dispose(),ie.dispose(),oe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Xl),we.removeEventListener("sessionend",ql),xi.stop()};function pt(S){S.preventDefault(),ra("WebGLRenderer: Context Lost."),L=!0}function tt(){ra("WebGLRenderer: Context Restored."),L=!1;const S=k.autoReset,N=Ne.enabled,q=Ne.autoUpdate,G=Ne.needsUpdate,H=Ne.type;Le(),k.autoReset=S,Ne.enabled=N,Ne.autoUpdate=q,Ne.needsUpdate=G,Ne.type=H}function on(S){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function vn(S){const N=S.target;N.removeEventListener("dispose",vn),ud(N)}function ud(S){dd(S),X.remove(S)}function dd(S){const N=X.get(S).programs;N!==void 0&&(N.forEach(function(q){oe.releaseProgram(q)}),S.isShaderMaterial&&oe.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,q,G,H,pe){N===null&&(N=Ut);const ye=H.isMesh&&H.matrixWorld.determinantAffine()<0,fe=md(S,N,q,G,H);x.setMaterial(G,ye);let Me=q.index,Te=1;if(G.wireframe===!0){if(Me=j.getWireframeAttribute(q),Me===void 0)return;Te=2}const Ve=q.drawRange,Ze=q.attributes.position;let Se=Ve.start*Te,nt=(Ve.start+Ve.count)*Te;pe!==null&&(Se=Math.max(Se,pe.start*Te),nt=Math.min(nt,(pe.start+pe.count)*Te)),Me!==null?(Se=Math.max(Se,0),nt=Math.min(nt,Me.count)):Ze!=null&&(Se=Math.max(Se,0),nt=Math.min(nt,Ze.count));const wt=nt-Se;if(wt<0||wt===1/0)return;_e.setup(H,G,fe,q,Me);let _t,dt=ce;if(Me!==null&&(_t=ae.get(Me),dt=ee,dt.setIndex(_t)),H.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*se()),dt.setMode(C.LINES)):dt.setMode(C.TRIANGLES);else if(H.isLine){let Ft=G.linewidth;Ft===void 0&&(Ft=1),x.setLineWidth(Ft*se()),H.isLineSegments?dt.setMode(C.LINES):H.isLineLoop?dt.setMode(C.LINE_LOOP):dt.setMode(C.LINE_STRIP)}else H.isPoints?dt.setMode(C.POINTS):H.isSprite&&dt.setMode(C.TRIANGLES);if(H.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))dt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ft=H._multiDrawStarts,ve=H._multiDrawCounts,Bt=H._multiDrawCount,et=Me?ae.get(Me).bytesPerElement:1,jt=X.get(G).currentProgram.getUniforms();for(let yn=0;yn<Bt;yn++)jt.setValue(C,"_gl_DrawID",yn),dt.render(Ft[yn]/et,ve[yn])}else if(H.isInstancedMesh)dt.renderInstances(Se,wt,H.count);else if(q.isInstancedBufferGeometry){const Ft=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ve=Math.min(q.instanceCount,Ft);dt.renderInstances(Se,wt,ve)}else dt.render(Se,wt)};function Wl(S,N,q,G){U!==null&&S.isNodeMaterial&&U.setObject(G,S),Qe===!0&&Ce.setState(S,q,!1),S.transparent===!0&&S.side===Tn&&S.forceSinglePass===!1?(S.side=Xt,S.needsUpdate=!0,hr(S,N,G),S.side=gi,S.needsUpdate=!0,hr(S,N,G),S.side=Tn):hr(S,N,G)}this.compile=function(S,N,q=null){q===null&&(q=S),U!==null&&U.renderStart(S,N,q),E=le.get(q),E.init(N),_.push(E),q.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),S!==q&&S.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),ct=this.localClippingEnabled,Qe=Ce.init(this.clippingPlanes,ct),Qe===!0&&Ce.setGlobalState(this.clippingPlanes,N),U!==null&&Ne.render(E.state.shadowsArray,q,N);const G=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pe=H.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const fe=pe[ye];Wl(fe,q,N,H),G.add(fe)}else Wl(pe,q,N,H),G.add(pe)}),E=_.pop(),U!==null&&U.renderEnd(),G},this.compileAsync=function(S,N,q=null){const G=this.compile(S,N,q);return new Promise(H=>{function pe(){if(G.forEach(function(ye){const Me=X.get(ye).currentProgram;(Me===void 0||Me.isReady())&&G.delete(ye)}),G.size===0){H(S);return}setTimeout(pe,10)}Ie.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ma=null;function fd(S){Ma&&Ma(S)}function Xl(){xi.stop()}function ql(){xi.start()}const xi=new Ju;xi.setAnimationLoop(fd),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(S){Ma=S,we.setAnimationLoop(S),S===null?xi.stop():xi.start()},we.addEventListener("sessionstart",Xl),we.addEventListener("sessionend",ql),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(S,N);const q=we.enabled===!0&&we.isPresenting===!0,G=T!==null&&(te===null||q)&&T.begin(P,te);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(N),N=we.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,N,te),E=le.get(S,_.length),E.init(N),E.state.textureUnits=$.getTextureUnits(),_.push(E),Ke.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ye.setFromProjectionMatrix(Ke,Pn,N.reversedDepth),ct=this.localClippingEnabled,Qe=Ce.init(this.clippingPlanes,ct),b=ue.get(S,R.length),b.init(),R.push(b),we.enabled===!0&&we.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Sa(ye,N,-1/0,P.sortObjects)}Sa(S,N,0,P.sortObjects),b.finish(),U!==null&&U.updateLights(E.state.lightsArray),P.sortObjects===!0&&b.sort(me,Oe),O=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,O&&Ge.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ce.beginShadows();const H=E.state.shadowsArray;if(Ne.render(H,S,N),Qe===!0&&Ce.endShadows(),(G&&T.hasRenderPass())===!1){const ye=b.opaque,fe=b.transmissive;if(E.setupLights(),N.isArrayCamera){const Me=N.cameras;if(fe.length>0)for(let Te=0,Ve=Me.length;Te<Ve;Te++){const Ze=Me[Te];Kl(ye,fe,S,Ze)}O&&Ge.render(S);for(let Te=0,Ve=Me.length;Te<Ve;Te++){const Ze=Me[Te];Yl(b,S,Ze,Ze.viewport)}}else fe.length>0&&Kl(ye,fe,S,N),O&&Ge.render(S),Yl(b,S,N)}te!==null&&W===0&&($.updateMultisampleRenderTarget(te),$.updateRenderTargetMipmap(te)),G&&T.end(P),S.isScene===!0&&S.onAfterRender(P,S,N),_e.resetDefaultState(),Y=-1,K=null,_.pop(),_.length>0?(E=_[_.length-1],$.setTextureUnits(E.state.textureUnits),Qe===!0&&Ce.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,U!==null&&U.renderEnd()};function Sa(S,N,q,G){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ye)){G&&Mt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ke);const ye=ne.update(S),fe=S.material;fe.visible&&b.push(S,ye,fe,q,Mt.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ye))){const ye=ne.update(S),fe=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Mt.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Mt.copy(ye.boundingSphere.center)),Mt.applyMatrix4(S.matrixWorld).applyMatrix4(Ke)),Array.isArray(fe)){const Me=ye.groups;for(let Te=0,Ve=Me.length;Te<Ve;Te++){const Ze=Me[Te],Se=fe[Ze.materialIndex];Se&&Se.visible&&b.push(S,ye,Se,q,Mt.z,Ze,N)}}else fe.visible&&b.push(S,ye,fe,q,Mt.z,null,N)}}const pe=S.children;for(let ye=0,fe=pe.length;ye<fe;ye++)Sa(pe[ye],N,q,G)}function Yl(S,N,q,G){const{opaque:H,transmissive:pe,transparent:ye}=S;E.setupLightsView(q),Qe===!0&&Ce.setGlobalState(P.clippingPlanes,q),G&&x.viewport(J.copy(G)),H.length>0&&cr(H,N,q),pe.length>0&&cr(pe,N,q),ye.length>0&&cr(ye,N,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Kl(S,N,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const Se=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new mn(1,1,{generateMipmaps:!0,type:Se?Nn:Zt,minFilter:qn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const pe=E.state.transmissionRenderTarget[G.id],ye=G.viewport||J;pe.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const fe=P.getRenderTarget(),Me=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(pe),P.getClearColor(Xe),qe=P.getClearAlpha(),qe<1&&P.setClearColor(16777215,.5),P.clear(),O&&Ge.render(q);const Ve=P.toneMapping;P.toneMapping=Ln;const Ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),Qe===!0&&Ce.setGlobalState(P.clippingPlanes,G),cr(S,q,G),$.updateMultisampleRenderTarget(pe),$.updateRenderTargetMipmap(pe),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let nt=0,wt=N.length;nt<wt;nt++){const _t=N[nt],{object:dt,geometry:Ft,material:ve,group:Bt}=_t;if(ve.side===Tn&&dt.layers.test(G.layers)){const et=ve.side;ve.side=Xt,ve.needsUpdate=!0,$l(dt,q,G,Ft,ve,Bt),ve.side=et,ve.needsUpdate=!0,Se=!0}}Se===!0&&($.updateMultisampleRenderTarget(pe),$.updateRenderTargetMipmap(pe))}P.setRenderTarget(fe,Me,Te),P.setClearColor(Xe,qe),Ze!==void 0&&(G.viewport=Ze),P.toneMapping=Ve}function cr(S,N,q){const G=N.isScene===!0?N.overrideMaterial:null;for(let H=0,pe=S.length;H<pe;H++){const ye=S[H],{object:fe,geometry:Me,group:Te}=ye;let Ve=ye.material;Ve.allowOverride===!0&&G!==null&&(Ve=G),fe.layers.test(q.layers)&&$l(fe,N,q,Me,Ve,Te)}}function $l(S,N,q,G,H,pe){U!==null&&H.isNodeMaterial&&U.setObject(S,H),S.onBeforeRender(P,N,q,G,H,pe),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(P,N,q,G,S,pe),H.transparent===!0&&H.side===Tn&&H.forceSinglePass===!1?(H.side=Xt,H.needsUpdate=!0,P.renderBufferDirect(q,N,G,H,S,pe),H.side=gi,H.needsUpdate=!0,P.renderBufferDirect(q,N,G,H,S,pe),H.side=Tn):P.renderBufferDirect(q,N,G,H,S,pe),S.onAfterRender(P,N,q,G,H,pe)}function hr(S,N,q){N.isScene!==!0&&(N=Ut);const G=X.get(S),H=E.state.lights,pe=E.state.shadowsArray,ye=H.state.version,fe=oe.getParameters(S,H.state,pe,N,q,E.state.lightProbeGridArray),Me=oe.getProgramCacheKey(fe);let Te=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const Ve=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=re.get(S.envMap||G.environment,Ve),G.envMapRotation=G.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Te===void 0&&(S.addEventListener("dispose",vn),Te=new Map,G.programs=Te);let Ze=Te.get(Me);if(Ze!==void 0){if(G.currentProgram===Ze&&G.lightsStateVersion===ye)return Jl(S,fe),Ze}else fe.uniforms=oe.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,q,fe),S.onBeforeCompile(fe,P),Ze=oe.acquireProgram(fe,Me),Te.set(Me,Ze),G.uniforms=fe.uniforms;const Se=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=Ce.uniform),Jl(S,fe),G.needsLights=_d(S),G.lightsStateVersion=ye,G.needsLights&&(Se.ambientLightColor.value=H.state.ambient,Se.lightProbe.value=H.state.probe,Se.sunLights.value=H.state.sun,Se.sunLightShadows.value=H.state.sunShadow,Se.directionalLights.value=H.state.directional,Se.directionalLightShadows.value=H.state.directionalShadow,Se.spotLights.value=H.state.spot,Se.spotLightShadows.value=H.state.spotShadow,Se.rectAreaLights.value=H.state.rectArea,Se.ltc_1.value=H.state.rectAreaLTC1,Se.ltc_2.value=H.state.rectAreaLTC2,Se.pointLights.value=H.state.point,Se.pointLightShadows.value=H.state.pointShadow,Se.hemisphereLights.value=H.state.hemi,Se.sunShadowMatrix.value=H.state.sunShadowMatrix,Se.sunShadowCascade.value=H.state.sunShadowCascade,Se.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Se.spotLightMatrix.value=H.state.spotLightMatrix,Se.spotLightMap.value=H.state.spotLightMap,Se.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=Ze,G.uniformsList=null,Ze}function Zl(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Qr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Jl(S,N){const q=X.get(S);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function pd(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let q=0,G=S.length;q<G;q++){const H=S[q];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function md(S,N,q,G,H){N.isScene!==!0&&(N=Ut),$.resetTextureUnits();const pe=N.fog,ye=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,fe=te===null?P.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Je.workingColorSpace,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Te=re.get(G.envMap||ye,Me),Ve=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ze=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,wt=!!q.morphAttributes.color;let _t=Ln;G.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(_t=P.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ft=dt!==void 0?dt.length:0,ve=X.get(G),Bt=E.state.lights;if(Qe===!0&&(ct===!0||S!==K)){const mt=S===K&&G.id===Y;Ce.setState(G,S,mt)}let et=!1;G.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Bt.state.version||ve.outputColorSpace!==fe||H.isBatchedMesh&&ve.batching===!1||!H.isBatchedMesh&&ve.batching===!0||H.isBatchedMesh&&ve.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ve.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ve.instancing===!1||!H.isInstancedMesh&&ve.instancing===!0||H.isSkinnedMesh&&ve.skinning===!1||!H.isSkinnedMesh&&ve.skinning===!0||H.isInstancedMesh&&ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ve.instancingMorph===!1&&H.morphTexture!==null||ve.envMap!==Te||G.fog===!0&&ve.fog!==pe||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ce.numPlanes||ve.numIntersection!==Ce.numIntersection)||ve.vertexAlphas!==Ve||ve.vertexTangents!==Ze||ve.morphTargets!==Se||ve.morphNormals!==nt||ve.morphColors!==wt||ve.toneMapping!==_t||ve.morphTargetsCount!==Ft||!!ve.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,ve.__version=G.version);let jt=ve.currentProgram;et===!0&&(jt=hr(G,N,H),U&&G.isNodeMaterial&&U.onUpdateProgram(G,jt,ve));let yn=!1,ni=!1,Ni=!1;const ht=jt.getUniforms(),St=ve.uniforms;if(x.useProgram(jt.program)&&(yn=!0,ni=!0,Ni=!0),G.id!==Y&&(Y=G.id,ni=!0),ve.needsLights){const mt=pd(E.state.lightProbeGridArray,H);ve.lightProbeGrid!==mt&&(ve.lightProbeGrid=mt,ni=!0)}if(yn||K!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(C,"projectionMatrix",S.projectionMatrix),ht.setValue(C,"viewMatrix",S.matrixWorldInverse);const si=ht.map.cameraPosition;si!==void 0&&si.setValue(C,ft.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&ht.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),K!==S&&(K=S,ni=!0,Ni=!0)}if(ve.needsLights&&(Bt.state.sunShadowMap.length>0&&ht.setValue(C,"sunShadowMap",Bt.state.sunShadowMap,$),Bt.state.directionalShadowMap.length>0&&ht.setValue(C,"directionalShadowMap",Bt.state.directionalShadowMap,$),Bt.state.spotShadowMap.length>0&&ht.setValue(C,"spotShadowMap",Bt.state.spotShadowMap,$),Bt.state.pointShadowMap.length>0&&ht.setValue(C,"pointShadowMap",Bt.state.pointShadowMap,$)),H.isSkinnedMesh){ht.setOptional(C,H,"bindMatrix"),ht.setOptional(C,H,"bindMatrixInverse");const mt=H.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(C,"boneTexture",mt.boneTexture,$))}H.isBatchedMesh&&(ht.setOptional(C,H,"batchingTexture"),ht.setValue(C,"batchingTexture",H._matricesTexture,$),ht.setOptional(C,H,"batchingIdTexture"),ht.setValue(C,"batchingIdTexture",H._indirectTexture,$),ht.setOptional(C,H,"batchingColorTexture"),H._colorsTexture!==null&&ht.setValue(C,"batchingColorTexture",H._colorsTexture,$));const ii=q.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&F.update(H,q,jt),(ni||ve.receiveShadow!==H.receiveShadow)&&(ve.receiveShadow=H.receiveShadow,ht.setValue(C,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(St.envMapIntensity.value=N.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=Gv()),ni){if(ht.setValue(C,"toneMappingExposure",P.toneMappingExposure),ve.needsLights&&gd(St,Ni),pe&&G.fog===!0&&Re.refreshFogUniforms(St,pe),Re.refreshMaterialUniforms(St,G,Q,Z,E.state.transmissionRenderTarget[S.id]),ve.needsLights&&ve.lightProbeGrid){const mt=ve.lightProbeGrid;St.probesSH.value=mt.texture,St.probesMin.value.copy(mt.boundingBox.min),St.probesMax.value.copy(mt.boundingBox.max),St.probesResolution.value.copy(mt.resolution)}Qr.upload(C,Zl(ve),St,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qr.upload(C,Zl(ve),St,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(C,"center",H.center),ht.setValue(C,"modelViewMatrix",H.modelViewMatrix),ht.setValue(C,"normalMatrix",H.normalMatrix),ht.setValue(C,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const mt=G.uniformsGroups;for(let si=0,Di=mt.length;si<Di;si++){const Ql=mt[si];ie.update(Ql,jt),ie.bind(Ql,jt)}}return jt}function gd(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function _d(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(S,N,q){const G=X.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=N,X.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const q=X.get(S);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,q=0){te=S,V=N,W=q;let G=null,H=!1,pe=!1;if(S){const fe=X.get(S);if(fe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(C.FRAMEBUFFER,fe.__webglFramebuffer),J.copy(S.viewport),Ee.copy(S.scissor),xe=S.scissorTest,x.viewport(J),x.scissor(Ee),x.setScissorTest(xe),Y=-1;return}else if(fe.__webglFramebuffer===void 0)$.setupRenderTarget(S);else if(fe.__hasExternalTextures)$.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ve=S.depthTexture;if(fe.__boundDepthTexture!==Ve){if(Ve!==null&&X.has(Ve)&&(S.width!==Ve.image.width||S.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(S)}}const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Te=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?G=Te[N][q]:G=Te[N],H=!0):S.samples>0&&$.useMultisampledRTT(S)===!1?G=X.get(S).__webglMultisampledFramebuffer:Array.isArray(Te)?G=Te[q]:G=Te,J.copy(S.viewport),Ee.copy(S.scissor),xe=S.scissorTest}else J.copy(ge).multiplyScalar(Q).floor(),Ee.copy(ze).multiplyScalar(Q).floor(),xe=lt;if(q!==0&&(G=B),x.bindFramebuffer(C.FRAMEBUFFER,G)&&x.drawBuffers(S,G),x.viewport(J),x.scissor(Ee),x.setScissorTest(xe),H){const fe=X.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,q)}else if(pe){const fe=N;for(let Me=0;Me<S.textures.length;Me++){const Te=X.get(S.textures[Me]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Me,Te.__webglTexture,q,fe)}}else if(S!==null&&q!==0){const fe=X.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,fe.__webglTexture,q)}Y=-1};function jl(S){const N=X.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=A.textureFormatReadable(S.format),N.__typeReadable=A.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,q,G,H,pe,ye,fe=0){if(!(S&&S.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me){x.bindFramebuffer(C.FRAMEBUFFER,Me);try{const Te=S.textures[fe],Ve=Te.format,Ze=Te.type;S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+fe);const Se=jl(Te);if(Se.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-G&&q>=0&&q<=S.height-H&&C.readPixels(N,q,G,H,he.convert(Ve),he.convert(Ze),pe)}finally{const Te=te!==null?X.get(te).__webglFramebuffer:null;x.bindFramebuffer(C.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(S,N,q,G,H,pe,ye,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me)if(N>=0&&N<=S.width-G&&q>=0&&q<=S.height-H){x.bindFramebuffer(C.FRAMEBUFFER,Me);const Te=S.textures[fe],Ve=Te.format,Ze=Te.type;S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+fe);const Se=jl(Te);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,nt),C.bufferData(C.PIXEL_PACK_BUFFER,pe.byteLength,C.STREAM_READ),C.readPixels(N,q,G,H,he.convert(Ve),he.convert(Ze),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);const wt=te!==null?X.get(te).__webglFramebuffer:null;x.bindFramebuffer(C.FRAMEBUFFER,wt);const _t=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await pp(C,_t,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,nt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,pe),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(nt),C.deleteSync(_t),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,q=0){const G=Math.pow(2,-q),H=Math.floor(S.image.width*G),pe=Math.floor(S.image.height*G),ye=N!==null?N.x:0,fe=N!==null?N.y:0;$.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,q,0,0,ye,fe,H,pe),x.unbindTexture()},this.copyTextureToTexture=function(S,N,q=null,G=null,H=0,pe=0){let ye,fe,Me,Te,Ve,Ze,Se,nt,wt;const _t=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(q!==null)ye=q.max.x-q.min.x,fe=q.max.y-q.min.y,Me=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,Ve=q.min.y,Ze=q.isBox3?q.min.z:0;else{const St=Math.pow(2,-H);ye=Math.floor(_t.width*St),fe=Math.floor(_t.height*St),S.isDataArrayTexture?Me=_t.depth:S.isData3DTexture?Me=Math.floor(_t.depth*St):Me=1,Te=0,Ve=0,Ze=0}G!==null?(Se=G.x,nt=G.y,wt=G.z):(Se=0,nt=0,wt=0);const dt=he.convert(N.format),Ft=he.convert(N.type);let ve;N.isData3DTexture?($.setTexture3D(N,0),ve=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?($.setTexture2DArray(N,0),ve=C.TEXTURE_2D_ARRAY):($.setTexture2D(N,0),ve=C.TEXTURE_2D),x.activeTexture(C.TEXTURE0),x.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const Bt=x.getParameter(C.UNPACK_ROW_LENGTH),et=x.getParameter(C.UNPACK_IMAGE_HEIGHT),jt=x.getParameter(C.UNPACK_SKIP_PIXELS),yn=x.getParameter(C.UNPACK_SKIP_ROWS),ni=x.getParameter(C.UNPACK_SKIP_IMAGES);x.pixelStorei(C.UNPACK_ROW_LENGTH,_t.width),x.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_t.height),x.pixelStorei(C.UNPACK_SKIP_PIXELS,Te),x.pixelStorei(C.UNPACK_SKIP_ROWS,Ve),x.pixelStorei(C.UNPACK_SKIP_IMAGES,Ze);const Ni=S.isDataArrayTexture||S.isData3DTexture,ht=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const St=X.get(S),ii=X.get(N),mt=X.get(St.__renderTarget),si=X.get(ii.__renderTarget);x.bindFramebuffer(C.READ_FRAMEBUFFER,mt.__webglFramebuffer),x.bindFramebuffer(C.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let Di=0;Di<Me;Di++)Ni&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,X.get(S).__webglTexture,H,Ze+Di),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,X.get(N).__webglTexture,pe,wt+Di)),C.blitFramebuffer(Te,Ve,ye,fe,Se,nt,ye,fe,C.DEPTH_BUFFER_BIT,C.NEAREST);x.bindFramebuffer(C.READ_FRAMEBUFFER,null),x.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||X.has(S)){const St=X.get(S),ii=X.get(N);x.bindFramebuffer(C.READ_FRAMEBUFFER,I),x.bindFramebuffer(C.DRAW_FRAMEBUFFER,z);for(let mt=0;mt<Me;mt++)Ni?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,St.__webglTexture,H,Ze+mt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,St.__webglTexture,H),ht?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ii.__webglTexture,pe,wt+mt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ii.__webglTexture,pe),H!==0?C.blitFramebuffer(Te,Ve,ye,fe,Se,nt,ye,fe,C.COLOR_BUFFER_BIT,C.NEAREST):ht?C.copyTexSubImage3D(ve,pe,Se,nt,wt+mt,Te,Ve,ye,fe):C.copyTexSubImage2D(ve,pe,Se,nt,Te,Ve,ye,fe);x.bindFramebuffer(C.READ_FRAMEBUFFER,null),x.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ht?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(ve,pe,Se,nt,wt,ye,fe,Me,dt,Ft,_t.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(ve,pe,Se,nt,wt,ye,fe,Me,dt,_t.data):C.texSubImage3D(ve,pe,Se,nt,wt,ye,fe,Me,dt,Ft,_t):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,pe,Se,nt,ye,fe,dt,Ft,_t.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,pe,Se,nt,_t.width,_t.height,dt,_t.data):C.texSubImage2D(C.TEXTURE_2D,pe,Se,nt,ye,fe,dt,Ft,_t);x.pixelStorei(C.UNPACK_ROW_LENGTH,Bt),x.pixelStorei(C.UNPACK_IMAGE_HEIGHT,et),x.pixelStorei(C.UNPACK_SKIP_PIXELS,jt),x.pixelStorei(C.UNPACK_SKIP_ROWS,yn),x.pixelStorei(C.UNPACK_SKIP_IMAGES,ni),pe===0&&N.generateMipmaps&&C.generateMipmap(ve),x.unbindTexture()},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&$.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?$.setTextureCube(S,0):S.isData3DTexture?$.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$.setTexture2DArray(S,0):$.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){V=0,W=0,te=null,x.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Hv={floor:{base:"#4a4e57",kind:"plate",scale:.25,metal:.25},wall:{base:"#2c3039",kind:"concrete",scale:.125,metal:.1},metal:{base:"#59606d",kind:"grate",scale:.5,metal:.55},stair:{base:"#5f6570",kind:"hazard",scale:.5,metal:.35},rail:{base:"#d08a32",kind:"rail",scale:1,metal:.5},crate:{base:"#6e5a40",kind:"crate",scale:.5,metal:.1},pillar:{base:"#59606e",kind:"pillar",scale:.25,metal:.4}};function ol(s){return()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296)}function Vv(s,e){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d"),i=ol(s.length*977+11);n.fillStyle=e,n.fillRect(0,0,256,256);for(let r=0;r<9e3;r++){const a=i()>.5?255:0;n.fillStyle=`rgba(${a},${a},${a},${.02+i()*.04})`,n.fillRect(i()*256,i()*256,1+i()*2,1+i()*2)}if(n.lineWidth=2,s==="plate"){n.strokeStyle="rgba(0,0,0,.45)",n.strokeRect(1,1,254,254),n.strokeRect(128,1,0,254),n.strokeRect(1,128,254,0),n.fillStyle="rgba(255,255,255,.08)";for(const[r,a]of[[10,10],[118,10],[138,10],[246,10],[10,118],[246,118],[10,246],[246,246],[118,246],[138,246],[10,138],[246,138]])n.fillRect(r-3,a-3,6,6)}if(s==="concrete"){n.fillStyle="rgba(0,0,0,.25)",n.fillRect(0,120,256,6),n.fillStyle="rgba(255,140,40,.35)",n.fillRect(0,0,256,4);for(let r=0;r<6;r++)n.fillStyle="rgba(0,0,0,.12)",n.fillRect(i()*256,0,2+i()*3,256)}if(s==="grate"){n.strokeStyle="rgba(0,0,0,.55)";for(let r=0;r<=256;r+=32)n.beginPath(),n.moveTo(r,0),n.lineTo(r,256),n.stroke();n.strokeStyle="rgba(255,255,255,.1)";for(let r=2;r<=256;r+=32)n.beginPath(),n.moveTo(r,0),n.lineTo(r,256),n.stroke()}if(s==="hazard"){for(let r=-256;r<512;r+=48)n.fillStyle="rgba(240,170,40,.75)",n.beginPath(),n.moveTo(r,0),n.lineTo(r+24,0),n.lineTo(r+24-60,60),n.lineTo(r-60,60),n.fill();n.fillStyle="rgba(0,0,0,.4)",n.fillRect(0,60,256,4)}if(s==="rail"){n.fillStyle="rgba(0,0,0,.4)";for(let r=0;r<256;r+=64)n.fillRect(r,0,8,256)}if(s==="crate"&&(n.strokeStyle="rgba(30,20,10,.7)",n.lineWidth=10,n.strokeRect(6,6,244,244),n.beginPath(),n.moveTo(10,10),n.lineTo(246,246),n.stroke()),s==="pillar"){n.fillStyle="rgba(0,0,0,.35)";for(let r=0;r<256;r+=64)n.fillRect(0,r,256,6);n.fillStyle="rgba(120,220,255,.5)",n.fillRect(120,0,16,256)}return t}function Wv(s,e){const t=[],n=[],i=[],r=(o,l,c)=>{for(const h of[0,1,2,0,2,3]){const d=l[h];t.push(...d),n.push(...o);const[u,f]=c(d);i.push(u*e,f*e)}};for(const o of s){const{min:l,max:c}=o;r([0,1,0],[[l.x,c.y,l.z],[l.x,c.y,c.z],[c.x,c.y,c.z],[c.x,c.y,l.z]],h=>[h[0],h[2]]),r([0,-1,0],[[l.x,l.y,l.z],[c.x,l.y,l.z],[c.x,l.y,c.z],[l.x,l.y,c.z]],h=>[h[0],h[2]]),r([1,0,0],[[c.x,l.y,l.z],[c.x,c.y,l.z],[c.x,c.y,c.z],[c.x,l.y,c.z]],h=>[h[2],h[1]]),r([-1,0,0],[[l.x,l.y,l.z],[l.x,l.y,c.z],[l.x,c.y,c.z],[l.x,c.y,l.z]],h=>[h[2],h[1]]),r([0,0,1],[[l.x,l.y,c.z],[c.x,l.y,c.z],[c.x,c.y,c.z],[l.x,c.y,c.z]],h=>[h[0],h[1]]),r([0,0,-1],[[l.x,l.y,l.z],[l.x,c.y,l.z],[c.x,c.y,l.z],[c.x,l.y,l.z]],h=>[h[0],h[1]])}const a=new Et;return a.setAttribute("position",new st(t,3)),a.setAttribute("normal",new st(n,3)),a.setAttribute("uv",new st(i,2)),a}const dn=.44,Wn=.46,ho=dn+Wn;function Gh(s,e){const t=Math.min(dn+Wn-.001,Math.max(.05,Math.hypot(e,s))),n=Math.atan2(e,s),i=Math.acos(Math.max(-1,Math.min(1,(dn*dn+t*t-Wn*Wn)/(2*dn*t)))),r=Math.acos(Math.max(-1,Math.min(1,(dn*dn+Wn*Wn-t*t)/(2*dn*Wn))));return[n+i,-(Math.PI-r)]}class Xv{renderer;scene=new oa;camera=new Rt(80,1,.05,300);gunScene=new oa;gunCamera=new Rt(60,1,.01,10);canvas;arena;disposables=[];avatars=new Map;items=[];pads=[];lava;lavaLight;rocketMeshes=[];tracerMeshes=[];blastMeshes=[];sparkMeshes=[];flashLight;smoke;puffs=[];dummy=new gt;viewGuns=[];viewFlash;bob=0;roll=0;fov=80;slideTilt=0;kick=0;time=0;shownWeapon=-1;switchAnim=0;width=0;height=0;constructor(e,t){this.canvas=e,this.arena=t,this.renderer=new rd({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=yt,this.renderer.toneMapping=ma,this.renderer.toneMappingExposure=1.25,this.renderer.autoClear=!1,this.scene.background=new De(724764),this.scene.fog=new wl(724764,35,110),this.scene.add(new sl(9414360,3810328,2.1));const n=new us(12571391,1.3);n.position.set(-20,40,15),this.scene.add(n);const i=new us(16752736,.6);i.position.set(25,10,-30),this.scene.add(i),this.lavaLight=new _s(16738848,60,40,1.6),this.lavaLight.position.set(0,1,0),this.scene.add(this.lavaLight),this.flashLight=new _s(16756832,0,16,2),this.scene.add(this.flashLight),this.buildArena(),this.buildPads(),this.buildItems(),this.buildSky();const r=this.track(new Ai(.18,0));this.smoke=new Hu(r,this.track(new Vt({color:10132134,transparent:!0,opacity:.35,depthWrite:!1})),160),this.smoke.instanceMatrix.setUsage(hp),this.smoke.frustumCulled=!1,this.smoke.count=0,this.scene.add(this.smoke),this.gunScene.add(new sl(14674175,3154970,2.4));const a=new us(16769728,2.2);a.position.set(-1,2,1),this.gunScene.add(a);for(const o of[0,1,2]){const l=this.weaponModel(o,!0);l.scale.setScalar(.5),l.visible=!1,this.viewGuns.push(l),this.gunScene.add(l)}this.viewFlash=new it(this.track(new Dl(.05,0)),this.track(new Vt({color:16751168,transparent:!0,opacity:.85,blending:Ti,depthWrite:!1}))),this.viewFlash.position.set(.28,-.2,-1.05),this.gunScene.add(this.viewFlash),this.resize()}track(e){return this.disposables.push(e),e}std(e,t={}){return this.track(new Jn({color:e,roughness:.75,metalness:.3,...t}))}glow(e,t=1){return this.track(new Vt({color:e,transparent:t<1,opacity:t,blending:t<1?Ti:ls,depthWrite:t>=1}))}mesh(e,t,n,i=0,r=0,a=0){const o=new it(t,n);return o.position.set(i,r,a),e.add(o),o}boxGeo(e,t,n){return this.track(new Qn(e,t,n))}buildArena(){const e=new Map;for(const u of this.arena.solids){const f=e.get(u.style)||[];f.push(u),e.set(u.style,f)}for(const[u,f]of e){const g=Hv[u],y=this.track(new to(Vv(g.kind,g.base)));y.wrapS=y.wrapT=an,y.colorSpace=yt,y.anisotropy=4;const m=new it(this.track(Wv(f,g.scale)),this.std(16777215,{map:y,metalness:g.metal,roughness:u==="rail"?.4:.8,emissive:u==="rail"?2757632:0}));this.scene.add(m)}const t=this.glow(7329535),n=this.glow(16752704);for(const u of[-1,1])for(const f of[2.2,8.5,14])this.mesh(this.scene,this.boxGeo(64,.12,.05),f>8?t:n,0,f,u*31.97),this.mesh(this.scene,this.boxGeo(.05,.12,64),f>8?t:n,u*31.97,f,0);for(const[u,f,g,y]of[[-26,26,26,26],[-26,26,-26,-26],[-26,-26,-26,26],[26,26,-26,26]]){const m=Math.max(.06,f-u),p=Math.max(.06,y-g);this.mesh(this.scene,this.boxGeo(m,.06,p),t,(u+f)/2,4.47,(g+y)/2)}for(const u of[-1,1])this.mesh(this.scene,this.boxGeo(12.1,.1,.08),n,0,9.42,u*6.04),this.mesh(this.scene,this.boxGeo(.08,.1,12.1),n,u*6.04,9.42,0);const i=document.createElement("canvas");i.width=i.height=256;const r=i.getContext("2d"),a=ol(42),o=r.createLinearGradient(0,0,256,256);o.addColorStop(0,"#ff3d0a"),o.addColorStop(.5,"#ff8a1f"),o.addColorStop(1,"#ff2a05"),r.fillStyle=o,r.fillRect(0,0,256,256);for(let u=0;u<70;u++)r.fillStyle=`rgba(${60+a()*40},${10+a()*20},0,${.4+a()*.4})`,r.beginPath(),r.ellipse(a()*256,a()*256,8+a()*30,5+a()*16,a()*3,0,Math.PI*2),r.fill();for(let u=0;u<40;u++)r.fillStyle=`rgba(255,${200+a()*55},120,${.3+a()*.5})`,r.beginPath(),r.arc(a()*256,a()*256,1+a()*4,0,Math.PI*2),r.fill();this.lava=this.track(new to(i)),this.lava.wrapS=this.lava.wrapT=an,this.lava.repeat.set(3,3),this.lava.colorSpace=yt;const l=this.arena.lava,c=l.max.x-l.min.x,h=l.max.z-l.min.z,d=new it(this.track(new or(c,h)),this.track(new Vt({map:this.lava,color:16777215})));d.rotation.x=-Math.PI/2,d.position.set((l.min.x+l.max.x)/2,l.max.y,(l.min.z+l.max.z)/2),this.scene.add(d)}buildPads(){const e=this.glow(5828863),t=this.glow(5828863,.16),n=this.std(2831168,{metalness:.7});for(const i of this.arena.pads){const r=new vt;r.position.set(i.center.x,i.center.y,i.center.z),this.scene.add(r),this.mesh(r,this.track(new Vn(1.15,1.25,.18,24)),n,0,.09,0);const a=this.mesh(r,this.track(new Vn(.9,.9,.02,24)),e,0,.19,0);this.pads.push(a);const o=this.mesh(r,this.track(new Vn(.85,1,4,24,1,!0)),t,0,2.2,0);o.renderOrder=2}}buildItems(){for(const e of this.arena.items){const t=new vt;t.position.set(e.pos.x,e.pos.y,e.pos.z),this.scene.add(t);const n=e.kind==="mega"?5223679:e.kind==="armor"?16761402:e.kind==="health"?6160266:e.kind==="shotgun"||e.kind==="shells"?16751165:16731469;this.mesh(t,this.track(new Vn(.55,.6,.06,20)),this.glow(n,.5),0,.03,0);const i=new vt;if(i.position.y=.75,t.add(i),e.kind==="mega")this.mesh(i,this.track(new Ai(.42,1)),this.std(n,{emissive:n,emissiveIntensity:.9,metalness:.1,roughness:.2}));else if(e.kind==="health"){const r=this.std(15921906);this.mesh(i,this.boxGeo(.5,.5,.5),r);const a=this.glow(n);this.mesh(i,this.boxGeo(.52,.14,.36),a),this.mesh(i,this.boxGeo(.52,.36,.14),a)}else if(e.kind==="armor"){const r=this.std(n,{metalness:.8,roughness:.3,emissive:3810560});this.mesh(i,this.boxGeo(.6,.55,.22),r),this.mesh(i,this.boxGeo(.3,.2,.24),r,0,.34,0)}else if(e.kind==="shells"||e.kind==="rockets"){const r=this.std(4212304);this.mesh(i,this.boxGeo(.55,.35,.4),r),this.mesh(i,this.boxGeo(.57,.08,.42),this.glow(n),0,.06,0)}else{const r=this.weaponModel(e.kind==="shotgun"?1:2,!1);r.scale.setScalar(1.4),r.rotation.y=Math.PI/2,i.add(r)}this.items.push({kind:e.kind,group:i,base:e.pos})}}buildSky(){const e=[],t=ol(9);for(let r=0;r<600;r++){const a=t()*Math.PI*2,o=.15+t()*1.2,l=200;e.push(Math.cos(a)*Math.cos(o)*l,Math.sin(o)*l,Math.sin(a)*Math.cos(o)*l)}const n=this.track(new Et);n.setAttribute("position",new st(e,3)),this.scene.add(new Ll(n,this.track(new Pl({color:13621503,size:1.2,sizeAttenuation:!1,fog:!1}))));const i=this.glow(16724016);for(const r of[-32.5,32.5])for(const a of[-32.5,32.5])this.mesh(this.scene,this.track(new ir(.3,8,6)),i,r,18.4,a)}weaponModel(e,t){const n=new vt,i=this.std(4870494,{metalness:.35,roughness:.5}),r=this.std(e===0?4182271:e===1?16751165:16731469,{emissive:e===0?674406:e===1?4858880:4852234,metalness:.5});if(e===0&&(this.mesh(n,this.boxGeo(.08,.1,.42),i),this.mesh(n,this.boxGeo(.05,.05,.3),r,0,.03,-.3),this.mesh(n,this.boxGeo(.06,.14,.08),i,0,-.1,.08)),e===1){this.mesh(n,this.boxGeo(.1,.11,.5),i);for(const a of[-.03,.03]){const o=this.mesh(n,this.track(new Vn(.025,.025,.5,8)),r,a,.03,-.38);o.rotation.x=Math.PI/2}this.mesh(n,this.boxGeo(.08,.16,.1),i,0,-.1,.12)}if(e===2){const a=this.mesh(n,this.track(new Vn(.075,.085,.75,12)),i,0,0,-.2);a.rotation.x=Math.PI/2,this.mesh(n,this.track(new Ul(.085,.02,6,16)),r,0,0,-.57),this.mesh(n,this.boxGeo(.07,.15,.1),i,0,-.12,.05),this.mesh(n,this.boxGeo(.04,.05,.3),r,0,.09,-.15)}return t||(n.position.y=0),n}avatar(e){const t=this.avatars.get(e.id);if(t)return t;const n=this.std(e.color,{emissive:e.color,emissiveIntensity:.3,metalness:.35,roughness:.45}),i=this.std(4870236,{metalness:.15,roughness:.8}),r=this.std(6975872,{metalness:.55,roughness:.4}),a=this.glow(15268863),o=this.glow(e.color),l=new vt,c=new vt;c.position.y=ho,l.add(c),this.mesh(c,this.boxGeo(.34,.16,.22),i),this.mesh(c,this.boxGeo(.36,.06,.24),r,0,.07,0);const h=E=>{const R=new vt;R.position.set(E*.11,-.04,0),c.add(R),this.mesh(R,this.boxGeo(.15,dn,.17),i,0,-dn/2,0),this.mesh(R,this.boxGeo(.16,.2,.05),r,0,-.2,-.09);const _=new vt;return _.position.y=-dn,R.add(_),this.mesh(_,this.boxGeo(.14,.12,.06),n,0,0,-.09),this.mesh(_,this.boxGeo(.13,Wn-.08,.15),i,0,-.38/2,0),this.mesh(_,this.boxGeo(.15,.1,.27),r,0,-Wn+.05,-.05),{hip:R,knee:_}},d=[h(-1),h(1)],u=new vt;c.add(u),this.mesh(u,this.boxGeo(.3,.24,.2),i,0,.16,0),this.mesh(u,this.boxGeo(.44,.32,.28),n,0,.42,0),this.mesh(u,this.boxGeo(.2,.1,.04),r,0,.49,-.15),this.mesh(u,this.boxGeo(.22,.025,.01),o,0,.35,-.143),this.mesh(u,this.boxGeo(.32,.36,.14),r,0,.42,.2),this.mesh(u,this.boxGeo(.015,.3,.015),r,.12,.72,.24);for(const E of[-1,1])this.mesh(u,this.boxGeo(.15,.1,.22),n,E*.27,.56,0);this.mesh(u,this.boxGeo(.1,.08,.1),i,0,.6,0);const f=new vt;f.position.y=.64,u.add(f),this.mesh(f,this.track(new ir(.16,16,12)),r,0,.13,0).scale.set(1,1.05,1.08),this.mesh(f,this.boxGeo(.25,.08,.07),a,0,.13,-.13),this.mesh(f,this.boxGeo(.04,.04,.3),o,0,.29,0);const g=new vt;g.position.y=.5,u.add(g);const y=(E,R,_,T)=>{const P=new D(...E),L=new D(...R),U=new it(this.boxGeo(_,_,P.distanceTo(L)+_*.6),T);U.position.copy(P).add(L).multiplyScalar(.5),U.quaternion.setFromUnitVectors(new D(0,0,1),L.clone().sub(P).normalize()),g.add(U)};y([.25,0,0],[.24,-.22,-.1],.1,i),y([.24,-.22,-.1],[.12,-.1,-.3],.09,i),this.mesh(g,this.boxGeo(.08,.08,.08),r,.12,-.1,-.31),y([-.25,0,0],[-.2,-.2,-.24],.1,i),y([-.2,-.2,-.24],[.06,-.06,-.56],.09,i),this.mesh(g,this.boxGeo(.08,.08,.08),r,.06,-.06,-.57);const m=new vt;m.position.set(.1,-.06,-.36),g.add(m);const p=this.mesh(m,this.track(new Ai(.12,0)),this.glow(16765578,.9),0,0,-.55);p.visible=!1;const M=document.createElement("canvas");M.width=256,M.height=64;const w=M.getContext("2d");w.font="bold 30px system-ui,sans-serif",w.textAlign="center",w.textBaseline="middle",w.lineWidth=6,w.strokeStyle="rgba(0,0,0,.8)",w.strokeText(e.name,128,32),w.fillStyle=e.color,w.fillText(e.name,128,32);const v=new Jp(this.track(new Bu({map:this.track(new to(M)),depthTest:!0,transparent:!0})));v.scale.set(1.6,.4,1),v.position.y=2.15,l.add(v),this.scene.add(l);const b={group:l,pelvis:c,torso:u,head:f,arms:g,legs:d,label:v,gun:m,flash:p,last:{...e.pos},walk:0,pose:{hip:ho,bend:0,roll:0,legs:[0,0,0,0]}};return this.avatars.set(e.id,b),b}poseAvatar(e,t,n,i,r){const a=Math.min(1,i/8),o=t.stance>0,l=Math.sin(e.walk),c=Math.cos(e.walk);let h=ho,d=-.05-a*.15,u;if(t.stance===2)h=.36,d=.55,u=[1.35,-.15,.45,-2.1];else if(o&&r)h=.62,d=-.35,u=[1.3,-2.2,1.1,-2];else if(o){h=.55,d=-.6;const[M,w]=Gh(h,.2+l*.22*a),[v,b]=Gh(h,-.08-l*.22*a);u=[M,w,v,b]}else r?u=[.6,-1,.15,-.5]:u=[l*.65*a,-(.1+Math.max(0,-c)*1.2)*a,-l*.65*a,-(.1+Math.max(0,c)*1.2)*a];const f=iu(this.arena,{pos:t.pos,crouch:o,lean:t.lean,yaw:t.yaw}),g=_n(o)-Kn/2-h,y=-Math.asin(Math.max(-1,Math.min(1,f/Math.max(.3,g)))),m=1-Math.exp(-n*14),p=e.pose;p.hip+=(h-p.hip)*m,p.bend+=(d-p.bend)*m,p.roll+=(y-p.roll)*m,p.legs=p.legs.map((M,w)=>M+(u[w]-M)*m),e.pelvis.position.y=p.hip,e.torso.rotation.set(p.bend,0,p.roll),e.head.rotation.set(-p.bend+t.pitch*.5,0,-p.roll*.4),e.arms.rotation.x=t.pitch-p.bend,e.legs[0].hip.rotation.x=p.legs[0],e.legs[0].knee.rotation.x=p.legs[1],e.legs[1].hip.rotation.x=p.legs[2],e.legs[1].knee.rotation.x=p.legs[3],e.label.position.y=_n(o)+.4}gunFor(e,t){if(e.gun.userData.w!==t){e.gun.userData.w=t;for(const n of[...e.gun.children])n!==e.flash&&e.gun.remove(n);e.gun.add(this.weaponModel(t,!1))}}resize(){const e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;e===this.width&&t===this.height||(this.width=e,this.height=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.gunCamera.aspect=e/t,this.gunCamera.updateProjectionMatrix())}draw(e,t){this.time+=t,this.resize(),this.lava.offset.set(Math.sin(this.time*.13)*.3,this.time*.02),this.lavaLight.intensity=55+Math.sin(this.time*2.1)*8;for(const[r,a]of this.pads.entries())a.material.color.setHSL(.52,1,.5+.15*Math.sin(this.time*4+r));this.items.forEach((r,a)=>{r.group.visible=e.itemAvailable(a),r.group.rotation.y=this.time*1.6,r.group.position.y=.75+Math.sin(this.time*2+a)*.1});const n=e.phase==="over";if(n){const r=this.time*.15;this.camera.position.set(Math.sin(r)*24,16,Math.cos(r)*24),this.camera.lookAt(0,6,0)}else{const r=e.view,a=!e.alive||e.fell,o=Math.hypot(e.body.vel.x,e.body.vel.z),l=e.stance===2;e.body.onGround&&!l&&!a&&(this.bob+=t*o*(e.body.crouch?1.1:1.4));const c=a?Math.min(1.2,(e.time-e.deathTime)*2):0,h=1-Math.exp(-t*12);this.slideTilt+=((l?1:0)-this.slideTilt)*h,this.roll+=(-e.body.lean*.21+this.slideTilt*.05-this.roll)*h;const d=80+this.slideTilt*7;Math.abs(d-this.fov)>.01&&(this.fov=d,this.camera.fov=d,this.camera.updateProjectionMatrix()),this.camera.position.set(r.x,r.y-c+(l?0:Math.sin(this.bob*2)*.03*Math.min(1,o/8)),r.z),this.camera.rotation.set(e.pitch,e.yaw,a?Math.min(.5,c*.4):this.roll,"YXZ")}const i=new Set;for(const r of e.views()){const a=this.avatar(r);i.add(r.id),a.group.visible=r.alive&&!n||n,a.group.position.set(r.pos.x,r.pos.y,r.pos.z),a.group.rotation.y=r.yaw;const o=Math.hypot(r.pos.x-a.last.x,r.pos.z-a.last.z),l=Math.abs(r.pos.y-a.last.y)>t*4.5;a.walk+=o*(r.stance===1?4.5:3.2),a.last={...r.pos},this.poseAvatar(a,r,t,o/(t||1),l),this.gunFor(a,r.weapon),a.flash.visible=r.muzzle>0}for(const[r,a]of this.avatars)i.has(r)||(this.scene.remove(a.group),this.avatars.delete(r));this.drawEffects(e,t),this.renderer.clear(),this.renderer.render(this.scene,this.camera),!n&&e.alive&&!e.fell&&this.drawGun(e,t)}pool(e,t,n){for(;e.length<t;){const i=n();this.scene.add(i),e.push(i)}return e.forEach((i,r)=>i.visible=r<t),e}drawEffects(e,t){const n=this.pool(this.tracerMeshes,e.tracers.length,()=>new it(this.boxGeo(.014,.014,1),this.track(new Vt({color:16777215,transparent:!0,blending:Ti,depthWrite:!1}))));e.tracers.forEach((c,h)=>{const d=n[h],u=c.to.x-c.from.x,f=c.to.y-c.from.y,g=c.to.z-c.from.z,y=Math.hypot(u,f,g)||.01;d.position.set(c.from.x+u/2,c.from.y+f/2,c.from.z+g/2),d.scale.set(1,1,y),d.lookAt(c.to.x,c.to.y,c.to.z);const m=d.material;m.color.set(c.color),m.opacity=.8*Math.max(0,1-c.age/c.life)});const i=e.rockets.filter(c=>!c.dead),r=this.pool(this.rocketMeshes,i.length,()=>new it(this.boxGeo(.14,.14,.5),this.glow(16764794)));i.forEach((c,h)=>{const d=r[h];d.position.set(c.pos.x,c.pos.y,c.pos.z),d.lookAt(c.pos.x+c.dir.x,c.pos.y+c.dir.y,c.pos.z+c.dir.z),Math.random()<.9&&this.puffs.push({p:{...c.pos},age:0})}),this.puffs=this.puffs.filter(c=>(c.age+=t)<.9).slice(-160),this.puffs.forEach((c,h)=>{this.dummy.position.set(c.p.x,c.p.y+c.age*.6,c.p.z),this.dummy.scale.setScalar(.6+c.age*2.2),this.dummy.updateMatrix(),this.smoke.setMatrixAt(h,this.dummy.matrix)}),this.smoke.count=this.puffs.length,this.smoke.instanceMatrix.needsUpdate=!0;const a=this.pool(this.blastMeshes,e.blasts.length,()=>new it(this.track(new Ai(1,2)),this.track(new Vt({color:16752704,transparent:!0,blending:Ti,depthWrite:!1}))));let o=0;e.blasts.forEach((c,h)=>{const d=a[h],u=c.age/.7;d.position.set(c.pos.x,c.pos.y,c.pos.z),d.scale.setScalar(.5+u*3.2);const f=d.material;f.opacity=Math.max(0,.95-u*1.2),f.color.setHSL(.08-u*.06,1,.6-u*.3),1-u>o&&(o=1-u,this.flashLight.position.set(c.pos.x,c.pos.y+.5,c.pos.z))}),this.flashLight.intensity=o*120;const l=this.pool(this.sparkMeshes,e.sparks.length,()=>new it(this.track(new Ai(.09,0)),this.track(new Vt({color:16777215,transparent:!0,blending:Ti,depthWrite:!1}))));e.sparks.forEach((c,h)=>{const d=l[h];d.position.set(c.pos.x,c.pos.y,c.pos.z),d.scale.setScalar(1+c.age*6);const u=d.material;u.color.set(c.color),u.opacity=1-c.age/.25})}drawGun(e,t){this.shownWeapon!==e.weapon&&(this.shownWeapon=e.weapon,this.switchAnim=1),this.switchAnim=Math.max(0,this.switchAnim-t*5),this.kick=Math.max(0,this.kick-t*6),e.muzzle>.06&&(this.kick=e.weapon===0?.25:1);const n=Math.hypot(e.body.vel.x,e.body.vel.z),i=e.body.onGround?Math.min(1,n/8):.2;this.viewGuns.forEach((r,a)=>{r.visible=a===e.weapon,r.visible&&(r.position.set(.22+Math.cos(this.bob)*.01*i-this.slideTilt*.04,-.21-this.switchAnim*.25+Math.abs(Math.sin(this.bob))*.01*i-this.slideTilt*.05,-.5+this.kick*.05),r.rotation.set(this.kick*.12,-.06,this.slideTilt*.35-e.body.lean*.12))}),this.viewFlash.visible=e.muzzle>0,this.viewFlash.scale.set(e.weapon===0?.5:1,e.weapon===0?.5:1,e.weapon===0?1.2:2),this.viewFlash.rotation.z=this.time*40,this.viewFlash.position.set(.21,-.19,e.weapon===2?-.82:-.75),this.renderer.clearDepth(),this.renderer.render(this.gunScene,this.gunCamera)}project(e){const t=new D(e.x,e.y,e.z).project(this.camera);return{x:(t.x+1)/2*this.width,y:(1-t.y)/2*this.height,behind:t.z>1}}dispose(){for(const e of this.avatars.values())this.scene.remove(e.group);for(const e of this.disposables)e.dispose();this.renderer.dispose()}}class qv{ctx=null;master=null;noise=null;volume=.7;muted=!1;async unlock(){if(!this.ctx){try{this.ctx=new AudioContext}catch{return}this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.applyVolume();const e=this.ctx.createBuffer(1,this.ctx.sampleRate,this.ctx.sampleRate),t=e.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;this.noise=e}this.ctx.state==="suspended"&&await this.ctx.resume().catch(()=>{})}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.applyVolume()}setMuted(e){this.muted=e,this.applyVolume()}applyVolume(){this.master&&(this.master.gain.value=this.muted?0:this.volume*.8)}play(e,t,n){const i=this.ctx,r=this.master;if(!i||!r||i.state!=="running")return;let a=1,o=0;if(t&&n){const f=t.x-n.pos.x,g=t.z-n.pos.z,y=t.y-n.pos.y,m=Math.hypot(f,y,g);if(a=1/(1+m*.09),a<.03)return;const p=f*Math.cos(n.yaw)-g*Math.sin(n.yaw);o=Math.max(-.85,Math.min(.85,p/(m||1)))}const l=i.createGain();l.gain.value=a;const c=i.createStereoPanner();c.pan.value=o,l.connect(c).connect(r);const h=i.currentTime,d=(f,g,y,m,p,M=0)=>{const w=i.createOscillator(),v=i.createGain();w.type=f,w.frequency.setValueAtTime(g,h+M),w.frequency.exponentialRampToValueAtTime(Math.max(20,y),h+M+m),v.gain.setValueAtTime(p,h+M),v.gain.exponentialRampToValueAtTime(.001,h+M+m),w.connect(v).connect(l),w.start(h+M),w.stop(h+M+m+.02)},u=(f,g,y,m=1,p="lowpass",M=0)=>{const w=i.createBufferSource(),v=i.createBiquadFilter(),b=i.createGain();w.buffer=this.noise,v.type=p,v.frequency.value=y,v.Q.value=m,b.gain.setValueAtTime(g,h+M),b.gain.exponentialRampToValueAtTime(.001,h+M+f),w.connect(v).connect(b).connect(l),w.start(h+M,Math.random()*.5),w.stop(h+M+f+.02)};switch(e){case"blaster":d("square",1300,380,.07,.12),u(.05,.12,4e3,1,"highpass");break;case"shotgun":u(.35,.9,1400),d("sine",110,40,.25,.7),u(.08,.4,5e3,1,"highpass",.25);break;case"rocket":u(.5,.35,900,2,"bandpass"),d("sawtooth",220,90,.35,.12);break;case"boom":u(.9,1,500),d("sine",90,28,.7,.9),u(.3,.4,2500,1,"bandpass");break;case"jump":d("sine",260,380,.12,.08);break;case"land":u(.12,.25,300);break;case"slide":u(.7,.32,1100,.8,"bandpass"),u(.5,.18,260),d("sine",90,55,.4,.08);break;case"crouch":u(.09,.1,1800,1.5,"bandpass");break;case"pad":d("sine",180,900,.45,.25),d("triangle",360,1500,.4,.12);break;case"pickup":d("triangle",660,990,.1,.2),d("triangle",990,1320,.12,.15,.08);break;case"mega":for(const[f,g]of[523,659,784,1046].entries())d("triangle",g,g,.18,.18,f*.07);break;case"weapon":u(.06,.3,2500,4,"bandpass"),d("square",300,200,.06,.08,.05);break;case"hit":d("square",1800,1700,.05,.14);break;case"hurt":d("sawtooth",160,70,.18,.25),u(.12,.2,800);break;case"death":d("sawtooth",300,40,.8,.3),u(.6,.3,600);break;case"lava":u(1,.6,700),d("sine",120,30,1,.4);break;case"frag":d("triangle",880,880,.08,.25),d("triangle",1320,1320,.16,.25,.08);break;case"spawn":d("sine",300,900,.35,.15),u(.3,.15,3e3,2,"bandpass");break;case"empty":d("square",220,200,.05,.1);break;case"join":d("triangle",520,780,.15,.12);break;case"sudden":for(let f=0;f<3;f++)d("square",440,440,.12,.18,f*.22);break;case"win":for(const[f,g]of[523,659,784,1046,1318].entries())d("triangle",g,g,.3,.22,f*.12);break;case"lose":for(const[f,g]of[392,349,311,262].entries())d("triangle",g,g*.98,.3,.2,f*.15);break}}dispose(){this.ctx?.close().catch(()=>{}),this.ctx=null}}const Yv={mega:"Мега-бонус",rocket:"Ракетница",shotgun:"Дробовик",armor:"Броня",health:"Аптечка",shells:"Патроны дробовика",rockets:"Ракеты"},Kv={floor:"Настил",wall:"Стена",metal:"Мостки",stair:"Ступень",rail:"Перила",crate:"Ящик",pillar:"Опора"},$v=[{id:"spire.solid",name:"Блок арены",fields:[{name:"style",label:"Вид",type:"select",default:"floor",options:Ed.map(s=>({value:s,label:Kv[s]}))}]},{id:"spire.lava",name:"Лава",fields:[]},{id:"spire.jumppad",name:"Прыжковая площадка",fields:[{name:"tx",label:"Цель X",type:"number",default:0,min:-64,max:64,unit:"м"},{name:"ty",label:"Цель Y",type:"number",default:5,min:-5,max:30,unit:"м"},{name:"tz",label:"Цель Z",type:"number",default:0,min:-64,max:64,unit:"м"}]},{id:"spire.spawn",name:"Точка появления",fields:[{name:"yaw",label:"Направление взгляда",type:"number",default:0,min:-180,max:180,unit:"°"}]},{id:"spire.pickup",name:"Бонус",fields:[{name:"item",label:"Предмет",type:"select",default:"health",options:bd.map(s=>({value:s,label:Yv[s]}))}]}],Hh=["БЛАСТЕР","ДРОБОВИК","РАКЕТНИЦА"],Gt=s=>s.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Zv=s=>`${Math.floor(s/60).toString().padStart(2,"0")}:${Math.floor(s%60).toString().padStart(2,"0")}`,Jv=s=>`${s}-й`,jv={timeout:"Не удалось соединиться с хостом. Сессия могла закончиться, или сеть (мобильный интернет, корпоративный NAT) блокирует прямое соединение между браузерами. Попробуйте другую сеть или попросите друга создать сессию.",full:"В сессии уже 8 игроков — мест нет.",protocol:"У хоста другая версия игры. Обновите страницу (Ctrl+Shift+R) и попробуйте снова."};async function Qv(s){await Jh(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);const e=s.snapshot.manifest,t=s.snapshot.scenes[s.sceneId]||s.snapshot.scenes[e.startScene];s.registry.validate(t,e);const n=Qh(t),i=s.container,r=document.title;document.title=e.name,i.classList.add("spire");const a=s.savePolicy==="persistent",o=O=>jh(e.projectId,O,"player"),l=O=>{if(!a)return null;try{return localStorage.getItem(o(O))}catch{return null}},c=(O,se)=>{if(a)try{localStorage.setItem(o(O),se)}catch{}};i.innerHTML=`<canvas class="s-canvas" tabindex="0" aria-label="Шпиль — арена"></canvas><div class="s-vignette"></div><div class="s-damage"></div>
 <section class="s-menu">
  <header><a class="s-brand" href="https://gadaev-sergey.github.io/shelter-arcade/" target="_blank" rel="noopener">SHELTER <i>/</i> ARCADE</a><span class="s-net" data-net><i></i> Подключение к сети…</span></header>
  <div class="s-hero"><div class="s-eyebrow">СЕТЕВОЙ ШУТЕР · DEATHMATCH · ДО 8 ИГРОКОВ</div><h1>ШПИЛЬ<span>АРЕНА НА ВЫСОТЕ</span></h1>
   <p>Четыре яруса над лавой, прыжковые площадки и один мега-бонус на самой вершине. Каждый сам за себя: побеждает тот, кто первым наберёт лимит фрагов.</p>
   <label class="s-field"><span>Твой ник</span><input data-nick maxlength="16" autocomplete="nickname" spellcheck="false" placeholder="Боец"></label>
   <div class="s-actions"><button class="s-primary" data-action="create">СОЗДАТЬ СЕССИЮ <span>↗</span></button><button class="s-text" data-action="help">Управление и правила</button></div>
  </div>
  <aside class="s-browser" aria-label="Открытые сессии"><div class="s-browser-head"><h2>Открытые сессии</h2><small data-count></small></div><ul class="s-list" data-list></ul>
   <form class="s-join" data-join><label><span>Код или ссылка-приглашение</span><input data-code placeholder="например, K7QX2M" autocomplete="off" spellcheck="false"></label><button class="s-secondary" type="submit">ВОЙТИ</button></form></aside>
  <footer><span><kbd>WASD</kbd> движение</span><span><kbd>ПРОБЕЛ</kbd> прыжок</span><span><kbd>МЫШЬ</kbd> прицел и огонь</span><span><kbd>1 2 3</kbd> оружие</span><span><kbd>TAB</kbd> счёт</span><em>Только компьютер · клавиатура и мышь</em></footer>
 </section>
 <div class="s-hud" hidden>
  <div class="s-top"><div class="s-session"><b data-session></b><small data-invite></small></div><div class="s-clock"><b data-clock>10:00</b><small data-limit></small></div><div class="s-feed" data-feed></div></div>
  <div class="s-cross"><i></i><i></i><i></i><i></i></div><div class="s-hitmark"></div><div class="s-dir" data-dir><i></i></div>
  <div class="s-notes" data-notes aria-live="polite"></div>
  <div class="s-bottom"><div class="s-vitals"><div class="s-hp"><small>ЗДОРОВЬЕ</small><b data-hp>100</b></div><div class="s-ar"><small>БРОНЯ</small><b data-ar>0</b></div></div>
   <div class="s-standing"><b data-place>1-й</b><small data-gap></small><span data-frags></span></div>
   <div class="s-arms"><div class="s-ammo"><small data-wname>БЛАСТЕР</small><b data-ammo>∞</b></div><div class="s-slots">${Hh.map((O,se)=>`<span data-slot="${se}">${se+1}<em>${O}</em></span>`).join("")}</div></div></div>
  <div class="s-death" data-death hidden></div>
  <div class="s-board" data-board hidden></div>
  <button class="s-click" data-action="lock" hidden>Нажми, чтобы играть</button>
 </div>
 <section class="s-modal" hidden role="dialog" aria-modal="true" aria-labelledby="s-modal-title"><div class="s-panel"></div></section>`;const h=O=>i.querySelector(O),d=h(".s-canvas"),u=new qv;let f;try{f=new Xv(d,n)}catch(O){throw i.innerHTML='<div style="padding:40px;color:white;background:#0b0f1c">Для «Шпиля» нужен браузер с WebGL. Включите аппаратное ускорение и перезагрузите страницу.</div>',O}const g=new AbortController,y=(O,se,C)=>O.addEventListener(se,C,{signal:g.signal});let m="menu",p=null,M=null,w=null,v="",b=!1,E=0,R=performance.now(),_=0,T=0,P=!1,L=!1,U=new Set,B=Number(l("sensitivity"))||1;u.setVolume(l("volume")===null?.7:Number(l("volume")));const I=h("[data-nick]");I.value=l("nick")||"";const z=()=>uu(I.value);y(I,"change",()=>c("nick",z()));const V=!1;async function W(){try{M=V?Mf():await yf()}catch(se){throw h("[data-net]").innerHTML='<i class="bad"></i> Сеть недоступна',se}if(b)return;h("[data-net]").innerHTML=`<i class="ok"></i> ${M.kind==="local"?"Локальная сеть (тест)":"В сети · поиск сессий"}`,te();const O=Ta(location.hash.slice(1));O&&m==="menu"&&Q("invite",O)}function te(){!M||w||(w=new bf(M),w.onChange=K,K())}function Y(){w?.close(),w=null}function K(){const O=[...w?.sessions.values()??[]].filter(se=>se.code!==p?.code).sort((se,C)=>C.players-se.players||se.name.localeCompare(C.name));h("[data-count]").textContent=w?O.length?`${O.length} в сети`:"пока пусто":"",h("[data-list]").innerHTML=O.length?O.map(se=>`<li><button data-session-code="${se.code}" ${se.players>=se.max?"disabled":""}><div><strong>${Gt(se.name)}</strong><small>Хост: ${Gt(se.host)} · до ${se.fragLimit} фрагов</small></div><span class="s-meta"><b>${se.players}/${se.max}</b><small>${se.ping===null?"…":se.ping+" мс"}</small></span></button></li>`).join(""):`<li class="s-empty">${w?"Открытых сессий пока нет. Создайте свою — она появится здесь у всех, кто откроет игру.":"Подключаемся к сети…"}</li>`}function J(O){return new gf(n,{send:O})}function Ee(O,se,C){if(!M)return;const Ae=Ef(),Ie={name:O.slice(0,40)||`Арена ${z()}`,fragLimit:se,timeLimit:dc,maxPlayers:nf,closed:C};let A;const x=J(k=>A.link.send(k));A=new Af(M.join(yc(Ae)),n,Ie,Ae,z(),{receive:k=>x.receive(k)}),p={client:x,host:A,code:Ae,closed:C},A.onRoster=()=>{C||w?.announce(A.info())},A.start(),C||w?.announce(A.info()),Xe()}function xe(O){if(!M)return;let se;const C=J(Ie=>se.link.send(Ie)),Ae={receive:Ie=>{C.receive(Ie),Ie.k==="welcome"&&m==="connecting"&&Xe()}};se=new Rf(M.join(yc(O)),z(),Ae),p={client:C,guest:se,code:O,closed:!1},m="connecting",Q("connecting",O),se.onFail=Ie=>{p?.guest===se&&(qe(!1),Q("error",jv[Ie]))},se.onHostLeft=()=>{p?.guest===se&&(m="ended",ze(),Q("host-left"))}}function Xe(){p&&(m="game",me(),history.replaceState(null,"","#"+p.code),h(".s-menu").hidden=!0,h(".s-hud").hidden=!1,i.classList.add("s-playing"),u.unlock(),ge(),Ke())}function qe(O=!0){p&&(p.host?.close(),p.guest?.close(),p.host&&w?.announce(null)),p=null,m="menu",ze(),U.clear(),P=!1,history.replaceState(null,"",location.pathname+location.search),h(".s-menu").hidden=!1,h(".s-hud").hidden=!0,i.classList.remove("s-playing"),K(),O&&me()}const Be=(O,se,C=!1,Ae="")=>`<button class="${C?"s-primary":"s-secondary"}" data-action="${O}" ${Ae}>${se}${C?" <span>↗</span>":""}</button>`;function Z(){return location.origin+location.pathname+location.search+"#"+(p?.code??"")}function Q(O,se=""){v=O,T=performance.now();const C=h(".s-panel");if(h(".s-modal").hidden=!1,C.className="s-panel s-"+O,O==="create"&&(C.innerHTML=`<div class="s-eyebrow">НОВАЯ СЕССИЯ</div><h2 id="s-modal-title">Создать арену</h2>
   <form data-create><label class="s-field"><span>Название</span><input name="name" maxlength="40" value="${Gt("Арена "+z())}"></label>
   <fieldset class="s-limit"><legend>Лимит фрагов</legend>${tf.map(Ae=>`<label><input type="radio" name="limit" value="${Ae}" ${Ae===20?"checked":""}><span>${Ae}</span></label>`).join("")}</fieldset>
   <label class="s-check"><input type="checkbox" name="closed"><span><b>Закрытая сессия</b><small>Не показывать в списке — вход только по ссылке-приглашению.</small></span></label>
   <p class="s-note">Матч длится ${dc/60} минут. Ваш браузер станет хостом: если вы закроете вкладку, сессия закончится для всех.</p>
   <div class="s-row">${Be("cancel","Отмена")}<button class="s-primary" type="submit">СОЗДАТЬ <span>↗</span></button></div></form>`),O==="invite"&&(C.innerHTML=`<div class="s-eyebrow">ПРИГЛАШЕНИЕ</div><h2 id="s-modal-title">Войти в сессию ${Gt(se)}?</h2><label class="s-field"><span>Твой ник</span><input data-invite-nick maxlength="16" value="${Gt(I.value)}" placeholder="Боец"></label><div class="s-row">${Be("cancel","Не сейчас")}${Be("join-invite","ВОЙТИ",!0,`data-code="${se}"`)}</div>`),O==="connecting"&&(C.innerHTML=`<div class="s-eyebrow">СЕССИЯ ${Gt(se)}</div><h2 id="s-modal-title">Соединяемся с хостом…</h2><div class="s-spinner"></div><p>Ищем хоста через сигнальные реле и открываем прямое соединение. Обычно это занимает несколько секунд.</p>${Be("abort","Отмена")}`),O==="error"&&(C.innerHTML=`<div class="s-eyebrow">НЕ ПОЛУЧИЛОСЬ</div><h2 id="s-modal-title">Соединение не установлено</h2><p>${Gt(se)}</p>${Be("cancel","ПОНЯТНО",!0)}`),O==="host-left"&&(C.innerHTML=`<div class="s-eyebrow">СЕССИЯ ЗАВЕРШЕНА</div><h2 id="s-modal-title">Хост покинул игру</h2><p>Итоговая таблица:</p>${Oe()}${Be("to-menu","В МЕНЮ",!0)}`),O==="pause"){const Ae=p;C.innerHTML=`<div class="s-eyebrow">${Ae.host?"ВЫ ХОСТ":"ВЫ В СЕССИИ"} · ${Gt(Ae.client.options?.name??"")}</div><h2 id="s-modal-title">Меню</h2><p class="s-note">Игра не останавливается — соперники продолжают бой.</p>
   <label class="s-field"><span>Приглашение (код ${Ae.code})</span><div class="s-copy"><input readonly value="${Gt(Z())}" data-link><button class="s-secondary" data-action="copy">КОПИРОВАТЬ</button></div></label>
   <label class="s-range"><span>Чувствительность мыши <b data-sens-v>${B.toFixed(2)}</b></span><input type="range" min="0.3" max="3" step="0.05" value="${B}" data-sens></label>
   <label class="s-range"><span>Громкость <b data-vol-v>${Math.round(u.volume*100)}%</b></span><input type="range" min="0" max="1" step="0.05" value="${u.volume}" data-vol></label>
   ${Be("resume","ПРОДОЛЖИТЬ",!0)}${Be("help","Управление и правила")}${Be("leave",Ae.host?"Завершить сессию и выйти":"Покинуть сессию")}`}O==="help"&&(C.innerHTML=`<div class="s-eyebrow">ПРАВИЛА АРЕНЫ</div><h2 id="s-modal-title">Каждый сам за себя</h2>
   <div class="s-controls"><span><kbd>W A S D</kbd> Движение</span><span><kbd>ПРОБЕЛ</kbd> Прыжок (можно держать)</span><span><kbd>C</kbd> Присед, на бегу — подкат</span><span><kbd>Q E</kbd> Наклон влево / вправо</span><span><kbd>МЫШЬ</kbd> Прицел</span><span><kbd>ЛКМ</kbd> Огонь</span><span><kbd>1 2 3 / КОЛЕСО</kbd> Оружие</span><span><kbd>TAB</kbd> Таблица счёта</span><span><kbd>ESC</kbd> Меню</span></div>
   <p>За убийство соперника — фраг. Смерть от своей ракеты или в лаве — минус фраг. Первый, кто набрал лимит, побеждает. Через 10 минут побеждает лидер; при ничьей — внезапная смерть до единоличного лидера.</p>
   <p>Бластер бесконечный. Дробовик и ракетница лежат на мостках и мосту над лавой. Выстрел ракетой себе под ноги в прыжке — рокет-джамп. Голубые площадки подбрасывают на ярус выше, на вершине ждёт мега-бонус +100 здоровья.</p>
   <p>Подкат даёт рывок и низкий силуэт; прыжок из подката сохраняет скорость, а приземление с зажатым C снова переходит в подкат (рывок — не чаще раза в секунду). Присед в прыжке поджимает ноги — так запрыгивают на высокие ящики. Наклон выглядывает из-за угла, открывая только голову.</p>
   <small>Стрейф-прыжки: держите прыжок, «вбок» и плавно ведите мышь в ту же сторону — скорость растёт.</small>${Be("back","ПОНЯТНО",!0)}`),requestAnimationFrame(()=>{b||C.querySelector("input:not([readonly]),button")?.focus()})}function me(){v="",h(".s-modal").hidden=!0}function Oe(){const O=p?.client;return O?`<table class="s-table"><thead><tr><th>#</th><th>Игрок</th><th>Фраги</th><th>Смерти</th></tr></thead><tbody>${O.scores().map((C,Ae)=>`<tr class="${C.self?"self":""}"><td>${Ae+1}</td><td><i style="background:${C.color}"></i>${Gt(C.name)}${C.id===O.winner?" ★":""}</td><td>${C.frags}</td><td>${C.deaths}</td></tr>`).join("")}</tbody></table>`:""}function ge(){if(!(m!=="game"||v))try{const O=d.requestPointerLock?.();O&&O.catch(()=>{})}catch{}}function ze(){document.pointerLockElement===d&&document.exitPointerLock()}const lt=()=>document.pointerLockElement===d;y(i,"click",(O=>{const se=O.target,C=se.closest("button");if(se===d&&m==="game"&&!lt()&&!v){u.unlock(),ge();return}if(!C)return;const Ae=C.dataset.action;if(C.dataset.sessionCode){c("nick",z()),xe(C.dataset.sessionCode);return}if(Ae==="create"){if(c("nick",z()),!M){Q("error","Сеть ещё не готова. Подождите пару секунд.");return}Q("create")}if(Ae==="help"&&Q("help"),Ae==="back"&&(m==="game"?Q("pause"):me()),Ae==="cancel"&&me(),Ae==="abort"&&qe(),Ae==="join-invite"){const Ie=i.querySelector("[data-invite-nick]");Ie&&(I.value=Ie.value),c("nick",z()),xe(C.dataset.code)}if(Ae==="resume"&&(me(),ge()),(Ae==="leave"||Ae==="to-menu")&&qe(),Ae==="lock"&&(u.unlock(),ge()),Ae==="copy"){const Ie=i.querySelector("[data-link]");Ie.select(),navigator.clipboard?.writeText(Ie.value).then(()=>{C.textContent="СКОПИРОВАНО"},()=>{})}})),y(i,"submit",(O=>{O.preventDefault();const se=O.target;if(se.matches("[data-create]")){const C=new FormData(se);Ee(String(C.get("name")||""),Number(C.get("limit"))||20,C.get("closed")==="on")}if(se.matches("[data-join]")){const C=Ta(h("[data-code]").value);if(!C){h("[data-code]").setCustomValidity("Нужен код из 6 символов или ссылка-приглашение"),se.reportValidity();return}c("nick",z()),xe(C)}})),y(i,"input",(O=>{const se=O.target;se.matches("[data-code]")&&se.setCustomValidity(""),se.matches("[data-sens]")&&(B=Number(se.value),c("sensitivity",String(B)),h("[data-sens-v]").textContent=B.toFixed(2)),se.matches("[data-vol]")&&(u.setVolume(Number(se.value)),c("volume",String(u.volume)),h("[data-vol-v]").textContent=Math.round(u.volume*100)+"%",u.unlock(),u.play("pickup"))})),y(document,"pointerlockchange",()=>{lt()?v==="pause"&&me():(P=!1,U.clear(),m==="game"&&!v&&Q("pause"))}),y(document,"mousemove",(O=>{lt()&&p&&p.client.look(O.movementX*.0022*B,O.movementY*.0022*B)})),y(d,"mousedown",(O=>{lt()&&O.button===0&&(P=!0)})),y(window,"mouseup",(O=>{O.button===0&&(P=!1)})),y(d,"wheel",(O=>{lt()&&p&&(O.preventDefault(),p.client.cycleWeapon(O.deltaY>0?1:-1))})),y(d,"contextmenu",O=>O.preventDefault());const Ye=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyC","KeyQ","KeyE","Digit1","Digit2","Digit3","Tab"];y(window,"keydown",(O=>{if(!(m!=="game"||O.metaKey||O.ctrlKey||O.altKey)){if(O.code==="Tab"){O.preventDefault(),L=!0;return}if(O.code==="Escape"&&document.pointerLockElement!==d){v==="pause"&&performance.now()-T>300?(me(),ge()):v||Q("pause");return}!lt()||!Ye.includes(O.code)||(O.preventDefault(),U.add(O.code),O.code.startsWith("Digit")&&p&&p.client.selectWeapon(Number(O.code.slice(-1))-1))}})),y(window,"keyup",(O=>{U.delete(O.code),O.code==="Tab"&&(L=!1)})),y(window,"blur",()=>{U.clear(),P=!1,L=!1}),y(window,"hashchange",()=>{const O=Ta(location.hash.slice(1));O&&M&&m==="menu"&&O!==p?.code&&Q("invite",O)});const Qe=()=>{const O=(...se)=>se.some(C=>U.has(C));return{forward:Number(O("KeyW","ArrowUp"))-Number(O("KeyS","ArrowDown")),strafe:Number(O("KeyD","ArrowRight"))-Number(O("KeyA","ArrowLeft")),jump:O("Space"),fire:P,crouch:O("KeyC"),lean:Number(O("KeyE"))-Number(O("KeyQ"))}};function ct(O,se){const C=Ae=>`<b style="color:${se.colorOf(Ae)}">${Gt(se.nameOf(Ae))}</b>`;return O.killer===O.victim?`<div>${C(O.victim)} <i>${O.w==="lava"?"сгорел в лаве":O.w==="fall"?"разбился":"подорвал себя"}</i></div>`:`<div>${C(O.killer)} <i>[${typeof O.w=="number"?Rn[O.w].name.toLowerCase():"?"}]</i> ${C(O.victim)}</div>`}function Ke(){const O=p?.client;if(!O||m==="menu")return;h("[data-session]").textContent=O.options?.name??"",h("[data-invite]").textContent=`код ${p.code}${p.host?" · вы хост":O.rtt?` · пинг ${Math.round(O.rtt*1e3)} мс`:""} · ${O.roster.size}/${O.options?.maxPlayers??8}`,h("[data-clock]").textContent=O.phase==="sudden"?"ВНЕЗАПНАЯ СМЕРТЬ":O.phase==="over"?"МАТЧ ОКОНЧЕН":Zv(O.left),h("[data-limit]").textContent=`до ${O.options?.fragLimit??20} фрагов`,h(".s-clock").classList.toggle("alert",O.phase==="sudden"||O.phase==="playing"&&O.left<60),h("[data-hp]").textContent=String(Math.max(0,O.health)),h("[data-ar]").textContent=String(O.armor),h(".s-hp").classList.toggle("low",O.health<=30),h(".s-hp").classList.toggle("mega",O.health>100);const se=O.standing();h("[data-place]").textContent=Jv(se.place),h("[data-gap]").textContent=`из ${se.total}${se.total>1?` · ${se.gap>0?"+":""}${se.gap}`:""}`,h("[data-frags]").textContent=`${O.frags} фраг.`,h("[data-wname]").textContent=Hh[O.weapon],h("[data-ammo]").textContent=O.weapon===0?"∞":String(Math.max(0,O.ammo[O.weapon])),i.querySelectorAll("[data-slot]").forEach(A=>{const x=Number(A.dataset.slot);A.classList.toggle("owned",O.owned[x]),A.classList.toggle("selected",O.weapon===x)}),h("[data-feed]").innerHTML=O.feed.map(A=>ct(A,O)).join(""),h("[data-notes]").innerHTML=O.notes.map(A=>`<div style="opacity:${Math.min(1,(2.5-A.age)*2)}">${Gt(A.text)}</div>`).join("");const C=h("[data-death]");if(!O.alive&&O.connected&&O.phase!=="over"&&O.killedBy){const A=O.killedBy,x=A.killer===O.id;C.hidden=!1,C.innerHTML=`<small>${x?"САМОУБИЙСТВО · −1 ФРАГ":"ТЕБЯ УБИЛ"}</small><strong style="color:${x?"#ff8a5b":O.colorOf(A.killer)}">${x?A.w==="lava"?"Лава":A.w==="fall"?"Падение":"Своя ракета":Gt(O.nameOf(A.killer))}</strong>${!x&&typeof A.w=="number"?`<em>${Rn[A.w].name}</em>`:""}<span>Возвращение через ${O.respawnIn().toFixed(1)}</span>`}else C.hidden=!0;const Ae=h("[data-board]"),Ie=O.phase==="over";Ae.hidden=!(L||Ie),Ae.hidden||(Ae.innerHTML=`${Ie?`<div class="s-eyebrow">${O.winner===O.id?"ТЫ ПОБЕДИЛ":"ПОБЕДИТЕЛЬ"}</div><h2>${Gt(O.nameOf(O.winner??""))}</h2><p>Новый матч через ${Math.ceil(O.restart)} с</p>`:`<div class="s-eyebrow">${Gt(O.options?.name??"")} · ДО ${O.options?.fragLimit} ФРАГОВ</div>`}${Oe()}`),h('[data-action="lock"]').hidden=lt()||!!v||m!=="game"}function ft(){const O=p?.client;if(!O)return;h(".s-hitmark").classList.toggle("on",O.hitFlash>0),h(".s-damage").style.opacity=String(O.damageFlash);const se=h("[data-dir]");if(O.damageFlash>.05&&O.damageFrom){const C=O.damageFrom.x-O.body.pos.x,Ae=O.damageFrom.z-O.body.pos.z,Ie=Math.atan2(C,-Ae)+O.yaw;se.style.opacity=String(O.damageFlash),se.style.transform=`translate(-50%,-50%) rotate(${Ie}rad)`}else se.style.opacity="0"}function Mt(O){if(b)return;const se=Math.min(.05,(O-R)/1e3);R=O;const C=p?.client;if(C&&(m==="game"||m==="ended")){const Ae=m==="game"&&lt()&&!v;C.update(se,Ae?Qe():{forward:0,strafe:0,jump:!1,fire:!1});const Ie={pos:C.eye,yaw:C.yaw};for(const A of C.sounds)u.play(A.name,A.pos,Ie);C.sounds.length=0,f.draw(C,se),ft(),_+=se,_>.08&&(_=0,Ke())}E=requestAnimationFrame(Mt)}const Ut=new ResizeObserver(()=>f.resize());return Ut.observe(d),K(),W().catch(()=>{}),E=requestAnimationFrame(Mt),{pause(){},dispose(){b=!0,cancelAnimationFrame(E),g.abort(),Ut.disconnect(),ze(),qe(!1),Y(),u.dispose(),f.dispose(),i.replaceChildren(),i.classList.remove("spire","s-playing"),document.title=r},diagnostics:()=>({game:"spire",mode:m,code:p?.code??null,host:!!p?.host,players:p?.client.roster.size??0,phase:p?.client.phase??null})}}const ey={id:"spire",sdk:1,components:$v,validateScene(s){Qh(s)},createSession:Qv};class ty{components=new Map;modules=new Map;register(e){if(e.sdk!==1||this.modules.has(e.id))throw new Error("Несовместимый или повторяющийся модуль: "+e.id);this.modules.set(e.id,e);for(const t of e.components||[]){if(this.components.has(t.id))throw new Error("Повторяющийся компонент "+t.id);this.components.set(t.id,t)}}validate(e,t){for(const n of this.modules.values())n.validateScene?.(e,t);for(const n of e.nodes)for(const i of n.components||[]){const r=this.components.get(i.type);if(!r)throw new Error("Отсутствует компонент «"+i.type+"» у «"+n.name+"».");for(const a of r.fields){const o=i.values[a.name];if(a.type==="number"&&(typeof o!="number"||!Number.isFinite(o)||o<(a.min??-1/0)||o>(a.max??1/0)))throw new Error(n.name+": проверьте «"+a.label+"».");if(a.type==="boolean"&&typeof o!="boolean")throw new Error("Некорректный переключатель "+a.label);if(a.type==="object"&&o&&!e.nodes.some(l=>l.id===o)||a.type==="scene"&&!t.scenes.some(l=>l.id===o)||a.type==="asset"&&o&&!t.assets.some(l=>l.id===o)||a.type==="select"&&!a.options?.some(l=>l.value===o))throw new Error(n.name+": не найдена связь «"+a.label+"».")}}}}function ny(s){const e=new rd({canvas:s,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(devicePixelRatio||1,1.65)),e.outputColorSpace=yt,e.toneMapping=ma,e.toneMappingExposure=1.3,e.shadowMap.enabled=!0,e.shadowMap.type=Vs,e}function ar(s){const e=new Set,t=new Set,n=new Set;s.traverse(i=>{if(i instanceof it||i instanceof Ll){e.add(i.geometry);for(const r of Array.isArray(i.material)?i.material:[i.material]){t.add(r);for(const a of Object.values(r))a instanceof Ct&&n.add(a)}}(i instanceof _s||i instanceof is||i instanceof us)&&i.shadow.dispose()});for(const i of e)i.dispose();for(const i of t)i.dispose();for(const i of n)i.dispose()}class iy{constructor(e){this.canvas=e,this.gl=ny(e)}canvas;gl;scene=new oa;cutScene=new oa;camera=new xs(-8,8,5,-5,.1,100);width=1;height=1;angle=0;externalCamera=!1;editorMode=!1;beforeRender;afterRender;cameraSettings=ea();center=new D;configureCamera(e=hl){this.cameraSettings=ea(e);const t=this.camera;e.projection==="perspective"!=t instanceof Rt&&(this.camera=e.projection==="perspective"?new Rt(e.fov,1,.1,100):new xs(-8,8,5,-5,.1,100),this.camera.position.copy(t.position),this.camera.quaternion.copy(t.quaternion),this.camera.up.copy(t.up),this.camera.zoom=t.zoom),this.camera instanceof Rt&&(this.camera.fov=e.fov),this.camera.near=this.cameraSettings.near,this.camera.far=this.cameraSettings.far,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}resize(){const e=this.canvas.getBoundingClientRect();this.width=Math.max(1,e.width),this.height=Math.max(1,e.height),this.gl.setSize(this.width,this.height,!1)}updateCamera(e){const t=this.cameraSettings,n=this.width/this.height;this.center.lerp(new D(t.centerX,t.centerY,0),t.smoothing?1-Math.exp(-e*t.smoothing):1),this.camera instanceof Rt?this.camera.aspect=n:(this.camera.left=-t.height*n/2,this.camera.right=t.height*n/2,this.camera.top=t.height/2,this.camera.bottom=-t.height/2),this.camera.zoom=1,this.camera.position.set(this.center.x,this.center.y,t.distance),this.camera.up.set(0,1,0),this.camera.rotation.set(0,0,0),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}project(e){const t=e.clone().project(this.camera);return{x:(t.x+1)*this.width/2,y:(1-t.y)*this.height/2}}render(e){this.externalCamera||this.updateCamera(e),this.beforeRender?.(),this.gl.render(this.scene,this.camera),this.afterRender?.()}dispose(){ar(this.scene),ar(this.cutScene),this.gl.dispose(),this.gl.forceContextLoss()}}class sy{constructor(e){this.renderer=e,e.scene.add(this.root)}renderer;sources=new Map;instances=new Map;root=new vt;prototypes=new Map;textures=new Map;prefabs=new Map;validators=[];initial=nc();document=nc();revision=0;validate(e){const t=Sd(e);for(const n of this.validators)n(t);for(const n of t.nodes){if(n.kind==="source"&&!this.sources.has(n.asset))throw new Error("Исходный ресурс недоступен: "+n.name);if(n.kind==="model"&&!this.prototypes.has(n.asset))throw new Error("Модель не загружена: "+n.name)}return t}apply(e){const t=this.validate(e);this.document=t;const n=new Set(t.nodes.map(i=>i.id));for(const[i,r]of this.instances)n.has(i)||(this.disposeInstance(r),this.instances.delete(i));for(const i of this.sources.values())i.wrapper.visible=!1;for(const i of t.nodes){const r=i.kind+":"+(i.asset||"");let a=this.instances.get(i.id);a&&a.key!==r&&(this.disposeInstance(a),this.instances.delete(i.id),a=void 0),a||(a=this.instantiate(i),this.instances.set(i.id,a));const o=a.root;if(o.position.fromArray(i.transform.position),o.rotation.set(...i.transform.rotation.map(aa.degToRad)),o.scale.fromArray(i.transform.scale),o.visible=i.visible,o.name=i.name,o.userData.sceneNode=i.id,o.updateMatrixWorld(!0),this.applySurface(a,i.surface),i.light){const l=o.children.find(c=>c instanceof lr);l.color.set(i.light.color),l.intensity=i.light.intensity,l.distance=i.light.range,l.castShadow=i.light.shadows&&i.light.intensity>0,l instanceof is&&(l.angle=aa.degToRad(i.light.angle),l.penumbra=i.light.penumbra)}}this.renderer.gl.toneMappingExposure=t.environment.exposure,this.renderer.cameraSettings=ea(t.camera),(!this.renderer.editorMode||!this.renderer.externalCamera)&&this.renderer.configureCamera(t.camera),this.revision++}instantiate(e){let t=new vt,n=!1;if(e.kind==="source"){const r=this.sources.get(e.asset);e.id===e.asset?t=r.wrapper:(t.add(r.prototype.clone(!0)),(r.cut?this.renderer.cutScene:this.root).add(t))}else if(this.root.add(t),e.kind==="model")t.add(this.prototypes.get(e.asset).clone(!0));else if(e.kind==="prefab"){n=!0;const r=this.prefabs.get(e.asset);if(!r)throw new Error("Шаблон не зарегистрирован: "+e.asset);t.add(r())}else if(e.kind.endsWith("-light")){const r=e.kind==="spot-light"?new is:new _s;r.decay=2,r.shadow.mapSize.set(512,512),r.shadow.camera.near=.05,r.shadow.normalBias=.012,t.add(r),r instanceof is&&(r.target.position.set(0,0,-1),t.add(r.target))}else if(e.kind==="camera")t.userData.camera=!0;else{n=!0;const r=e.kind==="sphere"?new ir(.5,24,16):e.kind==="plane"?new Qn(1,1,.04):new Qn(1,1,1),a=new it(r,new Jn({color:9212561,roughness:.9}));a.position.y=.5,a.castShadow=a.receiveShadow=!0,t.add(a)}const i=new Map;return t.traverse(r=>{r instanceof it&&i.set(r,r.material)}),{root:t,key:e.kind+":"+(e.asset||""),surfaceKey:"",ownedMaterials:new Set,ownedTextures:new Set,originals:i,ownsGeometry:n,ownsMaterials:e.kind!=="prefab"}}applySurface(e,t){const n=t&&this.document.textures.find(a=>a.id===t.texture),i=JSON.stringify(t||null)+(n?.data||"");if(i===e.surfaceKey)return;e.surfaceKey=i;for(const a of e.ownedMaterials)a.dispose();for(const a of e.ownedTextures)a.dispose();e.ownedMaterials.clear(),e.ownedTextures.clear();let r;n&&(r=new da().load(n.data),r.colorSpace=yt,r.wrapS=r.wrapT=an,r.repeat.setScalar(t.repeat),e.ownedTextures.add(r));for(const[a,o]of e.originals){if(!t){a.material=o;continue}const l=(Array.isArray(o)?o:[o]).map(c=>{const h=c instanceof Jn?c.clone():new Jn({side:c.side});h.color.set(t.color),h.roughness=t.roughness,h.metalness=t.metalness;const d=t.texture==="original"?c.map:this.textures.get(t.texture);if(h.map=null,r?h.map=r:d&&(h.map=d.clone(),h.map.wrapS=h.map.wrapT=an,h.map.repeat.setScalar(t.repeat),h.map.needsUpdate=!0,e.ownedTextures.add(h.map)),t.texture!=="original")for(const[u,f]of[["normal","normalMap"],["roughness","roughnessMap"],["metalness","metalnessMap"],["ao","aoMap"]]){const g=this.textures.get(t.texture+":"+u);if(h[f]=null,g){const y=g.clone();y.repeat.setScalar(t.repeat),y.needsUpdate=!0,h[f]=y,e.ownedTextures.add(y)}}return e.ownedMaterials.add(h),h});a.material=Array.isArray(o)?l:l[0]}}beforeRender(e){const t=new Set(this.document.nodes.map(n=>n.id));for(const[n,i]of this.sources)t.has(n)||(i.wrapper.visible=!1);for(const n of this.document.nodes)this.instances.get(n.id).root.visible=n.visible}disposeInstance(e){for(const[t,n]of e.originals)t.material=n;for(const t of e.ownedMaterials)t.dispose();for(const t of e.ownedTextures)t.dispose();if([...this.sources.values()].some(t=>t.wrapper===e.root)){e.root.visible=!1;return}e.root.removeFromParent(),e.root.traverse(t=>{if(e.ownsGeometry&&t instanceof it&&(t.geometry.dispose(),e.ownsMaterials))for(const n of Array.isArray(t.material)?t.material:[t.material])n.dispose();(t instanceof _s||t instanceof is)&&t.shadow.dispose()})}dispose(){for(const e of this.instances.values())this.disposeInstance(e);this.instances.clear(),this.root.removeFromParent()}}function Vh(s,e){if(e===ep)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===tl||e===Pu){let t=s.getIndex();if(t===null){const r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===tl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function ry(s){const e=new Map,t=new Map,n=s.clone();return ad(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ad(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)ad(s.children[n],e.children[n],t)}class ay extends Ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uy(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new by(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new xy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new Wh(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wh(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ey(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=qs.extractUrlBase(e);a=qs.resolveURL(c,this.path)}else a=qs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new $u(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===od){try{a[$e.KHR_BINARY_GLTF]=new wy(e)}catch(d){i&&i(d);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ky(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case $e.KHR_MATERIALS_UNLIT:a[d]=new cy;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[d]=new Ty(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[d]=new Ay;break;case $e.KHR_MESH_QUANTIZATION:a[d]=new Ry;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function oy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function bt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ly{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Jt);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new us(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _s(h),c.distance=d;break;case"spot":c=new is(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),En(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class cy{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Vt}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(i)}}class hy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class uy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return bt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(r,r)}return Promise.all(i)}}class dy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return bt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class fy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return bt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class py{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return bt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Jt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,yt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class my{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return bt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class gy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return bt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],Jt),Promise.all(i)}}class _y{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return bt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class xy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return bt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],Jt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,yt)),Promise.all(i)}}class vy{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return bt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class yy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return bt(this.parser,e,this.name)!==null?Fn:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class My{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Sy{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class by{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Wh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class Ey{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==tn.TRIANGLES&&c.mode!==tn.TRIANGLE_STRIP&&c.mode!==tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const g of d){const y=new He,m=new D,p=new ei,M=new D(1,1,1),w=new Hu(g.geometry,g.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&M.fromBufferAttribute(l.SCALE,b),w.setMatrixAt(b,y.compose(m,p,M));let v=null;for(const b in l)if(b==="_COLOR_0"){const E=l[b];w.instanceColor=new la(E.array,E.itemSize,E.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){const R=w.geometry;v=new Et,v.name=R.name;for(const _ in R.attributes)v.setAttribute(_,R.attributes[_]);for(const _ in R.morphAttributes)v.morphAttributes[_]=R.morphAttributes[_];R.index!==null&&v.setIndex(R.index),v.morphTargetsRelative=R.morphTargetsRelative;for(const _ of R.groups)v.addGroup(_.start,_.count,_.materialIndex);R.boundingBox!==null&&(v.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(v.boundingSphere=R.boundingSphere.clone()),v.drawRange.start=R.drawRange.start,v.drawRange.count=R.drawRange.count,v.userData=Object.assign({},R.userData),w.geometry=v}const E=l[b];v.setAttribute(b,new la(E.array,E.itemSize,E.normalized))}gt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const od="glTF",ks=12,Xh={JSON:1313821514,BIN:5130562};class wy{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==od)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ks,r=new DataView(e,ks);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Xh.JSON){const c=new Uint8Array(e,ks+a,o);this.content=n.decode(c)}else if(l===Xh.BIN){const c=ks+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ty{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=ll[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=ll[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],f=ds[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const y=f.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}d(f)},o,c,Jt,u)})})}}class Ay{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Ry{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class ld extends vs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*c,y=g-c,m=-2*f+3*u,p=f-u,M=1-m,w=p-u+d;for(let v=0;v!==o;v++){const b=a[y+v+o],E=a[y+v+l]*h,R=a[g+v+o],_=a[g+v]*h;r[v]=M*b+w*E+m*R+p*_}return r}}const Cy=new ei;class Py extends ld{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Cy.fromArray(r).normalize().toArray(r),r}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qh={9728:Pt,9729:Lt,9984:bu,9985:Yr,9986:zs,9987:qn},Yh={33071:Cn,33648:ta,10497:an},uo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ly={CUBICSPLINE:void 0,LINEAR:js,STEP:Js},fo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Iy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Jn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),s.DefaultMaterial}function Ei(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function En(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ny(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function Dy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Uy(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+po(t.attributes):e=s.indices+":"+po(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+po(s.targets[n]);return e}function po(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function cl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Oy=new He;class ky{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new da(this.options.manager):this.textureLoader=new Nm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new $u(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ei(r,o,i),En(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(qs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=uo[i.type],o=ds[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new qt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=uo[i.type],c=ds[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let y,m;if(f&&f!==d){const p=Math.floor(u/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let w=t.cache.get(M);w||(y=new c(o,p*f,i.count*f/h),w=new ku(y,f/h),t.cache.add(M,w)),m=new tr(w,l,u%f/h,g)}else o===null?y=new c(i.count*l):y=new c(o,u,i.count*l),m=new qt(y,l,g);if(i.sparse!==void 0){const p=uo.SCALAR,M=ds[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new M(a[1],w,i.sparse.count*p),E=new c(a[2],v,i.sparse.count*l);o!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,_=b.length;R<_;R++){const T=b[R];if(m.setX(T,E[R*l]),l>=2&&m.setY(T,E[R*l+1]),l>=3&&m.setZ(T,E[R*l+2]),l>=4&&m.setW(T,E[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=qh[u.magFilter]||Lt,h.minFilter=qh[u.minFilter]||qn,h.wrapS=Yh[u.wrapS]||an,h.wrapT=Yh[u.wrapT]||an,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Pt&&h.minFilter!==Lt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(y){const m=new Ct(y);m.needsUpdate=!0,u(m)}),t.load(qs.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),En(d,a),d.userData.mimeType=a.mimeType||Fy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Pl,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Vu,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Jn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const d=i[$e.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Jt),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,yt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Tn);const h=r.alphaMode||fo.OPAQUE;if(h===fo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===fo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Vt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Fe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Vt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Vt){const d=r.emissiveFactor;o.emissive=new De().setRGB(d[0],d[1],d[2],Jt)}return r.emissiveTexture!==void 0&&a!==Vt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),En(d,r),t.associations.set(d,{materials:e}),r.extensions&&Ei(i,d,r),d})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Kh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Uy(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Kh(new Et,c,t),c.mode===tn.TRIANGLE_STRIP?u=u.then(f=>Vh(f,Pu)):c.mode===tn.TRIANGLE_FAN&&(u=u.then(f=>Vh(f,tl))),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?Iy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const y=h[f],m=a[f];let p;const M=c[f];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0){const w=r.isSkinnedMesh===!0,v=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");w&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&v?new em(y,M):new it(y,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===tn.LINES)p=new sm(y,M);else if(m.mode===tn.LINE_STRIP)p=new Cl(y,M);else if(m.mode===tn.LINE_LOOP)p=new rm(y,M);else if(m.mode===tn.POINTS)p=new Ll(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Dy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),En(p,r),m.extensions&&Ei(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Ei(i,d[0],r),d[0];const u=new vt;r.extensions&&Ei(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(aa.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),En(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new He;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Al(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const f=i.channels[d],g=i.samplers[f.sampler],y=f.target,m=y.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],f=d[1],g=d[2],y=d[3],m=d[4],p=[];for(let w=0,v=u.length;w<v;w++){const b=u[w],E=f[w],R=g[w],_=y[w],T=m[w];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const P=n._createAnimationTracks(b,E,R,_,T);if(P)for(let L=0;L<P.length;L++)p.push(P[L])}const M=new bm(r,void 0,p);return En(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Oy)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){const f=h.userData.pivot,g=d[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Gu:c.length>1?h=new vt:c.length===1?h=c[0]:h=new gt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),En(h,r),r.extensions&&Ei(n,h,r),r.matrix!==void 0){const d=new He;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new vt;n.name&&(r.name=i.createUniqueName(n.name)),En(r,n),n.extensions&&Ei(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){const u=l[h];u.parent!==null?r.add(ry(u)):r.add(u)}const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof gn||u instanceof Ct)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ui[r.path]===ui.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ui[r.path]){case ui.weights:h=sr;break;case ui.rotation:h=rr;break;case ui.translation:case ui.scale:h=ua;break;default:n.itemSize===1?h=sr:h=ua;break}const d=i.interpolation!==void 0?Ly[i.interpolation]:js,u=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const y=new h(l[f]+"."+ui[r.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=cl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof rr?Py:ld;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function By(s,e,t){const n=e.attributes,i=new ti;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){const h=cl(ds[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const y=cl(ds[u.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Un;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Kh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=ll[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Je.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),En(s,e),By(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ny(s,e.targets,t):s})}class zy{models=new Map;textures=new Map;async load(e,t,n=i=>{}){let i=0;try{for(const r of e)if(!(this.models.has(r.id)||this.textures.has("asset:"+r.id))){if(r.type==="model"){const o=(await new ay().loadAsync(t(r.path))).scene;o.scale.multiplyScalar(r.unitScale||1),o.traverse(c=>{c instanceof it&&(c.castShadow=c.receiveShadow=!0)});const l=new vt;l.add(o),this.models.set(r.id,l)}if(r.type==="texture"){const a=await new da().loadAsync(t(r.path));if(a.image.width>4096||a.image.height>4096)throw a.dispose(),new Error("Текстура превышает 4096 × 4096.");a.colorSpace=yt,a.wrapS=a.wrapT=an,this.textures.set("asset:"+r.id,a)}if(r.type==="material")for(const[a,o]of Object.entries(r.maps||{})){const l=await new da().loadAsync(t(o));if(l.image.width>4096||l.image.height>4096)throw l.dispose(),new Error("Карта материала превышает 4096 × 4096.");l.colorSpace=a==="baseColor"?yt:Xn,l.wrapS=l.wrapT=an,this.textures.set("asset:"+r.id+(a==="baseColor"?"":":"+a),l)}n(++i/e.length)}}catch(r){throw new Error("Не удалось загрузить ресурс: "+(r instanceof Error?r.message:String(r)))}}bind(e){e.prototypes=this.models;for(const[t,n]of this.textures)e.textures.set(t,n)}dispose(){for(const e of this.models.values())ar(e);for(const e of this.textures.values())e.dispose();this.models.clear(),this.textures.clear()}}function fa(s){const e=[],t=(o,l)=>e.push({id:o,message:l});if(!s||s.version!==1||!Number.isFinite(s.floorHeight)||s.floorHeight<2.3||s.floorHeight>8||![s.rooms,s.doors,s.stairs,s.openings].every(Array.isArray))return[{id:"layout",message:"Некорректная планировка или высота этажа (2,3–8 м)."}];if(!s.spawn||!Number.isFinite(s.spawn.x)||!Number.isInteger(s.spawn.floor)||[...s.rooms,...s.doors,...s.stairs,...s.openings].some(o=>!o||typeof o.id!="string"||typeof o.name!="string")||s.rooms.some(o=>![o.x,o.width,o.floor,o.depth].every(Number.isFinite))||s.doors.some(o=>![o.x,o.floor].every(Number.isFinite))||s.stairs.some(o=>![o.a,o.b,o.from,o.to].every(Number.isFinite))||s.openings.some(o=>![o.x,o.bottom,o.width,o.height].every(Number.isFinite)))return[{id:"layout",message:"Повреждены данные планировки: проверьте элементы, координаты и появление."}];const n=new Set;for(const o of[...s.rooms,...s.doors,...s.stairs,...s.openings])n.has(o.id)&&t(o.id,"Повторяющийся элемент планировки."),n.add(o.id);for(const o of s.rooms){(!Number.isFinite(o.x)||!Number.isFinite(o.width)||!Number.isInteger(o.floor)||o.width<1||o.width>100||o.depth<1||o.depth>30)&&t(o.id,o.name+": проверьте размеры комнаты.");for(const l of s.rooms)o.id<l.id&&o.floor===l.floor&&o.x<l.x+l.width-.01&&o.x+o.width>l.x+.01&&t(o.id,o.name+": пересечение с комнатой «"+l.name+"».")}const i=(o,l)=>s.rooms.find(c=>c.floor===l&&o>=c.x-.01&&o<=c.x+c.width+.01);for(const o of s.doors)s.rooms.some(l=>l.floor===o.floor&&(Math.abs(l.x-o.x)<.02||Math.abs(l.x+l.width-o.x)<.02))||t(o.id,o.name+": дверь должна находиться на границе комнаты.");for(const o of s.stairs)(!i(o.a,o.from)||!i(o.b,o.to)||o.to!==o.from+1||(o.kind==="ladder"?Math.abs(o.b-o.a)>.01:Math.abs(o.b-o.a)<1.5))&&t(o.id,o.name+": соедините комнаты соседних этажей; длина марша — от 1,5 м.");for(const o of s.openings){const l=s.rooms.find(c=>c.id===o.room);(!l||!["window","breach"].includes(o.kind)||o.plane&&!["back","divider"].includes(o.plane)||o.width<=0||o.height<=0||(o.plane==="divider"?Math.min(Math.abs(o.x-l.x),Math.abs(o.x-l.x-l.width))>.02||o.width>l.depth:o.x-o.width/2<l.x||o.x+o.width/2>l.x+l.width)||o.bottom<0||o.bottom+o.height>s.floorHeight-.15)&&t(o.id,o.name+": проём должен помещаться на выбранной стене комнаты.")}i(s.spawn?.x,s.spawn?.floor)||t("spawn","Точка появления должна быть внутри комнаты.");const r=new Set,a=i(s.spawn?.x,s.spawn?.floor);a&&r.add(a.id);for(let o=0;o<s.rooms.length;o++){for(const l of[...s.doors,...s.openings.filter(cd).map(c=>({x:c.x,floor:s.rooms.find(h=>h.id===c.room)?.floor??0}))]){const c=i(l.x-.05,l.floor),h=i(l.x+.05,l.floor);c&&h&&(r.has(c.id)||r.has(h.id))&&(r.add(c.id),r.add(h.id))}for(const l of s.stairs){const c=i(l.a,l.from),h=i(l.b,l.to);c&&h&&(r.has(c.id)||r.has(h.id))&&(r.add(c.id),r.add(h.id))}}for(const o of s.rooms)r.has(o.id)||t(o.id,o.name+": нет маршрута от точки появления. Добавьте дверь или лестницу.");return e}function Gy(s){const e=fa(s);if(e.length)throw new Error(e.map(t=>t.message).join(`
`))}const cd=s=>s.plane==="divider"&&s.kind==="breach"&&s.bottom===0&&s.height>=1.8&&s.width>0;function Hy(s,e,t,n,i){for(const r of s.rooms.filter(a=>a.floor===n))for(const a of[r.x,r.x+r.width])if((e-a)*(t-a)<=0&&e!==t&&!s.doors.some(o=>o.floor===n&&Math.abs(o.x-a)<.02&&i.has(o.id))&&!s.openings.some(o=>cd(o)&&Math.abs(o.x-a)<.02&&s.rooms.find(l=>l.id===o.room)?.floor===n))return a;return null}function $h(s,e,t,n){const i=(o,l)=>s.rooms.find(c=>c.floor===l&&o>=c.x&&o<=c.x+c.width),r=i(e,t),a=new Set(r?[r.id]:[]);for(let o=0;o<s.rooms.length;o++)for(const l of[...s.doors.filter(c=>n.has(c.id)),...s.openings.filter(c=>c.plane==="divider").map(c=>({x:c.x,floor:s.rooms.find(h=>h.id===c.room)?.floor??0}))]){const c=i(l.x-.05,l.floor),h=i(l.x+.05,l.floor);c&&h&&(a.has(c.id)||a.has(h.id))&&(a.add(c.id),a.add(h.id))}for(const o of s.stairs)if(Math.abs(e-(t===o.from?o.a:o.b))<.8&&(t===o.from||t===o.to)){const l=i(o.a,o.from),c=i(o.b,o.to);l&&c&&(a.has(l.id)||a.has(c.id))&&(a.add(l.id),a.add(c.id))}return a}class hd{constructor(e){this.scene=e,e.add(this.root)}scene;root=new vt;doors=new Map;key="";apply(e){const t=fa(e).find(l=>l.id==="layout");if(t)throw new Error(t.message);const n=JSON.stringify(e);if(n===this.key)return;this.key=n,ar(this.root),this.root.clear(),this.doors.clear();const i=new Set(fa(e).map(l=>l.id)),r=(l,c,h,d,u,f,g,y,m)=>{const p=new it(new Qn(Math.max(.01,u),Math.max(.01,f),Math.max(.01,g)),new Jn({color:i.has(m)?"#b54f52":y,roughness:.85}));return p.position.set(c,h,d),p.castShadow=p.receiveShadow=!0,p.userData.layoutId=m,l.add(p),p},a=new Set;for(const l of e.rooms){const c=l.floor*e.floorHeight,h=e.floorHeight,d=-l.depth/2,u=e.stairs.filter(m=>m.to===l.floor&&m.b>=l.x&&m.b<=l.x+l.width).map(m=>m.kind==="ladder"?[m.b-.45,m.b+.45]:[Math.min(m.a,m.b),Math.max(m.a,m.b)+.3]);let f=[[l.x,l.x+l.width]];for(const[m,p]of u)f=f.flatMap(([M,w])=>w<=m||M>=p?[[M,w]]:[[M,Math.max(M,m)],[Math.min(w,p),w]].filter(([v,b])=>b-v>.01));for(const[m,p]of f)r(this.root,(m+p)/2,c-.09,0,p-m,.18,l.depth,"#646761",l.id);r(this.root,l.x+l.width/2,c-.09,l.depth/2-.12,l.width,.18,.24,"#42453f",l.id);const g=e.openings.filter(m=>m.room===l.id&&m.plane!=="divider"),y=[l.x,l.x+l.width,...g.flatMap(m=>[m.x-m.width/2,m.x+m.width/2])].sort((m,p)=>m-p);for(let m=1;m<y.length;m++){const p=y[m-1],M=y[m],w=g.find(v=>(p+M)/2>v.x-v.width/2&&(p+M)/2<v.x+v.width/2);w?(w.bottom&&r(this.root,(p+M)/2,c+w.bottom/2,d,M-p,w.bottom,.14,l.color,l.id),r(this.root,(p+M)/2,c+(h+w.bottom+w.height)/2,d,M-p,h-w.bottom-w.height,.14,l.color,l.id)):r(this.root,(p+M)/2,c+h/2,d,M-p,h,.14,l.color,l.id)}for(const m of[l.x,l.x+l.width]){const p=m+":"+l.floor;if(a.has(p))continue;a.add(p);const M=e.doors.find(v=>v.floor===l.floor&&Math.abs(v.x-m)<.02),w=e.openings.find(v=>v.plane==="divider"&&Math.abs(v.x-m)<.02&&e.rooms.find(b=>b.id===v.room)?.floor===l.floor);if(!M&&w){const v=Math.min(w.width,l.depth),b=w.bottom,E=b+w.height;b>0&&r(this.root,m,c+b/2,0,.14,b,l.depth,l.color,w.id),E<h&&r(this.root,m,c+(E+h)/2,0,.14,h-E,l.depth,l.color,w.id);const R=(l.depth-v)/2;if(R>0)for(const _ of[-1,1])r(this.root,m,c+(b+E)/2,_*(v+R)/2,.14,w.height,R,l.color,w.id)}else if(!M)r(this.root,m,c+h/2,0,.14,h,l.depth,l.color,l.id);else{r(this.root,m,c+(h+2.1)/2,0,.16,h-2.1,l.depth,l.color,M.id),r(this.root,m,c+1.05,-l.depth/4-.3,.16,2.1,l.depth/2-.6,l.color,M.id),r(this.root,m,c+1.05,l.depth/4+.3,.16,2.1,l.depth/2-.6,l.color,M.id);const v=new vt;v.position.set(m,c,-.6),r(v,0,1.03,.6,.08,2.06,1.16,"#6f513a",M.id),this.root.add(v),this.doors.set(M.id,v)}}}for(const l of e.stairs){if(l.kind==="ladder"){for(const h of[-.35,.35])r(this.root,l.a+h,(l.from+.5)*e.floorHeight,-.75,.06,e.floorHeight,.09,"#89877d",l.id);for(let h=.2;h<e.floorHeight;h+=.28)r(this.root,l.a,l.from*e.floorHeight+h,-.75,.7,.05,.08,"#89877d",l.id);continue}const c=16;for(let h=0;h<c;h++){const d=(h+.5)/c;r(this.root,l.a+(l.b-l.a)*d,l.from*e.floorHeight+(h+1)*e.floorHeight/c-.06,-.75,Math.abs(l.b-l.a)/c+.02,.12,1.1,"#89877d",l.id)}}const o=new it(new Nl(.16,.4,16),new Vt({color:i.has("spawn")?"#ff5555":"#8fd8bd"}));o.position.set(e.spawn.x,e.spawn.floor*e.floorHeight+.2,0),o.userData.layoutId="spawn",o.userData.editorOnly=!0,this.root.add(o),this.setDoors(new Set(e.doors.filter(l=>l.open).map(l=>l.id)))}setDoors(e){for(const[t,n]of this.doors)n.rotation.y=e.has(t)?Math.PI/2:0}dispose(){ar(this.root),this.root.removeFromParent()}}function Vy(s,e=!0){const t=new iy(s),n=new sy(t);n.validators.push(a=>{const o=a.moduleData?.layout;if(o){const l=fa(o).find(c=>c.id==="layout");if(l)throw new Error(l.message)}}),t.scene.background=new De("#29343c"),t.scene.add(new sl(13295083,3420195,2));const i=new us(16772558,3);i.position.set(-4,10,6),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-20,right:20,top:20,bottom:-20}),t.scene.add(i);const r=new hd(t.scene);return{renderer:t,runtime:n,floorHeight:3,floorNames:[{value:-1,name:"Подвал"},{value:0,name:"1 этаж"},{value:1,name:"2 этаж"},{value:2,name:"3 этаж"}],prefabs:{},draw:a=>{const o=n.document.moduleData?.layout;o&&e?r.apply(o):r.key&&(r.dispose(),r.key=""),i.intensity=.15+3*Math.max(0,Math.sin((n.document.environment.time-360)/1440*Math.PI*2)),t.scene.fog=new El("#29343c",n.document.environment.haze),t.render(a)},updateCamera:a=>t.updateCamera(a),dispose:()=>{r.dispose(),n.dispose(),t.dispose()}}}async function Wy(s){const e=[...s.registry.modules.values()].find(V=>V.createSession);if(e)return e.createSession(s);const t=structuredClone(s.snapshot);let n=s.sceneId,i=!1,r=!1,a=0,o=performance.now(),l,c,h=[],d,u,f,g=new Set,y=0,m=0,p;const M=new Set,w=new AbortController,v=s.container;v.innerHTML='<canvas tabindex="0" aria-label="Игра" style="width:100%;height:100%;display:block"></canvas><div class="runtime-actions" style="position:absolute;bottom:14px;left:14px;display:flex;gap:8px;flex-wrap:wrap"></div>';let b=v.querySelector("canvas");const E=v.querySelector(".runtime-actions"),R=jh(t.manifest.projectId,"progress",t.manifest.build.appId);let _;try{s.savePolicy==="persistent"&&(_=JSON.parse(localStorage.getItem(R)||"null"))}catch{}async function T(V){const W=t.scenes[V];if(!W)throw new Error("Сцена перехода не включена: "+V);s.registry.validate(W,t.manifest),W.moduleData?.layout&&Gy(W.moduleData.layout);const te=new zy;if(await te.load(t.manifest.assets,s.assetUrl),i){te.dispose();return}for(const K of h)s.registry.components.get(K.component.type)?.dispose?.(K);d?.dispose(),l?.dispose(),c?.dispose();const Y=b.cloneNode(!1);if(b.replaceWith(Y),b=Y,c=te,l=Vy(b,!1),c.bind(l.runtime),l.runtime.apply(W),l.renderer.resize(),n=V,l.renderer.beforeRender=()=>{},f=W.moduleData?.layout,d=void 0,u=void 0,p=void 0,E.innerHTML="",f){d=new hd(l.renderer.scene),d.apply(f),d.root.traverse(J=>{J.userData.editorOnly&&(J.visible=!1)}),g=new Set(f.doors.filter(J=>J.open).map(J=>J.id)),y=f.spawn.floor,m=f.spawn.x,u=new it(new Il(.18,1.15,6,12),new Jn({color:15516541})),l.renderer.scene.add(u);const K=document.createElement("span");K.textContent="A/D — идти · W/S — лестница · E — дверь",K.style.cssText="color:white;background:#111c;padding:8px",E.append(K)}h=W.nodes.flatMap(K=>(K.components||[]).map(J=>({node:K,component:J,runtime:l.runtime,scene:W,transition:L,keys:M})));for(const K of h)if(s.registry.components.get(K.component.type)?.load?.(K),K.component.type==="basic.portal"){const J=document.createElement("button");J.textContent=String(K.component.values.label),J.onclick=()=>L(String(K.component.values.scene)),E.append(J)}l.renderer.updateCamera(100),b.focus()}let P=!1;function L(V){P||r||i||(P=!0,T(V).catch(U).finally(()=>P=!1))}function U(V){const W=document.createElement("p");W.style.cssText="position:absolute;top:10px;background:#511;color:white;padding:12px",W.textContent=String(V),v.append(W)}const B=V=>{if(!V.target.closest("input,textarea,select")&&(["KeyA","KeyD","KeyW","KeyS","KeyE","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(V.code)&&(V.preventDefault(),M.add(V.code)),V.code==="KeyE"&&!V.repeat&&!r&&f)){const W=f.doors.find(te=>te.floor===y&&Math.abs(te.x-m)<1);W&&(g.has(W.id)?g.delete(W.id):g.add(W.id),d?.setDoors(g))}};window.addEventListener("keydown",B,{signal:w.signal}),window.addEventListener("keyup",V=>M.delete(V.code),{signal:w.signal}),window.addEventListener("blur",()=>M.clear(),{signal:w.signal}),await T(_?.sceneId&&t.scenes[_.sceneId]?_.sceneId:n);const I=new ResizeObserver(()=>{l?.renderer.resize(),l?.renderer.updateCamera(100)});I.observe(v);function z(V){if(i)return;const W=Math.min(.05,(V-o)/1e3);if(o=V,!r&&!P&&l){for(const te of h)s.registry.components.get(te.component.type)?.update?.(te,W);if(f&&u){const te=Number(M.has("KeyD")||M.has("ArrowRight"))-Number(M.has("KeyA")||M.has("ArrowLeft"));if(!p){let Y=m+te*2.5*W;const K=Hy(f,m,Y,y,g);K!==null&&(Y=K-Math.sign(te)*.025),f.rooms.some(Xe=>Xe.floor===y&&Y>=Xe.x&&Y<=Xe.x+Xe.width)&&(m=Y);const J=M.has("KeyW")||M.has("ArrowUp"),Ee=M.has("KeyS")||M.has("ArrowDown"),xe=f.stairs.find(Xe=>J&&Xe.from===y&&Math.abs(Xe.a-m)<.7||Ee&&Xe.to===y&&Math.abs(Xe.b-m)<.7);xe&&(p={...xe,t:J?0:1,direction:J?1:-1})}p?(p.t+=W*.6*p.direction,m=p.a+(p.b-p.a)*Math.max(0,Math.min(1,p.t)),u.position.set(m,(p.from+Math.max(0,Math.min(1,p.t)))*f.floorHeight+.75,-.75),(p.t>=1||p.t<=0)&&(y=p.direction>0?p.to:p.from,p=void 0)):u.position.set(m,y*f.floorHeight+.75,0)}}if(l){if(f){const Y=$h(f,m,y,g);for(const K of l.runtime.document.nodes){const J=f.rooms.find(xe=>xe.floor===Math.floor((K.transform.position[1]+.05)/f.floorHeight)&&K.transform.position[0]>=xe.x&&K.transform.position[0]<=xe.x+xe.width),Ee=l.runtime.instances.get(K.id)?.root;Ee&&(Ee.visible=K.visible&&(!J||!!K.light||Y.has(J.id)))}}const te=l.runtime.document.nodes.find(Y=>Y.id===l.runtime.document.activeCamera);te&&(l.renderer.externalCamera=!0,l.renderer.camera.position.fromArray(te.transform.position),l.renderer.camera.rotation.set(...te.transform.rotation.map(aa.degToRad)),l.renderer.camera.updateMatrixWorld()),l.draw(W)}a=requestAnimationFrame(z)}return a=requestAnimationFrame(z),{pause(V){if(r=V,M.clear(),V)for(const W of h)s.registry.components.get(W.component.type)?.pause?.(W)},dispose(){i=!0,cancelAnimationFrame(a),w.abort(),I.disconnect();for(const V of h)s.registry.components.get(V.component.type)?.dispose?.(V);if(s.savePolicy==="persistent")try{localStorage.setItem(R,JSON.stringify({sceneId:n}))}catch{}d?.dispose(),l?.dispose(),c?.dispose(),v.replaceChildren()},diagnostics:()=>({sceneId:n,paused:r,x:m,floor:y,visibleRooms:f?[...$h(f,m,y,g)]:[],openDoors:[...g],frames:1,memory:l?.renderer.gl.info.memory})}}const Xy={id:"shelter.basic",sdk:1,components:[{id:"basic.rotate",name:"Вращение",fields:[{name:"speed",label:"Скорость",type:"number",default:30,min:-360,max:360,unit:"°/с"},{name:"axis",label:"Ось",type:"select",default:"y",options:[{value:"x",label:"X"},{value:"y",label:"Y"},{value:"z",label:"Z"}]}],update:({runtime:s,node:e,component:t},n)=>{const i=s.instances.get(e.id).root;i.rotation[t.values.axis]+=Number(t.values.speed)*Math.PI/180*n}},{id:"basic.portal",name:"Переход в сцену",fields:[{name:"scene",label:"Куда перейти",type:"scene",default:""},{name:"label",label:"Надпись кнопки",type:"string",default:"Следующая сцена"}]},{id:"basic.bob",name:"Плавное покачивание",fields:[{name:"height",label:"Высота",type:"number",default:.2,min:0,max:3,unit:"м"},{name:"speed",label:"Скорость",type:"number",default:1,min:0,max:5}],update:({runtime:s,node:e,component:t},n)=>{const i=s.instances.get(e.id).root;i.userData.time=(i.userData.time||0)+n,i.position.y=e.transform.position[1]+Math.sin(i.userData.time*Number(t.values.speed))*Number(t.values.height)}}]};async function qy(s,e,t,n,i=!1){const r=new ty;r.register(Xy);for(const a of e)r.register(a.default||a);return Wy({container:document.querySelector("#app"),snapshot:s,sceneId:t,assetUrl:n,registry:r,savePolicy:i?"isolated":"persistent"})}const Yy={format:"shelter-project",version:1,sdk:1,projectId:"spire-arena-heights",name:"Шпиль · Арена на высоте",gameVersion:"0.2.0",startScene:"arena",scenes:[{id:"arena",name:"Шпиль",path:"scenes/arena.scene.json"}],assets:[],modules:[{id:"spire",version:1,runtime:"scripts/runtime.ts"}],build:{target:"web",mode:"release",base:"./",output:"/Users/gadaev/Documents/ChatGPT/2D GAME/artifacts/builds/spire",scenes:["arena"],dynamicAssets:[],appId:"game.spire-arena-heights"}},Ky=JSON.parse('{"arena":{"format":"shelter-scene","version":2,"id":"arena","template":"spire-arena-v1","name":"Шпиль","units":"m","nodes":[{"id":"floor-1","name":"Настил","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-1.5,20.5],"rotation":[0,0,0],"scale":[64,3,23]},"surface":{"texture":"none","color":"#4b4f58","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"floor"}}]},{"id":"floor-2","name":"Настил","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-1.5,-20.5],"rotation":[0,0,0],"scale":[64,3,23]},"surface":{"texture":"none","color":"#4b4f58","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"floor"}}]},{"id":"floor-3","name":"Настил","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20.5,-1.5,0],"rotation":[0,0,0],"scale":[23,3,18]},"surface":{"texture":"none","color":"#4b4f58","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"floor"}}]},{"id":"floor-4","name":"Настил","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20.5,-1.5,0],"rotation":[0,0,0],"scale":[23,3,18]},"surface":{"texture":"none","color":"#4b4f58","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"floor"}}]},{"id":"floor-5","name":"Настил","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-4,0],"rotation":[0,0,0],"scale":[18,2,18]},"surface":{"texture":"none","color":"#4b4f58","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"floor"}}]},{"id":"metal-6","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-0.25,0],"rotation":[0,0,0],"scale":[18,0.5,2]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"lava","name":"Лава","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-2.25,0],"rotation":[0,0,0],"scale":[18,0.5,18]},"surface":{"texture":"none","color":"#ff5a1f","roughness":1,"metalness":0,"repeat":1},"components":[{"type":"spire.lava","values":{}}]},{"id":"wall-7","name":"Стена","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-32.5,7.5,0],"rotation":[0,0,0],"scale":[1,21,66]},"surface":{"texture":"none","color":"#30343d","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"wall"}}]},{"id":"wall-8","name":"Стена","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,7.5,-32.5],"rotation":[0,0,0],"scale":[64,21,1]},"surface":{"texture":"none","color":"#30343d","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"wall"}}]},{"id":"wall-9","name":"Стена","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[32.5,7.5,0],"rotation":[0,0,0],"scale":[1,21,66]},"surface":{"texture":"none","color":"#30343d","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"wall"}}]},{"id":"wall-10","name":"Стена","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,7.5,32.5],"rotation":[0,0,0],"scale":[64,21,1]},"surface":{"texture":"none","color":"#30343d","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"wall"}}]},{"id":"metal-11","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,4.75,29],"rotation":[0,0,0],"scale":[64,0.5,6]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"metal-12","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,4.75,-29],"rotation":[0,0,0],"scale":[64,0.5,6]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"metal-13","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-29,4.75,0],"rotation":[0,0,0],"scale":[6,0.5,52]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"metal-14","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[29,4.75,0],"rotation":[0,0,0],"scale":[6,0.5,52]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"metal-15","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,4.75,22],"rotation":[0,0,0],"scale":[10,0.5,8]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"metal-16","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,4.75,-22],"rotation":[0,0,0],"scale":[10,0.5,8]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"rail-17","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-12,5.5,-26.15],"rotation":[0,0,0],"scale":[10,1,0.3000000000000007]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-18","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[12,5.5,-26.15],"rotation":[0,0,0],"scale":[10,1,0.3000000000000007]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-19","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-26.15,5.5,-12.5],"rotation":[0,0,0],"scale":[0.3000000000000007,1,15]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-20","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-26.15,5.5,12.5],"rotation":[0,0,0],"scale":[0.3000000000000007,1,15]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-21","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-4.85,5.5,-20],"rotation":[0,0,0],"scale":[0.2999999999999998,1,4]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-22","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4.85,5.5,-20],"rotation":[0,0,0],"scale":[0.2999999999999998,1,4]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-23","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-12,5.5,26.15],"rotation":[0,0,0],"scale":[10,1,0.3000000000000007]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-24","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[12,5.5,26.15],"rotation":[0,0,0],"scale":[10,1,0.3000000000000007]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-25","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[26.15,5.5,-12.5],"rotation":[0,0,0],"scale":[0.3000000000000007,1,15]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-26","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[26.15,5.5,12.5],"rotation":[0,0,0],"scale":[0.3000000000000007,1,15]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-27","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-4.85,5.5,20],"rotation":[0,0,0],"scale":[0.2999999999999998,1,4]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"rail-28","name":"Перила","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4.85,5.5,20],"rotation":[0,0,0],"scale":[0.2999999999999998,1,4]},"surface":{"texture":"none","color":"#c98a3a","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"rail"}}]},{"id":"stair-29","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.25,-20],"rotation":[0,0,0],"scale":[4,0.5,12]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-30","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.5,-20.6],"rotation":[0,0,0],"scale":[4,1,10.8]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-31","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.75,-21.2],"rotation":[0,0,0],"scale":[4,1.5,9.600000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-32","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1,-21.8],"rotation":[0,0,0],"scale":[4,2,8.399999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-33","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.25,-22.4],"rotation":[0,0,0],"scale":[4,2.5,7.199999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-34","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.5,-23],"rotation":[0,0,0],"scale":[4,3,6]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-35","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.75,-23.6],"rotation":[0,0,0],"scale":[4,3.5,4.800000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-36","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2,-24.2],"rotation":[0,0,0],"scale":[4,4,3.6000000000000014]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-37","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2.25,-24.8],"rotation":[0,0,0],"scale":[4,4.5,2.3999999999999986]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-38","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2.5,-25.4],"rotation":[0,0,0],"scale":[4,5,1.2000000000000028]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-39","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.25,20],"rotation":[0,0,0],"scale":[4,0.5,12]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-40","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.5,20.6],"rotation":[0,0,0],"scale":[4,1,10.8]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-41","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,0.75,21.2],"rotation":[0,0,0],"scale":[4,1.5,9.600000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-42","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1,21.8],"rotation":[0,0,0],"scale":[4,2,8.399999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-43","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.25,22.4],"rotation":[0,0,0],"scale":[4,2.5,7.199999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-44","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.5,23],"rotation":[0,0,0],"scale":[4,3,6]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-45","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,1.75,23.6],"rotation":[0,0,0],"scale":[4,3.5,4.800000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-46","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2,24.2],"rotation":[0,0,0],"scale":[4,4,3.6000000000000014]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-47","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2.25,24.8],"rotation":[0,0,0],"scale":[4,4.5,2.3999999999999986]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-48","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-20,2.5,25.4],"rotation":[0,0,0],"scale":[4,5,1.2000000000000028]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-49","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.25,-20],"rotation":[0,0,0],"scale":[4,0.5,12]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-50","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.5,-20.6],"rotation":[0,0,0],"scale":[4,1,10.8]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-51","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.75,-21.2],"rotation":[0,0,0],"scale":[4,1.5,9.600000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-52","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1,-21.8],"rotation":[0,0,0],"scale":[4,2,8.399999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-53","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.25,-22.4],"rotation":[0,0,0],"scale":[4,2.5,7.199999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-54","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.5,-23],"rotation":[0,0,0],"scale":[4,3,6]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-55","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.75,-23.6],"rotation":[0,0,0],"scale":[4,3.5,4.800000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-56","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2,-24.2],"rotation":[0,0,0],"scale":[4,4,3.6000000000000014]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-57","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2.25,-24.8],"rotation":[0,0,0],"scale":[4,4.5,2.3999999999999986]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-58","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2.5,-25.4],"rotation":[0,0,0],"scale":[4,5,1.2000000000000028]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-59","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.25,20],"rotation":[0,0,0],"scale":[4,0.5,12]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-60","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.5,20.6],"rotation":[0,0,0],"scale":[4,1,10.8]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-61","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,0.75,21.2],"rotation":[0,0,0],"scale":[4,1.5,9.600000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-62","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1,21.8],"rotation":[0,0,0],"scale":[4,2,8.399999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-63","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.25,22.4],"rotation":[0,0,0],"scale":[4,2.5,7.199999999999999]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-64","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.5,23],"rotation":[0,0,0],"scale":[4,3,6]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-65","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,1.75,23.6],"rotation":[0,0,0],"scale":[4,3.5,4.800000000000001]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-66","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2,24.2],"rotation":[0,0,0],"scale":[4,4,3.6000000000000014]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-67","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2.25,24.8],"rotation":[0,0,0],"scale":[4,4.5,2.3999999999999986]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"stair-68","name":"Ступень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[20,2.5,25.4],"rotation":[0,0,0],"scale":[4,5,1.2000000000000028]},"surface":{"texture":"none","color":"#646a74","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"stair"}}]},{"id":"metal-69","name":"Мостки","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,9.7,0],"rotation":[0,0,0],"scale":[12,0.5999999999999996,12]},"surface":{"texture":"none","color":"#5d6573","roughness":0.85,"metalness":0.45,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"metal"}}]},{"id":"pillar-70","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-5,3.2,-5],"rotation":[0,0,0],"scale":[1,12.4,1]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pillar-71","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-5,3.2,5],"rotation":[0,0,0],"scale":[1,12.4,1]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pillar-72","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,3.2,-5],"rotation":[0,0,0],"scale":[1,12.4,1]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pillar-73","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,3.2,5],"rotation":[0,0,0],"scale":[1,12.4,1]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"crate-74","name":"Ящик","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0.6,-13.75],"rotation":[0,0,0],"scale":[3,1.2,1.5]},"surface":{"texture":"none","color":"#6b5a44","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"crate"}}]},{"id":"crate-75","name":"Ящик","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-26,0.7,-18],"rotation":[0,0,0],"scale":[2,1.4,2]},"surface":{"texture":"none","color":"#6b5a44","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"crate"}}]},{"id":"pillar-76","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-25.6,2.25,-13],"rotation":[0,0,0],"scale":[1.1999999999999993,4.5,1.1999999999999993]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pillar-77","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-25.6,2.25,13],"rotation":[0,0,0],"scale":[1.1999999999999993,4.5,1.1999999999999993]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"crate-78","name":"Ящик","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0.6,13.75],"rotation":[0,0,0],"scale":[3,1.2,1.5]},"surface":{"texture":"none","color":"#6b5a44","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"crate"}}]},{"id":"crate-79","name":"Ящик","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[26,0.7,18],"rotation":[0,0,0],"scale":[2,1.4,2]},"surface":{"texture":"none","color":"#6b5a44","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"crate"}}]},{"id":"pillar-80","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[25.6,2.25,-13],"rotation":[0,0,0],"scale":[1.1999999999999993,4.5,1.1999999999999993]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pillar-81","name":"Опора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[25.6,2.25,13],"rotation":[0,0,0],"scale":[1.1999999999999993,4.5,1.1999999999999993]},"surface":{"texture":"none","color":"#3a3f4a","roughness":0.85,"metalness":0.15,"repeat":1},"components":[{"type":"spire.solid","values":{"style":"pillar"}}]},{"id":"pad-82","name":"Прыжковая площадка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-18,0.1,0],"rotation":[0,0,0],"scale":[2,0.2,2]},"components":[{"type":"spire.jumppad","values":{"tx":-29,"ty":5,"tz":0}}]},{"id":"pad-83","name":"Прыжковая площадка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[18,0.1,0],"rotation":[0,0,0],"scale":[2,0.2,2]},"components":[{"type":"spire.jumppad","values":{"tx":29,"ty":5,"tz":0}}]},{"id":"pad-84","name":"Прыжковая площадка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,5.1,21],"rotation":[0,0,0],"scale":[2,0.2,2]},"components":[{"type":"spire.jumppad","values":{"tx":0,"ty":10,"tz":4.5}}]},{"id":"pad-85","name":"Прыжковая площадка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,5.1,-21],"rotation":[0,0,0],"scale":[2,0.2,2]},"components":[{"type":"spire.jumppad","values":{"tx":0,"ty":10,"tz":-4.5}}]},{"id":"spawn-86","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-24,0.05,-24],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":-135}}]},{"id":"spawn-87","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[24,0.05,24],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":45}}]},{"id":"spawn-88","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-26,0.05,22],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":-49.8}}]},{"id":"spawn-89","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[26,0.05,-22],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":130.2}}]},{"id":"spawn-90","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-14,0.05,-5],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":-109.7}}]},{"id":"spawn-91","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[14,0.05,5],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":70.3}}]},{"id":"spawn-92","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,0.05,20],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":0}}]},{"id":"spawn-93","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,0.05,-20],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":180}}]},{"id":"spawn-94","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-29,5.05,-22],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":-127.2}}]},{"id":"spawn-95","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[29,5.05,22],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":52.8}}]},{"id":"spawn-96","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-22,5.05,29],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":-37.2}}]},{"id":"spawn-97","name":"Точка появления","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[22,5.05,-29],"rotation":[0,0,0],"scale":[0.6,0.1,0.6]},"components":[{"type":"spire.spawn","values":{"yaw":142.8}}]},{"id":"item-98","name":"Мега-бонус","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,10.4,0],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"mega"}}]},{"id":"item-99","name":"Ракетница","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,0.4,0],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"rocket"}}]},{"id":"item-100","name":"Дробовик","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-29,5.4,-10],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"shotgun"}}]},{"id":"item-101","name":"Дробовик","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[29,5.4,10],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"shotgun"}}]},{"id":"item-102","name":"Броня","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-29,5.4,29],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"armor"}}]},{"id":"item-103","name":"Броня","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[29,5.4,-29],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"armor"}}]},{"id":"item-104","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-14,0.4,20],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-105","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[14,0.4,-20],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-106","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-28,0.4,-6],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-107","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[28,0.4,6],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-108","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,5.4,29],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-109","name":"Аптечка","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,5.4,-29],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"health"}}]},{"id":"item-110","name":"Патроны дробовика","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-12,0.4,-14],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"shells"}}]},{"id":"item-111","name":"Патроны дробовика","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[12,0.4,14],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"shells"}}]},{"id":"item-112","name":"Ракеты","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-29,5.4,20],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"rockets"}}]},{"id":"item-113","name":"Ракеты","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[29,5.4,-20],"rotation":[0,0,0],"scale":[0.8,0.8,0.8]},"components":[{"type":"spire.pickup","values":{"item":"rockets"}}]}],"textures":[],"camera":{"projection":"perspective","fov":90,"height":2,"distance":3,"follow":"fixed"},"environment":{"time":0,"haze":0.02,"exposure":1,"flashlight":false},"moduleData":{"spire":{"size":64,"lavaY":-2,"killY":-12}}}}'),Zh={manifest:Yy,scenes:Ky},$y=s=>new URL("./"+s,location.href).href;qy(Zh,[ey],Zh.manifest.startScene,$y).catch(s=>{document.getElementById("app").textContent="Не удалось запустить игру: "+s.message});

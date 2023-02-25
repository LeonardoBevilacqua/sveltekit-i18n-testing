import{_ as K}from"./preload-helper-41c905a7.js";import{B as L,H as p,I as P}from"./index-dce22767.js";var se=Object.defineProperty,ne=Object.defineProperties,ce=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,M=(r,t,e)=>t in r?se(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,u=(r,t)=>{for(var e in t||(t={}))G.call(t,e)&&M(r,e,t[e]);if(D)for(var e of D(t))J.call(t,e)&&M(r,e,t[e]);return r},g=(r,t)=>ne(r,ce(t)),j=(r,t)=>{var e={};for(var a in r)G.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&D)for(var a of D(r))t.indexOf(a)<0&&J.call(r,a)&&(e[a]=r[a]);return e},A=["error","warn","debug"],Q=({logger:r=console,level:t=A[1],prefix:e="[i18n]: "})=>A.reduce((a,l,i)=>g(u({},a),{[l]:o=>A.indexOf(t)>=i&&r[l](`${e}${o}`)}),{}),d=Q({}),ue=r=>{d=r},z=r=>{var t=r,{parser:e,key:a,params:l,translations:i,locale:o,fallbackLocale:s}=t,c=j(t,["parser","key","params","translations","locale","fallbackLocale"]);if(!(a&&o))return d.warn("No translation key or locale provided. Skipping translation..."),"";let n=(i[o]||{})[a];return s&&n===void 0&&(n=(i[s]||{})[a]),c.hasOwnProperty("fallbackValue")&&n===void 0?c.fallbackValue:e.parse(n,l,o,a)},y=(...r)=>r.length?r.filter(t=>!!t).map(t=>{let e=`${t}`.toLowerCase();try{let[a]=Intl.Collator.supportedLocalesOf(t);if(!a)throw new Error(`'${t}' is non-standard.`);e=a}catch{d.warn(`Non-standard locale provided: '${t}'. Check your 'translations' and 'loaders' in i18n config...`)}return e}):[],E=(r,t)=>Object.keys(r||{}).reduce((e,a)=>{let l=r[a],i=t?`${t}.${a}`:`${a}`;return l&&typeof l=="object"?u(u({},e),E(l,i)):g(u({},e),{[i]:l})},{}),de=async r=>{try{return(await Promise.all(r.map(t=>{var e=t,{loader:a}=e,l=j(e,["loader"]);return new Promise(async i=>{let o;try{o=await a()}catch(s){d.error(`Failed to load translation. Verify your '${l.locale}' > '${l.key}' Loader.`),d.error(s)}i(g(u({loader:a},l),{data:o}))})}))).reduce((t,{key:e,data:a,locale:l})=>{if(!a)return t;let[i]=y(l);return g(u({},t),{[i]:E(g(u({},t[i]||{}),{[e]:a}))})},{})}catch(t){d.error(t)}return{}},pe=r=>t=>{try{if(typeof t=="string")return t===r;if(typeof t=="object")return t.test(r)}catch{d.error("Invalid route config!")}return!1},fe=(r,t)=>{let e=!0;try{e=Object.keys(r).filter(a=>r[a]!==void 0).every(a=>r[a]===t[a])}catch{}return e},H=1e3*60*60*24,he=class{constructor(t){this.cachedAt=0,this.loadedKeys={},this.currentRoute=L(),this.config=L(),this.isLoading=L(!1),this.promises=new Set,this.loading={subscribe:this.isLoading.subscribe,toPromise:(e,a)=>{let l=Array.from(this.promises).filter(i=>fe({locale:y(e)[0],route:a},i)).map(({promise:i})=>i);return Promise.all(l)},get:()=>p(this.isLoading)},this.privateTranslations=L({}),this.translations={subscribe:this.privateTranslations.subscribe,get:()=>p(this.translations)},this.locales=g(u({},P([this.config,this.privateTranslations],([e,a])=>{if(!e)return[];let{loaders:l=[]}=e,i=l.map(({locale:s})=>s),o=Object.keys(a).map(s=>s);return Array.from(new Set([...y(...i),...y(...o)]))},[])),{get:()=>p(this.locales)}),this.internalLocale=L(),this.loaderTrigger=P([this.internalLocale,this.currentRoute],([e,a],l)=>{var i,o;e!==void 0&&a!==void 0&&!(e===((i=p(this.loaderTrigger))==null?void 0:i[0])&&a===((o=p(this.loaderTrigger))==null?void 0:o[1]))&&(d.debug("Triggering translation load..."),l([e,a]))},[]),this.localeHelper=L(),this.locale={subscribe:this.localeHelper.subscribe,forceSet:this.localeHelper.set,set:this.internalLocale.set,update:this.internalLocale.update,get:()=>p(this.locale)},this.initialized=P([this.locale,this.currentRoute,this.privateTranslations],([e,a,l],i)=>{p(this.initialized)||i(e!==void 0&&a!==void 0&&!!Object.keys(l).length)}),this.translation=P([this.privateTranslations,this.locale,this.isLoading],([e,a,l],i)=>{let o=e[a];o&&Object.keys(o).length&&!l&&i(o)},{}),this.t=g(u({},P([this.config,this.translation],e=>{var[a]=e,l=a,{parser:i,fallbackLocale:o}=l,s=j(l,["parser","fallbackLocale"]);return(c,...n)=>z(u({parser:i,key:c,params:n,translations:this.translations.get(),locale:this.locale.get(),fallbackLocale:o},s.hasOwnProperty("fallbackValue")?{fallbackValue:s.fallbackValue}:{}))})),{get:(e,...a)=>p(this.t)(e,...a)}),this.l=g(u({},P([this.config,this.translations],e=>{var[a,...l]=e,i=a,{parser:o,fallbackLocale:s}=i,c=j(i,["parser","fallbackLocale"]),[n]=l;return(m,b,...O)=>z(u({parser:o,key:b,params:O,translations:n,locale:m,fallbackLocale:s},c.hasOwnProperty("fallbackValue")?{fallbackValue:c.fallbackValue}:{}))})),{get:(e,a,...l)=>p(this.l)(e,a,...l)}),this.getLocale=e=>{let{fallbackLocale:a=""}=p(this.config)||{},l=e||a;if(!l)return"";let i=this.locales.get();return i.find(o=>y(l).includes(o))||i.find(o=>y(a).includes(o))||""},this.setLocale=e=>{if(e&&e!==p(this.internalLocale))return d.debug(`Setting '${e}' locale.`),this.internalLocale.set(e),this.loading.toPromise(e,p(this.currentRoute))},this.setRoute=e=>{if(e!==p(this.currentRoute)){d.debug(`Setting '${e}' route.`),this.currentRoute.set(e);let a=p(this.internalLocale);return this.loading.toPromise(a,e)}},this.loadConfig=async e=>{await this.configLoader(e)},this.getTranslationProps=async(e=this.locale.get(),a=p(this.currentRoute))=>{let l=p(this.config);if(!l||!e)return[];let i=this.translations.get(),{loaders:o,fallbackLocale:s="",cache:c=H}=l||{},n=Number.isNaN(+c)?H:+c;this.cachedAt?Date.now()>n+this.cachedAt&&(d.debug("Refreshing cache."),this.loadedKeys={},this.cachedAt=0):(d.debug("Setting cache timestamp."),this.cachedAt=Date.now());let[m,b]=y(e,s),O=i[m],T=i[b],$=(o||[]).map(f=>{var v=f,{locale:x}=v,h=j(v,["locale"]);return g(u({},h),{locale:y(x)[0]})}).filter(({routes:f})=>!f||(f||[]).some(pe(a))).filter(({key:f,locale:v})=>v===m&&(!O||!(this.loadedKeys[m]||[]).includes(f))||s&&v===b&&(!T||!(this.loadedKeys[b]||[]).includes(f)));if($.length){this.isLoading.set(!0),d.debug("Fetching translations...");let f=await de($);this.isLoading.set(!1);let v=Object.keys(f).reduce((h,k)=>g(u({},h),{[k]:Object.keys(f[k])}),{}),x=$.filter(({key:h,locale:k})=>(v[k]||[]).some(R=>`${R}`.startsWith(h))).reduce((h,{key:k,locale:R})=>g(u({},h),{[R]:[...h[R]||[],k]}),{});return[f,x]}return[]},this.addTranslations=(e,a)=>{if(!e)return;d.debug("Adding translations...");let l=Object.keys(e||{});this.privateTranslations.update(i=>l.reduce((o,s)=>g(u({},o),{[s]:u(u({},o[s]||{}),E(e[s]))}),i)),l.forEach(i=>{let o=Object.keys(e[i]).map(s=>`${s}`.split(".")[0]);a&&(o=a[i]),this.loadedKeys[i]=Array.from(new Set([...this.loadedKeys[i]||[],...o||[]]))})},this.loader=async([e,a])=>{let l=this.getLocale(e);d.debug(`Adding loader promise for '${l}' locale and '${a}' route.`);let i=(async()=>{let o=await this.getTranslationProps(l,a);o.length&&this.addTranslations(...o)})();this.promises.add({locale:l,route:a,promise:i}),i.then(()=>{l&&this.locale.get()!==l&&this.locale.forceSet(l)})},this.loadTranslations=(e,a=p(this.currentRoute)||"")=>{let l=this.getLocale(e);if(l)return this.setRoute(a),this.setLocale(l),this.loading.toPromise(l,a)},this.loaderTrigger.subscribe(this.loader),this.isLoading.subscribe(async e=>{e&&this.promises.size&&(await this.loading.toPromise(),this.promises.clear(),d.debug("Loader promises have been purged."))}),t&&this.loadConfig(t)}async configLoader(t){if(!t)return d.error("No config provided!");let e=t,{initLocale:a,fallbackLocale:l,translations:i,log:o}=e,s=j(e,["initLocale","fallbackLocale","translations","log"]);o&&ue(Q(o)),[a]=y(a),[l]=y(l),d.debug("Setting config."),this.config.set(u({initLocale:a,fallbackLocale:l,translations:i},s)),i&&this.addTranslations(i),await this.loadTranslations(a)}},U=Object.defineProperty,ge=Object.defineProperties,me=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,q=(r,t,e)=>t in r?U(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,w=(r,t)=>{for(var e in t||(t={}))X.call(t,e)&&q(r,e,t[e]);if(_)for(var e of _(t))Y.call(t,e)&&q(r,e,t[e]);return r},Z=(r,t)=>ge(r,me(t)),V=(r,t)=>{var e={};for(var a in r)X.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&_)for(var a of _(r))t.indexOf(a)<0&&Y.call(r,a)&&(e[a]=r[a]);return e},ve=(r,t)=>{for(var e in t)U(r,e,{get:t[e],enumerable:!0})},ee={};ve(ee,{ago:()=>Pe,date:()=>$e,eq:()=>N,gt:()=>ae,gte:()=>ke,lt:()=>te,lte:()=>be,ne:()=>ye,number:()=>Oe});var F=(r,t)=>{let{modifierDefaults:e}=t||{},{[r]:a}=e||{};return a||{}},N=({value:r,options:t=[],defaultValue:e=""})=>(t.find(({key:a})=>`${a}`.toLowerCase()===`${r}`.toLowerCase())||{}).value||e,ye=({value:r,options:t=[],defaultValue:e=""})=>(t.find(({key:a})=>`${a}`.toLowerCase()!==`${r}`.toLowerCase())||{}).value||e,te=({value:r,options:t=[],defaultValue:e=""})=>(t.sort((a,l)=>+a.key-+l.key).find(({key:a})=>+r<+a)||{}).value||e,ae=({value:r,options:t=[],defaultValue:e=""})=>(t.sort((a,l)=>+l.key-+a.key).find(({key:a})=>+r>+a)||{}).value||e,be=({value:r,options:t=[],defaultValue:e=""})=>N({value:r,options:t,defaultValue:te({value:r,options:t,defaultValue:e})}),ke=({value:r,options:t=[],defaultValue:e=""})=>N({value:r,options:t,defaultValue:ae({value:r,options:t,defaultValue:e})}),Oe=({value:r,props:t,defaultValue:e="",locale:a="",parserOptions:l})=>{if(!a)return"";let i=F("number",l),{maximumFractionDigits:o}=i,s=V(i,["maximumFractionDigits"]),c=(t==null?void 0:t.number)||{},{maximumFractionDigits:n=o||2}=c,m=V(c,["maximumFractionDigits"]);return new Intl.NumberFormat(a,w(Z(w({},s),{maximumFractionDigits:n}),m)).format(+r||+e)},$e=({value:r,props:t,defaultValue:e="",locale:a="",parserOptions:l})=>{if(!a)return"";let i=V(F("date",l),[]),o=V((t==null?void 0:t.date)||{},[]);return new Intl.DateTimeFormat(a,w(w({},i),o)).format(+r||+e)},I=[{key:"second",multiplier:1e3},{key:"minute",multiplier:60},{key:"hour",multiplier:60},{key:"day",multiplier:24},{key:"week",multiplier:7},{key:"month",multiplier:13/3},{key:"year",multiplier:12}],re=(r="",t="")=>new RegExp(`^${r}s?$`).test(t),we=r=>I.indexOf(I.find(({key:t})=>re(t,r))),Le=(r,t)=>I.reduce(([e,a],{key:l,multiplier:i},o)=>{if(re(a,t))return[e,a];if(!a||o===we(a)+1){let s=Math.round(e/i);if(!a||Math.abs(s)>=1||t!=="auto")return[s,l]}return[e,a]},[r,""]),Pe=({value:r,defaultValue:t="",locale:e="",props:a,parserOptions:l})=>{if(!e)return"";let i=F("ago",l),{format:o,numeric:s}=i,c=V(i,["format","numeric"]),n=(a==null?void 0:a.ago)||{},{format:m=o||"auto",numeric:b=s||"auto"}=n,O=V(n,["format","numeric"]),T=+r||+t,$=Le(T,m);return new Intl.RelativeTimeFormat(e,w(Z(w({},c),{numeric:b}),O)).format(...$)},je=r=>typeof r=="string"&&/{{(?:(?!{{|}}).)+}}/.test(r),C=r=>typeof r=="string"?r.replace(/\\(?=:|;|{|})/g,""):r,Ve=({value:r,props:t,payload:e,parserOptions:a,locale:l})=>`${r}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g,i=>{let o=C(`${i.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`),s=e==null?void 0:e[o],[,c=""]=i.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;\s}])*)(?=\s*(?:;|}}$))/i)||[];c=c||(e==null?void 0:e.default)||"";let[,n=""]=i.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i)||[];if(s===void 0&&n!=="ne")return c;let m=!!n,{customModifiers:b}=a||{},O=w(w({},ee),b||{});n=Object.keys(O).includes(n)?n:"eq";let T=O[n],$=(i.match(/[^\s:;{](?:[^;]|\\[;])+[^\s:;}]/gi)||[]).reduce((f,v,x)=>{if(x>0){let h=C(`${v.match(/(?:(?:\\:)|[^:])+/)}`.trim()),k=`${v.match(/(?:(?:\\:)|[^:])+$/)}`.trim();if(h&&h!=="default"&&k)return[...f,{key:h,value:k}]}return f},[]);return!m&&!$.length?s:T({value:s,options:$,props:t,defaultValue:c,locale:l,parserOptions:a})}),le=({value:r,props:t,payload:e,parserOptions:a,locale:l})=>{if(je(r)){let i=Ve({value:r,payload:e,props:t,parserOptions:a,locale:l});return le({value:i,payload:e,props:t,parserOptions:a,locale:l})}else return C(r)},Te=r=>({parse:(t,[e,a],l,i)=>(e!=null&&e.default&&t===void 0&&(t=`${e.default}`),t===void 0&&(t=`${i}`),le({value:t,payload:e,props:a,parserOptions:r,locale:l}))}),xe=Te,Re=Object.defineProperty,De=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,B=(r,t,e)=>t in r?Re(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,Se=(r,t)=>{for(var e in t||(t={}))ie.call(t,e)&&B(r,e,t[e]);if(S)for(var e of S(t))oe.call(t,e)&&B(r,e,t[e]);return r},Ae=(r,t)=>De(r,_e(t)),Ie=(r,t)=>{var e={};for(var a in r)ie.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&S)for(var a of S(r))t.indexOf(a)<0&&oe.call(r,a)&&(e[a]=r[a]);return e},W=r=>{var t=r,{parserOptions:e={}}=t,a=Ie(t,["parserOptions"]);return Ae(Se({},a),{parser:xe(e)})},Ce=class extends he{constructor(t){super(t&&W(t)),this.loadConfig=e=>super.configLoader(W(e))}},Ee=Ce;const Fe={loaders:[{locale:"en",key:"common",loader:async()=>(await K(()=>import("./common-ad6f6991.js"),[],import.meta.url)).default},{locale:"pt",key:"common",loader:async()=>(await K(()=>import("./common-e58e42b4.js"),[],import.meta.url)).default}]},He="en",{t:qe,locale:Be,locales:We,loading:Ge,loadTranslations:Je}=new Ee(Fe);export{Je as a,We as b,He as d,Be as l,qe as t};

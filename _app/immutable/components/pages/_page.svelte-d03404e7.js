import{S as A,i as B,s as D,k as d,q as C,a as T,l as g,m as k,r as M,h as r,c as w,n as G,L as F,b as f,J as S,M as I,N as J,u as K,K as q,O as R,P as U,G as V,Q as X}from"../../chunks/index-dce22767.js";import{b as Q,l as z,t as Y}from"../../chunks/translation-5a5e0575.js";function $(a,l,c){const n=a.slice();return n[4]=l[c],n[6]=c,n}function j(a){let l,c=a[4]+"",n;return{c(){l=d("option"),n=C(c),this.h()},l(i){l=g(i,"OPTION",{});var h=k(l);n=M(h,c),h.forEach(r),this.h()},h(){l.__value=a[4],l.value=l.__value,l.selected=a[4]===z.get()},m(i,h){f(i,l,h),S(l,n)},p:q,d(i){i&&r(l)}}}function Z(a){let l,c=a[1]("common.helloWorld")+"",n,i,h,u=a[1]("common.welcome")+"",p,b,m,E=a[1]("common.text",{link:"https://kit.svelte.dev"})+"",L,_,O,N,v=Q.get(),o=[];for(let e=0;e<v.length;e+=1)o[e]=j($(a,v,e));return{c(){l=d("h1"),n=C(c),i=T(),h=d("h2"),p=C(u),b=T(),m=d("p"),L=T(),_=d("select");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){l=g(e,"H1",{});var s=k(l);n=M(s,c),s.forEach(r),i=w(e),h=g(e,"H2",{});var t=k(h);p=M(t,u),t.forEach(r),b=w(e),m=g(e,"P",{});var H=k(m);H.forEach(r),L=w(e),_=g(e,"SELECT",{name:!0,id:!0});var W=k(_);for(let P=0;P<o.length;P+=1)o[P].l(W);W.forEach(r),this.h()},h(){G(_,"name","language"),G(_,"id","language"),a[0]===void 0&&F(()=>a[3].call(_))},m(e,s){f(e,l,s),S(l,n),f(e,i,s),f(e,h,s),S(h,p),f(e,b,s),f(e,m,s),m.innerHTML=E,f(e,L,s),f(e,_,s);for(let t=0;t<o.length;t+=1)o[t].m(_,null);I(_,a[0]),O||(N=[J(_,"change",a[3]),J(_,"change",a[2])],O=!0)},p(e,[s]){if(s&2&&c!==(c=e[1]("common.helloWorld")+"")&&K(n,c),s&2&&u!==(u=e[1]("common.welcome")+"")&&K(p,u),s&2&&E!==(E=e[1]("common.text",{link:"https://kit.svelte.dev"})+"")&&(m.innerHTML=E),s&0){v=Q.get();let t;for(t=0;t<v.length;t+=1){const H=$(e,v,t);o[t]?o[t].p(H,s):(o[t]=j(H),o[t].c(),o[t].m(_,null))}for(;t<o.length;t+=1)o[t].d(1);o.length=v.length}s&1&&I(_,e[0])},i:q,o:q,d(e){e&&r(l),e&&r(i),e&&r(h),e&&r(b),e&&r(m),e&&r(L),e&&r(_),R(o,e),O=!1,U(N)}}}function y(a,l,c){let n;V(a,Y,p=>c(1,n=p));let i;console.log();const h=async()=>{z.set(i)};function u(){i=X(this),c(0,i)}return[i,n,h,u]}class le extends A{constructor(l){super(),B(this,l,y,Z,D,{})}}export{le as default};
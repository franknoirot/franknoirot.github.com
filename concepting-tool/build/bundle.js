var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.data!==e&&(t.data=e)}let p;function g(t){p=t}function y(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const $=[],b=[],v=[],w=[],x=Promise.resolve();let z=!1;function _(t){v.push(t)}function A(){const t=new Set;do{for(;$.length;){const t=$.shift();g(t),T(t.$$)}for(;b.length;)b.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];t.has(n)||(n(),t.add(n))}v.length=0}while($.length);for(;w.length;)w.pop()();z=!1}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const C=new Set;function S(t,e){-1===t.$$.dirty[0]&&($.push(t),z||(z=!0,x.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(l,c,s,a,i,u,f=[-1]){const d=p;g(l);const h=c.props||{},m=l.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:f};let y=!1;var $,b;m.ctx=s?s(l,h,(t,e,...n)=>{const o=n.length?n[0]:e;return m.ctx&&i(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),y&&S(l,t)),e}):[],m.update(),y=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),c.target&&(c.hydrate?m.fragment&&m.fragment.l(function(t){return Array.from(t.childNodes)}(c.target)):m.fragment&&m.fragment.c(),c.intro&&(($=l.$$.fragment)&&$.i&&(C.delete($),$.i(b))),function(t,n,l){const{fragment:c,on_mount:s,on_destroy:a,after_update:i}=t.$$;c&&c.m(n,l),_(()=>{const n=s.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(_)}(l,c.target,c.anchor),A()),g(d)}function E(t,e,n){const o=t.slice();return o[4]=e[n],o[6]=n,o}function L(t,e,n){const o=t.slice();return o[7]=e[n],o[6]=n,o}function V(e){let n,o,r,l,i,m,p,g=e[7][0]+"",y=e[7][1]+"";return{c(){n=u("tr"),o=u("td"),r=f(g),l=d(),i=u("td"),m=f(y),p=d(),h(o,"class","svelte-f4a0iz"),h(i,"class","svelte-f4a0iz")},m(t,e){s(t,n,e),c(n,o),c(o,r),c(n,l),c(n,i),c(i,m),c(n,p)},p:t,d(t){t&&a(n)}}}function W(t){let e,n,o,r,l=t[1],f=[];for(let e=0;e<l.length;e+=1)f[e]=M(E(t,l,e));return{c(){e=u("table"),n=u("tbody"),o=u("tr"),o.innerHTML='<th class="svelte-f4a0iz">Variable</th><th class="svelte-f4a0iz">Value</th>',r=d();for(let t=0;t<f.length;t+=1)f[t].c();h(e,"class","svelte-f4a0iz")},m(t,l){s(t,e,l),c(e,n),c(n,o),c(n,r);for(let t=0;t<f.length;t+=1)f[t].m(n,null)},p(t,e){if(2&e){let o;for(l=t[1],o=0;o<l.length;o+=1){const r=E(t,l,o);f[o]?f[o].p(r,e):(f[o]=M(r),f[o].c(),f[o].m(n,null))}for(;o<f.length;o+=1)f[o].d(1);f.length=l.length}},d(t){t&&a(e),i(f,t)}}}function M(t){let e,n,o,r,l,i,p,g=t[4][0]+"",y=t[4][1]+"";return{c(){e=u("tr"),n=u("td"),o=f(g),r=d(),l=u("td"),i=f(y),p=d(),h(n,"class","svelte-f4a0iz"),h(l,"class","svelte-f4a0iz")},m(t,a){s(t,e,a),c(e,n),c(n,o),c(e,r),c(e,l),c(l,i),c(e,p)},p(t,e){2&e&&g!==(g=t[4][0]+"")&&m(o,g),2&e&&y!==(y=t[4][1]+"")&&m(i,y)},d(t){t&&a(e)}}}function k(e){let n,o,r,l,f,m,p,g,y,$,b,v,w,x,z,_=D.find(H),A=D,T=[];for(let t=0;t<A.length;t+=1)T[t]=V(L(e,A,t));let C=e[1]instanceof Array&&W(e),S=_&&function(e){let n;return{c(){n=u("iframe"),n.innerHTML="<p>Sorry, your iframe isn&#39;t loading!</p>",h(n,"title","page-preview"),h(n,"width","80%"),h(n,"height","600"),n.allowFullscreen=!0},m(t,o){s(t,n,o),e[3](n)},p:t,d(t){t&&a(n),e[3](null)}}}(e);return{c(){n=u("main"),o=u("h1"),o.textContent="Query Param Test",r=d(),l=u("section"),f=u("h2"),f.textContent="URL params",m=d(),p=u("table"),g=u("tbody"),y=u("tr"),y.innerHTML='<th class="svelte-f4a0iz">Key</th><th class="svelte-f4a0iz">Value</th>',$=d();for(let t=0;t<T.length;t+=1)T[t].c();b=d(),v=u("section"),w=u("h2"),w.textContent="Theme Controls Available on This Page",x=d(),C&&C.c(),z=d(),S&&S.c(),h(o,"class","svelte-f4a0iz"),h(p,"class","svelte-f4a0iz"),h(l,"class","svelte-f4a0iz"),h(v,"class","svelte-f4a0iz"),h(n,"style",e[2]),h(n,"class","svelte-f4a0iz")},m(t,e){s(t,n,e),c(n,o),c(n,r),c(n,l),c(l,f),c(l,m),c(l,p),c(p,g),c(g,y),c(g,$);for(let t=0;t<T.length;t+=1)T[t].m(g,null);c(n,b),c(n,v),c(v,w),c(v,x),C&&C.m(v,null),c(n,z),S&&S.m(n,null)},p(t,[e]){if(0&e){let n;for(A=D,n=0;n<A.length;n+=1){const o=L(t,A,n);T[n]?T[n].p(o,e):(T[n]=V(o),T[n].c(),T[n].m(g,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=A.length}t[1]instanceof Array?C?C.p(t,e):(C=W(t),C.c(),C.m(v,null)):C&&(C.d(1),C=null),_&&S.p(t,e),4&e&&h(n,"style",t[2])},i:t,o:t,d(t){t&&a(n),i(T,t),C&&C.d(),S&&S.d()}}}const D=Array.from(new URL(document.location).searchParams.entries()),H=t=>"url"===t[0];function N(t,e,n){let o,r,l="";return D.forEach(t=>{"--"===t[0].substr(0,2)&&n(2,l+=`${t[0]}: #${t[1]}; `)}),y(async()=>{n(0,o.src=D.find(t=>"url"===t[0])?`${window.location.origin}/pages/${D.find(t=>"url"===t[0])[1]}`:"",o);await(t=o,new Promise((e,n)=>{t.onload=()=>e(!0),t.onerror=n})).catch(t=>console.error(t));var t;n(1,r=function(t){const e=Array.from(t.contentDocument.styleSheets).filter(e=>null===e.href||e.href.startsWith(t.contentWindow.origin)).reduce((e,n)=>[...e,...Array.from(n.cssRules).reduce((e,n)=>"body"===n.selectorText||":root"===n.selectorText||"*"===n.selectorText?[...e,...Array.from(n.style).filter(t=>t.startsWith("--")).map(e=>[e,"body"===n.selectorText?t.contentWindow.getComputedStyle(t.contentDocument.body).getPropertyValue(e):t.contentWindow.getComputedStyle(t.contentDocument).getPropertyValue(e)])]:e,[])],[]);return console.log("previewStyles = ",e),e}(o)),console.log("previewStyles = ",r)}),[o,r,l,function(t){b[t?"unshift":"push"](()=>{n(0,o=t)})}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),P(this,t,N,k,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
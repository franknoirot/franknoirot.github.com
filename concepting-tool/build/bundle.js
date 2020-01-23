var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}let p;function y(t){p=t}function g(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const w=[],$=[],b=[],v=[],x=Promise.resolve();let S=!1;function _(){S||(S=!0,x.then(E))}function T(t){b.push(t)}function E(){const t=new Set;do{for(;w.length;){const t=w.shift();y(t),M(t.$$)}for(;$.length;)$.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];t.has(n)||(n(),t.add(n))}b.length=0}while(w.length);for(;v.length;)v.pop()();S=!1}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const L=new Set;function k(t,e){t&&t.i&&(L.delete(t),t.i(e))}function z(t,e){t.d(1),e.delete(t.key)}function A(l,c,i,u,s,a,f=[-1]){const d=p;y(l);const m=c.props||{},h=l.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:f};let g=!1;h.ctx=i?i(l,m,(t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),g&&function(t,e){-1===t.$$.dirty[0]&&(w.push(t),_(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(l,t)),e}):[],h.update(),g=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),c.target&&(c.hydrate?h.fragment&&h.fragment.l(function(t){return Array.from(t.childNodes)}(c.target)):h.fragment&&h.fragment.c(),c.intro&&k(l.$$.fragment),function(t,n,l){const{fragment:c,on_mount:i,on_destroy:u,after_update:s}=t.$$;c&&c.m(n,l),T(()=>{const n=i.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]}),s.forEach(T)}(l,c.target,c.anchor),E()),y(d)}function D(t,e,n){const o=t.slice();return o[10]=e[n],o[12]=n,o}function j(t,e,n){const o=t.slice();return o[13]=e[n],o[15]=n,o}function C(e){let n,o,r,l,d,h,p,y=e[13][0]+"",g=e[13][1]+"";return{c(){n=s("tr"),o=s("td"),r=a(y),l=f(),d=s("td"),h=a(g),p=f(),m(o,"class","svelte-f4a0iz"),m(d,"class","svelte-f4a0iz")},m(t,e){i(t,n,e),c(n,o),c(o,r),c(n,l),c(n,d),c(d,h),c(n,p)},p:t,d(t){t&&u(n)}}}function H(t){let e,n=[],o=new Map,r=t[2];const l=t=>"style-control_"+t[12];for(let e=0;e<r.length;e+=1){let c=D(t,r,e),i=l(c);o.set(i,n[e]=P(i,c))}return{c(){e=s("section");for(let t=0;t<n.length;t+=1)n[t].c();m(e,"class","svelte-f4a0iz")},m(t,o){i(t,e,o);for(let t=0;t<n.length;t+=1)n[t].m(e,null)},p(t,r){const c=t[2];n=function(t,e,n,o,r,l,c,i,u,s,a,f){let d=t.length,m=l.length,h=d;const p={};for(;h--;)p[t[h].key]=h;const y=[],g=new Map,w=new Map;for(h=m;h--;){const t=f(r,l,h),i=n(t);let u=c.get(i);u?o&&u.p(t,e):(u=s(i,t),u.c()),g.set(i,y[h]=u),i in p&&w.set(i,Math.abs(h-p[i]))}const $=new Set,b=new Set;function v(t){k(t,1),t.m(i,a),c.set(t.key,t),a=t.first,m--}for(;d&&m;){const e=y[m-1],n=t[d-1],o=e.key,r=n.key;e===n?(a=e.first,d--,m--):g.has(r)?!c.has(o)||$.has(o)?v(e):b.has(r)?d--:w.get(o)>w.get(r)?(b.add(o),v(e)):($.add(r),d--):(u(n,c),d--)}for(;d--;){const e=t[d];g.has(e.key)||u(e,c)}for(;m;)v(y[m-1]);return y}(n,r,l,1,t,c,o,e,z,P,null,D)},d(t){t&&u(e);for(let t=0;t<n.length;t+=1)n[t].d()}}}function P(t,e){let n,o,r,l,p,y,g,w,$=e[10][0]+"",b=e[10][1]+"";function v(...t){return e[8](e[12],...t)}return{key:t,first:null,c(){n=s("label"),o=a($),r=f(),l=s("input"),p=f(),y=a(b),g=f(),m(l,"type","color"),this.first=n},m(t,e){i(t,n,e),c(n,o),c(n,r),c(n,l),c(n,p),c(n,y),c(n,g),w=d(l,"change",v)},p(t,n){e=t,4&n&&$!==($=e[10][0]+"")&&h(o,$),4&n&&b!==(b=e[10][1]+"")&&h(y,b)},d(t){t&&u(n),w()}}}function W(e){let n,o;return{c(){n=s("form"),n.innerHTML='<label>Enter a filename from within the local <code>/static/pages/</code> directory.\n\t\t\t<input type="text" name="url" required=""></label> \n\t\t<button type="submit">Submit</button>',m(n,"action",""),m(n,"method","post")},m(t,r){i(t,n,r),o=d(n,"submit",e[4])},p:t,d(t){t&&u(n),o()}}}function q(e){let n;return{c(){n=s("iframe"),n.innerHTML="<p>Sorry, your iframe isn&#39;t loading!</p>",m(n,"title","page-preview"),m(n,"width","80%"),m(n,"height","600"),n.allowFullscreen=!0},m(t,o){i(t,n,o),e[9](n)},p:t,d(t){t&&u(n),e[9](null)}}}function R(e){let n,o,r,l,a,d,h,p,y,g,w,$,b=O,v=[];for(let t=0;t<b.length;t+=1)v[t]=C(j(e,b,t));let x=e[2]instanceof Array&&H(e);function S(t,e){return t[0]?q:W}let _=S(e),T=_(e);return{c(){n=s("main"),o=s("h1"),o.textContent="Query Param Test",r=f(),l=s("section"),a=s("h2"),a.textContent="URL params",d=f(),h=s("table"),p=s("tbody"),y=s("tr"),y.innerHTML='<th class="svelte-f4a0iz">Key</th><th class="svelte-f4a0iz">Value</th>',g=f();for(let t=0;t<v.length;t+=1)v[t].c();w=f(),x&&x.c(),$=f(),T.c(),m(o,"class","svelte-f4a0iz"),m(h,"class","svelte-f4a0iz"),m(l,"class","svelte-f4a0iz"),m(n,"class","svelte-f4a0iz")},m(t,e){i(t,n,e),c(n,o),c(n,r),c(n,l),c(l,a),c(l,d),c(l,h),c(h,p),c(p,y),c(p,g);for(let t=0;t<v.length;t+=1)v[t].m(p,null);c(n,w),x&&x.m(n,null),c(n,$),T.m(n,null)},p(t,[e]){if(0&e){let n;for(b=O,n=0;n<b.length;n+=1){const o=j(t,b,n);v[n]?v[n].p(o,e):(v[n]=C(o),v[n].c(),v[n].m(p,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=b.length}t[2]instanceof Array?x?x.p(t,e):(x=H(t),x.c(),x.m(n,$)):x&&(x.d(1),x=null),_===(_=S(t))&&T?T.p(t,e):(T.d(1),T=_(t),T&&(T.c(),T.m(n,null)))},i:t,o:t,d(t){t&&u(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(v,t),x&&x.d(),T.d()}}}let O=Array.from(new URL(document.location).searchParams.entries());function U(t,e,n){let o,r,l=O.find(t=>"url"===t[0]),c="";async function i(){if(console.log("queryStyles = ",s),!O.find(t=>"url"===t[0]))return;n(1,o.src=O.find(t=>"url"===t[0])?`./pages/${O.find(t=>"url"===t[0])[1]}`:"",o);await(t=o,new Promise((e,n)=>{t.onload=()=>e(!0),t.onerror=n})).catch(t=>console.error(t));var t;n(2,r=function(t){const e=Array.from(t.contentDocument.styleSheets).filter(e=>null===e.href||e.href.startsWith(t.contentWindow.origin)).reduce((e,n)=>[...e,...Array.from(n.cssRules).reduce((e,n)=>"body"===n.selectorText||":root"===n.selectorText||"*"===n.selectorText?[...e,...Array.from(n.style).filter(t=>t.startsWith("--")).map(e=>[e,"body"===n.selectorText?t.contentWindow.getComputedStyle(t.contentDocument.body).getPropertyValue(e):t.contentWindow.getComputedStyle(t.contentDocument).getPropertyValue(e)])]:e,[])],[]);return console.log("previewStyles = ",e),e}(o).map(t=>(s.find(e=>e[0]===t[0])&&(t[1]=s.find(e=>e[0]===t[0])[1]),t))),console.log("previewStyles = ",r)}function u(t,e){console.log("e & index = ",t,e);const o=r;if(n(2,r[e][1]=t.target.value,r),n(2,r=o),c){const t=window.location.href.slice(0,window.location.href.indexOf("?")>=0?window.location.href.indexOf("?"):window.location.href.length)+c;window.history.replaceState(null,"",t)}}g(i);let s;return t.$$.update=()=>{if(36&t.$$.dirty&&O&&r&&(n(5,c="?"+`${O.find(t=>"url"===t[0])?"url="+O.find(t=>"url"===t[0])[1]:""}${r?"&"+r.map(t=>encodeURIComponent(t[0])+"="+encodeURIComponent(t[1])).join("&"):""}`),console.log("queryString = ",c)),6&t.$$.dirty&&o&&o.contentDocument&&r){console.log("document =",o.contentDocument.documentElement.innerHTML);const t=o.contentDocument.documentElement.innerHTML.includes('style id="injected"');n(1,o.contentDocument.documentElement.innerHTML=t?o.contentDocument.documentElement.innerHTML.replace(/<style id="injected">(.|\t|\r|\n)*<\/head>/,`<style id='injected'>\n\t\t\tbody { ${r.map(t=>t[0]+": "+t[1]).join("; ")} }\n\t\t</style>\n\t\t</head>`):o.contentDocument.documentElement.innerHTML.replace("</head>",`<style id='injected'>\n\t\t\tbody { ${r.map(t=>t[0]+": "+t[1]).join("; ")} }\n\t\t</style>\n\t\t</head>`),o)}},s=O.filter(t=>t[0].startsWith("--")),[l,o,r,u,async function(t){t.preventDefault();const e=t.target.querySelector("input"),o=e.value;let r=await fetch("./pages/"+o);if(r=404!==r.status,console.log("localPageFound = ",r),!r)return void(e.value="");const c=[...O];c.push(["url",o]),O=c,console.log("currQueryParams = ",O),n(0,l=!0),await(_(),x),window.history.replaceState(null,"",window.location.href+"?url="+o),i()},c,s,i,(t,e)=>u(e,t),function(t){$[t?"unshift":"push"](()=>{n(1,o=t)})}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),A(this,t,U,R,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map

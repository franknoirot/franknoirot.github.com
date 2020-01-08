var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function l(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t,n){e.$$.on_destroy.push(function(e,t){const n=e.subscribe(t);return n.unsubscribe?()=>n.unsubscribe():n}(t,n))}function i(e){return null==e?"":e}function c(e,t,n=t){return e.set(n),t}function u(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function v(){return f(" ")}function p(){return f("")}function g(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.data!==t&&(e.data=t)}function $(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}let k;function y(e){k=e}function q(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(e=>e(t))}const x=[],w=[],M=[],_=[],z=Promise.resolve();let S=!1;function C(e){M.push(e)}function I(e){_.push(e)}function j(){const e=new Set;do{for(;x.length;){const e=x.shift();y(e),N(e.$$)}for(;w.length;)w.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];e.has(n)||(n(),e.add(n))}M.length=0}while(x.length);for(;_.length;)_.pop()();S=!1}function N(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const P=new Set;let A;function T(){A={r:0,c:[],p:A}}function L(){A.r||s(A.c),A=A.p}function H(e,t){e&&e.i&&(P.delete(e),e.i(t))}function O(e,t,n,s){if(e&&e.o){if(P.has(e))return;P.add(e),A.c.push(()=>{P.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function D(e,t){e.d(1),t.delete(e.key)}function E(e,t){O(e,1,1,()=>{t.delete(e.key)})}function B(e,t,n,s,l,r,o,i,c,u,a,d){let h=e.length,f=r.length,v=h;const p={};for(;v--;)p[e[v].key]=v;const g=[],m=new Map,b=new Map;for(v=f;v--;){const e=d(l,r,v),i=n(e);let c=o.get(i);c?s&&c.p(e,t):(c=u(i,e),c.c()),m.set(i,g[v]=c),i in p&&b.set(i,Math.abs(v-p[i]))}const $=new Set,k=new Set;function y(e){H(e,1),e.m(i,a),o.set(e.key,e),a=e.first,f--}for(;h&&f;){const t=g[f-1],n=e[h-1],s=t.key,l=n.key;t===n?(a=t.first,h--,f--):m.has(l)?!o.has(s)||$.has(s)?y(t):k.has(l)?h--:b.get(s)>b.get(l)?(k.add(s),y(t)):($.add(l),h--):(c(n,o),h--)}for(;h--;){const t=e[h];m.has(t.key)||c(t,o)}for(;f;)y(g[f-1]);return g}function F(e,t,n){const s=e.$$.props[t];void 0!==s&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function R(e){e&&e.c()}function G(e,n,r){const{fragment:o,on_mount:i,on_destroy:c,after_update:u}=e.$$;o&&o.m(n,r),C(()=>{const n=i.map(t).filter(l);c?c.push(...n):s(n),e.$$.on_mount=[]}),u.forEach(C)}function Q(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){-1===e.$$.dirty[0]&&(x.push(e),S||(S=!0,z.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function V(t,l,r,o,i,c,u=[-1]){const a=k;y(t);const d=l.props||{},h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:u};let f=!1;h.ctx=r?r(t,d,(e,n,s=n)=>(h.ctx&&i(h.ctx[e],h.ctx[e]=s)&&(h.bound[e]&&h.bound[e](s),f&&W(t,e)),n)):[],h.update(),f=!0,s(h.before_update),h.fragment=!!o&&o(h.ctx),l.target&&(l.hydrate?h.fragment&&h.fragment.l(function(e){return Array.from(e.childNodes)}(l.target)):h.fragment&&h.fragment.c(),l.intro&&H(t.$$.fragment),G(t,l.target,l.anchor),j()),y(a)}class Y{$destroy(){Q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function J(e,t,n){const s=e.slice();return s[6]=t[n],s[8]=n,s}function K(e){let t,n,s=[],l=new Map,r=e[1];const o=e=>e[1][e[8]];for(let t=0;t<r.length;t+=1){let n=J(e,r,t),i=o(n);l.set(i,s[t]=X(i,n))}let i=e[2]&&Z(e);return{c(){t=h("div");for(let e=0;e<s.length;e+=1)s[e].c();n=v(),i&&i.c(),m(t,"class","svelte-1tooyb2")},m(e,l){a(e,t,l);for(let e=0;e<s.length;e+=1)s[e].m(t,null);u(t,n),i&&i.m(t,null)},p(e,r){const c=e[1];s=B(s,r,o,1,e,c,l,t,D,X,n,J),e[2]?i?i.p(e,r):(i=Z(e),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},d(e){e&&d(t);for(let e=0;e<s.length;e+=1)s[e].d();i&&i.d()}}}function U(e){let t,n,s,l,r,o,i,c,p,$,k=e[1][e[8]]+"";function y(...t){return e[4](e[8],...t)}return{c(){t=h("div"),n=h("input"),o=v(),i=h("label"),c=f(k),m(n,"type","radio"),m(n,"name",e[3]),m(n,"id",s=e[3]+"_option-"+e[8]),n.value=l=e[1][e[8]],n.checked=r=e[8]===e[0],m(n,"class","svelte-1tooyb2"),m(i,"for",p=e[3]+"_option-"+e[8]),m(i,"class","svelte-1tooyb2"),m(t,"class","wrapper svelte-1tooyb2"),$=g(n,"input",y)},m(e,s){a(e,t,s),u(t,n),u(t,o),u(t,i),u(i,c)},p(t,o){e=t,2&o&&s!==(s=e[3]+"_option-"+e[8])&&m(n,"id",s),2&o&&l!==(l=e[1][e[8]])&&(n.value=l),3&o&&r!==(r=e[8]===e[0])&&(n.checked=r),2&o&&k!==(k=e[1][e[8]]+"")&&b(c,k),2&o&&p!==(p=e[3]+"_option-"+e[8])&&m(i,"for",p)},d(e){e&&d(t),$()}}}function X(e,t){let n,s,l=(!t[2]||t[8]<t[1].length-1)&&U(t);return{key:e,first:null,c(){n=p(),l&&l.c(),s=p(),this.first=n},m(e,t){a(e,n,t),l&&l.m(e,t),a(e,s,t)},p(e,t){!e[2]||e[8]<e[1].length-1?l?l.p(e,t):(l=U(e),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},d(e){e&&d(n),l&&l.d(e),e&&d(s)}}}function Z(e){let t,n,s,l,r,o,i,c,p,b;return{c(){t=h("div"),n=h("input"),r=v(),o=h("label"),i=f("Other\n            "),c=h("input"),m(n,"type","radio"),m(n,"name",e[3]),m(n,"id",s=e[3]+"_option-"+(e[1].length-1)),n.checked=l=e[1].length-1===e[0],m(n,"class","svelte-1tooyb2"),m(c,"type","text"),m(c,"placeholder","Description"),m(c,"class","svelte-1tooyb2"),m(o,"for",p=e[3]+"_option-"+(e[1].length-1)),m(o,"class","svelte-1tooyb2"),m(t,"class","svelte-1tooyb2"),b=g(n,"input",e[5])},m(e,s){a(e,t,s),u(t,n),u(t,r),u(t,o),u(o,i),u(o,c)},p(e,t){2&t&&s!==(s=e[3]+"_option-"+(e[1].length-1))&&m(n,"id",s),3&t&&l!==(l=e[1].length-1===e[0])&&(n.checked=l),2&t&&p!==(p=e[3]+"_option-"+(e[1].length-1))&&m(o,"for",p)},d(e){e&&d(t),b()}}}function ee(t){let n,s=t[1].length>0&&K(t);return{c(){s&&s.c(),n=p()},m(e,t){s&&s.m(e,t),a(e,n,t)},p(e,[t]){e[1].length>0?s?s.p(e,t):(s=K(e),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:e,o:e,d(e){s&&s.d(e),e&&d(n)}}}function te(e,t,n){let{answers:s=["First Answer","Second Answer","Third Answer","Fourth Answer"]}=t;const l="group-"+Math.random()*Math.random()*113;let{selected:r=1}=t,{other:o=!1}=t;return e.$set=e=>{"answers"in e&&n(1,s=e.answers),"selected"in e&&n(0,r=e.selected),"other"in e&&n(2,o=e.other)},[r,s,o,l,e=>n(0,r=e),()=>n(0,r=s.length-1)]}class ne extends Y{constructor(e){super(),V(this,e,te,ee,r,{answers:1,selected:0,other:2})}}function se(e,t,n){const s=e.slice();return s[6]=t[n],s[8]=n,s}function le(e,t){let n,s,l=t[6]+"";return{key:e,first:null,c(){n=h("span"),s=f(l),m(n,"class","svelte-1c954p1"),this.first=n},m(e,t){a(e,n,t),u(n,s)},p(e,t){1&t&&l!==(l=e[6]+"")&&b(s,l)},d(e){e&&d(n)}}}function re(t){let n,s,l,r,o,i,c,f,p,b=[],k=new Map,y=t[0];const q=e=>e[8];for(let e=0;e<y.length;e+=1){let n=se(t,y,e),s=q(n);k.set(s,b[e]=le(s,n))}return{c(){n=h("div"),s=h("input"),r=v(),o=h("div"),i=v(),c=h("label");for(let e=0;e<b.length;e+=1)b[e].c();m(s,"type","range"),m(s,"min",oe),m(s,"max",t[3]),s.value=t[2],m(s,"step","1"),m(s,"name",l="slider_"+t[1]),m(s,"class","svelte-1c954p1"),m(o,"class","styled_input svelte-1c954p1"),m(c,"for",f="slider_"+t[1]),m(c,"class","svelte-1c954p1"),m(n,"class","wrapper svelte-1c954p1"),$(n,"--pct",t[4]),p=g(s,"input",t[5])},m(e,t){a(e,n,t),u(n,s),u(n,r),u(n,o),u(n,i),u(n,c);for(let e=0;e<b.length;e+=1)b[e].m(c,null)},p(e,[t]){8&t&&m(s,"max",e[3]),4&t&&(s.value=e[2]),2&t&&l!==(l="slider_"+e[1])&&m(s,"name",l);const r=e[0];b=B(b,t,q,1,e,r,k,c,D,le,null,se),2&t&&f!==(f="slider_"+e[1])&&m(c,"for",f),16&t&&$(n,"--pct",e[4])},i:e,o:e,d(e){e&&d(n);for(let e=0;e<b.length;e+=1)b[e].d();p()}}}let oe=0;function ie(e,t,n){let s,l,{values:r=[1,2,3,4,5]}=t,{name:o="default"}=t,{value:i=r[oe]}=t;return e.$set=e=>{"values"in e&&n(0,r=e.values),"name"in e&&n(1,o=e.name),"value"in e&&n(2,i=e.value)},e.$$.update=()=>{1&e.$$.dirty&&n(3,s=r.length-1),5&e.$$.dirty&&n(4,l=i/(r.length-1)*100+"%")},[r,o,i,s,l,function(t){q(e,t)}]}class ce extends Y{constructor(e){super(),V(this,e,ie,re,r,{values:0,name:1,value:2})}}function ue(t){let n,s,l,r,o;return{c(){n=h("label"),s=h("input"),l=v(),r=h("div"),r.innerHTML='<svg viewBox="0 0 10 10" class="svelte-1hgk42s"><path class="tick-1 svelte-1hgk42s" stroke="white" d="M 3 3, l 4 4"></path><path class="tick-2 svelte-1hgk42s" stroke="white" d="M 3 7, l 4 -4"></path></svg>',m(s,"type","checkbox"),s.checked=t[0],m(s,"class","svelte-1hgk42s"),m(r,"class","svelte-1hgk42s"),m(n,"class","checkbox-rolling svelte-1hgk42s"),o=g(s,"input",t[1])},m(e,t){a(e,n,t),u(n,s),u(n,l),u(n,r)},p(e,[t]){1&t&&(s.checked=e[0])},i:e,o:e,d(e){e&&d(n),o()}}}function ae(e,t,n){let{checked:s=!0}=t;return e.$set=e=>{"checked"in e&&n(0,s=e.checked)},[s,function(t){q(e,t)}]}class de extends Y{constructor(e){super(),V(this,e,ae,ue,r,{checked:0})}}const he=[];function fe(t,n=e){let s;const l=[];function o(e){if(r(t,e)&&(t=e,s)){const e=!he.length;for(let e=0;e<l.length;e+=1){const n=l[e];n[1](),he.push(n,t)}if(e){for(let e=0;e<he.length;e+=2)he[e][0](he[e+1]);he.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(r,i=e){const c=[r,i];return l.push(c),1===l.length&&(s=n(o)||e),r(t),()=>{const e=l.indexOf(c);-1!==e&&l.splice(e,1),0===l.length&&(s(),s=null)}}}}const ve=fe("intro"),pe=fe(0),ge=fe(1),me=fe(3),be=fe(0),$e=fe([{question:(e,t)=>`${e} ${t[0]} disobedient.`,verbs:["be"],checked:!1,level:0,levelMax:2,markers:[{disorder:"bipolar",weight:.4},{disorder:"borderline",weight:.6},{disorder:"depression",weight:.3},{disorder:"anxiety",weight:.4}],subquestions:[{question:(e,t)=>`${t[0]} uncooperative, stubborn, or doesn't follow rules.`,verbs:["be"],checked:!1,level:0,levelMax:2},{question:(e,t)=>"Can't wait as long or patiently as other people.",verbs:[],checked:!1,level:0,levelMax:2},{question:(e,t)=>`${t[0]} a lot more than other people.`,verbs:["argue"],checked:!1,level:0,levelMax:2},{question:(e,t)=>`${t[0]} more temper tantrums than other people.`,verbs:["have"],checked:!1,level:0,levelMax:2}]},{question:(e,t)=>`${e} often ${t[0]} rules or ${t[1]} in trouble`,verbs:["break","get"],checked:!1,level:0,levelMax:2,markers:[{disorder:"bipolar",weight:.5},{disorder:"borderline",weight:.1},{disorder:"depression",weight:.4},{disorder:"anxiety",weight:.4}],subquestions:[]},{question:(e,t)=>`${e} ${t[0]} things that are risky or dangerous`,verbs:["do"],checked:!1,level:0,levelMax:2,markers:[],subquestions:[]},{question:(e,t)=>`${e} ${t[0]} impulsive or hyperactive`,verbs:["be"],checked:!1,level:0,levelMax:2,markers:[{disorder:"bipolar",weight:.7},{disorder:"borderline",weight:.6},{disorder:"depression",weight:.1},{disorder:"anxiety",weight:.2}],subquestions:[{question:(e,t)=>"Blurt out words or interrupts more than other people.",verbs:[],checked:!1,level:0,levelMax:2},{question:(e,t)=>"Is hyperactive, can't sit still, or can't wait for their turn.",verbs:[],checked:!1,level:0,levelMax:2},{question:(e,t)=>"Acts without thinking more often than others.",verbs:[],checked:!1,level:0,levelMax:2}]},{question:(e,t)=>`${e} ${t[0]} trouble paying attention`,verbs:["have"],checked:!1,level:0,levelMax:2,markers:[{disorder:"bipolar",weight:.3},{disorder:"borderline",weight:.3},{disorder:"depression",weight:.4},{disorder:"anxiety",weight:.5}],subquestions:[]},{question:(e,t)=>`${e} ${t[0]} repetitive, rigid, or strange behaviors`,verbs:["have"],checked:!1,level:0,levelMax:2,markers:[{disorder:"bipolar",weight:.6},{disorder:"borderline",weight:.1},{disorder:"depression",weight:.2},{disorder:"anxiety",weight:.6}],subquestions:[{question:(e,t)=>"Has habits or rituals they need to repeat over and over",verbs:[],checked:!1,level:0,levelMax:2},{question:(e,t)=>"Fixates on specific topics or has unusually intense interests.",verbs:[],checked:!1,level:0,levelMax:2},{question:(e,t)=>"Rocks they head or body, flaps arms or legs.",verbs:[],checked:!1,level:0,levelMax:2},{question:(e,t)=>"Has trouble discarding or parting with their things.",verbs:[],checked:!1,level:0,levelMax:2},{question:(e,t)=>"Has motor tics (e.g. eye blinking, shoulder shrugging) or vocal tics (e.g. throat clearing).",verbs:[],checked:!1,level:0,levelMax:2}]},{question:(e,t)=>`${e} ${t[0]} having problems in school`,verbs:["be"],checked:!1,level:0,levelMax:2,markers:[],subquestions:[]},{question:(e,t)=>`${e} ${t[0]} moody or sad`,verbs:["be"],checked:!1,level:0,levelMax:2,markers:[],subquestions:[]},{question:(e,t)=>`${e} ${t[0]} unrealistic thoughts, fears, or worries`,verbs:["have"],checked:!1,level:0,levelMax:2,markers:[],subquestions:[]}]),ke={be:{firstSingular:"am",firstPlural:"are",second:"are",third:"is"},have:{firstSingular:"have",firstPlural:"have",second:"have",third:"has"},do:{firstSingular:"do",firstPlural:"do",second:"do",third:"does"},break:{firstSingular:"break",firstPlural:"break",second:"break",third:"breaks"},get:{firstSingular:"get",firstPlural:"get",second:"get",third:"get"},argue:{firstSingular:"argue",firstPlural:"argue",second:"argue",third:"argue"}},ye=["intro","behaviors","results"],qe=[{value:"Myself",default:"I",possessive:"My",identifies:"I identify",verb:"firstSingular"},{value:"My loved one",default:"My loved one",possessive:"My loved one's",identifies:"My loved one identifies",verb:"third"},{value:"My friend",default:"My friend",possessive:"My friend's",identifies:"My friend identifies",verb:"third"},{value:"My student",default:"My student",possessive:"My student's",identifies:"My student identifies",verb:"third"},{value:"Other",default:"The young adult",possessive:"The young adult's",identifies:"The young adult identifies",verb:"third"}],xe=["<17",18,19,20,21,22,23,24,25,26,27,"28+"],we=["Female","Male","Non-Binary","Trans"],Me=["Mild","Moderate","Severe"],_e=[{name:"bipolar",label:"Bipolar Disorder (BPD)"},{name:"borderline",label:"Borderline Disorder"},{name:"depression",label:"Depressive Disorder"},{name:"anxiety",label:"General Anxiety Disorder"}];function ze(e){let t;const n=new ce({props:{values:Me,value:e[2],name:e[1]+" level"}});return n.$on("input",e[4]),{c(){R(n.$$.fragment)},m(e,s){G(n,e,s),t=!0},p(e,t){const s={};4&t&&(s.value=e[2]),2&t&&(s.name=e[1]+" level"),n.$set(s)},i(e){t||(H(n.$$.fragment,e),t=!0)},o(e){O(n.$$.fragment,e),t=!1},d(e){Q(n,e)}}}function Se(e){let t,n,s,l,r,o,i;const c=new de({props:{type:"checkbox",checked:e[0]}});c.$on("input",e[3]);let p=e[0]&&ze(e);return{c(){t=h("label"),n=h("div"),R(c.$$.fragment),s=v(),l=h("p"),r=f(e[1]),o=v(),p&&p.c(),m(l,"class","svelte-w5hbfn"),m(n,"class","svelte-w5hbfn"),m(t,"class","behavior svelte-w5hbfn")},m(e,d){a(e,t,d),u(t,n),G(c,n,null),u(n,s),u(n,l),u(l,r),u(t,o),p&&p.m(t,null),i=!0},p(e,[n]){const s={};1&n&&(s.checked=e[0]),c.$set(s),(!i||2&n)&&b(r,e[1]),e[0]?p?(p.p(e,n),H(p,1)):(p=ze(e),p.c(),H(p,1),p.m(t,null)):p&&(T(),O(p,1,1,()=>{p=null}),L())},i(e){i||(H(c.$$.fragment,e),H(p),i=!0)},o(e){O(c.$$.fragment,e),O(p),i=!1},d(e){e&&d(t),Q(c),p&&p.d()}}}function Ce(e,t){if(t.length<1||0===e.length)return e;if(t.length<=1)return e[t[0]];return Ce(e[t[0]].subquestions,t.slice(1,t.length))}function Ie(e,t,n){let{checked:s=!1}=t,{question:l="What is a default question?"}=t,{level:r=0}=t,{qIndex:o=[]}=t;return e.$set=e=>{"checked"in e&&n(0,s=e.checked),"question"in e&&n(1,l=e.question),"level"in e&&n(2,r=e.level),"qIndex"in e&&n(5,o=e.qIndex)},[s,l,r,function(e){$e.update(t=>{const n=[...t];return Ce(n,o).checked=e.target.checked,n})},function(e){$e.update(t=>{const n=[...t];return Ce(n,o).level=e.target.value,n})},o]}class je extends Y{constructor(e){super(),V(this,e,Ie,Se,r,{checked:0,question:1,level:2,qIndex:5})}}function Ne(e,t,n){const s=e.slice();return s[8]=t[n],s[10]=n,s}function Pe(e){let t;return{c(){t=h("div"),t.innerHTML="<p>This tool is intended for use by people 18 or older. Please talk to a guardian\n\t\tor loved one or call one of these services if you are in distress:</p> \n\t\t<ul><li><strong>Suicide Help Line:</strong> 1-800-622-HELP</li></ul>",m(t,"class","warning")},m(e,n){a(e,t,n)},d(e){e&&d(t)}}}function Ae(e,t){let n,s;const l=new je({props:{question:t[8].question(qe[t[0]].default,t[8].verbs.map(t[7])),checked:t[8].checked,level:t[8].level,qIndex:[t[10]]}});return{key:e,first:null,c(){n=p(),R(l.$$.fragment),this.first=n},m(e,t){a(e,n,t),G(l,e,t),s=!0},p(e,t){const n={};9&t&&(n.question=e[8].question(qe[e[0]].default,e[8].verbs.map(e[7]))),8&t&&(n.checked=e[8].checked),8&t&&(n.level=e[8].level),8&t&&(n.qIndex=[e[10]]),l.$set(n)},i(e){s||(H(l.$$.fragment,e),s=!0)},o(e){O(l.$$.fragment,e),s=!1},d(e){e&&d(n),Q(l,e)}}}function Te(e){let t,n,s,l,r,o,i,c,p,g,$,k,y,q,x,M,_,z,S,C,j,N,P,A,D=qe[e[0]].possessive+"",W=qe[e[0]].identifies+"",V=[],Y=new Map;function J(t){e[4].call(null,t)}let K={answers:qe.map(Le)};void 0!==e[0]&&(K.selected=e[0]);const U=new ne({props:K});w.push(()=>F(U,"selected",J));const X=new ce({props:{values:xe,value:e[1]}});X.$on("input",(function(){e[5].apply(this,arguments)}));let Z=e[1]<1&&0===e[0]&&Pe();function ee(t){e[6].call(null,t)}let te={answers:we};void 0!==e[2]&&(te.selected=e[2]);const se=new ne({props:te});w.push(()=>F(se,"selected",ee));let le=e[3];const re=e=>e[10];for(let t=0;t<le.length;t+=1){let n=Ne(e,le,t),s=re(n);Y.set(s,V[t]=Ae(s,n))}return{c(){t=h("section"),n=h("h2"),n.textContent="I am using this Symptom Checker on behalf of:",s=v(),R(U.$$.fragment),r=v(),o=h("section"),i=h("h2"),c=f(D),p=f(" age is:"),g=v(),R(X.$$.fragment),$=v(),Z&&Z.c(),k=v(),y=h("section"),q=h("h2"),x=f(W),M=f(" as:"),_=v(),R(se.$$.fragment),S=v(),C=h("section"),j=h("h2"),j.textContent="What issues have been concerning you?",N=v(),P=h("div");for(let e=0;e<V.length;e+=1)V[e].c();m(n,"class","svelte-1t934uq"),m(t,"class","svelte-1t934uq"),m(i,"class","svelte-1t934uq"),m(o,"class","svelte-1t934uq"),m(q,"class","svelte-1t934uq"),m(y,"class","svelte-1t934uq"),m(j,"class","svelte-1t934uq"),m(P,"class","behavior-statements"),m(C,"class","svelte-1t934uq")},m(e,l){a(e,t,l),u(t,n),u(t,s),G(U,t,null),a(e,r,l),a(e,o,l),u(o,i),u(i,c),u(i,p),u(o,g),G(X,o,null),u(o,$),Z&&Z.m(o,null),a(e,k,l),a(e,y,l),u(y,q),u(q,x),u(q,M),u(y,_),G(se,y,null),a(e,S,l),a(e,C,l),u(C,j),u(C,N),u(C,P);for(let e=0;e<V.length;e+=1)V[e].m(P,null);A=!0},p(t,[n]){e=t;const s={};!l&&1&n&&(l=!0,s.selected=e[0],I(()=>l=!1)),U.$set(s),(!A||1&n)&&D!==(D=qe[e[0]].possessive+"")&&b(c,D);const r={};2&n&&(r.value=e[1]),X.$set(r),e[1]<1&&0===e[0]?Z||(Z=Pe(),Z.c(),Z.m(o,null)):Z&&(Z.d(1),Z=null),(!A||1&n)&&W!==(W=qe[e[0]].identifies+"")&&b(x,W);const i={};!z&&4&n&&(z=!0,i.selected=e[2],I(()=>z=!1)),se.$set(i);const u=e[3];T(),V=B(V,n,re,1,e,u,Y,P,E,Ae,null,Ne),L()},i(e){if(!A){H(U.$$.fragment,e),H(X.$$.fragment,e),H(se.$$.fragment,e);for(let e=0;e<le.length;e+=1)H(V[e]);A=!0}},o(e){O(U.$$.fragment,e),O(X.$$.fragment,e),O(se.$$.fragment,e);for(let e=0;e<V.length;e+=1)O(V[e]);A=!1},d(e){e&&d(t),Q(U),e&&d(r),e&&d(o),Q(X),Z&&Z.d(),e&&d(k),e&&d(y),Q(se),e&&d(S),e&&d(C);for(let e=0;e<V.length;e+=1)V[e].d()}}}const Le=e=>e.value;function He(e,t,n){let s,l,r,i;o(e,ge,e=>n(0,s=e)),o(e,me,e=>n(1,l=e)),o(e,be,e=>n(2,r=e)),o(e,$e,e=>n(3,i=e));return[s,l,r,i,function(e){s=e,ge.set(s)},e=>c(me,l=e.target.value),function(e){r=e,be.set(r)},e=>ke[e][qe[s].verb]]}class Oe extends Y{constructor(e){super(),V(this,e,He,Te,r,{})}}function De(e,t,n){const s=e.slice();return s[11]=t[n],s[13]=n,s}function Ee(e,t){let n,s;const l=new je({props:{question:t[11].question(qe[t[4]].default,t[11].verbs.map(t[8])),checked:t[11].checked,level:t[11].level,qIndex:[t[1][t[3]],t[13]]}});return{key:e,first:null,c(){n=p(),R(l.$$.fragment),this.first=n},m(e,t){a(e,n,t),G(l,e,t),s=!0},p(e,t){const n={};20&t&&(n.question=e[11].question(qe[e[4]].default,e[11].verbs.map(e[8]))),4&t&&(n.checked=e[11].checked),4&t&&(n.level=e[11].level),14&t&&(n.qIndex=[e[1][e[3]],e[13]]),l.$set(n)},i(e){s||(H(l.$$.fragment,e),s=!0)},o(e){O(l.$$.fragment,e),s=!1},d(e){e&&d(n),Q(l,e)}}}function Be(t){let n;return{c(){n=h("span")},m(e,t){a(e,n,t)},p:e,d(e){e&&d(n)}}}function Fe(t){let n,s;return{c(){n=h("button"),n.textContent="Previous Question",m(n,"class","prev svelte-eh4gqi"),s=g(n,"click",t[9])},m(e,t){a(e,n,t)},p:e,d(e){e&&d(n),s()}}}function Re(t){let n;return{c(){n=h("span")},m(e,t){a(e,n,t)},p:e,d(e){e&&d(n)}}}function Ge(t){let n,s;return{c(){n=h("button"),n.textContent="Next Question",m(n,"class","next svelte-eh4gqi"),s=g(n,"click",t[10])},m(e,t){a(e,n,t)},p:e,d(e){e&&d(n),s()}}}function Qe(e){let t,n,s,l,r,o,c,p,g,$,k,y,q,x,w,M,_=e[2].question(qe[e[4]].default,e[2].verbs.map(e[7]))+"",z=Me[e[2].level]+"",S=[],C=new Map,I=e[2].subquestions;const j=e=>e[13];for(let t=0;t<I.length;t+=1){let n=De(e,I,t),s=j(n);C.set(s,S[t]=Ee(s,n))}function N(e,t){return e[3]>0?Fe:Be}let P=N(e),A=P(e);function D(e,t){return e[3]<e[0].length-1?Ge:Re}let F=D(e),R=F(e);return{c(){t=h("header"),n=h("span"),n.textContent="You Reported",s=v(),l=h("div"),r=h("h2"),o=f(_),c=v(),p=h("span"),g=f(z),k=v(),y=h("div");for(let e=0;e<S.length;e+=1)S[e].c();q=v(),x=h("div"),A.c(),w=v(),R.c(),m(n,"class","reported svelte-eh4gqi"),m(r,"class","svelte-eh4gqi"),m(p,"class",$=i("level "+Me[e[2].level].toLowerCase())+" svelte-eh4gqi"),m(l,"class","svelte-eh4gqi"),m(t,"class","svelte-eh4gqi"),m(y,"class","behavior-statements"),m(x,"class","question-btns svelte-eh4gqi")},m(e,i){a(e,t,i),u(t,n),u(t,s),u(t,l),u(l,r),u(r,o),u(l,c),u(l,p),u(p,g),a(e,k,i),a(e,y,i);for(let e=0;e<S.length;e+=1)S[e].m(y,null);a(e,q,i),a(e,x,i),A.m(x,null),u(x,w),R.m(x,null),M=!0},p(e,[t]){(!M||20&t)&&_!==(_=e[2].question(qe[e[4]].default,e[2].verbs.map(e[7]))+"")&&b(o,_),(!M||4&t)&&z!==(z=Me[e[2].level]+"")&&b(g,z),(!M||4&t&&$!==($=i("level "+Me[e[2].level].toLowerCase())+" svelte-eh4gqi"))&&m(p,"class",$);const n=e[2].subquestions;T(),S=B(S,t,j,1,e,n,C,y,E,Ee,null,De),L(),P===(P=N(e))&&A?A.p(e,t):(A.d(1),A=P(e),A&&(A.c(),A.m(x,w))),F===(F=D(e))&&R?R.p(e,t):(R.d(1),R=F(e),R&&(R.c(),R.m(x,null)))},i(e){if(!M){for(let e=0;e<I.length;e+=1)H(S[e]);M=!0}},o(e){for(let e=0;e<S.length;e+=1)O(S[e]);M=!1},d(e){e&&d(t),e&&d(k),e&&d(y);for(let e=0;e<S.length;e+=1)S[e].d();e&&d(q),e&&d(x),A.d(),R.d()}}}function We(e,t,n){let s,l,r;function i(e){c(pe,l+=e)}o(e,$e,e=>n(6,s=e)),o(e,pe,e=>n(3,l=e)),o(e,ge,e=>n(4,r=e));let u,a,d;return e.$$.update=()=>{64&e.$$.dirty&&n(0,u=s.filter(e=>e.checked)),64&e.$$.dirty&&n(1,a=s.map((e,t)=>e.checked?t:-1).filter(e=>e>=0)),9&e.$$.dirty&&n(2,d=u[l])},[u,a,d,l,r,i,s,e=>ke[e][qe[r].verb],e=>ke[e][qe[r].verb],()=>i(-1),()=>i(1)]}class Ve extends Y{constructor(e){super(),V(this,e,We,Qe,r,{})}}function Ye(e,t,n){const s=e.slice();return s[7]=t[n],s[9]=n,s}function Je(e,t,n){const s=e.slice();return s[13]=t[n],s[15]=n,s}function Ke(e,t,n){const s=e.slice();return s[10]=t[n],s[12]=n,s}function Ue(e){let t,n=[],s=new Map,l=e[10].subquestions;const r=e=>e[12]+e[15];for(let t=0;t<l.length;t+=1){let o=Je(e,l,t),i=r(o);s.set(i,n[t]=Xe(i,o))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=p()},m(e,s){for(let t=0;t<n.length;t+=1)n[t].m(e,s);a(e,t,s)},p(e,l){const o=e[10].subquestions;n=B(n,l,r,1,e,o,s,t.parentNode,D,Xe,t,Je)},d(e){for(let t=0;t<n.length;t+=1)n[t].d(e);e&&d(t)}}}function Xe(e,t){let n,s,l,r,o,c,p,g,$,k=t[13].question(qe[t[2]].default,t[13].verbs.map(t[6]))+"",y=(t[13].checked?Me[t[13].level]:"None")+"";return{key:e,first:null,c(){n=h("tr"),s=h("td"),l=f(k),r=v(),o=h("td"),c=f(y),g=v(),m(s,"class","svelte-1ozear0"),m(o,"class","severity svelte-1ozear0"),m(o,"style",p=t[13].checked?`--hue: ${85-t[13].level/(Me.length-1)*90}deg;`:""),m(n,"class",$=i("question subquestion "+(t[13].checked?"active":""))+" svelte-1ozear0"),this.first=n},m(e,t){a(e,n,t),u(n,s),u(s,l),u(n,r),u(n,o),u(o,c),u(n,g)},p(e,t){6&t&&k!==(k=e[13].question(qe[e[2]].default,e[13].verbs.map(e[6]))+"")&&b(l,k),2&t&&y!==(y=(e[13].checked?Me[e[13].level]:"None")+"")&&b(c,y),2&t&&p!==(p=e[13].checked?`--hue: ${85-e[13].level/(Me.length-1)*90}deg;`:"")&&m(o,"style",p),2&t&&$!==($=i("question subquestion "+(e[13].checked?"active":""))+" svelte-1ozear0")&&m(n,"class",$)},d(e){e&&d(n)}}}function Ze(e,t){let n,s,l,r,o,c,g,$,k,y,q=t[10].question(qe[t[2]].default,t[10].verbs.map(t[5]))+"",x=(t[10].checked?Me[t[10].level]:"None")+"",w=t[10].subquestions.length>0&&t[10].checked&&Ue(t);return{key:e,first:null,c(){n=h("tr"),s=h("td"),l=f(q),r=v(),o=h("td"),c=f(x),k=v(),w&&w.c(),y=p(),m(s,"class","svelte-1ozear0"),m(o,"class","severity svelte-1ozear0"),m(o,"style",g=t[10].checked?`--hue: ${85-t[10].level/(Me.length-1)*90}deg;`:""),m(n,"class",$=i("question "+(t[10].checked?"active":"")+" "+(t[10].subquestions.length>0&&t[10].checked?"has-subquestions":""))+" svelte-1ozear0"),this.first=n},m(e,t){a(e,n,t),u(n,s),u(s,l),u(n,r),u(n,o),u(o,c),a(e,k,t),w&&w.m(e,t),a(e,y,t)},p(e,t){6&t&&q!==(q=e[10].question(qe[e[2]].default,e[10].verbs.map(e[5]))+"")&&b(l,q),2&t&&x!==(x=(e[10].checked?Me[e[10].level]:"None")+"")&&b(c,x),2&t&&g!==(g=e[10].checked?`--hue: ${85-e[10].level/(Me.length-1)*90}deg;`:"")&&m(o,"style",g),2&t&&$!==($=i("question "+(e[10].checked?"active":"")+" "+(e[10].subquestions.length>0&&e[10].checked?"has-subquestions":""))+" svelte-1ozear0")&&m(n,"class",$),e[10].subquestions.length>0&&e[10].checked?w?w.p(e,t):(w=Ue(e),w.c(),w.m(y.parentNode,y)):w&&(w.d(1),w=null)},d(e){e&&d(n),e&&d(k),w&&w.d(e),e&&d(y)}}}function et(e,t){let n,s,l,r,o,i,c,p=t[7].label+"",g=t[7].level.toFixed(2)+"";return{key:e,first:null,c(){n=h("tr"),s=h("td"),l=f(p),r=v(),o=h("td"),i=f(g),c=v(),m(s,"class","svelte-1ozear0"),m(o,"class","svelte-1ozear0"),this.first=n},m(e,t){a(e,n,t),u(n,s),u(s,l),u(n,r),u(n,o),u(o,i),u(n,c)},p(e,t){1&t&&p!==(p=e[7].label+"")&&b(l,p),1&t&&g!==(g=e[7].level.toFixed(2)+"")&&b(i,g)},d(e){e&&d(n)}}}function tt(t){let n,s,l,r,o,i,c,p,g,$,k,y,q,x,w,M,_,z,S,C,I,j,N,P,A,T,L,H,O,E=qe[t[2]].value+"",F=xe[t[3]]+"",R=we[t[4]]+"",G=[],Q=new Map,W=[],V=new Map,Y=t[1];const J=e=>e[12];for(let e=0;e<Y.length;e+=1){let n=Ke(t,Y,e),s=J(n);Q.set(s,G[e]=Ze(s,n))}let K=t[0];const U=e=>"disorder-res_"+e[9];for(let e=0;e<K.length;e+=1){let n=Ye(t,K,e),s=U(n);V.set(s,W[e]=et(s,n))}return{c(){n=h("section"),s=h("h2"),s.textContent="Output",l=v(),r=h("table"),o=h("tbody"),i=h("tr"),i.innerHTML='<th class="svelte-1ozear0">Property</th> \n\t\t\t\t<th class="svelte-1ozear0">Value</th>',c=v(),p=h("tr"),g=h("td"),g.textContent="Relation",$=v(),k=h("td"),y=f(E),q=v(),x=h("tr"),w=h("td"),w.textContent="Age",M=v(),_=h("td"),z=f(F),S=v(),C=h("tr"),I=h("td"),I.textContent="Gender",j=v(),N=h("td"),P=f(R),A=v();for(let e=0;e<G.length;e+=1)G[e].c();T=v(),L=h("table"),H=h("tr"),H.innerHTML='<th class="svelte-1ozear0">Disorder</th> \n\t\t\t<th class="svelte-1ozear0">Score</th>',O=v();for(let e=0;e<W.length;e+=1)W[e].c();m(s,"class","svelte-1ozear0"),m(g,"class","svelte-1ozear0"),m(k,"class","svelte-1ozear0"),m(w,"class","svelte-1ozear0"),m(_,"class","svelte-1ozear0"),m(I,"class","svelte-1ozear0"),m(N,"class","svelte-1ozear0"),m(r,"class","svelte-1ozear0"),m(L,"class","svelte-1ozear0"),m(n,"class","svelte-1ozear0")},m(e,t){a(e,n,t),u(n,s),u(n,l),u(n,r),u(r,o),u(o,i),u(o,c),u(o,p),u(p,g),u(p,$),u(p,k),u(k,y),u(o,q),u(o,x),u(x,w),u(x,M),u(x,_),u(_,z),u(o,S),u(o,C),u(C,I),u(C,j),u(C,N),u(N,P),u(o,A);for(let e=0;e<G.length;e+=1)G[e].m(o,null);u(n,T),u(n,L),u(L,H),u(L,O);for(let e=0;e<W.length;e+=1)W[e].m(L,null)},p(e,[t]){4&t&&E!==(E=qe[e[2]].value+"")&&b(y,E),8&t&&F!==(F=xe[e[3]]+"")&&b(z,F),16&t&&R!==(R=we[e[4]]+"")&&b(P,R);const n=e[1];G=B(G,t,J,1,e,n,Q,o,D,Ze,null,Ke);const s=e[0];W=B(W,t,U,1,e,s,V,L,D,et,null,Ye)},i:e,o:e,d(e){e&&d(n);for(let e=0;e<G.length;e+=1)G[e].d();for(let e=0;e<W.length;e+=1)W[e].d()}}}function nt(e,t,n){let s,l,r,i;o(e,$e,e=>n(1,s=e)),o(e,ge,e=>n(2,l=e)),o(e,me,e=>n(3,r=e)),o(e,be,e=>n(4,i=e));let c;return e.$$.update=()=>{2&e.$$.dirty&&n(0,c=_e.map(e=>({...e,level:s.reduce((t,n)=>{const s=n.markers.find(t=>t.disorder===e.name);if(s&&n.checked){const e=n.subquestions.length>0?n.subquestions.reduce((e,t)=>t.checked?e+(1+parseInt(t.level))/parseInt(t.levelMax+1):e+0,0)/n.subquestions.length/s.weight:0;return t+(1+parseInt(n.level)+e)*s.weight}return t+0},0)})))},[c,s,l,r,i,e=>ke[e][qe[l].verb],e=>ke[e][qe[l].verb]]}class st extends Y{constructor(e){super(),V(this,e,nt,tt,r,{})}}function lt(e,t,n){const s=e.slice();return s[2]=t[n],s[4]=n,s}function rt(e,t){let n,s,l,r=t[2].label+"";return{key:e,first:null,c(){n=h("h2"),s=f(r),l=v(),m(n,"class","svelte-1wubtjl"),this.first=n},m(e,t){a(e,n,t),u(n,s),a(e,l,t)},p(e,t){1&t&&r!==(r=e[2].label+"")&&b(s,r)},d(e){e&&d(n),e&&d(l)}}}function ot(t){let n,s=[],l=new Map,r=t[0];const o=e=>e[2].name;for(let e=0;e<r.length;e+=1){let n=lt(t,r,e),i=o(n);l.set(i,s[e]=rt(i,n))}return{c(){n=h("section");for(let e=0;e<s.length;e+=1)s[e].c();m(n,"class","svelte-1wubtjl")},m(e,t){a(e,n,t);for(let e=0;e<s.length;e+=1)s[e].m(n,null)},p(e,[t]){const r=e[0];s=B(s,t,o,1,e,r,l,n,D,rt,null,lt)},i:e,o:e,d(e){e&&d(n);for(let e=0;e<s.length;e+=1)s[e].d()}}}function it(e,t,n){let s,l;return o(e,$e,e=>n(1,s=e)),e.$$.update=()=>{2&e.$$.dirty&&n(0,l=_e.map(e=>({...e,level:s.reduce((t,n)=>{const s=n.markers.find(t=>t.disorder===e.name);if(s&&n.checked){const e=n.subquestions.length>0?n.subquestions.reduce((e,t)=>t.checked?e+(1+parseInt(t.level))/parseInt(t.levelMax+1):e+0,0)/n.subquestions.length/s.weight:0;return t+(1+parseInt(n.level)+e)*s.weight}return t+0},0)})).sort((e,t)=>t.level-e.level))},[l]}class ct extends Y{constructor(e){super(),V(this,e,it,ot,r,{})}}function ut(e){let t;const n=new ct({});return{c(){R(n.$$.fragment)},m(e,s){G(n,e,s),t=!0},i(e){t||(H(n.$$.fragment,e),t=!0)},o(e){O(n.$$.fragment,e),t=!1},d(e){Q(n,e)}}}function at(e){let t;const n=new Ve({});return{c(){R(n.$$.fragment)},m(e,s){G(n,e,s),t=!0},i(e){t||(H(n.$$.fragment,e),t=!0)},o(e){O(n.$$.fragment,e),t=!1},d(e){Q(n,e)}}}function dt(e){let t;const n=new Oe({});return{c(){R(n.$$.fragment)},m(e,s){G(n,e,s),t=!0},i(e){t||(H(n.$$.fragment,e),t=!0)},o(e){O(n.$$.fragment,e),t=!1},d(e){Q(n,e)}}}function ht(t){let n;return{c(){n=h("span")},m(e,t){a(e,n,t)},p:e,d(e){e&&d(n)}}}function ft(t){let n,s;return{c(){n=h("button"),n.textContent="Previous Section",m(n,"class","prev svelte-1jbjatm"),s=g(n,"click",t[6])},m(e,t){a(e,n,t)},p:e,d(e){e&&d(n),s()}}}function vt(t){let n;return{c(){n=h("span")},m(e,t){a(e,n,t)},p:e,d(e){e&&d(n)}}}function pt(e){let t,n,s,l;return{c(){t=h("button"),n=f("Next Section"),m(t,"class","next svelte-1jbjatm"),t.disabled=s=!e[1]||0==e[2]&&0==e[3],l=g(t,"click",e[7])},m(e,s){a(e,t,s),u(t,n)},p(e,n){14&n&&s!==(s=!e[1]||0==e[2]&&0==e[3])&&(t.disabled=s)},d(e){e&&d(t),l()}}}function gt(e){let t,n,s,l,r,o,i,c,f,p,g,b;const $=[dt,at,ut],k=[];function y(e,t){return"intro"===e[0]?0:"behaviors"===e[0]?1:"results"===e[0]?2:-1}function q(e,t){return(null==c||1&t)&&(c=!!(ye.indexOf(e[0])>0)),c?ft:ht}~(l=y(e))&&(r=k[l]=$[l](e));let x=q(e,-1),w=x(e);function M(e,t){return(null==p||1&t)&&(p=!!(ye.indexOf(e[0])<ye.length-1)),p?pt:vt}let _=M(e,-1),z=_(e);const S=new st({});return{c(){t=h("main"),n=h("h1"),n.textContent="Symptom Checker",s=v(),r&&r.c(),o=v(),i=h("div"),w.c(),f=v(),z.c(),g=v(),R(S.$$.fragment),m(n,"class","svelte-1jbjatm"),m(i,"class","section-btns svelte-1jbjatm"),m(t,"class","svelte-1jbjatm")},m(e,r){a(e,t,r),u(t,n),u(t,s),~l&&k[l].m(t,null),u(t,o),u(t,i),w.m(i,null),u(i,f),z.m(i,null),a(e,g,r),G(S,e,r),b=!0},p(e,[n]){let s=l;l=y(e),l!==s&&(r&&(T(),O(k[s],1,1,()=>{k[s]=null}),L()),~l?(r=k[l],r||(r=k[l]=$[l](e),r.c()),H(r,1),r.m(t,o)):r=null),x===(x=q(e,n))&&w?w.p(e,n):(w.d(1),w=x(e),w&&(w.c(),w.m(i,f))),_===(_=M(e,n))&&z?z.p(e,n):(z.d(1),z=_(e),z&&(z.c(),z.m(i,null)))},i(e){b||(H(r),H(S.$$.fragment,e),b=!0)},o(e){O(r),O(S.$$.fragment,e),b=!1},d(e){e&&d(t),~l&&k[l].d(),w.d(),z.d(),e&&d(g),Q(S,e)}}}function mt(e,t,n){let s,l,r,i;function u(e){c(ve,s=ye[ye.indexOf(s)+e])}o(e,ve,e=>n(0,s=e)),o(e,$e,e=>n(5,l=e)),o(e,me,e=>n(2,r=e)),o(e,ge,e=>n(3,i=e));let a;return e.$$.update=()=>{32&e.$$.dirty&&n(1,a=l.filter(e=>e.checked).length>0)},[s,a,r,i,u,l,()=>u(-1),()=>u(1)]}return new class extends Y{constructor(e){super(),V(this,e,mt,gt,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
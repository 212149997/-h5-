import{o as Qe,B as ze,n as le,t as P,i as ke,D as We,E as je,p as Fe,e as Me,m as X,c as Ce,j as Ze,v as qe,w as xe,F as _e,h as $e,d as et,G as ge}from"./base-BB0BJc7J.js";import{u as tt,O as Ge}from"./index-Bhpdgdne.js";import{T as me,u as ot,a as ce,H as nt,I as De,c as at,d as rt}from"./index-vL3QJQmw.js";import{r as b,A as Ue,B as Ie,w as Z,e as Te,f as st,z as Le,y as de,l as it,x as lt,d as S,T as ct,F as Pe,m as Ae,C as At,D as j,E as F,G as ut,_ as ft,u as dt,c as pt,a as A,t as _,h as C,g as se,i as vt,o as ht,H as gt,n as mt,p as wt,b as bt}from"./index-fKK8k-90.js";import{_ as Et}from"./回到主页面-Ca69j8iY.js";function yt(e,{args:t=[],done:o,canceled:n,error:a}){if(e){const r=e.apply(null,t);Qe(r)?r.then(i=>{i?o():n&&n()}).catch(a||ze):r?o():n&&n()}else o()}const Ot=Symbol();let Bt=2e3;const Rt=()=>++Bt,St={show:Boolean,zIndex:le,overlay:P,duration:le,teleport:[String,Object],lockScroll:P,lazyRender:P,beforeClose:Function,overlayStyle:Object,overlayClass:ke,transitionAppear:Boolean,closeOnClickOverlay:P};function kt(e,t){return e>t?"horizontal":t>e?"vertical":""}function Mt(){const e=b(0),t=b(0),o=b(0),n=b(0),a=b(0),r=b(0),i=b(""),s=b(!0),l=()=>i.value==="vertical",u=()=>i.value==="horizontal",c=()=>{o.value=0,n.value=0,a.value=0,r.value=0,i.value="",s.value=!0};return{move:v=>{const B=v.touches[0];o.value=(B.clientX<0?0:B.clientX)-e.value,n.value=B.clientY-t.value,a.value=Math.abs(o.value),r.value=Math.abs(n.value);const m=10;(!i.value||a.value<m&&r.value<m)&&(i.value=kt(a.value,r.value)),s.value&&(a.value>me||r.value>me)&&(s.value=!1)},start:v=>{c(),e.value=v.touches[0].clientX,t.value=v.touches[0].clientY},reset:c,startX:e,startY:t,deltaX:o,deltaY:n,offsetX:a,offsetY:r,direction:i,isVertical:l,isHorizontal:u,isTap:s}}let W=0;const we="van-overflow-hidden";function Ct(e,t){const o=Mt(),n="01",a="10",r=c=>{o.move(c);const h=o.deltaY.value>0?a:n,O=je(c.target,e.value),{scrollHeight:v,offsetHeight:B,scrollTop:m}=O;let p="11";m===0?p=B>=v?"00":"01":m+B>=v&&(p="10"),p!=="11"&&o.isVertical()&&!(parseInt(p,2)&parseInt(h,2))&&Fe(c,!0)},i=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",r,{passive:!1}),W||document.body.classList.add(we),W++},s=()=>{W&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",r),W--,W||document.body.classList.remove(we))},l=()=>t()&&i(),u=()=>t()&&s();We(l),Ue(u),Ie(u),Z(t,c=>{c?i():s()})}const xt=Me({},St,{round:Boolean,position:X("center"),closeIcon:X("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:X("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Gt,be]=Ce("popup");var Dt=Te({name:Gt,inheritAttrs:!1,props:xt,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:o,slots:n}){let a,r;const i=b(),s=b(),l=tt(()=>e.show||!e.lazyRender),u=st(()=>{const f={zIndex:i.value};if(Ze(e.duration)){const R=e.position==="center"?"animationDuration":"transitionDuration";f[R]=`${e.duration}s`}return f}),c=()=>{a||(a=!0,i.value=e.zIndex!==void 0?+e.zIndex:Rt(),t("open"))},h=()=>{a&&yt(e.beforeClose,{done(){a=!1,t("close"),t("update:show",!1)}})},O=f=>{t("clickOverlay",f),e.closeOnClickOverlay&&h()},v=()=>{if(e.overlay)return S(Ge,Ae({show:e.show,class:e.overlayClass,zIndex:i.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},ce(),{onClick:O}),{default:n["overlay-content"]})},B=f=>{t("clickCloseIcon",f),h()},m=()=>{if(e.closeable)return S(De,{role:"button",tabindex:0,name:e.closeIcon,class:[be("close-icon",e.closeIconPosition),nt],classPrefix:e.iconPrefix,onClick:B},null)};let p;const g=()=>{p&&clearTimeout(p),p=setTimeout(()=>{t("opened")})},d=()=>t("closed"),w=f=>t("keydown",f),E=l(()=>{var f;const{round:R,position:M,safeAreaInsetTop:D,safeAreaInsetBottom:H}=e;return j(S("div",Ae({ref:s,style:u.value,role:"dialog",tabindex:0,class:[be({round:R,[M]:M}),{"van-safe-area-top":D,"van-safe-area-bottom":H}],onKeydown:w},o,ce()),[(f=n.default)==null?void 0:f.call(n),m()]),[[F,e.show]])}),y=()=>{const{position:f,transition:R,transitionAppear:M}=e,D=f==="center"?"van-fade":`van-popup-slide-${f}`;return S(At,{name:R||D,appear:M,onAfterEnter:g,onAfterLeave:d},{default:E})};return Z(()=>e.show,f=>{f&&!a&&(c(),o.tabindex===0&&Le(()=>{var R;(R=s.value)==null||R.focus()})),!f&&a&&(a=!1,t("close"))}),ot({popupRef:s}),Ct(s,()=>e.show&&e.lockScroll),qe("popstate",()=>{e.closeOnPopstate&&(h(),r=!1)}),de(()=>{e.show&&c()}),it(()=>{r&&(t("update:show",!0),r=!1)}),Ue(()=>{e.show&&e.teleport&&(h(),r=!0)}),lt(Ot,()=>e.show),()=>e.teleport?S(ct,{to:e.teleport},{default:()=>[v(),y()]}):S(Pe,null,[v(),y()])}});const Ut=xe(Dt),It=(e,t)=>{const o=b(e());return Z(e,n=>{n!==o.value&&(o.value=n)}),Z(o,n=>{n!==e()&&t(n)}),o};function G(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function pe(e){var t=G(e).Element;return e instanceof t||e instanceof Element}function x(e){var t=G(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function He(e){if(typeof ShadowRoot>"u")return!1;var t=G(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var Q=Math.round;function ue(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Tt(){return!/^((?!chrome|android).)*safari/i.test(ue())}function te(e,t,o){t===void 0&&(t=!1),o===void 0&&(o=!1);var n=e.getBoundingClientRect(),a=1,r=1;t&&x(e)&&(a=e.offsetWidth>0&&Q(n.width)/e.offsetWidth||1,r=e.offsetHeight>0&&Q(n.height)/e.offsetHeight||1);var i=pe(e)?G(e):window,s=i.visualViewport,l=!Tt()&&o,u=(n.left+(l&&s?s.offsetLeft:0))/a,c=(n.top+(l&&s?s.offsetTop:0))/r,h=n.width/a,O=n.height/r;return{width:h,height:O,top:c,right:u+h,bottom:c+O,left:u,x:u,y:c}}function Ve(e){var t=G(e),o=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:o,scrollTop:n}}function Lt(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Pt(e){return e===G(e)||!x(e)?Ve(e):Lt(e)}function U(e){return e?(e.nodeName||"").toLowerCase():null}function ae(e){return((pe(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ht(e){return te(ae(e)).left+Ve(e).scrollLeft}function I(e){return G(e).getComputedStyle(e)}function ve(e){var t=I(e),o=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+a+n)}function Vt(e){var t=e.getBoundingClientRect(),o=Q(t.width)/e.offsetWidth||1,n=Q(t.height)/e.offsetHeight||1;return o!==1||n!==1}function Jt(e,t,o){o===void 0&&(o=!1);var n=x(t),a=x(t)&&Vt(t),r=ae(t),i=te(e,a,o),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!o)&&((U(t)!=="body"||ve(r))&&(s=Pt(t)),x(t)?(l=te(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):r&&(l.x=Ht(r))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function Xt(e){var t=te(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function he(e){return U(e)==="html"?e:e.assignedSlot||e.parentNode||(He(e)?e.host:null)||ae(e)}function Je(e){return["html","body","#document"].indexOf(U(e))>=0?e.ownerDocument.body:x(e)&&ve(e)?e:Je(he(e))}function ee(e,t){var o;t===void 0&&(t=[]);var n=Je(e),a=n===((o=e.ownerDocument)==null?void 0:o.body),r=G(n),i=a?[r].concat(r.visualViewport||[],ve(n)?n:[]):n,s=t.concat(i);return a?s:s.concat(ee(he(i)))}function Kt(e){return["table","td","th"].indexOf(U(e))>=0}function Ee(e){return!x(e)||I(e).position==="fixed"?null:e.offsetParent}function Yt(e){var t=/firefox/i.test(ue()),o=/Trident/i.test(ue());if(o&&x(e)){var n=I(e);if(n.position==="fixed")return null}var a=he(e);for(He(a)&&(a=a.host);x(a)&&["html","body"].indexOf(U(a))<0;){var r=I(a);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||t&&r.willChange==="filter"||t&&r.filter&&r.filter!=="none")return a;a=a.parentNode}return null}function Xe(e){for(var t=G(e),o=Ee(e);o&&Kt(o)&&I(o).position==="static";)o=Ee(o);return o&&(U(o)==="html"||U(o)==="body"&&I(o).position==="static")?t:o||Yt(e)||t}var N="top",oe="bottom",q="right",K="left",Ke="auto",Nt=[N,oe,q,K],Ye="start",ne="end",Qt=[].concat(Nt,[Ke]).reduce(function(e,t){return e.concat([t,t+"-"+Ye,t+"-"+ne])},[]),zt="beforeRead",Wt="read",jt="afterRead",Ft="beforeMain",Zt="main",qt="afterMain",_t="beforeWrite",$t="write",eo="afterWrite",fe=[zt,Wt,jt,Ft,Zt,qt,_t,$t,eo];function to(e){var t=new Map,o=new Set,n=[];e.forEach(function(r){t.set(r.name,r)});function a(r){o.add(r.name);var i=[].concat(r.requires||[],r.requiresIfExists||[]);i.forEach(function(s){if(!o.has(s)){var l=t.get(s);l&&a(l)}}),n.push(r)}return e.forEach(function(r){o.has(r.name)||a(r)}),n}function oo(e){var t=to(e);return fe.reduce(function(o,n){return o.concat(t.filter(function(a){return a.phase===n}))},[])}function no(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function L(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];return[].concat(o).reduce(function(a,r){return a.replace(/%s/,r)},e)}var V='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',ao='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',ye=["name","enabled","phase","fn","effect","requires","options"];function ro(e){e.forEach(function(t){[].concat(Object.keys(t),ye).filter(function(o,n,a){return a.indexOf(o)===n}).forEach(function(o){switch(o){case"name":typeof t.name!="string"&&console.error(L(V,String(t.name),'"name"','"string"','"'+String(t.name)+'"'));break;case"enabled":typeof t.enabled!="boolean"&&console.error(L(V,t.name,'"enabled"','"boolean"','"'+String(t.enabled)+'"'));break;case"phase":fe.indexOf(t.phase)<0&&console.error(L(V,t.name,'"phase"',"either "+fe.join(", "),'"'+String(t.phase)+'"'));break;case"fn":typeof t.fn!="function"&&console.error(L(V,t.name,'"fn"','"function"','"'+String(t.fn)+'"'));break;case"effect":t.effect!=null&&typeof t.effect!="function"&&console.error(L(V,t.name,'"effect"','"function"','"'+String(t.fn)+'"'));break;case"requires":t.requires!=null&&!Array.isArray(t.requires)&&console.error(L(V,t.name,'"requires"','"array"','"'+String(t.requires)+'"'));break;case"requiresIfExists":Array.isArray(t.requiresIfExists)||console.error(L(V,t.name,'"requiresIfExists"','"array"','"'+String(t.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+t.name+'" modifier, valid properties are '+ye.map(function(n){return'"'+n+'"'}).join(", ")+'; but "'+o+'" was provided.')}t.requires&&t.requires.forEach(function(n){e.find(function(a){return a.name===n})==null&&console.error(L(ao,String(t.name),n,n))})})})}function so(e,t){var o=new Set;return e.filter(function(n){var a=t(n);if(!o.has(a))return o.add(a),!0})}function re(e){return e.split("-")[0]}function io(e){var t=e.reduce(function(o,n){var a=o[n.name];return o[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,o},{});return Object.keys(t).map(function(o){return t[o]})}function Ne(e){return e.split("-")[1]}function lo(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function co(e){var t=e.reference,o=e.element,n=e.placement,a=n?re(n):null,r=n?Ne(n):null,i=t.x+t.width/2-o.width/2,s=t.y+t.height/2-o.height/2,l;switch(a){case N:l={x:i,y:t.y-o.height};break;case oe:l={x:i,y:t.y+t.height};break;case q:l={x:t.x+t.width,y:s};break;case K:l={x:t.x-o.width,y:s};break;default:l={x:t.x,y:t.y}}var u=a?lo(a):null;if(u!=null){var c=u==="y"?"height":"width";switch(r){case Ye:l[u]=l[u]-(t[c]/2-o[c]/2);break;case ne:l[u]=l[u]+(t[c]/2-o[c]/2);break}}return l}var Oe="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",Ao="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",Be={placement:"bottom",modifiers:[],strategy:"absolute"};function Re(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function uo(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,n=o===void 0?[]:o,a=t.defaultOptions,r=a===void 0?Be:a;return function(s,l,u){u===void 0&&(u=r);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Be,r),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},h=[],O=!1,v={state:c,setOptions:function(g){var d=typeof g=="function"?g(c.options):g;m(),c.options=Object.assign({},r,c.options,d),c.scrollParents={reference:pe(s)?ee(s):s.contextElement?ee(s.contextElement):[],popper:ee(l)};var w=oo(io([].concat(n,c.options.modifiers)));c.orderedModifiers=w.filter(function(k){return k.enabled});{var E=so([].concat(w,c.options.modifiers),function(k){var Y=k.name;return Y});if(ro(E),re(c.options.placement)===Ke){var y=c.orderedModifiers.find(function(k){var Y=k.name;return Y==="flip"});y||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" "))}var f=I(l),R=f.marginTop,M=f.marginRight,D=f.marginBottom,H=f.marginLeft;[R,M,D,H].some(function(k){return parseFloat(k)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" "))}return B(),v.update()},forceUpdate:function(){if(!O){var g=c.elements,d=g.reference,w=g.popper;if(!Re(d,w)){console.error(Oe);return}c.rects={reference:Jt(d,Xe(w),c.options.strategy==="fixed"),popper:Xt(w)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(k){return c.modifiersData[k.name]=Object.assign({},k.data)});for(var E=0,y=0;y<c.orderedModifiers.length;y++){if(E+=1,E>100){console.error(Ao);break}if(c.reset===!0){c.reset=!1,y=-1;continue}var f=c.orderedModifiers[y],R=f.fn,M=f.options,D=M===void 0?{}:M,H=f.name;typeof R=="function"&&(c=R({state:c,options:D,name:H,instance:v})||c)}}},update:no(function(){return new Promise(function(p){v.forceUpdate(),p(c)})}),destroy:function(){m(),O=!0}};if(!Re(s,l))return console.error(Oe),v;v.setOptions(u).then(function(p){!O&&u.onFirstUpdate&&u.onFirstUpdate(p)});function B(){c.orderedModifiers.forEach(function(p){var g=p.name,d=p.options,w=d===void 0?{}:d,E=p.effect;if(typeof E=="function"){var y=E({state:c,name:g,instance:v,options:w}),f=function(){};h.push(y||f)}})}function m(){h.forEach(function(p){return p()}),h=[]}return v}}var $={passive:!0};function fo(e){var t=e.state,o=e.instance,n=e.options,a=n.scroll,r=a===void 0?!0:a,i=n.resize,s=i===void 0?!0:i,l=G(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&u.forEach(function(c){c.addEventListener("scroll",o.update,$)}),s&&l.addEventListener("resize",o.update,$),function(){r&&u.forEach(function(c){c.removeEventListener("scroll",o.update,$)}),s&&l.removeEventListener("resize",o.update,$)}}var po={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fo,data:{}};function vo(e){var t=e.state,o=e.name;t.modifiersData[o]=co({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var ho={name:"popperOffsets",enabled:!0,phase:"read",fn:vo,data:{}},go={top:"auto",right:"auto",bottom:"auto",left:"auto"};function mo(e){var t=e.x,o=e.y,n=window,a=n.devicePixelRatio||1;return{x:Q(t*a)/a||0,y:Q(o*a)/a||0}}function Se(e){var t,o=e.popper,n=e.popperRect,a=e.placement,r=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,h=e.isFixed,O=i.x,v=O===void 0?0:O,B=i.y,m=B===void 0?0:B,p=typeof c=="function"?c({x:v,y:m}):{x:v,y:m};v=p.x,m=p.y;var g=i.hasOwnProperty("x"),d=i.hasOwnProperty("y"),w=K,E=N,y=window;if(u){var f=Xe(o),R="clientHeight",M="clientWidth";if(f===G(o)&&(f=ae(o),I(f).position!=="static"&&s==="absolute"&&(R="scrollHeight",M="scrollWidth")),f=f,a===N||(a===K||a===q)&&r===ne){E=oe;var D=h&&f===y&&y.visualViewport?y.visualViewport.height:f[R];m-=D-n.height,m*=l?1:-1}if(a===K||(a===N||a===oe)&&r===ne){w=q;var H=h&&f===y&&y.visualViewport?y.visualViewport.width:f[M];v-=H-n.width,v*=l?1:-1}}var k=Object.assign({position:s},u&&go),Y=c===!0?mo({x:v,y:m}):{x:v,y:m};if(v=Y.x,m=Y.y,l){var z;return Object.assign({},k,(z={},z[E]=d?"0":"",z[w]=g?"0":"",z.transform=(y.devicePixelRatio||1)<=1?"translate("+v+"px, "+m+"px)":"translate3d("+v+"px, "+m+"px, 0)",z))}return Object.assign({},k,(t={},t[E]=d?m+"px":"",t[w]=g?v+"px":"",t.transform="",t))}function wo(e){var t=e.state,o=e.options,n=o.gpuAcceleration,a=n===void 0?!0:n,r=o.adaptive,i=r===void 0?!0:r,s=o.roundOffsets,l=s===void 0?!0:s;{var u=I(t.elements.popper).transitionProperty||"";i&&["transform","top","right","bottom","left"].some(function(h){return u.indexOf(h)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',`

`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var c={placement:re(t.placement),variation:Ne(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Se(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Se(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var bo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:wo,data:{}};function Eo(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var n=t.styles[o]||{},a=t.attributes[o]||{},r=t.elements[o];!x(r)||!U(r)||(Object.assign(r.style,n),Object.keys(a).forEach(function(i){var s=a[i];s===!1?r.removeAttribute(i):r.setAttribute(i,s===!0?"":s)}))})}function yo(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],r=t.attributes[n]||{},i=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:o[n]),s=i.reduce(function(l,u){return l[u]="",l},{});!x(a)||!U(a)||(Object.assign(a.style,s),Object.keys(r).forEach(function(l){a.removeAttribute(l)}))})}}var Oo={name:"applyStyles",enabled:!0,phase:"write",fn:Eo,effect:yo,requires:["computeStyles"]},Bo=[po,ho,bo,Oo],Ro=uo({defaultModifiers:Bo});function So(e,t,o){var n=re(e),a=[K,N].indexOf(n)>=0?-1:1,r=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,i=r[0],s=r[1];return i=i||0,s=(s||0)*a,[K,q].indexOf(n)>=0?{x:s,y:i}:{x:i,y:s}}function ko(e){var t=e.state,o=e.options,n=e.name,a=o.offset,r=a===void 0?[0,0]:a,i=Qt.reduce(function(c,h){return c[h]=So(h,t.rects,r),c},{}),s=i[t.placement],l=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=i}var Mo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ko};const[Co,J]=Ce("popover"),xo=["overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"],Go={show:Boolean,theme:X("light"),overlay:Boolean,actions:et(),actionsDirection:X("vertical"),trigger:X("click"),duration:le,showArrow:P,placement:X("bottom"),iconPrefix:String,overlayClass:ke,overlayStyle:Object,closeOnClickAction:P,closeOnClickOverlay:P,closeOnClickOutside:P,offset:{type:Array,default:()=>[0,8]},teleport:{type:[String,Object],default:"body"}};var Do=Te({name:Co,props:Go,emits:["select","touchstart","update:show"],setup(e,{emit:t,slots:o,attrs:n}){let a;const r=b(),i=b(),s=b(),l=It(()=>e.show,d=>t("update:show",d)),u=()=>({placement:e.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},Me({},Mo,{options:{offset:e.offset}})]}),c=()=>i.value&&s.value?Ro(i.value,s.value.popupRef.value,u()):null,h=()=>{Le(()=>{l.value&&(a?a.setOptions(u()):(a=c(),ge&&(window.addEventListener("animationend",h),window.addEventListener("transitionend",h))))})},O=d=>{l.value=d},v=()=>{e.trigger==="click"&&(l.value=!l.value)},B=(d,w)=>{d.disabled||(t("select",d,w),e.closeOnClickAction&&(l.value=!1))},m=()=>{l.value&&e.closeOnClickOutside&&(!e.overlay||e.closeOnClickOverlay)&&(l.value=!1)},p=(d,w)=>o.action?o.action({action:d,index:w}):[d.icon&&S(De,{name:d.icon,classPrefix:e.iconPrefix,class:J("action-icon")},null),S("div",{class:[J("action-text"),{[rt]:e.actionsDirection==="vertical"}]},[d.text])],g=(d,w)=>{const{icon:E,color:y,disabled:f,className:R}=d;return S("div",{role:"menuitem",class:[J("action",{disabled:f,"with-icon":E}),{[at]:e.actionsDirection==="horizontal"},R],style:{color:y},tabindex:f?void 0:0,"aria-disabled":f||void 0,onClick:()=>B(d,w)},[p(d,w)])};return de(()=>{h(),ut(()=>{var d;r.value=(d=s.value)==null?void 0:d.popupRef.value})}),Ie(()=>{a&&(ge&&(window.removeEventListener("animationend",h),window.removeEventListener("transitionend",h)),a.destroy(),a=null)}),Z(()=>[l.value,e.offset,e.placement],h),_e([i,r],m,{eventName:"touchstart"}),()=>{var d;return S(Pe,null,[S("span",{ref:i,class:J("wrapper"),onClick:v},[(d=o.reference)==null?void 0:d.call(o)]),S(Ut,Ae({ref:s,show:l.value,class:J([e.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,"onUpdate:show":O},n,ce(),$e(e,xo)),{default:()=>[e.showArrow&&S("div",{class:J("arrow")},null),S("div",{role:"menu",class:J("content",e.actionsDirection)},[o.default?o.default():e.actions.map(g)])]})])}}});const Uo=xe(Do),Io="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATBAMAAACNYFu4AAAAD1BMVEUAAAAaGhoZGRkcHBwaGhrTEB0KAAAABHRSTlMAgL9ARyeO/QAAAFlJREFUCNd1jMEJwEAIBNeQAnxYQOCugDxSQBLsv6YoRvFzCwfDzCFA8g6IDthEVac9Bjb99wBXsoXZWGv3gg9I4734BLX79YmNqbSH1B5SRwgdwXUFLqbQH4v/I6uEgEBtAAAAAElFTkSuQmCC",To="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAdBAMAAAAwW9POAAAAD1BMVEUAAAAaGhoZGRkcHBwaGhrTEB0KAAAABHRSTlMAgL9ARyeO/QAAAJlJREFUKM+V0cENgzAMQNGfJgMgyABIMEBpMwBJvP9MTUUxquGCDz48S7Zlw0v+ogMnYi1YqkRLBTnFDVpa016m96KUSdJ5AdxOlSBQAOYfFR4FV/CQlHzGNa1K8mQltMJ40MhILADxIDbyslMF5EtJqYC7Jl11GxkaeZiV2sBGriNZqkSl3Lc0RBnundDSbCWTLK1X37Y28QEkKG1CCYunvwAAAABJRU5ErkJggg==",Lo=""+new URL("视频封面-BKJhtq2B.png",import.meta.url).href,Po="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA7BAMAAAA+4E/6AAAAG1BMVEUAAAAAAAAaGhoAAAAcHBwZGRkAAAAAAAAaGhpnJfVvAAAAB3RSTlMAv4CAQL9Ah1wzdgAAAgFJREFUOMt9lb2L3DAQxSe73o8y4SBuxXIHLncxnFoXDqQM4Ra2NAR8bYxh1RqzBv3ZeSeNzrY+8grZkn6eefbIEi1UX29a/z5RQhlmjSYRnf+BqetzfXrBNRZkp/VbZW9PMWKD+WVHBPl5KEX85OdnYvT7vuV1iGKqyFMxrgL8irgWywBo/hdCD0TxEO62oohujyCY9+qfibWIF09XLgPFdeN3OyJDPAebKIYEsJtCC6GJ0MKWGzYBAIEu31iXht7VnUh23z9MDOxxBhQDuerZpWnRZwGQ6t6SUn/Lkl0WwwrYo+m2Sr2qzgFwUkqlnkrMlOSAs+qbTBurAs0BI6SQ2ALoUp4zoCPAu4LyMz6EAzDSWIBkLztkBPaVLFAlALUATJ8HcwDmmzylgE52rRExIDwA2aU1aYFbGsi0KxlGO3ImcblYwBa68IAvqIPMLTCRqynmHPDxmWXebwHsRlPuxxo4wAgDx5FX3gqQMMkp7GrNtCnAneZaKAN0Z9jjpbmNALCihVuahyXQSwY2+vP/2LdtQ1SWZ3TbZt/+KaFX65Fdhpr/qCz58wpvIwi2VmIdp3iGMYgV34KYDQNMHhxYHKLp5iFdpXZSHnl4vPB2/8l/YKz8BwJiHsoKJAhNTWI+XaLvrfX4jGuNUy08HfgsY71RXJsXM32tKa26rv3o/wAXnfhmPNPcfQAAAABJRU5ErkJggg==",Ho="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA7BAMAAAA+4E/6AAAAG1BMVEUAAAAAAAAAAAAaGhoAAAAcHBwZGRkAAAAaGhrC3QwGAAAAB3RSTlMAv4CAQEC/OXohiQAAAitJREFUOMt9lU+L8jAQxqPtqkcjC73WIHgtyC4eVQJee+mLx4WXFY/bsjDXQjHkY+80TTbNn+4Dpm3yyzMzIYlkpOr+kPL/gUzoBUeVRBEd/4dD97fq8I7PmMlCys+SKB1iRILj448iiO90hcRNz7dE53/7KbsWR1EST8fOMfiIZF2MDbD5y0K2fRta2NeSRPR4BmZe6b+BjZe/eMY4kSSuh65t1U0At6dOoZ0AFsJPIUzCpDBv2IlcdH+OP8b5bxKJIGkGQDfXGh85SWvK5gA1Y/mt1TmmgKr3QCnN0Q32G+i1HrLEdgC2GfQOs6xRKMILYYrIGsb4NvsmqGXWnKkDYCZQA+y2PZaTK3zPBgDLUOtVIIBqVIg12e+/lqCkAekD0Cyh4RcFlBrgVwDMoe6ThB6oKUWADECJ6zBU8YqdqQKU5QgAC5AlvM5Zr9MIoGixqw2w2YPSWgMFNnO2I5xzbBFoHECVeQWtzAH0OnwEwJZi/DPNE2lW8uwAZqlPiVrqW4sOGTCUAbRhvuh6YPVUQC8fWClgIRRAUQZIOcbc8dOxHXZeABAyw/kqPQWUNkStgaUCZKHPhwUaC5zUdjZ7jmth/WnfXBizJwqz9OWeqJfJw1u4F0F4tZq3lYhH6EKv8AqybGgg4rC1bZ1woYEsw5vU6Xl6fOHd/sKf0JX+hIAo7PwjBgiTEoX9d4nWLWX3hs/qXUoRvZsP0uiTxJXgXNS9ItOqqsp3/wFoIvVUmGavIAAAAABJRU5ErkJggg==",Vo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA7BAMAAAA+4E/6AAAAG1BMVEUAAAAAAAAaGhoAAAAcHBwZGRkAAAAAAAAaGhpnJfVvAAAAB3RSTlMAgIC/QL9A2jhu+QAAAiVJREFUOMt9lU1r4zAQhpU0yeYoU6ivJrTQY1jB+uqDF3IsSwM5upfsNUbguQZjg352Z/QRWx/ukNiy9WjmHY0ssZnV54tS/w5swTYXZWwskv1/sev8Wh/e8J5yslXqszLNQ4pYY//8oYjj06tl4kTjPaIPn0PJvov3UevzXvWeg4+E6mLuYGonXag7YykXU7NiCbsMkbMg9UdgVaSLpyoXgaXtYnPb9wvAabAS7gvAdowkxCKchC/8r16ujelZ8bmINTmSGWcrgJsFbOt0dxp3AMfsGaBFrgRn3Kik6xPAC2g7zoHt6JLIS9gtAx8I5O0DeBYCGSmE4BulpWKWLXRXo6FhX5lpZRnmaaeBRt+c9hyslTQRE9A8QkwAI4AuuxJy/hPAfuGTINOADrbygBxaZkbNAOGAgoCOXbWxKYQkwKYJrfxjPPAJAMzClQyEiIEWC+1mEh87YYBpohostKupEBlvQZYEYDFaoF/Dtr0u94DlxqUidWp6WWTokKZk37uVVwJwCVJYgNIsobOrdaM00EmdGsdJawn4DxLluaUJDgDOcgM8oQhV2KW5wzSPxgMV7kYA3n8r7/vIyDjDGW3ob1erVRma/0VtFj/ewt8I4q3VtfZjOkIf+Iq3oJj1t0YfjiXevXCxA1X5O2mkYAj4Itj9x3BAX4UDIqKYxr+rISFqLKbTJZm3Uv0r3ms81cLTwZ1lzj5Z2tZvuvtcs2Wr6zr0/g2KvQIgGahw3wAAAABJRU5ErkJggg==",Jo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAmBAMAAADHHv0VAAAAD1BMVEUAAAAaGhoZGRkcHBwaGhrTEB0KAAAABHRSTlMAgL9ARyeO/QAAAMVJREFUKM+dkVESgyAMRIP2ANhyAIocAKsHUMz9z9QlMR0d/7ozCm+XkAHI1I101oP9Gfu8XeLuGlOweBq8xIfNzOAeP3FrYi6w14a5FnK8o1crdrJmqZjhUw+FbQlZBeXYLGAUXOA2zP6KmoYDg6HWLrsgeyDGrpJ01xm8KMexIPAwPzlamWMIofVwmWtpdrndxsvIyZY8Wqj7gnWMelAeZ5oCb1Yj2srv/kHvU4upXjq6Sv/hJ6XMKSVvD6Za7TVVnu76AoHNImmdqkU6AAAAAElFTkSuQmCC",Xo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAmBAMAAABe5iSgAAAAD1BMVEUAAAAcHBwaGhoZGRkaGhrwn82kAAAABHRSTlMAQIC/o1TdDAAAAOhJREFUKM9lkosRgyAMhn10AM46ALQO4AEDIGb/mfqbkIba3GG8P18eRIfONj/cLde/0ES7hizzZLdSh8n7SPV6LoGxw7BMHJmRydiBQ5cG7wSDD0giB3pXTFxBGKdh7JD5QLTDZsKpOg4wro2WKglmErxU66kT1ZpUtbwDhnx01CXQzleonbRVns3hrTRpJg/sd6GZUianC9PJMJtc4Ku94wZs1ep208k3ItpCrJ9iliHak4BZvxiWxE3VFmLzUk1nIErOqkm7Yk17yTCT+GPepEkwkwwbU0r5TCkyVoRu5ux/eokFTnEfbt4vO/UHW8gAAAAASUVORK5CYII=",Ko="data:image/png;base64,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",ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAgBAMAAAARRx4IAAAAGFBMVEUAAAAaGhoZGRkcHBwZGRkaGhoZGRkaGhpNW/pJAAAAB3RSTlMAgL9A3+/AhgBm5gAAAJxJREFUGNOl0D0OwyAMBWC7DFlJOrDSdGBN06E36TkCRHrXb0yhwFYpTwLxCcv8UM4KTU2A2Ehh8h1dSzKwLflK/0at74rHDNROfGBHKLzg9uQdttDLMGGpHDzD6x9fkQwwFpqNxFLP92Np04GU4zS1ge3ofEdGb5O/Tsk0k3LfW7kwLgwp3xIBpEYmpuLRIW0MsTx/0pklJ8nS7wODYCIduD7zxwAAAABJRU5ErkJggg==",Yo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAD1BMVEUAAAAaGhocHBwZGRkaGhosrJd3AAAABHRSTlMAgEC/+QGcAgAAAQRJREFUKM9lUouxgzAMC+ENQO8xQAoZoLQZoCHaf6Ym/mD36juIEJbs+Bwk9hdwLMFHLKA4vrl2bLd/oBq54pnGOa24HGacDAabBBYTTaia6KpmJJ+ospMUkrjzkRu9JVHcIuWsb/loqjd11Lp/bZDaTdJm+g9XWyRJLH2UR1gfpCXjO707UxjgFuILpMrvwMV3oBUwzqeQYSqdTtxTJ5O/tCfF38jll+xdeZKrM2kzpwl1XkRAuiT5FFhFM6rMTdRLroJoKKwOk6BKQ2G1R4FVeeEncOOzVrXBD1Mbs6ptKbQLvYtbSsW2gA7GonCHX0Ac3XcraF/2FMrZCgO85D7itl3UB+8TL/NJg/KLAAAAAElFTkSuQmCC",No=""+new URL("SleekDoodle-BDhylhOG.png",import.meta.url).href,Qo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAD1BMVEUAAAAaGhoZGRkcHBwaGhrTEB0KAAAABHRSTlMAgL9ARyeO/QAAALRJREFUKM9lkd0NhDAMgxN6A0SoA/DTASrEAJTL/jMdZ4sIVD+00VcT3EagtLjPJqHNoSDq/iKp3OCsALuHvjD4Q3/LQHfGNl2AlZG3C9xWZYEdThlYffBBdD/Q4hStasIfZ7TaTdvmOCtYP6buBFylppEEgE3zAzRemgCaaxIpAIXE9GB/gjWbRgL41JLhrDF6fUQf3pczcARhEXkmjUADq0LeP3I/hn5Q/SiDrBLS0X2h/weG8VYCh2fL9gAAAABJRU5ErkJggg==",zo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbBAMAAAB/+ulmAAAAG1BMVEUAAAAaGhoZGRkcHBwbGxsbGxsZGRkaGhoaGhpSQ/O6AAAACHRSTlMAgL9AoHDfoEVyStcAAADXSURBVBjTTY+xTsQwEEQ3sUBX+kLjMjoal+YipJQnaK7kU/iE2BHS+2x2zEViCtvP3hnvmjRk2qsdekM6eIAzH5n5D+9Eo4RMET1zM0cv2oWJ3d1nG2lOgTsTUHNzk40tAJcMMW1m625JztzsVB03S8oYKYOb8xyIimQecIxaTff6DmgdV/iPCfgyPq8P3BeKewNFSD+kTSGaK47Na6qt1fruqFYy9WWConYGJrLi+UGmRLWJS1npkSe++/gBRdgTrWPiZtKVtrDII8kNHKR3keccCu8P+AUx405A/LkS7wAAAABJRU5ErkJggg==",Wo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAD1BMVEUAAAAaGhoZGRkcHBwaGhrTEB0KAAAABHRSTlMAgL9ARyeO/QAAAMBJREFUKM91ke0ZwiAMhKE4AFgGKMgAaDtASW//mUTCR/uo9y8v5LgQ8U/rfK0tkM71C1nHCSDFfEn3WiIKobAPh6SEiLfhgiUkS0/EWisYZC1YusVUQOggSVCAtg1kt/tDOrHtHeiSPuwjtzPGj6yWUOSpAmhpvHdQaK/WNCsigxoZsQZpM6j2ru1TbkcFd+51E98NHprNQQzwBdhdElK14jGnZI+Luy3nDKi0diC5d+xhAvmPTn/KGpsyrFn80hsYKSUY0kCBXgAAAABJRU5ErkJggg==",jo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcBAMAAABrFHmkAAAAD1BMVEUAAAAaGhocHBwZGRkaGhosrJd3AAAABHRSTlMAgEC/+QGcAgAAAK5JREFUGNNdkeEVgyAMhCk6QHk6ALUOUFsGKHL7z9SEA5pnfqj3JXcGdaNmlOhs7QDuFvhtQe4iLLX37COhT6/fqm8oC+rjTE+S9lxC1JbqSbQ8okgwog5k2pQrmJh3uDUT6J2rEni8GpgEPNQR+wS9Ox3MNcv9N08tgs0rOOViv8FOYC02lHYuOt4bedbhqHt45DFwMhrvptshfMKxRR9AL4kWNclHZAnO1jb+4g8srxwezeEgrAAAAABJRU5ErkJggg==",Fo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdBAMAAADSh8i3AAAAD1BMVEUAAAAaGhocHBwZGRkaGhosrJd3AAAABHRSTlMAgEC/+QGcAgAAAMlJREFUKM9Nj9sRgzAMBJ1AAWHsAgyhgEyiAgK6/muK9bgh+jBiZ6Wzy1W3hncp1dqeBKMWQR/tEahhqTLoaGc8XLLPhKaj3+HaHvJ+jkM+rsnXkbzGgS7asy93dD9u0K3Exkmdl/IENNB8elJxhv6PzF2XDMzBq3bP9QlWs9yIYomjZi4LjuZ8dt6U72VNmitD4x1CexPJl8m2lDu4VHNOqS84QqK9Vmj4LR8iAB4pZZ6Yw3GmQLfxqSYzT2AVhKwaOJIQbmu//n68TCKnPX026gAAAABJRU5ErkJggg==",Zo=""+new URL("厦门马拉松景点介绍-rAlMRUdJ.mp3",import.meta.url).href,T=e=>(wt("data-v-0ea7a456"),e=e(),bt(),e),qo={class:"challenge-mode"},_o={class:"top"},$o={class:"time"},en={class:"love"},tn={src:Io,alt:""},on={class:"km"},nn={class:"middle"},an=T(()=>A("div",{class:"vr"},[A("img",{src:To,alt:""})],-1)),rn={class:"bottom"},sn={class:"btn-box"},ln={class:"icon-box"},cn={src:Jo,alt:""},An={src:Xo,alt:""},un=["src"],fn={class:"right"},dn=T(()=>A("img",{src:Ko,alt:""},null,-1)),pn=T(()=>A("img",{src:Yo,alt:""},null,-1)),vn={class:"wrapper1"},hn={class:"header"},gn={class:"item"},mn=T(()=>A("span",null,"跑步时长",-1)),wn=T(()=>A("div",{class:"item"},[A("span",null,"消耗（千卡）"),A("span",null,"00：30：00")],-1)),bn=T(()=>A("div",{class:"item"},[A("span",null,"配速"),A("span",null,`7'300"`)],-1)),En=T(()=>A("div",{class:"middle"},[A("img",{class:"left",src:No,alt:""}),A("div",{class:"right"},[A("div",null,[A("span",null,"获得跑步币"),A("img",{src:Qo,alt:""})]),A("span",null,"15个")])],-1)),yn=T(()=>A("div",{class:"left"},[A("img",{src:zo,alt:""}),A("img",{src:Wo,alt:""}),A("img",{src:jo,alt:""}),A("img",{src:Fo,alt:""})],-1)),On=T(()=>A("img",{src:Et,alt:""},null,-1)),Bn=[On],Rn={__name:"index",setup(e){const t=b(null),o=b("00：00：00"),n=b(70),a=b(0),r=b(null),i=b(null),s=b(!1),l=b(!1),u=b(!1),c=dt();function h(){s.value?t.value.pause():t.value.play(),s.value=!s.value}function O(p){switch(p){case 0:i.value.play(),r.value=setInterval(()=>{n.value=m(),a.value+=.03},2e3);break;case 1:i.value.pause(),clearInterval(r.value);break;case 2:l.value=!0,i.value.pause(),clearInterval(r.value);break}}function v(){l.value=!1,c.back()}function B(){u.value=!1,c.push("/pk")}function m(){return Math.floor(Math.random()*31)+70}return de(()=>{i.value.addEventListener("timeupdate",function(){const p=Math.floor(i.value.currentTime),g=Math.floor(p/3600),d=Math.floor(p%3600/60),w=Math.floor(p%60);o.value=`${g.toString().padStart(2,"0")}：${d.toString().padStart(2,"0")}：${w.toString().padStart(2,"0")}`,p>=Math.floor(i.value.duration)&&clearInterval(r.value)},!1)}),(p,g)=>{const d=Uo,w=Ge;return ht(),pt("div",qo,[A("div",_o,[A("div",$o,_(C(o)),1),A("div",en,[j(A("img",tn,null,512),[[F,!C(l)]]),A("span",null,_(C(n))+"次/分",1)]),A("div",on,_(C(a).toFixed(2))+"km",1)]),A("div",nn,[an,j(A("video",{ref_key:"refVideo",ref:i,"x5-playsinline":"","x5-video-player-type":"h5","webkit-playsinline":"",playsinline:"",poster:Lo,src:"https://video-1318398344.cos.ap-nanjing.myqcloud.com/xiamen.mp4",preload:"auto"},null,512),[[F,!C(l)]])]),A("div",rn,[A("div",sn,[A("img",{src:Po,alt:"",onClick:g[0]||(g[0]=E=>O(0))}),A("img",{src:Ho,alt:"",onClick:g[1]||(g[1]=E=>O(1))}),A("img",{src:Vo,alt:"",onClick:g[2]||(g[2]=E=>O(2))})]),A("div",ln,[A("div",{class:"left",onClick:h},[j(A("img",cn,null,512),[[F,C(s)]]),j(A("img",An,null,512),[[F,!C(s)]]),A("audio",{ref_key:"refAudio",ref:t,loop:"loop",preload:"auto",src:C(Zo)},null,8,un)]),A("div",fn,[S(d,{show:C(u),"onUpdate:show":g[3]||(g[3]=E=>vt(u)?u.value=E:null),placement:"top"},{reference:se(()=>[pn]),default:se(()=>[A("div",{class:gt(["friend-box","friend-box-android"])},[dn,A("div",{class:"small-person"},[A("img",{src:ie,alt:"",onClick:B}),A("img",{src:ie,alt:"",onClick:B}),A("img",{src:ie,alt:"",onClick:B})])])]),_:1},8,["show"])])])]),S(w,{show:C(l),onClick:g[5]||(g[5]=E=>l.value=!1)},{default:se(()=>[A("div",vn,[A("div",{class:"block",onClick:g[4]||(g[4]=mt(()=>{},["stop"]))},[A("div",hn,[A("div",gn,[mn,A("span",null,_(C(o)),1)]),wn,bn]),En,A("div",{class:"bottom"},[yn,A("div",{class:"right",onClick:v},Bn)])])])]),_:1},8,["show"])])}}},Gn=ft(Rn,[["__scopeId","data-v-0ea7a456"]]);export{Gn as default};

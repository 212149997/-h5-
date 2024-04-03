import{c as D,m as A,n as E,t as J,i as T,e as G,j as P,w as O,k as $e,s as Be,l as Re,o as Me,q as Ae,r as ze,f as re,a as z,v as De,x as Oe,p as Y,C as Fe,y as ne,z as qe,u as Ne,b as We,A as je,h as Ge}from"./base-9da4d42c.js";import{s as oe,f as M,e as s,t as Ke,r as j,g as x,x as He,h as ce,y as Ye,z as W,m as Q,k as Ue,F as Je}from"./index-2c6307e7.js";import{I as R,u as Qe,F as Xe,a as Ze,b as pe}from"./index-536024e4.js";const et={to:[String,Object],url:String,replace:Boolean};function tt({to:e,url:n,replace:l,$router:c}){e&&c?c[l?"replace":"push"](e):n&&(l?location.replace(n):location.href=n)}function nt(){const e=oe().proxy;return()=>tt(e)}let at=0;function lt(){const e=oe(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return`${n}-${++at}`}const[it,B]=D("cell"),se={tag:A("div"),icon:String,size:String,title:E,value:E,label:E,center:Boolean,isLink:Boolean,border:J,iconPrefix:String,valueClass:T,labelClass:T,titleClass:T,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},rt=G({},se,et);var ot=M({name:it,props:rt,setup(e,{slots:n}){const l=nt(),c=()=>{if(n.label||P(e.label))return s("div",{class:[B("label"),e.labelClass]},[n.label?n.label():e.label])},a=()=>{var u;if(n.title||P(e.title)){const b=(u=n.title)==null?void 0:u.call(n);return Array.isArray(b)&&b.length===0?void 0:s("div",{class:[B("title"),e.titleClass],style:e.titleStyle},[b||s("span",null,[e.title]),c()])}},i=()=>{const u=n.value||n.default;if(u||P(e.value))return s("div",{class:[B("value"),e.valueClass]},[u?u():s("span",null,[e.value])])},L=()=>{if(n.icon)return n.icon();if(e.icon)return s(R,{name:e.icon,class:B("left-icon"),classPrefix:e.iconPrefix},null)},V=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const u=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return s(R,{name:u,class:B("right-icon")},null)}};return()=>{var u;const{tag:b,size:f,center:$,border:d,isLink:S,required:k}=e,h=(u=e.clickable)!=null?u:S,_={center:$,required:!!k,clickable:h,borderless:!d};return f&&(_[f]=!!f),s(b,{class:B(_),role:h?"button":void 0,tabindex:h?0:void 0,onClick:l},{default:()=>{var I;return[L(),a(),i(),V(),(I=n.extra)==null?void 0:I.call(n)]}})}}});const ct=O(ot);function ue(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function st(e,n){if(ue(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function ut(e,n){return new Promise(l=>{const c=n.validator(e,n);if(Me(c)){c.then(l);return}l(c)})}function ae(e,n){const{message:l}=n;return Ae(l)?l(e,n):l||""}function dt({target:e}){e.composing=!0}function le({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function ft(e,n){const l=$e();e.style.height="auto";let c=e.scrollHeight;if(Re(n)){const{maxHeight:a,minHeight:i}=n;a!==void 0&&(c=Math.min(c,a)),i!==void 0&&(c=Math.max(c,i))}c&&(e.style.height=`${c}px`,Be(l))}function gt(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function w(e){return[...e].length}function U(e,n){return[...e].slice(0,n).join("")}const[mt,y]=D("field"),bt={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:E,formatter:Function,clearIcon:A("clear"),modelValue:ze(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:A("focus"),formatTrigger:A("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},ht=G({},se,bt,{rows:E,type:A("text"),rules:Array,autosize:[Boolean,Object],labelWidth:E,labelClass:T,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var vt=M({name:mt,props:ht,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:l}){const c=lt(),a=Ke({status:"unvalidated",focused:!1,validateMessage:""}),i=j(),L=j(),V=j(),{parent:u}=re(Xe),b=()=>{var t;return String((t=e.modelValue)!=null?t:"")},f=t=>{if(P(e[t]))return e[t];if(u&&P(u.props[t]))return u.props[t]},$=x(()=>{const t=f("readonly");if(e.clearable&&!t){const r=b()!=="",o=e.clearTrigger==="always"||e.clearTrigger==="focus"&&a.focused;return r&&o}return!1}),d=x(()=>V.value&&l.input?V.value():e.modelValue),S=x(()=>{var t;const r=f("required");return r==="auto"?(t=e.rules)==null?void 0:t.some(o=>o.required):r}),k=t=>t.reduce((r,o)=>r.then(()=>{if(a.status==="failed")return;let{value:g}=d;if(o.formatter&&(g=o.formatter(g,o)),!st(g,o)){a.status="failed",a.validateMessage=ae(g,o);return}if(o.validator)return ue(g)&&o.validateEmpty===!1?void 0:ut(g,o).then(m=>{m&&typeof m=="string"?(a.status="failed",a.validateMessage=m):m===!1&&(a.status="failed",a.validateMessage=ae(g,o))})}),Promise.resolve()),h=()=>{a.status="unvalidated",a.validateMessage=""},_=()=>n("endValidate",{status:a.status,message:a.validateMessage}),I=(t=e.rules)=>new Promise(r=>{h(),t?(n("startValidate"),k(t).then(()=>{a.status==="failed"?(r({name:e.name,message:a.validateMessage}),_()):(a.status="passed",r(),_())})):r()}),K=t=>{if(u&&e.rules){const{validateTrigger:r}=u.props,o=ne(r).includes(t),g=e.rules.filter(m=>m.trigger?ne(m.trigger).includes(t):o);g.length&&I(g)}},me=t=>{var r;const{maxlength:o}=e;if(P(o)&&w(t)>+o){const g=b();if(g&&w(g)===+o)return g;const m=(r=i.value)==null?void 0:r.selectionEnd;if(a.focused&&m){const v=[...t],C=v.length-+o;return v.splice(m-C,C),v.join("")}return U(t,+o)}return t},F=(t,r="onChange")=>{const o=t;t=me(t);const g=w(o)-w(t);if(e.type==="number"||e.type==="digit"){const v=e.type==="number";t=Oe(t,v,v)}let m=0;if(e.formatter&&r===e.formatTrigger){const{formatter:v,maxlength:C}=e;if(t=v(t),P(C)&&w(t)>+C&&(t=U(t,+C)),i.value&&a.focused){const{selectionEnd:N}=i.value,te=U(o,N);m=w(v(te))-w(te)}}if(i.value&&i.value.value!==t)if(a.focused){let{selectionStart:v,selectionEnd:C}=i.value;if(i.value.value=t,P(v)&&P(C)){const N=w(t);g?(v-=g,C-=g):m&&(v+=m,C+=m),i.value.setSelectionRange(Math.min(v,N),Math.min(C,N))}}else i.value.value=t;t!==e.modelValue&&n("update:modelValue",t)},be=t=>{t.target.composing||F(t.target.value)},H=()=>{var t;return(t=i.value)==null?void 0:t.blur()},X=()=>{var t;return(t=i.value)==null?void 0:t.focus()},q=()=>{const t=i.value;e.type==="textarea"&&e.autosize&&t&&ft(t,e.autosize)},he=t=>{a.focused=!0,n("focus",t),W(q),f("readonly")&&H()},ve=t=>{a.focused=!1,F(b(),"onBlur"),n("blur",t),!f("readonly")&&(K("onBlur"),W(q),qe())},Z=t=>n("clickInput",t),ke=t=>n("clickLeftIcon",t),ye=t=>n("clickRightIcon",t),Se=t=>{Y(t),n("update:modelValue",""),n("clear",t)},p=x(()=>{if(typeof e.error=="boolean")return e.error;if(u&&u.props.showError&&a.status==="failed")return!0}),Ce=x(()=>{const t=f("labelWidth"),r=f("labelAlign");if(t&&r!=="top")return{width:z(t)}}),xe=t=>{t.keyCode===13&&(!(u&&u.props.submitOnEnter)&&e.type!=="textarea"&&Y(t),e.type==="search"&&H()),n("keypress",t)},ee=()=>e.id||`${c}-input`,Ve=()=>a.status,Ie=()=>{const t=y("control",[f("inputAlign"),{error:p.value,custom:!!l.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(l.input)return s("div",{class:t,onClick:Z},[l.input()]);const r={id:ee(),ref:i,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:f("disabled"),readonly:f("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${c}-label`:void 0,onBlur:ve,onFocus:he,onInput:be,onClick:Z,onChange:le,onKeypress:xe,onCompositionend:le,onCompositionstart:dt};return e.type==="textarea"?s("textarea",r,null):s("input",Q(gt(e.type),r),null)},we=()=>{const t=l["left-icon"];if(e.leftIcon||t)return s("div",{class:y("left-icon"),onClick:ke},[t?t():s(R,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},Pe=()=>{const t=l["right-icon"];if(e.rightIcon||t)return s("div",{class:y("right-icon"),onClick:ye},[t?t():s(R,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},_e=()=>{if(e.showWordLimit&&e.maxlength){const t=w(b());return s("div",{class:y("word-limit")},[s("span",{class:y("word-num")},[t]),Ue("/"),e.maxlength])}},Ee=()=>{if(u&&u.props.showErrorMessage===!1)return;const t=e.errorMessage||a.validateMessage;if(t){const r=l["error-message"],o=f("errorMessageAlign");return s("div",{class:y("error-message",o)},[r?r({message:t}):t])}},Le=()=>{const t=f("labelWidth"),r=f("labelAlign"),o=f("colon")?":":"";if(l.label)return[l.label(),o];if(e.label)return s("label",{id:`${c}-label`,for:l.input?void 0:ee(),onClick:g=>{Y(g),X()},style:r==="top"&&t?{width:z(t)}:void 0},[e.label+o])},Te=()=>[s("div",{class:y("body")},[Ie(),$.value&&s(R,{ref:L,name:e.clearIcon,class:y("clear")},null),Pe(),l.button&&s("div",{class:y("button")},[l.button()])]),_e(),Ee()];return Qe({blur:H,focus:X,validate:I,formValue:d,resetValidation:h,getValidationStatus:Ve}),He(Fe,{customValue:V,resetValidation:h,validateWithTrigger:K}),ce(()=>e.modelValue,()=>{F(b()),h(),K("onChange"),W(q)}),Ye(()=>{F(b(),e.formatTrigger),W(q)}),De("touchstart",Se,{target:x(()=>{var t;return(t=L.value)==null?void 0:t.$el})}),()=>{const t=f("disabled"),r=f("labelAlign"),o=we(),g=()=>{const m=Le();return r==="top"?[o,m].filter(Boolean):m||[]};return s(ct,{size:e.size,class:y({error:p.value,disabled:t,[`label-${r}`]:r}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:Ce.value,valueClass:y("value"),titleClass:[y("label",[r,{required:S.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:o&&r!=="top"?()=>o:null,title:g,value:Te,extra:l.extra})}}});const Bt=O(vt),[de,kt]=D("radio-group"),yt={shape:String,disabled:Boolean,iconSize:E,direction:String,modelValue:T,checkedColor:String},fe=Symbol(de);var St=M({name:de,props:yt,emits:["change","update:modelValue"],setup(e,{emit:n,slots:l}){const{linkChildren:c}=Ne(fe),a=i=>n("update:modelValue",i);return ce(()=>e.modelValue,i=>n("change",i)),c({props:e,updateValue:a}),We(()=>e.modelValue),()=>{var i;return s("div",{class:kt([e.direction]),role:"radiogroup"},[(i=l.default)==null?void 0:i.call(l)])}}});const Rt=O(St),ge={name:T,disabled:Boolean,iconSize:E,modelValue:T,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var Ct=M({props:G({},ge,{bem:je(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:J,indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:n,slots:l}){const c=j(),a=d=>{if(e.parent&&e.bindGroup)return e.parent.props[d]},i=x(()=>{if(e.parent&&e.bindGroup){const d=a("disabled")||e.disabled;if(e.role==="checkbox"){const S=a("modelValue").length,k=a("max"),h=k&&S>=+k;return d||h&&!e.checked}return d}return e.disabled}),L=x(()=>a("direction")),V=x(()=>{const d=e.checkedColor||a("checkedColor");if(d&&e.checked&&!i.value)return{borderColor:d,backgroundColor:d}}),u=x(()=>e.shape||a("shape")||"round"),b=d=>{const{target:S}=d,k=c.value,h=k===S||(k==null?void 0:k.contains(S));!i.value&&(h||!e.labelDisabled)&&n("toggle"),n("click",d)},f=()=>{var d,S;const{bem:k,checked:h,indeterminate:_}=e,I=e.iconSize||a("iconSize");return s("div",{ref:c,class:k("icon",[u.value,{disabled:i.value,checked:h,indeterminate:_}]),style:u.value!=="dot"?{fontSize:z(I)}:{width:z(I),height:z(I),borderColor:(d=V.value)==null?void 0:d.borderColor}},[l.icon?l.icon({checked:h,disabled:i.value}):u.value!=="dot"?s(R,{name:_?"minus":"success",style:V.value},null):s("div",{class:k("icon--dot__icon"),style:{backgroundColor:(S=V.value)==null?void 0:S.backgroundColor}},null)])},$=()=>{const{checked:d}=e;if(l.default)return s("span",{class:e.bem("label",[e.labelPosition,{disabled:i.value}])},[l.default({checked:d,disabled:i.value})])};return()=>{const d=e.labelPosition==="left"?[$(),f()]:[f(),$()];return s("div",{role:e.role,class:e.bem([{disabled:i.value,"label-disabled":e.labelDisabled},L.value]),tabindex:i.value?void 0:0,"aria-checked":e.checked,onClick:b},[d])}}});const xt=G({},ge,{shape:String}),[Vt,It]=D("radio");var wt=M({name:Vt,props:xt,emits:["update:modelValue"],setup(e,{emit:n,slots:l}){const{parent:c}=re(fe),a=()=>(c?c.props.modelValue:e.modelValue)===e.name,i=()=>{c?c.updateValue(e.name):n("update:modelValue",e.name)};return()=>s(Ct,Q({bem:It,role:"radio",parent:c,checked:a(),onToggle:i},e),Ge(l,["default","icon"]))}});const Mt=O(wt),[Pt,ie]=D("cell-group"),_t={title:String,inset:Boolean,border:J};var Et=M({name:Pt,inheritAttrs:!1,props:_t,setup(e,{slots:n,attrs:l}){const c=()=>{var i;return s("div",Q({class:[ie({inset:e.inset}),{[pe]:e.border&&!e.inset}]},l,Ze()),[(i=n.default)==null?void 0:i.call(n)])},a=()=>s("div",{class:ie("title",{inset:e.inset})},[n.title?n.title():e.title]);return()=>e.title||n.title?s(Je,null,[a(),c()]):c()}});const At=O(Et);export{At as C,Bt as F,Mt as R,Rt as a,ge as c,et as r,Ct as s,nt as u};
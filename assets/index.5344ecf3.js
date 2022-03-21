import{I as ve}from"./index.8ccfa1b5.js";import{M as fe}from"./index.ecb4c0fe.js";import{C as me}from"./index.4f55e45f.js";import{F as ye,u as be}from"./provide.053d917d.js";import{d as he,r as h,b as E,y as $,e as S,o as u,c as m,a as c,p as i,G as N,i as U,j as W,n as C,F as pe,k as ge,l as H,m as Ce,t as B,R as Ve,h as J,z as Fe}from"./vendor.49f89f0d.js";import{b as D,d as we}from"./shared.506a394a.js";import{a as ke}from"./components.721843ff.js";import{u as Me}from"./index.a504a888.js";import{b as K}from"./elements.92736b4e.js";import{_ as Se}from"./elevation.229458c1.js";function Be(e){return["left","right","center"].includes(e)}const De={modelValue:{default:void 0},placeholder:{type:String},multiple:{type:Boolean,default:!1},offsetY:{type:[String,Number],default:0},chip:{type:Boolean,default:!1},line:{type:Boolean,default:!0},hint:{type:Boolean,default:!0},textColor:{type:String},focusColor:{type:String},blurColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},separator:{type:String,default:","},textAlign:{type:String,default:"left",validator:Be},validateTrigger:{type:Array,default:()=>["onChange","onClear","onClose"]},rules:{type:Array},onFocus:{type:Function},onBlur:{type:Function},onClick:{type:Function},onClear:{type:Function},onClose:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const Te=he({name:"VarSelect",components:{VarIcon:ve,VarMenu:fe,VarChip:me,VarFormDetails:ye},props:De,setup(e){const n=h(null),v=h(!1),O=E(()=>e.multiple),Y=E(()=>e.focusColor),V=h(""),F=h([]),p=h("0px"),w=h(0),{bindForm:g,form:l}=be(),{length:Q,options:y,bindOptions:X}=Me(),{errorMessage:Z,validateWithTrigger:_,validate:x,resetValidation:T}=ke(),ee=()=>{const{multiple:a,modelValue:s}=e;if(a){const o=s;F.value=o.map(L)}!a&&!D(s)&&(V.value=L(s)),!a&&D(s)&&(V.value="")},b=a=>{Fe(()=>{const{validateTrigger:s,rules:o,modelValue:t}=e;_(s,a,o,t)})},k=({value:a,label:s})=>a.value!=null?a.value:s.value,L=a=>{let s=y.find(({value:o})=>o.value===a);return s||(s=y.find(({label:o})=>o.value===a)),s.label.value},le=()=>{const{hint:a,modelValue:s}=e;if(!a&&!D(s))return"var-select--placeholder-hidden";if(a&&(!D(s)||v.value))return"var-select--placeholder-hint"},ae=()=>n.value&&window.getComputedStyle(n.value).width||"0px",se=()=>{const a=n.value&&window.getComputedStyle(n.value).paddingTop||"0px";return K(a)*1.5},oe=()=>{const{disabled:a,readonly:s,onFocus:o}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||s||(p.value=ae(),w.value=se()+K(e.offsetY),v.value=!0,o==null||o(),b("onFocus"))},ne=()=>{const{disabled:a,readonly:s,onBlur:o}=e;(l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||s||(o==null||o(),b("onBlur"))},te=a=>{var d;const{disabled:s,readonly:o,multiple:t,onChange:r}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||s||o)return;const f=t?y.filter(({selected:M})=>M.value).map(k):k(a);(d=e["onUpdate:modelValue"])==null||d.call(e,f),r==null||r(f),b("onChange"),!t&&(v.value=!1)},re=()=>{var d;const{disabled:a,readonly:s,multiple:o,clearable:t,onClear:r}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||a||s||!t)return;const f=o?[]:void 0;(d=e["onUpdate:modelValue"])==null||d.call(e,f),r==null||r(f),b("onClear")},ie=a=>{const{disabled:s,onClick:o}=e;(l==null?void 0:l.disabled.value)||s||(o==null||o(a),b("onClick"))},ue=a=>{var R;const{disabled:s,readonly:o,modelValue:t,onClose:r}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||s||o)return;const f=t,d=y.find(({label:A})=>A.value===a),M=f.filter(A=>{var q;return A!==((q=d.value.value)!=null?q:d.label.value)});(R=e["onUpdate:modelValue"])==null||R.call(e,M),r==null||r(M),b("onClose")},P=()=>{const{multiple:a,modelValue:s}=e;if(a){const o=s;y.forEach(t=>t.sync(o.includes(k(t))))}else y.forEach(o=>o.sync(s===k(o)));ee()},de=()=>{v.value=!0},ce=()=>{v.value=!1},I=()=>x(e.rules,e.modelValue),j=()=>{var a;(a=e["onUpdate:modelValue"])==null||a.call(e,e.multiple?[]:void 0),T()};$(()=>e.multiple,()=>{const{multiple:a,modelValue:s}=e;if(a&&!we(s))throw Error("The modelValue must be an array when multiple is true")}),$(()=>e.modelValue,P,{deep:!0}),$(()=>Q.value,P);const G={wrapWidth:E(()=>p.value),multiple:O,focusColor:Y,onSelect:te,reset:j,validate:I,resetValidation:T};return X(G),g==null||g(G),{wrapEl:n,offsetY:w,isFocus:v,errorMessage:Z,formDisabled:l==null?void 0:l.disabled,label:V,labels:F,computePlaceholderState:le,handleFocus:oe,handleBlur:ne,handleClear:re,handleClick:ie,handleClose:ue,reset:j,validate:I,resetValidation:T,focus:de,blur:ce}}}),Ae={key:0},Ee={key:0,class:"var-select__chips"},$e={key:1,class:"var-select__values"},Ne={key:1},Ue={class:"var-select__scroller"};function We(e,n,v,O,Y,V){const F=S("var-chip"),p=S("var-icon"),w=S("var-menu"),g=S("var-form-details");return u(),m("div",{class:i(["var-select var--box",[e.formDisabled||e.disabled?"var-select--disabled":null]]),onClick:n[3]||(n[3]=(...l)=>e.handleClick&&e.handleClick(...l))},[c("div",{class:i(["var-select__controller",[e.isFocus?"var-select--focus":null,e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null]]),style:C({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},[c("div",{class:i(["var-select__icon",[e.hint?null:"var-select--non-hint"]])},[N(e.$slots,"prepend-icon")],2),U(w,{class:"var-select__menu","var-select-cover":"","offset-y":e.offsetY,show:e.isFocus,"onUpdate:show":n[2]||(n[2]=l=>e.isFocus=l),onClose:e.handleBlur},{menu:W(()=>[c("div",Ue,[N(e.$slots,"default")])]),default:W(()=>[c("div",{class:i(["var-select__wrap",[e.hint?null:"var-select--non-hint"]]),ref:"wrapEl",onClick:n[1]||(n[1]=(...l)=>e.handleFocus&&e.handleFocus(...l))},[c("div",{class:i(["var-select__select",[e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null]]),style:C({textAlign:e.textAlign,color:e.textColor})},[e.multiple?(u(),m("div",Ae,[e.chip?(u(),m("div",Ee,[(u(!0),m(pe,null,ge(e.labels,l=>(u(),H(F,{class:"var-select__chip","var-select-cover":"",closable:"",size:"small",type:e.errorMessage?"danger":void 0,key:l,onClick:n[0]||(n[0]=Ve(()=>{},["stop"])),onClose:()=>e.handleClose(l)},{default:W(()=>[Ce(B(l),1)]),_:2},1032,["type","onClose"]))),128))])):(u(),m("div",$e,B(e.labels.join(e.separator)),1))])):(u(),m("span",Ne,B(e.label),1)),U(p,{class:i(["var-select__arrow",[e.isFocus?"var-select--arrow-rotate":null]]),"var-select-cover":"",name:"menu-down",transition:300},null,8,["class"])],6),c("label",{class:i(["var-select__placeholder var--ellipsis",[e.isFocus?"var-select--focus":null,e.errorMessage?"var-select--error":null,e.formDisabled||e.disabled?"var-select--disabled":null,e.computePlaceholderState(),e.hint?null:"var-select--placeholder-non-hint"]]),style:C({color:e.errorMessage?void 0:e.isFocus?e.focusColor:e.blurColor})},B(e.placeholder),7)],2)]),_:3},8,["offset-y","show","onClose"]),c("div",{class:i(["var-select__icon",[e.hint?null:"var-select--non-hint"]])},[N(e.$slots,"append-icon",{},()=>[e.clearable?(u(),H(p,{key:0,class:"var-select__clear-icon",name:"close-circle",size:"14px",onClick:e.handleClear},null,8,["onClick"])):J("v-if",!0)])],2)],6),e.line?(u(),m("div",{key:0,class:i(["var-select__line",[e.formDisabled||e.disabled?"var-select--line-disabled":null,e.errorMessage?"var-select--line-error":null]]),style:C({background:e.errorMessage?void 0:e.blurColor})},[c("div",{class:i(["var-select__dot",[e.isFocus?"var-select--spread":null,e.formDisabled||e.disabled?"var-select--line-disabled":null,e.errorMessage?"var-select--line-error":null]]),style:C({background:e.errorMessage?void 0:e.focusColor})},null,6)],6)):J("v-if",!0),U(g,{"error-message":e.errorMessage},null,8,["error-message"])],2)}var z=Se(Te,[["render",We]]);z.install=function(e){e.component(z.name,z)};export{z as S};

!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/hide/banner"]=e():n["style/hide/banner"]=e()}(globalThis,(()=>(()=>{var n,e,t={944:(n,e,t)=>{var r=t(218)((function(n){return n[1]}));r.push([n.id,"#banner_link,\n.z-top-container.has-banner > .header,\n.custom-navbar .blur-layer,\n.bili-header__banner {\n  display: none !important;\n}\n\n#biliMainHeader {\n  min-height: unset !important;\n}\n\n.bili-header {\n  padding-top: 50px !important;\n  min-height: 0 !important;\n}\n\ndiv.blur-bg,\n.b-header-mask-wrp .b-header-mask-bg {\n  opacity: 0 !important;\n}\n\n.international-header .bili-banner,\n.international-home .bili-banner {\n  visibility: hidden !important;\n  height: 50px !important;\n  min-height: unset !important;\n}\n\n.nav-link .nav-link-ul .nav-link-item .link,\n.nav-user-center .user-con .item .name {\n  color: black !important;\n  text-shadow: none !important;\n}\nbody.dark .nav-link .nav-link-ul .nav-link-item .link,\nbody.dark .nav-user-center .user-con .item .name {\n  color: #eee !important;\n}",""]),n.exports=r},218:n=>{"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
e.i=function(n,t,r){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},701:(n,e,t)=>{var r=t(944);r&&r.__esModule&&(r=r.default),n.exports="string"==typeof r?r:r.toString()}},r={};function o(n){var e=r[n];if(void 0!==e)return e.exports;var i=r[n]={id:n,exports:{}};return t[n](i,i.exports,o),i.exports}e=Object.getPrototypeOf?n=>Object.getPrototypeOf(n):n=>n.__proto__,o.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var i=Object.create(null);o.r(i);var a={};n=n||[null,e({}),e([]),e(e)];for(var l=2&r&&t;"object"==typeof l&&!~n.indexOf(l);l=e(l))Object.getOwnPropertyNames(l).forEach((n=>a[n]=()=>t[n]));return a.default=()=>t,o.d(i,a),i},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),o.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var i={};return(()=>{"use strict";o.d(i,{component:()=>t});const n=coreApis.componentApis.define,e=coreApis.utils.urls,t=(0,n.defineComponentMetadata)({name:"hideBanner",entry:none,displayName:"隐藏顶部横幅",instantStyles:[{name:"hideBanner",style:()=>Promise.resolve().then(o.t.bind(o,701,23))}],tags:[componentsTags.style],description:{"zh-CN":"隐藏首页顶部横幅."},urlInclude:e.mainSiteUrls,commitHash:"c5852f8b917f22dab39f0a74b5a3f91fb17b4060",coreVersion:"2.8.8"})})(),i=i.component})()));
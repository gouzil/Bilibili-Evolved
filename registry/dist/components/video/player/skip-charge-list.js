!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/skip-charge-list"]=t():e["video/player/skip-charge-list"]=t()}(globalThis,(()=>(()=>{var e,t,o={152:(e,t,o)=>{var r=o(355)((function(e){return e[1]}));r.push([e.id,"body:not(.skip-charge-list-disable) .bilibili-player .bilibili-player-electric-panel,\nbody:not(.skip-charge-list-disable) #bilibili-player .bpx-player-electric-panel {\n  display: none !important;\n}",""]),e.exports=r},355:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var n={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var s=this[i][0];null!=s&&(n[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&n[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},813:(e,t,o)=>{var r=o(152);r&&r.__esModule&&(r=r.default),e.exports="string"==typeof r?r:r.toString()},391:e=>{"use strict";e.exports=coreApis.observer},200:e=>{"use strict";e.exports=coreApis.spinQuery}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={id:e,exports:{}};return o[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"==typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"==typeof o.then)return o}var i=Object.create(null);n.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>s[e]=()=>o[e]));return s.default=()=>o,n.d(i,s),i},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.d(i,{component:()=>a});const e=coreApis.componentApis.define,t=coreApis.componentApis.styledComponent,o=coreApis.utils.urls,r="skip-charge-list-disable",s=(0,t.styledComponentEntry)((()=>Promise.resolve().then(n.t.bind(n,813,23))),(async()=>{const{videoChange:e}=await Promise.resolve().then(n.t.bind(n,391,23)),{select:t}=await Promise.resolve().then(n.t.bind(n,200,23));e((async()=>{(await t("video"))?.addEventListener("ended",(async()=>{if(document.body.classList.contains(r))return;(await t(".bilibili-player-electric-panel-jump,.bpx-player-electric-jump"))?.click()}))}))})),a=(0,e.defineComponentMetadata)({name:"skipChargeList",displayName:"跳过充电鸣谢",tags:[componentsTags.video],entry:s,description:{"zh-CN":"自动跳过视频结尾的充电鸣谢. 注意: 不包括番剧承包鸣谢."},reload:()=>document.body.classList.remove(r),unload:()=>document.body.classList.add(r),urlInclude:o.playerUrls,commitHash:"90b4192e1e37ad443ced11ff9ea766712239a79f",coreVersion:"2.7.6"})})(),i=i.component})()));
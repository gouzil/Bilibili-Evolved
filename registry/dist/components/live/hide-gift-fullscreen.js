!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/hide-gift-fullscreen"]=t():e["live/hide-gift-fullscreen"]=t()}(globalThis,(()=>(()=>{var e,t,n={968:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,"#full-screen-interactive-wrap { \n    display: none !important \n}\n\n#fullscreen-danmaku-vm .fullscreen-danmaku { \n    bottom: 5px !important \n}",""]),e.exports=o},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},430:(e,t,n)=>{var o=n(968);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,r.d(i,a),i},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>n});const e=coreApis.componentApis.define,t=coreApis.utils.urls,n=(0,e.defineComponentMetadata)({name:"hide-fullscreen-gift-bar",displayName:"全屏直播礼物简化",description:"移除全屏观看直播时的底部礼物栏",author:{name:"TimmyOVO",link:"https://github.com/TimmyOVO"},instantStyles:[{name:"hide-fullscreen-gift",style:()=>Promise.resolve().then(r.t.bind(r,430,23))}],entry:none,tags:[componentsTags.live,componentsTags.style],urlInclude:t.liveUrls,commitHash:"81150a5c105515894b6e4ff49c9b73b9d8eb5eb0",coreVersion:"2.8.3"})})(),i=i.component})()));
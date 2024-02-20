!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/show-upload-time"]=t():e["video/player/show-upload-time"]=t()}(globalThis,(()=>(()=>{var e,t,n={708:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,".video-page-card .card-box .info .count.up {\n  white-space: pre !important;\n  display: flex !important;\n  height: auto !important;\n}\n\n.video-page-card-small .card-box .info .upname {\n  height: auto !important;\n}\n.video-page-card-small .card-box .info .upname a .name {\n  -webkit-line-clamp: unset !important;\n  white-space: pre !important;\n}",""]),e.exports=o},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},187:(e,t,n)=>{var o=n(708);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={id:e,exports:{}};return n[e](r,r.exports,i),r.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var r=Object.create(null);i.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,i.d(r,a),r},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";i.d(r,{component:()=>m});const e=coreApis.componentApis.define,t=coreApis.observer,n=coreApis.utils,o=coreApis.utils.urls,a=coreApis.componentApis.feeds.api,s=coreApis.componentApis.video.videoInfo,c=coreApis.utils.log,l=coreApis.settings,p="显示视频投稿时间",d=(0,c.useScopedConsole)(p),m=(0,e.defineComponentMetadata)({author:{name:"wisokey",link:"https://github.com/wisokey"},name:"showUploadTime",displayName:p,description:"为视频播放页面的推荐列表中的视频添加显示视频投稿时间.\n\n`时间格式` 替换up名的文本格式 (默认为'up · yyyy-MM-dd'):\n  - y: 年\n  - M: 月\n  - d: 日\n  - h: 时\n  - m: 分\n  - s: 秒\n  - q: 季度\n  - up: up名\n  - \\r: 回车符\n  - \\n：换行符\n  - \\t：制表符",tags:[componentsTags.video],urlInclude:o.videoUrls,options:{formatString:{displayName:"文本格式",defaultValue:"up · yyyy-MM-dd",validator:(e,t)=>e?.trim()?e:t}},instantStyles:[{name:"showUploadTime",style:()=>Promise.resolve().then(i.t.bind(i,187,23))}],entry:async e=>{let{metadata:o}=e;const i=(e,t,n)=>{const o={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3)},i={up:n,"\\\\r":"\r","\\\\n":"\n","\\\\t":"\t"};let r=t.match(/(y+)/);null!==r&&(t=t.replace(r[0],`${e.getFullYear()}`.substring(4-r[0].length)));for(const e in o)e&&(r=t.match(new RegExp(`(${e})`)),null!==r&&(t=t.replace(r[0],1===r[0].length?o[e]:`00${o[e]}`.substring(`${o[e]}`.length))));for(const e in i)e&&(r=t.match(new RegExp(`(${e})`)),null!==r&&(t=t.replace(r[0],i[e])));return t},r=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!n){const{options:e}=(0,l.getComponentSettings)(o.name);n=e.formatString?.toString()}e.forEach((async e=>{if(t||!e.item.owner.mark){if(e.item.owner.mark=!0,t||!e.mark){let t;if(e.mark=!0,e.item.ctime)t=new Date(1e3*e.item.ctime);else{const n=new s.VideoInfo(e.item.aid);await n.fetchInfo(),t=n.createTime,e.item.ctime=t.getTime()/1e3}e.oldname||(e.oldname=e.name),e.name=i(t,n,e.oldname)}e.item.owner.name=e.name}}))},c=()=>{const e=dq("#reco_list");let t=(0,a.getVueData)(e);return void 0===t.isOpen&&(t=t.$children[0],void 0===t.isOpen&&(d.log("结构获取失败"),d.log(document.URL),d.log(t))),t};(0,l.addComponentListener)(`${o.name}.formatString`,(e=>{const t=c().$children.filter((e=>-1===e.$el.className.indexOf("special")));r(t,!0,e)}),!1),(0,t.urlChange)((async()=>{await(0,n.playerReady)();const e=c().$children.filter((e=>-1===e.$el.className.indexOf("special")));r(e)})),await(0,n.playerReady)(),(0,t.childList)(dq("#reco_list .rec-list"),(async()=>{const e=c();if(e.isOpen){const t=e.$children.filter((e=>-1===e.$el.className.indexOf("special")));r(t)}}))},commitHash:"c5852f8b917f22dab39f0a74b5a3f91fb17b4060",coreVersion:"2.8.8"})})(),r=r.component})()));
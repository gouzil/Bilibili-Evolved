!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["live/badge-helper"]=n():e["live/badge-helper"]=n()}(globalThis,(()=>(()=>{var e,n,t={936:(e,n,t)=>{var l=t(218)((function(e){return e[1]}));l.push([e.id,".badge-popup {\n  top: 50%;\n  left: calc(100% + 8px);\n  transform: scale(0.9) translateY(-50%);\n  transform-origin: left;\n  padding: 4px;\n  max-height: calc(100vh - 150px);\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n  border-radius: 4px;\n}\nbody.dark .badge-popup {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .badge-popup {\n  background-color: #282828;\n  color: #eee;\n}\n.badge-popup::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.badge-popup.open {\n  transform: scale(1) translateY(-50%);\n}\nbody.settings-panel-dock-right .badge-popup {\n  right: calc(100% + 8px);\n  left: unset;\n  transform-origin: right;\n}\n.badge-popup, .badge-popup * {\n  transition: 0.2s ease-out;\n}\n.badge-popup ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.badge-popup ul li {\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 6px 8px;\n  display: flex;\n  justify-content: center;\n}\n.badge-popup ul li:hover {\n  background-color: rgba(136, 136, 136, 0.1333333333);\n}\n.badge-popup ul li.active {\n  box-shadow: 0 0 0px 1px var(--theme-color), 0 0 0px 3px var(--theme-color-20);\n}\n.badge-popup ul li.gray:not(:hover) {\n  filter: grayscale(1);\n}\n.badge-popup ul li .title-image {\n  display: inline-block;\n  vertical-align: middle;\n  height: 20px;\n}\n.badge-popup ul li .fans-medal-item {\n  display: flex !important;\n  height: 14px;\n  line-height: 14px;\n  color: #fff;\n  border: 1px solid #f6be18;\n  background-color: #f6be18;\n  border-left: 0;\n  white-space: nowrap;\n  border-radius: 2px;\n  flex-shrink: 0;\n  font-size: 12px;\n}\n.badge-popup ul li .fans-medal-item .label {\n  width: 40px;\n  text-align: center;\n  padding: 0 2px;\n  color: #fff;\n  border-radius: 1px 0 0 1px;\n  background-color: #f6be18;\n}\n.badge-popup ul li .fans-medal-item .level {\n  width: 16px;\n  background-color: #fff;\n  text-align: center;\n  color: #f6be18;\n  border-radius: 0 1px 1px 0;\n}\n.badge-popup ul li .fans-medal-item .label,\n.badge-popup ul li .fans-medal-item .level {\n  cursor: pointer;\n  position: relative;\n  display: block;\n  float: left;\n}\n.badge-popup ul li .level-1 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-1 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-1 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-2 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-2 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-2 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-3 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-3 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-3 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-4 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-4 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-4 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-5 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-5 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-5 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-6 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-6 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-6 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-7 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-7 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-7 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-8 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-8 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-8 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-9 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-9 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-9 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-10 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-10 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-10 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-11 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-11 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-11 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-12 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-12 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-12 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-13 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-13 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-13 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-14 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-14 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-14 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-15 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-15 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-15 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-16 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-16 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-16 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-17 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-17 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-17 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-18 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-18 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-18 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-19 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-19 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-19 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-20 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-20 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-20 .level {\n  color: #f6be18;\n}\n.badge-popup.medal ul {\n  grid-template-columns: repeat(var(--medal-columns, 2), 1fr);\n}\n.badge-popup.title ul {\n  grid-template-columns: repeat(var(--title-columns, 2), 1fr);\n}",""]),e.exports=l},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,l){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(l)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(o[i]=!0)}for(var r=0;r<e.length;r++){var d=[].concat(e[r]);l&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},867:(e,n,t)=>{"use strict";t.d(n,{j9:()=>p,Dx:()=>s,KK:()=>c,eB:()=>u});const l=coreApis.ajax;var o=t(605);const a=coreApis.utils.log;function i(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var l=t.call(e,n||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const r=(e,n)=>{if(0!==e.code){const t=`${n} 错误码:${e.code} ${e.message||""}`;return(0,a.logError)(t),!1}return!0};class d{constructor(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.isActive=e,this.id=n}}class p extends d{constructor(e){const{medal:{medal_id:n,level:t,medal_name:l,wearing_status:o,is_lighted:a},anchor_info:{nick_name:r},room_info:{room_id:d}}=e;super(1===o,n),i(this,"level",void 0),i(this,"name",void 0),i(this,"upName",void 0),i(this,"roomID",void 0),i(this,"isLighted",void 0),this.level=t,this.name=l,this.upName=r,this.roomID=d,this.isLighted=a}async activate(){const e=await(0,l.postTextWithCredentials)("https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear",new URLSearchParams({medal_id:this.id.toString(),csrf_token:(0,o.getCsrf)(),csrf:(0,o.getCsrf)()})),n=r(JSON.parse(e),"佩戴勋章失败.");return this.isActive=!0,n}async deactivate(){const e=await(0,l.postTextWithCredentials)("https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/take_off",new URLSearchParams({csrf_token:(0,o.getCsrf)(),csrf:(0,o.getCsrf)()})),n=r(JSON.parse(e),"卸下勋章失败.");return this.isActive=!1,n}}const c=async()=>(await(0,l.getPages)({api:e=>(0,l.getJsonWithCredentials)(`https://api.live.bilibili.com/xlive/app-ucenter/v1/fansMedal/panel?page=${e}&page_size=50`),getList:e=>(r(e,"无法获取勋章列表."),[...lodash.get(e,"data.list",[]),...lodash.get(e,"data.special_list",[])]),getTotal:e=>lodash.get(e,"data.total_number",0)})).map((e=>new p(e)));class s extends d{constructor(e){const{identification:n,wear:t,tid:l,cid:o,name:a,source:r}=e;super(t,n),i(this,"tid",void 0),i(this,"cid",void 0),i(this,"name",void 0),i(this,"source",void 0),i(this,"imageUrl",void 0),this.tid=l,this.cid=o,this.name=a,this.source=r,s.getImageMap().then((e=>{this.imageUrl=e[this.id]}))}static async getImageMap(){if(void 0===s.imageMap){const e=JSON.parse(await(0,l.getTextWithCredentials)("https://api.live.bilibili.com/rc/v1/Title/webTitles"));return r(e,"获取头衔图片失败.")?(s.imageMap={},e.data.forEach((e=>{s.imageMap[e.identification]=e.web_pic_url})),s.imageMap):{}}return s.imageMap}async activate(){const e=JSON.parse(await(0,l.postTextWithCredentials)("https://api.live.bilibili.com/i/ajaxWearTitle",`id=${this.tid}&cid=${this.cid}&csrf=${(0,o.getCsrf)()}&csrf_token=${(0,o.getCsrf)()}`));return!!r(e,"佩戴头衔失败.")&&(this.isActive=!0,!0)}async deactivate(){const e=JSON.parse(await(0,l.postTextWithCredentials)("https://api.live.bilibili.com/i/ajaxCancelWearTitle",`csrf=${(0,o.getCsrf)()}&csrf_token=${(0,o.getCsrf)()}`));return!!r(e,"卸下头衔失败.")&&(this.isActive=!1,!0)}}i(s,"imageMap",void 0);const u=async()=>{const e=JSON.parse(await(0,l.getTextWithCredentials)("https://api.live.bilibili.com/xlive/web-ucenter/v1/user_title/TitleList?normal=0&special=0&had=1&page=1&page_size=256"));return r(e,"无法获取头衔列表.")?lodash.get(e,"data.list",[]).map((e=>new s(e))):[]}},610:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>m});var l=function(){var e=this,n=e._self._c,t=e._self._setupProxy;return n("div",{ref:"element",staticClass:"multiple-widgets"},[n(t.VPopup,{ref:"medalPopup",staticClass:"badge-popup widgets-popup medal",attrs:{"trigger-element":e.$refs.medalButton},model:{value:t.medalOpen,callback:function(e){t.medalOpen=e},expression:"medalOpen"}},[n("ul",e._l(t.medalList,(function(l){return n("li",{key:l.id,class:{active:l.isActive,gray:t.grayEffect&&!l.isLighted},attrs:{"data-id":l.id,title:l.upName},on:{click:function(e){return t.toggleBadge(l,t.medalList)}}},[n("div",{staticClass:"fans-medal-item",class:["level-"+l.level]},[n("span",{staticClass:"label"},[e._v(e._s(l.name))]),e._v(" "),n("span",{staticClass:"level"},[e._v(e._s(l.level))])])])})),0)]),e._v(" "),n(t.DefaultWidget,{ref:"medalButton",attrs:{icon:"mdi-medal"},on:{click:function(e){t.medalOpen=!t.medalOpen}}},[n("span",[e._v("更换勋章")])]),e._v(" "),n(t.VPopup,{ref:"titlePopup",staticClass:"badge-popup widgets-popup title",attrs:{"trigger-element":e.$refs.titleButton},model:{value:t.titleOpen,callback:function(e){t.titleOpen=e},expression:"titleOpen"}},[n("ul",e._l(t.titleList,(function(e){return n("li",{key:e.id,class:{active:e.isActive},attrs:{"data-id":e.id},on:{click:function(n){return t.toggleBadge(e,t.titleList)}}},[n("img",{staticClass:"title-image",attrs:{src:e.imageUrl}})])})),0)]),e._v(" "),n(t.DefaultWidget,{ref:"titleButton",attrs:{icon:"mdi-script-outline"},on:{click:function(e){t.titleOpen=!t.titleOpen}}},[n("span",[e._v("更换头衔")])])],1)};l._withStripped=!0;const o=globalThis.Vue;var a=t(986);const i=coreApis.utils.sort,r=coreApis.ui;var d=t(867);const p=(0,o.defineComponent)({__name:"BadgeHelper",setup(e){const{options:n}=(0,a.getComponentSettings)("badgeHelper"),t=(0,o.ref)(),l=(0,o.ref)([]),p=(0,o.ref)([]),c=(0,o.ref)(!1),s=(0,o.ref)(!1),u=(0,o.ref)(!0),b=()=>{const e=Math.min(Math.ceil(l.value.length/18),15);t.value.style.setProperty("--medal-columns",e.toString());const n=Math.min(Math.ceil(p.value.length/18),15);t.value.style.setProperty("--title-columns",n.toString())},f=async()=>{l.value=(await(0,d.KK)()).sort((0,i.descendingSort)((e=>e.level))).slice(0,n.maxBadgeCount)},g=async()=>{p.value=(await(0,d.eB)()).slice(0,n.maxBadgeCount)};return(0,o.onMounted)((async()=>{(0,a.addComponentListener)("badgeHelper.grayEffect",(e=>{u.value=e}),!0);await(async()=>{const e=f();await d.Dx.getImageMap();const n=g();return Promise.all([e,n])})(),b()})),{__sfc:!0,options:n,element:t,medalList:l,titleList:p,medalOpen:c,titleOpen:s,grayEffect:u,updateColumnsCount:b,loadMedalList:f,loadTitleList:g,toggleBadge:async(e,t)=>{if(console.log(e),e.isActive)e.isActive=!1,await e.deactivate();else{const l=t.find((e=>e.isActive));l&&(l.isActive=!1),e.isActive=!0,await e.activate(),e instanceof d.j9&&(n.defaultMedalID=e.id)}e instanceof d.j9?await f():e instanceof d.Dx&&await g()},DefaultWidget:r.DefaultWidget,VPopup:r.VPopup}}}),c=p;var s=t(332),u=t.n(s),b=t(936),f=t.n(b),g={insert:"head",singleton:!1};u()(f(),g);f().locals;var v=function(e,n,t,l,o,a,i,r){var d,p="function"==typeof e?e.options:e;if(n&&(p.render=n,p.staticRenderFns=t,p._compiled=!0),l&&(p.functional=!0),a&&(p._scopeId="data-v-"+a),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},p._ssrRegister=d):o&&(d=r?function(){o.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:o),d)if(p.functional){p._injectStyles=d;var c=p.render;p.render=function(e,n){return d.call(n),c(e,n)}}else{var s=p.beforeCreate;p.beforeCreate=s?[].concat(s,d):[d]}return{exports:e,options:p}}(c,l,[],!1,null,null,null);const m=v.exports},332:(e,n,t)=>{"use strict";var l,o=function(){return void 0===l&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
l=Boolean(window&&document&&document.all&&!window.atob)),l},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function r(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},l=[],o=0;o<e.length;o++){var a=e[o],d=n.base?a[0]+n.base:a[0],p=t[d]||0,c="".concat(d," ").concat(p);t[d]=p+1;var s=r(c),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(i[s].references++,i[s].updater(u)):i.push({identifier:c,updater:v(u,n),references:1}),l.push(c)}return l}function p(e){var n=document.createElement("style"),l=e.attributes||{};if(void 0===l.nonce){var o=t.nc;o&&(l.nonce=o)}if(Object.keys(l).forEach((function(e){n.setAttribute(e,l[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var c,s=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function u(e,n,t,l){var o=t?"":l.media?"@media ".concat(l.media," {").concat(l.css,"}"):l.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function b(e,n,t){var l=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(l+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=l;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(l))}}var f=null,g=0;function v(e,n){var t,l,o;if(n.singleton){var a=g++;t=f||(f=p(n)),l=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=p(n),l=b.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return l(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;l(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var l=0;l<t.length;l++){var o=r(t[l]);i[o].references--}for(var a=d(e,n),p=0;p<t.length;p++){var c=r(t[p]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}t=a}}}},984:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=984,e.exports=n},235:e=>{"use strict";e.exports="在直播区中, 可从功能面板中直接切换勋章和头衔. 默认显示 256 个 (同时也是上限), 可在选项中修改.\n"},986:e=>{"use strict";e.exports=coreApis.settings},605:e=>{"use strict";e.exports=coreApis.utils}},l={};function o(e){var n=l[e];if(void 0!==n)return n.exports;var a=l[e]={id:e,exports:{}};return t[e](a,a.exports,o),a.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(t,l){if(1&l&&(t=this(t)),8&l)return t;if("object"==typeof t&&t){if(4&l&&t.__esModule)return t;if(16&l&&"function"==typeof t.then)return t}var a=Object.create(null);o.r(a);var i={};e=e||[null,n({}),n([]),n(n)];for(var r=2&l&&t;"object"==typeof r&&!~e.indexOf(r);r=n(r))Object.getOwnPropertyNames(r).forEach((e=>i[e]=()=>t[e]));return i.default=()=>t,o.d(a,i),a},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.d(a,{component:()=>i});const e=coreApis.componentApis.define;var n=o(605),t=o(867);const l=(0,e.defineOptionsMetadata)({autoMatchMedal:{defaultValue:!0,displayName:"自动佩戴当前直播间勋章"},maxBadgeCount:{defaultValue:256,displayName:"最大显示数量",validator:(0,n.getNumberValidator)(1,256)},defaultMedalID:{displayName:"默认勋章ID",hidden:!0,defaultValue:0},grayEffect:{displayName:"显示勋章的未点亮状态",defaultValue:!0}}),i=(0,e.defineComponentMetadata)({name:"badgeHelper",displayName:"直播勋章快速更换",entry:()=>(async()=>{const{getUID:e}=await Promise.resolve().then(o.t.bind(o,605,23));if(!e())return;const{getComponentSettings:n}=await Promise.resolve().then(o.t.bind(o,986,23)),{options:l}=n("badgeHelper");if(!l.autoMatchMedal)return;const a=document.URL.match(/^https:\/\/live\.bilibili\.com\/(blanc\/)?([\d]+)/);if(!a)return;const i=parseInt(a[2]);if(Number.isNaN(i))return void console.warn("roomID not found");const r=await(0,t.KK)();if(!l.defaultMedalID){const e=r.find((e=>e.isActive));e&&(l.defaultMedalID=e.id,console.log(`set defaultMedalID to activeMedal (${e.id})`))}const d=l.defaultMedalID?r.find((e=>e.id===l.defaultMedalID)):r.find((e=>e.isActive)),p=r.find((e=>e.roomID===i));p?(await p.activate(),console.log(`activated matchMedal (${p.id})`)):d&&(await d.activate(),console.log(`no matchMedal, fallback to defaultMedal (${d.id})`))})(),reload:n.none,unload:n.none,tags:[componentsTags.live],widget:{component:()=>Promise.resolve().then(o.bind(o,610)).then((e=>e.default)),condition:()=>Boolean((0,n.getUID)())},options:l,urlInclude:["//live.bilibili.com"],commitHash:"d2a3aa28739c211f5e00369fdba8d137d1c70798",coreVersion:"2.8.9",description:(()=>{const e=o(984);return{...Object.fromEntries(e.keys().map((n=>[n.match(/index\.(.+)\.md$/)[1],e(n)]))),"zh-CN":()=>Promise.resolve().then(o.t.bind(o,235,17)).then((e=>e.default))}})()})})(),a=a.component})()));
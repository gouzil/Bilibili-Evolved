!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/pip"]=t():e["live/pip"]=t()}(self,(function(){return function(){var e={580:function(e,t,n){var r=n(645)((function(e){return e[1]}));r.push([e.id,".live-pip .be-icon {\n  transform: scale(0.9);\n}",""]),e.exports=r},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,r){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},379:function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var f=a(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(c[f].references++,c[f].updater(d)):c.push({identifier:l,updater:h(d,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var i=m++;n=v||(v=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);c[o].references--}for(var i=u(e,t),s=0;s<n.length;s++){var l=a(n[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}n=i}}}},573:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("DefaultWidget",{staticClass:"live-pip",attrs:{name:"画中画",icon:"mdi-picture-in-picture-bottom-right"},on:{click:function(t){return e.togglePip()}}})};r._withStripped=!0;var o=coreApis.ui,i=Vue.extend({components:{DefaultWidget:o.DefaultWidget},methods:{async togglePip(){document.pictureInPictureElement?document.exitPictureInPicture():dq("video")?.requestPictureInPicture()}}}),c=n(379),a=n.n(c),u=n(580),s=n.n(u),l={insert:"head",singleton:!1};a()(s(),l),s().locals;var f=function(e,t,n,r,o,i,c,a){var u,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),c?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},s._ssrRegister=u):o&&(u=a?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(e,t){return u.call(t),l(e,t)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:s}}(i,r,[],!1,null,null,null);f.options.__file="registry/lib/components/live/pip/LivePip.vue";var d=f.exports}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";n.d(r,{component:function(){return t}});var e=coreApis.utils.urls;const t={name:"livePip",displayName:"直播画中画",description:{"zh-CN":"在直播间的功能面板中启用画中画支持, 不过现在好像 b 站已经直接支持了, 后续可能会删掉这个功能."},entry:none,tags:[componentsTags.live],widget:{component:()=>Promise.resolve().then(n.bind(n,573)).then((e=>e.default)),condition:()=>"requestPictureInPicture"in HTMLVideoElement.prototype},urlInclude:e.liveUrls,commitHash:"4658ecf336608845ee052ef7b2c8ec097b3ffd35"}}(),r=r.component}()}));
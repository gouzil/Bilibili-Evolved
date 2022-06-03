!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/url-params-clean"]=t():e["utils/url-params-clean"]=t()}(self,(function(){return function(){"use strict";var e,t,r={110:function(e){e.exports=coreApis.lifeCycle},391:function(e){e.exports=coreApis.observer}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){a[e]=function(){return r[e]}}));return a.default=function(){return r},n.d(i,a),i},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){n.d(i,{component:function(){return a}});var e=coreApis.pluginApis.data,t=coreApis.utils;const r="网址参数清理",o=(0,coreApis.utils.log.useScopedConsole)(r),a={name:"urlParamsClean",displayName:r,entry:async()=>{if((0,t.isNotHtml)()||(0,t.isIframe)())return;const[r]=(0,e.registerAndGetData)("urlParamsClean.noClean",["videocard_series"]),[i]=(0,e.registerAndGetData)("urlParamsClean.params",["spm_id_from","from_source","from_spmid","from","seid","share_source","share_medium","share_plat","share_tag","share_session_id","bbid","ts","timestamp","unique_k","rt","tdsourcetag","accept_quality","broadcast_type","current_qn","current_quality","playurl_h264","playurl_h265","quality_description","network","network_status","platform_network_status","p2p_type","referfrom","visit_id","bsource","spm","hotRank","-Arouter"]),[a]=(0,e.registerAndGetData)("urlParamsClean.siteSpecifiedParams",[{match:/\/\/www\.bilibili\.com\/audio\/(au[\d]+|mycollection)/,param:"type"},{match:/\/\/live\.bilibili\.com\//,param:"session_id"},{match:/\/\/www\.bilibili\.com\/bangumi\//,param:"theme"}]),[s]=(0,e.registerAndGetData)("urlParamsClean.tailingSlash",[]),{fullyLoaded:c}=await Promise.resolve().then(n.t.bind(n,110,23)),{urlChange:l}=await Promise.resolve().then(n.t.bind(n,391,23));c((()=>{l((()=>(()=>{const e=window.location.search.substring(1).split("&");if(e.some((e=>r.some((t=>e.includes(t))))))return;const n=e.filter((e=>!i.some((t=>e.startsWith(`${t}=`)))&&!a.some((t=>{let{match:r,param:o}=t;return document.URL.match(r)&&e.startsWith(`${o}=`)})))).join("&");let c=document.URL.replace(window.location.search,"");s.forEach((e=>{let{match:r}=e;(0,t.matchPattern)(c,r)&&c.endsWith("/")&&(c=c.slice(0,c.length-1))}));const l=c+(n?`?${n}`:"");l!==document.URL&&(o.log(document.URL,l),window.history.replaceState({},document.title,l))})()))}))},description:{"zh-CN":"自动删除网址中的多余跟踪参数. 请注意这会导致浏览器历史记录出现重复的标题 (分别是转换前后的网址)."},tags:[componentsTags.utils],urlExclude:[/game\.bilibili\.com\/fgo/,/live\.bilibili\.com\/p\/html\/live-app-hotrank\//],commitHash:"24744b2032b902d1ce2a5c978dc22325a014b92b",coreVersion:"2.2.1"}}(),i=i.component}()}));
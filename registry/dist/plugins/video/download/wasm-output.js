!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/wasm-output"]=t():e["video/download/wasm-output"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{plugin:()=>S});const o=coreApis.toast,n=coreApis.download,a=coreApis.meta;function r(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t,o){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,o)}function s(e,t,o){return function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=o}}(e,l(e,t,"set"),o),o}function c(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}
/* eslint-disable @typescript-eslint/naming-convention */(e,l(e,t,"get"))}function l(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}const u=(()=>{let e=0;return()=>e++})();var d=function(e){return e.LOAD="LOAD",e.EXEC="EXEC",e.WRITE_FILE="WRITE_FILE",e.READ_FILE="READ_FILE",e.ERROR="ERROR",e}(d||{}),p=new WeakMap,f=new WeakMap,h=new WeakMap,w=new WeakMap,m=new WeakMap;const g=coreApis.utils.formatters,y={cache:"cache"};async function b(e,t){return async function(){return new Promise(((e,t)=>{const o=unsafeWindow.indexedDB.open("bilibili-evolved-wasm-output",124);o.onerror=t,o.onupgradeneeded=()=>{const e=o.result;for(const t of e.objectStoreNames)e.deleteObjectStore(t);Object.values(y).forEach((t=>{e.createObjectStore(t)}))},o.onsuccess=()=>e(o.result)}))}().then((o=>new Promise(((n,a)=>{const r=o.transaction(e,t);n(r.objectStore(e)),r.onerror=a}))))}async function v(e,t,o){const n=await b(e).then((e=>async function(e,t){return new Promise(((o,n)=>{const a=e.get(t);a.onerror=n,a.onsuccess=()=>o(a.result)}))}(e,t)));if(n)return n;const a=await o(t);return await b(e,"readwrite").then((e=>async function(e,t,o){return new Promise(((n,a)=>{const r=e.put(t,o);r.onerror=a,r.onsuccess=()=>n(r.result)}))}(e,a,t))),a}function E(e,t){return(o,n)=>{e.message=`${t}: ${(0,g.formatFileSize)(o)}${n>0?` / ${(0,g.formatFileSize)(n)} @ ${(0,g.formatPercent)(o/n)}`:""}`}}async function F(e,t){const o=await fetch(e);if(!o.ok)throw new Error(`${o.status} ${o.statusText}`);const n=o.body.getReader(),a=o.headers.get("Content-Encoding")?-1:parseInt(o.headers.get("Content-Length"));let r=0;const i=[];
// eslint-disable-next-line no-constant-condition
for(;;){const{done:e,value:o}=await n.read();if(e)break;i.push(o),r+=o.length,t(r,a)}const s=new Uint8Array(r);let c=0;for(const e of i)s.set(e,c),c+=e.length;return s}async function R(e,t,o){return v(y.cache,e,(async()=>F(t,o)))}function k(e,t){const o=new Blob([e],{type:t});return URL.createObjectURL(o)}const A=new class{constructor(){var e=this;i(this,p,{writable:!0,value:null}),i(this,f,{writable:!0,value:{}}),i(this,h,{writable:!0,value:{}}),r(this,"loaded",!1),i(this,w,{writable:!0,value:()=>{c(this,p)&&(c(this,p).onmessage=e=>{let{data:{id:t,type:o,data:n}}=e;switch(o){case d.LOAD:this.loaded=!0,c(this,f)[t](n);break;case d.EXEC:case d.WRITE_FILE:case d.READ_FILE:c(this,f)[t](n);break;case d.ERROR:c(this,h)[t](n)}delete c(this,f)[t],delete c(this,h)[t]})}}),i(this,m,{writable:!0,value:function(t){let{type:o,data:n}=t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return c(e,p)?new Promise(((t,i)=>{const s=u();c(e,p)&&c(e,p).postMessage({id:s,type:o,data:n},a),c(e,f)[s]=t,c(e,h)[s]=i,r?.addEventListener("abort",(()=>{i(new DOMException(`Message # ${s} was aborted`,"AbortError"))}),{once:!0})})):Promise.reject(new Error("FFmpeg is not loaded"))}}),r(this,"load",((e,t)=>(c(this,p)||(s(this,p,new Worker(e.workerLoadURL,{type:"classic"})),c(this,w).call(this)),c(this,m).call(this,{type:d.LOAD,data:e},void 0,t)))),r(this,"exec",(function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2?arguments[2]:void 0;return c(e,m).call(e,{type:d.EXEC,data:{args:t,timeout:o}},void 0,n)})),r(this,"terminate",(()=>{const e=Object.keys(c(this,h));for(const t of e)c(this,h)[t](new Error("FFmpeg terminated")),delete c(this,h)[t],delete c(this,f)[t];c(this,p)&&(c(this,p).terminate(),s(this,p,null),this.loaded=!1)})),r(this,"writeFile",((e,t,o)=>{const n=[];return n.push(t.buffer),c(this,m).call(this,{type:d.WRITE_FILE,data:{path:e,data:t}},n,o)})),r(this,"readFile",((e,t)=>c(this,m).call(this,{type:d.READ_FILE,data:{path:e,encoding:"binary"}},void 0,t)))}};async function L(e,t,o,r,i){A.loaded||await async function(e){await A.load({workerLoadURL:k(await R("ffmpeg-worker",a.meta.compilationInfo.altCdn.library.ffmpeg.worker,E(e,"正在加载 FFmpeg Worker")),"text/javascript"),coreURL:k(await R("ffmpeg-core",a.meta.compilationInfo.altCdn.library.ffmpeg.core,E(e,"正在加载 FFmpeg Core")),"text/javascript"),wasmURL:k(await R("ffmpeg-wasm",a.meta.compilationInfo.altCdn.library.ffmpeg.wasm,E(e,"正在加载 FFmpeg WASM")),"application/wasm")})}(t),A.writeFile("video",await F(o,E(t,"正在下载视频流"))),A.writeFile("audio",await F(r,E(t,"正在下载音频流"))),t.message="混流中……";const s=i?"mkv":"mp4";e=i?e.replace(/.[^/.]+$/,`.${s}`):e,await A.exec(["-i","video","-i","audio","-c:v","copy","-c:a",i?"flac":"copy","-f",i?"matroska":"mp4",`output.${s}`]);const c=await A.readFile(`output.${s}`),l=new Blob([c],{type:i?"video/x-matroska":"video/mp4"});t.message="完成！",t.duration=1500,await n.DownloadPackage.single(e,l)}const j=coreApis.settings,x="WASM 混流输出",W="使用 WASM 在浏览器中下载并合并音视频",S={name:"downloadVideo.outputs.wasm",displayName:`下载视频 - ${x}`,description:W,author:{name:"WakelessSloth56",link:"https://github.com/WakelessSloth56"},setup:e=>{let{addData:t}=e;t("downloadVideo.outputs",(e=>{e.push({name:"wasm",displayName:"WASM",description:`${W}，运行过程中请勿关闭页面，初次使用或清除缓存后需要加载约 30 MB 的 WASM 文件`,runAction:async e=>{const t=e.infos.flatMap((e=>e.titledFragments)),{dashAudioExtension:n,dashFlacAudioExtension:a,dashVideoExtension:r}=(0,j.getComponentSettings)("downloadVideo").options;if(t.length>2||2===t.length&&(t[0].extension!==r||t[1].extension!==n&&t[1].extension!==a))o.Toast.error("仅支持单个视频下载",x).duration=1500;else{const e=o.Toast.info("正在加载",x);try{2===t.length?await L(t[0].title,e,t[0].url,t[1].url,t[1].extension===a):(e.type=o.ToastType.Error,e.message="仅支持 dash 格式视频下载",e.duration=1500)}catch(t){e.close(),o.Toast.error(String(t),x)}}}})}))},commitHash:"f539020624c731a30f1c5b3d77a0b0ed514dfce0",coreVersion:"2.8.12"};return t=t.plugin})()));
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/download/wasm-output"]=e():t["video/download/wasm-output"]=e()}(globalThis,(()=>(()=>{"use strict";var t={d:(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{plugin:()=>A});const a=coreApis.toast,o=coreApis.download,i=coreApis.meta;function n(t,e,a){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var o=a.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e,a){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,a)}function s(t,e,a){return function(t,e,a){if(e.set)e.set.call(t,a);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=a}}(t,c(t,e,"set"),a),a}function l(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}
/* eslint-disable @typescript-eslint/naming-convention */(t,c(t,e,"get"))}function c(t,e,a){if(!e.has(t))throw new TypeError("attempted to "+a+" private field on non-instance");return e.get(t)}const d=(()=>{let t=0;return()=>t++})();var u=function(t){return t.LOAD="LOAD",t.EXEC="EXEC",t.WRITE_FILE="WRITE_FILE",t.READ_FILE="READ_FILE",t.ERROR="ERROR",t}(u||{}),p=new WeakMap,f=new WeakMap,h=new WeakMap,w=new WeakMap,m=new WeakMap;const g=coreApis.utils.formatters;function y(t,e){return(a,o)=>{t.message=`${e}: ${(0,g.formatFileSize)(a)}${o>0?` / ${(0,g.formatFileSize)(o)} @ ${(0,g.formatPercent)(a/o)}`:""}`}}async function b(t,e){const a=await fetch(t);if(!a.ok)throw new Error(`${a.status} ${a.statusText}`);const o=a.body.getReader(),i=a.headers.get("Content-Encoding")?-1:parseInt(a.headers.get("Content-Length"));let n=0;const r=[];
// eslint-disable-next-line no-constant-condition
for(;;){const{done:t,value:a}=await o.read();if(t)break;r.push(a),n+=a.length,e(n,i)}const s=new Uint8Array(n);let l=0;for(const t of r)s.set(t,l),l+=t.length;return s}async function v(t,e,a){const o=await b(t,a),i=new Blob([o],{type:e});return URL.createObjectURL(i)}const E=new class{constructor(){var t=this;r(this,p,{writable:!0,value:null}),r(this,f,{writable:!0,value:{}}),r(this,h,{writable:!0,value:{}}),n(this,"loaded",!1),r(this,w,{writable:!0,value:()=>{l(this,p)&&(l(this,p).onmessage=t=>{let{data:{id:e,type:a,data:o}}=t;switch(a){case u.LOAD:this.loaded=!0,l(this,f)[e](o);break;case u.EXEC:case u.WRITE_FILE:case u.READ_FILE:l(this,f)[e](o);break;case u.ERROR:l(this,h)[e](o)}delete l(this,f)[e],delete l(this,h)[e]})}}),r(this,m,{writable:!0,value:function(e){let{type:a,data:o}=e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;return l(t,p)?new Promise(((e,r)=>{const s=d();l(t,p)&&l(t,p).postMessage({id:s,type:a,data:o},i),l(t,f)[s]=e,l(t,h)[s]=r,n?.addEventListener("abort",(()=>{r(new DOMException(`Message # ${s} was aborted`,"AbortError"))}),{once:!0})})):Promise.reject(new Error("FFmpeg is not loaded"))}}),n(this,"load",((t,e)=>(l(this,p)||(s(this,p,new Worker(t.workerLoadURL,{type:"classic"})),l(this,w).call(this)),l(this,m).call(this,{type:u.LOAD,data:t},void 0,e)))),n(this,"exec",(function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,o=arguments.length>2?arguments[2]:void 0;return l(t,m).call(t,{type:u.EXEC,data:{args:e,timeout:a}},void 0,o)})),n(this,"terminate",(()=>{const t=Object.keys(l(this,h));for(const e of t)l(this,h)[e](new Error("FFmpeg terminated")),delete l(this,h)[e],delete l(this,f)[e];l(this,p)&&(l(this,p).terminate(),s(this,p,null),this.loaded=!1)})),n(this,"writeFile",((t,e,a)=>{const o=[];return o.push(e.buffer),l(this,m).call(this,{type:u.WRITE_FILE,data:{path:t,data:e}},o,a)})),n(this,"readFile",((t,e)=>l(this,m).call(this,{type:u.READ_FILE,data:{path:t,encoding:"binary"}},void 0,e)))}};async function F(t,e,a,n){E.loaded||await async function(t){await E.load({workerLoadURL:await v(i.meta.compilationInfo.altCdn.library.ffmpeg.worker,"text/javascript",y(t,"正在加载 FFmpeg Worker")),coreURL:await v(i.meta.compilationInfo.altCdn.library.ffmpeg.core,"text/javascript",y(t,"正在加载 FFmpeg Core")),wasmURL:await v(i.meta.compilationInfo.altCdn.library.ffmpeg.wasm,"application/wasm",y(t,"正在加载 FFmpeg WASM"))})}(n),E.writeFile("video",await b(e,y(n,"正在下载视频流"))),E.writeFile("audio",await b(a,y(n,"正在下载音频流"))),n.message="混流中……",await E.exec(["-i","video","-i","audio","-c:v","copy","-c:a","copy","output.mp4"]);const r=await E.readFile("output.mp4"),s=new Blob([r],{type:"video/mp4"});n.message="完成！",n.duration=1500,await o.DownloadPackage.single(t,s)}const R="WASM 混流输出",L="使用 WASM 在浏览器中下载并合并音视频",A={name:"downloadVideo.outputs.wasm",displayName:`下载视频 - ${R}`,description:L,author:{name:"WakelessSloth56",link:"https://github.com/WakelessSloth56"},setup:t=>{let{addData:e}=t;e("downloadVideo.outputs",(t=>{t.push({name:"wasm",displayName:"WASM",description:`${L}，运行过程中请勿关闭页面，初次使用或清除缓存后需要加载约 30 MB 的 WASM 文件`,runAction:async t=>{const e=t.infos.flatMap((t=>t.titledFragments));if(2!==e.length)a.Toast.error("仅支持 DASH 格式",R);else{const t=a.Toast.info("正在加载",R);try{await F(e[0].title,e[0].url,e[1].url,t)}catch(e){t.close(),a.Toast.error(String(e),R)}}}})}))},commitHash:"d2a3aa28739c211f5e00369fdba8d137d1c70798",coreVersion:"2.8.9"};return e=e.plugin})()));
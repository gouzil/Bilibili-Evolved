!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap-toggle-danmaku-list"]=t():e["utils/keymap-toggle-danmaku-list"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,a)=>{for(var o in a)e.o(a,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:a[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{plugin:()=>a});const a={name:"keymap.actions.toggleDanmakuList",displayName:"快捷键扩展 - 开关弹幕列表",description:'在快捷键的动作列表里添加一个 "开关弹幕列表".',setup:e=>{let{addData:t}=e;t("keymap.actions",(e=>{e.toggleDanmakuList={displayName:"开关弹幕列表",run:async()=>{const e=dq(".bui-collapse-header");return e?.click(),e}}})),t("keymap.presets",((e,t)=>{e.toggleDanmakuList="shift d",t.HTML5Player.toggleDanmakuList="",t.PotPlayer.toggleDanmakuList=""}))},commitHash:"d2a3aa28739c211f5e00369fdba8d137d1c70798",coreVersion:"2.8.9"};return t=t.plugin})()));
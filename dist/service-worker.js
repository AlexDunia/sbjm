if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let u={};const o=e=>n(e,s),t={module:{uri:s},exports:u,require:o};i[s]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(l(...e),u)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"sbjm"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.a51db2bd.css",revision:null},{url:"/img/aritop.339f0cc2.jpg",revision:null},{url:"/img/bennybubu.b34f798b.jpg",revision:null},{url:"/img/bj.dabcd87a.png",revision:null},{url:"/img/flady.eae65cb7.jpg",revision:null},{url:"/img/nita.277f02f8.png",revision:null},{url:"/img/orange.ffeaca4d.jpg",revision:null},{url:"/img/orangee.92d72f64.png",revision:null},{url:"/img/rubygown.861a4233.jpg",revision:null},{url:"/img/sb.eb63d43e.png",revision:null},{url:"/img/sbjwhite.e1577abc.png",revision:null},{url:"/index.html",revision:"ca633b0608bd9241ee5991123840c6f4"},{url:"/js/about.77ae7a44.js",revision:null},{url:"/js/app.37c68fc8.js",revision:null},{url:"/js/chunk-vendors.34ab2063.js",revision:null},{url:"/manifest.json",revision:"9c4a27b8133d75eae7aa16d2027b9b68"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

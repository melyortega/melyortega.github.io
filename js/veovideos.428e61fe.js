(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={veovideos:0},a={veovideos:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-51d71f28":"5d4975f2","chunk-6addc438":"c3408196"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-51d71f28":1,"chunk-6addc438":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-51d71f28":"75f5c957","chunk-6addc438":"5f5ca267"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([3,"chunk-vendors","chunk-common"]),n()})({2080:function(e){e.exports=JSON.parse('{"Host":{"Login":"http://tuwebfacilita.com/PHP/Token.php","GraphQL":"http://gql.audiologiaintegral.tk/GQL"},"Titulo":"Controles"}')},3:function(e,t,n){e.exports=n("9ac3")},"9ac3":function(e,t,n){"use strict";n.r(t);n("8e6e"),n("ac6a"),n("456d");var r=n("bd86"),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),a=n("28dd"),u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"is-unselectable",attrs:{id:"App"}},[t("router-view"),e._m(0)],1)},i=[function(){var e=this,t=e._self._c;return t("footer",{staticClass:"footer v-footer"},[t("div",{staticClass:"content has-text-centered subtitle is-6"},[t("p",[e._v("Creado por Melany Ortega, con la colaboración de Román Avalos")]),t("p",{staticClass:"has-text-weight-bold"},[e._v("© 2019 | VeoVideos. All Rights Reserved")])])])}],c={name:"app",mounted:function(){setTimeout((function(){document.getElementById("pageloader").classList.remove("is-active")}),1300)}},s=c,l=(n("a973"),n("2877")),f=Object(l["a"])(s,u,i,!1,null,null,null),d=f.exports,p=n("8c4f");o["default"].use(p["a"]);var m=new p["a"]({mode:"history",base:"/Veovideos/",routes:[{path:"/",component:function(){return n.e("chunk-6addc438").then(n.bind(null,"af26"))},name:"veovideos"},{path:"/contenido",component:function(){return n.e("chunk-51d71f28").then(n.bind(null,"2855"))},name:"contenido"}]}),b=n("3c8b"),h=n("8a03"),v=n.n(h),g=n("e0ec"),y=n.n(g),O=n("c1df"),w=n.n(O),T=(n("28a5"),n("2f62"));o["default"].use(T["a"]);var j=new T["a"].Store({state:{EsAdmin:!1,Tablas:{}},mutations:{EsAdmin:function(e,t){e.EsAdmin=t},NuevaTabla:function(e,t){o["default"].set(e.Tablas,t,[]),o["default"].set(e.Tablas,"$"+t,[])},Tabla:function(e,t){o["default"].set(e.Tablas,"$"+t.Nombre,t.$JSON);var n=$$.JSONtoObject(t.$JSON,"Id",!0);o["default"].set(e.Tablas,t.Nombre,n)},Dato:function(e,t){return $$.Validar(e,t.$,t.$$)}},actions:{CargarTabla:function(e,t){var n=this;e.commit("NuevaTabla",t),this._vm.$GQL(t).Leer().then((function(n){return e.commit("Tabla",{Nombre:t,$JSON:n})})).catch((function(e){return n._vm.$toast.open("Problema de comunicacion")}))},CargarTodo:function(e,t){for(var n in t=t||[],"string"==typeof t&&(t=t.split(",")),t)e.dispatch("CargarTabla",t[n])}},getters:{tblId:function(e){return function(t){return e.Tablas[t]}},tbl:function(e){return e.Tablas},adm:function(e){return e.EsAdmin}}}),k=n("8911"),P=n("2080");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}o["default"].use(y.a),o["default"].prototype.moment=w.a,o["default"].use(b["a"]),o["default"].use(v.a,{defaultDayNames:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],defaultMonthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],defaultDialogCancelText:"Cancelar",defaultDialogConfirmText:"Aceptar"}),o["default"].use(k["a"],A(A({},P),{},{store:j})),o["default"].use(a["a"]),o["default"].http.headers.common["Authorization"]="Bearer "+localStorage.getItem("tokenApp"),o["default"].config.productionTip=!1,new o["default"]({store:j,router:m,render:function(e){return e(d)}}).$mount("#App")},a973:function(e,t,n){"use strict";n("e50b")},e50b:function(e,t,n){}});
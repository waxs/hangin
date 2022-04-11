/*!
 * @waxs/hangin (1.0.0) by Sander Hidding
 * Hang-in there, data is coming! Schedule jobs, plan, and await the outcome with hangin JS.
 * This source code is licensed under the MIT license found in the GitHub repository (git+https://github.com/waxs/hangin.git)
 */
var Hangin=function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=10)}([function(t,n,r){"use strict";r(2),r(4);function e(t,n,r){return(e=o()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var o=new(Function.bind.apply(t,e));return r&&i(o,r.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c=function(){var t=new Date;return[t.getFullYear(),t.getMonth(),t.getDate()]},l=function(){var t=new Date;return[t.getHours(),t.getMinutes(),t.getSeconds()]},f=function(t){return t&&(t[1]=t[1]-1),t},s=function(t){return t&&t[1]++,t};n.a=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[].concat(u(c()),u(l())),o=f(t),i=t?[].concat(u(o),u(n)):r,a=e(Date,u(i)),y=a.getTime();return{values:s(i),date:s(t||c()),time:n.length?n:l(),stamp:a,unix:y}}},function(t,n,r){"use strict";var e=function(t){return Array.isArray(t)};n.a=function(t,n){if(!n||e(t)?t.every((function(t){return t})):t)return console.error(n)&&!0}},function(t,n,r){"use strict";r(4);function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.a=function(t){return"number"!=typeof t||Array.isArray(t)&&"array"||e(t)}},function(t,n,r){"use strict";n.a=function(t){return t&&t+"_"||""+Math.random().toString(16).substr(2,9)}},function(t,n,r){"use strict";r(5)},function(t,n,r){"use strict";n.a=function(t){return!isNaN(t)}},function(t,n,r){"use strict";var e=r(1),o=r(0),i=r(3);function u(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var a=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._e={}}var n,r,a;return n=t,(r=[{key:"_handle",value:function(t){Object.keys(this._e).includes(t)||(this._e[t]=[])}},{key:"dispatch",value:function(t,n){this._e[t]&&this._e[t].map((function(t){t.callback&&t.callback(n)}))}},{key:"on",value:function(t,n){(function(t,n){return Object(e.a)(n,'A callback is mandatory for "'.concat(t,"\", specify the event on('name', () => { ... })."))})(t,!n)||(this._handle(t),this._e[t].push({id:Object(i.a)(),timestamp:Object(o.a)(),callback:n}))}},{key:"remove",value:function(t){delete this._e[t]}}])&&u(n.prototype,r),a&&u(n,a),Object.defineProperty(n,"prototype",{writable:!1}),t}();n.a=a},function(t,n,r){"use strict";function e(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,u=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw u}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}n.a=function(t){var n,r=Object.getPrototypeOf(new t),o=Object.getPrototypeOf(r),i=e(Object.getOwnPropertyNames(o));try{var u=function(){var t=n.value,r=o[t];"function"==typeof r&&"Core"!==r.name&&(o[t]=function(){this._c.push(r.name);for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return r.call.apply(r,[this].concat(n))})};for(i.s();!(n=i.n()).done;)u()}catch(t){i.e(t)}finally{i.f()}return t}},function(t,n,r){"use strict";var e=function(t,n){Object.keys(n).forEach((function(r){return t.prototype[r]=n[r]}))},o=function(t,n){Object.keys(n).forEach((function(r){n[r](t.prototype)}))};var i=function(t){var n=!0;Object.defineProperty(t,"active",{get:function(){return n},set:function(r){n=r,t.event.dispatch("active",r)}})},u=r(6);var a=function(t){var n=new u.a;Object.defineProperty(t,"event",{get:function(){return n},set:function(){}})};var c=function(t){var n=!1;Object.defineProperty(t,"loading",{get:function(){return n},set:function(r){r!==n&&(n=r,t.event.dispatch("loading",r))}})};var l=function(t){var n=!1;Object.defineProperty(t,"log",{get:function(){return n},set:function(t){n=t}})};var f=function(t){var n=[];Object.defineProperty(t,"_models",{get:function(){return n},set:function(t){var r=n.filter((function(n){return n.model===t.id}));r&&n.splice(r,1),n.push(t)}})},s=r(3),y=r(1),p=(r(4),r(2)),h=r(0),v=function(t,n){var r=Object(h.a)(),e=t,o=n;n||(e=r.unix,o=t);var i=Math.min(e,o);return Math.max(e,o)-i};var d=function(t){var n=[];Object.defineProperty(t,"planned",{get:function(){return n.map((function(t){return Object.assign(t,{await:v(t.next)})}))},set:function(t){var r=t.id,e=t.next,o=Object(h.a)(),i=n.filter((function(t){return t.model===r}));i&&n.splice(i,1),n.push({active:!0,id:Object(s.a)(),model:r,next:new Date(o.unix+e)})}})};var m=["boolean","string","number","array","object","function"].reduce((function(t,n){return t[n]=function(t){return function(t,n){return Object(p.a)(t)===n}(t,n)},t}),{});m.string,m.number,m.string,m.number,m.number;var b={active:i,event:a,loading:c,log:l,model:f,planned:d,progress:function(t){var n={};Object.defineProperty(t,"progress",{get:function(){return n},set:function(r){n=r,t.event.dispatch("progress",r)}})},schedule:function(t){var n=null;Object.defineProperty(t,"_s",{get:function(){return n},set:function(t){n=t}})}},g=function(t){return t.replace(/([A-Z])/g,"$1").split(" ").join("_").toLowerCase()};function j(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function O(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?j(Object(r),!0).forEach((function(n){w(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function w(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}m.string,m.boolean,m.number,m.function;var A={watch:!0,delay:0};var S={job:function(t,n){var r,e=n.id,o=n.index,i=O(O({},A),t);return r=i,Object.assign(r,{active:!0,id:Object(s.a)(),key:g(r.name),timestamp:Object(h.a)()}),function(t,n){var r=n.id,e=n.index;Object.assign(t,{parent:{id:r,index:e}})}(i,{id:e,index:o}),i},queue:function(t,n){var r=this;this.loading=!0;var e=n.map((function(n,e){return r.job(n,{id:t.id,index:e})})),o=this.loader(e);return o.then((function(){return r.loading=!1})),{events:e,total:e.length,completed:o}},schedule:function(t,n){var r=n||t,e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{name:t,active:!1,id:Object(s.a)(),timestamp:Object(h.a)(),times:0}}(n&&t);return function(t,n){Object.assign(t,{events:n})}(e,r),function(t){Object.assign(t,{delay:null,start:null,stop:null,next:null,routine:null,interval:null})}(e),this._s=e.id,this._models=e,this}};var M={pause:function(){this.active=!1,this.event.dispatch("pause")},start:function(){this.active=!0,this.plan(),this.event.dispatch("play")},update:function(){this.event.dispatch("update")}};var x={model:function(t){return this._models.map((function(n){return n.id===t?n:n.events.filter((function(n){return n.id===t||n.key===t}))[0]}))[0]}};var _=function(t){var n=Object.keys(t),r=this.model(this._s);n.forEach((function(n){r[n]=t[n]}))};var P=function(){},I={_timeout:null,get fn(){return this._timeout},set fn(t){this._timeout=t}},k=function t(n,r){var e=function(t){for(var n=[];t>0;)n.push(Math.min(t,2147483647)),t-=2147483647;return n}(r),o=e.shift();return I.fn=setTimeout((function(){return e.length?t(n,e.reduce((function(t,n){return t+n}),0)):n()}),o),I},E=function(t,n,r){var e=r+1,o=e/n*100,i=Math.round(100*o)/100;return{name:t.key,state:t.name,total:n,percentage:i,progress:e}};var T=function(t){var n=this,r=t.length;return t.reduce((function(t,e,o){return t.then((function(t){return e.action&&new Promise((function(i){k((function(){e.action(i,t),n.progress=E(e,r,o),e.watch&&n.event.dispatch(e.name||e.id)}),e.delay)}))}))}),Promise.resolve())},D=function(t,n){return t.length===n.length&&t.every((function(t,r){return t===n[r]}))};var $=function(t){return Object(h.a)().stamp.setHours(0,0,0,0)===t.setHours(0,0,0,0)};function C(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return R(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var U=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=Object(h.a)(),e="array"===Object(p.a)(t)?t:r.date,o=n||t,i=C(e,3),u=i[0],a=i[1],c=i[2],l=0;l<o;l++){var f=new Date(u,a,0).getDate();c===f&&(a++,c=0),13===a&&(u++,a=1,c=0),c++}return[u,a,c]};r(5);function H(t){return function(t){if(Array.isArray(t))return Y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||W(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,n)||W(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,n){if(t){if("string"==typeof t)return Y(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(t,n):void 0}}function Y(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var B=null,F=null,Z=null,q={minute:[0,59],hour:[0,12],dayMonth:[0,31],month:[0,12],dayWeek:[0,6]},z=function(t){return{minute:"getMinutes",hour:"getHours",dayMonth:"getDate",month:"getMonth",dayWeek:"getDay"}[t]},L={range:"-",step:"/",seperator:","},G=function(t){return Array.isArray(t)?t.map((function(t){return parseInt(t)})):parseInt(K)},J=function(t,n){var r={minute:/^([1-5]?[0-9])$/,hour:/^(2[0-3]|1[0-9]|[0-9])$/,dayMonth:/^(3[01]|[12][0-9]|[1-9])$/,month:/^(1[0-2]|[1-9])$/,dayWeek:/^([0-6])$/};return("*"===t||Object.keys(r).includes(n)&&t.match(r[n]))&&t},K=function(t,n){var r=null,e=null,o={range:V,step:X,seperator:tt};if(Object.keys(L).forEach((function(n){t.includes(L[n])&&(e=n)})),"*"===t){var i=N(q[n],2),u=i[0],a=i[1];r=[].concat(H(Array.from({length:a-u},(function(t,n){return n+u}))),[a])}return{input:t,values:r||G(e?o[e](t,n):[J(t,n)]),cronType:e,character:L[e]||null}},Q=function(t,n,r){var e=t.split(r);if(e.every((function(t){return J(t,n)})))return e},V=function(t,n){var r=Q(t,n,"-");if(r.length){var e=Math.min.apply(Math,H(G(r))),o=Math.max.apply(Math,H(G(r)));return[].concat(H(Array.from({length:o-e},(function(t,n){return n+e}))),[o])}},X=function(t,n){var r=Q(t,n,"/"),e=q[n][1];if(r.length){var o=Math.min.apply(Math,H(G(r))),i=Math.max.apply(Math,H(G(r))),u=Array.from({length:e},(function(t,n){if(n%i==0&&n>o)return n+o}));return[o].concat(H(u.filter((function(t){return!!t}))))}},tt=function(t,n){return Q(t,n,",")},nt=function(t,n,r){if("*"!==t[n].input){var e=r[z(n)]();return G(t[n].values).includes(e)}return!0},rt=function(t){for(var n=0;!F;){var r=U(n),e=Object(h.a)(r).stamp;[nt(t,"dayMonth",e),nt(t,"month",e),nt(t,"dayWeek",e)].every((function(t){return t}))&&(!F&&B&&(F=e),B||(B=e)),n++}return B},et=function(t,n,r){var e=r[z(n)]();if("*"!==t[n].input){var o=t[n].values,i=Math.min.apply(Math,H(o));return o.filter((function(t){return e<=t}))[0]||i}return e},ot=function(t){var n=Object(h.a)().stamp;return function(t,n,r,e){var o=n,i=r,u=e[z("minute")](),a=e[z("hour")](),c=t.minute.values,l=t.hour.values,f=Math.min.apply(Math,H(c)),s=(Math.max.apply(Math,H(l)),Math.min.apply(Math,H(l)),Math.max.apply(Math,H(l)));return r<u&&l.length>1&&(i=f,(s>a||!isNaN(!l[0]))&&o++),D([a,u],[o,i])&&(i=function(t,n){if(t.length){var r=t.indexOf(n);return r===t.length-1?t[0]:t[r+1]}return n}(c,r))===u&&o++,24===o&&(o=0),[o,i]}(t,et(t,"hour",n),et(t,"minute",n),n)},it=function(t){var n=Object(h.a)().time,r=N(t,2),e=r[0],o=r[1],i=N(n,2),u=i[0],a=i[1];return e<u||e===u&&o<a};var ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"* * * * *",n={},r=t.split(" ");["minute","hour","dayMonth","month","dayWeek"].forEach((function(t,e){n[t]=K(r[e],t)})),B=rt(n),Z=ot(n);var e=it(Z),o=$(B),i=Z,u=N(i,2),a=u[0],c=u[1],l=Math.min.apply(Math,H(n.hour.values)),f=Math.min.apply(Math,H(n.minute.values)),s=e&&o?F:B,y=e||!o?[l||0,f||0]:[a||0,c||0];return s.setHours.apply(s,y.concat([0,0]))};var at={apply:_,handle:P,loader:T,plan:function(){var t,n=this,r=this.model(this._s);if(r&&r.active&&this.active){var e=r.events,o=r.cron,i=v(ut(o));t=k((function(){n.queue(r,e).completed.then((function(){"loop"===r.routine?n.plan():clearTimeout(t)}))}),o?i:r.unix),this.apply({timeout:t.fn,times:r.times+1,next:i}),this.planned=r}this._c=[]}},ct=function(t){return function(t){for(;t.length<3;)t.push(0);return t}(t.match(/[a-zA-Z]+|[0-9]+/g).map((function(t){return parseInt(t,10)})))};function lt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return ft(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ft(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ft(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var st=function(t,n){var r=lt([t,n].map((function(t){return t.split(" ")})),2),e=r[0],o=r[1];return e.map((function(t,n){var r=o[n];return r&&""!==r?r:e[n]})).join(" ")};function yt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return pt(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return pt(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pt(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var ht=function(t){var n,r,e=t.match(/[a-zA-Z]+|[0-9]+/g).map((function(t){return parseInt(t,10)}));if(r=!(n=t).match(/^\d{4}[./-](0[1-9]|1[0-2])[./-](0[1-9]|[12][0-9]|3[01])$/),!Object(y.a)(r,"Not a valid date: ".concat(n,", use format: YYYY-MM-DD (ISO 8601).")))return e};function vt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return dt(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return dt(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function dt(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function mt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return bt(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return bt(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function bt(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function gt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return jt(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return jt(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function jt(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var Ot=["sunday","monday","tuesday","wednesday","thursday","friday","saterday"];function wt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var e,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(e=r.next()).done)&&(i.push(e.value),!n||i.length!==n);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return At(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return At(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function At(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var St={at:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0:00",n=this.model(this._s),r=ct(t),e=lt(r,2),o=e[0],i=e[1],u="".concat(i," ").concat(o),a=st(n.cron,u);return this.apply({cron:a,time:t}),this},cron:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"* * * * *";return this.apply({active:!0,routine:"loop",cron:t}),this},daily:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0:00",n=ct(t),r=yt(n,2),e=r[0],o=r[1],i="".concat(o," ").concat(e," * * *");return this.apply({active:!0,routine:"loop",cron:i,time:t}),this},date:function(t){var n=ht(t);return Object(h.a)(n),this.apply({active:!0,routine:"once",time:"0:00"}),this},hourly:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n="".concat(t," * * * *");return this.apply({active:!0,routine:"loop",cron:n}),this},instant:function(){return this.apply({active:!0,routine:"once",unix:0}),this},interval:function(t){return this.apply({active:!0,routine:"loop",unix:t}),this},monthly:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0:00",r=ct(n),e=vt(r,2),o=e[0],i=e[1],u="".concat(i," ").concat(o," ").concat(t," * *");return this.apply({active:!0,routine:"loop",cron:u,time:n}),this},once:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0:00:00",r=ht(t),e=ct(n),o=Object(h.a)(r,e),i=v(o.unix);return this.apply({active:!0,routine:"once",unix:i}),this},weekdays:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0:00",n=ct(t),r=mt(n,2),e=r[0],o=r[1],i="".concat(o," ").concat(e," * * 1-5");return this.apply({active:!0,routine:"loop",cron:i,time:t}),this},weekly:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"monday",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0:00",r=ct(n),e=gt(r,2),o=e[0],i=e[1],u=Ot.indexOf(t),a="".concat(i," ").concat(o," * * ").concat(u);return this.apply({active:!0,routine:"loop",cron:a,time:n}),this},weekend:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0:00",n=ct(t),r=wt(n,2),e=r[0],o=r[1],i="".concat(o," ").concat(e," * * 0,6");return this.apply({active:!0,routine:"loop",cron:i,time:t}),this}};function Mt(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function xt(t,n,r){return n&&Mt(t.prototype,n),r&&Mt(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var _t=xt((function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}));o(_t,b),e(_t,S),e(_t,M),e(_t,x),e(_t,at),e(_t,St);n.a=_t},function(t,n,r){"use strict";r(6);var e=function(t){return[{name:"models",value:[]},{name:"now",value:Date.now()},{name:"date",value:null},{name:"time",value:null},{name:"c",value:[]},{name:"routine",value:"once"}]};n.a=function(t,n){e(n).forEach((function(n){return t["_"+n.name]=n.value}))}},function(t,n,r){"use strict";r.r(n),function(t){var e=r(8),o=r(9),i=r(7);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=y(t);if(n){var o=y(this).constructor;r=Reflect.construct(e,arguments,o)}else r=e.apply(this,arguments);return f(this,r)}}function f(t,n){if(n&&("object"===u(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&c(t,n)}(f,n);var r,e,i,u=l(f);function f(n){var r;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),r=u.call(this),"undefined"==typeof window&&void 0===t||Object(o.a)(s(r),n),r}return r=f,e&&a(r.prototype,e),i&&a(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r}(e.a);n.default=Object(i.a)(p)}.call(this,r(11))},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r}]).default;module.exports=Hangin;
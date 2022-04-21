/*!
 * @waxs/hangin (1.0.0) by Sander Hidding
 * Hang-in there, data is coming! Schedule jobs, plan, and await the outcome with hangin JS.
 * This source code is licensed under the MIT license found in the GitHub repository (git+https://github.com/waxs/hangin.git)
 */
var Hangin=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=9)}([function(t,n,e){"use strict";e(1);function r(t,n,e){return(r=o()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var c=function(){var t=new Date;return[t.getFullYear(),t.getMonth(),t.getDate()]},l=function(){var t=new Date;return[t.getHours(),t.getMinutes(),t.getSeconds()]},f=function(t){return t&&(t[1]=t[1]-1),t},s=function(t){return t&&t[1]++,t};n.a=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=[].concat(i(c()),i(l())),o=f(t),a=t?[].concat(i(o),i(n)):e,u=r(Date,i(a)),y=u.getTime();return{values:s(a),date:s(t||c()),time:n.length?n:l(),stamp:u,unix:y}}},function(t,n,e){"use strict";var r=e(4);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.a=function(t){return Object(r.a)(t)?"array":o(t)}},function(t,n,e){"use strict";var r=e(4);n.a=function(t,n){if(!n||Object(r.a)(t)?t.every((function(t){return t})):t)return console.error(n)&&!0}},function(t,n,e){"use strict";n.a=function(t){return t&&t+"_"||""+Math.random().toString(16).substr(2,9)}},function(t,n,e){"use strict";n.a=function(t){return Array.isArray(t)}},function(t,n,e){"use strict";var r=e(2),o=e(0),a=e(3);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._e={}}var n,e,u;return n=t,(e=[{key:"_handle",value:function(t){Object.keys(this._e).includes(t)||(this._e[t]=[])}},{key:"dispatch",value:function(t,n){this._e[t]&&this._e[t].map((function(t){t.callback&&t.callback(n)}))}},{key:"on",value:function(t,n){(function(t,n){return Object(r.a)(n,'A callback is mandatory for "'.concat(t,"\", specify the event on('name', () => { ... })."))})(t,!n)||(this._handle(t),this._e[t].push({id:Object(a.a)(),timestamp:Object(o.a)(),callback:n}))}},{key:"remove",value:function(t){delete this._e[t]}}])&&i(n.prototype,e),u&&i(n,u),Object.defineProperty(n,"prototype",{writable:!1}),t}();n.a=u},function(t,n,e){"use strict";function r(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw i}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}n.a=function(t){var n,e=Object.getPrototypeOf(new t),o=Object.getPrototypeOf(e),a=r(Object.getOwnPropertyNames(o));try{var i=function(){var t=n.value,e=o[t];"function"==typeof e&&"Core"!==e.name&&(o[t]=function(){e&&this._c.push(e.name);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.call.apply(e,[this].concat(n))})};for(a.s();!(n=a.n()).done;)i()}catch(t){a.e(t)}finally{a.f()}return t}},function(t,n,e){"use strict";var r=function(t,n){Object.keys(n).forEach((function(e){return t.prototype[e]=n[e]}))},o=function(t,n){Object.keys(n).forEach((function(e){n[e](t.prototype)}))};var a=function(t){var n=!0;Object.defineProperty(t,"active",{get:function(){return n},set:function(e){n=e,t.event.dispatch("active",e)}})},i=e(5);var u=function(t){var n=new i.a;Object.defineProperty(t,"event",{get:function(){return n},set:function(){}})};var c=function(t){var n=!1;Object.defineProperty(t,"loading",{get:function(){return n},set:function(e){e!==n&&(n=e,t.event.dispatch("loading",e))}})};var l=function(t){var n=!1;Object.defineProperty(t,"log",{get:function(){return n},set:function(t){n=t}})};var f=function(t){var n=[];Object.defineProperty(t,"_models",{get:function(){return n},set:function(t){var e=n.filter((function(n){return n.model===t.id}));e&&n.splice(e,1),n.push(t)}})},s=e(3),y=e(2),p=e(1),h=e(0),v=function(t,n){var e=Object(h.a)(),r=t,o=n;n||(r=e.unix,o=t);var a=Math.min(r,o);return Math.max(r,o)-a};var d=function(t){var n=[];Object.defineProperty(t,"planned",{get:function(){return n.map((function(t){return Object.assign(t,{await:v(t.next)})}))},set:function(t){var e=t.id,r=t.next,o=Object(h.a)(),a=n.filter((function(t){return t.model===e}));a&&n.splice(a,1),n.push({active:!0,id:Object(s.a)(),model:e,next:new Date(o.unix+r)})}})},m=e(4);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var g=function(t){var n=function(t,n){return(Object(m.a)(t)?"array":b(t))===n.name.toLowerCase()};return function(e){return Object.keys(e).reduce((function(r,o){var a=t[o],i=e[o];if(!a)return r;var u=Object(m.a)(a),c=u?a.some((function(t){return n(i,t)})):n(i,a),l=u?a.map((function(t){return t.name})).join(", "):a.name;return c||console.error("Given value for ".concat(o," (").concat(b(i),") is not of a valid type matching the schema: [").concat(l,"]")),r.push(c),r}),[]).every((function(t){return!!t}))}},j=g({state:String,progress:Number,name:String,percentage:Number,total:Number});var O={active:a,event:u,loading:c,log:l,model:f,planned:d,progress:function(t){var n={};Object.defineProperty(t,"progress",{get:function(){return n},set:function(e){j(e)&&(n=e,t.event.dispatch("progress",e))}})},schedule:function(t){var n=null;Object.defineProperty(t,"_s",{get:function(){return n},set:function(t){n=t}})}},w=function(t){return t.replace(/([A-Z])/g,"$1").split(" ").join("_").toLowerCase()};function S(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function A(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?S(Object(e),!0).forEach((function(n){x(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):S(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function x(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var M=g({id:String,active:Boolean,name:String,key:String,watch:Boolean,delay:Number,action:Function}),_={watch:!0,delay:0};var P=function(t,n){var e,r=n.id,o=n.index,a=A(A({},_),t);if(M(a))return e=a,Object.assign(e,{active:!0,id:Object(s.a)(),key:w(e.name),timestamp:Object(h.a)()}),function(t,n){var e=n.id,r=n.index;Object.assign(t,{parent:{id:e,index:r}})}(a,{id:r,index:o}),a};var I=function(t,n){var e=this;this.loading=!0;var r=n.map((function(n,r){return e.job(n,{id:t.id,index:r})})),o=this.loader(r);return o.then((function(){e.loading=!1,e.event.dispatch("done",t)})),{events:r,total:r.length,completed:o}},k=g({id:String,active:Boolean,times:Number});var E={job:P,queue:I,schedule:function(t,n){var e=n||t,r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{name:t,active:!1,id:Object(s.a)(),timestamp:Object(h.a)(),times:0}}(n&&t);if(function(t,n){Object.assign(t,{events:n})}(r,e),function(t){Object.assign(t,{delay:null,start:null,stop:null,next:null,routine:null,interval:null})}(r),k(r))return this._s=r.id,this._models=r,this}};var T={done:function(t){return t&&hangin.event.on("done",t),this},pause:function(){this.active=!1,this.event.dispatch("pause")},start:function(){var t=this.model(this._s);this.active=!0,this.plan(),this.event.dispatch("play",{remainer:t.next,next:t.next&&new Date(t.planned)})},update:function(t){var n=this;return t((function(){n.execute()})),n}};var C={model:function(t){return this._models.map((function(n){return n.id===t?n:n.events.filter((function(n){return n.id===t||n.key===t}))[0]}))[0]}};var D=function(t){var n=Object.keys(t),e=this.model(this._s);n.forEach((function(n){e[n]=t[n]}))};var $={_timeout:null,get fn(){return this._timeout},set fn(t){this._timeout=t}},N=function t(n,e){var r=function(t){for(var n=[];t>0;)n.push(Math.min(t,2147483647)),t-=2147483647;return n}(e),o=r.shift();return $.fn=setTimeout((function(){return r.length?t(n,r.reduce((function(t,n){return t+n}),0)):n()}),o),$},R=function(t,n,e){var r=e+1,o=r/n*100,a=Math.round(100*o)/100;return{name:t.key,state:t.name,total:n,percentage:a,progress:r}};var U=function(t,n){return t.length===n.length&&t.every((function(t,e){return t===n[e]}))};var B=function(t){return Object(h.a)().stamp.setHours(0,0,0,0)===t.setHours(0,0,0,0)};function H(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return W(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return W(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var Y=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=Object(h.a)(),r="array"===Object(p.a)(t)?t:e.date,o=n||t,a=H(r,3),i=a[0],u=a[1],c=a[2],l=0;l<o;l++){var f=new Date(i,u,0).getDate();c===f&&(u++,c=0),13===u&&(i++,u=1,c=0),c++}return[i,u,c]};function F(t){return function(t){if(Array.isArray(t))return z(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Z(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||Z(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(t,n){if(t){if("string"==typeof t)return z(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?z(t,n):void 0}}function z(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var L=null,G=null,J=null,K={minute:[0,59],hour:[0,12],dayMonth:[0,31],month:[0,12],dayWeek:[0,6]},Q=function(t){return{minute:"getMinutes",hour:"getHours",dayMonth:"getDate",month:"getMonth",dayWeek:"getDay"}[t]},V={range:"-",step:"/",seperator:","},X=function(t){return Array.isArray(t)?t.map((function(t){return parseInt(t)})):parseInt(nt)},tt=function(t,n){if("*"===t)return t;var e={minute:/^([1-5]?[0-9])$/,hour:/^(2[0-3]|1[0-9]|[0-9])$/,dayMonth:/^(3[01]|[12][0-9]|[1-9])$/,month:/^(1[0-2]|[1-9])$/,dayWeek:/^([0-6])$/};return Object.keys(e).includes(n)&&t.match(e[n])||t},nt=function(t,n){var e=null,r=null,o={range:rt,step:ot,seperator:at};if(Object.keys(V).forEach((function(n){t.includes(V[n])&&(r=n)})),"*"===t){var a=q(K[n],2),i=a[0],u=a[1];e=[].concat(F(Array.from({length:u-i},(function(t,n){return n+i}))),[u])}return{input:t,values:e||X(r?o[r](t,n):[tt(t,n)]),cronType:r,character:V[r]||null}},et=function(t,n,e){var r=t.split(e);if(r.every((function(t){return tt(t,n)})))return r},rt=function(t,n){var e=et(t,n,"-");if(e.length){var r=Math.min.apply(Math,F(X(e))),o=Math.max.apply(Math,F(X(e)));return[].concat(F(Array.from({length:o-r},(function(t,n){return n+r}))),[o])}},ot=function(t,n){var e=et(t,n,"/"),r=K[n][1];if(e.length){var o=Math.min.apply(Math,F(X(e))),a=Math.max.apply(Math,F(X(e))),i=Array.from({length:r},(function(t,n){if(n%a==0&&n>o)return n+o}));return[o].concat(F(i.filter((function(t){return!!t}))))}},at=function(t,n){return et(t,n,",")},it=function(t,n,e){if("*"!==t[n].input){var r=e[Q(n)]();return X(t[n].values).includes(r)}return!0},ut=function(t){for(var n=0;!G;){if(n>1825){console.error("Could not find a matching date. A match should be made within a period of 5 years!");break}var e=Y(n),r=Object(h.a)(e).stamp;[it(t,"dayMonth",r),it(t,"month",r),it(t,"dayWeek",r)].every((function(t){return t}))&&(!G&&L&&(G=r),L||(L=r)),n++}return L},ct=function(t,n,e){var r=e[Q(n)]();if("*"!==t[n].input){var o=t[n].values,a=Math.min.apply(Math,F(o));return o.filter((function(t){return r<=t}))[0]||a}return r},lt=function(t){var n=Object(h.a)().stamp;return function(t,n,e,r){var o=n,a=e,i=r[Q("minute")](),u=r[Q("hour")](),c=t.minute.values,l=t.hour.values,f=Math.min.apply(Math,F(c)),s=(Math.max.apply(Math,F(l)),Math.min.apply(Math,F(l)),Math.max.apply(Math,F(l)));return e<i&&l.length>1&&(a=f,(s>u||!isNaN(!l[0]))&&o++),U([u,i],[o,a])&&(a=function(t,n){if(t.length){var e=t.indexOf(n);return e===t.length-1?t[0]:t[e+1]}return n}(c,e))===i&&o++,24===o&&(o=0),[o,a]}(t,ct(t,"hour",n),ct(t,"minute",n),n)},ft=function(t){var n=Object(h.a)().time,e=q(t,2),r=e[0],o=e[1],a=q(n,2),i=a[0],u=a[1];return r<i||r===i&&o<u};var st=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"* * * * *",n={},e=t.split(" ");["minute","hour","dayMonth","month","dayWeek"].forEach((function(t,r){n[t]=nt(e[r],t)})),L=ut(n),J=lt(n);var r=ft(J),o=B(L),a=J,i=q(a,2),u=i[0],c=i[1],l=Math.min.apply(Math,F(n.hour.values)),f=Math.min.apply(Math,F(n.minute.values)),s=r&&o?G:L,y=r||!o?[l||0,f||0]:[u||0,c||0];return s.setHours.apply(s,y.concat([0,0]))};var yt={apply:D,execute:function(){var t=this.model(this._s),n=t.events;return this.queue(t,n)},loader:function(t){var n=this,e=t.length;return t.reduce((function(t,r,o){return t.then((function(t){return r.action&&new Promise((function(a){N((function(){r.action(a,t),n.progress=R(r,e,o),r.watch&&n.event.dispatch(r.name||r.id)}),r.delay)}))}))}),Promise.resolve())},plan:function(){var t,n=this,e=this.model(this._s);if(e&&e.active&&this.active){var r=e.events,o=e.cron,a=e.routine,i=v(st(o));t=N((function(){n.queue(e,r).completed.then((function(){"loop"===a?n.plan():clearTimeout(t)}))}),o?i:e.unix),this.apply({timeout:t.fn,times:e.times+1,planned:st(o),next:"loop"===a&&i}),this.planned=e}this._c=[]}},pt=function(t){return function(t){for(;t.length<3;)t.push(0);return t}(t.match(/[a-zA-Z]+|[0-9]+/g).map((function(t){return parseInt(t,10)})))};function ht(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return vt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return vt(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function vt(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var dt=function(t,n){var e=ht([t,n].map((function(t){return t.split(" ")})),2),r=e[0],o=e[1];return r.map((function(t,n){var e=o[n];return e&&""!==e?e:r[n]})).join(" ")};function mt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return bt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return bt(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function bt(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var gt=["mon","tue","wed","thu","fri","sat","sun"],jt=["monday","tuesday","wednesday","thursday","friday","saterday","sunday"],Ot=function(t){return"string"!==Object(p.a)(t)||(n=t,e=!gt.includes(n)&&!jt.includes(n),Object(y.a)(e,"Not a valid value: ".concat(n,", day needs to be shorthand (mon) or monday.")))?"number"!==Object(p.a)(t)||function(t){var n=!(t>=1||t<=12);return Object(y.a)(n,"Not a valid number: ".concat(t,", day needs to be between 1 and 12."))}(t)?void 0:jt[t-1]:gt.indexOf(t)+1||jt.indexOf(t)+1;var n,e},wt=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],St=["january","february","march","april","may","june","july","august","september","october","november","december"],At=function(t){return"string"!==Object(p.a)(t)||(n=t,e=!wt.includes(n)&&!St.includes(n),Object(y.a)(e,"Not a valid value: ".concat(n,", month needs to be shorthand (jan) or january.")))?"number"!==Object(p.a)(t)||function(t){var n=!(t>=1||t<=12);return Object(y.a)(n,"Not a valid number: ".concat(t,", month needs to be between 1 and 12."))}(t)?void 0:St[t-1]:wt.indexOf(t)+1||St.indexOf(t)+1;var n,e},xt=["minute","hour","day","week","month","year"];function Mt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return _t(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _t(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _t(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function Pt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return It(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return It(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function It(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function kt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return Et(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Et(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Et(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function Tt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return Ct(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ct(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ct(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function Dt(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return $t(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return $t(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $t(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var Nt=function(t){var n,e,r=t.match(/[a-zA-Z]+|[0-9]+/g).map((function(t){return parseInt(t,10)}));if(e=!(n=t).match(/^\d{4}[./-](0[1-9]|1[0-2])[./-](0[1-9]|[12][0-9]|3[01])$/),!Object(y.a)(e,"Not a valid date: ".concat(n,", use format: YYYY-MM-DD (ISO 8601).")))return r};var Rt={at:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0:00",n=this.model(this._s),e=pt(t),r=ht(e,2),o=r[0],a=r[1];if(n.cron){var i="".concat(a," ").concat(o),u=dt(n.cron,i);this.apply({cron:u,time:t})}return n.cron||this.apply({time:t}),this},cron:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"* * * * *";return this.apply({active:!0,routine:"loop",cron:t}),this},daily:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0:00",n=pt(t),e=mt(n,2),r=e[0],o=e[1],a="".concat(o," ").concat(r," * * *");return this.apply({active:!0,routine:"loop",cron:a,time:t}),this},date:function(t){var n=Nt(t),e=Object(h.a)(n),r=v(e.unix);return this.apply({active:!0,routine:"once",unix:r,time:"0:00"}),this},every:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"minute",n=arguments.length>1?arguments[1]:void 0;if(xt.includes(t)){var e=null,r=n||0;return"minute"===t&&(e="* * * * *"),"hour"===t&&(e="".concat(r," * * * *")),"day"===t&&(e="0 ".concat(r," * * *")),"week"===t&&(e="* * * * ".concat("string"==typeof n?Ot(r):r)),"month"===t&&(e="* * ".concat(r+1," * *")),"year"===t&&(e="* * * ".concat("string"==typeof n?At(r):r," *")),this.apply({active:!0,routine:"loop",cron:e}),this}return console.error("Not a supported selector:",t)},hourly:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n="".concat(t," * * * *");return this.apply({active:!0,routine:"loop",cron:n}),this},instant:function(){return this.apply({active:!0,routine:"once",unix:0}),this},interval:function(t){return this.apply({active:!0,routine:"loop",unix:t}),this},monthly:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0:00",e=pt(n),r=Mt(e,2),o=r[0],a=r[1],i="".concat(a," ").concat(o," ").concat(t," * *");return this.apply({active:!0,routine:"loop",cron:i,time:n}),this},once:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0:00:00",e=Nt(t),r=pt(n),o=Object(h.a)(e,r),a=v(o.unix);return this.apply({active:!0,routine:"once",unix:a}),this},timestamp:function(t){return this.apply({active:!0,routine:"once",unix:t}),this},weekdays:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0:00",n=pt(t),e=Pt(n,2),r=e[0],o=e[1],a="".concat(o," ").concat(r," * * 1-5");return this.apply({active:!0,routine:"loop",cron:a,time:t}),this},weekly:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"monday",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0:00",e=pt(n),r=Tt(e,2),o=r[0],a=r[1],i=days.indexOf(t),u="".concat(a," ").concat(o," * * ").concat(Ot(i));return this.apply({active:!0,routine:"loop",cron:u,time:n}),this},weekend:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0:00",n=pt(t),e=kt(n,2),r=e[0],o=e[1],a="".concat(o," ").concat(r," * * 0,6");return this.apply({active:!0,routine:"loop",cron:a,time:t}),this},yearly:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0:00",r=pt(e),o=Dt(r,2),a=o[0],i=o[1],u="".concat(i," ").concat(a," ").concat(n," ").concat(t," *");return this.apply({active:!0,routine:"loop",cron:u,time:e}),this}};function Ut(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Bt(t,n,e){return n&&Ut(t.prototype,n),e&&Ut(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}var Ht=Bt((function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}));o(Ht,O),r(Ht,E),r(Ht,T),r(Ht,C),r(Ht,yt),r(Ht,Rt);n.a=Ht},function(t,n,e){"use strict";e(5);var r=function(t){return[{name:"models",value:{}},{name:"now",value:Date.now()},{name:"date",value:null},{name:"time",value:null},{name:"c",value:[]},{name:"routine",value:"once"}]};n.a=function(t,n){r(n).forEach((function(n){return t["_"+n.name]=n.value}))}},function(t,n,e){"use strict";e.r(n),function(t){var r=e(7),o=e(8),a=e(6);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=y(t);if(n){var o=y(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return f(this,e)}}function f(t,n){if(n&&("object"===i(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&c(t,n)}(f,n);var e,r,a,i=l(f);function f(n){var e;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),e=i.call(this),"undefined"==typeof window&&void 0===t||Object(o.a)(s(e),n),e}return e=f,r&&u(e.prototype,r),a&&u(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}(r.a);n.default=Object(a.a)(p)}.call(this,e(10))},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e}]).default;module.exports=Hangin;
/*!
 * @waxs/hangin (1.0.0) by Sander Hidding
 * Hang-in there, data is coming! Schedule jobs, plan, and await the outcome with hangin JS.
 * This source code is licensed under the MIT license found in the GitHub repository (git+https://github.com/waxs/hangin.git)
 */
var Hangin =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Hangin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://Hangin/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/Core.js":
/*!*********************!*\
  !*** ./src/Core.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_setup_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/setup/_extends */ \"./src/setup/_extends.js\");\n/* harmony import */ var _js_setup_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/setup/_init */ \"./src/setup/_init.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state */ \"./src/state/index.js\");\n/* harmony import */ var _method_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @method/actions */ \"./src/methods/actions/index.js\");\n/* harmony import */ var _method_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @method/controls */ \"./src/methods/controls/index.js\");\n/* harmony import */ var _method_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @method/data */ \"./src/methods/data/index.js\");\n/* harmony import */ var _method_handle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @method/handle */ \"./src/methods/handle/index.js\");\n/* harmony import */ var _method_schedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @method/schedule */ \"./src/methods/schedule/index.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Core\n ---------------------------------------- */\n\nvar Core = /*#__PURE__*/_createClass(function Core() {\n  _classCallCheck(this, Core);\n});\n\n;\n/** ----------------------------------------\n    State\n ---------------------------------------- */\n\n\nObject(_js_setup_init__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Core, _state__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/** ----------------------------------------\n    Methods\n ---------------------------------------- */\n\n\n\n\n\n\n/** ----------------------------------------\n    Helpers\n ---------------------------------------- */\n\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Core, _method_actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Core, _method_controls__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Core, _method_data__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Core, _method_handle__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nObject(_js_setup_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Core, _method_schedule__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Core);\n\n//# sourceURL=webpack://Hangin/./src/Core.js?");

/***/ }),

/***/ "./src/Hangin.js":
/*!***********************!*\
  !*** ./src/Hangin.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _js_Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/Core */ \"./src/Core.js\");\n/* harmony import */ var _js_setup_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/setup/_construct */ \"./src/setup/_construct.js\");\n/* harmony import */ var _js_setup_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/setup/_middleware */ \"./src/setup/_middleware.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/** ----------------------------------------\n    Hangin Core\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Hangin\n ---------------------------------------- */\n\nvar Hangin = /*#__PURE__*/function (_Core) {\n  _inherits(Hangin, _Core);\n\n  var _super = _createSuper(Hangin);\n\n  /** ----------------------------------------\n      Constructor\n   ---------------------------------------- */\n  function Hangin(config) {\n    var _this;\n\n    _classCallCheck(this, Hangin);\n\n    _this = _super.call(this);\n\n    if (typeof window !== 'undefined' || typeof global !== 'undefined') {\n      Object(_js_setup_construct__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_assertThisInitialized(_this), config);\n    }\n\n    return _this;\n  }\n\n  return _createClass(Hangin);\n}(_js_Core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_js_setup_middleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Hangin));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Hangin/./src/Hangin.js?");

/***/ }),

/***/ "./src/config/default.config.js":
/*!**************************************!*\
  !*** ./src/config/default.config.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_helper_Emit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/helper/Emit */ \"./src/util/helper/Emit.js\");\n/** ----------------------------------------\n    Event\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Construct\n ---------------------------------------- */\n\nvar setDefaults = function setDefaults(config) {\n  /** ----------------------------------------\n      Configuration\n   ---------------------------------------- */\n  var defaults = [\n  /** ----------------------------------------\n      Model\n   ---------------------------------------- */\n  {\n    name: 'models',\n    value: {}\n  },\n  /** ----------------------------------------\n      Timing\n   ---------------------------------------- */\n  {\n    name: 'now',\n    value: Date.now()\n  }, {\n    name: 'date',\n    value: null\n  }, {\n    name: 'time',\n    value: null\n  },\n  /** ----------------------------------------\n      Routine\n   ---------------------------------------- */\n  {\n    name: 'chain',\n    value: []\n  },\n  /** ----------------------------------------\n      Routine\n   ---------------------------------------- */\n  {\n    name: 'routine',\n    value: 'once'\n  }];\n  return defaults;\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setDefaults);\n\n//# sourceURL=webpack://Hangin/./src/config/default.config.js?");

/***/ }),

/***/ "./src/methods/actions/_job.js":
/*!*************************************!*\
  !*** ./src/methods/actions/_job.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_function_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/function/_id */ \"./src/util/function/_id.js\");\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\n/* harmony import */ var _util_format_toCamel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_toCamel */ \"./src/util/format/_toCamel.js\");\n/* harmony import */ var _util_debug_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/debug/_schema */ \"./src/util/debug/_schema.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/** ----------------------------------------\n    Utitities\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Schema\n ---------------------------------------- */\n\n\nvar validate = Object(_util_debug_schema__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  id: String,\n  active: Boolean,\n  name: String,\n  key: String,\n  watch: Boolean,\n  delay: Number,\n  action: Function\n});\n/** ----------------------------------------\n    Defaults\n ---------------------------------------- */\n\n/**\n * This default preset will create some \n * configuration on the job object that can\n * be overwritten setting the schedule. \n */\n\nvar defaults = {\n  watch: true,\n  delay: 0\n};\n/** ----------------------------------------\n    Job\n ---------------------------------------- */\n\n/**\n * This function will set the job config\n * as a default containing any relevant\n * information. \n */\n\nvar createJob = function createJob(job) {\n  return Object.assign(job, {\n    active: true,\n    id: Object(_util_function_id__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n    key: Object(_util_format_toCamel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(job.name),\n    timestamp: Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  });\n};\n/**\n * This function will assign the job\n * to a given model and schedule.\n */\n\n\nvar assignJob = function assignJob(job, _ref) {\n  var id = _ref.id,\n      index = _ref.index;\n  return Object.assign(job, {\n    parent: {\n      id: id,\n      index: index\n    }\n  });\n};\n/**\n * A job can be described as a single\n * a single process that has to be resolved\n * from the schedule. The jobs are listed \n * within the schedule method. A job \n * contains information about execution \n * a related details for setting watchers\n * and resolving them in sync according\n * to the given configuration.\n */\n\n\nfunction job(desc, _ref2) {\n  var id = _ref2.id,\n      index = _ref2.index;\n\n  var obj = _objectSpread(_objectSpread({}, defaults), desc);\n\n  if (validate(obj)) {\n    createJob(obj);\n    assignJob(obj, {\n      id: id,\n      index: index\n    });\n    return obj;\n  }\n}\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (job);\n\n//# sourceURL=webpack://Hangin/./src/methods/actions/_job.js?");

/***/ }),

/***/ "./src/methods/actions/_queue.js":
/*!***************************************!*\
  !*** ./src/methods/actions/_queue.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Queue\n ---------------------------------------- */\n\nfunction queue(schedule, jobs) {\n  var _this = this;\n\n  this.loading = true;\n  var events = jobs.map(function (job, index) {\n    return _this.job(job, {\n      id: schedule.id,\n      index: index\n    });\n  });\n  var loading = this.loader(events);\n  loading.then(function () {\n    _this.loading = false;\n\n    _this.event.dispatch('done', schedule);\n  });\n  return {\n    events: events,\n    total: events.length,\n    completed: loading\n  };\n}\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (queue);\n\n//# sourceURL=webpack://Hangin/./src/methods/actions/_queue.js?");

/***/ }),

/***/ "./src/methods/actions/_schedule.js":
/*!******************************************!*\
  !*** ./src/methods/actions/_schedule.js ***!
  \******************************************/
/*! exports provided: loadSchedule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSchedule\", function() { return loadSchedule; });\n/* harmony import */ var _util_function_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/function/_id */ \"./src/util/function/_id.js\");\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\n/* harmony import */ var _util_debug_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/debug/_schema */ \"./src/util/debug/_schema.js\");\n/** ----------------------------------------\n    Utitities\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Schema\n ---------------------------------------- */\n\n\nvar validate = Object(_util_debug_schema__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n  id: String,\n  active: Boolean,\n  times: Number\n});\n/** ----------------------------------------\n    Schedule\n ---------------------------------------- */\n\n/**\n * This function will set the schedule \n * config as a default containing any relevant\n * information. \n */\n\nvar createSchedule = function createSchedule() {\n  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  return {\n    name: name,\n    active: false,\n    id: Object(_util_function_id__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n    timestamp: Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n    times: 0\n  };\n};\n/**\n * Responsible for assigning the schedule \n * and it's related events (jobs).\n */\n\n\nvar assignSchedule = function assignSchedule(schedule, events) {\n  return Object.assign(schedule, {\n    events: events\n  });\n};\n/**\n * Will add a progression list of events that\n * will be handled during execution of the\n * schedule.\n */\n\n\nvar loadSchedule = function loadSchedule(schedule) {\n  var progress = schedule.events.map(function (event) {\n    return event.key;\n  });\n  return Object.assign(schedule, {\n    progress: progress,\n    completed: completed\n  });\n};\n/**\n * This function will configure the schedule\n * according to a default state. \n */\n\n\nvar configureSchedule = function configureSchedule(schedule) {\n  return Object.assign(schedule, {\n    delay: null,\n    start: null,\n    stop: null,\n    next: null,\n    routine: null,\n    interval: null\n  });\n};\n/**\n * The schedule will contain information \n * about the execution order and any related\n * logic that is responsible for handeling \n * the tasks (jobs). \n */\n\n\nfunction schedule(name, events) {\n  var _events = !events ? name : events;\n\n  var schedule = createSchedule(events && name);\n  assignSchedule(schedule, _events);\n  configureSchedule(schedule);\n\n  if (validate(schedule)) {\n    this._schedule = schedule.id;\n    this._models = schedule;\n    return this;\n  }\n}\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schedule);\n\n//# sourceURL=webpack://Hangin/./src/methods/actions/_schedule.js?");

/***/ }),

/***/ "./src/methods/actions/index.js":
/*!**************************************!*\
  !*** ./src/methods/actions/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_job */ \"./src/methods/actions/_job.js\");\n/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_queue */ \"./src/methods/actions/_queue.js\");\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_schedule */ \"./src/methods/actions/_schedule.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n   Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  job: _job__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  queue: _queue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  schedule: _schedule__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack://Hangin/./src/methods/actions/index.js?");

/***/ }),

/***/ "./src/methods/controls/_done.js":
/*!***************************************!*\
  !*** ./src/methods/controls/_done.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Done\n---------------------------------------- */\nfunction done(callback) {\n  callback && hangin.event.on('done', callback);\n  return this;\n}\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (done);\n\n//# sourceURL=webpack://Hangin/./src/methods/controls/_done.js?");

/***/ }),

/***/ "./src/methods/controls/_pause.js":
/*!****************************************!*\
  !*** ./src/methods/controls/_pause.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Start\n---------------------------------------- */\nfunction pause() {\n  this.active = false;\n  this.event.dispatch('pause');\n}\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pause);\n\n//# sourceURL=webpack://Hangin/./src/methods/controls/_pause.js?");

/***/ }),

/***/ "./src/methods/controls/_start.js":
/*!****************************************!*\
  !*** ./src/methods/controls/_start.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\n/** ----------------------------------------\n    Utils\n---------------------------------------- */\n\n/** ----------------------------------------\n    Start\n---------------------------------------- */\n\nfunction start() {\n  var schedule = this.model(this._schedule);\n  this.active = true;\n  this.plan();\n  this.event.dispatch('play', {\n    remainer: schedule.next,\n    next: schedule.next && new Date(schedule.planned)\n  });\n}\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (start);\n\n//# sourceURL=webpack://Hangin/./src/methods/controls/_start.js?");

/***/ }),

/***/ "./src/methods/controls/_update.js":
/*!*****************************************!*\
  !*** ./src/methods/controls/_update.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Update\n---------------------------------------- */\nfunction update(callback) {\n  var _this = this;\n\n  callback(function () {\n    _this.execute();\n  });\n  return _this;\n}\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (update);\n\n//# sourceURL=webpack://Hangin/./src/methods/controls/_update.js?");

/***/ }),

/***/ "./src/methods/controls/index.js":
/*!***************************************!*\
  !*** ./src/methods/controls/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _done__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_done */ \"./src/methods/controls/_done.js\");\n/* harmony import */ var _pause__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_pause */ \"./src/methods/controls/_pause.js\");\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_start */ \"./src/methods/controls/_start.js\");\n/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_update */ \"./src/methods/controls/_update.js\");\n/** ----------------------------------------\n    Utiltiies\n---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  done: _done__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  pause: _pause__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  start: _start__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  update: _update__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n//# sourceURL=webpack://Hangin/./src/methods/controls/index.js?");

/***/ }),

/***/ "./src/methods/data/_model.js":
/*!************************************!*\
  !*** ./src/methods/data/_model.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Model\n---------------------------------------- */\nfunction model(id) {\n  var data = this._models.map(function (schedule) {\n    if (schedule.id === id) return schedule;\n    var job = schedule.events.filter(function (job) {\n      return job.id === id || job.key === id;\n    });\n    return job[0];\n  });\n\n  return data[0];\n}\n\n;\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (model);\n\n//# sourceURL=webpack://Hangin/./src/methods/data/_model.js?");

/***/ }),

/***/ "./src/methods/data/index.js":
/*!***********************************!*\
  !*** ./src/methods/data/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_model */ \"./src/methods/data/_model.js\");\n/** ----------------------------------------\n    Utiltiies\n---------------------------------------- */\n\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  model: _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack://Hangin/./src/methods/data/index.js?");

/***/ }),

/***/ "./src/methods/handle/_apply.js":
/*!**************************************!*\
  !*** ./src/methods/handle/_apply.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Apply\n ---------------------------------------- */\n\n/**\n * Using the apply function configurations\n * can be set within the schedule model, these\n * will provide information about the settings\n * to be resolved within different stages of\n * handling the queue. \n * \n * @param { object } config - the specified configuration\n */\nfunction apply(config) {\n  var keys = Object.keys(config);\n  var schedule = this.model(this._schedule);\n  keys.forEach(function (key) {\n    schedule[key] = config[key];\n  });\n}\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (apply);\n\n//# sourceURL=webpack://Hangin/./src/methods/handle/_apply.js?");

/***/ }),

/***/ "./src/methods/handle/_execute.js":
/*!****************************************!*\
  !*** ./src/methods/handle/_execute.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Execute\n ---------------------------------------- */\nfunction execute() {\n  var schedule = this.model(this._schedule);\n  var events = schedule.events;\n  return this.queue(schedule, events);\n}\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (execute);\n\n//# sourceURL=webpack://Hangin/./src/methods/handle/_execute.js?");

/***/ }),

/***/ "./src/methods/handle/_loader.js":
/*!***************************************!*\
  !*** ./src/methods/handle/_loader.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_function_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/function/_timeout */ \"./src/util/function/_timeout.js\");\n/* harmony import */ var _util_format_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_progress */ \"./src/util/format/_progress.js\");\n/** ----------------------------------------\n    Utils\n---------------------------------------- */\n\n\n/** ----------------------------------------\n    Loader\n---------------------------------------- */\n\n/**\n * The loader will handle jobs and return\n * an array of promises that will resolve\n * the queue in sync. \n * \n * @param { array } jobs - an array of jobs to be handled\n * @return { array } - an array of unresolved jobs\n */\n\nfunction loader(jobs) {\n  var _this = this;\n\n  var total = jobs.length;\n  return jobs.reduce(function (promise, job, index) {\n    return promise.then(function (data) {\n      var handle = function handle() {\n        return new Promise(function (resolve) {\n          Object(_util_function_timeout__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function () {\n            job.action(resolve, data);\n            _this.progress = Object(_util_format_progress__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(job, total, index);\n            job.watch && _this.event.dispatch(job.name || job.id);\n          }, job.delay);\n        });\n      };\n\n      return job.action && handle();\n    });\n  }, Promise.resolve());\n}\n\n;\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loader);\n\n//# sourceURL=webpack://Hangin/./src/methods/handle/_loader.js?");

/***/ }),

/***/ "./src/methods/handle/_plan.js":
/*!*************************************!*\
  !*** ./src/methods/handle/_plan.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_cron */ \"./src/util/format/_cron.js\");\n/* harmony import */ var _util_format_remainder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_remainder */ \"./src/util/format/_remainder.js\");\n/* harmony import */ var _util_function_timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/function/_timeout */ \"./src/util/function/_timeout.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Plan\n ---------------------------------------- */\n\n/**\n * The plan function will handle a schedule\n * and set the timeout based on given parameters\n * initiating the queue and recur if the\n * given schedule is based on a loop.\n */\n\nfunction plan() {\n  var _this = this;\n\n  var timer;\n  var schedule = this.model(this._schedule);\n\n  if (schedule && schedule.active && this.active) {\n    var events = schedule.events,\n        cron = schedule.cron,\n        routine = schedule.routine;\n\n    var amount = Object(_util_format_remainder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_util_format_cron__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cron));\n\n    var exe = function exe() {\n      var queue = _this.queue(schedule, events);\n\n      queue.completed.then(function () {\n        routine === 'loop' ? _this.plan() : clearTimeout(timer);\n      });\n    };\n\n    timer = Object(_util_function_timeout__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function () {\n      return exe();\n    }, cron ? amount : schedule.unix);\n    this.apply({\n      timeout: timer.fn,\n      times: schedule.times + 1,\n      planned: Object(_util_format_cron__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cron),\n      next: routine === 'loop' && amount\n    });\n    this.planned = schedule;\n  }\n\n  this._chain = [];\n}\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (plan);\n\n//# sourceURL=webpack://Hangin/./src/methods/handle/_plan.js?");

/***/ }),

/***/ "./src/methods/handle/index.js":
/*!*************************************!*\
  !*** ./src/methods/handle/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_apply */ \"./src/methods/handle/_apply.js\");\n/* harmony import */ var _execute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_execute */ \"./src/methods/handle/_execute.js\");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_loader */ \"./src/methods/handle/_loader.js\");\n/* harmony import */ var _plan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_plan */ \"./src/methods/handle/_plan.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n\tExports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  apply: _apply__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  execute: _execute__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  loader: _loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  plan: _plan__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n//# sourceURL=webpack://Hangin/./src/methods/handle/index.js?");

/***/ }),

/***/ "./src/methods/schedule/extension/_at.js":
/*!***********************************************!*\
  !*** ./src/methods/schedule/extension/_at.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_cron */ \"./src/util/format/_cron.js\");\n/* harmony import */ var _util_check_isCron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/check/_isCron */ \"./src/util/check/_isCron.js\");\n/* harmony import */ var _util_format_remainder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_remainder */ \"./src/util/format/_remainder.js\");\n/* harmony import */ var _util_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/format/_time */ \"./src/util/format/_time.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n    Replace CRON\n---------------------------------------- */\n\nvar replaceCron = function replaceCron(cron, newCron) {\n  var _map = [cron, newCron].map(function (values) {\n    return values.split(' ');\n  }),\n      _map2 = _slicedToArray(_map, 2),\n      _cron = _map2[0],\n      _newCron = _map2[1];\n\n  var replaced = _cron.map(function (_, index) {\n    var newValue = _newCron[index];\n    return newValue && newValue !== '' ? newValue : _cron[index];\n  });\n\n  return replaced.join(' ');\n};\n/** ----------------------------------------\n    At\n---------------------------------------- */\n\n\nfunction at() {\n  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0:00';\n  var schedule = this.model(this._schedule);\n\n  var _time2 = Object(_util_format_time__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(time),\n      _time3 = _slicedToArray(_time2, 2),\n      hour = _time3[0],\n      minute = _time3[1];\n\n  if (schedule.cron) {\n    var cron = \"\".concat(minute, \" \").concat(hour);\n    var updated = replaceCron(schedule.cron, cron);\n    this.apply({\n      cron: updated,\n      time: time\n    });\n  }\n\n  if (!schedule.cron) {\n    this.apply({\n      time: time\n    });\n  }\n\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (at);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/extension/_at.js?");

/***/ }),

/***/ "./src/methods/schedule/index.js":
/*!***************************************!*\
  !*** ./src/methods/schedule/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _extension_at__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extension/_at */ \"./src/methods/schedule/extension/_at.js\");\n/* harmony import */ var _loop_cron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loop/_cron */ \"./src/methods/schedule/loop/_cron.js\");\n/* harmony import */ var _loop_daily__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loop/_daily */ \"./src/methods/schedule/loop/_daily.js\");\n/* harmony import */ var _loop_every__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loop/_every */ \"./src/methods/schedule/loop/_every.js\");\n/* harmony import */ var _loop_hourly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loop/_hourly */ \"./src/methods/schedule/loop/_hourly.js\");\n/* harmony import */ var _loop_interval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loop/_interval */ \"./src/methods/schedule/loop/_interval.js\");\n/* harmony import */ var _loop_monthly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loop/_monthly */ \"./src/methods/schedule/loop/_monthly.js\");\n/* harmony import */ var _loop_weekdays__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loop/_weekdays */ \"./src/methods/schedule/loop/_weekdays.js\");\n/* harmony import */ var _loop_weekend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loop/_weekend */ \"./src/methods/schedule/loop/_weekend.js\");\n/* harmony import */ var _loop_weekly__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loop/_weekly */ \"./src/methods/schedule/loop/_weekly.js\");\n/* harmony import */ var _loop_yearly__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loop/_yearly */ \"./src/methods/schedule/loop/_yearly.js\");\n/* harmony import */ var _once_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./once/_date */ \"./src/methods/schedule/once/_date.js\");\n/* harmony import */ var _once_instant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./once/_instant */ \"./src/methods/schedule/once/_instant.js\");\n/* harmony import */ var _once_once__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./once/_once */ \"./src/methods/schedule/once/_once.js\");\n/* harmony import */ var _once_timestamp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./once/_timestamp */ \"./src/methods/schedule/once/_timestamp.js\");\n/** ----------------------------------------\n    Extension\n---------------------------------------- */\n\n/** ----------------------------------------\n    Loop\n---------------------------------------- */\n\n\n\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Once\n---------------------------------------- */\n\n\n\n\n\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  at: _extension_at__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  cron: _loop_cron__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  daily: _loop_daily__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  date: _once_date__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  every: _loop_every__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  hourly: _loop_hourly__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  instant: _once_instant__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  interval: _loop_interval__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  monthly: _loop_monthly__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  once: _once_once__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  timestamp: _once_timestamp__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  weekdays: _loop_weekdays__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  weekly: _loop_weekly__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  weekend: _loop_weekend__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  yearly: _loop_yearly__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n});\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/index.js?");

/***/ }),

/***/ "./src/methods/schedule/loop/_cron.js":
/*!********************************************!*\
  !*** ./src/methods/schedule/loop/_cron.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_cron */ \"./src/util/format/_cron.js\");\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n/** ----------------------------------------\n    CRON\n---------------------------------------- */\n\n/**\n * The cron method can be configured using\n * different parameters, as long as it matches\n * the cron syntax. \n *\n * @param { string } cron - minute hour date month day\n * @return { this } extend instance\n */\n\nfunction cron() {\n  var cron = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '* * * * *';\n  this.apply({\n    active: true,\n    routine: 'loop',\n    cron: cron\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cron);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/loop/_cron.js?");

/***/ }),

/***/ "./src/methods/schedule/loop/_daily.js":
/*!*********************************************!*\
  !*** ./src/methods/schedule/loop/_daily.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_cron */ \"./src/util/format/_cron.js\");\n/* harmony import */ var _util_format_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_time */ \"./src/util/format/_time.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n/** ----------------------------------------\n    Daily\n---------------------------------------- */\n\n/**\n * The daily method needs a time specified\n * as HH:MM. It will set a schedule on the \n * model and handle a new queue based on \n * given information.\n *\n * @param { string } time - HH:MM format\n * @return { this } extend instance\n */\n\nfunction daily() {\n  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0:00';\n\n  var _time2 = Object(_util_format_time__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(time),\n      _time3 = _slicedToArray(_time2, 2),\n      hour = _time3[0],\n      minute = _time3[1];\n\n  var cron = \"\".concat(minute, \" \").concat(hour, \" * * *\");\n  this.apply({\n    active: true,\n    routine: 'loop',\n    cron: cron,\n    time: time\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (daily);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/loop/_daily.js?");

/***/ }),

/***/ "./src/methods/schedule/loop/_every.js":
/*!*********************************************!*\
  !*** ./src/methods/schedule/loop/_every.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_day__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_day */ \"./src/util/format/_day.js\");\n/* harmony import */ var _util_format_increment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_increment */ \"./src/util/format/_increment.js\");\n/* harmony import */ var _util_format_month__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_month */ \"./src/util/format/_month.js\");\n/* harmony import */ var _util_function_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/function/_timer */ \"./src/util/function/_timer.js\");\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n\n\n/** ----------------------------------------\n    Types\n---------------------------------------- */\n\nvar types = ['minute', 'hour', 'day', 'week', 'month', 'year'];\n/** ----------------------------------------\n    Every\n---------------------------------------- */\n\nfunction every() {\n  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'minute';\n  var value = arguments.length > 1 ? arguments[1] : undefined;\n\n  if (types.includes(type)) {\n    var cron = null;\n\n    var _value = value || 0;\n\n    if (type === 'minute') cron = \"* * * * *\";\n    if (type === 'hour') cron = \"\".concat(_value, \" * * * *\");\n    if (type === 'day') cron = \"0 \".concat(_value, \" * * *\");\n    if (type === 'week') cron = \"* * * * \".concat(typeof value === 'string' ? Object(_util_format_day__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_value) : _value);\n    if (type === 'month') cron = \"* * \".concat(_value + 1, \" * *\");\n    if (type === 'year') cron = \"* * * \".concat(typeof value === 'string' ? Object(_util_format_month__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_value) : _value, \" *\");\n    this.apply({\n      active: true,\n      routine: 'loop',\n      cron: cron\n    });\n    return this;\n  }\n\n  return console.error('Not a supported selector:', type);\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (every);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/loop/_every.js?");

/***/ }),

/***/ "./src/methods/schedule/loop/_hourly.js":
/*!**********************************************!*\
  !*** ./src/methods/schedule/loop/_hourly.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_cron */ \"./src/util/format/_cron.js\");\n/* harmony import */ var _util_format_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_time */ \"./src/util/format/_time.js\");\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n/** ----------------------------------------\n    Hourly\n---------------------------------------- */\n\nfunction hourly() {\n  var minute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var cron = \"\".concat(minute, \" * * * *\");\n  this.apply({\n    active: true,\n    routine: 'loop',\n    cron: cron\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hourly);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/loop/_hourly.js?");

/***/ }),

/***/ "./src/methods/schedule/loop/_interval.js":
/*!************************************************!*\
  !*** ./src/methods/schedule/loop/_interval.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Interval\n---------------------------------------- */\nfunction interval(interval) {\n  this.apply({\n    active: true,\n    routine: 'loop',\n    unix: interval\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (interval);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/loop/_interval.js?");

/***/ }),

/***/ "./src/methods/schedule/loop/_monthly.js":
/*!***********************************************!*\
  !*** ./src/methods/schedule/loop/_monthly.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_cron */ \"./src/util/format/_cron.js\");\n/* harmony import */ var _util_format_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_time */ \"./src/util/format/_time.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n/** ----------------------------------------\n    Monthly\n---------------------------------------- */\n\n/**\n * The monthly method needs a day and time \n * specified as HH:MM. It will set a schedule \n * on the model and handle a new queue \n * based on given information.\n *\n * @param { number } day - number between 1 - 31\n * @param { string } time - HH:MM format\n * @return { this } extend instance\n */\n\nfunction monthly() {\n  var day = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0:00';\n\n  var _time2 = Object(_util_format_time__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(time),\n      _time3 = _slicedToArray(_time2, 2),\n      hour = _time3[0],\n      minute = _time3[1];\n\n  var cron = \"\".concat(minute, \" \").concat(hour, \" \").concat(day, \" * *\");\n  this.apply({\n    active: true,\n    routine: 'loop',\n    cron: cron,\n    time: time\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (monthly);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/loop/_monthly.js?");

/***/ }),

/***/ "./src/methods/schedule/loop/_weekdays.js":
/*!************************************************!*\
  !*** ./src/methods/schedule/loop/_weekdays.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_time */ \"./src/util/format/_time.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n/** ----------------------------------------\n    Weekdays\n---------------------------------------- */\n\n/**\n * The weekdays method will only execute\n * from monday till friday and be called\n * on a specific given time.\n *\n * @param { string } time - HH:MM format\n * @return { this } extend instance\n */\n\nfunction weekdays() {\n  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0:00';\n\n  var _time2 = Object(_util_format_time__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time),\n      _time3 = _slicedToArray(_time2, 2),\n      hour = _time3[0],\n      minute = _time3[1];\n\n  var cron = \"\".concat(minute, \" \").concat(hour, \" * * 1-5\");\n  this.apply({\n    active: true,\n    routine: 'loop',\n    cron: cron,\n    time: time\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weekdays);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/loop/_weekdays.js?");

/***/ }),

/***/ "./src/methods/schedule/loop/_weekend.js":
/*!***********************************************!*\
  !*** ./src/methods/schedule/loop/_weekend.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_remainder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_remainder */ \"./src/util/format/_remainder.js\");\n/* harmony import */ var _util_format_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_time */ \"./src/util/format/_time.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n/** ----------------------------------------\n    Weekend\n---------------------------------------- */\n\n/**\n * The weekend method will only execute\n * on saterday and sunday, and be called\n * on a specific given time.\n *\n * @param { string } time - HH:MM format\n * @return { this } extend instance\n */\n\nfunction weekend() {\n  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0:00';\n\n  var _time2 = Object(_util_format_time__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(time),\n      _time3 = _slicedToArray(_time2, 2),\n      hour = _time3[0],\n      minute = _time3[1];\n\n  var cron = \"\".concat(minute, \" \").concat(hour, \" * * 0,6\");\n  this.apply({\n    active: true,\n    routine: 'loop',\n    cron: cron,\n    time: time\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weekend);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/loop/_weekend.js?");

/***/ }),

/***/ "./src/methods/schedule/loop/_weekly.js":
/*!**********************************************!*\
  !*** ./src/methods/schedule/loop/_weekly.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_cron */ \"./src/util/format/_cron.js\");\n/* harmony import */ var _util_format_day__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_day */ \"./src/util/format/_day.js\");\n/* harmony import */ var _util_format_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_time */ \"./src/util/format/_time.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Weekly\n---------------------------------------- */\n\n/**\n * The weekly method needs a day of the week\n * for instance 'monday' or 'saterday' and \n * will schedule your jobs for a given time\n * if specified. \n *\n * @param { string } dayOfWeek (monday) - week days\n * @param { string } time (0:00) - HH:MM format\n * @return { this } extend instance\n */\n\nfunction weekly() {\n  var dayOfWeek = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'monday';\n  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0:00';\n\n  var _time2 = Object(_util_format_time__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(time),\n      _time3 = _slicedToArray(_time2, 2),\n      hour = _time3[0],\n      minute = _time3[1];\n\n  var day = days.indexOf(dayOfWeek);\n  var cron = \"\".concat(minute, \" \").concat(hour, \" * * \").concat(Object(_util_format_day__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(day));\n  this.apply({\n    active: true,\n    routine: 'loop',\n    cron: cron,\n    time: time\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weekly);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/loop/_weekly.js?");

/***/ }),

/***/ "./src/methods/schedule/loop/_yearly.js":
/*!**********************************************!*\
  !*** ./src/methods/schedule/loop/_yearly.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_cron */ \"./src/util/format/_cron.js\");\n/* harmony import */ var _util_format_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_time */ \"./src/util/format/_time.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n/** ----------------------------------------\n    Yearly\n---------------------------------------- */\n\n/**\n * The yearly method needs a month, day and\n * time as HH:MM. It will set a schedule on the \n * model and handle a new queue based on \n * given information.\n *\n * @param { number } month - number between 1 - 12\n * @param { number } day - number between 1 - 31\n * @param { string } time - HH:MM format\n * @return { this } extend instance\n */\n\nfunction yearly() {\n  var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var day = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0:00';\n\n  var _time2 = Object(_util_format_time__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(time),\n      _time3 = _slicedToArray(_time2, 2),\n      hour = _time3[0],\n      minute = _time3[1];\n\n  var cron = \"\".concat(minute, \" \").concat(hour, \" \").concat(day, \" \").concat(month, \" *\");\n  this.apply({\n    active: true,\n    routine: 'loop',\n    cron: cron,\n    time: time\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (yearly);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/loop/_yearly.js?");

/***/ }),

/***/ "./src/methods/schedule/once/_date.js":
/*!********************************************!*\
  !*** ./src/methods/schedule/once/_date.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_date */ \"./src/util/format/_date.js\");\n/* harmony import */ var _util_format_remainder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_remainder */ \"./src/util/format/_remainder.js\");\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Date\n---------------------------------------- */\n\nfunction date(date) {\n  var split = Object(_util_format_date__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date);\n\n  var stamp = Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(split);\n\n  var unix = Object(_util_format_remainder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(stamp.unix);\n\n  this.apply({\n    active: true,\n    routine: 'once',\n    unix: unix,\n    time: '0:00'\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (date);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/once/_date.js?");

/***/ }),

/***/ "./src/methods/schedule/once/_instant.js":
/*!***********************************************!*\
  !*** ./src/methods/schedule/once/_instant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Instant\n---------------------------------------- */\nfunction instant() {\n  this.apply({\n    active: true,\n    routine: 'once',\n    unix: 0\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (instant);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/once/_instant.js?");

/***/ }),

/***/ "./src/methods/schedule/once/_once.js":
/*!********************************************!*\
  !*** ./src/methods/schedule/once/_once.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_cron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_cron */ \"./src/util/format/_cron.js\");\n/* harmony import */ var _util_format_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_date */ \"./src/util/format/_date.js\");\n/* harmony import */ var _util_format_remainder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_remainder */ \"./src/util/format/_remainder.js\");\n/* harmony import */ var _util_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/format/_time */ \"./src/util/format/_time.js\");\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n\n\n\n/** ----------------------------------------\n    Once\n---------------------------------------- */\n\nfunction once(date) {\n  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0:00:00';\n\n  var formatDate = Object(_util_format_date__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(date);\n\n  var formatTime = Object(_util_format_time__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(time);\n\n  var stamp = Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(formatDate, formatTime);\n\n  var unix = Object(_util_format_remainder__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(stamp.unix);\n\n  this.apply({\n    active: true,\n    routine: 'once',\n    unix: unix\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (once);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/once/_once.js?");

/***/ }),

/***/ "./src/methods/schedule/once/_timestamp.js":
/*!*************************************************!*\
  !*** ./src/methods/schedule/once/_timestamp.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_remainder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_remainder */ \"./src/util/format/_remainder.js\");\n/** ----------------------------------------\n    Utils\n---------------------------------------- */\n\n/** ----------------------------------------\n    Timestamp\n---------------------------------------- */\n\nfunction timestamp(unix) {\n  this.apply({\n    active: true,\n    routine: 'once',\n    unix: unix\n  });\n  return this;\n}\n\n;\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (timestamp);\n\n//# sourceURL=webpack://Hangin/./src/methods/schedule/once/_timestamp.js?");

/***/ }),

/***/ "./src/setup/_construct.js":
/*!*********************************!*\
  !*** ./src/setup/_construct.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_config_default_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/config/default.config */ \"./src/config/default.config.js\");\n/** ----------------------------------------\n    Defaults\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Construct\n ---------------------------------------- */\n\nfunction construct(model, config) {\n  var defaults = Object(_js_config_default_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(config);\n  defaults.forEach(function (config) {\n    return model['_' + config.name] = config.value;\n  });\n}\n\n;\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (construct);\n\n//# sourceURL=webpack://Hangin/./src/setup/_construct.js?");

/***/ }),

/***/ "./src/setup/_extends.js":
/*!*******************************!*\
  !*** ./src/setup/_extends.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Extend\n ---------------------------------------- */\nvar extend = function extend(model, fn) {\n  Object.keys(fn).forEach(function (method) {\n    return model.prototype[method] = fn[method];\n  });\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (extend);\n\n//# sourceURL=webpack://Hangin/./src/setup/_extends.js?");

/***/ }),

/***/ "./src/setup/_init.js":
/*!****************************!*\
  !*** ./src/setup/_init.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Extend\n ---------------------------------------- */\nvar init = function init(model, fn) {\n  Object.keys(fn).forEach(function (state) {\n    fn[state](model.prototype);\n  });\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack://Hangin/./src/setup/_init.js?");

/***/ }),

/***/ "./src/setup/_middleware.js":
/*!**********************************!*\
  !*** ./src/setup/_middleware.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/** ----------------------------------------\n    Middleware\n ---------------------------------------- */\nfunction middleware(obj) {\n  var extend = Object.getPrototypeOf(new obj());\n  var prototype = Object.getPrototypeOf(extend);\n  var methods = Object.getOwnPropertyNames(prototype);\n\n  var _iterator = _createForOfIteratorHelper(methods),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var method = _step.value;\n      var fn = prototype[method];\n\n      if (typeof fn === 'function' && fn.name !== 'Core') {\n        prototype[method] = function () {\n          fn && this._chain.push(fn.name);\n\n          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n          }\n\n          return fn.call.apply(fn, [this].concat(args));\n        };\n      }\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return obj;\n}\n\n;\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (middleware);\n\n//# sourceURL=webpack://Hangin/./src/setup/_middleware.js?");

/***/ }),

/***/ "./src/state/_active.js":
/*!******************************!*\
  !*** ./src/state/_active.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Active\n ---------------------------------------- */\n\n/**\n * The active state will manage the state\n * of the schedules, it can be controlled\n * using the controller methods. Besides\n * controlling the state, a change will \n * dispatch the \"active\" event to the \n * observer class. \n *\n * @param { boolean } bool - state\n * @return { boolean } state\n */\nfunction active(model) {\n  var _active = true;\n  Object.defineProperty(model, 'active', {\n    get: function get() {\n      return _active;\n    },\n    set: function set(bool) {\n      _active = bool;\n      model.event.dispatch('active', bool);\n    }\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (active);\n\n//# sourceURL=webpack://Hangin/./src/state/_active.js?");

/***/ }),

/***/ "./src/state/_event.js":
/*!*****************************!*\
  !*** ./src/state/_event.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_helper_Emit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/helper/Emit */ \"./src/util/helper/Emit.js\");\n/** ----------------------------------------\n    Event\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Events\n ---------------------------------------- */\n\n/**\n * Declares a global event listener that can\n * be used to either dispatch events or listen\n * to changes made handeling \n */\n\nfunction event(model) {\n  var _event = new _util_helper_Emit__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  Object.defineProperty(model, 'event', {\n    get: function get() {\n      return _event;\n    },\n    set: function set() {}\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (event);\n\n//# sourceURL=webpack://Hangin/./src/state/_event.js?");

/***/ }),

/***/ "./src/state/_loading.js":
/*!*******************************!*\
  !*** ./src/state/_loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Loading\n ---------------------------------------- */\n\n/**\n * Declares a loading state and will dispatch\n * the loading event once the state is changed,\n * this state is only used within the codebase\n * and can be exposed using the loading event. \n */\nfunction loading(model) {\n  var _loading = false;\n  Object.defineProperty(model, 'loading', {\n    get: function get() {\n      return _loading;\n    },\n    set: function set(bool) {\n      if (bool !== _loading) {\n        _loading = bool;\n        model.event.dispatch('loading', bool);\n      }\n    }\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loading);\n\n//# sourceURL=webpack://Hangin/./src/state/_loading.js?");

/***/ }),

/***/ "./src/state/_log.js":
/*!***************************!*\
  !*** ./src/state/_log.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Log\n ---------------------------------------- */\nfunction log(model) {\n  var _log = false;\n  Object.defineProperty(model, 'log', {\n    get: function get() {\n      return _log;\n    },\n    set: function set(bool) {\n      _log = bool;\n    }\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (log);\n\n//# sourceURL=webpack://Hangin/./src/state/_log.js?");

/***/ }),

/***/ "./src/state/_model.js":
/*!*****************************!*\
  !*** ./src/state/_model.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Models\n ---------------------------------------- */\nfunction model(model) {\n  var _models = [];\n  Object.defineProperty(model, '_models', {\n    get: function get() {\n      return _models;\n    },\n    set: function set(model) {\n      var index = _models.filter(function (item) {\n        return item.model === model.id;\n      });\n\n      if (index) _models.splice(index, 1);\n\n      _models.push(model);\n    }\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (model);\n\n//# sourceURL=webpack://Hangin/./src/state/_model.js?");

/***/ }),

/***/ "./src/state/_planned.js":
/*!*******************************!*\
  !*** ./src/state/_planned.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_function_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/function/_id */ \"./src/util/function/_id.js\");\n/* harmony import */ var _util_format_remainder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_remainder */ \"./src/util/format/_remainder.js\");\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\n/** ----------------------------------------\n    Planned\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Planned\n ---------------------------------------- */\n\n/**\n * Implements a array of planned schedules\n * and will automatically clear planned\n * schedules once the schedule is looping.\n */\n\nfunction planned(model) {\n  var _planned = [];\n  Object.defineProperty(model, 'planned', {\n    get: function get() {\n      return _planned.map(function (model) {\n        return Object.assign(model, {\n          \"await\": Object(_util_format_remainder__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(model.next)\n        });\n      });\n    },\n    set: function set(_ref) {\n      var id = _ref.id,\n          next = _ref.next;\n\n      var now = Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n      var index = _planned.filter(function (item) {\n        return item.model === id;\n      });\n\n      if (index) _planned.splice(index, 1);\n\n      _planned.push({\n        active: true,\n        id: Object(_util_function_id__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n        model: id,\n        next: new Date(now.unix + next)\n      });\n    }\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (planned);\n\n//# sourceURL=webpack://Hangin/./src/state/_planned.js?");

/***/ }),

/***/ "./src/state/_progress.js":
/*!********************************!*\
  !*** ./src/state/_progress.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_debug_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/debug/_schema */ \"./src/util/debug/_schema.js\");\n/** ----------------------------------------\n    Schema\n ---------------------------------------- */\n\nvar validate = Object(_util_debug_schema__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  state: String,\n  progress: Number,\n  name: String,\n  percentage: Number,\n  total: Number\n});\n/** ----------------------------------------\n    Progress\n ---------------------------------------- */\n\nfunction progress(model) {\n  var _progress = {};\n  Object.defineProperty(model, 'progress', {\n    get: function get() {\n      return _progress;\n    },\n    set: function set(info) {\n      if (validate(info)) {\n        _progress = info;\n        model.event.dispatch('progress', info);\n      }\n    }\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (progress);\n\n//# sourceURL=webpack://Hangin/./src/state/_progress.js?");

/***/ }),

/***/ "./src/state/_schedule.js":
/*!********************************!*\
  !*** ./src/state/_schedule.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Schedule\n ---------------------------------------- */\nfunction schedule(model) {\n  var _schedule = null;\n  Object.defineProperty(model, '_schedule', {\n    get: function get() {\n      return _schedule;\n    },\n    set: function set(value) {\n      _schedule = value;\n    }\n  });\n}\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schedule);\n\n//# sourceURL=webpack://Hangin/./src/state/_schedule.js?");

/***/ }),

/***/ "./src/state/index.js":
/*!****************************!*\
  !*** ./src/state/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _active__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_active */ \"./src/state/_active.js\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_event */ \"./src/state/_event.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_loading */ \"./src/state/_loading.js\");\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_log */ \"./src/state/_log.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_model */ \"./src/state/_model.js\");\n/* harmony import */ var _planned__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_planned */ \"./src/state/_planned.js\");\n/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_progress */ \"./src/state/_progress.js\");\n/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_schedule */ \"./src/state/_schedule.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  active: _active__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  event: _event__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  loading: _loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  log: _log__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  model: _model__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  planned: _planned__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  progress: _progress__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  schedule: _schedule__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n});\n\n//# sourceURL=webpack://Hangin/./src/state/index.js?");

/***/ }),

/***/ "./src/util/check/_compareArray.js":
/*!*****************************************!*\
  !*** ./src/util/check/_compareArray.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Compare Array\n ---------------------------------------- */\n\n/**\n * Will compare two arrays and check if all\n * values are equal in both arrays. \n *\n * @param { array } original - first array\n * @param { array } compare - second array\n * @return { boolean } result\n */\nvar compareArray = function compareArray(original, compare) {\n  return original.length === compare.length && original.every(function (value, index) {\n    return value === compare[index];\n  });\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (compareArray);\n\n//# sourceURL=webpack://Hangin/./src/util/check/_compareArray.js?");

/***/ }),

/***/ "./src/util/check/_isArray.js":
/*!************************************!*\
  !*** ./src/util/check/_isArray.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Is Array\n ---------------------------------------- */\n\n/**\n * Will check if given value is of type array.\n *\n * @param { string | number | array | object } value - given value\n * @return { boolean } result\n */\nvar isArray = function isArray(value) {\n  return Array.isArray(value);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isArray);\n\n//# sourceURL=webpack://Hangin/./src/util/check/_isArray.js?");

/***/ }),

/***/ "./src/util/check/_isCron.js":
/*!***********************************!*\
  !*** ./src/util/check/_isCron.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/** ----------------------------------------\n    Utilties\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Is CRON\n ---------------------------------------- */\n\n/**\n * Will check if given value is a valid \n * CRON value based on regex expression.\n *\n * @param { string  } string - given value\n * @return { boolean } result\n */\n\nvar isCron = function isCron(string) {\n  var regex = /^(\\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\\*\\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\\*|([0-9]|1[0-9]|2[0-3])|\\*\\/([0-9]|1[0-9]|2[0-3])) (\\*|([1-9]|1[0-9]|2[0-9]|3[0-1])|\\*\\/([1-9]|1[0-9]|2[0-9]|3[0-1])) (\\*|([1-9]|1[0-2])|\\*\\/([1-9]|1[0-2])) (\\*|([0-6])|\\*\\/([0-6]))$/;\n  return !string.match(regex);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isCron);\n\n//# sourceURL=webpack://Hangin/./src/util/check/_isCron.js?");

/***/ }),

/***/ "./src/util/check/_isEmptyObj.js":
/*!***************************************!*\
  !*** ./src/util/check/_isEmptyObj.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Is Empty Object\n ---------------------------------------- */\n\n/**\n * Will check if a given object has key\n * value pairs present.\n *\n * @param { object } obj - given object\n * @return { boolean } result\n */\nvar isEmptyObj = function isEmptyObj(obj) {\n  return !!(obj && Object.keys(obj).length === 0);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isEmptyObj);\n\n//# sourceURL=webpack://Hangin/./src/util/check/_isEmptyObj.js?");

/***/ }),

/***/ "./src/util/check/_isNow.js":
/*!**********************************!*\
  !*** ./src/util/check/_isNow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_compareArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_compareArray */ \"./src/util/check/_compareArray.js\");\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Is Now\n ---------------------------------------- */\n\n/**\n * Will compare a given time to the current \n * time and return a check.\n *\n * @param { array  } time - hour and minute\n * @return { boolean } result\n */\n\nvar isNow = function isNow(time) {\n  var stamp = Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  var _stamp$time = _slicedToArray(stamp.time, 2),\n      hour = _stamp$time[0],\n      minute = _stamp$time[1];\n\n  return !Object(_util_check_compareArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([hour, minute], time);\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isNow);\n\n//# sourceURL=webpack://Hangin/./src/util/check/_isNow.js?");

/***/ }),

/***/ "./src/util/check/_isToday.js":
/*!************************************!*\
  !*** ./src/util/check/_isToday.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Today\n ---------------------------------------- */\n\n/**\n * Check if a given timestamp is today. This\n * will flatten time, meaning only day, month\n * and year are compared.\n *\n * @param { number } stamp - timestamp to compare\n * @return { boolean } result\n */\n\nvar isToday = function isToday(stamp) {\n  var today = Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  var todayValue = today.stamp.setHours(0, 0, 0, 0);\n  var stampValue = stamp.setHours(0, 0, 0, 0);\n  return todayValue === stampValue;\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isToday);\n\n//# sourceURL=webpack://Hangin/./src/util/check/_isToday.js?");

/***/ }),

/***/ "./src/util/check/_isType.js":
/*!***********************************!*\
  !*** ./src/util/check/_isType.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isArray */ \"./src/util/check/_isArray.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Is Type\n ---------------------------------------- */\n\n/**\n * Check the type of a given value.\n *\n * @param { boolean | string | number | array | object } value - value to check\n * @return { string } type of given value\n */\n\nvar isType = function isType(value) {\n  return Object(_util_check_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value) && 'array' || _typeof(value);\n};\n/** ----------------------------------------\n    Exports\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isType);\n\n//# sourceURL=webpack://Hangin/./src/util/check/_isType.js?");

/***/ }),

/***/ "./src/util/debug/_error.js":
/*!**********************************!*\
  !*** ./src/util/debug/_error.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isArray */ \"./src/util/check/_isArray.js\");\n/** ----------------------------------------\n   Utilties\n---------------------------------------- */\n\n/** ----------------------------------------\n    Error\n ---------------------------------------- */\n\n/**\n * A simple schema type validator for matching\n * types. Used for type validation in objects, \n * will return a closure that can validate a given\n * object. The closure will resolve a boolean\n * that will output the resolved checks. \n * \n * @param { bool } checks - operation\n * @param { string } message - optional error message\n * @return { bool } validate\n */\n\nvar error = function error(checks, message) {\n  var validated = !message || Object(_util_check_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(checks) ? checks.every(function (check) {\n    return check;\n  }) : checks;\n  return validated && console.error(message);\n};\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (error);\n\n//# sourceURL=webpack://Hangin/./src/util/debug/_error.js?");

/***/ }),

/***/ "./src/util/debug/_schema.js":
/*!***********************************!*\
  !*** ./src/util/debug/_schema.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isArray */ \"./src/util/check/_isArray.js\");\n/* harmony import */ var _util_check_isEmptyObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/check/_isEmptyObj */ \"./src/util/check/_isEmptyObj.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n/** ----------------------------------------\n    Schema\n---------------------------------------- */\n\n/**\n * A simple (schema) type validator for matching\n * types. Used for type validation in objects, \n * will return a closure that can validate a given\n * object. The closure will resolve a boolean\n * that will output the resolved checks. \n * \n * Use as follows:\n * \n * const validate = schema({\n *   title: String,\n *   category: [Array, Boolean]\n * });\n * \n * const check = validate({\n *   title: 'Sander',\n *   category: ['developer']\n * })\n * \n * console.log(check) // true\n * \n * @param { schema } object - keys and matching type(s)\n * @return { function } validate\n */\n\nvar schema = function schema(_schema) {\n  var check = function check(value, type) {\n    return (Object(_util_check_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value) ? 'array' : _typeof(value)) === type.name.toLowerCase();\n  };\n\n  return function (obj) {\n    var keys = Object.keys(obj);\n    var checks = keys.reduce(function (array, key) {\n      var types = _schema[key];\n      var value = obj[key];\n      if (!types) return array;\n\n      var multiple = Object(_util_check_isArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(types);\n\n      var compare = !multiple ? check(value, types) : types.some(function (type) {\n        return check(value, type);\n      });\n      var log = multiple ? types.map(function (type) {\n        return type.name;\n      }).join(', ') : types.name;\n      if (!compare) console.error(\"Given value for \".concat(key, \" (\").concat(_typeof(value), \") is not of a valid type matching the schema: [\").concat(log, \"]\"));\n      array.push(compare);\n      return array;\n    }, []);\n    return checks.every(function (check) {\n      return !!check;\n    });\n  };\n};\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (schema);\n\n//# sourceURL=webpack://Hangin/./src/util/debug/_schema.js?");

/***/ }),

/***/ "./src/util/format/_cron.js":
/*!**********************************!*\
  !*** ./src/util/format/_cron.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_compareArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_compareArray */ \"./src/util/check/_compareArray.js\");\n/* harmony import */ var _util_check_isCron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/check/_isCron */ \"./src/util/check/_isCron.js\");\n/* harmony import */ var _util_check_isNow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/check/_isNow */ \"./src/util/check/_isNow.js\");\n/* harmony import */ var _util_check_isToday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/check/_isToday */ \"./src/util/check/_isToday.js\");\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _util_format_increment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @util/format/_increment */ \"./src/util/format/_increment.js\");\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\n/* harmony import */ var _util_function_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @util/function/_timer */ \"./src/util/function/_timer.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n\n\n\n\n\n\n/** ----------------------------------------\n    Values\n---------------------------------------- */\n\nvar error = false;\nvar dateValue = null;\nvar nextDateValue = null;\nvar timeValue = null;\nvar nextTimeValue = null;\n/** ----------------------------------------\n    CRON Values\n---------------------------------------- */\n\nvar cronValues = {\n  minute: [0, 59],\n  hour: [0, 12],\n  dayMonth: [0, 31],\n  month: [0, 12],\n  dayWeek: [0, 6]\n};\n/** ----------------------------------------\n    Date Functions\n---------------------------------------- */\n\nvar dateFn = function dateFn(type) {\n  var fn = {\n    minute: 'getMinutes',\n    hour: 'getHours',\n    dayMonth: 'getDate',\n    month: 'getMonth',\n    dayWeek: 'getDay'\n  };\n  return fn[type];\n};\n/** ----------------------------------------\n    Characters\n---------------------------------------- */\n\n\nvar characters = {\n  range: '-',\n  step: '/',\n  seperator: ','\n};\n/** ----------------------------------------\n    Parse\n---------------------------------------- */\n\nvar parse = function parse(values) {\n  return Array.isArray(values) ? values.map(function (value) {\n    return parseInt(value);\n  }) : parseInt(value);\n};\n/** ----------------------------------------\n    Parse\n---------------------------------------- */\n\n\nvar match = function match(value, type) {\n  if (value === '*') return value;\n  var matches = {\n    minute: /^([1-5]?[0-9])$/,\n    hour: /^(2[0-3]|1[0-9]|[0-9])$/,\n    dayMonth: /^(3[01]|[12][0-9]|[1-9])$/,\n    month: /^(1[0-2]|[1-9])$/,\n    dayWeek: /^([0-6])$/\n  }; // changed || from &&\n\n  return Object.keys(matches).includes(type) && value.match(matches[type]) || value;\n};\n/** ----------------------------------------\n    Type\n---------------------------------------- */\n\n\nvar value = function value(_value, type) {\n  var values = null;\n  var cronType = null;\n  var types = {\n    range: range,\n    step: step,\n    seperator: seperator\n  };\n  Object.keys(characters).forEach(function (character) {\n    if (_value.includes(characters[character])) cronType = character;\n  });\n\n  if (_value === '*') {\n    var _cronValues$type = _slicedToArray(cronValues[type], 2),\n        min = _cronValues$type[0],\n        max = _cronValues$type[1];\n\n    values = [].concat(_toConsumableArray(Array.from({\n      length: max - min\n    }, function (_, number) {\n      return number + min;\n    })), [max]);\n  }\n\n  return {\n    input: _value,\n    values: values || parse(cronType ? types[cronType](_value, type) : [match(_value, type)]),\n    cronType: cronType,\n    character: characters[cronType] || null\n  };\n};\n/** ----------------------------------------\n    Next Value\n---------------------------------------- */\n\n\nvar nextValue = function nextValue(array, value) {\n  if (array.length) {\n    var index = array.indexOf(value);\n    if (index === array.length - 1) return array[0];\n    return array[index + 1];\n  }\n\n  return value;\n};\n/** ----------------------------------------\n    Types\n---------------------------------------- */\n\n\nvar generic = function generic(value, type, character) {\n  var split = value.split(character);\n  var check = split.every(function (value) {\n    return match(value, type);\n  });\n  if (check) return split;\n};\n\nvar range = function range(value, type) {\n  var range = generic(value, type, '-');\n\n  if (range.length) {\n    var min = Math.min.apply(Math, _toConsumableArray(parse(range)));\n    var max = Math.max.apply(Math, _toConsumableArray(parse(range)));\n    return [].concat(_toConsumableArray(Array.from({\n      length: max - min\n    }, function (_, number) {\n      return number + min;\n    })), [max]);\n  }\n};\n\nvar step = function step(value, type) {\n  var range = generic(value, type, '/');\n  var length = cronValues[type][1];\n\n  if (range.length) {\n    var min = Math.min.apply(Math, _toConsumableArray(parse(range)));\n    var max = Math.max.apply(Math, _toConsumableArray(parse(range)));\n    var values = Array.from({\n      length: length\n    }, function (_, number) {\n      if (number % max == 0 && number > min) return number + min;\n    });\n    return [min].concat(_toConsumableArray(values.filter(function (number) {\n      return !!number;\n    })));\n  }\n};\n\nvar seperator = function seperator(value, type) {\n  return generic(value, type, ',');\n};\n/** ----------------------------------------\n    Loop Date\n---------------------------------------- */\n\n\nvar checkDate = function checkDate(options, type, stamp) {\n  if (options[type].input !== '*') {\n    var fn = dateFn(type);\n    var current = stamp[fn]();\n    return parse(options[type].values).includes(current);\n  }\n\n  return true;\n};\n\nvar loopDate = function loopDate(options) {\n  var i = 0;\n\n  while (!nextDateValue) {\n    if (i > 365 * 5) {\n      console.error('Could not find a matching date. A match should be made within a period of 5 years!');\n      break;\n    }\n\n    var next = Object(_util_format_increment__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(i);\n\n    var date = Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(next);\n\n    var stamp = date.stamp;\n    var checkDayMonth = checkDate(options, 'dayMonth', stamp);\n    var checkMonth = checkDate(options, 'month', stamp);\n    var checkDayWeek = checkDate(options, 'dayWeek', stamp);\n    var nextDate = [checkDayMonth, checkMonth, checkDayWeek].every(function (check) {\n      return check;\n    });\n\n    if (nextDate) {\n      if (!nextDateValue && dateValue) nextDateValue = stamp;\n      if (!dateValue) dateValue = stamp;\n    }\n\n    i++;\n  }\n\n  return dateValue;\n};\n/** ----------------------------------------\n    Loop Time\n---------------------------------------- */\n\n\nvar checkTime = function checkTime(options, type, stamp) {\n  var fn = dateFn(type);\n  var current = stamp[fn]();\n\n  if (options[type].input !== '*') {\n    var values = options[type].values;\n    var min = Math.min.apply(Math, _toConsumableArray(values));\n    return values.filter(function (value) {\n      return current <= value;\n    })[0] || min;\n  }\n\n  return current;\n};\n\nvar correctTime = function correctTime(options, hour, minute, stamp) {\n  var hours = hour;\n  var minutes = minute;\n  var minuteFn = dateFn('minute');\n  var currentMinute = stamp[minuteFn]();\n  var hourFn = dateFn('hour');\n  var currentHour = stamp[hourFn]();\n  var minuteValues = options['minute'].values;\n  var hourValues = options['hour'].values;\n  var minuteMin = Math.min.apply(Math, _toConsumableArray(minuteValues));\n  var minuteMax = Math.max.apply(Math, _toConsumableArray(hourValues));\n  var hourMin = Math.min.apply(Math, _toConsumableArray(hourValues));\n  var hourMax = Math.max.apply(Math, _toConsumableArray(hourValues));\n\n  if (minute < currentMinute && hourValues.length > 1) {\n    minutes = minuteMin;\n    if (hourMax > currentHour || !isNaN(!hourValues[0])) hours++;\n  }\n\n  if (Object(_util_check_compareArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([currentHour, currentMinute], [hours, minutes])) {\n    minutes = nextValue(minuteValues, minute);\n    if (minutes === currentMinute) hours++;\n  }\n\n  if (hours === 24) hours = 0;\n  return [hours, minutes];\n};\n\nvar loopTime = function loopTime(options) {\n  var date = Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n  var stamp = date.stamp;\n  var hour = checkTime(options, 'hour', stamp);\n  var minute = checkTime(options, 'minute', stamp);\n  return correctTime(options, hour, minute, stamp);\n};\n/** ----------------------------------------\n    Cron\n---------------------------------------- */\n\n\nvar correctCronDate = function correctCronDate(time) {\n  var date = Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n  var stamp = date.time;\n\n  var _time = _slicedToArray(time, 2),\n      hour = _time[0],\n      minute = _time[1];\n\n  var _stamp = _slicedToArray(stamp, 2),\n      currentHour = _stamp[0],\n      currentMinute = _stamp[1];\n\n  return hour < currentHour || hour === currentHour && minute < currentMinute;\n};\n/**\n * The cron function will create a timestamp\n * based on a cronjob that can be passed as\n * a string. The syntax follows the following\n * order: minute, hour, day of the month, month,\n * day of the week. It also supports multiple\n * options for adding multiple parameters:\n * \n * (*) any value\n * (,) list separator\n * (-) range of values\n * (/) step values\n *\n * @param { string } values - cron syntaxed string\n * @return { number } timestamp for selected date\n */\n\n\nfunction cron() {\n  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '* * * * *';\n  if (error) return _error(\"Your CRON is invalid: \".concat(values, \".\"));\n  var options = {};\n  var split = values.split(' ');\n  ['minute', 'hour', 'dayMonth', 'month', 'dayWeek'].forEach(function (type, index) {\n    options[type] = value(split[index], type);\n  });\n  dateValue = loopDate(options);\n  timeValue = loopTime(options);\n  var correct = correctCronDate(timeValue);\n\n  var current = Object(_util_check_isToday__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dateValue);\n\n  var _timeValue = timeValue,\n      _timeValue2 = _slicedToArray(_timeValue, 2),\n      hour = _timeValue2[0],\n      minute = _timeValue2[1];\n\n  var minHour = Math.min.apply(Math, _toConsumableArray(options.hour.values));\n  var minMinute = Math.min.apply(Math, _toConsumableArray(options.minute.values));\n  var date = correct && current ? nextDateValue : dateValue;\n  var time = correct || !current ? [minHour || 0, minMinute || 0] : [hour || 0, minute || 0];\n  return date.setHours.apply(date, time.concat([0, 0]));\n}\n/** ----------------------------------------\n    Exports\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cron);\n\n//# sourceURL=webpack://Hangin/./src/util/format/_cron.js?");

/***/ }),

/***/ "./src/util/format/_date.js":
/*!**********************************!*\
  !*** ./src/util/format/_date.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_debug_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/debug/_error */ \"./src/util/debug/_error.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Validate\n ---------------------------------------- */\n\nvar validateFormat = function validateFormat(string) {\n  var regex = /^\\d{4}[./-](0[1-9]|1[0-2])[./-](0[1-9]|[12][0-9]|3[01])$/;\n  var check = !string.match(regex);\n  return Object(_util_debug_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(check, \"Not a valid date: \".concat(string, \", use format: YYYY-MM-DD (ISO 8601).\"));\n};\n/** ----------------------------------------\n    Date\n ---------------------------------------- */\n\n/**\n * Will parse a string given date to an \n * array of date values based on the ISO 8601\n * syntax YYYY, MM, DD.\n *\n * @param { string } date - YYYY-MM-DD format\n * @return { array } formatted date\n */\n\n\nvar date = function date(value) {\n  var values = value.match(/[a-zA-Z]+|[0-9]+/g);\n  var parsed = values.map(function (number) {\n    return parseInt(number, 10);\n  });\n  if (!validateFormat(value)) return parsed;\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (date);\n\n//# sourceURL=webpack://Hangin/./src/util/format/_date.js?");

/***/ }),

/***/ "./src/util/format/_day.js":
/*!*********************************!*\
  !*** ./src/util/format/_day.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_debug_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/debug/_error */ \"./src/util/debug/_error.js\");\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Config\n---------------------------------------- */\n\nvar config = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];\nvar fullConfig = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saterday', 'sunday'];\n/** ----------------------------------------\n    Validate\n ---------------------------------------- */\n\nvar validateString = function validateString(string) {\n  var check = !config.includes(string) && !fullConfig.includes(string);\n  return Object(_util_debug_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(check, \"Not a valid value: \".concat(string, \", day needs to be shorthand (mon) or monday.\"));\n};\n\nvar validateNumber = function validateNumber(number) {\n  var check = !(number >= 1) && !(number <= 12);\n  return Object(_util_debug_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(check, \"Not a valid number: \".concat(number, \", day needs to be between 1 and 12.\"));\n};\n/** ----------------------------------------\n    Day\n ---------------------------------------- */\n\n/**\n * Will parse a day of the week string or \n * number, and validate it's value. \n *\n * @param { string, number } value - shorthand or day of the week\n * @return { number } validated day\n */\n\n\nvar day = function day(value) {\n  if (Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value) === 'string') {\n    if (!validateString(value)) {\n      return config.indexOf(value) + 1 || fullConfig.indexOf(value) + 1;\n    }\n  }\n\n  if (Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value) === 'number') {\n    if (!validateNumber(value)) {\n      return fullConfig[value - 1];\n    }\n  }\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (day);\n\n//# sourceURL=webpack://Hangin/./src/util/format/_day.js?");

/***/ }),

/***/ "./src/util/format/_increment.js":
/*!***************************************!*\
  !*** ./src/util/format/_increment.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n/** ----------------------------------------\n    Utilties\n---------------------------------------- */\n\n\n/** ----------------------------------------\n    Increment\n---------------------------------------- */\n\n/**\n * Will increment a date with a given amount\n * of days. Date can be specified as either\n * an array or string. \n *\n * @param { string, array } date - YYYY-MM-DD or [YYYY, MM, DD] format\n * @return { array } formatted date\n */\n\nvar incrementDate = function incrementDate(date) {\n  var days = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n  var stamp = Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  var _date = Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(date) === 'array' ? date : stamp.date;\n\n  var _days = !days ? date : days;\n\n  var _date2 = _slicedToArray(_date, 3),\n      year = _date2[0],\n      month = _date2[1],\n      day = _date2[2];\n\n  for (var i = 0; i < _days; i++) {\n    var dayAmount = new Date(year, month, 0).getDate();\n\n    if (day === dayAmount) {\n      month++;\n      day = 0;\n    }\n\n    if (month === 13) {\n      year++;\n      month = 1;\n      day = 0;\n    }\n\n    day++;\n  }\n\n  return [year, month, day];\n};\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (incrementDate);\n\n//# sourceURL=webpack://Hangin/./src/util/format/_increment.js?");

/***/ }),

/***/ "./src/util/format/_month.js":
/*!***********************************!*\
  !*** ./src/util/format/_month.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_debug_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/debug/_error */ \"./src/util/debug/_error.js\");\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n/** ----------------------------------------\n    Config\n---------------------------------------- */\n\nvar config = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];\nvar fullConfig = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];\n/** ----------------------------------------\n    Validate\n ---------------------------------------- */\n\nvar validateString = function validateString(string) {\n  var check = !config.includes(string) && !fullConfig.includes(string);\n  return Object(_util_debug_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(check, \"Not a valid value: \".concat(string, \", month needs to be shorthand (jan) or january.\"));\n};\n\nvar validateNumber = function validateNumber(number) {\n  var check = !(number >= 1) && !(number <= 12);\n  return Object(_util_debug_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(check, \"Not a valid number: \".concat(number, \", month needs to be between 1 and 12.\"));\n};\n/** ----------------------------------------\n    Month\n ---------------------------------------- */\n\n/**\n * Will parse a month string or number, and\n * validate it's value. \n *\n * @param { string, number } value - 1-12\n * @return { number } validated month\n */\n\n\nvar month = function month(value) {\n  if (Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value) === 'string') {\n    if (!validateString(value)) {\n      return config.indexOf(value) + 1 || fullConfig.indexOf(value) + 1;\n    }\n  }\n\n  if (Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value) === 'number') {\n    if (!validateNumber(value)) {\n      return fullConfig[value - 1];\n    }\n  }\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (month);\n\n//# sourceURL=webpack://Hangin/./src/util/format/_month.js?");

/***/ }),

/***/ "./src/util/format/_progress.js":
/*!**************************************!*\
  !*** ./src/util/format/_progress.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Progress\n ---------------------------------------- */\n\n/**\n * Used for calculating the process of a \n * given task.\n *\n * @param { object } info - given job\n * @param { number } total - total length of jobs\n * @param { number } index - current job item\n * @return { object } parsed information\n */\nvar progress = function progress(info, total, index) {\n  var progress = index + 1;\n  var percentage = progress / total * 100;\n  var round = Math.round(percentage * 100) / 100;\n  return {\n    name: info.key,\n    state: info.name,\n    total: total,\n    percentage: round,\n    progress: progress\n  };\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (progress);\n\n//# sourceURL=webpack://Hangin/./src/util/format/_progress.js?");

/***/ }),

/***/ "./src/util/format/_remainder.js":
/*!***************************************!*\
  !*** ./src/util/format/_remainder.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_debug_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/debug/_error */ \"./src/util/debug/_error.js\");\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Remainder\n ---------------------------------------- */\n\n/**\n * The remainder function will determine \n * the remaining amount of between two\n * timestamps.  \n *\n * @param { number } start - timestamp start\n * @param { number } end - timestamp end\n * @return { this } extend instance\n */\n\nvar remainder = function remainder(start, end) {\n  var now = Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  var _start = start;\n  var _end = end;\n\n  if (!end) {\n    _start = now.unix;\n    _end = start;\n  }\n\n  ;\n  var min = Math.min(_start, _end);\n  var max = Math.max(_start, _end);\n  return max - min;\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (remainder);\n\n//# sourceURL=webpack://Hangin/./src/util/format/_remainder.js?");

/***/ }),

/***/ "./src/util/format/_time.js":
/*!**********************************!*\
  !*** ./src/util/format/_time.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    Correction\n ---------------------------------------- */\nvar correction = function correction(values) {\n  while (values.length < 3) {\n    values.push(0);\n  }\n\n  return values;\n};\n/** ----------------------------------------\n    Time\n---------------------------------------- */\n\n/**\n * Will parse a string value to an array\n * reflecting the time in a HH:MM format.\n *\n * @param { string } value - time in HH:MM\n * @return { array } [HH, MM]\n */\n\n\nvar time = function time(value) {\n  var values = value.match(/[a-zA-Z]+|[0-9]+/g);\n  var parsed = values.map(function (number) {\n    return parseInt(number, 10);\n  });\n  var corrected = correction(parsed);\n  return corrected;\n};\n/** ----------------------------------------\n    Export\n---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (time);\n\n//# sourceURL=webpack://Hangin/./src/util/format/_time.js?");

/***/ }),

/***/ "./src/util/format/_timestamp.js":
/*!***************************************!*\
  !*** ./src/util/format/_timestamp.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/** ----------------------------------------\n    Utilties\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Current Date\n ---------------------------------------- */\n\nvar dateNow = function dateNow() {\n  var date = new Date();\n  return [date.getFullYear(), date.getMonth(), date.getDate()];\n};\n\nvar timeNow = function timeNow() {\n  var date = new Date();\n  return [date.getHours(), date.getMinutes(), date.getSeconds()];\n};\n/** ----------------------------------------\n    Correction\n ---------------------------------------- */\n\n\nvar correction = function correction(date) {\n  if (date) date[1] = date[1] - 1;\n  return date;\n};\n\nvar update = function update(date) {\n  if (date) date[1]++;\n  return date;\n};\n/** ----------------------------------------\n    Timestamp\n ---------------------------------------- */\n\n/**\n * Create relevant time information for \n * scheduling tasks. The function will\n * parse date and time in different \n * formats and set the current time if\n * no date or time has been specified.\n *\n * @param { string, array } date - YYYY-MM-DD or [YYYY, MM, DD] format\n * @param { string, array } date - HH:MM or [HH, MM] format\n * @return { object } timestamp information\n */\n\n\nvar timestamp = function timestamp(date) {\n  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var now = [].concat(_toConsumableArray(dateNow()), _toConsumableArray(timeNow()));\n  var corrected = correction(date);\n  var values = date ? [].concat(_toConsumableArray(corrected), _toConsumableArray(time)) : now;\n\n  var stamp = _construct(Date, _toConsumableArray(values));\n\n  var unix = stamp.getTime();\n  return {\n    values: update(values),\n    date: update(date || dateNow()),\n    time: time.length ? time : timeNow(),\n    stamp: stamp,\n    unix: unix\n  };\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (timestamp);\n\n//# sourceURL=webpack://Hangin/./src/util/format/_timestamp.js?");

/***/ }),

/***/ "./src/util/format/_toCamel.js":
/*!*************************************!*\
  !*** ./src/util/format/_toCamel.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    To Camel\n ---------------------------------------- */\n\n/**\n * Convert a given string to camel case.\n *\n * @param { string } string\n * @return { string } in camel case syntax\n */\nvar toCamel = function toCamel(string) {\n  var result = string.replace(/([A-Z])/g, '$1');\n  return result.split(' ').join('_').toLowerCase();\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toCamel);\n\n//# sourceURL=webpack://Hangin/./src/util/format/_toCamel.js?");

/***/ }),

/***/ "./src/util/function/_id.js":
/*!**********************************!*\
  !*** ./src/util/function/_id.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** ----------------------------------------\n    ID\n ---------------------------------------- */\n\n/**\n * Create a randomized ID with or without\n * a given prefix. \n *\n * @param { string } prefix\n * @return { string } random id\n */\nvar id = function id(prefix) {\n  return prefix && prefix + '_' || '' + Math.random().toString(16).substr(2, 9);\n};\n/** ----------------------------------------\n    Helpers\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (id);\n\n//# sourceURL=webpack://Hangin/./src/util/function/_id.js?");

/***/ }),

/***/ "./src/util/function/_timeout.js":
/*!***************************************!*\
  !*** ./src/util/function/_timeout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\n/** ----------------------------------------\n    Utilties\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Config\n ---------------------------------------- */\n\n/**\n * Browsers store the delay as a 32-bit signed \n * integer internally. This causes an integer \n * overflow when using delays larger than \n * 2147483647ms.\n */\n\nvar max = 0x7fffffff;\n/** ----------------------------------------\n    Chunk\n ---------------------------------------- */\n\n/**\n * Chunk number to a max given and leave\n * a remainder based on max given value as\n * set within the configuration. \n * \n * @param { number } delay - interval\n * @return { array } will return chunks based on max value\n */\n\nvar chunk = function chunk(delay) {\n  var chunks = [];\n\n  while (delay > 0) {\n    chunks.push(Math.min(delay, max));\n    delay = delay - max;\n  }\n\n  return chunks;\n};\n/** ----------------------------------------\n    Sum\n ---------------------------------------- */\n\n/**\n * Reduce the chunks to a total delay.\n * \n * @param { array } array - array of numbers\n * @return { number } will return the sum of numbers\n */\n\n\nvar sum = function sum(array) {\n  return array.reduce(function (sum, number) {\n    return sum + number;\n  }, 0);\n};\n/** ----------------------------------------\n    Store\n ---------------------------------------- */\n\n/**\n * The timeout will be temporary stored within\n * the store object, so that the right \n * reference can be exposed outside of the \n * recursive timeout function.\n */\n\n\nvar store = {\n  _timeout: null,\n\n  get fn() {\n    return this._timeout;\n  },\n\n  set fn(timeout) {\n    this._timeout = timeout;\n  }\n\n};\n/** ----------------------------------------\n    Timeout\n ---------------------------------------- */\n\n/**\n * Most browsers support a max a 32 bit \n * interger for saving the timeout. This \n * timeout function will chunk delays based \n * on this limitation an plan multiple \n * schedules if needed to prevent this\n * behavior and strech the duration of a\n * timeout exceeding this limit. \n * \n * @param { function } callback - callback function\n * @param { number } delay - the timeout in milliseconds\n * @return { function } will return the setTimeout \n */\n\nvar timeout = function timeout(callback, delay) {\n  var chunks = chunk(delay);\n  var next = chunks.shift();\n\n  var exe = function exe() {\n    return chunks.length ? timeout(callback, sum(chunks)) : callback();\n  };\n\n  store.fn = setTimeout(exe, next);\n  return store;\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (timeout);\n\n//# sourceURL=webpack://Hangin/./src/util/function/_timeout.js?");

/***/ }),

/***/ "./src/util/function/_timer.js":
/*!*************************************!*\
  !*** ./src/util/function/_timer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_check_isType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/check/_isType */ \"./src/util/check/_isType.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n/** ----------------------------------------\n    Config\n ---------------------------------------- */\n\nvar config = {\n  week: null,\n  day: 7,\n  hour: 24,\n  minute: 60,\n  second: 60,\n  millisecond: 1000\n};\n/** ----------------------------------------\n    Validate\n ---------------------------------------- */\n\nvar validateAmount = function validateAmount(amount) {\n  return Object(_util_check_isType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(amount) === 'number' || error(true, \"Not a valid amount: \".concat(amount, \", specify a number.\"));\n};\n\nvar validateType = function validateType(type) {\n  var types = Object.keys(config);\n  return types.includes(type) || error(true, \"Not a valid type: \".concat(type, \", use \").concat(types.join(', '), \".\"));\n};\n/** ----------------------------------------\n    Reduce\n ---------------------------------------- */\n\n\nvar reducer = function reducer() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.reduce(function (a, b) {\n    return a * b;\n  });\n};\n/** ----------------------------------------\n    Timer\n ---------------------------------------- */\n\n\nvar timer = function timer(amount, type) {\n  var types = Object.keys(config);\n  var length = types.length;\n  var index = types.indexOf(type);\n  var calc = types.splice(index + 1, length - index);\n  var values = calc.map(function (type) {\n    return config[type];\n  });\n\n  if (validateAmount(amount) && validateType(type)) {\n    return amount * reducer.apply(void 0, _toConsumableArray(values));\n  }\n};\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (timer);\n\n//# sourceURL=webpack://Hangin/./src/util/function/_timer.js?");

/***/ }),

/***/ "./src/util/helper/Emit.js":
/*!*********************************!*\
  !*** ./src/util/helper/Emit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_debug_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @util/debug/_error */ \"./src/util/debug/_error.js\");\n/* harmony import */ var _util_format_timestamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @util/format/_timestamp */ \"./src/util/format/_timestamp.js\");\n/* harmony import */ var _util_function_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/function/_id */ \"./src/util/function/_id.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/** ----------------------------------------\n    Utils\n ---------------------------------------- */\n\n\n\n/** ----------------------------------------\n    Validate\n ---------------------------------------- */\n\nvar validate = function validate(name, check) {\n  return Object(_util_debug_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(check, \"A callback is mandatory for \\\"\".concat(name, \"\\\", specify the event on('name', () => { ... }).\"));\n};\n/** ----------------------------------------\n    Emit\n ---------------------------------------- */\n\n/**\n * Simple event emitter for handeling watcher\n * and dispatching events.\n */\n\n\nvar Emit = /*#__PURE__*/function () {\n  /** ----------------------------------------\n      Constructor\n   ---------------------------------------- */\n  function Emit() {\n    _classCallCheck(this, Emit);\n\n    this._events = {};\n  }\n  /** ----------------------------------------\n      Emit\n   ---------------------------------------- */\n\n\n  _createClass(Emit, [{\n    key: \"_handle\",\n    value: function _handle(name) {\n      var events = Object.keys(this._events);\n\n      if (!events.includes(name)) {\n        this._events[name] = [];\n      }\n    }\n    /** ----------------------------------------\n        Dispatch\n     ---------------------------------------- */\n\n  }, {\n    key: \"dispatch\",\n    value: function dispatch(name, payload) {\n      if (this._events[name]) {\n        this._events[name].map(function (event) {\n          event.callback && event.callback(payload);\n        });\n      }\n    }\n    /** ----------------------------------------\n        On\n     ---------------------------------------- */\n\n  }, {\n    key: \"on\",\n    value: function on(name, callback) {\n      if (!validate(name, !callback)) {\n        this._handle(name);\n\n        this._events[name].push({\n          id: Object(_util_function_id__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n          timestamp: Object(_util_format_timestamp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n          callback: callback\n        });\n      }\n    }\n    /** ----------------------------------------\n        Remove\n     ---------------------------------------- */\n\n  }, {\n    key: \"remove\",\n    value: function remove(name) {\n      delete this._events[name];\n    }\n  }]);\n\n  return Emit;\n}();\n\n;\n/** ----------------------------------------\n    Export\n ---------------------------------------- */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Emit);\n\n//# sourceURL=webpack://Hangin/./src/util/helper/Emit.js?");

/***/ })

/******/ })["default"];
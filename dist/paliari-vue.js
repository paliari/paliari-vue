/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpPaliariVue"];
/******/ 	window["webpackJsonpPaliariVue"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();

/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;

/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".b.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};

/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;

/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([]);webpackJsonpPaliariVue([1,2],[
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ })
]);(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fecha"), require("string-mask"), require("vue"), require("vuex"));
	else if(typeof define === 'function' && define.amd)
		define("PaliariVue", ["fecha", "string-mask", "vue", "vuex"], factory);
	else if(typeof exports === 'object')
		exports["PaliariVue"] = factory(require("fecha"), require("string-mask"), require("vue"), require("vuex"));
	else
		root["PaliariVue"] = factory(root["fecha"], root["string-mask"], root["vue"], root["vuex"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_61__, __WEBPACK_EXTERNAL_MODULE_62__, __WEBPACK_EXTERNAL_MODULE_63__, __WEBPACK_EXTERNAL_MODULE_64__) {
return webpackJsonpPaliariVue([0,2],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setLocale; });
/* unused harmony export locale */


var locale = {};

function setLocale(locales) {
  for (var k in locales) {
    locale[k] = locales[k];
  }
}

/* harmony default export */ __webpack_exports__["b"] = {
  setLocale: setLocale,
  hum: function hum(key, replaces) {
    return this.replace(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* deepKey */])(locale, key), replaces);
  },
  replace: function replace(message, replaces) {
    if (!message || !replaces) {
      return message;
    }
    for (var k in replaces) {
      message = message.replace(new RegExp('%{' + k + '}', 'g'), '"' + replaces[k] + '"');
    }
    return message;
  }
};



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deepKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ucfirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deepClone; });


function deepKey(obj, key) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = String(key).split('.')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var k = _step.value;

      if (!obj) {
        return obj;
      }
      obj = obj[k];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return obj;
}

function ucfirst(str) {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.substr(1);
}

function isDate(arg) {
  return Object.prototype.toString.call(arg) === '[object Date]';
}

function isRegExp(arg) {
  return Object.prototype.toString.call(arg) === '[object RegExp]';
}

function _deepClone(obj) {
  if (isDate(obj)) {
    return new Date(obj);
  }
  if (isRegExp(obj)) {
    return obj;
  }
  var ret = Array.isArray(obj) ? [] : {};
  for (var k in obj) {
    ret[k] = __WEBPACK_IMPORTED_MODULE_0_vue__["util"].isObject(obj[k]) ? _deepClone(obj[k]) : obj[k];
  }
  return ret;
}

function deepClone(obj) {
  if (!__WEBPACK_IMPORTED_MODULE_0_vue__["util"].isObject(obj)) {
    return obj;
  }
  return _deepClone(obj);
}

/* unused harmony default export */ var _unused_webpack_default_export = deepKey;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_string_mask__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_string_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_string_mask__);
/* harmony export (immutable) */ __webpack_exports__["cpf"] = cpf;
/* harmony export (immutable) */ __webpack_exports__["cnpj"] = cnpj;
/* harmony export (immutable) */ __webpack_exports__["cpfCnpj"] = cpfCnpj;
/* harmony export (immutable) */ __webpack_exports__["phone"] = phone;
/* harmony export (immutable) */ __webpack_exports__["cep"] = cep;
/* harmony export (immutable) */ __webpack_exports__["placa"] = placa;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });


function formatter(value, format) {
  var str = new __WEBPACK_IMPORTED_MODULE_0_string_mask___default.a(format).apply(value);
  if (str.length < format.length && str.substr(-1) == format[str.length - 1]) {
    if (!/[09#ASUL\$]/.test(format[str.length - 1])) {
      str = str.substr(0, str.length - 1);
    }
  }
  return str;
}

function clear(value, pattern) {
  if (!value) {
    return '';
  }
  return value.replace(pattern || /\D/g, '');
}

/* harmony default export */ __webpack_exports__["default"] = formatter;

function cpf(value) {
  return formatter(clear(value), '000.000.000-00');
}
function cnpj(value) {
  return formatter(clear(value), '00.000.000/0000-00');
}
function cpfCnpj(value) {
  value = clear(value);
  var format = value.length > 11 ? '00.000.000/0000-00' : '000.000.000-00';
  return formatter(value, format);
}
function phone(value) {
  return formatter(clear(value), '(00) 90000-0000');
}
function cep(value) {
  return formatter(clear(value), '00.000-000');
}
function placa(value) {
  return formatter(clear(value, /\W/g), 'UUU-0000');
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FAILURE; });
var SUCCESS = 'success';
var LOADING = 'loading';
var FAILURE = 'failure';

function create(obj) {
  var state = {
    status: SUCCESS
  };

  var getters = {
    success: function success(state) {
      return SUCCESS == state.status;
    },
    loading: function loading(state) {
      return LOADING == state.status;
    },
    failure: function failure(state) {
      return FAILURE == state.status;
    }
  };

  var mutations = {
    setLoading: function setLoading(state) {
      state.status = LOADING;
    },
    setSuccess: function setSuccess(state) {
      state.status = SUCCESS;
    },
    setFailure: function setFailure(state) {
      state.status = FAILURE;
    }
  };

  obj.state = Object.assign(state, obj.state);
  obj.getters = Object.assign(getters, obj.getters);
  obj.mutations = Object.assign(mutations, obj.mutations);

  return obj;
}

/* harmony default export */ __webpack_exports__["d"] = create;



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(54)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Back_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Back_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Back_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_SideMenu_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_SideMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__menu_SideMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_SideMenuItems_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_SideMenuItems_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__menu_SideMenuItems_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return __WEBPACK_IMPORTED_MODULE_0__Back_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "HeaderBar", function() { return __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "IosSwitch", function() { return __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "SideMenu", function() { return __WEBPACK_IMPORTED_MODULE_6__menu_SideMenu_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "SideMenuItems", function() { return __WEBPACK_IMPORTED_MODULE_7__menu_SideMenuItems_vue___default.a; });









var components = {
  Back: __WEBPACK_IMPORTED_MODULE_0__Back_vue___default.a,
  HeaderBar: __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue___default.a,
  Modal: __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default.a,
  Checkbox: __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue___default.a,
  IosSwitch: __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue___default.a,
  Radio: __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue___default.a,
  SideMenu: __WEBPACK_IMPORTED_MODULE_6__menu_SideMenu_vue___default.a,
  SideMenuItems: __WEBPACK_IMPORTED_MODULE_7__menu_SideMenuItems_vue___default.a
};

/* harmony default export */ __webpack_exports__["default"] = {
  install: function install(Vue) {
    for (var k in components) {
      Vue.component(k, components[k]);
    }
  }
};



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tModel__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deepKey__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blank__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TextBind__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return __WEBPACK_IMPORTED_MODULE_0__translate__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tModel", function() { return __WEBPACK_IMPORTED_MODULE_1__tModel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepKey", function() { return __WEBPACK_IMPORTED_MODULE_2__deepKey__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "blank", function() { return __WEBPACK_IMPORTED_MODULE_3__blank__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextBind", function() { return __WEBPACK_IMPORTED_MODULE_4__TextBind__["a"]; });






var directives = {
  translate: __WEBPACK_IMPORTED_MODULE_0__translate__["a" /* default */],
  tModel: __WEBPACK_IMPORTED_MODULE_1__tModel__["a" /* default */],
  deepKey: __WEBPACK_IMPORTED_MODULE_2__deepKey__["a" /* default */],
  blank: __WEBPACK_IMPORTED_MODULE_3__blank__["a" /* default */],
  TextBind: __WEBPACK_IMPORTED_MODULE_4__TextBind__["a" /* default */]
};
/* harmony default export */ __webpack_exports__["default"] = {
  install: function install(Vue) {
    for (var k in directives) {
      Vue.directive(k, directives[k]);
    }
  }
};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__truncate__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deepKey__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tModel__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_mask__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mask", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_mask__["default"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "masks", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_mask__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return __WEBPACK_IMPORTED_MODULE_0__truncate__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "currency", function() { return __WEBPACK_IMPORTED_MODULE_1__currency__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return __WEBPACK_IMPORTED_MODULE_2__date__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepKey", function() { return __WEBPACK_IMPORTED_MODULE_3__deepKey__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return __WEBPACK_IMPORTED_MODULE_4__translate__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "enums", function() { return __WEBPACK_IMPORTED_MODULE_5__enums__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tModel", function() { return __WEBPACK_IMPORTED_MODULE_6__tModel__["a"]; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










var filters = _extends({}, __WEBPACK_IMPORTED_MODULE_7__lib_mask__, {
  mask: __WEBPACK_IMPORTED_MODULE_7__lib_mask__["default"],
  truncate: __WEBPACK_IMPORTED_MODULE_0__truncate__["a" /* default */],
  currency: __WEBPACK_IMPORTED_MODULE_1__currency__["a" /* default */],
  date: __WEBPACK_IMPORTED_MODULE_2__date__["a" /* default */],
  deepKey: __WEBPACK_IMPORTED_MODULE_3__deepKey__["a" /* default */],
  translate: __WEBPACK_IMPORTED_MODULE_4__translate__["a" /* default */],
  enums: __WEBPACK_IMPORTED_MODULE_5__enums__["a" /* default */],
  tModel: __WEBPACK_IMPORTED_MODULE_6__tModel__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["default"] = {
  install: function install(Vue) {
    for (var f in filters) {
      Vue.filter(f, filters[f]);
    }
  }
};



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function VuexMapper(mapper) {
  var computed = this.$options.computed || {};
  this.$options.computed = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])(mapper.namespace, mapper.states || []), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(mapper.namespace, mapper.getters || []), computed);

  var methods = this.$options.methods || {};
  this.$options.methods = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapMutations"])(mapper.namespace, mapper.mutations || []), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])(mapper.namespace, mapper.actions || []), methods);
}

/* harmony default export */ __webpack_exports__["a"] = {
  install: function install(Vue, options) {
    options = Object.assign({ key: 'vuex' }, options);

    Vue.mixin({
      beforeCreate: function beforeCreate() {
        var mapper = this.$options[options.key];
        if (mapper) {
          VuexMapper.call(this, mapper);
        }
      }
    });
  }
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mask__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return __WEBPACK_IMPORTED_MODULE_0__i18n__["b"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "masks", function() { return __WEBPACK_IMPORTED_MODULE_2__mask__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepKey", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ucfirst", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["d"]; });





/* harmony default export */ __webpack_exports__["default"] = {
  install: function install(vue) {
    vue.prototype.$util = {
      i18n: __WEBPACK_IMPORTED_MODULE_0__i18n__["b" /* default */],
      masks: __WEBPACK_IMPORTED_MODULE_2__mask__,
      isDate: __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* isDate */],
      deepKey: __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* deepKey */],
      deepClone: __WEBPACK_IMPORTED_MODULE_1__utils__["c" /* deepClone */],
      ucfirst: __WEBPACK_IMPORTED_MODULE_1__utils__["d" /* ucfirst */]
    };
    vue.prototype.$dialogs = __WEBPACK_IMPORTED_MODULE_3__dialogs__["a" /* default */];
  }
};



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(28);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_paginator__ = __webpack_require__(29);



var StoreHelpers = {
  SUCCESS: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["a" /* SUCCESS */],
  LOADING: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["b" /* LOADING */],
  FAILURE: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["c" /* FAILURE */],
  base: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["d" /* default */],
  paginator: __WEBPACK_IMPORTED_MODULE_1__helpers_paginator__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = StoreHelpers;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (el, binding) {
  if (binding.oldValue != binding.value) {
    el.innerText = binding.value;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (el, binding, vnode) {
  if (binding.oldValue != binding.value) {
    if (window.cordova && window.cordova.InAppBrowser) {
      el.onclick = function () {
        window.cordova.InAppBrowser.open(binding.value, '_system', 'location=yes');
      };
    } else {
      el.href = binding.value;
      el.target = '_blank';
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils_js__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = function (el, binding, vnode) {
  if (binding.oldValue != binding.value) {
    el.innerText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_utils_js__["b" /* deepKey */])(binding.value, vnode.key);
  }
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (el, binding) {
  if (binding.oldValue != binding.value) {
    var key = 'activerecord.' + (2 == binding.value.split('.').length ? 'attributes.' : 'models.') + binding.value;
    el.innerText = __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__["b" /* default */].hum(key);
  }
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (el, binding) {
  if (binding.oldValue != binding.value) {
    el.innerText = __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__["b" /* default */].hum(binding.value);
  }
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (number) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R$';

  try {
    return prefix + number.toFixed(2).replace(/\./g, ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
  } catch (e) {
    return number;
  }
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_fecha__ = __webpack_require__(26);


/* harmony default export */ __webpack_exports__["a"] = function (date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'shortDateTime';

  try {
    date = __WEBPACK_IMPORTED_MODULE_0__lib_fecha__["a" /* default */].parse(date, 'json') || date;
    return __WEBPACK_IMPORTED_MODULE_0__lib_fecha__["a" /* default */].format(date, format);
  } catch (e) {
    return date;
  }
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__lib_utils__["b" /* deepKey */];

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (obj, key) {
  if (obj) {
    var k = key.split('.')[1];
    key = ['enums', key, obj[k]].join('.');
    return __WEBPACK_IMPORTED_MODULE_0__lib_i18n__["b" /* default */].hum(key);
  }
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (key, replaces) {
  key = 'activerecord.' + (2 == key.split('.').length ? 'attributes.' : 'models.') + key;
  return __WEBPACK_IMPORTED_MODULE_0__lib_i18n__["b" /* default */].hum(key, replaces);
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (key, replaces) {
  return __WEBPACK_IMPORTED_MODULE_0__lib_i18n__["b" /* default */].hum(key, replaces);
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (text) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

  return text.substr(0, length - 3) + '...';
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
  alert: function alert(message) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var buttonLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';

    return new Promise(function (resolve) {
      if (navigator.notification) {
        navigator.notification.alert(message, resolve, title, buttonLabel);
      } else {
        window.alert(message);
        resolve();
      }
    });
  },
  confirm: function confirm(message) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var cancelLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Cancelar';
    var okLabel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'OK';

    return new Promise(function (resolve) {
      if (navigator.notification) {
        navigator.notification.confirm(message, function (buttonIndex) {
          buttonIndex === 2 ? resolve(true) : resolve(false);
        }, title, [cancelLabel, okLabel]);
      } else {
        window.confirm(message) ? resolve(true) : resolve(false);
      }
    });
  },
  prompt: function prompt(message) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var cancelLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Cancelar';
    var okLabel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'OK';

    return new Promise(function (resolve) {
      if (navigator.notification) {
        navigator.notification.prompt(message, function (response) {
          response.buttonIndex === 2 ? resolve(response.input1) : resolve(false);
        }, title, [cancelLabel, okLabel]);
      } else {
        ret = window.prompt(message);
        ret ? resolve(ret) : resolve(false);
      }
    });
  }
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fecha__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fecha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fecha__);


__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.i18n.dayNamesShort = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.i18n.dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.i18n.monthNamesShort = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.i18n.monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.masks.default = 'DD/MM/YYYY HH:mm:ss';
__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.masks.date = 'DD/MM/YYYY';
__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.masks.time = 'HH:mm:ss';
__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.masks.dateTime = 'DD/MM/YYYY HH:mm:ss';
__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.masks.shortDate = 'DD/MM/YY';
__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.masks.shortTime = 'HH:mm';
__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.masks.shortDateTime = 'DD/MM/YY HH:mm';
__WEBPACK_IMPORTED_MODULE_0_fecha___default.a.masks.json = 'YYYY-MM-DDTHH:mm:ss';

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_fecha___default.a;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function value(target) {
      'use strict';

      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(4);
/* unused harmony reexport SUCCESS */
/* unused harmony reexport LOADING */
/* unused harmony reexport FAILURE */


function create(obj, api) {
  var state = {
    page: 1,
    pages: 1,
    query: {},
    list: [],
    current: null
  };

  var getters = {
    params: function params(state) {
      return {
        page: state.page,
        pages: state.pages,
        q: state.query
      };
    }
  };

  var actions = {
    fetchList: function fetchList(_ref) {
      var commit = _ref.commit,
          getters = _ref.getters;

      commit('setLoading');
      commit('setList', []);
      api.list(getters.params).then(function (response) {
        commit('setList', response.data.rows);
        commit('setPage', response.data.page);
        commit('setPages', response.data.pages);
        commit('setSuccess');
      }).catch(function () {
        return commit('setFailure');
      });
    },
    fetchOne: function fetchOne(_ref2, id) {
      var commit = _ref2.commit;

      commit('setCurrent', null);
      commit('setLoading');
      api.one(id).then(function (response) {
        commit('setCurrent', response.data);
        commit('setSuccess');
      }).catch(function () {
        return commit('setFailure');
      });
    },
    prevPage: function prevPage(_ref3) {
      var commit = _ref3.commit,
          dispatch = _ref3.dispatch,
          state = _ref3.state;

      var page = state.page > 1 ? state.page - 1 : 1;
      commit('setPage', page);
      dispatch('fetchList');
    },
    nextPage: function nextPage(_ref4) {
      var commit = _ref4.commit,
          state = _ref4.state;

      if (state.page == state.pages) return;
      commit('setPage', state.page + 1);
      dispatch('fetchList');
    }
  };

  var mutations = {
    setList: function setList(state, list) {
      state.list = list;
    },
    setCurrent: function setCurrent(state, current) {
      state.current = current;
    },
    setPage: function setPage(state, page) {
      state.page = page;
    },
    setPages: function setPages(state, pages) {
      state.pages = pages;
    },
    setQuery: function setQuery(state, q) {
      state.query = q;
    }
  };

  obj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__base__["d" /* default */])(obj);

  obj.state = Object.assign(state, obj.state);
  obj.getters = Object.assign(getters, obj.getters);
  obj.actions = Object.assign(actions, obj.actions);
  obj.mutations = Object.assign(mutations, obj.mutations);

  return obj;
}

/* harmony default export */ __webpack_exports__["a"] = create;



/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  computed: {
    notHome: function notHome() {
      return this.$route.name != 'home';
    }
  },

  methods: {
    goBack: function goBack() {
      this.$router.back();
    }
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Back = __webpack_require__(5);

var _Back2 = _interopRequireDefault(_Back);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { Back: _Back2.default },
  props: {
    customTitle: { type: String }
  },
  computed: {
    title: function title() {
      return this.customTitle || this.$route.meta.title;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    title: {
      type: String,
      default: 'Endereço'
    },
    show: {
      type: Boolean,
      required: true
    },
    cancelLabel: {
      type: String,
      default: 'Cancel'
    },
    okLabel: {
      type: String,
      default: 'OK'
    }
  },
  methods: {
    reject: function reject() {
      this.$emit('close');
      this.$emit('cancel');
    },
    resolve: function resolve() {
      this.$emit('close');
      this.$emit('success');
    }
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    value: {
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
    name: String
  },
  computed: {
    id: function id() {
      return 'cb-' + this.name + this._uid;
    }
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  props: ['value', 'name', 'disabled'],
  computed: {
    id: function id() {
      return 'switch-' + this.name + this._uid;
    }
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    value: {
      required: true
    },
    checked: {
      type: Boolean,
      required: true,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: String,
    name: String
  },
  computed: {
    id: function id() {
      return 'radio-' + this.name + this._uid;
    }
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    icon: { type: String, default: 'fa-bars' }
  },
  data: function data() {
    return {
      opened: false
    };
  },

  methods: {
    show: function show() {
      this.opened = true;
      this.$emit('show');
    },
    hide: function hide() {
      this.opened = false;
      this.$emit('hide');
    }
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    items: { type: Object, required: true }
  },
  methods: {
    hide: function hide() {
      console.log('click hide');
    }
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(60)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ios-switch"
  }, [_c('input', {
    attrs: {
      "id": _vm.id,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.value
    },
    on: {
      "change": function($event) {
        _vm.$emit('input', $event.target.checked ? $event.target.value : false)
      }
    }
  }), _c('label', {
    staticClass: "switcher",
    attrs: {
      "for": _vm.id
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.notHome),
      expression: "notHome"
    }],
    staticClass: "btn-back",
    on: {
      "click": _vm.goBack
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-left fa-lg",
    attrs: {
      "aria-hidden": "true"
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "checkbox"
  }, [_c('input', {
    attrs: {
      "id": _vm.id,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.value
    },
    on: {
      "change": function($event) {
        _vm.$emit('input', $event.target.checked ? $event.target.value : false)
      }
    }
  }), _c('label', {
    attrs: {
      "for": _vm.id
    }
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2)])
},staticRenderFns: []}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "side-menu"
  }, [_c('a', {
    staticClass: "menu-btn",
    on: {
      "click": _vm.show
    }
  }, [_vm._t("btn-icon", [_c('i', {
    staticClass: "fa fa-lg",
    class: _vm.icon,
    attrs: {
      "aria-hidden": "true"
    }
  })])], 2), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.opened),
      expression: "opened"
    }],
    staticClass: "side-menu-bg",
    on: {
      "click": _vm.hide
    }
  }), _c('div', {
    staticClass: "side-menu-content",
    class: {
      open: _vm.opened
    }
  }, [_c('header', [_vm._t("header")], 2), _c('div', {
    on: {
      "click": _vm.hide
    }
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('transition', {
    attrs: {
      "name": "modal"
    }
  }, [_c('div', {
    staticClass: "modal"
  }, [_c('div', {
    staticClass: "modal-header bg-yellow"
  }, [_c('header-bar', {
    attrs: {
      "custom-title": _vm.title
    }
  }, [_c('div', {
    slot: "left"
  }, [_c('div', {
    staticClass: "button-left red",
    on: {
      "click": _vm.reject
    }
  }, [_vm._v(_vm._s(_vm.cancelLabel))])]), _c('div', {
    slot: "right"
  }, [_c('div', {
    staticClass: "button-right blue",
    on: {
      "click": _vm.resolve
    }
  }, [_vm._v(_vm._s(_vm.okLabel))])])])], 1), _c('div', {
    staticClass: "modal-body"
  }, [_vm._t("default")], 2)])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "side-menu-items"
  }, _vm._l((_vm.items), function(m) {
    return _c('div', {
      staticClass: "side-menu-item"
    }, [(m.divider) ? _c('div', {
      staticClass: "side-menu-divider"
    }) : _c('router-link', {
      staticClass: "side-menu-link ellipsis",
      attrs: {
        "to": m.to
      }
    }, [_c('i', {
      staticClass: "fa fa-lg fa-fw",
      class: m.icon,
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(_vm._s(m.label))])], 1)
  }))
},staticRenderFns: []}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "radio"
  }, [_c('input', {
    attrs: {
      "id": _vm.id,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "type": "radio"
    },
    domProps: {
      "value": _vm.value,
      "checked": _vm.checked
    },
    on: {
      "change": function($event) {
        _vm.$emit('input', $event.target.value)
      }
    }
  }), _c('label', {
    attrs: {
      "for": _vm.id
    }
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2)])
},staticRenderFns: []}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "header-bar"
  }, [_c('nav', [_c('div', {
    staticClass: "header-bar-content"
  }, [_c('div', {
    staticClass: "pure-g"
  }, [_c('div', {
    staticClass: "pure-u-5-24"
  }, [_c('div', {
    staticClass: "left"
  }, [_vm._t("left", [_c('back')])], 2)]), _c('div', {
    staticClass: "pure-u-14-24 center"
  }, [_c('div', {
    staticClass: "title ellipsis"
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: "pure-u-5-24"
  }, [_c('div', {
    staticClass: "right"
  }, [_vm._t("right")], 2)])])])]), _c('div', {
    staticClass: "header-block"
  })])])
},staticRenderFns: []}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_62__;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_63__;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filters_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_i18n__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_VuexMapper__ = __webpack_require__(9);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "components", function() { return __WEBPACK_IMPORTED_MODULE_0__components_index__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return __WEBPACK_IMPORTED_MODULE_1__filters_index__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "directives", function() { return __WEBPACK_IMPORTED_MODULE_2__directives_index__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_4__lib_index__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StoreHelpers", function() { return __WEBPACK_IMPORTED_MODULE_5__store_index__["a"]; });
__webpack_require__(11);










/* harmony default export */ __webpack_exports__["default"] = {
  install: function install(Vue, options) {
    if (options.locales) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_i18n__["a" /* setLocale */])(options.locales);
    }
    Vue.use(__WEBPACK_IMPORTED_MODULE_0__components_index__["default"]);
    Vue.use(__WEBPACK_IMPORTED_MODULE_1__filters_index__["default"]);
    Vue.use(__WEBPACK_IMPORTED_MODULE_2__directives_index__["default"]);
    Vue.use(__WEBPACK_IMPORTED_MODULE_4__lib_index__["default"]);
    if (options.Vuex) {
      Vue.use(__WEBPACK_IMPORTED_MODULE_6__lib_VuexMapper__["a" /* default */], options.Vuex);
    }
  }
};



/***/ })
],[65]);
});
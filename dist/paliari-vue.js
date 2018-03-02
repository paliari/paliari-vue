(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PaliariVue"] = factory();
	else
		root["PaliariVue"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************************************************!*\
  !*** ./node_modules/vue-loader/lib/component-normalizer.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
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
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/*!*************************!*\
  !*** ./src/lib/i18n.js ***!
  \*************************/
/*! exports provided: default, setLocale, locale */
/*! exports used: default, setLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setLocale; });
/* unused harmony export locale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(/*! ./utils */ 2);


var locale = {};

function setLocale(locales) {
  for (var k in locales) {
    locale[k] = locales[k];
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  setLocale: setLocale,
  hum: function hum(key, replaces) {
    return this.replace(Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* deepKey */])(locale, key), replaces);
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
});



/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! exports provided: default, deepKey, ucfirst, isDate, isRegExp, isObject, deepClone */
/*! exports used: deepClone, deepKey, isDate, isObject, isRegExp, ucfirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deepKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ucfirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepClone; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
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
    ret[k] = isObject(obj[k]) ? _deepClone(obj[k]) : obj[k];
  }
  return ret;
}

function deepClone(obj) {
  if (!isObject(obj)) {
    return obj;
  }
  return _deepClone(obj);
}

/* unused harmony default export */ var _unused_webpack_default_export = (deepKey);



/***/ }),
/* 3 */
/*!*****************************************!*\
  !*** ./src/components/load/Spinner.vue ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Spinner_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Spinner.vue */ 17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48267f98_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Spinner_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-48267f98","hasScoped":false,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Spinner.vue */ 62);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-48267f98","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Spinner.vue */ 61)
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Spinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48267f98_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Spinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 4 */
/*!*********************************!*\
  !*** ./src/components/Back.vue ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Back_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Back.vue */ 5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f500398_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Back_vue__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-8f500398","hasScoped":false,"buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../node_modules/vue-loader/lib/selector?type=template&index=0!./Back.vue */ 35);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-8f500398","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Back.vue */ 34)
}
var normalizeComponent = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Back_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f500398_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Back_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 5 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Back.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    notHome: function notHome() {
      return this.$router ? this.$route.name != 'home' : false;
    }
  },

  methods: {
    goBack: function goBack() {
      if (this.$router) this.$router.back();
    }
  }
});

/***/ }),
/* 6 */
/*!**************************************!*\
  !*** ./src/components/HeaderBar.vue ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_HeaderBar_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../node_modules/vue-loader/lib/selector?type=script&index=0!./HeaderBar.vue */ 7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15a229d5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_HeaderBar_vue__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-15a229d5","hasScoped":false,"buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../node_modules/vue-loader/lib/selector?type=template&index=0!./HeaderBar.vue */ 37);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-15a229d5","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./HeaderBar.vue */ 36)
}
var normalizeComponent = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_HeaderBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15a229d5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_HeaderBar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 7 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/HeaderBar.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Back_vue__ = __webpack_require__(/*! ./Back.vue */ 4);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  components: { Back: __WEBPACK_IMPORTED_MODULE_0__Back_vue__["a" /* default */] },
  props: {
    customTitle: { type: String },
    backgroundColor: { type: String, default: '#0075EA' },
    color: { type: String, default: '#FFFFFF' }
  },
  computed: {
    title: function title() {
      return this.customTitle || this.$route.meta.title;
    }
  }
});

/***/ }),
/* 8 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Modal.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HeaderBar_vue__ = __webpack_require__(/*! ./HeaderBar.vue */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_dialogs_js__ = __webpack_require__(/*! ../lib/dialogs.js */ 9);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  components: { HeaderBar: __WEBPACK_IMPORTED_MODULE_0__HeaderBar_vue__["a" /* default */] },
  props: {
    title: {
      type: String,
      default: 'Modal title'
    },
    show: {
      type: Boolean,
      required: true
    },
    cancelLabel: {
      type: String,
      default: 'Cancelar'
    },
    okLabel: {
      type: String,
      default: 'OK'
    },
    permitSuccess: {
      type: Boolean,
      default: true
    },
    headerColor: {
      type: String,
      default: '#FFFFFF'
    },
    headerBackgroundColor: {
      type: String,
      default: '#0075EA'
    }
  },
  computed: {
    isIos: function isIos() {
      return (/iphone|ipod|ipad/i.test(window.navigator.userAgent)
      );
    }
  },
  methods: {
    reject: function reject() {
      this.$emit('close');
      this.$emit('cancel');
    },
    resolve: function resolve() {
      if (!this.permitSuccess) {
        __WEBPACK_IMPORTED_MODULE_1__lib_dialogs_js__["a" /* default */].alert('Preencha os campos corretamente para continuar');
        return;
      }
      this.$emit('close');
      this.$emit('success');
    }
  }
});

/***/ }),
/* 9 */
/*!****************************!*\
  !*** ./src/lib/dialogs.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
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
});

/***/ }),
/* 10 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/forms/Checkbox.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    label: String,
    name: String,
    value: null,
    disabled: Boolean,
    trueValue: { default: true },
    falseValue: { default: false }
  },
  computed: {
    id: function id() {
      return 'cb-' + this._uid;
    },

    model: {
      get: function get() {
        return this.value;
      },
      set: function set(newModel) {
        this.$emit('input', newModel);
      }
    }
  }
});

/***/ }),
/* 11 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/forms/IosSwitch.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    name: String,
    value: null,
    disabled: Boolean,
    trueValue: { default: true },
    falseValue: { default: false }
  },
  computed: {
    id: function id() {
      return 'switch-' + this._uid;
    },

    model: {
      get: function get() {
        return this.value;
      },
      set: function set(newModel) {
        this.$emit('input', newModel);
      }
    }
  }
});

/***/ }),
/* 12 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/forms/Radio.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    label: String,
    name: String,
    value: null,
    val: null,
    disabled: Boolean
  },
  computed: {
    id: function id() {
      return 'radio-' + this.name + this._uid;
    },

    model: {
      get: function get() {
        return this.value;
      },
      set: function set(newModel) {
        this.$emit('input', newModel);
      }
    }
  }
});

/***/ }),
/* 13 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/forms/MaskInput.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    value: null,
    mask: String,
    disabled: Boolean
  },
  computed: {
    maskSize: function maskSize() {
      return this.$util.masks.size(this.mask, true);
    },
    valueSize: function valueSize() {
      return this.$util.masks.size(this.mask);
    },

    model: {
      get: function get() {
        if (this.$util.masks[this.mask]) {
          return this.$util.masks[this.mask](this.value);
        }
        return this.$util.masks.default(this.value, this.mask);
      },
      set: function set(newModel) {
        newModel = this.$util.masks.clear(newModel);
        this.$emit('input', newModel.substr(0, this.valueSize));
      }
    }
  }
});

/***/ }),
/* 14 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/forms/InputContainer.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    label: String,
    icon: String,
    asterisk: Boolean
  }
});

/***/ }),
/* 15 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menu/SideMenu.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
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
});

/***/ }),
/* 16 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/menu/SideMenuItems.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    items: { type: Object, required: true }
  },
  methods: {
    hide: function hide() {
      console.log('click hide');
    }
  }
});

/***/ }),
/* 17 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/load/Spinner.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#9d9d9d'
    },
    size: {
      type: String,
      default: '20px'
    },
    margin: {
      type: String,
      default: '15px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  data: function data() {
    return {
      spinnerStyle: {
        backgroundColor: this.color,
        width: this.size,
        height: this.size,
        margin: this.margin,
        borderRadius: this.radius,
        display: 'inline-block',
        animationName: 'v-pulseStretchDelay',
        animationDuration: '0.75s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
        animationFillMode: 'both'
      },
      spinnerDelay1: {
        animationDelay: '0.12s'
      },
      spinnerDelay2: {
        animationDelay: '0.24s'
      },
      spinnerDelay3: {
        animationDelay: '0.36s'
      }
    };
  }
});

/***/ }),
/* 18 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/load/LoadManager.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spinner__ = __webpack_require__(/*! ./Spinner */ 3);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  components: { Spinner: __WEBPACK_IMPORTED_MODULE_0__Spinner__["a" /* default */] },
  props: {
    status: {
      type: String,
      required: true
    }
  },
  computed: {
    loading: function loading() {
      return this.status == 'loading';
    },
    success: function success() {
      return this.status == 'success';
    },
    failure: function failure() {
      return this.status == 'failure';
    }
  }
});

/***/ }),
/* 19 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/load/ListManager.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    status: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  computed: {
    recordsFound: function recordsFound() {
      return this.status == 'success' && this.count > 0;
    }
  }
});

/***/ }),
/* 20 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/load/Loading.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Spinner__ = __webpack_require__(/*! ./Spinner */ 3);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: { Spinner: __WEBPACK_IMPORTED_MODULE_0__Spinner__["a" /* default */] },
  props: {
    loading: Boolean
  }
});

/***/ }),
/* 21 */
/*!*************************!*\
  !*** ./src/lib/mask.js ***!
  \*************************/
/*! exports provided: default, cpf, cnpj, cpfCnpj, phone, cep, placa, clear, formats, size */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["cpf"] = cpf;
/* harmony export (immutable) */ __webpack_exports__["cnpj"] = cnpj;
/* harmony export (immutable) */ __webpack_exports__["cpfCnpj"] = cpfCnpj;
/* harmony export (immutable) */ __webpack_exports__["phone"] = phone;
/* harmony export (immutable) */ __webpack_exports__["cep"] = cep;
/* harmony export (immutable) */ __webpack_exports__["placa"] = placa;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formats", function() { return formats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_string_mask__ = __webpack_require__(/*! string-mask */ 82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_string_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_string_mask__);


var formats = {
  cpf: '000.000.000-00',
  cnpj: '00.000.000/0000-00',
  phone: '(00) 90000-0000',
  cep: '00.000-000',
  placa: 'UUU-0000'
};

function formatter(value, format) {
  var str = new __WEBPACK_IMPORTED_MODULE_0_string_mask___default.a(format).apply(value);
  if (str.length < format.length && str.substr(-1) == format[str.length - 1]) {
    if (!/[09#ASUL\$]/.test(format[str.length - 1])) {
      str = str.substr(0, str.length - 1);
    }
  }
  return str.substr(0, format.length);
}

function clear(value, pattern) {
  if (!value) {
    return '';
  }
  return value.replace(pattern || /\D/g, '');
}

function size(format) {
  var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if ('cpfCnpj' == format) return full ? 18 : 14;
  format = formats[format] || format;
  return full ? format.length : clear(format, /[^09#ASUL\$]/g).length;
}

/* harmony default export */ __webpack_exports__["default"] = (formatter);

function cpf(value) {
  return formatter(clear(value), formats.cpf);
}
function cnpj(value) {
  return formatter(clear(value), formats.cnpj);
}
function cpfCnpj(value) {
  value = clear(value);
  var format = value.length > 11 ? formats.cnpj : formats.cpf;
  return formatter(value, format);
}
function phone(value) {
  return formatter(clear(value), formats.phone);
}
function cep(value) {
  return formatter(clear(value), formats.cep);
}
function placa(value) {
  return formatter(clear(value, /\W/g), formats.placa);
}


/***/ }),
/* 22 */
/*!***********************************!*\
  !*** ./src/store/helpers/base.js ***!
  \***********************************/
/*! exports provided: default, SUCCESS, LOADING, FAILURE */
/*! exports used: FAILURE, LOADING, SUCCESS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAILURE; });
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

  var actions = {
    fetchRequest: function fetchRequest(_ref, promise) {
      var commit = _ref.commit;

      commit('setLoading');
      promise.then(function () {
        return commit('setSuccess');
      });
      promise.catch(function () {
        return commit('setFailure');
      });
      return promise;
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
  obj.actions = Object.assign(actions, obj.actions);
  obj.mutations = Object.assign(mutations, obj.mutations);

  return obj;
}

/* harmony default export */ __webpack_exports__["d"] = (create);



/***/ }),
/* 23 */
/*!****************************************!*\
  !*** ./src/store/helpers/paginator.js ***!
  \****************************************/
/*! exports provided: default, SUCCESS, LOADING, FAILURE */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(/*! ./base */ 22);
/* unused harmony reexport SUCCESS */
/* unused harmony reexport LOADING */
/* unused harmony reexport FAILURE */


function create(obj, api) {
  var state = {
    page: 1,
    pages: 1,
    count: null,
    query: {},
    order: {},
    list: [],
    current: null
  };

  var getters = {
    params: function params(state) {
      return {
        page: state.page,
        pages: state.pages,
        order: state.order,
        q: state.query
      };
    }
  };

  var actions = {
    fetchList: function fetchList(_ref) {
      var commit = _ref.commit,
          dispatch = _ref.dispatch,
          getters = _ref.getters;

      commit('setList', []);
      return dispatch('fetchRequest', api.list(getters.params)).then(function (response) {
        commit('setList', response.rows);
        commit('setPage', response.page);
        commit('setPages', response.pages);
        commit('setCount', response.count);
        return response.rows;
      });
    },
    fetchOne: function fetchOne(_ref2, id) {
      var commit = _ref2.commit,
          dispatch = _ref2.dispatch;

      commit('setCurrent', null);
      return dispatch('fetchRequest', api.one(id)).then(function (response) {
        commit('setCurrent', response);
        return response;
      });
    },
    firstPage: function firstPage(_ref3) {
      var commit = _ref3.commit,
          dispatch = _ref3.dispatch,
          state = _ref3.state;

      if (state.page > 1) {
        commit('setPage', 1);
        dispatch('fetchList');
      }
    },
    prevPage: function prevPage(_ref4) {
      var commit = _ref4.commit,
          dispatch = _ref4.dispatch,
          state = _ref4.state;

      if (state.page > 1) {
        commit('setPage', state.page - 1);
        dispatch('fetchList');
      }
    },
    nextPage: function nextPage(_ref5) {
      var commit = _ref5.commit,
          dispatch = _ref5.dispatch,
          state = _ref5.state;

      if (state.page == state.pages) return;
      commit('setPage', state.page + 1);
      dispatch('fetchList');
    },
    lastPage: function lastPage(_ref6) {
      var commit = _ref6.commit,
          dispatch = _ref6.dispatch,
          state = _ref6.state;

      if (state.pages > state.page) {
        commit('setPage', state.pages);
        dispatch('fetchList');
      }
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
      state.page = parseInt(page);
    },
    setPages: function setPages(state, pages) {
      state.pages = parseInt(pages);
    },
    setCount: function setCount(state, count) {
      state.count = parseInt(count);
    },
    setOrder: function setOrder(state, order) {
      state.order = order;
    },
    setQuery: function setQuery(state, q) {
      state.query = q;
    }
  };

  obj = Object(__WEBPACK_IMPORTED_MODULE_0__base__["d" /* default */])(obj);

  obj.state = Object.assign(state, obj.state);
  obj.getters = Object.assign(getters, obj.getters);
  obj.actions = Object.assign(actions, obj.actions);
  obj.mutations = Object.assign(mutations, obj.mutations);

  return obj;
}

/* harmony default export */ __webpack_exports__["a"] = (create);



/***/ }),
/* 24 */
/*!**************************************!*\
  !*** ./src/lib/auth/TokenManager.js ***!
  \**************************************/
/*! exports provided: default, STORAGE_KEY, extractHeaders */
/*! exports used: STORAGE_KEY, default, extractHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return extractHeaders; });
var header_keys = ['access-token', 'client', 'expiry', 'token-type', 'uid'];
var STORAGE_KEY = 'auth_token';
var extractHeaders = function extractHeaders(headers) {
  var ret = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = header_keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      ret[key] = headers.get(key);
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

  return ret;
};

/* harmony default export */ __webpack_exports__["b"] = ({
  setToken: function setToken(headers) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(extractHeaders(headers)));
  },
  getToken: function getToken() {
    var item = localStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : '';
  },
  removeToken: function removeToken() {
    localStorage.removeItem(STORAGE_KEY);
  }
});



/***/ }),
/* 25 */
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paliari/projects/ferramentas/paliari-vue/src/index.js */26);


/***/ }),
/* 26 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, components, filters, directives, util, StoreHelpers, StorePlugins, Auth, AuthManager, TokenManager, CookieManager */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index__ = __webpack_require__(/*! ./components/index */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filters_index__ = __webpack_require__(/*! ./filters/index */ 72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_index__ = __webpack_require__(/*! ./directives/index */ 83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_i18n__ = __webpack_require__(/*! ./lib/i18n */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_index__ = __webpack_require__(/*! ./lib/index */ 90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_index__ = __webpack_require__(/*! ./store/index */ 91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_VuexMapper__ = __webpack_require__(/*! ./mixins/VuexMapper */ 94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_auth__ = __webpack_require__(/*! ./lib/auth */ 96);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "components", function() { return __WEBPACK_IMPORTED_MODULE_0__components_index__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return __WEBPACK_IMPORTED_MODULE_1__filters_index__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "directives", function() { return __WEBPACK_IMPORTED_MODULE_2__directives_index__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_4__lib_index__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StoreHelpers", function() { return __WEBPACK_IMPORTED_MODULE_5__store_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StorePlugins", function() { return __WEBPACK_IMPORTED_MODULE_5__store_index__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_auth__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthManager", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_auth__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TokenManager", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_auth__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_auth__["b"]; });
__webpack_require__(/*! ./polyfill/index.js */ 27);












/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (options.locales) {
      Object(__WEBPACK_IMPORTED_MODULE_3__lib_i18n__["b" /* setLocale */])(options.locales);
    }
    Vue.use(__WEBPACK_IMPORTED_MODULE_0__components_index__["default"]);
    Vue.use(__WEBPACK_IMPORTED_MODULE_1__filters_index__["default"]);
    Vue.use(__WEBPACK_IMPORTED_MODULE_2__directives_index__["default"]);
    Vue.use(__WEBPACK_IMPORTED_MODULE_4__lib_index__["default"]);
    if (options.Vuex) {
      Vue.use(__WEBPACK_IMPORTED_MODULE_6__mixins_VuexMapper__["a" /* default */], options.Vuex);
    }
  }
});



/***/ }),
/* 27 */
/*!*******************************!*\
  !*** ./src/polyfill/index.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./ArrayIsArray.js */ 28);
__webpack_require__(/*! ./ObjectAssign.js */ 29);
__webpack_require__(/*! es6-promise */ 30).polyfill();

/***/ }),
/* 28 */
/*!**************************************!*\
  !*** ./src/polyfill/ArrayIsArray.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

/***/ }),
/* 29 */
/*!**************************************!*\
  !*** ./src/polyfill/ObjectAssign.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
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
/* 30 */
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    return promise.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 31), __webpack_require__(/*! ./../../webpack/buildin/global.js */ 32)))

/***/ }),
/* 31 */
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 32 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 33 */
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: default, Back, HeaderBar, Modal, Checkbox, IosSwitch, Radio, MaskInput, InputContainer, SideMenu, SideMenuItems, Spinner, LoadManager, ListManager, Loading */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Back_vue__ = __webpack_require__(/*! ./Back.vue */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue__ = __webpack_require__(/*! ./HeaderBar.vue */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue__ = __webpack_require__(/*! ./Modal.vue */ 38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue__ = __webpack_require__(/*! ./forms/Checkbox.vue */ 41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue__ = __webpack_require__(/*! ./forms/IosSwitch.vue */ 44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue__ = __webpack_require__(/*! ./forms/Radio.vue */ 47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_MaskInput_vue__ = __webpack_require__(/*! ./forms/MaskInput.vue */ 50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_InputContainer_vue__ = __webpack_require__(/*! ./forms/InputContainer.vue */ 52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_SideMenu_vue__ = __webpack_require__(/*! ./menu/SideMenu.vue */ 55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_SideMenuItems_vue__ = __webpack_require__(/*! ./menu/SideMenuItems.vue */ 58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__load_Spinner_vue__ = __webpack_require__(/*! ./load/Spinner.vue */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__load_LoadManager_vue__ = __webpack_require__(/*! ./load/LoadManager.vue */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__load_ListManager_vue__ = __webpack_require__(/*! ./load/ListManager.vue */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__load_Loading_vue__ = __webpack_require__(/*! ./load/Loading.vue */ 69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return __WEBPACK_IMPORTED_MODULE_0__Back_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBar", function() { return __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_2__Modal_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IosSwitch", function() { return __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MaskInput", function() { return __WEBPACK_IMPORTED_MODULE_6__forms_MaskInput_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputContainer", function() { return __WEBPACK_IMPORTED_MODULE_7__forms_InputContainer_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenu", function() { return __WEBPACK_IMPORTED_MODULE_8__menu_SideMenu_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuItems", function() { return __WEBPACK_IMPORTED_MODULE_9__menu_SideMenuItems_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return __WEBPACK_IMPORTED_MODULE_10__load_Spinner_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LoadManager", function() { return __WEBPACK_IMPORTED_MODULE_11__load_LoadManager_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ListManager", function() { return __WEBPACK_IMPORTED_MODULE_12__load_ListManager_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return __WEBPACK_IMPORTED_MODULE_13__load_Loading_vue__["a"]; });















var components = {
  Back: __WEBPACK_IMPORTED_MODULE_0__Back_vue__["a" /* default */],
  HeaderBar: __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue__["a" /* default */],
  Modal: __WEBPACK_IMPORTED_MODULE_2__Modal_vue__["a" /* default */],
  Checkbox: __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue__["a" /* default */],
  IosSwitch: __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue__["a" /* default */],
  Radio: __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue__["a" /* default */],
  MaskInput: __WEBPACK_IMPORTED_MODULE_6__forms_MaskInput_vue__["a" /* default */],
  InputContainer: __WEBPACK_IMPORTED_MODULE_7__forms_InputContainer_vue__["a" /* default */],
  SideMenu: __WEBPACK_IMPORTED_MODULE_8__menu_SideMenu_vue__["a" /* default */],
  SideMenuItems: __WEBPACK_IMPORTED_MODULE_9__menu_SideMenuItems_vue__["a" /* default */],
  Spinner: __WEBPACK_IMPORTED_MODULE_10__load_Spinner_vue__["a" /* default */],
  LoadManager: __WEBPACK_IMPORTED_MODULE_11__load_LoadManager_vue__["a" /* default */],
  ListManager: __WEBPACK_IMPORTED_MODULE_12__load_ListManager_vue__["a" /* default */],
  Loading: __WEBPACK_IMPORTED_MODULE_13__load_Loading_vue__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    for (var k in components) {
      Vue.component(k, components[k]);
    }
  }
});



/***/ }),
/* 34 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-8f500398","scoped":false,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/Back.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8f500398","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Back.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.notHome),expression:"notHome"}],staticClass:"btn-back",on:{"click":_vm.goBack}},[_c('i',{staticClass:"fa fa-arrow-left fa-lg",attrs:{"aria-hidden":"true"}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 36 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-15a229d5","scoped":false,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/HeaderBar.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-15a229d5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/HeaderBar.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"header-bar",style:({color: _vm.color, backgroundColor: _vm.backgroundColor})},[_c('div',{staticClass:"header-bar-content"},[_c('div',{staticClass:"header-bar-content-left"},[_vm._t("left",[_c('back')])],2),_c('div',{staticClass:"header-bar-content-center"},[_vm._v(_vm._s(_vm.title))]),_c('div',{staticClass:"header-bar-content-right"},[_vm._t("right")],2)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 38 */
/*!**********************************!*\
  !*** ./src/components/Modal.vue ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Modal.vue */ 8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e66bc8e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2e66bc8e","hasScoped":true,"buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../node_modules/vue-loader/lib/selector?type=template&index=0!./Modal.vue */ 40);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-2e66bc8e","scoped":true,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Modal.vue */ 39)
}
var normalizeComponent = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2e66bc8e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Modal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e66bc8e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Modal_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 39 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-2e66bc8e","scoped":true,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/Modal.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2e66bc8e","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Modal.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('transition',{attrs:{"name":"modal"}},[_c('div',{staticClass:"pv-modal",class:{ios: _vm.isIos}},[_c('header-bar',{staticClass:"pv-modal-header",attrs:{"custom-title":_vm.title,"color":_vm.headerColor,"background-color":_vm.headerBackgroundColor}},[_c('div',{staticClass:"button-left",attrs:{"slot":"left"},on:{"click":_vm.reject},slot:"left"},[_vm._v(_vm._s(_vm.cancelLabel))]),_c('div',{staticClass:"button-right",class:{disabled: !_vm.permitSuccess},attrs:{"slot":"right"},on:{"click":_vm.resolve},slot:"right"},[_vm._v(_vm._s(_vm.okLabel))])]),_c('div',{staticClass:"pv-modal-body"},[_vm._t("default")],2)],1)]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 41 */
/*!*******************************************!*\
  !*** ./src/components/forms/Checkbox.vue ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Checkbox_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Checkbox.vue */ 10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f4fb438_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Checkbox_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-6f4fb438","hasScoped":false,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Checkbox.vue */ 43);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-6f4fb438","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Checkbox.vue */ 42)
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Checkbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f4fb438_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Checkbox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 42 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-6f4fb438","scoped":false,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/forms/Checkbox.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6f4fb438","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/forms/Checkbox.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],attrs:{"type":"checkbox","id":_vm.id,"name":_vm.name,"disabled":_vm.disabled,"true-value":_vm.trueValue,"false-value":_vm.falseValue},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:_vm._q(_vm.model,_vm.trueValue)},on:{"change":function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(_vm.trueValue):(_vm.falseValue);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}}}}),_c('label',{attrs:{"for":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 44 */
/*!********************************************!*\
  !*** ./src/components/forms/IosSwitch.vue ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_IosSwitch_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./IosSwitch.vue */ 11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dd415e9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_IosSwitch_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-3dd415e9","hasScoped":false,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./IosSwitch.vue */ 46);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-3dd415e9","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./IosSwitch.vue */ 45)
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_IosSwitch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dd415e9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_IosSwitch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 45 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-3dd415e9","scoped":false,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/forms/IosSwitch.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3dd415e9","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/forms/IosSwitch.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ios-switch"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],attrs:{"type":"checkbox","id":_vm.id,"name":_vm.name,"disabled":_vm.disabled,"true-value":_vm.trueValue,"false-value":_vm.falseValue},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:_vm._q(_vm.model,_vm.trueValue)},on:{"change":function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(_vm.trueValue):(_vm.falseValue);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}}}}),_c('label',{staticClass:"switcher",attrs:{"for":_vm.id}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 47 */
/*!****************************************!*\
  !*** ./src/components/forms/Radio.vue ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Radio_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Radio.vue */ 12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77253d26_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Radio_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-77253d26","hasScoped":false,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Radio.vue */ 49);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-77253d26","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Radio.vue */ 48)
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Radio_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77253d26_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Radio_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 48 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-77253d26","scoped":false,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/forms/Radio.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-77253d26","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/forms/Radio.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"radio"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],attrs:{"id":_vm.id,"name":_vm.name,"disabled":_vm.disabled,"type":"radio"},domProps:{"value":_vm.val,"checked":_vm._q(_vm.model,_vm.val)},on:{"change":function($event){_vm.model=_vm.val}}}),_c('label',{attrs:{"for":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 50 */
/*!********************************************!*\
  !*** ./src/components/forms/MaskInput.vue ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_MaskInput_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./MaskInput.vue */ 13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38e75432_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_MaskInput_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-38e75432","hasScoped":false,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./MaskInput.vue */ 51);
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_MaskInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38e75432_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_MaskInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 51 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-38e75432","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/forms/MaskInput.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],attrs:{"maxlength":_vm.maskSize},domProps:{"value":(_vm.model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.model=$event.target.value}}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 52 */
/*!*************************************************!*\
  !*** ./src/components/forms/InputContainer.vue ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_InputContainer_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./InputContainer.vue */ 14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01def867_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_InputContainer_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-01def867","hasScoped":false,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./InputContainer.vue */ 54);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-01def867","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./InputContainer.vue */ 53)
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_InputContainer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01def867_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_InputContainer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 53 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-01def867","scoped":false,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/forms/InputContainer.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-01def867","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/forms/InputContainer.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-container",class:{'has-icon': _vm.icon, 'has-label': _vm.label}},[(_vm.label)?_c('label',[_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.label))]),(_vm.asterisk)?_c('span',{staticClass:"asterisk"},[_vm._v(" ✱")]):_vm._e()]):_vm._e(),(_vm.icon)?_c('i',{staticClass:"icon fa fa-lg",class:_vm.icon}):_vm._e(),_vm._t("default"),_c('div',{staticClass:"error-message"},[_vm._t("error-message",[_vm._v("inválido!")])],2)],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 55 */
/*!******************************************!*\
  !*** ./src/components/menu/SideMenu.vue ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_SideMenu_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./SideMenu.vue */ 15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7745c1d0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_SideMenu_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-7745c1d0","hasScoped":false,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./SideMenu.vue */ 57);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-7745c1d0","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SideMenu.vue */ 56)
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_SideMenu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7745c1d0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_SideMenu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 56 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-7745c1d0","scoped":false,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menu/SideMenu.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7745c1d0","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menu/SideMenu.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"side-menu"},[_c('a',{staticClass:"menu-btn",on:{"click":_vm.show}},[_vm._t("btn-icon",[_c('i',{staticClass:"fa fa-lg",class:_vm.icon,attrs:{"aria-hidden":"true"}})])],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.opened),expression:"opened"}],staticClass:"side-menu-bg",on:{"click":_vm.hide}}),_c('div',{staticClass:"side-menu-content",class:{open: _vm.opened}},[_c('header',[_vm._t("header")],2),_c('div',{on:{"click":_vm.hide}},[_vm._t("default")],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 58 */
/*!***********************************************!*\
  !*** ./src/components/menu/SideMenuItems.vue ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_SideMenuItems_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./SideMenuItems.vue */ 16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a183ee18_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_SideMenuItems_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-a183ee18","hasScoped":false,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./SideMenuItems.vue */ 60);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-a183ee18","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SideMenuItems.vue */ 59)
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_SideMenuItems_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a183ee18_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_SideMenuItems_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 59 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-a183ee18","scoped":false,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/menu/SideMenuItems.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a183ee18","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/menu/SideMenuItems.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"side-menu-items"},_vm._l((_vm.items),function(m){return _c('div',{staticClass:"side-menu-item"},[(m.divider)?_c('div',{staticClass:"side-menu-divider"}):_c('router-link',{staticClass:"side-menu-link ellipsis",attrs:{"to":m.to}},[_c('i',{staticClass:"fa fa-lg fa-fw",class:m.icon,attrs:{"aria-hidden":"true"}}),_vm._v(_vm._s(m.label))])],1)}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 61 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-48267f98","scoped":false,"hasInlineConfig":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/load/Spinner.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-48267f98","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/load/Spinner.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"v-spinner"},[_c('div',{staticClass:"v-pulse v-pulse1",style:([_vm.spinnerStyle,_vm.spinnerDelay1])}),_c('div',{staticClass:"v-pulse v-pulse2",style:([_vm.spinnerStyle,_vm.spinnerDelay2])}),_c('div',{staticClass:"v-pulse v-pulse3",style:([_vm.spinnerStyle,_vm.spinnerDelay3])})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 63 */
/*!*********************************************!*\
  !*** ./src/components/load/LoadManager.vue ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_LoadManager_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./LoadManager.vue */ 18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10e97bfe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_LoadManager_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-10e97bfe","hasScoped":false,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./LoadManager.vue */ 65);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-10e97bfe","scoped":false,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./LoadManager.vue */ 64)
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_LoadManager_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_10e97bfe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_LoadManager_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 64 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-10e97bfe","scoped":false,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/load/LoadManager.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-10e97bfe","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/load/LoadManager.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"paliari-vue-load-manager"},[(_vm.success)?_vm._t("default"):_c('div',{staticClass:"gray-lighter layout-table"},[_c('div',{staticClass:"layout-table-cell"},[_c('spinner',{attrs:{"loading":_vm.loading}}),(_vm.failure)?_c('div',[_c('i',{staticClass:"fa fa-4x fa-exclamation-circle"}),_c('h3',[_vm._v("Falha ao carregar dados")])]):_vm._e()],1)])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 66 */
/*!*********************************************!*\
  !*** ./src/components/load/ListManager.vue ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ListManager_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./ListManager.vue */ 19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ae5d52a6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_ListManager_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-ae5d52a6","hasScoped":true,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ListManager.vue */ 68);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-ae5d52a6","scoped":true,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./ListManager.vue */ 67)
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ae5d52a6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_ListManager_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ae5d52a6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_ListManager_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 67 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-ae5d52a6","scoped":true,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/load/ListManager.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ae5d52a6","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/load/ListManager.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"paliari-vue-list-manager"},[(_vm.recordsFound)?_vm._t("default"):_c('div',{staticClass:"gray-lighter layout-table"},[_vm._m(0)])],2)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout-table-cell"},[_c('i',{staticClass:"fa fa-4x fa-list-ul"}),_c('h3',[_vm._v("Nenhum registro encontrado")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 69 */
/*!*****************************************!*\
  !*** ./src/components/load/Loading.vue ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Loading_vue__ = __webpack_require__(/*! !babel-loader?{"babelrc":false,"presets":[["/Users/paliari/projects/ferramentas/paliari-vue/node_modules/babel-preset-poi/index.js",{"jsx":"vue"}]],"cacheDirectory":true}!../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Loading.vue */ 20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f313626_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Loading_vue__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-0f313626","hasScoped":true,"buble":{"transforms":{}}}!../../../node_modules/vue-loader/lib/template-compiler/preprocessor?engine=pug!../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Loading.vue */ 71);
function injectStyle (ssrContext) {
  __webpack_require__(/*! !../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-0f313626","scoped":true,"hasInlineConfig":true}!stylus-loader?{"sourceMap":false}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Loading.vue */ 70)
}
var normalizeComponent = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/component-normalizer */ 0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0f313626"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_babelrc_false_presets_Users_paliari_projects_ferramentas_paliari_vue_node_modules_babel_preset_poi_index_js_jsx_vue_cacheDirectory_true_node_modules_vue_loader_lib_selector_type_script_index_0_Loading_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f313626_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_Loading_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 70 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"autoprefixer":false,"sourceMap":false,"minimize":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-0f313626","scoped":true,"hasInlineConfig":true}!./node_modules/stylus-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/load/Loading.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0f313626","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/load/Loading.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.loading)?_c('div',{staticClass:"loading"},[_c('div',{staticClass:"table-cell"},[_c('spinner')],1)]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 72 */
/*!******************************!*\
  !*** ./src/filters/index.js ***!
  \******************************/
/*! exports provided: default, mask, masks, truncate, currency, date, deepKey, translate, enums, tModel */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__truncate__ = __webpack_require__(/*! ./truncate */ 73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency__ = __webpack_require__(/*! ./currency */ 74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date__ = __webpack_require__(/*! ./date */ 75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deepKey__ = __webpack_require__(/*! ./deepKey */ 78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate__ = __webpack_require__(/*! ./translate */ 79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums__ = __webpack_require__(/*! ./enums */ 80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tModel__ = __webpack_require__(/*! ./tModel */ 81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_mask__ = __webpack_require__(/*! ../lib/mask */ 21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mask", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_mask__["default"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "masks", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_mask__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return __WEBPACK_IMPORTED_MODULE_0__truncate__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "currency", function() { return __WEBPACK_IMPORTED_MODULE_1__currency__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return __WEBPACK_IMPORTED_MODULE_2__date__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepKey", function() { return __WEBPACK_IMPORTED_MODULE_3__deepKey__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return __WEBPACK_IMPORTED_MODULE_4__translate__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "enums", function() { return __WEBPACK_IMPORTED_MODULE_5__enums__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tModel", function() { return __WEBPACK_IMPORTED_MODULE_6__tModel__["a"]; });









var filters = Object.assign({}, __WEBPACK_IMPORTED_MODULE_7__lib_mask__, {
  mask: __WEBPACK_IMPORTED_MODULE_7__lib_mask__["default"],
  truncate: __WEBPACK_IMPORTED_MODULE_0__truncate__["a" /* default */],
  currency: __WEBPACK_IMPORTED_MODULE_1__currency__["a" /* default */],
  date: __WEBPACK_IMPORTED_MODULE_2__date__["a" /* default */],
  deepKey: __WEBPACK_IMPORTED_MODULE_3__deepKey__["a" /* default */],
  translate: __WEBPACK_IMPORTED_MODULE_4__translate__["a" /* default */],
  enums: __WEBPACK_IMPORTED_MODULE_5__enums__["a" /* default */],
  tModel: __WEBPACK_IMPORTED_MODULE_6__tModel__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    for (var f in filters) {
      Vue.filter(f, filters[f]);
    }
  }
});



/***/ }),
/* 73 */
/*!*********************************!*\
  !*** ./src/filters/truncate.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (text) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

  return text.substr(0, length - 3) + '...';
});

/***/ }),
/* 74 */
/*!*********************************!*\
  !*** ./src/filters/currency.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (number) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var sufix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  try {
    return prefix + parseFloat(number).toFixed(2).replace(/\./g, ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.') + sufix;
  } catch (e) {
    return number;
  }
});

/***/ }),
/* 75 */
/*!*****************************!*\
  !*** ./src/filters/date.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_fecha__ = __webpack_require__(/*! ../lib/fecha */ 76);


/* harmony default export */ __webpack_exports__["a"] = (function (date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'shortDateTime';

  try {
    date = __WEBPACK_IMPORTED_MODULE_0__lib_fecha__["a" /* default */].parse(date, 'YYYY-MM-DDTHH:mm:ssZZ') || date;
    return __WEBPACK_IMPORTED_MODULE_0__lib_fecha__["a" /* default */].format(date, format);
  } catch (e) {
    return date;
  }
});

/***/ }),
/* 76 */
/*!**************************!*\
  !*** ./src/lib/fecha.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fecha__ = __webpack_require__(/*! fecha */ 77);
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

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_fecha___default.a);

/***/ }),
/* 77 */
/*!*************************************!*\
  !*** ./node_modules/fecha/fecha.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function (main) {
  'use strict';

  /**
   * Parse or format dates
   * @class fecha
   */
  var fecha = {};
  var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  var twoDigits = /\d\d?/;
  var threeDigits = /\d{3}/;
  var fourDigits = /\d{4}/;
  var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var literal = /\[([^]*?)\]/gm;
  var noop = function () {
  };

  function shorten(arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
  }

  function monthUpdate(arrName) {
    return function (d, v, i18n) {
      var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
      if (~index) {
        d.month = index;
      }
    };
  }

  function pad(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) {
      val = '0' + val;
    }
    return val;
  }

  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthNamesShort = shorten(monthNames, 3);
  var dayNamesShort = shorten(dayNames, 3);
  fecha.i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    DoFn: function DoFn(D) {
      return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
  };

  var formatFlags = {
    D: function(dateObj) {
      return dateObj.getDate();
    },
    DD: function(dateObj) {
      return pad(dateObj.getDate());
    },
    Do: function(dateObj, i18n) {
      return i18n.DoFn(dateObj.getDate());
    },
    d: function(dateObj) {
      return dateObj.getDay();
    },
    dd: function(dateObj) {
      return pad(dateObj.getDay());
    },
    ddd: function(dateObj, i18n) {
      return i18n.dayNamesShort[dateObj.getDay()];
    },
    dddd: function(dateObj, i18n) {
      return i18n.dayNames[dateObj.getDay()];
    },
    M: function(dateObj) {
      return dateObj.getMonth() + 1;
    },
    MM: function(dateObj) {
      return pad(dateObj.getMonth() + 1);
    },
    MMM: function(dateObj, i18n) {
      return i18n.monthNamesShort[dateObj.getMonth()];
    },
    MMMM: function(dateObj, i18n) {
      return i18n.monthNames[dateObj.getMonth()];
    },
    YY: function(dateObj) {
      return String(dateObj.getFullYear()).substr(2);
    },
    YYYY: function(dateObj) {
      return dateObj.getFullYear();
    },
    h: function(dateObj) {
      return dateObj.getHours() % 12 || 12;
    },
    hh: function(dateObj) {
      return pad(dateObj.getHours() % 12 || 12);
    },
    H: function(dateObj) {
      return dateObj.getHours();
    },
    HH: function(dateObj) {
      return pad(dateObj.getHours());
    },
    m: function(dateObj) {
      return dateObj.getMinutes();
    },
    mm: function(dateObj) {
      return pad(dateObj.getMinutes());
    },
    s: function(dateObj) {
      return dateObj.getSeconds();
    },
    ss: function(dateObj) {
      return pad(dateObj.getSeconds());
    },
    S: function(dateObj) {
      return Math.round(dateObj.getMilliseconds() / 100);
    },
    SS: function(dateObj) {
      return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
    },
    SSS: function(dateObj) {
      return pad(dateObj.getMilliseconds(), 3);
    },
    a: function(dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function(dateObj, i18n) {
      return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
    },
    ZZ: function(dateObj) {
      var o = dateObj.getTimezoneOffset();
      return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
    }
  };

  var parseFlags = {
    D: [twoDigits, function (d, v) {
      d.day = v;
    }],
    Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
      d.day = parseInt(v, 10);
    }],
    M: [twoDigits, function (d, v) {
      d.month = v - 1;
    }],
    YY: [twoDigits, function (d, v) {
      var da = new Date(), cent = +('' + da.getFullYear()).substr(0, 2);
      d.year = '' + (v > 68 ? cent - 1 : cent) + v;
    }],
    h: [twoDigits, function (d, v) {
      d.hour = v;
    }],
    m: [twoDigits, function (d, v) {
      d.minute = v;
    }],
    s: [twoDigits, function (d, v) {
      d.second = v;
    }],
    YYYY: [fourDigits, function (d, v) {
      d.year = v;
    }],
    S: [/\d/, function (d, v) {
      d.millisecond = v * 100;
    }],
    SS: [/\d{2}/, function (d, v) {
      d.millisecond = v * 10;
    }],
    SSS: [threeDigits, function (d, v) {
      d.millisecond = v;
    }],
    d: [twoDigits, noop],
    ddd: [word, noop],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    a: [word, function (d, v, i18n) {
      var val = v.toLowerCase();
      if (val === i18n.amPm[0]) {
        d.isPm = false;
      } else if (val === i18n.amPm[1]) {
        d.isPm = true;
      }
    }],
    ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function (d, v) {
      if (v === 'Z') v = '+00:00';
      var parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes;

      if (parts) {
        minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
      }
    }]
  };
  parseFlags.dd = parseFlags.d;
  parseFlags.dddd = parseFlags.ddd;
  parseFlags.DD = parseFlags.D;
  parseFlags.mm = parseFlags.m;
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
  parseFlags.MM = parseFlags.M;
  parseFlags.ss = parseFlags.s;
  parseFlags.A = parseFlags.a;


  // Some common format strings
  fecha.masks = {
    default: 'ddd MMM DD YYYY HH:mm:ss',
    shortDate: 'M/D/YY',
    mediumDate: 'MMM D, YYYY',
    longDate: 'MMMM D, YYYY',
    fullDate: 'dddd, MMMM D, YYYY',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
  };

  /***
   * Format a date
   * @method format
   * @param {Date|number} dateObj
   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
   */
  fecha.format = function (dateObj, mask, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof dateObj === 'number') {
      dateObj = new Date(dateObj);
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
      throw new Error('Invalid Date in fecha.format');
    }

    mask = fecha.masks[mask] || mask || fecha.masks['default'];

    var literals = [];

    // Make literals inactive by replacing them with ??
    mask = mask.replace(literal, function($0, $1) {
      literals.push($1);
      return '??';
    });
    // Apply formatting rules
    mask = mask.replace(token, function ($0) {
      return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
    });
    // Inline literal values back into the formatted value
    return mask.replace(/\?\?/g, function() {
      return literals.shift();
    });
  };

  /**
   * Parse a date string into an object, changes - into /
   * @method parse
   * @param {string} dateStr Date string
   * @param {string} format Date parse format
   * @returns {Date|boolean}
   */
  fecha.parse = function (dateStr, format, i18nSettings) {
    var i18n = i18nSettings || fecha.i18n;

    if (typeof format !== 'string') {
      throw new Error('Invalid format in fecha.parse');
    }

    format = fecha.masks[format] || format;

    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
      return false;
    }

    var isValid = true;
    var dateInfo = {};
    format.replace(token, function ($0) {
      if (parseFlags[$0]) {
        var info = parseFlags[$0];
        var index = dateStr.search(info[0]);
        if (!~index) {
          isValid = false;
        } else {
          dateStr.replace(info[0], function (result) {
            info[1](dateInfo, result, i18n);
            dateStr = dateStr.substr(index + result.length);
            return result;
          });
        }
      }

      return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
    });

    if (!isValid) {
      return false;
    }

    var today = new Date();
    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
      dateInfo.hour = +dateInfo.hour + 12;
    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
      dateInfo.hour = 0;
    }

    var date;
    if (dateInfo.timezoneOffset != null) {
      dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
      date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
    } else {
      date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1,
        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
    }
    return date;
  };

  /* istanbul ignore next */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fecha;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return fecha;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    main.fecha = fecha;
  }
})(this);


/***/ }),
/* 78 */
/*!********************************!*\
  !*** ./src/filters/deepKey.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils__ = __webpack_require__(/*! ../lib/utils */ 2);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__lib_utils__["b" /* deepKey */]);

/***/ }),
/* 79 */
/*!**********************************!*\
  !*** ./src/filters/translate.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n__ = __webpack_require__(/*! ../lib/i18n */ 1);


/* harmony default export */ __webpack_exports__["a"] = (function (key, replaces) {
  return __WEBPACK_IMPORTED_MODULE_0__lib_i18n__["a" /* default */].hum(key, replaces);
});

/***/ }),
/* 80 */
/*!******************************!*\
  !*** ./src/filters/enums.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n__ = __webpack_require__(/*! ../lib/i18n */ 1);


/* harmony default export */ __webpack_exports__["a"] = (function (obj, key) {
  if (obj) {
    var k = key.split('.')[1];
    key = ['enums', key, obj[k]].join('.');
    return __WEBPACK_IMPORTED_MODULE_0__lib_i18n__["a" /* default */].hum(key);
  }
});

/***/ }),
/* 81 */
/*!*******************************!*\
  !*** ./src/filters/tModel.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n__ = __webpack_require__(/*! ../lib/i18n */ 1);


/* harmony default export */ __webpack_exports__["a"] = (function (key, replaces) {
  key = 'activerecord.' + (2 == key.split('.').length ? 'attributes.' : 'models.') + key;
  return __WEBPACK_IMPORTED_MODULE_0__lib_i18n__["a" /* default */].hum(key, replaces);
});

/***/ }),
/* 82 */
/*!*****************************************************!*\
  !*** ./node_modules/string-mask/src/string-mask.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    /* istanbul ignore next */
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.StringMask = factory();
    }
}(this, function() {
    var tokens = {
        '0': {pattern: /\d/, _default: '0'},
        '9': {pattern: /\d/, optional: true},
        '#': {pattern: /\d/, optional: true, recursive: true},
        'A': {pattern: /[a-zA-Z0-9]/},
        'S': {pattern: /[a-zA-Z]/},
        'U': {pattern: /[a-zA-Z]/, transform: function(c) { return c.toLocaleUpperCase(); }},
        'L': {pattern: /[a-zA-Z]/, transform: function(c) { return c.toLocaleLowerCase(); }},
        '$': {escape: true}
    };

    function isEscaped(pattern, pos) {
        var count = 0;
        var i = pos - 1;
        var token = {escape: true};
        while (i >= 0 && token && token.escape) {
            token = tokens[pattern.charAt(i)];
            count += token && token.escape ? 1 : 0;
            i--;
        }
        return count > 0 && count % 2 === 1;
    }

    function calcOptionalNumbersToUse(pattern, value) {
        var numbersInP = pattern.replace(/[^0]/g,'').length;
        var numbersInV = value.replace(/[^\d]/g,'').length;
        return numbersInV - numbersInP;
    }

    function concatChar(text, character, options, token) {
        if (token && typeof token.transform === 'function') {
            character = token.transform(character);
        }
        if (options.reverse) {
            return character + text;
        }
        return text + character;
    }

    function hasMoreTokens(pattern, pos, inc) {
        var pc = pattern.charAt(pos);
        var token = tokens[pc];
        if (pc === '') {
            return false;
        }
        return token && !token.escape ? true : hasMoreTokens(pattern, pos + inc, inc);
    }

    function hasMoreRecursiveTokens(pattern, pos, inc) {
        var pc = pattern.charAt(pos);
        var token = tokens[pc];
        if (pc === '') {
            return false;
        }
        return token && token.recursive ? true : hasMoreRecursiveTokens(pattern, pos + inc, inc);
    }

    function insertChar(text, char, position) {
        var t = text.split('');
        t.splice(position, 0, char);
        return t.join('');
    }

    function StringMask(pattern, opt) {
        this.options = opt || {};
        this.options = {
            reverse: this.options.reverse || false,
            usedefaults: this.options.usedefaults || this.options.reverse
        };
        this.pattern = pattern;
    }

    StringMask.prototype.process = function proccess(value) {
        if (!value) {
            return {result: '', valid: false};
        }
        value = value + '';
        var pattern2 = this.pattern;
        var valid = true;
        var formatted = '';
        var valuePos = this.options.reverse ? value.length - 1 : 0;
        var patternPos = 0;
        var optionalNumbersToUse = calcOptionalNumbersToUse(pattern2, value);
        var escapeNext = false;
        var recursive = [];
        var inRecursiveMode = false;

        var steps = {
            start: this.options.reverse ? pattern2.length - 1 : 0,
            end: this.options.reverse ? -1 : pattern2.length,
            inc: this.options.reverse ? -1 : 1
        };

        function continueCondition(options) {
            if (!inRecursiveMode && !recursive.length && hasMoreTokens(pattern2, patternPos, steps.inc)) {
                // continue in the normal iteration
                return true;
            } else if (!inRecursiveMode && recursive.length &&
                hasMoreRecursiveTokens(pattern2, patternPos, steps.inc)) {
                // continue looking for the recursive tokens
                // Note: all chars in the patterns after the recursive portion will be handled as static string
                return true;
            } else if (!inRecursiveMode) {
                // start to handle the recursive portion of the pattern
                inRecursiveMode = recursive.length > 0;
            }

            if (inRecursiveMode) {
                var pc = recursive.shift();
                recursive.push(pc);
                if (options.reverse && valuePos >= 0) {
                    patternPos++;
                    pattern2 = insertChar(pattern2, pc, patternPos);
                    return true;
                } else if (!options.reverse && valuePos < value.length) {
                    pattern2 = insertChar(pattern2, pc, patternPos);
                    return true;
                }
            }
            return patternPos < pattern2.length && patternPos >= 0;
        }

        /**
         * Iterate over the pattern's chars parsing/matching the input value chars
         * until the end of the pattern. If the pattern ends with recursive chars
         * the iteration will continue until the end of the input value.
         *
         * Note: The iteration must stop if an invalid char is found.
         */
        for (patternPos = steps.start; continueCondition(this.options); patternPos = patternPos + steps.inc) {
            // Value char
            var vc = value.charAt(valuePos);
            // Pattern char to match with the value char
            var pc = pattern2.charAt(patternPos);

            var token = tokens[pc];
            if (recursive.length && token && !token.recursive) {
                // In the recursive portion of the pattern: tokens not recursive must be seen as static chars
                token = null;
            }

            // 1. Handle escape tokens in pattern
            // go to next iteration: if the pattern char is a escape char or was escaped
            if (!inRecursiveMode || vc) {
                if (this.options.reverse && isEscaped(pattern2, patternPos)) {
                    // pattern char is escaped, just add it and move on
                    formatted = concatChar(formatted, pc, this.options, token);
                    // skip escape token
                    patternPos = patternPos + steps.inc;
                    continue;
                } else if (!this.options.reverse && escapeNext) {
                    // pattern char is escaped, just add it and move on
                    formatted = concatChar(formatted, pc, this.options, token);
                    escapeNext = false;
                    continue;
                } else if (!this.options.reverse && token && token.escape) {
                    // mark to escape the next pattern char
                    escapeNext = true;
                    continue;
                }
            }

            // 2. Handle recursive tokens in pattern
            // go to next iteration: if the value str is finished or
            //                       if there is a normal token in the recursive portion of the pattern
            if (!inRecursiveMode && token && token.recursive) {
                // save it to repeat in the end of the pattern and handle the value char now
                recursive.push(pc);
            } else if (inRecursiveMode && !vc) {
                // in recursive mode but value is finished. Add the pattern char if it is not a recursive token
                formatted = concatChar(formatted, pc, this.options, token);
                continue;
            } else if (!inRecursiveMode && recursive.length > 0 && !vc) {
                // recursiveMode not started but already in the recursive portion of the pattern
                continue;
            }

            // 3. Handle the value
            // break iterations: if value is invalid for the given pattern
            if (!token) {
                // add char of the pattern
                formatted = concatChar(formatted, pc, this.options, token);
                if (!inRecursiveMode && recursive.length) {
                    // save it to repeat in the end of the pattern
                    recursive.push(pc);
                }
            } else if (token.optional) {
                // if token is optional, only add the value char if it matchs the token pattern
                //                       if not, move on to the next pattern char
                if (token.pattern.test(vc) && optionalNumbersToUse) {
                    formatted = concatChar(formatted, vc, this.options, token);
                    valuePos = valuePos + steps.inc;
                    optionalNumbersToUse--;
                } else if (recursive.length > 0 && vc) {
                    valid = false;
                    break;
                }
            } else if (token.pattern.test(vc)) {
                // if token isn't optional the value char must match the token pattern
                formatted = concatChar(formatted, vc, this.options, token);
                valuePos = valuePos + steps.inc;
            } else if (!vc && token._default && this.options.usedefaults) {
                // if the token isn't optional and has a default value, use it if the value is finished
                formatted = concatChar(formatted, token._default, this.options, token);
            } else {
                // the string value don't match the given pattern
                valid = false;
                break;
            }
        }

        return {result: formatted, valid: valid};
    };

    StringMask.prototype.apply = function(value) {
        return this.process(value).result;
    };

    StringMask.prototype.validate = function(value) {
        return this.process(value).valid;
    };

    StringMask.process = function(value, pattern, options) {
        return new StringMask(pattern, options).process(value);
    };

    StringMask.apply = function(value, pattern, options) {
        return new StringMask(pattern, options).apply(value);
    };

    StringMask.validate = function(value, pattern, options) {
        return new StringMask(pattern, options).validate(value);
    };

    return StringMask;
}));


/***/ }),
/* 83 */
/*!*********************************!*\
  !*** ./src/directives/index.js ***!
  \*********************************/
/*! exports provided: default, translate, tModel, deepKey, blank, BackgroundImage, TextBind */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate__ = __webpack_require__(/*! ./translate */ 84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tModel__ = __webpack_require__(/*! ./tModel */ 85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deepKey__ = __webpack_require__(/*! ./deepKey */ 86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blank__ = __webpack_require__(/*! ./blank */ 87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BackgroundImage__ = __webpack_require__(/*! ./BackgroundImage */ 88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TextBind__ = __webpack_require__(/*! ./TextBind */ 89);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return __WEBPACK_IMPORTED_MODULE_0__translate__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tModel", function() { return __WEBPACK_IMPORTED_MODULE_1__tModel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepKey", function() { return __WEBPACK_IMPORTED_MODULE_2__deepKey__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "blank", function() { return __WEBPACK_IMPORTED_MODULE_3__blank__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundImage", function() { return __WEBPACK_IMPORTED_MODULE_4__BackgroundImage__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextBind", function() { return __WEBPACK_IMPORTED_MODULE_5__TextBind__["a"]; });







var directives = {
  translate: __WEBPACK_IMPORTED_MODULE_0__translate__["a" /* default */],
  tModel: __WEBPACK_IMPORTED_MODULE_1__tModel__["a" /* default */],
  deepKey: __WEBPACK_IMPORTED_MODULE_2__deepKey__["a" /* default */],
  blank: __WEBPACK_IMPORTED_MODULE_3__blank__["a" /* default */],
  BackgroundImage: __WEBPACK_IMPORTED_MODULE_4__BackgroundImage__["a" /* default */],
  TextBind: __WEBPACK_IMPORTED_MODULE_5__TextBind__["a" /* default */]
};
/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    for (var k in directives) {
      Vue.directive(k, directives[k]);
    }
  }
});



/***/ }),
/* 84 */
/*!*************************************!*\
  !*** ./src/directives/translate.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__ = __webpack_require__(/*! ../lib/i18n.js */ 1);


/* harmony default export */ __webpack_exports__["a"] = (function (el, binding) {
  if (binding.oldValue != binding.value) {
    el.innerText = __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__["a" /* default */].hum(binding.value);
  }
});

/***/ }),
/* 85 */
/*!**********************************!*\
  !*** ./src/directives/tModel.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__ = __webpack_require__(/*! ../lib/i18n.js */ 1);


/* harmony default export */ __webpack_exports__["a"] = (function (el, binding) {
  if (binding.oldValue != binding.value) {
    var key = 'activerecord.' + (2 == binding.value.split('.').length ? 'attributes.' : 'models.') + binding.value;
    el.innerText = __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__["a" /* default */].hum(key);
  }
});

/***/ }),
/* 86 */
/*!***********************************!*\
  !*** ./src/directives/deepKey.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils_js__ = __webpack_require__(/*! ../lib/utils.js */ 2);


/* harmony default export */ __webpack_exports__["a"] = (function (el, binding, vnode) {
  if (binding.oldValue != binding.value) {
    el.innerText = Object(__WEBPACK_IMPORTED_MODULE_0__lib_utils_js__["b" /* deepKey */])(binding.value, vnode.key);
  }
});

/***/ }),
/* 87 */
/*!*********************************!*\
  !*** ./src/directives/blank.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (el, binding, vnode) {
  if (binding.oldValue != binding.value) {
    el.onclick = function () {
      if (window.cordova && window.cordova.InAppBrowser) {
        window.cordova.InAppBrowser.open(binding.value, '_system', 'location=yes');
      } else {
        window.open(binding.value, '_blank', 'location=yes');
      }
    };
  }
});

/***/ }),
/* 88 */
/*!*******************************************!*\
  !*** ./src/directives/BackgroundImage.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (el, binding, vnode) {
  el.style.backgroundImage = 'url(' + binding.value + ')';
  el.style.backgroundSize = 'cover';
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundPosition = 'center bottom';
  el.style.display = 'block';
});

/***/ }),
/* 89 */
/*!************************************!*\
  !*** ./src/directives/TextBind.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (el, binding) {
  if (binding.oldValue != binding.value) {
    el.innerText = binding.value;
  }
});

/***/ }),
/* 90 */
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: default, i18n, masks, isDate, isRegExp, deepKey, deepClone, isObject, ucfirst */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(/*! ./i18n */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(/*! ./utils */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mask__ = __webpack_require__(/*! ./mask */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs__ = __webpack_require__(/*! ./dialogs */ 9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return __WEBPACK_IMPORTED_MODULE_0__i18n__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "masks", function() { return __WEBPACK_IMPORTED_MODULE_2__mask__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepKey", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ucfirst", function() { return __WEBPACK_IMPORTED_MODULE_1__utils__["f"]; });





/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(vue) {
    vue.prototype.$util = {
      i18n: __WEBPACK_IMPORTED_MODULE_0__i18n__["a" /* default */],
      masks: __WEBPACK_IMPORTED_MODULE_2__mask__,
      isDate: __WEBPACK_IMPORTED_MODULE_1__utils__["c" /* isDate */],
      deepKey: __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* deepKey */],
      deepClone: __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* deepClone */],
      isObject: __WEBPACK_IMPORTED_MODULE_1__utils__["d" /* isObject */],
      ucfirst: __WEBPACK_IMPORTED_MODULE_1__utils__["f" /* ucfirst */]
    };
    vue.prototype.$dialogs = __WEBPACK_IMPORTED_MODULE_3__dialogs__["a" /* default */];
    vue.dialogs = __WEBPACK_IMPORTED_MODULE_3__dialogs__["a" /* default */];
  }
});



/***/ }),
/* 91 */
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default, StoreHelpers, StorePlugins */
/*! exports used: StoreHelpers, StorePlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StorePlugins; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_base__ = __webpack_require__(/*! ./helpers/base */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_paginator__ = __webpack_require__(/*! ./helpers/paginator */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_crud__ = __webpack_require__(/*! ./helpers/crud */ 92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins_ResetState__ = __webpack_require__(/*! ./plugins/ResetState */ 93);





var StoreHelpers = {
  SUCCESS: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["c" /* SUCCESS */],
  LOADING: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["b" /* LOADING */],
  FAILURE: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["a" /* FAILURE */],
  base: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["d" /* default */],
  paginator: __WEBPACK_IMPORTED_MODULE_1__helpers_paginator__["a" /* default */],
  crud: __WEBPACK_IMPORTED_MODULE_2__helpers_crud__["a" /* default */]
};

var StorePlugins = {
  ResetState: __WEBPACK_IMPORTED_MODULE_3__plugins_ResetState__["a" /* default */]
};

/* unused harmony default export */ var _unused_webpack_default_export = (StoreHelpers);



/***/ }),
/* 92 */
/*!***********************************!*\
  !*** ./src/store/helpers/crud.js ***!
  \***********************************/
/*! exports provided: default, SUCCESS, LOADING, FAILURE */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__paginator__ = __webpack_require__(/*! ./paginator */ 23);
/* unused harmony reexport SUCCESS */
/* unused harmony reexport LOADING */
/* unused harmony reexport FAILURE */


function findIndex(list, id) {
  return list.findIndex(function (i) {
    return i.id == id;
  });
}

function create(obj, api) {
  var actions = {
    fetchCreate: function fetchCreate(_ref, params) {
      var commit = _ref.commit,
          dispatch = _ref.dispatch;

      return dispatch('fetchRequest', api.create(params)).then(function (response) {
        commit('addToList', response);
        return response;
      });
    },
    fetchUpdate: function fetchUpdate(_ref2, params) {
      var commit = _ref2.commit,
          dispatch = _ref2.dispatch;

      return dispatch('fetchRequest', api.update(params)).then(function (response) {
        commit('replaceItemToList', response);
        commit('setCurrent', response);
        return response;
      });
    },
    fetchRemove: function fetchRemove(_ref3, id) {
      var commit = _ref3.commit,
          dispatch = _ref3.dispatch;

      return dispatch('fetchRequest', api.remove(id)).then(function (response) {
        commit('removeFromList', id);
        return response;
      });
    }
  };

  var mutations = {
    removeFromList: function removeFromList(state, id) {
      var index = findIndex(state.list, id);
      if (index > -1) {
        return state.list.splice(index, 1);
      }
    },
    addToList: function addToList(state, item) {
      state.list.unshift(item);
    },
    replaceItemToList: function replaceItemToList(state, item) {
      var index = findIndex(state.list, item.id);
      if (index > -1) {
        state.list[index] = item;
      }
    }
  };

  obj = Object(__WEBPACK_IMPORTED_MODULE_0__paginator__["a" /* default */])(obj, api);

  obj.actions = Object.assign(actions, obj.actions);
  obj.mutations = Object.assign(mutations, obj.mutations);

  return obj;
}

/* harmony default export */ __webpack_exports__["a"] = (create);



/***/ }),
/* 93 */
/*!*****************************************!*\
  !*** ./src/store/plugins/ResetState.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils__ = __webpack_require__(/*! ../../lib/utils */ 2);


/* harmony default export */ __webpack_exports__["a"] = (function (store) {
  var initialState = Object(__WEBPACK_IMPORTED_MODULE_0__lib_utils__["a" /* deepClone */])(store.state);
  store.paliari = {
    resetState: function resetState() {
      store.replaceState(Object(__WEBPACK_IMPORTED_MODULE_0__lib_utils__["a" /* deepClone */])(initialState));
    }
  };
});

/***/ }),
/* 94 */
/*!**********************************!*\
  !*** ./src/mixins/VuexMapper.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(/*! vuex */ 95);


function VuexMapper(mapper) {
  var computed = this.$options.computed || {};
  this.$options.computed = Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])(mapper.namespace, mapper.states || []), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */])(mapper.namespace, mapper.getters || []), computed);

  var methods = this.$options.methods || {};
  this.$options.methods = Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapMutations */])(mapper.namespace, mapper.mutations || []), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapActions */])(mapper.namespace, mapper.actions || []), methods);
}

/* harmony default export */ __webpack_exports__["a"] = ({
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
});

/***/ }),
/* 95 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/*! exports used: mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapActions; });
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (false) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (false) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (false) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (false) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (false) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (false) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    false
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (false) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (false) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (false) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (false) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (false) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (false) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (false) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (false) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (false) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* unused harmony default export */ var _unused_webpack_default_export = (index_esm);


/***/ }),
/* 96 */
/*!*******************************!*\
  !*** ./src/lib/auth/index.js ***!
  \*******************************/
/*! exports provided: default, AuthManager, TokenManager, CookieManager */
/*! exports used: AuthManager, CookieManager, TokenManager, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AuthManager__ = __webpack_require__(/*! ./AuthManager */ 97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TokenManager__ = __webpack_require__(/*! ./TokenManager */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CookieManager__ = __webpack_require__(/*! ./CookieManager */ 98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__AuthManager__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__TokenManager__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__CookieManager__["a"]; });




/**
Object with urls e.g:
paths = {
  signIn: '/sign_in',
  signUp: '',
  signOut: '/sign_out',
  resetPassword: '/password'
  current: '/current'
}
*/
/* harmony default export */ __webpack_exports__["d"] = ({
  install: function install(Vue, _ref) {
    var api = _ref.api,
        TokenManager = _ref.TokenManager,
        basePath = _ref.basePath,
        _ref$paths = _ref.paths,
        paths = _ref$paths === undefined ? {} : _ref$paths;

    var auth = new __WEBPACK_IMPORTED_MODULE_0__AuthManager__["a" /* default */]({ api: api, TokenManager: TokenManager, basePath: basePath, paths: paths });
    Vue.prototype.$auth = auth;
    Vue.auth = auth;
  }
});



/***/ }),
/* 97 */
/*!*************************************!*\
  !*** ./src/lib/auth/AuthManager.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PATHS = {
  signIn: '/sign_in',
  signUp: '',
  signOut: '/sign_out',
  confirmation: '/confirmation',
  resetPassword: '/password',
  current: '/current'
};

var AuthManager = function () {
  function AuthManager(_ref) {
    var api = _ref.api,
        TokenManager = _ref.TokenManager,
        _ref$basePath = _ref.basePath,
        basePath = _ref$basePath === undefined ? '/auth' : _ref$basePath,
        _ref$paths = _ref.paths,
        paths = _ref$paths === undefined ? {} : _ref$paths;

    _classCallCheck(this, AuthManager);

    this.api = api;
    this.TokenManager = TokenManager;
    this.paths = {};
    for (var k in PATHS) {
      this.paths[k] = basePath + (paths[k] || PATHS[k]);
    }
  }

  _createClass(AuthManager, [{
    key: 'signIn',
    value: function signIn(params) {
      var _this = this;

      var promise = this.api.post(this.paths.signIn, params);
      promise.then(function (response) {
        _this.TokenManager.setToken(response.headers);
      });
      return promise;
    }
  }, {
    key: 'signUp',
    value: function signUp(params) {
      return this.api.post(this.paths.signUp, params);
    }
  }, {
    key: 'resetPasswordRequest',
    value: function resetPasswordRequest(params) {
      return this.api.post(this.paths.resetPassword, params);
    }
  }, {
    key: 'resetPasswordUpdate',
    value: function resetPasswordUpdate(params) {
      return this.api.put(this.paths.resetPassword, params);
    }
  }, {
    key: 'signOut',
    value: function signOut(params) {
      var _this2 = this;

      var promise = this.api.delete(this.paths.signOut, params);
      promise.then(function () {
        _this2._token = null;
        _this2.TokenManager.removeToken();
      });
      return promise;
    }
  }, {
    key: 'getToken',
    value: function getToken() {
      if (!this._token) {
        this._token = this.TokenManager.getToken();
      }
      return this._token;
    }
  }, {
    key: 'current',
    value: function current() {
      return this.api.get(this.paths.current);
    }
  }, {
    key: 'confirmationToken',
    value: function confirmationToken(confirmation_token) {
      return this.api.get(this.paths.confirmation + '/' + confirmation_token);
    }
  }]);

  return AuthManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (AuthManager);

/***/ }),
/* 98 */
/*!***************************************!*\
  !*** ./src/lib/auth/CookieManager.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TokenManager__ = __webpack_require__(/*! ./TokenManager */ 24);


/* harmony default export */ __webpack_exports__["a"] = ({
  setToken: function setToken(headers) {
    document.cookie = __WEBPACK_IMPORTED_MODULE_0__TokenManager__["a" /* STORAGE_KEY */] + '=' + JSON.stringify(Object(__WEBPACK_IMPORTED_MODULE_0__TokenManager__["c" /* extractHeaders */])(headers));
  },
  getToken: function getToken() {
    var reg = new RegExp('(?:(?:^|.*;\s*)' + __WEBPACK_IMPORTED_MODULE_0__TokenManager__["a" /* STORAGE_KEY */] + '\s*\=\s*([^;]*).*$)|^.*$');
    var value = document.cookie.replace(reg, "$1");

    return value ? JSON.parse(value) : '';
  },
  removeToken: function removeToken() {
    document.cookie = __WEBPACK_IMPORTED_MODULE_0__TokenManager__["a" /* STORAGE_KEY */] + '=';
  }
});

/***/ })
/******/ ]);
});
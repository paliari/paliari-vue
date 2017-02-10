(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fecha"), require("string-mask"), require("vuex"));
	else if(typeof define === 'function' && define.amd)
		define("PaliariVue", ["fecha", "string-mask", "vuex"], factory);
	else if(typeof exports === 'object')
		exports["PaliariVue"] = factory(require("fecha"), require("string-mask"), require("vuex"));
	else
		root["PaliariVue"] = factory(root["fecha"], root["string-mask"], root["vuex"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_52__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__) {
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
    return this.replace(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* deepKey */])(locale, key), replaces);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepKey; });
function deepKey(obj, key) {
  if (obj && key) {
    for (var k in String(key).split('.')) {
      if (!obj) {
        return obj;
      }
      obj = obj[k];
    }
  }
  return obj;
}

/* unused harmony default export */ var _unused_webpack_default_export = deepKey;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Back_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Back_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Back_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_SideMenu_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_SideMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__menu_SideMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_SideMenuItems_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_SideMenuItems_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__menu_SideMenuItems_vue__);
/* unused harmony reexport Back */
/* unused harmony reexport HeaderBar */
/* unused harmony reexport Modal */
/* unused harmony reexport Checkbox */
/* unused harmony reexport IosSwitch */
/* unused harmony reexport Radio */
/* unused harmony reexport SideMenu */
/* unused harmony reexport SideMenuItems */









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

/* harmony default export */ __webpack_exports__["a"] = {
  install: function install(Vue) {
    for (var k in components) {
      Vue.component(k, components[k]);
    }
  }
};



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tModel__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deepKey__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blank__ = __webpack_require__(8);
/* unused harmony reexport translate */
/* unused harmony reexport tModel */
/* unused harmony reexport deepKey */
/* unused harmony reexport blank */





var directives = {
  translate: __WEBPACK_IMPORTED_MODULE_0__translate__["a" /* default */],
  tModel: __WEBPACK_IMPORTED_MODULE_1__tModel__["a" /* default */],
  deepKey: __WEBPACK_IMPORTED_MODULE_2__deepKey__["a" /* default */],
  blank: __WEBPACK_IMPORTED_MODULE_3__blank__["a" /* default */]
};
/* harmony default export */ __webpack_exports__["a"] = {
  install: function install(Vue) {
    for (var k in directives) {
      Vue.directive(k, directives[k]);
    }
  }
};



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__truncate__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deepKey__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tModel__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_mask__ = __webpack_require__(20);
/* unused harmony reexport mask */
/* unused harmony reexport masks */
/* unused harmony reexport truncate */
/* unused harmony reexport currency */
/* unused harmony reexport date */
/* unused harmony reexport deepKey */
/* unused harmony reexport translate */
/* unused harmony reexport enums */
/* unused harmony reexport tModel */









var filters = {
  mask: __WEBPACK_IMPORTED_MODULE_7__lib_mask__["default"],
  truncate: __WEBPACK_IMPORTED_MODULE_0__truncate__["a" /* default */],
  currency: __WEBPACK_IMPORTED_MODULE_1__currency__["a" /* default */],
  date: __WEBPACK_IMPORTED_MODULE_2__date__["a" /* default */],
  deepKey: __WEBPACK_IMPORTED_MODULE_3__deepKey__["a" /* default */],
  translate: __WEBPACK_IMPORTED_MODULE_4__translate__["a" /* default */],
  enums: __WEBPACK_IMPORTED_MODULE_5__enums__["a" /* default */],
  tModel: __WEBPACK_IMPORTED_MODULE_6__tModel__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = {
  install: function install(Vue) {
    for (var f in Object.assign(filters, __WEBPACK_IMPORTED_MODULE_7__lib_mask__)) {
      Vue.filter(f, filters[f]);
    }
  }
};



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);


function VuexMapper(mapper) {
  var computed = this.$options.computed || {};
  computed = Object.assign(computed, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])(mapper.namespace, mapper.states || []), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(mapper.namespace, mapper.getters || []));
  this.$options.computed = computed;

  var methods = this.$options.methods || {};
  methods = Object.assign(methods, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapMutations"])(mapper.namespace, mapper.mutations || []), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])(mapper.namespace, mapper.actions || []));
  this.$options.methods = methods;
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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils_js__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = function (el, binding, vnode) {
  if (binding.oldValue != binding.value) {
    el.innerText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_utils_js__["a" /* deepKey */])(binding.value, vnode.key);
  }
};

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (el, binding) {
  if (binding.oldValue != binding.value) {
    el.innerText = __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__["b" /* default */].hum(binding.value);
  }
};

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_fecha__ = __webpack_require__(19);


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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__lib_utils__["a" /* deepKey */];

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (key, replaces) {
  key = 'activerecord.' + (2 == key.split('.').length ? 'attributes.' : 'models.') + key;
  return __WEBPACK_IMPORTED_MODULE_0__lib_i18n__["b" /* default */].hum(key, replaces);
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (key, replaces) {
  return __WEBPACK_IMPORTED_MODULE_0__lib_i18n__["b" /* default */].hum(key, replaces);
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (text) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

  return text.substr(0, length - 3) + '...';
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fecha__ = __webpack_require__(52);
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_string_mask__ = __webpack_require__(53);
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Back = __webpack_require__(3);

var _Back2 = _interopRequireDefault(_Back);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { Back: _Back2.default },
  computed: {
    title: function title() {
      return this.$route.meta.title;
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
/* 23 */
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
//
//
//
//
//
//
//

exports.default = {
  props: {
    ok: {
      type: String,
      required: false,
      default: 'Ok'
    },
    cancel: {
      type: String,
      required: false,
      default: 'Cancel'
    },
    confirm: {
      type: Boolean,
      default: false
    },
    prompt: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      promptText: null
    };
  },

  methods: {
    reject: function reject(outside) {
      if (outside && this.confirm) return;
      this.$emit('close');
      this.$emit('cancel');
    },
    resolve: function resolve() {
      this.$emit('close');
      this.$emit('success', this.promptText);
    }
  }
};

/***/ }),
/* 24 */
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
  props: ['value', 'label', 'name', 'disabled'],
  computed: {
    id: function id() {
      return 'cb-' + this.name + this._uid;
    }
  }
};

/***/ }),
/* 25 */
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
/* 26 */
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
  props: ['value', 'label', 'name', 'disabled', 'checked'],
  computed: {
    id: function id() {
      return 'radio-' + this.name + this._uid;
    }
  }
};

/***/ }),
/* 27 */
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
    },
    hide: function hide() {
      this.opened = false;
    }
  }
};

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(48)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(44)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(50)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(47)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(49)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
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
/* 37 */
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
/* 38 */
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
  }, [_vm._v(_vm._s(_vm.label))])])
},staticRenderFns: []}

/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('transition', {
    staticClass: "modal",
    attrs: {
      "name": "modal"
    }
  }, [_c('div', {
    staticClass: "modal-bg"
  }, [_c('div', {
    staticClass: "modal-wrapper",
    on: {
      "click": function($event) {
        _vm.reject(true)
      }
    }
  }, [_c('div', {
    staticClass: "modal-container",
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_vm._t("header", [_vm._v("Atenção")])], 2), _c('div', {
    staticClass: "modal-body"
  }, [_vm._t("default"), (_vm.prompt) ? _c('div', {
    staticClass: "pure-form"
  }, [_c('div', {
    staticClass: "pure-g"
  }, [('password' == _vm.prompt) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.promptText),
      expression: "promptText"
    }],
    staticClass: "pure-u-1",
    attrs: {
      "type": "password"
    },
    domProps: {
      "value": _vm._s(_vm.promptText)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.promptText = $event.target.value
      }
    }
  }) : (_vm.prompt) ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.promptText),
      expression: "promptText"
    }],
    staticClass: "pure-u-1",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm._s(_vm.promptText)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.promptText = $event.target.value
      }
    }
  }) : _vm._e()])]) : _vm._e()], 2), _c('div', {
    staticClass: "modal-footer"
  }, [_vm._t("footer", [_c('div', {
    staticClass: "default-footer"
  }, [(_vm.confirm) ? _c('button', {
    staticClass: "pure-button button-error",
    on: {
      "click": function($event) {
        _vm.reject(false)
      }
    }
  }, [_vm._v(_vm._s(_vm.cancel))]) : _vm._e(), _c('button', {
    staticClass: "pure-button pure-button-primary",
    on: {
      "click": _vm.resolve
    }
  }, [_vm._v(_vm._s(_vm.ok))])])])], 2)])])])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 41 */
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
/* 42 */
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
  }, [_vm._v(_vm._s(_vm.label))])])
},staticRenderFns: []}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "header-bar"
  }, [_c('nav', [_c('div', {
    staticClass: "header-bar-content"
  }, [_c('div', {
    staticClass: "pure-g"
  }, [_c('div', {
    staticClass: "pure-u-6-24"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('back'), _vm._t("left")], 2)]), _c('div', {
    staticClass: "pure-u-14-24"
  }, [_c('div', {
    staticClass: "title ellipsis"
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: "pure-u-4-24"
  }, [_c('div', {
    staticClass: "right"
  }, [_vm._t("right")], 2)])])])]), _c('div', {
    staticClass: "header-block"
  })])])
},staticRenderFns: []}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filters_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_i18n__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_VuexMapper__ = __webpack_require__(7);







/* harmony default export */ __webpack_exports__["default"] = {
  install: function install(Vue, options) {
    if (options.locales) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_i18n__["a" /* setLocale */])(options.locales);
    }
    Vue.use(__WEBPACK_IMPORTED_MODULE_0__components_index__["a" /* default */]);
    Vue.use(__WEBPACK_IMPORTED_MODULE_1__filters_index__["a" /* default */]);
    Vue.use(__WEBPACK_IMPORTED_MODULE_2__directives_index__["a" /* default */]);
    if (options.vuex) {
      Vue.use(__WEBPACK_IMPORTED_MODULE_4__lib_VuexMapper__["a" /* default */], options.vuex);
    }
  }
};

/***/ })
],[55]);
});
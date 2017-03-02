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
/******/ ([]);webpackJsonpPaliariVue([1,2],{

/***/ 0:
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


/***/ }),

/***/ 61:
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

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 86:
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

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.0.5
 */

(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

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
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

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
    var r = require;
    var vertx = __webpack_require__(92);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
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
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
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
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

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
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
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

function _reject(promise, reason) {
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

  var child = undefined,
      callback = undefined,
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

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

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
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
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

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

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
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
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
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

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
  then: then,

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
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

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

    local.Promise = Promise;
}

// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61), __webpack_require__(86)))

/***/ })

});(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fecha"), require("string-mask"), require("vue"), require("vuex"));
	else if(typeof define === 'function' && define.amd)
		define("PaliariVue", ["fecha", "string-mask", "vue", "vuex"], factory);
	else if(typeof exports === 'object')
		exports["PaliariVue"] = factory(require("fecha"), require("string-mask"), require("vue"), require("vuex"));
	else
		root["PaliariVue"] = factory(root["fecha"], root["string-mask"], root["vue"], root["vuex"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_88__, __WEBPACK_EXTERNAL_MODULE_89__, __WEBPACK_EXTERNAL_MODULE_90__, __WEBPACK_EXTERNAL_MODULE_91__) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(90);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STORAGE_KEY; });
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

      ret[key] = headers[key];
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

/* harmony default export */ __webpack_exports__["a"] = {
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
};



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_string_mask__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_string_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_string_mask__);
/* harmony export (immutable) */ __webpack_exports__["cpf"] = cpf;
/* harmony export (immutable) */ __webpack_exports__["cnpj"] = cnpj;
/* harmony export (immutable) */ __webpack_exports__["cpfCnpj"] = cpfCnpj;
/* harmony export (immutable) */ __webpack_exports__["phone"] = phone;
/* harmony export (immutable) */ __webpack_exports__["cep"] = cep;
/* harmony export (immutable) */ __webpack_exports__["placa"] = placa;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formats", function() { return formats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });


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

/* harmony default export */ __webpack_exports__["default"] = formatter;

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
/* 5 */
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

/* harmony default export */ __webpack_exports__["d"] = create;



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(51)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(75),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(50)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Back_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Back_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Back_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_MaskInput_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_MaskInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__forms_MaskInput_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_InputContainer_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_InputContainer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__forms_InputContainer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_SideMenu_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_SideMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__menu_SideMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_SideMenuItems_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_SideMenuItems_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__menu_SideMenuItems_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__load_Spinner_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__load_Spinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__load_Spinner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__load_LoadManager_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__load_LoadManager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__load_LoadManager_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__load_ListManager_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__load_ListManager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__load_ListManager_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return __WEBPACK_IMPORTED_MODULE_0__Back_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "HeaderBar", function() { return __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "IosSwitch", function() { return __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "MaskInput", function() { return __WEBPACK_IMPORTED_MODULE_6__forms_MaskInput_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "InputContainer", function() { return __WEBPACK_IMPORTED_MODULE_7__forms_InputContainer_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "SideMenu", function() { return __WEBPACK_IMPORTED_MODULE_8__menu_SideMenu_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "SideMenuItems", function() { return __WEBPACK_IMPORTED_MODULE_9__menu_SideMenuItems_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return __WEBPACK_IMPORTED_MODULE_10__load_Spinner_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "LoadManager", function() { return __WEBPACK_IMPORTED_MODULE_11__load_LoadManager_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ListManager", function() { return __WEBPACK_IMPORTED_MODULE_12__load_ListManager_vue___default.a; });














var components = {
  Back: __WEBPACK_IMPORTED_MODULE_0__Back_vue___default.a,
  HeaderBar: __WEBPACK_IMPORTED_MODULE_1__HeaderBar_vue___default.a,
  Modal: __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default.a,
  Checkbox: __WEBPACK_IMPORTED_MODULE_3__forms_Checkbox_vue___default.a,
  IosSwitch: __WEBPACK_IMPORTED_MODULE_4__forms_IosSwitch_vue___default.a,
  Radio: __WEBPACK_IMPORTED_MODULE_5__forms_Radio_vue___default.a,
  MaskInput: __WEBPACK_IMPORTED_MODULE_6__forms_MaskInput_vue___default.a,
  InputContainer: __WEBPACK_IMPORTED_MODULE_7__forms_InputContainer_vue___default.a,
  SideMenu: __WEBPACK_IMPORTED_MODULE_8__menu_SideMenu_vue___default.a,
  SideMenuItems: __WEBPACK_IMPORTED_MODULE_9__menu_SideMenuItems_vue___default.a,
  Spinner: __WEBPACK_IMPORTED_MODULE_10__load_Spinner_vue___default.a,
  LoadManager: __WEBPACK_IMPORTED_MODULE_11__load_LoadManager_vue___default.a,
  ListManager: __WEBPACK_IMPORTED_MODULE_12__load_ListManager_vue___default.a
};

/* harmony default export */ __webpack_exports__["default"] = {
  install: function install(Vue) {
    for (var k in components) {
      Vue.component(k, components[k]);
    }
  }
};



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__translate__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tModel__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deepKey__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blank__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BackgroundImage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TextBind__ = __webpack_require__(17);
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
/* harmony default export */ __webpack_exports__["default"] = {
  install: function install(Vue) {
    for (var k in directives) {
      Vue.directive(k, directives[k]);
    }
  }
};



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__truncate__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deepKey__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translate__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tModel__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_mask__ = __webpack_require__(4);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AuthManager__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TokenManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CookieManager__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__AuthManager__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__TokenManager__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__CookieManager__["a"]; });




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
/* harmony default export */ __webpack_exports__["a"] = {
  install: function install(Vue, _ref) {
    var api = _ref.api,
        TokenManager = _ref.TokenManager,
        basePath = _ref.basePath,
        _ref$paths = _ref.paths,
        paths = _ref$paths === undefined ? {} : _ref$paths;

    var auth = new __WEBPACK_IMPORTED_MODULE_0__AuthManager__["a" /* default */]({ api: api, TokenManager: TokenManager, basePath: basePath, paths: paths });
    api.interceptors.request.use(function (config) {
      config.headers = TokenManager.getToken();
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    Vue.prototype.$auth = auth;
    Vue.auth = auth;
  }
};



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mask__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs__ = __webpack_require__(31);
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
    vue.dialogs = __WEBPACK_IMPORTED_MODULE_3__dialogs__["a" /* default */];
  }
};



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(91);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(87).polyfill();

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_base__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_paginator__ = __webpack_require__(35);



var StoreHelpers = {
  SUCCESS: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["a" /* SUCCESS */],
  LOADING: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["b" /* LOADING */],
  FAILURE: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["c" /* FAILURE */],
  base: __WEBPACK_IMPORTED_MODULE_0__helpers_base__["d" /* default */],
  paginator: __WEBPACK_IMPORTED_MODULE_1__helpers_paginator__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = StoreHelpers;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (el, binding, vnode) {
  el.style.backgroundImage = 'url(' + binding.value + ')';
  el.style.backgroundSize = 'cover';
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundPosition = 'center bottom';
  el.style.display = 'block';
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (el, binding) {
  if (binding.oldValue != binding.value) {
    el.innerText = binding.value;
  }
};

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils_js__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = function (el, binding, vnode) {
  if (binding.oldValue != binding.value) {
    el.innerText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_utils_js__["b" /* deepKey */])(binding.value, vnode.key);
  }
};

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (el, binding) {
  if (binding.oldValue != binding.value) {
    el.innerText = __WEBPACK_IMPORTED_MODULE_0__lib_i18n_js__["b" /* default */].hum(binding.value);
  }
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (number) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'R$';

  try {
    return prefix + parseFloat(number).toFixed(2).replace(/\./g, ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
  } catch (e) {
    return number;
  }
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_fecha__ = __webpack_require__(32);


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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_utils__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__lib_utils__["b" /* deepKey */];

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (key, replaces) {
  key = 'activerecord.' + (2 == key.split('.').length ? 'attributes.' : 'models.') + key;
  return __WEBPACK_IMPORTED_MODULE_0__lib_i18n__["b" /* default */].hum(key, replaces);
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_i18n__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (key, replaces) {
  return __WEBPACK_IMPORTED_MODULE_0__lib_i18n__["b" /* default */].hum(key, replaces);
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (text) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

  return text.substr(0, length - 3) + '...';
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PATHS = {
  signIn: '/sign_in',
  signUp: '',
  signOut: '/sign_out',
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
    key: 'resetPassword',
    value: function resetPassword(params) {
      return this.api.post(this.paths.resetPassword, params);
    }
  }, {
    key: 'signOut',
    value: function signOut(params) {
      var _this2 = this;

      var promise = this.api.delete(this.paths.signOut, params);
      promise.then(function () {
        _this2.TokenManager.removeToken();
      });
      return promise;
    }
  }, {
    key: 'getToken',
    value: function getToken() {
      return this.TokenManager.getToken();
    }
  }, {
    key: 'current',
    value: function current() {
      return this.api.get(this.paths.current);
    }
  }]);

  return AuthManager;
}();

/* harmony default export */ __webpack_exports__["a"] = AuthManager;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TokenManager__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = {
  setToken: function setToken(headers) {
    document.cookie = __WEBPACK_IMPORTED_MODULE_0__TokenManager__["b" /* STORAGE_KEY */] + '=' + JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__TokenManager__["c" /* extractHeaders */])(headers));
  },
  getToken: function getToken() {
    var reg = new RegExp('(?:(?:^|.*;\s*)' + __WEBPACK_IMPORTED_MODULE_0__TokenManager__["b" /* STORAGE_KEY */] + '\s*\=\s*([^;]*).*$)|^.*$');
    var value = document.cookie.replace(reg, "$1");

    return value ? JSON.parse(value) : '';
  },
  removeToken: function removeToken() {
    document.cookie = __WEBPACK_IMPORTED_MODULE_0__TokenManager__["b" /* STORAGE_KEY */] + '=';
  }
};

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fecha__ = __webpack_require__(88);
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
/* 33 */
/***/ (function(module, exports) {

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(5);
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
          dispatch = _ref.dispatch,
          getters = _ref.getters;

      commit('setList', []);
      dispatch('fetchRequest', api.list(getters.params)).then(function (response) {
        commit('setList', response.data.rows);
        commit('setPage', response.data.page);
        commit('setPages', response.data.pages);
      });
    },
    fetchOne: function fetchOne(_ref2, id) {
      var commit = _ref2.commit,
          dispatch = _ref2.dispatch;

      commit('setCurrent', null);
      dispatch('fetchRequest', api.one(id)).then(function (response) {
        commit('setCurrent', response.data);
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
          dispatch = _ref4.dispatch,
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Back = __webpack_require__(6);

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
/* 38 */
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
      default: 'Cancelar'
    },
    okLabel: {
      type: String,
      default: 'OK'
    },
    permitSuccess: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    reject: function reject() {
      this.$emit('close');
      this.$emit('cancel');
    },
    resolve: function resolve() {
      if (!this.permitSuccess) {
        this.$dialogs.alert('Preencha os campos corretamente para continuar');
        return;
      }
      this.$emit('close');
      this.$emit('success');
    }
  }
};

/***/ }),
/* 39 */
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
};

/***/ }),
/* 40 */
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
    label: String,
    icon: String
  }
};

/***/ }),
/* 41 */
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
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//

exports.default = {
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
};

/***/ }),
/* 43 */
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
};

/***/ }),
/* 44 */
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
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Spinner = __webpack_require__(7);

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { Spinner: _Spinner2.default },
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

/***/ }),
/* 46 */
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
};

/***/ }),
/* 47 */
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
/* 48 */
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

// removed by extract-text-webpack-plugin

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
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(60)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(81),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(52)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(76),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(82),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(49)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(73),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(80),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(84),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  "data-v-2654790a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(54)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(78),
  /* scopeId */
  "data-v-313667c2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(79),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ios-switch"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    attrs: {
      "type": "checkbox",
      "id": _vm.id,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "true-value": _vm.trueValue,
      "false-value": _vm.falseValue
    },
    domProps: {
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : _vm._q(_vm.model, _vm.trueValue)
    },
    on: {
      "click": function($event) {
        var $$a = _vm.model,
          $$el = $event.target,
          $$c = $$el.checked ? (_vm.trueValue) : (_vm.falseValue);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.model = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.model = $$c
        }
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
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "v-spinner"
  }, [_c('div', {
    staticClass: "v-pulse v-pulse1",
    style: ([_vm.spinnerStyle, _vm.spinnerDelay1])
  }), _c('div', {
    staticClass: "v-pulse v-pulse2",
    style: ([_vm.spinnerStyle, _vm.spinnerDelay2])
  }), _c('div', {
    staticClass: "v-pulse v-pulse3",
    style: ([_vm.spinnerStyle, _vm.spinnerDelay3])
  })])
},staticRenderFns: []}

/***/ }),
/* 75 */
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
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "checkbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    attrs: {
      "type": "checkbox",
      "id": _vm.id,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "true-value": _vm.trueValue,
      "false-value": _vm.falseValue
    },
    domProps: {
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : _vm._q(_vm.model, _vm.trueValue)
    },
    on: {
      "click": function($event) {
        var $$a = _vm.model,
          $$el = $event.target,
          $$c = $$el.checked ? (_vm.trueValue) : (_vm.falseValue);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.model = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.model = $$c
        }
      }
    }
  }), _c('label', {
    attrs: {
      "for": _vm.id
    }
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2)])
},staticRenderFns: []}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.recordsFound) ? _vm._t("default") : _c('div', {
    staticClass: "gray-lighter table"
  }, [_c('div', {
    staticClass: "table-cell"
  }, [_c('i', {
    staticClass: "fa fa-4x fa-list-ul"
  }), _c('h3', [_vm._v("Nenhum registro encontrado")])])])], 2)
},staticRenderFns: []}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.success) ? _vm._t("default") : _c('div', {
    staticClass: "gray-lighter table"
  }, [_c('div', {
    staticClass: "table-cell"
  }, [_c('spinner', {
    attrs: {
      "loading": _vm.loading
    }
  }), (_vm.failure) ? _c('div', [_c('i', {
    staticClass: "fa fa-4x fa-exclamation-circle"
  }), _c('h3', [_vm._v("Falha ao carregar dados")])]) : _vm._e()], 1)])], 2)
},staticRenderFns: []}

/***/ }),
/* 79 */
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
/* 80 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    attrs: {
      "maxlength": _vm.maskSize
    },
    domProps: {
      "value": _vm._s(_vm.model)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.model = $event.target.value
      }
    }
  })
},staticRenderFns: []}

/***/ }),
/* 81 */
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
    class: {
      disabled: !_vm.permitSuccess
    },
    on: {
      "click": _vm.resolve
    }
  }, [_vm._v(_vm._s(_vm.okLabel))])])])], 1), _c('div', {
    staticClass: "modal-body"
  }, [_vm._t("default")], 2)])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input-container",
    class: {
      'has-icon': _vm.icon, 'has-label': _vm.label
    }
  }, [(_vm.label) ? _c('label', [_vm._v(_vm._s(_vm.label))]) : _vm._e(), (_vm.icon) ? _c('i', {
    staticClass: "icon fa fa-lg",
    class: _vm.icon
  }) : _vm._e(), _vm._t("default"), _c('div', {
    staticClass: "error-message"
  }, [_vm._t("error-message", [_vm._v("inválido.")])], 2)], 2)
},staticRenderFns: []}

/***/ }),
/* 83 */
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
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "radio"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    attrs: {
      "id": _vm.id,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "type": "radio"
    },
    domProps: {
      "value": _vm.val,
      "checked": _vm._q(_vm.model, _vm.val)
    },
    on: {
      "click": function($event) {
        _vm.model = _vm.val
      }
    }
  }), _c('label', {
    attrs: {
      "for": _vm.id
    }
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2)])
},staticRenderFns: []}

/***/ }),
/* 85 */
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
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_89__;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_90__;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_91__;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filters_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_i18n__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_index__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_VuexMapper__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_auth__ = __webpack_require__(11);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "components", function() { return __WEBPACK_IMPORTED_MODULE_0__components_index__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return __WEBPACK_IMPORTED_MODULE_1__filters_index__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "directives", function() { return __WEBPACK_IMPORTED_MODULE_2__directives_index__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_4__lib_index__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StoreHelpers", function() { return __WEBPACK_IMPORTED_MODULE_5__store_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_auth__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AuthManager", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_auth__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TokenManager", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_auth__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return __WEBPACK_IMPORTED_MODULE_7__lib_auth__["d"]; });
__webpack_require__(14);












/* harmony default export */ __webpack_exports__["default"] = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (options.locales) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_i18n__["a" /* setLocale */])(options.locales);
    }
    Vue.use(__WEBPACK_IMPORTED_MODULE_0__components_index__["default"]);
    Vue.use(__WEBPACK_IMPORTED_MODULE_1__filters_index__["default"]);
    Vue.use(__WEBPACK_IMPORTED_MODULE_2__directives_index__["default"]);
    Vue.use(__WEBPACK_IMPORTED_MODULE_4__lib_index__["default"]);
    if (options.Vuex) {
      Vue.use(__WEBPACK_IMPORTED_MODULE_6__mixins_VuexMapper__["a" /* default */], options.Vuex);
    }
  }
};



/***/ })
],[93]);
});
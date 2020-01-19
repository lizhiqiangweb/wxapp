(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [
'vibrate'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = {
    multipleSlots: true,
    addGlobalClass: true };


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin']['options']) {
      Object.assign(options, vueOptions['mp-weixin']['options']);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 12:
/*!********************************************************************************************************************!*\
  !*** D:/Git/wxapp/mini-village/js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
!function (t, e) { true ? module.exports = e() : undefined;}(void 0, function () {return function (t) {function e(o) {if (n[o]) return n[o].exports;var i = n[o] = { exports: {}, id: o, loaded: !1 };return t[o].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;}var n = {};return e.m = t, e.c = n, e.p = "", e(0);}([function (t, e, n) {t.exports = n(18);}, function (t, e, n) {(function (o) {function i() {return "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;}function s() {var t = arguments,n = this.useColors;if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return t;var o = "color: " + this.color;t = [t[0], o, "color: inherit"].concat(Array.prototype.slice.call(t, 1));var i = 0,s = 0;return t[0].replace(/%[a-z%]/g, function (t) {"%%" !== t && (i++, "%c" === t && (s = i));}), t.splice(s, 0, o), t;}function r() {return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);}function a(t) {try {null == t ? e.storage.removeItem("debug") : e.storage.debug = t;} catch (t) {}}function c() {try {return e.storage.debug;} catch (t) {}if ("undefined" != typeof o && "env" in o) return o.env.DEBUG;}function p() {try {return window.localStorage;} catch (t) {}}e = t.exports = n(34), e.log = r, e.formatArgs = s, e.save = a, e.load = c, e.useColors = i, e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : p(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function (t) {try {return JSON.stringify(t);} catch (t) {return "[UnexpectedJSONParseError]: " + t.message;}}, e.enable(c());}).call(e, n(38));}, function (t, e, n) {t.exports = n(25);}, function (t, e, n) {function o(t) {if (t) return i(t);}function i(t) {for (var e in o.prototype) {t[e] = o.prototype[e];}return t;}t.exports = o, o.prototype.on = o.prototype.addEventListener = function (t, e) {return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;}, o.prototype.once = function (t, e) {function n() {this.off(t, n), e.apply(this, arguments);}return n.fn = e, this.on(t, n), this;}, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function (t, e) {if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var n = this._callbacks["$" + t];if (!n) return this;if (1 == arguments.length) return delete this._callbacks["$" + t], this;for (var o, i = 0; i < n.length; i++) {if (o = n[i], o === e || o.fn === e) {n.splice(i, 1);break;}}return this;}, o.prototype.emit = function (t) {this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),n = this._callbacks["$" + t];if (n) {n = n.slice(0);for (var o = 0, i = n.length; o < i; ++o) {n[o].apply(this, e);}}return this;}, o.prototype.listeners = function (t) {return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];}, o.prototype.hasListeners = function (t) {return !!this.listeners(t).length;};}, function (t, e) {var n = { SDK_VERSION: "2.6.0", WSS_ADDRESS: "wss://ws.im.jiguang.cn", UPLOAD_FILE: "https://sdk.im.jiguang.cn/resource", ALLOW_MSG_TYPE: ["text", "image", "file", "location", "custom"], LOGIN_OUT_EVENT: [1, 2], FROM_PLATFORM: "x", ACK_TIMEOUT: 5e3, RESP_TIMEOUT: 3e4, RETRY_TIMES: 5, SYNC_INTERVAL: 15e4, RECEIPT_REPORT_INTERVAL: 2e3, RECEIPT_REPORT_MAX_SIZE: 50, EVENT_KEY: "eve-k-", CONVERSATION_KEY: "conversations-", SYNC_TYPE_OPEN: 1, SYNC_TYPE_CLOSE: 0, FRIEND_INVITE: 1, FRIEND_INVITED: 2, PLAT_CHANNEL: "w", EVENTS: { ACK: "ack", INIT: "c_init", LOGIN: "login", REGISTER: "register", GET_USER_INFO: "get_across_user_info", GET_ACROSS_USER_INFO: "get_across_user_info", S_SINGLE_TEXT: "s_across_single_text", S_SINGLE_TEXT_: "s_single_text", MSG_SYNC: "msg_sync", MSG_RECV: "msg_recv", MSG_RECV_V2: "msg_recv_v2", SEND_GROUP_MSG: "send_group_msg", CREATE_GROUP: "create_group", GET_GROUPS_LIST: "get_groups_list", GET_GROUP_INFO: "get_group_info", ADD_GROUP_MEMBER: "add_group_member", ADD_ACROSS_GROUP_MEMBER: "add_across_group_member", DEL_GROUP_MEMBER: "del_group_member", DEL_ACROSS_GROUP_MEMBER: "del_across_group_member", GET_GROUP_MEMBERS: "get_group_members", UPDATE_GROUP_INFO: "update_group_info", EXIT_GROUP: "exit_group", EVENT_NOTIFICATION: "event_notification", GET_CONVERSATIONS: "get_conversations", GET_UPLOAD_TOKEN: "get_upload_token", NO_DISTURB: "no_disturb", ADD_MSG_NO_DISTURB_SINGLE: "add_msg_no_disturb_single", DELETE_MSG_NO_DISTURB_SINGLE: "delete_msg_no_disturb_single", ADD_MSG_NO_DISTURB_GROUP: "add_msg_no_disturb_group", DELETE_MSG_NO_DISTURB_GROUP: "delete_msg_no_disturb_group", ADD_MSG_NO_DISTURB_GLOBAL: "add_msg_no_disturb_global", DELETE_MSG_NO_DISTURB_GLOBAL: "delete_msg_no_disturb_global", DISCONNECT: "disconnect", GET_BLACK_LIST: "get_black_list", ADD_BLACK_LIST: "add_black_list", DEL_BLACK_LIST: "del_black_list", UPDATE_SELF_INFO: "update_user_inf", UPDATE_SELF_PWD: "update_user_pwd", ADD_MSG_SHIELD_GROUP: "add_msg_shield_group", DEL_MSG_SHIELD_GROUP: "del_msg_shield_group", ADD_FRIEND: "add_friend", DEL_FRIEND: "del_friend", UPDATE_FRIEND_MEMO: "update_friend_memo", GET_FRIEND_LIST: "get_friend_list", SYNC_CHECK: "sync_check", SYNC_CONVERSATION: "sync_conversation", SYNC_CONVERSATION_ACK: "sync_conversation_ack", MSG_RETRACT: "msg_retract", GET_RESOURCE: "get_resource", LIST_SHIELD_GROUP: "list_shield_group", SYNC_EVENT_CHECK: "sync_event_check", SYNC_EVENT: "sync_event", SYNC_EVENT_ACK: "sync_event_ack", RECEIPT_REPORT: "receipt_report", SYNC_RECEIPT_ACK: "sync_receipt_ack", SYNC_RECEIPT: "sync_receipt", RECEIPT_CHANGE: "receipt_change", UNREAD_GROUP_COUNT: "unread_group_count", UNREAD_SINGLE_COUNT: "unread_single_count", MSG_UNREAD_LIST: "msg_unread_list", TRANS_MSG_SINGLE: "trans_msg_single", TRANS_MSG_GROUP: "trans_msg_group", TRANS_MSG_PLATFORM: "trans_msg_platform", TRANS_MSG_REC: "trans_msg_rec", ADMIN_ADD_GROUP_MEMBER: "admin_add_group_member", APPLY_JOIN_GROUP: "apply_join_group", ROOM_LIST: "room_list", ROOM_LIST_SELF: "room_list_self", JOIN_ROOM: "join_room", EXIT_ROOM: "exit_room", ROOM_INFO: "room_info", SEND_ROOM_MSG: "send_room_msg", ROOM_MSG_SYNC: "room_msg_sync", GROUP_MEM_SILENCE: "group_mem_silence", ROOM_MSG_SYNC_HIS: "room_msg_sync_his", DISSOLVE_GROUP: "dissolve_group", ADD_GROUP_KEEPER: "add_group_keeper", DEL_GROUP_KEEPER: "del_group_keeper", CHANGE_GROUP_ADMIN: "change_group_admin", PUBLIC_GROUP_LIST: "public_group_list" } };t.exports = n;}, function (t, e, n) {function o() {}function i(t) {var n = "",o = !1;return n += t.type, e.BINARY_EVENT != t.type && e.BINARY_ACK != t.type || (n += t.attachments, n += "-"), t.nsp && "/" != t.nsp && (o = !0, n += t.nsp), null != t.id && (o && (n += ",", o = !1), n += t.id), null != t.data && (o && (n += ","), n += JSON.stringify(t.data)), h("encoded %j as %s", t, n), n;}function s(t, e) {function n(t) {var n = f.deconstructPacket(t),o = i(n.packet),s = n.buffers;s.unshift(o), e(s);}f.removeBlobs(t, n);}function r() {this.reconstructor = null;}function a(t) {var n = {},o = 0;if (n.type = Number(t.charAt(0)), null == e.types[n.type]) return u();if (e.BINARY_EVENT == n.type || e.BINARY_ACK == n.type) {for (var i = ""; "-" != t.charAt(++o) && (i += t.charAt(o), o != t.length);) {;}if (i != Number(i) || "-" != t.charAt(o)) throw new Error("Illegal attachments");n.attachments = Number(i);}if ("/" == t.charAt(o + 1)) for (n.nsp = ""; ++o;) {var s = t.charAt(o);if ("," == s) break;if (n.nsp += s, o == t.length) break;} else n.nsp = "/";var r = t.charAt(o + 1);if ("" !== r && Number(r) == r) {for (n.id = ""; ++o;) {var s = t.charAt(o);if (null == s || Number(s) != s) {--o;break;}if (n.id += t.charAt(o), o == t.length) break;}n.id = Number(n.id);}return t.charAt(++o) && (n = c(n, t.substr(o))), h("decoded %s as %j", t, n), n;}function c(t, e) {try {t.data = JSON.parse(e);} catch (t) {return u();}return t;}function p(t) {this.reconPack = t, this.buffers = [];}function u(t) {return { type: e.ERROR, data: "parser error" };}var h = n(1)("socket.io-parser"),_ = n(40),f = n(39),d = n(16);e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = o, e.Decoder = r, o.prototype.encode = function (t, n) {if (h("encoding packet %j", t), e.BINARY_EVENT == t.type || e.BINARY_ACK == t.type) s(t, n);else {var o = i(t);n([o]);}}, _(r.prototype), r.prototype.add = function (t) {var n;if ("string" == typeof t) n = a(t), e.BINARY_EVENT == n.type || e.BINARY_ACK == n.type ? (this.reconstructor = new p(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);else {if (!d(t) && !t.base64) throw new Error("Unknown type: " + t);if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, this.emit("decoded", n));}}, r.prototype.destroy = function () {this.reconstructor && this.reconstructor.finishedReconstruction();}, p.prototype.takeBinaryData = function (t) {if (this.buffers.push(t), this.buffers.length == this.reconPack.attachments) {var e = f.reconstructPacket(this.reconPack, this.buffers);return this.finishedReconstruction(), e;}return null;}, p.prototype.finishedReconstruction = function () {this.reconPack = null, this.buffers = [];};}, function (t, e, n) {function o(t, e) {return this instanceof o ? (t && "object" == typeof t && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 2e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 2e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new _({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e.timeout ? 3e3 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new a.Encoder(), this.decoder = new a.Decoder(), this.autoConnect = e.autoConnect !== !1, void (this.autoConnect && this.open())) : new o(t, e);}var i = n(27),s = n(8),r = n(3),a = n(5),c = n(7),p = n(11),u = n(1)("socket.io-client:manager"),h = n(12),_ = n(32),f = Object.prototype.hasOwnProperty;t.exports = o, o.prototype.emitAll = function () {this.emit.apply(this, arguments);for (var t in this.nsps) {f.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);}}, o.prototype.updateSocketIds = function () {for (var t in this.nsps) {f.call(this.nsps, t) && (this.nsps[t].id = this.engine.id);}}, r(o.prototype), o.prototype.reconnection = function (t) {return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;}, o.prototype.reconnectionAttempts = function (t) {return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;}, o.prototype.reconnectionDelay = function (t) {return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;}, o.prototype.randomizationFactor = function (t) {return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;}, o.prototype.reconnectionDelayMax = function (t) {return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;}, o.prototype.timeout = function (t) {return arguments.length ? (this._timeout = t, this) : this._timeout;}, o.prototype.maybeReconnectOnOpen = function () {!this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();}, o.prototype.open = o.prototype.connect = function (t, e) {if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;u("opening %s", this.uri), this.engine = i(this.uri, this.opts);var n = this.engine,o = this;this.readyState = "opening", this.skipReconnect = !1;var s = c(n, "open", function () {o.onopen(), t && t();}),r = c(n, "error", function (e) {if (u("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", e), t) {var n = new Error("Connection error");n.data = e, t(n);} else o.maybeReconnectOnOpen();});if (!1 !== this._timeout) {var a = this._timeout;u("connect attempt will timeout after %d", a);var p = setTimeout(function () {u("connect attempt timed out after %d", a), s.destroy(), n.close(), n.emit("error", "timeout"), o.emitAll("connect_timeout", a);}, a);this.subs.push({ destroy: function destroy() {clearTimeout(p);} });}return this.subs.push(s), this.subs.push(r), this;}, o.prototype.onopen = function () {u("open"), this.cleanup(), this.readyState = "open", this.emit("open");var t = this.engine;this.subs.push(c(t, "data", p(this, "ondata"))), this.subs.push(c(t, "ping", p(this, "onping"))), this.subs.push(c(t, "pong", p(this, "onpong"))), this.subs.push(c(t, "error", p(this, "onerror"))), this.subs.push(c(t, "close", p(this, "onclose"))), this.subs.push(c(this.decoder, "decoded", p(this, "ondecoded")));}, o.prototype.onping = function () {this.lastPing = new Date(), this.emitAll("ping");}, o.prototype.onpong = function () {this.emitAll("pong", new Date() - this.lastPing);}, o.prototype.ondata = function (t) {this.decoder.add(t);}, o.prototype.ondecoded = function (t) {this.emit("packet", t);}, o.prototype.onerror = function (t) {u("error", t), this.emitAll("error", t);}, o.prototype.socket = function (t, e) {function n() {~h(i.connecting, o) || i.connecting.push(o);}var o = this.nsps[t];if (!o) {o = new s(this, t, e), this.nsps[t] = o;var i = this;o.on("connecting", n), o.on("connect", function () {o.id = i.engine.id;}), this.autoConnect && n();}return o;}, o.prototype.destroy = function (t) {var e = h(this.connecting, t);~e && this.connecting.splice(e, 1), this.connecting.length || this.close();}, o.prototype.packet = function (t) {u("writing packet %j", t);var e = this;t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (n) {for (var o = 0; o < n.length; o++) {e.engine.write(n[o], t.options);}e.encoding = !1, e.processPacketQueue();}));}, o.prototype.processPacketQueue = function () {if (this.packetBuffer.length > 0 && !this.encoding) {var t = this.packetBuffer.shift();this.packet(t);}}, o.prototype.cleanup = function () {u("cleanup");for (var t = this.subs.length, e = 0; e < t; e++) {var n = this.subs.shift();n.destroy();}this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();}, o.prototype.close = o.prototype.disconnect = function () {u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();}, o.prototype.onclose = function (t) {u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();}, o.prototype.reconnect = function () {if (this.reconnecting || this.skipReconnect) return this;var t = this;if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;else {var e = this.backoff.duration();u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;var n = setTimeout(function () {t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect());}));}, e);this.subs.push({ destroy: function destroy() {clearTimeout(n);} });}}, o.prototype.onreconnect = function () {var t = this.backoff.attempts;this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);};}, function (t, e) {function n(t, e, n) {return t.on(e, n), { destroy: function destroy() {t.removeListener(e, n);} };}t.exports = n;}, function (t, e, n) {function o(t, e, n) {this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, n && n.query && (this.query = n.query), this.io.autoConnect && this.open();}var i = n(5),s = n(3),r = n(41),a = n(7),c = n(11),p = n(1)("socket.io-client:socket"),u = n(35);t.exports = e = o;var h = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 },_ = s.prototype.emit;s(o.prototype), o.prototype.subEvents = function () {if (!this.subs) {var t = this.io;this.subs = [a(t, "open", c(this, "onopen")), a(t, "packet", c(this, "onpacket")), a(t, "close", c(this, "onclose"))];}}, o.prototype.open = o.prototype.connect = function () {return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this);}, o.prototype.send = function () {var t = r(arguments);return t.unshift("message"), this.emit.apply(this, t), this;}, o.prototype.emit = function (t) {if (h.hasOwnProperty(t)) return _.apply(this, arguments), this;var e = r(arguments),n = i.EVENT,o = { type: n, data: e };return o.options = {}, o.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (p("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), o.id = this.ids++), this.connected ? this.packet(o) : this.sendBuffer.push(o), delete this.flags, this;}, o.prototype.packet = function (t) {t.nsp = this.nsp, this.io.packet(t);}, o.prototype.onopen = function () {p("transport is open - connecting"), "/" !== this.nsp && (this.query ? this.packet({ type: i.CONNECT, query: this.query }) : this.packet({ type: i.CONNECT }));}, o.prototype.onclose = function (t) {p("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t);}, o.prototype.onpacket = function (t) {if (t.nsp === this.nsp) switch (t.type) {case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error", t.data);}}, o.prototype.onevent = function (t) {var e = t.data || [];p("emitting event %j", e), null != t.id && (p("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? _.apply(this, e) : this.receiveBuffer.push(e);}, o.prototype.ack = function (t) {var e = this,n = !1;return function () {if (!n) {n = !0;var o = r(arguments);p("sending ack %j", o);var s = u(o) ? i.BINARY_ACK : i.ACK;e.packet({ type: s, id: t, data: o });}};}, o.prototype.onack = function (t) {var e = this.acks[t.id];"function" == typeof e ? (p("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : p("bad ack %s", t.id);}, o.prototype.onconnect = function () {this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();}, o.prototype.emitBuffered = function () {var t;for (t = 0; t < this.receiveBuffer.length; t++) {_.apply(this, this.receiveBuffer[t]);}for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) {this.packet(this.sendBuffer[t]);}this.sendBuffer = [];}, o.prototype.ondisconnect = function () {p("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");}, o.prototype.destroy = function () {if (this.subs) {for (var t = 0; t < this.subs.length; t++) {this.subs[t].destroy();}this.subs = null;}this.io.destroy(this);}, o.prototype.close = o.prototype.disconnect = function () {return this.connected && (p("performing disconnect (%s)", this.nsp), this.packet({ type: i.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;}, o.prototype.compress = function (t) {return this.flags = this.flags || {}, this.flags.compress = t, this;};}, function (t, e, n) {function o(t) {this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;}var i = n(2),s = n(3);t.exports = o, s(o.prototype), o.prototype.onError = function (t, e) {var n = new Error(t);return n.type = "TransportError", n.description = e, this.emit("error", n), this;}, o.prototype.open = function () {return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;}, o.prototype.close = function () {return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;}, o.prototype.send = function (t) {if ("open" !== this.readyState) throw new Error("Transport not open");this.write(t);}, o.prototype.onOpen = function () {this.readyState = "open", this.writable = !0, this.emit("open");}, o.prototype.onData = function (t) {var e = i.decodePacket(t, this.socket.binaryType);this.onPacket(e);}, o.prototype.onPacket = function (t) {this.emit("packet", t);}, o.prototype.onClose = function () {this.readyState = "closed", this.emit("close");};}, function (t, e, n) {function o(t) {var e = t && t.forceBase64;e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, i.call(this, t);}var i = n(9),s = n(2),r = n(14),a = n(33),c = n(42),p = n(1)("engine.io-client:websocket");t.exports = o, a(o, i), o.prototype.name = "wx", o.prototype.supportsBinary = !0, o.prototype.doOpen = function () {if (this.check()) {var t = this.uri(),e = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (e.headers = this.extraHeaders), this.localAddress && (e.localAddress = this.localAddress), this.isOk = !1, this.ws = wx, this.ws.connectSocket({ url: t }), void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();}}, o.prototype.addEventListeners = function () {var t = this;this.ws.onSocketOpen(function () {t.onOpen(), t.isOk = !0;}), this.ws.onSocketClose(function () {t.onClose(), t.isOk = !1;}), this.ws.onSocketMessage(function (e) {t.onData(e.data);}), this.ws.onSocketError(function (e) {t.onError("websocket error", e);});}, o.prototype.write = function (t) {function e() {n.emit("flush"), setTimeout(function () {n.writable = !0, n.emit("drain");}, 0);}var n = this;this.writable = !1;for (var o = t.length, i = 0, r = o; i < r; i++) {!function (t) {s.encodePacket(t, n.supportsBinary, function (t) {try {n.ws.sendSocketMessage({ data: t });} catch (t) {p("websocket closed before onclose event");}--o || e();});}(t[i]);}}, o.prototype.onClose = function () {i.prototype.onClose.call(this);}, o.prototype.doClose = function () {"undefined" != typeof this.ws && this.ws.closeSocket();}, o.prototype.uri = function () {var t = this.query || {},e = this.secure ? "wss" : "ws",n = "";this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || (t.b64 = 1), t = r.encode(t), t.length && (t = "?" + t);var o = this.hostname.indexOf(":") !== -1;return e + "://" + (o ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t;}, o.prototype.check = function () {return !this.isOk;};}, function (t, e) {var n = [].slice;t.exports = function (t, e) {if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");var o = n.call(arguments, 2);return function () {return e.apply(t, o.concat(n.call(arguments)));};};}, function (t, e) {var n = [].indexOf;t.exports = function (t, e) {if (n) return t.indexOf(e);for (var o = 0; o < t.length; ++o) {if (t[o] === e) return o;}return -1;};}, function (t, e) {t.exports = Array.isArray || function (t) {return "[object Array]" == Object.prototype.toString.call(t);};}, function (t, e) {e.encode = function (t) {var e = "";for (var n in t) {t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));}return e;}, e.decode = function (t) {for (var e = {}, n = t.split("&"), o = 0, i = n.length; o < i; o++) {var s = n[o].split("=");e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);}return e;};}, function (t, e) {var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];t.exports = function (t) {var e = t,i = t.indexOf("["),s = t.indexOf("]");i != -1 && s != -1 && (t = t.substring(0, i) + t.substring(i, s).replace(/:/g, ";") + t.substring(s, t.length));for (var r = n.exec(t || ""), a = {}, c = 14; c--;) {a[o[c]] = r[c] || "";}return i != -1 && s != -1 && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a;};}, function (t, e) {(function (e) {function n(t) {return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer;}t.exports = n;}).call(e, function () {return this;}());}, function (t, e, n) {"use strict";var o = n(3),i = n(28),s = n(4),r = function r(t) {this.init(t);};r.prototype.init = function (t) {this.opts = t, this.dataCache = {}, this.memStore = {}, this.sync_key = 0, this.sync_type = 0, void 0 != this.client && this.client.close(), this.client = i(this.opts.address, { transports: ["websocket", "polling"] });var e = this,n = o.prototype.emit,s = this.client.onevent;this.client.onevent = function (t) {var o = t.data || [];s.call(e.client, t), n.apply(e.client, ["*"].concat(o));}, this.client.on("*", function (t, n) {e.onReceive(t, n);});}, r.prototype.onReceive = function (t, e) {if (this.opts.debug && console.log("---<- event:%s, data:%s", t, JSON.stringify(e)), t !== s.EVENTS.EVENT_NOTIFICATION && t !== s.EVENTS.MSG_SYNC && t !== s.EVENTS.SYNC_CONVERSATION && t !== s.EVENTS.SYNC_EVENT && t !== s.EVENTS.SYNC_RECEIPT && t !== s.EVENTS.RECEIPT_CHANGE && t !== s.ROOM_MSG_SYNC && t !== s.ROOM_MSG_SYNC_HIS) {var n = this.dataCache[e.rid];delete e.rid, n && (0 === e.code && t === s.EVENTS.GET_GROUP_MEMBERS ? e.member_list.forEach(function (t) {n.userInfoGet && n.userInfoGet(t.uid, t.mtime), delete t.uid, delete t.mtime;}) : 0 === e.code && t === s.EVENTS.GET_CONVERSATIONS ? e.conversations.forEach(function (t) {3 === t.type && (n.userInfoGet && n.userInfoGet(t.key, t.utime), delete t.utime);}) : 0 === e.code && t === s.EVENTS.GET_FRIEND_LIST ? e.friend_list.forEach(function (t) {n.userInfoGet && n.userInfoGet(t.uid, 1e3 * t.mtime), delete t.uid;}) : 0 === e.code && t === s.EVENTS.GET_BLACK_LIST && e.black_list.forEach(function (t) {delete t.uid;}), t === s.EVENTS.ACK ? (n.ack && n.ack({ rid: e.rid, data: n.data }), n.cleanAckTimeout()) : (n.cleanRespTimeout(), delete this.dataCache[n.rid], e.code && 0 !== e.code ? n.fail && n.fail(e) : t != s.EVENTS.S_SINGLE_TEXT_ && t != s.EVENTS.SEND_GROUP_MSG && t != s.EVENTS.SEND_ROOM_MSG ? n.hook ? n.hook(e, n.success) : n.success && n.success(e) : (n.data.msg_id = e.msg_id, t === s.EVENTS.S_SINGLE_TEXT_ && (e.target_username = n.data.content.target_id, e.appkey = n.data.appkey), n.success && n.success(e, n.data), n.innerCall && n.innerCall(e.msg_id))));}}, r.prototype.generateRid = function () {for (var t = Math.floor(Math.random() * -2147483646 + 2147483647); this.dataCache[t];) {t = Math.floor(Math.random() * -2147483646 + 2147483647);}return t;}, r.prototype.send = function (t, e) {this.opts.debug && console.log("--->- event:%s, data:%s", t, JSON.stringify(e)), this.client.emit(t, e);}, t.exports = r;}, function (t, e, n) {"use strict";var o = n(19);t.exports = o;}, function (t, e, n) {"use strict";var o = n(31),i = n(17),s = n(4),r = n(21),a = n(23),c = n(22),p = n(20)(),u = n(24),h = function h(t) {var e = t ? t : {};this.opts = { address: e.address ? e.address : s.WSS_ADDRESS, debug: !!e.debug }, this.channel = new i(this.opts), this.syncTask = 0, this.msgReceipTask = 0;};h.prototype.init = function (t) {var e = this;return e.autoDiscon = !0, t.flag !== s.SYNC_TYPE_OPEN && t.flag !== s.SYNC_TYPE_CLOSE || (e.channel.sync_type = t.flag), t.fromPlatForm = s.FROM_PLATFORM, new r(this.channel).setEvent(s.EVENTS.INIT).setData(t).send().addHook(function (n, o) {e.current_appkey = t.appkey, o && o(n);});}, h.prototype.loginOut = function () {if (this.current_user) {this.autoDiscon = !1, this.channel.client.close();var t = this.channel.dataCache;for (var e in t) {t[e].cleanAckTimeout(), t[e].cleanRespTimeout();}this.current_user = null, this.current_appkey = null, this.channel.init(this.channel.opts);}}, h.prototype.login = function (t) {this.__checkInit(), t.is_md5 || (t.password = p(t.password)), t.version = s.SDK_VERSION;var e = this,n = new r(this.channel).setEvent(s.EVENTS.LOGIN).setData(t).addHook(function (n, o) {e.current_user = t.username, u.StorageUtils.removeItems(e.current_user), e.channel.sync_key = 0, e.channel.sync_event_key = 0, e.channel.msg_receipt_key = 0, e.channel.ses_key = s.SESSION_KEY + e.current_appkey + "-" + e.current_user, e.channel.conversations_key = s.CONVERSATION_KEY + e.current_appkey + "-" + e.current_user, e.channel.event_key = s.EVENT_KEY + e.current_appkey + "-" + e.current_user, e._syncCheckTask(), e._receiptReportTask(), e._initConversation(), e.lastMsgs = {}, e.channel.client.removeListener(s.EVENTS.LOGIN), e._addEventListen(), e.firstLogin = !1, o && o(n);});return setTimeout(function () {n.send();}, 500), n;}, h.prototype._initConversation = function () {var t = this,e = u.StorageUtils.getItem(t.channel.conversations_key);null !== e && "" !== e || (e = JSON.stringify({}), u.StorageUtils.addItem(t.channel.conversations_key, e)), t.conversations = JSON.parse(e);}, h.prototype._receiptReportTask = function () {var t = this;t.report = [], t.msgReceipTask = setInterval(function () {t._receiptReport();}, s.RECEIPT_REPORT_INTERVAL);}, h.prototype._syncCheckTask = function () {var t = this,e = u.StorageUtils.getItem(t.channel.event_key);null != e && (t.channel.sync_event_key = e), t._syncCheck({ sync_key: t.channel.sync_key, sync_type: t.channel.sync_type, sync_event_key: t.channel.sync_event_key, msg_receipt_key: t.channel.msg_receipt_key }).onSuccess(function (e) {e && 0 === e.code && (t.channel.sync_key = e.sync_key, t.channel.sync_type = e.sync_type, t.channel.sync_event_key = e.sync_event_key, t.channel.msg_receipt_key = e.msg_receipt_key, u.StorageUtils.addItem(t.channel.event_key, e.sync_event_key));}), t.syncTask = setInterval(function () {t._syncCheck({ sync_key: t.channel.sync_key, sync_type: t.channel.sync_type, sync_event_key: t.channel.sync_event_key, msg_receipt_key: t.channel.msg_receipt_key }).onSuccess(function (e) {e && 0 === e.code && (t.channel.sync_key = e.sync_key, t.channel.sync_type = e.sync_type, t.channel.sync_event_key = e.sync_event_key, t.channel.msg_receipt_key = e.msg_receipt_key, u.StorageUtils.addItem(t.channel.event_key, e.sync_event_key));});}, s.SYNC_INTERVAL);}, h.prototype._syncCheck = function (t) {return new r(this.channel).setEvent(s.EVENTS.SYNC_CHECK).setData(t).send();}, h.prototype.register = function (t) {return this.__checkInit(), t.is_md5 || (t.password = p(t.password)), new r(this.channel).setEvent(s.EVENTS.REGISTER).setData(t).send();}, h.prototype.getUserInfo = function (t) {return this.__checkLogin(), u.StringUtils.isBlack(t.appkey) && (t.appkey = this.current_appkey), new r(this.channel).setEvent(s.EVENTS.GET_ACROSS_USER_INFO).setData(t).send();}, h.prototype.updateSelfInfo = function (t) {return this.__checkLogin(), u.StringUtils.isBlack(t.avatar) || delete t.avatar, new r(this.channel).setEvent(s.EVENTS.UPDATE_SELF_INFO).setData(t).send();}, h.prototype.updateSelfAvatar = function (t) {this.__checkLogin();var e = new r(this.channel).setEvent(s.EVENTS.UPDATE_SELF_INFO),n = this;return this.__uploadFile({ appkey: n.current_appkey, username: n.current_user, file: t.avatar, type: "image" }, function (t, n) {return t ? t.is_timeout ? e.timeout && e.timeout(t.data) : e.fail && e.fail(t.data) : void e.setData({ avatar: n.media_id }).send();}), e;}, h.prototype.updateSelfPwd = function (t) {return this.__checkLogin(), t.is_md5 || (t.old_pwd = p(t.old_pwd), t.new_pwd = p(t.new_pwd)), new r(this.channel).setEvent(s.EVENTS.UPDATE_SELF_PWD).setData(t).send();}, h.prototype.getConversation = function () {var t = this;return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_CONVERSATIONS).setData({}).send().onUserInfoGet(function (e, n) {t[e] = n;}).addHook(function (e, n) {e.conversations.forEach(function (e) {var n;3 === e.type ? (t[e.key] = e.utime, delete e.utime, n = e.appkey + e.username) : (n = e.key, e.gid = e.key), t.conversations[n] ? (t.conversations[n].extras ? e.extras = t.conversations[n].extras : e.extras = {}, e.unread_msg_count = t.conversations[n].unread_msg_count) : (e.extras = {}, e.unread_msg_count = 0, t.conversations[n] = {}, t.conversations[n].extras = {}, t.conversations[n].unread_msg_count = 0, t.conversations[n].msg_time = []);}), u.StorageUtils.addItem(t.channel.conversations_key, JSON.stringify(t.conversations)), n && n(e);});}, h.prototype.resetUnreadCount = function (t) {this.__checkLogin();var e,n = this;t.gid ? e = String(t.gid) : (t.appkey || (t.appkey = n.current_appkey), e = t.appkey + t.username), n.conversations[e] = void 0 === n.conversations[e] ? {} : n.conversations[e], t.gid ? n._updateGroupUnreadCount({ gid: t.gid }) : n._updateSingleUnreadCount({ appkey: t.appkey, username: t.username }), n.conversations[e].unread_msg_count = 0, n.conversations[e].msg_time = [];var o = new Date().getTime();n.lastMsgs[e] && (o = n.lastMsgs[e].last_msg_time), n.conversations[e].recent_time = o, n.current_conversation = e, u.StorageUtils.addItem(n.channel.conversations_key, JSON.stringify(n.conversations));
    }, h.prototype.getUnreadMsgCnt = function (t) {this.__checkLogin();var e,n = this;return t.gid ? e = String(t.gid) : (t.appkey || (t.appkey = n.current_appkey), e = t.appkey + t.username), n.conversations[e] || (n.conversations[e] = {}), n.conversations[e] = void 0 === n.conversations[e] ? {} : n.conversations[e], n.conversations[e].unread_msg_count ? n.conversations[e].unread_msg_count : 0;}, h.prototype.msgRetract = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.MSG_RETRACT).setData(t).send();}, h.prototype.sendSingleMsg = function (t) {return this.__checkLogin(), this.__sendMsg({ type: "single", target_id: t.target_username, target_name: t.target_nickname, content: t.content, extras: t.extras, msg_body: t.msg_body, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendGroupMsg = function (t) {return this.__checkLogin(), this.__sendMsg({ type: "group", target_id: t.target_gid, target_name: t.target_gname, content: t.content, extras: t.extras, msg_body: t.msg_body, at_list: t.at_list, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendSinglePic = function (t) {return this.__checkLogin(), this.__sendPic({ type: "single", target_id: t.target_username, target_name: t.target_nickname, file: t.image, msg_body: t.msg_body, extras: t.extras, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendGroupPic = function (t) {return this.__checkLogin(), this.__sendPic({ type: "group", target_id: t.target_gid, target_name: t.target_gname, file: t.image, msg_body: t.msg_body, extras: t.extras, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendSingleFile = function (t) {return this.__sendVideoOrFile({ type: "single", target_id: t.target_username, target_name: t.target_nickname, file: t.file, msg_body: t.msg_body, extras: t.extras, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt }, "file");}, h.prototype.sendGroupFile = function (t) {return this.__sendVideoOrFile({ type: "group", target_id: t.target_gid, target_name: t.target_gname, file: t.file, msg_body: t.msg_body, extras: t.extras, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt }, "file");}, h.prototype.sendSingleVedio = function (t) {return this.__sendVideoOrFile({ type: "single", target_id: t.target_username, target_name: t.target_nickname, file: t.file, msg_body: t.msg_body, extras: t.extras, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt }, "video");}, h.prototype.sendGroupVedio = function (t) {return this.__sendVideoOrFile({ type: "group", target_id: t.target_gid, target_name: t.target_gname, file: t.file, msg_body: t.msg_body, extras: t.extras, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt }, "video");}, h.prototype.sendSingleLocation = function (t) {return this.__checkLogin(), this.__sendLocation({ type: "single", target_id: t.target_username, target_name: t.target_nickname, latitude: t.latitude, longitude: t.longitude, scale: t.scale, label: t.label, msg_body: t.msg_body, extras: t.extras, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendGroupLocation = function (t) {return this.__checkLogin(), this.__sendLocation({ type: "group", target_id: t.target_gid, target_name: t.target_gname, latitude: t.latitude, longitude: t.longitude, scale: t.scale, label: t.label, msg_body: t.msg_body, extras: t.extras, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendSingleCustom = function (t) {return this.__checkLogin(), this.__sendCustom({ type: "single", target_id: t.target_username, target_name: t.target_nickname, custom: t.custom, extras: t.extras, msg_body: t.msg_body, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendGroupCustom = function (t) {return this.__checkLogin(), this.__sendCustom({ type: "group", target_id: t.target_gid, target_name: t.target_gname, custom: t.custom, msg_body: t.msg_body, extras: t.extras, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.createGroup = function (t) {this.__checkLogin();var e = this,n = new r(this.channel).setEvent(s.EVENTS.CREATE_GROUP);return t.avatar ? this.__uploadFile({ appkey: e.current_appkey, username: e.current_user, file: t.avatar, type: "image" }, function (e, o) {return e ? e.is_timeout ? n.timeout && n.timeout(e.data) : n.fail && n.fail(e.data) : (delete t.avatar, t.media_id = o.media_id, void n.setData(t).send());}) : n.setData(t).send(), n;}, h.prototype.exitGroup = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.EXIT_GROUP).setData(t).send();}, h.prototype.getGroups = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_GROUPS_LIST).setData({}).send().addHook(function (t, e) {t.group_list.forEach(function (t) {t.group_type = t.flag, delete t.flag;}), e && e(t);});}, h.prototype.getGroupInfo = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_GROUP_INFO).setData(t).send().addHook(function (t, e) {t.group_info.group_type = t.group_info.flag, delete t.group_info.flag, e && e(t);});}, h.prototype.updateGroupInfo = function (t) {this.__checkLogin();var e = this,n = new r(this.channel).setEvent(s.EVENTS.UPDATE_GROUP_INFO);return t.avatar ? this.__uploadFile({ appkey: e.current_appkey, username: e.current_user, file: t.avatar, type: "image" }, function (e, o) {return e ? e.is_timeout ? n.timeout && n.timeout(e.data) : n.fail && n.fail(e.data) : (delete t.avatar, t.media_id = o.media_id, void n.setData(t).send());}) : n.setData(t).send(), n;}, h.prototype.getGroupMembers = function (t) {var e = this;return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_GROUP_MEMBERS).setData(t).send().onUserInfoGet(function (t, n) {e[t] = n;});}, h.prototype.addGroupMembers = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_ACROSS_GROUP_MEMBER).setData(t).send();}, h.prototype.delGroupMembers = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DEL_ACROSS_GROUP_MEMBER).setData(t).send();}, h.prototype.getNoDisturb = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.NO_DISTURB).setData({ version: 0 }).send().addHook(function (t, e) {t.no_disturb.groups.forEach(function (t) {t.group_type = t.flag, delete t.flag;}), e && e(t);});}, h.prototype.addSingleNoDisturb = function (t) {return this.__checkLogin(), t.version = 0, new r(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_SINGLE).setData(t).send();}, h.prototype.delSingleNoDisturb = function (t) {return this.__checkLogin(), t.version = 0, new r(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_SINGLE).setData(t).send();}, h.prototype.addGroupNoDisturb = function (t) {return this.__checkLogin(), t.version = 0, new r(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_GROUP).setData(t).send();}, h.prototype.delGroupNoDisturb = function (t) {return this.__checkLogin(), t.version = 0, new r(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_GROUP).setData(t).send();}, h.prototype.addGlobalNoDisturb = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_GLOBAL).setData({ version: 0 }).send();}, h.prototype.delGlobalNoDisturb = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_GLOBAL).setData({ version: 0 }).send();}, h.prototype.getBlacks = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_BLACK_LIST).setData({ version: 0 }).send();}, h.prototype.addSingleBlacks = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_BLACK_LIST).setData(t).send();}, h.prototype.delSingleBlacks = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DEL_BLACK_LIST).setData(t).send();}, h.prototype.getFriendList = function () {var t = this;return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_FRIEND_LIST).setData({}).send().onUserInfoGet(function (e, n) {t[e] = n;});}, h.prototype.addFriend = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send();}, h.prototype.acceptFriend = function (t) {return this.__checkLogin(), t.why = "yes", t.from_type = s.FRIEND_INVITED, new r(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send();}, h.prototype.declineFriend = function (t) {return this.__checkLogin(), t.why && "" != t.why.trim() || (t.why = "no"), t.from_type = s.FRIEND_INVITED, new r(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send();}, h.prototype.delFriend = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DEL_FRIEND).setData(t).send();}, h.prototype.updateFriendMemo = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.UPDATE_FRIEND_MEMO).setData(t).send();}, h.prototype.addGroupShield = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_MSG_SHIELD_GROUP).setData(t).send();}, h.prototype.delGroupShield = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DEL_MSG_SHIELD_GROUP).setData(t).send();}, h.prototype.groupShieldList = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.LIST_SHIELD_GROUP).setData(t).send().addHook(function (t, e) {t.groups.forEach(function (t) {t.group_type = t.flag, delete t.flag;}), e && e(t);});}, h.prototype.getResource = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_RESOURCE).setData(t).send();}, h.prototype._updateGroupUnreadCount = function (t) {this.__checkLogin(), t.type = 4, new r(this.channel).setEvent(s.EVENTS.UNREAD_GROUP_COUNT).setData(t).send();}, h.prototype._updateSingleUnreadCount = function (t) {this.__checkLogin(), t.type = 3, new r(this.channel).setEvent(s.EVENTS.UNREAD_SINGLE_COUNT).setData(t).send();}, h.prototype.msgUnreadList = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.MSG_UNREAD_LIST).setData(t).send();}, h.prototype.addGroupReceiptReport = function (t) {this.__checkLogin();var e = this;if (!(t.msg_ids instanceof Array) || 0 === t.msg_ids.length) return void console.error("msg_ids is not Array type or msg_ids size=0");t.key = t.gid, t.type = 4;var n = new a(t);return e.report.push(n), setTimeout(function () {e._checkReportSize() >= s.RECEIPT_REPORT_MAX_SIZE && e._receiptReport();}, 50), n;}, h.prototype.addSingleReceiptReport = function (t) {this.__checkLogin();var e = this;if (!(t.msg_ids instanceof Array) || 0 === t.msg_ids.length) return void console.error("msg_ids is not Array type or msg_ids size=0");t.appkey || (t.appkey = e.current_appkey), t.type = 3, t.key = t.appkey + t.username;var n = new a(t);return e.report.push(n), setTimeout(function () {e._checkReportSize() >= s.RECEIPT_REPORT_MAX_SIZE && e._receiptReport();}, 50), n;}, h.prototype._checkReportSize = function () {var t = this,e = 0;return t.report.forEach(function (t) {e += t.args.msg_ids.length;}), e;}, h.prototype.transSingleMsg = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.TRANS_MSG_SINGLE).setData(t).send();}, h.prototype.transGroupMsg = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.TRANS_MSG_GROUP).setData(t).send();}, h.prototype.transPlatMsg = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.TRANS_MSG_PLATFORM).setData(t).send();}, h.prototype.updateConversation = function (t) {this.__checkLogin();var e = this;t.appkey || (t.appkey = e.current_appkey);var n;t.gid ? n = t.gid : t.username && (n = t.appkey + t.username), n && t.extras && (e.conversations[n] || (e.conversations[n] = {}), e.conversations[n].extras = t.extras), u.StorageUtils.addItem(e.channel.conversations_key, JSON.stringify(e.conversations));}, h.prototype.addGroupMemberResp = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADMIN_ADD_GROUP_MEMBER).setData(t).send();}, h.prototype.joinGroup = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.APPLY_JOIN_GROUP).setData(t).send();}, h.prototype.getAppkeyChatrooms = function (t) {return this.__checkLogin(), !t && (t = {}), new r(this.channel).setEvent(s.EVENTS.ROOM_LIST).setData(t).send().addHook(function (t, e) {t.result.rooms.forEach(function (t) {u.Cache.rooms[t.id] = t;}), e && e(t);});}, h.prototype.getSelfChatrooms = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ROOM_LIST_SELF).setData({}).send().addHook(function (t, e) {t.chat_rooms.forEach(function (t) {u.Cache.rooms[t.id] = t;}), e && e(t);});}, h.prototype.getChatroomInfo = function (t) {this.__checkLogin();var e = new r(this.channel);return u.Cache.rooms[t.id] ? setTimeout(function () {var n = {};n.code = 0, n.message = "success", n.info = u.Cache.rooms[t.id], e.cleanRespTimeout(), e.success && e.success(n);}, 100) : e.setEvent(s.EVENTS.ROOM_INFO).setData(t).send().addHook(function (t, e) {u.Cache.rooms[t.info.id] = t.info, e && e(t);}), e;}, h.prototype.enterChatroom = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.JOIN_ROOM).setData(t).send();}, h.prototype.exitChatroom = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.EXIT_ROOM).setData(t).send();}, h.prototype.sendChatroomMsg = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendMsg({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, content: t.content, extras: t.extras, msg_body: t.msg_body });}, h.prototype.sendChatroomPic = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendPic({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, file: t.image, extras: t.extras, msg_body: t.msg_body });}, h.prototype.sendChatroomFile = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendVideoOrFile({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, file: t.file, extras: t.extras, msg_body: t.msg_body }, "file");}, h.prototype.sendChatroomVideo = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendVideoOrFile({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, file: t.file, msg_body: t.msg_body, extras: t.extras }, "video");}, h.prototype.sendChatroomCustom = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendCustom({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, custom: t.custom, extras: t.extras, msg_body: t.msg_body });}, h.prototype.sendChatroomLocation = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendLocation({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, latitude: t.latitude, longitude: t.longitude, scale: t.scale, label: t.label, extras: t.extras, msg_body: t.msg_body });}, h.prototype.addGroupMemSilence = function (t) {return this.__checkLogin(), t.keep_silence = !0, new r(this.channel).setEvent(s.EVENTS.GROUP_MEM_SILENCE).setData(t).send();}, h.prototype.delGroupMemSilence = function (t) {return this.__checkLogin(), t.keep_silence = !1, new r(this.channel).setEvent(s.EVENTS.GROUP_MEM_SILENCE).setData(t).send();}, h.prototype.dissolveGroup = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DISSOLVE_GROUP).setData(t).send();}, h.prototype.addGroupKeeper = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_GROUP_KEEPER).setData(t).send();}, h.prototype.delGroupKeeper = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DEL_GROUP_KEEPER).setData(t).send();}, h.prototype.changeGroupAdmin = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.CHANGE_GROUP_ADMIN).setData(t).send();}, h.prototype.getAppkeyPublicGroups = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.PUBLIC_GROUP_LIST).setData(t).send().addHook(function (t, e) {t.result.groups.forEach(function (t) {t.group_type = t.flag, delete t.flag;}), e && e(t);});}, h.prototype.isInit = function () {return !!this.current_appkey;}, h.prototype.isLogin = function () {return !!this.current_user;}, h.prototype.isConnect = function () {return !!this.channel.client.connected;}, h.prototype._addEventListen = function () {var t = this;t.channel.client.on(s.EVENTS.MSG_SYNC, function (e) {t._onMsgReceive(e);}), t.channel.client.on(s.EVENTS.EVENT_NOTIFICATION, function (e) {t._onEventNotification(e);}), t.channel.client.on(s.EVENTS.SYNC_CONVERSATION, function (e) {t._onSyncConversation(e);}), t.channel.client.on(s.EVENTS.SYNC_EVENT, function (e) {t._onSyncEvent(e);}), t.channel.client.on(s.EVENTS.SYNC_RECEIPT, function (e) {t._onSyncMsgReceipt(e);}), t.channel.client.on(s.EVENTS.RECEIPT_CHANGE, function (e) {t._onMsgReceiptChange(e);}), t.channel.client.on(s.EVENTS.TRANS_MSG_REC, function (e) {t._onTransMsgRec(e);}), t.channel.client.on(s.EVENTS.ROOM_MSG_SYNC, function (e) {t._onRoomMsg(e);}), t.channel.client.on(s.EVENTS.ROOM_MSG_SYNC_HIS, function (e) {t._onSyncRoomMsg(e);}), t.channel.client.on("disconnect", function () {t._onDisconnect();});}, h.prototype.onRoomMsg = function (t) {this._onRoomMsgFn = t;}, h.prototype._onRoomMsg = function (t) {this._onRoomMsgFn && this._onRoomMsgFn(t);}, h.prototype._onSyncRoomMsg = function (t) {var e = this;t.messages.forEach(function (n) {u.Cache.rooms[n.room_id] || e.getChatroomInfo({ id: t.room_id }), n.msgs && n.msgs.forEach(function (t) {e._onRoomMsgFn && e._onRoomMsgFn(t);});});}, h.prototype.onMsgReceive = function (t) {this._onMsgReceiveFn = t;}, h.prototype._onMsgReceive = function (t) {var e = [],n = this;Array.prototype.push.apply(e, t.messages.map(function (t) {return { msg_id: t.msg_id, msg_type: t.msg_type, from_uid: t.from_uid, from_gid: t.from_gid };})), t.messages.forEach(function (t) {if (t.content.sui_mtime && n[t.from_uid] && t.content.sui_mtime > new Date(n[t.from_uid]).getTime() / 1e3) {n[t.from_uid] = 1e3 * t.content.sui_mtime;var e = {};e.from_username = t.content.from_id, e.from_appkey = t.content.from_appkey, e.mtime = t.content.sui_mtime, delete t.content.sui_mtime, n._updateInfoEventFun && n._updateInfoEventFun(e);}var o;3 === t.msg_type ? (t.key = t.from_uid, t.from_username = t.content.from_id, t.from_appkey = t.content.from_appkey, o = t.from_appkey + t.from_username) : (t.key = t.from_gid, o = String(t.from_gid)), 0 === t.msg_level ? t.msg_level = "normal" : 1 === t.msg_level && (t.msg_level = "across");var i = !1;if (t.from_appkey === n.current_appkey && t.from_username === n.current_user) {i = !0;var a = void 0 === t.content.target_appkey || "" === t.content.target_appkey ? t.content.from_appkey : t.content.target_appkey;o = a + t.content.target_id;}n.lastMsgs[o] = { last_msg_time: t.ctime_ms }, n.conversations[o] || (n.conversations[o] = {}, n.conversations[o].extras = {}, n.conversations[o].unread_msg_count = 0, n.conversations[o].msg_time = []), n.current_conversation === o || i ? (n.conversations[o].recent_time = t.ctime_ms, n.conversations[o].unread_msg_count = 0, n.conversations[o].msg_time = []) : (n.conversations[o].unread_msg_count = n.conversations[o].unread_msg_count + 1, n.conversations[o].msg_time.push(t.ctime_ms)), new r(n.channel).setEvent(s.EVENTS.MSG_RECV_V2).setData({ msg_id: t.msg_id, msg_type: t.msg_type, from_uid: t.from_uid, from_gid: t.from_gid }).send();}), u.StorageUtils.addItem(n.channel.conversations_key, JSON.stringify(n.conversations)), this._onMsgReceiveFn && this._onMsgReceiveFn(t);}, h.prototype.onEventNotification = function (t) {this._onEventNotificationFn = t;}, h.prototype._onEventNotification = function (t) {var e = this;if (200 === t.event_type) return void (3 === t.description.type ? e._dealMutlReadEvent(t.description.type, t.ctime_ms, t.description.appkey, t.description.username) : e._dealMutlReadEvent(t.description.type, t.ctime_ms, t.description.gid));var n = e.__eventDateFilter(t);if (56 === t.event_type && 10 == t.extra ? (n.by_self = !1, delete n.extra) : 56 === t.event_type && 59 == t.extra && (n.by_self = !0, delete n.extra), 1 === t.event_type) {var o = { event_id: t.event_id, event_type: t.event_type, from_uid: t.from_uid, gid: t.gid };new r(e.channel).setEvent(s.EVENTS.EVENT_NOTIFICATION).setData(o).send();}e._onEventNotificationFn && e._onEventNotificationFn(n), s.LOGIN_OUT_EVENT.indexOf(t.event_type) != -1 && e.loginOut();}, h.prototype.onSyncConversation = function (t) {this._onSyncConversationFn = t;}, h.prototype._onSyncConversation = function (t) {var e = this;e.channel.sync_key = t.sync_key, t.messages && (t.messages.forEach(function (t) {var n,o = 0;n = 3 === t.msg_type ? t.from_appkey + t.from_username : String(t.from_gid);var i = t.msgs[t.msgs.length - 1].ctime_ms;if (e.current_conversation === n) e.conversations[n] = void 0 === e.conversations[n] ? {} : e.conversations[n], e.conversations[n].unread_msg_count = o, e.conversations[n].recent_time = i, e.conversations[n].msg_time = [];else if (e.conversations[n] && e.conversations[n].recent_time) {var r = e.conversations[n].recent_time;t.msgs.forEach(function (t) {t.ctime_ms <= r || t.content.from_appkey === e.current_appkey && t.content.from_id === e.current_user ? (o = 0, e.conversations[n].msg_time = []) : (o++, e.conversations[n].msg_time.push(t.ctime_ms));}), e.channel.sync_type === s.SYNC_TYPE_OPEN ? e.conversations[n].unread_msg_count = o : e.conversations[n].unread_msg_count += o;} else o = t.unsync_count, e.conversations[n] = void 0 === e.conversations[n] ? {} : e.conversations[n], e.conversations[n].unread_msg_count = o, t.msgs.length - 1 - o < 0 ? e.conversations[n].recent_time = -1 : e.conversations[n].recent_time = t.msgs[t.msgs.length - 1 - o].ctime_ms, e.conversations[n].msg_time = [];e.lastMsgs[n] = { last_msg_time: i }, delete t.unsync_count, t.unread_msg_count = o;}), u.StorageUtils.addItem(e.channel.conversations_key, JSON.stringify(e.conversations)), e._onSyncConversationFn && t.messages.length > 0 && e._onSyncConversationFn(t.messages));var n = { sync_key: e.channel.sync_key };new r(e.channel).setEvent(s.EVENTS.SYNC_CONVERSATION_ACK).setData(n).send();}, h.prototype.onSyncEvent = function (t) {this._onSyncEventFn = t;}, h.prototype._onSyncEvent = function (t) {var e = this;e.channel.sync_event_key = t.sync_key, u.StorageUtils.addItem(e.channel.event_key, t.sync_key);var n = { sync_key: e.channel.sync_event_key };new r(e.channel).setEvent(s.EVENTS.SYNC_EVENT_ACK).setData(n).send(), setTimeout(function () {if (e._onSyncEventFn && t.events && t.events.length > 0) {var n = [];t.events.forEach(function (o) {if (200 === o.event_type) 3 === o.description.type ? e._dealMutlReadEvent(o.description.type, o.ctime_ms, o.description.appkey, o.description.username) : e._dealMutlReadEvent(o.description.type, o.ctime_ms, o.description.gid);else {var i = e.__eventDateFilter(o);56 === t.event_type && 10 == t.extra ? (delete i.extra, i.by_self = !1) : 56 === t.event_type && 59 == t.extra && (delete i.extra, i.by_self = !0), n.push(i);}}), e._onSyncEventFn(n);}}, 1700);}, h.prototype.onSyncMsgReceipt = function (t) {this._onSyncMsgReceiptFn = t;}, h.prototype._onSyncMsgReceipt = function (t) {var e = this;if (e.channel.msg_receipt_key = t.sync_key, e._onSyncMsgReceiptFn && t.receipts && t.receipts.length > 0) {var n = {},o = [];t.receipts.forEach(function (t) {var e = t.gid;if (3 === t.type && (e = t.appkey + t.username), n[e]) {var i = Number(n[e]);Array.prototype.push.apply(o[i].receipt_msgs, t.receipt_msgs);} else t.receipt_msgs.length > 0 && (n[e] = String(o.length), o.push(t));}), setTimeout(function () {e._onSyncMsgReceiptFn && o.length > 0 && e._onSyncMsgReceiptFn(o);}, 1500);}var i = { sync_key: e.channel.msg_receipt_key };new r(e.channel).setEvent(s.EVENTS.SYNC_RECEIPT_ACK).setData(i).send();}, h.prototype.onMsgReceiptChange = function (t) {this._onMsgReceiptChangeFn = t;}, h.prototype._onMsgReceiptChange = function (t) {this._onMsgReceiptChangeFn && this._onMsgReceiptChangeFn(t);}, h.prototype.onUserInfUpdate = function (t) {this._updateInfoEventFun = t;}, h.prototype.onMutiUnreadMsgUpdate = function (t) {this._conversationUpdateFun = t;}, h.prototype.onTransMsgRec = function (t) {this._onTransMsgRecFn = t;}, h.prototype._onTransMsgRec = function (t) {this._onTransMsgRecFn && this._onTransMsgRecFn(t);}, h.prototype.onDisconnect = function (t) {this._onDisconnectFn = t;}, h.prototype._onDisconnect = function () {var t = this;clearTimeout(t.syncTask), clearTimeout(t.msgReceipTask), t.autoDiscon && (t.current_appkey = null, t.current_user = null, t._onDisconnectFn && t._onDisconnectFn()), this.channel.init(this.channel.opts);}, h.prototype._dealMutlReadEvent = function (t, e, n, o) {var i,s = this,r = {};if (r.type = t, 3 === t ? (i = n + o, r.username = o, r.appkey = n) : (i = String(n), r.gid = n), s.conversations[i] = void 0 === s.conversations[i] ? { msg_time: [], unread_msg_count: 0 } : s.conversations[i], s.conversations[i].recent_time = e, s.current_conversation === i) s.conversations[i].unread_msg_count = 0, s.conversations[i].msg_time = [];else {var a = s.conversations[i].unread_msg_count,c = s.conversations[i].msg_time,p = [],h = 0;c.forEach(function (t) {t > e && (h++, p.push(t));}), s.conversations[i].msg_time = p, h < a && (s.conversations[i].unread_msg_count = h, r.unreadCount = h, u.StorageUtils.addItem(s.channel.conversations_key, JSON.stringify(s.conversations)), s._conversationUpdateFun && s._conversationUpdateFun(r));}}, h.prototype._receiptReport = function () {var t = this;if (t.report.length > 0) {var e = {},n = [];t.report.forEach(function (t) {if (e[t.args.key]) {var o = Number(e[t.args.key]);Array.prototype.push.apply(n[o].result.msg_ids, t.args.msg_ids), n[o].msg_reports.push(t);} else e[t.args.key] = String(n.length), n.push({ result: t.args, msg_reports: [t] });}), t.report = [];for (var o = 0; o < n.length; o++) {n[o].result.msg_ids = u.ArrayUtils.delRepeatItem(n[o].result.msg_ids), delete n[o].result.key, t._msgReceipt(n[o]);}}}, h.prototype._msgReceipt = function (t) {new r(this.channel).setEvent(s.EVENTS.RECEIPT_REPORT).setData({ sessions: [t.result] }).send().onSuccess(function (e) {t.msg_reports.forEach(function (t) {t.success && t.success(e, t.args.msg_ids);});}).onFail(function (e) {t.msg_reports.forEach(function (t) {t.fail && t.fail(e, t.args.msg_ids);});}).onAck(function (e) {t.msg_reports.forEach(function (t) {t.ack && t.ack(e, t.args.msg_ids);});}).onTimeout(function (e) {t.msg_reports.forEach(function (t) {t.timeout && t.timeout(e, t.args.msg_ids);});});}, h.prototype.__eventDateFilter = function (t) {var e = {};return e.event_id = t.event_id, e.event_type = t.event_type, e.from_username = t.from_username, e.gid = t.gid, e.to_usernames = t.to_usernames, e.ctime = t.ctime, e.extra = t.extra, e.return_code = t.return_code, e.from_appkey = t.from_appkey, e.msg_ids = t.msg_ids, e.from_gid = t.from_gid, e.msgid_list = t.msgid_list, e.to_groups = t.to_groups, e.new_owner = t.new_owner, e.group_name = t.group_name, e.ctime_ms = t.ctime_ms, e.media_id = t.media_id, e.from_nickname = t.from_nickname, e.from_eventid = t.from_eventid, 100 === t.event_type && 7 === t.extra ? e.description = JSON.parse(t.description) : e.description = t.description, 55 === t.event_type && 0 === t.from_gid ? e.type = 0 : 55 === t.event_type && 0 != t.from_gid && (e.type = 1), e;}, h.prototype.__checkConnect = function () {if (!this.channel.client.connected) throw new Error("wss socket not connect");}, h.prototype.__checkInit = function () {if (!this.current_appkey) throw new Error("必须执行init操作后能执行此动作");}, h.prototype.__checkLogin = function () {if (!this.current_user) throw new Error("必须执行login操作后能执行此动作");}, h.prototype.__getUploadToken = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_UPLOAD_TOKEN).setData({}).send();}, h.prototype.__uploadFile0 = function (t, e) {wx.uploadFile({ url: s.UPLOAD_FILE + "?type=" + t.type, filePath: t.file, name: "file", header: { "X-App-Key": t.appkey, Authorization: "Basic " + o.btoa(t.username + ":" + t.token), "jm-channel": s.PLAT_CHANNEL }, success: function success(t) {if (200 == t.statusCode) e(null, JSON.parse(t.data));else try {var n = JSON.parse(t.data);e(898061 === n.error.code ? { code: 880210, message: "file size exceed limit" } : n);} catch (t) {e({ code: 880210, message: "file size exceed the limit" });}}, fail: function fail(t) {console.error(JSON.parse(t));} });}, h.prototype.__uploadFile = function (t, e) {var n = this;n.__getUploadToken().onSuccess(function (o) {n.__uploadFile0({ type: t.type, file: t.file, appkey: t.appkey, username: t.username, token: o.uptoken }, e);}).onFail(function (t) {e({ data: t });}).onTimeout(function (t) {e({ is_timeout: !0, data: t });});}, h.prototype.__sendMsg = function (t) {return this.__checkLogin(), new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : "group" === t.type ? s.EVENTS.SEND_GROUP_MSG : s.EVENTS.SEND_ROOM_MSG).setData(new c(this.current_user, this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setText(t.content ? t.content : t.msg_body.text, t.content ? t.extras : t.msg_body.extras).setAtList(t.at_list).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification).build()).send();}, h.prototype.__sendPic = function (t) {this.__checkLogin();var e = new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : "group" === t.type ? s.EVENTS.SEND_GROUP_MSG : s.EVENTS.SEND_ROOM_MSG),n = this,o = new c(n.current_user, n.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification);return t.file ? this.__uploadFile({ appkey: n.current_appkey, username: n.current_user, file: t.file, type: "image" }, function (n, i) {return n ? n.is_timeout ? e.timeout && e.timeout(n.data) : e.fail && e.fail(n.data) : void e.setData(o.setImage(i, t.extras).build()).send();}) : e.setData(o.setImage(t.msg_body, t.msg_body.extras).build()).send(), e;}, h.prototype.__sendVideoOrFile = function (t, e) {this.__checkLogin();var n = new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : "group" === t.type ? s.EVENTS.SEND_GROUP_MSG : s.EVENTS.SEND_ROOM_MSG),o = this,i = new c(o.current_user, o.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification);return t.file ? this.__uploadFile({ appkey: o.current_appkey, username: o.current_user, file: t.file, type: "file" }, function (o, s) {return o ? o.is_timeout ? n.timeout && n.timeout(o.data) : n.fail && n.fail(o.data) : ("video" === e && (!t.extras && (t.extras = {}), t.extras.video = s.media_id.slice(s.media_id.lastIndexOf(".") + 1)), void n.setData(i.setFile(s, t.extras).build()).send());}) : n.setData(i.setFile(t.msg_body, t.msg_body.extras).build()).send(), n;}, h.prototype.__sendVoice = function (t) {this.__checkLogin();var e = new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : s.EVENTS.SEND_GROUP_MSG),n = this,o = new c(n.current_user, n.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification);return t.file ? this.__uploadFile({ appkey: n.current_appkey, username: n.current_user, file: t.file, type: "voice" }, function (n, i) {return n ? n.is_timeout ? e.timeout && e.timeout(n.data) : e.fail && e.fail(n.data) : void e.setData(o.setVoice(i, t.extras).build()).send();}) : e.setData(o.setVoice(t.msg_body, t.msg_body.extras).build()).send(), e;}, h.prototype.__sendLocation = function (t) {return this.__checkLogin(), new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : "group" === t.type ? s.EVENTS.SEND_GROUP_MSG : s.EVENTS.SEND_ROOM_MSG).setData(new c(this.current_user, this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setLocation(t.latitude ? t : t.msg_body, t.latitude ? t.extras : t.msg_body.extras).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification).build()).send();}, h.prototype.__sendCustom = function (t) {return this.__checkLogin(), new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : "group" === t.type ? s.EVENTS.SEND_GROUP_MSG : s.EVENTS.SEND_ROOM_MSG).setData(new c(this.current_user, this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setCustom(t.custom ? t.custom : t.msg_body, t.custom ? t.extras : t.msg_body.extras).setCustom(t.custom).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification).build()).send();
    }, t.exports = h;}, function (t, e) {"use strict";t.exports = function () {function t(t, e) {var n = (65535 & t) + (65535 & e),o = (t >> 16) + (e >> 16) + (n >> 16);return o << 16 | 65535 & n;}function e(t, e) {return t << e | t >>> 32 - e;}function n(n, o, i, s, r, a) {return t(e(t(t(o, n), t(s, a)), r), i);}function o(t, e, o, i, s, r, a) {return n(e & o | ~e & i, t, e, s, r, a);}function i(t, e, o, i, s, r, a) {return n(e & i | o & ~i, t, e, s, r, a);}function s(t, e, o, i, s, r, a) {return n(e ^ o ^ i, t, e, s, r, a);}function r(t, e, o, i, s, r, a) {return n(o ^ (e | ~i), t, e, s, r, a);}function a(e, n) {e[n >> 5] |= 128 << n % 32, e[(n + 64 >>> 9 << 4) + 14] = n;var a,c,p,u,h,_ = 1732584193,f = -271733879,d = -1732584194,l = 271733878;for (a = 0; a < e.length; a += 16) {c = _, p = f, u = d, h = l, _ = o(_, f, d, l, e[a], 7, -680876936), l = o(l, _, f, d, e[a + 1], 12, -389564586), d = o(d, l, _, f, e[a + 2], 17, 606105819), f = o(f, d, l, _, e[a + 3], 22, -1044525330), _ = o(_, f, d, l, e[a + 4], 7, -176418897), l = o(l, _, f, d, e[a + 5], 12, 1200080426), d = o(d, l, _, f, e[a + 6], 17, -1473231341), f = o(f, d, l, _, e[a + 7], 22, -45705983), _ = o(_, f, d, l, e[a + 8], 7, 1770035416), l = o(l, _, f, d, e[a + 9], 12, -1958414417), d = o(d, l, _, f, e[a + 10], 17, -42063), f = o(f, d, l, _, e[a + 11], 22, -1990404162), _ = o(_, f, d, l, e[a + 12], 7, 1804603682), l = o(l, _, f, d, e[a + 13], 12, -40341101), d = o(d, l, _, f, e[a + 14], 17, -1502002290), f = o(f, d, l, _, e[a + 15], 22, 1236535329), _ = i(_, f, d, l, e[a + 1], 5, -165796510), l = i(l, _, f, d, e[a + 6], 9, -1069501632), d = i(d, l, _, f, e[a + 11], 14, 643717713), f = i(f, d, l, _, e[a], 20, -373897302), _ = i(_, f, d, l, e[a + 5], 5, -701558691), l = i(l, _, f, d, e[a + 10], 9, 38016083), d = i(d, l, _, f, e[a + 15], 14, -660478335), f = i(f, d, l, _, e[a + 4], 20, -405537848), _ = i(_, f, d, l, e[a + 9], 5, 568446438), l = i(l, _, f, d, e[a + 14], 9, -1019803690), d = i(d, l, _, f, e[a + 3], 14, -187363961), f = i(f, d, l, _, e[a + 8], 20, 1163531501), _ = i(_, f, d, l, e[a + 13], 5, -1444681467), l = i(l, _, f, d, e[a + 2], 9, -51403784), d = i(d, l, _, f, e[a + 7], 14, 1735328473), f = i(f, d, l, _, e[a + 12], 20, -1926607734), _ = s(_, f, d, l, e[a + 5], 4, -378558), l = s(l, _, f, d, e[a + 8], 11, -2022574463), d = s(d, l, _, f, e[a + 11], 16, 1839030562), f = s(f, d, l, _, e[a + 14], 23, -35309556), _ = s(_, f, d, l, e[a + 1], 4, -1530992060), l = s(l, _, f, d, e[a + 4], 11, 1272893353), d = s(d, l, _, f, e[a + 7], 16, -155497632), f = s(f, d, l, _, e[a + 10], 23, -1094730640), _ = s(_, f, d, l, e[a + 13], 4, 681279174), l = s(l, _, f, d, e[a], 11, -358537222), d = s(d, l, _, f, e[a + 3], 16, -722521979), f = s(f, d, l, _, e[a + 6], 23, 76029189), _ = s(_, f, d, l, e[a + 9], 4, -640364487), l = s(l, _, f, d, e[a + 12], 11, -421815835), d = s(d, l, _, f, e[a + 15], 16, 530742520), f = s(f, d, l, _, e[a + 2], 23, -995338651), _ = r(_, f, d, l, e[a], 6, -198630844), l = r(l, _, f, d, e[a + 7], 10, 1126891415), d = r(d, l, _, f, e[a + 14], 15, -1416354905), f = r(f, d, l, _, e[a + 5], 21, -57434055), _ = r(_, f, d, l, e[a + 12], 6, 1700485571), l = r(l, _, f, d, e[a + 3], 10, -1894986606), d = r(d, l, _, f, e[a + 10], 15, -1051523), f = r(f, d, l, _, e[a + 1], 21, -2054922799), _ = r(_, f, d, l, e[a + 8], 6, 1873313359), l = r(l, _, f, d, e[a + 15], 10, -30611744), d = r(d, l, _, f, e[a + 6], 15, -1560198380), f = r(f, d, l, _, e[a + 13], 21, 1309151649), _ = r(_, f, d, l, e[a + 4], 6, -145523070), l = r(l, _, f, d, e[a + 11], 10, -1120210379), d = r(d, l, _, f, e[a + 2], 15, 718787259), f = r(f, d, l, _, e[a + 9], 21, -343485551), _ = t(_, c), f = t(f, p), d = t(d, u), l = t(l, h);}return [_, f, d, l];}function c(t) {var e,n = "";for (e = 0; e < 32 * t.length; e += 8) {n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);}return n;}function p(t) {var e,n = [];for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) {n[e] = 0;}for (e = 0; e < 8 * t.length; e += 8) {n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;}return n;}function u(t) {return c(a(p(t), 8 * t.length));}function h(t, e) {var n,o,i = p(t),s = [],r = [];for (s[15] = r[15] = void 0, i.length > 16 && (i = a(i, 8 * t.length)), n = 0; n < 16; n += 1) {s[n] = 909522486 ^ i[n], r[n] = 1549556828 ^ i[n];}return o = a(s.concat(p(e)), 512 + 8 * e.length), c(a(r.concat(o), 640));}function _(t) {var e,n,o = "0123456789abcdef",i = "";for (n = 0; n < t.length; n += 1) {e = t.charCodeAt(n), i += o.charAt(e >>> 4 & 15) + o.charAt(15 & e);}return i;}function f(t) {return unescape(encodeURIComponent(t));}function d(t) {return u(f(t));}function l(t) {return _(d(t));}function g(t, e) {return h(f(t), f(e));}function m(t, e) {return _(g(t, e));}function y(t, e, n) {return e ? n ? g(e, t) : m(e, t) : n ? d(t) : l(t);}return y;};}, function (t, e, n) {"use strict";var o = n(4),i = function i(t) {this.channel = t, this.rid = this.channel.generateRid(), this.times = 1;};i.prototype.setEvent = function (t) {return this.event = t, this;}, i.prototype.setData = function (t) {return this.data = t, this;}, i.prototype.onSuccess = function (t) {return "function" == typeof t && (this.success = t), this;}, i.prototype.onFail = function (t) {return "function" == typeof t && (this.fail = t), this;}, i.prototype.onTimeout = function (t) {if ("function" == typeof t) {this.timeout = t;var e = this;this.respTimeoutTaskId = setTimeout(function () {e.respTimeoutTask();}, o.RESP_TIMEOUT);}return this;}, i.prototype.onAck = function (t) {return "function" == typeof t && (this.ack = t), this;}, i.prototype.onInnerCall = function (t) {return "function" == typeof t && (this.innerCall = t), this;}, i.prototype.onUserInfoGet = function (t) {return "function" == typeof t && (this.userInfoGet = t), this;}, i.prototype.addHook = function (t) {return "function" == typeof t && (this.hook = t), this;}, i.prototype.ackTimeoutTask = function () {if (this.times < o.RETRY_TIMES) {this.channel.send(this.event, this._data), this.times++;var t = this;this.ackTimeoutTaskId = setTimeout(function () {t.ackTimeoutTask();}, o.ACK_TIMEOUT);} else this.timeout && this.timeout({ rid: this.rid, data: this.data, response_timeout: !1 }), delete this.channel.dataCache[this.rid];return this;}, i.prototype.respTimeoutTask = function () {if (this.times < o.RETRY_TIMES) {this.channel.send(this.event, this._data), this.times++;var t = this;this.respTimeoutTaskId = setTimeout(function () {t.respTimeoutTask();}, o.RESP_TIMEOUT);} else this.timeout && this.timeout({ rid: this.rid, data: this.data, response_timeout: !0 }), delete this.channel.dataCache[this.rid];return this;}, i.prototype.cleanAckTimeout = function () {return this.ackTimeoutTaskId && clearTimeout(this.ackTimeoutTaskId), this;}, i.prototype.cleanRespTimeout = function () {return this.respTimeoutTaskId && clearTimeout(this.respTimeoutTaskId), this;}, i.prototype.send = function () {if (!this.event || !this.data) return void console.error("发send fail，event and data can not empty");var t = this;return this.ackTimeoutTaskId = setTimeout(function () {t.ackTimeoutTask();}, o.ACK_TIMEOUT), this._data = JSON.parse(JSON.stringify(this.data)), this._data.rid = this.rid, this.channel.send(this.event, this._data), this.channel.dataCache[this.rid] = this, this;}, t.exports = i;}, function (t, e) {"use strict";var n = function n(t, e) {this.current_user = t, this.current_appkey = e, this.version = 1, this.from_platform = "web";};n.prototype.setNeedReceipt = function (t) {return this.need_receipt = t, this;}, n.prototype.setNoOffline = function (t) {return this.no_offline = t, this;}, n.prototype.setNoNotification = function (t) {return this.no_notification = t, this;}, n.prototype.setType = function (t) {return this.type = t, this;}, n.prototype.setAtList = function (t) {return this.at_list = t, this;}, n.prototype.setAppkey = function (t) {return t && (this.appkey = t), this;}, n.prototype.setTarget = function (t, e) {return this.target_id = t.toString(), this.target_name = e, this;}, n.prototype.setFromName = function (t) {return this.from_name = t, this;}, n.prototype.setText = function (t, e) {return this.msg_type = "text", this.msg_body = { text: t }, e && (this.msg_body.extras = e), this;}, n.prototype.setImage = function (t, e) {return this.msg_type = "image", this.msg_body = { media_id: t.media_id, media_crc32: t.media_crc32, width: t.width, height: t.height, format: t.format, fsize: t.fsize }, e && (this.msg_body.extras = e), this;}, n.prototype.setFile = function (t, e) {return this.msg_type = "file", this.msg_body = { media_id: t.media_id, media_crc32: t.media_crc32, hash: t.hash, fsize: t.fsize, fname: t.fname }, e && (this.msg_body.extras = e), this;}, n.prototype.setVoice = function (t, e) {return this.msg_type = "voice", this.msg_body = { media_id: t.media_id, media_crc32: t.media_crc32, hash: t.hash, fsize: t.fsize, duration: t.duration, format: t.format }, e && (this.msg_body.extras = e), this;}, n.prototype.setCustomNotification = function (t) {return t && (this.custom_notification = t), this;}, n.prototype.setLocation = function (t, e) {return this.msg_type = "location", this.msg_body = { latitude: t.latitude, longitude: t.longitude, scale: t.scale, label: t.label }, e && (this.msg_body.extras = e), this;}, n.prototype.setCustom = function (t) {return this.msg_type = "custom", this.msg_body = t, this;}, n.prototype.build = function () {var t = this.current_user;if ("single" != this.type && "group" != this.type && "across_single" != this.type && "chatroom" != this.type) return console.log("type must be single or group or chatroom");if (!this.target_id) return console.error("target_id must not null");if ("text" == this.msg_type) {if (!this.msg_body.text && this.at_list && "single" != this.type) this.msg_body.text = " ";else if (!this.msg_body.text && !this.at_list) return console.error("未设置文本消息内容");} else if ("custom" == this.msg_type) {if (!this.msg_body) return console.error("custom对象不能为空");} else if ("image" == this.msg_type) {if (!this.msg_body.media_id) return console.error("未设置image消息media_id字段");if (!this.msg_body.media_crc32) return console.error("未设置image消息media_crc32字段");if (!this.msg_body.width) return console.error("未设置image消息width字段");if (!this.msg_body.height) return console.error("未设置image消息height字段");} else if ("file" == this.msg_type) {if (!this.msg_body.media_id) return console.error("未设置file消息media_id字段");if (!this.msg_body.media_crc32) return console.error("未设置file消息media_crc32字段");if (!this.msg_body.fsize) return console.error("未设置file消息fsize字段");if (!this.msg_body.fname) return console.error("未设置file消息fname字段");} else if ("location" == this.msg_type) {if (!this.msg_body.latitude) return console.error("未设置location消息latitude字段");if (!this.msg_body.longitude) return console.error("未设置location消息longitude字段");if (!this.msg_body.scale) return console.error("未设置location消息scale字段");if (!this.msg_body.label) return console.error("未设置location消息label字段");} else {if ("voice" != this.msg_type) return console.error("请设置合法的msg_type");if (!this.msg_body.media_id) return console.error("未设置voice消息media_id字段");if (!this.msg_body.media_crc32) return console.error("未设置voice消息media_crc32字段");}var e = { version: this.version, target_type: this.type, from_platform: this.from_platform, target_id: this.target_id, target_name: this.target_name, from_id: t, from_name: this.from_name, create_time: new Date().getTime(), msg_type: this.msg_type, msg_body: this.msg_body };this.appkey && (e.target_appkey = this.appkey, e.from_appkey = this.current_appkey);var n = { content: e };if (n.no_offline = this.no_offline, n.no_notification = this.no_notification, n.custom_notification = this.custom_notification, n.target_name = e.target_name, n.need_receipt = this.need_receipt, "single" == e.target_type) n.target_name = e.target_id;else if (n.target_gid = e.target_id, this.at_list && this.at_list instanceof Array) n.users = this.at_list;else if (this.at_list && !(this.at_list instanceof Array)) return console.error("参数值不合法，at_list必须为数组类型");return this.appkey ? n.appkey = this.appkey : n.appkey = this.current_appkey, n;}, t.exports = n;}, function (t, e) {"use strict";var n = function n(t) {this.args = t;};n.prototype.onSuccess = function (t) {return "function" == typeof t && (this.success = t), this;}, n.prototype.onFail = function (t) {return "function" == typeof t && (this.fail = t), this;}, n.prototype.onTimeout = function (t) {return "function" == typeof t && (this.timeout = t), this;}, n.prototype.onAck = function (t) {return "function" == typeof t && (this.ack = t), this;}, t.exports = n;}, function (t, e) {"use strict";var n = {};n.isBlack = function (t) {return !(t && "string" == typeof t && t.length > 0);};var o = {};o.addItem = function (t, e) {wx.setStorage({ key: t.toString(), data: e });}, o.removeItems = function (t) {wx.getStorageInfo({ success: function success(e) {var n = e.keys,o = [];n.forEach(function (e) {try {var n = wx.getStorageSync(e);n === t && o.push(e);} catch (t) {}}), o.forEach(function (t) {wx.removeStorage({ key: t, success: function success(t) {} });});} });}, o.getItem = function (t) {return wx.getStorageSync(t);};var i = {};i.delRepeatItem = function (t) {var e = [];return t.forEach(function (t) {e.indexOf(t) === -1 && null != t && e.push(t);}), e;};var s = {};s.rooms = {}, t.exports = { StringUtils: n, StorageUtils: o, ArrayUtils: i, Cache: s };}, function (t, e, n) {var o = n(26);e.protocol = 3;var i = e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 },s = o(i),r = { type: "error", data: "parser error" };e.encodePacket = function (t, e, n, o) {"function" == typeof n && (o = n, n = null);var s = i[t.type];return void 0 !== t.data && (s += String(t.data)), o("" + s);}, e.decodePacket = function (t, e, n) {if (void 0 === t) return r;if ("string" == typeof t) {var o = t.charAt(0);return Number(o) == o && s[o] ? t.length > 1 ? { type: s[o], data: t.substring(1) } : { type: s[o] } : r;}};}, function (t, e) {t.exports = Object.keys || function (t) {var e = [],n = Object.prototype.hasOwnProperty;for (var o in t) {n.call(t, o) && e.push(o);}return e;};}, function (t, e, n) {t.exports = n(30), t.exports.parser = n(2);}, function (t, e, n) {function o(t, e) {"object" == typeof t && (e = t, t = void 0), e = e || {};var n,o = s(t),r = o.source,u = o.id,h = o.path,_ = p[u] && h in p[u].nsps,f = e.forceNew || e["force new connection"] || !1 === e.multiplex || _;return f ? (c("ignoring socket cache for %s", r), n = a(r, e)) : (p[u] || (c("new io instance for %s", r), p[u] = a(r, e)), n = p[u]), o.query && !e.query ? e.query = o.query : e && "object" == typeof e.query && (e.query = i(e.query)), n.socket(o.path, e);}function i(t) {var e = [];for (var n in t) {t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));}return e.join("&");}var s = n(29),r = n(5),a = n(6),c = n(1)("socket.io-client");t.exports = e = o;var p = e.managers = {};e.protocol = r.protocol, e.connect = o, e.Manager = n(6), e.Socket = n(8);}, function (t, e, n) {function o(t, e) {var n = t;null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (s("protocol-less url %s", t), t = "undefined" != typeof e ? e.protocol + "//" + t : "https://" + t), s("parse %s", t), n = i(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";var o = n.host.indexOf(":") !== -1,r = o ? "[" + n.host + "]" : n.host;return n.id = n.protocol + "://" + r + ":" + n.port, n.href = n.protocol + "://" + r + (e && e.port === n.port ? "" : ":" + n.port), n;}var i = n(15),s = n(1)("socket.io-client:url");t.exports = o;}, function (t, e, n) {function o(t, e) {return this instanceof o ? (e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = u(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = u(e.host).host), this.secure = !0, this.port = "443", this.agent = e.agent || !1, this.hostname = e.hostname, this.port = e.port, this.query = e.query || {}, "string" == typeof this.query && (this.query = _.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized ? null : e.rejectUnauthorized, this.forceNode = !!e.forceNode, this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, void this.open()) : new o(t, e);}function i(t) {var e = {};for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}return e;}var s = n(10),r = n(3),a = n(1)("engine.io-client:socket"),c = n(12),p = n(2),u = n(15),h = n(37),_ = n(14);t.exports = o, o.priorWebsocketSuccess = !1, r(o.prototype), o.protocol = p.protocol, o.Socket = o, o.Transport = n(9), o.transports = n(10), o.parser = n(2), o.prototype.createTransport = function (t) {a('creating transport "%s"', t);var e = i(this.query);e.EIO = p.protocol, e.transport = t, this.id && (e.sid = this.id);var n = new s({ agent: this.agent, hostname: this.hostname, port: this.port, secure: this.secure, path: this.path, query: e, forceJSONP: this.forceJSONP, jsonp: this.jsonp, forceBase64: this.forceBase64, enablesXDR: this.enablesXDR, timestampRequests: this.timestampRequests, timestampParam: this.timestampParam, policyPort: this.policyPort, socket: this, pfx: this.pfx, key: this.key, passphrase: this.passphrase, cert: this.cert, ca: this.ca, ciphers: this.ciphers, rejectUnauthorized: this.rejectUnauthorized, perMessageDeflate: this.perMessageDeflate, extraHeaders: this.extraHeaders, forceNode: this.forceNode, localAddress: this.localAddress });return n;}, o.prototype.open = function () {var t = "websocket";this.readyState = "opening";try {t = this.createTransport(t);} catch (t) {return this.transports.shift(), void this.open();}t.open(), this.setTransport(t);}, o.prototype.setTransport = function (t) {a("setting transport %s", t.name);var e = this;this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {e.onDrain();}).on("packet", function (t) {e.onPacket(t);}).on("error", function (t) {e.onError(t);}).on("close", function () {e.onClose("transport close");});}, o.prototype.probe = function (t) {function e() {if (_.onlyBinaryUpgrades) {var e = !this.supportsBinary && _.transport.supportsBinary;h = h || e;}h || (a('probe transport "%s" opened', t), u.send([{ type: "ping", data: "probe" }]), u.once("packet", function (e) {if (!h) if ("pong" === e.type && "probe" === e.data) {if (a('probe transport "%s" pong', t), _.upgrading = !0, _.emit("upgrading", u), !u) return;o.priorWebsocketSuccess = "websocket" === u.name, a('pausing current transport "%s"', _.transport.name), _.transport.pause(function () {h || "closed" !== _.readyState && (a("changing transport and sending upgrade packet"), p(), _.setTransport(u), u.send([{ type: "upgrade" }]), _.emit("upgrade", u), u = null, _.upgrading = !1, _.flush());});} else {a('probe transport "%s" failed', t);var n = new Error("probe error");n.transport = u.name, _.emit("upgradeError", n);}}));}function n() {h || (h = !0, p(), u.close(), u = null);}function i(e) {var o = new Error("probe error: " + e);o.transport = u.name, n(), a('probe transport "%s" failed because of error: %s', t, e), _.emit("upgradeError", o);}function s() {i("transport closed");}function r() {i("socket closed");}function c(t) {u && t.name !== u.name && (a('"%s" works - aborting "%s"', t.name, u.name), n());}function p() {u.removeListener("open", e), u.removeListener("error", i), u.removeListener("close", s), _.removeListener("close", r), _.removeListener("upgrading", c);}a('probing transport "%s"', t);var u = this.createTransport(t, { probe: 1 }),h = !1,_ = this;o.priorWebsocketSuccess = !1, u.once("open", e), u.once("error", i), u.once("close", s), this.once("close", r), this.once("upgrading", c), u.open();}, o.prototype.onOpen = function () {if (this.readyState = "open", o.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {a("starting upgrade probes");for (var t = 0, e = this.upgrades.length; t < e; t++) {this.probe(this.upgrades[t]);}}}, o.prototype.onPacket = function (t) {if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {case "open":this.onHandshake(h(t.data));break;case "pong":this.setPing(), this.emit("pong");break;case "error":var e = new Error("server error");e.code = t.data, this.onError(e);break;case "message":this.emit("data", t.data), this.emit("message", t.data);} else a('packet received with socket readyState "%s"', this.readyState);}, o.prototype.onHandshake = function (t) {this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));}, o.prototype.onHeartbeat = function (t) {clearTimeout(this.pingTimeoutTimer);var e = this;e.pingTimeoutTimer = setTimeout(function () {"closed" !== e.readyState && e.onClose("ping timeout");}, t || e.pingInterval + e.pingTimeout);}, o.prototype.setPing = function () {var t = this;clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {a("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout);}, t.pingInterval);}, o.prototype.ping = function () {var t = this;this.sendPacket("ping", function () {t.emit("ping");});}, o.prototype.onDrain = function () {this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();}, o.prototype.flush = function () {"closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));}, o.prototype.write = o.prototype.send = function (t, e, n) {return this.sendPacket("message", t, e, n), this;}, o.prototype.sendPacket = function (t, e, n, o) {if ("function" == typeof e && (o = e, e = void 0), "function" == typeof n && (o = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {n = n || {}, n.compress = !1 !== n.compress;var i = { type: t, data: e, options: n };this.emit("packetCreate", i), this.writeBuffer.push(i), o && this.once("flush", o), this.flush();}}, o.prototype.close = function () {function t() {o.onClose("forced close"), a("socket closing - telling transport to close"), o.transport.close();}function e() {o.removeListener("upgrade", e), o.removeListener("upgradeError", e), t();}function n() {o.once("upgrade", e), o.once("upgradeError", e);}if ("opening" === this.readyState || "open" === this.readyState) {this.readyState = "closing";var o = this;this.writeBuffer.length ? this.once("drain", function () {this.upgrading ? n() : t();}) : this.upgrading ? n() : t();}return this;}, o.prototype.onError = function (t) {a("socket error %j", t), o.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);}, o.prototype.onClose = function (t, e) {if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {a('socket close with reason: "%s"', t);var n = this;clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), n.writeBuffer = [], n.prevBufferLen = 0;}}, o.prototype.filterUpgrades = function (t) {for (var e = [], n = 0, o = t.length; n < o; n++) {~c(this.transports, t[n]) && e.push(t[n]);}return e;};}, function (t, e, n) {!function () {function t(t) {this.message = t;}var n = e,o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype = new Error(), t.prototype.name = "InvalidCharacterError", n.btoa || (n.btoa = function (e) {for (var n, i, s = String(e), r = 0, a = o, c = ""; s.charAt(0 | r) || (a = "=", r % 1); c += a.charAt(63 & n >> 8 - r % 1 * 8)) {if (i = s.charCodeAt(r += .75), i > 255) throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n = n << 8 | i;}return c;}), n.atob || (n.atob = function (e) {var n = String(e).replace(/=+$/, "");if (n.length % 4 == 1) throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for (var i, s, r = 0, a = 0, c = ""; s = n.charAt(a++); ~s && (i = r % 4 ? 64 * i + s : s, r++ % 4) ? c += String.fromCharCode(255 & i >> (-2 * r & 6)) : 0) {s = o.indexOf(s);}return c;});}();}, function (t, e) {function n(t) {t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;}t.exports = n, n.prototype.duration = function () {var t = this.ms * Math.pow(this.factor, this.attempts++);if (this.jitter) {var e = Math.random(),n = Math.floor(e * this.jitter * t);t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;}return 0 | Math.min(t, this.max);}, n.prototype.reset = function () {this.attempts = 0;}, n.prototype.setMin = function (t) {this.ms = t;}, n.prototype.setMax = function (t) {this.max = t;}, n.prototype.setJitter = function (t) {this.jitter = t;};}, function (t, e) {t.exports = function (t, e) {var n = function n() {};n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;};}, function (t, e, n) {function o() {return e.colors[u++ % e.colors.length];}function i(t) {function n() {}function i() {var t = i,n = +new Date(),s = n - (p || n);t.diff = s, t.prev = p, t.curr = n, p = n, null == t.useColors && (t.useColors = e.useColors()), null == t.color && t.useColors && (t.color = o());for (var r = new Array(arguments.length), a = 0; a < r.length; a++) {r[a] = arguments[a];}r[0] = e.coerce(r[0]), "string" != typeof r[0] && (r = ["%o"].concat(r));var c = 0;r[0] = r[0].replace(/%([a-z%])/g, function (n, o) {if ("%%" === n) return n;c++;var i = e.formatters[o];if ("function" == typeof i) {var s = r[c];n = i.call(t, s), r.splice(c, 1), c--;}return n;}), r = e.formatArgs.apply(t, r);var u = i.log || e.log || console.log.bind(console);u.apply(t, r);}n.enabled = !1, i.enabled = !0;var s = e.enabled(t) ? i : n;return s.namespace = t, s;}function s(t) {e.save(t);for (var n = (t || "").split(/[\s,]+/), o = n.length, i = 0; i < o; i++) {n[i] && (t = n[i].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));}}function r() {e.enable("");}function a(t) {var n, o;for (n = 0, o = e.skips.length; n < o; n++) {if (e.skips[n].test(t)) return !1;}for (n = 0, o = e.names.length; n < o; n++) {if (e.names[n].test(t)) return !0;}return !1;}function c(t) {return t instanceof Error ? t.stack || t.message : t;}e = t.exports = i.debug = i, e.coerce = c, e.disable = r, e.enable = s, e.enabled = a, e.humanize = n(36), e.names = [], e.skips = [], e.formatters = {};var p,u = 0;}, function (t, e, n) {(function (e) {function o(t) {function n(t) {if (!t) return !1;if (e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer || e.Blob && t instanceof Blob || e.File && t instanceof File) return !0;if (i(t)) {for (var o = 0; o < t.length; o++) {if (n(t[o])) return !0;}} else if (t && "object" == typeof t) {t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());for (var s in t) {if (Object.prototype.hasOwnProperty.call(t, s) && n(t[s])) return !0;}}return !1;}return n(t);}var i = n(13);t.exports = o;}).call(e, function () {return this;}());}, function (t, e) {function n(t) {if (t = String(t), !(t.length > 1e4)) {var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if (e) {var n = parseFloat(e[1]),o = (e[2] || "ms").toLowerCase();switch (o) {case "years":case "year":case "yrs":case "yr":case "y":return n * u;case "days":case "day":case "d":return n * p;case "hours":case "hour":case "hrs":case "hr":case "h":return n * c;case "minutes":case "minute":case "mins":case "min":case "m":return n * a;case "seconds":case "second":case "secs":case "sec":case "s":return n * r;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":return n;default:return;}}}}function o(t) {return t >= p ? Math.round(t / p) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= r ? Math.round(t / r) + "s" : t + "ms";}function i(t) {return s(t, p, "day") || s(t, c, "hour") || s(t, a, "minute") || s(t, r, "second") || t + " ms";}function s(t, e, n) {if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s";}var r = 1e3,a = 60 * r,c = 60 * a,p = 24 * c,u = 365.25 * p;t.exports = function (t, e) {e = e || {};var s = typeof t;if ("string" === s && t.length > 0) return n(t);if ("number" === s && isNaN(t) === !1) return e.long ? i(t) : o(t);throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));};}, function (t, e) {var n = /^\s+/,o = /\s+$/;t.exports = function (t) {return "string" == typeof t && t ? (t = t.replace(n, "").replace(o, ""), JSON.parse(t)) : null;};}, function (t, e) {function n() {throw new Error("setTimeout has not been defined");}function o() {throw new Error("clearTimeout has not been defined");}function i(t) {if (u === setTimeout) return setTimeout(t, 0);if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);try {return u(t, 0);} catch (e) {try {return u.call(null, t, 0);} catch (e) {return u.call(this, t, 0);}}}function s(t) {if (h === clearTimeout) return clearTimeout(t);if ((h === o || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);try {return h(t);} catch (e) {try {return h.call(null, t);} catch (e) {return h.call(this, t);}}}function r() {l && f && (l = !1, f.length ? d = f.concat(d) : g = -1, d.length && a());}function a() {if (!l) {var t = i(r);l = !0;for (var e = d.length; e;) {for (f = d, d = []; ++g < e;) {f && f[g].run();}g = -1, e = d.length;}f = null, l = !1, s(t);}}function c(t, e) {this.fun = t, this.array = e;}function p() {}var u,h,_ = t.exports = {};!function () {try {u = "function" == typeof setTimeout ? setTimeout : n;} catch (t) {u = n;}try {h = "function" == typeof clearTimeout ? clearTimeout : o;} catch (t) {h = o;}}();var f,d = [],l = !1,g = -1;_.nextTick = function (t) {var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {e[n - 1] = arguments[n];}d.push(new c(t, e)), 1 !== d.length || l || i(a);}, c.prototype.run = function () {this.fun.apply(null, this.array);}, _.title = "browser", _.browser = !0, _.env = {}, _.argv = [], _.version = "", _.versions = {}, _.on = p, _.addListener = p, _.once = p, _.off = p, _.removeListener = p, _.removeAllListeners = p, _.emit = p, _.binding = function (t) {throw new Error("process.binding is not supported");}, _.cwd = function () {return "/";}, _.chdir = function (t) {throw new Error("process.chdir is not supported");}, _.umask = function () {return 0;};}, function (t, e, n) {(function (t) {var o = n(13),i = n(16);e.deconstructPacket = function (t) {function e(t) {if (!t) return t;if (i(t)) {var s = { _placeholder: !0, num: n.length };return n.push(t), s;}if (o(t)) {for (var r = new Array(t.length), a = 0; a < t.length; a++) {r[a] = e(t[a]);}return r;}if ("object" == typeof t && !(t instanceof Date)) {var r = {};for (var c in t) {r[c] = e(t[c]);}return r;}return t;}var n = [],s = t.data,r = t;return r.data = e(s), r.attachments = n.length, { packet: r, buffers: n };}, e.reconstructPacket = function (t, e) {function n(t) {if (t && t._placeholder) {var i = e[t.num];return i;}if (o(t)) {for (var s = 0; s < t.length; s++) {t[s] = n(t[s]);}return t;}if (t && "object" == typeof t) {for (var r in t) {t[r] = n(t[r]);}return t;}return t;}return t.data = n(t.data), t.attachments = void 0, t;}, e.removeBlobs = function (e, n) {function s(e, c, p) {if (!e) return e;if (t.Blob && e instanceof Blob || t.File && e instanceof File) {r++;var u = new FileReader();u.onload = function () {p ? p[c] = this.result : a = this.result, --r || n(a);}, u.readAsArrayBuffer(e);} else if (o(e)) for (var h = 0; h < e.length; h++) {s(e[h], h, e);} else if (e && "object" == typeof e && !i(e)) for (var _ in e) {s(e[_], _, e);}}var r = 0,a = e;s(a), r || n(a);};}).call(e, function () {return this;}());}, function (t, e) {function n(t) {if (t) return o(t);}function o(t) {for (var e in n.prototype) {t[e] = n.prototype[e];}return t;}t.exports = n, n.prototype.on = n.prototype.addEventListener = function (t, e) {return this._callbacks = this._callbacks || {}, (this._callbacks[t] = this._callbacks[t] || []).push(e), this;}, n.prototype.once = function (t, e) {function n() {o.off(t, n), e.apply(this, arguments);}var o = this;return this._callbacks = this._callbacks || {}, n.fn = e, this.on(t, n), this;}, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var n = this._callbacks[t];if (!n) return this;if (1 == arguments.length) return delete this._callbacks[t], this;for (var o, i = 0; i < n.length; i++) {if (o = n[i], o === e || o.fn === e) {n.splice(i, 1);break;}}return this;}, n.prototype.emit = function (t) {this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),n = this._callbacks[t];if (n) {n = n.slice(0);for (var o = 0, i = n.length; o < i; ++o) {n[o].apply(this, e);}}return this;}, n.prototype.listeners = function (t) {return this._callbacks = this._callbacks || {}, this._callbacks[t] || [];}, n.prototype.hasListeners = function (t) {return !!this.listeners(t).length;};}, function (t, e) {function n(t, e) {var n = [];e = e || 0;for (var o = e || 0; o < t.length; o++) {n[o - e] = t[o];}return n;}t.exports = n;}, function (t, e) {"use strict";function n(t) {var e = "";do {e = r[t % a] + e, t = Math.floor(t / a);} while (t > 0);return e;}function o(t) {var e = 0;for (u = 0; u < t.length; u++) {e = e * a + c[t.charAt(u)];}return e;}function i() {var t = n(+new Date());return t !== s ? (p = 0, s = t) : t + "." + n(p++);}for (var s, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, p = 0, u = 0; u < a; u++) {c[r[u]] = u;}i.encode = n, i.decode = o, t.exports = i;}]);});

/***/ }),

/***/ 13:
/*!**********************************************************!*\
  !*** D:/Git/wxapp/mini-village/js_sdk/js-md5/src/md5.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__; /**
               * [js-md5]{@link https://github.com/emn178/js-md5}
               *
               * @namespace md5
               * @version 0.7.3
               * @author Chen, Yi-Cyuan [emn178@gmail.com]
               * @copyright Chen, Yi-Cyuan 2014-2017
               * @license MIT
               */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_MD5_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ 16);
  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [128, 32768, 8388608, -2147483648];
  var SHIFT = [0, 8, 16, 24];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];
  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

  var blocks = [],buffer8;
  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    buffer8 = new Uint8Array(buffer);
    blocks = new Uint32Array(buffer);
  }

  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  /**
     * @method hex
     * @memberof md5
     * @description Output hash as hex string
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {String} Hex string
     * @example
     * md5.hex('The quick brown fox jumps over the lazy dog');
     * // equal to
     * md5('The quick brown fox jumps over the lazy dog');
     */
  /**
         * @method digest
         * @memberof md5
         * @description Output hash as bytes array
         * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
         * @returns {Array} Bytes array
         * @example
         * md5.digest('The quick brown fox jumps over the lazy dog');
         */
  /**
             * @method array
             * @memberof md5
             * @description Output hash as bytes array
             * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
             * @returns {Array} Bytes array
             * @example
             * md5.array('The quick brown fox jumps over the lazy dog');
             */
  /**
                 * @method arrayBuffer
                 * @memberof md5
                 * @description Output hash as ArrayBuffer
                 * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                 * @returns {ArrayBuffer} ArrayBuffer
                 * @example
                 * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
                 */
  /**
                     * @method buffer
                     * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
                     * @memberof md5
                     * @description Output hash as ArrayBuffer
                     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                     * @returns {ArrayBuffer} ArrayBuffer
                     * @example
                     * md5.buffer('The quick brown fox jumps over the lazy dog');
                     */
  /**
                         * @method base64
                         * @memberof md5
                         * @description Output hash as base64 string
                         * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                         * @returns {String} base64 string
                         * @example
                         * md5.base64('The quick brown fox jumps over the lazy dog');
                         */
  var createOutputMethod = function createOutputMethod(outputType) {
    return function (message) {
      return new Md5(true).update(message)[outputType]();
    };
  };

  /**
      * @method create
      * @memberof md5
      * @description Create Md5 object
      * @returns {Md5} Md5 object.
      * @example
      * var hash = md5.create();
      */
  /**
          * @method update
          * @memberof md5
          * @description Create and update Md5 object
          * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
          * @returns {Md5} Md5 object.
          * @example
          * var hash = md5.update('The quick brown fox jumps over the lazy dog');
          * // equal to
          * var hash = md5.create();
          * hash.update('The quick brown fox jumps over the lazy dog');
          */
  var createMethod = function createMethod() {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Md5();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  var nodeWrap = function nodeWrap(method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function nodeMethod(message) {
      if (typeof message === 'string') {
        return crypto.createHash('md5').update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw ERROR;
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
      message.constructor === Buffer) {
        return crypto.createHash('md5').update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  /**
      * Md5 class
      * @class Md5
      * @description This is internal class.
      * @see {@link md5.create}
      */
  function Md5(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
      this.buffer8 = buffer8;
    } else {
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(buffer);
        this.blocks = new Uint32Array(buffer);
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
    }
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  /**
     * @method update
     * @memberof Md5
     * @instance
     * @description Update hash
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {Md5} Md5 object.
     * @see {@link md5.update}
     */
  Md5.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }

    var notString,type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw ERROR;
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw ERROR;
          }
        }
      } else {
        throw ERROR;
      }
      notString = true;
    }
    var code,index = 0,i,length = message.length,blocks = this.blocks;
    var buffer8 = this.buffer8;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = blocks[16];
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            buffer8[i++] = message[index];
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        }
      } else {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              buffer8[i++] = code;
            } else if (code < 0x800) {
              buffer8[i++] = 0xc0 | code >> 6;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else if (code < 0xd800 || code >= 0xe000) {
              buffer8[i++] = 0xe0 | code >> 12;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              buffer8[i++] = 0xf0 | code >> 18;
              buffer8[i++] = 0x80 | code >> 12 & 0x3f;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            }
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            }
          }
        }
      }
      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Md5.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks,i = this.lastByteIndex;
    blocks[i >> 2] |= EXTRA[i & 3];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = blocks[16];
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.bytes << 3;
    blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
    this.hash();
  };

  Md5.prototype.hash = function () {
    var a,b,c,d,bc,da,blocks = this.blocks;

    if (this.first) {
      a = blocks[0] - 680876937;
      a = (a << 7 | a >>> 25) - 271733879 << 0;
      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
      d = (d << 12 | d >>> 20) + a << 0;
      c = (-271733879 ^ d & (a ^ -271733879)) + blocks[2] - 1126478375;
      c = (c << 17 | c >>> 15) + d << 0;
      b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;
      b = (b << 22 | b >>> 10) + c << 0;
    } else {
      a = this.h0;
      b = this.h1;
      c = this.h2;
      d = this.h3;
      a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;
      b = (b << 22 | b >>> 10) + c << 0;
    }

    a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[10] - 42063;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;
    b = (b << 20 | b >>> 12) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[5] - 378558;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[8] - 2022574463;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[11] + 1839030562;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[14] - 35309556;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[1] - 1530992060;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[4] + 1272893353;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[7] - 155497632;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[10] - 1094730640;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[13] + 681279174;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[0] - 358537222;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[3] - 722521979;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[6] + 76029189;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[9] - 640364487;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[12] - 421815835;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[15] + 530742520;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[2] - 995338651;
    b = (b << 23 | b >>> 9) + c << 0;
    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
    b = (b << 21 | b >>> 11) + c << 0;

    if (this.first) {
      this.h0 = a + 1732584193 << 0;
      this.h1 = b - 271733879 << 0;
      this.h2 = c - 1732584194 << 0;
      this.h3 = d + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
    }
  };

  /**
      * @method hex
      * @memberof Md5
      * @instance
      * @description Output hash as hex string
      * @returns {String} Hex string
      * @see {@link md5.hex}
      * @example
      * hash.hex();
      */
  Md5.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0,h1 = this.h1,h2 = this.h2,h3 = this.h3;

    return HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] +
    HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] +
    HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] +
    HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] +
    HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] +
    HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] +
    HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] +
    HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] +
    HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] +
    HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] +
    HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] +
    HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] +
    HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] +
    HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] +
    HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] +
    HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F];
  };

  /**
      * @method toString
      * @memberof Md5
      * @instance
      * @description Output hash as hex string
      * @returns {String} Hex string
      * @see {@link md5.hex}
      * @example
      * hash.toString();
      */
  Md5.prototype.toString = Md5.prototype.hex;

  /**
                                               * @method digest
                                               * @memberof Md5
                                               * @instance
                                               * @description Output hash as bytes array
                                               * @returns {Array} Bytes array
                                               * @see {@link md5.digest}
                                               * @example
                                               * hash.digest();
                                               */
  Md5.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0,h1 = this.h1,h2 = this.h2,h3 = this.h3;
    return [
    h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >> 24 & 0xFF,
    h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >> 24 & 0xFF,
    h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >> 24 & 0xFF,
    h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >> 24 & 0xFF];

  };

  /**
      * @method array
      * @memberof Md5
      * @instance
      * @description Output hash as bytes array
      * @returns {Array} Bytes array
      * @see {@link md5.array}
      * @example
      * hash.array();
      */
  Md5.prototype.array = Md5.prototype.digest;

  /**
                                               * @method arrayBuffer
                                               * @memberof Md5
                                               * @instance
                                               * @description Output hash as ArrayBuffer
                                               * @returns {ArrayBuffer} ArrayBuffer
                                               * @see {@link md5.arrayBuffer}
                                               * @example
                                               * hash.arrayBuffer();
                                               */
  Md5.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(16);
    var blocks = new Uint32Array(buffer);
    blocks[0] = this.h0;
    blocks[1] = this.h1;
    blocks[2] = this.h2;
    blocks[3] = this.h3;
    return buffer;
  };

  /**
      * @method buffer
      * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
      * @memberof Md5
      * @instance
      * @description Output hash as ArrayBuffer
      * @returns {ArrayBuffer} ArrayBuffer
      * @see {@link md5.buffer}
      * @example
      * hash.buffer();
      */
  Md5.prototype.buffer = Md5.prototype.arrayBuffer;

  /**
                                                     * @method base64
                                                     * @memberof Md5
                                                     * @instance
                                                     * @description Output hash as base64 string
                                                     * @returns {String} base64 string
                                                     * @see {@link md5.base64}
                                                     * @example
                                                     * hash.base64();
                                                     */
  Md5.prototype.base64 = function () {
    var v1,v2,v3,base64Str = '',bytes = this.array();
    for (var i = 0; i < 15;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
      BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
      BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] +
      BASE64_ENCODE_CHAR[v3 & 63];
    }
    v1 = bytes[i];
    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
    BASE64_ENCODE_CHAR[v1 << 4 & 63] +
    '==';
    return base64Str;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    /**
           * @method md5
           * @description Md5 hash function, export to global in browsers.
           * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
           * @returns {String} md5 hashes
           * @example
           * md5(''); // d41d8cd98f00b204e9800998ecf8427e
           * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
           * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
           *
           * // It also supports UTF-8 encoding
           * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
           *
           * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
           * md5([]); // d41d8cd98f00b204e9800998ecf8427e
           * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
           */
    root.md5 = exports;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 14), __webpack_require__(/*! ./../../../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 14:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 15);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 15:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 14)))

/***/ }),

/***/ 16:
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ 167:
/*!**************************************************!*\
  !*** D:/Git/wxapp/mini-village/common/vue-py.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _pycost = __webpack_require__(/*! ./pycost.js */ 168);var _default =
{
  chineseToPinYin: function chineseToPinYin(l1) {
    var l2 = l1.length;
    var I1 = '';
    var reg = new RegExp('[a-zA-Z0-9]');
    for (var i = 0; i < l2; i++) {
      var val = l1.substr(i, 1);
      var name = this.arraySearch(val, _pycost.pinyin);
      if (reg.test(val)) {
        I1 += val;
      } else if (name !== false) {
        I1 += name;
      }
    }
    I1 = I1.replace(/ /g, '-');
    while (I1.indexOf('--') > 0) {
      I1 = I1.replace('--', '-');
    }
    return I1;
  },
  arraySearch: function arraySearch(l1, l2) {
    for (var name in _pycost.pinyin) {
      if (_pycost.pinyin[name].indexOf(l1) !== -1) {
        return this.ucfirst(name);
      }
    }
    return false;
  },
  ucfirst: function ucfirst(l1) {
    if (l1.length > 0) {
      var first = l1.substr(0, 1).toUpperCase();
      var spare = l1.substr(1, l1.length);
      return first + spare;
    }
  } };exports.default = _default;

/***/ }),

/***/ 168:
/*!**************************************************!*\
  !*** D:/Git/wxapp/mini-village/common/pycost.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.pinyin = void 0;
var pinyin = {
  'a': "\u554A\u963F\u9515",
  'ai': "\u57C3\u6328\u54CE\u5509\u54C0\u7691\u764C\u853C\u77EE\u827E\u788D\u7231\u9698\u8BF6\u6371\u55F3\u55CC\u5AD2\u7477\u66A7\u7839\u953F\u972D",
  'an': "\u978D\u6C28\u5B89\u4FFA\u6309\u6697\u5CB8\u80FA\u6848\u8C19\u57EF\u63DE\u72B4\u5EB5\u6849\u94F5\u9E4C\u9878\u9EEF",
  'ang': "\u80AE\u6602\u76CE",
  'ao': "\u51F9\u6556\u71AC\u7FF1\u8884\u50B2\u5965\u61CA\u6FB3\u5773\u62D7\u55F7\u5662\u5C99\u5ED2\u9068\u5AAA\u9A9C\u8071\u87AF\u93CA\u9CCC\u93D6",
  'ba': "\u82AD\u634C\u6252\u53ED\u5427\u7B06\u516B\u75A4\u5DF4\u62D4\u8DCB\u9776\u628A\u8019\u575D\u9738\u7F62\u7238\u8307\u83DD\u8406\u636D\u5C9C\u705E\u6777\u94AF\u7C91\u9C85\u9B43",
  'bai': "\u767D\u67CF\u767E\u6446\u4F70\u8D25\u62DC\u7A17\u859C\u63B0\u97B4",
  'ban': "\u6591\u73ED\u642C\u6273\u822C\u9881\u677F\u7248\u626E\u62CC\u4F34\u74E3\u534A\u529E\u7ECA\u962A\u5742\u8C73\u94A3\u7622\u764D\u8228",
  'bang': "\u90A6\u5E2E\u6886\u699C\u8180\u7ED1\u68D2\u78C5\u868C\u9551\u508D\u8C24\u84A1\u8783",
  'bao': "\u82DE\u80DE\u5305\u8912\u96F9\u4FDD\u5821\u9971\u5B9D\u62B1\u62A5\u66B4\u8C79\u9C8D\u7206\u52F9\u8446\u5B80\u5B62\u7172\u9E28\u8913\u8DB5\u9F85",
  'bo': "\u5265\u8584\u73BB\u83E0\u64AD\u62E8\u94B5\u6CE2\u535A\u52C3\u640F\u94C2\u7B94\u4F2F\u5E1B\u8236\u8116\u818A\u6E24\u6CCA\u9A73\u4EB3\u8543\u5575\u997D\u6A97\u64D8\u7934\u94B9\u9E41\u7C38\u8DDB",
  'bei': "\u676F\u7891\u60B2\u5351\u5317\u8F88\u80CC\u8D1D\u94A1\u500D\u72C8\u5907\u60EB\u7119\u88AB\u5B5B\u9642\u90B6\u57E4\u84D3\u5457\u602B\u6096\u789A\u9E4E\u8919\u943E",
  'ben': "\u5954\u82EF\u672C\u7B28\u755A\u574C\u951B",
  'beng': "\u5D29\u7EF7\u752D\u6CF5\u8E66\u8FF8\u552A\u5623\u750F",
  'bi': "\u903C\u9F3B\u6BD4\u9119\u7B14\u5F7C\u78A7\u84D6\u853D\u6BD5\u6BD9\u6BD6\u5E01\u5E87\u75F9\u95ED\u655D\u5F0A\u5FC5\u8F9F\u58C1\u81C2\u907F\u965B\u5315\u4EF3\u4FFE\u8298\u835C\u8378\u5421\u54D4\u72F4\u5EB3\u610E\u6ED7\u6FDE\u5F3C\u59A3\u5A62\u5B16\u74A7\u8D32\u7540\u94CB\u79D5\u88E8\u7B5A\u7B85\u7BE6\u822D\u895E\u8DF8\u9AC0",
  'bian': "\u97AD\u8FB9\u7F16\u8D2C\u6241\u4FBF\u53D8\u535E\u8FA8\u8FA9\u8FAB\u904D\u533E\u5F01\u82C4\u5FED\u6C74\u7F0F\u7178\u782D\u78A5\u7A39\u7A86\u8759\u7B3E\u9CCA",
  'biao': "\u6807\u5F6A\u8198\u8868\u5A4A\u9AA0\u98D1\u98D9\u98DA\u706C\u9556\u9573\u762D\u88F1\u9CD4",
  'bie': "\u9CD6\u618B\u522B\u762A\u8E69\u9CD8",
  'bin': "\u5F6C\u658C\u6FD2\u6EE8\u5BBE\u6448\u50A7\u6D5C\u7F24\u73A2\u6BA1\u8191\u9554\u9ACC\u9B13",
  'bing': "\u5175\u51B0\u67C4\u4E19\u79C9\u997C\u70B3\u75C5\u5E76\u7980\u90B4\u6452\u7EE0\u678B\u69DF\u71F9",
  'bu': "\u6355\u535C\u54FA\u8865\u57E0\u4E0D\u5E03\u6B65\u7C3F\u90E8\u6016\u62CA\u535F\u900B\u74FF\u6661\u949A\u91AD",
  'ca': "\u64E6\u5693\u7924",
  'cai': "\u731C\u88C1\u6750\u624D\u8D22\u776C\u8E29\u91C7\u5F69\u83DC\u8521",
  'can': "\u9910\u53C2\u8695\u6B8B\u60ED\u60E8\u707F\u9A96\u74A8\u7CB2\u9EEA",
  'cang': "\u82CD\u8231\u4ED3\u6CA7\u85CF\u4F27",
  'cao': "\u64CD\u7CD9\u69FD\u66F9\u8349\u8279\u5608\u6F15\u87AC\u825A",
  'ce': "\u5395\u7B56\u4FA7\u518C\u6D4B\u5202\u5E3B\u607B",
  'ceng': "\u5C42\u8E6D\u564C",
  'cha': "\u63D2\u53C9\u832C\u8336\u67E5\u78B4\u643D\u5BDF\u5C94\u5DEE\u8BE7\u7339\u9987\u6C4A\u59F9\u6748\u6942\u69CE\u6AAB\u9497\u9538\u9572\u8869",
  'chai': "\u62C6\u67F4\u8C7A\u4FAA\u8308\u7625\u867F\u9F87",
  'chan': "\u6400\u63BA\u8749\u998B\u8C17\u7F20\u94F2\u4EA7\u9610\u98A4\u5181\u8C04\u8C36\u8487\u5EDB\u5FCF\u6F7A\u6FB6\u5B71\u7FBC\u5A75\u5B17\u9AA3\u89C7\u7985\u9561\u88E3\u87FE\u8E94",
  'chang': "\u660C\u7316\u573A\u5C1D\u5E38\u957F\u507F\u80A0\u5382\u655E\u7545\u5531\u5021\u4F25\u9B2F\u82CC\u83D6\u5F9C\u6005\u60DD\u960A\u5A3C\u5AE6\u6636\u6C05\u9CB3",
  'chao': "\u8D85\u6284\u949E\u671D\u5632\u6F6E\u5DE2\u5435\u7092\u600A\u7EC9\u6641\u8016",
  'che': "\u8F66\u626F\u64A4\u63A3\u5F7B\u6F88\u577C\u5C6E\u7817",
  'chen': "\u90F4\u81E3\u8FB0\u5C18\u6668\u5FF1\u6C89\u9648\u8D81\u886C\u79F0\u8C0C\u62BB\u55D4\u5BB8\u741B\u6987\u809C\u80C2\u789C\u9F80",
  'cheng': "\u6491\u57CE\u6A59\u6210\u5448\u4E58\u7A0B\u60E9\u6F84\u8BDA\u627F\u901E\u9A8B\u79E4\u57D5\u5D4A\u5FB5\u6D48\u67A8\u67FD\u6A18\u665F\u584D\u77A0\u94D6\u88CE\u86CF\u9172",
  'chi': "\u5403\u75F4\u6301\u5319\u6C60\u8FDF\u5F1B\u9A70\u803B\u9F7F\u4F88\u5C3A\u8D64\u7FC5\u65A5\u70BD\u50BA\u5880\u82AA\u830C\u640B\u53F1\u54E7\u557B\u55E4\u5F73\u996C\u6CB2\u5AB8\u6555\u80DD\u7719\u7735\u9E31\u761B\u892B\u86A9\u87AD\u7B1E\u7BEA\u8C49\u8E05\u8E1F\u9B51",
  'chong': "\u5145\u51B2\u866B\u5D07\u5BA0\u833A\u5FE1\u61A7\u94F3\u825F",
  'chou': "\u62BD\u916C\u7574\u8E0C\u7A20\u6101\u7B79\u4EC7\u7EF8\u7785\u4E11\u4FE6\u5733\u5E31\u60C6\u6EB4\u59AF\u7633\u96E0\u9C8B",
  'chu': "\u81ED\u521D\u51FA\u6A71\u53A8\u8E87\u9504\u96CF\u6EC1\u9664\u695A\u7840\u50A8\u77D7\u6410\u89E6\u5904\u4E8D\u520D\u61B7\u7ECC\u6775\u696E\u6A17\u870D\u8E70\u9EDC",
  'chuan': "\u63E3\u5DDD\u7A7F\u693D\u4F20\u8239\u5598\u4E32\u63BE\u821B\u60F4\u9044\u5DDB\u6C1A\u948F\u9569\u8221",
  'chuang': "\u75AE\u7A97\u5E62\u5E8A\u95EF\u521B\u6006",
  'chui': "\u5439\u708A\u6376\u9524\u5782\u9672\u68F0\u69CC",
  'chun': "\u6625\u693F\u9187\u5507\u6DF3\u7EAF\u8822\u4FC3\u83BC\u6C8C\u80AB\u6710\u9E51\u877D",
  'chuo': "\u6233\u7EF0\u851F\u8FB6\u8F8D\u955E\u8E14\u9F8A",
  'ci': "\u75B5\u8328\u78C1\u96CC\u8F9E\u6148\u74F7\u8BCD\u6B64\u523A\u8D50\u6B21\u8360\u5472\u5D6F\u9E5A\u8785\u7CCD\u8D91",
  'cong': "\u806A\u8471\u56F1\u5306\u4ECE\u4E1B\u506C\u82C1\u6DD9\u9AA2\u742E\u7481\u679E",
  'cu': "\u51D1\u7C97\u918B\u7C07\u731D\u6B82\u8E59",
  'cuan': "\u8E7F\u7BE1\u7A9C\u6C46\u64BA\u6615\u7228",
  'cui': "\u6467\u5D14\u50AC\u8106\u7601\u7CB9\u6DEC\u7FE0\u8403\u60B4\u7480\u69B1\u96B9",
  'cun': "\u6751\u5B58\u5BF8\u78CB\u5FD6\u76B4",
  'cuo': "\u64AE\u6413\u63AA\u632B\u9519\u539D\u811E\u9509\u77EC\u75E4\u9E7E\u8E49\u8E9C",
  'da': "\u642D\u8FBE\u7B54\u7629\u6253\u5927\u8037\u54D2\u55D2\u601B\u59B2\u75B8\u8921\u7B2A\u977C\u9791",
  'dai': "\u5446\u6B79\u50A3\u6234\u5E26\u6B86\u4EE3\u8D37\u888B\u5F85\u902E\u6020\u57ED\u7519\u5454\u5CB1\u8FE8\u902F\u9A80\u7ED0\u73B3\u9EDB",
  'dan': "\u803D\u62C5\u4E39\u5355\u90F8\u63B8\u80C6\u65E6\u6C2E\u4F46\u60EE\u6DE1\u8BDE\u5F39\u86CB\u4EBB\u510B\u5369\u840F\u5556\u6FB9\u6A90\u6B9A\u8D55\u7708\u7605\u8043\u7BAA",
  'dang': "\u5F53\u6321\u515A\u8361\u6863\u8C20\u51FC\u83EA\u5B95\u7800\u94DB\u88C6",
  'dao': "\u5200\u6363\u8E48\u5012\u5C9B\u7977\u5BFC\u5230\u7A3B\u60BC\u9053\u76D7\u53E8\u5541\u5FC9\u6D2E\u6C18\u7118\u5FD1\u7E9B",
  'de': "\u5FB7\u5F97\u7684\u951D",
  'deng': "\u8E6C\u706F\u767B\u7B49\u77AA\u51F3\u9093\u5654\u5D9D\u6225\u78F4\u956B\u7C26",
  'di': "\u5824\u4F4E\u6EF4\u8FEA\u654C\u7B1B\u72C4\u6DA4\u7FDF\u5AE1\u62B5\u5E95\u5730\u8482\u7B2C\u5E1D\u5F1F\u9012\u7F14\u6C10\u7C74\u8BCB\u8C1B\u90B8\u577B\u839C\u837B\u5600\u5A23\u67E2\u68E3\u89CC\u7825\u78B2\u7747\u955D\u7F9D\u9AB6",
  'dian': "\u98A0\u6382\u6EC7\u7898\u70B9\u5178\u975B\u57AB\u7535\u4F43\u7538\u5E97\u60E6\u5960\u6DC0\u6BBF\u4E36\u963D\u576B\u57DD\u5DC5\u73B7\u765C\u766B\u7C1F\u8E2E",
  'diao': "\u7889\u53FC\u96D5\u51CB\u5201\u6389\u540A\u9493\u8C03\u8F7A\u94DE\u8729\u7C9C\u8C82",
  'die': "\u8DCC\u7239\u789F\u8776\u8FED\u8C0D\u53E0\u4F5A\u57A4\u581E\u63F2\u558B\u6E2B\u8F76\u7252\u74DE\u8936\u800B\u8E40\u9CBD\u9CCE",
  'ding': "\u4E01\u76EF\u53EE\u9489\u9876\u9F0E\u952D\u5B9A\u8BA2\u4E22\u4EC3\u5576\u738E\u815A\u7887\u753A\u94E4\u7594\u8035\u914A",
  'dong': "\u4E1C\u51AC\u8463\u61C2\u52A8\u680B\u4F97\u606B\u51BB\u6D1E\u578C\u549A\u5CBD\u5CD2\u5902\u6C21\u80E8\u80F4\u7850\u9E2B",
  'dou': "\u515C\u6296\u6597\u9661\u8C46\u9017\u75D8\u8538\u94AD\u7AA6\u7AAC\u86AA\u7BFC\u9161",
  'du': "\u90FD\u7763\u6BD2\u728A\u72EC\u8BFB\u5835\u7779\u8D4C\u675C\u9540\u809A\u5EA6\u6E21\u5992\u828F\u561F\u6E0E\u691F\u6A50\u724D\u8839\u7B03\u9AD1\u9EE9",
  'duan': "\u7AEF\u77ED\u953B\u6BB5\u65AD\u7F0E\u5F56\u6934\u7145\u7C16",
  'dui': "\u5806\u5151\u961F\u5BF9\u603C\u619D\u7893",
  'dun': "\u58A9\u5428\u8E72\u6566\u987F\u56E4\u949D\u76FE\u9041\u7096\u7818\u7905\u76F9\u9566\u8DB8",
  'duo': "\u6387\u54C6\u591A\u593A\u579B\u8EB2\u6735\u8DFA\u8235\u5241\u60F0\u5815\u5484\u54DA\u7F0D\u67C1\u94CE\u88F0\u8E31",
  'e': "\u86FE\u5CE8\u9E45\u4FC4\u989D\u8BB9\u5A25\u6076\u5384\u627C\u904F\u9102\u997F\u5669\u8C14\u57A9\u57AD\u82CA\u83AA\u843C\u5443\u6115\u5C59\u5A40\u8F6D\u66F7\u816D\u786A\u9507\u9537\u9E57\u989A\u9CC4",
  'en': "\u6069\u84BD\u6441\u5514\u55EF",
  'er': "\u800C\u513F\u8033\u5C14\u9975\u6D31\u4E8C\u8D30\u8FE9\u73E5\u94D2\u9E38\u9C95",
  'fa': "\u53D1\u7F5A\u7B4F\u4F10\u4E4F\u9600\u6CD5\u73D0\u57A1\u781D",
  'fan': "\u85E9\u5E06\u756A\u7FFB\u6A0A\u77FE\u9492\u7E41\u51E1\u70E6\u53CD\u8FD4\u8303\u8D29\u72AF\u996D\u6CDB\u8629\u5E61\u72AD\u68B5\u6535\u71D4\u7548\u8E6F",
  'fang': "\u574A\u82B3\u65B9\u80AA\u623F\u9632\u59A8\u4EFF\u8BBF\u7EBA\u653E\u531A\u90A1\u5F77\u94AB\u822B\u9C82",
  'fei': "\u83F2\u975E\u5561\u98DE\u80A5\u532A\u8BFD\u5420\u80BA\u5E9F\u6CB8\u8D39\u82BE\u72D2\u60B1\u6DDD\u5983\u7ECB\u7EEF\u69A7\u8153\u6590\u6249\u7953\u7829\u9544\u75F1\u871A\u7BDA\u7FE1\u970F\u9CB1",
  'fen': "\u82AC\u915A\u5429\u6C1B\u5206\u7EB7\u575F\u711A\u6C7E\u7C89\u594B\u4EFD\u5FFF\u6124\u7CAA\u507E\u7035\u68FC\u610D\u9CBC\u9F22",
  'feng': "\u4E30\u5C01\u67AB\u8702\u5CF0\u950B\u98CE\u75AF\u70FD\u9022\u51AF\u7F1D\u8BBD\u5949\u51E4\u4FF8\u9146\u8451\u6CA3\u781C",
  'fu': "\u4F5B\u5426\u592B\u6577\u80A4\u5B75\u6276\u62C2\u8F90\u5E45\u6C1F\u7B26\u4F0F\u4FD8\u670D\u6D6E\u6DAA\u798F\u88B1\u5F17\u752B\u629A\u8F85\u4FEF\u91DC\u65A7\u812F\u8151\u5E9C\u8150\u8D74\u526F\u8986\u8D4B\u590D\u5085\u4ED8\u961C\u7236\u8179\u8D1F\u5BCC\u8BA3\u9644\u5987\u7F1A\u5490\u5310\u51EB\u90DB\u8299\u82FB\u832F\u83A9\u83D4\u544B\u5E5E\u6ECF\u8274\u5B5A\u9A78\u7EC2\u6874\u8D59\u9EFB\u9EFC\u7F58\u7A03\u99A5\u864D\u86A8\u8709\u8760\u876E\u9EB8\u8DBA\u8DD7\u9CC6",
  'ga': "\u5676\u560E\u86E4\u5C2C\u5477\u5C15\u5C1C\u65EE\u9486",
  'gai': "\u8BE5\u6539\u6982\u9499\u76D6\u6E89\u4E10\u9654\u5793\u6224\u8D45\u80F2",
  'gan': "\u5E72\u7518\u6746\u67D1\u7AFF\u809D\u8D76\u611F\u79C6\u6562\u8D63\u5769\u82F7\u5C34\u64C0\u6CD4\u6DE6\u6F89\u7EC0\u6A44\u65F0\u77F8\u75B3\u9150",
  'gang': "\u5188\u521A\u94A2\u7F38\u809B\u7EB2\u5C97\u6E2F\u6206\u7F61\u9883\u7B7B",
  'gong': "\u6760\u5DE5\u653B\u529F\u606D\u9F9A\u4F9B\u8EAC\u516C\u5BAB\u5F13\u5DE9\u6C5E\u62F1\u8D21\u5171\u857B\u5EFE\u54A3\u73D9\u80B1\u86A3\u86E9\u89E5",
  'gao': "\u7BD9\u768B\u9AD8\u818F\u7F94\u7CD5\u641E\u9550\u7A3F\u544A\u777E\u8BF0\u90DC\u84BF\u85C1\u7F1F\u69D4\u69C1\u6772\u9506",
  'ge': "\u54E5\u6B4C\u6401\u6208\u9E3D\u80F3\u7599\u5272\u9769\u845B\u683C\u9601\u9694\u94EC\u4E2A\u5404\u9B32\u4EE1\u54FF\u5865\u55DD\u7EA5\u643F\u8188\u784C\u94EA\u9549\u88BC\u988C\u867C\u8238\u9ABC\u9AC2",
  'gei': "\u7ED9",
  'gen': "\u6839\u8DDF\u4E98\u831B\u54CF\u826E",
  'geng': "\u8015\u66F4\u5E9A\u7FB9\u57C2\u803F\u6897\u54FD\u8D53\u9CA0",
  'gou': "\u94A9\u52FE\u6C9F\u82DF\u72D7\u57A2\u6784\u8D2D\u591F\u4F5D\u8BDF\u5CA3\u9058\u5ABE\u7F11\u89CF\u5F40\u9E32\u7B31\u7BDD\u97B2",
  'gu': "\u8F9C\u83C7\u5495\u7B8D\u4F30\u6CBD\u5B64\u59D1\u9F13\u53E4\u86CA\u9AA8\u8C37\u80A1\u6545\u987E\u56FA\u96C7\u560F\u8BC2\u83F0\u54CC\u5D2E\u6C69\u688F\u8F71\u726F\u727F\u80CD\u81CC\u6BC2\u77BD\u7F5F\u94B4\u9522\u74E0\u9E2A\u9E44\u75FC\u86C4\u9164\u89DA\u9CB4\u9AB0\u9E58",
  'gua': "\u522E\u74DC\u5250\u5BE1\u6302\u8902\u5366\u8BD6\u5471\u681D\u9E39",
  'guai': "\u4E56\u62D0\u602A\u54D9",
  'guan': "\u68FA\u5173\u5B98\u51A0\u89C2\u7BA1\u9986\u7F50\u60EF\u704C\u8D2F\u500C\u839E\u63BC\u6DAB\u76E5\u9E73\u9CCF",
  'guang': "\u5149\u5E7F\u901B\u72B7\u6844\u80F1\u7592",
  'gui': "\u7470\u89C4\u572D\u7845\u5F52\u9F9F\u95FA\u8F68\u9B3C\u8BE1\u7678\u6842\u67DC\u8DEA\u8D35\u523D\u5326\u523F\u5E8B\u5B84\u59AB\u6867\u7085\u6677\u7688\u7C0B\u9C91\u9CDC",
  'gun': "\u8F8A\u6EDA\u68CD\u4E28\u886E\u7EF2\u78D9\u9CA7",
  'guo': "\u9505\u90ED\u56FD\u679C\u88F9\u8FC7\u9998\u8803\u57DA\u63B4\u5459\u56D7\u5E3C\u5D1E\u7313\u6901\u8662\u951E\u8052\u872E\u873E\u8748",
  'ha': "\u54C8",
  'hai': "\u9AB8\u5B69\u6D77\u6C26\u4EA5\u5BB3\u9A87\u54B4\u55E8\u988F\u91A2",
  'han': "\u9163\u61A8\u90AF\u97E9\u542B\u6DB5\u5BD2\u51FD\u558A\u7F55\u7FF0\u64BC\u634D\u65F1\u61BE\u608D\u710A\u6C57\u6C49\u9097\u83E1\u6496\u961A\u701A\u6657\u7113\u9894\u86B6\u9F3E",
  'hen': "\u592F\u75D5\u5F88\u72E0\u6068",
  'hang': "\u676D\u822A\u6C86\u7ED7\u73E9\u6841",
  'hao': "\u58D5\u568E\u8C6A\u6BEB\u90DD\u597D\u8017\u53F7\u6D69\u8585\u55E5\u5686\u6FE0\u704F\u660A\u7693\u98A2\u869D",
  'he': "\u5475\u559D\u8377\u83CF\u6838\u79BE\u548C\u4F55\u5408\u76D2\u8C89\u9602\u6CB3\u6DB8\u8D6B\u8910\u9E64\u8D3A\u8BC3\u52BE\u58D1\u85FF\u55D1\u55EC\u9616\u76CD\u86B5\u7FEE",
  'hei': "\u563F\u9ED1",
  'heng': "\u54FC\u4EA8\u6A2A\u8861\u6052\u8A07\u8605",
  'hong': "\u8F70\u54C4\u70D8\u8679\u9E3F\u6D2A\u5B8F\u5F18\u7EA2\u9EC9\u8BA7\u836D\u85A8\u95F3\u6CD3",
  'hou': "\u5589\u4FAF\u7334\u543C\u539A\u5019\u540E\u5820\u5F8C\u9005\u760A\u7BCC\u7CC7\u9C8E\u9ABA",
  'hu': "\u547C\u4E4E\u5FFD\u745A\u58F6\u846B\u80E1\u8774\u72D0\u7CCA\u6E56\u5F27\u864E\u552C\u62A4\u4E92\u6CAA\u6237\u51B1\u553F\u56EB\u5CB5\u7322\u6019\u60DA\u6D52\u6EF9\u7425\u69F2\u8F77\u89F3\u70C0\u7173\u623D\u6248\u795C\u9E55\u9E71\u7B0F\u9190\u659B",
  'hua': "\u82B1\u54D7\u534E\u733E\u6ED1\u753B\u5212\u5316\u8BDD\u5290\u6D4D\u9A85\u6866\u94E7\u7A1E",
  'huai': "\u69D0\u5F8A\u6000\u6DEE\u574F\u8FD8\u8E1D",
  'huan': "\u6B22\u73AF\u6853\u7F13\u6362\u60A3\u5524\u75EA\u8C62\u7115\u6DA3\u5BA6\u5E7B\u90C7\u5942\u57B8\u64D0\u571C\u6D39\u6D63\u6F36\u5BF0\u902D\u7F33\u953E\u9CA9\u9B1F",
  'huang': "\u8352\u614C\u9EC4\u78FA\u8757\u7C27\u7687\u51F0\u60F6\u714C\u6643\u5E4C\u604D\u8C0E\u968D\u5FA8\u6E5F\u6F62\u9051\u749C\u8093\u7640\u87E5\u7BC1\u9CC7",
  'hui': "\u7070\u6325\u8F89\u5FBD\u6062\u86D4\u56DE\u6BC1\u6094\u6167\u5349\u60E0\u6666\u8D3F\u79FD\u4F1A\u70E9\u6C47\u8BB3\u8BF2\u7ED8\u8BD9\u8334\u835F\u8559\u54D5\u5599\u96B3\u6D04\u5F57\u7F0B\u73F2\u6656\u605A\u867A\u87EA\u9EBE",
  'hun': "\u8364\u660F\u5A5A\u9B42\u6D51\u6DF7\u8BE8\u9984\u960D\u6EB7\u7F17",
  'huo': "\u8C41\u6D3B\u4F19\u706B\u83B7\u6216\u60D1\u970D\u8D27\u7978\u6509\u56AF\u5925\u94AC\u952A\u956C\u8020\u8816",
  'ji': "\u51FB\u573E\u57FA\u673A\u7578\u7A3D\u79EF\u7B95\u808C\u9965\u8FF9\u6FC0\u8BA5\u9E21\u59EC\u7EE9\u7F09\u5409\u6781\u68D8\u8F91\u7C4D\u96C6\u53CA\u6025\u75BE\u6C72\u5373\u5AC9\u7EA7\u6324\u51E0\u810A\u5DF1\u84DF\u6280\u5180\u5B63\u4F0E\u796D\u5242\u60B8\u6D4E\u5BC4\u5BC2\u8BA1\u8BB0\u65E2\u5FCC\u9645\u5993\u7EE7\u7EAA\u5C45\u4E0C\u4E69\u525E\u4F76\u4F74\u8114\u58BC\u82A8\u82B0\u8401\u84BA\u857A\u638E\u53FD\u54AD\u54DC\u5527\u5C8C\u5D74\u6D0E\u5F50\u5C50\u9AA5\u757F\u7391\u696B\u6B9B\u621F\u6222\u8D4D\u89CA\u7284\u9F51\u77F6\u7F81\u5D47\u7A37\u7620\u7635\u866E\u7B08\u7B04\u66A8\u8DFB\u8DFD\u9701\u9C9A\u9CAB\u9AFB\u9E82",
  'jia': "\u5609\u67B7\u5939\u4F73\u5BB6\u52A0\u835A\u988A\u8D3E\u7532\u94BE\u5047\u7A3C\u4EF7\u67B6\u9A7E\u5AC1\u4F3D\u90CF\u62EE\u5CAC\u6D43\u8FE6\u73C8\u621B\u80DB\u605D\u94D7\u9553\u75C2\u86F1\u7B33\u8888\u8DCF",
  'jian': "\u6B7C\u76D1\u575A\u5C16\u7B3A\u95F4\u714E\u517C\u80A9\u8270\u5978\u7F04\u8327\u68C0\u67EC\u78B1\u7877\u62E3\u6361\u7B80\u4FED\u526A\u51CF\u8350\u69DB\u9274\u8DF5\u8D31\u89C1\u952E\u7BAD\u4EF6\u5065\u8230\u5251\u996F\u6E10\u6E85\u6DA7\u5EFA\u50ED\u8C0F\u8C2B\u83C5\u84B9\u641B\u56DD\u6E54\u8E47\u8B07\u7F23\u67A7\u67D9\u6957\u620B\u622C\u726E\u728D\u6BFD\u8171\u7751\u950F\u9E63\u88E5\u7B15\u7BB4\u7FE6\u8DBC\u8E3A\u9CA3\u97AF",
  'jiang': "\u50F5\u59DC\u5C06\u6D46\u6C5F\u7586\u848B\u6868\u5956\u8BB2\u5320\u9171\u964D\u8333\u6D1A\u7EDB\u7F30\u729F\u7913\u8029\u7CE8\u8C47",
  'jiao': "\u8549\u6912\u7901\u7126\u80F6\u4EA4\u90CA\u6D47\u9A84\u5A07\u56BC\u6405\u94F0\u77EB\u4FA5\u811A\u72E1\u89D2\u997A\u7F34\u7EDE\u527F\u6559\u9175\u8F7F\u8F83\u53EB\u4F7C\u50EC\u832D\u6322\u564D\u5CE4\u5FBC\u59E3\u7E9F\u656B\u768E\u9E6A\u86DF\u91AE\u8DE4\u9C9B",
  'jie': "\u7A96\u63ED\u63A5\u7686\u79F8\u8857\u9636\u622A\u52AB\u8282\u6854\u6770\u6377\u776B\u7AED\u6D01\u7ED3\u89E3\u59D0\u6212\u85C9\u82A5\u754C\u501F\u4ECB\u75A5\u8BEB\u5C4A\u5048\u8BA6\u8BD8\u5588\u55DF\u736C\u5A55\u5B51\u6840\u7352\u78A3\u9534\u7596\u88B7\u9889\u86A7\u7FAF\u9C92\u9AB1\u9AEB",
  'jin': "\u5DFE\u7B4B\u65A4\u91D1\u4ECA\u6D25\u895F\u7D27\u9526\u4EC5\u8C28\u8FDB\u9773\u664B\u7981\u8FD1\u70EC\u6D78\u5C3D\u537A\u8369\u5807\u5664\u9991\u5ED1\u5997\u7F19\u747E\u69FF\u8D46\u89D0\u9485\u9513\u887F\u77DC",
  'jing': "\u52B2\u8346\u5162\u830E\u775B\u6676\u9CB8\u4EAC\u60CA\u7CBE\u7CB3\u7ECF\u4E95\u8B66\u666F\u9888\u9759\u5883\u656C\u955C\u5F84\u75C9\u9756\u7ADF\u7ADE\u51C0\u522D\u5106\u9631\u83C1\u734D\u61AC\u6CFE\u8FF3\u5F2A\u5A67\u80BC\u80EB\u8148\u65CC",
  'jiong': "\u70AF\u7A98\u5182\u8FE5\u6243",
  'jiu': "\u63EA\u7A76\u7EA0\u7396\u97ED\u4E45\u7078\u4E5D\u9152\u53A9\u6551\u65E7\u81FC\u8205\u548E\u5C31\u759A\u50E6\u557E\u9604\u67E9\u6855\u9E6B\u8D73\u9B0F",
  'ju': "\u97A0\u62D8\u72D9\u75BD\u9A79\u83CA\u5C40\u5480\u77E9\u4E3E\u6CAE\u805A\u62D2\u636E\u5DE8\u5177\u8DDD\u8E1E\u952F\u4FF1\u53E5\u60E7\u70AC\u5267\u5028\u8BB5\u82E3\u82F4\u8392\u63AC\u907D\u5C66\u741A\u67B8\u6910\u6998\u6989\u6A58\u728B\u98D3\u949C\u9514\u7AAD\u88FE\u8D84\u91B5\u8E3D\u9F83\u96CE\u97AB",
  'juan': "\u6350\u9E43\u5A1F\u5026\u7737\u5377\u7EE2\u9104\u72F7\u6D93\u684A\u8832\u9529\u954C\u96BD",
  'jue': "\u6485\u652B\u6289\u6398\u5014\u7235\u89C9\u51B3\u8BC0\u7EDD\u53A5\u5282\u8C32\u77CD\u8568\u5658\u5D1B\u7357\u5B53\u73CF\u6877\u6A5B\u721D\u9562\u8E76\u89D6",
  'jun': "\u5747\u83CC\u94A7\u519B\u541B\u5CFB\u4FCA\u7AE3\u6D5A\u90E1\u9A8F\u6343\u72FB\u76B2\u7B60\u9E87",
  'ka': "\u5580\u5496\u5361\u4F67\u5494\u80E9",
  'ke': "\u54AF\u5777\u82DB\u67EF\u68F5\u78D5\u9897\u79D1\u58F3\u54B3\u53EF\u6E34\u514B\u523B\u5BA2\u8BFE\u5CA2\u606A\u6E98\u9A92\u7F02\u73C2\u8F72\u6C2A\u778C\u94B6\u75B4\u7AA0\u874C\u9AC1",
  'kai': "\u5F00\u63E9\u6977\u51EF\u6168\u5240\u57B2\u8488\u5FFE\u607A\u94E0\u950E",
  'kan': "\u520A\u582A\u52D8\u574E\u780D\u770B\u4F83\u51F5\u83B0\u83B6\u6221\u9F9B\u77B0",
  'kang': "\u5EB7\u6177\u7CE0\u625B\u6297\u4EA2\u7095\u5751\u4F09\u95F6\u94AA",
  'kao': "\u8003\u62F7\u70E4\u9760\u5C3B\u6832\u7292\u94D0",
  'ken': "\u80AF\u5543\u57A6\u6073\u57A0\u88C9\u9880",
  'keng': "\u542D\u5FD0\u94FF",
  'kong': "\u7A7A\u6050\u5B54\u63A7\u5025\u5D06\u7B9C",
  'kou': "\u62A0\u53E3\u6263\u5BC7\u82A4\u853B\u53E9\u770D\u7B58",
  'ku': "\u67AF\u54ED\u7A9F\u82E6\u9177\u5E93\u88E4\u5233\u5800\u55BE\u7ED4\u9AB7",
  'kua': "\u5938\u57AE\u630E\u8DE8\u80EF\u4F89",
  'kuai': "\u5757\u7B77\u4FA9\u5FEB\u84AF\u90D0\u8489\u72EF\u810D",
  'kuan': "\u5BBD\u6B3E\u9ACB",
  'kuang': "\u5321\u7B50\u72C2\u6846\u77FF\u7736\u65F7\u51B5\u8BD3\u8BF3\u909D\u5739\u593C\u54D0\u7EA9\u8D36",
  'kui': "\u4E8F\u76D4\u5CBF\u7AA5\u8475\u594E\u9B41\u5080\u9988\u6127\u6E83\u9997\u532E\u5914\u9697\u63C6\u55B9\u559F\u609D\u6126\u9615\u9035\u668C\u777D\u8069\u8770\u7BD1\u81FE\u8DEC",
  'kun': "\u5764\u6606\u6346\u56F0\u6083\u9603\u7428\u951F\u918C\u9CB2\u9AE1",
  'kuo': "\u62EC\u6269\u5ED3\u9614\u86DE",
  'la': "\u5783\u62C9\u5587\u8721\u814A\u8FA3\u5566\u524C\u647A\u908B\u65EF\u782C\u760C",
  'lai': "\u83B1\u6765\u8D56\u5D03\u5F95\u6D9E\u6FD1\u8D49\u7750\u94FC\u765E\u7C41",
  'lan': "\u84DD\u5A6A\u680F\u62E6\u7BEE\u9611\u5170\u6F9C\u8C30\u63FD\u89C8\u61D2\u7F06\u70C2\u6EE5\u5549\u5C9A\u61D4\u6F24\u6984\u6593\u7F71\u9567\u8934",
  'lang': "\u7405\u6994\u72FC\u5ECA\u90CE\u6717\u6D6A\u83A8\u8497\u5577\u9606\u9512\u7A02\u8782",
  'lao': "\u635E\u52B3\u7262\u8001\u4F6C\u59E5\u916A\u70D9\u6D9D\u5520\u5D02\u6833\u94D1\u94F9\u75E8\u91AA",
  'le': "\u52D2\u4E50\u808B\u4EC2\u53FB\u561E\u6CD0\u9CD3",
  'lei': "\u96F7\u956D\u857E\u78CA\u7D2F\u5121\u5792\u64C2\u7C7B\u6CEA\u7FB8\u8BD4\u837D\u54A7\u6F2F\u5AD8\u7F27\u6A91\u8012\u9179",
  'ling': "\u68F1\u51B7\u62CE\u73B2\u83F1\u96F6\u9F84\u94C3\u4F36\u7F9A\u51CC\u7075\u9675\u5CAD\u9886\u53E6\u4EE4\u9143\u5844\u82D3\u5464\u56F9\u6CE0\u7EEB\u67C3\u68C2\u74F4\u8046\u86C9\u7FCE\u9CAE",
  'leng': "\u695E\u6123",
  'li': "\u5398\u68A8\u7281\u9ECE\u7BF1\u72F8\u79BB\u6F13\u7406\u674E\u91CC\u9CA4\u793C\u8389\u8354\u540F\u6817\u4E3D\u5389\u52B1\u783E\u5386\u5229\u5088\u4F8B\u4FD0\u75E2\u7ACB\u7C92\u6CA5\u96B6\u529B\u7483\u54E9\u4FEA\u4FDA\u90E6\u575C\u82C8\u8385\u84E0\u85DC\u6369\u5456\u5533\u55B1\u7301\u6EA7\u6FA7\u9026\u5A0C\u5AE0\u9A8A\u7F21\u73DE\u67A5\u680E\u8F79\u623E\u783A\u8A48\u7F79\u9502\u9E42\u75A0\u75AC\u86CE\u870A\u8821\u7B20\u7BE5\u7C9D\u91B4\u8DDE\u96F3\u9CA1\u9CE2\u9EE7",
  'lian': "\u4FE9\u8054\u83B2\u8FDE\u9570\u5EC9\u601C\u6D9F\u5E18\u655B\u8138\u94FE\u604B\u70BC\u7EC3\u631B\u8539\u5941\u6F4B\u6FC2\u5A08\u740F\u695D\u6B93\u81C1\u81A6\u88E2\u880A\u9CA2",
  'liang': "\u7CAE\u51C9\u6881\u7CB1\u826F\u4E24\u8F86\u91CF\u667E\u4EAE\u8C05\u589A\u690B\u8E09\u9753\u9B49",
  'liao': "\u64A9\u804A\u50DA\u7597\u71CE\u5BE5\u8FBD\u6F66\u4E86\u6482\u9563\u5ED6\u6599\u84FC\u5C25\u5639\u7360\u5BEE\u7F2D\u948C\u9E69\u8022",
  'lie': "\u5217\u88C2\u70C8\u52A3\u730E\u51BD\u57D2\u6D0C\u8D94\u8E90\u9B23",
  'lin': "\u7433\u6797\u78F7\u9716\u4E34\u90BB\u9CDE\u6DCB\u51DB\u8D41\u541D\u853A\u5D99\u5EEA\u9074\u6AA9\u8F9A\u77B5\u7CBC\u8E8F\u9E9F",
  'liu': "\u6E9C\u7409\u69B4\u786B\u998F\u7559\u5218\u7624\u6D41\u67F3\u516D\u62A1\u507B\u848C\u6CD6\u6D4F\u905B\u9A9D\u7EFA\u65D2\u7198\u950D\u954F\u9E68\u938F",
  'long': "\u9F99\u804B\u5499\u7B3C\u7ABF\u9686\u5784\u62E2\u9647\u5F04\u5785\u830F\u6CF7\u73D1\u680A\u80E7\u783B\u7643",
  'lou': "\u697C\u5A04\u6402\u7BD3\u6F0F\u964B\u55BD\u5D5D\u9542\u7618\u8027\u877C\u9AC5",
  'lu': "\u82A6\u5362\u9885\u5E90\u7089\u63B3\u5364\u864F\u9C81\u9E93\u788C\u9732\u8DEF\u8D42\u9E7F\u6F5E\u7984\u5F55\u9646\u622E\u5786\u6445\u64B8\u565C\u6CF8\u6E0C\u6F09\u7490\u680C\u6A79\u8F73\u8F82\u8F98\u6C07\u80EA\u9565\u9E2C\u9E6D\u7C0F\u823B\u9C88",
  'lv': "\u9A74\u5415\u94DD\u4FA3\u65C5\u5C65\u5C61\u7F15\u8651\u6C2F\u5F8B\u7387\u6EE4\u7EFF\u634B\u95FE\u6988\u8182\u7A06\u891B",
  'luan': "\u5CE6\u5B6A\u6EE6\u5375\u4E71\u683E\u9E3E\u92AE",
  'lue': "\u63A0\u7565\u950A",
  'lun': "\u8F6E\u4F26\u4ED1\u6CA6\u7EB6\u8BBA\u56F5",
  'luo': "\u841D\u87BA\u7F57\u903B\u9523\u7BA9\u9AA1\u88F8\u843D\u6D1B\u9A86\u7EDC\u502E\u8366\u645E\u7321\u6CFA\u6924\u8136\u9559\u7630\u96D2",
  'ma': "\u5988\u9EBB\u739B\u7801\u8682\u9A6C\u9A82\u561B\u5417\u551B\u72B8\u5B37\u6769\u9EBD",
  'mai': "\u57CB\u4E70\u9EA6\u5356\u8FC8\u8109\u52A2\u836C\u54AA\u973E",
  'man': "\u7792\u9992\u86EE\u6EE1\u8513\u66FC\u6162\u6F2B\u8C29\u5881\u5E54\u7F26\u71B3\u9558\u989F\u87A8\u9CD7\u9794",
  'mang': "\u8292\u832B\u76F2\u5FD9\u83BD\u9099\u6F2D\u6726\u786D\u87D2",
  'meng': "\u6C13\u840C\u8499\u6AAC\u76DF\u9530\u731B\u68A6\u5B5F\u52D0\u750D\u77A2\u61F5\u791E\u867B\u8722\u8813\u824B\u8268\u9EFE",
  'miao': "\u732B\u82D7\u63CF\u7784\u85D0\u79D2\u6E3A\u5E99\u5999\u55B5\u9088\u7F08\u7F2A\u676A\u6DFC\u7707\u9E4B\u8731",
  'mao': "\u8305\u951A\u6BDB\u77DB\u94C6\u536F\u8302\u5192\u5E3D\u8C8C\u8D38\u4F94\u88A4\u52D6\u8306\u5CC1\u7441\u6634\u7266\u8004\u65C4\u61CB\u7780\u86D1\u8765\u87CA\u9AE6",
  'me': "\u4E48",
  'mei': "\u73AB\u679A\u6885\u9176\u9709\u7164\u6CA1\u7709\u5A92\u9541\u6BCF\u7F8E\u6627\u5BD0\u59B9\u5A9A\u5776\u8393\u5D4B\u7338\u6D7C\u6E44\u6963\u9545\u9E5B\u8882\u9B45",
  'men': "\u95E8\u95F7\u4EEC\u626A\u739F\u7116\u61D1\u9494",
  'mi': "\u772F\u919A\u9761\u7CDC\u8FF7\u8C1C\u5F25\u7C73\u79D8\u89C5\u6CCC\u871C\u5BC6\u5E42\u8288\u5196\u8C27\u863C\u5627\u7315\u736F\u6C68\u5B93\u5F2D\u8112\u6549\u7CF8\u7E3B\u9E8B",
  'mian': "\u68C9\u7720\u7EF5\u5195\u514D\u52C9\u5A29\u7F05\u9762\u6C94\u6E4E\u817C\u7704",
  'mie': "\u8511\u706D\u54A9\u881B\u7BFE",
  'min': "\u6C11\u62BF\u76BF\u654F\u60AF\u95FD\u82E0\u5CB7\u95F5\u6CEF\u73C9",
  'ming': "\u660E\u879F\u9E23\u94ED\u540D\u547D\u51A5\u8317\u6E9F\u669D\u7791\u9169",
  'miu': "\u8C2C",
  'mo': "\u6478\u6479\u8611\u6A21\u819C\u78E8\u6469\u9B54\u62B9\u672B\u83AB\u58A8\u9ED8\u6CAB\u6F20\u5BDE\u964C\u8C1F\u8309\u84E6\u998D\u5AEB\u9546\u79E3\u763C\u8031\u87C6\u8C8A\u8C98",
  'mou': "\u8C0B\u725F\u67D0\u53B6\u54DE\u5A7A\u7738\u936A",
  'mu': "\u62C7\u7261\u4EA9\u59C6\u6BCD\u5893\u66AE\u5E55\u52DF\u6155\u6728\u76EE\u7766\u7267\u7A46\u4EEB\u82DC\u5452\u6C90\u6BEA\u94BC",
  'na': "\u62FF\u54EA\u5450\u94A0\u90A3\u5A1C\u7EB3\u5185\u637A\u80AD\u954E\u8872\u7BAC",
  'nai': "\u6C16\u4E43\u5976\u8010\u5948\u9F10\u827F\u8418\u67F0",
  'nan': "\u5357\u7537\u96BE\u56CA\u5583\u56E1\u6960\u8169\u877B\u8D67",
  'nao': "\u6320\u8111\u607C\u95F9\u5B6C\u57B4\u7331\u7459\u7847\u94D9\u86F2",
  'ne': "\u6DD6\u5462\u8BB7",
  'nei': "\u9981",
  'nen': "\u5AE9\u80FD\u6798\u6041",
  'ni': "\u59AE\u9713\u502A\u6CE5\u5C3C\u62DF\u4F60\u533F\u817B\u9006\u6EBA\u4F32\u576D\u730A\u6029\u6EE0\u6635\u65CE\u7962\u615D\u7768\u94CC\u9CB5",
  'nian': "\u852B\u62C8\u5E74\u78BE\u64B5\u637B\u5FF5\u5EFF\u8F87\u9ECF\u9C87\u9CB6",
  'niang': "\u5A18\u917F",
  'niao': "\u9E1F\u5C3F\u8311\u5B32\u8132\u8885",
  'nie': "\u634F\u8042\u5B7D\u556E\u954A\u954D\u6D85\u4E5C\u9667\u8616\u55EB\u8080\u989E\u81EC\u8E51",
  'nin': "\u60A8\u67E0",
  'ning': "\u72DE\u51DD\u5B81\u62E7\u6CDE\u4F5E\u84E5\u549B\u752F\u804D",
  'niu': "\u725B\u626D\u94AE\u7EBD\u72C3\u5FF8\u599E\u86B4",
  'nong': "\u8113\u6D53\u519C\u4FAC",
  'nu': "\u5974\u52AA\u6012\u5476\u5E11\u5F29\u80EC\u5B65\u9A7D",
  'nv': "\u5973\u6067\u9495\u8844",
  'nuan': "\u6696",
  'nuenue': "\u8650",
  'nue': "\u759F\u8C11",
  'nuo': "\u632A\u61E6\u7CEF\u8BFA\u50A9\u6426\u558F\u9518",
  'ou': "\u54E6\u6B27\u9E25\u6BB4\u85D5\u5455\u5076\u6CA4\u6004\u74EF\u8026",
  'pa': "\u556A\u8DB4\u722C\u5E15\u6015\u7436\u8469\u7B62",
  'pai': "\u62CD\u6392\u724C\u5F98\u6E43\u6D3E\u4FF3\u848E",
  'pan': "\u6500\u6F58\u76D8\u78D0\u76FC\u7554\u5224\u53DB\u723F\u6CEE\u88A2\u897B\u87E0\u8E52",
  'pang': "\u4E53\u5E9E\u65C1\u802A\u80D6\u6EC2\u9004",
  'pao': "\u629B\u5486\u5228\u70AE\u888D\u8DD1\u6CE1\u530F\u72CD\u5E96\u812C\u75B1",
  'pei': "\u5478\u80DA\u57F9\u88F4\u8D54\u966A\u914D\u4F69\u6C9B\u638A\u8F94\u5E14\u6DE0\u65C6\u952B\u9185\u9708",
  'pen': "\u55B7\u76C6\u6E53",
  'peng': "\u7830\u62A8\u70F9\u6F8E\u5F6D\u84EC\u68DA\u787C\u7BF7\u81A8\u670B\u9E4F\u6367\u78B0\u576F\u580B\u562D\u6026\u87DB",
  'pi': "\u7812\u9739\u6279\u62AB\u5288\u7435\u6BD7\u5564\u813E\u75B2\u76AE\u5339\u75DE\u50FB\u5C41\u8B6C\u4E15\u9674\u90B3\u90EB\u572E\u9F19\u64D7\u567C\u5E80\u5AB2\u7EB0\u6787\u7513\u7765\u7F74\u94CD\u75E6\u7656\u758B\u868D\u8C94",
  'pian': "\u7BC7\u504F\u7247\u9A97\u8C1D\u9A88\u728F\u80FC\u890A\u7FE9\u8E41",
  'piao': "\u98D8\u6F02\u74E2\u7968\u527D\u560C\u5AD6\u7F25\u6B8D\u779F\u87B5",
  'pie': "\u6487\u77A5\u4E3F\u82E4\u6C15",
  'pin': "\u62FC\u9891\u8D2B\u54C1\u8058\u62DA\u59D8\u5AD4\u6980\u725D\u98A6",
  'ping': "\u4E52\u576A\u82F9\u840D\u5E73\u51ED\u74F6\u8BC4\u5C4F\u4FDC\u5A09\u67B0\u9C86",
  'po': "\u5761\u6CFC\u9887\u5A46\u7834\u9B44\u8FEB\u7C95\u53F5\u9131\u6EA5\u73C0\u948B\u94B7\u76A4\u7B38",
  'pou': "\u5256\u88D2\u8E23",
  'pu': "\u6251\u94FA\u4EC6\u8386\u8461\u83E9\u84B2\u57D4\u6734\u5703\u666E\u6D66\u8C31\u66DD\u7011\u530D\u5657\u6FEE\u749E\u6C06\u9564\u9568\u8E7C",
  'qi': "\u671F\u6B3A\u6816\u621A\u59BB\u4E03\u51C4\u6F06\u67D2\u6C8F\u5176\u68CB\u5947\u6B67\u7566\u5D0E\u8110\u9F50\u65D7\u7948\u7941\u9A91\u8D77\u5C82\u4E5E\u4F01\u542F\u5951\u780C\u5668\u6C14\u8FC4\u5F03\u6C7D\u6CE3\u8BAB\u4E9F\u4E93\u573B\u8291\u840B\u847A\u5601\u5C7A\u5C90\u6C54\u6DC7\u9A90\u7EEE\u742A\u7426\u675E\u6864\u69ED\u6B39\u797A\u61A9\u789B\u86F4\u871E\u7DA6\u7DAE\u8DBF\u8E4A\u9CCD\u9E92",
  'qia': "\u6390\u6070\u6D3D\u845C",
  'qian': "\u7275\u6266\u948E\u94C5\u5343\u8FC1\u7B7E\u4EDF\u8C26\u4E7E\u9ED4\u94B1\u94B3\u524D\u6F5C\u9063\u6D45\u8C34\u5811\u5D4C\u6B20\u6B49\u4F65\u9621\u828A\u82A1\u8368\u63AE\u5C8D\u60AD\u614A\u9A9E\u6434\u8930\u7F31\u6920\u80B7\u6106\u94A4\u8654\u7B9D",
  'qiang': "\u67AA\u545B\u8154\u7F8C\u5899\u8537\u5F3A\u62A2\u5AF1\u6A2F\u6217\u709D\u9516\u9535\u956A\u8941\u8723\u7F9F\u8DEB\u8DC4",
  'qiao': "\u6A47\u9539\u6572\u6084\u6865\u77A7\u4E54\u4FA8\u5DE7\u9798\u64AC\u7FD8\u5CED\u4FCF\u7A8D\u5281\u8BEE\u8C2F\u835E\u6100\u6194\u7F32\u6A35\u6BF3\u7857\u8DF7\u9792",
  'qie': "\u5207\u8304\u4E14\u602F\u7A83\u90C4\u553C\u60EC\u59BE\u6308\u9532\u7BA7",
  'qin': "\u94A6\u4FB5\u4EB2\u79E6\u7434\u52E4\u82B9\u64D2\u79BD\u5BDD\u6C81\u82A9\u84C1\u8572\u63FF\u5423\u55EA\u5659\u6EB1\u6A8E\u8793\u887E",
  'qing': "\u9752\u8F7B\u6C22\u503E\u537F\u6E05\u64CE\u6674\u6C30\u60C5\u9877\u8BF7\u5E86\u5029\u82D8\u570A\u6AA0\u78EC\u873B\u7F44\u7B90\u8B26\u9CAD\u9EE5",
  'qiong': "\u743C\u7A77\u909B\u8315\u7A79\u7B47\u928E",
  'qiu': "\u79CB\u4E18\u90B1\u7403\u6C42\u56DA\u914B\u6CC5\u4FC5\u6C3D\u5DEF\u827D\u72B0\u6E6B\u9011\u9052\u6978\u8D47\u9E20\u866C\u86AF\u8764\u88D8\u7CD7\u9CC5\u9F3D",
  'qu': "\u8D8B\u533A\u86C6\u66F2\u8EAF\u5C48\u9A71\u6E20\u53D6\u5A36\u9F8B\u8DA3\u53BB\u8BCE\u52AC\u8556\u8627\u5C96\u8862\u9612\u74A9\u89D1\u6C0D\u795B\u78F2\u766F\u86D0\u883C\u9EB4\u77BF\u9EE2",
  'quan': "\u5708\u98A7\u6743\u919B\u6CC9\u5168\u75CA\u62F3\u72AC\u5238\u529D\u8BE0\u8343\u737E\u609B\u7EFB\u8F81\u754E\u94E8\u8737\u7B4C\u9B08",
  'que': "\u7F3A\u7094\u7638\u5374\u9E4A\u69B7\u786E\u96C0\u9619\u60AB",
  'qun': "\u88D9\u7FA4\u9021",
  'ran': "\u7136\u71C3\u5189\u67D3\u82D2\u9AEF",
  'rang': "\u74E4\u58E4\u6518\u56B7\u8BA9\u79B3\u7A70",
  'rao': "\u9976\u6270\u7ED5\u835B\u5A06\u6861",
  'ruo': "\u60F9\u82E5\u5F31",
  're': "\u70ED\u504C",
  'ren': "\u58EC\u4EC1\u4EBA\u5FCD\u97E7\u4EFB\u8BA4\u5203\u598A\u7EAB\u4EDE\u834F\u845A\u996A\u8F6B\u7A14\u887D",
  'reng': "\u6254\u4ECD",
  'ri': "\u65E5",
  'rong': "\u620E\u8338\u84C9\u8363\u878D\u7194\u6EB6\u5BB9\u7ED2\u5197\u5D58\u72E8\u7F1B\u6995\u877E",
  'rou': "\u63C9\u67D4\u8089\u7CC5\u8E42\u97A3",
  'ru': "\u8339\u8815\u5112\u5B7A\u5982\u8FB1\u4E73\u6C5D\u5165\u8925\u84D0\u85B7\u5685\u6D33\u6EBD\u6FE1\u94F7\u8966\u98A5",
  'ruan': "\u8F6F\u962E\u670A",
  'rui': "\u854A\u745E\u9510\u82AE\u8564\u777F\u868B",
  'run': "\u95F0\u6DA6",
  'sa': "\u6492\u6D12\u8428\u5345\u4EE8\u6332\u98D2",
  'sai': "\u816E\u9CC3\u585E\u8D5B\u567B",
  'san': "\u4E09\u53C1\u4F1E\u6563\u5F61\u9993\u6C35\u6BF5\u7CC1\u9730",
  'sang': "\u6851\u55D3\u4E27\u6421\u78C9\u98A1",
  'sao': "\u6414\u9A9A\u626B\u5AC2\u57FD\u81CA\u7619\u9CCB",
  'se': "\u745F\u8272\u6DA9\u556C\u94E9\u94EF\u7A51",
  'sen': "\u68EE",
  'seng': "\u50E7",
  'sha': "\u838E\u7802\u6740\u5239\u6C99\u7EB1\u50BB\u5565\u715E\u810E\u6B43\u75E7\u88DF\u970E\u9CA8",
  'shai': "\u7B5B\u6652\u917E",
  'shan': "\u73CA\u82EB\u6749\u5C71\u5220\u717D\u886B\u95EA\u9655\u64C5\u8D61\u81B3\u5584\u6C55\u6247\u7F2E\u5261\u8BAA\u912F\u57CF\u829F\u6F78\u59D7\u9A9F\u81BB\u9490\u759D\u87EE\u8222\u8DDA\u9CDD",
  'shang': "\u5892\u4F24\u5546\u8D4F\u664C\u4E0A\u5C1A\u88F3\u57A7\u7EF1\u6B87\u71B5\u89DE",
  'shao': "\u68A2\u634E\u7A0D\u70E7\u828D\u52FA\u97F6\u5C11\u54E8\u90B5\u7ECD\u52AD\u82D5\u6F72\u86F8\u7B24\u7B72\u8244",
  'she': "\u5962\u8D4A\u86C7\u820C\u820D\u8D66\u6444\u5C04\u6151\u6D89\u793E\u8BBE\u538D\u4F58\u731E\u7572\u9E9D",
  'shen': "\u7837\u7533\u547B\u4F38\u8EAB\u6DF1\u5A20\u7EC5\u795E\u6C88\u5BA1\u5A76\u751A\u80BE\u614E\u6E17\u8BDC\u8C02\u5432\u54C2\u6E16\u6939\u77E7\u8703",
  'sheng': "\u58F0\u751F\u7525\u7272\u5347\u7EF3\u7701\u76DB\u5269\u80DC\u5723\u4E1E\u6E11\u5AB5\u771A\u7B19",
  'shi': "\u5E08\u5931\u72EE\u65BD\u6E7F\u8BD7\u5C38\u8671\u5341\u77F3\u62FE\u65F6\u4EC0\u98DF\u8680\u5B9E\u8BC6\u53F2\u77E2\u4F7F\u5C4E\u9A76\u59CB\u5F0F\u793A\u58EB\u4E16\u67FF\u4E8B\u62ED\u8A93\u901D\u52BF\u662F\u55DC\u566C\u9002\u4ED5\u4F8D\u91CA\u9970\u6C0F\u5E02\u6043\u5BA4\u89C6\u8BD5\u8C25\u57D8\u83B3\u84CD\u5F11\u5511\u9963\u8F7C\u8006\u8D33\u70BB\u793B\u94C8\u94CA\u87AB\u8210\u7B6E\u8C55\u9CA5\u9CBA",
  'shou': "\u6536\u624B\u9996\u5B88\u5BFF\u6388\u552E\u53D7\u7626\u517D\u624C\u72E9\u7EF6\u824F",
  'shu': "\u852C\u67A2\u68B3\u6B8A\u6292\u8F93\u53D4\u8212\u6DD1\u758F\u4E66\u8D4E\u5B70\u719F\u85AF\u6691\u66D9\u7F72\u8700\u9ECD\u9F20\u5C5E\u672F\u8FF0\u6811\u675F\u620D\u7AD6\u5885\u5EB6\u6570\u6F31\u6055\u500F\u587E\u83FD\u5FC4\u6CAD\u6D91\u6F8D\u59DD\u7EBE\u6BF9\u8167\u6BB3\u956F\u79EB\u9E6C",
  'shua': "\u5237\u800D\u5530\u6DAE",
  'shuai': "\u6454\u8870\u7529\u5E05\u87C0",
  'shuan': "\u6813\u62F4\u95E9",
  'shuang': "\u971C\u53CC\u723D\u5B40",
  'shui': "\u8C01\u6C34\u7761\u7A0E",
  'shun': "\u542E\u77AC\u987A\u821C\u6042",
  'shuo': "\u8BF4\u7855\u6714\u70C1\u84B4\u6420\u55CD\u6FEF\u5981\u69CA\u94C4",
  'si': "\u65AF\u6495\u5636\u601D\u79C1\u53F8\u4E1D\u6B7B\u8086\u5BFA\u55E3\u56DB\u4F3A\u4F3C\u9972\u5DF3\u53AE\u4FDF\u5155\u83E5\u549D\u6C5C\u6CD7\u6F8C\u59D2\u9A77\u7F0C\u7940\u7960\u9536\u9E36\u801C\u86F3\u7B25",
  'song': "\u677E\u8038\u6002\u9882\u9001\u5B8B\u8BBC\u8BF5\u51C7\u83D8\u5D27\u5D69\u5FEA\u609A\u6DDE\u7AE6",
  'sou': "\u641C\u8258\u64DE\u55FD\u53DF\u55D6\u55FE\u998A\u6EB2\u98D5\u778D\u953C\u878B",
  'su': "\u82CF\u9165\u4FD7\u7D20\u901F\u7C9F\u50F3\u5851\u6EAF\u5BBF\u8BC9\u8083\u5919\u8C21\u850C\u55C9\u612B\u7C0C\u89EB\u7A23",
  'suan': "\u9178\u849C\u7B97",
  'sui': "\u867D\u968B\u968F\u7EE5\u9AD3\u788E\u5C81\u7A57\u9042\u96A7\u795F\u84D1\u51AB\u8C07\u6FC9\u9083\u71E7\u772D\u7762",
  'sun': "\u5B59\u635F\u7B0B\u836A\u72F2\u98E7\u69AB\u8DE3\u96BC",
  'suo': "\u68AD\u5506\u7F29\u7410\u7D22\u9501\u6240\u5522\u55E6\u5A11\u686B\u7743\u7FA7",
  'ta': "\u584C\u4ED6\u5B83\u5979\u5854\u736D\u631E\u8E4B\u8E0F\u95FC\u6EBB\u9062\u69BB\u6C93",
  'tai': "\u80CE\u82D4\u62AC\u53F0\u6CF0\u915E\u592A\u6001\u6C70\u90B0\u85B9\u80BD\u70B1\u949B\u8DC6\u9C90",
  'tan': "\u574D\u644A\u8D2A\u762B\u6EE9\u575B\u6A80\u75F0\u6F6D\u8C2D\u8C08\u5766\u6BEF\u8892\u78B3\u63A2\u53F9\u70AD\u90EF\u8548\u6619\u94BD\u952C\u8983",
  'tang': "\u6C64\u5858\u642A\u5802\u68E0\u819B\u5510\u7CD6\u50A5\u9967\u6E8F\u746D\u94F4\u9557\u8025\u8797\u87B3\u7FB0\u91A3",
  'thang': "\u5018\u8EBA\u6DCC",
  'theng': "\u8D9F\u70EB",
  'tao': "\u638F\u6D9B\u6ED4\u7EE6\u8404\u6843\u9003\u6DD8\u9676\u8BA8\u5957\u6311\u9F17\u5555\u97EC\u9955",
  'te': "\u7279",
  'teng': "\u85E4\u817E\u75BC\u8A8A\u6ED5",
  'ti': "\u68AF\u5254\u8E22\u9511\u63D0\u9898\u8E44\u557C\u4F53\u66FF\u568F\u60D5\u6D95\u5243\u5C49\u8351\u608C\u9016\u7EE8\u7F07\u9E48\u88FC\u918D",
  'tian': "\u5929\u6DFB\u586B\u7530\u751C\u606C\u8214\u8146\u63AD\u5FDD\u9617\u6B84\u754B\u94BF\u86BA",
  'tiao': "\u6761\u8FE2\u773A\u8DF3\u4F7B\u7967\u94EB\u7A95\u9F86\u9CA6",
  'tie': "\u8D34\u94C1\u5E16\u841C\u992E",
  'ting': "\u5385\u542C\u70C3\u6C40\u5EF7\u505C\u4EAD\u5EAD\u633A\u8247\u839B\u8476\u5A77\u6883\u8713\u9706",
  'tong': "\u901A\u6850\u916E\u77B3\u540C\u94DC\u5F64\u7AE5\u6876\u6345\u7B52\u7EDF\u75DB\u4F5F\u50EE\u4EDD\u833C\u55F5\u6078\u6F7C\u783C",
  'tou': "\u5077\u6295\u5934\u900F\u4EA0",
  'tu': "\u51F8\u79C3\u7A81\u56FE\u5F92\u9014\u6D82\u5C60\u571F\u5410\u5154\u580D\u837C\u83DF\u948D\u9174",
  'tuan': "\u6E4D\u56E2\u7583",
  'tui': "\u63A8\u9893\u817F\u8715\u892A\u9000\u5FD2\u717A",
  'tun': "\u541E\u5C6F\u81C0\u9968\u66BE\u8C5A\u7A80",
  'tuo': "\u62D6\u6258\u8131\u9E35\u9640\u9A6E\u9A7C\u692D\u59A5\u62D3\u553E\u4E47\u4F57\u5768\u5EB9\u6CB1\u67DD\u7823\u7BA8\u8204\u8DCE\u9F0D",
  'wa': "\u6316\u54C7\u86D9\u6D3C\u5A03\u74E6\u889C\u4F64\u5A32\u817D",
  'wai': "\u6B6A\u5916",
  'wan': "\u8C4C\u5F2F\u6E7E\u73A9\u987D\u4E38\u70F7\u5B8C\u7897\u633D\u665A\u7696\u60CB\u5B9B\u5A49\u4E07\u8155\u525C\u8284\u82CB\u83C0\u7EA8\u7EFE\u742C\u8118\u7579\u873F\u7BA2",
  'wang': "\u6C6A\u738B\u4EA1\u6789\u7F51\u5F80\u65FA\u671B\u5FD8\u5984\u7F54\u5C22\u60D8\u8F8B\u9B4D",
  'wei': "\u5A01\u5DCD\u5FAE\u5371\u97E6\u8FDD\u6845\u56F4\u552F\u60DF\u4E3A\u6F4D\u7EF4\u82C7\u840E\u59D4\u4F1F\u4F2A\u5C3E\u7EAC\u672A\u851A\u5473\u754F\u80C3\u5582\u9B4F\u4F4D\u6E2D\u8C13\u5C09\u6170\u536B\u502D\u504E\u8BFF\u9688\u8473\u8587\u5E0F\u5E37\u5D34\u5D6C\u7325\u732C\u95F1\u6CA9\u6D27\u6DA0\u9036\u5A13\u73AE\u97EA\u8ECE\u709C\u7168\u71A8\u75FF\u8249\u9C94",
  'wen': "\u761F\u6E29\u868A\u6587\u95FB\u7EB9\u543B\u7A33\u7D0A\u95EE\u520E\u6120\u960C\u6C76\u74BA\u97EB\u6B81\u96EF",
  'weng': "\u55E1\u7FC1\u74EE\u84CA\u8579",
  'wo': "\u631D\u8717\u6DA1\u7A9D\u6211\u65A1\u5367\u63E1\u6C83\u83B4\u5E44\u6E25\u674C\u809F\u9F8C",
  'wu': "\u5DEB\u545C\u94A8\u4E4C\u6C61\u8BEC\u5C4B\u65E0\u829C\u68A7\u543E\u5434\u6BCB\u6B66\u4E94\u6342\u5348\u821E\u4F0D\u4FAE\u575E\u620A\u96FE\u6664\u7269\u52FF\u52A1\u609F\u8BEF\u5140\u4EF5\u9622\u90AC\u572C\u82B4\u5E91\u6003\u5FE4\u6D6F\u5BE4\u8FD5\u59A9\u9A9B\u727E\u7110\u9E49\u9E5C\u8708\u92C8\u9F2F",
  'xi': "\u6614\u7199\u6790\u897F\u7852\u77FD\u6670\u563B\u5438\u9521\u727A\u7A00\u606F\u5E0C\u6089\u819D\u5915\u60DC\u7184\u70EF\u6EAA\u6C50\u7280\u6A84\u88AD\u5E2D\u4E60\u5AB3\u559C\u94E3\u6D17\u7CFB\u9699\u620F\u7EC6\u50D6\u516E\u96B0\u90D7\u831C\u8478\u84F0\u595A\u550F\u5F99\u9969\u960B\u6D60\u6DC5\u5C63\u5B09\u73BA\u6A28\u66E6\u89CB\u6B37\u71B9\u798A\u79A7\u94B8\u7699\u7A78\u8725\u87CB\u823E\u7FB2\u7C9E\u7FD5\u91AF\u9F37",
  'xia': "\u778E\u867E\u5323\u971E\u8F96\u6687\u5CE1\u4FA0\u72ED\u4E0B\u53A6\u590F\u5413\u6380\u846D\u55C4\u72CE\u9050\u7455\u7856\u7615\u7F45\u9EE0",
  'xian': "\u9528\u5148\u4ED9\u9C9C\u7EA4\u54B8\u8D24\u8854\u8237\u95F2\u6D8E\u5F26\u5ACC\u663E\u9669\u73B0\u732E\u53BF\u817A\u9985\u7FA1\u5BAA\u9677\u9650\u7EBF\u51BC\u85D3\u5C98\u7303\u66B9\u5A34\u6C19\u7946\u9E47\u75EB\u86AC\u7B45\u7C7C\u9170\u8DF9",
  'xiang': "\u76F8\u53A2\u9576\u9999\u7BB1\u8944\u6E58\u4E61\u7FD4\u7965\u8BE6\u60F3\u54CD\u4EAB\u9879\u5DF7\u6A61\u50CF\u5411\u8C61\u8297\u8459\u9977\u5EA0\u9AA7\u7F03\u87D3\u9C9E\u98E8",
  'xiao': "\u8427\u785D\u9704\u524A\u54EE\u56A3\u9500\u6D88\u5BB5\u6DC6\u6653\u5C0F\u5B5D\u6821\u8096\u5578\u7B11\u6548\u54D3\u54BB\u5D24\u6F47\u900D\u9A81\u7EE1\u67AD\u67B5\u7B71\u7BAB\u9B48",
  'xie': "\u6954\u4E9B\u6B47\u874E\u978B\u534F\u631F\u643A\u90AA\u659C\u80C1\u8C10\u5199\u68B0\u5378\u87F9\u61C8\u6CC4\u6CFB\u8C22\u5C51\u5055\u4EB5\u52F0\u71EE\u85A4\u64B7\u5EE8\u7023\u9082\u7EC1\u7F2C\u69AD\u698D\u6B59\u8E9E",
  'xin': "\u85AA\u82AF\u950C\u6B23\u8F9B\u65B0\u5FFB\u5FC3\u4FE1\u8845\u56DF\u99A8\u8398\u6B46\u94FD\u946B",
  'xing': "\u661F\u8165\u7329\u60FA\u5174\u5211\u578B\u5F62\u90A2\u884C\u9192\u5E78\u674F\u6027\u59D3\u9649\u8347\u8365\u64E4\u60BB\u784E",
  'xiong': "\u5144\u51F6\u80F8\u5308\u6C79\u96C4\u718A\u828E",
  'xiu': "\u4F11\u4FEE\u7F9E\u673D\u55C5\u9508\u79C0\u8896\u7EE3\u83A0\u5CAB\u9990\u5EA5\u9E3A\u8C85\u9AF9",
  'xu': "\u589F\u620C\u9700\u865A\u5618\u987B\u5F90\u8BB8\u84C4\u9157\u53D9\u65ED\u5E8F\u755C\u6064\u7D6E\u5A7F\u7EEA\u7EED\u8BB4\u8BE9\u5729\u84FF\u6035\u6D2B\u6E86\u987C\u6829\u7166\u7809\u76F1\u80E5\u7CC8\u9191",
  'xuan': "\u8F69\u55A7\u5BA3\u60AC\u65CB\u7384\u9009\u7663\u7729\u7EDA\u5107\u8C16\u8431\u63CE\u9994\u6CEB\u6D35\u6E32\u6F29\u7487\u6966\u6684\u70AB\u714A\u78B9\u94C9\u955F\u75C3",
  'xue': "\u9774\u859B\u5B66\u7A74\u96EA\u8840\u5671\u6CF6\u9CD5",
  'xun': "\u52CB\u718F\u5FAA\u65EC\u8BE2\u5BFB\u9A6F\u5DE1\u6B89\u6C5B\u8BAD\u8BAF\u900A\u8FC5\u5DFD\u57D9\u8340\u85B0\u5CCB\u5F87\u6D54\u66DB\u7AA8\u91BA\u9C9F",
  'ya': "\u538B\u62BC\u9E26\u9E2D\u5440\u4E2B\u82BD\u7259\u869C\u5D16\u8859\u6DAF\u96C5\u54D1\u4E9A\u8BB6\u4F22\u63E0\u5416\u5C88\u8FD3\u5A05\u740A\u6860\u6C29\u7811\u775A\u75D6",
  'yan': "\u7109\u54BD\u9609\u70DF\u6DF9\u76D0\u4E25\u7814\u8712\u5CA9\u5EF6\u8A00\u989C\u960E\u708E\u6CBF\u5944\u63A9\u773C\u884D\u6F14\u8273\u5830\u71D5\u538C\u781A\u96C1\u5501\u5F66\u7130\u5BB4\u8C1A\u9A8C\u53A3\u9765\u8D5D\u4FE8\u5043\u5156\u8BA0\u8C33\u90FE\u9122\u82AB\u83F8\u5D26\u6079\u95EB\u960F\u6D07\u6E6E\u6EDF\u598D\u5AE3\u7430\u664F\u80ED\u814C\u7131\u7F68\u7B75\u917D\u9B47\u990D\u9F39",
  'yang': "\u6B83\u592E\u9E2F\u79E7\u6768\u626C\u4F6F\u75A1\u7F8A\u6D0B\u9633\u6C27\u4EF0\u75D2\u517B\u6837\u6F3E\u5F89\u600F\u6CF1\u7080\u70CA\u6059\u86D8\u9785",
  'yao': "\u9080\u8170\u5996\u7476\u6447\u5C27\u9065\u7A91\u8C23\u59DA\u54AC\u8200\u836F\u8981\u8000\u592D\u723B\u5406\u5D3E\u5FAD\u7039\u5E7A\u73E7\u6773\u66DC\u80B4\u9E5E\u7A88\u7E47\u9CD0",
  'ye': "\u6930\u564E\u8036\u7237\u91CE\u51B6\u4E5F\u9875\u6396\u4E1A\u53F6\u66F3\u814B\u591C\u6DB2\u8C12\u90BA\u63F6\u9980\u6654\u70E8\u94D8",
  'yi': "\u4E00\u58F9\u533B\u63D6\u94F1\u4F9D\u4F0A\u8863\u9890\u5937\u9057\u79FB\u4EEA\u80F0\u7591\u6C82\u5B9C\u59E8\u5F5D\u6905\u8681\u501A\u5DF2\u4E59\u77E3\u4EE5\u827A\u6291\u6613\u9091\u5C79\u4EBF\u5F79\u81C6\u9038\u8084\u75AB\u4EA6\u88D4\u610F\u6BC5\u5FC6\u4E49\u76CA\u6EA2\u8BE3\u8BAE\u8C0A\u8BD1\u5F02\u7FFC\u7FCC\u7ECE\u5208\u5293\u4F7E\u8BD2\u572A\u572F\u57F8\u61FF\u82E1\u858F\u5F08\u5955\u6339\u5F0B\u5453\u54A6\u54BF\u566B\u5CC4\u5DB7\u7317\u9974\u603F\u6021\u6092\u6F2A\u8FE4\u9A7F\u7F22\u6BAA\u8D3B\u65D6\u71A0\u9487\u9552\u9571\u75CD\u7617\u7654\u7FCA\u8864\u8734\u8223\u7FBF\u7FF3\u914F\u9EDF",
  'yin': "\u8335\u836B\u56E0\u6BB7\u97F3\u9634\u59FB\u541F\u94F6\u6DEB\u5BC5\u996E\u5C39\u5F15\u9690\u5370\u80E4\u911E\u5819\u831A\u5591\u72FA\u5924\u6C24\u94DF\u763E\u8693\u972A\u9F88",
  'ying': "\u82F1\u6A31\u5A74\u9E70\u5E94\u7F28\u83B9\u8424\u8425\u8367\u8747\u8FCE\u8D62\u76C8\u5F71\u9896\u786C\u6620\u5B34\u90E2\u8314\u83BA\u8426\u6484\u5624\u81BA\u6EE2\u6F46\u701B\u745B\u748E\u6979\u9E66\u763F\u988D\u7F42",
  'yo': "\u54DF\u5537",
  'yong': "\u62E5\u4F63\u81C3\u75C8\u5EB8\u96CD\u8E0A\u86F9\u548F\u6CF3\u6D8C\u6C38\u607F\u52C7\u7528\u4FD1\u58C5\u5889\u6175\u9095\u955B\u752C\u9CD9\u9954",
  'you': "\u5E7D\u4F18\u60A0\u5FE7\u5C24\u7531\u90AE\u94C0\u72B9\u6CB9\u6E38\u9149\u6709\u53CB\u53F3\u4F51\u91C9\u8BF1\u53C8\u5E7C\u5363\u6538\u4F91\u83B8\u5466\u56FF\u5BA5\u67DA\u7337\u7256\u94D5\u75A3\u8763\u9C7F\u9EDD\u9F2C",
  'yu': "\u8FC2\u6DE4\u4E8E\u76C2\u6986\u865E\u611A\u8206\u4F59\u4FDE\u903E\u9C7C\u6109\u6E1D\u6E14\u9685\u4E88\u5A31\u96E8\u4E0E\u5C7F\u79B9\u5B87\u8BED\u7FBD\u7389\u57DF\u828B\u90C1\u5401\u9047\u55BB\u5CEA\u5FA1\u6108\u6B32\u72F1\u80B2\u8A89\u6D74\u5BD3\u88D5\u9884\u8C6B\u9A6D\u79BA\u6BD3\u4F1B\u4FE3\u8C00\u8C15\u8438\u84E3\u63C4\u5581\u5704\u5709\u5D5B\u72F3\u996B\u5EBE\u9608\u59AA\u59A4\u7EA1\u745C\u6631\u89CE\u8174\u6B24\u65BC\u715C\u71E0\u807F\u94B0\u9E46\u7610\u7600\u7AB3\u8753\u7AFD\u8201\u96E9\u9F89",
  'yuan': "\u9E33\u6E0A\u51A4\u5143\u57A3\u8881\u539F\u63F4\u8F95\u56ED\u5458\u5706\u733F\u6E90\u7F18\u8FDC\u82D1\u613F\u6028\u9662\u586C\u6C85\u5A9B\u7457\u6A7C\u7230\u7722\u9E22\u8788\u9F0B",
  'yue': "\u66F0\u7EA6\u8D8A\u8DC3\u94A5\u5CB3\u7CA4\u6708\u60A6\u9605\u9FA0\u6A3E\u5216\u94BA",
  'yun': "\u8018\u4E91\u90E7\u5300\u9668\u5141\u8FD0\u8574\u915D\u6655\u97F5\u5B55\u90D3\u82B8\u72C1\u607D\u7EAD\u6B92\u6600\u6C32",
  'za': "\u531D\u7838\u6742\u62F6\u5482",
  'zai': "\u683D\u54C9\u707E\u5BB0\u8F7D\u518D\u5728\u54B1\u5D3D\u753E",
  'zan': "\u6512\u6682\u8D5E\u74D2\u661D\u7C2A\u7CCC\u8DB1\u933E",
  'zang': "\u8D43\u810F\u846C\u5958\u6215\u81E7",
  'zao': "\u906D\u7CDF\u51FF\u85FB\u67A3\u65E9\u6FA1\u86A4\u8E81\u566A\u9020\u7682\u7076\u71E5\u5523\u7F2B",
  'ze': "\u8D23\u62E9\u5219\u6CFD\u4EC4\u8D5C\u5567\u8FEE\u6603\u7B2E\u7BA6\u8234",
  'zei': "\u8D3C",
  'zen': "\u600E\u8C2E",
  'zeng': "\u589E\u618E\u66FE\u8D60\u7F2F\u7511\u7F7E\u9503",
  'zha': "\u624E\u55B3\u6E23\u672D\u8F67\u94E1\u95F8\u7728\u6805\u69A8\u548B\u4E4D\u70B8\u8BC8\u63F8\u5412\u54A4\u54F3\u600D\u781F\u75C4\u86B1\u9F44",
  'zhai': "\u6458\u658B\u5B85\u7A84\u503A\u5BE8\u7826",
  'zhan': "\u77BB\u6BE1\u8A79\u7C98\u6CBE\u76CF\u65A9\u8F97\u5D2D\u5C55\u8638\u6808\u5360\u6218\u7AD9\u6E5B\u7EFD\u8C35\u640C\u65C3",
  'zhang': "\u6A1F\u7AE0\u5F70\u6F33\u5F20\u638C\u6DA8\u6756\u4E08\u5E10\u8D26\u4ED7\u80C0\u7634\u969C\u4EC9\u9123\u5E5B\u5D82\u7350\u5ADC\u748B\u87D1",
  'zhao': "\u62DB\u662D\u627E\u6CBC\u8D75\u7167\u7F69\u5146\u8087\u53EC\u722A\u8BCF\u68F9\u948A\u7B0A",
  'zhe': "\u906E\u6298\u54F2\u86F0\u8F99\u8005\u9517\u8517\u8FD9\u6D59\u8C2A\u966C\u67D8\u8F84\u78D4\u9E67\u891A\u8707\u8D6D",
  'zhen': "\u73CD\u659F\u771F\u7504\u7827\u81FB\u8D1E\u9488\u4FA6\u6795\u75B9\u8BCA\u9707\u632F\u9547\u9635\u7F1C\u6862\u699B\u8F78\u8D48\u80D7\u6715\u796F\u755B\u9E29",
  'zheng': "\u84B8\u6323\u7741\u5F81\u72F0\u4E89\u6014\u6574\u62EF\u6B63\u653F\u5E27\u75C7\u90D1\u8BC1\u8BE4\u5CE5\u94B2\u94EE\u7B5D",
  'zhi': "\u829D\u679D\u652F\u5431\u8718\u77E5\u80A2\u8102\u6C41\u4E4B\u7EC7\u804C\u76F4\u690D\u6B96\u6267\u503C\u4F84\u5740\u6307\u6B62\u8DBE\u53EA\u65E8\u7EB8\u5FD7\u631A\u63B7\u81F3\u81F4\u7F6E\u5E1C\u5CD9\u5236\u667A\u79E9\u7A1A\u8D28\u7099\u75D4\u6EDE\u6CBB\u7A92\u536E\u965F\u90C5\u57F4\u82B7\u646D\u5E19\u5FEE\u5F58\u54AB\u9A98\u6809\u67B3\u6800\u684E\u8F75\u8F7E\u6534\u8D3D\u81A3\u7949\u7957\u9EF9\u96C9\u9E37\u75E3\u86ED\u7D77\u916F\u8DD6\u8E2C\u8E2F\u8C78\u89EF",
  'zhong': "\u4E2D\u76C5\u5FE0\u949F\u8877\u7EC8\u79CD\u80BF\u91CD\u4EF2\u4F17\u51A2\u953A\u87BD\u8202\u822F\u8E35",
  'zhou': "\u821F\u5468\u5DDE\u6D32\u8BCC\u7CA5\u8F74\u8098\u5E1A\u5492\u76B1\u5B99\u663C\u9AA4\u5544\u7740\u501C\u8BF9\u836E\u9B3B\u7EA3\u80C4\u78A1\u7C40\u8233\u914E\u9CB7",
  'zhu': "\u73E0\u682A\u86DB\u6731\u732A\u8BF8\u8BDB\u9010\u7AF9\u70DB\u716E\u62C4\u77A9\u5631\u4E3B\u8457\u67F1\u52A9\u86C0\u8D2E\u94F8\u7B51\u4F4F\u6CE8\u795D\u9A7B\u4F2B\u4F8F\u90BE\u82CE\u8331\u6D19\u6E1A\u6F74\u9A7A\u677C\u69E0\u6A65\u70B7\u94E2\u75B0\u7603\u86B0\u7AFA\u7BB8\u7FE5\u8E85\u9E88",
  'zhua': "\u6293",
  'zhuai': "\u62FD",
  'zhuan': "\u4E13\u7816\u8F6C\u64B0\u8D5A\u7BC6\u629F\u556D\u989B",
  'zhuang': "\u6869\u5E84\u88C5\u5986\u649E\u58EE\u72B6\u4E2C",
  'zhui': "\u690E\u9525\u8FFD\u8D58\u5760\u7F00\u8411\u9A93\u7F12",
  'zhun': "\u8C06\u51C6",
  'zhuo': "\u6349\u62D9\u5353\u684C\u7422\u8301\u914C\u707C\u6D4A\u502C\u8BFC\u5EF4\u855E\u64E2\u555C\u6D5E\u6DBF\u6753\u712F\u799A\u65AB",
  'zi': "\u5179\u54A8\u8D44\u59FF\u6ECB\u6DC4\u5B5C\u7D2B\u4ED4\u7C7D\u6ED3\u5B50\u81EA\u6E0D\u5B57\u8C18\u5D6B\u59CA\u5B73\u7F01\u6893\u8F8E\u8D40\u6063\u7726\u9531\u79ED\u8014\u7B2B\u7CA2\u89DC\u8A3E\u9CBB\u9AED",
  'zong': "\u9B03\u68D5\u8E2A\u5B97\u7EFC\u603B\u7EB5\u8159\u7CBD",
  'zou': "\u90B9\u8D70\u594F\u63CD\u9139\u9CB0",
  'zu': "\u79DF\u8DB3\u5352\u65CF\u7956\u8BC5\u963B\u7EC4\u4FCE\u83F9\u5550\u5F82\u9A75\u8E74",
  'zuan': "\u94BB\u7E82\u6525\u7F35",
  'zui': "\u5634\u9189\u6700\u7F6A",
  'zun': "\u5C0A\u9075\u6499\u6A3D\u9CDF",
  'zuo': "\u6628\u5DE6\u4F50\u67DE\u505A\u4F5C\u5750\u5EA7\u961D\u963C\u80D9\u795A\u9162",
  'cou': "\u85AE\u6971\u8F8F\u8160",
  'nang': "\u652E\u54DD\u56D4\u9995\u66E9",
  'o': "\u5594",
  'dia': "\u55F2",
  'chuai': "\u562C\u81AA\u8E39",
  'cen': "\u5C91\u6D94",
  'diu': "\u94E5",
  'nou': "\u8028",
  'fou': "\u7F36",
  'bia': "\u9ADF" };exports.pinyin = pinyin;

/***/ }),

/***/ 19:
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope) {
        return this.$scope[method](args)
      }
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!************************************************!*\
  !*** D:/Git/wxapp/mini-village/common/http.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _api = _interopRequireDefault(__webpack_require__(/*! ./api.js */ 21));
var _env = _interopRequireDefault(__webpack_require__(/*! ./env.js */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}


//不带token
var httpRequest = function httpRequest(url, methods, param) {
  var httpDefaultOpts = {
    url: _env.default.baseUrl + url,
    data: param,
    method: methods,
    header: method == 'post' ? {
      Version: _api.default.versionCode,
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" } :
    {
      Version: _api.default.versionCode,
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },

    dataType: 'json' };

  var promise = new Promise(function (resolve, reject) {
    uni.request(httpDefaultOpts).then(
    function (res) {
      resolve(res[1]);
    }).
    catch(
    function (response) {
      reject(response);
    });

  });
  return promise;
};

//带Token请求
var httpTokenRequest = function httpTokenRequest(url, methods, param) {
  // let key = uni.getStorageSync('key');
  var httpDefaultOpts = {
    url: _env.default.baseUrl + url,
    data: param,
    method: methods,
    header: methods == 'post' ? {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" } :
    {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },

    dataType: 'json' };

  var promise = new Promise(function (resolve, reject) {
    uni.request(httpDefaultOpts).then(function (res) {
      resolve(res[1]);
      // if (res[1].data.msg === "请登录") {				
      // 	uni.navigateTo({
      // 		url: '../login/login' 
      // 	});	
      // }
    }).
    catch(
    function (response) {
      reject(response);
    });

  });
  return promise;
};

// php请求
var phpTokenRequest = function phpTokenRequest(url, methods, param) {
  // let key = uni.getStorageSync('key');
  var httpDefaultOpts = {
    url: _env.default.phpUrl + url,
    data: param,
    method: methods,
    header: methods == 'post' ? {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" } :
    {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },

    dataType: 'json' };

  var promise = new Promise(function (resolve, reject) {
    uni.request(httpDefaultOpts).then(
    function (res) {
      resolve(res[1]);
      // if (res[1].data.msg === "请登录") {
      // 	uni.navigateTo({
      // 		url: '../login/login' 
      // 	});	
      // }
    }).
    catch(
    function (response) {
      reject(response);
    });

  });
  return promise;
};var _default =

{
  httpRequest: httpRequest,
  httpTokenRequest: httpTokenRequest,
  phpTokenRequest: phpTokenRequest };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 21:
/*!***********************************************!*\
  !*** D:/Git/wxapp/mini-village/common/api.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _VERSION$CLIENT$Key$p;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var VERSION = "1.0.0"; //版本
var userInfo = uni.getStorageSync('userInfo');
var key = userInfo.key;


// ||"b77ffd1da62aee94d3aedc7c94696d2d"
//     9b4e4007d0270f9094b35533386b4a37
var _default = (_VERSION$CLIENT$Key$p = {

  VERSION: VERSION, //版本
  CLIENT: 'Other', //客户端
  Key: key,
  // Key: 'ca38096355b5b455f5a74c26',
  post: 'post',
  get: 'get',
  currentCity: 'search/currentCity', //当前城市
  getSmallProceduresIndex: 'smallproduresindex/getSmallProceduresIndex', //小程序首页
  villageInfo: 'villagedetails/villageInfo', //乡村详情页信息
  getInformation: 'smallproduresindex/getInformation', //小程序首页（热门有趣乡村风采）
  addVillageVoteNum: 'smallproduresindex/addVillageVoteNum', //小程序乡村魅力版乡村投票
  getCharmingVillageRank: 'smallproduresindex/getCharmingVillageRank', //小程序魅力乡村排行
  getVillageImageList: 'villagedetails/getVillageImageList', //村景
  fileUpload: 'upload/fileUpload', //图片上传
  UploadImage: 'Upload.UploadImage', //php上传
  addVillageImgList: 'villagedetails/addVillageImgList', //村景图片上传
  getLabels: 'dictionary/getLabels', //获取标签列表 (0默认,1约伴标签,2问答标签3文章标签 5 村特色风采照片标签 6 乡村标签)
  getVillageCharacteristicImgList: 'villagedetails/getVillageCharacteristicImgList', //特色风采图片展示
  addCharacteristicImg: 'villagedetails/addCharacteristicImg', //特色风采添加图片
  getVillageInformatioinList: 'villagedetails/getVillageInformatioinList', //特色风采咨询展示
  getVillageVideoList: 'villagedetails/getVillageVideoList', //特色风采视频列表展示
  addVillageVideo: 'villagedetails/addVillageVideo', // 特色风采添加视频
  editVillageIntro: 'villagedetails/editVillageIntro', // 提交，编辑村简介
  getVillageIntegralRecord: 'villagedetails/getVillageIntegralRecord', // 微豆排行版
  getVillageRanking: 'villagedetails/getVillageRanking', // 村排名展示
  dayliTask: 'smallProduresContribution/dayliTask', // 获取小程序每日任务
  myContribution: 'account/myIntegralRecord', // 小程序贡献值明细
  GetDocument: 'Index.GetDocument', // 获取文档接口
  AskforAdmin: 'Village.AskforAdmin', // 村管理员申请
  villageEdit: 'villagedetails/villageEdit', // 编辑乡村详情
  GetAreaList: 'Index.GetAreaList', // 获取地区列表
  addMyVillage: 'villagedetails/addMyVillage', // 小程序添加我的家乡
  getSearchVillage: 'smallproduressearch/getSearchVillage', // 小程序搜索美丽乡村
  GetMemberInfo: 'Member.GetMemberInfo', // 获取用户信息
  editMember: 'Member.EditMember', // 修改用户信息
  getFansNum: 'member/getFansNum', // 获取我的关注，粉丝用户数
  getFriendList: 'member/getFriendList', // 获取我的好友列表
  getSpMessageByType: 'smallproduresMessage/getSpMessageByType', // 消息中心按照类别获取列表 3系统消息 5 本村消息 6 评论消息 7 点赞消息 8 粉丝消息
  getSpMessageCenterInfo: 'smallproduresMessage/getSpMessageCenterInfo', // 获取小程序的消息中心首页展示
  getOrderList: 'order/getOrderList', // 我的订单
  cancelOrder: 'order/cancelOrder', // 取消订单
  deleteOrder: 'order/deleteOrder', // 删除订单
  Getopenid: 'Login.Getopenid', // 获取微信小程序OPENID
  ThirdLogin: 'Login.ThirdLogin', // 第三方登录
  getDynamicList: 'smallproduresindex/getDynamicList', // 获取动态  1:最新 2:热门 3:关注人的动态
  adddynamic: 'Tourist.Adddynamic', // 动态点赞 //点赞/评论/回复 1.0.0
  evaPraise: 'Tourist.EvaPraise', // 对评论点赞
  GetWxMobile: 'Login.GetWxMobile', // 微信手机号解密
  BindPhone: 'Login.BindPhone', // 微信绑定手机号
  AddTourist: 'Tourist.AddTourist', // 发布动态
  likeVideo: 'video/likeVideo', // 点赞视频
  viewVideo: 'video/viewVideo', // 更新观看视频数
  getVideoCommentList: 'video/getVideoCommentList', // 获取视频评论列表
  commentVideo: 'video/commentVideo' }, _defineProperty(_VERSION$CLIENT$Key$p, "getFriendList",
'member/getFriendList'), _defineProperty(_VERSION$CLIENT$Key$p, "getChatroomVillagerList",
'smallProduresChat/getChatroomVillagerList'), _defineProperty(_VERSION$CLIENT$Key$p, "getSearchVillageByAreaId",
'smallproduressearch/getSearchVillageByAreaId'), _defineProperty(_VERSION$CLIENT$Key$p, "WxBindMobile",
'Login.WxBindMobile'), _defineProperty(_VERSION$CLIENT$Key$p, "getAddress",
'public/getAddress'), _defineProperty(_VERSION$CLIENT$Key$p, "getLogAndLat",
'public/getLogAndLat'), _defineProperty(_VERSION$CLIENT$Key$p, "Getopenid",
'Login.Getopenid'), _defineProperty(_VERSION$CLIENT$Key$p, "JoinVillage",
'member/JoinVillage'), _defineProperty(_VERSION$CLIENT$Key$p, "exitVillage",
'member/exitVillage'), _defineProperty(_VERSION$CLIENT$Key$p, "villageDynamics",
'villagedetails/villageDynamics'), _defineProperty(_VERSION$CLIENT$Key$p, "shareTouristCircle",
'tourist/shareTouristCircle'), _defineProperty(_VERSION$CLIENT$Key$p, "addVillageEvaluatinParise",
'villagedetails/addVillageEvaluatinParise'), _defineProperty(_VERSION$CLIENT$Key$p, "addAttention",
'attention/addAttention'), _defineProperty(_VERSION$CLIENT$Key$p, "getChatroomNum",

'smallProduresChat/getChatroomNum'), _defineProperty(_VERSION$CLIENT$Key$p, "getVillageEvaluation",
'villagedetails/getVillageEvaluation'), _defineProperty(_VERSION$CLIENT$Key$p, "getMemberCharacteristicImgList",

'smallprodureshome/memberCharacteristicImgList'), _defineProperty(_VERSION$CLIENT$Key$p, "getMemberDynamicList",
'smallprodureshome/memberDynamicList'), _defineProperty(_VERSION$CLIENT$Key$p, "getMemberInformatioionList",
'smallprodureshome/memberInformatioinList'), _defineProperty(_VERSION$CLIENT$Key$p, "getMemberVideoList",
'smallprodureshome/memberVideoList'), _defineProperty(_VERSION$CLIENT$Key$p, "getMyHomeInfo",
'smallprodureshome/myHomeInfo'), _defineProperty(_VERSION$CLIENT$Key$p, "getTargetHomeInfo",
'smallprodureshome/targetHomeInfo'), _VERSION$CLIENT$Key$p);exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 22:
/*!***********************************************!*\
  !*** D:/Git/wxapp/mini-village/common/env.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var baseUrl = "";
var img1 = "";
var phpUrl = "";

// App不限制http,https的，小程序限制正式环境只能用https,但测试环境下可以用http。

if (true) {
  // 测试环境
  // baseUrl = 'https://api.ncweilv.com/new/'
  // phpUrl ='https://m.ncweilv.com/nongcheng_api/Public/nongcheng/?service=',
  // img1 = 'https://ncweilv-download.oss-cn-shenzhen.aliyuncs.com/mini-app/' 

  // 正式环境
  // baseUrl = 'https://m.ncweilv.com/api/'
  // phpUrl ="https://m.ncweilv.com/nongcheng_api/Public/nongcheng/?service=",
  // img1 = 'https://ncweilv-download.oss-cn-shenzhen.aliyuncs.com/mini-app/' 

  // 测试环境
  baseUrl = 'http://test.api.ncweilv.com/new/';
  phpUrl = 'http://test.m.ncweilv.com/nongcheng_api/Public/nongcheng/?service=',
  img1 = 'https://ncweilv-download.oss-cn-shenzhen.aliyuncs.com/mini-app/';
}


// export default baseUrl
var _default = {
  baseUrl: baseUrl,
  phpUrl: phpUrl,
  img1: img1 };exports.default = _default;

/***/ }),

/***/ 23:
/*!************************************************!*\
  !*** D:/Git/wxapp/mini-village/common/chat.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _jmessageWxappletSdk140Min = _interopRequireDefault(__webpack_require__(/*! js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js */ 12));

var _md = _interopRequireDefault(__webpack_require__(/*! js_sdk/js-md5/src/md5.js */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // import JMessage from 'js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.2/jmessage-wxapplet-sdk-1.4.2.min.js'

function JIMinit() {
  var that = this;
  _vue.default.prototype.JIM = new _jmessageWxappletSdk140Min.default({});
  // var appkey = 'd8ce7a8f28afaced6f89b5af';
  var appkey = '19c3ab81eb89dd856b051c03';
  // var key = this.$api.Key;
  var key = 'ca38096355b5b455f5a74c26'; //测试使用
  var timestamp = Date.parse(new Date());
  var signature = (0, _md.default)("appkey=19c3ab81eb89dd856b051c03&timestamp=" + timestamp +
  "&random_str=022cd9fd995849b66666&key=" + key);
  console.log(signature);
  that.JIM.init({
    "appkey": appkey,
    "random_str": "022cd9fd995849b66666",
    "signature": signature,
    "timestamp": timestamp,
    "flag": 1 }).
  onSuccess(function (data) {
    var userInfo = uni.getStorageSync('userInfo');
    var username = userInfo.member_mobile;
    var password = userInfo.member_mobile + '1';
    console.log('initonSuccessdata', data);
    console.log(userInfo.member_mobile);
    that.JIM.register({
      'username': username,
      'password': password,
      'is_md5': false,
      'address': '深圳' }).
    onSuccess(function (data) {
      console.log('注册', data);
    }).onFail(function (data) {
      console.log('注册', data);
    });
  }).onFail(function (data) {
    console.log(data);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!***************************************************!*\
  !*** D:/Git/wxapp/mini-village/static/common.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4:
/*!********************************************!*\
  !*** D:/Git/wxapp/mini-village/pages.json ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 473:
/*!****************************************************************!*\
  !*** D:/Git/wxapp/mini-village/js_sdk/js-md5/build/md5.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__; /**
               * [js-md5]{@link https://github.com/emn178/js-md5}
               *
               * @namespace md5
               * @version 0.7.3
               * @author Chen, Yi-Cyuan [emn178@gmail.com]
               * @copyright Chen, Yi-Cyuan 2014-2017
               * @license MIT
               */
!function () {"use strict";function t(t) {if (t) d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0, this.blocks = d, this.buffer8 = l;else if (a) {var r = new ArrayBuffer(68);this.buffer8 = new Uint8Array(r), this.blocks = new Uint32Array(r);} else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;}var r = "input is invalid type",e = "object" == typeof window,i = e ? window : {};i.JS_MD5_NO_WINDOW && (e = !1);var s = !e && "object" == typeof self,h = !i.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;h ? i = global : s && (i = self);var f = !i.JS_MD5_NO_COMMON_JS && "object" == typeof module && module.exports,o =  true && __webpack_require__(/*! !webpack amd options */ 16),a = !i.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,n = "0123456789abcdef".split(""),u = [128, 32768, 8388608, -2147483648],y = [0, 8, 16, 24],c = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d = [],l;if (a) {var A = new ArrayBuffer(68);l = new Uint8Array(A), d = new Uint32Array(A);}!i.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function (t) {return "[object Array]" === Object.prototype.toString.call(t);}), !a || !i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer;});var b = function b(r) {return function (e) {return new t(!0).update(e)[r]();};},v = function v() {var r = b("hex");h && (r = w(r)), r.create = function () {return new t();}, r.update = function (t) {return r.create().update(t);};for (var e = 0; e < c.length; ++e) {var i = c[e];r[i] = b(i);}return r;},w = function w(t) {var e = eval("require('crypto')"),i = eval("require('buffer').Buffer"),s = function s(_s) {if ("string" == typeof _s) return e.createHash("md5").update(_s, "utf8").digest("hex");if (null === _s || void 0 === _s) throw r;return _s.constructor === ArrayBuffer && (_s = new Uint8Array(_s)), Array.isArray(_s) || ArrayBuffer.isView(_s) || _s.constructor === i ? e.createHash("md5").update(new i(_s)).digest("hex") : t(_s);};return s;};t.prototype.update = function (t) {if (!this.finalized) {var e,i = typeof t;if ("string" !== i) {if ("object" !== i) throw r;if (null === t) throw r;if (a && t.constructor === ArrayBuffer) t = new Uint8Array(t);else if (!(Array.isArray(t) || a && ArrayBuffer.isView(t))) throw r;e = !0;}for (var s, h, f = 0, o = t.length, n = this.blocks, u = this.buffer8; f < o;) {if (this.hashed && (this.hashed = !1, n[0] = n[16], n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0), e) {if (a) for (h = this.start; f < o && h < 64; ++f) {u[h++] = t[f];} else for (h = this.start; f < o && h < 64; ++f) {n[h >> 2] |= t[f] << y[3 & h++];}} else if (a) for (h = this.start; f < o && h < 64; ++f) {(s = t.charCodeAt(f)) < 128 ? u[h++] = s : s < 2048 ? (u[h++] = 192 | s >> 6, u[h++] = 128 | 63 & s) : s < 55296 || s >= 57344 ? (u[h++] = 224 | s >> 12, u[h++] = 128 | s >> 6 & 63, u[h++] = 128 | 63 & s) : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++f)), u[h++] = 240 | s >> 18, u[h++] = 128 | s >> 12 & 63, u[h++] = 128 | s >> 6 & 63, u[h++] = 128 | 63 & s);} else for (h = this.start; f < o && h < 64; ++f) {(s = t.charCodeAt(f)) < 128 ? n[h >> 2] |= s << y[3 & h++] : s < 2048 ? (n[h >> 2] |= (192 | s >> 6) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]) : s < 55296 || s >= 57344 ? (n[h >> 2] |= (224 | s >> 12) << y[3 & h++], n[h >> 2] |= (128 | s >> 6 & 63) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]) : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++f)), n[h >> 2] |= (240 | s >> 18) << y[3 & h++], n[h >> 2] |= (128 | s >> 12 & 63) << y[3 & h++], n[h >> 2] |= (128 | s >> 6 & 63) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]);}this.lastByteIndex = h, this.bytes += h - this.start, h >= 64 ? (this.start = h - 64, this.hash(), this.hashed = !0) : this.start = h;}return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;}}, t.prototype.finalize = function () {if (!this.finalized) {this.finalized = !0;var t = this.blocks,r = this.lastByteIndex;t[r >> 2] |= u[3 & r], r >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();}}, t.prototype.hash = function () {var t,r,e,i,s,h,f = this.blocks;this.first ? r = ((r = ((t = ((t = f[0] - 680876937) << 7 | t >>> 25) - 271733879 << 0) ^ (e = ((e = (-271733879 ^ (i = ((i = (-1732584194 ^ 2004318071 & t) + f[1] - 117830708) << 12 | i >>> 20) + t << 0) & (-271733879 ^ t)) + f[2] - 1126478375) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[3] - 1316259209) << 22 | r >>> 10) + e << 0 : (t = this.h0, r = this.h1, e = this.h2, r = ((r += ((t = ((t += ((i = this.h3) ^ r & (e ^ i)) + f[0] - 680876936) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[1] - 389564586) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[2] + 606105819) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[3] - 1044525330) << 22 | r >>> 10) + e << 0), r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[4] - 176418897) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[5] + 1200080426) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[6] - 1473231341) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[7] - 45705983) << 22 | r >>> 10) + e << 0, r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[8] + 1770035416) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[9] - 1958414417) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[10] - 42063) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[11] - 1990404162) << 22 | r >>> 10) + e << 0, r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[12] + 1804603682) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[13] - 40341101) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[14] - 1502002290) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[15] + 1236535329) << 22 | r >>> 10) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[1] - 165796510) << 5 | t >>> 27) + r << 0) ^ r)) + f[6] - 1069501632) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[11] + 643717713) << 14 | e >>> 18) + i << 0) ^ i)) + f[0] - 373897302) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[5] - 701558691) << 5 | t >>> 27) + r << 0) ^ r)) + f[10] + 38016083) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[15] - 660478335) << 14 | e >>> 18) + i << 0) ^ i)) + f[4] - 405537848) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[9] + 568446438) << 5 | t >>> 27) + r << 0) ^ r)) + f[14] - 1019803690) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[3] - 187363961) << 14 | e >>> 18) + i << 0) ^ i)) + f[8] + 1163531501) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[13] - 1444681467) << 5 | t >>> 27) + r << 0) ^ r)) + f[2] - 51403784) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[7] + 1735328473) << 14 | e >>> 18) + i << 0) ^ i)) + f[12] - 1926607734) << 20 | r >>> 12) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[5] - 378558) << 4 | t >>> 28) + r << 0)) + f[8] - 2022574463) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[11] + 1839030562) << 16 | e >>> 16) + i << 0)) + f[14] - 35309556) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[1] - 1530992060) << 4 | t >>> 28) + r << 0)) + f[4] + 1272893353) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[7] - 155497632) << 16 | e >>> 16) + i << 0)) + f[10] - 1094730640) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[13] + 681279174) << 4 | t >>> 28) + r << 0)) + f[0] - 358537222) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[3] - 722521979) << 16 | e >>> 16) + i << 0)) + f[6] + 76029189) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[9] - 640364487) << 4 | t >>> 28) + r << 0)) + f[12] - 421815835) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[15] + 530742520) << 16 | e >>> 16) + i << 0)) + f[2] - 995338651) << 23 | r >>> 9) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[0] - 198630844) << 6 | t >>> 26) + r << 0) | ~e)) + f[7] + 1126891415) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[14] - 1416354905) << 15 | e >>> 17) + i << 0) | ~t)) + f[5] - 57434055) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[12] + 1700485571) << 6 | t >>> 26) + r << 0) | ~e)) + f[3] - 1894986606) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[10] - 1051523) << 15 | e >>> 17) + i << 0) | ~t)) + f[1] - 2054922799) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[8] + 1873313359) << 6 | t >>> 26) + r << 0) | ~e)) + f[15] - 30611744) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[6] - 1560198380) << 15 | e >>> 17) + i << 0) | ~t)) + f[13] + 1309151649) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[4] - 145523070) << 6 | t >>> 26) + r << 0) | ~e)) + f[11] - 1120210379) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[2] + 718787259) << 15 | e >>> 17) + i << 0) | ~t)) + f[9] - 343485551) << 21 | r >>> 11) + e << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = r - 271733879 << 0, this.h2 = e - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + e << 0, this.h3 = this.h3 + i << 0);}, t.prototype.hex = function () {this.finalize();var t = this.h0,r = this.h1,e = this.h2,i = this.h3;return n[t >> 4 & 15] + n[15 & t] + n[t >> 12 & 15] + n[t >> 8 & 15] + n[t >> 20 & 15] + n[t >> 16 & 15] + n[t >> 28 & 15] + n[t >> 24 & 15] + n[r >> 4 & 15] + n[15 & r] + n[r >> 12 & 15] + n[r >> 8 & 15] + n[r >> 20 & 15] + n[r >> 16 & 15] + n[r >> 28 & 15] + n[r >> 24 & 15] + n[e >> 4 & 15] + n[15 & e] + n[e >> 12 & 15] + n[e >> 8 & 15] + n[e >> 20 & 15] + n[e >> 16 & 15] + n[e >> 28 & 15] + n[e >> 24 & 15] + n[i >> 4 & 15] + n[15 & i] + n[i >> 12 & 15] + n[i >> 8 & 15] + n[i >> 20 & 15] + n[i >> 16 & 15] + n[i >> 28 & 15] + n[i >> 24 & 15];}, t.prototype.toString = t.prototype.hex, t.prototype.digest = function () {this.finalize();var t = this.h0,r = this.h1,e = this.h2,i = this.h3;return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255];}, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function () {this.finalize();var t = new ArrayBuffer(16),r = new Uint32Array(t);return r[0] = this.h0, r[1] = this.h1, r[2] = this.h2, r[3] = this.h3, t;}, t.prototype.buffer = t.prototype.arrayBuffer, t.prototype.base64 = function () {for (var t, r, e, i = "", s = this.array(), h = 0; h < 15;) {t = s[h++], r = s[h++], e = s[h++], i += p[t >>> 2] + p[63 & (t << 4 | r >>> 4)] + p[63 & (r << 2 | e >>> 6)] + p[63 & e];}return t = s[h], i += p[t >>> 2] + p[t << 4 & 63] + "==";};var _ = v();f ? module.exports = _ : (i.md5 = _, o && !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return _;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 14), __webpack_require__(/*! ./../../../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 484:
/*!*************************************************************************!*\
  !*** D:/Git/wxapp/mini-village/components/mescroll-uni/mescroll-uni.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = MeScroll; /* mescroll-uni
                                                                                                        * version 1.1.0
                                                                                                        * 2019-07-01 wenju
                                                                                                        * http://www.mescroll.com
                                                                                                        */

function MeScroll(options) {
  var me = this;
  me.version = '1.1.0'; // mescroll版本号
  me.options = options || {}; // 配置

  me.isDownScrolling = false; // 是否在执行下拉刷新的回调
  me.isUpScrolling = false; // 是否在执行上拉加载的回调
  var hasDownCallback = me.options.down && me.options.down.callback; // 是否配置了down的callback

  // 初始化下拉刷新
  me.initDownScroll();
  // 初始化上拉加载,则初始化
  me.initUpScroll();

  // 自动加载
  setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
    // 自动触发下拉刷新 (只有配置了down的callback才自动触发下拉刷新)
    if (me.optDown.use && me.optDown.auto && hasDownCallback) {
      if (me.optDown.autoShowLoading) {
        me.triggerDownScroll(); // 显示下拉进度,执行下拉回调
      } else {
        me.optDown.callback && me.optDown.callback(me); // 不显示下拉进度,直接执行下拉回调
      }
    }
    // 自动触发上拉加载
    me.optUp.use && me.optUp.auto && !me.isUpAutoLoad && me.triggerUpScroll();
  }, 30); // 需让me.optDown.inited和me.optUp.inited先执行
}

/* 配置参数:下拉刷新 */
MeScroll.prototype.extendDownScroll = function (optDown) {
  // 下拉刷新的配置
  MeScroll.extend(optDown, {
    use: true, // 是否启用下拉刷新; 默认true
    auto: false, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
    autoShowLoading: false, // 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度; 默认false
    isLock: false, // 是否锁定下拉刷新,默认false;
    isBoth: true, // 下拉刷新时,如果滑动到列表底部是否可以同时触发上拉加载;默认true,两者可同时触发;
    offset: 80, // 在列表顶部,下拉大于80px,松手即可触发下拉刷新的回调
    fps: 40, // 下拉节流 (值越大每秒刷新频率越高)
    inOffsetRate: 10, // 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
    outOffsetRate: 10, // 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
    bottomOffset: 20, // 当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
    minAngle: 45, // 向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;
    textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本
    textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本
    textLoading: '加载中 ...', // 加载中的提示文本
    inited: null, // 下拉刷新初始化完毕的回调
    inOffset: null, // 下拉的距离进入offset范围内那一刻的回调
    outOffset: null, // 下拉的距离大于offset那一刻的回调
    onMoving: null, // 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
    beforeLoading: null, // 准备触发下拉刷新的回调: 如果return true,将不触发showLoading和callback回调; 常用来完全自定义下拉刷新, 参考案例【淘宝 v6.8.0】
    showLoading: null, // 显示下拉刷新进度的回调
    afterLoading: null, // 准备结束下拉的回调. 返回结束下拉的延时执行时间,默认0ms; 常用于结束下拉之前再显示另外一小段动画,才去隐藏下拉刷新的场景, 参考案例【dotJump】
    endDownScroll: null, // 结束下拉刷新的回调
    callback: function callback(mescroll) {
      // 下拉刷新的回调;默认重置上拉加载列表为第一页
      mescroll.resetUpScroll();
    } });

};

/* 配置参数:上拉加载 */
MeScroll.prototype.extendUpScroll = function (optUp) {
  // 上拉加载的配置
  MeScroll.extend(optUp, {
    use: true, // 是否启用上拉加载; 默认true
    auto: false, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认false
    isLock: false, // 是否锁定上拉加载,默认false;
    isBoth: true, // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认true,两者可同时触发;
    callback: null, // 上拉加载的回调;function(page,mescroll){ }
    page: {
      num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
      size: 10, // 每页数据的数量
      time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
    },
    fps: 40, // 上拉节流 (值越大每秒刷新频率越高)
    noMoreSize: 10, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
    offset: 80, // 距底部多远时,触发upCallback
    textLoading: '加载中 ...', // 加载中的提示文本
    textNoMore: '-- END --', // 没有更多数据的提示文本
    inited: null, // 初始化完毕的回调
    showLoading: null, // 显示加载中的回调
    showNoMore: null, // 显示无更多数据的回调
    hideUpScroll: null, // 隐藏上拉加载的回调
    toTop: {
      // 回到顶部按钮,需配置src才显示
      src: null, // 图片路径,默认null (建议写成网络图,不必考虑相对路径)
      offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000
      duration: 300, // 回到顶部的动画时长,默认300ms
      btnClick: null, // 点击按钮的回调
      onShow: null // 是否显示的回调
    },
    empty: {
      use: true, // 是否显示空布局
      icon: null, // 图标路径
      tip: '~ 暂无相关数据 ~', // 提示
      btnText: '', // 按钮
      btnClick: null, // 点击按钮的回调
      onShow: null // 是否显示的回调
    },
    onScroll: false // 是否监听滚动事件
  });
};

/* 配置参数 */
MeScroll.extend = function (userOption, defaultOption) {
  if (!userOption) return defaultOption;
  for (var key in defaultOption) {
    if (userOption[key] == null) {
      userOption[key] = defaultOption[key];
    } else if (typeof userOption[key] === 'object') {
      MeScroll.extend(userOption[key], defaultOption[key]); // 深度匹配
    }
  }
  return userOption;
};

/* -------初始化下拉刷新------- */
MeScroll.prototype.initDownScroll = function () {
  var me = this;
  // 配置参数
  me.optDown = me.options.down || {};
  me.extendDownScroll(me.optDown);

  me.downHight = 0; // 下拉区域的高度

  // 在页面中加入下拉布局
  if (me.optDown.use && me.optDown.inited) {
    // 初始化完毕的回调
    setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
      me.optDown.inited(me);
    }, 0);
  }
};

/* 列表touchstart事件 */
MeScroll.prototype.touchstartEvent = function (e) {
  if (!this.optDown.use) return;
  var me = this;

  me.startPoint = me.getPoint(e); // 记录起点
  me.lastPoint = me.startPoint; // 重置上次move的点
  me.maxTouchmoveY = me.getBodyHeight() - me.optDown.bottomOffset; // 手指触摸的最大范围(写在touchstart避免body获取高度为0的情况)
  me.inTouchend = false; // 标记不是touchend
};

/* 列表touchmove事件 */
MeScroll.prototype.touchmoveEvent = function (e) {
  if (!this.optDown.use) return;
  if (!this.startPoint) return;
  var me = this;

  // 节流
  var t = new Date().getTime();
  if (me.moveTime && t - me.moveTime < me.moveTimeDiff) {// 小于节流时间,则不处理
    return;
  } else {
    me.moveTime = t;
    me.moveTimeDiff = 1000 / me.optDown.fps;
  }

  var scrollTop = me.getScrollTop(); // 当前滚动条的距离
  var curPoint = me.getPoint(e); // 当前点

  var moveY = curPoint.y - me.startPoint.y; // 和起点比,移动的距离,大于0向下拉,小于0向上拉

  // (向下拉&&在顶部)
  if (moveY > 0 && scrollTop <= 0) {

    // 可下拉的条件
    if (me.optDown.use && !me.inTouchend && !me.isDownScrolling && !me.optDown.isLock && (!me.isUpScrolling || me.isUpScrolling &&
    me.optUp.isBoth)) {

      // 下拉的角度是否在配置的范围内
      var x = Math.abs(me.lastPoint.x - curPoint.x);
      var y = Math.abs(me.lastPoint.y - curPoint.y);
      var z = Math.sqrt(x * x + y * y);
      if (z !== 0) {
        var angle = Math.asin(y / z) / Math.PI * 180; // 两点之间的角度,区间 [0,90]
        if (angle < me.optDown.minAngle) return; // 如果小于配置的角度,则不往下执行下拉刷新
      }

      // 如果手指的位置超过配置的距离,则提前结束下拉,避免Webview嵌套导致touchend无法触发
      if (me.maxTouchmoveY > 0 && curPoint.y >= me.maxTouchmoveY) {
        me.inTouchend = true; // 标记执行touchend
        me.touchendEvent(); // 提前触发touchend
        return;
      }

      me.preventDefault(e); // 阻止默认事件

      var diff = curPoint.y - me.lastPoint.y; // 和上次比,移动的距离 (大于0向下,小于0向上)

      // 下拉距离  < 指定距离
      if (me.downHight < me.optDown.offset) {
        if (me.movetype !== 1) {
          me.movetype = 1; // 加入标记,保证只执行一次
          me.optDown.inOffset && me.optDown.inOffset(me); // 进入指定距离范围内那一刻的回调,只执行一次
          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来
        }
        me.downHight += diff * me.optDown.inOffsetRate; // 越往下,高度变化越小

        // 指定距离  <= 下拉距离
      } else {
        if (me.movetype !== 2) {
          me.movetype = 2; // 加入标记,保证只执行一次
          me.optDown.outOffset && me.optDown.outOffset(me); // 下拉超过指定距离那一刻的回调,只执行一次
          me.isMoveDown = true; // 标记下拉区域高度改变,在touchend重置回来
        }
        if (diff > 0) {// 向下拉
          me.downHight += Math.round(diff * me.optDown.outOffsetRate); // 越往下,高度变化越小
        } else {// 向上收
          me.downHight += diff; // 向上收回高度,则向上滑多少收多少高度
        }
      }

      var rate = me.downHight / me.optDown.offset; // 下拉区域当前高度与指定距离的比值
      me.optDown.onMoving && me.optDown.onMoving(me, rate, me.downHight); // 下拉过程中的回调,一直在执行
    }

  }
  me.lastPoint = curPoint; // 记录本次移动的点
};

/* 列表touchend事件 */
MeScroll.prototype.touchendEvent = function (e) {
  if (!this.optDown.use) return;
  // 如果下拉区域高度已改变,则需重置回来
  if (this.isMoveDown) {
    var me = this;
    if (me.downHight >= me.optDown.offset) {
      // 符合触发刷新的条件
      me.triggerDownScroll();
    } else {
      // 不符合的话 则重置
      me.downHight = 0;
      me.optDown.endDownScroll && me.optDown.endDownScroll(me);
    }
    me.movetype = 0;
    me.isMoveDown = false;
  }
};

/* 根据点击滑动事件获取第一个手指的坐标 */
MeScroll.prototype.getPoint = function (e) {
  return {
    x: e.touches ? e.touches[0].pageX : e.clientX,
    y: e.touches ? e.touches[0].pageY : e.clientY };

};

/* 触发下拉刷新 */
MeScroll.prototype.triggerDownScroll = function () {
  if (this.optDown.beforeLoading && this.optDown.beforeLoading(this)) {
    //return true则处于完全自定义状态
  } else {
    this.showDownScroll(); // 下拉刷新中...
    this.optDown.callback && this.optDown.callback(this); // 执行回调,联网加载数据
  }
};

/* 显示下拉进度布局 */
MeScroll.prototype.showDownScroll = function () {
  this.isDownScrolling = true; // 标记下拉中
  this.downHight = this.optDown.offset; // 更新下拉区域高度
  this.optDown.showLoading(this, this.downHight); // 下拉刷新中...
};

/* 结束下拉刷新 */
MeScroll.prototype.endDownScroll = function () {
  var me = this;
  // 结束下拉刷新的方法
  var endScroll = function endScroll() {
    me.downHight = 0;
    me.isDownScrolling = false;
    me.optDown.endDownScroll && me.optDown.endDownScroll(me);
  };
  // 结束下拉刷新时的回调
  var delay = 0;
  if (me.optDown.afterLoading) delay = me.optDown.afterLoading(me); // 结束下拉刷新的延时,单位ms
  if (typeof delay === 'number' && delay > 0) {
    setTimeout(endScroll, delay);
  } else {
    endScroll();
  }
};

/* 锁定下拉刷新:isLock=ture,null锁定;isLock=false解锁 */
MeScroll.prototype.lockDownScroll = function (isLock) {
  if (isLock == null) isLock = true;
  this.optDown.isLock = isLock;
};

/* -------初始化上拉加载------- */
MeScroll.prototype.initUpScroll = function () {
  var me = this;
  // 配置参数
  me.optUp = me.options.up || {
    use: false };

  me.extendUpScroll(me.optUp);

  if (me.optUp.use === false) return; // 配置不使用上拉加载时,则不初始化上拉布局
  me.optUp.hasNext = true; // 如果使用上拉,则默认有下一页
  me.optUp.empty.btnText = me.optUp.empty.btnText || me.optUp.empty.btntext; // 兼容以前版本的btntext

  // 初始化完毕的回调
  if (me.optUp.inited) {
    setTimeout(function () {// 待主线程执行完毕再执行,避免new MeScroll未初始化,在回调获取不到mescroll的实例
      me.optUp.inited(me);
    }, 0);
  }
};

/*滚动到底部的事件*/
MeScroll.prototype.onReachBottom = function () {
  console.warn('当前版本无需再调用mescroll.onReachBottom()'); // 兼容1.0.3以下版本,防止报错
};
MeScroll.prototype.scrolltolower = function () {
  if (!this.isUpScrolling && (!this.isDownScrolling || this.isDownScrolling && this.optDown.isBoth)) {
    if (!this.optUp.isLock && this.optUp.hasNext) {
      this.triggerUpScroll();
    }
  }
};

/*列表滚动事件*/
MeScroll.prototype.onPageScroll = function () {
  console.warn('当前版本无需再调用mescroll.onPageScroll(e)'); // 兼容1.0.3以下版本,防止报错
};
MeScroll.prototype.scroll = function (e, onScroll) {
  // 节流
  var t = new Date().getTime();
  if (this.scrollTime && t - this.scrollTime < this.scrollTimeDiff) {// 小于节流时间,则不处理
    return;
  } else {
    this.scrollTime = t;
    this.scrollTimeDiff = 1000 / this.optUp.fps;
  }

  var me = this;
  var scrollTop = e.scrollTop;

  // 顶部按钮的显示隐藏
  if (scrollTop > 0 && me.optUp.toTop.src) {
    if (scrollTop >= me.optUp.toTop.offset) {
      me.showTopBtn();
    } else {
      me.hideTopBtn();
    }
  }

  // 滑动监听
  if (me.optUp.onScroll && onScroll) {
    // 向上滑还是向下滑动
    if (me.preScrollY == null) me.preScrollY = 0;
    me.isScrollUp = scrollTop - me.preScrollY > 0;
    me.preScrollY = scrollTop;
    // 滚动回调
    onScroll(me, scrollTop, me.isScrollUp);
  }

  me.setScrollTop(scrollTop);
};

/* 触发上拉加载 */
MeScroll.prototype.triggerUpScroll = function () {
  if (this.optUp.callback && !this.isUpScrolling) {
    this.showUpScroll(); // 上拉加载中...
    this.optUp.page.num++; // 预先加一页,如果失败则减回
    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调
    this.num = this.optUp.page.num; // 把最新的页数赋值在mescroll上,避免对page的影响
    this.size = this.optUp.page.size; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.time = this.optUp.page.time; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.optUp.callback(this); // 执行回调,联网加载数据
  }
};

/* 显示上拉加载中 */
MeScroll.prototype.showUpScroll = function () {
  this.isUpScrolling = true; // 标记上拉加载中
  this.optUp.showLoading && this.optUp.showLoading(this); // 回调
};

/* 显示上拉无更多数据 */
MeScroll.prototype.showNoMore = function () {
  this.optUp.hasNext = false; // 标记无更多数据
  this.optUp.showNoMore && this.optUp.showNoMore(this); // 回调
};

/* 隐藏上拉区域**/
MeScroll.prototype.hideUpScroll = function () {
  this.optUp.hideUpScroll && this.optUp.hideUpScroll(this); // 回调
};

/* 结束上拉加载 */
MeScroll.prototype.endUpScroll = function (isShowNoMore) {
  if (isShowNoMore != null) {// isShowNoMore=null,不处理下拉状态,下拉刷新的时候调用
    if (isShowNoMore) {
      this.showNoMore(); // isShowNoMore=true,显示无更多数据
    } else {
      this.hideUpScroll(); // isShowNoMore=false,隐藏上拉加载
    }
  }
  this.isUpScrolling = false; // 标记结束上拉加载
};

/* 重置上拉加载列表为第一页
    *isShowLoading 是否显示进度布局;
    * 1.默认null,不传参,则显示上拉加载的进度布局
    * 2.传参true, 则显示下拉刷新的进度布局
    * 3.传参false,则不显示上拉和下拉的进度 (常用于静默更新列表数据)
    */
MeScroll.prototype.resetUpScroll = function (isShowLoading) {
  if (this.optUp && this.optUp.use) {
    var page = this.optUp.page;
    this.prePageNum = page.num; // 缓存重置前的页码,加载失败可退回
    this.prePageTime = page.time; // 缓存重置前的时间,加载失败可退回
    page.num = 1; // 重置为第一页
    page.time = null; // 重置时间为空
    if (!this.isDownScrolling && isShowLoading !== false) {// 如果不是下拉刷新触发的resetUpScroll并且不配置列表静默更新,则显示进度;
      if (isShowLoading == null) {
        this.removeEmpty(); // 移除空布局
        this.showUpScroll(); // 不传参,默认显示上拉加载的进度布局
      } else {
        this.showDownScroll(); // 传true,显示下拉刷新的进度布局,不清空列表
      }
    }
    this.isUpAutoLoad = true; // 标记上拉已经自动执行过,避免初始化时多次触发上拉回调
    this.num = page.num; // 把最新的页数赋值在mescroll上,避免对page的影响
    this.size = page.size; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.time = page.time; // 把最新的页码赋值在mescroll上,避免对page的影响
    this.optUp.callback && this.optUp.callback(this); // 执行上拉回调
  }
};

/* 设置page.num的值 */
MeScroll.prototype.setPageNum = function (num) {
  this.optUp.page.num = num - 1;
};

/* 设置page.size的值 */
MeScroll.prototype.setPageSize = function (size) {
  this.optUp.page.size = size;
};

/* 联网回调成功,结束下拉刷新和上拉加载
    * dataSize: 当前页的数据量(必传)
    * totalPage: 总页数(必传)
    * systime: 服务器时间 (可空)
    */
MeScroll.prototype.endByPage = function (dataSize, totalPage, systime) {
  var hasNext;
  if (this.optUp.use && totalPage != null) hasNext = this.optUp.page.num < totalPage; // 是否还有下一页
  this.endSuccess(dataSize, hasNext, systime);
};

/* 联网回调成功,结束下拉刷新和上拉加载
    * dataSize: 当前页的数据量(必传)
    * totalSize: 列表所有数据总数量(必传)
    * systime: 服务器时间 (可空)
    */
MeScroll.prototype.endBySize = function (dataSize, totalSize, systime) {
  var hasNext;
  if (this.optUp.use && totalSize != null) {
    var loadSize = (this.optUp.page.num - 1) * this.optUp.page.size + dataSize; // 已加载的数据总数
    hasNext = loadSize < totalSize; // 是否还有下一页
  }
  this.endSuccess(dataSize, hasNext, systime);
};

/* 联网回调成功,结束下拉刷新和上拉加载
    * dataSize: 当前页的数据个数(不是所有页的数据总和),用于上拉加载判断是否还有下一页.如果不传,则会判断还有下一页
    * hasNext: 是否还有下一页,布尔类型;用来解决这个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据dataSize判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
    * systime: 服务器时间(可空);用来解决这个小问题:当准备翻下一页时,数据库新增了几条记录,此时翻下一页,前面的几条数据会和上一页的重复;这里传入了systime,那么upCallback的page.time就会有值,把page.time传给服务器,让后台过滤新加入的那几条记录
    */
MeScroll.prototype.endSuccess = function (dataSize, hasNext, systime) {
  var me = this;
  // 结束下拉刷新
  if (me.isDownScrolling) me.endDownScroll();

  // 结束上拉加载
  if (me.optUp.use) {
    var isShowNoMore; // 是否已无更多数据
    if (dataSize != null) {
      var pageNum = me.optUp.page.num; // 当前页码
      var pageSize = me.optUp.page.size; // 每页长度
      // 如果是第一页
      if (pageNum === 1) {
        if (systime) me.optUp.page.time = systime; // 设置加载列表数据第一页的时间
      }
      if (dataSize < pageSize || hasNext === false) {
        // 返回的数据不满一页时,则说明已无更多数据
        me.optUp.hasNext = false;
        if (dataSize === 0 && pageNum === 1) {
          // 如果第一页无任何数据且配置了空布局
          isShowNoMore = false;
          me.showEmpty();
        } else {
          // 总列表数少于配置的数量,则不显示无更多数据
          var allDataSize = (pageNum - 1) * pageSize + dataSize;
          if (allDataSize < me.optUp.noMoreSize) {
            isShowNoMore = false;
          } else {
            isShowNoMore = true;
          }
          me.removeEmpty(); // 移除空布局
        }
      } else {
        // 还有下一页
        isShowNoMore = false;
        me.optUp.hasNext = true;
        me.removeEmpty(); // 移除空布局
      }
    }

    // 隐藏上拉
    me.endUpScroll(isShowNoMore);
  }
};

/* 回调失败,结束下拉刷新和上拉加载 */
MeScroll.prototype.endErr = function () {
  // 结束下拉,回调失败重置回原来的页码和时间
  if (this.isDownScrolling) {
    var page = this.optUp.page;
    if (page && this.prePageNum) {
      page.num = this.prePageNum;
      page.time = this.prePageTime;
    }
    this.endDownScroll();
  }
  // 结束上拉,回调失败重置回原来的页码
  if (this.isUpScrolling) {
    this.optUp.page.num--;
    this.endUpScroll(false);
    this.scrollTo(this.getScrollTop() - 1, 0); // 往上回滚1px,使其能够再次触发scrolltolower
  }
};

/* 显示空布局 */
MeScroll.prototype.showEmpty = function () {
  this.optUp.empty.use && this.optUp.empty.onShow && this.optUp.empty.onShow(true);
};

/* 移除空布局 */
MeScroll.prototype.removeEmpty = function () {
  this.optUp.empty.onShow && this.optUp.empty.onShow(false);
};

/* 显示回到顶部的按钮 */
MeScroll.prototype.showTopBtn = function () {
  if (this.optUp.toTop.src && !this.topBtnShow) {
    this.topBtnShow = true;
    this.optUp.toTop.onShow && this.optUp.toTop.onShow(true);
  }
};

/* 隐藏回到顶部的按钮 */
MeScroll.prototype.hideTopBtn = function () {
  if (this.optUp.toTop.src && this.topBtnShow) {
    this.topBtnShow = false;
    this.optUp.toTop.onShow && this.optUp.toTop.onShow(false);
  }
};

/* 获取滚动条的位置 */
MeScroll.prototype.getScrollTop = function () {
  return this.scrollTop || 0;
};

/* 记录滚动条的位置 */
MeScroll.prototype.setScrollTop = function (y) {
  this.scrollTop = y;
};

/* 滚动到指定位置 */
MeScroll.prototype.scrollTo = function (y, t) {
  this.myScrollTo && this.myScrollTo(y, t); // scrollview需自定义回到顶部方法
};

/* 自定义scrollTo */
MeScroll.prototype.resetScrollTo = function (myScrollTo) {
  this.myScrollTo = myScrollTo;
};

/* 计步器
    star: 开始值
    end: 结束值
    callback(step,timer): 回调step值,计步器timer,可自行通过window.clearInterval(timer)结束计步器;
    t: 计步时长,传0则直接回调end值;不传则默认300ms
    rate: 周期;不传则默认30ms计步一次
    * */
MeScroll.prototype.getStep = function (star, end, callback, t, rate) {
  var diff = end - star; // 差值
  if (t === 0 || diff === 0) {
    callback && callback(end);
    return;
  }
  t = t || 300; // 时长 300ms
  rate = rate || 30; // 周期 30ms
  var count = t / rate; // 次数
  var step = diff / count; // 步长
  var i = 0; // 计数
  var timer = setInterval(function () {
    if (i < count - 1) {
      star += step;
      callback && callback(star, timer);
      i++;
    } else {
      callback && callback(end, timer); // 最后一次直接设置end,避免计算误差
      clearInterval(timer);
    }
  }, rate);
};

/* body的高度 */
MeScroll.prototype.getBodyHeight = function () {
  return this.bodyHeight || 0;
};

MeScroll.prototype.setBodyHeight = function (h) {
  this.bodyHeight = h;
};

/* 阻止浏览器默认滚动事件 */
MeScroll.prototype.preventDefault = function (e) {
  // cancelable:是否可以被禁用; defaultPrevented:是否已经被禁用
  // if (e && e.cancelable && !e.defaultPrevented) e.preventDefault()
  // 只能通过配置pages.json的style.app-plus.bounce为"none"来禁止app的bounce
  e && e.preventDefault();
};

/***/ }),

/***/ 485:
/*!********************************************************************************!*\
  !*** D:/Git/wxapp/mini-village/components/mescroll-uni/mescroll-uni-option.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // mescroll 全局配置
var GlobalOption = {
  down: {
    textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本
    textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本
    textLoading: '加载中 ...', // 加载中的提示文本
    offset: 80 // 在列表顶部,下拉大于80upx,松手即可触发下拉刷新的回调
  },
  up: {
    textLoading: '加载中 ...', // 加载中的提示文本
    textNoMore: '-- END --', // 没有更多数据的提示文本
    offset: 80, // 距底部多远时,触发upCallback
    toTop: {
      // 回到顶部按钮,需配置src才显示
      src: "http://www.mescroll.com/img/mescroll-totop.png?v=1", // 图片路径 (建议放入static目录, 如 /static/img/mescroll-totop.png )
      offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000
      duration: 300 // 回到顶部的动画时长,默认300ms
    },
    empty: {
      use: true, // 是否显示空布局
      icon: "http://www.mescroll.com/img/mescroll-empty.png?v=1", // 图标路径 (建议放入static目录, 如 /static/img/mescroll-empty.png )
      tip: '~ 暂无相关数据 ~' // 提示
    } } };var _default =



GlobalOption;exports.default = _default;

/***/ }),

/***/ 49:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 50);


/***/ }),

/***/ 5:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _package = __webpack_require__(/*! ../package.json */ 6);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["mp-weixin"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 7).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 8).default || __webpack_require__(/*! uni-stat-config */ 8);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 50:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 51);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 51:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 6:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","_id":"@dcloudio/uni-stat@2.0.0-v3-24020191018001","_inBundle":false,"_integrity":"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"^2.0.0-alpha-24420191128001","saveSpec":null,"fetchSpec":"^2.0.0-alpha-24420191128001"},"_requiredBy":["/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz","_shasum":"6ef04326cc0b945726413eebe442ab8f47c7536c","_spec":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-v3-24020191018001"};

/***/ }),

/***/ 7:
/*!*************************************************************!*\
  !*** D:/Git/wxapp/mini-village/pages.json?{"type":"style"} ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/entryLogin/entryLogin": { "navigationBarTitleText": "授权登陆", "usingComponents": {} }, "pages/evaluate/evaluate": { "navigationBarTitleText": "评价", "usingComponents": {} }, "pages/share/share": { "navigationBarTitleText": "分享", "usingComponents": {} }, "pages/chat/villagerList/villagerList": { "navigationBarTitleText": "村民列表", "usingComponents": {} }, "pages/chat/chatLine/chatLine": { "navigationBarTitleText": "动态", "usingComponents": {} }, "pages/index/index": { "navigationBarTitleText": "首页", "usingComponents": { "mescroll-uni": "/components/mescroll-uni/mescroll-uni" } }, "pages/me/me/me": { "navigationBarTitleText": "我的", "usingComponents": {} }, "pages/chat/chatDialogue/chatDialogue": { "navigationBarTitleText": "聊天", "usingComponents": {} }, "pages/chat/chatDialogue/chatDialogue_q": { "navigationBarTitleText": "聊天", "usingComponents": {} }, "pages/chat/publishDynamic/publishDynamic": { "navigationBarTitleText": "发表动态", "usingComponents": {} }, "pages/addHometown/addHometown": { "navigationBarTitleText": "添加我的家乡", "usingComponents": { "link-address": "/components/xuan-linkAddress/xuan-linkAddress" } }, "pages/villageSet/applyVillager/applyVillager": { "navigationBarTitleText": "申请村管理", "usingComponents": { "link-address": "/components/xuan-linkAddress/xuan-linkAddress" } }, "pages/login/login": { "navigationBarTitleText": "账户登陆", "usingComponents": {} }, "pages/details/details": { "navigationBarTitleText": "详情", "usingComponents": {} }, "pages/chat/chatList/chatList": { "navigationBarTitleText": "村聊", "enablePullDownRefresh": true, "backgroundTextStyle": "dark", "usingComponents": {} }, "pages/serch/serch": { "navigationBarTitleText": "搜索", "usingComponents": {} }, "pages/serch/citySearch/citySearch": { "navigationBarTitleText": "精确查找", "usingComponents": { "uni-select": "/components/lee-select/lee-select" } }, "pages/meInfo/personInfo/personInfo": { "navigationBarTitleText": "编辑资料", "usingComponents": {} }, "pages/order/orderList/orderList": { "navigationBarTitleText": "我的订单", "usingComponents": {} }, "pages/meInfo/villageNews/villageNews": { "navigationBarTitleText": "村消息", "usingComponents": {} }, "pages/meInfo/myLike/myLike": { "navigationBarTitleText": "点赞我的", "usingComponents": {} }, "pages/meInfo/myComment/myComment": { "navigationBarTitleText": "评论我的", "usingComponents": {} }, "pages/meInfo/newsList/newsList": { "navigationBarTitleText": "消息列表", "usingComponents": {} }, "pages/meInfo/fans/fans": { "navigationBarTitleText": "粉丝", "usingComponents": {} }, "pages/meInfo/attention/attention": { "navigationBarTitleText": "关注", "usingComponents": {} }, "pages/meInfo/nikeName/nikeName": { "navigationBarTitleText": "修改昵称", "usingComponents": {} }, "pages/search-in/search-in": { "navigationBarTitleText": "搜索", "usingComponents": {} }, "pages/ranking/ranking": { "navigationBarTitleText": "村排名", "navigationBarBackgroundColor": "#3c9ffc", "backgroundColorTop": "#3c9ffc", "navigationBarTextStyle": "white", "usingComponents": {} }, "pages/villageSet/villageLabel/villageLabel": { "navigationBarTitleText": "乡村标签", "usingComponents": {} }, "pages/villageSet/villageVideo/villageVideo": { "navigationBarTitleText": "村头视频", "usingComponents": {} }, "pages/villageSet/villageManager/villageManager": { "navigationBarTitleText": "村务管理", "usingComponents": {} }, "pages/voteList/voteList": { "navigationBarTitleText": "为家乡打榜", "usingComponents": {} }, "pages/contribution/contribution": { "navigationBarTitleText": "赚贡献值", "usingComponents": {} }, "pages/contributionDeatils/contributionDeatils": { "navigationBarTitleText": "贡献值明细", "usingComponents": {} }, "pages/uploadVideo/uploadVideo": { "navigationBarTitleText": "添加视频", "usingComponents": {} }, "pages/feature/feature": { "navigationBarTitleText": "特色风采", "usingComponents": {} }, "pages/addPic/addPic": { "navigationBarTitleText": "添加图片", "usingComponents": {} }, "pages/scenery/scenery": { "navigationBarTitleText": "村景", "usingComponents": {} }, "pages/uploadPic/uploadPic": { "navigationBarTitleText": "上传村景", "usingComponents": {} }, "pages/order/orderEvaluate/orderEvaluate": { "navigationBarTitleText": "点评", "usingComponents": {} }, "pages/publishEvaluate/publishEvaluate": { "navigationBarTitleText": "发表点评", "usingComponents": {} }, "pages/villageIntroduce/villageIntroduce": { "navigationBarTitleText": "村简介发表", "usingComponents": {} }, "pages/villageSet/villagePic/villagePic": { "navigationBarTitleText": "家乡封面", "usingComponents": {} }, "pages/villageSet/villageIntroduce/villageIntroduce": { "navigationBarTitleText": "编辑乡村简介", "usingComponents": {} }, "pages/modal/homestayDetails/homestayDetails": { "navigationBarTitleText": "民宿", "usingComponents": {} }, "pages/modal/homestay/homestay": { "navigationBarTitleText": "民宿", "usingComponents": {} }, "pages/chat/chatDeatils/chatDeatils": { "navigationBarTitleText": "村聊", "navigationBarBackgroundColor": "#FFFFFF", "usingComponents": {} }, "pages/h5/h5": { "navigationBarTitleText": "网页浏览", "usingComponents": {} }, "pages/villageList/villageList": { "navigationBarTitleText": "他乡风情", "usingComponents": {} }, "pages/details/villageDynamic": { "navigationBarTitleText": "发布村动态", "usingComponents": {} }, "pages/homePage/myHomePage": { "navigationBarTitleText": "个人主页", "usingComponents": {} }, "pages/homePage/homePage": { "navigationBarTitleText": "个人主页", "usingComponents": {} }, "pages/meInfo/systemNews/systemNews": { "navigationBarTitleText": "系统消息" } }, "globalStyle": { "navigationBarTextStyle": "black", "navigationBarTitleText": "uni-app", "navigationBarBackgroundColor": "#F8F8F8", "backgroundColor": "#F8F8F8" } };exports.default = _default;

/***/ }),

/***/ 76:
/*!***********************************************************!*\
  !*** D:/Git/wxapp/mini-village/static/img/villagerBg.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 8:
/*!************************************************************!*\
  !*** D:/Git/wxapp/mini-village/pages.json?{"type":"stat"} ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__98270A3" };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map
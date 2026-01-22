var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b) J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2) a = null;
  var h = false;
  if (null === a) h = true;
  else switch (k2) {
    case "string":
    case "number":
      h = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$1:
        case n$1:
          h = true;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
    return a2;
  })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a)) for (var g = 0; g < a.length; g++) {
    k2 = a[g];
    var f2 = d + Q$1(k2, g);
    h += R$1(k2, b, e, f2, c);
  }
  else if (f2 = A$1(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a) return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
function X$1() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.act = X$1;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f2 in b) J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = X$1;
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React$2 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports$1) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a: for (; 0 < c; ) {
      var d = c - 1 >>> 1, e = a[d];
      if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
      else break a;
    }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a: for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
        var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
        if (0 > g(C2, c)) n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
        else if (n2 < e && 0 > g(x2, c)) a[d] = x2, a[n2] = c, d = n2;
        else break a;
      }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports$1.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports$1.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback) k2(t2);
      else if (b.startTime <= a) k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2) if (null !== h(r2)) A2 = true, I2(J2);
    else {
      var b = h(t2);
      null !== b && K2(H2, b.startTime - a);
    }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports$1.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else k2(r2);
        v2 = h(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports$1.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports$1.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports$1.unstable_now());
    }, b);
  }
  exports$1.unstable_IdlePriority = 5;
  exports$1.unstable_ImmediatePriority = 1;
  exports$1.unstable_LowPriority = 4;
  exports$1.unstable_NormalPriority = 3;
  exports$1.unstable_Profiling = null;
  exports$1.unstable_UserBlockingPriority = 2;
  exports$1.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports$1.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports$1.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports$1.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports$1.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports$1.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports$1.unstable_pauseExecution = function() {
  };
  exports$1.unstable_requestPaint = function() {
  };
  exports$1.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports$1.unstable_scheduleCallback = function(a, b, c) {
    var d = exports$1.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports$1.unstable_shouldYield = M2;
  exports$1.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++) da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a)) return true;
  if (ja.call(la, a)) return false;
  if (ka.test(a)) return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type) return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d) return false;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
  if (d) return false;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;
    case 4:
      return false === b;
    case 5:
      return isNaN(b);
    case 6:
      return isNaN(b) || 1 > b;
  }
  return false;
}
function v(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c) {
    var b = c.stack.trim().match(/\n( *(at )?)/);
    La = b && b[1] || "";
  }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na) return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b) if (b = function() {
      throw Error();
    }, Object.defineProperty(b.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b, []);
      } catch (l2) {
        var d = l2;
      }
      Reflect.construct(a, [], b);
    } else {
      try {
        b.call();
      } catch (l2) {
        d = l2;
      }
      a.call(b.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; ) h--;
      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f2[h]) {
        if (1 !== g || 1 !== h) {
          do
            if (g--, h--, 0 > h || e[g] !== f2[h]) {
              var k2 = "\n" + e[g].replace(" at new ", " at ");
              a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
              return k2;
            }
          while (1 <= g && 0 <= h);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b = a.render;
      a = a.displayName;
      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
    case Ha:
      b = a._payload;
      a = a._init;
      try {
        return Qa(a(b));
      } catch (c) {
      }
  }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b) return b.displayName || b.name || null;
      if ("string" === typeof b) return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return false;
  var b = a._valueTracker;
  if (!b) return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c) if ("number" === d) {
    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
  } else a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b) throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length) throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
    for (; b.firstChild; ) a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib) return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c) return null;
  var d = Db(c);
  if (null === d) return null;
  c = d[b];
  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = false;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = false;
}
function Nb(a, b, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate) for (; b.return; ) b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b) return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b) throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e) break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c) return Xb(e), a;
        if (f2 === d) return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return) c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (c.alternate !== d) throw Error(p(190));
  }
  if (3 !== c.tag) throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b) return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c) return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d) return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
    } else k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++) b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e) hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d)) d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e) break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a) if (b = Vb(a), null === b) a = null;
  else if (c = b.tag, 13 === c) {
    a = Wb(b);
    if (null !== a) return a;
    a = null;
  } else if (3 === c) {
    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
    a = null;
  } else b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++) ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++) ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a) return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b) return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which) return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b)) return a;
}
function ve(a, b) {
  if ("change" === a) return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b) {
  if ("click" === a) return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a) return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b)) return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length) return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e])) return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; ) a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c) a = b.contentWindow;
    else break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a]) return Xe[a];
  if (!We[a]) return a;
  var b = We[a], c;
  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b) for (var g = d.length - 1; 0 <= g; g--) {
        var h = d[g], k2 = h.instance, l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
      else for (g = 0; g < d.length; g++) {
        h = d[g];
        k2 = h.instance;
        l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
    if (null === d) return;
    var g = d.tag;
    if (3 === g || 4 === g) {
      var h = d.stateNode.containerInfo;
      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
      if (4 === g) for (g = d.return; null !== g; ) {
        var k2 = g.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
        }
        g = g.return;
      }
      for (; null !== h; ) {
        g = Wc(h);
        if (null === g) return;
        k2 = g.tag;
        if (5 === k2 || 6 === k2) {
          d = f2 = g;
          continue a;
        }
        h = h.parentNode;
      }
    }
    d = d.return;
  }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type) var na = ve;
        else if (me(h2)) if (we) na = Fe;
        else {
          na = De;
          var xa = Ce;
        }
        else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a) return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d) break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c) throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
      if (0 === d) {
        a.removeChild(e);
        bd(b);
        return;
      }
      d--;
    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b) break;
      if ("/$" === b) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b) return a;
        b--;
      } else "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b) return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
        if (c = a[Of]) return c;
        a = Mf(a);
      }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c) e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();
  for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d) throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a)) throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return false;
  if (!I) return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a)) throw Hg(), Error(p(418));
    for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; ) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag) throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d) throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a) throw Error(p(284));
    if (!c._owner) throw Error(p(290, a));
  }
  return a;
}
function Mg(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function Ng(a) {
  var b = a._init;
  return b(a._payload);
}
function Og(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a) return null;
    for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Pg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a) return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya) return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
    d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Lg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Mg(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2)) return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      Mg(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      Mg(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length) return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++) u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++) x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3) throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2) throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c(
      e2,
      m3
    ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = Lg(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                c(a2, d2.sibling);
                d2 = e(d2, f3.children || []);
                d2.return = a2;
                a2 = d2;
                break a;
              } else {
                c(a2, d2);
                break;
              }
              else b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Sg(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3)) return n2(a2, d2, f3, h2);
      if (Ka(f3)) return t2(a2, d2, f3, h2);
      Mg(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a) {
  var b = Wg.current;
  E(Wg);
  a._currentValue = b;
}
function bh(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c) break;
    a = a.return;
  }
}
function ch(a, b) {
  Xg = a;
  Zg = Yg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
}
function eh(a) {
  var b = a._currentValue;
  if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
    if (null === Xg) throw Error(p(308));
    Yg = a;
    Xg.dependencies = { lanes: 0, firstContext: a };
  } else Yg = Yg.next = a;
  return b;
}
var fh = null;
function gh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function hh(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return ih(a, d);
}
function ih(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var jh = false;
function kh(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function mh(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function nh(a, b, c) {
  var d = a.updateQueue;
  if (null === d) return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return ih(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return ih(a, c);
}
function oh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function ph(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function qh(a, b, c, d) {
  var e = a.updateQueue;
  jh = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h) if (h = e.shared.pending, null === h) break;
      else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else null === f2 && (e.shared.lanes = 0);
    rh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function sh(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a) for (b = 0; b < a.length; b++) {
    var d = a[b], e = d.callback;
    if (null !== e) {
      d.callback = null;
      d = c;
      if ("function" !== typeof e) throw Error(p(191, e));
      e.call(d);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a) {
  if (a === th) throw Error(p(174));
  return a;
}
function yh(a, b) {
  G(wh, b);
  G(vh, a);
  G(uh, th);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(uh);
  G(uh, b);
}
function zh() {
  E(uh);
  E(vh);
  E(wh);
}
function Ah(a) {
  xh(wh.current);
  var b = xh(uh.current);
  var c = lb(b, a.type);
  b !== c && (G(vh, a), G(uh, c));
}
function Bh(a) {
  vh.current === a && (E(uh), E(vh));
}
var L = Uf(0);
function Ch(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a) break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P() {
  throw Error(p(321));
}
function Mh(a, b) {
  if (null === b) return false;
  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
  return true;
}
function Nh(a, b, c, d, e, f2) {
  Hh = f2;
  M = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
  a = c(d, e);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p(301));
      f2 += 1;
      O = N = null;
      b.updateQueue = null;
      Fh.current = Qh;
      a = c(d, e);
    } while (Jh);
  }
  Fh.current = Rh;
  b = null !== N && null !== N.next;
  Hh = 0;
  O = N = M = null;
  Ih = false;
  if (b) throw Error(p(300));
  return a;
}
function Sh() {
  var a = 0 !== Kh;
  Kh = 0;
  return a;
}
function Th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O ? M.memoizedState = O = a : O = O.next = a;
  return O;
}
function Uh() {
  if (null === N) {
    var a = M.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = N.next;
  var b = null === O ? M.memoizedState : O.next;
  if (null !== b) O = b, N = a;
  else {
    if (null === a) throw Error(p(310));
    N = a;
    a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
  }
  return O;
}
function Vh(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function Wh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = N, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        M.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b.memoizedState) || (dh = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
    while (e !== a);
  } else null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function Xh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (dh = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Yh() {
}
function Zh(a, b) {
  var c = M, d = Uh(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, dh = true);
  d = d.queue;
  $h(ai.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
    c.flags |= 2048;
    bi(9, ci.bind(null, c, d, e, b), void 0, null);
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(c, b, e);
  }
  return e;
}
function di(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function ci(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  ei(b) && fi(a);
}
function ai(a, b, c) {
  return c(function() {
    ei(b) && fi(a);
  });
}
function ei(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function fi(a) {
  var b = ih(a, 1);
  null !== b && gi(b, a, 1, -1);
}
function hi(a) {
  var b = Th();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ii.bind(null, M, a);
  return [b.memoizedState, a];
}
function bi(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a, b, c, d) {
  var e = Th();
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
}
function li(a, b, c, d) {
  var e = Uh();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== N) {
    var g = N.memoizedState;
    f2 = g.destroy;
    if (null !== d && Mh(d, g.deps)) {
      e.memoizedState = bi(b, c, f2, d);
      return;
    }
  }
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, f2, d);
}
function mi(a, b) {
  return ki(8390656, 8, a, b);
}
function $h(a, b) {
  return li(2048, 8, a, b);
}
function ni(a, b) {
  return li(4, 2, a, b);
}
function oi(a, b) {
  return li(4, 4, a, b);
}
function pi(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function() {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
    b.current = null;
  };
}
function qi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return li(4, 4, pi.bind(null, b, a), c);
}
function ri() {
}
function si(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ti(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function ui(a, b, c) {
  if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
  He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
  return b;
}
function vi(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Gh.transition;
  Gh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Gh.transition = d;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a, b, c) {
  var d = yi(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, c);
  else if (c = hh(a, b, c, d), null !== c) {
    var e = R();
    gi(c, a, d, e);
    Bi(c, b, d);
  }
}
function ii(a, b, c) {
  var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
      var g = b.lastRenderedState, h = f2(g, c);
      e.hasEagerState = true;
      e.eagerState = h;
      if (He(h, g)) {
        var k2 = b.interleaved;
        null === k2 ? (e.next = e, gh(b)) : (e.next = k2.next, k2.next = e);
        b.interleaved = e;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c = hh(a, b, e, d);
    null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
  }
}
function zi(a) {
  var b = a.alternate;
  return a === M || null !== b && b === M;
}
function Ai(a, b) {
  Jh = Ih = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Bi(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
  Th().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ki(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ki(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Th();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Th();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = xi.bind(null, M, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = Th();
  a = { current: a };
  return b.memoizedState = a;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
  return Th().memoizedState = a;
}, useTransition: function() {
  var a = hi(false), b = a[0];
  a = vi.bind(null, a[1]);
  Th().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = M, e = Th();
  if (I) {
    if (void 0 === c) throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  mi(ai.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  bi(9, ci.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = Th(), b = Q.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Kh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a) {
    var b = Uh();
    return ui(b, N.memoizedState, a);
  },
  useTransition: function() {
    var a = Wh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a) {
  var b = Uh();
  return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
}, useTransition: function() {
  var a = Xh(Vh)[0], b = Uh().memoizedState;
  return [a, b];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Di(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Ei = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = R(), d = yi(a), e = mh(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = nh(a, e, d);
  null !== b && (gi(b, a, d, c), oh(b, a, d));
} };
function Fi(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function Gi(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Ei;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Hi(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
}
function Ii(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = {};
  kh(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function Ji(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Ki(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Li(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Oi || (Oi = true, Pi = d);
    Li(a, b);
  };
  return c;
}
function Qi(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Li(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Li(a, b);
    "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Si(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Mi();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
}
function Ui(a) {
  do {
    var b;
    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Vi(a, b, c, d, e) {
  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a, b, c, d) {
  b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
}
function Yi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  ch(b, e);
  d = Nh(a, b, c, d, f2, e);
  c = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Xi(a, b, d, e);
  return b.child;
}
function $i(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e);
    a = Rg(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
  }
  b.flags |= 1;
  a = Pg(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function bj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
    else return b.lanes = a.lanes, Zi(a, b, e);
  }
  return cj(a, b, c, d, e);
}
function dj(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
  else {
    if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
    b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d = null !== f2 ? f2.baseLanes : c;
    G(ej, fj);
    fj |= d;
  }
  else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
  Xi(a, b, e, c);
  return b.child;
}
function gj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function cj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  ch(b, e);
  c = Nh(a, b, c, d, f2, e);
  d = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Xi(a, b, c, e);
  return b.child;
}
function hj(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else f2 = false;
  ch(b, e);
  if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b, g, d, l2);
    jh = false;
    var r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c, m2, d), k2 = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    lh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Ci(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi(b, g, d, k2);
    jh = false;
    r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b, c, y2, d), n2 = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return jj(a, b, c, d, f2, e);
}
function jj(a, b, c, d, e, f2) {
  gj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g) return e && dg(b, c, false), Zi(a, b, f2);
  d = b.stateNode;
  Wi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function kj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  yh(a, b.containerInfo);
}
function lj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Xi(a, b, c, d);
  return b.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function oj(a, b, c) {
  var d = b.pendingProps, e = L.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h) f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState) e |= 1;
  G(L, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = mj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = Pg(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function qj(a, b) {
  b = pj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function sj(a, b, c, d) {
  null !== d && Jg(d);
  Ug(b, a.child, null, c);
  a = qj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function rj(a, b, c, d, e, f2, g) {
  if (c) {
    if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = pj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Tg(f2, e, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Ug(b, a.child, null, g);
    b.child.memoizedState = nj(g);
    b.memoizedState = mj;
    return f2;
  }
  if (0 === (b.mode & 1)) return sj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d) var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Ki(f2, d, void 0);
    return sj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (dh || h) {
    d = Q;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d, a, e, -1));
    }
    tj();
    d = Ki(Error(p(421)));
    return sj(a, b, g, d);
  }
  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = qj(b, d.children);
  b.flags |= 4096;
  return b;
}
function vj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  bh(a.return, b, c);
}
function wj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function xj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Xi(a, b, d.children, c);
  d = L.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
      if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
      else if (19 === a.tag) vj(a, c, b);
      else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b) break a;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  G(L, d);
  if (0 === (b.mode & 1)) b.memoizedState = null;
  else switch (e) {
    case "forwards":
      c = b.child;
      for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      wj(b, false, e, c, f2);
      break;
    case "backwards":
      c = null;
      e = b.child;
      for (b.child = null; null !== e; ) {
        a = e.alternate;
        if (null !== a && null === Ch(a)) {
          b.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }
      wj(b, true, c, null, f2);
      break;
    case "together":
      wj(b, false, null, null, void 0);
      break;
    default:
      b.memoizedState = null;
  }
  return b.child;
}
function ij(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function Zi(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  rh |= b.lanes;
  if (0 === (c & b.childLanes)) return null;
  if (null !== a && b.child !== a.child) throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = Pg(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function yj(a, b, c) {
  switch (b.tag) {
    case 3:
      kj(b);
      Ig();
      break;
    case 5:
      Ah(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      yh(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Wg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
        G(L, L.current & 1);
        a = Zi(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(L, L.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d) return xj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(L, L.current);
      if (d) break;
      else return null;
    case 22:
    case 23:
      return b.lanes = 0, dj(a, b, c);
  }
  return Zi(a, b, c);
}
var zj, Aj, Bj, Cj;
zj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Aj = function() {
};
Bj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e) if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
      var h = e[l2];
      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
        for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
        for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
      } else c || (f2 || (f2 = []), f2.push(
        l2,
        c
      )), c = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2) b.flags |= 4;
  }
};
Cj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Dj(a, b) {
  if (!I) switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
      null === c ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Ej(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      zh();
      E(Wf);
      E(H);
      Eh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a, b);
      S(b);
      return null;
    case 5:
      Bh(b);
      var e = xh(wh.current);
      c = b.type;
      if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode) throw Error(p(166));
          S(b);
          return null;
        }
        a = xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++) D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2) if (f2.hasOwnProperty(g)) {
            var h = f2[g];
            "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
              d.textContent,
              h,
              a
            ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
          }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          zj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h) if (h.hasOwnProperty(f2)) {
              var k2 = h[f2];
              "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
            }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
        c = xh(wh.current);
        xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a) switch (a.tag) {
              case 3:
                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                break;
              case 5:
                true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
            }
          }
          f2 && (b.flags |= 4);
        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(L);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2) throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p(317));
            f2[Of] = b;
          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128)) return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return ah(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(L);
      f2 = b.memoizedState;
      if (null === f2) return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g) if (d) Dj(f2, false);
      else {
        if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
          g = Ch(a);
          if (null !== g) {
            b.flags |= 128;
            Dj(f2, false);
            d = g.updateQueue;
            null !== d && (b.updateQueue = d, b.flags |= 4);
            b.subtreeFlags = 0;
            d = c;
            for (c = b.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
            G(L, L.current & 1 | 2);
            return b.child;
          }
          a = a.sibling;
        }
        null !== f2.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
      }
      else {
        if (!d) if (a = Ch(g), null !== a) {
          if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I) return S(b), null;
        } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Ij(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Bh(b), null;
    case 13:
      E(L);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate) throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(L), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Lj(a, b) {
  var c = a.ref;
  if (null !== c) if ("function" === typeof c) try {
    c(null);
  } catch (d) {
    W(a, b, d);
  }
  else c.current = null;
}
function Mj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Nj = false;
function Oj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
    else a: {
      c = (c = a.ownerDocument) && c.defaultView || window;
      var d = c.getSelection && c.getSelection();
      if (d && 0 !== d.rangeCount) {
        c = d.anchorNode;
        var e = d.anchorOffset, f2 = d.focusNode;
        d = d.focusOffset;
        try {
          c.nodeType, f2.nodeType;
        } catch (F2) {
          c = null;
          break a;
        }
        var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
            q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
            3 === q2.nodeType && (g += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a) break b;
            r2 === c && ++l2 === e && (h = g);
            r2 === f2 && ++m2 === d && (k2 = g);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
      } else c = null;
    }
    c = c || { start: 0, end: 0 };
  } else c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
  else for (; null !== V; ) {
    b = V;
    try {
      var n2 = b.alternate;
      if (0 !== (b.flags & 1024)) switch (b.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p(163));
      }
    } catch (F2) {
      W(b, b.return, F2);
    }
    a = b.sibling;
    if (null !== a) {
      a.return = b.return;
      V = a;
      break;
    }
    V = b.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Mj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Qj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Rj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Sj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Sj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Tj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Uj(a) {
  a: for (; ; ) {
    for (; null === a.sibling; ) {
      if (null === a.return || Tj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;
      else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Vj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
}
var X = null, Xj = false;
function Yj(a, b, c) {
  for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
}
function Zj(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c);
  } catch (h) {
  }
  switch (c.tag) {
    case 5:
      U || Lj(c, b);
    case 6:
      var d = X, e = Xj;
      X = null;
      Yj(a, b, c);
      X = d;
      Xj = e;
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Xj;
      X = c.stateNode.containerInfo;
      Xj = true;
      Yj(a, b, c);
      X = d;
      Xj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Yj(a, b, c);
      break;
    case 1:
      if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
      } catch (h) {
        W(c, b, h);
      }
      Yj(a, b, c);
      break;
    case 21:
      Yj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
      break;
    default:
      Yj(a, b, c);
  }
}
function ak(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Kj());
    b.forEach(function(b2) {
      var d = bk.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function ck(a, b) {
  var c = b.deletions;
  if (null !== c) for (var d = 0; d < c.length; d++) {
    var e = c[d];
    try {
      var f2 = a, g = b, h = g;
      a: for (; null !== h; ) {
        switch (h.tag) {
          case 5:
            X = h.stateNode;
            Xj = false;
            break a;
          case 3:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h = h.return;
      }
      if (null === X) throw Error(p(160));
      Zj(f2, g, e);
      X = null;
      Xj = false;
      var k2 = e.alternate;
      null !== k2 && (k2.return = null);
      e.return = null;
    } catch (l2) {
      W(e, b, l2);
    }
  }
  if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
}
function dk(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b, a);
      ek(a);
      if (d & 4) {
        try {
          Pj(3, a, a.return), Qj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Pj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      break;
    case 5:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2) try {
          "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
          vb(h, g);
          var l2 = vb(h, f2);
          for (g = 0; g < k2.length; g += 2) {
            var m2 = k2[g], q2 = k2[g + 1];
            "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
          }
          switch (h) {
            case "input":
              bb(e, f2);
              break;
            case "textarea":
              ib(e, f2);
              break;
            case "select":
              var r2 = e._wrapperState.wasMultiple;
              e._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e[Pf] = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 6:
      ck(b, a);
      ek(a);
      if (d & 4) {
        if (null === a.stateNode) throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      ck(b, a);
      ek(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
        bd(b.containerInfo);
      } catch (t2) {
        W(a, a.return, t2);
      }
      break;
    case 4:
      ck(b, a);
      ek(a);
      break;
    case 13:
      ck(b, a);
      ek(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
      d & 4 && ak(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, ck(b, a), U = l2) : ck(b, a);
      ek(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2; ) {
          for (q2 = V = m2; null !== V; ) {
            r2 = V;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d = r2;
                  c = r2.return;
                  try {
                    b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W(d, c, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
              } catch (t2) {
                W(a, a.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W(a, a.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b, a);
      ek(a);
      d & 4 && ak(a);
      break;
    case 21:
      break;
    default:
      ck(
        b,
        a
      ), ek(a);
  }
}
function ek(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Tj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Uj(a);
          Wj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Uj(a);
          Vj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function hk(a, b, c) {
  V = a;
  ik(a);
}
function ik(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Jj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Jj;
        var l2 = U;
        Jj = g;
        if ((U = k2) && !l2) for (V = e; null !== V; ) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V = k2) : jk(e);
        for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
        V = e;
        Jj = h;
        U = l2;
      }
      kk(a);
    } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a);
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            U || Qj(5, b);
            break;
          case 1:
            var d = b.stateNode;
            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
            else {
              var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b.updateQueue;
            null !== f2 && sh(b, f2, d);
            break;
          case 3:
            var g = b.updateQueue;
            if (null !== g) {
              c = null;
              if (null !== b.child) switch (b.child.tag) {
                case 5:
                  c = b.child.stateNode;
                  break;
                case 1:
                  c = b.child.stateNode;
              }
              sh(b, g, c);
            }
            break;
          case 5:
            var h = b.stateNode;
            if (null === c && b.flags & 4) {
              c = h;
              var k2 = b.memoizedProps;
              switch (b.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c.focus();
                  break;
                case "img":
                  k2.src && (c.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b.memoizedState) {
              var l2 = b.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p(163));
        }
        U || b.flags & 512 && Rj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function gk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function jk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Qj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R() {
  return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
}
function yi(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a = C;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function gi(a, b, c, d) {
  if (50 < yk) throw yk = 0, zk = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
}
function Dk(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
      0 === (K & 6) && jg();
    }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Fk(c, Gk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Gk(a, b) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K & 6)) throw Error(p(327));
  var c = a.callbackNode;
  if (Hk() && a.callbackNode !== c) return null;
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Jk();
    if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
    do
      try {
        Lk();
        break;
      } catch (h) {
        Mk(a, h);
      }
    while (1);
    $g();
    mk.current = f2;
    K = e;
    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
    if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
    if (6 === b) Ck(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(a, tk, uk);
          break;
        case 3:
          Ck(a, d);
          if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              R();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 4:
          Ck(a, d);
          if ((d & 4194240) === d) break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 5:
          Pk(a, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Dk(a, B());
  return a.callbackNode === c ? Gk.bind(null, a) : null;
}
function Nk(a, b) {
  var c = sk;
  a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
  a = Ik(a, b);
  2 !== a && (b = tk, tk = c, null !== b && Fj(b));
  return a;
}
function Fj(a) {
  null === tk ? tk = a : tk.push.apply(tk, a);
}
function Ok(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
        var e = c[d], f2 = e.getSnapshot;
        e = e.value;
        try {
          if (!He(f2(), e)) return false;
        } catch (g) {
          return false;
        }
      }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
    else {
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Ck(a, b) {
  b &= ~rk;
  b &= ~qk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Ek(a) {
  if (0 !== (K & 6)) throw Error(p(327));
  Hk();
  var b = uc(a, 0);
  if (0 === (b & 1)) return Dk(a, B()), null;
  var c = Ik(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Nk(a, d));
  }
  if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
  if (6 === c) throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Pk(a, tk, uk);
  Dk(a, B());
  return null;
}
function Qk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Gj = B() + 500, fg && jg());
  }
}
function Rk(a) {
  null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
  var b = K;
  K |= 1;
  var c = ok.transition, d = C;
  try {
    if (ok.transition = null, C = 1, a) return a();
  } finally {
    C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E(ej);
}
function Kk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y) for (c = Y.return; null !== c; ) {
    var d = c;
    wg(d);
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && $f();
        break;
      case 3:
        zh();
        E(Wf);
        E(H);
        Eh();
        break;
      case 5:
        Bh(d);
        break;
      case 4:
        zh();
        break;
      case 13:
        E(L);
        break;
      case 19:
        E(L);
        break;
      case 10:
        ah(d.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c = c.return;
  }
  Q = a;
  Y = a = Pg(a.current, null);
  Z = fj = b;
  T = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
      c.interleaved = null;
      var e = d.next, f2 = c.pending;
      if (null !== f2) {
        var g = f2.next;
        f2.next = e;
        d.next = g;
      }
      c.pending = d;
    }
    fh = null;
  }
  return a;
}
function Mk(a, b) {
  do {
    var c = Y;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d = M.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Ih = false;
      }
      Hh = 0;
      O = N = M = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c || null === c.return) {
        T = 1;
        pk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g, h, f2, b);
            y2.mode & 1 && Si(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Si(f2, l2, b);
              tj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Ui(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g, h, f2, b);
            Jg(Ji(k2, h));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h);
        4 !== T && (T = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Ni(f2, k2, b);
              ph(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Qi(f2, h, b);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a = mk.current;
  mk.current = Rh;
  return null === a ? Rh : a;
}
function tj() {
  if (0 === T || 3 === T || 2 === T) T = 4;
  null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
}
function Ik(a, b) {
  var c = K;
  K |= 2;
  var d = Jk();
  if (Q !== a || Z !== b) uk = null, Kk(a, b);
  do
    try {
      Tk();
      break;
    } catch (e) {
      Mk(a, e);
    }
  while (1);
  $g();
  K = c;
  mk.current = d;
  if (null !== Y) throw Error(p(261));
  Q = null;
  Z = 0;
  return T;
}
function Tk() {
  for (; null !== Y; ) Uk(Y);
}
function Lk() {
  for (; null !== Y && !cc(); ) Uk(Y);
}
function Uk(a) {
  var b = Vk(a.alternate, a, fj);
  a.memoizedProps = a.pendingProps;
  null === b ? Sk(a) : Y = b;
  nk.current = null;
}
function Sk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Ej(c, b, fj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Ij(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Pk(a, b, c) {
  var d = C, e = ok.transition;
  try {
    ok.transition = null, C = 1, Wk(a, b, c, d);
  } finally {
    ok.transition = e, C = d;
  }
  return null;
}
function Wk(a, b, c, d) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K & 6)) throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current) throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === Q && (Y = Q = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    nk.current = null;
    Oj(a, c);
    dk(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    hk(c);
    dc();
    K = h;
    C = g;
    ok.transition = f2;
  } else a.current = c;
  vk && (vk = false, wk = a, xk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c.stateNode);
  Dk(a, B());
  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Oi) throw Oi = false, a = Pi, Pi = null, a;
  0 !== (xk & 1) && 0 !== a.tag && Hk();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a = Dc(xk), b = ok.transition, c = C;
    try {
      ok.transition = null;
      C = 16 > a ? 16 : a;
      if (null === wk) var d = false;
      else {
        a = wk;
        wk = null;
        xk = 0;
        if (0 !== (K & 6)) throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V = q2;
                  else for (; null !== V; ) {
                    m2 = V;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V = r2;
                      break;
                    }
                    V = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
          else b: for (; null !== V; ) {
            f2 = V;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V = x2;
              break b;
            }
            V = f2.return;
          }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V = u2;
          else b: for (g = w2; null !== V; ) {
            h = V;
            if (0 !== (h.flags & 2048)) try {
              switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h);
              }
            } catch (na) {
              W(h, h.return, na);
            }
            if (h === g) {
              V = null;
              break b;
            }
            var F2 = h.sibling;
            if (null !== F2) {
              F2.return = h.return;
              V = F2;
              break b;
            }
            V = h.return;
          }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {
        }
        d = true;
      }
      return d;
    } finally {
      C = c, ok.transition = b;
    }
  }
  return false;
}
function Xk(a, b, c) {
  b = Ji(c, b);
  b = Ni(a, b, 1);
  a = nh(a, b, 1);
  b = R();
  null !== a && (Ac(a, 1, b), Dk(a, b));
}
function W(a, b, c) {
  if (3 === a.tag) Xk(a, a, c);
  else for (; null !== b; ) {
    if (3 === b.tag) {
      Xk(b, a, c);
      break;
    } else if (1 === b.tag) {
      var d = b.stateNode;
      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
        a = Ji(c, a);
        a = Qi(b, a, 1);
        b = nh(b, a, 1);
        a = R();
        null !== b && (Ac(b, 1, a), Dk(b, a));
        break;
      }
    }
    b = b.return;
  }
}
function Ti(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = R();
  a.pingedLanes |= a.suspendedLanes & c;
  Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
  Dk(a, b);
}
function Yk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = R();
  a = ih(a, b);
  null !== a && (Ac(a, b, c), Dk(a, c));
}
function uj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Yk(a, c);
}
function bk(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Yk(a, c);
}
var Vk;
Vk = function(a, b, c) {
  if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
    dh = 0 !== (a.flags & 131072) ? true : false;
  }
  else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      ij(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      ch(b, c);
      e = Nh(null, b, d, a, e, c);
      var f2 = Sh();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Xi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        ij(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = Zk(d);
        a = Ci(d, a);
        switch (e) {
          case 0:
            b = cj(null, b, d, a, c);
            break a;
          case 1:
            b = hj(null, b, d, a, c);
            break a;
          case 11:
            b = Yi(null, b, d, a, c);
            break a;
          case 14:
            b = $i(null, b, d, Ci(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
    case 3:
      a: {
        kj(b);
        if (null === a) throw Error(p(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        lh(a, b);
        qh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
          e = Ji(Error(p(423)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else if (d !== e) {
          e = Ji(Error(p(424)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = Zi(a, b, c);
            break a;
          }
          Xi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return oj(a, b, c);
    case 4:
      return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
    case 7:
      return Xi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        G(Wg, d._currentValue);
        d._currentValue = g;
        if (null !== f2) if (He(f2.value, g)) {
          if (f2.children === e.children && !Wf.current) {
            b = Zi(a, b, c);
            break a;
          }
        } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
          var h = f2.dependencies;
          if (null !== h) {
            g = f2.child;
            for (var k2 = h.firstContext; null !== k2; ) {
              if (k2.context === d) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c & -c);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c);
                bh(
                  f2.return,
                  c,
                  b
                );
                h.lanes |= c;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
          else if (18 === f2.tag) {
            g = f2.return;
            if (null === g) throw Error(p(341));
            g.lanes |= c;
            h = g.alternate;
            null !== h && (h.lanes |= c);
            bh(g, c, b);
            g = f2.sibling;
          } else g = f2.child;
          if (null !== g) g.return = f2;
          else for (g = f2; null !== g; ) {
            if (g === b) {
              g = null;
              break;
            }
            f2 = g.sibling;
            if (null !== f2) {
              f2.return = g.return;
              g = f2;
              break;
            }
            g = g.return;
          }
          f2 = g;
        }
        Xi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
    case 15:
      return bj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
    case 19:
      return xj(a, b, c);
    case 22:
      return dj(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Fk(a, b) {
  return ac(a, b);
}
function $k(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new $k(a, b, c, d);
}
function aj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Zk(a) {
  if ("function" === typeof a) return aj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function Pg(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Rg(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a) aj(a) && (g = 1);
  else if ("string" === typeof a) g = 5;
  else a: switch (a) {
    case ya:
      return Tg(c.children, e, f2, b);
    case za:
      g = 8;
      e |= 8;
      break;
    case Aa:
      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
    case Ea:
      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
    case Fa:
      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
    case Ia:
      return pj(c, e, f2, b);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g = 10;
          break a;
        case Ca:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga:
          g = 14;
          break a;
        case Ha:
          g = 16;
          d = null;
          break a;
      }
      throw Error(p(130, null == a ? a : typeof a, ""));
  }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Tg(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function pj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function Qg(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function Sg(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function al(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a, b, c, d, e, f2, g, h, k2) {
  a = new al(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a;
}
function cl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function dl(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c)) return bg(a, c, b);
  }
  return b;
}
function el(a, b, c, d, e, f2, g, h, k2) {
  a = bl(c, d, true, a, e, f2, g, h, k2);
  a.context = dl(null);
  c = a.current;
  d = R();
  e = yi(c);
  f2 = mh(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  nh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Dk(a, d);
  return a;
}
function fl(a, b, c, d) {
  var e = b.current, f2 = R(), g = yi(e);
  c = dl(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = mh(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = nh(e, b, g);
  null !== a && (gi(a, e, g, f2), oh(a, e, g));
  return g;
}
function gl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hl(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function il(a, b) {
  hl(a, b);
  (a = a.alternate) && hl(a, b);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ll(a) {
  this._internalRoot = a;
}
ml.prototype.render = ll.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b) throw Error(p(409));
  fl(a, b, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Rk(function() {
      fl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function ml(a) {
  this._internalRoot = a;
}
ml.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function pl() {
}
function ql(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = gl(g);
        f2.call(a2);
      };
    }
    var g = el(b, d, a, 0, null, false, false, "", pl);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk();
    return g;
  }
  for (; e = a.lastChild; ) a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = gl(k2);
      h.call(a2);
    };
  }
  var k2 = bl(a, 0, false, null, null, false, false, "", pl);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Rk(function() {
    fl(b, k2, c, d);
  });
  return k2;
}
function rl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = gl(g);
        h.call(a2);
      };
    }
    fl(b, g, a, e);
  } else g = ql(c, b, a, e, d);
  return gl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b2 = ih(a, 1);
        if (null !== b2) {
          var c2 = R();
          gi(b2, a, 1, c2);
        }
      }), il(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = ih(a, 134217728);
    if (null !== b) {
      var c = R();
      gi(b, a, 134217728, c);
    }
    il(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = yi(a), c = ih(a, b);
    if (null !== c) {
      var d = R();
      gi(c, a, b, d);
    }
    il(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; ) c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e) throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b)) throw Error(p(200));
  return cl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!nl(a)) throw Error(p(299));
  var c = false, d = "", e = kl;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = bl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ll(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render) throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Rk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!nl(a)) throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = kl;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = el(b, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
    c,
    e
  );
  return new ml(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!ol(a)) throw Error(p(40));
  return a._reactRootContainer ? (Rk(function() {
    rl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!ol(c)) throw Error(p(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
  return rl(a, b, c, false, d);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
var lib$1 = { exports: {} };
var _FullInternals = {};
var _CoreInternals = {};
var Global = {};
(function(exports$1) {
  Object.defineProperty(exports$1, "__esModule", { value: true });
  exports$1._registerNode = exports$1.Konva = exports$1.glob = void 0;
  const PI_OVER_180 = Math.PI / 180;
  function detectBrowser() {
    return typeof window !== "undefined" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  exports$1.glob = typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" ? self : {};
  exports$1.Konva = {
    _global: exports$1.glob,
    version: "9.3.22",
    isBrowser: detectBrowser(),
    isUnminified: /param/.test(function(param) {
    }.toString()),
    dblClickWindow: 400,
    getAngle(angle) {
      return exports$1.Konva.angleDeg ? angle * PI_OVER_180 : angle;
    },
    enableTrace: false,
    pointerEventsEnabled: true,
    autoDrawEnabled: true,
    hitOnDragEnabled: false,
    capturePointerEventsEnabled: false,
    _mouseListenClick: false,
    _touchListenClick: false,
    _pointerListenClick: false,
    _mouseInDblClickWindow: false,
    _touchInDblClickWindow: false,
    _pointerInDblClickWindow: false,
    _mouseDblClickPointerId: null,
    _touchDblClickPointerId: null,
    _pointerDblClickPointerId: null,
    _fixTextRendering: false,
    pixelRatio: typeof window !== "undefined" && window.devicePixelRatio || 1,
    dragDistance: 3,
    angleDeg: true,
    showWarnings: true,
    dragButtons: [0, 1],
    isDragging() {
      return exports$1.Konva["DD"].isDragging;
    },
    isTransforming() {
      var _a2;
      return (_a2 = exports$1.Konva["Transformer"]) === null || _a2 === void 0 ? void 0 : _a2.isTransforming();
    },
    isDragReady() {
      return !!exports$1.Konva["DD"].node;
    },
    releaseCanvasOnDestroy: true,
    document: exports$1.glob.document,
    _injectGlobal(Konva2) {
      exports$1.glob.Konva = Konva2;
    }
  };
  const _registerNode = (NodeClass) => {
    exports$1.Konva[NodeClass.prototype.getClassName()] = NodeClass;
  };
  exports$1._registerNode = _registerNode;
  exports$1.Konva._injectGlobal(exports$1.Konva);
})(Global);
var Util = {};
(function(exports$1) {
  Object.defineProperty(exports$1, "__esModule", { value: true });
  exports$1.Util = exports$1.Transform = void 0;
  const Global_12 = Global;
  class Transform {
    constructor(m2 = [1, 0, 0, 1, 0, 0]) {
      this.dirty = false;
      this.m = m2 && m2.slice() || [1, 0, 0, 1, 0, 0];
    }
    reset() {
      this.m[0] = 1;
      this.m[1] = 0;
      this.m[2] = 0;
      this.m[3] = 1;
      this.m[4] = 0;
      this.m[5] = 0;
    }
    copy() {
      return new Transform(this.m);
    }
    copyInto(tr) {
      tr.m[0] = this.m[0];
      tr.m[1] = this.m[1];
      tr.m[2] = this.m[2];
      tr.m[3] = this.m[3];
      tr.m[4] = this.m[4];
      tr.m[5] = this.m[5];
    }
    point(point) {
      const m2 = this.m;
      return {
        x: m2[0] * point.x + m2[2] * point.y + m2[4],
        y: m2[1] * point.x + m2[3] * point.y + m2[5]
      };
    }
    translate(x2, y2) {
      this.m[4] += this.m[0] * x2 + this.m[2] * y2;
      this.m[5] += this.m[1] * x2 + this.m[3] * y2;
      return this;
    }
    scale(sx, sy) {
      this.m[0] *= sx;
      this.m[1] *= sx;
      this.m[2] *= sy;
      this.m[3] *= sy;
      return this;
    }
    rotate(rad) {
      const c = Math.cos(rad);
      const s = Math.sin(rad);
      const m11 = this.m[0] * c + this.m[2] * s;
      const m12 = this.m[1] * c + this.m[3] * s;
      const m21 = this.m[0] * -s + this.m[2] * c;
      const m22 = this.m[1] * -s + this.m[3] * c;
      this.m[0] = m11;
      this.m[1] = m12;
      this.m[2] = m21;
      this.m[3] = m22;
      return this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(sx, sy) {
      const m11 = this.m[0] + this.m[2] * sy;
      const m12 = this.m[1] + this.m[3] * sy;
      const m21 = this.m[2] + this.m[0] * sx;
      const m22 = this.m[3] + this.m[1] * sx;
      this.m[0] = m11;
      this.m[1] = m12;
      this.m[2] = m21;
      this.m[3] = m22;
      return this;
    }
    multiply(matrix) {
      const m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
      const m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
      const m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
      const m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
      const dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
      const dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
      this.m[0] = m11;
      this.m[1] = m12;
      this.m[2] = m21;
      this.m[3] = m22;
      this.m[4] = dx;
      this.m[5] = dy;
      return this;
    }
    invert() {
      const d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
      const m0 = this.m[3] * d;
      const m1 = -this.m[1] * d;
      const m2 = -this.m[2] * d;
      const m3 = this.m[0] * d;
      const m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
      const m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      this.m[0] = m0;
      this.m[1] = m1;
      this.m[2] = m2;
      this.m[3] = m3;
      this.m[4] = m4;
      this.m[5] = m5;
      return this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      const a = this.m[0];
      const b = this.m[1];
      const c = this.m[2];
      const d = this.m[3];
      const e = this.m[4];
      const f2 = this.m[5];
      const delta = a * d - b * c;
      const result = {
        x: e,
        y: f2,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (a != 0 || b != 0) {
        const r2 = Math.sqrt(a * a + b * b);
        result.rotation = b > 0 ? Math.acos(a / r2) : -Math.acos(a / r2);
        result.scaleX = r2;
        result.scaleY = delta / r2;
        result.skewX = (a * c + b * d) / delta;
        result.skewY = 0;
      } else if (c != 0 || d != 0) {
        const s = Math.sqrt(c * c + d * d);
        result.rotation = Math.PI / 2 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
        result.scaleX = delta / s;
        result.scaleY = s;
        result.skewX = 0;
        result.skewY = (a * c + b * d) / delta;
      } else ;
      result.rotation = exports$1.Util._getRotation(result.rotation);
      return result;
    }
  }
  exports$1.Transform = Transform;
  const OBJECT_ARRAY = "[object Array]", OBJECT_NUMBER = "[object Number]", OBJECT_STRING = "[object String]", OBJECT_BOOLEAN = "[object Boolean]", PI_OVER_DEG180 = Math.PI / 180, DEG180_OVER_PI = 180 / Math.PI, HASH2 = "#", EMPTY_STRING2 = "", ZERO = "0", KONVA_WARNING = "Konva warning: ", KONVA_ERROR = "Konva error: ", RGB_PAREN = "rgb(", COLORS = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 132, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 255, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 203],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [119, 128, 144],
    slategrey: [119, 128, 144],
    snow: [255, 255, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    transparent: [255, 255, 255, 0],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 5]
  }, RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
  let animQueue = [];
  const req = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame || function(f2) {
    setTimeout(f2, 60);
  };
  exports$1.Util = {
    _isElement(obj) {
      return !!(obj && obj.nodeType == 1);
    },
    _isFunction(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    },
    _isPlainObject(obj) {
      return !!obj && obj.constructor === Object;
    },
    _isArray(obj) {
      return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
    },
    _isNumber(obj) {
      return Object.prototype.toString.call(obj) === OBJECT_NUMBER && !isNaN(obj) && isFinite(obj);
    },
    _isString(obj) {
      return Object.prototype.toString.call(obj) === OBJECT_STRING;
    },
    _isBoolean(obj) {
      return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN;
    },
    isObject(val) {
      return val instanceof Object;
    },
    isValidSelector(selector) {
      if (typeof selector !== "string") {
        return false;
      }
      const firstChar = selector[0];
      return firstChar === "#" || firstChar === "." || firstChar === firstChar.toUpperCase();
    },
    _sign(number) {
      if (number === 0) {
        return 1;
      }
      if (number > 0) {
        return 1;
      } else {
        return -1;
      }
    },
    requestAnimFrame(callback) {
      animQueue.push(callback);
      if (animQueue.length === 1) {
        req(function() {
          const queue = animQueue;
          animQueue = [];
          queue.forEach(function(cb2) {
            cb2();
          });
        });
      }
    },
    createCanvasElement() {
      const canvas = document.createElement("canvas");
      try {
        canvas.style = canvas.style || {};
      } catch (e) {
      }
      return canvas;
    },
    createImageElement() {
      return document.createElement("img");
    },
    _isInDocument(el2) {
      while (el2 = el2.parentNode) {
        if (el2 == document) {
          return true;
        }
      }
      return false;
    },
    _urlToImage(url, callback) {
      const imageObj = exports$1.Util.createImageElement();
      imageObj.onload = function() {
        callback(imageObj);
      };
      imageObj.src = url;
    },
    _rgbToHex(r2, g, b) {
      return ((1 << 24) + (r2 << 16) + (g << 8) + b).toString(16).slice(1);
    },
    _hexToRgb(hex) {
      hex = hex.replace(HASH2, EMPTY_STRING2);
      const bigint = parseInt(hex, 16);
      return {
        r: bigint >> 16 & 255,
        g: bigint >> 8 & 255,
        b: bigint & 255
      };
    },
    getRandomColor() {
      let randColor = (Math.random() * 16777215 << 0).toString(16);
      while (randColor.length < 6) {
        randColor = ZERO + randColor;
      }
      return HASH2 + randColor;
    },
    getRGB(color) {
      let rgb;
      if (color in COLORS) {
        rgb = COLORS[color];
        return {
          r: rgb[0],
          g: rgb[1],
          b: rgb[2]
        };
      } else if (color[0] === HASH2) {
        return this._hexToRgb(color.substring(1));
      } else if (color.substr(0, 4) === RGB_PAREN) {
        rgb = RGB_REGEX.exec(color.replace(/ /g, ""));
        return {
          r: parseInt(rgb[1], 10),
          g: parseInt(rgb[2], 10),
          b: parseInt(rgb[3], 10)
        };
      } else {
        return {
          r: 0,
          g: 0,
          b: 0
        };
      }
    },
    colorToRGBA(str) {
      str = str || "black";
      return exports$1.Util._namedColorToRBA(str) || exports$1.Util._hex3ColorToRGBA(str) || exports$1.Util._hex4ColorToRGBA(str) || exports$1.Util._hex6ColorToRGBA(str) || exports$1.Util._hex8ColorToRGBA(str) || exports$1.Util._rgbColorToRGBA(str) || exports$1.Util._rgbaColorToRGBA(str) || exports$1.Util._hslColorToRGBA(str);
    },
    _namedColorToRBA(str) {
      const c = COLORS[str.toLowerCase()];
      if (!c) {
        return null;
      }
      return {
        r: c[0],
        g: c[1],
        b: c[2],
        a: 1
      };
    },
    _rgbColorToRGBA(str) {
      if (str.indexOf("rgb(") === 0) {
        str = str.match(/rgb\(([^)]+)\)/)[1];
        const parts = str.split(/ *, */).map(Number);
        return {
          r: parts[0],
          g: parts[1],
          b: parts[2],
          a: 1
        };
      }
    },
    _rgbaColorToRGBA(str) {
      if (str.indexOf("rgba(") === 0) {
        str = str.match(/rgba\(([^)]+)\)/)[1];
        const parts = str.split(/ *, */).map((n2, index) => {
          if (n2.slice(-1) === "%") {
            return index === 3 ? parseInt(n2) / 100 : parseInt(n2) / 100 * 255;
          }
          return Number(n2);
        });
        return {
          r: parts[0],
          g: parts[1],
          b: parts[2],
          a: parts[3]
        };
      }
    },
    _hex8ColorToRGBA(str) {
      if (str[0] === "#" && str.length === 9) {
        return {
          r: parseInt(str.slice(1, 3), 16),
          g: parseInt(str.slice(3, 5), 16),
          b: parseInt(str.slice(5, 7), 16),
          a: parseInt(str.slice(7, 9), 16) / 255
        };
      }
    },
    _hex6ColorToRGBA(str) {
      if (str[0] === "#" && str.length === 7) {
        return {
          r: parseInt(str.slice(1, 3), 16),
          g: parseInt(str.slice(3, 5), 16),
          b: parseInt(str.slice(5, 7), 16),
          a: 1
        };
      }
    },
    _hex4ColorToRGBA(str) {
      if (str[0] === "#" && str.length === 5) {
        return {
          r: parseInt(str[1] + str[1], 16),
          g: parseInt(str[2] + str[2], 16),
          b: parseInt(str[3] + str[3], 16),
          a: parseInt(str[4] + str[4], 16) / 255
        };
      }
    },
    _hex3ColorToRGBA(str) {
      if (str[0] === "#" && str.length === 4) {
        return {
          r: parseInt(str[1] + str[1], 16),
          g: parseInt(str[2] + str[2], 16),
          b: parseInt(str[3] + str[3], 16),
          a: 1
        };
      }
    },
    _hslColorToRGBA(str) {
      if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(str)) {
        const [_, ...hsl] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(str);
        const h = Number(hsl[0]) / 360;
        const s = Number(hsl[1]) / 100;
        const l2 = Number(hsl[2]) / 100;
        let t2;
        let t3;
        let val;
        if (s === 0) {
          val = l2 * 255;
          return {
            r: Math.round(val),
            g: Math.round(val),
            b: Math.round(val),
            a: 1
          };
        }
        if (l2 < 0.5) {
          t2 = l2 * (1 + s);
        } else {
          t2 = l2 + s - l2 * s;
        }
        const t1 = 2 * l2 - t2;
        const rgb = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * -(i - 1);
          if (t3 < 0) {
            t3++;
          }
          if (t3 > 1) {
            t3--;
          }
          if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
          } else if (2 * t3 < 1) {
            val = t2;
          } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          } else {
            val = t1;
          }
          rgb[i] = val * 255;
        }
        return {
          r: Math.round(rgb[0]),
          g: Math.round(rgb[1]),
          b: Math.round(rgb[2]),
          a: 1
        };
      }
    },
    haveIntersection(r1, r2) {
      return !(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y);
    },
    cloneObject(obj) {
      const retObj = {};
      for (const key in obj) {
        if (this._isPlainObject(obj[key])) {
          retObj[key] = this.cloneObject(obj[key]);
        } else if (this._isArray(obj[key])) {
          retObj[key] = this.cloneArray(obj[key]);
        } else {
          retObj[key] = obj[key];
        }
      }
      return retObj;
    },
    cloneArray(arr) {
      return arr.slice(0);
    },
    degToRad(deg) {
      return deg * PI_OVER_DEG180;
    },
    radToDeg(rad) {
      return rad * DEG180_OVER_PI;
    },
    _degToRad(deg) {
      exports$1.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead.");
      return exports$1.Util.degToRad(deg);
    },
    _radToDeg(rad) {
      exports$1.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead.");
      return exports$1.Util.radToDeg(rad);
    },
    _getRotation(radians) {
      return Global_12.Konva.angleDeg ? exports$1.Util.radToDeg(radians) : radians;
    },
    _capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    throw(str) {
      throw new Error(KONVA_ERROR + str);
    },
    error(str) {
      console.error(KONVA_ERROR + str);
    },
    warn(str) {
      if (!Global_12.Konva.showWarnings) {
        return;
      }
      console.warn(KONVA_WARNING + str);
    },
    each(obj, func) {
      for (const key in obj) {
        func(key, obj[key]);
      }
    },
    _inRange(val, left, right) {
      return left <= val && val < right;
    },
    _getProjectionToSegment(x1, y1, x2, y2, x3, y3) {
      let x4, y4, dist;
      const pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
      if (pd2 == 0) {
        x4 = x1;
        y4 = y1;
        dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
      } else {
        const u2 = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
        if (u2 < 0) {
          x4 = x1;
          y4 = y1;
          dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
        } else if (u2 > 1) {
          x4 = x2;
          y4 = y2;
          dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
        } else {
          x4 = x1 + u2 * (x2 - x1);
          y4 = y1 + u2 * (y2 - y1);
          dist = (x4 - x3) * (x4 - x3) + (y4 - y3) * (y4 - y3);
        }
      }
      return [x4, y4, dist];
    },
    _getProjectionToLine(pt, line, isClosed) {
      const pc2 = exports$1.Util.cloneObject(pt);
      let dist = Number.MAX_VALUE;
      line.forEach(function(p1, i) {
        if (!isClosed && i === line.length - 1) {
          return;
        }
        const p2 = line[(i + 1) % line.length];
        const proj = exports$1.Util._getProjectionToSegment(p1.x, p1.y, p2.x, p2.y, pt.x, pt.y);
        const px = proj[0], py = proj[1], pdist = proj[2];
        if (pdist < dist) {
          pc2.x = px;
          pc2.y = py;
          dist = pdist;
        }
      });
      return pc2;
    },
    _prepareArrayForTween(startArray, endArray, isClosed) {
      const start = [], end = [];
      if (startArray.length > endArray.length) {
        const temp = endArray;
        endArray = startArray;
        startArray = temp;
      }
      for (let n2 = 0; n2 < startArray.length; n2 += 2) {
        start.push({
          x: startArray[n2],
          y: startArray[n2 + 1]
        });
      }
      for (let n2 = 0; n2 < endArray.length; n2 += 2) {
        end.push({
          x: endArray[n2],
          y: endArray[n2 + 1]
        });
      }
      const newStart = [];
      end.forEach(function(point) {
        const pr = exports$1.Util._getProjectionToLine(point, start, isClosed);
        newStart.push(pr.x);
        newStart.push(pr.y);
      });
      return newStart;
    },
    _prepareToStringify(obj) {
      let desc;
      obj.visitedByCircularReferenceRemoval = true;
      for (const key in obj) {
        if (!(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == "object")) {
          continue;
        }
        desc = Object.getOwnPropertyDescriptor(obj, key);
        if (obj[key].visitedByCircularReferenceRemoval || exports$1.Util._isElement(obj[key])) {
          if (desc.configurable) {
            delete obj[key];
          } else {
            return null;
          }
        } else if (exports$1.Util._prepareToStringify(obj[key]) === null) {
          if (desc.configurable) {
            delete obj[key];
          } else {
            return null;
          }
        }
      }
      delete obj.visitedByCircularReferenceRemoval;
      return obj;
    },
    _assign(target, source) {
      for (const key in source) {
        target[key] = source[key];
      }
      return target;
    },
    _getFirstPointerId(evt) {
      if (!evt.touches) {
        return evt.pointerId || 999;
      } else {
        return evt.changedTouches[0].identifier;
      }
    },
    releaseCanvas(...canvases) {
      if (!Global_12.Konva.releaseCanvasOnDestroy)
        return;
      canvases.forEach((c) => {
        c.width = 0;
        c.height = 0;
      });
    },
    drawRoundedRectPath(context, width, height, cornerRadius) {
      let topLeft = 0;
      let topRight = 0;
      let bottomLeft = 0;
      let bottomRight = 0;
      if (typeof cornerRadius === "number") {
        topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
      } else {
        topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
        topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
        bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
        bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
      }
      context.moveTo(topLeft, 0);
      context.lineTo(width - topRight, 0);
      context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
      context.lineTo(width, height - bottomRight);
      context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
      context.lineTo(bottomLeft, height);
      context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
      context.lineTo(0, topLeft);
      context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
    }
  };
})(Util);
var Node$1 = {};
var Canvas$1 = {};
var Context$1 = {};
Object.defineProperty(Context$1, "__esModule", { value: true });
Context$1.HitContext = Context$1.SceneContext = Context$1.Context = void 0;
const Util_1$f = Util;
const Global_1$p = Global;
function simplifyArray(arr) {
  const retArr = [], len = arr.length, util = Util_1$f.Util;
  for (let n2 = 0; n2 < len; n2++) {
    let val = arr[n2];
    if (util._isNumber(val)) {
      val = Math.round(val * 1e3) / 1e3;
    } else if (!util._isString(val)) {
      val = val + "";
    }
    retArr.push(val);
  }
  return retArr;
}
const COMMA = ",", OPEN_PAREN = "(", CLOSE_PAREN = ")", OPEN_PAREN_BRACKET = "([", CLOSE_BRACKET_PAREN = "])", SEMICOLON = ";", DOUBLE_PAREN = "()", EQUALS = "=", CONTEXT_METHODS = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "roundRect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
];
const CONTEXT_PROPERTIES = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "letterSpacing",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "direction",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled"
];
const traceArrMax = 100;
class Context {
  constructor(canvas) {
    this.canvas = canvas;
    if (Global_1$p.Konva.enableTrace) {
      this.traceArr = [];
      this._enableTrace();
    }
  }
  fillShape(shape) {
    if (shape.fillEnabled()) {
      this._fill(shape);
    }
  }
  _fill(shape) {
  }
  strokeShape(shape) {
    if (shape.hasStroke()) {
      this._stroke(shape);
    }
  }
  _stroke(shape) {
  }
  fillStrokeShape(shape) {
    if (shape.attrs.fillAfterStrokeEnabled) {
      this.strokeShape(shape);
      this.fillShape(shape);
    } else {
      this.fillShape(shape);
      this.strokeShape(shape);
    }
  }
  getTrace(relaxed, rounded) {
    let traceArr = this.traceArr, len = traceArr.length, str = "", n2, trace, method, args;
    for (n2 = 0; n2 < len; n2++) {
      trace = traceArr[n2];
      method = trace.method;
      if (method) {
        args = trace.args;
        str += method;
        if (relaxed) {
          str += DOUBLE_PAREN;
        } else {
          if (Util_1$f.Util._isArray(args[0])) {
            str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
          } else {
            if (rounded) {
              args = args.map((a) => typeof a === "number" ? Math.floor(a) : a);
            }
            str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
          }
        }
      } else {
        str += trace.property;
        if (!relaxed) {
          str += EQUALS + trace.val;
        }
      }
      str += SEMICOLON;
    }
    return str;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(str) {
    let traceArr = this.traceArr, len;
    traceArr.push(str);
    len = traceArr.length;
    if (len >= traceArrMax) {
      traceArr.shift();
    }
  }
  reset() {
    const pixelRatio = this.getCanvas().getPixelRatio();
    this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(bounds) {
    const canvas = this.getCanvas();
    if (bounds) {
      this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
    } else {
      this.clearRect(0, 0, canvas.getWidth() / canvas.pixelRatio, canvas.getHeight() / canvas.pixelRatio);
    }
  }
  _applyLineCap(shape) {
    const lineCap = shape.attrs.lineCap;
    if (lineCap) {
      this.setAttr("lineCap", lineCap);
    }
  }
  _applyOpacity(shape) {
    const absOpacity = shape.getAbsoluteOpacity();
    if (absOpacity !== 1) {
      this.setAttr("globalAlpha", absOpacity);
    }
  }
  _applyLineJoin(shape) {
    const lineJoin = shape.attrs.lineJoin;
    if (lineJoin) {
      this.setAttr("lineJoin", lineJoin);
    }
  }
  setAttr(attr, val) {
    this._context[attr] = val;
  }
  arc(x2, y2, radius, startAngle, endAngle, counterClockwise) {
    this._context.arc(x2, y2, radius, startAngle, endAngle, counterClockwise);
  }
  arcTo(x1, y1, x2, y2, radius) {
    this._context.arcTo(x1, y1, x2, y2, radius);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2) {
    this._context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);
  }
  clearRect(x2, y2, width, height) {
    this._context.clearRect(x2, y2, width, height);
  }
  clip(...args) {
    this._context.clip.apply(this._context, args);
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(width, height) {
    const a = arguments;
    if (a.length === 2) {
      return this._context.createImageData(width, height);
    } else if (a.length === 1) {
      return this._context.createImageData(width);
    }
  }
  createLinearGradient(x0, y0, x1, y1) {
    return this._context.createLinearGradient(x0, y0, x1, y1);
  }
  createPattern(image, repetition) {
    return this._context.createPattern(image, repetition);
  }
  createRadialGradient(x0, y0, r0, x1, y1, r1) {
    return this._context.createRadialGradient(x0, y0, r0, x1, y1, r1);
  }
  drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    const a = arguments, _context = this._context;
    if (a.length === 3) {
      _context.drawImage(image, sx, sy);
    } else if (a.length === 5) {
      _context.drawImage(image, sx, sy, sWidth, sHeight);
    } else if (a.length === 9) {
      _context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    }
  }
  ellipse(x2, y2, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise) {
    this._context.ellipse(x2, y2, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise);
  }
  isPointInPath(x2, y2, path, fillRule) {
    if (path) {
      return this._context.isPointInPath(path, x2, y2, fillRule);
    }
    return this._context.isPointInPath(x2, y2, fillRule);
  }
  fill(...args) {
    this._context.fill.apply(this._context, args);
  }
  fillRect(x2, y2, width, height) {
    this._context.fillRect(x2, y2, width, height);
  }
  strokeRect(x2, y2, width, height) {
    this._context.strokeRect(x2, y2, width, height);
  }
  fillText(text, x2, y2, maxWidth) {
    if (maxWidth) {
      this._context.fillText(text, x2, y2, maxWidth);
    } else {
      this._context.fillText(text, x2, y2);
    }
  }
  measureText(text) {
    return this._context.measureText(text);
  }
  getImageData(sx, sy, sw, sh2) {
    return this._context.getImageData(sx, sy, sw, sh2);
  }
  lineTo(x2, y2) {
    this._context.lineTo(x2, y2);
  }
  moveTo(x2, y2) {
    this._context.moveTo(x2, y2);
  }
  rect(x2, y2, width, height) {
    this._context.rect(x2, y2, width, height);
  }
  roundRect(x2, y2, width, height, radii) {
    this._context.roundRect(x2, y2, width, height, radii);
  }
  putImageData(imageData, dx, dy) {
    this._context.putImageData(imageData, dx, dy);
  }
  quadraticCurveTo(cpx, cpy, x2, y2) {
    this._context.quadraticCurveTo(cpx, cpy, x2, y2);
  }
  restore() {
    this._context.restore();
  }
  rotate(angle) {
    this._context.rotate(angle);
  }
  save() {
    this._context.save();
  }
  scale(x2, y2) {
    this._context.scale(x2, y2);
  }
  setLineDash(segments) {
    if (this._context.setLineDash) {
      this._context.setLineDash(segments);
    } else if ("mozDash" in this._context) {
      this._context["mozDash"] = segments;
    } else if ("webkitLineDash" in this._context) {
      this._context["webkitLineDash"] = segments;
    }
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(a, b, c, d, e, f2) {
    this._context.setTransform(a, b, c, d, e, f2);
  }
  stroke(path2d) {
    if (path2d) {
      this._context.stroke(path2d);
    } else {
      this._context.stroke();
    }
  }
  strokeText(text, x2, y2, maxWidth) {
    this._context.strokeText(text, x2, y2, maxWidth);
  }
  transform(a, b, c, d, e, f2) {
    this._context.transform(a, b, c, d, e, f2);
  }
  translate(x2, y2) {
    this._context.translate(x2, y2);
  }
  _enableTrace() {
    let that = this, len = CONTEXT_METHODS.length, origSetter = this.setAttr, n2, args;
    const func = function(methodName) {
      let origMethod = that[methodName], ret;
      that[methodName] = function() {
        args = simplifyArray(Array.prototype.slice.call(arguments, 0));
        ret = origMethod.apply(that, arguments);
        that._trace({
          method: methodName,
          args
        });
        return ret;
      };
    };
    for (n2 = 0; n2 < len; n2++) {
      func(CONTEXT_METHODS[n2]);
    }
    that.setAttr = function() {
      origSetter.apply(that, arguments);
      const prop = arguments[0];
      let val = arguments[1];
      if (prop === "shadowOffsetX" || prop === "shadowOffsetY" || prop === "shadowBlur") {
        val = val / this.canvas.getPixelRatio();
      }
      that._trace({
        property: prop,
        val
      });
    };
  }
  _applyGlobalCompositeOperation(node) {
    const op = node.attrs.globalCompositeOperation;
    const def = !op || op === "source-over";
    if (!def) {
      this.setAttr("globalCompositeOperation", op);
    }
  }
}
Context$1.Context = Context;
CONTEXT_PROPERTIES.forEach(function(prop) {
  Object.defineProperty(Context.prototype, prop, {
    get() {
      return this._context[prop];
    },
    set(val) {
      this._context[prop] = val;
    }
  });
});
class SceneContext extends Context {
  constructor(canvas, { willReadFrequently = false } = {}) {
    super(canvas);
    this._context = canvas._canvas.getContext("2d", {
      willReadFrequently
    });
  }
  _fillColor(shape) {
    const fill = shape.fill();
    this.setAttr("fillStyle", fill);
    shape._fillFunc(this);
  }
  _fillPattern(shape) {
    this.setAttr("fillStyle", shape._getFillPattern());
    shape._fillFunc(this);
  }
  _fillLinearGradient(shape) {
    const grd = shape._getLinearGradient();
    if (grd) {
      this.setAttr("fillStyle", grd);
      shape._fillFunc(this);
    }
  }
  _fillRadialGradient(shape) {
    const grd = shape._getRadialGradient();
    if (grd) {
      this.setAttr("fillStyle", grd);
      shape._fillFunc(this);
    }
  }
  _fill(shape) {
    const hasColor = shape.fill(), fillPriority = shape.getFillPriority();
    if (hasColor && fillPriority === "color") {
      this._fillColor(shape);
      return;
    }
    const hasPattern = shape.getFillPatternImage();
    if (hasPattern && fillPriority === "pattern") {
      this._fillPattern(shape);
      return;
    }
    const hasLinearGradient = shape.getFillLinearGradientColorStops();
    if (hasLinearGradient && fillPriority === "linear-gradient") {
      this._fillLinearGradient(shape);
      return;
    }
    const hasRadialGradient = shape.getFillRadialGradientColorStops();
    if (hasRadialGradient && fillPriority === "radial-gradient") {
      this._fillRadialGradient(shape);
      return;
    }
    if (hasColor) {
      this._fillColor(shape);
    } else if (hasPattern) {
      this._fillPattern(shape);
    } else if (hasLinearGradient) {
      this._fillLinearGradient(shape);
    } else if (hasRadialGradient) {
      this._fillRadialGradient(shape);
    }
  }
  _strokeLinearGradient(shape) {
    const start = shape.getStrokeLinearGradientStartPoint(), end = shape.getStrokeLinearGradientEndPoint(), colorStops = shape.getStrokeLinearGradientColorStops(), grd = this.createLinearGradient(start.x, start.y, end.x, end.y);
    if (colorStops) {
      for (let n2 = 0; n2 < colorStops.length; n2 += 2) {
        grd.addColorStop(colorStops[n2], colorStops[n2 + 1]);
      }
      this.setAttr("strokeStyle", grd);
    }
  }
  _stroke(shape) {
    const dash = shape.dash(), strokeScaleEnabled = shape.getStrokeScaleEnabled();
    if (shape.hasStroke()) {
      if (!strokeScaleEnabled) {
        this.save();
        const pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      }
      this._applyLineCap(shape);
      if (dash && shape.dashEnabled()) {
        this.setLineDash(dash);
        this.setAttr("lineDashOffset", shape.dashOffset());
      }
      this.setAttr("lineWidth", shape.strokeWidth());
      if (!shape.getShadowForStrokeEnabled()) {
        this.setAttr("shadowColor", "rgba(0,0,0,0)");
      }
      const hasLinearGradient = shape.getStrokeLinearGradientColorStops();
      if (hasLinearGradient) {
        this._strokeLinearGradient(shape);
      } else {
        this.setAttr("strokeStyle", shape.stroke());
      }
      shape._strokeFunc(this);
      if (!strokeScaleEnabled) {
        this.restore();
      }
    }
  }
  _applyShadow(shape) {
    var _a2, _b2, _c;
    const color = (_a2 = shape.getShadowRGBA()) !== null && _a2 !== void 0 ? _a2 : "black", blur = (_b2 = shape.getShadowBlur()) !== null && _b2 !== void 0 ? _b2 : 5, offset = (_c = shape.getShadowOffset()) !== null && _c !== void 0 ? _c : {
      x: 0,
      y: 0
    }, scale = shape.getAbsoluteScale(), ratio = this.canvas.getPixelRatio(), scaleX = scale.x * ratio, scaleY = scale.y * ratio;
    this.setAttr("shadowColor", color);
    this.setAttr("shadowBlur", blur * Math.min(Math.abs(scaleX), Math.abs(scaleY)));
    this.setAttr("shadowOffsetX", offset.x * scaleX);
    this.setAttr("shadowOffsetY", offset.y * scaleY);
  }
}
Context$1.SceneContext = SceneContext;
class HitContext extends Context {
  constructor(canvas) {
    super(canvas);
    this._context = canvas._canvas.getContext("2d", {
      willReadFrequently: true
    });
  }
  _fill(shape) {
    this.save();
    this.setAttr("fillStyle", shape.colorKey);
    shape._fillFuncHit(this);
    this.restore();
  }
  strokeShape(shape) {
    if (shape.hasHitStroke()) {
      this._stroke(shape);
    }
  }
  _stroke(shape) {
    if (shape.hasHitStroke()) {
      const strokeScaleEnabled = shape.getStrokeScaleEnabled();
      if (!strokeScaleEnabled) {
        this.save();
        const pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      }
      this._applyLineCap(shape);
      const hitStrokeWidth = shape.hitStrokeWidth();
      const strokeWidth = hitStrokeWidth === "auto" ? shape.strokeWidth() : hitStrokeWidth;
      this.setAttr("lineWidth", strokeWidth);
      this.setAttr("strokeStyle", shape.colorKey);
      shape._strokeFuncHit(this);
      if (!strokeScaleEnabled) {
        this.restore();
      }
    }
  }
}
Context$1.HitContext = HitContext;
Object.defineProperty(Canvas$1, "__esModule", { value: true });
Canvas$1.HitCanvas = Canvas$1.SceneCanvas = Canvas$1.Canvas = void 0;
const Util_1$e = Util;
const Context_1 = Context$1;
const Global_1$o = Global;
let _pixelRatio;
function getDevicePixelRatio() {
  if (_pixelRatio) {
    return _pixelRatio;
  }
  const canvas = Util_1$e.Util.createCanvasElement();
  const context = canvas.getContext("2d");
  _pixelRatio = function() {
    const devicePixelRatio = Global_1$o.Konva._global.devicePixelRatio || 1, backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
    return devicePixelRatio / backingStoreRatio;
  }();
  Util_1$e.Util.releaseCanvas(canvas);
  return _pixelRatio;
}
class Canvas {
  constructor(config) {
    this.pixelRatio = 1;
    this.width = 0;
    this.height = 0;
    this.isCache = false;
    const conf = config || {};
    const pixelRatio = conf.pixelRatio || Global_1$o.Konva.pixelRatio || getDevicePixelRatio();
    this.pixelRatio = pixelRatio;
    this._canvas = Util_1$e.Util.createCanvasElement();
    this._canvas.style.padding = "0";
    this._canvas.style.margin = "0";
    this._canvas.style.border = "0";
    this._canvas.style.background = "transparent";
    this._canvas.style.position = "absolute";
    this._canvas.style.top = "0";
    this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(pixelRatio) {
    const previousRatio = this.pixelRatio;
    this.pixelRatio = pixelRatio;
    this.setSize(this.getWidth() / previousRatio, this.getHeight() / previousRatio);
  }
  setWidth(width) {
    this.width = this._canvas.width = width * this.pixelRatio;
    this._canvas.style.width = width + "px";
    const pixelRatio = this.pixelRatio, _context = this.getContext()._context;
    _context.scale(pixelRatio, pixelRatio);
  }
  setHeight(height) {
    this.height = this._canvas.height = height * this.pixelRatio;
    this._canvas.style.height = height + "px";
    const pixelRatio = this.pixelRatio, _context = this.getContext()._context;
    _context.scale(pixelRatio, pixelRatio);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(width, height) {
    this.setWidth(width || 0);
    this.setHeight(height || 0);
  }
  toDataURL(mimeType, quality) {
    try {
      return this._canvas.toDataURL(mimeType, quality);
    } catch (e) {
      try {
        return this._canvas.toDataURL();
      } catch (err) {
        Util_1$e.Util.error("Unable to get data URL. " + err.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        return "";
      }
    }
  }
}
Canvas$1.Canvas = Canvas;
class SceneCanvas extends Canvas {
  constructor(config = { width: 0, height: 0, willReadFrequently: false }) {
    super(config);
    this.context = new Context_1.SceneContext(this, {
      willReadFrequently: config.willReadFrequently
    });
    this.setSize(config.width, config.height);
  }
}
Canvas$1.SceneCanvas = SceneCanvas;
class HitCanvas extends Canvas {
  constructor(config = { width: 0, height: 0 }) {
    super(config);
    this.hitCanvas = true;
    this.context = new Context_1.HitContext(this);
    this.setSize(config.width, config.height);
  }
}
Canvas$1.HitCanvas = HitCanvas;
var DragAndDrop = {};
(function(exports$1) {
  Object.defineProperty(exports$1, "__esModule", { value: true });
  exports$1.DD = void 0;
  const Global_12 = Global;
  const Util_12 = Util;
  exports$1.DD = {
    get isDragging() {
      let flag = false;
      exports$1.DD._dragElements.forEach((elem) => {
        if (elem.dragStatus === "dragging") {
          flag = true;
        }
      });
      return flag;
    },
    justDragged: false,
    get node() {
      let node;
      exports$1.DD._dragElements.forEach((elem) => {
        node = elem.node;
      });
      return node;
    },
    _dragElements: /* @__PURE__ */ new Map(),
    _drag(evt) {
      const nodesToFireEvents = [];
      exports$1.DD._dragElements.forEach((elem, key) => {
        const { node } = elem;
        const stage = node.getStage();
        stage.setPointersPositions(evt);
        if (elem.pointerId === void 0) {
          elem.pointerId = Util_12.Util._getFirstPointerId(evt);
        }
        const pos = stage._changedPointerPositions.find((pos2) => pos2.id === elem.pointerId);
        if (!pos) {
          return;
        }
        if (elem.dragStatus !== "dragging") {
          const dragDistance = node.dragDistance();
          const distance = Math.max(Math.abs(pos.x - elem.startPointerPos.x), Math.abs(pos.y - elem.startPointerPos.y));
          if (distance < dragDistance) {
            return;
          }
          node.startDrag({ evt });
          if (!node.isDragging()) {
            return;
          }
        }
        node._setDragPosition(evt, elem);
        nodesToFireEvents.push(node);
      });
      nodesToFireEvents.forEach((node) => {
        node.fire("dragmove", {
          type: "dragmove",
          target: node,
          evt
        }, true);
      });
    },
    _endDragBefore(evt) {
      const drawNodes = [];
      exports$1.DD._dragElements.forEach((elem) => {
        const { node } = elem;
        const stage = node.getStage();
        if (evt) {
          stage.setPointersPositions(evt);
        }
        const pos = stage._changedPointerPositions.find((pos2) => pos2.id === elem.pointerId);
        if (!pos) {
          return;
        }
        if (elem.dragStatus === "dragging" || elem.dragStatus === "stopped") {
          exports$1.DD.justDragged = true;
          Global_12.Konva._mouseListenClick = false;
          Global_12.Konva._touchListenClick = false;
          Global_12.Konva._pointerListenClick = false;
          elem.dragStatus = "stopped";
        }
        const drawNode = elem.node.getLayer() || elem.node instanceof Global_12.Konva["Stage"] && elem.node;
        if (drawNode && drawNodes.indexOf(drawNode) === -1) {
          drawNodes.push(drawNode);
        }
      });
      drawNodes.forEach((drawNode) => {
        drawNode.draw();
      });
    },
    _endDragAfter(evt) {
      exports$1.DD._dragElements.forEach((elem, key) => {
        if (elem.dragStatus === "stopped") {
          elem.node.fire("dragend", {
            type: "dragend",
            target: elem.node,
            evt
          }, true);
        }
        if (elem.dragStatus !== "dragging") {
          exports$1.DD._dragElements.delete(key);
        }
      });
    }
  };
  if (Global_12.Konva.isBrowser) {
    window.addEventListener("mouseup", exports$1.DD._endDragBefore, true);
    window.addEventListener("touchend", exports$1.DD._endDragBefore, true);
    window.addEventListener("touchcancel", exports$1.DD._endDragBefore, true);
    window.addEventListener("mousemove", exports$1.DD._drag);
    window.addEventListener("touchmove", exports$1.DD._drag);
    window.addEventListener("mouseup", exports$1.DD._endDragAfter, false);
    window.addEventListener("touchend", exports$1.DD._endDragAfter, false);
    window.addEventListener("touchcancel", exports$1.DD._endDragAfter, false);
  }
})(DragAndDrop);
var Factory = {};
var Validators = {};
Object.defineProperty(Validators, "__esModule", { value: true });
Validators.RGBComponent = RGBComponent;
Validators.alphaComponent = alphaComponent;
Validators.getNumberValidator = getNumberValidator;
Validators.getNumberOrArrayOfNumbersValidator = getNumberOrArrayOfNumbersValidator;
Validators.getNumberOrAutoValidator = getNumberOrAutoValidator;
Validators.getStringValidator = getStringValidator;
Validators.getStringOrGradientValidator = getStringOrGradientValidator;
Validators.getFunctionValidator = getFunctionValidator;
Validators.getNumberArrayValidator = getNumberArrayValidator;
Validators.getBooleanValidator = getBooleanValidator;
Validators.getComponentValidator = getComponentValidator;
const Global_1$n = Global;
const Util_1$d = Util;
function _formatValue(val) {
  if (Util_1$d.Util._isString(val)) {
    return '"' + val + '"';
  }
  if (Object.prototype.toString.call(val) === "[object Number]") {
    return val;
  }
  if (Util_1$d.Util._isBoolean(val)) {
    return val;
  }
  return Object.prototype.toString.call(val);
}
function RGBComponent(val) {
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  }
  return Math.round(val);
}
function alphaComponent(val) {
  if (val > 1) {
    return 1;
  } else if (val < 1e-4) {
    return 1e-4;
  }
  return val;
}
function getNumberValidator() {
  if (Global_1$n.Konva.isUnminified) {
    return function(val, attr) {
      if (!Util_1$d.Util._isNumber(val)) {
        Util_1$d.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number.');
      }
      return val;
    };
  }
}
function getNumberOrArrayOfNumbersValidator(noOfElements) {
  if (Global_1$n.Konva.isUnminified) {
    return function(val, attr) {
      let isNumber = Util_1$d.Util._isNumber(val);
      let isValidArray = Util_1$d.Util._isArray(val) && val.length == noOfElements;
      if (!isNumber && !isValidArray) {
        Util_1$d.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or Array<number>(' + noOfElements + ")");
      }
      return val;
    };
  }
}
function getNumberOrAutoValidator() {
  if (Global_1$n.Konva.isUnminified) {
    return function(val, attr) {
      const isNumber = Util_1$d.Util._isNumber(val);
      const isAuto = val === "auto";
      if (!(isNumber || isAuto)) {
        Util_1$d.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or "auto".');
      }
      return val;
    };
  }
}
function getStringValidator() {
  if (Global_1$n.Konva.isUnminified) {
    return function(val, attr) {
      if (!Util_1$d.Util._isString(val)) {
        Util_1$d.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string.');
      }
      return val;
    };
  }
}
function getStringOrGradientValidator() {
  if (Global_1$n.Konva.isUnminified) {
    return function(val, attr) {
      const isString = Util_1$d.Util._isString(val);
      const isGradient = Object.prototype.toString.call(val) === "[object CanvasGradient]" || val && val["addColorStop"];
      if (!(isString || isGradient)) {
        Util_1$d.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string or a native gradient.');
      }
      return val;
    };
  }
}
function getFunctionValidator() {
  if (Global_1$n.Konva.isUnminified) {
    return function(val, attr) {
      if (!Util_1$d.Util._isFunction(val)) {
        Util_1$d.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a function.');
      }
      return val;
    };
  }
}
function getNumberArrayValidator() {
  if (Global_1$n.Konva.isUnminified) {
    return function(val, attr) {
      const TypedArray = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      if (TypedArray && val instanceof TypedArray) {
        return val;
      }
      if (!Util_1$d.Util._isArray(val)) {
        Util_1$d.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a array of numbers.');
      } else {
        val.forEach(function(item) {
          if (!Util_1$d.Util._isNumber(item)) {
            Util_1$d.Util.warn('"' + attr + '" attribute has non numeric element ' + item + ". Make sure that all elements are numbers.");
          }
        });
      }
      return val;
    };
  }
}
function getBooleanValidator() {
  if (Global_1$n.Konva.isUnminified) {
    return function(val, attr) {
      const isBool = val === true || val === false;
      if (!isBool) {
        Util_1$d.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a boolean.');
      }
      return val;
    };
  }
}
function getComponentValidator(components) {
  if (Global_1$n.Konva.isUnminified) {
    return function(val, attr) {
      if (val === void 0 || val === null) {
        return val;
      }
      if (!Util_1$d.Util.isObject(val)) {
        Util_1$d.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be an object with properties ' + components);
      }
      return val;
    };
  }
}
(function(exports$1) {
  Object.defineProperty(exports$1, "__esModule", { value: true });
  exports$1.Factory = void 0;
  const Util_12 = Util;
  const Validators_12 = Validators;
  const GET = "get";
  const SET2 = "set";
  exports$1.Factory = {
    addGetterSetter(constructor, attr, def, validator, after) {
      exports$1.Factory.addGetter(constructor, attr, def);
      exports$1.Factory.addSetter(constructor, attr, validator, after);
      exports$1.Factory.addOverloadedGetterSetter(constructor, attr);
    },
    addGetter(constructor, attr, def) {
      const method = GET + Util_12.Util._capitalize(attr);
      constructor.prototype[method] = constructor.prototype[method] || function() {
        const val = this.attrs[attr];
        return val === void 0 ? def : val;
      };
    },
    addSetter(constructor, attr, validator, after) {
      const method = SET2 + Util_12.Util._capitalize(attr);
      if (!constructor.prototype[method]) {
        exports$1.Factory.overWriteSetter(constructor, attr, validator, after);
      }
    },
    overWriteSetter(constructor, attr, validator, after) {
      const method = SET2 + Util_12.Util._capitalize(attr);
      constructor.prototype[method] = function(val) {
        if (validator && val !== void 0 && val !== null) {
          val = validator.call(this, val, attr);
        }
        this._setAttr(attr, val);
        if (after) {
          after.call(this);
        }
        return this;
      };
    },
    addComponentsGetterSetter(constructor, attr, components, validator, after) {
      const len = components.length, capitalize = Util_12.Util._capitalize, getter = GET + capitalize(attr), setter = SET2 + capitalize(attr);
      constructor.prototype[getter] = function() {
        const ret = {};
        for (let n2 = 0; n2 < len; n2++) {
          const component = components[n2];
          ret[component] = this.getAttr(attr + capitalize(component));
        }
        return ret;
      };
      const basicValidator = (0, Validators_12.getComponentValidator)(components);
      constructor.prototype[setter] = function(val) {
        const oldVal = this.attrs[attr];
        if (validator) {
          val = validator.call(this, val, attr);
        }
        if (basicValidator) {
          basicValidator.call(this, val, attr);
        }
        for (const key in val) {
          if (!val.hasOwnProperty(key)) {
            continue;
          }
          this._setAttr(attr + capitalize(key), val[key]);
        }
        if (!val) {
          components.forEach((component) => {
            this._setAttr(attr + capitalize(component), void 0);
          });
        }
        this._fireChangeEvent(attr, oldVal, val);
        if (after) {
          after.call(this);
        }
        return this;
      };
      exports$1.Factory.addOverloadedGetterSetter(constructor, attr);
    },
    addOverloadedGetterSetter(constructor, attr) {
      const capitalizedAttr = Util_12.Util._capitalize(attr), setter = SET2 + capitalizedAttr, getter = GET + capitalizedAttr;
      constructor.prototype[attr] = function() {
        if (arguments.length) {
          this[setter](arguments[0]);
          return this;
        }
        return this[getter]();
      };
    },
    addDeprecatedGetterSetter(constructor, attr, def, validator) {
      Util_12.Util.error("Adding deprecated " + attr);
      const method = GET + Util_12.Util._capitalize(attr);
      const message = attr + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      constructor.prototype[method] = function() {
        Util_12.Util.error(message);
        const val = this.attrs[attr];
        return val === void 0 ? def : val;
      };
      exports$1.Factory.addSetter(constructor, attr, validator, function() {
        Util_12.Util.error(message);
      });
      exports$1.Factory.addOverloadedGetterSetter(constructor, attr);
    },
    backCompat(constructor, methods) {
      Util_12.Util.each(methods, function(oldMethodName, newMethodName) {
        const method = constructor.prototype[newMethodName];
        const oldGetter = GET + Util_12.Util._capitalize(oldMethodName);
        const oldSetter = SET2 + Util_12.Util._capitalize(oldMethodName);
        function deprecated() {
          method.apply(this, arguments);
          Util_12.Util.error('"' + oldMethodName + '" method is deprecated and will be removed soon. Use ""' + newMethodName + '" instead.');
        }
        constructor.prototype[oldMethodName] = deprecated;
        constructor.prototype[oldGetter] = deprecated;
        constructor.prototype[oldSetter] = deprecated;
      });
    },
    afterSetFilter() {
      this._filterUpToDate = false;
    }
  };
})(Factory);
Object.defineProperty(Node$1, "__esModule", { value: true });
Node$1.Node = void 0;
const Canvas_1$1 = Canvas$1;
const DragAndDrop_1 = DragAndDrop;
const Factory_1$y = Factory;
const Global_1$m = Global;
const Util_1$c = Util;
const Validators_1$x = Validators;
const ABSOLUTE_OPACITY = "absoluteOpacity", ALL_LISTENERS = "allEventListeners", ABSOLUTE_TRANSFORM = "absoluteTransform", ABSOLUTE_SCALE = "absoluteScale", CANVAS = "canvas", CHANGE = "Change", CHILDREN = "children", KONVA = "konva", LISTENING = "listening", MOUSEENTER = "mouseenter", MOUSELEAVE = "mouseleave", POINTERENTER = "pointerenter", POINTERLEAVE = "pointerleave", TOUCHENTER = "touchenter", TOUCHLEAVE = "touchleave", SET = "set", SHAPE = "Shape", SPACE$1 = " ", STAGE = "stage", TRANSFORM = "transform", UPPER_STAGE = "Stage", VISIBLE = "visible", TRANSFORM_CHANGE_STR$1 = [
  "xChange.konva",
  "yChange.konva",
  "scaleXChange.konva",
  "scaleYChange.konva",
  "skewXChange.konva",
  "skewYChange.konva",
  "rotationChange.konva",
  "offsetXChange.konva",
  "offsetYChange.konva",
  "transformsEnabledChange.konva"
].join(SPACE$1);
let idCounter = 1;
class Node {
  constructor(config) {
    this._id = idCounter++;
    this.eventListeners = {};
    this.attrs = {};
    this.index = 0;
    this._allEventListeners = null;
    this.parent = null;
    this._cache = /* @__PURE__ */ new Map();
    this._attachedDepsListeners = /* @__PURE__ */ new Map();
    this._lastPos = null;
    this._batchingTransformChange = false;
    this._needClearTransformCache = false;
    this._filterUpToDate = false;
    this._isUnderCache = false;
    this._dragEventId = null;
    this._shouldFireChangeEvents = false;
    this.setAttrs(config);
    this._shouldFireChangeEvents = true;
  }
  hasChildren() {
    return false;
  }
  _clearCache(attr) {
    if ((attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM) && this._cache.get(attr)) {
      this._cache.get(attr).dirty = true;
    } else if (attr) {
      this._cache.delete(attr);
    } else {
      this._cache.clear();
    }
  }
  _getCache(attr, privateGetter) {
    let cache = this._cache.get(attr);
    const isTransform = attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM;
    const invalid = cache === void 0 || isTransform && cache.dirty === true;
    if (invalid) {
      cache = privateGetter.call(this);
      this._cache.set(attr, cache);
    }
    return cache;
  }
  _calculate(name, deps, getter) {
    if (!this._attachedDepsListeners.get(name)) {
      const depsString = deps.map((dep) => dep + "Change.konva").join(SPACE$1);
      this.on(depsString, () => {
        this._clearCache(name);
      });
      this._attachedDepsListeners.set(name, true);
    }
    return this._getCache(name, getter);
  }
  _getCanvasCache() {
    return this._cache.get(CANVAS);
  }
  _clearSelfAndDescendantCache(attr) {
    this._clearCache(attr);
    if (attr === ABSOLUTE_TRANSFORM) {
      this.fire("absoluteTransformChange");
    }
  }
  clearCache() {
    if (this._cache.has(CANVAS)) {
      const { scene, filter, hit, buffer } = this._cache.get(CANVAS);
      Util_1$c.Util.releaseCanvas(scene, filter, hit, buffer);
      this._cache.delete(CANVAS);
    }
    this._clearSelfAndDescendantCache();
    this._requestDraw();
    return this;
  }
  cache(config) {
    const conf = config || {};
    let rect = {};
    if (conf.x === void 0 || conf.y === void 0 || conf.width === void 0 || conf.height === void 0) {
      rect = this.getClientRect({
        skipTransform: true,
        relativeTo: this.getParent() || void 0
      });
    }
    let width = Math.ceil(conf.width || rect.width), height = Math.ceil(conf.height || rect.height), pixelRatio = conf.pixelRatio, x2 = conf.x === void 0 ? Math.floor(rect.x) : conf.x, y2 = conf.y === void 0 ? Math.floor(rect.y) : conf.y, offset = conf.offset || 0, drawBorder = conf.drawBorder || false, hitCanvasPixelRatio = conf.hitCanvasPixelRatio || 1;
    if (!width || !height) {
      Util_1$c.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    const extraPaddingX = Math.abs(Math.round(rect.x) - x2) > 0.5 ? 1 : 0;
    const extraPaddingY = Math.abs(Math.round(rect.y) - y2) > 0.5 ? 1 : 0;
    width += offset * 2 + extraPaddingX;
    height += offset * 2 + extraPaddingY;
    x2 -= offset;
    y2 -= offset;
    const cachedSceneCanvas = new Canvas_1$1.SceneCanvas({
      pixelRatio,
      width,
      height
    }), cachedFilterCanvas = new Canvas_1$1.SceneCanvas({
      pixelRatio,
      width: 0,
      height: 0,
      willReadFrequently: true
    }), cachedHitCanvas = new Canvas_1$1.HitCanvas({
      pixelRatio: hitCanvasPixelRatio,
      width,
      height
    }), sceneContext = cachedSceneCanvas.getContext(), hitContext = cachedHitCanvas.getContext();
    const bufferCanvas = new Canvas_1$1.SceneCanvas({
      width: cachedSceneCanvas.width / cachedSceneCanvas.pixelRatio + Math.abs(x2),
      height: cachedSceneCanvas.height / cachedSceneCanvas.pixelRatio + Math.abs(y2),
      pixelRatio: cachedSceneCanvas.pixelRatio
    }), bufferContext = bufferCanvas.getContext();
    cachedHitCanvas.isCache = true;
    cachedSceneCanvas.isCache = true;
    this._cache.delete(CANVAS);
    this._filterUpToDate = false;
    if (conf.imageSmoothingEnabled === false) {
      cachedSceneCanvas.getContext()._context.imageSmoothingEnabled = false;
      cachedFilterCanvas.getContext()._context.imageSmoothingEnabled = false;
    }
    sceneContext.save();
    hitContext.save();
    bufferContext.save();
    sceneContext.translate(-x2, -y2);
    hitContext.translate(-x2, -y2);
    bufferContext.translate(-x2, -y2);
    bufferCanvas.x = x2;
    bufferCanvas.y = y2;
    this._isUnderCache = true;
    this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
    this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
    this.drawScene(cachedSceneCanvas, this, bufferCanvas);
    this.drawHit(cachedHitCanvas, this);
    this._isUnderCache = false;
    sceneContext.restore();
    hitContext.restore();
    if (drawBorder) {
      sceneContext.save();
      sceneContext.beginPath();
      sceneContext.rect(0, 0, width, height);
      sceneContext.closePath();
      sceneContext.setAttr("strokeStyle", "red");
      sceneContext.setAttr("lineWidth", 5);
      sceneContext.stroke();
      sceneContext.restore();
    }
    this._cache.set(CANVAS, {
      scene: cachedSceneCanvas,
      filter: cachedFilterCanvas,
      hit: cachedHitCanvas,
      buffer: bufferCanvas,
      x: x2,
      y: y2
    });
    this._requestDraw();
    return this;
  }
  isCached() {
    return this._cache.has(CANVAS);
  }
  getClientRect(config) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(rect, top) {
    const points = [
      { x: rect.x, y: rect.y },
      { x: rect.x + rect.width, y: rect.y },
      { x: rect.x + rect.width, y: rect.y + rect.height },
      { x: rect.x, y: rect.y + rect.height }
    ];
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    const trans = this.getAbsoluteTransform(top);
    points.forEach(function(point) {
      const transformed = trans.point(point);
      if (minX === void 0) {
        minX = maxX = transformed.x;
        minY = maxY = transformed.y;
      }
      minX = Math.min(minX, transformed.x);
      minY = Math.min(minY, transformed.y);
      maxX = Math.max(maxX, transformed.x);
      maxY = Math.max(maxY, transformed.y);
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  _drawCachedSceneCanvas(context) {
    context.save();
    context._applyOpacity(this);
    context._applyGlobalCompositeOperation(this);
    const canvasCache = this._getCanvasCache();
    context.translate(canvasCache.x, canvasCache.y);
    const cacheCanvas = this._getCachedSceneCanvas();
    const ratio = cacheCanvas.pixelRatio;
    context.drawImage(cacheCanvas._canvas, 0, 0, cacheCanvas.width / ratio, cacheCanvas.height / ratio);
    context.restore();
  }
  _drawCachedHitCanvas(context) {
    const canvasCache = this._getCanvasCache(), hitCanvas = canvasCache.hit;
    context.save();
    context.translate(canvasCache.x, canvasCache.y);
    context.drawImage(hitCanvas._canvas, 0, 0, hitCanvas.width / hitCanvas.pixelRatio, hitCanvas.height / hitCanvas.pixelRatio);
    context.restore();
  }
  _getCachedSceneCanvas() {
    let filters = this.filters(), cachedCanvas = this._getCanvasCache(), sceneCanvas = cachedCanvas.scene, filterCanvas = cachedCanvas.filter, filterContext = filterCanvas.getContext(), len, imageData, n2, filter;
    if (filters) {
      if (!this._filterUpToDate) {
        const ratio = sceneCanvas.pixelRatio;
        filterCanvas.setSize(sceneCanvas.width / sceneCanvas.pixelRatio, sceneCanvas.height / sceneCanvas.pixelRatio);
        try {
          len = filters.length;
          filterContext.clear();
          filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
          imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());
          for (n2 = 0; n2 < len; n2++) {
            filter = filters[n2];
            if (typeof filter !== "function") {
              Util_1$c.Util.error("Filter should be type of function, but got " + typeof filter + " instead. Please check correct filters");
              continue;
            }
            filter.call(this, imageData);
            filterContext.putImageData(imageData, 0, 0);
          }
        } catch (e) {
          Util_1$c.Util.error("Unable to apply filter. " + e.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = true;
      }
      return filterCanvas;
    }
    return sceneCanvas;
  }
  on(evtStr, handler) {
    if (this._cache) {
      this._cache.delete(ALL_LISTENERS);
    }
    if (arguments.length === 3) {
      return this._delegate.apply(this, arguments);
    }
    const events = evtStr.split(SPACE$1);
    for (let n2 = 0; n2 < events.length; n2++) {
      const event = events[n2];
      const parts = event.split(".");
      const baseEvent = parts[0];
      const name = parts[1] || "";
      if (!this.eventListeners[baseEvent]) {
        this.eventListeners[baseEvent] = [];
      }
      this.eventListeners[baseEvent].push({ name, handler });
    }
    return this;
  }
  off(evtStr, callback) {
    let events = (evtStr || "").split(SPACE$1), len = events.length, n2, t2, event, parts, baseEvent, name;
    this._cache && this._cache.delete(ALL_LISTENERS);
    if (!evtStr) {
      for (t2 in this.eventListeners) {
        this._off(t2);
      }
    }
    for (n2 = 0; n2 < len; n2++) {
      event = events[n2];
      parts = event.split(".");
      baseEvent = parts[0];
      name = parts[1];
      if (baseEvent) {
        if (this.eventListeners[baseEvent]) {
          this._off(baseEvent, name, callback);
        }
      } else {
        for (t2 in this.eventListeners) {
          this._off(t2, name, callback);
        }
      }
    }
    return this;
  }
  dispatchEvent(evt) {
    const e = {
      target: this,
      type: evt.type,
      evt
    };
    this.fire(evt.type, e);
    return this;
  }
  addEventListener(type, handler) {
    this.on(type, function(evt) {
      handler.call(this, evt.evt);
    });
    return this;
  }
  removeEventListener(type) {
    this.off(type);
    return this;
  }
  _delegate(event, selector, handler) {
    const stopNode = this;
    this.on(event, function(evt) {
      const targets = evt.target.findAncestors(selector, true, stopNode);
      for (let i = 0; i < targets.length; i++) {
        evt = Util_1$c.Util.cloneObject(evt);
        evt.currentTarget = targets[i];
        handler.call(targets[i], evt);
      }
    });
  }
  remove() {
    if (this.isDragging()) {
      this.stopDrag();
    }
    DragAndDrop_1.DD._dragElements.delete(this._id);
    this._remove();
    return this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
    this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
    this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
    this._clearSelfAndDescendantCache(STAGE);
    this._clearSelfAndDescendantCache(VISIBLE);
    this._clearSelfAndDescendantCache(LISTENING);
  }
  _remove() {
    this._clearCaches();
    const parent = this.getParent();
    if (parent && parent.children) {
      parent.children.splice(this.index, 1);
      parent._setChildrenIndices();
      this.parent = null;
    }
  }
  destroy() {
    this.remove();
    this.clearCache();
    return this;
  }
  getAttr(attr) {
    const method = "get" + Util_1$c.Util._capitalize(attr);
    if (Util_1$c.Util._isFunction(this[method])) {
      return this[method]();
    }
    return this.attrs[attr];
  }
  getAncestors() {
    let parent = this.getParent(), ancestors = [];
    while (parent) {
      ancestors.push(parent);
      parent = parent.getParent();
    }
    return ancestors;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(config) {
    this._batchTransformChanges(() => {
      let key, method;
      if (!config) {
        return this;
      }
      for (key in config) {
        if (key === CHILDREN) {
          continue;
        }
        method = SET + Util_1$c.Util._capitalize(key);
        if (Util_1$c.Util._isFunction(this[method])) {
          this[method](config[key]);
        } else {
          this._setAttr(key, config[key]);
        }
      }
    });
    return this;
  }
  isListening() {
    return this._getCache(LISTENING, this._isListening);
  }
  _isListening(relativeTo) {
    const listening = this.listening();
    if (!listening) {
      return false;
    }
    const parent = this.getParent();
    if (parent && parent !== relativeTo && this !== relativeTo) {
      return parent._isListening(relativeTo);
    } else {
      return true;
    }
  }
  isVisible() {
    return this._getCache(VISIBLE, this._isVisible);
  }
  _isVisible(relativeTo) {
    const visible = this.visible();
    if (!visible) {
      return false;
    }
    const parent = this.getParent();
    if (parent && parent !== relativeTo && this !== relativeTo) {
      return parent._isVisible(relativeTo);
    } else {
      return true;
    }
  }
  shouldDrawHit(top, skipDragCheck = false) {
    if (top) {
      return this._isVisible(top) && this._isListening(top);
    }
    const layer = this.getLayer();
    let layerUnderDrag = false;
    DragAndDrop_1.DD._dragElements.forEach((elem) => {
      if (elem.dragStatus !== "dragging") {
        return;
      } else if (elem.node.nodeType === "Stage") {
        layerUnderDrag = true;
      } else if (elem.node.getLayer() === layer) {
        layerUnderDrag = true;
      }
    });
    const dragSkip = !skipDragCheck && !Global_1$m.Konva.hitOnDragEnabled && (layerUnderDrag || Global_1$m.Konva.isTransforming());
    return this.isListening() && this.isVisible() && !dragSkip;
  }
  show() {
    this.visible(true);
    return this;
  }
  hide() {
    this.visible(false);
    return this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    let depth = this.getDepth(), that = this, index = 0, nodes, len, n2, child;
    function addChildren(children) {
      nodes = [];
      len = children.length;
      for (n2 = 0; n2 < len; n2++) {
        child = children[n2];
        index++;
        if (child.nodeType !== SHAPE) {
          nodes = nodes.concat(child.getChildren().slice());
        }
        if (child._id === that._id) {
          n2 = len;
        }
      }
      if (nodes.length > 0 && nodes[0].getDepth() <= depth) {
        addChildren(nodes);
      }
    }
    const stage = this.getStage();
    if (that.nodeType !== UPPER_STAGE && stage) {
      addChildren(stage.getChildren());
    }
    return index;
  }
  getDepth() {
    let depth = 0, parent = this.parent;
    while (parent) {
      depth++;
      parent = parent.parent;
    }
    return depth;
  }
  _batchTransformChanges(func) {
    this._batchingTransformChange = true;
    func();
    this._batchingTransformChange = false;
    if (this._needClearTransformCache) {
      this._clearCache(TRANSFORM);
      this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
    }
    this._needClearTransformCache = false;
  }
  setPosition(pos) {
    this._batchTransformChanges(() => {
      this.x(pos.x);
      this.y(pos.y);
    });
    return this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    const stage = this.getStage();
    if (!stage) {
      return null;
    }
    const pos = stage.getPointerPosition();
    if (!pos) {
      return null;
    }
    const transform = this.getAbsoluteTransform().copy();
    transform.invert();
    return transform.point(pos);
  }
  getAbsolutePosition(top) {
    let haveCachedParent = false;
    let parent = this.parent;
    while (parent) {
      if (parent.isCached()) {
        haveCachedParent = true;
        break;
      }
      parent = parent.parent;
    }
    if (haveCachedParent && !top) {
      top = true;
    }
    const absoluteMatrix = this.getAbsoluteTransform(top).getMatrix(), absoluteTransform = new Util_1$c.Transform(), offset = this.offset();
    absoluteTransform.m = absoluteMatrix.slice();
    absoluteTransform.translate(offset.x, offset.y);
    return absoluteTransform.getTranslation();
  }
  setAbsolutePosition(pos) {
    const { x: x2, y: y2, ...origTrans } = this._clearTransform();
    this.attrs.x = x2;
    this.attrs.y = y2;
    this._clearCache(TRANSFORM);
    const it = this._getAbsoluteTransform().copy();
    it.invert();
    it.translate(pos.x, pos.y);
    pos = {
      x: this.attrs.x + it.getTranslation().x,
      y: this.attrs.y + it.getTranslation().y
    };
    this._setTransform(origTrans);
    this.setPosition({ x: pos.x, y: pos.y });
    this._clearCache(TRANSFORM);
    this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
    return this;
  }
  _setTransform(trans) {
    let key;
    for (key in trans) {
      this.attrs[key] = trans[key];
    }
  }
  _clearTransform() {
    const trans = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    this.attrs.x = 0;
    this.attrs.y = 0;
    this.attrs.rotation = 0;
    this.attrs.scaleX = 1;
    this.attrs.scaleY = 1;
    this.attrs.offsetX = 0;
    this.attrs.offsetY = 0;
    this.attrs.skewX = 0;
    this.attrs.skewY = 0;
    return trans;
  }
  move(change) {
    let changeX = change.x, changeY = change.y, x2 = this.x(), y2 = this.y();
    if (changeX !== void 0) {
      x2 += changeX;
    }
    if (changeY !== void 0) {
      y2 += changeY;
    }
    this.setPosition({ x: x2, y: y2 });
    return this;
  }
  _eachAncestorReverse(func, top) {
    let family = [], parent = this.getParent(), len, n2;
    if (top && top._id === this._id) {
      return;
    }
    family.unshift(this);
    while (parent && (!top || parent._id !== top._id)) {
      family.unshift(parent);
      parent = parent.parent;
    }
    len = family.length;
    for (n2 = 0; n2 < len; n2++) {
      func(family[n2]);
    }
  }
  rotate(theta) {
    this.rotation(this.rotation() + theta);
    return this;
  }
  moveToTop() {
    if (!this.parent) {
      Util_1$c.Util.warn("Node has no parent. moveToTop function is ignored.");
      return false;
    }
    const index = this.index, len = this.parent.getChildren().length;
    if (index < len - 1) {
      this.parent.children.splice(index, 1);
      this.parent.children.push(this);
      this.parent._setChildrenIndices();
      return true;
    }
    return false;
  }
  moveUp() {
    if (!this.parent) {
      Util_1$c.Util.warn("Node has no parent. moveUp function is ignored.");
      return false;
    }
    const index = this.index, len = this.parent.getChildren().length;
    if (index < len - 1) {
      this.parent.children.splice(index, 1);
      this.parent.children.splice(index + 1, 0, this);
      this.parent._setChildrenIndices();
      return true;
    }
    return false;
  }
  moveDown() {
    if (!this.parent) {
      Util_1$c.Util.warn("Node has no parent. moveDown function is ignored.");
      return false;
    }
    const index = this.index;
    if (index > 0) {
      this.parent.children.splice(index, 1);
      this.parent.children.splice(index - 1, 0, this);
      this.parent._setChildrenIndices();
      return true;
    }
    return false;
  }
  moveToBottom() {
    if (!this.parent) {
      Util_1$c.Util.warn("Node has no parent. moveToBottom function is ignored.");
      return false;
    }
    const index = this.index;
    if (index > 0) {
      this.parent.children.splice(index, 1);
      this.parent.children.unshift(this);
      this.parent._setChildrenIndices();
      return true;
    }
    return false;
  }
  setZIndex(zIndex) {
    if (!this.parent) {
      Util_1$c.Util.warn("Node has no parent. zIndex parameter is ignored.");
      return this;
    }
    if (zIndex < 0 || zIndex >= this.parent.children.length) {
      Util_1$c.Util.warn("Unexpected value " + zIndex + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    }
    const index = this.index;
    this.parent.children.splice(index, 1);
    this.parent.children.splice(zIndex, 0, this);
    this.parent._setChildrenIndices();
    return this;
  }
  getAbsoluteOpacity() {
    return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    let absOpacity = this.opacity();
    const parent = this.getParent();
    if (parent && !parent._isUnderCache) {
      absOpacity *= parent.getAbsoluteOpacity();
    }
    return absOpacity;
  }
  moveTo(newContainer) {
    if (this.getParent() !== newContainer) {
      this._remove();
      newContainer.add(this);
    }
    return this;
  }
  toObject() {
    let attrs = this.getAttrs(), key, val, getter, defaultValue, nonPlainObject;
    const obj = {
      attrs: {},
      className: this.getClassName()
    };
    for (key in attrs) {
      val = attrs[key];
      nonPlainObject = Util_1$c.Util.isObject(val) && !Util_1$c.Util._isPlainObject(val) && !Util_1$c.Util._isArray(val);
      if (nonPlainObject) {
        continue;
      }
      getter = typeof this[key] === "function" && this[key];
      delete attrs[key];
      defaultValue = getter ? getter.call(this) : null;
      attrs[key] = val;
      if (defaultValue !== val) {
        obj.attrs[key] = val;
      }
    }
    return Util_1$c.Util._prepareToStringify(obj);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(selector, includeSelf, stopNode) {
    const res = [];
    if (includeSelf && this._isMatch(selector)) {
      res.push(this);
    }
    let ancestor = this.parent;
    while (ancestor) {
      if (ancestor === stopNode) {
        return res;
      }
      if (ancestor._isMatch(selector)) {
        res.push(ancestor);
      }
      ancestor = ancestor.parent;
    }
    return res;
  }
  isAncestorOf(node) {
    return false;
  }
  findAncestor(selector, includeSelf, stopNode) {
    return this.findAncestors(selector, includeSelf, stopNode)[0];
  }
  _isMatch(selector) {
    if (!selector) {
      return false;
    }
    if (typeof selector === "function") {
      return selector(this);
    }
    let selectorArr = selector.replace(/ /g, "").split(","), len = selectorArr.length, n2, sel;
    for (n2 = 0; n2 < len; n2++) {
      sel = selectorArr[n2];
      if (!Util_1$c.Util.isValidSelector(sel)) {
        Util_1$c.Util.warn('Selector "' + sel + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".');
        Util_1$c.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".');
        Util_1$c.Util.warn("Konva is awesome, right?");
      }
      if (sel.charAt(0) === "#") {
        if (this.id() === sel.slice(1)) {
          return true;
        }
      } else if (sel.charAt(0) === ".") {
        if (this.hasName(sel.slice(1))) {
          return true;
        }
      } else if (this.className === sel || this.nodeType === sel) {
        return true;
      }
    }
    return false;
  }
  getLayer() {
    const parent = this.getParent();
    return parent ? parent.getLayer() : null;
  }
  getStage() {
    return this._getCache(STAGE, this._getStage);
  }
  _getStage() {
    const parent = this.getParent();
    if (parent) {
      return parent.getStage();
    } else {
      return null;
    }
  }
  fire(eventType, evt = {}, bubble) {
    evt.target = evt.target || this;
    if (bubble) {
      this._fireAndBubble(eventType, evt);
    } else {
      this._fire(eventType, evt);
    }
    return this;
  }
  getAbsoluteTransform(top) {
    if (top) {
      return this._getAbsoluteTransform(top);
    } else {
      return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
    }
  }
  _getAbsoluteTransform(top) {
    let at;
    if (top) {
      at = new Util_1$c.Transform();
      this._eachAncestorReverse(function(node) {
        const transformsEnabled = node.transformsEnabled();
        if (transformsEnabled === "all") {
          at.multiply(node.getTransform());
        } else if (transformsEnabled === "position") {
          at.translate(node.x() - node.offsetX(), node.y() - node.offsetY());
        }
      }, top);
      return at;
    } else {
      at = this._cache.get(ABSOLUTE_TRANSFORM) || new Util_1$c.Transform();
      if (this.parent) {
        this.parent.getAbsoluteTransform().copyInto(at);
      } else {
        at.reset();
      }
      const transformsEnabled = this.transformsEnabled();
      if (transformsEnabled === "all") {
        at.multiply(this.getTransform());
      } else if (transformsEnabled === "position") {
        const x2 = this.attrs.x || 0;
        const y2 = this.attrs.y || 0;
        const offsetX = this.attrs.offsetX || 0;
        const offsetY = this.attrs.offsetY || 0;
        at.translate(x2 - offsetX, y2 - offsetY);
      }
      at.dirty = false;
      return at;
    }
  }
  getAbsoluteScale(top) {
    let parent = this;
    while (parent) {
      if (parent._isUnderCache) {
        top = parent;
      }
      parent = parent.getParent();
    }
    const transform = this.getAbsoluteTransform(top);
    const attrs = transform.decompose();
    return {
      x: attrs.scaleX,
      y: attrs.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(TRANSFORM, this._getTransform);
  }
  _getTransform() {
    var _a2, _b2;
    const m2 = this._cache.get(TRANSFORM) || new Util_1$c.Transform();
    m2.reset();
    const x2 = this.x(), y2 = this.y(), rotation = Global_1$m.Konva.getAngle(this.rotation()), scaleX = (_a2 = this.attrs.scaleX) !== null && _a2 !== void 0 ? _a2 : 1, scaleY = (_b2 = this.attrs.scaleY) !== null && _b2 !== void 0 ? _b2 : 1, skewX = this.attrs.skewX || 0, skewY = this.attrs.skewY || 0, offsetX = this.attrs.offsetX || 0, offsetY = this.attrs.offsetY || 0;
    if (x2 !== 0 || y2 !== 0) {
      m2.translate(x2, y2);
    }
    if (rotation !== 0) {
      m2.rotate(rotation);
    }
    if (skewX !== 0 || skewY !== 0) {
      m2.skew(skewX, skewY);
    }
    if (scaleX !== 1 || scaleY !== 1) {
      m2.scale(scaleX, scaleY);
    }
    if (offsetX !== 0 || offsetY !== 0) {
      m2.translate(-1 * offsetX, -1 * offsetY);
    }
    m2.dirty = false;
    return m2;
  }
  clone(obj) {
    let attrs = Util_1$c.Util.cloneObject(this.attrs), key, allListeners, len, n2, listener;
    for (key in obj) {
      attrs[key] = obj[key];
    }
    const node = new this.constructor(attrs);
    for (key in this.eventListeners) {
      allListeners = this.eventListeners[key];
      len = allListeners.length;
      for (n2 = 0; n2 < len; n2++) {
        listener = allListeners[n2];
        if (listener.name.indexOf(KONVA) < 0) {
          if (!node.eventListeners[key]) {
            node.eventListeners[key] = [];
          }
          node.eventListeners[key].push(listener);
        }
      }
    }
    return node;
  }
  _toKonvaCanvas(config) {
    config = config || {};
    const box = this.getClientRect();
    const stage = this.getStage(), x2 = config.x !== void 0 ? config.x : Math.floor(box.x), y2 = config.y !== void 0 ? config.y : Math.floor(box.y), pixelRatio = config.pixelRatio || 1, canvas = new Canvas_1$1.SceneCanvas({
      width: config.width || Math.ceil(box.width) || (stage ? stage.width() : 0),
      height: config.height || Math.ceil(box.height) || (stage ? stage.height() : 0),
      pixelRatio
    }), context = canvas.getContext();
    const bufferCanvas = new Canvas_1$1.SceneCanvas({
      width: canvas.width / canvas.pixelRatio + Math.abs(x2),
      height: canvas.height / canvas.pixelRatio + Math.abs(y2),
      pixelRatio: canvas.pixelRatio
    });
    if (config.imageSmoothingEnabled === false) {
      context._context.imageSmoothingEnabled = false;
    }
    context.save();
    if (x2 || y2) {
      context.translate(-1 * x2, -1 * y2);
    }
    this.drawScene(canvas, void 0, bufferCanvas);
    context.restore();
    return canvas;
  }
  toCanvas(config) {
    return this._toKonvaCanvas(config)._canvas;
  }
  toDataURL(config) {
    config = config || {};
    const mimeType = config.mimeType || null, quality = config.quality || null;
    const url = this._toKonvaCanvas(config).toDataURL(mimeType, quality);
    if (config.callback) {
      config.callback(url);
    }
    return url;
  }
  toImage(config) {
    return new Promise((resolve, reject) => {
      try {
        const callback = config === null || config === void 0 ? void 0 : config.callback;
        if (callback)
          delete config.callback;
        Util_1$c.Util._urlToImage(this.toDataURL(config), function(img) {
          resolve(img);
          callback === null || callback === void 0 ? void 0 : callback(img);
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  toBlob(config) {
    return new Promise((resolve, reject) => {
      try {
        const callback = config === null || config === void 0 ? void 0 : config.callback;
        if (callback)
          delete config.callback;
        this.toCanvas(config).toBlob((blob) => {
          resolve(blob);
          callback === null || callback === void 0 ? void 0 : callback(blob);
        }, config === null || config === void 0 ? void 0 : config.mimeType, config === null || config === void 0 ? void 0 : config.quality);
      } catch (err) {
        reject(err);
      }
    });
  }
  setSize(size) {
    this.width(size.width);
    this.height(size.height);
    return this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    if (this.attrs.dragDistance !== void 0) {
      return this.attrs.dragDistance;
    } else if (this.parent) {
      return this.parent.getDragDistance();
    } else {
      return Global_1$m.Konva.dragDistance;
    }
  }
  _off(type, name, callback) {
    let evtListeners = this.eventListeners[type], i, evtName, handler;
    for (i = 0; i < evtListeners.length; i++) {
      evtName = evtListeners[i].name;
      handler = evtListeners[i].handler;
      if ((evtName !== "konva" || name === "konva") && (!name || evtName === name) && (!callback || callback === handler)) {
        evtListeners.splice(i, 1);
        if (evtListeners.length === 0) {
          delete this.eventListeners[type];
          break;
        }
        i--;
      }
    }
  }
  _fireChangeEvent(attr, oldVal, newVal) {
    this._fire(attr + CHANGE, {
      oldVal,
      newVal
    });
  }
  addName(name) {
    if (!this.hasName(name)) {
      const oldName = this.name();
      const newName = oldName ? oldName + " " + name : name;
      this.name(newName);
    }
    return this;
  }
  hasName(name) {
    if (!name) {
      return false;
    }
    const fullName = this.name();
    if (!fullName) {
      return false;
    }
    const names = (fullName || "").split(/\s/g);
    return names.indexOf(name) !== -1;
  }
  removeName(name) {
    const names = (this.name() || "").split(/\s/g);
    const index = names.indexOf(name);
    if (index !== -1) {
      names.splice(index, 1);
      this.name(names.join(" "));
    }
    return this;
  }
  setAttr(attr, val) {
    const func = this[SET + Util_1$c.Util._capitalize(attr)];
    if (Util_1$c.Util._isFunction(func)) {
      func.call(this, val);
    } else {
      this._setAttr(attr, val);
    }
    return this;
  }
  _requestDraw() {
    if (Global_1$m.Konva.autoDrawEnabled) {
      const drawNode = this.getLayer() || this.getStage();
      drawNode === null || drawNode === void 0 ? void 0 : drawNode.batchDraw();
    }
  }
  _setAttr(key, val) {
    const oldVal = this.attrs[key];
    if (oldVal === val && !Util_1$c.Util.isObject(val)) {
      return;
    }
    if (val === void 0 || val === null) {
      delete this.attrs[key];
    } else {
      this.attrs[key] = val;
    }
    if (this._shouldFireChangeEvents) {
      this._fireChangeEvent(key, oldVal, val);
    }
    this._requestDraw();
  }
  _setComponentAttr(key, component, val) {
    let oldVal;
    if (val !== void 0) {
      oldVal = this.attrs[key];
      if (!oldVal) {
        this.attrs[key] = this.getAttr(key);
      }
      this.attrs[key][component] = val;
      this._fireChangeEvent(key, oldVal, val);
    }
  }
  _fireAndBubble(eventType, evt, compareShape) {
    if (evt && this.nodeType === SHAPE) {
      evt.target = this;
    }
    const nonBubbling = [
      MOUSEENTER,
      MOUSELEAVE,
      POINTERENTER,
      POINTERLEAVE,
      TOUCHENTER,
      TOUCHLEAVE
    ];
    const shouldStop = nonBubbling.indexOf(eventType) !== -1 && (compareShape && (this === compareShape || this.isAncestorOf && this.isAncestorOf(compareShape)) || this.nodeType === "Stage" && !compareShape);
    if (!shouldStop) {
      this._fire(eventType, evt);
      const stopBubble = nonBubbling.indexOf(eventType) !== -1 && compareShape && compareShape.isAncestorOf && compareShape.isAncestorOf(this) && !compareShape.isAncestorOf(this.parent);
      if ((evt && !evt.cancelBubble || !evt) && this.parent && this.parent.isListening() && !stopBubble) {
        if (compareShape && compareShape.parent) {
          this._fireAndBubble.call(this.parent, eventType, evt, compareShape);
        } else {
          this._fireAndBubble.call(this.parent, eventType, evt);
        }
      }
    }
  }
  _getProtoListeners(eventType) {
    var _a2, _b2, _c;
    const allListeners = (_a2 = this._cache.get(ALL_LISTENERS)) !== null && _a2 !== void 0 ? _a2 : {};
    let events = allListeners === null || allListeners === void 0 ? void 0 : allListeners[eventType];
    if (events === void 0) {
      events = [];
      let obj = Object.getPrototypeOf(this);
      while (obj) {
        const hierarchyEvents = (_c = (_b2 = obj.eventListeners) === null || _b2 === void 0 ? void 0 : _b2[eventType]) !== null && _c !== void 0 ? _c : [];
        events.push(...hierarchyEvents);
        obj = Object.getPrototypeOf(obj);
      }
      allListeners[eventType] = events;
      this._cache.set(ALL_LISTENERS, allListeners);
    }
    return events;
  }
  _fire(eventType, evt) {
    evt = evt || {};
    evt.currentTarget = this;
    evt.type = eventType;
    const topListeners = this._getProtoListeners(eventType);
    if (topListeners) {
      for (let i = 0; i < topListeners.length; i++) {
        topListeners[i].handler.call(this, evt);
      }
    }
    const selfListeners = this.eventListeners[eventType];
    if (selfListeners) {
      for (let i = 0; i < selfListeners.length; i++) {
        selfListeners[i].handler.call(this, evt);
      }
    }
  }
  draw() {
    this.drawScene();
    this.drawHit();
    return this;
  }
  _createDragElement(evt) {
    const pointerId = evt ? evt.pointerId : void 0;
    const stage = this.getStage();
    const ap = this.getAbsolutePosition();
    if (!stage) {
      return;
    }
    const pos = stage._getPointerById(pointerId) || stage._changedPointerPositions[0] || ap;
    DragAndDrop_1.DD._dragElements.set(this._id, {
      node: this,
      startPointerPos: pos,
      offset: {
        x: pos.x - ap.x,
        y: pos.y - ap.y
      },
      dragStatus: "ready",
      pointerId
    });
  }
  startDrag(evt, bubbleEvent = true) {
    if (!DragAndDrop_1.DD._dragElements.has(this._id)) {
      this._createDragElement(evt);
    }
    const elem = DragAndDrop_1.DD._dragElements.get(this._id);
    elem.dragStatus = "dragging";
    this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: evt && evt.evt
    }, bubbleEvent);
  }
  _setDragPosition(evt, elem) {
    const pos = this.getStage()._getPointerById(elem.pointerId);
    if (!pos) {
      return;
    }
    let newNodePos = {
      x: pos.x - elem.offset.x,
      y: pos.y - elem.offset.y
    };
    const dbf = this.dragBoundFunc();
    if (dbf !== void 0) {
      const bounded = dbf.call(this, newNodePos, evt);
      if (!bounded) {
        Util_1$c.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      } else {
        newNodePos = bounded;
      }
    }
    if (!this._lastPos || this._lastPos.x !== newNodePos.x || this._lastPos.y !== newNodePos.y) {
      this.setAbsolutePosition(newNodePos);
      this._requestDraw();
    }
    this._lastPos = newNodePos;
  }
  stopDrag(evt) {
    const elem = DragAndDrop_1.DD._dragElements.get(this._id);
    if (elem) {
      elem.dragStatus = "stopped";
    }
    DragAndDrop_1.DD._endDragBefore(evt);
    DragAndDrop_1.DD._endDragAfter(evt);
  }
  setDraggable(draggable) {
    this._setAttr("draggable", draggable);
    this._dragChange();
  }
  isDragging() {
    const elem = DragAndDrop_1.DD._dragElements.get(this._id);
    return elem ? elem.dragStatus === "dragging" : false;
  }
  _listenDrag() {
    this._dragCleanup();
    this.on("mousedown.konva touchstart.konva", function(evt) {
      const shouldCheckButton = evt.evt["button"] !== void 0;
      const canDrag = !shouldCheckButton || Global_1$m.Konva.dragButtons.indexOf(evt.evt["button"]) >= 0;
      if (!canDrag) {
        return;
      }
      if (this.isDragging()) {
        return;
      }
      let hasDraggingChild = false;
      DragAndDrop_1.DD._dragElements.forEach((elem) => {
        if (this.isAncestorOf(elem.node)) {
          hasDraggingChild = true;
        }
      });
      if (!hasDraggingChild) {
        this._createDragElement(evt);
      }
    });
  }
  _dragChange() {
    if (this.attrs.draggable) {
      this._listenDrag();
    } else {
      this._dragCleanup();
      const stage = this.getStage();
      if (!stage) {
        return;
      }
      const dragElement = DragAndDrop_1.DD._dragElements.get(this._id);
      const isDragging = dragElement && dragElement.dragStatus === "dragging";
      const isReady = dragElement && dragElement.dragStatus === "ready";
      if (isDragging) {
        this.stopDrag();
      } else if (isReady) {
        DragAndDrop_1.DD._dragElements.delete(this._id);
      }
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva");
    this.off("touchstart.konva");
  }
  isClientRectOnScreen(margin = { x: 0, y: 0 }) {
    const stage = this.getStage();
    if (!stage) {
      return false;
    }
    const screenRect = {
      x: -margin.x,
      y: -margin.y,
      width: stage.width() + 2 * margin.x,
      height: stage.height() + 2 * margin.y
    };
    return Util_1$c.Util.haveIntersection(screenRect, this.getClientRect());
  }
  static create(data, container) {
    if (Util_1$c.Util._isString(data)) {
      data = JSON.parse(data);
    }
    return this._createNode(data, container);
  }
  static _createNode(obj, container) {
    let className = Node.prototype.getClassName.call(obj), children = obj.children, no, len, n2;
    if (container) {
      obj.attrs.container = container;
    }
    if (!Global_1$m.Konva[className]) {
      Util_1$c.Util.warn('Can not find a node with class name "' + className + '". Fallback to "Shape".');
      className = "Shape";
    }
    const Class = Global_1$m.Konva[className];
    no = new Class(obj.attrs);
    if (children) {
      len = children.length;
      for (n2 = 0; n2 < len; n2++) {
        no.add(Node._createNode(children[n2]));
      }
    }
    return no;
  }
}
Node$1.Node = Node;
Node.prototype.nodeType = "Node";
Node.prototype._attrsAffectingSize = [];
Node.prototype.eventListeners = {};
Node.prototype.on.call(Node.prototype, TRANSFORM_CHANGE_STR$1, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = true;
    return;
  }
  this._clearCache(TRANSFORM);
  this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
});
Node.prototype.on.call(Node.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(VISIBLE);
});
Node.prototype.on.call(Node.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(LISTENING);
});
Node.prototype.on.call(Node.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
});
const addGetterSetter = Factory_1$y.Factory.addGetterSetter;
addGetterSetter(Node, "zIndex");
addGetterSetter(Node, "absolutePosition");
addGetterSetter(Node, "position");
addGetterSetter(Node, "x", 0, (0, Validators_1$x.getNumberValidator)());
addGetterSetter(Node, "y", 0, (0, Validators_1$x.getNumberValidator)());
addGetterSetter(Node, "globalCompositeOperation", "source-over", (0, Validators_1$x.getStringValidator)());
addGetterSetter(Node, "opacity", 1, (0, Validators_1$x.getNumberValidator)());
addGetterSetter(Node, "name", "", (0, Validators_1$x.getStringValidator)());
addGetterSetter(Node, "id", "", (0, Validators_1$x.getStringValidator)());
addGetterSetter(Node, "rotation", 0, (0, Validators_1$x.getNumberValidator)());
Factory_1$y.Factory.addComponentsGetterSetter(Node, "scale", ["x", "y"]);
addGetterSetter(Node, "scaleX", 1, (0, Validators_1$x.getNumberValidator)());
addGetterSetter(Node, "scaleY", 1, (0, Validators_1$x.getNumberValidator)());
Factory_1$y.Factory.addComponentsGetterSetter(Node, "skew", ["x", "y"]);
addGetterSetter(Node, "skewX", 0, (0, Validators_1$x.getNumberValidator)());
addGetterSetter(Node, "skewY", 0, (0, Validators_1$x.getNumberValidator)());
Factory_1$y.Factory.addComponentsGetterSetter(Node, "offset", ["x", "y"]);
addGetterSetter(Node, "offsetX", 0, (0, Validators_1$x.getNumberValidator)());
addGetterSetter(Node, "offsetY", 0, (0, Validators_1$x.getNumberValidator)());
addGetterSetter(Node, "dragDistance", void 0, (0, Validators_1$x.getNumberValidator)());
addGetterSetter(Node, "width", 0, (0, Validators_1$x.getNumberValidator)());
addGetterSetter(Node, "height", 0, (0, Validators_1$x.getNumberValidator)());
addGetterSetter(Node, "listening", true, (0, Validators_1$x.getBooleanValidator)());
addGetterSetter(Node, "preventDefault", true, (0, Validators_1$x.getBooleanValidator)());
addGetterSetter(Node, "filters", void 0, function(val) {
  this._filterUpToDate = false;
  return val;
});
addGetterSetter(Node, "visible", true, (0, Validators_1$x.getBooleanValidator)());
addGetterSetter(Node, "transformsEnabled", "all", (0, Validators_1$x.getStringValidator)());
addGetterSetter(Node, "size");
addGetterSetter(Node, "dragBoundFunc");
addGetterSetter(Node, "draggable", false, (0, Validators_1$x.getBooleanValidator)());
Factory_1$y.Factory.backCompat(Node, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
var Container$1 = {};
Object.defineProperty(Container$1, "__esModule", { value: true });
Container$1.Container = void 0;
const Factory_1$x = Factory;
const Node_1$h = Node$1;
const Validators_1$w = Validators;
class Container extends Node_1$h.Node {
  constructor() {
    super(...arguments);
    this.children = [];
  }
  getChildren(filterFunc) {
    const children = this.children || [];
    if (filterFunc) {
      return children.filter(filterFunc);
    }
    return children;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    this.getChildren().forEach((child) => {
      child.parent = null;
      child.index = 0;
      child.remove();
    });
    this.children = [];
    this._requestDraw();
    return this;
  }
  destroyChildren() {
    this.getChildren().forEach((child) => {
      child.parent = null;
      child.index = 0;
      child.destroy();
    });
    this.children = [];
    this._requestDraw();
    return this;
  }
  add(...children) {
    if (children.length === 0) {
      return this;
    }
    if (children.length > 1) {
      for (let i = 0; i < children.length; i++) {
        this.add(children[i]);
      }
      return this;
    }
    const child = children[0];
    if (child.getParent()) {
      child.moveTo(this);
      return this;
    }
    this._validateAdd(child);
    child.index = this.getChildren().length;
    child.parent = this;
    child._clearCaches();
    this.getChildren().push(child);
    this._fire("add", {
      child
    });
    this._requestDraw();
    return this;
  }
  destroy() {
    if (this.hasChildren()) {
      this.destroyChildren();
    }
    super.destroy();
    return this;
  }
  find(selector) {
    return this._generalFind(selector, false);
  }
  findOne(selector) {
    const result = this._generalFind(selector, true);
    return result.length > 0 ? result[0] : void 0;
  }
  _generalFind(selector, findOne) {
    const retArr = [];
    this._descendants((node) => {
      const valid = node._isMatch(selector);
      if (valid) {
        retArr.push(node);
      }
      if (valid && findOne) {
        return true;
      }
      return false;
    });
    return retArr;
  }
  _descendants(fn) {
    let shouldStop = false;
    const children = this.getChildren();
    for (const child of children) {
      shouldStop = fn(child);
      if (shouldStop) {
        return true;
      }
      if (!child.hasChildren()) {
        continue;
      }
      shouldStop = child._descendants(fn);
      if (shouldStop) {
        return true;
      }
    }
    return false;
  }
  toObject() {
    const obj = Node_1$h.Node.prototype.toObject.call(this);
    obj.children = [];
    this.getChildren().forEach((child) => {
      obj.children.push(child.toObject());
    });
    return obj;
  }
  isAncestorOf(node) {
    let parent = node.getParent();
    while (parent) {
      if (parent._id === this._id) {
        return true;
      }
      parent = parent.getParent();
    }
    return false;
  }
  clone(obj) {
    const node = Node_1$h.Node.prototype.clone.call(this, obj);
    this.getChildren().forEach(function(no) {
      node.add(no.clone());
    });
    return node;
  }
  getAllIntersections(pos) {
    const arr = [];
    this.find("Shape").forEach((shape) => {
      if (shape.isVisible() && shape.intersects(pos)) {
        arr.push(shape);
      }
    });
    return arr;
  }
  _clearSelfAndDescendantCache(attr) {
    var _a2;
    super._clearSelfAndDescendantCache(attr);
    if (this.isCached()) {
      return;
    }
    (_a2 = this.children) === null || _a2 === void 0 ? void 0 : _a2.forEach(function(node) {
      node._clearSelfAndDescendantCache(attr);
    });
  }
  _setChildrenIndices() {
    var _a2;
    (_a2 = this.children) === null || _a2 === void 0 ? void 0 : _a2.forEach(function(child, n2) {
      child.index = n2;
    });
    this._requestDraw();
  }
  drawScene(can, top, bufferCanvas) {
    const layer = this.getLayer(), canvas = can || layer && layer.getCanvas(), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;
    const caching = canvas && canvas.isCache;
    if (!this.isVisible() && !caching) {
      return this;
    }
    if (cachedSceneCanvas) {
      context.save();
      const m2 = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
      this._drawCachedSceneCanvas(context);
      context.restore();
    } else {
      this._drawChildren("drawScene", canvas, top, bufferCanvas);
    }
    return this;
  }
  drawHit(can, top) {
    if (!this.shouldDrawHit(top)) {
      return this;
    }
    const layer = this.getLayer(), canvas = can || layer && layer.hitCanvas, context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
    if (cachedHitCanvas) {
      context.save();
      const m2 = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
      this._drawCachedHitCanvas(context);
      context.restore();
    } else {
      this._drawChildren("drawHit", canvas, top);
    }
    return this;
  }
  _drawChildren(drawMethod, canvas, top, bufferCanvas) {
    var _a2;
    const context = canvas && canvas.getContext(), clipWidth = this.clipWidth(), clipHeight = this.clipHeight(), clipFunc = this.clipFunc(), hasClip = typeof clipWidth === "number" && typeof clipHeight === "number" || clipFunc;
    const selfCache = top === this;
    if (hasClip) {
      context.save();
      const transform = this.getAbsoluteTransform(top);
      let m2 = transform.getMatrix();
      context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
      context.beginPath();
      let clipArgs;
      if (clipFunc) {
        clipArgs = clipFunc.call(this, context, this);
      } else {
        const clipX = this.clipX();
        const clipY = this.clipY();
        context.rect(clipX || 0, clipY || 0, clipWidth, clipHeight);
      }
      context.clip.apply(context, clipArgs);
      m2 = transform.copy().invert().getMatrix();
      context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
    }
    const hasComposition = !selfCache && this.globalCompositeOperation() !== "source-over" && drawMethod === "drawScene";
    if (hasComposition) {
      context.save();
      context._applyGlobalCompositeOperation(this);
    }
    (_a2 = this.children) === null || _a2 === void 0 ? void 0 : _a2.forEach(function(child) {
      child[drawMethod](canvas, top, bufferCanvas);
    });
    if (hasComposition) {
      context.restore();
    }
    if (hasClip) {
      context.restore();
    }
  }
  getClientRect(config = {}) {
    var _a2;
    const skipTransform = config.skipTransform;
    const relativeTo = config.relativeTo;
    let minX, minY, maxX, maxY;
    let selfRect = {
      x: Infinity,
      y: Infinity,
      width: 0,
      height: 0
    };
    const that = this;
    (_a2 = this.children) === null || _a2 === void 0 ? void 0 : _a2.forEach(function(child) {
      if (!child.visible()) {
        return;
      }
      const rect = child.getClientRect({
        relativeTo: that,
        skipShadow: config.skipShadow,
        skipStroke: config.skipStroke
      });
      if (rect.width === 0 && rect.height === 0) {
        return;
      }
      if (minX === void 0) {
        minX = rect.x;
        minY = rect.y;
        maxX = rect.x + rect.width;
        maxY = rect.y + rect.height;
      } else {
        minX = Math.min(minX, rect.x);
        minY = Math.min(minY, rect.y);
        maxX = Math.max(maxX, rect.x + rect.width);
        maxY = Math.max(maxY, rect.y + rect.height);
      }
    });
    const shapes = this.find("Shape");
    let hasVisible = false;
    for (let i = 0; i < shapes.length; i++) {
      const shape = shapes[i];
      if (shape._isVisible(this)) {
        hasVisible = true;
        break;
      }
    }
    if (hasVisible && minX !== void 0) {
      selfRect = {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      };
    } else {
      selfRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    if (!skipTransform) {
      return this._transformedRect(selfRect, relativeTo);
    }
    return selfRect;
  }
}
Container$1.Container = Container;
Factory_1$x.Factory.addComponentsGetterSetter(Container, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
Factory_1$x.Factory.addGetterSetter(Container, "clipX", void 0, (0, Validators_1$w.getNumberValidator)());
Factory_1$x.Factory.addGetterSetter(Container, "clipY", void 0, (0, Validators_1$w.getNumberValidator)());
Factory_1$x.Factory.addGetterSetter(Container, "clipWidth", void 0, (0, Validators_1$w.getNumberValidator)());
Factory_1$x.Factory.addGetterSetter(Container, "clipHeight", void 0, (0, Validators_1$w.getNumberValidator)());
Factory_1$x.Factory.addGetterSetter(Container, "clipFunc");
var Stage$1 = {};
var PointerEvents = {};
Object.defineProperty(PointerEvents, "__esModule", { value: true });
PointerEvents.getCapturedShape = getCapturedShape;
PointerEvents.createEvent = createEvent;
PointerEvents.hasPointerCapture = hasPointerCapture;
PointerEvents.setPointerCapture = setPointerCapture;
PointerEvents.releaseCapture = releaseCapture;
const Global_1$l = Global;
const Captures = /* @__PURE__ */ new Map();
const SUPPORT_POINTER_EVENTS = Global_1$l.Konva._global["PointerEvent"] !== void 0;
function getCapturedShape(pointerId) {
  return Captures.get(pointerId);
}
function createEvent(evt) {
  return {
    evt,
    pointerId: evt.pointerId
  };
}
function hasPointerCapture(pointerId, shape) {
  return Captures.get(pointerId) === shape;
}
function setPointerCapture(pointerId, shape) {
  releaseCapture(pointerId);
  const stage = shape.getStage();
  if (!stage)
    return;
  Captures.set(pointerId, shape);
  if (SUPPORT_POINTER_EVENTS) {
    shape._fire("gotpointercapture", createEvent(new PointerEvent("gotpointercapture")));
  }
}
function releaseCapture(pointerId, target) {
  const shape = Captures.get(pointerId);
  if (!shape)
    return;
  const stage = shape.getStage();
  if (stage && stage.content) ;
  Captures.delete(pointerId);
  if (SUPPORT_POINTER_EVENTS) {
    shape._fire("lostpointercapture", createEvent(new PointerEvent("lostpointercapture")));
  }
}
(function(exports$1) {
  Object.defineProperty(exports$1, "__esModule", { value: true });
  exports$1.Stage = exports$1.stages = void 0;
  const Util_12 = Util;
  const Factory_12 = Factory;
  const Container_12 = Container$1;
  const Global_12 = Global;
  const Canvas_12 = Canvas$1;
  const DragAndDrop_12 = DragAndDrop;
  const Global_22 = Global;
  const PointerEvents$1 = PointerEvents;
  const STAGE2 = "Stage", STRING = "string", PX = "px", MOUSEOUT = "mouseout", MOUSELEAVE2 = "mouseleave", MOUSEOVER = "mouseover", MOUSEENTER2 = "mouseenter", MOUSEMOVE = "mousemove", MOUSEDOWN = "mousedown", MOUSEUP = "mouseup", POINTERMOVE = "pointermove", POINTERDOWN = "pointerdown", POINTERUP = "pointerup", POINTERCANCEL = "pointercancel", LOSTPOINTERCAPTURE = "lostpointercapture", POINTEROUT = "pointerout", POINTERLEAVE2 = "pointerleave", POINTEROVER = "pointerover", POINTERENTER2 = "pointerenter", CONTEXTMENU = "contextmenu", TOUCHSTART = "touchstart", TOUCHEND = "touchend", TOUCHMOVE = "touchmove", TOUCHCANCEL = "touchcancel", WHEEL = "wheel", MAX_LAYERS_NUMBER = 5, EVENTS = [
    [MOUSEENTER2, "_pointerenter"],
    [MOUSEDOWN, "_pointerdown"],
    [MOUSEMOVE, "_pointermove"],
    [MOUSEUP, "_pointerup"],
    [MOUSELEAVE2, "_pointerleave"],
    [TOUCHSTART, "_pointerdown"],
    [TOUCHMOVE, "_pointermove"],
    [TOUCHEND, "_pointerup"],
    [TOUCHCANCEL, "_pointercancel"],
    [MOUSEOVER, "_pointerover"],
    [WHEEL, "_wheel"],
    [CONTEXTMENU, "_contextmenu"],
    [POINTERDOWN, "_pointerdown"],
    [POINTERMOVE, "_pointermove"],
    [POINTERUP, "_pointerup"],
    [POINTERCANCEL, "_pointercancel"],
    [POINTERLEAVE2, "_pointerleave"],
    [LOSTPOINTERCAPTURE, "_lostpointercapture"]
  ];
  const EVENTS_MAP = {
    mouse: {
      [POINTEROUT]: MOUSEOUT,
      [POINTERLEAVE2]: MOUSELEAVE2,
      [POINTEROVER]: MOUSEOVER,
      [POINTERENTER2]: MOUSEENTER2,
      [POINTERMOVE]: MOUSEMOVE,
      [POINTERDOWN]: MOUSEDOWN,
      [POINTERUP]: MOUSEUP,
      [POINTERCANCEL]: "mousecancel",
      pointerclick: "click",
      pointerdblclick: "dblclick"
    },
    touch: {
      [POINTEROUT]: "touchout",
      [POINTERLEAVE2]: "touchleave",
      [POINTEROVER]: "touchover",
      [POINTERENTER2]: "touchenter",
      [POINTERMOVE]: TOUCHMOVE,
      [POINTERDOWN]: TOUCHSTART,
      [POINTERUP]: TOUCHEND,
      [POINTERCANCEL]: TOUCHCANCEL,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [POINTEROUT]: POINTEROUT,
      [POINTERLEAVE2]: POINTERLEAVE2,
      [POINTEROVER]: POINTEROVER,
      [POINTERENTER2]: POINTERENTER2,
      [POINTERMOVE]: POINTERMOVE,
      [POINTERDOWN]: POINTERDOWN,
      [POINTERUP]: POINTERUP,
      [POINTERCANCEL]: POINTERCANCEL,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  };
  const getEventType = (type) => {
    if (type.indexOf("pointer") >= 0) {
      return "pointer";
    }
    if (type.indexOf("touch") >= 0) {
      return "touch";
    }
    return "mouse";
  };
  const getEventsMap = (eventType) => {
    const type = getEventType(eventType);
    if (type === "pointer") {
      return Global_12.Konva.pointerEventsEnabled && EVENTS_MAP.pointer;
    }
    if (type === "touch") {
      return EVENTS_MAP.touch;
    }
    if (type === "mouse") {
      return EVENTS_MAP.mouse;
    }
  };
  function checkNoClip(attrs = {}) {
    if (attrs.clipFunc || attrs.clipWidth || attrs.clipHeight) {
      Util_12.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups.");
    }
    return attrs;
  }
  const NO_POINTERS_MESSAGE = `Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);`;
  exports$1.stages = [];
  class Stage2 extends Container_12.Container {
    constructor(config) {
      super(checkNoClip(config));
      this._pointerPositions = [];
      this._changedPointerPositions = [];
      this._buildDOM();
      this._bindContentEvents();
      exports$1.stages.push(this);
      this.on("widthChange.konva heightChange.konva", this._resizeDOM);
      this.on("visibleChange.konva", this._checkVisibility);
      this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        checkNoClip(this.attrs);
      });
      this._checkVisibility();
    }
    _validateAdd(child) {
      const isLayer = child.getType() === "Layer";
      const isFastLayer = child.getType() === "FastLayer";
      const valid = isLayer || isFastLayer;
      if (!valid) {
        Util_12.Util.throw("You may only add layers to the stage.");
      }
    }
    _checkVisibility() {
      if (!this.content) {
        return;
      }
      const style = this.visible() ? "" : "none";
      this.content.style.display = style;
    }
    setContainer(container) {
      if (typeof container === STRING) {
        let id2;
        if (container.charAt(0) === ".") {
          const className = container.slice(1);
          container = document.getElementsByClassName(className)[0];
        } else {
          if (container.charAt(0) !== "#") {
            id2 = container;
          } else {
            id2 = container.slice(1);
          }
          container = document.getElementById(id2);
        }
        if (!container) {
          throw "Can not find container in document with id " + id2;
        }
      }
      this._setAttr("container", container);
      if (this.content) {
        if (this.content.parentElement) {
          this.content.parentElement.removeChild(this.content);
        }
        container.appendChild(this.content);
      }
      return this;
    }
    shouldDrawHit() {
      return true;
    }
    clear() {
      const layers = this.children, len = layers.length;
      for (let n2 = 0; n2 < len; n2++) {
        layers[n2].clear();
      }
      return this;
    }
    clone(obj) {
      if (!obj) {
        obj = {};
      }
      obj.container = typeof document !== "undefined" && document.createElement("div");
      return Container_12.Container.prototype.clone.call(this, obj);
    }
    destroy() {
      super.destroy();
      const content = this.content;
      if (content && Util_12.Util._isInDocument(content)) {
        this.container().removeChild(content);
      }
      const index = exports$1.stages.indexOf(this);
      if (index > -1) {
        exports$1.stages.splice(index, 1);
      }
      Util_12.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas);
      return this;
    }
    getPointerPosition() {
      const pos = this._pointerPositions[0] || this._changedPointerPositions[0];
      if (!pos) {
        Util_12.Util.warn(NO_POINTERS_MESSAGE);
        return null;
      }
      return {
        x: pos.x,
        y: pos.y
      };
    }
    _getPointerById(id2) {
      return this._pointerPositions.find((p2) => p2.id === id2);
    }
    getPointersPositions() {
      return this._pointerPositions;
    }
    getStage() {
      return this;
    }
    getContent() {
      return this.content;
    }
    _toKonvaCanvas(config) {
      config = config || {};
      config.x = config.x || 0;
      config.y = config.y || 0;
      config.width = config.width || this.width();
      config.height = config.height || this.height();
      const canvas = new Canvas_12.SceneCanvas({
        width: config.width,
        height: config.height,
        pixelRatio: config.pixelRatio || 1
      });
      const _context = canvas.getContext()._context;
      const layers = this.children;
      if (config.x || config.y) {
        _context.translate(-1 * config.x, -1 * config.y);
      }
      layers.forEach(function(layer) {
        if (!layer.isVisible()) {
          return;
        }
        const layerCanvas = layer._toKonvaCanvas(config);
        _context.drawImage(layerCanvas._canvas, config.x, config.y, layerCanvas.getWidth() / layerCanvas.getPixelRatio(), layerCanvas.getHeight() / layerCanvas.getPixelRatio());
      });
      return canvas;
    }
    getIntersection(pos) {
      if (!pos) {
        return null;
      }
      const layers = this.children, len = layers.length, end = len - 1;
      for (let n2 = end; n2 >= 0; n2--) {
        const shape = layers[n2].getIntersection(pos);
        if (shape) {
          return shape;
        }
      }
      return null;
    }
    _resizeDOM() {
      const width = this.width();
      const height = this.height();
      if (this.content) {
        this.content.style.width = width + PX;
        this.content.style.height = height + PX;
      }
      this.bufferCanvas.setSize(width, height);
      this.bufferHitCanvas.setSize(width, height);
      this.children.forEach((layer) => {
        layer.setSize({ width, height });
        layer.draw();
      });
    }
    add(layer, ...rest) {
      if (arguments.length > 1) {
        for (let i = 0; i < arguments.length; i++) {
          this.add(arguments[i]);
        }
        return this;
      }
      super.add(layer);
      const length = this.children.length;
      if (length > MAX_LAYERS_NUMBER) {
        Util_12.Util.warn("The stage has " + length + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.");
      }
      layer.setSize({ width: this.width(), height: this.height() });
      layer.draw();
      if (Global_12.Konva.isBrowser) {
        this.content.appendChild(layer.canvas._canvas);
      }
      return this;
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(pointerId) {
      return PointerEvents$1.hasPointerCapture(pointerId, this);
    }
    setPointerCapture(pointerId) {
      PointerEvents$1.setPointerCapture(pointerId, this);
    }
    releaseCapture(pointerId) {
      PointerEvents$1.releaseCapture(pointerId, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      if (!Global_12.Konva.isBrowser) {
        return;
      }
      EVENTS.forEach(([event, methodName]) => {
        this.content.addEventListener(event, (evt) => {
          this[methodName](evt);
        }, { passive: false });
      });
    }
    _pointerenter(evt) {
      this.setPointersPositions(evt);
      const events = getEventsMap(evt.type);
      if (events) {
        this._fire(events.pointerenter, {
          evt,
          target: this,
          currentTarget: this
        });
      }
    }
    _pointerover(evt) {
      this.setPointersPositions(evt);
      const events = getEventsMap(evt.type);
      if (events) {
        this._fire(events.pointerover, {
          evt,
          target: this,
          currentTarget: this
        });
      }
    }
    _getTargetShape(evenType) {
      let shape = this[evenType + "targetShape"];
      if (shape && !shape.getStage()) {
        shape = null;
      }
      return shape;
    }
    _pointerleave(evt) {
      const events = getEventsMap(evt.type);
      const eventType = getEventType(evt.type);
      if (!events) {
        return;
      }
      this.setPointersPositions(evt);
      const targetShape = this._getTargetShape(eventType);
      const eventsEnabled = !(Global_12.Konva.isDragging() || Global_12.Konva.isTransforming()) || Global_12.Konva.hitOnDragEnabled;
      if (targetShape && eventsEnabled) {
        targetShape._fireAndBubble(events.pointerout, { evt });
        targetShape._fireAndBubble(events.pointerleave, { evt });
        this._fire(events.pointerleave, {
          evt,
          target: this,
          currentTarget: this
        });
        this[eventType + "targetShape"] = null;
      } else if (eventsEnabled) {
        this._fire(events.pointerleave, {
          evt,
          target: this,
          currentTarget: this
        });
        this._fire(events.pointerout, {
          evt,
          target: this,
          currentTarget: this
        });
      }
      this.pointerPos = null;
      this._pointerPositions = [];
    }
    _pointerdown(evt) {
      const events = getEventsMap(evt.type);
      const eventType = getEventType(evt.type);
      if (!events) {
        return;
      }
      this.setPointersPositions(evt);
      let triggeredOnShape = false;
      this._changedPointerPositions.forEach((pos) => {
        const shape = this.getIntersection(pos);
        DragAndDrop_12.DD.justDragged = false;
        Global_12.Konva["_" + eventType + "ListenClick"] = true;
        if (!shape || !shape.isListening()) {
          this[eventType + "ClickStartShape"] = void 0;
          return;
        }
        if (Global_12.Konva.capturePointerEventsEnabled) {
          shape.setPointerCapture(pos.id);
        }
        this[eventType + "ClickStartShape"] = shape;
        shape._fireAndBubble(events.pointerdown, {
          evt,
          pointerId: pos.id
        });
        triggeredOnShape = true;
        const isTouch = evt.type.indexOf("touch") >= 0;
        if (shape.preventDefault() && evt.cancelable && isTouch) {
          evt.preventDefault();
        }
      });
      if (!triggeredOnShape) {
        this._fire(events.pointerdown, {
          evt,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
    }
    _pointermove(evt) {
      const events = getEventsMap(evt.type);
      const eventType = getEventType(evt.type);
      if (!events) {
        return;
      }
      if (Global_12.Konva.isDragging() && DragAndDrop_12.DD.node.preventDefault() && evt.cancelable) {
        evt.preventDefault();
      }
      this.setPointersPositions(evt);
      const eventsEnabled = !(Global_12.Konva.isDragging() || Global_12.Konva.isTransforming()) || Global_12.Konva.hitOnDragEnabled;
      if (!eventsEnabled) {
        return;
      }
      const processedShapesIds = {};
      let triggeredOnShape = false;
      const targetShape = this._getTargetShape(eventType);
      this._changedPointerPositions.forEach((pos) => {
        const shape = PointerEvents$1.getCapturedShape(pos.id) || this.getIntersection(pos);
        const pointerId = pos.id;
        const event = { evt, pointerId };
        const differentTarget = targetShape !== shape;
        if (differentTarget && targetShape) {
          targetShape._fireAndBubble(events.pointerout, { ...event }, shape);
          targetShape._fireAndBubble(events.pointerleave, { ...event }, shape);
        }
        if (shape) {
          if (processedShapesIds[shape._id]) {
            return;
          }
          processedShapesIds[shape._id] = true;
        }
        if (shape && shape.isListening()) {
          triggeredOnShape = true;
          if (differentTarget) {
            shape._fireAndBubble(events.pointerover, { ...event }, targetShape);
            shape._fireAndBubble(events.pointerenter, { ...event }, targetShape);
            this[eventType + "targetShape"] = shape;
          }
          shape._fireAndBubble(events.pointermove, { ...event });
        } else {
          if (targetShape) {
            this._fire(events.pointerover, {
              evt,
              target: this,
              currentTarget: this,
              pointerId
            });
            this[eventType + "targetShape"] = null;
          }
        }
      });
      if (!triggeredOnShape) {
        this._fire(events.pointermove, {
          evt,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
    }
    _pointerup(evt) {
      const events = getEventsMap(evt.type);
      const eventType = getEventType(evt.type);
      if (!events) {
        return;
      }
      this.setPointersPositions(evt);
      const clickStartShape = this[eventType + "ClickStartShape"];
      const clickEndShape = this[eventType + "ClickEndShape"];
      const processedShapesIds = {};
      let triggeredOnShape = false;
      this._changedPointerPositions.forEach((pos) => {
        const shape = PointerEvents$1.getCapturedShape(pos.id) || this.getIntersection(pos);
        if (shape) {
          shape.releaseCapture(pos.id);
          if (processedShapesIds[shape._id]) {
            return;
          }
          processedShapesIds[shape._id] = true;
        }
        const pointerId = pos.id;
        const event = { evt, pointerId };
        let fireDblClick = false;
        if (Global_12.Konva["_" + eventType + "InDblClickWindow"]) {
          fireDblClick = true;
          clearTimeout(this[eventType + "DblTimeout"]);
        } else if (!DragAndDrop_12.DD.justDragged) {
          Global_12.Konva["_" + eventType + "InDblClickWindow"] = true;
          clearTimeout(this[eventType + "DblTimeout"]);
        }
        this[eventType + "DblTimeout"] = setTimeout(function() {
          Global_12.Konva["_" + eventType + "InDblClickWindow"] = false;
        }, Global_12.Konva.dblClickWindow);
        if (shape && shape.isListening()) {
          triggeredOnShape = true;
          this[eventType + "ClickEndShape"] = shape;
          shape._fireAndBubble(events.pointerup, { ...event });
          if (Global_12.Konva["_" + eventType + "ListenClick"] && clickStartShape && clickStartShape === shape) {
            shape._fireAndBubble(events.pointerclick, { ...event });
            if (fireDblClick && clickEndShape && clickEndShape === shape) {
              shape._fireAndBubble(events.pointerdblclick, { ...event });
            }
          }
        } else {
          this[eventType + "ClickEndShape"] = null;
          if (Global_12.Konva["_" + eventType + "ListenClick"]) {
            this._fire(events.pointerclick, {
              evt,
              target: this,
              currentTarget: this,
              pointerId
            });
          }
          if (fireDblClick) {
            this._fire(events.pointerdblclick, {
              evt,
              target: this,
              currentTarget: this,
              pointerId
            });
          }
        }
      });
      if (!triggeredOnShape) {
        this._fire(events.pointerup, {
          evt,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      Global_12.Konva["_" + eventType + "ListenClick"] = false;
      if (evt.cancelable && eventType !== "touch" && eventType !== "pointer") {
        evt.preventDefault();
      }
    }
    _contextmenu(evt) {
      this.setPointersPositions(evt);
      const shape = this.getIntersection(this.getPointerPosition());
      if (shape && shape.isListening()) {
        shape._fireAndBubble(CONTEXTMENU, { evt });
      } else {
        this._fire(CONTEXTMENU, {
          evt,
          target: this,
          currentTarget: this
        });
      }
    }
    _wheel(evt) {
      this.setPointersPositions(evt);
      const shape = this.getIntersection(this.getPointerPosition());
      if (shape && shape.isListening()) {
        shape._fireAndBubble(WHEEL, { evt });
      } else {
        this._fire(WHEEL, {
          evt,
          target: this,
          currentTarget: this
        });
      }
    }
    _pointercancel(evt) {
      this.setPointersPositions(evt);
      const shape = PointerEvents$1.getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());
      if (shape) {
        shape._fireAndBubble(POINTERUP, PointerEvents$1.createEvent(evt));
      }
      PointerEvents$1.releaseCapture(evt.pointerId);
    }
    _lostpointercapture(evt) {
      PointerEvents$1.releaseCapture(evt.pointerId);
    }
    setPointersPositions(evt) {
      const contentPosition = this._getContentPosition();
      let x2 = null, y2 = null;
      evt = evt ? evt : window.event;
      if (evt.touches !== void 0) {
        this._pointerPositions = [];
        this._changedPointerPositions = [];
        Array.prototype.forEach.call(evt.touches, (touch) => {
          this._pointerPositions.push({
            id: touch.identifier,
            x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
            y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
          });
        });
        Array.prototype.forEach.call(evt.changedTouches || evt.touches, (touch) => {
          this._changedPointerPositions.push({
            id: touch.identifier,
            x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
            y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
          });
        });
      } else {
        x2 = (evt.clientX - contentPosition.left) / contentPosition.scaleX;
        y2 = (evt.clientY - contentPosition.top) / contentPosition.scaleY;
        this.pointerPos = {
          x: x2,
          y: y2
        };
        this._pointerPositions = [{ x: x2, y: y2, id: Util_12.Util._getFirstPointerId(evt) }];
        this._changedPointerPositions = [
          { x: x2, y: y2, id: Util_12.Util._getFirstPointerId(evt) }
        ];
      }
    }
    _setPointerPosition(evt) {
      Util_12.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.');
      this.setPointersPositions(evt);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect) {
        return {
          top: 0,
          left: 0,
          scaleX: 1,
          scaleY: 1
        };
      }
      const rect = this.content.getBoundingClientRect();
      return {
        top: rect.top,
        left: rect.left,
        scaleX: rect.width / this.content.clientWidth || 1,
        scaleY: rect.height / this.content.clientHeight || 1
      };
    }
    _buildDOM() {
      this.bufferCanvas = new Canvas_12.SceneCanvas({
        width: this.width(),
        height: this.height()
      });
      this.bufferHitCanvas = new Canvas_12.HitCanvas({
        pixelRatio: 1,
        width: this.width(),
        height: this.height()
      });
      if (!Global_12.Konva.isBrowser) {
        return;
      }
      const container = this.container();
      if (!container) {
        throw "Stage has no container. A container is required.";
      }
      container.innerHTML = "";
      this.content = document.createElement("div");
      this.content.style.position = "relative";
      this.content.style.userSelect = "none";
      this.content.className = "konvajs-content";
      this.content.setAttribute("role", "presentation");
      container.appendChild(this.content);
      this._resizeDOM();
    }
    cache() {
      Util_12.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.");
      return this;
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      this.getChildren().forEach(function(layer) {
        layer.batchDraw();
      });
      return this;
    }
  }
  exports$1.Stage = Stage2;
  Stage2.prototype.nodeType = STAGE2;
  (0, Global_22._registerNode)(Stage2);
  Factory_12.Factory.addGetterSetter(Stage2, "container");
  if (Global_12.Konva.isBrowser) {
    document.addEventListener("visibilitychange", () => {
      exports$1.stages.forEach((stage) => {
        stage.batchDraw();
      });
    });
  }
})(Stage$1);
var Layer$2 = {};
var Shape = {};
(function(exports$1) {
  Object.defineProperty(exports$1, "__esModule", { value: true });
  exports$1.Shape = exports$1.shapes = void 0;
  const Global_12 = Global;
  const Util_12 = Util;
  const Factory_12 = Factory;
  const Node_12 = Node$1;
  const Validators_12 = Validators;
  const Global_22 = Global;
  const PointerEvents$1 = PointerEvents;
  const HAS_SHADOW = "hasShadow";
  const SHADOW_RGBA = "shadowRGBA";
  const patternImage = "patternImage";
  const linearGradient = "linearGradient";
  const radialGradient = "radialGradient";
  let dummyContext2;
  function getDummyContext2() {
    if (dummyContext2) {
      return dummyContext2;
    }
    dummyContext2 = Util_12.Util.createCanvasElement().getContext("2d");
    return dummyContext2;
  }
  exports$1.shapes = {};
  function _fillFunc2(context) {
    const fillRule = this.attrs.fillRule;
    if (fillRule) {
      context.fill(fillRule);
    } else {
      context.fill();
    }
  }
  function _strokeFunc2(context) {
    context.stroke();
  }
  function _fillFuncHit(context) {
    const fillRule = this.attrs.fillRule;
    if (fillRule) {
      context.fill(fillRule);
    } else {
      context.fill();
    }
  }
  function _strokeFuncHit(context) {
    context.stroke();
  }
  function _clearHasShadowCache() {
    this._clearCache(HAS_SHADOW);
  }
  function _clearGetShadowRGBACache() {
    this._clearCache(SHADOW_RGBA);
  }
  function _clearFillPatternCache() {
    this._clearCache(patternImage);
  }
  function _clearLinearGradientCache() {
    this._clearCache(linearGradient);
  }
  function _clearRadialGradientCache() {
    this._clearCache(radialGradient);
  }
  class Shape2 extends Node_12.Node {
    constructor(config) {
      super(config);
      let key;
      while (true) {
        key = Util_12.Util.getRandomColor();
        if (key && !(key in exports$1.shapes)) {
          break;
        }
      }
      this.colorKey = key;
      exports$1.shapes[key] = this;
    }
    getContext() {
      Util_12.Util.warn("shape.getContext() method is deprecated. Please do not use it.");
      return this.getLayer().getContext();
    }
    getCanvas() {
      Util_12.Util.warn("shape.getCanvas() method is deprecated. Please do not use it.");
      return this.getLayer().getCanvas();
    }
    getSceneFunc() {
      return this.attrs.sceneFunc || this["_sceneFunc"];
    }
    getHitFunc() {
      return this.attrs.hitFunc || this["_hitFunc"];
    }
    hasShadow() {
      return this._getCache(HAS_SHADOW, this._hasShadow);
    }
    _hasShadow() {
      return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
    }
    _getFillPattern() {
      return this._getCache(patternImage, this.__getFillPattern);
    }
    __getFillPattern() {
      if (this.fillPatternImage()) {
        const ctx = getDummyContext2();
        const pattern = ctx.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
        if (pattern && pattern.setTransform) {
          const tr = new Util_12.Transform();
          tr.translate(this.fillPatternX(), this.fillPatternY());
          tr.rotate(Global_12.Konva.getAngle(this.fillPatternRotation()));
          tr.scale(this.fillPatternScaleX(), this.fillPatternScaleY());
          tr.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
          const m2 = tr.getMatrix();
          const matrix = typeof DOMMatrix === "undefined" ? {
            a: m2[0],
            b: m2[1],
            c: m2[2],
            d: m2[3],
            e: m2[4],
            f: m2[5]
          } : new DOMMatrix(m2);
          pattern.setTransform(matrix);
        }
        return pattern;
      }
    }
    _getLinearGradient() {
      return this._getCache(linearGradient, this.__getLinearGradient);
    }
    __getLinearGradient() {
      const colorStops = this.fillLinearGradientColorStops();
      if (colorStops) {
        const ctx = getDummyContext2();
        const start = this.fillLinearGradientStartPoint();
        const end = this.fillLinearGradientEndPoint();
        const grd = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
        for (let n2 = 0; n2 < colorStops.length; n2 += 2) {
          grd.addColorStop(colorStops[n2], colorStops[n2 + 1]);
        }
        return grd;
      }
    }
    _getRadialGradient() {
      return this._getCache(radialGradient, this.__getRadialGradient);
    }
    __getRadialGradient() {
      const colorStops = this.fillRadialGradientColorStops();
      if (colorStops) {
        const ctx = getDummyContext2();
        const start = this.fillRadialGradientStartPoint();
        const end = this.fillRadialGradientEndPoint();
        const grd = ctx.createRadialGradient(start.x, start.y, this.fillRadialGradientStartRadius(), end.x, end.y, this.fillRadialGradientEndRadius());
        for (let n2 = 0; n2 < colorStops.length; n2 += 2) {
          grd.addColorStop(colorStops[n2], colorStops[n2 + 1]);
        }
        return grd;
      }
    }
    getShadowRGBA() {
      return this._getCache(SHADOW_RGBA, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (!this.hasShadow()) {
        return;
      }
      const rgba = Util_12.Util.colorToRGBA(this.shadowColor());
      if (rgba) {
        return "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + rgba.a * (this.shadowOpacity() || 1) + ")";
      }
    }
    hasFill() {
      return this._calculate("hasFill", [
        "fillEnabled",
        "fill",
        "fillPatternImage",
        "fillLinearGradientColorStops",
        "fillRadialGradientColorStops"
      ], () => {
        return this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops());
      });
    }
    hasStroke() {
      return this._calculate("hasStroke", [
        "strokeEnabled",
        "strokeWidth",
        "stroke",
        "strokeLinearGradientColorStops"
      ], () => {
        return this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops());
      });
    }
    hasHitStroke() {
      const width = this.hitStrokeWidth();
      if (width === "auto") {
        return this.hasStroke();
      }
      return this.strokeEnabled() && !!width;
    }
    intersects(point) {
      const stage = this.getStage();
      if (!stage) {
        return false;
      }
      const bufferHitCanvas = stage.bufferHitCanvas;
      bufferHitCanvas.getContext().clear();
      this.drawHit(bufferHitCanvas, void 0, true);
      const p2 = bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data;
      return p2[3] > 0;
    }
    destroy() {
      Node_12.Node.prototype.destroy.call(this);
      delete exports$1.shapes[this.colorKey];
      delete this.colorKey;
      return this;
    }
    _useBufferCanvas(forceFill) {
      var _a2;
      const perfectDrawEnabled = (_a2 = this.attrs.perfectDrawEnabled) !== null && _a2 !== void 0 ? _a2 : true;
      if (!perfectDrawEnabled) {
        return false;
      }
      const hasFill = forceFill || this.hasFill();
      const hasStroke = this.hasStroke();
      const isTransparent = this.getAbsoluteOpacity() !== 1;
      if (hasFill && hasStroke && isTransparent) {
        return true;
      }
      const hasShadow = this.hasShadow();
      const strokeForShadow = this.shadowForStrokeEnabled();
      if (hasFill && hasStroke && hasShadow && strokeForShadow) {
        return true;
      }
      return false;
    }
    setStrokeHitEnabled(val) {
      Util_12.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.");
      if (val) {
        this.hitStrokeWidth("auto");
      } else {
        this.hitStrokeWidth(0);
      }
    }
    getStrokeHitEnabled() {
      if (this.hitStrokeWidth() === 0) {
        return false;
      } else {
        return true;
      }
    }
    getSelfRect() {
      const size = this.size();
      return {
        x: this._centroid ? -size.width / 2 : 0,
        y: this._centroid ? -size.height / 2 : 0,
        width: size.width,
        height: size.height
      };
    }
    getClientRect(config = {}) {
      let hasCachedParent = false;
      let parent = this.getParent();
      while (parent) {
        if (parent.isCached()) {
          hasCachedParent = true;
          break;
        }
        parent = parent.getParent();
      }
      const skipTransform = config.skipTransform;
      const relativeTo = config.relativeTo || hasCachedParent && this.getStage() || void 0;
      const fillRect = this.getSelfRect();
      const applyStroke = !config.skipStroke && this.hasStroke();
      const strokeWidth = applyStroke && this.strokeWidth() || 0;
      const fillAndStrokeWidth = fillRect.width + strokeWidth;
      const fillAndStrokeHeight = fillRect.height + strokeWidth;
      const applyShadow = !config.skipShadow && this.hasShadow();
      const shadowOffsetX = applyShadow ? this.shadowOffsetX() : 0;
      const shadowOffsetY = applyShadow ? this.shadowOffsetY() : 0;
      const preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
      const preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);
      const blurRadius = applyShadow && this.shadowBlur() || 0;
      const width = preWidth + blurRadius * 2;
      const height = preHeight + blurRadius * 2;
      const rect = {
        width,
        height,
        x: -(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetX, 0) + fillRect.x,
        y: -(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetY, 0) + fillRect.y
      };
      if (!skipTransform) {
        return this._transformedRect(rect, relativeTo);
      }
      return rect;
    }
    drawScene(can, top, bufferCanvas) {
      const layer = this.getLayer();
      const canvas = can || layer.getCanvas(), context = canvas.getContext(), cachedCanvas = this._getCanvasCache(), drawFunc = this.getSceneFunc(), hasShadow = this.hasShadow();
      let stage;
      const cachingSelf = top === this;
      if (!this.isVisible() && !cachingSelf) {
        return this;
      }
      if (cachedCanvas) {
        context.save();
        const m2 = this.getAbsoluteTransform(top).getMatrix();
        context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
        this._drawCachedSceneCanvas(context);
        context.restore();
        return this;
      }
      if (!drawFunc) {
        return this;
      }
      context.save();
      if (this._useBufferCanvas() && true) {
        stage = this.getStage();
        const bc2 = bufferCanvas || stage.bufferCanvas;
        const bufferContext = bc2.getContext();
        bufferContext.clear();
        bufferContext.save();
        bufferContext._applyLineJoin(this);
        const o = this.getAbsoluteTransform(top).getMatrix();
        bufferContext.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
        drawFunc.call(this, bufferContext, this);
        bufferContext.restore();
        const ratio = bc2.pixelRatio;
        if (hasShadow) {
          context._applyShadow(this);
        }
        context._applyOpacity(this);
        context._applyGlobalCompositeOperation(this);
        context.drawImage(bc2._canvas, bc2.x || 0, bc2.y || 0, bc2.width / ratio, bc2.height / ratio);
      } else {
        context._applyLineJoin(this);
        if (!cachingSelf) {
          const o = this.getAbsoluteTransform(top).getMatrix();
          context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
          context._applyOpacity(this);
          context._applyGlobalCompositeOperation(this);
        }
        if (hasShadow) {
          context._applyShadow(this);
        }
        drawFunc.call(this, context, this);
      }
      context.restore();
      return this;
    }
    drawHit(can, top, skipDragCheck = false) {
      if (!this.shouldDrawHit(top, skipDragCheck)) {
        return this;
      }
      const layer = this.getLayer(), canvas = can || layer.hitCanvas, context = canvas && canvas.getContext(), drawFunc = this.hitFunc() || this.sceneFunc(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
      if (!this.colorKey) {
        Util_12.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()");
      }
      if (cachedHitCanvas) {
        context.save();
        const m2 = this.getAbsoluteTransform(top).getMatrix();
        context.transform(m2[0], m2[1], m2[2], m2[3], m2[4], m2[5]);
        this._drawCachedHitCanvas(context);
        context.restore();
        return this;
      }
      if (!drawFunc) {
        return this;
      }
      context.save();
      context._applyLineJoin(this);
      const selfCache = this === top;
      if (!selfCache) {
        const o = this.getAbsoluteTransform(top).getMatrix();
        context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
      }
      drawFunc.call(this, context, this);
      context.restore();
      return this;
    }
    drawHitFromCache(alphaThreshold = 0) {
      const cachedCanvas = this._getCanvasCache(), sceneCanvas = this._getCachedSceneCanvas(), hitCanvas = cachedCanvas.hit, hitContext = hitCanvas.getContext(), hitWidth = hitCanvas.getWidth(), hitHeight = hitCanvas.getHeight();
      hitContext.clear();
      hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);
      try {
        const hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
        const hitData = hitImageData.data;
        const len = hitData.length;
        const rgbColorKey = Util_12.Util._hexToRgb(this.colorKey);
        for (let i = 0; i < len; i += 4) {
          const alpha = hitData[i + 3];
          if (alpha > alphaThreshold) {
            hitData[i] = rgbColorKey.r;
            hitData[i + 1] = rgbColorKey.g;
            hitData[i + 2] = rgbColorKey.b;
            hitData[i + 3] = 255;
          } else {
            hitData[i + 3] = 0;
          }
        }
        hitContext.putImageData(hitImageData, 0, 0);
      } catch (e) {
        Util_12.Util.error("Unable to draw hit graph from cached scene canvas. " + e.message);
      }
      return this;
    }
    hasPointerCapture(pointerId) {
      return PointerEvents$1.hasPointerCapture(pointerId, this);
    }
    setPointerCapture(pointerId) {
      PointerEvents$1.setPointerCapture(pointerId, this);
    }
    releaseCapture(pointerId) {
      PointerEvents$1.releaseCapture(pointerId, this);
    }
  }
  exports$1.Shape = Shape2;
  Shape2.prototype._fillFunc = _fillFunc2;
  Shape2.prototype._strokeFunc = _strokeFunc2;
  Shape2.prototype._fillFuncHit = _fillFuncHit;
  Shape2.prototype._strokeFuncHit = _strokeFuncHit;
  Shape2.prototype._centroid = false;
  Shape2.prototype.nodeType = "Shape";
  (0, Global_22._registerNode)(Shape2);
  Shape2.prototype.eventListeners = {};
  Shape2.prototype.on.call(Shape2.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearHasShadowCache);
  Shape2.prototype.on.call(Shape2.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearGetShadowRGBACache);
  Shape2.prototype.on.call(Shape2.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", _clearFillPatternCache);
  Shape2.prototype.on.call(Shape2.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", _clearLinearGradientCache);
  Shape2.prototype.on.call(Shape2.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", _clearRadialGradientCache);
  Factory_12.Factory.addGetterSetter(Shape2, "stroke", void 0, (0, Validators_12.getStringOrGradientValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "strokeWidth", 2, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "fillAfterStrokeEnabled", false);
  Factory_12.Factory.addGetterSetter(Shape2, "hitStrokeWidth", "auto", (0, Validators_12.getNumberOrAutoValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "strokeHitEnabled", true, (0, Validators_12.getBooleanValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "perfectDrawEnabled", true, (0, Validators_12.getBooleanValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "shadowForStrokeEnabled", true, (0, Validators_12.getBooleanValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "lineJoin");
  Factory_12.Factory.addGetterSetter(Shape2, "lineCap");
  Factory_12.Factory.addGetterSetter(Shape2, "sceneFunc");
  Factory_12.Factory.addGetterSetter(Shape2, "hitFunc");
  Factory_12.Factory.addGetterSetter(Shape2, "dash");
  Factory_12.Factory.addGetterSetter(Shape2, "dashOffset", 0, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "shadowColor", void 0, (0, Validators_12.getStringValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "shadowBlur", 0, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "shadowOpacity", 1, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "shadowOffset", ["x", "y"]);
  Factory_12.Factory.addGetterSetter(Shape2, "shadowOffsetX", 0, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "shadowOffsetY", 0, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternImage");
  Factory_12.Factory.addGetterSetter(Shape2, "fill", void 0, (0, Validators_12.getStringOrGradientValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternX", 0, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternY", 0, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "fillLinearGradientColorStops");
  Factory_12.Factory.addGetterSetter(Shape2, "strokeLinearGradientColorStops");
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientStartRadius", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientEndRadius", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientColorStops");
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternRepeat", "repeat");
  Factory_12.Factory.addGetterSetter(Shape2, "fillEnabled", true);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeEnabled", true);
  Factory_12.Factory.addGetterSetter(Shape2, "shadowEnabled", true);
  Factory_12.Factory.addGetterSetter(Shape2, "dashEnabled", true);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeScaleEnabled", true);
  Factory_12.Factory.addGetterSetter(Shape2, "fillPriority", "color");
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillPatternOffset", ["x", "y"]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternOffsetX", 0, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternOffsetY", 0, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillPatternScale", ["x", "y"]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternScaleX", 1, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternScaleY", 1, (0, Validators_12.getNumberValidator)());
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillLinearGradientStartPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "strokeLinearGradientStartPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillLinearGradientStartPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeLinearGradientStartPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillLinearGradientStartPointY", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeLinearGradientStartPointY", 0);
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillLinearGradientEndPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "strokeLinearGradientEndPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillLinearGradientEndPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeLinearGradientEndPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillLinearGradientEndPointY", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeLinearGradientEndPointY", 0);
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillRadialGradientStartPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientStartPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientStartPointY", 0);
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillRadialGradientEndPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientEndPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientEndPointY", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternRotation", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRule", void 0, (0, Validators_12.getStringValidator)());
  Factory_12.Factory.backCompat(Shape2, {
    dashArray: "dash",
    getDashArray: "getDash",
    setDashArray: "getDash",
    drawFunc: "sceneFunc",
    getDrawFunc: "getSceneFunc",
    setDrawFunc: "setSceneFunc",
    drawHitFunc: "hitFunc",
    getDrawHitFunc: "getHitFunc",
    setDrawHitFunc: "setHitFunc"
  });
})(Shape);
Object.defineProperty(Layer$2, "__esModule", { value: true });
Layer$2.Layer = void 0;
const Util_1$b = Util;
const Container_1$1 = Container$1;
const Node_1$g = Node$1;
const Factory_1$w = Factory;
const Canvas_1 = Canvas$1;
const Validators_1$v = Validators;
const Shape_1$g = Shape;
const Global_1$k = Global;
const HASH = "#", BEFORE_DRAW = "beforeDraw", DRAW = "draw", INTERSECTION_OFFSETS = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;
let Layer$1 = class Layer extends Container_1$1.Container {
  constructor(config) {
    super(config);
    this.canvas = new Canvas_1.SceneCanvas();
    this.hitCanvas = new Canvas_1.HitCanvas({
      pixelRatio: 1
    });
    this._waitingForDraw = false;
    this.on("visibleChange.konva", this._checkVisibility);
    this._checkVisibility();
    this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled);
    this._setSmoothEnabled();
  }
  createPNGStream() {
    const c = this.canvas._canvas;
    return c.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(bounds) {
    this.getContext().clear(bounds);
    this.getHitCanvas().getContext().clear(bounds);
    return this;
  }
  setZIndex(index) {
    super.setZIndex(index);
    const stage = this.getStage();
    if (stage && stage.content) {
      stage.content.removeChild(this.getNativeCanvasElement());
      if (index < stage.children.length - 1) {
        stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[index + 1].getCanvas()._canvas);
      } else {
        stage.content.appendChild(this.getNativeCanvasElement());
      }
    }
    return this;
  }
  moveToTop() {
    Node_1$g.Node.prototype.moveToTop.call(this);
    const stage = this.getStage();
    if (stage && stage.content) {
      stage.content.removeChild(this.getNativeCanvasElement());
      stage.content.appendChild(this.getNativeCanvasElement());
    }
    return true;
  }
  moveUp() {
    const moved = Node_1$g.Node.prototype.moveUp.call(this);
    if (!moved) {
      return false;
    }
    const stage = this.getStage();
    if (!stage || !stage.content) {
      return false;
    }
    stage.content.removeChild(this.getNativeCanvasElement());
    if (this.index < stage.children.length - 1) {
      stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[this.index + 1].getCanvas()._canvas);
    } else {
      stage.content.appendChild(this.getNativeCanvasElement());
    }
    return true;
  }
  moveDown() {
    if (Node_1$g.Node.prototype.moveDown.call(this)) {
      const stage = this.getStage();
      if (stage) {
        const children = stage.children;
        if (stage.content) {
          stage.content.removeChild(this.getNativeCanvasElement());
          stage.content.insertBefore(this.getNativeCanvasElement(), children[this.index + 1].getCanvas()._canvas);
        }
      }
      return true;
    }
    return false;
  }
  moveToBottom() {
    if (Node_1$g.Node.prototype.moveToBottom.call(this)) {
      const stage = this.getStage();
      if (stage) {
        const children = stage.children;
        if (stage.content) {
          stage.content.removeChild(this.getNativeCanvasElement());
          stage.content.insertBefore(this.getNativeCanvasElement(), children[1].getCanvas()._canvas);
        }
      }
      return true;
    }
    return false;
  }
  getLayer() {
    return this;
  }
  remove() {
    const _canvas = this.getNativeCanvasElement();
    Node_1$g.Node.prototype.remove.call(this);
    if (_canvas && _canvas.parentNode && Util_1$b.Util._isInDocument(_canvas)) {
      _canvas.parentNode.removeChild(_canvas);
    }
    return this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width, height }) {
    this.canvas.setSize(width, height);
    this.hitCanvas.setSize(width, height);
    this._setSmoothEnabled();
    return this;
  }
  _validateAdd(child) {
    const type = child.getType();
    if (type !== "Group" && type !== "Shape") {
      Util_1$b.Util.throw("You may only add groups and shapes to a layer.");
    }
  }
  _toKonvaCanvas(config) {
    config = config || {};
    config.width = config.width || this.getWidth();
    config.height = config.height || this.getHeight();
    config.x = config.x !== void 0 ? config.x : this.x();
    config.y = config.y !== void 0 ? config.y : this.y();
    return Node_1$g.Node.prototype._toKonvaCanvas.call(this, config);
  }
  _checkVisibility() {
    const visible = this.visible();
    if (visible) {
      this.canvas._canvas.style.display = "block";
    } else {
      this.canvas._canvas.style.display = "none";
    }
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent) {
      return this.parent.width();
    }
  }
  setWidth() {
    Util_1$b.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent) {
      return this.parent.height();
    }
  }
  setHeight() {
    Util_1$b.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    if (!this._waitingForDraw) {
      this._waitingForDraw = true;
      Util_1$b.Util.requestAnimFrame(() => {
        this.draw();
        this._waitingForDraw = false;
      });
    }
    return this;
  }
  getIntersection(pos) {
    if (!this.isListening() || !this.isVisible()) {
      return null;
    }
    let spiralSearchDistance = 1;
    let continueSearch = false;
    while (true) {
      for (let i = 0; i < INTERSECTION_OFFSETS_LEN; i++) {
        const intersectionOffset = INTERSECTION_OFFSETS[i];
        const obj = this._getIntersection({
          x: pos.x + intersectionOffset.x * spiralSearchDistance,
          y: pos.y + intersectionOffset.y * spiralSearchDistance
        });
        const shape = obj.shape;
        if (shape) {
          return shape;
        }
        continueSearch = !!obj.antialiased;
        if (!obj.antialiased) {
          break;
        }
      }
      if (continueSearch) {
        spiralSearchDistance += 1;
      } else {
        return null;
      }
    }
  }
  _getIntersection(pos) {
    const ratio = this.hitCanvas.pixelRatio;
    const p2 = this.hitCanvas.context.getImageData(Math.round(pos.x * ratio), Math.round(pos.y * ratio), 1, 1).data;
    const p3 = p2[3];
    if (p3 === 255) {
      const colorKey = Util_1$b.Util._rgbToHex(p2[0], p2[1], p2[2]);
      const shape = Shape_1$g.shapes[HASH + colorKey];
      if (shape) {
        return {
          shape
        };
      }
      return {
        antialiased: true
      };
    } else if (p3 > 0) {
      return {
        antialiased: true
      };
    }
    return {};
  }
  drawScene(can, top, bufferCanvas) {
    const layer = this.getLayer(), canvas = can || layer && layer.getCanvas();
    this._fire(BEFORE_DRAW, {
      node: this
    });
    if (this.clearBeforeDraw()) {
      canvas.getContext().clear();
    }
    Container_1$1.Container.prototype.drawScene.call(this, canvas, top, bufferCanvas);
    this._fire(DRAW, {
      node: this
    });
    return this;
  }
  drawHit(can, top) {
    const layer = this.getLayer(), canvas = can || layer && layer.hitCanvas;
    if (layer && layer.clearBeforeDraw()) {
      layer.getHitCanvas().getContext().clear();
    }
    Container_1$1.Container.prototype.drawHit.call(this, canvas, top);
    return this;
  }
  enableHitGraph() {
    this.hitGraphEnabled(true);
    return this;
  }
  disableHitGraph() {
    this.hitGraphEnabled(false);
    return this;
  }
  setHitGraphEnabled(val) {
    Util_1$b.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
    this.listening(val);
  }
  getHitGraphEnabled(val) {
    Util_1$b.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
    return this.listening();
  }
  toggleHitCanvas() {
    if (!this.parent || !this.parent["content"]) {
      return;
    }
    const parent = this.parent;
    const added = !!this.hitCanvas._canvas.parentNode;
    if (added) {
      parent.content.removeChild(this.hitCanvas._canvas);
    } else {
      parent.content.appendChild(this.hitCanvas._canvas);
    }
  }
  destroy() {
    Util_1$b.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas);
    return super.destroy();
  }
};
Layer$2.Layer = Layer$1;
Layer$1.prototype.nodeType = "Layer";
(0, Global_1$k._registerNode)(Layer$1);
Factory_1$w.Factory.addGetterSetter(Layer$1, "imageSmoothingEnabled", true);
Factory_1$w.Factory.addGetterSetter(Layer$1, "clearBeforeDraw", true);
Factory_1$w.Factory.addGetterSetter(Layer$1, "hitGraphEnabled", true, (0, Validators_1$v.getBooleanValidator)());
var FastLayer$1 = {};
Object.defineProperty(FastLayer$1, "__esModule", { value: true });
FastLayer$1.FastLayer = void 0;
const Util_1$a = Util;
const Layer_1 = Layer$2;
const Global_1$j = Global;
class FastLayer extends Layer_1.Layer {
  constructor(attrs) {
    super(attrs);
    this.listening(false);
    Util_1$a.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
FastLayer$1.FastLayer = FastLayer;
FastLayer.prototype.nodeType = "FastLayer";
(0, Global_1$j._registerNode)(FastLayer);
var Group$1 = {};
Object.defineProperty(Group$1, "__esModule", { value: true });
Group$1.Group = void 0;
const Util_1$9 = Util;
const Container_1 = Container$1;
const Global_1$i = Global;
class Group extends Container_1.Container {
  _validateAdd(child) {
    const type = child.getType();
    if (type !== "Group" && type !== "Shape") {
      Util_1$9.Util.throw("You may only add groups and shapes to groups.");
    }
  }
}
Group$1.Group = Group;
Group.prototype.nodeType = "Group";
(0, Global_1$i._registerNode)(Group);
var Animation$1 = {};
Object.defineProperty(Animation$1, "__esModule", { value: true });
Animation$1.Animation = void 0;
const Global_1$h = Global;
const Util_1$8 = Util;
const now = function() {
  if (Global_1$h.glob.performance && Global_1$h.glob.performance.now) {
    return function() {
      return Global_1$h.glob.performance.now();
    };
  }
  return function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class Animation {
  constructor(func, layers) {
    this.id = Animation.animIdCounter++;
    this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: now(),
      frameRate: 0
    };
    this.func = func;
    this.setLayers(layers);
  }
  setLayers(layers) {
    let lays = [];
    if (layers) {
      lays = Array.isArray(layers) ? layers : [layers];
    }
    this.layers = lays;
    return this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(layer) {
    const layers = this.layers;
    const len = layers.length;
    for (let n2 = 0; n2 < len; n2++) {
      if (layers[n2]._id === layer._id) {
        return false;
      }
    }
    this.layers.push(layer);
    return true;
  }
  isRunning() {
    const a = Animation;
    const animations = a.animations;
    const len = animations.length;
    for (let n2 = 0; n2 < len; n2++) {
      if (animations[n2].id === this.id) {
        return true;
      }
    }
    return false;
  }
  start() {
    this.stop();
    this.frame.timeDiff = 0;
    this.frame.lastTime = now();
    Animation._addAnimation(this);
    return this;
  }
  stop() {
    Animation._removeAnimation(this);
    return this;
  }
  _updateFrameObject(time) {
    this.frame.timeDiff = time - this.frame.lastTime;
    this.frame.lastTime = time;
    this.frame.time += this.frame.timeDiff;
    this.frame.frameRate = 1e3 / this.frame.timeDiff;
  }
  static _addAnimation(anim) {
    this.animations.push(anim);
    this._handleAnimation();
  }
  static _removeAnimation(anim) {
    const id2 = anim.id;
    const animations = this.animations;
    const len = animations.length;
    for (let n2 = 0; n2 < len; n2++) {
      if (animations[n2].id === id2) {
        this.animations.splice(n2, 1);
        break;
      }
    }
  }
  static _runFrames() {
    const layerHash = {};
    const animations = this.animations;
    for (let n2 = 0; n2 < animations.length; n2++) {
      const anim = animations[n2];
      const layers = anim.layers;
      const func = anim.func;
      anim._updateFrameObject(now());
      const layersLen = layers.length;
      let needRedraw;
      if (func) {
        needRedraw = func.call(anim, anim.frame) !== false;
      } else {
        needRedraw = true;
      }
      if (!needRedraw) {
        continue;
      }
      for (let i = 0; i < layersLen; i++) {
        const layer = layers[i];
        if (layer._id !== void 0) {
          layerHash[layer._id] = layer;
        }
      }
    }
    for (const key in layerHash) {
      if (!layerHash.hasOwnProperty(key)) {
        continue;
      }
      layerHash[key].batchDraw();
    }
  }
  static _animationLoop() {
    const Anim = Animation;
    if (Anim.animations.length) {
      Anim._runFrames();
      Util_1$8.Util.requestAnimFrame(Anim._animationLoop);
    } else {
      Anim.animRunning = false;
    }
  }
  static _handleAnimation() {
    if (!this.animRunning) {
      this.animRunning = true;
      Util_1$8.Util.requestAnimFrame(this._animationLoop);
    }
  }
}
Animation$1.Animation = Animation;
Animation.animations = [];
Animation.animIdCounter = 0;
Animation.animRunning = false;
var Tween = {};
(function(exports$1) {
  Object.defineProperty(exports$1, "__esModule", { value: true });
  exports$1.Easings = exports$1.Tween = void 0;
  const Util_12 = Util;
  const Animation_12 = Animation$1;
  const Node_12 = Node$1;
  const Global_12 = Global;
  const blacklist = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, PAUSED = 1, PLAYING = 2, REVERSING = 3, colorAttrs = ["fill", "stroke", "shadowColor"];
  let idCounter2 = 0;
  class TweenEngine {
    constructor(prop, propFunc, func, begin, finish, duration, yoyo) {
      this.prop = prop;
      this.propFunc = propFunc;
      this.begin = begin;
      this._pos = begin;
      this.duration = duration;
      this._change = 0;
      this.prevPos = 0;
      this.yoyo = yoyo;
      this._time = 0;
      this._position = 0;
      this._startTime = 0;
      this._finish = 0;
      this.func = func;
      this._change = finish - this.begin;
      this.pause();
    }
    fire(str) {
      const handler = this[str];
      if (handler) {
        handler();
      }
    }
    setTime(t2) {
      if (t2 > this.duration) {
        if (this.yoyo) {
          this._time = this.duration;
          this.reverse();
        } else {
          this.finish();
        }
      } else if (t2 < 0) {
        if (this.yoyo) {
          this._time = 0;
          this.play();
        } else {
          this.reset();
        }
      } else {
        this._time = t2;
        this.update();
      }
    }
    getTime() {
      return this._time;
    }
    setPosition(p2) {
      this.prevPos = this._pos;
      this.propFunc(p2);
      this._pos = p2;
    }
    getPosition(t2) {
      if (t2 === void 0) {
        t2 = this._time;
      }
      return this.func(t2, this.begin, this._change, this.duration);
    }
    play() {
      this.state = PLAYING;
      this._startTime = this.getTimer() - this._time;
      this.onEnterFrame();
      this.fire("onPlay");
    }
    reverse() {
      this.state = REVERSING;
      this._time = this.duration - this._time;
      this._startTime = this.getTimer() - this._time;
      this.onEnterFrame();
      this.fire("onReverse");
    }
    seek(t2) {
      this.pause();
      this._time = t2;
      this.update();
      this.fire("onSeek");
    }
    reset() {
      this.pause();
      this._time = 0;
      this.update();
      this.fire("onReset");
    }
    finish() {
      this.pause();
      this._time = this.duration;
      this.update();
      this.fire("onFinish");
    }
    update() {
      this.setPosition(this.getPosition(this._time));
      this.fire("onUpdate");
    }
    onEnterFrame() {
      const t2 = this.getTimer() - this._startTime;
      if (this.state === PLAYING) {
        this.setTime(t2);
      } else if (this.state === REVERSING) {
        this.setTime(this.duration - t2);
      }
    }
    pause() {
      this.state = PAUSED;
      this.fire("onPause");
    }
    getTimer() {
      return (/* @__PURE__ */ new Date()).getTime();
    }
  }
  class Tween2 {
    constructor(config) {
      const that = this, node = config.node, nodeId = node._id, easing = config.easing || exports$1.Easings.Linear, yoyo = !!config.yoyo;
      let duration, key;
      if (typeof config.duration === "undefined") {
        duration = 0.3;
      } else if (config.duration === 0) {
        duration = 1e-3;
      } else {
        duration = config.duration;
      }
      this.node = node;
      this._id = idCounter2++;
      const layers = node.getLayer() || (node instanceof Global_12.Konva["Stage"] ? node.getLayers() : null);
      if (!layers) {
        Util_12.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first.");
      }
      this.anim = new Animation_12.Animation(function() {
        that.tween.onEnterFrame();
      }, layers);
      this.tween = new TweenEngine(key, function(i) {
        that._tweenFunc(i);
      }, easing, 0, 1, duration * 1e3, yoyo);
      this._addListeners();
      if (!Tween2.attrs[nodeId]) {
        Tween2.attrs[nodeId] = {};
      }
      if (!Tween2.attrs[nodeId][this._id]) {
        Tween2.attrs[nodeId][this._id] = {};
      }
      if (!Tween2.tweens[nodeId]) {
        Tween2.tweens[nodeId] = {};
      }
      for (key in config) {
        if (blacklist[key] === void 0) {
          this._addAttr(key, config[key]);
        }
      }
      this.reset();
      this.onFinish = config.onFinish;
      this.onReset = config.onReset;
      this.onUpdate = config.onUpdate;
    }
    _addAttr(key, end) {
      const node = this.node, nodeId = node._id;
      let diff, len, trueEnd, trueStart, endRGBA;
      const tweenId = Tween2.tweens[nodeId][key];
      if (tweenId) {
        delete Tween2.attrs[nodeId][tweenId][key];
      }
      let start = node.getAttr(key);
      if (Util_12.Util._isArray(end)) {
        diff = [];
        len = Math.max(end.length, start.length);
        if (key === "points" && end.length !== start.length) {
          if (end.length > start.length) {
            trueStart = start;
            start = Util_12.Util._prepareArrayForTween(start, end, node.closed());
          } else {
            trueEnd = end;
            end = Util_12.Util._prepareArrayForTween(end, start, node.closed());
          }
        }
        if (key.indexOf("fill") === 0) {
          for (let n2 = 0; n2 < len; n2++) {
            if (n2 % 2 === 0) {
              diff.push(end[n2] - start[n2]);
            } else {
              const startRGBA = Util_12.Util.colorToRGBA(start[n2]);
              endRGBA = Util_12.Util.colorToRGBA(end[n2]);
              start[n2] = startRGBA;
              diff.push({
                r: endRGBA.r - startRGBA.r,
                g: endRGBA.g - startRGBA.g,
                b: endRGBA.b - startRGBA.b,
                a: endRGBA.a - startRGBA.a
              });
            }
          }
        } else {
          for (let n2 = 0; n2 < len; n2++) {
            diff.push(end[n2] - start[n2]);
          }
        }
      } else if (colorAttrs.indexOf(key) !== -1) {
        start = Util_12.Util.colorToRGBA(start);
        endRGBA = Util_12.Util.colorToRGBA(end);
        diff = {
          r: endRGBA.r - start.r,
          g: endRGBA.g - start.g,
          b: endRGBA.b - start.b,
          a: endRGBA.a - start.a
        };
      } else {
        diff = end - start;
      }
      Tween2.attrs[nodeId][this._id][key] = {
        start,
        diff,
        end,
        trueEnd,
        trueStart
      };
      Tween2.tweens[nodeId][key] = this._id;
    }
    _tweenFunc(i) {
      const node = this.node, attrs = Tween2.attrs[node._id][this._id];
      let key, attr, start, diff, newVal, n2, len, end;
      for (key in attrs) {
        attr = attrs[key];
        start = attr.start;
        diff = attr.diff;
        end = attr.end;
        if (Util_12.Util._isArray(start)) {
          newVal = [];
          len = Math.max(start.length, end.length);
          if (key.indexOf("fill") === 0) {
            for (n2 = 0; n2 < len; n2++) {
              if (n2 % 2 === 0) {
                newVal.push((start[n2] || 0) + diff[n2] * i);
              } else {
                newVal.push("rgba(" + Math.round(start[n2].r + diff[n2].r * i) + "," + Math.round(start[n2].g + diff[n2].g * i) + "," + Math.round(start[n2].b + diff[n2].b * i) + "," + (start[n2].a + diff[n2].a * i) + ")");
              }
            }
          } else {
            for (n2 = 0; n2 < len; n2++) {
              newVal.push((start[n2] || 0) + diff[n2] * i);
            }
          }
        } else if (colorAttrs.indexOf(key) !== -1) {
          newVal = "rgba(" + Math.round(start.r + diff.r * i) + "," + Math.round(start.g + diff.g * i) + "," + Math.round(start.b + diff.b * i) + "," + (start.a + diff.a * i) + ")";
        } else {
          newVal = start + diff * i;
        }
        node.setAttr(key, newVal);
      }
    }
    _addListeners() {
      this.tween.onPlay = () => {
        this.anim.start();
      };
      this.tween.onReverse = () => {
        this.anim.start();
      };
      this.tween.onPause = () => {
        this.anim.stop();
      };
      this.tween.onFinish = () => {
        const node = this.node;
        const attrs = Tween2.attrs[node._id][this._id];
        if (attrs.points && attrs.points.trueEnd) {
          node.setAttr("points", attrs.points.trueEnd);
        }
        if (this.onFinish) {
          this.onFinish.call(this);
        }
      };
      this.tween.onReset = () => {
        const node = this.node;
        const attrs = Tween2.attrs[node._id][this._id];
        if (attrs.points && attrs.points.trueStart) {
          node.points(attrs.points.trueStart);
        }
        if (this.onReset) {
          this.onReset();
        }
      };
      this.tween.onUpdate = () => {
        if (this.onUpdate) {
          this.onUpdate.call(this);
        }
      };
    }
    play() {
      this.tween.play();
      return this;
    }
    reverse() {
      this.tween.reverse();
      return this;
    }
    reset() {
      this.tween.reset();
      return this;
    }
    seek(t2) {
      this.tween.seek(t2 * 1e3);
      return this;
    }
    pause() {
      this.tween.pause();
      return this;
    }
    finish() {
      this.tween.finish();
      return this;
    }
    destroy() {
      const nodeId = this.node._id, thisId = this._id, attrs = Tween2.tweens[nodeId];
      this.pause();
      if (this.anim) {
        this.anim.stop();
      }
      for (const key in attrs) {
        delete Tween2.tweens[nodeId][key];
      }
      delete Tween2.attrs[nodeId][thisId];
      if (Tween2.tweens[nodeId]) {
        if (Object.keys(Tween2.tweens[nodeId]).length === 0) {
          delete Tween2.tweens[nodeId];
        }
        if (Object.keys(Tween2.attrs[nodeId]).length === 0) {
          delete Tween2.attrs[nodeId];
        }
      }
    }
  }
  exports$1.Tween = Tween2;
  Tween2.attrs = {};
  Tween2.tweens = {};
  Node_12.Node.prototype.to = function(params) {
    const onFinish = params.onFinish;
    params.node = this;
    params.onFinish = function() {
      this.destroy();
      if (onFinish) {
        onFinish();
      }
    };
    const tween = new Tween2(params);
    tween.play();
  };
  exports$1.Easings = {
    BackEaseIn(t2, b, c, d) {
      const s = 1.70158;
      return c * (t2 /= d) * t2 * ((s + 1) * t2 - s) + b;
    },
    BackEaseOut(t2, b, c, d) {
      const s = 1.70158;
      return c * ((t2 = t2 / d - 1) * t2 * ((s + 1) * t2 + s) + 1) + b;
    },
    BackEaseInOut(t2, b, c, d) {
      let s = 1.70158;
      if ((t2 /= d / 2) < 1) {
        return c / 2 * (t2 * t2 * (((s *= 1.525) + 1) * t2 - s)) + b;
      }
      return c / 2 * ((t2 -= 2) * t2 * (((s *= 1.525) + 1) * t2 + s) + 2) + b;
    },
    ElasticEaseIn(t2, b, c, d, a, p2) {
      let s = 0;
      if (t2 === 0) {
        return b;
      }
      if ((t2 /= d) === 1) {
        return b + c;
      }
      if (!p2) {
        p2 = d * 0.3;
      }
      if (!a || a < Math.abs(c)) {
        a = c;
        s = p2 / 4;
      } else {
        s = p2 / (2 * Math.PI) * Math.asin(c / a);
      }
      return -(a * Math.pow(2, 10 * (t2 -= 1)) * Math.sin((t2 * d - s) * (2 * Math.PI) / p2)) + b;
    },
    ElasticEaseOut(t2, b, c, d, a, p2) {
      let s = 0;
      if (t2 === 0) {
        return b;
      }
      if ((t2 /= d) === 1) {
        return b + c;
      }
      if (!p2) {
        p2 = d * 0.3;
      }
      if (!a || a < Math.abs(c)) {
        a = c;
        s = p2 / 4;
      } else {
        s = p2 / (2 * Math.PI) * Math.asin(c / a);
      }
      return a * Math.pow(2, -10 * t2) * Math.sin((t2 * d - s) * (2 * Math.PI) / p2) + c + b;
    },
    ElasticEaseInOut(t2, b, c, d, a, p2) {
      let s = 0;
      if (t2 === 0) {
        return b;
      }
      if ((t2 /= d / 2) === 2) {
        return b + c;
      }
      if (!p2) {
        p2 = d * (0.3 * 1.5);
      }
      if (!a || a < Math.abs(c)) {
        a = c;
        s = p2 / 4;
      } else {
        s = p2 / (2 * Math.PI) * Math.asin(c / a);
      }
      if (t2 < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (t2 -= 1)) * Math.sin((t2 * d - s) * (2 * Math.PI) / p2)) + b;
      }
      return a * Math.pow(2, -10 * (t2 -= 1)) * Math.sin((t2 * d - s) * (2 * Math.PI) / p2) * 0.5 + c + b;
    },
    BounceEaseOut(t2, b, c, d) {
      if ((t2 /= d) < 1 / 2.75) {
        return c * (7.5625 * t2 * t2) + b;
      } else if (t2 < 2 / 2.75) {
        return c * (7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75) + b;
      } else if (t2 < 2.5 / 2.75) {
        return c * (7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375) + b;
      } else {
        return c * (7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375) + b;
      }
    },
    BounceEaseIn(t2, b, c, d) {
      return c - exports$1.Easings.BounceEaseOut(d - t2, 0, c, d) + b;
    },
    BounceEaseInOut(t2, b, c, d) {
      if (t2 < d / 2) {
        return exports$1.Easings.BounceEaseIn(t2 * 2, 0, c, d) * 0.5 + b;
      } else {
        return exports$1.Easings.BounceEaseOut(t2 * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
      }
    },
    EaseIn(t2, b, c, d) {
      return c * (t2 /= d) * t2 + b;
    },
    EaseOut(t2, b, c, d) {
      return -c * (t2 /= d) * (t2 - 2) + b;
    },
    EaseInOut(t2, b, c, d) {
      if ((t2 /= d / 2) < 1) {
        return c / 2 * t2 * t2 + b;
      }
      return -c / 2 * (--t2 * (t2 - 2) - 1) + b;
    },
    StrongEaseIn(t2, b, c, d) {
      return c * (t2 /= d) * t2 * t2 * t2 * t2 + b;
    },
    StrongEaseOut(t2, b, c, d) {
      return c * ((t2 = t2 / d - 1) * t2 * t2 * t2 * t2 + 1) + b;
    },
    StrongEaseInOut(t2, b, c, d) {
      if ((t2 /= d / 2) < 1) {
        return c / 2 * t2 * t2 * t2 * t2 * t2 + b;
      }
      return c / 2 * ((t2 -= 2) * t2 * t2 * t2 * t2 + 2) + b;
    },
    Linear(t2, b, c, d) {
      return c * t2 / d + b;
    }
  };
})(Tween);
(function(exports$1) {
  Object.defineProperty(exports$1, "__esModule", { value: true });
  exports$1.Konva = void 0;
  const Global_12 = Global;
  const Util_12 = Util;
  const Node_12 = Node$1;
  const Container_12 = Container$1;
  const Stage_1 = Stage$1;
  const Layer_12 = Layer$2;
  const FastLayer_1 = FastLayer$1;
  const Group_12 = Group$1;
  const DragAndDrop_12 = DragAndDrop;
  const Shape_12 = Shape;
  const Animation_12 = Animation$1;
  const Tween_1 = Tween;
  const Context_12 = Context$1;
  const Canvas_12 = Canvas$1;
  exports$1.Konva = Util_12.Util._assign(Global_12.Konva, {
    Util: Util_12.Util,
    Transform: Util_12.Transform,
    Node: Node_12.Node,
    Container: Container_12.Container,
    Stage: Stage_1.Stage,
    stages: Stage_1.stages,
    Layer: Layer_12.Layer,
    FastLayer: FastLayer_1.FastLayer,
    Group: Group_12.Group,
    DD: DragAndDrop_12.DD,
    Shape: Shape_12.Shape,
    shapes: Shape_12.shapes,
    Animation: Animation_12.Animation,
    Tween: Tween_1.Tween,
    Easings: Tween_1.Easings,
    Context: Context_12.Context,
    Canvas: Canvas_12.Canvas
  });
  exports$1.default = exports$1.Konva;
})(_CoreInternals);
var Arc$1 = {};
Object.defineProperty(Arc$1, "__esModule", { value: true });
Arc$1.Arc = void 0;
const Factory_1$v = Factory;
const Shape_1$f = Shape;
const Global_1$g = Global;
const Validators_1$u = Validators;
const Global_2$3 = Global;
class Arc extends Shape_1$f.Shape {
  _sceneFunc(context) {
    const angle = Global_1$g.Konva.getAngle(this.angle()), clockwise = this.clockwise();
    context.beginPath();
    context.arc(0, 0, this.outerRadius(), 0, angle, clockwise);
    context.arc(0, 0, this.innerRadius(), angle, 0, !clockwise);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(width) {
    this.outerRadius(width / 2);
  }
  setHeight(height) {
    this.outerRadius(height / 2);
  }
  getSelfRect() {
    const innerRadius = this.innerRadius();
    const outerRadius = this.outerRadius();
    const clockwise = this.clockwise();
    const angle = Global_1$g.Konva.getAngle(clockwise ? 360 - this.angle() : this.angle());
    const boundLeftRatio = Math.cos(Math.min(angle, Math.PI));
    const boundRightRatio = 1;
    const boundTopRatio = Math.sin(Math.min(Math.max(Math.PI, angle), 3 * Math.PI / 2));
    const boundBottomRatio = Math.sin(Math.min(angle, Math.PI / 2));
    const boundLeft = boundLeftRatio * (boundLeftRatio > 0 ? innerRadius : outerRadius);
    const boundRight = boundRightRatio * outerRadius;
    const boundTop = boundTopRatio * (boundTopRatio > 0 ? innerRadius : outerRadius);
    const boundBottom = boundBottomRatio * (boundBottomRatio > 0 ? outerRadius : innerRadius);
    return {
      x: boundLeft,
      y: clockwise ? -1 * boundBottom : boundTop,
      width: boundRight - boundLeft,
      height: boundBottom - boundTop
    };
  }
}
Arc$1.Arc = Arc;
Arc.prototype._centroid = true;
Arc.prototype.className = "Arc";
Arc.prototype._attrsAffectingSize = [
  "innerRadius",
  "outerRadius",
  "angle",
  "clockwise"
];
(0, Global_2$3._registerNode)(Arc);
Factory_1$v.Factory.addGetterSetter(Arc, "innerRadius", 0, (0, Validators_1$u.getNumberValidator)());
Factory_1$v.Factory.addGetterSetter(Arc, "outerRadius", 0, (0, Validators_1$u.getNumberValidator)());
Factory_1$v.Factory.addGetterSetter(Arc, "angle", 0, (0, Validators_1$u.getNumberValidator)());
Factory_1$v.Factory.addGetterSetter(Arc, "clockwise", false, (0, Validators_1$u.getBooleanValidator)());
var Arrow$1 = {};
var Line$2 = {};
Object.defineProperty(Line$2, "__esModule", { value: true });
Line$2.Line = void 0;
const Factory_1$u = Factory;
const Global_1$f = Global;
const Shape_1$e = Shape;
const Validators_1$t = Validators;
function getControlPoints(x0, y0, x1, y1, x2, y2, t2) {
  const d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)), d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), fa2 = t2 * d01 / (d01 + d12), fb2 = t2 * d12 / (d01 + d12), p1x = x1 - fa2 * (x2 - x0), p1y = y1 - fa2 * (y2 - y0), p2x = x1 + fb2 * (x2 - x0), p2y = y1 + fb2 * (y2 - y0);
  return [p1x, p1y, p2x, p2y];
}
function expandPoints(p2, tension) {
  const len = p2.length, allPoints = [];
  for (let n2 = 2; n2 < len - 2; n2 += 2) {
    const cp = getControlPoints(p2[n2 - 2], p2[n2 - 1], p2[n2], p2[n2 + 1], p2[n2 + 2], p2[n2 + 3], tension);
    if (isNaN(cp[0])) {
      continue;
    }
    allPoints.push(cp[0]);
    allPoints.push(cp[1]);
    allPoints.push(p2[n2]);
    allPoints.push(p2[n2 + 1]);
    allPoints.push(cp[2]);
    allPoints.push(cp[3]);
  }
  return allPoints;
}
let Line$1 = class Line extends Shape_1$e.Shape {
  constructor(config) {
    super(config);
    this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(context) {
    const points = this.points(), length = points.length, tension = this.tension(), closed = this.closed(), bezier = this.bezier();
    if (!length) {
      return;
    }
    let n2 = 0;
    context.beginPath();
    context.moveTo(points[0], points[1]);
    if (tension !== 0 && length > 4) {
      const tp = this.getTensionPoints();
      const len = tp.length;
      n2 = closed ? 0 : 4;
      if (!closed) {
        context.quadraticCurveTo(tp[0], tp[1], tp[2], tp[3]);
      }
      while (n2 < len - 2) {
        context.bezierCurveTo(tp[n2++], tp[n2++], tp[n2++], tp[n2++], tp[n2++], tp[n2++]);
      }
      if (!closed) {
        context.quadraticCurveTo(tp[len - 2], tp[len - 1], points[length - 2], points[length - 1]);
      }
    } else if (bezier) {
      n2 = 2;
      while (n2 < length) {
        context.bezierCurveTo(points[n2++], points[n2++], points[n2++], points[n2++], points[n2++], points[n2++]);
      }
    } else {
      for (n2 = 2; n2 < length; n2 += 2) {
        context.lineTo(points[n2], points[n2 + 1]);
      }
    }
    if (closed) {
      context.closePath();
      context.fillStrokeShape(this);
    } else {
      context.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    if (this.closed()) {
      return this._getTensionPointsClosed();
    } else {
      return expandPoints(this.points(), this.tension());
    }
  }
  _getTensionPointsClosed() {
    const p2 = this.points(), len = p2.length, tension = this.tension(), firstControlPoints = getControlPoints(p2[len - 2], p2[len - 1], p2[0], p2[1], p2[2], p2[3], tension), lastControlPoints = getControlPoints(p2[len - 4], p2[len - 3], p2[len - 2], p2[len - 1], p2[0], p2[1], tension), middle = expandPoints(p2, tension), tp = [firstControlPoints[2], firstControlPoints[3]].concat(middle).concat([
      lastControlPoints[0],
      lastControlPoints[1],
      p2[len - 2],
      p2[len - 1],
      lastControlPoints[2],
      lastControlPoints[3],
      firstControlPoints[0],
      firstControlPoints[1],
      p2[0],
      p2[1]
    ]);
    return tp;
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    let points = this.points();
    if (points.length < 4) {
      return {
        x: points[0] || 0,
        y: points[1] || 0,
        width: 0,
        height: 0
      };
    }
    if (this.tension() !== 0) {
      points = [
        points[0],
        points[1],
        ...this._getTensionPoints(),
        points[points.length - 2],
        points[points.length - 1]
      ];
    } else {
      points = this.points();
    }
    let minX = points[0];
    let maxX = points[0];
    let minY = points[1];
    let maxY = points[1];
    let x2, y2;
    for (let i = 0; i < points.length / 2; i++) {
      x2 = points[i * 2];
      y2 = points[i * 2 + 1];
      minX = Math.min(minX, x2);
      maxX = Math.max(maxX, x2);
      minY = Math.min(minY, y2);
      maxY = Math.max(maxY, y2);
    }
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
};
Line$2.Line = Line$1;
Line$1.prototype.className = "Line";
Line$1.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, Global_1$f._registerNode)(Line$1);
Factory_1$u.Factory.addGetterSetter(Line$1, "closed", false);
Factory_1$u.Factory.addGetterSetter(Line$1, "bezier", false);
Factory_1$u.Factory.addGetterSetter(Line$1, "tension", 0, (0, Validators_1$t.getNumberValidator)());
Factory_1$u.Factory.addGetterSetter(Line$1, "points", [], (0, Validators_1$t.getNumberArrayValidator)());
var Path$1 = {};
var BezierFunctions = {};
(function(exports$1) {
  Object.defineProperty(exports$1, "__esModule", { value: true });
  exports$1.t2length = exports$1.getQuadraticArcLength = exports$1.getCubicArcLength = exports$1.binomialCoefficients = exports$1.cValues = exports$1.tValues = void 0;
  exports$1.tValues = [
    [],
    [],
    [
      -0.5773502691896257,
      0.5773502691896257
    ],
    [
      0,
      -0.7745966692414834,
      0.7745966692414834
    ],
    [
      -0.33998104358485626,
      0.33998104358485626,
      -0.8611363115940526,
      0.8611363115940526
    ],
    [
      0,
      -0.5384693101056831,
      0.5384693101056831,
      -0.906179845938664,
      0.906179845938664
    ],
    [
      0.6612093864662645,
      -0.6612093864662645,
      -0.2386191860831969,
      0.2386191860831969,
      -0.932469514203152,
      0.932469514203152
    ],
    [
      0,
      0.4058451513773972,
      -0.4058451513773972,
      -0.7415311855993945,
      0.7415311855993945,
      -0.9491079123427585,
      0.9491079123427585
    ],
    [
      -0.1834346424956498,
      0.1834346424956498,
      -0.525532409916329,
      0.525532409916329,
      -0.7966664774136267,
      0.7966664774136267,
      -0.9602898564975363,
      0.9602898564975363
    ],
    [
      0,
      -0.8360311073266358,
      0.8360311073266358,
      -0.9681602395076261,
      0.9681602395076261,
      -0.3242534234038089,
      0.3242534234038089,
      -0.6133714327005904,
      0.6133714327005904
    ],
    [
      -0.14887433898163122,
      0.14887433898163122,
      -0.4333953941292472,
      0.4333953941292472,
      -0.6794095682990244,
      0.6794095682990244,
      -0.8650633666889845,
      0.8650633666889845,
      -0.9739065285171717,
      0.9739065285171717
    ],
    [
      0,
      -0.26954315595234496,
      0.26954315595234496,
      -0.5190961292068118,
      0.5190961292068118,
      -0.7301520055740494,
      0.7301520055740494,
      -0.8870625997680953,
      0.8870625997680953,
      -0.978228658146057,
      0.978228658146057
    ],
    [
      -0.1252334085114689,
      0.1252334085114689,
      -0.3678314989981802,
      0.3678314989981802,
      -0.5873179542866175,
      0.5873179542866175,
      -0.7699026741943047,
      0.7699026741943047,
      -0.9041172563704749,
      0.9041172563704749,
      -0.9815606342467192,
      0.9815606342467192
    ],
    [
      0,
      -0.2304583159551348,
      0.2304583159551348,
      -0.44849275103644687,
      0.44849275103644687,
      -0.6423493394403402,
      0.6423493394403402,
      -0.8015780907333099,
      0.8015780907333099,
      -0.9175983992229779,
      0.9175983992229779,
      -0.9841830547185881,
      0.9841830547185881
    ],
    [
      -0.10805494870734367,
      0.10805494870734367,
      -0.31911236892788974,
      0.31911236892788974,
      -0.5152486363581541,
      0.5152486363581541,
      -0.6872929048116855,
      0.6872929048116855,
      -0.827201315069765,
      0.827201315069765,
      -0.9284348836635735,
      0.9284348836635735,
      -0.9862838086968123,
      0.9862838086968123
    ],
    [
      0,
      -0.20119409399743451,
      0.20119409399743451,
      -0.3941513470775634,
      0.3941513470775634,
      -0.5709721726085388,
      0.5709721726085388,
      -0.7244177313601701,
      0.7244177313601701,
      -0.8482065834104272,
      0.8482065834104272,
      -0.937273392400706,
      0.937273392400706,
      -0.9879925180204854,
      0.9879925180204854
    ],
    [
      -0.09501250983763744,
      0.09501250983763744,
      -0.2816035507792589,
      0.2816035507792589,
      -0.45801677765722737,
      0.45801677765722737,
      -0.6178762444026438,
      0.6178762444026438,
      -0.755404408355003,
      0.755404408355003,
      -0.8656312023878318,
      0.8656312023878318,
      -0.9445750230732326,
      0.9445750230732326,
      -0.9894009349916499,
      0.9894009349916499
    ],
    [
      0,
      -0.17848418149584785,
      0.17848418149584785,
      -0.3512317634538763,
      0.3512317634538763,
      -0.5126905370864769,
      0.5126905370864769,
      -0.6576711592166907,
      0.6576711592166907,
      -0.7815140038968014,
      0.7815140038968014,
      -0.8802391537269859,
      0.8802391537269859,
      -0.9506755217687678,
      0.9506755217687678,
      -0.9905754753144174,
      0.9905754753144174
    ],
    [
      -0.0847750130417353,
      0.0847750130417353,
      -0.2518862256915055,
      0.2518862256915055,
      -0.41175116146284263,
      0.41175116146284263,
      -0.5597708310739475,
      0.5597708310739475,
      -0.6916870430603532,
      0.6916870430603532,
      -0.8037049589725231,
      0.8037049589725231,
      -0.8926024664975557,
      0.8926024664975557,
      -0.9558239495713977,
      0.9558239495713977,
      -0.9915651684209309,
      0.9915651684209309
    ],
    [
      0,
      -0.16035864564022537,
      0.16035864564022537,
      -0.31656409996362983,
      0.31656409996362983,
      -0.46457074137596094,
      0.46457074137596094,
      -0.600545304661681,
      0.600545304661681,
      -0.7209661773352294,
      0.7209661773352294,
      -0.8227146565371428,
      0.8227146565371428,
      -0.9031559036148179,
      0.9031559036148179,
      -0.96020815213483,
      0.96020815213483,
      -0.9924068438435844,
      0.9924068438435844
    ],
    [
      -0.07652652113349734,
      0.07652652113349734,
      -0.22778585114164507,
      0.22778585114164507,
      -0.37370608871541955,
      0.37370608871541955,
      -0.5108670019508271,
      0.5108670019508271,
      -0.636053680726515,
      0.636053680726515,
      -0.7463319064601508,
      0.7463319064601508,
      -0.8391169718222188,
      0.8391169718222188,
      -0.912234428251326,
      0.912234428251326,
      -0.9639719272779138,
      0.9639719272779138,
      -0.9931285991850949,
      0.9931285991850949
    ],
    [
      0,
      -0.1455618541608951,
      0.1455618541608951,
      -0.2880213168024011,
      0.2880213168024011,
      -0.4243421202074388,
      0.4243421202074388,
      -0.5516188358872198,
      0.5516188358872198,
      -0.6671388041974123,
      0.6671388041974123,
      -0.7684399634756779,
      0.7684399634756779,
      -0.8533633645833173,
      0.8533633645833173,
      -0.9200993341504008,
      0.9200993341504008,
      -0.9672268385663063,
      0.9672268385663063,
      -0.9937521706203895,
      0.9937521706203895
    ],
    [
      -0.06973927331972223,
      0.06973927331972223,
      -0.20786042668822127,
      0.20786042668822127,
      -0.34193582089208424,
      0.34193582089208424,
      -0.469355837986757,
      0.469355837986757,
      -0.5876404035069116,
      0.5876404035069116,
      -0.6944872631866827,
      0.6944872631866827,
      -0.7878168059792081,
      0.7878168059792081,
      -0.8658125777203002,
      0.8658125777203002,
      -0.926956772187174,
      0.926956772187174,
      -0.9700604978354287,
      0.9700604978354287,
      -0.9942945854823992,
      0.9942945854823992
    ],
    [
      0,
      -0.1332568242984661,
      0.1332568242984661,
      -0.26413568097034495,
      0.26413568097034495,
      -0.3903010380302908,
      0.3903010380302908,
      -0.5095014778460075,
      0.5095014778460075,
      -0.6196098757636461,
      0.6196098757636461,
      -0.7186613631319502,
      0.7186613631319502,
      -0.8048884016188399,
      0.8048884016188399,
      -0.8767523582704416,
      0.8767523582704416,
      -0.9329710868260161,
      0.9329710868260161,
      -0.9725424712181152,
      0.9725424712181152,
      -0.9947693349975522,
      0.9947693349975522
    ],
    [
      -0.06405689286260563,
      0.06405689286260563,
      -0.1911188674736163,
      0.1911188674736163,
      -0.3150426796961634,
      0.3150426796961634,
      -0.4337935076260451,
      0.4337935076260451,
      -0.5454214713888396,
      0.5454214713888396,
      -0.6480936519369755,
      0.6480936519369755,
      -0.7401241915785544,
      0.7401241915785544,
      -0.820001985973903,
      0.820001985973903,
      -0.8864155270044011,
      0.8864155270044011,
      -0.9382745520027328,
      0.9382745520027328,
      -0.9747285559713095,
      0.9747285559713095,
      -0.9951872199970213,
      0.9951872199970213
    ]
  ];
  exports$1.cValues = [
    [],
    [],
    [1, 1],
    [
      0.8888888888888888,
      0.5555555555555556,
      0.5555555555555556
    ],
    [
      0.6521451548625461,
      0.6521451548625461,
      0.34785484513745385,
      0.34785484513745385
    ],
    [
      0.5688888888888889,
      0.47862867049936647,
      0.47862867049936647,
      0.23692688505618908,
      0.23692688505618908
    ],
    [
      0.3607615730481386,
      0.3607615730481386,
      0.46791393457269104,
      0.46791393457269104,
      0.17132449237917036,
      0.17132449237917036
    ],
    [
      0.4179591836734694,
      0.3818300505051189,
      0.3818300505051189,
      0.27970539148927664,
      0.27970539148927664,
      0.1294849661688697,
      0.1294849661688697
    ],
    [
      0.362683783378362,
      0.362683783378362,
      0.31370664587788727,
      0.31370664587788727,
      0.22238103445337448,
      0.22238103445337448,
      0.10122853629037626,
      0.10122853629037626
    ],
    [
      0.3302393550012598,
      0.1806481606948574,
      0.1806481606948574,
      0.08127438836157441,
      0.08127438836157441,
      0.31234707704000286,
      0.31234707704000286,
      0.26061069640293544,
      0.26061069640293544
    ],
    [
      0.29552422471475287,
      0.29552422471475287,
      0.26926671930999635,
      0.26926671930999635,
      0.21908636251598204,
      0.21908636251598204,
      0.1494513491505806,
      0.1494513491505806,
      0.06667134430868814,
      0.06667134430868814
    ],
    [
      0.2729250867779006,
      0.26280454451024665,
      0.26280454451024665,
      0.23319376459199048,
      0.23319376459199048,
      0.18629021092773426,
      0.18629021092773426,
      0.1255803694649046,
      0.1255803694649046,
      0.05566856711617366,
      0.05566856711617366
    ],
    [
      0.24914704581340277,
      0.24914704581340277,
      0.2334925365383548,
      0.2334925365383548,
      0.20316742672306592,
      0.20316742672306592,
      0.16007832854334622,
      0.16007832854334622,
      0.10693932599531843,
      0.10693932599531843,
      0.04717533638651183,
      0.04717533638651183
    ],
    [
      0.2325515532308739,
      0.22628318026289723,
      0.22628318026289723,
      0.2078160475368885,
      0.2078160475368885,
      0.17814598076194574,
      0.17814598076194574,
      0.13887351021978725,
      0.13887351021978725,
      0.09212149983772845,
      0.09212149983772845,
      0.04048400476531588,
      0.04048400476531588
    ],
    [
      0.2152638534631578,
      0.2152638534631578,
      0.2051984637212956,
      0.2051984637212956,
      0.18553839747793782,
      0.18553839747793782,
      0.15720316715819355,
      0.15720316715819355,
      0.12151857068790319,
      0.12151857068790319,
      0.08015808715976021,
      0.08015808715976021,
      0.03511946033175186,
      0.03511946033175186
    ],
    [
      0.2025782419255613,
      0.19843148532711158,
      0.19843148532711158,
      0.1861610000155622,
      0.1861610000155622,
      0.16626920581699392,
      0.16626920581699392,
      0.13957067792615432,
      0.13957067792615432,
      0.10715922046717194,
      0.10715922046717194,
      0.07036604748810812,
      0.07036604748810812,
      0.03075324199611727,
      0.03075324199611727
    ],
    [
      0.1894506104550685,
      0.1894506104550685,
      0.18260341504492358,
      0.18260341504492358,
      0.16915651939500254,
      0.16915651939500254,
      0.14959598881657674,
      0.14959598881657674,
      0.12462897125553388,
      0.12462897125553388,
      0.09515851168249279,
      0.09515851168249279,
      0.062253523938647894,
      0.062253523938647894,
      0.027152459411754096,
      0.027152459411754096
    ],
    [
      0.17944647035620653,
      0.17656270536699264,
      0.17656270536699264,
      0.16800410215645004,
      0.16800410215645004,
      0.15404576107681028,
      0.15404576107681028,
      0.13513636846852548,
      0.13513636846852548,
      0.11188384719340397,
      0.11188384719340397,
      0.08503614831717918,
      0.08503614831717918,
      0.0554595293739872,
      0.0554595293739872,
      0.02414830286854793,
      0.02414830286854793
    ],
    [
      0.1691423829631436,
      0.1691423829631436,
      0.16427648374583273,
      0.16427648374583273,
      0.15468467512626524,
      0.15468467512626524,
      0.14064291467065065,
      0.14064291467065065,
      0.12255520671147846,
      0.12255520671147846,
      0.10094204410628717,
      0.10094204410628717,
      0.07642573025488905,
      0.07642573025488905,
      0.0497145488949698,
      0.0497145488949698,
      0.02161601352648331,
      0.02161601352648331
    ],
    [
      0.1610544498487837,
      0.15896884339395434,
      0.15896884339395434,
      0.15276604206585967,
      0.15276604206585967,
      0.1426067021736066,
      0.1426067021736066,
      0.12875396253933621,
      0.12875396253933621,
      0.11156664554733399,
      0.11156664554733399,
      0.09149002162245,
      0.09149002162245,
      0.06904454273764123,
      0.06904454273764123,
      0.0448142267656996,
      0.0448142267656996,
      0.019461788229726478,
      0.019461788229726478
    ],
    [
      0.15275338713072584,
      0.15275338713072584,
      0.14917298647260374,
      0.14917298647260374,
      0.14209610931838204,
      0.14209610931838204,
      0.13168863844917664,
      0.13168863844917664,
      0.11819453196151841,
      0.11819453196151841,
      0.10193011981724044,
      0.10193011981724044,
      0.08327674157670475,
      0.08327674157670475,
      0.06267204833410907,
      0.06267204833410907,
      0.04060142980038694,
      0.04060142980038694,
      0.017614007139152118,
      0.017614007139152118
    ],
    [
      0.14608113364969041,
      0.14452440398997005,
      0.14452440398997005,
      0.13988739479107315,
      0.13988739479107315,
      0.13226893863333747,
      0.13226893863333747,
      0.12183141605372853,
      0.12183141605372853,
      0.10879729916714838,
      0.10879729916714838,
      0.09344442345603386,
      0.09344442345603386,
      0.0761001136283793,
      0.0761001136283793,
      0.057134425426857205,
      0.057134425426857205,
      0.036953789770852494,
      0.036953789770852494,
      0.016017228257774335,
      0.016017228257774335
    ],
    [
      0.13925187285563198,
      0.13925187285563198,
      0.13654149834601517,
      0.13654149834601517,
      0.13117350478706238,
      0.13117350478706238,
      0.12325237681051242,
      0.12325237681051242,
      0.11293229608053922,
      0.11293229608053922,
      0.10041414444288096,
      0.10041414444288096,
      0.08594160621706773,
      0.08594160621706773,
      0.06979646842452049,
      0.06979646842452049,
      0.052293335152683286,
      0.052293335152683286,
      0.03377490158481415,
      0.03377490158481415,
      0.0146279952982722,
      0.0146279952982722
    ],
    [
      0.13365457218610619,
      0.1324620394046966,
      0.1324620394046966,
      0.12890572218808216,
      0.12890572218808216,
      0.12304908430672953,
      0.12304908430672953,
      0.11499664022241136,
      0.11499664022241136,
      0.10489209146454141,
      0.10489209146454141,
      0.09291576606003515,
      0.09291576606003515,
      0.07928141177671895,
      0.07928141177671895,
      0.06423242140852585,
      0.06423242140852585,
      0.04803767173108467,
      0.04803767173108467,
      0.030988005856979445,
      0.030988005856979445,
      0.013411859487141771,
      0.013411859487141771
    ],
    [
      0.12793819534675216,
      0.12793819534675216,
      0.1258374563468283,
      0.1258374563468283,
      0.12167047292780339,
      0.12167047292780339,
      0.1155056680537256,
      0.1155056680537256,
      0.10744427011596563,
      0.10744427011596563,
      0.09761865210411388,
      0.09761865210411388,
      0.08619016153195327,
      0.08619016153195327,
      0.0733464814110803,
      0.0733464814110803,
      0.05929858491543678,
      0.05929858491543678,
      0.04427743881741981,
      0.04427743881741981,
      0.028531388628933663,
      0.028531388628933663,
      0.0123412297999872,
      0.0123412297999872
    ]
  ];
  exports$1.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
  const getCubicArcLength = (xs, ys, t2) => {
    let sum;
    let correctedT;
    const n2 = 20;
    const z2 = t2 / 2;
    sum = 0;
    for (let i = 0; i < n2; i++) {
      correctedT = z2 * exports$1.tValues[n2][i] + z2;
      sum += exports$1.cValues[n2][i] * BFunc(xs, ys, correctedT);
    }
    return z2 * sum;
  };
  exports$1.getCubicArcLength = getCubicArcLength;
  const getQuadraticArcLength = (xs, ys, t2) => {
    if (t2 === void 0) {
      t2 = 1;
    }
    const ax = xs[0] - 2 * xs[1] + xs[2];
    const ay = ys[0] - 2 * ys[1] + ys[2];
    const bx = 2 * xs[1] - 2 * xs[0];
    const by = 2 * ys[1] - 2 * ys[0];
    const A2 = 4 * (ax * ax + ay * ay);
    const B2 = 4 * (ax * bx + ay * by);
    const C2 = bx * bx + by * by;
    if (A2 === 0) {
      return t2 * Math.sqrt(Math.pow(xs[2] - xs[0], 2) + Math.pow(ys[2] - ys[0], 2));
    }
    const b = B2 / (2 * A2);
    const c = C2 / A2;
    const u2 = t2 + b;
    const k2 = c - b * b;
    const uuk = u2 * u2 + k2 > 0 ? Math.sqrt(u2 * u2 + k2) : 0;
    const bbk = b * b + k2 > 0 ? Math.sqrt(b * b + k2) : 0;
    const term = b + Math.sqrt(b * b + k2) !== 0 ? k2 * Math.log(Math.abs((u2 + uuk) / (b + bbk))) : 0;
    return Math.sqrt(A2) / 2 * (u2 * uuk - b * bbk + term);
  };
  exports$1.getQuadraticArcLength = getQuadraticArcLength;
  function BFunc(xs, ys, t2) {
    const xbase = getDerivative(1, t2, xs);
    const ybase = getDerivative(1, t2, ys);
    const combined = xbase * xbase + ybase * ybase;
    return Math.sqrt(combined);
  }
  const getDerivative = (derivative, t2, vs) => {
    const n2 = vs.length - 1;
    let _vs;
    let value;
    if (n2 === 0) {
      return 0;
    }
    if (derivative === 0) {
      value = 0;
      for (let k2 = 0; k2 <= n2; k2++) {
        value += exports$1.binomialCoefficients[n2][k2] * Math.pow(1 - t2, n2 - k2) * Math.pow(t2, k2) * vs[k2];
      }
      return value;
    } else {
      _vs = new Array(n2);
      for (let k2 = 0; k2 < n2; k2++) {
        _vs[k2] = n2 * (vs[k2 + 1] - vs[k2]);
      }
      return getDerivative(derivative - 1, t2, _vs);
    }
  };
  const t2length = (length, totalLength, func) => {
    let error2 = 1;
    let t2 = length / totalLength;
    let step = (length - func(t2)) / totalLength;
    let numIterations = 0;
    while (error2 > 1e-3) {
      const increasedTLength = func(t2 + step);
      const increasedTError = Math.abs(length - increasedTLength) / totalLength;
      if (increasedTError < error2) {
        error2 = increasedTError;
        t2 += step;
      } else {
        const decreasedTLength = func(t2 - step);
        const decreasedTError = Math.abs(length - decreasedTLength) / totalLength;
        if (decreasedTError < error2) {
          error2 = decreasedTError;
          t2 -= step;
        } else {
          step /= 2;
        }
      }
      numIterations++;
      if (numIterations > 500) {
        break;
      }
    }
    return t2;
  };
  exports$1.t2length = t2length;
})(BezierFunctions);
Object.defineProperty(Path$1, "__esModule", { value: true });
Path$1.Path = void 0;
const Factory_1$t = Factory;
const Global_1$e = Global;
const Shape_1$d = Shape;
const BezierFunctions_1 = BezierFunctions;
class Path extends Shape_1$d.Shape {
  constructor(config) {
    super(config);
    this.dataArray = [];
    this.pathLength = 0;
    this._readDataAttribute();
    this.on("dataChange.konva", function() {
      this._readDataAttribute();
    });
  }
  _readDataAttribute() {
    this.dataArray = Path.parsePathData(this.data());
    this.pathLength = Path.getPathLength(this.dataArray);
  }
  _sceneFunc(context) {
    const ca2 = this.dataArray;
    context.beginPath();
    let isClosed = false;
    for (let n2 = 0; n2 < ca2.length; n2++) {
      const c = ca2[n2].command;
      const p2 = ca2[n2].points;
      switch (c) {
        case "L":
          context.lineTo(p2[0], p2[1]);
          break;
        case "M":
          context.moveTo(p2[0], p2[1]);
          break;
        case "C":
          context.bezierCurveTo(p2[0], p2[1], p2[2], p2[3], p2[4], p2[5]);
          break;
        case "Q":
          context.quadraticCurveTo(p2[0], p2[1], p2[2], p2[3]);
          break;
        case "A":
          const cx = p2[0], cy = p2[1], rx = p2[2], ry = p2[3], theta = p2[4], dTheta = p2[5], psi = p2[6], fs = p2[7];
          const r2 = rx > ry ? rx : ry;
          const scaleX = rx > ry ? 1 : rx / ry;
          const scaleY = rx > ry ? ry / rx : 1;
          context.translate(cx, cy);
          context.rotate(psi);
          context.scale(scaleX, scaleY);
          context.arc(0, 0, r2, theta, theta + dTheta, 1 - fs);
          context.scale(1 / scaleX, 1 / scaleY);
          context.rotate(-psi);
          context.translate(-cx, -cy);
          break;
        case "z":
          isClosed = true;
          context.closePath();
          break;
      }
    }
    if (!isClosed && !this.hasFill()) {
      context.strokeShape(this);
    } else {
      context.fillStrokeShape(this);
    }
  }
  getSelfRect() {
    let points = [];
    this.dataArray.forEach(function(data) {
      if (data.command === "A") {
        const start = data.points[4];
        const dTheta = data.points[5];
        const end = data.points[4] + dTheta;
        let inc = Math.PI / 180;
        if (Math.abs(start - end) < inc) {
          inc = Math.abs(start - end);
        }
        if (dTheta < 0) {
          for (let t2 = start - inc; t2 > end; t2 -= inc) {
            const point = Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t2, 0);
            points.push(point.x, point.y);
          }
        } else {
          for (let t2 = start + inc; t2 < end; t2 += inc) {
            const point = Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t2, 0);
            points.push(point.x, point.y);
          }
        }
      } else if (data.command === "C") {
        for (let t2 = 0; t2 <= 1; t2 += 0.01) {
          const point = Path.getPointOnCubicBezier(t2, data.start.x, data.start.y, data.points[0], data.points[1], data.points[2], data.points[3], data.points[4], data.points[5]);
          points.push(point.x, point.y);
        }
      } else {
        points = points.concat(data.points);
      }
    });
    let minX = points[0];
    let maxX = points[0];
    let minY = points[1];
    let maxY = points[1];
    let x2, y2;
    for (let i = 0; i < points.length / 2; i++) {
      x2 = points[i * 2];
      y2 = points[i * 2 + 1];
      if (!isNaN(x2)) {
        minX = Math.min(minX, x2);
        maxX = Math.max(maxX, x2);
      }
      if (!isNaN(y2)) {
        minY = Math.min(minY, y2);
        maxY = Math.max(maxY, y2);
      }
    }
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(length) {
    return Path.getPointAtLengthOfDataArray(length, this.dataArray);
  }
  static getLineLength(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
  static getPathLength(dataArray) {
    let pathLength = 0;
    for (let i = 0; i < dataArray.length; ++i) {
      pathLength += dataArray[i].pathLength;
    }
    return pathLength;
  }
  static getPointAtLengthOfDataArray(length, dataArray) {
    let points, i = 0, ii2 = dataArray.length;
    if (!ii2) {
      return null;
    }
    while (i < ii2 && length > dataArray[i].pathLength) {
      length -= dataArray[i].pathLength;
      ++i;
    }
    if (i === ii2) {
      points = dataArray[i - 1].points.slice(-2);
      return {
        x: points[0],
        y: points[1]
      };
    }
    if (length < 0.01) {
      const cmd = dataArray[i].command;
      if (cmd === "M") {
        points = dataArray[i].points.slice(0, 2);
        return {
          x: points[0],
          y: points[1]
        };
      } else {
        return {
          x: dataArray[i].start.x,
          y: dataArray[i].start.y
        };
      }
    }
    const cp = dataArray[i];
    const p2 = cp.points;
    switch (cp.command) {
      case "L":
        return Path.getPointOnLine(length, cp.start.x, cp.start.y, p2[0], p2[1]);
      case "C":
        return Path.getPointOnCubicBezier((0, BezierFunctions_1.t2length)(length, Path.getPathLength(dataArray), (i2) => {
          return (0, BezierFunctions_1.getCubicArcLength)([cp.start.x, p2[0], p2[2], p2[4]], [cp.start.y, p2[1], p2[3], p2[5]], i2);
        }), cp.start.x, cp.start.y, p2[0], p2[1], p2[2], p2[3], p2[4], p2[5]);
      case "Q":
        return Path.getPointOnQuadraticBezier((0, BezierFunctions_1.t2length)(length, Path.getPathLength(dataArray), (i2) => {
          return (0, BezierFunctions_1.getQuadraticArcLength)([cp.start.x, p2[0], p2[2]], [cp.start.y, p2[1], p2[3]], i2);
        }), cp.start.x, cp.start.y, p2[0], p2[1], p2[2], p2[3]);
      case "A":
        const cx = p2[0], cy = p2[1], rx = p2[2], ry = p2[3], dTheta = p2[5], psi = p2[6];
        let theta = p2[4];
        theta += dTheta * length / cp.pathLength;
        return Path.getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi);
    }
    return null;
  }
  static getPointOnLine(dist, P1x, P1y, P2x, P2y, fromX, fromY) {
    fromX = fromX !== null && fromX !== void 0 ? fromX : P1x;
    fromY = fromY !== null && fromY !== void 0 ? fromY : P1y;
    const len = this.getLineLength(P1x, P1y, P2x, P2y);
    if (len < 1e-10) {
      return { x: P1x, y: P1y };
    }
    if (P2x === P1x) {
      return { x: fromX, y: fromY + (P2y > P1y ? dist : -dist) };
    }
    const m2 = (P2y - P1y) / (P2x - P1x);
    const run = Math.sqrt(dist * dist / (1 + m2 * m2)) * (P2x < P1x ? -1 : 1);
    const rise = m2 * run;
    if (Math.abs(fromY - P1y - m2 * (fromX - P1x)) < 1e-10) {
      return { x: fromX + run, y: fromY + rise };
    }
    const u2 = ((fromX - P1x) * (P2x - P1x) + (fromY - P1y) * (P2y - P1y)) / (len * len);
    const ix = P1x + u2 * (P2x - P1x);
    const iy = P1y + u2 * (P2y - P1y);
    const pRise = this.getLineLength(fromX, fromY, ix, iy);
    const pRun = Math.sqrt(dist * dist - pRise * pRise);
    const adjustedRun = Math.sqrt(pRun * pRun / (1 + m2 * m2)) * (P2x < P1x ? -1 : 1);
    const adjustedRise = m2 * adjustedRun;
    return { x: ix + adjustedRun, y: iy + adjustedRise };
  }
  static getPointOnCubicBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y, P4x, P4y) {
    function CB1(t2) {
      return t2 * t2 * t2;
    }
    function CB2(t2) {
      return 3 * t2 * t2 * (1 - t2);
    }
    function CB3(t2) {
      return 3 * t2 * (1 - t2) * (1 - t2);
    }
    function CB4(t2) {
      return (1 - t2) * (1 - t2) * (1 - t2);
    }
    const x2 = P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct);
    const y2 = P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct);
    return { x: x2, y: y2 };
  }
  static getPointOnQuadraticBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y) {
    function QB1(t2) {
      return t2 * t2;
    }
    function QB2(t2) {
      return 2 * t2 * (1 - t2);
    }
    function QB3(t2) {
      return (1 - t2) * (1 - t2);
    }
    const x2 = P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct);
    const y2 = P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct);
    return { x: x2, y: y2 };
  }
  static getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
    const cosPsi = Math.cos(psi), sinPsi = Math.sin(psi);
    const pt = {
      x: rx * Math.cos(theta),
      y: ry * Math.sin(theta)
    };
    return {
      x: cx + (pt.x * cosPsi - pt.y * sinPsi),
      y: cy + (pt.x * sinPsi + pt.y * cosPsi)
    };
  }
  static parsePathData(data) {
    if (!data) {
      return [];
    }
    let cs = data;
    const cc2 = [
      "m",
      "M",
      "l",
      "L",
      "v",
      "V",
      "h",
      "H",
      "z",
      "Z",
      "c",
      "C",
      "q",
      "Q",
      "t",
      "T",
      "s",
      "S",
      "a",
      "A"
    ];
    cs = cs.replace(new RegExp(" ", "g"), ",");
    for (let n2 = 0; n2 < cc2.length; n2++) {
      cs = cs.replace(new RegExp(cc2[n2], "g"), "|" + cc2[n2]);
    }
    const arr = cs.split("|");
    const ca2 = [];
    const coords = [];
    let cpx = 0;
    let cpy = 0;
    const re2 = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
    let match;
    for (let n2 = 1; n2 < arr.length; n2++) {
      let str = arr[n2];
      let c = str.charAt(0);
      str = str.slice(1);
      coords.length = 0;
      while (match = re2.exec(str)) {
        coords.push(match[0]);
      }
      const p2 = [];
      for (let j = 0, jlen = coords.length; j < jlen; j++) {
        if (coords[j] === "00") {
          p2.push(0, 0);
          continue;
        }
        const parsed = parseFloat(coords[j]);
        if (!isNaN(parsed)) {
          p2.push(parsed);
        } else {
          p2.push(0);
        }
      }
      while (p2.length > 0) {
        if (isNaN(p2[0])) {
          break;
        }
        let cmd = "";
        let points = [];
        const startX = cpx, startY = cpy;
        let prevCmd, ctlPtx, ctlPty;
        let rx, ry, psi, fa2, fs, x1, y1;
        switch (c) {
          case "l":
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "L":
            cpx = p2.shift();
            cpy = p2.shift();
            points.push(cpx, cpy);
            break;
          case "m":
            const dx = p2.shift();
            const dy = p2.shift();
            cpx += dx;
            cpy += dy;
            cmd = "M";
            if (ca2.length > 2 && ca2[ca2.length - 1].command === "z") {
              for (let idx = ca2.length - 2; idx >= 0; idx--) {
                if (ca2[idx].command === "M") {
                  cpx = ca2[idx].points[0] + dx;
                  cpy = ca2[idx].points[1] + dy;
                  break;
                }
              }
            }
            points.push(cpx, cpy);
            c = "l";
            break;
          case "M":
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "M";
            points.push(cpx, cpy);
            c = "L";
            break;
          case "h":
            cpx += p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "H":
            cpx = p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "v":
            cpy += p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "V":
            cpy = p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "C":
            points.push(p2.shift(), p2.shift(), p2.shift(), p2.shift());
            cpx = p2.shift();
            cpy = p2.shift();
            points.push(cpx, cpy);
            break;
          case "c":
            points.push(cpx + p2.shift(), cpy + p2.shift(), cpx + p2.shift(), cpy + p2.shift());
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "C";
            points.push(cpx, cpy);
            break;
          case "S":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca2[ca2.length - 1];
            if (prevCmd.command === "C") {
              ctlPtx = cpx + (cpx - prevCmd.points[2]);
              ctlPty = cpy + (cpy - prevCmd.points[3]);
            }
            points.push(ctlPtx, ctlPty, p2.shift(), p2.shift());
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "C";
            points.push(cpx, cpy);
            break;
          case "s":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca2[ca2.length - 1];
            if (prevCmd.command === "C") {
              ctlPtx = cpx + (cpx - prevCmd.points[2]);
              ctlPty = cpy + (cpy - prevCmd.points[3]);
            }
            points.push(ctlPtx, ctlPty, cpx + p2.shift(), cpy + p2.shift());
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "C";
            points.push(cpx, cpy);
            break;
          case "Q":
            points.push(p2.shift(), p2.shift());
            cpx = p2.shift();
            cpy = p2.shift();
            points.push(cpx, cpy);
            break;
          case "q":
            points.push(cpx + p2.shift(), cpy + p2.shift());
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "Q";
            points.push(cpx, cpy);
            break;
          case "T":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca2[ca2.length - 1];
            if (prevCmd.command === "Q") {
              ctlPtx = cpx + (cpx - prevCmd.points[0]);
              ctlPty = cpy + (cpy - prevCmd.points[1]);
            }
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "Q";
            points.push(ctlPtx, ctlPty, cpx, cpy);
            break;
          case "t":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca2[ca2.length - 1];
            if (prevCmd.command === "Q") {
              ctlPtx = cpx + (cpx - prevCmd.points[0]);
              ctlPty = cpy + (cpy - prevCmd.points[1]);
            }
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "Q";
            points.push(ctlPtx, ctlPty, cpx, cpy);
            break;
          case "A":
            rx = p2.shift();
            ry = p2.shift();
            psi = p2.shift();
            fa2 = p2.shift();
            fs = p2.shift();
            x1 = cpx;
            y1 = cpy;
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "A";
            points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa2, fs, rx, ry, psi);
            break;
          case "a":
            rx = p2.shift();
            ry = p2.shift();
            psi = p2.shift();
            fa2 = p2.shift();
            fs = p2.shift();
            x1 = cpx;
            y1 = cpy;
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "A";
            points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa2, fs, rx, ry, psi);
            break;
        }
        ca2.push({
          command: cmd || c,
          points,
          start: {
            x: startX,
            y: startY
          },
          pathLength: this.calcLength(startX, startY, cmd || c, points)
        });
      }
      if (c === "z" || c === "Z") {
        ca2.push({
          command: "z",
          points: [],
          start: void 0,
          pathLength: 0
        });
      }
    }
    return ca2;
  }
  static calcLength(x2, y2, cmd, points) {
    let len, p1, p2, t2;
    const path = Path;
    switch (cmd) {
      case "L":
        return path.getLineLength(x2, y2, points[0], points[1]);
      case "C":
        return (0, BezierFunctions_1.getCubicArcLength)([x2, points[0], points[2], points[4]], [y2, points[1], points[3], points[5]], 1);
      case "Q":
        return (0, BezierFunctions_1.getQuadraticArcLength)([x2, points[0], points[2]], [y2, points[1], points[3]], 1);
      case "A":
        len = 0;
        const start = points[4];
        const dTheta = points[5];
        const end = points[4] + dTheta;
        let inc = Math.PI / 180;
        if (Math.abs(start - end) < inc) {
          inc = Math.abs(start - end);
        }
        p1 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
        if (dTheta < 0) {
          for (t2 = start - inc; t2 > end; t2 -= inc) {
            p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t2, 0);
            len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
        } else {
          for (t2 = start + inc; t2 < end; t2 += inc) {
            p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t2, 0);
            len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
        }
        p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
        len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
        return len;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(x1, y1, x2, y2, fa2, fs, rx, ry, psiDeg) {
    const psi = psiDeg * (Math.PI / 180);
    const xp = Math.cos(psi) * (x1 - x2) / 2 + Math.sin(psi) * (y1 - y2) / 2;
    const yp = -1 * Math.sin(psi) * (x1 - x2) / 2 + Math.cos(psi) * (y1 - y2) / 2;
    const lambda = xp * xp / (rx * rx) + yp * yp / (ry * ry);
    if (lambda > 1) {
      rx *= Math.sqrt(lambda);
      ry *= Math.sqrt(lambda);
    }
    let f2 = Math.sqrt((rx * rx * (ry * ry) - rx * rx * (yp * yp) - ry * ry * (xp * xp)) / (rx * rx * (yp * yp) + ry * ry * (xp * xp)));
    if (fa2 === fs) {
      f2 *= -1;
    }
    if (isNaN(f2)) {
      f2 = 0;
    }
    const cxp = f2 * rx * yp / ry;
    const cyp = f2 * -ry * xp / rx;
    const cx = (x1 + x2) / 2 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
    const cy = (y1 + y2) / 2 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;
    const vMag = function(v3) {
      return Math.sqrt(v3[0] * v3[0] + v3[1] * v3[1]);
    };
    const vRatio = function(u3, v3) {
      return (u3[0] * v3[0] + u3[1] * v3[1]) / (vMag(u3) * vMag(v3));
    };
    const vAngle = function(u3, v3) {
      return (u3[0] * v3[1] < u3[1] * v3[0] ? -1 : 1) * Math.acos(vRatio(u3, v3));
    };
    const theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
    const u2 = [(xp - cxp) / rx, (yp - cyp) / ry];
    const v2 = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
    let dTheta = vAngle(u2, v2);
    if (vRatio(u2, v2) <= -1) {
      dTheta = Math.PI;
    }
    if (vRatio(u2, v2) >= 1) {
      dTheta = 0;
    }
    if (fs === 0 && dTheta > 0) {
      dTheta = dTheta - 2 * Math.PI;
    }
    if (fs === 1 && dTheta < 0) {
      dTheta = dTheta + 2 * Math.PI;
    }
    return [cx, cy, rx, ry, theta, dTheta, psi, fs];
  }
}
Path$1.Path = Path;
Path.prototype.className = "Path";
Path.prototype._attrsAffectingSize = ["data"];
(0, Global_1$e._registerNode)(Path);
Factory_1$t.Factory.addGetterSetter(Path, "data");
Object.defineProperty(Arrow$1, "__esModule", { value: true });
Arrow$1.Arrow = void 0;
const Factory_1$s = Factory;
const Line_1$1 = Line$2;
const Validators_1$s = Validators;
const Global_1$d = Global;
const Path_1$2 = Path$1;
class Arrow extends Line_1$1.Line {
  _sceneFunc(ctx) {
    super._sceneFunc(ctx);
    const PI2 = Math.PI * 2;
    const points = this.points();
    let tp = points;
    const fromTension = this.tension() !== 0 && points.length > 4;
    if (fromTension) {
      tp = this.getTensionPoints();
    }
    const length = this.pointerLength();
    const n2 = points.length;
    let dx, dy;
    if (fromTension) {
      const lp = [
        tp[tp.length - 4],
        tp[tp.length - 3],
        tp[tp.length - 2],
        tp[tp.length - 1],
        points[n2 - 2],
        points[n2 - 1]
      ];
      const lastLength = Path_1$2.Path.calcLength(tp[tp.length - 4], tp[tp.length - 3], "C", lp);
      const previous = Path_1$2.Path.getPointOnQuadraticBezier(Math.min(1, 1 - length / lastLength), lp[0], lp[1], lp[2], lp[3], lp[4], lp[5]);
      dx = points[n2 - 2] - previous.x;
      dy = points[n2 - 1] - previous.y;
    } else {
      dx = points[n2 - 2] - points[n2 - 4];
      dy = points[n2 - 1] - points[n2 - 3];
    }
    const radians = (Math.atan2(dy, dx) + PI2) % PI2;
    const width = this.pointerWidth();
    if (this.pointerAtEnding()) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(points[n2 - 2], points[n2 - 1]);
      ctx.rotate(radians);
      ctx.moveTo(0, 0);
      ctx.lineTo(-length, width / 2);
      ctx.lineTo(-length, -width / 2);
      ctx.closePath();
      ctx.restore();
      this.__fillStroke(ctx);
    }
    if (this.pointerAtBeginning()) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(points[0], points[1]);
      if (fromTension) {
        dx = (tp[0] + tp[2]) / 2 - points[0];
        dy = (tp[1] + tp[3]) / 2 - points[1];
      } else {
        dx = points[2] - points[0];
        dy = points[3] - points[1];
      }
      ctx.rotate((Math.atan2(-dy, -dx) + PI2) % PI2);
      ctx.moveTo(0, 0);
      ctx.lineTo(-length, width / 2);
      ctx.lineTo(-length, -width / 2);
      ctx.closePath();
      ctx.restore();
      this.__fillStroke(ctx);
    }
  }
  __fillStroke(ctx) {
    const isDashEnabled = this.dashEnabled();
    if (isDashEnabled) {
      this.attrs.dashEnabled = false;
      ctx.setLineDash([]);
    }
    ctx.fillStrokeShape(this);
    if (isDashEnabled) {
      this.attrs.dashEnabled = true;
    }
  }
  getSelfRect() {
    const lineRect = super.getSelfRect();
    const offset = this.pointerWidth() / 2;
    return {
      x: lineRect.x,
      y: lineRect.y - offset,
      width: lineRect.width,
      height: lineRect.height + offset * 2
    };
  }
}
Arrow$1.Arrow = Arrow;
Arrow.prototype.className = "Arrow";
(0, Global_1$d._registerNode)(Arrow);
Factory_1$s.Factory.addGetterSetter(Arrow, "pointerLength", 10, (0, Validators_1$s.getNumberValidator)());
Factory_1$s.Factory.addGetterSetter(Arrow, "pointerWidth", 10, (0, Validators_1$s.getNumberValidator)());
Factory_1$s.Factory.addGetterSetter(Arrow, "pointerAtBeginning", false);
Factory_1$s.Factory.addGetterSetter(Arrow, "pointerAtEnding", true);
var Circle$2 = {};
Object.defineProperty(Circle$2, "__esModule", { value: true });
Circle$2.Circle = void 0;
const Factory_1$r = Factory;
const Shape_1$c = Shape;
const Validators_1$r = Validators;
const Global_1$c = Global;
let Circle$1 = class Circle extends Shape_1$c.Shape {
  _sceneFunc(context) {
    context.beginPath();
    context.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, false);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(width) {
    if (this.radius() !== width / 2) {
      this.radius(width / 2);
    }
  }
  setHeight(height) {
    if (this.radius() !== height / 2) {
      this.radius(height / 2);
    }
  }
};
Circle$2.Circle = Circle$1;
Circle$1.prototype._centroid = true;
Circle$1.prototype.className = "Circle";
Circle$1.prototype._attrsAffectingSize = ["radius"];
(0, Global_1$c._registerNode)(Circle$1);
Factory_1$r.Factory.addGetterSetter(Circle$1, "radius", 0, (0, Validators_1$r.getNumberValidator)());
var Ellipse$1 = {};
Object.defineProperty(Ellipse$1, "__esModule", { value: true });
Ellipse$1.Ellipse = void 0;
const Factory_1$q = Factory;
const Shape_1$b = Shape;
const Validators_1$q = Validators;
const Global_1$b = Global;
class Ellipse extends Shape_1$b.Shape {
  _sceneFunc(context) {
    const rx = this.radiusX(), ry = this.radiusY();
    context.beginPath();
    context.save();
    if (rx !== ry) {
      context.scale(1, ry / rx);
    }
    context.arc(0, 0, rx, 0, Math.PI * 2, false);
    context.restore();
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(width) {
    this.radiusX(width / 2);
  }
  setHeight(height) {
    this.radiusY(height / 2);
  }
}
Ellipse$1.Ellipse = Ellipse;
Ellipse.prototype.className = "Ellipse";
Ellipse.prototype._centroid = true;
Ellipse.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, Global_1$b._registerNode)(Ellipse);
Factory_1$q.Factory.addComponentsGetterSetter(Ellipse, "radius", ["x", "y"]);
Factory_1$q.Factory.addGetterSetter(Ellipse, "radiusX", 0, (0, Validators_1$q.getNumberValidator)());
Factory_1$q.Factory.addGetterSetter(Ellipse, "radiusY", 0, (0, Validators_1$q.getNumberValidator)());
var Image$1 = {};
Object.defineProperty(Image$1, "__esModule", { value: true });
Image$1.Image = void 0;
const Util_1$7 = Util;
const Factory_1$p = Factory;
const Shape_1$a = Shape;
const Global_1$a = Global;
const Validators_1$p = Validators;
class Image extends Shape_1$a.Shape {
  constructor(attrs) {
    super(attrs);
    this._loadListener = () => {
      this._requestDraw();
    };
    this.on("imageChange.konva", (props) => {
      this._removeImageLoad(props.oldVal);
      this._setImageLoad();
    });
    this._setImageLoad();
  }
  _setImageLoad() {
    const image = this.image();
    if (image && image.complete) {
      return;
    }
    if (image && image.readyState === 4) {
      return;
    }
    if (image && image["addEventListener"]) {
      image["addEventListener"]("load", this._loadListener);
    }
  }
  _removeImageLoad(image) {
    if (image && image["removeEventListener"]) {
      image["removeEventListener"]("load", this._loadListener);
    }
  }
  destroy() {
    this._removeImageLoad(this.image());
    super.destroy();
    return this;
  }
  _useBufferCanvas() {
    const hasCornerRadius = !!this.cornerRadius();
    const hasShadow = this.hasShadow();
    if (hasCornerRadius && hasShadow) {
      return true;
    }
    return super._useBufferCanvas(true);
  }
  _sceneFunc(context) {
    const width = this.getWidth();
    const height = this.getHeight();
    const cornerRadius = this.cornerRadius();
    const image = this.attrs.image;
    let params;
    if (image) {
      const cropWidth = this.attrs.cropWidth;
      const cropHeight = this.attrs.cropHeight;
      if (cropWidth && cropHeight) {
        params = [
          image,
          this.cropX(),
          this.cropY(),
          cropWidth,
          cropHeight,
          0,
          0,
          width,
          height
        ];
      } else {
        params = [image, 0, 0, width, height];
      }
    }
    if (this.hasFill() || this.hasStroke() || cornerRadius) {
      context.beginPath();
      cornerRadius ? Util_1$7.Util.drawRoundedRectPath(context, width, height, cornerRadius) : context.rect(0, 0, width, height);
      context.closePath();
      context.fillStrokeShape(this);
    }
    if (image) {
      if (cornerRadius) {
        context.clip();
      }
      context.drawImage.apply(context, params);
    }
  }
  _hitFunc(context) {
    const width = this.width(), height = this.height(), cornerRadius = this.cornerRadius();
    context.beginPath();
    if (!cornerRadius) {
      context.rect(0, 0, width, height);
    } else {
      Util_1$7.Util.drawRoundedRectPath(context, width, height, cornerRadius);
    }
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    var _a2, _b2;
    return (_a2 = this.attrs.width) !== null && _a2 !== void 0 ? _a2 : (_b2 = this.image()) === null || _b2 === void 0 ? void 0 : _b2.width;
  }
  getHeight() {
    var _a2, _b2;
    return (_a2 = this.attrs.height) !== null && _a2 !== void 0 ? _a2 : (_b2 = this.image()) === null || _b2 === void 0 ? void 0 : _b2.height;
  }
  static fromURL(url, callback, onError = null) {
    const img = Util_1$7.Util.createImageElement();
    img.onload = function() {
      const image = new Image({
        image: img
      });
      callback(image);
    };
    img.onerror = onError;
    img.crossOrigin = "Anonymous";
    img.src = url;
  }
}
Image$1.Image = Image;
Image.prototype.className = "Image";
(0, Global_1$a._registerNode)(Image);
Factory_1$p.Factory.addGetterSetter(Image, "cornerRadius", 0, (0, Validators_1$p.getNumberOrArrayOfNumbersValidator)(4));
Factory_1$p.Factory.addGetterSetter(Image, "image");
Factory_1$p.Factory.addComponentsGetterSetter(Image, "crop", ["x", "y", "width", "height"]);
Factory_1$p.Factory.addGetterSetter(Image, "cropX", 0, (0, Validators_1$p.getNumberValidator)());
Factory_1$p.Factory.addGetterSetter(Image, "cropY", 0, (0, Validators_1$p.getNumberValidator)());
Factory_1$p.Factory.addGetterSetter(Image, "cropWidth", 0, (0, Validators_1$p.getNumberValidator)());
Factory_1$p.Factory.addGetterSetter(Image, "cropHeight", 0, (0, Validators_1$p.getNumberValidator)());
var Label$1 = {};
Object.defineProperty(Label$1, "__esModule", { value: true });
Label$1.Tag = Label$1.Label = void 0;
const Factory_1$o = Factory;
const Shape_1$9 = Shape;
const Group_1$1 = Group$1;
const Validators_1$o = Validators;
const Global_1$9 = Global;
const ATTR_CHANGE_LIST$2 = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "padding",
  "lineHeight",
  "text",
  "width",
  "height",
  "pointerDirection",
  "pointerWidth",
  "pointerHeight"
], CHANGE_KONVA$1 = "Change.konva", NONE$1 = "none", UP = "up", RIGHT$1 = "right", DOWN = "down", LEFT$1 = "left", attrChangeListLen$1 = ATTR_CHANGE_LIST$2.length;
class Label extends Group_1$1.Group {
  constructor(config) {
    super(config);
    this.on("add.konva", function(evt) {
      this._addListeners(evt.child);
      this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(text) {
    let that = this, n2;
    const func = function() {
      that._sync();
    };
    for (n2 = 0; n2 < attrChangeListLen$1; n2++) {
      text.on(ATTR_CHANGE_LIST$2[n2] + CHANGE_KONVA$1, func);
    }
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    let text = this.getText(), tag = this.getTag(), width, height, pointerDirection, pointerWidth, x2, y2, pointerHeight;
    if (text && tag) {
      width = text.width();
      height = text.height();
      pointerDirection = tag.pointerDirection();
      pointerWidth = tag.pointerWidth();
      pointerHeight = tag.pointerHeight();
      x2 = 0;
      y2 = 0;
      switch (pointerDirection) {
        case UP:
          x2 = width / 2;
          y2 = -1 * pointerHeight;
          break;
        case RIGHT$1:
          x2 = width + pointerWidth;
          y2 = height / 2;
          break;
        case DOWN:
          x2 = width / 2;
          y2 = height + pointerHeight;
          break;
        case LEFT$1:
          x2 = -1 * pointerWidth;
          y2 = height / 2;
          break;
      }
      tag.setAttrs({
        x: -1 * x2,
        y: -1 * y2,
        width,
        height
      });
      text.setAttrs({
        x: -1 * x2,
        y: -1 * y2
      });
    }
  }
}
Label$1.Label = Label;
Label.prototype.className = "Label";
(0, Global_1$9._registerNode)(Label);
class Tag extends Shape_1$9.Shape {
  _sceneFunc(context) {
    const width = this.width(), height = this.height(), pointerDirection = this.pointerDirection(), pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), cornerRadius = this.cornerRadius();
    let topLeft = 0;
    let topRight = 0;
    let bottomLeft = 0;
    let bottomRight = 0;
    if (typeof cornerRadius === "number") {
      topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
    } else {
      topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
      topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
      bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
      bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
    }
    context.beginPath();
    context.moveTo(topLeft, 0);
    if (pointerDirection === UP) {
      context.lineTo((width - pointerWidth) / 2, 0);
      context.lineTo(width / 2, -1 * pointerHeight);
      context.lineTo((width + pointerWidth) / 2, 0);
    }
    context.lineTo(width - topRight, 0);
    context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
    if (pointerDirection === RIGHT$1) {
      context.lineTo(width, (height - pointerHeight) / 2);
      context.lineTo(width + pointerWidth, height / 2);
      context.lineTo(width, (height + pointerHeight) / 2);
    }
    context.lineTo(width, height - bottomRight);
    context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
    if (pointerDirection === DOWN) {
      context.lineTo((width + pointerWidth) / 2, height);
      context.lineTo(width / 2, height + pointerHeight);
      context.lineTo((width - pointerWidth) / 2, height);
    }
    context.lineTo(bottomLeft, height);
    context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
    if (pointerDirection === LEFT$1) {
      context.lineTo(0, (height + pointerHeight) / 2);
      context.lineTo(-1 * pointerWidth, height / 2);
      context.lineTo(0, (height - pointerHeight) / 2);
    }
    context.lineTo(0, topLeft);
    context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getSelfRect() {
    let x2 = 0, y2 = 0, pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), direction = this.pointerDirection(), width = this.width(), height = this.height();
    if (direction === UP) {
      y2 -= pointerHeight;
      height += pointerHeight;
    } else if (direction === DOWN) {
      height += pointerHeight;
    } else if (direction === LEFT$1) {
      x2 -= pointerWidth * 1.5;
      width += pointerWidth;
    } else if (direction === RIGHT$1) {
      width += pointerWidth * 1.5;
    }
    return {
      x: x2,
      y: y2,
      width,
      height
    };
  }
}
Label$1.Tag = Tag;
Tag.prototype.className = "Tag";
(0, Global_1$9._registerNode)(Tag);
Factory_1$o.Factory.addGetterSetter(Tag, "pointerDirection", NONE$1);
Factory_1$o.Factory.addGetterSetter(Tag, "pointerWidth", 0, (0, Validators_1$o.getNumberValidator)());
Factory_1$o.Factory.addGetterSetter(Tag, "pointerHeight", 0, (0, Validators_1$o.getNumberValidator)());
Factory_1$o.Factory.addGetterSetter(Tag, "cornerRadius", 0, (0, Validators_1$o.getNumberOrArrayOfNumbersValidator)(4));
var Rect$2 = {};
Object.defineProperty(Rect$2, "__esModule", { value: true });
Rect$2.Rect = void 0;
const Factory_1$n = Factory;
const Shape_1$8 = Shape;
const Global_1$8 = Global;
const Util_1$6 = Util;
const Validators_1$n = Validators;
let Rect$1 = class Rect extends Shape_1$8.Shape {
  _sceneFunc(context) {
    const cornerRadius = this.cornerRadius(), width = this.width(), height = this.height();
    context.beginPath();
    if (!cornerRadius) {
      context.rect(0, 0, width, height);
    } else {
      Util_1$6.Util.drawRoundedRectPath(context, width, height, cornerRadius);
    }
    context.closePath();
    context.fillStrokeShape(this);
  }
};
Rect$2.Rect = Rect$1;
Rect$1.prototype.className = "Rect";
(0, Global_1$8._registerNode)(Rect$1);
Factory_1$n.Factory.addGetterSetter(Rect$1, "cornerRadius", 0, (0, Validators_1$n.getNumberOrArrayOfNumbersValidator)(4));
var RegularPolygon$1 = {};
Object.defineProperty(RegularPolygon$1, "__esModule", { value: true });
RegularPolygon$1.RegularPolygon = void 0;
const Factory_1$m = Factory;
const Shape_1$7 = Shape;
const Validators_1$m = Validators;
const Global_1$7 = Global;
class RegularPolygon extends Shape_1$7.Shape {
  _sceneFunc(context) {
    const points = this._getPoints();
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (let n2 = 1; n2 < points.length; n2++) {
      context.lineTo(points[n2].x, points[n2].y);
    }
    context.closePath();
    context.fillStrokeShape(this);
  }
  _getPoints() {
    const sides = this.attrs.sides;
    const radius = this.attrs.radius || 0;
    const points = [];
    for (let n2 = 0; n2 < sides; n2++) {
      points.push({
        x: radius * Math.sin(n2 * 2 * Math.PI / sides),
        y: -1 * radius * Math.cos(n2 * 2 * Math.PI / sides)
      });
    }
    return points;
  }
  getSelfRect() {
    const points = this._getPoints();
    let minX = points[0].x;
    let maxX = points[0].y;
    let minY = points[0].x;
    let maxY = points[0].y;
    points.forEach((point) => {
      minX = Math.min(minX, point.x);
      maxX = Math.max(maxX, point.x);
      minY = Math.min(minY, point.y);
      maxY = Math.max(maxY, point.y);
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(width) {
    this.radius(width / 2);
  }
  setHeight(height) {
    this.radius(height / 2);
  }
}
RegularPolygon$1.RegularPolygon = RegularPolygon;
RegularPolygon.prototype.className = "RegularPolygon";
RegularPolygon.prototype._centroid = true;
RegularPolygon.prototype._attrsAffectingSize = ["radius"];
(0, Global_1$7._registerNode)(RegularPolygon);
Factory_1$m.Factory.addGetterSetter(RegularPolygon, "radius", 0, (0, Validators_1$m.getNumberValidator)());
Factory_1$m.Factory.addGetterSetter(RegularPolygon, "sides", 0, (0, Validators_1$m.getNumberValidator)());
var Ring$1 = {};
Object.defineProperty(Ring$1, "__esModule", { value: true });
Ring$1.Ring = void 0;
const Factory_1$l = Factory;
const Shape_1$6 = Shape;
const Validators_1$l = Validators;
const Global_1$6 = Global;
const PIx2 = Math.PI * 2;
class Ring extends Shape_1$6.Shape {
  _sceneFunc(context) {
    context.beginPath();
    context.arc(0, 0, this.innerRadius(), 0, PIx2, false);
    context.moveTo(this.outerRadius(), 0);
    context.arc(0, 0, this.outerRadius(), PIx2, 0, true);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(width) {
    this.outerRadius(width / 2);
  }
  setHeight(height) {
    this.outerRadius(height / 2);
  }
}
Ring$1.Ring = Ring;
Ring.prototype.className = "Ring";
Ring.prototype._centroid = true;
Ring.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Global_1$6._registerNode)(Ring);
Factory_1$l.Factory.addGetterSetter(Ring, "innerRadius", 0, (0, Validators_1$l.getNumberValidator)());
Factory_1$l.Factory.addGetterSetter(Ring, "outerRadius", 0, (0, Validators_1$l.getNumberValidator)());
var Sprite$1 = {};
Object.defineProperty(Sprite$1, "__esModule", { value: true });
Sprite$1.Sprite = void 0;
const Factory_1$k = Factory;
const Shape_1$5 = Shape;
const Animation_1 = Animation$1;
const Validators_1$k = Validators;
const Global_1$5 = Global;
class Sprite extends Shape_1$5.Shape {
  constructor(config) {
    super(config);
    this._updated = true;
    this.anim = new Animation_1.Animation(() => {
      const updated = this._updated;
      this._updated = false;
      return updated;
    });
    this.on("animationChange.konva", function() {
      this.frameIndex(0);
    });
    this.on("frameIndexChange.konva", function() {
      this._updated = true;
    });
    this.on("frameRateChange.konva", function() {
      if (!this.anim.isRunning()) {
        return;
      }
      clearInterval(this.interval);
      this._setInterval();
    });
  }
  _sceneFunc(context) {
    const anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), x2 = set[ix4 + 0], y2 = set[ix4 + 1], width = set[ix4 + 2], height = set[ix4 + 3], image = this.image();
    if (this.hasFill() || this.hasStroke()) {
      context.beginPath();
      context.rect(0, 0, width, height);
      context.closePath();
      context.fillStrokeShape(this);
    }
    if (image) {
      if (offsets) {
        const offset = offsets[anim], ix2 = index * 2;
        context.drawImage(image, x2, y2, width, height, offset[ix2 + 0], offset[ix2 + 1], width, height);
      } else {
        context.drawImage(image, x2, y2, width, height, 0, 0, width, height);
      }
    }
  }
  _hitFunc(context) {
    const anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), width = set[ix4 + 2], height = set[ix4 + 3];
    context.beginPath();
    if (offsets) {
      const offset = offsets[anim];
      const ix2 = index * 2;
      context.rect(offset[ix2 + 0], offset[ix2 + 1], width, height);
    } else {
      context.rect(0, 0, width, height);
    }
    context.closePath();
    context.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(true);
  }
  _setInterval() {
    const that = this;
    this.interval = setInterval(function() {
      that._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (this.isRunning()) {
      return;
    }
    const layer = this.getLayer();
    this.anim.setLayers(layer);
    this._setInterval();
    this.anim.start();
  }
  stop() {
    this.anim.stop();
    clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    const index = this.frameIndex(), animation = this.animation(), animations = this.animations(), anim = animations[animation], len = anim.length / 4;
    if (index < len - 1) {
      this.frameIndex(index + 1);
    } else {
      this.frameIndex(0);
    }
  }
}
Sprite$1.Sprite = Sprite;
Sprite.prototype.className = "Sprite";
(0, Global_1$5._registerNode)(Sprite);
Factory_1$k.Factory.addGetterSetter(Sprite, "animation");
Factory_1$k.Factory.addGetterSetter(Sprite, "animations");
Factory_1$k.Factory.addGetterSetter(Sprite, "frameOffsets");
Factory_1$k.Factory.addGetterSetter(Sprite, "image");
Factory_1$k.Factory.addGetterSetter(Sprite, "frameIndex", 0, (0, Validators_1$k.getNumberValidator)());
Factory_1$k.Factory.addGetterSetter(Sprite, "frameRate", 17, (0, Validators_1$k.getNumberValidator)());
Factory_1$k.Factory.backCompat(Sprite, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
var Star$1 = {};
Object.defineProperty(Star$1, "__esModule", { value: true });
Star$1.Star = void 0;
const Factory_1$j = Factory;
const Shape_1$4 = Shape;
const Validators_1$j = Validators;
const Global_1$4 = Global;
class Star extends Shape_1$4.Shape {
  _sceneFunc(context) {
    const innerRadius = this.innerRadius(), outerRadius = this.outerRadius(), numPoints = this.numPoints();
    context.beginPath();
    context.moveTo(0, 0 - outerRadius);
    for (let n2 = 1; n2 < numPoints * 2; n2++) {
      const radius = n2 % 2 === 0 ? outerRadius : innerRadius;
      const x2 = radius * Math.sin(n2 * Math.PI / numPoints);
      const y2 = -1 * radius * Math.cos(n2 * Math.PI / numPoints);
      context.lineTo(x2, y2);
    }
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(width) {
    this.outerRadius(width / 2);
  }
  setHeight(height) {
    this.outerRadius(height / 2);
  }
}
Star$1.Star = Star;
Star.prototype.className = "Star";
Star.prototype._centroid = true;
Star.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Global_1$4._registerNode)(Star);
Factory_1$j.Factory.addGetterSetter(Star, "numPoints", 5, (0, Validators_1$j.getNumberValidator)());
Factory_1$j.Factory.addGetterSetter(Star, "innerRadius", 0, (0, Validators_1$j.getNumberValidator)());
Factory_1$j.Factory.addGetterSetter(Star, "outerRadius", 0, (0, Validators_1$j.getNumberValidator)());
var Text$1 = {};
Object.defineProperty(Text$1, "__esModule", { value: true });
Text$1.Text = void 0;
Text$1.stringToArray = stringToArray;
const Util_1$5 = Util;
const Factory_1$i = Factory;
const Shape_1$3 = Shape;
const Global_1$3 = Global;
const Validators_1$i = Validators;
const Global_2$2 = Global;
function stringToArray(string) {
  return [...string].reduce((acc, char, index, array) => {
    if (new RegExp("\\p{Emoji}", "u").test(char)) {
      const nextChar = array[index + 1];
      if (nextChar && new RegExp("\\p{Emoji_Modifier}|\\u200D", "u").test(nextChar)) {
        acc.push(char + nextChar);
        array[index + 1] = "";
      } else {
        acc.push(char);
      }
    } else if (new RegExp("\\p{Regional_Indicator}{2}", "u").test(char + (array[index + 1] || ""))) {
      acc.push(char + array[index + 1]);
    } else if (index > 0 && new RegExp("\\p{Mn}|\\p{Me}|\\p{Mc}", "u").test(char)) {
      acc[acc.length - 1] += char;
    } else if (char) {
      acc.push(char);
    }
    return acc;
  }, []);
}
const AUTO = "auto", CENTER = "center", INHERIT = "inherit", JUSTIFY = "justify", CHANGE_KONVA = "Change.konva", CONTEXT_2D = "2d", DASH = "-", LEFT = "left", TEXT = "text", TEXT_UPPER = "Text", TOP = "top", BOTTOM = "bottom", MIDDLE = "middle", NORMAL$1 = "normal", PX_SPACE = "px ", SPACE = " ", RIGHT = "right", RTL = "rtl", WORD = "word", CHAR = "char", NONE = "none", ELLIPSIS = "…", ATTR_CHANGE_LIST$1 = [
  "direction",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
], attrChangeListLen = ATTR_CHANGE_LIST$1.length;
function normalizeFontFamily(fontFamily) {
  return fontFamily.split(",").map((family) => {
    family = family.trim();
    const hasSpace = family.indexOf(" ") >= 0;
    const hasQuotes = family.indexOf('"') >= 0 || family.indexOf("'") >= 0;
    if (hasSpace && !hasQuotes) {
      family = `"${family}"`;
    }
    return family;
  }).join(", ");
}
let dummyContext;
function getDummyContext() {
  if (dummyContext) {
    return dummyContext;
  }
  dummyContext = Util_1$5.Util.createCanvasElement().getContext(CONTEXT_2D);
  return dummyContext;
}
function _fillFunc$1(context) {
  context.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function _strokeFunc$1(context) {
  context.setAttr("miterLimit", 2);
  context.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function checkDefaultFill(config) {
  config = config || {};
  if (!config.fillLinearGradientColorStops && !config.fillRadialGradientColorStops && !config.fillPatternImage) {
    config.fill = config.fill || "black";
  }
  return config;
}
class Text extends Shape_1$3.Shape {
  constructor(config) {
    super(checkDefaultFill(config));
    this._partialTextX = 0;
    this._partialTextY = 0;
    for (let n2 = 0; n2 < attrChangeListLen; n2++) {
      this.on(ATTR_CHANGE_LIST$1[n2] + CHANGE_KONVA, this._setTextData);
    }
    this._setTextData();
  }
  _sceneFunc(context) {
    const textArr = this.textArr, textArrLen = textArr.length;
    if (!this.text()) {
      return;
    }
    let padding = this.padding(), fontSize = this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, verticalAlign = this.verticalAlign(), direction = this.direction(), alignY = 0, align = this.align(), totalWidth = this.getWidth(), letterSpacing = this.letterSpacing(), fill = this.fill(), textDecoration = this.textDecoration(), shouldUnderline = textDecoration.indexOf("underline") !== -1, shouldLineThrough = textDecoration.indexOf("line-through") !== -1, n2;
    direction = direction === INHERIT ? context.direction : direction;
    let translateY = lineHeightPx / 2;
    let baseline = MIDDLE;
    if (Global_1$3.Konva._fixTextRendering) {
      const metrics = this.measureSize("M");
      baseline = "alphabetic";
      translateY = (metrics.fontBoundingBoxAscent - metrics.fontBoundingBoxDescent) / 2 + lineHeightPx / 2;
    }
    if (direction === RTL) {
      context.setAttr("direction", direction);
    }
    context.setAttr("font", this._getContextFont());
    context.setAttr("textBaseline", baseline);
    context.setAttr("textAlign", LEFT);
    if (verticalAlign === MIDDLE) {
      alignY = (this.getHeight() - textArrLen * lineHeightPx - padding * 2) / 2;
    } else if (verticalAlign === BOTTOM) {
      alignY = this.getHeight() - textArrLen * lineHeightPx - padding * 2;
    }
    context.translate(padding, alignY + padding);
    for (n2 = 0; n2 < textArrLen; n2++) {
      let lineTranslateX = 0;
      let lineTranslateY = 0;
      const obj = textArr[n2], text = obj.text, width = obj.width, lastLine = obj.lastInParagraph;
      context.save();
      if (align === RIGHT) {
        lineTranslateX += totalWidth - width - padding * 2;
      } else if (align === CENTER) {
        lineTranslateX += (totalWidth - width - padding * 2) / 2;
      }
      if (shouldUnderline) {
        context.save();
        context.beginPath();
        const yOffset = Global_1$3.Konva._fixTextRendering ? Math.round(fontSize / 4) : Math.round(fontSize / 2);
        const x2 = lineTranslateX;
        const y2 = translateY + lineTranslateY + yOffset;
        context.moveTo(x2, y2);
        const lineWidth = align === JUSTIFY && !lastLine ? totalWidth - padding * 2 : width;
        context.lineTo(x2 + Math.round(lineWidth), y2);
        context.lineWidth = fontSize / 15;
        const gradient = this._getLinearGradient();
        context.strokeStyle = gradient || fill;
        context.stroke();
        context.restore();
      }
      if (shouldLineThrough) {
        context.save();
        context.beginPath();
        const yOffset = Global_1$3.Konva._fixTextRendering ? -Math.round(fontSize / 4) : 0;
        context.moveTo(lineTranslateX, translateY + lineTranslateY + yOffset);
        const lineWidth = align === JUSTIFY && !lastLine ? totalWidth - padding * 2 : width;
        context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY + yOffset);
        context.lineWidth = fontSize / 15;
        const gradient = this._getLinearGradient();
        context.strokeStyle = gradient || fill;
        context.stroke();
        context.restore();
      }
      if (direction !== RTL && (letterSpacing !== 0 || align === JUSTIFY)) {
        const spacesNumber = text.split(" ").length - 1;
        const array = stringToArray(text);
        for (let li2 = 0; li2 < array.length; li2++) {
          const letter = array[li2];
          if (letter === " " && !lastLine && align === JUSTIFY) {
            lineTranslateX += (totalWidth - padding * 2 - width) / spacesNumber;
          }
          this._partialTextX = lineTranslateX;
          this._partialTextY = translateY + lineTranslateY;
          this._partialText = letter;
          context.fillStrokeShape(this);
          lineTranslateX += this.measureSize(letter).width + letterSpacing;
        }
      } else {
        if (letterSpacing !== 0) {
          context.setAttr("letterSpacing", `${letterSpacing}px`);
        }
        this._partialTextX = lineTranslateX;
        this._partialTextY = translateY + lineTranslateY;
        this._partialText = text;
        context.fillStrokeShape(this);
      }
      context.restore();
      if (textArrLen > 1) {
        translateY += lineHeightPx;
      }
    }
  }
  _hitFunc(context) {
    const width = this.getWidth(), height = this.getHeight();
    context.beginPath();
    context.rect(0, 0, width, height);
    context.closePath();
    context.fillStrokeShape(this);
  }
  setText(text) {
    const str = Util_1$5.Util._isString(text) ? text : text === null || text === void 0 ? "" : text + "";
    this._setAttr(TEXT, str);
    return this;
  }
  getWidth() {
    const isAuto = this.attrs.width === AUTO || this.attrs.width === void 0;
    return isAuto ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    const isAuto = this.attrs.height === AUTO || this.attrs.height === void 0;
    return isAuto ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    Util_1$5.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
    return this.textHeight;
  }
  measureSize(text) {
    var _a2, _b2, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    let _context = getDummyContext(), fontSize = this.fontSize(), metrics;
    _context.save();
    _context.font = this._getContextFont();
    metrics = _context.measureText(text);
    _context.restore();
    const scaleFactor = fontSize / 100;
    return {
      actualBoundingBoxAscent: (_a2 = metrics.actualBoundingBoxAscent) !== null && _a2 !== void 0 ? _a2 : 71.58203125 * scaleFactor,
      actualBoundingBoxDescent: (_b2 = metrics.actualBoundingBoxDescent) !== null && _b2 !== void 0 ? _b2 : 0,
      actualBoundingBoxLeft: (_c = metrics.actualBoundingBoxLeft) !== null && _c !== void 0 ? _c : -7.421875 * scaleFactor,
      actualBoundingBoxRight: (_d = metrics.actualBoundingBoxRight) !== null && _d !== void 0 ? _d : 75.732421875 * scaleFactor,
      alphabeticBaseline: (_e = metrics.alphabeticBaseline) !== null && _e !== void 0 ? _e : 0,
      emHeightAscent: (_f = metrics.emHeightAscent) !== null && _f !== void 0 ? _f : 100 * scaleFactor,
      emHeightDescent: (_g = metrics.emHeightDescent) !== null && _g !== void 0 ? _g : -20 * scaleFactor,
      fontBoundingBoxAscent: (_h = metrics.fontBoundingBoxAscent) !== null && _h !== void 0 ? _h : 91 * scaleFactor,
      fontBoundingBoxDescent: (_j = metrics.fontBoundingBoxDescent) !== null && _j !== void 0 ? _j : 21 * scaleFactor,
      hangingBaseline: (_k = metrics.hangingBaseline) !== null && _k !== void 0 ? _k : 72.80000305175781 * scaleFactor,
      ideographicBaseline: (_l = metrics.ideographicBaseline) !== null && _l !== void 0 ? _l : -21 * scaleFactor,
      width: metrics.width,
      height: fontSize
    };
  }
  _getContextFont() {
    return this.fontStyle() + SPACE + this.fontVariant() + SPACE + (this.fontSize() + PX_SPACE) + normalizeFontFamily(this.fontFamily());
  }
  _addTextLine(line) {
    const align = this.align();
    if (align === JUSTIFY) {
      line = line.trim();
    }
    const width = this._getTextWidth(line);
    return this.textArr.push({
      text: line,
      width,
      lastInParagraph: false
    });
  }
  _getTextWidth(text) {
    const letterSpacing = this.letterSpacing();
    const length = text.length;
    return getDummyContext().measureText(text).width + letterSpacing * length;
  }
  _setTextData() {
    let lines = this.text().split("\n"), fontSize = +this.fontSize(), textWidth = 0, lineHeightPx = this.lineHeight() * fontSize, width = this.attrs.width, height = this.attrs.height, fixedWidth = width !== AUTO && width !== void 0, fixedHeight = height !== AUTO && height !== void 0, padding = this.padding(), maxWidth = width - padding * 2, maxHeightPx = height - padding * 2, currentHeightPx = 0, wrap = this.wrap(), shouldWrap = wrap !== NONE, wrapAtWord = wrap !== CHAR && shouldWrap, shouldAddEllipsis = this.ellipsis();
    this.textArr = [];
    getDummyContext().font = this._getContextFont();
    const additionalWidth = shouldAddEllipsis ? this._getTextWidth(ELLIPSIS) : 0;
    for (let i = 0, max = lines.length; i < max; ++i) {
      let line = lines[i];
      let lineWidth = this._getTextWidth(line);
      if (fixedWidth && lineWidth > maxWidth) {
        while (line.length > 0) {
          let low = 0, high = stringToArray(line).length, match = "", matchWidth = 0;
          while (low < high) {
            const mid = low + high >>> 1, lineArray = stringToArray(line), substr = lineArray.slice(0, mid + 1).join(""), substrWidth = this._getTextWidth(substr);
            const shouldConsiderEllipsis = shouldAddEllipsis && fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx;
            const effectiveWidth = shouldConsiderEllipsis ? substrWidth + additionalWidth : substrWidth;
            if (effectiveWidth <= maxWidth) {
              low = mid + 1;
              match = substr;
              matchWidth = substrWidth;
            } else {
              high = mid;
            }
          }
          if (match) {
            if (wrapAtWord) {
              const lineArray2 = stringToArray(line);
              const matchArray = stringToArray(match);
              const nextChar = lineArray2[matchArray.length];
              const nextIsSpaceOrDash = nextChar === SPACE || nextChar === DASH;
              let wrapIndex;
              if (nextIsSpaceOrDash && matchWidth <= maxWidth) {
                wrapIndex = matchArray.length;
              } else {
                const lastSpaceIndex = matchArray.lastIndexOf(SPACE);
                const lastDashIndex = matchArray.lastIndexOf(DASH);
                wrapIndex = Math.max(lastSpaceIndex, lastDashIndex) + 1;
              }
              if (wrapIndex > 0) {
                low = wrapIndex;
                match = lineArray2.slice(0, low).join("");
                matchWidth = this._getTextWidth(match);
              }
            }
            match = match.trimRight();
            this._addTextLine(match);
            textWidth = Math.max(textWidth, matchWidth);
            currentHeightPx += lineHeightPx;
            const shouldHandleEllipsis = this._shouldHandleEllipsis(currentHeightPx);
            if (shouldHandleEllipsis) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            const lineArray = stringToArray(line);
            line = lineArray.slice(low).join("").trimLeft();
            if (line.length > 0) {
              lineWidth = this._getTextWidth(line);
              if (lineWidth <= maxWidth) {
                this._addTextLine(line);
                currentHeightPx += lineHeightPx;
                textWidth = Math.max(textWidth, lineWidth);
                break;
              }
            }
          } else {
            break;
          }
        }
      } else {
        this._addTextLine(line);
        currentHeightPx += lineHeightPx;
        textWidth = Math.max(textWidth, lineWidth);
        if (this._shouldHandleEllipsis(currentHeightPx) && i < max - 1) {
          this._tryToAddEllipsisToLastLine();
        }
      }
      if (this.textArr[this.textArr.length - 1]) {
        this.textArr[this.textArr.length - 1].lastInParagraph = true;
      }
      if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
        break;
      }
    }
    this.textHeight = fontSize;
    this.textWidth = textWidth;
  }
  _shouldHandleEllipsis(currentHeightPx) {
    const fontSize = +this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, height = this.attrs.height, fixedHeight = height !== AUTO && height !== void 0, padding = this.padding(), maxHeightPx = height - padding * 2, wrap = this.wrap(), shouldWrap = wrap !== NONE;
    return !shouldWrap || fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx;
  }
  _tryToAddEllipsisToLastLine() {
    const width = this.attrs.width, fixedWidth = width !== AUTO && width !== void 0, padding = this.padding(), maxWidth = width - padding * 2, shouldAddEllipsis = this.ellipsis();
    const lastLine = this.textArr[this.textArr.length - 1];
    if (!lastLine || !shouldAddEllipsis) {
      return;
    }
    if (fixedWidth) {
      const haveSpace = this._getTextWidth(lastLine.text + ELLIPSIS) < maxWidth;
      if (!haveSpace) {
        lastLine.text = lastLine.text.slice(0, lastLine.text.length - 3);
      }
    }
    this.textArr.splice(this.textArr.length - 1, 1);
    this._addTextLine(lastLine.text + ELLIPSIS);
  }
  getStrokeScaleEnabled() {
    return true;
  }
  _useBufferCanvas() {
    const hasLine = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1;
    const hasShadow = this.hasShadow();
    if (hasLine && hasShadow) {
      return true;
    }
    return super._useBufferCanvas();
  }
}
Text$1.Text = Text;
Text.prototype._fillFunc = _fillFunc$1;
Text.prototype._strokeFunc = _strokeFunc$1;
Text.prototype.className = TEXT_UPPER;
Text.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
(0, Global_2$2._registerNode)(Text);
Factory_1$i.Factory.overWriteSetter(Text, "width", (0, Validators_1$i.getNumberOrAutoValidator)());
Factory_1$i.Factory.overWriteSetter(Text, "height", (0, Validators_1$i.getNumberOrAutoValidator)());
Factory_1$i.Factory.addGetterSetter(Text, "direction", INHERIT);
Factory_1$i.Factory.addGetterSetter(Text, "fontFamily", "Arial");
Factory_1$i.Factory.addGetterSetter(Text, "fontSize", 12, (0, Validators_1$i.getNumberValidator)());
Factory_1$i.Factory.addGetterSetter(Text, "fontStyle", NORMAL$1);
Factory_1$i.Factory.addGetterSetter(Text, "fontVariant", NORMAL$1);
Factory_1$i.Factory.addGetterSetter(Text, "padding", 0, (0, Validators_1$i.getNumberValidator)());
Factory_1$i.Factory.addGetterSetter(Text, "align", LEFT);
Factory_1$i.Factory.addGetterSetter(Text, "verticalAlign", TOP);
Factory_1$i.Factory.addGetterSetter(Text, "lineHeight", 1, (0, Validators_1$i.getNumberValidator)());
Factory_1$i.Factory.addGetterSetter(Text, "wrap", WORD);
Factory_1$i.Factory.addGetterSetter(Text, "ellipsis", false, (0, Validators_1$i.getBooleanValidator)());
Factory_1$i.Factory.addGetterSetter(Text, "letterSpacing", 0, (0, Validators_1$i.getNumberValidator)());
Factory_1$i.Factory.addGetterSetter(Text, "text", "", (0, Validators_1$i.getStringValidator)());
Factory_1$i.Factory.addGetterSetter(Text, "textDecoration", "");
var TextPath$1 = {};
Object.defineProperty(TextPath$1, "__esModule", { value: true });
TextPath$1.TextPath = void 0;
const Util_1$4 = Util;
const Factory_1$h = Factory;
const Shape_1$2 = Shape;
const Path_1$1 = Path$1;
const Text_1$1 = Text$1;
const Validators_1$h = Validators;
const Global_1$2 = Global;
const EMPTY_STRING = "", NORMAL = "normal";
function _fillFunc(context) {
  context.fillText(this.partialText, 0, 0);
}
function _strokeFunc(context) {
  context.strokeText(this.partialText, 0, 0);
}
class TextPath extends Shape_1$2.Shape {
  constructor(config) {
    super(config);
    this.dummyCanvas = Util_1$4.Util.createCanvasElement();
    this.dataArray = [];
    this._readDataAttribute();
    this.on("dataChange.konva", function() {
      this._readDataAttribute();
      this._setTextData();
    });
    this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData);
    this._setTextData();
  }
  _getTextPathLength() {
    return Path_1$1.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(length) {
    if (!this.attrs.data) {
      return null;
    }
    const totalLength = this.pathLength;
    if (length - 1 > totalLength) {
      return null;
    }
    return Path_1$1.Path.getPointAtLengthOfDataArray(length, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = Path_1$1.Path.parsePathData(this.attrs.data);
    this.pathLength = this._getTextPathLength();
  }
  _sceneFunc(context) {
    context.setAttr("font", this._getContextFont());
    context.setAttr("textBaseline", this.textBaseline());
    context.setAttr("textAlign", "left");
    context.save();
    const textDecoration = this.textDecoration();
    const fill = this.fill();
    const fontSize = this.fontSize();
    const glyphInfo = this.glyphInfo;
    if (textDecoration === "underline") {
      context.beginPath();
    }
    for (let i = 0; i < glyphInfo.length; i++) {
      context.save();
      const p0 = glyphInfo[i].p0;
      context.translate(p0.x, p0.y);
      context.rotate(glyphInfo[i].rotation);
      this.partialText = glyphInfo[i].text;
      context.fillStrokeShape(this);
      if (textDecoration === "underline") {
        if (i === 0) {
          context.moveTo(0, fontSize / 2 + 1);
        }
        context.lineTo(fontSize, fontSize / 2 + 1);
      }
      context.restore();
    }
    if (textDecoration === "underline") {
      context.strokeStyle = fill;
      context.lineWidth = fontSize / 20;
      context.stroke();
    }
    context.restore();
  }
  _hitFunc(context) {
    context.beginPath();
    const glyphInfo = this.glyphInfo;
    if (glyphInfo.length >= 1) {
      const p0 = glyphInfo[0].p0;
      context.moveTo(p0.x, p0.y);
    }
    for (let i = 0; i < glyphInfo.length; i++) {
      const p1 = glyphInfo[i].p1;
      context.lineTo(p1.x, p1.y);
    }
    context.setAttr("lineWidth", this.fontSize());
    context.setAttr("strokeStyle", this.colorKey);
    context.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    Util_1$4.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
    return this.textHeight;
  }
  setText(text) {
    return Text_1$1.Text.prototype.setText.call(this, text);
  }
  _getContextFont() {
    return Text_1$1.Text.prototype._getContextFont.call(this);
  }
  _getTextSize(text) {
    const dummyCanvas = this.dummyCanvas;
    const _context = dummyCanvas.getContext("2d");
    _context.save();
    _context.font = this._getContextFont();
    const metrics = _context.measureText(text);
    _context.restore();
    return {
      width: metrics.width,
      height: parseInt(`${this.fontSize()}`, 10)
    };
  }
  _setTextData() {
    const { width, height } = this._getTextSize(this.attrs.text);
    this.textWidth = width;
    this.textHeight = height;
    this.glyphInfo = [];
    if (!this.attrs.data) {
      return null;
    }
    const letterSpacing = this.letterSpacing();
    const align = this.align();
    const kerningFunc = this.kerningFunc();
    const textWidth = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * letterSpacing, 0);
    let offset = 0;
    if (align === "center") {
      offset = Math.max(0, this.pathLength / 2 - textWidth / 2);
    }
    if (align === "right") {
      offset = Math.max(0, this.pathLength - textWidth);
    }
    const charArr = (0, Text_1$1.stringToArray)(this.text());
    let offsetToGlyph = offset;
    for (let i = 0; i < charArr.length; i++) {
      const charStartPoint = this._getPointAtLength(offsetToGlyph);
      if (!charStartPoint)
        return;
      let glyphWidth = this._getTextSize(charArr[i]).width + letterSpacing;
      if (charArr[i] === " " && align === "justify") {
        const numberOfSpaces = this.text().split(" ").length - 1;
        glyphWidth += (this.pathLength - textWidth) / numberOfSpaces;
      }
      const charEndPoint = this._getPointAtLength(offsetToGlyph + glyphWidth);
      if (!charEndPoint)
        return;
      const width2 = Path_1$1.Path.getLineLength(charStartPoint.x, charStartPoint.y, charEndPoint.x, charEndPoint.y);
      let kern = 0;
      if (kerningFunc) {
        try {
          kern = kerningFunc(charArr[i - 1], charArr[i]) * this.fontSize();
        } catch (e) {
          kern = 0;
        }
      }
      charStartPoint.x += kern;
      charEndPoint.x += kern;
      this.textWidth += kern;
      const midpoint = Path_1$1.Path.getPointOnLine(kern + width2 / 2, charStartPoint.x, charStartPoint.y, charEndPoint.x, charEndPoint.y);
      const rotation = Math.atan2(charEndPoint.y - charStartPoint.y, charEndPoint.x - charStartPoint.x);
      this.glyphInfo.push({
        transposeX: midpoint.x,
        transposeY: midpoint.y,
        text: charArr[i],
        rotation,
        p0: charStartPoint,
        p1: charEndPoint
      });
      offsetToGlyph += glyphWidth;
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    const points = [];
    this.glyphInfo.forEach(function(info) {
      points.push(info.p0.x);
      points.push(info.p0.y);
      points.push(info.p1.x);
      points.push(info.p1.y);
    });
    let minX = points[0] || 0;
    let maxX = points[0] || 0;
    let minY = points[1] || 0;
    let maxY = points[1] || 0;
    let x2, y2;
    for (let i = 0; i < points.length / 2; i++) {
      x2 = points[i * 2];
      y2 = points[i * 2 + 1];
      minX = Math.min(minX, x2);
      maxX = Math.max(maxX, x2);
      minY = Math.min(minY, y2);
      maxY = Math.max(maxY, y2);
    }
    const fontSize = this.fontSize();
    return {
      x: minX - fontSize / 2,
      y: minY - fontSize / 2,
      width: maxX - minX + fontSize,
      height: maxY - minY + fontSize
    };
  }
  destroy() {
    Util_1$4.Util.releaseCanvas(this.dummyCanvas);
    return super.destroy();
  }
}
TextPath$1.TextPath = TextPath;
TextPath.prototype._fillFunc = _fillFunc;
TextPath.prototype._strokeFunc = _strokeFunc;
TextPath.prototype._fillFuncHit = _fillFunc;
TextPath.prototype._strokeFuncHit = _strokeFunc;
TextPath.prototype.className = "TextPath";
TextPath.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, Global_1$2._registerNode)(TextPath);
Factory_1$h.Factory.addGetterSetter(TextPath, "data");
Factory_1$h.Factory.addGetterSetter(TextPath, "fontFamily", "Arial");
Factory_1$h.Factory.addGetterSetter(TextPath, "fontSize", 12, (0, Validators_1$h.getNumberValidator)());
Factory_1$h.Factory.addGetterSetter(TextPath, "fontStyle", NORMAL);
Factory_1$h.Factory.addGetterSetter(TextPath, "align", "left");
Factory_1$h.Factory.addGetterSetter(TextPath, "letterSpacing", 0, (0, Validators_1$h.getNumberValidator)());
Factory_1$h.Factory.addGetterSetter(TextPath, "textBaseline", "middle");
Factory_1$h.Factory.addGetterSetter(TextPath, "fontVariant", NORMAL);
Factory_1$h.Factory.addGetterSetter(TextPath, "text", EMPTY_STRING);
Factory_1$h.Factory.addGetterSetter(TextPath, "textDecoration", "");
Factory_1$h.Factory.addGetterSetter(TextPath, "kerningFunc", void 0);
var Transformer$2 = {};
Object.defineProperty(Transformer$2, "__esModule", { value: true });
Transformer$2.Transformer = void 0;
const Util_1$3 = Util;
const Factory_1$g = Factory;
const Node_1$f = Node$1;
const Shape_1$1 = Shape;
const Rect_1$1 = Rect$2;
const Group_1 = Group$1;
const Global_1$1 = Global;
const Validators_1$g = Validators;
const Global_2$1 = Global;
const EVENTS_NAME = "tr-konva";
const ATTR_CHANGE_LIST = [
  "resizeEnabledChange",
  "rotateAnchorOffsetChange",
  "rotateEnabledChange",
  "enabledAnchorsChange",
  "anchorSizeChange",
  "borderEnabledChange",
  "borderStrokeChange",
  "borderStrokeWidthChange",
  "borderDashChange",
  "anchorStrokeChange",
  "anchorStrokeWidthChange",
  "anchorFillChange",
  "anchorCornerRadiusChange",
  "ignoreStrokeChange",
  "anchorStyleFuncChange"
].map((e) => e + `.${EVENTS_NAME}`).join(" ");
const NODES_RECT = "nodesRect";
const TRANSFORM_CHANGE_STR = [
  "widthChange",
  "heightChange",
  "scaleXChange",
  "scaleYChange",
  "skewXChange",
  "skewYChange",
  "rotationChange",
  "offsetXChange",
  "offsetYChange",
  "transformsEnabledChange",
  "strokeWidthChange"
];
const ANGLES = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
};
const TOUCH_DEVICE = "ontouchstart" in Global_1$1.Konva._global;
function getCursor(anchorName, rad, rotateCursor) {
  if (anchorName === "rotater") {
    return rotateCursor;
  }
  rad += Util_1$3.Util.degToRad(ANGLES[anchorName] || 0);
  const angle = (Util_1$3.Util.radToDeg(rad) % 360 + 360) % 360;
  if (Util_1$3.Util._inRange(angle, 315 + 22.5, 360) || Util_1$3.Util._inRange(angle, 0, 22.5)) {
    return "ns-resize";
  } else if (Util_1$3.Util._inRange(angle, 45 - 22.5, 45 + 22.5)) {
    return "nesw-resize";
  } else if (Util_1$3.Util._inRange(angle, 90 - 22.5, 90 + 22.5)) {
    return "ew-resize";
  } else if (Util_1$3.Util._inRange(angle, 135 - 22.5, 135 + 22.5)) {
    return "nwse-resize";
  } else if (Util_1$3.Util._inRange(angle, 180 - 22.5, 180 + 22.5)) {
    return "ns-resize";
  } else if (Util_1$3.Util._inRange(angle, 225 - 22.5, 225 + 22.5)) {
    return "nesw-resize";
  } else if (Util_1$3.Util._inRange(angle, 270 - 22.5, 270 + 22.5)) {
    return "ew-resize";
  } else if (Util_1$3.Util._inRange(angle, 315 - 22.5, 315 + 22.5)) {
    return "nwse-resize";
  } else {
    Util_1$3.Util.error("Transformer has unknown angle for cursor detection: " + angle);
    return "pointer";
  }
}
const ANCHORS_NAMES = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
];
function getCenter(shape) {
  return {
    x: shape.x + shape.width / 2 * Math.cos(shape.rotation) + shape.height / 2 * Math.sin(-shape.rotation),
    y: shape.y + shape.height / 2 * Math.cos(shape.rotation) + shape.width / 2 * Math.sin(shape.rotation)
  };
}
function rotateAroundPoint(shape, angleRad, point) {
  const x2 = point.x + (shape.x - point.x) * Math.cos(angleRad) - (shape.y - point.y) * Math.sin(angleRad);
  const y2 = point.y + (shape.x - point.x) * Math.sin(angleRad) + (shape.y - point.y) * Math.cos(angleRad);
  return {
    ...shape,
    rotation: shape.rotation + angleRad,
    x: x2,
    y: y2
  };
}
function rotateAroundCenter(shape, deltaRad) {
  const center = getCenter(shape);
  return rotateAroundPoint(shape, deltaRad, center);
}
function getSnap(snaps, newRotationRad, tol) {
  let snapped = newRotationRad;
  for (let i = 0; i < snaps.length; i++) {
    const angle = Global_1$1.Konva.getAngle(snaps[i]);
    const absDiff = Math.abs(angle - newRotationRad) % (Math.PI * 2);
    const dif = Math.min(absDiff, Math.PI * 2 - absDiff);
    if (dif < tol) {
      snapped = angle;
    }
  }
  return snapped;
}
let activeTransformersCount = 0;
let Transformer$1 = class Transformer extends Group_1.Group {
  constructor(config) {
    super(config);
    this._movingAnchorName = null;
    this._transforming = false;
    this._createElements();
    this._handleMouseMove = this._handleMouseMove.bind(this);
    this._handleMouseUp = this._handleMouseUp.bind(this);
    this.update = this.update.bind(this);
    this.on(ATTR_CHANGE_LIST, this.update);
    if (this.getNode()) {
      this.update();
    }
  }
  attachTo(node) {
    this.setNode(node);
    return this;
  }
  setNode(node) {
    Util_1$3.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.");
    return this.setNodes([node]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return EVENTS_NAME + this._id;
  }
  setNodes(nodes = []) {
    if (this._nodes && this._nodes.length) {
      this.detach();
    }
    const filteredNodes = nodes.filter((node) => {
      if (node.isAncestorOf(this)) {
        Util_1$3.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach");
        return false;
      }
      return true;
    });
    this._nodes = nodes = filteredNodes;
    if (nodes.length === 1 && this.useSingleNodeRotation()) {
      this.rotation(nodes[0].getAbsoluteRotation());
    } else {
      this.rotation(0);
    }
    this._nodes.forEach((node) => {
      const onChange = () => {
        if (this.nodes().length === 1 && this.useSingleNodeRotation()) {
          this.rotation(this.nodes()[0].getAbsoluteRotation());
        }
        this._resetTransformCache();
        if (!this._transforming && !this.isDragging()) {
          this.update();
        }
      };
      if (node._attrsAffectingSize.length) {
        const additionalEvents = node._attrsAffectingSize.map((prop) => prop + "Change." + this._getEventNamespace()).join(" ");
        node.on(additionalEvents, onChange);
      }
      node.on(TRANSFORM_CHANGE_STR.map((e) => e + `.${this._getEventNamespace()}`).join(" "), onChange);
      node.on(`absoluteTransformChange.${this._getEventNamespace()}`, onChange);
      this._proxyDrag(node);
    });
    this._resetTransformCache();
    const elementsCreated = !!this.findOne(".top-left");
    if (elementsCreated) {
      this.update();
    }
    return this;
  }
  _proxyDrag(node) {
    let lastPos;
    node.on(`dragstart.${this._getEventNamespace()}`, (e) => {
      lastPos = node.getAbsolutePosition();
      if (!this.isDragging() && node !== this.findOne(".back")) {
        this.startDrag(e, false);
      }
    });
    node.on(`dragmove.${this._getEventNamespace()}`, (e) => {
      if (!lastPos) {
        return;
      }
      const abs = node.getAbsolutePosition();
      const dx = abs.x - lastPos.x;
      const dy = abs.y - lastPos.y;
      this.nodes().forEach((otherNode) => {
        if (otherNode === node) {
          return;
        }
        if (otherNode.isDragging()) {
          return;
        }
        const otherAbs = otherNode.getAbsolutePosition();
        otherNode.setAbsolutePosition({
          x: otherAbs.x + dx,
          y: otherAbs.y + dy
        });
        otherNode.startDrag(e);
      });
      lastPos = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    if (this._nodes) {
      this._nodes.forEach((node) => {
        node.off("." + this._getEventNamespace());
      });
    }
    this._nodes = [];
    this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(NODES_RECT);
    this._clearCache("transform");
    this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(NODES_RECT, this.__getNodeRect);
  }
  __getNodeShape(node, rot = this.rotation(), relative) {
    const rect = node.getClientRect({
      skipTransform: true,
      skipShadow: true,
      skipStroke: this.ignoreStroke()
    });
    const absScale = node.getAbsoluteScale(relative);
    const absPos = node.getAbsolutePosition(relative);
    const dx = rect.x * absScale.x - node.offsetX() * absScale.x;
    const dy = rect.y * absScale.y - node.offsetY() * absScale.y;
    const rotation = (Global_1$1.Konva.getAngle(node.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2);
    const box = {
      x: absPos.x + dx * Math.cos(rotation) + dy * Math.sin(-rotation),
      y: absPos.y + dy * Math.cos(rotation) + dx * Math.sin(rotation),
      width: rect.width * absScale.x,
      height: rect.height * absScale.y,
      rotation
    };
    return rotateAroundPoint(box, -Global_1$1.Konva.getAngle(rot), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    const node = this.getNode();
    if (!node) {
      return {
        x: -1e8,
        y: -1e8,
        width: 0,
        height: 0,
        rotation: 0
      };
    }
    const totalPoints = [];
    this.nodes().map((node2) => {
      const box = node2.getClientRect({
        skipTransform: true,
        skipShadow: true,
        skipStroke: this.ignoreStroke()
      });
      const points = [
        { x: box.x, y: box.y },
        { x: box.x + box.width, y: box.y },
        { x: box.x + box.width, y: box.y + box.height },
        { x: box.x, y: box.y + box.height }
      ];
      const trans = node2.getAbsoluteTransform();
      points.forEach(function(point) {
        const transformed = trans.point(point);
        totalPoints.push(transformed);
      });
    });
    const tr = new Util_1$3.Transform();
    tr.rotate(-Global_1$1.Konva.getAngle(this.rotation()));
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    totalPoints.forEach(function(point) {
      const transformed = tr.point(point);
      if (minX === void 0) {
        minX = maxX = transformed.x;
        minY = maxY = transformed.y;
      }
      minX = Math.min(minX, transformed.x);
      minY = Math.min(minY, transformed.y);
      maxX = Math.max(maxX, transformed.x);
      maxY = Math.max(maxY, transformed.y);
    });
    tr.invert();
    const p2 = tr.point({ x: minX, y: minY });
    return {
      x: p2.x,
      y: p2.y,
      width: maxX - minX,
      height: maxY - minY,
      rotation: Global_1$1.Konva.getAngle(this.rotation())
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack();
    ANCHORS_NAMES.forEach((name) => {
      this._createAnchor(name);
    });
    this._createAnchor("rotater");
  }
  _createAnchor(name) {
    const anchor = new Rect_1$1.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: name + " _anchor",
      dragDistance: 0,
      draggable: true,
      hitStrokeWidth: TOUCH_DEVICE ? 10 : "auto"
    });
    const self2 = this;
    anchor.on("mousedown touchstart", function(e) {
      self2._handleMouseDown(e);
    });
    anchor.on("dragstart", (e) => {
      anchor.stopDrag();
      e.cancelBubble = true;
    });
    anchor.on("dragend", (e) => {
      e.cancelBubble = true;
    });
    anchor.on("mouseenter", () => {
      const rad = Global_1$1.Konva.getAngle(this.rotation());
      const rotateCursor = this.rotateAnchorCursor();
      const cursor = getCursor(name, rad, rotateCursor);
      anchor.getStage().content && (anchor.getStage().content.style.cursor = cursor);
      this._cursorChange = true;
    });
    anchor.on("mouseout", () => {
      anchor.getStage().content && (anchor.getStage().content.style.cursor = "");
      this._cursorChange = false;
    });
    this.add(anchor);
  }
  _createBack() {
    const back = new Shape_1$1.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: true,
      sceneFunc(ctx, shape) {
        const tr = shape.getParent();
        const padding = tr.padding();
        ctx.beginPath();
        ctx.rect(-padding, -padding, shape.width() + padding * 2, shape.height() + padding * 2);
        ctx.moveTo(shape.width() / 2, -padding);
        if (tr.rotateEnabled() && tr.rotateLineVisible()) {
          ctx.lineTo(shape.width() / 2, -tr.rotateAnchorOffset() * Util_1$3.Util._sign(shape.height()) - padding);
        }
        ctx.fillStrokeShape(shape);
      },
      hitFunc: (ctx, shape) => {
        if (!this.shouldOverdrawWholeArea()) {
          return;
        }
        const padding = this.padding();
        ctx.beginPath();
        ctx.rect(-padding, -padding, shape.width() + padding * 2, shape.height() + padding * 2);
        ctx.fillStrokeShape(shape);
      }
    });
    this.add(back);
    this._proxyDrag(back);
    back.on("dragstart", (e) => {
      e.cancelBubble = true;
    });
    back.on("dragmove", (e) => {
      e.cancelBubble = true;
    });
    back.on("dragend", (e) => {
      e.cancelBubble = true;
    });
    this.on("dragmove", (e) => {
      this.update();
    });
  }
  _handleMouseDown(e) {
    if (this._transforming) {
      return;
    }
    this._movingAnchorName = e.target.name().split(" ")[0];
    const attrs = this._getNodeRect();
    const width = attrs.width;
    const height = attrs.height;
    const hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    this.sin = Math.abs(height / hypotenuse);
    this.cos = Math.abs(width / hypotenuse);
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", this._handleMouseMove);
      window.addEventListener("touchmove", this._handleMouseMove);
      window.addEventListener("mouseup", this._handleMouseUp, true);
      window.addEventListener("touchend", this._handleMouseUp, true);
    }
    this._transforming = true;
    const ap = e.target.getAbsolutePosition();
    const pos = e.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: pos.x - ap.x,
      y: pos.y - ap.y
    };
    activeTransformersCount++;
    this._fire("transformstart", { evt: e.evt, target: this.getNode() });
    this._nodes.forEach((target) => {
      target._fire("transformstart", { evt: e.evt, target });
    });
  }
  _handleMouseMove(e) {
    let x2, y2, newHypotenuse;
    const anchorNode = this.findOne("." + this._movingAnchorName);
    const stage = anchorNode.getStage();
    stage.setPointersPositions(e);
    const pp = stage.getPointerPosition();
    let newNodePos = {
      x: pp.x - this._anchorDragOffset.x,
      y: pp.y - this._anchorDragOffset.y
    };
    const oldAbs = anchorNode.getAbsolutePosition();
    if (this.anchorDragBoundFunc()) {
      newNodePos = this.anchorDragBoundFunc()(oldAbs, newNodePos, e);
    }
    anchorNode.setAbsolutePosition(newNodePos);
    const newAbs = anchorNode.getAbsolutePosition();
    if (oldAbs.x === newAbs.x && oldAbs.y === newAbs.y) {
      return;
    }
    if (this._movingAnchorName === "rotater") {
      const attrs = this._getNodeRect();
      x2 = anchorNode.x() - attrs.width / 2;
      y2 = -anchorNode.y() + attrs.height / 2;
      let delta = Math.atan2(-y2, x2) + Math.PI / 2;
      if (attrs.height < 0) {
        delta -= Math.PI;
      }
      const oldRotation = Global_1$1.Konva.getAngle(this.rotation());
      const newRotation = oldRotation + delta;
      const tol = Global_1$1.Konva.getAngle(this.rotationSnapTolerance());
      const snappedRot = getSnap(this.rotationSnaps(), newRotation, tol);
      const diff = snappedRot - attrs.rotation;
      const shape = rotateAroundCenter(attrs, diff);
      this._fitNodesInto(shape, e);
      return;
    }
    const shiftBehavior = this.shiftBehavior();
    let keepProportion;
    if (shiftBehavior === "inverted") {
      keepProportion = this.keepRatio() && !e.shiftKey;
    } else if (shiftBehavior === "none") {
      keepProportion = this.keepRatio();
    } else {
      keepProportion = this.keepRatio() || e.shiftKey;
    }
    let centeredScaling = this.centeredScaling() || e.altKey;
    if (this._movingAnchorName === "top-left") {
      if (keepProportion) {
        const comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-right").x(),
          y: this.findOne(".bottom-right").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
        const reverseX = this.findOne(".top-left").x() > comparePoint.x ? -1 : 1;
        const reverseY = this.findOne(".top-left").y() > comparePoint.y ? -1 : 1;
        x2 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        this.findOne(".top-left").x(comparePoint.x - x2);
        this.findOne(".top-left").y(comparePoint.y - y2);
      }
    } else if (this._movingAnchorName === "top-center") {
      this.findOne(".top-left").y(anchorNode.y());
    } else if (this._movingAnchorName === "top-right") {
      if (keepProportion) {
        const comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-left").x(),
          y: this.findOne(".bottom-left").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
        const reverseX = this.findOne(".top-right").x() < comparePoint.x ? -1 : 1;
        const reverseY = this.findOne(".top-right").y() > comparePoint.y ? -1 : 1;
        x2 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        this.findOne(".top-right").x(comparePoint.x + x2);
        this.findOne(".top-right").y(comparePoint.y - y2);
      }
      var pos = anchorNode.position();
      this.findOne(".top-left").y(pos.y);
      this.findOne(".bottom-right").x(pos.x);
    } else if (this._movingAnchorName === "middle-left") {
      this.findOne(".top-left").x(anchorNode.x());
    } else if (this._movingAnchorName === "middle-right") {
      this.findOne(".bottom-right").x(anchorNode.x());
    } else if (this._movingAnchorName === "bottom-left") {
      if (keepProportion) {
        const comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-right").x(),
          y: this.findOne(".top-right").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
        const reverseX = comparePoint.x < anchorNode.x() ? -1 : 1;
        const reverseY = anchorNode.y() < comparePoint.y ? -1 : 1;
        x2 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        anchorNode.x(comparePoint.x - x2);
        anchorNode.y(comparePoint.y + y2);
      }
      pos = anchorNode.position();
      this.findOne(".top-left").x(pos.x);
      this.findOne(".bottom-right").y(pos.y);
    } else if (this._movingAnchorName === "bottom-center") {
      this.findOne(".bottom-right").y(anchorNode.y());
    } else if (this._movingAnchorName === "bottom-right") {
      if (keepProportion) {
        const comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-left").x(),
          y: this.findOne(".top-left").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
        const reverseX = this.findOne(".bottom-right").x() < comparePoint.x ? -1 : 1;
        const reverseY = this.findOne(".bottom-right").y() < comparePoint.y ? -1 : 1;
        x2 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        this.findOne(".bottom-right").x(comparePoint.x + x2);
        this.findOne(".bottom-right").y(comparePoint.y + y2);
      }
    } else {
      console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
    }
    centeredScaling = this.centeredScaling() || e.altKey;
    if (centeredScaling) {
      const topLeft = this.findOne(".top-left");
      const bottomRight = this.findOne(".bottom-right");
      const topOffsetX = topLeft.x();
      const topOffsetY = topLeft.y();
      const bottomOffsetX = this.getWidth() - bottomRight.x();
      const bottomOffsetY = this.getHeight() - bottomRight.y();
      bottomRight.move({
        x: -topOffsetX,
        y: -topOffsetY
      });
      topLeft.move({
        x: bottomOffsetX,
        y: bottomOffsetY
      });
    }
    const absPos = this.findOne(".top-left").getAbsolutePosition();
    x2 = absPos.x;
    y2 = absPos.y;
    const width = this.findOne(".bottom-right").x() - this.findOne(".top-left").x();
    const height = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
    this._fitNodesInto({
      x: x2,
      y: y2,
      width,
      height,
      rotation: Global_1$1.Konva.getAngle(this.rotation())
    }, e);
  }
  _handleMouseUp(e) {
    this._removeEvents(e);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(e) {
    var _a2;
    if (this._transforming) {
      this._transforming = false;
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", this._handleMouseMove);
        window.removeEventListener("touchmove", this._handleMouseMove);
        window.removeEventListener("mouseup", this._handleMouseUp, true);
        window.removeEventListener("touchend", this._handleMouseUp, true);
      }
      const node = this.getNode();
      activeTransformersCount--;
      this._fire("transformend", { evt: e, target: node });
      (_a2 = this.getLayer()) === null || _a2 === void 0 ? void 0 : _a2.batchDraw();
      if (node) {
        this._nodes.forEach((target) => {
          var _a3;
          target._fire("transformend", { evt: e, target });
          (_a3 = target.getLayer()) === null || _a3 === void 0 ? void 0 : _a3.batchDraw();
        });
      }
      this._movingAnchorName = null;
    }
  }
  _fitNodesInto(newAttrs, evt) {
    const oldAttrs = this._getNodeRect();
    const minSize = 1;
    if (Util_1$3.Util._inRange(newAttrs.width, -this.padding() * 2 - minSize, minSize)) {
      this.update();
      return;
    }
    if (Util_1$3.Util._inRange(newAttrs.height, -this.padding() * 2 - minSize, minSize)) {
      this.update();
      return;
    }
    const t2 = new Util_1$3.Transform();
    t2.rotate(Global_1$1.Konva.getAngle(this.rotation()));
    if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const offset = t2.point({
        x: -this.padding() * 2,
        y: 0
      });
      newAttrs.x += offset.x;
      newAttrs.y += offset.y;
      newAttrs.width += this.padding() * 2;
      this._movingAnchorName = this._movingAnchorName.replace("left", "right");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
    } else if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const offset = t2.point({
        x: this.padding() * 2,
        y: 0
      });
      this._movingAnchorName = this._movingAnchorName.replace("right", "left");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.width += this.padding() * 2;
    }
    if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const offset = t2.point({
        x: 0,
        y: -this.padding() * 2
      });
      newAttrs.x += offset.x;
      newAttrs.y += offset.y;
      this._movingAnchorName = this._movingAnchorName.replace("top", "bottom");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.height += this.padding() * 2;
    } else if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const offset = t2.point({
        x: 0,
        y: this.padding() * 2
      });
      this._movingAnchorName = this._movingAnchorName.replace("bottom", "top");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.height += this.padding() * 2;
    }
    if (this.boundBoxFunc()) {
      const bounded = this.boundBoxFunc()(oldAttrs, newAttrs);
      if (bounded) {
        newAttrs = bounded;
      } else {
        Util_1$3.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
    }
    const baseSize = 1e7;
    const oldTr = new Util_1$3.Transform();
    oldTr.translate(oldAttrs.x, oldAttrs.y);
    oldTr.rotate(oldAttrs.rotation);
    oldTr.scale(oldAttrs.width / baseSize, oldAttrs.height / baseSize);
    const newTr = new Util_1$3.Transform();
    const newScaleX = newAttrs.width / baseSize;
    const newScaleY = newAttrs.height / baseSize;
    if (this.flipEnabled() === false) {
      newTr.translate(newAttrs.x, newAttrs.y);
      newTr.rotate(newAttrs.rotation);
      newTr.translate(newAttrs.width < 0 ? newAttrs.width : 0, newAttrs.height < 0 ? newAttrs.height : 0);
      newTr.scale(Math.abs(newScaleX), Math.abs(newScaleY));
    } else {
      newTr.translate(newAttrs.x, newAttrs.y);
      newTr.rotate(newAttrs.rotation);
      newTr.scale(newScaleX, newScaleY);
    }
    const delta = newTr.multiply(oldTr.invert());
    this._nodes.forEach((node) => {
      var _a2;
      const parentTransform = node.getParent().getAbsoluteTransform();
      const localTransform = node.getTransform().copy();
      localTransform.translate(node.offsetX(), node.offsetY());
      const newLocalTransform = new Util_1$3.Transform();
      newLocalTransform.multiply(parentTransform.copy().invert()).multiply(delta).multiply(parentTransform).multiply(localTransform);
      const attrs = newLocalTransform.decompose();
      node.setAttrs(attrs);
      (_a2 = node.getLayer()) === null || _a2 === void 0 ? void 0 : _a2.batchDraw();
    });
    this.rotation(Util_1$3.Util._getRotation(newAttrs.rotation));
    this._nodes.forEach((node) => {
      this._fire("transform", { evt, target: node });
      node._fire("transform", { evt, target: node });
    });
    this._resetTransformCache();
    this.update();
    this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache();
    this.update();
  }
  _batchChangeChild(selector, attrs) {
    const anchor = this.findOne(selector);
    anchor.setAttrs(attrs);
  }
  update() {
    var _a2;
    const attrs = this._getNodeRect();
    this.rotation(Util_1$3.Util._getRotation(attrs.rotation));
    const width = attrs.width;
    const height = attrs.height;
    const enabledAnchors = this.enabledAnchors();
    const resizeEnabled = this.resizeEnabled();
    const padding = this.padding();
    const anchorSize = this.anchorSize();
    const anchors = this.find("._anchor");
    anchors.forEach((node) => {
      node.setAttrs({
        width: anchorSize,
        height: anchorSize,
        offsetX: anchorSize / 2,
        offsetY: anchorSize / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    });
    this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: anchorSize / 2 + padding,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("top-left") >= 0
    });
    this._batchChangeChild(".top-center", {
      x: width / 2,
      y: 0,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("top-center") >= 0
    });
    this._batchChangeChild(".top-right", {
      x: width,
      y: 0,
      offsetX: anchorSize / 2 - padding,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("top-right") >= 0
    });
    this._batchChangeChild(".middle-left", {
      x: 0,
      y: height / 2,
      offsetX: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("middle-left") >= 0
    });
    this._batchChangeChild(".middle-right", {
      x: width,
      y: height / 2,
      offsetX: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("middle-right") >= 0
    });
    this._batchChangeChild(".bottom-left", {
      x: 0,
      y: height,
      offsetX: anchorSize / 2 + padding,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("bottom-left") >= 0
    });
    this._batchChangeChild(".bottom-center", {
      x: width / 2,
      y: height,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("bottom-center") >= 0
    });
    this._batchChangeChild(".bottom-right", {
      x: width,
      y: height,
      offsetX: anchorSize / 2 - padding,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("bottom-right") >= 0
    });
    this._batchChangeChild(".rotater", {
      x: width / 2,
      y: -this.rotateAnchorOffset() * Util_1$3.Util._sign(height) - padding,
      visible: this.rotateEnabled()
    });
    this._batchChangeChild(".back", {
      width,
      height,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    });
    const styleFunc = this.anchorStyleFunc();
    if (styleFunc) {
      anchors.forEach((node) => {
        styleFunc(node);
      });
    }
    (_a2 = this.getLayer()) === null || _a2 === void 0 ? void 0 : _a2.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      const anchorNode = this.findOne("." + this._movingAnchorName);
      if (anchorNode) {
        anchorNode.stopDrag();
      }
    }
  }
  destroy() {
    if (this.getStage() && this._cursorChange) {
      this.getStage().content && (this.getStage().content.style.cursor = "");
    }
    Group_1.Group.prototype.destroy.call(this);
    this.detach();
    this._removeEvents();
    return this;
  }
  toObject() {
    return Node_1$f.Node.prototype.toObject.call(this);
  }
  clone(obj) {
    const node = Node_1$f.Node.prototype.clone.call(this, obj);
    return node;
  }
  getClientRect() {
    if (this.nodes().length > 0) {
      return super.getClientRect();
    } else {
      return { x: 0, y: 0, width: 0, height: 0 };
    }
  }
};
Transformer$2.Transformer = Transformer$1;
Transformer$1.isTransforming = () => {
  return activeTransformersCount > 0;
};
function validateAnchors(val) {
  if (!(val instanceof Array)) {
    Util_1$3.Util.warn("enabledAnchors value should be an array");
  }
  if (val instanceof Array) {
    val.forEach(function(name) {
      if (ANCHORS_NAMES.indexOf(name) === -1) {
        Util_1$3.Util.warn("Unknown anchor name: " + name + ". Available names are: " + ANCHORS_NAMES.join(", "));
      }
    });
  }
  return val || [];
}
Transformer$1.prototype.className = "Transformer";
(0, Global_2$1._registerNode)(Transformer$1);
Factory_1$g.Factory.addGetterSetter(Transformer$1, "enabledAnchors", ANCHORS_NAMES, validateAnchors);
Factory_1$g.Factory.addGetterSetter(Transformer$1, "flipEnabled", true, (0, Validators_1$g.getBooleanValidator)());
Factory_1$g.Factory.addGetterSetter(Transformer$1, "resizeEnabled", true);
Factory_1$g.Factory.addGetterSetter(Transformer$1, "anchorSize", 10, (0, Validators_1$g.getNumberValidator)());
Factory_1$g.Factory.addGetterSetter(Transformer$1, "rotateEnabled", true);
Factory_1$g.Factory.addGetterSetter(Transformer$1, "rotateLineVisible", true);
Factory_1$g.Factory.addGetterSetter(Transformer$1, "rotationSnaps", []);
Factory_1$g.Factory.addGetterSetter(Transformer$1, "rotateAnchorOffset", 50, (0, Validators_1$g.getNumberValidator)());
Factory_1$g.Factory.addGetterSetter(Transformer$1, "rotateAnchorCursor", "crosshair");
Factory_1$g.Factory.addGetterSetter(Transformer$1, "rotationSnapTolerance", 5, (0, Validators_1$g.getNumberValidator)());
Factory_1$g.Factory.addGetterSetter(Transformer$1, "borderEnabled", true);
Factory_1$g.Factory.addGetterSetter(Transformer$1, "anchorStroke", "rgb(0, 161, 255)");
Factory_1$g.Factory.addGetterSetter(Transformer$1, "anchorStrokeWidth", 1, (0, Validators_1$g.getNumberValidator)());
Factory_1$g.Factory.addGetterSetter(Transformer$1, "anchorFill", "white");
Factory_1$g.Factory.addGetterSetter(Transformer$1, "anchorCornerRadius", 0, (0, Validators_1$g.getNumberValidator)());
Factory_1$g.Factory.addGetterSetter(Transformer$1, "borderStroke", "rgb(0, 161, 255)");
Factory_1$g.Factory.addGetterSetter(Transformer$1, "borderStrokeWidth", 1, (0, Validators_1$g.getNumberValidator)());
Factory_1$g.Factory.addGetterSetter(Transformer$1, "borderDash");
Factory_1$g.Factory.addGetterSetter(Transformer$1, "keepRatio", true);
Factory_1$g.Factory.addGetterSetter(Transformer$1, "shiftBehavior", "default");
Factory_1$g.Factory.addGetterSetter(Transformer$1, "centeredScaling", false);
Factory_1$g.Factory.addGetterSetter(Transformer$1, "ignoreStroke", false);
Factory_1$g.Factory.addGetterSetter(Transformer$1, "padding", 0, (0, Validators_1$g.getNumberValidator)());
Factory_1$g.Factory.addGetterSetter(Transformer$1, "nodes");
Factory_1$g.Factory.addGetterSetter(Transformer$1, "node");
Factory_1$g.Factory.addGetterSetter(Transformer$1, "boundBoxFunc");
Factory_1$g.Factory.addGetterSetter(Transformer$1, "anchorDragBoundFunc");
Factory_1$g.Factory.addGetterSetter(Transformer$1, "anchorStyleFunc");
Factory_1$g.Factory.addGetterSetter(Transformer$1, "shouldOverdrawWholeArea", false);
Factory_1$g.Factory.addGetterSetter(Transformer$1, "useSingleNodeRotation", true);
Factory_1$g.Factory.backCompat(Transformer$1, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
var Wedge$1 = {};
Object.defineProperty(Wedge$1, "__esModule", { value: true });
Wedge$1.Wedge = void 0;
const Factory_1$f = Factory;
const Shape_1 = Shape;
const Global_1 = Global;
const Validators_1$f = Validators;
const Global_2 = Global;
class Wedge extends Shape_1.Shape {
  _sceneFunc(context) {
    context.beginPath();
    context.arc(0, 0, this.radius(), 0, Global_1.Konva.getAngle(this.angle()), this.clockwise());
    context.lineTo(0, 0);
    context.closePath();
    context.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(width) {
    this.radius(width / 2);
  }
  setHeight(height) {
    this.radius(height / 2);
  }
}
Wedge$1.Wedge = Wedge;
Wedge.prototype.className = "Wedge";
Wedge.prototype._centroid = true;
Wedge.prototype._attrsAffectingSize = ["radius"];
(0, Global_2._registerNode)(Wedge);
Factory_1$f.Factory.addGetterSetter(Wedge, "radius", 0, (0, Validators_1$f.getNumberValidator)());
Factory_1$f.Factory.addGetterSetter(Wedge, "angle", 0, (0, Validators_1$f.getNumberValidator)());
Factory_1$f.Factory.addGetterSetter(Wedge, "clockwise", false);
Factory_1$f.Factory.backCompat(Wedge, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
var Blur$1 = {};
Object.defineProperty(Blur$1, "__esModule", { value: true });
Blur$1.Blur = void 0;
const Factory_1$e = Factory;
const Node_1$e = Node$1;
const Validators_1$e = Validators;
function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
}
const mul_table = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
];
const shg_table = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function filterGaussBlurRGBA(imageData, radius) {
  const pixels = imageData.data, width = imageData.width, height = imageData.height;
  let p2, yi2, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg2, pb2, pa2, rbs;
  const div = radius + radius + 1, widthMinus1 = width - 1, heightMinus1 = height - 1, radiusPlus1 = radius + 1, sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2, stackStart = new BlurStack(), mul_sum = mul_table[radius], shg_sum = shg_table[radius];
  let stackEnd = null, stack = stackStart, stackIn = null, stackOut = null;
  for (let i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();
    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }
  stack.next = stackStart;
  yw = yi2 = 0;
  for (let y2 = 0; y2 < height; y2++) {
    r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
    r_out_sum = radiusPlus1 * (pr = pixels[yi2]);
    g_out_sum = radiusPlus1 * (pg2 = pixels[yi2 + 1]);
    b_out_sum = radiusPlus1 * (pb2 = pixels[yi2 + 2]);
    a_out_sum = radiusPlus1 * (pa2 = pixels[yi2 + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg2;
    b_sum += sumFactor * pb2;
    a_sum += sumFactor * pa2;
    stack = stackStart;
    for (let i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg2;
      stack.b = pb2;
      stack.a = pa2;
      stack = stack.next;
    }
    for (let i = 1; i < radiusPlus1; i++) {
      p2 = yi2 + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = pr = pixels[p2]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg2 = pixels[p2 + 1]) * rbs;
      b_sum += (stack.b = pb2 = pixels[p2 + 2]) * rbs;
      a_sum += (stack.a = pa2 = pixels[p2 + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg2;
      b_in_sum += pb2;
      a_in_sum += pa2;
      stack = stack.next;
    }
    stackIn = stackStart;
    stackOut = stackEnd;
    for (let x2 = 0; x2 < width; x2++) {
      pixels[yi2 + 3] = pa2 = a_sum * mul_sum >> shg_sum;
      if (pa2 !== 0) {
        pa2 = 255 / pa2;
        pixels[yi2] = (r_sum * mul_sum >> shg_sum) * pa2;
        pixels[yi2 + 1] = (g_sum * mul_sum >> shg_sum) * pa2;
        pixels[yi2 + 2] = (b_sum * mul_sum >> shg_sum) * pa2;
      } else {
        pixels[yi2] = pixels[yi2 + 1] = pixels[yi2 + 2] = 0;
      }
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p2 = yw + ((p2 = x2 + radius + 1) < widthMinus1 ? p2 : widthMinus1) << 2;
      r_in_sum += stackIn.r = pixels[p2];
      g_in_sum += stackIn.g = pixels[p2 + 1];
      b_in_sum += stackIn.b = pixels[p2 + 2];
      a_in_sum += stackIn.a = pixels[p2 + 3];
      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;
      a_sum += a_in_sum;
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg2 = stackOut.g;
      b_out_sum += pb2 = stackOut.b;
      a_out_sum += pa2 = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg2;
      b_in_sum -= pb2;
      a_in_sum -= pa2;
      stackOut = stackOut.next;
      yi2 += 4;
    }
    yw += width;
  }
  for (let x2 = 0; x2 < width; x2++) {
    g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
    yi2 = x2 << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi2]);
    g_out_sum = radiusPlus1 * (pg2 = pixels[yi2 + 1]);
    b_out_sum = radiusPlus1 * (pb2 = pixels[yi2 + 2]);
    a_out_sum = radiusPlus1 * (pa2 = pixels[yi2 + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg2;
    b_sum += sumFactor * pb2;
    a_sum += sumFactor * pa2;
    stack = stackStart;
    for (let i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg2;
      stack.b = pb2;
      stack.a = pa2;
      stack = stack.next;
    }
    let yp = width;
    for (let i = 1; i <= radius; i++) {
      yi2 = yp + x2 << 2;
      r_sum += (stack.r = pr = pixels[yi2]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg2 = pixels[yi2 + 1]) * rbs;
      b_sum += (stack.b = pb2 = pixels[yi2 + 2]) * rbs;
      a_sum += (stack.a = pa2 = pixels[yi2 + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg2;
      b_in_sum += pb2;
      a_in_sum += pa2;
      stack = stack.next;
      if (i < heightMinus1) {
        yp += width;
      }
    }
    yi2 = x2;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (let y2 = 0; y2 < height; y2++) {
      p2 = yi2 << 2;
      pixels[p2 + 3] = pa2 = a_sum * mul_sum >> shg_sum;
      if (pa2 > 0) {
        pa2 = 255 / pa2;
        pixels[p2] = (r_sum * mul_sum >> shg_sum) * pa2;
        pixels[p2 + 1] = (g_sum * mul_sum >> shg_sum) * pa2;
        pixels[p2 + 2] = (b_sum * mul_sum >> shg_sum) * pa2;
      } else {
        pixels[p2] = pixels[p2 + 1] = pixels[p2 + 2] = 0;
      }
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p2 = x2 + ((p2 = y2 + radiusPlus1) < heightMinus1 ? p2 : heightMinus1) * width << 2;
      r_sum += r_in_sum += stackIn.r = pixels[p2];
      g_sum += g_in_sum += stackIn.g = pixels[p2 + 1];
      b_sum += b_in_sum += stackIn.b = pixels[p2 + 2];
      a_sum += a_in_sum += stackIn.a = pixels[p2 + 3];
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg2 = stackOut.g;
      b_out_sum += pb2 = stackOut.b;
      a_out_sum += pa2 = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg2;
      b_in_sum -= pb2;
      a_in_sum -= pa2;
      stackOut = stackOut.next;
      yi2 += width;
    }
  }
}
const Blur = function Blur2(imageData) {
  const radius = Math.round(this.blurRadius());
  if (radius > 0) {
    filterGaussBlurRGBA(imageData, radius);
  }
};
Blur$1.Blur = Blur;
Factory_1$e.Factory.addGetterSetter(Node_1$e.Node, "blurRadius", 0, (0, Validators_1$e.getNumberValidator)(), Factory_1$e.Factory.afterSetFilter);
var Brighten$1 = {};
Object.defineProperty(Brighten$1, "__esModule", { value: true });
Brighten$1.Brighten = void 0;
const Factory_1$d = Factory;
const Node_1$d = Node$1;
const Validators_1$d = Validators;
const Brighten = function(imageData) {
  const brightness = this.brightness() * 255, data = imageData.data, len = data.length;
  for (let i = 0; i < len; i += 4) {
    data[i] += brightness;
    data[i + 1] += brightness;
    data[i + 2] += brightness;
  }
};
Brighten$1.Brighten = Brighten;
Factory_1$d.Factory.addGetterSetter(Node_1$d.Node, "brightness", 0, (0, Validators_1$d.getNumberValidator)(), Factory_1$d.Factory.afterSetFilter);
var Contrast$1 = {};
Object.defineProperty(Contrast$1, "__esModule", { value: true });
Contrast$1.Contrast = void 0;
const Factory_1$c = Factory;
const Node_1$c = Node$1;
const Validators_1$c = Validators;
const Contrast = function(imageData) {
  const adjust = Math.pow((this.contrast() + 100) / 100, 2);
  const data = imageData.data, nPixels = data.length;
  let red = 150, green = 150, blue = 150;
  for (let i = 0; i < nPixels; i += 4) {
    red = data[i];
    green = data[i + 1];
    blue = data[i + 2];
    red /= 255;
    red -= 0.5;
    red *= adjust;
    red += 0.5;
    red *= 255;
    green /= 255;
    green -= 0.5;
    green *= adjust;
    green += 0.5;
    green *= 255;
    blue /= 255;
    blue -= 0.5;
    blue *= adjust;
    blue += 0.5;
    blue *= 255;
    red = red < 0 ? 0 : red > 255 ? 255 : red;
    green = green < 0 ? 0 : green > 255 ? 255 : green;
    blue = blue < 0 ? 0 : blue > 255 ? 255 : blue;
    data[i] = red;
    data[i + 1] = green;
    data[i + 2] = blue;
  }
};
Contrast$1.Contrast = Contrast;
Factory_1$c.Factory.addGetterSetter(Node_1$c.Node, "contrast", 0, (0, Validators_1$c.getNumberValidator)(), Factory_1$c.Factory.afterSetFilter);
var Emboss$1 = {};
Object.defineProperty(Emboss$1, "__esModule", { value: true });
Emboss$1.Emboss = void 0;
const Factory_1$b = Factory;
const Node_1$b = Node$1;
const Util_1$2 = Util;
const Validators_1$b = Validators;
const Emboss = function(imageData) {
  const strength = this.embossStrength() * 10, greyLevel = this.embossWhiteLevel() * 255, direction = this.embossDirection(), blend = this.embossBlend(), data = imageData.data, w2 = imageData.width, h = imageData.height, w4 = w2 * 4;
  let dirY = 0, dirX = 0, y2 = h;
  switch (direction) {
    case "top-left":
      dirY = -1;
      dirX = -1;
      break;
    case "top":
      dirY = -1;
      dirX = 0;
      break;
    case "top-right":
      dirY = -1;
      dirX = 1;
      break;
    case "right":
      dirY = 0;
      dirX = 1;
      break;
    case "bottom-right":
      dirY = 1;
      dirX = 1;
      break;
    case "bottom":
      dirY = 1;
      dirX = 0;
      break;
    case "bottom-left":
      dirY = 1;
      dirX = -1;
      break;
    case "left":
      dirY = 0;
      dirX = -1;
      break;
    default:
      Util_1$2.Util.error("Unknown emboss direction: " + direction);
  }
  do {
    const offsetY = (y2 - 1) * w4;
    let otherY = dirY;
    if (y2 + otherY < 1) {
      otherY = 0;
    }
    if (y2 + otherY > h) {
      otherY = 0;
    }
    const offsetYOther = (y2 - 1 + otherY) * w2 * 4;
    let x2 = w2;
    do {
      const offset = offsetY + (x2 - 1) * 4;
      let otherX = dirX;
      if (x2 + otherX < 1) {
        otherX = 0;
      }
      if (x2 + otherX > w2) {
        otherX = 0;
      }
      const offsetOther = offsetYOther + (x2 - 1 + otherX) * 4;
      const dR = data[offset] - data[offsetOther];
      const dG = data[offset + 1] - data[offsetOther + 1];
      const dB = data[offset + 2] - data[offsetOther + 2];
      let dif = dR;
      const absDif = dif > 0 ? dif : -dif;
      const absG = dG > 0 ? dG : -dG;
      const absB = dB > 0 ? dB : -dB;
      if (absG > absDif) {
        dif = dG;
      }
      if (absB > absDif) {
        dif = dB;
      }
      dif *= strength;
      if (blend) {
        const r2 = data[offset] + dif;
        const g = data[offset + 1] + dif;
        const b = data[offset + 2] + dif;
        data[offset] = r2 > 255 ? 255 : r2 < 0 ? 0 : r2;
        data[offset + 1] = g > 255 ? 255 : g < 0 ? 0 : g;
        data[offset + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
      } else {
        let grey = greyLevel - dif;
        if (grey < 0) {
          grey = 0;
        } else if (grey > 255) {
          grey = 255;
        }
        data[offset] = data[offset + 1] = data[offset + 2] = grey;
      }
    } while (--x2);
  } while (--y2);
};
Emboss$1.Emboss = Emboss;
Factory_1$b.Factory.addGetterSetter(Node_1$b.Node, "embossStrength", 0.5, (0, Validators_1$b.getNumberValidator)(), Factory_1$b.Factory.afterSetFilter);
Factory_1$b.Factory.addGetterSetter(Node_1$b.Node, "embossWhiteLevel", 0.5, (0, Validators_1$b.getNumberValidator)(), Factory_1$b.Factory.afterSetFilter);
Factory_1$b.Factory.addGetterSetter(Node_1$b.Node, "embossDirection", "top-left", void 0, Factory_1$b.Factory.afterSetFilter);
Factory_1$b.Factory.addGetterSetter(Node_1$b.Node, "embossBlend", false, void 0, Factory_1$b.Factory.afterSetFilter);
var Enhance$1 = {};
Object.defineProperty(Enhance$1, "__esModule", { value: true });
Enhance$1.Enhance = void 0;
const Factory_1$a = Factory;
const Node_1$a = Node$1;
const Validators_1$a = Validators;
function remap(fromValue, fromMin, fromMax, toMin, toMax) {
  const fromRange = fromMax - fromMin, toRange = toMax - toMin;
  if (fromRange === 0) {
    return toMin + toRange / 2;
  }
  if (toRange === 0) {
    return toMin;
  }
  let toValue = (fromValue - fromMin) / fromRange;
  toValue = toRange * toValue + toMin;
  return toValue;
}
const Enhance = function(imageData) {
  const data = imageData.data, nSubPixels = data.length;
  let rMin = data[0], rMax = rMin, r2, gMin = data[1], gMax = gMin, g, bMin = data[2], bMax = bMin, b;
  const enhanceAmount = this.enhance();
  if (enhanceAmount === 0) {
    return;
  }
  for (let i = 0; i < nSubPixels; i += 4) {
    r2 = data[i + 0];
    if (r2 < rMin) {
      rMin = r2;
    } else if (r2 > rMax) {
      rMax = r2;
    }
    g = data[i + 1];
    if (g < gMin) {
      gMin = g;
    } else if (g > gMax) {
      gMax = g;
    }
    b = data[i + 2];
    if (b < bMin) {
      bMin = b;
    } else if (b > bMax) {
      bMax = b;
    }
  }
  if (rMax === rMin) {
    rMax = 255;
    rMin = 0;
  }
  if (gMax === gMin) {
    gMax = 255;
    gMin = 0;
  }
  if (bMax === bMin) {
    bMax = 255;
    bMin = 0;
  }
  let rGoalMax, rGoalMin, gGoalMax, gGoalMin, bGoalMax, bGoalMin;
  if (enhanceAmount > 0) {
    rGoalMax = rMax + enhanceAmount * (255 - rMax);
    rGoalMin = rMin - enhanceAmount * (rMin - 0);
    gGoalMax = gMax + enhanceAmount * (255 - gMax);
    gGoalMin = gMin - enhanceAmount * (gMin - 0);
    bGoalMax = bMax + enhanceAmount * (255 - bMax);
    bGoalMin = bMin - enhanceAmount * (bMin - 0);
  } else {
    const rMid = (rMax + rMin) * 0.5;
    rGoalMax = rMax + enhanceAmount * (rMax - rMid);
    rGoalMin = rMin + enhanceAmount * (rMin - rMid);
    const gMid = (gMax + gMin) * 0.5;
    gGoalMax = gMax + enhanceAmount * (gMax - gMid);
    gGoalMin = gMin + enhanceAmount * (gMin - gMid);
    const bMid = (bMax + bMin) * 0.5;
    bGoalMax = bMax + enhanceAmount * (bMax - bMid);
    bGoalMin = bMin + enhanceAmount * (bMin - bMid);
  }
  for (let i = 0; i < nSubPixels; i += 4) {
    data[i + 0] = remap(data[i + 0], rMin, rMax, rGoalMin, rGoalMax);
    data[i + 1] = remap(data[i + 1], gMin, gMax, gGoalMin, gGoalMax);
    data[i + 2] = remap(data[i + 2], bMin, bMax, bGoalMin, bGoalMax);
  }
};
Enhance$1.Enhance = Enhance;
Factory_1$a.Factory.addGetterSetter(Node_1$a.Node, "enhance", 0, (0, Validators_1$a.getNumberValidator)(), Factory_1$a.Factory.afterSetFilter);
var Grayscale$1 = {};
Object.defineProperty(Grayscale$1, "__esModule", { value: true });
Grayscale$1.Grayscale = void 0;
const Grayscale = function(imageData) {
  const data = imageData.data, len = data.length;
  for (let i = 0; i < len; i += 4) {
    const brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    data[i] = brightness;
    data[i + 1] = brightness;
    data[i + 2] = brightness;
  }
};
Grayscale$1.Grayscale = Grayscale;
var HSL$1 = {};
Object.defineProperty(HSL$1, "__esModule", { value: true });
HSL$1.HSL = void 0;
const Factory_1$9 = Factory;
const Node_1$9 = Node$1;
const Validators_1$9 = Validators;
Factory_1$9.Factory.addGetterSetter(Node_1$9.Node, "hue", 0, (0, Validators_1$9.getNumberValidator)(), Factory_1$9.Factory.afterSetFilter);
Factory_1$9.Factory.addGetterSetter(Node_1$9.Node, "saturation", 0, (0, Validators_1$9.getNumberValidator)(), Factory_1$9.Factory.afterSetFilter);
Factory_1$9.Factory.addGetterSetter(Node_1$9.Node, "luminance", 0, (0, Validators_1$9.getNumberValidator)(), Factory_1$9.Factory.afterSetFilter);
const HSL = function(imageData) {
  const data = imageData.data, nPixels = data.length, v2 = 1, s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, l2 = this.luminance() * 127;
  const vsu = v2 * s * Math.cos(h * Math.PI / 180), vsw = v2 * s * Math.sin(h * Math.PI / 180);
  const rr = 0.299 * v2 + 0.701 * vsu + 0.167 * vsw, rg2 = 0.587 * v2 - 0.587 * vsu + 0.33 * vsw, rb2 = 0.114 * v2 - 0.114 * vsu - 0.497 * vsw;
  const gr = 0.299 * v2 - 0.299 * vsu - 0.328 * vsw, gg2 = 0.587 * v2 + 0.413 * vsu + 0.035 * vsw, gb2 = 0.114 * v2 - 0.114 * vsu + 0.293 * vsw;
  const br = 0.299 * v2 - 0.3 * vsu + 1.25 * vsw, bg2 = 0.587 * v2 - 0.586 * vsu - 1.05 * vsw, bb2 = 0.114 * v2 + 0.886 * vsu - 0.2 * vsw;
  let r2, g, b, a;
  for (let i = 0; i < nPixels; i += 4) {
    r2 = data[i + 0];
    g = data[i + 1];
    b = data[i + 2];
    a = data[i + 3];
    data[i + 0] = rr * r2 + rg2 * g + rb2 * b + l2;
    data[i + 1] = gr * r2 + gg2 * g + gb2 * b + l2;
    data[i + 2] = br * r2 + bg2 * g + bb2 * b + l2;
    data[i + 3] = a;
  }
};
HSL$1.HSL = HSL;
var HSV$1 = {};
Object.defineProperty(HSV$1, "__esModule", { value: true });
HSV$1.HSV = void 0;
const Factory_1$8 = Factory;
const Node_1$8 = Node$1;
const Validators_1$8 = Validators;
const HSV = function(imageData) {
  const data = imageData.data, nPixels = data.length, v2 = Math.pow(2, this.value()), s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360;
  const vsu = v2 * s * Math.cos(h * Math.PI / 180), vsw = v2 * s * Math.sin(h * Math.PI / 180);
  const rr = 0.299 * v2 + 0.701 * vsu + 0.167 * vsw, rg2 = 0.587 * v2 - 0.587 * vsu + 0.33 * vsw, rb2 = 0.114 * v2 - 0.114 * vsu - 0.497 * vsw;
  const gr = 0.299 * v2 - 0.299 * vsu - 0.328 * vsw, gg2 = 0.587 * v2 + 0.413 * vsu + 0.035 * vsw, gb2 = 0.114 * v2 - 0.114 * vsu + 0.293 * vsw;
  const br = 0.299 * v2 - 0.3 * vsu + 1.25 * vsw, bg2 = 0.587 * v2 - 0.586 * vsu - 1.05 * vsw, bb2 = 0.114 * v2 + 0.886 * vsu - 0.2 * vsw;
  for (let i = 0; i < nPixels; i += 4) {
    const r2 = data[i + 0];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    data[i + 0] = rr * r2 + rg2 * g + rb2 * b;
    data[i + 1] = gr * r2 + gg2 * g + gb2 * b;
    data[i + 2] = br * r2 + bg2 * g + bb2 * b;
    data[i + 3] = a;
  }
};
HSV$1.HSV = HSV;
Factory_1$8.Factory.addGetterSetter(Node_1$8.Node, "hue", 0, (0, Validators_1$8.getNumberValidator)(), Factory_1$8.Factory.afterSetFilter);
Factory_1$8.Factory.addGetterSetter(Node_1$8.Node, "saturation", 0, (0, Validators_1$8.getNumberValidator)(), Factory_1$8.Factory.afterSetFilter);
Factory_1$8.Factory.addGetterSetter(Node_1$8.Node, "value", 0, (0, Validators_1$8.getNumberValidator)(), Factory_1$8.Factory.afterSetFilter);
var Invert$1 = {};
Object.defineProperty(Invert$1, "__esModule", { value: true });
Invert$1.Invert = void 0;
const Invert = function(imageData) {
  const data = imageData.data, len = data.length;
  for (let i = 0; i < len; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }
};
Invert$1.Invert = Invert;
var Kaleidoscope$1 = {};
Object.defineProperty(Kaleidoscope$1, "__esModule", { value: true });
Kaleidoscope$1.Kaleidoscope = void 0;
const Factory_1$7 = Factory;
const Node_1$7 = Node$1;
const Util_1$1 = Util;
const Validators_1$7 = Validators;
const ToPolar = function(src, dst, opt) {
  const srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2;
  let rMax = Math.sqrt(xMid * xMid + yMid * yMid);
  let x2 = xSize - xMid;
  let y2 = ySize - yMid;
  const rad = Math.sqrt(x2 * x2 + y2 * y2);
  rMax = rad > rMax ? rad : rMax;
  const rSize = ySize, tSize = xSize;
  const conversion = 360 / tSize * Math.PI / 180;
  for (let theta = 0; theta < tSize; theta += 1) {
    const sin = Math.sin(theta * conversion);
    const cos = Math.cos(theta * conversion);
    for (let radius = 0; radius < rSize; radius += 1) {
      x2 = Math.floor(xMid + rMax * radius / rSize * cos);
      y2 = Math.floor(yMid + rMax * radius / rSize * sin);
      let i = (y2 * xSize + x2) * 4;
      const r2 = srcPixels[i + 0];
      const g = srcPixels[i + 1];
      const b = srcPixels[i + 2];
      const a = srcPixels[i + 3];
      i = (theta + radius * xSize) * 4;
      dstPixels[i + 0] = r2;
      dstPixels[i + 1] = g;
      dstPixels[i + 2] = b;
      dstPixels[i + 3] = a;
    }
  }
};
const FromPolar = function(src, dst, opt) {
  const srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2;
  let rMax = Math.sqrt(xMid * xMid + yMid * yMid);
  let x2 = xSize - xMid;
  let y2 = ySize - yMid;
  const rad = Math.sqrt(x2 * x2 + y2 * y2);
  rMax = rad > rMax ? rad : rMax;
  const rSize = ySize, tSize = xSize, phaseShift = 0;
  let x1, y1;
  for (x2 = 0; x2 < xSize; x2 += 1) {
    for (y2 = 0; y2 < ySize; y2 += 1) {
      const dx = x2 - xMid;
      const dy = y2 - yMid;
      const radius = Math.sqrt(dx * dx + dy * dy) * rSize / rMax;
      let theta = (Math.atan2(dy, dx) * 180 / Math.PI + 360 + phaseShift) % 360;
      theta = theta * tSize / 360;
      x1 = Math.floor(theta);
      y1 = Math.floor(radius);
      let i = (y1 * xSize + x1) * 4;
      const r2 = srcPixels[i + 0];
      const g = srcPixels[i + 1];
      const b = srcPixels[i + 2];
      const a = srcPixels[i + 3];
      i = (y2 * xSize + x2) * 4;
      dstPixels[i + 0] = r2;
      dstPixels[i + 1] = g;
      dstPixels[i + 2] = b;
      dstPixels[i + 3] = a;
    }
  }
};
const Kaleidoscope = function(imageData) {
  const xSize = imageData.width, ySize = imageData.height;
  let x2, y2, xoff, i, r2, g, b, a, srcPos, dstPos;
  let power = Math.round(this.kaleidoscopePower());
  const angle = Math.round(this.kaleidoscopeAngle());
  const offset = Math.floor(xSize * (angle % 360) / 360);
  if (power < 1) {
    return;
  }
  const tempCanvas = Util_1$1.Util.createCanvasElement();
  tempCanvas.width = xSize;
  tempCanvas.height = ySize;
  const scratchData = tempCanvas.getContext("2d").getImageData(0, 0, xSize, ySize);
  Util_1$1.Util.releaseCanvas(tempCanvas);
  ToPolar(imageData, scratchData, {
    polarCenterX: xSize / 2,
    polarCenterY: ySize / 2
  });
  let minSectionSize = xSize / Math.pow(2, power);
  while (minSectionSize <= 8) {
    minSectionSize = minSectionSize * 2;
    power -= 1;
  }
  minSectionSize = Math.ceil(minSectionSize);
  let sectionSize = minSectionSize;
  let xStart = 0, xEnd = sectionSize, xDelta = 1;
  if (offset + minSectionSize > xSize) {
    xStart = sectionSize;
    xEnd = 0;
    xDelta = -1;
  }
  for (y2 = 0; y2 < ySize; y2 += 1) {
    for (x2 = xStart; x2 !== xEnd; x2 += xDelta) {
      xoff = Math.round(x2 + offset) % xSize;
      srcPos = (xSize * y2 + xoff) * 4;
      r2 = scratchData.data[srcPos + 0];
      g = scratchData.data[srcPos + 1];
      b = scratchData.data[srcPos + 2];
      a = scratchData.data[srcPos + 3];
      dstPos = (xSize * y2 + x2) * 4;
      scratchData.data[dstPos + 0] = r2;
      scratchData.data[dstPos + 1] = g;
      scratchData.data[dstPos + 2] = b;
      scratchData.data[dstPos + 3] = a;
    }
  }
  for (y2 = 0; y2 < ySize; y2 += 1) {
    sectionSize = Math.floor(minSectionSize);
    for (i = 0; i < power; i += 1) {
      for (x2 = 0; x2 < sectionSize + 1; x2 += 1) {
        srcPos = (xSize * y2 + x2) * 4;
        r2 = scratchData.data[srcPos + 0];
        g = scratchData.data[srcPos + 1];
        b = scratchData.data[srcPos + 2];
        a = scratchData.data[srcPos + 3];
        dstPos = (xSize * y2 + sectionSize * 2 - x2 - 1) * 4;
        scratchData.data[dstPos + 0] = r2;
        scratchData.data[dstPos + 1] = g;
        scratchData.data[dstPos + 2] = b;
        scratchData.data[dstPos + 3] = a;
      }
      sectionSize *= 2;
    }
  }
  FromPolar(scratchData, imageData, {});
};
Kaleidoscope$1.Kaleidoscope = Kaleidoscope;
Factory_1$7.Factory.addGetterSetter(Node_1$7.Node, "kaleidoscopePower", 2, (0, Validators_1$7.getNumberValidator)(), Factory_1$7.Factory.afterSetFilter);
Factory_1$7.Factory.addGetterSetter(Node_1$7.Node, "kaleidoscopeAngle", 0, (0, Validators_1$7.getNumberValidator)(), Factory_1$7.Factory.afterSetFilter);
var Mask$1 = {};
Object.defineProperty(Mask$1, "__esModule", { value: true });
Mask$1.Mask = void 0;
const Factory_1$6 = Factory;
const Node_1$6 = Node$1;
const Validators_1$6 = Validators;
function pixelAt(idata, x2, y2) {
  let idx = (y2 * idata.width + x2) * 4;
  const d = [];
  d.push(idata.data[idx++], idata.data[idx++], idata.data[idx++], idata.data[idx++]);
  return d;
}
function rgbDistance(p1, p2) {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2));
}
function rgbMean(pTab) {
  const m2 = [0, 0, 0];
  for (let i = 0; i < pTab.length; i++) {
    m2[0] += pTab[i][0];
    m2[1] += pTab[i][1];
    m2[2] += pTab[i][2];
  }
  m2[0] /= pTab.length;
  m2[1] /= pTab.length;
  m2[2] /= pTab.length;
  return m2;
}
function backgroundMask(idata, threshold) {
  const rgbv_no = pixelAt(idata, 0, 0);
  const rgbv_ne = pixelAt(idata, idata.width - 1, 0);
  const rgbv_so = pixelAt(idata, 0, idata.height - 1);
  const rgbv_se = pixelAt(idata, idata.width - 1, idata.height - 1);
  const thres = threshold || 10;
  if (rgbDistance(rgbv_no, rgbv_ne) < thres && rgbDistance(rgbv_ne, rgbv_se) < thres && rgbDistance(rgbv_se, rgbv_so) < thres && rgbDistance(rgbv_so, rgbv_no) < thres) {
    const mean = rgbMean([rgbv_ne, rgbv_no, rgbv_se, rgbv_so]);
    const mask = [];
    for (let i = 0; i < idata.width * idata.height; i++) {
      const d = rgbDistance(mean, [
        idata.data[i * 4],
        idata.data[i * 4 + 1],
        idata.data[i * 4 + 2]
      ]);
      mask[i] = d < thres ? 0 : 255;
    }
    return mask;
  }
}
function applyMask(idata, mask) {
  for (let i = 0; i < idata.width * idata.height; i++) {
    idata.data[4 * i + 3] = mask[i];
  }
}
function erodeMask(mask, sw, sh2) {
  const weights = [1, 1, 1, 1, 0, 1, 1, 1, 1];
  const side = Math.round(Math.sqrt(weights.length));
  const halfSide = Math.floor(side / 2);
  const maskResult = [];
  for (let y2 = 0; y2 < sh2; y2++) {
    for (let x2 = 0; x2 < sw; x2++) {
      const so = y2 * sw + x2;
      let a = 0;
      for (let cy = 0; cy < side; cy++) {
        for (let cx = 0; cx < side; cx++) {
          const scy = y2 + cy - halfSide;
          const scx = x2 + cx - halfSide;
          if (scy >= 0 && scy < sh2 && scx >= 0 && scx < sw) {
            const srcOff = scy * sw + scx;
            const wt = weights[cy * side + cx];
            a += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a === 255 * 8 ? 255 : 0;
    }
  }
  return maskResult;
}
function dilateMask(mask, sw, sh2) {
  const weights = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  const side = Math.round(Math.sqrt(weights.length));
  const halfSide = Math.floor(side / 2);
  const maskResult = [];
  for (let y2 = 0; y2 < sh2; y2++) {
    for (let x2 = 0; x2 < sw; x2++) {
      const so = y2 * sw + x2;
      let a = 0;
      for (let cy = 0; cy < side; cy++) {
        for (let cx = 0; cx < side; cx++) {
          const scy = y2 + cy - halfSide;
          const scx = x2 + cx - halfSide;
          if (scy >= 0 && scy < sh2 && scx >= 0 && scx < sw) {
            const srcOff = scy * sw + scx;
            const wt = weights[cy * side + cx];
            a += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a >= 255 * 4 ? 255 : 0;
    }
  }
  return maskResult;
}
function smoothEdgeMask(mask, sw, sh2) {
  const weights = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9];
  const side = Math.round(Math.sqrt(weights.length));
  const halfSide = Math.floor(side / 2);
  const maskResult = [];
  for (let y2 = 0; y2 < sh2; y2++) {
    for (let x2 = 0; x2 < sw; x2++) {
      const so = y2 * sw + x2;
      let a = 0;
      for (let cy = 0; cy < side; cy++) {
        for (let cx = 0; cx < side; cx++) {
          const scy = y2 + cy - halfSide;
          const scx = x2 + cx - halfSide;
          if (scy >= 0 && scy < sh2 && scx >= 0 && scx < sw) {
            const srcOff = scy * sw + scx;
            const wt = weights[cy * side + cx];
            a += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a;
    }
  }
  return maskResult;
}
const Mask = function(imageData) {
  const threshold = this.threshold();
  let mask = backgroundMask(imageData, threshold);
  if (mask) {
    mask = erodeMask(mask, imageData.width, imageData.height);
    mask = dilateMask(mask, imageData.width, imageData.height);
    mask = smoothEdgeMask(mask, imageData.width, imageData.height);
    applyMask(imageData, mask);
  }
  return imageData;
};
Mask$1.Mask = Mask;
Factory_1$6.Factory.addGetterSetter(Node_1$6.Node, "threshold", 0, (0, Validators_1$6.getNumberValidator)(), Factory_1$6.Factory.afterSetFilter);
var Noise$1 = {};
Object.defineProperty(Noise$1, "__esModule", { value: true });
Noise$1.Noise = void 0;
const Factory_1$5 = Factory;
const Node_1$5 = Node$1;
const Validators_1$5 = Validators;
const Noise = function(imageData) {
  const amount = this.noise() * 255, data = imageData.data, nPixels = data.length, half = amount / 2;
  for (let i = 0; i < nPixels; i += 4) {
    data[i + 0] += half - 2 * half * Math.random();
    data[i + 1] += half - 2 * half * Math.random();
    data[i + 2] += half - 2 * half * Math.random();
  }
};
Noise$1.Noise = Noise;
Factory_1$5.Factory.addGetterSetter(Node_1$5.Node, "noise", 0.2, (0, Validators_1$5.getNumberValidator)(), Factory_1$5.Factory.afterSetFilter);
var Pixelate$1 = {};
Object.defineProperty(Pixelate$1, "__esModule", { value: true });
Pixelate$1.Pixelate = void 0;
const Factory_1$4 = Factory;
const Util_1 = Util;
const Node_1$4 = Node$1;
const Validators_1$4 = Validators;
const Pixelate = function(imageData) {
  let pixelSize = Math.ceil(this.pixelSize()), width = imageData.width, height = imageData.height, nBinsX = Math.ceil(width / pixelSize), nBinsY = Math.ceil(height / pixelSize), data = imageData.data;
  if (pixelSize <= 0) {
    Util_1.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (let xBin = 0; xBin < nBinsX; xBin += 1) {
    for (let yBin = 0; yBin < nBinsY; yBin += 1) {
      let red = 0;
      let green = 0;
      let blue = 0;
      let alpha = 0;
      const xBinStart = xBin * pixelSize;
      const xBinEnd = xBinStart + pixelSize;
      const yBinStart = yBin * pixelSize;
      const yBinEnd = yBinStart + pixelSize;
      let pixelsInBin = 0;
      for (let x2 = xBinStart; x2 < xBinEnd; x2 += 1) {
        if (x2 >= width) {
          continue;
        }
        for (let y2 = yBinStart; y2 < yBinEnd; y2 += 1) {
          if (y2 >= height) {
            continue;
          }
          const i = (width * y2 + x2) * 4;
          red += data[i + 0];
          green += data[i + 1];
          blue += data[i + 2];
          alpha += data[i + 3];
          pixelsInBin += 1;
        }
      }
      red = red / pixelsInBin;
      green = green / pixelsInBin;
      blue = blue / pixelsInBin;
      alpha = alpha / pixelsInBin;
      for (let x2 = xBinStart; x2 < xBinEnd; x2 += 1) {
        if (x2 >= width) {
          continue;
        }
        for (let y2 = yBinStart; y2 < yBinEnd; y2 += 1) {
          if (y2 >= height) {
            continue;
          }
          const i = (width * y2 + x2) * 4;
          data[i + 0] = red;
          data[i + 1] = green;
          data[i + 2] = blue;
          data[i + 3] = alpha;
        }
      }
    }
  }
};
Pixelate$1.Pixelate = Pixelate;
Factory_1$4.Factory.addGetterSetter(Node_1$4.Node, "pixelSize", 8, (0, Validators_1$4.getNumberValidator)(), Factory_1$4.Factory.afterSetFilter);
var Posterize$1 = {};
Object.defineProperty(Posterize$1, "__esModule", { value: true });
Posterize$1.Posterize = void 0;
const Factory_1$3 = Factory;
const Node_1$3 = Node$1;
const Validators_1$3 = Validators;
const Posterize = function(imageData) {
  const levels = Math.round(this.levels() * 254) + 1, data = imageData.data, len = data.length, scale = 255 / levels;
  for (let i = 0; i < len; i += 1) {
    data[i] = Math.floor(data[i] / scale) * scale;
  }
};
Posterize$1.Posterize = Posterize;
Factory_1$3.Factory.addGetterSetter(Node_1$3.Node, "levels", 0.5, (0, Validators_1$3.getNumberValidator)(), Factory_1$3.Factory.afterSetFilter);
var RGB$1 = {};
Object.defineProperty(RGB$1, "__esModule", { value: true });
RGB$1.RGB = void 0;
const Factory_1$2 = Factory;
const Node_1$2 = Node$1;
const Validators_1$2 = Validators;
const RGB = function(imageData) {
  const data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue();
  for (let i = 0; i < nPixels; i += 4) {
    const brightness = (0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2]) / 255;
    data[i] = brightness * red;
    data[i + 1] = brightness * green;
    data[i + 2] = brightness * blue;
    data[i + 3] = data[i + 3];
  }
};
RGB$1.RGB = RGB;
Factory_1$2.Factory.addGetterSetter(Node_1$2.Node, "red", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory_1$2.Factory.addGetterSetter(Node_1$2.Node, "green", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory_1$2.Factory.addGetterSetter(Node_1$2.Node, "blue", 0, Validators_1$2.RGBComponent, Factory_1$2.Factory.afterSetFilter);
var RGBA$1 = {};
Object.defineProperty(RGBA$1, "__esModule", { value: true });
RGBA$1.RGBA = void 0;
const Factory_1$1 = Factory;
const Node_1$1 = Node$1;
const Validators_1$1 = Validators;
const RGBA = function(imageData) {
  const data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), alpha = this.alpha();
  for (let i = 0; i < nPixels; i += 4) {
    const ia2 = 1 - alpha;
    data[i] = red * alpha + data[i] * ia2;
    data[i + 1] = green * alpha + data[i + 1] * ia2;
    data[i + 2] = blue * alpha + data[i + 2] * ia2;
  }
};
RGBA$1.RGBA = RGBA;
Factory_1$1.Factory.addGetterSetter(Node_1$1.Node, "red", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory_1$1.Factory.addGetterSetter(Node_1$1.Node, "green", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory_1$1.Factory.addGetterSetter(Node_1$1.Node, "blue", 0, Validators_1$1.RGBComponent, Factory_1$1.Factory.afterSetFilter);
Factory_1$1.Factory.addGetterSetter(Node_1$1.Node, "alpha", 1, function(val) {
  this._filterUpToDate = false;
  if (val > 1) {
    return 1;
  } else if (val < 0) {
    return 0;
  } else {
    return val;
  }
});
var Sepia$1 = {};
Object.defineProperty(Sepia$1, "__esModule", { value: true });
Sepia$1.Sepia = void 0;
const Sepia = function(imageData) {
  const data = imageData.data, nPixels = data.length;
  for (let i = 0; i < nPixels; i += 4) {
    const r2 = data[i + 0];
    const g = data[i + 1];
    const b = data[i + 2];
    data[i + 0] = Math.min(255, r2 * 0.393 + g * 0.769 + b * 0.189);
    data[i + 1] = Math.min(255, r2 * 0.349 + g * 0.686 + b * 0.168);
    data[i + 2] = Math.min(255, r2 * 0.272 + g * 0.534 + b * 0.131);
  }
};
Sepia$1.Sepia = Sepia;
var Solarize$1 = {};
Object.defineProperty(Solarize$1, "__esModule", { value: true });
Solarize$1.Solarize = void 0;
const Solarize = function(imageData) {
  const data = imageData.data, w2 = imageData.width, h = imageData.height, w4 = w2 * 4;
  let y2 = h;
  do {
    const offsetY = (y2 - 1) * w4;
    let x2 = w2;
    do {
      const offset = offsetY + (x2 - 1) * 4;
      let r2 = data[offset];
      let g = data[offset + 1];
      let b = data[offset + 2];
      if (r2 > 127) {
        r2 = 255 - r2;
      }
      if (g > 127) {
        g = 255 - g;
      }
      if (b > 127) {
        b = 255 - b;
      }
      data[offset] = r2;
      data[offset + 1] = g;
      data[offset + 2] = b;
    } while (--x2);
  } while (--y2);
};
Solarize$1.Solarize = Solarize;
var Threshold$1 = {};
Object.defineProperty(Threshold$1, "__esModule", { value: true });
Threshold$1.Threshold = void 0;
const Factory_1 = Factory;
const Node_1 = Node$1;
const Validators_1 = Validators;
const Threshold = function(imageData) {
  const level = this.threshold() * 255, data = imageData.data, len = data.length;
  for (let i = 0; i < len; i += 1) {
    data[i] = data[i] < level ? 0 : 255;
  }
};
Threshold$1.Threshold = Threshold;
Factory_1.Factory.addGetterSetter(Node_1.Node, "threshold", 0.5, (0, Validators_1.getNumberValidator)(), Factory_1.Factory.afterSetFilter);
Object.defineProperty(_FullInternals, "__esModule", { value: true });
_FullInternals.Konva = void 0;
const _CoreInternals_1 = _CoreInternals;
const Arc_1 = Arc$1;
const Arrow_1 = Arrow$1;
const Circle_1 = Circle$2;
const Ellipse_1 = Ellipse$1;
const Image_1 = Image$1;
const Label_1 = Label$1;
const Line_1 = Line$2;
const Path_1 = Path$1;
const Rect_1 = Rect$2;
const RegularPolygon_1 = RegularPolygon$1;
const Ring_1 = Ring$1;
const Sprite_1 = Sprite$1;
const Star_1 = Star$1;
const Text_1 = Text$1;
const TextPath_1 = TextPath$1;
const Transformer_1 = Transformer$2;
const Wedge_1 = Wedge$1;
const Blur_1 = Blur$1;
const Brighten_1 = Brighten$1;
const Contrast_1 = Contrast$1;
const Emboss_1 = Emboss$1;
const Enhance_1 = Enhance$1;
const Grayscale_1 = Grayscale$1;
const HSL_1 = HSL$1;
const HSV_1 = HSV$1;
const Invert_1 = Invert$1;
const Kaleidoscope_1 = Kaleidoscope$1;
const Mask_1 = Mask$1;
const Noise_1 = Noise$1;
const Pixelate_1 = Pixelate$1;
const Posterize_1 = Posterize$1;
const RGB_1 = RGB$1;
const RGBA_1 = RGBA$1;
const Sepia_1 = Sepia$1;
const Solarize_1 = Solarize$1;
const Threshold_1 = Threshold$1;
_FullInternals.Konva = _CoreInternals_1.Konva.Util._assign(_CoreInternals_1.Konva, {
  Arc: Arc_1.Arc,
  Arrow: Arrow_1.Arrow,
  Circle: Circle_1.Circle,
  Ellipse: Ellipse_1.Ellipse,
  Image: Image_1.Image,
  Label: Label_1.Label,
  Tag: Label_1.Tag,
  Line: Line_1.Line,
  Path: Path_1.Path,
  Rect: Rect_1.Rect,
  RegularPolygon: RegularPolygon_1.RegularPolygon,
  Ring: Ring_1.Ring,
  Sprite: Sprite_1.Sprite,
  Star: Star_1.Star,
  Text: Text_1.Text,
  TextPath: TextPath_1.TextPath,
  Transformer: Transformer_1.Transformer,
  Wedge: Wedge_1.Wedge,
  Filters: {
    Blur: Blur_1.Blur,
    Brighten: Brighten_1.Brighten,
    Contrast: Contrast_1.Contrast,
    Emboss: Emboss_1.Emboss,
    Enhance: Enhance_1.Enhance,
    Grayscale: Grayscale_1.Grayscale,
    HSL: HSL_1.HSL,
    HSV: HSV_1.HSV,
    Invert: Invert_1.Invert,
    Kaleidoscope: Kaleidoscope_1.Kaleidoscope,
    Mask: Mask_1.Mask,
    Noise: Noise_1.Noise,
    Pixelate: Pixelate_1.Pixelate,
    Posterize: Posterize_1.Posterize,
    RGB: RGB_1.RGB,
    RGBA: RGBA_1.RGBA,
    Sepia: Sepia_1.Sepia,
    Solarize: Solarize_1.Solarize,
    Threshold: Threshold_1.Threshold
  }
});
var lib = lib$1.exports;
Object.defineProperty(lib, "__esModule", { value: true });
const _FullInternals_1 = _FullInternals;
lib$1.exports = _FullInternals_1.Konva;
var Core = { exports: {} };
(function(module, exports$1) {
  Object.defineProperty(exports$1, "__esModule", { value: true });
  exports$1.Konva = void 0;
  var _CoreInternals_12 = _CoreInternals;
  Object.defineProperty(exports$1, "Konva", { enumerable: true, get: function() {
    return _CoreInternals_12.Konva;
  } });
  const _CoreInternals_2 = _CoreInternals;
  module.exports = _CoreInternals_2.Konva;
})(Core, Core.exports);
var CoreExports = Core.exports;
const Konva = /* @__PURE__ */ getDefaultExportFromCjs(CoreExports);
var reactReconciler = { exports: {} };
/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var reactReconciler_production_min = function $$$reconciler($$$hostConfig) {
  var exports$1 = {};
  var aa2 = reactExports, ba = schedulerExports, ca2 = Object.assign;
  function n2(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da2 = aa2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ea2 = Symbol.for("react.element"), fa2 = Symbol.for("react.portal"), ha2 = Symbol.for("react.fragment"), ia2 = Symbol.for("react.strict_mode"), ja2 = Symbol.for("react.profiler"), ka2 = Symbol.for("react.provider"), la2 = Symbol.for("react.context"), ma2 = Symbol.for("react.forward_ref"), na = Symbol.for("react.suspense"), oa2 = Symbol.for("react.suspense_list"), pa2 = Symbol.for("react.memo"), qa2 = Symbol.for("react.lazy");
  var ra2 = Symbol.for("react.offscreen");
  var sa2 = Symbol.iterator;
  function ta2(a) {
    if (null === a || "object" !== typeof a) return null;
    a = sa2 && a[sa2] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  function ua2(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case ha2:
        return "Fragment";
      case fa2:
        return "Portal";
      case ja2:
        return "Profiler";
      case ia2:
        return "StrictMode";
      case na:
        return "Suspense";
      case oa2:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case la2:
        return (a.displayName || "Context") + ".Consumer";
      case ka2:
        return (a._context.displayName || "Context") + ".Provider";
      case ma2:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case pa2:
        return b = a.displayName || null, null !== b ? b : ua2(a.type) || "Memo";
      case qa2:
        b = a._payload;
        a = a._init;
        try {
          return ua2(a(b));
        } catch (c) {
        }
    }
    return null;
  }
  function va2(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ua2(b);
      case 8:
        return b === ia2 ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b) return b.displayName || b.name || null;
        if ("string" === typeof b) return b;
    }
    return null;
  }
  function wa2(a) {
    var b = a, c = a;
    if (a.alternate) for (; b.return; ) b = b.return;
    else {
      a = b;
      do
        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
      while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function xa(a) {
    if (wa2(a) !== a) throw Error(n2(188));
  }
  function za2(a) {
    var b = a.alternate;
    if (!b) {
      b = wa2(a);
      if (null === b) throw Error(n2(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e) break;
      var f2 = e.alternate;
      if (null === f2) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f2.child) {
        for (f2 = e.child; f2; ) {
          if (f2 === c) return xa(e), a;
          if (f2 === d) return xa(e), b;
          f2 = f2.sibling;
        }
        throw Error(n2(188));
      }
      if (c.return !== d.return) c = e, d = f2;
      else {
        for (var g = false, h = e.child; h; ) {
          if (h === c) {
            g = true;
            c = e;
            d = f2;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c = f2;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f2.child; h; ) {
            if (h === c) {
              g = true;
              c = f2;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f2;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error(n2(189));
        }
      }
      if (c.alternate !== d) throw Error(n2(190));
    }
    if (3 !== c.tag) throw Error(n2(188));
    return c.stateNode.current === c ? a : b;
  }
  function Aa2(a) {
    a = za2(a);
    return null !== a ? Ba2(a) : null;
  }
  function Ba2(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      var b = Ba2(a);
      if (null !== b) return b;
      a = a.sibling;
    }
    return null;
  }
  function Ca2(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      if (4 !== a.tag) {
        var b = Ca2(a);
        if (null !== b) return b;
      }
      a = a.sibling;
    }
    return null;
  }
  var Da2 = Array.isArray, Ea2 = $$$hostConfig.getPublicInstance, Fa2 = $$$hostConfig.getRootHostContext, Ga2 = $$$hostConfig.getChildHostContext, Ha2 = $$$hostConfig.prepareForCommit, Ia2 = $$$hostConfig.resetAfterCommit, Ja2 = $$$hostConfig.createInstance, Ka2 = $$$hostConfig.appendInitialChild, La2 = $$$hostConfig.finalizeInitialChildren, Ma2 = $$$hostConfig.prepareUpdate, Na2 = $$$hostConfig.shouldSetTextContent, Oa2 = $$$hostConfig.createTextInstance, Pa2 = $$$hostConfig.scheduleTimeout, Qa2 = $$$hostConfig.cancelTimeout, Ra2 = $$$hostConfig.noTimeout, Sa2 = $$$hostConfig.isPrimaryRenderer, Ta2 = $$$hostConfig.supportsMutation, Ua2 = $$$hostConfig.supportsPersistence, Va2 = $$$hostConfig.supportsHydration, Wa2 = $$$hostConfig.getInstanceFromNode, Xa2 = $$$hostConfig.preparePortalMount, Ya2 = $$$hostConfig.getCurrentEventPriority, Za2 = $$$hostConfig.detachDeletedInstance, $a = $$$hostConfig.supportsMicrotasks, ab2 = $$$hostConfig.scheduleMicrotask, bb2 = $$$hostConfig.supportsTestSelectors, cb2 = $$$hostConfig.findFiberRoot, db2 = $$$hostConfig.getBoundingRect, eb2 = $$$hostConfig.getTextContent, fb2 = $$$hostConfig.isHiddenSubtree, gb2 = $$$hostConfig.matchAccessibilityRole, hb2 = $$$hostConfig.setFocusIfFocusable, ib2 = $$$hostConfig.setupIntersectionObserver, jb2 = $$$hostConfig.appendChild, kb2 = $$$hostConfig.appendChildToContainer, lb2 = $$$hostConfig.commitTextUpdate, mb2 = $$$hostConfig.commitMount, nb2 = $$$hostConfig.commitUpdate, ob2 = $$$hostConfig.insertBefore, pb2 = $$$hostConfig.insertInContainerBefore, qb2 = $$$hostConfig.removeChild, rb2 = $$$hostConfig.removeChildFromContainer, sb2 = $$$hostConfig.resetTextContent, tb2 = $$$hostConfig.hideInstance, ub2 = $$$hostConfig.hideTextInstance, vb2 = $$$hostConfig.unhideInstance, wb2 = $$$hostConfig.unhideTextInstance, xb2 = $$$hostConfig.clearContainer, yb2 = $$$hostConfig.cloneInstance, zb2 = $$$hostConfig.createContainerChildSet, Ab2 = $$$hostConfig.appendChildToContainerChildSet, Bb2 = $$$hostConfig.finalizeContainerChildren, Cb2 = $$$hostConfig.replaceContainerChildren, Eb2 = $$$hostConfig.cloneHiddenInstance, Fb2 = $$$hostConfig.cloneHiddenTextInstance, Gb2 = $$$hostConfig.canHydrateInstance, Hb2 = $$$hostConfig.canHydrateTextInstance, Ib2 = $$$hostConfig.canHydrateSuspenseInstance, Jb2 = $$$hostConfig.isSuspenseInstancePending, Kb2 = $$$hostConfig.isSuspenseInstanceFallback, Lb2 = $$$hostConfig.getSuspenseInstanceFallbackErrorDetails, Mb = $$$hostConfig.registerSuspenseInstanceRetry, Nb2 = $$$hostConfig.getNextHydratableSibling, Ob2 = $$$hostConfig.getFirstHydratableChild, Pb2 = $$$hostConfig.getFirstHydratableChildWithinContainer, Qb2 = $$$hostConfig.getFirstHydratableChildWithinSuspenseInstance, Rb2 = $$$hostConfig.hydrateInstance, Sb2 = $$$hostConfig.hydrateTextInstance, Tb2 = $$$hostConfig.hydrateSuspenseInstance, Ub2 = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance, Vb2 = $$$hostConfig.commitHydratedContainer, Wb2 = $$$hostConfig.commitHydratedSuspenseInstance, Xb2 = $$$hostConfig.clearSuspenseBoundary, Yb2 = $$$hostConfig.clearSuspenseBoundaryFromContainer, Zb2 = $$$hostConfig.shouldDeleteUnhydratedTailInstances, $b2 = $$$hostConfig.didNotMatchHydratedContainerTextInstance, ac2 = $$$hostConfig.didNotMatchHydratedTextInstance, bc2;
  function cc2(a) {
    if (void 0 === bc2) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      bc2 = b && b[1] || "";
    }
    return "\n" + bc2 + a;
  }
  var dc2 = false;
  function ec2(a, b) {
    if (!a || dc2) return "";
    dc2 = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b) if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l2) {
          d = l2;
        }
        a();
      }
    } catch (l2) {
      if (l2 && d && "string" === typeof l2.stack) {
        for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; ) h--;
        for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f2[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f2[h]) {
                var k2 = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
      }
    } finally {
      dc2 = false, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? cc2(a) : "";
  }
  var fc2 = Object.prototype.hasOwnProperty, gc2 = [], hc2 = -1;
  function ic2(a) {
    return { current: a };
  }
  function q2(a) {
    0 > hc2 || (a.current = gc2[hc2], gc2[hc2] = null, hc2--);
  }
  function v2(a, b) {
    hc2++;
    gc2[hc2] = a.current;
    a.current = b;
  }
  var jc2 = {}, x2 = ic2(jc2), z2 = ic2(false), kc2 = jc2;
  function mc2(a, b) {
    var c = a.type.contextTypes;
    if (!c) return jc2;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f2;
    for (f2 in c) e[f2] = b[f2];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function A2(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function nc2() {
    q2(z2);
    q2(x2);
  }
  function oc2(a, b, c) {
    if (x2.current !== jc2) throw Error(n2(168));
    v2(x2, b);
    v2(z2, c);
  }
  function pc2(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in b)) throw Error(n2(108, va2(a) || "Unknown", e));
    return ca2({}, c, d);
  }
  function qc2(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || jc2;
    kc2 = x2.current;
    v2(x2, a);
    v2(z2, z2.current);
    return true;
  }
  function rc2(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(n2(169));
    c ? (a = pc2(a, b, kc2), d.__reactInternalMemoizedMergedChildContext = a, q2(z2), q2(x2), v2(x2, a)) : q2(z2);
    v2(z2, c);
  }
  var tc2 = Math.clz32 ? Math.clz32 : sc2, uc2 = Math.log, vc2 = Math.LN2;
  function sc2(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (uc2(a) / vc2 | 0) | 0;
  }
  var wc2 = 64, xc2 = 4194304;
  function yc2(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function zc2(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = yc2(h) : (f2 &= g, 0 !== f2 && (d = yc2(f2)));
    } else g = c & ~e, 0 !== g ? d = yc2(g) : 0 !== f2 && (d = yc2(f2));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - tc2(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function Ac2(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Bc2(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
      var g = 31 - tc2(f2), h = 1 << g, k2 = e[g];
      if (-1 === k2) {
        if (0 === (h & c) || 0 !== (h & d)) e[g] = Ac2(h, b);
      } else k2 <= b && (a.expiredLanes |= h);
      f2 &= ~h;
    }
  }
  function Cc2(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function Dc2() {
    var a = wc2;
    wc2 <<= 1;
    0 === (wc2 & 4194240) && (wc2 = 64);
    return a;
  }
  function Ec2(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function Fc2(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - tc2(b);
    a[b] = c;
  }
  function Gc2(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes; 0 < c; ) {
      var e = 31 - tc2(c), f2 = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f2;
    }
  }
  function Hc2(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements; c; ) {
      var d = 31 - tc2(c), e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }
  var C2 = 0;
  function Ic2(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Jc2 = ba.unstable_scheduleCallback, Kc2 = ba.unstable_cancelCallback, Lc2 = ba.unstable_shouldYield, Mc2 = ba.unstable_requestPaint, D2 = ba.unstable_now, Nc2 = ba.unstable_ImmediatePriority, Oc2 = ba.unstable_UserBlockingPriority, Pc2 = ba.unstable_NormalPriority, Qc2 = ba.unstable_IdlePriority, Rc2 = null, Sc2 = null;
  function Tc2(a) {
    if (Sc2 && "function" === typeof Sc2.onCommitFiberRoot) try {
      Sc2.onCommitFiberRoot(Rc2, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
  }
  function Uc2(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var Vc2 = "function" === typeof Object.is ? Object.is : Uc2, Wc2 = null, Xc2 = false, Yc2 = false;
  function Zc2(a) {
    null === Wc2 ? Wc2 = [a] : Wc2.push(a);
  }
  function $c2(a) {
    Xc2 = true;
    Zc2(a);
  }
  function ad2() {
    if (!Yc2 && null !== Wc2) {
      Yc2 = true;
      var a = 0, b = C2;
      try {
        var c = Wc2;
        for (C2 = 1; a < c.length; a++) {
          var d = c[a];
          do
            d = d(true);
          while (null !== d);
        }
        Wc2 = null;
        Xc2 = false;
      } catch (e) {
        throw null !== Wc2 && (Wc2 = Wc2.slice(a + 1)), Jc2(Nc2, ad2), e;
      } finally {
        C2 = b, Yc2 = false;
      }
    }
    return null;
  }
  var bd2 = [], cd2 = 0, dd2 = null, ed2 = 0, fd2 = [], gd2 = 0, hd2 = null, id2 = 1, jd2 = "";
  function kd2(a, b) {
    bd2[cd2++] = ed2;
    bd2[cd2++] = dd2;
    dd2 = a;
    ed2 = b;
  }
  function ld2(a, b, c) {
    fd2[gd2++] = id2;
    fd2[gd2++] = jd2;
    fd2[gd2++] = hd2;
    hd2 = a;
    var d = id2;
    a = jd2;
    var e = 32 - tc2(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f2 = 32 - tc2(b) + e;
    if (30 < f2) {
      var g = e - e % 5;
      f2 = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      id2 = 1 << 32 - tc2(b) + e | c << e | d;
      jd2 = f2 + a;
    } else id2 = 1 << f2 | c << e | d, jd2 = a;
  }
  function md2(a) {
    null !== a.return && (kd2(a, 1), ld2(a, 1, 0));
  }
  function nd2(a) {
    for (; a === dd2; ) dd2 = bd2[--cd2], bd2[cd2] = null, ed2 = bd2[--cd2], bd2[cd2] = null;
    for (; a === hd2; ) hd2 = fd2[--gd2], fd2[gd2] = null, jd2 = fd2[--gd2], fd2[gd2] = null, id2 = fd2[--gd2], fd2[gd2] = null;
  }
  var od2 = null, pd2 = null, F2 = false, qd2 = false, rd2 = null;
  function sd2(a, b) {
    var c = td2(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }
  function ud2(a, b) {
    switch (a.tag) {
      case 5:
        return b = Gb2(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, od2 = a, pd2 = Ob2(b), true) : false;
      case 6:
        return b = Hb2(b, a.pendingProps), null !== b ? (a.stateNode = b, od2 = a, pd2 = null, true) : false;
      case 13:
        b = Ib2(b);
        if (null !== b) {
          var c = null !== hd2 ? { id: id2, overflow: jd2 } : null;
          a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 };
          c = td2(18, null, null, 0);
          c.stateNode = b;
          c.return = a;
          a.child = c;
          od2 = a;
          pd2 = null;
          return true;
        }
        return false;
      default:
        return false;
    }
  }
  function vd2(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function wd2(a) {
    if (F2) {
      var b = pd2;
      if (b) {
        var c = b;
        if (!ud2(a, b)) {
          if (vd2(a)) throw Error(n2(418));
          b = Nb2(c);
          var d = od2;
          b && ud2(a, b) ? sd2(d, c) : (a.flags = a.flags & -4097 | 2, F2 = false, od2 = a);
        }
      } else {
        if (vd2(a)) throw Error(n2(418));
        a.flags = a.flags & -4097 | 2;
        F2 = false;
        od2 = a;
      }
    }
  }
  function xd2(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
    od2 = a;
  }
  function yd2(a) {
    if (!Va2 || a !== od2) return false;
    if (!F2) return xd2(a), F2 = true, false;
    if (3 !== a.tag && (5 !== a.tag || Zb2(a.type) && !Na2(a.type, a.memoizedProps))) {
      var b = pd2;
      if (b) {
        if (vd2(a)) throw zd2(), Error(n2(418));
        for (; b; ) sd2(a, b), b = Nb2(b);
      }
    }
    xd2(a);
    if (13 === a.tag) {
      if (!Va2) throw Error(n2(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(n2(317));
      pd2 = Ub2(a);
    } else pd2 = od2 ? Nb2(a.stateNode) : null;
    return true;
  }
  function zd2() {
    for (var a = pd2; a; ) a = Nb2(a);
  }
  function Ad2() {
    Va2 && (pd2 = od2 = null, qd2 = F2 = false);
  }
  function Bd2(a) {
    null === rd2 ? rd2 = [a] : rd2.push(a);
  }
  var Cd2 = da2.ReactCurrentBatchConfig;
  function Dd2(a, b) {
    if (Vc2(a, b)) return true;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return false;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!fc2.call(b, e) || !Vc2(a[e], b[e])) return false;
    }
    return true;
  }
  function Ed2(a) {
    switch (a.tag) {
      case 5:
        return cc2(a.type);
      case 16:
        return cc2("Lazy");
      case 13:
        return cc2("Suspense");
      case 19:
        return cc2("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = ec2(a.type, false), a;
      case 11:
        return a = ec2(a.type.render, false), a;
      case 1:
        return a = ec2(a.type, true), a;
      default:
        return "";
    }
  }
  function Fd2(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(n2(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(n2(147, a));
        var e = d, f2 = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
        b = function(a2) {
          var b2 = e.refs;
          null === a2 ? delete b2[f2] : b2[f2] = a2;
        };
        b._stringRef = f2;
        return b;
      }
      if ("string" !== typeof a) throw Error(n2(284));
      if (!c._owner) throw Error(n2(290, a));
    }
    return a;
  }
  function Gd2(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(n2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }
  function Hd2(a) {
    var b = a._init;
    return b(a._payload);
  }
  function Id2(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a) return null;
      for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = Jd2(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f2(b2, c2, d2) {
      b2.index = d2;
      if (!a) return b2.flags |= 1048576, c2;
      d2 = b2.alternate;
      if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g(b2) {
      a && null === b2.alternate && (b2.flags |= 2);
      return b2;
    }
    function h(a2, b2, c2, d2) {
      if (null === b2 || 6 !== b2.tag) return b2 = Kd2(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k2(a2, b2, c2, d2) {
      var f3 = c2.type;
      if (f3 === ha2) return m2(a2, b2, c2.props.children, d2, c2.key);
      if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === qa2 && Hd2(f3) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Fd2(a2, b2, c2), d2.return = a2, d2;
      d2 = Ld2(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = Fd2(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l2(a2, b2, c2, d2) {
      if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Md2(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m2(a2, b2, c2, d2, f3) {
      if (null === b2 || 7 !== b2.tag) return b2 = Nd2(c2, a2.mode, d2, f3), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function r2(a2, b2, c2) {
      if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Kd2("" + b2, a2.mode, c2), b2.return = a2, b2;
      if ("object" === typeof b2 && null !== b2) {
        switch (b2.$$typeof) {
          case ea2:
            return c2 = Ld2(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Fd2(a2, null, b2), c2.return = a2, c2;
          case fa2:
            return b2 = Md2(b2, a2.mode, c2), b2.return = a2, b2;
          case qa2:
            var d2 = b2._init;
            return r2(a2, d2(b2._payload), c2);
        }
        if (Da2(b2) || ta2(b2)) return b2 = Nd2(b2, a2.mode, c2, null), b2.return = a2, b2;
        Gd2(a2, b2);
      }
      return null;
    }
    function p2(a2, b2, c2, d2) {
      var e2 = null !== b2 ? b2.key : null;
      if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case ea2:
            return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
          case fa2:
            return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
          case qa2:
            return e2 = c2._init, p2(
              a2,
              b2,
              e2(c2._payload),
              d2
            );
        }
        if (Da2(c2) || ta2(c2)) return null !== e2 ? null : m2(a2, b2, c2, d2, null);
        Gd2(a2, c2);
      }
      return null;
    }
    function B2(a2, b2, c2, d2, e2) {
      if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
      if ("object" === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case ea2:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
          case fa2:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
          case qa2:
            var f3 = d2._init;
            return B2(a2, b2, c2, f3(d2._payload), e2);
        }
        if (Da2(d2) || ta2(d2)) return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
        Gd2(b2, d2);
      }
      return null;
    }
    function w2(e2, g2, h2, k3) {
      for (var l3 = null, m3 = null, u2 = g2, t2 = g2 = 0, E2 = null; null !== u2 && t2 < h2.length; t2++) {
        u2.index > t2 ? (E2 = u2, u2 = null) : E2 = u2.sibling;
        var y2 = p2(e2, u2, h2[t2], k3);
        if (null === y2) {
          null === u2 && (u2 = E2);
          break;
        }
        a && u2 && null === y2.alternate && b(e2, u2);
        g2 = f2(y2, g2, t2);
        null === m3 ? l3 = y2 : m3.sibling = y2;
        m3 = y2;
        u2 = E2;
      }
      if (t2 === h2.length) return c(e2, u2), F2 && kd2(e2, t2), l3;
      if (null === u2) {
        for (; t2 < h2.length; t2++) u2 = r2(e2, h2[t2], k3), null !== u2 && (g2 = f2(u2, g2, t2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        F2 && kd2(e2, t2);
        return l3;
      }
      for (u2 = d(e2, u2); t2 < h2.length; t2++) E2 = B2(u2, e2, t2, h2[t2], k3), null !== E2 && (a && null !== E2.alternate && u2.delete(null === E2.key ? t2 : E2.key), g2 = f2(E2, g2, t2), null === m3 ? l3 = E2 : m3.sibling = E2, m3 = E2);
      a && u2.forEach(function(a2) {
        return b(e2, a2);
      });
      F2 && kd2(e2, t2);
      return l3;
    }
    function Y2(e2, g2, h2, k3) {
      var l3 = ta2(h2);
      if ("function" !== typeof l3) throw Error(n2(150));
      h2 = l3.call(h2);
      if (null == h2) throw Error(n2(151));
      for (var u2 = l3 = null, m3 = g2, t2 = g2 = 0, E2 = null, y2 = h2.next(); null !== m3 && !y2.done; t2++, y2 = h2.next()) {
        m3.index > t2 ? (E2 = m3, m3 = null) : E2 = m3.sibling;
        var w3 = p2(e2, m3, y2.value, k3);
        if (null === w3) {
          null === m3 && (m3 = E2);
          break;
        }
        a && m3 && null === w3.alternate && b(e2, m3);
        g2 = f2(w3, g2, t2);
        null === u2 ? l3 = w3 : u2.sibling = w3;
        u2 = w3;
        m3 = E2;
      }
      if (y2.done) return c(
        e2,
        m3
      ), F2 && kd2(e2, t2), l3;
      if (null === m3) {
        for (; !y2.done; t2++, y2 = h2.next()) y2 = r2(e2, y2.value, k3), null !== y2 && (g2 = f2(y2, g2, t2), null === u2 ? l3 = y2 : u2.sibling = y2, u2 = y2);
        F2 && kd2(e2, t2);
        return l3;
      }
      for (m3 = d(e2, m3); !y2.done; t2++, y2 = h2.next()) y2 = B2(m3, e2, t2, y2.value, k3), null !== y2 && (a && null !== y2.alternate && m3.delete(null === y2.key ? t2 : y2.key), g2 = f2(y2, g2, t2), null === u2 ? l3 = y2 : u2.sibling = y2, u2 = y2);
      a && m3.forEach(function(a2) {
        return b(e2, a2);
      });
      F2 && kd2(e2, t2);
      return l3;
    }
    function ya2(a2, d2, f3, h2) {
      "object" === typeof f3 && null !== f3 && f3.type === ha2 && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case ea2:
            a: {
              for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ha2) {
                    if (7 === l3.tag) {
                      c(a2, l3.sibling);
                      d2 = e(l3, f3.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === qa2 && Hd2(k3) === l3.type) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props);
                    d2.ref = Fd2(a2, l3, f3);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l3);
                  break;
                } else b(a2, l3);
                l3 = l3.sibling;
              }
              f3.type === ha2 ? (d2 = Nd2(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Ld2(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Fd2(a2, d2, f3), h2.return = a2, a2 = h2);
            }
            return g(a2);
          case fa2:
            a: {
              for (l3 = f3.key; null !== d2; ) {
                if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
                else b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = Md2(f3, a2.mode, h2);
              d2.return = a2;
              a2 = d2;
            }
            return g(a2);
          case qa2:
            return l3 = f3._init, ya2(a2, d2, l3(f3._payload), h2);
        }
        if (Da2(f3)) return w2(a2, d2, f3, h2);
        if (ta2(f3)) return Y2(a2, d2, f3, h2);
        Gd2(a2, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Kd2(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
    }
    return ya2;
  }
  var Od2 = Id2(true), Pd2 = Id2(false), Qd2 = ic2(null), Rd2 = null, Sd2 = null, Td2 = null;
  function Ud2() {
    Td2 = Sd2 = Rd2 = null;
  }
  function Vd2(a, b, c) {
    Sa2 ? (v2(Qd2, b._currentValue), b._currentValue = c) : (v2(Qd2, b._currentValue2), b._currentValue2 = c);
  }
  function Wd2(a) {
    var b = Qd2.current;
    q2(Qd2);
    Sa2 ? a._currentValue = b : a._currentValue2 = b;
  }
  function Xd2(a, b, c) {
    for (; null !== a; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a.return;
    }
  }
  function Yd2(a, b) {
    Rd2 = a;
    Td2 = Sd2 = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (G2 = true), a.firstContext = null);
  }
  function Zd2(a) {
    var b = Sa2 ? a._currentValue : a._currentValue2;
    if (Td2 !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Sd2) {
      if (null === Rd2) throw Error(n2(308));
      Sd2 = a;
      Rd2.dependencies = { lanes: 0, firstContext: a };
    } else Sd2 = Sd2.next = a;
    return b;
  }
  var $d2 = null;
  function ae2(a) {
    null === $d2 ? $d2 = [a] : $d2.push(a);
  }
  function be2(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, ae2(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return ce2(a, d);
  }
  function ce2(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
  }
  var de2 = false;
  function ee2(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function fe2(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  }
  function ge2(a, b) {
    return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
  }
  function he2(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (H2 & 2)) {
      var e = d.pending;
      null === e ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return ce2(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, ae2(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return ce2(a, c);
  }
  function ie2(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Hc2(a, c);
    }
  }
  function je2(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null, f2 = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          null === f2 ? e = f2 = g : f2 = f2.next = g;
          c = c.next;
        } while (null !== c);
        null === f2 ? e = f2 = b : f2 = f2.next = b;
      } else e = f2 = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function ke2(a, b, c, d) {
    var e = a.updateQueue;
    de2 = false;
    var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k2 = h, l2 = k2.next;
      k2.next = null;
      null === g ? f2 = l2 : g.next = l2;
      g = k2;
      var m2 = a.alternate;
      null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var r2 = e.baseState;
      g = 0;
      m2 = l2 = k2 = null;
      h = f2;
      do {
        var p2 = h.lane, B2 = h.eventTime;
        if ((d & p2) === p2) {
          null !== m2 && (m2 = m2.next = {
            eventTime: B2,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          a: {
            var w2 = a, Y2 = h;
            p2 = b;
            B2 = c;
            switch (Y2.tag) {
              case 1:
                w2 = Y2.payload;
                if ("function" === typeof w2) {
                  r2 = w2.call(B2, r2, p2);
                  break a;
                }
                r2 = w2;
                break a;
              case 3:
                w2.flags = w2.flags & -65537 | 128;
              case 0:
                w2 = Y2.payload;
                p2 = "function" === typeof w2 ? w2.call(B2, r2, p2) : w2;
                if (null === p2 || void 0 === p2) break a;
                r2 = ca2({}, r2, p2);
                break a;
              case 2:
                de2 = true;
            }
          }
          null !== h.callback && 0 !== h.lane && (a.flags |= 64, p2 = e.effects, null === p2 ? e.effects = [h] : p2.push(h));
        } else B2 = { eventTime: B2, lane: p2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = B2, k2 = r2) : m2 = m2.next = B2, g |= p2;
        h = h.next;
        if (null === h) if (h = e.shared.pending, null === h) break;
        else p2 = h, h = p2.next, p2.next = null, e.lastBaseUpdate = p2, e.shared.pending = null;
      } while (1);
      null === m2 && (k2 = r2);
      e.baseState = k2;
      e.firstBaseUpdate = l2;
      e.lastBaseUpdate = m2;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do
          g |= e.lane, e = e.next;
        while (e !== b);
      } else null === f2 && (e.shared.lanes = 0);
      le2 |= g;
      a.lanes = g;
      a.memoizedState = r2;
    }
  }
  function me2(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(n2(191, e));
        e.call(d);
      }
    }
  }
  var ne2 = {}, oe2 = ic2(ne2), pe2 = ic2(ne2), qe2 = ic2(ne2);
  function re2(a) {
    if (a === ne2) throw Error(n2(174));
    return a;
  }
  function se2(a, b) {
    v2(qe2, b);
    v2(pe2, a);
    v2(oe2, ne2);
    a = Fa2(b);
    q2(oe2);
    v2(oe2, a);
  }
  function te2() {
    q2(oe2);
    q2(pe2);
    q2(qe2);
  }
  function ue2(a) {
    var b = re2(qe2.current), c = re2(oe2.current);
    b = Ga2(c, a.type, b);
    c !== b && (v2(pe2, a), v2(oe2, b));
  }
  function ve2(a) {
    pe2.current === a && (q2(oe2), q2(pe2));
  }
  var I2 = ic2(0);
  function we2(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || Jb2(c) || Kb2(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var xe = [];
  function ye() {
    for (var a = 0; a < xe.length; a++) {
      var b = xe[a];
      Sa2 ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
    }
    xe.length = 0;
  }
  var ze = da2.ReactCurrentDispatcher, Ae2 = da2.ReactCurrentBatchConfig, Be2 = 0, J2 = null, K2 = null, L2 = null, Ce2 = false, De2 = false, Ee2 = 0, Fe2 = 0;
  function M2() {
    throw Error(n2(321));
  }
  function Ge2(a, b) {
    if (null === b) return false;
    for (var c = 0; c < b.length && c < a.length; c++) if (!Vc2(a[c], b[c])) return false;
    return true;
  }
  function He2(a, b, c, d, e, f2) {
    Be2 = f2;
    J2 = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    ze.current = null === a || null === a.memoizedState ? Ie2 : Je2;
    a = c(d, e);
    if (De2) {
      f2 = 0;
      do {
        De2 = false;
        Ee2 = 0;
        if (25 <= f2) throw Error(n2(301));
        f2 += 1;
        L2 = K2 = null;
        b.updateQueue = null;
        ze.current = Ke2;
        a = c(d, e);
      } while (De2);
    }
    ze.current = Le2;
    b = null !== K2 && null !== K2.next;
    Be2 = 0;
    L2 = K2 = J2 = null;
    Ce2 = false;
    if (b) throw Error(n2(300));
    return a;
  }
  function Me2() {
    var a = 0 !== Ee2;
    Ee2 = 0;
    return a;
  }
  function Ne2() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === L2 ? J2.memoizedState = L2 = a : L2 = L2.next = a;
    return L2;
  }
  function Oe2() {
    if (null === K2) {
      var a = J2.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = K2.next;
    var b = null === L2 ? J2.memoizedState : L2.next;
    if (null !== b) L2 = b, K2 = a;
    else {
      if (null === a) throw Error(n2(310));
      K2 = a;
      a = { memoizedState: K2.memoizedState, baseState: K2.baseState, baseQueue: K2.baseQueue, queue: K2.queue, next: null };
      null === L2 ? J2.memoizedState = L2 = a : L2 = L2.next = a;
    }
    return L2;
  }
  function Pe2(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Qe2(a) {
    var b = Oe2(), c = b.queue;
    if (null === c) throw Error(n2(311));
    c.lastRenderedReducer = a;
    var d = K2, e = d.baseQueue, f2 = c.pending;
    if (null !== f2) {
      if (null !== e) {
        var g = e.next;
        e.next = f2.next;
        f2.next = g;
      }
      d.baseQueue = e = f2;
      c.pending = null;
    }
    if (null !== e) {
      f2 = e.next;
      d = d.baseState;
      var h = g = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Be2 & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
        else {
          var r2 = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h = k2 = r2, g = d) : k2 = k2.next = r2;
          J2.lanes |= m2;
          le2 |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g = d : k2.next = h;
      Vc2(d, b.memoizedState) || (G2 = true);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k2;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do
        f2 = e.lane, J2.lanes |= f2, le2 |= f2, e = e.next;
      while (e !== a);
    } else null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function Re2(a) {
    var b = Oe2(), c = b.queue;
    if (null === c) throw Error(n2(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do
        f2 = a(f2, g.action), g = g.next;
      while (g !== e);
      Vc2(f2, b.memoizedState) || (G2 = true);
      b.memoizedState = f2;
      null === b.baseQueue && (b.baseState = f2);
      c.lastRenderedState = f2;
    }
    return [f2, d];
  }
  function Se2() {
  }
  function Te2(a, b) {
    var c = J2, d = Oe2(), e = b(), f2 = !Vc2(d.memoizedState, e);
    f2 && (d.memoizedState = e, G2 = true);
    d = d.queue;
    Ue2(Ve2.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f2 || null !== L2 && L2.memoizedState.tag & 1) {
      c.flags |= 2048;
      We2(9, Xe2.bind(null, c, d, e, b), void 0, null);
      if (null === N2) throw Error(n2(349));
      0 !== (Be2 & 30) || Ye2(c, b, e);
    }
    return e;
  }
  function Ye2(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = J2.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, J2.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }
  function Xe2(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    Ze2(b) && $e2(a);
  }
  function Ve2(a, b, c) {
    return c(function() {
      Ze2(b) && $e2(a);
    });
  }
  function Ze2(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !Vc2(a, c);
    } catch (d) {
      return true;
    }
  }
  function $e2(a) {
    var b = ce2(a, 1);
    null !== b && af2(b, a, 1, -1);
  }
  function bf2(a) {
    var b = Ne2();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pe2, lastRenderedState: a };
    b.queue = a;
    a = a.dispatch = cf2.bind(null, J2, a);
    return [b.memoizedState, a];
  }
  function We2(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = J2.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, J2.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function df2() {
    return Oe2().memoizedState;
  }
  function ef2(a, b, c, d) {
    var e = Ne2();
    J2.flags |= a;
    e.memoizedState = We2(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function ff2(a, b, c, d) {
    var e = Oe2();
    d = void 0 === d ? null : d;
    var f2 = void 0;
    if (null !== K2) {
      var g = K2.memoizedState;
      f2 = g.destroy;
      if (null !== d && Ge2(d, g.deps)) {
        e.memoizedState = We2(b, c, f2, d);
        return;
      }
    }
    J2.flags |= a;
    e.memoizedState = We2(1 | b, c, f2, d);
  }
  function gf(a, b) {
    return ef2(8390656, 8, a, b);
  }
  function Ue2(a, b) {
    return ff2(2048, 8, a, b);
  }
  function hf(a, b) {
    return ff2(4, 2, a, b);
  }
  function jf(a, b) {
    return ff2(4, 4, a, b);
  }
  function kf(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
      b.current = null;
    };
  }
  function lf2(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ff2(4, 4, kf.bind(null, b, a), c);
  }
  function mf2() {
  }
  function nf2(a, b) {
    var c = Oe2();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Ge2(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function of2(a, b) {
    var c = Oe2();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Ge2(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function pf2(a, b, c) {
    if (0 === (Be2 & 21)) return a.baseState && (a.baseState = false, G2 = true), a.memoizedState = c;
    Vc2(c, b) || (c = Dc2(), J2.lanes |= c, le2 |= c, a.baseState = true);
    return b;
  }
  function qf2(a, b) {
    var c = C2;
    C2 = 0 !== c && 4 > c ? c : 4;
    a(true);
    var d = Ae2.transition;
    Ae2.transition = {};
    try {
      a(false), b();
    } finally {
      C2 = c, Ae2.transition = d;
    }
  }
  function rf2() {
    return Oe2().memoizedState;
  }
  function sf2(a, b, c) {
    var d = tf2(a);
    c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (uf2(a)) vf2(b, c);
    else if (c = be2(a, b, c, d), null !== c) {
      var e = O2();
      af2(c, a, d, e);
      wf2(c, b, d);
    }
  }
  function cf2(a, b, c) {
    var d = tf2(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (uf2(a)) vf2(b, e);
    else {
      var f2 = a.alternate;
      if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
        var g = b.lastRenderedState, h = f2(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (Vc2(h, g)) {
          var k2 = b.interleaved;
          null === k2 ? (e.next = e, ae2(b)) : (e.next = k2.next, k2.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
      c = be2(a, b, e, d);
      null !== c && (e = O2(), af2(c, a, d, e), wf2(c, b, d));
    }
  }
  function uf2(a) {
    var b = a.alternate;
    return a === J2 || null !== b && b === J2;
  }
  function vf2(a, b) {
    De2 = Ce2 = true;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
  function wf2(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Hc2(a, c);
    }
  }
  var Le2 = { readContext: Zd2, useCallback: M2, useContext: M2, useEffect: M2, useImperativeHandle: M2, useInsertionEffect: M2, useLayoutEffect: M2, useMemo: M2, useReducer: M2, useRef: M2, useState: M2, useDebugValue: M2, useDeferredValue: M2, useTransition: M2, useMutableSource: M2, useSyncExternalStore: M2, useId: M2, unstable_isNewReconciler: false }, Ie2 = { readContext: Zd2, useCallback: function(a, b) {
    Ne2().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }, useContext: Zd2, useEffect: gf, useImperativeHandle: function(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ef2(
      4194308,
      4,
      kf.bind(null, b, a),
      c
    );
  }, useLayoutEffect: function(a, b) {
    return ef2(4194308, 4, a, b);
  }, useInsertionEffect: function(a, b) {
    return ef2(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = Ne2();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  }, useReducer: function(a, b, c) {
    var d = Ne2();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    d.queue = a;
    a = a.dispatch = sf2.bind(null, J2, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = Ne2();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: bf2, useDebugValue: mf2, useDeferredValue: function(a) {
    return Ne2().memoizedState = a;
  }, useTransition: function() {
    var a = bf2(false), b = a[0];
    a = qf2.bind(null, a[1]);
    Ne2().memoizedState = a;
    return [b, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b, c) {
    var d = J2, e = Ne2();
    if (F2) {
      if (void 0 === c) throw Error(n2(407));
      c = c();
    } else {
      c = b();
      if (null === N2) throw Error(n2(349));
      0 !== (Be2 & 30) || Ye2(d, b, c);
    }
    e.memoizedState = c;
    var f2 = { value: c, getSnapshot: b };
    e.queue = f2;
    gf(Ve2.bind(
      null,
      d,
      f2,
      a
    ), [a]);
    d.flags |= 2048;
    We2(9, Xe2.bind(null, d, f2, c, b), void 0, null);
    return c;
  }, useId: function() {
    var a = Ne2(), b = N2.identifierPrefix;
    if (F2) {
      var c = jd2;
      var d = id2;
      c = (d & ~(1 << 32 - tc2(d) - 1)).toString(32) + c;
      b = ":" + b + "R" + c;
      c = Ee2++;
      0 < c && (b += "H" + c.toString(32));
      b += ":";
    } else c = Fe2++, b = ":" + b + "r" + c.toString(32) + ":";
    return a.memoizedState = b;
  }, unstable_isNewReconciler: false }, Je2 = {
    readContext: Zd2,
    useCallback: nf2,
    useContext: Zd2,
    useEffect: Ue2,
    useImperativeHandle: lf2,
    useInsertionEffect: hf,
    useLayoutEffect: jf,
    useMemo: of2,
    useReducer: Qe2,
    useRef: df2,
    useState: function() {
      return Qe2(Pe2);
    },
    useDebugValue: mf2,
    useDeferredValue: function(a) {
      var b = Oe2();
      return pf2(b, K2.memoizedState, a);
    },
    useTransition: function() {
      var a = Qe2(Pe2)[0], b = Oe2().memoizedState;
      return [a, b];
    },
    useMutableSource: Se2,
    useSyncExternalStore: Te2,
    useId: rf2,
    unstable_isNewReconciler: false
  }, Ke2 = { readContext: Zd2, useCallback: nf2, useContext: Zd2, useEffect: Ue2, useImperativeHandle: lf2, useInsertionEffect: hf, useLayoutEffect: jf, useMemo: of2, useReducer: Re2, useRef: df2, useState: function() {
    return Re2(Pe2);
  }, useDebugValue: mf2, useDeferredValue: function(a) {
    var b = Oe2();
    return null === K2 ? b.memoizedState = a : pf2(b, K2.memoizedState, a);
  }, useTransition: function() {
    var a = Re2(Pe2)[0], b = Oe2().memoizedState;
    return [a, b];
  }, useMutableSource: Se2, useSyncExternalStore: Te2, useId: rf2, unstable_isNewReconciler: false };
  function xf2(a, b) {
    if (a && a.defaultProps) {
      b = ca2({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function yf2(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : ca2({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var zf2 = { isMounted: function(a) {
    return (a = a._reactInternals) ? wa2(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = O2(), e = tf2(a), f2 = ge2(d, e);
    f2.payload = b;
    void 0 !== c && null !== c && (f2.callback = c);
    b = he2(a, f2, e);
    null !== b && (af2(b, a, e, d), ie2(b, a, e));
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = O2(), e = tf2(a), f2 = ge2(d, e);
    f2.tag = 1;
    f2.payload = b;
    void 0 !== c && null !== c && (f2.callback = c);
    b = he2(a, f2, e);
    null !== b && (af2(b, a, e, d), ie2(b, a, e));
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = O2(), d = tf2(a), e = ge2(c, d);
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    b = he2(a, e, d);
    null !== b && (af2(b, a, d, c), ie2(b, a, d));
  } };
  function Af2(a, b, c, d, e, f2, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Dd2(c, d) || !Dd2(e, f2) : true;
  }
  function Bf2(a, b, c) {
    var d = false, e = jc2;
    var f2 = b.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = Zd2(f2) : (e = A2(b) ? kc2 : x2.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? mc2(a, e) : jc2);
    b = new b(c, f2);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = zf2;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
    return b;
  }
  function Cf2(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && zf2.enqueueReplaceState(b, b.state, null);
  }
  function Df2(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    ee2(a);
    var f2 = b.contextType;
    "object" === typeof f2 && null !== f2 ? e.context = Zd2(f2) : (f2 = A2(b) ? kc2 : x2.current, e.context = mc2(a, f2));
    e.state = a.memoizedState;
    f2 = b.getDerivedStateFromProps;
    "function" === typeof f2 && (yf2(a, b, f2, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && zf2.enqueueReplaceState(e, e.state, null), ke2(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function Ef2(a, b) {
    try {
      var c = "", d = b;
      do
        c += Ed2(d), d = d.return;
      while (d);
      var e = c;
    } catch (f2) {
      e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a, source: b, stack: e, digest: null };
  }
  function Ff2(a, b, c) {
    return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
  }
  function Gf2(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var Hf2 = "function" === typeof WeakMap ? WeakMap : Map;
  function If2(a, b, c) {
    c = ge2(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Jf2 || (Jf2 = true, Kf2 = d);
      Gf2(a, b);
    };
    return c;
  }
  function Lf2(a, b, c) {
    c = ge2(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function() {
        return d(e);
      };
      c.callback = function() {
        Gf2(a, b);
      };
    }
    var f2 = a.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
      Gf2(a, b);
      "function" !== typeof d && (null === Mf2 ? Mf2 = /* @__PURE__ */ new Set([this]) : Mf2.add(this));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
    });
    return c;
  }
  function Nf2(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new Hf2();
      var e = /* @__PURE__ */ new Set();
      d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
    e.has(c) || (e.add(c), a = Of2.bind(null, a, b, c), b.then(a, a));
  }
  function Pf2(a) {
    do {
      var b;
      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
      if (b) return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Qf2(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ge2(-1, 1), b.tag = 2, he2(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Rf2 = da2.ReactCurrentOwner, G2 = false;
  function P2(a, b, c, d) {
    b.child = null === a ? Pd2(b, null, c, d) : Od2(b, a.child, c, d);
  }
  function Sf2(a, b, c, d, e) {
    c = c.render;
    var f2 = b.ref;
    Yd2(b, e);
    d = He2(a, b, c, d, f2, e);
    c = Me2();
    if (null !== a && !G2) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Tf2(a, b, e);
    F2 && c && md2(b);
    b.flags |= 1;
    P2(a, b, d, e);
    return b.child;
  }
  function Uf2(a, b, c, d, e) {
    if (null === a) {
      var f2 = c.type;
      if ("function" === typeof f2 && !Vf2(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, Wf2(a, b, f2, d, e);
      a = Ld2(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f2 = a.child;
    if (0 === (a.lanes & e)) {
      var g = f2.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Dd2;
      if (c(g, d) && a.ref === b.ref) return Tf2(a, b, e);
    }
    b.flags |= 1;
    a = Jd2(f2, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function Wf2(a, b, c, d, e) {
    if (null !== a) {
      var f2 = a.memoizedProps;
      if (Dd2(f2, d) && a.ref === b.ref) if (G2 = false, b.pendingProps = d = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (G2 = true);
      else return b.lanes = a.lanes, Tf2(a, b, e);
    }
    return Xf2(a, b, c, d, e);
  }
  function Yf2(a, b, c) {
    var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, v2(Zf2, $f2), $f2 |= c;
    else {
      if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, v2(Zf2, $f2), $f2 |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      v2(Zf2, $f2);
      $f2 |= d;
    }
    else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, v2(Zf2, $f2), $f2 |= d;
    P2(a, b, e, c);
    return b.child;
  }
  function ag2(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }
  function Xf2(a, b, c, d, e) {
    var f2 = A2(c) ? kc2 : x2.current;
    f2 = mc2(b, f2);
    Yd2(b, e);
    c = He2(a, b, c, d, f2, e);
    d = Me2();
    if (null !== a && !G2) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Tf2(a, b, e);
    F2 && d && md2(b);
    b.flags |= 1;
    P2(a, b, c, e);
    return b.child;
  }
  function bg2(a, b, c, d, e) {
    if (A2(c)) {
      var f2 = true;
      qc2(b);
    } else f2 = false;
    Yd2(b, e);
    if (null === b.stateNode) cg2(a, b), Bf2(b, c, d), Df2(b, c, d, e), d = true;
    else if (null === a) {
      var g = b.stateNode, h = b.memoizedProps;
      g.props = h;
      var k2 = g.context, l2 = c.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = Zd2(l2) : (l2 = A2(c) ? kc2 : x2.current, l2 = mc2(b, l2));
      var m2 = c.getDerivedStateFromProps, r2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
      r2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Cf2(b, g, d, l2);
      de2 = false;
      var p2 = b.memoizedState;
      g.state = p2;
      ke2(b, d, g, e);
      k2 = b.memoizedState;
      h !== d || p2 !== k2 || z2.current || de2 ? ("function" === typeof m2 && (yf2(b, c, m2, d), k2 = b.memoizedState), (h = de2 || Af2(b, c, h, d, p2, k2, l2)) ? (r2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
    } else {
      g = b.stateNode;
      fe2(a, b);
      h = b.memoizedProps;
      l2 = b.type === b.elementType ? h : xf2(b.type, h);
      g.props = l2;
      r2 = b.pendingProps;
      p2 = g.context;
      k2 = c.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = Zd2(k2) : (k2 = A2(c) ? kc2 : x2.current, k2 = mc2(b, k2));
      var B2 = c.getDerivedStateFromProps;
      (m2 = "function" === typeof B2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== r2 || p2 !== k2) && Cf2(b, g, d, k2);
      de2 = false;
      p2 = b.memoizedState;
      g.state = p2;
      ke2(b, d, g, e);
      var w2 = b.memoizedState;
      h !== r2 || p2 !== w2 || z2.current || de2 ? ("function" === typeof B2 && (yf2(b, c, B2, d), w2 = b.memoizedState), (l2 = de2 || Af2(b, c, l2, d, p2, w2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, w2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, w2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = w2), g.props = d, g.state = w2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 1024), d = false);
    }
    return dg2(a, b, c, d, f2, e);
  }
  function dg2(a, b, c, d, e, f2) {
    ag2(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && rc2(b, c, false), Tf2(a, b, f2);
    d = b.stateNode;
    Rf2.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Od2(b, a.child, null, f2), b.child = Od2(b, null, h, f2)) : P2(a, b, h, f2);
    b.memoizedState = d.state;
    e && rc2(b, c, true);
    return b.child;
  }
  function eg2(a) {
    var b = a.stateNode;
    b.pendingContext ? oc2(a, b.pendingContext, b.pendingContext !== b.context) : b.context && oc2(a, b.context, false);
    se2(a, b.containerInfo);
  }
  function fg2(a, b, c, d, e) {
    Ad2();
    Bd2(e);
    b.flags |= 256;
    P2(a, b, c, d);
    return b.child;
  }
  var gg2 = { dehydrated: null, treeContext: null, retryLane: 0 };
  function hg2(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  }
  function ig2(a, b, c) {
    var d = b.pendingProps, e = I2.current, f2 = false, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h) f2 = true, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    v2(I2, e & 1);
    if (null === a) {
      wd2(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : Kb2(a) ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = jg2(g, d, 0, null), a = Nd2(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = hg2(c), b.memoizedState = gg2, a) : kg2(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return lg2(a, b, g, d, h, e, c);
    if (f2) {
      f2 = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k2 = { mode: "hidden", children: d.children };
      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Jd2(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f2 = Jd2(h, f2) : (f2 = Nd2(f2, g, c, null), f2.flags |= 2);
      f2.return = b;
      d.return = b;
      d.sibling = f2;
      b.child = d;
      d = f2;
      f2 = b.child;
      g = a.child.memoizedState;
      g = null === g ? hg2(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
      f2.memoizedState = g;
      f2.childLanes = a.childLanes & ~c;
      b.memoizedState = gg2;
      return d;
    }
    f2 = a.child;
    a = f2.sibling;
    d = Jd2(f2, { mode: "visible", children: d.children });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }
  function kg2(a, b) {
    b = jg2({ mode: "visible", children: b }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  }
  function mg2(a, b, c, d) {
    null !== d && Bd2(d);
    Od2(b, a.child, null, c);
    a = kg2(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function lg2(a, b, c, d, e, f2, g) {
    if (c) {
      if (b.flags & 256) return b.flags &= -257, d = Ff2(Error(n2(422))), mg2(a, b, g, d);
      if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
      f2 = d.fallback;
      e = b.mode;
      d = jg2({ mode: "visible", children: d.children }, e, 0, null);
      f2 = Nd2(f2, e, g, null);
      f2.flags |= 2;
      d.return = b;
      f2.return = b;
      d.sibling = f2;
      b.child = d;
      0 !== (b.mode & 1) && Od2(b, a.child, null, g);
      b.child.memoizedState = hg2(g);
      b.memoizedState = gg2;
      return f2;
    }
    if (0 === (b.mode & 1)) return mg2(a, b, g, null);
    if (Kb2(e)) return d = Lb2(e).digest, f2 = Error(n2(419)), d = Ff2(
      f2,
      d,
      void 0
    ), mg2(a, b, g, d);
    c = 0 !== (g & a.childLanes);
    if (G2 || c) {
      d = N2;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f2.retryLane && (f2.retryLane = e, ce2(a, e), af2(
          d,
          a,
          e,
          -1
        ));
      }
      ng2();
      d = Ff2(Error(n2(421)));
      return mg2(a, b, g, d);
    }
    if (Jb2(e)) return b.flags |= 128, b.child = a.child, b = og2.bind(null, a), Mb(e, b), null;
    a = f2.treeContext;
    Va2 && (pd2 = Qb2(e), od2 = b, F2 = true, rd2 = null, qd2 = false, null !== a && (fd2[gd2++] = id2, fd2[gd2++] = jd2, fd2[gd2++] = hd2, id2 = a.id, jd2 = a.overflow, hd2 = b));
    b = kg2(b, d.children);
    b.flags |= 4096;
    return b;
  }
  function pg2(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    Xd2(a.return, b, c);
  }
  function qg2(a, b, c, d, e) {
    var f2 = a.memoizedState;
    null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
  }
  function rg2(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
    P2(a, b, d.children, c);
    d = I2.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
        if (13 === a.tag) null !== a.memoizedState && pg2(a, c, b);
        else if (19 === a.tag) pg2(a, c, b);
        else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    v2(I2, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; ) a = c.alternate, null !== a && null === we2(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        qg2(b, false, e, c, f2);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === we2(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        qg2(b, true, c, null, f2);
        break;
      case "together":
        qg2(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function cg2(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
  }
  function Tf2(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    le2 |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(n2(153));
    if (null !== b.child) {
      a = b.child;
      c = Jd2(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Jd2(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  function sg2(a, b, c) {
    switch (b.tag) {
      case 3:
        eg2(b);
        Ad2();
        break;
      case 5:
        ue2(b);
        break;
      case 1:
        A2(b.type) && qc2(b);
        break;
      case 4:
        se2(b, b.stateNode.containerInfo);
        break;
      case 10:
        Vd2(b, b.type._context, b.memoizedProps.value);
        break;
      case 13:
        var d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated) return v2(I2, I2.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return ig2(a, b, c);
          v2(I2, I2.current & 1);
          a = Tf2(a, b, c);
          return null !== a ? a.sibling : null;
        }
        v2(I2, I2.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d) return rg2(
            a,
            b,
            c
          );
          b.flags |= 128;
        }
        var e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        v2(I2, I2.current);
        if (d) break;
        else return null;
      case 22:
      case 23:
        return b.lanes = 0, Yf2(a, b, c);
    }
    return Tf2(a, b, c);
  }
  function tg2(a) {
    a.flags |= 4;
  }
  function ug2(a, b) {
    if (null !== a && a.child === b.child) return true;
    if (0 !== (b.flags & 16)) return false;
    for (a = b.child; null !== a; ) {
      if (0 !== (a.flags & 12854) || 0 !== (a.subtreeFlags & 12854)) return false;
      a = a.sibling;
    }
    return true;
  }
  var vg2, wg2, xg2, yg2;
  if (Ta2) vg2 = function(a, b) {
    for (var c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag) Ka2(a, c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }, wg2 = function() {
  }, xg2 = function(a, b, c, d, e) {
    a = a.memoizedProps;
    if (a !== d) {
      var f2 = b.stateNode, g = re2(oe2.current);
      c = Ma2(f2, c, a, d, e, g);
      (b.updateQueue = c) && tg2(b);
    }
  }, yg2 = function(a, b, c, d) {
    c !== d && tg2(b);
  };
  else if (Ua2) {
    vg2 = function(a, b, c, d) {
      for (var e = b.child; null !== e; ) {
        if (5 === e.tag) {
          var f2 = e.stateNode;
          c && d && (f2 = Eb2(f2, e.type, e.memoizedProps, e));
          Ka2(a, f2);
        } else if (6 === e.tag) f2 = e.stateNode, c && d && (f2 = Fb2(f2, e.memoizedProps, e)), Ka2(a, f2);
        else if (4 !== e.tag) {
          if (22 === e.tag && null !== e.memoizedState) f2 = e.child, null !== f2 && (f2.return = e), vg2(a, e, true, true);
          else if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }
        if (e === b) break;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    };
    var zg2 = function(a, b, c, d) {
      for (var e = b.child; null !== e; ) {
        if (5 === e.tag) {
          var f2 = e.stateNode;
          c && d && (f2 = Eb2(f2, e.type, e.memoizedProps, e));
          Ab2(a, f2);
        } else if (6 === e.tag) f2 = e.stateNode, c && d && (f2 = Fb2(f2, e.memoizedProps, e)), Ab2(a, f2);
        else if (4 !== e.tag) {
          if (22 === e.tag && null !== e.memoizedState) f2 = e.child, null !== f2 && (f2.return = e), zg2(a, e, true, true);
          else if (null !== e.child) {
            e.child.return = e;
            e = e.child;
            continue;
          }
        }
        if (e === b) break;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === b) return;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    };
    wg2 = function(a, b) {
      var c = b.stateNode;
      if (!ug2(a, b)) {
        a = c.containerInfo;
        var d = zb2(a);
        zg2(d, b, false, false);
        c.pendingChildren = d;
        tg2(b);
        Bb2(a, d);
      }
    };
    xg2 = function(a, b, c, d, e) {
      var f2 = a.stateNode, g = a.memoizedProps;
      if ((a = ug2(a, b)) && g === d) b.stateNode = f2;
      else {
        var h = b.stateNode, k2 = re2(oe2.current), l2 = null;
        g !== d && (l2 = Ma2(h, c, g, d, e, k2));
        a && null === l2 ? b.stateNode = f2 : (f2 = yb2(f2, l2, c, g, d, b, a, h), La2(f2, c, d, e, k2) && tg2(b), b.stateNode = f2, a ? tg2(b) : vg2(f2, b, false, false));
      }
    };
    yg2 = function(a, b, c, d) {
      c !== d ? (a = re2(qe2.current), c = re2(oe2.current), b.stateNode = Oa2(d, a, c, b), tg2(b)) : b.stateNode = a.stateNode;
    };
  } else wg2 = function() {
  }, xg2 = function() {
  }, yg2 = function() {
  };
  function Ag2(a, b) {
    if (!F2) switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function Q2(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Bg2(a, b, c) {
    var d = b.pendingProps;
    nd2(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Q2(b), null;
      case 1:
        return A2(b.type) && nc2(), Q2(b), null;
      case 3:
        c = b.stateNode;
        te2();
        q2(z2);
        q2(x2);
        ye();
        c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null);
        if (null === a || null === a.child) yd2(b) ? tg2(b) : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== rd2 && (Cg2(rd2), rd2 = null));
        wg2(a, b);
        Q2(b);
        return null;
      case 5:
        ve2(b);
        c = re2(qe2.current);
        var e = b.type;
        if (null !== a && null != b.stateNode) xg2(a, b, e, d, c), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        else {
          if (!d) {
            if (null === b.stateNode) throw Error(n2(166));
            Q2(b);
            return null;
          }
          a = re2(oe2.current);
          if (yd2(b)) {
            if (!Va2) throw Error(n2(175));
            a = Rb2(b.stateNode, b.type, b.memoizedProps, c, a, b, !qd2);
            b.updateQueue = a;
            null !== a && tg2(b);
          } else {
            var f2 = Ja2(e, d, c, a, b);
            vg2(f2, b, false, false);
            b.stateNode = f2;
            La2(f2, e, d, c, a) && tg2(b);
          }
          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        Q2(b);
        return null;
      case 6:
        if (a && null != b.stateNode) yg2(a, b, a.memoizedProps, d);
        else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(n2(166));
          a = re2(qe2.current);
          c = re2(oe2.current);
          if (yd2(b)) {
            if (!Va2) throw Error(n2(176));
            a = b.stateNode;
            c = b.memoizedProps;
            if (d = Sb2(a, c, b, !qd2)) {
              if (e = od2, null !== e) switch (e.tag) {
                case 3:
                  $b2(e.stateNode.containerInfo, a, c, 0 !== (e.mode & 1));
                  break;
                case 5:
                  ac2(e.type, e.memoizedProps, e.stateNode, a, c, 0 !== (e.mode & 1));
              }
            }
            d && tg2(b);
          } else b.stateNode = Oa2(d, a, c, b);
        }
        Q2(b);
        return null;
      case 13:
        q2(I2);
        d = b.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (F2 && null !== pd2 && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) zd2(), Ad2(), b.flags |= 98560, e = false;
          else if (e = yd2(b), null !== d && null !== d.dehydrated) {
            if (null === a) {
              if (!e) throw Error(n2(318));
              if (!Va2) throw Error(n2(344));
              e = b.memoizedState;
              e = null !== e ? e.dehydrated : null;
              if (!e) throw Error(n2(317));
              Tb2(e, b);
            } else Ad2(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
            Q2(b);
            e = false;
          } else null !== rd2 && (Cg2(rd2), rd2 = null), e = true;
          if (!e) return b.flags & 65536 ? b : null;
        }
        if (0 !== (b.flags & 128)) return b.lanes = c, b;
        c = null !== d;
        c !== (null !== a && null !== a.memoizedState) && c && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (I2.current & 1) ? 0 === R2 && (R2 = 3) : ng2()));
        null !== b.updateQueue && (b.flags |= 4);
        Q2(b);
        return null;
      case 4:
        return te2(), wg2(a, b), null === a && Xa2(b.stateNode.containerInfo), Q2(b), null;
      case 10:
        return Wd2(b.type._context), Q2(b), null;
      case 17:
        return A2(b.type) && nc2(), Q2(b), null;
      case 19:
        q2(I2);
        e = b.memoizedState;
        if (null === e) return Q2(b), null;
        d = 0 !== (b.flags & 128);
        f2 = e.rendering;
        if (null === f2) if (d) Ag2(e, false);
        else {
          if (0 !== R2 || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
            f2 = we2(a);
            if (null !== f2) {
              b.flags |= 128;
              Ag2(e, false);
              a = f2.updateQueue;
              null !== a && (b.updateQueue = a, b.flags |= 4);
              b.subtreeFlags = 0;
              a = c;
              for (c = b.child; null !== c; ) d = c, e = a, d.flags &= 14680066, f2 = d.alternate, null === f2 ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = f2.childLanes, d.lanes = f2.lanes, d.child = f2.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = f2.memoizedProps, d.memoizedState = f2.memoizedState, d.updateQueue = f2.updateQueue, d.type = f2.type, e = f2.dependencies, d.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), c = c.sibling;
              v2(I2, I2.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== e.tail && D2() > Dg2 && (b.flags |= 128, d = true, Ag2(e, false), b.lanes = 4194304);
        }
        else {
          if (!d) if (a = we2(f2), null !== a) {
            if (b.flags |= 128, d = true, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), Ag2(e, true), null === e.tail && "hidden" === e.tailMode && !f2.alternate && !F2) return Q2(b), null;
          } else 2 * D2() - e.renderingStartTime > Dg2 && 1073741824 !== c && (b.flags |= 128, d = true, Ag2(e, false), b.lanes = 4194304);
          e.isBackwards ? (f2.sibling = b.child, b.child = f2) : (a = e.last, null !== a ? a.sibling = f2 : b.child = f2, e.last = f2);
        }
        if (null !== e.tail) return b = e.tail, e.rendering = b, e.tail = b.sibling, e.renderingStartTime = D2(), b.sibling = null, a = I2.current, v2(I2, d ? a & 1 | 2 : a & 1), b;
        Q2(b);
        return null;
      case 22:
      case 23:
        return Eg2(), c = null !== b.memoizedState, null !== a && null !== a.memoizedState !== c && (b.flags |= 8192), c && 0 !== (b.mode & 1) ? 0 !== ($f2 & 1073741824) && (Q2(b), Ta2 && b.subtreeFlags & 6 && (b.flags |= 8192)) : Q2(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n2(
      156,
      b.tag
    ));
  }
  function Fg2(a, b) {
    nd2(b);
    switch (b.tag) {
      case 1:
        return A2(b.type) && nc2(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return te2(), q2(z2), q2(x2), ye(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return ve2(b), null;
      case 13:
        q2(I2);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(n2(340));
          Ad2();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return q2(I2), null;
      case 4:
        return te2(), null;
      case 10:
        return Wd2(b.type._context), null;
      case 22:
      case 23:
        return Eg2(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Gg2 = false, S2 = false, Hg2 = "function" === typeof WeakSet ? WeakSet : Set, T2 = null;
  function Ig2(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
      c(null);
    } catch (d) {
      U2(a, b, d);
    }
    else c.current = null;
  }
  function Jg2(a, b, c) {
    try {
      c();
    } catch (d) {
      U2(a, b, d);
    }
  }
  var Kg2 = false;
  function Lg2(a, b) {
    Ha2(a.containerInfo);
    for (T2 = b; null !== T2; ) if (a = T2, b = a.child, 0 !== (a.subtreeFlags & 1028) && null !== b) b.return = a, T2 = b;
    else for (; null !== T2; ) {
      a = T2;
      try {
        var c = a.alternate;
        if (0 !== (a.flags & 1024)) switch (a.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== c) {
              var d = c.memoizedProps, e = c.memoizedState, f2 = a.stateNode, g = f2.getSnapshotBeforeUpdate(a.elementType === a.type ? d : xf2(a.type, d), e);
              f2.__reactInternalSnapshotBeforeUpdate = g;
            }
            break;
          case 3:
            Ta2 && xb2(a.stateNode.containerInfo);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(n2(163));
        }
      } catch (h) {
        U2(a, a.return, h);
      }
      b = a.sibling;
      if (null !== b) {
        b.return = a.return;
        T2 = b;
        break;
      }
      T2 = a.return;
    }
    c = Kg2;
    Kg2 = false;
    return c;
  }
  function Mg2(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f2 = e.destroy;
          e.destroy = void 0;
          void 0 !== f2 && Jg2(b, c, f2);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Ng2(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Og2(a) {
    var b = a.ref;
    if (null !== b) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = Ea2(c);
          break;
        default:
          a = c;
      }
      "function" === typeof b ? b(a) : b.current = a;
    }
  }
  function Pg2(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Pg2(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && Za2(b));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Qg2(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Rg2(a) {
    a: for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Qg2(a.return)) return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;
        else a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Sg2(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? pb2(c, a, b) : kb2(c, a);
    else if (4 !== d && (a = a.child, null !== a)) for (Sg2(a, b, c), a = a.sibling; null !== a; ) Sg2(a, b, c), a = a.sibling;
  }
  function Tg2(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? ob2(c, a, b) : jb2(c, a);
    else if (4 !== d && (a = a.child, null !== a)) for (Tg2(a, b, c), a = a.sibling; null !== a; ) Tg2(a, b, c), a = a.sibling;
  }
  var V2 = null, Ug2 = false;
  function Vg2(a, b, c) {
    for (c = c.child; null !== c; ) Wg2(a, b, c), c = c.sibling;
  }
  function Wg2(a, b, c) {
    if (Sc2 && "function" === typeof Sc2.onCommitFiberUnmount) try {
      Sc2.onCommitFiberUnmount(Rc2, c);
    } catch (h) {
    }
    switch (c.tag) {
      case 5:
        S2 || Ig2(c, b);
      case 6:
        if (Ta2) {
          var d = V2, e = Ug2;
          V2 = null;
          Vg2(a, b, c);
          V2 = d;
          Ug2 = e;
          null !== V2 && (Ug2 ? rb2(V2, c.stateNode) : qb2(V2, c.stateNode));
        } else Vg2(a, b, c);
        break;
      case 18:
        Ta2 && null !== V2 && (Ug2 ? Yb2(V2, c.stateNode) : Xb2(V2, c.stateNode));
        break;
      case 4:
        Ta2 ? (d = V2, e = Ug2, V2 = c.stateNode.containerInfo, Ug2 = true, Vg2(a, b, c), V2 = d, Ug2 = e) : (Ua2 && (d = c.stateNode.containerInfo, e = zb2(d), Cb2(d, e)), Vg2(a, b, c));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!S2 && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;
          do {
            var f2 = e, g = f2.destroy;
            f2 = f2.tag;
            void 0 !== g && (0 !== (f2 & 2) ? Jg2(c, b, g) : 0 !== (f2 & 4) && Jg2(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Vg2(a, b, c);
        break;
      case 1:
        if (!S2 && (Ig2(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          U2(c, b, h);
        }
        Vg2(a, b, c);
        break;
      case 21:
        Vg2(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (S2 = (d = S2) || null !== c.memoizedState, Vg2(a, b, c), S2 = d) : Vg2(a, b, c);
        break;
      default:
        Vg2(
          a,
          b,
          c
        );
    }
  }
  function Xg2(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Hg2());
      b.forEach(function(b2) {
        var d = Yg2.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  function Zg2(a, b) {
    var c = b.deletions;
    if (null !== c) for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f2 = a, g = b;
        if (Ta2) {
          var h = g;
          a: for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                V2 = h.stateNode;
                Ug2 = false;
                break a;
              case 3:
                V2 = h.stateNode.containerInfo;
                Ug2 = true;
                break a;
              case 4:
                V2 = h.stateNode.containerInfo;
                Ug2 = true;
                break a;
            }
            h = h.return;
          }
          if (null === V2) throw Error(n2(160));
          Wg2(f2, g, e);
          V2 = null;
          Ug2 = false;
        } else Wg2(f2, g, e);
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        U2(e, b, l2);
      }
    }
    if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) $g2(b, a), b = b.sibling;
  }
  function $g2(a, b) {
    var c = a.alternate, d = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Zg2(b, a);
        ah2(a);
        if (d & 4) {
          try {
            Mg2(3, a, a.return), Ng2(3, a);
          } catch (p2) {
            U2(a, a.return, p2);
          }
          try {
            Mg2(5, a, a.return);
          } catch (p2) {
            U2(a, a.return, p2);
          }
        }
        break;
      case 1:
        Zg2(b, a);
        ah2(a);
        d & 512 && null !== c && Ig2(c, c.return);
        break;
      case 5:
        Zg2(b, a);
        ah2(a);
        d & 512 && null !== c && Ig2(c, c.return);
        if (Ta2) {
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              sb2(e);
            } catch (p2) {
              U2(a, a.return, p2);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f2 = a.memoizedProps;
            c = null !== c ? c.memoizedProps : f2;
            d = a.type;
            b = a.updateQueue;
            a.updateQueue = null;
            if (null !== b) try {
              nb2(e, b, d, c, f2, a);
            } catch (p2) {
              U2(a, a.return, p2);
            }
          }
        }
        break;
      case 6:
        Zg2(b, a);
        ah2(a);
        if (d & 4 && Ta2) {
          if (null === a.stateNode) throw Error(n2(162));
          e = a.stateNode;
          f2 = a.memoizedProps;
          c = null !== c ? c.memoizedProps : f2;
          try {
            lb2(e, c, f2);
          } catch (p2) {
            U2(a, a.return, p2);
          }
        }
        break;
      case 3:
        Zg2(b, a);
        ah2(a);
        if (d & 4) {
          if (Ta2 && Va2 && null !== c && c.memoizedState.isDehydrated) try {
            Vb2(b.containerInfo);
          } catch (p2) {
            U2(a, a.return, p2);
          }
          if (Ua2) {
            e = b.containerInfo;
            f2 = b.pendingChildren;
            try {
              Cb2(e, f2);
            } catch (p2) {
              U2(a, a.return, p2);
            }
          }
        }
        break;
      case 4:
        Zg2(
          b,
          a
        );
        ah2(a);
        if (d & 4 && Ua2) {
          f2 = a.stateNode;
          e = f2.containerInfo;
          f2 = f2.pendingChildren;
          try {
            Cb2(e, f2);
          } catch (p2) {
            U2(a, a.return, p2);
          }
        }
        break;
      case 13:
        Zg2(b, a);
        ah2(a);
        e = a.child;
        e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (bh2 = D2()));
        d & 4 && Xg2(a);
        break;
      case 22:
        var g = null !== c && null !== c.memoizedState;
        a.mode & 1 ? (S2 = (c = S2) || g, Zg2(b, a), S2 = c) : Zg2(b, a);
        ah2(a);
        if (d & 8192) {
          c = null !== a.memoizedState;
          if ((a.stateNode.isHidden = c) && !g && 0 !== (a.mode & 1)) for (T2 = a, d = a.child; null !== d; ) {
            for (b = T2 = d; null !== T2; ) {
              g = T2;
              var h = g.child;
              switch (g.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mg2(4, g, g.return);
                  break;
                case 1:
                  Ig2(g, g.return);
                  var k2 = g.stateNode;
                  if ("function" === typeof k2.componentWillUnmount) {
                    var l2 = g, m2 = g.return;
                    try {
                      var r2 = l2;
                      k2.props = r2.memoizedProps;
                      k2.state = r2.memoizedState;
                      k2.componentWillUnmount();
                    } catch (p2) {
                      U2(l2, m2, p2);
                    }
                  }
                  break;
                case 5:
                  Ig2(g, g.return);
                  break;
                case 22:
                  if (null !== g.memoizedState) {
                    ch2(b);
                    continue;
                  }
              }
              null !== h ? (h.return = g, T2 = h) : ch2(b);
            }
            d = d.sibling;
          }
          if (Ta2) {
            a: if (d = null, Ta2) for (b = a; ; ) {
              if (5 === b.tag) {
                if (null === d) {
                  d = b;
                  try {
                    e = b.stateNode, c ? tb2(e) : vb2(b.stateNode, b.memoizedProps);
                  } catch (p2) {
                    U2(a, a.return, p2);
                  }
                }
              } else if (6 === b.tag) {
                if (null === d) try {
                  f2 = b.stateNode, c ? ub2(f2) : wb2(f2, b.memoizedProps);
                } catch (p2) {
                  U2(a, a.return, p2);
                }
              } else if ((22 !== b.tag && 23 !== b.tag || null === b.memoizedState || b === a) && null !== b.child) {
                b.child.return = b;
                b = b.child;
                continue;
              }
              if (b === a) break a;
              for (; null === b.sibling; ) {
                if (null === b.return || b.return === a) break a;
                d === b && (d = null);
                b = b.return;
              }
              d === b && (d = null);
              b.sibling.return = b.return;
              b = b.sibling;
            }
          }
        }
        break;
      case 19:
        Zg2(b, a);
        ah2(a);
        d & 4 && Xg2(a);
        break;
      case 21:
        break;
      default:
        Zg2(b, a), ah2(a);
    }
  }
  function ah2(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        if (Ta2) {
          b: {
            for (var c = a.return; null !== c; ) {
              if (Qg2(c)) {
                var d = c;
                break b;
              }
              c = c.return;
            }
            throw Error(n2(160));
          }
          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (sb2(e), d.flags &= -33);
              var f2 = Rg2(a);
              Tg2(a, f2, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo, h = Rg2(a);
              Sg2(a, h, g);
              break;
            default:
              throw Error(n2(161));
          }
        }
      } catch (k2) {
        U2(a, a.return, k2);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  }
  function dh2(a, b, c) {
    T2 = a;
    eh2(a);
  }
  function eh2(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== T2; ) {
      var e = T2, f2 = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Gg2;
        if (!g) {
          var h = e.alternate, k2 = null !== h && null !== h.memoizedState || S2;
          h = Gg2;
          var l2 = S2;
          Gg2 = g;
          if ((S2 = k2) && !l2) for (T2 = e; null !== T2; ) g = T2, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? fh2(e) : null !== k2 ? (k2.return = g, T2 = k2) : fh2(e);
          for (; null !== f2; ) T2 = f2, eh2(f2), f2 = f2.sibling;
          T2 = e;
          Gg2 = h;
          S2 = l2;
        }
        gh2(a);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, T2 = f2) : gh2(a);
    }
  }
  function gh2(a) {
    for (; null !== T2; ) {
      var b = T2;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              S2 || Ng2(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !S2) if (null === c) d.componentDidMount();
              else {
                var e = b.elementType === b.type ? c.memoizedProps : xf2(b.type, c.memoizedProps);
                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f2 = b.updateQueue;
              null !== f2 && me2(b, f2, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child) switch (b.child.tag) {
                  case 5:
                    c = Ea2(b.child.stateNode);
                    break;
                  case 1:
                    c = b.child.stateNode;
                }
                me2(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              null === c && b.flags & 4 && mb2(h, b.type, b.memoizedProps, b);
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (Va2 && null === b.memoizedState) {
                var k2 = b.alternate;
                if (null !== k2) {
                  var l2 = k2.memoizedState;
                  if (null !== l2) {
                    var m2 = l2.dehydrated;
                    null !== m2 && Wb2(m2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(n2(163));
          }
          S2 || b.flags & 512 && Og2(b);
        } catch (r2) {
          U2(b, b.return, r2);
        }
      }
      if (b === a) {
        T2 = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        T2 = c;
        break;
      }
      T2 = b.return;
    }
  }
  function ch2(a) {
    for (; null !== T2; ) {
      var b = T2;
      if (b === a) {
        T2 = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        T2 = c;
        break;
      }
      T2 = b.return;
    }
  }
  function fh2(a) {
    for (; null !== T2; ) {
      var b = T2;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Ng2(4, b);
            } catch (k2) {
              U2(b, c, k2);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k2) {
                U2(b, e, k2);
              }
            }
            var f2 = b.return;
            try {
              Og2(b);
            } catch (k2) {
              U2(b, f2, k2);
            }
            break;
          case 5:
            var g = b.return;
            try {
              Og2(b);
            } catch (k2) {
              U2(b, g, k2);
            }
        }
      } catch (k2) {
        U2(b, b.return, k2);
      }
      if (b === a) {
        T2 = null;
        break;
      }
      var h = b.sibling;
      if (null !== h) {
        h.return = b.return;
        T2 = h;
        break;
      }
      T2 = b.return;
    }
  }
  var hh2 = 0, ih2 = 1, jh2 = 2, kh2 = 3, lh2 = 4;
  if ("function" === typeof Symbol && Symbol.for) {
    var mh2 = Symbol.for;
    hh2 = mh2("selector.component");
    ih2 = mh2("selector.has_pseudo_class");
    jh2 = mh2("selector.role");
    kh2 = mh2("selector.test_id");
    lh2 = mh2("selector.text");
  }
  function nh2(a) {
    var b = Wa2(a);
    if (null != b) {
      if ("string" !== typeof b.memoizedProps["data-testname"]) throw Error(n2(364));
      return b;
    }
    a = cb2(a);
    if (null === a) throw Error(n2(362));
    return a.stateNode.current;
  }
  function oh2(a, b) {
    switch (b.$$typeof) {
      case hh2:
        if (a.type === b.value) return true;
        break;
      case ih2:
        a: {
          b = b.value;
          a = [a, 0];
          for (var c = 0; c < a.length; ) {
            var d = a[c++], e = a[c++], f2 = b[e];
            if (5 !== d.tag || !fb2(d)) {
              for (; null != f2 && oh2(d, f2); ) e++, f2 = b[e];
              if (e === b.length) {
                b = true;
                break a;
              } else for (d = d.child; null !== d; ) a.push(d, e), d = d.sibling;
            }
          }
          b = false;
        }
        return b;
      case jh2:
        if (5 === a.tag && gb2(a.stateNode, b.value)) return true;
        break;
      case lh2:
        if (5 === a.tag || 6 === a.tag) {
          if (a = eb2(a), null !== a && 0 <= a.indexOf(b.value)) return true;
        }
        break;
      case kh2:
        if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) return true;
        break;
      default:
        throw Error(n2(365));
    }
    return false;
  }
  function ph2(a) {
    switch (a.$$typeof) {
      case hh2:
        return "<" + (ua2(a.value) || "Unknown") + ">";
      case ih2:
        return ":has(" + (ph2(a) || "") + ")";
      case jh2:
        return '[role="' + a.value + '"]';
      case lh2:
        return '"' + a.value + '"';
      case kh2:
        return '[data-testname="' + a.value + '"]';
      default:
        throw Error(n2(365));
    }
  }
  function qh2(a, b) {
    var c = [];
    a = [a, 0];
    for (var d = 0; d < a.length; ) {
      var e = a[d++], f2 = a[d++], g = b[f2];
      if (5 !== e.tag || !fb2(e)) {
        for (; null != g && oh2(e, g); ) f2++, g = b[f2];
        if (f2 === b.length) c.push(e);
        else for (e = e.child; null !== e; ) a.push(e, f2), e = e.sibling;
      }
    }
    return c;
  }
  function rh2(a, b) {
    if (!bb2) throw Error(n2(363));
    a = nh2(a);
    a = qh2(a, b);
    b = [];
    a = Array.from(a);
    for (var c = 0; c < a.length; ) {
      var d = a[c++];
      if (5 === d.tag) fb2(d) || b.push(d.stateNode);
      else for (d = d.child; null !== d; ) a.push(d), d = d.sibling;
    }
    return b;
  }
  var sh2 = Math.ceil, th2 = da2.ReactCurrentDispatcher, uh2 = da2.ReactCurrentOwner, W2 = da2.ReactCurrentBatchConfig, H2 = 0, N2 = null, X2 = null, Z2 = 0, $f2 = 0, Zf2 = ic2(0), R2 = 0, vh2 = null, le2 = 0, wh2 = 0, xh2 = 0, yh2 = null, zh2 = null, bh2 = 0, Dg2 = Infinity, Ah2 = null;
  function Bh2() {
    Dg2 = D2() + 500;
  }
  var Jf2 = false, Kf2 = null, Mf2 = null, Ch2 = false, Dh2 = null, Eh2 = 0, Fh2 = 0, Gh2 = null, Hh2 = -1, Ih2 = 0;
  function O2() {
    return 0 !== (H2 & 6) ? D2() : -1 !== Hh2 ? Hh2 : Hh2 = D2();
  }
  function tf2(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (H2 & 2) && 0 !== Z2) return Z2 & -Z2;
    if (null !== Cd2.transition) return 0 === Ih2 && (Ih2 = Dc2()), Ih2;
    a = C2;
    return 0 !== a ? a : Ya2();
  }
  function af2(a, b, c, d) {
    if (50 < Fh2) throw Fh2 = 0, Gh2 = null, Error(n2(185));
    Fc2(a, c, d);
    if (0 === (H2 & 2) || a !== N2) a === N2 && (0 === (H2 & 2) && (wh2 |= c), 4 === R2 && Jh2(a, Z2)), Kh2(a, d), 1 === c && 0 === H2 && 0 === (b.mode & 1) && (Bh2(), Xc2 && ad2());
  }
  function Kh2(a, b) {
    var c = a.callbackNode;
    Bc2(a, b);
    var d = zc2(a, a === N2 ? Z2 : 0);
    if (0 === d) null !== c && Kc2(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      null != c && Kc2(c);
      if (1 === b) 0 === a.tag ? $c2(Lh2.bind(null, a)) : Zc2(Lh2.bind(null, a)), $a ? ab2(function() {
        0 === (H2 & 6) && ad2();
      }) : Jc2(Nc2, ad2), c = null;
      else {
        switch (Ic2(d)) {
          case 1:
            c = Nc2;
            break;
          case 4:
            c = Oc2;
            break;
          case 16:
            c = Pc2;
            break;
          case 536870912:
            c = Qc2;
            break;
          default:
            c = Pc2;
        }
        c = Mh2(c, Nh2.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Nh2(a, b) {
    Hh2 = -1;
    Ih2 = 0;
    if (0 !== (H2 & 6)) throw Error(n2(327));
    var c = a.callbackNode;
    if (Oh2() && a.callbackNode !== c) return null;
    var d = zc2(a, a === N2 ? Z2 : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ph2(a, d);
    else {
      b = d;
      var e = H2;
      H2 |= 2;
      var f2 = Qh2();
      if (N2 !== a || Z2 !== b) Ah2 = null, Bh2(), Rh2(a, b);
      do
        try {
          Sh2();
          break;
        } catch (h) {
          Th2(a, h);
        }
      while (1);
      Ud2();
      th2.current = f2;
      H2 = e;
      null !== X2 ? b = 0 : (N2 = null, Z2 = 0, b = R2);
    }
    if (0 !== b) {
      2 === b && (e = Cc2(a), 0 !== e && (d = e, b = Uh2(a, e)));
      if (1 === b) throw c = vh2, Rh2(a, 0), Jh2(a, d), Kh2(a, D2()), c;
      if (6 === b) Jh2(a, d);
      else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Vh2(e) && (b = Ph2(a, d), 2 === b && (f2 = Cc2(a), 0 !== f2 && (d = f2, b = Uh2(a, f2))), 1 === b)) throw c = vh2, Rh2(a, 0), Jh2(a, d), Kh2(a, D2()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(n2(345));
          case 2:
            Wh2(a, zh2, Ah2);
            break;
          case 3:
            Jh2(a, d);
            if ((d & 130023424) === d && (b = bh2 + 500 - D2(), 10 < b)) {
              if (0 !== zc2(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                O2();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Pa2(Wh2.bind(null, a, zh2, Ah2), b);
              break;
            }
            Wh2(a, zh2, Ah2);
            break;
          case 4:
            Jh2(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;
            for (e = -1; 0 < d; ) {
              var g = 31 - tc2(d);
              f2 = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f2;
            }
            d = e;
            d = D2() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * sh2(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Pa2(Wh2.bind(null, a, zh2, Ah2), d);
              break;
            }
            Wh2(a, zh2, Ah2);
            break;
          case 5:
            Wh2(a, zh2, Ah2);
            break;
          default:
            throw Error(n2(329));
        }
      }
    }
    Kh2(a, D2());
    return a.callbackNode === c ? Nh2.bind(null, a) : null;
  }
  function Uh2(a, b) {
    var c = yh2;
    a.current.memoizedState.isDehydrated && (Rh2(a, b).flags |= 256);
    a = Ph2(a, b);
    2 !== a && (b = zh2, zh2 = c, null !== b && Cg2(b));
    return a;
  }
  function Cg2(a) {
    null === zh2 ? zh2 = a : zh2.push.apply(zh2, a);
  }
  function Vh2(a) {
    for (var b = a; ; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
          var e = c[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!Vc2(f2(), e)) return false;
          } catch (g) {
            return false;
          }
        }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
      else {
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  }
  function Jh2(a, b) {
    b &= ~xh2;
    b &= ~wh2;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - tc2(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Lh2(a) {
    if (0 !== (H2 & 6)) throw Error(n2(327));
    Oh2();
    var b = zc2(a, 0);
    if (0 === (b & 1)) return Kh2(a, D2()), null;
    var c = Ph2(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = Cc2(a);
      0 !== d && (b = d, c = Uh2(a, d));
    }
    if (1 === c) throw c = vh2, Rh2(a, 0), Jh2(a, b), Kh2(a, D2()), c;
    if (6 === c) throw Error(n2(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Wh2(a, zh2, Ah2);
    Kh2(a, D2());
    return null;
  }
  function Xh2(a) {
    null !== Dh2 && 0 === Dh2.tag && 0 === (H2 & 6) && Oh2();
    var b = H2;
    H2 |= 1;
    var c = W2.transition, d = C2;
    try {
      if (W2.transition = null, C2 = 1, a) return a();
    } finally {
      C2 = d, W2.transition = c, H2 = b, 0 === (H2 & 6) && ad2();
    }
  }
  function Eg2() {
    $f2 = Zf2.current;
    q2(Zf2);
  }
  function Rh2(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== Ra2 && (a.timeoutHandle = Ra2, Qa2(c));
    if (null !== X2) for (c = X2.return; null !== c; ) {
      var d = c;
      nd2(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && nc2();
          break;
        case 3:
          te2();
          q2(z2);
          q2(x2);
          ye();
          break;
        case 5:
          ve2(d);
          break;
        case 4:
          te2();
          break;
        case 13:
          q2(I2);
          break;
        case 19:
          q2(I2);
          break;
        case 10:
          Wd2(d.type._context);
          break;
        case 22:
        case 23:
          Eg2();
      }
      c = c.return;
    }
    N2 = a;
    X2 = a = Jd2(a.current, null);
    Z2 = $f2 = b;
    R2 = 0;
    vh2 = null;
    xh2 = wh2 = le2 = 0;
    zh2 = yh2 = null;
    if (null !== $d2) {
      for (b = 0; b < $d2.length; b++) if (c = $d2[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f2 = c.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e;
          d.next = g;
        }
        c.pending = d;
      }
      $d2 = null;
    }
    return a;
  }
  function Th2(a, b) {
    do {
      var c = X2;
      try {
        Ud2();
        ze.current = Le2;
        if (Ce2) {
          for (var d = J2.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Ce2 = false;
        }
        Be2 = 0;
        L2 = K2 = J2 = null;
        De2 = false;
        Ee2 = 0;
        uh2.current = null;
        if (null === c || null === c.return) {
          R2 = 1;
          vh2 = b;
          X2 = null;
          break;
        }
        a: {
          var f2 = a, g = c.return, h = c, k2 = b;
          b = Z2;
          h.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h, r2 = m2.tag;
            if (0 === (m2.mode & 1) && (0 === r2 || 11 === r2 || 15 === r2)) {
              var p2 = m2.alternate;
              p2 ? (m2.updateQueue = p2.updateQueue, m2.memoizedState = p2.memoizedState, m2.lanes = p2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var B2 = Pf2(g);
            if (null !== B2) {
              B2.flags &= -257;
              Qf2(B2, g, h, f2, b);
              B2.mode & 1 && Nf2(f2, l2, b);
              b = B2;
              k2 = l2;
              var w2 = b.updateQueue;
              if (null === w2) {
                var Y2 = /* @__PURE__ */ new Set();
                Y2.add(k2);
                b.updateQueue = Y2;
              } else w2.add(k2);
              break a;
            } else {
              if (0 === (b & 1)) {
                Nf2(f2, l2, b);
                ng2();
                break a;
              }
              k2 = Error(n2(426));
            }
          } else if (F2 && h.mode & 1) {
            var ya2 = Pf2(g);
            if (null !== ya2) {
              0 === (ya2.flags & 65536) && (ya2.flags |= 256);
              Qf2(ya2, g, h, f2, b);
              Bd2(Ef2(k2, h));
              break a;
            }
          }
          f2 = k2 = Ef2(k2, h);
          4 !== R2 && (R2 = 2);
          null === yh2 ? yh2 = [f2] : yh2.push(f2);
          f2 = g;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var E2 = If2(f2, k2, b);
                je2(f2, E2);
                break a;
              case 1:
                h = k2;
                var u2 = f2.type, t2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof u2.getDerivedStateFromError || null !== t2 && "function" === typeof t2.componentDidCatch && (null === Mf2 || !Mf2.has(t2)))) {
                  f2.flags |= 65536;
                  b &= -b;
                  f2.lanes |= b;
                  var Db2 = Lf2(f2, h, b);
                  je2(f2, Db2);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Yh2(c);
      } catch (lc2) {
        b = lc2;
        X2 === c && null !== c && (X2 = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Qh2() {
    var a = th2.current;
    th2.current = Le2;
    return null === a ? Le2 : a;
  }
  function ng2() {
    if (0 === R2 || 3 === R2 || 2 === R2) R2 = 4;
    null === N2 || 0 === (le2 & 268435455) && 0 === (wh2 & 268435455) || Jh2(N2, Z2);
  }
  function Ph2(a, b) {
    var c = H2;
    H2 |= 2;
    var d = Qh2();
    if (N2 !== a || Z2 !== b) Ah2 = null, Rh2(a, b);
    do
      try {
        Zh2();
        break;
      } catch (e) {
        Th2(a, e);
      }
    while (1);
    Ud2();
    H2 = c;
    th2.current = d;
    if (null !== X2) throw Error(n2(261));
    N2 = null;
    Z2 = 0;
    return R2;
  }
  function Zh2() {
    for (; null !== X2; ) $h2(X2);
  }
  function Sh2() {
    for (; null !== X2 && !Lc2(); ) $h2(X2);
  }
  function $h2(a) {
    var b = ai2(a.alternate, a, $f2);
    a.memoizedProps = a.pendingProps;
    null === b ? Yh2(a) : X2 = b;
    uh2.current = null;
  }
  function Yh2(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (c = Bg2(c, b, $f2), null !== c) {
          X2 = c;
          return;
        }
      } else {
        c = Fg2(c, b);
        if (null !== c) {
          c.flags &= 32767;
          X2 = c;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          R2 = 6;
          X2 = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        X2 = b;
        return;
      }
      X2 = b = a;
    } while (null !== b);
    0 === R2 && (R2 = 5);
  }
  function Wh2(a, b, c) {
    var d = C2, e = W2.transition;
    try {
      W2.transition = null, C2 = 1, bi2(a, b, c, d);
    } finally {
      W2.transition = e, C2 = d;
    }
    return null;
  }
  function bi2(a, b, c, d) {
    do
      Oh2();
    while (null !== Dh2);
    if (0 !== (H2 & 6)) throw Error(n2(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(n2(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f2 = c.lanes | c.childLanes;
    Gc2(a, f2);
    a === N2 && (X2 = N2 = null, Z2 = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || Ch2 || (Ch2 = true, Mh2(Pc2, function() {
      Oh2();
      return null;
    }));
    f2 = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f2) {
      f2 = W2.transition;
      W2.transition = null;
      var g = C2;
      C2 = 1;
      var h = H2;
      H2 |= 4;
      uh2.current = null;
      Lg2(a, c);
      $g2(c, a);
      Ia2(a.containerInfo);
      a.current = c;
      dh2(c);
      Mc2();
      H2 = h;
      C2 = g;
      W2.transition = f2;
    } else a.current = c;
    Ch2 && (Ch2 = false, Dh2 = a, Eh2 = e);
    f2 = a.pendingLanes;
    0 === f2 && (Mf2 = null);
    Tc2(c.stateNode);
    Kh2(a, D2());
    if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Jf2) throw Jf2 = false, a = Kf2, Kf2 = null, a;
    0 !== (Eh2 & 1) && 0 !== a.tag && Oh2();
    f2 = a.pendingLanes;
    0 !== (f2 & 1) ? a === Gh2 ? Fh2++ : (Fh2 = 0, Gh2 = a) : Fh2 = 0;
    ad2();
    return null;
  }
  function Oh2() {
    if (null !== Dh2) {
      var a = Ic2(Eh2), b = W2.transition, c = C2;
      try {
        W2.transition = null;
        C2 = 16 > a ? 16 : a;
        if (null === Dh2) var d = false;
        else {
          a = Dh2;
          Dh2 = null;
          Eh2 = 0;
          if (0 !== (H2 & 6)) throw Error(n2(331));
          var e = H2;
          H2 |= 4;
          for (T2 = a.current; null !== T2; ) {
            var f2 = T2, g = f2.child;
            if (0 !== (T2.flags & 16)) {
              var h = f2.deletions;
              if (null !== h) {
                for (var k2 = 0; k2 < h.length; k2++) {
                  var l2 = h[k2];
                  for (T2 = l2; null !== T2; ) {
                    var m2 = T2;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mg2(8, m2, f2);
                    }
                    var r2 = m2.child;
                    if (null !== r2) r2.return = m2, T2 = r2;
                    else for (; null !== T2; ) {
                      m2 = T2;
                      var p2 = m2.sibling, B2 = m2.return;
                      Pg2(m2);
                      if (m2 === l2) {
                        T2 = null;
                        break;
                      }
                      if (null !== p2) {
                        p2.return = B2;
                        T2 = p2;
                        break;
                      }
                      T2 = B2;
                    }
                  }
                }
                var w2 = f2.alternate;
                if (null !== w2) {
                  var Y2 = w2.child;
                  if (null !== Y2) {
                    w2.child = null;
                    do {
                      var ya2 = Y2.sibling;
                      Y2.sibling = null;
                      Y2 = ya2;
                    } while (null !== Y2);
                  }
                }
                T2 = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, T2 = g;
            else b: for (; null !== T2; ) {
              f2 = T2;
              if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                case 0:
                case 11:
                case 15:
                  Mg2(9, f2, f2.return);
              }
              var E2 = f2.sibling;
              if (null !== E2) {
                E2.return = f2.return;
                T2 = E2;
                break b;
              }
              T2 = f2.return;
            }
          }
          var u2 = a.current;
          for (T2 = u2; null !== T2; ) {
            g = T2;
            var t2 = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== t2) t2.return = g, T2 = t2;
            else b: for (g = u2; null !== T2; ) {
              h = T2;
              if (0 !== (h.flags & 2048)) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ng2(9, h);
                }
              } catch (lc2) {
                U2(h, h.return, lc2);
              }
              if (h === g) {
                T2 = null;
                break b;
              }
              var Db2 = h.sibling;
              if (null !== Db2) {
                Db2.return = h.return;
                T2 = Db2;
                break b;
              }
              T2 = h.return;
            }
          }
          H2 = e;
          ad2();
          if (Sc2 && "function" === typeof Sc2.onPostCommitFiberRoot) try {
            Sc2.onPostCommitFiberRoot(Rc2, a);
          } catch (lc2) {
          }
          d = true;
        }
        return d;
      } finally {
        C2 = c, W2.transition = b;
      }
    }
    return false;
  }
  function ci2(a, b, c) {
    b = Ef2(c, b);
    b = If2(a, b, 1);
    a = he2(a, b, 1);
    b = O2();
    null !== a && (Fc2(a, 1, b), Kh2(a, b));
  }
  function U2(a, b, c) {
    if (3 === a.tag) ci2(a, a, c);
    else for (; null !== b; ) {
      if (3 === b.tag) {
        ci2(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Mf2 || !Mf2.has(d))) {
          a = Ef2(c, a);
          a = Lf2(b, a, 1);
          b = he2(b, a, 1);
          a = O2();
          null !== b && (Fc2(b, 1, a), Kh2(b, a));
          break;
        }
      }
      b = b.return;
    }
  }
  function Of2(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = O2();
    a.pingedLanes |= a.suspendedLanes & c;
    N2 === a && (Z2 & c) === c && (4 === R2 || 3 === R2 && (Z2 & 130023424) === Z2 && 500 > D2() - bh2 ? Rh2(a, 0) : xh2 |= c);
    Kh2(a, b);
  }
  function di2(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = xc2, xc2 <<= 1, 0 === (xc2 & 130023424) && (xc2 = 4194304)));
    var c = O2();
    a = ce2(a, b);
    null !== a && (Fc2(a, b, c), Kh2(a, c));
  }
  function og2(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    di2(a, c);
  }
  function Yg2(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(n2(314));
    }
    null !== d && d.delete(b);
    di2(a, c);
  }
  var ai2;
  ai2 = function(a, b, c) {
    if (null !== a) if (a.memoizedProps !== b.pendingProps || z2.current) G2 = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return G2 = false, sg2(a, b, c);
      G2 = 0 !== (a.flags & 131072) ? true : false;
    }
    else G2 = false, F2 && 0 !== (b.flags & 1048576) && ld2(b, ed2, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        cg2(a, b);
        a = b.pendingProps;
        var e = mc2(b, x2.current);
        Yd2(b, c);
        e = He2(null, b, d, a, e, c);
        var f2 = Me2();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, A2(d) ? (f2 = true, qc2(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ee2(b), e.updater = zf2, b.stateNode = e, e._reactInternals = b, Df2(b, d, a, c), b = dg2(null, b, d, true, f2, c)) : (b.tag = 0, F2 && f2 && md2(b), P2(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          cg2(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = ei2(d);
          a = xf2(d, a);
          switch (e) {
            case 0:
              b = Xf2(null, b, d, a, c);
              break a;
            case 1:
              b = bg2(null, b, d, a, c);
              break a;
            case 11:
              b = Sf2(null, b, d, a, c);
              break a;
            case 14:
              b = Uf2(null, b, d, xf2(d.type, a), c);
              break a;
          }
          throw Error(n2(
            306,
            d,
            ""
          ));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf2(d, e), Xf2(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf2(d, e), bg2(a, b, d, e, c);
      case 3:
        a: {
          eg2(b);
          if (null === a) throw Error(n2(387));
          d = b.pendingProps;
          f2 = b.memoizedState;
          e = f2.element;
          fe2(a, b);
          ke2(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (Va2 && f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            e = Ef2(Error(n2(423)), b);
            b = fg2(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ef2(Error(n2(424)), b);
            b = fg2(a, b, d, c, e);
            break a;
          } else for (Va2 && (pd2 = Pb2(b.stateNode.containerInfo), od2 = b, F2 = true, rd2 = null, qd2 = false), c = Pd2(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            Ad2();
            if (d === e) {
              b = Tf2(a, b, c);
              break a;
            }
            P2(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return ue2(b), null === a && wd2(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Na2(d, e) ? g = null : null !== f2 && Na2(d, f2) && (b.flags |= 32), ag2(a, b), P2(a, b, g, c), b.child;
      case 6:
        return null === a && wd2(b), null;
      case 13:
        return ig2(a, b, c);
      case 4:
        return se2(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Od2(b, null, d, c) : P2(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf2(d, e), Sf2(a, b, d, e, c);
      case 7:
        return P2(a, b, b.pendingProps, c), b.child;
      case 8:
        return P2(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return P2(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f2 = b.memoizedProps;
          g = e.value;
          Vd2(b, d, g);
          if (null !== f2) if (Vc2(f2.value, g)) {
            if (f2.children === e.children && !z2.current) {
              b = Tf2(a, b, c);
              break a;
            }
          } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
            var h = f2.dependencies;
            if (null !== h) {
              g = f2.child;
              for (var k2 = h.firstContext; null !== k2; ) {
                if (k2.context === d) {
                  if (1 === f2.tag) {
                    k2 = ge2(-1, c & -c);
                    k2.tag = 2;
                    var l2 = f2.updateQueue;
                    if (null !== l2) {
                      l2 = l2.shared;
                      var m2 = l2.pending;
                      null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                      l2.pending = k2;
                    }
                  }
                  f2.lanes |= c;
                  k2 = f2.alternate;
                  null !== k2 && (k2.lanes |= c);
                  Xd2(f2.return, c, b);
                  h.lanes |= c;
                  break;
                }
                k2 = k2.next;
              }
            } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
            else if (18 === f2.tag) {
              g = f2.return;
              if (null === g) throw Error(n2(341));
              g.lanes |= c;
              h = g.alternate;
              null !== h && (h.lanes |= c);
              Xd2(g, c, b);
              g = f2.sibling;
            } else g = f2.child;
            if (null !== g) g.return = f2;
            else for (g = f2; null !== g; ) {
              if (g === b) {
                g = null;
                break;
              }
              f2 = g.sibling;
              if (null !== f2) {
                f2.return = g.return;
                g = f2;
                break;
              }
              g = g.return;
            }
            f2 = g;
          }
          P2(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, Yd2(b, c), e = Zd2(e), d = d(e), b.flags |= 1, P2(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = xf2(d, b.pendingProps), e = xf2(d.type, e), Uf2(a, b, d, e, c);
      case 15:
        return Wf2(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf2(d, e), cg2(a, b), b.tag = 1, A2(d) ? (a = true, qc2(b)) : a = false, Yd2(b, c), Bf2(b, d, e), Df2(b, d, e, c), dg2(null, b, d, true, a, c);
      case 19:
        return rg2(a, b, c);
      case 22:
        return Yf2(a, b, c);
    }
    throw Error(n2(156, b.tag));
  };
  function Mh2(a, b) {
    return Jc2(a, b);
  }
  function fi2(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function td2(a, b, c, d) {
    return new fi2(a, b, c, d);
  }
  function Vf2(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function ei2(a) {
    if ("function" === typeof a) return Vf2(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === ma2) return 11;
      if (a === pa2) return 14;
    }
    return 2;
  }
  function Jd2(a, b) {
    var c = a.alternate;
    null === c ? (c = td2(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function Ld2(a, b, c, d, e, f2) {
    var g = 2;
    d = a;
    if ("function" === typeof a) Vf2(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch (a) {
      case ha2:
        return Nd2(c.children, e, f2, b);
      case ia2:
        g = 8;
        e |= 8;
        break;
      case ja2:
        return a = td2(12, c, b, e | 2), a.elementType = ja2, a.lanes = f2, a;
      case na:
        return a = td2(13, c, b, e), a.elementType = na, a.lanes = f2, a;
      case oa2:
        return a = td2(19, c, b, e), a.elementType = oa2, a.lanes = f2, a;
      case ra2:
        return jg2(c, e, f2, b);
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case ka2:
            g = 10;
            break a;
          case la2:
            g = 9;
            break a;
          case ma2:
            g = 11;
            break a;
          case pa2:
            g = 14;
            break a;
          case qa2:
            g = 16;
            d = null;
            break a;
        }
        throw Error(n2(130, null == a ? a : typeof a, ""));
    }
    b = td2(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f2;
    return b;
  }
  function Nd2(a, b, c, d) {
    a = td2(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function jg2(a, b, c, d) {
    a = td2(22, a, d, b);
    a.elementType = ra2;
    a.lanes = c;
    a.stateNode = { isHidden: false };
    return a;
  }
  function Kd2(a, b, c) {
    a = td2(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function Md2(a, b, c) {
    b = td2(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  }
  function gi2(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = Ra2;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = Ec2(0);
    this.expirationTimes = Ec2(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Ec2(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    Va2 && (this.mutableSourceEagerHydrationData = null);
  }
  function hi2(a, b, c, d, e, f2, g, h, k2) {
    a = new gi2(a, b, c, h, k2);
    1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
    f2 = td2(3, null, null, b);
    a.current = f2;
    f2.stateNode = a;
    f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    ee2(f2);
    return a;
  }
  function ii2(a) {
    if (!a) return jc2;
    a = a._reactInternals;
    a: {
      if (wa2(a) !== a || 1 !== a.tag) throw Error(n2(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (A2(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (null !== b);
      throw Error(n2(171));
    }
    if (1 === a.tag) {
      var c = a.type;
      if (A2(c)) return pc2(a, c, b);
    }
    return b;
  }
  function ji2(a) {
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(n2(188));
      a = Object.keys(a).join(",");
      throw Error(n2(268, a));
    }
    a = Aa2(b);
    return null === a ? null : a.stateNode;
  }
  function ki2(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function li2(a, b) {
    ki2(a, b);
    (a = a.alternate) && ki2(a, b);
  }
  function mi2(a) {
    a = Aa2(a);
    return null === a ? null : a.stateNode;
  }
  function ni2() {
    return null;
  }
  exports$1.attemptContinuousHydration = function(a) {
    if (13 === a.tag) {
      var b = ce2(a, 134217728);
      if (null !== b) {
        var c = O2();
        af2(b, a, 134217728, c);
      }
      li2(a, 134217728);
    }
  };
  exports$1.attemptDiscreteHydration = function(a) {
    if (13 === a.tag) {
      var b = ce2(a, 1);
      if (null !== b) {
        var c = O2();
        af2(b, a, 1, c);
      }
      li2(a, 1);
    }
  };
  exports$1.attemptHydrationAtCurrentPriority = function(a) {
    if (13 === a.tag) {
      var b = tf2(a), c = ce2(a, b);
      if (null !== c) {
        var d = O2();
        af2(c, a, b, d);
      }
      li2(a, b);
    }
  };
  exports$1.attemptSynchronousHydration = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = yc2(b.pendingLanes);
          0 !== c && (Hc2(b, c | 1), Kh2(b, D2()), 0 === (H2 & 6) && (Bh2(), ad2()));
        }
        break;
      case 13:
        Xh2(function() {
          var b2 = ce2(a, 1);
          if (null !== b2) {
            var c2 = O2();
            af2(b2, a, 1, c2);
          }
        }), li2(a, 1);
    }
  };
  exports$1.batchedUpdates = function(a, b) {
    var c = H2;
    H2 |= 1;
    try {
      return a(b);
    } finally {
      H2 = c, 0 === H2 && (Bh2(), Xc2 && ad2());
    }
  };
  exports$1.createComponentSelector = function(a) {
    return { $$typeof: hh2, value: a };
  };
  exports$1.createContainer = function(a, b, c, d, e, f2, g) {
    return hi2(a, b, false, null, c, d, e, f2, g);
  };
  exports$1.createHasPseudoClassSelector = function(a) {
    return { $$typeof: ih2, value: a };
  };
  exports$1.createHydrationContainer = function(a, b, c, d, e, f2, g, h, k2) {
    a = hi2(c, d, true, a, e, f2, g, h, k2);
    a.context = ii2(null);
    c = a.current;
    d = O2();
    e = tf2(c);
    f2 = ge2(d, e);
    f2.callback = void 0 !== b && null !== b ? b : null;
    he2(c, f2, e);
    a.current.lanes = e;
    Fc2(a, e, d);
    Kh2(a, d);
    return a;
  };
  exports$1.createPortal = function(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: fa2, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
  };
  exports$1.createRoleSelector = function(a) {
    return { $$typeof: jh2, value: a };
  };
  exports$1.createTestNameSelector = function(a) {
    return { $$typeof: kh2, value: a };
  };
  exports$1.createTextSelector = function(a) {
    return { $$typeof: lh2, value: a };
  };
  exports$1.deferredUpdates = function(a) {
    var b = C2, c = W2.transition;
    try {
      return W2.transition = null, C2 = 16, a();
    } finally {
      C2 = b, W2.transition = c;
    }
  };
  exports$1.discreteUpdates = function(a, b, c, d, e) {
    var f2 = C2, g = W2.transition;
    try {
      return W2.transition = null, C2 = 1, a(b, c, d, e);
    } finally {
      C2 = f2, W2.transition = g, 0 === H2 && Bh2();
    }
  };
  exports$1.findAllNodes = rh2;
  exports$1.findBoundingRects = function(a, b) {
    if (!bb2) throw Error(n2(363));
    b = rh2(a, b);
    a = [];
    for (var c = 0; c < b.length; c++) a.push(db2(b[c]));
    for (b = a.length - 1; 0 < b; b--) {
      c = a[b];
      for (var d = c.x, e = d + c.width, f2 = c.y, g = f2 + c.height, h = b - 1; 0 <= h; h--) if (b !== h) {
        var k2 = a[h], l2 = k2.x, m2 = l2 + k2.width, r2 = k2.y, p2 = r2 + k2.height;
        if (d >= l2 && f2 >= r2 && e <= m2 && g <= p2) {
          a.splice(b, 1);
          break;
        } else if (!(d !== l2 || c.width !== k2.width || p2 < f2 || r2 > g)) {
          r2 > f2 && (k2.height += r2 - f2, k2.y = f2);
          p2 < g && (k2.height = g - r2);
          a.splice(b, 1);
          break;
        } else if (!(f2 !== r2 || c.height !== k2.height || m2 < d || l2 > e)) {
          l2 > d && (k2.width += l2 - d, k2.x = d);
          m2 < e && (k2.width = e - l2);
          a.splice(b, 1);
          break;
        }
      }
    }
    return a;
  };
  exports$1.findHostInstance = ji2;
  exports$1.findHostInstanceWithNoPortals = function(a) {
    a = za2(a);
    a = null !== a ? Ca2(a) : null;
    return null === a ? null : a.stateNode;
  };
  exports$1.findHostInstanceWithWarning = function(a) {
    return ji2(a);
  };
  exports$1.flushControlled = function(a) {
    var b = H2;
    H2 |= 1;
    var c = W2.transition, d = C2;
    try {
      W2.transition = null, C2 = 1, a();
    } finally {
      C2 = d, W2.transition = c, H2 = b, 0 === H2 && (Bh2(), ad2());
    }
  };
  exports$1.flushPassiveEffects = Oh2;
  exports$1.flushSync = Xh2;
  exports$1.focusWithin = function(a, b) {
    if (!bb2) throw Error(n2(363));
    a = nh2(a);
    b = qh2(a, b);
    b = Array.from(b);
    for (a = 0; a < b.length; ) {
      var c = b[a++];
      if (!fb2(c)) {
        if (5 === c.tag && hb2(c.stateNode)) return true;
        for (c = c.child; null !== c; ) b.push(c), c = c.sibling;
      }
    }
    return false;
  };
  exports$1.getCurrentUpdatePriority = function() {
    return C2;
  };
  exports$1.getFindAllNodesFailureDescription = function(a, b) {
    if (!bb2) throw Error(n2(363));
    var c = 0, d = [];
    a = [nh2(a), 0];
    for (var e = 0; e < a.length; ) {
      var f2 = a[e++], g = a[e++], h = b[g];
      if (5 !== f2.tag || !fb2(f2)) {
        if (oh2(f2, h) && (d.push(ph2(h)), g++, g > c && (c = g)), g < b.length) for (f2 = f2.child; null !== f2; ) a.push(f2, g), f2 = f2.sibling;
      }
    }
    if (c < b.length) {
      for (a = []; c < b.length; c++) a.push(ph2(b[c]));
      return "findAllNodes was able to match part of the selector:\n  " + (d.join(" > ") + "\n\nNo matching component was found for:\n  ") + a.join(" > ");
    }
    return null;
  };
  exports$1.getPublicRootInstance = function(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return Ea2(a.child.stateNode);
      default:
        return a.child.stateNode;
    }
  };
  exports$1.injectIntoDevTools = function(a) {
    a = { bundleType: a.bundleType, version: a.version, rendererPackageName: a.rendererPackageName, rendererConfig: a.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: da2.ReactCurrentDispatcher, findHostInstanceByFiber: mi2, findFiberByHostInstance: a.findFiberByHostInstance || ni2, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1" };
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) a = false;
    else {
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (b.isDisabled || !b.supportsFiber) a = true;
      else {
        try {
          Rc2 = b.inject(a), Sc2 = b;
        } catch (c) {
        }
        a = b.checkDCE ? true : false;
      }
    }
    return a;
  };
  exports$1.isAlreadyRendering = function() {
    return false;
  };
  exports$1.observeVisibleRects = function(a, b, c, d) {
    if (!bb2) throw Error(n2(363));
    a = rh2(a, b);
    var e = ib2(a, c, d).disconnect;
    return { disconnect: function() {
      e();
    } };
  };
  exports$1.registerMutableSourceForHydration = function(a, b) {
    var c = b._getVersion;
    c = c(b._source);
    null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
  };
  exports$1.runWithPriority = function(a, b) {
    var c = C2;
    try {
      return C2 = a, b();
    } finally {
      C2 = c;
    }
  };
  exports$1.shouldError = function() {
    return null;
  };
  exports$1.shouldSuspend = function() {
    return false;
  };
  exports$1.updateContainer = function(a, b, c, d) {
    var e = b.current, f2 = O2(), g = tf2(e);
    c = ii2(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = ge2(f2, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = he2(e, b, g);
    null !== a && (af2(a, e, g, f2), ie2(a, e, g));
    return g;
  };
  return exports$1;
};
{
  reactReconciler.exports = reactReconciler_production_min;
}
var reactReconcilerExports = reactReconciler.exports;
const ReactFiberReconciler = /* @__PURE__ */ getDefaultExportFromCjs(reactReconcilerExports);
var constants = { exports: {} };
var reactReconcilerConstants_production_min = {};
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
reactReconcilerConstants_production_min.ConcurrentRoot = 1;
reactReconcilerConstants_production_min.ContinuousEventPriority = 4;
reactReconcilerConstants_production_min.DefaultEventPriority = 16;
reactReconcilerConstants_production_min.DiscreteEventPriority = 1;
reactReconcilerConstants_production_min.IdleEventPriority = 536870912;
reactReconcilerConstants_production_min.LegacyRoot = 0;
{
  constants.exports = reactReconcilerConstants_production_min;
}
var constantsExports = constants.exports;
const propsToSkip = {
  children: true,
  ref: true,
  key: true,
  style: true,
  forwardedRef: true,
  unstable_applyCache: true,
  unstable_applyDrawHitFromCache: true
};
let zIndexWarningShowed = false;
let dragWarningShowed = false;
const EVENTS_NAMESPACE = ".react-konva-event";
const DRAGGABLE_WARNING = `ReactKonva: You have a Konva node with draggable = true and position defined but no onDragMove or onDragEnd events are handled.
Position of a node will be changed during drag&drop, so you should update state of the react app as well.
Consider to add onDragMove or onDragEnd events.
For more info see: https://github.com/konvajs/react-konva/issues/256
`;
const Z_INDEX_WARNING = `ReactKonva: You are using "zIndex" attribute for a Konva node.
react-konva may get confused with ordering. Just define correct order of elements in your render function of a component.
For more info see: https://github.com/konvajs/react-konva/issues/194
`;
const EMPTY_PROPS = {};
function applyNodeProps(instance, props, oldProps = EMPTY_PROPS) {
  if (!zIndexWarningShowed && "zIndex" in props) {
    console.warn(Z_INDEX_WARNING);
    zIndexWarningShowed = true;
  }
  if (!dragWarningShowed && props.draggable) {
    var hasPosition = props.x !== void 0 || props.y !== void 0;
    var hasEvents = props.onDragEnd || props.onDragMove;
    if (hasPosition && !hasEvents) {
      console.warn(DRAGGABLE_WARNING);
      dragWarningShowed = true;
    }
  }
  for (var key in oldProps) {
    if (propsToSkip[key]) {
      continue;
    }
    var isEvent = key.slice(0, 2) === "on";
    var propChanged = oldProps[key] !== props[key];
    if (isEvent && propChanged) {
      var eventName = key.substr(2).toLowerCase();
      if (eventName.substr(0, 7) === "content") {
        eventName = "content" + eventName.substr(7, 1).toUpperCase() + eventName.substr(8);
      }
      instance.off(eventName, oldProps[key]);
    }
    var toRemove = !props.hasOwnProperty(key);
    if (toRemove) {
      instance.setAttr(key, void 0);
    }
  }
  var strictUpdate = props._useStrictMode;
  var updatedProps = {};
  var hasUpdates = false;
  const newEvents = {};
  for (var key in props) {
    if (propsToSkip[key]) {
      continue;
    }
    var isEvent = key.slice(0, 2) === "on";
    var toAdd = oldProps[key] !== props[key];
    if (isEvent && toAdd) {
      var eventName = key.substr(2).toLowerCase();
      if (eventName.substr(0, 7) === "content") {
        eventName = "content" + eventName.substr(7, 1).toUpperCase() + eventName.substr(8);
      }
      if (props[key]) {
        newEvents[eventName] = props[key];
      }
    }
    if (!isEvent && (props[key] !== oldProps[key] || strictUpdate && props[key] !== instance.getAttr(key))) {
      hasUpdates = true;
      updatedProps[key] = props[key];
    }
  }
  if (hasUpdates) {
    instance.setAttrs(updatedProps);
    updatePicture(instance);
  }
  for (var eventName in newEvents) {
    instance.on(eventName + EVENTS_NAMESPACE, newEvents[eventName]);
  }
}
function updatePicture(node) {
  if (!Global.Konva.autoDrawEnabled) {
    var drawingNode = node.getLayer() || node.getStage();
    drawingNode && drawingNode.batchDraw();
  }
}
const NO_CONTEXT = {};
const UPDATE_SIGNAL = {};
Konva.Node.prototype._applyProps = applyNodeProps;
function appendInitialChild(parentInstance, child) {
  if (typeof child === "string") {
    console.error(`Do not use plain text as child of Konva.Node. You are using text: ${child}`);
    return;
  }
  parentInstance.add(child);
  updatePicture(parentInstance);
}
function createInstance(type, props, internalInstanceHandle) {
  let NodeClass = Konva[type];
  if (!NodeClass) {
    console.error(`Konva has no node with the type ${type}. Group will be used instead. If you use minimal version of react-konva, just import required nodes into Konva: "import "konva/lib/shapes/${type}"  If you want to render DOM elements as part of canvas tree take a look into this demo: https://konvajs.github.io/docs/react/DOM_Portal.html`);
    NodeClass = Konva.Group;
  }
  const propsWithoutEvents = {};
  const propsWithOnlyEvents = {};
  for (var key in props) {
    var isEvent = key.slice(0, 2) === "on";
    if (isEvent) {
      propsWithOnlyEvents[key] = props[key];
    } else {
      propsWithoutEvents[key] = props[key];
    }
  }
  const instance = new NodeClass(propsWithoutEvents);
  applyNodeProps(instance, propsWithOnlyEvents);
  return instance;
}
function createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
  console.error(`Text components are not supported for now in ReactKonva. Your text is: "${text}"`);
}
function finalizeInitialChildren(domElement, type, props) {
  return false;
}
function getPublicInstance(instance) {
  return instance;
}
function prepareForCommit() {
  return null;
}
function preparePortalMount() {
  return null;
}
function prepareUpdate(domElement, type, oldProps, newProps) {
  return UPDATE_SIGNAL;
}
function resetAfterCommit() {
}
function resetTextContent(domElement) {
}
function shouldDeprioritizeSubtree(type, props) {
  return false;
}
function getRootHostContext() {
  return NO_CONTEXT;
}
function getChildHostContext() {
  return NO_CONTEXT;
}
const scheduleTimeout = setTimeout;
const cancelTimeout = clearTimeout;
const noTimeout = -1;
function shouldSetTextContent(type, props) {
  return false;
}
const isPrimaryRenderer = false;
const warnsIfNotActing = true;
const supportsMutation = true;
function appendChild(parentInstance, child) {
  if (child.parent === parentInstance) {
    child.moveToTop();
  } else {
    parentInstance.add(child);
  }
  updatePicture(parentInstance);
}
function appendChildToContainer(parentInstance, child) {
  if (child.parent === parentInstance) {
    child.moveToTop();
  } else {
    parentInstance.add(child);
  }
  updatePicture(parentInstance);
}
function insertBefore(parentInstance, child, beforeChild) {
  child._remove();
  parentInstance.add(child);
  child.setZIndex(beforeChild.getZIndex());
  updatePicture(parentInstance);
}
function insertInContainerBefore(parentInstance, child, beforeChild) {
  insertBefore(parentInstance, child, beforeChild);
}
function removeChild(parentInstance, child) {
  child.destroy();
  child.off(EVENTS_NAMESPACE);
  updatePicture(parentInstance);
}
function removeChildFromContainer(parentInstance, child) {
  child.destroy();
  child.off(EVENTS_NAMESPACE);
  updatePicture(parentInstance);
}
function commitTextUpdate(textInstance, oldText, newText) {
  console.error(`Text components are not yet supported in ReactKonva. You text is: "${newText}"`);
}
function commitMount(instance, type, newProps) {
}
function commitUpdate(instance, updatePayload, type, oldProps, newProps) {
  applyNodeProps(instance, newProps, oldProps);
}
function hideInstance(instance) {
  instance.hide();
  updatePicture(instance);
}
function hideTextInstance(textInstance) {
}
function unhideInstance(instance, props) {
  if (props.visible == null || props.visible) {
    instance.show();
  }
}
function unhideTextInstance(textInstance, text) {
}
function clearContainer(container) {
}
function detachDeletedInstance() {
}
const getCurrentEventPriority = () => constantsExports.DefaultEventPriority;
const HostConfig = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  appendChild,
  appendChildToContainer,
  appendInitialChild,
  cancelTimeout,
  clearContainer,
  commitMount,
  commitTextUpdate,
  commitUpdate,
  createInstance,
  createTextInstance,
  detachDeletedInstance,
  finalizeInitialChildren,
  getChildHostContext,
  getCurrentEventPriority,
  getPublicInstance,
  getRootHostContext,
  hideInstance,
  hideTextInstance,
  idlePriority: schedulerExports.unstable_IdlePriority,
  insertBefore,
  insertInContainerBefore,
  isPrimaryRenderer,
  noTimeout,
  now: schedulerExports.unstable_now,
  prepareForCommit,
  preparePortalMount,
  prepareUpdate,
  removeChild,
  removeChildFromContainer,
  resetAfterCommit,
  resetTextContent,
  run: schedulerExports.unstable_runWithPriority,
  scheduleTimeout,
  shouldDeprioritizeSubtree,
  shouldSetTextContent,
  supportsMutation,
  unhideInstance,
  unhideTextInstance,
  warnsIfNotActing
}, Symbol.toStringTag, { value: "Module" }));
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var _a, _b;
typeof window !== "undefined" && (((_a = window.document) == null ? void 0 : _a.createElement) || ((_b = window.navigator) == null ? void 0 : _b.product) === "ReactNative") ? reactExports.useLayoutEffect : reactExports.useEffect;
function traverseFiber(fiber, ascending, selector) {
  if (!fiber)
    return;
  if (selector(fiber) === true)
    return fiber;
  let child = fiber.child;
  while (child) {
    const match = traverseFiber(child, ascending, selector);
    if (match)
      return match;
    child = child.sibling;
  }
}
function wrapContext(context) {
  try {
    return Object.defineProperties(context, {
      _currentRenderer: {
        get() {
          return null;
        },
        set() {
        }
      },
      _currentRenderer2: {
        get() {
          return null;
        },
        set() {
        }
      }
    });
  } catch (_) {
    return context;
  }
}
const error = console.error;
console.error = function() {
  const message = [...arguments].join("");
  if ((message == null ? void 0 : message.startsWith("Warning:")) && message.includes("useContext")) {
    console.error = error;
    return;
  }
  return error.apply(this, arguments);
};
const FiberContext = wrapContext(reactExports.createContext(null));
class FiberProvider extends reactExports.Component {
  render() {
    return /* @__PURE__ */ reactExports.createElement(FiberContext.Provider, {
      value: this._reactInternals
    }, this.props.children);
  }
}
function useFiber() {
  const root = reactExports.useContext(FiberContext);
  if (root === null)
    throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
  const id2 = reactExports.useId();
  const fiber = reactExports.useMemo(() => {
    for (const maybeFiber of [root, root == null ? void 0 : root.alternate]) {
      if (!maybeFiber)
        continue;
      const fiber2 = traverseFiber(maybeFiber, false, (node) => {
        let state = node.memoizedState;
        while (state) {
          if (state.memoizedState === id2)
            return true;
          state = state.next;
        }
      });
      if (fiber2)
        return fiber2;
    }
  }, [root, id2]);
  return fiber;
}
function useContextMap() {
  const fiber = useFiber();
  const [contextMap] = reactExports.useState(() => /* @__PURE__ */ new Map());
  contextMap.clear();
  let node = fiber;
  while (node) {
    if (node.type && typeof node.type === "object") {
      const enableRenderableContext = node.type._context === void 0 && node.type.Provider === node.type;
      const context = enableRenderableContext ? node.type : node.type._context;
      if (context && context !== FiberContext && !contextMap.has(context)) {
        contextMap.set(context, reactExports.useContext(wrapContext(context)));
      }
    }
    node = node.return;
  }
  return contextMap;
}
function useContextBridge() {
  const contextMap = useContextMap();
  return reactExports.useMemo(
    () => Array.from(contextMap.keys()).reduce(
      (Prev, context) => (props) => /* @__PURE__ */ reactExports.createElement(Prev, null, /* @__PURE__ */ reactExports.createElement(context.Provider, __spreadProps(__spreadValues({}, props), {
        value: contextMap.get(context)
      }))),
      (props) => /* @__PURE__ */ reactExports.createElement(FiberProvider, __spreadValues({}, props))
    ),
    [contextMap]
  );
}
function usePrevious(value) {
  const ref = React$2.useRef({});
  React$2.useLayoutEffect(() => {
    ref.current = value;
  });
  React$2.useLayoutEffect(() => {
    return () => {
      ref.current = {};
    };
  }, []);
  return ref.current;
}
const StageWrap = (props) => {
  const container = React$2.useRef(null);
  const stage = React$2.useRef(null);
  const fiberRef = React$2.useRef(null);
  const oldProps = usePrevious(props);
  const Bridge = useContextBridge();
  const _setRef = (stage2) => {
    const { forwardedRef } = props;
    if (!forwardedRef) {
      return;
    }
    if (typeof forwardedRef === "function") {
      forwardedRef(stage2);
    } else {
      forwardedRef.current = stage2;
    }
  };
  React$2.useLayoutEffect(() => {
    stage.current = new Konva.Stage({
      width: props.width,
      height: props.height,
      container: container.current
    });
    _setRef(stage.current);
    fiberRef.current = KonvaRenderer.createContainer(stage.current, constantsExports.LegacyRoot, false, null);
    KonvaRenderer.updateContainer(React$2.createElement(Bridge, {}, props.children), fiberRef.current);
    return () => {
      if (!Konva.isBrowser) {
        return;
      }
      _setRef(null);
      KonvaRenderer.updateContainer(null, fiberRef.current, null);
      stage.current.destroy();
    };
  }, []);
  React$2.useLayoutEffect(() => {
    _setRef(stage.current);
    applyNodeProps(stage.current, props, oldProps);
    KonvaRenderer.updateContainer(React$2.createElement(Bridge, {}, props.children), fiberRef.current, null);
  });
  return React$2.createElement("div", {
    ref: container,
    id: props.id,
    accessKey: props.accessKey,
    className: props.className,
    role: props.role,
    style: props.style,
    tabIndex: props.tabIndex,
    title: props.title
  });
};
const Layer2 = "Layer";
const Rect2 = "Rect";
const Circle2 = "Circle";
const Line2 = "Line";
const Transformer2 = "Transformer";
const KonvaRenderer = ReactFiberReconciler(HostConfig);
KonvaRenderer.injectIntoDevTools({
  // @ts-ignore
  findHostInstanceByFiber: () => null,
  bundleType: 0,
  version: React$2.version,
  rendererPackageName: "react-konva"
});
const Stage = React$2.forwardRef((props, ref) => {
  return React$2.createElement(FiberProvider, {}, React$2.createElement(StageWrap, { ...props, forwardedRef: ref }));
});
const GRID_SIZE = 50;
const Grid = ({ scale, stagePos, width, height }) => {
  const startX = Math.floor(-stagePos.x / scale / GRID_SIZE) * GRID_SIZE;
  const startY = Math.floor(-stagePos.y / scale / GRID_SIZE) * GRID_SIZE;
  const endX = Math.ceil((-stagePos.x + width) / scale / GRID_SIZE) * GRID_SIZE;
  const endY = Math.ceil((-stagePos.y + height) / scale / GRID_SIZE) * GRID_SIZE;
  const lines = [];
  for (let x2 = startX; x2 <= endX; x2 += GRID_SIZE) {
    lines.push(
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Line2,
        {
          points: [x2, startY, x2, endY],
          stroke: "#ddd",
          strokeWidth: 1 / scale,
          listening: false
        },
        `v${x2}`
      )
    );
  }
  for (let y2 = startY; y2 <= endY; y2 += GRID_SIZE) {
    lines.push(
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Line2,
        {
          points: [startX, y2, endX, y2],
          stroke: "#ddd",
          strokeWidth: 1 / scale,
          listening: false
        },
        `h${y2}`
      )
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: lines });
};
const __vite_import_meta_env__$1 = {};
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, getInitialState, subscribe, destroy };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var withSelector = { exports: {} };
var withSelector_production = {};
var shim$2 = { exports: {} };
var useSyncExternalStoreShim_production = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React$1 = reactExports;
function is$1(x2, y2) {
  return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
}
var objectIs$1 = "function" === typeof Object.is ? Object.is : is$1, useState = React$1.useState, useEffect$1 = React$1.useEffect, useLayoutEffect = React$1.useLayoutEffect, useDebugValue$2 = React$1.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
  var value = getSnapshot(), _useState = useState({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
  useLayoutEffect(
    function() {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst });
    },
    [subscribe, value, getSnapshot]
  );
  useEffect$1(
    function() {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      return subscribe(function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      });
    },
    [subscribe]
  );
  useDebugValue$2(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs$1(inst, nextValue);
  } catch (error2) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
  return getSnapshot();
}
var shim$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React$1.useSyncExternalStore ? React$1.useSyncExternalStore : shim$1;
{
  shim$2.exports = useSyncExternalStoreShim_production;
}
var shimExports = shim$2.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React = reactExports, shim = shimExports;
function is(x2, y2) {
  return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
}
var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue$1 = React.useDebugValue;
withSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  var instRef = useRef(null);
  if (null === instRef.current) {
    var inst = { hasValue: false, value: null };
    instRef.current = inst;
  } else inst = instRef.current;
  instRef = useMemo(
    function() {
      function memoizedSelector(nextSnapshot) {
        if (!hasMemo) {
          hasMemo = true;
          memoizedSnapshot = nextSnapshot;
          nextSnapshot = selector(nextSnapshot);
          if (void 0 !== isEqual && inst.hasValue) {
            var currentSelection = inst.value;
            if (isEqual(currentSelection, nextSnapshot))
              return memoizedSelection = currentSelection;
          }
          return memoizedSelection = nextSnapshot;
        }
        currentSelection = memoizedSelection;
        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
        var nextSelection = selector(nextSnapshot);
        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
          return memoizedSnapshot = nextSnapshot, currentSelection;
        memoizedSnapshot = nextSnapshot;
        return memoizedSelection = nextSelection;
      }
      var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
      return [
        function() {
          return memoizedSelector(getSnapshot());
        },
        null === maybeGetServerSnapshot ? void 0 : function() {
          return memoizedSelector(maybeGetServerSnapshot());
        }
      ];
    },
    [getSnapshot, getServerSnapshot, selector, isEqual]
  );
  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
  useEffect(
    function() {
      inst.hasValue = true;
      inst.value = value;
    },
    [value]
  );
  useDebugValue$1(value);
  return value;
};
{
  withSelector.exports = withSelector_production;
}
var withSelectorExports = withSelector.exports;
const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
const __vite_import_meta_env__ = {};
const { useDebugValue } = React$2;
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
let didWarnAboutEqualityFn = false;
const identity = (arg) => arg;
function useStore$1(api, selector = identity, equalityFn) {
  if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getInitialState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore$1(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
const useStore = create((set, get) => ({
  shapes: [],
  selectedIds: [],
  tool: "select",
  past: [],
  future: [],
  exportRequested: false,
  setExportRequested: (val) => set({ exportRequested: val }),
  saveSnapshot: () => {
    set((state) => ({
      past: [...state.past, state.shapes],
      future: []
    }));
  },
  setTool: (tool) => set({ tool, selectedIds: [] }),
  addShape: (shape) => {
    get().saveSnapshot();
    set((state) => ({ shapes: [...state.shapes, shape] }));
  },
  updateShape: (id2, attrs) => {
    set((state) => ({
      shapes: state.shapes.map((s) => s.id === id2 ? { ...s, ...attrs } : s)
    }));
  },
  // Specialized wrapper for updates that should be recorded
  // We'll trust the component to call saveSnapshot() before "major" changes if we expose it,
  // OR we refine the API. 
  // Let's change addShape and updateShape to logic below.
  deleteShapes: (ids) => {
    get().saveSnapshot();
    set((state) => ({
      shapes: state.shapes.filter((s) => !ids.includes(s.id)),
      selectedIds: state.selectedIds.filter((id2) => !ids.includes(id2))
    }));
  },
  selectShape: (id2, multi = false) => set((state) => {
    if (id2 === null) return { selectedIds: [] };
    if (multi) {
      return {
        selectedIds: state.selectedIds.includes(id2) ? state.selectedIds.filter((i) => i !== id2) : [...state.selectedIds, id2]
      };
    }
    return { selectedIds: [id2] };
  }),
  undo: () => set((state) => {
    if (state.past.length === 0) return {};
    const previous = state.past[state.past.length - 1];
    const newPast = state.past.slice(0, state.past.length - 1);
    return {
      shapes: previous,
      past: newPast,
      future: [state.shapes, ...state.future],
      selectedIds: []
      // Deselect on undo to avoid ghost selections
    };
  }),
  redo: () => set((state) => {
    if (state.future.length === 0) return {};
    const next = state.future[0];
    const newFuture = state.future.slice(1);
    return {
      shapes: next,
      past: [...state.past, state.shapes],
      future: newFuture,
      selectedIds: []
    };
  })
}));
const CanvasArea = () => {
  const { shapes, tool, addShape, updateShape, selectShape, selectedIds, saveSnapshot, exportRequested, setExportRequested } = useStore();
  const stageRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (exportRequested && stageRef.current) {
      const uri = stageRef.current.toDataURL({ pixelRatio: 2 });
      window.api.saveImage(uri).finally(() => {
        setExportRequested(false);
      });
    }
  }, [exportRequested, setExportRequested]);
  const [scale, setScale] = reactExports.useState(1);
  const [position, setPosition] = reactExports.useState({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = reactExports.useState(false);
  const [currentShapeId, setCurrentShapeId] = reactExports.useState(null);
  const handleWheel = (e) => {
    e.evt.preventDefault();
    const stage = stageRef.current;
    if (!stage) return;
    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();
    if (!pointer) return;
    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale
    };
    let newScale = e.evt.deltaY > 0 ? oldScale * 0.9 : oldScale * 1.1;
    newScale = Math.max(0.1, Math.min(newScale, 10));
    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale
    };
    setScale(newScale);
    setPosition(newPos);
  };
  const getStagePos = (stage) => {
    const pointer = stage.getPointerPosition();
    if (!pointer) return { x: 0, y: 0 };
    const scale2 = stage.scaleX();
    return {
      x: (pointer.x - stage.x()) / scale2,
      y: (pointer.y - stage.y()) / scale2
    };
  };
  const handleMouseDown = (e) => {
    if (tool === "select" || tool === "pan") return;
    const stage = e.target.getStage();
    if (!stage) return;
    const pos = getStagePos(stage);
    const id2 = crypto.randomUUID();
    setIsDrawing(true);
    setCurrentShapeId(id2);
    const baseProps = {
      id: id2,
      x: pos.x,
      y: pos.y,
      stroke: "black",
      strokeWidth: 2
    };
    if (tool === "rect") {
      addShape({ ...baseProps, type: "rect", width: 0, height: 0 });
    } else if (tool === "circle") {
      addShape({ ...baseProps, type: "circle", radius: 0 });
    } else if (tool === "line") {
      addShape({ ...baseProps, type: "line", points: [0, 0] });
    }
  };
  const handleMouseMove = (e) => {
    if (!isDrawing || !currentShapeId) return;
    const stage = e.target.getStage();
    if (!stage) return;
    const pos = getStagePos(stage);
    const shape = shapes.find((s) => s.id === currentShapeId);
    if (!shape) return;
    if (shape.type === "rect") {
      updateShape(currentShapeId, {
        width: pos.x - shape.x,
        height: pos.y - shape.y
      });
    } else if (shape.type === "circle") {
      const dx = pos.x - shape.x;
      const dy = pos.y - shape.y;
      const radius = Math.sqrt(dx * dx + dy * dy);
      updateShape(currentShapeId, { radius });
    } else if (shape.type === "line") {
      updateShape(currentShapeId, {
        points: [0, 0, pos.x - shape.x, pos.y - shape.y]
      });
    }
  };
  const handleMouseUp = () => {
    setIsDrawing(false);
    setCurrentShapeId(null);
  };
  const renderShape = (shape) => {
    const isSelected = selectedIds.includes(shape.id);
    const commonProps = {
      key: shape.id,
      id: shape.id,
      x: shape.x,
      y: shape.y,
      stroke: isSelected ? "blue" : shape.stroke,
      strokeWidth: shape.strokeWidth,
      draggable: tool === "select",
      rotation: shape.rotation || 0,
      onClick: (e) => {
        if (tool === "select") {
          e.cancelBubble = true;
          selectShape(shape.id, e.evt.shiftKey);
        }
      },
      onDragStart: () => {
        saveSnapshot();
      },
      onDragEnd: (e) => {
        updateShape(shape.id, {
          x: e.target.x(),
          y: e.target.y()
        });
      }
    };
    switch (shape.type) {
      case "rect":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Rect2, { ...commonProps, width: shape.width, height: shape.height });
      case "circle":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Circle2, { ...commonProps, radius: shape.radius });
      case "line":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Line2, { ...commonProps, points: shape.points, closed: false });
      default:
        return null;
    }
  };
  reactExports.useEffect(() => {
    const handleResize = () => {
      if (stageRef.current) ;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const trRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (stageRef.current && trRef.current) {
      const selectedId = selectedIds[0];
      if (selectedId) {
        const selectedNode = stageRef.current.findOne("#" + selectedId);
        if (selectedNode) {
          trRef.current.nodes([selectedNode]);
          trRef.current.getLayer()?.batchDraw();
        } else {
          trRef.current.nodes([]);
        }
      } else {
        trRef.current.nodes([]);
      }
    }
  }, [selectedIds, shapes]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "canvas-container", style: { width: "100%", height: "100vh", overflow: "hidden", background: "#f0f0f0" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Stage,
    {
      ref: stageRef,
      width: window.innerWidth,
      height: window.innerHeight,
      onWheel: handleWheel,
      scaleX: scale,
      scaleY: scale,
      x: position.x,
      y: position.y,
      draggable: tool === "select" || tool === "pan",
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onDragEnd: (e) => {
        if (e.target === stageRef.current) {
          setPosition({ x: e.target.x(), y: e.target.y() });
        }
      },
      onClick: (e) => {
        if (e.target === stageRef.current && tool === "select") {
          selectShape(null);
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Layer2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { scale, stagePos: position, width: window.innerWidth, height: window.innerHeight }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Layer2, { children: [
          shapes.map(renderShape),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Transformer2,
            {
              ref: trRef,
              boundBoxFunc: (oldBox, newBox) => {
                if (newBox.width < 5 || newBox.height < 5) {
                  return oldBox;
                }
                return newBox;
              },
              onTransformEnd: () => {
                const node = trRef.current?.nodes()[0];
                if (node) {
                  const id2 = node.id();
                  const scaleX = node.scaleX();
                  const scaleY = node.scaleY();
                  node.scaleX(1);
                  node.scaleY(1);
                  const shape = shapes.find((s) => s.id === id2);
                  if (shape) {
                    saveSnapshot();
                    const updateAttrs = {
                      x: node.x(),
                      y: node.y(),
                      rotation: node.rotation()
                    };
                    if (shape.type === "rect") {
                      updateAttrs.width = Math.max(5, node.width() * scaleX);
                      updateAttrs.height = Math.max(5, node.height() * scaleY);
                    } else if (shape.type === "circle") {
                      updateAttrs.radius = Math.max(5, node.radius() * scaleX);
                    }
                    updateShape(id2, updateAttrs);
                  }
                }
              },
              onTransformStart: () => {
                saveSnapshot();
              }
            }
          )
        ] })
      ]
    }
  ) });
};
const tools = [
  { id: "select", icon: "cursor", label: "Select" },
  { id: "pan", icon: "move", label: "Pan" },
  { id: "rect", icon: "square", label: "Rectangle" },
  { id: "circle", icon: "circle", label: "Circle" },
  { id: "line", icon: "minus", label: "Line" }
];
const Toolbar = () => {
  const { tool, setTool, undo, redo, shapes, setExportRequested } = useStore();
  const handleSave = async () => {
    const data = JSON.stringify({ shapes, version: 1 });
    await window.api.saveProject(data);
  };
  const handleLoad = async () => {
    const content = await window.api.loadProject();
    if (content) {
      const data = JSON.parse(content);
      useStore.setState({ shapes: data.shapes, past: [], future: [], selectedIds: [] });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 100,
    background: "white",
    padding: "8px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }, children: [
    tools.map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setTool(t2.id),
        title: t2.label,
        style: {
          padding: "8px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          background: tool === t2.id ? "#e0e0ff" : "white",
          cursor: "pointer",
          fontWeight: tool === t2.id ? "bold" : "normal"
        },
        children: t2.label
      },
      t2.id
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "1px", background: "#eee", margin: "4px 0" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: undo, title: "Undo (Ctrl+Z)", style: { padding: "8px", cursor: "pointer" }, children: "Undo" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: redo, title: "Redo (Ctrl+Y)", style: { padding: "8px", cursor: "pointer" }, children: "Redo" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "1px", background: "#eee", margin: "4px 0" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSave, title: "Save Project", style: { padding: "8px", cursor: "pointer" }, children: "Save" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleLoad, title: "Load Project", style: { padding: "8px", cursor: "pointer" }, children: "Load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: "1px", background: "#eee", margin: "4px 0" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setExportRequested(true), title: "Export PNG", style: { padding: "8px", cursor: "pointer" }, children: "Export PNG" })
  ] });
};
function App() {
  const { undo, redo, deleteShapes, selectedIds } = useStore();
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        e.preventDefault();
        undo();
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === "y" || e.shiftKey && e.key === "z")) {
        e.preventDefault();
        redo();
      }
      if (e.key === "Delete" || e.key === "Backspace") {
        if (selectedIds.length > 0) {
          e.preventDefault();
          deleteShapes(selectedIds);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo, redo, deleteShapes, selectedIds]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-container", style: { position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toolbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CanvasArea, {})
  ] });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React$2.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);

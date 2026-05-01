var uf = { exports: {} }, Su = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vm;
function F1() {
  if (vm) return Su;
  vm = 1;
  var E = Symbol.for("react.transitional.element"), X = Symbol.for("react.fragment");
  function q(v, ll, B) {
    var yl = null;
    if (B !== void 0 && (yl = "" + B), ll.key !== void 0 && (yl = "" + ll.key), "key" in ll) {
      B = {};
      for (var Rl in ll)
        Rl !== "key" && (B[Rl] = ll[Rl]);
    } else B = ll;
    return ll = B.ref, {
      $$typeof: E,
      type: v,
      key: yl,
      ref: ll !== void 0 ? ll : null,
      props: B
    };
  }
  return Su.Fragment = X, Su.jsx = q, Su.jsxs = q, Su;
}
var hm;
function k1() {
  return hm || (hm = 1, uf.exports = F1()), uf.exports;
}
var Q = k1();
const I1 = ".react-widget-section{padding:2rem;font-family:Inter,system-ui,-apple-system,sans-serif;border-radius:12px;background:var(--config--main-color-background, #ffffff);color:var(--config--main-color-text, #1e1e2e);box-sizing:border-box;display:flex;flex-direction:column;gap:1.5rem}.react-widget-title{margin:0;font-size:1.5rem;font-weight:700;letter-spacing:-.015em;color:var(--config--main-color-brand, #2563eb)}.react-widget-description{margin:0;font-size:.95rem;line-height:1.6;color:var(--config--main-color-text-secondary, #6b7280)}.widget-controls{display:flex;gap:1rem;margin:1rem 0 0}.view-mode-selector{display:flex;gap:.5rem;background:var(--config--main-color-background-secondary, #f9fafb);padding:.25rem;border-radius:6px;border:1px solid var(--config--main-color-border, #e5e7eb)}.mode-button{padding:.5rem 1rem;background:transparent;border:none;border-radius:4px;cursor:pointer;font-size:.85rem;font-weight:500;color:var(--config--main-color-text-secondary, #6b7280);transition:all .2s ease}.mode-button:hover{background:var(--config--main-color-background, #ffffff);color:var(--config--main-color-text, #1e1e2e)}.mode-button.active{background:var(--config--main-color-brand, #2563eb);color:#fff}.categories-container{display:flex;flex-direction:column;gap:1rem}.selected-category-info{padding:1rem;background:var(--config--main-color-background-secondary, #f0f9ff);border-left:4px solid var(--config--main-color-brand, #2563eb);border-radius:4px;margin-top:1rem}.selected-category-info p{margin:0;font-size:.9rem;color:var(--config--main-color-text, #1e1e2e)}@media(max-width:768px){.react-widget-section{padding:1rem}.react-widget-title{font-size:1.25rem}.view-mode-selector{flex-wrap:wrap}.mode-button{padding:.4rem .8rem;font-size:.8rem}}";
var nf = { exports: {} }, pu = {}, cf = { exports: {} }, ff = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gm;
function P1() {
  return gm || (gm = 1, (function(E) {
    function X(r, _) {
      var R = r.length;
      r.push(_);
      l: for (; 0 < R; ) {
        var el = R - 1 >>> 1, cl = r[el];
        if (0 < ll(cl, _))
          r[el] = _, r[R] = cl, R = el;
        else break l;
      }
    }
    function q(r) {
      return r.length === 0 ? null : r[0];
    }
    function v(r) {
      if (r.length === 0) return null;
      var _ = r[0], R = r.pop();
      if (R !== _) {
        r[0] = R;
        l: for (var el = 0, cl = r.length, d = cl >>> 1; el < d; ) {
          var A = 2 * (el + 1) - 1, T = r[A], M = A + 1, j = r[M];
          if (0 > ll(T, R))
            M < cl && 0 > ll(j, T) ? (r[el] = j, r[M] = R, el = M) : (r[el] = T, r[A] = R, el = A);
          else if (M < cl && 0 > ll(j, R))
            r[el] = j, r[M] = R, el = M;
          else break l;
        }
      }
      return _;
    }
    function ll(r, _) {
      var R = r.sortIndex - _.sortIndex;
      return R !== 0 ? R : r.id - _.id;
    }
    if (E.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      E.unstable_now = function() {
        return B.now();
      };
    } else {
      var yl = Date, Rl = yl.now();
      E.unstable_now = function() {
        return yl.now() - Rl;
      };
    }
    var U = [], z = [], I = 1, H = null, sl = 3, Wl = !1, jl = !1, Bl = !1, Dt = !1, $l = typeof setTimeout == "function" ? setTimeout : null, Wt = typeof clearTimeout == "function" ? clearTimeout : null, Nl = typeof setImmediate < "u" ? setImmediate : null;
    function it(r) {
      for (var _ = q(z); _ !== null; ) {
        if (_.callback === null) v(z);
        else if (_.startTime <= r)
          v(z), _.sortIndex = _.expirationTime, X(U, _);
        else break;
        _ = q(z);
      }
    }
    function At(r) {
      if (Bl = !1, it(r), !jl)
        if (q(U) !== null)
          jl = !0, xl || (xl = !0, Xl());
        else {
          var _ = q(z);
          _ !== null && bt(At, _.startTime - r);
        }
    }
    var xl = !1, w = -1, Gl = 5, zt = -1;
    function Qa() {
      return Dt ? !0 : !(E.unstable_now() - zt < Gl);
    }
    function Et() {
      if (Dt = !1, xl) {
        var r = E.unstable_now();
        zt = r;
        var _ = !0;
        try {
          l: {
            jl = !1, Bl && (Bl = !1, Wt(w), w = -1), Wl = !0;
            var R = sl;
            try {
              t: {
                for (it(r), H = q(U); H !== null && !(H.expirationTime > r && Qa()); ) {
                  var el = H.callback;
                  if (typeof el == "function") {
                    H.callback = null, sl = H.priorityLevel;
                    var cl = el(
                      H.expirationTime <= r
                    );
                    if (r = E.unstable_now(), typeof cl == "function") {
                      H.callback = cl, it(r), _ = !0;
                      break t;
                    }
                    H === q(U) && v(U), it(r);
                  } else v(U);
                  H = q(U);
                }
                if (H !== null) _ = !0;
                else {
                  var d = q(z);
                  d !== null && bt(
                    At,
                    d.startTime - r
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              H = null, sl = R, Wl = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Xl() : xl = !1;
        }
      }
    }
    var Xl;
    if (typeof Nl == "function")
      Xl = function() {
        Nl(Et);
      };
    else if (typeof MessageChannel < "u") {
      var pa = new MessageChannel(), Ot = pa.port2;
      pa.port1.onmessage = Et, Xl = function() {
        Ot.postMessage(null);
      };
    } else
      Xl = function() {
        $l(Et, 0);
      };
    function bt(r, _) {
      w = $l(function() {
        r(E.unstable_now());
      }, _);
    }
    E.unstable_IdlePriority = 5, E.unstable_ImmediatePriority = 1, E.unstable_LowPriority = 4, E.unstable_NormalPriority = 3, E.unstable_Profiling = null, E.unstable_UserBlockingPriority = 2, E.unstable_cancelCallback = function(r) {
      r.callback = null;
    }, E.unstable_forceFrameRate = function(r) {
      0 > r || 125 < r ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Gl = 0 < r ? Math.floor(1e3 / r) : 5;
    }, E.unstable_getCurrentPriorityLevel = function() {
      return sl;
    }, E.unstable_next = function(r) {
      switch (sl) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = sl;
      }
      var R = sl;
      sl = _;
      try {
        return r();
      } finally {
        sl = R;
      }
    }, E.unstable_requestPaint = function() {
      Dt = !0;
    }, E.unstable_runWithPriority = function(r, _) {
      switch (r) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          r = 3;
      }
      var R = sl;
      sl = r;
      try {
        return _();
      } finally {
        sl = R;
      }
    }, E.unstable_scheduleCallback = function(r, _, R) {
      var el = E.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? el + R : el) : R = el, r) {
        case 1:
          var cl = -1;
          break;
        case 2:
          cl = 250;
          break;
        case 5:
          cl = 1073741823;
          break;
        case 4:
          cl = 1e4;
          break;
        default:
          cl = 5e3;
      }
      return cl = R + cl, r = {
        id: I++,
        callback: _,
        priorityLevel: r,
        startTime: R,
        expirationTime: cl,
        sortIndex: -1
      }, R > el ? (r.sortIndex = R, X(z, r), q(U) === null && r === q(z) && (Bl ? (Wt(w), w = -1) : Bl = !0, bt(At, R - el))) : (r.sortIndex = cl, X(U, r), jl || Wl || (jl = !0, xl || (xl = !0, Xl()))), r;
    }, E.unstable_shouldYield = Qa, E.unstable_wrapCallback = function(r) {
      var _ = sl;
      return function() {
        var R = sl;
        sl = _;
        try {
          return r.apply(this, arguments);
        } finally {
          sl = R;
        }
      };
    };
  })(ff)), ff;
}
var bm;
function ly() {
  return bm || (bm = 1, cf.exports = P1()), cf.exports;
}
var of = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm;
function ty() {
  if (rm) return Y;
  rm = 1;
  var E = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), ll = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), yl = Symbol.for("react.context"), Rl = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), sl = Symbol.iterator;
  function Wl(d) {
    return d === null || typeof d != "object" ? null : (d = sl && d[sl] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var jl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Bl = Object.assign, Dt = {};
  function $l(d, A, T) {
    this.props = d, this.context = A, this.refs = Dt, this.updater = T || jl;
  }
  $l.prototype.isReactComponent = {}, $l.prototype.setState = function(d, A) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, A, "setState");
  }, $l.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function Wt() {
  }
  Wt.prototype = $l.prototype;
  function Nl(d, A, T) {
    this.props = d, this.context = A, this.refs = Dt, this.updater = T || jl;
  }
  var it = Nl.prototype = new Wt();
  it.constructor = Nl, Bl(it, $l.prototype), it.isPureReactComponent = !0;
  var At = Array.isArray;
  function xl() {
  }
  var w = { H: null, A: null, T: null, S: null }, Gl = Object.prototype.hasOwnProperty;
  function zt(d, A, T) {
    var M = T.ref;
    return {
      $$typeof: E,
      type: d,
      key: A,
      ref: M !== void 0 ? M : null,
      props: T
    };
  }
  function Qa(d, A) {
    return zt(d.type, A, d.props);
  }
  function Et(d) {
    return typeof d == "object" && d !== null && d.$$typeof === E;
  }
  function Xl(d) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(T) {
      return A[T];
    });
  }
  var pa = /\/+/g;
  function Ot(d, A) {
    return typeof d == "object" && d !== null && d.key != null ? Xl("" + d.key) : A.toString(36);
  }
  function bt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(xl, xl) : (d.status = "pending", d.then(
          function(A) {
            d.status === "pending" && (d.status = "fulfilled", d.value = A);
          },
          function(A) {
            d.status === "pending" && (d.status = "rejected", d.reason = A);
          }
        )), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function r(d, A, T, M, j) {
    var Z = typeof d;
    (Z === "undefined" || Z === "boolean") && (d = null);
    var P = !1;
    if (d === null) P = !0;
    else
      switch (Z) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case E:
            case X:
              P = !0;
              break;
            case I:
              return P = d._init, r(
                P(d._payload),
                A,
                T,
                M,
                j
              );
          }
      }
    if (P)
      return j = j(d), P = M === "" ? "." + Ot(d, 0) : M, At(j) ? (T = "", P != null && (T = P.replace(pa, "$&/") + "/"), r(j, A, T, "", function(Ce) {
        return Ce;
      })) : j != null && (Et(j) && (j = Qa(
        j,
        T + (j.key == null || d && d.key === j.key ? "" : ("" + j.key).replace(
          pa,
          "$&/"
        ) + "/") + P
      )), A.push(j)), 1;
    P = 0;
    var ql = M === "" ? "." : M + ":";
    if (At(d))
      for (var gl = 0; gl < d.length; gl++)
        M = d[gl], Z = ql + Ot(M, gl), P += r(
          M,
          A,
          T,
          Z,
          j
        );
    else if (gl = Wl(d), typeof gl == "function")
      for (d = gl.call(d), gl = 0; !(M = d.next()).done; )
        M = M.value, Z = ql + Ot(M, gl++), P += r(
          M,
          A,
          T,
          Z,
          j
        );
    else if (Z === "object") {
      if (typeof d.then == "function")
        return r(
          bt(d),
          A,
          T,
          M,
          j
        );
      throw A = String(d), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function _(d, A, T) {
    if (d == null) return d;
    var M = [], j = 0;
    return r(d, M, "", "", function(Z) {
      return A.call(T, Z, j++);
    }), M;
  }
  function R(d) {
    if (d._status === -1) {
      var A = d._result;
      A = A(), A.then(
        function(T) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = T);
        },
        function(T) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = T);
        }
      ), d._status === -1 && (d._status = 0, d._result = A);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var el = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  }, cl = {
    map: _,
    forEach: function(d, A, T) {
      _(
        d,
        function() {
          A.apply(this, arguments);
        },
        T
      );
    },
    count: function(d) {
      var A = 0;
      return _(d, function() {
        A++;
      }), A;
    },
    toArray: function(d) {
      return _(d, function(A) {
        return A;
      }) || [];
    },
    only: function(d) {
      if (!Et(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return Y.Activity = H, Y.Children = cl, Y.Component = $l, Y.Fragment = q, Y.Profiler = ll, Y.PureComponent = Nl, Y.StrictMode = v, Y.Suspense = U, Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, Y.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return w.H.useMemoCache(d);
    }
  }, Y.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, Y.cacheSignal = function() {
    return null;
  }, Y.cloneElement = function(d, A, T) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var M = Bl({}, d.props), j = d.key;
    if (A != null)
      for (Z in A.key !== void 0 && (j = "" + A.key), A)
        !Gl.call(A, Z) || Z === "key" || Z === "__self" || Z === "__source" || Z === "ref" && A.ref === void 0 || (M[Z] = A[Z]);
    var Z = arguments.length - 2;
    if (Z === 1) M.children = T;
    else if (1 < Z) {
      for (var P = Array(Z), ql = 0; ql < Z; ql++)
        P[ql] = arguments[ql + 2];
      M.children = P;
    }
    return zt(d.type, j, M);
  }, Y.createContext = function(d) {
    return d = {
      $$typeof: yl,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: B,
      _context: d
    }, d;
  }, Y.createElement = function(d, A, T) {
    var M, j = {}, Z = null;
    if (A != null)
      for (M in A.key !== void 0 && (Z = "" + A.key), A)
        Gl.call(A, M) && M !== "key" && M !== "__self" && M !== "__source" && (j[M] = A[M]);
    var P = arguments.length - 2;
    if (P === 1) j.children = T;
    else if (1 < P) {
      for (var ql = Array(P), gl = 0; gl < P; gl++)
        ql[gl] = arguments[gl + 2];
      j.children = ql;
    }
    if (d && d.defaultProps)
      for (M in P = d.defaultProps, P)
        j[M] === void 0 && (j[M] = P[M]);
    return zt(d, Z, j);
  }, Y.createRef = function() {
    return { current: null };
  }, Y.forwardRef = function(d) {
    return { $$typeof: Rl, render: d };
  }, Y.isValidElement = Et, Y.lazy = function(d) {
    return {
      $$typeof: I,
      _payload: { _status: -1, _result: d },
      _init: R
    };
  }, Y.memo = function(d, A) {
    return {
      $$typeof: z,
      type: d,
      compare: A === void 0 ? null : A
    };
  }, Y.startTransition = function(d) {
    var A = w.T, T = {};
    w.T = T;
    try {
      var M = d(), j = w.S;
      j !== null && j(T, M), typeof M == "object" && M !== null && typeof M.then == "function" && M.then(xl, el);
    } catch (Z) {
      el(Z);
    } finally {
      A !== null && T.types !== null && (A.types = T.types), w.T = A;
    }
  }, Y.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, Y.use = function(d) {
    return w.H.use(d);
  }, Y.useActionState = function(d, A, T) {
    return w.H.useActionState(d, A, T);
  }, Y.useCallback = function(d, A) {
    return w.H.useCallback(d, A);
  }, Y.useContext = function(d) {
    return w.H.useContext(d);
  }, Y.useDebugValue = function() {
  }, Y.useDeferredValue = function(d, A) {
    return w.H.useDeferredValue(d, A);
  }, Y.useEffect = function(d, A) {
    return w.H.useEffect(d, A);
  }, Y.useEffectEvent = function(d) {
    return w.H.useEffectEvent(d);
  }, Y.useId = function() {
    return w.H.useId();
  }, Y.useImperativeHandle = function(d, A, T) {
    return w.H.useImperativeHandle(d, A, T);
  }, Y.useInsertionEffect = function(d, A) {
    return w.H.useInsertionEffect(d, A);
  }, Y.useLayoutEffect = function(d, A) {
    return w.H.useLayoutEffect(d, A);
  }, Y.useMemo = function(d, A) {
    return w.H.useMemo(d, A);
  }, Y.useOptimistic = function(d, A) {
    return w.H.useOptimistic(d, A);
  }, Y.useReducer = function(d, A, T) {
    return w.H.useReducer(d, A, T);
  }, Y.useRef = function(d) {
    return w.H.useRef(d);
  }, Y.useState = function(d) {
    return w.H.useState(d);
  }, Y.useSyncExternalStore = function(d, A, T) {
    return w.H.useSyncExternalStore(
      d,
      A,
      T
    );
  }, Y.useTransition = function() {
    return w.H.useTransition();
  }, Y.version = "19.2.5", Y;
}
var Sm;
function sf() {
  return Sm || (Sm = 1, of.exports = ty()), of.exports;
}
var df = { exports: {} }, Hl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pm;
function ay() {
  if (pm) return Hl;
  pm = 1;
  var E = sf();
  function X(U) {
    var z = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var I = 2; I < arguments.length; I++)
        z += "&args[]=" + encodeURIComponent(arguments[I]);
    }
    return "Minified React error #" + U + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function q() {
  }
  var v = {
    d: {
      f: q,
      r: function() {
        throw Error(X(522));
      },
      D: q,
      C: q,
      L: q,
      m: q,
      X: q,
      S: q,
      M: q
    },
    p: 0,
    findDOMNode: null
  }, ll = Symbol.for("react.portal");
  function B(U, z, I) {
    var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ll,
      key: H == null ? null : "" + H,
      children: U,
      containerInfo: z,
      implementation: I
    };
  }
  var yl = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Rl(U, z) {
    if (U === "font") return "";
    if (typeof z == "string")
      return z === "use-credentials" ? z : "";
  }
  return Hl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, Hl.createPortal = function(U, z) {
    var I = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
      throw Error(X(299));
    return B(U, z, null, I);
  }, Hl.flushSync = function(U) {
    var z = yl.T, I = v.p;
    try {
      if (yl.T = null, v.p = 2, U) return U();
    } finally {
      yl.T = z, v.p = I, v.d.f();
    }
  }, Hl.preconnect = function(U, z) {
    typeof U == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, v.d.C(U, z));
  }, Hl.prefetchDNS = function(U) {
    typeof U == "string" && v.d.D(U);
  }, Hl.preinit = function(U, z) {
    if (typeof U == "string" && z && typeof z.as == "string") {
      var I = z.as, H = Rl(I, z.crossOrigin), sl = typeof z.integrity == "string" ? z.integrity : void 0, Wl = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      I === "style" ? v.d.S(
        U,
        typeof z.precedence == "string" ? z.precedence : void 0,
        {
          crossOrigin: H,
          integrity: sl,
          fetchPriority: Wl
        }
      ) : I === "script" && v.d.X(U, {
        crossOrigin: H,
        integrity: sl,
        fetchPriority: Wl,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      });
    }
  }, Hl.preinitModule = function(U, z) {
    if (typeof U == "string")
      if (typeof z == "object" && z !== null) {
        if (z.as == null || z.as === "script") {
          var I = Rl(
            z.as,
            z.crossOrigin
          );
          v.d.M(U, {
            crossOrigin: I,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
            nonce: typeof z.nonce == "string" ? z.nonce : void 0
          });
        }
      } else z == null && v.d.M(U);
  }, Hl.preload = function(U, z) {
    if (typeof U == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var I = z.as, H = Rl(I, z.crossOrigin);
      v.d.L(U, I, {
        crossOrigin: H,
        integrity: typeof z.integrity == "string" ? z.integrity : void 0,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0,
        type: typeof z.type == "string" ? z.type : void 0,
        fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
        referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
        imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
        imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
        media: typeof z.media == "string" ? z.media : void 0
      });
    }
  }, Hl.preloadModule = function(U, z) {
    if (typeof U == "string")
      if (z) {
        var I = Rl(z.as, z.crossOrigin);
        v.d.m(U, {
          as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
          crossOrigin: I,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0
        });
      } else v.d.m(U);
  }, Hl.requestFormReset = function(U) {
    v.d.r(U);
  }, Hl.unstable_batchedUpdates = function(U, z) {
    return U(z);
  }, Hl.useFormState = function(U, z, I) {
    return yl.H.useFormState(U, z, I);
  }, Hl.useFormStatus = function() {
    return yl.H.useHostTransitionStatus();
  }, Hl.version = "19.2.5", Hl;
}
var Am;
function ey() {
  if (Am) return df.exports;
  Am = 1;
  function E() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (X) {
        console.error(X);
      }
  }
  return E(), df.exports = ay(), df.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zm;
function uy() {
  if (zm) return pu;
  zm = 1;
  var E = ly(), X = sf(), q = ey();
  function v(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ll(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function B(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function yl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Rl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(l) {
    if (B(l) !== l)
      throw Error(v(188));
  }
  function z(l) {
    var t = l.alternate;
    if (!t) {
      if (t = B(l), t === null) throw Error(v(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (e = u.return, e !== null) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return U(u), l;
          if (n === e) return U(u), t;
          n = n.sibling;
        }
        throw Error(v(188));
      }
      if (a.return !== e.return) a = u, e = n;
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === a) {
            i = !0, a = u, e = n;
            break;
          }
          if (c === e) {
            i = !0, e = u, a = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              i = !0, a = n, e = u;
              break;
            }
            if (c === e) {
              i = !0, e = n, a = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(v(189));
        }
      }
      if (a.alternate !== e) throw Error(v(190));
    }
    if (a.tag !== 3) throw Error(v(188));
    return a.stateNode.current === a ? l : t;
  }
  function I(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = I(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign, sl = Symbol.for("react.element"), Wl = Symbol.for("react.transitional.element"), jl = Symbol.for("react.portal"), Bl = Symbol.for("react.fragment"), Dt = Symbol.for("react.strict_mode"), $l = Symbol.for("react.profiler"), Wt = Symbol.for("react.consumer"), Nl = Symbol.for("react.context"), it = Symbol.for("react.forward_ref"), At = Symbol.for("react.suspense"), xl = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), Gl = Symbol.for("react.lazy"), zt = Symbol.for("react.activity"), Qa = Symbol.for("react.memo_cache_sentinel"), Et = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object" ? null : (l = Et && l[Et] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var pa = Symbol.for("react.client.reference");
  function Ot(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === pa ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Bl:
        return "Fragment";
      case $l:
        return "Profiler";
      case Dt:
        return "StrictMode";
      case At:
        return "Suspense";
      case xl:
        return "SuspenseList";
      case zt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case jl:
          return "Portal";
        case Nl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case it:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case w:
          return t = l.displayName || null, t !== null ? t : Ot(l.type) || "Memo";
        case Gl:
          t = l._payload, l = l._init;
          try {
            return Ot(l(t));
          } catch {
          }
      }
    return null;
  }
  var bt = Array.isArray, r = X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, el = [], cl = -1;
  function d(l) {
    return { current: l };
  }
  function A(l) {
    0 > cl || (l.current = el[cl], el[cl] = null, cl--);
  }
  function T(l, t) {
    cl++, el[cl] = l.current, l.current = t;
  }
  var M = d(null), j = d(null), Z = d(null), P = d(null);
  function ql(l, t) {
    switch (T(Z, t), T(j, l), T(M, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? js(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = js(t), l = xs(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    A(M), T(M, l);
  }
  function gl() {
    A(M), A(j), A(Z);
  }
  function Ce(l) {
    l.memoizedState !== null && T(P, l);
    var t = M.current, a = xs(t, l.type);
    t !== a && (T(j, l), T(M, a));
  }
  function Au(l) {
    j.current === l && (A(M), A(j)), P.current === l && (A(P), hu._currentValue = R);
  }
  var Xn, mf;
  function Aa(l) {
    if (Xn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Xn = t && t[1] || "", mf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Xn + l + mf;
  }
  var Qn = !1;
  function Zn(l, t) {
    if (!l || Qn) return "";
    Qn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var p = function() {
                throw Error();
              };
              if (Object.defineProperty(p.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(p, []);
                } catch (g) {
                  var h = g;
                }
                Reflect.construct(l, [], p);
              } else {
                try {
                  p.call();
                } catch (g) {
                  h = g;
                }
                l.call(p.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                h = g;
              }
              (p = l()) && typeof p.catch == "function" && p.catch(function() {
              });
            }
          } catch (g) {
            if (g && h && typeof g.stack == "string")
              return [g.stack, h.stack];
          }
          return [null, null];
        }
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        e.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = e.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var f = i.split(`
`), y = c.split(`
`);
        for (u = e = 0; e < f.length && !f[e].includes("DetermineComponentFrameRoot"); )
          e++;
        for (; u < y.length && !y[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (e === f.length || u === y.length)
          for (e = f.length - 1, u = y.length - 1; 1 <= e && 0 <= u && f[e] !== y[u]; )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== y[u]) {
            if (e !== 1 || u !== 1)
              do
                if (e--, u--, 0 > u || f[e] !== y[u]) {
                  var b = `
` + f[e].replace(" at new ", " at ");
                  return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      Qn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Aa(a) : "";
  }
  function Mm(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Aa(l.type);
      case 16:
        return Aa("Lazy");
      case 13:
        return l.child !== t && t !== null ? Aa("Suspense Fallback") : Aa("Suspense");
      case 19:
        return Aa("SuspenseList");
      case 0:
      case 15:
        return Zn(l.type, !1);
      case 11:
        return Zn(l.type.render, !1);
      case 1:
        return Zn(l.type, !0);
      case 31:
        return Aa("Activity");
      default:
        return "";
    }
  }
  function yf(l) {
    try {
      var t = "", a = null;
      do
        t += Mm(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var Vn = Object.prototype.hasOwnProperty, Ln = E.unstable_scheduleCallback, Kn = E.unstable_cancelCallback, Dm = E.unstable_shouldYield, Om = E.unstable_requestPaint, Fl = E.unstable_now, Um = E.unstable_getCurrentPriorityLevel, vf = E.unstable_ImmediatePriority, hf = E.unstable_UserBlockingPriority, zu = E.unstable_NormalPriority, Nm = E.unstable_LowPriority, gf = E.unstable_IdlePriority, Hm = E.log, Rm = E.unstable_setDisableYieldValue, Me = null, kl = null;
  function $t(l) {
    if (typeof Hm == "function" && Rm(l), kl && typeof kl.setStrictMode == "function")
      try {
        kl.setStrictMode(Me, l);
      } catch {
      }
  }
  var Il = Math.clz32 ? Math.clz32 : Ym, Bm = Math.log, qm = Math.LN2;
  function Ym(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Bm(l) / qm | 0) | 0;
  }
  var Eu = 256, _u = 262144, Tu = 4194304;
  function za(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Cu(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = e & 134217727;
    return c !== 0 ? (e = c & ~n, e !== 0 ? u = za(e) : (i &= c, i !== 0 ? u = za(i) : a || (a = c & ~l, a !== 0 && (u = za(a))))) : (c = e & ~n, c !== 0 ? u = za(c) : i !== 0 ? u = za(i) : a || (a = e & ~l, a !== 0 && (u = za(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function De(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function jm(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bf() {
    var l = Tu;
    return Tu <<= 1, (Tu & 62914560) === 0 && (Tu = 4194304), l;
  }
  function Jn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Oe(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function xm(l, t, a, e, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, f = l.expirationTimes, y = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var b = 31 - Il(a), p = 1 << b;
      c[b] = 0, f[b] = -1;
      var h = y[b];
      if (h !== null)
        for (y[b] = null, b = 0; b < h.length; b++) {
          var g = h[b];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~p;
    }
    e !== 0 && rf(l, e, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function rf(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var e = 31 - Il(t);
    l.entangledLanes |= t, l.entanglements[e] = l.entanglements[e] | 1073741824 | a & 261930;
  }
  function Sf(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var e = 31 - Il(a), u = 1 << e;
      u & t | l[e] & t && (l[e] |= t), a &= ~u;
    }
  }
  function pf(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : wn(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Wn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Af() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : cm(l.type));
  }
  function zf(l, t) {
    var a = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2), Cl = "__reactFiber$" + Ft, Ql = "__reactProps$" + Ft, Za = "__reactContainer$" + Ft, $n = "__reactEvents$" + Ft, Gm = "__reactListeners$" + Ft, Xm = "__reactHandles$" + Ft, Ef = "__reactResources$" + Ft, Ue = "__reactMarker$" + Ft;
  function Fn(l) {
    delete l[Cl], delete l[Ql], delete l[$n], delete l[Gm], delete l[Xm];
  }
  function Va(l) {
    var t = l[Cl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Za] || a[Cl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Ks(l); l !== null; ) {
            if (a = l[Cl]) return a;
            l = Ks(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function La(l) {
    if (l = l[Cl] || l[Za]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ne(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(v(33));
  }
  function Ka(l) {
    var t = l[Ef];
    return t || (t = l[Ef] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function _l(l) {
    l[Ue] = !0;
  }
  var _f = /* @__PURE__ */ new Set(), Tf = {};
  function Ea(l, t) {
    Ja(l, t), Ja(l + "Capture", t);
  }
  function Ja(l, t) {
    for (Tf[l] = t, l = 0; l < t.length; l++)
      _f.add(t[l]);
  }
  var Qm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cf = {}, Mf = {};
  function Zm(l) {
    return Vn.call(Mf, l) ? !0 : Vn.call(Cf, l) ? !1 : Qm.test(l) ? Mf[l] = !0 : (Cf[l] = !0, !1);
  }
  function Mu(l, t, a) {
    if (Zm(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Du(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ut(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function ct(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Df(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Vm(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var u = e.get, n = e.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(i) {
          a = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function kn(l) {
    if (!l._valueTracker) {
      var t = Df(l) ? "checked" : "value";
      l._valueTracker = Vm(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Of(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), e = "";
    return l && (e = Df(l) ? l.checked ? "true" : "false" : l.value), l = e, l !== a ? (t.setValue(l), !0) : !1;
  }
  function Ou(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Lm = /[\n"\\]/g;
  function ft(l) {
    return l.replace(
      Lm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, a, e, u, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ct(t)) : l.value !== "" + ct(t) && (l.value = "" + ct(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, i, ct(t)) : a != null ? Pn(l, i, ct(a)) : e != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ct(c) : l.removeAttribute("name");
  }
  function Uf(l, t, a, e, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        kn(l);
        return;
      }
      a = a != null ? "" + ct(a) : "", t = t != null ? "" + ct(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    e = e ?? u, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = c ? l.checked : !!e, l.defaultChecked = !!e, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), kn(l);
  }
  function Pn(l, t, a) {
    t === "number" && Ou(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function wa(l, t, a, e) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++)
        t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        u = t.hasOwnProperty("$" + l[a].value), l[a].selected !== u && (l[a].selected = u), u && e && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ct(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          l[u].selected = !0, e && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nf(l, t, a) {
    if (t != null && (t = "" + ct(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ct(a) : "";
  }
  function Hf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(v(92));
        if (bt(e)) {
          if (1 < e.length) throw Error(v(93));
          e = e[0];
        }
        a = e;
      }
      a == null && (a = ""), t = a;
    }
    a = ct(t), l.defaultValue = a, e = l.textContent, e === a && e !== "" && e !== null && (l.value = e), kn(l);
  }
  function Wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Km = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Rf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Km.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Bf(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(v(62));
    if (l = l.style, a != null) {
      for (var e in a)
        !a.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "");
      for (var u in t)
        e = t[u], t.hasOwnProperty(u) && a[u] !== e && Rf(l, u, e);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Rf(l, n, t[n]);
  }
  function li(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jm = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), wm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Uu(l) {
    return wm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Nt() {
  }
  var ti = null;
  function ai(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var $a = null, Fa = null;
  function qf(l) {
    var t = La(l);
    if (t && (l = t.stateNode)) {
      var a = l[Ql] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (In(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + ft(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Ql] || null;
                if (!u) throw Error(v(90));
                In(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              e = a[t], e.form === l.form && Of(e);
          }
          break l;
        case "textarea":
          Nf(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && wa(l, !!a.multiple, t, !1);
      }
    }
  }
  var ei = !1;
  function Yf(l, t, a) {
    if (ei) return l(t, a);
    ei = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (ei = !1, ($a !== null || Fa !== null) && (rn(), $a && (t = $a, l = Fa, Fa = $a = null, qf(t), l)))
        for (t = 0; t < l.length; t++) qf(l[t]);
    }
  }
  function He(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Ql] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
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
        (e = !e.disabled) || (l = l.type, e = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !e;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        v(231, t, typeof a)
      );
    return a;
  }
  var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ui = !1;
  if (Ht)
    try {
      var Re = {};
      Object.defineProperty(Re, "passive", {
        get: function() {
          ui = !0;
        }
      }), window.addEventListener("test", Re, Re), window.removeEventListener("test", Re, Re);
    } catch {
      ui = !1;
    }
  var kt = null, ni = null, Nu = null;
  function jf() {
    if (Nu) return Nu;
    var l, t = ni, a = t.length, e, u = "value" in kt ? kt.value : kt.textContent, n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++) ;
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === u[n - e]; e++) ;
    return Nu = u.slice(l, 1 < e ? 1 - e : void 0);
  }
  function Hu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ru() {
    return !0;
  }
  function xf() {
    return !1;
  }
  function Zl(l) {
    function t(a, e, u, n, i) {
      this._reactName = a, this._targetInst = u, this.type = e, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ru : xf, this.isPropagationStopped = xf, this;
    }
    return H(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ru);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ru);
      },
      persist: function() {
      },
      isPersistent: Ru
    }), t;
  }
  var _a = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Bu = Zl(_a), Be = H({}, _a, { view: 0, detail: 0 }), Wm = Zl(Be), ii, ci, qe, qu = H({}, Be, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: oi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== qe && (qe && l.type === "mousemove" ? (ii = l.screenX - qe.screenX, ci = l.screenY - qe.screenY) : ci = ii = 0, qe = l), ii);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ci;
    }
  }), Gf = Zl(qu), $m = H({}, qu, { dataTransfer: 0 }), Fm = Zl($m), km = H({}, Be, { relatedTarget: 0 }), fi = Zl(km), Im = H({}, _a, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Pm = Zl(Im), l0 = H({}, _a, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), t0 = Zl(l0), a0 = H({}, _a, { data: 0 }), Xf = Zl(a0), e0 = {
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
  }, u0 = {
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
  }, n0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function i0(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = n0[l]) ? !!t[l] : !1;
  }
  function oi() {
    return i0;
  }
  var c0 = H({}, Be, {
    key: function(l) {
      if (l.key) {
        var t = e0[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Hu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? u0[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oi,
    charCode: function(l) {
      return l.type === "keypress" ? Hu(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Hu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), f0 = Zl(c0), o0 = H({}, qu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Qf = Zl(o0), d0 = H({}, Be, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oi
  }), s0 = Zl(d0), m0 = H({}, _a, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), y0 = Zl(m0), v0 = H({}, qu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), h0 = Zl(v0), g0 = H({}, _a, {
    newState: 0,
    oldState: 0
  }), b0 = Zl(g0), r0 = [9, 13, 27, 32], di = Ht && "CompositionEvent" in window, Ye = null;
  Ht && "documentMode" in document && (Ye = document.documentMode);
  var S0 = Ht && "TextEvent" in window && !Ye, Zf = Ht && (!di || Ye && 8 < Ye && 11 >= Ye), Vf = " ", Lf = !1;
  function Kf(l, t) {
    switch (l) {
      case "keyup":
        return r0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jf(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ka = !1;
  function p0(l, t) {
    switch (l) {
      case "compositionend":
        return Jf(t);
      case "keypress":
        return t.which !== 32 ? null : (Lf = !0, Vf);
      case "textInput":
        return l = t.data, l === Vf && Lf ? null : l;
      default:
        return null;
    }
  }
  function A0(l, t) {
    if (ka)
      return l === "compositionend" || !di && Kf(l, t) ? (l = jf(), Nu = ni = kt = null, ka = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var z0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function wf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!z0[l.type] : t === "textarea";
  }
  function Wf(l, t, a, e) {
    $a ? Fa ? Fa.push(e) : Fa = [e] : $a = e, t = Tn(t, "onChange"), 0 < t.length && (a = new Bu(
      "onChange",
      "change",
      null,
      a,
      e
    ), l.push({ event: a, listeners: t }));
  }
  var je = null, xe = null;
  function E0(l) {
    Ns(l, 0);
  }
  function Yu(l) {
    var t = Ne(l);
    if (Of(t)) return l;
  }
  function $f(l, t) {
    if (l === "change") return t;
  }
  var Ff = !1;
  if (Ht) {
    var si;
    if (Ht) {
      var mi = "oninput" in document;
      if (!mi) {
        var kf = document.createElement("div");
        kf.setAttribute("oninput", "return;"), mi = typeof kf.oninput == "function";
      }
      si = mi;
    } else si = !1;
    Ff = si && (!document.documentMode || 9 < document.documentMode);
  }
  function If() {
    je && (je.detachEvent("onpropertychange", Pf), xe = je = null);
  }
  function Pf(l) {
    if (l.propertyName === "value" && Yu(xe)) {
      var t = [];
      Wf(
        t,
        xe,
        l,
        ai(l)
      ), Yf(E0, t);
    }
  }
  function _0(l, t, a) {
    l === "focusin" ? (If(), je = t, xe = a, je.attachEvent("onpropertychange", Pf)) : l === "focusout" && If();
  }
  function T0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Yu(xe);
  }
  function C0(l, t) {
    if (l === "click") return Yu(t);
  }
  function M0(l, t) {
    if (l === "input" || l === "change")
      return Yu(t);
  }
  function D0(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Pl = typeof Object.is == "function" ? Object.is : D0;
  function Ge(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Vn.call(t, u) || !Pl(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function lo(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function to(l, t) {
    var a = lo(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (e = l + a.textContent.length, l <= t && e >= t)
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = lo(a);
    }
  }
  function ao(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ao(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function eo(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Ou(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ou(l.document);
    }
    return t;
  }
  function yi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var O0 = Ht && "documentMode" in document && 11 >= document.documentMode, Ia = null, vi = null, Xe = null, hi = !1;
  function uo(l, t, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    hi || Ia == null || Ia !== Ou(e) || (e = Ia, "selectionStart" in e && yi(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
      anchorNode: e.anchorNode,
      anchorOffset: e.anchorOffset,
      focusNode: e.focusNode,
      focusOffset: e.focusOffset
    }), Xe && Ge(Xe, e) || (Xe = e, e = Tn(vi, "onSelect"), 0 < e.length && (t = new Bu(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: e }), t.target = Ia)));
  }
  function Ta(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Pa = {
    animationend: Ta("Animation", "AnimationEnd"),
    animationiteration: Ta("Animation", "AnimationIteration"),
    animationstart: Ta("Animation", "AnimationStart"),
    transitionrun: Ta("Transition", "TransitionRun"),
    transitionstart: Ta("Transition", "TransitionStart"),
    transitioncancel: Ta("Transition", "TransitionCancel"),
    transitionend: Ta("Transition", "TransitionEnd")
  }, gi = {}, no = {};
  Ht && (no = document.createElement("div").style, "AnimationEvent" in window || (delete Pa.animationend.animation, delete Pa.animationiteration.animation, delete Pa.animationstart.animation), "TransitionEvent" in window || delete Pa.transitionend.transition);
  function Ca(l) {
    if (gi[l]) return gi[l];
    if (!Pa[l]) return l;
    var t = Pa[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in no)
        return gi[l] = t[a];
    return l;
  }
  var io = Ca("animationend"), co = Ca("animationiteration"), fo = Ca("animationstart"), U0 = Ca("transitionrun"), N0 = Ca("transitionstart"), H0 = Ca("transitioncancel"), oo = Ca("transitionend"), so = /* @__PURE__ */ new Map(), bi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bi.push("scrollEnd");
  function rt(l, t) {
    so.set(l, t), Ea(t, [l]);
  }
  var ju = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, ot = [], le = 0, ri = 0;
  function xu() {
    for (var l = le, t = ri = le = 0; t < l; ) {
      var a = ot[t];
      ot[t++] = null;
      var e = ot[t];
      ot[t++] = null;
      var u = ot[t];
      ot[t++] = null;
      var n = ot[t];
      if (ot[t++] = null, e !== null && u !== null) {
        var i = e.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), e.pending = u;
      }
      n !== 0 && mo(a, u, n);
    }
  }
  function Gu(l, t, a, e) {
    ot[le++] = l, ot[le++] = t, ot[le++] = a, ot[le++] = e, ri |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function Si(l, t, a, e) {
    return Gu(l, t, a, e), Xu(l);
  }
  function Ma(l, t) {
    return Gu(l, null, null, t), Xu(l);
  }
  function mo(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= a, e = n.alternate, e !== null && (e.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - Il(a), l = n.hiddenUpdates, e = l[u], e === null ? l[u] = [t] : e.push(t), t.lane = a | 536870912), n) : null;
  }
  function Xu(l) {
    if (50 < fu)
      throw fu = 0, Dc = null, Error(v(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var te = {};
  function R0(l, t, a, e) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(l, t, a, e) {
    return new R0(l, t, a, e);
  }
  function pi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Rt(l, t) {
    var a = l.alternate;
    return a === null ? (a = lt(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function yo(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Qu(l, t, a, e, u, n) {
    var i = 0;
    if (e = l, typeof l == "function") pi(l) && (i = 1);
    else if (typeof l == "string")
      i = x1(
        l,
        a,
        M.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case zt:
          return l = lt(31, a, t, u), l.elementType = zt, l.lanes = n, l;
        case Bl:
          return Da(a.children, u, n, t);
        case Dt:
          i = 8, u |= 24;
          break;
        case $l:
          return l = lt(12, a, t, u | 2), l.elementType = $l, l.lanes = n, l;
        case At:
          return l = lt(13, a, t, u), l.elementType = At, l.lanes = n, l;
        case xl:
          return l = lt(19, a, t, u), l.elementType = xl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Nl:
                i = 10;
                break l;
              case Wt:
                i = 9;
                break l;
              case it:
                i = 11;
                break l;
              case w:
                i = 14;
                break l;
              case Gl:
                i = 16, e = null;
                break l;
            }
          i = 29, a = Error(
            v(130, l === null ? "null" : typeof l, "")
          ), e = null;
      }
    return t = lt(i, a, t, u), t.elementType = l, t.type = e, t.lanes = n, t;
  }
  function Da(l, t, a, e) {
    return l = lt(7, l, e, t), l.lanes = a, l;
  }
  function Ai(l, t, a) {
    return l = lt(6, l, null, t), l.lanes = a, l;
  }
  function vo(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function zi(l, t, a) {
    return t = lt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var ho = /* @__PURE__ */ new WeakMap();
  function dt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = ho.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: yf(t)
      }, ho.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: yf(t)
    };
  }
  var ae = [], ee = 0, Zu = null, Qe = 0, st = [], mt = 0, It = null, _t = 1, Tt = "";
  function Bt(l, t) {
    ae[ee++] = Qe, ae[ee++] = Zu, Zu = l, Qe = t;
  }
  function go(l, t, a) {
    st[mt++] = _t, st[mt++] = Tt, st[mt++] = It, It = l;
    var e = _t;
    l = Tt;
    var u = 32 - Il(e) - 1;
    e &= ~(1 << u), a += 1;
    var n = 32 - Il(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (e & (1 << i) - 1).toString(32), e >>= i, u -= i, _t = 1 << 32 - Il(t) + u | a << u | e, Tt = n + l;
    } else
      _t = 1 << n | a << u | e, Tt = l;
  }
  function Ei(l) {
    l.return !== null && (Bt(l, 1), go(l, 1, 0));
  }
  function _i(l) {
    for (; l === Zu; )
      Zu = ae[--ee], ae[ee] = null, Qe = ae[--ee], ae[ee] = null;
    for (; l === It; )
      It = st[--mt], st[mt] = null, Tt = st[--mt], st[mt] = null, _t = st[--mt], st[mt] = null;
  }
  function bo(l, t) {
    st[mt++] = _t, st[mt++] = Tt, st[mt++] = It, _t = t.id, Tt = t.overflow, It = l;
  }
  var Ml = null, ol = null, W = !1, Pt = null, yt = !1, Ti = Error(v(519));
  function la(l) {
    var t = Error(
      v(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ze(dt(t, l)), Ti;
  }
  function ro(l) {
    var t = l.stateNode, a = l.type, e = l.memoizedProps;
    switch (t[Cl] = l, t[Ql] = e, a) {
      case "dialog":
        L("cancel", t), L("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        L("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < du.length; a++)
          L(du[a], t);
        break;
      case "source":
        L("error", t);
        break;
      case "img":
      case "image":
      case "link":
        L("error", t), L("load", t);
        break;
      case "details":
        L("toggle", t);
        break;
      case "input":
        L("invalid", t), Uf(
          t,
          e.value,
          e.defaultValue,
          e.checked,
          e.defaultChecked,
          e.type,
          e.name,
          !0
        );
        break;
      case "select":
        L("invalid", t);
        break;
      case "textarea":
        L("invalid", t), Hf(t, e.value, e.defaultValue, e.children);
    }
    a = e.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || e.suppressHydrationWarning === !0 || qs(t.textContent, a) ? (e.popover != null && (L("beforetoggle", t), L("toggle", t)), e.onScroll != null && L("scroll", t), e.onScrollEnd != null && L("scrollend", t), e.onClick != null && (t.onclick = Nt), t = !0) : t = !1, t || la(l, !0);
  }
  function So(l) {
    for (Ml = l.return; Ml; )
      switch (Ml.tag) {
        case 5:
        case 31:
        case 13:
          yt = !1;
          return;
        case 27:
        case 3:
          yt = !0;
          return;
        default:
          Ml = Ml.return;
      }
  }
  function ue(l) {
    if (l !== Ml) return !1;
    if (!W) return So(l), W = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Vc(l.type, l.memoizedProps)), a = !a), a && ol && la(l), So(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(317));
      ol = Ls(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(317));
      ol = Ls(l);
    } else
      t === 27 ? (t = ol, va(l.type) ? (l = Wc, Wc = null, ol = l) : ol = t) : ol = Ml ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Oa() {
    ol = Ml = null, W = !1;
  }
  function Ci() {
    var l = Pt;
    return l !== null && (Jl === null ? Jl = l : Jl.push.apply(
      Jl,
      l
    ), Pt = null), l;
  }
  function Ze(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Mi = d(null), Ua = null, qt = null;
  function ta(l, t, a) {
    T(Mi, t._currentValue), t._currentValue = a;
  }
  function Yt(l) {
    l._currentValue = Mi.current, A(Mi);
  }
  function Di(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Oi(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Di(
                n.return,
                a,
                l
              ), e || (i = null);
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(v(341));
        i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Di(i, a, l), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (u = i.sibling, u !== null) {
            u.return = i.return, i = u;
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ne(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(v(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          Pl(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (u === P.current) {
        if (i = u.alternate, i === null) throw Error(v(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(hu) : l = [hu]);
      }
      u = u.return;
    }
    l !== null && Oi(
      t,
      l,
      a,
      e
    ), t.flags |= 262144;
  }
  function Vu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Na(l) {
    Ua = l, qt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Dl(l) {
    return po(Ua, l);
  }
  function Lu(l, t) {
    return Ua === null && Na(l), po(l, t);
  }
  function po(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, qt === null) {
      if (l === null) throw Error(v(308));
      qt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else qt = qt.next = t;
    return a;
  }
  var B0 = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, e) {
        l.push(e);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, q0 = E.unstable_scheduleCallback, Y0 = E.unstable_NormalPriority, Sl = {
    $$typeof: Nl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ui() {
    return {
      controller: new B0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ve(l) {
    l.refCount--, l.refCount === 0 && q0(Y0, function() {
      l.controller.abort();
    });
  }
  var Le = null, Ni = 0, ie = 0, ce = null;
  function j0(l, t) {
    if (Le === null) {
      var a = Le = [];
      Ni = 0, ie = Bc(), ce = {
        status: "pending",
        value: void 0,
        then: function(e) {
          a.push(e);
        }
      };
    }
    return Ni++, t.then(Ao, Ao), t;
  }
  function Ao() {
    if (--Ni === 0 && Le !== null) {
      ce !== null && (ce.status = "fulfilled");
      var l = Le;
      Le = null, ie = 0, ce = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function x0(l, t) {
    var a = [], e = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return l.then(
      function() {
        e.status = "fulfilled", e.value = t;
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function(u) {
        for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), e;
  }
  var zo = r.S;
  r.S = function(l, t) {
    ns = Fl(), typeof t == "object" && t !== null && typeof t.then == "function" && j0(l, t), zo !== null && zo(l, t);
  };
  var Ha = d(null);
  function Hi() {
    var l = Ha.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Ku(l, t) {
    t === null ? T(Ha, Ha.current) : T(Ha, t.pool);
  }
  function Eo() {
    var l = Hi();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var fe = Error(v(460)), Ri = Error(v(474)), Ju = Error(v(542)), wu = { then: function() {
  } };
  function _o(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function To(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Nt, Nt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Mo(l), l;
      default:
        if (typeof t.status == "string") t.then(Nt, Nt);
        else {
          if (l = fl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(v(482));
          l = t, l.status = "pending", l.then(
            function(e) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = e;
              }
            },
            function(e) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = e;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Mo(l), l;
        }
        throw Ba = t, fe;
    }
  }
  function Ra(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ba = a, fe) : a;
    }
  }
  var Ba = null;
  function Co() {
    if (Ba === null) throw Error(v(459));
    var l = Ba;
    return Ba = null, l;
  }
  function Mo(l) {
    if (l === fe || l === Ju)
      throw Error(v(483));
  }
  var oe = null, Ke = 0;
  function Wu(l) {
    var t = Ke;
    return Ke += 1, oe === null && (oe = []), To(oe, l, t);
  }
  function Je(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $u(l, t) {
    throw t.$$typeof === sl ? Error(v(525)) : (l = Object.prototype.toString.call(t), Error(
      v(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Do(l) {
    function t(s, o) {
      if (l) {
        var m = s.deletions;
        m === null ? (s.deletions = [o], s.flags |= 16) : m.push(o);
      }
    }
    function a(s, o) {
      if (!l) return null;
      for (; o !== null; )
        t(s, o), o = o.sibling;
      return null;
    }
    function e(s) {
      for (var o = /* @__PURE__ */ new Map(); s !== null; )
        s.key !== null ? o.set(s.key, s) : o.set(s.index, s), s = s.sibling;
      return o;
    }
    function u(s, o) {
      return s = Rt(s, o), s.index = 0, s.sibling = null, s;
    }
    function n(s, o, m) {
      return s.index = m, l ? (m = s.alternate, m !== null ? (m = m.index, m < o ? (s.flags |= 67108866, o) : m) : (s.flags |= 67108866, o)) : (s.flags |= 1048576, o);
    }
    function i(s) {
      return l && s.alternate === null && (s.flags |= 67108866), s;
    }
    function c(s, o, m, S) {
      return o === null || o.tag !== 6 ? (o = Ai(m, s.mode, S), o.return = s, o) : (o = u(o, m), o.return = s, o);
    }
    function f(s, o, m, S) {
      var O = m.type;
      return O === Bl ? b(
        s,
        o,
        m.props.children,
        S,
        m.key
      ) : o !== null && (o.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Gl && Ra(O) === o.type) ? (o = u(o, m.props), Je(o, m), o.return = s, o) : (o = Qu(
        m.type,
        m.key,
        m.props,
        null,
        s.mode,
        S
      ), Je(o, m), o.return = s, o);
    }
    function y(s, o, m, S) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== m.containerInfo || o.stateNode.implementation !== m.implementation ? (o = zi(m, s.mode, S), o.return = s, o) : (o = u(o, m.children || []), o.return = s, o);
    }
    function b(s, o, m, S, O) {
      return o === null || o.tag !== 7 ? (o = Da(
        m,
        s.mode,
        S,
        O
      ), o.return = s, o) : (o = u(o, m), o.return = s, o);
    }
    function p(s, o, m) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Ai(
          "" + o,
          s.mode,
          m
        ), o.return = s, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Wl:
            return m = Qu(
              o.type,
              o.key,
              o.props,
              null,
              s.mode,
              m
            ), Je(m, o), m.return = s, m;
          case jl:
            return o = zi(
              o,
              s.mode,
              m
            ), o.return = s, o;
          case Gl:
            return o = Ra(o), p(s, o, m);
        }
        if (bt(o) || Xl(o))
          return o = Da(
            o,
            s.mode,
            m,
            null
          ), o.return = s, o;
        if (typeof o.then == "function")
          return p(s, Wu(o), m);
        if (o.$$typeof === Nl)
          return p(
            s,
            Lu(s, o),
            m
          );
        $u(s, o);
      }
      return null;
    }
    function h(s, o, m, S) {
      var O = o !== null ? o.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return O !== null ? null : c(s, o, "" + m, S);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Wl:
            return m.key === O ? f(s, o, m, S) : null;
          case jl:
            return m.key === O ? y(s, o, m, S) : null;
          case Gl:
            return m = Ra(m), h(s, o, m, S);
        }
        if (bt(m) || Xl(m))
          return O !== null ? null : b(s, o, m, S, null);
        if (typeof m.then == "function")
          return h(
            s,
            o,
            Wu(m),
            S
          );
        if (m.$$typeof === Nl)
          return h(
            s,
            o,
            Lu(s, m),
            S
          );
        $u(s, m);
      }
      return null;
    }
    function g(s, o, m, S, O) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return s = s.get(m) || null, c(o, s, "" + S, O);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Wl:
            return s = s.get(
              S.key === null ? m : S.key
            ) || null, f(o, s, S, O);
          case jl:
            return s = s.get(
              S.key === null ? m : S.key
            ) || null, y(o, s, S, O);
          case Gl:
            return S = Ra(S), g(
              s,
              o,
              m,
              S,
              O
            );
        }
        if (bt(S) || Xl(S))
          return s = s.get(m) || null, b(o, s, S, O, null);
        if (typeof S.then == "function")
          return g(
            s,
            o,
            m,
            Wu(S),
            O
          );
        if (S.$$typeof === Nl)
          return g(
            s,
            o,
            m,
            Lu(o, S),
            O
          );
        $u(o, S);
      }
      return null;
    }
    function C(s, o, m, S) {
      for (var O = null, $ = null, D = o, G = o = 0, J = null; D !== null && G < m.length; G++) {
        D.index > G ? (J = D, D = null) : J = D.sibling;
        var F = h(
          s,
          D,
          m[G],
          S
        );
        if (F === null) {
          D === null && (D = J);
          break;
        }
        l && D && F.alternate === null && t(s, D), o = n(F, o, G), $ === null ? O = F : $.sibling = F, $ = F, D = J;
      }
      if (G === m.length)
        return a(s, D), W && Bt(s, G), O;
      if (D === null) {
        for (; G < m.length; G++)
          D = p(s, m[G], S), D !== null && (o = n(
            D,
            o,
            G
          ), $ === null ? O = D : $.sibling = D, $ = D);
        return W && Bt(s, G), O;
      }
      for (D = e(D); G < m.length; G++)
        J = g(
          D,
          s,
          G,
          m[G],
          S
        ), J !== null && (l && J.alternate !== null && D.delete(
          J.key === null ? G : J.key
        ), o = n(
          J,
          o,
          G
        ), $ === null ? O = J : $.sibling = J, $ = J);
      return l && D.forEach(function(Sa) {
        return t(s, Sa);
      }), W && Bt(s, G), O;
    }
    function N(s, o, m, S) {
      if (m == null) throw Error(v(151));
      for (var O = null, $ = null, D = o, G = o = 0, J = null, F = m.next(); D !== null && !F.done; G++, F = m.next()) {
        D.index > G ? (J = D, D = null) : J = D.sibling;
        var Sa = h(s, D, F.value, S);
        if (Sa === null) {
          D === null && (D = J);
          break;
        }
        l && D && Sa.alternate === null && t(s, D), o = n(Sa, o, G), $ === null ? O = Sa : $.sibling = Sa, $ = Sa, D = J;
      }
      if (F.done)
        return a(s, D), W && Bt(s, G), O;
      if (D === null) {
        for (; !F.done; G++, F = m.next())
          F = p(s, F.value, S), F !== null && (o = n(F, o, G), $ === null ? O = F : $.sibling = F, $ = F);
        return W && Bt(s, G), O;
      }
      for (D = e(D); !F.done; G++, F = m.next())
        F = g(D, s, G, F.value, S), F !== null && (l && F.alternate !== null && D.delete(F.key === null ? G : F.key), o = n(F, o, G), $ === null ? O = F : $.sibling = F, $ = F);
      return l && D.forEach(function($1) {
        return t(s, $1);
      }), W && Bt(s, G), O;
    }
    function il(s, o, m, S) {
      if (typeof m == "object" && m !== null && m.type === Bl && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Wl:
            l: {
              for (var O = m.key; o !== null; ) {
                if (o.key === O) {
                  if (O = m.type, O === Bl) {
                    if (o.tag === 7) {
                      a(
                        s,
                        o.sibling
                      ), S = u(
                        o,
                        m.props.children
                      ), S.return = s, s = S;
                      break l;
                    }
                  } else if (o.elementType === O || typeof O == "object" && O !== null && O.$$typeof === Gl && Ra(O) === o.type) {
                    a(
                      s,
                      o.sibling
                    ), S = u(o, m.props), Je(S, m), S.return = s, s = S;
                    break l;
                  }
                  a(s, o);
                  break;
                } else t(s, o);
                o = o.sibling;
              }
              m.type === Bl ? (S = Da(
                m.props.children,
                s.mode,
                S,
                m.key
              ), S.return = s, s = S) : (S = Qu(
                m.type,
                m.key,
                m.props,
                null,
                s.mode,
                S
              ), Je(S, m), S.return = s, s = S);
            }
            return i(s);
          case jl:
            l: {
              for (O = m.key; o !== null; ) {
                if (o.key === O)
                  if (o.tag === 4 && o.stateNode.containerInfo === m.containerInfo && o.stateNode.implementation === m.implementation) {
                    a(
                      s,
                      o.sibling
                    ), S = u(o, m.children || []), S.return = s, s = S;
                    break l;
                  } else {
                    a(s, o);
                    break;
                  }
                else t(s, o);
                o = o.sibling;
              }
              S = zi(m, s.mode, S), S.return = s, s = S;
            }
            return i(s);
          case Gl:
            return m = Ra(m), il(
              s,
              o,
              m,
              S
            );
        }
        if (bt(m))
          return C(
            s,
            o,
            m,
            S
          );
        if (Xl(m)) {
          if (O = Xl(m), typeof O != "function") throw Error(v(150));
          return m = O.call(m), N(
            s,
            o,
            m,
            S
          );
        }
        if (typeof m.then == "function")
          return il(
            s,
            o,
            Wu(m),
            S
          );
        if (m.$$typeof === Nl)
          return il(
            s,
            o,
            Lu(s, m),
            S
          );
        $u(s, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, o !== null && o.tag === 6 ? (a(s, o.sibling), S = u(o, m), S.return = s, s = S) : (a(s, o), S = Ai(m, s.mode, S), S.return = s, s = S), i(s)) : a(s, o);
    }
    return function(s, o, m, S) {
      try {
        Ke = 0;
        var O = il(
          s,
          o,
          m,
          S
        );
        return oe = null, O;
      } catch (D) {
        if (D === fe || D === Ju) throw D;
        var $ = lt(29, D, null, s.mode);
        return $.lanes = S, $.return = s, $;
      } finally {
      }
    };
  }
  var qa = Do(!0), Oo = Do(!1), aa = !1;
  function Bi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function qi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ea(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ua(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (k & 2) !== 0) {
      var u = e.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), e.pending = t, t = Xu(l), mo(l, null, a), t;
    }
    return Gu(l, e, t, a), Xu(l);
  }
  function we(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, Sf(l, a);
    }
  }
  function Yi(l, t) {
    var a = l.updateQueue, e = l.alternate;
    if (e !== null && (e = e.updateQueue, a === e)) {
      var u = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = i : n = n.next = i, a = a.next;
        } while (a !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var ji = !1;
  function We() {
    if (ji) {
      var l = ce;
      if (l !== null) throw l;
    }
  }
  function $e(l, t, a, e) {
    ji = !1;
    var u = l.updateQueue;
    aa = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c, y = f.next;
      f.next = null, i === null ? n = y : i.next = y, i = f;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, c = b.lastBaseUpdate, c !== i && (c === null ? b.firstBaseUpdate = y : c.next = y, b.lastBaseUpdate = f));
    }
    if (n !== null) {
      var p = u.baseState;
      i = 0, b = y = f = null, c = n;
      do {
        var h = c.lane & -536870913, g = h !== c.lane;
        if (g ? (K & h) === h : (e & h) === h) {
          h !== 0 && h === ie && (ji = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var C = l, N = c;
            h = t;
            var il = a;
            switch (N.tag) {
              case 1:
                if (C = N.payload, typeof C == "function") {
                  p = C.call(il, p, h);
                  break l;
                }
                p = C;
                break l;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = N.payload, h = typeof C == "function" ? C.call(il, p, h) : C, h == null) break l;
                p = H({}, p, h);
                break l;
              case 2:
                aa = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, g && (l.flags |= 8192), g = u.callbacks, g === null ? u.callbacks = [h] : g.push(h));
        } else
          g = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, b === null ? (y = b = g, f = p) : b = b.next = g, i |= h;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          g = c, c = g.next, g.next = null, u.lastBaseUpdate = g, u.shared.pending = null;
        }
      } while (!0);
      b === null && (f = p), u.baseState = f, u.firstBaseUpdate = y, u.lastBaseUpdate = b, n === null && (u.shared.lanes = 0), oa |= i, l.lanes = i, l.memoizedState = p;
    }
  }
  function Uo(l, t) {
    if (typeof l != "function")
      throw Error(v(191, l));
    l.call(t);
  }
  function No(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        Uo(a[l], t);
  }
  var de = d(null), Fu = d(0);
  function Ho(l, t) {
    l = Kt, T(Fu, l), T(de, t), Kt = l | t.baseLanes;
  }
  function xi() {
    T(Fu, Kt), T(de, de.current);
  }
  function Gi() {
    Kt = Fu.current, A(de), A(Fu);
  }
  var tt = d(null), vt = null;
  function na(l) {
    var t = l.alternate;
    T(bl, bl.current & 1), T(tt, l), vt === null && (t === null || de.current !== null || t.memoizedState !== null) && (vt = l);
  }
  function Xi(l) {
    T(bl, bl.current), T(tt, l), vt === null && (vt = l);
  }
  function Ro(l) {
    l.tag === 22 ? (T(bl, bl.current), T(tt, l), vt === null && (vt = l)) : ia();
  }
  function ia() {
    T(bl, bl.current), T(tt, tt.current);
  }
  function at(l) {
    A(tt), vt === l && (vt = null), A(bl);
  }
  var bl = d(0);
  function ku(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Jc(a) || wc(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var jt = 0, x = null, ul = null, pl = null, Iu = !1, se = !1, Ya = !1, Pu = 0, Fe = 0, me = null, G0 = 0;
  function vl() {
    throw Error(v(321));
  }
  function Qi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Zi(l, t, a, e, u, n) {
    return jt = n, x = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, r.H = l === null || l.memoizedState === null ? gd : ec, Ya = !1, n = a(e, u), Ya = !1, se && (n = qo(
      t,
      a,
      e,
      u
    )), Bo(l), n;
  }
  function Bo(l) {
    r.H = Pe;
    var t = ul !== null && ul.next !== null;
    if (jt = 0, pl = ul = x = null, Iu = !1, Fe = 0, me = null, t) throw Error(v(300));
    l === null || Al || (l = l.dependencies, l !== null && Vu(l) && (Al = !0));
  }
  function qo(l, t, a, e) {
    x = l;
    var u = 0;
    do {
      if (se && (me = null), Fe = 0, se = !1, 25 <= u) throw Error(v(301));
      if (u += 1, pl = ul = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      r.H = bd, n = t(a, e);
    } while (se);
    return n;
  }
  function X0() {
    var l = r.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ke(t) : t, l = l.useState()[0], (ul !== null ? ul.memoizedState : null) !== l && (x.flags |= 1024), t;
  }
  function Vi() {
    var l = Pu !== 0;
    return Pu = 0, l;
  }
  function Li(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Ki(l) {
    if (Iu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Iu = !1;
    }
    jt = 0, pl = ul = x = null, se = !1, Fe = Pu = 0, me = null;
  }
  function Yl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return pl === null ? x.memoizedState = pl = l : pl = pl.next = l, pl;
  }
  function rl() {
    if (ul === null) {
      var l = x.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ul.next;
    var t = pl === null ? x.memoizedState : pl.next;
    if (t !== null)
      pl = t, ul = l;
    else {
      if (l === null)
        throw x.alternate === null ? Error(v(467)) : Error(v(310));
      ul = l, l = {
        memoizedState: ul.memoizedState,
        baseState: ul.baseState,
        baseQueue: ul.baseQueue,
        queue: ul.queue,
        next: null
      }, pl === null ? x.memoizedState = pl = l : pl = pl.next = l;
    }
    return pl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ke(l) {
    var t = Fe;
    return Fe += 1, me === null && (me = []), l = To(me, l, t), t = x, (pl === null ? t.memoizedState : pl.next) === null && (t = t.alternate, r.H = t === null || t.memoizedState === null ? gd : ec), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ke(l);
      if (l.$$typeof === Nl) return Dl(l);
    }
    throw Error(v(438, String(l)));
  }
  function Ji(l) {
    var t = null, a = x.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var e = x.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (t = {
        data: e.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ln(), x.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++)
        a[e] = Qa;
    return t.index++, a;
  }
  function xt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = rl();
    return wi(t, ul, l);
  }
  function wi(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(v(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue, n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      t.baseQueue = u = n, e.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var c = i = null, f = null, y = t, b = !1;
      do {
        var p = y.lane & -536870913;
        if (p !== y.lane ? (K & p) === p : (jt & p) === p) {
          var h = y.revertLane;
          if (h === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), p === ie && (b = !0);
          else if ((jt & h) === h) {
            y = y.next, h === ie && (b = !0);
            continue;
          } else
            p = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, f === null ? (c = f = p, i = n) : f = f.next = p, x.lanes |= h, oa |= h;
          p = y.action, Ya && a(n, p), n = y.hasEagerState ? y.eagerState : a(n, p);
        } else
          h = {
            lane: p,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, f === null ? (c = f = h, i = n) : f = f.next = h, x.lanes |= p, oa |= p;
        y = y.next;
      } while (y !== null && y !== t);
      if (f === null ? i = n : f.next = c, !Pl(n, l.memoizedState) && (Al = !0, b && (a = ce, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = i, l.baseQueue = f, e.lastRenderedState = n;
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Wi(l) {
    var t = rl(), a = t.queue;
    if (a === null) throw Error(v(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch, u = a.pending, n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      Pl(n, t.memoizedState) || (Al = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, e];
  }
  function Yo(l, t, a) {
    var e = x, u = rl(), n = W;
    if (n) {
      if (a === void 0) throw Error(v(407));
      a = a();
    } else a = t();
    var i = !Pl(
      (ul || u).memoizedState,
      a
    );
    if (i && (u.memoizedState = a, Al = !0), u = u.queue, ki(Go.bind(null, e, u, l), [
      l
    ]), u.getSnapshot !== t || i || pl !== null && pl.memoizedState.tag & 1) {
      if (e.flags |= 2048, ye(
        9,
        { destroy: void 0 },
        xo.bind(
          null,
          e,
          u,
          a,
          t
        ),
        null
      ), fl === null) throw Error(v(349));
      n || (jt & 127) !== 0 || jo(e, t, a);
    }
    return a;
  }
  function jo(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = x.updateQueue, t === null ? (t = ln(), x.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function xo(l, t, a, e) {
    t.value = a, t.getSnapshot = e, Xo(t) && Qo(l);
  }
  function Go(l, t, a) {
    return a(function() {
      Xo(t) && Qo(l);
    });
  }
  function Xo(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Pl(l, a);
    } catch {
      return !0;
    }
  }
  function Qo(l) {
    var t = Ma(l, 2);
    t !== null && wl(t, l, 2);
  }
  function $i(l) {
    var t = Yl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ya) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xt,
      lastRenderedState: l
    }, t;
  }
  function Zo(l, t, a, e) {
    return l.baseState = a, wi(
      l,
      ul,
      typeof e == "function" ? e : xt
    );
  }
  function Q0(l, t, a, e, u) {
    if (nn(l)) throw Error(v(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      r.T !== null ? a(!0) : n.isTransition = !1, e(n), a = t.pending, a === null ? (n.next = t.pending = n, Vo(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Vo(l, t) {
    var a = t.action, e = t.payload, u = l.state;
    if (t.isTransition) {
      var n = r.T, i = {};
      r.T = i;
      try {
        var c = a(u, e), f = r.S;
        f !== null && f(i, c), Lo(l, t, c);
      } catch (y) {
        Fi(l, t, y);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), r.T = n;
      }
    } else
      try {
        n = a(u, e), Lo(l, t, n);
      } catch (y) {
        Fi(l, t, y);
      }
  }
  function Lo(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(e) {
        Ko(l, t, e);
      },
      function(e) {
        return Fi(l, t, e);
      }
    ) : Ko(l, t, a);
  }
  function Ko(l, t, a) {
    t.status = "fulfilled", t.value = a, Jo(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Vo(l, a)));
  }
  function Fi(l, t, a) {
    var e = l.pending;
    if (l.pending = null, e !== null) {
      e = e.next;
      do
        t.status = "rejected", t.reason = a, Jo(t), t = t.next;
      while (t !== e);
    }
    l.action = null;
  }
  function Jo(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function wo(l, t) {
    return t;
  }
  function Wo(l, t) {
    if (W) {
      var a = fl.formState;
      if (a !== null) {
        l: {
          var e = x;
          if (W) {
            if (ol) {
              t: {
                for (var u = ol, n = yt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = ht(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                ol = ht(
                  u.nextSibling
                ), e = u.data === "F!";
                break l;
              }
            }
            la(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return a = Yl(), a.memoizedState = a.baseState = t, e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wo,
      lastRenderedState: t
    }, a.queue = e, a = yd.bind(
      null,
      x,
      e
    ), e.dispatch = a, e = $i(!1), n = ac.bind(
      null,
      x,
      !1,
      e.queue
    ), e = Yl(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, e.queue = u, a = Q0.bind(
      null,
      x,
      u,
      n,
      a
    ), u.dispatch = a, e.memoizedState = l, [t, a, !1];
  }
  function $o(l) {
    var t = rl();
    return Fo(t, ul, l);
  }
  function Fo(l, t, a) {
    if (t = wi(
      l,
      t,
      wo
    )[0], l = an(xt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var e = ke(t);
      } catch (i) {
        throw i === fe ? Ju : i;
      }
    else e = t;
    t = rl();
    var u = t.queue, n = u.dispatch;
    return a !== t.memoizedState && (x.flags |= 2048, ye(
      9,
      { destroy: void 0 },
      Z0.bind(null, u, a),
      null
    )), [e, n, l];
  }
  function Z0(l, t) {
    l.action = t;
  }
  function ko(l) {
    var t = rl(), a = ul;
    if (a !== null)
      return Fo(t, a, l);
    rl(), t = t.memoizedState, a = rl();
    var e = a.queue.dispatch;
    return a.memoizedState = l, [t, e, !1];
  }
  function ye(l, t, a, e) {
    return l = { tag: l, create: a, deps: e, inst: t, next: null }, t = x.updateQueue, t === null && (t = ln(), x.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (e = a.next, a.next = l, l.next = e, t.lastEffect = l), l;
  }
  function Io() {
    return rl().memoizedState;
  }
  function en(l, t, a, e) {
    var u = Yl();
    x.flags |= l, u.memoizedState = ye(
      1 | t,
      { destroy: void 0 },
      a,
      e === void 0 ? null : e
    );
  }
  function un(l, t, a, e) {
    var u = rl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ul !== null && e !== null && Qi(e, ul.memoizedState.deps) ? u.memoizedState = ye(t, n, a, e) : (x.flags |= l, u.memoizedState = ye(
      1 | t,
      n,
      a,
      e
    ));
  }
  function Po(l, t) {
    en(8390656, 8, l, t);
  }
  function ki(l, t) {
    un(2048, 8, l, t);
  }
  function V0(l) {
    x.flags |= 4;
    var t = x.updateQueue;
    if (t === null)
      t = ln(), x.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function ld(l) {
    var t = rl().memoizedState;
    return V0({ ref: t, nextImpl: l }), function() {
      if ((k & 2) !== 0) throw Error(v(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function td(l, t) {
    return un(4, 2, l, t);
  }
  function ad(l, t) {
    return un(4, 4, l, t);
  }
  function ed(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function ud(l, t, a) {
    a = a != null ? a.concat([l]) : null, un(4, 4, ed.bind(null, t, l), a);
  }
  function Ii() {
  }
  function nd(l, t) {
    var a = rl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Qi(t, e[1]) ? e[0] : (a.memoizedState = [l, t], l);
  }
  function id(l, t) {
    var a = rl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Qi(t, e[1]))
      return e[0];
    if (e = l(), Ya) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return a.memoizedState = [e, t], e;
  }
  function Pi(l, t, a) {
    return a === void 0 || (jt & 1073741824) !== 0 && (K & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = cs(), x.lanes |= l, oa |= l, a);
  }
  function cd(l, t, a, e) {
    return Pl(a, t) ? a : de.current !== null ? (l = Pi(l, a, e), Pl(l, t) || (Al = !0), l) : (jt & 42) === 0 || (jt & 1073741824) !== 0 && (K & 261930) === 0 ? (Al = !0, l.memoizedState = a) : (l = cs(), x.lanes |= l, oa |= l, t);
  }
  function fd(l, t, a, e, u) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var i = r.T, c = {};
    r.T = c, ac(l, !1, t, a);
    try {
      var f = u(), y = r.S;
      if (y !== null && y(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var b = x0(
          f,
          e
        );
        Ie(
          l,
          t,
          b,
          nt(l)
        );
      } else
        Ie(
          l,
          t,
          e,
          nt(l)
        );
    } catch (p) {
      Ie(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: p },
        nt()
      );
    } finally {
      _.p = n, i !== null && c.types !== null && (i.types = c.types), r.T = i;
    }
  }
  function L0() {
  }
  function lc(l, t, a, e) {
    if (l.tag !== 5) throw Error(v(476));
    var u = od(l).queue;
    fd(
      l,
      u,
      t,
      R,
      a === null ? L0 : function() {
        return dd(l), a(e);
      }
    );
  }
  function od(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: R,
      baseState: R,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xt,
        lastRenderedState: R
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function dd(l) {
    var t = od(l);
    t.next === null && (t = l.alternate.memoizedState), Ie(
      l,
      t.next.queue,
      {},
      nt()
    );
  }
  function tc() {
    return Dl(hu);
  }
  function sd() {
    return rl().memoizedState;
  }
  function md() {
    return rl().memoizedState;
  }
  function K0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          l = ea(a);
          var e = ua(t, l, a);
          e !== null && (wl(e, t, a), we(e, t, a)), t = { cache: Ui() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function J0(l, t, a) {
    var e = nt();
    a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? vd(t, a) : (a = Si(l, t, a, e), a !== null && (wl(a, l, e), hd(a, t, e)));
  }
  function yd(l, t, a) {
    var e = nt();
    Ie(l, t, a, e);
  }
  function Ie(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) vd(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, c = n(i, a);
          if (u.hasEagerState = !0, u.eagerState = c, Pl(c, i))
            return Gu(l, t, u, 0), fl === null && xu(), !1;
        } catch {
        } finally {
        }
      if (a = Si(l, t, u, e), a !== null)
        return wl(a, l, e), hd(a, t, e), !0;
    }
    return !1;
  }
  function ac(l, t, a, e) {
    if (e = {
      lane: 2,
      revertLane: Bc(),
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(v(479));
    } else
      t = Si(
        l,
        a,
        e,
        2
      ), t !== null && wl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === x || t !== null && t === x;
  }
  function vd(l, t) {
    se = Iu = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function hd(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, Sf(l, a);
    }
  }
  var Pe = {
    readContext: Dl,
    use: tn,
    useCallback: vl,
    useContext: vl,
    useEffect: vl,
    useImperativeHandle: vl,
    useLayoutEffect: vl,
    useInsertionEffect: vl,
    useMemo: vl,
    useReducer: vl,
    useRef: vl,
    useState: vl,
    useDebugValue: vl,
    useDeferredValue: vl,
    useTransition: vl,
    useSyncExternalStore: vl,
    useId: vl,
    useHostTransitionStatus: vl,
    useFormState: vl,
    useActionState: vl,
    useOptimistic: vl,
    useMemoCache: vl,
    useCacheRefresh: vl
  };
  Pe.useEffectEvent = vl;
  var gd = {
    readContext: Dl,
    use: tn,
    useCallback: function(l, t) {
      return Yl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Dl,
    useEffect: Po,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, en(
        4194308,
        4,
        ed.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return en(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      en(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Yl();
      t = t === void 0 ? null : t;
      var e = l();
      if (Ya) {
        $t(!0);
        try {
          l();
        } finally {
          $t(!1);
        }
      }
      return a.memoizedState = [e, t], e;
    },
    useReducer: function(l, t, a) {
      var e = Yl();
      if (a !== void 0) {
        var u = a(t);
        if (Ya) {
          $t(!0);
          try {
            a(t);
          } finally {
            $t(!1);
          }
        }
      } else u = t;
      return e.memoizedState = e.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, e.queue = l, l = l.dispatch = J0.bind(
        null,
        x,
        l
      ), [e.memoizedState, l];
    },
    useRef: function(l) {
      var t = Yl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = $i(l);
      var t = l.queue, a = yd.bind(null, x, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = Yl();
      return Pi(a, l, t);
    },
    useTransition: function() {
      var l = $i(!1);
      return l = fd.bind(
        null,
        x,
        l.queue,
        !0,
        !1
      ), Yl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var e = x, u = Yl();
      if (W) {
        if (a === void 0)
          throw Error(v(407));
        a = a();
      } else {
        if (a = t(), fl === null)
          throw Error(v(349));
        (K & 127) !== 0 || jo(e, t, a);
      }
      u.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return u.queue = n, Po(Go.bind(null, e, n, l), [
        l
      ]), e.flags |= 2048, ye(
        9,
        { destroy: void 0 },
        xo.bind(
          null,
          e,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Yl(), t = fl.identifierPrefix;
      if (W) {
        var a = Tt, e = _t;
        a = (e & ~(1 << 32 - Il(e) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pu++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = G0++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: tc,
    useFormState: Wo,
    useActionState: Wo,
    useOptimistic: function(l) {
      var t = Yl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = ac.bind(
        null,
        x,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: Ji,
    useCacheRefresh: function() {
      return Yl().memoizedState = K0.bind(
        null,
        x
      );
    },
    useEffectEvent: function(l) {
      var t = Yl(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((k & 2) !== 0)
          throw Error(v(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, ec = {
    readContext: Dl,
    use: tn,
    useCallback: nd,
    useContext: Dl,
    useEffect: ki,
    useImperativeHandle: ud,
    useInsertionEffect: td,
    useLayoutEffect: ad,
    useMemo: id,
    useReducer: an,
    useRef: Io,
    useState: function() {
      return an(xt);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = rl();
      return cd(
        a,
        ul.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = an(xt)[0], t = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : ke(l),
        t
      ];
    },
    useSyncExternalStore: Yo,
    useId: sd,
    useHostTransitionStatus: tc,
    useFormState: $o,
    useActionState: $o,
    useOptimistic: function(l, t) {
      var a = rl();
      return Zo(a, ul, l, t);
    },
    useMemoCache: Ji,
    useCacheRefresh: md
  };
  ec.useEffectEvent = ld;
  var bd = {
    readContext: Dl,
    use: tn,
    useCallback: nd,
    useContext: Dl,
    useEffect: ki,
    useImperativeHandle: ud,
    useInsertionEffect: td,
    useLayoutEffect: ad,
    useMemo: id,
    useReducer: Wi,
    useRef: Io,
    useState: function() {
      return Wi(xt);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = rl();
      return ul === null ? Pi(a, l, t) : cd(
        a,
        ul.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Wi(xt)[0], t = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : ke(l),
        t
      ];
    },
    useSyncExternalStore: Yo,
    useId: sd,
    useHostTransitionStatus: tc,
    useFormState: ko,
    useActionState: ko,
    useOptimistic: function(l, t) {
      var a = rl();
      return ul !== null ? Zo(a, ul, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Ji,
    useCacheRefresh: md
  };
  bd.useEffectEvent = ld;
  function uc(l, t, a, e) {
    t = l.memoizedState, a = a(e, t), a = a == null ? t : H({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var nc = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var e = nt(), u = ea(e);
      u.payload = t, a != null && (u.callback = a), t = ua(l, u, e), t !== null && (wl(t, l, e), we(t, l, e));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var e = nt(), u = ea(e);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = ua(l, u, e), t !== null && (wl(t, l, e), we(t, l, e));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = nt(), e = ea(a);
      e.tag = 2, t != null && (e.callback = t), t = ua(l, e, a), t !== null && (wl(t, l, a), we(t, l, a));
    }
  };
  function rd(l, t, a, e, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Ge(a, e) || !Ge(u, n) : !0;
  }
  function Sd(l, t, a, e) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, e), t.state !== l && nc.enqueueReplaceState(t, t.state, null);
  }
  function ja(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t)
        e !== "ref" && (a[e] = t[e]);
    }
    if (l = l.defaultProps) {
      a === t && (a = H({}, a));
      for (var u in l)
        a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function pd(l) {
    ju(l);
  }
  function Ad(l) {
    console.error(l);
  }
  function zd(l) {
    ju(l);
  }
  function cn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Ed(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function ic(l, t, a) {
    return a = ea(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      cn(l, t);
    }, a;
  }
  function _d(l) {
    return l = ea(l), l.tag = 3, l;
  }
  function Td(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        Ed(t, a, e);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Ed(t, a, e), typeof u != "function" && (da === null ? da = /* @__PURE__ */ new Set([this]) : da.add(this));
      var c = e.stack;
      this.componentDidCatch(e.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function w0(l, t, a, e, u) {
    if (a.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (t = a.alternate, t !== null && ne(
        t,
        a,
        u,
        !0
      ), a = tt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return vt === null ? Sn() : a.alternate === null && hl === 0 && (hl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, e === wu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([e]) : t.add(e), Nc(l, e, u)), !1;
          case 22:
            return a.flags |= 65536, e === wu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([e])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([e]) : a.add(e)), Nc(l, e, u)), !1;
        }
        throw Error(v(435, a.tag));
      }
      return Nc(l, e, u), Sn(), !1;
    }
    if (W)
      return t = tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, e !== Ti && (l = Error(v(422), { cause: e }), Ze(dt(l, a)))) : (e !== Ti && (t = Error(v(423), {
        cause: e
      }), Ze(
        dt(t, a)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, e = dt(e, a), u = ic(
        l.stateNode,
        e,
        u
      ), Yi(l, u), hl !== 4 && (hl = 2)), !1;
    var n = Error(v(520), { cause: e });
    if (n = dt(n, a), cu === null ? cu = [n] : cu.push(n), hl !== 4 && (hl = 2), t === null) return !0;
    e = dt(e, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = u & -u, a.lanes |= l, l = ic(a.stateNode, e, l), Yi(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (da === null || !da.has(n))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = _d(u), Td(
              u,
              l,
              a,
              e
            ), Yi(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var cc = Error(v(461)), Al = !1;
  function Ol(l, t, a, e) {
    t.child = l === null ? Oo(t, null, a, e) : qa(
      t,
      l.child,
      a,
      e
    );
  }
  function Cd(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e)
        c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return Na(t), e = Zi(
      l,
      t,
      a,
      i,
      n,
      u
    ), c = Vi(), l !== null && !Al ? (Li(l, t, u), Gt(l, t, u)) : (W && c && Ei(t), t.flags |= 1, Ol(l, t, e, u), t.child);
  }
  function Md(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !pi(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Dd(
        l,
        t,
        n,
        e,
        u
      )) : (l = Qu(
        a.type,
        null,
        e,
        t,
        t.mode,
        u
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !hc(l, u)) {
      var i = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ge, a(i, e) && l.ref === t.ref)
        return Gt(l, t, u);
    }
    return t.flags |= 1, l = Rt(n, e), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Dd(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ge(n, e) && l.ref === t.ref)
        if (Al = !1, t.pendingProps = e = n, hc(l, u))
          (l.flags & 131072) !== 0 && (Al = !0);
        else
          return t.lanes = l.lanes, Gt(l, t, u);
    }
    return fc(
      l,
      t,
      a,
      e,
      u
    );
  }
  function Od(l, t, a, e) {
    var u = e.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (e = t.child = l.child, u = 0; e !== null; )
            u = u | e.lanes | e.childLanes, e = e.sibling;
          e = u & ~n;
        } else e = 0, t.child = null;
        return Ud(
          l,
          t,
          n,
          a,
          e
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ku(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Ho(t, n) : xi(), Ro(t);
      else
        return e = t.lanes = 536870912, Ud(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          e
        );
    } else
      n !== null ? (Ku(t, n.cachePool), Ho(t, n), ia(), t.memoizedState = null) : (l !== null && Ku(t, null), xi(), ia());
    return Ol(l, t, u, a), t.child;
  }
  function lu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ud(l, t, a, e, u) {
    var n = Hi();
    return n = n === null ? null : { parent: Sl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Ku(t, null), xi(), Ro(t), l !== null && ne(l, t, e, !0), t.childLanes = u, null;
  }
  function fn(l, t) {
    return t = dn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Nd(l, t, a) {
    return qa(t, l.child, null, a), l = fn(t, t.pendingProps), l.flags |= 2, at(t), t.memoizedState = null, l;
  }
  function W0(l, t, a) {
    var e = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (W) {
        if (e.mode === "hidden")
          return l = fn(t, e), t.lanes = 536870912, lu(null, l);
        if (Xi(t), (l = ol) ? (l = Vs(
          l,
          yt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: _t, overflow: Tt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = vo(l), a.return = t, t.child = a, Ml = t, ol = null)) : l = null, l === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return fn(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Xi(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Nd(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(v(558));
      else if (Al || ne(l, t, a, !1), u = (a & l.childLanes) !== 0, Al || u) {
        if (e = fl, e !== null && (i = pf(e, a), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Ma(l, i), wl(e, l, i), cc;
        Sn(), t = Nd(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, ol = ht(i.nextSibling), Ml = t, W = !0, Pt = null, yt = !1, l !== null && bo(t, l), t = fn(t, e), t.flags |= 4096;
      return t;
    }
    return l = Rt(l.child, {
      mode: e.mode,
      children: e.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function on(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(v(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function fc(l, t, a, e, u) {
    return Na(t), a = Zi(
      l,
      t,
      a,
      e,
      void 0,
      u
    ), e = Vi(), l !== null && !Al ? (Li(l, t, u), Gt(l, t, u)) : (W && e && Ei(t), t.flags |= 1, Ol(l, t, a, u), t.child);
  }
  function Hd(l, t, a, e, u, n) {
    return Na(t), t.updateQueue = null, a = qo(
      t,
      e,
      a,
      u
    ), Bo(l), e = Vi(), l !== null && !Al ? (Li(l, t, n), Gt(l, t, n)) : (W && e && Ei(t), t.flags |= 1, Ol(l, t, a, n), t.child);
  }
  function Rd(l, t, a, e, u) {
    if (Na(t), t.stateNode === null) {
      var n = te, i = a.contextType;
      typeof i == "object" && i !== null && (n = Dl(i)), n = new a(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = nc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, Bi(t), i = a.contextType, n.context = typeof i == "object" && i !== null ? Dl(i) : te, n.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (uc(
        t,
        a,
        i,
        e
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && nc.enqueueReplaceState(n, n.state, null), $e(t, e, n, u), We(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, f = ja(a, c);
      n.props = f;
      var y = n.context, b = a.contextType;
      i = te, typeof b == "object" && b !== null && (i = Dl(b));
      var p = a.getDerivedStateFromProps;
      b = typeof p == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, b || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && Sd(
        t,
        n,
        e,
        i
      ), aa = !1;
      var h = t.memoizedState;
      n.state = h, $e(t, e, n, u), We(), y = t.memoizedState, c || h !== y || aa ? (typeof p == "function" && (uc(
        t,
        a,
        p,
        e
      ), y = t.memoizedState), (f = aa || rd(
        t,
        a,
        f,
        e,
        h,
        y,
        i
      )) ? (b || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = y), n.props = e, n.state = y, n.context = i, e = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !1);
    } else {
      n = t.stateNode, qi(l, t), i = t.memoizedProps, b = ja(a, i), n.props = b, p = t.pendingProps, h = n.context, y = a.contextType, f = te, typeof y == "object" && y !== null && (f = Dl(y)), c = a.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== p || h !== f) && Sd(
        t,
        n,
        e,
        f
      ), aa = !1, h = t.memoizedState, n.state = h, $e(t, e, n, u), We();
      var g = t.memoizedState;
      i !== p || h !== g || aa || l !== null && l.dependencies !== null && Vu(l.dependencies) ? (typeof c == "function" && (uc(
        t,
        a,
        c,
        e
      ), g = t.memoizedState), (b = aa || rd(
        t,
        a,
        b,
        e,
        h,
        g,
        f
      ) || l !== null && l.dependencies !== null && Vu(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, g, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        e,
        g,
        f
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = g), n.props = e, n.state = g, n.context = f, e = b) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), e = !1);
    }
    return n = e, on(l, t), e = (t.flags & 128) !== 0, n || e ? (n = t.stateNode, a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && e ? (t.child = qa(
      t,
      l.child,
      null,
      u
    ), t.child = qa(
      t,
      null,
      a,
      u
    )) : Ol(l, t, a, u), t.memoizedState = n.state, l = t.child) : l = Gt(
      l,
      t,
      u
    ), l;
  }
  function Bd(l, t, a, e) {
    return Oa(), t.flags |= 256, Ol(l, t, a, e), t.child;
  }
  var oc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(l) {
    return { baseLanes: l, cachePool: Eo() };
  }
  function sc(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= ut), l;
  }
  function qd(l, t, a) {
    var e = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (W) {
        if (u ? na(t) : ia(), (l = ol) ? (l = Vs(
          l,
          yt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: _t, overflow: Tt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = vo(l), a.return = t, t.child = a, Ml = t, ol = null)) : l = null, l === null) throw la(t);
        return wc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = e.children;
      return e = e.fallback, u ? (ia(), u = t.mode, c = dn(
        { mode: "hidden", children: c },
        u
      ), e = Da(
        e,
        u,
        a,
        null
      ), c.return = t, e.return = t, c.sibling = e, t.child = c, e = t.child, e.memoizedState = dc(a), e.childLanes = sc(
        l,
        i,
        a
      ), t.memoizedState = oc, lu(null, e)) : (na(t), mc(t, c));
    }
    var f = l.memoizedState;
    if (f !== null && (c = f.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (na(t), t.flags &= -257, t = yc(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (ia(), t.child = l.child, t.flags |= 128, t = null) : (ia(), c = e.fallback, u = t.mode, e = dn(
          { mode: "visible", children: e.children },
          u
        ), c = Da(
          c,
          u,
          a,
          null
        ), c.flags |= 2, e.return = t, c.return = t, e.sibling = c, t.child = e, qa(
          t,
          l.child,
          null,
          a
        ), e = t.child, e.memoizedState = dc(a), e.childLanes = sc(
          l,
          i,
          a
        ), t.memoizedState = oc, t = lu(null, e));
      else if (na(t), wc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, e = Error(v(419)), e.stack = "", e.digest = i, Ze({ value: e, source: null, stack: null }), t = yc(
          l,
          t,
          a
        );
      } else if (Al || ne(l, t, a, !1), i = (a & l.childLanes) !== 0, Al || i) {
        if (i = fl, i !== null && (e = pf(i, a), e !== 0 && e !== f.retryLane))
          throw f.retryLane = e, Ma(l, e), wl(i, l, e), cc;
        Jc(c) || Sn(), t = yc(
          l,
          t,
          a
        );
      } else
        Jc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, ol = ht(
          c.nextSibling
        ), Ml = t, W = !0, Pt = null, yt = !1, l !== null && bo(t, l), t = mc(
          t,
          e.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (ia(), c = e.fallback, u = t.mode, f = l.child, y = f.sibling, e = Rt(f, {
      mode: "hidden",
      children: e.children
    }), e.subtreeFlags = f.subtreeFlags & 65011712, y !== null ? c = Rt(
      y,
      c
    ) : (c = Da(
      c,
      u,
      a,
      null
    ), c.flags |= 2), c.return = t, e.return = t, e.sibling = c, t.child = e, lu(null, e), e = t.child, c = l.child.memoizedState, c === null ? c = dc(a) : (u = c.cachePool, u !== null ? (f = Sl._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = Eo(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: u
    }), e.memoizedState = c, e.childLanes = sc(
      l,
      i,
      a
    ), t.memoizedState = oc, lu(l.child, e)) : (na(t), a = l.child, l = a.sibling, a = Rt(a, {
      mode: "visible",
      children: e.children
    }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function mc(l, t) {
    return t = dn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function dn(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function yc(l, t, a) {
    return qa(t, l.child, null, a), l = mc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Yd(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), Di(l.return, t, a);
  }
  function vc(l, t, a, e, u, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: e,
      tail: a,
      tailMode: u,
      treeForkCount: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = e, i.tail = a, i.tailMode = u, i.treeForkCount = n);
  }
  function jd(l, t, a) {
    var e = t.pendingProps, u = e.revealOrder, n = e.tail;
    e = e.children;
    var i = bl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, T(bl, i), Ol(l, t, e, a), e = W ? Qe : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Yd(l, a, t);
        else if (l.tag === 19)
          Yd(l, a, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          l = a.alternate, l !== null && ku(l) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), vc(
          t,
          !1,
          u,
          a,
          n,
          e
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && ku(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = a, a = u, u = l;
        }
        vc(
          t,
          !0,
          a,
          null,
          n,
          e
        );
        break;
      case "together":
        vc(
          t,
          !1,
          null,
          null,
          void 0,
          e
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), oa |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (ne(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(v(153));
    if (t.child !== null) {
      for (l = t.child, a = Rt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = Rt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function hc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Vu(l)));
  }
  function $0(l, t, a) {
    switch (t.tag) {
      case 3:
        ql(t, t.stateNode.containerInfo), ta(t, Sl, l.memoizedState.cache), Oa();
        break;
      case 27:
      case 5:
        Ce(t);
        break;
      case 4:
        ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Xi(t), null;
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null ? (na(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? qd(l, t, a) : (na(t), l = Gt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (e = (a & t.childLanes) !== 0, e || (ne(
          l,
          t,
          a,
          !1
        ), e = (a & t.childLanes) !== 0), u) {
          if (e)
            return jd(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), T(bl, bl.current), e) break;
        return null;
      case 22:
        return t.lanes = 0, Od(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        ta(t, Sl, l.memoizedState.cache);
    }
    return Gt(l, t, a);
  }
  function xd(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Al = !0;
      else {
        if (!hc(l, a) && (t.flags & 128) === 0)
          return Al = !1, $0(
            l,
            t,
            a
          );
        Al = (l.flags & 131072) !== 0;
      }
    else
      Al = !1, W && (t.flags & 1048576) !== 0 && go(t, Qe, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (l = Ra(t.elementType), t.type = l, typeof l == "function")
            pi(l) ? (e = ja(l, e), t.tag = 1, t = Rd(
              null,
              t,
              l,
              e,
              a
            )) : (t.tag = 0, t = fc(
              null,
              t,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === it) {
                t.tag = 11, t = Cd(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              } else if (u === w) {
                t.tag = 14, t = Md(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              }
            }
            throw t = Ot(l) || l, Error(v(306, t, ""));
          }
        }
        return t;
      case 0:
        return fc(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return e = t.type, u = ja(
          e,
          t.pendingProps
        ), Rd(
          l,
          t,
          e,
          u,
          a
        );
      case 3:
        l: {
          if (ql(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(v(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, qi(l, t), $e(t, e, null, a);
          var i = t.memoizedState;
          if (e = i.cache, ta(t, Sl, e), e !== n.cache && Oi(
            t,
            [Sl],
            a,
            !0
          ), We(), e = i.element, n.isDehydrated)
            if (n = {
              element: e,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Bd(
                l,
                t,
                e,
                a
              );
              break l;
            } else if (e !== u) {
              u = dt(
                Error(v(424)),
                t
              ), Ze(u), t = Bd(
                l,
                t,
                e,
                a
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (ol = ht(l.firstChild), Ml = t, W = !0, Pt = null, yt = !0, a = Oo(
                t,
                null,
                e,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Oa(), e === u) {
              t = Gt(
                l,
                t,
                a
              );
              break l;
            }
            Ol(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return on(l, t), l === null ? (a = $s(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : W || (a = t.type, l = t.pendingProps, e = Cn(
          Z.current
        ).createElement(a), e[Cl] = t, e[Ql] = l, Ul(e, a, l), _l(e), t.stateNode = e) : t.memoizedState = $s(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ce(t), l === null && W && (e = t.stateNode = Js(
          t.type,
          t.pendingProps,
          Z.current
        ), Ml = t, yt = !0, u = ol, va(t.type) ? (Wc = u, ol = ht(e.firstChild)) : ol = u), Ol(
          l,
          t,
          t.pendingProps.children,
          a
        ), on(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && W && ((u = e = ol) && (e = T1(
          e,
          t.type,
          t.pendingProps,
          yt
        ), e !== null ? (t.stateNode = e, Ml = t, ol = ht(e.firstChild), yt = !1, u = !0) : u = !1), u || la(t)), Ce(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, e = n.children, Vc(u, n) ? e = null : i !== null && Vc(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = Zi(
          l,
          t,
          X0,
          null,
          null,
          a
        ), hu._currentValue = u), on(l, t), Ol(l, t, e, a), t.child;
      case 6:
        return l === null && W && ((l = a = ol) && (a = C1(
          a,
          t.pendingProps,
          yt
        ), a !== null ? (t.stateNode = a, Ml = t, ol = null, l = !0) : l = !1), l || la(t)), null;
      case 13:
        return qd(l, t, a);
      case 4:
        return ql(
          t,
          t.stateNode.containerInfo
        ), e = t.pendingProps, l === null ? t.child = qa(
          t,
          null,
          e,
          a
        ) : Ol(l, t, e, a), t.child;
      case 11:
        return Cd(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Ol(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Ol(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Ol(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return e = t.pendingProps, ta(t, t.type, e.value), Ol(l, t, e.children, a), t.child;
      case 9:
        return u = t.type._context, e = t.pendingProps.children, Na(t), u = Dl(u), e = e(u), t.flags |= 1, Ol(l, t, e, a), t.child;
      case 14:
        return Md(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Dd(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return jd(l, t, a);
      case 31:
        return W0(l, t, a);
      case 22:
        return Od(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return Na(t), e = Dl(Sl), l === null ? (u = Hi(), u === null && (u = fl, n = Ui(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= a), u = n), t.memoizedState = { parent: e, cache: u }, Bi(t), ta(t, Sl, u)) : ((l.lanes & a) !== 0 && (qi(l, t), $e(t, null, null, a), We()), u = l.memoizedState, n = t.memoizedState, u.parent !== e ? (u = { parent: e, cache: e }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ta(t, Sl, e)) : (e = n.cache, ta(t, Sl, e), e !== u.cache && Oi(
          t,
          [Sl],
          a,
          !0
        ))), Ol(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(v(156, t.tag));
  }
  function Xt(l) {
    l.flags |= 4;
  }
  function gc(l, t, a, e, u) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (ss()) l.flags |= 8192;
        else
          throw Ba = wu, Ri;
    } else l.flags &= -16777217;
  }
  function Gd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !lm(t))
      if (ss()) l.flags |= 8192;
      else
        throw Ba = wu, Ri;
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? bf() : 536870912, l.lanes |= t, be |= t);
  }
  function tu(l, t) {
    if (!W)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            a.alternate !== null && (e = a), a = a.sibling;
          e === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : e.sibling = null;
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags & 65011712, e |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags, e |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= e, l.childLanes = a, t;
  }
  function F0(l, t, a) {
    var e = t.pendingProps;
    switch (_i(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dl(t), null;
      case 1:
        return dl(t), null;
      case 3:
        return a = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Yt(Sl), gl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (ue(t) ? Xt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ci())), dl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Xt(t), n !== null ? (dl(t), Gd(t, n)) : (dl(t), gc(
          t,
          u,
          null,
          e,
          a
        ))) : n ? n !== l.memoizedState ? (Xt(t), dl(t), Gd(t, n)) : (dl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && Xt(t), dl(t), gc(
          t,
          u,
          l,
          e,
          a
        )), null;
      case 27:
        if (Au(t), a = Z.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && Xt(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(v(166));
            return dl(t), null;
          }
          l = M.current, ue(t) ? ro(t) : (l = Js(u, e, a), t.stateNode = l, Xt(t));
        }
        return dl(t), null;
      case 5:
        if (Au(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && Xt(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(v(166));
            return dl(t), null;
          }
          if (n = M.current, ue(t))
            ro(t);
          else {
            var i = Cn(
              Z.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof e.is == "string" ? i.createElement("select", {
                      is: e.is
                    }) : i.createElement("select"), e.multiple ? n.multiple = !0 : e.size && (n.size = e.size);
                    break;
                  default:
                    n = typeof e.is == "string" ? i.createElement(u, { is: e.is }) : i.createElement(u);
                }
            }
            n[Cl] = t, n[Ql] = e;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = n;
            l: switch (Ul(n, u, e), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && Xt(t);
          }
        }
        return dl(t), gc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== e && Xt(t);
        else {
          if (typeof e != "string" && t.stateNode === null)
            throw Error(v(166));
          if (l = Z.current, ue(t)) {
            if (l = t.stateNode, a = t.memoizedProps, e = null, u = Ml, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            l[Cl] = t, l = !!(l.nodeValue === a || e !== null && e.suppressHydrationWarning === !0 || qs(l.nodeValue, a)), l || la(t, !0);
          } else
            l = Cn(l).createTextNode(
              e
            ), l[Cl] = t, t.stateNode = l;
        }
        return dl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (e = ue(t), a !== null) {
            if (l === null) {
              if (!e) throw Error(v(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(557));
              l[Cl] = t;
            } else
              Oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), l = !1;
          } else
            a = Ci(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(v(558));
        }
        return dl(t), null;
      case 13:
        if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = ue(t), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(v(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(v(317));
              u[Cl] = t;
            } else
              Oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), u = !1;
          } else
            u = Ci(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return at(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = e !== null, l = l !== null && l.memoizedState !== null, a && (e = t.child, u = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (u = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== u && (e.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), sn(t, t.updateQueue), dl(t), null);
      case 4:
        return gl(), l === null && xc(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return Yt(t.type), dl(t), null;
      case 19:
        if (A(bl), e = t.memoizedState, e === null) return dl(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) tu(e, !1);
          else {
            if (hl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = ku(l), n !== null) {
                  for (t.flags |= 128, tu(e, !1), l = n.updateQueue, t.updateQueue = l, sn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    yo(a, l), a = a.sibling;
                  return T(
                    bl,
                    bl.current & 1 | 2
                  ), W && Bt(t, e.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && Fl() > gn && (t.flags |= 128, u = !0, tu(e, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = ku(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, sn(t, l), tu(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !W)
                return dl(t), null;
            } else
              2 * Fl() - e.renderingStartTime > gn && a !== 536870912 && (t.flags |= 128, u = !0, tu(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (l = e.tail, e.rendering = l, e.tail = l.sibling, e.renderingStartTime = Fl(), l.sibling = null, a = bl.current, T(
          bl,
          u ? a & 1 | 2 : a & 1
        ), W && Bt(t, e.treeForkCount), l) : (dl(t), null);
      case 22:
      case 23:
        return at(t), Gi(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dl(t), a = t.updateQueue, a !== null && sn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (t.flags |= 2048), l !== null && A(Ha), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yt(Sl), dl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function k0(l, t) {
    switch (_i(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Yt(Sl), gl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Au(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (at(t), t.alternate === null)
            throw Error(v(340));
          Oa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (at(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(v(340));
          Oa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return A(bl), null;
      case 4:
        return gl(), null;
      case 10:
        return Yt(t.type), null;
      case 22:
      case 23:
        return at(t), Gi(), l !== null && A(Ha), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Yt(Sl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xd(l, t) {
    switch (_i(t), t.tag) {
      case 3:
        Yt(Sl), gl();
        break;
      case 26:
      case 27:
      case 5:
        Au(t);
        break;
      case 4:
        gl();
        break;
      case 31:
        t.memoizedState !== null && at(t);
        break;
      case 13:
        at(t);
        break;
      case 19:
        A(bl);
        break;
      case 10:
        Yt(t.type);
        break;
      case 22:
      case 23:
        at(t), Gi(), l !== null && A(Ha);
        break;
      case 24:
        Yt(Sl);
    }
  }
  function au(l, t) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create, i = a.inst;
            e = n(), i.destroy = e;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      al(t, t.return, c);
    }
  }
  function ca(l, t, a) {
    try {
      var e = t.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var i = e.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = t;
              var f = a, y = c;
              try {
                y();
              } catch (b) {
                al(
                  u,
                  f,
                  b
                );
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (b) {
      al(t, t.return, b);
    }
  }
  function Qd(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        No(t, a);
      } catch (e) {
        al(l, l.return, e);
      }
    }
  }
  function Zd(l, t, a) {
    a.props = ja(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (e) {
      al(l, t, e);
    }
  }
  function eu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(e) : a.current = e;
      }
    } catch (u) {
      al(l, t, u);
    }
  }
  function Ct(l, t) {
    var a = l.ref, e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          al(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          al(l, t, u);
        }
      else a.current = null;
  }
  function Vd(l) {
    var t = l.type, a = l.memoizedProps, e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function bc(l, t, a) {
    try {
      var e = l.stateNode;
      S1(e, l.type, a, t), e[Ql] = t;
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function Ld(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && va(l.type) || l.tag === 4;
  }
  function rc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ld(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && va(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Sc(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Nt));
    else if (e !== 4 && (e === 27 && va(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (Sc(l, t, a), l = l.sibling; l !== null; )
        Sc(l, t, a), l = l.sibling;
  }
  function mn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (e !== 4 && (e === 27 && va(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (mn(l, t, a), l = l.sibling; l !== null; )
        mn(l, t, a), l = l.sibling;
  }
  function Kd(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Ul(t, e, a), t[Cl] = l, t[Ql] = a;
    } catch (n) {
      al(l, l.return, n);
    }
  }
  var Qt = !1, zl = !1, pc = !1, Jd = typeof WeakSet == "function" ? WeakSet : Set, Tl = null;
  function I0(l, t) {
    if (l = l.containerInfo, Qc = Rn, l = eo(l), yi(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset, n = e.focusNode;
            e = e.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var i = 0, c = -1, f = -1, y = 0, b = 0, p = l, h = null;
            t: for (; ; ) {
              for (var g; p !== a || u !== 0 && p.nodeType !== 3 || (c = i + u), p !== n || e !== 0 && p.nodeType !== 3 || (f = i + e), p.nodeType === 3 && (i += p.nodeValue.length), (g = p.firstChild) !== null; )
                h = p, p = g;
              for (; ; ) {
                if (p === l) break t;
                if (h === a && ++y === u && (c = i), h === n && ++b === e && (f = i), (g = p.nextSibling) !== null) break;
                p = h, h = p.parentNode;
              }
              p = g;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Zc = { focusedElem: l, selectionRange: a }, Rn = !1, Tl = t; Tl !== null; )
      if (t = Tl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Tl = l;
      else
        for (; Tl !== null; ) {
          switch (t = Tl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (a = 0; a < l.length; a++)
                  u = l[a], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, u = n.memoizedProps, n = n.memoizedState, e = a.stateNode;
                try {
                  var C = ja(
                    a.type,
                    u
                  );
                  l = e.getSnapshotBeforeUpdate(
                    C,
                    n
                  ), e.__reactInternalSnapshotBeforeUpdate = l;
                } catch (N) {
                  al(
                    a,
                    a.return,
                    N
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Kc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Kc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(v(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Tl = l;
            break;
          }
          Tl = t.return;
        }
  }
  function wd(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, a), e & 4 && au(5, a);
        break;
      case 1:
        if (Vt(l, a), e & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              al(a, a.return, i);
            }
          else {
            var u = ja(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                u,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              al(
                a,
                a.return,
                i
              );
            }
          }
        e & 64 && Qd(a), e & 512 && eu(a, a.return);
        break;
      case 3:
        if (Vt(l, a), e & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            No(l, t);
          } catch (i) {
            al(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && Kd(a);
      case 26:
      case 5:
        Vt(l, a), t === null && e & 4 && Vd(a), e & 512 && eu(a, a.return);
        break;
      case 12:
        Vt(l, a);
        break;
      case 31:
        Vt(l, a), e & 4 && Fd(l, a);
        break;
      case 13:
        Vt(l, a), e & 4 && kd(l, a), e & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = c1.bind(
          null,
          a
        ), M1(l, a))));
        break;
      case 22:
        if (e = a.memoizedState !== null || Qt, !e) {
          t = t !== null && t.memoizedState !== null || zl, u = Qt;
          var n = zl;
          Qt = e, (zl = t) && !n ? Lt(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Vt(l, a), Qt = u, zl = n;
        }
        break;
      case 30:
        break;
      default:
        Vt(l, a);
    }
  }
  function Wd(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Wd(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Fn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ml = null, Vl = !1;
  function Zt(l, t, a) {
    for (a = a.child; a !== null; )
      $d(l, t, a), a = a.sibling;
  }
  function $d(l, t, a) {
    if (kl && typeof kl.onCommitFiberUnmount == "function")
      try {
        kl.onCommitFiberUnmount(Me, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        zl || Ct(a, t), Zt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        zl || Ct(a, t);
        var e = ml, u = Vl;
        va(a.type) && (ml = a.stateNode, Vl = !1), Zt(
          l,
          t,
          a
        ), mu(a.stateNode), ml = e, Vl = u;
        break;
      case 5:
        zl || Ct(a, t);
      case 6:
        if (e = ml, u = Vl, ml = null, Zt(
          l,
          t,
          a
        ), ml = e, Vl = u, ml !== null)
          if (Vl)
            try {
              (ml.nodeType === 9 ? ml.body : ml.nodeName === "HTML" ? ml.ownerDocument.body : ml).removeChild(a.stateNode);
            } catch (n) {
              al(
                a,
                t,
                n
              );
            }
          else
            try {
              ml.removeChild(a.stateNode);
            } catch (n) {
              al(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        ml !== null && (Vl ? (l = ml, Qs(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), Te(l)) : Qs(ml, a.stateNode));
        break;
      case 4:
        e = ml, u = Vl, ml = a.stateNode.containerInfo, Vl = !0, Zt(
          l,
          t,
          a
        ), ml = e, Vl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ca(2, a, t), zl || ca(4, a, t), Zt(
          l,
          t,
          a
        );
        break;
      case 1:
        zl || (Ct(a, t), e = a.stateNode, typeof e.componentWillUnmount == "function" && Zd(
          a,
          t,
          e
        )), Zt(
          l,
          t,
          a
        );
        break;
      case 21:
        Zt(
          l,
          t,
          a
        );
        break;
      case 22:
        zl = (e = zl) || a.memoizedState !== null, Zt(
          l,
          t,
          a
        ), zl = e;
        break;
      default:
        Zt(
          l,
          t,
          a
        );
    }
  }
  function Fd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Te(l);
      } catch (a) {
        al(t, t.return, a);
      }
    }
  }
  function kd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Te(l);
      } catch (a) {
        al(t, t.return, a);
      }
  }
  function P0(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Jd()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Jd()), t;
      default:
        throw Error(v(435, l.tag));
    }
  }
  function yn(l, t) {
    var a = P0(l);
    t.forEach(function(e) {
      if (!a.has(e)) {
        a.add(e);
        var u = f1.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function Ll(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e], n = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (va(c.type)) {
                ml = c.stateNode, Vl = !1;
                break l;
              }
              break;
            case 5:
              ml = c.stateNode, Vl = !1;
              break l;
            case 3:
            case 4:
              ml = c.stateNode.containerInfo, Vl = !0;
              break l;
          }
          c = c.return;
        }
        if (ml === null) throw Error(v(160));
        $d(n, i, u), ml = null, Vl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Id(t, l), t = t.sibling;
  }
  var St = null;
  function Id(l, t) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ll(t, l), Kl(l), e & 4 && (ca(3, l, l.return), au(3, l), ca(5, l, l.return));
        break;
      case 1:
        Ll(t, l), Kl(l), e & 512 && (zl || a === null || Ct(a, a.return)), e & 64 && Qt && (l = l.updateQueue, l !== null && (e = l.callbacks, e !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        var u = St;
        if (Ll(t, l), Kl(l), e & 512 && (zl || a === null || Ct(a, a.return)), e & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (e = l.memoizedState, a === null)
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  e = l.type, a = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (e) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Ue] || n[Cl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(e), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), Ul(n, e, a), n[Cl] = l, _l(n), e = n;
                      break l;
                    case "link":
                      var i = Is(
                        "link",
                        "href",
                        u
                      ).get(e + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(e), Ul(n, e, a), u.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = Is(
                        "meta",
                        "content",
                        u
                      ).get(e + (a.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = u.createElement(e), Ul(n, e, a), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(v(468, e));
                  }
                  n[Cl] = l, _l(n), e = n;
                }
                l.stateNode = e;
              } else
                Ps(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = ks(
                u,
                e,
                l.memoizedProps
              );
          else
            n !== e ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, e === null ? Ps(
              u,
              l.type,
              l.stateNode
            ) : ks(
              u,
              e,
              l.memoizedProps
            )) : e === null && l.stateNode !== null && bc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Ll(t, l), Kl(l), e & 512 && (zl || a === null || Ct(a, a.return)), a !== null && e & 4 && bc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Ll(t, l), Kl(l), e & 512 && (zl || a === null || Ct(a, a.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            Wa(u, "");
          } catch (C) {
            al(l, l.return, C);
          }
        }
        e & 4 && l.stateNode != null && (u = l.memoizedProps, bc(
          l,
          u,
          a !== null ? a.memoizedProps : u
        )), e & 1024 && (pc = !0);
        break;
      case 6:
        if (Ll(t, l), Kl(l), e & 4) {
          if (l.stateNode === null)
            throw Error(v(162));
          e = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = e;
          } catch (C) {
            al(l, l.return, C);
          }
        }
        break;
      case 3:
        if (On = null, u = St, St = Mn(t.containerInfo), Ll(t, l), St = u, Kl(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Te(t.containerInfo);
          } catch (C) {
            al(l, l.return, C);
          }
        pc && (pc = !1, Pd(l));
        break;
      case 4:
        e = St, St = Mn(
          l.stateNode.containerInfo
        ), Ll(t, l), Kl(l), St = e;
        break;
      case 12:
        Ll(t, l), Kl(l);
        break;
      case 31:
        Ll(t, l), Kl(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, yn(l, e)));
        break;
      case 13:
        Ll(t, l), Kl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hn = Fl()), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, yn(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null, y = Qt, b = zl;
        if (Qt = y || u, zl = b || f, Ll(t, l), zl = b, Qt = y, Kl(l), e & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || f || Qt || zl || xa(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (n = f.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = f.stateNode;
                    var p = f.memoizedProps.style, h = p != null && p.hasOwnProperty("display") ? p.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (C) {
                  al(f, f.return, C);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (C) {
                  al(f, f.return, C);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var g = f.stateNode;
                  u ? Zs(g, !0) : Zs(f.stateNode, !1);
                } catch (C) {
                  al(f, f.return, C);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        e & 4 && (e = l.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, yn(l, a))));
        break;
      case 19:
        Ll(t, l), Kl(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, yn(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ll(t, l), Kl(l);
    }
  }
  function Kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (Ld(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(v(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, n = rc(l);
            mn(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Wa(i, ""), a.flags &= -33);
            var c = rc(l);
            mn(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo, y = rc(l);
            Sc(
              l,
              y,
              f
            );
            break;
          default:
            throw Error(v(161));
        }
      } catch (b) {
        al(l, l.return, b);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Pd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Pd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        wd(l, t.alternate, t), t = t.sibling;
  }
  function xa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, t, t.return), xa(t);
          break;
        case 1:
          Ct(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Zd(
            t,
            t.return,
            a
          ), xa(t);
          break;
        case 27:
          mu(t.stateNode);
        case 26:
        case 5:
          Ct(t, t.return), xa(t);
          break;
        case 22:
          t.memoizedState === null && xa(t);
          break;
        case 30:
          xa(t);
          break;
        default:
          xa(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate, u = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Lt(
            u,
            n,
            a
          ), au(4, n);
          break;
        case 1:
          if (Lt(
            u,
            n,
            a
          ), e = n, u = e.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (y) {
              al(e, e.return, y);
            }
          if (e = n, u = e.updateQueue, u !== null) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Uo(f[u], c);
            } catch (y) {
              al(e, e.return, y);
            }
          }
          a && i & 64 && Qd(n), eu(n, n.return);
          break;
        case 27:
          Kd(n);
        case 26:
        case 5:
          Lt(
            u,
            n,
            a
          ), a && e === null && i & 4 && Vd(n), eu(n, n.return);
          break;
        case 12:
          Lt(
            u,
            n,
            a
          );
          break;
        case 31:
          Lt(
            u,
            n,
            a
          ), a && i & 4 && Fd(u, n);
          break;
        case 13:
          Lt(
            u,
            n,
            a
          ), a && i & 4 && kd(u, n);
          break;
        case 22:
          n.memoizedState === null && Lt(
            u,
            n,
            a
          ), eu(n, n.return);
          break;
        case 30:
          break;
        default:
          Lt(
            u,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ac(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Ve(a));
  }
  function zc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ve(l));
  }
  function pt(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ls(
          l,
          t,
          a,
          e
        ), t = t.sibling;
  }
  function ls(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pt(
          l,
          t,
          a,
          e
        ), u & 2048 && au(9, t);
        break;
      case 1:
        pt(
          l,
          t,
          a,
          e
        );
        break;
      case 3:
        pt(
          l,
          t,
          a,
          e
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ve(l)));
        break;
      case 12:
        if (u & 2048) {
          pt(
            l,
            t,
            a,
            e
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, i = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (f) {
            al(t, t.return, f);
          }
        } else
          pt(
            l,
            t,
            a,
            e
          );
        break;
      case 31:
        pt(
          l,
          t,
          a,
          e
        );
        break;
      case 13:
        pt(
          l,
          t,
          a,
          e
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? pt(
          l,
          t,
          a,
          e
        ) : uu(l, t) : n._visibility & 2 ? pt(
          l,
          t,
          a,
          e
        ) : (n._visibility |= 2, ve(
          l,
          t,
          a,
          e,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Ac(i, t);
        break;
      case 24:
        pt(
          l,
          t,
          a,
          e
        ), u & 2048 && zc(t.alternate, t);
        break;
      default:
        pt(
          l,
          t,
          a,
          e
        );
    }
  }
  function ve(l, t, a, e, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, c = a, f = e, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ve(
            n,
            i,
            c,
            f,
            u
          ), au(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null ? b._visibility & 2 ? ve(
            n,
            i,
            c,
            f,
            u
          ) : uu(
            n,
            i
          ) : (b._visibility |= 2, ve(
            n,
            i,
            c,
            f,
            u
          )), u && y & 2048 && Ac(
            i.alternate,
            i
          );
          break;
        case 24:
          ve(
            n,
            i,
            c,
            f,
            u
          ), u && y & 2048 && zc(i.alternate, i);
          break;
        default:
          ve(
            n,
            i,
            c,
            f,
            u
          );
      }
      t = t.sibling;
    }
  }
  function uu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, e = t, u = e.flags;
        switch (e.tag) {
          case 22:
            uu(a, e), u & 2048 && Ac(
              e.alternate,
              e
            );
            break;
          case 24:
            uu(a, e), u & 2048 && zc(e.alternate, e);
            break;
          default:
            uu(a, e);
        }
        t = t.sibling;
      }
  }
  var nu = 8192;
  function he(l, t, a) {
    if (l.subtreeFlags & nu)
      for (l = l.child; l !== null; )
        ts(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function ts(l, t, a) {
    switch (l.tag) {
      case 26:
        he(
          l,
          t,
          a
        ), l.flags & nu && l.memoizedState !== null && G1(
          a,
          St,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        he(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var e = St;
        St = Mn(l.stateNode.containerInfo), he(
          l,
          t,
          a
        ), St = e;
        break;
      case 22:
        l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = nu, nu = 16777216, he(
          l,
          t,
          a
        ), nu = e) : he(
          l,
          t,
          a
        ));
        break;
      default:
        he(
          l,
          t,
          a
        );
    }
  }
  function as(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function iu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          Tl = e, us(
            e,
            l
          );
        }
      as(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        es(l), l = l.sibling;
  }
  function es(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        iu(l), l.flags & 2048 && ca(9, l, l.return);
        break;
      case 3:
        iu(l);
        break;
      case 12:
        iu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, vn(l)) : iu(l);
        break;
      default:
        iu(l);
    }
  }
  function vn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          Tl = e, us(
            e,
            l
          );
        }
      as(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, t, t.return), vn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, vn(t));
          break;
        default:
          vn(t);
      }
      l = l.sibling;
    }
  }
  function us(l, t) {
    for (; Tl !== null; ) {
      var a = Tl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ve(a.memoizedState.cache);
      }
      if (e = a.child, e !== null) e.return = a, Tl = e;
      else
        l: for (a = l; Tl !== null; ) {
          e = Tl;
          var u = e.sibling, n = e.return;
          if (Wd(e), e === a) {
            Tl = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Tl = u;
            break l;
          }
          Tl = n;
        }
    }
  }
  var l1 = {
    getCacheForType: function(l) {
      var t = Dl(Sl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Dl(Sl).controller.signal;
    }
  }, t1 = typeof WeakMap == "function" ? WeakMap : Map, k = 0, fl = null, V = null, K = 0, tl = 0, et = null, fa = !1, ge = !1, Ec = !1, Kt = 0, hl = 0, oa = 0, Ga = 0, _c = 0, ut = 0, be = 0, cu = null, Jl = null, Tc = !1, hn = 0, ns = 0, gn = 1 / 0, bn = null, da = null, El = 0, sa = null, re = null, Jt = 0, Cc = 0, Mc = null, is = null, fu = 0, Dc = null;
  function nt() {
    return (k & 2) !== 0 && K !== 0 ? K & -K : r.T !== null ? Bc() : Af();
  }
  function cs() {
    if (ut === 0)
      if ((K & 536870912) === 0 || W) {
        var l = _u;
        _u <<= 1, (_u & 3932160) === 0 && (_u = 262144), ut = l;
      } else ut = 536870912;
    return l = tt.current, l !== null && (l.flags |= 32), ut;
  }
  function wl(l, t, a) {
    (l === fl && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null) && (Se(l, 0), ma(
      l,
      K,
      ut,
      !1
    )), Oe(l, a), ((k & 2) === 0 || l !== fl) && (l === fl && ((k & 2) === 0 && (Ga |= a), hl === 4 && ma(
      l,
      K,
      ut,
      !1
    )), Mt(l));
  }
  function fs(l, t, a) {
    if ((k & 6) !== 0) throw Error(v(327));
    var e = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || De(l, t), u = e ? u1(l, t) : Uc(l, t, !0), n = e;
    do {
      if (u === 0) {
        ge && !e && ma(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !a1(a)) {
          u = Uc(l, t, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = cu;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (Se(c, i).flags |= 256), i = Uc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Ec && !f) {
                  c.errorRecoveryDisabledLanes |= n, Ga |= n, u = 4;
                  break l;
                }
                n = Jl, Jl = u, n !== null && (Jl === null ? Jl = n : Jl.push.apply(
                  Jl,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Se(l, 0), ma(l, t, 0, !0);
          break;
        }
        l: {
          switch (e = l, n = u, n) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ma(
                e,
                t,
                ut,
                !fa
              );
              break l;
            case 2:
              Jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if ((t & 62914560) === t && (u = hn + 300 - Fl(), 10 < u)) {
            if (ma(
              e,
              t,
              ut,
              !fa
            ), Cu(e, 0, !0) !== 0) break l;
            Jt = t, e.timeoutHandle = Gs(
              os.bind(
                null,
                e,
                a,
                Jl,
                bn,
                Tc,
                t,
                ut,
                Ga,
                be,
                fa,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          os(
            e,
            a,
            Jl,
            bn,
            Tc,
            t,
            ut,
            Ga,
            be,
            fa,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Mt(l);
  }
  function os(l, t, a, e, u, n, i, c, f, y, b, p, h, g) {
    if (l.timeoutHandle = -1, p = t.subtreeFlags, p & 8192 || (p & 16785408) === 16785408) {
      p = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Nt
      }, ts(
        t,
        n,
        p
      );
      var C = (n & 62914560) === n ? hn - Fl() : (n & 4194048) === n ? ns - Fl() : 0;
      if (C = X1(
        p,
        C
      ), C !== null) {
        Jt = n, l.cancelPendingCommit = C(
          bs.bind(
            null,
            l,
            t,
            n,
            a,
            e,
            u,
            i,
            c,
            f,
            b,
            p,
            null,
            h,
            g
          )
        ), ma(l, n, i, !y);
        return;
      }
    }
    bs(
      l,
      t,
      n,
      a,
      e,
      u,
      i,
      c,
      f
    );
  }
  function a1(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var e = 0; e < a.length; e++) {
          var u = a[e], n = u.getSnapshot;
          u = u.value;
          try {
            if (!Pl(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ma(l, t, a, e) {
    t &= ~_c, t &= ~Ga, l.suspendedLanes |= t, l.pingedLanes &= ~t, e && (l.warmLanes |= t), e = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - Il(u), i = 1 << n;
      e[n] = -1, u &= ~i;
    }
    a !== 0 && rf(l, a, t);
  }
  function rn() {
    return (k & 6) === 0 ? (ou(0), !1) : !0;
  }
  function Oc() {
    if (V !== null) {
      if (tl === 0)
        var l = V.return;
      else
        l = V, qt = Ua = null, Ki(l), oe = null, Ke = 0, l = V;
      for (; l !== null; )
        Xd(l.alternate, l), l = l.return;
      V = null;
    }
  }
  function Se(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, z1(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Jt = 0, Oc(), fl = l, V = a = Rt(l.current, null), K = t, tl = 0, et = null, fa = !1, ge = De(l, t), Ec = !1, be = ut = _c = Ga = oa = hl = 0, Jl = cu = null, Tc = !1, (t & 8) !== 0 && (t |= t & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - Il(e), n = 1 << u;
        t |= l[u], e &= ~n;
      }
    return Kt = t, xu(), a;
  }
  function ds(l, t) {
    x = null, r.H = Pe, t === fe || t === Ju ? (t = Co(), tl = 3) : t === Ri ? (t = Co(), tl = 4) : tl = t === cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, et = t, V === null && (hl = 1, cn(
      l,
      dt(t, l.current)
    ));
  }
  function ss() {
    var l = tt.current;
    return l === null ? !0 : (K & 4194048) === K ? vt === null : (K & 62914560) === K || (K & 536870912) !== 0 ? l === vt : !1;
  }
  function ms() {
    var l = r.H;
    return r.H = Pe, l === null ? Pe : l;
  }
  function ys() {
    var l = r.A;
    return r.A = l1, l;
  }
  function Sn() {
    hl = 4, fa || (K & 4194048) !== K && tt.current !== null || (ge = !0), (oa & 134217727) === 0 && (Ga & 134217727) === 0 || fl === null || ma(
      fl,
      K,
      ut,
      !1
    );
  }
  function Uc(l, t, a) {
    var e = k;
    k |= 2;
    var u = ms(), n = ys();
    (fl !== l || K !== t) && (bn = null, Se(l, t)), t = !1;
    var i = hl;
    l: do
      try {
        if (tl !== 0 && V !== null) {
          var c = V, f = et;
          switch (tl) {
            case 8:
              Oc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var y = tl;
              if (tl = 0, et = null, pe(l, c, f, y), a && ge) {
                i = 0;
                break l;
              }
              break;
            default:
              y = tl, tl = 0, et = null, pe(l, c, f, y);
          }
        }
        e1(), i = hl;
        break;
      } catch (b) {
        ds(l, b);
      }
    while (!0);
    return t && l.shellSuspendCounter++, qt = Ua = null, k = e, r.H = u, r.A = n, V === null && (fl = null, K = 0, xu()), i;
  }
  function e1() {
    for (; V !== null; ) vs(V);
  }
  function u1(l, t) {
    var a = k;
    k |= 2;
    var e = ms(), u = ys();
    fl !== l || K !== t ? (bn = null, gn = Fl() + 500, Se(l, t)) : ge = De(
      l,
      t
    );
    l: do
      try {
        if (tl !== 0 && V !== null) {
          t = V;
          var n = et;
          t: switch (tl) {
            case 1:
              tl = 0, et = null, pe(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (_o(n)) {
                tl = 0, et = null, hs(t);
                break;
              }
              t = function() {
                tl !== 2 && tl !== 9 || fl !== l || (tl = 7), Mt(l);
              }, n.then(t, t);
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              _o(n) ? (tl = 0, et = null, hs(t)) : (tl = 0, et = null, pe(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (V.tag) {
                case 26:
                  i = V.memoizedState;
                case 5:
                case 27:
                  var c = V;
                  if (i ? lm(i) : c.stateNode.complete) {
                    tl = 0, et = null;
                    var f = c.sibling;
                    if (f !== null) V = f;
                    else {
                      var y = c.return;
                      y !== null ? (V = y, pn(y)) : V = null;
                    }
                    break t;
                  }
              }
              tl = 0, et = null, pe(l, t, n, 5);
              break;
            case 6:
              tl = 0, et = null, pe(l, t, n, 6);
              break;
            case 8:
              Oc(), hl = 6;
              break l;
            default:
              throw Error(v(462));
          }
        }
        n1();
        break;
      } catch (b) {
        ds(l, b);
      }
    while (!0);
    return qt = Ua = null, r.H = e, r.A = u, k = a, V !== null ? 0 : (fl = null, K = 0, xu(), hl);
  }
  function n1() {
    for (; V !== null && !Dm(); )
      vs(V);
  }
  function vs(l) {
    var t = xd(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? pn(l) : V = t;
  }
  function hs(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Hd(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          K
        );
        break;
      case 11:
        t = Hd(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          K
        );
        break;
      case 5:
        Ki(t);
      default:
        Xd(a, t), t = V = yo(t, Kt), t = xd(a, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? pn(l) : V = t;
  }
  function pe(l, t, a, e) {
    qt = Ua = null, Ki(t), oe = null, Ke = 0;
    var u = t.return;
    try {
      if (w0(
        l,
        u,
        t,
        a,
        K
      )) {
        hl = 1, cn(
          l,
          dt(a, l.current)
        ), V = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw V = u, n;
      hl = 1, cn(
        l,
        dt(a, l.current)
      ), V = null;
      return;
    }
    t.flags & 32768 ? (W || e === 1 ? l = !0 : ge || (K & 536870912) !== 0 ? l = !1 : (fa = l = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = tt.current, e !== null && e.tag === 13 && (e.flags |= 16384))), gs(t, l)) : pn(t);
  }
  function pn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        gs(
          t,
          fa
        );
        return;
      }
      l = t.return;
      var a = F0(
        t.alternate,
        t,
        Kt
      );
      if (a !== null) {
        V = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        V = t;
        return;
      }
      V = t = l;
    } while (t !== null);
    hl === 0 && (hl = 5);
  }
  function gs(l, t) {
    do {
      var a = k0(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, V = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        V = l;
        return;
      }
      V = l = a;
    } while (l !== null);
    hl = 6, V = null;
  }
  function bs(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do
      An();
    while (El !== 0);
    if ((k & 6) !== 0) throw Error(v(327));
    if (t !== null) {
      if (t === l.current) throw Error(v(177));
      if (n = t.lanes | t.childLanes, n |= ri, xm(
        l,
        a,
        n,
        i,
        c,
        f
      ), l === fl && (V = fl = null, K = 0), re = t, sa = l, Jt = a, Cc = n, Mc = u, is = e, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, o1(zu, function() {
        return zs(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
        e = r.T, r.T = null, u = _.p, _.p = 2, i = k, k |= 4;
        try {
          I0(l, t, a);
        } finally {
          k = i, _.p = u, r.T = e;
        }
      }
      El = 1, rs(), Ss(), ps();
    }
  }
  function rs() {
    if (El === 1) {
      El = 0;
      var l = sa, t = re, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = r.T, r.T = null;
        var e = _.p;
        _.p = 2;
        var u = k;
        k |= 4;
        try {
          Id(t, l);
          var n = Zc, i = eo(l.containerInfo), c = n.focusedElem, f = n.selectionRange;
          if (i !== c && c && c.ownerDocument && ao(
            c.ownerDocument.documentElement,
            c
          )) {
            if (f !== null && yi(c)) {
              var y = f.start, b = f.end;
              if (b === void 0 && (b = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  b,
                  c.value.length
                );
              else {
                var p = c.ownerDocument || document, h = p && p.defaultView || window;
                if (h.getSelection) {
                  var g = h.getSelection(), C = c.textContent.length, N = Math.min(f.start, C), il = f.end === void 0 ? N : Math.min(f.end, C);
                  !g.extend && N > il && (i = il, il = N, N = i);
                  var s = to(
                    c,
                    N
                  ), o = to(
                    c,
                    il
                  );
                  if (s && o && (g.rangeCount !== 1 || g.anchorNode !== s.node || g.anchorOffset !== s.offset || g.focusNode !== o.node || g.focusOffset !== o.offset)) {
                    var m = p.createRange();
                    m.setStart(s.node, s.offset), g.removeAllRanges(), N > il ? (g.addRange(m), g.extend(o.node, o.offset)) : (m.setEnd(o.node, o.offset), g.addRange(m));
                  }
                }
              }
            }
            for (p = [], g = c; g = g.parentNode; )
              g.nodeType === 1 && p.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < p.length; c++) {
              var S = p[c];
              S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
            }
          }
          Rn = !!Qc, Zc = Qc = null;
        } finally {
          k = u, _.p = e, r.T = a;
        }
      }
      l.current = t, El = 2;
    }
  }
  function Ss() {
    if (El === 2) {
      El = 0;
      var l = sa, t = re, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = r.T, r.T = null;
        var e = _.p;
        _.p = 2;
        var u = k;
        k |= 4;
        try {
          wd(l, t.alternate, t);
        } finally {
          k = u, _.p = e, r.T = a;
        }
      }
      El = 3;
    }
  }
  function ps() {
    if (El === 4 || El === 3) {
      El = 0, Om();
      var l = sa, t = re, a = Jt, e = is;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? El = 5 : (El = 0, re = sa = null, As(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (da = null), Wn(a), t = t.stateNode, kl && typeof kl.onCommitFiberRoot == "function")
        try {
          kl.onCommitFiberRoot(
            Me,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (e !== null) {
        t = r.T, u = _.p, _.p = 2, r.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          r.T = t, _.p = u;
        }
      }
      (Jt & 3) !== 0 && An(), Mt(l), u = l.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? l === Dc ? fu++ : (fu = 0, Dc = l) : fu = 0, ou(0);
    }
  }
  function As(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ve(t)));
  }
  function An() {
    return rs(), Ss(), ps(), zs();
  }
  function zs() {
    if (El !== 5) return !1;
    var l = sa, t = Cc;
    Cc = 0;
    var a = Wn(Jt), e = r.T, u = _.p;
    try {
      _.p = 32 > a ? 32 : a, r.T = null, a = Mc, Mc = null;
      var n = sa, i = Jt;
      if (El = 0, re = sa = null, Jt = 0, (k & 6) !== 0) throw Error(v(331));
      var c = k;
      if (k |= 4, es(n.current), ls(
        n,
        n.current,
        i,
        a
      ), k = c, ou(0, !1), kl && typeof kl.onPostCommitFiberRoot == "function")
        try {
          kl.onPostCommitFiberRoot(Me, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = u, r.T = e, As(l, t);
    }
  }
  function Es(l, t, a) {
    t = dt(a, t), t = ic(l.stateNode, t, 2), l = ua(l, t, 2), l !== null && (Oe(l, 2), Mt(l));
  }
  function al(l, t, a) {
    if (l.tag === 3)
      Es(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Es(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (da === null || !da.has(e))) {
            l = dt(a, l), a = _d(2), e = ua(t, a, 2), e !== null && (Td(
              a,
              e,
              t,
              l
            ), Oe(e, 2), Mt(e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Nc(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new t1();
      var u = /* @__PURE__ */ new Set();
      e.set(t, u);
    } else
      u = e.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), e.set(t, u));
    u.has(a) || (Ec = !0, u.add(a), l = i1.bind(null, l, t, a), t.then(l, l));
  }
  function i1(l, t, a) {
    var e = l.pingCache;
    e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, fl === l && (K & a) === a && (hl === 4 || hl === 3 && (K & 62914560) === K && 300 > Fl() - hn ? (k & 2) === 0 && Se(l, 0) : _c |= a, be === K && (be = 0)), Mt(l);
  }
  function _s(l, t) {
    t === 0 && (t = bf()), l = Ma(l, t), l !== null && (Oe(l, t), Mt(l));
  }
  function c1(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), _s(l, a);
  }
  function f1(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode, u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    e !== null && e.delete(t), _s(l, a);
  }
  function o1(l, t) {
    return Ln(l, t);
  }
  var zn = null, Ae = null, Hc = !1, En = !1, Rc = !1, ya = 0;
  function Mt(l) {
    l !== Ae && l.next === null && (Ae === null ? zn = Ae = l : Ae = Ae.next = l), En = !0, Hc || (Hc = !0, s1());
  }
  function ou(l, t) {
    if (!Rc && En) {
      Rc = !0;
      do
        for (var a = !1, e = zn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes, c = e.pingedLanes;
              n = (1 << 31 - Il(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, Ds(e, n));
          } else
            n = K, n = Cu(
              e,
              e === fl ? n : 0,
              e.cancelPendingCommit !== null || e.timeoutHandle !== -1
            ), (n & 3) === 0 || De(e, n) || (a = !0, Ds(e, n));
          e = e.next;
        }
      while (a);
      Rc = !1;
    }
  }
  function d1() {
    Ts();
  }
  function Ts() {
    En = Hc = !1;
    var l = 0;
    ya !== 0 && A1() && (l = ya);
    for (var t = Fl(), a = null, e = zn; e !== null; ) {
      var u = e.next, n = Cs(e, t);
      n === 0 ? (e.next = null, a === null ? zn = u : a.next = u, u === null && (Ae = a)) : (a = e, (l !== 0 || (n & 3) !== 0) && (En = !0)), e = u;
    }
    El !== 0 && El !== 5 || ou(l), ya !== 0 && (ya = 0);
  }
  function Cs(l, t) {
    for (var a = l.suspendedLanes, e = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - Il(n), c = 1 << i, f = u[i];
      f === -1 ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = jm(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = fl, a = K, a = Cu(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e = l.callbackNode, a === 0 || l === t && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null)
      return e !== null && e !== null && Kn(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || De(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (e !== null && Kn(e), Wn(a)) {
        case 2:
        case 8:
          a = hf;
          break;
        case 32:
          a = zu;
          break;
        case 268435456:
          a = gf;
          break;
        default:
          a = zu;
      }
      return e = Ms.bind(null, l), a = Ln(a, e), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return e !== null && e !== null && Kn(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Ms(l, t) {
    if (El !== 0 && El !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (An() && l.callbackNode !== a)
      return null;
    var e = K;
    return e = Cu(
      l,
      l === fl ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e === 0 ? null : (fs(l, e, t), Cs(l, Fl()), l.callbackNode != null && l.callbackNode === a ? Ms.bind(null, l) : null);
  }
  function Ds(l, t) {
    if (An()) return null;
    fs(l, t, !0);
  }
  function s1() {
    E1(function() {
      (k & 6) !== 0 ? Ln(
        vf,
        d1
      ) : Ts();
    });
  }
  function Bc() {
    if (ya === 0) {
      var l = ie;
      l === 0 && (l = Eu, Eu <<= 1, (Eu & 261888) === 0 && (Eu = 256)), ya = l;
    }
    return ya;
  }
  function Os(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Uu("" + l);
  }
  function Us(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function m1(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = Os(
        (u[Ql] || null).action
      ), i = e.submitter;
      i && (t = (t = i[Ql] || null) ? Os(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new Bu(
        "action",
        "action",
        null,
        e,
        u
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (e.defaultPrevented) {
                if (ya !== 0) {
                  var f = i ? Us(u, i) : new FormData(u);
                  lc(
                    a,
                    {
                      pending: !0,
                      data: f,
                      method: u.method,
                      action: n
                    },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), f = i ? Us(u, i) : new FormData(u), lc(
                  a,
                  {
                    pending: !0,
                    data: f,
                    method: u.method,
                    action: n
                  },
                  n,
                  f
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var qc = 0; qc < bi.length; qc++) {
    var Yc = bi[qc], y1 = Yc.toLowerCase(), v1 = Yc[0].toUpperCase() + Yc.slice(1);
    rt(
      y1,
      "on" + v1
    );
  }
  rt(io, "onAnimationEnd"), rt(co, "onAnimationIteration"), rt(fo, "onAnimationStart"), rt("dblclick", "onDoubleClick"), rt("focusin", "onFocus"), rt("focusout", "onBlur"), rt(U0, "onTransitionRun"), rt(N0, "onTransitionStart"), rt(H0, "onTransitionCancel"), rt(oo, "onTransitionEnd"), Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]), Ea(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ea(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ea("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ea(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ea(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ea(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var du = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), h1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du)
  );
  function Ns(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a], u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i], f = c.instance, y = c.currentTarget;
            if (c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = y;
            try {
              n(u);
            } catch (b) {
              ju(b);
            }
            u.currentTarget = null, n = f;
          }
        else
          for (i = 0; i < e.length; i++) {
            if (c = e[i], f = c.instance, y = c.currentTarget, c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = y;
            try {
              n(u);
            } catch (b) {
              ju(b);
            }
            u.currentTarget = null, n = f;
          }
      }
    }
  }
  function L(l, t) {
    var a = t[$n];
    a === void 0 && (a = t[$n] = /* @__PURE__ */ new Set());
    var e = l + "__bubble";
    a.has(e) || (Hs(t, l, 2, !1), a.add(e));
  }
  function jc(l, t, a) {
    var e = 0;
    t && (e |= 4), Hs(
      a,
      l,
      e,
      t
    );
  }
  var _n = "_reactListening" + Math.random().toString(36).slice(2);
  function xc(l) {
    if (!l[_n]) {
      l[_n] = !0, _f.forEach(function(a) {
        a !== "selectionchange" && (h1.has(a) || jc(a, !1, l), jc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_n] || (t[_n] = !0, jc("selectionchange", !1, t));
    }
  }
  function Hs(l, t, a, e) {
    switch (cm(t)) {
      case 2:
        var u = V1;
        break;
      case 8:
        u = L1;
        break;
      default:
        u = Pc;
    }
    a = u.bind(
      null,
      t,
      a,
      l
    ), u = void 0, !ui || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), e ? u !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, a, !0) : u !== void 0 ? l.addEventListener(t, a, {
      passive: u
    }) : l.addEventListener(t, a, !1);
  }
  function Gc(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (; ; ) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = Va(c), i === null) return;
            if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              e = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    Yf(function() {
      var y = n, b = ai(a), p = [];
      l: {
        var h = so.get(l);
        if (h !== void 0) {
          var g = Bu, C = l;
          switch (l) {
            case "keypress":
              if (Hu(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = f0;
              break;
            case "focusin":
              C = "focus", g = fi;
              break;
            case "focusout":
              C = "blur", g = fi;
              break;
            case "beforeblur":
            case "afterblur":
              g = fi;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Gf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Fm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = s0;
              break;
            case io:
            case co:
            case fo:
              g = Pm;
              break;
            case oo:
              g = y0;
              break;
            case "scroll":
            case "scrollend":
              g = Wm;
              break;
            case "wheel":
              g = h0;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = t0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Qf;
              break;
            case "toggle":
            case "beforetoggle":
              g = b0;
          }
          var N = (t & 4) !== 0, il = !N && (l === "scroll" || l === "scrollend"), s = N ? h !== null ? h + "Capture" : null : h;
          N = [];
          for (var o = y, m; o !== null; ) {
            var S = o;
            if (m = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || m === null || s === null || (S = He(o, s), S != null && N.push(
              su(o, S, m)
            )), il) break;
            o = o.return;
          }
          0 < N.length && (h = new g(
            h,
            C,
            null,
            a,
            b
          ), p.push({ event: h, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", h && a !== ti && (C = a.relatedTarget || a.fromElement) && (Va(C) || C[Za]))
            break l;
          if ((g || h) && (h = b.window === b ? b : (h = b.ownerDocument) ? h.defaultView || h.parentWindow : window, g ? (C = a.relatedTarget || a.toElement, g = y, C = C ? Va(C) : null, C !== null && (il = B(C), N = C.tag, C !== il || N !== 5 && N !== 27 && N !== 6) && (C = null)) : (g = null, C = y), g !== C)) {
            if (N = Gf, S = "onMouseLeave", s = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (N = Qf, S = "onPointerLeave", s = "onPointerEnter", o = "pointer"), il = g == null ? h : Ne(g), m = C == null ? h : Ne(C), h = new N(
              S,
              o + "leave",
              g,
              a,
              b
            ), h.target = il, h.relatedTarget = m, S = null, Va(b) === y && (N = new N(
              s,
              o + "enter",
              C,
              a,
              b
            ), N.target = m, N.relatedTarget = il, S = N), il = S, g && C)
              t: {
                for (N = g1, s = g, o = C, m = 0, S = s; S; S = N(S))
                  m++;
                S = 0;
                for (var O = o; O; O = N(O))
                  S++;
                for (; 0 < m - S; )
                  s = N(s), m--;
                for (; 0 < S - m; )
                  o = N(o), S--;
                for (; m--; ) {
                  if (s === o || o !== null && s === o.alternate) {
                    N = s;
                    break t;
                  }
                  s = N(s), o = N(o);
                }
                N = null;
              }
            else N = null;
            g !== null && Rs(
              p,
              h,
              g,
              N,
              !1
            ), C !== null && il !== null && Rs(
              p,
              il,
              C,
              N,
              !0
            );
          }
        }
        l: {
          if (h = y ? Ne(y) : window, g = h.nodeName && h.nodeName.toLowerCase(), g === "select" || g === "input" && h.type === "file")
            var $ = $f;
          else if (wf(h))
            if (Ff)
              $ = M0;
            else {
              $ = T0;
              var D = _0;
            }
          else
            g = h.nodeName, !g || g.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? y && li(y.elementType) && ($ = $f) : $ = C0;
          if ($ && ($ = $(l, y))) {
            Wf(
              p,
              $,
              a,
              b
            );
            break l;
          }
          D && D(l, h, y), l === "focusout" && y && h.type === "number" && y.memoizedProps.value != null && Pn(h, "number", h.value);
        }
        switch (D = y ? Ne(y) : window, l) {
          case "focusin":
            (wf(D) || D.contentEditable === "true") && (Ia = D, vi = y, Xe = null);
            break;
          case "focusout":
            Xe = vi = Ia = null;
            break;
          case "mousedown":
            hi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hi = !1, uo(p, a, b);
            break;
          case "selectionchange":
            if (O0) break;
          case "keydown":
          case "keyup":
            uo(p, a, b);
        }
        var G;
        if (di)
          l: {
            switch (l) {
              case "compositionstart":
                var J = "onCompositionStart";
                break l;
              case "compositionend":
                J = "onCompositionEnd";
                break l;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break l;
            }
            J = void 0;
          }
        else
          ka ? Kf(l, a) && (J = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (J = "onCompositionStart");
        J && (Zf && a.locale !== "ko" && (ka || J !== "onCompositionStart" ? J === "onCompositionEnd" && ka && (G = jf()) : (kt = b, ni = "value" in kt ? kt.value : kt.textContent, ka = !0)), D = Tn(y, J), 0 < D.length && (J = new Xf(
          J,
          l,
          null,
          a,
          b
        ), p.push({ event: J, listeners: D }), G ? J.data = G : (G = Jf(a), G !== null && (J.data = G)))), (G = S0 ? p0(l, a) : A0(l, a)) && (J = Tn(y, "onBeforeInput"), 0 < J.length && (D = new Xf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          b
        ), p.push({
          event: D,
          listeners: J
        }), D.data = G)), m1(
          p,
          l,
          y,
          a,
          b
        );
      }
      Ns(p, t);
    });
  }
  function su(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function Tn(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = He(l, a), u != null && e.unshift(
        su(l, u, n)
      ), u = He(l, t), u != null && e.push(
        su(l, u, n)
      )), l.tag === 3) return e;
      l = l.return;
    }
    return [];
  }
  function g1(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Rs(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a, f = c.alternate, y = c.stateNode;
      if (c = c.tag, f !== null && f === e) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (f = y, u ? (y = He(a, n), y != null && i.unshift(
        su(a, y, f)
      )) : u || (y = He(a, n), y != null && i.push(
        su(a, y, f)
      ))), a = a.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var b1 = /\r\n?/g, r1 = /\u0000|\uFFFD/g;
  function Bs(l) {
    return (typeof l == "string" ? l : "" + l).replace(b1, `
`).replace(r1, "");
  }
  function qs(l, t) {
    return t = Bs(t), Bs(l) === t;
  }
  function nl(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string" ? t === "body" || t === "textarea" && e === "" || Wa(l, e) : (typeof e == "number" || typeof e == "bigint") && t !== "body" && Wa(l, "" + e);
        break;
      case "className":
        Du(l, "class", e);
        break;
      case "tabIndex":
        Du(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Du(l, a, e);
        break;
      case "style":
        Bf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Du(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Uu("" + e), l.setAttribute(a, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && nl(l, t, "name", u.name, u, null), nl(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), nl(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), nl(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (nl(l, t, "encType", u.encType, u, null), nl(l, t, "method", u.method, u, null), nl(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Uu("" + e), l.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (l.onclick = Nt);
        break;
      case "onScroll":
        e != null && L("scroll", l);
        break;
      case "onScrollEnd":
        e != null && L("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(v(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Uu("" + e), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "" + e) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0 ? l.setAttribute(a, "") : e !== !1 && e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? l.removeAttribute(a) : l.setAttribute(a, e);
        break;
      case "popover":
        L("beforetoggle", l), L("toggle", l), Mu(l, "popover", e);
        break;
      case "xlinkActuate":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          e
        );
        break;
      case "xlinkArcrole":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          e
        );
        break;
      case "xlinkRole":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          e
        );
        break;
      case "xlinkShow":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          e
        );
        break;
      case "xlinkTitle":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          e
        );
        break;
      case "xlinkType":
        Ut(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          e
        );
        break;
      case "xmlBase":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          e
        );
        break;
      case "xmlLang":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          e
        );
        break;
      case "xmlSpace":
        Ut(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          e
        );
        break;
      case "is":
        Mu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Jm.get(a) || a, Mu(l, a, e));
    }
  }
  function Xc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Bf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(v(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string" ? Wa(l, e) : (typeof e == "number" || typeof e == "bigint") && Wa(l, "" + e);
        break;
      case "onScroll":
        e != null && L("scroll", l);
        break;
      case "onScrollEnd":
        e != null && L("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Nt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Tf.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), n = l[Ql] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof e == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, e, u);
              break l;
            }
            a in l ? l[a] = e : e === !0 ? l.setAttribute(a, "") : Mu(l, a, e);
          }
    }
  }
  function Ul(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        L("error", l), L("load", l);
        var e = !1, u = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, t));
                default:
                  nl(l, t, n, i, a, null);
              }
          }
        u && nl(l, t, "srcSet", a.srcSet, a, null), e && nl(l, t, "src", a.src, a, null);
        return;
      case "input":
        L("invalid", l);
        var c = n = i = u = null, f = null, y = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var b = a[e];
            if (b != null)
              switch (e) {
                case "name":
                  u = b;
                  break;
                case "type":
                  i = b;
                  break;
                case "checked":
                  f = b;
                  break;
                case "defaultChecked":
                  y = b;
                  break;
                case "value":
                  n = b;
                  break;
                case "defaultValue":
                  c = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(v(137, t));
                  break;
                default:
                  nl(l, t, e, b, a, null);
              }
          }
        Uf(
          l,
          n,
          c,
          f,
          y,
          i,
          u,
          !1
        );
        return;
      case "select":
        L("invalid", l), e = i = n = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (c = a[u], c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                nl(l, t, u, c, a, null);
            }
        t = n, a = i, l.multiple = !!e, t != null ? wa(l, !!e, t, !1) : a != null && wa(l, !!e, a, !0);
        return;
      case "textarea":
        L("invalid", l), n = u = e = null;
        for (i in a)
          if (a.hasOwnProperty(i) && (c = a[i], c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(v(91));
                break;
              default:
                nl(l, t, i, c, a, null);
            }
        Hf(l, e, u, n);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && (e = a[f], e != null))
            switch (f) {
              case "selected":
                l.selected = e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                nl(l, t, f, e, a, null);
            }
        return;
      case "dialog":
        L("beforetoggle", l), L("toggle", l), L("cancel", l), L("close", l);
        break;
      case "iframe":
      case "object":
        L("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < du.length; e++)
          L(du[e], l);
        break;
      case "image":
        L("error", l), L("load", l);
        break;
      case "details":
        L("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        L("error", l), L("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in a)
          if (a.hasOwnProperty(y) && (e = a[y], e != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, t));
              default:
                nl(l, t, y, e, a, null);
            }
        return;
      default:
        if (li(t)) {
          for (b in a)
            a.hasOwnProperty(b) && (e = a[b], e !== void 0 && Xc(
              l,
              t,
              b,
              e,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (e = a[c], e != null && nl(l, t, c, e, a, null));
  }
  function S1(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, n = null, i = null, c = null, f = null, y = null, b = null;
        for (g in a) {
          var p = a[g];
          if (a.hasOwnProperty(g) && p != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = p;
              default:
                e.hasOwnProperty(g) || nl(l, t, g, null, e, p);
            }
        }
        for (var h in e) {
          var g = e[h];
          if (p = a[h], e.hasOwnProperty(h) && (g != null || p != null))
            switch (h) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                y = g;
                break;
              case "defaultChecked":
                b = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(v(137, t));
                break;
              default:
                g !== p && nl(
                  l,
                  t,
                  h,
                  g,
                  e,
                  p
                );
            }
        }
        In(
          l,
          i,
          c,
          f,
          y,
          b,
          n,
          u
        );
        return;
      case "select":
        g = i = c = h = null;
        for (n in a)
          if (f = a[n], a.hasOwnProperty(n) && f != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                e.hasOwnProperty(n) || nl(
                  l,
                  t,
                  n,
                  null,
                  e,
                  f
                );
            }
        for (u in e)
          if (n = e[u], f = a[u], e.hasOwnProperty(u) && (n != null || f != null))
            switch (u) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && nl(
                  l,
                  t,
                  u,
                  n,
                  e,
                  f
                );
            }
        t = c, a = i, e = g, h != null ? wa(l, !!a, h, !1) : !!e != !!a && (t != null ? wa(l, !!a, t, !0) : wa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        g = h = null;
        for (c in a)
          if (u = a[c], a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                nl(l, t, c, null, e, u);
            }
        for (i in e)
          if (u = e[i], n = a[i], e.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                h = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(v(91));
                break;
              default:
                u !== n && nl(l, t, i, u, e, n);
            }
        Nf(l, h, g);
        return;
      case "option":
        for (var C in a)
          if (h = a[C], a.hasOwnProperty(C) && h != null && !e.hasOwnProperty(C))
            switch (C) {
              case "selected":
                l.selected = !1;
                break;
              default:
                nl(
                  l,
                  t,
                  C,
                  null,
                  e,
                  h
                );
            }
        for (f in e)
          if (h = e[f], g = a[f], e.hasOwnProperty(f) && h !== g && (h != null || g != null))
            switch (f) {
              case "selected":
                l.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                nl(
                  l,
                  t,
                  f,
                  h,
                  e,
                  g
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var N in a)
          h = a[N], a.hasOwnProperty(N) && h != null && !e.hasOwnProperty(N) && nl(l, t, N, null, e, h);
        for (y in e)
          if (h = e[y], g = a[y], e.hasOwnProperty(y) && h !== g && (h != null || g != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(v(137, t));
                break;
              default:
                nl(
                  l,
                  t,
                  y,
                  h,
                  e,
                  g
                );
            }
        return;
      default:
        if (li(t)) {
          for (var il in a)
            h = a[il], a.hasOwnProperty(il) && h !== void 0 && !e.hasOwnProperty(il) && Xc(
              l,
              t,
              il,
              void 0,
              e,
              h
            );
          for (b in e)
            h = e[b], g = a[b], !e.hasOwnProperty(b) || h === g || h === void 0 && g === void 0 || Xc(
              l,
              t,
              b,
              h,
              e,
              g
            );
          return;
        }
    }
    for (var s in a)
      h = a[s], a.hasOwnProperty(s) && h != null && !e.hasOwnProperty(s) && nl(l, t, s, null, e, h);
    for (p in e)
      h = e[p], g = a[p], !e.hasOwnProperty(p) || h === g || h == null && g == null || nl(l, t, p, h, e, g);
  }
  function Ys(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function p1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0; e < a.length; e++) {
        var u = a[e], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && Ys(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e], y = f.startTime;
            if (y > c) break;
            var b = f.transferSize, p = f.initiatorType;
            b && Ys(p) && (f = f.responseEnd, i += b * (f < c ? 1 : (c - y) / (f - y)));
          }
          if (--e, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Qc = null, Zc = null;
  function Cn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function js(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xs(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Vc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Lc = null;
  function A1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Lc ? !1 : (Lc = l, !0) : (Lc = null, !1);
  }
  var Gs = typeof setTimeout == "function" ? setTimeout : void 0, z1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Xs = typeof Promise == "function" ? Promise : void 0, E1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xs < "u" ? function(l) {
    return Xs.resolve(null).then(l).catch(_1);
  } : Gs;
  function _1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function va(l) {
    return l === "head";
  }
  function Qs(l, t) {
    var a = t, e = 0;
    do {
      var u = a.nextSibling;
      if (l.removeChild(a), u && u.nodeType === 8)
        if (a = u.data, a === "/$" || a === "/&") {
          if (e === 0) {
            l.removeChild(u), Te(t);
            return;
          }
          e--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          e++;
        else if (a === "html")
          mu(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, mu(a);
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Ue] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = i;
          }
        } else
          a === "body" && mu(l.ownerDocument.body);
      a = u;
    } while (a);
    Te(t);
  }
  function Zs(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), e && e.nodeType === 8)
        if (a = e.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = e;
    } while (a);
  }
  function Kc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Kc(a), Fn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function T1(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (e) {
        if (!l[Ue])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = ht(l.nextSibling), l === null) break;
    }
    return null;
  }
  function C1(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function Vs(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function Jc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function wc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function M1(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var e = function() {
        t(), a.removeEventListener("DOMContentLoaded", e);
      };
      a.addEventListener("DOMContentLoaded", e), l._reactRetry = e;
    }
  }
  function ht(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Wc = null;
  function Ls(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return ht(l.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ks(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Js(l, t, a) {
    switch (t = Cn(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(v(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(v(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(v(454));
        return l;
      default:
        throw Error(v(451));
    }
  }
  function mu(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Fn(l);
  }
  var gt = /* @__PURE__ */ new Map(), ws = /* @__PURE__ */ new Set();
  function Mn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var wt = _.d;
  _.d = {
    f: D1,
    r: O1,
    D: U1,
    C: N1,
    L: H1,
    m: R1,
    X: q1,
    S: B1,
    M: Y1
  };
  function D1() {
    var l = wt.f(), t = rn();
    return l || t;
  }
  function O1(l) {
    var t = La(l);
    t !== null && t.tag === 5 && t.type === "form" ? dd(t) : wt.r(l);
  }
  var ze = typeof document > "u" ? null : document;
  function Ws(l, t, a) {
    var e = ze;
    if (e && typeof t == "string" && t) {
      var u = ft(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), ws.has(u) || (ws.add(u), l = { rel: l, crossOrigin: a, href: t }, e.querySelector(u) === null && (t = e.createElement("link"), Ul(t, "link", l), _l(t), e.head.appendChild(t)));
    }
  }
  function U1(l) {
    wt.D(l), Ws("dns-prefetch", l, null);
  }
  function N1(l, t) {
    wt.C(l, t), Ws("preconnect", l, t);
  }
  function H1(l, t, a) {
    wt.L(l, t, a);
    var e = ze;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + ft(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + ft(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + ft(
        a.imageSizes
      ) + '"]')) : u += '[href="' + ft(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Ee(l);
          break;
        case "script":
          n = _e(l);
      }
      gt.has(n) || (l = H(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), gt.set(n, l), e.querySelector(u) !== null || t === "style" && e.querySelector(yu(n)) || t === "script" && e.querySelector(vu(n)) || (t = e.createElement("link"), Ul(t, "link", l), _l(t), e.head.appendChild(t)));
    }
  }
  function R1(l, t) {
    wt.m(l, t);
    var a = ze;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + ft(e) + '"][href="' + ft(l) + '"]', n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _e(l);
      }
      if (!gt.has(n) && (l = H({ rel: "modulepreload", href: l }, t), gt.set(n, l), a.querySelector(u) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(vu(n)))
              return;
        }
        e = a.createElement("link"), Ul(e, "link", l), _l(e), a.head.appendChild(e);
      }
    }
  }
  function B1(l, t, a) {
    wt.S(l, t, a);
    var e = ze;
    if (e && l) {
      var u = Ka(e).hoistableStyles, n = Ee(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = e.querySelector(
          yu(n)
        ))
          c.loading = 5;
        else {
          l = H(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = gt.get(n)) && $c(l, a);
          var f = i = e.createElement("link");
          _l(f), Ul(f, "link", l), f._p = new Promise(function(y, b) {
            f.onload = y, f.onerror = b;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Dn(i, t, e);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, u.set(n, i);
      }
    }
  }
  function q1(l, t) {
    wt.X(l, t);
    var a = ze;
    if (a && l) {
      var e = Ka(a).hoistableScripts, u = _e(l), n = e.get(u);
      n || (n = a.querySelector(vu(u)), n || (l = H({ src: l, async: !0 }, t), (t = gt.get(u)) && Fc(l, t), n = a.createElement("script"), _l(n), Ul(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function Y1(l, t) {
    wt.M(l, t);
    var a = ze;
    if (a && l) {
      var e = Ka(a).hoistableScripts, u = _e(l), n = e.get(u);
      n || (n = a.querySelector(vu(u)), n || (l = H({ src: l, async: !0, type: "module" }, t), (t = gt.get(u)) && Fc(l, t), n = a.createElement("script"), _l(n), Ul(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function $s(l, t, a, e) {
    var u = (u = Z.current) ? Mn(u) : null;
    if (!u) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ee(a.href), a = Ka(
          u
        ).hoistableStyles, e = a.get(t), e || (e = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Ee(a.href);
          var n = Ka(
            u
          ).hoistableStyles, i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = u.querySelector(
            yu(l)
          )) && !n._p && (i.instance = n, i.state.loading = 5), gt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, gt.set(l, a), n || j1(
            u,
            l,
            a,
            i.state
          ))), t && e === null)
            throw Error(v(528, ""));
          return i;
        }
        if (t && e !== null)
          throw Error(v(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _e(a), a = Ka(
          u
        ).hoistableScripts, e = a.get(t), e || (e = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(v(444, l));
    }
  }
  function Ee(l) {
    return 'href="' + ft(l) + '"';
  }
  function yu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Fs(l) {
    return H({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function j1(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? e.loading = 1 : (t = l.createElement("link"), e.preload = t, t.addEventListener("load", function() {
      return e.loading |= 1;
    }), t.addEventListener("error", function() {
      return e.loading |= 2;
    }), Ul(t, "link", a), _l(t), l.head.appendChild(t));
  }
  function _e(l) {
    return '[src="' + ft(l) + '"]';
  }
  function vu(l) {
    return "script[async]" + l;
  }
  function ks(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var e = l.querySelector(
            'style[data-href~="' + ft(a.href) + '"]'
          );
          if (e)
            return t.instance = e, _l(e), e;
          var u = H({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return e = (l.ownerDocument || l).createElement(
            "style"
          ), _l(e), Ul(e, "style", u), Dn(e, a.precedence, l), t.instance = e;
        case "stylesheet":
          u = Ee(a.href);
          var n = l.querySelector(
            yu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, _l(n), n;
          e = Fs(a), (u = gt.get(u)) && $c(e, u), n = (l.ownerDocument || l).createElement("link"), _l(n);
          var i = n;
          return i._p = new Promise(function(c, f) {
            i.onload = c, i.onerror = f;
          }), Ul(n, "link", e), t.state.loading |= 4, Dn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = _e(a.src), (u = l.querySelector(
            vu(n)
          )) ? (t.instance = u, _l(u), u) : (e = a, (u = gt.get(n)) && (e = H({}, a), Fc(e, u)), l = l.ownerDocument || l, u = l.createElement("script"), _l(u), Ul(u, "link", e), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(v(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, Dn(e, a.precedence, l));
    return t.instance;
  }
  function Dn(l, t, a) {
    for (var e = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = e.length ? e[e.length - 1] : null, n = u, i = 0; i < e.length; i++) {
      var c = e[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function $c(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Fc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var On = null;
  function Is(l, t, a) {
    if (On === null) {
      var e = /* @__PURE__ */ new Map(), u = On = /* @__PURE__ */ new Map();
      u.set(a, e);
    } else
      u = On, e = u.get(a), e || (e = /* @__PURE__ */ new Map(), u.set(a, e));
    if (e.has(l)) return e;
    for (e.set(l, null), a = a.getElementsByTagName(l), u = 0; u < a.length; u++) {
      var n = a[u];
      if (!(n[Ue] || n[Cl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function Ps(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function x1(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function lm(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function G1(l, t, a, e) {
    if (a.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = Ee(e.href), n = t.querySelector(
          yu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Un.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, _l(n);
          return;
        }
        n = t.ownerDocument || t, e = Fs(e), (u = gt.get(u)) && $c(e, u), n = n.createElement("link"), _l(n);
        var i = n;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Ul(n, "link", e), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Un.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var kc = 0;
  function X1(l, t) {
    return l.stylesheets && l.count === 0 && Hn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var e = setTimeout(function() {
        if (l.stylesheets && Hn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && kc === 0 && (kc = 62500 * p1());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Hn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > kc ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(e), clearTimeout(u);
      };
    } : null;
  }
  function Un() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Hn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Nn = null;
  function Hn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Nn = /* @__PURE__ */ new Map(), t.forEach(Q1, l), Nn = null, Un.call(l));
  }
  function Q1(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Nn.get(l);
      if (a) var e = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Nn.set(l, a);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), e = i);
        }
        e && a.set(null, e);
      }
      u = t.instance, i = u.getAttribute("data-precedence"), n = a.get(i) || e, n === e && a.set(null, u), a.set(i, u), this.count++, e = Un.bind(this), u.addEventListener("load", e), u.addEventListener("error", e), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var hu = {
    $$typeof: Nl,
    Provider: null,
    Consumer: null,
    _currentValue: R,
    _currentValue2: R,
    _threadCount: 0
  };
  function Z1(l, t, a, e, u, n, i, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jn(0), this.hiddenUpdates = Jn(null), this.identifierPrefix = e, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function tm(l, t, a, e, u, n, i, c, f, y, b, p) {
    return l = new Z1(
      l,
      t,
      a,
      i,
      f,
      y,
      b,
      p,
      c
    ), t = 1, n === !0 && (t |= 24), n = lt(3, null, null, t), l.current = n, n.stateNode = l, t = Ui(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: e,
      isDehydrated: a,
      cache: t
    }, Bi(n), l;
  }
  function am(l) {
    return l ? (l = te, l) : te;
  }
  function em(l, t, a, e, u, n) {
    u = am(u), e.context === null ? e.context = u : e.pendingContext = u, e = ea(t), e.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (e.callback = n), a = ua(l, e, t), a !== null && (wl(a, l, t), we(a, l, t));
  }
  function um(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ic(l, t) {
    um(l, t), (l = l.alternate) && um(l, t);
  }
  function nm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ma(l, 67108864);
      t !== null && wl(t, l, 67108864), Ic(l, 67108864);
    }
  }
  function im(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = wn(t);
      var a = Ma(l, t);
      a !== null && wl(a, l, t), Ic(l, t);
    }
  }
  var Rn = !0;
  function V1(l, t, a, e) {
    var u = r.T;
    r.T = null;
    var n = _.p;
    try {
      _.p = 2, Pc(l, t, a, e);
    } finally {
      _.p = n, r.T = u;
    }
  }
  function L1(l, t, a, e) {
    var u = r.T;
    r.T = null;
    var n = _.p;
    try {
      _.p = 8, Pc(l, t, a, e);
    } finally {
      _.p = n, r.T = u;
    }
  }
  function Pc(l, t, a, e) {
    if (Rn) {
      var u = lf(e);
      if (u === null)
        Gc(
          l,
          t,
          e,
          Bn,
          a
        ), fm(l, e);
      else if (J1(
        u,
        l,
        t,
        a,
        e
      ))
        e.stopPropagation();
      else if (fm(l, e), t & 4 && -1 < K1.indexOf(l)) {
        for (; u !== null; ) {
          var n = La(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = za(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << 31 - Il(i);
                      c.entanglements[1] |= f, i &= ~f;
                    }
                    Mt(n), (k & 6) === 0 && (gn = Fl() + 500, ou(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Ma(n, 2), c !== null && wl(c, n, 2), rn(), Ic(n, 2);
            }
          if (n = lf(e), n === null && Gc(
            l,
            t,
            e,
            Bn,
            a
          ), n === u) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else
        Gc(
          l,
          t,
          e,
          null,
          a
        );
    }
  }
  function lf(l) {
    return l = ai(l), tf(l);
  }
  var Bn = null;
  function tf(l) {
    if (Bn = null, l = Va(l), l !== null) {
      var t = B(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = yl(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = Rl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Bn = l, null;
  }
  function cm(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Um()) {
          case vf:
            return 2;
          case hf:
            return 8;
          case zu:
          case Nm:
            return 32;
          case gf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var af = !1, ha = null, ga = null, ba = null, gu = /* @__PURE__ */ new Map(), bu = /* @__PURE__ */ new Map(), ra = [], K1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function fm(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ha = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        ba = null;
        break;
      case "pointerover":
      case "pointerout":
        gu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bu.delete(t.pointerId);
    }
  }
  function ru(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: e,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = La(t), t !== null && nm(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function J1(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ha = ru(
          ha,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "dragenter":
        return ga = ru(
          ga,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "mouseover":
        return ba = ru(
          ba,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return gu.set(
          n,
          ru(
            gu.get(n) || null,
            l,
            t,
            a,
            e,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, bu.set(
          n,
          ru(
            bu.get(n) || null,
            l,
            t,
            a,
            e,
            u
          )
        ), !0;
    }
    return !1;
  }
  function om(l) {
    var t = Va(l.target);
    if (t !== null) {
      var a = B(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = yl(a), t !== null) {
            l.blockedOn = t, zf(l.priority, function() {
              im(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Rl(a), t !== null) {
            l.blockedOn = t, zf(l.priority, function() {
              im(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = lf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(
          a.type,
          a
        );
        ti = e, a.target.dispatchEvent(e), ti = null;
      } else
        return t = La(a), t !== null && nm(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function dm(l, t, a) {
    qn(l) && a.delete(t);
  }
  function w1() {
    af = !1, ha !== null && qn(ha) && (ha = null), ga !== null && qn(ga) && (ga = null), ba !== null && qn(ba) && (ba = null), gu.forEach(dm), bu.forEach(dm);
  }
  function Yn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, af || (af = !0, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      w1
    )));
  }
  var jn = null;
  function sm(l) {
    jn !== l && (jn = l, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      function() {
        jn === l && (jn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], e = l[t + 1], u = l[t + 2];
          if (typeof e != "function") {
            if (tf(e || a) === null)
              continue;
            break;
          }
          var n = La(a);
          n !== null && (l.splice(t, 3), t -= 3, lc(
            n,
            {
              pending: !0,
              data: u,
              method: a.method,
              action: e
            },
            e,
            u
          ));
        }
      }
    ));
  }
  function Te(l) {
    function t(f) {
      return Yn(f, l);
    }
    ha !== null && Yn(ha, l), ga !== null && Yn(ga, l), ba !== null && Yn(ba, l), gu.forEach(t), bu.forEach(t);
    for (var a = 0; a < ra.length; a++) {
      var e = ra[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < ra.length && (a = ra[0], a.blockedOn === null); )
      om(a), a.blockedOn === null && ra.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (e = 0; e < a.length; e += 3) {
        var u = a[e], n = a[e + 1], i = u[Ql] || null;
        if (typeof n == "function")
          i || sm(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[Ql] || null)
              c = i.formAction;
            else if (tf(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? a[e + 1] = c : (a.splice(e, 3), e -= 3), sm(a);
        }
      }
  }
  function mm() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return u = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), e || setTimeout(a, 20);
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var e = !1, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        e = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function ef(l) {
    this._internalRoot = l;
  }
  xn.prototype.render = ef.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(v(409));
    var a = t.current, e = nt();
    em(a, e, l, t, null, null);
  }, xn.prototype.unmount = ef.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      em(l.current, 2, null, l, null, null), rn(), t[Za] = null;
    }
  };
  function xn(l) {
    this._internalRoot = l;
  }
  xn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Af();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ra.length && t !== 0 && t < ra[a].priority; a++) ;
      ra.splice(a, 0, l), a === 0 && om(l);
    }
  };
  var ym = X.version;
  if (ym !== "19.2.5")
    throw Error(
      v(
        527,
        ym,
        "19.2.5"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(v(188)) : (l = Object.keys(l).join(","), Error(v(268, l)));
    return l = z(t), l = l !== null ? I(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var W1 = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: r,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        Me = Gn.inject(
          W1
        ), kl = Gn;
      } catch {
      }
  }
  return pu.createRoot = function(l, t) {
    if (!ll(l)) throw Error(v(299));
    var a = !1, e = "", u = pd, n = Ad, i = zd;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = tm(
      l,
      1,
      !1,
      null,
      null,
      a,
      e,
      null,
      u,
      n,
      i,
      mm
    ), l[Za] = t.current, xc(l), new ef(t);
  }, pu.hydrateRoot = function(l, t, a) {
    if (!ll(l)) throw Error(v(299));
    var e = !1, u = "", n = pd, i = Ad, c = zd, f = null;
    return a != null && (a.unstable_strictMode === !0 && (e = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (f = a.formState)), t = tm(
      l,
      1,
      !0,
      t,
      a ?? null,
      e,
      u,
      f,
      n,
      i,
      c,
      mm
    ), t.context = am(null), a = t.current, e = nt(), e = wn(e), u = ea(e), u.callback = null, ua(a, u, e), a = e, t.current.lanes = a, Oe(t, a), Mt(t), l[Za] = t.current, xc(l), new xn(t);
  }, pu.version = "19.2.5", pu;
}
var Em;
function ny() {
  if (Em) return nf.exports;
  Em = 1;
  function E() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (X) {
        console.error(X);
      }
  }
  return E(), nf.exports = uy(), nf.exports;
}
var iy = ny(), Xa = sf();
const cy = {
  categories: [
    {
      id: 809,
      name: "Premiere (Beta) フォーラム",
      description: "Premiere (Beta) フォーラム",
      image: "5165a296-4acd-483e-b7bc-606e11d0a2dc_thumb.png",
      topicsCount: 6
    },
    {
      id: 815,
      name: "Substance 3D フォーラム",
      description: "Substance 3D フォーラム",
      image: "1ecee40c-8473-479b-a020-cca84c9048ec_thumb.png",
      topicsCount: 0
    },
    {
      id: 76,
      name: "Adobe Aero",
      description: "Connect, learn, and get help from the Aero Community.",
      image: "4fbebe0e-f037-4946-9a02-f440a0a284fb_thumb.png",
      topicsCount: 130
    },
    {
      id: 29,
      name: "Stock",
      description: "Connect with creators in the official Stock community.",
      image: "9185faa3-3726-4a26-9918-2bb6fd4781ef_thumb.png",
      topicsCount: 89
    },
    {
      id: 39,
      name: "Substance 3D Assets and Community Assets",
      description: "Connect with other Substance 3D Assets users.",
      image: "216d6283-2dd7-46d3-948e-7f854bb57c28_thumb.png",
      topicsCount: 12
    },
    {
      id: 142,
      name: "Japan Back Room",
      description: "Japan Back Room",
      image: "0a60dd25-f2d4-452f-9018-d87c08585dc2_thumb.png",
      topicsCount: 4
    },
    {
      id: 47,
      name: "Substance 3D Designer",
      description: "A community for Substance 3D Designer users.",
      image: "c75518c5-46a3-405a-a5b1-b8aa902d5125_thumb.png",
      topicsCount: 155
    },
    {
      id: 147,
      name: "Bridgeフォーラム",
      description: "Bridgeコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "24234581-08d4-4437-b2b8-844e27cdfbf5_thumb.png",
      topicsCount: 1
    },
    {
      id: 52,
      name: "Substance 3D Modeler",
      description: "A community for Substance 3D Modeler users.",
      image: "5e0d9b3b-ac40-471a-b1d8-8e6bdde3a22d_thumb.png",
      topicsCount: 0
    },
    {
      id: 56,
      name: "Substance 3D Painter",
      description: "Connect, learn, and get help texturing your 3D assets.",
      image: "914dd940-1aa6-4bbe-aa93-5111cd962bd3_thumb.png",
      topicsCount: 323
    },
    {
      id: 61,
      name: "Substance 3D Plugins",
      description: "A community for Substance 3D Plugins users.",
      image: "092562d0-eef9-4dfe-ac8d-2d1a85ea1ef3_thumb.png",
      topicsCount: 3
    },
    {
      id: 66,
      name: "Substance 3D Sampler",
      description: "A community for Substance 3D Sampler users.",
      image: "c9257d39-8fb9-4fb4-8429-8d8666eeec89_thumb.png",
      topicsCount: 38
    },
    {
      id: 71,
      name: "Substance 3D Stager",
      description: "A community for Substance 3D Stager users.",
      image: "3021e238-277b-40b9-943b-5ae3fb7d1a50_thumb.png",
      topicsCount: 68
    },
    {
      id: 84,
      name: "Testing Feedback",
      description: "Testing Feedback",
      image: "c247d280-5311-4aaa-b70d-c8004b99e6c5_thumb.png",
      topicsCount: 156
    },
    {
      id: 175,
      name: "アドビサポートコミュニティ 総合案内",
      description: "アドビサポートコミュニティ全般についてのご案内",
      image: "fd4e530e-374c-4f34-a401-9bdeed7da04c_thumb.png",
      topicsCount: 1
    },
    {
      id: 95,
      name: "Using the Community",
      description: "Get the most out of your Adobe community experience.",
      image: "d2d2c91d-e52e-417b-ba70-d5293af3151c_thumb.png",
      topicsCount: 52
    },
    {
      id: 152,
      name: "Adobe Collaboration Experiences",
      description: "Adobe Collaboration Experiences",
      image: "37e90ea5-c775-4245-aeef-86ab4d263e5e_thumb.png",
      topicsCount: 553
    },
    {
      id: 222,
      name: "Adobe Content Authenticity",
      description: "Adobe Content Authenticity",
      image: "fbe34ebf-dd2e-45bb-9915-04468e8e50bb_thumb.png",
      topicsCount: 4
    },
    {
      id: 326,
      name: "Adobe Express",
      description: "Join our global community to connect, learn, and get help.",
      image: "8c764fe5-9b32-47e6-a6fd-01bbadd4ca33_thumb.png",
      topicsCount: 2
    },
    {
      id: 357,
      name: "Adobe Express Developers",
      description: "Adobe Express Developers",
      image: "1bca58c0-32f0-4c79-9294-860192b54513_thumb.png",
      topicsCount: 8
    },
    {
      id: 396,
      name: "Adobe Firefly",
      description: "Adobe Firefly",
      image: "cbd61580-6a24-4ef2-8798-a41984972fb6_thumb.png",
      topicsCount: 2742
    },
    {
      id: 488,
      name: "Premiere Mobile",
      description: "Premiere Mobile.",
      image: "a4b6a191-2237-4155-8a14-862f3d12a7e0_thumb.png",
      topicsCount: 45
    },
    {
      id: 493,
      name: "Substance 3D Reviewer",
      description: "Substance 3D Reviewer",
      image: "820aed9e-6e5e-4584-a78c-4378b17ebc5d_thumb.png",
      topicsCount: 1
    },
    {
      id: 498,
      name: "Bridge UV",
      description: "Bridge UV",
      image: "4aa5b10f-a86d-455f-91b0-82747ffa2f64_thumb.png",
      topicsCount: 0
    },
    {
      id: 503,
      name: "Adobe Media Encoder",
      description: "Master the art of compression, share and learn.",
      image: "4b00c4ee-03be-4fe0-baee-406dc674adf6_thumb.png",
      topicsCount: 230
    },
    {
      id: 512,
      name: "Adobe Podcast",
      description: "Adobe Podcast",
      image: "bb11b7e1-592d-4593-98be-1dbaff135beb_thumb.png",
      topicsCount: 4
    },
    {
      id: 518,
      name: "Adobe Substance 3D Viewer (Beta)",
      description: "Adobe Substance 3D Viewer (Beta)",
      image: "4ff6d513-86f2-41de-9105-324a988b51c4_thumb.png",
      topicsCount: 17
    },
    {
      id: 268,
      name: "Photoshop (Beta) フォーラム",
      description: "Photoshop (Beta) フォーラム",
      image: "6630032a-f70f-4fe5-96e0-6d495f6d1f07_thumb.png",
      topicsCount: 26
    },
    {
      id: 526,
      name: "After Effects",
      description: "Get help and share feedback in our global community.",
      image: "bdc67e71-8aa6-43a1-9f09-632836f2709f_thumb.png",
      topicsCount: 1404
    },
    {
      id: 541,
      name: "Audition",
      description: "Join the conversation on all things Adobe Audition.",
      image: "9586b21e-8581-468a-9c02-0cd1d7a4cbbf_thumb.png",
      topicsCount: 335
    },
    {
      id: 550,
      name: "Back Room",
      description: "Moderation and feedback from our Community Experts.",
      image: "a539cf07-baeb-46aa-9b29-006a973e7ab5_thumb.png",
      topicsCount: 93
    },
    {
      id: 555,
      name: "Bridge",
      description: "Connect with our global Bridge Community.",
      image: "d59749ee-1307-48ef-8fe5-4ca3ad9312f4_thumb.png",
      topicsCount: 466
    },
    {
      id: 560,
      name: "Camera Raw",
      description: "Connect with our global Camera Raw Community.",
      image: "289afd99-bfca-41e0-92e1-2d848749a8b4_thumb.png",
      topicsCount: 225
    },
    {
      id: 568,
      name: "Character Animator",
      description: "Learn how to create, build, and animate 2D puppets.",
      image: "5c20a4ca-1a5e-4f0d-8290-b0ce351b40ec_thumb.png",
      topicsCount: 555
    },
    {
      id: 589,
      name: "Create Embed SDK (Beta)",
      description: "Create Embed SDK (Beta)",
      image: "524a35d2-b2a3-4371-a90c-08018bb8ce49_thumb.png",
      topicsCount: 0
    },
    {
      id: 591,
      name: "Adobe Express Embed SDK",
      description: "Connect with other Embed SDK users and share feedback.",
      image: "3e7da5e8-1592-48f3-b4e1-d64f4de9eac2_thumb.png",
      topicsCount: 0
    },
    {
      id: 599,
      name: "Creative Cloud desktop",
      description: "The official community for the Creative Cloud desktop app.",
      image: "aeb39b01-44b7-4eed-bad7-ad8512f8c9c0_thumb.png",
      topicsCount: 479
    },
    {
      id: 607,
      name: "Creative Cloud Spaces (private beta)",
      description: "Creative Cloud Spaces (private beta)",
      image: "43760773-fd50-473c-8560-bfa974c6868c_thumb.png",
      topicsCount: 9
    },
    {
      id: 650,
      name: "Illustrator",
      description: "Join our Illustrator community. All skill levels welcome!",
      image: "e257692b-f819-4fac-a67e-47f6ac526f61_thumb.png",
      topicsCount: 9
    },
    {
      id: 653,
      name: "Illustrator (Beta)",
      description: "Illustrator (Beta)",
      image: "16c94d1e-fa3d-4a27-82be-b40df1b707bc_thumb.png",
      topicsCount: 53
    },
    {
      id: 661,
      name: "Illustrator on the web (beta)",
      description: "Illustrator on the web (beta)",
      image: "5e22d3c2-2ffd-4253-8e27-902ba4820b79_thumb.png",
      topicsCount: 67
    },
    {
      id: 672,
      name: "Lightroom Classic",
      description: "Connect with fellow editors in our Lr Classic community.",
      image: "746c3850-455f-4319-9a69-06906b47956f_thumb.png",
      topicsCount: 1677
    },
    {
      id: 677,
      name: "Lightroom ecosystem (Cloud-based)",
      description: "Get the most out of Lightroom with our community.",
      image: "f892ff7c-8200-4285-a2b1-d00080938616_thumb.png",
      topicsCount: 1343
    },
    {
      id: 682,
      name: "Lightroom Mobile (Early Access)",
      description: "Lightroom Mobile (Early Access)",
      image: "5e3dab70-b8fa-407a-9510-56953ecc2b95_thumb.png",
      topicsCount: 1
    },
    {
      id: 687,
      name: "Lightroom Web (Early Access)",
      description: "Lightroom Web (Early Access)",
      image: "0389db09-3fb6-477c-80c3-213a3b430fb7_thumb.png",
      topicsCount: 0
    },
    {
      id: 709,
      name: "Photoshop ecosystem",
      description: "Master Photoshop with the help of our global community.",
      image: "63179268-2190-4e4b-a1f0-3ed3cb5ec76f_thumb.png",
      topicsCount: 3154
    },
    {
      id: 726,
      name: "Adobe Premiere",
      description: "Adobe Premiere community: Connect, Learn, Feedback, Help.",
      image: "c670f908-3c95-4736-8284-564c24a6603d_thumb.png",
      topicsCount: 3912
    },
    {
      id: 738,
      name: "Project Neo (beta)",
      description: "Neo is a web-based platform that simplifies the creation of dimensional logos, icons and infographics, eliminating the need to make manual calculations to draw in the right perspective. Neo’s intuitive interface speeds graphic design work in a familiar workflow, making it easy for designers to bring dimension into their projects effortlessly.",
      image: "9706fb46-f375-4e3e-aa0d-407b19c1e857_thumb.png",
      topicsCount: 13
    },
    {
      id: 743,
      name: "Project Squirrel Web Private Beta",
      description: "Project Squirrel Web Private Beta",
      image: "c6fa298d-50a3-4c4d-bbb4-80ea8bc6123d_thumb.png",
      topicsCount: 0
    },
    {
      id: 333,
      name: "계정, 결제 및 플랜",
      description: "Adobe 계정, 결제 또는 플랜에 대해 질문이 있으신가요? 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "a7e940d5-4c2e-4402-970e-ed535e1a359a_thumb.png",
      topicsCount: 4
    },
    {
      id: 336,
      name: "Acrobat 게시판",
      description: "Adobe Acrobat 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "8e83e4df-7bea-4871-b8b2-200293f11f38_thumb.png",
      topicsCount: 0
    },
    {
      id: 339,
      name: "Acrobat Reader 게시판",
      description: "Adobe Acrobat Reader 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "e1e84141-eea4-4abe-b8be-d28f21c84b0a_thumb.png",
      topicsCount: 0
    },
    {
      id: 342,
      name: "Adobe Express 게시판",
      description: "Adobe Express (Korean)",
      image: "576283d2-6fad-4b6f-bc7a-3c681d806e1a_thumb.png",
      topicsCount: 0
    },
    {
      id: 345,
      name: "Adobe Scan 게시판",
      description: "Adobe Scan 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "c5239fec-0f0d-4465-8be1-6711bd9997f5_thumb.png",
      topicsCount: 0
    },
    {
      id: 348,
      name: "After Effects 게시판",
      description: "Adobe After Effects 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "151a4ccf-585b-455f-b12b-bc3729ac6a95_thumb.png",
      topicsCount: 2
    },
    {
      id: 351,
      name: "Animate 게시판",
      description: "Adobe Animate 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "36452f95-6b19-4bf2-bac3-843991f9dee3_thumb.png",
      topicsCount: 0
    },
    {
      id: 354,
      name: "Audition 게시판",
      description: "Adobe Audition 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "57537eb6-f852-4d8b-bf41-8fa4f1cd77cf_thumb.png",
      topicsCount: 0
    },
    {
      id: 358,
      name: "Bridge 게시판",
      description: "Adobe Bridge 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "dbe60818-605b-4007-9cfd-bee1fdddf4b5_thumb.png",
      topicsCount: 0
    },
    {
      id: 367,
      name: "Camera Raw 게시판",
      description: "Adobe Camera Raw 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "27892e9d-b7a8-4d34-bd6b-0a762dbb545f_thumb.png",
      topicsCount: 0
    },
    {
      id: 370,
      name: "Creative Cloud 게시판",
      description: "Adobe의 Creative Cloud 서비스에 대해 질문이 있으신가요? 저희가 도와드리겠습니다. 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "e0c01154-786c-4b94-bcf5-603c93898d0d_thumb.png",
      topicsCount: 1
    },
    {
      id: 373,
      name: "Character Animator 게시판",
      description: "Adobe Character Animator 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "8d2dc6ea-9821-4dd7-8880-e69dc7d5b109_thumb.png",
      topicsCount: 0
    },
    {
      id: 376,
      name: "커뮤니티 사용 게시판",
      description: "어도비 커뮤니티에 대한 피드백과 질문을 공유해주세요.",
      image: "988fadb0-174e-4a8f-a4d7-d2e57751a416_thumb.png",
      topicsCount: 4
    },
    {
      id: 381,
      name: "Dimension 게시판",
      description: "Adobe Dimension 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "f830b460-f351-4a3a-9a26-96034d55ae54_thumb.png",
      topicsCount: 0
    },
    {
      id: 384,
      name: "다운로드 및 설치 게시판",
      description: "Adobe 앱 다운로드 및 설치에 대해 질문이 있으신가요? 저희가 도와드리겠습니다. 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "e8090024-4945-4066-9180-c17ba15d08c4_thumb.png",
      topicsCount: 1
    },
    {
      id: 387,
      name: "Adobe Fonts 게시판",
      description: "Adobe Fonts 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "0b1d6464-dc55-4eaf-a48a-c8e8f9423486_thumb.png",
      topicsCount: 0
    },
    {
      id: 390,
      name: "Fresco 게시판",
      description: "Adobe Fresco 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "4ad42ea4-6878-4650-b3c2-5fc6a79f0a68_thumb.png",
      topicsCount: 0
    },
    {
      id: 393,
      name: "Illustrator 게시판",
      description: "Adobe Illustrator 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "167e39ce-1d21-4a88-b9a2-8f00a9b85555_thumb.png",
      topicsCount: 1
    },
    {
      id: 397,
      name: "Illustrator on the web (베타)",
      description: "Illustrator on the web (베타)",
      image: "dba14892-02ce-4e31-8868-b8a4250a0f69_thumb.png",
      topicsCount: 0
    },
    {
      id: 406,
      name: "InDesign 게시판",
      description: "Adobe InDesign 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "99015114-e2d2-47cc-b80d-ce0fd9cf2b85_thumb.png",
      topicsCount: 0
    },
    {
      id: 409,
      name: "Lightroom 게시판",
      description: "Adobe Lightroom 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "920229d7-0a4f-4347-acc0-41ae24451efe_thumb.png",
      topicsCount: 2
    },
    {
      id: 412,
      name: "Lightroom Classic 게시판",
      description: "Adobe Lightroom Classic 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "e3139ed9-46fa-4156-9ad5-35260f7d2b21_thumb.png",
      topicsCount: 1
    },
    {
      id: 415,
      name: "Media Encoder 게시판",
      description: "Adobe Media Encoder 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "1f538a3a-e738-4552-8027-fe26b830193b_thumb.png",
      topicsCount: 1
    },
    {
      id: 421,
      name: "Photoshop 게시판",
      description: "Adobe Photoshop 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "c1cf11fe-7557-4cba-ba78-ccdea877211f_thumb.png",
      topicsCount: 2
    },
    {
      id: 430,
      name: "Premiere Pro 게시판",
      description: "Adobe Premiere Pro 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "969593fa-5693-4e3c-8f41-883d607b1301_thumb.png",
      topicsCount: 2
    },
    {
      id: 434,
      name: "Premiere Rush 게시판",
      description: "Adobe Premiere Rush 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "de52528a-af7c-461d-b711-3889b24dad3d_thumb.png",
      topicsCount: 0
    },
    {
      id: 439,
      name: "Stock 게시판",
      description: "Adobe Stock 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "2fe69d24-49a1-40b9-b7af-e0d90f5f2230_thumb.png",
      topicsCount: 0
    },
    {
      id: 442,
      name: "Stock Contributor 게시판",
      description: "Adobe Stock Contributor 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "11d214b5-ff18-4f0a-84bb-c2d950d3c990_thumb.png",
      topicsCount: 0
    },
    {
      id: 472,
      name: "Adobe XD 게시판",
      description: "Adobe XD 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "9434c2b3-ff60-4c2d-a318-6d9e823b1141_thumb.png",
      topicsCount: 0
    },
    {
      id: 478,
      name: "Project Spice",
      description: "Project Spice",
      image: "8b11b92c-129c-40b6-997b-cb8e4a8c5d39_thumb.png",
      topicsCount: 0
    },
    {
      id: 483,
      name: "Korea Back Room",
      description: "Korea Back Room",
      image: "07a90028-7270-4a31-a5f6-72eeb6ba3604_thumb.png",
      topicsCount: 0
    },
    {
      id: 801,
      name: "Test Community - Created for Demo Purposes Only",
      description: "Test Community - Created for Demo Purposes Only",
      image: "6bfa040b-c328-474e-8558-40b67bfc0290_thumb.jpg",
      topicsCount: 0
    }
  ]
}, fy = cy.categories;
function Tm(E = "name") {
  const X = [...fy];
  return E === "name" ? X.sort((q, v) => q.name.localeCompare(v.name)) : E === "topicsCount" && X.sort((q, v) => v.topicsCount - q.topicsCount), X;
}
function Cm({
  sortBy: E = "name",
  maxItems: X,
  showThumbnails: q = !1,
  emptyMessage: v = "No categories available"
}) {
  const ll = Xa.useMemo(() => {
    const B = Tm(E);
    return X ? B.slice(0, X) : B;
  }, [E, X]);
  return ll.length === 0 ? /* @__PURE__ */ Q.jsx("div", { className: "category-list-empty", children: /* @__PURE__ */ Q.jsx("p", { children: v }) }) : /* @__PURE__ */ Q.jsx("div", { className: "category-list", children: /* @__PURE__ */ Q.jsx("div", { className: "category-list-container", children: ll.map((B) => /* @__PURE__ */ Q.jsxs("div", { className: "category-card", children: [
    q && B.image && /* @__PURE__ */ Q.jsx("div", { className: "category-thumbnail", children: /* @__PURE__ */ Q.jsx(
      "img",
      {
        src: "https://uploads-us-west-2.insided.com/adobedme-en/attachment/" + B.image,
        alt: B.name,
        loading: "lazy",
        onError: (yl) => {
          yl.currentTarget.style.display = "none";
        }
      }
    ) }),
    /* @__PURE__ */ Q.jsxs("div", { className: "category-content", children: [
      /* @__PURE__ */ Q.jsx("h3", { className: "category-name", children: B.name }),
      B.description && /* @__PURE__ */ Q.jsx("p", { className: "category-description", children: B.description }),
      /* @__PURE__ */ Q.jsx("div", { className: "category-meta", children: /* @__PURE__ */ Q.jsxs("span", { className: "category-topics-count", children: [
        B.topicsCount,
        /* @__PURE__ */ Q.jsx("span", { className: "topics-label", children: B.topicsCount === 1 ? "topic" : "topics" })
      ] }) })
    ] })
  ] }, B.id)) }) });
}
function oy({
  columns: E = 3,
  ...X
}) {
  return /* @__PURE__ */ Q.jsx(
    "div",
    {
      className: "category-grid",
      style: {
        "--grid-columns": E
      },
      children: /* @__PURE__ */ Q.jsx(Cm, { ...X })
    }
  );
}
function dy({
  onSelect: E,
  selectedId: X,
  ...q
}) {
  const v = Xa.useMemo(() => Tm(q.sortBy || "name"), [q.sortBy]), ll = Xa.useMemo(() => q.maxItems ? v.slice(0, q.maxItems) : v, [v, q.maxItems]);
  return ll.length === 0 ? /* @__PURE__ */ Q.jsx("div", { className: "category-list-empty", children: /* @__PURE__ */ Q.jsx("p", { children: q.emptyMessage || "No categories available" }) }) : /* @__PURE__ */ Q.jsx("div", { className: "category-selector", children: /* @__PURE__ */ Q.jsx("div", { className: "category-selector-list", children: ll.map((B) => /* @__PURE__ */ Q.jsx(
    "button",
    {
      className: `category-selector-item ${X === B.id ? "selected" : ""}`,
      onClick: () => E == null ? void 0 : E(B.id),
      type: "button",
      children: /* @__PURE__ */ Q.jsxs("div", { className: "selector-content", children: [
        /* @__PURE__ */ Q.jsx("span", { className: "selector-name", children: B.name }),
        /* @__PURE__ */ Q.jsx("span", { className: "selector-count", children: B.topicsCount })
      ] })
    },
    B.id
  )) }) });
}
function sy({ sdk: E }) {
  const [X, q] = Xa.useState(E.getProps()), [v, ll] = Xa.useState(), [B, yl] = Xa.useState("grid");
  return Xa.useEffect(() => E.on("propsChanged", q), [E]), /* @__PURE__ */ Q.jsxs("section", { className: "react-widget-section", children: [
    /* @__PURE__ */ Q.jsx("h3", { className: "react-widget-title", children: X.title }),
    X.description && /* @__PURE__ */ Q.jsx("p", { className: "react-widget-description", children: X.description }),
    /* @__PURE__ */ Q.jsx("div", { className: "widget-controls", children: /* @__PURE__ */ Q.jsxs("div", { className: "view-mode-selector", children: [
      /* @__PURE__ */ Q.jsx(
        "button",
        {
          className: `mode-button ${B === "list" ? "active" : ""}`,
          onClick: () => yl("list"),
          children: "List"
        }
      ),
      /* @__PURE__ */ Q.jsx(
        "button",
        {
          className: `mode-button ${B === "grid" ? "active" : ""}`,
          onClick: () => yl("grid"),
          children: "Grid"
        }
      ),
      /* @__PURE__ */ Q.jsx(
        "button",
        {
          className: `mode-button ${B === "selector" ? "active" : ""}`,
          onClick: () => yl("selector"),
          children: "Select"
        }
      )
    ] }) }),
    /* @__PURE__ */ Q.jsxs("div", { className: "categories-container", children: [
      B === "list" && /* @__PURE__ */ Q.jsx(
        Cm,
        {
          showThumbnails: !0,
          sortBy: "topicsCount",
          emptyMessage: "No categories with ideas enabled found"
        }
      ),
      B === "grid" && /* @__PURE__ */ Q.jsx(
        oy,
        {
          columns: 3,
          showThumbnails: !0,
          sortBy: "name",
          emptyMessage: "No categories with ideas enabled found"
        }
      ),
      B === "selector" && /* @__PURE__ */ Q.jsx(
        dy,
        {
          onSelect: ll,
          selectedId: v,
          emptyMessage: "No categories with ideas enabled found"
        }
      )
    ] }),
    v && /* @__PURE__ */ Q.jsx("div", { className: "selected-category-info", children: /* @__PURE__ */ Q.jsxs("p", { children: [
      "Selected Category ID: ",
      /* @__PURE__ */ Q.jsx("strong", { children: v })
    ] }) })
  ] });
}
let my = I1;
const _m = /* @__PURE__ */ new Set();
async function yy(E) {
  await E.whenReady();
  const X = document.createElement("style");
  X.textContent = my, _m.add(X), E.shadowRoot.insertBefore(X, E.shadowRoot.firstChild);
  const q = iy.createRoot(E.getContainer());
  q.render(/* @__PURE__ */ Q.jsx(sy, { sdk: E })), E.on("destroy", () => {
    _m.delete(X), X.remove(), q.unmount();
  });
}
export {
  yy as init
};

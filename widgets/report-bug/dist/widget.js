var ef = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ym;
function $1() {
  if (ym) return Se;
  ym = 1;
  var T = Symbol.for("react.transitional.element"), X = Symbol.for("react.fragment");
  function B(v, ll, H) {
    var yl = null;
    if (H !== void 0 && (yl = "" + H), ll.key !== void 0 && (yl = "" + ll.key), "key" in ll) {
      H = {};
      for (var Nl in ll)
        Nl !== "key" && (H[Nl] = ll[Nl]);
    } else H = ll;
    return ll = H.ref, {
      $$typeof: T,
      type: v,
      key: yl,
      ref: ll !== void 0 ? ll : null,
      props: H
    };
  }
  return Se.Fragment = X, Se.jsx = B, Se.jsxs = B, Se;
}
var vm;
function k1() {
  return vm || (vm = 1, ef.exports = $1()), ef.exports;
}
var x = k1();
const I1 = ".react-widget-section{padding:2rem;font-family:Inter,system-ui,-apple-system,sans-serif;border-radius:12px;background:var(--config--main-color-background, #ffffff);color:var(--config--main-color-text, #1e1e2e);box-sizing:border-box;display:flex;flex-direction:column;gap:1.5rem}.react-widget-title{margin:0;font-size:1.5rem;font-weight:700;letter-spacing:-.015em;color:var(--config--main-color-brand, #2563eb)}.react-widget-description{margin:0;font-size:.95rem;line-height:1.6;color:var(--config--main-color-text-secondary, #6b7280)}.widget-controls{display:flex;gap:1rem;margin:1rem 0 0}.view-mode-selector{display:flex;gap:.5rem;background:var(--config--main-color-background-secondary, #f9fafb);padding:.25rem;border-radius:6px;border:1px solid var(--config--main-color-border, #e5e7eb)}.mode-button{padding:.5rem 1rem;background:transparent;border:none;border-radius:4px;cursor:pointer;font-size:.85rem;font-weight:500;color:var(--config--main-color-text-secondary, #6b7280);transition:all .2s ease}.mode-button:hover{background:var(--config--main-color-background, #ffffff);color:var(--config--main-color-text, #1e1e2e)}.mode-button.active{background:var(--config--main-color-brand, #2563eb);color:#fff}.categories-container{display:flex;flex-direction:column;gap:1rem}.selected-category-info{padding:1rem;background:var(--config--main-color-background-secondary, #f0f9ff);border-left:4px solid var(--config--main-color-brand, #2563eb);border-radius:4px;margin-top:1rem}.selected-category-info p{margin:0;font-size:.9rem;color:var(--config--main-color-text, #1e1e2e)}@media(max-width:768px){.react-widget-section{padding:1rem}.react-widget-title{font-size:1.25rem}.view-mode-selector{flex-wrap:wrap}.mode-button{padding:.4rem .8rem;font-size:.8rem}}";
var nf = { exports: {} }, pe = {}, cf = { exports: {} }, ff = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hm;
function P1() {
  return hm || (hm = 1, (function(T) {
    function X(r, E) {
      var N = r.length;
      r.push(E);
      l: for (; 0 < N; ) {
        var ul = N - 1 >>> 1, cl = r[ul];
        if (0 < ll(cl, E))
          r[ul] = E, r[N] = cl, N = ul;
        else break l;
      }
    }
    function B(r) {
      return r.length === 0 ? null : r[0];
    }
    function v(r) {
      if (r.length === 0) return null;
      var E = r[0], N = r.pop();
      if (N !== E) {
        r[0] = N;
        l: for (var ul = 0, cl = r.length, d = cl >>> 1; ul < d; ) {
          var z = 2 * (ul + 1) - 1, A = r[z], O = z + 1, j = r[O];
          if (0 > ll(A, N))
            O < cl && 0 > ll(j, A) ? (r[ul] = j, r[O] = N, ul = O) : (r[ul] = A, r[z] = N, ul = z);
          else if (O < cl && 0 > ll(j, N))
            r[ul] = j, r[O] = N, ul = O;
          else break l;
        }
      }
      return E;
    }
    function ll(r, E) {
      var N = r.sortIndex - E.sortIndex;
      return N !== 0 ? N : r.id - E.id;
    }
    if (T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var H = performance;
      T.unstable_now = function() {
        return H.now();
      };
    } else {
      var yl = Date, Nl = yl.now();
      T.unstable_now = function() {
        return yl.now() - Nl;
      };
    }
    var R = [], _ = [], I = 1, q = null, ml = 3, Fl = !1, jl = !1, Hl = !1, Ct = !1, Wl = typeof setTimeout == "function" ? setTimeout : null, Ft = typeof clearTimeout == "function" ? clearTimeout : null, Ul = typeof setImmediate < "u" ? setImmediate : null;
    function it(r) {
      for (var E = B(_); E !== null; ) {
        if (E.callback === null) v(_);
        else if (E.startTime <= r)
          v(_), E.sortIndex = E.expirationTime, X(R, E);
        else break;
        E = B(_);
      }
    }
    function zt(r) {
      if (Hl = !1, it(r), !jl)
        if (B(R) !== null)
          jl = !0, Gl || (Gl = !0, Xl());
        else {
          var E = B(_);
          E !== null && bt(zt, E.startTime - r);
        }
    }
    var Gl = !1, w = -1, Ql = 5, _t = -1;
    function xa() {
      return Ct ? !0 : !(T.unstable_now() - _t < Ql);
    }
    function Tt() {
      if (Ct = !1, Gl) {
        var r = T.unstable_now();
        _t = r;
        var E = !0;
        try {
          l: {
            jl = !1, Hl && (Hl = !1, Ft(w), w = -1), Fl = !0;
            var N = ml;
            try {
              t: {
                for (it(r), q = B(R); q !== null && !(q.expirationTime > r && xa()); ) {
                  var ul = q.callback;
                  if (typeof ul == "function") {
                    q.callback = null, ml = q.priorityLevel;
                    var cl = ul(
                      q.expirationTime <= r
                    );
                    if (r = T.unstable_now(), typeof cl == "function") {
                      q.callback = cl, it(r), E = !0;
                      break t;
                    }
                    q === B(R) && v(R), it(r);
                  } else v(R);
                  q = B(R);
                }
                if (q !== null) E = !0;
                else {
                  var d = B(_);
                  d !== null && bt(
                    zt,
                    d.startTime - r
                  ), E = !1;
                }
              }
              break l;
            } finally {
              q = null, ml = N, Fl = !1;
            }
            E = void 0;
          }
        } finally {
          E ? Xl() : Gl = !1;
        }
      }
    }
    var Xl;
    if (typeof Ul == "function")
      Xl = function() {
        Ul(Tt);
      };
    else if (typeof MessageChannel < "u") {
      var pa = new MessageChannel(), Dt = pa.port2;
      pa.port1.onmessage = Tt, Xl = function() {
        Dt.postMessage(null);
      };
    } else
      Xl = function() {
        Wl(Tt, 0);
      };
    function bt(r, E) {
      w = Wl(function() {
        r(T.unstable_now());
      }, E);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(r) {
      r.callback = null;
    }, T.unstable_forceFrameRate = function(r) {
      0 > r || 125 < r ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ql = 0 < r ? Math.floor(1e3 / r) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return ml;
    }, T.unstable_next = function(r) {
      switch (ml) {
        case 1:
        case 2:
        case 3:
          var E = 3;
          break;
        default:
          E = ml;
      }
      var N = ml;
      ml = E;
      try {
        return r();
      } finally {
        ml = N;
      }
    }, T.unstable_requestPaint = function() {
      Ct = !0;
    }, T.unstable_runWithPriority = function(r, E) {
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
      var N = ml;
      ml = r;
      try {
        return E();
      } finally {
        ml = N;
      }
    }, T.unstable_scheduleCallback = function(r, E, N) {
      var ul = T.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? ul + N : ul) : N = ul, r) {
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
      return cl = N + cl, r = {
        id: I++,
        callback: E,
        priorityLevel: r,
        startTime: N,
        expirationTime: cl,
        sortIndex: -1
      }, N > ul ? (r.sortIndex = N, X(_, r), B(R) === null && r === B(_) && (Hl ? (Ft(w), w = -1) : Hl = !0, bt(zt, N - ul))) : (r.sortIndex = cl, X(R, r), jl || Fl || (jl = !0, Gl || (Gl = !0, Xl()))), r;
    }, T.unstable_shouldYield = xa, T.unstable_wrapCallback = function(r) {
      var E = ml;
      return function() {
        var N = ml;
        ml = E;
        try {
          return r.apply(this, arguments);
        } finally {
          ml = N;
        }
      };
    };
  })(ff)), ff;
}
var gm;
function ly() {
  return gm || (gm = 1, cf.exports = P1()), cf.exports;
}
var sf = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bm;
function ty() {
  if (bm) return Y;
  bm = 1;
  var T = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), ll = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), yl = Symbol.for("react.context"), Nl = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), ml = Symbol.iterator;
  function Fl(d) {
    return d === null || typeof d != "object" ? null : (d = ml && d[ml] || d["@@iterator"], typeof d == "function" ? d : null);
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
  }, Hl = Object.assign, Ct = {};
  function Wl(d, z, A) {
    this.props = d, this.context = z, this.refs = Ct, this.updater = A || jl;
  }
  Wl.prototype.isReactComponent = {}, Wl.prototype.setState = function(d, z) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, z, "setState");
  }, Wl.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function Ft() {
  }
  Ft.prototype = Wl.prototype;
  function Ul(d, z, A) {
    this.props = d, this.context = z, this.refs = Ct, this.updater = A || jl;
  }
  var it = Ul.prototype = new Ft();
  it.constructor = Ul, Hl(it, Wl.prototype), it.isPureReactComponent = !0;
  var zt = Array.isArray;
  function Gl() {
  }
  var w = { H: null, A: null, T: null, S: null }, Ql = Object.prototype.hasOwnProperty;
  function _t(d, z, A) {
    var O = A.ref;
    return {
      $$typeof: T,
      type: d,
      key: z,
      ref: O !== void 0 ? O : null,
      props: A
    };
  }
  function xa(d, z) {
    return _t(d.type, z, d.props);
  }
  function Tt(d) {
    return typeof d == "object" && d !== null && d.$$typeof === T;
  }
  function Xl(d) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(A) {
      return z[A];
    });
  }
  var pa = /\/+/g;
  function Dt(d, z) {
    return typeof d == "object" && d !== null && d.key != null ? Xl("" + d.key) : z.toString(36);
  }
  function bt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(Gl, Gl) : (d.status = "pending", d.then(
          function(z) {
            d.status === "pending" && (d.status = "fulfilled", d.value = z);
          },
          function(z) {
            d.status === "pending" && (d.status = "rejected", d.reason = z);
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
  function r(d, z, A, O, j) {
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
            case T:
            case X:
              P = !0;
              break;
            case I:
              return P = d._init, r(
                P(d._payload),
                z,
                A,
                O,
                j
              );
          }
      }
    if (P)
      return j = j(d), P = O === "" ? "." + Dt(d, 0) : O, zt(j) ? (A = "", P != null && (A = P.replace(pa, "$&/") + "/"), r(j, z, A, "", function(Mu) {
        return Mu;
      })) : j != null && (Tt(j) && (j = xa(
        j,
        A + (j.key == null || d && d.key === j.key ? "" : ("" + j.key).replace(
          pa,
          "$&/"
        ) + "/") + P
      )), z.push(j)), 1;
    P = 0;
    var Bl = O === "" ? "." : O + ":";
    if (zt(d))
      for (var gl = 0; gl < d.length; gl++)
        O = d[gl], Z = Bl + Dt(O, gl), P += r(
          O,
          z,
          A,
          Z,
          j
        );
    else if (gl = Fl(d), typeof gl == "function")
      for (d = gl.call(d), gl = 0; !(O = d.next()).done; )
        O = O.value, Z = Bl + Dt(O, gl++), P += r(
          O,
          z,
          A,
          Z,
          j
        );
    else if (Z === "object") {
      if (typeof d.then == "function")
        return r(
          bt(d),
          z,
          A,
          O,
          j
        );
      throw z = String(d), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function E(d, z, A) {
    if (d == null) return d;
    var O = [], j = 0;
    return r(d, O, "", "", function(Z) {
      return z.call(A, Z, j++);
    }), O;
  }
  function N(d) {
    if (d._status === -1) {
      var z = d._result;
      z = z(), z.then(
        function(A) {
          (d._status === 0 || d._status === -1) && (d._status = 1, d._result = A);
        },
        function(A) {
          (d._status === 0 || d._status === -1) && (d._status = 2, d._result = A);
        }
      ), d._status === -1 && (d._status = 0, d._result = z);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var ul = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  }, cl = {
    map: E,
    forEach: function(d, z, A) {
      E(
        d,
        function() {
          z.apply(this, arguments);
        },
        A
      );
    },
    count: function(d) {
      var z = 0;
      return E(d, function() {
        z++;
      }), z;
    },
    toArray: function(d) {
      return E(d, function(z) {
        return z;
      }) || [];
    },
    only: function(d) {
      if (!Tt(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return Y.Activity = q, Y.Children = cl, Y.Component = Wl, Y.Fragment = B, Y.Profiler = ll, Y.PureComponent = Ul, Y.StrictMode = v, Y.Suspense = R, Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, Y.__COMPILER_RUNTIME = {
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
  }, Y.cloneElement = function(d, z, A) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var O = Hl({}, d.props), j = d.key;
    if (z != null)
      for (Z in z.key !== void 0 && (j = "" + z.key), z)
        !Ql.call(z, Z) || Z === "key" || Z === "__self" || Z === "__source" || Z === "ref" && z.ref === void 0 || (O[Z] = z[Z]);
    var Z = arguments.length - 2;
    if (Z === 1) O.children = A;
    else if (1 < Z) {
      for (var P = Array(Z), Bl = 0; Bl < Z; Bl++)
        P[Bl] = arguments[Bl + 2];
      O.children = P;
    }
    return _t(d.type, j, O);
  }, Y.createContext = function(d) {
    return d = {
      $$typeof: yl,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: H,
      _context: d
    }, d;
  }, Y.createElement = function(d, z, A) {
    var O, j = {}, Z = null;
    if (z != null)
      for (O in z.key !== void 0 && (Z = "" + z.key), z)
        Ql.call(z, O) && O !== "key" && O !== "__self" && O !== "__source" && (j[O] = z[O]);
    var P = arguments.length - 2;
    if (P === 1) j.children = A;
    else if (1 < P) {
      for (var Bl = Array(P), gl = 0; gl < P; gl++)
        Bl[gl] = arguments[gl + 2];
      j.children = Bl;
    }
    if (d && d.defaultProps)
      for (O in P = d.defaultProps, P)
        j[O] === void 0 && (j[O] = P[O]);
    return _t(d, Z, j);
  }, Y.createRef = function() {
    return { current: null };
  }, Y.forwardRef = function(d) {
    return { $$typeof: Nl, render: d };
  }, Y.isValidElement = Tt, Y.lazy = function(d) {
    return {
      $$typeof: I,
      _payload: { _status: -1, _result: d },
      _init: N
    };
  }, Y.memo = function(d, z) {
    return {
      $$typeof: _,
      type: d,
      compare: z === void 0 ? null : z
    };
  }, Y.startTransition = function(d) {
    var z = w.T, A = {};
    w.T = A;
    try {
      var O = d(), j = w.S;
      j !== null && j(A, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(Gl, ul);
    } catch (Z) {
      ul(Z);
    } finally {
      z !== null && A.types !== null && (z.types = A.types), w.T = z;
    }
  }, Y.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, Y.use = function(d) {
    return w.H.use(d);
  }, Y.useActionState = function(d, z, A) {
    return w.H.useActionState(d, z, A);
  }, Y.useCallback = function(d, z) {
    return w.H.useCallback(d, z);
  }, Y.useContext = function(d) {
    return w.H.useContext(d);
  }, Y.useDebugValue = function() {
  }, Y.useDeferredValue = function(d, z) {
    return w.H.useDeferredValue(d, z);
  }, Y.useEffect = function(d, z) {
    return w.H.useEffect(d, z);
  }, Y.useEffectEvent = function(d) {
    return w.H.useEffectEvent(d);
  }, Y.useId = function() {
    return w.H.useId();
  }, Y.useImperativeHandle = function(d, z, A) {
    return w.H.useImperativeHandle(d, z, A);
  }, Y.useInsertionEffect = function(d, z) {
    return w.H.useInsertionEffect(d, z);
  }, Y.useLayoutEffect = function(d, z) {
    return w.H.useLayoutEffect(d, z);
  }, Y.useMemo = function(d, z) {
    return w.H.useMemo(d, z);
  }, Y.useOptimistic = function(d, z) {
    return w.H.useOptimistic(d, z);
  }, Y.useReducer = function(d, z, A) {
    return w.H.useReducer(d, z, A);
  }, Y.useRef = function(d) {
    return w.H.useRef(d);
  }, Y.useState = function(d) {
    return w.H.useState(d);
  }, Y.useSyncExternalStore = function(d, z, A) {
    return w.H.useSyncExternalStore(
      d,
      z,
      A
    );
  }, Y.useTransition = function() {
    return w.H.useTransition();
  }, Y.version = "19.2.5", Y;
}
var rm;
function mf() {
  return rm || (rm = 1, sf.exports = ty()), sf.exports;
}
var df = { exports: {} }, ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sm;
function ay() {
  if (Sm) return ql;
  Sm = 1;
  var T = mf();
  function X(R) {
    var _ = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var I = 2; I < arguments.length; I++)
        _ += "&args[]=" + encodeURIComponent(arguments[I]);
    }
    return "Minified React error #" + R + "; visit " + _ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function B() {
  }
  var v = {
    d: {
      f: B,
      r: function() {
        throw Error(X(522));
      },
      D: B,
      C: B,
      L: B,
      m: B,
      X: B,
      S: B,
      M: B
    },
    p: 0,
    findDOMNode: null
  }, ll = Symbol.for("react.portal");
  function H(R, _, I) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ll,
      key: q == null ? null : "" + q,
      children: R,
      containerInfo: _,
      implementation: I
    };
  }
  var yl = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Nl(R, _) {
    if (R === "font") return "";
    if (typeof _ == "string")
      return _ === "use-credentials" ? _ : "";
  }
  return ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, ql.createPortal = function(R, _) {
    var I = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_ || _.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11)
      throw Error(X(299));
    return H(R, _, null, I);
  }, ql.flushSync = function(R) {
    var _ = yl.T, I = v.p;
    try {
      if (yl.T = null, v.p = 2, R) return R();
    } finally {
      yl.T = _, v.p = I, v.d.f();
    }
  }, ql.preconnect = function(R, _) {
    typeof R == "string" && (_ ? (_ = _.crossOrigin, _ = typeof _ == "string" ? _ === "use-credentials" ? _ : "" : void 0) : _ = null, v.d.C(R, _));
  }, ql.prefetchDNS = function(R) {
    typeof R == "string" && v.d.D(R);
  }, ql.preinit = function(R, _) {
    if (typeof R == "string" && _ && typeof _.as == "string") {
      var I = _.as, q = Nl(I, _.crossOrigin), ml = typeof _.integrity == "string" ? _.integrity : void 0, Fl = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
      I === "style" ? v.d.S(
        R,
        typeof _.precedence == "string" ? _.precedence : void 0,
        {
          crossOrigin: q,
          integrity: ml,
          fetchPriority: Fl
        }
      ) : I === "script" && v.d.X(R, {
        crossOrigin: q,
        integrity: ml,
        fetchPriority: Fl,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0
      });
    }
  }, ql.preinitModule = function(R, _) {
    if (typeof R == "string")
      if (typeof _ == "object" && _ !== null) {
        if (_.as == null || _.as === "script") {
          var I = Nl(
            _.as,
            _.crossOrigin
          );
          v.d.M(R, {
            crossOrigin: I,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
            nonce: typeof _.nonce == "string" ? _.nonce : void 0
          });
        }
      } else _ == null && v.d.M(R);
  }, ql.preload = function(R, _) {
    if (typeof R == "string" && typeof _ == "object" && _ !== null && typeof _.as == "string") {
      var I = _.as, q = Nl(I, _.crossOrigin);
      v.d.L(R, I, {
        crossOrigin: q,
        integrity: typeof _.integrity == "string" ? _.integrity : void 0,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0,
        type: typeof _.type == "string" ? _.type : void 0,
        fetchPriority: typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
        referrerPolicy: typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
        imageSrcSet: typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
        imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
        media: typeof _.media == "string" ? _.media : void 0
      });
    }
  }, ql.preloadModule = function(R, _) {
    if (typeof R == "string")
      if (_) {
        var I = Nl(_.as, _.crossOrigin);
        v.d.m(R, {
          as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
          crossOrigin: I,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0
        });
      } else v.d.m(R);
  }, ql.requestFormReset = function(R) {
    v.d.r(R);
  }, ql.unstable_batchedUpdates = function(R, _) {
    return R(_);
  }, ql.useFormState = function(R, _, I) {
    return yl.H.useFormState(R, _, I);
  }, ql.useFormStatus = function() {
    return yl.H.useHostTransitionStatus();
  }, ql.version = "19.2.5", ql;
}
var pm;
function uy() {
  if (pm) return df.exports;
  pm = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (X) {
        console.error(X);
      }
  }
  return T(), df.exports = ay(), df.exports;
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
function ey() {
  if (zm) return pe;
  zm = 1;
  var T = ly(), X = mf(), B = uy();
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
  function H(l) {
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
  function Nl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function R(l) {
    if (H(l) !== l)
      throw Error(v(188));
  }
  function _(l) {
    var t = l.alternate;
    if (!t) {
      if (t = H(l), t === null) throw Error(v(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return R(e), l;
          if (n === u) return R(e), t;
          n = n.sibling;
        }
        throw Error(v(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var i = !1, c = e.child; c; ) {
          if (c === a) {
            i = !0, a = e, u = n;
            break;
          }
          if (c === u) {
            i = !0, u = e, a = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              i = !0, a = n, u = e;
              break;
            }
            if (c === u) {
              i = !0, u = n, a = e;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(v(189));
        }
      }
      if (a.alternate !== u) throw Error(v(190));
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
  var q = Object.assign, ml = Symbol.for("react.element"), Fl = Symbol.for("react.transitional.element"), jl = Symbol.for("react.portal"), Hl = Symbol.for("react.fragment"), Ct = Symbol.for("react.strict_mode"), Wl = Symbol.for("react.profiler"), Ft = Symbol.for("react.consumer"), Ul = Symbol.for("react.context"), it = Symbol.for("react.forward_ref"), zt = Symbol.for("react.suspense"), Gl = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), Ql = Symbol.for("react.lazy"), _t = Symbol.for("react.activity"), xa = Symbol.for("react.memo_cache_sentinel"), Tt = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object" ? null : (l = Tt && l[Tt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var pa = Symbol.for("react.client.reference");
  function Dt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === pa ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Hl:
        return "Fragment";
      case Wl:
        return "Profiler";
      case Ct:
        return "StrictMode";
      case zt:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case _t:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case jl:
          return "Portal";
        case Ul:
          return l.displayName || "Context";
        case Ft:
          return (l._context.displayName || "Context") + ".Consumer";
        case it:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case w:
          return t = l.displayName || null, t !== null ? t : Dt(l.type) || "Memo";
        case Ql:
          t = l._payload, l = l._init;
          try {
            return Dt(l(t));
          } catch {
          }
      }
    return null;
  }
  var bt = Array.isArray, r = X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, E = B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ul = [], cl = -1;
  function d(l) {
    return { current: l };
  }
  function z(l) {
    0 > cl || (l.current = ul[cl], ul[cl] = null, cl--);
  }
  function A(l, t) {
    cl++, ul[cl] = l.current, l.current = t;
  }
  var O = d(null), j = d(null), Z = d(null), P = d(null);
  function Bl(l, t) {
    switch (A(Z, t), A(j, l), A(O, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Y0(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Y0(t), l = j0(t, l);
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
    z(O), A(O, l);
  }
  function gl() {
    z(O), z(j), z(Z);
  }
  function Mu(l) {
    l.memoizedState !== null && A(P, l);
    var t = O.current, a = j0(t, l.type);
    t !== a && (A(j, l), A(O, a));
  }
  function ze(l) {
    j.current === l && (z(O), z(j)), P.current === l && (z(P), he._currentValue = N);
  }
  var Xn, of;
  function za(l) {
    if (Xn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Xn = t && t[1] || "", of = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Xn + l + of;
  }
  var xn = !1;
  function Zn(l, t) {
    if (!l || xn) return "";
    xn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
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
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var f = i.split(`
`), y = c.split(`
`);
        for (e = u = 0; u < f.length && !f[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < y.length && !y[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === f.length || e === y.length)
          for (u = f.length - 1, e = y.length - 1; 1 <= u && 0 <= e && f[u] !== y[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (f[u] !== y[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || f[u] !== y[e]) {
                  var b = `
` + f[u].replace(" at new ", " at ");
                  return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      xn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? za(a) : "";
  }
  function Mm(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return za(l.type);
      case 16:
        return za("Lazy");
      case 13:
        return l.child !== t && t !== null ? za("Suspense Fallback") : za("Suspense");
      case 19:
        return za("SuspenseList");
      case 0:
      case 15:
        return Zn(l.type, !1);
      case 11:
        return Zn(l.type.render, !1);
      case 1:
        return Zn(l.type, !0);
      case 31:
        return za("Activity");
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
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Vn = Object.prototype.hasOwnProperty, Ln = T.unstable_scheduleCallback, Kn = T.unstable_cancelCallback, Om = T.unstable_shouldYield, Cm = T.unstable_requestPaint, $l = T.unstable_now, Dm = T.unstable_getCurrentPriorityLevel, vf = T.unstable_ImmediatePriority, hf = T.unstable_UserBlockingPriority, _e = T.unstable_NormalPriority, Rm = T.unstable_LowPriority, gf = T.unstable_IdlePriority, Um = T.log, qm = T.unstable_setDisableYieldValue, Ou = null, kl = null;
  function Wt(l) {
    if (typeof Um == "function" && qm(l), kl && typeof kl.setStrictMode == "function")
      try {
        kl.setStrictMode(Ou, l);
      } catch {
      }
  }
  var Il = Math.clz32 ? Math.clz32 : Bm, Nm = Math.log, Hm = Math.LN2;
  function Bm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Nm(l) / Hm | 0) | 0;
  }
  var Te = 256, Ee = 262144, Ae = 4194304;
  function _a(l) {
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
  function Me(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~n, u !== 0 ? e = _a(u) : (i &= c, i !== 0 ? e = _a(i) : a || (a = c & ~l, a !== 0 && (e = _a(a))))) : (c = u & ~n, c !== 0 ? e = _a(c) : i !== 0 ? e = _a(i) : a || (a = u & ~l, a !== 0 && (e = _a(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Cu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Ym(l, t) {
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
    var l = Ae;
    return Ae <<= 1, (Ae & 62914560) === 0 && (Ae = 4194304), l;
  }
  function Jn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Du(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function jm(l, t, a, u, e, n) {
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
    u !== 0 && rf(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function rf(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - Il(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
  }
  function Sf(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - Il(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
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
  function Fn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function zf() {
    var l = E.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : im(l.type));
  }
  function _f(l, t) {
    var a = E.p;
    try {
      return E.p = l, t();
    } finally {
      E.p = a;
    }
  }
  var $t = Math.random().toString(36).slice(2), Ml = "__reactFiber$" + $t, xl = "__reactProps$" + $t, Za = "__reactContainer$" + $t, Wn = "__reactEvents$" + $t, Gm = "__reactListeners$" + $t, Qm = "__reactHandles$" + $t, Tf = "__reactResources$" + $t, Ru = "__reactMarker$" + $t;
  function $n(l) {
    delete l[Ml], delete l[xl], delete l[Wn], delete l[Gm], delete l[Qm];
  }
  function Va(l) {
    var t = l[Ml];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Za] || a[Ml]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = L0(l); l !== null; ) {
            if (a = l[Ml]) return a;
            l = L0(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function La(l) {
    if (l = l[Ml] || l[Za]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Uu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(v(33));
  }
  function Ka(l) {
    var t = l[Tf];
    return t || (t = l[Tf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function El(l) {
    l[Ru] = !0;
  }
  var Ef = /* @__PURE__ */ new Set(), Af = {};
  function Ta(l, t) {
    Ja(l, t), Ja(l + "Capture", t);
  }
  function Ja(l, t) {
    for (Af[l] = t, l = 0; l < t.length; l++)
      Ef.add(t[l]);
  }
  var Xm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mf = {}, Of = {};
  function xm(l) {
    return Vn.call(Of, l) ? !0 : Vn.call(Mf, l) ? !1 : Xm.test(l) ? Of[l] = !0 : (Mf[l] = !0, !1);
  }
  function Oe(l, t, a) {
    if (xm(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Ce(l, t, a) {
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
  function Rt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
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
  function Cf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Zm(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(i) {
          a = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
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
      var t = Cf(l) ? "checked" : "value";
      l._valueTracker = Zm(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Df(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = Cf(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function De(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Vm = /[\n"\\]/g;
  function ft(l) {
    return l.replace(
      Vm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, a, u, e, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ct(t)) : l.value !== "" + ct(t) && (l.value = "" + ct(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, i, ct(t)) : a != null ? Pn(l, i, ct(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ct(c) : l.removeAttribute("name");
  }
  function Rf(l, t, a, u, e, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        kn(l);
        return;
      }
      a = a != null ? "" + ct(a) : "", t = t != null ? "" + ct(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), kn(l);
  }
  function Pn(l, t, a) {
    t === "number" && De(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function wa(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ct(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Uf(l, t, a) {
    if (t != null && (t = "" + ct(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ct(a) : "";
  }
  function qf(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(v(92));
        if (bt(u)) {
          if (1 < u.length) throw Error(v(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = ct(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), kn(l);
  }
  function Fa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Lm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nf(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Lm.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Hf(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(v(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && Nf(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Nf(l, n, t[n]);
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
  var Km = /* @__PURE__ */ new Map([
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
  ]), Jm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Re(l) {
    return Jm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ut() {
  }
  var ti = null;
  function ai(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Wa = null, $a = null;
  function Bf(l) {
    var t = La(l);
    if (t && (l = t.stateNode)) {
      var a = l[xl] || null;
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
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[xl] || null;
                if (!e) throw Error(v(90));
                In(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              u = a[t], u.form === l.form && Df(u);
          }
          break l;
        case "textarea":
          Uf(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && wa(l, !!a.multiple, t, !1);
      }
    }
  }
  var ui = !1;
  function Yf(l, t, a) {
    if (ui) return l(t, a);
    ui = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (ui = !1, (Wa !== null || $a !== null) && (rn(), Wa && (t = Wa, l = $a, $a = Wa = null, Bf(t), l)))
        for (t = 0; t < l.length; t++) Bf(l[t]);
    }
  }
  function qu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[xl] || null;
    if (u === null) return null;
    a = u[t];
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
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
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
  var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ei = !1;
  if (qt)
    try {
      var Nu = {};
      Object.defineProperty(Nu, "passive", {
        get: function() {
          ei = !0;
        }
      }), window.addEventListener("test", Nu, Nu), window.removeEventListener("test", Nu, Nu);
    } catch {
      ei = !1;
    }
  var kt = null, ni = null, Ue = null;
  function jf() {
    if (Ue) return Ue;
    var l, t = ni, a = t.length, u, e = "value" in kt ? kt.value : kt.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var i = a - l;
    for (u = 1; u <= i && t[a - u] === e[n - u]; u++) ;
    return Ue = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function qe(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ne() {
    return !0;
  }
  function Gf() {
    return !1;
  }
  function Zl(l) {
    function t(a, u, e, n, i) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ne : Gf, this.isPropagationStopped = Gf, this;
    }
    return q(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Ne);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Ne);
      },
      persist: function() {
      },
      isPersistent: Ne
    }), t;
  }
  var Ea = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, He = Zl(Ea), Hu = q({}, Ea, { view: 0, detail: 0 }), wm = Zl(Hu), ii, ci, Bu, Be = q({}, Hu, {
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
    getModifierState: si,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Bu && (Bu && l.type === "mousemove" ? (ii = l.screenX - Bu.screenX, ci = l.screenY - Bu.screenY) : ci = ii = 0, Bu = l), ii);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ci;
    }
  }), Qf = Zl(Be), Fm = q({}, Be, { dataTransfer: 0 }), Wm = Zl(Fm), $m = q({}, Hu, { relatedTarget: 0 }), fi = Zl($m), km = q({}, Ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Im = Zl(km), Pm = q({}, Ea, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), lo = Zl(Pm), to = q({}, Ea, { data: 0 }), Xf = Zl(to), ao = {
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
  }, uo = {
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
  }, eo = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function no(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = eo[l]) ? !!t[l] : !1;
  }
  function si() {
    return no;
  }
  var io = q({}, Hu, {
    key: function(l) {
      if (l.key) {
        var t = ao[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = qe(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? uo[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: si,
    charCode: function(l) {
      return l.type === "keypress" ? qe(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? qe(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), co = Zl(io), fo = q({}, Be, {
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
  }), xf = Zl(fo), so = q({}, Hu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: si
  }), mo = Zl(so), oo = q({}, Ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), yo = Zl(oo), vo = q({}, Be, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ho = Zl(vo), go = q({}, Ea, {
    newState: 0,
    oldState: 0
  }), bo = Zl(go), ro = [9, 13, 27, 32], di = qt && "CompositionEvent" in window, Yu = null;
  qt && "documentMode" in document && (Yu = document.documentMode);
  var So = qt && "TextEvent" in window && !Yu, Zf = qt && (!di || Yu && 8 < Yu && 11 >= Yu), Vf = " ", Lf = !1;
  function Kf(l, t) {
    switch (l) {
      case "keyup":
        return ro.indexOf(t.keyCode) !== -1;
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
  function po(l, t) {
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
  function zo(l, t) {
    if (ka)
      return l === "compositionend" || !di && Kf(l, t) ? (l = jf(), Ue = ni = kt = null, ka = !1, l) : null;
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
  var _o = {
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
    return t === "input" ? !!_o[l.type] : t === "textarea";
  }
  function Ff(l, t, a, u) {
    Wa ? $a ? $a.push(u) : $a = [u] : Wa = u, t = An(t, "onChange"), 0 < t.length && (a = new He(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var ju = null, Gu = null;
  function To(l) {
    R0(l, 0);
  }
  function Ye(l) {
    var t = Uu(l);
    if (Df(t)) return l;
  }
  function Wf(l, t) {
    if (l === "change") return t;
  }
  var $f = !1;
  if (qt) {
    var mi;
    if (qt) {
      var oi = "oninput" in document;
      if (!oi) {
        var kf = document.createElement("div");
        kf.setAttribute("oninput", "return;"), oi = typeof kf.oninput == "function";
      }
      mi = oi;
    } else mi = !1;
    $f = mi && (!document.documentMode || 9 < document.documentMode);
  }
  function If() {
    ju && (ju.detachEvent("onpropertychange", Pf), Gu = ju = null);
  }
  function Pf(l) {
    if (l.propertyName === "value" && Ye(Gu)) {
      var t = [];
      Ff(
        t,
        Gu,
        l,
        ai(l)
      ), Yf(To, t);
    }
  }
  function Eo(l, t, a) {
    l === "focusin" ? (If(), ju = t, Gu = a, ju.attachEvent("onpropertychange", Pf)) : l === "focusout" && If();
  }
  function Ao(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(Gu);
  }
  function Mo(l, t) {
    if (l === "click") return Ye(t);
  }
  function Oo(l, t) {
    if (l === "input" || l === "change")
      return Ye(t);
  }
  function Co(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Pl = typeof Object.is == "function" ? Object.is : Co;
  function Qu(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Vn.call(t, e) || !Pl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function ls(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ts(l, t) {
    var a = ls(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t)
          return { node: a, offset: t - l };
        l = u;
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
      a = ls(a);
    }
  }
  function as(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? as(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function us(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = De(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = De(l.document);
    }
    return t;
  }
  function yi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Do = qt && "documentMode" in document && 11 >= document.documentMode, Ia = null, vi = null, Xu = null, hi = !1;
  function es(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    hi || Ia == null || Ia !== De(u) || (u = Ia, "selectionStart" in u && yi(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Xu && Qu(Xu, u) || (Xu = u, u = An(vi, "onSelect"), 0 < u.length && (t = new He(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: u }), t.target = Ia)));
  }
  function Aa(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Pa = {
    animationend: Aa("Animation", "AnimationEnd"),
    animationiteration: Aa("Animation", "AnimationIteration"),
    animationstart: Aa("Animation", "AnimationStart"),
    transitionrun: Aa("Transition", "TransitionRun"),
    transitionstart: Aa("Transition", "TransitionStart"),
    transitioncancel: Aa("Transition", "TransitionCancel"),
    transitionend: Aa("Transition", "TransitionEnd")
  }, gi = {}, ns = {};
  qt && (ns = document.createElement("div").style, "AnimationEvent" in window || (delete Pa.animationend.animation, delete Pa.animationiteration.animation, delete Pa.animationstart.animation), "TransitionEvent" in window || delete Pa.transitionend.transition);
  function Ma(l) {
    if (gi[l]) return gi[l];
    if (!Pa[l]) return l;
    var t = Pa[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in ns)
        return gi[l] = t[a];
    return l;
  }
  var is = Ma("animationend"), cs = Ma("animationiteration"), fs = Ma("animationstart"), Ro = Ma("transitionrun"), Uo = Ma("transitionstart"), qo = Ma("transitioncancel"), ss = Ma("transitionend"), ds = /* @__PURE__ */ new Map(), bi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bi.push("scrollEnd");
  function rt(l, t) {
    ds.set(l, t), Ta(t, [l]);
  }
  var je = typeof reportError == "function" ? reportError : function(l) {
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
  }, st = [], lu = 0, ri = 0;
  function Ge() {
    for (var l = lu, t = ri = lu = 0; t < l; ) {
      var a = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var n = st[t];
      if (st[t++] = null, u !== null && e !== null) {
        var i = u.pending;
        i === null ? e.next = e : (e.next = i.next, i.next = e), u.pending = e;
      }
      n !== 0 && ms(a, e, n);
    }
  }
  function Qe(l, t, a, u) {
    st[lu++] = l, st[lu++] = t, st[lu++] = a, st[lu++] = u, ri |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function Si(l, t, a, u) {
    return Qe(l, t, a, u), Xe(l);
  }
  function Oa(l, t) {
    return Qe(l, null, null, t), Xe(l);
  }
  function ms(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Il(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function Xe(l) {
    if (50 < fe)
      throw fe = 0, Cc = null, Error(v(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var tu = {};
  function No(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(l, t, a, u) {
    return new No(l, t, a, u);
  }
  function pi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Nt(l, t) {
    var a = l.alternate;
    return a === null ? (a = lt(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function os(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function xe(l, t, a, u, e, n) {
    var i = 0;
    if (u = l, typeof l == "function") pi(l) && (i = 1);
    else if (typeof l == "string")
      i = G1(
        l,
        a,
        O.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case _t:
          return l = lt(31, a, t, e), l.elementType = _t, l.lanes = n, l;
        case Hl:
          return Ca(a.children, e, n, t);
        case Ct:
          i = 8, e |= 24;
          break;
        case Wl:
          return l = lt(12, a, t, e | 2), l.elementType = Wl, l.lanes = n, l;
        case zt:
          return l = lt(13, a, t, e), l.elementType = zt, l.lanes = n, l;
        case Gl:
          return l = lt(19, a, t, e), l.elementType = Gl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ul:
                i = 10;
                break l;
              case Ft:
                i = 9;
                break l;
              case it:
                i = 11;
                break l;
              case w:
                i = 14;
                break l;
              case Ql:
                i = 16, u = null;
                break l;
            }
          i = 29, a = Error(
            v(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return t = lt(i, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function Ca(l, t, a, u) {
    return l = lt(7, l, u, t), l.lanes = a, l;
  }
  function zi(l, t, a) {
    return l = lt(6, l, null, t), l.lanes = a, l;
  }
  function ys(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function _i(l, t, a) {
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
  var vs = /* @__PURE__ */ new WeakMap();
  function dt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = vs.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: yf(t)
      }, vs.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: yf(t)
    };
  }
  var au = [], uu = 0, Ze = null, xu = 0, mt = [], ot = 0, It = null, Et = 1, At = "";
  function Ht(l, t) {
    au[uu++] = xu, au[uu++] = Ze, Ze = l, xu = t;
  }
  function hs(l, t, a) {
    mt[ot++] = Et, mt[ot++] = At, mt[ot++] = It, It = l;
    var u = Et;
    l = At;
    var e = 32 - Il(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - Il(t) + e;
    if (30 < n) {
      var i = e - e % 5;
      n = (u & (1 << i) - 1).toString(32), u >>= i, e -= i, Et = 1 << 32 - Il(t) + e | a << e | u, At = n + l;
    } else
      Et = 1 << n | a << e | u, At = l;
  }
  function Ti(l) {
    l.return !== null && (Ht(l, 1), hs(l, 1, 0));
  }
  function Ei(l) {
    for (; l === Ze; )
      Ze = au[--uu], au[uu] = null, xu = au[--uu], au[uu] = null;
    for (; l === It; )
      It = mt[--ot], mt[ot] = null, At = mt[--ot], mt[ot] = null, Et = mt[--ot], mt[ot] = null;
  }
  function gs(l, t) {
    mt[ot++] = Et, mt[ot++] = At, mt[ot++] = It, Et = t.id, At = t.overflow, It = l;
  }
  var Ol = null, sl = null, F = !1, Pt = null, yt = !1, Ai = Error(v(519));
  function la(l) {
    var t = Error(
      v(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Zu(dt(t, l)), Ai;
  }
  function bs(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[Ml] = l, t[xl] = u, a) {
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
        for (a = 0; a < de.length; a++)
          L(de[a], t);
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
        L("invalid", t), Rf(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        L("invalid", t);
        break;
      case "textarea":
        L("invalid", t), qf(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || H0(t.textContent, a) ? (u.popover != null && (L("beforetoggle", t), L("toggle", t)), u.onScroll != null && L("scroll", t), u.onScrollEnd != null && L("scrollend", t), u.onClick != null && (t.onclick = Ut), t = !0) : t = !1, t || la(l, !0);
  }
  function rs(l) {
    for (Ol = l.return; Ol; )
      switch (Ol.tag) {
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
          Ol = Ol.return;
      }
  }
  function eu(l) {
    if (l !== Ol) return !1;
    if (!F) return rs(l), F = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Vc(l.type, l.memoizedProps)), a = !a), a && sl && la(l), rs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(317));
      sl = V0(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(317));
      sl = V0(l);
    } else
      t === 27 ? (t = sl, va(l.type) ? (l = Fc, Fc = null, sl = l) : sl = t) : sl = Ol ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    sl = Ol = null, F = !1;
  }
  function Mi() {
    var l = Pt;
    return l !== null && (Jl === null ? Jl = l : Jl.push.apply(
      Jl,
      l
    ), Pt = null), l;
  }
  function Zu(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Oi = d(null), Ra = null, Bt = null;
  function ta(l, t, a) {
    A(Oi, t._currentValue), t._currentValue = a;
  }
  function Yt(l) {
    l._currentValue = Oi.current, z(Oi);
  }
  function Ci(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Di(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var i = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Ci(
                n.return,
                a,
                l
              ), u || (i = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (i = e.return, i === null) throw Error(v(341));
        i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Ci(i, a, l), i = null;
      } else i = e.child;
      if (i !== null) i.return = e;
      else
        for (i = e; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (e = i.sibling, e !== null) {
            e.return = i.return, i = e;
            break;
          }
          i = i.return;
        }
      e = i;
    }
  }
  function nu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var i = e.alternate;
        if (i === null) throw Error(v(387));
        if (i = i.memoizedProps, i !== null) {
          var c = e.type;
          Pl(e.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === P.current) {
        if (i = e.alternate, i === null) throw Error(v(387));
        i.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(he) : l = [he]);
      }
      e = e.return;
    }
    l !== null && Di(
      t,
      l,
      a,
      u
    ), t.flags |= 262144;
  }
  function Ve(l) {
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
  function Ua(l) {
    Ra = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Cl(l) {
    return Ss(Ra, l);
  }
  function Le(l, t) {
    return Ra === null && Ua(l), Ss(l, t);
  }
  function Ss(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Bt === null) {
      if (l === null) throw Error(v(308));
      Bt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Bt = Bt.next = t;
    return a;
  }
  var Ho = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, Bo = T.unstable_scheduleCallback, Yo = T.unstable_NormalPriority, Sl = {
    $$typeof: Ul,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ri() {
    return {
      controller: new Ho(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Vu(l) {
    l.refCount--, l.refCount === 0 && Bo(Yo, function() {
      l.controller.abort();
    });
  }
  var Lu = null, Ui = 0, iu = 0, cu = null;
  function jo(l, t) {
    if (Lu === null) {
      var a = Lu = [];
      Ui = 0, iu = Hc(), cu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Ui++, t.then(ps, ps), t;
  }
  function ps() {
    if (--Ui === 0 && Lu !== null) {
      cu !== null && (cu.status = "fulfilled");
      var l = Lu;
      Lu = null, iu = 0, cu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Go(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), u;
  }
  var zs = r.S;
  r.S = function(l, t) {
    e0 = $l(), typeof t == "object" && t !== null && typeof t.then == "function" && jo(l, t), zs !== null && zs(l, t);
  };
  var qa = d(null);
  function qi() {
    var l = qa.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? A(qa, qa.current) : A(qa, t.pool);
  }
  function _s() {
    var l = qi();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var fu = Error(v(460)), Ni = Error(v(474)), Je = Error(v(542)), we = { then: function() {
  } };
  function Ts(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Es(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Ut, Ut), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ms(l), l;
      default:
        if (typeof t.status == "string") t.then(Ut, Ut);
        else {
          if (l = fl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(v(482));
          l = t, l.status = "pending", l.then(
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ms(l), l;
        }
        throw Ha = t, fu;
    }
  }
  function Na(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ha = a, fu) : a;
    }
  }
  var Ha = null;
  function As() {
    if (Ha === null) throw Error(v(459));
    var l = Ha;
    return Ha = null, l;
  }
  function Ms(l) {
    if (l === fu || l === Je)
      throw Error(v(483));
  }
  var su = null, Ku = 0;
  function Fe(l) {
    var t = Ku;
    return Ku += 1, su === null && (su = []), Es(su, l, t);
  }
  function Ju(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function We(l, t) {
    throw t.$$typeof === ml ? Error(v(525)) : (l = Object.prototype.toString.call(t), Error(
      v(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Os(l) {
    function t(m, s) {
      if (l) {
        var o = m.deletions;
        o === null ? (m.deletions = [s], m.flags |= 16) : o.push(s);
      }
    }
    function a(m, s) {
      if (!l) return null;
      for (; s !== null; )
        t(m, s), s = s.sibling;
      return null;
    }
    function u(m) {
      for (var s = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? s.set(m.key, m) : s.set(m.index, m), m = m.sibling;
      return s;
    }
    function e(m, s) {
      return m = Nt(m, s), m.index = 0, m.sibling = null, m;
    }
    function n(m, s, o) {
      return m.index = o, l ? (o = m.alternate, o !== null ? (o = o.index, o < s ? (m.flags |= 67108866, s) : o) : (m.flags |= 67108866, s)) : (m.flags |= 1048576, s);
    }
    function i(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, s, o, S) {
      return s === null || s.tag !== 6 ? (s = zi(o, m.mode, S), s.return = m, s) : (s = e(s, o), s.return = m, s);
    }
    function f(m, s, o, S) {
      var D = o.type;
      return D === Hl ? b(
        m,
        s,
        o.props.children,
        S,
        o.key
      ) : s !== null && (s.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Ql && Na(D) === s.type) ? (s = e(s, o.props), Ju(s, o), s.return = m, s) : (s = xe(
        o.type,
        o.key,
        o.props,
        null,
        m.mode,
        S
      ), Ju(s, o), s.return = m, s);
    }
    function y(m, s, o, S) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== o.containerInfo || s.stateNode.implementation !== o.implementation ? (s = _i(o, m.mode, S), s.return = m, s) : (s = e(s, o.children || []), s.return = m, s);
    }
    function b(m, s, o, S, D) {
      return s === null || s.tag !== 7 ? (s = Ca(
        o,
        m.mode,
        S,
        D
      ), s.return = m, s) : (s = e(s, o), s.return = m, s);
    }
    function p(m, s, o) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = zi(
          "" + s,
          m.mode,
          o
        ), s.return = m, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Fl:
            return o = xe(
              s.type,
              s.key,
              s.props,
              null,
              m.mode,
              o
            ), Ju(o, s), o.return = m, o;
          case jl:
            return s = _i(
              s,
              m.mode,
              o
            ), s.return = m, s;
          case Ql:
            return s = Na(s), p(m, s, o);
        }
        if (bt(s) || Xl(s))
          return s = Ca(
            s,
            m.mode,
            o,
            null
          ), s.return = m, s;
        if (typeof s.then == "function")
          return p(m, Fe(s), o);
        if (s.$$typeof === Ul)
          return p(
            m,
            Le(m, s),
            o
          );
        We(m, s);
      }
      return null;
    }
    function h(m, s, o, S) {
      var D = s !== null ? s.key : null;
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return D !== null ? null : c(m, s, "" + o, S);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Fl:
            return o.key === D ? f(m, s, o, S) : null;
          case jl:
            return o.key === D ? y(m, s, o, S) : null;
          case Ql:
            return o = Na(o), h(m, s, o, S);
        }
        if (bt(o) || Xl(o))
          return D !== null ? null : b(m, s, o, S, null);
        if (typeof o.then == "function")
          return h(
            m,
            s,
            Fe(o),
            S
          );
        if (o.$$typeof === Ul)
          return h(
            m,
            s,
            Le(m, o),
            S
          );
        We(m, o);
      }
      return null;
    }
    function g(m, s, o, S, D) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return m = m.get(o) || null, c(s, m, "" + S, D);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Fl:
            return m = m.get(
              S.key === null ? o : S.key
            ) || null, f(s, m, S, D);
          case jl:
            return m = m.get(
              S.key === null ? o : S.key
            ) || null, y(s, m, S, D);
          case Ql:
            return S = Na(S), g(
              m,
              s,
              o,
              S,
              D
            );
        }
        if (bt(S) || Xl(S))
          return m = m.get(o) || null, b(s, m, S, D, null);
        if (typeof S.then == "function")
          return g(
            m,
            s,
            o,
            Fe(S),
            D
          );
        if (S.$$typeof === Ul)
          return g(
            m,
            s,
            o,
            Le(s, S),
            D
          );
        We(s, S);
      }
      return null;
    }
    function M(m, s, o, S) {
      for (var D = null, W = null, C = s, Q = s = 0, J = null; C !== null && Q < o.length; Q++) {
        C.index > Q ? (J = C, C = null) : J = C.sibling;
        var $ = h(
          m,
          C,
          o[Q],
          S
        );
        if ($ === null) {
          C === null && (C = J);
          break;
        }
        l && C && $.alternate === null && t(m, C), s = n($, s, Q), W === null ? D = $ : W.sibling = $, W = $, C = J;
      }
      if (Q === o.length)
        return a(m, C), F && Ht(m, Q), D;
      if (C === null) {
        for (; Q < o.length; Q++)
          C = p(m, o[Q], S), C !== null && (s = n(
            C,
            s,
            Q
          ), W === null ? D = C : W.sibling = C, W = C);
        return F && Ht(m, Q), D;
      }
      for (C = u(C); Q < o.length; Q++)
        J = g(
          C,
          m,
          Q,
          o[Q],
          S
        ), J !== null && (l && J.alternate !== null && C.delete(
          J.key === null ? Q : J.key
        ), s = n(
          J,
          s,
          Q
        ), W === null ? D = J : W.sibling = J, W = J);
      return l && C.forEach(function(Sa) {
        return t(m, Sa);
      }), F && Ht(m, Q), D;
    }
    function U(m, s, o, S) {
      if (o == null) throw Error(v(151));
      for (var D = null, W = null, C = s, Q = s = 0, J = null, $ = o.next(); C !== null && !$.done; Q++, $ = o.next()) {
        C.index > Q ? (J = C, C = null) : J = C.sibling;
        var Sa = h(m, C, $.value, S);
        if (Sa === null) {
          C === null && (C = J);
          break;
        }
        l && C && Sa.alternate === null && t(m, C), s = n(Sa, s, Q), W === null ? D = Sa : W.sibling = Sa, W = Sa, C = J;
      }
      if ($.done)
        return a(m, C), F && Ht(m, Q), D;
      if (C === null) {
        for (; !$.done; Q++, $ = o.next())
          $ = p(m, $.value, S), $ !== null && (s = n($, s, Q), W === null ? D = $ : W.sibling = $, W = $);
        return F && Ht(m, Q), D;
      }
      for (C = u(C); !$.done; Q++, $ = o.next())
        $ = g(C, m, Q, $.value, S), $ !== null && (l && $.alternate !== null && C.delete($.key === null ? Q : $.key), s = n($, s, Q), W === null ? D = $ : W.sibling = $, W = $);
      return l && C.forEach(function(W1) {
        return t(m, W1);
      }), F && Ht(m, Q), D;
    }
    function il(m, s, o, S) {
      if (typeof o == "object" && o !== null && o.type === Hl && o.key === null && (o = o.props.children), typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Fl:
            l: {
              for (var D = o.key; s !== null; ) {
                if (s.key === D) {
                  if (D = o.type, D === Hl) {
                    if (s.tag === 7) {
                      a(
                        m,
                        s.sibling
                      ), S = e(
                        s,
                        o.props.children
                      ), S.return = m, m = S;
                      break l;
                    }
                  } else if (s.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Ql && Na(D) === s.type) {
                    a(
                      m,
                      s.sibling
                    ), S = e(s, o.props), Ju(S, o), S.return = m, m = S;
                    break l;
                  }
                  a(m, s);
                  break;
                } else t(m, s);
                s = s.sibling;
              }
              o.type === Hl ? (S = Ca(
                o.props.children,
                m.mode,
                S,
                o.key
              ), S.return = m, m = S) : (S = xe(
                o.type,
                o.key,
                o.props,
                null,
                m.mode,
                S
              ), Ju(S, o), S.return = m, m = S);
            }
            return i(m);
          case jl:
            l: {
              for (D = o.key; s !== null; ) {
                if (s.key === D)
                  if (s.tag === 4 && s.stateNode.containerInfo === o.containerInfo && s.stateNode.implementation === o.implementation) {
                    a(
                      m,
                      s.sibling
                    ), S = e(s, o.children || []), S.return = m, m = S;
                    break l;
                  } else {
                    a(m, s);
                    break;
                  }
                else t(m, s);
                s = s.sibling;
              }
              S = _i(o, m.mode, S), S.return = m, m = S;
            }
            return i(m);
          case Ql:
            return o = Na(o), il(
              m,
              s,
              o,
              S
            );
        }
        if (bt(o))
          return M(
            m,
            s,
            o,
            S
          );
        if (Xl(o)) {
          if (D = Xl(o), typeof D != "function") throw Error(v(150));
          return o = D.call(o), U(
            m,
            s,
            o,
            S
          );
        }
        if (typeof o.then == "function")
          return il(
            m,
            s,
            Fe(o),
            S
          );
        if (o.$$typeof === Ul)
          return il(
            m,
            s,
            Le(m, o),
            S
          );
        We(m, o);
      }
      return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, s !== null && s.tag === 6 ? (a(m, s.sibling), S = e(s, o), S.return = m, m = S) : (a(m, s), S = zi(o, m.mode, S), S.return = m, m = S), i(m)) : a(m, s);
    }
    return function(m, s, o, S) {
      try {
        Ku = 0;
        var D = il(
          m,
          s,
          o,
          S
        );
        return su = null, D;
      } catch (C) {
        if (C === fu || C === Je) throw C;
        var W = lt(29, C, null, m.mode);
        return W.lanes = S, W.return = m, W;
      } finally {
      }
    };
  }
  var Ba = Os(!0), Cs = Os(!1), aa = !1;
  function Hi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Bi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ua(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ea(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (k & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Xe(l), ms(l, null, a), t;
    }
    return Qe(l, u, t, a), Xe(l);
  }
  function wu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, Sf(l, a);
    }
  }
  function Yi(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = i : n = n.next = i, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var ji = !1;
  function Fu() {
    if (ji) {
      var l = cu;
      if (l !== null) throw l;
    }
  }
  function Wu(l, t, a, u) {
    ji = !1;
    var e = l.updateQueue;
    aa = !1;
    var n = e.firstBaseUpdate, i = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var f = c, y = f.next;
      f.next = null, i === null ? n = y : i.next = y, i = f;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, c = b.lastBaseUpdate, c !== i && (c === null ? b.firstBaseUpdate = y : c.next = y, b.lastBaseUpdate = f));
    }
    if (n !== null) {
      var p = e.baseState;
      i = 0, b = y = f = null, c = n;
      do {
        var h = c.lane & -536870913, g = h !== c.lane;
        if (g ? (K & h) === h : (u & h) === h) {
          h !== 0 && h === iu && (ji = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var M = l, U = c;
            h = t;
            var il = a;
            switch (U.tag) {
              case 1:
                if (M = U.payload, typeof M == "function") {
                  p = M.call(il, p, h);
                  break l;
                }
                p = M;
                break l;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = U.payload, h = typeof M == "function" ? M.call(il, p, h) : M, h == null) break l;
                p = q({}, p, h);
                break l;
              case 2:
                aa = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, g && (l.flags |= 8192), g = e.callbacks, g === null ? e.callbacks = [h] : g.push(h));
        } else
          g = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, b === null ? (y = b = g, f = p) : b = b.next = g, i |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          g = c, c = g.next, g.next = null, e.lastBaseUpdate = g, e.shared.pending = null;
        }
      } while (!0);
      b === null && (f = p), e.baseState = f, e.firstBaseUpdate = y, e.lastBaseUpdate = b, n === null && (e.shared.lanes = 0), sa |= i, l.lanes = i, l.memoizedState = p;
    }
  }
  function Ds(l, t) {
    if (typeof l != "function")
      throw Error(v(191, l));
    l.call(t);
  }
  function Rs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        Ds(a[l], t);
  }
  var du = d(null), $e = d(0);
  function Us(l, t) {
    l = Kt, A($e, l), A(du, t), Kt = l | t.baseLanes;
  }
  function Gi() {
    A($e, Kt), A(du, du.current);
  }
  function Qi() {
    Kt = $e.current, z(du), z($e);
  }
  var tt = d(null), vt = null;
  function na(l) {
    var t = l.alternate;
    A(bl, bl.current & 1), A(tt, l), vt === null && (t === null || du.current !== null || t.memoizedState !== null) && (vt = l);
  }
  function Xi(l) {
    A(bl, bl.current), A(tt, l), vt === null && (vt = l);
  }
  function qs(l) {
    l.tag === 22 ? (A(bl, bl.current), A(tt, l), vt === null && (vt = l)) : ia();
  }
  function ia() {
    A(bl, bl.current), A(tt, tt.current);
  }
  function at(l) {
    z(tt), vt === l && (vt = null), z(bl);
  }
  var bl = d(0);
  function ke(l) {
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
  var jt = 0, G = null, el = null, pl = null, Ie = !1, mu = !1, Ya = !1, Pe = 0, $u = 0, ou = null, Qo = 0;
  function vl() {
    throw Error(v(321));
  }
  function xi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Zi(l, t, a, u, e, n) {
    return jt = n, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, r.H = l === null || l.memoizedState === null ? hd : uc, Ya = !1, n = a(u, e), Ya = !1, mu && (n = Hs(
      t,
      a,
      u,
      e
    )), Ns(l), n;
  }
  function Ns(l) {
    r.H = Pu;
    var t = el !== null && el.next !== null;
    if (jt = 0, pl = el = G = null, Ie = !1, $u = 0, ou = null, t) throw Error(v(300));
    l === null || zl || (l = l.dependencies, l !== null && Ve(l) && (zl = !0));
  }
  function Hs(l, t, a, u) {
    G = l;
    var e = 0;
    do {
      if (mu && (ou = null), $u = 0, mu = !1, 25 <= e) throw Error(v(301));
      if (e += 1, pl = el = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      r.H = gd, n = t(a, u);
    } while (mu);
    return n;
  }
  function Xo() {
    var l = r.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ku(t) : t, l = l.useState()[0], (el !== null ? el.memoizedState : null) !== l && (G.flags |= 1024), t;
  }
  function Vi() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Li(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Ki(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    jt = 0, pl = el = G = null, mu = !1, $u = Pe = 0, ou = null;
  }
  function Yl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return pl === null ? G.memoizedState = pl = l : pl = pl.next = l, pl;
  }
  function rl() {
    if (el === null) {
      var l = G.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = pl === null ? G.memoizedState : pl.next;
    if (t !== null)
      pl = t, el = l;
    else {
      if (l === null)
        throw G.alternate === null ? Error(v(467)) : Error(v(310));
      el = l, l = {
        memoizedState: el.memoizedState,
        baseState: el.baseState,
        baseQueue: el.baseQueue,
        queue: el.queue,
        next: null
      }, pl === null ? G.memoizedState = pl = l : pl = pl.next = l;
    }
    return pl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ku(l) {
    var t = $u;
    return $u += 1, ou === null && (ou = []), l = Es(ou, l, t), t = G, (pl === null ? t.memoizedState : pl.next) === null && (t = t.alternate, r.H = t === null || t.memoizedState === null ? hd : uc), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ku(l);
      if (l.$$typeof === Ul) return Cl(l);
    }
    throw Error(v(438, String(l)));
  }
  function Ji(l) {
    var t = null, a = G.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = G.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ln(), G.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = xa;
    return t.index++, a;
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = rl();
    return wi(t, el, l);
  }
  function wi(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(v(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var i = e.next;
        e.next = n.next, n.next = i;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
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
            }), p === iu && (b = !0);
          else if ((jt & h) === h) {
            y = y.next, h === iu && (b = !0);
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
            }, f === null ? (c = f = p, i = n) : f = f.next = p, G.lanes |= h, sa |= h;
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
          }, f === null ? (c = f = h, i = n) : f = f.next = h, G.lanes |= p, sa |= p;
        y = y.next;
      } while (y !== null && y !== t);
      if (f === null ? i = n : f.next = c, !Pl(n, l.memoizedState) && (zl = !0, b && (a = cu, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = i, l.baseQueue = f, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Fi(l) {
    var t = rl(), a = t.queue;
    if (a === null) throw Error(v(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var i = e = e.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== e);
      Pl(n, t.memoizedState) || (zl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function Bs(l, t, a) {
    var u = G, e = rl(), n = F;
    if (n) {
      if (a === void 0) throw Error(v(407));
      a = a();
    } else a = t();
    var i = !Pl(
      (el || e).memoizedState,
      a
    );
    if (i && (e.memoizedState = a, zl = !0), e = e.queue, ki(Gs.bind(null, u, e, l), [
      l
    ]), e.getSnapshot !== t || i || pl !== null && pl.memoizedState.tag & 1) {
      if (u.flags |= 2048, yu(
        9,
        { destroy: void 0 },
        js.bind(
          null,
          u,
          e,
          a,
          t
        ),
        null
      ), fl === null) throw Error(v(349));
      n || (jt & 127) !== 0 || Ys(u, t, a);
    }
    return a;
  }
  function Ys(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = G.updateQueue, t === null ? (t = ln(), G.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function js(l, t, a, u) {
    t.value = a, t.getSnapshot = u, Qs(t) && Xs(l);
  }
  function Gs(l, t, a) {
    return a(function() {
      Qs(t) && Xs(l);
    });
  }
  function Qs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Pl(l, a);
    } catch {
      return !0;
    }
  }
  function Xs(l) {
    var t = Oa(l, 2);
    t !== null && wl(t, l, 2);
  }
  function Wi(l) {
    var t = Yl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ya) {
        Wt(!0);
        try {
          a();
        } finally {
          Wt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gt,
      lastRenderedState: l
    }, t;
  }
  function xs(l, t, a, u) {
    return l.baseState = a, wi(
      l,
      el,
      typeof u == "function" ? u : Gt
    );
  }
  function xo(l, t, a, u, e) {
    if (nn(l)) throw Error(v(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
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
      r.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Zs(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Zs(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = r.T, i = {};
      r.T = i;
      try {
        var c = a(e, u), f = r.S;
        f !== null && f(i, c), Vs(l, t, c);
      } catch (y) {
        $i(l, t, y);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), r.T = n;
      }
    } else
      try {
        n = a(e, u), Vs(l, t, n);
      } catch (y) {
        $i(l, t, y);
      }
  }
  function Vs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        Ls(l, t, u);
      },
      function(u) {
        return $i(l, t, u);
      }
    ) : Ls(l, t, a);
  }
  function Ls(l, t, a) {
    t.status = "fulfilled", t.value = a, Ks(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Zs(l, a)));
  }
  function $i(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, Ks(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function Ks(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Js(l, t) {
    return t;
  }
  function ws(l, t) {
    if (F) {
      var a = fl.formState;
      if (a !== null) {
        l: {
          var u = G;
          if (F) {
            if (sl) {
              t: {
                for (var e = sl, n = yt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = ht(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                sl = ht(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            la(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Yl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Js,
      lastRenderedState: t
    }, a.queue = u, a = od.bind(
      null,
      G,
      u
    ), u.dispatch = a, u = Wi(!1), n = ac.bind(
      null,
      G,
      !1,
      u.queue
    ), u = Yl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = xo.bind(
      null,
      G,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function Fs(l) {
    var t = rl();
    return Ws(t, el, l);
  }
  function Ws(l, t, a) {
    if (t = wi(
      l,
      t,
      Js
    )[0], l = an(Gt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = ku(t);
      } catch (i) {
        throw i === fu ? Je : i;
      }
    else u = t;
    t = rl();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (G.flags |= 2048, yu(
      9,
      { destroy: void 0 },
      Zo.bind(null, e, a),
      null
    )), [u, n, l];
  }
  function Zo(l, t) {
    l.action = t;
  }
  function $s(l) {
    var t = rl(), a = el;
    if (a !== null)
      return Ws(t, a, l);
    rl(), t = t.memoizedState, a = rl();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function yu(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = G.updateQueue, t === null && (t = ln(), G.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function ks() {
    return rl().memoizedState;
  }
  function un(l, t, a, u) {
    var e = Yl();
    G.flags |= l, e.memoizedState = yu(
      1 | t,
      { destroy: void 0 },
      a,
      u === void 0 ? null : u
    );
  }
  function en(l, t, a, u) {
    var e = rl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    el !== null && u !== null && xi(u, el.memoizedState.deps) ? e.memoizedState = yu(t, n, a, u) : (G.flags |= l, e.memoizedState = yu(
      1 | t,
      n,
      a,
      u
    ));
  }
  function Is(l, t) {
    un(8390656, 8, l, t);
  }
  function ki(l, t) {
    en(2048, 8, l, t);
  }
  function Vo(l) {
    G.flags |= 4;
    var t = G.updateQueue;
    if (t === null)
      t = ln(), G.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function Ps(l) {
    var t = rl().memoizedState;
    return Vo({ ref: t, nextImpl: l }), function() {
      if ((k & 2) !== 0) throw Error(v(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ld(l, t) {
    return en(4, 2, l, t);
  }
  function td(l, t) {
    return en(4, 4, l, t);
  }
  function ad(l, t) {
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
    a = a != null ? a.concat([l]) : null, en(4, 4, ad.bind(null, t, l), a);
  }
  function Ii() {
  }
  function ed(l, t) {
    var a = rl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && xi(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function nd(l, t) {
    var a = rl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && xi(t, u[1]))
      return u[0];
    if (u = l(), Ya) {
      Wt(!0);
      try {
        l();
      } finally {
        Wt(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function Pi(l, t, a) {
    return a === void 0 || (jt & 1073741824) !== 0 && (K & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = i0(), G.lanes |= l, sa |= l, a);
  }
  function id(l, t, a, u) {
    return Pl(a, t) ? a : du.current !== null ? (l = Pi(l, a, u), Pl(l, t) || (zl = !0), l) : (jt & 42) === 0 || (jt & 1073741824) !== 0 && (K & 261930) === 0 ? (zl = !0, l.memoizedState = a) : (l = i0(), G.lanes |= l, sa |= l, t);
  }
  function cd(l, t, a, u, e) {
    var n = E.p;
    E.p = n !== 0 && 8 > n ? n : 8;
    var i = r.T, c = {};
    r.T = c, ac(l, !1, t, a);
    try {
      var f = e(), y = r.S;
      if (y !== null && y(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var b = Go(
          f,
          u
        );
        Iu(
          l,
          t,
          b,
          nt(l)
        );
      } else
        Iu(
          l,
          t,
          u,
          nt(l)
        );
    } catch (p) {
      Iu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: p },
        nt()
      );
    } finally {
      E.p = n, i !== null && c.types !== null && (i.types = c.types), r.T = i;
    }
  }
  function Lo() {
  }
  function lc(l, t, a, u) {
    if (l.tag !== 5) throw Error(v(476));
    var e = fd(l).queue;
    cd(
      l,
      e,
      t,
      N,
      a === null ? Lo : function() {
        return sd(l), a(u);
      }
    );
  }
  function fd(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: N,
      baseState: N,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: N
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
        lastRenderedReducer: Gt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function sd(l) {
    var t = fd(l);
    t.next === null && (t = l.alternate.memoizedState), Iu(
      l,
      t.next.queue,
      {},
      nt()
    );
  }
  function tc() {
    return Cl(he);
  }
  function dd() {
    return rl().memoizedState;
  }
  function md() {
    return rl().memoizedState;
  }
  function Ko(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          l = ua(a);
          var u = ea(t, l, a);
          u !== null && (wl(u, t, a), wu(u, t, a)), t = { cache: Ri() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Jo(l, t, a) {
    var u = nt();
    a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? yd(t, a) : (a = Si(l, t, a, u), a !== null && (wl(a, l, u), vd(a, t, u)));
  }
  function od(l, t, a) {
    var u = nt();
    Iu(l, t, a, u);
  }
  function Iu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) yd(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, c = n(i, a);
          if (e.hasEagerState = !0, e.eagerState = c, Pl(c, i))
            return Qe(l, t, e, 0), fl === null && Ge(), !1;
        } catch {
        } finally {
        }
      if (a = Si(l, t, e, u), a !== null)
        return wl(a, l, u), vd(a, t, u), !0;
    }
    return !1;
  }
  function ac(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Hc(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(v(479));
    } else
      t = Si(
        l,
        a,
        u,
        2
      ), t !== null && wl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === G || t !== null && t === G;
  }
  function yd(l, t) {
    mu = Ie = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function vd(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, Sf(l, a);
    }
  }
  var Pu = {
    readContext: Cl,
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
  Pu.useEffectEvent = vl;
  var hd = {
    readContext: Cl,
    use: tn,
    useCallback: function(l, t) {
      return Yl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Cl,
    useEffect: Is,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, un(
        4194308,
        4,
        ad.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return un(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      un(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Yl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ya) {
        Wt(!0);
        try {
          l();
        } finally {
          Wt(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = Yl();
      if (a !== void 0) {
        var e = a(t);
        if (Ya) {
          Wt(!0);
          try {
            a(t);
          } finally {
            Wt(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = Jo.bind(
        null,
        G,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Yl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Wi(l);
      var t = l.queue, a = od.bind(null, G, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = Yl();
      return Pi(a, l, t);
    },
    useTransition: function() {
      var l = Wi(!1);
      return l = cd.bind(
        null,
        G,
        l.queue,
        !0,
        !1
      ), Yl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = G, e = Yl();
      if (F) {
        if (a === void 0)
          throw Error(v(407));
        a = a();
      } else {
        if (a = t(), fl === null)
          throw Error(v(349));
        (K & 127) !== 0 || Ys(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, Is(Gs.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, yu(
        9,
        { destroy: void 0 },
        js.bind(
          null,
          u,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Yl(), t = fl.identifierPrefix;
      if (F) {
        var a = At, u = Et;
        a = (u & ~(1 << 32 - Il(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pe++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Qo++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: tc,
    useFormState: ws,
    useActionState: ws,
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
        G,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: Ji,
    useCacheRefresh: function() {
      return Yl().memoizedState = Ko.bind(
        null,
        G
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
  }, uc = {
    readContext: Cl,
    use: tn,
    useCallback: ed,
    useContext: Cl,
    useEffect: ki,
    useImperativeHandle: ud,
    useInsertionEffect: ld,
    useLayoutEffect: td,
    useMemo: nd,
    useReducer: an,
    useRef: ks,
    useState: function() {
      return an(Gt);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = rl();
      return id(
        a,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = an(Gt)[0], t = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : ku(l),
        t
      ];
    },
    useSyncExternalStore: Bs,
    useId: dd,
    useHostTransitionStatus: tc,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function(l, t) {
      var a = rl();
      return xs(a, el, l, t);
    },
    useMemoCache: Ji,
    useCacheRefresh: md
  };
  uc.useEffectEvent = Ps;
  var gd = {
    readContext: Cl,
    use: tn,
    useCallback: ed,
    useContext: Cl,
    useEffect: ki,
    useImperativeHandle: ud,
    useInsertionEffect: ld,
    useLayoutEffect: td,
    useMemo: nd,
    useReducer: Fi,
    useRef: ks,
    useState: function() {
      return Fi(Gt);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = rl();
      return el === null ? Pi(a, l, t) : id(
        a,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Fi(Gt)[0], t = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : ku(l),
        t
      ];
    },
    useSyncExternalStore: Bs,
    useId: dd,
    useHostTransitionStatus: tc,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function(l, t) {
      var a = rl();
      return el !== null ? xs(a, el, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Ji,
    useCacheRefresh: md
  };
  gd.useEffectEvent = Ps;
  function ec(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : q({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var nc = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = nt(), e = ua(u);
      e.payload = t, a != null && (e.callback = a), t = ea(l, e, u), t !== null && (wl(t, l, u), wu(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = nt(), e = ua(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = ea(l, e, u), t !== null && (wl(t, l, u), wu(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = nt(), u = ua(a);
      u.tag = 2, t != null && (u.callback = t), t = ea(l, u, a), t !== null && (wl(t, l, a), wu(t, l, a));
    }
  };
  function bd(l, t, a, u, e, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Qu(a, u) || !Qu(e, n) : !0;
  }
  function rd(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && nc.enqueueReplaceState(t, t.state, null);
  }
  function ja(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = q({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function Sd(l) {
    je(l);
  }
  function pd(l) {
    console.error(l);
  }
  function zd(l) {
    je(l);
  }
  function cn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function _d(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ic(l, t, a) {
    return a = ua(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      cn(l, t);
    }, a;
  }
  function Td(l) {
    return l = ua(l), l.tag = 3, l;
  }
  function Ed(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        _d(t, a, u);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      _d(t, a, u), typeof e != "function" && (da === null ? da = /* @__PURE__ */ new Set([this]) : da.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function wo(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && nu(
        t,
        a,
        e,
        !0
      ), a = tt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return vt === null ? Sn() : a.alternate === null && hl === 0 && (hl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Uc(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Uc(l, u, e)), !1;
        }
        throw Error(v(435, a.tag));
      }
      return Uc(l, u, e), Sn(), !1;
    }
    if (F)
      return t = tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Ai && (l = Error(v(422), { cause: u }), Zu(dt(l, a)))) : (u !== Ai && (t = Error(v(423), {
        cause: u
      }), Zu(
        dt(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = dt(u, a), e = ic(
        l.stateNode,
        u,
        e
      ), Yi(l, e), hl !== 4 && (hl = 2)), !1;
    var n = Error(v(520), { cause: u });
    if (n = dt(n, a), ce === null ? ce = [n] : ce.push(n), hl !== 4 && (hl = 2), t === null) return !0;
    u = dt(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = ic(a.stateNode, u, l), Yi(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (da === null || !da.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = Td(e), Ed(
              e,
              l,
              a,
              u
            ), Yi(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var cc = Error(v(461)), zl = !1;
  function Dl(l, t, a, u) {
    t.child = l === null ? Cs(t, null, a, u) : Ba(
      t,
      l.child,
      a,
      u
    );
  }
  function Ad(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var i = {};
      for (var c in u)
        c !== "ref" && (i[c] = u[c]);
    } else i = u;
    return Ua(t), u = Zi(
      l,
      t,
      a,
      i,
      n,
      e
    ), c = Vi(), l !== null && !zl ? (Li(l, t, e), Qt(l, t, e)) : (F && c && Ti(t), t.flags |= 1, Dl(l, t, u, e), t.child);
  }
  function Md(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !pi(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Od(
        l,
        t,
        n,
        u,
        e
      )) : (l = xe(
        a.type,
        null,
        u,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !hc(l, e)) {
      var i = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Qu, a(i, u) && l.ref === t.ref)
        return Qt(l, t, e);
    }
    return t.flags |= 1, l = Nt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Od(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Qu(n, u) && l.ref === t.ref)
        if (zl = !1, t.pendingProps = u = n, hc(l, e))
          (l.flags & 131072) !== 0 && (zl = !0);
        else
          return t.lanes = l.lanes, Qt(l, t, e);
    }
    return fc(
      l,
      t,
      a,
      u,
      e
    );
  }
  function Cd(l, t, a, u) {
    var e = u.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (u = t.child = l.child, e = 0; u !== null; )
            e = e | u.lanes | u.childLanes, u = u.sibling;
          u = e & ~n;
        } else u = 0, t.child = null;
        return Dd(
          l,
          t,
          n,
          a,
          u
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ke(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Us(t, n) : Gi(), qs(t);
      else
        return u = t.lanes = 536870912, Dd(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          u
        );
    } else
      n !== null ? (Ke(t, n.cachePool), Us(t, n), ia(), t.memoizedState = null) : (l !== null && Ke(t, null), Gi(), ia());
    return Dl(l, t, e, a), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Dd(l, t, a, u, e) {
    var n = qi();
    return n = n === null ? null : { parent: Sl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Ke(t, null), Gi(), qs(t), l !== null && nu(l, t, u, !0), t.childLanes = e, null;
  }
  function fn(l, t) {
    return t = dn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Rd(l, t, a) {
    return Ba(t, l.child, null, a), l = fn(t, t.pendingProps), l.flags |= 2, at(t), t.memoizedState = null, l;
  }
  function Fo(l, t, a) {
    var u = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (F) {
        if (u.mode === "hidden")
          return l = fn(t, u), t.lanes = 536870912, le(null, l);
        if (Xi(t), (l = sl) ? (l = Z0(
          l,
          yt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: Et, overflow: At } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ys(l), a.return = t, t.child = a, Ol = t, sl = null)) : l = null, l === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return fn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Xi(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = Rd(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(v(558));
      else if (zl || nu(l, t, a, !1), e = (a & l.childLanes) !== 0, zl || e) {
        if (u = fl, u !== null && (i = pf(u, a), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Oa(l, i), wl(u, l, i), cc;
        Sn(), t = Rd(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, sl = ht(i.nextSibling), Ol = t, F = !0, Pt = null, yt = !1, l !== null && gs(t, l), t = fn(t, u), t.flags |= 4096;
      return t;
    }
    return l = Nt(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function sn(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(v(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function fc(l, t, a, u, e) {
    return Ua(t), a = Zi(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = Vi(), l !== null && !zl ? (Li(l, t, e), Qt(l, t, e)) : (F && u && Ti(t), t.flags |= 1, Dl(l, t, a, e), t.child);
  }
  function Ud(l, t, a, u, e, n) {
    return Ua(t), t.updateQueue = null, a = Hs(
      t,
      u,
      a,
      e
    ), Ns(l), u = Vi(), l !== null && !zl ? (Li(l, t, n), Qt(l, t, n)) : (F && u && Ti(t), t.flags |= 1, Dl(l, t, a, n), t.child);
  }
  function qd(l, t, a, u, e) {
    if (Ua(t), t.stateNode === null) {
      var n = tu, i = a.contextType;
      typeof i == "object" && i !== null && (n = Cl(i)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = nc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Hi(t), i = a.contextType, n.context = typeof i == "object" && i !== null ? Cl(i) : tu, n.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (ec(
        t,
        a,
        i,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && nc.enqueueReplaceState(n, n.state, null), Wu(t, u, n, e), Fu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, f = ja(a, c);
      n.props = f;
      var y = n.context, b = a.contextType;
      i = tu, typeof b == "object" && b !== null && (i = Cl(b));
      var p = a.getDerivedStateFromProps;
      b = typeof p == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, b || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && rd(
        t,
        n,
        u,
        i
      ), aa = !1;
      var h = t.memoizedState;
      n.state = h, Wu(t, u, n, e), Fu(), y = t.memoizedState, c || h !== y || aa ? (typeof p == "function" && (ec(
        t,
        a,
        p,
        u
      ), y = t.memoizedState), (f = aa || bd(
        t,
        a,
        f,
        u,
        h,
        y,
        i
      )) ? (b || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = y), n.props = u, n.state = y, n.context = i, u = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, Bi(l, t), i = t.memoizedProps, b = ja(a, i), n.props = b, p = t.pendingProps, h = n.context, y = a.contextType, f = tu, typeof y == "object" && y !== null && (f = Cl(y)), c = a.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== p || h !== f) && rd(
        t,
        n,
        u,
        f
      ), aa = !1, h = t.memoizedState, n.state = h, Wu(t, u, n, e), Fu();
      var g = t.memoizedState;
      i !== p || h !== g || aa || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof c == "function" && (ec(
        t,
        a,
        c,
        u
      ), g = t.memoizedState), (b = aa || bd(
        t,
        a,
        b,
        u,
        h,
        g,
        f
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, g, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        g,
        f
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = g), n.props = u, n.state = g, n.context = f, u = b) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, sn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Ba(
      t,
      l.child,
      null,
      e
    ), t.child = Ba(
      t,
      null,
      a,
      e
    )) : Dl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Qt(
      l,
      t,
      e
    ), l;
  }
  function Nd(l, t, a, u) {
    return Da(), t.flags |= 256, Dl(l, t, a, u), t.child;
  }
  var sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(l) {
    return { baseLanes: l, cachePool: _s() };
  }
  function mc(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= et), l;
  }
  function Hd(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0), i && (e = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (F) {
        if (e ? na(t) : ia(), (l = sl) ? (l = Z0(
          l,
          yt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: Et, overflow: At } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ys(l), a.return = t, t.child = a, Ol = t, sl = null)) : l = null, l === null) throw la(t);
        return wc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = u.children;
      return u = u.fallback, e ? (ia(), e = t.mode, c = dn(
        { mode: "hidden", children: c },
        e
      ), u = Ca(
        u,
        e,
        a,
        null
      ), c.return = t, u.return = t, c.sibling = u, t.child = c, u = t.child, u.memoizedState = dc(a), u.childLanes = mc(
        l,
        i,
        a
      ), t.memoizedState = sc, le(null, u)) : (na(t), oc(t, c));
    }
    var f = l.memoizedState;
    if (f !== null && (c = f.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (na(t), t.flags &= -257, t = yc(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (ia(), t.child = l.child, t.flags |= 128, t = null) : (ia(), c = u.fallback, e = t.mode, u = dn(
          { mode: "visible", children: u.children },
          e
        ), c = Ca(
          c,
          e,
          a,
          null
        ), c.flags |= 2, u.return = t, c.return = t, u.sibling = c, t.child = u, Ba(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = dc(a), u.childLanes = mc(
          l,
          i,
          a
        ), t.memoizedState = sc, t = le(null, u));
      else if (na(t), wc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, u = Error(v(419)), u.stack = "", u.digest = i, Zu({ value: u, source: null, stack: null }), t = yc(
          l,
          t,
          a
        );
      } else if (zl || nu(l, t, a, !1), i = (a & l.childLanes) !== 0, zl || i) {
        if (i = fl, i !== null && (u = pf(i, a), u !== 0 && u !== f.retryLane))
          throw f.retryLane = u, Oa(l, u), wl(i, l, u), cc;
        Jc(c) || Sn(), t = yc(
          l,
          t,
          a
        );
      } else
        Jc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, sl = ht(
          c.nextSibling
        ), Ol = t, F = !0, Pt = null, yt = !1, l !== null && gs(t, l), t = oc(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (ia(), c = u.fallback, e = t.mode, f = l.child, y = f.sibling, u = Nt(f, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = f.subtreeFlags & 65011712, y !== null ? c = Nt(
      y,
      c
    ) : (c = Ca(
      c,
      e,
      a,
      null
    ), c.flags |= 2), c.return = t, u.return = t, u.sibling = c, t.child = u, le(null, u), u = t.child, c = l.child.memoizedState, c === null ? c = dc(a) : (e = c.cachePool, e !== null ? (f = Sl._currentValue, e = e.parent !== f ? { parent: f, pool: f } : e) : e = _s(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: e
    }), u.memoizedState = c, u.childLanes = mc(
      l,
      i,
      a
    ), t.memoizedState = sc, le(l.child, u)) : (na(t), a = l.child, l = a.sibling, a = Nt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function oc(l, t) {
    return t = dn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function dn(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function yc(l, t, a) {
    return Ba(t, l.child, null, a), l = oc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Bd(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Ci(l.return, t, a);
  }
  function vc(l, t, a, u, e, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e,
      treeForkCount: n
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = u, i.tail = a, i.tailMode = e, i.treeForkCount = n);
  }
  function Yd(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    u = u.children;
    var i = bl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, A(bl, i), Dl(l, t, u, a), u = F ? xu : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Bd(l, a, t);
        else if (l.tag === 19)
          Bd(l, a, t);
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
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && ke(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), vc(
          t,
          !1,
          e,
          a,
          n,
          u
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && ke(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        vc(
          t,
          !0,
          a,
          null,
          n,
          u
        );
        break;
      case "together":
        vc(
          t,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), sa |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (nu(
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
      for (l = t.child, a = Nt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = Nt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function hc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function Wo(l, t, a) {
    switch (t.tag) {
      case 3:
        Bl(t, t.stateNode.containerInfo), ta(t, Sl, l.memoizedState.cache), Da();
        break;
      case 27:
      case 5:
        Mu(t);
        break;
      case 4:
        Bl(t, t.stateNode.containerInfo);
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
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (na(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Hd(l, t, a) : (na(t), l = Qt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (nu(
          l,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), e) {
          if (u)
            return Yd(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), A(bl, bl.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, Cd(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        ta(t, Sl, l.memoizedState.cache);
    }
    return Qt(l, t, a);
  }
  function jd(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        zl = !0;
      else {
        if (!hc(l, a) && (t.flags & 128) === 0)
          return zl = !1, Wo(
            l,
            t,
            a
          );
        zl = (l.flags & 131072) !== 0;
      }
    else
      zl = !1, F && (t.flags & 1048576) !== 0 && hs(t, xu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = Na(t.elementType), t.type = l, typeof l == "function")
            pi(l) ? (u = ja(l, u), t.tag = 1, t = qd(
              null,
              t,
              l,
              u,
              a
            )) : (t.tag = 0, t = fc(
              null,
              t,
              l,
              u,
              a
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === it) {
                t.tag = 11, t = Ad(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              } else if (e === w) {
                t.tag = 14, t = Md(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              }
            }
            throw t = Dt(l) || l, Error(v(306, t, ""));
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
        return u = t.type, e = ja(
          u,
          t.pendingProps
        ), qd(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (Bl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(v(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Bi(l, t), Wu(t, u, null, a);
          var i = t.memoizedState;
          if (u = i.cache, ta(t, Sl, u), u !== n.cache && Di(
            t,
            [Sl],
            a,
            !0
          ), Fu(), u = i.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Nd(
                l,
                t,
                u,
                a
              );
              break l;
            } else if (u !== e) {
              e = dt(
                Error(v(424)),
                t
              ), Zu(e), t = Nd(
                l,
                t,
                u,
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
              for (sl = ht(l.firstChild), Ol = t, F = !0, Pt = null, yt = !0, a = Cs(
                t,
                null,
                u,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Da(), u === e) {
              t = Qt(
                l,
                t,
                a
              );
              break l;
            }
            Dl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return sn(l, t), l === null ? (a = F0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : F || (a = t.type, l = t.pendingProps, u = Mn(
          Z.current
        ).createElement(a), u[Ml] = t, u[xl] = l, Rl(u, a, l), El(u), t.stateNode = u) : t.memoizedState = F0(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Mu(t), l === null && F && (u = t.stateNode = K0(
          t.type,
          t.pendingProps,
          Z.current
        ), Ol = t, yt = !0, e = sl, va(t.type) ? (Fc = e, sl = ht(u.firstChild)) : sl = e), Dl(
          l,
          t,
          t.pendingProps.children,
          a
        ), sn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && F && ((e = u = sl) && (u = A1(
          u,
          t.type,
          t.pendingProps,
          yt
        ), u !== null ? (t.stateNode = u, Ol = t, sl = ht(u.firstChild), yt = !1, e = !0) : e = !1), e || la(t)), Mu(t), e = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, u = n.children, Vc(e, n) ? u = null : i !== null && Vc(e, i) && (t.flags |= 32), t.memoizedState !== null && (e = Zi(
          l,
          t,
          Xo,
          null,
          null,
          a
        ), he._currentValue = e), sn(l, t), Dl(l, t, u, a), t.child;
      case 6:
        return l === null && F && ((l = a = sl) && (a = M1(
          a,
          t.pendingProps,
          yt
        ), a !== null ? (t.stateNode = a, Ol = t, sl = null, l = !0) : l = !1), l || la(t)), null;
      case 13:
        return Hd(l, t, a);
      case 4:
        return Bl(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = Ba(
          t,
          null,
          u,
          a
        ) : Dl(l, t, u, a), t.child;
      case 11:
        return Ad(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Dl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Dl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Dl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, ta(t, t.type, u.value), Dl(l, t, u.children, a), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Ua(t), e = Cl(e), u = u(e), t.flags |= 1, Dl(l, t, u, a), t.child;
      case 14:
        return Md(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Od(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Yd(l, t, a);
      case 31:
        return Fo(l, t, a);
      case 22:
        return Cd(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return Ua(t), u = Cl(Sl), l === null ? (e = qi(), e === null && (e = fl, n = Ri(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = { parent: u, cache: e }, Hi(t), ta(t, Sl, e)) : ((l.lanes & a) !== 0 && (Bi(l, t), Wu(t, null, null, a), Fu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), ta(t, Sl, u)) : (u = n.cache, ta(t, Sl, u), u !== e.cache && Di(
          t,
          [Sl],
          a,
          !0
        ))), Dl(
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
  function gc(l, t, a, u, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (d0()) l.flags |= 8192;
        else
          throw Ha = we, Ni;
    } else l.flags &= -16777217;
  }
  function Gd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !P0(t))
      if (d0()) l.flags |= 8192;
      else
        throw Ha = we, Ni;
  }
  function mn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? bf() : 536870912, l.lanes |= t, bu |= t);
  }
  function te(l, t) {
    if (!F)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function $o(l, t, a) {
    var u = t.pendingProps;
    switch (Ei(t), t.tag) {
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
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Yt(Sl), gl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (eu(t) ? Xt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Mi())), dl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Xt(t), n !== null ? (dl(t), Gd(t, n)) : (dl(t), gc(
          t,
          e,
          null,
          u,
          a
        ))) : n ? n !== l.memoizedState ? (Xt(t), dl(t), Gd(t, n)) : (dl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Xt(t), dl(t), gc(
          t,
          e,
          l,
          u,
          a
        )), null;
      case 27:
        if (ze(t), a = Z.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Xt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(v(166));
            return dl(t), null;
          }
          l = O.current, eu(t) ? bs(t) : (l = K0(e, u, a), t.stateNode = l, Xt(t));
        }
        return dl(t), null;
      case 5:
        if (ze(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Xt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(v(166));
            return dl(t), null;
          }
          if (n = O.current, eu(t))
            bs(t);
          else {
            var i = Mn(
              Z.current
            );
            switch (n) {
              case 1:
                n = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof u.is == "string" ? i.createElement("select", {
                      is: u.is
                    }) : i.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? i.createElement(e, { is: u.is }) : i.createElement(e);
                }
            }
            n[Ml] = t, n[xl] = u;
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
            l: switch (Rl(n, e, u), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Xt(t);
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
          l.memoizedProps !== u && Xt(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(v(166));
          if (l = Z.current, eu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = Ol, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[Ml] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || H0(l.nodeValue, a)), l || la(t, !0);
          } else
            l = Mn(l).createTextNode(
              u
            ), l[Ml] = t, t.stateNode = l;
        }
        return dl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (u = eu(t), a !== null) {
            if (l === null) {
              if (!u) throw Error(v(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(v(557));
              l[Ml] = t;
            } else
              Da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), l = !1;
          } else
            a = Mi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(v(558));
        }
        return dl(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = eu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(v(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));
              e[Ml] = t;
            } else
              Da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), e = !1;
          } else
            e = Mi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return at(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), mn(t, t.updateQueue), dl(t), null);
      case 4:
        return gl(), l === null && Gc(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return Yt(t.type), dl(t), null;
      case 19:
        if (z(bl), u = t.memoizedState, u === null) return dl(t), null;
        if (e = (t.flags & 128) !== 0, n = u.rendering, n === null)
          if (e) te(u, !1);
          else {
            if (hl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = ke(l), n !== null) {
                  for (t.flags |= 128, te(u, !1), l = n.updateQueue, t.updateQueue = l, mn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    os(a, l), a = a.sibling;
                  return A(
                    bl,
                    bl.current & 1 | 2
                  ), F && Ht(t, u.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            u.tail !== null && $l() > gn && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = ke(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, mn(t, l), te(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !F)
                return dl(t), null;
            } else
              2 * $l() - u.renderingStartTime > gn && a !== 536870912 && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = $l(), l.sibling = null, a = bl.current, A(
          bl,
          e ? a & 1 | 2 : a & 1
        ), F && Ht(t, u.treeForkCount), l) : (dl(t), null);
      case 22:
      case 23:
        return at(t), Qi(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dl(t), a = t.updateQueue, a !== null && mn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && z(qa), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yt(Sl), dl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function ko(l, t) {
    switch (Ei(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Yt(Sl), gl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ze(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (at(t), t.alternate === null)
            throw Error(v(340));
          Da();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (at(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(v(340));
          Da();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return z(bl), null;
      case 4:
        return gl(), null;
      case 10:
        return Yt(t.type), null;
      case 22:
      case 23:
        return at(t), Qi(), l !== null && z(qa), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Yt(Sl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qd(l, t) {
    switch (Ei(t), t.tag) {
      case 3:
        Yt(Sl), gl();
        break;
      case 26:
      case 27:
      case 5:
        ze(t);
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
        z(bl);
        break;
      case 10:
        Yt(t.type);
        break;
      case 22:
      case 23:
        at(t), Qi(), l !== null && z(qa);
        break;
      case 24:
        Yt(Sl);
    }
  }
  function ae(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, i = a.inst;
            u = n(), i.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      al(t, t.return, c);
    }
  }
  function ca(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var i = u.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, e = t;
              var f = a, y = c;
              try {
                y();
              } catch (b) {
                al(
                  e,
                  f,
                  b
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (b) {
      al(t, t.return, b);
    }
  }
  function Xd(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Rs(t, a);
      } catch (u) {
        al(l, l.return, u);
      }
    }
  }
  function xd(l, t, a) {
    a.props = ja(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      al(l, t, u);
    }
  }
  function ue(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      al(l, t, e);
    }
  }
  function Mt(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          al(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          al(l, t, e);
        }
      else a.current = null;
  }
  function Zd(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      al(l, l.return, e);
    }
  }
  function bc(l, t, a) {
    try {
      var u = l.stateNode;
      S1(u, l.type, a, t), u[xl] = t;
    } catch (e) {
      al(l, l.return, e);
    }
  }
  function Vd(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && va(l.type) || l.tag === 4;
  }
  function rc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Vd(l.return)) return null;
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
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Ut));
    else if (u !== 4 && (u === 27 && va(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (Sc(l, t, a), l = l.sibling; l !== null; )
        Sc(l, t, a), l = l.sibling;
  }
  function on(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && va(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (on(l, t, a), l = l.sibling; l !== null; )
        on(l, t, a), l = l.sibling;
  }
  function Ld(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Rl(t, u, a), t[Ml] = l, t[xl] = a;
    } catch (n) {
      al(l, l.return, n);
    }
  }
  var xt = !1, _l = !1, pc = !1, Kd = typeof WeakSet == "function" ? WeakSet : Set, Al = null;
  function Io(l, t) {
    if (l = l.containerInfo, xc = Nn, l = us(l), yi(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var i = 0, c = -1, f = -1, y = 0, b = 0, p = l, h = null;
            t: for (; ; ) {
              for (var g; p !== a || e !== 0 && p.nodeType !== 3 || (c = i + e), p !== n || u !== 0 && p.nodeType !== 3 || (f = i + u), p.nodeType === 3 && (i += p.nodeValue.length), (g = p.firstChild) !== null; )
                h = p, p = g;
              for (; ; ) {
                if (p === l) break t;
                if (h === a && ++y === e && (c = i), h === n && ++b === u && (f = i), (g = p.nextSibling) !== null) break;
                p = h, h = p.parentNode;
              }
              p = g;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Zc = { focusedElem: l, selectionRange: a }, Nn = !1, Al = t; Al !== null; )
      if (t = Al, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Al = l;
      else
        for (; Al !== null; ) {
          switch (t = Al, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (a = 0; a < l.length; a++)
                  e = l[a], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var M = ja(
                    a.type,
                    e
                  );
                  l = u.getSnapshotBeforeUpdate(
                    M,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (U) {
                  al(
                    a,
                    a.return,
                    U
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
            l.return = t.return, Al = l;
            break;
          }
          Al = t.return;
        }
  }
  function Jd(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, a), u & 4 && ae(5, a);
        break;
      case 1:
        if (Vt(l, a), u & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              al(a, a.return, i);
            }
          else {
            var e = ja(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
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
        u & 64 && Xd(a), u & 512 && ue(a, a.return);
        break;
      case 3:
        if (Vt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
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
            Rs(l, t);
          } catch (i) {
            al(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Ld(a);
      case 26:
      case 5:
        Vt(l, a), t === null && u & 4 && Zd(a), u & 512 && ue(a, a.return);
        break;
      case 12:
        Vt(l, a);
        break;
      case 31:
        Vt(l, a), u & 4 && Wd(l, a);
        break;
      case 13:
        Vt(l, a), u & 4 && $d(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = c1.bind(
          null,
          a
        ), O1(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || xt, !u) {
          t = t !== null && t.memoizedState !== null || _l, e = xt;
          var n = _l;
          xt = u, (_l = t) && !n ? Lt(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Vt(l, a), xt = e, _l = n;
        }
        break;
      case 30:
        break;
      default:
        Vt(l, a);
    }
  }
  function wd(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, wd(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && $n(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ol = null, Vl = !1;
  function Zt(l, t, a) {
    for (a = a.child; a !== null; )
      Fd(l, t, a), a = a.sibling;
  }
  function Fd(l, t, a) {
    if (kl && typeof kl.onCommitFiberUnmount == "function")
      try {
        kl.onCommitFiberUnmount(Ou, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        _l || Mt(a, t), Zt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        _l || Mt(a, t);
        var u = ol, e = Vl;
        va(a.type) && (ol = a.stateNode, Vl = !1), Zt(
          l,
          t,
          a
        ), oe(a.stateNode), ol = u, Vl = e;
        break;
      case 5:
        _l || Mt(a, t);
      case 6:
        if (u = ol, e = Vl, ol = null, Zt(
          l,
          t,
          a
        ), ol = u, Vl = e, ol !== null)
          if (Vl)
            try {
              (ol.nodeType === 9 ? ol.body : ol.nodeName === "HTML" ? ol.ownerDocument.body : ol).removeChild(a.stateNode);
            } catch (n) {
              al(
                a,
                t,
                n
              );
            }
          else
            try {
              ol.removeChild(a.stateNode);
            } catch (n) {
              al(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        ol !== null && (Vl ? (l = ol, X0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), Au(l)) : X0(ol, a.stateNode));
        break;
      case 4:
        u = ol, e = Vl, ol = a.stateNode.containerInfo, Vl = !0, Zt(
          l,
          t,
          a
        ), ol = u, Vl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ca(2, a, t), _l || ca(4, a, t), Zt(
          l,
          t,
          a
        );
        break;
      case 1:
        _l || (Mt(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && xd(
          a,
          t,
          u
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
        _l = (u = _l) || a.memoizedState !== null, Zt(
          l,
          t,
          a
        ), _l = u;
        break;
      default:
        Zt(
          l,
          t,
          a
        );
    }
  }
  function Wd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Au(l);
      } catch (a) {
        al(t, t.return, a);
      }
    }
  }
  function $d(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Au(l);
      } catch (a) {
        al(t, t.return, a);
      }
  }
  function Po(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Kd()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Kd()), t;
      default:
        throw Error(v(435, l.tag));
    }
  }
  function yn(l, t) {
    var a = Po(l);
    t.forEach(function(u) {
      if (!a.has(u)) {
        a.add(u);
        var e = f1.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Ll(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (va(c.type)) {
                ol = c.stateNode, Vl = !1;
                break l;
              }
              break;
            case 5:
              ol = c.stateNode, Vl = !1;
              break l;
            case 3:
            case 4:
              ol = c.stateNode.containerInfo, Vl = !0;
              break l;
          }
          c = c.return;
        }
        if (ol === null) throw Error(v(160));
        Fd(n, i, e), ol = null, Vl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        kd(t, l), t = t.sibling;
  }
  var St = null;
  function kd(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ll(t, l), Kl(l), u & 4 && (ca(3, l, l.return), ae(3, l), ca(5, l, l.return));
        break;
      case 1:
        Ll(t, l), Kl(l), u & 512 && (_l || a === null || Mt(a, a.return)), u & 64 && xt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = St;
        if (Ll(t, l), Kl(l), u & 512 && (_l || a === null || Mt(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Ru] || n[Ml] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Rl(n, u, a), n[Ml] = l, El(n), u = n;
                      break l;
                    case "link":
                      var i = k0(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Rl(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = k0(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (n = i[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Rl(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(v(468, u));
                  }
                  n[Ml] = l, El(n), u = n;
                }
                l.stateNode = u;
              } else
                I0(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = $0(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? I0(
              e,
              l.type,
              l.stateNode
            ) : $0(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && bc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Ll(t, l), Kl(l), u & 512 && (_l || a === null || Mt(a, a.return)), a !== null && u & 4 && bc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Ll(t, l), Kl(l), u & 512 && (_l || a === null || Mt(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Fa(e, "");
          } catch (M) {
            al(l, l.return, M);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, bc(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (pc = !0);
        break;
      case 6:
        if (Ll(t, l), Kl(l), u & 4) {
          if (l.stateNode === null)
            throw Error(v(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (M) {
            al(l, l.return, M);
          }
        }
        break;
      case 3:
        if (Dn = null, e = St, St = On(t.containerInfo), Ll(t, l), St = e, Kl(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Au(t.containerInfo);
          } catch (M) {
            al(l, l.return, M);
          }
        pc && (pc = !1, Id(l));
        break;
      case 4:
        u = St, St = On(
          l.stateNode.containerInfo
        ), Ll(t, l), Kl(l), St = u;
        break;
      case 12:
        Ll(t, l), Kl(l);
        break;
      case 31:
        Ll(t, l), Kl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, yn(l, u)));
        break;
      case 13:
        Ll(t, l), Kl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hn = $l()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, yn(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null, y = xt, b = _l;
        if (xt = y || e, _l = b || f, Ll(t, l), _l = b, xt = y, Kl(l), u & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || f || xt || _l || Ga(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (n = f.stateNode, e)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = f.stateNode;
                    var p = f.memoizedProps.style, h = p != null && p.hasOwnProperty("display") ? p.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (M) {
                  al(f, f.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = e ? "" : f.memoizedProps;
                } catch (M) {
                  al(f, f.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var g = f.stateNode;
                  e ? x0(g, !0) : x0(f.stateNode, !1);
                } catch (M) {
                  al(f, f.return, M);
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
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, yn(l, a))));
        break;
      case 19:
        Ll(t, l), Kl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, yn(l, u)));
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
        for (var a, u = l.return; u !== null; ) {
          if (Vd(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(v(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = rc(l);
            on(l, n, e);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Fa(i, ""), a.flags &= -33);
            var c = rc(l);
            on(l, c, i);
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
  function Id(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Id(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Jd(l, t.alternate, t), t = t.sibling;
  }
  function Ga(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, t, t.return), Ga(t);
          break;
        case 1:
          Mt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && xd(
            t,
            t.return,
            a
          ), Ga(t);
          break;
        case 27:
          oe(t.stateNode);
        case 26:
        case 5:
          Mt(t, t.return), Ga(t);
          break;
        case 22:
          t.memoizedState === null && Ga(t);
          break;
        case 30:
          Ga(t);
          break;
        default:
          Ga(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Lt(
            e,
            n,
            a
          ), ae(4, n);
          break;
        case 1:
          if (Lt(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (y) {
              al(u, u.return, y);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var c = u.stateNode;
            try {
              var f = e.shared.hiddenCallbacks;
              if (f !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < f.length; e++)
                  Ds(f[e], c);
            } catch (y) {
              al(u, u.return, y);
            }
          }
          a && i & 64 && Xd(n), ue(n, n.return);
          break;
        case 27:
          Ld(n);
        case 26:
        case 5:
          Lt(
            e,
            n,
            a
          ), a && u === null && i & 4 && Zd(n), ue(n, n.return);
          break;
        case 12:
          Lt(
            e,
            n,
            a
          );
          break;
        case 31:
          Lt(
            e,
            n,
            a
          ), a && i & 4 && Wd(e, n);
          break;
        case 13:
          Lt(
            e,
            n,
            a
          ), a && i & 4 && $d(e, n);
          break;
        case 22:
          n.memoizedState === null && Lt(
            e,
            n,
            a
          ), ue(n, n.return);
          break;
        case 30:
          break;
        default:
          Lt(
            e,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function zc(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Vu(a));
  }
  function _c(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Vu(l));
  }
  function pt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Pd(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function Pd(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pt(
          l,
          t,
          a,
          u
        ), e & 2048 && ae(9, t);
        break;
      case 1:
        pt(
          l,
          t,
          a,
          u
        );
        break;
      case 3:
        pt(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Vu(l)));
        break;
      case 12:
        if (e & 2048) {
          pt(
            l,
            t,
            a,
            u
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
            u
          );
        break;
      case 31:
        pt(
          l,
          t,
          a,
          u
        );
        break;
      case 13:
        pt(
          l,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? pt(
          l,
          t,
          a,
          u
        ) : ee(l, t) : n._visibility & 2 ? pt(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 2, vu(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && zc(i, t);
        break;
      case 24:
        pt(
          l,
          t,
          a,
          u
        ), e & 2048 && _c(t.alternate, t);
        break;
      default:
        pt(
          l,
          t,
          a,
          u
        );
    }
  }
  function vu(l, t, a, u, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, c = a, f = u, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          vu(
            n,
            i,
            c,
            f,
            e
          ), ae(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null ? b._visibility & 2 ? vu(
            n,
            i,
            c,
            f,
            e
          ) : ee(
            n,
            i
          ) : (b._visibility |= 2, vu(
            n,
            i,
            c,
            f,
            e
          )), e && y & 2048 && zc(
            i.alternate,
            i
          );
          break;
        case 24:
          vu(
            n,
            i,
            c,
            f,
            e
          ), e && y & 2048 && _c(i.alternate, i);
          break;
        default:
          vu(
            n,
            i,
            c,
            f,
            e
          );
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            ee(a, u), e & 2048 && zc(
              u.alternate,
              u
            );
            break;
          case 24:
            ee(a, u), e & 2048 && _c(u.alternate, u);
            break;
          default:
            ee(a, u);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function hu(l, t, a) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        l0(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function l0(l, t, a) {
    switch (l.tag) {
      case 26:
        hu(
          l,
          t,
          a
        ), l.flags & ne && l.memoizedState !== null && Q1(
          a,
          St,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        hu(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var u = St;
        St = On(l.stateNode.containerInfo), hu(
          l,
          t,
          a
        ), St = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = ne, ne = 16777216, hu(
          l,
          t,
          a
        ), ne = u) : hu(
          l,
          t,
          a
        ));
        break;
      default:
        hu(
          l,
          t,
          a
        );
    }
  }
  function t0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function ie(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Al = u, u0(
            u,
            l
          );
        }
      t0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        a0(l), l = l.sibling;
  }
  function a0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ie(l), l.flags & 2048 && ca(9, l, l.return);
        break;
      case 3:
        ie(l);
        break;
      case 12:
        ie(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, vn(l)) : ie(l);
        break;
      default:
        ie(l);
    }
  }
  function vn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Al = u, u0(
            u,
            l
          );
        }
      t0(l);
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
  function u0(l, t) {
    for (; Al !== null; ) {
      var a = Al;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Vu(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Al = u;
      else
        l: for (a = l; Al !== null; ) {
          u = Al;
          var e = u.sibling, n = u.return;
          if (wd(u), u === a) {
            Al = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Al = e;
            break l;
          }
          Al = n;
        }
    }
  }
  var l1 = {
    getCacheForType: function(l) {
      var t = Cl(Sl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Cl(Sl).controller.signal;
    }
  }, t1 = typeof WeakMap == "function" ? WeakMap : Map, k = 0, fl = null, V = null, K = 0, tl = 0, ut = null, fa = !1, gu = !1, Tc = !1, Kt = 0, hl = 0, sa = 0, Qa = 0, Ec = 0, et = 0, bu = 0, ce = null, Jl = null, Ac = !1, hn = 0, e0 = 0, gn = 1 / 0, bn = null, da = null, Tl = 0, ma = null, ru = null, Jt = 0, Mc = 0, Oc = null, n0 = null, fe = 0, Cc = null;
  function nt() {
    return (k & 2) !== 0 && K !== 0 ? K & -K : r.T !== null ? Hc() : zf();
  }
  function i0() {
    if (et === 0)
      if ((K & 536870912) === 0 || F) {
        var l = Ee;
        Ee <<= 1, (Ee & 3932160) === 0 && (Ee = 262144), et = l;
      } else et = 536870912;
    return l = tt.current, l !== null && (l.flags |= 32), et;
  }
  function wl(l, t, a) {
    (l === fl && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null) && (Su(l, 0), oa(
      l,
      K,
      et,
      !1
    )), Du(l, a), ((k & 2) === 0 || l !== fl) && (l === fl && ((k & 2) === 0 && (Qa |= a), hl === 4 && oa(
      l,
      K,
      et,
      !1
    )), Ot(l));
  }
  function c0(l, t, a) {
    if ((k & 6) !== 0) throw Error(v(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Cu(l, t), e = u ? e1(l, t) : Rc(l, t, !0), n = u;
    do {
      if (e === 0) {
        gu && !u && oa(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !a1(a)) {
          e = Rc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              e = ce;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (Su(c, i).flags |= 256), i = Rc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Tc && !f) {
                  c.errorRecoveryDisabledLanes |= n, Qa |= n, e = 4;
                  break l;
                }
                n = Jl, Jl = e, n !== null && (Jl === null ? Jl = n : Jl.push.apply(
                  Jl,
                  n
                ));
              }
              e = i;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          Su(l, 0), oa(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              oa(
                u,
                t,
                et,
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
          if ((t & 62914560) === t && (e = hn + 300 - $l(), 10 < e)) {
            if (oa(
              u,
              t,
              et,
              !fa
            ), Me(u, 0, !0) !== 0) break l;
            Jt = t, u.timeoutHandle = G0(
              f0.bind(
                null,
                u,
                a,
                Jl,
                bn,
                Ac,
                t,
                et,
                Qa,
                bu,
                fa,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          f0(
            u,
            a,
            Jl,
            bn,
            Ac,
            t,
            et,
            Qa,
            bu,
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
    Ot(l);
  }
  function f0(l, t, a, u, e, n, i, c, f, y, b, p, h, g) {
    if (l.timeoutHandle = -1, p = t.subtreeFlags, p & 8192 || (p & 16785408) === 16785408) {
      p = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ut
      }, l0(
        t,
        n,
        p
      );
      var M = (n & 62914560) === n ? hn - $l() : (n & 4194048) === n ? e0 - $l() : 0;
      if (M = X1(
        p,
        M
      ), M !== null) {
        Jt = n, l.cancelPendingCommit = M(
          g0.bind(
            null,
            l,
            t,
            n,
            a,
            u,
            e,
            i,
            c,
            f,
            b,
            p,
            null,
            h,
            g
          )
        ), oa(l, n, i, !y);
        return;
      }
    }
    g0(
      l,
      t,
      n,
      a,
      u,
      e,
      i,
      c,
      f
    );
  }
  function a1(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Pl(n(), e)) return !1;
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
  function oa(l, t, a, u) {
    t &= ~Ec, t &= ~Qa, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Il(e), i = 1 << n;
      u[n] = -1, e &= ~i;
    }
    a !== 0 && rf(l, a, t);
  }
  function rn() {
    return (k & 6) === 0 ? (se(0), !1) : !0;
  }
  function Dc() {
    if (V !== null) {
      if (tl === 0)
        var l = V.return;
      else
        l = V, Bt = Ra = null, Ki(l), su = null, Ku = 0, l = V;
      for (; l !== null; )
        Qd(l.alternate, l), l = l.return;
      V = null;
    }
  }
  function Su(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, _1(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Jt = 0, Dc(), fl = l, V = a = Nt(l.current, null), K = t, tl = 0, ut = null, fa = !1, gu = Cu(l, t), Tc = !1, bu = et = Ec = Qa = sa = hl = 0, Jl = ce = null, Ac = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Il(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return Kt = t, Ge(), a;
  }
  function s0(l, t) {
    G = null, r.H = Pu, t === fu || t === Je ? (t = As(), tl = 3) : t === Ni ? (t = As(), tl = 4) : tl = t === cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, V === null && (hl = 1, cn(
      l,
      dt(t, l.current)
    ));
  }
  function d0() {
    var l = tt.current;
    return l === null ? !0 : (K & 4194048) === K ? vt === null : (K & 62914560) === K || (K & 536870912) !== 0 ? l === vt : !1;
  }
  function m0() {
    var l = r.H;
    return r.H = Pu, l === null ? Pu : l;
  }
  function o0() {
    var l = r.A;
    return r.A = l1, l;
  }
  function Sn() {
    hl = 4, fa || (K & 4194048) !== K && tt.current !== null || (gu = !0), (sa & 134217727) === 0 && (Qa & 134217727) === 0 || fl === null || oa(
      fl,
      K,
      et,
      !1
    );
  }
  function Rc(l, t, a) {
    var u = k;
    k |= 2;
    var e = m0(), n = o0();
    (fl !== l || K !== t) && (bn = null, Su(l, t)), t = !1;
    var i = hl;
    l: do
      try {
        if (tl !== 0 && V !== null) {
          var c = V, f = ut;
          switch (tl) {
            case 8:
              Dc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var y = tl;
              if (tl = 0, ut = null, pu(l, c, f, y), a && gu) {
                i = 0;
                break l;
              }
              break;
            default:
              y = tl, tl = 0, ut = null, pu(l, c, f, y);
          }
        }
        u1(), i = hl;
        break;
      } catch (b) {
        s0(l, b);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Bt = Ra = null, k = u, r.H = e, r.A = n, V === null && (fl = null, K = 0, Ge()), i;
  }
  function u1() {
    for (; V !== null; ) y0(V);
  }
  function e1(l, t) {
    var a = k;
    k |= 2;
    var u = m0(), e = o0();
    fl !== l || K !== t ? (bn = null, gn = $l() + 500, Su(l, t)) : gu = Cu(
      l,
      t
    );
    l: do
      try {
        if (tl !== 0 && V !== null) {
          t = V;
          var n = ut;
          t: switch (tl) {
            case 1:
              tl = 0, ut = null, pu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Ts(n)) {
                tl = 0, ut = null, v0(t);
                break;
              }
              t = function() {
                tl !== 2 && tl !== 9 || fl !== l || (tl = 7), Ot(l);
              }, n.then(t, t);
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              Ts(n) ? (tl = 0, ut = null, v0(t)) : (tl = 0, ut = null, pu(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (V.tag) {
                case 26:
                  i = V.memoizedState;
                case 5:
                case 27:
                  var c = V;
                  if (i ? P0(i) : c.stateNode.complete) {
                    tl = 0, ut = null;
                    var f = c.sibling;
                    if (f !== null) V = f;
                    else {
                      var y = c.return;
                      y !== null ? (V = y, pn(y)) : V = null;
                    }
                    break t;
                  }
              }
              tl = 0, ut = null, pu(l, t, n, 5);
              break;
            case 6:
              tl = 0, ut = null, pu(l, t, n, 6);
              break;
            case 8:
              Dc(), hl = 6;
              break l;
            default:
              throw Error(v(462));
          }
        }
        n1();
        break;
      } catch (b) {
        s0(l, b);
      }
    while (!0);
    return Bt = Ra = null, r.H = u, r.A = e, k = a, V !== null ? 0 : (fl = null, K = 0, Ge(), hl);
  }
  function n1() {
    for (; V !== null && !Om(); )
      y0(V);
  }
  function y0(l) {
    var t = jd(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? pn(l) : V = t;
  }
  function v0(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ud(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          K
        );
        break;
      case 11:
        t = Ud(
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
        Qd(a, t), t = V = os(t, Kt), t = jd(a, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? pn(l) : V = t;
  }
  function pu(l, t, a, u) {
    Bt = Ra = null, Ki(t), su = null, Ku = 0;
    var e = t.return;
    try {
      if (wo(
        l,
        e,
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
      if (e !== null) throw V = e, n;
      hl = 1, cn(
        l,
        dt(a, l.current)
      ), V = null;
      return;
    }
    t.flags & 32768 ? (F || u === 1 ? l = !0 : gu || (K & 536870912) !== 0 ? l = !1 : (fa = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = tt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), h0(t, l)) : pn(t);
  }
  function pn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        h0(
          t,
          fa
        );
        return;
      }
      l = t.return;
      var a = $o(
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
  function h0(l, t) {
    do {
      var a = ko(l.alternate, l);
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
  function g0(l, t, a, u, e, n, i, c, f) {
    l.cancelPendingCommit = null;
    do
      zn();
    while (Tl !== 0);
    if ((k & 6) !== 0) throw Error(v(327));
    if (t !== null) {
      if (t === l.current) throw Error(v(177));
      if (n = t.lanes | t.childLanes, n |= ri, jm(
        l,
        a,
        n,
        i,
        c,
        f
      ), l === fl && (V = fl = null, K = 0), ru = t, ma = l, Jt = a, Mc = n, Oc = e, n0 = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, s1(_e, function() {
        return z0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = r.T, r.T = null, e = E.p, E.p = 2, i = k, k |= 4;
        try {
          Io(l, t, a);
        } finally {
          k = i, E.p = e, r.T = u;
        }
      }
      Tl = 1, b0(), r0(), S0();
    }
  }
  function b0() {
    if (Tl === 1) {
      Tl = 0;
      var l = ma, t = ru, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = r.T, r.T = null;
        var u = E.p;
        E.p = 2;
        var e = k;
        k |= 4;
        try {
          kd(t, l);
          var n = Zc, i = us(l.containerInfo), c = n.focusedElem, f = n.selectionRange;
          if (i !== c && c && c.ownerDocument && as(
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
                  var g = h.getSelection(), M = c.textContent.length, U = Math.min(f.start, M), il = f.end === void 0 ? U : Math.min(f.end, M);
                  !g.extend && U > il && (i = il, il = U, U = i);
                  var m = ts(
                    c,
                    U
                  ), s = ts(
                    c,
                    il
                  );
                  if (m && s && (g.rangeCount !== 1 || g.anchorNode !== m.node || g.anchorOffset !== m.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                    var o = p.createRange();
                    o.setStart(m.node, m.offset), g.removeAllRanges(), U > il ? (g.addRange(o), g.extend(s.node, s.offset)) : (o.setEnd(s.node, s.offset), g.addRange(o));
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
          Nn = !!xc, Zc = xc = null;
        } finally {
          k = e, E.p = u, r.T = a;
        }
      }
      l.current = t, Tl = 2;
    }
  }
  function r0() {
    if (Tl === 2) {
      Tl = 0;
      var l = ma, t = ru, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = r.T, r.T = null;
        var u = E.p;
        E.p = 2;
        var e = k;
        k |= 4;
        try {
          Jd(l, t.alternate, t);
        } finally {
          k = e, E.p = u, r.T = a;
        }
      }
      Tl = 3;
    }
  }
  function S0() {
    if (Tl === 4 || Tl === 3) {
      Tl = 0, Cm();
      var l = ma, t = ru, a = Jt, u = n0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Tl = 5 : (Tl = 0, ru = ma = null, p0(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (da = null), Fn(a), t = t.stateNode, kl && typeof kl.onCommitFiberRoot == "function")
        try {
          kl.onCommitFiberRoot(
            Ou,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        t = r.T, e = E.p, E.p = 2, r.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < u.length; i++) {
            var c = u[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          r.T = t, E.p = e;
        }
      }
      (Jt & 3) !== 0 && zn(), Ot(l), e = l.pendingLanes, (a & 261930) !== 0 && (e & 42) !== 0 ? l === Cc ? fe++ : (fe = 0, Cc = l) : fe = 0, se(0);
    }
  }
  function p0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Vu(t)));
  }
  function zn() {
    return b0(), r0(), S0(), z0();
  }
  function z0() {
    if (Tl !== 5) return !1;
    var l = ma, t = Mc;
    Mc = 0;
    var a = Fn(Jt), u = r.T, e = E.p;
    try {
      E.p = 32 > a ? 32 : a, r.T = null, a = Oc, Oc = null;
      var n = ma, i = Jt;
      if (Tl = 0, ru = ma = null, Jt = 0, (k & 6) !== 0) throw Error(v(331));
      var c = k;
      if (k |= 4, a0(n.current), Pd(
        n,
        n.current,
        i,
        a
      ), k = c, se(0, !1), kl && typeof kl.onPostCommitFiberRoot == "function")
        try {
          kl.onPostCommitFiberRoot(Ou, n);
        } catch {
        }
      return !0;
    } finally {
      E.p = e, r.T = u, p0(l, t);
    }
  }
  function _0(l, t, a) {
    t = dt(a, t), t = ic(l.stateNode, t, 2), l = ea(l, t, 2), l !== null && (Du(l, 2), Ot(l));
  }
  function al(l, t, a) {
    if (l.tag === 3)
      _0(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _0(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (da === null || !da.has(u))) {
            l = dt(a, l), a = Td(2), u = ea(t, a, 2), u !== null && (Ed(
              a,
              u,
              t,
              l
            ), Du(u, 2), Ot(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Uc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new t1();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (Tc = !0, e.add(a), l = i1.bind(null, l, t, a), t.then(l, l));
  }
  function i1(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, fl === l && (K & a) === a && (hl === 4 || hl === 3 && (K & 62914560) === K && 300 > $l() - hn ? (k & 2) === 0 && Su(l, 0) : Ec |= a, bu === K && (bu = 0)), Ot(l);
  }
  function T0(l, t) {
    t === 0 && (t = bf()), l = Oa(l, t), l !== null && (Du(l, t), Ot(l));
  }
  function c1(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), T0(l, a);
  }
  function f1(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    u !== null && u.delete(t), T0(l, a);
  }
  function s1(l, t) {
    return Ln(l, t);
  }
  var _n = null, zu = null, qc = !1, Tn = !1, Nc = !1, ya = 0;
  function Ot(l) {
    l !== zu && l.next === null && (zu === null ? _n = zu = l : zu = zu.next = l), Tn = !0, qc || (qc = !0, m1());
  }
  function se(l, t) {
    if (!Nc && Tn) {
      Nc = !0;
      do
        for (var a = !1, u = _n; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var i = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - Il(42 | l) + 1) - 1, n &= e & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, O0(u, n));
          } else
            n = K, n = Me(
              u,
              u === fl ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Cu(u, n) || (a = !0, O0(u, n));
          u = u.next;
        }
      while (a);
      Nc = !1;
    }
  }
  function d1() {
    E0();
  }
  function E0() {
    Tn = qc = !1;
    var l = 0;
    ya !== 0 && z1() && (l = ya);
    for (var t = $l(), a = null, u = _n; u !== null; ) {
      var e = u.next, n = A0(u, t);
      n === 0 ? (u.next = null, a === null ? _n = e : a.next = e, e === null && (zu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (Tn = !0)), u = e;
    }
    Tl !== 0 && Tl !== 5 || se(l), ya !== 0 && (ya = 0);
  }
  function A0(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - Il(n), c = 1 << i, f = e[i];
      f === -1 ? ((c & a) === 0 || (c & u) !== 0) && (e[i] = Ym(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = fl, a = K, a = Me(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, a === 0 || l === t && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Kn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Cu(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Kn(u), Fn(a)) {
        case 2:
        case 8:
          a = hf;
          break;
        case 32:
          a = _e;
          break;
        case 268435456:
          a = gf;
          break;
        default:
          a = _e;
      }
      return u = M0.bind(null, l), a = Ln(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Kn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function M0(l, t) {
    if (Tl !== 0 && Tl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (zn() && l.callbackNode !== a)
      return null;
    var u = K;
    return u = Me(
      l,
      l === fl ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (c0(l, u, t), A0(l, $l()), l.callbackNode != null && l.callbackNode === a ? M0.bind(null, l) : null);
  }
  function O0(l, t) {
    if (zn()) return null;
    c0(l, t, !0);
  }
  function m1() {
    T1(function() {
      (k & 6) !== 0 ? Ln(
        vf,
        d1
      ) : E0();
    });
  }
  function Hc() {
    if (ya === 0) {
      var l = iu;
      l === 0 && (l = Te, Te <<= 1, (Te & 261888) === 0 && (Te = 256)), ya = l;
    }
    return ya;
  }
  function C0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Re("" + l);
  }
  function D0(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function o1(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = C0(
        (e[xl] || null).action
      ), i = u.submitter;
      i && (t = (t = i[xl] || null) ? C0(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new He(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (ya !== 0) {
                  var f = i ? D0(e, i) : new FormData(e);
                  lc(
                    a,
                    {
                      pending: !0,
                      data: f,
                      method: e.method,
                      action: n
                    },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), f = i ? D0(e, i) : new FormData(e), lc(
                  a,
                  {
                    pending: !0,
                    data: f,
                    method: e.method,
                    action: n
                  },
                  n,
                  f
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Bc = 0; Bc < bi.length; Bc++) {
    var Yc = bi[Bc], y1 = Yc.toLowerCase(), v1 = Yc[0].toUpperCase() + Yc.slice(1);
    rt(
      y1,
      "on" + v1
    );
  }
  rt(is, "onAnimationEnd"), rt(cs, "onAnimationIteration"), rt(fs, "onAnimationStart"), rt("dblclick", "onDoubleClick"), rt("focusin", "onFocus"), rt("focusout", "onBlur"), rt(Ro, "onTransitionRun"), rt(Uo, "onTransitionStart"), rt(qo, "onTransitionCancel"), rt(ss, "onTransitionEnd"), Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]), Ta(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ta(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ta("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ta(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ta(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ta(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var de = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), h1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(de)
  );
  function R0(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = u.length - 1; 0 <= i; i--) {
            var c = u[i], f = c.instance, y = c.currentTarget;
            if (c = c.listener, f !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (b) {
              je(b);
            }
            e.currentTarget = null, n = f;
          }
        else
          for (i = 0; i < u.length; i++) {
            if (c = u[i], f = c.instance, y = c.currentTarget, c = c.listener, f !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = y;
            try {
              n(e);
            } catch (b) {
              je(b);
            }
            e.currentTarget = null, n = f;
          }
      }
    }
  }
  function L(l, t) {
    var a = t[Wn];
    a === void 0 && (a = t[Wn] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (U0(t, l, 2, !1), a.add(u));
  }
  function jc(l, t, a) {
    var u = 0;
    t && (u |= 4), U0(
      a,
      l,
      u,
      t
    );
  }
  var En = "_reactListening" + Math.random().toString(36).slice(2);
  function Gc(l) {
    if (!l[En]) {
      l[En] = !0, Ef.forEach(function(a) {
        a !== "selectionchange" && (h1.has(a) || jc(a, !1, l), jc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[En] || (t[En] = !0, jc("selectionchange", !1, t));
    }
  }
  function U0(l, t, a, u) {
    switch (im(t)) {
      case 2:
        var e = V1;
        break;
      case 8:
        e = L1;
        break;
      default:
        e = Pc;
    }
    a = e.bind(
      null,
      t,
      a,
      l
    ), e = void 0, !ei || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
      passive: e
    }) : l.addEventListener(t, a, !1);
  }
  function Qc(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var i = u.tag;
        if (i === 3 || i === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (i === 4)
            for (i = u.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === e)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = Va(c), i === null) return;
            if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              u = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Yf(function() {
      var y = n, b = ai(a), p = [];
      l: {
        var h = ds.get(l);
        if (h !== void 0) {
          var g = He, M = l;
          switch (l) {
            case "keypress":
              if (qe(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = co;
              break;
            case "focusin":
              M = "focus", g = fi;
              break;
            case "focusout":
              M = "blur", g = fi;
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
              g = Qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Wm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = mo;
              break;
            case is:
            case cs:
            case fs:
              g = Im;
              break;
            case ss:
              g = yo;
              break;
            case "scroll":
            case "scrollend":
              g = wm;
              break;
            case "wheel":
              g = ho;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = lo;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = xf;
              break;
            case "toggle":
            case "beforetoggle":
              g = bo;
          }
          var U = (t & 4) !== 0, il = !U && (l === "scroll" || l === "scrollend"), m = U ? h !== null ? h + "Capture" : null : h;
          U = [];
          for (var s = y, o; s !== null; ) {
            var S = s;
            if (o = S.stateNode, S = S.tag, S !== 5 && S !== 26 && S !== 27 || o === null || m === null || (S = qu(s, m), S != null && U.push(
              me(s, S, o)
            )), il) break;
            s = s.return;
          }
          0 < U.length && (h = new g(
            h,
            M,
            null,
            a,
            b
          ), p.push({ event: h, listeners: U }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", h && a !== ti && (M = a.relatedTarget || a.fromElement) && (Va(M) || M[Za]))
            break l;
          if ((g || h) && (h = b.window === b ? b : (h = b.ownerDocument) ? h.defaultView || h.parentWindow : window, g ? (M = a.relatedTarget || a.toElement, g = y, M = M ? Va(M) : null, M !== null && (il = H(M), U = M.tag, M !== il || U !== 5 && U !== 27 && U !== 6) && (M = null)) : (g = null, M = y), g !== M)) {
            if (U = Qf, S = "onMouseLeave", m = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (U = xf, S = "onPointerLeave", m = "onPointerEnter", s = "pointer"), il = g == null ? h : Uu(g), o = M == null ? h : Uu(M), h = new U(
              S,
              s + "leave",
              g,
              a,
              b
            ), h.target = il, h.relatedTarget = o, S = null, Va(b) === y && (U = new U(
              m,
              s + "enter",
              M,
              a,
              b
            ), U.target = o, U.relatedTarget = il, S = U), il = S, g && M)
              t: {
                for (U = g1, m = g, s = M, o = 0, S = m; S; S = U(S))
                  o++;
                S = 0;
                for (var D = s; D; D = U(D))
                  S++;
                for (; 0 < o - S; )
                  m = U(m), o--;
                for (; 0 < S - o; )
                  s = U(s), S--;
                for (; o--; ) {
                  if (m === s || s !== null && m === s.alternate) {
                    U = m;
                    break t;
                  }
                  m = U(m), s = U(s);
                }
                U = null;
              }
            else U = null;
            g !== null && q0(
              p,
              h,
              g,
              U,
              !1
            ), M !== null && il !== null && q0(
              p,
              il,
              M,
              U,
              !0
            );
          }
        }
        l: {
          if (h = y ? Uu(y) : window, g = h.nodeName && h.nodeName.toLowerCase(), g === "select" || g === "input" && h.type === "file")
            var W = Wf;
          else if (wf(h))
            if ($f)
              W = Oo;
            else {
              W = Ao;
              var C = Eo;
            }
          else
            g = h.nodeName, !g || g.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? y && li(y.elementType) && (W = Wf) : W = Mo;
          if (W && (W = W(l, y))) {
            Ff(
              p,
              W,
              a,
              b
            );
            break l;
          }
          C && C(l, h, y), l === "focusout" && y && h.type === "number" && y.memoizedProps.value != null && Pn(h, "number", h.value);
        }
        switch (C = y ? Uu(y) : window, l) {
          case "focusin":
            (wf(C) || C.contentEditable === "true") && (Ia = C, vi = y, Xu = null);
            break;
          case "focusout":
            Xu = vi = Ia = null;
            break;
          case "mousedown":
            hi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hi = !1, es(p, a, b);
            break;
          case "selectionchange":
            if (Do) break;
          case "keydown":
          case "keyup":
            es(p, a, b);
        }
        var Q;
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
        J && (Zf && a.locale !== "ko" && (ka || J !== "onCompositionStart" ? J === "onCompositionEnd" && ka && (Q = jf()) : (kt = b, ni = "value" in kt ? kt.value : kt.textContent, ka = !0)), C = An(y, J), 0 < C.length && (J = new Xf(
          J,
          l,
          null,
          a,
          b
        ), p.push({ event: J, listeners: C }), Q ? J.data = Q : (Q = Jf(a), Q !== null && (J.data = Q)))), (Q = So ? po(l, a) : zo(l, a)) && (J = An(y, "onBeforeInput"), 0 < J.length && (C = new Xf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          b
        ), p.push({
          event: C,
          listeners: J
        }), C.data = Q)), o1(
          p,
          l,
          y,
          a,
          b
        );
      }
      R0(p, t);
    });
  }
  function me(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function An(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = qu(l, a), e != null && u.unshift(
        me(l, e, n)
      ), e = qu(l, t), e != null && u.push(
        me(l, e, n)
      )), l.tag === 3) return u;
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
  function q0(l, t, a, u, e) {
    for (var n = t._reactName, i = []; a !== null && a !== u; ) {
      var c = a, f = c.alternate, y = c.stateNode;
      if (c = c.tag, f !== null && f === u) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (f = y, e ? (y = qu(a, n), y != null && i.unshift(
        me(a, y, f)
      )) : e || (y = qu(a, n), y != null && i.push(
        me(a, y, f)
      ))), a = a.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var b1 = /\r\n?/g, r1 = /\u0000|\uFFFD/g;
  function N0(l) {
    return (typeof l == "string" ? l : "" + l).replace(b1, `
`).replace(r1, "");
  }
  function H0(l, t) {
    return t = N0(t), N0(l) === t;
  }
  function nl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Fa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Fa(l, "" + u);
        break;
      case "className":
        Ce(l, "class", u);
        break;
      case "tabIndex":
        Ce(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ce(l, a, u);
        break;
      case "style":
        Hf(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Ce(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Re("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && nl(l, t, "name", e.name, e, null), nl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), nl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), nl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (nl(l, t, "encType", e.encType, e, null), nl(l, t, "method", e.method, e, null), nl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Re("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Ut);
        break;
      case "onScroll":
        u != null && L("scroll", l);
        break;
      case "onScrollEnd":
        u != null && L("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(v(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
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
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Re("" + u), l.setAttributeNS(
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
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
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
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        L("beforetoggle", l), L("toggle", l), Oe(l, "popover", u);
        break;
      case "xlinkActuate":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Oe(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Km.get(a) || a, Oe(l, a, u));
    }
  }
  function Xc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Hf(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(v(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? Fa(l, u) : (typeof u == "number" || typeof u == "bigint") && Fa(l, "" + u);
        break;
      case "onScroll":
        u != null && L("scroll", l);
        break;
      case "onScrollEnd":
        u != null && L("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Ut);
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
        if (!Af.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[xl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Oe(l, a, u);
          }
    }
  }
  function Rl(l, t, a) {
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
        var u = !1, e = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, t));
                default:
                  nl(l, t, n, i, a, null);
              }
          }
        e && nl(l, t, "srcSet", a.srcSet, a, null), u && nl(l, t, "src", a.src, a, null);
        return;
      case "input":
        L("invalid", l);
        var c = n = i = e = null, f = null, y = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var b = a[u];
            if (b != null)
              switch (u) {
                case "name":
                  e = b;
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
                  nl(l, t, u, b, a, null);
              }
          }
        Rf(
          l,
          n,
          c,
          f,
          y,
          i,
          e,
          !1
        );
        return;
      case "select":
        L("invalid", l), u = i = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (c = a[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                u = c;
              default:
                nl(l, t, e, c, a, null);
            }
        t = n, a = i, l.multiple = !!u, t != null ? wa(l, !!u, t, !1) : a != null && wa(l, !!u, a, !0);
        return;
      case "textarea":
        L("invalid", l), n = e = u = null;
        for (i in a)
          if (a.hasOwnProperty(i) && (c = a[i], c != null))
            switch (i) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                e = c;
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
        qf(l, u, e, n);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && (u = a[f], u != null))
            switch (f) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                nl(l, t, f, u, a, null);
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
        for (u = 0; u < de.length; u++)
          L(de[u], l);
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
          if (a.hasOwnProperty(y) && (u = a[y], u != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, t));
              default:
                nl(l, t, y, u, a, null);
            }
        return;
      default:
        if (li(t)) {
          for (b in a)
            a.hasOwnProperty(b) && (u = a[b], u !== void 0 && Xc(
              l,
              t,
              b,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (u = a[c], u != null && nl(l, t, c, u, a, null));
  }
  function S1(l, t, a, u) {
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
        var e = null, n = null, i = null, c = null, f = null, y = null, b = null;
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
                u.hasOwnProperty(g) || nl(l, t, g, null, u, p);
            }
        }
        for (var h in u) {
          var g = u[h];
          if (p = a[h], u.hasOwnProperty(h) && (g != null || p != null))
            switch (h) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
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
                  u,
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
          e
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
                u.hasOwnProperty(n) || nl(
                  l,
                  t,
                  n,
                  null,
                  u,
                  f
                );
            }
        for (e in u)
          if (n = u[e], f = a[e], u.hasOwnProperty(e) && (n != null || f != null))
            switch (e) {
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
                  e,
                  n,
                  u,
                  f
                );
            }
        t = c, a = i, u = g, h != null ? wa(l, !!a, h, !1) : !!u != !!a && (t != null ? wa(l, !!a, t, !0) : wa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        g = h = null;
        for (c in a)
          if (e = a[c], a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                nl(l, t, c, null, u, e);
            }
        for (i in u)
          if (e = u[i], n = a[i], u.hasOwnProperty(i) && (e != null || n != null))
            switch (i) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(v(91));
                break;
              default:
                e !== n && nl(l, t, i, e, u, n);
            }
        Uf(l, h, g);
        return;
      case "option":
        for (var M in a)
          if (h = a[M], a.hasOwnProperty(M) && h != null && !u.hasOwnProperty(M))
            switch (M) {
              case "selected":
                l.selected = !1;
                break;
              default:
                nl(
                  l,
                  t,
                  M,
                  null,
                  u,
                  h
                );
            }
        for (f in u)
          if (h = u[f], g = a[f], u.hasOwnProperty(f) && h !== g && (h != null || g != null))
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
                  u,
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
        for (var U in a)
          h = a[U], a.hasOwnProperty(U) && h != null && !u.hasOwnProperty(U) && nl(l, t, U, null, u, h);
        for (y in u)
          if (h = u[y], g = a[y], u.hasOwnProperty(y) && h !== g && (h != null || g != null))
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
                  u,
                  g
                );
            }
        return;
      default:
        if (li(t)) {
          for (var il in a)
            h = a[il], a.hasOwnProperty(il) && h !== void 0 && !u.hasOwnProperty(il) && Xc(
              l,
              t,
              il,
              void 0,
              u,
              h
            );
          for (b in u)
            h = u[b], g = a[b], !u.hasOwnProperty(b) || h === g || h === void 0 && g === void 0 || Xc(
              l,
              t,
              b,
              h,
              u,
              g
            );
          return;
        }
    }
    for (var m in a)
      h = a[m], a.hasOwnProperty(m) && h != null && !u.hasOwnProperty(m) && nl(l, t, m, null, u, h);
    for (p in u)
      h = u[p], g = a[p], !u.hasOwnProperty(p) || h === g || h == null && g == null || nl(l, t, p, h, u, g);
  }
  function B0(l) {
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
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
        var e = a[u], n = e.transferSize, i = e.initiatorType, c = e.duration;
        if (n && c && B0(i)) {
          for (i = 0, c = e.responseEnd, u += 1; u < a.length; u++) {
            var f = a[u], y = f.startTime;
            if (y > c) break;
            var b = f.transferSize, p = f.initiatorType;
            b && B0(p) && (f = f.responseEnd, i += b * (f < c ? 1 : (c - y) / (f - y)));
          }
          if (--u, t += 8 * (n + i) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var xc = null, Zc = null;
  function Mn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Y0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function j0(l, t) {
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
  function z1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Lc ? !1 : (Lc = l, !0) : (Lc = null, !1);
  }
  var G0 = typeof setTimeout == "function" ? setTimeout : void 0, _1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Q0 = typeof Promise == "function" ? Promise : void 0, T1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Q0 < "u" ? function(l) {
    return Q0.resolve(null).then(l).catch(E1);
  } : G0;
  function E1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function va(l) {
    return l === "head";
  }
  function X0(l, t) {
    var a = t, u = 0;
    do {
      var e = a.nextSibling;
      if (l.removeChild(a), e && e.nodeType === 8)
        if (a = e.data, a === "/$" || a === "/&") {
          if (u === 0) {
            l.removeChild(e), Au(t);
            return;
          }
          u--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          u++;
        else if (a === "html")
          oe(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, oe(a);
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling, c = n.nodeName;
            n[Ru] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = i;
          }
        } else
          a === "body" && oe(l.ownerDocument.body);
      a = e;
    } while (a);
    Au(t);
  }
  function x0(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), u && u.nodeType === 8)
        if (a = u.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = u;
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
          Kc(a), $n(a);
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
  function A1(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[Ru])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = ht(l.nextSibling), l === null) break;
    }
    return null;
  }
  function M1(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function Z0(l, t) {
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
  function O1(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
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
  var Fc = null;
  function V0(l) {
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
  function L0(l) {
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
  function K0(l, t, a) {
    switch (t = Mn(a), l) {
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
  function oe(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    $n(l);
  }
  var gt = /* @__PURE__ */ new Map(), J0 = /* @__PURE__ */ new Set();
  function On(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var wt = E.d;
  E.d = {
    f: C1,
    r: D1,
    D: R1,
    C: U1,
    L: q1,
    m: N1,
    X: B1,
    S: H1,
    M: Y1
  };
  function C1() {
    var l = wt.f(), t = rn();
    return l || t;
  }
  function D1(l) {
    var t = La(l);
    t !== null && t.tag === 5 && t.type === "form" ? sd(t) : wt.r(l);
  }
  var _u = typeof document > "u" ? null : document;
  function w0(l, t, a) {
    var u = _u;
    if (u && typeof t == "string" && t) {
      var e = ft(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), J0.has(e) || (J0.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), Rl(t, "link", l), El(t), u.head.appendChild(t)));
    }
  }
  function R1(l) {
    wt.D(l), w0("dns-prefetch", l, null);
  }
  function U1(l, t) {
    wt.C(l, t), w0("preconnect", l, t);
  }
  function q1(l, t, a) {
    wt.L(l, t, a);
    var u = _u;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + ft(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + ft(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + ft(
        a.imageSizes
      ) + '"]')) : e += '[href="' + ft(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Tu(l);
          break;
        case "script":
          n = Eu(l);
      }
      gt.has(n) || (l = q(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), gt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(ye(n)) || t === "script" && u.querySelector(ve(n)) || (t = u.createElement("link"), Rl(t, "link", l), El(t), u.head.appendChild(t)));
    }
  }
  function N1(l, t) {
    wt.m(l, t);
    var a = _u;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + ft(u) + '"][href="' + ft(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Eu(l);
      }
      if (!gt.has(n) && (l = q({ rel: "modulepreload", href: l }, t), gt.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ve(n)))
              return;
        }
        u = a.createElement("link"), Rl(u, "link", l), El(u), a.head.appendChild(u);
      }
    }
  }
  function H1(l, t, a) {
    wt.S(l, t, a);
    var u = _u;
    if (u && l) {
      var e = Ka(u).hoistableStyles, n = Tu(l);
      t = t || "default";
      var i = e.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = u.querySelector(
          ye(n)
        ))
          c.loading = 5;
        else {
          l = q(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = gt.get(n)) && Wc(l, a);
          var f = i = u.createElement("link");
          El(f), Rl(f, "link", l), f._p = new Promise(function(y, b) {
            f.onload = y, f.onerror = b;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Cn(i, t, u);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, e.set(n, i);
      }
    }
  }
  function B1(l, t) {
    wt.X(l, t);
    var a = _u;
    if (a && l) {
      var u = Ka(a).hoistableScripts, e = Eu(l), n = u.get(e);
      n || (n = a.querySelector(ve(e)), n || (l = q({ src: l, async: !0 }, t), (t = gt.get(e)) && $c(l, t), n = a.createElement("script"), El(n), Rl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Y1(l, t) {
    wt.M(l, t);
    var a = _u;
    if (a && l) {
      var u = Ka(a).hoistableScripts, e = Eu(l), n = u.get(e);
      n || (n = a.querySelector(ve(e)), n || (l = q({ src: l, async: !0, type: "module" }, t), (t = gt.get(e)) && $c(l, t), n = a.createElement("script"), El(n), Rl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function F0(l, t, a, u) {
    var e = (e = Z.current) ? On(e) : null;
    if (!e) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Tu(a.href), a = Ka(
          e
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Tu(a.href);
          var n = Ka(
            e
          ).hoistableStyles, i = n.get(l);
          if (i || (e = e.ownerDocument || e, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, i), (n = e.querySelector(
            ye(l)
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
            e,
            l,
            a,
            i.state
          ))), t && u === null)
            throw Error(v(528, ""));
          return i;
        }
        if (t && u !== null)
          throw Error(v(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Eu(a), a = Ka(
          e
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(v(444, l));
    }
  }
  function Tu(l) {
    return 'href="' + ft(l) + '"';
  }
  function ye(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function W0(l) {
    return q({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function j1(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Rl(t, "link", a), El(t), l.head.appendChild(t));
  }
  function Eu(l) {
    return '[src="' + ft(l) + '"]';
  }
  function ve(l) {
    return "script[async]" + l;
  }
  function $0(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + ft(a.href) + '"]'
          );
          if (u)
            return t.instance = u, El(u), u;
          var e = q({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), El(u), Rl(u, "style", e), Cn(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = Tu(a.href);
          var n = l.querySelector(
            ye(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, El(n), n;
          u = W0(a), (e = gt.get(e)) && Wc(u, e), n = (l.ownerDocument || l).createElement("link"), El(n);
          var i = n;
          return i._p = new Promise(function(c, f) {
            i.onload = c, i.onerror = f;
          }), Rl(n, "link", u), t.state.loading |= 4, Cn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Eu(a.src), (e = l.querySelector(
            ve(n)
          )) ? (t.instance = e, El(e), e) : (u = a, (e = gt.get(n)) && (u = q({}, a), $c(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), El(e), Rl(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(v(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Cn(u, a.precedence, l));
    return t.instance;
  }
  function Cn(l, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, i = 0; i < u.length; i++) {
      var c = u[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Wc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function $c(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Dn = null;
  function k0(l, t, a) {
    if (Dn === null) {
      var u = /* @__PURE__ */ new Map(), e = Dn = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = Dn, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Ru] || n[Ml] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = u.get(i);
        c ? c.push(n) : u.set(i, [n]);
      }
    }
    return u;
  }
  function I0(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function G1(l, t, a) {
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
  function P0(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Q1(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var e = Tu(u.href), n = t.querySelector(
          ye(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Rn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, El(n);
          return;
        }
        n = t.ownerDocument || t, u = W0(u), (e = gt.get(e)) && Wc(u, e), n = n.createElement("link"), El(n);
        var i = n;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Rl(n, "link", u), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Rn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var kc = 0;
  function X1(l, t) {
    return l.stylesheets && l.count === 0 && qn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && qn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && kc === 0 && (kc = 62500 * p1());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && qn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > kc ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(e);
      };
    } : null;
  }
  function Rn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) qn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Un = null;
  function qn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Un = /* @__PURE__ */ new Map(), t.forEach(x1, l), Un = null, Rn.call(l));
  }
  function x1(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Un.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Un.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var i = e[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), u = i);
        }
        u && a.set(null, u);
      }
      e = t.instance, i = e.getAttribute("data-precedence"), n = a.get(i) || u, n === u && a.set(null, e), a.set(i, e), this.count++, u = Rn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var he = {
    $$typeof: Ul,
    Provider: null,
    Consumer: null,
    _currentValue: N,
    _currentValue2: N,
    _threadCount: 0
  };
  function Z1(l, t, a, u, e, n, i, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jn(0), this.hiddenUpdates = Jn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lm(l, t, a, u, e, n, i, c, f, y, b, p) {
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
    ), t = 1, n === !0 && (t |= 24), n = lt(3, null, null, t), l.current = n, n.stateNode = l, t = Ri(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Hi(n), l;
  }
  function tm(l) {
    return l ? (l = tu, l) : tu;
  }
  function am(l, t, a, u, e, n) {
    e = tm(e), u.context === null ? u.context = e : u.pendingContext = e, u = ua(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = ea(l, u, t), a !== null && (wl(a, l, t), wu(a, l, t));
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
  function em(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Oa(l, 67108864);
      t !== null && wl(t, l, 67108864), Ic(l, 67108864);
    }
  }
  function nm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = wn(t);
      var a = Oa(l, t);
      a !== null && wl(a, l, t), Ic(l, t);
    }
  }
  var Nn = !0;
  function V1(l, t, a, u) {
    var e = r.T;
    r.T = null;
    var n = E.p;
    try {
      E.p = 2, Pc(l, t, a, u);
    } finally {
      E.p = n, r.T = e;
    }
  }
  function L1(l, t, a, u) {
    var e = r.T;
    r.T = null;
    var n = E.p;
    try {
      E.p = 8, Pc(l, t, a, u);
    } finally {
      E.p = n, r.T = e;
    }
  }
  function Pc(l, t, a, u) {
    if (Nn) {
      var e = lf(u);
      if (e === null)
        Qc(
          l,
          t,
          u,
          Hn,
          a
        ), cm(l, u);
      else if (J1(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (cm(l, u), t & 4 && -1 < K1.indexOf(l)) {
        for (; e !== null; ) {
          var n = La(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = _a(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << 31 - Il(i);
                      c.entanglements[1] |= f, i &= ~f;
                    }
                    Ot(n), (k & 6) === 0 && (gn = $l() + 500, se(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Oa(n, 2), c !== null && wl(c, n, 2), rn(), Ic(n, 2);
            }
          if (n = lf(u), n === null && Qc(
            l,
            t,
            u,
            Hn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Qc(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function lf(l) {
    return l = ai(l), tf(l);
  }
  var Hn = null;
  function tf(l) {
    if (Hn = null, l = Va(l), l !== null) {
      var t = H(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = yl(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = Nl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Hn = l, null;
  }
  function im(l) {
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
        switch (Dm()) {
          case vf:
            return 2;
          case hf:
            return 8;
          case _e:
          case Rm:
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
  var af = !1, ha = null, ga = null, ba = null, ge = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), ra = [], K1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function cm(l, t) {
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
        ge.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        be.delete(t.pointerId);
    }
  }
  function re(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = La(t), t !== null && em(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function J1(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ha = re(
          ha,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return ga = re(
          ga,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return ba = re(
          ba,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ge.set(
          n,
          re(
            ge.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, be.set(
          n,
          re(
            be.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function fm(l) {
    var t = Va(l.target);
    if (t !== null) {
      var a = H(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = yl(a), t !== null) {
            l.blockedOn = t, _f(l.priority, function() {
              nm(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Nl(a), t !== null) {
            l.blockedOn = t, _f(l.priority, function() {
              nm(a);
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
  function Bn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = lf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        ti = u, a.target.dispatchEvent(u), ti = null;
      } else
        return t = La(a), t !== null && em(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function sm(l, t, a) {
    Bn(l) && a.delete(t);
  }
  function w1() {
    af = !1, ha !== null && Bn(ha) && (ha = null), ga !== null && Bn(ga) && (ga = null), ba !== null && Bn(ba) && (ba = null), ge.forEach(sm), be.forEach(sm);
  }
  function Yn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, af || (af = !0, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      w1
    )));
  }
  var jn = null;
  function dm(l) {
    jn !== l && (jn = l, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      function() {
        jn === l && (jn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (tf(u || a) === null)
              continue;
            break;
          }
          var n = La(a);
          n !== null && (l.splice(t, 3), t -= 3, lc(
            n,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function Au(l) {
    function t(f) {
      return Yn(f, l);
    }
    ha !== null && Yn(ha, l), ga !== null && Yn(ga, l), ba !== null && Yn(ba, l), ge.forEach(t), be.forEach(t);
    for (var a = 0; a < ra.length; a++) {
      var u = ra[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ra.length && (a = ra[0], a.blockedOn === null); )
      fm(a), a.blockedOn === null && ra.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], i = e[xl] || null;
        if (typeof n == "function")
          i || dm(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, i = n[xl] || null)
              c = i.formAction;
            else if (tf(e) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), dm(a);
        }
      }
  }
  function mm() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return e = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), u || setTimeout(a, 20);
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        u = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function uf(l) {
    this._internalRoot = l;
  }
  Gn.prototype.render = uf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(v(409));
    var a = t.current, u = nt();
    am(a, u, l, t, null, null);
  }, Gn.prototype.unmount = uf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      am(l.current, 2, null, l, null, null), rn(), t[Za] = null;
    }
  };
  function Gn(l) {
    this._internalRoot = l;
  }
  Gn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = zf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ra.length && t !== 0 && t < ra[a].priority; a++) ;
      ra.splice(a, 0, l), a === 0 && fm(l);
    }
  };
  var om = X.version;
  if (om !== "19.2.5")
    throw Error(
      v(
        527,
        om,
        "19.2.5"
      )
    );
  E.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(v(188)) : (l = Object.keys(l).join(","), Error(v(268, l)));
    return l = _(t), l = l !== null ? I(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var F1 = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: r,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qn.isDisabled && Qn.supportsFiber)
      try {
        Ou = Qn.inject(
          F1
        ), kl = Qn;
      } catch {
      }
  }
  return pe.createRoot = function(l, t) {
    if (!ll(l)) throw Error(v(299));
    var a = !1, u = "", e = Sd, n = pd, i = zd;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = lm(
      l,
      1,
      !1,
      null,
      null,
      a,
      u,
      null,
      e,
      n,
      i,
      mm
    ), l[Za] = t.current, Gc(l), new uf(t);
  }, pe.hydrateRoot = function(l, t, a) {
    if (!ll(l)) throw Error(v(299));
    var u = !1, e = "", n = Sd, i = pd, c = zd, f = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (f = a.formState)), t = lm(
      l,
      1,
      !0,
      t,
      a ?? null,
      u,
      e,
      f,
      n,
      i,
      c,
      mm
    ), t.context = tm(null), a = t.current, u = nt(), u = wn(u), e = ua(u), e.callback = null, ea(a, e, u), a = u, t.current.lanes = a, Du(t, a), Ot(t), l[Za] = t.current, Gc(l), new Gn(t);
  }, pe.version = "19.2.5", pe;
}
var _m;
function ny() {
  if (_m) return nf.exports;
  _m = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (X) {
        console.error(X);
      }
  }
  return T(), nf.exports = ey(), nf.exports;
}
var iy = ny(), Xa = mf();
const cy = {
  categories: [
    {
      id: 813,
      name: "アイデア",
      description: "機能リクエストはこちらから",
      image: "4ec92dd0-fdc8-45e2-8311-523616700888_thumb.png",
      topicsCount: 6
    },
    {
      id: 819,
      name: "アイデア",
      description: "機能リクエストはこちらから",
      image: "5bdee44b-ceca-489a-b1cb-d6ed2ff78ed6_thumb.png",
      topicsCount: 0
    },
    {
      id: 83,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "b1d72868-613a-4539-ba03-e1c687a0b4c3_thumb.png",
      topicsCount: 130
    },
    {
      id: 33,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "f578627a-4ead-44de-8a48-78c6ceba9c45_thumb.png",
      topicsCount: 89
    },
    {
      id: 43,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "26004acf-97b8-49b3-b151-882567301523_thumb.png",
      topicsCount: 12
    },
    {
      id: 145,
      name: "アイデア",
      description: "アイデア",
      image: "397cb848-83a4-43ed-bb4a-32d970497a15_thumb.png",
      topicsCount: 4
    },
    {
      id: 51,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "61088e68-b5b8-4fcd-a2f1-a3aefa225f48_thumb.png",
      topicsCount: 155
    },
    {
      id: 151,
      name: "アイデア",
      description: "アイデア",
      image: "d650cb44-737c-4c80-a44f-a52ad0b65948_thumb.png",
      topicsCount: 1
    },
    {
      id: 55,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "d92a5a6a-1380-4dc9-a832-7889fc777b53_thumb.png",
      topicsCount: 0
    },
    {
      id: 60,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "adc037c1-fed1-4c36-bc96-20554e61fc35_thumb.png",
      topicsCount: 323
    },
    {
      id: 65,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "5d3d0b51-e1ff-424d-8266-6f714b5390f9_thumb.png",
      topicsCount: 3
    },
    {
      id: 70,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "62a718f3-383a-46d6-90cf-4abb491f6cc8_thumb.png",
      topicsCount: 38
    },
    {
      id: 75,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "b87eda64-eeee-4f11-bdc1-11656c8577a3_thumb.png",
      topicsCount: 68
    },
    {
      id: 88,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "8932aadf-cce6-420f-b5e0-a8271b0e66a9_thumb.png",
      topicsCount: 156
    },
    {
      id: 179,
      name: "アイデア",
      description: "アイデア",
      image: "4a977a83-3698-411d-8402-f6a4f1bb4dbb_thumb.png",
      topicsCount: 1
    },
    {
      id: 99,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "866f71b0-7b53-4de3-975c-d6821c114d7d_thumb.png",
      topicsCount: 52
    },
    {
      id: 159,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "ceb1a5c9-8816-422f-8120-422cf2dc833e_thumb.png",
      topicsCount: 553
    },
    {
      id: 229,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "b965d272-703f-4b0b-a0a1-b517dba1c272_thumb.png",
      topicsCount: 4
    },
    {
      id: 767,
      name: "Featured Content",
      description: "Community specific content related to using products and features",
      topicsCount: 2
    },
    {
      id: 366,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "e8fae20b-9663-408b-a20a-0acd4d85f58b_thumb.png",
      topicsCount: 8
    },
    {
      id: 405,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "96739480-0e6c-4999-9ed5-bfdd24e586c9_thumb.png",
      topicsCount: 2743
    },
    {
      id: 491,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "9c76b036-c600-4581-9b27-e6c775b50d1a_thumb.png",
      topicsCount: 45
    },
    {
      id: 496,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "9d24aac2-005e-4823-9cec-f4366fe8b464_thumb.png",
      topicsCount: 1
    },
    {
      id: 501,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "ea58f58f-7016-4534-a4e1-79b1ddd588db_thumb.png",
      topicsCount: 0
    },
    {
      id: 507,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "29f8d051-a90c-476e-8803-7f3a00fa354b_thumb.png",
      topicsCount: 230
    },
    {
      id: 808,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "ed85828d-104c-4e97-b7d2-4d7a63a3a758_thumb.jpg",
      topicsCount: 4
    },
    {
      id: 522,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "196e2899-9231-4987-9a9e-937420261d84_thumb.png",
      topicsCount: 17
    },
    {
      id: 272,
      name: "アイデア",
      description: "アイデア",
      image: "e97c33f6-d291-4c72-980a-680b0056074e_thumb.png",
      topicsCount: 25
    },
    {
      id: 530,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "deff2b5b-70fc-4050-9814-f2d9646afea0_thumb.png",
      topicsCount: 1404
    },
    {
      id: 545,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "3374c4c0-332f-4963-bdc8-9587b94f4649_thumb.png",
      topicsCount: 335
    },
    {
      id: 554,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "90cdf96a-f180-4c65-a911-259c8c14badc_thumb.png",
      topicsCount: 93
    },
    {
      id: 559,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "4c4411f8-7e38-427f-adf0-5734a5164b55_thumb.png",
      topicsCount: 466
    },
    {
      id: 564,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "4f05b84e-8df5-45aa-be03-c32767e6fc32_thumb.png",
      topicsCount: 225
    },
    {
      id: 572,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "fc7af1cf-77fc-42e9-8c63-0ed98f8940cf_thumb.png",
      topicsCount: 555
    },
    {
      id: 597,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "0e89d178-b8ec-4b08-8ee0-035d9521a0cb_thumb.png",
      topicsCount: 0
    },
    {
      id: 598,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "d337dcb3-dab4-4aaf-ab11-cab5d90615d9_thumb.png",
      topicsCount: 0
    },
    {
      id: 603,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "5b9dfc8b-c26c-4903-ac78-ea77ee872822_thumb.png",
      topicsCount: 479
    },
    {
      id: 608,
      name: "Questions",
      description: "Questions",
      image: "eb9e7b7d-33ba-43d6-8a60-f2904213c391_thumb.png",
      topicsCount: 9
    },
    {
      id: 766,
      name: "Featured Content",
      description: "Community specific content related to using products and features",
      topicsCount: 9
    },
    {
      id: 657,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "7ad37902-545a-4316-ab36-21606836424d_thumb.png",
      topicsCount: 53
    },
    {
      id: 665,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "314427b4-5fc0-4e2a-abbf-e455ec569a61_thumb.png",
      topicsCount: 67
    },
    {
      id: 676,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "14c1b1b6-bd4d-4eae-a4b2-0408caa0d596_thumb.png",
      topicsCount: 1677
    },
    {
      id: 681,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "2fec09da-de5b-441d-87f9-732d533a27a1_thumb.png",
      topicsCount: 1343
    },
    {
      id: 686,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "659a2c84-5f19-4f7a-8563-ec973cff7637_thumb.png",
      topicsCount: 1
    },
    {
      id: 691,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "8ea27fcf-e313-4479-b493-effaf006c2a8_thumb.png",
      topicsCount: 0
    },
    {
      id: 713,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "23d90191-5994-41ca-9912-8850637d7e29_thumb.png",
      topicsCount: 3150
    },
    {
      id: 765,
      name: "Featured Content",
      description: "Community specific content related to using products and features",
      topicsCount: 4
    },
    {
      id: 730,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "7b56ddd9-f085-46bc-8a0a-aed2dc3796f7_thumb.png",
      topicsCount: 3912
    },
    {
      id: 742,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "6a8a426a-a850-4d16-8d5b-a369d70fc1a8_thumb.png",
      topicsCount: 13
    },
    {
      id: 747,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "5508f134-f350-47e0-b7de-e9bbb4bd8fcb_thumb.png",
      topicsCount: 0
    },
    {
      id: 771,
      name: "주요 이슈",
      description: "계정, 결제 및 플랜의 주요 이슈와 관련된 게시판입니다.",
      image: "b0d8a619-2353-416e-b9cc-1d2f3a506b31_thumb.png",
      topicsCount: 4
    },
    {
      id: 772,
      name: "주요 이슈",
      description: "Acrobat의 주요 이슈와 관련된 게시판입니다.",
      image: "29b83e11-b2b4-47ac-a564-51e577a25369_thumb.png",
      topicsCount: 0
    },
    {
      id: 773,
      name: "주요 이슈",
      description: "Acrobat Reader의 주요 이슈와 관련된 게시판입니다.",
      image: "229d9029-705e-4599-b0dd-6df6d823012e_thumb.png",
      topicsCount: 0
    },
    {
      id: 774,
      name: "주요 이슈",
      description: "Adobe Express의 주요 이슈와 관련된 게시판입니다.",
      image: "e4884ddf-bc84-4605-9ecc-479af82cc8b7_thumb.png",
      topicsCount: 0
    },
    {
      id: 775,
      name: "주요 이슈",
      description: "Adobe Scan의 주요 이슈와 관련된 게시판입니다.",
      image: "29d04a40-4412-40d4-97a2-265cd87dcb50_thumb.png",
      topicsCount: 0
    },
    {
      id: 770,
      name: "주요 이슈",
      description: "After Effect의 주요 이슈와 관련된 게시판입니다.",
      image: "b44e4471-da7a-4403-8b14-446b2c7906fb_thumb.png",
      topicsCount: 2
    },
    {
      id: 776,
      name: "주요 이슈",
      description: "Animate의 주요 이슈와 관련된 게시판입니다.",
      image: "bc97a2d3-5957-4cf4-a64b-e265038f23ba_thumb.png",
      topicsCount: 0
    },
    {
      id: 777,
      name: "주요 이슈",
      description: "Audition의 주요 이슈와 관련된 게시판입니다.",
      image: "d7c6a49a-cdbc-475e-ba8c-3cd86bc97641_thumb.png",
      topicsCount: 0
    },
    {
      id: 778,
      name: "주요 이슈",
      description: "Bridge의 주요 이슈와 관련된 게시판입니다.",
      image: "8e7e9a3e-0907-402f-bc47-a36bc319161b_thumb.png",
      topicsCount: 0
    },
    {
      id: 361,
      name: "아이디어",
      description: "아이디어",
      image: "58474727-2a4b-4be9-967a-23576d776482_thumb.png",
      topicsCount: 0
    },
    {
      id: 779,
      name: "주요 이슈",
      description: "Camera Raw의 주요 이슈와 관련된 게시판입니다.",
      image: "72d3b7df-e385-4717-8ada-d438fc856395_thumb.png",
      topicsCount: 0
    },
    {
      id: 780,
      name: "주요 이슈",
      description: "Creative Cloud의 주요 이슈와 관련된 게시판입니다.",
      image: "a209277b-b63e-418c-93ba-fbf57f637d28_thumb.png",
      topicsCount: 1
    },
    {
      id: 781,
      name: "주요 이슈",
      description: "Character Animator의 주요 이슈와 관련된 게시판입니다.",
      image: "ec882099-3d9a-4fab-a95f-67198ab2e688_thumb.png",
      topicsCount: 0
    },
    {
      id: 380,
      name: "아이디어",
      description: "아이디어",
      image: "c8a80859-5e84-456c-ada5-725a93061d6c_thumb.png",
      topicsCount: 4
    },
    {
      id: 782,
      name: "주요 이슈",
      description: "Dimension의 주요 이슈와 관련된 게시판입니다.",
      image: "ffb9cf2a-ec09-40b4-bd15-44c17c21d84e_thumb.png",
      topicsCount: 0
    },
    {
      id: 783,
      name: "주요 이슈",
      description: "다운로드 및 설치의 주요 이슈와 관련된 게시판입니다.",
      image: "ad516994-00b1-4a6c-affa-eb53d4060649_thumb.png",
      topicsCount: 1
    },
    {
      id: 784,
      name: "주요 이슈",
      description: "Adobe Fonts의 주요 이슈와 관련된 게시판입니다.",
      image: "e773e4a5-8591-44ad-b7cc-b2e1cff4ccb4_thumb.png",
      topicsCount: 0
    },
    {
      id: 785,
      name: "주요 이슈",
      description: "Fresco의 주요 이슈와 관련된 게시판입니다.",
      image: "e17d4e5c-47dd-49b3-abb9-ecd748f17e9f_thumb.png",
      topicsCount: 0
    },
    {
      id: 786,
      name: "주요 이슈",
      description: "Illustrator의 주요 이슈와 관련된 게시판입니다.",
      image: "3b39ab6b-458e-425d-9a79-5ade69b12a4f_thumb.png",
      topicsCount: 1
    },
    {
      id: 400,
      name: "아이디어",
      description: "아이디어",
      image: "9afb826a-cdfa-45d3-9a13-6f33289c60d5_thumb.png",
      topicsCount: 0
    },
    {
      id: 787,
      name: "주요 이슈",
      description: "Indesign의 주요 이슈와 관련된 게시판입니다.",
      image: "773e66ab-45dc-44f5-a6e3-9b2669f9e216_thumb.png",
      topicsCount: 0
    },
    {
      id: 788,
      name: "주요 이슈",
      description: "Lightroom의 주요 이슈와 관련된 게시판입니다.",
      image: "57c8d93c-e7cc-4ef4-90d1-edd0ff050e20_thumb.png",
      topicsCount: 2
    },
    {
      id: 789,
      name: "주요 이슈",
      description: "Lightroom Classic의 주요 이슈와 관련된 게시판입니다.",
      image: "3c0ceaa6-681d-46e7-86a8-adfa27da0f1a_thumb.png",
      topicsCount: 1
    },
    {
      id: 790,
      name: "주요 이슈",
      description: "Media Encoder의 주요 이슈와 관련된 게시판입니다.",
      image: "d07a4802-724e-4e0c-9e56-1b2dbf124ef1_thumb.png",
      topicsCount: 1
    },
    {
      id: 791,
      name: "주요 이슈",
      description: "Photoshop의 주요 이슈와 관련된 게시판입니다.",
      image: "edd5ff86-987b-4f6d-8b86-f0f4c2b8e771_thumb.png",
      topicsCount: 2
    },
    {
      id: 792,
      name: "주요 이슈",
      description: "Premiere Pro의 주요 이슈와 관련된 게시판입니다.",
      image: "8ca18a57-40b0-4310-836a-207911ef4aac_thumb.png",
      topicsCount: 2
    },
    {
      id: 793,
      name: "주요 이슈",
      description: "Premiere Rush의 주요 이슈와 관련된 게시판입니다.",
      image: "9b51d87f-dc5e-466a-9304-897c8c15c205_thumb.png",
      topicsCount: 0
    },
    {
      id: 794,
      name: "주요 이슈",
      description: "Stock의 주요 이슈와 관련된 게시판입니다.",
      image: "1ef5bbf9-9fd4-4545-a464-673cf43e9509_thumb.png",
      topicsCount: 0
    },
    {
      id: 795,
      name: "주요 이슈",
      description: "Stock Contributor",
      image: "32f0e9ff-cf4e-40e3-aecb-c0f14cae6135_thumb.png",
      topicsCount: 0
    },
    {
      id: 796,
      name: "주요 이슈",
      description: "Adobe XD의 주요 이슈와 관련된 게시판입니다.",
      image: "17723202-2b72-45d3-9b40-9d41c7c4f9f4_thumb.png",
      topicsCount: 0
    },
    {
      id: 482,
      name: "아이디어",
      description: "아이디어",
      image: "d74e4c2b-8e70-4995-916a-e32adf9e875c_thumb.png",
      topicsCount: 0
    },
    {
      id: 487,
      name: "아이디어",
      description: "아이디어",
      image: "7d104a84-9d88-4305-aa22-17109fc42a61_thumb.png",
      topicsCount: 0
    },
    {
      id: 805,
      name: "Feature Requests",
      description: "Feature Requests",
      image: "e5f38b9a-c0a7-4678-9411-5296deaf1315_thumb.jpg",
      topicsCount: 0
    }
  ]
}, fy = cy.categories;
function Em(T = "name") {
  const X = [...fy];
  return T === "name" ? X.sort((B, v) => B.name.localeCompare(v.name)) : T === "topicsCount" && X.sort((B, v) => v.topicsCount - B.topicsCount), X;
}
function Am({
  sortBy: T = "name",
  maxItems: X,
  showThumbnails: B = !1,
  emptyMessage: v = "No categories available"
}) {
  const ll = Xa.useMemo(() => {
    const H = Em(T);
    return X ? H.slice(0, X) : H;
  }, [T, X]);
  return ll.length === 0 ? /* @__PURE__ */ x.jsx("div", { className: "category-list-empty", children: /* @__PURE__ */ x.jsx("p", { children: v }) }) : /* @__PURE__ */ x.jsx("div", { className: "category-list", children: /* @__PURE__ */ x.jsx("div", { className: "category-list-container", children: ll.map((H) => /* @__PURE__ */ x.jsxs("div", { className: "category-card", children: [
    B && H.image && /* @__PURE__ */ x.jsx("div", { className: "category-thumbnail", children: /* @__PURE__ */ x.jsx(
      "img",
      {
        src: H.image,
        alt: H.name,
        loading: "lazy",
        onError: (yl) => {
          yl.currentTarget.style.display = "none";
        }
      }
    ) }),
    /* @__PURE__ */ x.jsxs("div", { className: "category-content", children: [
      /* @__PURE__ */ x.jsx("h3", { className: "category-name", children: H.name }),
      H.description && /* @__PURE__ */ x.jsx("p", { className: "category-description", children: H.description }),
      /* @__PURE__ */ x.jsx("div", { className: "category-meta", children: /* @__PURE__ */ x.jsxs("span", { className: "category-topics-count", children: [
        H.topicsCount,
        /* @__PURE__ */ x.jsx("span", { className: "topics-label", children: H.topicsCount === 1 ? "topic" : "topics" })
      ] }) })
    ] })
  ] }, H.id)) }) });
}
function sy({
  columns: T = 3,
  ...X
}) {
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "category-grid",
      style: {
        "--grid-columns": T
      },
      children: /* @__PURE__ */ x.jsx(Am, { ...X })
    }
  );
}
function dy({
  onSelect: T,
  selectedId: X,
  ...B
}) {
  const v = Xa.useMemo(() => Em(B.sortBy || "name"), [B.sortBy]), ll = Xa.useMemo(() => B.maxItems ? v.slice(0, B.maxItems) : v, [v, B.maxItems]);
  return ll.length === 0 ? /* @__PURE__ */ x.jsx("div", { className: "category-list-empty", children: /* @__PURE__ */ x.jsx("p", { children: B.emptyMessage || "No categories available" }) }) : /* @__PURE__ */ x.jsx("div", { className: "category-selector", children: /* @__PURE__ */ x.jsx("div", { className: "category-selector-list", children: ll.map((H) => /* @__PURE__ */ x.jsx(
    "button",
    {
      className: `category-selector-item ${X === H.id ? "selected" : ""}`,
      onClick: () => T == null ? void 0 : T(H.id),
      type: "button",
      children: /* @__PURE__ */ x.jsxs("div", { className: "selector-content", children: [
        /* @__PURE__ */ x.jsx("span", { className: "selector-name", children: H.name }),
        /* @__PURE__ */ x.jsx("span", { className: "selector-count", children: H.topicsCount })
      ] })
    },
    H.id
  )) }) });
}
function my({ sdk: T }) {
  const [X, B] = Xa.useState(T.getProps()), [v, ll] = Xa.useState(), [H, yl] = Xa.useState("grid");
  return Xa.useEffect(() => T.on("propsChanged", B), [T]), /* @__PURE__ */ x.jsxs("section", { className: "react-widget-section", children: [
    /* @__PURE__ */ x.jsx("h3", { className: "react-widget-title", children: X.title }),
    X.description && /* @__PURE__ */ x.jsx("p", { className: "react-widget-description", children: X.description }),
    /* @__PURE__ */ x.jsx("div", { className: "widget-controls", children: /* @__PURE__ */ x.jsxs("div", { className: "view-mode-selector", children: [
      /* @__PURE__ */ x.jsx(
        "button",
        {
          className: `mode-button ${H === "list" ? "active" : ""}`,
          onClick: () => yl("list"),
          children: "List"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "button",
        {
          className: `mode-button ${H === "grid" ? "active" : ""}`,
          onClick: () => yl("grid"),
          children: "Grid"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "button",
        {
          className: `mode-button ${H === "selector" ? "active" : ""}`,
          onClick: () => yl("selector"),
          children: "Select"
        }
      )
    ] }) }),
    /* @__PURE__ */ x.jsxs("div", { className: "categories-container", children: [
      H === "list" && /* @__PURE__ */ x.jsx(
        Am,
        {
          sortBy: "topicsCount",
          emptyMessage: "No categories with ideas enabled found"
        }
      ),
      H === "grid" && /* @__PURE__ */ x.jsx(
        sy,
        {
          columns: 3,
          sortBy: "name",
          emptyMessage: "No categories with ideas enabled found"
        }
      ),
      H === "selector" && /* @__PURE__ */ x.jsx(
        dy,
        {
          onSelect: ll,
          selectedId: v,
          emptyMessage: "No categories with ideas enabled found"
        }
      )
    ] }),
    v && /* @__PURE__ */ x.jsx("div", { className: "selected-category-info", children: /* @__PURE__ */ x.jsxs("p", { children: [
      "Selected Category ID: ",
      /* @__PURE__ */ x.jsx("strong", { children: v })
    ] }) })
  ] });
}
let oy = I1;
const Tm = /* @__PURE__ */ new Set();
async function yy(T) {
  await T.whenReady();
  const X = document.createElement("style");
  X.textContent = oy, Tm.add(X), T.shadowRoot.insertBefore(X, T.shadowRoot.firstChild);
  const B = iy.createRoot(T.getContainer());
  B.render(/* @__PURE__ */ x.jsx(my, { sdk: T })), T.on("destroy", () => {
    Tm.delete(X), X.remove(), B.unmount();
  });
}
export {
  yy as init
};

var uo = { exports: {} }, _n = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gm;
function F0() {
  if (gm) return _n;
  gm = 1;
  var C = Symbol.for("react.transitional.element"), R = Symbol.for("react.fragment");
  function G(b, it, ct) {
    var bt = null;
    if (ct !== void 0 && (bt = "" + ct), it.key !== void 0 && (bt = "" + it.key), "key" in it) {
      ct = {};
      for (var st in it)
        st !== "key" && (ct[st] = it[st]);
    } else ct = it;
    return it = ct.ref, {
      $$typeof: C,
      type: b,
      key: bt,
      ref: it !== void 0 ? it : null,
      props: ct
    };
  }
  return _n.Fragment = R, _n.jsx = G, _n.jsxs = G, _n;
}
var vm;
function $0() {
  return vm || (vm = 1, uo.exports = F0()), uo.exports;
}
var X = $0();
const I0 = ".community-selector-widget{font-family:Adobe Clean,adobe-clean,Trebuchet MS,sans-serif;background-color:#f5f5f5;padding:40px;display:flex;flex-direction:column}.page-title,.widget-title{margin:0 0 20px;padding-left:32px;color:#131313;font-size:28px;font-weight:800;line-height:32px}.widget-content-wrapper{background:#fff;border-radius:12px;border:1px dashed #d0d0d0;padding:32px;width:66.667%;min-width:400px;display:flex;flex-direction:column;overflow:hidden}.widget-content-wrapper .widget-content-header h2{color:#000;font-size:20px;font-weight:800;line-height:130%;margin:0 0 8px}.widget-content-wrapper .widget-content-header p{color:#000;font-size:16px;font-weight:400;line-height:150%;margin:0 0 20px}.widget-controls{display:flex;flex-direction:row;gap:8px;align-items:center;flex-wrap:nowrap;margin-bottom:16px}.widget-controls .searchWrapper{position:relative;flex-grow:1;min-width:180px}.widget-controls .searchWrapper .search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);pointer-events:none;display:flex;align-items:center}.widget-controls .searchWrapper .search-input{width:100%;padding:8px 12px 8px 36px;border:1px solid #d0d0d0;border-radius:6px;font-size:14px;font-family:inherit;outline:none;color:#1d1d1d;background:#fff;height:40px}.widget-controls .sort-selector>select{font-size:13px;color:#1d1d1d;background:#fff;border:1px solid #d0d0d0;border-radius:6px;padding:8px 28px 8px 10px;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%27http://www.w3.org/2000/svg%27%20width%3D%2712%27%20height%3D%278%27%20viewBox%3D%270%200%2012%208%27%3E%3Cpath%20d%3D%27M1%201l5%205%205-5%27%20stroke%3D%27%23555%27%20stroke-width%3D%271.5%27%20fill%3D%27none%27%20stroke-linecap%3D%27round%27/%3E%3C/svg%3E);background-repeat:no-repeat;background-position:right 8px center;width:180px;min-width:180px;max-width:180px;flex-shrink:0;font-family:inherit;height:40px}.categories-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px;overflow-y:auto;max-height:400px;padding:4px 0}.category-card{display:flex;flex-direction:row;align-items:center;gap:10px;padding:10px 12px;border:1px solid transparent;border-radius:8px;cursor:pointer;background:none;text-align:left;font-family:inherit;transition:background .12s,border-color .12s;width:100%}.category-card.selected{background:#e8f0fe;border-color:#1473e6}.category-card:hover{background:#f5f5f5;border-color:#e0e0e0}.category-thumbnail{flex-shrink:0;display:block}.category-thumbnail>img{width:32px;height:32px;min-width:32px;min-height:32px;border-radius:6px}.category-content{display:flex;flex-direction:column;gap:2px;min-width:0}.category-description{display:none}.category-name{font-size:13px;font-weight:500;color:#1d1d1d;line-height:1.3;display:block}.category-topics-count{font-size:11px;color:#959595;line-height:1.3;display:block}.widget-footer{border-top:1px solid #e0e0e0;display:flex;flex-direction:row;justify-content:flex-end;gap:12px;padding-top:20px;margin-top:20px}.widget-footer button{padding:8px 20px;border-radius:20px;font-family:inherit;font-size:14px;font-weight:500;cursor:pointer;border:1px solid #d0d0d0;transition:background .12s;display:inline-block}.widget-footer button.cancel{background:#fff;color:#1d1d1d}.widget-footer button.continue:disabled{background:#e8e8e8;color:#999;border-color:#e0e0e0}.widget-footer button.continue:not(:disabled){background:#1d1d1d;color:#fff;border-color:#1d1d1d;cursor:pointer}.react-widget-section{padding:2rem;font-family:Inter,system-ui,-apple-system,sans-serif;border-radius:12px;background:var(--config--main-color-background, #ffffff);color:var(--config--main-color-text, #1e1e2e);box-sizing:border-box;display:flex;flex-direction:column;gap:1.5rem}.react-widget-title{margin:0;font-size:1.5rem;font-weight:700;letter-spacing:-.015em;color:var(--config--main-color-brand, #2563eb)}.react-widget-description{margin:0;font-size:.95rem;line-height:1.6;color:var(--config--main-color-text-secondary, #6b7280)}.view-mode-selector{display:flex;gap:.5rem;background:var(--config--main-color-background-secondary, #f9fafb);padding:.25rem;border-radius:6px;border:1px solid var(--config--main-color-border, #e5e7eb)}.mode-button{padding:.5rem 1rem;background:transparent;border:none;border-radius:4px;cursor:pointer;font-size:.85rem;font-weight:500;color:var(--config--main-color-text-secondary, #6b7280);transition:all .2s ease}.mode-button:hover{background:var(--config--main-color-background, #ffffff);color:var(--config--main-color-text, #1e1e2e)}.mode-button.active{background:var(--config--main-color-brand, #2563eb);color:#fff}.selected-category-info{padding:1rem;background:var(--config--main-color-background-secondary, #f0f9ff);border-left:4px solid var(--config--main-color-brand, #2563eb);border-radius:4px;margin-top:1rem}.selected-category-info p{margin:0;font-size:.9rem;color:var(--config--main-color-text, #1e1e2e)}@media(max-width:768px){.react-widget-section{padding:1rem}.react-widget-title{font-size:1.25rem}.view-mode-selector{flex-wrap:wrap}.mode-button{padding:.4rem .8rem;font-size:.8rem}}.category-list{width:100%;padding:1rem 0}.category-list-container{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;width:100%}.category-list-empty{display:flex;align-items:center;justify-content:center;padding:2rem;color:var(--config--main-color-text-secondary, #6b7280);font-style:italic;background:var(--config--main-color-background-secondary, #f9fafb);border-radius:8px}.category-grid{display:grid;grid-template-columns:repeat(var(--grid-columns, 3),1fr);gap:1.5rem}@media(max-width:768px){.category-list-container{gap:1rem}.category-grid{grid-template-columns:repeat(auto-fill,minmax(250px,1fr))}}@media(max-width:480px){.category-list-container,.category-grid{grid-template-columns:1fr}.category-thumbnail{height:120px}.category-content{padding:1rem}.category-name{font-size:1rem}.category-description{font-size:.8rem}}.category-selector{width:100%}.category-selector-list{display:flex;flex-direction:column;gap:.5rem}.category-selector-item{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1rem;background:var(--config--main-color-background, #ffffff);border:2px solid var(--config--main-color-border, #e5e7eb);border-radius:6px;cursor:pointer;transition:all .2s ease;font-size:.95rem;color:var(--config--main-color-text, #1f2937)}.category-selector-item:hover{border-color:var(--config--main-color-brand, #2563eb);background-color:var(--config--main-color-background-secondary, #f9fafb)}.category-selector-item.selected{background-color:var(--config--main-color-brand, #2563eb);border-color:var(--config--main-color-brand, #2563eb);color:#fff}.selector-content{display:flex;align-items:center;justify-content:space-between;width:100%;gap:1rem}.selector-name{font-weight:500}.selector-count{padding:.25rem .5rem;background:#0000001a;border-radius:4px;font-size:.85rem;font-weight:600}.category-selector-item.selected .selector-count{background:#ffffff4d}";
var io = { exports: {} }, Sn = {}, co = { exports: {} }, oo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ym;
function P0() {
  return ym || (ym = 1, (function(C) {
    function R(y, E) {
      var N = y.length;
      y.push(E);
      t: for (; 0 < N; ) {
        var at = N - 1 >>> 1, ot = y[at];
        if (0 < it(ot, E))
          y[at] = E, y[N] = ot, N = at;
        else break t;
      }
    }
    function G(y) {
      return y.length === 0 ? null : y[0];
    }
    function b(y) {
      if (y.length === 0) return null;
      var E = y[0], N = y.pop();
      if (N !== E) {
        y[0] = N;
        t: for (var at = 0, ot = y.length, s = ot >>> 1; at < s; ) {
          var S = 2 * (at + 1) - 1, z = y[S], D = S + 1, B = y[D];
          if (0 > it(z, N))
            D < ot && 0 > it(B, z) ? (y[at] = B, y[D] = N, at = D) : (y[at] = z, y[S] = N, at = S);
          else if (D < ot && 0 > it(B, N))
            y[at] = B, y[D] = N, at = D;
          else break t;
        }
      }
      return E;
    }
    function it(y, E) {
      var N = y.sortIndex - E.sortIndex;
      return N !== 0 ? N : y.id - E.id;
    }
    if (C.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ct = performance;
      C.unstable_now = function() {
        return ct.now();
      };
    } else {
      var bt = Date, st = bt.now();
      C.unstable_now = function() {
        return bt.now() - st;
      };
    }
    var O = [], A = [], Q = 1, q = null, k = 3, pt = !1, qt = !1, yt = !1, ce = !1, ht = typeof setTimeout == "function" ? setTimeout : null, Xt = typeof clearTimeout == "function" ? clearTimeout : null, Bt = typeof setImmediate < "u" ? setImmediate : null;
    function oe(y) {
      for (var E = G(A); E !== null; ) {
        if (E.callback === null) b(A);
        else if (E.startTime <= y)
          b(A), E.sortIndex = E.expirationTime, R(O, E);
        else break;
        E = G(A);
      }
    }
    function Ce(y) {
      if (yt = !1, oe(y), !qt)
        if (G(O) !== null)
          qt = !0, Qt || (Qt = !0, Lt());
        else {
          var E = G(A);
          E !== null && he(Ce, E.startTime - y);
        }
    }
    var Qt = !1, w = -1, Zt = 5, Ee = -1;
    function Qa() {
      return ce ? !0 : !(C.unstable_now() - Ee < Zt);
    }
    function ze() {
      if (ce = !1, Qt) {
        var y = C.unstable_now();
        Ee = y;
        var E = !0;
        try {
          t: {
            qt = !1, yt && (yt = !1, Xt(w), w = -1), pt = !0;
            var N = k;
            try {
              e: {
                for (oe(y), q = G(O); q !== null && !(q.expirationTime > y && Qa()); ) {
                  var at = q.callback;
                  if (typeof at == "function") {
                    q.callback = null, k = q.priorityLevel;
                    var ot = at(
                      q.expirationTime <= y
                    );
                    if (y = C.unstable_now(), typeof ot == "function") {
                      q.callback = ot, oe(y), E = !0;
                      break e;
                    }
                    q === G(O) && b(O), oe(y);
                  } else b(O);
                  q = G(O);
                }
                if (q !== null) E = !0;
                else {
                  var s = G(A);
                  s !== null && he(
                    Ce,
                    s.startTime - y
                  ), E = !1;
                }
              }
              break t;
            } finally {
              q = null, k = N, pt = !1;
            }
            E = void 0;
          }
        } finally {
          E ? Lt() : Qt = !1;
        }
      }
    }
    var Lt;
    if (typeof Bt == "function")
      Lt = function() {
        Bt(ze);
      };
    else if (typeof MessageChannel < "u") {
      var _a = new MessageChannel(), Oe = _a.port2;
      _a.port1.onmessage = ze, Lt = function() {
        Oe.postMessage(null);
      };
    } else
      Lt = function() {
        ht(ze, 0);
      };
    function he(y, E) {
      w = ht(function() {
        y(C.unstable_now());
      }, E);
    }
    C.unstable_IdlePriority = 5, C.unstable_ImmediatePriority = 1, C.unstable_LowPriority = 4, C.unstable_NormalPriority = 3, C.unstable_Profiling = null, C.unstable_UserBlockingPriority = 2, C.unstable_cancelCallback = function(y) {
      y.callback = null;
    }, C.unstable_forceFrameRate = function(y) {
      0 > y || 125 < y ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Zt = 0 < y ? Math.floor(1e3 / y) : 5;
    }, C.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, C.unstable_next = function(y) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var E = 3;
          break;
        default:
          E = k;
      }
      var N = k;
      k = E;
      try {
        return y();
      } finally {
        k = N;
      }
    }, C.unstable_requestPaint = function() {
      ce = !0;
    }, C.unstable_runWithPriority = function(y, E) {
      switch (y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          y = 3;
      }
      var N = k;
      k = y;
      try {
        return E();
      } finally {
        k = N;
      }
    }, C.unstable_scheduleCallback = function(y, E, N) {
      var at = C.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? at + N : at) : N = at, y) {
        case 1:
          var ot = -1;
          break;
        case 2:
          ot = 250;
          break;
        case 5:
          ot = 1073741823;
          break;
        case 4:
          ot = 1e4;
          break;
        default:
          ot = 5e3;
      }
      return ot = N + ot, y = {
        id: Q++,
        callback: E,
        priorityLevel: y,
        startTime: N,
        expirationTime: ot,
        sortIndex: -1
      }, N > at ? (y.sortIndex = N, R(A, y), G(O) === null && y === G(A) && (yt ? (Xt(w), w = -1) : yt = !0, he(Ce, N - at))) : (y.sortIndex = ot, R(O, y), qt || pt || (qt = !0, Qt || (Qt = !0, Lt()))), y;
    }, C.unstable_shouldYield = Qa, C.unstable_wrapCallback = function(y) {
      var E = k;
      return function() {
        var N = k;
        k = E;
        try {
          return y.apply(this, arguments);
        } finally {
          k = N;
        }
      };
    };
  })(oo)), oo;
}
var hm;
function t1() {
  return hm || (hm = 1, co.exports = P0()), co.exports;
}
var fo = { exports: {} }, H = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _m;
function e1() {
  if (_m) return H;
  _m = 1;
  var C = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), it = Symbol.for("react.profiler"), ct = Symbol.for("react.consumer"), bt = Symbol.for("react.context"), st = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), k = Symbol.iterator;
  function pt(s) {
    return s === null || typeof s != "object" ? null : (s = k && s[k] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var qt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, yt = Object.assign, ce = {};
  function ht(s, S, z) {
    this.props = s, this.context = S, this.refs = ce, this.updater = z || qt;
  }
  ht.prototype.isReactComponent = {}, ht.prototype.setState = function(s, S) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, S, "setState");
  }, ht.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function Xt() {
  }
  Xt.prototype = ht.prototype;
  function Bt(s, S, z) {
    this.props = s, this.context = S, this.refs = ce, this.updater = z || qt;
  }
  var oe = Bt.prototype = new Xt();
  oe.constructor = Bt, yt(oe, ht.prototype), oe.isPureReactComponent = !0;
  var Ce = Array.isArray;
  function Qt() {
  }
  var w = { H: null, A: null, T: null, S: null }, Zt = Object.prototype.hasOwnProperty;
  function Ee(s, S, z) {
    var D = z.ref;
    return {
      $$typeof: C,
      type: s,
      key: S,
      ref: D !== void 0 ? D : null,
      props: z
    };
  }
  function Qa(s, S) {
    return Ee(s.type, S, s.props);
  }
  function ze(s) {
    return typeof s == "object" && s !== null && s.$$typeof === C;
  }
  function Lt(s) {
    var S = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(z) {
      return S[z];
    });
  }
  var _a = /\/+/g;
  function Oe(s, S) {
    return typeof s == "object" && s !== null && s.key != null ? Lt("" + s.key) : S.toString(36);
  }
  function he(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(Qt, Qt) : (s.status = "pending", s.then(
          function(S) {
            s.status === "pending" && (s.status = "fulfilled", s.value = S);
          },
          function(S) {
            s.status === "pending" && (s.status = "rejected", s.reason = S);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function y(s, S, z, D, B) {
    var Z = typeof s;
    (Z === "undefined" || Z === "boolean") && (s = null);
    var P = !1;
    if (s === null) P = !0;
    else
      switch (Z) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case C:
            case R:
              P = !0;
              break;
            case Q:
              return P = s._init, y(
                P(s._payload),
                S,
                z,
                D,
                B
              );
          }
      }
    if (P)
      return B = B(s), P = D === "" ? "." + Oe(s, 0) : D, Ce(B) ? (z = "", P != null && (z = P.replace(_a, "$&/") + "/"), y(B, S, z, "", function(Tl) {
        return Tl;
      })) : B != null && (ze(B) && (B = Qa(
        B,
        z + (B.key == null || s && s.key === B.key ? "" : ("" + B.key).replace(
          _a,
          "$&/"
        ) + "/") + P
      )), S.push(B)), 1;
    P = 0;
    var Yt = D === "" ? "." : D + ":";
    if (Ce(s))
      for (var _t = 0; _t < s.length; _t++)
        D = s[_t], Z = Yt + Oe(D, _t), P += y(
          D,
          S,
          z,
          Z,
          B
        );
    else if (_t = pt(s), typeof _t == "function")
      for (s = _t.call(s), _t = 0; !(D = s.next()).done; )
        D = D.value, Z = Yt + Oe(D, _t++), P += y(
          D,
          S,
          z,
          Z,
          B
        );
    else if (Z === "object") {
      if (typeof s.then == "function")
        return y(
          he(s),
          S,
          z,
          D,
          B
        );
      throw S = String(s), Error(
        "Objects are not valid as a React child (found: " + (S === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : S) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function E(s, S, z) {
    if (s == null) return s;
    var D = [], B = 0;
    return y(s, D, "", "", function(Z) {
      return S.call(z, Z, B++);
    }), D;
  }
  function N(s) {
    if (s._status === -1) {
      var S = s._result;
      S = S(), S.then(
        function(z) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = z);
        },
        function(z) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = z);
        }
      ), s._status === -1 && (s._status = 0, s._result = S);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var at = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var S = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(S)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  }, ot = {
    map: E,
    forEach: function(s, S, z) {
      E(
        s,
        function() {
          S.apply(this, arguments);
        },
        z
      );
    },
    count: function(s) {
      var S = 0;
      return E(s, function() {
        S++;
      }), S;
    },
    toArray: function(s) {
      return E(s, function(S) {
        return S;
      }) || [];
    },
    only: function(s) {
      if (!ze(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return H.Activity = q, H.Children = ot, H.Component = ht, H.Fragment = G, H.Profiler = it, H.PureComponent = Bt, H.StrictMode = b, H.Suspense = O, H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, H.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return w.H.useMemoCache(s);
    }
  }, H.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, H.cacheSignal = function() {
    return null;
  }, H.cloneElement = function(s, S, z) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var D = yt({}, s.props), B = s.key;
    if (S != null)
      for (Z in S.key !== void 0 && (B = "" + S.key), S)
        !Zt.call(S, Z) || Z === "key" || Z === "__self" || Z === "__source" || Z === "ref" && S.ref === void 0 || (D[Z] = S[Z]);
    var Z = arguments.length - 2;
    if (Z === 1) D.children = z;
    else if (1 < Z) {
      for (var P = Array(Z), Yt = 0; Yt < Z; Yt++)
        P[Yt] = arguments[Yt + 2];
      D.children = P;
    }
    return Ee(s.type, B, D);
  }, H.createContext = function(s) {
    return s = {
      $$typeof: bt,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: ct,
      _context: s
    }, s;
  }, H.createElement = function(s, S, z) {
    var D, B = {}, Z = null;
    if (S != null)
      for (D in S.key !== void 0 && (Z = "" + S.key), S)
        Zt.call(S, D) && D !== "key" && D !== "__self" && D !== "__source" && (B[D] = S[D]);
    var P = arguments.length - 2;
    if (P === 1) B.children = z;
    else if (1 < P) {
      for (var Yt = Array(P), _t = 0; _t < P; _t++)
        Yt[_t] = arguments[_t + 2];
      B.children = Yt;
    }
    if (s && s.defaultProps)
      for (D in P = s.defaultProps, P)
        B[D] === void 0 && (B[D] = P[D]);
    return Ee(s, Z, B);
  }, H.createRef = function() {
    return { current: null };
  }, H.forwardRef = function(s) {
    return { $$typeof: st, render: s };
  }, H.isValidElement = ze, H.lazy = function(s) {
    return {
      $$typeof: Q,
      _payload: { _status: -1, _result: s },
      _init: N
    };
  }, H.memo = function(s, S) {
    return {
      $$typeof: A,
      type: s,
      compare: S === void 0 ? null : S
    };
  }, H.startTransition = function(s) {
    var S = w.T, z = {};
    w.T = z;
    try {
      var D = s(), B = w.S;
      B !== null && B(z, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Qt, at);
    } catch (Z) {
      at(Z);
    } finally {
      S !== null && z.types !== null && (S.types = z.types), w.T = S;
    }
  }, H.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, H.use = function(s) {
    return w.H.use(s);
  }, H.useActionState = function(s, S, z) {
    return w.H.useActionState(s, S, z);
  }, H.useCallback = function(s, S) {
    return w.H.useCallback(s, S);
  }, H.useContext = function(s) {
    return w.H.useContext(s);
  }, H.useDebugValue = function() {
  }, H.useDeferredValue = function(s, S) {
    return w.H.useDeferredValue(s, S);
  }, H.useEffect = function(s, S) {
    return w.H.useEffect(s, S);
  }, H.useEffectEvent = function(s) {
    return w.H.useEffectEvent(s);
  }, H.useId = function() {
    return w.H.useId();
  }, H.useImperativeHandle = function(s, S, z) {
    return w.H.useImperativeHandle(s, S, z);
  }, H.useInsertionEffect = function(s, S) {
    return w.H.useInsertionEffect(s, S);
  }, H.useLayoutEffect = function(s, S) {
    return w.H.useLayoutEffect(s, S);
  }, H.useMemo = function(s, S) {
    return w.H.useMemo(s, S);
  }, H.useOptimistic = function(s, S) {
    return w.H.useOptimistic(s, S);
  }, H.useReducer = function(s, S, z) {
    return w.H.useReducer(s, S, z);
  }, H.useRef = function(s) {
    return w.H.useRef(s);
  }, H.useState = function(s) {
    return w.H.useState(s);
  }, H.useSyncExternalStore = function(s, S, z) {
    return w.H.useSyncExternalStore(
      s,
      S,
      z
    );
  }, H.useTransition = function() {
    return w.H.useTransition();
  }, H.version = "19.2.5", H;
}
var Sm;
function ro() {
  return Sm || (Sm = 1, fo.exports = e1()), fo.exports;
}
var so = { exports: {} }, jt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Am;
function a1() {
  if (Am) return jt;
  Am = 1;
  var C = ro();
  function R(O) {
    var A = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Q = 2; Q < arguments.length; Q++)
        A += "&args[]=" + encodeURIComponent(arguments[Q]);
    }
    return "Minified React error #" + O + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function G() {
  }
  var b = {
    d: {
      f: G,
      r: function() {
        throw Error(R(522));
      },
      D: G,
      C: G,
      L: G,
      m: G,
      X: G,
      S: G,
      M: G
    },
    p: 0,
    findDOMNode: null
  }, it = Symbol.for("react.portal");
  function ct(O, A, Q) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: it,
      key: q == null ? null : "" + q,
      children: O,
      containerInfo: A,
      implementation: Q
    };
  }
  var bt = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function st(O, A) {
    if (O === "font") return "";
    if (typeof A == "string")
      return A === "use-credentials" ? A : "";
  }
  return jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = b, jt.createPortal = function(O, A) {
    var Q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      throw Error(R(299));
    return ct(O, A, null, Q);
  }, jt.flushSync = function(O) {
    var A = bt.T, Q = b.p;
    try {
      if (bt.T = null, b.p = 2, O) return O();
    } finally {
      bt.T = A, b.p = Q, b.d.f();
    }
  }, jt.preconnect = function(O, A) {
    typeof O == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, b.d.C(O, A));
  }, jt.prefetchDNS = function(O) {
    typeof O == "string" && b.d.D(O);
  }, jt.preinit = function(O, A) {
    if (typeof O == "string" && A && typeof A.as == "string") {
      var Q = A.as, q = st(Q, A.crossOrigin), k = typeof A.integrity == "string" ? A.integrity : void 0, pt = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      Q === "style" ? b.d.S(
        O,
        typeof A.precedence == "string" ? A.precedence : void 0,
        {
          crossOrigin: q,
          integrity: k,
          fetchPriority: pt
        }
      ) : Q === "script" && b.d.X(O, {
        crossOrigin: q,
        integrity: k,
        fetchPriority: pt,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, jt.preinitModule = function(O, A) {
    if (typeof O == "string")
      if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var Q = st(
            A.as,
            A.crossOrigin
          );
          b.d.M(O, {
            crossOrigin: Q,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && b.d.M(O);
  }, jt.preload = function(O, A) {
    if (typeof O == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var Q = A.as, q = st(Q, A.crossOrigin);
      b.d.L(O, Q, {
        crossOrigin: q,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, jt.preloadModule = function(O, A) {
    if (typeof O == "string")
      if (A) {
        var Q = st(A.as, A.crossOrigin);
        b.d.m(O, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: Q,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else b.d.m(O);
  }, jt.requestFormReset = function(O) {
    b.d.r(O);
  }, jt.unstable_batchedUpdates = function(O, A) {
    return O(A);
  }, jt.useFormState = function(O, A, Q) {
    return bt.H.useFormState(O, A, Q);
  }, jt.useFormStatus = function() {
    return bt.H.useHostTransitionStatus();
  }, jt.version = "19.2.5", jt;
}
var Cm;
function l1() {
  if (Cm) return so.exports;
  Cm = 1;
  function C() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C);
      } catch (R) {
        console.error(R);
      }
  }
  return C(), so.exports = a1(), so.exports;
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
var Em;
function n1() {
  if (Em) return Sn;
  Em = 1;
  var C = t1(), R = ro(), G = l1();
  function b(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function it(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function ct(t) {
    var e = t, a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function bt(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function st(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function O(t) {
    if (ct(t) !== t)
      throw Error(b(188));
  }
  function A(t) {
    var e = t.alternate;
    if (!e) {
      if (e = ct(t), e === null) throw Error(b(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
      var n = a.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (l = n.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === a) return O(n), t;
          if (u === l) return O(n), e;
          u = u.sibling;
        }
        throw Error(b(188));
      }
      if (a.return !== l.return) a = n, l = u;
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === a) {
            i = !0, a = n, l = u;
            break;
          }
          if (c === l) {
            i = !0, l = n, a = u;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === a) {
              i = !0, a = u, l = n;
              break;
            }
            if (c === l) {
              i = !0, l = u, a = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(b(189));
        }
      }
      if (a.alternate !== l) throw Error(b(190));
    }
    if (a.tag !== 3) throw Error(b(188));
    return a.stateNode.current === a ? t : e;
  }
  function Q(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = Q(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var q = Object.assign, k = Symbol.for("react.element"), pt = Symbol.for("react.transitional.element"), qt = Symbol.for("react.portal"), yt = Symbol.for("react.fragment"), ce = Symbol.for("react.strict_mode"), ht = Symbol.for("react.profiler"), Xt = Symbol.for("react.consumer"), Bt = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), Ce = Symbol.for("react.suspense"), Qt = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), Zt = Symbol.for("react.lazy"), Ee = Symbol.for("react.activity"), Qa = Symbol.for("react.memo_cache_sentinel"), ze = Symbol.iterator;
  function Lt(t) {
    return t === null || typeof t != "object" ? null : (t = ze && t[ze] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var _a = Symbol.for("react.client.reference");
  function Oe(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === _a ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case yt:
        return "Fragment";
      case ht:
        return "Profiler";
      case ce:
        return "StrictMode";
      case Ce:
        return "Suspense";
      case Qt:
        return "SuspenseList";
      case Ee:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case qt:
          return "Portal";
        case Bt:
          return t.displayName || "Context";
        case Xt:
          return (t._context.displayName || "Context") + ".Consumer";
        case oe:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case w:
          return e = t.displayName || null, e !== null ? e : Oe(t.type) || "Memo";
        case Zt:
          e = t._payload, t = t._init;
          try {
            return Oe(t(e));
          } catch {
          }
      }
    return null;
  }
  var he = Array.isArray, y = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, E = G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, at = [], ot = -1;
  function s(t) {
    return { current: t };
  }
  function S(t) {
    0 > ot || (t.current = at[ot], at[ot] = null, ot--);
  }
  function z(t, e) {
    ot++, at[ot] = t.current, t.current = e;
  }
  var D = s(null), B = s(null), Z = s(null), P = s(null);
  function Yt(t, e) {
    switch (z(Z, e), z(B, t), z(D, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Gd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Gd(e), t = Xd(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    S(D), z(D, t);
  }
  function _t() {
    S(D), S(B), S(Z);
  }
  function Tl(t) {
    t.memoizedState !== null && z(P, t);
    var e = D.current, a = Xd(e, t.type);
    e !== a && (z(B, t), z(D, a));
  }
  function An(t) {
    B.current === t && (S(D), S(B)), P.current === t && (S(P), gn._currentValue = N);
  }
  var Qu, bo;
  function Sa(t) {
    if (Qu === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        Qu = e && e[1] || "", bo = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qu + t + bo;
  }
  var Zu = !1;
  function Lu(t, e) {
    if (!t || Zu) return "";
    Zu = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (g) {
                  var p = g;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (g) {
                  p = g;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                p = g;
              }
              (_ = t()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (g) {
            if (g && p && typeof g.stack == "string")
              return [g.stack, p.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = l.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var o = i.split(`
`), r = c.split(`
`);
        for (n = l = 0; l < o.length && !o[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; n < r.length && !r[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (l === o.length || n === r.length)
          for (l = o.length - 1, n = r.length - 1; 1 <= l && 0 <= n && o[l] !== r[n]; )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (o[l] !== r[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || o[l] !== r[n]) {
                  var v = `
` + o[l].replace(" at new ", " at ");
                  return t.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", t.displayName)), v;
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      Zu = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? Sa(a) : "";
  }
  function qm(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Sa(t.type);
      case 16:
        return Sa("Lazy");
      case 13:
        return t.child !== e && e !== null ? Sa("Suspense Fallback") : Sa("Suspense");
      case 19:
        return Sa("SuspenseList");
      case 0:
      case 15:
        return Lu(t.type, !1);
      case 11:
        return Lu(t.type.render, !1);
      case 1:
        return Lu(t.type, !0);
      case 31:
        return Sa("Activity");
      default:
        return "";
    }
  }
  function po(t) {
    try {
      var e = "", a = null;
      do
        e += qm(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Vu = Object.prototype.hasOwnProperty, Ku = C.unstable_scheduleCallback, Ju = C.unstable_cancelCallback, Dm = C.unstable_shouldYield, Mm = C.unstable_requestPaint, $t = C.unstable_now, Om = C.unstable_getCurrentPriorityLevel, go = C.unstable_ImmediatePriority, vo = C.unstable_UserBlockingPriority, Cn = C.unstable_NormalPriority, Um = C.unstable_LowPriority, yo = C.unstable_IdlePriority, xm = C.log, Rm = C.unstable_setDisableYieldValue, ql = null, It = null;
  function ke(t) {
    if (typeof xm == "function" && Rm(t), It && typeof It.setStrictMode == "function")
      try {
        It.setStrictMode(ql, t);
      } catch {
      }
  }
  var Pt = Math.clz32 ? Math.clz32 : Bm, Nm = Math.log, Hm = Math.LN2;
  function Bm(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Nm(t) / Hm | 0) | 0;
  }
  var En = 256, zn = 262144, Tn = 4194304;
  function Aa(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function qn(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = l & 134217727;
    return c !== 0 ? (l = c & ~u, l !== 0 ? n = Aa(l) : (i &= c, i !== 0 ? n = Aa(i) : a || (a = c & ~t, a !== 0 && (n = Aa(a))))) : (c = l & ~u, c !== 0 ? n = Aa(c) : i !== 0 ? n = Aa(i) : a || (a = l & ~t, a !== 0 && (n = Aa(a)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, a = e & -e, u >= a || u === 32 && (a & 4194048) !== 0) ? e : n;
  }
  function Dl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function jm(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function ho() {
    var t = Tn;
    return Tn <<= 1, (Tn & 62914560) === 0 && (Tn = 4194304), t;
  }
  function wu(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function Ml(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Ym(t, e, a, l, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var c = t.entanglements, o = t.expirationTimes, r = t.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var v = 31 - Pt(a), _ = 1 << v;
      c[v] = 0, o[v] = -1;
      var p = r[v];
      if (p !== null)
        for (r[v] = null, v = 0; v < p.length; v++) {
          var g = p[v];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~_;
    }
    l !== 0 && _o(t, l, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function _o(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - Pt(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
  }
  function So(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var l = 31 - Pt(a), n = 1 << l;
      n & e | t[l] & e && (t[l] |= e), a &= ~n;
    }
  }
  function Ao(t, e) {
    var a = e & -e;
    return a = (a & 42) !== 0 ? 1 : Wu(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
  }
  function Wu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ku(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Co() {
    var t = E.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : fm(t.type));
  }
  function Eo(t, e) {
    var a = E.p;
    try {
      return E.p = t, e();
    } finally {
      E.p = a;
    }
  }
  var Fe = Math.random().toString(36).slice(2), Ut = "__reactFiber$" + Fe, Vt = "__reactProps$" + Fe, Za = "__reactContainer$" + Fe, Fu = "__reactEvents$" + Fe, Gm = "__reactListeners$" + Fe, Xm = "__reactHandles$" + Fe, zo = "__reactResources$" + Fe, Ol = "__reactMarker$" + Fe;
  function $u(t) {
    delete t[Ut], delete t[Vt], delete t[Fu], delete t[Gm], delete t[Xm];
  }
  function La(t) {
    var e = t[Ut];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[Za] || a[Ut]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = wd(t); t !== null; ) {
            if (a = t[Ut]) return a;
            t = wd(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function Va(t) {
    if (t = t[Ut] || t[Za]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ul(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(b(33));
  }
  function Ka(t) {
    var e = t[zo];
    return e || (e = t[zo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Mt(t) {
    t[Ol] = !0;
  }
  var To = /* @__PURE__ */ new Set(), qo = {};
  function Ca(t, e) {
    Ja(t, e), Ja(t + "Capture", e);
  }
  function Ja(t, e) {
    for (qo[t] = e, t = 0; t < e.length; t++)
      To.add(e[t]);
  }
  var Qm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Do = {}, Mo = {};
  function Zm(t) {
    return Vu.call(Mo, t) ? !0 : Vu.call(Do, t) ? !1 : Qm.test(t) ? Mo[t] = !0 : (Do[t] = !0, !1);
  }
  function Dn(t, e, a) {
    if (Zm(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function Mn(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function Ue(t, e, a, l) {
    if (l === null) t.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + l);
    }
  }
  function fe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Oo(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Lm(t, e, a) {
    var l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, u = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          a = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Iu(t) {
    if (!t._valueTracker) {
      var e = Oo(t) ? "checked" : "value";
      t._valueTracker = Lm(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Uo(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), l = "";
    return t && (l = Oo(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (e.setValue(t), !0) : !1;
  }
  function On(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Vm = /[\n"\\]/g;
  function se(t) {
    return t.replace(
      Vm,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pu(t, e, a, l, n, u, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + fe(e)) : t.value !== "" + fe(e) && (t.value = "" + fe(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? ti(t, i, fe(e)) : a != null ? ti(t, i, fe(a)) : l != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + fe(c) : t.removeAttribute("name");
  }
  function xo(t, e, a, l, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Iu(t);
        return;
      }
      a = a != null ? "" + fe(a) : "", e = e != null ? "" + fe(e) : a, c || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = c ? t.checked : !!l, t.defaultChecked = !!l, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), Iu(t);
  }
  function ti(t, e, a) {
    e === "number" && On(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
  }
  function wa(t, e, a, l) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < a.length; n++)
        e["$" + a[n]] = !0;
      for (a = 0; a < t.length; a++)
        n = e.hasOwnProperty("$" + t[a].value), t[a].selected !== n && (t[a].selected = n), n && l && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + fe(a), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === a) {
          t[n].selected = !0, l && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ro(t, e, a) {
    if (e != null && (e = "" + fe(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + fe(a) : "";
  }
  function No(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(b(92));
        if (he(l)) {
          if (1 < l.length) throw Error(b(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), e = a;
    }
    a = fe(e), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l), Iu(t);
  }
  function Wa(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Km = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ho(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || Km.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function Bo(t, e, a) {
    if (e != null && typeof e != "object")
      throw Error(b(62));
    if (t = t.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "");
      for (var n in e)
        l = e[n], e.hasOwnProperty(n) && a[n] !== l && Ho(t, n, l);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Ho(t, u, e[u]);
  }
  function ei(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  function Un(t) {
    return wm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function xe() {
  }
  var ai = null;
  function li(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ka = null, Fa = null;
  function jo(t) {
    var e = Va(t);
    if (e && (t = e.stateNode)) {
      var a = t[Vt] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Pu(
            t,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), e = a.name, a.type === "radio" && e != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + se(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < a.length; e++) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var n = l[Vt] || null;
                if (!n) throw Error(b(90));
                Pu(
                  l,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < a.length; e++)
              l = a[e], l.form === t.form && Uo(l);
          }
          break t;
        case "textarea":
          Ro(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && wa(t, !!a.multiple, e, !1);
      }
    }
  }
  var ni = !1;
  function Yo(t, e, a) {
    if (ni) return t(e, a);
    ni = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (ni = !1, (ka !== null || Fa !== null) && (yu(), ka && (e = ka, t = Fa, Fa = ka = null, jo(e), t)))
        for (e = 0; e < t.length; e++) jo(t[e]);
    }
  }
  function xl(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[Vt] || null;
    if (l === null) return null;
    a = l[e];
    t: switch (e) {
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
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function")
      throw Error(
        b(231, e, typeof a)
      );
    return a;
  }
  var Re = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ui = !1;
  if (Re)
    try {
      var Rl = {};
      Object.defineProperty(Rl, "passive", {
        get: function() {
          ui = !0;
        }
      }), window.addEventListener("test", Rl, Rl), window.removeEventListener("test", Rl, Rl);
    } catch {
      ui = !1;
    }
  var $e = null, ii = null, xn = null;
  function Go() {
    if (xn) return xn;
    var t, e = ii, a = e.length, l, n = "value" in $e ? $e.value : $e.textContent, u = n.length;
    for (t = 0; t < a && e[t] === n[t]; t++) ;
    var i = a - t;
    for (l = 1; l <= i && e[a - l] === n[u - l]; l++) ;
    return xn = n.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Rn(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Nn() {
    return !0;
  }
  function Xo() {
    return !1;
  }
  function Kt(t) {
    function e(a, l, n, u, i) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (a = t[c], this[c] = a ? a(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Nn : Xo, this.isPropagationStopped = Xo, this;
    }
    return q(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Nn);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Nn);
      },
      persist: function() {
      },
      isPersistent: Nn
    }), e;
  }
  var Ea = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Hn = Kt(Ea), Nl = q({}, Ea, { view: 0, detail: 0 }), Wm = Kt(Nl), ci, oi, Hl, Bn = q({}, Nl, {
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
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Hl && (Hl && t.type === "mousemove" ? (ci = t.screenX - Hl.screenX, oi = t.screenY - Hl.screenY) : oi = ci = 0, Hl = t), ci);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : oi;
    }
  }), Qo = Kt(Bn), km = q({}, Bn, { dataTransfer: 0 }), Fm = Kt(km), $m = q({}, Nl, { relatedTarget: 0 }), fi = Kt($m), Im = q({}, Ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Pm = Kt(Im), tr = q({}, Ea, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), er = Kt(tr), ar = q({}, Ea, { data: 0 }), Zo = Kt(ar), lr = {
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
  }, nr = {
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
  }, ur = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ir(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = ur[t]) ? !!e[t] : !1;
  }
  function si() {
    return ir;
  }
  var cr = q({}, Nl, {
    key: function(t) {
      if (t.key) {
        var e = lr[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Rn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? nr[t.keyCode] || "Unidentified" : "";
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
    charCode: function(t) {
      return t.type === "keypress" ? Rn(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Rn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), or = Kt(cr), fr = q({}, Bn, {
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
  }), Lo = Kt(fr), sr = q({}, Nl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: si
  }), dr = Kt(sr), mr = q({}, Ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rr = Kt(mr), br = q({}, Bn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pr = Kt(br), gr = q({}, Ea, {
    newState: 0,
    oldState: 0
  }), vr = Kt(gr), yr = [9, 13, 27, 32], di = Re && "CompositionEvent" in window, Bl = null;
  Re && "documentMode" in document && (Bl = document.documentMode);
  var hr = Re && "TextEvent" in window && !Bl, Vo = Re && (!di || Bl && 8 < Bl && 11 >= Bl), Ko = " ", Jo = !1;
  function wo(t, e) {
    switch (t) {
      case "keyup":
        return yr.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wo(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var $a = !1;
  function _r(t, e) {
    switch (t) {
      case "compositionend":
        return Wo(e);
      case "keypress":
        return e.which !== 32 ? null : (Jo = !0, Ko);
      case "textInput":
        return t = e.data, t === Ko && Jo ? null : t;
      default:
        return null;
    }
  }
  function Sr(t, e) {
    if ($a)
      return t === "compositionend" || !di && wo(t, e) ? (t = Go(), xn = ii = $e = null, $a = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Vo && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Ar = {
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
  function ko(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Ar[t.type] : e === "textarea";
  }
  function Fo(t, e, a, l) {
    ka ? Fa ? Fa.push(l) : Fa = [l] : ka = l, e = zu(e, "onChange"), 0 < e.length && (a = new Hn(
      "onChange",
      "change",
      null,
      a,
      l
    ), t.push({ event: a, listeners: e }));
  }
  var jl = null, Yl = null;
  function Cr(t) {
    Rd(t, 0);
  }
  function jn(t) {
    var e = Ul(t);
    if (Uo(e)) return t;
  }
  function $o(t, e) {
    if (t === "change") return e;
  }
  var Io = !1;
  if (Re) {
    var mi;
    if (Re) {
      var ri = "oninput" in document;
      if (!ri) {
        var Po = document.createElement("div");
        Po.setAttribute("oninput", "return;"), ri = typeof Po.oninput == "function";
      }
      mi = ri;
    } else mi = !1;
    Io = mi && (!document.documentMode || 9 < document.documentMode);
  }
  function tf() {
    jl && (jl.detachEvent("onpropertychange", ef), Yl = jl = null);
  }
  function ef(t) {
    if (t.propertyName === "value" && jn(Yl)) {
      var e = [];
      Fo(
        e,
        Yl,
        t,
        li(t)
      ), Yo(Cr, e);
    }
  }
  function Er(t, e, a) {
    t === "focusin" ? (tf(), jl = e, Yl = a, jl.attachEvent("onpropertychange", ef)) : t === "focusout" && tf();
  }
  function zr(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return jn(Yl);
  }
  function Tr(t, e) {
    if (t === "click") return jn(e);
  }
  function qr(t, e) {
    if (t === "input" || t === "change")
      return jn(e);
  }
  function Dr(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var te = typeof Object.is == "function" ? Object.is : Dr;
  function Gl(t, e) {
    if (te(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!Vu.call(e, n) || !te(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function af(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function lf(t, e) {
    var a = af(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = t + a.textContent.length, t <= e && l >= e)
          return { node: a, offset: e - t };
        t = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = af(a);
    }
  }
  function nf(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? nf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function uf(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = On(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = On(t.document);
    }
    return e;
  }
  function bi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Mr = Re && "documentMode" in document && 11 >= document.documentMode, Ia = null, pi = null, Xl = null, gi = !1;
  function cf(t, e, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    gi || Ia == null || Ia !== On(l) || (l = Ia, "selectionStart" in l && bi(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Xl && Gl(Xl, l) || (Xl = l, l = zu(pi, "onSelect"), 0 < l.length && (e = new Hn(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }), e.target = Ia)));
  }
  function za(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var Pa = {
    animationend: za("Animation", "AnimationEnd"),
    animationiteration: za("Animation", "AnimationIteration"),
    animationstart: za("Animation", "AnimationStart"),
    transitionrun: za("Transition", "TransitionRun"),
    transitionstart: za("Transition", "TransitionStart"),
    transitioncancel: za("Transition", "TransitionCancel"),
    transitionend: za("Transition", "TransitionEnd")
  }, vi = {}, of = {};
  Re && (of = document.createElement("div").style, "AnimationEvent" in window || (delete Pa.animationend.animation, delete Pa.animationiteration.animation, delete Pa.animationstart.animation), "TransitionEvent" in window || delete Pa.transitionend.transition);
  function Ta(t) {
    if (vi[t]) return vi[t];
    if (!Pa[t]) return t;
    var e = Pa[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in of)
        return vi[t] = e[a];
    return t;
  }
  var ff = Ta("animationend"), sf = Ta("animationiteration"), df = Ta("animationstart"), Or = Ta("transitionrun"), Ur = Ta("transitionstart"), xr = Ta("transitioncancel"), mf = Ta("transitionend"), rf = /* @__PURE__ */ new Map(), yi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yi.push("scrollEnd");
  function _e(t, e) {
    rf.set(t, e), Ca(e, [t]);
  }
  var Yn = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, de = [], tl = 0, hi = 0;
  function Gn() {
    for (var t = tl, e = hi = tl = 0; e < t; ) {
      var a = de[e];
      de[e++] = null;
      var l = de[e];
      de[e++] = null;
      var n = de[e];
      de[e++] = null;
      var u = de[e];
      if (de[e++] = null, l !== null && n !== null) {
        var i = l.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), l.pending = n;
      }
      u !== 0 && bf(a, n, u);
    }
  }
  function Xn(t, e, a, l) {
    de[tl++] = t, de[tl++] = e, de[tl++] = a, de[tl++] = l, hi |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function _i(t, e, a, l) {
    return Xn(t, e, a, l), Qn(t);
  }
  function qa(t, e) {
    return Xn(t, null, null, e), Qn(t);
  }
  function bf(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= a, l = u.alternate, l !== null && (l.childLanes |= a), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - Pt(a), t = u.hiddenUpdates, l = t[n], l === null ? t[n] = [e] : l.push(e), e.lane = a | 536870912), u) : null;
  }
  function Qn(t) {
    if (50 < fn)
      throw fn = 0, Mc = null, Error(b(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var el = {};
  function Rr(t, e, a, l) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ee(t, e, a, l) {
    return new Rr(t, e, a, l);
  }
  function Si(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Ne(t, e) {
    var a = t.alternate;
    return a === null ? (a = ee(
      t.tag,
      e,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function pf(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Zn(t, e, a, l, n, u) {
    var i = 0;
    if (l = t, typeof t == "function") Si(t) && (i = 1);
    else if (typeof t == "string")
      i = Y0(
        t,
        a,
        D.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Ee:
          return t = ee(31, a, e, n), t.elementType = Ee, t.lanes = u, t;
        case yt:
          return Da(a.children, n, u, e);
        case ce:
          i = 8, n |= 24;
          break;
        case ht:
          return t = ee(12, a, e, n | 2), t.elementType = ht, t.lanes = u, t;
        case Ce:
          return t = ee(13, a, e, n), t.elementType = Ce, t.lanes = u, t;
        case Qt:
          return t = ee(19, a, e, n), t.elementType = Qt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Bt:
                i = 10;
                break t;
              case Xt:
                i = 9;
                break t;
              case oe:
                i = 11;
                break t;
              case w:
                i = 14;
                break t;
              case Zt:
                i = 16, l = null;
                break t;
            }
          i = 29, a = Error(
            b(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = ee(i, a, e, n), e.elementType = t, e.type = l, e.lanes = u, e;
  }
  function Da(t, e, a, l) {
    return t = ee(7, t, l, e), t.lanes = a, t;
  }
  function Ai(t, e, a) {
    return t = ee(6, t, null, e), t.lanes = a, t;
  }
  function gf(t) {
    var e = ee(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Ci(t, e, a) {
    return e = ee(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = a, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var vf = /* @__PURE__ */ new WeakMap();
  function me(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = vf.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: po(e)
      }, vf.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: po(e)
    };
  }
  var al = [], ll = 0, Ln = null, Ql = 0, re = [], be = 0, Ie = null, Te = 1, qe = "";
  function He(t, e) {
    al[ll++] = Ql, al[ll++] = Ln, Ln = t, Ql = e;
  }
  function yf(t, e, a) {
    re[be++] = Te, re[be++] = qe, re[be++] = Ie, Ie = t;
    var l = Te;
    t = qe;
    var n = 32 - Pt(l) - 1;
    l &= ~(1 << n), a += 1;
    var u = 32 - Pt(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (l & (1 << i) - 1).toString(32), l >>= i, n -= i, Te = 1 << 32 - Pt(e) + n | a << n | l, qe = u + t;
    } else
      Te = 1 << u | a << n | l, qe = t;
  }
  function Ei(t) {
    t.return !== null && (He(t, 1), yf(t, 1, 0));
  }
  function zi(t) {
    for (; t === Ln; )
      Ln = al[--ll], al[ll] = null, Ql = al[--ll], al[ll] = null;
    for (; t === Ie; )
      Ie = re[--be], re[be] = null, qe = re[--be], re[be] = null, Te = re[--be], re[be] = null;
  }
  function hf(t, e) {
    re[be++] = Te, re[be++] = qe, re[be++] = Ie, Te = e.id, qe = e.overflow, Ie = t;
  }
  var xt = null, dt = null, W = !1, Pe = null, pe = !1, Ti = Error(b(519));
  function ta(t) {
    var e = Error(
      b(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Zl(me(e, t)), Ti;
  }
  function _f(t) {
    var e = t.stateNode, a = t.type, l = t.memoizedProps;
    switch (e[Ut] = t, e[Vt] = l, a) {
      case "dialog":
        V("cancel", e), V("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        V("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < dn.length; a++)
          V(dn[a], e);
        break;
      case "source":
        V("error", e);
        break;
      case "img":
      case "image":
      case "link":
        V("error", e), V("load", e);
        break;
      case "details":
        V("toggle", e);
        break;
      case "input":
        V("invalid", e), xo(
          e,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        V("invalid", e);
        break;
      case "textarea":
        V("invalid", e), No(e, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === !0 || jd(e.textContent, a) ? (l.popover != null && (V("beforetoggle", e), V("toggle", e)), l.onScroll != null && V("scroll", e), l.onScrollEnd != null && V("scrollend", e), l.onClick != null && (e.onclick = xe), e = !0) : e = !1, e || ta(t, !0);
  }
  function Sf(t) {
    for (xt = t.return; xt; )
      switch (xt.tag) {
        case 5:
        case 31:
        case 13:
          pe = !1;
          return;
        case 27:
        case 3:
          pe = !0;
          return;
        default:
          xt = xt.return;
      }
  }
  function nl(t) {
    if (t !== xt) return !1;
    if (!W) return Sf(t), W = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Vc(t.type, t.memoizedProps)), a = !a), a && dt && ta(t), Sf(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(b(317));
      dt = Jd(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(b(317));
      dt = Jd(t);
    } else
      e === 27 ? (e = dt, ba(t.type) ? (t = kc, kc = null, dt = t) : dt = e) : dt = xt ? ve(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ma() {
    dt = xt = null, W = !1;
  }
  function qi() {
    var t = Pe;
    return t !== null && (kt === null ? kt = t : kt.push.apply(
      kt,
      t
    ), Pe = null), t;
  }
  function Zl(t) {
    Pe === null ? Pe = [t] : Pe.push(t);
  }
  var Di = s(null), Oa = null, Be = null;
  function ea(t, e, a) {
    z(Di, e._currentValue), e._currentValue = a;
  }
  function je(t) {
    t._currentValue = Di.current, S(Di);
  }
  function Mi(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function Oi(t, e, a, l) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var o = 0; o < e.length; o++)
            if (c.context === e[o]) {
              u.lanes |= a, c = u.alternate, c !== null && (c.lanes |= a), Mi(
                u.return,
                a,
                t
              ), l || (i = null);
              break t;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(b(341));
        i.lanes |= a, u = i.alternate, u !== null && (u.lanes |= a), Mi(i, a, t), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function ul(t, e, a, l) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(b(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          te(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (n === P.current) {
        if (i = n.alternate, i === null) throw Error(b(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(gn) : t = [gn]);
      }
      n = n.return;
    }
    t !== null && Oi(
      e,
      t,
      a,
      l
    ), e.flags |= 262144;
  }
  function Vn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!te(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ua(t) {
    Oa = t, Be = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Rt(t) {
    return Af(Oa, t);
  }
  function Kn(t, e) {
    return Oa === null && Ua(t), Af(t, e);
  }
  function Af(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, Be === null) {
      if (t === null) throw Error(b(308));
      Be = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Be = Be.next = e;
    return a;
  }
  var Nr = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(a) {
        return a();
      });
    };
  }, Hr = C.unstable_scheduleCallback, Br = C.unstable_NormalPriority, Ct = {
    $$typeof: Bt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ui() {
    return {
      controller: new Nr(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ll(t) {
    t.refCount--, t.refCount === 0 && Hr(Br, function() {
      t.controller.abort();
    });
  }
  var Vl = null, xi = 0, il = 0, cl = null;
  function jr(t, e) {
    if (Vl === null) {
      var a = Vl = [];
      xi = 0, il = Hc(), cl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return xi++, e.then(Cf, Cf), e;
  }
  function Cf() {
    if (--xi === 0 && Vl !== null) {
      cl !== null && (cl.status = "fulfilled");
      var t = Vl;
      Vl = null, il = 0, cl = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Yr(t, e) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = e;
        for (var n = 0; n < a.length; n++) (0, a[n])(e);
      },
      function(n) {
        for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)
          (0, a[n])(void 0);
      }
    ), l;
  }
  var Ef = y.S;
  y.S = function(t, e) {
    cd = $t(), typeof e == "object" && e !== null && typeof e.then == "function" && jr(t, e), Ef !== null && Ef(t, e);
  };
  var xa = s(null);
  function Ri() {
    var t = xa.current;
    return t !== null ? t : ft.pooledCache;
  }
  function Jn(t, e) {
    e === null ? z(xa, xa.current) : z(xa, e.pool);
  }
  function zf() {
    var t = Ri();
    return t === null ? null : { parent: Ct._currentValue, pool: t };
  }
  var ol = Error(b(460)), Ni = Error(b(474)), wn = Error(b(542)), Wn = { then: function() {
  } };
  function Tf(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function qf(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(xe, xe), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Mf(t), t;
      default:
        if (typeof e.status == "string") e.then(xe, xe);
        else {
          if (t = ft, t !== null && 100 < t.shellSuspendCounter)
            throw Error(b(482));
          t = e, t.status = "pending", t.then(
            function(l) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = l;
              }
            },
            function(l) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = l;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Mf(t), t;
        }
        throw Na = e, ol;
    }
  }
  function Ra(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Na = a, ol) : a;
    }
  }
  var Na = null;
  function Df() {
    if (Na === null) throw Error(b(459));
    var t = Na;
    return Na = null, t;
  }
  function Mf(t) {
    if (t === ol || t === wn)
      throw Error(b(483));
  }
  var fl = null, Kl = 0;
  function kn(t) {
    var e = Kl;
    return Kl += 1, fl === null && (fl = []), qf(fl, t, e);
  }
  function Jl(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Fn(t, e) {
    throw e.$$typeof === k ? Error(b(525)) : (t = Object.prototype.toString.call(e), Error(
      b(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Of(t) {
    function e(d, f) {
      if (t) {
        var m = d.deletions;
        m === null ? (d.deletions = [f], d.flags |= 16) : m.push(f);
      }
    }
    function a(d, f) {
      if (!t) return null;
      for (; f !== null; )
        e(d, f), f = f.sibling;
      return null;
    }
    function l(d) {
      for (var f = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
      return f;
    }
    function n(d, f) {
      return d = Ne(d, f), d.index = 0, d.sibling = null, d;
    }
    function u(d, f, m) {
      return d.index = m, t ? (m = d.alternate, m !== null ? (m = m.index, m < f ? (d.flags |= 67108866, f) : m) : (d.flags |= 67108866, f)) : (d.flags |= 1048576, f);
    }
    function i(d) {
      return t && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, f, m, h) {
      return f === null || f.tag !== 6 ? (f = Ai(m, d.mode, h), f.return = d, f) : (f = n(f, m), f.return = d, f);
    }
    function o(d, f, m, h) {
      var U = m.type;
      return U === yt ? v(
        d,
        f,
        m.props.children,
        h,
        m.key
      ) : f !== null && (f.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Zt && Ra(U) === f.type) ? (f = n(f, m.props), Jl(f, m), f.return = d, f) : (f = Zn(
        m.type,
        m.key,
        m.props,
        null,
        d.mode,
        h
      ), Jl(f, m), f.return = d, f);
    }
    function r(d, f, m, h) {
      return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = Ci(m, d.mode, h), f.return = d, f) : (f = n(f, m.children || []), f.return = d, f);
    }
    function v(d, f, m, h, U) {
      return f === null || f.tag !== 7 ? (f = Da(
        m,
        d.mode,
        h,
        U
      ), f.return = d, f) : (f = n(f, m), f.return = d, f);
    }
    function _(d, f, m) {
      if (typeof f == "string" && f !== "" || typeof f == "number" || typeof f == "bigint")
        return f = Ai(
          "" + f,
          d.mode,
          m
        ), f.return = d, f;
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case pt:
            return m = Zn(
              f.type,
              f.key,
              f.props,
              null,
              d.mode,
              m
            ), Jl(m, f), m.return = d, m;
          case qt:
            return f = Ci(
              f,
              d.mode,
              m
            ), f.return = d, f;
          case Zt:
            return f = Ra(f), _(d, f, m);
        }
        if (he(f) || Lt(f))
          return f = Da(
            f,
            d.mode,
            m,
            null
          ), f.return = d, f;
        if (typeof f.then == "function")
          return _(d, kn(f), m);
        if (f.$$typeof === Bt)
          return _(
            d,
            Kn(d, f),
            m
          );
        Fn(d, f);
      }
      return null;
    }
    function p(d, f, m, h) {
      var U = f !== null ? f.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return U !== null ? null : c(d, f, "" + m, h);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case pt:
            return m.key === U ? o(d, f, m, h) : null;
          case qt:
            return m.key === U ? r(d, f, m, h) : null;
          case Zt:
            return m = Ra(m), p(d, f, m, h);
        }
        if (he(m) || Lt(m))
          return U !== null ? null : v(d, f, m, h, null);
        if (typeof m.then == "function")
          return p(
            d,
            f,
            kn(m),
            h
          );
        if (m.$$typeof === Bt)
          return p(
            d,
            f,
            Kn(d, m),
            h
          );
        Fn(d, m);
      }
      return null;
    }
    function g(d, f, m, h, U) {
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return d = d.get(m) || null, c(f, d, "" + h, U);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case pt:
            return d = d.get(
              h.key === null ? m : h.key
            ) || null, o(f, d, h, U);
          case qt:
            return d = d.get(
              h.key === null ? m : h.key
            ) || null, r(f, d, h, U);
          case Zt:
            return h = Ra(h), g(
              d,
              f,
              m,
              h,
              U
            );
        }
        if (he(h) || Lt(h))
          return d = d.get(m) || null, v(f, d, h, U, null);
        if (typeof h.then == "function")
          return g(
            d,
            f,
            m,
            kn(h),
            U
          );
        if (h.$$typeof === Bt)
          return g(
            d,
            f,
            m,
            Kn(f, h),
            U
          );
        Fn(f, h);
      }
      return null;
    }
    function T(d, f, m, h) {
      for (var U = null, F = null, M = f, Y = f = 0, J = null; M !== null && Y < m.length; Y++) {
        M.index > Y ? (J = M, M = null) : J = M.sibling;
        var $ = p(
          d,
          M,
          m[Y],
          h
        );
        if ($ === null) {
          M === null && (M = J);
          break;
        }
        t && M && $.alternate === null && e(d, M), f = u($, f, Y), F === null ? U = $ : F.sibling = $, F = $, M = J;
      }
      if (Y === m.length)
        return a(d, M), W && He(d, Y), U;
      if (M === null) {
        for (; Y < m.length; Y++)
          M = _(d, m[Y], h), M !== null && (f = u(
            M,
            f,
            Y
          ), F === null ? U = M : F.sibling = M, F = M);
        return W && He(d, Y), U;
      }
      for (M = l(M); Y < m.length; Y++)
        J = g(
          M,
          d,
          Y,
          m[Y],
          h
        ), J !== null && (t && J.alternate !== null && M.delete(
          J.key === null ? Y : J.key
        ), f = u(
          J,
          f,
          Y
        ), F === null ? U = J : F.sibling = J, F = J);
      return t && M.forEach(function(ha) {
        return e(d, ha);
      }), W && He(d, Y), U;
    }
    function x(d, f, m, h) {
      if (m == null) throw Error(b(151));
      for (var U = null, F = null, M = f, Y = f = 0, J = null, $ = m.next(); M !== null && !$.done; Y++, $ = m.next()) {
        M.index > Y ? (J = M, M = null) : J = M.sibling;
        var ha = p(d, M, $.value, h);
        if (ha === null) {
          M === null && (M = J);
          break;
        }
        t && M && ha.alternate === null && e(d, M), f = u(ha, f, Y), F === null ? U = ha : F.sibling = ha, F = ha, M = J;
      }
      if ($.done)
        return a(d, M), W && He(d, Y), U;
      if (M === null) {
        for (; !$.done; Y++, $ = m.next())
          $ = _(d, $.value, h), $ !== null && (f = u($, f, Y), F === null ? U = $ : F.sibling = $, F = $);
        return W && He(d, Y), U;
      }
      for (M = l(M); !$.done; Y++, $ = m.next())
        $ = g(M, d, Y, $.value, h), $ !== null && (t && $.alternate !== null && M.delete($.key === null ? Y : $.key), f = u($, f, Y), F === null ? U = $ : F.sibling = $, F = $);
      return t && M.forEach(function(k0) {
        return e(d, k0);
      }), W && He(d, Y), U;
    }
    function ut(d, f, m, h) {
      if (typeof m == "object" && m !== null && m.type === yt && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case pt:
            t: {
              for (var U = m.key; f !== null; ) {
                if (f.key === U) {
                  if (U = m.type, U === yt) {
                    if (f.tag === 7) {
                      a(
                        d,
                        f.sibling
                      ), h = n(
                        f,
                        m.props.children
                      ), h.return = d, d = h;
                      break t;
                    }
                  } else if (f.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Zt && Ra(U) === f.type) {
                    a(
                      d,
                      f.sibling
                    ), h = n(f, m.props), Jl(h, m), h.return = d, d = h;
                    break t;
                  }
                  a(d, f);
                  break;
                } else e(d, f);
                f = f.sibling;
              }
              m.type === yt ? (h = Da(
                m.props.children,
                d.mode,
                h,
                m.key
              ), h.return = d, d = h) : (h = Zn(
                m.type,
                m.key,
                m.props,
                null,
                d.mode,
                h
              ), Jl(h, m), h.return = d, d = h);
            }
            return i(d);
          case qt:
            t: {
              for (U = m.key; f !== null; ) {
                if (f.key === U)
                  if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                    a(
                      d,
                      f.sibling
                    ), h = n(f, m.children || []), h.return = d, d = h;
                    break t;
                  } else {
                    a(d, f);
                    break;
                  }
                else e(d, f);
                f = f.sibling;
              }
              h = Ci(m, d.mode, h), h.return = d, d = h;
            }
            return i(d);
          case Zt:
            return m = Ra(m), ut(
              d,
              f,
              m,
              h
            );
        }
        if (he(m))
          return T(
            d,
            f,
            m,
            h
          );
        if (Lt(m)) {
          if (U = Lt(m), typeof U != "function") throw Error(b(150));
          return m = U.call(m), x(
            d,
            f,
            m,
            h
          );
        }
        if (typeof m.then == "function")
          return ut(
            d,
            f,
            kn(m),
            h
          );
        if (m.$$typeof === Bt)
          return ut(
            d,
            f,
            Kn(d, m),
            h
          );
        Fn(d, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, f !== null && f.tag === 6 ? (a(d, f.sibling), h = n(f, m), h.return = d, d = h) : (a(d, f), h = Ai(m, d.mode, h), h.return = d, d = h), i(d)) : a(d, f);
    }
    return function(d, f, m, h) {
      try {
        Kl = 0;
        var U = ut(
          d,
          f,
          m,
          h
        );
        return fl = null, U;
      } catch (M) {
        if (M === ol || M === wn) throw M;
        var F = ee(29, M, null, d.mode);
        return F.lanes = h, F.return = d, F;
      } finally {
      }
    };
  }
  var Ha = Of(!0), Uf = Of(!1), aa = !1;
  function Hi(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Bi(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function la(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function na(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (I & 2) !== 0) {
      var n = l.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), l.pending = e, e = Qn(t), bf(t, null, a), e;
    }
    return Xn(t, l, e, a), Qn(t);
  }
  function wl(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, So(t, a);
    }
  }
  function ji(t, e) {
    var a = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null, u = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, a = a.next;
        } while (a !== null);
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
  }
  var Yi = !1;
  function Wl() {
    if (Yi) {
      var t = cl;
      if (t !== null) throw t;
    }
  }
  function kl(t, e, a, l) {
    Yi = !1;
    var n = t.updateQueue;
    aa = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var o = c, r = o.next;
      o.next = null, i === null ? u = r : i.next = r, i = o;
      var v = t.alternate;
      v !== null && (v = v.updateQueue, c = v.lastBaseUpdate, c !== i && (c === null ? v.firstBaseUpdate = r : c.next = r, v.lastBaseUpdate = o));
    }
    if (u !== null) {
      var _ = n.baseState;
      i = 0, v = r = o = null, c = u;
      do {
        var p = c.lane & -536870913, g = p !== c.lane;
        if (g ? (K & p) === p : (l & p) === p) {
          p !== 0 && p === il && (Yi = !0), v !== null && (v = v.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var T = t, x = c;
            p = e;
            var ut = a;
            switch (x.tag) {
              case 1:
                if (T = x.payload, typeof T == "function") {
                  _ = T.call(ut, _, p);
                  break t;
                }
                _ = T;
                break t;
              case 3:
                T.flags = T.flags & -65537 | 128;
              case 0:
                if (T = x.payload, p = typeof T == "function" ? T.call(ut, _, p) : T, p == null) break t;
                _ = q({}, _, p);
                break t;
              case 2:
                aa = !0;
            }
          }
          p = c.callback, p !== null && (t.flags |= 64, g && (t.flags |= 8192), g = n.callbacks, g === null ? n.callbacks = [p] : g.push(p));
        } else
          g = {
            lane: p,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, v === null ? (r = v = g, o = _) : v = v.next = g, i |= p;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          g = c, c = g.next, g.next = null, n.lastBaseUpdate = g, n.shared.pending = null;
        }
      } while (!0);
      v === null && (o = _), n.baseState = o, n.firstBaseUpdate = r, n.lastBaseUpdate = v, u === null && (n.shared.lanes = 0), fa |= i, t.lanes = i, t.memoizedState = _;
    }
  }
  function xf(t, e) {
    if (typeof t != "function")
      throw Error(b(191, t));
    t.call(e);
  }
  function Rf(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        xf(a[t], e);
  }
  var sl = s(null), $n = s(0);
  function Nf(t, e) {
    t = Je, z($n, t), z(sl, e), Je = t | e.baseLanes;
  }
  function Gi() {
    z($n, Je), z(sl, sl.current);
  }
  function Xi() {
    Je = $n.current, S(sl), S($n);
  }
  var ae = s(null), ge = null;
  function ua(t) {
    var e = t.alternate;
    z(St, St.current & 1), z(ae, t), ge === null && (e === null || sl.current !== null || e.memoizedState !== null) && (ge = t);
  }
  function Qi(t) {
    z(St, St.current), z(ae, t), ge === null && (ge = t);
  }
  function Hf(t) {
    t.tag === 22 ? (z(St, St.current), z(ae, t), ge === null && (ge = t)) : ia();
  }
  function ia() {
    z(St, St.current), z(ae, ae.current);
  }
  function le(t) {
    S(ae), ge === t && (ge = null), S(St);
  }
  var St = s(0);
  function In(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || wc(a) || Wc(a)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Ye = 0, j = null, lt = null, Et = null, Pn = !1, dl = !1, Ba = !1, tu = 0, Fl = 0, ml = null, Gr = 0;
  function gt() {
    throw Error(b(321));
  }
  function Zi(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!te(t[a], e[a])) return !1;
    return !0;
  }
  function Li(t, e, a, l, n, u) {
    return Ye = u, j = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, y.H = t === null || t.memoizedState === null ? ys : nc, Ba = !1, u = a(l, n), Ba = !1, dl && (u = jf(
      e,
      a,
      l,
      n
    )), Bf(t), u;
  }
  function Bf(t) {
    y.H = Pl;
    var e = lt !== null && lt.next !== null;
    if (Ye = 0, Et = lt = j = null, Pn = !1, Fl = 0, ml = null, e) throw Error(b(300));
    t === null || zt || (t = t.dependencies, t !== null && Vn(t) && (zt = !0));
  }
  function jf(t, e, a, l) {
    j = t;
    var n = 0;
    do {
      if (dl && (ml = null), Fl = 0, dl = !1, 25 <= n) throw Error(b(301));
      if (n += 1, Et = lt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      y.H = hs, u = e(a, l);
    } while (dl);
    return u;
  }
  function Xr() {
    var t = y.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? $l(e) : e, t = t.useState()[0], (lt !== null ? lt.memoizedState : null) !== t && (j.flags |= 1024), e;
  }
  function Vi() {
    var t = tu !== 0;
    return tu = 0, t;
  }
  function Ki(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function Ji(t) {
    if (Pn) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Pn = !1;
    }
    Ye = 0, Et = lt = j = null, dl = !1, Fl = tu = 0, ml = null;
  }
  function Gt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Et === null ? j.memoizedState = Et = t : Et = Et.next = t, Et;
  }
  function At() {
    if (lt === null) {
      var t = j.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = lt.next;
    var e = Et === null ? j.memoizedState : Et.next;
    if (e !== null)
      Et = e, lt = t;
    else {
      if (t === null)
        throw j.alternate === null ? Error(b(467)) : Error(b(310));
      lt = t, t = {
        memoizedState: lt.memoizedState,
        baseState: lt.baseState,
        baseQueue: lt.baseQueue,
        queue: lt.queue,
        next: null
      }, Et === null ? j.memoizedState = Et = t : Et = Et.next = t;
    }
    return Et;
  }
  function eu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $l(t) {
    var e = Fl;
    return Fl += 1, ml === null && (ml = []), t = qf(ml, t, e), e = j, (Et === null ? e.memoizedState : Et.next) === null && (e = e.alternate, y.H = e === null || e.memoizedState === null ? ys : nc), t;
  }
  function au(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return $l(t);
      if (t.$$typeof === Bt) return Rt(t);
    }
    throw Error(b(438, String(t)));
  }
  function wi(t) {
    var e = null, a = j.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var l = j.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = eu(), j.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++)
        a[l] = Qa;
    return e.index++, a;
  }
  function Ge(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function lu(t) {
    var e = At();
    return Wi(e, lt, t);
  }
  function Wi(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(b(311));
    l.lastRenderedReducer = a;
    var n = t.baseQueue, u = l.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      e.baseQueue = n = u, l.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var c = i = null, o = null, r = e, v = !1;
      do {
        var _ = r.lane & -536870913;
        if (_ !== r.lane ? (K & _) === _ : (Ye & _) === _) {
          var p = r.revertLane;
          if (p === 0)
            o !== null && (o = o.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: r.action,
              hasEagerState: r.hasEagerState,
              eagerState: r.eagerState,
              next: null
            }), _ === il && (v = !0);
          else if ((Ye & p) === p) {
            r = r.next, p === il && (v = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: r.revertLane,
              gesture: null,
              action: r.action,
              hasEagerState: r.hasEagerState,
              eagerState: r.eagerState,
              next: null
            }, o === null ? (c = o = _, i = u) : o = o.next = _, j.lanes |= p, fa |= p;
          _ = r.action, Ba && a(u, _), u = r.hasEagerState ? r.eagerState : a(u, _);
        } else
          p = {
            lane: _,
            revertLane: r.revertLane,
            gesture: r.gesture,
            action: r.action,
            hasEagerState: r.hasEagerState,
            eagerState: r.eagerState,
            next: null
          }, o === null ? (c = o = p, i = u) : o = o.next = p, j.lanes |= _, fa |= _;
        r = r.next;
      } while (r !== null && r !== e);
      if (o === null ? i = u : o.next = c, !te(u, t.memoizedState) && (zt = !0, v && (a = cl, a !== null)))
        throw a;
      t.memoizedState = u, t.baseState = i, t.baseQueue = o, l.lastRenderedState = u;
    }
    return n === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function ki(t) {
    var e = At(), a = e.queue;
    if (a === null) throw Error(b(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch, n = a.pending, u = e.memoizedState;
    if (n !== null) {
      a.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      te(u, e.memoizedState) || (zt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), a.lastRenderedState = u;
    }
    return [u, l];
  }
  function Yf(t, e, a) {
    var l = j, n = At(), u = W;
    if (u) {
      if (a === void 0) throw Error(b(407));
      a = a();
    } else a = e();
    var i = !te(
      (lt || n).memoizedState,
      a
    );
    if (i && (n.memoizedState = a, zt = !0), n = n.queue, Ii(Qf.bind(null, l, n, t), [
      t
    ]), n.getSnapshot !== e || i || Et !== null && Et.memoizedState.tag & 1) {
      if (l.flags |= 2048, rl(
        9,
        { destroy: void 0 },
        Xf.bind(
          null,
          l,
          n,
          a,
          e
        ),
        null
      ), ft === null) throw Error(b(349));
      u || (Ye & 127) !== 0 || Gf(l, e, a);
    }
    return a;
  }
  function Gf(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = j.updateQueue, e === null ? (e = eu(), j.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function Xf(t, e, a, l) {
    e.value = a, e.getSnapshot = l, Zf(e) && Lf(t);
  }
  function Qf(t, e, a) {
    return a(function() {
      Zf(e) && Lf(t);
    });
  }
  function Zf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !te(t, a);
    } catch {
      return !0;
    }
  }
  function Lf(t) {
    var e = qa(t, 2);
    e !== null && Ft(e, t, 2);
  }
  function Fi(t) {
    var e = Gt();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), Ba) {
        ke(!0);
        try {
          a();
        } finally {
          ke(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ge,
      lastRenderedState: t
    }, e;
  }
  function Vf(t, e, a, l) {
    return t.baseState = a, Wi(
      t,
      lt,
      typeof l == "function" ? l : Ge
    );
  }
  function Qr(t, e, a, l, n) {
    if (iu(t)) throw Error(b(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      y.T !== null ? a(!0) : u.isTransition = !1, l(u), a = e.pending, a === null ? (u.next = e.pending = u, Kf(e, u)) : (u.next = a.next, e.pending = a.next = u);
    }
  }
  function Kf(t, e) {
    var a = e.action, l = e.payload, n = t.state;
    if (e.isTransition) {
      var u = y.T, i = {};
      y.T = i;
      try {
        var c = a(n, l), o = y.S;
        o !== null && o(i, c), Jf(t, e, c);
      } catch (r) {
        $i(t, e, r);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), y.T = u;
      }
    } else
      try {
        u = a(n, l), Jf(t, e, u);
      } catch (r) {
        $i(t, e, r);
      }
  }
  function Jf(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        wf(t, e, l);
      },
      function(l) {
        return $i(t, e, l);
      }
    ) : wf(t, e, a);
  }
  function wf(t, e, a) {
    e.status = "fulfilled", e.value = a, Wf(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Kf(t, a)));
  }
  function $i(t, e, a) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = a, Wf(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function Wf(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function kf(t, e) {
    return e;
  }
  function Ff(t, e) {
    if (W) {
      var a = ft.formState;
      if (a !== null) {
        t: {
          var l = j;
          if (W) {
            if (dt) {
              e: {
                for (var n = dt, u = pe; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = ve(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                dt = ve(
                  n.nextSibling
                ), l = n.data === "F!";
                break t;
              }
            }
            ta(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return a = Gt(), a.memoizedState = a.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kf,
      lastRenderedState: e
    }, a.queue = l, a = ps.bind(
      null,
      j,
      l
    ), l.dispatch = a, l = Fi(!1), u = lc.bind(
      null,
      j,
      !1,
      l.queue
    ), l = Gt(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = n, a = Qr.bind(
      null,
      j,
      n,
      u,
      a
    ), n.dispatch = a, l.memoizedState = t, [e, a, !1];
  }
  function $f(t) {
    var e = At();
    return If(e, lt, t);
  }
  function If(t, e, a) {
    if (e = Wi(
      t,
      e,
      kf
    )[0], t = lu(Ge)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = $l(e);
      } catch (i) {
        throw i === ol ? wn : i;
      }
    else l = e;
    e = At();
    var n = e.queue, u = n.dispatch;
    return a !== e.memoizedState && (j.flags |= 2048, rl(
      9,
      { destroy: void 0 },
      Zr.bind(null, n, a),
      null
    )), [l, u, t];
  }
  function Zr(t, e) {
    t.action = e;
  }
  function Pf(t) {
    var e = At(), a = lt;
    if (a !== null)
      return If(e, a, t);
    At(), e = e.memoizedState, a = At();
    var l = a.queue.dispatch;
    return a.memoizedState = t, [e, l, !1];
  }
  function rl(t, e, a, l) {
    return t = { tag: t, create: a, deps: l, inst: e, next: null }, e = j.updateQueue, e === null && (e = eu(), j.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, e.lastEffect = t), t;
  }
  function ts() {
    return At().memoizedState;
  }
  function nu(t, e, a, l) {
    var n = Gt();
    j.flags |= t, n.memoizedState = rl(
      1 | e,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function uu(t, e, a, l) {
    var n = At();
    l = l === void 0 ? null : l;
    var u = n.memoizedState.inst;
    lt !== null && l !== null && Zi(l, lt.memoizedState.deps) ? n.memoizedState = rl(e, u, a, l) : (j.flags |= t, n.memoizedState = rl(
      1 | e,
      u,
      a,
      l
    ));
  }
  function es(t, e) {
    nu(8390656, 8, t, e);
  }
  function Ii(t, e) {
    uu(2048, 8, t, e);
  }
  function Lr(t) {
    j.flags |= 4;
    var e = j.updateQueue;
    if (e === null)
      e = eu(), j.updateQueue = e, e.events = [t];
    else {
      var a = e.events;
      a === null ? e.events = [t] : a.push(t);
    }
  }
  function as(t) {
    var e = At().memoizedState;
    return Lr({ ref: e, nextImpl: t }), function() {
      if ((I & 2) !== 0) throw Error(b(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function ls(t, e) {
    return uu(4, 2, t, e);
  }
  function ns(t, e) {
    return uu(4, 4, t, e);
  }
  function us(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function() {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function is(t, e, a) {
    a = a != null ? a.concat([t]) : null, uu(4, 4, us.bind(null, e, t), a);
  }
  function Pi() {
  }
  function cs(t, e) {
    var a = At();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && Zi(e, l[1]) ? l[0] : (a.memoizedState = [t, e], t);
  }
  function os(t, e) {
    var a = At();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && Zi(e, l[1]))
      return l[0];
    if (l = t(), Ba) {
      ke(!0);
      try {
        t();
      } finally {
        ke(!1);
      }
    }
    return a.memoizedState = [l, e], l;
  }
  function tc(t, e, a) {
    return a === void 0 || (Ye & 1073741824) !== 0 && (K & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = fd(), j.lanes |= t, fa |= t, a);
  }
  function fs(t, e, a, l) {
    return te(a, e) ? a : sl.current !== null ? (t = tc(t, a, l), te(t, e) || (zt = !0), t) : (Ye & 42) === 0 || (Ye & 1073741824) !== 0 && (K & 261930) === 0 ? (zt = !0, t.memoizedState = a) : (t = fd(), j.lanes |= t, fa |= t, e);
  }
  function ss(t, e, a, l, n) {
    var u = E.p;
    E.p = u !== 0 && 8 > u ? u : 8;
    var i = y.T, c = {};
    y.T = c, lc(t, !1, e, a);
    try {
      var o = n(), r = y.S;
      if (r !== null && r(c, o), o !== null && typeof o == "object" && typeof o.then == "function") {
        var v = Yr(
          o,
          l
        );
        Il(
          t,
          e,
          v,
          ie(t)
        );
      } else
        Il(
          t,
          e,
          l,
          ie(t)
        );
    } catch (_) {
      Il(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: _ },
        ie()
      );
    } finally {
      E.p = u, i !== null && c.types !== null && (i.types = c.types), y.T = i;
    }
  }
  function Vr() {
  }
  function ec(t, e, a, l) {
    if (t.tag !== 5) throw Error(b(476));
    var n = ds(t).queue;
    ss(
      t,
      n,
      e,
      N,
      a === null ? Vr : function() {
        return ms(t), a(l);
      }
    );
  }
  function ds(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: N,
      baseState: N,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ge,
        lastRenderedState: N
      },
      next: null
    };
    var a = {};
    return e.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ge,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function ms(t) {
    var e = ds(t);
    e.next === null && (e = t.alternate.memoizedState), Il(
      t,
      e.next.queue,
      {},
      ie()
    );
  }
  function ac() {
    return Rt(gn);
  }
  function rs() {
    return At().memoizedState;
  }
  function bs() {
    return At().memoizedState;
  }
  function Kr(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = ie();
          t = la(a);
          var l = na(e, t, a);
          l !== null && (Ft(l, e, a), wl(l, e, a)), e = { cache: Ui() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function Jr(t, e, a) {
    var l = ie();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, iu(t) ? gs(e, a) : (a = _i(t, e, a, l), a !== null && (Ft(a, t, l), vs(a, e, l)));
  }
  function ps(t, e, a) {
    var l = ie();
    Il(t, e, a, l);
  }
  function Il(t, e, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (iu(t)) gs(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var i = e.lastRenderedState, c = u(i, a);
          if (n.hasEagerState = !0, n.eagerState = c, te(c, i))
            return Xn(t, e, n, 0), ft === null && Gn(), !1;
        } catch {
        } finally {
        }
      if (a = _i(t, e, n, l), a !== null)
        return Ft(a, t, l), vs(a, e, l), !0;
    }
    return !1;
  }
  function lc(t, e, a, l) {
    if (l = {
      lane: 2,
      revertLane: Hc(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, iu(t)) {
      if (e) throw Error(b(479));
    } else
      e = _i(
        t,
        a,
        l,
        2
      ), e !== null && Ft(e, t, 2);
  }
  function iu(t) {
    var e = t.alternate;
    return t === j || e !== null && e === j;
  }
  function gs(t, e) {
    dl = Pn = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function vs(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, So(t, a);
    }
  }
  var Pl = {
    readContext: Rt,
    use: au,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useLayoutEffect: gt,
    useInsertionEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useSyncExternalStore: gt,
    useId: gt,
    useHostTransitionStatus: gt,
    useFormState: gt,
    useActionState: gt,
    useOptimistic: gt,
    useMemoCache: gt,
    useCacheRefresh: gt
  };
  Pl.useEffectEvent = gt;
  var ys = {
    readContext: Rt,
    use: au,
    useCallback: function(t, e) {
      return Gt().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Rt,
    useEffect: es,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, nu(
        4194308,
        4,
        us.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return nu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      nu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = Gt();
      e = e === void 0 ? null : e;
      var l = t();
      if (Ba) {
        ke(!0);
        try {
          t();
        } finally {
          ke(!1);
        }
      }
      return a.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, a) {
      var l = Gt();
      if (a !== void 0) {
        var n = a(e);
        if (Ba) {
          ke(!0);
          try {
            a(e);
          } finally {
            ke(!1);
          }
        }
      } else n = e;
      return l.memoizedState = l.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, l.queue = t, t = t.dispatch = Jr.bind(
        null,
        j,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = Gt();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Fi(t);
      var e = t.queue, a = ps.bind(null, j, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: Pi,
    useDeferredValue: function(t, e) {
      var a = Gt();
      return tc(a, t, e);
    },
    useTransition: function() {
      var t = Fi(!1);
      return t = ss.bind(
        null,
        j,
        t.queue,
        !0,
        !1
      ), Gt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var l = j, n = Gt();
      if (W) {
        if (a === void 0)
          throw Error(b(407));
        a = a();
      } else {
        if (a = e(), ft === null)
          throw Error(b(349));
        (K & 127) !== 0 || Gf(l, e, a);
      }
      n.memoizedState = a;
      var u = { value: a, getSnapshot: e };
      return n.queue = u, es(Qf.bind(null, l, u, t), [
        t
      ]), l.flags |= 2048, rl(
        9,
        { destroy: void 0 },
        Xf.bind(
          null,
          l,
          u,
          a,
          e
        ),
        null
      ), a;
    },
    useId: function() {
      var t = Gt(), e = ft.identifierPrefix;
      if (W) {
        var a = qe, l = Te;
        a = (l & ~(1 << 32 - Pt(l) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = tu++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = Gr++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: ac,
    useFormState: Ff,
    useActionState: Ff,
    useOptimistic: function(t) {
      var e = Gt();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = lc.bind(
        null,
        j,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: wi,
    useCacheRefresh: function() {
      return Gt().memoizedState = Kr.bind(
        null,
        j
      );
    },
    useEffectEvent: function(t) {
      var e = Gt(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((I & 2) !== 0)
          throw Error(b(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, nc = {
    readContext: Rt,
    use: au,
    useCallback: cs,
    useContext: Rt,
    useEffect: Ii,
    useImperativeHandle: is,
    useInsertionEffect: ls,
    useLayoutEffect: ns,
    useMemo: os,
    useReducer: lu,
    useRef: ts,
    useState: function() {
      return lu(Ge);
    },
    useDebugValue: Pi,
    useDeferredValue: function(t, e) {
      var a = At();
      return fs(
        a,
        lt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = lu(Ge)[0], e = At().memoizedState;
      return [
        typeof t == "boolean" ? t : $l(t),
        e
      ];
    },
    useSyncExternalStore: Yf,
    useId: rs,
    useHostTransitionStatus: ac,
    useFormState: $f,
    useActionState: $f,
    useOptimistic: function(t, e) {
      var a = At();
      return Vf(a, lt, t, e);
    },
    useMemoCache: wi,
    useCacheRefresh: bs
  };
  nc.useEffectEvent = as;
  var hs = {
    readContext: Rt,
    use: au,
    useCallback: cs,
    useContext: Rt,
    useEffect: Ii,
    useImperativeHandle: is,
    useInsertionEffect: ls,
    useLayoutEffect: ns,
    useMemo: os,
    useReducer: ki,
    useRef: ts,
    useState: function() {
      return ki(Ge);
    },
    useDebugValue: Pi,
    useDeferredValue: function(t, e) {
      var a = At();
      return lt === null ? tc(a, t, e) : fs(
        a,
        lt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ki(Ge)[0], e = At().memoizedState;
      return [
        typeof t == "boolean" ? t : $l(t),
        e
      ];
    },
    useSyncExternalStore: Yf,
    useId: rs,
    useHostTransitionStatus: ac,
    useFormState: Pf,
    useActionState: Pf,
    useOptimistic: function(t, e) {
      var a = At();
      return lt !== null ? Vf(a, lt, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: wi,
    useCacheRefresh: bs
  };
  hs.useEffectEvent = as;
  function uc(t, e, a, l) {
    e = t.memoizedState, a = a(l, e), a = a == null ? e : q({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var ic = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var l = ie(), n = la(l);
      n.payload = e, a != null && (n.callback = a), e = na(t, n, l), e !== null && (Ft(e, t, l), wl(e, t, l));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var l = ie(), n = la(l);
      n.tag = 1, n.payload = e, a != null && (n.callback = a), e = na(t, n, l), e !== null && (Ft(e, t, l), wl(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = ie(), l = la(a);
      l.tag = 2, e != null && (l.callback = e), e = na(t, l, a), e !== null && (Ft(e, t, a), wl(e, t, a));
    }
  };
  function _s(t, e, a, l, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, u, i) : e.prototype && e.prototype.isPureReactComponent ? !Gl(a, l) || !Gl(n, u) : !0;
  }
  function Ss(t, e, a, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l), e.state !== t && ic.enqueueReplaceState(e, e.state, null);
  }
  function ja(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e)
        l !== "ref" && (a[l] = e[l]);
    }
    if (t = t.defaultProps) {
      a === e && (a = q({}, a));
      for (var n in t)
        a[n] === void 0 && (a[n] = t[n]);
    }
    return a;
  }
  function As(t) {
    Yn(t);
  }
  function Cs(t) {
    console.error(t);
  }
  function Es(t) {
    Yn(t);
  }
  function cu(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function zs(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function cc(t, e, a) {
    return a = la(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      cu(t, e);
    }, a;
  }
  function Ts(t) {
    return t = la(t), t.tag = 3, t;
  }
  function qs(t, e, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = l.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        zs(e, a, l);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      zs(e, a, l), typeof n != "function" && (sa === null ? sa = /* @__PURE__ */ new Set([this]) : sa.add(this));
      var c = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function wr(t, e, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = a.alternate, e !== null && ul(
        e,
        a,
        n,
        !0
      ), a = ae.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return ge === null ? hu() : a.alternate === null && vt === 0 && (vt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Wn ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), xc(t, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === Wn ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), xc(t, l, n)), !1;
        }
        throw Error(b(435, a.tag));
      }
      return xc(t, l, n), hu(), !1;
    }
    if (W)
      return e = ae.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, l !== Ti && (t = Error(b(422), { cause: l }), Zl(me(t, a)))) : (l !== Ti && (e = Error(b(423), {
        cause: l
      }), Zl(
        me(e, a)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, l = me(l, a), n = cc(
        t.stateNode,
        l,
        n
      ), ji(t, n), vt !== 4 && (vt = 2)), !1;
    var u = Error(b(520), { cause: l });
    if (u = me(u, a), on === null ? on = [u] : on.push(u), vt !== 4 && (vt = 2), e === null) return !0;
    l = me(l, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = n & -n, a.lanes |= t, t = cc(a.stateNode, l, t), ji(a, t), !1;
        case 1:
          if (e = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (sa === null || !sa.has(u))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = Ts(n), qs(
              n,
              t,
              a,
              l
            ), ji(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var oc = Error(b(461)), zt = !1;
  function Nt(t, e, a, l) {
    e.child = t === null ? Uf(e, null, a, l) : Ha(
      e,
      t.child,
      a,
      l
    );
  }
  function Ds(t, e, a, l, n) {
    a = a.render;
    var u = e.ref;
    if ("ref" in l) {
      var i = {};
      for (var c in l)
        c !== "ref" && (i[c] = l[c]);
    } else i = l;
    return Ua(e), l = Li(
      t,
      e,
      a,
      i,
      u,
      n
    ), c = Vi(), t !== null && !zt ? (Ki(t, e, n), Xe(t, e, n)) : (W && c && Ei(e), e.flags |= 1, Nt(t, e, l, n), e.child);
  }
  function Ms(t, e, a, l, n) {
    if (t === null) {
      var u = a.type;
      return typeof u == "function" && !Si(u) && u.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = u, Os(
        t,
        e,
        u,
        l,
        n
      )) : (t = Zn(
        a.type,
        null,
        l,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !gc(t, n)) {
      var i = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Gl, a(i, l) && t.ref === e.ref)
        return Xe(t, e, n);
    }
    return e.flags |= 1, t = Ne(u, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Os(t, e, a, l, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Gl(u, l) && t.ref === e.ref)
        if (zt = !1, e.pendingProps = l = u, gc(t, n))
          (t.flags & 131072) !== 0 && (zt = !0);
        else
          return e.lanes = t.lanes, Xe(t, e, n);
    }
    return fc(
      t,
      e,
      a,
      l,
      n
    );
  }
  function Us(t, e, a, l) {
    var n = l.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | a : a, t !== null) {
          for (l = e.child = t.child, n = 0; l !== null; )
            n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~u;
        } else l = 0, e.child = null;
        return xs(
          t,
          e,
          u,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Jn(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? Nf(e, u) : Gi(), Hf(e);
      else
        return l = e.lanes = 536870912, xs(
          t,
          e,
          u !== null ? u.baseLanes | a : a,
          a,
          l
        );
    } else
      u !== null ? (Jn(e, u.cachePool), Nf(e, u), ia(), e.memoizedState = null) : (t !== null && Jn(e, null), Gi(), ia());
    return Nt(t, e, n, a), e.child;
  }
  function tn(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function xs(t, e, a, l, n) {
    var u = Ri();
    return u = u === null ? null : { parent: Ct._currentValue, pool: u }, e.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, t !== null && Jn(e, null), Gi(), Hf(e), t !== null && ul(t, e, l, !0), e.childLanes = n, null;
  }
  function ou(t, e) {
    return e = su(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Rs(t, e, a) {
    return Ha(e, t.child, null, a), t = ou(e, e.pendingProps), t.flags |= 2, le(e), e.memoizedState = null, t;
  }
  function Wr(t, e, a) {
    var l = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (W) {
        if (l.mode === "hidden")
          return t = ou(e, l), e.lanes = 536870912, tn(null, t);
        if (Qi(e), (t = dt) ? (t = Kd(
          t,
          pe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Ie !== null ? { id: Te, overflow: qe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = gf(t), a.return = e, e.child = a, xt = e, dt = null)) : t = null, t === null) throw ta(e);
        return e.lanes = 536870912, null;
      }
      return ou(e, l);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (Qi(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = Rs(
            t,
            e,
            a
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(b(558));
      else if (zt || ul(t, e, a, !1), n = (a & t.childLanes) !== 0, zt || n) {
        if (l = ft, l !== null && (i = Ao(l, a), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, qa(t, i), Ft(l, t, i), oc;
        hu(), e = Rs(
          t,
          e,
          a
        );
      } else
        t = u.treeContext, dt = ve(i.nextSibling), xt = e, W = !0, Pe = null, pe = !1, t !== null && hf(e, t), e = ou(e, l), e.flags |= 4096;
      return e;
    }
    return t = Ne(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function fu(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(b(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function fc(t, e, a, l, n) {
    return Ua(e), a = Li(
      t,
      e,
      a,
      l,
      void 0,
      n
    ), l = Vi(), t !== null && !zt ? (Ki(t, e, n), Xe(t, e, n)) : (W && l && Ei(e), e.flags |= 1, Nt(t, e, a, n), e.child);
  }
  function Ns(t, e, a, l, n, u) {
    return Ua(e), e.updateQueue = null, a = jf(
      e,
      l,
      a,
      n
    ), Bf(t), l = Vi(), t !== null && !zt ? (Ki(t, e, u), Xe(t, e, u)) : (W && l && Ei(e), e.flags |= 1, Nt(t, e, a, u), e.child);
  }
  function Hs(t, e, a, l, n) {
    if (Ua(e), e.stateNode === null) {
      var u = el, i = a.contextType;
      typeof i == "object" && i !== null && (u = Rt(i)), u = new a(l, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = ic, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = l, u.state = e.memoizedState, u.refs = {}, Hi(e), i = a.contextType, u.context = typeof i == "object" && i !== null ? Rt(i) : el, u.state = e.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (uc(
        e,
        a,
        i,
        l
      ), u.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && ic.enqueueReplaceState(u, u.state, null), kl(e, l, u, n), Wl(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      u = e.stateNode;
      var c = e.memoizedProps, o = ja(a, c);
      u.props = o;
      var r = u.context, v = a.contextType;
      i = el, typeof v == "object" && v !== null && (i = Rt(v));
      var _ = a.getDerivedStateFromProps;
      v = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = e.pendingProps !== c, v || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || r !== i) && Ss(
        e,
        u,
        l,
        i
      ), aa = !1;
      var p = e.memoizedState;
      u.state = p, kl(e, l, u, n), Wl(), r = e.memoizedState, c || p !== r || aa ? (typeof _ == "function" && (uc(
        e,
        a,
        _,
        l
      ), r = e.memoizedState), (o = aa || _s(
        e,
        a,
        o,
        l,
        p,
        r,
        i
      )) ? (v || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = r), u.props = l, u.state = r, u.context = i, l = o) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      u = e.stateNode, Bi(t, e), i = e.memoizedProps, v = ja(a, i), u.props = v, _ = e.pendingProps, p = u.context, r = a.contextType, o = el, typeof r == "object" && r !== null && (o = Rt(r)), c = a.getDerivedStateFromProps, (r = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== _ || p !== o) && Ss(
        e,
        u,
        l,
        o
      ), aa = !1, p = e.memoizedState, u.state = p, kl(e, l, u, n), Wl();
      var g = e.memoizedState;
      i !== _ || p !== g || aa || t !== null && t.dependencies !== null && Vn(t.dependencies) ? (typeof c == "function" && (uc(
        e,
        a,
        c,
        l
      ), g = e.memoizedState), (v = aa || _s(
        e,
        a,
        v,
        l,
        p,
        g,
        o
      ) || t !== null && t.dependencies !== null && Vn(t.dependencies)) ? (r || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, g, o), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        g,
        o
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && p === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && p === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = g), u.props = l, u.state = g, u.context = o, l = v) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && p === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && p === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return u = l, fu(t, e), l = (e.flags & 128) !== 0, u || l ? (u = e.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && l ? (e.child = Ha(
      e,
      t.child,
      null,
      n
    ), e.child = Ha(
      e,
      null,
      a,
      n
    )) : Nt(t, e, a, n), e.memoizedState = u.state, t = e.child) : t = Xe(
      t,
      e,
      n
    ), t;
  }
  function Bs(t, e, a, l) {
    return Ma(), e.flags |= 256, Nt(t, e, a, l), e.child;
  }
  var sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(t) {
    return { baseLanes: t, cachePool: zf() };
  }
  function mc(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= ue), t;
  }
  function js(t, e, a) {
    var l = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (St.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (W) {
        if (n ? ua(e) : ia(), (t = dt) ? (t = Kd(
          t,
          pe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Ie !== null ? { id: Te, overflow: qe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = gf(t), a.return = e, e.child = a, xt = e, dt = null)) : t = null, t === null) throw ta(e);
        return Wc(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var c = l.children;
      return l = l.fallback, n ? (ia(), n = e.mode, c = su(
        { mode: "hidden", children: c },
        n
      ), l = Da(
        l,
        n,
        a,
        null
      ), c.return = e, l.return = e, c.sibling = l, e.child = c, l = e.child, l.memoizedState = dc(a), l.childLanes = mc(
        t,
        i,
        a
      ), e.memoizedState = sc, tn(null, l)) : (ua(e), rc(e, c));
    }
    var o = t.memoizedState;
    if (o !== null && (c = o.dehydrated, c !== null)) {
      if (u)
        e.flags & 256 ? (ua(e), e.flags &= -257, e = bc(
          t,
          e,
          a
        )) : e.memoizedState !== null ? (ia(), e.child = t.child, e.flags |= 128, e = null) : (ia(), c = l.fallback, n = e.mode, l = su(
          { mode: "visible", children: l.children },
          n
        ), c = Da(
          c,
          n,
          a,
          null
        ), c.flags |= 2, l.return = e, c.return = e, l.sibling = c, e.child = l, Ha(
          e,
          t.child,
          null,
          a
        ), l = e.child, l.memoizedState = dc(a), l.childLanes = mc(
          t,
          i,
          a
        ), e.memoizedState = sc, e = tn(null, l));
      else if (ua(e), Wc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var r = i.dgst;
        i = r, l = Error(b(419)), l.stack = "", l.digest = i, Zl({ value: l, source: null, stack: null }), e = bc(
          t,
          e,
          a
        );
      } else if (zt || ul(t, e, a, !1), i = (a & t.childLanes) !== 0, zt || i) {
        if (i = ft, i !== null && (l = Ao(i, a), l !== 0 && l !== o.retryLane))
          throw o.retryLane = l, qa(t, l), Ft(i, t, l), oc;
        wc(c) || hu(), e = bc(
          t,
          e,
          a
        );
      } else
        wc(c) ? (e.flags |= 192, e.child = t.child, e = null) : (t = o.treeContext, dt = ve(
          c.nextSibling
        ), xt = e, W = !0, Pe = null, pe = !1, t !== null && hf(e, t), e = rc(
          e,
          l.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (ia(), c = l.fallback, n = e.mode, o = t.child, r = o.sibling, l = Ne(o, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = o.subtreeFlags & 65011712, r !== null ? c = Ne(
      r,
      c
    ) : (c = Da(
      c,
      n,
      a,
      null
    ), c.flags |= 2), c.return = e, l.return = e, l.sibling = c, e.child = l, tn(null, l), l = e.child, c = t.child.memoizedState, c === null ? c = dc(a) : (n = c.cachePool, n !== null ? (o = Ct._currentValue, n = n.parent !== o ? { parent: o, pool: o } : n) : n = zf(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: n
    }), l.memoizedState = c, l.childLanes = mc(
      t,
      i,
      a
    ), e.memoizedState = sc, tn(t.child, l)) : (ua(e), a = t.child, t = a.sibling, a = Ne(a, {
      mode: "visible",
      children: l.children
    }), a.return = e, a.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function rc(t, e) {
    return e = su(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function su(t, e) {
    return t = ee(22, t, null, e), t.lanes = 0, t;
  }
  function bc(t, e, a) {
    return Ha(e, t.child, null, a), t = rc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function Ys(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Mi(t.return, e, a);
  }
  function pc(t, e, a, l, n, u) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = l, i.tail = a, i.tailMode = n, i.treeForkCount = u);
  }
  function Gs(t, e, a) {
    var l = e.pendingProps, n = l.revealOrder, u = l.tail;
    l = l.children;
    var i = St.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, z(St, i), Nt(t, e, l, a), l = W ? Ql : 0, !c && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Ys(t, a, e);
        else if (t.tag === 19)
          Ys(t, a, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (a = e.child, n = null; a !== null; )
          t = a.alternate, t !== null && In(t) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = e.child, e.child = null) : (n = a.sibling, a.sibling = null), pc(
          e,
          !1,
          n,
          a,
          u,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && In(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = a, a = n, n = t;
        }
        pc(
          e,
          !0,
          a,
          null,
          u,
          l
        );
        break;
      case "together":
        pc(
          e,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Xe(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), fa |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (ul(
          t,
          e,
          a,
          !1
        ), (a & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(b(153));
    if (e.child !== null) {
      for (t = e.child, a = Ne(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = Ne(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function gc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Vn(t)));
  }
  function kr(t, e, a) {
    switch (e.tag) {
      case 3:
        Yt(e, e.stateNode.containerInfo), ea(e, Ct, t.memoizedState.cache), Ma();
        break;
      case 27:
      case 5:
        Tl(e);
        break;
      case 4:
        Yt(e, e.stateNode.containerInfo);
        break;
      case 10:
        ea(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Qi(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (ua(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? js(t, e, a) : (ua(e), t = Xe(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        ua(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (l = (a & e.childLanes) !== 0, l || (ul(
          t,
          e,
          a,
          !1
        ), l = (a & e.childLanes) !== 0), n) {
          if (l)
            return Gs(
              t,
              e,
              a
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), z(St, St.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, Us(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        ea(e, Ct, t.memoizedState.cache);
    }
    return Xe(t, e, a);
  }
  function Xs(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        zt = !0;
      else {
        if (!gc(t, a) && (e.flags & 128) === 0)
          return zt = !1, kr(
            t,
            e,
            a
          );
        zt = (t.flags & 131072) !== 0;
      }
    else
      zt = !1, W && (e.flags & 1048576) !== 0 && yf(e, Ql, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = Ra(e.elementType), e.type = t, typeof t == "function")
            Si(t) ? (l = ja(t, l), e.tag = 1, e = Hs(
              null,
              e,
              t,
              l,
              a
            )) : (e.tag = 0, e = fc(
              null,
              e,
              t,
              l,
              a
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === oe) {
                e.tag = 11, e = Ds(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              } else if (n === w) {
                e.tag = 14, e = Ms(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              }
            }
            throw e = Oe(t) || t, Error(b(306, e, ""));
          }
        }
        return e;
      case 0:
        return fc(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return l = e.type, n = ja(
          l,
          e.pendingProps
        ), Hs(
          t,
          e,
          l,
          n,
          a
        );
      case 3:
        t: {
          if (Yt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(b(387));
          l = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, Bi(t, e), kl(e, l, null, a);
          var i = e.memoizedState;
          if (l = i.cache, ea(e, Ct, l), l !== u.cache && Oi(
            e,
            [Ct],
            a,
            !0
          ), Wl(), l = i.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Bs(
                t,
                e,
                l,
                a
              );
              break t;
            } else if (l !== n) {
              n = me(
                Error(b(424)),
                e
              ), Zl(n), e = Bs(
                t,
                e,
                l,
                a
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (dt = ve(t.firstChild), xt = e, W = !0, Pe = null, pe = !0, a = Uf(
                e,
                null,
                l,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ma(), l === n) {
              e = Xe(
                t,
                e,
                a
              );
              break t;
            }
            Nt(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return fu(t, e), t === null ? (a = $d(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : W || (a = e.type, t = e.pendingProps, l = Tu(
          Z.current
        ).createElement(a), l[Ut] = e, l[Vt] = t, Ht(l, a, t), Mt(l), e.stateNode = l) : e.memoizedState = $d(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Tl(e), t === null && W && (l = e.stateNode = Wd(
          e.type,
          e.pendingProps,
          Z.current
        ), xt = e, pe = !0, n = dt, ba(e.type) ? (kc = n, dt = ve(l.firstChild)) : dt = n), Nt(
          t,
          e,
          e.pendingProps.children,
          a
        ), fu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && W && ((n = l = dt) && (l = z0(
          l,
          e.type,
          e.pendingProps,
          pe
        ), l !== null ? (e.stateNode = l, xt = e, dt = ve(l.firstChild), pe = !1, n = !0) : n = !1), n || ta(e)), Tl(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, l = u.children, Vc(n, u) ? l = null : i !== null && Vc(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = Li(
          t,
          e,
          Xr,
          null,
          null,
          a
        ), gn._currentValue = n), fu(t, e), Nt(t, e, l, a), e.child;
      case 6:
        return t === null && W && ((t = a = dt) && (a = T0(
          a,
          e.pendingProps,
          pe
        ), a !== null ? (e.stateNode = a, xt = e, dt = null, t = !0) : t = !1), t || ta(e)), null;
      case 13:
        return js(t, e, a);
      case 4:
        return Yt(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = Ha(
          e,
          null,
          l,
          a
        ) : Nt(t, e, l, a), e.child;
      case 11:
        return Ds(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 7:
        return Nt(
          t,
          e,
          e.pendingProps,
          a
        ), e.child;
      case 8:
        return Nt(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return Nt(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return l = e.pendingProps, ea(e, e.type, l.value), Nt(t, e, l.children, a), e.child;
      case 9:
        return n = e.type._context, l = e.pendingProps.children, Ua(e), n = Rt(n), l = l(n), e.flags |= 1, Nt(t, e, l, a), e.child;
      case 14:
        return Ms(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return Os(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 19:
        return Gs(t, e, a);
      case 31:
        return Wr(t, e, a);
      case 22:
        return Us(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        return Ua(e), l = Rt(Ct), t === null ? (n = Ri(), n === null && (n = ft, u = Ui(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= a), n = u), e.memoizedState = { parent: l, cache: n }, Hi(e), ea(e, Ct, n)) : ((t.lanes & a) !== 0 && (Bi(t, e), kl(e, null, null, a), Wl()), n = t.memoizedState, u = e.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), ea(e, Ct, l)) : (l = u.cache, ea(e, Ct, l), l !== n.cache && Oi(
          e,
          [Ct],
          a,
          !0
        ))), Nt(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(b(156, e.tag));
  }
  function Qe(t) {
    t.flags |= 4;
  }
  function vc(t, e, a, l, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (rd()) t.flags |= 8192;
        else
          throw Na = Wn, Ni;
    } else t.flags &= -16777217;
  }
  function Qs(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !am(e))
      if (rd()) t.flags |= 8192;
      else
        throw Na = Wn, Ni;
  }
  function du(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? ho() : 536870912, t.lanes |= e, vl |= e);
  }
  function en(t, e) {
    if (!W)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = t.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
      }
  }
  function mt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, l = 0;
    if (e)
      for (var n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= l, t.childLanes = a, e;
  }
  function Fr(t, e, a) {
    var l = e.pendingProps;
    switch (zi(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return mt(e), null;
      case 1:
        return mt(e), null;
      case 3:
        return a = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), je(Ct), _t(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (nl(e) ? Qe(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, qi())), mt(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (Qe(e), u !== null ? (mt(e), Qs(e, u)) : (mt(e), vc(
          e,
          n,
          null,
          l,
          a
        ))) : u ? u !== t.memoizedState ? (Qe(e), mt(e), Qs(e, u)) : (mt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && Qe(e), mt(e), vc(
          e,
          n,
          t,
          l,
          a
        )), null;
      case 27:
        if (An(e), a = Z.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && Qe(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(b(166));
            return mt(e), null;
          }
          t = D.current, nl(e) ? _f(e) : (t = Wd(n, l, a), e.stateNode = t, Qe(e));
        }
        return mt(e), null;
      case 5:
        if (An(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && Qe(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(b(166));
            return mt(e), null;
          }
          if (u = D.current, nl(e))
            _f(e);
          else {
            var i = Tu(
              Z.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof l.is == "string" ? i.createElement("select", {
                      is: l.is
                    }) : i.createElement("select"), l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                    break;
                  default:
                    u = typeof l.is == "string" ? i.createElement(n, { is: l.is }) : i.createElement(n);
                }
            }
            u[Ut] = e, u[Vt] = l;
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = u;
            t: switch (Ht(u, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && Qe(e);
          }
        }
        return mt(e), vc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          a
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && Qe(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(b(166));
          if (t = Z.current, nl(e)) {
            if (t = e.stateNode, a = e.memoizedProps, l = null, n = xt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            t[Ut] = e, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || jd(t.nodeValue, a)), t || ta(e, !0);
          } else
            t = Tu(t).createTextNode(
              l
            ), t[Ut] = e, e.stateNode = t;
        }
        return mt(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = nl(e), a !== null) {
            if (t === null) {
              if (!l) throw Error(b(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(b(557));
              t[Ut] = e;
            } else
              Ma(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            mt(e), t = !1;
          } else
            a = qi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return e.flags & 256 ? (le(e), e) : (le(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(b(558));
        }
        return mt(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = nl(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(b(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(b(317));
              n[Ut] = e;
            } else
              Ma(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            mt(e), n = !1;
          } else
            n = qi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (le(e), e) : (le(e), null);
        }
        return le(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = e.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== n && (l.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), du(e, e.updateQueue), mt(e), null);
      case 4:
        return _t(), t === null && Gc(e.stateNode.containerInfo), mt(e), null;
      case 10:
        return je(e.type), mt(e), null;
      case 19:
        if (S(St), l = e.memoizedState, l === null) return mt(e), null;
        if (n = (e.flags & 128) !== 0, u = l.rendering, u === null)
          if (n) en(l, !1);
          else {
            if (vt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = In(t), u !== null) {
                  for (e.flags |= 128, en(l, !1), t = u.updateQueue, e.updateQueue = t, du(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    pf(a, t), a = a.sibling;
                  return z(
                    St,
                    St.current & 1 | 2
                  ), W && He(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && $t() > gu && (e.flags |= 128, n = !0, en(l, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = In(u), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, du(e, t), en(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !W)
                return mt(e), null;
            } else
              2 * $t() - l.renderingStartTime > gu && a !== 536870912 && (e.flags |= 128, n = !0, en(l, !1), e.lanes = 4194304);
          l.isBackwards ? (u.sibling = e.child, e.child = u) : (t = l.last, t !== null ? t.sibling = u : e.child = u, l.last = u);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = $t(), t.sibling = null, a = St.current, z(
          St,
          n ? a & 1 | 2 : a & 1
        ), W && He(e, l.treeForkCount), t) : (mt(e), null);
      case 22:
      case 23:
        return le(e), Xi(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (mt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : mt(e), a = e.updateQueue, a !== null && du(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== a && (e.flags |= 2048), t !== null && S(xa), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), je(Ct), mt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(b(156, e.tag));
  }
  function $r(t, e) {
    switch (zi(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return je(Ct), _t(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return An(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (le(e), e.alternate === null)
            throw Error(b(340));
          Ma();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (le(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(b(340));
          Ma();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return S(St), null;
      case 4:
        return _t(), null;
      case 10:
        return je(e.type), null;
      case 22:
      case 23:
        return le(e), Xi(), t !== null && S(xa), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return je(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zs(t, e) {
    switch (zi(e), e.tag) {
      case 3:
        je(Ct), _t();
        break;
      case 26:
      case 27:
      case 5:
        An(e);
        break;
      case 4:
        _t();
        break;
      case 31:
        e.memoizedState !== null && le(e);
        break;
      case 13:
        le(e);
        break;
      case 19:
        S(St);
        break;
      case 10:
        je(e.type);
        break;
      case 22:
      case 23:
        le(e), Xi(), t !== null && S(xa);
        break;
      case 24:
        je(Ct);
    }
  }
  function an(t, e) {
    try {
      var a = e.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var u = a.create, i = a.inst;
            l = u(), i.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (c) {
      et(e, e.return, c);
    }
  }
  function ca(t, e, a) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            var i = l.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = e;
              var o = a, r = c;
              try {
                r();
              } catch (v) {
                et(
                  n,
                  o,
                  v
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (v) {
      et(e, e.return, v);
    }
  }
  function Ls(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        Rf(e, a);
      } catch (l) {
        et(t, t.return, l);
      }
    }
  }
  function Vs(t, e, a) {
    a.props = ja(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      et(t, e, l);
    }
  }
  function ln(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(l) : a.current = l;
      }
    } catch (n) {
      et(t, e, n);
    }
  }
  function De(t, e) {
    var a = t.ref, l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          et(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          et(t, e, n);
        }
      else a.current = null;
  }
  function Ks(t) {
    var e = t.type, a = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      et(t, t.return, n);
    }
  }
  function yc(t, e, a) {
    try {
      var l = t.stateNode;
      h0(l, t.type, a, e), l[Vt] = e;
    } catch (n) {
      et(t, t.return, n);
    }
  }
  function Js(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ba(t.type) || t.tag === 4;
  }
  function hc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Js(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ba(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function _c(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = xe));
    else if (l !== 4 && (l === 27 && ba(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
      for (_c(t, e, a), t = t.sibling; t !== null; )
        _c(t, e, a), t = t.sibling;
  }
  function mu(t, e, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
    else if (l !== 4 && (l === 27 && ba(t.type) && (a = t.stateNode), t = t.child, t !== null))
      for (mu(t, e, a), t = t.sibling; t !== null; )
        mu(t, e, a), t = t.sibling;
  }
  function ws(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var l = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Ht(e, l, a), e[Ut] = t, e[Vt] = a;
    } catch (u) {
      et(t, t.return, u);
    }
  }
  var Ze = !1, Tt = !1, Sc = !1, Ws = typeof WeakSet == "function" ? WeakSet : Set, Ot = null;
  function Ir(t, e) {
    if (t = t.containerInfo, Zc = Ru, t = uf(t), bi(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var n = l.anchorOffset, u = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, u.nodeType;
            } catch {
              a = null;
              break t;
            }
            var i = 0, c = -1, o = -1, r = 0, v = 0, _ = t, p = null;
            e: for (; ; ) {
              for (var g; _ !== a || n !== 0 && _.nodeType !== 3 || (c = i + n), _ !== u || l !== 0 && _.nodeType !== 3 || (o = i + l), _.nodeType === 3 && (i += _.nodeValue.length), (g = _.firstChild) !== null; )
                p = _, _ = g;
              for (; ; ) {
                if (_ === t) break e;
                if (p === a && ++r === n && (c = i), p === u && ++v === l && (o = i), (g = _.nextSibling) !== null) break;
                _ = p, p = _.parentNode;
              }
              _ = g;
            }
            a = c === -1 || o === -1 ? null : { start: c, end: o };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Lc = { focusedElem: t, selectionRange: a }, Ru = !1, Ot = e; Ot !== null; )
      if (e = Ot, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Ot = t;
      else
        for (; Ot !== null; ) {
          switch (e = Ot, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (a = 0; a < t.length; a++)
                  n = t[a], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, a = e, n = u.memoizedProps, u = u.memoizedState, l = a.stateNode;
                try {
                  var T = ja(
                    a.type,
                    n
                  );
                  t = l.getSnapshotBeforeUpdate(
                    T,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = t;
                } catch (x) {
                  et(
                    a,
                    a.return,
                    x
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, a = t.nodeType, a === 9)
                  Jc(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jc(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(b(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Ot = t;
            break;
          }
          Ot = e.return;
        }
  }
  function ks(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ve(t, a), l & 4 && an(5, a);
        break;
      case 1:
        if (Ve(t, a), l & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (i) {
              et(a, a.return, i);
            }
          else {
            var n = ja(
              a.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              et(
                a,
                a.return,
                i
              );
            }
          }
        l & 64 && Ls(a), l & 512 && ln(a, a.return);
        break;
      case 3:
        if (Ve(t, a), l & 64 && (t = a.updateQueue, t !== null)) {
          if (e = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Rf(t, e);
          } catch (i) {
            et(a, a.return, i);
          }
        }
        break;
      case 27:
        e === null && l & 4 && ws(a);
      case 26:
      case 5:
        Ve(t, a), e === null && l & 4 && Ks(a), l & 512 && ln(a, a.return);
        break;
      case 12:
        Ve(t, a);
        break;
      case 31:
        Ve(t, a), l & 4 && Is(t, a);
        break;
      case 13:
        Ve(t, a), l & 4 && Ps(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = c0.bind(
          null,
          a
        ), q0(t, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Ze, !l) {
          e = e !== null && e.memoizedState !== null || Tt, n = Ze;
          var u = Tt;
          Ze = l, (Tt = e) && !u ? Ke(
            t,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ve(t, a), Ze = n, Tt = u;
        }
        break;
      case 30:
        break;
      default:
        Ve(t, a);
    }
  }
  function Fs(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Fs(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && $u(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var rt = null, Jt = !1;
  function Le(t, e, a) {
    for (a = a.child; a !== null; )
      $s(t, e, a), a = a.sibling;
  }
  function $s(t, e, a) {
    if (It && typeof It.onCommitFiberUnmount == "function")
      try {
        It.onCommitFiberUnmount(ql, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Tt || De(a, e), Le(
          t,
          e,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Tt || De(a, e);
        var l = rt, n = Jt;
        ba(a.type) && (rt = a.stateNode, Jt = !1), Le(
          t,
          e,
          a
        ), rn(a.stateNode), rt = l, Jt = n;
        break;
      case 5:
        Tt || De(a, e);
      case 6:
        if (l = rt, n = Jt, rt = null, Le(
          t,
          e,
          a
        ), rt = l, Jt = n, rt !== null)
          if (Jt)
            try {
              (rt.nodeType === 9 ? rt.body : rt.nodeName === "HTML" ? rt.ownerDocument.body : rt).removeChild(a.stateNode);
            } catch (u) {
              et(
                a,
                e,
                u
              );
            }
          else
            try {
              rt.removeChild(a.stateNode);
            } catch (u) {
              et(
                a,
                e,
                u
              );
            }
        break;
      case 18:
        rt !== null && (Jt ? (t = rt, Ld(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), zl(t)) : Ld(rt, a.stateNode));
        break;
      case 4:
        l = rt, n = Jt, rt = a.stateNode.containerInfo, Jt = !0, Le(
          t,
          e,
          a
        ), rt = l, Jt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ca(2, a, e), Tt || ca(4, a, e), Le(
          t,
          e,
          a
        );
        break;
      case 1:
        Tt || (De(a, e), l = a.stateNode, typeof l.componentWillUnmount == "function" && Vs(
          a,
          e,
          l
        )), Le(
          t,
          e,
          a
        );
        break;
      case 21:
        Le(
          t,
          e,
          a
        );
        break;
      case 22:
        Tt = (l = Tt) || a.memoizedState !== null, Le(
          t,
          e,
          a
        ), Tt = l;
        break;
      default:
        Le(
          t,
          e,
          a
        );
    }
  }
  function Is(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        zl(t);
      } catch (a) {
        et(e, e.return, a);
      }
    }
  }
  function Ps(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        zl(t);
      } catch (a) {
        et(e, e.return, a);
      }
  }
  function Pr(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ws()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ws()), e;
      default:
        throw Error(b(435, t.tag));
    }
  }
  function ru(t, e) {
    var a = Pr(t);
    e.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = o0.bind(null, t, l);
        l.then(n, n);
      }
    });
  }
  function wt(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l], u = t, i = e, c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ba(c.type)) {
                rt = c.stateNode, Jt = !1;
                break t;
              }
              break;
            case 5:
              rt = c.stateNode, Jt = !1;
              break t;
            case 3:
            case 4:
              rt = c.stateNode.containerInfo, Jt = !0;
              break t;
          }
          c = c.return;
        }
        if (rt === null) throw Error(b(160));
        $s(u, i, n), rt = null, Jt = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        td(e, t), e = e.sibling;
  }
  var Se = null;
  function td(t, e) {
    var a = t.alternate, l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        wt(e, t), Wt(t), l & 4 && (ca(3, t, t.return), an(3, t), ca(5, t, t.return));
        break;
      case 1:
        wt(e, t), Wt(t), l & 512 && (Tt || a === null || De(a, a.return)), l & 64 && Ze && (t = t.updateQueue, t !== null && (l = t.callbacks, l !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = Se;
        if (wt(e, t), Wt(t), l & 512 && (Tt || a === null || De(a, a.return)), l & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (l = t.memoizedState, a === null)
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  l = t.type, a = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (l) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Ol] || u[Ut] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(l), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), Ht(u, l, a), u[Ut] = t, Mt(u), l = u;
                      break t;
                    case "link":
                      var i = tm(
                        "link",
                        "href",
                        n
                      ).get(l + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            i.splice(c, 1);
                            break e;
                          }
                      }
                      u = n.createElement(l), Ht(u, l, a), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = tm(
                        "meta",
                        "content",
                        n
                      ).get(l + (a.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            i.splice(c, 1);
                            break e;
                          }
                      }
                      u = n.createElement(l), Ht(u, l, a), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(b(468, l));
                  }
                  u[Ut] = t, Mt(u), l = u;
                }
                t.stateNode = l;
              } else
                em(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Pd(
                n,
                l,
                t.memoizedProps
              );
          else
            u !== l ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, l === null ? em(
              n,
              t.type,
              t.stateNode
            ) : Pd(
              n,
              l,
              t.memoizedProps
            )) : l === null && t.stateNode !== null && yc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        wt(e, t), Wt(t), l & 512 && (Tt || a === null || De(a, a.return)), a !== null && l & 4 && yc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (wt(e, t), Wt(t), l & 512 && (Tt || a === null || De(a, a.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            Wa(n, "");
          } catch (T) {
            et(t, t.return, T);
          }
        }
        l & 4 && t.stateNode != null && (n = t.memoizedProps, yc(
          t,
          n,
          a !== null ? a.memoizedProps : n
        )), l & 1024 && (Sc = !0);
        break;
      case 6:
        if (wt(e, t), Wt(t), l & 4) {
          if (t.stateNode === null)
            throw Error(b(162));
          l = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = l;
          } catch (T) {
            et(t, t.return, T);
          }
        }
        break;
      case 3:
        if (Mu = null, n = Se, Se = qu(e.containerInfo), wt(e, t), Se = n, Wt(t), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            zl(e.containerInfo);
          } catch (T) {
            et(t, t.return, T);
          }
        Sc && (Sc = !1, ed(t));
        break;
      case 4:
        l = Se, Se = qu(
          t.stateNode.containerInfo
        ), wt(e, t), Wt(t), Se = l;
        break;
      case 12:
        wt(e, t), Wt(t);
        break;
      case 31:
        wt(e, t), Wt(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ru(t, l)));
        break;
      case 13:
        wt(e, t), Wt(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (pu = $t()), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ru(t, l)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var o = a !== null && a.memoizedState !== null, r = Ze, v = Tt;
        if (Ze = r || n, Tt = v || o, wt(e, t), Tt = v, Ze = r, Wt(t), l & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (a === null || o || Ze || Tt || Ya(t)), a = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                o = a = e;
                try {
                  if (u = o.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = o.stateNode;
                    var _ = o.memoizedProps.style, p = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    c.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (T) {
                  et(o, o.return, T);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                o = e;
                try {
                  o.stateNode.nodeValue = n ? "" : o.memoizedProps;
                } catch (T) {
                  et(o, o.return, T);
                }
              }
            } else if (e.tag === 18) {
              if (a === null) {
                o = e;
                try {
                  var g = o.stateNode;
                  n ? Vd(g, !0) : Vd(o.stateNode, !1);
                } catch (T) {
                  et(o, o.return, T);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              a === e && (a = null), e = e.return;
            }
            a === e && (a = null), e.sibling.return = e.return, e = e.sibling;
          }
        l & 4 && (l = t.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, ru(t, a))));
        break;
      case 19:
        wt(e, t), Wt(t), l & 4 && (l = t.updateQueue, l !== null && (t.updateQueue = null, ru(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        wt(e, t), Wt(t);
    }
  }
  function Wt(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (Js(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(b(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, u = hc(t);
            mu(t, u, n);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Wa(i, ""), a.flags &= -33);
            var c = hc(t);
            mu(t, c, i);
            break;
          case 3:
          case 4:
            var o = a.stateNode.containerInfo, r = hc(t);
            _c(
              t,
              r,
              o
            );
            break;
          default:
            throw Error(b(161));
        }
      } catch (v) {
        et(t, t.return, v);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function ed(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        ed(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Ve(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        ks(t, e.alternate, e), e = e.sibling;
  }
  function Ya(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, e, e.return), Ya(e);
          break;
        case 1:
          De(e, e.return);
          var a = e.stateNode;
          typeof a.componentWillUnmount == "function" && Vs(
            e,
            e.return,
            a
          ), Ya(e);
          break;
        case 27:
          rn(e.stateNode);
        case 26:
        case 5:
          De(e, e.return), Ya(e);
          break;
        case 22:
          e.memoizedState === null && Ya(e);
          break;
        case 30:
          Ya(e);
          break;
        default:
          Ya(e);
      }
      t = t.sibling;
    }
  }
  function Ke(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate, n = t, u = e, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ke(
            n,
            u,
            a
          ), an(4, u);
          break;
        case 1:
          if (Ke(
            n,
            u,
            a
          ), l = u, n = l.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (r) {
              et(l, l.return, r);
            }
          if (l = u, n = l.updateQueue, n !== null) {
            var c = l.stateNode;
            try {
              var o = n.shared.hiddenCallbacks;
              if (o !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++)
                  xf(o[n], c);
            } catch (r) {
              et(l, l.return, r);
            }
          }
          a && i & 64 && Ls(u), ln(u, u.return);
          break;
        case 27:
          ws(u);
        case 26:
        case 5:
          Ke(
            n,
            u,
            a
          ), a && l === null && i & 4 && Ks(u), ln(u, u.return);
          break;
        case 12:
          Ke(
            n,
            u,
            a
          );
          break;
        case 31:
          Ke(
            n,
            u,
            a
          ), a && i & 4 && Is(n, u);
          break;
        case 13:
          Ke(
            n,
            u,
            a
          ), a && i & 4 && Ps(n, u);
          break;
        case 22:
          u.memoizedState === null && Ke(
            n,
            u,
            a
          ), ln(u, u.return);
          break;
        case 30:
          break;
        default:
          Ke(
            n,
            u,
            a
          );
      }
      e = e.sibling;
    }
  }
  function Ac(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Ll(a));
  }
  function Cc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ll(t));
  }
  function Ae(t, e, a, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ad(
          t,
          e,
          a,
          l
        ), e = e.sibling;
  }
  function ad(t, e, a, l) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ae(
          t,
          e,
          a,
          l
        ), n & 2048 && an(9, e);
        break;
      case 1:
        Ae(
          t,
          e,
          a,
          l
        );
        break;
      case 3:
        Ae(
          t,
          e,
          a,
          l
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ll(t)));
        break;
      case 12:
        if (n & 2048) {
          Ae(
            t,
            e,
            a,
            l
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(
              i,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (o) {
            et(e, e.return, o);
          }
        } else
          Ae(
            t,
            e,
            a,
            l
          );
        break;
      case 31:
        Ae(
          t,
          e,
          a,
          l
        );
        break;
      case 13:
        Ae(
          t,
          e,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Ae(
          t,
          e,
          a,
          l
        ) : nn(t, e) : u._visibility & 2 ? Ae(
          t,
          e,
          a,
          l
        ) : (u._visibility |= 2, bl(
          t,
          e,
          a,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Ac(i, e);
        break;
      case 24:
        Ae(
          t,
          e,
          a,
          l
        ), n & 2048 && Cc(e.alternate, e);
        break;
      default:
        Ae(
          t,
          e,
          a,
          l
        );
    }
  }
  function bl(t, e, a, l, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, i = e, c = a, o = l, r = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          bl(
            u,
            i,
            c,
            o,
            n
          ), an(8, i);
          break;
        case 23:
          break;
        case 22:
          var v = i.stateNode;
          i.memoizedState !== null ? v._visibility & 2 ? bl(
            u,
            i,
            c,
            o,
            n
          ) : nn(
            u,
            i
          ) : (v._visibility |= 2, bl(
            u,
            i,
            c,
            o,
            n
          )), n && r & 2048 && Ac(
            i.alternate,
            i
          );
          break;
        case 24:
          bl(
            u,
            i,
            c,
            o,
            n
          ), n && r & 2048 && Cc(i.alternate, i);
          break;
        default:
          bl(
            u,
            i,
            c,
            o,
            n
          );
      }
      e = e.sibling;
    }
  }
  function nn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, l = e, n = l.flags;
        switch (l.tag) {
          case 22:
            nn(a, l), n & 2048 && Ac(
              l.alternate,
              l
            );
            break;
          case 24:
            nn(a, l), n & 2048 && Cc(l.alternate, l);
            break;
          default:
            nn(a, l);
        }
        e = e.sibling;
      }
  }
  var un = 8192;
  function pl(t, e, a) {
    if (t.subtreeFlags & un)
      for (t = t.child; t !== null; )
        ld(
          t,
          e,
          a
        ), t = t.sibling;
  }
  function ld(t, e, a) {
    switch (t.tag) {
      case 26:
        pl(
          t,
          e,
          a
        ), t.flags & un && t.memoizedState !== null && G0(
          a,
          Se,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        pl(
          t,
          e,
          a
        );
        break;
      case 3:
      case 4:
        var l = Se;
        Se = qu(t.stateNode.containerInfo), pl(
          t,
          e,
          a
        ), Se = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = un, un = 16777216, pl(
          t,
          e,
          a
        ), un = l) : pl(
          t,
          e,
          a
        ));
        break;
      default:
        pl(
          t,
          e,
          a
        );
    }
  }
  function nd(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function cn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          Ot = l, id(
            l,
            t
          );
        }
      nd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ud(t), t = t.sibling;
  }
  function ud(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        cn(t), t.flags & 2048 && ca(9, t, t.return);
        break;
      case 3:
        cn(t);
        break;
      case 12:
        cn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, bu(t)) : cn(t);
        break;
      default:
        cn(t);
    }
  }
  function bu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          Ot = l, id(
            l,
            t
          );
        }
      nd(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, e, e.return), bu(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, bu(e));
          break;
        default:
          bu(e);
      }
      t = t.sibling;
    }
  }
  function id(t, e) {
    for (; Ot !== null; ) {
      var a = Ot;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ll(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, Ot = l;
      else
        t: for (a = t; Ot !== null; ) {
          l = Ot;
          var n = l.sibling, u = l.return;
          if (Fs(l), l === a) {
            Ot = null;
            break t;
          }
          if (n !== null) {
            n.return = u, Ot = n;
            break t;
          }
          Ot = u;
        }
    }
  }
  var t0 = {
    getCacheForType: function(t) {
      var e = Rt(Ct), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return Rt(Ct).controller.signal;
    }
  }, e0 = typeof WeakMap == "function" ? WeakMap : Map, I = 0, ft = null, L = null, K = 0, tt = 0, ne = null, oa = !1, gl = !1, Ec = !1, Je = 0, vt = 0, fa = 0, Ga = 0, zc = 0, ue = 0, vl = 0, on = null, kt = null, Tc = !1, pu = 0, cd = 0, gu = 1 / 0, vu = null, sa = null, Dt = 0, da = null, yl = null, we = 0, qc = 0, Dc = null, od = null, fn = 0, Mc = null;
  function ie() {
    return (I & 2) !== 0 && K !== 0 ? K & -K : y.T !== null ? Hc() : Co();
  }
  function fd() {
    if (ue === 0)
      if ((K & 536870912) === 0 || W) {
        var t = zn;
        zn <<= 1, (zn & 3932160) === 0 && (zn = 262144), ue = t;
      } else ue = 536870912;
    return t = ae.current, t !== null && (t.flags |= 32), ue;
  }
  function Ft(t, e, a) {
    (t === ft && (tt === 2 || tt === 9) || t.cancelPendingCommit !== null) && (hl(t, 0), ma(
      t,
      K,
      ue,
      !1
    )), Ml(t, a), ((I & 2) === 0 || t !== ft) && (t === ft && ((I & 2) === 0 && (Ga |= a), vt === 4 && ma(
      t,
      K,
      ue,
      !1
    )), Me(t));
  }
  function sd(t, e, a) {
    if ((I & 6) !== 0) throw Error(b(327));
    var l = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Dl(t, e), n = l ? n0(t, e) : Uc(t, e, !0), u = l;
    do {
      if (n === 0) {
        gl && !l && ma(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, u && !a0(a)) {
          n = Uc(t, e, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            e = i;
            t: {
              var c = t;
              n = on;
              var o = c.current.memoizedState.isDehydrated;
              if (o && (hl(c, i).flags |= 256), i = Uc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Ec && !o) {
                  c.errorRecoveryDisabledLanes |= u, Ga |= u, n = 4;
                  break t;
                }
                u = kt, kt = n, u !== null && (kt === null ? kt = u : kt.push.apply(
                  kt,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          hl(t, 0), ma(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, u = n, u) {
            case 0:
            case 1:
              throw Error(b(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ma(
                l,
                e,
                ue,
                !oa
              );
              break t;
            case 2:
              kt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(b(329));
          }
          if ((e & 62914560) === e && (n = pu + 300 - $t(), 10 < n)) {
            if (ma(
              l,
              e,
              ue,
              !oa
            ), qn(l, 0, !0) !== 0) break t;
            we = e, l.timeoutHandle = Qd(
              dd.bind(
                null,
                l,
                a,
                kt,
                vu,
                Tc,
                e,
                ue,
                Ga,
                vl,
                oa,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          dd(
            l,
            a,
            kt,
            vu,
            Tc,
            e,
            ue,
            Ga,
            vl,
            oa,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Me(t);
  }
  function dd(t, e, a, l, n, u, i, c, o, r, v, _, p, g) {
    if (t.timeoutHandle = -1, _ = e.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) {
      _ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: xe
      }, ld(
        e,
        u,
        _
      );
      var T = (u & 62914560) === u ? pu - $t() : (u & 4194048) === u ? cd - $t() : 0;
      if (T = X0(
        _,
        T
      ), T !== null) {
        we = u, t.cancelPendingCommit = T(
          hd.bind(
            null,
            t,
            e,
            u,
            a,
            l,
            n,
            i,
            c,
            o,
            v,
            _,
            null,
            p,
            g
          )
        ), ma(t, u, i, !r);
        return;
      }
    }
    hd(
      t,
      e,
      u,
      a,
      l,
      n,
      i,
      c,
      o
    );
  }
  function a0(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], u = n.getSnapshot;
          n = n.value;
          try {
            if (!te(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = e.child, e.subtreeFlags & 16384 && a !== null)
        a.return = e, e = a;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function ma(t, e, a, l) {
    e &= ~zc, e &= ~Ga, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - Pt(n), i = 1 << u;
      l[u] = -1, n &= ~i;
    }
    a !== 0 && _o(t, a, e);
  }
  function yu() {
    return (I & 6) === 0 ? (sn(0), !1) : !0;
  }
  function Oc() {
    if (L !== null) {
      if (tt === 0)
        var t = L.return;
      else
        t = L, Be = Oa = null, Ji(t), fl = null, Kl = 0, t = L;
      for (; t !== null; )
        Zs(t.alternate, t), t = t.return;
      L = null;
    }
  }
  function hl(t, e) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, A0(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), we = 0, Oc(), ft = t, L = a = Ne(t.current, null), K = e, tt = 0, ne = null, oa = !1, gl = Dl(t, e), Ec = !1, vl = ue = zc = Ga = fa = vt = 0, kt = on = null, Tc = !1, (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var n = 31 - Pt(l), u = 1 << n;
        e |= t[n], l &= ~u;
      }
    return Je = e, Gn(), a;
  }
  function md(t, e) {
    j = null, y.H = Pl, e === ol || e === wn ? (e = Df(), tt = 3) : e === Ni ? (e = Df(), tt = 4) : tt = e === oc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ne = e, L === null && (vt = 1, cu(
      t,
      me(e, t.current)
    ));
  }
  function rd() {
    var t = ae.current;
    return t === null ? !0 : (K & 4194048) === K ? ge === null : (K & 62914560) === K || (K & 536870912) !== 0 ? t === ge : !1;
  }
  function bd() {
    var t = y.H;
    return y.H = Pl, t === null ? Pl : t;
  }
  function pd() {
    var t = y.A;
    return y.A = t0, t;
  }
  function hu() {
    vt = 4, oa || (K & 4194048) !== K && ae.current !== null || (gl = !0), (fa & 134217727) === 0 && (Ga & 134217727) === 0 || ft === null || ma(
      ft,
      K,
      ue,
      !1
    );
  }
  function Uc(t, e, a) {
    var l = I;
    I |= 2;
    var n = bd(), u = pd();
    (ft !== t || K !== e) && (vu = null, hl(t, e)), e = !1;
    var i = vt;
    t: do
      try {
        if (tt !== 0 && L !== null) {
          var c = L, o = ne;
          switch (tt) {
            case 8:
              Oc(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ae.current === null && (e = !0);
              var r = tt;
              if (tt = 0, ne = null, _l(t, c, o, r), a && gl) {
                i = 0;
                break t;
              }
              break;
            default:
              r = tt, tt = 0, ne = null, _l(t, c, o, r);
          }
        }
        l0(), i = vt;
        break;
      } catch (v) {
        md(t, v);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Be = Oa = null, I = l, y.H = n, y.A = u, L === null && (ft = null, K = 0, Gn()), i;
  }
  function l0() {
    for (; L !== null; ) gd(L);
  }
  function n0(t, e) {
    var a = I;
    I |= 2;
    var l = bd(), n = pd();
    ft !== t || K !== e ? (vu = null, gu = $t() + 500, hl(t, e)) : gl = Dl(
      t,
      e
    );
    t: do
      try {
        if (tt !== 0 && L !== null) {
          e = L;
          var u = ne;
          e: switch (tt) {
            case 1:
              tt = 0, ne = null, _l(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Tf(u)) {
                tt = 0, ne = null, vd(e);
                break;
              }
              e = function() {
                tt !== 2 && tt !== 9 || ft !== t || (tt = 7), Me(t);
              }, u.then(e, e);
              break t;
            case 3:
              tt = 7;
              break t;
            case 4:
              tt = 5;
              break t;
            case 7:
              Tf(u) ? (tt = 0, ne = null, vd(e)) : (tt = 0, ne = null, _l(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (L.tag) {
                case 26:
                  i = L.memoizedState;
                case 5:
                case 27:
                  var c = L;
                  if (i ? am(i) : c.stateNode.complete) {
                    tt = 0, ne = null;
                    var o = c.sibling;
                    if (o !== null) L = o;
                    else {
                      var r = c.return;
                      r !== null ? (L = r, _u(r)) : L = null;
                    }
                    break e;
                  }
              }
              tt = 0, ne = null, _l(t, e, u, 5);
              break;
            case 6:
              tt = 0, ne = null, _l(t, e, u, 6);
              break;
            case 8:
              Oc(), vt = 6;
              break t;
            default:
              throw Error(b(462));
          }
        }
        u0();
        break;
      } catch (v) {
        md(t, v);
      }
    while (!0);
    return Be = Oa = null, y.H = l, y.A = n, I = a, L !== null ? 0 : (ft = null, K = 0, Gn(), vt);
  }
  function u0() {
    for (; L !== null && !Dm(); )
      gd(L);
  }
  function gd(t) {
    var e = Xs(t.alternate, t, Je);
    t.memoizedProps = t.pendingProps, e === null ? _u(t) : L = e;
  }
  function vd(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Ns(
          a,
          e,
          e.pendingProps,
          e.type,
          void 0,
          K
        );
        break;
      case 11:
        e = Ns(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          K
        );
        break;
      case 5:
        Ji(e);
      default:
        Zs(a, e), e = L = pf(e, Je), e = Xs(a, e, Je);
    }
    t.memoizedProps = t.pendingProps, e === null ? _u(t) : L = e;
  }
  function _l(t, e, a, l) {
    Be = Oa = null, Ji(e), fl = null, Kl = 0;
    var n = e.return;
    try {
      if (wr(
        t,
        n,
        e,
        a,
        K
      )) {
        vt = 1, cu(
          t,
          me(a, t.current)
        ), L = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw L = n, u;
      vt = 1, cu(
        t,
        me(a, t.current)
      ), L = null;
      return;
    }
    e.flags & 32768 ? (W || l === 1 ? t = !0 : gl || (K & 536870912) !== 0 ? t = !1 : (oa = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = ae.current, l !== null && l.tag === 13 && (l.flags |= 16384))), yd(e, t)) : _u(e);
  }
  function _u(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        yd(
          e,
          oa
        );
        return;
      }
      t = e.return;
      var a = Fr(
        e.alternate,
        e,
        Je
      );
      if (a !== null) {
        L = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        L = e;
        return;
      }
      L = e = t;
    } while (e !== null);
    vt === 0 && (vt = 5);
  }
  function yd(t, e) {
    do {
      var a = $r(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, L = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        L = t;
        return;
      }
      L = t = a;
    } while (t !== null);
    vt = 6, L = null;
  }
  function hd(t, e, a, l, n, u, i, c, o) {
    t.cancelPendingCommit = null;
    do
      Su();
    while (Dt !== 0);
    if ((I & 6) !== 0) throw Error(b(327));
    if (e !== null) {
      if (e === t.current) throw Error(b(177));
      if (u = e.lanes | e.childLanes, u |= hi, Ym(
        t,
        a,
        u,
        i,
        c,
        o
      ), t === ft && (L = ft = null, K = 0), yl = e, da = t, we = a, qc = u, Dc = n, od = l, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, f0(Cn, function() {
        return Ed(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
        l = y.T, y.T = null, n = E.p, E.p = 2, i = I, I |= 4;
        try {
          Ir(t, e, a);
        } finally {
          I = i, E.p = n, y.T = l;
        }
      }
      Dt = 1, _d(), Sd(), Ad();
    }
  }
  function _d() {
    if (Dt === 1) {
      Dt = 0;
      var t = da, e = yl, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = y.T, y.T = null;
        var l = E.p;
        E.p = 2;
        var n = I;
        I |= 4;
        try {
          td(e, t);
          var u = Lc, i = uf(t.containerInfo), c = u.focusedElem, o = u.selectionRange;
          if (i !== c && c && c.ownerDocument && nf(
            c.ownerDocument.documentElement,
            c
          )) {
            if (o !== null && bi(c)) {
              var r = o.start, v = o.end;
              if (v === void 0 && (v = r), "selectionStart" in c)
                c.selectionStart = r, c.selectionEnd = Math.min(
                  v,
                  c.value.length
                );
              else {
                var _ = c.ownerDocument || document, p = _ && _.defaultView || window;
                if (p.getSelection) {
                  var g = p.getSelection(), T = c.textContent.length, x = Math.min(o.start, T), ut = o.end === void 0 ? x : Math.min(o.end, T);
                  !g.extend && x > ut && (i = ut, ut = x, x = i);
                  var d = lf(
                    c,
                    x
                  ), f = lf(
                    c,
                    ut
                  );
                  if (d && f && (g.rangeCount !== 1 || g.anchorNode !== d.node || g.anchorOffset !== d.offset || g.focusNode !== f.node || g.focusOffset !== f.offset)) {
                    var m = _.createRange();
                    m.setStart(d.node, d.offset), g.removeAllRanges(), x > ut ? (g.addRange(m), g.extend(f.node, f.offset)) : (m.setEnd(f.node, f.offset), g.addRange(m));
                  }
                }
              }
            }
            for (_ = [], g = c; g = g.parentNode; )
              g.nodeType === 1 && _.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < _.length; c++) {
              var h = _[c];
              h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
            }
          }
          Ru = !!Zc, Lc = Zc = null;
        } finally {
          I = n, E.p = l, y.T = a;
        }
      }
      t.current = e, Dt = 2;
    }
  }
  function Sd() {
    if (Dt === 2) {
      Dt = 0;
      var t = da, e = yl, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = y.T, y.T = null;
        var l = E.p;
        E.p = 2;
        var n = I;
        I |= 4;
        try {
          ks(t, e.alternate, e);
        } finally {
          I = n, E.p = l, y.T = a;
        }
      }
      Dt = 3;
    }
  }
  function Ad() {
    if (Dt === 4 || Dt === 3) {
      Dt = 0, Mm();
      var t = da, e = yl, a = we, l = od;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, yl = da = null, Cd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (sa = null), ku(a), e = e.stateNode, It && typeof It.onCommitFiberRoot == "function")
        try {
          It.onCommitFiberRoot(
            ql,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        e = y.T, n = E.p, E.p = 2, y.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < l.length; i++) {
            var c = l[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          y.T = e, E.p = n;
        }
      }
      (we & 3) !== 0 && Su(), Me(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === Mc ? fn++ : (fn = 0, Mc = t) : fn = 0, sn(0);
    }
  }
  function Cd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ll(e)));
  }
  function Su() {
    return _d(), Sd(), Ad(), Ed();
  }
  function Ed() {
    if (Dt !== 5) return !1;
    var t = da, e = qc;
    qc = 0;
    var a = ku(we), l = y.T, n = E.p;
    try {
      E.p = 32 > a ? 32 : a, y.T = null, a = Dc, Dc = null;
      var u = da, i = we;
      if (Dt = 0, yl = da = null, we = 0, (I & 6) !== 0) throw Error(b(331));
      var c = I;
      if (I |= 4, ud(u.current), ad(
        u,
        u.current,
        i,
        a
      ), I = c, sn(0, !1), It && typeof It.onPostCommitFiberRoot == "function")
        try {
          It.onPostCommitFiberRoot(ql, u);
        } catch {
        }
      return !0;
    } finally {
      E.p = n, y.T = l, Cd(t, e);
    }
  }
  function zd(t, e, a) {
    e = me(a, e), e = cc(t.stateNode, e, 2), t = na(t, e, 2), t !== null && (Ml(t, 2), Me(t));
  }
  function et(t, e, a) {
    if (t.tag === 3)
      zd(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          zd(
            e,
            t,
            a
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (sa === null || !sa.has(l))) {
            t = me(a, t), a = Ts(2), l = na(e, a, 2), l !== null && (qs(
              a,
              l,
              e,
              t
            ), Ml(l, 2), Me(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function xc(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new e0();
      var n = /* @__PURE__ */ new Set();
      l.set(e, n);
    } else
      n = l.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(e, n));
    n.has(a) || (Ec = !0, n.add(a), t = i0.bind(null, t, e, a), e.then(t, t));
  }
  function i0(t, e, a) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, ft === t && (K & a) === a && (vt === 4 || vt === 3 && (K & 62914560) === K && 300 > $t() - pu ? (I & 2) === 0 && hl(t, 0) : zc |= a, vl === K && (vl = 0)), Me(t);
  }
  function Td(t, e) {
    e === 0 && (e = ho()), t = qa(t, e), t !== null && (Ml(t, e), Me(t));
  }
  function c0(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), Td(t, a);
  }
  function o0(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode, n = t.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(b(314));
    }
    l !== null && l.delete(e), Td(t, a);
  }
  function f0(t, e) {
    return Ku(t, e);
  }
  var Au = null, Sl = null, Rc = !1, Cu = !1, Nc = !1, ra = 0;
  function Me(t) {
    t !== Sl && t.next === null && (Sl === null ? Au = Sl = t : Sl = Sl.next = t), Cu = !0, Rc || (Rc = !0, d0());
  }
  function sn(t, e) {
    if (!Nc && Cu) {
      Nc = !0;
      do
        for (var a = !1, l = Au; l !== null; ) {
          if (t !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = l.suspendedLanes, c = l.pingedLanes;
              u = (1 << 31 - Pt(42 | t) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, Od(l, u));
          } else
            u = K, u = qn(
              l,
              l === ft ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || Dl(l, u) || (a = !0, Od(l, u));
          l = l.next;
        }
      while (a);
      Nc = !1;
    }
  }
  function s0() {
    qd();
  }
  function qd() {
    Cu = Rc = !1;
    var t = 0;
    ra !== 0 && S0() && (t = ra);
    for (var e = $t(), a = null, l = Au; l !== null; ) {
      var n = l.next, u = Dd(l, e);
      u === 0 ? (l.next = null, a === null ? Au = n : a.next = n, n === null && (Sl = a)) : (a = l, (t !== 0 || (u & 3) !== 0) && (Cu = !0)), l = n;
    }
    Dt !== 0 && Dt !== 5 || sn(t), ra !== 0 && (ra = 0);
  }
  function Dd(t, e) {
    for (var a = t.suspendedLanes, l = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - Pt(u), c = 1 << i, o = n[i];
      o === -1 ? ((c & a) === 0 || (c & l) !== 0) && (n[i] = jm(c, e)) : o <= e && (t.expiredLanes |= c), u &= ~c;
    }
    if (e = ft, a = K, a = qn(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, a === 0 || t === e && (tt === 2 || tt === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && Ju(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || Dl(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (l !== null && Ju(l), ku(a)) {
        case 2:
        case 8:
          a = vo;
          break;
        case 32:
          a = Cn;
          break;
        case 268435456:
          a = yo;
          break;
        default:
          a = Cn;
      }
      return l = Md.bind(null, t), a = Ku(a, l), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return l !== null && l !== null && Ju(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Md(t, e) {
    if (Dt !== 0 && Dt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (Su() && t.callbackNode !== a)
      return null;
    var l = K;
    return l = qn(
      t,
      t === ft ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (sd(t, l, e), Dd(t, $t()), t.callbackNode != null && t.callbackNode === a ? Md.bind(null, t) : null);
  }
  function Od(t, e) {
    if (Su()) return null;
    sd(t, e, !0);
  }
  function d0() {
    C0(function() {
      (I & 6) !== 0 ? Ku(
        go,
        s0
      ) : qd();
    });
  }
  function Hc() {
    if (ra === 0) {
      var t = il;
      t === 0 && (t = En, En <<= 1, (En & 261888) === 0 && (En = 256)), ra = t;
    }
    return ra;
  }
  function Ud(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Un("" + t);
  }
  function xd(t, e) {
    var a = e.ownerDocument.createElement("input");
    return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
  }
  function m0(t, e, a, l, n) {
    if (e === "submit" && a && a.stateNode === n) {
      var u = Ud(
        (n[Vt] || null).action
      ), i = l.submitter;
      i && (e = (e = i[Vt] || null) ? Ud(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var c = new Hn(
        "action",
        "action",
        null,
        l,
        n
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (ra !== 0) {
                  var o = i ? xd(n, i) : new FormData(n);
                  ec(
                    a,
                    {
                      pending: !0,
                      data: o,
                      method: n.method,
                      action: u
                    },
                    null,
                    o
                  );
                }
              } else
                typeof u == "function" && (c.preventDefault(), o = i ? xd(n, i) : new FormData(n), ec(
                  a,
                  {
                    pending: !0,
                    data: o,
                    method: n.method,
                    action: u
                  },
                  u,
                  o
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Bc = 0; Bc < yi.length; Bc++) {
    var jc = yi[Bc], r0 = jc.toLowerCase(), b0 = jc[0].toUpperCase() + jc.slice(1);
    _e(
      r0,
      "on" + b0
    );
  }
  _e(ff, "onAnimationEnd"), _e(sf, "onAnimationIteration"), _e(df, "onAnimationStart"), _e("dblclick", "onDoubleClick"), _e("focusin", "onFocus"), _e("focusout", "onBlur"), _e(Or, "onTransitionRun"), _e(Ur, "onTransitionStart"), _e(xr, "onTransitionCancel"), _e(mf, "onTransitionEnd"), Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]), Ca(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ca(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ca("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ca(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ca(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ca(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var dn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), p0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn)
  );
  function Rd(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a], n = l.event;
      l = l.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = l.length - 1; 0 <= i; i--) {
            var c = l[i], o = c.instance, r = c.currentTarget;
            if (c = c.listener, o !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = r;
            try {
              u(n);
            } catch (v) {
              Yn(v);
            }
            n.currentTarget = null, u = o;
          }
        else
          for (i = 0; i < l.length; i++) {
            if (c = l[i], o = c.instance, r = c.currentTarget, c = c.listener, o !== u && n.isPropagationStopped())
              break t;
            u = c, n.currentTarget = r;
            try {
              u(n);
            } catch (v) {
              Yn(v);
            }
            n.currentTarget = null, u = o;
          }
      }
    }
  }
  function V(t, e) {
    var a = e[Fu];
    a === void 0 && (a = e[Fu] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    a.has(l) || (Nd(e, t, 2, !1), a.add(l));
  }
  function Yc(t, e, a) {
    var l = 0;
    e && (l |= 4), Nd(
      a,
      t,
      l,
      e
    );
  }
  var Eu = "_reactListening" + Math.random().toString(36).slice(2);
  function Gc(t) {
    if (!t[Eu]) {
      t[Eu] = !0, To.forEach(function(a) {
        a !== "selectionchange" && (p0.has(a) || Yc(a, !1, t), Yc(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Eu] || (e[Eu] = !0, Yc("selectionchange", !1, e));
    }
  }
  function Nd(t, e, a, l) {
    switch (fm(e)) {
      case 2:
        var n = L0;
        break;
      case 8:
        n = V0;
        break;
      default:
        n = to;
    }
    a = n.bind(
      null,
      e,
      a,
      t
    ), n = void 0, !ui || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), l ? n !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, a, !0) : n !== void 0 ? t.addEventListener(e, a, {
      passive: n
    }) : t.addEventListener(e, a, !1);
  }
  function Xc(t, e, a, l, n) {
    var u = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var i = l.tag;
        if (i === 3 || i === 4) {
          var c = l.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = l.return; i !== null; ) {
              var o = i.tag;
              if ((o === 3 || o === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = La(c), i === null) return;
            if (o = i.tag, o === 5 || o === 6 || o === 26 || o === 27) {
              l = u = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        l = l.return;
      }
    Yo(function() {
      var r = u, v = li(a), _ = [];
      t: {
        var p = rf.get(t);
        if (p !== void 0) {
          var g = Hn, T = t;
          switch (t) {
            case "keypress":
              if (Rn(a) === 0) break t;
            case "keydown":
            case "keyup":
              g = or;
              break;
            case "focusin":
              T = "focus", g = fi;
              break;
            case "focusout":
              T = "blur", g = fi;
              break;
            case "beforeblur":
            case "afterblur":
              g = fi;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Qo;
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
              g = dr;
              break;
            case ff:
            case sf:
            case df:
              g = Pm;
              break;
            case mf:
              g = rr;
              break;
            case "scroll":
            case "scrollend":
              g = Wm;
              break;
            case "wheel":
              g = pr;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = er;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Lo;
              break;
            case "toggle":
            case "beforetoggle":
              g = vr;
          }
          var x = (e & 4) !== 0, ut = !x && (t === "scroll" || t === "scrollend"), d = x ? p !== null ? p + "Capture" : null : p;
          x = [];
          for (var f = r, m; f !== null; ) {
            var h = f;
            if (m = h.stateNode, h = h.tag, h !== 5 && h !== 26 && h !== 27 || m === null || d === null || (h = xl(f, d), h != null && x.push(
              mn(f, h, m)
            )), ut) break;
            f = f.return;
          }
          0 < x.length && (p = new g(
            p,
            T,
            null,
            a,
            v
          ), _.push({ event: p, listeners: x }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (p = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout", p && a !== ai && (T = a.relatedTarget || a.fromElement) && (La(T) || T[Za]))
            break t;
          if ((g || p) && (p = v.window === v ? v : (p = v.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (T = a.relatedTarget || a.toElement, g = r, T = T ? La(T) : null, T !== null && (ut = ct(T), x = T.tag, T !== ut || x !== 5 && x !== 27 && x !== 6) && (T = null)) : (g = null, T = r), g !== T)) {
            if (x = Qo, h = "onMouseLeave", d = "onMouseEnter", f = "mouse", (t === "pointerout" || t === "pointerover") && (x = Lo, h = "onPointerLeave", d = "onPointerEnter", f = "pointer"), ut = g == null ? p : Ul(g), m = T == null ? p : Ul(T), p = new x(
              h,
              f + "leave",
              g,
              a,
              v
            ), p.target = ut, p.relatedTarget = m, h = null, La(v) === r && (x = new x(
              d,
              f + "enter",
              T,
              a,
              v
            ), x.target = m, x.relatedTarget = ut, h = x), ut = h, g && T)
              e: {
                for (x = g0, d = g, f = T, m = 0, h = d; h; h = x(h))
                  m++;
                h = 0;
                for (var U = f; U; U = x(U))
                  h++;
                for (; 0 < m - h; )
                  d = x(d), m--;
                for (; 0 < h - m; )
                  f = x(f), h--;
                for (; m--; ) {
                  if (d === f || f !== null && d === f.alternate) {
                    x = d;
                    break e;
                  }
                  d = x(d), f = x(f);
                }
                x = null;
              }
            else x = null;
            g !== null && Hd(
              _,
              p,
              g,
              x,
              !1
            ), T !== null && ut !== null && Hd(
              _,
              ut,
              T,
              x,
              !0
            );
          }
        }
        t: {
          if (p = r ? Ul(r) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
            var F = $o;
          else if (ko(p))
            if (Io)
              F = qr;
            else {
              F = zr;
              var M = Er;
            }
          else
            g = p.nodeName, !g || g.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? r && ei(r.elementType) && (F = $o) : F = Tr;
          if (F && (F = F(t, r))) {
            Fo(
              _,
              F,
              a,
              v
            );
            break t;
          }
          M && M(t, p, r), t === "focusout" && r && p.type === "number" && r.memoizedProps.value != null && ti(p, "number", p.value);
        }
        switch (M = r ? Ul(r) : window, t) {
          case "focusin":
            (ko(M) || M.contentEditable === "true") && (Ia = M, pi = r, Xl = null);
            break;
          case "focusout":
            Xl = pi = Ia = null;
            break;
          case "mousedown":
            gi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gi = !1, cf(_, a, v);
            break;
          case "selectionchange":
            if (Mr) break;
          case "keydown":
          case "keyup":
            cf(_, a, v);
        }
        var Y;
        if (di)
          t: {
            switch (t) {
              case "compositionstart":
                var J = "onCompositionStart";
                break t;
              case "compositionend":
                J = "onCompositionEnd";
                break t;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break t;
            }
            J = void 0;
          }
        else
          $a ? wo(t, a) && (J = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (J = "onCompositionStart");
        J && (Vo && a.locale !== "ko" && ($a || J !== "onCompositionStart" ? J === "onCompositionEnd" && $a && (Y = Go()) : ($e = v, ii = "value" in $e ? $e.value : $e.textContent, $a = !0)), M = zu(r, J), 0 < M.length && (J = new Zo(
          J,
          t,
          null,
          a,
          v
        ), _.push({ event: J, listeners: M }), Y ? J.data = Y : (Y = Wo(a), Y !== null && (J.data = Y)))), (Y = hr ? _r(t, a) : Sr(t, a)) && (J = zu(r, "onBeforeInput"), 0 < J.length && (M = new Zo(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          v
        ), _.push({
          event: M,
          listeners: J
        }), M.data = Y)), m0(
          _,
          t,
          r,
          a,
          v
        );
      }
      Rd(_, e);
    });
  }
  function mn(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function zu(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = xl(t, a), n != null && l.unshift(
        mn(t, n, u)
      ), n = xl(t, e), n != null && l.push(
        mn(t, n, u)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function g0(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Hd(t, e, a, l, n) {
    for (var u = e._reactName, i = []; a !== null && a !== l; ) {
      var c = a, o = c.alternate, r = c.stateNode;
      if (c = c.tag, o !== null && o === l) break;
      c !== 5 && c !== 26 && c !== 27 || r === null || (o = r, n ? (r = xl(a, u), r != null && i.unshift(
        mn(a, r, o)
      )) : n || (r = xl(a, u), r != null && i.push(
        mn(a, r, o)
      ))), a = a.return;
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var v0 = /\r\n?/g, y0 = /\u0000|\uFFFD/g;
  function Bd(t) {
    return (typeof t == "string" ? t : "" + t).replace(v0, `
`).replace(y0, "");
  }
  function jd(t, e) {
    return e = Bd(e), Bd(t) === e;
  }
  function nt(t, e, a, l, n, u) {
    switch (a) {
      case "children":
        typeof l == "string" ? e === "body" || e === "textarea" && l === "" || Wa(t, l) : (typeof l == "number" || typeof l == "bigint") && e !== "body" && Wa(t, "" + l);
        break;
      case "className":
        Mn(t, "class", l);
        break;
      case "tabIndex":
        Mn(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Mn(t, a, l);
        break;
      case "style":
        Bo(t, l, u);
        break;
      case "data":
        if (e !== "object") {
          Mn(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = Un("" + l), t.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (a === "formAction" ? (e !== "input" && nt(t, e, "name", n.name, n, null), nt(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), nt(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), nt(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (nt(t, e, "encType", n.encType, n, null), nt(t, e, "method", n.method, n, null), nt(t, e, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = Un("" + l), t.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (t.onclick = xe);
        break;
      case "onScroll":
        l != null && V("scroll", t);
        break;
      case "onScrollEnd":
        l != null && V("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(b(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(b(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        a = Un("" + l), t.setAttributeNS(
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
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "" + l) : t.removeAttribute(a);
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
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
        break;
      case "popover":
        V("beforetoggle", t), V("toggle", t), Dn(t, "popover", l);
        break;
      case "xlinkActuate":
        Ue(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Ue(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Ue(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Ue(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Ue(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Ue(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Ue(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Ue(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Ue(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Dn(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Jm.get(a) || a, Dn(t, a, l));
    }
  }
  function Qc(t, e, a, l, n, u) {
    switch (a) {
      case "style":
        Bo(t, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(b(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(b(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Wa(t, l) : (typeof l == "number" || typeof l == "bigint") && Wa(t, "" + l);
        break;
      case "onScroll":
        l != null && V("scroll", t);
        break;
      case "onScrollEnd":
        l != null && V("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = xe);
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
        if (!qo.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), e = a.slice(2, n ? a.length - 7 : void 0), u = t[Vt] || null, u = u != null ? u[a] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof l == "function")) {
              typeof u != "function" && u !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, l, n);
              break t;
            }
            a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : Dn(t, a, l);
          }
    }
  }
  function Ht(t, e, a) {
    switch (e) {
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
        V("error", t), V("load", t);
        var l = !1, n = !1, u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var i = a[u];
            if (i != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(b(137, e));
                default:
                  nt(t, e, u, i, a, null);
              }
          }
        n && nt(t, e, "srcSet", a.srcSet, a, null), l && nt(t, e, "src", a.src, a, null);
        return;
      case "input":
        V("invalid", t);
        var c = u = i = n = null, o = null, r = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var v = a[l];
            if (v != null)
              switch (l) {
                case "name":
                  n = v;
                  break;
                case "type":
                  i = v;
                  break;
                case "checked":
                  o = v;
                  break;
                case "defaultChecked":
                  r = v;
                  break;
                case "value":
                  u = v;
                  break;
                case "defaultValue":
                  c = v;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (v != null)
                    throw Error(b(137, e));
                  break;
                default:
                  nt(t, e, l, v, a, null);
              }
          }
        xo(
          t,
          u,
          c,
          o,
          r,
          i,
          n,
          !1
        );
        return;
      case "select":
        V("invalid", t), l = i = u = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (c = a[n], c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                l = c;
              default:
                nt(t, e, n, c, a, null);
            }
        e = u, a = i, t.multiple = !!l, e != null ? wa(t, !!l, e, !1) : a != null && wa(t, !!l, a, !0);
        return;
      case "textarea":
        V("invalid", t), u = n = l = null;
        for (i in a)
          if (a.hasOwnProperty(i) && (c = a[i], c != null))
            switch (i) {
              case "value":
                l = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(b(91));
                break;
              default:
                nt(t, e, i, c, a, null);
            }
        No(t, l, n, u);
        return;
      case "option":
        for (o in a)
          if (a.hasOwnProperty(o) && (l = a[o], l != null))
            switch (o) {
              case "selected":
                t.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                nt(t, e, o, l, a, null);
            }
        return;
      case "dialog":
        V("beforetoggle", t), V("toggle", t), V("cancel", t), V("close", t);
        break;
      case "iframe":
      case "object":
        V("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < dn.length; l++)
          V(dn[l], t);
        break;
      case "image":
        V("error", t), V("load", t);
        break;
      case "details":
        V("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        V("error", t), V("load", t);
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
        for (r in a)
          if (a.hasOwnProperty(r) && (l = a[r], l != null))
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(137, e));
              default:
                nt(t, e, r, l, a, null);
            }
        return;
      default:
        if (ei(e)) {
          for (v in a)
            a.hasOwnProperty(v) && (l = a[v], l !== void 0 && Qc(
              t,
              e,
              v,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (l = a[c], l != null && nt(t, e, c, l, a, null));
  }
  function h0(t, e, a, l) {
    switch (e) {
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
        var n = null, u = null, i = null, c = null, o = null, r = null, v = null;
        for (g in a) {
          var _ = a[g];
          if (a.hasOwnProperty(g) && _ != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = _;
              default:
                l.hasOwnProperty(g) || nt(t, e, g, null, l, _);
            }
        }
        for (var p in l) {
          var g = l[p];
          if (_ = a[p], l.hasOwnProperty(p) && (g != null || _ != null))
            switch (p) {
              case "type":
                u = g;
                break;
              case "name":
                n = g;
                break;
              case "checked":
                r = g;
                break;
              case "defaultChecked":
                v = g;
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
                  throw Error(b(137, e));
                break;
              default:
                g !== _ && nt(
                  t,
                  e,
                  p,
                  g,
                  l,
                  _
                );
            }
        }
        Pu(
          t,
          i,
          c,
          o,
          r,
          v,
          u,
          n
        );
        return;
      case "select":
        g = i = c = p = null;
        for (u in a)
          if (o = a[u], a.hasOwnProperty(u) && o != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                g = o;
              default:
                l.hasOwnProperty(u) || nt(
                  t,
                  e,
                  u,
                  null,
                  l,
                  o
                );
            }
        for (n in l)
          if (u = l[n], o = a[n], l.hasOwnProperty(n) && (u != null || o != null))
            switch (n) {
              case "value":
                p = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== o && nt(
                  t,
                  e,
                  n,
                  u,
                  l,
                  o
                );
            }
        e = c, a = i, l = g, p != null ? wa(t, !!a, p, !1) : !!l != !!a && (e != null ? wa(t, !!a, e, !0) : wa(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        g = p = null;
        for (c in a)
          if (n = a[c], a.hasOwnProperty(c) && n != null && !l.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                nt(t, e, c, null, l, n);
            }
        for (i in l)
          if (n = l[i], u = a[i], l.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                p = n;
                break;
              case "defaultValue":
                g = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(b(91));
                break;
              default:
                n !== u && nt(t, e, i, n, l, u);
            }
        Ro(t, p, g);
        return;
      case "option":
        for (var T in a)
          if (p = a[T], a.hasOwnProperty(T) && p != null && !l.hasOwnProperty(T))
            switch (T) {
              case "selected":
                t.selected = !1;
                break;
              default:
                nt(
                  t,
                  e,
                  T,
                  null,
                  l,
                  p
                );
            }
        for (o in l)
          if (p = l[o], g = a[o], l.hasOwnProperty(o) && p !== g && (p != null || g != null))
            switch (o) {
              case "selected":
                t.selected = p && typeof p != "function" && typeof p != "symbol";
                break;
              default:
                nt(
                  t,
                  e,
                  o,
                  p,
                  l,
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
        for (var x in a)
          p = a[x], a.hasOwnProperty(x) && p != null && !l.hasOwnProperty(x) && nt(t, e, x, null, l, p);
        for (r in l)
          if (p = l[r], g = a[r], l.hasOwnProperty(r) && p !== g && (p != null || g != null))
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null)
                  throw Error(b(137, e));
                break;
              default:
                nt(
                  t,
                  e,
                  r,
                  p,
                  l,
                  g
                );
            }
        return;
      default:
        if (ei(e)) {
          for (var ut in a)
            p = a[ut], a.hasOwnProperty(ut) && p !== void 0 && !l.hasOwnProperty(ut) && Qc(
              t,
              e,
              ut,
              void 0,
              l,
              p
            );
          for (v in l)
            p = l[v], g = a[v], !l.hasOwnProperty(v) || p === g || p === void 0 && g === void 0 || Qc(
              t,
              e,
              v,
              p,
              l,
              g
            );
          return;
        }
    }
    for (var d in a)
      p = a[d], a.hasOwnProperty(d) && p != null && !l.hasOwnProperty(d) && nt(t, e, d, null, l, p);
    for (_ in l)
      p = l[_], g = a[_], !l.hasOwnProperty(_) || p === g || p == null && g == null || nt(t, e, _, p, l, g);
  }
  function Yd(t) {
    switch (t) {
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
  function _0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && Yd(i)) {
          for (i = 0, c = n.responseEnd, l += 1; l < a.length; l++) {
            var o = a[l], r = o.startTime;
            if (r > c) break;
            var v = o.transferSize, _ = o.initiatorType;
            v && Yd(_) && (o = o.responseEnd, i += v * (o < c ? 1 : (c - r) / (o - r)));
          }
          if (--l, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Zc = null, Lc = null;
  function Tu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Gd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Vc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Kc = null;
  function S0() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Kc ? !1 : (Kc = t, !0) : (Kc = null, !1);
  }
  var Qd = typeof setTimeout == "function" ? setTimeout : void 0, A0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Zd = typeof Promise == "function" ? Promise : void 0, C0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zd < "u" ? function(t) {
    return Zd.resolve(null).then(t).catch(E0);
  } : Qd;
  function E0(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ba(t) {
    return t === "head";
  }
  function Ld(t, e) {
    var a = e, l = 0;
    do {
      var n = a.nextSibling;
      if (t.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            t.removeChild(n), zl(e);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          rn(t.ownerDocument.documentElement);
        else if (a === "head") {
          a = t.ownerDocument.head, rn(a);
          for (var u = a.firstChild; u; ) {
            var i = u.nextSibling, c = u.nodeName;
            u[Ol] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = i;
          }
        } else
          a === "body" && rn(t.ownerDocument.body);
      a = n;
    } while (a);
    zl(e);
  }
  function Vd(t, e) {
    var a = t;
    t = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
        if (a = l.data, a === "/$") {
          if (t === 0) break;
          t--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
      a = l;
    } while (a);
  }
  function Jc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jc(a), $u(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function z0(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var n = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[Ol])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = ve(t.nextSibling), t === null) break;
    }
    return null;
  }
  function T0(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = ve(t.nextSibling), t === null)) return null;
    return t;
  }
  function Kd(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = ve(t.nextSibling), t === null)) return null;
    return t;
  }
  function wc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Wc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function q0(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading")
      e();
    else {
      var l = function() {
        e(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function ve(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var kc = null;
  function Jd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0)
            return ve(t.nextSibling);
          e--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function wd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else a !== "/$" && a !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Wd(t, e, a) {
    switch (e = Tu(a), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(b(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(b(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(b(454));
        return t;
      default:
        throw Error(b(451));
    }
  }
  function rn(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    $u(t);
  }
  var ye = /* @__PURE__ */ new Map(), kd = /* @__PURE__ */ new Set();
  function qu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var We = E.d;
  E.d = {
    f: D0,
    r: M0,
    D: O0,
    C: U0,
    L: x0,
    m: R0,
    X: H0,
    S: N0,
    M: B0
  };
  function D0() {
    var t = We.f(), e = yu();
    return t || e;
  }
  function M0(t) {
    var e = Va(t);
    e !== null && e.tag === 5 && e.type === "form" ? ms(e) : We.r(t);
  }
  var Al = typeof document > "u" ? null : document;
  function Fd(t, e, a) {
    var l = Al;
    if (l && typeof e == "string" && e) {
      var n = se(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), kd.has(n) || (kd.add(n), t = { rel: t, crossOrigin: a, href: e }, l.querySelector(n) === null && (e = l.createElement("link"), Ht(e, "link", t), Mt(e), l.head.appendChild(e)));
    }
  }
  function O0(t) {
    We.D(t), Fd("dns-prefetch", t, null);
  }
  function U0(t, e) {
    We.C(t, e), Fd("preconnect", t, e);
  }
  function x0(t, e, a) {
    We.L(t, e, a);
    var l = Al;
    if (l && t && e) {
      var n = 'link[rel="preload"][as="' + se(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + se(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + se(
        a.imageSizes
      ) + '"]')) : n += '[href="' + se(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Cl(t);
          break;
        case "script":
          u = El(t);
      }
      ye.has(u) || (t = q(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), ye.set(u, t), l.querySelector(n) !== null || e === "style" && l.querySelector(bn(u)) || e === "script" && l.querySelector(pn(u)) || (e = l.createElement("link"), Ht(e, "link", t), Mt(e), l.head.appendChild(e)));
    }
  }
  function R0(t, e) {
    We.m(t, e);
    var a = Al;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + se(l) + '"][href="' + se(t) + '"]', u = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = El(t);
      }
      if (!ye.has(u) && (t = q({ rel: "modulepreload", href: t }, e), ye.set(u, t), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(pn(u)))
              return;
        }
        l = a.createElement("link"), Ht(l, "link", t), Mt(l), a.head.appendChild(l);
      }
    }
  }
  function N0(t, e, a) {
    We.S(t, e, a);
    var l = Al;
    if (l && t) {
      var n = Ka(l).hoistableStyles, u = Cl(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = l.querySelector(
          bn(u)
        ))
          c.loading = 5;
        else {
          t = q(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = ye.get(u)) && Fc(t, a);
          var o = i = l.createElement("link");
          Mt(o), Ht(o, "link", t), o._p = new Promise(function(r, v) {
            o.onload = r, o.onerror = v;
          }), o.addEventListener("load", function() {
            c.loading |= 1;
          }), o.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Du(i, e, l);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(u, i);
      }
    }
  }
  function H0(t, e) {
    We.X(t, e);
    var a = Al;
    if (a && t) {
      var l = Ka(a).hoistableScripts, n = El(t), u = l.get(n);
      u || (u = a.querySelector(pn(n)), u || (t = q({ src: t, async: !0 }, e), (e = ye.get(n)) && $c(t, e), u = a.createElement("script"), Mt(u), Ht(u, "link", t), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function B0(t, e) {
    We.M(t, e);
    var a = Al;
    if (a && t) {
      var l = Ka(a).hoistableScripts, n = El(t), u = l.get(n);
      u || (u = a.querySelector(pn(n)), u || (t = q({ src: t, async: !0, type: "module" }, e), (e = ye.get(n)) && $c(t, e), u = a.createElement("script"), Mt(u), Ht(u, "link", t), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(n, u));
    }
  }
  function $d(t, e, a, l) {
    var n = (n = Z.current) ? qu(n) : null;
    if (!n) throw Error(b(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (e = Cl(a.href), a = Ka(
          n
        ).hoistableStyles, l = a.get(e), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = Cl(a.href);
          var u = Ka(
            n
          ).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, i), (u = n.querySelector(
            bn(t)
          )) && !u._p && (i.instance = u, i.state.loading = 5), ye.has(t) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, ye.set(t, a), u || j0(
            n,
            t,
            a,
            i.state
          ))), e && l === null)
            throw Error(b(528, ""));
          return i;
        }
        if (e && l !== null)
          throw Error(b(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = El(a), a = Ka(
          n
        ).hoistableScripts, l = a.get(e), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(e, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(b(444, t));
    }
  }
  function Cl(t) {
    return 'href="' + se(t) + '"';
  }
  function bn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Id(t) {
    return q({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function j0(t, e, a, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? l.loading = 1 : (e = t.createElement("link"), l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    }), Ht(e, "link", a), Mt(e), t.head.appendChild(e));
  }
  function El(t) {
    return '[src="' + se(t) + '"]';
  }
  function pn(t) {
    return "script[async]" + t;
  }
  function Pd(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + se(a.href) + '"]'
          );
          if (l)
            return e.instance = l, Mt(l), l;
          var n = q({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), Mt(l), Ht(l, "style", n), Du(l, a.precedence, t), e.instance = l;
        case "stylesheet":
          n = Cl(a.href);
          var u = t.querySelector(
            bn(n)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Mt(u), u;
          l = Id(a), (n = ye.get(n)) && Fc(l, n), u = (t.ownerDocument || t).createElement("link"), Mt(u);
          var i = u;
          return i._p = new Promise(function(c, o) {
            i.onload = c, i.onerror = o;
          }), Ht(u, "link", l), e.state.loading |= 4, Du(u, a.precedence, t), e.instance = u;
        case "script":
          return u = El(a.src), (n = t.querySelector(
            pn(u)
          )) ? (e.instance = n, Mt(n), n) : (l = a, (n = ye.get(u)) && (l = q({}, a), $c(l, n)), t = t.ownerDocument || t, n = t.createElement("script"), Mt(n), Ht(n, "link", l), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(b(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, Du(l, a.precedence, t));
    return e.instance;
  }
  function Du(t, e, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, u = n, i = 0; i < l.length; i++) {
      var c = l[i];
      if (c.dataset.precedence === e) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function Fc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function $c(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Mu = null;
  function tm(t, e, a) {
    if (Mu === null) {
      var l = /* @__PURE__ */ new Map(), n = Mu = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = Mu, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(t)) return l;
    for (l.set(t, null), a = a.getElementsByTagName(t), n = 0; n < a.length; n++) {
      var u = a[n];
      if (!(u[Ol] || u[Ut] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var c = l.get(i);
        c ? c.push(u) : l.set(i, [u]);
      }
    }
    return l;
  }
  function em(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(
      a,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Y0(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function am(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function G0(t, e, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = Cl(l.href), u = e.querySelector(
          bn(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Ou.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = u, Mt(u);
          return;
        }
        u = e.ownerDocument || e, l = Id(l), (n = ye.get(n)) && Fc(l, n), u = u.createElement("link"), Mt(u);
        var i = u;
        i._p = new Promise(function(c, o) {
          i.onload = c, i.onerror = o;
        }), Ht(u, "link", l), a.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = Ou.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var Ic = 0;
  function X0(t, e) {
    return t.stylesheets && t.count === 0 && xu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (t.stylesheets && xu(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Ic === 0 && (Ic = 62500 * _0());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && xu(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Ic ? 50 : 800) + e
      );
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function Ou() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) xu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Uu = null;
  function xu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Uu = /* @__PURE__ */ new Map(), e.forEach(Q0, t), Uu = null, Ou.call(t));
  }
  function Q0(t, e) {
    if (!(e.state.loading & 4)) {
      var a = Uu.get(t);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Uu.set(t, a);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), l = i);
        }
        l && a.set(null, l);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = a.get(i) || l, u === l && a.set(null, n), a.set(i, n), this.count++, l = Ou.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var gn = {
    $$typeof: Bt,
    Provider: null,
    Consumer: null,
    _currentValue: N,
    _currentValue2: N,
    _threadCount: 0
  };
  function Z0(t, e, a, l, n, u, i, c, o) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wu(0), this.hiddenUpdates = wu(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function lm(t, e, a, l, n, u, i, c, o, r, v, _) {
    return t = new Z0(
      t,
      e,
      a,
      i,
      o,
      r,
      v,
      _,
      c
    ), e = 1, u === !0 && (e |= 24), u = ee(3, null, null, e), t.current = u, u.stateNode = t, e = Ui(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: e
    }, Hi(u), t;
  }
  function nm(t) {
    return t ? (t = el, t) : el;
  }
  function um(t, e, a, l, n, u) {
    n = nm(n), l.context === null ? l.context = n : l.pendingContext = n, l = la(e), l.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (l.callback = u), a = na(t, l, e), a !== null && (Ft(a, t, e), wl(a, t, e));
  }
  function im(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Pc(t, e) {
    im(t, e), (t = t.alternate) && im(t, e);
  }
  function cm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = qa(t, 67108864);
      e !== null && Ft(e, t, 67108864), Pc(t, 67108864);
    }
  }
  function om(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ie();
      e = Wu(e);
      var a = qa(t, e);
      a !== null && Ft(a, t, e), Pc(t, e);
    }
  }
  var Ru = !0;
  function L0(t, e, a, l) {
    var n = y.T;
    y.T = null;
    var u = E.p;
    try {
      E.p = 2, to(t, e, a, l);
    } finally {
      E.p = u, y.T = n;
    }
  }
  function V0(t, e, a, l) {
    var n = y.T;
    y.T = null;
    var u = E.p;
    try {
      E.p = 8, to(t, e, a, l);
    } finally {
      E.p = u, y.T = n;
    }
  }
  function to(t, e, a, l) {
    if (Ru) {
      var n = eo(l);
      if (n === null)
        Xc(
          t,
          e,
          l,
          Nu,
          a
        ), sm(t, l);
      else if (J0(
        n,
        t,
        e,
        a,
        l
      ))
        l.stopPropagation();
      else if (sm(t, l), e & 4 && -1 < K0.indexOf(t)) {
        for (; n !== null; ) {
          var u = Va(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Aa(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var o = 1 << 31 - Pt(i);
                      c.entanglements[1] |= o, i &= ~o;
                    }
                    Me(u), (I & 6) === 0 && (gu = $t() + 500, sn(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = qa(u, 2), c !== null && Ft(c, u, 2), yu(), Pc(u, 2);
            }
          if (u = eo(l), u === null && Xc(
            t,
            e,
            l,
            Nu,
            a
          ), u === n) break;
          n = u;
        }
        n !== null && l.stopPropagation();
      } else
        Xc(
          t,
          e,
          l,
          null,
          a
        );
    }
  }
  function eo(t) {
    return t = li(t), ao(t);
  }
  var Nu = null;
  function ao(t) {
    if (Nu = null, t = La(t), t !== null) {
      var e = ct(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = bt(e), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = st(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Nu = t, null;
  }
  function fm(t) {
    switch (t) {
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
        switch (Om()) {
          case go:
            return 2;
          case vo:
            return 8;
          case Cn:
          case Um:
            return 32;
          case yo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lo = !1, pa = null, ga = null, va = null, vn = /* @__PURE__ */ new Map(), yn = /* @__PURE__ */ new Map(), ya = [], K0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        pa = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        va = null;
        break;
      case "pointerover":
      case "pointerout":
        vn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yn.delete(e.pointerId);
    }
  }
  function hn(t, e, a, l, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = Va(e), e !== null && cm(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function J0(t, e, a, l, n) {
    switch (e) {
      case "focusin":
        return pa = hn(
          pa,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return ga = hn(
          ga,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return va = hn(
          va,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return vn.set(
          u,
          hn(
            vn.get(u) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, yn.set(
          u,
          hn(
            yn.get(u) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
    }
    return !1;
  }
  function dm(t) {
    var e = La(t.target);
    if (e !== null) {
      var a = ct(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = bt(a), e !== null) {
            t.blockedOn = e, Eo(t.priority, function() {
              om(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = st(a), e !== null) {
            t.blockedOn = e, Eo(t.priority, function() {
              om(a);
            });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Hu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = eo(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        ai = l, a.target.dispatchEvent(l), ai = null;
      } else
        return e = Va(a), e !== null && cm(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function mm(t, e, a) {
    Hu(t) && a.delete(e);
  }
  function w0() {
    lo = !1, pa !== null && Hu(pa) && (pa = null), ga !== null && Hu(ga) && (ga = null), va !== null && Hu(va) && (va = null), vn.forEach(mm), yn.forEach(mm);
  }
  function Bu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, lo || (lo = !0, C.unstable_scheduleCallback(
      C.unstable_NormalPriority,
      w0
    )));
  }
  var ju = null;
  function rm(t) {
    ju !== t && (ju = t, C.unstable_scheduleCallback(
      C.unstable_NormalPriority,
      function() {
        ju === t && (ju = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], l = t[e + 1], n = t[e + 2];
          if (typeof l != "function") {
            if (ao(l || a) === null)
              continue;
            break;
          }
          var u = Va(a);
          u !== null && (t.splice(e, 3), e -= 3, ec(
            u,
            {
              pending: !0,
              data: n,
              method: a.method,
              action: l
            },
            l,
            n
          ));
        }
      }
    ));
  }
  function zl(t) {
    function e(o) {
      return Bu(o, t);
    }
    pa !== null && Bu(pa, t), ga !== null && Bu(ga, t), va !== null && Bu(va, t), vn.forEach(e), yn.forEach(e);
    for (var a = 0; a < ya.length; a++) {
      var l = ya[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < ya.length && (a = ya[0], a.blockedOn === null); )
      dm(a), a.blockedOn === null && ya.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], u = a[l + 1], i = n[Vt] || null;
        if (typeof u == "function")
          i || rm(a);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Vt] || null)
              c = i.formAction;
            else if (ao(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? a[l + 1] = c : (a.splice(l, 3), l -= 3), rm(a);
        }
      }
  }
  function bm() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function no(t) {
    this._internalRoot = t;
  }
  Yu.prototype.render = no.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(b(409));
    var a = e.current, l = ie();
    um(a, l, t, e, null, null);
  }, Yu.prototype.unmount = no.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      um(t.current, 2, null, t, null, null), yu(), e[Za] = null;
    }
  };
  function Yu(t) {
    this._internalRoot = t;
  }
  Yu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Co();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < ya.length && e !== 0 && e < ya[a].priority; a++) ;
      ya.splice(a, 0, t), a === 0 && dm(t);
    }
  };
  var pm = R.version;
  if (pm !== "19.2.5")
    throw Error(
      b(
        527,
        pm,
        "19.2.5"
      )
    );
  E.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(b(188)) : (t = Object.keys(t).join(","), Error(b(268, t)));
    return t = A(e), t = t !== null ? Q(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var W0 = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: y,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gu.isDisabled && Gu.supportsFiber)
      try {
        ql = Gu.inject(
          W0
        ), It = Gu;
      } catch {
      }
  }
  return Sn.createRoot = function(t, e) {
    if (!it(t)) throw Error(b(299));
    var a = !1, l = "", n = As, u = Cs, i = Es;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = lm(
      t,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      n,
      u,
      i,
      bm
    ), t[Za] = e.current, Gc(t), new no(e);
  }, Sn.hydrateRoot = function(t, e, a) {
    if (!it(t)) throw Error(b(299));
    var l = !1, n = "", u = As, i = Cs, c = Es, o = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (o = a.formState)), e = lm(
      t,
      1,
      !0,
      e,
      a ?? null,
      l,
      n,
      o,
      u,
      i,
      c,
      bm
    ), e.context = nm(null), a = e.current, l = ie(), l = Wu(l), n = la(l), n.callback = null, na(a, n, l), a = l, e.current.lanes = a, Ml(e, a), Me(e), t[Za] = e.current, Gc(t), new Yu(e);
  }, Sn.version = "19.2.5", Sn;
}
var zm;
function u1() {
  if (zm) return io.exports;
  zm = 1;
  function C() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C);
      } catch (R) {
        console.error(R);
      }
  }
  return C(), io.exports = n1(), io.exports;
}
var i1 = u1(), Xa = ro();
const c1 = {
  categories: [
    {
      id: 1,
      name: "Abuse Reports",
      description: "Contains reports from our community, for employee mods.",
      image: "8e8ef1e0-ee1e-4a94-8949-5e2b9f1aaaad_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 11
    },
    {
      id: 106,
      name: "JP Abuse Reports",
      description: "JP Abuse Reports",
      image: "b25f61d2-4b1f-4ed7-b18c-11f29e5d6f54_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 162
    },
    {
      id: 4,
      name: "Account, Payment, & Plan",
      description: "Get help on your Adobe Account or purchases.",
      image: "0354e4ad-5e10-4798-ba1f-0dec5144f6b7_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 14500
    },
    {
      id: 798,
      name: "Adobe Firefly フォーラム",
      description: "Adobe Fireflyについての質問はこちらへ！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "154a7cd6-ecf6-4104-b1fb-390a9def03b9_thumb.jpg",
      conversation_type: [
        "question"
      ],
      topicsCount: 43
    },
    {
      id: 7,
      name: "Acrobat",
      description: "Learn and discuss all things Acrobat with experts.",
      image: "10682b93-16fb-4e6c-9958-1c15814952b7_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 88004
    },
    {
      id: 809,
      name: "Premiere (Beta) フォーラム",
      description: "Premiere (Beta) フォーラム",
      image: "5165a296-4acd-483e-b7bc-606e11d0a2dc_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 8
    },
    {
      id: 10,
      name: "Acrobat Reader",
      description: "Connect with the global Acrobat Reader community.",
      image: "fb725f6f-6d92-4338-a355-2a841b7054c7_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 23074
    },
    {
      id: 815,
      name: "Substance 3D フォーラム",
      description: "Substance 3D フォーラム",
      image: "1ecee40c-8473-479b-a020-cca84c9048ec_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 13
    },
    {
      id: 13,
      name: "Acrobat Reader Mobile",
      description: "Get Acrobat Reader Mobile answers, news, tips. Join us!",
      image: "80e1b360-abde-40d7-a34b-1e2e2a5bb6df_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 9989
    },
    {
      id: 109,
      name: "アカウント / 支払い / プラン",
      description: "Adobe Creative Cloudのアカウントやお支払いについての質問はこちらへ！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "527c1931-0e2b-4233-a1cf-28290a09167c_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 2803
    },
    {
      id: 16,
      name: "Acrobat SDK",
      description: "Unlock the power of Acrobat SDK through our community.",
      image: "526a5de8-18d8-4514-8dc6-afd4ca706b05_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 19371
    },
    {
      id: 112,
      name: "Acrobatフォーラム",
      description: "Acrobatコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "a7609835-7a72-4848-80b6-5e3659791892_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 5112
    },
    {
      id: 116,
      name: "Acrobat Reader / Acrobat DC for Mobileフォーラム",
      description: "Acrobat Reader / Reader Mobileコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "ce68a4be-7329-4041-98c6-959a62924629_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 2093
    },
    {
      id: 19,
      name: "Acrobat Services API",
      description: "Unlock the full value of DC Web with our global community.",
      image: "f2906a02-e825-43a5-889b-c21b445d525e_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 2696
    },
    {
      id: 22,
      name: "Acrobat Sign Developer",
      description: "Acrobat Sign Dev Community: Connect, Learn, Innovate",
      image: "9a1ae647-59f4-47ed-bd9d-d5da14d5eb11_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 316
    },
    {
      id: 121,
      name: "Adobe Acrobat Sign / Document Cloudフォーラム",
      description: "Adobe Acrobat Sign / Document Cloudコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "fe03a827-dc6a-458e-b715-6b5a14c43842_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 366
    },
    {
      id: 25,
      name: "Adobe Acrobat Online",
      description: "Collaborate with Adobe Acrobat Online community.",
      image: "74d70cd1-6b1d-41f7-b2a9-68526e801aa9_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 13444
    },
    {
      id: 124,
      name: "Adobe Express フォーラム",
      description: "Adobe Express フォーラム",
      image: "0ddc1e39-2226-4086-be5f-0a5df4b280b1_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 306
    },
    {
      id: 28,
      name: "Adobe Acrobat Sign",
      description: "Join the Acrobat Sign community. Connect, Help, Be helped.",
      image: "7e5c3cd8-7874-4313-bc55-991c0d701f89_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 10410
    },
    {
      id: 127,
      name: "Adobe Scanフォーラム",
      description: "Adobe Scanコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "9c2b756d-0958-4682-a1d1-8deeb9d7322d_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 68
    },
    {
      id: 76,
      name: "Adobe Aero",
      description: "Connect, learn, and get help from the Aero Community.",
      image: "4fbebe0e-f037-4946-9a02-f440a0a284fb_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 984
    },
    {
      id: 130,
      name: "After Effectsフォーラム",
      description: "After Effectsコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "d923a296-e2c4-471e-8923-f2ab81e3621a_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 3427
    },
    {
      id: 29,
      name: "Stock",
      description: "Connect with creators in the official Stock community.",
      image: "9185faa3-3726-4a26-9918-2bb6fd4781ef_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 8353
    },
    {
      id: 133,
      name: "Adobe AIRフォーラム (read-only)",
      description: "Adobe AIRコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "b0e67963-3b40-477e-b291-311a55906435_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 123
    },
    {
      id: 36,
      name: "Stock Contributors",
      description: "Get feedback on your Stock contributions from experts.",
      image: "8aa34647-8ccc-4cf5-8224-9fa3fec607fc_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 16707
    },
    {
      id: 136,
      name: "Animateフォーラム",
      description: "Animateコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "2b5cc5c6-0feb-42d0-9df3-0e4d1cd9fa0c_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 382
    },
    {
      id: 139,
      name: "Auditionフォーラム",
      description: "Auditionコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "eb05c82a-cbe9-45ea-a9d6-ce01c6328f0c_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 247
    },
    {
      id: 39,
      name: "Substance 3D Assets and Community Assets",
      description: "Connect with other Substance 3D Assets users.",
      image: "216d6283-2dd7-46d3-948e-7f854bb57c28_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 313
    },
    {
      id: 44,
      name: "Substance 3D Automation Toolkit",
      description: "A community for Substance 3D Automation Toolkit users.",
      image: "2e73df36-833c-45c7-858d-8962e33b7eeb_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 28
    },
    {
      id: 142,
      name: "Japan Back Room",
      description: "Japan Back Room",
      image: "0a60dd25-f2d4-452f-9018-d87c08585dc2_thumb.png",
      conversation_type: [
        "question",
        "idea",
        "conversation"
      ],
      topicsCount: 856
    },
    {
      id: 47,
      name: "Substance 3D Designer",
      description: "A community for Substance 3D Designer users.",
      image: "c75518c5-46a3-405a-a5b1-b8aa902d5125_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 1471
    },
    {
      id: 147,
      name: "Bridgeフォーラム",
      description: "Bridgeコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "24234581-08d4-4437-b2b8-844e27cdfbf5_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 376
    },
    {
      id: 52,
      name: "Substance 3D Modeler",
      description: "A community for Substance 3D Modeler users.",
      image: "5e0d9b3b-ac40-471a-b1d8-8e6bdde3a22d_thumb.png",
      conversation_type: [
        "question",
        "idea"
      ],
      topicsCount: 121
    },
    {
      id: 153,
      name: "Camera Rawフォーラム",
      description: "Camera Rawコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "ce4d372a-6bbc-452e-8019-fa4ccc950b4a_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 69
    },
    {
      id: 56,
      name: "Substance 3D Painter",
      description: "Connect, learn, and get help texturing your 3D assets.",
      image: "914dd940-1aa6-4bbe-aa93-5111cd962bd3_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 4021
    },
    {
      id: 160,
      name: "Captivate / Captivate Primeフォーラム",
      description: "Captivate / Captivate Prime コミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "e161e36b-2f74-4afd-ad0b-5e96a1637837_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 158
    },
    {
      id: 61,
      name: "Substance 3D Plugins",
      description: "A community for Substance 3D Plugins users.",
      image: "092562d0-eef9-4dfe-ac8d-2d1a85ea1ef3_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 351
    },
    {
      id: 163,
      name: "Adobe Captureフォーラム",
      description: "Adobe Captureコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "e93e9f1e-a3c1-463d-8172-eed09dc927b5_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 6
    },
    {
      id: 66,
      name: "Substance 3D Sampler",
      description: "A community for Substance 3D Sampler users.",
      image: "c9257d39-8fb9-4fb4-8429-8d8666eeec89_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 521
    },
    {
      id: 166,
      name: "Creative Cloudサービス",
      description: "Adobe Creative Cloudのライセンス/アクティベーションについての質問はこちらへ！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "fb96e6d8-8d0e-4437-9717-7973d42051c0_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 914
    },
    {
      id: 71,
      name: "Substance 3D Stager",
      description: "A community for Substance 3D Stager users.",
      image: "3021e238-277b-40b9-943b-5ae3fb7d1a50_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 730
    },
    {
      id: 169,
      name: "Character Animatorフォーラム",
      description: "Character Animatorコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "b25b6201-b5c2-4759-b0f0-22425b33a896_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 124
    },
    {
      id: 77,
      name: "Team Projects",
      description: "For all your questions about Adobe Team Projects.",
      image: "59e46f5f-5cf8-4687-9081-d1574b3232e5_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 762
    },
    {
      id: 172,
      name: "Adobe Colorフォーラム",
      description: "Adobe Colorコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "336a497e-c411-413f-8736-b7465c47c7d4_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 10
    },
    {
      id: 84,
      name: "Testing Feedback",
      description: "Testing Feedback",
      image: "c247d280-5311-4aaa-b70d-c8004b99e6c5_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 3570
    },
    {
      id: 175,
      name: "アドビサポートコミュニティ 総合案内",
      description: "アドビサポートコミュニティ全般についてのご案内",
      image: "fd4e530e-374c-4f34-a401-9bdeed7da04c_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 2624
    },
    {
      id: 89,
      name: "The Lounge",
      description: "For anything and everything not Adobe related.",
      image: "cd6d6bae-6e3c-41f1-80ca-114756828cad_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 1835
    },
    {
      id: 180,
      name: "Adobe Compフォーラム",
      description: "Adobe Compコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "61a84723-d2f1-4b56-8a0a-aa6925795e14_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 10
    },
    {
      id: 92,
      name: "Type & Typography",
      description: "Join our global community of typography enthusiasts.",
      image: "185188d2-45c0-4f26-9087-ba41318cca7e_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 2176
    },
    {
      id: 183,
      name: "Contributeフォーラム",
      description: "Contributeコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "b158dfa5-5e17-44ab-b44a-91e0eb877d17_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 60
    },
    {
      id: 95,
      name: "Using the Community",
      description: "Get the most out of your Adobe community experience.",
      image: "d2d2c91d-e52e-417b-ba70-d5293af3151c_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 5141
    },
    {
      id: 186,
      name: "Digital Editionsフォーラム",
      description: "Digital Editionsコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "0d740672-8369-44ca-b505-70197b7f838a_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 44
    },
    {
      id: 100,
      name: "Video Hardware",
      description: "Meet others in our global Video Hardware community.",
      image: "f3f4ac44-6d80-4dce-a6b1-70c28d525a3d_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 2705
    },
    {
      id: 190,
      name: "Dimensionフォーラム",
      description: "Dimensionコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "2b0adb57-0b32-4cc0-bd06-e17d27ef82eb_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 70
    },
    {
      id: 195,
      name: "Creative Cloudのダウンロードとインストール",
      description: "Adobe Creative Cloudのダウンロード/インストールについての質問はこちらへ！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "d9856d2b-47ee-4247-ac78-10a1f1483570_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 6710
    },
    {
      id: 103,
      name: "Video Lounge",
      description: "A safe, no-judgement place to talk Video-related topics.",
      image: "15ed8bbf-bc18-4025-896c-f93305d4e380_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 916
    },
    {
      id: 115,
      name: "Adobe Capture",
      description: "A community for Adobe Capture users.",
      image: "5a6e19ab-5f57-4343-bcb7-1f2c600d94ac_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 479
    },
    {
      id: 198,
      name: "Dreamweaverフォーラム",
      description: "Dreamweaverコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "8513000d-1d76-450f-afce-fc75cb41f60d_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 778
    },
    {
      id: 152,
      name: "Adobe Collaboration Experiences",
      description: "Adobe Collaboration Experiences",
      image: "37e90ea5-c775-4245-aeef-86ab4d263e5e_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 1099
    },
    {
      id: 201,
      name: "Creative Cloud 法人エンタープライズ版",
      description: "Creative Cloudを法人のエンタープライズ版として契約されている方向けのフォーラムです。",
      image: "a8590252-4c62-4c62-ba10-a15368211366_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 173
    },
    {
      id: 189,
      name: "Adobe Color",
      description: "The official community for Adobe Color.",
      image: "cdae1124-18bc-4fd9-8f7c-f3055c130b6d_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 355
    },
    {
      id: 204,
      name: "Fireworksフォーラム",
      description: "Fireworksコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "b478c8b4-5a63-41be-990d-cb7459ad9d16_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 48
    },
    {
      id: 207,
      name: "Flash Playerフォーラム (read-only)",
      description: "Flash Player コミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "958fa70b-0359-4eb0-9c02-ab4d53b01bb7_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 119
    },
    {
      id: 222,
      name: "Adobe Content Authenticity",
      description: "Adobe Content Authenticity",
      image: "fbe34ebf-dd2e-45bb-9915-04468e8e50bb_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 15
    },
    {
      id: 210,
      name: "Flex / Flash Builderフォーラム",
      description: "Flex / Flash Builderコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "ab49857f-61b3-4054-bf61-55affac68c6e_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 48
    },
    {
      id: 259,
      name: "Adobe Education",
      description: "Adobe Education",
      image: "e2b8a42b-1b37-4c04-8d3b-cd16fa3f29f0_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 79
    },
    {
      id: 213,
      name: "Adobe Fontsフォーラム",
      description: "Adobe Fontsコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "a380a48e-8543-40bc-9490-68868e157d69_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 325
    },
    {
      id: 294,
      name: "Adobe Events",
      description: "Adobe Events",
      image: "d5510556-1eed-4079-8d12-80f740a4694b_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 3
    },
    {
      id: 216,
      name: "FrameMakerフォーラム",
      description: "FrameMaker コミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "606d4899-7ce7-4d99-acd9-d6033b11ba89_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 303
    },
    {
      id: 326,
      name: "Adobe Express",
      description: "Join our global community to connect, learn, and get help.",
      image: "8c764fe5-9b32-47e6-a6fd-01bbadd4ca33_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 15837
    },
    {
      id: 219,
      name: "Frescoフォーラム",
      description: "Frescoコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "1d8d1b1b-2790-4daf-a8bf-5ae3e6caa853_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 206
    },
    {
      id: 357,
      name: "Adobe Express Developers",
      description: "Adobe Express Developers",
      image: "1bca58c0-32f0-4c79-9294-860192b54513_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 155
    },
    {
      id: 223,
      name: "Illustratorフォーラム",
      description: "Illustratorコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "5d6f0960-38f1-47ae-acba-c2e03125ad7c_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 6429
    },
    {
      id: 396,
      name: "Adobe Firefly",
      description: "Adobe Firefly",
      image: "cbd61580-6a24-4ef2-8798-a41984972fb6_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 10948
    },
    {
      id: 230,
      name: "Illustrator Drawフォーラム",
      description: "Illustrator Drawコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "7258341c-6fc0-4c9d-8226-ff40cfb8d078_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 15
    },
    {
      id: 433,
      name: "Adobe Fonts",
      description: "Join our global community of Adobe Fonts users.",
      image: "5bb3e77d-0443-4f03-8f2f-def16e7129a7_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 2581
    },
    {
      id: 238,
      name: "InCopyフォーラム",
      description: "InCopyコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "07d303b9-6a65-479f-bc71-e6b0f4c749b6_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 1
    },
    {
      id: 466,
      name: "Adobe Learning Manager",
      description: "The official community for Adobe Learning Manager (ALM).",
      image: "fd9d90eb-a7b3-46c9-97a3-757bb9108d03_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 1155
    },
    {
      id: 241,
      name: "InDesignフォーラム",
      description: "InDesign コミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "c210992b-d23c-4210-bf5e-defb2cefcb0c_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 1734
    },
    {
      id: 488,
      name: "Premiere Mobile",
      description: "Premiere Mobile.",
      image: "a4b6a191-2237-4155-8a14-862f3d12a7e0_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 107
    },
    {
      id: 244,
      name: "Adobe MAX 2025/ The Japan Lounge",
      description: "Adobe MAX 2025/ The Japan Lounge",
      image: "6c1c9964-8aec-479b-97c5-48bb3b9564d7_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 64
    },
    {
      id: 493,
      name: "Substance 3D Reviewer",
      description: "Substance 3D Reviewer",
      image: "820aed9e-6e5e-4584-a78c-4378b17ebc5d_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 5
    },
    {
      id: 247,
      name: "Lightroomフォーラム",
      description: "Lightroomコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "fe0f9ccf-1d6b-47dd-b172-9fb88aeecb3b_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 835
    },
    {
      id: 498,
      name: "Bridge UV",
      description: "Bridge UV",
      image: "4aa5b10f-a86d-455f-91b0-82747ffa2f64_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 0
    },
    {
      id: 250,
      name: "Lightroom Classicフォーラム",
      description: "Lightroom Classicコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "14c45514-3f40-4695-95e0-02a5c64be976_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 1785
    },
    {
      id: 503,
      name: "Adobe Media Encoder",
      description: "Master the art of compression, share and learn.",
      image: "4b00c4ee-03be-4fe0-baee-406dc674adf6_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 5379
    },
    {
      id: 253,
      name: "Media Encoderフォーラム",
      description: "Media Encoderコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "3e3d4a3d-4e63-4b35-bdd3-e5e182744353_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 219
    },
    {
      id: 508,
      name: "Adobe Media Encoder (Beta)",
      description: "Adobe Media Encoder (Beta)",
      image: "1f7f9d25-2365-41a0-aa1a-b9231d6c66d5_thumb.png",
      conversation_type: [
        "conversation",
        "question"
      ],
      topicsCount: 221
    },
    {
      id: 256,
      name: "Museフォーラム",
      description: "Museコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "0e75eb07-083b-414c-9abb-81ba65153c01_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 173
    },
    {
      id: 512,
      name: "Adobe Podcast",
      description: "Adobe Podcast",
      image: "bb11b7e1-592d-4593-98be-1dbaff135beb_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 279
    },
    {
      id: 260,
      name: "永続版ライセンス製品",
      description: "永続版ライセンス製品",
      image: "8ed99a94-f716-467b-accf-de2ad869c79d_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 1421
    },
    {
      id: 515,
      name: "Adobe Scan",
      description: "Discover Adobe Scan tips from our global community.",
      image: "eaceda49-efc8-4ef7-8c62-10c14a6ac852_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 3054
    },
    {
      id: 265,
      name: "Photoshop デスクトップ/Mobile/web 版",
      description: "Photoshopコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "630fa503-bccf-4e9e-8382-4205299105a8_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 6562
    },
    {
      id: 518,
      name: "Adobe Substance 3D Viewer (Beta)",
      description: "Adobe Substance 3D Viewer (Beta)",
      image: "4ff6d513-86f2-41de-9105-324a988b51c4_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 63
    },
    {
      id: 268,
      name: "Photoshop (Beta) フォーラム",
      description: "Photoshop (Beta) フォーラム",
      image: "6630032a-f70f-4fe5-96e0-6d495f6d1f07_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 216
    },
    {
      id: 523,
      name: "Adobe XD",
      description: "A community for Adobe XD users.",
      image: "3a2ab040-71ff-45c8-848c-fcce3dc659a0_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 13918
    },
    {
      id: 273,
      name: "Photoshop Cameraフォーラム",
      description: "Photoshop Cameraコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "40813387-dcc6-430b-83ee-375f73868507_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 6
    },
    {
      id: 526,
      name: "After Effects",
      description: "Get help and share feedback in our global community.",
      image: "bdc67e71-8aa6-43a1-9f09-632836f2709f_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 54807
    },
    {
      id: 276,
      name: "Photoshop Elementsフォーラム",
      description: "Photoshop Elementsコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "79fe4752-5b18-43e8-b7df-059df492e792_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 1907
    },
    {
      id: 531,
      name: "After Effects (Beta)",
      description: "After Effects (Beta)",
      image: "ca46b912-0599-4b2d-80b4-59ead3d02356_thumb.png",
      conversation_type: [
        "conversation",
        "question"
      ],
      topicsCount: 1032
    },
    {
      id: 279,
      name: "Photoshop Expressフォーラム",
      description: "Photoshop Expressコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "eb142954-a7b9-4b5c-8db7-94a06a215304_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 57
    },
    {
      id: 535,
      name: "Air",
      description: "Join a global community of Adobe Air users and developers.",
      image: "d628c378-e7f3-4903-a775-ea6b9b830c76_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 10783
    },
    {
      id: 282,
      name: "Photoshop Fixフォーラム",
      description: "Photoshop Fixコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "e13bf8d5-07cd-42a0-8929-9850f1c69a57_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 10
    },
    {
      id: 538,
      name: "Animate",
      description: "Get help using Adobe Animate and creating animations.",
      image: "6e14e764-07c5-4b87-9cb2-27104f6f9850_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 69027
    },
    {
      id: 285,
      name: "Photoshop Mixフォーラム",
      description: "Photoshop Mixコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "a136f995-a066-4b9e-89a4-d7dbce741834_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 7
    },
    {
      id: 541,
      name: "Audition",
      description: "Join the conversation on all things Adobe Audition.",
      image: "9586b21e-8581-468a-9c02-0cd1d7a4cbbf_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 9670
    },
    {
      id: 288,
      name: "Photoshop Sketchフォーラム",
      description: "Photoshop Sketchコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "d6279459-48b3-4841-9274-abe6be2b8bb4_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 14
    },
    {
      id: 546,
      name: "Audition (Beta)",
      description: "Audition (Beta)",
      image: "df437939-a595-406a-a2b2-f1e6b9621814_thumb.png",
      conversation_type: [
        "conversation",
        "question"
      ],
      topicsCount: 123
    },
    {
      id: 291,
      name: "Preludeフォーラム",
      description: "Preludeコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "414175b9-3469-4a28-ac68-b5629471f911_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 8
    },
    {
      id: 550,
      name: "Back Room",
      description: "Moderation and feedback from our Community Experts.",
      image: "a539cf07-baeb-46aa-9b29-006a973e7ab5_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 4644
    },
    {
      id: 295,
      name: "Premiere Elementsフォーラム",
      description: "Premiere Elementsコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "f1239236-eca2-43ed-9be6-3d3865f47fea_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 1538
    },
    {
      id: 555,
      name: "Bridge",
      description: "Connect with our global Bridge Community.",
      image: "d59749ee-1307-48ef-8fe5-4ca3ad9312f4_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 10591
    },
    {
      id: 299,
      name: "Premiere フォーラム",
      description: "Premiere コミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "6a2a90e0-dbd4-489c-80e7-db34a110517b_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 10523
    },
    {
      id: 560,
      name: "Camera Raw",
      description: "Connect with our global Camera Raw Community.",
      image: "289afd99-bfca-41e0-92e1-2d848749a8b4_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 4578
    },
    {
      id: 302,
      name: "Premiere Rushフォーラム",
      description: "Premiere Rushコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "673d0a63-a452-4971-90d4-e06bd763fb36_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 297
    },
    {
      id: 565,
      name: "Captivate",
      description: "The official community for Captivate.",
      image: "2cb68c08-6355-4565-9eb0-4c33371bf18f_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 62350
    },
    {
      id: 305,
      name: "RoboHelpフォーラム",
      description: "RoboHelpコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "e2390419-f47c-4979-999c-dad3be235cbe_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 51
    },
    {
      id: 568,
      name: "Character Animator",
      description: "Learn how to create, build, and animate 2D puppets.",
      image: "5c20a4ca-1a5e-4f0d-8290-b0ce351b40ec_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 7107
    },
    {
      id: 308,
      name: "Spark Page and Video on iOS",
      description: "Sparkコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "8366868c-a7c5-47b2-a56d-9874f3a39050_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 17
    },
    {
      id: 573,
      name: "Character Animator (Beta)",
      description: "Character Animator (Beta)",
      image: "3669f788-f62f-453b-8484-80d078150c78_thumb.png",
      conversation_type: [
        "conversation",
        "question"
      ],
      topicsCount: 128
    },
    {
      id: 311,
      name: "Stockフォーラム",
      description: "Adobe Stockコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "7320c988-5273-49eb-af29-d3b71ec4c260_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 928
    },
    {
      id: 577,
      name: "Coding Corner",
      description: "Learn how to customize the way you work with Adobe apps.",
      image: "50741845-38a3-479f-bf82-8b5530486ff1_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 438
    },
    {
      id: 314,
      name: "Creative Cloud 法人グループ版",
      description: "Creative Cloudを法人のグループ版で契約されている方向けのフォーラムです。",
      image: "839d48a3-e5b4-458c-a3bc-af5031cf2bd5_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 203
    },
    {
      id: 580,
      name: "ColdFusion",
      description: "The official community for ColdFusion.",
      image: "00b3ca0a-5a07-407d-971a-7db91c308bcd_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 37759
    },
    {
      id: 317,
      name: "Testing-Feedback-JPフォーラム",
      description: "Testing-Feedback-JPフォーラム",
      image: "349df293-3a5a-4415-aabd-c06a0b0cf3ca_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 211
    },
    {
      id: 583,
      name: "Color Management",
      description: "A community for Color Management users.",
      image: "1ec7d3dc-36b2-4765-b3f1-d8945203f974_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 404
    },
    {
      id: 320,
      name: "Video Hardwareフォーラム",
      description: "アドビのオーディオ/ビデオ製品に必要なシステム構成について学び、知識を共有し、わからないことやトラブルシューティングについてディスカッションすることができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "7d60129b-a62a-4fef-8dd2-93e3523477d6_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 55
    },
    {
      id: 586,
      name: "Connect",
      description: "Join the best place to learn and discuss Adobe Connect.",
      image: "6758b954-91e5-421b-83b0-9ebce404ca9d_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 4717
    },
    {
      id: 323,
      name: "Adobe XDフォーラム",
      description: "Adobe XDコミュニティに質問してみよう！質問への回答、ディスカッションを通して、エクスパートから色々なナレッジを学ぶことができます。知りたい人と知ってる人が繋がって会話できる、アドビのコミュニティプラットフォームです。",
      image: "8d826971-f7d6-433c-868b-a6a5e3c6e473_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 645
    },
    {
      id: 589,
      name: "Create Embed SDK (Beta)",
      description: "Create Embed SDK (Beta)",
      image: "524a35d2-b2a3-4371-a90c-08018bb8ce49_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 0
    },
    {
      id: 591,
      name: "Adobe Express Embed SDK",
      description: "Connect with other Embed SDK users and share feedback.",
      image: "3e7da5e8-1592-48f3-b4e1-d64f4de9eac2_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 0
    },
    {
      id: 599,
      name: "Creative Cloud desktop",
      description: "The official community for the Creative Cloud desktop app.",
      image: "aeb39b01-44b7-4eed-bad7-ad8512f8c9c0_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 2189
    },
    {
      id: 604,
      name: "Creative Cloud Services",
      description: "Get help and support for your membership services.",
      image: "a75b9d58-3928-45a2-85e5-00d164e63737_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 8883
    },
    {
      id: 607,
      name: "Creative Cloud Spaces (private beta)",
      description: "Creative Cloud Spaces (private beta)",
      image: "43760773-fd50-473c-8560-bfa974c6868c_thumb.png",
      conversation_type: [
        "conversation",
        "idea",
        "question"
      ],
      topicsCount: 9
    },
    {
      id: 609,
      name: "Digital Editions",
      description: "A community for Digital Editions users.",
      image: "9c496eb5-03fe-4ce6-930b-a8d1b77cd032_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 25095
    },
    {
      id: 612,
      name: "Dimension",
      description: "Dimension",
      image: "05570dd1-2c26-43a3-a8c5-b27c44146be4_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 2127
    },
    {
      id: 615,
      name: "Download & Install",
      description: "Solve Creative Cloud & Elements download errors.",
      image: "e12ec49f-9445-49ce-8161-b08415c0ab6c_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 121658
    },
    {
      id: 618,
      name: "Dreamweaver",
      description: "For all things Dreamweaver.",
      image: "20d35b44-be8d-4abc-ab39-d62ee2d10a05_thumb.png",
      conversation_type: [
        "conversation",
        "question"
      ],
      topicsCount: 21354
    },
    {
      id: 622,
      name: "Enterprise & Teams",
      description: "All things Enterprise & Teams.",
      image: "8773b29b-d566-446b-b302-38ba2009ecdc_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 12057
    },
    {
      id: 625,
      name: "Exchange",
      description: "Join our global community of Adobe Exchange developers.",
      image: "46c33f32-b345-44d7-9529-5b1855e58409_thumb.png",
      conversation_type: [
        "conversation",
        "question"
      ],
      topicsCount: 855
    },
    {
      id: 630,
      name: "Experience Cloud Community",
      description: "Experience Cloud Community",
      image: "f19d84c3-c386-44c0-8f34-6bd1d9f57653_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 13
    },
    {
      id: 633,
      name: "Fireworks",
      description: "Learn and get help from the Fireworks community.",
      image: "48f8933e-b2b8-4f80-bacd-7e8ec17a2e95_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 400
    },
    {
      id: 636,
      name: "Flash Player (read-only)",
      description: "Join a global community of Flash Player users.",
      image: "6989698b-0482-4ed2-a131-d8fb575760ad_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 46042
    },
    {
      id: 639,
      name: "Flex (read-only)",
      description: "-",
      image: "ad4e98f5-c651-436e-96b4-1dfc8cfafa7c_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 3328
    },
    {
      id: 641,
      name: "FrameMaker",
      description: "The official community for FrameMaker.",
      image: "69a07b3c-9b2f-4068-8c91-1d5d5a69ff45_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 14743
    },
    {
      id: 644,
      name: "Fresco",
      description: "Share your work and connect with the Fresco community.",
      image: "dc76066e-7d06-4912-a34b-502195dd1ad9_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 3247
    },
    {
      id: 647,
      name: "Holding Room",
      description: "Where Expert mods send content to be deleted.",
      image: "f893c21e-a31d-44ff-93a1-09828147d64a_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 1191
    },
    {
      id: 650,
      name: "Illustrator",
      description: "Join our Illustrator community. All skill levels welcome!",
      image: "e257692b-f819-4fac-a67e-47f6ac526f61_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 65036
    },
    {
      id: 653,
      name: "Illustrator (Beta)",
      description: "Illustrator (Beta)",
      image: "16c94d1e-fa3d-4a27-82be-b40df1b707bc_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 350
    },
    {
      id: 658,
      name: "Illustrator on the iPad",
      description: "A community for Illustrator on the iPad users.",
      image: "95621230-0fd7-454a-8f6d-c7599c675c8e_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 780
    },
    {
      id: 661,
      name: "Illustrator on the web (beta)",
      description: "Illustrator on the web (beta)",
      image: "5e22d3c2-2ffd-4253-8e27-902ba4820b79_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 211
    },
    {
      id: 666,
      name: "InCopy",
      description: "A community for InCopy users.",
      image: "f349a7df-5703-4c76-bab3-75365e24fd67_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 573
    },
    {
      id: 669,
      name: "InDesign",
      description: "Join a global community of InDesign users.",
      image: "1e58226b-ad35-485c-bcae-38fa1342dfe4_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 76184
    },
    {
      id: 672,
      name: "Lightroom Classic",
      description: "Connect with fellow editors in our Lr Classic community.",
      image: "746c3850-455f-4319-9a69-06906b47956f_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 64987
    },
    {
      id: 677,
      name: "Lightroom ecosystem (Cloud-based)",
      description: "Get the most out of Lightroom with our community.",
      image: "f892ff7c-8200-4285-a2b1-d00080938616_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 27050
    },
    {
      id: 682,
      name: "Lightroom Mobile (Early Access)",
      description: "Lightroom Mobile (Early Access)",
      image: "5e3dab70-b8fa-407a-9510-56953ecc2b95_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 16
    },
    {
      id: 687,
      name: "Lightroom Web (Early Access)",
      description: "Lightroom Web (Early Access)",
      image: "0389db09-3fb6-477c-80c3-213a3b430fb7_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 3
    },
    {
      id: 692,
      name: "Media Server (read-only)",
      description: "The official Adobe Media Server community.",
      image: "2ceffe62-1544-403f-8f1a-4fa7e4c00ff3_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 7145
    },
    {
      id: 694,
      name: "Mixamo",
      description: "Get animated in the Mixamo Community.",
      image: "c91f4ff3-4164-40b6-9cb5-42706068c91b_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 886
    },
    {
      id: 697,
      name: "Photoshop (Beta)",
      description: "Photoshop (Beta)",
      image: "05eccf40-f69e-40ab-a62a-0137d2ec00d0_thumb.png",
      conversation_type: [
        "conversation",
        "question"
      ],
      topicsCount: 4273
    },
    {
      id: 704,
      name: "Photoshop Developers",
      description: "Join our global community of Photoshop developers.",
      image: "3a3c9b05-4307-4a78-9384-e10dd4d54f63_thumb.png",
      conversation_type: [
        "conversation",
        "question"
      ],
      topicsCount: 190
    },
    {
      id: 709,
      name: "Photoshop ecosystem",
      description: "Master Photoshop with the help of our global community.",
      image: "63179268-2190-4e4b-a1f0-3ed3cb5ec76f_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 130792
    },
    {
      id: 714,
      name: "Photoshop Elements",
      description: "Connect with our global Photoshop Elements Community.",
      image: "ddaf8b2b-b40a-41c6-9b92-018ec2686f91_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 23082
    },
    {
      id: 717,
      name: "Photoshop Express",
      description: "Connect with the official Photoshop Express community.",
      image: "dc3c4497-ca65-4fe9-839b-b3bbe52e1c66_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 558
    },
    {
      id: 720,
      name: "PostScript",
      description: "A community for PostScript users.",
      image: "012054f5-dbec-4a4a-9582-beb2e2eaeeef_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 388
    },
    {
      id: 723,
      name: "Premiere Elements",
      description: "Join our Premiere Elements community for tips & help.",
      image: "d86a67b9-f035-4a51-a5b6-4fbb2f423366_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 8632
    },
    {
      id: 726,
      name: "Adobe Premiere",
      description: "Adobe Premiere community: Connect, Learn, Feedback, Help.",
      image: "c670f908-3c95-4736-8284-564c24a6603d_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 101039
    },
    {
      id: 731,
      name: "Premiere (Beta)",
      description: "Premiere (Beta)",
      image: "4f6678d4-0735-480d-9722-0528b638986f_thumb.png",
      conversation_type: [
        "conversation",
        "question"
      ],
      topicsCount: 4118
    },
    {
      id: 735,
      name: "Premiere Rush",
      description: "Get answers to your video editing questions.",
      image: "f51c6ddf-bf36-442b-a30a-3ab75183dd09_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 6725
    },
    {
      id: 738,
      name: "Project Neo (beta)",
      description: "Neo is a web-based platform that simplifies the creation of dimensional logos, icons and infographics, eliminating the need to make manual calculations to draw in the right perspective. Neo’s intuitive interface speeds graphic design work in a familiar workflow, making it easy for designers to bring dimension into their projects effortlessly.",
      image: "9706fb46-f375-4e3e-aa0d-407b19c1e857_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 73
    },
    {
      id: 743,
      name: "Project Squirrel Web Private Beta",
      description: "Project Squirrel Web Private Beta",
      image: "c6fa298d-50a3-4c4d-bbb4-80ea8bc6123d_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 0
    },
    {
      id: 748,
      name: "RoboHelp",
      description: "The official community for RoboHelp.",
      image: "a0edb8a2-4c9b-4910-9ed4-dd038c576d08_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 25794
    },
    {
      id: 751,
      name: "Spark",
      description: "A community for Spark Page and Video on iOS22 users.",
      image: "823dd42e-a4a3-494a-921c-1ce86138b128_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 49
    },
    {
      id: 330,
      name: "KO Abuse Reports",
      description: "KO Abuse Reports",
      image: "539d2114-c925-4016-8fad-d977c071ef7b_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 379
    },
    {
      id: 333,
      name: "계정, 결제 및 플랜",
      description: "Adobe 계정, 결제 또는 플랜에 대해 질문이 있으신가요? 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "a7e940d5-4c2e-4402-970e-ed535e1a359a_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 5836
    },
    {
      id: 336,
      name: "Acrobat 게시판",
      description: "Adobe Acrobat 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "8e83e4df-7bea-4871-b8b2-200293f11f38_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 795
    },
    {
      id: 339,
      name: "Acrobat Reader 게시판",
      description: "Adobe Acrobat Reader 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "e1e84141-eea4-4abe-b8be-d28f21c84b0a_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 105
    },
    {
      id: 342,
      name: "Adobe Express 게시판",
      description: "Adobe Express (Korean)",
      image: "576283d2-6fad-4b6f-bc7a-3c681d806e1a_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 89
    },
    {
      id: 345,
      name: "Adobe Scan 게시판",
      description: "Adobe Scan 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "c5239fec-0f0d-4465-8be1-6711bd9997f5_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 6
    },
    {
      id: 348,
      name: "After Effects 게시판",
      description: "Adobe After Effects 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "151a4ccf-585b-455f-b12b-bc3729ac6a95_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 826
    },
    {
      id: 351,
      name: "Animate 게시판",
      description: "Adobe Animate 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "36452f95-6b19-4bf2-bac3-843991f9dee3_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 89
    },
    {
      id: 354,
      name: "Audition 게시판",
      description: "Adobe Audition 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "57537eb6-f852-4d8b-bf41-8fa4f1cd77cf_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 33
    },
    {
      id: 358,
      name: "Bridge 게시판",
      description: "Adobe Bridge 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "dbe60818-605b-4007-9cfd-bee1fdddf4b5_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 97
    },
    {
      id: 367,
      name: "Camera Raw 게시판",
      description: "Adobe Camera Raw 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "27892e9d-b7a8-4d34-bd6b-0a762dbb545f_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 40
    },
    {
      id: 370,
      name: "Creative Cloud 게시판",
      description: "Adobe의 Creative Cloud 서비스에 대해 질문이 있으신가요? 저희가 도와드리겠습니다. 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "e0c01154-786c-4b94-bcf5-603c93898d0d_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 963
    },
    {
      id: 373,
      name: "Character Animator 게시판",
      description: "Adobe Character Animator 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "8d2dc6ea-9821-4dd7-8880-e69dc7d5b109_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 23
    },
    {
      id: 376,
      name: "커뮤니티 사용 게시판",
      description: "어도비 커뮤니티에 대한 피드백과 질문을 공유해주세요.",
      image: "988fadb0-174e-4a8f-a4d7-d2e57751a416_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 136
    },
    {
      id: 381,
      name: "Dimension 게시판",
      description: "Adobe Dimension 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "f830b460-f351-4a3a-9a26-96034d55ae54_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 21
    },
    {
      id: 384,
      name: "다운로드 및 설치 게시판",
      description: "Adobe 앱 다운로드 및 설치에 대해 질문이 있으신가요? 저희가 도와드리겠습니다. 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "e8090024-4945-4066-9180-c17ba15d08c4_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 429
    },
    {
      id: 387,
      name: "Adobe Fonts 게시판",
      description: "Adobe Fonts 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "0b1d6464-dc55-4eaf-a48a-c8e8f9423486_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 153
    },
    {
      id: 390,
      name: "Fresco 게시판",
      description: "Adobe Fresco 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "4ad42ea4-6878-4650-b3c2-5fc6a79f0a68_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 75
    },
    {
      id: 393,
      name: "Illustrator 게시판",
      description: "Adobe Illustrator 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "167e39ce-1d21-4a88-b9a2-8f00a9b85555_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 1789
    },
    {
      id: 397,
      name: "Illustrator on the web (베타)",
      description: "Illustrator on the web (베타)",
      image: "dba14892-02ce-4e31-8868-b8a4250a0f69_thumb.png",
      conversation_type: [
        "conversation",
        "question",
        "idea"
      ],
      topicsCount: 0
    },
    {
      id: 406,
      name: "InDesign 게시판",
      description: "Adobe InDesign 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "99015114-e2d2-47cc-b80d-ce0fd9cf2b85_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 469
    },
    {
      id: 409,
      name: "Lightroom 게시판",
      description: "Adobe Lightroom 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "920229d7-0a4f-4347-acc0-41ae24451efe_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 261
    },
    {
      id: 412,
      name: "Lightroom Classic 게시판",
      description: "Adobe Lightroom Classic 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "e3139ed9-46fa-4156-9ad5-35260f7d2b21_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 257
    },
    {
      id: 415,
      name: "Media Encoder 게시판",
      description: "Adobe Media Encoder 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "1f538a3a-e738-4552-8027-fe26b830193b_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 85
    },
    {
      id: 418,
      name: "Mixamo 게시판",
      description: "Adobe Mixamo 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "73da795e-508b-43b2-9c15-a703573387c5_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 7
    },
    {
      id: 421,
      name: "Photoshop 게시판",
      description: "Adobe Photoshop 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "c1cf11fe-7557-4cba-ba78-ccdea877211f_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 2714
    },
    {
      id: 424,
      name: "Photoshop Camera 게시판",
      description: "Adobe Photoshop Camera 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "97dfbd4a-ed20-444f-a705-077d170d76df_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 4
    },
    {
      id: 427,
      name: "Photoshop Express 게시판",
      description: "Adobe Photoshop Express 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "8e56bfcb-3510-4b43-9ef4-9ef6ed66d658_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 28
    },
    {
      id: 430,
      name: "Premiere Pro 게시판",
      description: "Adobe Premiere Pro 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "969593fa-5693-4e3c-8f41-883d607b1301_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 2713
    },
    {
      id: 434,
      name: "Premiere Rush 게시판",
      description: "Adobe Premiere Rush 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "de52528a-af7c-461d-b711-3889b24dad3d_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 65
    },
    {
      id: 439,
      name: "Stock 게시판",
      description: "Adobe Stock 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "2fe69d24-49a1-40b9-b7af-e0d90f5f2230_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 246
    },
    {
      id: 442,
      name: "Stock Contributor 게시판",
      description: "Adobe Stock Contributor 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "11d214b5-ff18-4f0a-84bb-c2d950d3c990_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 55
    },
    {
      id: 445,
      name: "Substance 3D Assets 및 커뮤니티 에셋 게시판",
      description: "3D 에셋 또는 커뮤니티 에셋에 대해 질문이 있으신가요? 저희가 도와드리겠습니다. 질문을 올리고, 토론하고, 지식을 공유하고, 전문가로부터 배워 보세요.",
      image: "ba519bb4-acc2-4fcd-ab32-c7bd8cec0491_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 13
    },
    {
      id: 448,
      name: "Substance 3D Designer 게시판",
      description: "Adobe Substance 3D Designer 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "162008e1-c7f6-4158-9e1f-d3d316a0290b_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 5
    },
    {
      id: 451,
      name: "Substance 3D Painter 게시판",
      description: "Adobe Substance 3D Painter 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "d865ad36-d5d3-4aa3-8e48-391a54c960cd_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 104
    },
    {
      id: 454,
      name: "Substance 3D 플러그인 게시판",
      description: "Adobe Substance 3D 플러그인 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "0f550fe8-d08e-4b97-a4dc-23be18006df8_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 0
    },
    {
      id: 457,
      name: "Substance 3D Sampler 게시판",
      description: "Adobe Substance 3D Sampler 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "fcb35491-91f2-414a-afef-1c8fd608f6d3_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 5
    },
    {
      id: 460,
      name: "Substance 3D Stager 게시판",
      description: "Adobe Substance 3D Stager 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "9b67b7ba-4682-4ebf-aaae-f3ef8276c6f0_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 6
    },
    {
      id: 463,
      name: "Testing Feedback KO",
      description: "Testing Feedback KO",
      image: "5696b7c5-e7bc-4965-85fc-249a164068b8_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 167
    },
    {
      id: 467,
      name: "글꼴 및 타이포그래피",
      description: "Adobe Fonts 또는 타이포그래피에 대해 질문이 있으신가요? 저희가 도와드리겠습니다. 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "89b4950f-8d0d-4a94-89bd-3df0398dc2aa_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 10
    },
    {
      id: 472,
      name: "Adobe XD 게시판",
      description: "Adobe XD 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "9434c2b3-ff60-4c2d-a318-6d9e823b1141_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 199
    },
    {
      id: 475,
      name: "Adobe Acrobat Sign 게시판",
      description: "Adobe Acrobat Sign 커뮤니티에 물어보세요. 저희가 도와드리겠습니다! 질문을 올리고, 토론하고, 팁을 공유해보세요.",
      image: "8c4df535-b559-4f8e-b345-a6629b3a99f9_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 2
    },
    {
      id: 478,
      name: "Project Spice",
      description: "Project Spice",
      image: "8b11b92c-129c-40b6-997b-cb8e4a8c5d39_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 0
    },
    {
      id: 483,
      name: "Korea Back Room",
      description: "Korea Back Room",
      image: "07a90028-7270-4a31-a5f6-72eeb6ba3604_thumb.png",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 5
    },
    {
      id: 801,
      name: "Test Community - Created for Demo Purposes Only",
      description: "Test Community - Created for Demo Purposes Only",
      image: "6bfa040b-c328-474e-8558-40b67bfc0290_thumb.jpg",
      conversation_type: [
        "question",
        "conversation",
        "idea"
      ],
      topicsCount: 1
    },
    {
      id: 820,
      name: "Adobe Creative Educator フォーラム",
      description: "Adobe Creative Educator フォーラム",
      image: "88ebb337-4520-4c9a-8e89-b82c531d6630_thumb.png",
      conversation_type: [
        "question"
      ],
      topicsCount: 0
    }
  ]
}, mo = c1.categories, Xu = [
  10,
  100,
  1e3,
  2e3,
  3e3,
  4e3,
  5e3,
  1e4,
  25e3,
  5e4,
  1e5,
  2e5,
  5e5,
  1e6
];
function o1(C) {
  if (C < Xu[0])
    return 0;
  for (let R = Xu.length - 1; R >= 0; R--)
    if (Xu[R] <= C)
      return Xu[R];
  return 0;
}
function f1(C, R = "en-US") {
  return o1(C).toLocaleString(R ? R.replace("_", "-") : "en-US");
}
function s1({ category: C, showThumbnail: R, onSelect: G, isSelected: b, showTopicCounts: it }) {
  var st;
  const ct = ((st = window.inSidedData) == null ? void 0 : st.language) || "en-US", bt = f1(C.topicsCount, ct);
  return /* @__PURE__ */ X.jsxs(
    "button",
    {
      className: `category-card ${b ? "selected" : ""}`,
      onClick: () => G == null ? void 0 : G({ id: C.id, name: C.name }),
      type: "button",
      children: [
        R && C.image && /* @__PURE__ */ X.jsx("div", { className: "category-thumbnail", children: /* @__PURE__ */ X.jsx(
          "img",
          {
            src: "https://uploads-us-west-2.insided.com/adobedme-en/attachment/" + C.image,
            alt: C.name,
            loading: "lazy",
            onError: (O) => {
              O.currentTarget.style.display = "none";
            }
          }
        ) }),
        /* @__PURE__ */ X.jsxs("div", { className: "category-content", children: [
          /* @__PURE__ */ X.jsx("h3", { className: "category-name", children: C.name }),
          C.description && /* @__PURE__ */ X.jsx("p", { className: "category-description", children: C.description }),
          it && /* @__PURE__ */ X.jsxs("span", { className: "category-topics-count", children: [
            bt + "+",
            /* @__PURE__ */ X.jsxs("span", { className: "topics-label", children: [
              " ",
              C.topicsCount === 1 ? "topic" : "topics"
            ] })
          ] })
        ] })
      ]
    },
    C.id
  );
}
function d1({
  columns: C = 5,
  sortBy: R = "name",
  maxItems: G,
  showThumbnails: b = !1,
  emptyMessage: it = "No categories available",
  categories: ct,
  onSelect: bt,
  selectedId: st,
  showTopicCounts: O
}) {
  const A = Xa.useMemo(() => {
    const q = [...ct || mo];
    return R === "name" ? q.sort((k, pt) => k.name.localeCompare(pt.name)) : R === "topicsCount" ? q.sort((k, pt) => pt.topicsCount - k.topicsCount) : R === "name_reverse" && q.sort((k, pt) => pt.name.localeCompare(k.name)), G ? q.slice(0, G) : q;
  }, [R, G, ct]);
  return A.length === 0 ? /* @__PURE__ */ X.jsx("div", { className: "category-list-empty", children: /* @__PURE__ */ X.jsx("p", { children: it }) }) : /* @__PURE__ */ X.jsx(
    "div",
    {
      className: "categories-grid",
      style: {
        "grid-template-columns": `repeat(${C}, 1fr)`
      },
      children: A.map((Q) => /* @__PURE__ */ X.jsx(
        s1,
        {
          category: Q,
          showThumbnail: b,
          onSelect: bt,
          isSelected: st === Q.id,
          showTopicCounts: O
        },
        Q.id
      ))
    }
  );
}
function m1(C) {
  switch (C) {
    case "conversation":
      return "bug";
    case "idea":
      return "feature";
    case "question":
      return "question";
    default:
      return "question";
  }
}
function r1({ sdk: C }) {
  const [R, G] = Xa.useState(C.getProps()), [b, it] = Xa.useState(), [ct, bt] = Xa.useState("topicsCount"), [st, O] = Xa.useState(""), A = Xa.useMemo(() => {
    var ce;
    const k = (((ce = window.inSidedData) == null ? void 0 : ce.language) || "en").substring(0, 2), pt = (categorySectionMap == null ? void 0 : categorySectionMap[k]) || (categorySectionMap == null ? void 0 : categorySectionMap.en) || {}, qt = /* @__PURE__ */ new Set();
    Object.values(pt).forEach((ht) => {
      ht.forEach((Xt) => qt.add(Xt));
    });
    let yt = mo.filter(
      (ht) => qt.has(ht.name)
    );
    if (yt = yt.filter(
      (ht) => ht.conversation_type.some((Xt) => R.conversation_type === Xt)
    ), st.trim()) {
      const ht = st.toLowerCase();
      yt = yt.filter(
        (Xt) => Xt.name.toLowerCase().includes(ht)
      );
    }
    return yt;
  }, [st, R]);
  Xa.useEffect(() => C.on("propsChanged", G), [C]);
  const Q = () => {
    if (!b) return;
    const q = mo.find((qt) => qt.id === b.id);
    if (!q) return;
    const pt = `/p/new-${m1(R.conversation_type)}?community=${encodeURIComponent(q.name)}`;
    window.location.href = pt;
  };
  return /* @__PURE__ */ X.jsx(X.Fragment, { children: /* @__PURE__ */ X.jsxs("section", { className: "community-selector-widget", children: [
    R.title && /* @__PURE__ */ X.jsx("h1", { className: "page-title", children: R.title }),
    /* @__PURE__ */ X.jsxs("div", { className: "widget-content-wrapper", children: [
      /* @__PURE__ */ X.jsxs("div", { className: "widget-content-header", children: [
        /* @__PURE__ */ X.jsx("h2", { className: "widget-content-title", children: R.custom_title }),
        /* @__PURE__ */ X.jsx("p", { children: R.custom_description })
      ] }),
      /* @__PURE__ */ X.jsxs("div", { className: "widget-controls", children: [
        /* @__PURE__ */ X.jsxs("div", { className: "searchWrapper", children: [
          /* @__PURE__ */ X.jsx("span", { className: "search-icon", children: /* @__PURE__ */ X.jsx("svg", { width: "16", height: "16", viewBox: "0 0 20 20", fill: "#6e6e6e", children: /* @__PURE__ */ X.jsx("path", { d: "m18.53 17.47-5.083-5.084C14.417 11.186 15 9.66 15 8c0-3.86-3.14-7-7-7S1 4.14 1 8s3.14 7 7 7c1.66 0 3.185-.584 4.386-1.553l5.084 5.083c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.767 0-1.06M8 13.5c-3.032 0-5.5-2.468-5.5-5.5S4.968 2.5 8 2.5s5.5 2.468 5.5 5.5-2.468 5.5-5.5 5.5" }) }) }),
          /* @__PURE__ */ X.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search communities",
              value: st,
              onChange: (q) => O(q.target.value),
              className: "search-input"
            }
          )
        ] }),
        /* @__PURE__ */ X.jsx("div", { className: "sort-selector", children: /* @__PURE__ */ X.jsxs(
          "select",
          {
            id: "sort-dropdown",
            value: ct,
            onChange: (q) => bt(q.target.value),
            children: [
              /* @__PURE__ */ X.jsx("option", { value: "topicsCount", children: "Popular" }),
              /* @__PURE__ */ X.jsx("option", { value: "name", children: "Alphabetical (A-Z)" }),
              /* @__PURE__ */ X.jsx("option", { value: "name_reverse", children: "Alphabetical (Z-A)" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ X.jsx("div", { className: "categories-container", children: /* @__PURE__ */ X.jsx(
        d1,
        {
          categories: A,
          showThumbnails: !0,
          sortBy: ct,
          emptyMessage: "No communities found",
          onSelect: it,
          selectedId: b == null ? void 0 : b.id,
          columns: R.row_size,
          showTopicCounts: R.showTopicsCount
        }
      ) }),
      /* @__PURE__ */ X.jsxs("div", { className: "widget-footer", children: [
        /* @__PURE__ */ X.jsx("button", { className: "cancel", onClick: () => {
          history.length > 1 ? history.back() : window.location.href = "/";
        }, children: "Cancel" }),
        /* @__PURE__ */ X.jsx("button", { disabled: !b, className: "continue", onClick: Q, children: "Continue" })
      ] }),
      b && /* @__PURE__ */ X.jsx("div", { className: "selected-category-info", children: /* @__PURE__ */ X.jsxs("p", { children: [
        "Selected Category: ",
        /* @__PURE__ */ X.jsx("strong", { children: b.name }),
        " (ID: ",
        b.id,
        ")"
      ] }) })
    ] })
  ] }) });
}
let b1 = I0;
const Tm = /* @__PURE__ */ new Set();
async function p1(C) {
  await C.whenReady();
  const R = document.createElement("style");
  R.textContent = b1, Tm.add(R), C.shadowRoot.insertBefore(R, C.shadowRoot.firstChild);
  const G = i1.createRoot(C.getContainer());
  G.render(/* @__PURE__ */ X.jsx(r1, { sdk: C })), C.on("destroy", () => {
    Tm.delete(R), R.remove(), G.unmount();
  });
}
export {
  p1 as init
};

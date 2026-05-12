var uf = { exports: {} }, pu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0;
function k1() {
  if (g0) return pu;
  g0 = 1;
  var E = Symbol.for("react.transitional.element"), W = Symbol.for("react.fragment");
  function G(y, il, ol) {
    var hl = null;
    if (ol !== void 0 && (hl = "" + ol), il.key !== void 0 && (hl = "" + il.key), "key" in il) {
      ol = {};
      for (var rl in il)
        rl !== "key" && (ol[rl] = il[rl]);
    } else ol = il;
    return il = ol.ref, {
      $$typeof: E,
      type: y,
      key: hl,
      ref: il !== void 0 ? il : null,
      props: ol
    };
  }
  return pu.Fragment = W, pu.jsx = G, pu.jsxs = G, pu;
}
var y0;
function $1() {
  return y0 || (y0 = 1, uf.exports = k1()), uf.exports;
}
var V = $1();
const F1 = ".community-selector-widget{font-family:Adobe Clean,adobe-clean,Trebuchet MS,sans-serif;background-color:#f5f5f5;padding:40px;display:flex;flex-direction:column}.widget-title{margin:0 0 20px;padding-left:32px;color:#131313;font-size:28px;font-weight:800;line-height:32px}.widget-content-wrapper{background:#fff;border-radius:12px;border:1px dashed #d0d0d0;padding:32px;width:66.667%;min-width:400px;display:flex;flex-direction:column;overflow:hidden}.widget-content-wrapper .widget-content-header h2{color:#000;font-size:20px;font-weight:800;line-height:130%;margin:0 0 8px}.widget-content-wrapper .widget-content-header p{color:#000;font-size:16px;font-weight:400;line-height:150%;margin:0 0 20px}.widget-controls{display:flex;flex-direction:row;gap:8px;align-items:center;flex-wrap:nowrap;margin-bottom:16px}.widget-controls .searchWrapper{position:relative;flex-grow:1;min-width:180px}.widget-controls .searchWrapper .search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);pointer-events:none;display:flex;align-items:center}.widget-controls .searchWrapper .search-input{width:100%;padding:8px 12px 8px 36px;border:1px solid #d0d0d0;border-radius:6px;font-size:14px;font-family:inherit;outline:none;color:#1d1d1d;background:#fff;height:40px}.widget-controls .sort-selector>select{font-size:13px;color:#1d1d1d;background:#fff;border:1px solid #d0d0d0;border-radius:6px;padding:8px 28px 8px 10px;cursor:pointer;-moz-appearance:none;appearance:none;-webkit-appearance:none;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%27http://www.w3.org/2000/svg%27%20width%3D%2712%27%20height%3D%278%27%20viewBox%3D%270%200%2012%208%27%3E%3Cpath%20d%3D%27M1%201l5%205%205-5%27%20stroke%3D%27%23555%27%20stroke-width%3D%271.5%27%20fill%3D%27none%27%20stroke-linecap%3D%27round%27/%3E%3C/svg%3E);background-repeat:no-repeat;background-position:right 8px center;width:180px;min-width:180px;max-width:180px;flex-shrink:0;font-family:inherit;height:40px}.categories-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px;overflow-y:auto;max-height:400px;padding:4px 0}.category-card{display:flex;flex-direction:row;align-items:center;gap:10px;padding:10px 12px;border:1px solid transparent;border-radius:8px;cursor:pointer;background:none;text-align:left;font-family:inherit;transition:background .12s,border-color .12s;width:100%}.category-card.selected{background:#e8f0fe;border-color:#1473e6}.category-card:hover{background:#f5f5f5;border-color:#e0e0e0}.category-thumbnail{flex-shrink:0;display:block}.category-thumbnail>img{width:32px;height:32px;min-width:32px;min-height:32px;border-radius:6px}.category-content{display:flex;flex-direction:column;gap:2px;min-width:0}.category-description{display:none}.category-name{font-size:13px;font-weight:500;color:#1d1d1d;line-height:1.3;display:block}.category-topics-count{font-size:11px;color:#959595;line-height:1.3;display:block}.widget-footer{border-top:1px solid #e0e0e0;display:flex;flex-direction:row;justify-content:flex-end;gap:12px;padding-top:20px;margin-top:20px}.widget-footer button{padding:8px 20px;border-radius:20px;font-family:inherit;font-size:14px;font-weight:500;cursor:pointer;border:1px solid #d0d0d0;transition:background .12s;display:inline-block}.widget-footer button.cancel{background:#fff;color:#1d1d1d}.widget-footer button.continue:disabled{background:#e8e8e8;color:#999;border-color:#e0e0e0}.widget-footer button.continue:not(:disabled){background:#1d1d1d;color:#fff;border-color:#1d1d1d;cursor:pointer}.react-widget-section{padding:2rem;font-family:Inter,system-ui,-apple-system,sans-serif;border-radius:12px;background:var(--config--main-color-background, #ffffff);color:var(--config--main-color-text, #1e1e2e);box-sizing:border-box;display:flex;flex-direction:column;gap:1.5rem}.react-widget-title{margin:0;font-size:1.5rem;font-weight:700;letter-spacing:-.015em;color:var(--config--main-color-brand, #2563eb)}.react-widget-description{margin:0;font-size:.95rem;line-height:1.6;color:var(--config--main-color-text-secondary, #6b7280)}.view-mode-selector{display:flex;gap:.5rem;background:var(--config--main-color-background-secondary, #f9fafb);padding:.25rem;border-radius:6px;border:1px solid var(--config--main-color-border, #e5e7eb)}.mode-button{padding:.5rem 1rem;background:transparent;border:none;border-radius:4px;cursor:pointer;font-size:.85rem;font-weight:500;color:var(--config--main-color-text-secondary, #6b7280);transition:all .2s ease}.mode-button:hover{background:var(--config--main-color-background, #ffffff);color:var(--config--main-color-text, #1e1e2e)}.mode-button.active{background:var(--config--main-color-brand, #2563eb);color:#fff}.selected-category-info{padding:1rem;background:var(--config--main-color-background-secondary, #f0f9ff);border-left:4px solid var(--config--main-color-brand, #2563eb);border-radius:4px;margin-top:1rem}.selected-category-info p{margin:0;font-size:.9rem;color:var(--config--main-color-text, #1e1e2e)}@media(max-width:768px){.react-widget-section{padding:1rem}.react-widget-title{font-size:1.25rem}.view-mode-selector{flex-wrap:wrap}.mode-button{padding:.4rem .8rem;font-size:.8rem}}.category-list{width:100%;padding:1rem 0}.category-list-container{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;width:100%}.category-list-empty{display:flex;align-items:center;justify-content:center;padding:2rem;color:var(--config--main-color-text-secondary, #6b7280);font-style:italic;background:var(--config--main-color-background-secondary, #f9fafb);border-radius:8px}.category-grid{display:grid;grid-template-columns:repeat(var(--grid-columns, 3),1fr);gap:1.5rem}@media(max-width:768px){.category-list-container{gap:1rem}.category-grid{grid-template-columns:repeat(auto-fill,minmax(250px,1fr))}}@media(max-width:480px){.category-list-container,.category-grid{grid-template-columns:1fr}.category-thumbnail{height:120px}.category-content{padding:1rem}.category-name{font-size:1rem}.category-description{font-size:.8rem}}.category-selector{width:100%}.category-selector-list{display:flex;flex-direction:column;gap:.5rem}.category-selector-item{display:flex;align-items:center;justify-content:space-between;padding:.75rem 1rem;background:var(--config--main-color-background, #ffffff);border:2px solid var(--config--main-color-border, #e5e7eb);border-radius:6px;cursor:pointer;transition:all .2s ease;font-size:.95rem;color:var(--config--main-color-text, #1f2937)}.category-selector-item:hover{border-color:var(--config--main-color-brand, #2563eb);background-color:var(--config--main-color-background-secondary, #f9fafb)}.category-selector-item.selected{background-color:var(--config--main-color-brand, #2563eb);border-color:var(--config--main-color-brand, #2563eb);color:#fff}.selector-content{display:flex;align-items:center;justify-content:space-between;width:100%;gap:1rem}.selector-name{font-weight:500}.selector-count{padding:.25rem .5rem;background:#0000001a;border-radius:4px;font-size:.85rem;font-weight:600}.category-selector-item.selected .selector-count{background:#ffffff4d}";
var nf = { exports: {} }, Su = {}, cf = { exports: {} }, ff = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h0;
function I1() {
  return h0 || (h0 = 1, (function(E) {
    function W(b, _) {
      var H = b.length;
      b.push(_);
      l: for (; 0 < H; ) {
        var al = H - 1 >>> 1, cl = b[al];
        if (0 < il(cl, _))
          b[al] = _, b[H] = cl, H = al;
        else break l;
      }
    }
    function G(b) {
      return b.length === 0 ? null : b[0];
    }
    function y(b) {
      if (b.length === 0) return null;
      var _ = b[0], H = b.pop();
      if (H !== _) {
        b[0] = H;
        l: for (var al = 0, cl = b.length, d = cl >>> 1; al < d; ) {
          var A = 2 * (al + 1) - 1, T = b[A], D = A + 1, B = b[D];
          if (0 > il(T, H))
            D < cl && 0 > il(B, T) ? (b[al] = B, b[D] = H, al = D) : (b[al] = T, b[A] = H, al = A);
          else if (D < cl && 0 > il(B, H))
            b[al] = B, b[D] = H, al = D;
          else break l;
        }
      }
      return _;
    }
    function il(b, _) {
      var H = b.sortIndex - _.sortIndex;
      return H !== 0 ? H : b.id - _.id;
    }
    if (E.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ol = performance;
      E.unstable_now = function() {
        return ol.now();
      };
    } else {
      var hl = Date, rl = hl.now();
      E.unstable_now = function() {
        return hl.now() - rl;
      };
    }
    var O = [], z = [], Y = 1, U = null, k = 3, Ol = !1, Tl = !1, Cl = !1, jl = !1, Ul = typeof setTimeout == "function" ? setTimeout : null, Wt = typeof clearTimeout == "function" ? clearTimeout : null, ql = typeof setImmediate < "u" ? setImmediate : null;
    function ct(b) {
      for (var _ = G(z); _ !== null; ) {
        if (_.callback === null) y(z);
        else if (_.startTime <= b)
          y(z), _.sortIndex = _.expirationTime, W(O, _);
        else break;
        _ = G(z);
      }
    }
    function zt(b) {
      if (Cl = !1, ct(b), !Tl)
        if (G(O) !== null)
          Tl = !0, Ql || (Ql = !0, Vl());
        else {
          var _ = G(z);
          _ !== null && bt(zt, _.startTime - b);
        }
    }
    var Ql = !1, J = -1, Zl = 5, Et = -1;
    function Qa() {
      return jl ? !0 : !(E.unstable_now() - Et < Zl);
    }
    function _t() {
      if (jl = !1, Ql) {
        var b = E.unstable_now();
        Et = b;
        var _ = !0;
        try {
          l: {
            Tl = !1, Cl && (Cl = !1, Wt(J), J = -1), Ol = !0;
            var H = k;
            try {
              t: {
                for (ct(b), U = G(O); U !== null && !(U.expirationTime > b && Qa()); ) {
                  var al = U.callback;
                  if (typeof al == "function") {
                    U.callback = null, k = U.priorityLevel;
                    var cl = al(
                      U.expirationTime <= b
                    );
                    if (b = E.unstable_now(), typeof cl == "function") {
                      U.callback = cl, ct(b), _ = !0;
                      break t;
                    }
                    U === G(O) && y(O), ct(b);
                  } else y(O);
                  U = G(O);
                }
                if (U !== null) _ = !0;
                else {
                  var d = G(z);
                  d !== null && bt(
                    zt,
                    d.startTime - b
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              U = null, k = H, Ol = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Vl() : Ql = !1;
        }
      }
    }
    var Vl;
    if (typeof ql == "function")
      Vl = function() {
        ql(_t);
      };
    else if (typeof MessageChannel < "u") {
      var Sa = new MessageChannel(), Ot = Sa.port2;
      Sa.port1.onmessage = _t, Vl = function() {
        Ot.postMessage(null);
      };
    } else
      Vl = function() {
        Ul(_t, 0);
      };
    function bt(b, _) {
      J = Ul(function() {
        b(E.unstable_now());
      }, _);
    }
    E.unstable_IdlePriority = 5, E.unstable_ImmediatePriority = 1, E.unstable_LowPriority = 4, E.unstable_NormalPriority = 3, E.unstable_Profiling = null, E.unstable_UserBlockingPriority = 2, E.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, E.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Zl = 0 < b ? Math.floor(1e3 / b) : 5;
    }, E.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, E.unstable_next = function(b) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = k;
      }
      var H = k;
      k = _;
      try {
        return b();
      } finally {
        k = H;
      }
    }, E.unstable_requestPaint = function() {
      jl = !0;
    }, E.unstable_runWithPriority = function(b, _) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var H = k;
      k = b;
      try {
        return _();
      } finally {
        k = H;
      }
    }, E.unstable_scheduleCallback = function(b, _, H) {
      var al = E.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? al + H : al) : H = al, b) {
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
      return cl = H + cl, b = {
        id: Y++,
        callback: _,
        priorityLevel: b,
        startTime: H,
        expirationTime: cl,
        sortIndex: -1
      }, H > al ? (b.sortIndex = H, W(z, b), G(O) === null && b === G(z) && (Cl ? (Wt(J), J = -1) : Cl = !0, bt(zt, H - al))) : (b.sortIndex = cl, W(O, b), Tl || Ol || (Tl = !0, Ql || (Ql = !0, Vl()))), b;
    }, E.unstable_shouldYield = Qa, E.unstable_wrapCallback = function(b) {
      var _ = k;
      return function() {
        var H = k;
        k = _;
        try {
          return b.apply(this, arguments);
        } finally {
          k = H;
        }
      };
    };
  })(ff)), ff;
}
var v0;
function P1() {
  return v0 || (v0 = 1, cf.exports = I1()), cf.exports;
}
var of = { exports: {} }, R = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b0;
function lr() {
  if (b0) return R;
  b0 = 1;
  var E = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), il = Symbol.for("react.profiler"), ol = Symbol.for("react.consumer"), hl = Symbol.for("react.context"), rl = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), k = Symbol.iterator;
  function Ol(d) {
    return d === null || typeof d != "object" ? null : (d = k && d[k] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var Tl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Cl = Object.assign, jl = {};
  function Ul(d, A, T) {
    this.props = d, this.context = A, this.refs = jl, this.updater = T || Tl;
  }
  Ul.prototype.isReactComponent = {}, Ul.prototype.setState = function(d, A) {
    if (typeof d != "object" && typeof d != "function" && d != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, d, A, "setState");
  }, Ul.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function Wt() {
  }
  Wt.prototype = Ul.prototype;
  function ql(d, A, T) {
    this.props = d, this.context = A, this.refs = jl, this.updater = T || Tl;
  }
  var ct = ql.prototype = new Wt();
  ct.constructor = ql, Cl(ct, Ul.prototype), ct.isPureReactComponent = !0;
  var zt = Array.isArray;
  function Ql() {
  }
  var J = { H: null, A: null, T: null, S: null }, Zl = Object.prototype.hasOwnProperty;
  function Et(d, A, T) {
    var D = T.ref;
    return {
      $$typeof: E,
      type: d,
      key: A,
      ref: D !== void 0 ? D : null,
      props: T
    };
  }
  function Qa(d, A) {
    return Et(d.type, A, d.props);
  }
  function _t(d) {
    return typeof d == "object" && d !== null && d.$$typeof === E;
  }
  function Vl(d) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(T) {
      return A[T];
    });
  }
  var Sa = /\/+/g;
  function Ot(d, A) {
    return typeof d == "object" && d !== null && d.key != null ? Vl("" + d.key) : A.toString(36);
  }
  function bt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(Ql, Ql) : (d.status = "pending", d.then(
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
  function b(d, A, T, D, B) {
    var X = typeof d;
    (X === "undefined" || X === "boolean") && (d = null);
    var P = !1;
    if (d === null) P = !0;
    else
      switch (X) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case E:
            case W:
              P = !0;
              break;
            case Y:
              return P = d._init, b(
                P(d._payload),
                A,
                T,
                D,
                B
              );
          }
      }
    if (P)
      return B = B(d), P = D === "" ? "." + Ot(d, 0) : D, zt(B) ? (T = "", P != null && (T = P.replace(Sa, "$&/") + "/"), b(B, A, T, "", function(Ce) {
        return Ce;
      })) : B != null && (_t(B) && (B = Qa(
        B,
        T + (B.key == null || d && d.key === B.key ? "" : ("" + B.key).replace(
          Sa,
          "$&/"
        ) + "/") + P
      )), A.push(B)), 1;
    P = 0;
    var Gl = D === "" ? "." : D + ":";
    if (zt(d))
      for (var vl = 0; vl < d.length; vl++)
        D = d[vl], X = Gl + Ot(D, vl), P += b(
          D,
          A,
          T,
          X,
          B
        );
    else if (vl = Ol(d), typeof vl == "function")
      for (d = vl.call(d), vl = 0; !(D = d.next()).done; )
        D = D.value, X = Gl + Ot(D, vl++), P += b(
          D,
          A,
          T,
          X,
          B
        );
    else if (X === "object") {
      if (typeof d.then == "function")
        return b(
          bt(d),
          A,
          T,
          D,
          B
        );
      throw A = String(d), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function _(d, A, T) {
    if (d == null) return d;
    var D = [], B = 0;
    return b(d, D, "", "", function(X) {
      return A.call(T, X, B++);
    }), D;
  }
  function H(d) {
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
  var al = typeof reportError == "function" ? reportError : function(d) {
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
      if (!_t(d))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return d;
    }
  };
  return R.Activity = U, R.Children = cl, R.Component = Ul, R.Fragment = G, R.Profiler = il, R.PureComponent = ql, R.StrictMode = y, R.Suspense = O, R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, R.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return J.H.useMemoCache(d);
    }
  }, R.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, R.cacheSignal = function() {
    return null;
  }, R.cloneElement = function(d, A, T) {
    if (d == null)
      throw Error(
        "The argument must be a React element, but you passed " + d + "."
      );
    var D = Cl({}, d.props), B = d.key;
    if (A != null)
      for (X in A.key !== void 0 && (B = "" + A.key), A)
        !Zl.call(A, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && A.ref === void 0 || (D[X] = A[X]);
    var X = arguments.length - 2;
    if (X === 1) D.children = T;
    else if (1 < X) {
      for (var P = Array(X), Gl = 0; Gl < X; Gl++)
        P[Gl] = arguments[Gl + 2];
      D.children = P;
    }
    return Et(d.type, B, D);
  }, R.createContext = function(d) {
    return d = {
      $$typeof: hl,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: ol,
      _context: d
    }, d;
  }, R.createElement = function(d, A, T) {
    var D, B = {}, X = null;
    if (A != null)
      for (D in A.key !== void 0 && (X = "" + A.key), A)
        Zl.call(A, D) && D !== "key" && D !== "__self" && D !== "__source" && (B[D] = A[D]);
    var P = arguments.length - 2;
    if (P === 1) B.children = T;
    else if (1 < P) {
      for (var Gl = Array(P), vl = 0; vl < P; vl++)
        Gl[vl] = arguments[vl + 2];
      B.children = Gl;
    }
    if (d && d.defaultProps)
      for (D in P = d.defaultProps, P)
        B[D] === void 0 && (B[D] = P[D]);
    return Et(d, X, B);
  }, R.createRef = function() {
    return { current: null };
  }, R.forwardRef = function(d) {
    return { $$typeof: rl, render: d };
  }, R.isValidElement = _t, R.lazy = function(d) {
    return {
      $$typeof: Y,
      _payload: { _status: -1, _result: d },
      _init: H
    };
  }, R.memo = function(d, A) {
    return {
      $$typeof: z,
      type: d,
      compare: A === void 0 ? null : A
    };
  }, R.startTransition = function(d) {
    var A = J.T, T = {};
    J.T = T;
    try {
      var D = d(), B = J.S;
      B !== null && B(T, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Ql, al);
    } catch (X) {
      al(X);
    } finally {
      A !== null && T.types !== null && (A.types = T.types), J.T = A;
    }
  }, R.unstable_useCacheRefresh = function() {
    return J.H.useCacheRefresh();
  }, R.use = function(d) {
    return J.H.use(d);
  }, R.useActionState = function(d, A, T) {
    return J.H.useActionState(d, A, T);
  }, R.useCallback = function(d, A) {
    return J.H.useCallback(d, A);
  }, R.useContext = function(d) {
    return J.H.useContext(d);
  }, R.useDebugValue = function() {
  }, R.useDeferredValue = function(d, A) {
    return J.H.useDeferredValue(d, A);
  }, R.useEffect = function(d, A) {
    return J.H.useEffect(d, A);
  }, R.useEffectEvent = function(d) {
    return J.H.useEffectEvent(d);
  }, R.useId = function() {
    return J.H.useId();
  }, R.useImperativeHandle = function(d, A, T) {
    return J.H.useImperativeHandle(d, A, T);
  }, R.useInsertionEffect = function(d, A) {
    return J.H.useInsertionEffect(d, A);
  }, R.useLayoutEffect = function(d, A) {
    return J.H.useLayoutEffect(d, A);
  }, R.useMemo = function(d, A) {
    return J.H.useMemo(d, A);
  }, R.useOptimistic = function(d, A) {
    return J.H.useOptimistic(d, A);
  }, R.useReducer = function(d, A, T) {
    return J.H.useReducer(d, A, T);
  }, R.useRef = function(d) {
    return J.H.useRef(d);
  }, R.useState = function(d) {
    return J.H.useState(d);
  }, R.useSyncExternalStore = function(d, A, T) {
    return J.H.useSyncExternalStore(
      d,
      A,
      T
    );
  }, R.useTransition = function() {
    return J.H.useTransition();
  }, R.version = "19.2.5", R;
}
var p0;
function sf() {
  return p0 || (p0 = 1, of.exports = lr()), of.exports;
}
var df = { exports: {} }, Yl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S0;
function tr() {
  if (S0) return Yl;
  S0 = 1;
  var E = sf();
  function W(O) {
    var z = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Y = 2; Y < arguments.length; Y++)
        z += "&args[]=" + encodeURIComponent(arguments[Y]);
    }
    return "Minified React error #" + O + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function G() {
  }
  var y = {
    d: {
      f: G,
      r: function() {
        throw Error(W(522));
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
  }, il = Symbol.for("react.portal");
  function ol(O, z, Y) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: il,
      key: U == null ? null : "" + U,
      children: O,
      containerInfo: z,
      implementation: Y
    };
  }
  var hl = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function rl(O, z) {
    if (O === "font") return "";
    if (typeof z == "string")
      return z === "use-credentials" ? z : "";
  }
  return Yl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, Yl.createPortal = function(O, z) {
    var Y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
      throw Error(W(299));
    return ol(O, z, null, Y);
  }, Yl.flushSync = function(O) {
    var z = hl.T, Y = y.p;
    try {
      if (hl.T = null, y.p = 2, O) return O();
    } finally {
      hl.T = z, y.p = Y, y.d.f();
    }
  }, Yl.preconnect = function(O, z) {
    typeof O == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, y.d.C(O, z));
  }, Yl.prefetchDNS = function(O) {
    typeof O == "string" && y.d.D(O);
  }, Yl.preinit = function(O, z) {
    if (typeof O == "string" && z && typeof z.as == "string") {
      var Y = z.as, U = rl(Y, z.crossOrigin), k = typeof z.integrity == "string" ? z.integrity : void 0, Ol = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      Y === "style" ? y.d.S(
        O,
        typeof z.precedence == "string" ? z.precedence : void 0,
        {
          crossOrigin: U,
          integrity: k,
          fetchPriority: Ol
        }
      ) : Y === "script" && y.d.X(O, {
        crossOrigin: U,
        integrity: k,
        fetchPriority: Ol,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      });
    }
  }, Yl.preinitModule = function(O, z) {
    if (typeof O == "string")
      if (typeof z == "object" && z !== null) {
        if (z.as == null || z.as === "script") {
          var Y = rl(
            z.as,
            z.crossOrigin
          );
          y.d.M(O, {
            crossOrigin: Y,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
            nonce: typeof z.nonce == "string" ? z.nonce : void 0
          });
        }
      } else z == null && y.d.M(O);
  }, Yl.preload = function(O, z) {
    if (typeof O == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var Y = z.as, U = rl(Y, z.crossOrigin);
      y.d.L(O, Y, {
        crossOrigin: U,
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
  }, Yl.preloadModule = function(O, z) {
    if (typeof O == "string")
      if (z) {
        var Y = rl(z.as, z.crossOrigin);
        y.d.m(O, {
          as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
          crossOrigin: Y,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0
        });
      } else y.d.m(O);
  }, Yl.requestFormReset = function(O) {
    y.d.r(O);
  }, Yl.unstable_batchedUpdates = function(O, z) {
    return O(z);
  }, Yl.useFormState = function(O, z, Y) {
    return hl.H.useFormState(O, z, Y);
  }, Yl.useFormStatus = function() {
    return hl.H.useHostTransitionStatus();
  }, Yl.version = "19.2.5", Yl;
}
var A0;
function ar() {
  if (A0) return df.exports;
  A0 = 1;
  function E() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (W) {
        console.error(W);
      }
  }
  return E(), df.exports = tr(), df.exports;
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
var z0;
function er() {
  if (z0) return Su;
  z0 = 1;
  var E = P1(), W = sf(), G = ar();
  function y(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function il(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ol(l) {
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
  function hl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function rl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function O(l) {
    if (ol(l) !== l)
      throw Error(y(188));
  }
  function z(l) {
    var t = l.alternate;
    if (!t) {
      if (t = ol(l), t === null) throw Error(y(188));
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
          if (n === a) return O(u), l;
          if (n === e) return O(u), t;
          n = n.sibling;
        }
        throw Error(y(188));
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
          if (!i) throw Error(y(189));
        }
      }
      if (a.alternate !== e) throw Error(y(190));
    }
    if (a.tag !== 3) throw Error(y(188));
    return a.stateNode.current === a ? l : t;
  }
  function Y(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = Y(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var U = Object.assign, k = Symbol.for("react.element"), Ol = Symbol.for("react.transitional.element"), Tl = Symbol.for("react.portal"), Cl = Symbol.for("react.fragment"), jl = Symbol.for("react.strict_mode"), Ul = Symbol.for("react.profiler"), Wt = Symbol.for("react.consumer"), ql = Symbol.for("react.context"), ct = Symbol.for("react.forward_ref"), zt = Symbol.for("react.suspense"), Ql = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Zl = Symbol.for("react.lazy"), Et = Symbol.for("react.activity"), Qa = Symbol.for("react.memo_cache_sentinel"), _t = Symbol.iterator;
  function Vl(l) {
    return l === null || typeof l != "object" ? null : (l = _t && l[_t] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Sa = Symbol.for("react.client.reference");
  function Ot(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Sa ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Cl:
        return "Fragment";
      case Ul:
        return "Profiler";
      case jl:
        return "StrictMode";
      case zt:
        return "Suspense";
      case Ql:
        return "SuspenseList";
      case Et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Tl:
          return "Portal";
        case ql:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ct:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case J:
          return t = l.displayName || null, t !== null ? t : Ot(l.type) || "Memo";
        case Zl:
          t = l._payload, l = l._init;
          try {
            return Ot(l(t));
          } catch {
          }
      }
    return null;
  }
  var bt = Array.isArray, b = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, al = [], cl = -1;
  function d(l) {
    return { current: l };
  }
  function A(l) {
    0 > cl || (l.current = al[cl], al[cl] = null, cl--);
  }
  function T(l, t) {
    cl++, al[cl] = l.current, l.current = t;
  }
  var D = d(null), B = d(null), X = d(null), P = d(null);
  function Gl(l, t) {
    switch (T(X, t), T(B, l), T(D, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Ys(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Ys(t), l = js(t, l);
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
    A(D), T(D, l);
  }
  function vl() {
    A(D), A(B), A(X);
  }
  function Ce(l) {
    l.memoizedState !== null && T(P, l);
    var t = D.current, a = js(t, l.type);
    t !== a && (T(B, l), T(D, a));
  }
  function Au(l) {
    B.current === l && (A(D), A(B)), P.current === l && (A(P), yu._currentValue = H);
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
              var S = function() {
                throw Error();
              };
              if (Object.defineProperty(S.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(S, []);
                } catch (h) {
                  var g = h;
                }
                Reflect.construct(l, [], S);
              } else {
                try {
                  S.call();
                } catch (h) {
                  g = h;
                }
                l.call(S.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (h) {
                g = h;
              }
              (S = l()) && typeof S.catch == "function" && S.catch(function() {
              });
            }
          } catch (h) {
            if (h && g && typeof h.stack == "string")
              return [h.stack, g.stack];
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
`), r = c.split(`
`);
        for (u = e = 0; e < f.length && !f[e].includes("DetermineComponentFrameRoot"); )
          e++;
        for (; u < r.length && !r[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (e === f.length || u === r.length)
          for (e = f.length - 1, u = r.length - 1; 1 <= e && 0 <= u && f[e] !== r[u]; )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== r[u]) {
            if (e !== 1 || u !== 1)
              do
                if (e--, u--, 0 > u || f[e] !== r[u]) {
                  var v = `
` + f[e].replace(" at new ", " at ");
                  return l.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", l.displayName)), v;
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
  function C0(l, t) {
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
  function rf(l) {
    try {
      var t = "", a = null;
      do
        t += C0(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var Vn = Object.prototype.hasOwnProperty, Ln = E.unstable_scheduleCallback, Kn = E.unstable_cancelCallback, D0 = E.unstable_shouldYield, M0 = E.unstable_requestPaint, Fl = E.unstable_now, O0 = E.unstable_getCurrentPriorityLevel, gf = E.unstable_ImmediatePriority, yf = E.unstable_UserBlockingPriority, zu = E.unstable_NormalPriority, U0 = E.unstable_LowPriority, hf = E.unstable_IdlePriority, x0 = E.log, N0 = E.unstable_setDisableYieldValue, De = null, Il = null;
  function kt(l) {
    if (typeof x0 == "function" && N0(l), Il && typeof Il.setStrictMode == "function")
      try {
        Il.setStrictMode(De, l);
      } catch {
      }
  }
  var Pl = Math.clz32 ? Math.clz32 : B0, H0 = Math.log, R0 = Math.LN2;
  function B0(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (H0(l) / R0 | 0) | 0;
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
  function Me(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function q0(l, t) {
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
  function vf() {
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
  function Y0(l, t, a, e, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, f = l.expirationTimes, r = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var v = 31 - Pl(a), S = 1 << v;
      c[v] = 0, f[v] = -1;
      var g = r[v];
      if (g !== null)
        for (r[v] = null, v = 0; v < g.length; v++) {
          var h = g[v];
          h !== null && (h.lane &= -536870913);
        }
      a &= ~S;
    }
    e !== 0 && bf(l, e, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function bf(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var e = 31 - Pl(t);
    l.entangledLanes |= t, l.entanglements[e] = l.entanglements[e] | 1073741824 | a & 261930;
  }
  function pf(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var e = 31 - Pl(a), u = 1 << e;
      u & t | l[e] & t && (l[e] |= t), a &= ~u;
    }
  }
  function Sf(l, t) {
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
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : c0(l.type));
  }
  function zf(l, t) {
    var a = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = a;
    }
  }
  var $t = Math.random().toString(36).slice(2), xl = "__reactFiber$" + $t, Ll = "__reactProps$" + $t, Za = "__reactContainer$" + $t, kn = "__reactEvents$" + $t, j0 = "__reactListeners$" + $t, G0 = "__reactHandles$" + $t, Ef = "__reactResources$" + $t, Ue = "__reactMarker$" + $t;
  function $n(l) {
    delete l[xl], delete l[Ll], delete l[kn], delete l[j0], delete l[G0];
  }
  function Va(l) {
    var t = l[xl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Za] || a[xl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Ks(l); l !== null; ) {
            if (a = l[xl]) return a;
            l = Ks(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function La(l) {
    if (l = l[xl] || l[Za]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function xe(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(y(33));
  }
  function Ka(l) {
    var t = l[Ef];
    return t || (t = l[Ef] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Dl(l) {
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
  var X0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cf = {}, Df = {};
  function Q0(l) {
    return Vn.call(Df, l) ? !0 : Vn.call(Cf, l) ? !1 : X0.test(l) ? Df[l] = !0 : (Cf[l] = !0, !1);
  }
  function Du(l, t, a) {
    if (Q0(t))
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
  function Mu(l, t, a) {
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
  function ft(l) {
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
  function Mf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Z0(l, t, a) {
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
  function Fn(l) {
    if (!l._valueTracker) {
      var t = Mf(l) ? "checked" : "value";
      l._valueTracker = Z0(
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
    return l && (e = Mf(l) ? l.checked ? "true" : "false" : l.value), l = e, l !== a ? (t.setValue(l), !0) : !1;
  }
  function Ou(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var V0 = /[\n"\\]/g;
  function ot(l) {
    return l.replace(
      V0,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, a, e, u, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ft(t)) : l.value !== "" + ft(t) && (l.value = "" + ft(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, i, ft(t)) : a != null ? Pn(l, i, ft(a)) : e != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ft(c) : l.removeAttribute("name");
  }
  function Uf(l, t, a, e, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Fn(l);
        return;
      }
      a = a != null ? "" + ft(a) : "", t = t != null ? "" + ft(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    e = e ?? u, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = c ? l.checked : !!e, l.defaultChecked = !!e, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), Fn(l);
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
      for (a = "" + ft(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          l[u].selected = !0, e && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function xf(l, t, a) {
    if (t != null && (t = "" + ft(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ft(a) : "";
  }
  function Nf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(y(92));
        if (bt(e)) {
          if (1 < e.length) throw Error(y(93));
          e = e[0];
        }
        a = e;
      }
      a == null && (a = ""), t = a;
    }
    a = ft(t), l.defaultValue = a, e = l.textContent, e === a && e !== "" && e !== null && (l.value = e), Fn(l);
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
  var L0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Hf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, a) : typeof a != "number" || a === 0 || L0.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Rf(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(y(62));
    if (l = l.style, a != null) {
      for (var e in a)
        !a.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "");
      for (var u in t)
        e = t[u], t.hasOwnProperty(u) && a[u] !== e && Hf(l, u, e);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Hf(l, n, t[n]);
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
  var K0 = /* @__PURE__ */ new Map([
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
  ]), J0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Uu(l) {
    return J0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function xt() {
  }
  var ti = null;
  function ai(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ka = null, $a = null;
  function Bf(l) {
    var t = La(l);
    if (t && (l = t.stateNode)) {
      var a = l[Ll] || null;
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
              'input[name="' + ot(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Ll] || null;
                if (!u) throw Error(y(90));
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
          xf(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && wa(l, !!a.multiple, t, !1);
      }
    }
  }
  var ei = !1;
  function qf(l, t, a) {
    if (ei) return l(t, a);
    ei = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (ei = !1, (ka !== null || $a !== null) && (bn(), ka && (t = ka, l = $a, $a = ka = null, Bf(t), l)))
        for (t = 0; t < l.length; t++) Bf(l[t]);
    }
  }
  function Ne(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Ll] || null;
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
        y(231, t, typeof a)
      );
    return a;
  }
  var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ui = !1;
  if (Nt)
    try {
      var He = {};
      Object.defineProperty(He, "passive", {
        get: function() {
          ui = !0;
        }
      }), window.addEventListener("test", He, He), window.removeEventListener("test", He, He);
    } catch {
      ui = !1;
    }
  var Ft = null, ni = null, xu = null;
  function Yf() {
    if (xu) return xu;
    var l, t = ni, a = t.length, e, u = "value" in Ft ? Ft.value : Ft.textContent, n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++) ;
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === u[n - e]; e++) ;
    return xu = u.slice(l, 1 < e ? 1 - e : void 0);
  }
  function Nu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Hu() {
    return !0;
  }
  function jf() {
    return !1;
  }
  function Kl(l) {
    function t(a, e, u, n, i) {
      this._reactName = a, this._targetInst = u, this.type = e, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Hu : jf, this.isPropagationStopped = jf, this;
    }
    return U(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Hu);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Hu);
      },
      persist: function() {
      },
      isPersistent: Hu
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
  }, Ru = Kl(_a), Re = U({}, _a, { view: 0, detail: 0 }), w0 = Kl(Re), ii, ci, Be, Bu = U({}, Re, {
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
      return "movementX" in l ? l.movementX : (l !== Be && (Be && l.type === "mousemove" ? (ii = l.screenX - Be.screenX, ci = l.screenY - Be.screenY) : ci = ii = 0, Be = l), ii);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ci;
    }
  }), Gf = Kl(Bu), W0 = U({}, Bu, { dataTransfer: 0 }), k0 = Kl(W0), $0 = U({}, Re, { relatedTarget: 0 }), fi = Kl($0), F0 = U({}, _a, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), I0 = Kl(F0), P0 = U({}, _a, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), lm = Kl(P0), tm = U({}, _a, { data: 0 }), Xf = Kl(tm), am = {
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
  }, em = {
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
  }, um = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function nm(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = um[l]) ? !!t[l] : !1;
  }
  function oi() {
    return nm;
  }
  var im = U({}, Re, {
    key: function(l) {
      if (l.key) {
        var t = am[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Nu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? em[l.keyCode] || "Unidentified" : "";
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
      return l.type === "keypress" ? Nu(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Nu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), cm = Kl(im), fm = U({}, Bu, {
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
  }), Qf = Kl(fm), om = U({}, Re, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oi
  }), dm = Kl(om), sm = U({}, _a, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mm = Kl(sm), rm = U({}, Bu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gm = Kl(rm), ym = U({}, _a, {
    newState: 0,
    oldState: 0
  }), hm = Kl(ym), vm = [9, 13, 27, 32], di = Nt && "CompositionEvent" in window, qe = null;
  Nt && "documentMode" in document && (qe = document.documentMode);
  var bm = Nt && "TextEvent" in window && !qe, Zf = Nt && (!di || qe && 8 < qe && 11 >= qe), Vf = " ", Lf = !1;
  function Kf(l, t) {
    switch (l) {
      case "keyup":
        return vm.indexOf(t.keyCode) !== -1;
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
  var Fa = !1;
  function pm(l, t) {
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
  function Sm(l, t) {
    if (Fa)
      return l === "compositionend" || !di && Kf(l, t) ? (l = Yf(), xu = ni = Ft = null, Fa = !1, l) : null;
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
  var Am = {
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
    return t === "input" ? !!Am[l.type] : t === "textarea";
  }
  function Wf(l, t, a, e) {
    ka ? $a ? $a.push(e) : $a = [e] : ka = e, t = Tn(t, "onChange"), 0 < t.length && (a = new Ru(
      "onChange",
      "change",
      null,
      a,
      e
    ), l.push({ event: a, listeners: t }));
  }
  var Ye = null, je = null;
  function zm(l) {
    xs(l, 0);
  }
  function qu(l) {
    var t = xe(l);
    if (Of(t)) return l;
  }
  function kf(l, t) {
    if (l === "change") return t;
  }
  var $f = !1;
  if (Nt) {
    var si;
    if (Nt) {
      var mi = "oninput" in document;
      if (!mi) {
        var Ff = document.createElement("div");
        Ff.setAttribute("oninput", "return;"), mi = typeof Ff.oninput == "function";
      }
      si = mi;
    } else si = !1;
    $f = si && (!document.documentMode || 9 < document.documentMode);
  }
  function If() {
    Ye && (Ye.detachEvent("onpropertychange", Pf), je = Ye = null);
  }
  function Pf(l) {
    if (l.propertyName === "value" && qu(je)) {
      var t = [];
      Wf(
        t,
        je,
        l,
        ai(l)
      ), qf(zm, t);
    }
  }
  function Em(l, t, a) {
    l === "focusin" ? (If(), Ye = t, je = a, Ye.attachEvent("onpropertychange", Pf)) : l === "focusout" && If();
  }
  function _m(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return qu(je);
  }
  function Tm(l, t) {
    if (l === "click") return qu(t);
  }
  function Cm(l, t) {
    if (l === "input" || l === "change")
      return qu(t);
  }
  function Dm(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var lt = typeof Object.is == "function" ? Object.is : Dm;
  function Ge(l, t) {
    if (lt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Vn.call(t, u) || !lt(l[u], t[u]))
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
  function ri(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Mm = Nt && "documentMode" in document && 11 >= document.documentMode, Ia = null, gi = null, Xe = null, yi = !1;
  function uo(l, t, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    yi || Ia == null || Ia !== Ou(e) || (e = Ia, "selectionStart" in e && ri(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
      anchorNode: e.anchorNode,
      anchorOffset: e.anchorOffset,
      focusNode: e.focusNode,
      focusOffset: e.focusOffset
    }), Xe && Ge(Xe, e) || (Xe = e, e = Tn(gi, "onSelect"), 0 < e.length && (t = new Ru(
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
  }, hi = {}, no = {};
  Nt && (no = document.createElement("div").style, "AnimationEvent" in window || (delete Pa.animationend.animation, delete Pa.animationiteration.animation, delete Pa.animationstart.animation), "TransitionEvent" in window || delete Pa.transitionend.transition);
  function Ca(l) {
    if (hi[l]) return hi[l];
    if (!Pa[l]) return l;
    var t = Pa[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in no)
        return hi[l] = t[a];
    return l;
  }
  var io = Ca("animationend"), co = Ca("animationiteration"), fo = Ca("animationstart"), Om = Ca("transitionrun"), Um = Ca("transitionstart"), xm = Ca("transitioncancel"), oo = Ca("transitionend"), so = /* @__PURE__ */ new Map(), vi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vi.push("scrollEnd");
  function pt(l, t) {
    so.set(l, t), Ea(t, [l]);
  }
  var Yu = typeof reportError == "function" ? reportError : function(l) {
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
  }, dt = [], le = 0, bi = 0;
  function ju() {
    for (var l = le, t = bi = le = 0; t < l; ) {
      var a = dt[t];
      dt[t++] = null;
      var e = dt[t];
      dt[t++] = null;
      var u = dt[t];
      dt[t++] = null;
      var n = dt[t];
      if (dt[t++] = null, e !== null && u !== null) {
        var i = e.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), e.pending = u;
      }
      n !== 0 && mo(a, u, n);
    }
  }
  function Gu(l, t, a, e) {
    dt[le++] = l, dt[le++] = t, dt[le++] = a, dt[le++] = e, bi |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function pi(l, t, a, e) {
    return Gu(l, t, a, e), Xu(l);
  }
  function Da(l, t) {
    return Gu(l, null, null, t), Xu(l);
  }
  function mo(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= a, e = n.alternate, e !== null && (e.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - Pl(a), l = n.hiddenUpdates, e = l[u], e === null ? l[u] = [t] : e.push(t), t.lane = a | 536870912), n) : null;
  }
  function Xu(l) {
    if (50 < fu)
      throw fu = 0, Mc = null, Error(y(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var te = {};
  function Nm(l, t, a, e) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tt(l, t, a, e) {
    return new Nm(l, t, a, e);
  }
  function Si(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ht(l, t) {
    var a = l.alternate;
    return a === null ? (a = tt(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function ro(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Qu(l, t, a, e, u, n) {
    var i = 0;
    if (e = l, typeof l == "function") Si(l) && (i = 1);
    else if (typeof l == "string")
      i = Y1(
        l,
        a,
        D.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Et:
          return l = tt(31, a, t, u), l.elementType = Et, l.lanes = n, l;
        case Cl:
          return Ma(a.children, u, n, t);
        case jl:
          i = 8, u |= 24;
          break;
        case Ul:
          return l = tt(12, a, t, u | 2), l.elementType = Ul, l.lanes = n, l;
        case zt:
          return l = tt(13, a, t, u), l.elementType = zt, l.lanes = n, l;
        case Ql:
          return l = tt(19, a, t, u), l.elementType = Ql, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ql:
                i = 10;
                break l;
              case Wt:
                i = 9;
                break l;
              case ct:
                i = 11;
                break l;
              case J:
                i = 14;
                break l;
              case Zl:
                i = 16, e = null;
                break l;
            }
          i = 29, a = Error(
            y(130, l === null ? "null" : typeof l, "")
          ), e = null;
      }
    return t = tt(i, a, t, u), t.elementType = l, t.type = e, t.lanes = n, t;
  }
  function Ma(l, t, a, e) {
    return l = tt(7, l, e, t), l.lanes = a, l;
  }
  function Ai(l, t, a) {
    return l = tt(6, l, null, t), l.lanes = a, l;
  }
  function go(l) {
    var t = tt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function zi(l, t, a) {
    return t = tt(
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
  var yo = /* @__PURE__ */ new WeakMap();
  function st(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = yo.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: rf(t)
      }, yo.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: rf(t)
    };
  }
  var ae = [], ee = 0, Zu = null, Qe = 0, mt = [], rt = 0, It = null, Tt = 1, Ct = "";
  function Rt(l, t) {
    ae[ee++] = Qe, ae[ee++] = Zu, Zu = l, Qe = t;
  }
  function ho(l, t, a) {
    mt[rt++] = Tt, mt[rt++] = Ct, mt[rt++] = It, It = l;
    var e = Tt;
    l = Ct;
    var u = 32 - Pl(e) - 1;
    e &= ~(1 << u), a += 1;
    var n = 32 - Pl(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (e & (1 << i) - 1).toString(32), e >>= i, u -= i, Tt = 1 << 32 - Pl(t) + u | a << u | e, Ct = n + l;
    } else
      Tt = 1 << n | a << u | e, Ct = l;
  }
  function Ei(l) {
    l.return !== null && (Rt(l, 1), ho(l, 1, 0));
  }
  function _i(l) {
    for (; l === Zu; )
      Zu = ae[--ee], ae[ee] = null, Qe = ae[--ee], ae[ee] = null;
    for (; l === It; )
      It = mt[--rt], mt[rt] = null, Ct = mt[--rt], mt[rt] = null, Tt = mt[--rt], mt[rt] = null;
  }
  function vo(l, t) {
    mt[rt++] = Tt, mt[rt++] = Ct, mt[rt++] = It, Tt = t.id, Ct = t.overflow, It = l;
  }
  var Nl = null, dl = null, w = !1, Pt = null, gt = !1, Ti = Error(y(519));
  function la(l) {
    var t = Error(
      y(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ze(st(t, l)), Ti;
  }
  function bo(l) {
    var t = l.stateNode, a = l.type, e = l.memoizedProps;
    switch (t[xl] = l, t[Ll] = e, a) {
      case "dialog":
        Z("cancel", t), Z("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Z("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < du.length; a++)
          Z(du[a], t);
        break;
      case "source":
        Z("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Z("error", t), Z("load", t);
        break;
      case "details":
        Z("toggle", t);
        break;
      case "input":
        Z("invalid", t), Uf(
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
        Z("invalid", t);
        break;
      case "textarea":
        Z("invalid", t), Nf(t, e.value, e.defaultValue, e.children);
    }
    a = e.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || e.suppressHydrationWarning === !0 || Bs(t.textContent, a) ? (e.popover != null && (Z("beforetoggle", t), Z("toggle", t)), e.onScroll != null && Z("scroll", t), e.onScrollEnd != null && Z("scrollend", t), e.onClick != null && (t.onclick = xt), t = !0) : t = !1, t || la(l, !0);
  }
  function po(l) {
    for (Nl = l.return; Nl; )
      switch (Nl.tag) {
        case 5:
        case 31:
        case 13:
          gt = !1;
          return;
        case 27:
        case 3:
          gt = !0;
          return;
        default:
          Nl = Nl.return;
      }
  }
  function ue(l) {
    if (l !== Nl) return !1;
    if (!w) return po(l), w = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Vc(l.type, l.memoizedProps)), a = !a), a && dl && la(l), po(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(317));
      dl = Ls(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(317));
      dl = Ls(l);
    } else
      t === 27 ? (t = dl, ga(l.type) ? (l = Wc, Wc = null, dl = l) : dl = t) : dl = Nl ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Oa() {
    dl = Nl = null, w = !1;
  }
  function Ci() {
    var l = Pt;
    return l !== null && (kl === null ? kl = l : kl.push.apply(
      kl,
      l
    ), Pt = null), l;
  }
  function Ze(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Di = d(null), Ua = null, Bt = null;
  function ta(l, t, a) {
    T(Di, t._currentValue), t._currentValue = a;
  }
  function qt(l) {
    l._currentValue = Di.current, A(Di);
  }
  function Mi(l, t, a) {
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
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Mi(
                n.return,
                a,
                l
              ), e || (i = null);
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(y(341));
        i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Mi(i, a, l), i = null;
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
        if (i === null) throw Error(y(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          lt(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (u === P.current) {
        if (i = u.alternate, i === null) throw Error(y(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(yu) : l = [yu]);
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
      if (!lt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function xa(l) {
    Ua = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Hl(l) {
    return So(Ua, l);
  }
  function Lu(l, t) {
    return Ua === null && xa(l), So(l, t);
  }
  function So(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Bt === null) {
      if (l === null) throw Error(y(308));
      Bt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Bt = Bt.next = t;
    return a;
  }
  var Hm = typeof AbortController < "u" ? AbortController : function() {
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
  }, Rm = E.unstable_scheduleCallback, Bm = E.unstable_NormalPriority, Sl = {
    $$typeof: ql,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ui() {
    return {
      controller: new Hm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ve(l) {
    l.refCount--, l.refCount === 0 && Rm(Bm, function() {
      l.controller.abort();
    });
  }
  var Le = null, xi = 0, ie = 0, ce = null;
  function qm(l, t) {
    if (Le === null) {
      var a = Le = [];
      xi = 0, ie = Rc(), ce = {
        status: "pending",
        value: void 0,
        then: function(e) {
          a.push(e);
        }
      };
    }
    return xi++, t.then(Ao, Ao), t;
  }
  function Ao() {
    if (--xi === 0 && Le !== null) {
      ce !== null && (ce.status = "fulfilled");
      var l = Le;
      Le = null, ie = 0, ce = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Ym(l, t) {
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
  var zo = b.S;
  b.S = function(l, t) {
    ns = Fl(), typeof t == "object" && t !== null && typeof t.then == "function" && qm(l, t), zo !== null && zo(l, t);
  };
  var Na = d(null);
  function Ni() {
    var l = Na.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Ku(l, t) {
    t === null ? T(Na, Na.current) : T(Na, t.pool);
  }
  function Eo() {
    var l = Ni();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var fe = Error(y(460)), Hi = Error(y(474)), Ju = Error(y(542)), wu = { then: function() {
  } };
  function _o(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function To(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(xt, xt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Do(l), l;
      default:
        if (typeof t.status == "string") t.then(xt, xt);
        else {
          if (l = fl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(y(482));
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
            throw l = t.reason, Do(l), l;
        }
        throw Ra = t, fe;
    }
  }
  function Ha(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ra = a, fe) : a;
    }
  }
  var Ra = null;
  function Co() {
    if (Ra === null) throw Error(y(459));
    var l = Ra;
    return Ra = null, l;
  }
  function Do(l) {
    if (l === fe || l === Ju)
      throw Error(y(483));
  }
  var oe = null, Ke = 0;
  function Wu(l) {
    var t = Ke;
    return Ke += 1, oe === null && (oe = []), To(oe, l, t);
  }
  function Je(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function ku(l, t) {
    throw t.$$typeof === k ? Error(y(525)) : (l = Object.prototype.toString.call(t), Error(
      y(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Mo(l) {
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
      return s = Ht(s, o), s.index = 0, s.sibling = null, s;
    }
    function n(s, o, m) {
      return s.index = m, l ? (m = s.alternate, m !== null ? (m = m.index, m < o ? (s.flags |= 67108866, o) : m) : (s.flags |= 67108866, o)) : (s.flags |= 1048576, o);
    }
    function i(s) {
      return l && s.alternate === null && (s.flags |= 67108866), s;
    }
    function c(s, o, m, p) {
      return o === null || o.tag !== 6 ? (o = Ai(m, s.mode, p), o.return = s, o) : (o = u(o, m), o.return = s, o);
    }
    function f(s, o, m, p) {
      var x = m.type;
      return x === Cl ? v(
        s,
        o,
        m.props.children,
        p,
        m.key
      ) : o !== null && (o.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Zl && Ha(x) === o.type) ? (o = u(o, m.props), Je(o, m), o.return = s, o) : (o = Qu(
        m.type,
        m.key,
        m.props,
        null,
        s.mode,
        p
      ), Je(o, m), o.return = s, o);
    }
    function r(s, o, m, p) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== m.containerInfo || o.stateNode.implementation !== m.implementation ? (o = zi(m, s.mode, p), o.return = s, o) : (o = u(o, m.children || []), o.return = s, o);
    }
    function v(s, o, m, p, x) {
      return o === null || o.tag !== 7 ? (o = Ma(
        m,
        s.mode,
        p,
        x
      ), o.return = s, o) : (o = u(o, m), o.return = s, o);
    }
    function S(s, o, m) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = Ai(
          "" + o,
          s.mode,
          m
        ), o.return = s, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Ol:
            return m = Qu(
              o.type,
              o.key,
              o.props,
              null,
              s.mode,
              m
            ), Je(m, o), m.return = s, m;
          case Tl:
            return o = zi(
              o,
              s.mode,
              m
            ), o.return = s, o;
          case Zl:
            return o = Ha(o), S(s, o, m);
        }
        if (bt(o) || Vl(o))
          return o = Ma(
            o,
            s.mode,
            m,
            null
          ), o.return = s, o;
        if (typeof o.then == "function")
          return S(s, Wu(o), m);
        if (o.$$typeof === ql)
          return S(
            s,
            Lu(s, o),
            m
          );
        ku(s, o);
      }
      return null;
    }
    function g(s, o, m, p) {
      var x = o !== null ? o.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return x !== null ? null : c(s, o, "" + m, p);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ol:
            return m.key === x ? f(s, o, m, p) : null;
          case Tl:
            return m.key === x ? r(s, o, m, p) : null;
          case Zl:
            return m = Ha(m), g(s, o, m, p);
        }
        if (bt(m) || Vl(m))
          return x !== null ? null : v(s, o, m, p, null);
        if (typeof m.then == "function")
          return g(
            s,
            o,
            Wu(m),
            p
          );
        if (m.$$typeof === ql)
          return g(
            s,
            o,
            Lu(s, m),
            p
          );
        ku(s, m);
      }
      return null;
    }
    function h(s, o, m, p, x) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return s = s.get(m) || null, c(o, s, "" + p, x);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Ol:
            return s = s.get(
              p.key === null ? m : p.key
            ) || null, f(o, s, p, x);
          case Tl:
            return s = s.get(
              p.key === null ? m : p.key
            ) || null, r(o, s, p, x);
          case Zl:
            return p = Ha(p), h(
              s,
              o,
              m,
              p,
              x
            );
        }
        if (bt(p) || Vl(p))
          return s = s.get(m) || null, v(o, s, p, x, null);
        if (typeof p.then == "function")
          return h(
            s,
            o,
            m,
            Wu(p),
            x
          );
        if (p.$$typeof === ql)
          return h(
            s,
            o,
            m,
            Lu(o, p),
            x
          );
        ku(o, p);
      }
      return null;
    }
    function C(s, o, m, p) {
      for (var x = null, $ = null, M = o, j = o = 0, K = null; M !== null && j < m.length; j++) {
        M.index > j ? (K = M, M = null) : K = M.sibling;
        var F = g(
          s,
          M,
          m[j],
          p
        );
        if (F === null) {
          M === null && (M = K);
          break;
        }
        l && M && F.alternate === null && t(s, M), o = n(F, o, j), $ === null ? x = F : $.sibling = F, $ = F, M = K;
      }
      if (j === m.length)
        return a(s, M), w && Rt(s, j), x;
      if (M === null) {
        for (; j < m.length; j++)
          M = S(s, m[j], p), M !== null && (o = n(
            M,
            o,
            j
          ), $ === null ? x = M : $.sibling = M, $ = M);
        return w && Rt(s, j), x;
      }
      for (M = e(M); j < m.length; j++)
        K = h(
          M,
          s,
          j,
          m[j],
          p
        ), K !== null && (l && K.alternate !== null && M.delete(
          K.key === null ? j : K.key
        ), o = n(
          K,
          o,
          j
        ), $ === null ? x = K : $.sibling = K, $ = K);
      return l && M.forEach(function(pa) {
        return t(s, pa);
      }), w && Rt(s, j), x;
    }
    function N(s, o, m, p) {
      if (m == null) throw Error(y(151));
      for (var x = null, $ = null, M = o, j = o = 0, K = null, F = m.next(); M !== null && !F.done; j++, F = m.next()) {
        M.index > j ? (K = M, M = null) : K = M.sibling;
        var pa = g(s, M, F.value, p);
        if (pa === null) {
          M === null && (M = K);
          break;
        }
        l && M && pa.alternate === null && t(s, M), o = n(pa, o, j), $ === null ? x = pa : $.sibling = pa, $ = pa, M = K;
      }
      if (F.done)
        return a(s, M), w && Rt(s, j), x;
      if (M === null) {
        for (; !F.done; j++, F = m.next())
          F = S(s, F.value, p), F !== null && (o = n(F, o, j), $ === null ? x = F : $.sibling = F, $ = F);
        return w && Rt(s, j), x;
      }
      for (M = e(M); !F.done; j++, F = m.next())
        F = h(M, s, j, F.value, p), F !== null && (l && F.alternate !== null && M.delete(F.key === null ? j : F.key), o = n(F, o, j), $ === null ? x = F : $.sibling = F, $ = F);
      return l && M.forEach(function(W1) {
        return t(s, W1);
      }), w && Rt(s, j), x;
    }
    function nl(s, o, m, p) {
      if (typeof m == "object" && m !== null && m.type === Cl && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ol:
            l: {
              for (var x = m.key; o !== null; ) {
                if (o.key === x) {
                  if (x = m.type, x === Cl) {
                    if (o.tag === 7) {
                      a(
                        s,
                        o.sibling
                      ), p = u(
                        o,
                        m.props.children
                      ), p.return = s, s = p;
                      break l;
                    }
                  } else if (o.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Zl && Ha(x) === o.type) {
                    a(
                      s,
                      o.sibling
                    ), p = u(o, m.props), Je(p, m), p.return = s, s = p;
                    break l;
                  }
                  a(s, o);
                  break;
                } else t(s, o);
                o = o.sibling;
              }
              m.type === Cl ? (p = Ma(
                m.props.children,
                s.mode,
                p,
                m.key
              ), p.return = s, s = p) : (p = Qu(
                m.type,
                m.key,
                m.props,
                null,
                s.mode,
                p
              ), Je(p, m), p.return = s, s = p);
            }
            return i(s);
          case Tl:
            l: {
              for (x = m.key; o !== null; ) {
                if (o.key === x)
                  if (o.tag === 4 && o.stateNode.containerInfo === m.containerInfo && o.stateNode.implementation === m.implementation) {
                    a(
                      s,
                      o.sibling
                    ), p = u(o, m.children || []), p.return = s, s = p;
                    break l;
                  } else {
                    a(s, o);
                    break;
                  }
                else t(s, o);
                o = o.sibling;
              }
              p = zi(m, s.mode, p), p.return = s, s = p;
            }
            return i(s);
          case Zl:
            return m = Ha(m), nl(
              s,
              o,
              m,
              p
            );
        }
        if (bt(m))
          return C(
            s,
            o,
            m,
            p
          );
        if (Vl(m)) {
          if (x = Vl(m), typeof x != "function") throw Error(y(150));
          return m = x.call(m), N(
            s,
            o,
            m,
            p
          );
        }
        if (typeof m.then == "function")
          return nl(
            s,
            o,
            Wu(m),
            p
          );
        if (m.$$typeof === ql)
          return nl(
            s,
            o,
            Lu(s, m),
            p
          );
        ku(s, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, o !== null && o.tag === 6 ? (a(s, o.sibling), p = u(o, m), p.return = s, s = p) : (a(s, o), p = Ai(m, s.mode, p), p.return = s, s = p), i(s)) : a(s, o);
    }
    return function(s, o, m, p) {
      try {
        Ke = 0;
        var x = nl(
          s,
          o,
          m,
          p
        );
        return oe = null, x;
      } catch (M) {
        if (M === fe || M === Ju) throw M;
        var $ = tt(29, M, null, s.mode);
        return $.lanes = p, $.return = s, $;
      } finally {
      }
    };
  }
  var Ba = Mo(!0), Oo = Mo(!1), aa = !1;
  function Ri(l) {
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
  function ea(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ua(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (I & 2) !== 0) {
      var u = e.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), e.pending = t, t = Xu(l), mo(l, null, a), t;
    }
    return Gu(l, e, t, a), Xu(l);
  }
  function we(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, pf(l, a);
    }
  }
  function qi(l, t) {
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
  var Yi = !1;
  function We() {
    if (Yi) {
      var l = ce;
      if (l !== null) throw l;
    }
  }
  function ke(l, t, a, e) {
    Yi = !1;
    var u = l.updateQueue;
    aa = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c, r = f.next;
      f.next = null, i === null ? n = r : i.next = r, i = f;
      var v = l.alternate;
      v !== null && (v = v.updateQueue, c = v.lastBaseUpdate, c !== i && (c === null ? v.firstBaseUpdate = r : c.next = r, v.lastBaseUpdate = f));
    }
    if (n !== null) {
      var S = u.baseState;
      i = 0, v = r = f = null, c = n;
      do {
        var g = c.lane & -536870913, h = g !== c.lane;
        if (h ? (L & g) === g : (e & g) === g) {
          g !== 0 && g === ie && (Yi = !0), v !== null && (v = v.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var C = l, N = c;
            g = t;
            var nl = a;
            switch (N.tag) {
              case 1:
                if (C = N.payload, typeof C == "function") {
                  S = C.call(nl, S, g);
                  break l;
                }
                S = C;
                break l;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = N.payload, g = typeof C == "function" ? C.call(nl, S, g) : C, g == null) break l;
                S = U({}, S, g);
                break l;
              case 2:
                aa = !0;
            }
          }
          g = c.callback, g !== null && (l.flags |= 64, h && (l.flags |= 8192), h = u.callbacks, h === null ? u.callbacks = [g] : h.push(g));
        } else
          h = {
            lane: g,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, v === null ? (r = v = h, f = S) : v = v.next = h, i |= g;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null)
            break;
          h = c, c = h.next, h.next = null, u.lastBaseUpdate = h, u.shared.pending = null;
        }
      } while (!0);
      v === null && (f = S), u.baseState = f, u.firstBaseUpdate = r, u.lastBaseUpdate = v, n === null && (u.shared.lanes = 0), oa |= i, l.lanes = i, l.memoizedState = S;
    }
  }
  function Uo(l, t) {
    if (typeof l != "function")
      throw Error(y(191, l));
    l.call(t);
  }
  function xo(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        Uo(a[l], t);
  }
  var de = d(null), $u = d(0);
  function No(l, t) {
    l = Kt, T($u, l), T(de, t), Kt = l | t.baseLanes;
  }
  function ji() {
    T($u, Kt), T(de, de.current);
  }
  function Gi() {
    Kt = $u.current, A(de), A($u);
  }
  var at = d(null), yt = null;
  function na(l) {
    var t = l.alternate;
    T(bl, bl.current & 1), T(at, l), yt === null && (t === null || de.current !== null || t.memoizedState !== null) && (yt = l);
  }
  function Xi(l) {
    T(bl, bl.current), T(at, l), yt === null && (yt = l);
  }
  function Ho(l) {
    l.tag === 22 ? (T(bl, bl.current), T(at, l), yt === null && (yt = l)) : ia();
  }
  function ia() {
    T(bl, bl.current), T(at, at.current);
  }
  function et(l) {
    A(at), yt === l && (yt = null), A(bl);
  }
  var bl = d(0);
  function Fu(l) {
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
  var Yt = 0, q = null, el = null, Al = null, Iu = !1, se = !1, qa = !1, Pu = 0, $e = 0, me = null, jm = 0;
  function gl() {
    throw Error(y(321));
  }
  function Qi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!lt(l[a], t[a])) return !1;
    return !0;
  }
  function Zi(l, t, a, e, u, n) {
    return Yt = n, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? hd : ec, qa = !1, n = a(e, u), qa = !1, se && (n = Bo(
      t,
      a,
      e,
      u
    )), Ro(l), n;
  }
  function Ro(l) {
    b.H = Pe;
    var t = el !== null && el.next !== null;
    if (Yt = 0, Al = el = q = null, Iu = !1, $e = 0, me = null, t) throw Error(y(300));
    l === null || zl || (l = l.dependencies, l !== null && Vu(l) && (zl = !0));
  }
  function Bo(l, t, a, e) {
    q = l;
    var u = 0;
    do {
      if (se && (me = null), $e = 0, se = !1, 25 <= u) throw Error(y(301));
      if (u += 1, Al = el = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = vd, n = t(a, e);
    } while (se);
    return n;
  }
  function Gm() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Fe(t) : t, l = l.useState()[0], (el !== null ? el.memoizedState : null) !== l && (q.flags |= 1024), t;
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
    Yt = 0, Al = el = q = null, se = !1, $e = Pu = 0, me = null;
  }
  function Xl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Al === null ? q.memoizedState = Al = l : Al = Al.next = l, Al;
  }
  function pl() {
    if (el === null) {
      var l = q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = Al === null ? q.memoizedState : Al.next;
    if (t !== null)
      Al = t, el = l;
    else {
      if (l === null)
        throw q.alternate === null ? Error(y(467)) : Error(y(310));
      el = l, l = {
        memoizedState: el.memoizedState,
        baseState: el.baseState,
        baseQueue: el.baseQueue,
        queue: el.queue,
        next: null
      }, Al === null ? q.memoizedState = Al = l : Al = Al.next = l;
    }
    return Al;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fe(l) {
    var t = $e;
    return $e += 1, me === null && (me = []), l = To(me, l, t), t = q, (Al === null ? t.memoizedState : Al.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? hd : ec), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fe(l);
      if (l.$$typeof === ql) return Hl(l);
    }
    throw Error(y(438, String(l)));
  }
  function Ji(l) {
    var t = null, a = q.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var e = q.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (t = {
        data: e.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ln(), q.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++)
        a[e] = Qa;
    return t.index++, a;
  }
  function jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = pl();
    return wi(t, el, l);
  }
  function wi(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(y(311));
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
      var c = i = null, f = null, r = t, v = !1;
      do {
        var S = r.lane & -536870913;
        if (S !== r.lane ? (L & S) === S : (Yt & S) === S) {
          var g = r.revertLane;
          if (g === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: r.action,
              hasEagerState: r.hasEagerState,
              eagerState: r.eagerState,
              next: null
            }), S === ie && (v = !0);
          else if ((Yt & g) === g) {
            r = r.next, g === ie && (v = !0);
            continue;
          } else
            S = {
              lane: 0,
              revertLane: r.revertLane,
              gesture: null,
              action: r.action,
              hasEagerState: r.hasEagerState,
              eagerState: r.eagerState,
              next: null
            }, f === null ? (c = f = S, i = n) : f = f.next = S, q.lanes |= g, oa |= g;
          S = r.action, qa && a(n, S), n = r.hasEagerState ? r.eagerState : a(n, S);
        } else
          g = {
            lane: S,
            revertLane: r.revertLane,
            gesture: r.gesture,
            action: r.action,
            hasEagerState: r.hasEagerState,
            eagerState: r.eagerState,
            next: null
          }, f === null ? (c = f = g, i = n) : f = f.next = g, q.lanes |= S, oa |= S;
        r = r.next;
      } while (r !== null && r !== t);
      if (f === null ? i = n : f.next = c, !lt(n, l.memoizedState) && (zl = !0, v && (a = ce, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = i, l.baseQueue = f, e.lastRenderedState = n;
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Wi(l) {
    var t = pl(), a = t.queue;
    if (a === null) throw Error(y(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch, u = a.pending, n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      lt(n, t.memoizedState) || (zl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, e];
  }
  function qo(l, t, a) {
    var e = q, u = pl(), n = w;
    if (n) {
      if (a === void 0) throw Error(y(407));
      a = a();
    } else a = t();
    var i = !lt(
      (el || u).memoizedState,
      a
    );
    if (i && (u.memoizedState = a, zl = !0), u = u.queue, Fi(Go.bind(null, e, u, l), [
      l
    ]), u.getSnapshot !== t || i || Al !== null && Al.memoizedState.tag & 1) {
      if (e.flags |= 2048, re(
        9,
        { destroy: void 0 },
        jo.bind(
          null,
          e,
          u,
          a,
          t
        ),
        null
      ), fl === null) throw Error(y(349));
      n || (Yt & 127) !== 0 || Yo(e, t, a);
    }
    return a;
  }
  function Yo(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = q.updateQueue, t === null ? (t = ln(), q.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function jo(l, t, a, e) {
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
      return !lt(l, a);
    } catch {
      return !0;
    }
  }
  function Qo(l) {
    var t = Da(l, 2);
    t !== null && $l(t, l, 2);
  }
  function ki(l) {
    var t = Xl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), qa) {
        kt(!0);
        try {
          a();
        } finally {
          kt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jt,
      lastRenderedState: l
    }, t;
  }
  function Zo(l, t, a, e) {
    return l.baseState = a, wi(
      l,
      el,
      typeof e == "function" ? e : jt
    );
  }
  function Xm(l, t, a, e, u) {
    if (nn(l)) throw Error(y(485));
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
      b.T !== null ? a(!0) : n.isTransition = !1, e(n), a = t.pending, a === null ? (n.next = t.pending = n, Vo(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Vo(l, t) {
    var a = t.action, e = t.payload, u = l.state;
    if (t.isTransition) {
      var n = b.T, i = {};
      b.T = i;
      try {
        var c = a(u, e), f = b.S;
        f !== null && f(i, c), Lo(l, t, c);
      } catch (r) {
        $i(l, t, r);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), b.T = n;
      }
    } else
      try {
        n = a(u, e), Lo(l, t, n);
      } catch (r) {
        $i(l, t, r);
      }
  }
  function Lo(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(e) {
        Ko(l, t, e);
      },
      function(e) {
        return $i(l, t, e);
      }
    ) : Ko(l, t, a);
  }
  function Ko(l, t, a) {
    t.status = "fulfilled", t.value = a, Jo(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Vo(l, a)));
  }
  function $i(l, t, a) {
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
    if (w) {
      var a = fl.formState;
      if (a !== null) {
        l: {
          var e = q;
          if (w) {
            if (dl) {
              t: {
                for (var u = dl, n = gt; u.nodeType !== 8; ) {
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
                dl = ht(
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
    return a = Xl(), a.memoizedState = a.baseState = t, e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wo,
      lastRenderedState: t
    }, a.queue = e, a = rd.bind(
      null,
      q,
      e
    ), e.dispatch = a, e = ki(!1), n = ac.bind(
      null,
      q,
      !1,
      e.queue
    ), e = Xl(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, e.queue = u, a = Xm.bind(
      null,
      q,
      u,
      n,
      a
    ), u.dispatch = a, e.memoizedState = l, [t, a, !1];
  }
  function ko(l) {
    var t = pl();
    return $o(t, el, l);
  }
  function $o(l, t, a) {
    if (t = wi(
      l,
      t,
      wo
    )[0], l = an(jt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var e = Fe(t);
      } catch (i) {
        throw i === fe ? Ju : i;
      }
    else e = t;
    t = pl();
    var u = t.queue, n = u.dispatch;
    return a !== t.memoizedState && (q.flags |= 2048, re(
      9,
      { destroy: void 0 },
      Qm.bind(null, u, a),
      null
    )), [e, n, l];
  }
  function Qm(l, t) {
    l.action = t;
  }
  function Fo(l) {
    var t = pl(), a = el;
    if (a !== null)
      return $o(t, a, l);
    pl(), t = t.memoizedState, a = pl();
    var e = a.queue.dispatch;
    return a.memoizedState = l, [t, e, !1];
  }
  function re(l, t, a, e) {
    return l = { tag: l, create: a, deps: e, inst: t, next: null }, t = q.updateQueue, t === null && (t = ln(), q.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (e = a.next, a.next = l, l.next = e, t.lastEffect = l), l;
  }
  function Io() {
    return pl().memoizedState;
  }
  function en(l, t, a, e) {
    var u = Xl();
    q.flags |= l, u.memoizedState = re(
      1 | t,
      { destroy: void 0 },
      a,
      e === void 0 ? null : e
    );
  }
  function un(l, t, a, e) {
    var u = pl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    el !== null && e !== null && Qi(e, el.memoizedState.deps) ? u.memoizedState = re(t, n, a, e) : (q.flags |= l, u.memoizedState = re(
      1 | t,
      n,
      a,
      e
    ));
  }
  function Po(l, t) {
    en(8390656, 8, l, t);
  }
  function Fi(l, t) {
    un(2048, 8, l, t);
  }
  function Zm(l) {
    q.flags |= 4;
    var t = q.updateQueue;
    if (t === null)
      t = ln(), q.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function ld(l) {
    var t = pl().memoizedState;
    return Zm({ ref: t, nextImpl: l }), function() {
      if ((I & 2) !== 0) throw Error(y(440));
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
    var a = pl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Qi(t, e[1]) ? e[0] : (a.memoizedState = [l, t], l);
  }
  function id(l, t) {
    var a = pl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Qi(t, e[1]))
      return e[0];
    if (e = l(), qa) {
      kt(!0);
      try {
        l();
      } finally {
        kt(!1);
      }
    }
    return a.memoizedState = [e, t], e;
  }
  function Pi(l, t, a) {
    return a === void 0 || (Yt & 1073741824) !== 0 && (L & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = cs(), q.lanes |= l, oa |= l, a);
  }
  function cd(l, t, a, e) {
    return lt(a, t) ? a : de.current !== null ? (l = Pi(l, a, e), lt(l, t) || (zl = !0), l) : (Yt & 42) === 0 || (Yt & 1073741824) !== 0 && (L & 261930) === 0 ? (zl = !0, l.memoizedState = a) : (l = cs(), q.lanes |= l, oa |= l, t);
  }
  function fd(l, t, a, e, u) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var i = b.T, c = {};
    b.T = c, ac(l, !1, t, a);
    try {
      var f = u(), r = b.S;
      if (r !== null && r(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var v = Ym(
          f,
          e
        );
        Ie(
          l,
          t,
          v,
          it(l)
        );
      } else
        Ie(
          l,
          t,
          e,
          it(l)
        );
    } catch (S) {
      Ie(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: S },
        it()
      );
    } finally {
      _.p = n, i !== null && c.types !== null && (i.types = c.types), b.T = i;
    }
  }
  function Vm() {
  }
  function lc(l, t, a, e) {
    if (l.tag !== 5) throw Error(y(476));
    var u = od(l).queue;
    fd(
      l,
      u,
      t,
      H,
      a === null ? Vm : function() {
        return dd(l), a(e);
      }
    );
  }
  function od(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: H,
      baseState: H,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: H
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
        lastRenderedReducer: jt,
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
      it()
    );
  }
  function tc() {
    return Hl(yu);
  }
  function sd() {
    return pl().memoizedState;
  }
  function md() {
    return pl().memoizedState;
  }
  function Lm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = it();
          l = ea(a);
          var e = ua(t, l, a);
          e !== null && ($l(e, t, a), we(e, t, a)), t = { cache: Ui() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Km(l, t, a) {
    var e = it();
    a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? gd(t, a) : (a = pi(l, t, a, e), a !== null && ($l(a, l, e), yd(a, t, e)));
  }
  function rd(l, t, a) {
    var e = it();
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
    if (nn(l)) gd(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var i = t.lastRenderedState, c = n(i, a);
          if (u.hasEagerState = !0, u.eagerState = c, lt(c, i))
            return Gu(l, t, u, 0), fl === null && ju(), !1;
        } catch {
        } finally {
        }
      if (a = pi(l, t, u, e), a !== null)
        return $l(a, l, e), yd(a, t, e), !0;
    }
    return !1;
  }
  function ac(l, t, a, e) {
    if (e = {
      lane: 2,
      revertLane: Rc(),
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(y(479));
    } else
      t = pi(
        l,
        a,
        e,
        2
      ), t !== null && $l(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === q || t !== null && t === q;
  }
  function gd(l, t) {
    se = Iu = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function yd(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, pf(l, a);
    }
  }
  var Pe = {
    readContext: Hl,
    use: tn,
    useCallback: gl,
    useContext: gl,
    useEffect: gl,
    useImperativeHandle: gl,
    useLayoutEffect: gl,
    useInsertionEffect: gl,
    useMemo: gl,
    useReducer: gl,
    useRef: gl,
    useState: gl,
    useDebugValue: gl,
    useDeferredValue: gl,
    useTransition: gl,
    useSyncExternalStore: gl,
    useId: gl,
    useHostTransitionStatus: gl,
    useFormState: gl,
    useActionState: gl,
    useOptimistic: gl,
    useMemoCache: gl,
    useCacheRefresh: gl
  };
  Pe.useEffectEvent = gl;
  var hd = {
    readContext: Hl,
    use: tn,
    useCallback: function(l, t) {
      return Xl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Hl,
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
      var a = Xl();
      t = t === void 0 ? null : t;
      var e = l();
      if (qa) {
        kt(!0);
        try {
          l();
        } finally {
          kt(!1);
        }
      }
      return a.memoizedState = [e, t], e;
    },
    useReducer: function(l, t, a) {
      var e = Xl();
      if (a !== void 0) {
        var u = a(t);
        if (qa) {
          kt(!0);
          try {
            a(t);
          } finally {
            kt(!1);
          }
        }
      } else u = t;
      return e.memoizedState = e.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, e.queue = l, l = l.dispatch = Km.bind(
        null,
        q,
        l
      ), [e.memoizedState, l];
    },
    useRef: function(l) {
      var t = Xl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = ki(l);
      var t = l.queue, a = rd.bind(null, q, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = Xl();
      return Pi(a, l, t);
    },
    useTransition: function() {
      var l = ki(!1);
      return l = fd.bind(
        null,
        q,
        l.queue,
        !0,
        !1
      ), Xl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var e = q, u = Xl();
      if (w) {
        if (a === void 0)
          throw Error(y(407));
        a = a();
      } else {
        if (a = t(), fl === null)
          throw Error(y(349));
        (L & 127) !== 0 || Yo(e, t, a);
      }
      u.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return u.queue = n, Po(Go.bind(null, e, n, l), [
        l
      ]), e.flags |= 2048, re(
        9,
        { destroy: void 0 },
        jo.bind(
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
      var l = Xl(), t = fl.identifierPrefix;
      if (w) {
        var a = Ct, e = Tt;
        a = (e & ~(1 << 32 - Pl(e) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pu++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = jm++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: tc,
    useFormState: Wo,
    useActionState: Wo,
    useOptimistic: function(l) {
      var t = Xl();
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
        q,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: Ji,
    useCacheRefresh: function() {
      return Xl().memoizedState = Lm.bind(
        null,
        q
      );
    },
    useEffectEvent: function(l) {
      var t = Xl(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((I & 2) !== 0)
          throw Error(y(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, ec = {
    readContext: Hl,
    use: tn,
    useCallback: nd,
    useContext: Hl,
    useEffect: Fi,
    useImperativeHandle: ud,
    useInsertionEffect: td,
    useLayoutEffect: ad,
    useMemo: id,
    useReducer: an,
    useRef: Io,
    useState: function() {
      return an(jt);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = pl();
      return cd(
        a,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = an(jt)[0], t = pl().memoizedState;
      return [
        typeof l == "boolean" ? l : Fe(l),
        t
      ];
    },
    useSyncExternalStore: qo,
    useId: sd,
    useHostTransitionStatus: tc,
    useFormState: ko,
    useActionState: ko,
    useOptimistic: function(l, t) {
      var a = pl();
      return Zo(a, el, l, t);
    },
    useMemoCache: Ji,
    useCacheRefresh: md
  };
  ec.useEffectEvent = ld;
  var vd = {
    readContext: Hl,
    use: tn,
    useCallback: nd,
    useContext: Hl,
    useEffect: Fi,
    useImperativeHandle: ud,
    useInsertionEffect: td,
    useLayoutEffect: ad,
    useMemo: id,
    useReducer: Wi,
    useRef: Io,
    useState: function() {
      return Wi(jt);
    },
    useDebugValue: Ii,
    useDeferredValue: function(l, t) {
      var a = pl();
      return el === null ? Pi(a, l, t) : cd(
        a,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Wi(jt)[0], t = pl().memoizedState;
      return [
        typeof l == "boolean" ? l : Fe(l),
        t
      ];
    },
    useSyncExternalStore: qo,
    useId: sd,
    useHostTransitionStatus: tc,
    useFormState: Fo,
    useActionState: Fo,
    useOptimistic: function(l, t) {
      var a = pl();
      return el !== null ? Zo(a, el, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Ji,
    useCacheRefresh: md
  };
  vd.useEffectEvent = ld;
  function uc(l, t, a, e) {
    t = l.memoizedState, a = a(e, t), a = a == null ? t : U({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var nc = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var e = it(), u = ea(e);
      u.payload = t, a != null && (u.callback = a), t = ua(l, u, e), t !== null && ($l(t, l, e), we(t, l, e));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var e = it(), u = ea(e);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = ua(l, u, e), t !== null && ($l(t, l, e), we(t, l, e));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = it(), e = ea(a);
      e.tag = 2, t != null && (e.callback = t), t = ua(l, e, a), t !== null && ($l(t, l, a), we(t, l, a));
    }
  };
  function bd(l, t, a, e, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Ge(a, e) || !Ge(u, n) : !0;
  }
  function pd(l, t, a, e) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, e), t.state !== l && nc.enqueueReplaceState(t, t.state, null);
  }
  function Ya(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t)
        e !== "ref" && (a[e] = t[e]);
    }
    if (l = l.defaultProps) {
      a === t && (a = U({}, a));
      for (var u in l)
        a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function Sd(l) {
    Yu(l);
  }
  function Ad(l) {
    console.error(l);
  }
  function zd(l) {
    Yu(l);
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
  function Jm(l, t, a, e, u) {
    if (a.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (t = a.alternate, t !== null && ne(
        t,
        a,
        u,
        !0
      ), a = at.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return yt === null ? pn() : a.alternate === null && yl === 0 && (yl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, e === wu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([e]) : t.add(e), xc(l, e, u)), !1;
          case 22:
            return a.flags |= 65536, e === wu ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([e])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([e]) : a.add(e)), xc(l, e, u)), !1;
        }
        throw Error(y(435, a.tag));
      }
      return xc(l, e, u), pn(), !1;
    }
    if (w)
      return t = at.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, e !== Ti && (l = Error(y(422), { cause: e }), Ze(st(l, a)))) : (e !== Ti && (t = Error(y(423), {
        cause: e
      }), Ze(
        st(t, a)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, e = st(e, a), u = ic(
        l.stateNode,
        e,
        u
      ), qi(l, u), yl !== 4 && (yl = 2)), !1;
    var n = Error(y(520), { cause: e });
    if (n = st(n, a), cu === null ? cu = [n] : cu.push(n), yl !== 4 && (yl = 2), t === null) return !0;
    e = st(e, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = u & -u, a.lanes |= l, l = ic(a.stateNode, e, l), qi(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (da === null || !da.has(n))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = _d(u), Td(
              u,
              l,
              a,
              e
            ), qi(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var cc = Error(y(461)), zl = !1;
  function Rl(l, t, a, e) {
    t.child = l === null ? Oo(t, null, a, e) : Ba(
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
    return xa(t), e = Zi(
      l,
      t,
      a,
      i,
      n,
      u
    ), c = Vi(), l !== null && !zl ? (Li(l, t, u), Gt(l, t, u)) : (w && c && Ei(t), t.flags |= 1, Rl(l, t, e, u), t.child);
  }
  function Dd(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Si(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Md(
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
    if (n = l.child, !yc(l, u)) {
      var i = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ge, a(i, e) && l.ref === t.ref)
        return Gt(l, t, u);
    }
    return t.flags |= 1, l = Ht(n, e), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Md(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ge(n, e) && l.ref === t.ref)
        if (zl = !1, t.pendingProps = e = n, yc(l, u))
          (l.flags & 131072) !== 0 && (zl = !0);
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
        ), n !== null ? No(t, n) : ji(), Ho(t);
      else
        return e = t.lanes = 536870912, Ud(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          e
        );
    } else
      n !== null ? (Ku(t, n.cachePool), No(t, n), ia(), t.memoizedState = null) : (l !== null && Ku(t, null), ji(), ia());
    return Rl(l, t, u, a), t.child;
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
    var n = Ni();
    return n = n === null ? null : { parent: Sl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Ku(t, null), ji(), Ho(t), l !== null && ne(l, t, e, !0), t.childLanes = u, null;
  }
  function fn(l, t) {
    return t = dn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function xd(l, t, a) {
    return Ba(t, l.child, null, a), l = fn(t, t.pendingProps), l.flags |= 2, et(t), t.memoizedState = null, l;
  }
  function wm(l, t, a) {
    var e = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (w) {
        if (e.mode === "hidden")
          return l = fn(t, e), t.lanes = 536870912, lu(null, l);
        if (Xi(t), (l = dl) ? (l = Vs(
          l,
          gt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: Tt, overflow: Ct } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = go(l), a.return = t, t.child = a, Nl = t, dl = null)) : l = null, l === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return fn(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Xi(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = xd(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(y(558));
      else if (zl || ne(l, t, a, !1), u = (a & l.childLanes) !== 0, zl || u) {
        if (e = fl, e !== null && (i = Sf(e, a), i !== 0 && i !== n.retryLane))
          throw n.retryLane = i, Da(l, i), $l(e, l, i), cc;
        pn(), t = xd(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, dl = ht(i.nextSibling), Nl = t, w = !0, Pt = null, gt = !1, l !== null && vo(t, l), t = fn(t, e), t.flags |= 4096;
      return t;
    }
    return l = Ht(l.child, {
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
        throw Error(y(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function fc(l, t, a, e, u) {
    return xa(t), a = Zi(
      l,
      t,
      a,
      e,
      void 0,
      u
    ), e = Vi(), l !== null && !zl ? (Li(l, t, u), Gt(l, t, u)) : (w && e && Ei(t), t.flags |= 1, Rl(l, t, a, u), t.child);
  }
  function Nd(l, t, a, e, u, n) {
    return xa(t), t.updateQueue = null, a = Bo(
      t,
      e,
      a,
      u
    ), Ro(l), e = Vi(), l !== null && !zl ? (Li(l, t, n), Gt(l, t, n)) : (w && e && Ei(t), t.flags |= 1, Rl(l, t, a, n), t.child);
  }
  function Hd(l, t, a, e, u) {
    if (xa(t), t.stateNode === null) {
      var n = te, i = a.contextType;
      typeof i == "object" && i !== null && (n = Hl(i)), n = new a(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = nc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, Ri(t), i = a.contextType, n.context = typeof i == "object" && i !== null ? Hl(i) : te, n.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (uc(
        t,
        a,
        i,
        e
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && nc.enqueueReplaceState(n, n.state, null), ke(t, e, n, u), We(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, f = Ya(a, c);
      n.props = f;
      var r = n.context, v = a.contextType;
      i = te, typeof v == "object" && v !== null && (i = Hl(v));
      var S = a.getDerivedStateFromProps;
      v = typeof S == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, v || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || r !== i) && pd(
        t,
        n,
        e,
        i
      ), aa = !1;
      var g = t.memoizedState;
      n.state = g, ke(t, e, n, u), We(), r = t.memoizedState, c || g !== r || aa ? (typeof S == "function" && (uc(
        t,
        a,
        S,
        e
      ), r = t.memoizedState), (f = aa || bd(
        t,
        a,
        f,
        e,
        g,
        r,
        i
      )) ? (v || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = r), n.props = e, n.state = r, n.context = i, e = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !1);
    } else {
      n = t.stateNode, Bi(l, t), i = t.memoizedProps, v = Ya(a, i), n.props = v, S = t.pendingProps, g = n.context, r = a.contextType, f = te, typeof r == "object" && r !== null && (f = Hl(r)), c = a.getDerivedStateFromProps, (r = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== S || g !== f) && pd(
        t,
        n,
        e,
        f
      ), aa = !1, g = t.memoizedState, n.state = g, ke(t, e, n, u), We();
      var h = t.memoizedState;
      i !== S || g !== h || aa || l !== null && l.dependencies !== null && Vu(l.dependencies) ? (typeof c == "function" && (uc(
        t,
        a,
        c,
        e
      ), h = t.memoizedState), (v = aa || bd(
        t,
        a,
        v,
        e,
        g,
        h,
        f
      ) || l !== null && l.dependencies !== null && Vu(l.dependencies)) ? (r || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, h, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        e,
        h,
        f
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = h), n.props = e, n.state = h, n.context = f, e = v) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), e = !1);
    }
    return n = e, on(l, t), e = (t.flags & 128) !== 0, n || e ? (n = t.stateNode, a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && e ? (t.child = Ba(
      t,
      l.child,
      null,
      u
    ), t.child = Ba(
      t,
      null,
      a,
      u
    )) : Rl(l, t, a, u), t.memoizedState = n.state, l = t.child) : l = Gt(
      l,
      t,
      u
    ), l;
  }
  function Rd(l, t, a, e) {
    return Oa(), t.flags |= 256, Rl(l, t, a, e), t.child;
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
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= nt), l;
  }
  function Bd(l, t, a) {
    var e = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (w) {
        if (u ? na(t) : ia(), (l = dl) ? (l = Vs(
          l,
          gt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: Tt, overflow: Ct } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = go(l), a.return = t, t.child = a, Nl = t, dl = null)) : l = null, l === null) throw la(t);
        return wc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = e.children;
      return e = e.fallback, u ? (ia(), u = t.mode, c = dn(
        { mode: "hidden", children: c },
        u
      ), e = Ma(
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
        t.flags & 256 ? (na(t), t.flags &= -257, t = rc(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (ia(), t.child = l.child, t.flags |= 128, t = null) : (ia(), c = e.fallback, u = t.mode, e = dn(
          { mode: "visible", children: e.children },
          u
        ), c = Ma(
          c,
          u,
          a,
          null
        ), c.flags |= 2, e.return = t, c.return = t, e.sibling = c, t.child = e, Ba(
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
        if (i = c.nextSibling && c.nextSibling.dataset, i) var r = i.dgst;
        i = r, e = Error(y(419)), e.stack = "", e.digest = i, Ze({ value: e, source: null, stack: null }), t = rc(
          l,
          t,
          a
        );
      } else if (zl || ne(l, t, a, !1), i = (a & l.childLanes) !== 0, zl || i) {
        if (i = fl, i !== null && (e = Sf(i, a), e !== 0 && e !== f.retryLane))
          throw f.retryLane = e, Da(l, e), $l(i, l, e), cc;
        Jc(c) || pn(), t = rc(
          l,
          t,
          a
        );
      } else
        Jc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, dl = ht(
          c.nextSibling
        ), Nl = t, w = !0, Pt = null, gt = !1, l !== null && vo(t, l), t = mc(
          t,
          e.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (ia(), c = e.fallback, u = t.mode, f = l.child, r = f.sibling, e = Ht(f, {
      mode: "hidden",
      children: e.children
    }), e.subtreeFlags = f.subtreeFlags & 65011712, r !== null ? c = Ht(
      r,
      c
    ) : (c = Ma(
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
    ), t.memoizedState = oc, lu(l.child, e)) : (na(t), a = l.child, l = a.sibling, a = Ht(a, {
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
    return l = tt(22, l, null, t), l.lanes = 0, l;
  }
  function rc(l, t, a) {
    return Ba(t, l.child, null, a), l = mc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function qd(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), Mi(l.return, t, a);
  }
  function gc(l, t, a, e, u, n) {
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
  function Yd(l, t, a) {
    var e = t.pendingProps, u = e.revealOrder, n = e.tail;
    e = e.children;
    var i = bl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, T(bl, i), Rl(l, t, e, a), e = w ? Qe : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && qd(l, a, t);
        else if (l.tag === 19)
          qd(l, a, t);
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
          l = a.alternate, l !== null && Fu(l) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), gc(
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
          if (l = u.alternate, l !== null && Fu(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = a, a = u, u = l;
        }
        gc(
          t,
          !0,
          a,
          null,
          n,
          e
        );
        break;
      case "together":
        gc(
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
      throw Error(y(153));
    if (t.child !== null) {
      for (l = t.child, a = Ht(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = Ht(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function yc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Vu(l)));
  }
  function Wm(l, t, a) {
    switch (t.tag) {
      case 3:
        Gl(t, t.stateNode.containerInfo), ta(t, Sl, l.memoizedState.cache), Oa();
        break;
      case 27:
      case 5:
        Ce(t);
        break;
      case 4:
        Gl(t, t.stateNode.containerInfo);
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
          return e.dehydrated !== null ? (na(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Bd(l, t, a) : (na(t), l = Gt(
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
            return Yd(
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
  function jd(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        zl = !0;
      else {
        if (!yc(l, a) && (t.flags & 128) === 0)
          return zl = !1, Wm(
            l,
            t,
            a
          );
        zl = (l.flags & 131072) !== 0;
      }
    else
      zl = !1, w && (t.flags & 1048576) !== 0 && ho(t, Qe, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (l = Ha(t.elementType), t.type = l, typeof l == "function")
            Si(l) ? (e = Ya(l, e), t.tag = 1, t = Hd(
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
              if (u === ct) {
                t.tag = 11, t = Cd(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              } else if (u === J) {
                t.tag = 14, t = Dd(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              }
            }
            throw t = Ot(l) || l, Error(y(306, t, ""));
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
        return e = t.type, u = Ya(
          e,
          t.pendingProps
        ), Hd(
          l,
          t,
          e,
          u,
          a
        );
      case 3:
        l: {
          if (Gl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(y(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Bi(l, t), ke(t, e, null, a);
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
              t = Rd(
                l,
                t,
                e,
                a
              );
              break l;
            } else if (e !== u) {
              u = st(
                Error(y(424)),
                t
              ), Ze(u), t = Rd(
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
              for (dl = ht(l.firstChild), Nl = t, w = !0, Pt = null, gt = !0, a = Oo(
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
            Rl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return on(l, t), l === null ? (a = ks(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : w || (a = t.type, l = t.pendingProps, e = Cn(
          X.current
        ).createElement(a), e[xl] = t, e[Ll] = l, Bl(e, a, l), Dl(e), t.stateNode = e) : t.memoizedState = ks(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ce(t), l === null && w && (e = t.stateNode = Js(
          t.type,
          t.pendingProps,
          X.current
        ), Nl = t, gt = !0, u = dl, ga(t.type) ? (Wc = u, dl = ht(e.firstChild)) : dl = u), Rl(
          l,
          t,
          t.pendingProps.children,
          a
        ), on(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && w && ((u = e = dl) && (e = _1(
          e,
          t.type,
          t.pendingProps,
          gt
        ), e !== null ? (t.stateNode = e, Nl = t, dl = ht(e.firstChild), gt = !1, u = !0) : u = !1), u || la(t)), Ce(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, e = n.children, Vc(u, n) ? e = null : i !== null && Vc(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = Zi(
          l,
          t,
          Gm,
          null,
          null,
          a
        ), yu._currentValue = u), on(l, t), Rl(l, t, e, a), t.child;
      case 6:
        return l === null && w && ((l = a = dl) && (a = T1(
          a,
          t.pendingProps,
          gt
        ), a !== null ? (t.stateNode = a, Nl = t, dl = null, l = !0) : l = !1), l || la(t)), null;
      case 13:
        return Bd(l, t, a);
      case 4:
        return Gl(
          t,
          t.stateNode.containerInfo
        ), e = t.pendingProps, l === null ? t.child = Ba(
          t,
          null,
          e,
          a
        ) : Rl(l, t, e, a), t.child;
      case 11:
        return Cd(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Rl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Rl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Rl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return e = t.pendingProps, ta(t, t.type, e.value), Rl(l, t, e.children, a), t.child;
      case 9:
        return u = t.type._context, e = t.pendingProps.children, xa(t), u = Hl(u), e = e(u), t.flags |= 1, Rl(l, t, e, a), t.child;
      case 14:
        return Dd(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Md(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Yd(l, t, a);
      case 31:
        return wm(l, t, a);
      case 22:
        return Od(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return xa(t), e = Hl(Sl), l === null ? (u = Ni(), u === null && (u = fl, n = Ui(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= a), u = n), t.memoizedState = { parent: e, cache: u }, Ri(t), ta(t, Sl, u)) : ((l.lanes & a) !== 0 && (Bi(l, t), ke(t, null, null, a), We()), u = l.memoizedState, n = t.memoizedState, u.parent !== e ? (u = { parent: e, cache: e }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ta(t, Sl, e)) : (e = n.cache, ta(t, Sl, e), e !== u.cache && Oi(
          t,
          [Sl],
          a,
          !0
        ))), Rl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(y(156, t.tag));
  }
  function Xt(l) {
    l.flags |= 4;
  }
  function hc(l, t, a, e, u) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (ss()) l.flags |= 8192;
        else
          throw Ra = wu, Hi;
    } else l.flags &= -16777217;
  }
  function Gd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !l0(t))
      if (ss()) l.flags |= 8192;
      else
        throw Ra = wu, Hi;
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? vf() : 536870912, l.lanes |= t, ve |= t);
  }
  function tu(l, t) {
    if (!w)
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
  function sl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags & 65011712, e |= u.flags & 65011712, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags, e |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= e, l.childLanes = a, t;
  }
  function km(l, t, a) {
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
        return sl(t), null;
      case 1:
        return sl(t), null;
      case 3:
        return a = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), qt(Sl), vl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (ue(t) ? Xt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ci())), sl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Xt(t), n !== null ? (sl(t), Gd(t, n)) : (sl(t), hc(
          t,
          u,
          null,
          e,
          a
        ))) : n ? n !== l.memoizedState ? (Xt(t), sl(t), Gd(t, n)) : (sl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && Xt(t), sl(t), hc(
          t,
          u,
          l,
          e,
          a
        )), null;
      case 27:
        if (Au(t), a = X.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && Xt(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(y(166));
            return sl(t), null;
          }
          l = D.current, ue(t) ? bo(t) : (l = Js(u, e, a), t.stateNode = l, Xt(t));
        }
        return sl(t), null;
      case 5:
        if (Au(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && Xt(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(y(166));
            return sl(t), null;
          }
          if (n = D.current, ue(t))
            bo(t);
          else {
            var i = Cn(
              X.current
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
            n[xl] = t, n[Ll] = e;
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
            l: switch (Bl(n, u, e), u) {
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
        return sl(t), hc(
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
            throw Error(y(166));
          if (l = X.current, ue(t)) {
            if (l = t.stateNode, a = t.memoizedProps, e = null, u = Nl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            l[xl] = t, l = !!(l.nodeValue === a || e !== null && e.suppressHydrationWarning === !0 || Bs(l.nodeValue, a)), l || la(t, !0);
          } else
            l = Cn(l).createTextNode(
              e
            ), l[xl] = t, t.stateNode = l;
        }
        return sl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (e = ue(t), a !== null) {
            if (l === null) {
              if (!e) throw Error(y(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(557));
              l[xl] = t;
            } else
              Oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            sl(t), l = !1;
          } else
            a = Ci(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (et(t), t) : (et(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(y(558));
        }
        return sl(t), null;
      case 13:
        if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = ue(t), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(y(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(y(317));
              u[xl] = t;
            } else
              Oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            sl(t), u = !1;
          } else
            u = Ci(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (et(t), t) : (et(t), null);
        }
        return et(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = e !== null, l = l !== null && l.memoizedState !== null, a && (e = t.child, u = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (u = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== u && (e.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), sn(t, t.updateQueue), sl(t), null);
      case 4:
        return vl(), l === null && jc(t.stateNode.containerInfo), sl(t), null;
      case 10:
        return qt(t.type), sl(t), null;
      case 19:
        if (A(bl), e = t.memoizedState, e === null) return sl(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) tu(e, !1);
          else {
            if (yl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Fu(l), n !== null) {
                  for (t.flags |= 128, tu(e, !1), l = n.updateQueue, t.updateQueue = l, sn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    ro(a, l), a = a.sibling;
                  return T(
                    bl,
                    bl.current & 1 | 2
                  ), w && Rt(t, e.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && Fl() > hn && (t.flags |= 128, u = !0, tu(e, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = Fu(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, sn(t, l), tu(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !w)
                return sl(t), null;
            } else
              2 * Fl() - e.renderingStartTime > hn && a !== 536870912 && (t.flags |= 128, u = !0, tu(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (l = e.tail, e.rendering = l, e.tail = l.sibling, e.renderingStartTime = Fl(), l.sibling = null, a = bl.current, T(
          bl,
          u ? a & 1 | 2 : a & 1
        ), w && Rt(t, e.treeForkCount), l) : (sl(t), null);
      case 22:
      case 23:
        return et(t), Gi(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (sl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : sl(t), a = t.updateQueue, a !== null && sn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (t.flags |= 2048), l !== null && A(Na), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), qt(Sl), sl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, t.tag));
  }
  function $m(l, t) {
    switch (_i(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return qt(Sl), vl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Au(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (et(t), t.alternate === null)
            throw Error(y(340));
          Oa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (et(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(y(340));
          Oa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return A(bl), null;
      case 4:
        return vl(), null;
      case 10:
        return qt(t.type), null;
      case 22:
      case 23:
        return et(t), Gi(), l !== null && A(Na), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return qt(Sl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xd(l, t) {
    switch (_i(t), t.tag) {
      case 3:
        qt(Sl), vl();
        break;
      case 26:
      case 27:
      case 5:
        Au(t);
        break;
      case 4:
        vl();
        break;
      case 31:
        t.memoizedState !== null && et(t);
        break;
      case 13:
        et(t);
        break;
      case 19:
        A(bl);
        break;
      case 10:
        qt(t.type);
        break;
      case 22:
      case 23:
        et(t), Gi(), l !== null && A(Na);
        break;
      case 24:
        qt(Sl);
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
      tl(t, t.return, c);
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
              var f = a, r = c;
              try {
                r();
              } catch (v) {
                tl(
                  u,
                  f,
                  v
                );
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (v) {
      tl(t, t.return, v);
    }
  }
  function Qd(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        xo(t, a);
      } catch (e) {
        tl(l, l.return, e);
      }
    }
  }
  function Zd(l, t, a) {
    a.props = Ya(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (e) {
      tl(l, t, e);
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
      tl(l, t, u);
    }
  }
  function Dt(l, t) {
    var a = l.ref, e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          tl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          tl(l, t, u);
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
      tl(l, l.return, u);
    }
  }
  function vc(l, t, a) {
    try {
      var e = l.stateNode;
      b1(e, l.type, a, t), e[Ll] = t;
    } catch (u) {
      tl(l, l.return, u);
    }
  }
  function Ld(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ga(l.type) || l.tag === 4;
  }
  function bc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ld(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ga(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function pc(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = xt));
    else if (e !== 4 && (e === 27 && ga(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (pc(l, t, a), l = l.sibling; l !== null; )
        pc(l, t, a), l = l.sibling;
  }
  function mn(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (e !== 4 && (e === 27 && ga(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (mn(l, t, a), l = l.sibling; l !== null; )
        mn(l, t, a), l = l.sibling;
  }
  function Kd(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Bl(t, e, a), t[xl] = l, t[Ll] = a;
    } catch (n) {
      tl(l, l.return, n);
    }
  }
  var Qt = !1, El = !1, Sc = !1, Jd = typeof WeakSet == "function" ? WeakSet : Set, Ml = null;
  function Fm(l, t) {
    if (l = l.containerInfo, Qc = Hn, l = eo(l), ri(l)) {
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
            var i = 0, c = -1, f = -1, r = 0, v = 0, S = l, g = null;
            t: for (; ; ) {
              for (var h; S !== a || u !== 0 && S.nodeType !== 3 || (c = i + u), S !== n || e !== 0 && S.nodeType !== 3 || (f = i + e), S.nodeType === 3 && (i += S.nodeValue.length), (h = S.firstChild) !== null; )
                g = S, S = h;
              for (; ; ) {
                if (S === l) break t;
                if (g === a && ++r === u && (c = i), g === n && ++v === e && (f = i), (h = S.nextSibling) !== null) break;
                S = g, g = S.parentNode;
              }
              S = h;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Zc = { focusedElem: l, selectionRange: a }, Hn = !1, Ml = t; Ml !== null; )
      if (t = Ml, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Ml = l;
      else
        for (; Ml !== null; ) {
          switch (t = Ml, n = t.alternate, l = t.flags, t.tag) {
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
                  var C = Ya(
                    a.type,
                    u
                  );
                  l = e.getSnapshotBeforeUpdate(
                    C,
                    n
                  ), e.__reactInternalSnapshotBeforeUpdate = l;
                } catch (N) {
                  tl(
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
              if ((l & 1024) !== 0) throw Error(y(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ml = l;
            break;
          }
          Ml = t.return;
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
              tl(a, a.return, i);
            }
          else {
            var u = Ya(
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
              tl(
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
            xo(l, t);
          } catch (i) {
            tl(a, a.return, i);
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
        Vt(l, a), e & 4 && $d(l, a);
        break;
      case 13:
        Vt(l, a), e & 4 && Fd(l, a), e & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = i1.bind(
          null,
          a
        ), C1(l, a))));
        break;
      case 22:
        if (e = a.memoizedState !== null || Qt, !e) {
          t = t !== null && t.memoizedState !== null || El, u = Qt;
          var n = El;
          Qt = e, (El = t) && !n ? Lt(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Vt(l, a), Qt = u, El = n;
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
    t !== null && (l.alternate = null, Wd(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && $n(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ml = null, Jl = !1;
  function Zt(l, t, a) {
    for (a = a.child; a !== null; )
      kd(l, t, a), a = a.sibling;
  }
  function kd(l, t, a) {
    if (Il && typeof Il.onCommitFiberUnmount == "function")
      try {
        Il.onCommitFiberUnmount(De, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        El || Dt(a, t), Zt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        El || Dt(a, t);
        var e = ml, u = Jl;
        ga(a.type) && (ml = a.stateNode, Jl = !1), Zt(
          l,
          t,
          a
        ), mu(a.stateNode), ml = e, Jl = u;
        break;
      case 5:
        El || Dt(a, t);
      case 6:
        if (e = ml, u = Jl, ml = null, Zt(
          l,
          t,
          a
        ), ml = e, Jl = u, ml !== null)
          if (Jl)
            try {
              (ml.nodeType === 9 ? ml.body : ml.nodeName === "HTML" ? ml.ownerDocument.body : ml).removeChild(a.stateNode);
            } catch (n) {
              tl(
                a,
                t,
                n
              );
            }
          else
            try {
              ml.removeChild(a.stateNode);
            } catch (n) {
              tl(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        ml !== null && (Jl ? (l = ml, Qs(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), Te(l)) : Qs(ml, a.stateNode));
        break;
      case 4:
        e = ml, u = Jl, ml = a.stateNode.containerInfo, Jl = !0, Zt(
          l,
          t,
          a
        ), ml = e, Jl = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ca(2, a, t), El || ca(4, a, t), Zt(
          l,
          t,
          a
        );
        break;
      case 1:
        El || (Dt(a, t), e = a.stateNode, typeof e.componentWillUnmount == "function" && Zd(
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
        El = (e = El) || a.memoizedState !== null, Zt(
          l,
          t,
          a
        ), El = e;
        break;
      default:
        Zt(
          l,
          t,
          a
        );
    }
  }
  function $d(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Te(l);
      } catch (a) {
        tl(t, t.return, a);
      }
    }
  }
  function Fd(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Te(l);
      } catch (a) {
        tl(t, t.return, a);
      }
  }
  function Im(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Jd()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Jd()), t;
      default:
        throw Error(y(435, l.tag));
    }
  }
  function rn(l, t) {
    var a = Im(l);
    t.forEach(function(e) {
      if (!a.has(e)) {
        a.add(e);
        var u = c1.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function wl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e], n = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ga(c.type)) {
                ml = c.stateNode, Jl = !1;
                break l;
              }
              break;
            case 5:
              ml = c.stateNode, Jl = !1;
              break l;
            case 3:
            case 4:
              ml = c.stateNode.containerInfo, Jl = !0;
              break l;
          }
          c = c.return;
        }
        if (ml === null) throw Error(y(160));
        kd(n, i, u), ml = null, Jl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
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
        wl(t, l), Wl(l), e & 4 && (ca(3, l, l.return), au(3, l), ca(5, l, l.return));
        break;
      case 1:
        wl(t, l), Wl(l), e & 512 && (El || a === null || Dt(a, a.return)), e & 64 && Qt && (l = l.updateQueue, l !== null && (e = l.callbacks, e !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        var u = St;
        if (wl(t, l), Wl(l), e & 512 && (El || a === null || Dt(a, a.return)), e & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (e = l.memoizedState, a === null)
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  e = l.type, a = l.memoizedProps, u = u.ownerDocument || u;
                  t: switch (e) {
                    case "title":
                      n = u.getElementsByTagName("title")[0], (!n || n[Ue] || n[xl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(e), u.head.insertBefore(
                        n,
                        u.querySelector("head > title")
                      )), Bl(n, e, a), n[xl] = l, Dl(n), e = n;
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
                      n = u.createElement(e), Bl(n, e, a), u.head.appendChild(n);
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
                      n = u.createElement(e), Bl(n, e, a), u.head.appendChild(n);
                      break;
                    default:
                      throw Error(y(468, e));
                  }
                  n[xl] = l, Dl(n), e = n;
                }
                l.stateNode = e;
              } else
                Ps(
                  u,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Fs(
                u,
                e,
                l.memoizedProps
              );
          else
            n !== e ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, e === null ? Ps(
              u,
              l.type,
              l.stateNode
            ) : Fs(
              u,
              e,
              l.memoizedProps
            )) : e === null && l.stateNode !== null && vc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        wl(t, l), Wl(l), e & 512 && (El || a === null || Dt(a, a.return)), a !== null && e & 4 && vc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (wl(t, l), Wl(l), e & 512 && (El || a === null || Dt(a, a.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            Wa(u, "");
          } catch (C) {
            tl(l, l.return, C);
          }
        }
        e & 4 && l.stateNode != null && (u = l.memoizedProps, vc(
          l,
          u,
          a !== null ? a.memoizedProps : u
        )), e & 1024 && (Sc = !0);
        break;
      case 6:
        if (wl(t, l), Wl(l), e & 4) {
          if (l.stateNode === null)
            throw Error(y(162));
          e = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = e;
          } catch (C) {
            tl(l, l.return, C);
          }
        }
        break;
      case 3:
        if (On = null, u = St, St = Dn(t.containerInfo), wl(t, l), St = u, Wl(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Te(t.containerInfo);
          } catch (C) {
            tl(l, l.return, C);
          }
        Sc && (Sc = !1, Pd(l));
        break;
      case 4:
        e = St, St = Dn(
          l.stateNode.containerInfo
        ), wl(t, l), Wl(l), St = e;
        break;
      case 12:
        wl(t, l), Wl(l);
        break;
      case 31:
        wl(t, l), Wl(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, rn(l, e)));
        break;
      case 13:
        wl(t, l), Wl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (yn = Fl()), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, rn(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null, r = Qt, v = El;
        if (Qt = r || u, El = v || f, wl(t, l), El = v, Qt = r, Wl(l), e & 8192)
          l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || f || Qt || El || ja(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (n = f.stateNode, u)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = f.stateNode;
                    var S = f.memoizedProps.style, g = S != null && S.hasOwnProperty("display") ? S.display : null;
                    c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (C) {
                  tl(f, f.return, C);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (C) {
                  tl(f, f.return, C);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var h = f.stateNode;
                  u ? Zs(h, !0) : Zs(f.stateNode, !1);
                } catch (C) {
                  tl(f, f.return, C);
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
        e & 4 && (e = l.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, rn(l, a))));
        break;
      case 19:
        wl(t, l), Wl(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, rn(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        wl(t, l), Wl(l);
    }
  }
  function Wl(l) {
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
        if (a == null) throw Error(y(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, n = bc(l);
            mn(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Wa(i, ""), a.flags &= -33);
            var c = bc(l);
            mn(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo, r = bc(l);
            pc(
              l,
              r,
              f
            );
            break;
          default:
            throw Error(y(161));
        }
      } catch (v) {
        tl(l, l.return, v);
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
  function ja(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, t, t.return), ja(t);
          break;
        case 1:
          Dt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Zd(
            t,
            t.return,
            a
          ), ja(t);
          break;
        case 27:
          mu(t.stateNode);
        case 26:
        case 5:
          Dt(t, t.return), ja(t);
          break;
        case 22:
          t.memoizedState === null && ja(t);
          break;
        case 30:
          ja(t);
          break;
        default:
          ja(t);
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
            } catch (r) {
              tl(e, e.return, r);
            }
          if (e = n, u = e.updateQueue, u !== null) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Uo(f[u], c);
            } catch (r) {
              tl(e, e.return, r);
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
          ), a && i & 4 && $d(u, n);
          break;
        case 13:
          Lt(
            u,
            n,
            a
          ), a && i & 4 && Fd(u, n);
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
  function At(l, t, a, e) {
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
        At(
          l,
          t,
          a,
          e
        ), u & 2048 && au(9, t);
        break;
      case 1:
        At(
          l,
          t,
          a,
          e
        );
        break;
      case 3:
        At(
          l,
          t,
          a,
          e
        ), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ve(l)));
        break;
      case 12:
        if (u & 2048) {
          At(
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
            tl(t, t.return, f);
          }
        } else
          At(
            l,
            t,
            a,
            e
          );
        break;
      case 31:
        At(
          l,
          t,
          a,
          e
        );
        break;
      case 13:
        At(
          l,
          t,
          a,
          e
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? At(
          l,
          t,
          a,
          e
        ) : uu(l, t) : n._visibility & 2 ? At(
          l,
          t,
          a,
          e
        ) : (n._visibility |= 2, ge(
          l,
          t,
          a,
          e,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Ac(i, t);
        break;
      case 24:
        At(
          l,
          t,
          a,
          e
        ), u & 2048 && zc(t.alternate, t);
        break;
      default:
        At(
          l,
          t,
          a,
          e
        );
    }
  }
  function ge(l, t, a, e, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, i = t, c = a, f = e, r = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ge(
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
          var v = i.stateNode;
          i.memoizedState !== null ? v._visibility & 2 ? ge(
            n,
            i,
            c,
            f,
            u
          ) : uu(
            n,
            i
          ) : (v._visibility |= 2, ge(
            n,
            i,
            c,
            f,
            u
          )), u && r & 2048 && Ac(
            i.alternate,
            i
          );
          break;
        case 24:
          ge(
            n,
            i,
            c,
            f,
            u
          ), u && r & 2048 && zc(i.alternate, i);
          break;
        default:
          ge(
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
  function ye(l, t, a) {
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
        ye(
          l,
          t,
          a
        ), l.flags & nu && l.memoizedState !== null && j1(
          a,
          St,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ye(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var e = St;
        St = Dn(l.stateNode.containerInfo), ye(
          l,
          t,
          a
        ), St = e;
        break;
      case 22:
        l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = nu, nu = 16777216, ye(
          l,
          t,
          a
        ), nu = e) : ye(
          l,
          t,
          a
        ));
        break;
      default:
        ye(
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
          Ml = e, us(
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
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, gn(l)) : iu(l);
        break;
      default:
        iu(l);
    }
  }
  function gn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          Ml = e, us(
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
          ca(8, t, t.return), gn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, gn(t));
          break;
        default:
          gn(t);
      }
      l = l.sibling;
    }
  }
  function us(l, t) {
    for (; Ml !== null; ) {
      var a = Ml;
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
      if (e = a.child, e !== null) e.return = a, Ml = e;
      else
        l: for (a = l; Ml !== null; ) {
          e = Ml;
          var u = e.sibling, n = e.return;
          if (Wd(e), e === a) {
            Ml = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Ml = u;
            break l;
          }
          Ml = n;
        }
    }
  }
  var Pm = {
    getCacheForType: function(l) {
      var t = Hl(Sl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Hl(Sl).controller.signal;
    }
  }, l1 = typeof WeakMap == "function" ? WeakMap : Map, I = 0, fl = null, Q = null, L = 0, ll = 0, ut = null, fa = !1, he = !1, Ec = !1, Kt = 0, yl = 0, oa = 0, Ga = 0, _c = 0, nt = 0, ve = 0, cu = null, kl = null, Tc = !1, yn = 0, ns = 0, hn = 1 / 0, vn = null, da = null, _l = 0, sa = null, be = null, Jt = 0, Cc = 0, Dc = null, is = null, fu = 0, Mc = null;
  function it() {
    return (I & 2) !== 0 && L !== 0 ? L & -L : b.T !== null ? Rc() : Af();
  }
  function cs() {
    if (nt === 0)
      if ((L & 536870912) === 0 || w) {
        var l = _u;
        _u <<= 1, (_u & 3932160) === 0 && (_u = 262144), nt = l;
      } else nt = 536870912;
    return l = at.current, l !== null && (l.flags |= 32), nt;
  }
  function $l(l, t, a) {
    (l === fl && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null) && (pe(l, 0), ma(
      l,
      L,
      nt,
      !1
    )), Oe(l, a), ((I & 2) === 0 || l !== fl) && (l === fl && ((I & 2) === 0 && (Ga |= a), yl === 4 && ma(
      l,
      L,
      nt,
      !1
    )), Mt(l));
  }
  function fs(l, t, a) {
    if ((I & 6) !== 0) throw Error(y(327));
    var e = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Me(l, t), u = e ? e1(l, t) : Uc(l, t, !0), n = e;
    do {
      if (u === 0) {
        he && !e && ma(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !t1(a)) {
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
              if (f && (pe(c, i).flags |= 256), i = Uc(
                c,
                i,
                !1
              ), i !== 2) {
                if (Ec && !f) {
                  c.errorRecoveryDisabledLanes |= n, Ga |= n, u = 4;
                  break l;
                }
                n = kl, kl = u, n !== null && (kl === null ? kl = n : kl.push.apply(
                  kl,
                  n
                ));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          pe(l, 0), ma(l, t, 0, !0);
          break;
        }
        l: {
          switch (e = l, n = u, n) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ma(
                e,
                t,
                nt,
                !fa
              );
              break l;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((t & 62914560) === t && (u = yn + 300 - Fl(), 10 < u)) {
            if (ma(
              e,
              t,
              nt,
              !fa
            ), Cu(e, 0, !0) !== 0) break l;
            Jt = t, e.timeoutHandle = Gs(
              os.bind(
                null,
                e,
                a,
                kl,
                vn,
                Tc,
                t,
                nt,
                Ga,
                ve,
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
            kl,
            vn,
            Tc,
            t,
            nt,
            Ga,
            ve,
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
  function os(l, t, a, e, u, n, i, c, f, r, v, S, g, h) {
    if (l.timeoutHandle = -1, S = t.subtreeFlags, S & 8192 || (S & 16785408) === 16785408) {
      S = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: xt
      }, ts(
        t,
        n,
        S
      );
      var C = (n & 62914560) === n ? yn - Fl() : (n & 4194048) === n ? ns - Fl() : 0;
      if (C = G1(
        S,
        C
      ), C !== null) {
        Jt = n, l.cancelPendingCommit = C(
          vs.bind(
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
            v,
            S,
            null,
            g,
            h
          )
        ), ma(l, n, i, !r);
        return;
      }
    }
    vs(
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
  function t1(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var e = 0; e < a.length; e++) {
          var u = a[e], n = u.getSnapshot;
          u = u.value;
          try {
            if (!lt(n(), u)) return !1;
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
      var n = 31 - Pl(u), i = 1 << n;
      e[n] = -1, u &= ~i;
    }
    a !== 0 && bf(l, a, t);
  }
  function bn() {
    return (I & 6) === 0 ? (ou(0), !1) : !0;
  }
  function Oc() {
    if (Q !== null) {
      if (ll === 0)
        var l = Q.return;
      else
        l = Q, Bt = Ua = null, Ki(l), oe = null, Ke = 0, l = Q;
      for (; l !== null; )
        Xd(l.alternate, l), l = l.return;
      Q = null;
    }
  }
  function pe(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, A1(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Jt = 0, Oc(), fl = l, Q = a = Ht(l.current, null), L = t, ll = 0, ut = null, fa = !1, he = Me(l, t), Ec = !1, ve = nt = _c = Ga = oa = yl = 0, kl = cu = null, Tc = !1, (t & 8) !== 0 && (t |= t & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - Pl(e), n = 1 << u;
        t |= l[u], e &= ~n;
      }
    return Kt = t, ju(), a;
  }
  function ds(l, t) {
    q = null, b.H = Pe, t === fe || t === Ju ? (t = Co(), ll = 3) : t === Hi ? (t = Co(), ll = 4) : ll = t === cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, Q === null && (yl = 1, cn(
      l,
      st(t, l.current)
    ));
  }
  function ss() {
    var l = at.current;
    return l === null ? !0 : (L & 4194048) === L ? yt === null : (L & 62914560) === L || (L & 536870912) !== 0 ? l === yt : !1;
  }
  function ms() {
    var l = b.H;
    return b.H = Pe, l === null ? Pe : l;
  }
  function rs() {
    var l = b.A;
    return b.A = Pm, l;
  }
  function pn() {
    yl = 4, fa || (L & 4194048) !== L && at.current !== null || (he = !0), (oa & 134217727) === 0 && (Ga & 134217727) === 0 || fl === null || ma(
      fl,
      L,
      nt,
      !1
    );
  }
  function Uc(l, t, a) {
    var e = I;
    I |= 2;
    var u = ms(), n = rs();
    (fl !== l || L !== t) && (vn = null, pe(l, t)), t = !1;
    var i = yl;
    l: do
      try {
        if (ll !== 0 && Q !== null) {
          var c = Q, f = ut;
          switch (ll) {
            case 8:
              Oc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              at.current === null && (t = !0);
              var r = ll;
              if (ll = 0, ut = null, Se(l, c, f, r), a && he) {
                i = 0;
                break l;
              }
              break;
            default:
              r = ll, ll = 0, ut = null, Se(l, c, f, r);
          }
        }
        a1(), i = yl;
        break;
      } catch (v) {
        ds(l, v);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Bt = Ua = null, I = e, b.H = u, b.A = n, Q === null && (fl = null, L = 0, ju()), i;
  }
  function a1() {
    for (; Q !== null; ) gs(Q);
  }
  function e1(l, t) {
    var a = I;
    I |= 2;
    var e = ms(), u = rs();
    fl !== l || L !== t ? (vn = null, hn = Fl() + 500, pe(l, t)) : he = Me(
      l,
      t
    );
    l: do
      try {
        if (ll !== 0 && Q !== null) {
          t = Q;
          var n = ut;
          t: switch (ll) {
            case 1:
              ll = 0, ut = null, Se(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (_o(n)) {
                ll = 0, ut = null, ys(t);
                break;
              }
              t = function() {
                ll !== 2 && ll !== 9 || fl !== l || (ll = 7), Mt(l);
              }, n.then(t, t);
              break l;
            case 3:
              ll = 7;
              break l;
            case 4:
              ll = 5;
              break l;
            case 7:
              _o(n) ? (ll = 0, ut = null, ys(t)) : (ll = 0, ut = null, Se(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (Q.tag) {
                case 26:
                  i = Q.memoizedState;
                case 5:
                case 27:
                  var c = Q;
                  if (i ? l0(i) : c.stateNode.complete) {
                    ll = 0, ut = null;
                    var f = c.sibling;
                    if (f !== null) Q = f;
                    else {
                      var r = c.return;
                      r !== null ? (Q = r, Sn(r)) : Q = null;
                    }
                    break t;
                  }
              }
              ll = 0, ut = null, Se(l, t, n, 5);
              break;
            case 6:
              ll = 0, ut = null, Se(l, t, n, 6);
              break;
            case 8:
              Oc(), yl = 6;
              break l;
            default:
              throw Error(y(462));
          }
        }
        u1();
        break;
      } catch (v) {
        ds(l, v);
      }
    while (!0);
    return Bt = Ua = null, b.H = e, b.A = u, I = a, Q !== null ? 0 : (fl = null, L = 0, ju(), yl);
  }
  function u1() {
    for (; Q !== null && !D0(); )
      gs(Q);
  }
  function gs(l) {
    var t = jd(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? Sn(l) : Q = t;
  }
  function ys(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Nd(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          L
        );
        break;
      case 11:
        t = Nd(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          L
        );
        break;
      case 5:
        Ki(t);
      default:
        Xd(a, t), t = Q = ro(t, Kt), t = jd(a, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? Sn(l) : Q = t;
  }
  function Se(l, t, a, e) {
    Bt = Ua = null, Ki(t), oe = null, Ke = 0;
    var u = t.return;
    try {
      if (Jm(
        l,
        u,
        t,
        a,
        L
      )) {
        yl = 1, cn(
          l,
          st(a, l.current)
        ), Q = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw Q = u, n;
      yl = 1, cn(
        l,
        st(a, l.current)
      ), Q = null;
      return;
    }
    t.flags & 32768 ? (w || e === 1 ? l = !0 : he || (L & 536870912) !== 0 ? l = !1 : (fa = l = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = at.current, e !== null && e.tag === 13 && (e.flags |= 16384))), hs(t, l)) : Sn(t);
  }
  function Sn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        hs(
          t,
          fa
        );
        return;
      }
      l = t.return;
      var a = km(
        t.alternate,
        t,
        Kt
      );
      if (a !== null) {
        Q = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Q = t;
        return;
      }
      Q = t = l;
    } while (t !== null);
    yl === 0 && (yl = 5);
  }
  function hs(l, t) {
    do {
      var a = $m(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, Q = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        Q = l;
        return;
      }
      Q = l = a;
    } while (l !== null);
    yl = 6, Q = null;
  }
  function vs(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do
      An();
    while (_l !== 0);
    if ((I & 6) !== 0) throw Error(y(327));
    if (t !== null) {
      if (t === l.current) throw Error(y(177));
      if (n = t.lanes | t.childLanes, n |= bi, Y0(
        l,
        a,
        n,
        i,
        c,
        f
      ), l === fl && (Q = fl = null, L = 0), be = t, sa = l, Jt = a, Cc = n, Dc = u, is = e, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, f1(zu, function() {
        return zs(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
        e = b.T, b.T = null, u = _.p, _.p = 2, i = I, I |= 4;
        try {
          Fm(l, t, a);
        } finally {
          I = i, _.p = u, b.T = e;
        }
      }
      _l = 1, bs(), ps(), Ss();
    }
  }
  function bs() {
    if (_l === 1) {
      _l = 0;
      var l = sa, t = be, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null;
        var e = _.p;
        _.p = 2;
        var u = I;
        I |= 4;
        try {
          Id(t, l);
          var n = Zc, i = eo(l.containerInfo), c = n.focusedElem, f = n.selectionRange;
          if (i !== c && c && c.ownerDocument && ao(
            c.ownerDocument.documentElement,
            c
          )) {
            if (f !== null && ri(c)) {
              var r = f.start, v = f.end;
              if (v === void 0 && (v = r), "selectionStart" in c)
                c.selectionStart = r, c.selectionEnd = Math.min(
                  v,
                  c.value.length
                );
              else {
                var S = c.ownerDocument || document, g = S && S.defaultView || window;
                if (g.getSelection) {
                  var h = g.getSelection(), C = c.textContent.length, N = Math.min(f.start, C), nl = f.end === void 0 ? N : Math.min(f.end, C);
                  !h.extend && N > nl && (i = nl, nl = N, N = i);
                  var s = to(
                    c,
                    N
                  ), o = to(
                    c,
                    nl
                  );
                  if (s && o && (h.rangeCount !== 1 || h.anchorNode !== s.node || h.anchorOffset !== s.offset || h.focusNode !== o.node || h.focusOffset !== o.offset)) {
                    var m = S.createRange();
                    m.setStart(s.node, s.offset), h.removeAllRanges(), N > nl ? (h.addRange(m), h.extend(o.node, o.offset)) : (m.setEnd(o.node, o.offset), h.addRange(m));
                  }
                }
              }
            }
            for (S = [], h = c; h = h.parentNode; )
              h.nodeType === 1 && S.push({
                element: h,
                left: h.scrollLeft,
                top: h.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < S.length; c++) {
              var p = S[c];
              p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
            }
          }
          Hn = !!Qc, Zc = Qc = null;
        } finally {
          I = u, _.p = e, b.T = a;
        }
      }
      l.current = t, _l = 2;
    }
  }
  function ps() {
    if (_l === 2) {
      _l = 0;
      var l = sa, t = be, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = b.T, b.T = null;
        var e = _.p;
        _.p = 2;
        var u = I;
        I |= 4;
        try {
          wd(l, t.alternate, t);
        } finally {
          I = u, _.p = e, b.T = a;
        }
      }
      _l = 3;
    }
  }
  function Ss() {
    if (_l === 4 || _l === 3) {
      _l = 0, M0();
      var l = sa, t = be, a = Jt, e = is;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? _l = 5 : (_l = 0, be = sa = null, As(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (da = null), Wn(a), t = t.stateNode, Il && typeof Il.onCommitFiberRoot == "function")
        try {
          Il.onCommitFiberRoot(
            De,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (e !== null) {
        t = b.T, u = _.p, _.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          b.T = t, _.p = u;
        }
      }
      (Jt & 3) !== 0 && An(), Mt(l), u = l.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? l === Mc ? fu++ : (fu = 0, Mc = l) : fu = 0, ou(0);
    }
  }
  function As(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ve(t)));
  }
  function An() {
    return bs(), ps(), Ss(), zs();
  }
  function zs() {
    if (_l !== 5) return !1;
    var l = sa, t = Cc;
    Cc = 0;
    var a = Wn(Jt), e = b.T, u = _.p;
    try {
      _.p = 32 > a ? 32 : a, b.T = null, a = Dc, Dc = null;
      var n = sa, i = Jt;
      if (_l = 0, be = sa = null, Jt = 0, (I & 6) !== 0) throw Error(y(331));
      var c = I;
      if (I |= 4, es(n.current), ls(
        n,
        n.current,
        i,
        a
      ), I = c, ou(0, !1), Il && typeof Il.onPostCommitFiberRoot == "function")
        try {
          Il.onPostCommitFiberRoot(De, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = u, b.T = e, As(l, t);
    }
  }
  function Es(l, t, a) {
    t = st(a, t), t = ic(l.stateNode, t, 2), l = ua(l, t, 2), l !== null && (Oe(l, 2), Mt(l));
  }
  function tl(l, t, a) {
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
            l = st(a, l), a = _d(2), e = ua(t, a, 2), e !== null && (Td(
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
  function xc(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new l1();
      var u = /* @__PURE__ */ new Set();
      e.set(t, u);
    } else
      u = e.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), e.set(t, u));
    u.has(a) || (Ec = !0, u.add(a), l = n1.bind(null, l, t, a), t.then(l, l));
  }
  function n1(l, t, a) {
    var e = l.pingCache;
    e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, fl === l && (L & a) === a && (yl === 4 || yl === 3 && (L & 62914560) === L && 300 > Fl() - yn ? (I & 2) === 0 && pe(l, 0) : _c |= a, ve === L && (ve = 0)), Mt(l);
  }
  function _s(l, t) {
    t === 0 && (t = vf()), l = Da(l, t), l !== null && (Oe(l, t), Mt(l));
  }
  function i1(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), _s(l, a);
  }
  function c1(l, t) {
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
        throw Error(y(314));
    }
    e !== null && e.delete(t), _s(l, a);
  }
  function f1(l, t) {
    return Ln(l, t);
  }
  var zn = null, Ae = null, Nc = !1, En = !1, Hc = !1, ra = 0;
  function Mt(l) {
    l !== Ae && l.next === null && (Ae === null ? zn = Ae = l : Ae = Ae.next = l), En = !0, Nc || (Nc = !0, d1());
  }
  function ou(l, t) {
    if (!Hc && En) {
      Hc = !0;
      do
        for (var a = !1, e = zn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes, c = e.pingedLanes;
              n = (1 << 31 - Pl(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, Ms(e, n));
          } else
            n = L, n = Cu(
              e,
              e === fl ? n : 0,
              e.cancelPendingCommit !== null || e.timeoutHandle !== -1
            ), (n & 3) === 0 || Me(e, n) || (a = !0, Ms(e, n));
          e = e.next;
        }
      while (a);
      Hc = !1;
    }
  }
  function o1() {
    Ts();
  }
  function Ts() {
    En = Nc = !1;
    var l = 0;
    ra !== 0 && S1() && (l = ra);
    for (var t = Fl(), a = null, e = zn; e !== null; ) {
      var u = e.next, n = Cs(e, t);
      n === 0 ? (e.next = null, a === null ? zn = u : a.next = u, u === null && (Ae = a)) : (a = e, (l !== 0 || (n & 3) !== 0) && (En = !0)), e = u;
    }
    _l !== 0 && _l !== 5 || ou(l), ra !== 0 && (ra = 0);
  }
  function Cs(l, t) {
    for (var a = l.suspendedLanes, e = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - Pl(n), c = 1 << i, f = u[i];
      f === -1 ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = q0(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = fl, a = L, a = Cu(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e = l.callbackNode, a === 0 || l === t && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null)
      return e !== null && e !== null && Kn(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Me(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (e !== null && Kn(e), Wn(a)) {
        case 2:
        case 8:
          a = yf;
          break;
        case 32:
          a = zu;
          break;
        case 268435456:
          a = hf;
          break;
        default:
          a = zu;
      }
      return e = Ds.bind(null, l), a = Ln(a, e), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return e !== null && e !== null && Kn(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Ds(l, t) {
    if (_l !== 0 && _l !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (An() && l.callbackNode !== a)
      return null;
    var e = L;
    return e = Cu(
      l,
      l === fl ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e === 0 ? null : (fs(l, e, t), Cs(l, Fl()), l.callbackNode != null && l.callbackNode === a ? Ds.bind(null, l) : null);
  }
  function Ms(l, t) {
    if (An()) return null;
    fs(l, t, !0);
  }
  function d1() {
    z1(function() {
      (I & 6) !== 0 ? Ln(
        gf,
        o1
      ) : Ts();
    });
  }
  function Rc() {
    if (ra === 0) {
      var l = ie;
      l === 0 && (l = Eu, Eu <<= 1, (Eu & 261888) === 0 && (Eu = 256)), ra = l;
    }
    return ra;
  }
  function Os(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Uu("" + l);
  }
  function Us(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function s1(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = Os(
        (u[Ll] || null).action
      ), i = e.submitter;
      i && (t = (t = i[Ll] || null) ? Os(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new Ru(
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
                if (ra !== 0) {
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
  for (var Bc = 0; Bc < vi.length; Bc++) {
    var qc = vi[Bc], m1 = qc.toLowerCase(), r1 = qc[0].toUpperCase() + qc.slice(1);
    pt(
      m1,
      "on" + r1
    );
  }
  pt(io, "onAnimationEnd"), pt(co, "onAnimationIteration"), pt(fo, "onAnimationStart"), pt("dblclick", "onDoubleClick"), pt("focusin", "onFocus"), pt("focusout", "onBlur"), pt(Om, "onTransitionRun"), pt(Um, "onTransitionStart"), pt(xm, "onTransitionCancel"), pt(oo, "onTransitionEnd"), Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]), Ea(
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
  ), g1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du)
  );
  function xs(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a], u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i], f = c.instance, r = c.currentTarget;
            if (c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = r;
            try {
              n(u);
            } catch (v) {
              Yu(v);
            }
            u.currentTarget = null, n = f;
          }
        else
          for (i = 0; i < e.length; i++) {
            if (c = e[i], f = c.instance, r = c.currentTarget, c = c.listener, f !== n && u.isPropagationStopped())
              break l;
            n = c, u.currentTarget = r;
            try {
              n(u);
            } catch (v) {
              Yu(v);
            }
            u.currentTarget = null, n = f;
          }
      }
    }
  }
  function Z(l, t) {
    var a = t[kn];
    a === void 0 && (a = t[kn] = /* @__PURE__ */ new Set());
    var e = l + "__bubble";
    a.has(e) || (Ns(t, l, 2, !1), a.add(e));
  }
  function Yc(l, t, a) {
    var e = 0;
    t && (e |= 4), Ns(
      a,
      l,
      e,
      t
    );
  }
  var _n = "_reactListening" + Math.random().toString(36).slice(2);
  function jc(l) {
    if (!l[_n]) {
      l[_n] = !0, _f.forEach(function(a) {
        a !== "selectionchange" && (g1.has(a) || Yc(a, !1, l), Yc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_n] || (t[_n] = !0, Yc("selectionchange", !1, t));
    }
  }
  function Ns(l, t, a, e) {
    switch (c0(t)) {
      case 2:
        var u = Z1;
        break;
      case 8:
        u = V1;
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
    qf(function() {
      var r = n, v = ai(a), S = [];
      l: {
        var g = so.get(l);
        if (g !== void 0) {
          var h = Ru, C = l;
          switch (l) {
            case "keypress":
              if (Nu(a) === 0) break l;
            case "keydown":
            case "keyup":
              h = cm;
              break;
            case "focusin":
              C = "focus", h = fi;
              break;
            case "focusout":
              C = "blur", h = fi;
              break;
            case "beforeblur":
            case "afterblur":
              h = fi;
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
              h = Gf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = k0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = dm;
              break;
            case io:
            case co:
            case fo:
              h = I0;
              break;
            case oo:
              h = mm;
              break;
            case "scroll":
            case "scrollend":
              h = w0;
              break;
            case "wheel":
              h = gm;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = lm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = Qf;
              break;
            case "toggle":
            case "beforetoggle":
              h = hm;
          }
          var N = (t & 4) !== 0, nl = !N && (l === "scroll" || l === "scrollend"), s = N ? g !== null ? g + "Capture" : null : g;
          N = [];
          for (var o = r, m; o !== null; ) {
            var p = o;
            if (m = p.stateNode, p = p.tag, p !== 5 && p !== 26 && p !== 27 || m === null || s === null || (p = Ne(o, s), p != null && N.push(
              su(o, p, m)
            )), nl) break;
            o = o.return;
          }
          0 < N.length && (g = new h(
            g,
            C,
            null,
            a,
            v
          ), S.push({ event: g, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", h = l === "mouseout" || l === "pointerout", g && a !== ti && (C = a.relatedTarget || a.fromElement) && (Va(C) || C[Za]))
            break l;
          if ((h || g) && (g = v.window === v ? v : (g = v.ownerDocument) ? g.defaultView || g.parentWindow : window, h ? (C = a.relatedTarget || a.toElement, h = r, C = C ? Va(C) : null, C !== null && (nl = ol(C), N = C.tag, C !== nl || N !== 5 && N !== 27 && N !== 6) && (C = null)) : (h = null, C = r), h !== C)) {
            if (N = Gf, p = "onMouseLeave", s = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (N = Qf, p = "onPointerLeave", s = "onPointerEnter", o = "pointer"), nl = h == null ? g : xe(h), m = C == null ? g : xe(C), g = new N(
              p,
              o + "leave",
              h,
              a,
              v
            ), g.target = nl, g.relatedTarget = m, p = null, Va(v) === r && (N = new N(
              s,
              o + "enter",
              C,
              a,
              v
            ), N.target = m, N.relatedTarget = nl, p = N), nl = p, h && C)
              t: {
                for (N = y1, s = h, o = C, m = 0, p = s; p; p = N(p))
                  m++;
                p = 0;
                for (var x = o; x; x = N(x))
                  p++;
                for (; 0 < m - p; )
                  s = N(s), m--;
                for (; 0 < p - m; )
                  o = N(o), p--;
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
            h !== null && Hs(
              S,
              g,
              h,
              N,
              !1
            ), C !== null && nl !== null && Hs(
              S,
              nl,
              C,
              N,
              !0
            );
          }
        }
        l: {
          if (g = r ? xe(r) : window, h = g.nodeName && g.nodeName.toLowerCase(), h === "select" || h === "input" && g.type === "file")
            var $ = kf;
          else if (wf(g))
            if ($f)
              $ = Cm;
            else {
              $ = _m;
              var M = Em;
            }
          else
            h = g.nodeName, !h || h.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? r && li(r.elementType) && ($ = kf) : $ = Tm;
          if ($ && ($ = $(l, r))) {
            Wf(
              S,
              $,
              a,
              v
            );
            break l;
          }
          M && M(l, g, r), l === "focusout" && r && g.type === "number" && r.memoizedProps.value != null && Pn(g, "number", g.value);
        }
        switch (M = r ? xe(r) : window, l) {
          case "focusin":
            (wf(M) || M.contentEditable === "true") && (Ia = M, gi = r, Xe = null);
            break;
          case "focusout":
            Xe = gi = Ia = null;
            break;
          case "mousedown":
            yi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yi = !1, uo(S, a, v);
            break;
          case "selectionchange":
            if (Mm) break;
          case "keydown":
          case "keyup":
            uo(S, a, v);
        }
        var j;
        if (di)
          l: {
            switch (l) {
              case "compositionstart":
                var K = "onCompositionStart";
                break l;
              case "compositionend":
                K = "onCompositionEnd";
                break l;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break l;
            }
            K = void 0;
          }
        else
          Fa ? Kf(l, a) && (K = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (K = "onCompositionStart");
        K && (Zf && a.locale !== "ko" && (Fa || K !== "onCompositionStart" ? K === "onCompositionEnd" && Fa && (j = Yf()) : (Ft = v, ni = "value" in Ft ? Ft.value : Ft.textContent, Fa = !0)), M = Tn(r, K), 0 < M.length && (K = new Xf(
          K,
          l,
          null,
          a,
          v
        ), S.push({ event: K, listeners: M }), j ? K.data = j : (j = Jf(a), j !== null && (K.data = j)))), (j = bm ? pm(l, a) : Sm(l, a)) && (K = Tn(r, "onBeforeInput"), 0 < K.length && (M = new Xf(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          v
        ), S.push({
          event: M,
          listeners: K
        }), M.data = j)), s1(
          S,
          l,
          r,
          a,
          v
        );
      }
      xs(S, t);
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
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ne(l, a), u != null && e.unshift(
        su(l, u, n)
      ), u = Ne(l, t), u != null && e.push(
        su(l, u, n)
      )), l.tag === 3) return e;
      l = l.return;
    }
    return [];
  }
  function y1(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Hs(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a, f = c.alternate, r = c.stateNode;
      if (c = c.tag, f !== null && f === e) break;
      c !== 5 && c !== 26 && c !== 27 || r === null || (f = r, u ? (r = Ne(a, n), r != null && i.unshift(
        su(a, r, f)
      )) : u || (r = Ne(a, n), r != null && i.push(
        su(a, r, f)
      ))), a = a.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var h1 = /\r\n?/g, v1 = /\u0000|\uFFFD/g;
  function Rs(l) {
    return (typeof l == "string" ? l : "" + l).replace(h1, `
`).replace(v1, "");
  }
  function Bs(l, t) {
    return t = Rs(t), Rs(l) === t;
  }
  function ul(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string" ? t === "body" || t === "textarea" && e === "" || Wa(l, e) : (typeof e == "number" || typeof e == "bigint") && t !== "body" && Wa(l, "" + e);
        break;
      case "className":
        Mu(l, "class", e);
        break;
      case "tabIndex":
        Mu(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Mu(l, a, e);
        break;
      case "style":
        Rf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Mu(l, "data", e);
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
          typeof n == "function" && (a === "formAction" ? (t !== "input" && ul(l, t, "name", u.name, u, null), ul(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), ul(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), ul(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (ul(l, t, "encType", u.encType, u, null), ul(l, t, "method", u.method, u, null), ul(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Uu("" + e), l.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (l.onclick = xt);
        break;
      case "onScroll":
        e != null && Z("scroll", l);
        break;
      case "onScrollEnd":
        e != null && Z("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(y(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(y(60));
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
        Z("beforetoggle", l), Z("toggle", l), Du(l, "popover", e);
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
        Du(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = K0.get(a) || a, Du(l, a, e));
    }
  }
  function Xc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Rf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(y(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(y(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string" ? Wa(l, e) : (typeof e == "number" || typeof e == "bigint") && Wa(l, "" + e);
        break;
      case "onScroll":
        e != null && Z("scroll", l);
        break;
      case "onScrollEnd":
        e != null && Z("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = xt);
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
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), n = l[Ll] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof e == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, e, u);
              break l;
            }
            a in l ? l[a] = e : e === !0 ? l.setAttribute(a, "") : Du(l, a, e);
          }
    }
  }
  function Bl(l, t, a) {
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
        Z("error", l), Z("load", l);
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
                  throw Error(y(137, t));
                default:
                  ul(l, t, n, i, a, null);
              }
          }
        u && ul(l, t, "srcSet", a.srcSet, a, null), e && ul(l, t, "src", a.src, a, null);
        return;
      case "input":
        Z("invalid", l);
        var c = n = i = u = null, f = null, r = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var v = a[e];
            if (v != null)
              switch (e) {
                case "name":
                  u = v;
                  break;
                case "type":
                  i = v;
                  break;
                case "checked":
                  f = v;
                  break;
                case "defaultChecked":
                  r = v;
                  break;
                case "value":
                  n = v;
                  break;
                case "defaultValue":
                  c = v;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (v != null)
                    throw Error(y(137, t));
                  break;
                default:
                  ul(l, t, e, v, a, null);
              }
          }
        Uf(
          l,
          n,
          c,
          f,
          r,
          i,
          u,
          !1
        );
        return;
      case "select":
        Z("invalid", l), e = i = n = null;
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
                ul(l, t, u, c, a, null);
            }
        t = n, a = i, l.multiple = !!e, t != null ? wa(l, !!e, t, !1) : a != null && wa(l, !!e, a, !0);
        return;
      case "textarea":
        Z("invalid", l), n = u = e = null;
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
                if (c != null) throw Error(y(91));
                break;
              default:
                ul(l, t, i, c, a, null);
            }
        Nf(l, e, u, n);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && (e = a[f], e != null))
            switch (f) {
              case "selected":
                l.selected = e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                ul(l, t, f, e, a, null);
            }
        return;
      case "dialog":
        Z("beforetoggle", l), Z("toggle", l), Z("cancel", l), Z("close", l);
        break;
      case "iframe":
      case "object":
        Z("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < du.length; e++)
          Z(du[e], l);
        break;
      case "image":
        Z("error", l), Z("load", l);
        break;
      case "details":
        Z("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Z("error", l), Z("load", l);
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
          if (a.hasOwnProperty(r) && (e = a[r], e != null))
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(y(137, t));
              default:
                ul(l, t, r, e, a, null);
            }
        return;
      default:
        if (li(t)) {
          for (v in a)
            a.hasOwnProperty(v) && (e = a[v], e !== void 0 && Xc(
              l,
              t,
              v,
              e,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (e = a[c], e != null && ul(l, t, c, e, a, null));
  }
  function b1(l, t, a, e) {
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
        var u = null, n = null, i = null, c = null, f = null, r = null, v = null;
        for (h in a) {
          var S = a[h];
          if (a.hasOwnProperty(h) && S != null)
            switch (h) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = S;
              default:
                e.hasOwnProperty(h) || ul(l, t, h, null, e, S);
            }
        }
        for (var g in e) {
          var h = e[g];
          if (S = a[g], e.hasOwnProperty(g) && (h != null || S != null))
            switch (g) {
              case "type":
                n = h;
                break;
              case "name":
                u = h;
                break;
              case "checked":
                r = h;
                break;
              case "defaultChecked":
                v = h;
                break;
              case "value":
                i = h;
                break;
              case "defaultValue":
                c = h;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(y(137, t));
                break;
              default:
                h !== S && ul(
                  l,
                  t,
                  g,
                  h,
                  e,
                  S
                );
            }
        }
        In(
          l,
          i,
          c,
          f,
          r,
          v,
          n,
          u
        );
        return;
      case "select":
        h = i = c = g = null;
        for (n in a)
          if (f = a[n], a.hasOwnProperty(n) && f != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                h = f;
              default:
                e.hasOwnProperty(n) || ul(
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
                g = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && ul(
                  l,
                  t,
                  u,
                  n,
                  e,
                  f
                );
            }
        t = c, a = i, e = h, g != null ? wa(l, !!a, g, !1) : !!e != !!a && (t != null ? wa(l, !!a, t, !0) : wa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        h = g = null;
        for (c in a)
          if (u = a[c], a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                ul(l, t, c, null, e, u);
            }
        for (i in e)
          if (u = e[i], n = a[i], e.hasOwnProperty(i) && (u != null || n != null))
            switch (i) {
              case "value":
                g = u;
                break;
              case "defaultValue":
                h = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(y(91));
                break;
              default:
                u !== n && ul(l, t, i, u, e, n);
            }
        xf(l, g, h);
        return;
      case "option":
        for (var C in a)
          if (g = a[C], a.hasOwnProperty(C) && g != null && !e.hasOwnProperty(C))
            switch (C) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ul(
                  l,
                  t,
                  C,
                  null,
                  e,
                  g
                );
            }
        for (f in e)
          if (g = e[f], h = a[f], e.hasOwnProperty(f) && g !== h && (g != null || h != null))
            switch (f) {
              case "selected":
                l.selected = g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                ul(
                  l,
                  t,
                  f,
                  g,
                  e,
                  h
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
          g = a[N], a.hasOwnProperty(N) && g != null && !e.hasOwnProperty(N) && ul(l, t, N, null, e, g);
        for (r in e)
          if (g = e[r], h = a[r], e.hasOwnProperty(r) && g !== h && (g != null || h != null))
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(y(137, t));
                break;
              default:
                ul(
                  l,
                  t,
                  r,
                  g,
                  e,
                  h
                );
            }
        return;
      default:
        if (li(t)) {
          for (var nl in a)
            g = a[nl], a.hasOwnProperty(nl) && g !== void 0 && !e.hasOwnProperty(nl) && Xc(
              l,
              t,
              nl,
              void 0,
              e,
              g
            );
          for (v in e)
            g = e[v], h = a[v], !e.hasOwnProperty(v) || g === h || g === void 0 && h === void 0 || Xc(
              l,
              t,
              v,
              g,
              e,
              h
            );
          return;
        }
    }
    for (var s in a)
      g = a[s], a.hasOwnProperty(s) && g != null && !e.hasOwnProperty(s) && ul(l, t, s, null, e, g);
    for (S in e)
      g = e[S], h = a[S], !e.hasOwnProperty(S) || g === h || g == null && h == null || ul(l, t, S, g, e, h);
  }
  function qs(l) {
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
        if (n && c && qs(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e], r = f.startTime;
            if (r > c) break;
            var v = f.transferSize, S = f.initiatorType;
            v && qs(S) && (f = f.responseEnd, i += v * (f < c ? 1 : (c - r) / (f - r)));
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
  function Ys(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function js(l, t) {
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
  function S1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Lc ? !1 : (Lc = l, !0) : (Lc = null, !1);
  }
  var Gs = typeof setTimeout == "function" ? setTimeout : void 0, A1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Xs = typeof Promise == "function" ? Promise : void 0, z1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xs < "u" ? function(l) {
    return Xs.resolve(null).then(l).catch(E1);
  } : Gs;
  function E1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ga(l) {
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
  function _1(l, t, a, e) {
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
  function T1(l, t, a) {
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
  function C1(l, t) {
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
        if (l = t.documentElement, !l) throw Error(y(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(y(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(y(454));
        return l;
      default:
        throw Error(y(451));
    }
  }
  function mu(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    $n(l);
  }
  var vt = /* @__PURE__ */ new Map(), ws = /* @__PURE__ */ new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var wt = _.d;
  _.d = {
    f: D1,
    r: M1,
    D: O1,
    C: U1,
    L: x1,
    m: N1,
    X: R1,
    S: H1,
    M: B1
  };
  function D1() {
    var l = wt.f(), t = bn();
    return l || t;
  }
  function M1(l) {
    var t = La(l);
    t !== null && t.tag === 5 && t.type === "form" ? dd(t) : wt.r(l);
  }
  var ze = typeof document > "u" ? null : document;
  function Ws(l, t, a) {
    var e = ze;
    if (e && typeof t == "string" && t) {
      var u = ot(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), ws.has(u) || (ws.add(u), l = { rel: l, crossOrigin: a, href: t }, e.querySelector(u) === null && (t = e.createElement("link"), Bl(t, "link", l), Dl(t), e.head.appendChild(t)));
    }
  }
  function O1(l) {
    wt.D(l), Ws("dns-prefetch", l, null);
  }
  function U1(l, t) {
    wt.C(l, t), Ws("preconnect", l, t);
  }
  function x1(l, t, a) {
    wt.L(l, t, a);
    var e = ze;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + ot(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + ot(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + ot(
        a.imageSizes
      ) + '"]')) : u += '[href="' + ot(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = Ee(l);
          break;
        case "script":
          n = _e(l);
      }
      vt.has(n) || (l = U(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), vt.set(n, l), e.querySelector(u) !== null || t === "style" && e.querySelector(ru(n)) || t === "script" && e.querySelector(gu(n)) || (t = e.createElement("link"), Bl(t, "link", l), Dl(t), e.head.appendChild(t)));
    }
  }
  function N1(l, t) {
    wt.m(l, t);
    var a = ze;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + ot(e) + '"][href="' + ot(l) + '"]', n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _e(l);
      }
      if (!vt.has(n) && (l = U({ rel: "modulepreload", href: l }, t), vt.set(n, l), a.querySelector(u) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(gu(n)))
              return;
        }
        e = a.createElement("link"), Bl(e, "link", l), Dl(e), a.head.appendChild(e);
      }
    }
  }
  function H1(l, t, a) {
    wt.S(l, t, a);
    var e = ze;
    if (e && l) {
      var u = Ka(e).hoistableStyles, n = Ee(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = e.querySelector(
          ru(n)
        ))
          c.loading = 5;
        else {
          l = U(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = vt.get(n)) && kc(l, a);
          var f = i = e.createElement("link");
          Dl(f), Bl(f, "link", l), f._p = new Promise(function(r, v) {
            f.onload = r, f.onerror = v;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Mn(i, t, e);
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
  function R1(l, t) {
    wt.X(l, t);
    var a = ze;
    if (a && l) {
      var e = Ka(a).hoistableScripts, u = _e(l), n = e.get(u);
      n || (n = a.querySelector(gu(u)), n || (l = U({ src: l, async: !0 }, t), (t = vt.get(u)) && $c(l, t), n = a.createElement("script"), Dl(n), Bl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function B1(l, t) {
    wt.M(l, t);
    var a = ze;
    if (a && l) {
      var e = Ka(a).hoistableScripts, u = _e(l), n = e.get(u);
      n || (n = a.querySelector(gu(u)), n || (l = U({ src: l, async: !0, type: "module" }, t), (t = vt.get(u)) && $c(l, t), n = a.createElement("script"), Dl(n), Bl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function ks(l, t, a, e) {
    var u = (u = X.current) ? Dn(u) : null;
    if (!u) throw Error(y(446));
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
            ru(l)
          )) && !n._p && (i.instance = n, i.state.loading = 5), vt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, vt.set(l, a), n || q1(
            u,
            l,
            a,
            i.state
          ))), t && e === null)
            throw Error(y(528, ""));
          return i;
        }
        if (t && e !== null)
          throw Error(y(529, ""));
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
        throw Error(y(444, l));
    }
  }
  function Ee(l) {
    return 'href="' + ot(l) + '"';
  }
  function ru(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function $s(l) {
    return U({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function q1(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? e.loading = 1 : (t = l.createElement("link"), e.preload = t, t.addEventListener("load", function() {
      return e.loading |= 1;
    }), t.addEventListener("error", function() {
      return e.loading |= 2;
    }), Bl(t, "link", a), Dl(t), l.head.appendChild(t));
  }
  function _e(l) {
    return '[src="' + ot(l) + '"]';
  }
  function gu(l) {
    return "script[async]" + l;
  }
  function Fs(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var e = l.querySelector(
            'style[data-href~="' + ot(a.href) + '"]'
          );
          if (e)
            return t.instance = e, Dl(e), e;
          var u = U({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return e = (l.ownerDocument || l).createElement(
            "style"
          ), Dl(e), Bl(e, "style", u), Mn(e, a.precedence, l), t.instance = e;
        case "stylesheet":
          u = Ee(a.href);
          var n = l.querySelector(
            ru(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Dl(n), n;
          e = $s(a), (u = vt.get(u)) && kc(e, u), n = (l.ownerDocument || l).createElement("link"), Dl(n);
          var i = n;
          return i._p = new Promise(function(c, f) {
            i.onload = c, i.onerror = f;
          }), Bl(n, "link", e), t.state.loading |= 4, Mn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = _e(a.src), (u = l.querySelector(
            gu(n)
          )) ? (t.instance = u, Dl(u), u) : (e = a, (u = vt.get(n)) && (e = U({}, a), $c(e, u)), l = l.ownerDocument || l, u = l.createElement("script"), Dl(u), Bl(u, "link", e), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(y(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, Mn(e, a.precedence, l));
    return t.instance;
  }
  function Mn(l, t, a) {
    for (var e = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = e.length ? e[e.length - 1] : null, n = u, i = 0; i < e.length; i++) {
      var c = e[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function kc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function $c(l, t) {
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
      if (!(n[Ue] || n[xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function Y1(l, t, a) {
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
  function l0(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function j1(l, t, a, e) {
    if (a.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = Ee(e.href), n = t.querySelector(
          ru(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Un.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, Dl(n);
          return;
        }
        n = t.ownerDocument || t, e = $s(e), (u = vt.get(u)) && kc(e, u), n = n.createElement("link"), Dl(n);
        var i = n;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Bl(n, "link", e), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Un.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Fc = 0;
  function G1(l, t) {
    return l.stylesheets && l.count === 0 && Nn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var e = setTimeout(function() {
        if (l.stylesheets && Nn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Fc === 0 && (Fc = 62500 * p1());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Nn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Fc ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(e), clearTimeout(u);
      };
    } : null;
  }
  function Un() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Nn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var xn = null;
  function Nn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, xn = /* @__PURE__ */ new Map(), t.forEach(X1, l), xn = null, Un.call(l));
  }
  function X1(l, t) {
    if (!(t.state.loading & 4)) {
      var a = xn.get(l);
      if (a) var e = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), xn.set(l, a);
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
  var yu = {
    $$typeof: ql,
    Provider: null,
    Consumer: null,
    _currentValue: H,
    _currentValue2: H,
    _threadCount: 0
  };
  function Q1(l, t, a, e, u, n, i, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jn(0), this.hiddenUpdates = Jn(null), this.identifierPrefix = e, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function t0(l, t, a, e, u, n, i, c, f, r, v, S) {
    return l = new Q1(
      l,
      t,
      a,
      i,
      f,
      r,
      v,
      S,
      c
    ), t = 1, n === !0 && (t |= 24), n = tt(3, null, null, t), l.current = n, n.stateNode = l, t = Ui(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: e,
      isDehydrated: a,
      cache: t
    }, Ri(n), l;
  }
  function a0(l) {
    return l ? (l = te, l) : te;
  }
  function e0(l, t, a, e, u, n) {
    u = a0(u), e.context === null ? e.context = u : e.pendingContext = u, e = ea(t), e.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (e.callback = n), a = ua(l, e, t), a !== null && ($l(a, l, t), we(a, l, t));
  }
  function u0(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ic(l, t) {
    u0(l, t), (l = l.alternate) && u0(l, t);
  }
  function n0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Da(l, 67108864);
      t !== null && $l(t, l, 67108864), Ic(l, 67108864);
    }
  }
  function i0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = it();
      t = wn(t);
      var a = Da(l, t);
      a !== null && $l(a, l, t), Ic(l, t);
    }
  }
  var Hn = !0;
  function Z1(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = _.p;
    try {
      _.p = 2, Pc(l, t, a, e);
    } finally {
      _.p = n, b.T = u;
    }
  }
  function V1(l, t, a, e) {
    var u = b.T;
    b.T = null;
    var n = _.p;
    try {
      _.p = 8, Pc(l, t, a, e);
    } finally {
      _.p = n, b.T = u;
    }
  }
  function Pc(l, t, a, e) {
    if (Hn) {
      var u = lf(e);
      if (u === null)
        Gc(
          l,
          t,
          e,
          Rn,
          a
        ), f0(l, e);
      else if (K1(
        u,
        l,
        t,
        a,
        e
      ))
        e.stopPropagation();
      else if (f0(l, e), t & 4 && -1 < L1.indexOf(l)) {
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
                      var f = 1 << 31 - Pl(i);
                      c.entanglements[1] |= f, i &= ~f;
                    }
                    Mt(n), (I & 6) === 0 && (hn = Fl() + 500, ou(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Da(n, 2), c !== null && $l(c, n, 2), bn(), Ic(n, 2);
            }
          if (n = lf(e), n === null && Gc(
            l,
            t,
            e,
            Rn,
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
  var Rn = null;
  function tf(l) {
    if (Rn = null, l = Va(l), l !== null) {
      var t = ol(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = hl(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = rl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rn = l, null;
  }
  function c0(l) {
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
        switch (O0()) {
          case gf:
            return 2;
          case yf:
            return 8;
          case zu:
          case U0:
            return 32;
          case hf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var af = !1, ya = null, ha = null, va = null, hu = /* @__PURE__ */ new Map(), vu = /* @__PURE__ */ new Map(), ba = [], L1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function f0(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ya = null;
        break;
      case "dragenter":
      case "dragleave":
        ha = null;
        break;
      case "mouseover":
      case "mouseout":
        va = null;
        break;
      case "pointerover":
      case "pointerout":
        hu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vu.delete(t.pointerId);
    }
  }
  function bu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: e,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = La(t), t !== null && n0(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function K1(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ya = bu(
          ya,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "dragenter":
        return ha = bu(
          ha,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "mouseover":
        return va = bu(
          va,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return hu.set(
          n,
          bu(
            hu.get(n) || null,
            l,
            t,
            a,
            e,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, vu.set(
          n,
          bu(
            vu.get(n) || null,
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
  function o0(l) {
    var t = Va(l.target);
    if (t !== null) {
      var a = ol(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = hl(a), t !== null) {
            l.blockedOn = t, zf(l.priority, function() {
              i0(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = rl(a), t !== null) {
            l.blockedOn = t, zf(l.priority, function() {
              i0(a);
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
        var e = new a.constructor(
          a.type,
          a
        );
        ti = e, a.target.dispatchEvent(e), ti = null;
      } else
        return t = La(a), t !== null && n0(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function d0(l, t, a) {
    Bn(l) && a.delete(t);
  }
  function J1() {
    af = !1, ya !== null && Bn(ya) && (ya = null), ha !== null && Bn(ha) && (ha = null), va !== null && Bn(va) && (va = null), hu.forEach(d0), vu.forEach(d0);
  }
  function qn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, af || (af = !0, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      J1
    )));
  }
  var Yn = null;
  function s0(l) {
    Yn !== l && (Yn = l, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      function() {
        Yn === l && (Yn = null);
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
      return qn(f, l);
    }
    ya !== null && qn(ya, l), ha !== null && qn(ha, l), va !== null && qn(va, l), hu.forEach(t), vu.forEach(t);
    for (var a = 0; a < ba.length; a++) {
      var e = ba[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < ba.length && (a = ba[0], a.blockedOn === null); )
      o0(a), a.blockedOn === null && ba.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (e = 0; e < a.length; e += 3) {
        var u = a[e], n = a[e + 1], i = u[Ll] || null;
        if (typeof n == "function")
          i || s0(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, i = n[Ll] || null)
              c = i.formAction;
            else if (tf(u) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? a[e + 1] = c : (a.splice(e, 3), e -= 3), s0(a);
        }
      }
  }
  function m0() {
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
  jn.prototype.render = ef.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(y(409));
    var a = t.current, e = it();
    e0(a, e, l, t, null, null);
  }, jn.prototype.unmount = ef.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      e0(l.current, 2, null, l, null, null), bn(), t[Za] = null;
    }
  };
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Af();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ba.length && t !== 0 && t < ba[a].priority; a++) ;
      ba.splice(a, 0, l), a === 0 && o0(l);
    }
  };
  var r0 = W.version;
  if (r0 !== "19.2.5")
    throw Error(
      y(
        527,
        r0,
        "19.2.5"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(y(188)) : (l = Object.keys(l).join(","), Error(y(268, l)));
    return l = z(t), l = l !== null ? Y(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var w1 = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.5"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        De = Gn.inject(
          w1
        ), Il = Gn;
      } catch {
      }
  }
  return Su.createRoot = function(l, t) {
    if (!il(l)) throw Error(y(299));
    var a = !1, e = "", u = Sd, n = Ad, i = zd;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = t0(
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
      m0
    ), l[Za] = t.current, jc(l), new ef(t);
  }, Su.hydrateRoot = function(l, t, a) {
    if (!il(l)) throw Error(y(299));
    var e = !1, u = "", n = Sd, i = Ad, c = zd, f = null;
    return a != null && (a.unstable_strictMode === !0 && (e = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (f = a.formState)), t = t0(
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
      m0
    ), t.context = a0(null), a = t.current, e = it(), e = wn(e), u = ea(e), u.callback = null, ua(a, u, e), a = e, t.current.lanes = a, Oe(t, a), Mt(t), l[Za] = t.current, jc(l), new jn(t);
  }, Su.version = "19.2.5", Su;
}
var E0;
function ur() {
  if (E0) return nf.exports;
  E0 = 1;
  function E() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (W) {
        console.error(W);
      }
  }
  return E(), nf.exports = er(), nf.exports;
}
var nr = ur(), Xa = sf();
const ir = {
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
      topicsCount: 139
    },
    {
      id: 29,
      name: "Stock",
      description: "Connect with creators in the official Stock community.",
      image: "9185faa3-3726-4a26-9918-2bb6fd4781ef_thumb.png",
      topicsCount: 91
    },
    {
      id: 39,
      name: "Substance 3D Assets and Community Assets",
      description: "Connect with other Substance 3D Assets users.",
      image: "216d6283-2dd7-46d3-948e-7f854bb57c28_thumb.png",
      topicsCount: 13
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
      topicsCount: 156
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
      topicsCount: 328
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
      topicsCount: 55
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
      topicsCount: 1
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
      topicsCount: 2542
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
      topicsCount: 5
    },
    {
      id: 518,
      name: "Adobe Substance 3D Viewer (Beta)",
      description: "Adobe Substance 3D Viewer (Beta)",
      image: "4ff6d513-86f2-41de-9105-324a988b51c4_thumb.png",
      topicsCount: 18
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
      topicsCount: 1408
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
      topicsCount: 471
    },
    {
      id: 560,
      name: "Camera Raw",
      description: "Connect with our global Camera Raw Community.",
      image: "289afd99-bfca-41e0-92e1-2d848749a8b4_thumb.png",
      topicsCount: 226
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
      topicsCount: 482
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
      topicsCount: 55
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
      topicsCount: 1682
    },
    {
      id: 677,
      name: "Lightroom ecosystem (Cloud-based)",
      description: "Get the most out of Lightroom with our community.",
      image: "f892ff7c-8200-4285-a2b1-d00080938616_thumb.png",
      topicsCount: 1349
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
      topicsCount: 3183
    },
    {
      id: 726,
      name: "Adobe Premiere",
      description: "Adobe Premiere community: Connect, Learn, Feedback, Help.",
      image: "c670f908-3c95-4736-8284-564c24a6603d_thumb.png",
      topicsCount: 3932
    },
    {
      id: 738,
      name: "Project Neo (beta)",
      description: "Neo is a web-based platform that simplifies the creation of dimensional logos, icons and infographics, eliminating the need to make manual calculations to draw in the right perspective. Neo’s intuitive interface speeds graphic design work in a familiar workflow, making it easy for designers to bring dimension into their projects effortlessly.",
      image: "9706fb46-f375-4e3e-aa0d-407b19c1e857_thumb.png",
      topicsCount: 14
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
      topicsCount: 5
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
      topicsCount: 3
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
}, T0 = ir.categories;
function cr({ category: E, showThumbnail: W, onSelect: G, isSelected: y }) {
  return /* @__PURE__ */ V.jsxs(
    "button",
    {
      className: `category-card ${y ? "selected" : ""}`,
      onClick: () => G == null ? void 0 : G(E.id),
      type: "button",
      children: [
        W && E.image && /* @__PURE__ */ V.jsx("div", { className: "category-thumbnail", children: /* @__PURE__ */ V.jsx(
          "img",
          {
            src: "https://uploads-us-west-2.insided.com/adobedme-en/attachment/" + E.image,
            alt: E.name,
            loading: "lazy",
            onError: (il) => {
              il.currentTarget.style.display = "none";
            }
          }
        ) }),
        /* @__PURE__ */ V.jsxs("div", { className: "category-content", children: [
          /* @__PURE__ */ V.jsx("h3", { className: "category-name", children: E.name }),
          E.description && /* @__PURE__ */ V.jsx("p", { className: "category-description", children: E.description }),
          /* @__PURE__ */ V.jsxs("span", { className: "category-topics-count", children: [
            E.topicsCount,
            /* @__PURE__ */ V.jsxs("span", { className: "topics-label", children: [
              " ",
              E.topicsCount === 1 ? "idea" : "ideas"
            ] })
          ] })
        ] })
      ]
    },
    E.id
  );
}
function fr({
  columns: E = 5,
  sortBy: W = "name",
  maxItems: G,
  showThumbnails: y = !1,
  emptyMessage: il = "No categories available",
  categories: ol,
  onSelect: hl,
  selectedId: rl
}) {
  const O = Xa.useMemo(() => {
    const Y = [...ol || T0];
    return W === "name" ? Y.sort((U, k) => U.name.localeCompare(k.name)) : W === "topicsCount" ? Y.sort((U, k) => k.topicsCount - U.topicsCount) : W === "name_reverse" && Y.sort((U, k) => k.name.localeCompare(U.name)), G ? Y.slice(0, G) : Y;
  }, [W, G, ol]);
  return O.length === 0 ? /* @__PURE__ */ V.jsx("div", { className: "category-list-empty", children: /* @__PURE__ */ V.jsx("p", { children: il }) }) : /* @__PURE__ */ V.jsx(
    "div",
    {
      className: "categories-grid",
      style: {
        "--grid-columns": E
      },
      children: O.map((z) => /* @__PURE__ */ V.jsx(
        cr,
        {
          category: z,
          showThumbnail: y,
          onSelect: hl,
          isSelected: rl === z.id
        },
        z.id
      ))
    }
  );
}
function or({ sdk: E }) {
  const [W, G] = Xa.useState(E.getProps()), [y, il] = Xa.useState(), [ol, hl] = Xa.useState("topicsCount"), [rl, O] = Xa.useState(""), z = Xa.useMemo(() => {
    var Cl;
    const U = (((Cl = window.inSidedData) == null ? void 0 : Cl.language) || "en").substring(0, 2);
    console.log("Detected language code:", U);
    const k = (categorySectionMap == null ? void 0 : categorySectionMap[U]) || (categorySectionMap == null ? void 0 : categorySectionMap.en) || {}, Ol = /* @__PURE__ */ new Set();
    Object.values(k).forEach((jl) => {
      jl.forEach((Ul) => Ol.add(Ul));
    }), console.log("Valid categories for language:", Array.from(Ol));
    let Tl = T0.filter(
      (jl) => Ol.has(jl.name)
    );
    if (rl.trim()) {
      const jl = rl.toLowerCase();
      Tl = Tl.filter(
        (Ul) => Ul.name.toLowerCase().includes(jl)
      );
    }
    return Tl;
  }, [rl]);
  return Xa.useEffect(() => E.on("propsChanged", G), [E]), /* @__PURE__ */ V.jsx("section", { className: "community-selector-widget", children: /* @__PURE__ */ V.jsxs("div", { className: "widget-content-wrapper", children: [
    /* @__PURE__ */ V.jsxs("div", { className: "widget-content-header", children: [
      /* @__PURE__ */ V.jsx("h2", { className: "widget-content-title", children: "Select a Community" }),
      /* @__PURE__ */ V.jsx("p", { children: "Choose the Adobe product you’d like to request a feature for. Note that feature request isn’t available in every community — if your product isn’t listed, it may not be supported here." })
    ] }),
    /* @__PURE__ */ V.jsxs("div", { className: "widget-controls", children: [
      /* @__PURE__ */ V.jsxs("div", { className: "searchWrapper", children: [
        /* @__PURE__ */ V.jsx("span", { className: "search-icon", children: /* @__PURE__ */ V.jsx("svg", { width: "16", height: "16", viewBox: "0 0 20 20", fill: "#6e6e6e", children: /* @__PURE__ */ V.jsx("path", { d: "m18.53 17.47-5.083-5.084C14.417 11.186 15 9.66 15 8c0-3.86-3.14-7-7-7S1 4.14 1 8s3.14 7 7 7c1.66 0 3.185-.584 4.386-1.553l5.084 5.083c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.767 0-1.06M8 13.5c-3.032 0-5.5-2.468-5.5-5.5S4.968 2.5 8 2.5s5.5 2.468 5.5 5.5-2.468 5.5-5.5 5.5" }) }) }),
        /* @__PURE__ */ V.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search categories...",
            value: rl,
            onChange: (Y) => O(Y.target.value),
            className: "search-input"
          }
        )
      ] }),
      /* @__PURE__ */ V.jsx("div", { className: "sort-selector", children: /* @__PURE__ */ V.jsxs(
        "select",
        {
          id: "sort-dropdown",
          value: ol,
          onChange: (Y) => hl(Y.target.value),
          children: [
            /* @__PURE__ */ V.jsx("option", { value: "topicsCount", children: "Ideas Count" }),
            /* @__PURE__ */ V.jsx("option", { value: "name", children: "Alphabetical (A-Z)" }),
            /* @__PURE__ */ V.jsx("option", { value: "name_reverse", children: "Alphabetical (Z-A)" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ V.jsx("div", { className: "categories-container", children: /* @__PURE__ */ V.jsx(
      fr,
      {
        categories: z,
        showThumbnails: !0,
        sortBy: ol,
        emptyMessage: "No categories with ideas enabled found",
        onSelect: il,
        selectedId: y,
        columns: W.row_size
      }
    ) }),
    /* @__PURE__ */ V.jsxs("div", { className: "widget-footer", children: [
      /* @__PURE__ */ V.jsx("button", { className: "cancel", onClick: () => {
        history.length > 1 ? history.back() : window.location.href = "/";
      }, children: "Cancel" }),
      /* @__PURE__ */ V.jsx("button", { disabled: !y, className: "continue", children: "Continue" })
    ] }),
    y && /* @__PURE__ */ V.jsx("div", { className: "selected-category-info", children: /* @__PURE__ */ V.jsxs("p", { children: [
      "Selected Category ID: ",
      /* @__PURE__ */ V.jsx("strong", { children: y })
    ] }) })
  ] }) });
}
let dr = F1;
const _0 = /* @__PURE__ */ new Set();
async function sr(E) {
  await E.whenReady();
  const W = document.createElement("style");
  W.textContent = dr, _0.add(W), E.shadowRoot.insertBefore(W, E.shadowRoot.firstChild);
  const G = nr.createRoot(E.getContainer());
  G.render(/* @__PURE__ */ V.jsx(or, { sdk: E })), E.on("destroy", () => {
    _0.delete(W), W.remove(), G.unmount();
  });
}
export {
  sr as init
};
